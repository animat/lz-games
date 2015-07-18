/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'cliffhanger';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
// K.filefx = 'svg';
K.renderType = Phaser.CANVAS;
// K.renderType = Phaser.WEBGL;
// K.renderForce = true;
K.renderForce = false;

K.renderFPS = 1;
K.cjsTS = 1000; // time (ms) between CJS draws 
  
K.nodeTextStyleLeft = {
    font: '16pt ' + K.font,
    fill: '#005500',
    align: 'center',
    stroke: "white",
    strokeThickness: 0,
    shadowColor: '#00aa00',
    shadowOffsetX: 2,
    shadowOffsetY: 2
};
K.nodeTextStyleRight = {
    font: '16pt ' + K.font,
    fill: '#ddffdd',
    align: 'center',
    stroke: "white",
    strokeThickness: 0,
    shadowColor: '#00aa00',
    shadowOffsetX: 2,
    shadowOffsetY: 2
};

K.leftTreeX = 15;
K.rightTreeX = 490;
K.leftTopY = 150;
K.rightTopY = 200;
