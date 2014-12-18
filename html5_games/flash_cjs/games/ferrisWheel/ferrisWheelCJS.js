(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap12.png", id:"Bitmap12"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"sounds/right.mp3", id:"right"},
		{src:"sounds/Whip01wav.mp3", id:"Whip01wav"},
		{src:"sounds/Whip02wav.mp3", id:"Whip02wav"},
		{src:"sounds/Whip03wav.mp3", id:"Whip03wav"},
		{src:"sounds/Whip04wav.mp3", id:"Whip04wav"},
		{src:"sounds/Whip05wav.mp3", id:"Whip05wav"},
		{src:"sounds/Whip06wav.mp3", id:"Whip06wav"},
		{src:"sounds/wrong.mp3", id:"wrong"}
	]
};



// symbols:



(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,211);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1994,624);


(lib.stand = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AC+i9QBMBLAEByQgEByhMBNQhMBMhyADQhygDhLhMQhNhNgDhyQAEhyBMhLQBLhNBygDQByAEBMBMg");
	this.shape.setTransform(232.8,-92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF0022").s().p("Ai9C+QhNhMgDhyQADhxBNhMQBMhNBxgDQByADBMBNQBNBMACBxQgCByhNBMQhMBNhyACQhxgChMhNg");
	this.shape_1.setTransform(232.8,-92.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(6,1,1).p("EhCBA+AMBEdh7/MA/mB7GIj2AAMg7th0UMhBtB1Ng");
	this.shape_2.setTransform(215,290.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DFD000").s().p("EhCBA+AMBEdh7/MA/lB7GIj2AAMg7rh0UMhBuB1Ng");
	this.shape_3.setTransform(215,290.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("EAp2gBaMhTrAAAIAAC1MBTrAAAg");
	this.shape_4.setTransform(217.8,424.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DFD000").s().p("Egp1ABbIAAi1MBTrAAAIAAC1g");
	this.shape_5.setTransform(217.8,424.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(6,1,1).p("EA1ggBaMhq/AAAIAAC1MBq/AAAg");
	this.shape_6.setTransform(213.2,576.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DFD000").s().p("Eg1fABbIAAi1MBq/AAAIAAC1g");
	this.shape_7.setTransform(213.2,576.7);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-210.5,-122.1,851.1,812.5);


(lib.spotlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(251,251,153,0.412)").s().p("AjIB7QhTgzgBhIQABhHBTgzQBTg0B1AAQB1AABUA0QBTAzAABHQAABIhTAzQhUAzh1ABQh1gBhTgzg");
	this.shape.setTransform(28.5,17.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,35);


(lib.wrongFX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("wrong");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.soundFX6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("Whip01wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.soundFX5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("Whip03wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.soundFX4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("Whip02wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.soundFX3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("Whip04wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.soundFX2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("Whip05wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.soundFX1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("Whip06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.rightFX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("right");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.seat = function() {
	this.initialize();

	// Pic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCDB54").s().p("AgNAAIgNgVQAKADATgCIAYgBQgFAGgQACIgRACQABALAKAKIAOAMQgOgEgNgSg");
	this.shape.setTransform(-1.3,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCDB54").s().p("AgZgMQgJgoABgDQAwgQAKANQALANgDADQgTgTgOAEQgNAEgBACQgQAWAaAsQAWAsAGAGQgngpgKgkg");
	this.shape_1.setTransform(-16,-14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F495A9").s().p("AhWBUQAPgcAAgEQBOgqAcg/QAchAgCgIIBIAAIg6AQQgIAxghAoQghAmgdAXQggAWgCABQgVAogYALQgVAKgEAAQAegNAQgcg");
	this.shape_2.setTransform(19.3,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F495A9").s().p("AhJAqQguhaAEhHQAFhHAEgEIBpACIhVAUQgMB1AyBSQAxBSA5AsQAvAkALAGQiPg/guhag");
	this.shape_3.setTransform(-21.3,-4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.4,1,1).p("AAcAAQgDAagZACQgZgDgCgZQACgZAZgCQAaACACAZg");
	this.shape_4.setTransform(-1.1,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DF0028").s().p("AgbAAQACgZAZgCQAaACACAZQgDAagZACQgZgDgCgZg");
	this.shape_5.setTransform(-1.1,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.4,1,1).p("AFNimQgrAAgrAAQgMA/giAxQgiAwg1ASQgPArgcAYQgdAXgvgOQgTgIgOgXQgNgXgFgdQhFgXgqg3Qgqg4ANhQQhDAAg9AAQgLAoAAAsQAECNBfBgQBeBeCOAEQCOgEBfheQBfhgAEiNQAAgVgDgUg");
	this.shape_6.setTransform(-0.1,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF0028").s().p("AjsBvQhfhfgEiNQAAgrALgoICAAAQgNBQAqA3QAqA3BFAYQAFAcANAXQAOAYAUAHQAuAOAdgXQAcgXAPgsQA2gSAhgwQAigwAMhAIBWAAQADAUAAAVQgECNhfBfQhfBfiOADQiNgDhfhfg");
	this.shape_7.setTransform(-0.1,-3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.4,1,1).p("AhHiPQAegHARAUQAFATgJA1QgJA1AXApQAWAsBogKQAEABACAWQAEAWgoAeQgFACg8gVQg6gVgvg9Qgwg8Agh3QADgCAegGg");
	this.shape_8.setTransform(-9.5,-7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFA81F").s().p("AARB+Qg6gVgvg9Qgwg7Agh4QADgCAegGQAegHARAUQAFATgJA1QgJA1AXApQAWAsBogKQAEABACAWQAEAWgoAeIgBABQgIAAg4gUg");
	this.shape_9.setTransform(-9.5,-7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#ADADAA").ss(1.4,1,1).p("ABjAbQAEACgCAIQgDAHgFgBIi/hFQgEgDACgHQADgHAFABg");
	this.shape_10.setTransform(6.9,-7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4C4BF").s().p("ABdArIi/hFQgEgDACgGQADgIAFABIC/BFQAEACgCAIQgCAGgFAAIgBAAg");
	this.shape_11.setTransform(6.9,-7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.4,1,1).p("Ah3gdIAFAdIBxAeIB2gcIADgfg");
	this.shape_12.setTransform(-0.8,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002ADF").s().p("AhyAAIgFgdIDvAAIgDAfIh2Acg");
	this.shape_13.setTransform(-0.8,17.8);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.7,-25.1,69.2,49.8);


(lib.PlayTheGame = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play the game!", "20px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 206;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AwdCWIAAkrMAg7AAAIAAErg");
	this.shape.setTransform(106.5,17.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212,32.5);


(lib.playagain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play again?", "20px 'Arial'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 165;
	this.text.setTransform(82.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AtGFeIAAq7IaNAAIAAK7g");
	this.shape.setTransform(83.2,35);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,0,169.9,70);


(lib.menuButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGBCbIsBAAIAAk1IMBAAg");
	this.shape.setTransform(39.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AmACbIAAk1IMBAAIAAE1g");
	this.shape_1.setTransform(39.5,16.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,33);


(lib.mask = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("EgkiAEhIAApBMBJFAAAIAAJBg");
	this.shape.setTransform(233.9,29);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,467.8,58);


(lib.lightbeam = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap12, null, new cjs.Matrix2D(1,0,0,1,-83,-105.5)).s().p("As9QeMAAAgg7IZ7AAMAAAAg7g");
	this.shape.setTransform(4,3.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-102,166,211);


(lib.letterUnderline = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Ah3AAIDvAA");
	this.shape.setTransform(12,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,26,2);


(lib.letter_btn = function() {
	this.initialize();

	// Text
	this.text = new cjs.Text("", "16px 'TimesNewRomanPSMT'", "#000066");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 16;
	this.text.setTransform(8.2,0.4);

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA0BmQAyAAAAgyIAAhnQAAgygyAAIhnAAQgyAAAAAyIAABnQAAAyAyAAg");
	this.shape.setTransform(10.2,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.502)").s().p("AgzBmQgyAAAAgyIAAhnQAAgyAyAAIBnAAQAyAAAAAyIAABnQAAAygyAAg");
	this.shape_1.setTransform(10.2,10.2);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.5,23.1);


(lib.windows = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRBoIAAjPICjAAIAADPg");
	this.shape.setTransform(-35,64.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRBoIAAjPICjAAIAADPg");
	this.shape_1.setTransform(-12,64.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnZBEIAAiHIOzAAIAACHg");
	this.shape_2.setTransform(-225.1,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBgIAAi/IBjAAIAAC/g");
	this.shape_3.setTransform(-390.5,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBgIAAi/IBjAAIAAC/g");
	this.shape_4.setTransform(-405.6,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDDF00").s().p("Ag9CDIAAkEIB8AAIAAEEg");
	this.shape_5.setTransform(-558.1,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDDF00").s().p("Ag+CDIAAkEIB8AAIAAEEg");
	this.shape_6.setTransform(-574.3,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDDF00").s().p("Ag+CCIAAkEIB8AAIAAEEg");
	this.shape_7.setTransform(-574.3,-28.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiOAvIAAheIEdAAIAABeg");
	this.shape_8.setTransform(-562.8,90.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiOAvIAAheIEdAAIAABeg");
	this.shape_9.setTransform(-562.8,75.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiOAwIAAhfIEdAAIAABfg");
	this.shape_10.setTransform(-562.8,60.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjhBFIAAiJIHDAAIAACJg");
	this.shape_11.setTransform(-798.6,172.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjhBFIAAiJIHDAAIAACJg");
	this.shape_12.setTransform(-798.6,151.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhAEJIAAoRICBAAIAAIRg");
	this.shape_13.setTransform(-735.5,161.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhAEJIAAoRICBAAIAAIRg");
	this.shape_14.setTransform(-753.8,161.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhAEJIAAoRICBAAIAAIRg");
	this.shape_15.setTransform(-735.5,100.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhAEJIAAoRICBAAIAAIRg");
	this.shape_16.setTransform(-753.8,100.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjlFGIAAqLIHLAAIAAKLg");
	this.shape_17.setTransform(-929.7,41.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjlFGIAAqLIHLAAIAAKLg");
	this.shape_18.setTransform(-873.1,41.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DDDF00").s().p("Ai2EDIAAoFIFtAAIAAIFg");
	this.shape_19.setTransform(-767.1,-33.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DDDF00").s().p("Ai2EDIAAoFIFtAAIAAIFg");
	this.shape_20.setTransform(-708.1,-107.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DDDF00").s().p("Ai2EDIAAoFIFtAAIAAIFg");
	this.shape_21.setTransform(-767.1,-107.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjlFGIAAqLIHLAAIAAKLg");
	this.shape_22.setTransform(-873.1,-37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_23.setTransform(826.9,-118.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_24.setTransform(938.9,-118.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_25.setTransform(938.9,-12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_26.setTransform(876.1,72.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_27.setTransform(827.6,72.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_28.setTransform(827.6,19.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_29.setTransform(723.9,82.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_30.setTransform(683.2,82.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DDDF00").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_31.setTransform(677.4,-115.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DDDF00").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_32.setTransform(677.4,-167.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DDDF00").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_33.setTransform(643.7,-115.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DDDF00").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_34.setTransform(643.7,-167.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_35.setTransform(683.2,28.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhSB6IAAjzIClAAIAADzg");
	this.shape_36.setTransform(-96.9,57.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhSB6IAAjzIClAAIAADzg");
	this.shape_37.setTransform(-73.3,57.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhSB6IAAjyIClAAIAADyg");
	this.shape_38.setTransform(-96.9,23.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhSB5IAAjyIClAAIAADyg");
	this.shape_39.setTransform(63,109.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhSB5IAAjyIClAAIAADyg");
	this.shape_40.setTransform(33,109.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhSB5IAAjyIClAAIAADyg");
	this.shape_41.setTransform(33,71.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhSB6IAAjyIClAAIAADyg");
	this.shape_42.setTransform(145,149.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhSB6IAAjyIClAAIAADyg");
	this.shape_43.setTransform(179,149.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhSB6IAAjyIClAAIAADyg");
	this.shape_44.setTransform(209,149.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhSB6IAAjyIClAAIAADyg");
	this.shape_45.setTransform(-73.3,23.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhSB6IAAjyIClAAIAADyg");
	this.shape_46.setTransform(-73.3,-17.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_47.setTransform(-221.4,127.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_48.setTransform(-309.3,73.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_49.setTransform(-264.3,73.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_50.setTransform(-403,129.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_51.setTransform(-443.8,129.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_52.setTransform(-443.8,73.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_53.setTransform(151.6,67.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_54.setTransform(151.6,15.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_55.setTransform(372.4,14);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_56.setTransform(333.8,14);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_57.setTransform(372.4,72.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_58.setTransform(333.8,72.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_59.setTransform(372.4,130.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_60.setTransform(333.8,130.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_61.setTransform(511.7,32.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AiKDLIAAmVIEVAAIAAGVg");
	this.shape_62.setTransform(536.4,-15.3);

	this.addChild(this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-952.8,-187.9,1905.7,375.8);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAAQADgoApgFQAqAFADAoQgDApgqAEQgpgEgDgpg");
	this.shape.setTransform(-453.1,323.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAAQAFgpAogDQAqADAEApQgEAqgqADQgogDgFgqg");
	this.shape_1.setTransform(-583.7,524.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAAQAFgoAogFQApAFAEAoQgEAqgpAEQgogEgFgqg");
	this.shape_2.setTransform(-289.9,-190.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAAQAEgoAogEQAqAEAEAoQgEAqgqADQgogDgEgqg");
	this.shape_3.setTransform(-229.7,-273.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtAAQAFgoAogEQAqAEAEAoQgEApgqAFQgogFgFgpg");
	this.shape_4.setTransform(920.2,-509.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtAAQAEgpApgDQApADAEApQgEAqgpADQgpgDgEgqg");
	this.shape_5.setTransform(844.9,429.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAAQAEgpApgEQApAEAEApQgEApgpAEQgpgEgEgpg");
	this.shape_6.setTransform(433.1,175.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAAQAFgpAogDQApADAEApQgEAqgpADQgogDgFgqg");
	this.shape_7.setTransform(169.5,160.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtAAQAEgoApgEQApAEAFAoQgFApgpAFQgpgFgEgpg");
	this.shape_8.setTransform(11.3,409.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtAAQAEgoApgFQApAFAFAoQgFAqgpAEQgpgEgEgqg");
	this.shape_9.setTransform(-751.9,298.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsAAQAEgoAogEQAqAEADAoQgDAqgqAEQgogEgEgqg");
	this.shape_10.setTransform(-523.4,-57.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtAAQAEgpApgEQApAEAEApQgEApgpAEQgpgEgEgpg");
	this.shape_11.setTransform(94.2,-110.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsAAQADgoApgFQAqAFADAoQgDAqgqAEQgpgEgDgqg");
	this.shape_12.setTransform(847.4,47.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtAAQAEgoApgFQApAFAEAoQgEApgpAEQgpgEgEgpg");
	this.shape_13.setTransform(654.1,-183.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsAAQADgoApgFQAqAFADAoQgDApgqAEQgpgEgDgpg");
	this.shape_14.setTransform(465.8,-499.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtAAQAFgoAogFQAqAFAEAoQgEAqgqAEQgogEgFgqg");
	this.shape_15.setTransform(1.3,-507.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtAAQAFgpAogDQApADAEApQgEAqgpADQgogDgFgqg");
	this.shape_16.setTransform(-558.6,-489.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtAAQAEgoApgFQApAFAFAoQgFAqgpAEQgpgEgEgqg");
	this.shape_17.setTransform(-829.7,-333.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtAAQAEgoApgEQApAEAEAoQgEApgpAFQgpgFgEgpg");
	this.shape_18.setTransform(-777,-223.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtAAQAEgpApgEQApAEAEApQgEApgpAFQgpgFgEgpg");
	this.shape_19.setTransform(-872.4,100.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsAAQAEgpAogEQAqAEAEApQgEApgqAEQgogEgEgpg");
	this.shape_20.setTransform(-910.1,379.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtAAQAEgpApgDQApADAFApQgFAqgpADQgpgDgEgqg");
	this.shape_21.setTransform(262.4,524.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgsAAQAEgoAogFQAqAFAEAoQgEAqgqAEQgogEgEgqg");
	this.shape_22.setTransform(611.4,251.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgsAAQAEgpAogDQApADAFApQgFAqgpADQgogDgEgqg");
	this.shape_23.setTransform(887.6,208.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtAAQAEgpApgEQApAEAEApQgEApgpAEQgpgEgEgpg");
	this.shape_24.setTransform(849.9,-205.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgtAAQAFgpAogEQAqAEAEApQgEApgqAEQgogEgFgpg");
	this.shape_25.setTransform(287.5,-323.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgsAAQADgoApgFQAqAFADAoQgDAqgqAEQgpgEgDgqg");
	this.shape_26.setTransform(-332.6,-524.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgtAAQAEgpApgDQApADAEApQgEAqgpADQgpgDgEgqg");
	this.shape_27.setTransform(-706.7,-399.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgtAAQAEgpApgEQApAEAEApQgEApgpAEQgpgEgEgpg");
	this.shape_28.setTransform(-920.1,-444.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgsAAQADgpApgDQAqADADApQgDAqgqADQgpgDgDgqg");
	this.shape_29.setTransform(-827.5,-502.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeAAQADgbAbgDQAcADADAbQgDAcgcACQgbgCgDgcg");
	this.shape_30.setTransform(920.2,-509.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaAAQACgXAYgDQAZADACAXQgCAYgZADQgYgDgCgYg");
	this.shape_31.setTransform(844.9,429.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgYAAQACgWAWgCQAXACACAWQgCAXgXACQgWgCgCgXg");
	this.shape_32.setTransform(433.1,175.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQATACACATQgCATgTACQgTgCgCgTg");
	this.shape_33.setTransform(11.3,409.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgbAAQADgYAYgDQAZADADAYQgDAZgZADQgYgDgDgZg");
	this.shape_34.setTransform(-751.9,298.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AggAAQADgcAdgEQAdAEAEAcQgEAdgdADQgdgDgDgdg");
	this.shape_35.setTransform(-523.4,-57.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaAAQADgXAXgDQAYADADAXQgDAZgYACQgXgCgDgZg");
	this.shape_36.setTransform(847.4,47.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag2AAQAFgxAxgFQAyAFAFAxQgFAygyAFQgxgFgFgyg");
	this.shape_37.setTransform(-829.7,-333.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAAQACgXAYgDQAZADACAXQgCAZgZACQgYgCgCgZg");
	this.shape_38.setTransform(-706.7,-399.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAAQADgWAWgDQAXADACAWQgCAXgXACQgWgCgDgXg");
	this.shape_39.setTransform(-920.1,-444.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhAAAQAGg6A6gFQA7AFAGA6QgGA7g7AFQg6gFgGg7g");
	this.shape_40.setTransform(-583.7,524.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag7AAQAFg2A2gFQA3AFAFA2QgFA3g3AFQg2gFgFg3g");
	this.shape_41.setTransform(-289.9,-190.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag8AAQAFg3A3gFQA3AFAGA3QgGA3g3AGQg3gGgFg3g");
	this.shape_42.setTransform(433.1,175.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag3AAQAFgyAygFQAzAFAFAyQgFAzgzAFQgygFgFgzg");
	this.shape_43.setTransform(465.8,-499.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag0AAQAFgwAvgEQAwAEAFAwQgFAxgwAEQgvgEgFgxg");
	this.shape_44.setTransform(-558.6,-489.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhFAAQAGg/A/gFQA/AFAHA/QgHA/g/AGQg/gGgGg/g");
	this.shape_45.setTransform(-872.4,100.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag0AAQAFgvAvgFQAwAFAFAvQgFAwgwAFQgvgFgFgwg");
	this.shape_46.setTransform(849.9,-205.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:847.4,y:47.7}},{t:this.shape_11,p:{x:94.2,y:-110.5}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:433.1,y:175.7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12,p:{x:-332.6,y:-524.7}},{t:this.shape_25},{t:this.shape_11,p:{x:849.9,y:-205.9}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_37,p:{x:-829.7,y:-333.9}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_36},{t:this.shape_6,p:{x:94.2,y:-110.5}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_7},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_37,p:{x:-827.5,y:-502.7}},{t:this.shape_11,p:{x:-920.1,y:-444.4}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_46},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_45},{t:this.shape_18},{t:this.shape_17},{t:this.shape_44},{t:this.shape_15},{t:this.shape_43},{t:this.shape_13},{t:this.shape_12,p:{x:847.4,y:47.7}},{t:this.shape_6,p:{x:94.2,y:-110.5}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_42},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_41},{t:this.shape_40},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-924.7,-529.3,1849.6,1058.7);


(lib.arrow2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AgmAmIBNhL");
	this.shape.setTransform(3.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAnhNIAACbIhNhO");
	this.shape_1.setTransform(3.9,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgmAAIBNhNIAACbg");
	this.shape_2.setTransform(3.9,7.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.8,17.7);


(lib.arrow_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.502)").s().p("AhLBdIAAi5ICXAAIAAC5g");
	this.shape.setTransform(7.6,9.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,18.8);


(lib.wheel = function() {
	this.initialize();

	// Seats
	this.seat26 = new lib.seat();
	this.seat26.setTransform(-85.8,-284.2,1.014,1.014);

	this.seat25 = new lib.seat();
	this.seat25.setTransform(-163.1,-245.3,1.014,1.014);

	this.seat24 = new lib.seat();
	this.seat24.setTransform(-219.7,-198.9,1.014,1.014);

	this.seat23 = new lib.seat();
	this.seat23.setTransform(-264.7,-144.4,1.014,1.014);

	this.seat22 = new lib.seat();
	this.seat22.setTransform(-292.3,-74,1.014,1.014);

	this.seat21 = new lib.seat();
	this.seat21.setTransform(-301.9,1.3,1.014,1.014);

	this.seat20 = new lib.seat();
	this.seat20.setTransform(-298.1,65.6,1.014,1.014);

	this.seat19 = new lib.seat();
	this.seat19.setTransform(-276.2,128,1.014,1.014);

	this.seat18 = new lib.seat();
	this.seat18.setTransform(-241.5,184.4,1.014,1.014);

	this.seat17 = new lib.seat();
	this.seat17.setTransform(-198.1,229.2,1.014,1.014);

	this.seat16 = new lib.seat();
	this.seat16.setTransform(-138.5,271.3,1.014,1.014);

	this.seat15 = new lib.seat();
	this.seat15.setTransform(-78.5,302.6,1.014,1.014);

	this.seat8 = new lib.seat();
	this.seat8.setTransform(297.8,65.6,1.014,1.014);

	this.seat7 = new lib.seat();
	this.seat7.setTransform(310.1,-5.7,1.014,1.014);

	this.seat13 = new lib.seat();
	this.seat13.setTransform(76.5,298.5,1.014,1.014);

	this.seat12 = new lib.seat();
	this.seat12.setTransform(140.6,271.3,1.014,1.014);

	this.seat14 = new lib.seat();
	this.seat14.setTransform(4,309.9,1.014,1.014);

	this.seat11 = new lib.seat();
	this.seat11.setTransform(197.1,229.5,1.014,1.014);

	this.seat10 = new lib.seat();
	this.seat10.setTransform(253.6,184.1,1.014,1.014);

	this.seat9 = new lib.seat();
	this.seat9.setTransform(280.4,128,1.014,1.014);

	this.seat6 = new lib.seat();
	this.seat6.setTransform(292.1,-70.2,1.014,1.014);

	this.seat5 = new lib.seat();
	this.seat5.setTransform(266.7,-144.4,1.014,1.014);

	this.seat4 = new lib.seat();
	this.seat4.setTransform(220.1,-204.4,1.014,1.014);

	this.seat3 = new lib.seat();
	this.seat3.setTransform(163.6,-245.3,1.014,1.014);

	this.seat2 = new lib.seat();
	this.seat2.setTransform(80.5,-280.3,1.014,1.014);

	this.seat1 = new lib.seat();
	this.seat1.setTransform(4,-293.8,1.014,1.014);

	// Wheel
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("ADWDVQhWBWiAADQh/gDhWhWQhVhVgDiAQADh/BVhWQBWhVB/gDQCAADBWBVQBVBWADB/QgDCAhVBVg");
	this.shape.setTransform(-0.2,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF0038").s().p("AjVDVQhVhVgDiAQADh/BVhWQBWhVB/gDQCAADBWBVQBVBWADB/QgDCAhVBVQhWBWiAADQh/gDhWhWg");
	this.shape_1.setTransform(-0.2,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DFD000").ss(6,1,1).p("EAkGgPNQDCHFADIIQgDIJjCHEQjBHFlYFXQlYFXnFDBQnGDBoKAEQoJgEnGjBQnFjBlYlXQlXlXjCnFQjCnEgDoJQADoIDCnFQDCnEFXlXQFYlXHFjBQHGjCIJgDQIKAEHGDBQHFDBFYFXQFYFXDBHEg");
	this.shape_2.setTransform(0.9,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0054BF").s().p("AgUAAQABgSATgCQATACACASQgCATgTACQgTgCgBgTg");
	this.shape_3.setTransform(0.7,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0054BF").s().p("EgHDgmkIA9gKMANKBNTIg9AKg");
	this.shape_4.setTransform(-5.8,-7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0054BF").s().p("EgmiAF0MBM7gMkIAKA9MhM7AMkg");
	this.shape_5.setTransform(3.6,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0054BF").s().p("EggKgWLIAkgyMA/xAtJIgkAzg");
	this.shape_6.setTransform(-7.7,6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0054BF").s().p("A3GfwMAtahADIAyAkMgtZBADg");
	this.shape_7.setTransform(6.6,-5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0054BF").s().p("EgOQgkNIA6gWMAbnBIxIg6AWg");
	this.shape_8.setTransform(-10.8,-4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0054BF").s().p("EgkmANXMBI4gbnIAVA5MhI3Abog");
	this.shape_9.setTransform(4.6,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0054BF").s().p("Egj+gPoIAag5MBHjAgKIgaA5g");
	this.shape_10.setTransform(-4.2,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0054BF").s().p("EgQkAjrMAgRhHuIA4AZMggRBHug");
	this.shape_11.setTransform(4,-7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0054BF").s().p("EgUzgg4IA0ghMAozBCSIg0Agg");
	this.shape_12.setTransform(-11.4,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0054BF").s().p("EghcAUAMBCYgo0IAhA1MhCYAo0g");
	this.shape_13.setTransform(6.3,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0054BF").s().p("EgmMgIlIAOg8MBMLASHIgOA8g");
	this.shape_14.setTransform(-3.6,4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0054BF").s().p("EgJjAmEMASKhMVIA8AOMgSJBMVg");
	this.shape_15.setTransform(3.7,-7.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0054BF").s().p("A737LIAsgrMA3DA3CIgsArg");
	this.shape_16.setTransform(-10.3,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0054BF").s().p("A75bNMA3Hg3FIAsAsMg3HA3Fg");
	this.shape_17.setTransform(5.7,-3.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0054BF").s().p("EgnFAAFIABg8MBOJAAzIAAA8g");
	this.shape_18.setTransform(1.2,3.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0054BF").s().p("EgAeAnEMAAAhOHIA8AAMAAABOHg");
	this.shape_19.setTransform(-1.1,-7.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DFD000").ss(10,1,1).p("EAR8gqbQIVDjGVGVQGUGTDkIWQDkIVAEJlQgEJmjkIWQjkIVmUGUQmVGUoVDjQoVDkpnAEQpmgEoVjkQoWjjmUmUQmUmUjkoVQjkoWgEpmQAEplDkoVQDkoWGUmTQGUmVIWjjQIVjkJmgEQJnAEIVDkg");
	this.shape_20.setTransform(4.3,-5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DFD000").ss(6,1,1).p("ACZiYIkxEx");
	this.shape_21.setTransform(-209.2,167.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DFD000").ss(6,1,1).p("AigCiIFClC");
	this.shape_22.setTransform(184.5,-211.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DFD000").ss(6,1,1).p("ACMCMIkXkX");
	this.shape_23.setTransform(-183.4,-206.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DFD000").ss(6,1,1).p("AC8C8Il3l3");
	this.shape_24.setTransform(177.4,203.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DFD000").ss(6,1,1).p("AAAjuIAAHd");
	this.shape_25.setTransform(1,265.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#DFD000").ss(6,1,1).p("ADQAAImfAA");
	this.shape_26.setTransform(-269.8,4.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#DFD000").ss(6,1,1).p("AjnAAIHPAA");
	this.shape_27.setTransform(274.6,9.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#DFD000").ss(6,1,1).p("AAAjMIAAGZ");
	this.shape_28.setTransform(4.6,-279.7);

	this.addChild(this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.seat1,this.seat2,this.seat3,this.seat4,this.seat5,this.seat6,this.seat9,this.seat10,this.seat11,this.seat14,this.seat12,this.seat13,this.seat7,this.seat8,this.seat15,this.seat16,this.seat17,this.seat18,this.seat19,this.seat20,this.seat21,this.seat22,this.seat23,this.seat24,this.seat25,this.seat26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-336.8,-319,681.5,653.7);


(lib.scrollMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow2();
	this.instance.setTransform(11.1,17.3,1,1,0,0,0,7.8,15.7);

	this.instance_1 = new lib.arrow_bg();
	this.instance_1.setTransform(12.6,31,1.069,1.067,0,0,0,11.8,29);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,20);


(lib.bg = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.windows();
	this.instance.setTransform(96.7,473.2);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7D7DD").ss(1,1,1).p("ABQl9QhnhKhrATQhrAThFBVQhFBVAGB9QAOBiBIAlQBIAnA/A/QAxBDAZBLQAYBMA9A4QCQB0B3iRQA1hHAUhdQAUhdADhXQAChCgZgmQgagmgvgrQgvgxgwg+Qgwg9gzgog");
	this.shape.setTransform(784.4,-271.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D7D7DD").ss(1,1,1).p("AEKAAQgEBPhLA1QhLA0hwACQhwgChLg0QhLg1gDhPQADhOBLg1QBLg0BwgCQBwACBLA0QBLA1AEBOg");
	this.shape_1.setTransform(715.1,-229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7D7DD").s().p("AILKWQAGhSALgrQAhhVAShZQAPiCgih/QgWh/hIhwQgdgpglgSQglgSgmgbQhBg9g9hEQhNhIhag8QhZg8hngaQhHgQhVAAQhVABhIAIQgzAIguAXQguAYgzAIQglABgjgGQgkgHgjAbQDPitEPhBQD/g1DqBcQDsBbCnDAQCmC/AwDyQAvD1h5D7QhOCXiKB5QAUgcAHhSg");
	this.shape_2.setTransform(794.3,-284.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjNOlQiagHiKg4QiJg3hrhvQkWk0AalVQAalUDvkNQDwkNFshaQD9g2DsBcQDsBcCnC/QCnC/AvD1QAwDyh6D8QheC1izCJQiyCKjdBKQjFBCjEAAIgwgBg");
	this.shape_3.setTransform(774.7,-267.8);

	this.instance_1 = new lib.star();
	this.instance_1.setTransform(87.6,-201.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EiXtAgWMAAJhAdQAHgGCogIQCogHD2BFQD2BEDxDfQDxDeCZHFMAAAAg+IH+AAIAArOILupNIFoH5IAAmlIEOAAIAAL3ICWD9IAAJQIGGAAIAAz0IGGAAIAAPMIJ2AAIAAuiIaRmkISwD7IAAT0IGGAAIAA/qIP8AAIAAYZIJ0AAIAAv0IEOAAIHgJOIAAt2IOiAAIAATIIGGAAQADgBAsAhQArAiArBUQAsBTADCTIAAFSIJYAAIAA7tIINrjIPtAAIAAm7ILQAAIAAJPIHgAAIAAYZIMNAAIAAxIISSAAIAAHOIEOAAIAAn5IGkAAIAAp5QAAgFA1g3QA1g2BggtQBhgsCDAZQCEAYCeCaIAAD9IJ2AAMAAAAtUg");
	this.shape_4.setTransform(94.7,497.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0E4689").s().p("EiWtAoUIge+8IQbAAIAAH+II5AAMAAAgshQAHgECWgRQCXgQDhAaQDhAaDmB9QDlB8CkEUIAAJYIIcAAIAAP7IDSAAIAAo5ILuAAIDSnCIFoQZIAADSIGkAAIAAlKIKUAAIAASwILQAAIAAySIMMloIFaFZIAAVVIHvAAIAAveIPemGIAAI6IJVAAIAAp2IFosLIAAO/IFoAAIAAn8IOEAAIAASQIDxAAIDwzrIC0TrIAAJ2II6AAMAAAg7/II6AAIAAWCIEOAAIAAqUIHgAAMAAAAgVIJ2AAIAA/3IHCzsIAAUKID/D/IAAb4IEdAAMAAAglfIJ2AAIC0uiIDSOiIFKAAQADgBAkAcQAkAcAkBPQAlBOACCUIAAR0IFLAAIAAveISvAAIAAp2IHCi0MAAABGxg");
	this.shape_5.setTransform(95.2,426.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.Bitmap2, null, new cjs.Matrix2D(1,0,0,1,-997,-312)).s().p("EibwAwwMAAAhheME3hAAAMAAABheg");
	this.shape_6.setTransform(94.7,414.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D0949").s().p("EiX2B0QMAAAjofMEvuAAAMAAADofg");
	this.shape_7.setTransform(95.7,-39.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_1,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-902.3,-783.2,1994,1509.9);


// stage content:
(lib.ferrisWheelCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:9,win:17});

	// timeline functions:
	this.frame_0 = function() {
		/* #include "../../gameAssets/expressinstall.as"
		
		if (_root.MMplayerType == undefined) {
			// --- upgrade not needed
			gotoAndPlay(2);
		} else {
			stop();
		 
		 	var updater:MovieClip;
			var hold:MovieClip;
		
			loadUpdater = function() {
				System.security.allowDomain("fpdownload.macromedia.com");
				
				updater = _root.createEmptyMovieClip("expressInstallHolder", 10000000);
				updater.installStatus = installStatus;
				hold = updater.createEmptyMovieClip("hold", 1);
			
				updater.onEnterFrame = function() {
					if (typeof hold.startUpdate == 'function') {
						loadInit();
						delete this.onEnterFrame;
					}
				}
			
				var cacheBuster = Math.random();
				hold.loadMovie("http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+cacheBuster);
			}
			
			loadInit = function() {
				hold.redirectURL = _root.MMredirectURL;
				hold.MMplayerType = _root.MMplayerType;
				hold.MMdoctitle = _root.MMdoctitle;
				hold.startUpdate();
			}
			
			installStatus = function(statusValue) {
				if (statusValue == "Download.Complete") {
					// Installation is complete. In most cases the browser window that this SWF 
					// is hosted in will be closed by the installer or manually by the end user
				} else if (statusValue == "Download.Cancelled") {
					// The end user chose "NO" when prompted to install the new player
					// by default no User Interface is presented in this case. It is left up to 
					// the developer to provide an alternate experience in this case
					
					getURL("javascript:alert('This content requires a more recent version of the Macromedia Flash Player.')");
				} else if (statusValue == "Download.Failed") {
					// The end user failed to download the installer due to a network failure
					// by default no User Interface is presented in this case. It is left up to 
					// the developer to provide an alternate experience in this case
					
					getURL("javascript:alert('There was an error in downloading the Flash Player update. Please try again later, or visit macrmedia.com to download the latest version of the Flash plugin.')");
				}
			}
			
			// --- Start upgrade
			loadUpdater();
		}*/
	}
	this.frame_1 = function() {
		/* stop();
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "TranslationGame"); // For deployment
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/ferrisWheel.xml", "TranslationGame"); // For deployment
		}*/
	}
	this.frame_2 = function() {
		/* stop();
		playGame.onRelease = function () {
			gotoAndPlay("game");
		}
		
		dispatchEvent ({type:"ready", bubbles:true});*/
	}
	this.frame_9 = function() {
		/* stop();
		var gameid:Number;
		if (game != undefined) delete(game);
		var game:RunGame = new RunGame(this);
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
	this.frame_17 = function() {
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(7).call(this.frame_9).wait(8).call(this.frame_17).wait(6));

	// Intro
	this.playAgain = new lib.playagain();
	this.playAgain.setTransform(281.1,243,1,1,0,0,0,56.3,15);

	this.text = new cjs.Text("Great job! You beat\nFerris Wheel!", "40px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 443;
	this.text.setTransform(277.5,68.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.playAgain}]},17).wait(6));

	// English
	this.text_1 = new cjs.Text("", "14px 'ArialMT'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 336;
	this.text_1.setTransform(589.7,6.9);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(9).to({_off:false},0).to({_off:true},8).wait(6));

	// Spotlight
	this.answerPoint = new lib.spotlight();
	this.answerPoint.setTransform(212.6,35.8,0.83,1.018,0,0,0,28.6,17.5);
	this.answerPoint.alpha = 0.23;
	this.answerPoint._off = true;

	this.timeline.addTween(cjs.Tween.get(this.answerPoint).wait(9).to({_off:false},0).to({_off:true},8).wait(6));

	// Spotlight-2
	this.instance = new lib.lightbeam();
	this.instance.setTransform(247.1,216.9,1.853,2.667,0,9.5,19.8);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},8).wait(6));

	// Wheel
	this.playGame = new lib.PlayTheGame();
	this.playGame.setTransform(250.5,289.6,1,1,0,0,0,74.5,15);

	this.text_2 = new cjs.Text("Spell out the answer by hitting the space bar when the correct letter is in the spotlight. Use the arrow keys to control the speed of the ferris wheel.", "20px 'Arial'", "#FFFFFF");
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 450;
	this.text_2.setTransform(24,113.6);
	this.text_2.shadow = new cjs.Shadow("rgba(0,153,255,1)",0,0,5);

	this.instance_1 = new lib.stand("synched",0);
	this.instance_1.setTransform(131.9,215.9,0.336,0.336);

	this.wheel = new lib.wheel();
	this.wheel.setTransform(209.2,184.6,0.507,0.507);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.playGame}]},2).to({state:[{t:this.wheel},{t:this.instance_1}]},7).to({state:[]},8).wait(6));

	// BG
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(271.4,211.2,0.31,0.269);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;