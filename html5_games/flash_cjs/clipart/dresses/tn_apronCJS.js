(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 128,
	height: 258,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.upper = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ACttPIAdgCQB+ClAwDIIgPA1IgBAEQgBAegODcQAAAjgEBDQgFBEABAwQABAzAKARQAJARAbBeQAbBdgBAsQAXDpAADoQAAACAAACQAAABAAABQAABqgCBqQgBAMAAAMIAFBBAA8tGIAZloQAZAAATAbIAmESIAGAyAFomsQAAgCAAgBIAAAAIABAAAFomsIAAABAFnmvQABACAAABAllsjIA8kmQAWgaAPAEIgOE1IFOgcIANgBIBkgIAllsjIAIAAIBHgGIAEgBAmpLEQAAgBAAgBQgBgeADgyQAEhzAVjfQACgfAThCQAThDgBhoQgBhlgNhCQgIgtgKhNQgFghgEgoQgLhdgLgaQAAgBAAAAQgBgEAAgDQgGgPgEgfIgBgDQgHhOBLjOIAJgBAG0RpQgeAllUAfQlEAMiog6IAFhMQADAAgBhLQgBhKgChYQgChVgBgsIAAgBAmkJyIgFBS");
	this.shape.setTransform(69.1,129.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEAEAE").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(105.2,86);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5D5D5").s().p("AjjN9IAAgBQAeACBTgGQBugIBAhLQAQgSAVghQARgXAXAAQAiAAAlAjQAkAiBLgBQBLgCARhOQARhNABghQAABqgDBqIAAAYQjkA9jeAAQhmAAhlgNgAGMI1QgcgkAAgfQAAgngQjSQgGhNgRgvQgJgaglhEQgWgnhEgYQgfgLgKgGQgRgMAAgTQAAgjAwg1QAwg0AAgWQAAgogdgeQgdgeAAgIQAAgMAQgUQAegjAHgKQA0hOAAh7QAAhBANgcQAMgcgvicQBCB5AhCGIABADIAAABIgQD6QABAjgEBEQgFBDABAyQABAzAKARQAJARAbBcQAbBegBArQAWDpABDoQgTgUgOgSgAmTBFQADgfAThAQAThDgBhnQgChogMhCQgJgtgKhMQAShhAAgOQgMhFAAgPQAAggAaguQAbgwAfgNQAAAUAGBXQAABSgMA6QgMA7AAAVIgBABIABAFQABAfAIAOIAFAJIADAMIAFAXQAbBoALAdQAFANAcA1QAVAoAAANQAAAphEBcQhHBegFAiQgJBFgaBbQgeBqgGAbIgDABQAFh0AUjfg");
	this.shape_2.setTransform(69.6,151.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1E1E1").s().p("AjxSCQhcgNhbgXQACAAgBhKIgDiiIgCiCIAAAAIAAgCQgBgeACgyIADgBQAGgbAehpQAahbAJhFQAFgjBHhgQBEhcAAgpQAAgNgVgnQgcg1gFgMQgMgcgahoIgGgXIgDgMIgEgKQgIgOgBgeIgBgGIABAAQAAgWAMg6QAMg7AAhSQgGhXAAgUQgfANgbAxQgaAtAAAhQAAAPAMBFQAAAOgSBgIgJhJQgKhegLgaIAAAAIADAAIAAgHQATidA8iJIIQgoQAoA5AgA8QAvCbgNAcQgMAcAABCQAAB7g0BNQgHAKgeAkQgQATAAAMQAAAJAdAeQAdAeAAAmQAAAVgwA1QgwA1AAAiQAAAUARALQAKAHAfALQBEAXAWAqQAlBEAJAZQARAwAGBMQAQDTAAAmQAAAfAcAkQAOATASAUIAAADIAAADQAAAggRBOQgRBNhLACQhLACgkgjQglgjgiAAQgXAAgRAYQgVAggQATQhABKhuAIQhTAGgegCIgBACIgOgCgAmsLwIAEhTgAktwdQAWgbAQAFIgPE1IgDAAQgNgnAAgHIAEgxIABgoIAAggQAAhEgCgGIgFAAQgFANgMBgQgQBjgYAnIgIABgABSyDQAZABASAaIAmETQgWhLgGghQgIgpgGhEQgDgbgOgPQgJAhABB4QACBogdA8IgNABg");
	this.shape_3.setTransform(69.5,124.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4C4C4").s().p("AmqRpIAFhMQBbAXBcAMIAPACQFBApFMhZIAFBCIABAAQgeAklUAgQg0ACgvAAQj8AAiNgxgAEErEQggg7gog5IoQAoQg7CJgTCdIgBAHIgDgBQgBgDAAgDQgGgQgEgfIgBgCQgHhOBLjOIAJgBIAIgBIBHgGIAEAAIFOgcIANgBQAcg8gBhoQgCh4AJghQAOAPADAbQAHBEAIApQAFAgAXBLIAGAyIAdgCQB+CmAwDIIgPA0IgBAAIgBAAQghiFhCh6gABJtcIBkgJgAk2vDQANhgAFgNIAEAAQADAGAABEIAAAgIgCAoIgEAxQAAAHANAnIhHAGQAXgnAQhjg");
	this.shape_4.setTransform(69.1,131.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.6,8.3,89.2,242);


// stage content:
(lib.tn_apronCJS = function() {
	this.initialize();

	// Layer 1
	this.upper = new lib.upper();
	this.upper.setTransform(15.9,9.5,1,1,0,0,0,16,9.5);

	this.addChild(this.upper);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(89,137.7,88.2,241);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;