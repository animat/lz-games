/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'pokerPairs';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
// K.filefx = 'svg';
K.renderType = Phaser.CANVAS;
//K.renderType = Phaser.WEBGL;
// K.renderForce = true;
K.renderForce = false;
K.renderFPS = 25;

K.cardCols = 5;
K.cardWidthOrig = 100;
K.cardHeightOrig = 70;
//K.cardScale = 1.5;
//K.cardWidth = 135;
K.cardScale = 1;
K.cardWidth = K.cardWidthOrig * K.cardScale;
K.cardHeight = K.cardHeightOrig * K.cardScale;
K.cardOffX = 5;
K.cardOffY = 5;
K.cardMarginX = 5;
K.cardMarginY = 5;
K.cardCount = 20;
      
K.cardTextScale = 1;

K.nodeTextStyle  = {
	font: '14pt '+K.font,
	fill: '#333333',
	align: 'center',
	wordWrap: true,
	wordWrapWidth: 80
};


K.StyleMenu = { 'font': '30px ' + K.font, 'fill': 'white', 'stroke': 'white' };
K.StyleButton = { 'font': '30px ' + K.font, 'fill': 'white', 'stroke': 'none', 'strokeThickness': 0, 'align': 'right' };


K.textTO = 200;
K.hideFirstTO = 1000;
K.hideSecondTO = 1500;

K.pairScale = 0.35;
K.pairWidth = (K.cardScale * K.cardWidth * K.pairScale);
K.pairHeight = (K.cardScale * K.cardHeight * K.pairScale);
K.pairMarginX = 0;
K.pairMarginY = 5;
//K.pairOffsetX = K.canvasWidth - 2 * (K.pairWidth) - K.pairMarginX;
// 567;
K.pairOffsetX = 530;
K.pairOffsetY = 0;
K.pairSfxTO = 1200;
   
K.clockTextStyle = { 
	font: '14pt ' + K.font,
	fill: '#ffffff',
	align: 'center'
};
K.clockX = 278;
K.clockY = 350;

K.lastMatchTO = 5000;
