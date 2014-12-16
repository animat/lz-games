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



(lib.knife2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3A3A3").s().p("AAAAxQAHgQgHgWQgJgVgNgKQgQgJgLABQgCgNANgOQANgIAOAFQANAFABACIACABIADgBQAeAvAMArQgKAUgNACQgWgDgFgJg");
	this.shape.setTransform(34.6,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F4F4F").s().p("AACBAQgJgIgBgCIgBgBIAAgCQgIg4gSgHQgQgJgDADIgFAAIgBgFQgBgCACgOQACgOAMgKQAjgNAPAPIAFgDIADAEQAiAzANAvIABACIgBABQgNAbgTACIgEAAQgNAAgJgGg");
	this.shape_1.setTransform(34.7,-13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996A1D").s().p("AkWAqQAXAEADAEIACABIADgBIB3gyIDfhiIB8g1QA7AzABAqQAAALgFALQgfA2heAYQhdAYg0gDQhAABhAAdQhBAegJAGIgCABIAAACQgGANgGAHQgfg9gjgxg");
	this.shape_2.setTransform(60.4,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjVCgQgOgfgVgjIgmg6IgFgGIAIgBQAbgBAMAJIB7g0IDghhIB5g1IACgBIADACQBMBFgQA7QgNAyhCAaQhDAbhAAJQhAAIgFAAQg6gBg+AVQg/AWgOAIQgHATgLAJIgFAFg");
	this.shape_3.setTransform(59.9,-23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DBDBDB").s().p("ApOEKIDMhaIGEisIF6imICrhLIAJgFIAAgKIgBgDQAAgHAEgIIAcA6IyLHjIgSgFg");
	this.shape_4.setTransform(-25.4,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7F7F7").s().p("ArcGBQh6gCgWgTIC+hUIGRixIGLiuIC0hQIAAgDIAAgEQgCgNAMgPQAOgIAOAFQAPAGABABIACABIADgBIB4g0IDghhIB9g1QA7AzAAAqQAAALgEAKQggA5hdAYQheAYg0gDQhBAAhBAeQhBAdgJAHIgBABIgBABQgLAdgQADQgagEgEgJIgDgDIgEACQmsEUkBBhQj7Beh6AAIgGAAg");
	this.shape_5.setTransform(0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F4F4F").s().p("As7GFQg6gQAAgGIgGgFIC3hRIGTizIGTixIC7hSIAAgBQgDgRASgTQAjgNARAPIB8g1IDhhiIB5g0IADgBIACACQBTBGgXA6QgTAqg4AYQg5AYg7AKQg7AJgegCQg8ABg+AbQg9AbgOAJQgNAhgVAEQgagBgKgNQllD6j1BhQj1Bgh+APQhKALgzAAQgrAAgagIg");

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.2,-39.7,178.6,79.5);


// stage content:
(lib.knifeCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.knife2();
	this.instance.setTransform(100,100,1.085,1.085);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/NIfOAAIAAfNg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100.1,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;