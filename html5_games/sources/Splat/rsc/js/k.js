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

K.thresholdFPS = 30;
K.checkFPS_TO = 5000; 

// TODO: Can tailPhysics dynamically update depending on the framerate of the game?
K.tailPhysics = true;
K.tailSegments = 8;

K.textTO = 200;
K.textTopMargin = 160;
K.textLeftMargin =  180;
K.textRightMargin = K.canvasWidth- 30;

K.balloonScale = 1;
K.gravity = 100;
K.bal=0;
K.velMaxX = 5;
K.velMaxY  = 5;
K.grabMargin = 20;
K.floorY = 380;

K.nodeTextStyle = { font: '16pt ' + K.font, fill: '#ffffff', align: 'center' };
K.bgTextStyle = { font: '8pt ' + K.font, fill: '#deb887', align: 'center' };

K.balloonTextStyle = {
    font: '14pt ' + K.font,
    fill: '#ffffff',
    stroke: '#ffffff',
    strokeThickness: 0,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffsetX: 1,
    shadowOffsetY: 1,
    align: 'center'
};

K.lastMatchTO = 5000;
