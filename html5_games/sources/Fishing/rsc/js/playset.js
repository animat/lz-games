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
Lgz.Cloud = function (playSet) {
    'use strict';
    
    var thisObj, world, randX, randY, frame, idx;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
    world = this.game.world;

    randX = thisObj.game.rnd.integerInRange(-50, 800);
    randY = thisObj.game.rnd.integerInRange(0, 190);
    
    idx = thisObj.game.rnd.integerInRange(1, 3);
    frame  = 'cloud'  + idx;
    Phaser.Sprite.call(this, this.game, randX, randY, 'clouds', frame);
    this.game.add.existing(this);
    
    this.game.physics.enable(thisObj, Phaser.Physics.ARCADE);    
    this.body.velocity.x = -thisObj.game.rnd.integerInRange(5, 50);
    this.anchor.setTo(0.5, 0.5);
    
};
LgzLib.inherit(Lgz.Cloud, Phaser.Sprite);
Lgz.Cloud.prototype.update = function ()  {
    if (this.x < -100) {
        this.x = 1000;
    }
 
};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, fishArr;
    
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;

    thisObj.fishArr = []; 
    thisObj.nodeIdx = 0;


    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAtlas('fishes');
        thisObj.lgzMgr.rscAtlas('fishes_active');
        thisObj.lgzMgr.rscImage('blue');
        thisObj.lgzMgr.rscImage('mainfg');        
        thisObj.lgzMgr.rscImage('basketfg');
        thisObj.lgzMgr.rscAtlas('clouds');        

        thisObj.lgzMgr.rscSpriteSheet('penguin_crying', 265, 370);
        thisObj.lgzMgr.rscSpriteSheet('penguin_catching', 480, 410);        
        thisObj.lgzMgr.rscSpriteSheet('happy_penguin', 80, 155);        
        thisObj.lgzMgr.rscAudio('sfx', true); 
    }
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
            fish  = new Lgz.Fish(thisObj,  text, i);
            this.fishArr.push(fish);

        }
        
        this.fishRemaining = nodeCount;
    };
    thisObj.createClouds = function ()  {
        var cloud, i, max;
        thisObj.cloudArr = [];
        max = thisObj.game.rnd.integerInRange(10, 30);
        for (i = 0; i < max; i += 1) {
            cloud = new Lgz.Cloud(thisObj);
            thisObj.cloudArr.push(cloud);
        }
            

        
    };    
    thisObj.createFg = function ()  {
        thisObj.spriteBlue = thisObj.game.add.sprite(0, 240, 'blue');
        thisObj.spriteMainFg = thisObj.game.add.sprite(-100, 170, 'mainfg');
        thisObj.spriteBasket = thisObj.game.add.sprite(-7, 340, 'basketfg');        
    };
    thisObj.createPenguin = function ()  {
        //todo: penguin should really be in its own file and class/constructor
        var anim;

        anim = {};
        thisObj.spritePen = thisObj.game.add.sprite(30, 35, 'penguin_crying', 28);

        thisObj.spritePenCatch = thisObj.game.add.sprite(25, -15, 'penguin_catching',0);       
        thisObj.spritePenCatch.visible = false;
        
        thisObj.spritePenHappy = thisObj.game.add.sprite(50, 50, 'happy_penguin',0);       
        thisObj.spritePenHappy.visible = false;
 
        anim.fishing = thisObj.spritePen.animations.add(
                'fishing',
                [28, 29, 30, 29],
                false,
                false);
        anim.missed = thisObj.spritePen.animations.add(
                'missed',
                [1, 3, 7, 8, 9, 11, 13, 11, 9, 7, 3, 1],
                false,
                false);                 
        anim.crying = thisObj.spritePen.animations.add(
                'crying',
                [30, 31, 30, 31],
                false,
                false);     
         
        thisObj.spritePen.animations.play('fishing', 5, true);
 
        anim.catching = thisObj.spritePenCatch.animations.add(
                'catching',
                [0, 1, 2, 3, 4, 5],
                false,
                false);  

        anim.catching.onComplete.add (
                    function() { thisObj.fishing();}
                );   
        
        anim.happy = thisObj.spritePenHappy.animations.add(
                'happy',
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                false,
                false);         
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
    thisObj.create = function () {

        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        
        thisObj.game.physics.startSystem(Phaser.Physics.ARCADE);
        //note: extend world bounds 200px past either side to allow fish to pass from view
        thisObj.game.physics.arcade.setBounds(-200, 270, 1040, 200);
        
        thisObj.nm.reset();
        thisObj.createClouds();        
        thisObj.createFish();
        
        thisObj.spriteInBasket = thisObj.game.add.sprite(10, 315, 'dot');
        thisObj.game.physics.enable(thisObj.spriteInBasket, Phaser.Physics.ARCADE);
        thisObj.spriteInBasket.body.static = true;
        thisObj.spriteInBasket.body.immovable = true;
        thisObj.spriteInBasket.body.bounce.set(0);

   
        thisObj.createFg();
        thisObj.createPenguin(); 
        thisObj.spriteHook = thisObj.game.add.sprite(250, 400, 'dot');
        thisObj.game.physics.enable(thisObj.spriteHook, Phaser.Physics.ARCADE);
        thisObj.spriteHook.body.static = true;
        thisObj.spriteHook.body.immovable = true;
        thisObj.spriteHook.body.bounce.set(0);
        
        
        
        thisObj.spriteMidPoint = thisObj.game.add.sprite(180, -50, 'dot');
        thisObj.game.physics.enable(thisObj.spriteMidPoint, Phaser.Physics.ARCADE);
        thisObj.spriteMidPoint.body.static = true;
        thisObj.spriteMidPoint.body.immovable = true;
        
        thisObj.load();
    };
    thisObj.fishing = function() {
        thisObj.spritePen.visible = true;
        thisObj.spritePenCatch.visible = false; 
        thisObj.spritePen.animations.play('fishing', 5, true);  
    };        
    thisObj.caught = function () {
        thisObj.playSound('catch'); 
        thisObj.spritePen.visible = false;
        thisObj.spritePenCatch.visible = true;
        thisObj.spritePenCatch.animations.play('catching', 5, false);         
    };
    thisObj.crying = function() {
        thisObj.spritePen.animations.play('crying', 5, true);
        window.setTimeout(
            function () {
                thisObj.fishing();
            },
            2000
        );        
    }; 
    thisObj.missed = function() {
        thisObj.playSound('miss');        
        thisObj.spritePen.animations.play('missed', 5, false);

        window.setTimeout(
            function () {
                thisObj.crying();
            },
            3000
        );         
    };
    thisObj.happy = function () {
        thisObj.spritePen.visible = false;        
        thisObj.spritePenHappy.visible = true;
        thisObj.spritePenHappy.animations.play('happy', 10, true);
        window.setTimeout(
            function () {
                thisObj.lgzMgr.scorePost();
                thisObj.lgzMgr.hud.winOpen('winWon'); 
            },
            3000
        );         
    };
    thisObj.next = function () {
        var rtn;
        console.debug('playSet.next: ');
        thisObj.question.display.sprite.visible = false;
 
        rtn = thisObj.nm.next();
        if (rtn) {
            thisObj.load();
        } else {
          thisObj.happy();
        }
        
    };
    thisObj.found = function () {

        console.debug('found:');
 
        this.fishRemaining -= 1;
        console.debug('found:' + this.fishRemaining);

        //note: pause before next word
        window.setTimeout(
            function () {
                thisObj.next();
            },
            2000
        );
        
    };
    thisObj.update = function () {

 
    };
    thisObj.pause = function () {
        
    };
    thisObj.resume = function () {
        
    };
};
