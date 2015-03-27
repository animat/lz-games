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

Lgz.xxinit = function () {
    'use strict';
    var mgr;
   
    mgr = new LgzLib.Mgr(Lgz, K.urlGamePrefix);
    mgr.sceneInit();
    mgr.scenes.splash.start();
 
};
Lgz.init = function () {
    'use strict';
    var mgr;
   
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
    console.log('Lgz._cbMgrReady: ');
    mgr.sceneInit();
    mgr.scenes.splash.start();
};
