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
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, $lgzInput, cjs, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.cont = false;

    cjs = thisObj.lgzMgr.cjs;
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

        /*
        obj = new lib.land_left();
        obj.setTransform(0, 120);
        thisObj.cjsAdd(obj);
        thisObj.spriteLand = obj;

        */
        obj = new lib._static();
        obj.setTransform(300, 200);
        obj.paused = true;
        thisObj.cjsArr.push(obj);
        cjsRoot.addChild(obj);
        thisObj.spriteStatic = obj;

        obj = new lib.correct();
        obj.setTransform(300, 200);
        obj.paused = true;
        thisObj.cjsArr.push(obj);

        thisObj.spriteCorrect = obj;
        obj.addEventListener(
            'done',
            function () {
                console.log('Lgz.PlaySet.create: addEventListener: done');
                thisObj.nm.nodeAnswered();
            }
        );

        obj = new lib.incorrect();
        obj.setTransform(300, 200);
        obj.paused = true;
        thisObj.cjsArr.push(obj);
        thisObj.spriteIncorrect = obj;

	    // note: lib.congrats frames:
        // {lastQuestion:24,finished:55,incorrect:66});
        //
        obj = new lib.congrats();
        obj.setTransform(300, 200);
        obj.paused = true;
        thisObj.cjsArr.push(obj);
        thisObj.spriteCongrats = obj;
        obj.addEventListener(
            'done',
            function () {
                console.log('Lgz.PlaySet.create: addEventListener: done');
                /* ivanixcu:note:
                 * in lib.congrats, 'incorrect' animation loops back 
                 * to 'lastQuestion' which generates a 'done' event.
                 *  we only call nm when answer is correct
                 */
                if (thisObj._answeredCorrect) {
                    thisObj.nm.nodeAnswered();
                }
            }
        );



        obj = new lib.timer();
        obj.setTransform(70, 340);
        thisObj.cjsAdd(obj);
        thisObj.spriteTimer = obj;
        thisObj.timer = new LgzLib.Timer(thisObj.spriteTimer.text);


	    obj = new createjs.Shape();
	    obj.graphics.f("rgba(0, 0, 0, 0.9)").s().p("ArYEOIAAoaIWyAAIAAIag");
        obj.setTransform(0, 55, 8.5, 0.02);
        thisObj.cjsAdd(obj);
        thisObj.spriteInputBgBorder = obj;

	    obj = new createjs.Shape();
	    obj.graphics.f("rgba(200,200,255, 0.5)").s().p("ArYEOIAAoaIWyAAIAAIag");
        obj.setTransform(0, 0, 8.5, 2);
        thisObj.cjsAdd(obj);
        thisObj.spriteInputBg = obj;

        obj = new lib.try_btn();
        //note: fix text inside button
        obj.text.y = 2.5;
        obj.text_1.y = 2.5;
        obj.text.font = K.nodeTextStyle.font;
        
        //obj.text.scaleX = 0.5;
        //obj.text.scaleY = 0.5;
        
        obj.text_1.font = K.nodeTextStyle.font;
       
        //obj.text_1.scaleX = 0.5;
        //obj.text_1.scaleY = 0.5;
        obj.setTransform(500, 2, 2, 2);
        thisObj.cjsAdd(obj);
        thisObj.spriteTryBtn = obj;
        // thisObj.btnHelper = new createjs.ButtonHelper(thisObj.spriteTryBtn, 0, 1, 2, false);


        thisObj.spriteTryBtn.on("click", function () {
            thisObj.check();
        });

        thisObj.cjsFirstAction = true;

        /*
         * todo: move to end scene
         *
        */
    };

    thisObj.cjsRemove  = function () {
        var i;
        for (i = 0; i < thisObj.cjsArr.length; i += 1) {
            cjsRoot.removeChild(thisObj.cjsArr[i]);
        }
    };
    thisObj.cjsBringToFront = function () {
        
        cjsRoot.removeChild(thisObj.spriteInputBgBorder);
        cjsRoot.addChild(thisObj.spriteInputBgBorder);
        
        cjsRoot.removeChild(thisObj.spriteInputBg);
        cjsRoot.addChild(thisObj.spriteInputBg);

        cjsRoot.removeChild(thisObj.spriteTryBtn);
        cjsRoot.addChild(thisObj.spriteTryBtn);

        cjsRoot.removeChild(thisObj.spriteTimer);
        cjsRoot.addChild(thisObj.spriteTimer);
    };
    thisObj.cjsEndScene = function () {
        var obj;

        cjsRoot.removeChild(thisObj.spriteTryBtn);

        //obj = new lib.win();
        obj = cjs.objs.spriteWin;
        obj.setTransform(300, 200);
        thisObj.cjsAdd(obj);
        thisObj.spriteWin = obj;

        obj = thisObj.spriteTimer;
        cjsRoot.removeChild(obj);
        obj.setTransform(150, 275, 1.5, 1.5);
        cjsRoot.addChild(obj);
    };
    thisObj._create = function () {
        var sprite;
        console.log('Lgz.PlaySet.create: 1');
        thisObj.sprites = {};

        thisObj.cont = true;
         
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        thisObj.cjsCreate();


        $lgzInput.keypress(
            function (event) {
                console.log('Lgz.PlaySet.create: on $lgzInput.keypress(' + event.which + ')');
                if (event.which === 13) {
                    thisObj.check();
                }
                return true;
            }
        );

        thisObj.lgzMgr.spinnerHide();
        console.log('Lgz.PlaySet.create: 2');

        thisObj.timer.start();
        thisObj.load();
        thisObj.lgzMgr.hud.inputFocus();
        thisObj.update  = thisObj.updateTimer;

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
    thisObj.update = function () {
    };
    thisObj.updateTimer = function () {
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
        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 150, 20, 300, 40);
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
    };
    thisObj.eventNodeFinish = function () {
        var clip, time;
        thisObj.timer.pause();
        time = thisObj.timer.value();
        thisObj.lgzMgr.postScore(time);
        clip = {};
        clip.time = (time);
        clip.spriteTimer = thisObj.spriteTimer;
        thisObj.lgzMgr.clip = clip;

        window.setTimeout(
            function () {
                //thisObj.lgzMgr.scenes.end.start();
                thisObj.cjsEndScene();
            },
            3000
        );
    };
    thisObj.correct = function () {
        console.log('Lgz.PlaySet.correct:');
        thisObj._answeredCorrect = true;
        $lgzInput.css('display', 'none');
        thisObj.lgzMgr.soundPlay('_spring',1200);


        if (thisObj.cjsFirstAction) {
            cjsRoot.removeChild(thisObj.spriteStatic);
            thisObj.cjsFirstAction = false;
        } else {
            cjsRoot.removeChild(thisObj.spriteCorrect);
            cjsRoot.removeChild(thisObj.spriteIncorrect);
        }


        if (2 < thisObj.nm.remaining) {
            cjsRoot.addChild(thisObj.spriteCorrect);
            thisObj.cjsBringToFront();
            thisObj.spriteCorrect.gotoAndPlay(0);
        } else {
	    // note: lib.congrats frames:
        // {lastQuestion:24,finished:55,incorrect:66});
        //
            cjsRoot.addChild(thisObj.spriteCongrats);
            thisObj.cjsBringToFront();
            if (1 < thisObj.nm.remaining) {
               // thisObj.spriteCongrats.gotoAndPlay('lastQuestion');
                thisObj.spriteCongrats.gotoAndPlay(0);
            } else {
                // thisObj.spriteCongrats.gotoAndPlay('finished');
                thisObj.spriteCongrats.gotoAndPlay(25);
            }

        }

    };
    thisObj.wrong = function () {
        console.log('Lgz.PlaySet.wrong:');

        thisObj._answeredCorrect = false;
        thisObj.lgzMgr.hud.inputFxWrong(thisObj.answer.text);
        thisObj.lgzMgr.soundPlay('_drip', 1500);

        if (thisObj.cjsFirstAction) {
            cjsRoot.removeChild(thisObj.spriteStatic);
            thisObj.cjsFirstAction = false;
        } else {
            cjsRoot.removeChild(thisObj.spriteCorrect);
            cjsRoot.removeChild(thisObj.spriteIncorrect);
        }

        if (thisObj.nm.remaining === 1) {
            cjsRoot.addChild(thisObj.spriteCongrats);
            thisObj.cjsBringToFront();
            thisObj.spriteCongrats.gotoAndPlay('incorrect');
        } else {
            cjsRoot.addChild(thisObj.spriteIncorrect);
            thisObj.cjsBringToFront();
            thisObj.spriteIncorrect.gotoAndPlay(0);
        }

    };
    thisObj.check = function () {
        if ($lgzInput.val() === thisObj.answer.text) {
            thisObj.correct();
        } else {
            thisObj.wrong();
        }
    };
    thisObj.nextLetter = function () {
        var ival, len;
        ival = $lgzInput.val();
        len = ival.length();
        ltr = thisObj.answer.next.substr(len,1);
        $lgzInput.val(ival + ltr);
    };
};
