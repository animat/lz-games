(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 78,
	height: 19,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Belt = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAABLIAAASIh+ADIgBgMIgGhQIgBgMIB6gJIACARAAABLQB5gNCXgkQA6gNA/gYQAEgZgTgsQgCgHgEgIQgVAIgVAHQjBBAiTAQgAh/BUQhjABhKgRQg0gLglgQQgMgcAchFQBKAlCmAX");
	this.shape.setTransform(42.2,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBBBBB").s().p("AgnA3QgzgMgmgPQgLgcAbhFQBKAkCkAaIAGBNIgPAAQhZAAhDgPg");
	this.shape_1.setTransform(16.1,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#919191").s().p("AgmgZIBAgNIAEAWIgvAKIACAQIAxgBIAFAYIhKAGg");
	this.shape_2.setTransform(35.3,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("Ag8AtIgGhOIgBgOIB5gJIABAQIAKBMIACASIh+ADgAgngbIADA/IBKgFIgFgYIgxABIgCgQIAvgKIgEgWg");
	this.shape_3.setTransform(35.5,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7B7B7").s().p("AjJAIQCUgNDAhBIAqgPIAGAPQASAsgEAZQg/AYg6AOQiVAjh6ANg");
	this.shape_4.setTransform(61.3,8.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-1,80.8,21.3);


// stage content:
(lib.beltCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Belt();
	this.instance.setTransform(38.1,9.8,1.001,1.003,0,0,0,40.8,9.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(38.5,9,79.8,20.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;