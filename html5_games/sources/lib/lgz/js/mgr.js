/*global
    $: true,
    Phaser: true,
    K: true, console: true,
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
        thisObj.hints = new LgzLib.Hints(thisObj);
        thisObj.scenes = {};

        globLgz.lang = thisObj.lang;
        globLgz.game = thisObj.game;
        globLgz.hud = thisObj.hud;
        globLgz.nm = thisObj.nm;
        globLgz.mgr = thisObj;
        globLgz.scenes = thisObj.scenes;
        
        thisObj.spinnerInit();
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

    thisObj.help = function () {
        thisObj.hud.winOpen('winHelp');
    };
    thisObj._welcome2 = function () {
        console.debug('LgzLib.Mgr.welcome2:');
        thisObj.hud.localize();
        thisObj.hints.init();
        thisObj.hud.toggleFsButtons();
        thisObj.game.paused = false;
        thisObj.scenes.welcome.start();
    };
    thisObj._welcome1 = function () {
        var langStr;
        console.debug('LgzLib.Mgr.welcome1:');
        thisObj.lang.onLoad = function () {
            thisObj._welcome2();
        };

        langStr = thisObj.nm.dataFind("language").text();
        thisObj.lang.load(gamePrefix,  langStr);
    };
    thisObj.welcome = function () {
        console.debug('LgzLib.Mgr.welcome:');
        thisObj.hud.winCloseAll(false);
        window.setTimeout(function () {
            thisObj._welcome1();
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
    thisObj.langSwap = function () {
        thisObj.lang.pageSwap();
        thisObj.hud.localize();
    };
    thisObj.sendBugClose = function () {
        thisObj.hud.winClose('winBugReply');
        thisObj.hud.winClose('winBug');
        thisObj.hud.winClose('winHelp', true);
    };
    thisObj._sendBugReply = function (data) {
        console.debug('_sendBugReply: ' + data);
        $('#lzBugReply').text(data);
        thisObj.hud.winOpen('winBugReply');
        thisObj.spinnerHide();
    };
    thisObj.sendBugReply = function (data) {
        console.debug('sendBugReply: ' + data);
        window.setTimeout(
            function () {
                thisObj._sendBugReply(data);
            },
            2000
        ); 
    };
    thisObj.sendBug = function () {
        var url, $lgzParms, $form, sdata, gameid, userid, body;
     
        url = '/play/report_bug';
        $lgzParms = $("#lgzParms");
        gameid = $lgzParms.attr("game_id");
		// TODO @Cesar: Users do not need to sign in for some games. Will this param default to 0?
        userid = $lgzParms.attr("user_id");
        body = $("#textbug").val();
		if (body != "") {
	        $.post(url, {body: body, game_id: gameid, user_id: userid}).success(
					function (data) { thisObj.sendBugReply(data); }
				).error(function() {
					console.log("Error submitting this bug...");
                                        thisObj.spinnerHide();
				});
		}
		
		// TODO @Cesar: It would be great to have clearer feedback to the user that the bug has been submitted
        thisObj.hud.winClose('winBug', false);
        thisObj.spinnerShow();
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
        var id, tail, $lgzParms, urlparm, gameid;
        $lgzParms = $("#lgzParms");
        
        urlparm = document.URL.match(/.*\?xmlid=(.*)/);
        if (urlparm) {
            $lgzParms.attr('game_id', urlparm[1]);
        }
        
        
        gameid = $lgzParms.attr("game_id");
        if (gameid !== "") {
            return gameid;
        }
        
        tail = document.URL.match(/.*\/(.*)$/)[1];
        if (!tail) {
            alert('Error no gameid found!');
            return null;
        }
        id = tail.split('.')[0];
        $lgzParms.attr('game_id', id);
        
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
        this.sfx = sfx;
        return sfx;
    };
    thisObj._soundPlay = function (key, cutoff) {
        thisObj.sfx.play(key);
        if (cutoff) {
            window.setTimeout(
                function () {
                    thisObj.sfx.stop(key);
                },
                cutoff
            );
        }
    };
    thisObj.soundPlay = function (key, delayTO, cutoff) {
        if (!delayTO) {
            delayTO = 0;
        }
        window.setTimeout(
            function () {
                thisObj._soundPlay(key, cutoff);
            },
            delayTO
        );
    };
    thisObj.spinnerShow = function() {
        var target;
        
        thisObj.hud.winOpen('winProgress');
        target = document.getElementById('winProgress');
        thisObj.spinner.spin(target);
    };
    thisObj.spinnerHide = function() {
        thisObj.hud.winClose('winProgress');
        thisObj.spinner.stop();
    };    
    thisObj.spinnerInit = function () {
        var cfg;
        cfg = {
          lines: 13, // The number of lines to draw
          length: 14, // The length of each line
          width: 10, // The line thickness
          radius: 29, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          rotate: 0, // The rotation offset
          direction: 1, // 1: clockwise, -1: counterclockwise
          color: '#0FF', // #rgb or #rrggbb or array of colors
          speed: 1, // Rounds per second
          trail: 30, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'spinner', // The CSS class to assign to the spinner
          zIndex: 2e9, // The z-index (defaults to 2000000000)
          top: '50%', // Top position relative to parent
          left: '50%' // Left position relative to parent
        };

        thisObj.spinner = new Spinner(cfg);
        
    };        
    thisObj.init();

};
