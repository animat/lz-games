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



(lib.tshirt1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2B647").s().p("AjiAzQhMhDgbhDIAcgFIAXgEQASAaBVA/QBWA9BygIQBqgXA0g8QA1g/AIgZIAqAMIAsAOQgtBPhTBBQhSBCh9AIQiRgDhMhFg");
	this.shape.setTransform(1.8,-60.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2B647").s().p("AkcFlQgnghAChAQABhBAKg2QAIgngCgQQgCgQgPgGQgZgMgwAQQgxARhOBAQArjJAOhoQC9htBtg5QBug5AfAQQAMAGgBAUQgGBGgUBPQgQBFgGA1QgFA1AWAWQAVAUAsgMQAkgKA5gUQA5gVAtgYQBVgzBGgcQBGgcA+AuIAIB+IAMCTQheAdgcgNQgFgDgBgFIgCgGQgCgVgSgLQgRgPhOAaQhNAZjUB2QheA1hIAYQgmANgbAAQgZAAgQgLg");
	this.shape_1.setTransform(-0.5,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFE41B").s().p("AmAKHQithLghgtIARhHIAlioIAFgEQBEgzA2gZQA3gZAYAIQAJAEABAJQABAPgHAlQgLA3gBBEQAABEAqAkQBIAzDChsQC0hmBfgqQBfgqAWALQALAFADATIACAGQACAKAKAFQAVAKAmgHQAmgGAlgMQAIBPAJBAQAJA/AKAcQAAAEg8AxQg9AyhzAzQh0AyimAHQj8gEiuhLgAgpB0QgTgUAGg0QAHgxAPhAQAThQAGhHQACgbgSgKQg4gUiJBIQiIBJh0BNIAFk1IgOEJIh3CWQgFAHhmgtQhmgriAi3IBRhZQBNhUBOhjQBOhjALgzIEagwIABABQAaBGBPBLQBPBKCZADQCFgHBWhHQBWhIAthSIABgBQBMAYBIAaQBIAaANAMQAPATBRBZICfCvIBTBbQAAAJhMBmQhMBmiVBdIiCiLQgChZgBhDIAAhHIgFBYQgEBTACBjQhFgmhXAfQhXAdhXAyQhUAxhDAVQgOAEgMAAQgSAAgJgJgAEBrQIACgFIAzAPg");
	this.shape_2.setTransform(0,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmPKbQizhOgjgwIgDgEIABgGIAdhyQAZhpAdiFQAciEALhaQgbAkgcAqIgeAvIg2gLQgKAFhggzQhggziCi9IBThiQBOhbBQhpQBPhnALgrIABgJIF1g0IAFAGQACADApAkQAqAlBDAgQBDAgBLgJQBxgZAyg+QAyhAAAgIIAEgKIALADICDAlQBOAXBBAVQBAAVANAOIBgBuICkC7IBWBiQgBAOg/BrQg/BriXBfIg9ASIgngwQgkgrgbgcQADA7AIBvQAJBtAMBoQAMBnAQArIACAHIgFAGQgBAFhAAzQg/A0h4A1Qh4A0irAGQkGgDizhPg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-75,193.1,150);


// stage content:
(lib.tshirtCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tshirt1();
	this.instance.setTransform(100,100,1.007,1.007);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;