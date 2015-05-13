/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Ivanix Mobile LLC
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS ofi  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

/*
 * Purpose:  Dynamic load and convert sprites 
 *           into Phaser BitmapData and Sprites
 *           from Adobe Flash CC exported CreateJS files.
 *
 * Requires:
 *           - Phaser 2.0.7
 *           - CreateJS
 *
 *
 */

/*global
    Phaser: true,
    createjs: true,
    window: true
 */
/*jslint nomen: true */
/*
 * Call from a phaser update call
 * Set CJSFPS to desired fps for cjs rendering/timing
 * 
    Phaser.stateObj.updateCjs2Phaser = function () {
        var currentTS;
        currentTS = Date.now();
        if (!this.cjsTS || this.cjsTS < currentTS) {
            this.cjsTS = Date.now() + (1000/CJSFPS);
            this.game.cjsRender = true;
        } else {
            this.game.cjsRender = false;
        }
    };

*/
var Cjs2Phaser = {};
Cjs2Phaser.BitmapData = function (game, CjsLibDef, width, height) {
    'use strict';
    var thisObj, spriteCJS, bounds, stageCJS, key;

    thisObj = this;

    spriteCJS = new CjsLibDef();
    bounds = spriteCJS.nominalBounds;
    spriteCJS.x = -bounds.x;
    spriteCJS.y = -bounds.y;

    if (typeof width === 'undefined' || width === '') {
        width = bounds.width;
    }
    if (typeof height === 'undefined' || height === '') {
        height = bounds.height;
    }

    key = game.rnd.uuid();
    Phaser.BitmapData.call(thisObj, game, key, width, height);

    stageCJS = new createjs.Stage(thisObj.canvas);
    stageCJS.addChild(spriteCJS);

    thisObj.spriteCJS = spriteCJS;
    thisObj.stageCJS = stageCJS;
    thisObj.updateCJS();
};
Cjs2Phaser.BitmapData.lgzExtends(Phaser.BitmapData);
Cjs2Phaser.BitmapData.prototype.updateCJS = function () {
    'use strict';
    this.stageCJS.update();
    this.dirty = true;
};
Cjs2Phaser.Sprite = function (game, CjsLibDef,  x, y, width, height) {
    'use strict';
    var thisObj, cjsBounds;
    thisObj = this;
    thisObj.game = game;
    thisObj.hybridBMD = new Cjs2Phaser.BitmapData(thisObj.game, CjsLibDef, width, height);
    thisObj.spriteCJS = thisObj.hybridBMD.spriteCJS;

    Phaser.Sprite.call(thisObj, game, x, y, thisObj.hybridBMD);

    // game.world.add(this);

    thisObj.anchor.setTo(0.5, 0.5);

};
Cjs2Phaser.Sprite.lgzExtends(Phaser.Sprite);
Cjs2Phaser.Sprite.prototype.boundsNominal = function () {
    'use strict';
    var cjsBounds;
    if (this.body) {
        cjsBounds = this.spriteCJS.nominalBounds;
        this.body.width = cjsBounds.width;
        this.body.height = cjsBounds.height;
    }
};
Cjs2Phaser.Sprite.prototype.update = function () {
    'use strict';
    //
    //ivanixcu: account for saveCpu.renderOnFPS which prevents rendering 
    // on every update
    //
    /*
    if (this.game.renderType !== Phaser.HEADLESS) {
        this.hybridBMD.updateCJS();
    }
    */
    if (this.game.cjsRender) {
        this.hybridBMD.updateCJS();
    }

};
