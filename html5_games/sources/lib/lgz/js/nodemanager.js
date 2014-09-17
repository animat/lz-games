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
	thisObj.qNum = 0;
	thisObj.url = K.urlSvrXML + mgr.gameId() + '.xml?';

	thisObj.loadURL = function (url, onloaded, onerror) {
		thisObj.url = url;
		thisObj.qNum = 0;
		$.get(url, function (data) {
			thisObj.nodes = $(data).find("gamedata").children();
			onloaded();
		}).error(function () {
			onerror();
		});
	};
	thisObj.load = function (onloaded, onerror) {

		thisObj.qNum = 0;
		$.get(thisObj.url, function (data) {
			thisObj.nodes = $(data).find("gamedata").children();
			onloaded();
		}).error(function () {
			onerror();
		});
	};
	
	thisObj.nodeCurrent = function () {
		return thisObj.nodes[this.qNum];
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
		var n, subnode;
		if (num < 0 || num > (thisObj.nodes.length - 1)) {
			return null;
		}
		return thisObj.nodes[num].querySelector(childname);
		
	};
	thisObj.getQuestion = function (num) {
		return thisObj.nodeChildAt(num, 'question');
	};
	thisObj.getResponse = function (num) {
		return thisObj.nodeChildAt(num, 'response');
	};

}
