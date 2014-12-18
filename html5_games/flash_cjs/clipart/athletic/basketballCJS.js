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



(lib.basketball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#874904").s().p("AkRMLIgIgjQCag0B5hoQB5hoBRiNQArBuABB+QAAAvgGAvQi+BvjcABQgxAAgwgGgAA8qLQhdhNhsg4QDnALDACDQgVBYgnBMQhDhghfhNg");
	this.shape.setTransform(17.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B5808").s().p("AjkGgQgyjQgEjVQgEjYAYjIQCDAEB9BUQB7BVBSCPQBSCNADC0QAAAvgFAuQi+BwjdABQgxAAgvgGg");
	this.shape_1.setTransform(13.3,36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B5808").s().p("AkfE5QAkjqArilQAsinAVg9QDsAJDDCGQg9DqigCHQiKB1ilAAQgZAAgagCg");
	this.shape_2.setTransform(17.1,-47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B5808").s().p("AjRDVQACjtBei4QBfi5DFgWQgZDHAEDVQAEDUAvDPQjtgni1ikg");
	this.shape_3.setTransform(-33.9,35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9B5808").s().p("AiACgQhZh4gXi7QDWihEMgCQgYBDgrCmQgqCigiDiQiLgehYh5g");
	this.shape_4.setTransform(-24.6,-47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B3300").s().p("ADfhSQkeg6jqAUQjpATiMApQiLAogGAGIAGgUQAGgGCIguQCIgtDlgZQDmgZEdA3QEfA3E2C/IAGAsQkwi8khg6g");
	this.shape_5.setTransform(-1.5,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B3300").s().p("AhrEBQAIkZAsjyQAtjxAqiWQAsiWAEgHIAdAKQgFAHgrCVQgrCUgrDvQgsDvgIEWQgHEYBDEQIgdAHQhEkSAHkcg");
	this.shape_6.setTransform(-7.3,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B3300").s().p("Ah0FaIgHgHQiegbhfiJQheiIgYjPIgBgGIAEgDQDgipEXgCQEIACDXCVIAFAEIgCAGQg+D5irCaQiVCFitAAQgcAAgbgDg");
	this.shape_7.setTransform(-1.3,-45.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B3300").s().p("AjuGRQiRg6h0hsIgEgCIAAgEQAEkqBxi7QBxi7DDgOQDxgBCnDIQCnDIAGEiQAAAzgFAyIgBAFIgEADQjFB0jnABQieAAiRg5g");
	this.shape_8.setTransform(-6.5,34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B55C1A").s().p("AnzL/QDZgwChiSQCfiSBVjOQBTjNgPjiQgYjDiGiSQiFiRi0hcQFLATDdDdQDcDdAIFHQgJFPjlDeQjkDflXAJQhigBhcgVg");
	this.shape_9.setTransform(31.1,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C46C1E").s().p("Ao8IuQjljfgJlPQAJlODljfQDljfFXgIQFYAIDlDfQDlDfAJFOQgJFPjlDfQjlDflYAIQlXgIjljfg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B3300").s().p("ApKJGQjrjpgJldQAJlcDrjoQDrjpFfgIQFgAIDrDpQDrDoAJFcQgJFdjrDpQjrDolgAIQlfgIjrjog");

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.1,-82.3,166.3,164.6);


// stage content:
(lib.basketballCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.basketball();
	this.instance.setTransform(100,100,1.134,1.134);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;