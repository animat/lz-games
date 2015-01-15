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
    var thisObj, balArr, charArr;
    
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;

    thisObj.balArr = [];
    thisObj.charArr = [];
 
    thisObj.nodeIdx = 0;
    thisObj.charRemaining = 0;

    // Note: audio 'sfx' loaded in splash scene
    // this next call should add tracks 'correct', 'next', 'pop'
    // as defined in sfx.json file
 
    //thisObj.sfx.addMarker('swish', 0, 0.136);
    //thisObj.sfx.addMarker('swoosh', 0.138, 0.65);
    
    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAtlas('balloons');
        thisObj.lgzMgr.rscAudio('sfx', true);        
    }    
    thisObj.create = function () {
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');

        thisObj.nm.reset();
        thisObj.load();
    };
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
    /*
     * note: deprecated
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
    */
    thisObj.createBalloons = function (text) {
        var i, balloon, randX, randY, game,
                hspacer, charline, clX, clY, wordStart, wordStop, j,
                spacer, spacecount, cg;
        
        game = thisObj.game;

        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.defaultRestitution = 0.8;
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.setBounds(0, 0, 640,440, true, true, true, true, false);
        game.physics.p2.gravity.y = K.gravity;
        
        cg = {};
        cg.balloons = game.physics.p2.createCollisionGroup();
        cg.letters = game.physics.p2.createCollisionGroup();
        cg.underlines = game.physics.p2.createCollisionGroup();
        
        game.physics.p2.updateBoundsCollisionGroup();
        
        /*ivanixcu: deprecated
        randText = thisObj.shuffle(text);
        g.rt = randText;
        */
        hspacer = K.canvasWidth / text.length;
        
        clY = K.textTopMargin;
        clX = K.textLeftMargin;
        
        spacer = 0;
        spacecount = 0;
        wordStart = 0;
        wordStop = 0;
        
        for (i = 0; i < text.length; i += 1) {
            console.debug("i: " + i  + " char: " + text.charAt(i));
  
            if(text.charAt(i) !== '_') {
                charline = new Lgz.CharLine(thisObj, clX, clY, text.charAt(i), cg);
                this.charArr.push(charline);
                // spacer = Math.round(charline.spriteText.width * 1.5);
            } else {
                spacecount += 1;
                wordStart = this.charArr.length;
            }
            clX = clX  +  Math.round(charline.spriteText.width * 1.5);
            if (clX > K.textRightMargin) {
                clX = K.textLeftMargin;
                clY = clY + Math.round(charline.spriteText.height * 2);
                wordStop = this.charArr.length;
                g.charArr = this.charArr;
                g.wordStart = wordStart;
                g.wordStop = wordStop;
                for (j = wordStart; j < wordStop; j += 1) {
                    g.j = j;
                    this.charArr[j].body.x = clX;
                    this.charArr[j].body.y = clY;
                    clX = clX  +  Math.round(charline.spriteText.width * 1.5);
                }
            }
        }
        for (i = 0; i < text.length; i += 1) {
            console.debug("i: " + i  + " char: " + text.charAt(i));
            if(text.charAt(i) !== '_') { 

                balloon  = new Lgz.Balloon(thisObj,text.charAt(i), cg);
                
                this.balArr.push(balloon);
            }
  
        }        
        this.charRemaining = text.length - spacecount;
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

        substext = answer.text.replace(/ /g,'_');
        thisObj.createBalloons(substext);

        thisObj.game.load.start();
        
    };
    
    thisObj.next = function () {
        var rtn;
  
        thisObj.playSound('next');
        rtn = thisObj.nm.next();
        if (rtn) {
          thisObj.load();
        } else {
          thisObj.lgzMgr.postScore();
          thisObj.lgzMgr.hud.winOpen('winWon');  
        }
        
    };
    thisObj._charFound = function () {
        var y, i, content, textSprite;
        y = (thisObj.nm.idx * 20 ) + 120;
        console.debug('_charFound: y = ' + y);
        thisObj.question.display.sprite.destroy();
 
        textSprite = this.game.add.text(0, 0, thisObj.answer.text, K.bgTextStyle);
        textSprite.position.setTo(10, y);
        g.textSprite = textSprite;
        
        
        //todo: recycle balloon and charline sprites
        for (i = 0; i < this.balArr.length; i += 1) {
            this.balArr[i].kill();
            this.charArr[i].kill();
        }          
        thisObj.next();
    }
    thisObj.charFound = function () {

        console.debug('charFound:');
        thisObj.playSound('correct');
        this.charRemaining -= 1;
        console.debug('charFound:' + this.charRemaining);
        if (thisObj.charRemaining) {
            return;
        }
        //note: pause before next word
        window.setTimeout(
            function () {
                thisObj._charFound();
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
