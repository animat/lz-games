/*global
    $: true,
    Phaser: true,
    K: true, console: true,
    location: true,
    parent: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */

var g  = g || {};
var LgzLib = LgzLib || {};
LgzLib.MsgFrameConstants = function () {
    'use strict';
    return {
        FrameIsParent: 1,
        FrameIsLoader: 2,
        FrameIsGame: 3,
        FrameIsNative: 4,
        
        OrientIsLandScape: 11,
        OrientIsPortrait: 12,
        OrientIsAny: 13,
        
        ViewIsFullScreen: 21,
        ViewIsNormal: 22,
        
        GameParmsGet: 31,
        GameParmsReply: 32
       
    };
};
LgzLib.MsgFrame = function () {
    'use strict';
    this.init();
};
LgzLib.MsgFrame.prototype.switchEvent = function () {
    'use strict';
};
LgzLib.MsgFrame.prototype.initFrame = function () {
    'use strict';
};
LgzLib.MsgFrame.prototype.init = function () {
    'use strict';
    var thisObj;
    
    this.CK = LgzLib.MsgFrameConstants();
    thisObj = this;
    $(window).on('message', function (e) {
        thisObj.eventSwitch(e.originalEvent.data);
    });
    thisObj.initFrame();
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
    parent.postMessage({'event': event, 'value': value}, location.origin);
};
LgzLib.MsgFrame.prototype.sendToChild = function (event, value) {
    'use strict';
    this.childWin.postMessage({'event': event, 'value': value}, location.origin);
};
//_______________________________________________________________

LgzLib.MsgFrames = {};

LgzLib.MsgFrames.Parent  = function () {
    'use strict';
    LgzLib.MsgFrame.call(this);
};
LgzLib.MsgFrames.Parent.lgzExtends(LgzLib.MsgFrame);

LgzLib.MsgFrames.Parent.prototype.gameParms = function () {
    'use strict';
    var id, urlparms, gameid;

    urlparms = this.getJsonFromUrl();

    if (urlparms.gameid) {
        this.$lgzFrame.attr('gameid', urlparms.gameid);
    }
    if (urlparms.userid) {
        this.$lgzFrame.attr('userid', urlparms.userid);
    }
    urlparms.gameid = this.$lgzFrame.attr('gameid');
    urlparms.userid = this.$lgzFrame.attr('userid');

    return urlparms;

};
LgzLib.MsgFrames.Parent.prototype.viewFullScreen = function () {
    'use strict';
    var $f, w, h, ratio;
    console.log('LgzLib.MsgFrames.Parent.prototype.viewFullScreen');

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
    console.log('viewFullScreen: w x h: ' + w + ' x ' + h);
    
    this.$lgzFrame.width(w);
    this.$lgzFrame.height(h);

};
LgzLib.MsgFrames.Parent.prototype.viewNormal = function () {
    'use strict';
    var $f, w, h, ratio;
    console.log('LgzLib.MsgFrames.Parent.prototype.viewNormal');

    $f = this.$lgzFrame;
    
    $f.css('background', '#ff00ff');
    $f.css('position', '');
    $f.css('top', '');
    $f.css('left', '');
    
    w = parseInt($f.attr('width'), 10);
    h = parseInt($f.attr('height'), 10);
    console.log('viewFullScreen: w x h: ' + w + ' x ' + h);
    this.$lgzFrame.width(w);
    this.$lgzFrame.height(h);

};
LgzLib.MsgFrames.Parent.prototype.eventSwitch = function (msg) {
    'use strict';
    var value;
    console.log('FrameParent.eventSwitch:  event: '
            + msg.event
            + ' value: ' + msg.value
        );
    switch (msg.event) {
    case this.CK.FrameIsLoader:
        break;
    case this.CK.FrameIsGame:
        break;
    case this.CK.GameParmsGet:
        value = this.gameParms();
        this.sendToChild(this.CK.GameParmsReply, value);
        break;

    case this.CK.OrientIsLandScape:
        //todo: set iframe width and height
        break;
    case this.CK.OrientIsPortrait:
        //todo: set iframe width and height
        break;
    case this.CK.ViewIsFullScreen:
        //todo?
        console.log('frameParent: ViewIsFullScreen');
        this.viewFullScreen();
        break;
    case this.CK.ViewIsNormal:
        //todo?
        this.viewNormal();
        break;
    }

};
LgzLib.MsgFrames.Parent.prototype.initFrame = function () {
    'use strict';
    this.$lgzFrame = $('#lgzFrame');
    this.childWin =  this.$lgzFrame[0].contentWindow;
    //todo: sendmsg to native parent if exists.
    this.sendToParent(this.CK.FrameIsParent);
};
//_______________________________________________________________
LgzLib.MsgFrames.Loader  = function () {
    'use strict';
    LgzLib.MsgFrame.call(this);
};
LgzLib.MsgFrames.Loader.lgzExtends(LgzLib.MsgFrame);
LgzLib.MsgFrames.Loader.prototype.loadGame = function (name) {
    'use strict';
    var url, idx;

    //url = K.urlSvrGames + name + '/game.html';
    //url = location.origin + '/'+ name + '/game.html?';
    
    idx = location.pathname.search('/Frame');
    url = location.origin
        + location.pathname.substring(0, idx)
        + '/' + name + '/game.html?';
    console.log('LgzLib.MsgFrames.Loader: url: ' + url);
    
    //todo: test url exists before loading?
    location.href = url;
};
LgzLib.MsgFrames.Loader.prototype.loadInfoOK = function (data) {
    'use strict';
    var name;
    name = $(data).find('gameInfo').attr('gameSWF');
    this.loadGame(name);
};
LgzLib.MsgFrames.Loader.prototype.loadInfoFAIL = function () {
    'use strict';
    console.error('LgzLib.MsgFrameLoader.loadInfo: ERROR');
};
LgzLib.MsgFrames.Loader.prototype.loadInfo = function (gameid) {
    'use strict';
    var thisObj, url;
    thisObj = this;
    url = K.urlSvrXML + 'info.xml?id=' + gameid;
 
    $.get(url, function (data) {
        thisObj.loadInfoOK(data);
    }).error(function () {
        thisObj.loadInfoFAIL();
    });
};
LgzLib.MsgFrames.Loader.prototype.eventSwitch = function (msg) {
    'use strict';
    var parms;
    console.log('FrameLoader.eventSwitch:  event: '
        + msg.event
        + ' value: '
        + msg.value);
    switch (msg.event) {
    case this.CK.GameParmsReply:
        parms = msg.value;
        if (parms.gameSWF) {
            this.loadGame(parms.gameSWF);
        } else {
            this.loadInfo(parms.gameid);
        }
        break;
    }

};
LgzLib.MsgFrames.Loader.prototype.initFrame = function () {
    'use strict';
    this.sendToParent(this.CK.FrameIsLoader);
    this.sendToParent(this.CK.GameParmsGet);
};
//_______________________________________________________________
LgzLib.MsgFrames.Game  = function (mgr, cbInit) {
    'use strict';
    this.lgzMgr = mgr;
    this.lgzHud = mgr.hud;
    this._cbInit = cbInit;
    LgzLib.MsgFrame.call(this);
};
LgzLib.MsgFrames.Game.lgzExtends(LgzLib.MsgFrame);
 
LgzLib.MsgFrames.Game.prototype.loadAccentsOK = function (data) {
    'use strict';
    var i, set, charArr, strHTML, $ac, lgzInput;
    
    set = $(data).find('set');
    charArr = set.find('character');
    strHTML='';
    for (i = 0; i < charArr.length; i += 1) {
        strHTML += '<a href="#" >' + charArr[i].innerHTML + '</a>';
    }
    if (charArr.length) {
        lgzInput = $('#lgzInput')[0];
        $ac =$('#lgzAccentBar');
        $ac[0].innerHTML = strHTML;
        if (lgzInput) {
            $ac.click(function (event) {
                if (event.target !== $ac[0]) {
                    lgzInput.value += event.target.innerHTML;
                }
            });
        }
    }

};
LgzLib.MsgFrames.Game.prototype.loadAccentsFAIL = function () {
    'use strict';
    console.error('LgzLib.MsgFrameGame.loadAccents: ERROR');
};
LgzLib.MsgFrames.Game.prototype.loadAccents = function (gameid) {
    'use strict';
    var thisObj, url;
    thisObj = this;
    url = K.urlSvrXML + 'info.xml?id=' + gameid;
 
    $.get(url, function (data) {
        thisObj.loadAccentsOK(data);
    }).error(function () {
        thisObj.loadAccentsFAIL();
    });
};
LgzLib.MsgFrames.Game.prototype.eventSwitch = function (msg) {
    'use strict';
    var parms;
    console.log('FrameGame.eventSwitch:  event: '
        + msg.event
        + ' value: '
        + msg.value);
    switch (msg.event) {
    case this.CK.GameParmsReply:
        parms = msg.value;
        this.$lgzParms.attr('gameid', parms.gameid);
        this.$lgzParms.attr('userid', parms.userid);
        this._initFrame();
        break;
    }
};
LgzLib.MsgFrames.Game.prototype.gameParmsUrl = function () {
    'use strict';
    var id, urlparms, gameid;

    urlparms = this.getJsonFromUrl();

    if (urlparms.gameid) {
        this.$lgzParms.attr('gameid', urlparms.gameid);

        if (urlparms.userid) {
            this.$lgzParms.attr('userid', urlparms.userid);
        }
        return true;
    }    
    return false;

};
LgzLib.MsgFrames.Game.prototype._initFrame = function () {
    'use strict';
    var gameid;
    
    gameid = this.$lgzParms.attr('gameid');
    this.loadAccents(gameid);
    this._cbInit();  
};
LgzLib.MsgFrames.Game.prototype.initFrame = function () {
    'use strict';
    this.$lgzParms = $('#lgzParms');
 
    
    if(this.gameParmsUrl()) {
        console.log('LgzLib.MsgFrames.Game.initFrame: gameParmsUrl true');
        this._initFrame();        
    } else {
        this.sendToParent(this.CK.FrameIsGame);
        this.sendToParent(this.CK.GameParmsGet);        
    }

};

//_______________________________________________________________

LgzLib.MsgFrames.Native  = function () {
    'use strict';
    LgzLib.MsgFrame.call(this);
};
LgzLib.MsgFrames.Native.lgzExtends(LgzLib.MsgFrame);
