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
Lgz.Penguin = function (playSet) {
    'use strict';
    
    var thisObj, twTime, eventCatch, eventMiss, eventFishing, eventLuring;

    thisObj = this;
    thisObj.playSet = playSet;
    thisObj.game = playSet.game;
    
    twTime=100;
    
    eventCatch = false;
    eventMiss = false;
    eventFishing = false;

    //Phaser.Sprite.call(thisObj, thisObj.game, 75, 135, 'penguin', 'body');
    
    Phaser.Sprite.call(thisObj, thisObj.game, 75, 125, 'dot');
    thisObj.game.add.existing(thisObj);
    thisObj.anchor.setTo(0.5, 0.5);

    thisObj.spriteBody = thisObj.game.add.sprite( 0, 0,'penguin','body');
    thisObj.spriteBody.anchor.setTo(0.5, 0.5);
    thisObj.addChild(thisObj.spriteBody);
    
    thisObj.spriteEyes = thisObj.game.add.sprite(-11,-55,'penguin','eyes0');
    thisObj.addChild(thisObj.spriteEyes);
    
    
    thisObj.spriteTears = thisObj.game.add.sprite(-11,-55,'penguin','tears0');
    thisObj.spriteTears.visible = false;
    thisObj.addChild(thisObj.spriteTears);
    
    thisObj.spriteRod = thisObj.game.add.sprite(0,0,'penguin','rod');
    thisObj.spriteRod.anchor.setTo(0,1);
    thisObj.spriteRod.angle=75;
    thisObj.addChild(thisObj.spriteRod);

    thisObj.spriteHandle = thisObj.game.add.sprite(14,-15,'penguin','handle');
    thisObj.spriteHandle.anchor.setTo(0.75, 0.2);
    thisObj.spriteHandle.angle=0;
    thisObj.spriteRod.addChild(thisObj.spriteHandle);
    
    thisObj.spriteLine = thisObj.game.add.sprite(10,-220,'penguin','line0');
    thisObj.spriteLine.anchor.setTo(1, 0);
    thisObj.spriteLine.angle=-75;
    thisObj.spriteRod.addChild(thisObj.spriteLine);

    thisObj.spriteHook = thisObj.game.add.sprite(-47, 235,'penguin','hook');
    //thisObj.spriteHook.anchor.setTo(0, 0);
    //thisObj.spriteHook.angle=0;
    thisObj.spriteLine.addChild(thisObj.spriteHook);
        
    
    thisObj.spriteFlipper = thisObj.game.add.sprite(-30,-10,'penguin','flipper');     
    thisObj.spriteFlipper.angle=0;
    thisObj.addChild(thisObj.spriteFlipper);        
    
    thisObj.spriteEyes.animations.add(
            'blink',
            ['eyes0','eyes1','eyes0'],
            false,
            false);    

    thisObj.spriteTears.animations.add(
        'crying',
        ['tears0','tears1','tears2'],
        false,
        false);
    
    // Make tween Fishing 
    thisObj._mkTweenFishing = function ()  {
        var twSet;
        twSet = new function() {};
        twSet.parent = thisObj;
        
        twSet._loop = function () {
            if (eventCatch | eventMiss| eventLuring) {
                twSet.startLoop();
                return;
            }
            eventFishing = true;
            twSet.RodUp.start();
            twSet.LineSwingUp1.start(); 
            twSet.startLoop();
            thisObj.playSet.playRipple();
        };
        twSet.startLoop = function() { 
            var randDelay = thisObj.game.rnd.integerInRange(3000, 7000);
            window.setTimeout(
                function () {
                    twSet._loop();
                },
                randDelay
            ); 
        };
      
        
        thisObj.twFishing = twSet;

        twSet.RodUp = thisObj.game.add.tween(thisObj.spriteRod);
        twSet.RodUp.to({angle: 72}, twTime, Phaser.Easing.Linear.None);

        twSet.LineSwingUp1 = thisObj.game.add.tween(thisObj.spriteLine);
        twSet.LineSwingUp1.to({angle: -80}, 1.5*twTime, Phaser.Easing.Quadratic.Out);
        twSet.LineSwingUp1.onComplete.add(function(){ 
            twSet.RodDown.start();
            twSet.LineSwingUp2.start();
        });

        twSet.RodDown = thisObj.game.add.tween(thisObj.spriteRod);
        twSet.RodDown.to({angle: 77}, twTime, Phaser.Easing.Linear.None);

        twSet.LineSwingUp2 = thisObj.game.add.tween(thisObj.spriteLine);
        twSet.LineSwingUp2.to({angle: -95}, 2.5*twTime, Phaser.Easing.Quadratic.Out);
        twSet.LineSwingUp2.onComplete.add(function(){ 
            twSet.LineSwingDown1.start();
        });

        twSet.LineSwingDown1 = thisObj.game.add.tween(thisObj.spriteLine);
        twSet.LineSwingDown1.to({angle: -73}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -77}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -75}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .onComplete.add(function() {
                    console.log('twFishing: cycle end');
                    eventFishing=false;
                });

    };
    thisObj._mkTweenFishing();
    
    // Make tween Miss 
    thisObj._mkTweenMiss = function () {
        var twSet;
        twSet = new function() {};
        twSet.parent = thisObj;
        twSet.start = function() { 

            eventMiss = true;
            twSet.RodUp.start();
            twSet.LineSwingIn.start();
            twSet.cry();
            
        };
        twSet._cry = function() {
            thisObj.spriteTears.visible  = false;
            thisObj.spriteTears.animations.stop('crying');
            eventMiss = false;
        };
        twSet.cry  = function() {
            thisObj.spriteTears.visible = true;
            thisObj.spriteTears.play('crying', 5, true);
            window.setTimeout(
                function () {
                    twSet._cry();
                },
                2000
            );               
        };
        twSet._down = function() { 
            twSet.RodDown.start();
            twSet.LineSwingOut.start();
            thisObj.playSet.playRipple();

            window.setTimeout(
                function () {
                   // twSet.cry();
                },
               1000
            );              
        };
        twSet.down = function() {
            window.setTimeout(
                function () {
                    twSet._down();
                },
                1000
            );            
        };
        thisObj.twMiss = twSet;

        twSet.RodUp = thisObj.game.add.tween(thisObj.spriteRod);
        twSet.RodUp.to({angle: 50}, twTime, Phaser.Easing.Linear.None);

        twSet.LineSwingIn = thisObj.game.add.tween(thisObj.spriteLine);
        twSet.LineSwingIn.to({angle: -50}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -57}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -53}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -55}, 4*twTime, Phaser.Easing.Quadratic.Out);        
        twSet.LineSwingIn.onComplete.add(function(){
            //note: this has bug, LineSwingOut.start() doesnt work from here.
            //twSet.RodDown.start(); twSet.LineSwingOut.start();
            twSet.down();
        });  


        twSet.RodDown = thisObj.game.add.tween(thisObj.spriteRod);
        twSet.RodDown.to({angle: 75}, 3*twTime,Phaser.Easing.Quadratic.Out);
             
        twSet.LineSwingOut = thisObj.game.add.tween(thisObj.spriteLine);
        twSet.LineSwingOut.to({angle: -75}, 4*twTime,  Phaser.Easing.Quadratic.Out )
                .to({angle: -77}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -73}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -75}, 4*twTime, Phaser.Easing.Quadratic.Out);

    };
    thisObj._mkTweenMiss();

    
        
    // Make tween Catch 
    thisObj._mkTweenCatch = function () {
        var twSet, klinear, reelTime;
        
        reelTime = 60;
        klinear = Phaser.Easing.Linear.None;
        
        twSet = new function() {};
        twSet.parent = thisObj;
        twSet._startWait = function() {
            window.setTimeout(
                function () {
                    twSet.start();
                },
                700
            );

        };
        twSet.start = function() {
            eventCatch = true;
            if (eventFishing) {
                twSet._startWait();
                return;
            }

            thisObj.spriteEyes.frameName="eyes3";
            twSet.BodyUp.start();
            twSet.LineSwingUp.start();
            twSet.reelStart();
            thisObj.fish.caught();
            thisObj.playSet.playSplash();
        };
        twSet._down = function() { 
            twSet.BodyDown.start();
            twSet.LineSwingDown.start();
            thisObj.spriteEyes.frameName="eyes0";
            //todo: move event set to oncomplete of tween
            eventCatch = false;
            twSet.reelStop();
        };
        twSet.down = function() {
            window.setTimeout(
                function () {
                    twSet._down();
                },
                2000
            );            
        };
        twSet.reelStop = function() {
            twSet.FlipperReel._lastChild._chainedTweens=[];
            twSet.HandleTurn._lastChild._chainedTweens=[];
        };        
        twSet.reelStart = function() {
            twSet.FlipperReel.loop().start();
            twSet.HandleTurn.loop().start();   
        };
        
        thisObj.twCatch = twSet;

        twSet.FlipperReel = thisObj.game.add.tween(thisObj.spriteFlipper);
        twSet.FlipperReel.to({x: -20, angle: -15}, reelTime, klinear).to({x: -10, angle: 0}, reelTime, klinear).to({x: -20, angle: 15}, reelTime, klinear).to({x: -30, angle: 0}, reelTime, klinear);
        twSet.HandleTurn = thisObj.game.add.tween(thisObj.spriteHandle);
        twSet.HandleTurn.to({angle: 80}, reelTime, klinear).to({angle: 160}, reelTime, klinear).to({angle: 230}, reelTime, klinear).to({angle: 0}, reelTime, klinear);
        twSet.HandleTurn.onComplete.add(function(){
            //console.debug('HandleTurn.OnComplete');
            //twSet.reeling();
        });
        
        twSet.BodyUp = thisObj.game.add.tween(thisObj);
        twSet.BodyUp.to({angle: -30}, twTime, Phaser.Easing.Linear.None);

        twSet.LineSwingUp = thisObj.game.add.tween(thisObj.spriteLine);
        twSet.LineSwingUp.to({angle: -200}, 4*twTime, Phaser.Easing.Quadratic.Out);      
        twSet.LineSwingUp.onComplete.add(function(){
            twSet.down();
        });  


        twSet.BodyDown = thisObj.game.add.tween(thisObj);
        twSet.BodyDown.to({angle: 0}, 3*twTime,Phaser.Easing.Quadratic.Out);
             
        twSet.LineSwingDown = thisObj.game.add.tween(thisObj.spriteLine);
        twSet.LineSwingDown.to({angle: -75}, 4*twTime,  Phaser.Easing.Quadratic.Out )
                .to({angle: -77}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -73}, 4*twTime, Phaser.Easing.Quadratic.Out)
                .to({angle: -75}, 4*twTime, Phaser.Easing.Quadratic.Out);

    };
    thisObj._mkTweenCatch();

    thisObj.spriteHappy = thisObj.game.add.sprite(-50, -100, 'happy_penguin',0);       
    thisObj.spriteHappy.visible = false;
    thisObj.addChild(thisObj.spriteHappy);

    thisObj.spriteHappy.animations.add(
        'happy',
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        false,
        false);   
    thisObj.happy = function () {
        thisObj.spriteBody.visible = false;
        thisObj.spriteRod.visible = false;
        thisObj.spriteHandle.visible = false;
        thisObj.spriteEyes.visible = false;
        
        thisObj.spriteHappy.visible = true;
        thisObj.spriteHappy.animations.play('happy', 10, true);
        
    };
    
    thisObj.twStop = function () {
        twSet.reelStop = function() {
            twSet.FlipperReel._lastChild._chainedTweens=[];
            twSet.HandleTurn._lastChild._chainedTweens=[];
        };         
    };
    thisObj.caughtFish = function(fish) {
        thisObj.fish = fish;
        thisObj.twCatch.start();        
    };
    thisObj.luring = function(flag) {
        eventLuring = flag;
    };
    thisObj._blinkLoop = function() {
        if(eventCatch) {
            thisObj.startBlinkLoop();
            return;
        }
        thisObj.spriteEyes.play('blink', 25);
        thisObj.startBlinkLoop();
    };
    thisObj.startBlinkLoop = function() {
        var randDelay;
        randDelay =  thisObj.game.rnd.integerInRange(1000, 4000);
        thisObj.blinkIntv = window.setTimeout(
            function () {
                thisObj._blinkLoop();
            },
            randDelay
        );            
    };
};
Lgz.Penguin.lgzExtends(Phaser.Sprite);
