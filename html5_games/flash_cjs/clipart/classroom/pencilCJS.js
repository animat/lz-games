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



(lib.pencil = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AhshAIgBgFQgFgkARgVQASgUAPgHQAugUAMAKIAXA1IBfDUQhzASgPAvQhTjKgHgdg");
	this.shape.setTransform(-28.7,-73.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00649B").s().p("AC1INImnwlQAagQAWgGIG1QKQgHAKgCAYQgDAZAAAYQgYgUgagOg");
	this.shape_1.setTransform(-0.9,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00649B").s().p("ADHH/Im2wMQAPgCAMAAICRFQICfF0ICUFbg");
	this.shape_2.setTransform(5,-7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00649B").s().p("ABhEJIikmKQhYjUhGirQAQgQAPgMIGkQcQgKAEgEAZIhzkUg");
	this.shape_3.setTransform(-6.9,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#898989").s().p("AgHAIIgug6QAFgXAZgRQARgGAWAMIAQBLIAWBmIg9hVg");
	this.shape_4.setTransform(33.5,77.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAC09D").s().p("AhVgIIgKgZQAGgyADAGQAYAJAlAjIAMAKIAAgQQAAgcACgaQACgZAEgIIAZAMIAbALIAIATIAHAQIAKAwIAYBuQgXgKgTAIQgbAPgIAYIhoiHg");
	this.shape_5.setTransform(25.1,58.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AE7MZQhLhmhXhwIgBgBIAAgBIhejeIi4m7Qhpj8hRjIQhSjJgMgpQgPhDBCgmQAwgZAbASQALARBUC/IDAHAIDJHUIB2EVIBUGGIgNAGIhShug");

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-90.3,82.1,180.6);


// stage content:
(lib.pencilCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pencil();
	this.instance.setTransform(100,100,1.122,1.122);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvmPnIAA/OIfNAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100.1,98.7,200,202.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;