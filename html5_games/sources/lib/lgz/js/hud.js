/*global
	K: true,
	$: true,
	KTYPE: true,
	Phaser: true,
	ivx: true,
	xprint: true,
	window: true,
	document: true,
	console: true
*/

var LgzLib = LgzLib || {};
var g = g || {};

LgzLib.Hud = function (mgr) {
	'use strict';
	var thisObj, btnList, game, lang, eBody,
		resizeDirty,
		$lgzVP, $lgzHide, eWin, $lgzMin,
		$lgzBtnFS, $lgzBtnExit, $winPlay;
	
	thisObj = this;
	resizeDirty = false;
	game = mgr.game;
	lang = mgr.lang;
	eBody = $('body')[0];

	$lgzVP = $('#lgzViewPort');
	$lgzHide = $('[lgzHide]');
	$lgzMin = $('[lgzMin]');
        
	$lgzBtnFS = $('#lgzHudFullScreen');
	$lgzBtnExit = $('#lgzHudExit');
	$winPlay = $('#winPlay');

	eWin =  document.getElementById('lgzContainer');
	$(window).resize(function () {
		thisObj.onResize();
	});

	thisObj.requestedFS = false;

	thisObj.onResizePost2 = function () {
		eWin.style.width = game.canvas.style.width;
		eWin.style.height = game.canvas.style.height;

		//for ipad
		if (!game.device.desktop &&  thisObj.isFullScreen()) {
			window.scrollTo(0, 0);
		}
	};
	thisObj.onResizePost = function () {
		resizeDirty = false;
		console.debug('onResizePost:');
		if (!thisObj.isFullScreen()) {
			console.debug('onResizePost: !isFS');
			thisObj.fullScreenStopPost();

		}
		console.debug('onResizePost: isFS');
//ivanix: debug
		if (thisObj.orientChanged()) {
			if (thisObj.isLandscape()) {
				thisObj.enteredLandscape();
			} else {
				thisObj.leftLandscape();
			}
		}
		
		if (!game.device.desktop) {
			thisObj.toggleFsButtons();
		}
		thisObj.onResizePost2();
	};
	thisObj.onResize = function () {
		console.debug('onResize');
		if (resizeDirty) {
			return;
		}
		resizeDirty = true;
		window.setTimeout(function () { thisObj.onResizePost(); }, 100);
	};
	thisObj.scaleRefreshTO = function () {
		window.setTimeout(function () { game.scale.refresh(); }, 100);
	};
	thisObj.viewPortNormal = function () {
		$lgzVP.attr('content', '');
	};
	thisObj.viewPortFsCustom = function () {
		return;
	//todo: this string should be determined only once at startup.
		if (game.device.iPhone) {
			//$lgzVP.attr('content', 'user-scalable=no, width=640, height=480, minimal-ui');
			
			$lgzVP.attr('content', 'user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui');
			return;
		}
		if (game.device.iPhone4) {
			//$lgzVP.attr('content', 'user-scalable=no, width=640, height=480, minimal-ui');
			$lgzVP.attr('content', 'user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui');
			return;
		}
	};
	thisObj.viewPortFsDefault = function () {
		$lgzVP.attr('content', 'user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1.0, maximum-scale=1.0, minimal-ui');
		
	};
	thisObj.fullScreenStart = function () {
		thisObj.requestedFS = true;

		thisObj.viewPortFsDefault();
		window.setTimeout(
			function () { thisObj.viewPortFsCustom();
				},
			500
		);

		$lgzHide.css('display', 'none');
		//$lgzMin.css('width', '100%');
		//$lgzMin.css('min-width', '100%');
		$lgzMin.addClass('lgzMin');

		game.scale.fullScreenTarget =  document.getElementById('lgzContainer');
                
		//note: use SHOW_ALL to keep aspect
		//game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		//game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setShowAll();
                
		game.scale.startFullScreen(true);
		
		thisObj.scaleRefreshTO();
		if (!game.device.desktop) {
			window.setTimeout(
				function () { thisObj.onResize();
					},
				200
			);
		}
               
		
	};
	thisObj.fullScreenStopPost = function () {

		console.debug('Lgz.hud.fullScreenStopPost:');
		game.scale.width = K.canvasWidth;
		game.scale.height = K.canvasHeight;
		game.scale.setSize();

		eBody.style.width = '';
		eBody.style.height = '';
		$lgzHide.css('display', '');
		//$lgzMin.css('width', '');
		//$lgzMin.css('min-width', '');
		$lgzMin.removeClass('lgzMin');

		// mgr.resume();
		// thisObj.onResize();

	};
	thisObj.fullScreenStop = function () {
		console.debug('Lgz.hud.fullScreenStop:');

		thisObj.requestedFS = false;
		if (!game.device.iOS) {
			game.scale.stopFullScreen();
		}
		game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

		//ivanix: hack to remove h/w properties set by document['webkitCancelFullScreen']();
		//window.setTimeout(function () { thisObj.fullScreenStopPost(); }, 100);
		//window.setTimeout(function () { thisObj.onResize(); }, 500);
	};
	thisObj.isFullScreen = function () {
		//
		//ivanix: lgz needs its own fullscreen definition
		//	because of embedded canvas html and for iOS limitation
		//
		if (game.device.desktop) {
			if (game.scale.isFullScreen) {
				return true;
			} else {
				return false;
			}
		}
		if (thisObj.requestedFS) {
			return true;
		}
/*
		if (game.scale.width > K.canvasWidth) {
			return true;
		}
		if (game.scale.height > K.canvasHeight) {
			return true;
		}
*/
		return false;
		
	};
	thisObj.isLandscape = function () {
		//ivanix: we need our own landscape check, 
		// seems bug in phaser that distorts aspect ratio (EXACT_FIT)
		// even though we set to SHOW_ALL
		if (window.innerWidth > window.innerHeight) {
			return true;
		}
		return false;
		
	};
	thisObj.orientChanged = function () {
		var o;
		o = thisObj.isLandscape();
		if (thisObj.orient === o) {
			return false;
		}
		thisObj.orient = o;
		return true;
	};
	thisObj.toggleFsButtons = function () {
		var fs, desktop;
		fs = thisObj.isFullScreen();
		desktop = game.device.desktop;
console.debug('toggleFsButtons');
		if (!fs) {
console.debug('toggleFsButtons: 1');
			if (desktop) {
				$lgzBtnFS.css('display', 'block');
				$winPlay.removeClass('modal');
			} else {
				$lgzBtnFS.css('display', 'none');
			}
			$lgzBtnExit.css('display', 'none');
		} else {
console.debug('toggleFsButtons: 2');
			if (desktop) {
				$lgzBtnFS.css('display', 'block');
				$lgzBtnExit.css('display', 'none');
			} else {
				$lgzBtnFS.css('display', 'none');
				$lgzBtnExit.css('display', 'block');
			}
                
            
		}
	};
	thisObj.fullScreenToggle = function () {
console.debug('fullScreenToggle');
		if (thisObj.isFullScreen()) {
console.debug('fullScreenToggle:1');
			thisObj.fullScreenStop();
		} else {
console.debug('fullScreenToggle:2');
			thisObj.fullScreenStart();
		}
	};
	thisObj.leftLandscape = function () {
		console.debug('Lgz.hud.leftLandscape');
		document.getElementById('lgzOrientWrap').style.display = 'block';
        mgr.pause();
		
	};
	thisObj.enteredLandscape = function () {
		console.debug('Lgz.hud.enteredLandscape');
		document.getElementById('lgzOrientWrap').style.display = 'none';
        mgr.resume();

	};
	thisObj.leftPortrait = function () {
		console.debug('Lgz.hud.leftPortrait');
        mgr.pause();
		document.getElementById('lgzOrientWrap').style.display = 'block';
	};
	thisObj.enteredPortrait = function () {
		console.debug('Lgz.hud.enteredPortrait');
		document.getElementById('lgzOrientWrap').style.display = 'none';
        mgr.resume();

	};
	thisObj.forceLandscape = function () {
		return;
		game.scale.forceLandscape = true;
		game.scale.enterIncorrectOrientation.add(thisObj.leftLandscape, this);
		game.scale.leaveIncorrectOrientation.add(thisObj.enteredLandscape, this);
	};
	thisObj.forcePortrait = function () {
		game.scale.forceLandscape = true;
		game.scale.enterIncorrectOrientation.add(thisObj.leftPortrait, this);
		game.scale.leaveIncorrectOrientation.add(thisObj.enteredPortrait, this);
	};
    thisObj.winOpen = function (winid) {
        var win, onClose;
        
        mgr.pause();
 
        $('#' + winid).css('display', 'block');

    };
    thisObj.winClose = function (winid, resume) {
		if (resume) {
			mgr.resume();
		}
		$('#' + winid).css('display', 'none');
 
    };
    thisObj.winCloseAll = function (resume) {
		if (resume) {
			mgr.resume();
		}
		$('#lgzHud .win').css('display', 'none');
 
    };
    thisObj.localize = function () {
        var i, resname, val;
 
        $('[resname]').each(
            function (i) {
                resname = $(this).attr('resname');
                val = lang.str(resname);
                $(this).text(val);
            }
        );
         
    };
};
