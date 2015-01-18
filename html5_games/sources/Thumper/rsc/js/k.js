/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'thumper';
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
K.xdiv = 250; 
K.ydiv = 150;
*/
K.xdiv = 200; 
K.ydiv = 60;

K.xmin =  10;
K.xmax = 590;
K.ymin =  70;
K.ymax = 390;

K.y1 = 100;
K.xmin1 = (600 * 2/5)|0;
K.xmax1 = (600 * 3/5)|0;
 
K.frameRate = 50;
K.showTO = 5000;

K.nodeTextStyle = { 
    font: '18pt ' + K.font,
    fill: '#ffffff',
    align: 'center'
};
K.popupTextStyle = {
	font: '18pt ' + K.font,
        fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.scoreTextStyle = {
	font: '18pt ' + K.font,
        fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.signTextStyle = {
	font: '16pt ' + K.font,
        fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.signSmallTextStyle = {
	font: '9pt ' + K.font,
        fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.lastMatchTO = 5000;