/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'magnetized';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
K.renderType = Phaser.CANVAS;
K.renderForce = false;
K.renderFPS = 15;
K.tileCeiling = 100;
  
// note: extra text props ref if needed
// shadowColor: 'rgba(0,0,0,1)',
// shadowOffsetX: 2,
// shadowOffsetY: 2
K.nodeTextStyle = {
    font: '14pt ' + K.font,
    fill: '#000000',
    align: "left",
    stroke: "white",
    strokeThickness: 0,
    wordWrap: true,
    wordWrapWidth: 300
};
K.wordTextStyle = {
    font: '18pt ' + K.font,
    fill: '#000000',
    align: 'center',
    stroke: "#000000",
    strokeThickness: 0
};
K.ConnectedWordStyle = {
    fill: '#00aaff',
    stroke: "#ffffff",
    strokeThickness: 1,
    shadowBlur: 20,
    shadowColor: "#00aaff"
}
