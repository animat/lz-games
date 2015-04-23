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
Lgz.Plant = function (playSet, idx) {
    'use strict';
    var baseSprite, leafSprite, thisObj;

    createjs.Container.call(this);
    thisObj = this;
    
    this.playSet = playSet;
    this.game = playSet.game;
    this.nm = playSet.nm;
    this.text = playSet.nm.getResponse(idx).getAttribute('content');
 
    this.idx = idx;
    this.answered = false;
    this.active = true;
    this.stemAvl = true;
 
    
    this.stemGrp = new createjs.Container();    
    this.addChild(this.stemGrp);
    baseSprite = new lib.answerQuestion();
    baseSprite.y = - K.leafHeight;
    baseSprite.x = - Math.round(K.leafWidth/2);
    this.addChild(baseSprite);


    baseSprite.on("click", function () {
        playSet.eventPlantSelect(thisObj);
    });


    this.newStem();
};
Lgz.Plant.lgzExtends(createjs.Container);
Lgz.Plant.prototype.init = function () {
    'use strict';
};
Lgz.Plant.prototype.eventTweenStemCompleted = function () {
    'use strict';
    
    console.log("Lgz.Plant.tweenStemCompleted: " + this.idx);
    if(this.text.length < this.stemGrp.children.length) {
        this.blossom();
    } else {
        if (this.answered) {
            this.newStem();
        }
    }
};

Lgz.Plant.prototype._blossom = function (pos) {
    var thisObj, spriteFlower;
    thisObj = this;
    switch (pos) {
        case 1:
            spriteFlower = new lib.flower1();
            spriteFlower.setTransform (K.flowerHead1.offX, K.flowerHead1.offY);
            break;
        case 2:
            spriteFlower = new lib.flower2();
            spriteFlower.setTransform (K.flowerHead2.offX, K.flowerHead2.offY);
            break;
        case 3:
            spriteFlower = new lib.flower3();
            spriteFlower.setTransform (K.flowerHead3.offX, K.flowerHead3.offY);
            break;
    }
    this.stemGrp.addChild(spriteFlower);
    if (pos < 3) {
        window.setTimeout(
            function () {
                thisObj._blossom(pos + 1);
            },
            K.flowerDarkTO
        );        
    } else {
        this.playSet.eventPlantBlossomed(0);
    }
    
};
Lgz.Plant.prototype.blossom = function () {
    'use strict';
    var flowerSprite, y;
    this.active = false;
    
    if (this.answered) {
        flowerSprite = new lib.flowerhead();
        y= K.flowerHead.offY;   
        flowerSprite.setTransform(K.flowerHead.offX, y, 1, 1);
        this.stemGrp.addChild(flowerSprite);
        
        this.playSet.eventPlantBlossomed(1);
    } else {
        this._blossom(1);
    }
};

Lgz.Plant.prototype.newStem = function () {
    'use strict';
    var thisObj, seed, char, charIdx, stemSprite, textSprite, tween, y1, y2;
    thisObj = this;
    this.stemAvl = false;
    seed = this.game.rnd.integerInRange(0, 3);
    switch (seed) {
        case 0:
            stemSprite = new lib.stem_0();
            break;
        case 1:
            stemSprite = new lib.stem_1();
            break;
        case 2:
            stemSprite = new lib.stem_2();
            break;
        case 3:
            stemSprite = new lib.stem_3();
            break;
    }
    charIdx = this.stemGrp.children.length;
    

    stemSprite.y =  charIdx * K.stemHeight;

    char = this.text.charAt(charIdx);
    textSprite = new createjs.Text(char, K.nodeTextStyle.font, K.nodeTextStyle.fill);
    stemSprite.addChild(textSprite);

    this.stemGrp.addChild(stemSprite);
    y1 = thisObj.stemGrp.y + K.stemDipY;
    y2 = thisObj.stemGrp.y - K.stemHeight;
    tween = createjs.Tween.get(thisObj.stemGrp)
            .to({y: y1 }, 200)
            .to({y: y2 }, 500)
            .call(function() { thisObj.eventTweenStemCompleted(); });
        

};

Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, $lgzInput, cjs, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.growTS = 0;
 
    thisObj.cjsRoot = cjsRoot;

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
        var i, obj, width, nodeCount, canWidth, seed, flowerbed;
        thisObj.cjsArr = [];
        thisObj.plantArr = [];
        
        nodeCount = thisObj.nm.nodeCount();
        canWidth = K.widthPct * K.canvasWidth;
        
        flowerbed = cjsRoot.flowerbed;
        
        for (i = 0; i < thisObj.nm.nodes.length; i += 1) {
            
            obj = new Lgz.Plant(thisObj, i, seed);
            width = Math.round(canWidth / nodeCount);
            obj.x = width * (i+1);
            obj.y = K.baseY;
            
            flowerbed.addChild(obj);            
            thisObj.plantArr.push(obj);
        }

        obj = new createjs.Container();
	obj.cancel = new lib.cancel();
	//obj.cancel.setTransform(149.8,53.3,1,0.999,0,0,0,0.7,0.1);
        obj.cancel.setTransform(150,50,1,1);
        obj.addChild(obj.cancel);

	obj.submit = new lib.submit();
	//obj.submit.setTransform(71.7,53.2,1,0.999);
        obj.submit.setTransform(70,50,1,1);
        obj.addChild(obj.submit);
        obj.setTransform(140,40,1.5,1.5)
        obj.visible = false;
        cjsRoot.dialogAnswer = obj;
        cjsRoot.addChild(obj);
        thisObj.cjsArr.push(obj);
        
        obj.submit.on("click", function () {
            thisObj.eventAnswerSubmit();
        });
        obj.cancel.on("click", function () {
            thisObj.eventAnswerCancel();
        });       

    };

    thisObj.cjsRemove  = function () {
        
        var i, child, length;
        console.log('cjsRemove: ');
        for (i = 0; i < thisObj.cjsArr.length; i += 1) {
            cjsRoot.removeChild(thisObj.cjsArr[i]);
        }
        
        length = cjsRoot.flowerbed.children.length;
        for (i = 0; i < length; i += 1) {
            child = cjsRoot.flowerbed.children[0];
            console.log('cjsRemove: ' + i);
            cjsRoot.flowerbed.removeChild(child);
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

    thisObj._create = function () {
        
        console.log('Lgz.PlaySet.create: 1');

        thisObj.nodeCount = thisObj.nm.nodeCount();        
        thisObj.sprites = {};
 
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        thisObj.cjsCreate();
        thisObj.growCount = 0;

        $lgzInput.keypress(
            function (event) {
                console.log('Lgz.PlaySet.create: on $lgzInput.keypress()');
                if (event.keyCode === 13) {
                    thisObj.check();
                }
            }
        );
        thisObj.lgzMgr.spinnerHide();

        thisObj.updateGrowTS();
 
    };
    thisObj.create = function () {
        thisObj.growTS = 0;

        thisObj.lgzMgr.spinnerShow();
        window.setTimeout(
            function () {
                thisObj._create();
            },
            500
        );
    };
    thisObj.updateGrowTS = function () {
        thisObj.growTS = Date.now() + K.growTS;
    };
    thisObj.updatePlantGrowth = function () {
        var i, found, plant, stemMax, stemCount, avlArr;
        found = 0;
        stemMax = 0;
        avlArr=[];
        
        if (thisObj.growCount === 0) {
            
            for (i = 0; i < thisObj.nodeCount; i += 1) {
                plant = thisObj.plantArr[i];
                if (plant.active) {
                    plant.stemAvl = true;
                    thisObj.growCount += 1;
                }
                
            }
        }
        for (i = 0; i < thisObj.nodeCount; i += 1) {
            plant = thisObj.plantArr[i];
            if (plant.stemAvl) {
                avlArr.push(i);
            }            
        }
        
        if (avlArr.length) {
            i = this.game.rnd.integerInRange(0, avlArr.length - 1);
            i = avlArr[i];
            Lgz.g.avlArr = avlArr;

            plant = thisObj.plantArr[i];
            plant.newStem();
            thisObj.growCount -= 1;            
        } else {
            console.log('Lgz.PlaySet.updatePlantGrowth: game finished');
            thisObj.growTS = 0;
            thisObj.dialogCongrats();
        }
    };    
    thisObj.update = function () {
        var currentTS;
        currentTS = Date.now();
        if (thisObj.growTS && thisObj.growTS < currentTS) {
            thisObj.updateGrowTS();
            thisObj.updatePlantGrowth();
        }        
    };
    thisObj.pause = function () {

    };
    thisObj.resume = function () {

    };
    thisObj.shutdown = function () {
        console.log('Lgz.PlaySet.shutdown: ');
        thisObj.cjsRemove();
        $lgzInput.css('display', 'none');
        $lgzInput.unbind();
    };
    thisObj.dialogCongrats = function () {
        cjsRoot.gotoAndPlay('win');
        thisObj.lgzMgr.postScore();
    };
    thisObj.dialogAnswerShow = function () {
        thisObj.growTS = 0;
        $lgzInput.val('');
        $lgzInput.css('display', 'block');
        $lgzInput.focus();
        cjsRoot.dialogAnswer.visible = true;        
    };
    thisObj.dialogAnswerHide = function () {
        cjsRoot.dialogAnswer.visible = false;
        $lgzInput.css('display', 'none');
    };    
    thisObj.eventPlantBlossomed = function (correct) {
        
    };
   
    thisObj.eventPlantSelect = function (plant) {
        thisObj.plantSelected = plant;
        thisObj.dialogAnswerShow();
    };
    thisObj.eventAnswerSubmit = function () {
        thisObj.check();
    };
    thisObj.eventAnswerCancel = function () {
        thisObj.dialogAnswerHide();
        thisObj.growTS = 1;        
    };
    thisObj.correct = function () {
        console.log('Lgz.PlaySet.correct:');
        thisObj._answeredCorrect = true;
        thisObj.dialogAnswerHide();
        thisObj.lgzMgr.soundPlay('blossommp3');
        thisObj.plantSelected.answered = true;
        thisObj.plantSelected.newStem();
        thisObj.updateGrowTS();
    };
    thisObj.wrong = function () {
        console.log('Lgz.PlaySet.wrong:');
        thisObj.lgzMgr.soundPlay('bellwav');
        $lgzInput.val('');
    };
    thisObj.check = function () {
        if ($lgzInput.val() === thisObj.plantSelected.text) {
            thisObj.correct();
        } else {
            thisObj.wrong();
        }
    };
};
