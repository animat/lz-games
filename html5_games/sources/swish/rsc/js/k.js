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
K.renderFPS = 15;
K.syncTS = 1000;
  
K.nodeTextStyle = {
    font: '16pt ' + K.font,
    fill: '#ffffff',
    align: 'center',
    stroke: "white",
    strokeThickness: 0,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffsetX: 2,
    shadowOffsetY: 2
};
