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



(lib.belt = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAAAAA").s().p("AjKCSIgCAAIgMABQgdgHACgDQgIgRgDgnQgCgoAAgoIAAglIAAgWQAAgSAUgKIAGgBIAOAAQAHgIB/gjQB9gkC9ARQAIAdAIAuQAJAtAAApQABAwgSATQgcAVhXAWQhXAVhdAJQgjAEgeAAQgxAAghgKgAAdh0QhRAPg9AUQg+AVgHAEIgDABIAAADQgOBTARApQASAoADAAQChAABdgcQBdgcADgFIABAAIAAgBQAcgpgNg4QgNg6gGgJIgBgDIgCAAQgjgHglAAQgnAAgrAIg");
	this.shape.setTransform(40.1,60.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjMCcIgNABIgBAAQgdgGgFgJQgQgpAChjIAAgmIAAgWQAAgYAbgOIABAAIATgBQAOgKCAgjQB+giC8ASIADAAIABADIANA6QALAyACA2QACA3gXAZQgdAWhXAWQhYAWheAJQgkADgeAAQgzAAgjgJgAgkhcQhxAggbAMQgGAhAAAYQAJBVAQAIQCVABBbgaQBcgaAIgIQAPgYgDgiQgGhEgLgZQgigFgjAAQhHAAhKAVg");
	this.shape_1.setTransform(40.1,60.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AgMAAQABgOALgCQAMACABAOQgBAPgMACQgLgCgBgPg");
	this.shape_2.setTransform(30.5,-49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAAQADgbAXgCQAYACADAbQgDAcgYACQgXgCgDgcg");
	this.shape_3.setTransform(30.5,-49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AgMAAQABgOALgBQAMABABAOQgBAPgMACQgLgCgBgPg");
	this.shape_4.setTransform(10.1,-46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaAAQADgaAXgDQAYADADAaQgDAbgYADQgXgDgDgbg");
	this.shape_5.setTransform(10.1,-46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgMAAQABgOALgBQAMABABAOQgBAPgMABQgLgBgBgPg");
	this.shape_6.setTransform(-9,-43.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAAQADgbAXgCQAYACADAbQgDAcgYACQgXgCgDgcg");
	this.shape_7.setTransform(-9,-43.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33271B").s().p("AtvD7QAAg2AggvQBhiQF6g+QFPgrILAQQAJABBAgBQA/gCBGgRQBGgTAcgvIACgDIgCgCQBQg7AHgyQACAQAAAqQADBOgdBlQgdBjhfA3Qg/AbivAKQivAJjdADQjTADjOAJQjPAJiWAaQiXAZguA2QgDgRAAgQg");
	this.shape_8.setTransform(2.2,-8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#514333").s().p("AhNF/Qj4gzjRifQgCgKgGg3QgFg3gBhKQAAhGAKhEQAKhEAbgwQATgkBGgqQBGgqCXgjQjcBAhHBqQguBEASBUIgBAAIABACIADAOIACgEQAIATAnAqQAnAoBWAwQBfA4DNAsQDLArFbgIQgEAcgBAsQgDBWAoBNIgDAAQgMAEi2AEIgXAAQivAAjngwg");
	this.shape_9.setTransform(-35.2,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#514333").s().p("AKSCiQg6gthngaQhngaiYAkQh7AijFAbQjHAajLgfQjLgfiGiIQgBgSAEhIQAEhJAQg5QAHAoAnAtQAnAuBZApQCOA7B/gFQCAgICAggIB9gaQCVgjDIgMQDIgMCgBfQA4AwAXBWQACAWgRAkQgSAkg2AlQgPgXg6gug");
	this.shape_10.setTransform(7.4,-49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33271B").s().p("AofBEQhfgtglguQglgwgDgnIAGgKQAKAVA0A1QAzAyBkArQBkAsCdgGQBzgJCUgZQCzgfC6gNQC7gLCMAwQibguinANQioAQh9AcIh+AbQh+Afh+AIIgeAAQhxAAh7g1g");
	this.shape_11.setTransform(0.1,-63.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D6D6D6").s().p("AiBAaIgBgCQgBgDAIgOQAIgGDygcQADALABAIIgyAIIhlANIhZAMQgIADgFAAQgFAAgCgCg");
	this.shape_12.setTransform(31.3,62.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah8AUQgLgMADgIIABAAIACAAIBTgNQBLgLBmgJIABAOIACAOIg5AJIhnARIhTANQgFgBgKgNg");
	this.shape_13.setTransform(31.5,62.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Am2LPQj3g0jRigIgCgBIAAgCQgDgLgHhTQgIhUAHhoQAGhoAnhJQBOh6Ffg5QFfg4JOARQAFABA9gBQA9gBBFgQQBEgQAdgrQgJgQg2gvQg3gvhogdQhogdicAkQh9AjjHAbQjJAajNggQjNggiIiNIgBgBIAAgCIABg/QACg2AJg8QAJg9AVgYIAFgFIADAGQgBAGAuA2QAuA2BmAyQBmAyCpgGQBzgICUgZQC5ggC9gNQC9gNCMA1QCNA1AnCmIAAABQACAEACBAQADBQgeBoQgeBohjA3Qg/AcitAJQitAJjlAEQjYADjTAJQjSAJiVAaQiUAbgjA3QABATBQBKQBQBKDcBBQDcBBGlgJIAGAAIgBAFQgHApADBJQAEBJAlA6IAIALIgMgDIgOgEQgSAGi2ACIgUABQiyAAjqgyg");
	this.shape_14.setTransform(0,-0.1);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.1,-77,182.4,154);


// stage content:
(lib.beltCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.belt();
	this.instance.setTransform(100,100,1.051,1.073);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;