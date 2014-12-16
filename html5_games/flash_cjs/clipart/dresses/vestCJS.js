(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 128,
	height: 194,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.upper = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AmbJ4IAmibIAHgrQABgKABgKQAEg1gEg4QgBgNgBgNIgcjpIgcjnQgIgIAFgQQA+hIhOncQAKgGAHAAQAIgBABABQAggLAfgEQAQgGAOADQAyCmCJAIQCIAHBIhGQBJhFAsh1QASgDAFAHQAsAEAgAHQACgBAJAAQAJAAAIAFQg/HNCCB3QAIARgMALQg0GUA/FPQABABAAABAGkJ0QASBSABA+QADALAAAGQgBAFgDAIQgCAIhpADQhoADgBAAIgDAAQhAACgxAOQkwBAjlhfQgJgUALgVQgChDAMg9AGHH+IABACIAbB0");
	this.shape.setTransform(68.9,99.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AkyGyIgBgEQAZh6hrjzIgbjmQBlgWheotQAfgKAfgEQA6C7CYAIQCYAJBRhRQBNhMAth6QAtAFAfAGQg4GmBUCHQAIDSgVCgQgLBUgbBPQgKAdgZASIgZASQgKAIgGAKQgUAfAhAUQAJAFAKAFQAoARAgAcQAVATAHAcQACAJgCAKQgFAUgJATQADAaATAUQAcAdAUAiQAfA4ADA/QiagJiTAdQhaAThRAEQligmBnlpg");
	this.shape_1.setTransform(68.4,97.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AmnMhQgJgUALgVQChBCDHgMQBSgFBZgTQCTgdCbAJIABAAIAaACQADALAAAGQgBAFgDAIQgCAIhpADIhpADIgDAAQhAACgxAOQh5AahvAAQikAAiJg5gAmpjRQA+hIhOncQAKgGAHAAIAJAAQBfIthmAVQgIgIAFgQgAFnjvQgZgQgSgeQhUiHA5mlIALgBQAJAAAIAFQg/HNCCB3QAIARgMALQgLgEgKgGgAiPpHQiXgIg6i7QAQgGAOADQAyCmCJAIQCIAHBIhGQBJhFAsh1QASgDAFAHQguB6hMBLQhKBJiDAAIgdgBg");
	this.shape_2.setTransform(68.9,99.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1E1E1").s().p("AmtHvQgChDALg9IABAAIAlibIAHgrIACgUQAFg1gEg4IgDgaIgbjnQBqDwgZB6IABAEQhmFqFhAmQggACgeAAQijAAiHg4gAGVH5IgBAAQgDg/ggg3QgUgjgcgdQgTgUgDgaQAJgTAFgUQACgKgCgJQgGgcgWgTQgggcgngRQgLgEgIgGQgigUAUgfQAGgKAKgIIAZgSQAZgSAKgbQAbhPALhUQAVihgIjTQASAeAZAQQAKAGALAEQg1GWBAFNIAAACIABAAIAbB0IAAAAQASBSACA+IgagCg");
	this.shape_3.setTransform(69.8,125.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(23.7,12.6,90.5,173.7);


// stage content:
(lib.vestCJS = function() {
	this.initialize();

	// Layer 1
	this.upper = new lib.upper();
	this.upper.setTransform(15.9,9.3,1,1,0,0,0,16,9.5);

	this.addChild(this.upper);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(88.1,109.9,89.4,172.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;