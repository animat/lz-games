
/*global
	$: true,
	Phaser: true,
	K: true,
	console: true,
	window: true,
	LgzLib: true
 */
/*jslint  nomen: true */
var g = {};

var Lgz = Lgz || {};
Lgz.init = function () {
    'use strict';
    var mgr;
    //note: LgzLib Dom has 'IDS_PLAY'. Need 'IDS_PLAY_GAME' for this game
    $("[resname='IDS_CONGRATS']").attr('resname', 'IDS_WIN');
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
    //mgr.hud.orient = mgr.hud.ORIENT.LANDSCAPE; 
    mgr.sceneInit();
    mgr.scenes.splash.start();
};
 
