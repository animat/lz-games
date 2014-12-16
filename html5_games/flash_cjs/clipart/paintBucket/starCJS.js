(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 170,
	height: 170,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"images/flash0.png", id:"flash0"}
	]
};



// symbols:



(lib.flash0 = function() {
	this.initialize(img.flash0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,203);


(lib.star = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEEE").s().p("AABH6IppHBIDqrXIp6nJIMMAAIDrraIDuLaIMMAAIp2HIIDwLcg");
	this.shape.setTransform(101.8,96);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203.5,192);


(lib.shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AABH6IppHBIDqrXIp6nJIMMAAIDrraIDuLaIMMAAIp2HIIDwLcg");
	this.shape.setTransform(101.8,96);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203.5,192);


// stage content:
(lib.starCJS = function() {
	this.initialize();

	// Layer 1
	this.colorMe = new lib.star();
	this.colorMe.setTransform(80.5,88.2,0.707,0.707,0,0,0,101.8,96);

	this.instance = new lib.shadow();
	this.instance.setTransform(86.1,82.3,0.707,0.707,0,0,0,101.7,96);
	this.instance.alpha = 0.578;

	this.addChild(this.instance,this.colorMe);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(93.6,99.5,149.5,141.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;