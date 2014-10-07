/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */

var Lgz = Lgz || {};
Lgz.PlaySet = function (mgr) {
    'use strict';

    var thisObj, fishArr;
            
    thisObj = this;

    thisObj.mgr = mgr;
    thisObj.game = mgr.game;
    thisObj.nm = mgr.nm;
    thisObj.fishArr = [];

 
    thisObj.nodeIdx = 0;

    mgr.set = thisObj; //note: for debugging only
        
    // Note: audio 'sfx' loaded in splash scene

    thisObj.sfx = thisObj.mgr.rscAudioTracks('sfx');

    thisObj.playSound = function (key, delayTO) {
        thisObj.sfx.play(key);
        window.setTimeout(
            function () {
                thisObj.sfx.play(key);
            },
            delayTO
        );
        
    };
    thisObj.shuffle  = function (text) {
        var a, n, i, j, tmp;
        a = text.split(""),
        n = a.length;

        for(i = n - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");        
    };
    thisObj.createFish = function () {
        var i, nodeCount, text, fish, randX, randY, game;
        
        game = thisObj.game;
        
        nodeCount = thisObj.nm.nodeCount();
        for (i = 0; i < nodeCount; i += 1) {

            text = thisObj.nm.node('response', i).getAttribute('content');
            //todo: verify type is 'text'
            fish  = new Lgz.Fish(thisObj,  text);
            this.fishArr.push(fish);

        }
        
        this.fishRemaining = nodeCount;
    };
    thisObj.createFg = function ()  {
        thisObj.spriteBlue = thisObj.game.add.sprite(0, 240, 'blue');
        thisObj.spriteMainFg = thisObj.game.add.sprite(-100, 170, 'mainfg');
        thisObj.spriteBasket = thisObj.game.add.sprite(-7, 340, 'basketfg');        
    };
    thisObj.createPenguin = function ()  {

        //thisObj.spritePen = thisObj.game.add.sprite(30, 105, 'penguin_fishing',0);
          
        thisObj.spritePen = thisObj.game.add.sprite(30, 35, 'penguin_crying', 28);
        thisObj.spritePenCatch = thisObj.game.add.sprite(25, -15, 'penguin_catching',0);       
        thisObj.spritePen.anim = {};
        thisObj.spritePenCatch.anim = {};
 
        thisObj.spritePen.anim.fishing = thisObj.spritePen.animations.add(
                'fishing',
                [28, 29, 30, 29],
                false,
                false);
        thisObj.spritePen.anim.crying = thisObj.spritePen.animations.add(
                'crying',
                [30, 31, 30, 31],
                false,
                false);                
        thisObj.spritePen.animations.play('fishing', 5, true);
 
        thisObj.spritePenCatch.anim.catching = thisObj.spritePenCatch.animations.add(
                'catching',
                [0, 1, 2, 3, 4, 5],
                false,
                false);  
        thisObj.spritePenCatch.visible = false;
        //thisObj.spritePenCatch.animations.play('catching', 10, true);       
       
    };     
    thisObj.onLoadOK = function () {
        var i;
        console.debug('PlaySet.onLoadOK: entered');
        thisObj.question.display.createSprite();
        thisObj.question.display.sprite.position.setTo(85, 25);
        
    };
    thisObj.load = function () {
        var question, answer, i, substext;

        thisObj.game.load.onLoadComplete.addOnce(thisObj.onLoadOK, thisObj);

        question  = {};
        question.node = thisObj.nm.getQuestion();
        question.display = new LgzLib.DisplayNode(thisObj, question.node);
        
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        answer.text = answer.node.getAttribute('content');
        //todo: in this game, we can only accept text response. need to verify
        
        thisObj.question = question;
        thisObj.answer = answer;



        thisObj.game.load.start();
        
    };
    thisObj.start = function () {

        thisObj.game.physics.startSystem(Phaser.Physics.ARCADE);
        //note: extend world bounds 200px past either side to allow fish to pass from view
        thisObj.game.physics.arcade.setBounds(-200, 270, 1040, 200);
        
        thisObj.nm.reset();
        thisObj.createFish();
        thisObj.createFg();
        thisObj.createPenguin();        
        thisObj.load();
    };
    thisObj.next = function () {
        var rtn;
  
        //thisObj.playSound('next');
        rtn = thisObj.nm.next();
        if (rtn) {
            thisObj.load();
        } else {
          Lgz.hud.winOpen('winWon');  
        }
        
    };
    thisObj._found = function () {
        var y, i;
        y = (thisObj.nm.idx * 20 ) + 120;
        console.debug('_found: y = ' + y);
        thisObj.question.display.sprite.position.setTo(10, y);
        //todo: recycle fish  sprites
        for (i = 0; i < this.fishArr.length; i += 1) {
            this.fishArr[i].kill();
 
        }          
        thisObj.next();
    }
    thisObj.found = function () {

        console.debug('found:');
        thisObj.playSound('correct');
        this.fishRemaining -= 1;
        console.debug('found:' + this.fishRemaining);
        if (thisObj.fishRemaining) {
            return;
        }
        //note: pause before next word
        window.setTimeout(
            function () {
                thisObj._found();
            },
            2000
        );
        
    };
    thisObj.update = function () {

 
    };

};
