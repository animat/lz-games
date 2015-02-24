(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 90,
	height: 246,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.trouser = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AFfyAIgUhKQjcA7iiARIAJBOQB5gOCYgjQA6gOA+gRgAimwoQAFAAAEAAQAcgBAdgCQAcgCAegDAgzx+QhAAGg3AAIAEBQAiqx4QifABhcgzIgLBSQAoAVAzALQBLASBkgCAmwxYQgeGEAkGeQABAGABAHQACBOAAgyQAFAyAGAzIABAVQAAAlAAAkQADJ/A6KBQAUAPAoAFQAAAAABAAQBlACBIgXQAFgCAFgCQAigMAbgSQAhoLgWjTQgXjTgCgvIAlqwIBZIDIAhScQA5AnByAAQAtAAA2gGQAdgQAXgZQAXgYABgCIgKnnIgOrmQAAgBAAgBQAAgCAAgDQAYqnhgmF");
	this.shape.setTransform(44.7,122.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDDDDD").s().p("AlZSRQg5qBgDp+IAGAAQAfNQBUHDQgogEgVgQgABqR9IghyZIhaoGIglKwQADAvAWDTQAXDTghILQgbASgiAMQAQhgAGhjQAWlYhDlUQgLg0gagxQgjhFAZhPQBMjuAsj3QAXiggphqQgggrgRhOQgWiVgNh0IA5gDQAHDxArCsIAIAhIAMBBIgCAGIgBACIAFABQAPASAZCMQAXB/APAkIA+CLQAPAhAAApQAAARgGAvQgGAugCAFIACArQANGTBIHpQAXCZAxAjQhyAAg5gngAFnDSQgYhAgdg6IgYguIAjg1QAig1AAgkQAAgogCgqQgDgqAFh/QAEh/AKi/QAJi/AAgvQAAhPgigrQg4g5gwhIQA6gOA+gQQBgGEgYKoIAAAEIAAACIAOLmQgMjghHjCgAmllbQglmeAfmDQAoAUAzAMQgPA/gsB1QgYA/AABgIACCLQACBcgEA0QgEA0ADBfg");
	this.shape_1.setTransform(44.3,126.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D0D0").s().p("AksBBQgzgMgogUIALhQQBcAwCeAAIAFBPIgRAAQhZAAhFgPgAgLgEQCjgRDbg6IAVBKQg+AOg6AOQiYAjh6AOg");
	this.shape_2.setTransform(40.7,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkqSWIgBAAQhTnDggtRIgGAAIAAhJIgBgVIgLhlQAAAygChOIgCgNIABAAQgChfAEg1QAEg0gChbIgCiMQAAhgAXg/QAsh1APg/QBLARBkgBIAJAAQANBzAXCWQAQBOAhArQApBqgXCfQgtD4hMDuQgZBPAkBEQAaAxAKA1QBDFUgWFYQgGBigQBhIgKAEQhEAVhgAAIgJAAgAEGSVQgwgkgXiZQhInogOmUIgCgqQACgGAGgsQAGgwAAgSQAAgogPgiIg+iLQgOgjgYiAQgYiLgQgSIgEgBIAAgCIACgGIgLhBIgJghQgqisgIjxIA6gFQB5gOCYgjQAwBIA5A5QAhArAABPQAAAugJDAQgJC/gFB/QgEB/ACAqQACAqAAAnQAAAkgiA2IgiA0IAYAuQAcA6AYBAQBIDDALDgIAKHnIgYAaQgXAZgdAQQg2AGgtAAIAAAAg");
	this.shape_3.setTransform(45.7,127.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#848484").s().p("Ag/gjQA4AAA9gHIAJBMIg5AGIg3ACIgJABg");
	this.shape_4.setTransform(34,11.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.5,247.4);


// stage content:
(lib.trouserCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.trouser();
	this.instance.setTransform(45.3,123.1,1,1,0,0,0,44.7,122.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45.1,122.9,90.5,246.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;