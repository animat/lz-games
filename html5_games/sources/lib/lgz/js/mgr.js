/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */

var g  = g || {};
var LgzLib = LgzLib || {};
LgzLib.Mgr = function (globLgz, gamePrefix) {
    'use strict';
    var thisObj, game, lang;
    thisObj = this;

    thisObj.init = function () {
        game = new Phaser.Game(K.canvasWidth, K.canvasHeight, Phaser.CANVAS, 'lgzGameCanvas');
        lang = new LgzLib.Lang();
        lang.load(gamePrefix,  K.lang);
        thisObj.lang = lang;
        thisObj.game = game;
        thisObj.hud = new LgzLib.Hud(thisObj);
        thisObj.nm = new LgzLib.NodeManager(thisObj);
        thisObj.scenes = {};

        globLgz.lang = thisObj.lang;
        globLgz.game = thisObj.game;
        globLgz.hud = thisObj.hud;
        globLgz.nm = thisObj.nm;
        globLgz.mgr = thisObj;
        globLgz.scenes = thisObj.scenes;
    };
    thisObj.pause = function () {
        //override
    };
    thisObj.resume = function () {
        //override
    };
    thisObj.sceneInit = function () {
        thisObj.scenes.splash = new LgzLib.Scenes.Splash(thisObj);      
        thisObj.scenes.welcome = new LgzLib.Scenes.Welcome(thisObj);      
        thisObj.scenes.main = new LgzLib.Scenes.Main(thisObj);           
        thisObj.scenes.end = new LgzLib.Scenes.End(thisObj);        
    };    
    //todo: DEPRECATE: begin scene functions
    thisObj.addScene = function (str, obj) {

        //thisObj.scenes[str] = thisObj.game.state.add(str, obj);
    };
    thisObj.nmLoadOK = function (str) {
        console.debug('LgzLib.Mgr.nmLoadOK: str ' + str);
        //todo: localize ui based on language tag found in xml data.
        thisObj.startScene(str);
    };
    thisObj.nmLoadFail = function () {
        //todo: display error to user
        console.error('Could not load xml data from server');
    };
    thisObj.initScene = function (str) {
        console.debug('LgzLib.Mgr.initScene: str ' + str);
        thisObj.nm.load(
            function () { thisObj.nmLoadOK(str); },
            function () { thisObj.nmLoadFail(); }
        );
    };
    thisObj.startScene = function (str) {
        console.debug('LgzLib.Mgr.startScene: str ' + str);
        thisObj.game.paused = false;
        thisObj.game.state.start(str,  true, false, thisObj);
    };
    thisObj.fullScreenToggle = function () {
        console.debug('Mgr.fullScreenToggle');
        thisObj.hud.fullScreenToggle();
    };
    //todo: DEPRECATE: end

    thisObj.help = function () {
        thisObj.hud.winOpen('winHelp');
    };
    thisObj._welcome = function () {
        thisObj.hud.toggleFsButtons();
        thisObj.hud.localize();
        //thisObj.startScene('Welcome
        thisObj.game.paused = false;
        thisObj.scenes.welcome.start();
    };
    thisObj.welcome = function () {
        thisObj.hud.winCloseAll(false);
        window.setTimeout(function () {
            thisObj._welcome();
        }, 900);
    };
    thisObj.play = function () {
        thisObj.hud.winCloseAll(true);
        if (!game.device.desktop) {
            thisObj.hud.fullScreenStart();
        }
        //thisObj.startScene('Main');
        thisObj.scenes.main.start();
    };
    thisObj.exit = function () {
        thisObj.hud.fullScreenStop();
        thisObj.hud.fullScreenStopPost();
        thisObj.hud.onResize();
        thisObj.welcome();
        //window.location.reload();
    };
    thisObj.sendBug = function () {
        var $form, sdata;
        $form = $('#bugmsg');
        sdata = $form.serialize();
        $.post('/play/report_bug',
            sdata,
            function (reply) {
                console.debug('post reply: ' + reply);
            }
            );
        thisObj.hud.winClose('winbug', false);
    };
    thisObj.postScore = function (scoreval) {
        var $lgzParms, userid, gameid, url;
        url = "/high_scores/create";
        $lgzParms = $("#lgzParms");
        gameid = $lgzParms.attr("game_id");
        userid = $lgzParms.attr("user_id");
        $.post(url, {game_id: gameid, user_id: userid, score: scoreval});
    };
    thisObj.gameId = function () {
        var id, tail;
        tail = document.URL.match(/.*\/(.*)$/)[1];
        id = tail.split('.')[0];
        return id;
    };
    thisObj.rscImage = function (name, lib) {
        if (lib) {
            thisObj.game.load.image(name, K.urlLibMedia + name + '.png?');
        } else {
            thisObj.game.load.image(name, K.urlRscMedia + name + '.png?');
        }
    };
    thisObj.rscSpriteSheet = function (name, width, height) {
        thisObj.game.load.spritesheet(
            name,
            K.urlRscMedia + name + '.png?',
            width,
            height
        );
    };    
    thisObj.rscAtlas = function (name) {
        thisObj.game.load.atlas(
            name,
            K.urlRscMedia + name + '.png?',
            K.urlRscMedia + name + '.json?'
        );
    };
    thisObj.rscAudio = function (name, loadjson) {
        var loader;
        loader = {};
        if (loadjson) {
            loader.json = thisObj.game.load.json(name, K.urlRscMedia + name + '.json');
        } else {
            loader.json = null;
        }
        g.json = loader.json;
        loader.audio = thisObj.game.load.audio(
            name,
            K.urlRscMedia + name + '.ogg',
            K.urlRscMedia + name + '.mp3',
            K.urlRscMedia + name + '.m4a'            
        );
        return loader;
    };
    thisObj.rscAudioTracks = function (name) {
        var sfx,  aj, tracksArr, i, str, sprite;
        //note: must be called after preload phase

        sfx = thisObj.game.add.audio(name);
        aj = thisObj.game.cache.getJSON(name);
        tracksArr = Object.keys(aj.spritemap);
        for (i = 0; i < tracksArr.length; i += 1) {
            str = tracksArr[i];
            sprite = aj.spritemap[str];
            //sfx.addMarker(str, sprite.start, sprite.end, 1,  sprite.loop);                    
            sfx.addMarker(str, sprite.start, sprite.end, 1, false);
        }
        return sfx;
    };
    thisObj.init();
};
