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
Lgz.LilyPool = function (playSet) {
    'use strict';
    var thisObj, game;

    thisObj = this;
    game = playSet.game;

    thisObj.MAX = 5;
    thisObj.YMIN = 150;
    thisObj.YMAX = 350;

    thisObj.XFIRST = 350;
    thisObj.XGAP = 150;
    thisObj.XRIGHT = thisObj.XFIRST + thisObj.XGAP * 2;


    thisObj.lilyArr = [];
    thisObj.last = 0;
    thisObj.current = 0;

    thisObj._create = function (x) {
        var lily, y;
        lily = new lib.pad();
        y = game.rnd.integerInRange(thisObj.YMIN, thisObj.YMAX);
        lily.setTransform(x, y, 1.5, 1.5);
        thisObj.lilyArr.push(lily);
        playSet.cjsAdd(lily);
    };
    thisObj._next = function () {
        thisObj._create(thisObj.XRIGHT);
    };
    thisObj._first = function () {
        thisObj._create(thisObj.XFIRST);
        thisObj._create(thisObj.XFIRST + thisObj.XGAP);
    };
    thisObj._reuse = function () {
        var lily;
        console.log('Lgz.LilyPool._reuse: last: ' + thisObj.last);
        lily = thisObj.lilyArr[thisObj.last];
        lily.x = thisObj.XRIGHT;
        lily.y = game.rnd.integerInRange(thisObj.YMIN, thisObj.YMAX);

        thisObj.last += 1;
        if (thisObj.last > (thisObj.MAX - 1)) {
            thisObj.last = 0;
        }
    };
    thisObj.pull = function () {
        if (playSet.nm.remaining > 2) {
            if (thisObj.lilyArr.length < thisObj.MAX) {
                thisObj.last = 0;
                if (thisObj.lilyArr.length === 0) {
    
                    thisObj._first();
                    return thisObj.lilyArr[0];
                }
                thisObj._next();
            } else {
                thisObj._reuse();
            }
        }
        thisObj.current += 1;
        if (thisObj.current > (thisObj.MAX - 1)) {
            thisObj.current = 0;
        }
        return thisObj.lilyArr[thisObj.current];
    };

};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, $lgzInput, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.cont = false;

    cjsRoot = thisObj.lgzMgr.cjs.root;
    cjsStage = thisObj.lgzMgr.cjs.stage;

    $lgzInput = $('#lgzInput');

    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAudio('sfx', true);
    };
    thisObj.cjsAdd = function (child) {
        cjsRoot.addChild(child);
        thisObj.cjsArr.push(child);
    };
    thisObj.cjsCreate  = function () {
        var obj;
        thisObj.cjsArr = [];
        obj = new lib.land_left();
        obj.setTransform(0, 120);
        thisObj.cjsAdd(obj);
        thisObj.spriteLand = obj;

        obj = new lib.frog();
        obj.setTransform(130, 170);
        thisObj.cjsAdd(obj);
        thisObj.spriteFrog = obj;

        obj = new lib.timer();
        obj.setTransform(70, 340);
        thisObj.cjsAdd(obj);
        thisObj.spriteTimer = obj;
        thisObj.timer = new LgzLib.Timer(thisObj.spriteTimer.text);

        thisObj.lilyPool = new Lgz.LilyPool(thisObj);
        thisObj.lily = thisObj.lilyPool.pull();
        thisObj.cjsFrogToFront();


    };
    thisObj.cjsRemove  = function () {
        var i;
        for (i = 0; i < thisObj.cjsArr.length; i += 1) {
            cjsRoot.removeChild(thisObj.cjsArr[i]);
        }
    };
    thisObj.cjsFrogToFront = function () {
        cjsRoot.removeChild(thisObj.spriteFrog);
        cjsRoot.addChild(thisObj.spriteFrog);
        cjsRoot.removeChild(thisObj.spriteTimer);
        cjsRoot.addChild(thisObj.spriteTimer);
    };
    thisObj.create = function () {
        var sprite;
        thisObj.sprites = {};
        thisObj.cont = true;
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        // $lgzInput.css('display', 'block');
        thisObj.cjsCreate();
        cjsRoot.tryBtn.on("click", function () {
            thisObj.check();
        });

        $lgzInput.keypress(
            function (event) {
                console.log('Lgz.PlaySet.create: on $lgzInput.keypress()');
                if (event.keyCode === 13) {
                    thisObj.check();
                }
            }
        );
        thisObj.timer.start();
        thisObj.load();

    };
    thisObj.update = function () {
        thisObj.timer.update();

    };
    thisObj.pause = function () {
        thisObj.timer.pause();

    };
    thisObj.resume = function () {
        thisObj.timer.resume();
    };
    thisObj.shutdown = function () {
        console.log('Lgz.PlaySet.shutdown: ');
        thisObj.cjsRemove();
        $lgzInput.css('display', 'none');
        $lgzInput.unbind();
    };
    thisObj.load = function () {
        var question, answer, i, substext;
        console.debug('Lgz.PlaySet.load:');
        question  = {};
        question.node = thisObj.nm.getQuestion();
        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 175, 50, 300, 50);
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        answer.text = answer.node.getAttribute('content');

        thisObj.question = question;
        thisObj.answer = answer;
        thisObj.cont = true;
        $lgzInput.val('');
        $lgzInput.css('display', 'block');
        $lgzInput.focus();
    };
    thisObj.eventNodeBeforeNext = function () {
        console.log('playSet.eventNodeBeforeNext:');
        thisObj.question.display.visible = false;
    };
    thisObj.eventNodeAfterNext = function () {
        console.log('playSet.eventNodeAfterNext:');
        thisObj.load();
        thisObj.lily = thisObj.lilyPool.pull();
        thisObj.cjsFrogToFront();
    };
    thisObj.eventNodeFinish = function () {
        var clip, time;
        thisObj.timer.pause();
        time = thisObj.timer.value();
        thisObj.lgzMgr.postScore(time);
        clip = {};
        clip.time = time;
        clip.spriteTimer = thisObj.spriteTimer;
        thisObj.lgzMgr.clip = clip;

        window.setTimeout(
            function () {
                thisObj.lgzMgr.scenes.end.start();
            },
            3000
        );
    };
    thisObj.eventTweenCompleted = function () {
        console.log('playSet.eventTweenCompleted:');

        window.setTimeout(
            function () {
                thisObj.nm.nodeAnswered();
            },
            1000
        );
    };
    thisObj.tweenFrogJump = function () {
        console.log('playSet.tweenFrogJump:');
        var tween, x, y;
        if (thisObj.nm.remaining > 1) {
            x = thisObj.lilyPool.XFIRST;
            y = thisObj.lily.y - 20;
        } else {
            x = 550;
            y = 200;
        }

        thisObj.spriteFrog.gotoAndPlay('jump');
        tween = createjs.Tween.get(thisObj.spriteFrog)
                .to({x: x, y: y - 10}, 1000)
                .call(thisObj.eventTweenCompleted);
    };
    thisObj.tweenScrollRight = function () {
        var lily, lilyArr, i, x, tween1, tween2;
        if (thisObj.nm.idx === 0) {
            return;
        }
        if (thisObj.nm.remaining === 1) {
            return;
        }
        lilyArr = thisObj.lilyPool.lilyArr;
        for (i = 0; i < lilyArr.length; i += 1) {
            lily = lilyArr[i];
            x = lily.x - thisObj.lilyPool.XGAP;
            tween1 = createjs.Tween.get(lily)
                    .to({x: x}, 1000);
        }
        if (thisObj.nm.idx > 2 && thisObj.nm.remaining > 2) {
            return;
        }
        if (thisObj.nm.remaining === 2) {
            thisObj.spriteLand.scaleX = -1;
            thisObj.spriteLand.x = 800;
        }
        x = thisObj.spriteLand.x - thisObj.lilyPool.XGAP;
        tween2 = createjs.Tween.get(thisObj.spriteLand)
                .to({x: x}, 1000);

    };

    thisObj.correct = function () {
        console.log('Lgz.PlaySet.correct:');
        $lgzInput.css('display', 'none');
        thisObj.lgzMgr.soundPlay('boingmp3');
        thisObj.tweenFrogJump();
        thisObj.tweenScrollRight();
    };
    thisObj.wrong = function () {
        thisObj.lgzMgr.hud.inputFxWrong(thisObj.answer.text);
        thisObj.lgzMgr.soundPlay('slidemp3');
        thisObj.spriteFrog.gotoAndPlay('incorrect');
    };
    thisObj.check = function () {
        if ($lgzInput.val() === thisObj.answer.text) {
            thisObj.correct();
        } else {
            thisObj.wrong();
        }
    };
};
