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



(lib.showingQuestion = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF99").ss(1,1,1).p("AiiC+ItPAAIAAl7IfjAAIAAF7IvBAA");
	this.shape.setTransform(7.7,-39.6,1.304,1.304);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Ah9C5QgcglgJgPItPAAIAAl6IfiAAIAAF6IvAAAQgCAPgrAuQgtA0gYAAQgPAAgtg9g");
	this.shape_1.setTransform(7.7,-32.2,1.304,1.304);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125,-65.3,265.5,65.4);


(lib.brick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,highlight:6,tagged:14});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_6 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(8).call(this.frame_14).wait(9));

	// Splat pic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AmAD+Qg3gygig1Qgkg2AAglQAAhcgEhOQgEhPAAhCQAAiQCGAhQBEAQBFAtIAsgKQAvgIAVAKIDZgCQAWgEBEgTQAsgMAtAAQB8AAAyBwQAZA5ABA6QAAAcgHAQQgJAWggAjQAQAWA4A/QAgAiAAAjQAAAagIAPQgFAKgQAQQgvAtggA9QgGALABAUQAAANgLAFQgcAJjjgKQiBgFgpAMQgzANhMAAQhiAAiAh3g");
	this.shape.setTransform(65.8,39.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:false},0).wait(9));

	// Graphic
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(1,1,1).p("AKKGQI0TAAIAAsfIUTAAg");
	this.shape_1.setTransform(65,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AqJGQIAAsfIUSAAIAAMfg");
	this.shape_2.setTransform(65,40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#660000").ss(1,1,1).p("ALunzIAAPnI3bAAIAAvng");
	this.shape_3.setTransform(65,40,0.867,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6633").s().p("ArtHzIAAvmIXbAAIAAPmg");
	this.shape_4.setTransform(65,40,0.867,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6633").s().p("AqJGQIAAsfIUSAAIAAMfg");
	this.shape_5.setTransform(65,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},6).to({state:[{t:this.shape_5},{t:this.shape_1}]},8).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,132,82);


(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(1,1,1).p("AAA/PMAAAA+f");
	this.shape.setTransform(0,200);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,402);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(1,1,1).p("AAsAsQgSATgaAAQgZAAgSgTQgTgTAAgZQAAgYATgTQASgTAZAAQAaAAASATQATATAAAYQAAAZgTATg");
	this.shape.setTransform(0.1,-9.2,0.791,0.791);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgrAsQgTgSAAgaQAAgYATgTQASgSAZgBQAZABATASQASATAAAYQAAAagSASQgTASgZAAQgZAAgSgSg");
	this.shape_1.setTransform(0.1,-9.2,0.791,0.791);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000066").ss(1,1,1).p("ACGiFQA4A4AABNQAABOg4A4Qg4A4hOAAQhNAAg4g4Qg4g4AAhOQAAhNA4g4QA4g4BNAAQBOAAA4A4g");
	this.shape_2.setTransform(0.1,0.1,0.791,0.791);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003399").s().p("AiFCGQg4g4ABhOQgBhNA4g4QA4g4BNABQBOgBA4A4QA3A4AABNQAABOg3A4Qg4A3hOAAQhNAAg4g3g");
	this.shape_3.setTransform(0.1,0.1,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32.1,32.1);


// stage content:
(lib.rollerballCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{game:2});

	// timeline functions:
	this.frame_1 = function() {
		/* stop();
		var loader:LoadGame = new LoadGame(this, "rollerball.xml", "MatchingGame"); // For local testing
		//var loader:LoadGame = new LoadGame(this, "http://www.linguazone.com/customizer/customVars.php?action=play&gameid="+_root.gameid); // For deployment*/
	}
	this.frame_2 = function() {
		/* stop();
		var game:RunGame = new RunGame(this);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;