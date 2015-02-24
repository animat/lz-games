/*global
	g: true, K: true,
	KTYPE: true,
	Phaser: true,
	ivx: true,
	xprint: true,
	window: true,
	document: true,
	console: true
*/

var LgzLib = LgzLib || {};
LgzLib.UI = function (game, lang) {
	"use strict";
	var thisObj, btnList;

	thisObj = this;
	thisObj.game = game;
        thisObj.lang = lang;
        
	btnList = {};
		
	thisObj.title = function (str) {
		var bg, fgText;
			
		fgText = thisObj.game.add.text(400, 40, '', K.StyleTitle);
		fgText.anchor.set(0.5, 0.5);
		fgText.fixedToCamera = true;
		fgText.text = thisObj.lang.str(str);
		thisObj.displayText = fgText;
		//game.renderDirty = true;

	};
	thisObj.textCtr = function (str, y, style) {
		var bg, fgText;
			
		fgText = thisObj.game.add.text(400, y, '', style);
		fgText.anchor.set(0.5, 0.5);
		fgText.fixedToCamera = true;
		fgText.text = thisObj.lang.str(str);
		thisObj.displayText = fgText;
		//game.renderDirty = true;

	};
	thisObj.selectBtn = function (btn) {
		//override
	};
	thisObj.btn = function (textkey, x, y) {
		var key, btn, label, ctrx;

		key = x + ',' + y;
		if (btnList[key]) {
			if (textkey === '') {
				btnList[key].kill();
				return;
			}
			btnList[key].revive();
			btnList[key].children[0].text = thisObj.lang.str(textkey);
			btnList[key].textkey = textkey;
			return;
		}

		ctrx = Math.floor(game.world.width / 2);

		btn = game.add.button(x, y,
			'button',
			function () { thisObj.selectBtn(btn); },
			this, 1, 0, 2, 1
			);
		btn.textkey = textkey;
		btn.anchor.setTo(0.5);
		label = game.add.text(0, 0, thisObj.lang.str(textkey), K.StyleButton);
		btn.addChild(label);
		btn.fixedToCamera = true;
		label.anchor.setTo(0.5);
		btnList[key] = btn;
		
	};

};
