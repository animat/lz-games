/*global
	window: true,
	LgzTest: true,
	console: true
*/
/*jslint  nomen: true */


LgzTest.parseUrlParms();


//
// LgzTest.set(): Sets test points as defined inside game code.
//
// note: test points can only intercept/modify 
// after game html/js is loaded. So a test point such 
// as changing gameSWF will not load new game, 
// but only affect loading language file
// for a different game.
//

// LgzTest.tcase() are cases of test points that can be
// actived by passing "testCase" parameter on the game url.
//
//


//Force  specific api url and xml data file to be used in testing
//LgzTest.set('tp-gameid', '8000');
//LgzTest.set('tp-baseUrlApi', "http://192.168.0.10/lgz/svr/api/v2");


//
// if testCase=urlBadSubPath1
//
// server works, but subpath is bad.
// server returns code (404) (not found).
//
// expected result:
//
// native app should display ionic alert window
// title: Error
// msg: Could not load question/answer data from server
//
//
LgzTest.tcase(
    'urlBadSubPath1',
    function () {
        'use strict';
        LgzTest.set('tp-gameid', '8000');
        LgzTest.set('tp-baseUrlApi', "http://192.168.0.10/lgx/svr/api/v2");
    }
);

//
// if testCase=urlBadServer1
//
// server is down or nonexistent
// eventually game data url request will time out
//
// expected result:
//
// native app should display ionic alert window
// title: Error
// msg: Could not load question/answer data from server
//
LgzTest.tcase(
    'urlBadServer1',
    function () {
        'use strict';
        LgzTest.set('tp-gameid', '8000');
        LgzTest.set('tp-baseUrlApi', "http://192.168.0.200/lgx/svr/api/v2");
    }
);

//
// if testCase=gameIdBad1
//
//
// native app should display ionic alert window
// title: Error
//
// expected result:
// msg: Could not load question/answer data from server
//
LgzTest.tcase(
    'gameIdBad1',
    function () {
        'use strict';
        LgzTest.set('tp-gameid', '999999999999999');
    }
);


//
// if testCase=langBadUrl
// bad subpath for lang svr
//
// expected result:
// game will continue to load.
// IDS strings will be displayed in place of localized strings.
//
LgzTest.tcase(
    'langBadUrl',
    function () {
        'use strict';
        LgzTest.set('tp-baseUrlLang', "http://192.168.0.10/lgz/svr/langxxx");
    }
);

//
// if testCase=langBadSvr 
// lang svr not responding
// (sets bad ip or domain)
//
// expected result:
// game will continue to load.
// IDS strings will be displayed in place of localized strings.
//
LgzTest.tcase(
    'langBadSvr',
    function () {
        'use strict';
        LgzTest.set('tp-baseUrlLang', "http://bad.ivanix.com/lgz/svr/langxxx");
    }
);





//
// if testCase=langBadStr
//
// langStr is wrong or not found.
// game should continue with default lang (en).
//
LgzTest.tcase(
    'langBadStr',
    function () {
        'use strict';
        LgzTest.set('tp-langStr', "klingon");
    }
);

//
// if testCase=langES
//
// langStr "es" should exist.
// no error should occur.
//
LgzTest.tcase(
    'langES',
    function () {
        'use strict';
        LgzTest.set('tp-langStr', "es");
    }
);



//
// if testCase=mmaBadUrl
// bad subpath for mma svr
//
// expected result:
// game will continue to load and play.
// black box with green diagonal line is displayed instead of image.
//
LgzTest.tcase(
    'mmaBadUrl',
    function () {
        'use strict';
        LgzTest.set('tp-baseUrlMMA', "http://192.168.0.10/lgz/svr/mmaxxx");
    }
);

//
// if testCase=mmaBadSvr 
// mma svr not responding
// (sets bad ip or domain)
//
// expected result:
// game will continue to load and play.
// black box with green diagonal line is displayed instead of image.
//
LgzTest.tcase(
    'mmaBadSvr',
    function () {
        'use strict';
        LgzTest.set('tp-baseUrlMMA', "http://bad.ivanix.com/lgz/svr/mmaxxx");
    }
);


