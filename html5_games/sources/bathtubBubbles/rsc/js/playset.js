/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    createjs: true,
    lib: true,
    window: true,
    Cjs2Phaser: true,
    LgzLib: true
 */
/*jslint  nomen: true */
var Lgz = Lgz || {};
Lgz.Bubble = function (playSet, node, bmd) {
    'use strict';
    var thisObj, game, spriteMMA, height, width, brec;
    this.playSet = playSet;
    game = this.playSet.game;
    this.game = game;
    this.vx = 10;


    // Cjs2Phaser.Sprite.call(this, game, lib.bubble,  0, 0, 200, 200, 80, 80);
    
    Phaser.Sprite.call(this, game, 0, 0, bmd);

    
    this.anchor.setTo(0.5, 0.5);

    this.node = node;
    spriteMMA = new LgzLib.DisplayNodeMMA(this.game, this.node, 0, 0);
    spriteMMA.playOnLoad = false;
    this.addChild(spriteMMA);
    this.spriteMMA = spriteMMA;

    width = Math.abs(this.width);
    height = Math.abs(this.height);
    spriteMMA.eventLoadOK = function () {
        //spriteMMA.conform(width, height);
        spriteMMA.center();
    };
    spriteMMA.load();

    this.spritePop = new Cjs2Phaser.Sprite(this.game, lib.bubble,  0, 0, 200, 200, 80, 80);
    this.spritePop.anchor.setTo(0.5, 0.5);

    this.inputEnabled = true;

    brec = new Phaser.Rectangle(0, 0, 30, 30);
    this.input.boundsRect = brec;

    thisObj = this;
    
    this.events.onInputDown.add(
        function () {
            thisObj.eventPop(true);
        },
        thisObj
    );
    thisObj.reset();
    thisObj.tweenLoop();
};
Lgz.Bubble.lgzExtends(Phaser.Sprite);
Lgz.Bubble.prototype.reset = function () {
    'use strict';
   
    this.x = this.game.rnd.integerInRange(0, 600);
    this.y = this.game.rnd.integerInRange(0, 400);
    this.revive();
    this.alpha = 0;
    this.visible = true;
    this.spriteMMA.visible = true;

    this.tweenFadeIn();

};
Lgz.Bubble.prototype.eventPopped = function () {
    'use strict';
    var popBubble, cb;
    console.log(
        'eventPopped: '
            + this.node.getAttribute('content')
    );
    popBubble = this.spritePop;
    popBubble.spriteCJS.removeEventListener('done', this.eventPopListener);
    this.game.world.removeChild(popBubble);
    this.kill();

    if (this.eventPopCallBack) {
        cb = this.eventPopCallBack;
        this.eventPopCallBack = null;
        cb();
    }
};
Lgz.Bubble.prototype.eventPop = function (check) {
    'use strict';
    var thisObj, mx, my, dx, dy, popBubble;

    if (!this.alive) {
        return;
    }
    thisObj = this;

    mx = this.game.input.x;
    my = this.game.input.y;

    dx  = Math.abs(this.x - mx);
    dy  = Math.abs(this.y - my);


    this.visible = false;
    popBubble = this.spritePop;

    this.spriteMMA.visible = false;
    //
    // todo: add as direct child
    // bug: this sprite doesnt update its children 
    //
    popBubble.position.setTo(this.x, this.y);
    this.game.world.addChild(popBubble);

    this.eventPopListener = popBubble.spriteCJS.addEventListener(
        'done',
        function () {
            thisObj.eventPopped();
        }
    );
    popBubble.spriteCJS.gotoAndPlay('pop');
    this.playSet.lgzMgr.soundPlay('popmp3', 500);

    if (check) {
        this.eventPopCallBack =  function () {
            thisObj.playSet.check(thisObj);
        };
    }

};
Lgz.Bubble.prototype._tweenFadeIn = function () {
    'use strict';
    var thisObj, tw, tw1, tw2, toX, toY, toS, duration, delay, alpha;
    console.log('Lgz.Bubble._tweenFadeIn:');

    thisObj = this;

    tw = this.game.add.tween(thisObj.scale);
    tw1 = this.game.add.tween(thisObj.scale);
    tw2 = this.game.add.tween(thisObj.scale);
    //toS = this.game.rnd.integerInRange(1.15, 1.45);
    toS = 1.7;
    duration = 500;
    //delay = this.game.rnd.integerInRange(100, 900);
    delay = 0;

    // 
    // Parms to tween function to(
    //  properties, duration, ease, autoStart, delay, repeat, yoyo
    // ) 
    //
    tw = this.game.add.tween(thisObj);
    tw.to(
        { alpha: 1 },
        duration,
        Phaser.Easing.Quadratic.InOut,
        true,
        delay,
        false,
        false
    );

    tw1.to(
        { x: toS, y: toS },
        duration,
        Phaser.Easing.Quadratic.InOut,
        true,
        delay,
        false,
        true
    );

    tw2.to(
        { x: (toS * 0.8), y: (toS * 0.8) },
        duration,
        Phaser.Easing.Quadratic.InOut,
        false,
        0,
        false,
        true
    );

    tw1.chain(tw2);




};
Lgz.Bubble.prototype.tweenFadeIn = function () {
    'use strict';
    var thisObj, delay;

    delay = this.game.rnd.integerInRange(0, 1000);
    thisObj = this;

    thisObj._fadeTOID = window.setTimeout(
        function () {
            thisObj._tweenFadeIn();
        },
        delay
    );
};
Lgz.Bubble.prototype.tweenLoop = function () {
    'use strict';
    var thisObj, tw, toX, toY, toS, duration;
    //console.log('Lgz.Bubble.tweenLoop:');

    thisObj = this;
    tw = this.game.add.tween(thisObj);

    toX = this.game.rnd.integerInRange(0, 600);
    toY = this.game.rnd.integerInRange(0, 400);
    duration = this.game.rnd.integerInRange(8000, 16000);


    tw.to({ x: toX, y: toY }, duration, Phaser.Easing.Quadratic.InOut)
        .onComplete.addOnce(thisObj.tweenLoop, thisObj);
    tw.start();
    this.tween = tw;


};
/*
Lgz.Bubble.prototype.update = function () {
    'use strict';
    // console.log('Lgz.Bubble.update:');

    this._super.update.call(this);

};
*/
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, cjs, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
 

    cjs = thisObj.lgzMgr.cjs;
    cjsRoot = thisObj.lgzMgr.cjs.root;

    thisObj.cjsRoot = cjsRoot;

    cjsStage = thisObj.lgzMgr.cjs.stage;


    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAudio('sfx', true);
    };
    thisObj.cjsAdd = function (child) {
        cjsRoot.addChild(child);
        thisObj.cjsArr.push(child);
    };
    thisObj.cjsCreate  = function () {

    };

    thisObj.cjsRemove  = function () {
        
        var i, child, length;
        console.log('cjsRemove: ');
        if (thisObj.cjsArr) {
            for (i = 0; i < thisObj.cjsArr.length; i += 1) {
                cjsRoot.removeChild(thisObj.cjsArr[i]);
            }
        }
        
    };
    thisObj.cjsBringToFront = function () {
        cjsRoot.removeChild(thisObj.spriteTryBtn);
        cjsRoot.addChild(thisObj.spriteTryBtn);

    };
    thisObj.cjsEndScene = function () {
        var obj;
        cjsRoot.removeChild(thisObj.spriteTryBtn);
        //obj = new lib.win();
        obj = cjs.objs.spriteWin;
        obj.setTransform(300, 200);
        thisObj.cjsAdd(obj);
        thisObj.spriteWin = obj;

    };
    thisObj.scoreInit = function () {
        thisObj.score = 0;
        cjsRoot.text_3.text = thisObj.score;
    };
    thisObj.scoreIncr = function (num) {
        thisObj.score += num;
        cjsRoot.text_3.text = thisObj.score;
    };

    thisObj._create = function () {
        
        var i, obj, optArr, bmdBubble;
        console.log('Lgz.PlaySet.create: 1');

        thisObj.scoreInit();
        thisObj.nodeCount = thisObj.nm.nodeCount();
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        thisObj.cjsCreate();



        thisObj.groupQ = thisObj.game.add.group();
        thisObj.groupBubbles = thisObj.game.add.group();

        thisObj.$optArr = thisObj.nm.$tpdata.find('option');
        //thisObj.popBubble = new Cjs2Phaser.Sprite(thisObj.game, lib.bubble,  0, 0, 200, 200, 80, 80);
        //thisObj.popBubble.anchor.setTo(0.5, 0.5);

        thisObj.bmdBubble = new Cjs2Phaser.BitmapData(thisObj.game, lib.bubble, 80, 80);

        for (i = 0; i < thisObj.$optArr.length; i += 1) {
            obj = new Lgz.Bubble(thisObj, thisObj.$optArr[i], thisObj.bmdBubble);
            thisObj.groupBubbles.addChild(obj);
        }
        i = thisObj.$optArr.length - 1;
        //ivanixcu: debug alpha bleeding
        //
        //
        thisObj.dot = thisObj.game.add.sprite(-1, -1, 'dot');


        //scaleY is same as scaleX (4.225)
        thisObj.pointsBubbleScale = cjsRoot.pointsBubbleBG.scaleX;

        thisObj.load();
        thisObj.lgzMgr.spinnerHide();
    };
    thisObj.create = function () {

        thisObj.lgzMgr.spinnerShow();
        window.setTimeout(
            function () {
                thisObj._create();
            },
            500
        );
    };
    thisObj.syncCJS = function () {
        var currentTS;
        currentTS = Date.now();
        if (!thisObj.cjsTS || thisObj.cjsTS < currentTS) {
            thisObj.cjsTS = Date.now() + K.cjsTS;
            thisObj.game.cjsRender = true;
        } else {
            thisObj.game.cjsRender = false;
        }
    };
    thisObj.update = function () {
        thisObj.syncCJS();
    };
    thisObj.pause = function () {

    };
    thisObj.resume = function () {

    };
    thisObj.shutdown = function () {
            
        console.log('Lgz.PlaySet.shutdown: ');
        thisObj.cjsRemove();
        thisObj.groupQ.removeAll();
    };
    thisObj.dialogCongrats = function () {
        thisObj.lgzMgr.postScore();
    };
    thisObj.tweenPointsBubbleRestore = function (idx) {
        var toS0, tw1;
        console.log('Lgz.Bubble.tweenPointsBubbleRestore: ' + idx);
        //from BathTubBubblesCJS.js pointsBubbbleBG
        toS0 = thisObj.pointsBubbleScale;
        tw1 = this.game.add.tween(cjsRoot.pointsBubbleBG);
        tw1.to(
            { scaleX: toS0, scaleY: toS0 },
            100,
            Phaser.Easing.Linear.None,
            true,
            0,
            false,
            false
        );
    };
    thisObj.tweenPointsBubble = function (idx) {
        var thisObj, tw1, tw2, toS0, toS1, toS2, pct;
        console.log('Lgz.Bubble.tweenPointsBubble: ' + idx);
    
        thisObj = this;

        //from BathTubBubblesCJS.js pointsBubbbleBG
        toS0 = thisObj.pointsBubbleScale;

        pct = (1 + idx)  / (1 + thisObj.groupBubbles.children.length);
        console.log('Lgz.PlaySet.tweenPointsBubble: pct: '  + pct + '   idx: ' + idx);

        toS1 = toS0 * 1.5 * pct;
        toS2 = toS0 * 2 * pct;
    
        //cjsRoot.pointsBubbleBG.scaleX  = toS1;
        //cjsRoot.pointsBubbleBG.scaleY  = toS1;
        //
        tw1 = this.game.add.tween(cjsRoot.pointsBubbleBG);
        tw2 = this.game.add.tween(cjsRoot.pointsBubbleBG);

        // 
        // Parms to tween function to(
        //  properties, duration, ease, autoStart, delay, repeat, yoyo
        // ) 
        //
        // Phaser.Easing.Quadratic.InOut,
    
        tw1.to(
            { scaleX: toS1, scaleY: toS1 },
            100,
            Phaser.Easing.Linear.None,
            true,
            0,
            false,
            false
        );

        tw2.to(
            { scaleX: toS2, scaleY: toS2 },
            200,
            Phaser.Easing.Linear.None,
            false,
            0,
            false,
            false
        );

        tw1.chain(tw2);

    };
    thisObj._eventBoatAnim = function () {
        console.log('_eventBoatAnim:');
        cjsRoot.boy.removeEventListener('done', this.eventBoatListener);

        //todo: next question
        thisObj.nm.nodeAnswered();
    };
    thisObj.eventBoatAnim = function () {
        var tw;

        this.eventBoatListener = cjsRoot.boy.addEventListener(
            'done',
            function () {
                thisObj._eventBoatAnim();
            }
        );

        cjsRoot.boy.gotoAndPlay('correct');
        thisObj.lgzMgr.soundPlay('splashmp3', 1000);

        tw = this.game.add.tween(thisObj.question.display);
        tw.to({ y: -100 }, 300, Phaser.Easing.Quadratic.Out, true, 700, false, true);
        tw.start();
        this.tween = tw;
      
    };
    thisObj.eventWaitEmpty = function () {
        var idx, empty, bubbles;
        console.log('Lgz.PlaySet.eventWaitEmpty:');
        empty = true;
        bubbles = thisObj.groupBubbles.children;
        for (idx = 0; idx < bubbles.length;  idx += 1) {
            if (bubbles[idx].alive) {
                empty = false;
                idx = bubbles.length;
            }
        }
        if (empty) {
            console.log('Lgz.PlaySet.eventWaitEmpty: true. now boat anim');
            //note: finish popping all bubbles. now boat animation
            thisObj.eventBoatAnim();
            return;
        }
        window.clearTimeout(thisObj.waitTOID);
        if (!thisObj.groupBubbles.children.length) {
            return;
        }
        thisObj.waitTOID = window.setTimeout(
            function () {
                thisObj.eventWaitEmpty();
            },
            1000
        );
    };
    thisObj.eventPopBubble = function (idx, bubble) {
        thisObj.popTOID = window.setTimeout(
            function () {
                thisObj.tweenPointsBubble(idx);
                thisObj.scoreIncr(1);
                bubble.eventPop();
            },
            (idx * 300)
        );
    };
    thisObj.eventPopAllDone = function (idx) {
        thisObj.popDoneTOID = window.setTimeout(
            function () {
                thisObj.tweenPointsBubbleRestore(idx);
            },
            (idx * 300)
        );
    };
    thisObj.eventPopAll = function () {
        var idx, bubbles, bubble;
        console.log('Lgz.PlaySet.eventPopAll:');
        bubbles = thisObj.groupBubbles.children;
        for (idx = 0; idx < bubbles.length;  idx += 1) {
            if (bubbles[idx].alive) {
                thisObj.eventPopBubble(idx, bubbles[idx]);
            }
        }
        thisObj.eventPopAllDone(idx+1);
        thisObj.eventWaitEmpty();
    };
    thisObj.correct = function () {
        var q, a;
        console.log('Lgz.PlaySet.correct:');
        q = thisObj.question.display;
        a = thisObj.answer;


        if (q.node.getAttribute('type') === 'text') {
            if (a.node.getAttribute('type') === 'text') {
                q.mma.spriteText.text = a.node.getAttribute('content') + ' ' + q.node.getAttribute('content');
            }

        }


        thisObj.eventPopAll();

    };
    thisObj.wrong = function () {
        cjsRoot.boy.gotoAndPlay('wrong');
    };
    thisObj.check = function (bubble) {
        var txtNode, txtAnswer;
        txtNode = bubble.node.getAttribute('content');
        txtAnswer  = thisObj.answer.text;

        window.clearTimeout(thisObj.checkTOID);

        if (txtNode === txtAnswer) {
            thisObj.correct();
        } else {
            thisObj.wrong();
        }
    };
    thisObj.resetBubbles = function () {
        var i, bubbles;
        bubbles = thisObj.groupBubbles.children;
        for (i = 0; i < bubbles.length; i += 1) {
            bubbles[i].reset();
        }
    };
    thisObj.load = function () {
        var question, answer, i, substext;
        console.debug('Lgz.PlaySet.load:');

        if (thisObj.groupQ.children.length) {
            thisObj.groupQ.removeAll();
        }
        console.debug('Lgz.PlaySet.load: mark 1');

        question  = {};
        question.node = thisObj.nm.getQuestion();
        console.debug('Lgz.PlaySet.load: mark 2');
        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 300, 190, 300, 25);
        console.debug('Lgz.PlaySet.load: mark 3');
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        console.debug('Lgz.PlaySet.load: mark 4');
        answer.text = answer.node.getAttribute('content');
        console.debug('Lgz.PlaySet.load: mark 5');

        thisObj.question = question;

        thisObj.groupQ.addChild(question.display);
        console.debug('Lgz.PlaySet.load: mark 6');

        thisObj.answer = answer;
        thisObj.cont = true;
        console.debug('Lgz.PlaySet.load: mark 7');
    };
    thisObj.eventNodeBeforeNext = function () {
        console.log('playSet.eventNodeBeforeNext:');
        thisObj.question.display.visible = false;
    };
    thisObj.eventNodeAfterNext = function () {
        console.log('playSet.eventNodeAfterNext:');
        thisObj.load();
        thisObj.resetBubbles();
    };
    thisObj.eventNodeFinish = function () {
        thisObj.lgzMgr.postScore(thisObj.score);

        thisObj.shutdown();
        cjsRoot.gotoAndPlay('win');
        /*
        window.setTimeout(
            function () {
                thisObj.lgzMgr.scenes.end.start();
            },
            3000
        );
        */
    };
};
