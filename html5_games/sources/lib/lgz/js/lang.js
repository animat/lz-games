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
    var thisObj;
    
    thisObj = this;
    thisObj.lang = {};

    thisObj.initJSON = function (jtext) {
		"use strict";
		thisObj.lang = JSON.parse(jtext);
    };
    thisObj.str = function(textkey) {

        if (thisObj.lang[textkey]) {
            return thisObj.lang[textkey];
        }
        return textkey;
    };
    thisObj._OnLoad = function (xml) {
        var $xml, resname, text;
        thisObj.xml = xml;

        $xml = $(xml);
        $xml.find('[resname]').each(
            function() {
                resname = $(this).attr('resname');

                text = $(this).text();
                thisObj.lang[resname] = text.trim();
            }
                
        );
    };
    thisObj.load = function (name, lang) {
        var fullurl;
		fullurl = K.urlSvrXML + name +  '_' + lang + '.xml';
        console.debug('LgzLibLang: fullurl: ' + fullurl);
        $.ajax({
           type: 'GET',
           url: fullurl,
           dataType: 'xml',
           success: thisObj._OnLoad
        });
    };
};

