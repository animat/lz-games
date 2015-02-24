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



(lib.boat2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7B7B7").s().p("AgFgFIAFAAQAAAAAFADIABADIgBAFQgFgGgFgFg");
	this.shape.setTransform(91.8,-33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8E8").s().p("AhnghQAuggAlgXQAhAQAoAmQAoAkALBAIgUAXQhdhThegng");
	this.shape_1.setTransform(50.6,-49.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEFBFF").s().p("AgWAAQACgXAUgDQAUADACAXQgCAYgUACQgUgCgCgYg");
	this.shape_2.setTransform(-35.3,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEFBFF").s().p("AgzAAQAFg1AugFQAwAFAEA1QgEA1gwAFQgugFgFg1g");
	this.shape_3.setTransform(19.9,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEFBFF").s().p("AgaAAQACgcAYgDQAZADACAcQgCAdgZADQgYgDgCgdg");
	this.shape_4.setTransform(59,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEFBFF").s().p("AgmAAQADgpAjgEQAkAEADApQgDAqgkAEQgjgFgDgpg");
	this.shape_5.setTransform(36.2,-6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6F1F4").s().p("AhDgIIArAHQAsAFAvgIQAEADgZAHQgGADgLAAQgdAAhDgRg");
	this.shape_6.setTransform(65.5,-20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6F1F4").s().p("AglgKIAeAKQAdAJAPgJQADAEgMAGQgCABgDAAQgQAAgsgVg");
	this.shape_7.setTransform(-28.3,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6F1F4").s().p("AglgKIAeAKQAdAJAPgJQADAEgMAGQgCABgDAAQgQAAgsgVg");
	this.shape_8.setTransform(-27.9,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6F1F4").s().p("AhBgHIA1AHQAyAGAbgJQAFADgVAGQgGACgKAAQgeAAhEgPg");
	this.shape_9.setTransform(66.5,-19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C6F1F4").s().p("AhZgBIAqABQAnACApgBQArgBAOgKQAEAEghALQgNAGgZAAQgnAAhJgMg");
	this.shape_10.setTransform(51.8,-33);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6F1F4").s().p("AhmgJIAwAGQAsADAvABQAwACAQgKQAHAEggAKQgJADgSAAQguAAhpgTg");
	this.shape_11.setTransform(50.2,-35.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6F1F4").s().p("AiCgOIA8AJQA5AGA8AEQA/AFAVgJQACAEg+AIQgLACgNAAQg8AAh1gdg");
	this.shape_12.setTransform(30.3,-47.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6F1F4").s().p("ABpAGQhTgbhdgCQggACgYAGQgXAHgqAIIAwgUQArgQAWgDQAuAABRAUQBRATBBAoQgLgGhOgcg");
	this.shape_13.setTransform(22.3,-52.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAYQgUgGADgVQAGgWASACQAUAGgCAUQgGAVgQAAIgDAAgAgKAAQgBAQAMAEQAOABAEgPQACgOgOgFIgBAAQgLAAgFANg");
	this.shape_14.setTransform(-35.3,24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggAAQAEggAcgEQAdAEADAgQgDAhgdADQgcgDgEghg");
	this.shape_15.setTransform(-35.3,24.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDFFFF").s().p("AgEAcQgXgHADgYQAHgaAWACQAXAHgDAYQgGAYgTAAIgEAAgAgLAAQgCASAOAFQARACAFgSQACgQgRgFIgCgBQgNAAgEAPg");
	this.shape_16.setTransform(58.9,7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgkAAQADglAhgEQAiAEADAlQgDAmgiAEQghgEgDgmg");
	this.shape_17.setTransform(59,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDFFFF").s().p("AgGAnQgfgKADgiQAKgjAfACQAgAKgEAiQgJAhgbAAIgFAAgAgQAAQgDAaAVAGQAXACAGgYQADgYgWgHIgDAAQgTAAgGAVg");
	this.shape_18.setTransform(36,-6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A9D2D8").s().p("Ah/hAQAXgXAOgtQAOgtAEgVQB+B9BKDyIghAeQhAhpieieg");
	this.shape_19.setTransform(69.4,-15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A9D2D8").s().p("AhxgcQg0gSg0gOQBJgjA2gFQALgCBYAOQBYAOB5A9IgcApQgWAhgVAoQh0hOiQgzg");
	this.shape_20.setTransform(23,-47);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A9D2D8").s().p("AABBLQg1gvg9gmQAWgoAWgiIAcgqQBOAsBNBMIgBAAIgPA4QgPAzgYAZIg6gzg");
	this.shape_21.setTransform(50,-35.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ai1DUQABgJAvhqQAwhnBhhsQBAg4A0gWQAugVAIgBQh4AuhNBjQhPBjgnBZQgmBZgBAHg");
	this.shape_22.setTransform(-15.9,38.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag+gTQAbgIAjgIQAjgIASABIAIAVQAHATgFAEIgmANQghANgiAPQgdgkAJgag");
	this.shape_23.setTransform(-82.5,-46);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AKaEoIAkgcIAGAIIgjAbIgHgHgAJhDqQASgOAWgVIAGAIQgSASgWAQIgGgHgAH9CNQAYgRAZgcIAGAGQgUAZgcAUIgHgGgAF+AoQAageAVgfIAHAHQgSAbgcAgIgIgFgAD1gxQAXgXAcgrIAIAFQgUAfgeAjIgJgFgABTiFQAMgdAagrIAJAEQgcAtgLAbIgIgEgArDkVIAKgBQAFA4AHAcIgJABQgKgjgDgxgAhwjFQAGgqAKghIAKACQgLAigGApIgJgCgAn3kDIgCgrIAJAAIADAtQACAZAEAPIgJAAQgFgRgCgZgAlDjcQAFg0ACgeIAJAAQgBAfgGA0IgJgBg");
	this.shape_24.setTransform(5,-26.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgwAAQAEgyAsgFQAtAFAEAyQgEAzgtAFQgsgFgEgzg");
	this.shape_25.setTransform(36.2,-6.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDFFFF").s().p("AgNAzQgqgPAKgvQAQgvArAIQApAQgJAvQgPAoggAAIgMgCgAgXAAQgGAhAdALQAdAGAMgiQAHgfgegMIgHgBQgXAAgLAcg");
	this.shape_26.setTransform(19.9,-16.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag9AAQAGg+A3gGQA5AGAFA+QgFA+g5AGQg3gGgGg+g");
	this.shape_27.setTransform(19.9,-16);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("ALaC1QhXhriNhuQiMhwjAhMQjvhVjTgDQjTgCiTAeQiSAeguAMQgCABgIARQgIAQAGAYQgcgfAIgZQAJgaAEgBQAugOCRghQCSghDTgCQDTgDDxBQQDvBbCfCPQCeCNBPBzQBPBzAAAHIgNALQgjg+hXhsg");
	this.shape_28.setTransform(-3.7,-22.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AAAAAA").s().p("AKFB+QiRiIjJh0QjKh0jegaQkFgUiyAgQizAghXAmQgZgSgCgXIgBgHQAEgcAHgGIAUgFIASgFQBKgXCRgaQCPgbDAAFQC+AEDWBIQDiBVCaCHQCbCEBSBzQBTBzAKAYIgRASQg1hYiQiJg");
	this.shape_29.setTransform(-3.7,-21.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7A7C7C").s().p("AgHgJQgmglglgRIADgCQAugZADAEIABAAIAHAEQAYANAmAgQAnAhAEAyIAAADQgNAKgdAdQgNg9gjgkg");
	this.shape_30.setTransform(57.8,-52.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1E5E5").s().p("AlzIXQgNgKgFgNIgDgOQAIg/AAg9QgBkyiwj/QhXh6hPhEQhPhDgVgMQBKghCzghQCyghEHAUQDbAZDJB2QDKB1CQCJQCRCJAzBTQg/BNghBIQgfBJgGAVQhVgRidAbQidAbiqAtQiqAuh7AnQh8AmgRAHQgTAGgQAAQgRAAgMgIgAkfhXQgJAsgOARIAIAHQASgYAJg0QAKg0AAgJIgKgCQgCAbgKAsg");
	this.shape_31.setTransform(-3,6.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#686868").s().p("ABTBQQAFgzgYgHQgpAAgXgOQgZgNgigcQgYgcgiARQgPgZgUgTQAjgUA5AIQA7APAmBMIACAEIAEgCQAJgHAiANQAYARgDA2IgBAGIAHgBQACgBAMgBQAMAAAJAIQAFAGAAALIgBAFQgZgWgsgBg");
	this.shape_32.setTransform(77.4,-49.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#585959").s().p("ABjBwIgBAAIgBAAQgJAIghgFQgMgFgDgRIgBgGIgGADQgCACgXAGQgVAFgdgLQgsgVgQhMIAAgBQgDhDgvgnQAkgTA3AIQA9AOAlBNIACADIAEgBQAIgIAkAOQAXASgDA0IgBAHIAHgCQABgBANAAQAMgBAJAJQAFAFAAALQAAAQgLAZIgFALQgOgPgYABg");
	this.shape_33.setTransform(77.3,-47);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AmuJkQgTgiAEgHQAbkvhajQQhbjNh3hzQh3h0g5gaQgxggAKggQAJggAFgCQArgMB/geQB/geC6gLQC6gKDbAvQAmgTAqgQQArgPAfgBQAKgCBIAJQBHAKBoApQA5grAwgcQAwgdARAIIAGAEQAWALAhAbQAmgWBAAIQA/AQApBMQARgHAgAQQAYATAAAxIAAAGQATgFAUAQQAHAJAAAOQAAASgMAbIAAABQADABADAEQADAEAAAGQAAAIgFALIgEAJIgFgJQAAgCgNgPQgMgPgVAAQgNAKglgIQgNgHgEgQQgZAQg4gQQgtgWgShLQghAfgeAjQCYCDBWEYIABAGIgiAgQArBDAAACQhVBcgnBaQgoBbABAHQhRgSiVAbQiWAcimAwQijAwiBAqQiBAqgmALQgfAGgWAAQgrAAgNgWg");

	this.addChild(this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.6,-63.4,187.3,126.9);


// stage content:
(lib.shipCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boat2();
	this.instance.setTransform(100,100,1.043,1.043);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;