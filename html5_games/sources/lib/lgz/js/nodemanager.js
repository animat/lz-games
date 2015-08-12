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
    
    
    thisObj.$nodes = [];
    thisObj.idx = 0;


    /*
     * note: todo: reset() gets called twice in game at moment
     * not most efficient method.
     * 
     */
    thisObj.reset = function () {
        var i, node, subnode, str;
        thisObj.idx = 0;

        thisObj.remaining = thisObj.$nodes.length;
        
        for (i = 0; i < thisObj.$nodes.length; i += 1) {
            node = thisObj.$nodes[i];
            node.answered = thisObj.K_NOTYET;

            //note: trim leading/trailing blank spaces from text content
            subnode = node.querySelector('question');
            str = subnode.getAttribute('content');
            subnode.setAttribute('content', str.trim());
            subnode = node.querySelector('response');
            str = subnode.getAttribute('content');
            subnode.setAttribute('content', str.trim());
        }
        return;
    };
    thisObj.onLoad = function () {
        thisObj.reset();
        thisObj.eventLoadOK();
    };
    thisObj.load = function () {

        thisObj.url = mgr.baseUrl.api + '/games/' + mgr.gameId() + '.xml';
        thisObj.idx = 0;
        thisObj.completed = 0;
        
        $.get(thisObj.url, function (data) {
            thisObj.data = data;
            thisObj.$nodes = $(data).find("gamedata").children();

            //note: nodes prop deprecated, should be $nodes
            //todo: remove nodes.length reference in gardenGrows/rsc/js/playset.js
            //      then remove here
            thisObj.nodes = thisObj.$nodes;

            thisObj.$tpdata = $(data).find("templatedata");
            thisObj.onLoad();
        }).error(function (err) {
            thisObj.eventLoadFAIL(err);
        });
    };
    thisObj.nodeCurrent = function () {
        return thisObj.$nodes[this.idx];
    };
    thisObj.nodeCount = function () {
        return thisObj.$nodes.length;
    };

    thisObj.nodeAt = function (num) {
        var n, subnode;
        if (num < 0 || num > (thisObj.$nodes.length - 1)) {
            return null;
        }
        n = {};
        n.q = {};
        n.a = {};
        subnode  = thisObj.$nodes[num].querySelector('question');
        if (subnode) {
            n.q.content = subnode.getAttribute('content');
            n.q.type = subnode.getAttribute('type');
        }
        subnode  = thisObj.$nodes[num].querySelector('response');
        if (subnode) {
            n.a.content = subnode.getAttribute('content');
            n.a.type = subnode.getAttribute('type');
        }
        return n;
        
    };
    thisObj.nodeChildAt = function (num, childname) {
 
            if (num < 0 || num > (thisObj.$nodes.length - 1)) {
                return null;
            }
            return thisObj.$nodes[num].querySelector(childname);
        
    };
    thisObj.node$ = function (jquery, idx) {
        var num;
        if (idx === undefined) {
            num = thisObj.idx;
        } else {
            num = idx;
        }
        if (num < 0 || num > (thisObj.$nodes.length - 1)) {
            return null;
        }
        return $(thisObj.$nodes[num]).find(jquery);
        
    };
    thisObj.node = function (childname, idx) {
        //todo:  
        //  return thisObj.node$(childname, idx)[0];
        //
        var num;
        if (idx === undefined) {
            num = thisObj.idx;
        } else {
            num = idx;
        }
        if (num < 0 || num > (thisObj.$nodes.length - 1)) {
            return null;
        }
        return thisObj.$nodes[num].querySelector(childname);
        
    };
    thisObj.getQuestion = function (num) {
        return thisObj.node('question', num);
    };
    thisObj.getResponse = function (num) {
        return thisObj.node('response', num);
        //
        // todo: change to?
        // return thisObj.node$('response', num)[0];
    };
    thisObj.nodeAnswered = function () {
        if (!thisObj.$nodes[thisObj.idx].answered) {
            thisObj.$nodes[thisObj.idx].answered = thisObj.K_ANSWERED;
            thisObj.remaining -= 1;
        }
        thisObj._nodeNext();
    };
    thisObj.nodeGiveUp = function () {
        if (!thisObj.$nodes[thisObj.idx].answered) {
            thisObj.$nodes[thisObj.idx].answered = thisObj.K_GAVEUP;
            thisObj.remaining -= 1;
        }
        thisObj._nodeNext();
    };
    thisObj.nodeMoveToEnd = function () {
        thisObj._nodeNext();
    };
    thisObj._nodeNext = function () {
        thisObj.eventNodeBeforeNext();
        if (thisObj._nodeAvl()) {
            thisObj.eventNodeAfterNext();
        } else {
            thisObj.eventNodeFinish();
        }
    };
    thisObj._nodeAvl = function () {
        
        if (!thisObj.remaining) {
            return false;
        }

        if (thisObj.idx + 2 > thisObj.$nodes.length) {
            thisObj.idx =  0;
        } else {
            thisObj.idx += 1;
        }
        if (!thisObj.$nodes[thisObj.idx].answered) {
            return true;
        } else {
            //note: recursive call!
            return thisObj._nodeAvl();
        }
    };

    thisObj.count = function () {
        return thisObj.$nodes.length;
    };
    thisObj.dataFind = function (str) {
        return $(thisObj.data).find(str);
    };
        
};
LgzLib.NodeManager.prototype.eventLoadOK = function () {
    'use strict';
    console.debug('LgzLib.NodeManager.eventLoadOK (override!)');

    //note: override 
};
LgzLib.NodeManager.prototype.eventLoadFAIL = function () {
    'use strict';
    console.debug('LgzLib.NodeManager.eventLoadFAIL (override!)');
    //note: override    
};
LgzLib.NodeManager.prototype.eventNodeBeforeNext = function () {
    'use strict';
    console.debug('LgzLib.NodeManager.eventNodeBeforeNext');
    //note: override 
};
LgzLib.NodeManager.prototype.eventNodeAfterNext = function () {
    'use strict';
    console.debug('LgzLib.NodeManager.eventNodeAfterNext');
    //note: override    
};
LgzLib.NodeManager.prototype.eventNodeFinish = function () {
    //note: override         
};
