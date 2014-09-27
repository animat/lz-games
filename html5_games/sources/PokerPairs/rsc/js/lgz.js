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
        
	mgr = new LgzLib.Mgr(Lgz, K.urlGamePrefix);
	mgr.addScene('Splash', Lgz.SceneSplash);
	mgr.addScene('Welcome', Lgz.SceneWelcome);
	mgr.addScene('Main', Lgz.SceneMain);
	mgr.initScene('Splash');
};
