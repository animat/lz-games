
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

	mgr = new LgzLib.Mgr(K.urlGamePrefix);
	mgr.addScene('Splash', Lgz.SceneSplash);
	mgr.addScene('Welcome', Lgz.SceneWelcome);
	mgr.addScene('Main', Lgz.SceneMain);
	// mgr.startScene('Splash');
	Lgz.mgr = mgr;
	Lgz.hud = Lgz.mgr.hud;
	mgr.nm.load(Lgz.initDone, Lgz.initErr);
};
Lgz.initDone = function () {
	'use strict';
	Lgz.mgr.startScene('Splash');
};
Lgz.initErr = function () {
	'use strict';
	console.error('LgzLibQA failed');
};
Lgz.confirmExit = function () {
	'use strict';
    Lgz.hud.winOpen('winExitConfirm');
};
