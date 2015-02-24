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



(lib.sweatshirt2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BABABA").s().p("AktEDQCyg3CGh8QCJh6BNhrQBBhaAMgUQhzDhiLBuQiKByhnAkQhfAigMAAIgBgBg");
	this.shape.setTransform(-0.9,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BABABA").s().p("AAcBMQBriVA0h6QAshmAHgVQhAD0hvCKQhuCNhdA6QhYA3gJABQChhdBoiWg");
	this.shape_1.setTransform(11.2,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AogNQQADgoACidQABikgSi1QgTi1g5hYQAJgNAUhNQAUhOACicQADisg2kaQAbgKAegJQAfgIAMAEIACABIACAXQAhG3ELAHQCeAEBAg7QAhgiAIgpQAIgqAAgmIABgfIABgLQgEhIgdhjQgbhkgNgiIA7gSQAjgKAVgCQAJAmAoCGQAoCFBBCOQBCCOBVA+QAbBEAoCEQAoCCAnCPIBDD1IAcBtQgSAXiTBYQiTBYkCA6Qh4AciQAAQifAAi4gig");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AooNcIgGgBIABgFIADhtQAChlgEiOQgFiNgUiBQgUiBgtg+IgCgDIACgEQAEAAAWhNQAWhPADirQACisg2kWIAAgFIAEgCQAPgHAogNQAogNAWAHQAIADABAHIADAZQAgGrD+AHQCZAEA7g3QAeggAIgnQAIgngBgkIABggQADgtgThJQgQhKgUg8IgVhBIgCgHIAHgCIA3gRQAxgOAagCIAGAAIABAFQABAHAaBYQAbBYAtB1QAsB2A3BfQA3BfA6AVIADABIASA7QARA4AYBcQA0C8AwCdQAvCdAeCYIgDADQgEALiSBcQiRBckMBBQiAAgibAAQiiAAi+gkg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-89.6,129.9,179.3);


// stage content:
(lib.undershirtCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sweatshirt2();
	this.instance.setTransform(100,100,1.089,1.089);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;