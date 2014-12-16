(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 350,
	fps: 50,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAsAsQgSATgaAAQgZAAgSgTQgTgTAAgZQAAgYATgTQASgTAZAAQAaAAASATQATATAAAYQAAAZgTATg");
	this.shape.setTransform(0.1,-11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgrAsQgTgSAAgaQAAgYATgTQASgSAZgBQAZABATASQASATAAAYQAAAagSASQgTASgZAAQgZAAgSgSg");
	this.shape_1.setTransform(0.1,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAi9QBOAAA4A4QA4A4AABNQAABOg4A4Qg4A4hOAAQhNAAg4g4Qg4g4AAhOQAAhNA4g4QA4g4BNAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiFCGQg3g4gBhOQABhNA3g4QA4g3BNAAQBOAAA3A3QA4A4AABNQAABOg4A4Qg3A4hOAAQhNAAg4g4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.coin = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABBAAQAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAag");
	this.shape.setTransform(0,0,0.923,0.923);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgsAtQgUgSABgbQgBgaAUgTQASgSAaAAQAbAAASASQATATAAAaQAAAbgTASQgSAUgbgBQgaABgSgUg");
	this.shape_1.setTransform(0,0,0.923,0.923);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-7,14,14);


(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(1,1,1).p("AAA67MAAAA13");
	this.shape.setTransform(0,172.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,346.9);


// stage content:
(lib.skiBallCJS = function() {
	this.initialize();

	// wall
	this.wall_top = new lib.border();
	this.wall_top.setTransform(218.1,1,1,1.74,90,0,0,0,172.4);

	this.wall_bottom = new lib.border();
	this.wall_bottom.setTransform(262.9,348.5,1,1.74,90,0,0,0,172.4);

	this.wall_left = new lib.border();
	this.wall_left.setTransform(0,176,1,1,0,0,0,0,172.4);

	this.wall_right = new lib.border();
	this.wall_right.setTransform(500,172.5,1,1,0,0,0,0,172.4);

	// hero
	this.hero = new lib.hero();
	this.hero.setTransform(192.3,140.4);

	// coin
	this.coin = new lib.coin();
	this.coin.setTransform(327,109);

	this.addChild(this.coin,this.hero,this.wall_right,this.wall_left,this.wall_bottom,this.wall_top);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(167.2,174.6,646.6,349.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;