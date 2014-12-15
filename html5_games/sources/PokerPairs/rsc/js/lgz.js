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
    mgr.sceneInit();
    mgr.scenes.splash.start();        
};
