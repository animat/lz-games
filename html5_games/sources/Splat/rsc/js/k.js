/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'splat';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
// K.filefx = 'svg';
K.renderType = Phaser.CANVAS;
//K.renderType = Phaser.WEBGL;
// K.renderForce = true;
K.renderForce = false;
K.renderFPS = 15;

K.welcomeBgOffX = 0;
K.welcomeBgOffY = 0;
 
K.welcomePlayX = 520;
K.welcomePlayY = 50;



K.mainBgWidth = 640;
K.mainBgHeight = 480;
K.mainBgOffX = 0;
K.mainBgOffY = 0;

K.textTO = 200;

K.balloonScale = 1;

K.nodeTextStyle = { font: '16pt ' + K.font, fill: '#ffffff', align: 'center', align: 'center'};
K.balloonTextStyle = {
	font: '14pt ' + K.font,
	fill: '#ffffff',
        stroke: '#ffffff',
        strokeThickness: 2,
	align: 'center'
};
K.clockTextStyle = {
	font: '14pt ' + K.font,
	fill: '#ffffff',
	align: 'center'
};
K.clockX = K.canvasWidth  - 30;
K.clockY = K.canvasHeight - 40;

K.lastMatchTO = 5000;
