/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'gardenGrows';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
// K.filefx = 'svg';
K.renderType = Phaser.CANVAS;
// K.renderType = Phaser.WEBGL;
// K.renderForce = true;
K.renderForce = false;
K.renderFPS = 15;

/*
K.xdiv = 200;
K.ydiv = 60;

K.xmin =  10;
K.xmax = 590;
K.ymin =  70;
K.ymax = 390;

K.y1 = 100;
K.xmin1 = (600 * 2/5)|0;
K.xmax1 = (600 * 3/5)|0;
*/
 
K.Hit = { 'NONE': 0, 'CORRECT': 1, 'WRONG': -1 };

K.tryRand = { Min: 700, Max: 1500};
K.showMax = 7;

//K.showTO = 5000;
K.showTO = 3000;

K.popBaseWidth = 150;

console.log('loading: rsc/js/k.js');
K.nodeTextStyle = {
    font: '10pt ' + K.font,
    fill: '#ffffff',
    align: 'center',
    stroke: "white",
    strokeThickness: 0,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffsetX: 2,
    shadowOffsetY: 2
};
K.xxxscoreTextStyle = {
	font: '18pt ' + K.font,
    fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.xxxsignTextStyle = {
	font: '16pt ' + K.font,
    fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.xxxsignSmallTextStyle = {
	font: '9pt ' + K.font,
    fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.lastMatchTO = 5000;
