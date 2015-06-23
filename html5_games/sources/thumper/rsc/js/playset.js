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
Lgz.Matrix = function (playSet) {
    
    var thisObj;
    thisObj = this;
    thisObj.cell = {};
    thisObj.playSet = playSet;
 
    thisObj.idx = function (x, y) {
        var vx, vy;
        //vx = (x / K.xdiv) | 0;
        vy = (y / (10 + y/K.ydiv)) | 0;
        //return (vx + ',' + vy);
        return (vy);
    };
    thisObj.avl = function (x, y) {
        var idx;
        if (thisObj.idx(x,y) % 2) {
            // console.debug('Lgz.Matrix.avl: disallow odd idx');
            return false;
        }
        if (thisObj.cell[thisObj.idx(x,y)]) {
            return false;
        } else {
            return true;
        }
    };
    thisObj.reserve = function (x, y, popup) {
        thisObj.cell[thisObj.idx(x,y)] = popup;    
    };
    thisObj.release = function (x, y) {
        thisObj.cell[thisObj.idx(x,y)] = null;            
    };
    thisObj.zsort = function(start) {
      var i, max;
      max = thisObj.idx(0,640) + 1;
      for (i=start; i < max; i += 1) {
          if (thisObj.cell[i]) {
              thisObj.cell[i].bringToTop();
          }
      }
      thisObj.playSet.lgzMallet.bringToTop();
      
    };
    
};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj;       
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.popupArr = [];
    thisObj.matrix = new Lgz.Matrix(thisObj);
    thisObj.cont = false;
    thisObj.tryTS = 0;
    

    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAtlas('molecharacter');
        thisObj.lgzMgr.rscAtlas('mallet');
        thisObj.lgzMgr.rscAudio('sfx', true); 
    };
    thisObj.createPopups = function () {

        var i, nodeCount, text, popup, randX, randY, game, spriteMMA, node;
        
        game = thisObj.game;
        
        nodeCount = thisObj.nm.nodeCount();
        for (i = 0; i < nodeCount; i += 1) {

            //text = thisObj.nm.node('response', i).getAttribute('content');
            //todo: verify type is 'text'
            //popup  = new Lgz.Popup(thisObj,  text, i);
            node = thisObj.nm.node('response', i);
            spriteMMA = new LgzLib.DisplayNodeMMA(thisObj.game, node, 0, 0);
            spriteMMA.playOnLoad = false;
            
            popup  = new Lgz.Popup(thisObj,  spriteMMA, i);
            
            this.popupArr.push(popup);

        }
    };    
    thisObj.create = function () {
       var sprite;

       thisObj.score = {};
       thisObj.score.correct = 0;
       thisObj.score.total = 0;
        
       thisObj.sprites = {};
       thisObj.popupArr = [];
       thisObj.cont = true;
       thisObj.nm.reset();
       
       thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx'); 
       //sprite: mole 
       sprite = this.game.add.sprite(80, -90, 'molecharacter', 0);
       sprite.animations.add(
           'popdown',
           [0,2,4,6,8,10,12,14,16,18,20,22,20,18,16],
           false,
           false
       );
       sprite.animations.play('popdown', 15, false);

       thisObj.scoreCreate();
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
            thisObj.update = thisObj.malletFollowPtr;
       } else {
            thisObj.inputDown = thisObj.inputTouchDown;
            thisObj.malletHome();           
       }
       
       this.game.canvas.style.cursor = "none";        


       thisObj.load();
    };
    thisObj.update = function () {
        thisObj._playLoop();
    };
    thisObj.pause = function () {
        
    };
    thisObj.resume = function () {
        
    };    
    thisObj.start = function () {
        console.debug('Lgz.PlaySet.start:');
        thisObj.nm.reset();
        return;
    };    
    thisObj.tryRand = function () {
        this.tryTS = Date.now() + this.game.rnd.integerInRange(K.tryRand.Min, K.tryRand.Max);
        console.debug('tryRand: ' + this.tryTS);
    };
    thisObj._playLoop = function () {
        var idx, len, vcount, wordArr, ts, tryshow;
        vcount = 0;
        wordArr = thisObj.popupArr;
        ts = Date.now();
        len = wordArr.length;
        for (idx = 0; idx < len; idx += 1) {
            if (wordArr[idx].visible) {

                if (wordArr[idx].hideTS && wordArr[idx].hideTS < ts ) {
                  wordArr[idx].hide();
                } else {
                    vcount += 1;
                }

            } else {
 
                if (thisObj.cont && vcount < K.showMax &&  thisObj.tryTS < ts && wordArr[idx].tryTS < ts) {
                     console.debug('_playLoop: trying idx: ' + idx);
                    if (wordArr[idx].try()) {
                        thisObj.tryRand();
                        vcount += 1;
                    }
               }               
            }

        }  
    };    
    thisObj.load = function () {
        var question, answer, i, substext;
        console.debug('Lgz.PlaySet.load:');

        question  = {};
        question.node = thisObj.nm.getQuestion();

        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 310, 30, 300, 50 );

        //question.display.mma.load();
 
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        answer.text = answer.node.getAttribute('content');
        //todo: in this game, we can only accept text response. need to verify
        
        thisObj.question = question;
        thisObj.answer = answer;
        thisObj.lgzMallet.bringToTop();
 
        thisObj.cont = true;
        //thisObj.playLoop();
    };
    thisObj.endWait = function () {
        var i, wait;
        thisObj.cont = false;
        wait = false;
        for(i=0; i < thisObj.popupArr.length; i += 1) {
            if(thisObj.popupArr[i].visible && thisObj.popupArr[i].hideTS) {
                thisObj.popupArr[i].hide();
                wait = true;
                //break;
            }
        }
        if (wait) {
            window.setTimeout(
                function () {
                    thisObj.endWait();
                },
                500
            );
            return;
        }
        thisObj.lgzMgr.scenes.end.start();
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
        thisObj.lgzMallet.x = thisObj.lgzPtr.x;
        this.lgzMallet.y = thisObj.lgzPtr.y - 10;
        thisObj._playLoop(); 
    };
    thisObj.malletHome = function () {
        window.setTimeout(
            function () {
                thisObj.lgzMallet.x = 320;
                thisObj.lgzMallet.y = 350;
            },
            500
        );
    };
    thisObj.malletDown = function () {
 
        thisObj.lgzMallet.animations.play('whack', 20, false);
        if (thisObj.cont) {
            thisObj.lgzMgr.soundPlay('a-hit1', 100);
        }

    };
    thisObj.hitWrong = function () {
        console.debug('Lgz.PlaySet._hitWrong: ');
        thisObj.score.total += 1;
        thisObj.scoreUpdateDisplay();
    };
    thisObj._hitCorrect = function () {
        console.debug('Lgz.PlaySet.hitCorrect: ');        
        if (!thisObj.cont) {
            return;
        }
        thisObj.cont = false;
        thisObj.score.correct += 1;
        thisObj.score.total += 1;
        thisObj.scoreUpdateDisplay();
        // TODO: I'd like to try playing a different sound effect here...
        // thisObj.lgzMgr.soundPlay('b-hit2', 100, 1000);
        
 
        /*
         *     "b-hit2" (original)
         *     "glass"
         *     "rubberband"
         *     "slingshot"
         *     "timpany"
         * 
         */
        thisObj.lgzMgr.soundPlay('rubberband', 100, 1000);
        //note: pause before next word
        window.setTimeout(
            function () {
                //thisObj.next();
                thisObj.nm.nodeAnswered();
            },
            2000
        );
        
    };
    thisObj.hitCorrect = function () {
        window.setTimeout(
            function () {
                //thisObj.next();
                thisObj._hitCorrect();
            },
            500
        );        
    }; 
    thisObj.scoreCreate = function() {
        thisObj.spriteScore = this.game.add.text(510, 45, " 0 / 0", K.scoreTextStyle);
    
    };
    thisObj.scoreUpdateDisplay = function () {
        thisObj.spriteScore.text = thisObj.score.correct + " / " + thisObj.score.total;
    };
    
    thisObj.eventNodeBeforeNext = function () {
        thisObj.question.display.visible = false;
    };
    thisObj.eventNodeAfterNext = function () {
        thisObj.load();
    };
    thisObj.eventNodeFinish = function () {
        thisObj.endWait();
    };    
};
