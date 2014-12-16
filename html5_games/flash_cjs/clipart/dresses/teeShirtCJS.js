(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 141,
	height: 185,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.teeShirt = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AmggfQgZAJgzAEQg0AEhUgSQhUgTAJgtQAEgLAEgKQAWg5AMgxQAPg5APiAQAQh/AZhCQAahBASgPQASgQBJgiQBKgiAvgFQAwgFANgSIAAAAQALgVAYgOQgBAHgEAQQABAkBrgDQAjgEAlgEQA7gFAyghQA0ghgegnQAdAKAIAYQFTA1AxAXQAyAYAtBnQAZA3AQBgQAYDVAVBQQAPA1AFAVQACAIAAAEQABABAAABQAAAIAHATQAHAThCAkQhBAkg9AAQhaAAgcgVQgBgTgBgSQAAgEAAgEQgFhbgLhCAFrk8QAMAlAIA1QgXCjAADbQAADvAFAkQAHA7A2EeIAAAjQgBABgBACQgBADgCAJQgDANhTAbQhSAblQgCQlRgBgOhIIAnkFQAakLgNhjQgOhigOhbQgDgQgDgRQgCgTgDgRQAAgDgBgCQAAgDAAgDQgLhLgFg6");
	this.shape.setTransform(70.6,96.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F7F7").s().p("AguBZIgkAGQglAAAAgZQAAgMALgOQAMgPAOABQAaAAAYANQAbAPAAAYIABAUQgTgNgXAAgAAmgEQAAgqAfgfQAYgYAKAAQARAAAAAYQAAAigpAfIgoAeg");
	this.shape_1.setTransform(59.8,67.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AjICqQgKhIAjhAQAjg9Asg6QAug9A+gnQBAglBFAeQASALAMANQATATgFAbQgLA9hEATQAaAaAeASQAcATAIAgQAGAcgTATQgpApgpgwQgeAlgrAYQgLAHgIgGQghgZAKgxQgXAcgVAeQgqA8hFAHQgggEgFgggAgQAyIgCgUQAAgXgbgOQgXgNgbAAQgNAAgMAPQgMAMAAAMQAAAYAlAAIAlgFQAXAAATAMgAA5iBQggAfAAAqIACAZIAnggQAqggAAgiQAAgXgSAAQgKAAgXAXg");
	this.shape_2.setTransform(61,73.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFBFBF").s().p("AGRGnIgCgmIAAgIQAlANApABIALAAQAyAAA0gLQBFgQAjg0IACALIAAABIABABQAAAIAHATQAHAUhCAjQhBAkg9AAQhaAAgcgUgAp0GeQhUgSAJguIAIgVIABABQAoAdAzAMQA2AMA5AAQAlgCAhgMIAAAFIABAFIAFAkQgZAKgzAEIgTAAQgvAAhGgPgAiqkSQhogFgHgdIAAgFQABgRAHgOIAAgBQALgVAYgNIgFAWQABAlBrgEIBIgIQA7gFAyghQA0ghgegnQAdAKAIAZIACAJQAHAogjAZQgjAag1APQgvAShQAAIgiAAg");
	this.shape_3.setTransform(70.6,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEAEA").s().p("AhSNqQlRgCgOhIIAnkFQAakKgNhjQgOhigOhZIgGgkIgFgjIgBgFIAAgGQgLhLgFg6QAFA6ALBLQghANglABQg5ABg2gMQgzgNgogdIgBgBQAWg4AMgxQAPg6APh/QAQiAAZhBQAahBASgQQARgPBKgiQBKgiAvgFQAwgGANgRQgHAOgBASIAAAEQAHAdBoAFQBoAEA5gWQA0gPAkgZQAjgagHgoIgCgJQFTA0AxAXQAyAYAtBoQAZA2AQBhQAYDVAVBQIAUBKQgjA1hFAPQg1ALgxAAIgLAAQgqgBgkgMQgGhbgKhCQgIg2gMglQAMAlAIA2QgXCiAADbQAADwAFAkQAHA6A2EeIAAAkIgCACIgDAMQgDANhTAbQhOAakzAAIghAAgAhQm3QhBAnguA8QgrA6gjA/QgkBBALBIQAFAgAgAEQBFgIAqg8QAVgdAWgcQgKAwAkAZQAIAGALgGQAqgYAdglQAoAwApgpQAUgUgHgbQgIgggcgTQgegVgagaQBFgSAKg9QAFgbgSgTQgNgOgRgKQgfgOgcAAQglAAgjAVgAmlhfIAAAAg");
	this.shape_4.setTransform(70.5,98.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,6.6,143.1,180.4);


// stage content:
(lib.teeShirtCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.teeShirt();
	this.instance.setTransform(70.5,93,1,1,0,0,0,70.5,93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(70,99.6,142.1,179.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;