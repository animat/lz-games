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



(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#737373"],[0.8,1],-1.6,0,0,-1.6,0,91.8).s().p("AgVN/QkigGjeipQg0gngwgwQififg+jIQgZhQgKhWQgGg1AAg3QAAjvBvjEQA7hpBchdQCNiMCrhBQCWg5CrAAQCuAACXA7QCpBBCLCKQByBzBBCHQBUCvAADQIgCA0QgRFQjxDyIgDADQkGEHlzAAIgVgBg");
	this.shape.setTransform(89.1,89.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,179.3,179.2);


(lib.blackball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANeAvIAgAFQgRFQjxDyQgCABgBACQkGEHlzAAQgKAAgLgBIgPgwQDHgTByh5QC3ABCThlIAcAXIABAAAMOlBQBCCoAODIAMsl/QBUCvAADQQAAAagCAaAMOlBIAeg+QhBiHhyhzQiLiKiphBIACCbQCbB1BVCZIiqD1QBdC1ACDKIDcBkQBehhA4itAA0kZQDAAmCZBNAAHpZIAtFAAFHqpQjfAMhhBEAlBtGIAUCdQirAuiGDHIiyABQA7hpBchdQCNiMCrhBQCWg5CrAAQCuAACXA7Apem0QgVCsBCCjIFKBQIBGFwIkiCHQiwh9g2igQgLimCDiEAt5BsQgGg1AAg3QAAjvBvjEAtTDFIgDBNQgZhQgKhWIAmBZQBeAaBMgaAoVLQQg0gngwgwQififg+jIAl4LhQhXAQhGghAnDHiQAACSBLBtQCGBbDOATAJfJfQBciRANiRAHsDZQhXB9i8B9QjPgiirhWAEVLDIg8jwAjngVIEbkEAktqpQC5gTB7BjAgVN/QkigGjeipAI3mbQBiAFB1BV");
	this.shape.setTransform(89.6,89.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoYK0QBHAhBXgRQCFBcDOASIAPAxQkhgGjfipgAESKmIg7jwQC7h9BXh9IDdBkQgOCRhcCRQiRBkiyAAIgHAAgAqrCoQgMilCDiFIFLBQIBGFwIkjCHQivh9g2iggAt8BQIAnBYIgEBNQgZhPgKhWgANbASQgOjHhBipIAdg9QBUCvAADRIgCAzgAAxk2IgtlAQBhhDDggNQCaB2BWCYIiqD1QiZhNjBgmgAp8qVQCNiMCshBIATCcQirAuiGDHIiyACQA7hqBchcg");
	this.shape_1.setTransform(89.9,92.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,181.3,181.2);


(lib.ball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVN/QkigGjeipQg0gngwgwQififg+jIQgZhQgKhWQgGg1AAg3QAAjvBvjEQA7hpBchdQCNiMCrhBQCWg5CrAAQCuAACXA7QCpBBCLCKQByBzBBCHQBUCvAADQIgCA0QgRFQjxDyIgDADQkGEHlzAAIgVgBg");
	this.shape.setTransform(89.6,89.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,179.3,179.2);


// stage content:
(lib.ballCJS = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(100.9,100.8,0.816,0.816,0,0,0,89.6,89.6);
	this.instance.alpha = 0.219;

	this.instance_1 = new lib.blackball();
	this.instance_1.setTransform(100.5,100.4,0.816,0.816,0,0,0,89.6,89.6);

	this.colorMe = new lib.ball();
	this.colorMe.setTransform(100.5,100.4,0.816,0.816,0,0,0,89.6,89.6);

	this.addChild(this.colorMe,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(127,126.9,147.1,147);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;