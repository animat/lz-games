(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 170,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(2,1,1).p("AAFpGQADAAADAAQCuAACcAoQCPAlCABHQBsA7FlFlAw0gQQDKjOABgBQAMgIAIgIQBrhmB4hIQCFhPCVgqQClgvC2gBQABAAABAAAAFxFIAAH/AAFRGIAA6M");
	this.shape.setTransform(109.9,111.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,1.5,217.5,221);


(lib.kite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEEE").s().p("AABRNIgBAAIAAgBIAAABIxNxNIDbjZIACACIAEgCIgDgDIDljlIADgBIgBgBIKIqKIRORNIxNROg");
	this.shape.setTransform(110.3,110.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220.6,220.4);


// stage content:
(lib.kiteCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-86.7,74.3,0.66,0.66,0,0,0,110.3,110.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AEApaIClClImdQQgAmjmlIgBgBICtisID9Ssg");
	this.shape.setTransform(-87.6,88.4);

	this.colorMe = new lib.kite();
	this.colorMe.setTransform(-86.9,75.3,0.66,0.66,0,0,0,110.4,110.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Aj4B7ID1j1ID8D1g");
	this.shape_1.setTransform(-87,141.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Aj4L7ICfihIp+p8ICRiRIACABIACgBIgCgCICXiXIACgBIAAgBIGrmsILXLYIqAJ/ICiCeg");
	this.shape_2.setTransform(-80.8,79.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(1,1,1).p("AFKmMQgDACgCADQhYBrhHBaQgngbhEAAQgjAAg7AKQg4AKgYAEADcCAQABgGABgGQACgMADgPQAGgaAMg5QALg4AShaQAhisAVhPQABgDABgCQgEABgDACQj3Bwh3A1QgtAUgbALQgEACgBAAQgFACgDACIgMAFQgBAAgBAAQABgBABgBQAAABAAABQggB7geClQgOBOgJA2QgLA9gGAeQAAABAAAAQAAABAAAAQAFgTAAAHQAAABAAABIABABQAWggAWgeQBkiOBQhcQBShfBgh5QAWAPANAXQAZAuAABwQAAAegKA8IAEAkQgDASABAFQhbAig/AUQhHAXiCA1QgGANgJAfQgJAdgLArAjpFBQAJgDAIgEQAVgJAUgIQATgIATgIAjtFAQgBACgBACQAAAAABgBQABAAABAAQgBgBAAgCgAjsFDIAAAAQABABADgCIgBgBQgCABgBABgAjsE+IADADAjsE+QAAABgBABAjtE9QAAACAAABAjvFEQgCACgBABQACgCACgCAjoDoQgkAZg9AgQBkBMA0Ag");
	this.shape_3.setTransform(100.3,61.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AkcFnIgBAAIARhbIAYiFQAdikAgh8IAMgFIAIgDIAFgCIBRgOQA8gKAhAAQBEAAAnAaQgngahEAAQghAAg8AKIgIgSQB3g1D2hwIADADQhZBrhHBZQBHhZBZhrIADAAQgVBPgiCrIgdCSIgSgDQAAhxgZgtQgNgYgXgPQAXAPANAYQAZAtAABxQAAAegKA8IADAjQgDATACAFQhcAhg+AUQhIAYiCA1IgmAPIgoARIgRAIIgDgDIArg+QBliOBQhcQBShgBfh5QhfB5hSBgQhQBchlCOIgrA+IgBgBIAAgDQAAgHgFAUIAAgCgAEbllg");
	this.shape_4.setTransform(104.6,58.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.colorMe,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.8,87,294.2,154);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;