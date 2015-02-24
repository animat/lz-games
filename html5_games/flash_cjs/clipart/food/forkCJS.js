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



(lib.fork = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBDBDB").s().p("ApqKqQCli5A1hSQA2hTgDgTQgDgTgFADIBdiaINmtPQALAJACAJIAAAEQgDASgTAOQghAaiECAQiEB/ihCeIkWEQIh9B7IgDAeQgCAcAAASQAEAmhEBqQhDBqjBDDIgZgXg");
	this.shape.setTransform(8.7,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F7F7").s().p("AoULOIgUgRQAogrBDhLQBChKA3hHQA2hHAEgeQAAgFgDgDIgGgCQgXAGhLBHQhLBHhJBLIhbBeQgJAAgXgcQAhggBIhNQBIhMA/hIQA/hIAEgXIAAgBQgBgDgDgDQgcgHhIA/QhIA+hKBNQhKBMggAkIgcgYQAWgbBchgQBbhfBphTQBphTA+AJIADABIACgCQCji9C6jQQC7jQCRiSQCQiRAigCQBXATAPArQABADgBAFQAAAVgcAWQggAbiCB5QiCB6igCYIkZELIiNCGIgDAEIADADQAEAAAEAlQAGAshCB1QhBB1jYDSIgTgQg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F4F4F").s().p("Ao3K7IADgEQBvh1BLhaQBLhbADgaIgFAAQgTAGhEA+QhEA+hCBDQhBBCgQARIgCADIgCgBQgIAGglgqIgBgDIACgDQBzh2BUhhQBVhhAGgXQghgBhkBiQhkBhhcBmIgDAEIgrglIADgEQANgQBahkQBahkBuhcQBthdBHAHQAlgsB9iKQB6iMCZikQCZikB7h2QB8h2AiAAQBgARATAuIABAKQAAAYglAhQgfAZh9B4IkZEOIkUEMIiTCPQACAFgEAdQAGAvhEB4QhEB3jaDUIgCADg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.7,-74.6,147.5,149.4);


// stage content:
(lib.forkCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fork();
	this.instance.setTransform(100,100,1.321,1.321);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/NIfOAAIAAfNg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100.1,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;