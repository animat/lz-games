/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'fishing';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
// K.filefx = 'svg';
K.renderType = Phaser.CANVAS;
//K.renderType = Phaser.WEBGL;
// K.renderForce = true;
K.renderForce = false;
K.renderFPS = 15;


K.textTO = 200;

K.balloonScale = 1;

K.penguinX = 0;
K.penguinY = 0;

/*
K.nodeTextStyle = { 
    font: '16pt ' + K.font, 
    fill: '#ffffff', 
    align: 'center', 
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffsetX: 1,
    shadowOffsetY: 1
};
*/
K.nodeTextStyle = {
    font: '10pt ' + K.font,
    fill: '#000000', 
    align: 'center', 
    stroke: "black",
    strokeThickness: 1,
    shadowColor: 'rgba(0,255,255,1)',
    shadowOffsetX: 1,
    shadowOffsetY: 1
};
K.clockTextStyle = {
	font: '14pt ' + K.font,
	fill: '#ffffff',
	align: 'center'
};
K.clockX = K.canvasWidth  - 30;
K.clockY = K.canvasHeight - 40;

