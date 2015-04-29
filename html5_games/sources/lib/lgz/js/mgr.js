/*global
    $: true,
    document: true,
    Phaser: true,
    K: true, console: true,
    window: true,
    Spinner: true,
    LgzLib: true
 */
/*jslint  nomen: true */

var g  = g || {};
var LgzLib = LgzLib || {};
LgzLib.Mgr = function (globLgz, gamePrefix, onReady) {
    'use strict';
    var thisObj, initCount, game, lang;
    thisObj = this;
    initCount = 0;

    thisObj._cbInitPost = function () {
        initCount += 1;
        if (initCount < 3) {
            return;
        }

        /*
         * ivanixcu: todo: Phaser plugin manager (Lgz.game.plugins) is not avl 
         * immediately after create game obj. Test in this execution point show that it is ready.
         * Need to find definite way of knowing when plugin mgr is ready.
         */
         
        console.log('LgzLib.Mgr._cbInitPost: plugin Mgr ready? add saveCPU ' + thisObj.game.plugins);
        thisObj.saveCpu = this.game.plugins.add(Phaser.Plugin.SaveCPU);
        thisObj.saveCpu.renderOnFPS = K.renderFPS;

        onReady();
    };
    
    thisObj.pause = function () {
        //override
    };
    thisObj.resume = function () {
        //override
    };
    thisObj.sceneInit = function () {
        console.log('LgzLib.Mgr.sceneInit: plugins ready? ' + thisObj.game.plugins); 
        thisObj.scenes.splash = new LgzLib.Scenes.Splash(thisObj);
        thisObj.scenes.welcome = new LgzLib.Scenes.Welcome(thisObj);
        thisObj.scenes.main = new LgzLib.Scenes.Main(thisObj);
        thisObj.scenes.end = new LgzLib.Scenes.End(thisObj);
    };

    thisObj.help = function () {
        thisObj.hud.winOpen('winHelp');
    };
    thisObj._cbWelcome2 = function () {
        console.debug('LgzLib.Mgr.welcome2:');
        thisObj.hud.localize();
        thisObj.hints.init();
        thisObj.hud.toggleFsButtons();
        thisObj.game.paused = false;
        thisObj.spinnerHide();
        thisObj.hud.winCloseAll(false);
        thisObj.scenes.welcome.start();
    };
    thisObj._cbWelcome1 = function () {
        var langStr;
        console.debug('LgzLib.Mgr.welcome1:');

        langStr = thisObj.nm.dataFind("language").text();
        thisObj.lang.load(
            gamePrefix,
            langStr,
            function () {
                thisObj._cbWelcome2();
            }
        );
    };
    thisObj.welcome = function () {
        console.debug('LgzLib.Mgr.welcome:');
        window.setTimeout(function () {
            thisObj._cbWelcome1();
        }, 900);
    };
    thisObj.play = function () {
        var desktop;
        console.log('LgzLib.Mgr.play: ');
        thisObj.hud.winCloseAll(true);
        desktop = game.device.desktop;
        if (!desktop) {
            console.log('LgzLib.Mgr.play: !desktop');
            thisObj.hud.fullScreenStart();
        }
        //thisObj.startScene('Main');
        thisObj.scenes.main.start();
        game.stage.disableVisibilityChange = true;
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
        gameid = $lgzParms.attr("gameid");

		//note: For users not signed in, userid defaults to 0
        userid = $lgzParms.attr("userid");
        body = $("#textbug").val();
		if (body !== "") {
	        $.post(
                url,
                {body: body, game_id: gameid, user_id: userid}
            ).success(
			    function (data) { thisObj.sendBugReply(data); }
			).error(
                function () {
					console.log("Error submitting this bug...");
                    thisObj.spinnerHide();
		        }
            );
		}
        thisObj.hud.winClose('winBug', false);
        $("#textbug").val("");
        thisObj.spinnerShow();
    };
    thisObj.postScore = function (scoreval) {
        var $lgzParms, userid, gameid, url;
        url = "/high_scores/create";
        $lgzParms = $("#lgzParms");
        gameid = $lgzParms.attr("gameid");
        userid = $lgzParms.attr("userid");
        $.post(url, {game_id: gameid, user_id: userid, score: scoreval});
    };
    thisObj.gameId = function () {
        var id, tail, $lgzParms, urlparm, gameid;
        $lgzParms = $("#lgzParms");
        
        urlparm = document.URL.match(/.*\?gameid=(.*)/);
        if (urlparm) {

            console.log('LgzLib.Mgr.gameId: setting gameid from url parm');
            $lgzParms.attr('gameid', urlparm[1]);
        }
        
        gameid = $lgzParms.attr("gameid");
        if (gameid !== "") {
            console.log('LgzLib.Mgr.gameId: ' + gameid);
            return gameid;
        }
        
        tail = document.URL.match(/.*\/(.*)$/)[1];
        if (!tail) {
            alert('Error no gameid found!');
            return null;
        }
        id = tail.split('.')[0];
        $lgzParms.attr('gameid', id);
        
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
            [K.urlRscMedia + name + '.ogg',
            K.urlRscMedia + name + '.mp3',
            K.urlRscMedia + name + '.m4a']
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
        thisObj.sfx.play(key, 0, K.volumeLevel);
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
    thisObj.spinnerShow = function () {
        var target;
        
        thisObj.hud.winOpen('winProgress', true);
        target = document.getElementById('winProgress');
        thisObj.spinner.spin(target);
    };
    thisObj.spinnerHide = function () {
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
    thisObj._init2 = function () {
         
        thisObj.spinnerInit();
        thisObj.lang = new LgzLib.Lang();
        thisObj.hud = new LgzLib.Hud(thisObj);
        thisObj.spinnerShow();


    
        thisObj.lang.load(
            gamePrefix,
            K.lang,
            function () {
                thisObj._cbInitPost();
            }
        );
        thisObj.msgframe = new LgzLib.MsgFrames.Game(
            thisObj,
            function () {
                thisObj._cbInitPost();
            }
        );
        thisObj.nm = new LgzLib.NodeManager(thisObj);
        thisObj.hints = new LgzLib.Hints(thisObj);
        thisObj.scenes = {};

        globLgz.lang = thisObj.lang;
        globLgz.game = thisObj.game;
        globLgz.hud = thisObj.hud;
        globLgz.nm = thisObj.nm;
        globLgz.mgr = thisObj;
        globLgz.scenes = thisObj.scenes;
        thisObj._cbInitPost();
        
    };
    thisObj._initWait = function () {
        var wait = 0;
        if (!thisObj.game.device) {
            console.log('game.device not ready!');
            wait += 1;
        }
        if (!thisObj.game.plugins) {
            console.log('game.plugins not ready!');
            wait += 1;            
        }        
        if (wait) {
            window.setTimeout(function () {
                console.log('initWait: waiting');
                thisObj._initWait();
            }, 10);
        } else {
            console.log('initWait: game engine ready');
            thisObj._init2();
        }
    };
    thisObj._init = function () {
       game = new Phaser.Game(K.canvasWidth, K.canvasHeight, Phaser.CANVAS, 'lgzGameCanvas', null, true);
       thisObj.game = game;
       thisObj._initWait();
    };     
    thisObj._init();

};
