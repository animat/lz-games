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
Lgz.LilyPool = function (playSet) {
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
        var lily, x, y;
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
        if (thisObj.last > (thisObj.MAX-1) ) {
            thisObj.last = 0;
        }
    };    
    thisObj.pull = function () {
        if (thisObj.lilyArr.length < thisObj.MAX) {
            thisObj.last = 0;

            if (thisObj.lilyArr.length === 0) {
                
                thisObj._first();
                return thisObj.lilyArr[0];
            } else {
                thisObj._next();

            }
        } else {
            thisObj._reuse();
        }
        thisObj.current += 1;
        if (thisObj.current > (thisObj.MAX-1)) {
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
    
    $lgzInput=$('#lgzInput');

    thisObj.rscload = function () {
    };
    thisObj.cjsAdd = function (child) {
        cjsRoot.addChild(child);
        thisObj.cjsArr.push(child);
    };
    thisObj.cjsCreate  = function() {
        var obj;
        thisObj.cjsArr = [];
        obj = new lib.land_left();
        obj.setTransform(0,120);
        thisObj.cjsAdd(obj);
        thisObj.spriteLand = obj;

        obj = new lib.frog();
        obj.setTransform(130,170);
        thisObj.cjsAdd(obj);
        thisObj.spriteFrog = obj;
        
        thisObj.lilyPool = new Lgz.LilyPool(thisObj);
        thisObj.lily = thisObj.lilyPool.pull();
        thisObj.cjsFrogToFront();
    };
    thisObj.cjsRemove  = function() {
        var i;
        for (i = 0; i < thisObj.cjsArr.length; i += 1) {
            cjsRoot.removeChild(thisObj.cjsArr[i]);
        }     
    };
    thisObj.cjsFrogToFront = function () {
        cjsRoot.removeChild(thisObj.spriteFrog);
        cjsRoot.addChild(thisObj.spriteFrog);
    };
    thisObj.create = function () {
       var sprite;
       thisObj.sprites = {};
       thisObj.cont = true;
       thisObj.nm.reset();
       //thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
       $lgzInput.css('display','block');
       thisObj.load();
       thisObj.cjsCreate();
       cjsRoot.tryBtn.on("click",function() {
           thisObj.check();
       });
       
    };
    thisObj.update = function () {

    };
    thisObj.pause = function () {
        
    };
    thisObj.resume = function () {
        
    };    
    thisObj.start = function () {
        thisObj.nm.reset();
        return;
    };
    thisObj.shutdown = function () {
        thisObj.cjsRemove();
        $lgzInput.css('display','none');
    };     
    thisObj.load = function () {
        var question, answer, i, substext;
        console.debug('Lgz.PlaySet.load:');
        question  = {};
        question.node = thisObj.nm.getQuestion();
        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 175, 50, 300, 50 );
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        answer.text = answer.node.getAttribute('content');
        
        thisObj.question = question;
        thisObj.answer = answer;
        thisObj.cont = true;
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
        thisObj.lgzMgr.scenes.end.start();
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
        var tween, x, y;
        x = thisObj.lilyPool.XFIRST;
        y = thisObj.lily.y - 20;
        
        thisObj.spriteFrog.gotoAndPlay('jump');
        tween = createjs.Tween.get(thisObj.spriteFrog)
                .to({x: x, y: y - 10},1000)
                .call(thisObj.eventTweenCompleted);
    };
    thisObj.tweenScrollRight = function () {
        var lily, lilyArr, i, x, tween1, tween2;
        if (thisObj.nm.idx === 0) {
            return;
        };
        lilyArr = thisObj.lilyPool.lilyArr;
        for (i = 0; i < lilyArr.length; i += 1) {
            lily = lilyArr[i];
            x = lily.x - thisObj.lilyPool.XGAP;
            tween1 = createjs.Tween.get(lily)
                    .to({x: x},1000);             
        }
        if (thisObj.nm.idx > 2) {
            return;
        };        
        x = thisObj.spriteLand.x - thisObj.lilyPool.XGAP;
        tween2 = createjs.Tween.get(thisObj.spriteLand)
                .to({x: x},1000);         
         
    };

    thisObj.correct = function () {
        thisObj.tweenFrogJump();
        thisObj.tweenScrollRight();

    };
    thisObj.wrong = function () {
        thisObj.spriteFrog.gotoAndPlay('incorrect');
    };
    thisObj.check = function() {
        if ($lgzInput.val() === thisObj.answer.text) {
            thisObj.correct();
        } else {
            thisObj.wrong();
            //thisObj.correct();
        }
    };
};
