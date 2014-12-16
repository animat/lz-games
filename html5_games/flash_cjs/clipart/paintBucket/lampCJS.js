(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 170,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.lamp = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANQgVQAGATALAGQALAJApABQApABAIgPQAIgRAAgaQAAgZAAgRQgBgQgEgIANQgVQACgDADgDAI5AEQAEAGAvAmQAvAnAxgBQAwgCAigZQAjgZAPg3ANMgtQAAAGABAGQABAHACAFAsGgdQgkApgUALQgTALgigKQgigKgVgPQgWgSgIhKQgEgFgBgFAsGgdQAHAEA7A4QAuArAhAAQBBAABKhHQADADAvA2QAdAiAdAAQAdAAArgdQAkgZAKgQAsGgdQAAAAAAAAAkDAYIA8A8QAIAIA3ACQA3AAAbgPQAXgNAbgqAnpACQAAABgBAAAEcAOQgBABAAAAQgBACgBACQgeAwgeATQgkAXg/AAQgjAAgagbQgsgugRgMAEhAYQA6ApAaAZQAHAPA4AEQA5AEATgWQATgWAhg8");
	this.shape.setTransform(97.6,156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("An4qAQAAgdCBgVQCBgUC2AAQC1AACAAUQBxASAOAZQABABABACQAAACAAACQAAAdiBAUQhRANhmAFQg8ADhCAAQi2AAiBgVQiBgUAAgdIm6VHAOzLCIo81DIgBgD");
	this.shape_1.setTransform(96.5,71.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.239)").ss(1,1,1).p("ABhgyQBnABBeAEQDdAJCvAXQDEAZA9AhAuyAzQA2glDUgbQDyggFIgF");
	this.shape_2.setTransform(96.5,137.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AOuhPQAcAPAAAQQAAAkh5AaQAAAAgBAAQhAAPhiANQg2AIg6AFQgDABgDAAQhsALh7AGQgXABgYABQgCAAgCAAQiFAFiUAAQgDAAgCAAQiFAAh5gEQgCAAgCAAQh3gEhqgIQgBgBgBABQhqgJhegNQgtgGgngGIAAAAQilgcgdgiAvIgpQgBgDAAgEQAAgNASgN");
	this.shape_3.setTransform(97,149.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.502)").s().p("Ak2AxQiBgVAAgcQAAgcCBgUQCBgVC1AAQC2AACBAVQBxASAOAYIABAEIABACQgBAciAAVQhRANhnAFQg8ADhDAAQi1gBiBgUg");
	this.shape_4.setTransform(90,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AGyBtQg5gEgHgPQgagZg5gpIgJgFIADgEIgDAEQgdAwgfATQgkAXg/AAQgiAAgbgbQgsgugQgMIgEAAIAEgFQCTAACFgFIADABIABgBIAvgDQB7gGBsgIIAGgBQA6gGA1gHQBjgNBAgPIABAAQB5gdAAgjIAEAAQAFAIAAAQIABAqQAAAagJARQgIAPgpgBQgogBgLgJQgMgGgGgTIAFgGIgFAGIgDgMIgBgMIABAMIADAMQgPA3giAZQgiAZgxACQgwABgwgnQgvgmgDgGIgGABIAAAEQghA8gTAWQgQATgrAAIgQgBgAjKBUIg8g8IgEAAIAEgJQB5AECHAAIAAAFQgcAqgWANQgbAPg4AAQg2gCgJgIgAm7A8Igxg5IABgBQBqAJB3AEIAAAJQgLAQgjAZQgrAdgdAAQgeAAgdgigArGAfQg8g4gHgEIAAAAIBVAMQBdANBrAGIAAABQhLBHhBAAQghAAgtgrgAt1AYQgigKgWgPQgVgSgIhKQAcAjClAdIAAAAQgkApgTALQgKAGgPAAQgMAAgQgFgANNgVIAAAAg");
	this.shape_5.setTransform(97.8,156);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AjfH4QDdAJCtAYQDEAaA9AiQAbAPABAQQAAAkh5AcIgBAAQhAAPhjANQg1AIg6AGIgGAAQhqALh7AGgACrIZQitgYjdgJIjoyiQBngFBRgNQCAgVABgcIAAgBII6VDQg9gijEgagAjfH4IAAAAg");
	this.shape_6.setTransform(148.4,82.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AE8LzQiGAAh5gFIgFAAQh1gEhqgIIgBAAQhrgJhdgNIhUgMIgBAAQikgcgdgkQgEgFgBgEIgBgHQAAgNASgNQA1glDVgcQDyghFGgFQlGAFjyAhQjVAcg1AlIG61HQAAAcCAAVQB/AUC3ABQBDAAA9gDIDnSiIAwD3IgvACIgEAAQiEAFiVABIgFAAgAJdH0QhegEhngBQBnABBeAEg");
	this.shape_7.setTransform(65.4,82.5);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,197,169.1);


// stage content:
(lib.lampCJS = function() {
	this.initialize();

	// Layer 1
	this.colorMe = new lib.lamp();
	this.colorMe.setTransform(101.7,51.8,0.554,0.554,0,0,0,97,79);
	this.colorMe.alpha = 0.66;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgOgBQANACAQAB");
	this.shape.setTransform(99.2,61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(1,1,1).p("AgiCzQgjgqgQgnQgjhWAAg2QAAg5AogoQAhgiAtgFAACiyQAtAFAhAiQAoAoABA5QAAA2gkBWQgQAngkAq");
	this.shape_1.setTransform(101.1,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("AhFjvQAPgBAPgJIA7EkIATA2IAcBvIADAMQgpAYg8AGg");
	this.shape_2.setTransform(108.7,124.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("AheBqIgGgCQhHgQg8gXQg8gXgRgyIAAAAIABgBQA9AlBeAAQAXAAAWgDQA+gGApgWIgDgLQALhGAUgkQBQAJBEASIAKADIAFACQB0AjAHAwIAAAIIgIATQgZAmhpAeQhMAVhcAJIgKABQgXAAhBgPg");
	this.shape_3.setTransform(116.3,146.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C2D0C").s().p("Ai9BaQhpgegYgmIgIgbQAGgzCDglQBjgbB+gHIgoB2IgBABIAAAAQAQAyA8AXQA7AXBHAQIAGACQBCAPAWAAQgtAEgwACIgBAAIg7ABQjBgBiKglgAEKh+QAgACAdAEQgUAkgNBGg");
	this.shape_4.setTransform(86,146.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C320D").s().p("AlLGtQiEgkgGgzIAAg8IAIAeQAZAmBpAdQCJAmDCAAIA6gBIACAAQAwgBAtgEIALgCQBdgJBMgVQBogdAZgmIAIgUIAAAyQgGAziDAkQiLAmjCABQjCgBiJgmgAgai4IhYg9QBnAqCPgqIhYA9QgPAJgPABIgHABQgPAAgSgLgAggk4IgriZIAAAAQANAXBDAFQAyABAXgNIAPgRIgsCaQgVARgUAAQgTAAgVgRg");
	this.shape_5.setTransform(100.3,117.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB4311").s().p("Aj3FzIAph3IATg1IA8kjQAVANAVgDIAmHpQgWACgXAAQhfAAg8gmgADyEiQAJgDgEAEgAjXiZIBThDQApAhApghIBRBDQhGAVg+AAQg+AAg0gVgAhelZQhEgFgNgXIgBgCQgHgQA5gRIAAAWQAPANARAFIAGAAQAQgFAPgNIAAgWQA2APgCASIgQASQgWAMgvAAIgEAAg");
	this.shape_6.setTransform(110.3,108.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660033").s().p("AgBA1QgRgGgPgMIAAgXIAAg/IABAAQANADASABIADAAQASgBAOgDIAAA/IAAAXQgPAMgRAGg");
	this.shape_7.setTransform(101.1,66.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AgCC2QgSgBgNgEIgBAAQgjgqgQgnQgjhWAAg3QAAg5AogoQAhghAtgGIAEAAQAtAGAhAhQAoAoABA5QAAA3gkBWQgQAngkAqQgOAEgRABg");
	this.shape_8.setTransform(101.1,43.4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.colorMe);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(147.7,92.7,108.6,156.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;