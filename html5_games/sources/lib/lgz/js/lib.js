/*global
	g: true, K: true,
	KTYPE: true,
	Phaser: true,
	ivx: true,
	xprint: true,
	window: true,
	document: true,
	console: true
*/
/*
 * Generic library functions, not specific to any class or constructor
 */
window.console = window.console || {};
window.console.debug = window.console.debug || function () { "use strict"; };
var LgzLib = LgzLib || {};

Function.prototype.extends = function(parent) {
  var child;
  child = this;
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
  child.prototype._super = parent;
};

LgzLib.inherit = function (sub, xsuper) {
	"use strict";
	var newSubPrototype = Object.create(xsuper.prototype);
	newSubPrototype.constructor = sub;
	sub.prototype = newSubPrototype;
        sub.super = xsuper;

};
LgzLib.splitUrl = function (url) {
	"use strict";
	var obj, arr, base;
	obj = {};
	arr = url.split(':');
	switch (arr.length) {
	case 1:
		obj.proto = null;
		base = arr[0];
		break;
	case 2:
		obj.proto = arr[0];
		base = arr[1];
		break;
	default:
		obj.proto = arr[0];
		base = arr.slice(1).join(':');
		break;
	}
	arr = base.split('.');
	switch (arr.length) {
	case 1:
		obj.base = arr[0];
		obj.ext = null;
		break;
	default:
		obj.ext = arr.pop();
		obj.base = arr.join('.');
		break;
	}
	return obj;	

};

