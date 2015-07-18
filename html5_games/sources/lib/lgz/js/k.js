/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */
var K = K || {};

K.renderType = Phaser.CANVAS;
K.renderForce = false;
K.renderFPS = 25;

//note: urlRscMedia points to game's local multi media assets
K.urlRscMedia = 'rsc/mma/';
K.urlLibMedia = 'lib/lgz/mma/';

K.lang = "en";
K.region = "US";
K.locale = "en";

K.font = 'Arial';
K.volumeLevel = 2;
        
K.StyleButton = { 'font': '30px ' + K.font, 'fill': 'white', 'stroke': 'none', 'strokeThickness': 0, 'align': 'right' };
K.StyleTitle = { 'font': '60px ' + K.font, 'fill': 'white', 'stroke': 'black', 'strokeThickness': 6, 'align': 'right' };


K.nodeTextStyle = { font: '14pt ' + K.font, fill: '#ffffff', align: 'center'};

K.canvasWidth = 600;
K.canvasHeight = 425;
K.canvasVWidth = 600;
K.canvasVHeight = 400;

K.canvasBg = '#000000';

K.displayNode = {
    fontSizePad: 0.215,
    fontSizeMin: 5,
    fontSizeMax: 100
};

//config for animatining bad characters (letterfx)
K.inputFxWrongOpts  = {
    "timing": 300,
    "fx": "fly-bottom fade",
    "backwards": true,
    "duration": "1s",
    "pattern": /(^.+$)/g,
    "letter_end": "stay",
    "element_end": "restore"
};
