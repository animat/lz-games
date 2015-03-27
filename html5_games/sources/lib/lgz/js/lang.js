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
LgzLib.Lang = function () {
    "use strict";
    var thisObj, pageCode, idxArr;
    
    thisObj = this;
    thisObj.page = {};
    pageCode = 'en';
    idxArr = [];

    thisObj.str = function (textkey, langCode) {
        if (langCode) {
            if (thisObj.page[langCode]) {
                if (thisObj.page[langCode][textkey]) {
                    return thisObj.page[langCode][textkey];
                }
            }
        } else {
            if (thisObj.page[pageCode]) {
                if (thisObj.page[pageCode][textkey]) {
                    return thisObj.page[pageCode][textkey];
                }
            }
        }
        return textkey;
    };
    thisObj._OnLoad = function (xml) {
        console.debug('LgzLib.Lang._OnLoad: ');
        var $xml, resname, text;
        thisObj.xml = xml;

        $xml = $(xml);
        $xml.find('[resname]').each(
            function () {
                resname = $(this).attr('resname');

                text = $(this).text();
                thisObj.page[pageCode][resname] = text.trim();
            }
                
        );
        if (thisObj.onLoad) {
            thisObj.onLoad();
        }
    };
    thisObj.load = function (name, langStr, onLoad) {
        var fullurl, langCode;
        langCode = thisObj.pageCode(langStr);
        thisObj.page[pageCode] = {};
        idxArr.push(pageCode);
        this.onLoad = onLoad;

		fullurl = K.urlSvrXML + name +  '_' + langCode + '.xml';
        console.debug('LgzLib.Lang.load: fullurl: ' + fullurl);
        $.ajax({
            type: 'GET',
            url: fullurl,
            dataType: 'xml',
            success: thisObj._OnLoad
        });
    };
    thisObj.pageSwap = function () {
        var i, swap;
        swap  = 0;
        for (i = 0; i < idxArr.length; i += 1) {
            if (idxArr[i] === pageCode) {
                swap = i + 1;
            }
        }
        if (swap === idxArr.length) {
            swap = 0;
        }
        pageCode = idxArr[swap];
    };
    thisObj.pageCode = function (langStr) {
        if (langStr) {
            pageCode = thisObj.long2code(langStr);
        }
        return pageCode;
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

