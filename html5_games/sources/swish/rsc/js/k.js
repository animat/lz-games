/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'swish';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
// K.filefx = 'svg';
K.renderType = Phaser.CANVAS;
// K.renderType = Phaser.WEBGL;
// K.renderForce = true;
K.renderForce = false;
K.renderFPS = 5;
K.cjsTS = 1000;
  
K.nodeTextStyle = {
    font: '16pt ' + K.font,
    fill: '#000000',
    align: 'center',
    stroke: "#ffffff",
    strokeThickness: 0,
    shadowColor: '#000000',
    shadowOffsetX: 0,
    shadowOffsetY: 0
};
