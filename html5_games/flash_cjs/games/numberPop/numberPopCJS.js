(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#CC99CC",
	manifest: [
		{src:"images/Untitled1.png", id:"Untitled1"},
		{src:"sounds/cartoon015.mp3", id:"cartoon015"},
		{src:"sounds/soundPop.mp3", id:"soundPop"}
	]
};



// symbols:



(lib.Untitled1 = function() {
	this.initialize(img.Untitled1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,428);


(lib.PrimaLinguaLogo = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("LinguaZone.com", "70px 'Arial'", "#000066");
	this.text.lineHeight = 72;
	this.text.lineWidth = 380;
	this.text.setTransform(-24.8,1.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,1.9,384,162.8);


(lib.congratulationswithconfetti = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(218.3,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(218.2,30.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,436.4,60.9);


(lib.playagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Play again?", "bold 18px 'Comic Sans MS'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 103;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AozCRIAAkhIRnAAIAAEhg");
	this.shape.setTransform(53.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,32);


(lib.Confetti = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("A1rNMQAEgDAGgBQAvAQgeAmIgEADQhEgGAtgvgEApCANNQgEABgEgEQgKgXAXgLIAKgDQAyApg9AAIgEgBgEglGALPIAAgHQAFgIAHgEQAGgFAJgDQA4AAgiAqIgHAIQgKAEgHAAQgVAAgEgbgAUuLfQgEAAgEgDQgKgYAXgKIAKgEQAyAqg9AAIgEgBgAZQD2QgEAAgEgEQgKgYAXgLIAKgCQAyApg9AAIgEAAgEgpcABWQgEgBgDgDQgKgYAXgKIAJgEQAyAqg8AAIgFAAgAZ1BSQgagmAsgLIAAgBQA0Acg2AVQgEACgEAAIgIgBgAzaj7QAAgIACgGQACgIAEgIIAbgLIAAgCQArALgOAnIgEAIQgQAMgMAAQgTAAgNgbgAO4ktQgCgCgCgDQgCgQAPgGIAKgDQAfAkgWAAQgJAAgTgGgAWEnDQgCgCgCgDQgCgQAPgGIAKgDQAfAkgWAAQgKAAgSgGgAmNpIQAEgDAGgBQAvAQgeAmIgEADQhEgGAtgvgA7jp6QgCgGAIgDQAVAFAVAHQACABABAEQgRAPgMAAQgOAAgIgXgAAst4QAAgHAHgBQAZABAPAQQABACgBADQgUANgMAAQgRAAACgbg");
	this.shape.setTransform(266.4,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("EAg9AMOQgCgBgBgDQgCgRAPgFIAJgDQAgAkgWAAQgKAAgTgHgAr8KpQgEAAgEgDQgKgYAXgLIAKgDQAyApg9AAIgEAAgAZGKQQgEAAgEgDQgEgYAYgDIAAgBQAnAfgsAAIgHAAgAEcH0QAAgFAKADQAOAIAHAPQABADAAAEIgKABQgXAAABgdgEAgBAG6QgCgBgBgDQgCgRAPgFIAJgDQAfAkgWAAQgJAAgTgHgEggdAG2QgagmArgLIABgBQA0Abg2AWQgEACgEAAIgIgBgEAjrAEtQgDAAgEgDQgKgYAXgLIAJgDQAzApg9AAIgFAAgEgn4AEfQgEgBgDgDQgFgYAZgDIAAgBQAnAgguAAIgGAAgEAlSABaQAEgOAMgHQAIgEAIgCQAnAMANAmIABAHQgDAPgPAHIgPAGQgtgOgHgsgEgmPAAaQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIgJAQIAGgPgEAjKgACQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIgIAOIAFgNgEAnHgADQgUgfAigRQAFgDAGgBQAaADAGAYIABAIQgKAbgTAAQgNAAgQgKgAjghDQgEAAgEgDQgKgYAXgLIAKgDQAyApg9AAIgEAAgAq2jtQgEAAgEgDQgKgYAXgLIAKgDQAyApg9AAIgEAAgAAnl6QADgEAHgBQAuARgeAlIgEAEQhCgGAsgvgA7YlzQgEgBgDgDQgFgYAZgDIAAgBQAnAgguAAIgGAAgALynZQgVgfAigRQAFgDAHgBQAZADAGAYIABAIQgKAdgTAAQgMAAgQgMgEgjjgHnQgKgKAVACQAcAFAdAHIADADQgTAIgQAAQgVAAgPgPgA2ipOQgLgdAYgPQAFgDAFgBQAoAUgbAqIgDADQgGACgFAAQgRAAgFgTgAheqNQgVgfAigRQAFgDAHgBQAZADAGAYIABAIQgKAdgTAAQgMAAgQgMgAxQrrQgEAAgEgDQgKgYAXgKQAFgDAFgBQAyApg9AAIgEAAg");
	this.shape_1.setTransform(258.6,112.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AcENsQgbgmAsgLIAAgBQA1Acg3AWQgDACgEAAIgIgCgAMfMQQgVgfAigSQAFgDAHgBQAZAEAGAYIABAHQgKAdgTAAQgMAAgQgLgA8eKgIADgBIgIAVIAFgUgEAhBAJcQAJgbAfAEQAlALgWAcIgFAEQgKADgIAAQgXAAgJgXgAh6HwQgagmArgLIABgBQA0Acg3AWQgDACgEAAIgIgCgASGHGQgUgfAigSQAFgDAGgBQAaAEAGAYIABAHQgKAdgTAAQgNAAgQgLgAFVHHQgEAAgDgEQgFgYAYgCIABgBQAmAfgsAAIgHAAgAmoCVQADgEAHgBQAuAQgeAmIgEADQhEgGAugugAxEBgQgagmArgLIABgBQA0Acg3AWQgDACgEAAIgIgCgAmDAZQgEAAgDgEQgFgWAYgCIABgBQAnAeguAAIgGgBgEgmMgEXQADgEAHgBQAvARgfAlIgEADQhEgGAugugAWQlHQgCgBgBgEQgCgQAPgGIAJgDQAgAkgWAAQgKAAgTgGgAdomIQgbgmAsgLIAAgBQA1Acg3AWQgDACgEAAIgIgCgEAlwgGjQgagZAXgeQAFgFAIACQAYADAKAUIADAHQgEAggYAAQgIAAgLgEgEAhagJMQAAgDAFgBQARAJAIATIADAHQgMAFgIAAQgWAAAJgkgACkqdQADgEAHgBQAuARgeAlIgEADQhEgGAugugA/wqqIgCgPQgCgNAJgJQAJgHAKgEQAGgDAIgBQAfAFAIAeIABAHQgDANgIAJIgOANQgJADgHAAQgaAAgLgcgAanrcQAoAOgWAlQgBACgEAAQhHgPA6gmgAHbtPQgDgBgBgEQgCgQAPgGIAKgDQAfAkgWAAQgJAAgTgGg");
	this.shape_2.setTransform(270.1,109.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,532.8,197.1);


(lib.SpikeHighlighter = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACLCcIkzkVQgHgGgBgKQAAgJAGgHQAGgHAJAAQAKgBAHAGIEzEVQAHAGABAKQAAAJgGAHQgGAHgKAAIgBAAQgIAAgHgFg");
	this.shape.setTransform(17.7,16.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.5,32.4);


(lib.congratulationstext = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.congratulationswithconfetti();
	this.instance.setTransform(236.2,10.4,1,1,0,0,0,218.2,30.4);

	// Layer 3
	this.instance_1 = new lib.Confetti("single",0);
	this.instance_1.setTransform(-16.5,-74.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-74.3,532.8,197.1);


(lib.spike = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.SpikeHighlighter("synched",0);
	this.instance.setTransform(21.3,30.2,1,1,0,0,0,17.7,16.1);
	this.instance.alpha = 0.449;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4.5,1,1).p("AgJDnID7jdInjm7IAAGSIAAHRg");
	this.shape.setTransform(24.3,43.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhzjoIAOAAIAWA/IACAJQACASAHASIAdBJIACAFIAEAIIAFAIQAJASALAOQAFAHAIAHQAHAFAKgBIAHAAQAPgBAJAEIAJADQAOACAPABQAKAAAHgIIAIAJIjnDLg");
	this.shape_1.setTransform(11.6,63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#990000","#FF0000"],[0,1],-24.2,10.1,24.3,10.1).s().p("AgRFEQgGAHgKAAQgQAAgOgDIgJgDQgIgDgPAAIgHAAQgKABgIgFQgJgHgGgHQgKgPgJgSIgFgJIgEgHIgCgGIgdhJQgHgSgCgSIgDgJIgVg/IgOAAIAAmQIHjG8Ij7Dcg");
	this.shape_2.setTransform(24.3,33.3);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,53,91.4);


(lib.spikes = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.spike("synched",0);
	this.instance.setTransform(24.2,383.7,1,1,0,0,180,24.3,43.4);

	this.instance_1 = new lib.spike("synched",0);
	this.instance_1.setTransform(24.2,298.2,1,1,0,0,180,24.3,43.4);

	this.instance_2 = new lib.spike("synched",0);
	this.instance_2.setTransform(24.2,212.6,1,1,0,0,180,24.3,43.4);

	this.instance_3 = new lib.spike("synched",0);
	this.instance_3.setTransform(24.2,129,1,1,0,0,180,24.3,43.4);

	this.instance_4 = new lib.spike("synched",0);
	this.instance_4.setTransform(24.2,43.4,1,1,0,0,180,24.3,43.4);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,53,431.7);


// stage content:
(lib.numberPopCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		
		if (_global.playingGame) {
			dispatchEvent ({type:"win", bubbles:true});
			_global.playingGame = false;
		}
		
		playAgain._visible = false;
		
		function getScore() {
			return score;
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Text
	this.playAgain = new lib.playagain();
	this.playAgain.setTransform(289.5,334,1,1,0,0,0,53.5,16);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false, new lib.playagain(), 3);

	this.text = new cjs.Text("total points", "bold 18px 'Comic Sans MS'", "#432143");
	this.text.lineHeight = 20;
	this.text.lineWidth = 121;
	this.text.setTransform(298,133.8);

	this.text_1 = new cjs.Text("", "18px 'ComicSansMS-Bold'", "#432143");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 84;
	this.text_1.setTransform(287,135);

	this.text_2 = new cjs.Text("You completed Number Pop! Great job!\n\nWhy not challenge yourself and have some more fun? Give the game another try using more languages, or a harder difficulty.", "bold 18px 'Comic Sans MS'");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 476;
	this.text_2.setTransform(44.4,175.7);

	this.instance = new lib.congratulationstext("synched",0);
	this.instance.setTransform(287.9,110.4,1,1,0,0,0,263.4,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.playAgain}]}).wait(1));

	// Background
	this.instance_1 = new lib.PrimaLinguaLogo("synched",0);
	this.instance_1.setTransform(302,181.2,1.334,1.259,0,-33,-27.3,180.7,35.6);
	this.instance_1.alpha = 0.07;

	this.instance_2 = new lib.spikes("synched",0);
	this.instance_2.setTransform(159.5,19.1,0.582,0.654,0,90,-90,24.3,213.6);
	this.instance_2.alpha = 0.078;

	this.instance_3 = new lib.spikes("synched",0);
	this.instance_3.setTransform(437.5,19.1,0.582,0.654,0,90,-90,24.3,213.7);
	this.instance_3.alpha = 0.078;

	this.instance_4 = new lib.spikes("synched",0);
	this.instance_4.setTransform(158.5,384.8,0.582,0.654,90,0,0,24.3,213.6);
	this.instance_4.alpha = 0.078;

	this.instance_5 = new lib.spikes("synched",0);
	this.instance_5.setTransform(436.5,384.8,0.582,0.654,90,0,0,24.3,213.7);
	this.instance_5.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Workspace
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC99CC").s().p("Egu2AfQMAAAg+fMBdtAAAMAAAA+fg");
	this.shape.setTransform(300,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300.1,200,602.1,443);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;