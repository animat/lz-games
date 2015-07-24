/*global
	console: true,
	window: true
*/
/*jslint  nomen: true */
var LgzTest = {};
LgzTest._point = {};
LgzTest._value = {};
LgzTest.set = function (prop, value) {
    'use strict';
    var sprop;
    sprop = 'lgz' + prop;
    LgzTest._point[sprop] = true;
    LgzTest._value[sprop] = value;
};
LgzTest.point = function (prop, cb) {
    'use strict';
    var sprop, value;
    sprop = 'lgz' + prop;

    value = LgzTest._value[sprop];

    if (LgzTest._point[sprop]) {
        console.error('LgzTest.point: (' + prop + ')  value: (' + value + ')');
        cb(LgzTest._value[sprop]);
    }
};
LgzTest.tcase = function (testid, cb) {
    'use strict';

    if (LgzTest._urlParms && LgzTest._urlParms.testCase) {
        if (LgzTest._urlParms.testCase === testid) {
            console.error('LgzTest.tcase: ' + testid);
            cb();
        }
    }
};
LgzTest.parseUrlParms = function () {
    'use strict';
    var query, result;
    query = window.location.search.substr(1);
    result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    LgzTest._urlParms =  result;
};
