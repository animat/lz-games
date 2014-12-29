
/*global
	$: true,
	Phaser: true,
	K: true,
	console: true,
	window: true,
	LgzLib: true
 */
/*jslint  nomen: true */

var Lgz = Lgz || {};
Lgz.init = function () {
    'use strict';
    var mgr;

    //note: LgzLib Dom has 'IDS_PLAY'. Need 'IDS_PLAY_GAME' for this game
    //$('#lgzPlayBtn').attr('resname', 'IDS_PLAY_GAME');

    mgr = new LgzLib.Mgr(Lgz, K.urlGamePrefix);

    mgr.sceneInit();
 
    mgr.scenes.splash.start();
};