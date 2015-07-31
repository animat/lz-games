/*global
	$: true,
	Phaser: true,
	K: true,
	console: true,
	window: true,
	Lgz: true,
	LgzLib: true,
    PIXI: true
 */
/*jslint  nomen: true */

var LgzLib = LgzLib || {};

LgzLib.DisplayNodeMMA = function (game, node, x, y, configOpts) {
    'use strict';
    var type, content;

    type =  node.getAttribute('type');

    switch (type) {
    case 'text':
        return new LgzLib.DisplayNodeText(game, node, x, y, configOpts);
        break;
    case 'image':
        return new LgzLib.DisplayNodeImage(game, node, x, y, configOpts);
        break;
    case 'audio':
        return new LgzLib.DisplayNodeAudio(game, node, x, y, configOpts);
        break;
    }
};
LgzLib.DisplayNodeImage = function (game, node, x, y, configOpts) {
    'use strict';
    var thisObj, cfgopts;
    
    thisObj = this;
    thisObj.lgzNode = node;
    thisObj.lgzContent = thisObj.lgzNode.getAttribute('content');
    cfgopts = configOpts || {};
    cfgopts.text = cfgopts.text || {};
    cfgopts.image = cfgopts.image || {};
    cfgopts.audio = cfgopts.audio || {};
    thisObj._lgzCreateOpts = cfgopts;

    //todo:  Using Lgz is a bad hack!  we should pass lgzMgr as argument
    thisObj.baseUrl = Lgz.mgr.baseUrl;
    
    thisObj.playOnLoad = true;
    
    Phaser.Sprite.call(thisObj, game, x, y, null);
    game.add.existing(thisObj);
 
    /*
     * note: normally anchor set (0.5,0.5) for centering sprite
     * But due to bug on spriteText that causes text distortion 
     * in Mac OSX browsers, we use custom center() method
     */
    
    thisObj.anchor.setTo(0, 0);
    thisObj.inputEnabled = true;
    
    thisObj.events.onInputDown.add(
        function () {
            thisObj.eventPlay();
        },
        thisObj
    );
    
};
LgzLib.DisplayNodeImage.lgzExtends(Phaser.Sprite);
LgzLib.DisplayNodeImage.prototype.eventPlay = function () {
    'use strict';
};
LgzLib.DisplayNodeImage.prototype.eventLoadOK = function () {
    'use strict';
};
LgzLib.DisplayNodeImage.prototype._eventFileComplete = function (key) {
    'use strict';
    var sprite;

    sprite = new Phaser.Sprite(this.game, 0, 0, key);
    this.texture = sprite.texture;
   
};

LgzLib.DisplayNodeImage.prototype.eventFileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    'use strict';
    
    if (cacheKey !== this.lgzContent) {
        console.debug('LgzLib.DisplayNodeImage: key not match content');
        return;
    }
    //note: some MMA  may expect more than one rsc files to be loaded
    // track the count here.
    this.lgzRscLoaded += 1;
    if (this.lgzRscLoaded < this.lgzRscRequired) {
        console.debug('LgzLib.DisplayNodeImage: rscloaded < rscrequired');
        return;
    }

    this.game.load.onFileComplete.remove(this.eventFileComplete, this);
    this._eventFileComplete(this.lgzContent);
    if (this.playOnLoad) {
        this.eventPlay();
    }
     
    this.eventLoadOK();
};
LgzLib.DisplayNodeImage.prototype._load = function () {
    'use strict';
    var splitUrl, url;
    
    splitUrl = LgzLib.splitUrl(this.lgzContent);
    if (!splitUrl.ext || splitUrl.ext === 'swf') {
        splitUrl.ext = 'png';
    }
    if (splitUrl.proto) {
        url = splitUrl.proto + '//' + splitUrl.base + '.' +  splitUrl.ext;
    } else {
        url = this.baseUrl.mma + '/image/' + splitUrl.base + '.' + splitUrl.ext;
    }

    this.loader = this.game.load.image(this.lgzContent, url, false);

};
LgzLib.DisplayNodeImage.prototype.load = function () {
    'use strict';
    var splitUrl, url;

    this.lgzRscRequired = 1;
    this.lgzRscLoaded = 0;
    
    this.game.load.onFileComplete.add(this.eventFileComplete, this);
    this._load();
    this.game.load.start();
};
LgzLib.DisplayNodeImage.prototype.vwidth = function () {
    'use strict';
    return this.width;
};
LgzLib.DisplayNodeImage.prototype.vheight = function () {
    'use strict';
    return this.height;
};
LgzLib.DisplayNodeImage.prototype.center = function (w, h) {
	'use strict';
	var dx, dy, bw, bh, bx, by;

    bw = w || 0;
    bh = h || 0;
    bx = (bw / 2)|0;
    by = (bh / 2)|0;
 
	console.debug('DisplayNodeImage.center:');
    this.anchor.setTo(0, 0);
    dx = Math.floor(bx - this.vwidth() / 2);
	dy = Math.floor(by - this.vheight() / 2);
    this.position.x = dx;
	this.position.y = dy;
        
};
LgzLib.DisplayNodeImage.prototype.conform = function (w, h) {
    'use strict';
    var  parent, scalex, scaley, basew, baseh;

    
    this.scale.setTo(1, 1);
    if (!w && !h) {
        parent = this.parent;
        scalex = (parent.width / parent.scale.x) / this.width;
        scaley = (parent.height / parent.scale.y) / this.height;
    } else {
        scalex = (w) / this.width;
        scaley = (h) / this.height;
    }
    


    if (scalex < scaley) {
        this.scale.setTo(scalex, scalex);
    } else {
        this.scale.setTo(scaley, scaley);
    }

};

LgzLib.DisplayNodeText = function (game, node, x, y, configOpts) {
    'use strict';

    LgzLib.DisplayNodeImage.call(this, game, node, x, y, configOpts);
};
LgzLib.DisplayNodeText.lgzExtends(LgzLib.DisplayNodeImage);
LgzLib.DisplayNodeText.prototype._eventFileComplete = function () {
    'use strict';
    //note: not used
};
LgzLib.DisplayNodeText.prototype.eventFileComplete = function () {
    'use strict';
    //note: not used    
};
LgzLib.DisplayNodeText.prototype.load = function () {
    'use strict';
    var sprite, thisObj, style, copyStyle;

    style  = this._lgzCreateOpts.text.style || K.nodeTextStyle;
    copyStyle = JSON.parse(JSON.stringify(style));

    this.copyStyle = copyStyle;
    sprite = new Phaser.Text(this.game, 0, 0, this.lgzContent, copyStyle);
    sprite.visible = false;
    this.game.add.existing(sprite);
    this.texture = sprite.texture;
    this.spriteText  = sprite;
   
    thisObj = this;
    window.setTimeout(
        function () {
            thisObj.eventLoadOK();
        },
        50
    );
};
LgzLib.DisplayNodeText.prototype.vwidth = function () {
    'use strict';
    var spriteText;
    spriteText = this.spriteText;
    return (spriteText.width - spriteText.fontSize * K.displayNode.fontSizePad);
};
LgzLib.DisplayNodeText.prototype.vheight = function () {
    'use strict';
    var spriteText;
    spriteText = this.spriteText;
    return (spriteText.height - spriteText.fontSize * K.displayNode.fontSizePad);
};

/*
 * method: center
 * 
 * Work around for bug in OSX browsers (safari)
 * Where normal text sprite centering with anchor.setTo(0.5,0.5) 
 * causes distortion in text displayed
 * 
 */

LgzLib.DisplayNodeText.prototype.center = function (w, h) {
	'use strict';
	var dx, dy, bw, bh, bx, by;

    bw = w || 0;
    bh = h || 0;
    bx = (bw / 2)|0;
    by = (bh / 2)|0;
 
    this.anchor.setTo(0, 0);
    dx = Math.floor(bx - this.vwidth() / 2);
	dy = Math.floor(by - this.vheight() / 2);
    this.position.x = dx;
	this.position.y = dy;
        
};
LgzLib.DisplayNodeText.prototype.maxTextFont = function (w, h) {
	'use strict';
	var maxW, maxH, size, spriteText, sizeMin, sizeMax;

	console.debug('maxTextFont:');

    spriteText = this.spriteText;
	// spriteText.font = K.font;
	maxW = w;
	maxH = h;

    sizeMin = K.displayNode.fontSizeMin;
    sizeMax = K.displayNode.fontSizeMax;
	for (size = sizeMax; size > sizeMin; size -= 2) {
		spriteText.fontSize = size;
		if (spriteText.width < maxW && spriteText.height < maxH) {
			break;
		}
	}
		
};
LgzLib.DisplayNodeText.prototype.conform = function (w, h) {
    'use strict';
    var width, height;
    //this._super.conform.call(this, w, h);
    //return;
    
    if (!w && !h) {
        console.log('conform to parent');
        width = this.parent.width;
        height = this.parent.height;
    } else {
        console.log('conform to passed w: ' + w + ' h: ' + h);
        width = w;
        height = h;
    }
    console.log('conform to width: ' + width + ' height: ' + height);

    this.maxTextFont(width, height);
    this.texture = this.spriteText.texture;

};
LgzLib.DisplayNodeAudio = function (game, node, x, y, configOpts) {
    'use strict';
    LgzLib.DisplayNodeImage.call(this, game, node, x, y, configOpts);
};
LgzLib.DisplayNodeAudio.lgzExtends(LgzLib.DisplayNodeImage);
LgzLib.DisplayNodeAudio.prototype._eventPlay = function () {
    'use strict';
    console.debug('LgzLib.DisplayNodeAudio.prototype._eventPlay');
    this.audioSprite.play('', 0, K.volumeLevel);
};
LgzLib.DisplayNodeAudio.prototype.eventPlay = function () {
    'use strict';
    var thisObj;
    console.debug('LgzLib.DisplayNodeAudio.prototype.eventPlay');
    thisObj = this;
    window.setTimeout(
        function () {
            thisObj._eventPlay();
        },
        1200
    );
};
LgzLib.DisplayNodeAudio.prototype._eventFileComplete = function (key) {
    'use strict';
    var sprite;
    console.debug('DisplayNodeAudio.prototype._eventFileComplete: entered');
    this._super._eventFileComplete.call(this, 'audio');
    this.audioSprite = this.game.add.audio(key);
};
LgzLib.DisplayNodeAudio.prototype._load = function () {
    'use strict';
    var content, splitUrl, urlMedia, url;
    console.debug('LgzLib.DisplayNodeAudio._load: entered');

    urlMedia = this.baseUrl.mma + '/audio/';
    
    content  = this.lgzNode.getAttribute('content');
    // note: audio icon loaded in Splash.rscload()

    this.loader = this.game.load.audio(
        content,
        [urlMedia + content + '.mp3',
            urlMedia + content + '.ogg']
    );
            
};

LgzLib.DisplayBox = function (game, x, y, w, h, configOpts) {
    'use strict';
    var box, cfg;
    
    Phaser.Sprite.call(this, game, x, y, null);
    game.add.existing(this);
    
    cfg = configOpts || {};
    cfg = cfg.box || {};
    
    this.anchor.setTo(0.5, 0.5);
    
    cfg.strokeWidth = cfg.strokeWidth || 0;
    cfg.strokeColor = cfg.strokeColor || 0;
    cfg.strokeAlpha = cfg.strokeAlpha || 1;
    
    box = new PIXI.Graphics();
    box.clear();
    box.boundsPadding = 0;
    box.lineStyle(cfg.strokeWidth, cfg.strokeColor, cfg.strokeAlpha);

    if (cfg.fill !== undefined) {
        box.beginFill(cfg.fill);
    }
    if (cfg.fillAlpha !== undefined) {
        box.fillAlpha = cfg.fillAlpha;
    }

    box.drawRect(0, 0, w - 1, h - 1);
    
    this.texture = box.generateTexture();
    this.box = box;
    this.boxCfg = cfg;
    
};
LgzLib.DisplayBox.lgzExtends(Phaser.Sprite);
LgzLib.DisplayNodeBox = function (game, node, x, y, w, h, configOpts) {
    'use strict';
    var sprite;
    
    LgzLib.DisplayBox.call(this, game, x, y, w, h, configOpts);
    
    sprite = new LgzLib.DisplayNodeMMA(game, node, 0, 0, configOpts);
    this.addChild(sprite);
 
    this.mma = sprite;
    this.node = node;
    sprite.visible = false;
    
    if (configOpts && configOpts.eventLoadOK) {
        sprite.eventLoadOK = function () {
            configOpts.eventLoadOK(sprite);
            sprite.visible = true;
        };
    } else {
        sprite.eventLoadOK = function () {
            console.debug('DisplayNodeBox: eventLoadOK:');
            sprite.conform();
            sprite.anchor.setTo(0.5, 0.5);
            sprite.visible = true;
        };
    }
    sprite.load();
 
};
LgzLib.DisplayNodeBox.lgzExtends(LgzLib.DisplayBox);
