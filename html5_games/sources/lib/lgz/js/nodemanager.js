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
    thisObj.nodes = [];
    thisObj.idx = 0;
    thisObj.url = K.urlSvrXML + mgr.gameId() + '.xml?';
        //todo: deprecated: begin
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
        //todo: deprecated: end
    thisObj.load = function (onloaded, onerror) {

        thisObj.idx = 0;
        $.get(thisObj.url, function (data) {
            thisObj.data = data;
            thisObj.nodes = $(data).find("gamedata").children();
            onloaded();
        }).error(function () {
            onerror();
        });
    };
        //todo: deprecated: begin    
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
        //todo: deprecate end

    thisObj.node = function (childname, idx) {
        var num;
        if (!idx) {
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
    thisObj.next = function () {
 
        if (thisObj.idx + 2 > thisObj.nodes.length) {
            return false;
        }
       thisObj.idx += 1;
        return true;
    };
    thisObj.reset = function () {
        return thisObj.idx = 0;
    };
    thisObj.count = function () {
        return thisObj.nodes.length;
    };
    thisObj.dataFind = function (str) {
         return $(thisObj.data).find(str);
    };
};
