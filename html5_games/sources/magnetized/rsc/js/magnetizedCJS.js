(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"rsc/mma/Bitmap1.png", id:"Bitmap1"},
		{src:"rsc/mma/Bitmap1_1.png", id:"Bitmap1_1"},
		{src:"rsc/mma/Bitmap2.png", id:"Bitmap2"},
		{src:"rsc/mma/Bitmap2_1.png", id:"Bitmap2_1"},
		{src:"rsc/mma/Bitmap3.png", id:"Bitmap3"},
		{src:"rsc/mma/Bitmap3_1.png", id:"Bitmap3_1"},
		{src:"rsc/mma/Bitmap4.png", id:"Bitmap4"},
		{src:"rsc/mma/Bitmap4_1.png", id:"Bitmap4_1"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,721,670);


(lib.Bitmap1_1 = function() {
	this.initialize(img.Bitmap1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,100);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,721,670);


(lib.Bitmap2_1 = function() {
	this.initialize(img.Bitmap2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,95);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,721,670);


(lib.Bitmap3_1 = function() {
	this.initialize(img.Bitmap3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,86);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,721,670);


(lib.Bitmap4_1 = function() {
	this.initialize(img.Bitmap4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,106);


(lib.underline = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,2,1,3,true).p("Ah3AAIDvAA");
	this.shape.setTransform(12,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,26,2);


(lib.tytle = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Magnetized", "58px 'Arial'");
	this.text.lineHeight = 60;
	this.text.lineWidth = 371;
	this.text.setTransform(-351.9,-161);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-354.9,-164,384,79);


(lib.tombol = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(188,34,34,0.592)").s().p("AhEEUQhhgOhUgwQhUgxg9hOQg9hNgbhjQgShDABhDQAEAhAJAiQAbBlA9BLQA9BOBUAwQBUAxBhAOQBgAOBlgaQBTgXBEguQBEguAxhAQAxg+AbhNQAbhMABhTQALBdgWBXQgVBXgxBHQgxBKhJA2QhJA1hcAZQhCARg/AAQgiAAgigFg");
	this.shape.setTransform(-1.3,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,201,67,0.522)").s().p("AHbBtQgZhdg6hNQg6hPhag1Qhag0higNQhggMhdAZQheAYhQA7QhPA6g1BaQgrBIgQBPQAMhjA1haQA2hZBPg7QBPg6BegZQBegYBgAMQBhAMBbA1QBHAqA0A7QAzA7AfBGQAfBFAIBNQAJBNgQBNQAMhigZhdg");
	this.shape_1.setTransform(-1,-18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BF0030","#FFEE00"],[0,1],-25.3,43.2,25.3,-43.2).s().p("AhmHqQhNgRhJgqQhIgqg0g7Qg0g8gehIQgfhGgIhOQgIhLARhNQAQhOAphIQArhIA7g0QA8gzBHgfQBIgfBMgIQBMgIBNARQBOAPBHAqQBJArA0A8QAzA7AfBHQAeBHAJBOQAIBLgQBNQgRBOgqBHQgqBJg7AzQg8A1hIAeQhHAfhMAIQgaADgZAAQgyAAg0gLg");
	this.shape_2.setTransform(-1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BCBCBC").s().p("AhrISQhQgShLgtQhKgug2hBQg2hAgghNQgghNgIhTQgIhSARhUQAQhTAshOQAshOA+g4QA+g4BKghQBKgiBQgIQBOgJBQASQBRARBLAuQBKAtA2BBQA2BAAfBNQAhBNAIBUQAIBRgQBUQgRBTgsBPQgsBNg+A4Qg+A4hKAhQhKAhhQAJQgaADgaAAQg0AAg3gLg");
	this.shape_3.setTransform(-0.9,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2E2E2").s().p("AIKFsQAkhnABhzQgBiJgzh2Qgzh3hahaQhbhbh3gzQh4gziHgBQhiABhZAaQhZAahNAxQhNAxg8BDQA9hOBQg5QBRg6BhgfQBggfBqgBQCIABB3A0QB3AzBbBaQBaBbAzB3QAzB3ABCHQAACBgtBwQgtBxhQBYQBChUAkhmg");
	this.shape_4.setTransform(5.7,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-66,0,66,0).s().p("Aj/JgQh4gzhahbQhbhagyh3Qgzh4gBiJQABiIAzh3QAyh3BbhbQBahaB4gzQB3g0CIgBQCJABB4A0QB3AzBbBaQBaBbAzB3QAyB3ABCIQgBCJgyB4QgzB3haBaQhbBbh3AzQh4AziJABQiIgBh3gzg");
	this.shape_5.setTransform(-1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3A3A3").s().p("Aj/JfQh4gzhahZQhbhbgyh4Qgzh3gBiJQABiIAzh4QAyh3BbhaQBahaB4g0QB3gzCIgBQCJABB4AzQB3A0BaBaQBbBaAzB3QAyB4ABCIQgBCJgyB3QgzB4hbBbQhaBah3AyQh4A0iJAAQiIAAh3g0g");
	this.shape_6.setTransform(-0.3,5.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.2,-64.8,132.9,135.9);


(lib.Symbol59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQABgDADgBQAEABABADQgBAEgEABQgDgBgBgEg");
	this.shape.setTransform(0.6,0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Symbol58 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CE7FC").s().p("AgFAOQgDgGAAgIQAAgHADgFQADgHACAAQAEAAACAHQADAFAAAHQAAAIgDAGQgCAGgEgBQgCABgDgGg");
	this.shape.setTransform(1,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,4);


(lib.Symbol57 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQABgDADgBQAEABABADQgBAEgEABQgDgBgBgEg");
	this.shape.setTransform(0.6,0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Symbol56 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CE7FC").s().p("AgFAOQgDgGAAgIQAAgHADgFQADgHACAAQAEAAACAHQADAFAAAHQAAAIgDAGQgCAGgEgBQgCABgDgGg");
	this.shape.setTransform(1,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,4);


(lib.Symbol55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQABgHAHgBQAIABABAHQgBAIgIABQgHgBgBgIg");
	this.shape.setTransform(1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.9);


(lib.Symbol54 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQABgHAHgBQAIABABAHQgBAIgIABQgHgBgBgIg");
	this.shape.setTransform(1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.9);


(lib.Symbol53 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQABgHAHgBQAIABABAHQgBAIgIABQgHgBgBgIg");
	this.shape.setTransform(1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.9);


(lib.Symbol52 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQABgHAHgBQAIABABAHQgBAIgIABQgHgBgBgIg");
	this.shape.setTransform(1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.9);


(lib.Symbol51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQABgHAHgBQAIABABAHQgBAIgIABQgHgBgBgIg");
	this.shape.setTransform(1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.9);


(lib.Symbol50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQABgHAHgBQAIABABAHQgBAIgIABQgHgBgBgIg");
	this.shape.setTransform(1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.9);


(lib.Symbol49 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQABgHAHgBQAIABABAHQgBAIgIABQgHgBgBgIg");
	this.shape.setTransform(1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.9);


(lib.Symbol48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQABgHAHgBQAIABABAHQgBAIgIABQgHgBgBgIg");
	this.shape.setTransform(1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,1.9);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgopACMMBQmgHzQAeANAJAUQAJATgFAWQgEAWgKAUQgKATgJAMIgKAOMhQmAIug");
	this.shape.setTransform(260.2,36);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,520.5,72);


(lib.Symbol39 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhrCPQgSgYASg3QATg3Atg8QAtg8ArgaQArgZAUAUQASAYgSA4QgSA3guA7QgtA8grAaQgYAOgRAAQgNAAgJgJg");
	mask.setTransform(294.2,43.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap4_1, null, new cjs.Matrix2D(1,0,0,1,-42.3,-53)).s().p("AiDHvQiehChTjEQhMjJA1jEQA1jFCdhpQChheCcBCQCeBCBUDEQBLDJg1DEQg0DGidBoQhfA3hcAAQhCAAhBgbg");
	this.shape.setTransform(286.5,23.9);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(282.5,28.4,23.5,30.5);


(lib.Symbol38 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhrCPQgSgYASg3QATg3Atg8QAtg8ArgaQArgZAUAUQASAYgSA3QgSA4guA7QgtA8grAaQgYAOgRAAQgNAAgJgJg");
	mask.setTransform(304.5,44.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap3_1, null, new cjs.Matrix2D(1,0,0,1,-34.6,-42.7)).s().p("Ah+GLQh+hAg8ilQg2imAzieQAzieCEhLQCFhCB+A/QB+BAA8ClQA2CmgzCeQgzCeiEBLQhFAihBAAQg/AAg+gfg");
	this.shape.setTransform(299.9,25.6);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(292.8,29.4,23.5,30.5);


(lib.Symbol37 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhrCPQgSgYASg3QATg3Atg8QAtg8ArgaQArgZAUAUQASAYgSA3QgSA4guA7QgtA8grAaQgYAOgRAAQgNAAgJgJg");
	mask.setTransform(315.5,45.5);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap2_1, null, new cjs.Matrix2D(1,0,0,1,-38.3,-47.7)).s().p("AitGiQiGhXg0i+Qgsi/BFinQBGinCYhBQCZg3CFBXQCGBXA0C+QAtC/hGCnQhGCniYBBQg8AVg3AAQhaAAhRg1g");
	this.shape.setTransform(310.6,25.6);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(303.8,30.3,23.5,30.5);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhnBJQgugNgGggQgCgfAqgdQApgdBDgNQBAgLAvANQAvANAFAgQACAegqAeQgpAdhDANQgcAFgbAAQgfAAgZgHg");
	mask.setTransform(330.2,51.9);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap1_1, null, new cjs.Matrix2D(1,0,0,1,-40.7,-49.7)).s().p("AhTHkQikgyhWinQhVimAfjNQApjNCFhrQCFhrCkAoQCkAyBWCmQBVCnggDNQgoDNiFBrQhiBOhyAAQgoAAgtgLg");
	this.shape.setTransform(334,25.6);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(314.6,43.9,31.3,16.2);


(lib.Symbol35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7CADBA").s().p("Ak5BKQh9gegFgsQAFgrB9geQB+geC7gBQC9ABB9AeQB9AeAFArQgFAsh9AeQh9Aei9AAQi7AAh+geg");
	this.shape.setTransform(44.5,10.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,88.9,21);


(lib.Symbol34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9CBBC5").s().p("AmQB4QBKADBPgDQDvgICqglQCsglAHgzQgGgnhkgfQhkgfiLgMQCwAGBwAeQBwAdAFAtQgEA0icApQicAojrAJIhOABQhbAAhRgHg");
	this.shape.setTransform(40.1,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.3,25.5);


(lib.Symbol33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAh2IgNAPIAADGQABAAAMAFQAJAFAFAO");
	this.shape.setTransform(1.6,12);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,5,25.9);


(lib.Symbol32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("Ag3goIBuhmIhmBpIAAC0g");
	this.shape.setTransform(5.6,14.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,28.7);


(lib.Symbol31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4g8IAHgBIh9B7g");
	this.shape.setTransform(6.4,6.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,12.5);


(lib.Symbol30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3C8QgXgEgBgCQAagcAFAFIgEjIIibiTIAJAGICXCLIACDKQgYAOgCAGQAVAKATgDIATgEQgPAHgPAAIgNgBg");
	this.shape.setTransform(9.9,18.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,37.9);


(lib.Symbol29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2AdQgvgMgCgRQABgNAlgLQAkgLA5gEIAHAHQh6AKgFAWQAHAbCVAHQCXgHAGgbQgGgaiXgHIgUABIgFgHIAZgBQBHABAvALQAwAMACAQQgCARgwAMQgvALhHABQhGgBgwgLg");
	this.shape.setTransform(16.9,4.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.7,8.3);


(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99BC9A").s().p("AgRg0IAKgCIAZBtg");
	this.shape.setTransform(1.8,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.7,11.2);


(lib.Symbol27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99BC9A").s().p("Agpg7IAZAHIA6Bvg");
	this.shape.setTransform(4.3,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.5,12);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F7A40").s().p("AgeAOQhJgCgYgHIARACQBBAIA1gEQA1gHgagDQggAAgTADQgnAAgIgEQgIgDAVgFQBYgKAyAJQAeAEAKAFQgUgIg8gDQhbgBgNAIQABADAMABIAtgDQAaABAbACQgCAIgbADQgWADgZAAIgJAAg");
	this.shape.setTransform(13.8,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,25.7,2.9);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AigAHQAJgIAkgOQAlgNBPgDQBHgEAlANQAnANANAKIgIAFQgFAAg0gQQhQgPhDAKQhFALgMAVIAPAQQgYgKgTgQg");
	this.shape.setTransform(16.1,3.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.2,6.7);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AiggBQAJgJAkgOQAlgOBPgDQBHgDAlANQAnAMANANQhJAphaAHIgVAAQhPAAg6grg");
	this.shape.setTransform(16.1,4.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.2,8.6);


(lib.Symbol23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AgYDTQAAgCAHgKQAIgKAMgCIgCjIIioicQgDgCAigTQAhgTBngFQBhgDAkAXQAlAWgCADIibCeIAADGQAOADAIAKQAIAJAAACQAGACgoACQgngCAGgCg");
	this.shape.setTransform(16.8,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.7,43.2);


(lib.Symbol22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAhqIgMANIAACzQABgBALAFQAIAFAFAM");
	this.shape.setTransform(1.4,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,4.7,23.5);


(lib.Symbol21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AgxgkIBjhcIhdBfIAACig");
	this.shape.setTransform(5.1,12.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.1,25.9);


(lib.Symbol20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyg2IAHgBIhxBvg");
	this.shape.setTransform(5.8,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.5,11.3);


(lib.Symbol19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxCpIgWgFQAYgaAEAFIgDi0IiMiEIAIAFICIB9IACC2QgVAMgCAGQATAJARgDIASgDQgPAGgOAAIgLgBg");
	this.shape.setTransform(8.9,17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,34.1);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqAaQgrgLgBgPQAIgbBugIIAGAGQhuAKgEATQAFAYCHAGQCHgGAGgYQgFgXiIgGIgSAAIgEgGIAWgBQBAABArAKQArALABAOQgBAPgrALQgrAKhAABQg/gBgrgKg");
	this.shape.setTransform(15.2,3.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.4,7.5);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99BC9A").s().p("AgPgvIAIgCIAXBjg");
	this.shape.setTransform(1.7,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.3,10.1);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99BC9A").s().p("Aglg1IAXAHIA0Bkg");
	this.shape.setTransform(3.9,5.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.7,10.8);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F7A40").s().p("AgbAMQhCgBgVgGIAPACQA7AHAvgEQAwgHgYgCQgcAAgSACQgiAAgIgDQgHgDATgEQBPgJAtAIQAbADAJAFQgSgHg2gDQhSgBgMAIQACACAKABIAogCQAYAAAYACQgBAIgYACQgUADgVAAIgKgBg");
	this.shape.setTransform(12.4,1.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,0,23.2,2.6);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AiQAGQAIgHAggMQAhgNBIgCQBAgDAiALQAiAMALAJIgHAEQgEAAgugOQhJgOg7AKQg+AJgLATIANAPQgWgJgRgPg");
	this.shape.setTransform(14.5,3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,6.1);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AiQgBQAIgIAggNQAhgMBIgDQBAgDAiAMQAiALALAMQhAAlhRAFIgTABQhIAAg0gng");
	this.shape.setTransform(14.5,3.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,7.7);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AgWC9IAHgKQAGgJALgCIgBizIiXiNQgDgCAegRQAfgRBcgFQBXgCAhAUQAhAUgCADIiLCOIAACyQAZANABAIQAGACgkADQgjgDAFgCg");
	this.shape.setTransform(15.2,19.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.4,38.9);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AAAhxIgNAOIAAC+QABAAAMAFQAJAFAFAN");
	this.shape.setTransform(1.5,11.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,4.8,24.8);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("Ag0gmIBphiIhjBmIABCrg");
	this.shape.setTransform(5.4,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,27.5);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2g6IAHgBIh5B2g");
	this.shape.setTransform(6.1,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,12);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0C0IgXgFQAZgcAFAFIgEi/IiUiNIAIAGICRCFIACDBQgXAOgBAGQATAJATgCIASgEQgOAGgPAAIgNgBg");
	this.shape.setTransform(9.5,18.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,36.3);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwAcQgvgMgBgQQAJgdB2gIIAFAGQh1AKgEAVQAGAaCPAGQCQgGAGgaQgGgZiQgGIgUAAIgDgGIAXgBQBEAAAtAMQAuALACAPQgCAQguAMQgtALhEAAQhDAAgtgLg");
	this.shape.setTransform(16.2,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.3,7.9);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99BC9A").s().p("AgQgyIAJgCIAYBpg");
	this.shape.setTransform(1.8,5.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.5,10.7);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99BC9A").s().p("Agng4IAYAGIA3Brg");
	this.shape.setTransform(4.1,5.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.2,11.5);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F7A40").s().p("AgdANQhEgBgYgGIAPABQA+AIAzgEQAzgHgZgDQgfAAgSADQglAAgIgEQgIgDAVgFQBUgJAwAJQAcADAKAFQgTgHg6gDQhXgBgNAIQACACALABIArgCQAZAAAaACQgCAIgZADQgVACgXAAIgKAAg");
	this.shape.setTransform(13.3,1.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.1,0,24.5,2.8);


(lib.Symbol3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#276029").s().p("AiZAHQAIgIAjgNQAjgNBMgDQBEgDAkAMQAkAMANALIgIAEQgFAAgxgQQhNgOg/AKQhCAKgMAUIAOAQQgWgKgTgPg");
	this.shape_1.setTransform(15.4,3.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,6.4);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AiZgBQAIgJAjgNQAjgNBMgDQBEgDAkAMQAkAMANAMQhFAohXAGIgUABQhMAAg3gqg");
	this.shape.setTransform(15.4,4.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,8.3);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#276029").s().p("AgXDKQAAgCAHgJQAHgKALgBIgBjAIihiVQgCgDAggSQAggSBigFQBdgDAjAWQAjAVgCAEIiUCWIAAC+QANADAHAKIAIAKQAGACgmACQglgCAFgCg");
	this.shape.setTransform(16.1,20.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.3,41.3);


(lib.playAgain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IDS_PLAY_AGAIN", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 200;
	this.text.setTransform(69.6,0);

/*
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.1)").s().p("ArYEOIAAoaIWyAAIAAIag");
	this.shape.setTransform(71,25);
 */
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255, 1)").s().p("ArYEOIAAoaIWyAAIAAIag");
	this.shape.setTransform(70, 10, 1.5, 0.60 );

	this.shape2 = new cjs.Shape();
	this.shape2.graphics.f("rgba(0,200,255,1)").s().p("ArYEOIAAoaIWyAAIAAIag");
	this.shape2.setTransform(70, 10, 1.49, 0.57);

	this.addChild(this.shape, this.shape2, this.text);

    this.helper = new cjs.ButtonHelper(this, 0, 1, 1, false);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,146,54);


(lib.nextQuestion_txt = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("continue >>", "20px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 129;
	this.text.setTransform(0,-2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,133,26.4);


(lib.nextQuestion_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF7777","#841515"],[0,1],-42.2,-49.2,42.3,49.3).s().p("AtMCHIAAkNIaZAAIAAENg");
	this.shape.setTransform(84.5,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169,27);


(lib.magnetBG = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnViQIOrAAIAAEhIurAAg");
	this.shape.setTransform(50,12.5,1.064,0.862);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVCRIAAkgIOrAAIAAEgg");
	this.shape_1.setTransform(50,12.5,1.064,0.862);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,27);


(lib.BG = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0148B1").s().p("EAlRAfPQB3j1BAkNQA/kNABkgQgBkxhHkeQhHkdiGj/QiGkBi8jdQi8jdjriyQjqiykQh+QkQh/kuhDQkuhElBAAQlDAAkuBEQktBDkRB/QkQB+jqCyQjqCyi8DdQi8DdiFEBQiHD/hHEeQhHEdgBExQABEfA/EOQA/ENB3D1ImqAAMAAAg+eMBdvAAAMAAAA+eg");
	this.shape.setTransform(300,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("Egu3AfPMAAAg+eMBdvAAAMAAAA+eg");
	this.shape_1.setTransform(300,200);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib._whishmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_1 = function() {
		//playSound("whishmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._snapmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_1 = function() {
		//playSound("snapmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.win = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CDCFF").s().p("AgQAZQgGAAgEgLIgFgTQgCgHABgEQABgFACgCQACgCADADQgBAOAHAKQAFAHAFgBQAEgBAEABIAFACIAFACIALgDIAEgBIADgDIACgEQAAgBAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIgBAGQgCAGgEADQgIAFgIAAQgJAAgGACQgFACgEAAIgCAAg");
	this.shape.setTransform(282.7,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],0,-5.8,-4.5,19.9).s().p("AgZATIgDgKIgCgJQgCgGABgFQACgLAKgDQAJgEAHgBQAFAAAGAFIAMAMIAHAJQAEAEACAFQAAAGgCAEIgFAHQgHAFgJAAQgIgBgGACQgGADgGAAQgFgBgEgLg");
	this.shape_1.setTransform(282.6,139.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CDCFF").s().p("AgQAZQgGAAgEgLIgFgTQgCgHABgEQABgFACgCQACgCADADQgBAOAHAKQAFAHAFgBQAEgBAEABIAFACIAFACIALgDIAEgBIADgDIACgEQAAgBAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIgBAGQgCAGgEADQgIAFgIAAQgJAAgGACQgFACgEAAIgCAAg");
	this.shape_2.setTransform(299.3,136.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],0,-5.8,-4.5,19.9).s().p("AgZATIgDgKIgCgJQgCgGABgFQACgLAKgDQAJgEAHgBQAFAAAGAFIAMAMIAHAJQAEAEACAFQAAAGgCAEIgFAHQgHAFgJAAQgIgBgGACQgGADgGAAQgFgBgEgLg");
	this.shape_3.setTransform(299.3,136.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CDCFF").s().p("AgQAZQgGAAgEgLIgFgTQgCgHABgEQABgFACgCQACgCADADQgBAOAHAKQAFAHAFgBQAEgBAEABIAFACIAFACIALgDIAEgBIADgDIACgEQAAgBAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIgBAGQgCAGgEADQgIAFgIAAQgJAAgGACQgFACgEAAIgCAAg");
	this.shape_4.setTransform(189.3,149.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],0,-5.8,-4.5,19.9).s().p("AgZATIgDgKIgCgJQgCgGABgFQACgLAKgDQAJgEAHgBQAFAAAGAFIAMAMIAHAJQAEAEACAFQAAAGgCAEIgFAHQgHAFgJAAQgIgBgGACQgGADgGAAQgFgBgEgLg");
	this.shape_5.setTransform(189.3,148.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6CDCFF").s().p("Ag0AlIgLgFQgGgDgEgEIgCgEIgDgIQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAEABACAEQACAEAEADQAFADAEABIALAAQAOABAOgBQAGgBAGgDIAJgFQAKgCAIAAQAJAAAHgCQAHgCAGgJQAHgIAAgKQAAgLgFgLQAHgEAGACQAFADAEAGQAEAHgBALIAAAPQAAAIgCAIQgDANgHAEQgIAEgKAAIgTgBQgPgBgNACIgaACIgDAAQgNAAgMgEg");
	this.shape_6.setTransform(85.7,142.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],-2.7,-8.7,4.8,-33.4).s().p("Ag1ArQgIgCgIgGQgHgHgBgIQAAgKAIgJIAPgNQAJgMAOgKQANgLAQgBIAZABQAQAAAPAFQAOAEAHALQAEAHgBALIgBAPQAAAIgBAIQgDANgIAEQgHAEgKAAIgUgBQgOgBgOACIgZACIgDAAQgNAAgMgEg");
	this.shape_7.setTransform(85.9,142.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6CDCFF").s().p("AAZApIgZgCQgOgCgOABIgUABQgKAAgHgEQgIgEgDgNQgBgIAAgIIgBgPQgBgLAEgHQAEgGAGgDQAFgCAHAEQgFALAAALQAAAKAHAIQAGAJAHACQAIACAIAAQAIAAAKACIAKAFQAFADAGABQAOABAOgBIALAAQAEgBAFgDQAEgDACgEQACgEAEgBQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgDAIIgCAEQgEAEgGADIgLAFQgMAEgNAAIgDAAg");
	this.shape_8.setTransform(197.9,143.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],2.8,-8.7,-4.7,15.9).s().p("AAaAvIgagCQgNgCgOABIgUABQgKAAgHgEQgIgEgDgNQgBgIAAgIIgBgPQgBgLAEgHQAHgLAOgEQAPgFAQAAIAZgBQAQABANALQAOAKAJAMIAPANQAIAJAAAKQgBAIgHAHQgIAGgIACQgMAEgNAAIgDAAg");
	this.shape_9.setTransform(197.8,142.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6CDCFF").s().p("Ag0AlIgLgFQgGgDgEgEIgCgEIgDgIQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAEABACAEQACAEAEADQAFADAEABIALAAQAOABAOgBQAGgBAGgDIAJgFQAKgCAIAAQAJAAAHgCQAHgCAGgJQAHgIAAgKQAAgLgFgLQAHgEAGACQAFADAEAGQAEAHgBALIAAAPQAAAIgCAIQgDANgHAEQgIAEgKAAIgTgBQgPgBgNACIgaACIgDAAQgNAAgMgEg");
	this.shape_10.setTransform(185.1,142);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],-2.7,-8.7,4.8,-33.4).s().p("Ag1ArQgIgCgIgGQgHgHgBgIQAAgKAIgJIAPgNQAJgMAOgKQANgLAQgBIAZABQAQAAAPAFQAOAEAHALQAEAHgBALIgBAPQAAAIgBAIQgDANgIAEQgHAEgKAAIgUgBQgOgBgOACIgZACIgDAAQgNAAgMgEg");
	this.shape_11.setTransform(185.2,141.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6CDCFF").s().p("AAsA6QgYAAgVgDQgYgDgYABIghACQgRAAgNgHQgNgIgFgVIgEgYQgCgOABgPQABgOAFgJIAAgBQADAAAHAIIAOASIAPATIAIALQALAIAMADQALADANABQANAAAPAEQAIADAJAFQAJAGAMACQALABAMAAIAYgBIASgBQAHgBAIgFQAHgGADgGQAEgHAIgBQAEgBgBAGIgGAMIgEAIQgFAHgKAFQgLAGgIADQgVAHgVAAIgGgBg");
	this.shape_12.setTransform(100,139);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],4.8,-15.2,-8,27.3).s().p("AAuBQQgYAAgWgDQgXgDgYABIgiACQgRAAgMgHQgNgIgFgVQgDgNAAgPIgBgaQgCgTAHgMQAMgSAYgIQAZgIAbgBIAtAAQASAAAQAJQAQAJAOANQAOANALANIAQAQQAJAIAHALQAHAKAAALQgBAJgGAJQgHAIgJAFQgJAGgJADQgVAGgVAAIgFAAg");
	this.shape_13.setTransform(99.8,136.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6CDCFF").s().p("AAsA7QgYgBgVgDQgYgDgYABIghACQgRAAgNgHQgNgIgFgVIgEgYQgCgOABgPQABgOAFgJIAAgBQADAAAHAIIAOASIAPATIAIALQALAIAMADQALADANABQANAAAPAEQAIADAJAFQAJAGAMACQALABAMAAIAYgBIASgBQAHgBAIgFQAHgGADgGQAEgHAIgBQAEgBgBAGIgGAMIgEAIQgFAHgKAFQgLAGgIADQgXAHgWAAIgDAAg");
	this.shape_14.setTransform(197.3,138.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],4.8,-15.2,-8,27.3).s().p("AAuBQQgYAAgWgDQgXgDgYABIgiACQgRAAgMgHQgNgIgFgVQgDgNAAgPIgBgaQgCgTAHgMQAMgSAYgIQAZgIAbgBIAtAAQASAAAQAJQAQAJAOANQAOANALANIAQAQQAJAIAHALQAHAKAAALQgBAJgGAJQgHAIgJAFQgJAGgJADQgVAGgVAAIgFAAg");
	this.shape_15.setTransform(197.1,136.1);

	this.instance = new lib.Symbol59("synched",0);
	this.instance.setTransform(240.3,75.9);
	this.instance.alpha = 0.621;

	this.instance_1 = new lib.Symbol58("synched",0);
	this.instance_1.setTransform(239.9,73.5);
	this.instance_1.alpha = 0.621;

	this.instance_2 = new lib.Symbol57("synched",0);
	this.instance_2.setTransform(207.5,108.7);
	this.instance_2.alpha = 0.621;

	this.instance_3 = new lib.Symbol56("synched",0);
	this.instance_3.setTransform(207.1,106.3);
	this.instance_3.alpha = 0.621;

	this.instance_4 = new lib.Symbol55("synched",0);
	this.instance_4.setTransform(153,129.4);
	this.instance_4.alpha = 0.621;

	this.instance_5 = new lib.Symbol54("synched",0);
	this.instance_5.setTransform(242.8,128.8);
	this.instance_5.alpha = 0.621;

	this.instance_6 = new lib.Symbol53("synched",0);
	this.instance_6.setTransform(239.3,116.5);
	this.instance_6.alpha = 0.621;

	this.instance_7 = new lib.Symbol52("synched",0);
	this.instance_7.setTransform(242.4,80.6);
	this.instance_7.alpha = 0.621;

	this.instance_8 = new lib.Symbol51("synched",0);
	this.instance_8.setTransform(209.4,113.7);
	this.instance_8.alpha = 0.621;

	this.instance_9 = new lib.Symbol50("synched",0);
	this.instance_9.setTransform(157.7,124.7);
	this.instance_9.alpha = 0.621;

	this.instance_10 = new lib.Symbol49("synched",0);
	this.instance_10.setTransform(111,131.3);
	this.instance_10.alpha = 0.621;

	this.instance_11 = new lib.Symbol48("synched",0);
	this.instance_11.setTransform(108.5,127.2);
	this.instance_11.alpha = 0.621;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D4F6FE").s().p("AAAGoQAFgFAHgKQAHgKADgOQADgOgGgRQgJgYgCgZQgBgZABgWIACglIgBgnIAAhSIgBhqIgBh0IgBhsIgBhRIAAglIACgWQABgKgDgIQgDgIgIgEQgRgIgKgIIgJgIIALgDQALgCAOABQANACAMALQALALAHAKQAHAKgBATQAAAUgLAnIAAI6IADAPQAEAOACAWQACAWgCAYQgDAXgLATQgMATgVAHIAGgFg");
	this.shape_16.setTransform(295.3,94.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#39C7FF").s().p("ACsEkQgVgDgPgMQgPgMgZgbQgYgcgagkQgZgkgSgjQgLgcgYgpIgzhSIgwhPQgVgjgIgRQgKgWgPgOQgPgOgLgHIgNgHIARgxIATAYQATAYAhAkQAUAYANAaIAdA5QAQAhAeAtQAeArAjApIBGBSQAhAoAYAmQAYAlANAPQAOAPAFACIAFACIgQABIgMABQgMgBgNgBg");
	this.shape_17.setTransform(269.3,109.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4F6FE").s().p("AC5EWIgWg8IgahLIgZhJIgQg0IgNgtIgQhBIgShDQgJghgJgXQgIgXgHgGQgLgKgJgIQgMgJgNgCQgOgCgRAHQgRAIgJAAQgKABgHgCQgGgCgIAAIgOAAQgIAAgNALQgOAKgaAdIAFgKIAOgYQAIgOAKgMQAKgLAJgEQATgHARgCQARgBARAAIAigCQARgCAPAEQAIADAMAHQANAHALASQAKASAEAjQABANAIAiIAUBQIAaBhIAdBoIAZBcIATBCIAHAaIgIgYg");
	this.shape_18.setTransform(138.3,81.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39C7FF").s().p("ABoFDIgqgCQgYgBgHgEQgHgEAAgLQgBgMgEgVIgXhgIgbhgIg3jNIgMgxQgFgagKgXIgEgJIgKgRQgGgIgFgDQgFAAgHAKIgMAVIgGALIACgZIADgPIAIgZQAKgfARgEQARgEANAcQAFAMAMAmIAcBcIAhBzIAfB0IAaBmQALAtAEAWQADASAPARQAQAQAWAMQAWALAWACQAJABAIgBIgPACQgQABgPAAIgTAAg");
	this.shape_19.setTransform(145.4,106.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#39C7FF").s().p("AALGyIgngEQgagBgKgJQgLgJgCgRQgCgRABgYIAAnhIAAjdIgCgkQgCgQAGgMQAGgMAVgHQAHgCARAAIAjABIAiACIAPABIgLABIgZAFIgZAGQgNADgGAEQgLAHgDAFQgCAFAAAHQAAAHgDANQgJAlAAAsQAAAsACAsQADAtABAmIgCCOQAABIAJBHIAIA+QAEAfABAfQAAAMgGARQgGAQgDAQQgDAPAIAKQAEAFALADQAKAEAJACIARACQALABAJgEIASgGQAIgDAKAAQAFABABACQADAFgGAKQgGAKgIAIIgMAKQgNAFgPAAIgMgBg");
	this.shape_20.setTransform(238.4,95.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],6.5,-51.6,-6.7,44.1).s().p("ADnG0QgkgGgegYQgegZgTgeIhYiPQgZgogVgqQgXgpgYgoIgWgmIgbgsQgPgXgQgRQgRgRgTgGQgHAiAAAlQAAAjACAmIADBJIAAC8QAAAQACAQQACARAAARQABAQgGAPQgJAWgSAGQgSAGgWgCIgrgDQgagCgKgJQgLgJgCgRQgCgQABgYIAAniIAAjcIgCgkQgCgQAGgMQAGgNAVgHQAVgGAYABQAYAAAYAEQAYADAWAAQAnA5AjA8IBHB3IBwC5IAUAgQALATAMASQANARALAHQALAIAIgLQAJgKADglQADgvgBgyIgChjQgBgjgDgkQgEgjgBgkQgBgjAHgjQADgPADgLQAEgKAGgGQALgLAagDQAUgDAYABQAXABAUAJQAUAKAIAXQAFAQgBAWQgCAVgDAWQgDAWgBASIAAERIAAD1IADA9QACAhgHAeQgHAdgbATQgcAQgbAAQgJAAgIgCg");
	this.shape_21.setTransform(265,95.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#39C7FF").s().p("AgoGsQgKgDgHgJQgMgPgEgYQgEgYABgcIADg1IACgrIAAjyIAAksIgDgiQgCgUAAgVQABgUAIgOQAJgNAVAAQATAAAEAGQAEAFgFAIQgGAJgIAJQgMARgBAVQgBAVADAWQADAWAAAUQgCAagEAWIgHAsQgEAWABAZQACAiAHAhQAGAhAEAiQAEAfgFAjQgGAjgCAkQgCAjALAjIAFANQAKAXAGAWQAGAWgHAYIgMAhQgEAPACAOQADAPAPAQQAIAHANACQAPACAPABQAQAAAKADQALADgBAJQgeAEgdADIgKAAQgXAAgZgIg");
	this.shape_22.setTransform(203.7,95.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D4F6FE").s().p("AAYDXQgHg3AAg9QAAg8ADg0IAGhPQAEgsgDgqQgEgrgSgiQgQgigqgRQAQgEASgBQATgBAPAEQARAFALANQAJANABAUQACATgCAVIgCAkIAAEoIABC2IAAAPQgUgpgIg4g");
	this.shape_23.setTransform(208.8,82.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],7.4,-36.9,-6.5,36.2).s().p("AgdG1QgTgCgNgEQgKgEgHgIQgMgPgEgYQgDgZAAgbIADg2IADgqIAAjzIAAksIgCgjQgBgTACgSQACgSAKgMQALgMAVgGQAVgHAZgBQAWgBAVAGQAVAFALANQAJAMABAUQACAUgCAVIgCAjIAAEqIAAC1IAACFQABAPAFAQIAIAgQAEAQgCAPQgCAOgNALQgLAJgTAEQgTAEgWAAQgUAAgUgDg");
	this.shape_24.setTransform(205.8,95.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#39C7FF").s().p("ABFG0QgLgBgJgIQgFgEgDgNQgDgNgBgPIgDgeIgDgVIgOg1IgNg1IgUhiQgKgxgNgxQgHgXgLgUIgVgtQgKgWgGgYQgDgQABgSQAAgSgCgPQgDgOgFgLQgFgKABgPQgHgOgBgSIgBgjQgBgTgHgPQgagIgHgQQgIgQAHgSQAGgSAQgOQAPgNAUgDIAsgFQAZgDAWAEQAVADAPAPQgBAHgEAEQgLAKgLAAQgMgBgNgDQgNgDgMAEQgOAFgDAHQgCAHAEAIIAHASQAEAJgBAKQgHAyAGAwQAFAwALAuIAUBaIAKAvIAOA6IANA8QAGAdACASQAEAkAFAbQAGAbAJAXQAJAYANAZIAgA5IADAFQAJANAIAGQAJAFALADIAbAFIgMAEIgXAHQgMAEgFAAIgWADIgQABIgHAAg");
	this.shape_25.setTransform(89.6,95.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FFFFFF","#04CAF9"],[0,1],9.6,-53.2,-9.8,49.1).s().p("AkcG3IgygFQgYgDgSAAQgCgBgCgJIgGgWIgFgWIgDgMIhWlBIgUhOQgJgogOgmQgKgbgJgGQgIgGgJAKQgJAKgKAYQgfBGgVBJQgUBKgQBLQgGAhgDApQgDApgIAnQgHAngUAcQgNASgOAFQgOAFgRgBIgngCIgjADQgVACgUAAQgUAAgLgJQgFgFgDgMQgDgNgBgQIgDgdIgDgWIgOg1IgNg0IgWhiQgKgygNgwQgHgXgLgVIgVgtQgKgWgGgXQgDgQABgSQAAgSgCgQQgDgNgFgLQgFgLABgOQgHgOgBgSIgBgkQgBgSgHgPQgagIgHgRQgIgQAHgSQAGgSAQgNQAPgOAUgDIAugFQAZgCAXAEQAXAEAPAQQAFAHAEAQIAGAhIAHAbIAMAnQAGATAFAVIAoC8IAwDgIBYlJQAMgyAMg2QALg2ATgwQAOghAVgMQAWgMAlgDIAygEQAagBAXAFQAWAGAOAUQAFAJADAMIAFAaIAFAYIA2DRIA1DPIAKAdIALAiQAFARgCAMIAHghIAThWIAZh0IAch/IAZh2IAThXIAIgiQABgEATgCQATgDAZAAQAZAAAVACQAVACAGAEQAVARADAVQADAWgHAXIgLAuIgaBlIgZBpIgYBjIhBEPQgEARgCAWIgGAtQgEAXgJATQgIATgQALQgPAIgWABIgUABIgcgBgACjG1QgUgCgMgEQgLgEgGgIQgMgPgEgYQgEgZABgbQAAgcACgaQADgZAAgRIAAjzIAAksIgCgjQgBgTACgSQADgSAKgMQALgMAVgGQAVgHAYgBQAZgBAVAGQAVAFAKANQAJAMACAUQABAUgBAVIgCAjIAAEqIAAC1IAACFQAAAPAFAQIAJAgQAEAQgCAPQgCAOgOALQgLAJgTAEQgTAEgVAAQgWAAgUgDgAP4G1QgkgHgegYQgegYgSgfIhZiPQgYgogXgpQgXgpgZgpIgVgmIgbgrQgPgXgRgSQgRgRgSgGQgHAiAAAlQgBAkADAmIACBIIAAC9QAAAPADARQACAQAAARQAAARgFAOQgJAWgSAGQgSAGgWgCIgrgDQgagBgLgKQgLgJgBgQQgCgRAAgYIAAnhIAAjdIgCgkQgBgQAGgMQAFgMAVgHQAWgHAYABQAYABAYADQAYADAWAAQAnA5AjA8IBGB3IByC6IAUAfQALAUANARQAMARALAIQAMAHAIgLQAIgKADgkQADgvgBgyIgChkQAAgjgEgjQgDgkgBgjQgCgkAHgjQADgPAEgKQAEgLAGgGQAKgLAagDQAUgCAYAAQAYABATAKQAUAJAJAXQAEAQgBAWQgBAVgEAWQgDAWAAASIAAERIAAD2IADA8QACAhgIAeQgHAegbASQgbAQgcAAQgIAAgJgBg");
	this.shape_26.setTransform(186.4,95.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B2B2B2").s().p("Aq7B/IgGAAQgNgEgQgJIgYgPIghgPIgggOIg5gcIg7gcQgPgGgTgGIgkgLQgTgGgOgHQgJgEgGgFIgOgKIgRgHQgIgDgFgEQgMgEgHgFIgPgKQgIgFgMgEQgkgDgMgHQgLgHAIgGQAJgGAYgCIAtgCIABAAIAOAAIADAAIANAAIAEAAIAMABIAFAAIALABIAFABIAKACIAEAAIAEABQAMADAOAIIAaANQAbAKAYAMIBsA1ICDA9IgphcQgGgNgJgOQgIgOgCgNIgCABIACgDIgBgDQABgIAMgDQAFgEAHgBQAegDAgAAIAfgBQAQAAAPABQAPABAWADIASAEQAMAEALAGIAVAKICBA7IBgAqIAxAWIAVAIIAQAIIABAAIADADIgMgUIgbgsIggg1IgYgpIgJgFQgEgCAAgCQgBgCAHgBQAAgBARgBIAogBIAtAAIAbACIAIABQAUAEAKAFQAJAFAEAFQADAFABAFIASAmIAbA1IABABIAoBNQAEAHAJAIQAJAJACAIQACAJgOAEQgMACgZABIg1gBIgaAAIgVAAIgegBIgBAAIgBAAQgGgBgEgCIgLgHIgNgGIgGgDIjKhaIgmgPIgjgRIgagKIgGgCIgNgEIgOgEQgIgBgDACQgEADgBADIgCAEQgDAVAJATQAIAVANAVQAHAKAMALQAMAMAIALQAHALgIAIQgJAIgUAAIg1AAIgfABIglABIgIAAQgKAAgLgCgAFJB7QgTAAgVgCQgMgBgJgDQgXgFgPgKQgQgKgKgKIgTgRIhchEIhuhVIgPgJIgRgMQgHgGADgDQACgEAUAAIALAAQASgCAUgBQAXAAAWABQAVACAPADQATAGALAJIATAQIBvBUIBEAyIAyAmIARAJIAUAJQAKAEADAEQAEAEgJAEQgGACgPABIgiACIgTAAIgTAAgAKcB3IgogBQgZAAgOgCQgNgDgIgEIgQgMIi1iHIhTg/IgPgKQgHgEAAgEQABgDARgCQASgCAXAAIAvABIAtAAIByAhIBvAhICyA0IAoAKIAsAMQAVAEAIgCQAJgBgNgNQgPgMgUgOIgngcQgOgKgQgKQgRgKgOgKQgPgKgGgKQgHgJAHgDQAFgEAYAAIArgBIAXAAQANAAANADIACABQAOACALADIAMAFQAMAHAHAJQAHAJAIAHIBnBOIBcBDIAOAKQAMAGALAIQALAIAAAHQAAAIgWADQgZAFghgBIgdgBQgOgBgNgDIglgHIgkgIIg9gQQgggJgZgIIgugPIg+gSIhAgTIg4gOIgjgLQgRgGgUgEIghgGIgOgCQAGAJAOALQANALARAIIAdAVIBHA1IAOAJIAPAKQAGAFABAEQgBAGgQACQgMACgQAAIgJgBg");
	this.shape_27.setTransform(174.5,125.6);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(53.4,51,249.2,101);


(lib.refridge = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#448A8D").s().p("AzNK5QhDgHgGhPIAA0bMAotAAAIAAUbQgGBPhDAHg");
	this.shape.setTransform(5.6,-107.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8DCDD8").s().p("A6HEVQgjAAgagVIJYoBMAlAgAUIHxIAQgdAog0ACg");
	this.shape_1.setTransform(1.4,-20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#73B8C1").s().p("A5+OaQhbgIgIhcIAA5rQAIhbBbgJMAz9AAAQBaAJAJBbIAAZrQgJBchaAIg");
	this.shape_2.setTransform(0.5,-85.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BFBFBF","#9B9A9A"],[0,1],-190.8,0,190.9,0).s().p("AvJCWQlUgCiZgEQkygMiLgnIAAjPQApAQBsATQBrASDEAHQCUAEFOACQFNABGigBIMvgCIKjgCIFKgCQAygGBcgYQBbgXBNgqIAADbQhrAnhWARQhVARgLAAIgNABIk5ACIqjACIs2ACIlHAAIm2AAg");
	this.shape_3.setTransform(-0.5,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AucCLQlUgBiZgFQlkgPiGgwIAAjBIANgLIgFgFQAQAIBOAXQBnAeEkANQCUAFFOABQFNABGiAAIMvgCIKjgDIFKgCQAqgFBLgSQBLgSBJgfIAADVQheAehHANQhGANgJABIgNAAIk5ACIqjADIs2ACIkTAAInqgBg");
	this.shape_4.setTransform(-0.5,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5A4A5").s().p("ApKAhQmxgMkBgQIjCgLQFTARF1AEQGbAFGJgHQGLgIFBgKQFCgMC/gKIDEgKQovA3oVANQkbAHj9AAQjhAAjMgFg");
	this.shape_5.setTransform(22.1,-201.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9F9F7").s().p("AgZgkIAygPIgCBbIguAMg");
	this.shape_6.setTransform(-173.8,88.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1D0BF").s().p("AgCERQgKh+gMiyQgMi0gHiqQgGgGBdgPIABB/QAAB7gIC2QgIC5gXC8IgIiCg");
	this.shape_7.setTransform(-171.5,134.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BCBD8F").s().p("AhOAhQgDgoAFgnQA/AZBdgWIgDBOQgDACgvAHQgNADgOAAQgjAAgrgOg");
	this.shape_8.setTransform(-162.1,204.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3D4A8").s().p("AheAYIAAhLQAEAEA6AOQA4APBGgTIgDBNQgDAEg7AHIgUABQgwAAg3gcg");
	this.shape_9.setTransform(-163.5,203.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BCBD8F").s().p("AglAtQgGg7AAg9QArAMAVAPQAXAQAAABIgGBqQgmgXglgHg");
	this.shape_10.setTransform(-157.1,88.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3D4A8").s().p("AgsAtQhNAPgEAGIABh1QB7grA/AdQBAAdABAIIgGBqQhbgwhKAPg");
	this.shape_11.setTransform(-165.3,88.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#848365").s().p("AhQIYQBmj9AUkXQAVkWgykTQBAAZAEAEIgGQhQgwANglAAQgoAAgegOg");
	this.shape_12.setTransform(-161.6,146);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A2A280").s().p("AgNIqQg4gQgDgEIgxwFIAbg4QA7gUBKAbQBMAcAHAGIgGQiQgsANglAAQgbAAgVgHg");
	this.shape_13.setTransform(-165.7,144.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhcBDIgFhjQgCgFAIgbQAJgcA1gDQA4gFApAdQApAdgOCLg");
	this.shape_14.setTransform(-165,77.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvAuQgBAAgIgEQgIgFgCgRQAAgUADgbIADgeIB+ASIABBDQABABgCAKQgBAKgOAEQgMAFgSAAQgaAAgqgMg");
	this.shape_15.setTransform(-164.2,209.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BCBCBC").s().p("AhHLXQgwgVAFiNQAFhRAHjOIAQm2IANmSIAGixQAHAAA1AdQAyAcAHBAQAEgDAaAPQAaAOAJA+QACAogHCxQgGCxgKDXIgSF6IgICpQABAGgKAsQgKAsgjANQgOAHgSAAQgZAAgcgNg");
	this.shape_16.setTransform(-151.4,148.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("EgbwgibQAGACEWAXQEVAYHgATQHgATJjgLQJkgLKjhBQAJgDA6AQQA7ARAIBLMAAABDP");
	this.shape_17.setTransform(3.5,32.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("EgVFghlQAJAAD6ADQD5ADGDgBQGDgBGigLQGlgLFegcQAEgEA6gKQA6gLA3AeQA3AdgDB2MAAABCg");
	this.shape_18.setTransform(41.7,39.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7F7F7").s().p("EgB0AkkQhdgJgKhcMAAAhF+QAKhbBdgJIBbAGID0AMMAAABI1g");
	this.shape_19.setTransform(-169.4,38.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-255.2,-58,277.9,63.1).s().p("EgcNAkkQhdgJgJhcMAAAhF+QAJhbBdgJIEIAPQEAANGVAOQGWANHJABQHNgBGegNQGegOEHgNIEPgPQBeAJAIBbMAAABF+QgIBcheAJg");
	this.shape_20.setTransform(-0.5,38.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-255.2,-58,277.9,63.1).s().p("EgcNAkkQhdgJgJhcMAAAhF+QAJhbBdgJIEIAPQEAANGVAOQGWANHJABQHNgBGegNQGegOEHgNIEPgPQBeAJAIBbMAAABF+QgIBcheAJg");
	this.shape_21.setTransform(-0.5,38.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#686868").s().p("Av2B4QmngUkEgVQkDgUgHgCQAChTA4g4QA5g5BVgCIEEAQQD7AQGNAPQGNAPG8ABQHGgBGVgPQGVgPEAgQIEIgQQBVACA3A6QA3A6gBBVIi3ANQizAMkqAPQkqAQlrALQlqAMlzABQn0gCmogUg");
	this.shape_22.setTransform(-0.8,-188.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A09FA0").s().p("EgbvAmCQhWgCg4g4Qg5g5gChVMAAAhFzQAChVA5g5QA4g4BWgCIEFAQQD9APGPAPQGPAPG+ABQHIgBGYgPQGXgPEBgPIEJgQQBWACA4A4QA5A5ACBVMAAABFzQgCBVg5A5Qg4A4hWACg");
	this.shape_23.setTransform(-0.5,40.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#474B4C").s().p("A+6jIICsANQCpANEbARQEcAQFeANQFeAMFvABQH+gCHCgWQHCgWEZgXQEagWAKgCIgIGYMg9sAAJg");
	this.shape_24.setTransform(0.3,-186.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0D83F").s().p("AgEACQAEgGAFAEQgEADgCAAIgDgBg");
	this.shape_25.setTransform(135.3,-227.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C6592A").s().p("AhfAAQAIgdBXgDQBXADAJAdQgIAehYADQhXgDgIgeg");
	this.shape_26.setTransform(131.8,-226.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#89370E").s().p("AhMAaQgggKgBgQQABgOAggLQAegLAuAAQAuAAAfALQAgALABAOQgBAQggAKQgfALguAAQguAAgegLg");
	this.shape_27.setTransform(131.9,-226.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A19425").s().p("AgLgDIAKgdIANAkIgKAdg");
	this.shape_28.setTransform(91.3,-229.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BBB02A").s().p("Ah/gPIAKgdID1BCIgNAXg");
	this.shape_29.setTransform(104.4,-224.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0D83F").s().p("AhygOIgQglID6BOIAKAZg");
	this.shape_30.setTransform(104.2,-227.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A19425").s().p("AgIgCIAGgaIALAhIgDAYg");
	this.shape_31.setTransform(86.8,-227.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BBB02A").s().p("AhyAHIDogkIgRAdIjaAfg");
	this.shape_32.setTransform(99.3,-227.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0D83F").s().p("Ah6gBIDigeIATAaIjoAkg");
	this.shape_33.setTransform(98.8,-230.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A19425").s().p("AgIgCIAGgaIALAhIgDAYg");
	this.shape_34.setTransform(82.4,-231.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BBB02A").s().p("AhyAGIDogkIgRAdIjaAfg");
	this.shape_35.setTransform(94.9,-231.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E0D83F").s().p("Ah6gBIDigdIATAaIjnAkg");
	this.shape_36.setTransform(94.4,-233.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A19425").s().p("AgJAGIgKgVIAbANIAMASg");
	this.shape_37.setTransform(79.7,-226.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BBB02A").s().p("AhLBoICSjjIAFAjIiMDUg");
	this.shape_38.setTransform(88.2,-237.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E0D83F").s().p("AhXBlICSjXIAdADIiSDig");
	this.shape_39.setTransform(86.5,-238.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A19425").s().p("AgJAEIgHgYIAZAUIAIAVg");
	this.shape_40.setTransform(80.5,-225.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BBB02A").s().p("AhYBTICyi7IgCAjIioCug");
	this.shape_41.setTransform(90.4,-233.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E0D83F").s().p("AhlBPICwixIAcAJIiyC8g");
	this.shape_42.setTransform(89.1,-235.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A19425").s().p("AgIADIgEgVIATASIAGASg");
	this.shape_43.setTransform(73,-228.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BBB02A").s().p("AhPBCICfiWIgCAfIiXCKg");
	this.shape_44.setTransform(81.8,-235.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E0D83F").s().p("AhaA9ICeiMIAXAJIifCWg");
	this.shape_45.setTransform(80.7,-236.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A19425").s().p("AgMACIABgeIAYAbIgBAeg");
	this.shape_46.setTransform(89.5,-223.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BBB02A").s().p("Ah6AKID3gzIgFAbIjzA4g");
	this.shape_47.setTransform(103.2,-224.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E0D83F").s().p("AiIAIID/gqIASASIj3A0g");
	this.shape_48.setTransform(102,-227.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5B2710").s().p("AhSAcQghgLgBgRQABgQAhgMQAhgLAxAAQAxAAAiALQAhAMABAQQgBARghALQgiAMgxABQgxgBghgMg");
	this.shape_49.setTransform(131.5,-225.2);

	this.instance = new lib.Symbol39("synched",0);
	this.instance.setTransform(-198.2,-284.3);

	this.instance_1 = new lib.Symbol38("synched",0);
	this.instance_1.setTransform(-198.2,-284.3);

	this.instance_2 = new lib.Symbol37("synched",0);
	this.instance_2.setTransform(-198.2,-284.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AmDBrQBGAEBNABQDmgBClgfQCngeAIgyQgEglhgghQhfghiHgQQCrAMBrAgQBrAfADArQgFAyiYAjQiXAjjiABQiDAAhugNg");
	this.shape_50.setTransform(131.9,-229);

	this.instance_3 = new lib.Symbol36("synched",0);
	this.instance_3.setTransform(-198.2,-284.3);

	this.instance_4 = new lib.Symbol35("synched",0);
	this.instance_4.setTransform(71.6,-238.7);
	this.instance_4.alpha = 0.551;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C6E3EA").s().p("AmWBuQijgsgGhCQAGhBCjgsQCigsD0gCQD1ACCiAsQCjAsAGBBQgGBCijAsQiiAsj1ACQjzgCijgsg");
	this.shape_51.setTransform(117.1,-229.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A19425").s().p("AgIAHIgTgRIAkAHIATAOg");
	this.shape_52.setTransform(-62,-210.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BBB02A").s().p("Ag2BpIBdjgIAQAeIhaDRg");
	this.shape_53.setTransform(-55.5,-221.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E0D83F").s().p("AhBBpIBijWIAhgDIheDgg");
	this.shape_54.setTransform(-58.2,-221.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A5D697").s().p("AgbgBQAagOAzADIADAEQgBgCggABQgdABgrAWQAAgDAZgMg");
	this.shape_55.setTransform(28,-213.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A5D697").s().p("AAAgGQAegHAKABQAKAAACADQgCgBggADQgfAEgkARQgJgEA6gQg");
	this.shape_56.setTransform(17.4,-210.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A5D697").s().p("AgqADIAggGQAbgIAdACIgoAFQgiAEgRAKQgBgCAEgFg");
	this.shape_57.setTransform(7.8,-209);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#69935D").s().p("AiVAmQgIgFAFgNQACgCAcgHQAcgHAgACIAlgLQAfgKAdAAQADgCAigNQAigNAjAEIAOASQgCABgiAJQgiAJgpgBIgkANQggANgoADQgDACgeAIQgRAFgOAAQgLAAgKgDg");
	this.shape_58.setTransform(18.8,-210.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A5D697").s().p("AgagDQAagKA0ALIADACQgCAAgggDQgdgEgtAPQAAgCAbgJg");
	this.shape_59.setTransform(27.7,-214.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A5D697").s().p("AAAgFQAggCAKACQAJACACADQgCgBghgCQgegBgnALQgIgFA7gHg");
	this.shape_60.setTransform(16.9,-213.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A5D697").s().p("AgqAAIAhgDQAcgDAcAGIgogBQgjgBgSAHQAAgCAEgDg");
	this.shape_61.setTransform(7.1,-212.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#69935D").s().p("AiYARQgIgGAHgLIAfgEQAdgDAgAGIAmgHQAggFAdAFQACgCAkgIQAkgJAiAKIALARIglAFQgjAEgogHQgDABgjAIQgiAJgngDQgDABgfAEIgSABQgUAAgOgGg");
	this.shape_62.setTransform(18.2,-212.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhDBQQA3gUA1gbQA4gbAIgVQAAgzg5gRQgngMgOgEQAPADArAMQA/ARAMAvQgEAeg9AbQg+Acg8ARQg/ARgFABIA8gUg");
	this.shape_63.setTransform(31.4,-216.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E0D83F").s().p("AgEACQAEgGAFADQgEAEgCAAIgDgBg");
	this.shape_64.setTransform(-15.4,-212.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C6592A").s().p("AhiAEQAHgeBbgHQBZgBAKAfQgHAehbAHIgDAAQhXAAgJgeg");
	this.shape_65.setTransform(-19,-211.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#89370E").s().p("AhOAfQghgKgCgQQAAgPAggNQAggMAwgDQAvgBAhAJQAhAKACAQQAAAPggANQggAMgxADIgLAAQgoAAgcgIg");
	this.shape_66.setTransform(-18.9,-211);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5B2710").s().p("AhTAhQgkgKgBgSQAAgQAigNQAhgOA1gDQAygCAjALQAjAKACASQgBAQgiAOQgiANg0ADIgKAAQgsAAgegJg");
	this.shape_67.setTransform(-19.2,-210);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E0D83F").s().p("AgEADQAEgHAFACQgDAFgDAAIgDAAg");
	this.shape_68.setTransform(-4.6,-209.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C6592A").s().p("AhhARQADgfBZgTQBZgNAOAeQgDAfhZATQgaAEgUAAQgvAAgKgVg");
	this.shape_69.setTransform(-8,-207.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#89370E").s().p("AhJApQgigFgEgQQADgjBngWQAugIAhAFQAiAFAEAQQgDAjhnAWQgbAFgYAAQgPAAgNgCg");
	this.shape_70.setTransform(-7.9,-207.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5B2710").s().p("AhOAsQgkgFgFgSQgCgSAhgQQAfgSAzgJQAxgJAkAGQAlAFAEASQABASgfAQQggASgzAJQgdAGgZAAQgRAAgOgDg");
	this.shape_71.setTransform(-8,-206.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A19425").s().p("AgMgCIAKgfIAPAkIgKAfg");
	this.shape_72.setTransform(-43,-215.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BBB02A").s().p("AiEgLIAKgfID/A9IgMAYg");
	this.shape_73.setTransform(-29.3,-210.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E0D83F").s().p("Ah3gLIgRgmIEFBJIAMAag");
	this.shape_74.setTransform(-29.6,-213.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A19425").s().p("AgJgCIAGgbIANAiIgDAZg");
	this.shape_75.setTransform(-47.7,-213.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BBB02A").s().p("Ah1ALIDugtIgQAeIjhAng");
	this.shape_76.setTransform(-34.7,-214.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E0D83F").s().p("Ah+ABIDpgkIAUAaIjuAtg");
	this.shape_77.setTransform(-35.4,-216.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A19425").s().p("AgJgCIAGgbIANAiIgDAZg");
	this.shape_78.setTransform(-52.3,-217.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BBB02A").s().p("Ah2ALIDvgtIgQAeIjhAng");
	this.shape_79.setTransform(-39.4,-217.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E0D83F").s().p("Ah+ABIDpgkIAUAaIjuAtg");
	this.shape_80.setTransform(-40,-220.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A19425").s().p("AgJAHIgLgWIAcANIANASg");
	this.shape_81.setTransform(-55,-212.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BBB02A").s().p("AhKBuICQjwIAFAlIiJDfg");
	this.shape_82.setTransform(-46.5,-224.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E0D83F").s().p("AhXBsICRjkIAeABIiRDwg");
	this.shape_83.setTransform(-48.3,-225.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A19425").s().p("AgKAFIgHgZIAaAUIAJAVg");
	this.shape_84.setTransform(-54.2,-210.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BBB02A").s().p("AhZBZICzjIIAAAlIiqC6g");
	this.shape_85.setTransform(-44.2,-220);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E0D83F").s().p("AhnBVICyi9IAdAJIizDIg");
	this.shape_86.setTransform(-45.6,-221.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A19425").s().p("AgIADIgFgVIAVASIAGATg");
	this.shape_87.setTransform(-62.1,-214.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BBB02A").s().p("AhQBHICgihIgBAgIiYCVg");
	this.shape_88.setTransform(-53.1,-221.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E0D83F").s().p("AhbBDICfiXIAYAJIigCgg");
	this.shape_89.setTransform(-54.3,-223.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A19425").s().p("AgMACIAAgfIAZAcIAAAfg");
	this.shape_90.setTransform(-44.7,-209.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BBB02A").s().p("Ah/APID/g+IgEAdIj7BCg");
	this.shape_91.setTransform(-30.6,-211.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E0D83F").s().p("AiMANIEHg0IASASIj+A+g");
	this.shape_92.setTransform(-31.9,-214);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BC8E8E").s().p("AAAA0QgNgBgNgFQgRgGgIgOQgRgrAngaQAlgZAlAfQASAdgJAhQgKAegbAAQgIAAgJgDg");
	this.shape_93.setTransform(-12.5,-224.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#713939").s().p("AAABIQgRgBgTgHQgWgHgMgTQgXg9A1giQA0gjAxAqQAaAogNAtQgJAfgTAFQgKADgNAAQgLAAgMgCg");
	this.shape_94.setTransform(-12.6,-225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8D5452").s().p("AAACXQglgDgngNQgugQgYgoQgmhRAuhBQAuhCBQgRQBOgRBAA+QAdAjAEA0QAEAzgMAqQgSBAgnAKQgVAGgbAAQgYAAgagEg");
	this.shape_95.setTransform(-12.6,-225.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5F2F2F").s().p("Ah6A6IhFhMQBoAMBkgQQBmgRBNg1QABBFgkAnQgwAthGAOQhEANg/AFIgegjg");
	this.shape_96.setTransform(10,-219.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#814D4D").s().p("Aj4AEQgEgEA4ghQA4gjCrAJQBYAGBUAbQAfALAPAbQh5gih0AAQhxgBhgBVIgzg6g");
	this.shape_97.setTransform(2.6,-236.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#713939").s().p("AhVBgIhvh8Ig8hEQgEgEA4gjQA4gjCrAJQBYAGBUAbQA6AaAEBJQAEBHgmAtQgwAthGANQhGAOg9AEIg7hDg");
	this.shape_98.setTransform(3.4,-226.7);

	this.instance_5 = new lib.Symbol34("synched",0);
	this.instance_5.setTransform(-36.1,-230);
	this.instance_5.alpha = 0.441;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#898989").s().p("AkmBPQh3gZgGgqQADgoB2ggQB2gfCygHQCxgEB4AYQB3AYAGAqQgDAph2AgQh2AfiyAHIg0ABQiQAAhlgVg");
	this.shape_99.setTransform(-16.5,-215.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4C4C4C").s().p("AlCBXQiDgbgGguQADgtCBgiQCBgjDEgHQDCgFCDAbQCDAaAGAuQgDAtiBAjQiBAijEAIIg2AAQifAAhwgWg");
	this.shape_100.setTransform(-12.6,-216.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C6E3EA").s().p("AmaB5QingmgJhBQAFhACkgxQCkgwD6gKQD3gGCnAnQCnAmAJBBQgFBAikAxQikAwj6AKIhAABQjOAAiQgig");
	this.shape_101.setTransform(-10.5,-218.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9CBBC5").s().p("AmjB/QirgogJhFQAFhDCogzQCngzEAgJQD9gGCqAoQCsApAIBEQgFBDinAzQioAzkAAJIg/ABQjUAAiUgjg");
	this.shape_102.setTransform(-11.3,-217.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgJAAQABgIAIgBQAKABAAAIQAAAJgKABQgIgBgBgJg");
	this.shape_103.setTransform(65.6,-247.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgPAAQABgOAOgCQAPACABAOQgBAPgPABQgOgBgBgPg");
	this.shape_104.setTransform(68.5,-242.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgRAAQACgEAPgBQAQABACAEQgCAFgQABQgPgBgCgFg");
	this.shape_105.setTransform(35.4,-268.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A5A4A5").s().p("AgvAAQAEgNArgCQAsACAEANQgEAOgsACQgrgCgEgOg");
	this.shape_106.setTransform(33.4,-268);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#5B5E5B").s().p("AgvAAQAEgRArgCQAsACAEARQgEASgsACQgrgCgEgSg");
	this.shape_107.setTransform(33.4,-267.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5B5E5B").s().p("AkSBEQhxgYgOgmIgBAAIABgDIgBgDQAAgEADgFQAEgdAbg3IAIAJQAfBJCHAjQCGAlClgCQCngCCDgvQgUAkhvAXQhvAXigABQijAAhwgZg");
	this.shape_108.setTransform(31.6,-238.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C1C1C0").s().p("AD7BfQgdgzg0g8Qg1g9hIgjQh2gqhwAVQhbARgWAIQBJggBwgHQCbgEBXA6QBYA6AmBFQAmBHAGAkIgUAIQAAgDgcgzg");
	this.shape_109.setTransform(41.8,-252.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A5A4A5").s().p("AgtCmQA2gUA7geQA5gdAHhGQgFhJhEgkQhDgkg9gKQhqgVh/AgQBLgjB2gHQCagEBYA6QBYA6AlBFQAmBHAHAkQhWAjhRALQgrAFgwAAQgsAAgugEg");
	this.shape_110.setTransform(41.5,-249.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#919191").s().p("AkUCkQhwgYgOgmIgBAAIAAgDIAAgDQAAgFADgGQAEghAhg7QAhg+BSg2QBTg2CagLQCigEBYA5QBZA6AjBFQAjBDAEAdQACAEAAAEQgEAohyAaQhzAbirABQijgBhxgZg");
	this.shape_111.setTransform(31.7,-248);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#707475").s().p("AklBEQh1gbgEgpQAEgoB1gcQB2gbCvgBQCwABB2AbQB2AcAEAoQgFAph1AbQh2AciwABQivgBh2gcg");
	this.shape_112.setTransform(32.7,-236.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C1C1C0").s().p("AkSBhQDdgCCOgcQCRgbAGgoQgGgpiRgcQhmgUiPgIQCfAFBzAWQCXAcAFAqQgFAoiXAcQiTAdjjABIgSgBg");
	this.shape_113.setTransform(58.4,-235.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#919191").s().p("Al3BFQiWgbgGgqQAGgpCWgcQCWgcDhgBQDiABCWAcQCWAcAGApQgGAqiWAbQiWAcjiACQjhgBiWgdg");
	this.shape_114.setTransform(32.6,-235.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#5B5E5B").s().p("Al3BQQiWghgGgvQAGguCWghQCWggDhgBQDiABCWAgQCWAhAGAuQgGAviWAhQiWAgjiABQjhgBiWggg");
	this.shape_115.setTransform(33.6,-234.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#C1C1C0").ss(0.5,1,1).p("AgkhyQgGgCg3D/QAMAAANAAQAYh7AahqIBygXIAHgZg");
	this.shape_116.setTransform(-106.5,-270.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhiCLQA4j/AGACICGgYIgHAZIhxAXQgaBqgYB7IgaAAg");
	this.shape_117.setTransform(-106.5,-270.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ACWAAQgCAMgqAIQgrAIg/AAQg+AAgqgIQgrgIgCgMQACgLArgIQAqgIA+AAQA/AAArAIQAqAIACALg");
	this.shape_118.setTransform(-119,-258.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#34B3D0").s().p("AhpAUQgqgIgBgMQABgLAqgIQArgIA+AAQA/AAAqAIQArAIACALQgCAMgrAIQgqAIg/AAQg+AAgrgIg");
	this.shape_119.setTransform(-119,-258.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F89455").s().p("AgDAAQABgBACAAQADAAABABQgBACgDAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_120.setTransform(-121.3,-228.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F89455").s().p("AgFAAQAAgKAFgBQAGABAAAKQAAALgGABQgFgBAAgLg");
	this.shape_121.setTransform(-118.6,-222.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F89455").s().p("AgHAAQABgFAGgBQAIABAAAFQAAAGgIABQgHgBAAgGg");
	this.shape_122.setTransform(-123.7,-216.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F89455").s().p("AgDAAQABgBACAAQADAAABABQgBACgDAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_123.setTransform(-124.4,-224.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F89455").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_124.setTransform(-127.9,-237.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F89455").s().p("AgDAAQABgDACgBQADABABADQgBAEgDAAQgCAAgBgEg");
	this.shape_125.setTransform(-121.5,-234.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F89455").s().p("AgHAAQABgEAGgBQAIABAAAEQAAAGgIAAQgHAAAAgGg");
	this.shape_126.setTransform(-117.6,-229.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F89455").s().p("AgJAAQABgKAIgBQAJABABAKQgBALgJABQgIgBgBgLg");
	this.shape_127.setTransform(-121.4,-222.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F89455").s().p("AgMAAQAAgNAMgBQAMABABANQgBAOgMABQgMgBAAgOg");
	this.shape_128.setTransform(-123.8,-230.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#C1C1C0").ss(0.5,1,1).p("AgaBZQAFABAQgDQAAgCAIgyQAJgwAPhLQgMAAgNAAQgNBNgPBkg");
	this.shape_129.setTransform(-116.7,-247.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#9FD7E6").s().p("AgaBZQAPhkANhNIAZAAIgYB7IgIA0IgRACIgEAAg");
	this.shape_130.setTransform(-116.7,-247.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#E17444").ss(0.3,1,1).p("ABhAAQgHARhaABQhYgBgJgRQAJgPBYgCQBaACAHAPg");
	this.shape_131.setTransform(-119.5,-240.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F69763").s().p("AhhAAQAJgPBYgCQBaACAHAPQgHAQhaACQhYgCgJgQg");
	this.shape_132.setTransform(-119.5,-240.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F89455").s().p("AgWB8QANh8AHh7IAZAAIgND3g");
	this.shape_133.setTransform(-114.8,-227.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#B4511B").ss(0.3,1,1).p("Ahhh7IDCAAQgBAFgHBPQgIBOAGBVIicAAQAAgDgEhHQgFhFgThog");
	this.shape_134.setTransform(-119.5,-227.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#DC6B23").s().p("AhFB8IgEhKQgFhFgThoIDCAAQgBAFgIBPQgHBOAGBVg");
	this.shape_135.setTransform(-119.5,-227.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AiTjXQABADARBEQAQBEARBiQARBjACBhICkAAQgBgDgBhDQgBhEAMhiQAMhkAohjg");
	this.shape_136.setTransform(-119.1,-236.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#14A6CA").s().p("AhNDaQgChhgRhkQgRhhgQhEIgShHIEngCQgoBjgMBkQgMBhABBEQABBEABADg");
	this.shape_137.setTransform(-119.1,-236.6);

	this.instance_6 = new lib.Symbol33("synched",0);
	this.instance_6.setTransform(-86.2,-241.1);
	this.instance_6.alpha = 0.629;

	this.instance_7 = new lib.Symbol32("synched",0);
	this.instance_7.setTransform(-86.9,-250.2);
	this.instance_7.alpha = 0.672;

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3F7A40").s().p("AgEAIIgQgEQAXACAJgGQgEgFgEgDQAVAIgFADQgJAGgLAAIgEgBg");
	this.shape_138.setTransform(-86,-217.8);

	this.instance_8 = new lib.Symbol31("synched",0);
	this.instance_8.setTransform(-86,-253.6);
	this.instance_8.alpha = 0.629;

	this.instance_9 = new lib.Symbol30("synched",0);
	this.instance_9.setTransform(-103,-254.4);
	this.instance_9.alpha = 0.629;

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhpgBIBLADQBEAEBEgLQgFAChGAHQgYACgWAAQguAAgsgHg");
	this.shape_139.setTransform(-87.2,-252.5);

	this.instance_10 = new lib.Symbol29("synched",0);
	this.instance_10.setTransform(-104.3,-260);
	this.instance_10.alpha = 0.629;

	this.instance_11 = new lib.Symbol28("synched",0);
	this.instance_11.setTransform(-90.6,-252.2);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Symbol27("synched",0);
	this.instance_12.setTransform(-95.4,-253.1);
	this.instance_12.alpha = 0.641;

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#56260B").s().p("AAgARQgVg/g/giIADgHQBBAkATBAQATBCgCAIIgBABQACgHgVhAg");
	this.shape_140.setTransform(-92.1,-257.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BF5656").s().p("AgCAGQgGgEADgFQAFgFAEADQAEAFgCADQgDAEgDAAIgCgBg");
	this.shape_141.setTransform(-89,-246.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BF5656").s().p("AgBAEQgEgDACgDQADgEACADQAEADgCACQgCADgCAAIgBgBg");
	this.shape_142.setTransform(-88.6,-248.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6D1C1D").s().p("AgTAaIgDgDQATAIAKgRQALgUgSgPQgKgHgMAGQAQgOAQALQAVASgMAXQgKAPgMAAQgHAAgJgFg");
	this.shape_143.setTransform(-86.8,-247);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#812425").s().p("AgOAaQgVgSAMgYQARgWAVANQAVASgMAXQgLAPgNAAQgGAAgIgFg");
	this.shape_144.setTransform(-87.3,-247);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#99BC9A").s().p("AhPASQgmgHgCgLQACgKAmgHQAlgIA3AAQBEAAAnAKQglgGg2AAQg3AAgmAHQglAHgCAIQACAKAlAGQAmAHA3AAQAhAAAbgCQghAEgrAAQg3AAglgIg");
	this.shape_145.setTransform(-88.8,-254.8);

	this.instance_13 = new lib.Symbol26("synched",0);
	this.instance_13.setTransform(-100.6,-256);
	this.instance_13.alpha = 0.25;

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#559B56").s().p("AhdASQgmgHgCgLQACgKAmgHQAlgIA4AAQA5AAAlAIQAmAHACAKQgCALgmAHQgmAIg4AAQg4AAglgIg");
	this.shape_146.setTransform(-87.4,-254.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#559B56").s().p("AhdASQgmgHgCgLQACgKAmgHQAlgIA4AAQA5AAAlAIQAmAHACAKQgCALgmAHQgmAIg4AAQg4AAglgIg");
	this.shape_147.setTransform(-87.4,-254.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#276029").s().p("ABBgUQgxACgxgCQg1gCgqgdIEAgDIhpBtQAagjAQgog");
	this.shape_148.setTransform(-87.1,-248.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3F7A40").s().p("AiCg+IEFgDIh+CDg");
	this.shape_149.setTransform(-87.4,-247.7);

	this.instance_14 = new lib.Symbol25("synched",0);
	this.instance_14.setTransform(-103.9,-259.9);
	this.instance_14.alpha = 0.551;

	this.instance_15 = new lib.Symbol24("synched",0);
	this.instance_15.setTransform(-103.9,-259.9);
	this.instance_15.alpha = 0.551;

	this.instance_16 = new lib.Symbol23("synched",0);
	this.instance_16.setTransform(-104.3,-259.9);
	this.instance_16.alpha = 0.551;

	this.instance_17 = new lib.Symbol22("synched",0);
	this.instance_17.setTransform(-103.7,-249.2);
	this.instance_17.alpha = 0.629;

	this.instance_18 = new lib.Symbol21("synched",0);
	this.instance_18.setTransform(-104.2,-257.4);
	this.instance_18.alpha = 0.672;

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3F7A40").s().p("AgSAEQAVACAHgGQgDgEgDgDQATAHgFADQgQAFgHAAQgJAAgEgEg");
	this.shape_150.setTransform(-103.4,-228.3);

	this.instance_19 = new lib.Symbol20("synched",0);
	this.instance_19.setTransform(-103.4,-260.4);
	this.instance_19.alpha = 0.629;

	this.instance_20 = new lib.Symbol19("synched",0);
	this.instance_20.setTransform(-118.8,-261.2);
	this.instance_20.alpha = 0.629;

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AhfgBIBFACQA8AEA+gKQgFACg/AGQgXADgVAAQgoAAgngHg");
	this.shape_151.setTransform(-104.6,-259.5);

	this.instance_21 = new lib.Symbol18("synched",0);
	this.instance_21.setTransform(-120,-266.3);
	this.instance_21.alpha = 0.629;

	this.instance_22 = new lib.Symbol17("synched",0);
	this.instance_22.setTransform(-107.6,-259.2);
	this.instance_22.alpha = 0.5;

	this.instance_23 = new lib.Symbol16("synched",0);
	this.instance_23.setTransform(-111.9,-260);
	this.instance_23.alpha = 0.641;

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#56260B").s().p("AAdAPQgTg4g4gfIACgGQA6AgASA6QARA7gCAIIgBAAQACgGgTg6g");
	this.shape_152.setTransform(-109,-263.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BF5656").s().p("AgCAFQgEgEACgDQAEgFADADQAFAEgDADQgDADgCAAIgCgBg");
	this.shape_153.setTransform(-106.2,-254);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6D1C1D").s().p("AgRAXIgDgCQARAHAJgQQAJgRgPgOQgJgGgLAFQAOgMAPAKQATAQgLAVQgJANgKAAQgHAAgIgFg");
	this.shape_154.setTransform(-104.1,-254.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#812425").s().p("AgMAXQgTgQALgVQAPgUATAMQATAQgMAVQgJAMgMAAQgFAAgHgEg");
	this.shape_155.setTransform(-104.6,-254.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#99BC9A").s().p("AhIARQghgHgCgKQACgIAhgIQAjgGAxgBQA9ABAjAJQgigGgwABQgxAAgiAFQgjAGAAAHQAAAJAjAHQAiAFAxAAQAeAAAYgCQgeAEgmABQgxgBgjgGg");
	this.shape_156.setTransform(-106,-261.5);

	this.instance_24 = new lib.Symbol15("synched",0);
	this.instance_24.setTransform(-116.6,-262.7);
	this.instance_24.alpha = 0.25;

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#559B56").s().p("AhUARQgigHgBgKQABgIAigIQAigGAygBQAzABAiAGQAiAIACAIQgCAKgiAHQgiAGgzABQgygBgigGg");
	this.shape_157.setTransform(-104.7,-261.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#559B56").s().p("AhUARQgigHgBgKQABgIAigIQAigGAygBQAzABAiAGQAiAIACAIQgCAKgiAHQgiAGgzABQgygBgigGg");
	this.shape_158.setTransform(-104.7,-261.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#276029").s().p("AA6gRQgrABgtgBQgvgCgmgbIDngCIhfBhQAXgeAOgkg");
	this.shape_159.setTransform(-104.5,-256.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3F7A40").s().p("Ah1g4IDrgCIhxB1g");
	this.shape_160.setTransform(-104.7,-255.1);

	this.instance_25 = new lib.Symbol14("synched",0);
	this.instance_25.setTransform(-119.6,-266.1);
	this.instance_25.alpha = 0.551;

	this.instance_26 = new lib.Symbol13("synched",0);
	this.instance_26.setTransform(-119.6,-266.1);
	this.instance_26.alpha = 0.551;

	this.instance_27 = new lib.Symbol12("synched",0);
	this.instance_27.setTransform(-120,-266.1);
	this.instance_27.alpha = 0.551;

	this.instance_28 = new lib.Symbol11("synched",0);
	this.instance_28.setTransform(-68.9,-251.8);
	this.instance_28.alpha = 0.629;

	this.instance_29 = new lib.Symbol10("synched",0);
	this.instance_29.setTransform(-69.5,-260.5);
	this.instance_29.alpha = 0.672;

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3F7A40").s().p("AgTAEQAWACAIgGIgHgHQAUAHgFADQgQAFgJAAQgJAAgEgEg");
	this.shape_161.setTransform(-69.6,-225.5);

	this.instance_30 = new lib.Symbol9("synched",0);
	this.instance_30.setTransform(-69.7,-259.7);
	this.instance_30.alpha = 0.629;

	this.instance_31 = new lib.Symbol8("synched",0);
	this.instance_31.setTransform(-86,-260.5);
	this.instance_31.alpha = 0.629;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AhlgBIBIACQBCAEBBgKQgFAChDAGQgYADgVAAQgrAAgrgHg");
	this.shape_162.setTransform(-70.9,-258.7);

	this.instance_32 = new lib.Symbol7("synched",0);
	this.instance_32.setTransform(-87.3,-265.9);
	this.instance_32.alpha = 0.629;

	this.instance_33 = new lib.Symbol6("synched",0);
	this.instance_33.setTransform(-74.1,-258.4);
	this.instance_33.alpha = 0.5;

	this.instance_34 = new lib.Symbol5("synched",0);
	this.instance_34.setTransform(-78.7,-259.2);
	this.instance_34.alpha = 0.641;

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#56260B").s().p("AAfAQQgUg8g8ghIACgGQA+AiATA9QASBAgCAIIgBAAQACgHgUg9g");
	this.shape_163.setTransform(-75.6,-263.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#BF5656").s().p("AgCAGQgFgFADgEQAEgFADADQAFAEgDAEQgCAEgDAAIgCgBg");
	this.shape_164.setTransform(-72.6,-252.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BF5656").s().p("AgBAEQgEgDACgCQADgEACACQAEADgDACQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgBgBg");
	this.shape_165.setTransform(-72.2,-254.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#6D1C1D").s().p("AgSAZIgDgCQASAHAKgRQAKgSgRgPQgKgHgLAGQAPgNAQAKQAUARgMAXQgKANgLAAQgHAAgIgEg");
	this.shape_166.setTransform(-70.4,-253.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#812425").s().p("AgNAZQgVgRANgXQAPgVAVAMQATARgLAXQgKANgNAAQgFAAgIgEg");
	this.shape_167.setTransform(-70.9,-253.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#99BC9A").s().p("AhMASQgkgIgCgKQACgKAkgGQAkgIA1AAQBBABAlAJQgjgFg0gBQg1ABgkAFQgkAHgCAIQACAJAkAHQAkAGA1AAQAfAAAagDQgfAFgpAAQg1AAgkgHg");
	this.shape_168.setTransform(-72.4,-260.8);

	this.instance_35 = new lib.Symbol4("synched",0);
	this.instance_35.setTransform(-83.7,-262.1);
	this.instance_35.alpha = 0.25;

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#559B56").s().p("AhaASQgkgIgBgKQABgKAkgGQAlgIA1AAQA2AAAkAIQAlAGABAKQgBAKglAIQgkAHg2AAQg1AAglgHg");
	this.shape_169.setTransform(-71,-260.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#559B56").s().p("AhaASQgkgIgBgKQABgKAkgGQAlgIA1AAQA2AAAkAIQAlAGABAKQgBAKglAIQgkAHg2AAQg1AAglgHg");
	this.shape_170.setTransform(-71,-260.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#276029").s().p("AA9gSQguABgvgBQgygCgogdID1gCIhkBnQAXggAPgmg");
	this.shape_171.setTransform(-70.8,-255.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#3F7A40").s().p("Ah9g8ID7gCIh5B9g");
	this.shape_172.setTransform(-71,-254);

	this.instance_36 = new lib.Symbol3_1("synched",0);
	this.instance_36.setTransform(-86.8,-265.7);
	this.instance_36.alpha = 0.551;

	this.instance_37 = new lib.Symbol2("synched",0);
	this.instance_37.setTransform(-86.8,-265.7);
	this.instance_37.alpha = 0.551;

	this.instance_38 = new lib.Symbol1("synched",0);
	this.instance_38.setTransform(-87.3,-265.7);
	this.instance_38.alpha = 0.551;

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#C1C1C0").ss(0.5,1,1).p("AgkhyQgGgCg4D/QANAAAMAAQAZh7AahqIBygXIAHgZg");
	this.shape_173.setTransform(-131.6,-263.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AhiCLQA4j/AGACICGgYIgHAZIhxAXQgaBqgZB7IgZAAg");
	this.shape_174.setTransform(-131.6,-263.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ACWAAQgCAMgrAIQgqAIg/AAQg+AAgqgIQgrgIgCgMQACgLArgIQAqgIA+AAQA/AAAqAIQArAIACALg");
	this.shape_175.setTransform(-144.1,-252.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#34B3D0").s().p("AhoAUQgrgIgBgMQABgLArgIQAqgIA+AAQA/AAAqAIQAqAIACALQgBAMgrAIQgqAIg/AAQg+AAgqgIg");
	this.shape_176.setTransform(-144.1,-252.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F89455").s().p("AgDAAQAAAAABAAQAAAAAAAAQABgBABAAQAAAAAAAAQADAAABABQgBACgDAAQAAAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_177.setTransform(-146.4,-222.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F89455").s().p("AgGAAQABgKAFgBQAGABABAKQgBALgGABQgFgBgBgLg");
	this.shape_178.setTransform(-143.7,-215.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F89455").s().p("AgHAAQABgFAGgBQAIABAAAFQAAAGgIABQgHgBAAgGg");
	this.shape_179.setTransform(-148.8,-210.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F89455").s().p("AgDAAQABgBACAAQADAAABABQgBACgDAAQAAAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_180.setTransform(-149.5,-218);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F89455").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_181.setTransform(-153,-231.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F89455").s().p("AgDAAQABgDACgBQADABABADQgBAEgDAAQgCAAgBgEg");
	this.shape_182.setTransform(-146.6,-228.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F89455").s().p("AgHAAQABgFAGAAQAIAAAAAFQAAAFgIABQgHgBAAgFg");
	this.shape_183.setTransform(-142.7,-222.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F89455").s().p("AgJAAQABgKAIgBQAJABABAKQgBALgJABQgIgBgBgLg");
	this.shape_184.setTransform(-146.5,-216);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F89455").s().p("AgNAAQACgNALgBQAMABABANQgBAOgMABQgLgBgCgOg");
	this.shape_185.setTransform(-148.9,-224.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#C1C1C0").ss(0.5,1,1).p("AgaBZQAFABAQgDQAAgCAIgyQAJgwAPhLQgMAAgNAAQgNBNgPBkg");
	this.shape_186.setTransform(-141.8,-240.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#9FD7E6").s().p("AgaBZQAPhkANhNIAZAAIgYB7IgIA0IgRACIgEAAg");
	this.shape_187.setTransform(-141.8,-240.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#E17444").ss(0.3,1,1).p("ABiAAQgIAQhaACQhYgCgIgQQAIgPBYgCQBaACAIAPg");
	this.shape_188.setTransform(-144.6,-233.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F69763").s().p("AhhAAQAJgPBYgCQBaACAHAPQgHAQhaACQhYgCgJgQg");
	this.shape_189.setTransform(-144.6,-233.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F89455").s().p("AgWB8QANh8AHh7IAZAAIgND3g");
	this.shape_190.setTransform(-139.9,-221.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#B4511B").ss(0.3,1,1).p("Ahgh7IDCAAQgCAFgHBQQgIBNAHBVIidAAQABgDgFhHQgFhFgShog");
	this.shape_191.setTransform(-144.6,-221.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#DC6B23").s().p("AhFB8IgEhKQgFhFgThoIDCAAQgBAFgIBQQgHBNAGBVg");
	this.shape_192.setTransform(-144.6,-221.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AiTjXQABADARBEQAQBEARBhQARBkACBhICkAAQgBgDgBhEQgBhDAMhiQAMhkAohjg");
	this.shape_193.setTransform(-144.2,-230.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#14A6CA").s().p("AhNDaQgChhgRhkQgRhhgQhEIgShHIEngCQgoBjgMBkQgMBhABBEQABBEABADg");
	this.shape_194.setTransform(-144.2,-230.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#C1C1C0").ss(0.5,1,1).p("AgkhyQgGgCg4D/QANAAAMAAQAZh7AahqIBxgXIAHgZg");
	this.shape_195.setTransform(-152.4,-269.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AhiCLQA4j/AGACICGgYIgHAZIhxAXQgaBqgYB7IgaAAg");
	this.shape_196.setTransform(-152.4,-269.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ACWAAQgCAMgrAIQgqAIg/AAQg+AAgrgIQgqgIgCgMQACgLAqgIQArgIA+AAQA/AAAqAIQAqAIADALg");
	this.shape_197.setTransform(-164.9,-258.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#34B3D0").s().p("AhpAUQgqgIgBgMQABgLAqgIQArgIA+AAQA/AAAqAIQArAIACALQgCAMgrAIQgqAIg/AAQg+AAgrgIg");
	this.shape_198.setTransform(-164.9,-258.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F89455").s().p("AgDAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQADAAABABQgBACgDAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_199.setTransform(-167.2,-228.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F89455").s().p("AgFAAQAAgKAFgBQAGABAAAKQAAALgGABQgFgBAAgLg");
	this.shape_200.setTransform(-164.5,-221.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F89455").s().p("AgHAAQABgFAGgBQAIABAAAFQAAAGgIABQgHgBAAgGg");
	this.shape_201.setTransform(-169.6,-216.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F89455").s().p("AgDAAQABgBACAAQADAAABABQgBACgDAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_202.setTransform(-170.3,-224);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F89455").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_203.setTransform(-173.8,-237.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F89455").s().p("AgDAAQABgDACAAQADAAABADQgBAEgDABQgCgBgBgEg");
	this.shape_204.setTransform(-167.4,-234.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#F89455").s().p("AgHAAQABgFAGAAQAIAAAAAFQAAAFgIABQgHgBAAgFg");
	this.shape_205.setTransform(-163.5,-228.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F89455").s().p("AgJAAQABgKAIgBQAJABABAKQgBALgJABQgIgBgBgLg");
	this.shape_206.setTransform(-167.3,-222);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F89455").s().p("AgMAAQAAgNAMgBQAMABABANQgBAOgMABQgMgBAAgOg");
	this.shape_207.setTransform(-169.7,-230.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#C1C1C0").ss(0.5,1,1).p("AgaBZQAFABAQgDQAAgCAIgyQAJgwAPhLQgMAAgNAAQgNBNgPBkg");
	this.shape_208.setTransform(-162.6,-246.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#9FD7E6").s().p("AgaBZQAPhkANhNIAZAAIgYB7IgIA0IgRACIgEAAg");
	this.shape_209.setTransform(-162.6,-246.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#E17444").ss(0.3,1,1).p("ABhAAQgIAQhZACQhYgCgJgQQAJgPBYgCQBZACAIAPg");
	this.shape_210.setTransform(-165.4,-239.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F69763").s().p("AhhAAQAJgPBYgCQBaACAHAPQgHAQhaACQhYgCgJgQg");
	this.shape_211.setTransform(-165.4,-239.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F89455").s().p("AgWB8QANh8AHh7IAZAAIgND3g");
	this.shape_212.setTransform(-160.7,-227.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#B4511B").ss(0.3,1,1).p("Ahhh7IDCAAQgBAFgIBPQgHBOAGBVIicAAQAAgDgEhHQgFhFgThog");
	this.shape_213.setTransform(-165.4,-227.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#DC6B23").s().p("AhFB8IgEhKQgFhFgThoIDCAAQgBAFgIBPQgHBOAGBVg");
	this.shape_214.setTransform(-165.4,-227.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AiTjXQABADARBEQAQBEARBhQARBkACBhICkAAQgBgDgBhEQgBhDAMhiQAMhkAohjg");
	this.shape_215.setTransform(-165,-236.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#14A6CA").s().p("AhNDaQgChhgRhkQgRhhgQhEIgShHIEngCQgoBjgMBkQgMBiABBDQABBEABADg");
	this.shape_216.setTransform(-165,-236.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#2F4C14").s().p("AjLBMIhGgFIhagnIAcgiQAZgfAJgBQAGADAmAJIBKATIAnAIIBZgzICBgHQgCgBALgWQALgWAsgTQA2gPBSAHQBSAGAIACQhcAmgsBGQgsBFAAAIIiGgbIhyBXg");
	this.shape_217.setTransform(-128.7,-221.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#757575").s().p("AulDLQoggRnzg4II6lYMAtnAAAIHQFUIj+ATQj3ASmiAUQmiAUoEAIQixAEi1AAQlYAAljgMg");
	this.shape_218.setTransform(0.3,-219.5);

	this.addChild(this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.instance_38,this.instance_37,this.instance_36,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.instance_35,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.instance_34,this.instance_33,this.instance_32,this.shape_162,this.instance_31,this.instance_30,this.shape_161,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.instance_24,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.instance_23,this.instance_22,this.instance_21,this.shape_151,this.instance_20,this.instance_19,this.shape_150,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.instance_13,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.instance_12,this.instance_11,this.instance_10,this.shape_139,this.instance_9,this.instance_8,this.shape_138,this.instance_7,this.instance_6,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.instance_5,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.instance_4,this.instance_3,this.shape_50,this.instance_2,this.instance_1,this.instance,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.2,-285,396.5,569.1);


(lib.playGame = function() {
	this.initialize();

	// Layer 3
	this.text = new cjs.Text("IDS_PLAY_GAME", "24px 'Arial'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 236;
	this.text.setTransform(28,-12);

	// Layer 1
	this.instance = new lib.tombol("synched",0);
	this.instance.setTransform(0.1,-0.3,0.3,0.3);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.1)").s().p("A3VD1IAAnpMAurAAAIAAHpg");
	this.shape.setTransform(126.5,0.5);
	this.addChild(this.shape,this.instance,this.text);

    this.helper = new cjs.ButtonHelper(this, 0, 1, 1, false);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-24,299,49);


(lib.nextQuestion_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,fadeIn:6,fadeOut:12});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_11 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_19 = function() {
        this.gotoAndStop(1);
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(8).call(this.frame_19).wait(1));

	// Text
	this.instance = new lib.nextQuestion_txt();
	this.instance.setTransform(107.5,14.5,1,1,0,0,0,66.5,13.5);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:84.5,alpha:1},6,cjs.Ease.get(1)).to({x:107.5,alpha:0.199},7,cjs.Ease.get(1)).wait(1));

	// BG
	this.instance_1 = new lib.nextQuestion_bg();
	this.instance_1.setTransform(84.5,13.5,1,1,0,0,0,84.5,13.5);
	this.instance_1.alpha = 0.199;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({alpha:0.199},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.fridge = function() {
	this.initialize();

	// BG
	this.instance = new lib.refridge("synched",0);
	this.instance.setTransform(15.5,446.5,1.204,1.204);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-223.2,103.5,477.5,685.1);


(lib.door_refrigde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// playSound("dooropening");
	}
	this.frame_9 = function() {
        this.stop();
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Graphics
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F9F7").s().p("AgYgkIAxgPIgDBbIgtAMg");
	this.shape.setTransform(-154.7,-53.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D0BF").s().p("AgCEQQgKh8gMizQgMizgHirQgGgFBdgQIABB/QAAB7gIC2QgIC4gXC9IgIiDg");
	this.shape_1.setTransform(-152.4,-6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCBD8F").s().p("AhOAhQgDgoAFgnQA/AZBdgWIgDBOQgDACgvAHQgNADgOAAQgjAAgrgOg");
	this.shape_2.setTransform(-143,62.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3D4A8").s().p("AheAYIAAhLQAEAEA6AOQA4APBHgTIgEBNQgEAEg6AHIgUABQgwAAg3gcg");
	this.shape_3.setTransform(-144.4,62.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BCBD8F").s().p("AglAtQgGg7AAg9QArAMAVAPQAXAPAAACIgGBqQgmgXglgHg");
	this.shape_4.setTransform(-138,-52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3D4A8").s().p("AgsAtQhNAPgEAGIABh1QB7grA/AdQBAAdAAAIIgFBqQhbgwhKAPg");
	this.shape_5.setTransform(-146.2,-52.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#848365").s().p("AhRIYQBnj9AUkXQAUkWgwkTQA+AZAFAEIgGQhQgwANglAAQgoAAgfgOg");
	this.shape_6.setTransform(-142.5,4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2A280").s().p("AgNIqQg4gQgDgEIgxwFIAbg4QA7gUBKAbQBNAcAGAGIgGQiQgsANglAAQgbAAgVgHg");
	this.shape_7.setTransform(-146.6,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhbBDIgGhjQgDgFAJgbQAJgcA0gDQA5gFApAdQApAdgOCLg");
	this.shape_8.setTransform(-145.9,-63.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvAuQgBAAgIgEQgIgFgCgRQAAgUADgbIADgeIB+ASIABBDQABABgCAKQgBAKgOAEQgMAFgSAAQgaAAgqgMg");
	this.shape_9.setTransform(-145.1,67.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BCBCBC").s().p("AhHLXQgwgVAFiNQAFhRAHjOIAQm2IANmSIAGixQAHAAA1AdQAyAcAHBAQAEgDAaAPQAaAOAJA+QACAogHCxQgGCxgKDXIgSF6IgICpQABAGgKAsQgKAsgjANQgOAHgSAAQgZAAgcgNg");
	this.shape_10.setTransform(-132.3,7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2D1D2").s().p("A5dOYQE9gvDzguQD0guDVg3QDVg2DfhHQAhgKBygpQBwgqB9g7QB8g7BCg+QBBg+hAgzQgPgRgIgVIgHgWQhhhBgJhZQgJhXBLg5QDUiQDWhyQDWhyDLh5QDLh4C0ijQBFAWAGBKIAADbQhvBIicBKQidBLiWBZQiWBZhaB0QhaBzAXCfQASBMA0BnQA0BmARBgQARBghWA5Qj8CekiAvg");
	this.shape_11.setTransform(13.2,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-205.8,-46.8,224.1,50.9).s().p("A5+OaQhbgJgIhbIAA5rQAIhbBbgJMAz8AAAQBcAJAIBbIAAZrQgJBbhbAJg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9F9F7").s().p("AgYglIAygOIgFBcIgvALg");
	this.shape_13.setTransform(-63.9,-56.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1D0BF").s().p("AgVEQIgNkwQgHi0gCirQgGgFBegNIgDB/QgEB7gNC2QgNC4gaC7IgHiCg");
	this.shape_14.setTransform(-61.9,-10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BCBD8F").s().p("AhQAgQgBgoAFgnQA/AbBegTIgFBNQgDACgwAGIgWACQglAAgugQg");
	this.shape_15.setTransform(-55.5,59.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3D4A8").s().p("AheAWIAChLQADAEA6ARQA4AQBGgRIgFBNQgEADg7AGIgPABQgyAAg4ggg");
	this.shape_16.setTransform(-56.9,58.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BCBD8F").s().p("AgnAsQgFg8ACg7QAqALAWARQAWAQAAACIgJBqQgkgZgmgIg");
	this.shape_17.setTransform(-47.1,-55.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D3D4A8").s().p("AgtAqQhNANgFAGIAFh2QB6goBAAgQBAAfAAAIIgJBqQhZgzhLANg");
	this.shape_18.setTransform(-55.5,-56);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#848365").s().p("AhfIWQBtj7AckWQAdkVgqkUQA/AaAEAEIgkQhQgsAKgiAAQgtAAgggPg");
	this.shape_19.setTransform(-53.5,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A2A280").s().p("AgrIpQg3gRgDgEIgVwGIAdg3QA8gTBJAeQBMAeAHAGIglQhQgoALgiAAQgdAAgagJg");
	this.shape_20.setTransform(-56.1,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhdA/IgDhjQgDgFAKgbQAJgcA1gBQA5gDAoAeQAoAegSCKg");
	this.shape_21.setTransform(-54.8,-66.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgwAtQgBABgIgFQgIgFgBgRIAEgvIADgeIB+AWIgBBDIgBALQgCAKgNADQgMAEgPAAQgbAAgsgOg");
	this.shape_22.setTransform(-57.8,64.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BCBCBC").s().p("AABLMQgygIghgKQgigOgJgsQgIgsABgGIgEiiIgIlrIgGl5QgBiqADgoQAKg+AbgOQAbgNADADQAJhAA1gbQAzgbAIAAIAQDIIAlHGIAmHpQARDjADBTQhigDg0gIg");
	this.shape_23.setTransform(-68.2,-1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E8E7E8").s().p("AwFQiQgcghgBg1IAAiGQEZjgEjjUQEijTEYjtQA/hBgHg5QgGg4ggg4Qgfg4gMg+QgNhpAkhVQAkhVBGhOIBghvQBGhRBJhIQBJhHAggDIBSAHIC1AQIC2APIBSAHQgvAmgwAoIjnCqQhzBVhACRQglBkASBfQASBfAlBdQAkBdASBcQARBpgwBSQgwBShNBEQhMBFhEBAQhzBqgaCGQgbCFAOCSIx9BiIgGABQgmAAgaggg");
	this.shape_24.setTransform(0.9,5.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-175.3,-28.8,181.1,52.2).s().p("A1cRiQgcghgBg1MAAAggXQABg1AcghQAcghAqACMApRADiQA5ANAGBcIAAZrQgGBcg5ANMgpRADiIgGAAQgmAAgagfg");
	this.shape_25.setTransform(35.2,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("A3DRYQgeghgBg1MAAAggDQABg1AeghQAeghAtACICAAAMAqXADYQA+ANAGBcIAAZrQgGBcg+ANMgqUADYIiDAAIgGAAQgpAAgcgfg");
	this.shape_26.setTransform(24.8,-0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9F9F7").s().p("AgXgmIAygMIgGBbIgvAKg");
	this.shape_27.setTransform(-3.8,-53.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D1D0BF").s().p("AgeEPQgEh9gFizQgEi0AAiqQgGgGBegMIgFCAQgFB7gQC1QgPC4gdC7IgFiDg");
	this.shape_28.setTransform(-1.9,-6.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BCBD8F").s().p("AhQAfQgBgnAGgnQA+AbBegSIgGBNQgDADgwAFIgUABQglAAgvgRg");
	this.shape_29.setTransform(3.1,62.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D3D4A8").s().p("AheAWIAChLQAEAEA6ARQA3ARBHgQIgHBNQgDADg8AFIgMAAQgzAAg5ggg");
	this.shape_30.setTransform(1.7,62.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BCBD8F").s().p("AgoAsQgEg8ADg8QApANAWAQQAWARAAABIgLBqQgjgZgmgIg");
	this.shape_31.setTransform(13.1,-51.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D3D4A8").s().p("AguApQhMAMgGAGIAHh1QB7gnA/AgQBAAgAAAIIgKBqQhag0hLAMg");
	this.shape_32.setTransform(4.6,-52.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#848365").s().p("AhnIVQByj6AfkWQAgkUglkVQA9AbAFAFIgyQgQgqAJghAAQgvAAgigQg");
	this.shape_33.setTransform(5.9,4.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A2A280").s().p("Ag5IpQg3gSgDgFIgHwFIAdg3QA9gSBJAfQBLAfAHAGIgzQgQgnAKghAAQgeAAgbgJg");
	this.shape_34.setTransform(4,3.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AheA9IgChjQgCgFAJgbQAKgbA1gBQA5gCAoAeQAnAegTCLg");
	this.shape_35.setTransform(5.4,-63.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgxAtQgBAAgIgFQgIgFAAgRQABgSADgcIAEgfIB+AYIgCBDQABABgCAKQgDAKgNADQgLAEgOAAQgcAAgtgPg");
	this.shape_36.setTransform(0.8,68);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BCBCBC").s().p("AgELKQgzgJghgJQgigQgIgsQgJgsACgGIgCiiIgDlrQgBjOAAirQABiqAEgoQALg9AbgOQAbgNADADQAJg/A2gbQA0gbAHABIAODIIAfHHIAfHpQAODkACBTQhigFgygJg");
	this.shape_37.setTransform(-9.1,1.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D4D3D3").s().p("AuQQ4QgcghgBg2IAAooQB5gtBxgWQB4gVDPgrQDPgsC5hSQC7hSA9iFQA8iHiujLQimjDAiiKQAjiKCchiQCbhjC/hJIBlAPIC8AcIBmAPQjmCgjTC8QhLA+gyBdQgxBcBKBdQA3BBBIAwQBHAxA+A6QBsB0gkB6QglB7h9BXQiNBfiLBOQiKBPiOBYQiNBXh2BpQh3BphxB0IlqA2IgFAAQgmAAgbgfg");
	this.shape_38.setTransform(59.1,8.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-140.4,-17.9,140.4,45.9).s().p("Av+SeQgcghgBg1MAAAgiPQABg1AcghQAcghAqACIeUEeQA6ANAGBcIAAZrQgGBcg6ANI+UEeIgGAAQgmAAgagfg");
	this.shape_39.setTransform(70.2,-1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCCCCC").s().p("Ax4SUQgfghgBg1MAAAgh7QABg1AfghQAeghAsACICoAAIfbEUQA+ANAGBcIAAZrQgGBcg+ANI/YEUIirAAIgGAAQgpAAgbgfg");
	this.shape_40.setTransform(57.7,-1.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F9F9F7").s().p("AgXglIAygNIgHBcIguAJg");
	this.shape_41.setTransform(120.6,-56.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D3D4A8").s().p("AhfAWIAEhLQADAEA6ARQA3ARBHgQIgHBNQgEADg7AFIgMAAQgzAAg6ggg");
	this.shape_42.setTransform(126.1,58.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BCBD8F").s().p("AgoArQgEg7ADg8QApAMAWARQAWARAAABIgLBqQgjgZgmgJg");
	this.shape_43.setTransform(137.5,-55.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D3D4A8").s().p("AgtApQhOAMgEAGIAGh1QB7gnA/AgQA/AgAAAIIgKBqQhYg0hLAMg");
	this.shape_44.setTransform(129.1,-55.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#848365").s().p("AhnIVQBxj6AhkWQAfkUgmkVQA/AbAEAFIgyQgQgqAJghAAQgvAAgigQg");
	this.shape_45.setTransform(130.4,1.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgxAtQgBAAgIgFQgIgFAAgRQAAgSAEgcIAEgfIB+AYIgDBDQACABgDAKQgCAKgNADQgLAEgOAAQgcAAgtgPg");
	this.shape_46.setTransform(125.2,64.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BCBCBC").s().p("AgELLQgNABgbgJQgigPgIgsQgJgsACgGIgCiiIgDlrQgBjPAAiqQABirAEgnQALg+AbgNQAbgNADACQAJg/A0gaQA2gbAHABIAADEIABG/IABHiQAADgACBTQhegDgKABg");
	this.shape_47.setTransform(117.9,-2.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EBEAEA").s().p("AmDQLIAAk5QEBhSDNiuQB+hsBBiTQBAiSgQiSQgQiUhxhxIioibQhVhRgjhoQgkiOA7hyQA8hzBjheICiBNQhCC8AyDIQA9DQA/DGQA+DGgkDWQh+KEo6FwQg+gagEhXg");
	this.shape_48.setTransform(134.4,5.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-70.8,-9.1,67.2,22.2).s().p("Al0S3QgcghgBg1MAAAgjBQABg1AcghQAcghAqACIKAEyQA6ANAGBcIAAZrQgGBcg6ANIqAE8IgGAAQgmAAgagfg");
	this.shape_49.setTransform(135.8,-3.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CCCCCC").s().p("AnuStQgfghgBg1MAAAgitQABg1AfghQAeghAsACICoAAILHEoQA+ANAGBcIAAZrQgGBcg+ANIrEEyIirAAIgGAAQgpAAgbgfg");
	this.shape_50.setTransform(123.3,-3.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],216.8,24.1,-73,-22.3).s().p("AKJSYI3WpqIgE7LIWtAPQAFgDA9gEQA9gEA7AjQA8AigBBvMAAAAgFQACAEgJAkQgJAlgrAeQgbATgzAAQgcAAgjgGg");
	this.shape_51.setTransform(261,32.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#919191").s().p("Ai2SQMAAUglAIDuAUQADgCAgAPQAgAPAZA0QAZAzgRBtIAAfiQACAEgYAsQgYArhOAYQgaAIghAAQhFAAhqghg");
	this.shape_52.setTransform(347.3,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:5.4,y:-63.2}},{t:this.shape_34,p:{x:4,y:3.7}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:3.1,y:62.9}},{t:this.shape_28,p:{x:-1.9,y:-6.7}},{t:this.shape_27}]},2).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_35,p:{x:129.9,y:-66.7}},{t:this.shape_34,p:{x:128.5,y:0.2}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_29,p:{x:127.6,y:59.4}},{t:this.shape_28,p:{x:122.6,y:-10.2}},{t:this.shape_41}]},2).to({state:[{t:this.shape_52},{t:this.shape_51}]},2).wait(2));

	// Text
	this.text = new cjs.Text("You", "24px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 93;
	this.text.setTransform(-6.2,-67.9);

	this.textCongrats1 = new cjs.Text("IDS_CONGRATS", "22px 'Arial'", "#55AAFF");
	this.textCongrats1.textAlign = "center";
	this.textCongrats1.lineHeight = 20;
	this.textCongrats1.lineWidth = 400;
	this.textCongrats1.outline = 4;
	this.textCongrats1.setTransform(0,60);

	this.textCongrats2 = new cjs.Text("IDS_CONGRATS", "22px 'Arial'", "#FFFFFF");
	this.textCongrats2.textAlign = "center";
	this.textCongrats2.lineHeight = 20;
	this.textCongrats2.lineWidth = 400;
	this.textCongrats2.setTransform(0,60);

	this.instance = new lib.win("synched",0);
	this.instance.setTransform(-186.9,-70.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},
        {t:this.text},
        {t:this.textCongrats1},
        {t:this.textCongrats2}
        ]}
        ).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.2,-92.2,352.5,184.5);


(lib.cover = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.tytle("synched",0);
	this.instance.setTransform(545.7,526.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AzNdXMAAAg6uMAmaAAAMAAAA6ug");
	this.shape.setTransform(440.7,226.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(89,155,174,0.6)"],[0,1],-32.5,-180.4,21.1,116.8).s().p("EgrMAB6MBWZgFFIAAA9MhWZAFag");
	this.shape_1.setTransform(295.7,95.6);

	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(48.2,125.1);
	this.instance_1.alpha = 0.469;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.851)","rgba(89,155,174,0.69)"],[0,1],-63.9,-343.2,36.6,205).s().p("EgrHgFSMBV7gFLIAULiMhWOAJYg");
	this.shape_2.setTransform(298.1,148.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9D+QgSgNgLgWQgLgWAAgbQAAgaALgXQALgVASgNQASgNAXAAQAVAAASANQATANALAVQAKAWABAbQgBAbgLAWQgKAWgTANQgSANgVgBQgXABgSgNgABWBxQgTgaAAglQAAglATgYQASgaAcgGIAABoIAABVQgcgHgSgagAhdgEQgSgOgKgVQgKgWAAgbQAAgaAKgXQAKgVASgNQARgNAVAAQAWAAARANQAQANAJAVQAKAWABAbQgBAbgKAWQgJAVgQAOQgRAKgWAAQgVAAgRgKgABRhqQgTgagBgmQABgmATgaQAUgaAfgFIAAC+QgfgEgUgbg");
	this.shape_3.setTransform(110.9,149.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C49910").s().p("AlmJYIgEgEIgBgCIgCgCIgCgEIgBgEIgBgCQgCgDABgKQABgKADgLIAAgEIAFgWIAFgWIABgCIABgBQAAgBAAAAQAAAAABAAQAAAAABABQAAAAABAAIADADIABAEIAAAFIgBADIAAAEQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAABIAAAFIABADIABABIACAAQACgDAAgPQAAgPgEgGIgBgCIgBgCIgBgCIgBgDIACgGIAAgHIgBgDIgDgFQgIgOgigSIgKgGIgCgCIgDAAIgHgEIgCAAIgKgGIgJgFIgJgHIgCAAIgFgDIgBgCIgBgCIgBAAQgIgHgFgHIgJgNIgBgDIgBgEIgDgFIgCgJIgDgLIgBgIIgCgGIgDgaQAAgLABgHIAAgGIABgHIgBgDIADgdIABgFIABgDIAAgFIAJghIAHgTIABgCIAAAAQACgDAEADQAEADACAEIAAABIAAAAIADAHIABACIABABIABADIACADIABADIABAGIAAAFIAAADQAAAWgCAUQgBAUgEAOIgBABIAAABIgCABIgEgBIgCgCIgBgEIgBgEIABgGQABgVgEgJIgDALIAAATIgBACIABAFQAAAQADANQADANAEAKIAFAHIAHAHIAEAEIACAEIADADIAEABQAIAHARALIAqAZIAEADIAEACIAKAKIAJAOIABABIgBgIQgBgMABgBIgBgLIgBgEIAAgGIAAgFIAAgCIgCgFIAAgIIgBgJIAAgHIAAgHIgBgIIgCgIIgBgNIABgNIAAgEIgBgFQgBgRABgGQABgGADgEIAFgDQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAIACAJIADAPIAAgFIABgFIACgGIAAgDIACgCIABgCIABAAIACgDQAJgHALAFQALAGAJAQIABACIACADIACAGIACAGIACAEIACAFIABAFIACAHIACAGIABAGIAAAGIACAGIACAMIADAcIACAIIgBAFIgBADIAAAGIAAALIAAAIIgEAFIgBACIABAGIgCAGIgCAEIgCACQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABIgCADQgHAHgJgDQgKgEgHgOIgCgDIgBgDIgCgDIgEgFIgLgbIgCgFIAAAEIAAAHIAAAFIABAEQABAPAAAOIABACIACAEIADAGIgBAHIgCAHIgBAGIAAAEIACAUIABAYIgBADIAAAGIgBASIgBAOIgBAAIgBAKIgCAJIAAAEIgBACIAAADIgDAGIgDAGIgBAAIgBABQgCADgFAAIgLgBgAk6EqIgBACIgBADIgBAEIABAGQAAAIACALIABAOIgEABIgBACIAAAAIADAFIABAEIABAGIACAFIADAFIACAGIACAEIACAGIABACIACAEIADAEIADAEIABACIAEACIADAAIACgCIACgIIABgJIABgIIgBgNIgBgNIAAgFIgBgFIAAgDIgCgEIgBgEIgIgWIAAgCIgDgFQgHgIgEgBIgCgBQgDAAgCADgAh7IFQgGgEgMgSIgBgBIgHgLIgCgEIgDgEIgEgHIgDgHIgDgDIgFgIIgLgVIgRghIgBgFIgDgDIgEgIQgHgMgMgbIgQgiIgCgDIgCgCIABAHIABACIAAAGIABAFIgBAEQgBACABAJIAAAQIAAAHIAAACIgBAEIgDACQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgDgMIgDgUIgBgFIgBgGIAAgMQAAgJgCgHIgBgFIgBgGIgBgCIgDgQIgFgbIgDgGIgCgGIAAgDIgBgCIgBgBIAAAAIgDgIIgCgFIgBgFIgBgEIgBgBIgBgBQgUg4gOgvQgOgvgHgkIgBAAQgBgCABgEIgBgGIAAgBQgBgEACgCIABgBIABgCIABgEIABgCIABgBIABgBIABAAIADACIADAGIADAFIAAABIACADQABACAEABIACADIADAFIANAfIABABIAAADIABACIABABIABABIAJAWIABgBIAEgEIAFgHIADgEIACgBIADgDIABAAIAAgBIABgBIAAgCIACgDIACgDIACgCIAEgCIACAAIACgEIACgEIgGgUIgEgKIgBgHIAAgGIAAgBQgCgDABgEQAAgFACgDQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQABAAABABIADADIACACIAGARIAIARIACgCIADgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAAABAAAAIABABIABACIAJANIAFAHQADAHABAEQAAAEgDAEIgGAGIADAMIAEAKIABACIACABIABAFIAAACIAeBJIAVAvIABACIABADIABABIABABIAAABIAIAQIAGALIADADIACAAQABgBAAgFIAAgFIABgBIABgCIABAAIgCgDIgBgBIgBgBIAAgCIAAgNIAAgPIgCgEIAAgEIAAgIIgBgKIABgBIgBgEIABgIIABgGIAAgDIAAgLIABgDIAAgFIACgDIACgBIACABIABADIABAFIACAEIABAMIABALIACAGIgBAEIACAIIAAAGIABAGIABANIAAAHIgBABIABAEIADATIAAALIgBADIACAGIACAUQAAALgBAKIgBABIAAAEIgBADIgBABIgBAAIgBAAIgBAAIAAABIgBACIgBAAIgCgBQgGACgEgDQgFgEgJgRIgCgDIgCgEIgBgCIgCgDIgBAAIgCgEIgDgFIgEgIIgEgKIgBgEIgCgBIgBgCIgBgCIgLgaIgIgTIAAgHIgBgCIgBgCIgCgBIgDgIIABAGIAAAGIADAMIAAAHQAAAEACAFIABAIIABAHIgBADIgBADIACAEIABAFIAAAIIAAAFIACAGIAAADIgBAIIAAAFIgBAEIAAAGIgBAGIAAAFIAAAGIAAACIgBACQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQgBAAAAgBIgBgBIgBgFIABgEIgEgHIAAgJIgBgGIgCgEIABgIIgBgGIAAgIIgBgGIAAgBQABgEgBgCIAAgBIACgDIgDgEIgBgIIgDgZQgDgHgDgVIAAgEIAAgDIAAgDIgBgBIgCgBIgCgNIgDgMIAAAAQABgCgEgOIgHgZIgBgHIgCgIIgDADIgCAFIgCAEIgCACIgDADIgBABIAAABIgBAAIgBABIAAACIgBABIgEAFIgIAJIgCgBIgCgBIAAADIAAAEIAAAAIAAABIgCABIAAAGIACAFIACAGIAAAEIABAFIAGAQIACANIABAFIACAEIACAEIAAAFIABAEIACAIIABAFIAAADIACAEIABAIIACAHIABAFIAAADIADAIIAEAJIAAACIABADIACACIAAABIAEAJIAEAJIACAIIADAGIABACIABACIAMAaIABACIAEALIACAIIABABIADADIAGAMIADAHIABAFIADACIALAWIAHANIABAEIACADIABACIADADIADAFIADAGIABABIAAABIACAEIAEAEIABACIABACIACADIACACIADAFIABgDIgCgFIABgDIgBgDIgCgCIAAgDIAAgDIgBgFIgGgaIAAgCIgBgHIgDgFIgBgFIgBgFIAAgFIgBgEIgBgBIgBgBIAAgBIgEgKIAAgFIgBgFIgCgCIgDgKIgCgIIgBgGIAAgEQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAEAFIAGALIAFALIABAEIABADIABACIACAFIAAADIACAEIACAEIACAGIACAHIACAEQAJAYACAKIAAACQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIABACIAGAWIAFAYIAAADIABAEQACAQAAAHQgBAIgDADQgDACgDAAQgCAAgDgCgAkQCxIgCgOIgEgQIgDgKIgCgJIgCgDIgCgJIgGgVIAAgBIgBgCIgCgDIABgCIAAgBIAAAAIAAgBIgDgCIgDgMIgHgRIgCgCIgBAAQgCACAHAXIAGAUIAAAGIACACIABACIABAEIABAHIACAEIAEALIAEAOIAFAMIAIASIAAAAgAAeDJIgFgDIgEgEIgCgNIgBgHIgDgFIACgMIACgLIACAAIABgJQABgEACgDIAAgJIABgIQACgXAAgNQgBgNgCgLIABgFIgCgHIgCgIIAAgFIgBgGIgDgHIgFgXIgGgXIAAgGIgDgFQgEgOgDgKIgJgTQgKgRgNgNQgNgNgPgIIgEgBQgKgIgngCIgLAAIAFAMIAFAMIABAEIADAFIADAIIACAJIACABIANAeIAOAfIAQAjIARAiIABAFIABAFIAFAFIAJAVIAJAVIACAGIACACIAGAOIAFANIAAAEIADAHIADAIIAAAJIAAAIIACAJIgDABIgGgKIgGgKIgBgFIgEgEIgMgXIgMgWIgBgGIgFgGIgNgbIgMgYIgNgbIgCgGIgCgDIgGgHIgHgQIgIgRIgDgDIgIgQIgHgQIgGgOIgFgKIAAgJIAAgBQAAgMgDgJIACgEIACgGIgCgFIgIADIgIACIgBADIgHgCIgJgBIgJAAIgIgRIgJgRIAFAAIAAgGIAFgDIAGgDIABgDIAGgCIADABIAEgFQAEAAAHgDQAlgNAsARIAEAEIABgBQAIADAGAEIAMAJIADABQAJAHAHAIIANATIABADIABADIAEACQAJARAGAQQAHAPAFAPIABAGIADAGIAHAZIAEAWIABAJIACACQAEAVAEAtIABAJIADgJIADgOIADAGIADAGIAAABQADAggEAHIABAGIgCATQgCAOABAJIgDAEIABAIQgCALgEAKQgFAJgGAGQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAgABCAlIgCgBIAAgBQgCgDgDgNIgDgQIgBgDQACgDgCgIIgCgLIgCgHQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIgBgIIgBgIIgDgFIgBgOIgCgOIABgDIgBgCIgDgHIgCgJIAAgCIgCgEIgEgEIgBgBIgBAAQgDgGgBgLQAAgLADgIIAAgGIADgDIAGgGIAAABIACgBIAFgBIADADIAEABIADgBIAOAFQAJADAEAEIAHAEIACACIACAFIAEACIADAEIAFAIIAEAFQAIAOALAdIAPAnIABgBIABgIIABgCIABgLIAAgLIABgBIAAgCIgCgFIAAgGIAAgFIABgBIgBgLIAAgEIAAgCIgBgHIgBgKIgBgIIABgCIgBgDIgCgPIgDgTIABgGIgCgHIAAgHIAJgHIAJACQAEAAAOAVIACADIAIAMIAIAMIADACQAKANAEADQAFADADgDQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBABAAIABgIIABgBIgBgGQAAgNABAAIgCgCIAAgBIABgBIgBgCIABgCIgCgDIAAgEIAAgHIAAgFIgEgjQgHhBACgGIACgEIABgGIABgEIADAAIACgBIAMAHQAEADADAGIAEAGIADAIIACAFIADAFIAEALIADAJIACAHIADAFIAFARIAJAaIAAADIABABIACADIACAGIACAHIABACIAAgHIAAgHIgCgMIgBgOIABgDIgBgEIgBgDIgBgGIgBgFIACgHIgCgIQgBgTACgKQADgKAFgEQAEgCAEABQADABAEAEIAGAFIALALIALANIACAGQADABAHAIQAHAIADgCIABgBIACgDIABgCIgCgFIABgGIAAgGIABgDIgBgJIAAgHIgCgJIgBgLIgCgJIABgEIgCgFIgCgFIgIglIgHgbIgBgIIgDgHIgBgBIgBgCIgMgkIgLgiIgBgGIgCgGIgIgVIgHgaIAAgEIgEgEIgHgbQgJgbAEgCQAEgCALALQAMAMAGALIACADIABAEQAGAPAKAdQAJAdAFANIABACIACAIIADAJIABAFIACAIIAHAXIAGATIABAFIAFANIADAJIABAEIACAFIABACIAMAiIARAsIACAGIAEAJIACAJIADAIIAJATIADAEIABABQAAAAABgBQAAAAAAAAQAAgBAAgBQABAAAAgBIgBgGIAAgEIgCgHIgHgdIgBgFQgNgfgDgNQgDgNAHgDIAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQABAAAAgBIgCgIIgFgYIgGgdIABgDIAAgCIgCgDIgCgCQgEgPgBgJQgCgKACAAQACgBAEACQAEADADAFIAIAPIACAFIAAAEIAEAKQABAEgBADIACAEIADAMIABALIACAGIABAHIABAFIAFAUIADANQADAGAKAJIAHAIIAGAEQAMAJAEgBQACgBABgDIACgKIgBgGIABgEIgBgGIACgCQADgDAAgHQgCgHADgCIAAgFIACgDIABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIADAEIABADIACAEIABAFIABALIAAAJIACAHQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQACAGAAAEQAAAEgBADQABAHgBAMIgBABIgBACIABAFQgBAJgCAFQgCAGgEABQgEACgQgKIgGgFIgDgCIgDgBIgFgDIgFgDIgCgCIgCAAIAAACIAAABIAAAKIACAWIAAAHIABADIgBAFIABAGIAAAFIAAAFIAAAGIACAHQAAAGgBAEQgBAEgCABQgEACgHgGQgGgGgGgLIgCgEIgBgCIgEgHIgIgQIgHgTIgEgHIgJgWIgNghIgDAAIACAFIABAFIACAIIABADIABAFIAAACIAAADIABAIIABAFIAAAIIABAIIAAADIAAACIAAADIAAADIAAABIAAABIAAAEIgBAEQADAGgCAGIAAACIAAAFIgDAIIgCAEIgCACQgEADgKgGQgKgHgMgNIgDgGIgKgGIgKgIIgDAAIgBAAQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgBARIgCADIACAIIAAAIQAAADgCADIACAHIABAHIADAjIABASQABALgBAFQgBAFgGAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgFgGIgEgIIgDgCIgCgFIgQgrIgHgRIgBgDIgCgGIgBgFIgCgCIgBgCIgEgLIgGgOIgCgCIgCABQgEADABAKIABALIABAGIABAGIAAAHIgBABIABAJIAAAAIAAACIAAABIABAEIABAJIgBADIAAAGIABAQQABASgCAFIAAADIgCAJIgEAEIgBABIgDACQgDADgEgBQgEAAgEgEIgEgEIgEgCIgBgCIgCgCIgDAAIgEgFIgFgFIgDgFIgDgCIgJgIIgFgDQgEgEgBABIgBACIAAADIgCACIABAEIABAIIgCABIAAACIABAFIAAAEIABABIAAAFIABAFIgCAEIABACIAAAFIgBAEIABAFIAAAFIACAGIgDAEIABAEIAAAKQAAAGgBAEIAAAHIgCADIAAAFIAAAFIAAADIgCABIAAACIAAAFIgIAKIgCAAIgBACQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgEgGQgDgEgCgGIgFgMIgCgEIgBgHIgCgEIgGgQIgGgPIgBgEIgDgEIgGgMIgEgIQgFgIgEgEQgEgEgFgDIgDgDIgGABIgIgDIgDABIACAIIgBAGIgBAGIABAIIABAEIABAJIABAFIABAFIABAIIABAJIABAFIgCAEIABAEIABAFIABAFIABAGIgBAEIAAADQgBABAAAGQAAAHgBACIAAAFQgBAHAAAHIAAACIgBABIgBgBgABckZIgDgBIgEgEIgDgEIgDgEQgFgJgDgKQgCgKAAgQIABgCIACgBIgCgFIgBgHIAAgHIACgEIABgEIACgDQADgCADABQADABACAEIABABIAEAJIAEAIIACAHIACAGIAAADIADAFIABAEIACAFIABAKIABAHIgCACIABADIgDAJIgCAEIgBABIgDgBIgBAEIgBAAIgCAAg");
	this.shape_4.setTransform(72.7,108.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1600").s().p("AlkJZIgEgEIgCgDIgBgBIgCgFIgBgDIgCgCQgBgDABgKQABgKADgLIAAgEIAFgWIAFgWIABgCIAAgBQABgBAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABIABAEIAAAFIgBADIAAAEIgCAEIABAGIABADIABABIACAAQACgDAAgPQAAgPgEgGIgBgCIgBgCIgBgCIgBgDIACgGIAAgHIgBgDIgDgFQgIgOgigTIgKgFIgDgDIgCAAIgHgEIgCABIgKgGIgKgFIgJgIIgCAAIgFgDIgBgCIgBgBIgBAAQgIgIgFgHIgJgNIgBgDIgBgEIgDgFIgCgKIgDgKIgBgIIgCgGIgDgbQAAgKABgIIAAgFIABgHIgBgDIAEgdIAAgEIACgEIgBgEIAJgiQAEgNAEgGIAAgBIABgBQACgCAEADQADADACAEIABABIgBgBIAEAHIABADIAAABIACADIABACIACAEIABAGIAAAEIAAAEQAAAWgCAUQgCATgEAPIAAABIgBAAIgCABIgDgBIgCgCIgCgEIAAgEIAAgGQACgUgFgJQgCADAAAHIAAATIgCADIABAEQABARACANQADAMAFAKIAFAHIAHAIIADADIACAEQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAZASIAqAaIAEADIAEACIAKAKIAJAOIABABIgBgIIAAgNQABgDgCgIIgBgEIAAgGIAAgEIAAgDIgBgEIgBgJIgBgIIAAgIIAAgHIgBgHIgBgIIgBgOIAAgNIABgEIgCgEQgBgSABgFQABgGAEgEQACgDACAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIACAJIADAPIABgGIABgFIABgFIABgDIABgDIACgBIABgBIACgDQAJgGALAFQALAGAJAQIABACIABADIADAGIACAGIACAEIABAFIACAFIACAGIACAHIABAGIAAAGIACAGIACAMIADAcIABAIIAAAFIgBACIAAAHIAAAKIgBAJIgDAEIgBADIAAAGIgCAGIgBAEIgDACQAAAAAAABQABAAgBAAQAAABAAAAQAAABAAAAIgCAEQgHAHgKgEQgJgEgIgOIgBgCIgCgEIgCgDIgEgFIgLgaIgCgGIAAAEIABAIIgBAFIACAEIAAAdIABACIADADIACAHQAAADgBADIgBAHIgCAHIAAADIACAUIABAYIgBAEIAAAFIgBASIgBAOIgBAAIgBAKIgCAJIAAAEIgBACIAAADIgDAGIgDAGIgBAAIgBABQgCACgFABIgCAAIgJgBgAk3EsIgCACIgBADIgBAEIABAGIACATQACALgBACIgDACIgBABIAAABIACAFIACAEIABAFIABAGIADAFIACAGIACAEIADAGIABACIABADIAEAFIADAEIABACIAEACIACgBIADgBIABgJIACgIIABgIIgBgNIgBgNIgBgFIgBgFIABgDIgCgEIgCgEQgBgGgGgQIgBgCIgCgGQgHgHgEgBIgCgBQgDAAgCADgAh4IIQgHgFgLgSIgBgBIgHgLIgDgEIgCgEIgEgHIgDgGIgDgEIgFgIIgLgVIgRghIgBgEIgDgEIgEgHIgTgnIgRgjIgBgCIgCgDIABAHIABACIAAAGIABAGIgBADQgBACAAAJQABAJgBAHIAAAHIAAACQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIgDACQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgDgMIgEgUIAAgFIgBgGIAAgMQAAgJgCgHIgBgFIgBgGIgBgCIgDgQIgGgbIgCgGIgCgGIgBgDIAAgCIgBgBIgBAAIgCgIIgCgFIgBgFIgBgDIgCgCIAAgBQgUg4gOgvQgOgvgHgkIgBAAIgBgGIAAgGIAAgCQgBgDABgCIABgBIACgBIABgFIABgBIABgCIAAAAIABgBIADACIAEAGIADAFIAAACIACADQABABADABIABABIACADIADAEIANAfIABABIAAADIABACIABABIABABIAJAWIABgBIAEgEIAFgGIADgEIACgCIADgDIABAAIAAAAIABgCIAAgCIACgCIACgEIACgBIAEgDIACABIACgEIACgFIgGgTIgEgMIgBgFIAAgHIAAgBQgCgCABgFQAAgFACgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAABIAEADIADACIACADIAGARIAIAQIACgCIADAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABACIABABIAJAOIAFAHQAEAHAAAEQAAAEgDADIgGAHIADALIAEALIABABIACACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAACIAeBIIAVAwIABABIABADIABACIABABIAAAAIAIARIAGALIADADIACAAQABgBAAgGIAAgEIABgBIABgCIABgBIgCgCIgBgBIgBgCIAAgBIgBgNIAAgPIgBgEIAAgEIAAgIIgBgKIABgCIgBgDIABgJIABgFIAAgDIAAgLIABgDIAAgGIACgDIACgBIACACIABADIABAFIACAEIABALIABAMIACAGQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAIACAIIAAAGIABAGIABANIAAAHIgBACIABADIADATQABAHgBAFIgBADIACAFQACALAAAKQAAAKgBALIgBAAIAAAFIgCADIgBAAIAAABIgCAAIAAABIgBABIgBAAIgCgBQgGADgEgEQgFgDgJgRIgCgDIgCgEIgBgCIgDgDIAAgBIgCgDIgDgFIgEgJIgEgJIgBgEIgCgBIgBgCIgBgCIgLgbIgIgTIAAgGIgBgDIgBgBIgCgBIgDgJIABAHIAAAFIADANIAAAGQAAAFACAEIABAJIABAGIgBADIgBADIACAFIABAFIAAAHIAAAFIACAGIAAADIgBAIIAAAGIgBAEIAAAFIgBAHIAAAFIAAAGIAAACIgBABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgDIgBgCIgBgFIABgEIgEgGIAAgJIgBgHIgCgDIABgIIgBgHIAAgHIgBgGIAAgBIAAgHIAAAAIACgEIgDgEIgBgIIgDgZQgDgHgDgVIgBgDIABgDIAAgDIgBgBIgCgBIgCgNIgDgMIAAgBQABgBgEgPIgHgZIgBgGIgCgIIgDACIgCAGIgCADIgDADIgCACIgBABIAAACIgBAAIgBABIgBABIAAACIgEAEIgIAJIgCAAIgDgCIABADIAAAEIAAABIAAAAIgDACQABACAAADIACAGIABAFIABAFIABAFQAEAIABAIQACAHAAAFIACAFIACAEIABAFIAAAEIACAEIACAIIABAFIAAADIACAEIABAIIACAHIABAFIAAAEIADAIIADAJIABABIABADIABACIABABIADAJIAFAKIACAHIADAHIABACIABABIALAaIACACIADAMIADAHIABACIADACIAFAMIAEAHIABAFIACACIAMAWIAHAOIABAEIACADIABACIADACIADAGIADAFIABACIAAABIACADIAEAFIABACIABACIACADIACACIADAEIABgDIgCgEIAAgEIAAgCIgCgDIgBgCIABgEQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBgBAAIgFgaIgBgDIgBgHIgCgFIgBgFIgCgFIABgEIgBgEIgBgBIgBgBIgBgBIgDgLIAAgFIgBgFIgCgCIgDgJIgCgJIgBgFIAAgEQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABIAEAEIAGALIAFALIABAEIABADIABADIACAEIAAAEIACADIACAEIACAHIACAHIACAEIALAiIAAACIAAAEIACABIAGAXIAFAYIAAACIABAFIACAXQgBAHgDADQgCADgDAAQgDAAgDgCgAkNCzIgCgNIgFgRIgCgJIgCgKIgCgDIgCgIIgGgWIAAAAIgBgDIgCgDIABgBIAAgCIgBAAIgCgDIgEgMQgEgNgCgEIgCgCIgBAAQgCACAHAXIAGAVIAAAFIABACIACACIABAEIAAAHIADAEIAEALIAEAOIAEAMIAJASIAAAAgAAhDMIgBAAIgFgDIgEgEIgCgOIAAgGIgDgGIACgLIABgLIADAAIABgJQAAgEADgEIgBgIIACgIQACgXgBgOQAAgNgDgLIABgFIgCgHIgBgHIgBgFIAAgGIgDgHIgFgXIgGgXIAAgHIgDgEIgHgYIgKgUQgKgRgNgMQgMgNgQgIIgEgBQgJgIgngCIgLAAIAFAMIAFAMIABAEIACAFIAEAIIACAJIACABIANAeIANAfIARAhIARAkIABAEIABAFIAFAGIAJAVIAJAVIABAFIACADIAGANIAGAOIAAAEIADAHIABAHIAAAFIAAAFIACAIIACAIIgFABIgEgJIgGgKIgBgGIgEgEIgMgWIgMgXIgCgFIgEgGIgOgbIgLgYIgOgbIgBgGIgCgFIgGgFIgIgQIgHgRIgDgDIgIgQIgHgQIgGgOIgFgKIAAgJIAAgBQAAgMgDgJIACgEIABgGIgBgFIgIADIgIACIgBADIgHgCIgJgBIgJAAIgIgRIgJgSIAFABIAAgGIAGgDIAFgDIABgEIAGgBIADABIAEgFIALgDQAlgNAsARIADAEIACgBQAHADAHAEQAGAEAGAFIADAAQAJAIAHAIQAHAIAFALIACACIABAEIAEACQAHARAHAPQAHAQAFAPIABAGIADAGIAHAZIAEAWIAAAEIABAEIACADQAEAVAFAtIABAJIADgJIACgOIADAFIADAGIAAABQADAggEAHIABAHIgBATQgCANAAAJIgCAFIAAAIQgCALgEAJQgEAKgGAGIgDABIgCAAgABEAoIgBgBIgBgBQgCgDgCgNIgEgQIAAgFQABgCgCgHIgCgLIgBgHIAAgFIgBgIIgBgIIgCgEIgCgOIgCgOIABgDIgBgDIgDgHIgCgIIAAgCIgCgEIgEgEIgBgBIAAgBQgEgFAAgLQgBgLADgIIABgGIACgEIAGgGIABABIACgBIAEAAIADACIAEABIADgBIAOAFQAJADADAEIAIAFIACACIACAEIADACIAEAEIAFAIIADAFQAJAOAKAdIAPAnIACgBIAAgIIACgCIAAgLIABgLIABgBIAAgCIgCgGIAAgFIAAgFIAAgBIAAgLIgBgEIABgCIgBgIIgBgKIgBgHIABgDIgBgDIgDgOIgCgTIABgHIgCgGIAAgHIAJgIIAIACQAEABAOAVIACACIAIAMIAIAMIADACQAKANAEADQAFADAEgDIACgEIABgIIABgBIgBgGQAAgNABAAIgBgCIgBgBIABgBIgBgCIABgCIgCgDIAAgEIAAgHIAAgFIgEgjQgIhBADgGIACgEIABgGIABgEIADAAIACgBQAHADAEADQAFAEADAFIADAHIADAIIADAEIACAFIAFALIADAJIABAHIADAFIAGARIAJAaIgBADIABABIACADIACAHQABAEACACIABADIAAgIIAAgHIgCgMIgBgOIABgDIgBgDIgCgEIgBgGIAAgFIABgHIgBgIQgBgTACgKQACgKAFgEQAEgCAEABQAEABADAEIAGAEIALAMIALAMIACAHQADABAHAHQAHAIADgCIABgBIACgDIAAgCIgBgFIABgHIAAgFIABgDIAAgFIgBgFIAAgHIgCgIIgBgLIgCgKIABgDIgCgFIgCgGIgIgkIgHgbIgBgIIgDgHIgBgBIgBgCIgMgkIgLgiIgBgGIgCgFIgIgWIgHgZIAAgFIgEgEIgHgbQgJgaAEgCQAEgCALALQALALAHALIABADIABAEQAHAPAJAdIAPApIAAADIADAIIACAJIABAFIADAHIAHAYIAGATIAAAFIAFANIADAIIABAFIACAEIABACIANAiIAQAsIACAGIAEAJIADAJIADAIIAIATIADAEIACABQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgHIAAgDIgCgHIgGgdIgBgFQgOgfgDgNQgCgNAGgDIABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBIgCgIIgFgYIgGgdIABgDIAAgCIgCgDIgCgCIgFgYQgCgKACAAQACgCAFADQAEADACAFIAIAOIACAFIABAEIADAKQABAEAAAEIABADIADANIABAKIACAHIABAHIABAFIAFATIAEAOQADAFAJAJIAHAIIAGAEQAMAJAEgBQACgBABgEQABgDABgGIgBgGIABgEIgBgGIACgDQADgCgBgHQgBgIADgBIAAgFIABgDIACgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABIACADIABAEIACAFIABALQAAAFgBAEIADAHQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABIABAJQABAEgBAEQABAGgCAMIAAABIgBADIABAEQgBAKgCAFQgDAFgDACQgEACgQgKIgGgFIgDgCIgDgBIgFgDIgFgDIgCgBIgBAAIgBACIAAABIABAJIABAWIABAHIAAAEQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIABAGIAAAGIgBAFIABAFIABAHQABAHgBADQgBAEgDACQgDACgHgGQgHgGgGgLIgCgDIgBgDIgEgHIgHgQIgHgTIgEgHIgKgWIgNghIgCAAIABAGIACAFIACAHIABADIAAAFIABADIAAACIABAJIABAEIAAAIIAAAJIABACIgBADIABADIAAACIAAACIAAABIAAAEIgBAEQACAGgBAGIgBACIABAFIgDAHIgCAFIgCACQgFADgJgGQgKgGgLgOIgEgFIgKgGIgKgIIgCgBIgCABQgBABgBAEIgBARIgBADIABAIIAAAIIgBAGIABAHIABAHIADAjIABASQACALgCAFQgBAFgFAEQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIgFgFIgEgIIgCgCIgCgGIgRgrIgHgRIgBgCIgBgGIgCgGIgBgCIgBgBIgFgLIgFgOIgCgCIgCABQgFADACAKIABALIABAGIABAFIAAAIIgBABIABAJIAAAAIAAACIAAABIABAEIAAAIIAAAEIAAAGIABAQQABASgCAEIAAAEIgBAFIgBAEIgEAEIgBABIgDACQgDADgEAAIgIgEIgEgEIgEgCIgBgDIgCgCIgCAAIgFgFIgFgFIgDgFIgDgBIgJgIIgEgEQgFgDgBABIAAACIgBACIgBADIABAEIAAAHIgBACIAAACIAAAFIABAEIAAABIABAFIAAAEIgBAFIAAACIABAEIgBAFIABAJIACAGIgDAFIABAEIAAAKQAAAFgCAFIAAAHIgCADIABAFIAAAEIAAAEIgDABIAAABQAAAEABACIgEAFIgEAFIgDAAIgBACQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgFgGIgEgKIgFgMIgCgEIgCgHIgBgEIgGgQIgGgPIgBgEIgDgEIgGgMIgEgIQgFgIgEgEQgEgEgFgCIgDgEQgDABgDAAQgDAAgFgDIgDABIACAIIgBAGIgBAGIACAIIAAAFIABAJIACAJIABAJIABAIIABAFIgCAFIABADIABAGIABAFIABAGIgBADIAAACQgBACAAAHIAAAIIAAAGQgCAHAAAHIABACIgCAAIgBAAgABekXIgDgBIgEgEIgEgEIgCgEQgFgIgDgLQgCgKAAgQIABgCIACgBIgCgEIgBgHIAAgHIACgFIABgEIACgDQACgCAEABQADABACAEIAAABIAEAJIAEAIIADAHIACAGIAAADIADAEIABAFIABAFIACAKIAAAHIgBACIAAADIgCAJIgCAEIgBABIgDgBIgBAFIgDgBg");
	this.shape_5.setTransform(71.9,112.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDL8IgYgBIgLgBIAA32IBOAAIAAX5IgrgBg");
	this.shape_6.setTransform(63.7,116.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6590F").s().p("AgOL6IAA32IAcAAIAAX5IgcgDg");
	this.shape_7.setTransform(55.2,116.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A51E08").s().p("AhqK4IAAgoIAAhvIAAiiIAAjGIAAjUIAAjWIAAjGIAAiiIAAhuIAAgpICjgBQgPBSgIBTQgJBUAHBQQAHBQAhBIQAbA+AGA7QAGA6gJA3QgIA1gQA1IgiBrQgRA2gMA3QgNA3AAA5QAAAVALASQALASAPASQAQARAOATQAOASAHAXQAHAVgFAbQgEAQgJARIgRAjQgIARgCANQgBAOALAIQASAUATATQhpgVhkgmg");
	this.shape_8.setTransform(32.9,115.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C60606","#C65A0F","#C61808"],[0,0.741,1],-51,0,51,0).s().p("AhDMDQhugDhxgVQhxgUhqgoIAAgpIAAhuIAAijIAAjFIAAjUIAAjXIAAjFIAAiiIAAhvIAAgoIP6gKIAAAuIAAB6IAACyIABDTIAADcIAADUIAACyIgBB8IAAAvQgLAygxAnQgyAohPAaQhPAbhjANQhQAKhWAAIgrgBg");
	this.shape_9.setTransform(73.2,116.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#727272").s().p("AhyB7QhegFhKgNQhKgNg0gPQgzgPgbgLIgcgLIAAguIPth2QARADAEANQAEANgCANIgCANQgCAMgKAVQgKAUgYAVQgYAYgvAXQguAWhKASQhLAThvAJQhDAFg8AAQgnAAglgCg");
	this.shape_10.setTransform(74,183.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4DqQgRgMgKgUQgKgUgBgZQABgZAKgTQAKgVARgMQARgMAVAAQATAAARAMQARAMAKAUQAKAUAAAZQAAAZgKAUQgKAUgRAMQgRAMgTAAQgVAAgRgMgABPBpQgRgYAAgjQAAgiARgWQARgYAagFIAABfIAABOQgagFgRgYgAhWgEQgQgMgKgUQgJgUAAgZQAAgZAJgUQAKgUAQgMQAQgLATgBQAVABAPALQAPAMAJAUQAJAUAAAZQAAAZgJAUQgJAUgPAMQgQAKgUAAQgTAAgQgKgABLhiQgSgYgBgjQABgjASgYQATgYAcgFIAACwQgcgEgTgZg");
	this.shape_11.setTransform(201.6,141.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C49910").s().p("AlKIqIgEgEIgBgCIgCgBIgCgEIgBgEIgBgCQgBgCABgJIADgUIAAgDIAFgVIAFgUIAAgCIABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABAAIABAEIAAAFIgBACIAAAFIgCAEIABAFIABADIABAAIABAAQACgCAAgOQAAgOgDgGIgBgBIgBgCIgBgCIgBgDIABgGIABgGIgBgDIgCgEQgIgNgggRIgJgFIgCgDIgDABIgGgEIgCAAIgJgFIgJgFIgHgHIgDAAIgEgDIgBgBIgBgCIgBAAQgHgHgFgGIgIgMIgBgDIgBgEIgDgEIgCgJIgDgKIAAgHIgCgFIgDgZQAAgKABgHIAAgFIABgGIgBgDIADgbIABgEIABgDIgBgEQAFgUAEgLQADgMADgGIABgBIAAgBQACgCAEADQADACACAEIAAABIADAGIABADIABAAIABADIABACIACAEIABAFIgBAEIABADQAAAVgCASQgCATgDANIAAABIgBAAIgCABIgDgBIgCgCIgBgDIgBgEIAAgFQACgUgEgIIgCAKIAAARIgBADIAAAEQABAPACAMQACAMAFAJIAFAHIAGAGIADAEIACADIADADIAEABQAHAGAQAKIAmAXIAEADIAEACIAJAKIAJANIAAAAIAAgHQgBgLABgBIgCgKIAAgEIAAgFIgBgFIABgCIgCgEIAAgIIgBgIIAAgGIAAgHIgCgHIgBgIIAAgMIAAgMIAAgEIgBgEQgBgQABgFQABgGADgDQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAIACAJIADAOIAAgFIABgFIABgFIABgDIABgCIACgBIABgBIABgDQAJgGAKAFQAKAFAIAPIABACIABADIADAFIACAGIABAEIADAIIACAHIACAGIABAGIAAAFIACAFQABABABALIACAZIACAIIAAAEIgCADIABAGIAAAJIgBAIIgDAEIgBADIABAFIgDAGIgBAEIgCABIgBAEIgBADQgHAHgJgEQgIgEgHgMIgCgDIgBgDIgCgDIgDgEIgLgZIgCgFIAAAEIABAHIAAAEIABAEIAAAbIABACIACADQACADAAADIAAAGIgCAGIgBAGIAAADIACATIABAXIgBADIAAAFIgBAQIgBANIgBAAIAAAJIgDAJIABAEIgBACIAAACIgDAGIgDAFIgBABIgBAAQgCADgEAAIgCAAIgIgBgAkiETIgBACIgBADIgBAEIABAFQAAAHACALQACAKgBACIgDACIgBABIAAABIACAEIABAEIABAFIACAFIACAFIADAFIABAEIADAFIAAACIACADIADAFIADADIABACIADACIADgBIACgBQAAgDABgFIACgIIABgHIgBgMIgBgMIgBgFIgBgFIABgCIgCgEIgBgEIgHgUIgBgCIgCgFQgHgHgDgBIgCAAQgDAAgCACgAhxHeQgGgEgLgRIgBgBIgGgKIgDgEIgCgEIgEgGIgDgGIgCgDIgEgIIgLgTIgQgfIgBgEIgCgDIgEgHIgSgkIgPgfIgBgDIgCgDIABAHIABACIAAAFIABAGIgBADQgBABAAAJQABAJgBAGIAAAGIAAACQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCACIgCgBIgCgKIgEgTIgBgFIAAgFIAAgLQAAgIgCgHIgBgFIgBgFIgBgCIgCgOIgGgZIgCgGIgCgGIAAgCIgBgCIgBgBIAAgBIgCgHIgCgEIgBgEIgBgEIgBgCIgBgBQgTgzgMgrQgNgrgHgiIAAAAIgBgGIAAgFIgBgBQgBgEACgCIABAAIABgCIABgEIABgBIABgCIAAAAIABgBIADACIAEAGIACAEIAAACIACACQAAACAEABIAAAAIACADIADAEIANAcIAAACIAAACIABACIABABIABABIAIAUIABgBIAEgDIAEgGIADgEIACgCIADgCIAAAAIABgBIAAgBIABgCIABgCIADgDIABgCIAEgCIACAAIACgDIABgFIgFgSIgEgJIgBgGIAAgGIAAgBQgCgDABgEQAAgEACgCIADgCIADADIADADIACACIAGAPIAHAQIACgCIACgBIACAAIABABIABACIAIAMIAEAHQAEAGAAAEQAAADgDAEIgGAGIAEAKIADAKIACACIABABIABAEIAAADIAcBCIATAsIABABIABADIABACIAAAAIABABIAHAPIAGALIACACIACAAQABgBAAgFIAAgEIABgBIABgCIABAAIgCgCIgBgBIAAgCIgBgCIAAgLIAAgOIgBgEIAAgDIAAgIIgBgJIAAgBIAAgEIAAgIIABgFIAAgCIAAgLIABgCIABgFIABgDIACgBIACABIABADIABAEIACAEIABALIABALIACAFQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIACAIIAAAFIABAGIABAMIAAAGIgBACIABADIADARQABAHgBAEIgBADIACAFIACATIgBATIgBABIAAAEIgCADIgBAAIAAABIgBgBIgBAAIAAABIAAACIgCAAIgCgBQgFACgEgDQgEgDgJgQIgCgDIgBgDIgBgCIgDgDIAAgBIgCgDIgCgEIgFgIIgDgJIgBgEIgCgBIgBgBIgBgCIgKgYIgHgSIAAgGIgBgDIgBgBIgCgBIgDgIIABAGIABAGIACALIAAAGIACAIIAAAIIACAGIgBADIgBADIABAEIACAEIAAAHIAAAFIABAFIAAADIgBAIIAAAFIAAADIAAAFIgBAGIAAAFIAAAGIgBABIgBACQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgDgDIAAgCIgBgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgDgGIgBgIIAAgHIgCgCIABgIIgBgGIAAgHIgBgFIAAgBIAAgGIAAgBIABgDIgCgEIgBgHIgDgXQgCgHgDgTIgBgDIABgDIgBgDIgBgBIgBgBIgCgMIgDgLIAAAAQACgCgEgNQgFgNgCgKIgBgGIgBgHIgEACIgBAFIgCADIgCACIgDADIAAABIgBABIAAAAIgBABIgBABIAAACIgEAEIgHAIIgCAAIgDgCIABADIAAAEIAAAAIAAABIgDABIABAGIACAEIABAFIABAFIAAAEIAGAPIABAMIACAFIABADIACAEIAAAEIACAEIABAHIABAFIAAADIACADIABAHIACAHIABAFIgBADIAEAIIADAIIAAABIACADIABACIAAABIADAIIAEAJIACAHIADAGIABACIABABIAKAYIACACIADAKIADAHIABACIACACIAFALIADAHIABAEIADACIAKAUIAHANIABADIABADIACACIACADIADAEIADAFIAAACIABABIACADIADAEIABACIABACIACADIACACIACADIABgCIgBgEIAAgDIgBgDIgBgCIgBgDIABgDIgCgEIgFgYIAAgCIgBgHIgDgEIgBgFIgBgFIABgEIgCgDIAAgBIgBgBIAAgBIgDgKIAAgFIgCgEIgBgCIgDgIIgCgJIgBgFIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAIADAEIAGAKIAEAKIABAEIACADIABACIABAEIABAEIABACIACAEIACAGIACAHIABAEIALAfIAAACQgBAAAAABQAAABAAAAQABAAAAABQAAAAAAAAIABACQAEAKACALIAEAVIAAADIABAEIACAWQAAAGgDADQgDADgDAAQgCAAgCgCgAj7CjIgCgMIgEgQIgCgIIgCgJIgCgDIgCgIIgFgTIAAgBIgCgCIgCgDIABgBIABgBIAAgBIgBAAIgCgDIgDgKIgGgQIgCgCIgBAAQgCACAHAVIAFATIABAFIABACIABABIABAFIAAAGIADAEIADAKIAEANIAEALIAIAQIAAAAgAAbC6IgEgDIgEgEIgCgMIAAgGIgDgFIACgLIABgKIADAAQgBgFABgDIADgHIAAgIIABgHQACgWAAgMQgBgMgCgKIABgFIgCgHIgCgGIAAgFIAAgFIgDgHIgFgVIgFgWIAAgFIgDgFIgGgWIgJgSQgKgQgLgLQgMgMgOgHIgEgBQgJgIgkgBIgKgBIAEALIAFALIABAEIACAFIADAHIACAIIACABIAMAcIANAdIAPAgIAQAfIABAFIABAEIAEAFIAJAUIAIATIABAFIACADIAFAMIAGAMIAAAEIADAHIACAGIAAAJIAAAIIACAHIgCABIgGgJIgGgIIgBgGIgDgDIgLgVIgLgVIgCgFIgEgGIgSgkIgSgjIgBgGIgCgDIgFgGIgHgPIgHgQIgDgCIgHgPIgHgPIgGgNIgEgJIAAgIIAAgCQAAgLgDgIIACgDIABgGIgBgEIgHACIgIACIgBACIgGgBIgJgBIgIAAIgIgQIgHgQIAEAAIAAgFIAFgDIAFgDIABgDIAGgCIADACIAEgFIAJgDQAigMApAQIAEAEIABgBIANAGIALAJIADAAIAOAPQAHAHAFAKIACACIAAADIAEACQAIAQAFAOQAHAPAEANIABAGIADAGIAHAXIADAUIABAIIACACIAIA9IABAIIACgIIADgNIADAFIADAGIAAABQACAdgDAHIABAGIgCARQgCANABAIIgDAEIABAHQgCAKgEAJQgEAJgGAGIgEABIgBAAgAA9AjIgCgBIAAgBIgEgPIgEgPIAAgDQACgDgCgHIgCgKIgCgGQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIgBgHIgBgHIgCgFIgCgNIgBgNIAAgCIAAgDIgDgGIgCgIIAAgCIgCgDIgEgEIgBgBIAAgBQgDgFgBgKQAAgKACgHIABgGIACgDIAGgFIAAAAIACgBIAEAAIADACIAEABIADAAIAMAEQAJADADADIAHAFIACACIACAEIADACIADADIAFAIIADAEQAIAOAKAaIANAkIACgBIAAgHIACgCIAAgKIABgKIABgCIAAgBIgCgFIAAgFIAAgFIAAgBIAAgKIAAgEIAAgCIgBgGIgBgKIgBgGIABgDIgBgDIgCgNIgDgSIABgFIgCgHIAAgGIAJgHIAIACQAEAAANAUIABACIAIALIAHALIADACQAJANAEACQAEADAEgDIACgEIABgHIABgBIgBgFQAAgMABgBIgBgBIgBgBIABgBIgBgCIABgCIgBgCIAAgEIgBgHIAAgEIgEghQgGg8ACgFIACgEIAAgFIACgEIACAAIACgBQAHADAEADQAEADADAFIADAHIADAHIAEAJIAFAKIADAIIABAHIACAEIAFAQIAJAYIAAADIABABIABADQACACAAAEIACAGIABACIAAgHIAAgGIgCgMIAAgNIABgCIgBgEIgCgDIgBgGIAAgEIABgHIgBgHQgBgRACgKQACgJAFgDQADgDAEACQAEABADAEIAFAEIAKAKIALAMIACAGQADABAGAHQAGAHADgCIABgBIACgCIAAgCIgBgEIABgHIAAgFIABgDIgBgIIAAgHIgCgIIgBgKIgCgIIABgEIgCgFIgBgEIgIgiIgGgZIgBgHIgDgHIgBgBIgBgCIgLghIgKgfIgBgGIgCgFIgHgUIgHgXIAAgFIgDgDIgHgZQgIgZAEgCQADgCALALQAKAKAGALIABADIABADQAHAOAIAbIANAmIABACIACAIIADAIIABAFIACAHIAGAVIAGASIAAAFIAFAMIADAHIABAFIABAEIABACIAMAfIAPApIACAFIAEAJIACAIIADAHIAIASIACAEIACABQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAgBIAAgGIAAgDIgDgHIgFgaIgBgFQgNgcgDgNQgCgMAGgDIAAAAIACgEIgCgIIgEgWIgGgaIABgDIgBgCIgBgDIgCgCQgEgNgBgJQgBgJACgBQACgBADADQAEADADAEIAHAOIACAEIAAAEIAEAJQABAEgBADIABAEIADALIABAKIACAGIABAGIAAAFIAGASIADAMQACAFAJAJIAHAHIAFAEQAMAIADgBQACgBABgDIABgIIAAgGIAAgEIAAgFIACgDQADgBgBgHQgBgHACgBIABgFIABgDIABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIACADIACADIABAEIABAFIABAKIAAAIIACAGQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIACAJQAAADgBAEQABAGgBALIAAABIgBACIAAAEQgBAJgCAEQgCAFgDABQgEACgOgJIgGgEIgDgDIgCgBIgFgCIgFgDIgCgBIgBAAIgBABIAAABIABAJIABAVIABAGIAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABABAAIABAGIgBAFIAAAEIABAGIABAGQAAAGgBADQgBAEgCABQgDACgHgGQgGgFgFgKIgCgEIgBgCIgDgGIgIgPIgGgSIgEgGIgIgVIgNgeIgCAAIACAFIABAFIACAHIABACIAAAFIABACIAAADIAAAHIABAEIAAAIIABAIIAAACIAAACIAAADIAAACIAAACIAAABIAAADIAAAEQACAFgCAGIAAACIAAAEIgDAIIgBADIgCACQgEADgJgGQgJgFgLgNIgDgFIgJgGIgKgHIgCgBIgCABQAAAAgBABQAAAAAAAAQAAABgBABQAAAAAAABIAAAQIgCADIABAHIABAIIgCAFIABAHIACAGIACAgIABARQACAKgCAFQgBAFgFADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgFgFIgDgIIgCgCIgDgFIgPgnIgGgQIgBgDIgCgFIgBgFIgBgCIgCgBIgDgLIgGgNIgCgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQgEACABAKIABAKIABAFIAAAFIABAIIgBABIABAIIAAACIAAABIAAADIABAIIAAADIAAAGIAAAPQABAQgCAEIAAAEIgBAIIgEADIgBACIgCABQgEADgDgBQgDAAgFgDIgDgEIgEgCIgBgCIgCgCIgCAAIgFgFIgEgFIgDgEIgDgBIgIgIIgEgDQgEgDgBAAIgBACIAAADIgBACIAAAEIABAGIgBACIAAACIAAAEIABAEIAAABIAAAEIABAFIgBAEIAAACIAAAEIAAAEIABAJIABAGIgCAEIAAADIABAKIgCAJIAAAGQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAAEIAAAFIABADIgDABIAAABIAAAFIgGAJIgDAAIgBACQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgEgFIgEgJIgFgLIgCgEIgBgHIgCgDIgFgPIgGgOIgBgDIgCgEIgGgLIgEgIIgIgLQgEgEgFgCIgCgDQgDABgDgBQgCAAgFgCIgDABIACAHIgBAGIgBAGIACAHIAAAEIABAIIACAJIABAIIAAAIIABAEIgBAFIABADIAAAFIABAFIABAFIgBADIABADQgCABAAAGIAAAIIAAAFQgCAGABAGIAAACIgBABIgBAAgABVkDIgDgCIgDgDIgEgEIgCgDQgFgIgCgKQgCgJAAgPIAAgCIACgBIgCgEIAAgGIAAgHIACgEIAAgEIACgDQADgCADABIAFAFIAAABIAEAIIAEAIIACAGIACAGIAAADIACAEIADAJIABAJIABAGIgCACIABADIgCAJIgDADIgBABIgCgBIgBAEIgDAAg");
	this.shape_12.setTransform(166.3,103.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E1600").s().p("AlJIqIgEgDIgBgCIgBgCIgCgEIgBgDIgBgCQgCgDABgJQABgJADgKIAAgEIAFgUIAFgUIAAgCIABgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABIADACIABAEIAAAFIgBACIAAAEIgCAEIABAFIABADIABABIABAAQACgCAAgOQAAgOgDgGIgBgBIgBgCIgBgCIgBgDIABgGIABgGIgBgDIgDgEQgHgNgggSIgJgFIgCgCIgDAAIgGgEIgCABIgJgGIgJgFIgIgHIgCAAIgFgDIgBgBIgBgCIgBAAIgMgNIgIgMIgBgDIgBgEIgDgFIgCgIIgDgKIAAgHIgCgFIgDgZQAAgKABgHIAAgFIABgGIgBgDIADgbIABgEIABgDIAAgEIAIgfIAHgSIAAgBIABgBQACgCADADQAEADACAEIAAAAIAAAAIADAGIABADIAAABIACACIABADIABADIACAGIgBAEIAAADQAAAUgBATQgCASgEANIAAABIgBABIgCABIgDgBIgBgCIgCgEIgBgEIABgFQABgTgEgJQgBAEgBAGIAAASIgBACIABAEQAAAPACAMQADAMAEAJIAFAHIAGAGIAEAEIABADQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAIAHAQAKIAmAXIAEADIAEACIAJAKIAJANIAAAAIAAgHQgBgLABgBQAAgDgCgHIAAgEIAAgFIgBgFIABgCIgCgEIAAgIIgBgIIAAgGIAAgHIgBgHIgBgHIgBgNIAAgMIABgEIgCgDQgBgRABgFQABgFADgEQACgCADgBQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAIIADAOIABgFIAAgEIACgFIAAgDIACgDIABgBIABgBIACgCQAIgGAKAFQAKAFAJAPIABACIABACIACAGIACAGIACAEIADAIIACAGIACAHIAAAFIAAAGIACAFIACALIADAaIABAHIAAAFIgBACIAAAHIAAAJIgBAIIgDAEIgBADIABAFIgCAFIgCAEIgCACIAAADIgCADQgHAHgIgEQgJgDgHgNIgBgCIgCgEIgCgCIgDgFIgKgYIgCgFIgBADIABAHIAAAEIABAEQABANgBAOIABACIADADIACAGIgBAGIgBAGIgCAHIABACIABATIABAXIgBADIAAAFIgBAQIgBANIgBAAIgBAJIgCAJIAAADIAAADIAAACIgEAFIgCAGIgBAAIgBABQgCACgEABIgLgCgAkfEVIgBACIgBACIgCAEIABAGQAAAHACAKIABANIgDABIgBACIACAFIACADIABAFIABAFIADAFIACAFIACAEIACAGIABACIABADIADAEIADAEIABACIAEABIACAAIACgCIACgHIABgIIABgHIgBgNIgBgMIgBgJIABgDIgDgDIgBgEIgHgVIAAgBIgDgFQgGgHgEgBIgCgBQgCAAgCADgAhvHgQgGgEgLgRIAAgBIgHgKIgCgEIgCgEIgEgGIgDgGIgDgDIgEgIIgKgTIgQgeIgBgFIgDgDIgEgHIgRgkIgPggIgCgCIgBgDIAAAHIABACIABAFIAAAGIgBADQgBABABAJQABAJgBAGIAAAGIAAACIgBAEIgDACIgCgBIgCgKIgDgTIgBgFIgBgFIAAgLQABgIgCgHIgBgFIgBgFIgBgCIgDgOIgFgZIgCgGIgCgGIgBgCIAAgCIgBgBIgBgBIgCgHIgCgEIAAgFIgCgDIgBgCIgBgBQgSgzgNgrQgNgsgGghIgBgBIgBgFIAAgGIAAgBQgBgDACgCIABgBIABgBIABgEIABgBIAAgCIABAAIABgBIADACIADAGIACAEIABACIABACQABACAEABIAAAAIACADIADAEIAMAcIABACIAAACIABACIABABIAAABIAJAUIABgBIAEgDIAEgGIADgEIACgCIADgCIAAAAIABgBIAAgBIABgCIABgCIACgDIACgCIAEgCIABABIADgEIABgEIgFgSIgEgLIgBgFIAAgGIAAgBQgCgCABgEQAAgFACgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIADADIADACIACADIAGAPIAHAPIACgCIACAAIACgBIABACIABABIAIANIAEAGQAEAGAAAEQAAAEgDADIgGAGIAEALIADAJIABACIACABIABAFIAAACIAcBDIATArIABACIABADIABABIAAABIABAAIAHAQIAFAKIADACIACABQABgBAAgGIAAgDIABgCIABgBIAAgBIgBgCIgBgBIgBgBIAAgCIAAgMIAAgOIgCgDIAAgEIABgIIgBgJIAAgBIgBgDIABgIIABgFIAAgDIAAgKIABgDIAAgFIACgDIACgBIABACIACADIABAEIABAEIACAKIAAALIACAGIgBADIACAHIAAAGIABAFIABAMIAAAHQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABAEIADARIAAALIgBACIABAFQACAKAAAJQABAKgCAJIAAABIAAAEIgCADIgBABIgBAAIAAAAIgBAAIAAABIgBABIgBAAIgCgBQgFADgEgEQgEgDgJgPIgCgDIgCgEIgBgCIgCgDIAAAAIgCgDIgDgFIgEgIIgDgJIgBgDIgCgBIgBgCIgBgCIgKgYIgHgSIgBgGIAAgCIgBgBIgCgCIgDgHIABAGIAAAFIADALIAAAGQAAAEACAFIAAAHIABAGQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBADIABAEIACAFIgBAHIABAEIABAGIAAADIgBAHIAAAFIgBAEIAAAFIAAAGIAAAEIAAAGIgBACIgBABIgCABIgDgDIgBgBIgBgFIABgEIgEgGIAAgIIgBgGIgCgDIACgIIgCgGIABgHIgBgFIAAgBQAAgEgBgCIABgBIABgDIgCgEIgBgHIgDgXQgDgHgCgTIgBgDIABgDIgBgCIgBgCIgBgBIgCgMIgDgLQACgCgFgNIgGgXIgBgGIgCgHIgDACIgBAFIgCADIgDADIgCACIgBABIAAABIgBAAIgBABIAAABIgBACIgDAEIgHAIIgDAAIgCgBIABACIAAAEIAAAAIgBABIgCABIABAGIABAEIACAFIABAFIAAAEQAEAIABAHQACAHAAAFIACAFIABADIACAEIAAAEIABAEIACAHIABAFIAAADIACADIABAHIACAHIAAAFIAAADIAEAIIACAIIABABIABADIABACIABABIADAIIAEAJIACAHIADAGIABACIABABIAKAYIABACIAEAKIACAHIABACIACACIAGALIADAHIABAEIACACIALAUIAGANIACAEIABACIABACIADADIACAFIADAFIABABIAAABIACADIAEAEIABACIABACIACADIABACIADAEIABgDIgBgEIAAgDIgBgDIgCgCIAAgCIABgEIgCgEIgFgYIAAgCIgBgHIgDgEIgBgFIgBgEIAAgFIgBgDIgBgBIAAgBIgBgBIgDgKIAAgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgCIgCgIIgDgIIAAgFQAAgBgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABIADAEIAGAKIAEAKIABAEIACADIAAACIACAEIAAAEIACADIABAEIADAGIACAGIABAEQAIAVADAKIgBACIABADIABACIAGAVIAEAWIAAACIABAEQACAPAAAHQgBAGgCADQgDADgCAAQgDAAgDgCgAj5ClIgBgMIgEgQIgCgIIgDgJIgBgDIgCgIIgFgTIgBgBIgBgCIgCgDIABgBIAAgBIAAgBIgCgDIgEgLQgDgMgDgDQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgBgBQgCADAGAVIAGATIAAAFIABABIABACQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIAAAGIACAEIAEAKIAEANIAEALIAHAQIAAAAgAAeC8IgFgCIgEgFIgBgMIgBgGIgCgFIABgKIACgLIACAAIABgIIACgHIAAgIIACgHIABgiQAAgMgDgKIABgFIgCgGIgBgHIgBgFIAAgFIgDgHIgFgVIgFgVIAAgGIgDgEIgGgWIgJgSQgJgQgMgMQgMgLgOgIIgDgBQgJgHgkgCIgLAAIAFALIAFALIAAADIADAFIADAIIACAIIACABIAMAcIAMAcIAQAfIAPAhIACAJIAFAFIAIATIAJATIABAGIACACIAFAMIAFANIABAEIACAGIABAHIAAAIIABAIIACAIIgEABIgEgJIgFgJIgBgFIgEgEIgLgVIgLgUIgBgFIgFgGIgRgkIgSgkIgCgFIgCgFIgFgEIgHgQIgHgPIgCgDIgIgOIgHgPIgFgNIgEgKIAAgIIAAgBQAAgLgDgIIACgEIABgFIgBgFIgIADIgHACIgBACIgHgCIgIAAIgIAAIgIgQIgHgQIAEAAIAAgFIAFgDIAFgDIABgDIAGgCIACABIAEgEIAKgDQAigMApAQIADAEIACgBIAMAGIALAIIADABIAPAOQAGAIAGAJIABADIABADIADACQAHAPAHAPQAGAOAFAOIAAAFIAEAGIAGAXIADAVIABAHIADADIAHA8IABAJIADgJIACgNIADAGIADAFIAAABQACAegDAGIABAGIgCASQgCAMABAJIgCADIAAAIQgBAKgFAJQgEAJgFAFIgEABgAA/AlIgBgBIgBgBQgCgDgCgMIgDgPIgBgEQACgCgCgHIgCgKIgCgGIABgEIgBgIIgBgHIgCgFIgCgMIgBgNIAAgDIAAgCIgDgHIgCgIIAAgCIgCgDIgEgEIAAAAIgBgBQgDgFgBgKQAAgKADgIIAAgFIACgEIAGgFIAAABIACgBIAEgBIADADIAEABIADgBIAMAEQAIADAEADIAHAFIACACIACAEIADACIADADIAFAHIADAFQAIANAJAbIAOAkIACgCIAAgGIABgCIABgKIAAgKIABgCIAAgBIgBgFIAAgFIgBgFIABgBIAAgLIgBgDIAAgCIgBgHIAAgJIgBgHIAAgCIAAgDIgDgOIgCgRIABgGIgCgGIAAgGIAEgEIAFgDIAHABQAEABANATIABADIAIALIAHAKIADADQAJAMAEACQAEADAEgDIACgEIABgHIABgBIgBgGQAAgLABgBIgBgBIgBgBIABgBIgBgCIABgCIgBgCIAAgEIgBgHIAAgEIgEghQgGg8ACgFIABgEIABgFIACgEIACgBIACAAQAHACAEAEQAEADACAFIAEAGIADAHIAEAJIAEAKIADAJIACAGIACAEIAFAQIAIAYIAAADIABABIACADIACAGQAAAEACACIABACIAAgHIAAgGIgCgMIgBgNIABgCIgBgEIgBgDIgBgFIAAgEIABgHIgCgHQAAgSABgKQACgJAFgDQAEgDADABQAEABADAEIAFAEIAKALIALALIACAGQADABAGAHQAGAHADgCIABgBIACgCIAAgCIgBgEIABgHIAAgFIABgDIgBgIIAAgHIgCgIIgBgKIgCgJIABgDIgEgJIgHgiIgHgZIAAgHIgDgHIgBgBIgBgCIgLghIgKgfIgBgGIgCgFIgHgUIgHgXIAAgEIgDgEIgHgZQgIgYAEgCQADgCALAKQAKAKAGALIABADIABADQAGAOAJAbIANAmIABACIACAIIACAIIABAFIADAGIAGAWIAFASIABAEIAFAMIACAIIABAEIACAEIABACIAMAfIAPApIABAFIAEAJIADAJIACAHIAIARIADAEIABAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgGIAAgDIgCgHIgGgaIgBgFQgNgcgCgMQgCgNAFgDIABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgIIgFgWIgFgaIAAgDIAAgCIgCgDIgBgCQgEgNgBgJQgCgJACAAQACgBAEACQAEADACAEIAHANIACAFIAAAEIAEAJIAAAHIABADIADAMIACAKIACAFIAAAHIABAEIAFATIADAMQADAFAIAIIAHAHIAFAEQAMAIADgBQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAgBIABgIIAAgGIAAgEIAAgFIACgDQADgCgBgHQgBgGACgCIAAgEIABgDIACgCQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIADAEIABADIACAEIABAEIABAKIAAAJIACAGQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIACAJIgBAHQABAGgCALIAAABIgBACIABAFIgDANQgCAFgDABQgEACgOgJIgGgEIgDgCIgCgBIgJgGIgDgBIgBAAIgBACIAAABIABAJIACAUIAAAHIAAADIAAAEIABAFIAAAGIgBAEIABAFIABAHQABAFgBAEQgBAEgCABQgEACgGgGQgGgFgGgKIgBgDIgBgDIgEgGIgHgPIgGgRIgEgHIgJgUIgMgeIgCgBIABAFIACAFIABAHIACADIAAAFIAAACIAAACIABAIIABAEIAAAIIABAHIAAADIAAACIAAADIAAACIAAABIAAACIAAADIgBAEQACAFgBAGIAAACIAAAEIgDAHIgBAEIgCACQgFADgIgGQgJgFgLgNIgDgFIgJgFIgKgIIgCAAIgBABQgBAAAAAAQAAAAAAABQgBABAAAAQAAABAAABIgBAQIgCADIACAHIAAAHIgBAGIABAHIABAGIADAgIABARQABAKgBAFQgBAFgFADQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgCgBgDgEIgEgHIgCgCIgCgFIgPgoIgHgPIAAgDIgCgGIgBgFIgCgBIgBgCIgEgKQgCgIgDgFIgCgBIgCAAQgEADACAJIABALIABAFIAAAFIABAHIgBABIABAJIAAABIAAABIAAAEIABAIIAAADIAAAGIAAAOQABAQgCAFIAAAEIgBAIIgEADIgBACIgCABQgDADgEgBQgDAAgFgDIgDgEIgEgCIgBgCIgCgCIgCAAIgEgFIgFgEIgCgFIgDgBIgIgHIgEgDIgFgDIgBACIAAACIgCACIABAEIAAAHIgBACIAAABIABAFIAAAEIAAABIABAEIABAFIgCAEIABABIAAAEIgBAFIABAJIACAFIgDAEIABAEIAAAJIgBAKIAAAGIgCADIAAAEIAAAEIAAAEIgCABIAAABIAAAFIgDAFIgEAEIgCAAIgBACIgEgBIgEgFIgFgJIgEgLIgCgEIgBgHIgCgDIgGgPIgFgOIgBgDIgCgEIgGgLIgEgIQgEgHgEgEQgEgEgFgCIgDgDIgFABIgHgDIgDABIACAHIgBAGIgBAGIACAHIAAAEIABAJIACAIIABAIIAAAIIABAFIgBAEIABADIAAAFIABAFIABAFIgBAEIABABQgCACABAGIgBAIIAAAFQgCAGABAHIAAABIgBABIgBAAgABXkBIgDgCIgDgDIgEgEIgCgDQgFgIgCgKQgCgJgBgPIABgCIACgBIgCgEIAAgGIAAgHIABgEIABgEIACgDQACgCADABQADABACAEIABABIADAIIAEAIIACAGIACAFIAAADIADAFIABAEIABAFIACAIIAAAHIgBACIAAACIgCAJIgCAEIgBABIgCgBIgCAEIgBAAIgBAAg");
	this.shape_13.setTransform(165.6,106.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgELCIgVgBIgKgBIAA2BIBHgBIAAWFIgogBg");
	this.shape_14.setTransform(158,110.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6590F").s().p("AgMLAIAA2BIAZgBIAAWFIgZgDg");
	this.shape_15.setTransform(150.1,110.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A51E08").s().p("AhiKDIAAguIAAh7IAAizIAAjTIAAjcIAAjTIAAiyIAAh7IAAguICXgCQgOBNgIBNQgIBNAGBJQAHBKAeBDQAeBFADBAQACA/gNA6QgOA9gUA7QgUA7gQA8QgPA8gBBAQABAYAOAUQAPAVASAUQASAVAMAXQALAYgGAfQgEAOgIARIgQAgQgHAQgBAMQgCANAKAHQARATASARQhhgThdgjg");
	this.shape_16.setTransform(129.5,109.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#C60606","#C65A0F","#C61808"],[0,0.741,1],-47.1,0,47.1,0).s().p("Ag9LIQhngDhogTQhogThhglIAAguIAAh7IAAiyIAAjTIAAjcIAAjTIAAizIAAh7IAAguIOsgJIAAArIAABxIAACkIAADDIAADLIAADDIAAClIAAByIAAAsQgLAugtAkQguAlhJAYQhJAZhcAMQhJAJhNAAIgqgBg");
	this.shape_17.setTransform(166.7,110.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#727272").s().p("AiTBvQhngKhJgRQhJgRgngPQgngOAAgBIAAgqIOghtQAPADAEAMQADAMgBALIgCAMQgCAMgJASQgJATgXAUQgWAVgrAWQgqAVhGAQQhFARhmAJQhAAEg4AAQg6AAgzgEg");
	this.shape_18.setTransform(167.5,172.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhHDOQgVgXgBgkQABgkAVgXQAVgYAggBQAdABAWAYQAVAXAAAkQAAAkgVAXQgVAXgeACQgggCgVgXgABPBiQgRgWgBggQABghARgUQAQgXAbgFIgBBaIAABJQgagFgQgXgAhkgRQgTgXgBgkQABgjATgXQAUgYAdgBQAeAAAVAYQARAXABAkQgBAkgRAXQgVAVgeACQgdgBgUgWgABLhbQgSgYgBggQABghASgWQASgXAdgFIAACmQgdgFgSgWg");
	this.shape_19.setTransform(292.7,134.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C49910").s().p("AlJIHIgDgEIgCgCIgBgBIgCgEIgBgDIgBgCQgBgCABgJQAAgIADgKIAAgDIAFgTIAFgTIAAgCIABgBQAAAAAAAAQAAgBABAAQAAAAABABQAAAAABAAIADACIABAEIAAAEIgBACIAAAEIgCAEIABAFIABADIABAAIABAAQACgCAAgNQAAgNgDgGIgBgBIgBgCIgBgBIgBgDIABgGIABgGIgCgCIgCgEQgHgMgggQIgJgFIgCgCIgCAAIgHgEIgBABIgKgFIgJgFIgHgHIgCABIgFgDIgBgBIgBgCIgBAAIgMgMQgFgGgCgGIgCgCIgBgEIgCgEIgDgIIgCgJIgBgHIgBgFIgDgXQgBgJABgHIAAgFIABgGIAAgCIADgZIAAgEIABgEIAAgDQAEgSAEgLQAEgLADgGIAAgBIABgBQACgCADADQAEADABADIABABIgBAAIAEAFIABADIAAABIABACIACACIABAEIABAEIAAAEIAAADQAAATgCASQgBARgEAMIAAABIgBABIgCABIgDgBIgBgCIgCgDIgBgEIABgFQABgSgEgIQgBADgBAGIAAARIgBACIABAEQAAAOACALQADALAEAJIAFAGIAGAGIAEAEIABACIADAEIAEAAIAXAQIAmAVIAEADIAEACIAJAJIAIAMIABAAIgBgGIAAgLQABgEgCgGIgBgEIABgFIgBgEIAAgCIgBgEIgBgHIAAgIIAAgGIgBgGIgBgHIgBgHIgBgLIABgLIAAgEIgBgEQgBgPABgFQABgFADgEIAEgCQAAAAABAAQAAAAABABQAAAAAAAAQAAAAABABIACAHIACANIABgEIABgFIABgEIABgDIABgCIABgBIABgBIACgDQAIgFAKAEQAKAFAJAOIABACIABACIACAGIACAFIACAEIADAIIACAFIACAGIAAAGIAAAFIACAEIACALIADAYIABAHIAAAEIgBADIAAAGIAAAJIgBAHIgDAEIgBACIABAFIgCAFIgCAEIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgCADQgGAGgJgEQgJgDgHgMIgBgCIgBgDIgDgDIgDgEIgKgXIgCgEIAAADIABAGIgBAFIABADQABAMAAANIABACIACADIACAGIgBAFIgBAGIgBAGIAAADIACARIAAAVIAAADIAAAFIgBAPIgBANIgBAAIgBAIIgCAIIAAADIgBADIABACIgEAFIgCAFIgBABIgBAAQgCACgEABIgLgBgAkgECIgBABIgBADIgBAEIABAFIABAQQACAKAAACIgEABIgBACIADAEIABAEIABAEIABAFIADAFIACAFIACADIACAFIABACIACADIACAEIADAEIABABIAEACIACgBIADgBQgBgDACgEIABgIIABgGIgBgMIgBgLIgBgJIABgDIgDgDIgBgDIgHgUIAAgBIgDgFQgGgGgEgBIgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgAhxG/QgGgEgLgPIAAgBIgHgKIgCgDIgCgEIgEgGIgDgFIgCgDIgFgHIgKgSIgQgdIgBgEIgCgDIgEgGIgSgiQgKgXgFgHIgBgCIgCgCIABAGIABACIAAAFIABAFIgBADIAAAJIAAAOIAAAGIgBACIAAADIgDACQgBABAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgCgKIgDgRIgBgFIgBgFIAAgKQAAgIgBgGIgCgFIgBgFIAAgBIgDgOIgFgYIgCgFIgCgFIgBgCIgBgCIAAgBIgBgBIgCgGIgCgFIAAgEIgCgDIgBgBIgBgBQgSgwgNgpQgMgpgHgfIgBAAIAAgFIgBgGIAAAAQgBgDACgCIABgBIABgBIABgFIAAgBIABgBIABAAIABgBIADACIADAFIACAEIABACIABACQABACAEABIAAAAIACACIACAEIANAbIABABIAAACIABACIABABIAAABIAIATIACgBIADgDIAFgGIADgEIABgBIADgCIABAAIAAgBIABgBIAAgCIACgCIACgDIACgBIADgDIACABIACgEIACgEIgFgQIgEgJIgBgGIAAgFIgBgBQgBgDAAgEQABgEACgCQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEADIADACIABACIAGAPIAHAOIACgCIADAAIABgBIABABIABACIAIAMIAEAGQAEAGAAADQAAADgDAEIgFAFIADAKIADAJIACACIABABIABAEIAAACIAcA/IATApIABABIABADIABABIAAAAIABABIAHAOIAFAKIADACIACABQABgBAAgFIAAgEIABgBIABgBIAAgBIgBgCIgBgBIgBgBIAAgCIAAgLIAAgNIgCgDIAAgEIABgHIgBgIIAAgCIgBgDIABgHIABgFIAAgCIAAgKIABgCIAAgFIACgDIACgBIABABIACADIABAEIABAEIACAKIAAAKIACAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIACAHIAAAFIABAFIABAMIAAAGQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIABADIADAQIAAALIgBACIABAFQACAJAAAJQABAJgCAIIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgBACIgBABIgBABIAAgBIgBAAIAAABIgBACIgBAAIgCgBQgFACgEgDQgEgDgJgPIgCgCIgBgEIgCgBIgCgDIAAgBIgCgDIgDgEIgEgHIgDgJIgBgDIgCgBIgBgCIgBgBIgKgXIgHgRIAAgGIgBgCIgBgBIgCgBIgDgHIACAGIAAAFIACAKIAAAGIACAIIAAAHIACAGIgBACIgBADIABAEIACAEIAAAGIAAAFIABAFIAAADIgBAHIAAAEIAAAEIAAAEIgBAGIAAAFIAAAFIgBABIAAACIgDABIgDgDIAAgCIgBgEIAAgDIgDgGIAAgIIgBgGIgCgCIABgHIgBgGIAAgHIgBgFIAAgBIAAgFIAAgBIABgDIgCgDIgBgHIgDgWQgCgGgDgSIgBgDIABgDIgBgCIAAgBIgBgBIgDgLIgDgLQACgCgEgMIgGgWIgBgFIgCgHIgDACIgCAFIgCADIgCACIgDACIAAABIAAABIgBABIgBAAIgBABIAAACIgDAEIgIAIIgCgBIgCgBIAAACIABAEIgBAAIAAABIgCABIAAAFIAEAJIABAJIAFANIACALIABAFIACADIABAEIAAAEIACAEIABAGIACAFIAAACIACAEIABAGIABAHIABAEIAAADIADAHIADAIIABABIABADIABABIABABIACAIIAFAIIABAHIADAFIABACIABABIALAWIABADIADAJIADAHIABABIACACIAFALIADAGIABAEIADACIAKATIAHALIABAEIABADIACABIACADIAGAJIAAABIABABIABADIAEAEIABACIABACIACACIABACIADAEIABgDIgBgEIAAgDIgBgCIgBgCIgBgCIABgDIgCgEIgFgXIAAgCIgBgGIgDgEIgCgJIAAgEIgBgDIAAgBIgBgBIgBgBIgDgJIABgEIgCgEIgBgCIgDgIIgCgIIgBgFIAAgDQAAAAAAAAQAAgBABAAQAAAAAAABQAAAAABAAIADAEIAGAJIAEAKIABADIACADIABACIABAEIAAADIACADIABAEIADAFIACAGIABAEQAIAUADAJIgBACIABADIABACIAGATIAEAUIAAADIABAEQACAOAAAGQgBAGgCADQgDACgDAAQgCAAgDgCgAj6CZIgCgMQgBgGgDgIIgCgIIgCgIIgBgDIgDgIIgFgSIAAgBIgBgCIgCgDIABgBIAAgBIAAAAIgCgDIgEgKQgDgLgDgEIgBgCIgBAAQgCADAGATIAGASIAAAFIABABIABACIACAEIAAAGIACAEIAEAJIADAMIAFAKIAHAQIAAAAgAAbCuIgEgDIgEgEIgCgLIAAgFIgDgFIACgKIABgKIADAAIAAgHIADgHIAAgHIABgHQACgUAAgMQgBgLgCgKIABgEIgCgGIgCgGIAAgFIAAgFIgDgGIgFgUIgFgUIAAgFIgDgEQgEgMgCgJIgJgRQgJgPgMgLQgMgLgOgGIgEgBQgJgIgjgBIgLAAIAFAKIAFAKIAAAEIADAEIADAHIACAIIACABIAMAaIAMAbIAQAeIAPAdIACAIIAFAFIAIASIAIASIABAFIACADIAGALIAFAMIAAADIADAHIACAGIAAAIIAAAHIACAHIgCABIgGgIIgFgIIgBgFIgEgEIgLgTIgLgUIgCgEIgEgGIgSgiIgRghIgCgFIgCgDIgFgGIgHgOIgHgOIgDgDIgHgOIgHgOIgFgMIgEgJIAAgHIAAgBQAAgLgDgHIACgDIABgGIgBgEIgIACIgHACIgBACIgGgBIgJgBIgIAAIgIgPIgHgPIAEABIAAgFIAFgDIAFgDIABgDIAGgBIADABIADgFIAKgCQAigMApAQIADADIACgBIAMAGIALAIIADAAIAPAOIAMAQIABACIABADIADACIAOAcIALAbIAAAFIADAFIAHAVIADAUIABAHIACACQAEASAEAnIABAIIACgIIADgMIADAFIADAFIAAABQACAcgDAFIABAGIgCAQQgCAMABAIIgDAEIABAHQgCAJgEAJQgEAIgGAFIgEABIgBAAgAA9AgIgCgBIAAgBIgEgNIgEgOIAAgDQABgDgBgGIgCgKIgCgGIAAgEIAAgHIgBgGIgCgFIgCgMIgBgMIAAgCIAAgCIgDgGIgCgIIAAgCIgCgDIgEgEIAAAAIgBgBQgDgFgBgJQAAgJACgHIABgGIACgDIAGgFIAAABIACgBIAEAAIADACIAEABIADgBIAMAEQAIADAEADIAHAEIACACIACAEIADACIADADIAFAHIADAEQAIANAJAZIAOAhIACgBIAAgGIABgCIABgJIAAgKIABgBIAAgCIgBgEIgBgJIABgCIgBgJIAAgEIAAgBIgBgHIAAgIIgBgGIAAgDIgBgDIgCgMIgCgRIABgFIgCgGIAAgGIAJgGIAHABQAEABANASIABACIAIALIAHAKIADACQAJALAEADQAEACAEgCIACgEIABgGIABgCIAAgFQgBgLABAAIgBgBIgBgBIABgBIgBgCIABgCIgBgCIAAgEIAAgGIgBgEIgEgfQgGg4ACgFIACgDIAAgFIACgEIACAAIADgBQAGADAEADQAEADADAFIADAFIADAHIAEAIIAEAKIAEAIIABAGIACAEIAFAPIAJAXIAAACIAAABIACADIACAFIACAGIABACIAAgGIAAgGIgCgLIgBgMIABgDIAAgDIgCgDIgBgFIAAgEIABgGIgBgHQgBgRACgIQACgJAFgDQADgCAEABQADABAEAEIAFADIAKAKIAKALIADAGQACABAHAGQAGAHADgCIABgBIABgCIABgCIgBgEIAAgGIAAgFIACgCIgBgIIgBgGIgBgIIgCgJIgBgIIABgDIgEgJIgHggIgHgYIgBgGIgCgGIgBgCIgBgBIgLgfIgKgdIgBgGIgDgFIgGgSIgHgWIAAgEIgDgEIgIgXQgHgXAEgCQADgCAKAKQALAKAGAKIABADIABADQAGANAJAZIANAkIABACIACAHIACAHIABAFIACAGIAHAVIAFAQIABAFIAEALIADAHIABAEIACAEIABACIAMAdIAOAmIACAFIAEAIIACAJIADAGIAIARIACADIACABIACgDIgBgGIAAgDIgCgGIgGgZIgBgFQgNgagCgLQgDgMAGgDIABAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgCgCgFIgEgVIgGgZIABgCIAAgCIgCgDIgBgBQgEgNgBgIQgCgIACgBQACgBAEACQAEADACAEIAHANIACAEIAAAEIAEAIIAAAHIABADIADALIABAJIACAFIABAGIABAFIAFARIADALQACAFAJAIIAHAHIAFADQAMAIADgBQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIABgIIAAgGIAAgDIAAgFIACgDQADgCgBgGQgBgGACgBIABgFIABgCIABgCIACABIADADIABADIACAEIABAEIABAJIAAAJIACAFQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIACAIIgBAGQABAGgCAKIAAABIgBACIABAEIgDANQgCAEgDABQgEACgOgJIgGgDIgDgDIgCgBIgFgCIgFgDIgCgBIgBAAIgBACIAAAAIABAJIACATIAAAGIAAADIAAAEIABAFIAAAFIgBAEIABAFIABAGIAAAIQgBAEgDABQgDACgGgGQgHgFgFgJIgCgDIgBgCIgDgGQgEgHgDgIIgHgQIgDgGIgJgTIgMgdIgCAAIACAJIACAHIABADIABAEIAAACIAAACIABAIIABADIAAAIIAAAHIAAACIAAACIAAADIABACIAAABIAAABIAAADIgBAEQACAFgBAFIgBACIAAAEIgCAHIgCADIgCACQgEADgJgGQgJgFgLgMIgDgEIgJgGIgJgHIgCAAIgCAAQAAABgBAAQAAAAAAABQAAAAgBABQAAABAAAAIgBAPIgBADIABAGIAAAIIgBAFIABAGIABAGIADAeIABAQQABAJgBAFQgBAEgFADQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgFgFIgEgHIgCgBIgCgFIgPglIgGgPIgBgCIgCgGIgBgEIgBgCIgBgBIgEgKIgGgMIgCgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgEADABAIIABAKIABAFIABAFIAAAHIgBABQACAHgBAAIAAACIAAABIAAADIABAHIAAADIAAAGIAAAOQABAPgCAEIAAADIgBAIIgEADIgBABIgCACQgDACgEAAQgDgBgFgDIgDgDIgEgCIgBgCIgCgCIgCAAIgJgJIgCgEIgDgBIgIgHIgEgDQgFgDAAABQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAADIgCACIABADIAAAGIgBACIAAABIABAFIAAAEIAAAAIABAEIABAFIgCAEIABABIAAAEIgBAEIABAIIABAFIgCAEIABAEIAAAJIgBAIIgBAGIgBADIAAAEIAAAHIgCABIAAABIAAAFIgHAIIgDAAIAAABQgBABgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgCgBgDgEIgEgJIgEgKIgCgEIgCgGIgBgDIgGgOIgFgNIgBgDIgDgEIgFgKIgEgHQgEgHgEgEQgEgDgFgCIgDgDQgCABgDgBQgDAAgEgCIgDABIACAHIgBAFIgBAFIABAHIABAEIABAIIACAIIABAHIAAAIIABAEIgBAEIAAADIABAFIABAEIABAFIgBADIABADQgCABAAAFQABAFgBACIAAAFQgCAGABAGIAAACIgBAAIgBAAgABVjzIgDgBIgDgEIgEgDIgCgDQgFgIgCgJQgCgIgBgOIABgCIACgBIgCgEIAAgGIAAgGIACgDIAAgEIACgDQADgCACABQADABACAEIABABIAEAHIADAIIACAFIACAFIAAADIADAEIACAIIACAJIAAAGIgBACIAAACIgCAIIgCAEIgBAAIgCAAIgBADIgCABIgBgBg");
	this.shape_20.setTransform(257.6,98.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E1600").s().p("AlHIHIgEgDIgBgCIgBgCIgCgDIgBgEIgBgBQgCgDABgIIAEgTIAAgDIAFgTIAEgTIABgBIAAgCIAEAAIADADIABADIAAAFIgBACIAAAEQgBABAAAAQAAABgBAAQAAAAAAABQAAAAAAABIABAEIAAADIABABIACAAQACgCAAgNQAAgNgDgGIgBgBIgBgCIgBgCIgBgCIABgGIABgGIgCgDIgCgDQgHgNgggQIgJgFIgCgCIgDAAIgGgDIgCAAIgJgFIgJgFIgIgGIgCAAIgFgDIAAgBIgCgCIgBAAIgLgMQgGgHgCgFIgCgDIgBgDIgCgEIgDgIIgCgJIgBgHIgBgFIgDgXQgBgKACgGIgBgFIACgGIgBgCIADgZIAAgEIACgDIgBgEIAIgdQAEgLADgFIABgCIAAAAQACgCAEACQADADACADIAAABIADAGIABACIABABIABACIABADIACADIABAFIgBAEIABADQAAATgCARQgCARgDAMIgBABIAAABIgCABIgDgBIgCgCIgBgDIgBgEIAAgFQACgSgFgIIgBAKQgBAGAAAKIgBACIABAEQAAAOADALQACAMAFAIQABADADADIAHAGIADAEIACADIADADIADAAIAYAQIAmAWIAEADIAEABIAJAKIAIAMIABAAIgBgGIAAgLQABgEgCgGIAAgEIAAgFIgBgEIAAgCIgBgEIgBgHIAAgIIAAgGIAAgGIgCgHIgBgHIAAgLIAAgLIAAgEIgBgEIAAgUQABgFADgDIAEgDQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAABIACAIIADANIABgJIABgFIABgDIACgCIABgBIABgBIACgCQAIgGAKAFQAKAFAIANIABADIACACIACAFIACAFIACAEIACAIIACAGIACAGIABAFIAAAFIACAFQABABABAKIACAYIACAHIgBAEIgBACIAAAGIAAAJIAAAHIgDAEIgBADIAAAEIgCAGIgBADIgCACIgBADIgCADQgGAGgJgDQgIgEgIgMIgBgCIgBgDIgCgCIgEgFIgKgXIgCgEIAAADIABAGIgBAFIACADIAAAZIABACIACADIACAGIAAAFIgCAGIgBAGIAAADIACARIAAAVIAAADIAAAFIgBAPIgBANIgBgBIgBAJIgCAIIAAADIgBACIAAADIgDAFIgCAFIgBAAIgBABQgCACgEAAIgDAAIgIgBgAkeEDIgBACIgBACIgBAEIABAFQAAAHACAJQACAKgBACIgDACIgBABIAAAAIACAFIABADIABAFIACAFIACAEIADAFIABAEIACAFIABABIACADIADAEIADAEIABACIADABIADAAIACgCIABgHIACgHIABgHIgBgLIgBgMIgCgIIABgDIgCgDIgBgEIgHgTIgBgBIgCgFQgGgHgEgBIgCAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABgAhuHBQgGgEgLgPIAAgBIgHgKIgCgDIgCgEIgEgGIgDgFIgDgDIgEgHIgKgSIgQgdIgBgEIgCgDIgEgGQgHgLgLgXIgPgeIgBgCIgCgDIABAHIAAABIABAGIABAEIgBADQgBACAAAIQABAIgBAGIAAAFIAAADIgBADQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgDgJIgDgSIgBgFIAAgEIAAgLQAAgHgCgHIgBgEIgBgFIgBgCIgCgNIgGgYIgCgFIgCgGIAAgCIgBgCIgBgBIAAAAIgCgHIgCgEIgBgEIgBgDIgBgCIgBgBQgSgwgNgoQgNgpgGgfIgBgBQgBgBAAgEIAAgFIAAgCQgBgCABgCIABAAIACgCIAAgEIABgBIABgBIABgBIABAAIADACIADAFIACAEIABACIABACQABACADAAIABABIACACIACAEIANAbIAAABIABACIABACIAAABIABABIAIATIABgBIAEgDIAFgGIACgEIACgBIADgCIABAAIAAgBIABgBIAAgCIACgCIACgDIACgBIADgCIACAAIACgEIACgEIgGgQIgDgLIgCgEIABgFIgBgBQgBgDAAgDQABgEACgDIACgBIAEADIACACIACADIAGAOIAHAOIACgBIADgBIABgBIABACIABABIAIAMIAEAGQAEAGAAADQAAAEgDADIgFAFIADAKIADAJIACACIABABIABAEIAAACIAcA/QAKAYAJARIABABIABADIABABIAAABIABAAIAHAPIAFAJIADADIACAAIABgGIAAgEIABgBIABgBIAAgBIgBgCIgBgBIgBgBIAAgCIgBgLIAAgNIgBgDIAAgDIAAgHIAAgJIAAgBIgBgDIABgIIABgEIAAgDIAAgJIABgDIAAgFIACgDIABAAIACABIABADIACAEIABADIABAKIABAKIACAFIgBADIABAHIABAFIAAAGIACALIgBAGIAAABIABADIACARIAAAKIAAACIABAFIACASIgBASIAAAAIgBAEIgBADIgBAAIgBABIgBAAIAAAAIAAAAIgBACIgBAAIgCgBQgFACgEgDQgFgDgIgPIgCgCIgCgEIgBgBIgCgDIAAgBIgCgDIgDgEIgEgHIgDgIIgBgEIgCgBIgBgCIgBgBIgKgXIgHgRIgBgFIAAgCIgBgBIgCgCIgDgHIABAGIAAAFIADAKIAAAGQAAAEACAEIAAAHIACAGIgBACIgBADIABAEIACAEIgBAGIABAFIABAFIAAADIgBAHIAAAEIAAAEIgBAEIAAAGIAAAFIAAAFIgBABIgBACIgCABIgDgDIgBgCIgBgEIABgDIgDgGIgBgIIAAgGIgCgCIABgHIgBgGIAAgHIgBgFIAAgBIAAgFIAAgBIABgDIgCgDIgBgHIgDgWQgCgGgDgSIgBgDIABgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIgBgBIgBgBIgCgLIgDgLQACgBgEgNIgHgVIAAgGIgCgHIgDACIgCAFIgCADIgCACIgDACIAAABIgBABIAAABIgBAAIgBABIAAACIgEAEIgHAIIgCgBIgDgBIABACIAAAEIAAAAIAAABIgCABIAAAFIACAFIABAEIACAIIAFAOIACALIABAFIABADIACAEIAAAEIACADIABAHIABAFIAAACIACAEIABAGIACAHIABAEIAAADIADAHIADAIIAAABIACACIAAACIABABIADAIIAEAIIACAHIADAFIABACIABABIAKAWIABADIAEAJIACAHIABABIADACIAFALIADAGIABAEIACACIALATIAGALIACAEIABADIABABIACADIAGAJIABABIAAABIACADIAEAEIABACIABACIABACIACACIADAEIABgDIgCgEIABgDIgBgCIgCgCIAAgCIABgDIgCgEQgBgIgEgPIgBgCIgBgGIgCgEIgCgJIAAgEIgBgDIgBgBIAAgBIgBgBIgDgJIAAgEIgBgEIgCgCIgCgIIgDgIIAAgFQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIACAAIADAEIAGAKIAEAJIABADIABADIABACIACAEIAAADIABADIACAEIADAFIABAGIACAEQAIAUACAJIAAACQAAAAAAABQAAABAAAAQAAAAAAABQAAAAABAAIABACQADAJACAKIAFAVIAAACIABAEIACAUQgBAGgDADQgCACgDAAQgDAAgCgCgAj3CbIgCgMIgEgPIgCgHIgCgIIgCgDIgCgIIgFgSIAAgBIgBgCIgCgDIABgBIAAgBIAAAAIAAgBIgDgCIgDgKIgGgPIgBgCIgBAAQgCACAGAUIAFASIABAFIABABIABACIABAEIABAFIACAEIADAKIAEAMIAEAKIAIAQIAAAAgAAeCwIgFgCIgEgEIgBgMIgBgFIgCgFIABgKIACgJIACgBQAAgEABgDIADgHIgBgHQAAgEACgDIABggQAAgLgDgJIABgFIgCgGIgBgGIgBgFIAAgFIgDgGIgEgUIgGgUIAAgFIgCgEIgHgVQgEgJgFgHQgJgPgMgLQgLgLgOgHIgEgBQgJgHgjgBIgLAAIAFAKIAEAKIABADIADAFIADAHIACAHIABABIANAbIAMAaIAPAdIAQAeIACAJIAEAFIAJASIAIASIABAFIACACIAFAMIAGALIAAAEIACAGIABAGIAAAIIACAHIABAIIgEAAIgDgIIgGgIIgBgFIgDgEIgMgTIgLgTIgBgFIgEgFIgSgiIgRgiIgCgFIgCgEIgFgEIgHgPIgHgOIgDgCIgHgOIgHgOIgFgMIgEgJIAAgHIAAgCQAAgKgDgIIACgDIABgFIgBgEIgIACIgHACIgBACIgHgCIgIAAIgIAAIgIgPIgHgPIAEAAIAAgFIAFgDIAFgCIABgDIAGgCIACABIAEgEIAKgDQAigLAoAPIAEADIABAAIANAGIALAHIADABIAOANIAMAQIABADIABADIADABIAOAcQAGAOAFANIABAFIADAFIAGAWIADATIABAHIADACIAHA5IABAIIADgIIACgMIADAFIADAFIAAABQACAcgDAGIABAFIgCARQgCALABAIIgCAEIAAAHQgCAJgEAJQgEAIgFAFIgEABIgBAAgAA/AiIgCgBIAAgBIgEgNIgEgOIAAgFQACgBgCgGIgCgKIgCgGIABgEIgBgHIgBgGIgCgFIgCgMIgBgMIAAgCIAAgCIgDgGIgCgIIAAgCIgCgDIgEgDIAAgBIgBgBQgDgEAAgKQgBgJADgHIAAgFIACgEIAGgFIAAABIACgBIAEAAIADACIAEABIADgBIAMAEQAIADAEADIAHAEIACACIACAEIADACIACADIAGAHIACAEQAIANAKAYIAOAiIABgBIABgHIABgBIAAgKIABgJIABgCIAAgBIgCgFIAAgJIAAgBIAAgKIAAgDIAAgCIgBgGIgBgJIgBgGIABgCIgBgDIgCgNIgDgQIABgGIgBgFIgBgGIAFgEIAEgDIAIACQAEAAAMASIACADIAHAKIAIAKIACACQAJALAEADQAFACADgCQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQABgDAAgEIABgBIAAgFIAAgLIgBgCIgBgBIABAAIgBgCIABgCIgBgCIAAgEIAAgGIgBgEIgEgfQgGg4ACgFIACgDIAAgGIACgDIACgBIACAAQAHACAEADQAEADADAFIADAGIADAHIAEAIIAEAJIADAIIACAGIACAEIAFAPIAIAXIAAACIABABIACADIACAFIACAGIABACIAAgGIAAgGIgCgLIgBgMIABgDIgBgDIgBgDIgBgFIAAgEIABgGIgCgHQgBgRACgIQACgJAFgDQAEgCADABQAEAAADAEIAFAEIAKAKIAKAKIADAGQACABAHAGQAGAHADgCIABgBIABgCIABgBIgBgFIAAgGIAAgFIACgCIgCgIIAAgGIgBgIIgCgJIgBgIIABgDIgEgJIgIggIgGgYIgBgGIgCgGIgBgBIgBgCIgLgfIgKgdIgBgFIgDgFIgGgTIgHgWIAAgEIgDgDIgHgYQgIgWAEgCQADgCAKAJQALAKAGAKIABADIABADQAGANAJAZIANAkIAAACIADAHIACAHIABAFIACAGIAHAUIAFARIABAFIAEAKIADAIIABAEIACAEIABABIALAeIAPAlIACAGIADAIIADAIIADAGIAHARIADAEIACAAIABgDIgBgGIAAgDIgCgGIgGgZIgBgFQgMgagDgLQgCgMAGgCIAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgHIgFgVIgFgYIABgDIgBgCIgBgCIgCgCQgEgNgBgIQgBgIABgBQACgBAEADQAEACACAEIAHANIACAEIABAEIADAIIABAHIABADIADAKIABAKIACAFIABAGIAAAEIAFASIADALQADAFAIAIIAHAGIAFADQAMAJADgCQAAAAAAAAQABgBAAAAQABAAAAgBQAAgBABAAIABgIIAAgGIAAgDIAAgFIACgDQADgCgBgGQgBgGACgCIAAgEIABgDIACgBIACABIADADIABADIACAEIABAEIABAJIAAAIIACAGQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIACAIIgBAHQABAGgCAKIAAABIgBACIABAEQgBAIgCAFQgCAEgDABQgEACgOgIIgGgEIgDgCIgCgBIgFgDIgEgCIgDgBIgBAAIAAABIgBABIABAIIACAUIAAAGIABADIgBAEIABAFIAAAEIAAAFIAAAFIABAGQABAFgBADQgBAEgCABQgEACgGgGQgGgFgFgJIgCgDIgBgCIgEgGIgHgOIgGgQIgEgGIgIgTIgMgdIgDAAIADAJIACAHIABACIAAAFIABACIAAACIABAHIAAAEIABAHIAAAHIAAADIAAACIAAADIABACIgBABIAAABIAAADIAAADQACAGgCAFIAAACIAAAEIgCAHIgCADIgCACQgEADgJgFQgJgGgKgLIgDgFIgKgFIgJgHIgCAAIgCAAIgCAEIAAAPIgCADIACAGIAAAHQAAADgCADIACAGIABAGIADAeIAAAQQACAJgBAFQgCAEgEADQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIgFgFIgEgGIgCgCIgCgFIgPglIgHgPIAAgCIgCgFIgBgFIgCgBIgBgCIgEgJQgCgIgDgFIgCgBIgCABQgEACACAJIABAKIABAEIAAAFIABAHIgBABIABAIIAAABIAAACIAAADIABAHIAAADIAAAGIAAANQABAPgCAFIAAADIgBAHIgEAEIgBABIgCACQgDACgEAAQgDgBgEgDIgEgDIgDgCIgCgCIgBgBIgDgBIgEgEIgFgEIgCgFIgDgBIgIgHIgEgDQgEgDgBABIgBACIAAACIgCACIABAEIABAGIgBACIgBABIABAEIABAEIAAABIAAAEIABAEIgCAEIABACIAAADIAAAFIABAIIABAFIgDAEIABADIAAAJIgBAJIAAAGQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIAAAEIAAAEIABADIgDABIAAABQAAADABACIgHAJIgDAAIgBABIgEAAIgEgGIgEgIIgFgKIgBgEIgCgGIgBgDIgGgOIgGgNIgBgDIgCgEIgFgKIgEgHIgIgLQgEgDgFgCIgDgDIgFAAQgDAAgEgCIgDABIACAHIgBAFIgBAFIACAHIAAAEIABAIIACAIIABAHIAAAIIABAEIgBAEIAAADIABAFIABAEIABAFIgBADIABACQgCACAAAFIAAAIIAAAEQgCAGABAGIAAACIgBAAIgBABIAAgBgABXjxIgDgCIgEgDIgDgDIgDgDQgEgIgCgJQgCgJgBgNIABgCIACgBIgCgEIAAgGIgBgGIACgEIABgEIACgCQACgCADABIAFAEIABABIADAIIAEAHIACAGIACAFIAAADIACAEIADAIQABAEAAAEIABAGIgCACIABADIgCAIIgCADIgBABIgDgBIgBAEIgCAAg");
	this.shape_21.setTransform(256.9,102.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDKVIgVgBIgLgBIAA0oIBHAAIAAUrIgngBg");
	this.shape_22.setTransform(249.3,105.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C6590F").s().p("AgMKTIAA0oIAZAAIAAUrIgZgDg");
	this.shape_23.setTransform(241.5,105.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A51E08").s().p("AhhJaIAAgrIAAhzIAAinIAAjGIAAjOIAAjGIAAinIAAhzIAAgrICWgCQgOBIgIBIQgIBJAGBFQAHBEAeA/QAeBBACA7QADA8gOA2QgOA5gTA3QgUA3gQA4QgPA5gBA8QABAWAOAUQAPASASAUQASATALAWQAMAXgGAcQgEAOgJAPIgPAeQgHAPgCAMQgBAMAKAHQAQARASAPQhggRhcghg");
	this.shape_24.setTransform(221,104.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#C60606","#C65A0F","#C61808"],[0,0.741,1],-46.8,0,46.9,0).s().p("Ag9KbQhmgDhngRQhogShhgjIAAgrIAAhzIAAinIAAjGIAAjOIAAjGIAAinIAAhzIAAgrIOngJIAAAoIAABqIAACaIAAC2IAAC/IAAC2IAACbIAABrIAAAoQgKAsguAiQgtAihJAXQhIAXhcALQhKAJhOAAIgngBg");
	this.shape_25.setTransform(258,105.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#727272").s().p("AiTBoQhmgJhJgQQhIgQgngOQgmgNgBgBIAAgnIOchnQAPADADALQAEALgCALIgCALQgBALgJASQgJARgXATQgWAUgrAUQgqAThFAQQhFAQhlAIQhAAEg4AAQg6AAgzgEg");
	this.shape_26.setTransform(258.8,163.3);

	// Layer 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BCBCBC").s().p("Egq0ACiMBVqgJCIAADrMhVcAJWg");
	this.shape_27.setTransform(299.9,196.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AVljcIgQA8Mgq4AF9g");
	this.shape_28.setTransform(438.1,343.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFFFFF","#F9D15E"],[0,1],-33.9,-22.1,14.3,42.2).s().p("AjsG/QhugLhTgSQhTgSgwgYQgugYgBgcQAAgOAMgoQAMgpAXg6QAYg6AghEQAihDAphGQAqhHAwhBQAxhBA2gzQA3g0A8geQA8geA9AAQA+AAA8AeQA8AeA3A0QA2AzAxBBQAwBBAqBHQApBGAiBDQAgBEAYA6QAXA6AMApQAMAoAAAOQgBAcguAYQgwAYhTASQhTAShuALQhuAKh/AAQh+AAhugKg");
	this.shape_29.setTransform(539.1,276.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-15.3,-83.3,10,54.8).s().p("Aj1B8QhzgLhWgSQhYgTgwgYQgxgYgBgcQABgaAxgZQAwgYBYgTQBWgSBzgLQBzgKCCAAQCEAAByAKQBzALBWASQBXATAxAYQAxAYABAbQgBAcgxAYQgxAYhXATQhWAShzALQhyAKiEAAQiCAAhzgKg");
	this.shape_30.setTransform(539.1,310.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFFFFF","#F9D15E"],[0,1],-35.6,-23.2,15,44.2).s().p("Aj3HUQh0gKhXgTQhXgTgygaQgxgZgBgdQAAgPANgqQANgqAYg9QAYg9AjhIQAihGAshKQAshKAyhEQA0hEA5g2QA6g2A+gfQA+ggBBAAQBBAAA/AgQA+AfA6A2QA5A2A0BEQAyBEAsBKQAsBKAiBGQAjBIAXA9QAZA9ANAqQANAqAAAPQgBAdgxAZQgyAahXATQhXATh0AKQhzALiFAAQiEAAhzgLg");
	this.shape_31.setTransform(408.6,292.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-16,-87.4,10.5,57.4).s().p("AkBCCQh4gLhbgUQhbgTg0gZQgzgagBgdQABgcAzgZQA0gaBbgTQBbgUB4gLQB4gLCJAAQCKAAB4ALQB4ALBbAUQBbATAzAaQA0AZABAcQgBAdg0AaQgzAZhbATQhbAUh4ALQh4ALiKAAQiJAAh4gLg");
	this.shape_32.setTransform(408.6,328);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FFFFFF","#F9D15E"],[0,1],-36.7,-23.9,15.4,45.6).s().p("Aj/HjQh2gMhbgTQhagUgzgaQgzgaAAgdQAAgQANgsQANgrAZg/QAag/AjhKQAjhHAthNQAthMA1hHQA1hFA6g4QA8g4BAggQBAggBDgBQBEABBAAgQBBAgA6A4QA8A4A1BFQA0BHAtBMQAtBNAjBHQAkBKAZA/QAZA/ANArQANAsABAQQgCAdgyAaQgzAahaAUQhbATh3AMQh2ALiJAAQiHAAh4gLg");
	this.shape_33.setTransform(271.2,312.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-16.5,-90.1,10.9,59.2).s().p("AkJCGQh7gMhegUQhfgUg0gaQg1gagBgeQABgdA1gaQA0gbBfgUQBegUB7gLQB8gLCNAAQCOAAB8ALQB8ALBeAUQBdAUA2AbQA0AaABAdQgBAeg1AaQg1AahdAUQheAUh8AMQh8ALiOAAQiNAAh8gLg");
	this.shape_34.setTransform(271.2,348.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FFFFFF","#F9D15E"],[0,1],-37.8,-24.6,15.9,47).s().p("AkGHxQh7gLhdgUQhdgVg0gaQg0gbgBgfQAAgQAOgtQANgsAahBQAahBAkhMQAlhKAuhPQAuhOA3hJQA2hIA9g5QA9g5BCgiQBCghBFgBQBGABBCAhQBCAiA9A5QA9A5A2BIQA3BJAuBOQAuBPAkBKQAlBMAaBBQAaBBANAsQAOAtAAAQQgBAfg0AbQg0AahdAVQhdAUh7ALQh6AMiNAAQiMAAh6gMg");
	this.shape_35.setTransform(123.2,330.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-17,-92.8,11.2,60.9).s().p("AjeCOQhpgHhYgPQhYgNhAgTQhBgTgjgWQgkgXAAgYQAAgXAkgXQAjgWBBgTQBAgTBYgNQBYgPBpgHQBqgIB0AAQB1AABqAIQBpAHBYAPQBYANBAATQBBATAjAWQAkAXAAAXQAAAYgkAXQgjAWhBATQhAAThYANQhYAPhpAHQhqAIh1AAQh0AAhqgIg");
	this.shape_36.setTransform(123.2,367.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FFFFFF","#F9D15E"],[0,1],-27.2,-17.5,11.7,34.4).s().p("AjMFVQhfgIhJgPQhIgPgpgUQgpgUAAgXQAAgOAOgmQAOgmAag2QAag2Akg6QAkg9Aug7QAtg7A1gwQA0gwA6gdQA7gdA9AAQA+AAA7AdQA6AdA0AwQA1AwAtA7QAuA7AkA8QAlA7AZA2QAaA2AOAmQAOAmAAAOQAAAXgqAUQgoAUhIAPQhIAPhgAIQhfAJhuAAQhtAAhfgJg");
	this.shape_37.setTransform(457.6,262.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-14.2,-77.7,9.4,51.1).s().p("AjbB3QhngKhOgSQhOgRgsgYQgsgXgBgbQABgZAsgYQAsgXBOgSQBOgSBngKQBmgKB1AAQB2AABnAKQBmAKBOASQBOASArAXQAtAYAAAZQgBAbgrAXQgsAYhOARQhOAShmAKQhnAKh2AAQh1AAhmgKg");
	this.shape_38.setTransform(459.2,285.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FFFFFF","#F9D15E"],[0,1],-28.7,-18.4,12.5,36.4).s().p("AjXFpQhlgKhMgQQhNgQgrgUQgrgWgBgYQAAgPAPgoQAPgoAbg5QAbg5Ang9QAmhBAwg9QAwg+A3g0QA4gyA+gfQA9geBBgBQBCABA9AeQA+AfA4AyQA3A0AwA+QAwA9AmBBQAnA9AbA5QAcA5AOApQAPAoAAAOQgBAYgrAWQgrAUhMAQQhNAQhlAKQhkAIh0ABQhyAAhlgJg");
	this.shape_39.setTransform(331.7,274.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-15,-82.1,9.9,54).s().p("AjoB+QhsgLhTgTQhSgSgugZQgugZgBgcQABgbAugZQAugZBSgTQBTgSBsgLQBsgLB8AAQB9AABsALQBsALBTASQBSATAuAZQAvAZAAAbQgBAcgtAZQgvAZhSASQhTAThsALQhsAKh9ABQh8AAhsgLg");
	this.shape_40.setTransform(333.4,298.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FFFFFF","#F9D15E"],[0,1],-31.4,-20.2,13.6,39.8).s().p("AjsGKQhugKhTgRQhUgSgvgWQgvgYgBgaQAAgQAQgsQAQgsAeg+QAeg+AqhEQAqhGA0hEQA1hEA9g3QA8g4BEghQBDghBHgCQBIACBDAhQBEAhA9A4QA8A3A1BEQA0BEAqBGQAqBEAeA+QAeA+AQAsQAQAsAAAQQgBAagvAYQgvAWhUASQhTARhuAKQhuALh/gBQh9ABhvgLg");
	this.shape_41.setTransform(201.1,288.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-16.5,-89.8,10.8,59).s().p("Aj+CJQh2gLhbgVQhagUgygbQgzgbAAgfQAAgeAzgbQAygbBagUQBbgVB2gMQB2gMCIAAQCIAAB3AMQB2AMBaAVQBaAUAzAbQAyAbABAeQgBAfgyAbQgzAbhaAUQhZAVh3ALQh3AMiIAAQiIAAh2gMg");
	this.shape_42.setTransform(203,315.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FFFFFF","#F9D15E"],[0,1],-31.4,-20.2,13.6,39.8).s().p("AjsGLQhugKhTgSQhUgRgvgYQgvgWgBgbQAAgQAQgsQAQgsAeg+QAeg+AqhEQAqhGA0hEQA1hEA9g3QA8g4BEghQBDgiBHgBQBIABBDAiQBEAhA9A4QA8A3A1BEQA0BEAqBGQAqBEAeA+QAeA+AQAsQAQAsAAAQQgBAbgvAWQgvAYhUARQhTAShuAKQhuAKh/gBQh9ABhvgKg");
	this.shape_43.setTransform(76.1,304.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-16.5,-89.8,10.8,59).s().p("Aj+CKQh2gMhbgVQhagUgygbQgzgbAAgfQAAgeAzgbQAygbBagUQBbgVB2gMQB3gMCHABQCIgBB3AMQB2AMBaAVQBaAUAzAbQAyAbACAeQgCAfgyAbQgzAbhaAUQhZAVh3AMQh3AMiIgBQiHABh3gMg");
	this.shape_44.setTransform(78,331.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FFFFFF","#BCBCBC","#646464"],[0,0.494,0.988],-241.9,-155.2,260.5,165.7).s().p("Egq/AIqIAPlKMBVwgMZIAAGVMhPMALeg");
	this.shape_45.setTransform(299.4,384.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F3F3F3").s().p("Egq3gCwMBVqgIcIAFKAMhVvAMZg");
	this.shape_46.setTransform(300.2,334.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BCBCBC").s().p("Ego2AHuMBRtgPbIAAHfMg1HAH8g");
	this.shape_47.setTransform(312.6,388.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-34.1,-186.1,36.5,198.9).s().p("Ego2AHuMBRtgPbIAAPbg");
	this.shape_48.setTransform(312.6,388.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-174.6,-952,102.8,561).s().p("Egq3gcsMBVvAAPMAAAAsvMhVvAMbg");
	this.shape_49.setTransform(300.2,223);

	this.addChild(this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_1,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.4,38.7,590,402.5);


// stage content:
(lib.magnetizedCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:8,win:14});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* #include "../../gameAssets/expressinstall.as"
		
		if (_root.MMplayerType == undefined) {
			// --- upgrade not needed
			nextFrame();
		} else {
			stop();
		 
		 	var updater:MovieClip;
			var hold:MovieClip;
		
			loadUpdater = function() {
				System.security.allowDomain("fpdownload.macromedia.com");
				
				updater = _root.createEmptyMovieClip("expressInstallHolder", 10000000);
				updater.installStatus = installStatus;
				hold = updater.createEmptyMovieClip("hold", 1);
			
				updater.onEnterFrame = function() {
					if (typeof hold.startUpdate == 'function') {
						loadInit();
						delete this.onEnterFrame;
					}
				}
			
				var cacheBuster = Math.random();
				hold.loadMovie("http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+cacheBuster);
			}
			
			loadInit = function() {
				hold.redirectURL = _root.MMredirectURL;
				hold.MMplayerType = _root.MMplayerType;
				hold.MMdoctitle = _root.MMdoctitle;
				hold.startUpdate();
			}
			
			installStatus = function(statusValue) {
				if (statusValue == "Download.Complete") {
					// Installation is complete. In most cases the browser window that this SWF 
					// is hosted in will be closed by the installer or manually by the end user
				} else if (statusValue == "Download.Cancelled") {
					// The end user chose "NO" when prompted to install the new player
					// by default no User Interface is presented in this case. It is left up to 
					// the developer to provide an alternate experience in this case
					
					getURL("javascript:alert('This content requires a more recent version of the Macromedia Flash Player.')");
				} else if (statusValue == "Download.Failed") {
					// The end user failed to download the installer due to a network failure
					// by default no User Interface is presented in this case. It is left up to 
					// the developer to provide an alternate experience in this case
					
					getURL("javascript:alert('There was an error in downloading the Flash Player update. Please try again later, or visit adobe.com to download the latest version of the Flash plugin.')");
				}
			}
			
			// --- Start upgrade
			loadUpdater();
		}*/
	}
	this.frame_1 = function() {
        this.stop();
		/* stop();
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "TranslationGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/magnetized.xml", "TranslationGame");
		}*/
	}
	this.frame_2 = function() {
        this.stop();
		/* stop();
		
		dispatchEvent ({type:"ready", bubbles:true});
		
		playGame.onRelease = function() {
			gotoAndPlay("game");
		}*/
	}
	this.frame_8 = function() {
        this.stop();
		/* stop();
		if (game != undefined) delete(game);
		var game:RunGame = new RunGame(this);
		
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
    //ivanixcu: win starts at frame_14
	//this.frame_34 = function() 
	this.frame_64 = function() {
        this.stop();
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	//this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(6).call(this.frame_8).wait(26).call(this.frame_34).wait(1));
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(6).call(this.frame_8).wait(56).call(this.frame_64).wait(1));

	// Text
	this.text = new cjs.Text("IDS_CONGRATS", "18px 'Arial-ItalicMT'", "#55AAFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	//this.text.lineWidth = 392;
	this.text.lineWidth = 400;
	// this.text.setTransform(297.8,63.2);
	this.text.setTransform(300,63.2);

	this.text_1 = new cjs.Text("", "18px 'Arial-ItalicMT'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 400;
	this.text_1.setTransform(298.8,64.2);

	this.playAgain = new lib.playAgain();
	//this.playAgain.setTransform(438.5,375,1,1,0,0,0,71.5,25);
	this.playAgain.setTransform(300,380,1,1,0,0,0,71.5,25);
	this.playAgain._off = true;

//note: original tween from adobe export
//
//this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text,p:{x:297.8,y:63.2,text:"",font:"18px 'Arial-ItalicMT'",lineHeight:20,lineWidth:392}}]},8).to({state:[{t:this.text,p:{x:238.5,y:331,text:"Congrats, you finished the game!",font:"24px 'Arial'",lineHeight:26,lineWidth:283}},{t:this.playAgain}]},6).wait(21));
//

	//this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[ {t:this.playAgain}]},6).wait(10000));
	//this.timeline.addTween(cjs.Tween.get(this.playAgain).wait(25).to({_off:false},0).wait(50));
    
	this.timeline.addTween(cjs.Tween.get(this.playAgain).wait(60).to({_off:false}, 0).wait(1));

	// Buttons
	this.text_2 = new cjs.Text("IDS_INSTRUCTIONS", "italic bold 18px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 187;
	this.text_2.setTransform(431.7,30.6);

	this.playGame = new lib.playGame();
	this.playGame.setTransform(53,190);

	this.nextQuestion_btn = new lib.nextQuestion_btn();
	this.nextQuestion_btn.setTransform(459.1,317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playGame},{t:this.text_2}]},2).to({state:[{t:this.nextQuestion_btn}]},6).to({state:[]},6).wait(21));

	// Fridge door
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F9F7").s().p("AgggvIBBgTIgEB1Ig7AQg");
	this.shape.setTransform(95.6,107.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D0BF").s().p("AgDFbQgNifgPjjQgPjmgKjZQgHgHB3gUIABCiQAACegKDoQgKDrgeDwIgKing");
	this.shape_1.setTransform(98.6,166.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCBD8F").s().p("AhkAqQgDgzAGgyQBRAgB2gcIgDBjQgEAEg8AJQgRADgSAAQgtAAg3gSg");
	this.shape_2.setTransform(110.5,255.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3D4A8").s().p("Ah4AeIAAhgQAFAFBKATQBIATBagZIgEBjQgFAFhLAKIgYABQg+AAhHglg");
	this.shape_3.setTransform(108.7,254.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BCBD8F").s().p("AgvA5QgIhMAAhNQA3APAbATQAdAUAAACIgHCJQgxgegvgKg");
	this.shape_4.setTransform(117,108.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3D4A8").s().p("Ag5A6QhhATgGAIIABiWQCdg4BRAlQBSAmABAJIgICJQh0g+hfAUg");
	this.shape_5.setTransform(106.5,107.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#848365").s().p("AhnKsQCElDAZlkQAaljg/leQBRAfAGAFIgIVFQg+AQgvAAQg0AAgmgRg");
	this.shape_6.setTransform(111.2,180.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2A280").s().p("AgRLDQhHgVgDgFIhA0hIAihHQBMgaBfAjQBiAkAIAHIgIVFQg4ARgvAAQgiAAgcgIg");
	this.shape_7.setTransform(105.9,179.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah1BWIgHiAQgDgFAKgjQALgkBEgDQBIgHA1AlQA0AlgSCxg");
	this.shape_8.setTransform(106.9,93.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag9A7QgBAAgLgFQgKgGgCgXQAAgZADgiIAEgnIChAXIACBWQABACgCAMQgCANgRAFQgQAGgWAAQgiAAg2gPg");
	this.shape_9.setTransform(108,261.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BCBCBC").s().p("AhbOfQg8gbAFizQAHhoAJkGIAUovIARoBIAHjhQAKgBBDAlQBBAkAJBRQAEgDAiATQAhASALBPQACAzgIDiQgIDigNESIgXHiIgKDYQABAHgNA4QgMA4gsARQgUAIgWAAQghAAgjgQg");
	this.shape_10.setTransform(124.2,184.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2D1D2").s().p("EggdASVQGTg7E3g7QE3g7EQhFQEPhFEchbQArgNCQg0QCQg2CfhLQCfhLBThPQBThQhRhBQgTgWgKgZQgKgbAAgCQh7hSgMhyQgLhwBfhJQEPi4ERiRQERiSEDiZQEDiZDljRQBYAcAHBgIAAEWQiMBcjIBfQjIBfi/ByQi/BxhzCVQhzCSAdDLQAYBiBBCCQBDCDAVB6QAWB7huBHQlBDLlyA7g");
	this.shape_11.setTransform(309.7,175.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFFFF","#BCBCBC"],[0,1],-262.4,-59.6,285.7,64.9).s().p("EghHASYQh0gLgLh1MAAAggvQALh1B0gLMBCPAAAQB0ALALB1MAAAAgvQgMB1hzALg");
	this.shape_12.setTransform(293,175);

	this.instance = new lib.door_refrigde();
	this.instance.setTransform(299.5,174.5,1.266,1.304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.instance}]},22).wait(5));
    
	// Fridge
	this.fridge = new lib.fridge();
	this.fridge.setTransform(564.5,153.9,1,1,0,0,0,284.8,320.8);
	this.fridge._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fridge).wait(8).to({_off:false},0).wait(27));

	// BG
	this.instance_1 = new lib.cover();
	this.instance_1.setTransform(295,201.3,1,1,0,0,0,307.4,239.9);

	this.instance_2 = new lib.BG();
	this.instance_2.setTransform(300,200,1,1,0,0,0,300,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},6).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
