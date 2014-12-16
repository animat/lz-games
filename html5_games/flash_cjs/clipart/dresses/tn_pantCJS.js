(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 91,
	height: 247,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.pants = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AhCA2IAAhrICFAA");
	this.shape.setTransform(6.8,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AgqwwIgJhOQhAAGg3AAIAEBQAgqwwQgeADgcACQgdACgcABQgEAAgFAAAFfyAQg+ARg6AOQiYAjh5AOAmwxYIALhSQBcAzCfgBAmwxYQAoAVAzALQBLASBkgCAmwxYQgeGEAkGeQABAGABAHQACBOAAgyQAFAyAGAzIABAVQAAAlAAAkQADJ/A6KBQAUAPAoAFQAAAAABAAQBlACBIgXQAFgCAFgCQAigMAbgSQAhoLgWjTQgXjTgCgvIAlqwIBZIDIAhScQA5AnByAAQAtAAA2gGQAdgQAXgZQAXgYABgCIgKnnIgOrmQAAgBAAgBQAAgCAAgDQAYqnhgmFAgzx+QCigRDcg7IAUBK");
	this.shape_1.setTransform(46.2,124.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AAAAAA").s().p("AgBAAIABAAIACABg");
	this.shape_2.setTransform(43.1,69.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C4C4").s().p("AlZSRQg5qAgDp/IAGAAQAfNQBUHDQgogEgVgQgABqR9IghyZIhaoGIglKwQADAvAWDTQAXDTghILQgbASgiAMQAQhgAGhjQAWlYhDlUQgLg0gagxQgjhFAZhPQBMjuAsj3QAXiggphqQgggrgRhOQgWiVgNh0IA5gDQAHDxArCsIAIAhIAMBBIgCAGIgBACIAFABQAPASAZCMQAXB/APAkIA+CLQAPAhAAApQAAARgGAvQgGAugCAFIACArQANGTBIHpQAXCZAxAjQhyAAg5gngAFnDSQgYhAgdg6IgYguIAjg1QAig1AAgkQAAgogCgqQgDgqAFh/QAEh/AKi/QAJi/AAgvQAAhPgigrQg4g5gwhIQA6gOA+gQQBgGEgYKoIAAAEIAAACIAOLmQgMjghHjCgAmllbQglmeAfmDQAoAUAzAMQgPA/gsB1QgYA/AABgIACCLQACBcgEA0QgEA0ADBfg");
	this.shape_3.setTransform(45.8,128.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BBBBBB").s().p("AksBBQgzgMgogUIALhQQBcAwCfAAIAEBPIgRAAQhZAAhFgPgAgKgEQCigRDbg6IAVBKQg+AOg6AOQiYAjh5AOg");
	this.shape_4.setTransform(42.2,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1E1E1").s().p("AkqSWIgBAAQhTnDggtRIgGAAIAAhJIgBgVIgLhlQAAAygChOIgCgNIABAAQgChfAEg1QAEg0gChbIgCiMQAAhgAXg/QAsh1APg/QBLARBkgBIAJAAQANBzAXCWQAQBOAhArQApBqgXCfQgtD4hMDuQgZBPAkBEQAaAxAKA1QBDFUgWFYQgGBigQBhIgKAEQhEAVhgAAIgJAAgAEGSVQgwgkgXiZQhInogOmUIgCgqQACgGAGgsQAGgwAAgSQAAgogPgiIg+iLQgOgjgYiAQgYiLgQgSIgEgDIACgGIgLhBIgJghQgqisgIjxIA6gFQB5gOCYgjQAwBIA5A5QAhArAABPQAAAugJDAQgJC/gFB/QgEB/ACAqQACAqAAAnQAAAkgiA2IgiA0IAYAuQAcA6AYBAQBIDDALDgIAKHnIgYAaQgXAZgdAQQg2AGgtAAIAAAAg");
	this.shape_5.setTransform(47.2,129.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDDDDD").s().p("Ag+gjQA3AAA+gHIAJBMIg6AGIg3ACIgJABg");
	this.shape_6.setTransform(35.5,13.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,93,249.3);


// stage content:
(lib.tn_pantCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pants();
	this.instance.setTransform(45.7,123.9,1.001,1,0,0,0,45.7,123.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45,123,92,248.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;