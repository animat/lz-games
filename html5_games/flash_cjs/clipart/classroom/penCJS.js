(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 200,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.pen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#560015").s().p("AhDB3IAQiCQAIhEAHgtQAPAUAYAMQAZANAogZIgEAJIghBLIhDCSQgQgCgPgFg");
	this.shape.setTransform(-16.3,59.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2E2E2").s().p("AgHgjQAKADANADIgfBBIAIhHg");
	this.shape_1.setTransform(-22.4,77);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A0017").s().p("AkKJ2IACgJQAGgZAihuIBWkIIBqk+QAcAlAcAEQAdAEAegFIiMGiQhDDHggBbQgVAIgTAAQgmAAgggegAgIimIBqlAIA1ieQAIgFAZgHQAZgHAZAKQAYALAIAkIg1CVQgtCAg/C7QgWAEgTAAQgzAAgVgcg");
	this.shape_2.setTransform(6.9,-17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#560015").s().p("AAAAhQgcgEgkgdIANglQAbAfBZAFIgOAnQgXgBgcgEg");
	this.shape_3.setTransform(10.6,-28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AknL+IARizQAKhhAJgwQAJgpA9i8QA8i8BPjoICKmfIBFjPIACgDIACgCQAEgDAfgKQAggKAhAMQAhAPAKAtIAAACIgBADIg9C4IiHGVIiQGvQhEDHgZBDIgoBVQgjBJgoBQQgoBQgSAdIAIhXg");
	this.shape_4.setTransform(4.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2E2E2").s().p("AAAghQALAFAMAKIgtA0IAWhDg");
	this.shape_5.setTransform(-68.1,58.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-85.3,105.8,170.7);


// stage content:
(lib.penCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pen();
	this.instance.setTransform(119.7,100,1.117,1.117);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvmPnIAA/OIfNAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100.1,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;