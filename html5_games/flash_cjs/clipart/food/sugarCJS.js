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



(lib.sugar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#97B8D3").ss(1,1,1).p("ADph+QhUAMiHAEQiJgDhcgLQhcgMgtgKQgsgLAAgBQgRAyAAA2QAAAvAMAmQANApAVAiQAAACApAPQAqAOBTAOQBSAOB4gCQBvAABSgNQBSgMAtgNQAugOAAAAQAuhQABhVQgBg4gRg0QABABgoALQgnAMhVAMg");
	this.shape.setTransform(0.7,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#E7F3FF"],[0.004,1],0,0,0,0,0,31.5).s().p("AjJCXQhTgOgpgOQgqgPAAgCQgVgigMgpQgNgmAAgvQAAg2ARgyQAAABAsALQAtAKBcAMQBcALCKADQCGgEBUgMQBVgMAngMQAngLAAgBQASA0AAA4QAABVgvBQIguAOQgtANhSAMQhSANhvAAIgdAAQhlAAhIgMgAGMiiIAAAAIAAAAg");
	this.shape_1.setTransform(0.7,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF0CF").s().p("ACgAwQgzgHgxgKQgygLgxgFQglgDgcAEQgcAEgZAIIg6AQQgOAEgbABQgbACgdgCQgdgDgUgHQgVgIgBgQQBZgGBZgSQAUgEANACIAgADQAkABAdgLIBAgXQApgNAvADQAvADAtANQAuANApAOQARAFAcADQAdAEAXAJQAZAHAGATIAAAIQg2AEg6ABIgcABQgrAAgpgFg");
	this.shape_2.setTransform(1.1,-17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#875008").s().p("AjtAgIA6AAQCRgBBIgPQBKgOAAgLQAAgHgcgJQgbgKg2gGQB0AEA7AOQA8ANAAAKQgBAMhKAOQhKAPiOABQhyAAhGgKg");
	this.shape_3.setTransform(6.2,-43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#683E07").ss(1,1,1).p("AEDgYQAoALABANQgBAOgoALQgoALhEAHQhDAHhUAAQhSAAhEgHQhEgHgngLQgpgLgBgOQABgNApgLQAngLBEgHQBEgHBSAAQBUAABDAHQBEAHAoALg");
	this.shape_4.setTransform(0.8,-43.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F640A").s().p("AiVArQhEgHgogLQgpgLgBgOQABgNApgLQAogLBEgHQBDgHBSAAQBUAABCAHQBEAHAoALQApALABANQgBAOgpALQgoALhEAHQhCAHhUAAQhSAAhDgHg");
	this.shape_5.setTransform(0.8,-43.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D3E05").s().p("AhSg8IBSAAIA7AAIAZAAIAAAbIAAAkIAAATQAAAJgqAMQgqALhTAHQAPg9gOg8g");
	this.shape_6.setTransform(21.5,-36.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#683E07").ss(1,1,1).p("AEshGIpXAAIAABaQABAOApAMQAnALBEAHQBEAGBSABQBUAABDgHQBEgHAogLQAogMABgOg");
	this.shape_7.setTransform(0.8,-36.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#844F08").s().p("AiVBAQhEgHgogLQgpgMgBgOIAAhaIJXAAIAABaQgBAOgpAMQgoALhEAHQhCAHhUAAQhSgBhDgGg");
	this.shape_8.setTransform(0.8,-36.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3C2A3").s().p("Ag9DsQg2gDgtgJQgrgJgZgRQgvgggugwQgsgwgdg/QBNAqBTAXQBUAXBSgDQBRgCBIghQBIggA0hAQAjgrAKgyQALgygFg2QA4AHA3gCQAYA7AAA/QAABVguBMQgtBNhYA/QgYARguALQgsALg3AEQgiACgfAAIgrgBg");
	this.shape_9.setTransform(1.8,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5D4B1").s().p("AgxD4Qg2gDgtgJQgsgKgYgQQgsgfgsgsQgrgtgdg7Qgcg4gChJQAAgvANgsQAFgXAKgJQAKgJAZAEQAXAEAYABQAZADAXgDQALgCALgEQALgEAMAAQA8gHBBgFQA/gEA/AAQAnAAAnAFQAnADAmAGIBaAKQAsAFAvgBQAWA6ABA/QgBBWguBLQgtBOhXA+QgZARgtALQgtAKg2AFQgjACghAAIgoAAg");
	this.shape_10.setTransform(0.7,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C5E3FF").s().p("AEPDpQAagwAJg3QAHgzAEgvQACgsgKgoQgKgqgfghQgggig9gZQgfgMgwgHQgwgGg0gCQg2gDgyAAIhTgCQgcAAgiACQgkACgfALQgfALgTAXQA4hKBWgqQBXgrBrgBQBvACBcAxQBcAwA2BTQA2BTACBkQAABTgrBJQgqBMhRA9QAngvAbgxg");
	this.shape_11.setTransform(4.2,-5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7EAACE").ss(1,1,1).p("AGeAJQgBBAgXA4QgXA4gpAwQgoAvg1AlQgaASguALQguAMg3AEQg4AEg1gDQg3gCgugKQgtgKgZgRQg3gngrgwQgsgwgZg5QgZg5gBhCQABhnA3hUQA4hVBdgxQBdgyBzgBQBzABBeAyQBdAxA3BVQA4BUABBng");
	this.shape_12.setTransform(0.7,-2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwFrQg4gCgugKQgsgKgagRQg3gngrgwQgsgwgZg5QgZg5gBhCQABhnA3hUQA4hVBdgxQBegyBygBQBzABBeAyQBdAxA3BVQA4BUABBnQgBBAgWA4QgYA4gpAwQgoAvg1AlQgaASguALQgtAMg4AEQggACgdAAIgvgBg");
	this.shape_13.setTransform(0.7,-2.9);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.8,-49.4,84.9,84.1);


// stage content:
(lib.sugarCJS = function() {
	this.initialize();

	// outline
	this.instance = new lib.sugar("synched",0);
	this.instance.setTransform(100.2,100.1,2.349,2.35,0,0,0,0.7,-7.4);

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;