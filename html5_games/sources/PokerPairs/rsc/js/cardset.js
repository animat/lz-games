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
Lgz.Card = function (cardSet, x, y, node) {
	'use strict';
	
	var thisObj, label, sprite, angle, num, dn;

	thisObj = this;
	this.cardSet = cardSet;
	this.game = cardSet.game;
	this.node = node;

	Phaser.Group.call(this, this.game);
		
	num = cardSet.cardArr.length;
		
	sprite = cardSet.game.add.sprite(x, y, 'card');
	sprite.scale.setTo(K.cardScale);

	dn = new LgzLib.DisplayNode(thisObj, node);
	dn.load();
	this.dn = dn;

//ivanix: todo: need to wait until dn sprite asset loaded?
//

/*
	sprite.addChild(dn.sprite);
	dn.sprite.visible = false;
	sprite.anchor.setTo(0.5, 0.5);
	dn.sprite.anchor.setTo(0.5, 0.5);
*/

		
	this.sprite = sprite;
	this.hit = false;
	this.allowHit = true;

	sprite.inputEnabled = true;
	sprite.animations.add('show', [0, 1, 2, 3, 5, 4]);
	sprite.animations.add('hide', [4, 5, 3, 2, 1, 0]);
 
	sprite.events.onInputDown.add(
		function () {thisObj.onhit(sprite); },
		thisObj
	);
                
};
LgzLib.inherit(Lgz.Card, Phaser.Group);
Lgz.Card.prototype.createMMA = function () {
	'use strict';
	console.debug('createMMA:');

	this.dn.createSprite();
	this.sprite.addChild(this.dn.sprite);
	this.dn.conform();
//todo: scale to fit container and retain aspect
	this.dn.hide();

};
Lgz.Card.prototype.update = function (sprite) {
	'use strict';
/*
	if (!this.sprite.children.length && (!this.dn.loader || this.dn.loader.hasLoaded)) {
		console.debug('Card.update:2');
		this.addMMA(this.dn);
	}
*/
};
Lgz.Card.prototype.onhit = function (sprite) {
	'use strict';
	if (this.cardSet.lock) {
		return;
	}
	if (!this.allowHit) {
		return;
	}
	if (!this.hit) {
		this.showSprite(sprite);
	} else {
		this.hideSprite(sprite, false);
		this.cardSet.firstCard = null;
	}
};
Lgz.Card.prototype.showSprite = function (sprite) {
	'use strict';
	var thisObj;

	thisObj = this;

	thisObj.cardSet.lock = true;
            
            
	thisObj.cardSet.showSound();

	sprite.animations.play('show', 20, false);
	thisObj.hit = true;
	window.setTimeout(
		function () {
			//sprite.children[0].visible = true;
			thisObj.dn.show();
			thisObj.cardSet.lock = false;
		},
		K.textTO
	);
        
	//sprite.children[0].visible = true;
	if (thisObj.cardSet.firstCard) {
		thisObj.matchSprite(sprite);
	} else {
		thisObj.cardSet.firstCard = thisObj;
		//thisObj.lock = false;
	}
};
Lgz.Card.prototype.matchSprite = function (sprite) {
	'use strict';

	var cardA, cardB, thisObj;

	console.debug('matchSprite: entered');
	thisObj = this;

	cardA = thisObj.cardSet.firstCard;
	cardB = thisObj;
	if (!cardA.node.parentNode.isSameNode(cardB.node.parentNode)) {
	console.debug('matchSprite: no match');
		cardA.hideSpriteTO(cardA.sprite, false, K.hideFirstTO);
		cardB.hideSpriteTO(cardB.sprite, true, K.hideSecondTO);
		thisObj.cardSet.firstCard = null;
		return;
	}
            
	console.debug('matchSprite: matched!');
	thisObj.cardSet.paired += 1;

	cardA.pairSprite(cardA.sprite, 1);
	cardB.pairSprite(cardB.sprite, 0);
	thisObj.cardSet.pairSfxTO(K.pairSfxTO);
	thisObj.cardSet.firstCard = null;
	thisObj.cardSet.lock = false;
                
                
	if (thisObj.cardSet.cardArr.length === (thisObj.cardSet.paired * 2)) {
		window.setTimeout(
			function () {
				thisObj.cardSet.allMatched();
			},
			K.lastMatchTO
		);
	}
};
Lgz.Card.prototype.hideSprite = function (sprite, unlock) {
	'use strict';
	
console.debug('hideSprite: entered');
	
	this.cardSet.hideSound();
	sprite.animations.play('hide', 20, false);

	this.hit = false;
	//sprite.children[0].visible = false;
	this.dn.hide();
	if (unlock) {
		this.cardSet.lock = false;
	}
};
Lgz.Card.prototype.hideSpriteTO = function (sprite, unlock, to) {
	'use strict';
	var thisObj;
console.debug('hideSpriteTO: entered');
	thisObj = this;
	window.setTimeout(function () {
		thisObj.hideSprite(sprite, unlock);
	}, to);
        
};
Lgz.Card.prototype.pairSprite = function (sprite, num) {
	'use strict';

	var toX, toY;
                
	this.allowHit = false;
                
	toX = K.pairOffsetX + (num * K.pairWidth + K.pairMarginX);
	toY = K.pairOffsetY + (this.cardSet.paired * (K.pairHeight + K.pairMarginY));
            
	this.game.add.tween(sprite).to(
		{x: toX, y: toY},
		2400,
		Phaser.Easing.Bounce.Out,
		true,
		1000,
		false
	);
            
	this.game.add.tween(sprite.scale).to(
		{x: K.pairScale, y: K.pairScale},
		2400,
		Phaser.Easing.Bounce.Out,
		true,
		1000,
		false
	);
};
        
Lgz.CardSet = function (mgr) {
	'use strict';

	var thisObj = this;


	thisObj.mgr = mgr;
	thisObj.game = mgr.game;
	thisObj.nm = mgr.nm;
	thisObj.cardArr = [];
    thisObj.selArr = [];
    thisObj.lock = false;
    thisObj.paired = 0;
		
	thisObj.sfx = thisObj.game.add.audio('sfx');
	thisObj.sfx.addMarker('swish', 0, 0.136);
	thisObj.sfx.addMarker('swoosh', 0.138, 0.65);

	thisObj.createCard = function (node) {
		var card, x, y, num;

		num = thisObj.cardArr.length;
		x = K.cardOffX + (Math.floor(num % K.cardCols) * (K.cardWidth + K.cardMarginX));
		y = K.cardOffY + (Math.floor(num / K.cardCols) * (K.cardHeight + K.cardMarginY));
		card = new Lgz.Card(thisObj, x, y, node);
		thisObj.cardArr.push(card);
	};
	thisObj.dealRand = function (arr, max) {
		var r, tries;
		tries = 1000;
		r = (Math.random() * max | 0);
		while (arr[r] && tries > 0) {
			r = (Math.random() * max | 0);
			tries -= 1;
			if (tries === 0) {
				console.error('random card max tries reached');
			}
		}
		return r;
	};
	thisObj.dealDone = function () {
		var i;
		console.debug('dealDone: entered');
		for (i = 0; i < thisObj.cardArr.length; i += 1) {
			thisObj.cardArr[i].createMMA();
		}
		thisObj.ondone();
	};
	thisObj.dealStart = function (ondone) {
		var i, nodeCount, arrRand, qa, idx, rec;
		console.debug('dealStart: entered');

		thisObj.ondone = ondone;
		thisObj.game.load.onLoadComplete.addOnce(thisObj.dealDone, thisObj);

		arrRand = [];
		nodeCount = thisObj.nm.nodeCount();
		for (i = 0; i < nodeCount; i += 1) {

			idx = thisObj.dealRand(arrRand, nodeCount * 2);
			arrRand[idx] = thisObj.nm.getQuestion(i);

			idx = thisObj.dealRand(arrRand, nodeCount * 2);
			arrRand[idx] = thisObj.nm.getResponse(i);
		}
		for (i = 0; i < arrRand.length; i += 1) {
			rec = arrRand[i];
			thisObj.createCard(rec);
		}
		thisObj.game.load.start();
		
	};
	thisObj.showSound = function () {
		thisObj.sfx.play('swish');
	};
	thisObj.hideSound = function () {
		thisObj.sfx.play('swish');
	};
	thisObj.matchSound = function () {
		thisObj.sfx.play('swoosh');
	};
/*
	thisObj.hideSprite = function (sprite, unlock) {
		thisObj.sfx.play('swish');
		sprite.animations.play('hide', 20, false);
		sprite.ivx.hit = false;
		sprite.children[0].visible = false;
		if (unlock) {
			thisObj.lock = false;
		}
	};
        
	thisObj.hideSpriteTO = function (sprite, unlock, to) {
		window.setTimeout(function () {
			thisObj.hideSprite(sprite, unlock);
		}, to);
        
	};
	thisObj.pairSprite = function (sprite, num) {
		var toX, toY;
                
		sprite.ivx.allowHit = false;
                
		toX = K.pairOffsetX + (num * K.pairWidth + K.pairMarginX);
		toY = K.pairOffsetY + (thisObj.paired * (K.pairHeight + K.pairMarginY));
            
		thisObj.game.add.tween(sprite).to(
			{x: toX, y: toY},
			2400,
			Phaser.Easing.Bounce.Out,
			true,
			1000,
			false
		);
            
		thisObj.game.add.tween(sprite.scale).to(
			{x: K.pairScale, y: K.pairScale},
			2400,
			Phaser.Easing.Bounce.Out,
			true,
			1000,
			false
		);

             
        
	};
*/
        
	thisObj.pairSfxTO = function (to) {
		window.setTimeout(
			function () {
				thisObj.sfx.play('swoosh');
			},
			to
		);
        
	};
	thisObj.allMatched = function () {
		Lgz.hud.winOpen('winWon');
        
	};
/*
	thisObj.matchSprite = function (sprite) {
		var cardA, cardB;
		cardA = thisObj.firstCard;
		cardB = sprite;
		if (cardA.ivx.pair !== cardB.ivx.pair) {
			thisObj.hideSpriteTO(cardA, false, K.hideFirstTO);
			thisObj.hideSpriteTO(cardB, true, K.hideSecondTO);
			thisObj.firstCard = null;
			return;
		}
            
            
		thisObj.paired += 1;
		thisObj.pairSprite(cardA, 1);
		thisObj.pairSprite(cardB, 0);
		thisObj.pairSfxTO(K.pairSfxTO);
		thisObj.firstCard = null;
		thisObj.lock = false;
                
                
		if (thisObj.cardArr.length === (thisObj.paired * 2)) {
			window.setTimeout(
				function () {
					thisObj.allMatched();
				},
				K.lastMatchTO
			);
		}
	};
	thisObj.showSprite = function (sprite) {
		thisObj.lock = true;
            
            
		thisObj.sfx.play('swish');
		sprite.animations.play('show', 20, false);
		sprite.ivx.hit = true;
		window.setTimeout(
			function () {
				sprite.children[0].visible = true;
				thisObj.lock = false;
			},
			K.textTO
		);
        
		//sprite.children[0].visible = true;
		if (thisObj.firstCard) {
			thisObj.matchSprite(sprite);
		} else {
			thisObj.firstCard = sprite;
			//thisObj.lock = false;
		}
	};
	thisObj.onhit = function (sprite) {
		if (thisObj.lock) {
			return;
		}
                
		if (!sprite.ivx.allowHit) {
			return;
		}
		if (!sprite.ivx.hit) {
			thisObj.showSprite(sprite);
		} else {
			thisObj.hideSprite(sprite, false);
			thisObj.firstCard = null;
		}
	
	};
*/
 
	thisObj.update = function () {
 
	};

};