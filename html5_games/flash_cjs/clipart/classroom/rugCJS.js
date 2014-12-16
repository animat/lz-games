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



(lib.rug = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#420101").s().p("AFRETQglgJiOg1QiPg0iNg+QiPg9gqgkQgpgqgGhNQgBgYADgZQAPhZBCgTQAKAHAtAdQAtAdAvASIAAABQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQANAGBgAjQBeAjBvAfQBvAfA6gIQgSAcghBIQggBJAABFQABARAFAOQARAvA+AGQgQAGgFAAIgBAAg");
	this.shape.setTransform(-58.7,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFKEaQgmgJiOg0QiOg0iOg+QiPg+gsglQgcgbgNgxQgNgwAHgzQAQhfBHgUIABABIAzAiQAvAfAyASIACADIAAACIB3AsQBiAkBtAdQBuAdAzgLQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgJAKgtBdQgsBeAQBMQASAxBIAAQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgeAOgHAAIgCgBg");
	this.shape_1.setTransform(-58,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#420101").s().p("AimAdQg3gUAAgEQBmApBogPQBmgQBHgcQAvgVARgIQiIBKhgAIQgfADgaAAQg9AAgmgOg");
	this.shape_2.setTransform(-9.7,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#420101").s().p("AAFAAQgtgegQgEQAEgBAoAOQAmANAfArIg0gjg");
	this.shape_3.setTransform(49.5,-29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#930000").s().p("AnwFPIixi6IhkhpQF9h8DehfQDchfBqhBQBqhBAfgkQAXATAcAJQAgALBNAWQBNAWBZAVQBXAWBDAKQhGA6i0BzQizByjPB8QjNB/ibBdIiyBpIhfhlg");
	this.shape_4.setTransform(10.5,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmUG8Il5mPIgBgEQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQGOiDDhhhQDfhiBkhAQBlg/AXgdQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAWATAdAKQAhALBPAWQBPAWBaAWQBaAWBBAKQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQhCA4i3B1Qi4B2jWCBQjUCCidBdIinBkIgBAAIgCAAg");
	this.shape_5.setTransform(10.6,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#770E0E").s().p("AmrGiQiPg1iPg9QiPg+gqgkQgpgrgGhNQgBgZADgYQAPhYBCgTQAOAMBAAnQBAAlAvAAQAfgHCmhCQCmhEDGhVQDDhVB7g6QB9g8AXhDQAGAOAWAZQAWAaAtARQAqAOBlAbQBkAcBmAXQBlAWAsgBQAEABADAKQACAIgNASQgNARgtAfQgzAiinBqQioBpjKB+QjKB9iZBaQicBbgaAAQglgJiOg0g");
	this.shape_6.setTransform(0,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AmtGsQiOg0iPg/QiQg9grgmQgdgcgMgxQgNgwAHgzQAPhdBHgUIACAAQAHAIBCAoQBCAnAwABQAegICmhBQCmhFDFhUQDDhVB7g5QCCg/ARhDQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAEAVAeQAUAeA1AVQAqAOBlAbQBlAcBlAXQBlAWArgBIABAAQAGAAAFASQACAfhKAyIjFB/QilBnjPCBQjQCBigBeQiiBfgdABQgmgKiOgzg");

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.2,-48.9,190.4,97.9);


// stage content:
(lib.rugCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rug();
	this.instance.setTransform(101.3,105.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvmPnIAA/OIfNAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100.1,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;