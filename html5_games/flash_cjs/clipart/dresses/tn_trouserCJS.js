(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 100,
	height: 120,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.trouser = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AgqwwQB5gOCYgjQA6gOA+gRIgUhKQjcA7iiARQhAAGg3AAQifABhcgzIgLBSQAoAVAzALQBLASBkgCQAFAAAEAAQAcgBAdgCQAcgCAegDIgJhOAiqx4IAEBQAmwxYQgeGEAkGeQABAGABAHQACBOAAgyQAFAyAGAzIABAVQAAAlAAAkQADJ/A6KBQAUAPAoAFQAAAAABAAQBlACBIgXQAFgCAFgCQAigMAbgSQAhoLgWjTQgXjTgCgvIAlqwIBZIDIAhScQA5AnByAAQAtAAA2gGQAdgQAXgZQAXgYABgCIgKnnIgOrmQAAgBAAgBQAAgCAAgDQAYqnhgmF");
	this.shape.setTransform(44.7,122.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#848484").s().p("Ag+gjQA3AAA+gHIAJBMIg6AGIg3ACIgJABg");
	this.shape_1.setTransform(34,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AAAAAA").s().p("AkqSWIgBAAQhTnDggtRIgGAAIAAhJIgBgVIgLhlQAAAygChOIgCgNIABAAQgChfAEg1QAEg0gChbIgCiMQAAhgAXg/QAsh1APg/QBLARBkgBIAJAAQANBzAXCWQAQBOAhArQApBqgXCfQgtD4hMDuQgZBPAkBEQAaAxAKA1QBDFUgWFYQgGBigQBhIgKAEQhEAVhgAAIgJAAgAEGSVQgwgkgXiZQhInogOmUIgCgqQACgGAGgsQAGgwAAgSQAAgogPgiIg+iLQgOgjgYiAQgYiLgQgSIgEgBIAAgCIACgGIgLhBIgJghQgqisgIjxIA6gFQB5gOCYgjQAwBIA5A5QAhArAABPQAAAugJDAQgJC/gFB/QgEB/ACAqQACAqAAAnQAAAkgiA2IgiA0IAYAuQAcA6AYBAQBIDDALDgIAKHnIgYAaQgXAZgdAQQg2AGgtAAIAAAAg");
	this.shape_2.setTransform(45.7,127.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AlZS2Qg5qAgDp/IAGAAQAfNQBUHDQgogEgVgQgABqSiIghybIhaoEIglKwQADAvAWDTQAXDTghILQgbASgiAMQAQhgAGhjQAWlYhDlUQgLg0gagxQgjhFAZhPQBMjuAsj3QAXiggphqQgggrgRhOQgWiVgNh0IA5gDQAHDxArCsIAIAhIAMBBIgCAGIgBACIAFABQAPASAZCMQAXB/APAkIA+CLQAPAhAAApQAAAPgGAxQgGAugCAFIACArQANGTBIHpQAXCZAxAjQhyAAg5gngAFnD3QgYhAgdg6IgYguIAjg3QAigzAAgkQAAgogCgqQgDgqAFh/QAEh/AKi/QAJi/AAgvQAAhPgigrQg4g5gwhIQA6gOA+gQQg+AQg6AOQiYAjh6AOIgJhOQCjgRDbg6IAVBKQBgGEgYKoIAAAEIAAACIAOLmQgMjghHjCgAmlk2QglmeAfmDQAoAUAzAMQgzgMgogUIALhSQBcAyCeAAIAFBPQhkAChLgRQgPA/gsB1QgYA/AABgIACCLQACBcgEA0QgEA0ADBfg");
	this.shape_3.setTransform(44.3,122.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.5,247.4);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.trouser();
	this.instance.setTransform(50.5,59,0.462,0.462,0,0,0,44.8,122.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(29.5,2.1,41.8,113.9);


// stage content:
(lib.tn_trouserCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(50,59.9,1,1,0,0,0,49.6,59.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(79.1,62,43.4,115.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;