/*global
    $: true,
    Phaser: true,
    K: true, console: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */

var g  = g || {};
var LgzLib = LgzLib || {};
LgzLib.MsgFrameConstants = function() {
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
        
        GameIdGet: 31,
        GameIdReply: 32,
        
        UserIdGet: 41,
        UserIdReply: 42
       
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
    $(window).on('message', function(e) {
        thisObj.eventSwitch(e.originalEvent.data);
    });
    thisObj.initFrame();
};
LgzLib.MsgFrame.prototype.sendToParent = function (event, value) {
    parent.postMessage({'event': event, 'value': value}, location.origin);
};
LgzLib.MsgFrame.prototype.sendToChild = function (event, value) {
    this.childWin.postMessage({'event': event, 'value': value}, location.origin);
};
//_______________________________________________________________

LgzLib.MsgFrames = {};

LgzLib.MsgFrames.Parent  = function () {
    'use strict';
    LgzLib.MsgFrame.call(this);
};
LgzLib.MsgFrames.Parent.extends(LgzLib.MsgFrame);

LgzLib.MsgFrames.Parent.prototype.gameId = function () {
    var id, tail, urlparm, gameid;

    urlparm = document.URL.match(/.*\?xmlid=(.*)/);
    if (urlparm) {
        this.$lgzFrame.attr('game_id', urlparm[1]);
    }


    gameid = this.$lgzFrame.attr('game_id');
    if (gameid !== '') {
        return gameid;
    }

    tail = document.URL.match(/.*\/(.*)$/)[1];
    if (!tail) {
        alert('Error no gameid found!');
        return null;
    }
    id = tail.split('.')[0];
    this.$lgzFrame.attr('gameid', id);

    return id;
};
LgzLib.MsgFrames.Parent.prototype.userId = function () {
    return  this.$lgzParms.attr('userid');
};

LgzLib.MsgFrames.Parent.prototype.eventSwitch = function (msg) {
    var value;
    'use strict';
    console.log('FrameParent.eventSwitch:  event: '+ msg.event + ' value: ' + msg.value);
    switch (msg.event) {
        case this.CK.FrameIsLoader:
            //todo:?
            break;
        case this.CK.FrameIsGame:
            break;
        case this.CK.GameIdGet:
            value = this.gameId();
            this.sendToChild(this.CK.GameIdReply, value);
            break;
        case this.CK.UserIdGet:
            value = this.userId();
            this.sendToChild(this.CK.UserIdReply, value);            
            break;
        case this.CK.OrientIsLandScape:
            //todo: set iframe width and height
            break;
        case this.CK.OrientIsPortrait:
            //todo: set iframe width and height
            break;
        case this.CK.ViewIsFullScreen:
            //todo?  
            break;
        case this.CK.ViewIsNormal:
            //todo? 
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
LgzLib.MsgFrames.Loader.extends(LgzLib.MsgFrame);


LgzLib.MsgFrames.Loader.prototype.loadGame = function (name) {
    var url;

    url = K.urlSvrGames + name + '/frame.html';
    //todo: test url exists before loading?
    location.href = url;
};
LgzLib.MsgFrames.Loader.prototype.loadInfoOK = function (data) {
    var name;
    name = $(data).find('gameInfo').attr('gameSWF');
    this.loadGame(name);
};
LgzLib.MsgFrames.Loader.prototype.loadInfoFAIL = function () {
    console.error('LgzLib.MsgFrameLoader.loadInfo: ERROR');    
};    
LgzLib.MsgFrames.Loader.prototype.loadInfo = function (gameid) {
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
    console.log('FrameLoader.eventSwitch:  event: '+ msg.event + ' value: ' + msg.value);
    switch (msg.event) {
        case this.CK.GameIdReply:
            this.loadInfo(msg.value);
            break;              
    }

};
LgzLib.MsgFrames.Loader.prototype.initFrame = function () {
    'use strict';
    this.sendToParent(this.CK.FrameIsLoader);
    this.sendToParent(this.CK.GameIdGet);    
};


//_______________________________________________________________
LgzLib.MsgFrames.Game  = function (mgr) {
    'use strict';
    this.lgzMgr = mgr;
    LgzLib.MsgFrame.call(this);
};
LgzLib.MsgFrames.Game.extends(LgzLib.MsgFrame);
LgzLib.MsgFrames.Game.prototype.eventSwitch = function (msg) {
    'use strict';
    console.log('FrameGame.eventSwitch:  event: '+ msg.event + ' value: ' + msg.value);
    switch (msg.event) {
        case this.CK.GameIdReply:
            this.gameid = msg.value;
            break;
        case this.CK.UserIdReply:
            this.userid = msg.value;
            break;               
    }
};
LgzLib.MsgFrames.Game.prototype.initFrame = function () {
    'use strict';
    this.sendToParent(this.CK.FrameIsGame);
    this.sendToParent(this.CK.GameIdGet);    
};

//_______________________________________________________________

LgzLib.MsgFrames.Native  = function () {
    'use strict';
    LgzLib.MsgFrame.call(this);
};
LgzLib.MsgFrames.Native.extends(LgzLib.MsgFrame);