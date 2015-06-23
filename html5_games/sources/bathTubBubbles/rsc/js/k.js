/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'bathTubBubbles';
K.urlMedia = 'rsc/mma';
K.font = 'Arial';
K.filefx = 'png';
K.renderType = Phaser.CANVAS;
K.renderForce = false;
K.renderFPS = 20;
K.cjsTS = 100; // time (ms) between CJS draws // needs better name :P
  
K.nodeTextStyle = {
    font: '14pt ' + K.font,
    fill: '#000000',
    align: 'center',
    stroke: "white",
    strokeThickness: 0
};
/*
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffsetX: 2,
    shadowOffsetY: 2
*/
 
