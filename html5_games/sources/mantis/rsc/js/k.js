/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'mantis';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
K.renderType = Phaser.CANVAS;
K.renderForce = false;
K.renderFPS = 15;

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
