/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var K =  {};

//note: for production, urlSvrXML will point to linguazone svr
K.urlSvrXML = 'svr/';

//note: for production, urlSvrMedia may point to amazon svr
K.urlSvrMedia = 'svr/';
K.urlSvrMediaAudio = 'svr/audio/';

//note: urlRscMedia points to game's local multi media assets
K.urlRscMedia = 'rsc/mma/';
K.urlLibMedia = 'lib/lgz/mma/';

K.lang = "en";
K.region = "US";
K.locale = "en";

K.font = 'Arial';
K.volumeLevel = 2;
        
K.StyleButton = { 'font': '30px ' + K.font, 'fill': 'white', 'stroke': 'none', 'strokeThickness': 0, 'align': 'right' };
K.StyleTitle = { 'font': '60px ' + K.font, 'fill': 'white', 'stroke': 'black', 'strokeThickness': 6, 'align': 'right' };
K.nodeTextStyle = { font: '14pt ' + K.font, fill: '#ffffff', align: 'center'};

K.canvasWidth = 600;
K.canvasHeight = 425;
K.canvasVWidth = 600;
K.canvasVHeight = 400;

K.canvasBg = '#000000';

K.displayNode = { fontSizePad: 0.215};