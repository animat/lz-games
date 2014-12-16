(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.playGame_btn = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Play the game", "18px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 107;
	this.text.setTransform(32.2,21.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("As/EsIAApXIZ/AAIAAJXg");
	this.shape.setTransform(83.2,30.1);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166.4,67.7);


(lib.brick = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AKkDmI1HAAIAAnLIVHAAg");
	this.shape.setTransform(67.7,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AqjDmIAAnLIVHAAIAAHLg");
	this.shape_1.setTransform(67.7,23.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,137.3,48.2);


// stage content:
(lib.bricksCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:9,win:15});

	// timeline functions:
	this.frame_0 = function() {
		///*#include "../../gameAssets/expressinstall.as"
		//
		//if (_root.MMplayerType == undefined) {
		//	// --- upgrade not needed
		//	gotoAndPlay(2);
		//} else {
		//	stop();
		// 
		// 	var updater:MovieClip;
		//	var hold:MovieClip;
		//
		//	loadUpdater = function() {
		//		System.security.allowDomain("fpdownload.macromedia.com");
		//		
		//		updater = _root.createEmptyMovieClip("expressInstallHolder", 10000000);
		//		updater.installStatus = installStatus;
		//		hold = updater.createEmptyMovieClip("hold", 1);
		//	
		//		updater.onEnterFrame = function() {
		//			if (typeof hold.startUpdate == 'function') {
		//				loadInit();
		//				delete this.onEnterFrame;
		//			}
		//		}
		//	
		//		var cacheBuster = Math.random();
		//		hold.loadMovie("http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+cacheBuster);
		//	}
		//	
		//	loadInit = function() {
		//		hold.redirectURL = _root.MMredirectURL;
		//		hold.MMplayerType = _root.MMplayerType;
		//		hold.MMdoctitle = _root.MMdoctitle;
		//		hold.startUpdate();
		//	}
		//	
		//	installStatus = function(statusValue) {
		//		if (statusValue == "Download.Complete") {
		//			// Installation is complete. In most cases the browser window that this SWF 
		//			// is hosted in will be closed by the installer or manually by the end user
		//		} else if (statusValue == "Download.Cancelled") {
		//			// The end user chose "NO" when prompted to install the new player
		//			// by default no User Interface is presented in this case. It is left up to 
		//			// the developer to provide an alternate experience in this case
		//			
		//			getURL("javascript:alert('This content requires a more recent version of the Macromedia Flash Player.')");
		//		} else if (statusValue == "Download.Failed") {
		//			// The end user failed to download the installer due to a network failure
		//			// by default no User Interface is presented in this case. It is left up to 
		//			// the developer to provide an alternate experience in this case
		//			
		//			getURL("javascript:alert('There was an error in downloading the Flash Player update. Please try again later, or visit macrmedia.com to download the latest version of the Flash plugin.')");
		//		}
		//	}
		//	
		//	// --- Start upgrade
		//	loadUpdater();
		//}*/
	}
	this.frame_1 = function() {
		/* stop();
		var loader:LoadGame = new LoadGame(this, "bricks.xml", "TranslationGame"); // For local testing
		//var loader:LoadGame = new LoadGame(this, "http://www.linguazone.com/customizer/customVars.php?action=play&gameid="+_root.gameid, "TranslationGame"); // For deployment*/
	}
	this.frame_2 = function() {
		/* stop();
		playGame_btn.onRelease = function() {
			gotoAndStop("game");
		}*/
	}
	this.frame_9 = function() {
		/* stop();
		var game:RunGame = new RunGame(this);*/
	}
	this.frame_15 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(7).call(this.frame_9).wait(6).call(this.frame_15).wait(6));

	// Actions
	this.instance = new lib.brick();
	this.instance.setTransform(207.3,200.3,1,1,0,0,0,67.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(20));

	// Play Game btn
	this.playGame_btn = new lib.playGame_btn();
	this.playGame_btn.setTransform(374.2,338.3,1,1,0,0,0,83.2,30.1);
	this.playGame_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.playGame_btn).wait(2).to({_off:false},0).to({_off:true},7).wait(12));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("EgvCALvIAA3dMBeFAAAIAAXdg");
	this.shape.setTransform(300.1,324.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("Egu9ATjIgLAAMAAAgnEMBeRAAAMAAAAnEg");
	this.shape_1.setTransform(299.6,124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(439.1,376.7,136.3,47.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;