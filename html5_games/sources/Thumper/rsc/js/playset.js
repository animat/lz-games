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
    var thisObj;       
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;

    thisObj.rscload = function () {
        this.lgzMgr.rscAtlas('molecharacter');
        this.lgzMgr.rscAtlas('mallet');        
    };
    thisObj.create = function () {
        var sprite;
        this.sprites = {};   
       //sprite: mole 
       sprite = this.game.add.sprite(80, -90, 'molecharacter', 0);
       sprite.animations.add(
           'popdown',
           [0,2,4,6,8,10,12,14,16,18,20,22,20,18,16],
           false,
           false
       );
       sprite.animations.play('popdown', 15, false);

       thisObj.createPopups();

       //sprite: mallet pointer
       sprite = this.game.add.sprite(0, 0, 'mallet', 0);
       sprite.animations.add(
           'whack',
           [0, 1, 2, 3, 4, 5, 6, 7, 0],
           false,
           false
       );
       //center sprite circle with actual mouse pointer center
       sprite.anchor.setTo(0.25, 0.5);
       thisObj.lgzMallet = sprite;

       sprite.inputEnabled = false;
       thisObj.game.input.onDown.add (
           function() {
               thisObj.inputDown();
           },
           thisObj
       );
       //todo: handle multipoint touch screen
       // thisObj.lgzPtr = this.scene.input.activePointer;
       thisObj.lgzPtr = thisObj.game.input.position;
       
       if (thisObj.game.device.desktop) {
            thisObj.inputDown = thisObj.inputMouseDown;
            thisObj.update  = thisObj.malletFollowPtr;
       } else {
            thisObj.inputDown = thisObj.inputTouchDown;
            thisObj.malletHome();           
       }
       this.game.canvas.style.cursor = "none";        

       thisObj.load();
    };
    thisObj.update = function () {
        
    };
    thisObj.pause = function () {
        
    };
    thisObj.resume = function () {
        
    };    
    thisObj.start = function () {
        return;
        thisObj.nm.reset();
    };    
    // -----------
    //
    //
    
    thisObj.createPopups = function () {

        var i, nodeCount, text, popup, randX, randY, game;
        
        game = thisObj.game;
        
        nodeCount = thisObj.nm.nodeCount();
        for (i = 0; i < nodeCount; i += 1) {

            text = thisObj.nm.node('response', i).getAttribute('content');
            //todo: verify type is 'text'
            popup  = new Lgz.Popup(thisObj,  text, i);
            //this.popupArr.push(popup);

        }
        
    };
    thisObj.playSound = function (key, delayTO) {
        thisObj.sfx.play(key);
        window.setTimeout(
            function () {
                thisObj.sfx.play(key);
            },
            delayTO
        ); 
    };
    thisObj.onLoadOK = function () {
        var i;
        console.debug('PlaySet.onLoadOK: entered');
        thisObj.question.display.createSprite();
        thisObj.question.display.sprite.position.setTo(320, 20);
    };
    thisObj.load = function () {
        var question, answer, i, substext;
        console.debug('playSet.load:');
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
    thisObj.missed = function() {
        thisObj.playSound('miss');        
         window.setTimeout(
            function () {
                thisObj.crying();
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
          //thisObj.lgzMgr.postScore();
          //thisObj.lgzMgr.hud.winOpen('winWon');  
        }
        
    };
    thisObj.inputDown = function () {
        //point to inputMouseDown or inputTouchDown
    };
    thisObj.inputMouseDown = function () {
        thisObj.malletDown();     
    };
    thisObj.inputTouchDown = function () {
        thisObj.malletFollowPtr();
        thisObj.malletDown();
        thisObj.malletHome();        
    };      
    thisObj.malletFollowPtr = function () {
        this.lgzMallet.x = thisObj.lgzPtr.x;
        this.lgzMallet.y = thisObj.lgzPtr.y;
    };
    thisObj.malletHome = function () {
        window.setTimeout(
            function () {
                thisObj.lgzMallet.x = 320;
                thisObj.lgzMallet.y = 430;
            },
            500
        );
    };
    thisObj.malletDown = function () {
        this.lgzMallet.animations.play('whack', 30, false);
    };
    thisObj.hitCorrect = function () {
        console.debug('hitCorrect: ');
         //note: pause before next word
        window.setTimeout(
            function () {
                thisObj.next();
            },
            2000
        );
        
    };
    thisObj.hitWrong = function () {
        console.debug('hitWrong: ');
        
    };
};
