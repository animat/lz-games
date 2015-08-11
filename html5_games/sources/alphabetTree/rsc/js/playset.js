/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    createjs: true,
    lib: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */
var Lgz = Lgz || {};
K.Easing = {};
//ivanixcu: custom Easing rule, more bounce
K.Easing.ElasticOut =  function (k) {
	'use strict';
    //var s, a = 0.1, p = 0.4;
    var s, a = 0.1, p = 0.2;
    if (k === 0) {
        return 0;
    }
    if (k === 1) {
        return 1;
    }
    if (!a || a < 1) {
        a = 1;
        s = p / 4;
    } else {
        s = p * Math.asin(1 / a) / (2 * Math.PI);
    }
    return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);

};
Lgz.Timer = function (playSet) {
    'use strict';
    var thisObj;
    this.playSet = playSet;
    Phaser.Text.call(this, playSet.game, K.timerX, K.timerY, K.timerMax, K.timerTextStyle);
    playSet.game.add.existing(this);
    this.anchor.setTo(1, 0);

    this.timer =  new LgzLib.Timer(this, K.timerMax);

    thisObj = this;
    this.timer.eventTime = function (rem) {
        thisObj.eventTime(rem);
    };
    this.twWarn = this.game.add.tween(thisObj);
    this.twWarn.to({ y: 0}, 100, Phaser.Easing.Quadratic.Out)
        .to({ y: thisObj.y}, 300, Phaser.Easing.Bounce.Out);

};
Lgz.Timer.lgzExtends(Phaser.Text);
Lgz.Timer.prototype.eventTime = function (rem) {
    'use strict';
    if (rem < 1) {
        this.playSet.resetDecoys();
        this.timer.reset();
    } else {
        if (rem < K.timerWarn) {
            this.twWarn.start();
        }
    }
};
Lgz.Decoy = function (playSet, nodeIdx) {
    'use strict';
    var game,  map, pos, thisObj, spriteMMA;


    this.playSet = playSet;
    game = this.playSet.game;
    map = K.mapGround[0];
    pos = map[nodeIdx];
    this.nodeIdx = nodeIdx;
    this.nodeQuestion = playSet.nm.getQuestion(nodeIdx);
    this.isCorrect = playSet.nm.node$('response', nodeIdx).attr('content') === 'correct';
    this.posOrig = pos;

    this.posTree = K.mapTree[nodeIdx];

    Phaser.Sprite.call(this, game, pos.x, pos.y, 'dot');
    game.add.existing(this);

    spriteMMA = new LgzLib.DisplayNodeMMA(game, this.nodeQuestion, 0, 0);
    spriteMMA.playOnLoad = false;
    this.addChild(spriteMMA);
    this.spriteMMA = spriteMMA;

    spriteMMA.eventLoadOK = function () {
    };
    spriteMMA.load();
    this.initInput();
    this.initTweens();
    
};
Lgz.Decoy.lgzExtends(Phaser.Sprite);

Lgz.Decoy.prototype.overlapTree = function () {
    'use strict';
    if (this.x > K.boundTree.x1 && this.x < K.boundTree.x2) {
        if (this.y > K.boundTree.y1 && this.y < K.boundTree.y2) {
            return true;
        }
    }
    return false;
};
Lgz.Decoy.prototype.eventResetCursor = function () {
    'use strict';
    var i, ptr, thisInput;
    console.log('Lgz.Decoy.eventResetCursor:');

    if (this.ptr) {
        thisInput = this.input;
        if (thisInput.checkPointerOver(this.ptr) === false) {
            thisInput._pointerOutHandler(this.ptr);
        }
        this.ptr = null;
    }
            
    
};
Lgz.Decoy.prototype.eventTweenToTree = function () {
    'use strict';
    var thisObj;

    thisObj = this;

    this.twCorrect.start();

    window.setTimeout(
        function () {
            thisObj.eventResetCursor();
        },
        500
    );
};
Lgz.Decoy.prototype.eventTweenToOrigin = function () {
    'use strict';
    var thisObj;

    thisObj = this;

    this.twWrong.start();
    window.setTimeout(
        function () {
            thisObj.eventResetCursor();
        },
        500
    );
};
Lgz.Decoy.prototype.eventDragStart = function () {
    'use strict';
            
    this.$lgzGameCanvas.attr('class', 'curGrab2');
    this.game.canvas.blur();
};
Lgz.Decoy.prototype.eventDragStop = function (ptr) {
    'use strict';
    console.log('eventDragStop: ' +  this.isCorrect);
    this.$lgzGameCanvas.attr('class', 'curGrab1');

    if (this.overlapTree()) {
        if (this.isCorrect) {
            this.playSet.correct(this);
        } else {
            this.playSet.wrong(this);
        }
    } else {
        this.eventTweenToOrigin();
    }
};
Lgz.Decoy.prototype.initInput = function () {
    'use strict';
    var thisObj;
    thisObj = this;

    this.inputEnabled = true;
    this.input.useHandCursor = true;

    this.defaultCursor = '';

    this.$lgzGameCanvas = $('#lgzGameCanvas');

    this.input.enableDrag(false);
    this.events.onInputOver.add(
        function () {
            console.log('onInputOver:');
            thisObj.$lgzGameCanvas.attr('class', 'curGrab1');
            thisObj.game.canvas.style.cursor = 'inherit';
        },
        thisObj

    );
    this.events.onInputOut.add(
        function () {
            console.log('onInputOut:');
            thisObj.$lgzGameCanvas.attr('class', '');
        },
        thisObj

    );

    this.events.onDragStart.add(
        function (sprite, ptr) {
            console.log('event.onDragStart: ptr: ' + ptr);
            thisObj.eventDragStart();
        },
        thisObj

    );
    this.events.onDragStop.add(
        function (sprite, ptr) {
            console.log('event.onDragStop: ptr.id: ' + ptr.id);
            thisObj.ptr = ptr;
            thisObj.eventDragStop(ptr);
        },
        thisObj

    );
};
Lgz.Decoy.prototype.initTweens = function () {
    'use strict';
    var thisObj;
    thisObj = this;
    this.twWrong = this.game.add.tween(thisObj);
    this.twWrong.to(
        { x: thisObj.posOrig.x, y: thisObj.posOrig.y},
        2000,
        K.Easing.ElasticOut
    );
    this.twCorrect = this.game.add.tween(thisObj);
    this.twCorrect.to(
        { x: thisObj.posTree.x, y: thisObj.posTree.y},
        800,
        Phaser.Easing.Cubic.Out
    );
};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, cjs, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.syncTS = 0;
 
    thisObj.cjsRoot = cjsRoot;

    cjs = thisObj.lgzMgr.cjs;
    cjsRoot = thisObj.lgzMgr.cjs.root;
    cjsStage = thisObj.lgzMgr.cjs.stage;

    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAudio('sfx', true);
    };
    thisObj.cjsAdd = function (child) {
        cjsRoot.addChild(child);
        thisObj.cjsArr.push(child);
    };
    thisObj.cjsRemove  = function () {
        
        var i, child, length;
        console.log('cjsRemove: ');
        for (i = 0; i < thisObj.cjsArr.length; i += 1) {
            cjsRoot.removeChild(thisObj.cjsArr[i]);
        }
    };

    thisObj._create = function () {
        
        var i, obj, question;
        console.log('Lgz.PlaySet._create:');
        thisObj.decoyArr = [];
        thisObj.nodeCount = thisObj.nm.nodeCount();
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        thisObj.correctCount = 0;
        thisObj.correctArr = [];
        thisObj.cjsArr = [];

        question = {};
        question.node =  thisObj.nm.$tpdata.find('set[linkedto="correctGroupName"]').find('option')[0];
        question.display = new LgzLib.DisplayNodeBox(
            thisObj.game,
            question.node,
            300,
            200,
            250,
            75,
            K.questionCfg
        );
        thisObj.question = question;

        thisObj.spriteTimer = new Lgz.Timer(thisObj);

        for (i = 0; i < thisObj.nodeCount; i += 1) {
            obj = new Lgz.Decoy(thisObj, i);
            thisObj.decoyArr.push(obj);
            if (obj.isCorrect) {
                thisObj.correctCount += 1;
            }
        }

        thisObj.spriteTimer.timer.start();

        thisObj.lgzMgr.spinnerHide();
    };
    thisObj.create = function () {
        thisObj.syncTS = 0;

        //note: Disable CJS mouse over handling as it conflicts
        //      with Phaser's mouse over (useHandCursor)
        cjsStage.enableMouseOver(0);

        thisObj.lgzMgr.spinnerShow();
        window.setTimeout(
            function () {
                thisObj._create();
            },
            500
        );
    };
    thisObj.update = function () {
    };
    thisObj.pause = function () {

    };
    thisObj.resume = function () {

    };
    thisObj.shutdown = function () {
        console.log('Lgz.PlaySet.shutdown: ');
        thisObj.cjsRemove();
    };
    thisObj.eventWin = function () {
        var decoy;
        thisObj.question.display.kill();
        thisObj.spriteTimer.timer.stop();
        thisObj.spriteTimer.visible = false;
        while (thisObj.decoyArr.length) {
            decoy = thisObj.decoyArr.pop();
            decoy.kill();
        }


        //note: Re-enable CJS mouse over handling 
        //      needed for CJS drawn buttons in congratulations window
        cjsStage.enableMouseOver(15);

        //note: Disable phaser input events to allow CJS events to work in IE 
        thisObj.game.input.disabled = true;

        cjsRoot.gotoAndPlay('win');
        thisObj.lgzMgr.postScore();
    };
    thisObj.correct = function (decoy) {
        thisObj.correctArr.push(decoy);
        thisObj.lgzMgr.soundPlay('whoosh');
        decoy.eventTweenToTree();
        if (thisObj.correctCount === thisObj.correctArr.length) {
            thisObj.spriteTimer.timer.stop();
	        window.setTimeout(
	            function () {
	                thisObj.eventWin();
	            },
	            3000
	        );
        }
    };
    thisObj.resetDecoys =  function () {
        var decoy;
        thisObj.lgzMgr.soundPlay('boing');
        while (thisObj.correctArr.length) {
            decoy = thisObj.correctArr.pop();
            decoy.eventTweenToOrigin();
        }
    };
    thisObj.wrong = function (decoy) {
        var i;
        decoy.eventTweenToOrigin();
        thisObj.resetDecoys();
        thisObj.spriteTimer.timer.reset();
    };
};
