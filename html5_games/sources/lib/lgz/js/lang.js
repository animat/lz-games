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

var LgzLib = LgzLib || {};
LgzLib.Lang = function (lgzMgr) {
    "use strict";
    var thisObj, defaultCode, currentPage, idxArr;
    
    thisObj = this;
    thisObj.page = {};
    defaultCode = 'en';
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
    thisObj.eventLoadOK = function (xml, langCode, loadCb) {
        console.debug('LgzLib.Lang.eventLoadOK: ');
        var $xml, resname, text;
        thisObj.xml = xml;

        thisObj.page[langCode] = {};

        $xml = $(xml);
        $xml.find('[resname]').each(
            function () {
                resname = $(this).attr('resname');

                text = $(this).text();
                thisObj.page[langCode][resname] = text.trim();
            }
                
        );

        idxArr.push(langCode);
        currentPage = langCode;

        if (loadCb) {
            loadCb();
        }
    };
    thisObj.eventLoadFAIL = function (err, langStr, loadCb) {
        console.error('LgzLib.Lang.eventLoadFAIL: langStr: ' + langStr);
        Lgz.err = err;
        if (loadCb) {
            loadCb();
        }

    };
    thisObj.load = function (gameName, langStr, loadCb) {
        var fullurl, langCode;
        console.log(
            'LgzLib.Lang.load: '
                + 'gameName('  + gameName + ') '
                + 'langStr('  + langStr + ') '
        );
        langCode = thisObj.pageCode(langStr);

        //thisObj.page[pageCode] = {};
        //idxArr.push(pageCode);

		fullurl = lgzMgr.baseUrl.lang + '/' + langCode + '/' + gameName +  '_' + langCode + '.xml';
        console.debug('LgzLib.Lang.load: fullurl: ' + fullurl);
        /*
        $.ajax({
            type: 'GET',
            url: fullurl,
            dataType: 'xml',
            success: thisObj.eventLoadOK
        });
        */
        $.get(fullurl, function (data) {
            thisObj.eventLoadOK(data, langCode, loadCb);
        }).error(function (err) {
            thisObj.eventLoadFAIL(err, langStr, loadCb);
        });
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
