(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 143,
	height: 172,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.sweater = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AjwsGQgIAVAAACQAAATAnANQAlAMA2AAQBnAAAwgzQAdgeAAgZQAAgHgJgIAoQLSQAAAAABABQALAagBAfQAAAJgBAJQgvAig6gDQgbgGgYgNQgKgEgFgKQgOgaACggIAAAAQgUhcAIhqQABhfALkWAoQLTQAAgBAAAAAnVF1QgXC7gkCiAK/KxQAAACAAACQgCBJg/AOQg7AJgzghQgKgYAEggIAAAAQgcgxgZhxQgShZgQhfAK+K0QAAgCABgBALGFiQAQD5gXBW");
	this.shape.setTransform(71.7,89.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("ABprrQCEApB1ACQBmgCBHBIQAQARAKAdQADAJADAJQAEAaAFAZQABAEABAEQBtJNAbE0AFQkQQABAQACAQQABAEAAAFQACAXADAXQAJBSAKBQIgCAYQAAAXAAA0QAAA+gSEMQAAB2AeBWQAIAVANAgQAAABAAAAIAAAAIAAABQAJAXAAAQQAAAwiZAaQhyATiHAAQhRAAjUgYQhTgLgYgNQgggQAAgpQAAgOAEgVQAHgkARg6QAchcAAhbQAAhbgUhrQgQhSgZiNQgIgugKg0AGvGCQgki2gcjNQgBgLgCgLAAyscQAJAEAJAFQAiAOABAaArBDHQALkUBNmJQAJgwA3g1QAfgeAxgOQBkgeBGgdQADgZArgnIANgEAmzgpQgTE2gTCJ");
	this.shape_1.setTransform(72.1,86);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8C8C8").s().p("AABAAIAAAAIgBAAg");
	this.shape_2.setTransform(111.5,152.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("AidHKQAdgIApgZQA4gjAAgjQAAgDgwgeQgxgeAAgOQAAgZAYgMIA4gZQBbgtAmkpQAejpgEhkQAJBTAKBPIgBAaIAABLQAAA/gTEKQAAB1AeBWIAVA1IABABIgEACIAEgBIAAAAIgEABQg/BEhtAAIiLgCg");
	this.shape_3.setTransform(95.9,113.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BBBBBB").s().p("ApwM9QgagGgZgNQgKgEgFgKQgNgaACggIAnAFIA1ACIACAAQBEgEALgSIAAAAQAMAagBAfIgCASQgrAfg1AAIgJAAgAIPL0QgKgYAFggQBPAVBkgdIABABQgBBJg/AOQgNACgNAAQgtAAgogagAkfLlQhTgMgYgMQgggQAAgpQAAgOAEgVQAQA9HpANICKACQBvAAA/hEIAEgBQAJAYAAAPQAAAxiZAZQhzATiHAAQhRAAjTgXgAjmqPQg2gJgPgqQADgZArgnIAMgEIgIAXQAAATAnANQAmAMA1AAQBoAAAvgzQAegeAAgZQAAgHgJgIIASAIQAiAPABAaQABALgHAOQgoBWhmARQgpAHgpAAQg1AAg1gLg");
	this.shape_4.setTransform(71.7,89.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAEAEA").s().p("ApgL7Ig1gCIgogFIAAAAQgUhcAIhqQABhfALkWQALkUBNmKQAJgwA3g0QAfgeAxgPQBkgdBGgdQAPAqA2AJQBfATBdgPQBngRAohWQAGgOAAgLIACgBQCEAqB1ABQBmgBBHBIQAPAQALAeIAFASIAKAzIABAIQBtJMAcE1QAQD5gXBWIgBADQhkAdhQgVIAAAAQgcgwgZhyQgShZgQhfQgli2gbjNIgDgXQgKhPgJhTQADBkgdDnQgmErhdAtIg4AZQgYANAAAYQAAAOAwAeQAxAeAAADQAAAjg4AjQgpAZgdAIQnpgNgQg9QAGglASg6QAchbAAhbQAAhbgUhsIgpjeIgShiIASBiQgTE2gTCIQgXC7gkCiIAAABQgLAShDAEIgCAAgAFXj/IABAKIAFAtIgFgtIgBgKIgDggIADAgg");
	this.shape_5.setTransform(71.7,87.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,5.4,145.4,167.9);


// stage content:
(lib.tn_sweaterCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sweater();
	this.instance.setTransform(71.7,86.1,1,1,0,0,0,71.7,86.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(71,91.9,144.4,166.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;