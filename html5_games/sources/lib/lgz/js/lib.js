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
/*jslint  nomen: true */
/*
 * Generic library functions, not specific to any class or constructor
 */
window.console = window.console || {};
window.console.debug = window.console.debug || window.console.log || function () { "use strict"; };
var LgzLib = LgzLib || {};
Function.prototype.lgzExtends = function (parent) {
    'use strict';
    var child;
    child = this;
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
    child.prototype._super = parent.prototype;
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
LgzLib.jsonCopy = function (obj) {
    'use strict';
    return JSON.parse(JSON.stringify(obj));
};
LgzLib.jsonExtend = function (obj, extra) {
    'use strict';
    var prop;
    for (prop in extra) {
        if (extra.hasOwnProperty(prop)) {
            obj[prop] = extra[prop];
        }
    }
    return obj;
};
LgzLib.jsonCopyExtend = function (obj, extra) {
    'use strict';
    var copy;
    copy = LgzLib.jsonCopy(obj);
    return LgzLib.jsonExtend(copy, extra);
};

//todo: deprecate copy, use jsonCopy above instead
LgzLib.copy = function (obj) {
    'use strict';
    var copy, prop;
    copy = {};
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            copy[prop] = obj[prop];
        }
    }
    return copy;
};
