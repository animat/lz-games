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



(lib.shoes2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlUGgQiTgNg/gQQg6gPg0gkQg0glgEgcQgDgKASgIQAegLBggwQBggwBig0ICHhHQA2gVBBAOQAmAHAXgEIARgEIgeAfIgTAAQgcABgYADQgYADgEAJQAAAPBAAeQBPAdBmgWQBngWBohVIAcgfIAdghQAxg+BKg+QBLg+BAguQBBguAUgNQAOgKgBgOQgBgSgMgPIgJgOIAQAGQAIAEAFAFQAgAmgUAnQgUAogtAxIgvA3QgnA2gUBkQgVBhgHBUQgIBUABAHIAAAEIgFAAQgjAAgIgCQgIgCAAgEIAAgBIABgBQgHgpAAgrQAChgAShNQAThQAKgcQguALgqAmIgOAOIggAlIgKAOIgRAXIgLAQIhEB2QgmBFgtBJQhEBfiRAYQhiAQhiAAQgyAAgxgEgAjyAgIh/BDIjGBmQhjAyggALQgLAFADAEQAEAWAxAjQAyAjA3AOQA/AQCRANQCQANCSgYQCQgXBChcQAshJAmhFIA1hcIAGgLIAHgLIAOgVIADgDIAKgPIAEgFIAKgOIATgWIALgOIADgCIAPgPQAvgqA2gMIAJgBIgDAIQgEAGgXBWQgWBUgDBvQAAAqAHAoQADACAgAAQABgYAIhUQAIhTAVhbQAUhcAmg0IAvg4QBChEAFgtQAAgPgKgOQADAIAAAIQAAATgSAMQgUANhFA3QhFA2hPBHQhPBGgxA+IAAAAIgmAdQhmBUiAAjQh/AihKg1QgmgfAAgTIABgFQARgZBJACIAPAAIAFgGQgVABgdgFQgbgFgYAAQghAAgeALg");
	this.shape.setTransform(8.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C10000").s().p("AliGXQiSgPgygNQhFgTg4gtQg4gtAfgQQAfgKBhgxQBigxBig0ICDhGQAqgSA1AJQA1AKAggEIgQARQg8AAggAKQggAKA5AyQBFAyB9ghQB/ggBohVIAlgdQAxg+BPhHQBPhHBGg2QBFg3AUgNQASgOgDgSQgDgSgKgOQAHADAEAEQAmAsglAxQglAxhABJQgnA3gVBlQgUBjgIBUQgHBUAAAFQgnAAgEgCQgBgBgBAAQAAgBgBAAQAAAAAAAAQABgBAAAAQgRiDAdh0QAch2AFgIQg3ANgrAoIgPAOIgCADIgMANIgEAEIgKANIgEAFIgKAOIgEAFIgKAPIgEADIgKAQIgDAFIgMASIgBADQg8BrhMB/QhGBhiWAXQhdANhaAAQg6AAg4gFg");
	this.shape_1.setTransform(8.8,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AleGrQiWgNhCgRQg7gPg1gmQg2glgEgdQgDgKATgJQAegKBjgyQBigyBlg1ICLhJQA4gVBCAOQAtAIAXgGQAhgPBRg5QBTg7BShNQAzgvBZg4QBYg4BbgoQBagoA2gBQAaABAMANQAiAngVAoQgUApgvAzIgxA5QgnA3gVBmQgVBlgIBWQgIBWABAHIAAAFIgFAAQgkAAgJgDQgIgCABgDIAAgCIAAgBQgHgqAAgsQAChiAThQQAThRALgeQhNAWg4BLQg5BKg5BrQgnBHguBLQhGBiiWAZQhkAQhkAAQgzAAg0gEgAj4AgIiDBFQhlA2hnAzQhmA0ggALQgLAFACAEQAEAXAzAkQAzAjA5AQQBAAQCVANQCVANCWgYQCTgYBEhfQAuhLAnhHQA8hwA7hMQA8hOBUgUIAJgCIgDAJQgEAGgXBYQgXBXgEByQAAArAHApQAEACAhAAQABgZAIhWQAIhVAWhdQAVhgAmg1IAxg5QBEhGAFguQAAgVgTgUQgJgKgVAAQg1AAhZAoQhZAnhXA3QhYA4gyAuQhTBOhTA8QhSA5giAPQgaAIgvgIQgbgHgZAAQgjAAgdAMg");
	this.shape_2.setTransform(8.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlUGpQiVgMhAgRQg6gPg3gmQg4gmgFgiQAAgVAXgIQAdgKBggwIDBhjICGhIQA7gUBDANQAoAHAUgFQAggMBOg5QBQg5BPhKQAygvBYg3QBXg3BZgnQBZgoA3AAQAdABAOAQQAlAqgVArQgVArgvAzIgvA3QglA0gUBiQgUBhgIBTQgHBTAAAGIAAAPIgPAAQg/ACADgSIAAgDIAAgCQgHgnAAgtQAChSAOhGQAPhIANgoQhBAagxBGQgyBDg0BgQgmBFgtBKQhFBhiUAZQhlARhjAAQgyAAgxgEgAqFFBQAtAfA2APQA+AQCPAMQCOANCQgWQCNgXBBhZQAshIAmhGQA7hvA7hLQA7hNBVgUIAbgFIgJAZQgEAFgWBWQgXBTgDBtQAAAnAGAjIARAAQACgnAJhSQAJhTAVhTQAUhWAlgxIAvg4QBAhCAEgoQABgRgQgQQgGgHgQAAQgzAAhVAmQhVAmhTA2QhUA1gwAtQhSBLhSA7QhRA5ghAOQgdAKgvgJQg9gNguARIiABDQhjA0hjAzQhkAyggALIgBAAQAFASAuAgg");
	this.shape_3.setTransform(8.8,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5C3C3").s().p("AliGZQiSgPgygNQhFgTg4gtQg4gtAfgQQAfgKBhgxIDEhlICDhGQAtgSA3AKQA4ALAdgIQAfgNBPg3QBRg6BShNQA5g1Bmg+QBmg+BegjQBdgjAgAbQAmAsglAxQglAxhABJQgnA3gVBlQgUBjgIBUQgHBUAAAFQgnAAgEgCQgBgBgBAAQAAgBgBAAQAAAAAAAAQABgBAAAAQgRiEAdhzQAch2AFgIQhoAbhHB1QhGB3haCbQhGBhiWAWQhdAOhcAAQg4AAg4gFg");
	this.shape_4.setTransform(8.8,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABZBBQg7hAgugnQhAgwhMgcQhMgcgpgKIgEgBQgSgEgGgOQgBgLASgKIABAAIABAAIAMgBIAKAAQBsgEBZAqQBWAqA9A2QA9A2AYAcQAtAzAmAmIAuAsIAEADIgDAEQgQASgdANIgGABQgrAAh0iCgAkDi3IgVABQgMAHABADIAAAAQgDACATAHIAFABQApAKBNAdQBNAdBCAwQAuAqA7A+QAvAzAsAoQArAoAUgEQAYgKAOgQIgygvQgkgkgoguQgYgeg8gzQg8g1hVgqQhPgmhfAAIgSABg");
	this.shape_5.setTransform(-46.7,-22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5C3C3").s().p("AC4CXQgvgsg2g5Qg1g4gpgkQhDgyhPgcQhOgdgogKQgXgHAEgIQAEgJAKgFIAWgBQCbgCBuBPQBxBPAvA7QAtA0AnAlIAtAsQgQATgbALIgFABQgXAAgpgng");
	this.shape_6.setTransform(-46.8,-22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C10000").s().p("ACVEuQhCAAg3guQg1gvgmh4Qgth5hLhDQhLhCgIgBQAaBGALBTQAKBRACA9IABA/IgHAKIgkgDQAJiGgqiDQgriFg6gyQgtgoAkgIQAlgHAJACQCbgCBwBPQBvBPAvA8QAvA3AoAkIArApIArgUQAlA+BCAuQBCAuAIACQgHBZheATQhHAOg7AAQgUAAgTgCg");
	this.shape_7.setTransform(-37,-11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACiFJQiqgEhHjkQghheg2g5Qg2g7gngaQAdBOANB7IADAoQACAlAAAjQgGAcgJAIIgLAOIg5gFIABgKQAKiMgtiHQgtiJg+gzQgJgGgOgPQgNgPAHgRQAPgSAegCIAggBIgCgBQB3gEBiAtQBiAtBDA5QBBA5AbAgQBPBeAXAWIAdgNIAVgHIAaAoQAoA+BMAoQBMAoAJACIAGADIAAAGQABAxgiAgQg4AuhXAHQg6AEgnAAIgigBg");
	this.shape_8.setTransform(-35.7,-10.1);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.6,-43.2,165.3,86.5);


// stage content:
(lib.heeledshoesCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shoes2();
	this.instance.setTransform(100,100,1.185,1.185);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;