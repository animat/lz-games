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
Lgz.WordTile = function (playSet, word, idx) {
    'use strict';
    var game, spriteRect, h, w, sx, sy, ox, oy, i, overlap, groupTiles, child, xoverlap, yoverlap;
    this.playSet = playSet;
    this.idx = idx;
    game = this.playSet.game;


    // Phaser.Sprite.call(this, game, 0, 0, bmd);
    Phaser.Sprite.call(this, game, 0, 0, 'dot');

    this.anchor.setTo(0.5, 0.5);

    this.spriteText = playSet.game.add.text(0, 0, word, K.wordTextStyle);
    sx = -Math.ceil(this.spriteText.width / 2);
    sy = -Math.ceil(this.spriteText.height / 2);
    this.spriteText.position.setTo(sx, sy);

    spriteRect = game.add.graphics(0, 0);
    spriteRect.lineStyle(1, 0x000000);
    spriteRect.beginFill(0xffffff);
    spriteRect.drawRect(sx - 5, sy - 5, this.spriteText.width + 10, this.spriteText.height + 10);
    spriteRect.endFill();
    this.spriteRect = spriteRect;
    
    this.addChild(this.spriteRect);
    this.addChild(this.spriteText);

    this.randomizePos();
    overlap = true;
    groupTiles = playSet.groupTiles;

    while (overlap) {
        overlap = false;
        for (i = 0; i < groupTiles.children.length; i += 1) {
            child = groupTiles.children[i];
            yoverlap = false;
            xoverlap = false;
            if (this.x >= child.x && this.x <= (child.x + child.width)) {
                console.log(' xoverlap: true');
                xoverlap = true;
            }
            if ((this.x + this.width) >= child.x && (this.x + this.width) <= (child.x + child.width)) {
                yoverlap = true;
                console.log(' yoverlap: true');
            }
            if (this.y >= child.y && this.y <= (child.y + child.height)) {
                yoverlap = true;
                console.log(' yoverlap: true');
            }
            if ((this.y + this.height) >= child.y && (this.y + this.height) <= (child.y + child.height)) {
                yoverlap = true;
                console.log(' yoverlap: true');
            }
            if (xoverlap && yoverlap) {
                overlap  = true;
            }

        }
        if (this.x < 0 || (this.x + this.width) > K.canvasVWidth) {
            overlap = true;
        }
        if (this.y < K.tileCeiling || (this.y + this.height) > K.canvasVHeight) {
            overlap = true;
        }
        if (overlap) {
            this.randomizePos();
        }

    }


    //this.inputEnable = true;
    //this.input.enableDrag(true);

};
Lgz.WordTile.lgzExtends(Phaser.Sprite);
Lgz.WordTile.prototype.linkTile = function (parent, child) {
    'use strict';
    parent.addChild(child);
    child.x =  ((parent.spriteText.width + 10) / 2) + ((child.spriteText.width + 10) / 2);
    child.y = 0;
    this.playSet.lgzMgr.soundPlay('snapmp3', 0, 500);
    if (this.playSet.groupTiles.children.length === 1) {
        this.playSet.correct();
    }
};
Lgz.WordTile.prototype._matchTile = function (leftTile, rightTile) {
    'use strict';
    var x, y, tx, ty;

    tx = leftTile.world.x + Math.ceil((leftTile.spriteText.width + 10) / 2);
    ty = leftTile.world.y;

    x = rightTile.world.x - Math.ceil((rightTile.spriteText.width + 10) / 2);
    y = rightTile.world.y;


    if (Math.abs(tx - x) < 20 && Math.abs(ty - y) < 20) {
        return true;
    }
    return false;
};
Lgz.WordTile.prototype.matchTileLeft = function () {
    'use strict';
    var tiles, i;
    tiles = this.playSet.tileArr;
    if (this.idx > 0) {
        i = this.idx - 1;
        if (this._matchTile(tiles[i], this)) {
            this.linkTile(tiles[i], this);
        }
    }
};
Lgz.WordTile.prototype.matchTileRight = function () {
    'use strict';
    var tiles, i, x, y, tx, ty, hasChildIdx;
    tiles = this.playSet.tileArr;
    hasChildIdx = this.children.length - 2;
    if (!hasChildIdx) {
        if (this.idx < (tiles.length - 1)) {
            i = this.idx + 1;
            if (this._matchTile(this, tiles[i])) {
                this.linkTile(this, tiles[i]);
            }
        }
    }
};
Lgz.WordTile.prototype.findLastTileRight = function () {
    'use strict';
    var tile, childCount, idx;

    childCount = this.children.length - 2;
    if (!childCount) {
        this.matchTileRight();
    } else {

        idx = this.children.length - 1;
        tile = this.children[idx];
        tile.findLastTileRight();
    }

};
Lgz.WordTile.prototype.matchTile = function () {
    'use strict';
    var tile, childCount, idx;
    this.matchTileLeft();
    this.findLastTileRight();

};
Lgz.WordTile.prototype.initInput = function () {
    'use strict';
    var thisObj;

    thisObj = this;
    thisObj.inputEnabled = true;
    thisObj.input.enableDrag(false);
    thisObj.events.onInputDown.add(
        function () {
            thisObj.bringToTop();
        }
    );
    thisObj.events.onInputUp.add(
        function () {
            thisObj.matchTile();
        }
    );
};
Lgz.WordTile.prototype.randomizePos = function () {
    'use strict';
    var x, y;
    x = this.game.rnd.integerInRange(0, K.canvasVWidth);
    y = this.game.rnd.integerInRange(K.tileCeiling, K.canvasVHeight);
    this.position.setTo(x, y);
};
Lgz.WordTile.prototype.update = function () {
    'use strict';
    var input, x, y, h, w;
    input = this.game.input;
    x = this.x - ((this.spriteRect.width) / 2) |0;
    y = this.y - ((this.spriteRect.height) / 2) |0;
    w = this.spriteRect.width;
    h = this.spriteRect.height;
    if (Phaser.Rectangle.containsRaw(x, y, w, h, input.x, input.y)) {
        this.game.canvas.style.cursor = "pointer";
    }

};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, cjs, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
 
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
    thisObj.cjsCreate  = function () {
        thisObj.cjsArr = [];

    };
    thisObj.cjsRemove  = function () {
        
        var i, child, length;
        console.log('cjsRemove: ');
        for (i = 0; i < thisObj.cjsArr.length; i += 1) {
            cjsRoot.removeChild(thisObj.cjsArr[i]);
        }
        
    };

    thisObj.createWordTiles = function (content) {
        var i, wordArr, bmdTile, tile;
        thisObj.groupTiles  = thisObj.game.add.group();

        // bmdTile = new Cjs2Phaser.BitmapData(thisObj.game, lib.magnetBG);
        // thisObj.bmdTile = bmdTile;
        thisObj.tileArr = [];

        wordArr = content.split(' ');
        for (i = 0; i < wordArr.length; i += 1) {
            //tile = new Lgz.WordTile(thisObj, bmdTile, wordArr[i], i);
            tile = new Lgz.WordTile(thisObj, wordArr[i], i);
            tile.initInput();
            thisObj.groupTiles.addChild(tile);
            thisObj.tileArr.push(tile);
        }

    };
    thisObj._create = function () {
        
        console.log('Lgz.PlaySet.create: 1');

        thisObj.nodeCount = thisObj.nm.nodeCount();
        thisObj.sprites = {};
 
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        thisObj.cjsCreate();
        thisObj.growCount = 0;

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
    /*
     * note:  may not be needed.
     * no cjs2phaser sprites used yet
     *
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
    */
    thisObj.update = function () {
        // thisObj.syncCJS();
    };
    thisObj.pause = function () {

    };
    thisObj.resume = function () {

    };
    thisObj.shutdown = function () {
        console.log('Lgz.PlaySet.shutdown: ');
        thisObj.cjsRemove();
    };
    thisObj._tweenCorrect = function () {
        window.setTimeout(
            function () {
                thisObj.nm.nodeAnswered();
            },
            2000
        );
    };
    thisObj.tweenCorrect = function () {
        var tile, tw, dx, dy, i, totalWidth;
        tile = thisObj.tileArr[0];
        tw  = thisObj.game.add.tween(tile);
        totalWidth = 0;

        for (i = 0; i < thisObj.tileArr.length; i += 1) {
            thisObj.tileArr[i].spriteRect.visible = false;
            totalWidth += (thisObj.tileArr[i].spriteText.width + 10);
        }

        //dx = 120 + (tile.spriteText.width + 10) / 2;
        dx = ((K.canvasVWidth - totalWidth) / 2) + (tile.spriteText.width / 2);
        dy = 120;

        tw.to({x: dx, y: dy}, 1000)
            .onComplete.addOnce(thisObj._tweenCorrect, thisObj);

        tw.start();

    };
    thisObj.correct = function () {
        console.log('Lgz.PlaySet.correct:');
        thisObj.lgzMgr.soundPlay('whishmp3', 0, 200);
        window.setTimeout(
            function () {
                thisObj.tweenCorrect();
            },
            1000
        );
    };
    thisObj.load = function () {
        var question, answer, i, substext;
        console.debug('Lgz.PlaySet.load:');
        question  = {};
        question.node = thisObj.nm.getQuestion();
        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 175, 70, 250, 30);
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        answer.text = answer.node.getAttribute('content');
        thisObj.createWordTiles(answer.text);

        thisObj.question = question;
        thisObj.answer = answer;


        thisObj.cont = true;
    };
    thisObj.eventNodeBeforeNext = function () {
        var tile;
        console.log('playSet.eventNodeBeforeNext:');
        thisObj.question.display.visible = false;
        while (thisObj.groupTiles.length) {
            thisObj.groupTiles.removeChildAt(thisObj.groupTiles.length - 1);
        }
        while (thisObj.tileArr.length) {
            tile = thisObj.tileArr.pop();
            tile.kill();
        }
    };
    thisObj.eventNodeAfterNext = function () {
        console.log('playSet.eventNodeAfterNext:');
        thisObj.load();
    };
    thisObj.eventNodeFinish = function () {
        thisObj.lgzMgr.postScore();
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
