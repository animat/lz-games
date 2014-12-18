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



(lib.sandal = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AihBgQgTgYAIgcQAUgxBIgqQBHgpAwgUIACAAIABAAQBJAgA3AtIAGAEIgHADQggAMhBAhIgPAIQhDApg/AaQgfANgWAAQgWAAgNgNgAhMgoQhFAogTAvIgCAMQAAAQAMAPQAWAXA+gbQA9gbA+glIAPgJQA6geAggMQgzgqhCgcQgvAThGAog");
	this.shape.setTransform(-20,-11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F7799").s().p("AicBdQgcgpAkgoQAkgmA6gfQA5gfAngPQBHAdA4AuQghAMhAAhQhGAphBAeQglAQgYAAQgUAAgMgLg");
	this.shape_1.setTransform(-20.1,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhfCCQg7gOgFgDIgDgBIAAgDQAGi9Dng0IAJgCQAPgEAJAIQAKAMgBAPIgBAKQAyA2gEAnQAAAQgEANQgbBOhfAYQgiAGgdAAQgkAAgggHgABWh+IgJACQjeAzgHCzQAQAHA2AKQA3AKA9gLQBagXAahIQAQg6g6g6IgCgBIABgDQAEgOgJgRQgDgDgGAAIgHABg");
	this.shape_2.setTransform(-7.6,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#163B59").s().p("AhfB9Qg7gNgEgDQAHhjAzgxQA0gyA3gTQA4gTAVgDQAZgEACAUQABATgBADQBHBNgkA9QgkA/hMARQgiAGgdAAQgjAAgfgHg");
	this.shape_3.setTransform(-7.6,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAfCjQhNgLhZg9QhYg+gkhDQgOgfASgcQAug/CUgCQBwAHBkApQBkAoAIAHIAIAEIgIAEQiGBIgvBGQguBGADAGIgBAEgAj4hcQgJANAAAOQAAAMAGALQAiBBBVA7QBVA8BLALQADgTAwhCQAwhCB5hBQgfgRhbgiQhbgihggFQiPABgsA8g");
	this.shape_4.setTransform(-52.8,-16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#163B59").s().p("AiBBYQhYg8gkhEQgUgvA1gjQA0giBtgBQBwAGBkApQBkApAHAGQiKBKguBHQguBHADAFQhKgKhYg8g");
	this.shape_5.setTransform(-53,-16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A6289").s().p("ABNEAQiAg2h7hPQh8hQhDg2Qg8gwgegjQgdgiAEgkQgEgIAhg4QAgg4B6gMQCvABBtA0QBrAzADAIQBRgRBRA3QBQA4ApAgQAiAZgEAQQgEARgCAAQACAAAWAMQAXAOAUArQAXAwgcBCQgbBDiRArQgWAEgYAAQhKAAhhgpg");
	this.shape_6.setTransform(-35.3,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABSERQiDg3iAhSQh/hThMg9Qg6gvgfgjQgfgjAAgkIAAgKQgEgJAjg8QAjg8B/gNQCrABBwAyQBuAyAPAQQBEgQBGAoQBFAnAxApQAWASAPAKQAfAUACAWIABAEQgBALgEAFQAcACAnBGQAJAVACAlQABAdgQAhQgpBRiMAmQgXAFgaAAQhLAAhjgpg");
	this.shape_7.setTransform(-36,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABsBrQgWgLgZgYQgqgqhJgeQhsgcgNAJIgDgGIgBgBQAIgJA3gmQA3gmAvABQBbAJBBA+QAnAmgBAnQAAAigdAbQgNAMgOAAQgIAAgIgEgAgzgHQBLAeAqArQA0A1AbgbQAagYABgeQAAglgkgiQg/g7hYgJQgjgCgtAbQgsAcgYAUIAIAAQAjAABFAVg");
	this.shape_8.setTransform(24.8,-25.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4F7799").s().p("ABJBNQgsgthRgjQhzgdgJAKQAGgHA2gmQA3gmAvAAQBTAHBHA+QAdAdAHAiQAGAjghAiQgMAKgOAAQgXAAgbgdgAiwgWIAAAAIAAAAg");
	this.shape_9.setTransform(24.8,-25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZB8Qgshug2gdQg3gggGAEIgLgCIAKgGQAGgGAzgcQAygbA7gNQA8gNAmAnQAfAsgYAzQgYAxglAmQgkAmgHAFIgFAEgAgGhqQhRAggjAZQAYAEAuAjQAvAhAkBcQAUgQApgxQAogxAFgzQABgXgQgUQgdgagnAAQgdAAgfANg");
	this.shape_10.setTransform(47.1,-31.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#163B59").s().p("AhMgTQg4gfgFAEQADgDAygcQAxgcA7gOQA9gOAkAmQAfArgZAzQgaAxgkAlQgkAlgEACQgthxg4geg");
	this.shape_11.setTransform(47.5,-31.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWCBQhYgEg0ghQgqglADg0QADgyAEgIQAAgEANgUQAMgVAfgRQA0gYBJAeQBlAxAPBFQAPBHgFAIIAAABIgBABQgoAphRAAIgNAAgAhahtQgcAQgMATQgLATAAACQgEAGgDAvQgEAyAnAiQAyAgBUAEQBWADApgoIABgOQADgfgXg0QgWg1hQgkQglgQghAAQgZAAgWAKg");
	this.shape_12.setTransform(15.3,-12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#163B59").s().p("AAWB8QhXgEgzggQgogkADg0QAEgxAEgGQgDgIAmgnQAlgnBmAiQBkAwAPBEQAOBFgGAHQgmAnhPAAIgNAAg");
	this.shape_13.setTransform(15.3,-12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A6289").s().p("AjBD3QiEgqgGhtQgFhrBghZQBihLBDAEQBEAFADAHQA/gyBegfQBegfA6A4QAtA5geBAQgdBAhEBAQhEBChDA+QhlBXhXACIgqABQgvAAgEgFg");
	this.shape_14.setTransform(31.2,-20.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjMEKQh3ghgZhnQgOg/AZhAQAZg+A5gyQBfhKBGAAQBGAAAPALQBBg0BkghQBlgiBAA+QA9BShEBdQhEBchnBZIgzAwQhqBbheADIgyABQgtAAgFgEg");
	this.shape_15.setTransform(31.2,-20.9);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.2,-47.9,152.8,75.6);


// stage content:
(lib.sandalsCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sandal();
	this.instance.setTransform(112.6,113,1.28,1.28);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;