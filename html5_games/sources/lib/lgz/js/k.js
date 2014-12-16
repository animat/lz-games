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

K.StyleButton = { 'font': '30px ' + K.font, 'fill': 'white', 'stroke': 'none', 'strokeThickness': 0, 'align': 'right' };
K.StyleTitle = { 'font': '60px ' + K.font, 'fill': 'white', 'stroke': 'black', 'strokeThickness': 6, 'align': 'right' };
K.nodeTextStyle = { font: '14pt ' + K.font, fill: '#ffffff', align: 'center', align: 'center'};

K.canvasWidth = 640;
K.canvasHeight = 480;
K.canvasBg = '#770000';
