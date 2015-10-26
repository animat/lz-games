/*global
    $: true,
    Phaser: true,
    K: true, console: true,
    location: true,
    parent: true,
    window: true,
    screen: true,
    StatusBar: true,
    LgzLib: true
 */
/*jslint  nomen: true */

var g  = g || {};
var LgzLib = LgzLib || {};
LgzLib.MsgFrameConstants = function () {
    'use strict';
    return {
        ParentIsWeb: 1,
        ParentIsNative: 4,
        ChildIsLoader: 2,
        ChildIsGame: 3,
        
        OrientLockLandScape: 11,
        OrientLockPortrait: 12,
        OrientUnlock: 13,
        OrientNormal: 14,
        
        ViewIsFullScreen: 21,
        ViewIsNormal: 22,
        
        GameParmsGet: 31,
        GameParmsReply: 32,

        AlertError: 41,

        IphoneNormal: 101,
        IphoneFsPortrait: 102,
        IphoneFsLandscape: 103

       
    };
};
LgzLib.MsgFrame = function () {
    'use strict';
    this.init();
};
LgzLib.MsgFrame.prototype.eventSwitch = function () {
    'use strict';
};
LgzLib.MsgFrame.prototype.attachToDOM = function () {
    'use strict';
};
LgzLib.MsgFrame.prototype.init = function () {
    'use strict';
    var thisObj, prop;
    // console.log('LgzLib.MsgFrame.prototype.init:');

    thisObj = this;
    this.CK = LgzLib.MsgFrameConstants();

    this.GAME_W = 600;
    this.GAME_H = 425;
    this.GAME_H2W =  ((1000 * this.GAME_H / this.GAME_W)|0)/1000;

    this.FRAME_W = this.GAME_W;
    this.FRAME_H = this.GAME_H;



    this.attachToDOM();

    //
    // note: set default baseUrl {api,games, etc} as defined in kconf.js
    //
    this.baseUrl  = {};
    for (prop in K.baseUrl) {
        if (K.baseUrl.hasOwnProperty(prop)) {
            this.baseUrl[prop] = K.baseUrl[prop];
        }
    }


    $(window).on('message', function (e) {
        thisObj.eventSwitch(e.originalEvent.data);
    });
};
LgzLib.MsgFrame.prototype.urlInfo = function (gameid) {
    'use strict';
    //orig: href = K.urlSvrXML + 'info.xml?id=' + gameid;
    return this.baseUrl.api + '/games/ginfo/' + gameid;
};
LgzLib.MsgFrame.prototype.getJsonFromUrl = function () {
    'use strict';
    var query, result;
    query = location.search.substr(1);
    result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
};
LgzLib.MsgFrame.prototype.sendToParent = function (event, value) {
    'use strict';
    // console.log('LgzLib.MsgFrame.prototype.sendToParent:');
    //parent.postMessage({'event': event, 'value': value}, location.origin);
    parent.postMessage({'event': event, 'value': value}, '*');
};
LgzLib.MsgFrame.prototype.sendToChild = function (event, value) {
    'use strict';
    // console.log('LgzLib.MsgFrame.prototype.sendToChild:');
    //this.childWin.postMessage({'event': event, 'value': value}, location.origin);
    this.childWin.postMessage({'event': event, 'value': value}, '*');
};
//_______________________________________________________________

LgzLib.MsgFrames = {};

LgzLib.MsgFrames.Parent = function () {
    'use strict';

    this.DELAY_FS_HEIGHT = 200;
    this.orientRequest = null;
    this._$super('MsgFrame','constructor');

};
LgzLib.MsgFrames.Parent.lgzExtends(LgzLib.MsgFrame,'MsgFrame');

LgzLib.MsgFrames.Parent.prototype.gameParms = function () {
    'use strict';
    var id, parm, parms, gameid, baseUrl;

    parms = this.getJsonFromUrl();

    if (parms.gameid) {
        this.$lgzFrame.attr('gameid', parms.gameid);
    }
    if (parms.userid) {
        this.$lgzFrame.attr('userid', parms.userid);
    }
    if (parms.gameswf) {
        this.$lgzFrame.attr('gameswf', parms.gameswf);
    }
    if (parms.gameSWF) {
        this.$lgzFrame.attr('gameswf', parms.gameSWF);
    }

    parms.userid = this.$lgzFrame.attr('userid');
    
    parms.gameid = this.$lgzFrame.attr('gameid');

    baseUrl = JSON.parse(JSON.stringify(this.baseUrl));


    baseUrl.lang = this.baseUrl.lang;

    parms.baseUrl = baseUrl;
    parms.gameSWF = this.$lgzFrame.attr('gameswf');
    
    return parms;

};
LgzLib.MsgFrames.Parent.prototype.eventAlertError = function (msg) {
    'use strict';
    window.alert(msg);
};
LgzLib.MsgFrames.Parent.prototype._eventViewFullScreen = function () {
    'use strict';
    var h;
    // console.log('LgzLib.MsgFrames.Parent.prototype._eventViewFullScreen');
    h = $(window).height();
    this.$lgzFrame.height(h);
};
LgzLib.MsgFrames.Parent.prototype.eventViewFullScreen = function () {
    'use strict';
    var thisObj, $f, w, h, ratio;

    // console.log('LgzLib.MsgFrames.Parent.prototype.eventViewFullScreen:');

    $f = this.$lgzFrame;
    
    $f.css('background', '#222222');
    $f.css('position', 'fixed');
    $f.css('top', '0px');
    $f.css('left', '0px');
    
    ratio = 425 / 600;
    w = $(window).width();
    h = Math.round(w * ratio);

    
    // console.log('    calc dim: w x h: ' + w + ' x ' + h);
    
    this.$lgzFrame.width(w);
    this.$lgzFrame.height(h);

    // console.log('    $lgzFrame.width: ' + this.$lgzFrame.width());

    thisObj = this;
    thisObj._fullScreenTOID = window.setTimeout(
        function () {
            window.clearTimeout(thisObj._fullScreenTOID);
            thisObj._eventViewFullScreen();
        },
        thisObj.DELAY_FS_HEIGHT
    );
 
};
LgzLib.MsgFrames.Parent.prototype.eventViewNormal = function () {
    'use strict';
    var $f, w, h, ratio;
    // console.log('LgzLib.MsgFrames.Parent.prototype.eventViewNormal:');

    $f = this.$lgzFrame;
    
    $f.css('background', '#222222');
    $f.css('position', '');
    $f.css('top', '');
    $f.css('left', '');
    
    w = parseInt($f.attr('width'), 10);
    h = parseInt($f.attr('height'), 10);
    // console.log('eventViewNormal: w x h: ' + w + ' x ' + h);
    this.$lgzFrame.width(w);
    this.$lgzFrame.height(h);


};
LgzLib.MsgFrames.Parent.prototype.attachToDOM = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.Parent.prototype.attachToDOM:');
    this.$lgzFrame = $('#lgzFrame');
    this.childWin =  this.$lgzFrame[0].contentWindow;
};
LgzLib.MsgFrames.Parent.prototype.eventSwitch = function (msg) {
    'use strict';
    var value;
    // console.log('LgzLib.MsgFrames.Parent.prototype.eventSwitch:');
    // console.log('    event: ' + msg.event + ' value: ' + msg.value);
    switch (msg.event) {
    case this.CK.GameParmsGet:
        value = this.gameParms();
        value.parentType = this.parentType;
        // console.log('    gameid: ' + value.gameid);
        // console.log('    gameSWF: ' + value.gameSWF);
        this.sendToChild(this.CK.GameParmsReply, value);
        break;

    case this.CK.ViewIsFullScreen:
        // console.log('    frameParent: ViewIsFullScreen');
        this.eventViewFullScreen();
        break;
    case this.CK.ViewIsNormal:
        this.eventViewNormal();
        break;

    case this.CK.AlertError:
        this.eventAlertError(msg.value);
        break;
    }

};
//_______________________________________________________________
LgzLib.MsgFrames.Loader  = function () {
    'use strict';
    this._$super('MsgFrame','constructor');
    
};
LgzLib.MsgFrames.Loader.lgzExtends(LgzLib.MsgFrame,'MsgFrame');
LgzLib.MsgFrames.Loader.prototype.loadGame = function (name) {
    'use strict';
    var href, idx;
    // console.log('LgzLib.MsgFrames.Loader.prototype.loadGame:');
    
    idx = location.pathname.search('/Frame');
    href = this.baseUrl.games
        + '/' + name + '/game.html?';
    // console.log('    href: ' + href);
    
    //todo: test url exists before loading?
    //todo: have parent of iframe monitor for any fails from server
    // and provide message to user (network/svr down) etc.
    //
    location.href = href;
};
LgzLib.MsgFrames.Loader.prototype.loadInfoOK = function (data) {
    'use strict';
    var name;
    // console.log('LgzLib.MsgFrameLoader.prototype.loadInfoOK:');
    name = $(data).find('gameInfo').attr('gameSWF');
    this.loadGame(name);
};
LgzLib.MsgFrames.Loader.prototype.loadInfoFAIL = function (e) {
    'use strict';
    console.error('LgzLib.MsgFrames.Loader.prototype.loadInfoFAIL:' + e.statusText);
};
LgzLib.MsgFrames.Loader.prototype.loadInfo = function (gameid) {
    'use strict';
    var thisObj, href;
    thisObj = this;
    href = this.urlInfo(gameid);
 
    $.get(href, function (data) {
        thisObj.loadInfoOK(data);
    }).error(function (e) {
        thisObj.loadInfoFAIL(e);
    });
};
LgzLib.MsgFrames.Loader.prototype.eventSwitch = function (msg) {
    'use strict';
    var parms, prop;
    // console.log('LgzLib.MsgFrames.Loader.prototype.eventSwitch:');
    // console.log('   event: ' + msg.event + ' value: ' + msg.value);
    switch (msg.event) {
    case this.CK.GameParmsReply:
        parms = msg.value;
        if (parms.baseUrl) {
            for (prop in parms.baseUrl) {
                if (parms.baseUrl.hasOwnProperty(prop)) {
                    this.baseUrl[prop] = parms.baseUrl[prop];
                }
            }
        }
        // console.log('    gameSWF: ' + parms.gameSWF);
        // console.log('    gameid: ' + parms.gameid);
        if (parms.gameSWF && parms.gameSWF.length) {
            // console.log('    eventSwitch: loadGame');
            this.loadGame(parms.gameSWF);
        } else {
            if (parms.gameid && parms.gameid.length) {
                // console.log('    loadInfo');
                this.loadInfo(parms.gameid);
            } else {
                //todo: send errormsg back to parent of iframe to display error on native app
                console.error('    Missing gameid from parent of iframe');
            }
        }
        break;
    }

};
LgzLib.MsgFrames.Loader.prototype.init = function () {
    'use strict';
    this._$super('MsgFrame','init');
    this.sendToParent(this.CK.ChildIsLoader);
    this.sendToParent(this.CK.GameParmsGet);
};
//_______________________________________________________________
LgzLib.MsgFrames.Game = function (mgr, cbInit) {
    'use strict';
    this.DELAY_IPHONE_FS_PORTRAIT = 500;
    this.DELAY_IPHONE_FS_LANDSCAPE = 100;

    this.lgzMgr = mgr;
    this.lgzHud = mgr.hud;
    this._cbInit = cbInit;


    
    this.parentIsNative = false;
    this.parentIsWeb = false;

    this.$transform = $('html');

    this._$super('MsgFrame','constructor');
};
LgzLib.MsgFrames.Game.lgzExtends(LgzLib.MsgFrame,'MsgFrame');
LgzLib.MsgFrames.Game.prototype.gameParmsUrl = function () {
    'use strict';
    var id, parms, gameid;

    parms = this.getJsonFromUrl();

    if (parms.gameid) {
        this.$lgzParms.attr('gameid', parms.gameid);

        if (parms.userid) {
            this.$lgzParms.attr('userid', parms.userid);
        }
        return true;
    }
    return false;

};
LgzLib.MsgFrames.Game.prototype.identifyParent = function (parentType) {
    'use strict';
    switch (parentType) {
    case this.CK.ParentIsWeb:
        this.parentIsWeb = true;
        break;
    case this.CK.ParentIsNative:
        this.parentIsNative = true;
        window.document.addEventListener(
            "touchend",
            function (event) {
                // console.log('LgzLib.MsgFrames.Game.identifyParent: anon():  game window taking focus');
                window.focus();
            },
            false
        );
        break;
    }
};
LgzLib.MsgFrames.Game.prototype.eventIphoneNormal = function (widthRatio) {
    'use strict';
    // console.log('LgzLib.MsgFrames.Game.prototype.eventIphoneNormal:');
    // console.log('    widthRatio: ' + widthRatio);
    this.$transform.css('-webkit-transform-origin','0 0');
    this.$transform.css('-webkit-transform','scale(' + widthRatio + ')');
};
LgzLib.MsgFrames.Game.prototype._eventIphoneFsPortrait = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.Game.prototype._eventIphoneFsPortrait:');

    this.$transform.css('-webkit-transform','scale(1)');
    this.$transform.css('visibility','');

};
LgzLib.MsgFrames.Game.prototype.eventIphoneFsPortrait = function (widthRatio) {
    'use strict';
    var thisObj;

    // console.log('LgzLib.MsgFrames.Game.prototype.eventIphoneFsPortrait:');
    // console.log('    widthRatio: ' + widthRatio);
    this.$transform.css('-webkit-transform-origin','0 0');
    this.$transform.css('-webkit-transform','scale(' + widthRatio + ')');
    
    this.$transform.css('visibility','hidden');
    thisObj = this;
    thisObj._iphoneFsTOID = window.setTimeout(
        function () {
            window.clearTimeout(thisObj._iphoneFsTOID);
            thisObj._eventIphoneFsPortrait();
        },
        this.DELAY_IPHONE_FS_PORTRAIT 
    );
};
LgzLib.MsgFrames.Game.prototype._eventIphoneFsLandscape = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.Game.prototype._eventIphoneFsLandscape:');
    this.$transform.css('-webkit-transform','scale(1)');
    this.$transform.css('visibility','');
};
LgzLib.MsgFrames.Game.prototype.eventIphoneFsLandscape = function () {
    'use strict';
    var thisObj;
    // console.log('LgzLib.MsgFrames.Game.prototype.eventIphoneFsLandscape:');
    this.$transform.css('visibility','hidden');
    thisObj = this;
    thisObj._iphoneFsTOID = window.setTimeout(
        function () {
            window.clearTimeout(thisObj._iphoneFsTOID);
            thisObj._eventIphoneFsLandscape();
        },
        this.DELAY_IPHONE_FS_LANDSCAPE
    );
};
LgzLib.MsgFrames.Game.prototype.eventSwitch = function (msg) {
    'use strict';
    var parms, prop;
    // console.log('LgzLib.MsgFrames.Game.prototype.eventSwitch:');

    // console.log('    event: ' + msg.event + ' value: ' + msg.value);
    switch (msg.event) {
    case this.CK.GameParmsReply:
        parms = msg.value;
        if (parms.baseUrl) {
            for (prop in parms.baseUrl) {
                if (parms.baseUrl.hasOwnProperty(prop)) {
                    this.baseUrl[prop] = parms.baseUrl[prop];
                }
            }
        }
        if (parms.parentType) {
            this.identifyParent(parms.parentType);
        }
        // console.log('   gameid: '  + parms.gameid);
        // console.log('   userid: '  + parms.userid);
        this.$lgzParms.attr('gameid', parms.gameid);
        this.$lgzParms.attr('userid', parms.userid);
        this._cbInit();
        break;
    case this.CK.IphoneNormal:
        this.eventIphoneNormal(msg.value);
        break;
    case this.CK.IphoneFsPortrait:
        this.eventIphoneFsPortrait(msg.value);
        break;
    case this.CK.IphoneFsLandscape:
        this.eventIphoneFsLandscape();
        break;
    }
};
LgzLib.MsgFrames.Game.prototype.init = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.Game.prototype.init');

    this._$super('MsgFrame','init');

    this.$lgzParms = $('#lgzParms');
    if (this.gameParmsUrl()) {
        // console.log('    gameParmsUrl is true');
        this._cbInit();
    } else {
        this.sendToParent(this.CK.ChildIsGame);
        this.sendToParent(this.CK.GameParmsGet);
    }

};
//_______________________________________________________________

LgzLib.MsgFrames.ParentWeb  = function () {
    'use strict';

    this._$super('Parent','constructor');

    this.parentType = this.CK.ParentIsWeb;
};
LgzLib.MsgFrames.ParentWeb.lgzExtends(LgzLib.MsgFrames.Parent,'Parent');
LgzLib.MsgFrames.ParentWeb.prototype.eventViewFullScreen = function () {
    'use strict';
    var $f, w, h, ratio;
    // console.log('LgzLib.MsgFrames.Parent.prototype.eventViewFullScreen');

    $f = this.$lgzFrame;
    
    $f.css('background', '#ff00ff');
    $f.css('position', 'fixed');
    $f.css('top', '0px');
    $f.css('left', '0px');
    
    w = parseInt($f.attr('width'), 10);
    h = parseInt($f.attr('height'), 10);
    ratio = h / w;
    
    w = $(window).width();
    h = Math.round(w * ratio);

    // console.log('    eventViewFullScreen: w x h: ' + w + ' x ' + h);
    
    this.$lgzFrame.width(w);
    this.$lgzFrame.height(h);

};
LgzLib.MsgFrames.ParentNative  = function () {
    'use strict';

    this._$super('Parent','constructor');

    this.DELAY_FS_HEIGHT_IPHONE_PORTRAIT = 1000;
    this.DELAY_FS_HEIGHT_IPHONE_LANDSCAPE = 10;
    this.DELAY_FS_HEIGHT_IPAD_PORTRAIT = 1000;
    this.DELAY_FS_HEIGHT_IPAD_LANDSCAPE = 1000;

    //this.DELAY_FS_HEIGHT = 200;

    this.DELAY_IFRAME_NORMAL = 400;

    this.parentType = this.CK.ParentIsNative;

    //note: dummy obj/fcn for better simul in browser
    if (!screen.lockOrientation) {
        screen.lockOrientation = function () {};
        screen.unlockOrientation = function () {};
    }
    if (!window.StatusBar) {
        window.StatusBar = {};
        window.StatusBar.show = function () {};
        window.StatusBar.hide = function () {};
    }
};
LgzLib.MsgFrames.ParentNative.lgzExtends(LgzLib.MsgFrames.Parent,'Parent');
LgzLib.MsgFrames.ParentNative.prototype.iframePreset = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.iframePreset:');

    var $lgzFrameWrap, frame_w, frame_h;



    if(window.innerWidth < 640) {
        //
        //ivanixcu: set iframe 300x213 for iphone/4/5/6
        //
        frame_w = (window.innerWidth - 20)
        frame_h = Math.ceil(frame_w * this.GAME_H2W);
    } else {
       //ivanixcu: set iframe 600x425 for all others
       frame_w = this.GAME_W;
       frame_h = this.GAME_H;
    }
    this.FRAME_W = frame_w;
    this.FRAME_H = frame_h;

    this.$lgzFrameWrap.css('overflow','hidden');
    this.iframeNormal();

};
LgzLib.MsgFrames.ParentNative.prototype.iframeNormal = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.iframeNormal:');

    var ratioWidth;

    //note: assuming we are locked in portrait mode!
    
    if(window.innerWidth < 640) {
    
        //ivanixcu: set iframe 300x213 for iphone/4/5/6
        // Calc transform scaling based on width ratio
        // Use avl width in parent minus 10px padding on each side of iframe

        this.$lgzFrameWrap.width(this.FRAME_W);
        this.$lgzFrameWrap.height(this.FRAME_H);

        
        ratioWidth = ((window.innerWidth - 20) / this.GAME_W);
        this.sendToChild(this.CK.IphoneNormal, ratioWidth.toFixed(3));
    }
};
LgzLib.MsgFrames.ParentNative.prototype.iframeFsPortrait = function () {
    'use strict';
    var ratioWidth;
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.iframeFsPortrait:');
    // Calc transform scaling based on width ratio
    // Use all width avl in parent 

    this.$lgzFrameWrap.width(window.innerWidth);
    ratioWidth = ((window.innerWidth ) / this.GAME_W);
    this.sendToChild(this.CK.IphoneFsPortrait, ratioWidth.toFixed(3));
};
LgzLib.MsgFrames.ParentNative.prototype.iframeFsLandscape = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.iframeFsLandscape:');
    this.sendToChild(this.CK.IphoneFsLandscape);
};
LgzLib.MsgFrames.ParentNative.prototype.iframeFs = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.iframeFs:');
    if (window.innerWidth < window.innerHeight) {
        if(window.innerWidth < 640) {
           this.iframeFsPortrait();
        }
    } else {
        if(window.innerHeight < 640) {
           this.iframeFsLandscape();
        }
    }
};
LgzLib.MsgFrames.ParentNative.prototype.attachToDOM = function () {
    'use strict';
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.attachToDOM:');

    this._$super('Parent', 'attachToDOM');

    this.$lgzFrameWrap = $('#lgzFrameWrap');

    this.iframePreset();
};
LgzLib.MsgFrames.ParentNative.prototype.eventViewNormal = function () {
    var thisObj;
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.eventViewNormal:');
    thisObj = this;

    this._$super('Parent','eventViewNormal');

    // Note: For native app, width and height is set in $lgzFrameWrap during normal view
    // lgzFrame should be empty. Overriding super's settings. 
    this.$lgzFrame.css('width','');
    this.$lgzFrame.css('height','');

    StatusBar.show();

    thisObj._iframeNormalTOID = window.setTimeout(
        function () {
          window.clearTimeout(thisObj._iframeNormalTOID);
          thisObj.iframeNormal();
        },
        thisObj.DELAY_IFRAME_NORMAL
    );
};
LgzLib.MsgFrames.ParentNative.prototype.eventViewFullScreen = function () {
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.eventViewFullScreen:');
    StatusBar.hide();

    //this.iframeFs();
    //
    if (window.innerWidth < window.innerHeight) {
        //note: Portrait mode
           
        if(window.innerWidth < 640) {
            //note: handle iphone models virtual width < 600
            this.DELAY_FS_HEIGHT =this.DELAY_FS_HEIGHT_IPHONE_PORTRAIT;
            this._$super('Parent','eventViewFullScreen');
            this.iframeFsPortrait();
        } else {
            this.DELAY_FS_HEIGHT =this.DELAY_FS_HEIGHT_IPAD_PORTRAIT;
            this._$super('Parent','eventViewFullScreen');
        }
    } else {
        //note: Landscape mode
            
        if(window.innerHeight < 640) {
            //note: handle iphone models virtual width < 600
            this.DELAY_FS_HEIGHT =this.DELAY_FS_HEIGHT_IPHONE_LANDSCAPE;
            this._$super('Parent','eventViewFullScreen');
            this.iframeFsLandscape();
        } else {
            this.DELAY_FS_HEIGHT =this.DELAY_FS_HEIGHT_IPAD_LANDSCAPE;
            this._$super('Parent','eventViewFullScreen');
        }
    }
};
LgzLib.MsgFrames.ParentNative.prototype.eventOrientNormal = function () {
    // note: here we put display orientation
    // back to normal after game exits
    // - assuming display should return to locked portrait mode.
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.eventOrientNormal:');
    screen.lockOrientation('portrait');
};

LgzLib.MsgFrames.ParentNative.prototype.eventSwitch = function (msg) {
    'use strict';
    var value;
    // console.log('LgzLib.MsgFrames.ParentNative.prototype.eventSwitch:');
    // console.log('    event: ' + msg.event + ' value: ' + msg.value);
    switch (msg.event) {

    //
    // note: requires cordova plugin:
    //       net.yoik.cordova.plugins.screenorientation
    //
    case this.CK.OrientLockLandScape:
        // console.log('    orient request: ' + 'OrientLockLandScape');

        this.orientRequest = msg.event;
        screen.lockOrientation('landscape');
        break;

    case this.CK.OrientLockPortrait:
        // console.log('    orient request: ' + 'OrientLockPortrait');

        this.orientRequest = msg.event;
        screen.lockOrientation('portrait');
        break;

    case this.CK.OrientUnlock:
        // console.log('    orient request: ' + 'OrientUnlock');
        this.orientRequest = msg.event;
        screen.unlockOrientation();
        break;

    case this.CK.OrientNormal:
        // console.log('    orient request: ' + 'OrientNormal');
        this.orientRequest = msg.event;
        this.eventOrientNormal();
        break;

    case this.CK.ChildIsGame:
        this.iframeNormal();
        break;

    default:
        this._$super('Parent','eventSwitch', msg);
        break;

    }

};
