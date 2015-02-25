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
		$lgzVP, $lgzHide, eWin, $lgzMin, $lgzHud,
		$lgzHudMenuBar, $lgzBtnFS, $lgzBtnExit, $winPlay, $lgzHudLogo;
	
	thisObj = this;
	resizeDirty = false;
	game = mgr.game;
	lang = mgr.lang;
	eBody = $('body')[0];

	$lgzVP = $('#lgzViewPort');
	$lgzHide = $('[lgzHide]');
	$lgzMin = $('[lgzMin]');
        $lgzHud  = $('#lgzHud');
        $lgzHudMenuBar = $('#lgzHudMenuBar');
        $lgzHudLogo = $('#lgzHudLogo');
        
	$lgzBtnFS = $('#lgzHudFullScreen');
	$lgzBtnExit = $('#lgzHudExit');
	$winPlay = $('#winPlay');

	eWin =  document.getElementById('lgzContainer');
	$(window).resize(function () {
		thisObj.onResize();
	});

	thisObj.requestedFS = false;

        thisObj.print = function (str) {
          $lgzHudLogo.text(str);  
        };
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
		if (!thisObj.isFullScreen()) {
			thisObj.fullScreenStopPost();

		}
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
	//note: this function for future use.
	//todo: this string should be determined only once at startup.
		if (game.device.iPhone) {
			$lgzVP.attr('content', 'user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1.0, maximum-scale=1.0, minimal-ui');
			return;
		}
		if (game.device.iPhone4) {
			$lgzVP.attr('content', 'user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1.0, maximum-scale=1.0, minimal-ui');
			return;
		}
	};
	thisObj.viewPortFsDefault = function () {
		$lgzVP.attr('content', 'user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1.0, maximum-scale=1.0, minimal-ui');
		
	};
	thisObj.fullScreenStart = function () {
		thisObj.requestedFS = true;

		$lgzHide.css('display', 'none');
		$lgzMin.addClass('lgzMin');
                
                $lgzHud.addClass('fs');
                $lgzHudMenuBar.addClass('fsbar');
		thisObj.viewPortFsDefault();
		
		
/*
 *      note: per device viewport setting for future use
 *
		window.setTimeout(
			function () { thisObj.viewPortFsCustom();
				},
			500
		);
		
*/
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

		game.scale.width = K.canvasWidth;
		game.scale.height = K.canvasHeight;
		game.scale.setSize();

		eBody.style.width = '';
		eBody.style.height = '';
		$lgzHide.css('display', '');
		$lgzMin.removeClass('lgzMin');

                $lgzHud.removeClass('fs');
                $lgzHudMenuBar.removeClass('fsbar');
		// mgr.resume();
		// thisObj.onResize();

	};
	thisObj.fullScreenStop = function () {

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
 
		if (!fs) {
			if (desktop) {
				$lgzBtnFS.css('display', 'block');
				$winPlay.removeClass('modal');
			} else {
				$lgzBtnFS.css('display', 'none');
			}
			$lgzBtnExit.css('display', 'none');
		} else {
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
		if (thisObj.isFullScreen()) {
			thisObj.fullScreenStop();
		} else {
			thisObj.fullScreenStart();
		}
	};
	thisObj.leftLandscape = function () {
		document.getElementById('lgzOrientWrap').style.display = 'block';
        mgr.pause();
		
	};
	thisObj.enteredLandscape = function () {
		document.getElementById('lgzOrientWrap').style.display = 'none';
        mgr.resume();

	};
	thisObj.leftPortrait = function () {
        mgr.pause();
		document.getElementById('lgzOrientWrap').style.display = 'block';
	};
	thisObj.enteredPortrait = function () {
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
    thisObj.winOpen = function (winid, nopause) {
        var win, onClose;
        
        if(!nopause) {
            mgr.pause();            
        }
        $('#' + winid).css('display', 'block');
        
        if (winid == "winBug") { 
           $("#textbug").focus(); 
         }
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
    
    /*
     * 
     * refactored into separate hints obj
     * 
     */
    thisObj.hintEvent = function (type, punit, pval) {
        console.debug('ERROR! DEPRECATED');
        thisObj.winCloseAll('winHint', false);

        mgr.scenes.main.eventHintPenalty(punit, pval);
        switch (type) {
        case 'giveup':
            mgr.scenes.main.eventHintGiveUp();
            break;
        case 'movetoend':
            mgr.scenes.main.eventHintMoveToEnd();
            break;
        case 'nextletter':
            mgr.scenes.main.eventHintNextLetter();            
            break;
        }
        
    };
    thisObj.hintAdd = function ($winHintAvl, hintnode) {
        var i,  type,   $btn, $penalty, $para, punit, pval;
        type = hintnode.getAttribute('type');
        $btn = $winHintAvl.find('[subref=' + type + ']');
        
        if (!$btn.length) {
            //todo: log error
            return;
        }        

        $btn.css('display', 'inline');
        $penalty = $(hintnode).find('penalty');
        if ($penalty.length) {
            punit = $penalty.attr('unit');
            pval =  $penalty.attr('value');
        }

        $btn.click(
            function() {
                thisObj.hintEvent(type, punit, pval);
            }
        );        
        if (!$penalty.length) {
            return;
        }        
        $para = $btn.find('p')[1];
        if (!$para) {
            return;
        }

        $para.textContent = '+' + pval + ' ' + punit + ' penalty';

    };
    thisObj.hintsInit = function () {
        //note: must be called AFTER nodemgr has loaded xml file
        var hlist, $winHintAvl, i;
        
        hlist = mgr.nm.dataFind('hint');
        if (!hlist.length) {
            $('#winHint [subref=none]').css('display','block');
            return;
        }
        $winHintAvl = $('#winHint [subref=avail]');
        $winHintAvl.css('display','block');
        for(i =0; i < hlist.length; i += 1) {
            thisObj.hintAdd($winHintAvl, hlist[i]);
        }
            
    };    
};
