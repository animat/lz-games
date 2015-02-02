/*global
       K: true,
    $: true,
    window: true,
    document: true,
    console: true
*/
var LgzLib = LgzLib || {};
LgzLib.NodeManager = function (mgr) {
    'use strict';
    var thisObj;

    thisObj = this;

    thisObj.url = null;
    
    thisObj.K_NOTYET = 0;
    thisObj.K_ANSWERED = 1;
    thisObj.K_GAVEUP = -1;
    
    
    thisObj.nodes = [];
    thisObj.idx = 0;
    thisObj.url = K.urlSvrXML + mgr.gameId() + '.xml?';
    thisObj.loadURL = function (url, onloaded, onerror) {
        thisObj.url = url;
        thisObj.idx = 0;
        $.get(url, function (data) {
            thisObj.nodes = $(data).find("gamedata").children();
            onloaded();
        }).error(function () {
            onerror();
        });
    };
    thisObj.onBeforeNext = function() {
        //note: override in game playSet
    };
    thisObj.onAfterNext = function() {
        //note: override in game playSet        
    };
    thisObj.onComplete = function() {
        //note: override in game playSet         
    };

    /*
     * note: todo: reset() gets called twice in game at moment
     * not most efficient method.
     * 
     */
    thisObj.reset = function () {
        var i;
        thisObj.idx = 0;

        thisObj.remaining = thisObj.nodes.length;
        
        for(i=0; i < thisObj.nodes.length; i += 1) {
            thisObj.nodes[i].answered = thisObj.K_NOTYET;
        }        
        return;
    };    
    thisObj.onLoad = function (onloaded) {
        thisObj.reset();
        onloaded();
    };
    thisObj.load = function (onloaded, onerror) {

        thisObj.idx = 0;
        thisObj.completed = 0;
        
        $.get(thisObj.url, function (data) {
            thisObj.data = data;
            thisObj.nodes = $(data).find("gamedata").children();
            thisObj.onLoad(onloaded);
        }).error(function () {
            onerror();
        });
    }; 
    thisObj.nodeCurrent = function () {
        return thisObj.nodes[this.idx];
    };
    thisObj.nodeCount = function () {
        return thisObj.nodes.length;
    };

    thisObj.nodeAt = function (num) {
        var n, subnode;
        if (num < 0 || num > (thisObj.nodes.length - 1)) {
            return null;
        }
        n = {};
        n.q = {};
        n.a = {};
        subnode  = thisObj.nodes[num].querySelector('question');
        if (subnode) {
            n.q.content = subnode.getAttribute('content');
            n.q.type = subnode.getAttribute('type');
        }
        subnode  = thisObj.nodes[num].querySelector('response');
        if (subnode) {
            n.a.content = subnode.getAttribute('content');
            n.a.type = subnode.getAttribute('type');
        }
        return n;
        
    };
    thisObj.nodeChildAt = function (num, childname) {
 
            if (num < 0 || num > (thisObj.nodes.length - 1)) {
                return null;
            }
            return thisObj.nodes[num].querySelector(childname);
        
    };
    thisObj.node = function (childname, idx) {
        var num;
        if (idx === undefined) {
            num = thisObj.idx;
        } else {
            num = idx;
        }
        if (num < 0 || num > (thisObj.nodes.length - 1)) {
            return null;
        }
        return thisObj.nodes[num].querySelector(childname);
        
    };
    thisObj.getQuestion = function (num) {
        return thisObj.node('question', num);
    };
    thisObj.getResponse = function (num) {
        return thisObj.node('response', num);
    }; 
    thisObj.nodeAnswered = function () {
        if (!thisObj.nodes[thisObj.idx].answered) {
            thisObj.nodes[thisObj.idx].answered = thisObj.K_ANSWERED;
            thisObj.remaining -= 1; 
        }
        thisObj._nodeNext();        
    };
    thisObj.nodeGiveUp = function () {
        if (!thisObj.nodes[thisObj.idx].answered) {        
            thisObj.nodes[thisObj.idx].answered = thisObj.K_GAVEUP;
            thisObj.remaining -= 1; 
        }            
        thisObj._nodeNext();        
    };
    thisObj.nodeMoveToEnd = function () {
        thisObj._nodeNext();
    };
    thisObj._nodeNext = function () {
        thisObj.onBeforeNext();
        if (thisObj._nodeAvl()) {        
            thisObj.onAfterNext();
        } else {
            thisObj.onComplete();
        }
    };    
    thisObj._nodeAvl = function () {
        
        if (!thisObj.remaining) {
            return false;
        }

        if (thisObj.idx + 2 > thisObj.nodes.length) {
            thisObj.idx =  0;
        } else {
            thisObj.idx += 1;
        }
        if (!thisObj.nodes[thisObj.idx].answered) {
            return true;
        } else {
            //note: recursive call!
            return thisObj._nodeAvl();
        }
    };

    thisObj.count = function () {
        return thisObj.nodes.length;
    };
    thisObj.dataFind = function (str) {
         return $(thisObj.data).find(str);
    };
        
};
