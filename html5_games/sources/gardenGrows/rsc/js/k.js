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
 
 K.widthPct = 0.9;
 K.baseY = 400;
 K.leafHeight = 32;
 K.leafWidth = 55;
 K.stemHeight = 32;
 K.stemDipY = 10;
 
 
 K.flowerHead = {
     offX: -3,
     offY: -37,
     width: 60,
     height: 62
 };
 K.flowerHead1 = {
     offX: -10,
     offY: -60
 };
 K.flowerHead2 = {
     offX: -25,
     offY: -55
 };
 K.flowerHead3 = {
     offX: -30,
     offY: -60
 };
K.flowerDarkTO = 500;
K.growTS = 3000; // grow every 3 seconds
