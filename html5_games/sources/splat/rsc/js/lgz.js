
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
	$('#lgzBtnPlay').attr('resname', 'IDS_PLAY_GAME');

    mgr = new LgzLib.Mgr(
        Lgz,
        K.urlGamePrefix,
        function () {
            Lgz._cbMgrReady(mgr);
        }
    );
 
};
Lgz._cbMgrReady = function (mgr) {
    'use strict';
    mgr.sceneInit();
    mgr.scenes.splash.start();   
};