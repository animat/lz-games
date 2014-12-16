(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 86,
	height: 51,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AElBoQApBAgFAvQA4g/AEgrQAEgrgGhCQgHhFg2hBQgSgjgngSQgOgHgRgEQhEgRhHABQhgAAhlAcQgQAFgRAFQhGASgfBeQgtA4ANBJQADgEADgDQBJg6COgJQAHgBAHAAQBkgEBQAYQACAAACABIANAEQAyASAkAKQAlAcACAeIAAADQgOAfhigFQhhgGgMgCQjAgdifAoQhuAgAAgVQgBgGAIgKIBHgmIAvgZABvgbIAAAA");
	this.shape.setTransform(39.7,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s().p("AlgCvQAAgGAHgKIBHgmQCtgsDSAYQCnAmAPhBQAmAcACAeIgBADQgOAfhhgFQhigFgLgDQjBgdieAoQhCAUgbAAQgSAAAAgJgAEjBKQgjgKgygSIgOgDIgDgCQhRgZhlADIgNABQiNAMhKA5QAvg4ALhKQAghSBHgfQBkgdBgAAQBIAABDAQQARAFAOAGQAqA/AFBDIgWCeQgCgegmgcgAhHhfQgRATgIAbQgCAGgJAtIAAAHIAEAAQAKgCAsgTQAagIAiAFQAkAEAfAIQAgAFAhABIADgBIADAAIAAAAIgDgWQgCgOAGgdQAFgeAJgOIg+gGIhQgBQhDADgZAOIgBACIAAAAIAAAAg");
	this.shape_1.setTransform(36,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D0D0").s().p("AD9BaIABgCIAWifQgFhDgqg+QAoASARAiQA3BCAGBEQAHBDgEArQgFArg3A+QAFgugqhBgAkwAzIAHgHIgHAHQgMhIAsg4QAgheBGgTIAhgJQhGAfghBSQgLBMguA2QBJg3COgMIAOgBQBjgDBRAZIADACIAOABQAyASAkAKQgQBBingmQjRgYitAsgAi4giIAAgHQAJguADgHQAIgaAQgUIABAAIABgCQAZgOBFgDIBNABIA+AGQgIAOgGAeQgFAeACANIACAYIgCAAIgEABQghgBgfgHQgegHgkgFQgjgFgaAIQgtAVgKACg");
	this.shape_2.setTransform(43.7,24.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0.9,80.2,45.1);


// stage content:
(lib.tn_capCJS = function() {
	this.initialize();

	// Layer 1
	this.top = new lib.head();
	this.top.setTransform(19.4,11.7,1,1,0,0,0,16,9.5);

	this.addChild(this.top);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(46.5,29,79.2,44.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;