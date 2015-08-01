/*global
	g: true,
	$: true,
	K: true,
	KTYPE: true,
	Phaser: true,
	ivx: true,
	xprint: true,
	window: true,
	document: true,
	console: true
*/
/*jslint  nomen: true */

var LgzLib = LgzLib || {};
LgzLib.Lang = function (lgzMgr) {
    "use strict";
    var thisObj, defaultCode, currentPage, idxArr;
    
    thisObj = this;
    thisObj.page = {};
    defaultCode = K.lang;
    idxArr = [];
    currentPage = defaultCode;

    thisObj.str = function (textkey, langCode) {
        if (langCode) {
            if (thisObj.page[langCode]) {
                if (thisObj.page[langCode][textkey]) {
                    return thisObj.page[langCode][textkey];
                }
            }
        } else {
            if (thisObj.page[currentPage]) {
                if (thisObj.page[currentPage][textkey]) {
                    return thisObj.page[currentPage][textkey];
                }
            }
        }
        return textkey;
    };
    thisObj.eventLoadOK = function (xml, lang, loadCb) {
        console.debug('LgzLib.Lang.eventLoadOK: ');
        var $xml, resname, text, p, src;
        thisObj.xml = xml;

        thisObj.page[lang.code] =  thisObj.page[lang.code] || {};

        //note: prefill page with fallback values found in default page of K.lang (en)
        if (lang.code !== K.lang) {
            src = thisObj.page[K.lang];
	        for (p in src) {
	            if (src.hasOwnProperty(p)) {
	                thisObj.page[lang.code][p] = src[p];
	            }
	        }
        }

        $xml = $(xml);
        $xml.find('[resname]').each(
            function () {
                resname = $(this).attr('resname');

                text = $(this).text();
                thisObj.page[lang.code][resname] = text.trim();
            }
                
        );

        idxArr.push(lang.code);
        currentPage = lang.code;

        if (loadCb) {
            loadCb();
        }
    };
    thisObj.eventLoadFAIL = function (err, lang, loadCb) {
        console.error('LgzLib.Lang.eventLoadFAIL:'
            + ' langStr(' + lang.str + ') langCode(' + lang.code + ')');
        Lgz.err = err;
        if (loadCb) {
            loadCb();
        }

    };
    thisObj._loadGameLang = function (gameName, lang, loadCb) {
        var fullurl;
        console.log(
            'LgzLib.Lang._loadGameLang: '
                + 'gameName('  + gameName + ') '
                + 'langStr('  + lang.str + ') '
                + 'langCode('  + lang.code + ') '
        );
        //langCode = thisObj.pageCode(langStr);

		fullurl = lgzMgr.baseUrl.lang + '/' + lang.code + '/' + gameName +  '_' + lang.code + '.xml';
        console.debug('LgzLib.Lang.load: fullurl: ' + fullurl);
        $.get(fullurl, function (data) {
            thisObj.eventLoadOK(data, lang, loadCb);
        }).error(function (err) {
            thisObj.eventLoadFAIL(err, lang, loadCb);
        });
    };
    thisObj.eventLoadHudOK = function (data, gameName, lang, loadCb) {
        var p;
        thisObj.page[lang.code] = {};
        for (p in data) {
            if (data.hasOwnProperty(p)) {
                thisObj.page[lang.code][p] = data[p];
            }
        }
        thisObj._loadGameLang(gameName, lang, loadCb);
    };
    thisObj.eventLoadHudFAIL = function (err, gameName, lang, loadCb) {
        //no hud language file found for given langCode,
        //proceed try to load game specific language file
        thisObj._loadGameLang(gameName, lang, loadCb);
    };
    thisObj._loadHudLang = function (gameName, langStr, loadCb) {
        var fullurl, lang;
        console.log(
            'LgzLib.Lang._loadHudLang: '
                + 'gameName('  + gameName + ') '
                + 'langStr('  + langStr + ') '
        );
        lang = {};
        lang.str = langStr;
        lang.code = thisObj.pageCode(langStr);

		fullurl = '../lib/lgz/lang/hud/' + lang.code + '.json';
        console.debug('LgzLib.Lang.load: fullurl: ' + fullurl);

        $.get(fullurl, function (data) {
            thisObj.eventLoadHudOK(data, gameName, lang, loadCb);
        }).error(function (err) {
            thisObj.eventLoadHudFAIL(err, gameName, lang, loadCb);
        });
    };
    thisObj.load = function (gameName, langStr, loadCb) {
        console.log(
            'LgzLib.Lang.load: '
                + 'gameName('  + gameName + ') '
                + 'langStr('  + langStr + ') '
        );
        // initialize non specific game hud strings first
        thisObj._loadHudLang(gameName, langStr, loadCb);
    };
    thisObj.pageSwap = function () {
        var i, swap;
        swap  = 0;
        for (i = 0; i < idxArr.length; i += 1) {
            if (idxArr[i] === currentPage) {
                swap = i + 1;
            }
        }
        if (swap === idxArr.length) {
            swap = 0;
        }
        currentPage = idxArr[swap];
    };
    thisObj.pageCode = function (langStr) {
        var code;
        if (langStr) {
            code = thisObj.long2code(langStr);
        }
        return code;
    };
    thisObj.long2code = function (str) {
        var code;
	    switch (str.toUpperCase()) {
	    case "SPANISH":
            code = "es";
		    break;
	    case "FRENCH":
            code = "fr";
		    break;
        case "GERMAN":
            code = "de";
            break;
        case "ITALIAN":
            code = "it";
            break;
        case "ENGLISH":
            code = "en";
            break;
        case "LATIN":
            code = "lat";
            break;
	    default:
            code = str;
		    break;
	    }
        return code;
    };
};
