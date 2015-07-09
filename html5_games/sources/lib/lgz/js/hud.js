/*global
	$: true,
    BigScreen: true,
	K: true,
	KTYPE: true,
	Phaser: true,
	ivx: true,
	xprint: true,
	window: true,
	document: true,
	console: true
*/
/*jslint  nomen: true */

var LgzLib = LgzLib || {};
var g = g || {};

LgzLib.Hud = function (mgr) {
    'use strict';
    var thisObj, btnList, game, lang, eBody,
        resizeDirty,
        $lgzVP, $lgzOrient, $lgzOrientWrap, $lgzCanvas,
        $lgzHide, lgzContainer, $lgzMin, $lgzHud,
        $lgzHudMenuBar, $lgzBtnFS, $lgzBtnExit, $winPlay, $lgzHudLogo;

    thisObj = this;
    game = mgr.game;
    lang = mgr.lang;

    thisObj.ORIENT = {NONE: 0, PORTRAIT: 1, LANDSCAPE: 2};
    thisObj.orient = thisObj.ORIENT.LANDSCAPE;

    resizeDirty = false;

    eBody = $('body')[0];

    $lgzVP = $('#lgzViewPort');
    $lgzOrient = $('#lgzOrient');
    $lgzOrientWrap = $('#lgzOrientWrap');

    $lgzCanvas = $('#lgzGameCanvas').filter(':first');
    $lgzHide = $('[lgzHide]');
    $lgzMin = $('[lgzMin]');
    $lgzHud  = $('#lgzHud');
    $lgzHudMenuBar = $('#lgzHudMenuBar');
    $lgzHudLogo = $('#lgzHudLogo');

    $lgzBtnFS = $('#lgzHudFullScreen');
    $lgzBtnExit = $('#lgzHudExit');
    
    

    $winPlay = $('#winPlay');
    thisObj.objArr = [];
    
    lgzContainer =  document.getElementById('lgzContainer');

    thisObj.requestedFS = false;
    
    


    thisObj.print = function (str) {
        $lgzHudLogo.text(str);
    };
    thisObj.forceLandscape = function () {
        //ivanixcu:todo: deprecated. remove from game code before  removing this stub
    };
    thisObj.isLandscape = function () {
        //ivanix: we need our own landscape check, 
        // seems bug in phaser that distorts aspect ratio (EXACT_FIT)
        // even though we set to SHOW_ALL
        if (window.hasOwnProperty('orientation')) {
            if (window.orientation === 0 || window.orientation === 180) {
                return false;
            }
            return true;
        }
        if (window.innerWidth > window.innerHeight) {
            return true;
        }
        return false;

    };
    thisObj.orientGet = function () {
        if (thisObj.isLandscape()) {
            return thisObj.ORIENT.LANDSCAPE;
        }
        return thisObj.ORIENT.PORTRAIT;
    };
    thisObj.orientManage = function () {
        var orient;
        orient = thisObj.orientGet();

        if (thisObj.orient && thisObj.orient !== orient) {
            thisObj.orientWrong = true;
            mgr.pause();
            switch (thisObj.orient) {
            case thisObj.ORIENT.LANDSCAPE:
                $lgzOrient.text("Please Rotate To Landscape");
                break;
            case thisObj.ORIENT.PORTRAIT:
                $lgzOrient.text("Please Rotate To Portrait");
                break;
            }
            $lgzOrientWrap.css('display', 'block');
        } else {
            if (thisObj.orientWrong) {
                $lgzOrientWrap.css('display', 'none');
                mgr.resume();
                thisObj.orientWrong = false;
            }
        }
        
    };
    thisObj.orientNormalRequest = function () {
        var mf, CK;
        mf = mgr.msgframe;
        CK = mf.CK;
        if (mf.parentIsNative) {
            mf.sendToParent(CK.OrientNormal);
        }
    };
    thisObj._orientLockRequest = function () {
        window.setTimeout(
            function () {
                mgr.game.paused = false;
            },
            500
        );
    };
    thisObj.orientLockRequest = function () {
        var mf, CK;
        console.log('orientLockRequest: paused: ' + mgr.game.paused);
        mf = mgr.msgframe;
        CK = mf.CK;
        if (mf.parentIsNative) {

            thisObj.orientManage = function () {};

            switch (thisObj.orient) {
            case thisObj.ORIENT.PORTRAIT:
                mf.sendToParent(CK.OrientLockPortrait);
                break;
            case thisObj.ORIENT.LANDSCAPE:
                mf.sendToParent(CK.OrientLockLandScape);
                break;
            }
            thisObj._orientLockRequest();
        }
    };
    thisObj.onResizePost2 = function () {
        lgzContainer.style.width = game.canvas.style.width;
        lgzContainer.style.height = game.canvas.style.height;

        //for ipad
        if (!game.device.desktop &&  thisObj.isFullScreen()) {
            window.scrollTo(0, 0);
        }
        mgr.scenes.current.eventResized();
    };
    thisObj.onResizePost = function () {
        
        resizeDirty = false;
        if (!thisObj.isFullScreen()) {
            thisObj.fullScreenStopPost();
        }

        if (!game.device.desktop) {
            thisObj.toggleFsButtons();
            thisObj.orientManage();
        }
        thisObj.onResizePost2();
    };
    thisObj.onResize = function () {
        if (resizeDirty) {
            console.log('LgzLib.Hud.onResize: ' + resizeDirty);
            return;
        }
        console.log('LgzLib.Hud.onResize: ' + resizeDirty);
        resizeDirty = true;
        window.setTimeout(function () { thisObj.onResizePost(); }, 100);
    };

    thisObj.onOrientChange = function (event) {
        console.log('LgzLib.Hud.onOrientChange:');
        this.onResize();
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
    thisObj.fullScreenMsgFrame = function (flag) {
        var CK, msgframe;
        msgframe = mgr.msgframe;
        CK = msgframe.CK;
        if (flag) {
            msgframe.sendToParent(CK.ViewIsFullScreen);
        } else {
            msgframe.sendToParent(CK.ViewIsNormal);
        }
    };
    thisObj.fullScreenStart = function () {
        console.log('LgzLib.Hud.fullScreenStart: ');
        thisObj.requestedFS = true;

        $lgzHide.css('display', 'none');
        $lgzMin.addClass('lgzMin');

        $lgzHud.addClass('fs');
        $lgzHudMenuBar.addClass('fsbar');
        thisObj.viewPortFsDefault();

        game.scale.fullScreenTarget =  document.getElementById('lgzContainer');

        //note: use SHOW_ALL to keep aspect
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setShowAll();

        game.scale.startFullScreen(true);
        console.log('LgzLib.Hud.fullScreenStart: past return');
        if (!game.device.desktop) {
            thisObj.fullScreenMsgFrame(true);
        }
        return;
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
            
        /*
         * ivanixcu:note: something leaves 'min-height' in html element after leaving fullscreen
         */
        console.log('LgzLib.Hud.fullscreenStopPost');
        $('html').attr('style', '');

    };
    thisObj.fullScreenStop = function () {

        thisObj.requestedFS = false;
        if (!game.device.desktop) {
            thisObj.fullScreenMsgFrame(false);
        }
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
            }
            return false;
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
    thisObj.winOpen = function (winid, nopause) {
        var win, onClose;
        
        if (!nopause) {
            mgr.pause();
        }
        $('#' + winid).css('display', 'block');
        
        if (winid === "winBug") {
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
    thisObj._localizeHUD = function () {
        var i, resname, val;
 
        $('[resname]').each(
            function (i) {
                resname = $(this).attr('resname');
                val = lang.str(resname);
                $(this).text(val);
            }
        );
         
    };
    thisObj._localizeCJS = function () {
        var strTags, p;
         console.log('LgzLib.Hud._localizeCJS');
        
        if (!mgr.cjs || !mgr.cjs.strTags) {
            console.log('LgzLib.Hud._localizeCJS: no cjs found');
            return;
        }
 
        strTags =  mgr.cjs.strTags;
        for (p in strTags) {
            if (strTags.hasOwnProperty(p)) {
                strTags[p](lang.str(p));
            }
        }
        
         
    };
    thisObj.localize = function () {
        var i, resname, val;
 
        thisObj._localizeHUD();
        thisObj._localizeCJS();
         
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
            function () {
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
            $('#winHint [subref=none]').css('display', 'block');
            return;
        }
        $winHintAvl = $('#winHint [subref=avail]');
        $winHintAvl.css('display', 'block');
        for (i = 0; i < hlist.length; i += 1) {
            thisObj.hintAdd($winHintAvl, hlist[i]);
        }
            
    };
    thisObj.objJQ = function (jqstring) {
        var $obj;
        $obj = $(jqstring);
        $obj.lgzProps = {};
        $obj.extend({
            lgzHudCssPV: function (cssprop, virtpx) {
                var realpx, scalex, scaley;
                if (thisObj.isFullScreen()) {
                    scalex = $lgzCanvas.width() / game.canvas.width;
                    scaley = $lgzCanvas.height() / game.canvas.height;
                } else {
                    scalex = 1;
                    scaley = 1;
                }
                $obj.scalex = scalex;
                $obj.scaley = scaley;
                switch (cssprop) {
                case 'width':
                case 'left':
                case 'right':
                case 'padding-left':
                case 'padding-right':
                case 'margin-left':
                case 'margin-right':
                    if (virtpx === 'auto') {
                        realpx = virtpx;
                    } else {
                        realpx = virtpx * scalex;
                    }
                        
     
                    $obj.css(cssprop, realpx);
                    break;
                case 'height':
                case 'top':
                case 'bottom':
                case 'padding-top':
                case 'padding-bottom':
                case 'margin-top':
                case 'margin-bottom':
                case 'font-size':
                    if (virtpx === 'auto') {
                        realpx = virtpx;
                    } else {
                        realpx = virtpx * scaley;
                    }
                    $obj.css(cssprop, realpx);
                    break;
                case 'border-radius':
                    if (virtpx === 'auto') {
                        realpx = virtpx;
                    } else {
                        realpx = virtpx * ((scalex + scaley) / 2);
                    }
                    $obj.css(cssprop, realpx);
                    break;
                }
                
            },
            lgzHudCssSet: function (cssprops) {
                var prop;
                for (prop in cssprops) {
                    if (cssprops.hasOwnProperty(prop)) {
                        $obj.lgzHudCssPV(prop, cssprops[prop]);
                    }
                }
            },
            lgzHudCssGet: function (cssprops) {
                var props, val, prop;
                props = {};
                for (prop in cssprops) {
                    if (cssprops.hasOwnProperty(prop)) {
                        val =  $obj.css(prop);
                        if (val !== '0px') {
                            if (val !== 'auto') {
                                props[prop] = parseInt(val, 10);
                            } else {
                                props[prop] = val;
                            }
                        }
                    }
                }
                return props;
            },
            lgzHudCssSave: function () {
                $obj.lgzProps = $obj.lgzHudCssGet({
                    'height': null,
                    'width': null,
                    'top': null,
                    'bottom': null,
                    'left': null,
                    'right': null,
                    'margin-top': null,
                    'margin-bottom': null,
                    'margin-left': null,
                    'margin-right': null,
                    'padding-top': null,
                    'padding-bottom': null,
                    'padding-left': null,
                    'padding-right': null,
                    'font-size': null,
                    'border-radius': null
                });
              
            },
            lgzHudCssResize: function () {
                $obj.lgzHudCssSet($obj.lgzProps);
            }
        });
        thisObj.objArr.push($obj);
        return $obj;
            
    };
    thisObj.objArrSave = function () {
        var i;
        for (i = 0; i < thisObj.objArr.length; i += 1) {
            thisObj.objArr[i].lgzHudCssSave();
        }
    };
    thisObj.objArrResize = function () {
        var i, $obj;
        for (i = 0; i < thisObj.objArr.length; i += 1) {
            $obj = thisObj.objArr[i];
            $obj.lgzHudCssSet($obj.lgzProps);
        }
    };

    thisObj.bigScreenEnterCb  = function () {
        
    };
    thisObj.bigScreenExitCb = function () {
        
    };
    thisObj.bigScreenErrorCb = function () {
        
    };
    thisObj.bigScreenStart = function () {
        console.log('LgzLib.Hud.bigScreenStart: request');
        BigScreen.request(
            lgzContainer,
            thisObj.bigScreenEnterCb,
            thisObj.bigScreenExitCb,
            thisObj.bigScreenErrorCb
        );
    };
    thisObj.bigScreenStop = function () {
        BigScreen.exit();
    };
    thisObj.toggleVisibility = function ($var) {
        var display;
        display = $var.css('visibility');
        if (display === 'visible') {
            $var.css('visibility', 'hidden');
        } else {
            $var.css('visibility', 'visible');
        }
    };
    thisObj._inputFxShow = function () {
        thisObj.$lgzInputFx.css('visibility', 'visible');
    };
    thisObj._inputFxHide = function () {
        thisObj.$lgzInputFx.css('visibility', 'hidden');
        thisObj.$lgzInput.removeAttr('readonly');
    };
    thisObj._inputFxHideTO = function () {
        window.setTimeout(
            function () { thisObj._inputFxHide();
                    },
            0
        );
    };
    thisObj._inputFxCssCopy = function (p) {
        thisObj.$lgzInputFx.css(p, thisObj.$lgzInput.css(p));
    };
    thisObj._inputFxCssSync = function () {
        thisObj._inputFxCssCopy('top');
        thisObj._inputFxCssCopy('left');
        thisObj._inputFxCssCopy('width');
        thisObj._inputFxCssCopy('height');
        thisObj._inputFxCssCopy('font');
        thisObj._inputFxCssCopy('font-size');
        thisObj._inputFxCssCopy('border-width');
        thisObj._inputFxCssCopy('padding');
    };
    thisObj.inputFxWrong = function (correct) {
        var a, i, len, mask, match, sel, $lgzInputFx, badopts;
        console.log('LgzLib.Hud.inputFXWrong');
        
        sel = "span";
        thisObj.$lgzInput.attr('readonly', 'true');
        a = thisObj.$lgzInput.val();
        thisObj.$lgzInputFx.text(a);
        thisObj.$lgzInput.val('');
        
        match = true;
        mask = "";
        for (i = 0; i < a.length; i += 1) {
            if (a.charAt(i) === correct.charAt(i)) {
                if (!match) {
                    mask += "</" + sel + ">";
                }
                mask += a.charAt(i);

                match = true;
            } else {
                if (match) {
                    mask += "<" + sel + ">";
                }
                mask += a.charAt(i);
                match = false;
            }
        }
        if (!match) {
            mask += "</" + sel + ">";
        }
        badopts = LgzLib.copy(K.inputFxWrongOpts);
        badopts.replacement = mask;
        badopts.onElementComplete = function () {
            thisObj._inputFxHideTO();
        };
        g.bo = badopts;
        thisObj._inputFxCssSync();
        thisObj._inputFxShow();
        thisObj.$lgzInputFx.letterfx(badopts);

    };

    thisObj._inputAccentInit = function () {
        var $lgzHudAccent, $lgzAccentBar;
        $lgzHudAccent = $('#lgzHudAccent');
        $lgzAccentBar = $('#lgzAccentBar');
        
        $lgzHudAccent.click(function () {
            thisObj.toggleVisibility($lgzAccentBar);
        });
        console.log('LgzLib.Hud.initAccent: game? ' + game);
   
        if (game.device.desktop) {
            $lgzHudAccent.css('visibility', 'visible');
        }
    };
    thisObj.inputSelectReplace = function (val) {
        var lgzInput, input, value, bvalue, evalue, pos;
        input  = thisObj.$lgzInput[0];
        bvalue = input.value.substring(0, input.selectionStart);
        evalue = input.value.substring(input.selectionEnd);
        input.value = bvalue + val;
        pos = input.value.length;
        input.value += evalue;
        input.selectionStart = pos;
        input.selectionEnd = pos;
        input.focus();
    };
    thisObj.inputFocus = function () {
        console.log('LgzLib.Hud.inputFocus');
        if (thisObj.$lgzInput) {
            window.focus();
            thisObj.$lgzInput.focus();
        }
    };
    thisObj.inputInit = function () {
        thisObj.$lgzInput = $('#lgzInput');
        thisObj.$lgzInputFx = $('#lgzInputFx');
        thisObj._inputFxCssSync();
        thisObj._inputAccentInit();
        //note: code to fix iframe input focus issue on iOS native app
        thisObj.$lgzInput.focus();
        if (game.device.iOS) {
		    window.document.addEventListener(
		        "touchend",
		        function (event) {
		            console.error('LgzLib.Hud.touchend:  game window taking focus');
		            window.focus();
		        },
		        false
		    );
        }
    };
        
    thisObj._init = function () {
        //ivanixcu: todo: bring in initiation from top of function

        $(window).resize(function () {
            thisObj.onResize();
        });
        if (window.orientation) {
            $(window).on('orientationchange', function (event) {
                thisObj.onOrientChange(event);
            });
        }
    };
    thisObj._init();
};
