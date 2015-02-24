(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 200,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.chicken = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#684418").s().p("AhoA9IgHgEIgPgJQgHgFgFgFQgEgFAEgCQAFgDALAGQAMAGAWAGQAWAGAlgEQAlgEAdgRQAdgRAZggQAXgfAKgKQALgJADABQABAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAIgIAJQgIAIgDARQgBAHgIAQQgIAOgRATQgRATgaAOQgbAPgjADIgQABQggAAgngLg");
	this.shape.setTransform(-18,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B6C34").s().p("AB3BeQAEgSACgaQADgbgCgbQgDgegMgYQgMgYgagMQgbgKgdADQgcAEgdALQgcAMgXAOQgYAOgOAKIgOALIAOgMQAOgLAXgPQAXgPAdgOQAdgNAdgEQAfgFAdAKQAjAOAPAbQAPAaAAAgQABAegJAfQgIAfgLAZIADgSg");
	this.shape_1.setTransform(-9.3,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6C34").s().p("AA+ATQgGgJgPgKQgQgJgZgFQgbgFgpAHIAQgHQAPgGAXgCQAVgCAXAMQAWAMARAhIgHgJg");
	this.shape_2.setTransform(41.7,-9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6C34").s().p("AiDAfQALgMAVgQQAVgOAegNQAcgOAhgEQAugDAbAIQAaAJANAMQANANAHAHIgLgGQgJgIgTgJQgRgIgagEQgagEgfAHQgoALgiARQgiAPgVAOIgVAPIANgNg");
	this.shape_3.setTransform(36.9,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiwB8IAPAEQAOADAWADQAXADAZgBQAZgCAWgJQAXgLARgTQATgSANgXQAJgOAHgPIAFgNQAEgIAFgFQAFgHAFAAQABAGgEACIgGAHQgDAJAGAJQAGAJAJAIIAOAOIATAWQAFAHAFADQAEACAEgKQAGgMAEgOQANgpABgpQAAgbgJgXQgNgigigPQgdgMgeADQgeADgcAMQgeANgbARQgbARgWARQgFAEgGAIQgGAIgHAGQgHAGgIAAIgEgBQAAgHAHgEIANgHQAGgDADgEQACgEAFgEQALgJAOgIIAZgRQAagSAdgNQAagOAggFQAkgHAjAOQAmARAPAlQAKAbgBAdQgBAbgGAcQgFAWgIAVIgGAUQgFAKgKABQgJAAgFgGQgFgGgDgHQgEgIgEgFQgSgVgVgUQgEALgLATQgLAUgTAUQgUAUgbAOQgcAMgfAAQgqAAgxgWg");
	this.shape_4.setTransform(-11.6,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhyBtQAJgDAQAAQAPAAAbABQAbACAYgEQAagEASgEIASgGQBOgiAHgxQADgSgHgSQgHgSgLgPQgKgOgIgHIgJgJQgogVgmAAQgkAAgiAMQgiANgZARQgaASgPANIgPANIAPgPQAPgPAagSQAagUAigOQAigOAlAAQAoAAAqAWIAKAKQAJAKALAPQAMAPAHAUQAHATgDAUQgIA3hUAkIgUAGQgSAFgaAEQgZAEgbgCQgpgBgVADIgWAEQAHgJAKgFg");
	this.shape_5.setTransform(38.6,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#684418").s().p("Ah+B/QgMgDgGgJQgHgKACgPQADgTALgHQALgIAPgCIAdgBQBFgEApgMQAqgLAQgQQAPgNAMgPQAMgPABgPQgBgZgJgTQgJgUgQgPIAFACIANANQAMAMANAVQAMAVACAZQACAagUAYQgTAag0AXQgXAKgcAEQgaAFgYgCQgUAAgIAHQgHAGgGALQgGAJgPAIQgJAEgIAAIgHgBg");
	this.shape_6.setTransform(39.3,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7F561F").s().p("AidgaIAPgPQAOgOAZgSQAZgTAhgOQAhgOAlgBQAmAAAqAWIANANQAMAMANAVQAMAVACAZQACAYgTAaQgUAag0AXIgTAFQgRAFgbAEQgYAEgcgBIgpgCQgPAAgJAEQgIADgHAIg");
	this.shape_7.setTransform(38.6,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTBeQgIgDgIgHQgIgGgFgJIgFgIIgCAAQgUAAgIgNQgGgOAEgTQAFgRAIgPIAKgUIACgCIAIgCIARgCQAKAAAJAEQAPgZAQgPQASgPASgBQANAAAIAKQAIALAAAOIAAAFQgCANgHAKQgHALgIAHQALAAAKAHQALAHAAARIAAAHQgEAZgLAOQgLAOgMAEQgQAFgOgIIgEAJQgHAJgKAAIgCAAIgFAAQgFAAgGgCgAgqA8IACAEQAKAPAPAGQAFABAGAAIADAAQAIgBADgIQAEgHAAgJQAEABACADIAGAGQAFACAFAAIAKgCQANgEAIgNQAJgNACgSQAAgGgBgHQgBgHgFgDQgFgEgHAAQgHgBgGACQgKABACgFQACgFAGgGIAJgJIAKgOQAEgHABgIQACgMgIgLQgFgGgIAAQgJABgMAHQgMAIgLALIgSAVQAFAIADAOQACAPgDAPIgDgLIgGgUQgEgLgCgEQgHgGgLABQgLACgGAEQgHALgHASQgIAQgBAQQAAAHADAFQAFAIAOAAIAEAAIAEgDIABADIAQgBIAJgBQgJAIgMADg");
	this.shape_8.setTransform(57.6,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A07D5C").s().p("AgRBAQgIgEgHgGQgHgGgFgHIgFgLIgGAAQgVAAgEgOQgEgOAGgQQAFgRAHgOIAIgPQAEgFAGABQAGABAEADQAGAEADAGIAHAMQAJAUgBAUIABAPQAAAIAEAGQAEAFAHgBQAKgCAEgKIABgKQABgGAFABIACABQABALAGAGQAGAHANgCQAKgDAGgIIAKgQIADAAQAFABgFAJQgEAJgHAKIgJALQgLAIgMAAQgMAAgKgJQACADgBAFQgCAFgCACQgGAHgHAAIgFAAIgLgBg");
	this.shape_9.setTransform(57.5,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1AE8B").s().p("AASAaQAHgMACgNQACgMgMgEQgNgCgLAFQgOAFgJAHIgJAFIAIgHIASgRQAKgKAJgGQALgFAIADQAKAGAEANQADAMgGAOQgGAQgTAPIAHgNg");
	this.shape_10.setTransform(60.9,-3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1AE8B").s().p("AAVARQgCgGgFgIQgEgGgIgDIgTgEIgHgBIAGgFQAHgEAJgDQAIgCAJAEQAJAGABALQABAJgCAKIgCAKIgBgIg");
	this.shape_11.setTransform(62.7,2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B7936C").s().p("AgRBZQgIgDgIgGQgHgGgEgIIgGgLIgGABQgVgBgDgNQgEgOAGgSQAFgQAHgOIAIgOIAHgEQAHgCAKgBQAJgBAHAFIASgUQAKgMANgJQAMgJAMgDQAMgCAIAKQAKANgCANQgDAOgIALQgIALgIAGIgIAHIAHgCQAHgBAJABQAJACAGAHQAGAGgCASQgDAXgLAOQgMAOgPACQgOADgMgLQACACgCAFQgBAFgCADQgGAHgHAAIgDAAQgHAAgGgCg");
	this.shape_12.setTransform(57.6,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#684418").s().p("AA5C/QhpgHhNgXQhMgXg0ghQg1gggfgjQghgjgQgdQgRgegFgTIgGgVQAAgNg3gcQgQgIgIgNQgJgOAAgQIABgDQADALAKALQAJAJAIACQAJABAIgBIAOAAQAcAEAOASQAOARAJAYQAIAQAJAQQAfAvAuAiQA7AwBTAaQBRAbBoAGQBxAGBRgQQBRgQA1gbQA1gcAfgdQAggcAMgVIgEAgIgDANQABACgJAUQgHAUgYAdQgZAdgvAbQgxAchPAPQg6ALhOAAQgeAAghgBg");
	this.shape_13.setTransform(-15.5,14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9B6C34").s().p("AEVD6IAEgOIARhkIABgcQAAgYgEglQgEglgNgqQgNgsgbgrQgagrgsgiQgsgjhCgUQhAgShBAAQhBABg/AOQg+APg5AXQA9gcBCgSQBDgSBGgCQBEgCBHAUQBAATArAhQArAiAZAqQAaAqANAqQAMArAEAiQAFAlgBAXIgBAaIgQBkQAAABgIAVQgIAVgYAeQALgVAEgNg");
	this.shape_14.setTransform(3.8,-5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AGBkNQgsgjhCgUQhMgVhKAEQhKADhEAVQhGAUg/AfQg+Aeg0AiQg0AigmAeQgmAdgUATQgVATAAAAQgTAHgVACQgGABgHAAQgHgBgHACQgJADgCAFQgBAFAAAIQABASAJANQAJALAQAIQAaANAMAIQALAIADAEQACADAAAAQgBABAGATQAFAUAQAfQAQAfAgAjQAgAkA1AhQA0AhBOAYQBOAYBrAHQB7AGBRgQQBRgQAwgcQAxgdAYgdQAXgeAIgUQAHgVAAgBIAQhkQABAAAAgXQABgWgEgjQgDglgNgsQgMgrgagsQgagrgsgjg");
	this.shape_15.setTransform(-15.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7F561F").s().p("AAzFVQhrgHhOgYQhOgYg0ghQg1ghgggkQgggjgQgfQgQgfgFgUIgFgUIgCgDQgDgEgLgIQgMgIgagNQgQgIgJgLQgJgNgBgSQAAgIABgFQACgFAJgDQAHgCAHABIANgBQAVgCATgHIAVgTQAUgTAmgdQAmgeA0giQA0giA+geQA/gfBGgUQBEgVBKgDQBKgEBMAVQBCAUAsAjQAsAjAaArQAaAsAMArQANAsADAlQAEAjgBAWIgBAXIgQBkQAAABgHAVQgIAUgXAeQgYAdgxAdQgwAchRAQQg6AMhQAAQgfAAgjgCg");
	this.shape_16.setTransform(-15.1,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("ABxgVQAIAXgJAZQgKAagiAQQghAQg+gCQgzgDgUgNQgTgOABgUQABgTAMgRQAMgTALgMQAMgNABAAQAAgBANgJQANgKAWgIQAUgJAbACQAcABAeAVQATAPAIAYg");
	this.shape_17.setTransform(38,-4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7F561F").s().p("AgbBTQgzgDgUgNQgTgOABgUQABgTAMgRQAMgTALgMIANgNIANgKQANgKAWgIQAUgJAbACQAcABAeAVQATAPAIAYQAIAXgJAZQgKAagiAQQgeAOg0AAIgNAAg");
	this.shape_18.setTransform(38,-4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTBeQgIgDgIgHQgIgGgFgJIgFgIIgCAAQgUAAgIgNQgGgOAEgTQAFgRAIgPIAKgUIACgCIAIgCIARgCQAKAAAJAEQAPgZAQgPQASgPASgBQANAAAIAKQAIALAAAOIAAAFQgCANgHAKQgHALgIAHQALAAAKAHQALAHAAARIAAAHQgEAZgLAOQgLAOgMAEQgQAFgOgIIgEAJQgHAJgKAAIgCAAIgFAAQgFAAgGgCgAgqA8IACAEQAKAPAPAGQAFABAGAAIADAAQAIgBADgIQAEgHAAgJQAEABACADIAGAGQAFACAFAAIAKgCQANgEAIgNQAJgNACgSQAAgGgBgHQgBgHgFgDQgFgEgHAAQgHgBgGACQgKABACgFQACgFAGgGIAJgJIAKgOQAEgHABgIQACgMgIgLQgFgGgIAAQgJABgMAHQgMAIgLALIgSAVQAFAIADAOQACAPgDAPIgDgLIgGgUQgEgLgCgEQgHgGgLABQgLACgGAEQgHALgHASQgIAQgBAQQAAAHADAFQAFAIAOAAIAEAAIAEgDIABADIAQgBIAJgBQgJAIgMADg");
	this.shape_19.setTransform(53.3,-6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A07D5C").s().p("AgRBAQgIgEgHgGQgHgGgFgHIgFgLIgGAAQgVAAgEgOQgEgOAGgQQAFgRAHgOIAIgPQAEgFAGABQAGABAEADQAGAEADAGIAHAMQAJAUgBAUIABAPQAAAIAEAGQAEAFAHgBQAKgCAEgKIABgKQABgGAFABIACABQABALAGAGQAGAHANgCQAKgDAGgIIAKgQIADAAQAFABgFAJQgEAJgHAKIgJALQgLAIgMAAQgMAAgKgJQACADgBAFQgCAFgCACQgGAHgHAAIgFAAIgLgBg");
	this.shape_20.setTransform(53.3,-4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1AE8B").s().p("AASAaQAHgMACgNQACgMgMgEQgNgCgLAFQgOAFgJAHIgJAFIAIgHIASgRQAKgKAJgGQALgFAIADQAKAGAEANQADAMgGAOQgGAQgTAPIAHgNg");
	this.shape_21.setTransform(56.7,-12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1AE8B").s().p("AAVARQgCgGgFgIQgEgGgIgDIgTgEIgHgBIAGgFQAHgEAJgDQAIgCAJAEQAJAGABALQABAJgCAKIgCAKIgBgIg");
	this.shape_22.setTransform(58.5,-5.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B7936C").s().p("AgRBZQgIgDgIgGQgHgGgEgIIgGgLIgGABQgVgBgDgNQgEgOAGgSQAFgQAHgOIAIgOIAHgEQAHgCAKgBQAJgBAHAFIASgUQAKgMANgJQAMgJAMgDQAMgCAIAKQAKANgCANQgDAOgIALQgIALgIAGIgIAHIAHgCQAHgBAJABQAJACAGAHQAGAGgCASQgDAXgLAOQgMAOgPACQgOADgMgLQACACgCAFQgBAFgCADQgGAHgHAAIgDAAQgHAAgGgCg");
	this.shape_23.setTransform(53.3,-6.9);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.4,-35.3,133.8,70.7);


// stage content:
(lib.chickenCJS = function() {
	this.initialize();

	// outline
	this.instance = new lib.chicken("synched",0);
	this.instance.setTransform(99.6,100.1,1.492,1.492,0,0,0,-0.3,0);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(99.9,100,200.1,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;