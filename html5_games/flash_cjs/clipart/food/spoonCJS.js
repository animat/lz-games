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



(lib.spoon = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhogDQgnhFAAgJQACAJAsA7QAsA6BFAPQBBAHA/hGQgDADgrAoQgrApgqABQhNgSgohDg");
	this.shape.setTransform(54.6,63.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2E2E2").s().p("AF+JMQhJgbg0hPQg0hPgchIQgchIAAgGIgBgBIgBgBIhvhtQhmhmiJiNQiJiOhqiBQhriBgOg8QgEgaAJgEQAjgHB7CAQB6B/CcC7QCbC6CGCtIACACIADAAQBcgIB8BCQB9BBAxBfQAfBHg7AzQg5Awg3AAQgSAAgSgFg");
	this.shape_1.setTransform(15.8,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AF7JVQhKgbg1hKQg2hLgdhHQgehHgDgPIh8h6QhnhpiFiMQiFiOhnh/Qhnh/gNg9IgCgPQAAgVAMgFQAkgIBpBmQBoBmB+CSQB/CTBkB8QBmB/AfAoQBggFCABKQCABJAyBhQAiBOhAA4Qg8Ayg7AAQgUAAgTgFg");
	this.shape_2.setTransform(15.8,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6CBCC").s().p("AqDKUQCrgIBuiLQBuiLBIizQAzhsCZipQCcirCwipQCwipBwhlQgPAvhhBjQhhBjhzBrQhjBchYBXQhYBXgyBEQhDBYglBNQgjBNgcBKIgeBNQghBShLBdQhLBdhjAgQgZAGgZAAQg3AAg2ghg");
	this.shape_3.setTransform(0.1,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhpgFQBGhZBXgwQBYgvAJgBQiwBxg5BYQg5BYAEAzIAEApQgnhyBDhSg");
	this.shape_4.setTransform(-53.8,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2E2E2").s().p("Ap2KQQhCg4AKhlQACg0A8hPQA8hQCqhKIA4gXQA5gXAkgRQAjgQA2ghIAAAAQAOgJBQhCQBPhBAtg8QAXghBUhmQBUhlBqhzQBrh0BahNQBahMAjAOQAGAEABAIQgBAqhjBmQhiBliAB3QhiBchYBXQhZBYgzBBQhBBagkBMQgkBNgcBKIgeBNQghBThMBdQhLBehlAgQgaAHgZAAQhFAAhCgzg");
	this.shape_5.setTransform(-3.9,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ap8KYQg8gygBhZQAAgOACgOQACg1A9hSQA9hSCthMIA5gXQA6gXAigQQAjgRA1ggQALgHBRhDQBPhAAsg7QASgbBUhlQBThmBuh2QBth3BehQQBehPAoARQALAHABAMQAAAthhBmQhhBliHB9QhiBchYBXQhYBXgzBAQhBBcgqBeQgpBdgcBMIgfBOQghBRhHBOQhHBOhnAfQgbAHgaAAQhJAAhFg1g");
	this.shape_6.setTransform(-3.9,-6);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.7,-77.7,147.5,155.5);


// stage content:
(lib.spoonCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.spoon();
	this.instance.setTransform(100,100,1.244,1.244);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;