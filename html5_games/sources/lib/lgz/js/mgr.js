/*global
    $: true,
    document: true,
    Phaser: true,
    K: true, console: true,
    window: true,
    Spinner: true,
    LgzTest: true,
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

    globLgz.mgr = thisObj;

    //removeIf(prod)
    //note: force var to value set in sources/testconf.js
    LgzTest.point(
        'tp-gamePrefix',
        function (value) {
            gamePrefix = value;
        }
    );
    //endRemoveIf(prod)

    thisObj._cbInitPost = function () {
        initCount += 1;
        /*
        if (initCount < 3) {
            return;
        }
        */
        if (initCount < 2) {
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
        var $langData, $charSet, langStr;
        console.debug('LgzLib.Mgr.welcome1:');

        // langStr = thisObj.nm.dataFind("language").text();
        $langData = thisObj.nm.dataFind('language');
        $charSet = $langData.find('set');
        thisObj.hud.charSetInit($charSet);

        langStr = $langData.find('name').text();

        //removeIf(prod)
        //note: force var to value set in sources/testconf.js
        LgzTest.point(
            'tp-langStr',
            function (value) {
                langStr = value;
            }
        );
        //endRemoveIf(prod)

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
    thisObj._playStartScene = function () {
        thisObj.scenes.main.start();
        game.stage.disableVisibilityChange = true;
        window.setTimeout(
            function () {
                console.log('LgzLib.Mgr._playStartScene: hud.inputFocus()');
                thisObj.hud.inputFocus();
            },
            100
        );
    };
    thisObj._playStartFS = function () {
        thisObj.hud.fullScreenStart();
        window.setTimeout(
            function () {
                thisObj._playStartScene();
            },
            500
        );
    };
    thisObj.play = function () {
        var desktop;
        console.log('LgzLib.Mgr.play:1:' + thisObj.game.paused);
        thisObj.hud.winCloseAll(true);
        console.log('LgzLib.Mgr.play:2:' + thisObj.game.paused);
        desktop = game.device.desktop;
        if (desktop) {
            thisObj._playStartScene();
            return;
        }

//ivanixcu: TODO: fix native orientlock and fullscreen timings
        console.log('LgzLib.Mgr.play:2: !desktop. paused: ' + thisObj.game.paused);
        thisObj.hud.orientLockRequest();
        console.log('LgzLib.Mgr.play:3: !desktop. paused: ' + thisObj.game.paused);
        window.setTimeout(
            function () {
                thisObj._playStartFS();
            },
            600
        );
    };
    thisObj.exit = function () {
        thisObj.hud.orientNormalRequest();
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
     
        //todo: add url prefix, games will not reside on linguazone
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
        //todo: add url prefix, games will not reside on linguazone
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

        //removeIf(prod)
        //note: force var to value set in sources/testconf.js
        LgzTest.point(
            'tp-gameid',
            function (value) {
                gameid = value;
            }
        );
        //endRemoveIf(prod)
        
        if (gameid !== "") {
            console.log('LgzLib.Mgr.gameId: ' + gameid);
            return gameid;
        }
        console.error('LgzLib.Mgr.gameId: gameid empty');
        
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
    thisObj.alertError = function (msg) {
        var mf, CK;
        mf = thisObj.msgframe;
        CK = mf.CK;
        if (mf.parentIsNative || mf.parentIsWeb) {
            mf.sendToParent(CK.AlertError, msg);
        } else {
            window.alert(msg);
        }
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
         
        /*
        thisObj.spinnerInit();
        thisObj.lang = new LgzLib.Lang(thisObj);
        thisObj.hud = new LgzLib.Hud(thisObj);
        thisObj.spinnerShow();
        */

        thisObj.msgframe = new LgzLib.MsgFrames.Game(
            thisObj,
            function () {
                //thisObj._cbInitPost();
                thisObj._init3();
            }
        );
    
    };
    thisObj._init3 = function () {
        var prop, mf;

        mf = thisObj.msgframe;
        if (mf) {
            for (prop in mf.baseUrl) {
                if (mf.baseUrl.hasOwnProperty(prop)) {
	                thisObj.baseUrl[prop] = mf.baseUrl[prop];
                }
            }
        }

        //removeIf(prod)
        // ivanicu: set var to value set in sources/testconf.js
        LgzTest.point(
            'tp-baseUrlApi',
            function (value) {
                thisObj.baseUrl.api = value;
            }
        );
        //endRemoveIf(prod)
        

        //removeIf(prod)
        // ivanicu: set var to value set in sources/testconf.js
        LgzTest.point(
            'tp-baseUrlMMA',
            function (value) {
                thisObj.baseUrl.mma = value;
            }
        );
        //endRemoveIf(prod)
        
        //removeIf(prod)
        // ivanicu: set var to value set in sources/testconf.js
        LgzTest.point(
            'tp-baseUrlLang',
            function (value) {
                thisObj.baseUrl.lang = value;
            }
        );
        //endRemoveIf(prod)
        
        thisObj.spinnerInit();
        thisObj.lang = new LgzLib.Lang(thisObj);
        thisObj.hud = new LgzLib.Hud(thisObj);
        thisObj.spinnerShow();

        thisObj.lang.load(
            gamePrefix,
            K.lang,
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
        var prop;

        this.baseUrl = {};
        for (prop in K.baseUrl) {
            if (K.baseUrl.hasOwnProperty(prop)) {
	            this.baseUrl[prop] = K.baseUrl[prop];
            }
        }

        game = new Phaser.Game(
            K.canvasWidth,
            K.canvasHeight,
            Phaser.CANVAS,
            'lgzGameCanvas',
            null,
            true
        );
        game.lgzMgr = thisObj;
        thisObj.game = game;
        thisObj._initWait();
    };
    thisObj._init();

};
