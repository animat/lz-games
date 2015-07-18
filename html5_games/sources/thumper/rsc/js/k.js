/*global
	Phaser: true,
	console: true,
	window: true
 */
/*jslint  nomen: true */

var K = K ||  {};
 
K.urlGamePrefix = 'thumper';
K.urlMedia = 'rsc/mma';

K.font = 'Arial';
K.filefx = 'png';
K.renderType = Phaser.CANVAS;
K.renderForce = false;
// K.renderFPS = 15;
K.renderFPS = 5;
K.xdiv = 200; 
K.ydiv = 60;

K.xmin =  10;
K.xmax = 590;
K.ymin =  70;
K.ymax = 390;

K.y1 = 100;
K.xmin1 = (600 * 2/5)|0;
K.xmax1 = (600 * 3/5)|0;
 
K.Hit = { 'NONE': 0, 'CORRECT': 1, 'WRONG': -1 };

//K.Frame = { Rate: 50, Hole: 5, Lift: 9, Jump: 13, Max: 16};
K.Frame = { Rate: 50, Hole: 5, Lift: 9, Jump: 16, Max: 22};

K.tryRand = { Min: 700, Max: 1500};
K.showMax = 7;

//K.showTO = 5000;
K.showTO = 3000;

K.popBaseWidth = 150;

K.nodeTextStyle = { 
    font: '18pt ' + K.font,
    fill: '#ffffff',
    align: 'center',
    wordWrap: true,
    wordWrapWidth: K.popBaseWidth    
};
K.popupTextStyle = {
	font: '18pt ' + K.font,
        fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center',
	wordWrap: true,
	wordWrapWidth: 80
};
K.scoreTextStyle = {
	font: '18pt ' + K.font,
    fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.signTextStyle = {
	font: '16pt ' + K.font,
        fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
K.signSmallTextStyle = {
	font: '9pt ' + K.font,
        fontWeight: 'bold',
	fill: '#ffffff',
	align: 'center'
};
