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
    thisObj.fishBasketArr = [];


    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAudio('sfx', true);         
        thisObj.lgzMgr.rscAtlas('fish');
        thisObj.lgzMgr.rscAtlas('fish_glow');
        thisObj.lgzMgr.rscImage('blue');
        //thisObj.lgzMgr.rscImage('mainfg');
        thisObj.lgzMgr.rscImage('cliff');
        thisObj.lgzMgr.rscImage('basketbg');
        thisObj.lgzMgr.rscImage('basketfg');
        thisObj.lgzMgr.rscAtlas('clouds');
        thisObj.lgzMgr.rscAtlas('penguin');
        thisObj.lgzMgr.rscSpriteSheet('happy_penguin', 80, 155);
        thisObj.lgzMgr.rscImage('bubble');
        
        thisObj.lgzMgr.rscAtlas('waterfx');
        
    }
    thisObj.playSound = function (key, delayTO) {
        if (!delayTO) {
            delayTO = 0;
        }
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
        var i, node, nodeCount, text, fish, randX, randY, game;
        
        game = thisObj.game;
        
        nodeCount = thisObj.nm.nodeCount();
        for (i = 0; i < nodeCount; i += 1) {

            //text = thisObj.nm.node('response', i).getAttribute('content');
            //todo: verify type is 'text'
            //fish  = new Lgz.Fish(thisObj,  text, i);
            
            node = thisObj.nm.node('response', i);
            fish  = new Lgz.Fish(thisObj,  node, i);
            this.fishArr.push(fish);

        }
        
        this.fishRemaining = nodeCount;
    };
    thisObj.createClouds = function ()  {
        var cloud, i, max;
        thisObj.cloudArr = [];
        max = thisObj.game.rnd.integerInRange(5, 10);
        for (i = 0; i < max; i += 1) {
            cloud = new Lgz.Cloud(thisObj);
            thisObj.cloudArr.push(cloud);
        }
            

        
    };    
    thisObj.createFg = function ()  {
        var emitter;
 
        thisObj.spriteCliff = thisObj.game.add.sprite(0, 148, 'cliff');      
        
        thisObj.spriteBlue = thisObj.game.add.sprite(0, 180, 'blue');
        thisObj.spriteBasketBg = thisObj.game.add.sprite(0, 185, 'basketbg');
        
        thisObj.spriteBasketFg = thisObj.game.add.sprite(-5, 270, 'basketfg');
        
        emitter = thisObj.game.add.emitter(350, 150, 50);
        emitter.makeParticles('bubble');
        //emitter.emitX = -50;

        emitter.maxParticleScale = 1;
        emitter.minParticleScale = 0.2;
        emitter.setYSpeed(-30, -40);
        emitter.setXSpeed(-5, 5);
        emitter.gravity = 0;
        emitter.width = 400;
        emitter.minRotation = 0;
        emitter.maxRotation = 0;
        emitter.flow(5000, 100 );

        thisObj.emitter=emitter;    
        thisObj.spriteBasketFg.addChild(emitter);
    };
    thisObj.createPenguin = function ()  {
        console.debug('createPenguin:');
        thisObj.spritePenguin = new Lgz.Penguin(thisObj);
        thisObj.spritePenguin.twFishing.startLoop();
        thisObj.spritePenguin.startBlinkLoop();
        g.ps = thisObj;
    };
    thisObj.createWaterFx = function() {
        
        var frameArr;
        
        thisObj.anim = {};
        
        thisObj.spriteRipple = thisObj.game.add.sprite(250,200, 'waterfx','ripple0');
        thisObj.spriteRipple.anchor.setTo(0.5,0);        
        thisObj.spriteRipple.visible = false;
        
        frameArr = ['ripple0','ripple1','ripple2','ripple3','ripple4','ripple5', 'ripple6','ripple7','ripple8','ripple9'];
        thisObj.anim.ripple = thisObj.spriteRipple.animations.add('ripple', frameArr, false, false);
        thisObj.anim.ripple.onComplete.add(function() {
            thisObj.spriteRipple.visible = false;
        }, thisObj.spriteRipple);
        
         
        thisObj.spriteSplash = thisObj.game.add.sprite(250,120, 'waterfx','splash0');
        thisObj.spriteSplash.anchor.setTo(0.5,0);
        thisObj.spriteSplash.visible = false;
        frameArr = ['splash0','splash1','splash2','splash3','splash4','splash5', 'splash6','splash7','splash8','splash9'];
        thisObj.anim.splash = thisObj.spriteSplash.animations.add('splash', frameArr, false, false);
        thisObj.anim.splash.onComplete.add(function() {
            thisObj.spriteSplash.visible = false;
        }, thisObj.spriteSplash);       
    };
    thisObj.playRipple = function () {
        thisObj.spriteRipple.visible = true;
        thisObj.spriteRipple.play('ripple', 15);
    };
    thisObj.playSplash = function () {
        thisObj.spriteSplash.visible = true;
        thisObj.spriteSplash.play('splash', 15);
    };
    thisObj.load = function () {
        var question, answer, i, substext;
        question  = {};
        question.node = thisObj.nm.getQuestion();

        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 310, 30, 300, 50 );
        
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
        //thisObj.game.physics.arcade.setBounds(-200, 270, 1040, 200);
        thisObj.game.physics.arcade.setBounds(-200, 230, 1040, 160);
        thisObj.nm.reset();
        thisObj.createClouds();        
        thisObj.createFish();
        
        thisObj.spriteInBasket = thisObj.game.add.sprite(15, 270, 'dot');
        thisObj.game.physics.enable(thisObj.spriteInBasket, Phaser.Physics.ARCADE);
        thisObj.spriteInBasket.body.static = true;
        thisObj.spriteInBasket.body.immovable = true;
        thisObj.spriteInBasket.body.bounce.set(0);

   
        thisObj.createFg();
        thisObj.createPenguin();
        thisObj.createWaterFx();
        
        
        thisObj.spriteHook = thisObj.game.add.sprite(250, 380, 'dot');
        thisObj.game.physics.enable(thisObj.spriteHook, Phaser.Physics.ARCADE);
        thisObj.spriteHook.body.static = true;
        thisObj.spriteHook.body.immovable = true;
        thisObj.spriteHook.body.bounce.set(0);
        
        
        
        //thisObj.spriteMidPoint = thisObj.game.add.sprite(180, -50, 'dot');
        thisObj.spriteMidPoint = thisObj.game.add.sprite(180, 50, 'dot');
        thisObj.game.physics.enable(thisObj.spriteMidPoint, Phaser.Physics.ARCADE);
        thisObj.spriteMidPoint.body.static = true;
        thisObj.spriteMidPoint.body.immovable = true;
                
        thisObj.zsort(true);
        
        thisObj.load();
    };
    thisObj.caught = function (fish) {
        thisObj.zsort(true);
        thisObj.spritePenguin.caughtFish(fish);
        //thisObj.spritePenguin.twCatch.start();
        thisObj.playSound('catch'); 
        
    };    
    thisObj.missed = function() {
        thisObj.zsort(true);
        thisObj.spritePenguin.twMiss.start();
        thisObj.playSound('miss');        
  
    };
    thisObj.happy = function () {
        thisObj.spritePenguin.happy();
        
        window.setTimeout(
            function () {
                //thisObj.lgzMgr.postScore();
                thisObj.lgzMgr.hud.winOpen('winWon');
                thisObj.game.paused = false;
            },
            3000
        );         
    };
    thisObj.eventNodeBeforeNext = function () {
        thisObj.question.display.visible = false;        
    };
    thisObj.eventNodeAfterNext = function () {
        thisObj.load();
    };
    thisObj.eventNodeFinish = function () {
        thisObj.happy();
    };    
    thisObj.found = function () {

        console.debug('found:');
 
        this.fishRemaining -= 1;
        console.debug('found:' + this.fishRemaining);

        //note: pause before next word
        window.setTimeout(
            function () {
                // thisObj.next();
                thisObj.nm.nodeAnswered();
            },
            2000
        );
        
    };
    thisObj.zsort = function (water) {
        var i;
        thisObj.spriteCliff.bringToTop();
        thisObj.spritePenguin.bringToTop();
        
        if(water) {
            thisObj.spriteBlue.bringToTop();    
        }
        
        thisObj.spriteBasketBg.bringToTop();
        
        
        for(i=0; i < thisObj.fishBasketArr.length; i += 1) {
            thisObj.fishBasketArr[i].bringToTop();
        }
        thisObj.spriteBasketFg.bringToTop();
         
    };
    thisObj.update = function () {

 
    };
    thisObj.pause = function () {
        
    };
    thisObj.resume = function () {
        
    };
};
