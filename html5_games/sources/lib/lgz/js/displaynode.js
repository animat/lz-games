/*global
	$: true,
	Phaser: true,
	K: true,
	console: true,
	window: true,
	LgzLib: true
 */
/*jslint  nomen: true */

var LgzLib = LgzLib || {};
LgzLib.DisplayNode = function (parent, node) {
	'use strict';
	var game;
	game = parent.game;
	
	this.parent = parent;
	this.game = game;
	this.node = node;

	Phaser.Group.call(this, game);
};
LgzLib.inherit(LgzLib.DisplayNode, Phaser.Group);
LgzLib.DisplayNode.prototype.spriteText = function (content) {
	'use strict';
	console.debug('LgzLib.DisplayNode.spriteText: entered');
	this.loader = null;
	//todo: change cardTextStyle to generic K
	this.sprite = this.game.add.text(0, 0, content, K.cardTextStyle);
};
LgzLib.DisplayNode.prototype.loadImage = function (content) {
	'use strict';
	var splitUrl, url;
	console.debug('LgzLib.DisplayNode.loadImage: entered');
	splitUrl = LgzLib.splitUrl(content);
	if (!splitUrl.ext || splitUrl.ext === 'swf') {
		splitUrl.ext = 'png';
	}
	if (splitUrl.proto) {
		url = splitUrl.proto + '//' + splitUrl.base + '.' +  splitUrl.ext;
	} else {
		url = K.urlSvrMedia + splitUrl.base + '.' + splitUrl.ext;
	}
	
	this.loader = this.game.load.image(content, url, false);
	//this.loader.beginLoad();
};
LgzLib.DisplayNode.prototype.loadAudio = function (content) {
	'use strict';
	var url;
	console.debug('LgzLib.DisplayNode.loadAudio: entered');
		
	url =  K.urlRscMedia + 'audio.png';
	this.game.load.image('audio', url);
	//this.loadImage('audio');
	
	this.loader = this.game.load.audio(
		content,
		K.urlSvrMediaAudio + content + '.mp3',
		K.urlSvrMediaAudio + content + '.ogg'
	);
                
};
// todo: spriteAtlas only address simple animations, not composites.
// needs more info how to use together, pershaps separate json file
LgzLib.DisplayNode.prototype.spriteAtlas = function (content) {
	'use strict';
	this.loader = this.game.load.atlas(
		content,
		K.urlSvrMedia + content + '.png?',
		K.urlSvrMedia + content + '.json?'
	);
};
LgzLib.DisplayNode.prototype.load = function () {
	'use strict';
	var type, content;
		
	type =  this.node.getAttribute('type');
	content  = this.node.getAttribute('content');

	this.sprite = null;

	switch (type) {
	case 'text':
		//this.spriteText(content);
		break;
	case 'image':
		this.loadImage(content);
		break;
	case 'audio':
		this.loadAudio(content);
		break;
	}
	//this.loader.dd
};
LgzLib.DisplayNode.prototype.createSprite = function () {
	'use strict';
	var type, content;
	console.debug('createSprite:');
		
	type =  this.node.getAttribute('type');
	content  = this.node.getAttribute('content');

	this.sprite = null;

	switch (type) {
	case 'text':
		//note: this case wont happen. already created at load
		//this.spriteText(content);
		this.sprite = this.game.add.text(0, 0, content, K.cardTextStyle);
		break;
	case 'image':
		this.sprite = this.game.add.sprite(0, 0, content);
		break;
	case 'audio':
		//this.sprite = this.game.add.text(0, 0, '[audio]', K.cardTextStyle);
		this.sprite = this.game.add.sprite(0, 0, 'audio');
		this.spriteAudio = this.game.add.audio(content);

		//todo: add audio sprite 
		break;
	}
	
};
LgzLib.DisplayNode.prototype.centerText = function () {
	'use strict';
	var dx, dy, spriteParent, spriteText;

	console.debug('centerText:');

	spriteParent = this.sprite.parent;
	spriteText = this.sprite;

	dx = Math.floor((spriteParent.width - spriteText.width) / 2);
	dy = Math.floor((spriteParent.height - spriteText.height) / 2);
	spriteText.position.x += dx + 4;
	spriteText.position.y += dy;

};
LgzLib.DisplayNode.prototype.maxTextFont = function () {
	'use strict';
	var maxW, maxH, size, spriteParent, spriteText;

	console.debug('maxTextFont:');
	spriteParent = this.sprite.parent;
	spriteText = this.sprite;

	spriteText.font = K.font;
	maxW = spriteParent.width - 10;
	maxH = spriteParent.height - 10;
	for (size = 40; size > 12; size -= 2) {
		spriteText.fontSize = size;
		if (spriteText.width < maxW && spriteText.height < maxH) {
			break;
		}
	}
		
};
LgzLib.DisplayNode.prototype.conformText = function () {
	'use strict';
	console.debug('conformText:');
	this.maxTextFont();
	this.centerText();
};
LgzLib.DisplayNode.prototype.conformImage = function () {
	'use strict';
	console.debug('conformImage:');
	//todo: quick fit hack, need keep aspect
	
	this.sprite.width = this.sprite.parent.width;
	this.sprite.height = this.sprite.parent.height;
};
LgzLib.DisplayNode.prototype.conform = function () {
	'use strict';
	var type, content;
	console.debug('conform:');
		
	type =  this.node.getAttribute('type');
	content  = this.node.getAttribute('content');

	switch (type) {
	case 'text':
		this.conformText();
		break;
	case 'image':
		this.conformImage();
		break;
	case 'audio':
		this.conformImage();
		//todo: conform image of audio icon?
		// this.loadAudio(content);
		break;
	}
};
LgzLib.DisplayNode.prototype.play = function () {
	'use strict';
	this.spriteAudio.play('', 0, 0.5, false);
};
LgzLib.DisplayNode.prototype.show = function () {
	'use strict';
	var type, content, thisObj;
	
	console.debug('DisplayNode.show:');
		
	type =  this.node.getAttribute('type');
	content  = this.node.getAttribute('content');
	this.sprite.visible = true;

		
	if (this.spriteAudio) {
		thisObj = this;
		window.setTimeout(
			function () {
				thisObj.play();
			},
			500
		);
	}
};
LgzLib.DisplayNode.prototype.hide = function () {
	'use strict';
	var type, content;
	console.debug('DisplayNode.hide:');
		
	type =  this.node.getAttribute('type');
	content  = this.node.getAttribute('content');
	this.sprite.visible = false;

};
