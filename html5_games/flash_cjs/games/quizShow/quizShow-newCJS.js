(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Am4BGQi4gdABgpQgBgoC4geQC2gcECAAQEDAAC2AcQC4AegBAoQABApi4AdQi2AekDgBQkCABi2geg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.5,-10,125,20);


(lib.playNow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Text
	this.text = new cjs.Text("Select a character", "bold 27px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 140;
	this.text.setTransform(51,-31.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:55.5,y:0,text:"Play now",lineWidth:111},0).wait(1));

	// hit area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("ArMGFIAAsJIWZAAIAAMJg");
	this.shape.setTransform(52.7,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-31.7,144,82.1);


(lib.playAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Play again?", "bold 18px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 103;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00458A").ss(1,1,1).p("AHviGIAAENIvdAAIAAkNg");
	this.shape.setTransform(48.5,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AntCHIAAkMIPcAAIAAEMg");
	this.shape_1.setTransform(48.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,24.9);


(lib.Great = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Great!", "40px 'Arial'", "#000066");
	this.text.lineHeight = 42;
	this.text.lineWidth = 146;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,149.9,48.7);


(lib._10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("ABXDXQhhhSAAiJQAAiGBYhNQBRhFB5AAQBJAABEAhQBdArAuBWQAiA/AABFQAACBhvBSQhUA/hsAAQh3AAhVhFgADchCQAABjAqBQQAQAfAcAAQAvAAAAhOQAAgsgKgwQgLgygPgfQgRgigggCQgwAAAABNgAmwEWQhNgKgrgOQgpgOAAgcQAAgOANgLQAOgKAUgBIAjAEIAVACQAtgBAHhAQAEgmAAirQAAgbgMgKQgMgKggAAIgVABIgTABQgSAAgNgJQgLgIABgPQAAgPARgPQARgPAfgMQCZg5CtgBQAvAAAVAKQAWAKAAAXQAAAMgHAHQgIAHgVAIQgiAOgFASQgEAUgDCAIAFCJQAAAJAEARQAGAaATAJQARAKAtABQAzADAAAjQAAAlhIAMQhkAPhpAAQhFAAg9gGg");
	this.shape.setTransform(59.5,28.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118.9,57);


(lib._7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AhUFRQgzgRAAgUQAAgFAFgIIDGlaQAWgnAAgPQAAgSgZgHQgagHhBAAQhSAAgjAJQgPAFgLANQgPATgMAGQgMAHgTAAQglAAgUgcQgUgcAAg1QAAhBAagrQAMgVAUgOQATgOASAAQAMAAAqARQAaALApgBIFWAAQAzABAAAiQAAAMgFAMIjZJWQgFAMgMAEQgLAFgdAAQg7AAgzgQg");
	this.shape.setTransform(30.5,35.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,70.7);


(lib._4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AAnFZQgTAAgGgGQgGgGAAgVIAAgzQAAgUgIgJQgHgIgWAAIjSAAQgmAAgPgOQgQgPAAgjQAAgvANgaQAPghBIhMICJiVQBkhvAxgfQAWgOAfgJQAggIAbAAQAbAAAMAMQALAMAAAcIAAFNQAAAPAFAGQAEAGAMAAIAWAAQAZgBABAcIAABkQAAAZgcAEQgTACgEAEQgFAFAAARIAAA8QACAgghABgAgvhWIhUBaQgkAoAAASQAAAMAPAEQAPAEA8ABIArABQAcAAAIgGQAKgFABgRQAEgaAAhEIAAgYQAAgsgZAAQgVAAgSAUg");
	this.shape.setTransform(31,34.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,69.2);


(lib._1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("Ah5EVQhNgJgrgOQgpgOAAgcQAAgOANgLQAOgKAUgBIAjADIAUADQAuAAAHhCQAEglAAirQAAgagMgLQgMgKggAAIgVABIgTABQgTABgMgKQgLgIAAgPQAAgPARgPQASgPAfgMQCZg6CrABQAvAAAVAJQAWALAAAVQAAANgIAHQgHAHgVAIQgiANgFAUQgEASgDCBIAFCJQAAAJAEARQAGAZASAKQASAKAsACQAzABAAAkQAAAlhIALQhjARhpgBQhDABg9gIg");
	this.shape.setTransform(28.4,28.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.8,57);


(lib.white_spot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApZW1QkVh5jVjbQjWjch2kcQh6knAAlCQAAlBB6knQB2kcDWjcQDVjbEVh5QEgh8E5AAQE6AAEfB8QEWB5DVDbQDWDcB2EcQB6EnAAFBQAAFCh6EnQh2EcjWDcQjVDbkWB5QkfB8k6AAQk5AAkgh8g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154.6,-158.5,309.2,317.2);


(lib.Spotlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFf4QqWgBkMiqQhTg0gjhAQgLgUgFgTIgEgOUgAFAAAAOdg6GIHKgVUALxA6agADAABQgBAVgRAgQghBAhSA1QkHCqqVAAIgDAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.5,-204,213,408);


(lib.speech = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ready:0,enter:14,"speech-ready":25,question:57,exit:66});

	// timeline functions:
	this.frame_57 = function() {
		/* stop();*/
	}
	this.frame_80 = function() {
		/* _parent.char.gotoAndPlay("exit");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(23).call(this.frame_80).wait(26));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AgkCHQAIh+gih0QgOgvgJgvICBAAQAVBTALBUQAGAsADAvQAFBDgbA5QgLAVgXAAIgFAAQhBAAAFhDg");
	var mask_graphics_15 = new cjs.Graphics().p("AgOFhQAIh/gih1Qgjh2gFh+QgCgvgJguQgShaAChdIABgIIB2AAQAJCAAXB9QAOBGABBKQAAALADALQAYBZAMBdQAGAuADAuQAFBDgbA5QgLAVgXABIgFAAQhAAAAEhDg");
	var mask_graphics_16 = new cjs.Graphics().p("AACJnQAIh/ggh1Qgih4gGh+QgCgvgJguQgShYADhdQADhhgchYQgZhRAdhNQAHgUgBgTQgDg0AAgzQAAgUARgNQATgNAUgBQBTAUgFBeQgDAtgJArQgFAWgKAUQAYBSABBWQADC5AiCyQANBGABBKQAAALADAMQAYBaAMBdQAGAuADAuQAGBDgcA5QgKAVgYABIgFAAQhAAAAChDg");
	var mask_graphics_17 = new cjs.Graphics().p("AANN1QAIh+ggh2Qgih4gGh+QgCgvgJguQgShaADhcQADhhgchXQgUhAAOg/QgdgdAGgwQAFguAAguQACizgLiwQgFhZAXhSQAEgNANgHQAtgUAkAgQAOgxAzgIIAAAAQBaAdggBfQgPAtgGAvQgbC3gGC5QgBAZgLASQABANAAAPQgDAsgJArQgFAXgKAUQAYBSABBUQADC5AiCzQANBHABBJQAAAMADALQAYBbAMBcQAGAuADAvQAGBDgcA5QgKAVgYAAIgFAAQhCAAAEhDg");
	var mask_graphics_18 = new cjs.Graphics().p("AgSRAQAIh/gih1Qgih4gGh+QgCgvgJguQgShaADhdQADhhgchYQgUhBAOg+QgdgbAGgwQAFguAAgvQACiygLiwQgFhaAXhSQACgGAEgFIAAgHQgPi9BTioQAkhIBBgXQApAEARAjIABADQBigLgNBgQgHAugNAsQgpCAgdCDQACAYgKAeQgPAsgGAvQgbC3gGC6QgBAZgLARQABANAAAPQgDAtgHArQgFAUgKAUQAWBSABBWQADC5AiC0QANBGABBKQAAALADAMQAYBaAMBdQAGAuADAuQAGBDgcA5QgKAVgYABIgFAAQhAAAAEhDg");
	var mask_graphics_19 = new cjs.Graphics().p("AhaSSQAIh/gih1Qgih4gGh+QgCgvgJguQgShaADhdQADhhgchYQgUhBAOg+QgdgdAGgwQAFgsAAgvQACiygLiwQgFhaAXhSQACgGAEgFIAAgHQgPi9BTioQAMgXAPgTQABg8A0gtQAZgVAagTQBHg1BWgQQBVgRAQBLQAGAegYATQgPALgPAJQAyBFhIAyQgjAYgmADIgBAPQgHAugNAsQgpCBgdCDQACAXgJAeQgOAsgGAvQgbC3gGC6QgBAZgLASQACANgBAOQgDArgJArQgFAWgKAUQAYBSABBWQADC5AiC0QANBGABBKQAAALADAMQAWBaAMBdQAGAuADAuQAGBDgcA5QgJAVgXABIgFAAQhCAAAEhDg");
	var mask_graphics_20 = new cjs.Graphics().p("AlWUyQAIh+gih2Qgih4gGh+QgCgvgJguQgShaADhcQADhhgchZQgUhAAOg/QgdgdAGgwQAFguAAguQACixgLiwQgFhZAXhSQACgHAEgFIAAgHQgPi9BTinQAMgYAPgTQABg7A0gtQAZgVAagUQBJg0BUgRQAFgwAigtQAUgaANggQAohjBpgbQCbgnCdgHQBhADgZBXQgOAxgBA2QAaBlgdBkQgFAQgBAQQgQCIgWCGIgEAhQgHBOg5AwQgJAIgOACQipAWiBhjQgdgVgQghQgig8gng4QgJgOgGgRIgCgGQgbANgcADIgBAPQgHAtgNAsQgpCBgdCDQACAXgKAeQgPAtgGAvQgbC3gGC3QgBAZgLASQABANAAAPQgDAsgJArQgFAXgKAUQAYBSABBWQADC5AiCzQANBHABBJQAAAMADALQAYBbAMBcQAGAuADAvQAGBDgcA5QgKAVgYAAIgFAAQhCAAAEhDgABxrTIAoAhIAEAEIAIACIAMgIIAFgEQgTgHgcgVIgOgCIgIADg");
	var mask_graphics_21 = new cjs.Graphics().p("AxNVZQAIh+gih2Qgjh4gFh+QgCgvgJguQgThaADhcQAEhhgchZQgVhAAPg/QgdgdAFgwQAFguABguQACixgLiwQgGhZAYhSQACgHAEgEIgBgIQgPi9BUinQAMgYAPgSQAAg8A0gtQAZgVAbgUQBIg0BVgQQAEgxAigtQAVgaANggQAqhjBogbQCZgmCZgIQAOgLAXgCQBMAWBQgFQAlgtA5gDQB6gTB5AaQAbAGAUASQBYgLBXgCQAfgcAxgBIFfgJQAVgBAOgEQCPgbCCAxQA7AXAMA+QASBcACBeQAEFDAOFBQAGB+iAAGQkaAMkbgKQg5gCgXgqQhPAUhXgHQgOgBgOADQieAiiQg1Qg4gUgQg0QirAMiqgKQgRgCgKgOQiYALh2hbQgdgVgSghQgig8gmg4QgKgOgGgRIgCgGQgaAOgcACIgCAPQgGAtgOAsQgoCBgeCDQADAXgKAeQgPAtgHAvQgbC3gFC3QgBAagLARQABANgBAPQgDAsgJArQgEAXgLAUQAYBSABBWQADC5AiCzQAOBHABBJQAAAMADALQAYBbAMBcQAGAuADAvQAFBDgbA5QgLAVgXAAIgFAAQhDAAAFhDg");
	var mask_graphics_22 = new cjs.Graphics().p("A2RVgQAIh/gih1Qgjh4gFh+QgCgvgJguQgThaADhdQAEhhgchYQgVhBAPg+QgdgdAFgwQAFguABgvQACiwgLiwQgGhaAYhSQACgGAEgFIgBgHQgPi9BUioQAMgYAPgSQABg8AzgtQAZgVAbgTQBIg0BVgRQAEgwAigtQAVgbANggQAqhjBogaQCZgnCagIQAOgLAWgBQBMAVBRgFQAlgtA4gCQB8gTB5AaQAbAGAUASQBYgMBVgBQAfgcAxgCIFfgJQAVAAAOgEQCEgaB5ApIEpgRQAtgDAngIQCVgcCIA0QBRAgAEBXIAGBfQAhFxgVFuQgCAVgRAQQguAqg+ABQkPADkOgKQgfAhg/ACQkaANkbgLQg5gCgXgqQhPAUhVgGQgOgBgOADQieAiiSg1Qg4gUgQg1QirANiqgLQgRgBgJgPQiYALh3haQgdgWgSghQgig8gmg4QgKgNgGgRIgCgHQgaAOgcACIgCAPQgGAugOAsQgoCAgdCDQACAYgKAeQgPAsgHAvQgbC3gFC4QgBAZgLARQABANgBAPQgDAtgJArQgEAWgLAUQAYBSABBWQADC5AiC0QAOBGABBKQAAALADAMQAYBaAMBdQAGAuADAuQAFBDgbA5QgLAVgXABIgFAAQhDAAAFhDg");
	var mask_graphics_23 = new cjs.Graphics().p("A56VnQAIh/gih1Qgjh4gFh+QgCgvgJguQgShaADhdQADhhgchYQgUhBAOg+QgdgdAGgwQAEguABgvQACiwgLiwQgFhaAXhSQACgGAEgFIgBgHQgOi9BTioQAMgXAPgTQABg8A0gtQAZgVAagTQBIg0BVgRQAFgwAigtQAUgbANggQAqhjBpgaQCYgnCagHQAOgLAWgCQBMAVBRgFQAlgsA4gDQB9gTB4AaQAbAGAUASQBYgMBXgBQAggcAwgCIFegJQAUAAAOgEQCEgZB5AoIEpgRQAtgDAogIQB2gWBtAcQAcgdArgBQDdABDcAMQBLADAPBJQAnC1gIC+QgLDqgXDoQgKBnhnANQiHARiJAEQhiBLhAg+IgSABQkQADkOgJQgfAgg+ACQkbANkagLQg4gCgXgqQhOAUhYgGQgNgBgPADQieAiiSg1Qg4gUgPg0QisAMipgLQgSgBgJgPQiYALh2haQgdgWgSghQgig8gng4QgKgNgFgRIgCgGQgbANgcACIgCAPQgGAugNAsQgpCBgdCDQACAXgKAeQgPAsgGAvQgcC3gFC4QgBAZgLASQABANAAAOQgDAtgJArQgFAWgKAUQAYBSABBWQADC5AiC0QANBGABBKQAAALADAMQAYBaAMBdQAGAuADAuQAGBDgcA5QgKAVgYABIgFAAQhCAAAEhDg");
	var mask_graphics_24 = new cjs.Graphics().p("A8SVnQAIh/gih1Qgih4gGh+QgCgvgJguQgShaADhdQADhhgchYQgUhBAOg+QgdgdAGgwQAFguAAgvQACiwgLiwQgFhaAXhSQACgGAFgFIgBgHQgPi9BTioQAMgXAQgTQAAg8A0gtQAZgVAagTQBJg0BVgRQAEgwAigtQAUgbANggQAqhjBpgaQCZgnCZgHQAOgLAXgCQBLAVBRgFQAlgsA4gDQB9gTB5AaQAaAGAUASQBZgMBXgBQAfgcAwgCIFegJQAVAAANgEQCFgZB5AoIEogRQAtgDAogIQB2gWBtAcQAcgdArgBQDdABDcAMQA3ACAXAnQCsAzBMCmQABAEAAAEQCfD8hiEUQgMAhgWAdQiQC6jpA+QhxAegmhaQg+AEg+ACQhiBLhAg+IgSABQkPADkPgJQgeAgg/ACQkbANkYgLQg6gCgXgqQhOAUhYgGQgNgBgOADQifAiiSg1Qg4gUgPg0QirAMiqgLQgRgBgKgPQiYALh2haQgdgWgSghQgig8gng4QgJgNgGgRIgCgGQgaANgdACIgBAPQgHAugNAsQgoCBgeCDQACAXgKAeQgPAsgGAvQgbC3gGC4QAAAZgMASQACANgBAOQgDAtgJArQgFAWgKAUQAYBSABBWQADC5AiC0QANBGABBKQAAALADAMQAYBaAMBdQAGAuADAuQAGBDgcA5QgKAVgYABIgEAAQhDAAAEhDg");
	var mask_graphics_53 = new cjs.Graphics().p("A8cUwQgGgigKghQgih4gGh+QgCgvgJguQgShaADhcQADhigchYQgUhAAOg/QgdgdAGgwQAFguAAgvQACiygLiuQgFhZAXhSQACgHAFgFIgBgHQgPi9BTioQAMgXAQgTQAAg8A0gsQAZgWAagTQBJg0BVgRQAEgwAigtQAUgaANggQAqhkBpgaQCZgnCZgHQAOgLAXgCQBLAWBRgGQAlgsA4gDQB9gTB5AaQAaAGAUASQBZgMBXgBQAfgcAwgCIFegJQAVAAANgEQCFgZB5AoIEogRQAtgDAogHQB2gXBtAcQAcgdArgBQDdABDcAMQA3ADAXAmQCsAzBMCmQABAEAAAFQCfD8hiEUQgMAggWAdQiQC6jpA+QhxAegmhaQg+AEg+ACQhiBLhAg+IgSABQkPADkPgJQgeAgg/ADQkbAMkYgKQg6gDgXgqQhOAVhYgHQgNgBgOADQifAiiSg1Qg4gUgPg0QirAMiqgKQgRgCgKgPQiYALh2haQgdgVgSgiQgig7gng5QgJgNgGgRIgCgGQgaANgdADIgBAPQgHAtgNAsQgoCBgeCDQACAXgKAeQgPAtgGAuQgbC1gGC6QAAAZgMASQACANgBAOQgDAtgJArQgFAWgKAVQAYBSABBVQADC6AiCzQANBHABBJQAAALADAMQAYBYAMBZg");
	var mask_graphics_54 = new cjs.Graphics().p("A9rQ+QgFg0ACg0QADhhgchYQgUhBAOg/QgdgcAGgwQAFgvAAguQACizgLiwQgFhZAXhQQACgGAFgFIgBgIQgPi9BTinQAMgYAQgSQAAg8A0gtQAZgVAagTQBJg1BVgQQAEgxAigsQAUgbANggQAqhjBpgbQCZgmCZgIQAOgLAXgBQBLAVBRgFQAlgtA4gDQB9gSB5AZQAaAGAUATQBZgMBXgCQAfgcAwgBIFegJQAVAAANgFQCFgZB5AoIEogRQAtgCAogIQB2gXBtAdQAcgdArgCQDdACDcAMQA3ACAXAnQCsAzBMClQABAFAAAEQCfD8hiEUQgMAhgWAdQiQC6jpA7QhxAfgmhZQg+AFg+ACQhiBIhAg8IgSACQkPADkPgKQgeAeg/ADQkbANkYgLQg6gCgXgoQhOAUhYgGQgNgBgOACQifAhiSg0Qg4gUgPg0QirANiqgLQgRgBgKgPQiYALh2haQgdgWgSghQgig8gng4QgJgNgGgSIgCgGQgaAOgdACIgBAPQgHAugNArQgoCBgeCDQACAWgKAeQgPAsgGAvQgbC3gGC6QAAAZgMARQACANgBAPQgDAtgJAqQgFAXgKAUQAYBSABBWQACBxANBvg");
	var mask_graphics_55 = new cjs.Graphics().p("A9tMZIgiAJQgLACgJAEQAEgpAAgqQACiygLiwQgFhaAXhSQACgGAFgFIgBgHQgPi7BTioQAMgYAQgSQAAg8A0gtQAZgVAagTQBJg1BVgQQAEgxAigsQAUgbANggQAqhjBpgaQCZgnCZgIQAOgLAXgBQBLAVBRgFQAlgtA4gCQB9gTB5AaQAaAGAUASQBZgMBXgBQAfgcAwgCIFegJQAVAAANgEQCFgaB5ApIEogRQAtgDAogIQB2gWBtAcQAcgdArgBQDdABDcAMQA3ACAXAnQCsAzBMCmQABAEAAAEQCfD8hiEUQgMAhgWAbQiQC6jpA+QhxAegmhbQg+AFg+ACQhiBLhAg/IgSACQkPADkPgKQgeAgg/ADQkbANkYgLQg6gCgXgqQhOAUhYgGQgNgBgOADQifAiiSg1Qg4gUgPg1QirANiqgLQgRgBgKgPQiYALh2haQgdgWgSgfQgig8gng4QgJgNgGgRIgCgHQgaAOgdACIgBAPQgHAugNAsQgoB+geCDQACAYgKAeQgPAsgGAvQgbC3gGC6QAAAZgMARQACANgBAPQgCAkgHAjQgkgxhIgSg");
	var mask_graphics_56 = new cjs.Graphics().p("AUlHuQg+AFg+ACQhiBKhAg+IgTABQkPAEkOgKQgfAgg/ADQkaAMkZgKQg5gDgXgpQhPAUhXgHQgOgBgOADQieAiiSg1Qg4gUgQg0QirAMiqgKQgRgCgJgPQiYAMh3hbQgdgVgSghQgig8gmg4QgKgOgGgRIgCgGQgaANgcADIgCAPQgGAtgOAsQgQA0gOA0QgxgnhRgOIAAgJQADhthHgyIACgEQAMgYAPgTQABg7AzgrQAZgVAbgUQBIg0BVgRQAFgwAhgtQAVgaANggQAqhjBogbQCZgnCagHQAOgLAWgCQBMAWBRgGQAlgsA4gDQB8gTB5AaQAbAGAUASQBYgLBXgCQAggcAwgBIFdgJQAVgBAOgEQCEgZB5AoIEpgRQAtgCAngIQB2gXBuAcQAcgdArgBQDcACDdALQA2ADAXAmQCtAzBLCmQACAEAAAFQCfD8hjESQgLAggXAdQiQC6jpA+QgcAIgXAAQhHAAgchEg");
	var mask_graphics_57 = new cjs.Graphics().p("AR4HuQg+AFg+ACQhiBKhAg+IgTABQkPAEkOgKQgfAgg/ADQkYAMkbgKQg5gDgXgpQhPAUhXgHQgOgBgOADQieAiiSg1Qg4gUgQg0QirAMiqgKQgRgCgJgPQiYAMh3hbQgdgVgSghIgfg1IgFgbQgIgngEgnIABgBQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQAKgogBgrIgBhXQAAgMgBgMIgCgVIADgFQAEgJgDgFQAFgOgOgFIACgOQAKg+gKgwIAKgVQAqhjBogbQCZgnCagHQAOgLAWgCQBMAWBRgGQAlgsA4gDQB8gTB5AaQAbAGAUASQBYgLBXgCQAfgcAxgBIFfgJQAVgBAOgEQCCgZB5AoIEpgRQAtgCAngIQB2gXBuAcQAcgdArgBQDcACDdALQA2ADAXAmQCtAzBLCmQACAEAAAFQCfD8hjESQgLAggXAdQiQC6jpA+QgcAIgXAAQhHAAgchEg");
	var mask_graphics_66 = new cjs.Graphics().p("AN/HuQg9AFg+ACQhiBKhAg+IgTABQkPAEkPgKQgeAgg9ADQkaAMkbgKQg5gDgXgpQhPAUhXgHQgOgBgOADQieAiiSg1Qg4gUgQg0Qh3AJh2gDQAJlUgBlSQgBgvAPgrQAZhHgJg1QA+AOBBgFQAlgsA5gDQB8gTB5AaQAbAGAUASQBYgLBXgCQAfgcAxgBIFfgJQAVgBAOgEQCEgZB5AoIEngRQAtgCAngIQB2gXBuAcQAcgdArgBQDcACDdALQA2ADAXAmQCsAzBMCmQACAEAAAFQCfD8hjESQgLAggXAdQiQC6jpA+QgcAIgYAAQhGAAgdhEg");
	var mask_graphics_67 = new cjs.Graphics().p("ALJHuQg+AFg+ACQhiBKhAg+IgTABQkPAEkMgKQgfAgg/ADQkaAMkbgKQg5gDgXgpQhPAUhXgHQgOgBgOADQhKAQhIgDQAUg9ghhTQg7iTgUiYQgai8AxiuQAVhKBFgeQBXglAyg7QAzgEAygBQAfgcAxgBIFfgJQAVgBAOgEQCEgZB5AoIEngRQAtgCAngIQB2gXBuAcQAcgdArgBQDcACDdALQA2ADAXAmQCtAzBLCmQACAEAAAFQCfD8hjESQgLAggXAdQiQC6jpA+QgcAIgXAAQhHAAgchEg");
	var mask_graphics_68 = new cjs.Graphics().p("AHuHuQg+AFg+ACQhiBKhAg+IgSABQkNAEkPgKQgfAgg+ADQkDALkDgIIgBgLQgDgqgKgoQg9jxAHj+QAChGgLhEQgailgcilIACAAIFggJQAVgBANgEQCEgZB6AoIEogRQAtgCAogIQB0gXBtAcQAcgdArgBQDdACDcALQA3ADAXAmQCsAzBMCmQABAEAAAFQCfD8hiESQgMAggWAdQiQC6jpA+QgcAIgYAAQhGAAgdhEg");
	var mask_graphics_69 = new cjs.Graphics().p("AFsHuQg+AFg+ACQhiBKhAg+IgTABQkNAEkOgKQgfAgg/ADIgpABQhbgyhShGQh9hsghimQhClKDNkHQAigrAUgvQBZgEBTAcIEpgRQAtgCAngIQB2gXBsAcQAcgdArgBQDcACDdALQA2ADAXAmQCtAzBLCmQACAEAAAFQCfD8hjESQgLAggXAdQiQC6jpA+QgcAIgXAAQhHAAgchEg");
	var mask_graphics_70 = new cjs.Graphics().p("ABAHuQg+AFg8ACQhiBKhAg+IgTABQiZACiZgCQACgygbg6QhEiQgPiaQgglCBRk3IAUgBQAtgCAngIQB2gXBuAcQAcgdArgBQDaACDdALQA2ADAXAmQCtAzBLCmQACAEAAAFQCfD8hjESQgLAggXAdQiQC6jpA+QgcAIgXAAQhHAAgchEg");
	var mask_graphics_71 = new cjs.Graphics().p("AiIHuIhTAFQhUiwg0i9IhHkCQg8jZAsjUQASgHAVgBQDdACDaALQA3ADAXAmQCsAzBMCmQABAEAAAFQCfD8hiESQgMAggWAdQiQC6jpA+QgaAIgYAAQhGAAgdhEg");
	var mask_graphics_72 = new cjs.Graphics().p("AhNG6QhmiOgciyQgzk+A6k7IAIAAQA3ADAXAmQCqAzBMCmQABAEAAAFQCfD6hiEUQgMAggWAdQhQBohrBBIgyhGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:-163.7,y:218.8}).wait(1).to({graphics:mask_graphics_15,x:-166,y:197.1}).wait(1).to({graphics:mask_graphics_16,x:-167.8,y:170.9}).wait(1).to({graphics:mask_graphics_17,x:-168.9,y:143.8}).wait(1).to({graphics:mask_graphics_18,x:-165.6,y:123.6}).wait(1).to({graphics:mask_graphics_19,x:-158.4,y:115.4}).wait(1).to({graphics:mask_graphics_20,x:-133.2,y:99.3}).wait(1).to({graphics:mask_graphics_21,x:-57.2,y:95.4}).wait(1).to({graphics:mask_graphics_22,x:-24.8,y:94.8}).wait(1).to({graphics:mask_graphics_23,x:-1.6,y:94.1}).wait(1).to({graphics:mask_graphics_24,x:13.6,y:94.1}).wait(29).to({graphics:mask_graphics_53,x:13.6,y:81.9}).wait(1).to({graphics:mask_graphics_54,x:13.6,y:57.6}).wait(1).to({graphics:mask_graphics_55,x:13.6,y:35.1}).wait(1).to({graphics:mask_graphics_56,x:18.2,y:5.2}).wait(1).to({graphics:mask_graphics_57,x:35.5,y:5.2}).wait(9).to({graphics:mask_graphics_66,x:60.3,y:5.2}).wait(1).to({graphics:mask_graphics_67,x:78.6,y:5.2}).wait(1).to({graphics:mask_graphics_68,x:100.4,y:5.2}).wait(1).to({graphics:mask_graphics_69,x:113.5,y:5.2}).wait(1).to({graphics:mask_graphics_70,x:143.5,y:5.2}).wait(1).to({graphics:mask_graphics_71,x:163.6,y:5.2}).wait(1).to({graphics:mask_graphics_72,x:186.6,y:1.5}).wait(1).to({graphics:null,x:0,y:0}).wait(33));

	// Bubble
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#FFFFFF"],[0,1],329.9,272.7,-69.2,-178.2).s().p("AVqGQMgrSAAAQiHAAhghuQhghuAAibIAAgxQAAibBghuQBghuCHAAMArSAAAQCGAABgBuQBgBuAACbIAAAxQAACbhgBuQhgBuiGAAIAAAAg");
	this.shape.setTransform(33.2,3.4);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:false},0).to({_off:true},59).wait(33));

	// Tail
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhESmQg4nXgVl0QgSlDAIj3QAdtYFWAjIAjihQn8AUAHPCQACD8AmE+QAtF4BeHTQACAIABAI");
	this.shape_1.setTransform(-153.4,115.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AAAgEQAAAEAAAF");
	this.shape_2.setTransform(-120.1,164.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-44.9,123.2,45.2,-123.6).s().p("AjSFjQgmk/gCj7QgHvCH8gUIgjChQlWgjgdNYQgID3ASFDQAVF0A4HXIgDAAQhenTgtl4g");
	this.shape_3.setTransform(-153.4,114.4);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},14).to({state:[]},59).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Darken = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Eg4AAmXMAAAhMuMBwBAAAMAAABMug");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-358.5,-245.6,717.1,491.2);


(lib.Cirlcewire = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6F3FF").ss(1,1,1).p("AZcAAQAAFEiAEpQh8EejhDdQjhDdklB5QkuB9lLAAQlKAAkuh9Qkkh5jijdQjhjdh8keQiAkpAAlEQAAlDCAkpQB8keDhjdQDijdEkh5QEuh9FKAAQFLAAEuB9QElB5DhDdQDhDdB8EeQCAEpAAFDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.8,-160.5,327.7,321.1);


(lib.Crown = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOCmQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIABgBIAAgBIANgBQgGAKgBAAIgDACQgFAAAAgGgAAFCFIAAABIAAAAIAAACQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIgFABgAAUBTQAQhlhDiQIgBgEQAAgEAFAAQAEAAAAACIABAAQBGCWgTBrIgHAJQAAgHgCgIg");
	mask.setTransform(-80.6,-85.7);

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6D514").s().p("AgiCsIAAlWIBGAAIAAFWg");
	this.shape.setTransform(-80.3,-85.7);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-102.9,6.7,34.4);


(lib.Congrats = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuSD6IgJm1QAFgOARgFIAcgIQAdgDAdAAQAXAAAaACQA2AFAgA7QAIAZAAAWQAAAZgIAUQgRAwgfAhIgeAWIAwA5QAYAXAbAcQABANgJAJIgSANIgYATQgKALgQABIhWhLIABABIAAB2QgSAKgbACIguAFgAs1hlIgBAjQAAAaACAVIAMgMIALgPQAMgUAAgJIgBgLIABgDIgEgEIgPgJQgFgCgGAAQgEAAgCADgAarCLQgbgugVgtIgJBpQgBAagFAqQgMgGgQgBQgZAAgHgDQgWgFgNgRQABhLAIiPQAJiRABhNIBHBfQAuA+AOAeIgMiaQAYAFAUACIAZACQARACAJAIQgCAtAAAvQAAA9AEA6IABAqQAAAfgDA7QgFBAAAAbQgjgngjg5gA06CLQgbgugWgtIgIBpQgCAagFAqQgLgGgQgBQgZAAgHgDQgWgFgNgRQABhLAIiPQAIiRAChNIBHBfQAuA+ANAeIgLiaQAYAFAUACIAYACQARACAJAIQgCAtAAAvQAAA9AEA6IABAqQAAAfgDA7QgEBAgBAbQgjgngig5gAKgCFQgLgBgMABQgFAAgJACIgLACIgJAiIgHAaIgGAUQgKAAgQgCIgWgCIglgBIgDgJICFmnIB8GAIAJAZQAFARABARIgoABIgwABgAKHAFQgBALgBAHIgHAlIAQgBIgHg2IAAgFQgBgNgDgEgAnoCFQgLgBgMABQgGAAgIACIgMACIgJAiIgHAaIgFAUQgLAAgPgCIgWgCIgmgBIgDgJICGmnIB8GAIAJAZQAEARACARIgoABIgwABgAoCAFQAAALgCAHIgHAlIARgBIgIg2IAAgFQAAgNgDgEgEggsAC7QgsgggNhAQgJgpADhHQADg4Arg7QAqg7BBgUQAZgIAfADQAcADAUAWIAAAKIgMAlIgTAxQgVgXgSgCIgIAAQgUAAgOALQgMALgMAWIgNAZQgFAJgCAOIgFApQAAAgAUAoQAIARAGAFQAIAHAQAFQAJADAKAAQAPAAANgGQAjgPAQgXQAFgIAMgFIAxBSQgdAuhIAWQgXAIgdAAQg6AAgsgggAdgDZQglgEgZghQgUgbgJgcQgGgYgBgqQAoABAsAGQgBAbAEAQQAFARAPAJQAIAEAMAAQAPAAAKgGQAKgIADgHQABgSgJgOIgUgiQgVgigkgkQgkglAAgzQgCgJAAgJQAAgrAlgfQAdgYApgBQA/gDAjAlIAVAYQAEAKAHAKQAHAKAEATQghATgqALQgLgUgNgQQgLgOgPAAQgNgBgLAJQgKAJAAANQAAAFACAFQAIAUAJARQAQAVAWAbQAyArAPAtQAFAOAAAQQAAA0glAdQgmAeg6AAQgNAAgOgBgEAg4ADWQgJgFAAgMQgBgMAIgLQAJgLANgEQAMgDAKAFQAJAGABAMQABAMgJALQgIALgNADIgJABQgHAAgHgDgAQ8DXIAAgzQAAhBgFg+QgGhOABhYIgOACIgTACIgXACQgHBjgFBTIgGCPQgUAKgTgBQgUAAgPAEQgKACgJAAIgBgfIACgcIAAgXIAAggIABgUIAAgiIABgeIAAgWQAAg6AGgxIgBgBQgTAEggACIg7ADIgDgRQgBgKgCgFIgBgJIAAgYQAJgFANgCIASgDQA3gKBLgLQAwgHAeABQgBgGAAgHQAAgMAHgEQANgWAbgKIAtgNQAkgDAvAhQAHAJAAAJQAAANgPAKQgaAUgVAMQgXAHgZgBIgKAAIgBAHIgBALIgCAMIBfgHQAEAvAAAoQAAAXgDAtQgDAuAAAZQAAA8AMBBQgiAAgbAHQgTAFgTAAQgLAAgOgCgAj+C6IABgcIAAgXIABggIAAgUIABgiIAAgeIAAgWQAAg6AGgxIAAgBQgUAEgfACIg7ADIgEgRQgBgKgCgFIgBgJIAAgYQAJgFAOgCIARgDQA4gKBLgLQA5gJAhADQAhADAIgBQALADAAAGIgCAGQgBAEgBAVIgBALIgDARQgIADgiAEIgUACIgXACQgHBjgEBTIgHCPQgTAKgUgBQgTAAgQAEQgJACgKAAIAAgfgAgqC0QgVgrgNg8IgThpQgGgnAAgUIAAgRQAqgTA3gEIAHBxQAIA9ASApQAPAbAPAAQAJAAAJgFQAJgGACgIQABgUAGgUQAEgLgEgYQgIg/gJglQgMgzgLg4IBUgjQATAAgBAMQAKBFAMBDQAKA0AAAyIgBAlIACAEQgEAFgBAFIgBAKIgDAKIgCAHIADAMIgGAAQgLAngpAbQgiAXgwAHIgJABQgzAAgYgkgAy1CPQgjgsgLg5QgFgYAAgVQAAgjALggQAPgqAngkQAngwAwgOQAHgBAWgFQASgEAQABQAlACAvALIgOBfQgLgHg9gGQgfAAgXALIgYANQgMAIgPAYQgJANgCALIgCAZIgBASQAAALAIAhQADAPASAXQAdAiAhAGQACgEAEgUIABgLQAAgNgGgLIgegDIAAg7QArgEAkABIBKAAQALAMgCAUIgBAVIAAAOQgGAMgMAAQgFAAgGgCIgIgCQgFAAABALIgFB/QgcAFgXAAQhfAAhKhIgAVbDXQg6ACgrggQgsg8AAhbQAAhoA2hcQA0g3A/AAQAOAAALACQAyAJAaAkQAgBCAABLQAABlgvBWQgSAcgdAPQgbAOgeAAIgGAAgAViiGQgoAVgJAlIgRA6IgDAxQgCAoAWAdQAaAWATgCQATgCASgTQAJgKACgOQAFgJAGgZIADgxQgBgeABgZQABgbgCgJQgDgQgMgLIACgFIgEgEIgoABgA6KDXQg6ACgrggQgsg8AAhbQAAhoA2hcQAzg3A/AAQAPAAALACQAxAJAaAkQAhBCAABLQAABlgvBWQgTAcgdAPQgaAOgeAAIgGAAgA6EiGQgnAVgKAlIgRA6IgDAxQgCAoAWAdQAaAWATgCQATgCASgTQAJgKADgOQAEgJAGgZIAEgxQgBgeABgZQAAgbgCgJQgDgQgLgLIACgFIgFgEIgoABgAETC4QgCgcgCgDQgNhFgNhxQgQiKgHgyIA7gOQAhgIAcgCIAaFVIACAFIA2gaQAlgSAbgHQAFAZADAhIAEA5QgQALgXAEIgnAFQgqAJhYARQgOgKgDgVgEAgmgA8IA/ARIgGDFIgjADg");
	this.shape.setTransform(218.3,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AufErQgHgHgBgKIgEgcIAAgDIgDiYQgHACgHAAIgEBuQgBAJgFAHQgGAGgIACQgeAGgaAAQhpAAhShPIgCgDQgHgJgGgKIgBAGIAAABQgEA/gBAaQAAAHgEAHQgFAGgHADQgHACgHgBQgIgCgFgGQglgogkg8IgJgQIgBATIAAAAQgCAbgFAqQgBAIgFAGQgGAGgIACQgIABgHgDQgIgDgKgBIgBAAQgagBgKgDQgfgHgSgYQgFgHAAgIIAChFQgKAZgNAYIgBACQgWAhgjATIAAAAQgjASgmgCIgCAAQhCACgxgkIgFgFQgOgTgKgUQghAxhNAYIgBAAQgbAKghAAQhCAAgyglIAAAAQg0gmgPhJIAAAAQgKgrADhLQADg/AwhCQAvhCBJgWIAAgBQAdgJAkAEIABAAQAkAEAbAcQAHAHAAAKIAAALIgBAIIgMAlIAAABIgTAwQgEAIgHAFQgIAEgIgBQgJgBgGgHQgNgOgKgCIgBAAIgFgBQgKAAgHAGQgJAIgKASIAAAAIgNAYQgDAGgBAJIgFAmQABAbARAiIAIAPQAFADAJACIAAABIAMABQAJAAAIgDIABgBQAcgLANgSIAAABQAHgNATgJQAJgEAJACQAJADAFAIIAZApQgEgaAAgdQAAhuA5hiIAEgEQA7hABJAAQARAAANADIABAAQA7ALAgAsIACAEQAMAZAIAaQAEhKABgwQAAgIAFgHQAFgGAHgCQAIgDAIADQAHACAFAHIBHBfIAHAJIgEg2QgBgIAEgHQAEgHAIgDQAHgDAIABQAWAFATACIAAAAIAYACIABAAQAaADAOANQAEAEACAFQACAFAAAGQgBAhAAAiQAMgSASgQQAsg2A3gQIAFgBIAZgEIAAgBQAWgEATAAIABAAQAnADAxAMQAKACAFAIIACAEQAKgKARgEIAZgHIAGgCQAfgEAeAAQAYAAAbACIAAABQBDAFAnBHIACAFQAJAdAAAaQAAAdgKAZIABgBQgTAzgiAmIgEADIgIAHIAeAkIAqAqIBwliQACgIAHgFQAHgFAIAAQAIAAAHAFQAGAFADAIIB8GAIgBgBIAJAZIABACQAFATACAUQAAAHgDAGQgDAGgGAEQgGAEgHAAIgnABIgBAAIgvABQgJAAgHgFQgHgFgCgIIgVhLIgDAAIgBAAIgGABIgEATIgHAaIAAgBIgGAWQgDAIgGAEQgGAFgIAAQgMABgSgCIABAAIgVgCIglgBQgIAAgHgFQgGgFgCgIIgDgJIgBgCIgWAQQgPAQgYADQgFAAgFgBQgGgCgDgEIgsgmIAABAQAAAHgEAGQgDAGgGADQgWAMggADIgvAEIgBAAQgJAAgIgFgA6chFIgBABIgQA2IgDAvQgBAdAPAVQAOAMAKABIAAgBQAKgCALgKIAAgBQAEgEABgHIACgGQAEgIAEgTIAEgvIAAAAQgBgdABgZIAAgBQAAgWgBgGIAAgCQgCgIgGgGIgBgBIgRAAQgZAQgGAYgAxBBYIAAgBIAAgBIgCAAIACACgAw9hbIgXANQgIAHgLARIAAAAQgFAIgCAGIgCAYIgBAPQABAKAGAdIAAABIAFALIAAgyQAAgIAHgHQAGgIAKAAQAsgFAlAAIBKABIACAAIgBhQQgCAIgGAGQgGAGgIABQgJABgHgEQgKgEg0gFQgWAAgRAHgAsqhMIgBgFIAAgDQgOAGAKAAIACAAIgEgCIAGACIgCAAIADACIAAAAgAbrEEQgHgCgGgGQgkgogkg8IgJgQIgCATIAAAAQgBAbgFAqQgBAIgGAGQgGAGgHACQgJABgHgDQgHgDgKgBIgBAAQgagBgKgDQgfgHgSgYQgGgHAAgIIAChFQgKAZgNAYIgBACQgWAhgiATIgBAAQgjASgmgCIgCAAQhCACgwgkIgGgFQgOgTgKgWIAHApQABAHgDAHQgDAHgGAEQgGAEgHAAQggABgYAGQgVAGgXAAQgMAAgQgCQgJgCgGgHQgHgHAAgJIAAg0QAAhAgFg8QgFhCAAhKIgGAAIAAAAIgCABIgKCgIgGCOQgBAHgDAGQgEAFgGAEQgZAMgZAAIgBAAQgQAAgMADIgBAAQgMADgMAAQgKAAgIgHQgHgHAAgKIgBggIAAgBIACgdIAAgVIAAghIAAAAIABgTIAAgBIAAgiIABgeIAAgVQAAgqADglIgWACIg8ACQgIABgHgFQgHgGgDgIQgCgIgCgMIAAgBIgBgHIgBgDQgCgGAAgLIAAgYQAAgHAEgGQADgGAHgDQALgGATgDIAAAAIAMgBIAEgCQA4gKBMgLQAfgFAZgBQADgPAKgIQARgZAhgMIABAAIAtgNIAFgBQArgFA4AnIAGAGQANARgBAPQABAagZARIgYASQAGABAFAEQAHAHABAKIADArQANgkAUgiIADgEQA8hABJAAQARAAANADIABAAQA7ALAfAsIACAEQANAZAIAaQADhKABgwQAAgIAFgHQAFgGAIgCQAHgDAIADQAIACAFAHIBGBfIAHAJIgEg2QAAgIAEgHQAEgHAHgDQAIgDAHABQAXAFASACIABAAIAYACIABAAQAaADANANQAEAEADAFQACAFAAAGQgCAsAAAvQAAA8AEA5IAAABIABAYQAgABAjAFQAJABAHAHQAGAHAAAKQgBAXAEAOIgBgBQACAGAFAEIAJABQAHAAAFgCIABAAIAAgBQgBgGgDgFIgBgBIgUghQgTgggigiQgqgrgBg7QgCgLAAgLQgBg2AvgmQAjgeAygBIAAAAQBMgEApAtIABABIAWAaIADAGIAIAPQAKAMAFAaQACAHgDAIQgEAHgHAFQgjAUgtAMQgJACgHgDQgIgEgEgHQgLgSgMgPQgDgEgEgBIAAAAQgEAAgDADIgBACIABACIgBgBQAHASAIAPIAjAsQA2AwARAxQAGASAAAUQAABBguAkIAAAAQg3AshXgKQgvgFgggpIgCgDIgCArQAAAHgFAHQgEAGgHADQgFABgEAAIgGAAgAVJhFIAAABIgQA2IgDAvQgCAdAPAVQAPAMAJABIABgBQAKgCAKgKIABgBQAEgEABgHIACgGQADgIAFgTIADgvIAAAAQgBgdABgZIAAgBQABgWgBgGIgBgCQgBgIgGgGIgBgBIgRAAQgZAQgHAYgAKsD2QgHgFgDgIIgVhLIgDAAIgBAAIgFABIgFATIgHAaIAAgBIgGAWQgDAIgGAEQgGAFgHAAQgNABgSgCIABAAIgUgCIgmgBQgIAAgGgFQgHgFgCgIIgDgJQgBgEAAgEQgLAEgNADIgCAAIgmAEQgqAKhXAQQgKACgIgGQgYgPgDgiIgBAAIgBgWIgCgHQgOhGgNhyQgQiJgHgyQgBgJAFgIQAGgJAKgCIA6gNQAjgKAegCQAKAAAIAGQAIAHABAKIAYE3IAWgLIAAAAQAngTAdgIQAHgCAHACQAGACAFAFQAFAFABAHQAFAXADAcIBolHQACgIAHgFQAGgFAIAAQAIAAAHAFQAHAFACAIIB8GAIAAgBIAJAZIABACQAFATABAUQABAHgDAGQgEAGgGAEQgGAEgHAAIgmABIgCAAIgvABIgBAAQgIAAgGgFgEAgsADtIgBgBQgUgLgBgbQgBgUANgSIABgBIAAgBIgWjXQgBgIAEgHQAFgHAIgDQAHgEAIADIA/ARQAJACAFAHQAFAHAAAJIgGC9QALALACATIAAABQACAUgPATIAAABQgOAQgUAGIgBAAQgIACgHAAQgOAAgMgGgAkPDsQgHgHgBgKIAAggIAAgBIABgdIAAgVIABghIAAAAIAAgTIAAgBIABgiIAAgeIAAgVQAAgqADglIgWACIg7ACQgJABgHgFQgHgGgCgIQgDgIgBgMIAAgBIgBgHIgCgDQgCgGAAgLIAAgYQAAgHAEgGQAEgGAGgDQAMgGASgDIABAAIALgBIAFgCQA4gKBLgLQA9gKAjAEIAkACQAFgBAFACQAkAJgHAZIgDANIgBARIAAABIgBALIAYgDQAIAAAIAGQAIAHABAKIAJBxIAAgBQAIA5AQAnIAHAMQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIABAAQABgUAGgUIABAAQABgIgCgPIAAgBQgJg+gIgjQgNg0gKg5QgCgJAFgIQAEgIAIgDIBTgiQAFgCAFAAQATAAAJAHQAPAKAAATQAKBDAMBBQAKA2AAA0IgBAfQACAFAAAGQAAAIgEAGIgBABQgBAMgBADIgDAIIABADQACAHgCAIQgDAIgHAFIAAAAQgQAngqAcQgnAZg1AJIgDAAQhJAEgggzIgCgDQgXgtgNg/IAAgBIgThpIAAAAIgEgWIgGBqIgHCOQAAAHgEAGQgDAFgGAEQgZAMgaAAIAAAAQgQAAgMADIgBAAQgNADgMAAQgKAAgHgHgAiMhiIAOgBIAAgGQABgGADgFg");
	this.shape_1.setTransform(218.2,30.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,436.4,60.9);


(lib.girl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EABF9B").s().p("AgYACIAAgCQAYgDAZgBIgDABQgNAIgPAAQgJAAgJgDg");
	this.shape.setTransform(-22.9,-85.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#604F40").s().p("AAAgMQAmgDADACQALgFADgFQgDAJgDACQANgFADgGQgHAQgHACQgzgQgiAWQgWAQgIAHQAeghAigDg");
	this.shape_1.setTransform(-13.6,-100.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EABF9B").s().p("AAOgbQAqANADAIQg7gNgfAWQgWATgFAIQAihFAmAMg");
	this.shape_2.setTransform(-14.5,-100.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#604F40").s().p("AA5AQQgcgXhOADIgNgKQgLgKgEgMIAKANQAKAKAJAEQgEgCgDgSQACAIAIAKQAGgDAuAFQAtAGAaAnQgHgHgOgNg");
	this.shape_3.setTransform(-40.3,-103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5A9E5A").ss(1,1,1).p("AjBgfQgTAFgbgKQgagLgGgSQgDgHABgIQAdAGgaAIQgBAAAAABQgaAIgcgJQgUgHgegSQgSgKgEgKQgDgHAFgHAjBgfQgEgKAAgMQALADAFANQgGAEgGACgAh2ADQgDgIABgKQAJgCAKACQgDAPgOADQgNADgVgGQgggIgJgXAAgBCQgCgJABgLQARAAgCATQgHABgHAAQgkAAg3gPQgygOgJgiACgB+QgigBgrgLQgsgNgHgjAHrB7QgMAFgLAVQgLAVgRAIQgbAKgXgJQgNgFgMgKQAKgGALACQAMADgGAPQgBAAgBABQgGADgRAEQgWAEgFABQgWAAgbgKQgNgFgFgJIgBAAQgfAFgdgKQgSgGgXgSQgIgGgDgGQgFgMAQgMQALAIgDAQQgJAAgKAAAERCnQgGgKABgOQAqACglAWgAmNhvQgGASgZgKQgggNgVgdQgWgeAggP");
	this.shape_4.setTransform(28.4,-54.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5A9E5A").ss(1,1,1).p("AATi+QAAAGgFBVQgFBVgJBZQgGBagMAa");
	this.shape_5.setTransform(75.8,-65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80AF80").s().p("AATi+IgFBbQgFBVgJBZQgGBagMAag");
	this.shape_6.setTransform(75.8,-65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#80AF80").s().p("AAMDVIg2gFQgHADgDgXQAKhWAGhXQAGhBAHhCQABgKAGgjQAHgjAJgOQAFgFAGAGQAIAMgDAaIgGAoIgFB5QgIAygGA1QgDAYAMATQAKAMAOABQAPABAKAKQAHAKgEALQgEALACALQABABgFAFQgEAEgSAAIgMAAg");
	this.shape_7.setTransform(75.9,-62.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5A9E5A").ss(1,1,1).p("AgTjMQgCgCAHgPQAIgQAfgCIAeACQAAgEAEAEQAEAEACA5QABAugFBZQgGBXgHBSQgHBRgEAVQACABgFAFQgFAGgdgCQg2gEgBgBQgHAEgDgYQACgPAIhXQAHhXAKhdQAKhgAJgpg");
	this.shape_8.setTransform(77.2,-64.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#87C187").s().p("AAADwQg2gEgBgBQgHAEgDgYIAKhmQAHhXAKhdQAKhgAJgpQgCgCAHgPQAIgQAfgCIAeACQAAgEAEAEQAEAEACA5QABAugFBZQgGBXgHBSQgHBRgEAVQACABgFAFQgEAEgTAAIgLAAg");
	this.shape_9.setTransform(77.2,-64.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E56161").s().p("AgGARQAkgUALgoQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBABAAAAIATgLIgSAJIAlgUQgIAagVATQgRARgSAOQgSAQgXANIgsAaQAjgXAhgag");
	this.shape_10.setTransform(76.9,93.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E56161").s().p("ABAAVIgpgEIgngDIgXgDIgcgDIgCgBIABABIgDgBQgOgFgOgCQAoAFAqAAQATACAUgDQANgEgFgGQgEgHgHgIQAJAFAKAIIAUAIIAUAJQALACALAEQgHAHgSAAIgLgBg");
	this.shape_11.setTransform(2.6,135.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AAQAAQgBAOgPACQgNgCgCgOQACgNANgCQAOACACANg");
	this.shape_12.setTransform(-70.7,7.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAAQACgNANgCQAOACACANQgBAOgPACQgNgCgCgOg");
	this.shape_13.setTransform(-70.7,7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CB9966").ss(1,1,1).p("AAAAUIABgn");
	this.shape_14.setTransform(-39.2,-71.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7A644E").s().p("AgOBGQgbgRgLgNQgRgWgQghQgQgkAFgcIAjA7QANAYAXAMQALADAEgHIACgEIACgOQABgMABgBQAQANAUAQQAVATAVgTQANgPgCgdQgCgcgLgRIAHAIQAUAagBAlQgBAjgNAdQgLAbgYgUQgQgKgBAEIgIAQQgFAHgJAAQgKAAgOgKg");
	this.shape_15.setTransform(-7.3,-119.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7A644E").s().p("AiQBJQgZghAFgoQAFgmAdgdIAbgUQggAeAJAoQAXApAmgDQAlgEAjgPQAjgJAfgTQAUgRAWgMQAFAOASgMIAcgQQgEARgOANIgDADQgFAHgGAHIgBABIgFADQgTATgVAQQglAdgqASQgVAOgagBQgGgIgLAAQgNAFgOAHQgPAHgNAAQgSAAgQgPg");
	this.shape_16.setTransform(-46.2,-122.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DB7979").s().p("AgbAwQgjgQgbAMQAWgMAdACQAcACAUgKQAtgiAjguQgOA3gmArQgRALgTAAQgNAAgQgHg");
	this.shape_17.setTransform(-20.8,18.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5A9E5A").ss(1,1,1).p("AgoA0QgCgCgDgSQgEgSANgNQAXgTAYgJQAYgMAIgHQADgDABgC");
	this.shape_18.setTransform(-11.8,-77.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#87C187").s().p("AgrAeQgEgSANgMQAXgUAYgJQAYgMAIgHIhTBiQgCgCgDgSg");
	this.shape_19.setTransform(-12,-77.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EABF9B").s().p("AArAJQgbgahRADQAGgJAzgMQAwgLAaBTQgFgIgSgUg");
	this.shape_20.setTransform(-38.8,-102.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgkgOQACgBAZAEQAXADAXAX");
	this.shape_21.setTransform(-37.5,-103.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAAQABgEAIgBQAJABABAEQgBAGgJAAQgIAAgBgGg");
	this.shape_22.setTransform(-39.2,-102.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLgPIAXATQAAADgQAIg");
	this.shape_23.setTransform(-36.9,-99.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.3,1,1).p("AAaAAQgDAXgXADQgWgCgDgYQADgWAWgDQAXADADAWg");
	this.shape_24.setTransform(-38.4,-101.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#65C165").s().p("AgZAAQADgWAWgDQAXADACAWQgCAXgXADQgWgCgDgYg");
	this.shape_25.setTransform(-38.4,-101.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.3,1,1).p("AAlAAQgDAjgiACQgggCgEgjQAEghAggEQAiAEADAhg");
	this.shape_26.setTransform(-38.4,-101.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#23A723").s().p("AgkAAQAEghAggEQAiAEADAhQgDAigiAEQgggEgEgig");
	this.shape_27.setTransform(-38.4,-101.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABBAOQACgFgYgbQgYgehJAHIgKADQgBADADAYQADAXAPAQQAaAaAngRQAtgTgBgEg");
	this.shape_28.setTransform(-38.5,-100.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgsAcQgPgQgDgXIgCgbIAKgDQBJgHAYAeQAYAbgCAFQABAEgtATQgQAGgMAAQgVAAgQgPg");
	this.shape_29.setTransform(-38.5,-100.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EABF9B").s().p("AguAfQgPgSgDgZQgDgaAAgDIALgEQBMgHAZAgQAZAegCAGQABAEgvAUQgRAHgNAAQgWAAgQgQg");
	this.shape_30.setTransform(-38.8,-99.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BC6868").ss(1,1,1).p("AAgADQAAgBgUgCQgTgDgYAD");
	this.shape_31.setTransform(-74.4,-10.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CB9966").ss(1,1,1).p("AAPgUQgDgBgOAJQgQAKAGAX");
	this.shape_32.setTransform(-21.7,120.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EABF9B").s().p("AgSABQAHgcAegCQgUACABAYQAAAWAQALQgbgCgHgbg");
	this.shape_33.setTransform(-21.5,121);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#C10C09").ss(1,1,1).p("AihAQIABgQQgBgHAYgwQAZgwA9gIIAoA3QAEAEArAjQAuAhAnAWIApAcQABABgHAOQgHANgVAKQgZAIgygBQgxgBgSgB");
	this.shape_34.setTransform(-0.8,131.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F96262").s().p("AA1BvQgxgBgSgBIiThdIABgQQgBgHAYgwQAZgwA9gIIAoA3IAvAnQAuAhAnAWIApAcQABABgHAOQgHANgVAKQgXAIgqAAIgKgBg");
	this.shape_35.setTransform(-0.8,131.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CB9966").ss(1,1,1).p("AgMgXQgDADgCAVQgCAXAlAA");
	this.shape_36.setTransform(48.9,91.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EABF9B").s().p("AgaAQQgLgaAYgUIgEAGQgFAWAPAOQARAJAUAGQgMAEgLAAQgSAAgPgPg");
	this.shape_37.setTransform(49.8,91.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E56161").s().p("Ag4AcQAbgXAggMQAigPAcgVQAEAMgDAKQgHAFgJADIgnARIgpAVIgUAJIgRAKQADgJAIgHg");
	this.shape_38.setTransform(57.2,104);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#C10C09").ss(1,1,1).p("ADMiVQgLgPgpASQgoAWgMAGIgJAGQgBAFhUAFQhHgEgBgEQgCAFgHAlQgIAoAEAfQgFADgwAaQgxAagVARQgOAOAGAHQAFAIAEAFQADAIAMASQAMASABACQAHAIAxgUQACABADgEQADgDgMgRQgUgfAGAFQgBABAGgBQAGgBAegGQAagFAHgDQAHgCAqgNQAwgUAygvQAygxAQgRQAPgOAWgWQAWgWACgCQACgEgLgQg");
	this.shape_39.setTransform(71.7,99.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F96262").s().p("AitCbIgNgUQgMgSgDgIIgJgNQgGgHAOgOQAVgRAxgaIA1gdQgEgfAIgoQAHglACgFQABAEBHAEQBUgFABgFIAJgGIA0gcQApgSALAPQALAQgCAEIgYAYIglAkIhCBCQgyAvgwAUIgxAPQgHADgaAFIgkAHIgFAAQgGgFAUAfQAMARgDADQgDAEgCgBQgkAOgNAAQgFAAgCgCg");
	this.shape_40.setTransform(71.7,99.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAAQABgEAIgBQAJABABAEQgBAGgJAAQgIAAgBgGg");
	this.shape_41.setTransform(-15.2,-100.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLgOIAXASQAAADgQAIg");
	this.shape_42.setTransform(-12.9,-97.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.3,1,1).p("AAZAAQgCAXgXACQgWgCgCgXQACgWAWgCQAXACACAWg");
	this.shape_43.setTransform(-14.4,-98.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#65C165").s().p("AgYAAQACgWAWgCQAXACACAWQgCAXgXACQgWgCgCgXg");
	this.shape_44.setTransform(-14.4,-98.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.3,1,1).p("AAlAAQgEAighADQghgDgDgiQADggAhgEQAhAEAEAgg");
	this.shape_45.setTransform(-14.4,-98.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#23A723").s().p("AgkAAQAEggAggEQAhAEAEAgQgEAighADQgggDgEgig");
	this.shape_46.setTransform(-14.4,-98.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#CB9966").ss(1,1,1).p("AgMgJQAHgBASAV");
	this.shape_47.setTransform(-57.4,-97.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4D3B0").s().p("AgMgJQAHgBASAVg");
	this.shape_48.setTransform(-57.4,-97.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#B77070").ss(0.3,1,1).p("ABJAIQgDAEgrAEQgqAFg5gk");
	this.shape_49.setTransform(-26.9,-80.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#B77070").ss(0.3,1,1).p("AAuALQABAJgNAFQgRAHgcgFQgegFgHggIgKgFQACAAAQgDQAQgDAJgEQANgFAIAFQAKABAHgBQAEABAJAKQAJAKAOADIgQACQABABACAJg");
	this.shape_50.setTransform(-26.2,-79.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FF9999","#000000"],[0,1],-1.8,0,28.8,0).s().p("AgLAbQgegFgHggIgKgFIASgDQAQgDAJgEQANgFAIAFQAKABAHgBQAEABAJAKQAJAKAOADIgQACIADAKQABAJgNAFQgJAEgOAAQgLAAgLgCg");
	this.shape_51.setTransform(-26.2,-79.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgcA5QA5AFgBgeQgBgQgLgGQgMgGgBAAIAAgMQgBgJADgLQACgFACgGQAHgQABgC");
	this.shape_52.setTransform(-22.5,-91);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4D3B0").s().p("AgcArIAhhWQgDALABAJIAAAOIANAHQALAEACAPQAAAbgqAAIgPgBg");
	this.shape_53.setTransform(-22.5,-89.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CB9966").ss(0.5,1,1).p("Ag7AIQgBgFAbgaQAagbBDAOQAAADgGAfQgFAcgMAMQghAQg/gug");
	this.shape_54.setTransform(-14.8,-97.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Ag7AIQgBgFAbgaQAagbBDAOIgGAiQgFAcgMAMQgJAEgKAAQgdAAgwgig");
	this.shape_55.setTransform(-14.8,-97.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EABF9B").s().p("AgDAqQgdgJgfgYQgBgGAcgcQAdgeBHAPIgGAlQgGAfgNANQgIAFgLAAQgLAAgMgEg");
	this.shape_56.setTransform(-14.4,-97.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#705B47").ss(1,1,1).p("AA0AeQAEgDgRgWQgRgVhKgNg");
	this.shape_57.setTransform(-37,-109.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7A644E").s().p("Ag0gdQBKANARAVQARAWgEADg");
	this.shape_58.setTransform(-37,-109.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#705B47").ss(1,1,1).p("AgsARQgBgCARgPQARgQA4AAg");
	this.shape_59.setTransform(-15.8,-105.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7A644E").s().p("AgcAAQARgQA4AAIhZAhQgBgCARgPg");
	this.shape_60.setTransform(-15.8,-105.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BC6868").ss(1,1,1).p("AgKgEQgBgCACgBQADgBARAQ");
	this.shape_61.setTransform(8.8,-68.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CCCCCC").s().p("AgKAaQgOgZACgbQAPAIAOgIIAEAbQAEAXAIAAQgLADgLAAIgLgBg");
	this.shape_62.setTransform(-0.2,-71);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#999999").ss(1,1,1).p("AgzAAQACABARAAQAUAAA4gzQAEAEADBEQADACgOAOQgNANhDgBQgFABgGgzg");
	this.shape_63.setTransform(2.7,-73.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgoAyQgFABgGgzQACABARAAQAUAAA4gzQAEAEADBEQADACgOAOQgMANg7AAIgJgBg");
	this.shape_64.setTransform(2.7,-73.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#999999").ss(1,1,1).p("AgzAAQACABARAAQAUAAA4gzQAEAEADBEQADACgOAOQgNANhDgBQgFABgGgzg");
	this.shape_65.setTransform(2.7,-73.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgoAyQgFABgGgzQACABARAAQAUAAA4gzQAEAEADBEQADACgOAOQgMANg7AAIgJgBg");
	this.shape_66.setTransform(2.7,-73.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgagLQAIAAAUAEQAUALAFAI");
	this.shape_67.setTransform(-3.2,-85.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgnAIQAJgGAagIQAJgBARAHQARAHABAB");
	this.shape_68.setTransform(-1.4,-90.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BC6868").ss(1,1,1).p("AAKgTQgCAAgJALQgLAJADAU");
	this.shape_69.setTransform(1,-65.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EABF9B").s().p("AATBoQgCABgHgNQgIgNgBgvIgfgeIgQAAIgJACQgBgCAEgNQADgQARgCQAQAAAAgBIgCgBQgLgFAEgLQAKgKgBgIQgEgDACgLQADgLACgFIALgKIgDAKQgDAHADAGQABgCAMgBIASgBQATAEAMAQQgagMgZAKQgHAFgJAPQgIAPANACQgVACgHAPQAFATAVAIQAUAJAEAZQgCAkAdAVQgGACgGAAQgGAAgHgCg");
	this.shape_70.setTransform(-4,-83.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#CB9966").ss(1,1,1).p("Agyg1QgDgBgCgNQABgNAJgOQAJgNABgBQANgLAXAJQAZAKAOAGQAPAFATAKQATALgCASQgEATgIAtQgIAugBAGQgBADgWAUQgWAUgWAGIgRgFQgBACgIgNQgIgMgBgxIghgeIgQAAIgJACQgBgCAEgNQADgPARgDQAQAAAAgBQgBgBgBAAQgCAAgFgJQgFgIAPgLQABgBABgB");
	this.shape_71.setTransform(-0.5,-84.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F4D3B0").s().p("AgOBuQgBACgIgNQgIgMgBgxIghgeIgQAAIgJACQgBgCAEgNQADgPARgDQAQAAAAgBIgCgBQgCAAgFgJQgFgIAPgLIACgCIgCACQgDgBgCgNQABgNAJgOIAKgOQANgLAXAJIAnAQQAPAFATAKQATALgCASQgEATgIAtIgJA0QgBADgWAUQgWAUgWAGg");
	this.shape_72.setTransform(-0.5,-84.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#5A9E5A").ss(1,1,1).p("AAEASQgBABgDgIQgFgIAFgU");
	this.shape_73.setTransform(-3.7,-97.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#87C187").s().p("AAAALQgFgIAFgUIAEAjIAAAAQgCAAgCgHg");
	this.shape_74.setTransform(-3.7,-97.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#69B269").ss(1,1,1).p("AA6ijQgaAUAIAjQAGAoApgGQAGAHgkAxQgjAvgrANQhQAHALBBQANBABBgNQgcgCgLgeQgMgeALgUQAPgUAYgIQAVgIAUgPQArggAUgsQAHgfgSgRQgRgRgCgdQAAgQAIgNQgGABgFADg");
	this.shape_75.setTransform(-10.7,-85.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#80AF80").s().p("AhaByQgLhBBQgHQArgNAjgvQAkgxgGgHQgpAGgGgoQgIgjAagUQAFgDAGgBQgIANAAAQQACAdARARQASARgHAfQgUAsgrAgQgUAPgVAIQgYAIgPAUQgLAUAMAeQALAeAcACQgLADgKAAQgvAAgKg2g");
	this.shape_76.setTransform(-10.7,-85.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#5A9E5A").ss(1,1,1).p("ABJikQghgLgQANQgYAVAIAuQAIAgAlgIQAGAHgkAxQghAvgtAOQhQAGALBCQAEAjAUAJQAUAKAegDQAegFAagkQAbgjAUgYQA/hFAKhZQgBg3g0gUg");
	this.shape_77.setTransform(-7.3,-85.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#87C187").s().p("AhkCiQgUgJgEgjQgLhCBQgGQAtgOAhgvQAkgxgGgHQglAIgIggQgIguAYgVQAQgNAhALQA0AUABA3QgKBZg/BFIgvA7QgaAkgeAFIgNABQgWAAgPgIg");
	this.shape_78.setTransform(-7.3,-85.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#705B47").ss(1,1,1).p("AhiB2QgHgIgOhJQgOhIA1gsQA9gkA1gCQA4gCAhAcQgGgFg3gJQg4gJgjAsQgeAugOAmQgOAngLBBg");
	this.shape_79.setTransform(-12.9,-135.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7A644E").s().p("Ah3AlQgOhIA1gsQA9gkA1gCQA4gCAhAcQgGgFg3gJQg4gJgjAsQgeAugOAmQgOAngLBBQgHgIgOhJg");
	this.shape_80.setTransform(-12.9,-135.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#705B47").ss(1,1,1).p("AFMgoQgDApgSA5QgTA5gCAYQgDAVgSAKQgSAJgDAAQAAgJgrhWQgrhUhYg/QgEgBg9APQg8AQhGAtQhHAvgfBeQgGAoAFAoQgMgQgBgOQAAgOgGgQQgJgOgUgEQgVgFgOAIQABgEgCgsQgBgtgKgqQgUg2ANg6QALghAagiQAagjAegSQAngXAtAAQAqgDAlAQQAlAQBYBUQACgFAxgcQAwgdBJAHQBFAOATAoQATAogCAog");
	this.shape_81.setTransform(-30.3,-116.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#604F40").s().p("AjtDLQAAgOgGgQQgJgOgUgEQgVgFgOAIIgBgwQgBgtgKgqQgUg2ANg6QALghAagiQAagjAegSQAngXAtAAQAqgDAlAQQAlAQBYBUQACgFAxgcQAwgdBJAHQBFAOATAoQATAogCAoQgDApgSA5QgTA5gCAYQgDAVgSAKQgSAJgDAAQAAgJgrhWQgrhUhYg/QgEgBg9APQg8AQhGAtQhHAvgfBeQgGAoAFAoQgMgQgBgOg");
	this.shape_82.setTransform(-30.3,-116.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EABF9B").s().p("AgJDFIBLg5QAjgaACg7IAFgwQAEgWgRgVQgfgfgoAJQAigKAKgeQgBgYgXgTIgpggQgtgmg7gOQgggDgigIQAhgBAagQQBdgqBFBFQBABDAWBbQAKAjAHAhQATBHgOBHQgaBKhKAdQgrAWgrADQgKgpAZggg");
	this.shape_83.setTransform(-18.5,-99.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CB9966").ss(1,1,1).p("ACyjwQg1glgpAHQgqAGgIAEQgKAAhDAWQhFAWhMA1QhLA1geBcQgIABADAiQAGApBJADQgCAEAUA0QATAzA3AzQA3AzBqACQBTgDBMghQBLgcAZhKQAPhHgThFQgIgkgKgiQgoh/g1glg");
	this.shape_84.setTransform(-31.7,-99);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F4D3B0").s().p("Ah/DbQg3gzgTgzQgUg0ACgEQhJgDgGgpQgDgiAIgBQAehcBLg1QBMg1BFgWQBDgWAKAAQAIgEAqgGQApgHA1AlQA1AlAoB/QAKAiAIAkQATBFgPBHQgZBKhLAcQhMAhhTADQhqgCg3gzg");
	this.shape_85.setTransform(-31.7,-99);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BC6868").ss(1,1,1).p("AgmgFQAHgHBGAT");
	this.shape_86.setTransform(-31.2,-24.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BC6868").ss(1,1,1).p("AhCAJQADgCArgHQAogIAvAA");
	this.shape_87.setTransform(-35.9,-25.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BC6868").ss(1,1,1).p("AgDAYQAGgCABgt");
	this.shape_88.setTransform(-56.1,-45.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BC6868").ss(1,1,1).p("AAIAsQgBgCgHgTQgFgSgBgMQAGgeADgF");
	this.shape_89.setTransform(-13,-43.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BC6868").ss(1,1,1).p("AArgIQgFgHhRAa");
	this.shape_90.setTransform(-70.4,-9.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CCCCCC").s().p("AgBAeQgCgMgGgVQgGgXgOgBQAdgFAVAQQACAFAEASQADAUgBACIgVABIgJAAg");
	this.shape_91.setTransform(-58.9,2.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#999999").ss(1,1,1).p("ABbAHQgHAAg6AJQg3AJgYAdQgGABgVgIQgWgIAcggQAegeASgPQARgPAlAAQApgCALALQAMALgBAog");
	this.shape_92.setTransform(-65,4.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhQAvQgWgIAcggQAegeASgPQARgPAlAAQApgCALALQAMALgBAoQgHAAg6AJQg3AJgYAdIgCAAQgHAAgSgHg");
	this.shape_93.setTransform(-65,4.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#CB9966").ss(1,1,1).p("AAAAbQAAgCAAgTQAAgSAAgO");
	this.shape_94.setTransform(-55.6,27.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EABF9B").s().p("AAAgBQgVgUgQgVQAmgGAWAiQARAZgDAhQgVgVgQgYg");
	this.shape_95.setTransform(-57.5,8.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EABF9B").s().p("AgSAbQgWgHABgPQAAgMACgVQACAYAXAHQAEAMASAGQATAHAMABIgWAAQgTAAgSgCg");
	this.shape_96.setTransform(-51.1,28);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EABF9B").s().p("AgbACQANgPAOgIQgMATAOADQAQAFAPgGQgTAVgaABQgdgEAOgQg");
	this.shape_97.setTransform(-78.9,29.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EABF9B").s().p("AgWAQQgfgCAIgNQAIgMAXgFQgHACALAFQAKAEAFAAQAWgCAVgJQgRAhglAAIgQgBg");
	this.shape_98.setTransform(-72.1,38.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EABF9B").s().p("AgLAhIAVgQQAKgLgIgXQgJgYgCgNQAcAbgFAnQgFAWgRADQgPADgLAPQAAgLANgLg");
	this.shape_99.setTransform(-62.5,35.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#CB9966").ss(1,1,1).p("ABWimQgfg1hBApQgDAAgdAVQgdAVgLAqQgFAoABATQABASgPALQgSAMgNARQgLAOgCADQABgDgWAIQgPAJgCAOQgCAOAVADQAXAAARgQQARgQAGgFQAHgFATgMQASgMACgBQgCADgNAhQgNAggCAYQAAATgHABQgHAAgOAEQgQAGgEALQgEAMAfABQAmAEAegVQANgZADgeQAFgOAKgRQAJgQACgCQAAACAHASQAHATAEARQAEAjgEAEQgBABgPANQgNAMgLALQgKANAQAHQANAIA6gcIAVgLQAAgFAAgzQgBgnAGgHQAAABAOAJQAOAJAegBQAcgDAGgJQAHgKgCgBQABAAgEgEQgEgEgXgDQgXgGgFgSQgFgSABgDQgBgFgJhBQgJhBgQggg");
	this.shape_100.setTransform(-63.8,23.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F4D3B0").s().p("AgLDDQgQgHAKgNQALgLANgMIAQgOQAEgEgEgjIgLgkIgHgUIgLASQgKARgFAOQgDAegNAZQgeAVgmgEQgfgBAEgMQAEgLAQgGQAOgEAHAAQAHgBAAgTQACgYANggIAPgkIgUANIgaARIgXAVQgRAQgXAAQgVgDACgOQACgOAPgJQAWgIgBADIANgRQANgRASgMQAPgLgBgSQgBgTAFgoQALgqAdgVQAdgVADAAQBBgpAfA1QAQAgAJBBIAKBGQgBADAFASQAFASAXAGQAXADAEAEQAEAEgBAAQACABgHAKQgGAJgcADQgeABgOgJQgOgJAAgBQgGAHABAnIAAA4IgVALQgtAWgSAAQgFAAgDgCg");
	this.shape_101.setTransform(-63.8,23.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BC6868").ss(1,1,1).p("AASAAQgIACgbgC");
	this.shape_102.setTransform(-75.8,7.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BC6868").ss(1,1,1).p("AAGAWQABgCAAgPQABgOgOgL");
	this.shape_103.setTransform(-63.2,-3.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BC6868").ss(1,1,1).p("AAWADQgCACgQACQgOADgLgR");
	this.shape_104.setTransform(-72.4,2.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BC6868").ss(1,1,1).p("AgCAOQgHAAAOga");
	this.shape_105.setTransform(1.6,-36.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BC6868").ss(1,1,1).p("AgdhXQgCAAAQBGQALAjAPAiQARAhACAD");
	this.shape_106.setTransform(2.4,-41.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CCCCCC").s().p("AAIgNQAHgWgCgFQAKAIAGAYIAFAcQgkgBgfAWQAYgaARgcg");
	this.shape_107.setTransform(-27.7,-66.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CCCCCC").s().p("AAIAWQgggVgUAiQgBgTAGgZQAGgbASgHIAWgIIgCAkQAWAhASAiQgPgTgWgLg");
	this.shape_108.setTransform(-39.9,-68);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#999999").ss(1,1,1).p("AA/BTQgGgGgVgRQgagWgYgGQgtAAgEADQAEgFAbghQAcgkAJgRQAKgbgGgBQABgCAKAPQALAPAJA4QAIA1AIARQAEAJADAEQABACAAAA");
	this.shape_109.setTransform(-27.5,-62.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAkA9QgZgWgYgGQgtAAgEADIAegmQAcgkAKgRQAJgbgGgBQABgCALAPQALAPAIA3QAJA2AHARIAHANIgbgXg");
	this.shape_110.setTransform(-27.5,-62.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#999999").ss(1,1,1).p("AAKhjIgCAkQAHgDA2BzIgxgLQAGgIgtAdQguAkgDAFQACgJALg0QAMg2AGgZQAEgSACgOQACgOARgGQAcgJgGACg");
	this.shape_111.setTransform(-40.1,-63.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Ag3AnIAShPQAEgSABgOQACgOARgGIAWgHIgBAkQAGgDA3BzIgxgLQAFgIgsAdQguAkgDAFIANg9g");
	this.shape_112.setTransform(-40.1,-63.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EABF9B").s().p("Ag9gFIADgkIBxAGQAAAFADAeQAEAggBAJIAAABQg/gSg7gdg");
	this.shape_113.setTransform(-33,-71.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#CB9966").ss(1,1,1).p("AA6hKIh0gHQAAADgCAZQgCAagBAEQgBAmAVASQAVATATAeQAYgVASgOQASgOAHggQABgHgEggQgDggAAgEg");
	this.shape_114.setTransform(-32.9,-67.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F4D3B0").s().p("AgrAhQgVgSABgmIADgeIACgcIB0AHQAAAEADAgQAEAggBAHQgHAggSAOIgqAjQgTgegVgTg");
	this.shape_115.setTransform(-32.9,-67.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DB7979").s().p("AgxgJIgTgSQgHgCgEgFQgMgUgBgWQgBgMAEgKQACgGAEgFIAIgLQgEAmAcAkQAcAkAXAaQAXAdAcAZQANALALANQAGAQAMALQhMg8hChGg");
	this.shape_116.setTransform(-4.4,-36);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DB7979").s().p("AhBBGQgOgbgRgPQgRgTAKgcQAIgbAUgMQAsgcAsgWQAUgJAegBQAfgCANAVQgOgIgSgCQgTAAgTAEQgBAQAMAMQALANACAQIgdgPQgNgGgQAJQgXAPgOAbQgLgTAPgQQgVAIgSASQgSARAKAYQAMAYAJAaQAHAagCAdQAAgWgOgbg");
	this.shape_117.setTransform(4,-62.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#DB7979").s().p("Ag8EEQACgJALgMIASgUIAdgpQAPgWASgfIAUghQACgEAEgjQAEghgMgOQgMgFgigTQgggVgXgsQgXgsAVhMQgCABgeA5QgeA6gXBkIgFA4IAAAYQAAAPgFAHQgHAIgLgCQgkAEgfAQQALgKgPgGQgPgFgLACQANgNANAFQANAFAOgBQAZgRgBgkQALg4AOg1IAMgdQANgcAPgcQANgaASgYQAJgLAHgMQAMgUAIgVQADgRAAgSQABAFADADIALAOQAHASgDAVQgDAmACAiQACAiAVAiQAlA3BAgNQAagFAZgJQAfgRAZgbQgBAKgHARQgHATgKADIATADIAXgBQAWAAAVAJIAEAAQgVACgSAIQAVACANATQgdgFgegIQghgFgcAMQgiAIgWAWQgLAbACAhQACAMgCAMQAOAFgPAIQgLALgJANQgWAbgZAZQgPATgQATQgNAXgJAXQgJgIgDgLg");
	this.shape_118.setTransform(-51.2,-22.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BC6868").ss(1,1,1).p("AgIlEQAIgRACgTQgCAAgMAKQgNALgEAEQgGAQgBARQgGA3AaAwQAeA0AKANQAKANgRASQgRAcgWBGQgWBFgHAeQgDAcAHA2QAHA2gBAYQgEAWgFAgQgGAfgCAIQAAAGALAEQALAEABAAIAThGQAGghgHgyQgGgxAAglQAEgmAMgoQALgnABgEQgEgBAVg+QAMgdAKgFQAKgFAAgHQADgGACgOQABgPgmg6QgegqgDg0QgBgPAEgOg");
	this.shape_119.setTransform(-31.4,-24.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D37D7D").s().p("AgvFlQgLgEAAgGIAIgnIAJg2QABgYgHg2QgHg2ADgcQAHgeAWhFQAWhGARgcQARgSgKgNQgKgNgeg0QgagwAGg3QABgRAGgQQAEgEANgLQAMgKACAAQgCATgIARQgEAOABAPQADA0AeAqQAmA6gBAPQgCAOgDAGQAAAHgKAFQgKAFgMAdQgVA+AEABIgMArQgMAogEAmQAAAlAGAxQAHAygGAhIgTBGIgMgEg");
	this.shape_120.setTransform(-31.4,-24.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#DB7979").s().p("AglAdQADhGg6AGQg7AHgxAXQBVgrBYgmQgBgHCIgDQAUAIAQARQAaASAfALQgUgCgUAHQgVAIgFAWQgCAUASAYQAQAWAQAMQhMg3gzBFQgKgHABgOQABgNgTgHQgdgEgOAbQgUAVgbAJQANgiALgig");
	this.shape_121.setTransform(-39.5,-61.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#DB7979").s().p("AhgBjQgKgFgGgJQgDgJgIgFIARAEQAMACAEgEQACgGgLgGIgQgJQAkABAegSQAJgMgUgBQgRgIgEgQQAPAOAXgDQAIAAAHgHQAJgIAKgHQALgBALgFQAJgIAGgLQAKgTgOgRQAcASgOAdQAKAAAFAHQAagGAHgZQABgNgDgLQgCgKgGgIQgGgEgBgHIAJADQAhAUAMAkQAEACgKAZQgLAWhKALQhIALgLASQgMASAEACIAqAnQgCABgcABIgIAAQgXAAgSgGg");
	this.shape_122.setTransform(-66.3,1.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#BC6868").ss(1,1,1).p("AH6lxQABAEADBBQADBBABBKQABBLgEAjQgFAzgUAoQgVAqg9gvQh3hxgygmQADADACAcQACAdgjAqQgmAkgXAPQgYAOgKAOQgCAFgDAvQgEAvALAaQANAaAgAvQAgAwAzATQgIACgrAHQgUADgcAPQgdAOgJAHQgDAEgJgNQgJgOhDgMIgRBTQAAgBgLgBQgPgCg3AVQg1AWgJACQgJACgYgOQgegTgTgsQgSgrgBgGQAEgFAjgsQAigtASgYQAPgWATgeQASgfABgDQACgEAEgiQAEgjgMgNQgMgFgigVQgigUgXgrQgXgsAWhMQgDABgeA6QgeA5gXBkIgKBtQAGgDAtAKQAuAJAYA4QAEADgKAYQgKAYhKAMQhLALgLASQgLASAEACIAqAnQgDABgbABQgcABgVgIQgRgJgHgOQgHgOgbgHQghgFgSgnQgRgnAqhBQAeguAXhFQAXhFAOg4QAOg6AFgNQAFgZAQhSQARhSA8geQBEgYBGggQBGghAFgDQgBgHCIgDQAEADAnAWQAmAXAcANQA3APA2BHQAvBGAQgFQgBgEgQgkQgQgkgSgUQgQgSAIgcQAJgdAUgNQAWgNAogXQAogWAZAAQAbAAAaAPQAaAPgVBEg");
	this.shape_123.setTransform(-35.7,-27.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF8A8A").s().p("AiwHHQgegTgTgsQgSgrgBgGIAngxIA0hFQAPgWATgeIATgiQACgEAEgiQAEgjgMgNQgMgFgigVQgigUgXgrQgXgsAWhMQgDABgeA6QgeA5gXBkIgKBtQAGgDAtAKQAuAJAYA4QAEADgKAYQgKAYhKAMQhLALgLASQgLASAEACIAqAnIgeACQgcABgVgIQgRgJgHgOQgHgOgbgHQghgFgSgnQgRgnAqhBQAeguAXhFQAXhFAOg4QAOg6AFgNIAVhrQARhSA8geQBEgYBGggIBLgkQgBgHCIgDIArAZQAmAXAcANQA3APA2BHQAvBGAQgFIgRgoQgQgkgSgUQgQgSAIgcQAJgdAUgNIA+gkQAogWAZAAQAbAAAaAPQAaAPgVBEIAEBFQADBBABBKQABBLgEAjQgFAzgUAoQgVAqg9gvQh3hxgygmQADADACAcQACAdgjAqQgmAkgXAPQgYAOgKAOQgCAFgDAvQgEAvALAaQANAaAgAvQAgAwAzATQgIACgrAHQgUADgcAPQgdAOgJAHQgDAEgJgNQgJgOhDgMIgRBTQAAgBgLgBQgPgCg3AVQg1AWgJACIgCABQgKAAgVgNg");
	this.shape_124.setTransform(-35.7,-27.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#DB7979").s().p("AAbCxQhEgDgwgkQg9g3gEhRQAEg6AqgrQAUgWAkgcQAjgcAcAAQgLAbgXAVQgXAUgIAfQgGA/AXA1QAPBCA+AcIBzAtIgzABIhNgBg");
	this.shape_125.setTransform(-57,26.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DB7979").s().p("AgfBEQgZgMgbgJQgigHgjgDIgigFQAFgYAogPQApgSAXgIQA2gXAzgFIBwgJIAOAIIAQAIQAHAEAKAAQgRAEgRAGQg9AWgmAlQgQAWgTASQgNAMgRAAQgJAAgLgDg");
	this.shape_126.setTransform(-30.6,11.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#BC6868").ss(1,1,1).p("AGNi6QgeAHgjAcQghAlggBZQggBXgrA7QgvA0gzAVQgzAVgEgBQgFgCg2gMQg3gMgxgCQgxABhMgIQhNgIglgbQgZgUgbg0Qgbg0AbhBQAbhDCGhAIGAglIAeAQQgGABAVAAQAVAAB3gNQAHgBAvgCQAvgBANAVQgCgBgeAHg");
	this.shape_127.setTransform(-29.6,25.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF8A8A").s().p("AAnDWQgFgCg2gMQg3gMgxgCQgxABhMgIQhNgIglgbQgZgUgbg0Qgbg0AbhBQAbhDCGhAIGAglIAeAQQgGABAVAAQAVAAB3gNQAHgBAvgCQAvgBANAVQgCgBgeAHQgeAHgjAcQghAlggBZQggBXgrA7QgvA0gzAVQgyAUgFAAIAAAAg");
	this.shape_128.setTransform(-29.6,25.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EABF9B").s().p("AgoCIIAJgxIARhMQAJgkAEgDIg/gEIhAgGQgGgDAIgTQAJgTAHgEIAbADQAOgEALgJQAtgpAdg1QAXgfAcgGQAbgGAmgHQgcAIgVAZQgmAmgYAxQgNAYgDAaQAGATAZgBQAOABALgDQgMAFgNAVIgWAjQgRAigKAmQgUBQgWBMIAPhmg");
	this.shape_129.setTransform(-13.7,50);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#CB9966").ss(1,1,1).p("ABFoeQAvgGAqAnQAjAsgCAoQgCAngDARQgDAUgaBAQgbBBgPAnQgKAagfBBQgfBAgfBCQgeBDgMAhQgSAqgLAjQgLAjAUAzQAXA1AbAmQAaAmAKALQAHARgZAvQgXAvgxgNQg3gTgzgmQgzgmAlhAQAHAFAUhmQAEgpAJh1QAJh2ARiAQARiCAchRIh/gLQgCgDAIgpQAHgqAtgtQAsguBqgOQAEgEAvgGg");
	this.shape_130.setTransform(-7.6,80.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F4D3B0").s().p("Ag2IdQg3gTgzgmQgzgmAlhAQAHAFAUhmIANieQAJh2ARiAQARiCAchRIh/gLQgCgDAIgpQAHgqAtgtQAsguBqgOQAEgEAvgGQAvgGAqAnQAjAsgCAoQgCAngDARQgDAUgaBAQgbBBgPAnQgKAagfBBIg+CCQgeBDgMAhQgSAqgLAjQgLAjAUAzQAXA1AbAmQAaAmAKALQAHARgZAvQgSAlgiAAQgJAAgLgDg");
	this.shape_131.setTransform(-7.6,80.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EABF9B").s().p("AB4DKQgwhIgihFQgQgbgggaQgigZgZgRQgcgXgwgjQgxgigiABQAFgDAKgOIAPgUQASgTAXgOQAUgLAUgEQAVgFAQgRIAigqQAqgoA4gHQgaAbgcAaQgRAVgIAZQgKAdAbAQQAuA3AWBHQAkBhAmBgQAVArAgAuQAhAuALAtQg9gwgwhIg");
	this.shape_132.setTransform(5,38.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#CB9966").ss(1,1,1).p("Aj4nVQAFgBAmAGQAmAGAWAXQAQAbAGAgQAFAhADAOQAEAOAfBgQAgBhAsBzQAqBxAqBFQA6BaAdAYQAdAYAvASQA3AWA1AGQA1AHAPgBQAIAFgYAoQgYAngFAGQgCgCgngCQgmgCgwANQgyAPg1gMQg0gLgFg1QABg0gHgSQgHgSgRgdQgTgegrgmQgtglg9hHQg9hLgjg5Qgjg6AAgDQgHgIg/g4Qg+g5glgPQgTgJASg3QASg3Arg5QArg4A5gO");
	this.shape_133.setTransform(33.2,53.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F4D3B0").s().p("ACQHRQg0gLgFg1QABg0gHgSQgHgSgRgdQgTgegrgmQgtglg9hHQg9hLgjg5Qgjg6AAgDQgHgIg/g4Qg+g5glgPQgTgJASg3QASg3Arg5QArg4A5gOIADgCQAFgBAmAGQAmAGAWAXQAQAbAGAgQAFAhADAOIAjBuQAgBhAsBzQAqBxAqBFQA6BaAdAYQAdAYAvASQA3AWA1AGQA1AHAPgBQAIAFgYAoIgdAtQgCgCgngCQgmgCgwANQgcAIgdAAQgXAAgXgFg");
	this.shape_134.setTransform(33.2,53.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E56161").s().p("AgGAXQgMgHgKgJQgKgHgJgJIgDgFIABgIIADgIIADgKIArAgIArAdQAAgJAGgCQADAEgBAFQAAALgCALQgdgEgagOg");
	this.shape_135.setTransform(-21.3,129.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#C10C09").ss(1,1,1).p("ADSBCQgQgKhGguQhFgsgVgVQgNgSgNgSQgLgSgBgBQgEgEgmAPQgnAQgcBTIhYg/QgBACgGAaQgHAbAGAfIAHAdQAAAAgBgDQABACAOAJQANAJAKAEQAIAAgFgNQgFgOABgHQAGgCAbAYQAbAZAWAJQAcAGBVAHQBXAGArgEQAigHAMgPQAMgPgHgHg");
	this.shape_136.setTransform(-5.5,131.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F96262").s().p("AAdBsQhVgHgcgGQgWgJgbgZQgbgYgGACQgBAHAFAOQAFANgIAAQgKgEgNgJIgPgLIABADIgHgdQgGgfAHgbQAGgaABgCIBYA/QAchTAngQQAmgPAEAEIAMATIAaAkQAVAVBFAsIBWA4QAHAHgMAPQgMAPgiAHQgRACgZAAQgkAAg0gEg");
	this.shape_137.setTransform(-5.5,131.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3DA83D").s().p("ABRBZQiJgBhsgUQhsgTgWgGQgtgQAHgFQABgFACgcQACgMAPgDQAQgEAJgJIAUgeIALgTIIhAqIAtBZQhvAuiFAAIgJAAg");
	this.shape_138.setTransform(-37.1,43.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3DA83D").s().p("Aj8D2QgbgRgDgMQgCgMABgBQAAgIghhyQgihwhBh7QgDgBgDgPQgDgPAagOQABgDBegWQBegXCvgEQCtgED1A1IAfAKQABAAAFAGQAEAGgHANQgTAUgoBzQgTAphjA7QhjA7hfAtIhkAwQgJAEhMAQQgsAKgfAAQgXAAgQgFg");
	this.shape_139.setTransform(-43.4,15.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#3F9E3F").ss(1,1,1).p("AGXg6IBQEYIgHAxQgCAFhiAlQhjAkivAHQitAHjnhSQgBgEgWhOQgXhPgjhlQgjhiglhJQgwhiATgaQATgZAGADQAGgECQgaQCQgbDPgBQDRAADJBIQADgBAPALQAOALgWAmQgbAtgQA6QgQA7AAAFg");
	this.shape_140.setTransform(-44.3,21.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#74C174").s().p("AkqEZIgXhSQgXhPgjhlQgjhiglhJQgwhiATgaQATgZAGADQAGgECQgaQCQgbDPgBQDRAADJBIQADgBAPALQAOALgWAmQgbAtgQA6QgQA7AAAFIBQEYIgHAxQgCAFhiAlQhjAkivAHIgcABQijAAjVhMg");
	this.shape_141.setTransform(-44.3,21.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#705B47").ss(1,1,1).p("AFmi2QgCADhLgDQhKgCh4gjQhNgagagqQgcgqgOgkQgNgjgfgHQgvgGgFAEQgEAEADABQABgBABAhQACAhgSBKQgPA2g1BvQg0Btg+BvQg+BwgsA3QgDABgFAJQgFAJAbAOQATAMBmAeQBlAeDBAPQC/APEkgjQACACAHAAQAHgBgNgTQgMgVgZhwQgahvgUh9QgUh7ADg7g");
	this.shape_142.setTransform(-45.3,-55.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#604F40").s().p("AgcGXQjBgPhlgeQhmgegTgMQgbgOAFgJQAFgJADgBQAsg3A+hwQA+hvA0htQA1hvAPg2QAShKgCghQgBghgBABQgDgBAEgEQAFgEAvAGQAfAHANAjQAOAkAcAqQAaAqBNAaQB4AjBKACQBLADACgDQgDA7AUB7QAUB9AaBvQAZBwAMAVQANATgHABQgHAAgCgCQjMAYibAAQhEAAg4gEg");
	this.shape_143.setTransform(-45.3,-55.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-27.7,0,27.7,0).s().p("AigHbQgigLglgXQglgXgHgnQgBgdAJgcQBal0Bgl2QAOhTA4ABQA1ACA0AeQA0AfAEAEQAMDwAxDpIAqDgQAJAnALAzQAKAygRAlQgZAjg3AOQg3AOgpAFQgiAEgjAAQhbAAhagggABiHNQAdAAAagKQAdgDAagHQAcgSgJglQgJglgHgZQgNhEgKhFQgYifgTieQgPh7gOh8Qg8AHg2gDQgzgDgEgBQgaB+gcB9QgmCngnCnIgbB4IgNAsIgBAGQgCAhAoAKQBGAdBMAFQAmACAkgCQAgABAhAFg");
	this.shape_144.setTransform(-40.9,96.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.573,1],-27.1,0,27.2,0).s().p("AgDBlQh0gGhLghQhLgggBgpQAFgrBOgZQBOgaByAFQByAGBMAhQBLAgABApQgFArhOAaQhCAVhdAAIgggBgAiUgpQhAAKgDAVQABATA+ARQA9ARBdAFQBdAEA/gLQA/gLADgVQgBgTg+gRQg+gQhdgFIgugBQg/AAgtAIg");
	this.shape_145.setTransform(-41.1,136.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.573,1],-20.4,0,20.5,0).s().p("AgBBBQhXgFg5gVQg5gVgBgaQADgbA7gQQA7gQBVAEQBXAFA5AVQA5AVAAAZQgDAcg7APQgwANhDAAIgcAAgAhxghQgvAGgCAOQABANAuAJQAvALBFAEQBGADAwgHQAvgGADgOQgCgLgugLQgvgLhGgEIgpgBQgrAAghAFg");
	this.shape_146.setTransform(-40.3,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-148,188.1,295);


(lib.girl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BC6868").ss(1,1,1).p("AgMAOQABgFAJgQQAHgSAIAk");
	this.shape.setTransform(10.5,-31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8A8A").s().p("AgCgHQAHgSAIAkIgZADQABgFAJgQg");
	this.shape_1.setTransform(10.5,-31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#604F40").s().p("AAAgMQAmgEADADQALgFADgFQgDAJgDACQANgFADgHQgHARgHACQgzgRgiAWQgWAQgIAJQAegjAigCg");
	this.shape_2.setTransform(-15,-100.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EABF9B").s().p("AAOgbQAqANADAIQg7gNgfAWQgWATgFAIQAihFAmAMg");
	this.shape_3.setTransform(-15.8,-101);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#604F40").s().p("AA5AQQgcgXhOACIgNgKQgLgKgEgKIAKALQAJALAKAFQgEgDgDgRQACAHAIAKQAGgDAuAGQAtAEAaAoQgHgHgOgNg");
	this.shape_4.setTransform(-41.7,-103.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EABF9B").s().p("AArAJQgbgahRADQAGgJAzgMQAwgLAaBTQgFgIgSgUg");
	this.shape_5.setTransform(-40.2,-103.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgkgOQACgBAZAEQAXADAXAX");
	this.shape_6.setTransform(-38.8,-103.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAAQABgFAIAAQAJAAABAFQgBAFgJABQgIgBgBgFg");
	this.shape_7.setTransform(-40.5,-102.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLgPIAXATQAAADgQAJg");
	this.shape_8.setTransform(-38.3,-99.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.3,1,1).p("AAaAAQgDAXgXADQgWgCgDgYQADgWAWgDQAXADADAWg");
	this.shape_9.setTransform(-39.7,-101.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#65C165").s().p("AgZAAQADgWAWgDQAXADACAWQgCAXgXADQgWgCgDgYg");
	this.shape_10.setTransform(-39.7,-101.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.3,1,1).p("AAlAAQgDAjgiADQgggDgEgjQAEghAggDQAiADADAhg");
	this.shape_11.setTransform(-39.7,-101.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#23A723").s().p("AgkAAQAEghAggEQAiAEADAhQgDAigiAEQgggEgEgig");
	this.shape_12.setTransform(-39.7,-101.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABBAOQACgFgYgbQgYgehJAHIgKADQgBADADAYQADAXAPAQQAaAaAngRQAsgTAAgEg");
	this.shape_13.setTransform(-39.9,-100.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsAcQgPgQgDgXIgCgbIAKgDQBJgHAYAeQAYAbgCAFQAAAEgsATQgQAGgMAAQgVAAgQgPg");
	this.shape_14.setTransform(-39.9,-100.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EABF9B").s().p("AguAfQgPgSgDgZQgDgaAAgDIALgEQBMgHAZAgQAZAegCAGQABAEgvAUQgRAHgNAAQgWAAgQgQg");
	this.shape_15.setTransform(-40.2,-100);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAAQABgEAIgBQAJABABAEQgBAGgJAAQgIAAgBgGg");
	this.shape_16.setTransform(-16.5,-100.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLgOIAXASQAAADgQAIg");
	this.shape_17.setTransform(-14.2,-97.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.3,1,1).p("AAZAAQgCAXgXACQgWgCgCgXQACgWAWgCQAXACACAWg");
	this.shape_18.setTransform(-15.7,-99.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#65C165").s().p("AgYAAQACgWAWgCQAXACACAWQgCAXgXACQgWgCgCgXg");
	this.shape_19.setTransform(-15.7,-99.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.3,1,1).p("AAlAAQgDAigiADQgggDgEgiQAEggAggEQAiAEADAgg");
	this.shape_20.setTransform(-15.7,-99.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#23A723").s().p("AgkAAQAEghAggDQAhADAEAhQgEAhghAEQgggEgEghg");
	this.shape_21.setTransform(-15.7,-99.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CB9966").ss(0.5,1,1).p("Ag7AIQgBgFAbgaQAagbBDAOQAAADgGAfQgFAcgMAMQghAQg/gug");
	this.shape_22.setTransform(-16.1,-98);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag7AIQgBgFAbgaQAagbBDAOIgGAiQgFAcgMAMQgJAEgKAAQgdAAgwgig");
	this.shape_23.setTransform(-16.1,-98);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EABF9B").s().p("AgDAqQgdgJgfgYQgBgGAcgcQAdgeBHAPIgGAlQgGAfgNANQgIAFgLAAQgLAAgMgEg");
	this.shape_24.setTransform(-15.7,-97.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7A644E").s().p("AgOBGQgbgRgLgNQgSgWgPghQgQgkAFgcIAjA7QANAYAXAMQALADAEgHIACgEIACgOQABgMABgBQAQANAUARQAVASAVgTQANgPgCgdQgCgcgLgRIAHAIQAUAagBAlQgBAjgNAdQgMAbgXgUQgQgKgBAEIgIAQQgGAHgIAAQgKAAgOgKg");
	this.shape_25.setTransform(-9.2,-120);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7A644E").s().p("AiQBJQgaghAGgoQAFgmAdgdIAbgUQgfAeAJAoQAWApAmgDQAlgEAjgPQAjgJAfgTQAUgRAXgMQAEAOATgLIAbgRQgEARgOANIgCADIgMAOIgGAFQgTASgVAQQglAdgqATQgWANgZgBQgGgIgLAAQgNAFgOAHQgPAHgNAAQgSAAgQgPg");
	this.shape_26.setTransform(-48.1,-123.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#705B47").ss(1,1,1).p("AhiB2QgHgIgOhJQgOhIA1gsQA9gkA2gCQA3gCAhAcQgGgEg3gKQg3gJgkAsQgeAugOAlQgOAogLBBg");
	this.shape_27.setTransform(-14.8,-135.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7A644E").s().p("Ah3AlQgOhIA1gsQA9gkA2gCQA3gCAhAcQgGgEg3gKQg3gJgkAsQgeAugOAlQgOAogLBBQgHgIgOhJg");
	this.shape_28.setTransform(-14.8,-135.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#705B47").ss(1,1,1).p("AFMgoQgDApgSA5QgTA5gCAYQgDAVgSAKQgSAJgDAAQAAgJgrhWQgrhUhYg/QgEgBg9APQg8AQhGAtQhHAvgfBeQgGAoAFAoQgMgQgBgOQAAgOgGgQQgJgOgUgEQgVgFgOAIQABgEgCgsQgBgtgKgqQgUg2ANg6QALghAagiQAagjAegSQAngXAtAAQAqgDAlAQQAlAQBYBUQACgFAxgcQAwgdBJAHQBFAOATAoQATAogCAog");
	this.shape_29.setTransform(-32.9,-117.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#604F40").s().p("AjtDLQAAgOgGgQQgJgOgUgEQgVgFgOAIIgBgwQgBgtgKgqQgUg2ANg6QALghAagiQAagjAegSQAngXAtAAQAqgDAlAQQAlAQBYBUQACgFAxgcQAwgdBJAHQBFAOATAoQATAogCAoQgDApgSA5QgTA5gCAYQgDAVgSAKQgSAJgDAAQAAgJgrhWQgrhUhYg/QgEgBg9APQg8AQhGAtQhHAvgfBeQgGAoAFAoQgMgQgBgOg");
	this.shape_30.setTransform(-32.9,-117.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4D3B0").s().p("AgrAFIAugdQAGACAcAOQAbAMgjgBQgngCgTAMQgRAKgCACg");
	this.shape_31.setTransform(-16.1,-102.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F4D3B0").s().p("AgZgFQgpgEgDADIAVgZQAvACAiAUQAjATACADIgTATQglgigngDg");
	this.shape_32.setTransform(-41.2,-107.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#CB9966").ss(1,1,1).p("AgMgJQAIgBARAV");
	this.shape_33.setTransform(-59.4,-97.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4D3B0").s().p("AgMgJQAIgBARAVg");
	this.shape_34.setTransform(-59.4,-97.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#CB9966").ss(1,1,1).p("AgTANQALgcAcAE");
	this.shape_35.setTransform(-4.3,-95.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4D3B0").s().p("AAUgLIgnAYQAMgcAbAEg");
	this.shape_36.setTransform(-4.3,-95.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#CB9966").ss(1,1,1).p("AgagWQASgTAWADQAYACAAAgQgFAVgaAPQgZAPgTgQ");
	this.shape_37.setTransform(-4.4,-96.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4D3B0").s().p("AglAfIALg1QASgTAWADQAYACAAAgQgFAVgaAPQgLAHgMAAQgLAAgKgIg");
	this.shape_38.setTransform(-4.4,-96.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#B77070").ss(0.3,1,1).p("ABJAIQgDAEgrAEQgqAFg5gl");
	this.shape_39.setTransform(-29,-80.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#B77070").ss(0.3,1,1).p("AAuALQABAJgNAGQgRAGgcgFQgegFgHggIgKgFQACgBAQgCQAQgDAJgEQANgFAIAFQAKABAHgBQAEABAJAKQAJAKAOADIgQADQABAAACAJg");
	this.shape_40.setTransform(-28.3,-79.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FF9999","#000000"],[0,1],-1.8,0,28.8,0.1).s().p("AgLAbQgegFgHggIgKgFIASgDQAQgDAJgEQANgFAIAFQAKABAHgBQAEABAJAKQAJAKAOADIgQADQABAAACAJQABAJgNAGQgJADgOAAQgLAAgLgCg");
	this.shape_41.setTransform(-28.3,-79.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CB9966").ss(0.5,1,1).p("AARg5QgBACgHARQgCAFgBAEQgEALABAKIAAAMQABAAAMAGQALAGABAQQABAeg5gF");
	this.shape_42.setTransform(-24.5,-91.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4D3B0").s().p("AgcArIAihWQgEALABAKIAAAOIANAGQALAEABAQQABAagqAAIgPgBg");
	this.shape_43.setTransform(-24.5,-89.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#705B47").ss(1,1,1).p("AA0AeQAEgDgRgWQgRgVhKgNg");
	this.shape_44.setTransform(-39,-109.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7A644E").s().p("Ag0gdQBKANARAVQARAWgEADg");
	this.shape_45.setTransform(-39,-109.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#705B47").ss(1,1,1).p("AgsARQgBgDARgOQARgPA4gBg");
	this.shape_46.setTransform(-17.8,-106.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7A644E").s().p("AgcAAQARgPA4gBIhZAhQgBgDARgOg");
	this.shape_47.setTransform(-17.8,-106.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EABF9B").s().p("ABFDBQAsg7AGhHIAFgxQADgWgQgUQgfgfgoAIQAigJAJgfQAAgYgXgSIgpggQgtgmg7gPQgggDgigHQAhgCAagPQBcgrBGBGQBKBGAHBaQAGBYgjBbQgQAygfApQgeAkgpAPQAkggAdgmg");
	this.shape_48.setTransform(-22.1,-100.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#CB9966").ss(1,1,1).p("AkWgTQgIABADAiQAGApBJADQgCAEATA0QATA0A4AzQA3AzBqACQBEgCA2gnQA2gnAZhBQAjhbAAhVQgBhWhBhQQgrg1hEgDQgeAGgcAFQgKAAhEAVQhFAWhMA1QhLA1geBcg");
	this.shape_49.setTransform(-35.2,-99.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4D3B0").s().p("AhwDbQg4g0gTgzQgTg0ACgEQhJgDgGgpQgDgiAIgCQAehcBLg0QBMg1BFgWQBEgVAKAAIA6gLQBEADArA0QBBBRABBWQAABVgjBbQgZBBg2AmQg2AohEACQhqgCg3gzg");
	this.shape_50.setTransform(-35.2,-99.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E56161").s().p("AgJATQAlgUAKgoQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBABIATgLIgSAJIAlgUQgHAagWATQgQARgTAOQgSAQgXANIgmAWQAggVAegYg");
	this.shape_51.setTransform(78.2,93.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E56161").s().p("ABBAVIgpgEIgngDIgTgCQgSgEgSgBQgPgGgQgBQApAFAsAAQATACAUgDQANgEgEgGQgFgHgHgIQAKAFAKAIIATAIIAUAJQAMACALAEQgIAHgSAAIgLgBg");
	this.shape_52.setTransform(3.4,135.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#999999").ss(1,1,1).p("AAQAAQgCAOgOACQgNgCgCgOQACgNANgCQAOACACANg");
	this.shape_53.setTransform(-69.5,7.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAAQACgNANgCQAOACACANQgCAOgOACQgNgCgCgOg");
	this.shape_54.setTransform(-69.5,7.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#CB9966").ss(1,1,1).p("AAAAUIABgn");
	this.shape_55.setTransform(-37.9,-71.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DB7979").s().p("AgbAwQgjgQgbAMQAWgMAdACQAcACAUgKQAsgiAkguQgOA3gmArQgSALgSAAQgNAAgQgHg");
	this.shape_56.setTransform(-19.6,18.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BC6868").ss(1,1,1).p("AAgADQAAgBgUgCQgTgDgYAD");
	this.shape_57.setTransform(-73.2,-10.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CB9966").ss(1,1,1).p("AAPgUQgDgBgOAJQgQAKAGAX");
	this.shape_58.setTransform(-20.8,120.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EABF9B").s().p("AgSABQAIgcAdgCQgUACABAYQAAAWAQALQgbgCgHgbg");
	this.shape_59.setTransform(-20.5,121.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#C10C09").ss(1,1,1).p("AihAQIABgQQgBgHAZgwQAYgwA9gIIAoA3QAEAEArAjQAuAiAnAWIApAbQABACgHANQgHANgVAKQgZAIgygBQgxgBgSgB");
	this.shape_60.setTransform(0.2,131.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F96262").s().p("AA1BvQgxgBgSgBIiThdIABgQQgBgHAZgwQAYgwA9gIIAoA3IAvAnQAuAiAnAWIApAbQABACgHANQgHANgVAKQgWAIgqAAIgLgBg");
	this.shape_61.setTransform(0.2,131.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CB9966").ss(1,1,1).p("AgMgXQgDADgCAVQgCAXAlAA");
	this.shape_62.setTransform(49.9,92);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EABF9B").s().p("AgaAQQgLgaAYgUIgDAGQgGAWAPAOQARAJAUAGQgMAEgLAAQgSAAgPgPg");
	this.shape_63.setTransform(50.8,91.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E56161").s().p("Ag4AcQAbgYAggMQAigOAdgVQADAMgDALQgHAEgJAEIgnAQIgpAVIgUAJIgRAKQADgKAIgGg");
	this.shape_64.setTransform(58.2,104.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#C10C09").ss(1,1,1).p("ADMiUQgLgQgpASQgpAWgLAGQgLAGACAAQgBAFhUAFQhHgEgBgFQgCAGgIAlQgIAnAFAgQgGACgwAaQgwAagWARQgOAOAGAIQAGAHADAFQADAIAMASQAMATACACQAGAHAygUQABABADgDQAEgEgMgRQgVgfAHAGIAFgBQAGgBAdgGQAbgFAGgCQAHgDArgNQAvgTAzgvQAygxAQgRQAPgOAWgWQAWgWACgCQACgEgLgPg");
	this.shape_65.setTransform(72.8,99.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F96262").s().p("AitCbIgOgVQgMgSgDgIIgJgMQgGgIAOgOQAWgRAwgaIA2gcQgFggAIgnIAKgrQABAFBHAEQBUgFABgFIAJgGIA0gcQApgSALAQQALAPgCAEIgYAYIglAkQgQARgyAxQgzAvgvATIgyAQQgGACgbAFIgjAHIgFABQgHgGAVAfQAMARgEAEQgDADgBgBQglAPgNAAQgEAAgCgCg");
	this.shape_66.setTransform(72.8,99.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BC6868").ss(1,1,1).p("AgmgFQAHgHBGAT");
	this.shape_67.setTransform(-30,-24.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BC6868").ss(1,1,1).p("AhCAJQADgCArgHQAogIAvAA");
	this.shape_68.setTransform(-34.7,-25.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BC6868").ss(1,1,1).p("AgDAYQAGgCABgt");
	this.shape_69.setTransform(-54.8,-45.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BC6868").ss(1,1,1).p("AAIAsQgCgCgGgTQgFgSgCgMQAHgeADgF");
	this.shape_70.setTransform(-11.7,-43.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BC6868").ss(1,1,1).p("AAsgIQgGgHhRAZ");
	this.shape_71.setTransform(-69.2,-9.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CCCCCC").s().p("AgBAeQgCgMgGgVQgGgXgOgBQAdgFAVAQQACAFAEASQADAUgBACIgVABIgJAAg");
	this.shape_72.setTransform(-57.7,2.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#999999").ss(1,1,1).p("ABbAIQgHgBg6AJQg3AJgYAdQgGABgVgIQgWgIAcgfQAegfASgPQARgPAlAAQApgBAMALQALALgBAog");
	this.shape_73.setTransform(-63.8,4.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhQAvQgWgIAcgfQAegfASgPQARgPAlAAQApgBAMALQALALgBAoQgHgBg6AJQg3AJgYAdIgCAAQgGAAgTgHg");
	this.shape_74.setTransform(-63.8,4.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#CB9966").ss(1,1,1).p("AAAAbQAAgCAAgTQAAgSAAgO");
	this.shape_75.setTransform(-54.4,27.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EABF9B").s().p("AAAgBQgVgUgQgVQAmgGAWAiQARAagDAgQgVgVgQgYg");
	this.shape_76.setTransform(-56.3,8.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EABF9B").s().p("AgRAbQgXgHAAgPQABgMACgVQADAYAVAHQAFAMASAGQATAHAMABIgWAAQgTAAgRgCg");
	this.shape_77.setTransform(-49.9,28.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EABF9B").s().p("AgbABQANgOAOgIQgMATANADQARAFAPgGQgTAVgaABQgdgEAOgRg");
	this.shape_78.setTransform(-77.8,29.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EABF9B").s().p("AgWAQQgfgCAIgOQAIgLAXgFQgHACALAEQAKAFAFAAQAWgCAVgJQgRAhglAAIgQgBg");
	this.shape_79.setTransform(-71,38.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EABF9B").s().p("AgKAhIAUgQQAKgLgIgXQgJgYgCgNQAcAbgFAnQgFAWgRADQgPADgLAPQAAgLAOgLg");
	this.shape_80.setTransform(-61.4,35.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#CB9966").ss(1,1,1).p("ABWimQgfg1hAApQgEAAgdAVQgdAVgKAqQgFAoABATQABASgQALQgSAMgNAQQgLAPgCADQABgDgWAIQgPAIgCAOQgDAOAWAEQAXgBARgPQARgQAGgFQAHgFATgMQASgMACgCQgCAEgNAgQgNAhgCAYQAAATgHABQgHAAgOADQgQAHgEALQgEALAfACQAmAEAegVQANgZADgeQAFgOAKgRQAJgQACgCQAAACAHASQAHATAEARQADAjgDAEQgBABgQANQgNAMgKALQgKANAQAHQANAIA6gbIAVgMQAAgFAAgzQgBgnAGgHQAAABAOAJQAOAJAeAAQAcgDAGgKQAHgJgCgCQABAAgEgEQgEgDgXgEQgXgGgFgSQgFgSABgCQAAgGgKhBQgJhBgQggg");
	this.shape_81.setTransform(-62.6,23.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F4D3B0").s().p("AgLDDQgQgHAKgNQAKgLANgMIARgOQADgEgDgjIgLgkIgHgUIgLASQgKARgFAOQgDAegNAZQgeAVgmgEQgfgCAEgLQAEgLAQgHIAVgDQAHgBAAgTQACgYANghIAPgkIgUAOIgaARIgXAVQgRAPgXABQgWgEADgOQACgOAPgIQAWgIgBADIANgSQANgQASgMQAQgLgBgSQgBgTAFgoQAKgqAdgVQAdgVAEAAQBAgpAfA1QAQAgAJBBQAKBBAAAGQgBACAFASQAFASAXAGQAXAEAEADQABABABABQABABAAAAQAAABAAAAQAAAAAAAAQACACgHAJQgGAKgcADQgeAAgOgJQgOgJAAgBQgGAHABAnIAAA4IgVAMQgtAVgSAAQgFAAgDgCg");
	this.shape_82.setTransform(-62.6,23.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BC6868").ss(1,1,1).p("AASAAQgIACgbgC");
	this.shape_83.setTransform(-74.6,7.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BC6868").ss(1,1,1).p("AAGAWQABgCAAgPQABgOgOgM");
	this.shape_84.setTransform(-62,-3.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BC6868").ss(1,1,1).p("AAWADQgCACgQADQgOACgLgR");
	this.shape_85.setTransform(-71.2,2.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CCCCCC").s().p("AAIgNQAIgXgDgEQALAIAFAZIAFAbQgkgBgfAWQAYgaARgcg");
	this.shape_86.setTransform(-26.4,-66.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CCCCCC").s().p("AAIAWQgggVgUAiQgBgTAGgZQAGgbASgIIAWgHIgCAkQAWAhASAiQgPgSgWgMg");
	this.shape_87.setTransform(-38.6,-67.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#999999").ss(1,1,1).p("AA+BSQgGgFgUgRQgagWgYgGQgtAAgEADQAEgFAbghQAcgkAJgRQAKgbgGgBQABgCAKAPQALAPAJA4QAIA1AIARQAEAJACADQACAEAAgB");
	this.shape_88.setTransform(-26.2,-62.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAlA9QgagVgYgGQgtgBgEAEIAfgmQAcgkAJgSQAKgagGgBQABgCAKAPQALAPAJA2QAIA3AIARIAGAMIgagXg");
	this.shape_89.setTransform(-26.3,-62.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#999999").ss(1,1,1).p("AAKhjIgDAkQAIgDA2BzIgxgLQAFgIgtAdQgtAkgDAFQABgJAMg0QALg2AHgZQAEgSACgPQACgOAQgFg");
	this.shape_90.setTransform(-38.8,-63);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag3AnQALg2AHgZIAGghQACgOARgFIAWgHIgDAkQAIgDA2BzIgxgLQAGgIguAdQgtAkgDAFIANg9g");
	this.shape_91.setTransform(-38.8,-63);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DB7979").s().p("AgxgJQgJgJgLgJQgGgCgEgFQgMgTgBgYQgBgKAEgLQACgGAEgFIAIgLQgEAmAcAkQAcAkAXAaQAXAdAbAZQAOALAKANQAHAQAMALQhMg8hChGg");
	this.shape_92.setTransform(-3.1,-35.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DB7979").s().p("Ag7EEQABgJAMgMIASgUIAdgpQAPgWASgfIAUghQACgEAEgiQAEgjgMgMQgMgFgigUQgggVgXgrQgXgtAWhMQgDABgeA6QgdA5gYBkIgFA4IAAAYQAAAPgFAHQgHAIgLgBQgkADgfAQQALgKgPgGQgPgFgLACQANgNANAFQANAEAOgBQAZgQgBglQALg3APg1QAEgOAHgPQANgdAPgbQANgaASgYQAJgLAHgNQANgTAIgVQADgRAAgSQABAFADADQAGAGAEAHQAIATgDAWQgDAlACAiQABAiAVAiQAlA4BBgNQAZgGAZgJQAfgRAagaQgCAIgHATQgHATgJACIASADIAXgBQAWABAVAIIACAAQgTADgSAHQAVADANATQgdgFgdgJQghgFgdAMQgiAIgWAWQgKAbABAhQACAMgCAMQAOAFgPAIQgLALgJANQgWAagZAaQgPATgQAUQgNAWgJAXQgJgIgDgLg");
	this.shape_93.setTransform(-50.1,-22.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BC6868").ss(1,1,1).p("AgIlEQAIgRACgTQgCAAgLAKQgOAKgDAFQgGAQgBARQgHA3AbAwQAdA0AKANQAKANgRASQgRAcgWBGQgWBFgHAeQgDAbAHA3QAHA2gCAYQgEAWgFAgQgFAfgCAIQAAAFAKAFQALAEACAAIAThGQAFghgGgyQgGgxAAglQADgmANgoQALgnABgEQgEgBAVg+QANgdAJgFQAKgFAAgHQAEgGABgOQACgPgng6QgdgqgEg0QAAgPADgOg");
	this.shape_94.setTransform(-30.1,-24.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D37D7D").s().p("AgwFlQgKgFAAgFIAHgnIAJg2QACgYgHg2QgHg3ADgbQAHgeAWhFQAWhGARgcQARgSgKgNQgKgNgdg0QgbgwAHg3QABgRAGgQQADgFAOgKQALgKACAAQgCATgIARQgDAOAAAPQAEA0AdAqQAnA6gCAPQgBAOgEAGQAAAHgKAFQgJAFgNAdQgVA+AEABIgMArQgNAogDAmQAAAlAGAxQAGAygFAhIgTBGIgNgEg");
	this.shape_95.setTransform(-30.1,-24.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EABF9B").s().p("Ag9gFIADgkIBxAHQAAAEADAeQAEAhgBAIIAAABQg/gSg7gdg");
	this.shape_96.setTransform(-31.6,-70.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#CB9966").ss(1,1,1).p("AA6hKIh0gHQAAADgCAZQgCAagBAEQgBAmAVASQAUATATAeQAZgVASgOQASgOAHgfQABgHgEghQgDggAAgEg");
	this.shape_97.setTransform(-31.6,-67);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F4D3B0").s().p("AgrAhQgVgSABgmIADgeIACgcIB0AHIADAkQAEAhgBAHQgHAfgSAOIgrAjQgTgegUgTg");
	this.shape_98.setTransform(-31.6,-67);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#DB7979").s().p("AglAdQADhGg6AGQg7AGgxAXQBVgqBYgnQgBgGCIgDQAUAIAQARQAbASAeALQgUgCgUAHQgVAIgFAWQgCAUASAYQARAXAPAMQhMg5gzBGQgKgHABgOQABgNgTgHQgdgEgOAbQgUAUgcAKQAOgiALgig");
	this.shape_99.setTransform(-38.2,-61.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#DB7979").s().p("AhgBiQgKgEgGgJQgDgJgIgFIARADQAMACAEgDQACgGgLgHIgQgJQAkACAegSQAJgMgUgCQgRgHgEgRQAPAOAXgCQAIAAAHgHQAJgJALgGQAKgBALgGQAJgHAGgLQAKgTgNgRQAbASgOAdQAKAAAFAHQAbgGAGgZQABgNgCgLQgDgKgGgIQgGgEgBgHQAFABAFACQAhAUALAkQAEADgKAYQgLAWhKALQhIALgLASQgMASAEACIAqAnQgDABgbABIgGAAQgYAAgTgHg");
	this.shape_100.setTransform(-65.1,1.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BC6868").ss(1,1,1).p("AHfhHQgEgFgJgNQgKgOgEgFQgTgXgTgYQgKgNgIgMQgtg8gnhBQg2hHg3gPQgcgNgmgWQgngXgEgCQiIACABAHQgFADhGAgQhGAhhEAYQg8AegRBSQgRBRgEAZQgFANgOA6QgPA6gXBDQgWBFgfAuQgqBBARAnQARAnAhAGQAcAGAHAOQAHAOAQAKQAWAIAbgBQAcgCACAAIgpgoQgEgCALgSQALgSBLgKQBKgMAKgYQAKgYgEgDQgYg4gugKQgtgJgFADIAJhtQAYhkAeg6QAeg5ACgBQgVBMAWAsQAXAsAiATQAiAVAMAFQANANgFAjQgEAigBAEQgCADgSAeQgSAfgQAWQgSAYgiAtQgjAsgEAFQABAFASAsQASArAeAUQAZAOAJgCQAJgCA1gWQA3gVANACQAMABACACIAQhTQBDAMAJANQAJANADgDQAJgHAcgPQAdgOAUgEQArgGAIgDQgzgSgggwQgggwgNgZQgKgbADgvQAEgvABgFQALgOAXgOQAXgPAngkQAjgpgCgeQgCgcgDgCQAyAmB3BxQAcAYAkgF");
	this.shape_101.setTransform(-36.9,-25.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF8A8A").s().p("AiaG4QgegUgSgrQgSgsgBgFIAngxIA0hFQAQgWASgfIAUghQABgEAEgiQAFgjgNgNQgMgFgigVQgigTgXgsQgWgsAVhMQgCABgeA5QgeA6gYBkIgJBtQAFgDAtAJQAuAKAYA4QAEADgKAYQgKAYhKAMQhLAKgLASQgLASAEACIApAoIgeACQgbABgWgIQgQgKgHgOQgHgOgcgGQghgGgRgnQgRgnAqhBQAfguAWhFQAXhDAPg6QAOg6AFgNIAVhqQARhSA8geQBEgYBGghIBLgjQgBgHCIgCIArAZQAmAWAcANQA3APA2BHQAnBBAtA8IASAZIAmAvIAOATIANASIANBvQgkAFgcgYQh3hxgygmQADACACAcQACAegjApQgnAkgXAPQgXAOgLAOQgBAFgEAvQgDAvAKAbQANAZAgAwQAgAwAzASQgIADgrAGQgUAEgdAOQgcAPgJAHQgDADgJgNQgJgNhDgMIgQBTQgCgCgMgBQgNgCg3AVQg1AWgJACIgCAAQgJAAgXgMg");
	this.shape_102.setTransform(-36.9,-25.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#DB7979").s().p("AAbCxQhEgDgvglQg+g2gEhSQAEg5ArgrQAUgWAjgcQAkgcAbAAQgLAbgWAVQgYAUgIAeQgGBAAXA1QAQBCA9AdIBzAtIgtAAIhTgBg");
	this.shape_103.setTransform(-56,26.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DB7979").s().p("AgeBEIg2gVQgggHgjgDIgigFQAEgYApgPIBAgaQA1gXA0gFIBvgIIAPAIIAPAIQAIADAIABQgQAEgQAGQg+AVglAmQgRAWgTARQgMALgRAAQgJAAgLgCg");
	this.shape_104.setTransform(-29.5,11.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BC6868").ss(1,1,1).p("AGNi6QgeAHgjAdQggAkghBZQggBXgrA7QgwA0gyAVQgzAVgEgBQgFgCg2gMQg4gMgwgCQgxABhNgIQhMgIglgcQgZgUgbg0Qgbg0AbhBQAbhDCHhAIF/gkIAeAQQgGABAVAAQAVAAB4gMQAGgCAvgBQAvgCANAVQgCgBgeAHg");
	this.shape_105.setTransform(-28.5,26.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF8A8A").s().p("AAnDWIg7gOQg4gMgwgCQgxABhNgIQhMgIglgcQgZgUgbg0Qgbg0AbhBQAbhDCHhAIF/gkIAeAQQgGABAVAAQAVAAB4gMQAGgCAvgBQAvgCANAVQgCgBgeAHQgeAHgjAdQggAkghBZQggBXgrA7QgwA0gyAVQgxAUgGAAIAAAAg");
	this.shape_106.setTransform(-28.5,26.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EABF9B").s().p("AgpCIIAKgwIARhNQAJgkAEgCIg/gGIhAgFQgGgDAIgTQAJgTAHgEIAbADQAOgEALgJQAtgpAeg1QAXgfAbgGQAbgGAmgHQgcAJgVAYQgmAngYAwQgNAYgCAZQAFAUAZAAQAOAAAMgDQgNAEgNAVIgWAkQgRAigKAmQgUBQgWBMIAOhmg");
	this.shape_107.setTransform(-12.6,50.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#CB9966").ss(1,1,1).p("ABGoeQAvgGApAnQAjAtgCAnQgBAogDAQQgDAUgbBBQgbBAgPAnQgKAagfBBQgfBAggBCQgdBDgNAhQgSAqgLAjQgKAjATAzQAXA1AcAmQAZAmAKALQAHARgZAvQgXAvgxgNQg3gTgzgnQgzgmAlhAQAHAGAUhmQAFgpAJh2QAJh1ARiAQARiDAdhQIiAgLQgCgDAIgqQAIgpAsguQAtgtBqgPQAEgEAvgFg");
	this.shape_108.setTransform(-6.5,80.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F4D3B0").s().p("Ag3IdQg3gTgzgnQgzgmAlhAQAHAGAUhmQAFgpAJh2QAJh1ARiAQARiDAdhQIiAgLQgCgDAIgqQAIgpAsguQAtgtBqgPQAEgEAvgFQAvgGApAnQAjAtgCAnQgBAogDAQQgDAUgbBBQgbBAgPAnQgKAagfBBIg/CCQgdBDgNAhQgSAqgLAjQgKAjATAzQAXA1AcAmQAZAmAKALQAHARgZAvQgRAlgjAAQgJAAgLgDg");
	this.shape_109.setTransform(-6.5,80.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EABF9B").s().p("AB4DKQgwhIgihFQgQgbgfgaIg7grQgcgWgxgkQgwgigjABQAGgCAKgOIAPgVQASgTAWgOQAVgKAUgFQAUgEARgRIAigqQApgpA5gGQgaAbgcAaQgRAUgIAaQgKAcAaAQQAvA4AWBGQAjBiAmBhQAVAqAgAuQAgAuAMAtQg9gwgwhIg");
	this.shape_110.setTransform(6.1,38.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#CB9966").ss(1,1,1).p("Aj2nVQAEgBAmAGQAmAGAWAXQARAaAFAhQAFAhADAOQAEANAfBhQAfBgAsB0QAqBxAqBFQA6BaAdAYQAdAYAvASQA2AWA2AHQA1AGAPAAQAIAFgYAnQgZAogEAFQgCgBgngCQgmgCgwAMQgyAPg1gLQg1gLgEg2QABg0gHgSQgHgSgRgdQgSgegsgmQgtglg9hHQg9hMgjg4Qgig6gBgEQgGgHg/g5Qg+g4glgQQgTgJASg3QASg3Asg5QArg4A4gN");
	this.shape_111.setTransform(34.2,53.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F4D3B0").s().p("ACQHSQg1gLgEg2QABg0gHgSQgHgSgRgdQgSgegsgmQgtglg9hHQg9hMgjg4Qgig6gBgEQgGgHg/g5Qg+g4glgQQgTgJASg3QASg3Asg5QArg4A4gNIAEgCQAEgBAmAGQAmAGAWAXQARAaAFAhQAFAhADAOIAjBuQAfBgAsB0QAqBxAqBFQA6BaAdAYQAdAYAvASQA2AWA2AHQA1AGAPAAQAIAFgYAnQgZAogEAFQgCgBgngCQgmgCgwAMQgdAIgdAAQgWAAgXgEg");
	this.shape_112.setTransform(34.2,53.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E56161").s().p("AgGAXQgMgHgKgKQgKgGgJgJIgDgFIABgIIADgIIADgKIArAgIArAdQAAgKAGgBQADAEgBAGQAAALgCAKQgdgFgagNg");
	this.shape_113.setTransform(-20.3,129.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#C10C09").ss(1,1,1).p("ADSBDQgQgLhGguQhFgsgVgVQgNgSgNgSQgLgSgBgBQgDgEgnAPQgmAQgdBTIhXg/QgCABgGAbQgHAaAGAgQAGAdABAAQAAgBgBgCQABABANAKQANAJALADQAIABgFgOQgFgNABgHQAGgCAbAYQAaAZAWAJQAdAGBVAHQBXAHArgFQAigHAMgOQAMgPgHgHg");
	this.shape_114.setTransform(-4.5,131.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F96262").s().p("AAdBsQhVgHgdgGQgWgJgagZQgbgYgGACQgBAHAFANQAFAOgIgBQgLgDgNgJIgOgLIABADIgHgdQgGggAHgaQAGgbACgBIBXA/QAdhTAmgQQAngPADAEIAMATIAaAkQAVAVBFAsIBWA5QAHAHgMAPQgMAOgiAHQgRACgXAAQglAAg1gEg");
	this.shape_115.setTransform(-4.5,131.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3DA83D").s().p("ABRBZQiJgChsgTQhsgUgWgGQgtgQAHgFQACgEABgdQACgMAPgDQAQgDAJgKIAUgdIAMgTIIgArIAtBYQhvAuiGAAIgIAAg");
	this.shape_116.setTransform(-36,43.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3DA83D").s().p("Aj8D2QgbgRgDgMQgDgNABAAQAAgIghhyQghhwhBh7QgDgBgDgPQgDgPAagOQABgDBegXQBegWCvgEQCtgDD1A1IAfAKQABAAAFAGQAEAGgHANQgTAVgoByQgTAphkA7QhjA6hfAuIhkAwQgJADhMARQgrAJgfAAQgXAAgQgFg");
	this.shape_117.setTransform(-42.2,15.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#3F9E3F").ss(1,1,1).p("AGXg5IBPEYIgHAwQgBAFhjAlQhiAkivAHQitAHjnhTQgBgEgXhOQgWhPgjhlQgjhjglhIQgwhiATgaQATgaAHAEQAGgECQgaQCQgaDOgBQDRAADJBIQAEgBAOALQAPAMgXAmQgaAsgQA7QgRA6AAAGg");
	this.shape_118.setTransform(-43.2,22);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#74C174").s().p("AkqEYIgYhSQgWhPgjhlQgjhjglhIQgwhiATgaQATgaAHAEQAGgECQgaQCQgaDOgBQDRAADJBIQAEgBAOALQAPAMgXAmQgaAsgQA7QgRA6AAAGIBPEYIgHAwQgBAFhjAlQhiAkivAHIgcABQijAAjVhNg");
	this.shape_119.setTransform(-43.2,22);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D6D6D6").s().p("AiygLQAxAMA4AHIAlADIAfABQAZAAAagDIAHgBIAIgBQAsgFA7gMIAPgEQgLAFgOADQg3AMgpAFQghAEgfAAQhYAAhUgag");
	this.shape_120.setTransform(-36.8,145.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-23.1,0,23.2,0).s().p("ADgFvQgIgkgIgaQgNhEgKhFQgXifgTieQgPh7gNh7Qg8AGg2gDIg3gEQgaB+gdB9IhNFOIgcB4IgMAsIgBAGIAAAJQgDgGAAgIIABgFIAMgsIAdh4IAIgkIBEkhIADgMQAdh8Abh9IA1ADIAMABIAfAAIAbAAIAkgDIAMgBIACAPIAVC2IAFAzQATCdAYCgQAKBFAOBEQAHAZAJAlQADAPgCALQgCAHgFAGQAGgPgFgUg");
	this.shape_121.setTransform(-39.7,98.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-28.1,0,28.2,0).s().p("AgFH7IgggDQg0gHgvgOIgagIQgjgLgmgXQgmgXgHgnQgBgdAJgcQBdl1Bil2QAPhTA4ABQA2ABA1AfQA1AfADAEQADB4ATB3QATB4AVB0QAUBwAWBwIAUBaQALAygSAkQgWAegsAPIgPAFQg4AOgqAFIgHABIgHAAQgaADgbAAgABjHNQAeABAagKQAagDAXgGIAHgCQAIgFAEgFQAGgIACgKQADgMgEgPQgJgkgHgaQgNhEgLhFQgXifgTieIgGgzIgVi2IgBgNIAAgBIAAAAIgNABIgkACIgaABIgfgBIgKAAIg5gEIAAACIAAAAQgbB9gdB9IgCAKIhEEgIgIAkIgcB4IgNAsIgBAFIAAABQgBALAEAIQAEAHAGAFQAJAIARAEQAYAKAaAHQAvAOAzADQAmADAlgCQAhAAAhAFg");
	this.shape_122.setTransform(-39.9,96);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.573,1],-27.4,0,27.5,0).s().p("AgDBoQh1gHhMghQhMgigBgqQAFgtBPgZQBPgaBzAFQB0AHBMAhQBMAhABArQgFAshPAaQhDAWheAAIgggBgAiWgrQhAALgDAWQABATA/ASQA+AQBdAGQBeAEBAgLQBAgLADgVQgBgUg/gRQg+gShfgFIgvgBQg/AAguAIg");
	this.shape_123.setTransform(-40.3,135.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.573,1],-21.3,0,21.4,0).s().p("AgCBFQhagFg8gXQg7gWgBgcQAEgeA9gRQA9gQBZAEQBbAFA7AXQA7AWABAcQgEAeg9AQQgyAOhGAAIgegBgAh1gkQgyAHgCAOQABAOAwAKQAxAMBIAEQBJADAxgHQAygGADgOQgCgNgwgMQgwgMhKgEIgrgBQgtAAghAFg");
	this.shape_124.setTransform(-38.9,101.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D6D6D6").s().p("AgCBBQhXgGg5gUQg4gWgBgaQADgbA7gPQA7gQBVADQBXAGA5AUQA5AWAAAaQgDAbg7APQgvANhEAAIgdAAgAhxghQgvAGgCANQABANAuAKQAvAKBFAEQBGADAwgGQAvgGADgNQgCgMgugLQgvgLhGgEIgpgBQgrAAghAFg");
	this.shape_125.setTransform(-39.3,101.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#705B47").ss(1,1,1).p("AF1mQQgvAehIgFQhIgFgygOQhBgPg9gQQgQgGgbgFQgbgGgUAFQgUAHAAARQgBARgMANQgEABgSABQgRABACAEQACAAABAgQABAhgSBKQgPA3g1BvQg0Bsg/BwQg+BvgsA3QgDABgFAJQgFAJAbAOQATAMBlAeQBmAfDBAPQC+APElgiQACABAHAAQAHAAgNgUQgPgVgGgfQgGgfgFgZQgXhlgShnQgrjmAcjrQABgKACgLg");
	this.shape_126.setTransform(-47.4,-58.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#604F40").s().p("AgcG0QjBgPhmgfQhlgegTgMQgbgOAFgJQAFgJADgBQAsg3A+hvQA/hwA0hsQA1hvAPg3QAShKgBghQgBgggCAAQgCgEARgBIAWgCQAMgNABgRQAAgRAUgHQAUgFAbAGQAbAFAQAGQA9AQBBAPQAyAOBIAFQBIAFAvgeIgDAVQgcDrArDmQASBnAXBlIALA4QAGAfAPAVQANAUgHAAQgHAAgCgBQjLAXibAAQhEAAg5gEg");
	this.shape_127.setTransform(-47.4,-58.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#BC6868").ss(1,1,1).p("AAAgLQAAgCABABQACACgDAY");
	this.shape_128.setTransform(47.4,-49.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#BC6868").ss(1,1,1).p("AAXAAQgCAAgPgDQgNgEgPAM");
	this.shape_129.setTransform(40.9,-54.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#5A9E5A").ss(1,1,1).p("ABHgdQgDAGgLAZQgCAEgCADQgKARgJgUQALgIAIALQABACABABQAIASgIAMQgLAKgQgFQgDAMgSAFQgKABgIgGQgIAHgOgCQgPgFgGgQQAAgBAAgBQgGgTATgFQAPAAgKAPQgHALgLAAQgEgBgFgCQgNgMAKgPQABgDACgBQgBgBgCAAQgCgRAQgHQADgBACAAQANgDAFALQgUAFABgJQAAgCABgCQACgIAHgHQAXgKACgWAg/AJQAJgJAQAAQAAAEAAAEQgNAEgMgDgAAcAvQgBgBgBAAQgRgHgDgOQAWgEABASQAAAEgBAEgAgLA7QgEgDgEgFQgJgOARgMQAMAOgHAOQgCAEgDACg");
	this.shape_130.setTransform(72.4,-38.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#5A9E5A").ss(1,1,1).p("AATi+QAAAGgFBVQgFBVgJBZQgGBagMAa");
	this.shape_131.setTransform(77.9,-64.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#80AF80").s().p("AATi+IgFBbQgFBVgJBZQgGBagMAag");
	this.shape_132.setTransform(77.9,-64.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#5A9E5A").ss(1,1,1).p("AAiivQABACABARQACARgGAKQgMAHgWAMQgTARgGAnQgGAZgCAyQgCA1AEAZQAGASAMAEQAMADABAXIABAc");
	this.shape_133.setTransform(73.9,-64.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#CB9966").ss(1,1,1).p("AgggzQACAGAAAAQACAAATAMQASAMARAVQAWAugIAEQAAACgHgBQgHAAgUgSQgZgWgWAF");
	this.shape_134.setTransform(65.6,-55.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F4D3B0").s().p("AAhAzQgHAAgUgSQgZgWgWAFIAJhDIACAGIAVAMQASAMARAVQAWAugIAEQAAABAAAAQAAAAgBAAQAAAAgBAAQgBABgBAAIgDgBg");
	this.shape_135.setTransform(65.6,-55.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#80AF80").s().p("Ag8CnQgegdAGgsQAoAEAOAmQgSgIgUACQAGAfAfAJQAgAIAXgWQAMgagSgcQgRgcgBgaIAFg5QgBgiAHggQAKgZAbgKQAegPgGglQgHgWAKgMIADAAIAHAuQAFAogWAGQgTgCgPAMQgSAIgBB6QgDAbAJAZQAPAMANAHQADAPgCAQQADA0gsAHQgogBgdgdg");
	this.shape_136.setTransform(71.2,-64.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#5A9E5A").ss(1,1,1).p("ABJjHQgFgFgtAFQgrAFgcBCQgZBMgJBZQgIBaAWAmQAfAlAvAAQAsgHgDg0QACgQgDgPQgNgHgPgMQgJgZADgbQABh6ASgIQAPgMATACQALABAEgSQADgTgFg3QADABgMgKg");
	this.shape_137.setTransform(71.1,-64.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#87C187").s().p("AhEClQgWgmAIhaQAJhZAZhMQAchCArgFQAtgFAFAFQAMAKgDgBQAFA3gDATQgEASgLgBQgTgCgPAMQgSAIgBB6QgDAbAJAZQAPAMANAHQADAPgCAQQADA0gsAHQgvAAgfglg");
	this.shape_138.setTransform(71.1,-64.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#CB9966").ss(1,1,1).p("ABah8QgBAEgKAhQgLAhgPAZQgOAXAFARQAEAUACABQABAAAUAMQATAMARAWQAWAvgIAEQABABgHAAQgHAAgVgSQgVgSgSAAQgRABgVAFQgVAEgcgHQgcgHgTgPQglgeAAgZQADgDAegbQAdgcASgIQAmgHAaghQAaglAigGg");
	this.shape_139.setTransform(57.4,-63.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F4D3B0").s().p("ABXBwQgVgSgSAAQgRABgVAFQgVAEgcgHQgcgHgTgPQglgeAAgZIAhgeQAdgcASgIQAmgHAaghQAaglAigGIAJAFIgLAlQgLAhgPAZQgOAXAFARQAEAUACABIAVAMQATAMARAWQAWAvgIAEQABABgHAAQgHAAgVgSg");
	this.shape_140.setTransform(57.4,-63.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#80AF80").s().p("AAMDVIg2gFQgHADgDgXQAKhWAGhXQAGhBAHhCQABgKAGgjQAHgjAJgOQAFgFAGAGQAIAMgDAaIgGAoIgFB5QgIAygGA1QgDAYAMATQAKAMAOABQAPABAKAKQAHAKgEALQgEALACALQABABgFAFQgEAEgSAAIgMAAg");
	this.shape_141.setTransform(78,-61.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#5A9E5A").ss(1,1,1).p("AgTjMQgCgCAHgPQAIgQAggCIAdACQAAgEAEAEQAEAEACA5QABAugFBZQgGBXgHBSQgHBRgEAVQACABgFAFQgFAGgdgCQg2gEgBgBQgHAEgDgYQACgPAIhXQAHhXAKhdQAKhgAJgpg");
	this.shape_142.setTransform(79.2,-64.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#87C187").s().p("AAADwQg2gEgBgBQgHAEgDgYIAKhmQAHhXAKhdQAKhgAJgpQgCgCAHgPQAIgQAggCIAdACQAAgEAEAEQAEAEACA5QABAugFBZQgGBXgHBSQgHBRgEAVQACABgFAFQgEAEgTAAIgLAAg");
	this.shape_143.setTransform(79.2,-64.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCCCCC").s().p("AgaAFQANgYAXgNQACARAQAIIgXASQgPAQAEAGQgNgMgHgQg");
	this.shape_144.setTransform(44.3,-58.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#999999").ss(1,1,1).p("AgbgyQgCADAKAPQAKARBLASQgCAFg5ApQAAAEgRgEQgTgFgkg4QgEgEAqgig");
	this.shape_145.setTransform(48.1,-56.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgKAxQgTgFgkg4QgEgEAqgiQgCADAKAPQAKARBLASQgCAFg5ApQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgNgCg");
	this.shape_146.setTransform(48.1,-56.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#DB7979").s().p("AB9AkQgLgQgOgNQgNAIgFAQQgEAQgNALIgDggQgBgPgQgJQgbgLgcADQAJgTAUAEQgSgNgXgGQgYgGgQAWQgNAYgRAUQgTATgZAPQASgNAPgaQAPgZAEgWQAHgYAegIQAcgIATAKQAuAWAsAbQASAMASAXQARAYgKAXQgBgQgHgRg");
	this.shape_147.setTransform(40.2,-53.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#BC6868").ss(1,1,1).p("ADYhvQgNgWgpgVQgpgVgXgMQgVgKgdAJQgdAIgGAXQgIAhgbAgQgeAhgXAYQgiAngkAmQgWAUgcAbQgcAagHAfQgEA4AzgKQAzgKAjgRQAfgPA+gqQA8gqA1glQA1gkADgCQBFgUgCgeQgCgdgOgXg");
	this.shape_148.setTransform(30.3,-40.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF8A8A").s().p("AjmCSQAHgfAcgaIAygvQAkgmAignIA1g5QAbggAIghQAGgXAdgIQAdgJAVAKIBAAhQApAVANAWQAOAXACAdQACAehFAUIg4AmIhxBPQg+AqgfAPQgjARgzAKIgOABQgkAAADgvg");
	this.shape_149.setTransform(30.3,-40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-148.1,190.3,295.4);


(lib.girl_phone = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5A9E5A").ss(1,1,1).p("ABHgdQgDAGgLAZQgCAEgCADQABACABABQAIASgIAMQgLAKgQgFQgBgBgBAAQgRgHgDgOQAWgEABASQAAAEgBAEQgDAMgSAFQgKABgIgGQgIAHgOgCQgPgFgGgQQgEgBgFgCQgNgMAKgPQABgDACgBQgBgBgCAAQgCgRAQgHQADgBACAAQANgDAFALQgUAFABgJQAAgCABgCQACgIAHgHQAXgKACgWAA1AJQgKARgJgUQALgIAIALgAg/AJQAJgJAQAAQAAAEAAAEQgNAEgMgDgAgLA7QgEgDgEgFQgJgOARgMQAMAOgHAOQgCAEgDACgAg2ArQAAgBAAgBQgGgTATgFQAPAAgKAPQgHALgLAAg");
	this.shape.setTransform(-1.2,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5A9E5A").ss(1,1,1).p("AATi+QAAAGgFBVQgFBVgJBZQgGBagMAa");
	this.shape_1.setTransform(4.3,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80AF80").s().p("AATi+IgFBbQgFBVgJBZQgGBagMAag");
	this.shape_2.setTransform(4.3,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5A9E5A").ss(1,1,1).p("AAiivQABACABARQACARgGAKQgMAHgWAMQgTARgGAnQgGAZgCAzQgCA0AEAaQAGASAMADQAMADABAYIABAc");
	this.shape_3.setTransform(0.3,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#80AF80").s().p("Ag/CnQgNgMgGgQIAOAAQAIAYAaAHQAiAIAWgWQALgagRgcQgQgcgDgaIAFg5QgBgiAIggQAJgZAbgKQAfgPgGglQgHgWAKgMIADAAIAGAuQAFAogWAGQgTgCgOAMQgTAIgBB6QgDAbAJAZQAPAMAOAHQADAPgDAQQADA0grAHQgogBgegdg");
	this.shape_4.setTransform(-2.1,-4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5A9E5A").ss(1,1,1).p("ABJjHQgFgFgtAFQgrAFgcBCQgZBMgJBZQgIBaAWAmQAfAlAvAAQAsgHgDg0QACgQgDgPQgNgHgPgMQgJgZADgbQABh6ASgIQAPgMATACQALABAEgSQADgTgFg3QADABgMgKg");
	this.shape_5.setTransform(-2.5,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#87C187").s().p("AhEClQgWgmAIhaQAJhZAZhMQAchCArgFQAtgFAFAFQAMAKgDgBQAFA3gDATQgEASgLgBQgTgCgPAMQgSAIgBB6QgDAbAJAZQAPAMANAHQADAPgCAQQADA0gsAHQgvAAgfglg");
	this.shape_6.setTransform(-2.5,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#80AF80").s().p("AAMDVIg2gFQgHADgDgXQAKhWAGhXQAGhBAHhCQABgKAGgjQAHgjAJgOQAFgFAGAGQAIAMgDAaIgGAoIgFB5QgIAygGA1QgDAYAMATQAKAMAOABQAPABAKAKQAHAKgEALQgEALACALQABABgFAFQgEAEgSAAIgMAAg");
	this.shape_7.setTransform(4.4,-1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5A9E5A").ss(1,1,1).p("AgTjMQgCgCAHgPQAIgQAggCIAdACQAAgEAEAEQAEAEACA5QABAugFBZQgGBXgHBSQgHBRgEAVQACABgFAFQgFAGgdgCQg2gEgBgBQgHAEgDgYQACgPAIhXQAHhXAKhdQAKhgAJgpg");
	this.shape_8.setTransform(5.6,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#87C187").s().p("AAADwQg2gEgBgBQgHAEgDgYIAKhmQAHhXAKhdQAKhgAJgpQgCgCAHgPQAIgQAggCIAdACQAAgEAEAEQAEAEACA5QABAugFBZQgGBXgHBSQgHBRgEAVQACABgFAFQgEAEgTAAIgLAAg");
	this.shape_9.setTransform(5.6,-4.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-29.3,25.3,58.7);


(lib.girl_eyes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABKASQgFgTgUgTQgoglhGALIgMAEIADAfQAGAfAOANQAcAaAugQQAjgMAPgNg");
	this.shape.setTransform(-13.3,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4D3B0").s().p("AgyAhQgOgNgGgfIgDgfIAMgEQBGgLAoAlQAUATAFATQgPANgjAMQgSAGgOAAQgZAAgRgQg");
	this.shape_1.setTransform(-13.3,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABEgpQgIBIgSANQgPAKgegKQghgKgfgZIAGgKQAKgOANgLQAoghBCASg");
	this.shape_2.setTransform(13.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4D3B0").s().p("AgDAsQghgKgfgZIAGgKQAKgOANgLQAoghBCASQgIBIgSANQgIAFgMAAQgLAAgOgFg");
	this.shape_3.setTransform(13.8,1.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.7,-7.4,43.3,14.8);


(lib.frog_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABug2QAfgMATAPQASAPgGAhQgGAfgaAgQgbAhggAMQgfAMgSgQQgTgPAGghQAGghAbgeQAaggAggMgAhRhnQAggMASAPQASAPgGAhQgFAhgbAeQgaAhggAMQggAMgSgQQgSgPAGghQAGgfAaggQAaggAggMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AAgBlQgTgPAGghQAGghAbgeQAaggAggMQAfgMATAPQASAPgGAhQgGAfgaAgQgbAhggAMQgNAFgLAAQgPAAgKgJgAifA0QgSgPAGghQAGgfAaggQAaggAggMQAggMASAPQASAPgGAhQgFAhgbAeQgaAhggAMQgOAFgLAAQgOAAgLgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},90).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.boy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAAQACgJARgBQASABACAJQgCALgSAAQgRgBgCgKg");
	this.shape.setTransform(2.5,-180.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAHIAtgiIgMA3QghgPAAgGg");
	this.shape_1.setTransform(-1.9,-174.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgxAAQAFApAsAEQAugEAEgpQgEgogugEQgsAEgFAog");
	this.shape_2.setTransform(0.9,-177.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A5C9FF").s().p("AgxAAQAFgoAsgEQAuAEAEAoQgEApguAEQgsgEgFgpg");
	this.shape_3.setTransform(0.9,-177.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5885C6").ss(0.3,1,1).p("AhHAAQAGA8BBAGQBCgGAGg8QgGg7hCgGQhBAGgGA7g");
	this.shape_4.setTransform(0.9,-177.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#74AAFF").s().p("AhHAAQAGg7BBgGQBCAGAGA7QgGA8hCAGQhBgGgGg8g");
	this.shape_5.setTransform(0.9,-177.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EABF9B").s().p("AgRAUQgQgRgBgSQAOAOAbABQAcABgHgZQADAHADASQADATgJADQgIACgKAAQgLAAgQgFg");
	this.shape_6.setTransform(-68.9,-6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EABF9B").s().p("AgVAWQgSgOACgUQAIANAUABQATAAAOgEQAGgLgBgPQADAIAFAUQAFAXgMACQgJAEgLAAQgNAAgSgHg");
	this.shape_7.setTransform(-60.3,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EABF9B").s().p("AgKAZQgegMAEghQAQAKAZAEQAcAFADgZQADAagEAZQAAACgLAAQgMAAgWgCg");
	this.shape_8.setTransform(-53,-4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EABF9B").s().p("AgYAXQgQgRAAgTQAGAAAhAFQAgAGACghQAKAJgDAaQgDAYgMAIQgKAEgJAAQgQAAgOgNg");
	this.shape_9.setTransform(-43.1,-4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CB9966").ss(1,1,1).p("AAUghQgPgRgWADQgZALAIAfQACAdASATQAaAKATgHQAIgDgCgYQgCgVgBgDg");
	this.shape_10.setTransform(-69.2,-8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4D3B0").s().p("AgOArQgSgTgCgdQgIgfAZgLQAWgDAPARIAOAcIADAYQACAYgIADQgIADgKAAQgNAAgOgGg");
	this.shape_11.setTransform(-69.2,-8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CB9966").ss(1,1,1).p("AAWglQgRgUgZAEQgcAMAJAjQACAhAUAWQAeALAWgIQAIgEgCgaQgCgYgBgEg");
	this.shape_12.setTransform(-60.8,-7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4D3B0").s().p("AgRAxQgUgWgCghQgJgjAdgMQAYgEARAUIAQAfIAEAcQABAagIAEQgJADgLAAQgPAAgRgGg");
	this.shape_13.setTransform(-60.8,-7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CB9966").ss(1,1,1).p("AAbgvQgvgUgOAXQgMAYAIAVQADANACARQACASAWAGQAtAFAAgFQACgGAEgpQAEgogTgPg");
	this.shape_14.setTransform(-53.1,-7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4D3B0").s().p("AgJA3QgWgGgCgSQgCgRgDgNQgIgVAMgYQAOgXAvAUQATAPgEAoQgEApgCAGQAAACgMAAQgMAAgVgCg");
	this.shape_15.setTransform(-53.1,-7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CB9966").ss(1,1,1).p("AAhhAQgNgPgpAPQgjASANApQAJArATAWQATATAdgKQAMgHACgZQACgZgDgMQgBgJgBgWQAAgWgLgLg");
	this.shape_16.setTransform(-44,-8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4D3B0").s().p("AgPA8QgTgWgJgrQgNgpAjgSQApgPANAPQALALAAAWIACAfQADAMgCAZQgCAZgMAHQgJAEgJAAQgQAAgOgNg");
	this.shape_17.setTransform(-44,-8.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CB9966").ss(1,1,1).p("Ag0ApQARgaAdgPQASgJARgMQANgJALgK");
	this.shape_18.setTransform(44.2,-158);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4D3B0").s().p("AADgJQAVgJARgNIhRA/QAQgaAbgPg");
	this.shape_19.setTransform(43,-157);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CB9966").ss(1,1,1).p("AA2AoQgBgCgggcQgegZgsgY");
	this.shape_20.setTransform(-67.4,-48.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CB9966").ss(1,1,1).p("AhQAcQADgEAygYQAwgaA8gB");
	this.shape_21.setTransform(33.8,-190.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4D3B0").s().p("AgbAAQAwgaA8gBIihA3QADgEAygYg");
	this.shape_22.setTransform(33.8,-190.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CB9966").ss(1,1,1).p("ABfhQQgyABg7AcQg9AbgGAFQgCAAgIAWQgHAXALAnQAKAfAWgaQAWgbA8AN");
	this.shape_23.setTransform(35.6,-179.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EABF9B").s().p("AAhBlQACgbgbACQgVgCgSAKIgXAPQgOAJgKgKQgGgGgCgJQgEgWACgWQACgGAGgNQAFgMgBgFQgag0AIgJQgLgcATgbQASgaAbgJQgJAiAUAZQgZASAHAWQAGAVATAVIACAAQgWAqAmAeQAXAQAagGIA3gLIgZAVQAAADAHANQAHAMAAAHQgGARgTABQgSAAgMALQABgZgBgXg");
	this.shape_24.setTransform(35.2,-181.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CB9966").ss(1,1,1).p("ABQDBQAwgoAPgtQAKgwgPg2QgQg0gVgMQgsgPgHABQACgDgBgYQgBgYgggIQABgIgZgjQgbgjg+AiQgFACgbAfQgbAgALAjQgJAJAaA2QAAADgHAJQgIAJAEAJQANAHARABQAXAIAVAOQAHAJANAAQANAAAKAE");
	this.shape_25.setTransform(40.1,-180.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4D3B0").s().p("AgUA9QgKgEgNAAQgNAAgHgJQgVgOgXgIQgRgBgNgHQgEgJAIgJQAHgJAAgDQgag2AJgJQgLgjAbggQAbgfAFgCQA+giAbAjQAZAjgBAIQAgAIABAYQABAYgCADQAHgBAsAPQAVAMAQA0QAPA2gKAwQgPAtgwAog");
	this.shape_26.setTransform(40.1,-180.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C95050").ss(1,1,1).p("AAzjyQgEgdgMgBQgKgFgGgEQgHgEgbAEQg2ACgIALQgGAMADAcQAEAcABARQAAAOAGBZQAGBXAKBlQAJBkALAvQgBACACANQACANARABQArgGAHgGQACAAAOgGQAOgGAJgNQAIgTgDhvQgEhugLhyQgKhpgFgeg");
	this.shape_27.setTransform(30.3,-187.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6666").s().p("AggEOQgCgNABgCQgLgvgJhkQgKhlgGhXQgGhZAAgOQgBgRgEgcQgDgcAGgMQAIgLA2gCQAbgEAHAEIAQAJQAMABAEAdQAFAeAKBpQALByAEBuQADBvgIATQgJANgOAGIgQAGQgHAGgrAGQgRgBgCgNg");
	this.shape_28.setTransform(30.3,-187.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#CB9966").ss(1,1,1).p("ABwGaQAcAAAcgCQBQgCBJgUQBJgTA6g9QAzg+g8hGQg8hGhwhAQhxg/hqguQhpgtgpgOQgjgMgigRQgVgMgVgMQgMgIgNgDQAUgRALgSQAHgVABgYQAGgYgHgWQgNgNgPgKQgLgNgDgSQADgigdgDQgUABgRALQgeAMgbAPQgnAbgjAiQgaAUgQAcQgHAlAGAoQgCAoAWAfQANAMAQAIQAaAMAaANQAcARAeANQA2AVAwAeQCCBhB7Bo");
	this.shape_29.setTransform(70.5,-141.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4D3B0").s().p("AArDWQh7hniChhQgwgfg2gVQgegNgcgRIg0gZQgQgHgNgNQgWgfACgoQgGgnAHgmQAQgbAagVQAjgiAngaQAbgQAegLQARgMAUgBQAdADgDAiQADASALANQAPALANAMQAHAWgGAZQgBAXgHAWQgLARgUARQANADAMAJIAqAXQAiARAjANQApANBpAtQBqAuBxA/QBwBAA8BGQA8BGgzA+Qg6A9hJATQhJAUhQACQgcACgcAAg");
	this.shape_30.setTransform(70.5,-141.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EABF9B").s().p("AgBAmQgcghAJgXQAKgYAbgaQALBEgKBFQgBgKgSgVg");
	this.shape_31.setTransform(69.9,-128.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#C95050").ss(1,1,1).p("AAekrQAAAFgFBRQgEBRgIBvQgIBtgJBdQgLBcgOAb");
	this.shape_32.setTransform(190.3,-116.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6666").s().p("AAekrIgFBWQgEBRgIBvQgIBtgJBdQgLBcgOAag");
	this.shape_33.setTransform(190.3,-116.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D86464").s().p("AATFPQhWgIAAgBQgCAAgHgEQgJgFACgVQARiIAJiJQAJhmALhnQACgRAKg3QAKg3APgWQAIgHAJAJQAOATgGApIgJA/QgFBegDBfQgEAogIAoQgKApgCArQgDAlATAeQAQASAXACQAWADAQAPQAMAQgHARQgGARADARQACACgIAIQgGAGgfAAIgRAAg");
	this.shape_34.setTransform(190.4,-111.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#C95050").ss(1,1,1).p("AgflAQgCgEALgYQAMgYAzgEIAuADQAAgGAGAGQAGAGAEBaQACBIgJCMQgICKgLB/QgLCAgHAhQADACgIAIQgHAIgvgCQhXgHABgBQgDAAgHgFQgIgEACgWQADgXAMiJQAMiJAPiUQAQiWANg/g");
	this.shape_35.setTransform(192.4,-116.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6666").s().p("AAAF5QhWgHAAgBQgCAAgIgFQgIgEACgWQADgXAMiJQAMiJAPiUQAQiWAOg/QgDgEAMgYQALgYAzgEIAuADQAAgGAHAGQAFAGAEBaQACBIgICMQgJCKgLB/QgLCAgGAhQACACgIAIQgFAGggAAIgRAAg");
	this.shape_36.setTransform(192.4,-116.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#C95050").ss(1,1,1).p("AgMB0QgBgEgDg0QgEg0gCg0QgCg2AEgKQAHgSAKAeQAJAeASCy");
	this.shape_37.setTransform(26.2,-223.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6666").s().p("AgQA8QgEg0gCg0QgCg2AEgKQAHgSAKAeQAJAeASCyIgkAEIgEg4g");
	this.shape_38.setTransform(26.2,-223.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AF761B").s().p("AACAFQgDgtgUgeQAFgBAFAAQgDgFAAgGQAIAAAFAEIgHgKIAIAMIAIALQAPAbgBAmQgCA2gWAjQAJgjgFgxg");
	this.shape_39.setTransform(3,-221.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AF761B").s().p("AgMBGQAEgMADgMQAMgWgBg0QgChFgLgcQAbA6ALA+QAAA9ggA0QANgjgBgoQgLAXgMAbQgNAWgEAVQAFgcAMgcg");
	this.shape_40.setTransform(15.6,-209);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AF761B").s().p("AgMAmQgVgugDg2IAMAmQAGAXANAJQAAgcAPgYQASgYAJgaQgFAwgTAsIASgpQgLAqgJAvQgGAZADAYQgIgdgMgcg");
	this.shape_41.setTransform(-20.5,-218.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#8C7A6C").ss(1,1,1).p("ADDgVIgNAFQgwAQg6ADQhDAEgXg8QgcAKgeAFAgPg3QgMADgOAEQgPAEgQAGAC2gQQhIAchoAYQhwAbhYgKQAMgvA9gYQAagLAXgJQgIACgIAB");
	this.shape_42.setTransform(-177,148);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8C7A6C").s().p("Ai8A0QANgvA9gYIAxgUQAdgFAcgKQAYA8BDgEQA6gCAwgRQhJAchoAYQhRAUhGAAQgZAAgYgDg");
	this.shape_43.setTransform(-177.6,148.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#8C7A6C").ss(1,1,1).p("Aj+gbQgNAOgHAVQCHBDCKgoQBDgOBHgRQAhgJAigRQAjgRAkgDQhLAChGANQhGANhLgBQhEgIg9gRQgpgIgVAGQgSAGgeAJQgGACgIADAjDgxQglABgVAUQAAABgBAA");
	this.shape_44.setTransform(-101.7,211.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8C7A6C").s().p("AkSAIQAHgVANgOIAwgPQAVgGApAIQA9ARBEAIQBLABBGgNQBGgNBLgCQgkADgjARQgiARghAJQhHARhDAOQgzAPgzAAQhWAAhVgqgAjDgxIg6AVQAVgUAlgBg");
	this.shape_45.setTransform(-101.7,211.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#64A1AF").ss(1,1,1).p("AhpDjQAAgFAVhQQAVhQAvhnQAthpBNhP");
	this.shape_46.setTransform(-22.9,-95.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AF761B").s().p("AhHAkQgLAPADAQQgHgcAIgbQASghAagdIgFATQAKgNAEgPIABAXQAegbAMgoQAEAsgQApQAbgUAVgZQgDATgPASQgOAQgJAQQAmgMAhgZIgZAsQgNAZgWAMIgwAQQgbAIgCAeQgWgfAEglg");
	this.shape_47.setTransform(20.7,-190.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#64A1AF").ss(1,1,1).p("AAQAAQgBAPgPABQgOgBgBgPQABgOAOgBQAPABABAOg");
	this.shape_48.setTransform(-115.6,131.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#64A1AF").ss(1,1,1).p("AAQAAQgBAPgPABQgOgBgBgPQABgOAOgBQAPABABAOg");
	this.shape_49.setTransform(-55.6,194.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#64A1AF").ss(1,1,1).p("ACMs9QgDABgsANQgsAOgyAPQgzAQgbAIQggANgFAZQgEAZABADIAUAoIgaAbIAaAoIgaA8QAAAIAFCwQAFCxADDyQADD1gFDVQgFDWgUBU");
	this.shape_50.setTransform(-46.9,115.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#64A1AF").ss(1,1,1).p("AMKqeQABAJgRBJQgRBJgrAhQgBgBgOABQgNABgMARQgMASgNgBQgOgBgBgBQgGgBiCgPQiCgQivgUQiugUiJgOQiMgOgZACQgJgBgNAQQgCAXgYACQgMAAACAUQACAUABADQACACgCAMQgCAMgXAHQgXAJACAaQABAbACADQgCAGgpB+QgpB+g7CsQg7Cvg4CYQg5CZghA6QgBADgLAYQgMAYgMAS");
	this.shape_51.setTransform(-46,69.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOAAQACgHAMgBQAOABABAHQgBAIgOABQgMgBgCgIg");
	this.shape_52.setTransform(-23.6,-177.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAGIAhgcIgJAsQgYgMAAgEg");
	this.shape_53.setTransform(-26.9,-172.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgkAAQADAiAhADQAigDADgiQgDghgigDQghADgDAhg");
	this.shape_54.setTransform(-24.8,-175.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,3.8).s().p("AgkAAQADghAhgDQAiADADAhQgDAigiADQghgDgDgig");
	this.shape_55.setTransform(-24.8,-175.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#5885C6").ss(0.3,1,1).p("Ag1AAQAFAxAwAFQAxgFAFgxQgFgwgxgFQgwAFgFAwg");
	this.shape_56.setTransform(-24.7,-175.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,5.4).s().p("Ag1AAQAFgwAwgFQAxAFAFAwQgFAxgxAFQgwgFgFgxg");
	this.shape_57.setTransform(-24.7,-175.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EABF9B").s().p("AgLgRQASgIAVAGQgQACgTAMQgVAKABASQgCgXASgRg");
	this.shape_58.setTransform(23.8,-179.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#CB9966").ss(1,1,1).p("AAagOQgCgCgUACQgTACgKAc");
	this.shape_59.setTransform(23.4,-180.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F4D3B0").s().p("AAEgOQAUgCACACIgzAeQAKgcATgCg");
	this.shape_60.setTransform(23.4,-180.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#AF761B").ss(1,1,1).p("ABNAhQgDgHgtgiQgsgkg9ATQACAAAsAQQAqANBBAdg");
	this.shape_61.setTransform(-4.1,-194);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E8A225").s().p("AgegJIgugQQA9gTAsAkQAtAiADAHQhBgdgqgNg");
	this.shape_62.setTransform(-4.1,-194);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#AF761B").ss(1,1,1).p("AAxgxQgEgHgjAIQghAHgYBfQACgFAggpQAegnAggSg");
	this.shape_63.setTransform(-26.9,-193);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E8A225").s().p("AAKgwQAjgIADAHQgfASgeAnQggApgDAFQAZhfAhgHg");
	this.shape_64.setTransform(-26.9,-193);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABRA4QAFgJgag8Qgag+hxgFQgDAFADA1QACAzAiAlQAhAkBbgug");
	this.shape_65.setTransform(-25.6,-176);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F3F8FF").s().p("AgrBCQgiglgCgzQgDg1ADgFQBxAFAaA+QAaA8gFAJQg0AZgfAAQgbAAgOgPg");
	this.shape_66.setTransform(-25.6,-176);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EABF9B").s().p("AgrBCQgiglgCgzQgDg1ADgFQBxAFAaA+QAaA8gFAJQg0AZgfAAQgbAAgOgPg");
	this.shape_67.setTransform(-25.8,-174.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CB9966").ss(0.5,1,1).p("AA/BAQglArh5gdQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqg");
	this.shape_68.setTransform(0.3,-178.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F3F8FF").s().p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQgWAZgzAAQgkAAgxgLg");
	this.shape_69.setTransform(0.3,-178.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CB9966").ss(1,1,1).p("AgcACQAJgFAwAC");
	this.shape_70.setTransform(-15.4,-162.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F4D3B0").s().p("AAdgBIg5ADQAJgFAwACg");
	this.shape_71.setTransform(-15.4,-162.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EABF9B").s().p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQgWAZgzAAQgkAAgxgLg");
	this.shape_72.setTransform(1.6,-177.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#B77070").ss(0.3,1,1).p("AibgTQAKADAqAKQA1AKBFgQQBIgSA5hWQACADAIAyQAHAxgUA1QgVA3hSATQhPANgfgdQgegdgPgmQgNgigdgPQgEgCAAAA");
	this.shape_73.setTransform(-6.3,-140);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#FF9999","#000000"],[0,1],0.8,6.1,-0.1,-2.2).s().p("AhGBhQgegdgPgmQgNgigdgPQAKADAqAKQA1AKBFgQQBIgSA5hWQACADAIAyQAHAxgUA1QgVA3hSATQgZAEgSAAQgtAAgWgUg");
	this.shape_74.setTransform(-6.1,-140);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#CB9966").ss(1,1,1).p("AAoh4QgBAHgCAeQgCAkgCAMQgGAKgaATQgXAQgDACQgHAEgHAnQgGAmBOAc");
	this.shape_75.setTransform(-20.4,-160.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F4D3B0").s().p("AgnA3QAHgnAHgEIAagSQAagTAGgKQACgMACgkIADglIgHDxQhOgcAGgmg");
	this.shape_76.setTransform(-20.4,-160.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AF761B").s().p("AAAAiQgOgYgLgZQgMgPgGgSQAWAUAWASQABgKgGgWQgIgVgIgIIAkAdQgLgUgHgUIAUAQQALACAHAJQAMArgGAsIgBAaQgBATADAGQgYgYgTgZg");
	this.shape_77.setTransform(-38.7,-188);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AF761B").s().p("AgLATQgUgwgUgZQAXAYATAbIAbAfQAVAYANgEQgNAHgLAAQgaAAgNgkg");
	this.shape_78.setTransform(-35.5,-206);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#AF761B").s().p("AAiBTIgRgGQgOgKgIgOQgihAgHhMQACASALAPIAfA7QAXArAaAoIgNgFg");
	this.shape_79.setTransform(-28.2,-210.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#6AAFBA").ss(1,1,1).p("AgphLQBHBNAIAlQAHAmgEgB");
	this.shape_80.setTransform(-48,-74.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#CB9966").ss(1,1,1).p("AgOhUQADAEAPA2QASAzgKA8");
	this.shape_81.setTransform(193.8,-109.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F4D3B0").s().p("AgOhUQADAEAPA2QASAzgKA8g");
	this.shape_82.setTransform(193.8,-109.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#E0DC4F").ss(1,1,1).p("AAAAwQgMgvARgw");
	this.shape_83.setTransform(14.3,-116.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFF99").s().p("AAFgvIgFBfQgMgvARgwg");
	this.shape_84.setTransform(14.3,-116.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFF99").s().p("AgbAZIAAgcQABgOAEgOQAHgLAEgLIAUA0QAHATANARQgPgJgOAKQgOAFgGALIgCABIgFgcg");
	this.shape_85.setTransform(16.5,-116.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#E0DC4F").ss(1,1,1).p("AB0g0QhCADg+ANQhAARg/ATQg0AWgrAUQBkgUBpAEQBgAIBeAHQgzARhBgCQg+gDg4gCQhKgChDARQgZAPgfAAQAAgbAOgWQgDAAgCAAQgQACgPACQA/gyBagWQBagWBOgOQCMgcB8BJQgfgRg3gFQg4gGgjADg");
	this.shape_86.setTransform(2.9,-57.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E0DC4F").s().p("AkAAgIgFAAIgfAEQA/gyBagWQBagWBOgOQCMgcB8BJQgfgRg3gFQg4gGgjADQhCADg+ANQhAARg/ATIhfAqQBkgUBpAEIC+APQgzARhBgCIh2gFQhKgChDARQgZAPgfAAQAAgbAOgWg");
	this.shape_87.setTransform(2.9,-57.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#AF761B").s().p("AgaBDQAVgnAEgiQAHg2gIgzQACASAMATQAJAYAAAbQABA0gXAuQAfgZATgiQAMgogEgtQAGAmADAmQgEAWgMAPQgYAcgkAPQgeANgZANQAYgQAPgeg");
	this.shape_88.setTransform(-9,-213.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AF761B").s().p("AgNBSQgEgaAFgIIgNANIgNANIgDgSIgCgWQgBgeAPgXQAhgrAFg3QgDA4ABA4QAPgYAWgOQgEAVgOAUQgNATgIAVQgLAogBAoIgGgkg");
	this.shape_89.setTransform(7,-206.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#AF761B").ss(1,1,1).p("AEHiIQALBLAJBNQAcgVAggYQgLAzAEA3QAYgCAWgIQgQARgRAdQAXAMAfgEQgHANglAxQglAxgDAGQgGgCguADQguAEgQAqQgDgBgXgYQgYgYgDgfIAAAoQgDgBgUguQgVgugDhQIgaAaIgbhQQgCABgQAMQgRAMgMAPQgHALABgbQABgaAAgEQgBADgmAZQgmAZg2AMQg1AMgxglIgUAaQgLABgRABQgSABgFgKQgCAbAGAcQADAcgCAcQgDA3gFAzQAAgOgOgUQgOgUgJgMQgYgfgQgjQgDgmgPgkQAhACAXAWQAAgsgKgrQgKgqADgrQAKAHAEAMQADAMAOAEQAPhSAZhEQgDAYAOAXQANAYAIAWQAVgdAUggQAJgjAYgbQADAhAMAeQAUgMAOgVQAPgVARgNQAVA0ANgtQANgtAAgiQAJAaAeAkQAbAjAZAVQAUgPADgTQACgUAhAVQAiAYAWAlQAQgGAHgNQAGgNAOgJQgNAUAHAYQAUgGAVgHQgBAZARAUQAPgMAHgSg");
	this.shape_90.setTransform(-4.9,-208.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E8A225").s().p("AlBD+IgXggQgYgfgQgjQgDgmgPgkQAhACAXAWQAAgsgKgrQgKgqADgrQAKAHAEAMQADAMAOAEQAPhSAZhEQgDAYAOAXQANAYAIAWQAVgdAUggQAJgjAYgbQADAhAMAeQAUgMAOgVQAPgVARgNQAVA0ANgtQANgtAAgiQAJAaAeAkQAbAjAZAVQAUgPADgTQACgUAhAVQAiAYAWAlQAQgGAHgNQAGgNAOgJQgNAUAHAYIApgNQgBAZARAUQAPgMAHgSQALBLAJBNIA8gtQgLAzAEA3QAYgCAWgIQgQARgRAdQAXAMAfgEQgHANglAxQglAxgDAGQgGgCguADQguAEgQAqQgDgBgXgYQgYgYgDgfIAAAoQgDgBgUguQgVgugDhQIgaAaIgbhQIgSANQgRAMgMAPQgHALABgbIABgeQgBADgmAZQgmAZg2AMQg1AMgxglIgUAaIgcACQgSABgFgKQgCAbAGAcQADAcgCAcQgDA3gFAzQAAgOgOgUg");
	this.shape_91.setTransform(-4.9,-208.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EABF9B").s().p("AATGcQgSgUgMgWQgXgmgIgtQgJg3AHhpQAHhoAKhXIALhdQgThTAFhWQACgaAIgjQAIgkASgRQgDAcgGAdQACAdAHAbQAPAzgDA4QgFAvgJAvQgEAzABAzQgBAugBAyQAAAYgEAXIAEAwIgHBTQgDAoAKArQAWA3AbA0QgNgOgQgOg");
	this.shape_92.setTransform(-32.6,-168.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#CB9966").ss(1,1,1).p("AB9nEQhTgbhxgRQhzgRhKBDQhKBDApDjQgBAFgLBYQgKBWgHBpQgHBpAJA3QALBRBSBEQBSBEDLgKQCJgOAzhLQAzhMAAheQABhegNhDQgPhZgDgUIgCgQQAFADAegJQAegKgFg5QgGgrgShGQgShGgphAQgpg/hMgXg");
	this.shape_93.setTransform(-4.8,-169);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F4D3B0").s().p("AjjG5QhShEgLhRQgJg3AHhpQAHhpAKhWIAMhdQgpjjBKhDQBKhDBzARQBxARBTAbQBMAXApA/QApBAASBGQASBGAGArQAFA5geAKQgeAJgFgDIACAQIASBtQANBDgBBeQAABegzBMQgzBLiJAOIgwABQilAAhIg7g");
	this.shape_94.setTransform(-4.8,-169);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#64A1AF").ss(1,1,1).p("AgGBdQgCgHgDhCQgChBAZgv");
	this.shape_95.setTransform(-34.2,-86.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7CC2D8").s().p("AgLATQgChAAZgvIgSC5QgCgHgDhDg");
	this.shape_96.setTransform(-34.2,-86.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EABF9B").s().p("Ah0ATQgCgtgRgPQBCAgBFgNQBHgMA0g1QACAaAIAbQAJAbgOATQgjAcgsADIijAuIgChGg");
	this.shape_97.setTransform(0,-120.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#CB9966").ss(1,1,1).p("ACcAbQgEABgUgaQgWgYgHhTQgBADgiAaQgiAZg5ANQg6AOhKgiQACAAAKAqQALAogDBMQgEADAnADQAmACB9gpg");
	this.shape_98.setTransform(2,-119.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F4D3B0").s().p("AhkBqQgngDAEgDQADhMgLgoQgKgpgCgBQBKAiA6gOQA5gNAigZQAigaABgDQAHBTAWAYQAUAaAEgBIhdAoQh2AngpAAIgEAAgAibg6IAAAAIAAAAg");
	this.shape_99.setTransform(2,-119.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABOAyQgQAwgjBNQgiBNg1AxQg2AwhGglQArAZA8ANQA8AOAxAIQARgDAahmQAZhmAbiMQAaiKARhzQAShzABgcQgPA4gSA3QgIA5gGA5QgTBngpBdg");
	this.shape_100.setTransform(-103.8,111);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6AAFBA").s().p("AhRFeQg8gNgrgZQBGAlA2gwQA1gxAihNQAjhNAQgwQAphdAThnQAGg5AIg5QASg3APg4QgBAcgSBzQgRBzgaCKQgbCMgZBmQgaBmgRADQgxgIg8gOg");
	this.shape_101.setTransform(-103.8,111);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#64A1AF").ss(1,1,1).p("ANsqVQgEgDiUglQiTgljwgaQjwgakXAdQgCgDgdAXQgcAYgcBgQgNA4g6CZQg6CahXC+QhWC8hlCiQhmCjhlBIQAEAEBkA3QBkA3COA9QCOA+CEAXQADgGAuinQAuinAzj2QAyj1ARj3QABgFAQgzQAPgzAUgaQAagQBIANQBIANAkADQAYACBPAQQBQAQBgAQQBiAQBNAB");
	this.shape_102.setTransform(-75.3,70.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7CC2D8").s().p("AoRK0QiNg9hkg3Qhkg3gFgEQBlhIBlijQBmiiBWi8QBYi+A5iaQA6iZANg4QAchgAdgYQAcgXACADQEXgdDwAaQDvAaCUAlQCUAlAEADIjOEzQhNgBhigQQhhgQhPgQQhQgQgXgCQglgDhHgNQhIgNgbAQQgSAagQAzIgRA4QgRD3gyD1QgzD2guCnQguCngDAGQiDgXiPg+g");
	this.shape_103.setTransform(-75.3,70.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#6AAFBA").ss(1,1,1).p("AAqhPQgKAngRAcQgPAYgVAaQgXAbgeAHQALACAMAbQAMAbAFAMQAsg+Avg7QgCAIAHAUQAIAUAFAGQgTgcgBhNQAAhOAPgdQgSAWgKAmg");
	this.shape_104.setTransform(-40.5,-79);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6AAFBA").s().p("AgyBlQgNgbgLgCQAegHAXgbQAVgaAPgYQARgcAKgnQAKgmASgWQgPAdABBOQABBNASAcQgGgGgHgUQgIgUAEgIQgxA7gqA+IgRgng");
	this.shape_105.setTransform(-40.5,-79);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#E0DC4F").ss(1,1,1).p("AgkoEQADAsAIAoQAXA1AKBBQAJCNgRCFQgHBDgEBCQgDBEgRBBQgJAiACAXQACAXAGAfQAPBLg8AdQANABAVADQAVADAKAKQADAEATAaQAUAaADADIAHg8IgphdQACgFARhUQAShUAQhoQAQhngBhBQgDhGADhhQAEhiADhLQg4gug4gxg");
	this.shape_106.setTransform(36.3,-43.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E0DC4F").s().p("AAMHoIgWgeQgKgKgVgDIgigEQA8gegPhKQgGgggCgXQgCgWAJgiQARhCADhDQAEhCAHhDQARiFgJiNQgKhBgXg0QgIgogDgtIBwBfIgHCtQgDBiADBFQABBBgQBmQgQBpgSBUIgTBZIApBdIgHA8IgXgdg");
	this.shape_107.setTransform(36.3,-43.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#E0DC4F").ss(1,1,1).p("AGbhPQAEhaADhLQhEhFhAhFQg/hEgvhUQgnhEgQhHQgDABgDABQhBAehAAPQhBAPgFAAQgPgKgggLQiqDhg3EYQALA4AMBXQANBYABBUQgCDhhIBfQgRAXgHAJIAsgGQgBgEA4gUQA5gUCCALQBaALBiAYQBkAYBNAXQBNAXATAIIAwA8IAGg8IgohdQABgFAShUQARhUARhpQAQhogChBQgDhAADhZg");
	this.shape_108.setTransform(2.1,-59.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFF99").s().p("AFKJmQgTgIhNgXQhNgXhkgYQhigYhagLQiCgLg5AUQg4AUABAEIgsAGIAYggQBIhfACjiQgBhTgNhZQgMhWgLg4QA3kZCqjgQAgALAPAKQAFABBBgPQBAgQBBgdIAGgDQAQBHAnBEQAvBUA/BFQBABEBEBFIgHClQgDBYADBBQACBBgQBoQgRBpgRBTIgTBZIAoBeIgGA8g");
	this.shape_109.setTransform(2.1,-59.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#64A1AF").ss(1,1,1).p("ACwj/QgbAJgJAEQgfAOgXACQgYADgfADQhQANgsA1QgsA1ggBKQgnBFguBEQAggCAYAWQAYAVAUAUQAcAaARAfQARAeAWAaQAxg2Apg8QAAACAKAwQA3kWCqjhQgDACgZAJQgYAIgbAJg");
	this.shape_110.setTransform(-36.7,-94.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7CC2D8").s().p("AhtDkQgRgfgcgaQgUgUgYgVQgYgWggACQAuhEAnhFQAghKAsg1QAsg1BQgNIA3gGQAXgCAfgOQAJgEAbgJIAzgRQAZgJADgCQiqDhg3EWIgKgyQgpA8gxA2QgWgagRgeg");
	this.shape_111.setTransform(-36.7,-94.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#E0DC4F").ss(1,1,1).p("AADgDIgDAAQAAACgCADQgDAGAIgLg");
	this.shape_112.setTransform(-40.2,-4.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#64A1AF").ss(1,1,1).p("AANgmQgBAEgLAhQgIAfgFAJ");
	this.shape_113.setTransform(-10.6,-5.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#7CC2D8").s().p("AANgmIgMAmQgIAegFAJg");
	this.shape_114.setTransform(-10.6,-5.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#64A1AF").ss(1,1,1).p("AANgiQgBAEgHAcQgFAagMAK");
	this.shape_115.setTransform(-14.7,-5.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#7CC2D8").s().p("AANgiIgIAgQgFAagMALg");
	this.shape_116.setTransform(-14.7,-5.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#6AAFBA").ss(1,1,1).p("AA0ikQgLgHgBgBQAgBogtBfQgTAlglAwQgnAwgqAMQCrAMAmipQAVg/gOhCQgGgMgQgPQgRgOgPgJg");
	this.shape_117.setTransform(28.1,16.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6AAFBA").s().p("AhuCsQAqgMAngwQAlgwATglQAthfgghoIAMAIQAPAJARAOQAQAPAGAMQAOBCgVA/QgkCeiXAAIgWgBg");
	this.shape_118.setTransform(28.1,16.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#6AAFBA").ss(1,1,1).p("ACgiOQg4gBhbAHQhZAGgsAjQgCADgRARQgRARgDACQgDAHARAsQAQApAUAuQATAuAGAPQAYgyAxgZQgXgjgXgfQgXgegJgnQAggMAqABQAoABAkADQgMAdgCAhQgCAfgZAZQAmAdAxgMQADgmghgIQAOgHAWgEQgUgLgQgNQAMgBAMgCQgOgiARgkQARglAngMg");
	this.shape_119.setTransform(-18.8,-3.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6AAFBA").s().p("AhtBSQgUgugQgpQgRgsADgHIAUgTIATgUQAsgjBZgGQBbgHA4ABQgnAMgRAlQgRAkAOAiIgYADQAQANAUALQgWAEgOAHQAhAIgDAmQgxAMgmgdQAZgZACgfQACghAMgdQgkgDgogBQgqgBggAMQAJAnAXAeQAXAfAXAjQgxAZgYAyIgZg9g");
	this.shape_120.setTransform(-18.8,-3.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#64A1AF").ss(1,1,1).p("AFChpIg8hWQhvhJiJgCQiHgDhmAYQhlAXgFAEIgnAnQBUDQA7DaIADAAQAFAFCBANQB/ANC+gtQB2gmAQhQQAPhQgZhCQgahFgFgFg");
	this.shape_121.setTransform(2.1,8.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7CC2D8").s().p("AhYEJQiBgNgFgFIgDAAQg7jahUjQIAngnQAFgEBlgXQBmgYCHADQCJACBvBJIA8BWQAFAFAaBFQAZBCgPBQQgQBQh2AmQiTAjhtAAQggAAgdgDg");
	this.shape_122.setTransform(2.1,8.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABbkVQgEgChEAJQhCAIhUApQhVApg2BhQg2BfAYCwQACAhgDA1QgCA1AQAZQARgVAFgfQAFgfAMgcQAfg9A2gtQAYgSA8gPQA9gPApAJQAqAIgcA1QAQgSA1gKQA0gLAYgFQBAgSA+gTQg7jZhUjSg");
	this.shape_123.setTransform(-51.4,26.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6AAFBA").s().p("AktESQADg1gCghQgYiwA2heQA2hiBVgpQBUgpBCgIQBEgIAEABIBKhKQBUDSA7DYIh+AnIhMAPQg1AKgQASQAcg1gqgIQgpgJg9APQg8APgYASQg2AtgfA9QgMAcgFAeQgFAggRAVQgQgZACg1g");
	this.shape_124.setTransform(-51.4,26.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABDlnQgJAUgcBhQgbBhgeB5QggB2gXBaQgYBaAAAFQBkA9BwAUQgagcgdgdQgcgdgQgjQgOgrgBg+QgCg9AHgwQAGgtASgtQATgtAIgxQAJgsALg6QAKg6gLgog");
	this.shape_125.setTransform(-95.6,161);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6AAFBA").s().p("AhpEXQgBgFAYhaIA3jQQAeh5AbhhQAchhAJgUQAMAogLA6IgUBmQgIAxgTAtQgRAtgHAtQgGAwABA9QABA+APArQAPAjAdAdIA3A5QhxgUhjg9g");
	this.shape_126.setTransform(-95.6,161);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#64A1AF").ss(1,1,1).p("ADTvSQgEgChEAJQhEAIhSApQhVApg2BhQg2BhAXCwQAZC3ggDxQghDwg3DnQg4DoguCYQguCZgDAGQCyBdCGAUQCFAVBMgMQBMgMABgEQAAgGAFh2QAFh2AFiXQAEiWABhnQgBhOgIiWQgHiWgLifQgKiigIhyQgIhygBgFQAggEA/gRQA/gRA7gSQA6gSAQgFQg7jahUjSg");
	this.shape_127.setTransform(-63.4,96.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#75B9C9").s().p("AhzQQQiGgUiyhdQADgGAuiZQAuiYA4joQA3jnAhjwQAgjxgZi3QgXiwA2hhQA2hhBVgpQBSgpBEgIQBEgJAEACIBKhKQBUDSA7DaIhKAXQg7ASg/ARQg/ARggAEIAJB3IASEUQALCfAHCWQAICWABBOQgBBngECWIgKENIgFB8QgBAEhMAMQgcAEgkAAQg8AAhVgNg");
	this.shape_128.setTransform(-63.4,96.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#706257").ss(1,1,1).p("AgngiQgBAbAAAYQABAbgRAYQASAAAagHQAXgIAJgRQAFgKAghdQgLADgoAKQgmALgGAEQgBACAAADg");
	this.shape_129.setTransform(-57.1,224.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#706257").s().p("Ag4BEQARgYgBgbIABgzIABgFQAGgEAmgLIAzgNQggBdgFAKQgJARgYAIQgXAHgSAAIgCAAg");
	this.shape_130.setTransform(-57.1,224.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#8C7A6C").ss(1,1,1).p("AhBAAQACAiACAuQACAugSAaQAXgHAWgKQApgTAugTQAOguALgvQALguABghQgHhAhBgHQhAgHgvADQAiBFgIBRg");
	this.shape_131.setTransform(-56.9,207);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#8C7A6C").s().p("Ag9BQIgEhQQAIhRgihFQAvgDBAAHQBBAHAHBAQgBAhgLAuQgLAvgOAuQguATgpATQgWAKgXAHQASgagCgug");
	this.shape_132.setTransform(-56.9,207);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#706257").ss(1,1,1).p("AhFBeQAdgBAxgMQAzgNAHghQAAgBABgiQABgkABg5QgNAFgzASQgyASgHABQAJAfACAwQACAxgfARg");
	this.shape_133.setTransform(-109.7,160.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#706257").s().p("AgoAcQgCgwgJgfQAHgBAygSIBAgXIgCBdIgBAjQgHAhgzANQgxAMgdABQAfgRgCgxg");
	this.shape_134.setTransform(-109.7,160.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#8C7A6C").ss(1,1,1).p("ABShrQgHgsgCgEQgUAegqAVQgoAWgkAEQgCBIAPBAQAKApgIASQgHATghAUQAOgBArgNQApgOAogPQAogPADgGQABhJgChGQgBgMgHgsg");
	this.shape_135.setTransform(-111.8,141.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8C7A6C").s().p("AgyB1QAIgSgKgpQgPhAAChIQAkgEAogWQAqgVAUgeQACAEAHAsQAHAsABAMQACBGgBBJQgDAGgoAPQgoAPgpAOQgrANgOABQAhgUAHgTg");
	this.shape_136.setTransform(-111.8,141.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#706257").ss(1,1,1).p("AG0hoQguARgsASQixBFjKAWQjLAYjFg1QgEAZAGARQAGAQAeAQQBLAiBuADQBvADBRgKQB3gMBfhMQAHAXAOAVQAfgEBCgIQBDgJARgcQABgBALgdQALggAPgug");
	this.shape_137.setTransform(-95,227.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#8C7A6C").s().p("AjSBoQhugDhLgiQgegQgGgQQgGgRAEgZQDFA1DLgYQDKgWCxhFQAsgSAugRIgaBOIgMAeQgRAchDAJIhhAMQgOgVgHgXQhfBMh3AMQg+AIhQAAIgygBg");
	this.shape_138.setTransform(-95,227.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#8C7A6C").ss(1,1,1).p("AF3ilQhLgghngOQhmgOhYAMQAAACgxApQgzAohmA2QhoAshGAkQhFAlgLBuQgCARgBANQDFA3DLgYQDJgXCyhGQAsgSAtgRQAPgvALgtQALgvAAgiQgDgshLggg");
	this.shape_139.setTransform(-93,208.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BFA78E").s().p("AnEC1IADgeQALhuBFglQBGgkBogsQBmg2AzgoQAxgpAAgCQBYgMBmAOQBnAOBLAgQBLAgADAsQAAAigLAvQgLAtgPAvIhZAjQiyBGjJAXQg9AHg8AAQiNAAiKgmg");
	this.shape_140.setTransform(-93,208.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#8C7A6C").ss(1,1,1).p("AF3jLQhLgghmgOQhngOhXAMQAAACgyApQgzAohmA2QhoAshFAmQhGAjgLBuQgFArABAWQACAWAlATQBLAiBuADQBvADBRgKQB3gMBfhMQAHAXAOAVQAggEBBgIQBDgJARgcQACgDASgzQASg0ARhAQAThDABguQgEgshLggg");
	this.shape_141.setTransform(-93.1,212.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BFA78E").s().p("AjlEAQhugDhLgiQgkgTgDgWQgCgWAHgrQAKhuBGgjQBFgmBpgsQBlg2A0goQAxgpAAgCQBXgMBnAOQBnAOBKAgQBLAgAEAsQgCAugRBDQgSBAgSA0IgTA2QgSAchDAJIhhAMQgOgVgHgXQhfBMh3AMQg+AIhQAAIgygBg");
	this.shape_142.setTransform(-93.1,212.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#C95050").ss(1,1,1).p("AGIhOQgggMgvAAQhXABhYAIQgsACh5AKQh6AKh9AYQh8AZgzAtQgQAQgBAUQAqAYBBgFQBBgEAwgHQCCgOCAgNQB7gIB1geQAxgMA/gIQA/gLAogkQgrgOgggLg");
	this.shape_143.setTransform(-3.5,35.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C95050").s().p("AnSBHQABgUAQgQQAzgtB9gZQB8gYB6gKQB5gKAsgCQBXgIBYgBQAuAAAhAMIBLAZQgpAkg+ALQg/AIgxAMQh2Aeh6AIIkBAbQgxAHhBAEIgVABQgzAAgjgUg");
	this.shape_144.setTransform(-3.5,35.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#64A1AF").ss(1,1,1).p("AiNi2QgIgCAtBVQAuBVDJDF");
	this.shape_145.setTransform(30,-102.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#6AAFBA").ss(1,1,1).p("ACTgcQAFgFgSgXQgSgXgEgGQgCAEguAEQguADgwABQgyABgOgCQAUAWAKAeQgZAKgSgNQgSgNgXgIQACATACAVQA6AuA3AuQgDgxANgPQAHgJASgLQAegOAogEQAogFAhgHg");
	this.shape_146.setTransform(47.2,-94.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6AAFBA").s().p("AiQgGIgEgoQAXAIASANQASANAZgKQgKgegUgWQAOACAygBQAwgBAugDQAugEACgEQAEAGASAXQASAXgFAFQghAHgoAFQgoAEgeAOQgSALgHAJQgNAPADAxIhxhcg");
	this.shape_147.setTransform(47.2,-94.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#6AAFBA").ss(1,1,1).p("ADHg7QhBAehCAPQhBAOgDAAQgOgFgNgJQgXgKgYAEQglAKgjARQgkASgnAMQgkAGgkAFQAaAHAZAMQAYAMAcACQgDABAAADQAnACAegTQAcgUAigLQBMgKBRAJQBEAHArgrQAkgzA0ghQgyAEgtAVg");
	this.shape_148.setTransform(-6.3,-120.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6AAFBA").s().p("AjBBVQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQgcgCgYgMQgYgMgbgHIBIgLQAngMAlgSQAigRAmgKQAXgEAXAKQANAJAOAFQACAABCgOQBCgPBBgeQAtgVAygEQg0AhgkAzQgrArhEgHQhRgJhMAKQgiALgdAUQgaARghAAIgJAAg");
	this.shape_149.setTransform(-6.3,-120.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#6AAFBA").ss(1,1,1).p("ADNgMQhmADhngSQhlgRhmATQAAgEAAgDQgEAcAdADQAcABAXAAQA3AFA5gCQBvgCBnAjQABgGABgVQACgSACgDg");
	this.shape_150.setTransform(36.6,-126.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6AAFBA").s().p("AgPADQg5ACg3gFQgXAAgcgBQgdgDAEgcIAAAHQBmgTBlARQBnASBmgDQgCADgCASIgCAbQhngjhvACg");
	this.shape_151.setTransform(36.6,-126.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#64A1AF").ss(1,1,1).p("ADBjOQgWgBhpgKQhogLhiAAQhiAAAAAeQAQBHAnBEQAuBSBABEQBABFBCBEQgBgrADgXQADgWAlgVQAQgHA2gNQA2gNAJAGQgQhGgUhMQgVhPAOhJg");
	this.shape_152.setTransform(37.8,-106.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#7CC2D8").s().p("AhFBcQhAhFguhSQgohEgPhHQAAgdBigBQBiAABnALQBqAKAVABQgNBJAUBPQAVBMAPBGQgIgFg2ANQg2AMgQAHQglAWgDAWQgEAWACAsQhDhFg/hEg");
	this.shape_153.setTransform(37.8,-106.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#AF4848").ss(1,1,1).p("AHeh4QgZgXiWgBQiXgBjWAcQjYAcjeA/IAiCkQAGACCUAEQCUAEDZgJQDbgJDcgmQACgHAFhIQAGhFgTgzQgDgHgFgGg");
	this.shape_154.setTransform(0.5,41);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF6666").s().p("Ak4CQQiUgEgGgCIgiikQDeg/DYgcQDWgcCXABQCWABAZAXQAFAGADAHQATAzgGBFQgFBIgCAHQjcAmjbAJQiWAGh1AAIhigBg");
	this.shape_155.setTransform(0.5,41);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#706257").ss(1,1,1).p("AH0h8QjoBgj5AfQj4Aij4ghQgJArACArQgIACgHgBQC9AnDZgGQDXgGCmh2QANAmAEAoQAfgMBLgMQBLgMALgmQAAgBABgiQABgkABg5g");
	this.shape_156.setTransform(-152.7,163.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#8C7A6C").s().p("AnzBbQAHABAIgCQgCgrAJgrQD5AhD3giQD5gfDohgIgCBdIgBAjQgLAmhLAMQhLAMgfAMQgEgogNgmQimB2jWAGIg2ABQi7AAimgig");
	this.shape_157.setTransform(-152.7,163.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#8C7A6C").ss(1,1,1).p("AFWj1QhsAehoAyQhnAygJAGQg6Akg4AiQg3AjhGAIQhAAGg0AXQgzAWgrA4QgrA5gOBJQD4AiD4giQD5giDohfQABhZgDheQgDhhgNg4QgWg0hrAfg");
	this.shape_158.setTransform(-151.6,139.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#BFA78E").s().p("AnoDxQAOhJArg5QArg4AzgWQA0gXBAgGQBGgIA3gjQA4giA6gkQAJgGBngyQBogyBsgeQBrgfAWA0QANA4ADBhQADBegBBZQjoBfj5AiQh8ARh9AAQh8AAh7gRg");
	this.shape_159.setTransform(-151.6,139.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#8C7A6C").ss(1,1,1).p("AFgkqQhsAfhnAyQhoAygIAGQg7Ajg3AjQg4AihGALQhAAGgzAWQg0AVgrA3QhEBfAEB6QgHACgHgBQC9AnDZgGQDXgGCmh4QAMAoAFAnQAegLBLgMQBLgMALgmQABgFAChaQAChbgDhrQgChtgOg/QgWg0hsAeg");
	this.shape_160.setTransform(-152.6,144.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#BFA78E").s().p("AnzEUQAHABAHgCQgEh6BEhfQArg3A0gVQAzgWBAgGQBGgLA4giQA3gjA7gjQAIgGBogyQBngyBsgfQBsgeAWA0QAOA/ACBtQADBrgCBbIgDBfQgLAmhLAMQhLAMgeALQgFgngMgoQimB4jXAGIg6ABQi4AAikgig");
	this.shape_161.setTransform(-152.6,144.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EABF9B").s().p("AiHBhQAcgBASgTIAkgnQAiglAYgnQAbgqAjgmQAlgtAUg3QAPApgFAoQgJAXgQAUQglA1grAuQg2BBg8A9IALAuQAIAcANAOQg4gzgahHg");
	this.shape_162.setTransform(-53.3,-57.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#CB9966").ss(1,1,1).p("AAUm8QgFAGg/BSQhCBThCBcQhBBcgFAiQgFAsArBdQArBeCOCFQCMCAAzAHQAzAHADg9QgCg9hMh9QhMh8gpiHQAEgDAxgzQAxg0A2hDQA2hCASgt");
	this.shape_163.setTransform(-64.3,-38.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F4D3B0").s().p("ACkG8QgzgHiMiAQiOiFgrheQgrhdAFgsQAFgiBBhcQBChcBChTIBEhYIDnBpQgSAtg2BCQg2BDgxA0Ig1A2QApCHBMB8QBMB9ACA9QgDA3gpAAIgKgBg");
	this.shape_164.setTransform(-64.3,-38.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EABF9B").s().p("AAYAyQgfgDghAAQgjAHghAAQgRgGgLgUQgKgVAAgRQAxAHAygEQAqABAngHQgLABgMgQQgLgRgBgIQAKAOAXAKQAWAJASAKQAXAMAWAPIASATQAOAPgDACIgrABQgoAAgngEg");
	this.shape_165.setTransform(61.4,-125.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#CB9966").ss(1,1,1).p("ADRgwQgfg+hOgRQghgGhAgDQg+gEg7gBQg7gBgTABQgOAGgFAqQgFApAAANQACAyAWAqQAWAqANAwQB2gOB6gEQAkgCAcgGQAcgGAXgeQAthFgeg8g");
	this.shape_166.setTransform(77.7,-113);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F4D3B0").s().p("AjEA1QgWgqgCgyQAAgNAFgqQAFgpAOgHQATAAA7AAQA7ACA+AEQBAADAhAGQBOARAfA9QAeA9gtBFQgXAegcAGQgcAGgkACQh6AEh2AOQgNgwgWgqg");
	this.shape_167.setTransform(77.7,-113);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#C95050").ss(1,1,1).p("AI8jvQgahGhAgdQhrglh4gBQiSgKiSgDQiUgCiSAWQg/AJhHAWQhHAXgnA2QggA2AXA6QATBJARBHQASBEgBBOQgLBkA2BSQAqAwA4AEQA5ADA8gDQCjgDCjgEQBEAEBXAMQBYANA+gPQBOgcAvhOQAwhOAZhcQAZhdAKhHQANhYgghdg");
	this.shape_168.setTransform(9.8,-66);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C95050").s().p("ADQGAQhXgMhEgEIlGAHQg8ADg5gDQg4gEgqgwQg2hSALhkQABhOgShEIgkiQQgXg6Agg2QAng2BHgXQBHgWA/gJQCSgWCUACQCSADCSAKQB4ABBrAlQBAAdAaBGQAgBdgNBYQgKBHgZBdQgZBcgwBOQgvBOhOAcQgiAIgpAAQgjAAgogGg");
	this.shape_169.setTransform(9.8,-66);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#AF4848").ss(1,1,1).p("AKelAQg3hNh3gWQh4gWhZgHQkZgmkUAiQhcAKhaATQg/AOhQAqQhQAqgSBFQgJBhAlBnQAkBlAPBgQADBYANBZQANBYBbAuQA9AXA/gSQA/gTA9gNQBIgLBVgDQBUgCBFAQQCMAkCSAIQBRAEA9gkQA9glAZhNQAdheAehmQAfhlAPhhQAKg8AChEQADhFgcg0g");
	this.shape_170.setTransform(13.2,-65.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF6666").s().p("AFeHVQiSgIiMgkQhFgQhUACQhVADhIALQg9ANg/ATQg/ASg9gXQhbgugNhYQgNhZgDhYQgPhggkhlQglhnAJhhQAShFBQgqQBQgqA/gOQBagTBcgKQEUgiEZAmQBZAHB4AWQB3AWA3BNQAcA0gDBFQgCBEgKA8QgPBhgfBlIg7DEQgZBNg9AlQg2AghGAAIgSAAg");
	this.shape_171.setTransform(13.2,-65.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-0.6,-0.1,7.6,-0.1).s().p("AgbLsQg4gQgEgFIAA3CICvgFIAAXHQgrAagoAAQgPAAgRgFg");
	this.shape_172.setTransform(-7.3,126);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#9E9E9E").ss(1,1,1).p("AmBglQAEAFBuAhQBvAjCpAFQCqgFBmgkQBmgjADgF");
	this.shape_173.setTransform(-8.4,207);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-34.6,-2.9,29.1,2.4).s().p("AmiCUQing8gHhYQAHhYCng7QCng7D7gDQD8ADCnA7QCoA7AGBYQgGBYioA8QinA7j8ACQj6gCiog7gAlZgiQACAEBXAeQBWAhCUAEQCSAFC6hMQgDgEhbgZQhagZiTgDIgQAAQiOAAimA5g");
	this.shape_174.setTransform(-4.2,207.3);

	this.addChild(this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203.7,-238.8,407.5,477.7);


(lib.boy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAAQACgJARgBQASABACAJQgCALgSAAQgRgBgCgKg");
	this.shape.setTransform(2.4,-167.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAHIAtgiIgNA3QgggPAAgGg");
	this.shape_1.setTransform(-2,-161.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgxAAQAFApAsAEQAugEAEgpQgEgogugEQgsAEgFAog");
	this.shape_2.setTransform(0.9,-164.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A5C9FF").s().p("AgwAAQAEgoAsgFQAuAFADAoQgDApguAEQgsgEgEgpg");
	this.shape_3.setTransform(0.9,-164.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5885C6").ss(0.3,1,1).p("AhHAAQAGA8BBAGQBCgGAGg8QgGg7hCgGQhBAGgGA7g");
	this.shape_4.setTransform(0.9,-164.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#74AAFF").s().p("AhHAAQAGg7BBgGQBCAGAGA7QgGA8hCAGQhBgGgGg8g");
	this.shape_5.setTransform(0.9,-164.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EABF9B").s().p("AgRAUQgQgRgBgSQAOAOAbABQAcABgHgZQADAHADASQADATgJADQgIACgKAAQgLAAgQgFg");
	this.shape_6.setTransform(-68.9,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EABF9B").s().p("AgVAWQgSgOACgUQAIANAUABQATAAAOgEQAGgLgBgPQADAIAFAUQAFAXgMACQgJAEgLAAQgNAAgSgHg");
	this.shape_7.setTransform(-60.3,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EABF9B").s().p("AgKAZQgegMAEggQAQAIAZAFQAcAFADgZQADAZgEAaQAAADgLAAQgMAAgWgDg");
	this.shape_8.setTransform(-53,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EABF9B").s().p("AgYAXQgQgRAAgTQAGAAAhAFQAgAGACghQAKAJgDAaQgDAYgMAIQgKAEgJAAQgQAAgOgNg");
	this.shape_9.setTransform(-43.1,8.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CB9966").ss(1,1,1).p("AAUghQgPgRgWADQgZALAIAfQACAdASATQAaAKATgHQAIgDgCgYQgCgVgBgDg");
	this.shape_10.setTransform(-69.2,4.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4D3B0").s().p("AgOArQgSgTgCgdQgIgfAZgLQAWgDAPARIAOAcIADAYQACAYgIADQgIADgKAAQgNAAgOgGg");
	this.shape_11.setTransform(-69.2,4.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CB9966").ss(1,1,1).p("AAWglQgRgUgZAEQgcAMAJAjQACAhAUAWQAeALAWgIQAIgEgCgaQgCgYgBgEg");
	this.shape_12.setTransform(-60.8,4.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4D3B0").s().p("AgRAxQgUgWgCghQgJgjAdgMQAYgEARAUIAQAfIAEAcQABAagIAEQgJADgLAAQgPAAgRgGg");
	this.shape_13.setTransform(-60.8,4.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CB9966").ss(1,1,1).p("AAbgvQgvgUgOAXQgMAYAIAVQADANACARQACASAWAGQAtAFAAgFQACgGAEgpQAEgogTgPg");
	this.shape_14.setTransform(-53.1,5.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4D3B0").s().p("AgJA3QgWgGgCgSQgCgRgDgNQgIgVAMgYQAOgXAvAUQATAPgEAoQgEApgCAGQAAACgMAAQgMAAgVgCg");
	this.shape_15.setTransform(-53.1,5.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CB9966").ss(1,1,1).p("AAhhAQgNgPgpAPQgjASANApQAJArATAWQATATAdgKQAMgHACgZQACgZgDgMQgBgJgBgWQAAgWgLgLg");
	this.shape_16.setTransform(-44,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4D3B0").s().p("AgPA8QgTgWgJgrQgNgpAjgSQApgPANAPQALALAAAWIACAfQADAMgCAZQgCAZgMAHQgJAEgJAAQgQAAgOgNg");
	this.shape_17.setTransform(-44,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CB9966").ss(1,1,1).p("AA2AoQgBgCgggcQgegZgsgY");
	this.shape_18.setTransform(-67.4,-35.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CB9966").ss(1,1,1).p("AhOAjQADgFAwgeQAtgcA8gG");
	this.shape_19.setTransform(74.7,-211.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4D3B0").s().p("AgbAAQAtgcA8gGIibBFQACgFAwgeg");
	this.shape_20.setTransform(74.7,-211.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CB9966").ss(1,1,1).p("ABahYQgxAGg4AhQg7AhgFAEQgCABgGAWQgGAYAPAmQANAeAUgcQATgcA9AH");
	this.shape_21.setTransform(77.1,-200.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EABF9B").s().p("AASBdQgSgKgWADQgUAOgWAAIgBAAQgXgRABgcIAIgYQAGgRgCgGQgSgUgDgTQgDgTABgBQgNgbAQgcQAQgcAagLQgGAjAWAXQgYAUAJAVQAJAVAUATQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQgSAsAnAaQAaANAagIIA1gQIgXAXQABADAHANQAIAMABAGQgEARgTAGQgTAGgNAHQAFgigfgTg");
	this.shape_22.setTransform(76.7,-203);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CB9966").ss(1,1,1).p("ACNCeQAJgQADgQQAGgxgVg0QgUgzgWgKQgugLgGABQACgDgDgYQgDgXghgGQAAgIgcggQgeggg6AmQgFADgYAiQgYAiANAhQAEARADARQALAPAHAPQgCAOgHAN");
	this.shape_23.setTransform(81.8,-205);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4D3B0").s().p("AiFA7QAHgNACgOQgHgPgLgPQgDgRgEgRQgNghAYgiQAYgiAFgDQA6gmAeAgQAcAgAAAIQAhAGADAXQADAYgCADQAGgBAuALQAWAKAUAzQAVA0gGAxQgDAQgJAQg");
	this.shape_24.setTransform(81.8,-205);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C95050").ss(1,1,1).p("AAzjyQgEgdgMgBQgKgFgGgEQgHgEgbAEQg2ACgIALQgGAMADAcQAEAcABARQAAAOAGBZQAGBXAKBlQAJBkALAvQgBACACANQACANARABQArgGAHgGQACAAAOgGQAOgGAJgNQAIgTgDhvQgEhugLhyQgKhpgFgeg");
	this.shape_25.setTransform(73.1,-202.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6666").s().p("AggEOQgCgNABgCQgLgvgJhkQgKhlgGhXQgGhZAAgOQgBgRgEgcQgDgcAGgMQAIgLA2gCQAbgEAHAEIAQAJQAMABAEAdQAFAeAKBpQALByAEBuQADBvgIATQgJANgOAGIgQAGQgHAGgrAGQgRgBgCgNg");
	this.shape_26.setTransform(73.1,-202.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CB9966").ss(1,1,1).p("AgRhmQgJAFgIAFQgRAYAFAfQABAbAIAgQAHAiASAVQAVAYAXACQAIABAIgC");
	this.shape_27.setTransform(71,-180.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4D3B0").s().p("AAgBnQgXgCgVgYQgSgVgHgiQgIgggBgbQgFgfARgYIARgKIBBDMIgKABIgGAAg");
	this.shape_28.setTransform(71,-180.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#CB9966").ss(1,1,1).p("AhiIYQCGgGCGgaQBPgRgChcQgDhcgvh5Qgvh5g2hkQg3hmgXglQgrhHgUhRQgSg9ApgyQAOgQAOgSQAPgSgDgYQgTADgUgFQgQgIgRgDQg8gEg7gBQgXgDgJAWQgWA2gIA7QgIAXgDAYQACAWAIAVQARAsAXAqQAXAqANAtQAcBtAaBtQAaBuACBx");
	this.shape_29.setTransform(95,-141.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4D3B0").s().p("AhOEtQgChxgahuQgahtgchtQgNgtgXgqQgXgqgRgsQgIgVgCgWQADgYAIgXQAIg7AWg2QAJgWAXADQA7ABA8AEQARADAQAIQAUAFATgDQADAYgPASIgcAiQgpAyASA9QAUBRArBHQAXAlA3BmQA2BkAvB5QAvB5ADBcQACBchPARQiGAaiGAGg");
	this.shape_30.setTransform(95,-141.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#C95050").ss(1,1,1).p("AAekrQAAAFgFBRQgEBRgIBvQgIBtgJBdQgLBcgOAb");
	this.shape_31.setTransform(190.3,-103.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6666").s().p("AAekrIgFBWQgEBRgIBvQgIBtgJBcQgLBdgOAbg");
	this.shape_32.setTransform(190.3,-103.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D86464").s().p("AATFPQhWgIAAgBQgCAAgHgEQgJgFACgVQARiIAJiJQAJhmALhnQACgRAKg3QAKg3APgWQAIgHAJAJQAOATgGApIgJA/QgFBegDBfQgEAogIAoQgKApgCArQgDAlATAeQAQASAXACQAWADAQAPQAMAQgHARQgGARADARQACACgIAIQgGAGgfAAIgRAAg");
	this.shape_33.setTransform(190.4,-99.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#C95050").ss(1,1,1).p("AgflAQgCgEALgYQAMgYAzgEIAuADQAAgGAGAGQAGAGAEBaQACBIgJCMQgICKgLB/QgLCAgHAhQADACgIAIQgHAIgvgCQhXgHABgBQgDAAgHgFQgIgEACgWQADgXAMiJQAMiJAPiUQAQiWANg/g");
	this.shape_34.setTransform(192.4,-103.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6666").s().p("AAAF5QhWgHAAgBQgCAAgIgFQgIgEACgWQADgXAMiJQAMiJAPiUQAQiWAOg/QgDgEAMgYQALgYAzgEIAuADQAAgGAHAGQAFAGAEBaQACBIgICMQgJCKgLB/QgLCAgGAhQACACgIAIQgFAGggAAIgRAAg");
	this.shape_35.setTransform(192.4,-103.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AF761B").s().p("AACAGQgDgugUgeQAFgBAFAAQgDgFAAgFQAIAAAFACIgHgJIAIALIAIANQAPAagBAmQgCA2gWAjQAJgkgFgvg");
	this.shape_36.setTransform(3,-208.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AF761B").s().p("AgMBGQAEgMADgMQAMgWgBg0QgChFgLgcQAbA6ALA+QAAA9ggA0QANgjgBgoQgLAXgMAbQgNAWgEAVQAFgcAMgcg");
	this.shape_37.setTransform(15.6,-196.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#C95050").ss(1,1,1).p("AgMB0QgBgEgDg0QgEg0gCg0QgCg2AEgKQAHgTAKAfQAJAeASCy");
	this.shape_38.setTransform(68.8,-238.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6666").s().p("AgQA8QgEg0gCg0QgCg2AEgKQAHgTAKAfQAJAeASCyIgkAEIgEg4g");
	this.shape_39.setTransform(68.8,-238.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AF761B").s().p("AgMAmQgVgtgDg2IAMAmQAGAWANAKQAAgdAPgYQASgYAJgaQgFAwgTArIASgnQgLAqgJAuQgGAZADAYQgIgegMgbg");
	this.shape_40.setTransform(-20.5,-205.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#8C7A6C").ss(1,1,1).p("ADDgVIgNAFQgwAQg6ADQhDAEgXg8QgcAKgeAFAC2gQQhIAchoAYQhwAbhYgKQAMgvA9gYQAagLAXgJAgPg3QgMADgOAEQgPAEgQAGQgIACgIAB");
	this.shape_41.setTransform(-177,160.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8C7A6C").s().p("Ai8A0QANgvA9gYIAxgUQAdgFAcgKQAYA8BDgEQA6gCAwgRQhJAchoAYQhRAUhGAAQgZAAgYgDg");
	this.shape_42.setTransform(-177.6,160.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#8C7A6C").ss(1,1,1).p("Aj+gbQgNAOgHAVQCHBDCKgoQBDgOBHgRQAhgJAigRQAjgRAkgDQhLAChGANQhGANhLgBQhEgIg9gRQgpgIgVAGQgSAGgeAJQgGACgIADAjDgxQglABgVAUQAAABgBAA");
	this.shape_43.setTransform(-101.7,224.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8C7A6C").s().p("AkSAIQAHgVANgOIAwgPQAVgGApAIQA9ARBEAIQBLABBGgNQBGgNBLgCQgkADgjARQgiARghAJQhHARhDAOQgzAPgzAAQhWAAhVgqgAjDgxIg6AVQAVgUAlgBg");
	this.shape_44.setTransform(-101.7,224.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#64A1AF").ss(1,1,1).p("AhpDiQAAgEAVhQQAVhQAvhnQAthpBNhQ");
	this.shape_45.setTransform(-22.9,-83.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AF761B").s().p("AhHAkQgLAPADAQQgHgcAIgbQASghAagcIgFASQAKgNAEgPIABAXQAegcAMgnQAEAsgQAoQAbgTAVgaQgDAUgPARQgOASgJAOQAmgLAhgZIgZAsQgNAZgWAMIgwAQQgbAIgCAeQgWggAEgkg");
	this.shape_46.setTransform(20.7,-177.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#64A1AF").ss(1,1,1).p("AAQAAQgBAPgPABQgOgBgBgPQABgOAOgBQAPABABAOg");
	this.shape_47.setTransform(-115.6,144.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#64A1AF").ss(1,1,1).p("AAQAAQgBAPgPABQgOgBgBgPQABgOAOgBQAPABABAOg");
	this.shape_48.setTransform(-55.6,207.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#64A1AF").ss(1,1,1).p("ACMs9QgDABgsANQgsAOgyAPQgzAQgbAIQggANgFAZQgEAZABADIAUAoIgaAbIAaAoIgaA8QAAAIAFCwQAFCxADDzQADD0gFDVQgFDWgUBU");
	this.shape_49.setTransform(-46.9,128.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#64A1AF").ss(1,1,1).p("AMKqeQABAJgRBJQgRBJgrAhQgBgBgOABQgNABgMARQgMASgNgBQgOgBgBgBQgGgBiCgPQiCgQivgUQiugUiJgOQiMgOgZACQgJgBgNAQQgCAXgYACQgMAAACAUQACAUABADQACACgCAMQgCAMgXAHQgXAJACAaQABAbACADQgCAGgpB+QgpB+g7CsQg7Cvg4CYQg5CZghA6QgBADgLAYQgMAYgMAS");
	this.shape_50.setTransform(-46,82.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOAAQACgHAMgBQAOABABAHQgBAIgOABQgMgBgCgIg");
	this.shape_51.setTransform(-23.6,-164.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgQAGIAhgcIgJAsQgYgLAAgFg");
	this.shape_52.setTransform(-26.9,-159.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgkAAQADAiAhADQAigDADgiQgDghgigDQghADgDAhg");
	this.shape_53.setTransform(-24.8,-162.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,3.8).s().p("AgkAAQADghAhgDQAiADADAhQgDAigiADQghgDgDgig");
	this.shape_54.setTransform(-24.8,-162.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#5885C6").ss(0.3,1,1).p("Ag1AAQAFAxAwAFQAxgFAFgxQgFgwgxgFQgwAFgFAwg");
	this.shape_55.setTransform(-24.7,-162.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,5.4).s().p("Ag1AAQAFgwAwgFQAxAFAFAwQgFAxgxAFQgwgFgFgxg");
	this.shape_56.setTransform(-24.7,-162.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EABF9B").s().p("AgLgRQASgIAVAGQgQACgTAMQgVAKABASQgCgXASgRg");
	this.shape_57.setTransform(23.8,-166.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CB9966").ss(1,1,1).p("AAagOQgCgCgUACQgTACgKAc");
	this.shape_58.setTransform(23.4,-167.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F4D3B0").s().p("AAEgOQAUgCACACIgzAeQAKgcATgCg");
	this.shape_59.setTransform(23.4,-167.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#AF761B").ss(1,1,1).p("ABNAhQgDgHgtgiQgsgkg9ATQACAAAsAQQAqANBBAdg");
	this.shape_60.setTransform(-4.1,-181.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E8A225").s().p("AgegJIgugQQA9gTAsAkQAtAiADAHQhBgdgqgNg");
	this.shape_61.setTransform(-4.1,-181.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#AF761B").ss(1,1,1).p("AAxgxQgEgHgjAIQghAHgYBfQACgFAggpQAegnAggSg");
	this.shape_62.setTransform(-26.9,-180.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E8A225").s().p("AAKgwQAjgIADAHQgfASgeAnQggApgDAFQAZhfAhgHg");
	this.shape_63.setTransform(-26.9,-180.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABRA4QAFgJgag8Qgag+hxgFQgDAFADA1QACAzAiAlQAhAkBbgug");
	this.shape_64.setTransform(-25.6,-163.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3F8FF").s().p("AgrBCQgiglgCgzQgDg1ADgFQBxAFAaA+QAaA8gFAJQg0AZgfAAQgbAAgOgPg");
	this.shape_65.setTransform(-25.6,-163.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EABF9B").s().p("AgrBCQgiglgCgzQgDg1ADgFQBxAFAaA+QAaA8gFAJQg0AZgfAAQgbAAgOgPg");
	this.shape_66.setTransform(-25.8,-162.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#CB9966").ss(0.5,1,1).p("AA/BAQglArh5gdQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqg");
	this.shape_67.setTransform(0.3,-165.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F3F8FF").s().p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQgWAZgzAAQgkAAgxgLg");
	this.shape_68.setTransform(0.3,-165.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#CB9966").ss(1,1,1).p("AgcACQAJgFAwAC");
	this.shape_69.setTransform(-15.4,-149.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F4D3B0").s().p("AAdgBIg5ADQAJgFAwACg");
	this.shape_70.setTransform(-15.4,-149.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EABF9B").s().p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQgWAZgzAAQgkAAgxgLg");
	this.shape_71.setTransform(1.6,-164.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#B77070").ss(0.3,1,1).p("AibgTQAKADAqAKQA1AKBFgQQBIgSA5hWQACADAIAyQAHAxgUA1QgVA3hSATQhPANgfgdQgegdgPgmQgNgigdgPQgEgCAAAA");
	this.shape_72.setTransform(-6.3,-127.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FF9999","#000000"],[0,1],0.8,6.1,-0.1,-2.2).s().p("AhGBhQgegdgPgmQgNgigdgPQAKADAqAKQA1AKBFgQQBIgSA5hWQACADAIAyQAHAxgUA1QgVA3hSATQgZAEgSAAQgtAAgWgUg");
	this.shape_73.setTransform(-6.1,-127.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#CB9966").ss(1,1,1).p("AAoh4QgBAHgCAeQgCAkgCAMQgGAKgaATQgXAQgDACQgHAEgHAnQgGAmBOAc");
	this.shape_74.setTransform(-20.4,-147.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F4D3B0").s().p("AgnA3QAHgnAHgEIAagSQAagTAGgKQACgMACgkIADglIgHDxQhOgcAGgmg");
	this.shape_75.setTransform(-20.4,-147.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AF761B").s().p("AAAAiQgOgYgLgZQgMgPgGgSQAWAUAWASQABgKgGgWQgIgVgIgIIAkAdQgLgUgHgUIAUAQQALACAHAJQAMArgGAsIgBAaQgBATADAGQgYgYgTgZg");
	this.shape_76.setTransform(-38.7,-175.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AF761B").s().p("AgLATQgUgwgUgZQAXAYATAbIAbAfQAVAYANgEQgNAHgLAAQgaAAgNgkg");
	this.shape_77.setTransform(-35.5,-193.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AF761B").s().p("AAiBTIgRgGQgOgKgIgOQgihAgHhMQACARALAPIAfA8QAXArAaAoIgNgFg");
	this.shape_78.setTransform(-28.2,-197.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#6AAFBA").ss(1,1,1).p("AgphLQBHBNAIAlQAHAmgEgB");
	this.shape_79.setTransform(-48,-61.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#CB9966").ss(1,1,1).p("AgOhUQADAEAPA2QASAzgKA8");
	this.shape_80.setTransform(193.8,-96.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F4D3B0").s().p("AgOhUQADAEAPA2QASAzgKA8g");
	this.shape_81.setTransform(193.8,-96.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#E0DC4F").ss(1,1,1).p("AAAAwQgMgvARgw");
	this.shape_82.setTransform(14.3,-103.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFF99").s().p("AAFgvIgFBfQgMguARgxg");
	this.shape_83.setTransform(14.3,-103.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFF99").s().p("AgbAZIAAgcQABgPAEgNQAHgLAEgLIAUA0QAHATANAQQgPgIgOAKQgOAFgGALIgCABIgFgcg");
	this.shape_84.setTransform(16.5,-103.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#E0DC4F").ss(1,1,1).p("AB0g0QhCADg+ANQhAARg/ATQg0AWgrAUQBkgUBpAEQBgAIBeAHQgzARhBgCQg+gDg4gCQhKgChDARQgZAPgfAAQAAgbAOgWQgDAAgCAAQgQACgPACQA/gyBagWQBagWBOgOQCMgcB8BJQgfgRg3gFQg4gGgjADg");
	this.shape_85.setTransform(2.9,-45.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E0DC4F").s().p("AkAAgIgFAAIgfAEQA/gyBagWQBagWBOgOQCMgcB8BJQgfgRg3gFQg4gGgjADQhCADg+ANQhAARg/ATIhfAqQBkgUBpAEIC+APQgzARhBgCIh2gFQhKgChDARQgZAPgfAAQAAgbAOgWg");
	this.shape_86.setTransform(2.9,-45.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#AF761B").s().p("AgaBCQAVgmAEgiQAHg2gIg0QACAUAMASQAJAZAAAaQABA0gXAtQAfgYATgiQAMgogEgtQAGAmADAmQgEAWgMAPQgYAbgkARQgeALgZANQAYgPAPgfg");
	this.shape_87.setTransform(-9,-200.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#AF761B").s().p("AgNBSQgEgaAFgIIgNANIgNANIgDgSIgCgWQgBgeAPgXQAhgrAFg3QgDA4ABA4QAPgYAWgOQgEAVgOAUQgNATgIAVQgLAogBAoIgGgkg");
	this.shape_88.setTransform(7,-193.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#AF761B").ss(1,1,1).p("AEHiIQALBLAJBNQAcgVAggYQgLAzAEA3QAYgCAWgIQgQARgRAdQAXAMAfgEQgHANglAxQglAxgDAGQgGgCguADQguAEgQAqQgDgBgXgYQgYgYgDgfIAAAoQgDgBgUguQgVgugDhQIgaAaIgbhQQgCABgQAMQgRAMgMAPQgHALABgbQABgaAAgEQgBADgmAZQgmAZg2AMQg1AMgxglIgUAaQgLABgRABQgSABgFgKQgCAbAGAcQADAcgCAcQgDA3gFAzQAAgOgOgUQgOgUgJgMQgYgfgQgjQgDgmgPgkQAhACAXAWQAAgsgKgrQgKgqADgrQAKAHAEAMQADAMAOAEQAPhSAZhEQgDAYAOAXQANAYAIAWQAVgdAUggQAJgjAYgbQADAhAMAeQAUgMAOgVQAPgVARgNQAVA0ANgtQANgtAAgiQAJAaAeAkQAbAjAZAVQAUgPADgTQACgUAhAVQAiAYAWAlQAQgGAHgNQAGgNAOgJQgNAUAHAYQAUgGAVgHQgBAZARAUQAPgMAHgSg");
	this.shape_89.setTransform(-4.9,-196.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E8A225").s().p("AlBD+IgXggQgYgfgQgjQgDgmgPgkQAhACAXAWQAAgsgKgrQgKgqADgrQAKAHAEAMQADAMAOAEQAPhSAZhEQgDAYAOAXQANAYAIAWQAVgdAUggQAJgjAYgbQADAhAMAeQAUgMAOgVQAPgVARgNQAVA0ANgtQANgtAAgiQAJAaAeAkQAbAjAZAVQAUgPADgTQACgUAhAVQAiAYAWAlQAQgGAHgNQAGgNAOgJQgNAUAHAYIApgNQgBAZARAUQAPgMAHgSQALBLAJBNIA8gtQgLAzAEA3QAYgCAWgIQgQARgRAdQAXAMAfgEQgHANglAxQglAxgDAGQgGgCguADQguAEgQAqQgDgBgXgYQgYgYgDgfIAAAoQgDgBgUguQgVgugDhQIgaAaIgbhQIgSANQgRAMgMAPQgHALABgbIABgeQgBADgmAZQgmAZg2AMQg1AMgxglIgUAaIgcACQgSABgFgKQgCAbAGAcQADAcgCAcQgDA3gFAzQAAgOgOgUg");
	this.shape_90.setTransform(-4.9,-196.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EABF9B").s().p("AATGcQgSgTgMgXQgXgmgIgsQgJg4AHhpQAHhpAKhVIALheQgThUAFhVQACgZAIgkQAIgkASgQQgDAagGAeQACAdAHAaQAPA0gDA3QgFAwgJAwQgEAxABA0QgBAugBAyQAAAYgEAXIAEAwIgHBTQgDAoAKArQAWA3AbA1QgNgPgQgOg");
	this.shape_91.setTransform(-32.6,-155.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#CB9966").ss(1,1,1).p("ADyluQgpg/hMgXQhTgbhxgRQhzgRhKBDQhKBDApDjQgBAFgLBYQgKBWgHBpQgHBpAJA3QALBRBSBEQBSBEDLgKQCJgOAzhLQAzhMAAheQABhegNhDQgPhZgDgUIgCgQQAFADAegJQAegKgFg5QgGgrgShGQgShGgphAg");
	this.shape_92.setTransform(-4.8,-156.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F4D3B0").s().p("AjjG5QhShEgLhRQgJg3AHhpQAHhpAKhWIAMhdQgpjjBKhDQBKhDBzARQBxARBTAbQBMAXApA/QApBAASBGQASBGAGArQAFA5geAKQgeAJgFgDIACAQIASBtQANBDgBBeQAABegzBMQgzBLiJAOIgwABQilAAhIg7g");
	this.shape_93.setTransform(-4.8,-156.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#64A1AF").ss(1,1,1).p("AgGBdQgCgHgDhCQgChBAZgv");
	this.shape_94.setTransform(-34.2,-73.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7CC2D8").s().p("AgLAUQgChBAZgvIgSC5QgCgHgDhCg");
	this.shape_95.setTransform(-34.2,-73.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EABF9B").s().p("Ah0ATQgCgugRgOQBCAhBFgOQBHgNA0g1QACAbAIAbQAJAbgOATQgjAcgsADIijAuIgChGg");
	this.shape_96.setTransform(0,-108.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#CB9966").ss(1,1,1).p("ACcAbQgEABgUgaQgWgYgHhTQgBADgiAaQgiAZg5ANQg6AOhKgiQACAAAKAqQALAogDBMQgEADAnADQAmACB9gpg");
	this.shape_97.setTransform(2,-106.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F4D3B0").s().p("AhkBqQgngDAEgDQADhMgLgoQgKgpgCgBQBKAiA6gOQA5gNAigZQAigaABgDQAHBTAWAYQAUAaAEgBIhdAoQh2AngpAAIgEAAgAibg6IAAAAIAAAAg");
	this.shape_98.setTransform(2,-106.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABOAyQgQAwgjBNQgiBNg1AxQg2AwhGglQArAZA8ANQA8AOAxAIQARgDAahmQAZhmAbiMQAaiKARhzQAShzABgcQgPA4gSA3QgIA5gGA5QgTBngpBdg");
	this.shape_99.setTransform(-103.8,123.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6AAFBA").s().p("AhRFeQg8gNgrgZQBGAlA2gwQA1gxAihNQAjhNAQgwQAphdAThnQAGg5AIg5QASg3APg4QgBAcgSBzQgRBzgaCKQgbCMgZBmQgaBmgRADQgxgIg8gOg");
	this.shape_100.setTransform(-103.8,123.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#64A1AF").ss(1,1,1).p("ANsqVQgEgDiUglQiTgljwgaQjwgakXAdQgCgDgdAXQgcAYgcBgQgNA4g6CZQg6CahXC+QhWC8hlCiQhmCjhlBIQAEAEBkA3QBkA3COA9QCOA+CEAXQADgGAuinQAuinAzj2QAyj1ARj3QABgFAQgzQAPgzAUgaQAagQBIANQBIANAkADQAYACBPAQQBQAQBgAQQBiAQBNAB");
	this.shape_101.setTransform(-75.3,83.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7CC2D8").s().p("AoRK0QiNg9hkg3Qhkg3gFgEQBlhIBlijQBmiiBWi8QBYi+A5iaQA6iZANg4QAchgAdgYQAcgXACADQEXgdDwAaQDvAaCUAlQCUAlAEADIjOEzQhNgBhigQQhhgQhPgQQhQgQgXgCQglgDhHgNQhIgNgbAQQgSAagQAzIgRA4QgRD3gyD1QgzD2guCnQguCngDAGQiDgXiPg+g");
	this.shape_102.setTransform(-75.3,83.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#6AAFBA").ss(1,1,1).p("AAqhPQgKAngRAcQgPAYgVAaQgXAbgeAHQALACAMAbQAMAbAFAMQAsg+Avg7QgCAIAHAUQAIAUAFAGQgTgcgBhNQAAhOAPgdQgSAWgKAmg");
	this.shape_103.setTransform(-40.5,-66.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6AAFBA").s().p("AgyBlQgNgbgLgCQAegHAXgbQAVgaAPgYQARgcAKgnQAKgmASgWQgPAdABBOQABBNASAcQgGgGgHgUQgIgUAEgIQgxA7gqA+IgRgng");
	this.shape_104.setTransform(-40.5,-66.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#E0DC4F").ss(1,1,1).p("AgkoEQADAsAIAoQAXA1AKBAQAJCOgRCFQgHBCgEBDQgDBEgRBBQgJAiACAXQACAXAGAfQAPBLg8AdQANABAVADQAVADAKAKQADAEATAaQAUAaADADIAHg8IgphdQACgFARhUQAShUAQhoQAQhngBhBQgDhGADhhQAEhiADhLQg4gug4gxg");
	this.shape_105.setTransform(36.3,-30.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E0DC4F").s().p("AAMHoIgWgfQgKgJgVgDIgigEQA8gdgPhLQgGgggCgWQgCgXAJgiQARhBADhDQAEhEAHhCQARiFgJiOQgKhAgXg1QgIgngDgtIBwBfIgHCtQgDBiADBFQABBBgQBmQgQBpgSBUIgTBZIApBdIgHA8IgXgdg");
	this.shape_106.setTransform(36.3,-30.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#E0DC4F").ss(1,1,1).p("AGbhPQAEhbADhLQhEhEhAhFQg/hEgvhUQgnhEgQhHQgDABgDACQhBAehAAOQhBAPgFAAQgPgKgggLQiqDgg3EYQALA5AMBXQANBXABBUQgCDihIBfQgRAXgHAJIAsgGQgBgEA4gUQA5gUCCALQBaAKBiAZQBkAYBNAXQBNAXATAIIAwA8IAGg8IgohdQABgFAShVQARhTARhpQAQhogChBQgDhAADhZg");
	this.shape_107.setTransform(2.1,-46.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF99").s().p("AFKJmQgTgIhNgXQhNgXhkgYQhigYhagMQiCgLg5AVQg4AUABAEIgsAGIAYggQBIhfACjiQgBhTgNhZQgMhVgLg6QA3kYCqjgQAgALAPAKQAFAABBgOQBAgPBBgeIAGgDQAQBHAnBEQAvBUA/BFQBABEBEBEIgHCmQgDBYADBBQACBBgQBoQgRBpgRBTIgTBZIAoBeIgGA8g");
	this.shape_108.setTransform(2.1,-46.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#64A1AF").ss(1,1,1).p("ACwj/QgbAJgJAEQgfAOgXACQgYADgfADQhQANgsA1QgsA1ggBKQgnBFguBEQAggCAYAWQAYAVAUAUQAcAaARAfQARAeAWAaQAxg2Apg8QAAACAKAwQA3kWCqjhQgDACgZAJQgYAIgbAJg");
	this.shape_109.setTransform(-36.7,-81.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7CC2D8").s().p("AhtDkQgRgfgcgaQgUgUgYgVQgYgWggACQAuhEAnhFQAghKAsg1QAsg1BQgNIA3gGQAXgCAfgOQAJgEAbgJIAzgRQAZgJADgCQiqDhg3EWIgKgyQgpA8gxA2QgWgagRgeg");
	this.shape_110.setTransform(-36.7,-81.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#E0DC4F").ss(1,1,1).p("AADgDIgDAAQAAACgCADQgDAGAIgLg");
	this.shape_111.setTransform(-40.2,8.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#64A1AF").ss(1,1,1).p("AANgmQgBAEgLAhQgIAggFAI");
	this.shape_112.setTransform(-10.6,7.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7CC2D8").s().p("AANgmIgMAmQgIAegFAJg");
	this.shape_113.setTransform(-10.6,7.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#64A1AF").ss(1,1,1).p("AANgiQgBAEgHAcQgFAbgMAK");
	this.shape_114.setTransform(-14.7,6.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#7CC2D8").s().p("AANghIgIAfQgFAbgMAKg");
	this.shape_115.setTransform(-14.7,6.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#6AAFBA").ss(1,1,1).p("AA0ikQgLgHgBgBQAgBogtBfQgTAlglAwQgnAwgqAMQCrAMAmipQAVg/gOhCQgGgMgQgPQgRgOgPgJg");
	this.shape_116.setTransform(28.1,29.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6AAFBA").s().p("AhuCsQAqgMAngwQAlgwATglQAthfgghoIAMAIQAPAJARAOQAQAPAGAMQAOBCgVA/QgkCeiXAAIgWgBg");
	this.shape_117.setTransform(28.1,29.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#6AAFBA").ss(1,1,1).p("ACgiOQg4gBhbAHQhZAGgsAjIgnAnQgDAHARAsQAQApAUAuQATAuAGAPQAYgyAxgZQgXgjgXgfQgXgegJgnQAggMAqABQAoABAkADQgMAdgCAhQgCAfgZAZQAmAdAxgMQADgmghgIQAOgHAWgEQgUgLgQgNQAMgBAMgCQgOgiARgkQARglAngMg");
	this.shape_118.setTransform(-18.8,9.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6AAFBA").s().p("AhtBSQgUgugQgpQgRgsADgHIAngnQAsgjBZgGQBbgHA4ABQgnAMgRAlQgRAkAOAiIgYADQAQANAUALQgWAEgOAHQAhAIgDAmQgxAMgmgdQAZgZACgfQACghAMgdQgkgDgogBQgqgBggAMQAJAnAXAeQAXAfAXAjQgxAZgYAyIgZg9g");
	this.shape_119.setTransform(-18.8,9.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#64A1AF").ss(1,1,1).p("AFChpIg8hWQhvhJiJgCQiHgDhmAYQhlAXgFAEIgnAnQBUDQA7DaIADAAQAFAFCBANQB/ANC+gtQB2gmAQhQQAPhQgZhCQgahFgFgFg");
	this.shape_120.setTransform(2.1,21.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7CC2D8").s().p("AhYEJQiBgNgFgFIgDAAQg7jahUjQIAngnQAFgEBlgXQBmgYCHADQCJACBvBJIA8BWQAFAFAaBFQAZBCgPBQQgQBQh2AmQiTAjhtAAQggAAgdgDg");
	this.shape_121.setTransform(2.1,21.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABbkUQgEgChEAIQhCAIhUApQhVAqg2BhQg2BfAYCvQACAhgDA1QgCA1AQAZQARgVAFgfQAFgfAMgcQAfg9A2gtQAYgRA8gQQA9gPApAJQAqAIgcA1QAQgSA1gKQA0gKAYgFQBAgTA+gTQg7jZhUjSg");
	this.shape_122.setTransform(-51.4,38.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6AAFBA").s().p("AktESQADg1gCghQgYivA2hgQA2hgBVgqQBUgpBCgIQBEgJAEADIBKhLQBUDSA7DYIh+AmIhMAQQg1AKgQASQAcg1gqgJQgpgIg9APQg8AQgYARQg2AtgfA8QgMAdgFAeQgFAggRAVQgQgZACg1g");
	this.shape_123.setTransform(-51.4,38.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABDlnQgJAUgcBhQgbBhgeB5QggB2gXBaQgYBaAAAFQBkA9BwAUQgagcgdgdQgcgdgQgjQgOgrgBg+QgCg9AHgwQAGgtASgtQATgtAIgxQAJgsALg6QAKg6gLgog");
	this.shape_124.setTransform(-95.6,173.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6AAFBA").s().p("AhpEXQgBgFAYhaIA3jQQAeh5AbhhQAchhAJgUQAMAogLA6IgUBmQgIAxgTAtQgRAtgHAtQgGAwABA9QABA+APArQAPAjAdAdIA3A5QhxgUhjg9g");
	this.shape_125.setTransform(-95.6,173.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#64A1AF").ss(1,1,1).p("ADTvSQgEgChEAJQhEAIhSApQhVApg2BhQg2BhAXCwQAZC3ggDxQghDwg3DnQg4DoguCYQguCZgDAGQCyBdCGAUQCFAVBMgMQBMgMABgEQAAgGAFh2QAFh2AFiXQAEiWABhnQgBhOgIiWQgHiWgLifQgKiigIhyQgIhygBgFQAggEA/gRQA/gRA7gSQA6gSAQgFQg7jahUjSg");
	this.shape_126.setTransform(-63.4,109);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#75B9C9").s().p("AhzQQQiGgUiyhdQADgGAuiZQAuiYA4joQA3jnAhjwQAgjxgZi3QgXiwA2hhQA2hhBVgpQBSgpBEgIQBEgJAEACIBKhKQBUDSA7DaIhKAXQg7ASg/ARQg/ARggAEIAJB3IASEUQALCfAHCWQAICWABBOQgBBngECWIgKENIgFB8QgBAEhMAMQgcAEgkAAQg8AAhVgNg");
	this.shape_127.setTransform(-63.4,109);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#706257").ss(1,1,1).p("AgngiQgBAbAAAYQABAbgRAYQASAAAagHQAXgIAJgRQAFgKAghdQgLADgoAKQgmALgGAEQgBACAAADg");
	this.shape_128.setTransform(-57.1,237.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#706257").s().p("Ag4BEQARgYgBgbIABgzIABgFQAGgEAmgLIAzgNQggBdgFAKQgJARgYAIQgXAHgSAAIgCAAg");
	this.shape_129.setTransform(-57.1,237.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#8C7A6C").ss(1,1,1).p("AhBAAQACAiACAuQACAugSAaQAXgHAWgKQApgTAugTQAOguALgvQALguABghQgHhAhBgHQhAgHgvADQAiBFgIBRg");
	this.shape_130.setTransform(-56.9,219.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8C7A6C").s().p("Ag9BQIgEhQQAIhRgihFQAvgDBAAHQBBAHAHBAQgBAhgLAuQgLAvgOAuQguATgpATQgWAKgXAHQASgagCgug");
	this.shape_131.setTransform(-56.9,219.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#706257").ss(1,1,1).p("AhFBeQAdgBAxgMQAzgNAHghQAAgBABgiQABgkABg5QgNAFgzASQgyASgHABQAJAfACAwQACAxgfARg");
	this.shape_132.setTransform(-109.7,173.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#706257").s().p("AgoAcQgCgwgJgfQAHgBAygSIBAgXIgCBdIgBAjQgHAhgzANQgxAMgdABQAfgRgCgxg");
	this.shape_133.setTransform(-109.7,173.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#8C7A6C").ss(1,1,1).p("ABShrQgHgsgCgEQgUAegqAVQgoAWgkAEQgCBIAPBAQAKApgIASQgHATghAUQAOgBArgNQApgOAogPQAogPADgGQABhJgChGQgBgMgHgsg");
	this.shape_134.setTransform(-111.8,154.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8C7A6C").s().p("AgyB1QAIgSgKgpQgPhAAChIQAkgEAogWQAqgVAUgeQACAEAHAsQAHAsABAMQACBGgBBJQgDAGgoAPQgoAPgpAOQgrANgOABQAhgUAHgTg");
	this.shape_135.setTransform(-111.8,154.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#706257").ss(1,1,1).p("AG0hoQguARgsASQixBFjKAWQjLAYjFg1QgEAZAGARQAGAQAeAQQBLAiBuADQBvADBRgKQB3gMBfhMQAHAXAOAVQAfgEBCgIQBDgJARgcQABgBALgdQALggAPgug");
	this.shape_136.setTransform(-95,240.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8C7A6C").s().p("AjSBoQhugDhLgiQgegQgGgQQgGgRAEgZQDFA1DLgYQDKgWCxhFQAsgSAugRIgaBOIgMAeQgRAchDAJIhhAMQgOgVgHgXQhfBMh3AMQg+AIhQAAIgygBg");
	this.shape_137.setTransform(-95,240.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#8C7A6C").ss(1,1,1).p("AF3ilQhLgghngOQhmgOhYAMQAAACgxApQgzAohmA2QhoAshGAkQhFAlgLBuQgCARgBANQDFA3DLgYQDJgXCyhGQAsgSAtgRQAPgvALgtQALgvAAgiQgDgshLggg");
	this.shape_138.setTransform(-93,221.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BFA78E").s().p("AnEC1IADgeQALhuBFglQBGgkBogsQBmg2AzgoQAxgpAAgCQBYgMBmAOQBnAOBLAgQBLAgADAsQAAAigLAvQgLAtgPAvIhZAjQiyBGjJAXQg9AHg8AAQiNAAiKgmg");
	this.shape_139.setTransform(-93,221.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#8C7A6C").ss(1,1,1).p("AF3jLQhLgghmgOQhngOhXAMQAAACgyApQgzAohmA2QhoAshFAmQhGAjgLBuQgFArABAWQACAWAlATQBLAiBuADQBvADBRgKQB3gMBfhMQAHAXAOAVQAggEBBgIQBDgJARgcQACgDASgzQASg0ARhAQAThDABguQgEgshLggg");
	this.shape_140.setTransform(-93.1,224.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BFA78E").s().p("AjlEAQhugDhLgiQgkgTgDgWQgCgWAHgrQAKhuBGgjQBFgmBpgsQBlg2A0goQAxgpAAgCQBXgMBnAOQBnAOBKAgQBLAgAEAsQgCAugRBDQgSBAgSA0IgTA2QgSAchDAJIhhAMQgOgVgHgXQhfBMh3AMQg+AIhQAAIgygBg");
	this.shape_141.setTransform(-93.1,224.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#C95050").ss(1,1,1).p("AGIhOQgggMgvAAQhXABhYAIQgsACh5AKQh6AKh9AYQh8AZgzAtQgQAQgBAUQAqAYBBgFQBBgEAwgHQCCgOCAgNQB7gIB1geQAxgMA/gIQA/gLAogkQgrgOgggLg");
	this.shape_142.setTransform(-3.5,48.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#C95050").s().p("AnSBHQABgUAQgQQAzgtB9gZQB8gYB6gKQB5gKAsgCQBXgIBYgBQAuAAAhAMIBLAZQgpAkg+ALQg/AIgxAMQh2Aeh6AIIkBAbQgxAHhBAEIgVABQgzAAgjgUg");
	this.shape_143.setTransform(-3.5,48.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#64A1AF").ss(1,1,1).p("AiNi2QgIgCAtBVQAuBVDJDF");
	this.shape_144.setTransform(30,-90);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#6AAFBA").ss(1,1,1).p("ACTgcQAFgFgSgXQgSgXgEgGQgCAEguAEQguADgwABQgyABgOgCQAUAWAKAeQgZAKgSgNQgSgNgXgIQACATACAVQA6AuA3AuQgDgxANgPQAHgJASgLQAegOAogEQAogFAhgHg");
	this.shape_145.setTransform(47.2,-81.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6AAFBA").s().p("AiQgGIgEgoQAXAIASANQASANAZgKQgKgegUgWQAOACAygBQAwgBAugDQAugEACgEQAEAGASAXQASAXgFAFQghAHgoAFQgoAEgeAOQgSALgHAJQgNAPADAxIhxhcg");
	this.shape_146.setTransform(47.2,-81.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#6AAFBA").ss(1,1,1).p("ADHg7QhBAehCAPQhBAOgDAAQgOgFgNgJQgXgKgYAEQglAKgjARQgkASgnAMQgkAGgkAFQAaAHAZAMQAYAMAcACQgDABAAADQAnACAegTQAcgUAigLQBMgKBRAJQBEAHArgrQAkgzA0ghQgyAEgtAVg");
	this.shape_147.setTransform(-6.3,-107.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6AAFBA").s().p("AjBBVQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQgcgCgYgMQgYgMgbgHIBIgLQAngMAlgSQAigRAmgKQAXgEAXAKQANAJAOAFQACAABCgOQBCgPBBgeQAtgVAygEQg0AhgkAzQgrArhEgHQhRgJhMAKQgiALgdAUQgaARghAAIgJAAg");
	this.shape_148.setTransform(-6.3,-107.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#6AAFBA").ss(1,1,1).p("ADNgMQhmADhngSQhlgRhmATQAAgEAAgDQgEAcAdADQAcABAXAAQA3AFA5gCQBvgCBnAjQABgGABgVQACgSACgDg");
	this.shape_149.setTransform(36.6,-113.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6AAFBA").s().p("AgPADQg5ACg3gFQgXAAgcgBQgdgDAEgcIAAAHQBmgTBlARQBnASBmgDQgCADgCASIgCAbQhngjhvACg");
	this.shape_150.setTransform(36.6,-113.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#64A1AF").ss(1,1,1).p("ADBjOQgWgBhpgKQhogLhiAAQhiAAAAAeQAQBHAnBEQAuBSBABEQBABFBCBEQgBgrADgXQADgWAlgVQAQgHA2gNQA2gNAJAGQgQhGgUhMQgVhPAOhJg");
	this.shape_151.setTransform(37.8,-93.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#7CC2D8").s().p("AhFBbQhAhEguhSQgohDgPhIQAAgdBiAAQBiAABnAKQBqAKAVABQgNBKAUBOQAVBMAPBGQgIgGg2ANQg2ANgQAHQglAVgDAWQgEAXACAsQhDhFg/hFg");
	this.shape_152.setTransform(37.8,-93.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#AF4848").ss(1,1,1).p("AHeh4QgZgXiWgBQiXgBjWAcQjYAcjeA/IAiCkQAGACCUAEQCUAEDZgJQDbgJDcgmQACgHAFhIQAGhFgTgzQgDgHgFgGg");
	this.shape_153.setTransform(0.5,53.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF6666").s().p("Ak4CQQiUgEgGgCIgiikQDeg/DYgcQDWgcCXABQCWABAZAXQAFAGADAHQATAzgGBFQgFBIgCAHQjcAmjbAJQiWAGh1AAIhigBg");
	this.shape_154.setTransform(0.5,53.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#706257").ss(1,1,1).p("AH0h8QjoBgj5AfQj4Aij4ghQgJArACArQgIACgHgBQC9AnDZgGQDXgGCmh2QANAmAEAoQAfgMBLgMQBLgMALgmQAAgBABgiQABgkABg5g");
	this.shape_155.setTransform(-152.7,176.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#8C7A6C").s().p("AnzBbQAHABAIgCQgCgrAJgrQD5AhD3giQD5gfDohgIgCBdIgBAjQgLAmhLAMQhLAMgfAMQgEgogNgmQimB2jWAGIg2ABQi7AAimgig");
	this.shape_156.setTransform(-152.7,176.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#8C7A6C").ss(1,1,1).p("AFWj1QhsAehoAyQhnAygJAGQg6Akg4AiQg3AjhGAIQhAAGg0AXQgzAWgrA4QgrA5gOBJQD4AiD4giQD5giDohfQABhZgDheQgDhhgNg4QgWg0hrAfg");
	this.shape_157.setTransform(-151.6,152.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BFA78E").s().p("AnoDxQAOhJArg5QArg4AzgWQA0gXBAgGQBGgIA3gjQA4giA6gkQAJgGBngyQBogyBsgeQBrgfAWA0QANA4ADBhQADBegBBZQjoBfj5AiQh8ARh9AAQh8AAh7gRg");
	this.shape_158.setTransform(-151.6,152.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#8C7A6C").ss(1,1,1).p("AFgkqQhsAfhnAyQhoAygIAGQg7Ajg3AjQg4AihGALQhAAGgzAWQg0AVgrA3QhEBfAEB6QgHACgHgBQC9AnDZgGQDXgGCmh4QAMAoAFAnQAegLBLgMQBLgMALgmQABgFAChaQAChbgDhrQgChtgOg/QgWg0hsAeg");
	this.shape_159.setTransform(-152.6,157.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#BFA78E").s().p("AnzEUQAHABAHgCQgEh6BEhfQArg3A0gVQAzgWBAgGQBGgLA4giQA3gjA7gjQAIgGBogyQBngyBsgfQBsgeAWA0QAOA/ACBtQADBrgCBbIgDBfQgLAmhLAMQhLAMgeALQgFgngMgoQimB4jXAGIg6ABQi4AAikgig");
	this.shape_160.setTransform(-152.6,157.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EABF9B").s().p("AiHBhQAcgBASgTIAkgnQAiglAYgnQAbgqAjgmQAlgtAUg3QAPApgFAoQgJAXgQAUQglA1grAuQg2BBg8A9IALAuQAIAcANAOQg4gzgahHg");
	this.shape_161.setTransform(-53.3,-44.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#CB9966").ss(1,1,1).p("AAUm8QgFAGg/BSQhCBThCBcQhBBcgFAiQgFAsArBdQArBeCOCFQCMCAAzAHQAzAHADg9QgCg9hMh9QhMh8gpiHQAEgDAxgzQAxg0A2hDQA2hCASgt");
	this.shape_162.setTransform(-64.3,-25.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F4D3B0").s().p("ACkG8QgzgHiMiAQiOiFgrheQgrhdAFgsQAFgiBBhcQBChcBChTIBEhYIDnBpQgSAtg2BCQg2BDgxA0Ig1A2QApCHBMB8QBMB9ACA9QgDA3gpAAIgKgBg");
	this.shape_163.setTransform(-64.3,-25.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EABF9B").s().p("AjWAsQgKgVAAgTQAxAJAygGIArgDQBJAABFAJQA3AEA3gFQAIgmgEgrQAHAgAUAdIAYA+QgoAEgpgDQgogDgoADQhaAHhcAAQgjAIghAAQgSgGgKgUg");
	this.shape_164.setTransform(69.3,-114.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#CB9966").ss(1,1,1).p("ADRgwQgfg+hOgRQghgGhAgDQg+gEg7gBQg7gBgTABQgOAGgFAqQgFApAAANQACAyAWAqQAWAqANAwQB2gOB6gEQAkgCAcgGQAcgGAXgeQAthFgeg8g");
	this.shape_165.setTransform(77.7,-100.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F4D3B0").s().p("AjEA0QgWgqgCgxQAAgNAFgqQAFgpAOgGQATgBA7ABQA7ABA+ADQBAAEAhAFQBOARAfA+QAeA9gtBFQgXAegcAGQgcAGgkACQh6AEh2AOQgNgwgWgrg");
	this.shape_166.setTransform(77.7,-100.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#C95050").ss(1,1,1).p("AI8jvQgahGhAgdQhrglh4gBQiSgKiSgDQiUgCiSAWQg/AJhHAWQhHAXgnA2QggA2AXA6QATBJARBHQASBEgBBOQgLBkA2BSQAqAwA4AEQA5ADA8gDQCjgDCjgEQBEAEBXAMQBYANA+gPQBOgcAvhOQAwhOAZhcQAZhdAKhHQANhYgghdg");
	this.shape_167.setTransform(9.8,-53.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C95050").s().p("ADQGAQhXgMhEgEIlGAHQg8ADg5gDQg4gEgqgwQg2hSALhkQABhOgShEIgkiQQgXg6Agg2QAng2BHgXQBHgWA/gJQCSgWCUACQCSADCSAKQB4ABBrAlQBAAdAaBGQAgBdgNBYQgKBHgZBdQgZBcgwBOQgvBOhOAcQgiAIgpAAQgjAAgogGg");
	this.shape_168.setTransform(9.8,-53.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#AF4848").ss(1,1,1).p("AKelAQg3hNh3gWQh4gWhZgHQkZgmkUAiQhcAKhaATQg/AOhQAqQhQAqgSBFQgJBhAlBnQAkBlAPBgQADBYANBZQANBYBbAuQA9AXA/gSQA/gTA9gNQBIgLBVgDQBUgCBFAQQCMAkCSAIQBRAEA9gkQA9glAZhNQAdheAehmQAfhlAPhhQAKg8AChEQADhFgcg0g");
	this.shape_169.setTransform(13.2,-52.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF6666").s().p("AFeHVQiSgIiMgkQhFgQhUACQhVADhIALQg9ANg/ATQg/ASg9gXQhbgugNhYQgNhZgDhYQgPhggkhlQglhnAJhhQAShFBQgqQBQgqA/gOQBagTBcgKQEUgiEZAmQBZAHB4AWQB3AWA3BNQAcA0gDBFQgCBEgKA8QgPBhgfBlIg7DEQgZBNg9AlQg2AghGAAIgSAAg");
	this.shape_170.setTransform(13.2,-52.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-0.6,-0.1,7.6,-0.1).s().p("AgbLsQg4gQgEgFIAA3CICvgFIAAXHQgrAagoAAQgPAAgRgFg");
	this.shape_171.setTransform(-7.3,138.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#9E9E9E").ss(1,1,1).p("AmBglQAEAFBuAhQBvAjCpAFQCqgFBmgkQBmgjADgF");
	this.shape_172.setTransform(-8.4,219.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-34.6,-2.9,29.1,2.4).s().p("AmiCUQing7gHhZQAHhYCng7QCng7D7gCQD8ACCnA7QCoA7AGBYQgGBZioA7QinA7j8ACQj6gCiog7gAlZgjQACAFBXAeQBWAgCUAFQCSAFC6hNQgDgDhbgZQhagYiTgEIgQAAQiOAAimA4g");
	this.shape_173.setTransform(-4.2,220.1);

	this.addChild(this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203.7,-251.5,407.5,503.2);


(lib.boy1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAAQACgJARgBQASABACAJQgCALgSAAQgRgBgCgKg");
	this.shape.setTransform(2.3,-179.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAHIAtgiIgMA3QghgPAAgGg");
	this.shape_1.setTransform(-2.1,-174.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgxAAQAFApAsAFQAugFAEgpQgEgogugEQgsAEgFAog");
	this.shape_2.setTransform(0.8,-177.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A5C9FF").s().p("AgwAAQAEgoAsgEQAuAEAEAoQgEApguAEQgsgEgEgpg");
	this.shape_3.setTransform(0.8,-177.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5885C6").ss(0.3,1,1).p("AhHAAQAGA8BBAGQBCgGAGg8QgGg7hCgGQhBAGgGA7g");
	this.shape_4.setTransform(0.8,-177.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#74AAFF").s().p("AhHAAQAGg7BBgGQBCAGAGA7QgGA8hCAGQhBgGgGg8g");
	this.shape_5.setTransform(0.8,-177.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CB9966").ss(1,1,1).p("AhChpQgLAYABAkQACAkASATQAyA3AGAWQADAMANAJQAMAIAdgTQAbgUgJgNQgJgMgHgPQgEgMgCgKQgDgKgLghQgLghgHgIQgIgJgKgf");
	this.shape_6.setTransform(177.2,-118.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4D3B0").s().p("AAQBsQgNgJgDgMQgGgWgyg3QgSgTgCgkQgBgkALgYIBFgEQAKAfAIAJQAHAIALAhIAOArIAGAWQAHAPAJAMQAJANgbAUQgVANgMAAQgFAAgDgCg");
	this.shape_7.setTransform(177.2,-118.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EABF9B").s().p("AgRAUQgQgRgBgSQAOAOAbABQAcABgHgZQADAHADASQADATgJADQgIACgKAAQgLAAgQgFg");
	this.shape_8.setTransform(-68.9,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EABF9B").s().p("AgVAWQgSgOACgUQAIANAUABQATAAAOgEQAGgLgBgPQADAIAFAUQAFAXgMACQgJAEgLAAQgNAAgSgHg");
	this.shape_9.setTransform(-60.3,-5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EABF9B").s().p("AgKAZQgegMAEghQAQAKAZAEQAcAFADgZQADAagEAZQAAACgLAAQgMAAgWgCg");
	this.shape_10.setTransform(-53,-4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EABF9B").s().p("AgYAXQgQgRAAgTQAGAAAhAFQAgAGACghQAKAJgDAaQgDAYgMAIQgKAEgJAAQgQAAgOgNg");
	this.shape_11.setTransform(-43.1,-4.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CB9966").ss(1,1,1).p("AAUghQgPgRgWADQgZALAIAfQACAdASATQAaAKATgHQAIgDgCgYQgCgVgBgDg");
	this.shape_12.setTransform(-69.2,-8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4D3B0").s().p("AgOArQgSgTgCgdQgIgfAZgLQAWgDAPARIAOAcIADAYQACAYgIADQgIADgKAAQgNAAgOgGg");
	this.shape_13.setTransform(-69.2,-8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CB9966").ss(1,1,1).p("AAWglQgRgUgZAEQgcAMAJAjQACAhAUAWQAeALAWgIQAIgEgCgaQgCgYgBgEg");
	this.shape_14.setTransform(-60.8,-7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4D3B0").s().p("AgRAxQgUgWgCghQgJgjAdgMQAYgEARAUIAQAfIAEAcQABAagIAEQgJADgLAAQgPAAgRgGg");
	this.shape_15.setTransform(-60.8,-7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CB9966").ss(1,1,1).p("AAbgvQgvgUgOAXQgMAYAIAVQADANACARQACASAWAGQAtAFAAgFQACgGAEgpQAEgogTgPg");
	this.shape_16.setTransform(-53.1,-7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4D3B0").s().p("AgJA3QgWgGgCgSQgCgRgDgNQgIgVAMgYQAOgXAvAUQATAPgEAoQgEApgCAGQAAACgMAAQgMAAgVgCg");
	this.shape_17.setTransform(-53.1,-7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CB9966").ss(1,1,1).p("AAhhAQgNgPgpAPQgjASANApQAJArATAWQATATAdgKQAMgHACgZQACgZgDgMQgBgJgBgWQAAgWgLgLg");
	this.shape_18.setTransform(-44,-8.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4D3B0").s().p("AgPA8QgTgWgJgrQgNgpAjgSQApgPANAPQALALAAAWIACAfQADAMgCAZQgCAZgMAHQgJAEgJAAQgQAAgOgNg");
	this.shape_19.setTransform(-44,-8.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CB9966").ss(1,1,1).p("AA2AoQgBgCgggcQgegZgsgY");
	this.shape_20.setTransform(-67.4,-48.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C95050").ss(1,1,1).p("AgzjyQAFgdAMgBQAKgFAGgEQAHgEAaAEQA3ACAIALQAGAMgEAcQgDAcgCARQAAAOgGBZQgGBXgJBlQgJBkgLAvQABACgCANQgCANgSABQgqgGgHgGQgCAAgOgGQgOgGgKgNQgHgTADhvQAEhuALhyQAKhpAEgeg");
	this.shape_21.setTransform(184.5,-119.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6666").s().p("AgkEQIgQgGQgOgGgKgNQgHgTADhvQAEhuALhyQAKhpAEgeQAFgdAMgBIAQgJQAHgEAaAEQA3ACAIALQAGAMgEAcIgFAtQAAAOgGBZQgGBXgJBlQgJBkgLAvQABACgCANQgCANgSABQgqgGgHgGg");
	this.shape_22.setTransform(184.5,-119.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C95050").ss(1,1,1).p("AAekrQAAAFgFBRQgEBRgIBvQgIBtgJBdQgLBcgOAb");
	this.shape_23.setTransform(190.3,-116.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6666").s().p("AAekrIgFBWQgEBRgIBvQgIBtgJBdQgLBcgOAag");
	this.shape_24.setTransform(190.3,-116.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D86464").s().p("AATFPQhWgIAAgBQgCAAgHgEQgJgFACgVQARiIAJiJQAJhmALhnQACgRAKg3QAKg3APgWQAIgHAJAJQAOATgGApIgJA/QgFBegDBfQgEAogIAoQgKApgCArQgDAlATAeQAQASAXACQAWADAQAPQAMAQgHARQgGARADARQACACgIAIQgGAGgfAAIgRAAg");
	this.shape_25.setTransform(190.4,-111.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#C95050").ss(1,1,1).p("AgflAQgCgEALgYQAMgYAzgEIAuADQAAgGAGAGQAGAGAEBaQACBIgJCMQgICKgLB/QgLCAgHAhQADACgIAIQgHAIgvgCQhXgHABgBQgDAAgHgFQgIgEACgWQADgXAMiJQAMiJAPiUQAQiWANg/g");
	this.shape_26.setTransform(192.4,-116.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6666").s().p("AAAF5QhWgHAAgBQgCAAgIgFQgIgEACgWQADgXAMiJQAMiJAPiUQAQiWAOg/QgDgEAMgYQALgYAzgEIAuADQAAgGAHAGQAFAGAEBaQACBIgICMQgJCKgLB/QgLCAgGAhQACACgIAIQgFAGggAAIgRAAg");
	this.shape_27.setTransform(192.4,-116.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AF761B").s().p("AACAFQgDgtgUgeQAFgBAFAAQgDgFAAgGQAIAAAFAEIgHgKIAIAMIAIALQAPAbgBAmQgCA2gWAjQAJgjgFgxg");
	this.shape_28.setTransform(3,-221.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AF761B").s().p("AgMBGQAEgMADgMQAMgWgBg0QgChFgLgcQAbA6ALA+QAAA9ggA0QANgjgBgoQgLAXgMAbQgNAWgEAVQAFgcAMgcg");
	this.shape_29.setTransform(15.6,-209);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#C95050").ss(1,1,1).p("AAOB0QAAgEAEg0QADg0ACg0QADg2gFgKQgHgSgKAeQgIAegTCy");
	this.shape_30.setTransform(188.7,-156.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6666").s().p("AgXBwQATiyAIgeQAKgeAHASQAFAKgDA2QgCA0gDA0IgEA4g");
	this.shape_31.setTransform(188.7,-156.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AF761B").s().p("AgMAmQgVgugDg2IAMAmQAGAXANAJQAAgcAPgYQASgYAJgaQgFAwgTAsIASgpQgLAqgJAvQgGAZADAYQgIgdgMgcg");
	this.shape_32.setTransform(-20.5,-218.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#8C7A6C").ss(1,1,1).p("ADDgVIgNAFQgwAQg6ADQhDAEgXg8QgcAKgeAFAgPg3QgMADgOAEQgPAEgQAGAC2gQQhIAchoAYQhwAbhYgKQAMgvA9gYQAagLAXgJQgIACgIAB");
	this.shape_33.setTransform(-177,148);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8C7A6C").s().p("Ai8A0QANgvA9gYIAxgUQAdgFAcgKQAYA8BDgEQA6gCAwgRQhJAchoAYQhRAUhGAAQgZAAgYgDg");
	this.shape_34.setTransform(-177.6,148.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#8C7A6C").ss(1,1,1).p("Aj+gbQgNAOgHAVQCHBDCKgoQBDgOBHgRQAhgJAigRQAjgRAkgDQhLAChGANQhGANhLgBQhEgIg9gRQgpgIgVAGQgSAGgeAJQgGACgIADAjDgxQglABgVAUQAAABgBAA");
	this.shape_35.setTransform(-101.7,211.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8C7A6C").s().p("AkSAIQAHgVANgOIAwgPQAVgGApAIQA9ARBEAIQBLABBGgNQBGgNBLgCQgkADgjARQgiARghAJQhHARhDAOQgzAPgzAAQhWAAhVgqgAjDgxIg6AVQAVgUAlgBg");
	this.shape_36.setTransform(-101.7,211.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#64A1AF").ss(1,1,1).p("AhpDjQAAgFAVhQQAVhQAvhnQAthpBNhP");
	this.shape_37.setTransform(-22.9,-95.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AF761B").s().p("AhHAkQgLAPADAQQgHgcAIgbQASghAagdIgFATQAKgNAEgPIABAXQAegbAMgoQAEAsgQApQAbgUAVgZQgDATgPASQgOAQgJAQQAmgMAhgZIgZAsQgNAZgWAMIgwAQQgbAIgCAeQgWgfAEglg");
	this.shape_38.setTransform(20.7,-190.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#64A1AF").ss(1,1,1).p("AAQAAQgBAPgPABQgOgBgBgPQABgOAOgBQAPABABAOg");
	this.shape_39.setTransform(-115.6,131.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#64A1AF").ss(1,1,1).p("AAQAAQgBAPgPABQgOgBgBgPQABgOAOgBQAPABABAOg");
	this.shape_40.setTransform(-55.6,194.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#64A1AF").ss(1,1,1).p("ACMs9QgDABgsANQgsAOgyAPQgzAQgbAIQggANgFAZQgEAZABADIAUAoIgaAbIAaAoIgaA8QAAAIAFCwQAFCxADDyQADD1gFDVQgFDWgUBU");
	this.shape_41.setTransform(-46.9,115.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#64A1AF").ss(1,1,1).p("AMKqeQABAJgRBJQgRBJgrAhQgBgBgOABQgNABgMARQgMASgNgBQgOgBgBgBQgGgBiCgPQiCgQivgUQiugUiJgOQiMgOgZACQgJgBgNAQQgCAXgYACQgMAAACAUQACAUABADQACACgCAMQgCAMgXAHQgXAJACAaQABAbACADQgCAGgpB+QgpB+g7CsQg7Cvg4CYQg5CZghA6QgBADgLAYQgMAYgMAS");
	this.shape_42.setTransform(-46,69.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAAQACgHAMgBQAOABABAHQgBAIgOABQgMgBgCgIg");
	this.shape_43.setTransform(-23.6,-177.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAGIAhgcIgJAsQgYgMAAgEg");
	this.shape_44.setTransform(-26.9,-172.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgkAAQAEAiAgADQAigDADgiQgDghgigDQggADgEAhg");
	this.shape_45.setTransform(-24.8,-175.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,3.8).s().p("AgkAAQAEghAggDQAiADADAhQgDAigiADQgggDgEgig");
	this.shape_46.setTransform(-24.8,-175.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#5885C6").ss(0.3,1,1).p("Ag1AAQAFAxAwAFQAxgFAFgxQgFgwgxgFQgwAFgFAwg");
	this.shape_47.setTransform(-24.7,-175.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,5.4).s().p("Ag1AAQAFgwAwgFQAxAFAFAwQgFAxgxAFQgwgFgFgxg");
	this.shape_48.setTransform(-24.7,-175.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EABF9B").s().p("AgLgRQASgIAVAGQgQACgTAMQgVAKABASQgCgXASgRg");
	this.shape_49.setTransform(23.8,-179.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CB9966").ss(1,1,1).p("AAagOQgCgCgUACQgTACgKAc");
	this.shape_50.setTransform(23.4,-180.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4D3B0").s().p("AAEgOQAUgCACACIgzAeQAKgcATgCg");
	this.shape_51.setTransform(23.4,-180.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#AF761B").ss(1,1,1).p("ABNAhQgDgHgtgiQgsgkg9ATQACAAAsAQQAqANBBAdg");
	this.shape_52.setTransform(-4.1,-194);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E8A225").s().p("AgegJIgugQQA9gTAsAkQAtAiADAHQhBgdgqgNg");
	this.shape_53.setTransform(-4.1,-194);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#AF761B").ss(1,1,1).p("AAxgxQgEgHgjAIQghAHgYBfQACgFAggpQAegnAggSg");
	this.shape_54.setTransform(-26.9,-193);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E8A225").s().p("AAKgwQAjgIADAHQgfASgeAnQggApgDAFQAZhfAhgHg");
	this.shape_55.setTransform(-26.9,-193);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABRA4QAFgJgag8Qgag+hxgFQgDAFADA1QACAzAiAlQAhAkBbgug");
	this.shape_56.setTransform(-25.6,-176);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F3F8FF").s().p("AgrBCQgiglgCgzQgDg1ADgFQBxAFAaA+QAaA8gFAJQg0AZgfAAQgaAAgPgPg");
	this.shape_57.setTransform(-25.6,-176);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EABF9B").s().p("AgrBCQgiglgCgzQgDg1ADgFQBxAFAaA+QAaA8gFAJQg0AZgfAAQgaAAgPgPg");
	this.shape_58.setTransform(-25.8,-174.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#CB9966").ss(0.5,1,1).p("AA/BAQglArh5gdQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqg");
	this.shape_59.setTransform(0.3,-178.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F3F8FF").s().p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQgWAZgzAAQgkAAgxgLg");
	this.shape_60.setTransform(0.3,-178.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CB9966").ss(1,1,1).p("AgcACQAJgFAwAC");
	this.shape_61.setTransform(-15.4,-162.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4D3B0").s().p("AAdgBIg5ADQAJgFAwACg");
	this.shape_62.setTransform(-15.4,-162.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EABF9B").s().p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQgWAZgzAAQgkAAgxgLg");
	this.shape_63.setTransform(1.6,-177.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#B77070").ss(0.3,1,1).p("AibgTQAKADAqAKQA1AKBFgQQBIgSA5hWQACADAIAyQAHAxgUA1QgVA3hSATQhPANgfgdQgegdgPgmQgNgigdgPQgEgCAAAA");
	this.shape_64.setTransform(-6.3,-140);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#FF9999","#000000"],[0,1],0.8,6.1,-0.1,-2.2).s().p("AhGBhQgegdgPgmQgNgigdgPQAKADAqAKQA1AKBFgQQBIgSA5hWQACADAIAyQAHAxgUA1QgVA3hSATQgZAEgSAAQgtAAgWgUg");
	this.shape_65.setTransform(-6.1,-140);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CB9966").ss(1,1,1).p("AAoh4QgBAHgCAeQgCAkgCAMQgGAKgaATQgXAQgDACQgHAEgHAnQgGAmBOAc");
	this.shape_66.setTransform(-20.4,-160.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F4D3B0").s().p("AgnA3QAHgnAHgEIAagSQAagTAGgKQACgMACgkIADglIgHDxQhOgcAGgmg");
	this.shape_67.setTransform(-20.4,-160.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#AF761B").s().p("AAAAiQgOgYgLgZQgMgPgGgSQAWAUAWASQABgKgGgWQgIgVgIgIIAkAdQgLgUgHgUIAUAQQALACAHAJQAMArgGAsIgBAaQgBATADAGQgYgYgTgZg");
	this.shape_68.setTransform(-38.7,-188);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AF761B").s().p("AgLATQgUgwgUgZQAXAYATAbIAbAfQAVAYANgEQgNAHgLAAQgaAAgNgkg");
	this.shape_69.setTransform(-35.5,-206);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AF761B").s().p("AAiBTIgRgGQgOgKgIgOQgihAgHhMQACASALAPIAfA7QAXArAaAoIgNgFg");
	this.shape_70.setTransform(-28.2,-210.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#6AAFBA").ss(1,1,1).p("AgphLQBHBNAIAlQAHAmgEgB");
	this.shape_71.setTransform(-48,-74.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#CB9966").ss(1,1,1).p("AgOhUQADAEAPA2QASAzgKA8");
	this.shape_72.setTransform(193.8,-109.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F4D3B0").s().p("AgOhUQADAEAPA2QASAzgKA8g");
	this.shape_73.setTransform(193.8,-109.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#E0DC4F").ss(1,1,1).p("AAAAwQgMgvARgw");
	this.shape_74.setTransform(14.3,-116.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFF99").s().p("AAFgvIgFBfQgMgvARgwg");
	this.shape_75.setTransform(14.3,-116.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFF99").s().p("AgbAZIAAgcQABgOAEgOQAHgLAEgLIAUA0QAHATANARQgPgJgOAKQgOAFgGALIgCABIgFgcg");
	this.shape_76.setTransform(16.5,-116.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#E0DC4F").ss(1,1,1).p("AB0g0QhCADg+ANQhAARg/ATQg0AWgrAUQBkgUBpAEQBgAIBeAHQgzARhBgCQg+gDg4gCQhKgChDARQgZAPgfAAQAAgbAOgWQgDAAgCAAQgQACgPACQA/gyBagWQBagWBOgOQCMgcB8BJQgfgRg3gFQg4gGgjADg");
	this.shape_77.setTransform(2.9,-57.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E0DC4F").s().p("AkAAgIgFAAIgfAEQA/gyBagWQBagWBOgOQCMgcB8BJQgfgRg3gFQg4gGgjADQhCADg+ANQhAARg/ATIhfAqQBkgUBpAEIC+APQgzARhBgCIh2gFQhKgChDARQgZAPgfAAQAAgbAOgWg");
	this.shape_78.setTransform(2.9,-57.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#AF761B").s().p("AgaBDQAVgnAEgiQAHg2gIgzQACASAMATQAJAYAAAbQABA0gXAuQAfgZATgiQAMgogEgtQAFAmAEAmQgEAWgMAPQgYAcgkAPQgeANgZANQAYgQAPgeg");
	this.shape_79.setTransform(-9,-213.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#AF761B").s().p("AgNBSQgEgaAFgIIgNANIgNANIgDgSIgCgWQgBgeAPgXQAhgrAFg3QgDA4ABA4QAPgYAWgOQgEAVgOAUQgNATgIAVQgLAogBAoIgGgkg");
	this.shape_80.setTransform(7,-206.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#AF761B").ss(1,1,1).p("AEHiIQALBLAJBNQAcgVAggYQgLAzAEA3QAYgCAWgIQgQARgRAdQAXAMAfgEQgHANglAxQglAxgDAGQgGgCguADQguAEgQAqQgDgBgXgYQgYgYgDgfIAAAoQgDgBgUguQgVgugDhQIgaAaIgbhQQgCABgQAMQgRAMgMAPQgHALABgbQABgaAAgEQgBADgmAZQgmAZg2AMQg1AMgxglIgUAaQgLABgRABQgSABgFgKQgCAbAHAcQACAcgCAcQgDA3gFAzQAAgOgOgUQgOgUgJgMQgYgfgQgjQgDgmgPgkQAhACAXAWQAAgsgKgrQgKgqADgrQAKAHAEAMQADAMAOAEQAPhSAZhEQgDAYAOAXQANAYAIAWQAVgdAUggQAJgjAYgbQAEAhALAeQAUgMAOgVQAPgVARgNQAVA0ANgtQANgtAAgiQAJAaAeAkQAbAjAZAVQAUgPADgTQACgUAhAVQAiAYAWAlQAQgGAHgNQAGgNAOgJQgNAUAHAYQAUgGAVgHQgBAZARAUQAPgMAHgSg");
	this.shape_81.setTransform(-4.9,-208.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E8A225").s().p("AlBD+IgXggQgYgfgQgjQgDgmgPgkQAhACAXAWQAAgsgKgrQgKgqADgrQAKAHAEAMQADAMAOAEQAPhSAZhEQgDAYAOAXQANAYAIAWQAVgdAUggQAJgjAYgbQAEAhALAeQAUgMAOgVQAPgVARgNQAVA0ANgtQANgtAAgiQAJAaAeAkQAbAjAZAVQAUgPADgTQACgUAhAVQAiAYAWAlQAQgGAHgNQAGgNAOgJQgNAUAHAYIApgNQgBAZARAUQAPgMAHgSQALBLAJBNIA8gtQgLAzAEA3QAYgCAWgIQgQARgRAdQAXAMAfgEQgHANglAxQglAxgDAGQgGgCguADQguAEgQAqQgDgBgXgYQgYgYgDgfIAAAoQgDgBgUguQgVgugDhQIgaAaIgbhQIgSANQgRAMgMAPQgHALABgbIABgeQgBADgmAZQgmAZg2AMQg1AMgxglIgUAaIgcACQgSABgFgKQgCAbAHAcQACAcgCAcQgDA3gFAzQAAgOgOgUg");
	this.shape_82.setTransform(-4.9,-208.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EABF9B").s().p("AATGcQgSgUgMgWQgXgmgIgtQgJg3AHhpQAHhoAKhXIALhdQgThTAFhWQACgaAIgjQAIgkASgRQgDAcgGAdQACAdAHAbQAPAzgDA4QgFAvgJAvQgEAzABAzQgBAugBAyQAAAYgEAXIAEAwIgHBTQgDAoAKArQAWA3AbA0QgNgOgQgOg");
	this.shape_83.setTransform(-32.6,-168.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CB9966").ss(1,1,1).p("AB9nEQhTgbhxgRQhzgRhKBDQhKBDApDjQgBAFgLBYQgKBWgHBpQgHBpAJA3QALBRBSBEQBSBEDLgKQCJgOAzhLQAzhMAAheQABhegNhDQgPhZgDgUIgCgQQAFADAegJQAegKgFg5QgGgrgShGQgShGgphAQgpg/hMgXg");
	this.shape_84.setTransform(-4.8,-169);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F4D3B0").s().p("AjjG5QhShEgLhRQgJg3AHhpQAHhpAKhWIAMhdQgpjjBKhDQBKhDBzARQBxARBTAbQBMAXApA/QApBAASBGQASBGAGArQAFA5geAKQgeAJgFgDIACAQIASBtQANBDgBBeQAABegzBMQgzBLiJAOIgwABQilAAhIg7g");
	this.shape_85.setTransform(-4.8,-169);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#64A1AF").ss(1,1,1).p("AgGBdQgCgHgDhCQgChBAZgv");
	this.shape_86.setTransform(-34.2,-86.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7CC2D8").s().p("AgLATQgChAAZgvIgSC5QgCgHgDhDg");
	this.shape_87.setTransform(-34.2,-86.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EABF9B").s().p("Ah0ATQgCgtgRgPQBCAgBFgNQBHgMA0g1QACAaAIAbQAJAbgOATQgjAcgsADIijAuIgChGg");
	this.shape_88.setTransform(0,-120.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#CB9966").ss(1,1,1).p("ACcAbQgEABgUgaQgWgYgHhTQgBADgiAaQgiAZg5ANQg6AOhKgiQACAAAKAqQALAogDBMQgEADAnADQAmACB9gpg");
	this.shape_89.setTransform(2,-119.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F4D3B0").s().p("AhkBqQgngDAEgDQADhMgLgoQgKgpgCgBQBKAiA6gOQA5gNAigZQAigaABgDQAHBTAWAYQAUAaAEgBIhdAoQh2AngpAAIgEAAgAibg6IAAAAIAAAAg");
	this.shape_90.setTransform(2,-119.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABOAyQgQAwgjBNQgiBNg1AxQg2AwhGglQArAZA8ANQA8AOAxAIQARgDAahmQAZhmAbiMQAaiKARhzQAShzABgcQgPA4gSA3QgIA5gGA5QgTBngpBdg");
	this.shape_91.setTransform(-103.8,111);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6AAFBA").s().p("AhRFeQg8gNgrgZQBGAlA2gwQA1gxAihNQAjhNAQgwQAphdAThnQAGg5AIg5QASg3APg4QgBAcgSBzQgRBzgaCKQgbCMgZBmQgaBmgRADQgxgIg8gOg");
	this.shape_92.setTransform(-103.8,111);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#64A1AF").ss(1,1,1).p("ANsqVQgEgDiUglQiTgljwgaQjwgakXAdQgCgDgdAXQgcAYgcBgQgNA4g6CZQg6CahXC+QhWC8hlCiQhmCjhlBIQAEAEBkA3QBkA3COA9QCOA+CEAXQADgGAuinQAuinAzj2QAyj1ARj3QABgFAQgzQAPgzAUgaQAagQBIANQBIANAkADQAYACBPAQQBQAQBgAQQBiAQBNAB");
	this.shape_93.setTransform(-75.3,70.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7CC2D8").s().p("AoRK0QiNg9hkg3Qhkg3gFgEQBlhIBlijQBmiiBWi8QBYi+A5iaQA6iZANg4QAchgAdgYQAcgXACADQEXgdDwAaQDvAaCUAlQCUAlAEADIjOEzQhNgBhigQQhhgQhPgQQhQgQgXgCQglgDhHgNQhIgNgbAQQgSAagQAzIgRA4QgRD3gyD1QgzD2guCnQguCngDAGQiDgXiPg+g");
	this.shape_94.setTransform(-75.3,70.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#6AAFBA").ss(1,1,1).p("AAqhPQgKAngRAcQgPAYgVAaQgXAbgeAHQALACAMAbQAMAbAFAMQAsg+Avg7QgCAIAHAUQAIAUAFAGQgTgcgBhNQAAhOAPgdQgSAWgKAmg");
	this.shape_95.setTransform(-40.5,-79);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6AAFBA").s().p("AgyBlQgNgbgLgCQAegHAXgbQAVgaAPgYQARgcAKgnQAKgmASgWQgPAdABBOQABBNASAcQgGgGgHgUQgIgUAEgIQgxA7gqA+IgRgng");
	this.shape_96.setTransform(-40.5,-79);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#E0DC4F").ss(1,1,1).p("AgkoEQADAsAIAoQAXA1AKBBQAJCNgRCFQgHBDgEBCQgDBEgRBBQgJAiACAXQACAXAGAfQAPBLg8AdQANABAVADQAVADAKAKQADAEATAaQAUAaADADIAHg8IgphdQACgFARhUQAShUAQhoQAQhngBhBQgDhGADhhQAEhiADhLQg4gug4gxg");
	this.shape_97.setTransform(36.3,-43.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E0DC4F").s().p("AAMHoIgWgeQgKgKgVgDIgigEQA8gegPhKQgGgggCgXQgCgWAJgiQARhCADhDQAEhCAHhDQARiFgJiNQgKhBgXg0QgIgogDgtIBwBfIgHCtQgDBiADBFQABBBgQBmQgQBpgSBUIgTBZIApBdIgHA8IgXgdg");
	this.shape_98.setTransform(36.3,-43.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#E0DC4F").ss(1,1,1).p("AGbhPQAEhaADhLQhEhFhAhFQg/hEgvhUQgnhEgQhHQgDABgDABQhBAehAAPQhBAPgFAAQgPgKgggLQiqDhg3EYQALA4AMBXQANBYABBUQgCDhhIBfQgRAXgHAJIAsgGQgBgEA4gUQA5gUCCALQBaALBiAYQBkAYBNAXQBNAXATAIIAwA8IAGg8IgohdQABgFAShUQARhUARhpQAQhogChBQgDhAADhZg");
	this.shape_99.setTransform(2.1,-59.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFF99").s().p("AFKJmQgTgIhNgXQhNgXhkgYQhigYhagLQiCgLg5AUQg4AUABAEIgsAGIAYggQBIhfACjiQgBhTgNhZQgMhWgLg4QA3kZCqjgQAgALAPAKQAFABBBgPQBAgQBBgdIAGgDQAQBHAnBEQAvBUA/BFQBABEBEBFIgHClQgDBYADBBQACBBgQBoQgRBpgRBTIgTBZIAoBeIgGA8g");
	this.shape_100.setTransform(2.1,-59.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#64A1AF").ss(1,1,1).p("ACwj/QgbAJgJAEQgfAOgXACQgYADgfADQhQANgsA1QgsA1ggBKQgnBFguBEQAggCAYAWQAYAVAUAUQAcAaARAfQARAeAWAaQAxg2Apg8QAAACAKAwQA3kWCqjhQgDACgZAJQgYAIgbAJg");
	this.shape_101.setTransform(-36.7,-94.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7CC2D8").s().p("AhtDkQgRgfgcgaQgUgUgYgVQgYgWggACQAuhEAnhFQAghKAsg1QAsg1BQgNIA3gGQAXgCAfgOQAJgEAbgJIAzgRQAZgJADgCQiqDhg3EWIgKgyQgpA8gxA2QgWgagRgeg");
	this.shape_102.setTransform(-36.7,-94.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#E0DC4F").ss(1,1,1).p("AADgDIgDAAQAAACgCADQgDAGAIgLg");
	this.shape_103.setTransform(-40.2,-4.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#64A1AF").ss(1,1,1).p("AANgmQgBAEgLAhQgIAfgFAJ");
	this.shape_104.setTransform(-10.6,-5.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7CC2D8").s().p("AANgmIgMAmQgIAegFAJg");
	this.shape_105.setTransform(-10.6,-5.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#64A1AF").ss(1,1,1).p("AANgiQgBAEgHAcQgFAagMAK");
	this.shape_106.setTransform(-14.7,-5.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7CC2D8").s().p("AANgiIgIAgQgFAagMALg");
	this.shape_107.setTransform(-14.7,-5.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#6AAFBA").ss(1,1,1).p("AA0ikQgLgHgBgBQAgBogtBfQgTAlglAwQgnAwgqAMQCrAMAmipQAVg/gOhCQgGgMgQgPQgRgOgPgJg");
	this.shape_108.setTransform(28.1,16.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6AAFBA").s().p("AhuCsQAqgMAngwQAlgwATglQAthfgghoIAMAIQAPAJARAOQAQAPAGAMQAOBCgVA/QgkCeiXAAIgWgBg");
	this.shape_109.setTransform(28.1,16.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#6AAFBA").ss(1,1,1).p("ACgiOQg4gBhbAHQhZAGgsAjQgCADgRARQgRARgDACQgDAHARAsQAQApAUAuQATAuAGAPQAYgyAxgZQgXgjgXgfQgXgegJgnQAggMAqABQAoABAkADQgMAdgCAhQgCAfgZAZQAmAdAxgMQADgmghgIQAOgHAWgEQgUgLgQgNQAMgBAMgCQgOgiARgkQARglAngMg");
	this.shape_110.setTransform(-18.8,-3.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6AAFBA").s().p("AhtBSQgUgugQgpQgRgsADgHIAUgTIATgUQAsgjBZgGQBbgHA4ABQgnAMgRAlQgRAkAOAiIgYADQAQANAUALQgWAEgOAHQAhAIgDAmQgxAMgmgdQAZgZACgfQACghAMgdQgkgDgogBQgqgBggAMQAJAnAXAeQAXAfAXAjQgxAZgYAyIgZg9g");
	this.shape_111.setTransform(-18.8,-3.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#64A1AF").ss(1,1,1).p("AFChpIg8hWQhvhJiJgCQiHgDhmAYQhlAXgFAEIgnAnQBUDQA7DaIADAAQAFAFCBANQB/ANC+gtQB2gmAQhQQAPhQgZhCQgahFgFgFg");
	this.shape_112.setTransform(2.1,8.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7CC2D8").s().p("AhYEJQiBgNgFgFIgDAAQg7jahUjQIAngnQAFgEBlgXQBmgYCHADQCJACBvBJIA8BWQAFAFAaBFQAZBCgPBQQgQBQh2AmQiTAjhtAAQggAAgdgDg");
	this.shape_113.setTransform(2.1,8.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABbkVQgEgChEAJQhCAIhUApQhVApg2BhQg2BfAYCwQACAhgDA1QgCA1AQAZQARgVAFgfQAFgfAMgcQAfg9A2gtQAYgSA8gPQA9gPApAJQAqAIgcA1QAQgSA1gKQA0gLAYgFQBAgSA+gTQg7jZhUjSg");
	this.shape_114.setTransform(-51.4,26.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6AAFBA").s().p("AktESQADg1gCghQgYiwA2heQA2hiBVgpQBUgpBCgIQBEgIAEABIBKhKQBUDSA7DYIh+AnIhMAPQg1AKgQASQAcg1gqgIQgpgJg9APQg8APgYASQg2AtgfA9QgMAcgFAeQgFAggRAVQgQgZACg1g");
	this.shape_115.setTransform(-51.4,26.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABDlnQgJAUgcBhQgbBhgeB5QggB2gXBaQgYBaAAAFQBkA9BwAUQgagcgdgdQgcgdgQgjQgOgrgBg+QgCg9AHgwQAGgtASgtQATgtAIgxQAJgsALg6QAKg6gLgog");
	this.shape_116.setTransform(-95.6,161);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6AAFBA").s().p("AhpEXQgBgFAYhaIA3jQQAeh5AbhhQAchhAJgUQAMAogLA6IgUBmQgIAxgTAtQgRAtgHAtQgGAwABA9QABA+APArQAPAjAdAdIA3A5QhxgUhjg9g");
	this.shape_117.setTransform(-95.6,161);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#64A1AF").ss(1,1,1).p("ADTvSQgEgChEAJQhEAIhSApQhVApg2BhQg2BhAXCwQAZC3ggDxQghDwg3DnQg4DoguCYQguCZgDAGQCyBdCGAUQCFAVBMgMQBMgMABgEQAAgGAFh2QAFh2AFiXQAEiWABhnQgBhOgIiWQgHiWgLifQgKiigIhyQgIhygBgFQAggEA/gRQA/gRA7gSQA6gSAQgFQg7jahUjSg");
	this.shape_118.setTransform(-63.4,96.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#75B9C9").s().p("AhzQQQiGgUiyhdQADgGAuiZQAuiYA4joQA3jnAhjwQAgjxgZi3QgXiwA2hhQA2hhBVgpQBSgpBEgIQBEgJAEACIBKhKQBUDSA7DaIhKAXQg7ASg/ARQg/ARggAEIAJB3IASEUQALCfAHCWQAICWABBOQgBBngECWIgKENIgFB8QgBAEhMAMQgcAEgkAAQg8AAhVgNg");
	this.shape_119.setTransform(-63.4,96.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#706257").ss(1,1,1).p("AgngiQgBAbAAAYQABAbgRAYQASAAAagHQAXgIAJgRQAFgKAghdQgLADgoAKQgmALgGAEQgBACAAADg");
	this.shape_120.setTransform(-57.1,224.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#706257").s().p("Ag4BEQARgYgBgbIABgzIABgFQAGgEAmgLIAzgNQggBdgFAKQgJARgYAIQgXAHgSAAIgCAAg");
	this.shape_121.setTransform(-57.1,224.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#8C7A6C").ss(1,1,1).p("AhBAAQACAiACAuQACAugSAaQAXgHAWgKQApgTAugTQAOguALgvQALguABghQgHhAhBgHQhAgHgvADQAiBFgIBRg");
	this.shape_122.setTransform(-56.9,207);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8C7A6C").s().p("Ag9BQIgEhQQAIhRgihFQAvgDBAAHQBBAHAHBAQgBAhgLAuQgLAvgOAuQguATgpATQgWAKgXAHQASgagCgug");
	this.shape_123.setTransform(-56.9,207);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#706257").ss(1,1,1).p("AhFBeQAdgBAxgMQAzgNAHghQAAgBABgiQABgkABg5QgNAFgzASQgyASgHABQAJAfACAwQACAxgfARg");
	this.shape_124.setTransform(-109.7,160.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#706257").s().p("AgoAcQgCgwgJgfQAHgBAygSIBAgXIgCBdIgBAjQgHAhgzANQgxAMgdABQAfgRgCgxg");
	this.shape_125.setTransform(-109.7,160.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#8C7A6C").ss(1,1,1).p("ABShrQgHgsgCgEQgUAegqAVQgoAWgkAEQgCBIAPBAQAKApgIASQgHATghAUQAOgBArgNQApgOAogPQAogPADgGQABhJgChGQgBgMgHgsg");
	this.shape_126.setTransform(-111.8,141.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8C7A6C").s().p("AgyB1QAIgSgKgpQgPhAAChIQAkgEAogWQAqgVAUgeQACAEAHAsQAHAsABAMQACBGgBBJQgDAGgoAPQgoAPgpAOQgrANgOABQAhgUAHgTg");
	this.shape_127.setTransform(-111.8,141.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#706257").ss(1,1,1).p("AG0hoQguARgsASQixBFjKAWQjLAYjFg1QgEAZAGARQAGAQAeAQQBLAiBuADQBvADBRgKQB3gMBfhMQAHAXAOAVQAfgEBCgIQBDgJARgcQABgBALgdQALggAPgug");
	this.shape_128.setTransform(-95,227.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8C7A6C").s().p("AjSBoQhugDhLgiQgegQgGgQQgGgRAEgZQDFA1DLgYQDKgWCxhFQAsgSAugRIgaBOIgMAeQgRAchDAJIhhAMQgOgVgHgXQhfBMh3AMQg+AIhQAAIgygBg");
	this.shape_129.setTransform(-95,227.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#8C7A6C").ss(1,1,1).p("AF3ilQhLgghngOQhmgOhYAMQAAACgxApQgzAohmA2QhoAshGAkQhFAlgLBuQgCARgBANQDFA3DLgYQDJgXCyhGQAsgSAtgRQAPgvALgtQALgvAAgiQgDgshLggg");
	this.shape_130.setTransform(-93,208.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BFA78E").s().p("AnEC1IADgeQALhuBFglQBGgkBogsQBmg2AzgoQAxgpAAgCQBYgMBmAOQBnAOBLAgQBLAgADAsQAAAigLAvQgLAtgPAvIhZAjQiyBGjJAXQg9AHg8AAQiNAAiKgmg");
	this.shape_131.setTransform(-93,208.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#8C7A6C").ss(1,1,1).p("AF3jLQhLgghmgOQhngOhXAMQAAACgyApQgzAohmA2QhoAshFAmQhGAjgLBuQgFArABAWQACAWAlATQBLAiBuADQBvADBRgKQB3gMBfhMQAHAXAOAVQAggEBBgIQBDgJARgcQACgDASgzQASg0ARhAQAThDABguQgEgshLggg");
	this.shape_132.setTransform(-93.1,212.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#BFA78E").s().p("AjlEAQhugDhLgiQgkgTgDgWQgCgWAHgrQAKhuBGgjQBFgmBpgsQBlg2A0goQAxgpAAgCQBXgMBnAOQBnAOBKAgQBLAgAEAsQgCAugRBDQgSBAgSA0IgTA2QgSAchDAJIhhAMQgOgVgHgXQhfBMh3AMQg+AIhQAAIgygBg");
	this.shape_133.setTransform(-93.1,212.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#C95050").ss(1,1,1).p("AGIhOQgggMgvAAQhXABhYAIQgsACh5AKQh6AKh9AYQh8AZgzAtQgQAQgBAUQAqAYBBgFQBBgEAwgHQCCgOCAgNQB7gIB1geQAxgMA/gIQA/gLAogkQgrgOgggLg");
	this.shape_134.setTransform(-3.5,35.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C95050").s().p("AnSBHQABgUAQgQQAzgtB9gZQB8gYB6gKQB5gKAsgCQBXgIBYgBQAuAAAhAMIBLAZQgpAkg+ALQg/AIgxAMQh2Aeh6AIIkBAbQgxAHhBAEIgVABQgzAAgjgUg");
	this.shape_135.setTransform(-3.5,35.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#64A1AF").ss(1,1,1).p("AiNi2QgIgCAtBVQAuBVDJDF");
	this.shape_136.setTransform(30,-102.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#6AAFBA").ss(1,1,1).p("ACTgcQAFgFgSgXQgSgXgEgGQgCAEguAEQguADgwABQgyABgOgCQAUAWAKAeQgZAKgSgNQgSgNgXgIQACATACAVQA6AuA3AuQgDgxANgPQAHgJASgLQAegOAogEQAogFAhgHg");
	this.shape_137.setTransform(47.2,-94.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#6AAFBA").s().p("AiQgGIgEgoQAXAIASANQASANAZgKQgKgegUgWQAOACAygBQAwgBAugDQAugEACgEQAEAGASAXQASAXgFAFQghAHgoAFQgoAEgeAOQgSALgHAJQgNAPADAxIhxhcg");
	this.shape_138.setTransform(47.2,-94.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#6AAFBA").ss(1,1,1).p("ADHg7QhBAehCAPQhBAOgDAAQgOgFgNgJQgXgKgYAEQglAKgjARQgkASgnAMQgkAGgkAFQAaAHAZAMQAYAMAcACQgDABAAADQAnACAegTQAcgUAigLQBMgKBRAJQBEAHArgrQAkgzA0ghQgyAEgtAVg");
	this.shape_139.setTransform(-6.3,-120.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6AAFBA").s().p("AjBBVQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQgcgCgYgMQgYgMgbgHIBIgLQAngMAlgSQAigRAmgKQAXgEAXAKQANAJAOAFQACAABCgOQBCgPBBgeQAtgVAygEQg0AhgkAzQgrArhEgHQhRgJhMAKQgiALgdAUQgaARghAAIgJAAg");
	this.shape_140.setTransform(-6.3,-120.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#6AAFBA").ss(1,1,1).p("ADNgMQhmADhngSQhlgRhmATQAAgEAAgDQgEAcAdADQAcABAXAAQA3AFA5gCQBvgCBnAjQABgGABgVQACgSACgDg");
	this.shape_141.setTransform(36.6,-126.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6AAFBA").s().p("AgPADQg5ACg3gFQgXAAgcgBQgdgDAEgcIAAAHQBmgTBlARQBnASBmgDQgCADgCASIgCAbQhngjhvACg");
	this.shape_142.setTransform(36.6,-126.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#64A1AF").ss(1,1,1).p("ADBjOQgWgBhpgKQhogLhiAAQhiAAAAAeQAQBHAnBEQAuBSBABEQBABFBCBEQgBgrADgXQADgWAlgVQAQgHA2gNQA2gNAJAGQgQhGgUhMQgVhPAOhJg");
	this.shape_143.setTransform(37.8,-106.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#7CC2D8").s().p("AhFBcQhAhFguhSQgohEgPhHQAAgdBigBQBiAABnALQBqAKAVABQgNBJAUBPQAVBMAPBGQgIgFg2ANQg2AMgQAHQglAWgDAWQgEAWACAsQhDhFg/hEg");
	this.shape_144.setTransform(37.8,-106.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#AF4848").ss(1,1,1).p("AHeh4QgZgXiWgBQiXgBjWAcQjYAcjeA/IAiCkQAGACCUAEQCUAEDZgJQDbgJDcgmQACgHAFhIQAGhFgTgzQgDgHgFgGg");
	this.shape_145.setTransform(0.5,41);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF6666").s().p("Ak4CQQiUgEgGgCIgiikQDeg/DYgcQDWgcCXABQCWABAZAXQAFAGADAHQATAzgGBFQgFBIgCAHQjcAmjbAJQiWAGh1AAIhigBg");
	this.shape_146.setTransform(0.5,41);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#706257").ss(1,1,1).p("AH0h8QjoBgj5AfQj4Aij4ghQgJArACArQgIACgHgBQC9AnDZgGQDXgGCmh2QANAmAEAoQAfgMBLgMQBLgMALgmQAAgBABgiQABgkABg5g");
	this.shape_147.setTransform(-152.7,163.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#8C7A6C").s().p("AnzBbQAHABAIgCQgCgrAJgrQD5AhD3giQD5gfDohgIgCBdIgBAjQgLAmhLAMQhLAMgfAMQgEgogNgmQimB2jWAGIg2ABQi7AAimgig");
	this.shape_148.setTransform(-152.7,163.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EABF9B").s().p("AlOAIQgKgTAAgTQAyAJAxgGQBlgMBlAMQBYAMBcgCQAvgFAwAEQA2APA7ADQhFAHhGAMQiDgDiAADQhdAIhcAAQgjAHghAAQgRgFgLgVg");
	this.shape_149.setTransform(81.2,-124);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#8C7A6C").ss(1,1,1).p("AFWj1QhsAehoAyQhnAygJAGQg6Akg4AiQg3AjhGAIQhAAGg0AXQgzAWgrA4QgrA5gOBJQD4AiD4giQD5giDohfQABhZgDheQgDhhgNg4QgWg0hrAfg");
	this.shape_150.setTransform(-151.6,139.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BFA78E").s().p("AnoDxQAOhJArg5QArg4AzgWQA0gXBAgGQBGgIA3gjQA4giA6gkQAJgGBngyQBogyBsgeQBrgfAWA0QANA4ADBhQADBegBBZQjoBfj5AiQh8ARh9AAQh8AAh7gRg");
	this.shape_151.setTransform(-151.6,139.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#8C7A6C").ss(1,1,1).p("AFgkqQhsAfhnAyQhoAygIAGQg7Ajg3AjQg4AihGALQhAAGgzAWQg0AVgrA3QhEBfAEB6QgHACgHgBQC9AnDZgGQDXgGCmh4QAMAoAFAnQAegLBLgMQBLgMALgmQABgFAChaQAChbgDhrQgChtgOg/QgWg0hsAeg");
	this.shape_152.setTransform(-152.6,144.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BFA78E").s().p("AnzEUQAHABAHgCQgEh6BEhfQArg3A0gVQAzgWBAgGQBGgLA4giQA3gjA7gjQAIgGBogyQBngyBsgfQBsgeAWA0QAOA/ACBtQADBrgCBbIgDBfQgLAmhLAMQhLAMgeALQgFgngMgoQimB4jXAGIg6ABQi4AAikgig");
	this.shape_153.setTransform(-152.6,144.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#CB9966").ss(1,1,1).p("AnpgfQAGAAB5gIQB6gJCtgaQCrgaCggzQAEgDAfgUQAfgUASgMIAUgOQACAAAbAFQAcAFAcALQAfAKATAUQAUAUggAzQgiA2gTAgQgTAegVACQgWgBgtgBQgsgBhMAYQhGAhihBAQijA/lHAV");
	this.shape_154.setTransform(141.8,-122.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F4D3B0").s().p("AnpgfQAGAAB5gIQB6gJCtgaQCrgaCgg0IAjgWIAxghIAUgNIAdAEQAcAGAcALQAfALATATQAUAUggAzIg1BWQgTAegVACIhDgDQgsgBhMAZQhGAhihBAQijA+lHAVg");
	this.shape_155.setTransform(141.8,-122.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EABF9B").s().p("AiHBhQAcgBASgTIAkgnQAiglAYgnQAbgqAjgmQAlgtAUg3QAPApgFAoQgJAXgQAUQglA1grAuQg2BBg8A9IALAuQAIAcANAOQg5gzgZhHg");
	this.shape_156.setTransform(-53.3,-57.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#CB9966").ss(1,1,1).p("AAUm8QgFAGg/BSQhCBThCBcQhBBcgFAiQgFAsArBdQArBeCOCFQCMCAAzAHQAzAHADg9QgCg9hMh9QhMh8gpiHQAEgDAxgzQAxg0A2hDQA2hCASgt");
	this.shape_157.setTransform(-64.3,-38.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F4D3B0").s().p("ACkG8QgzgHiMiAQiOiFgrheQgrhdAFgsQAFgiBBhcQBChcBChTIBEhYIDnBpQgSAtg2BCQg2BDgxA0Ig1A2QApCHBMB8QBMB9ACA9QgDA3gpAAIgKgBg");
	this.shape_158.setTransform(-64.3,-38.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#CB9966").ss(1,1,1).p("ADRgwQgfg+hOgRQghgGhAgDQg+gEg7gBQg7gBgTABQgOAGgFAqQgFApAAANQACAyAWAqQAWAqANAwQB2gOB6gEQAjgBAcgGQAcgFAYggQAthFgeg8g");
	this.shape_159.setTransform(77.7,-113);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F4D3B0").s().p("AjEA1QgWgqgCgyQAAgNAFgqQAFgpAOgHQATAAA7AAQA7ACA+AEQBAADAhAGQBOARAfA9QAeA9gtBFQgYAggcAFQgcAFgjACQh6AEh2AOQgNgwgWgqg");
	this.shape_160.setTransform(77.7,-113);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#C95050").ss(1,1,1).p("AI8jvQgahGhAgdQhrglh4gBQiSgKiSgDQiUgCiSAWQg/AJhHAWQhHAXgnA2QggA2AXA6QATBJARBHQASBEgBBOQgLBkA2BSQAqAwA4AEQA5ADA8gDQCjgDCjgEQBEAEBXAMQBYANA+gPQBOgcAvhOQAwhOAZhcQAZhdAKhHQANhYgghdg");
	this.shape_161.setTransform(9.8,-66);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C95050").s().p("ADQGAQhXgMhEgEIlGAHQg8ADg5gDQg4gEgqgwQg2hSALhkQABhOgShEIgkiQQgXg6Agg2QAng2BHgXQBHgWA/gJQCSgWCUACQCSADCSAKQB4ABBrAlQBAAdAaBGQAgBdgNBYQgKBHgZBdQgZBcgwBOQgvBOhOAcQgiAIgpAAQgjAAgogGg");
	this.shape_162.setTransform(9.8,-66);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#AF4848").ss(1,1,1).p("AKelAQg3hNh3gWQh4gWhZgHQkZgmkUAiQhcAKhaATQg/AOhQAqQhQAqgSBFQgJBhAlBnQAkBlAPBgQADBYANBZQANBYBbAuQA9AXA/gSQA/gTA9gNQBIgLBVgDQBUgCBFAQQCMAkCSAIQBRAEA9gkQA9glAZhNQAdheAehmQAfhlAPhhQAKg8AChEQADhFgcg0g");
	this.shape_163.setTransform(13.2,-65.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF6666").s().p("AFeHVQiSgIiMgkQhFgQhUACQhVADhIALQg9ANg/ATQg/ASg9gXQhbgugNhYQgNhZgDhYQgPhggkhlQglhnAJhhQAShFBQgqQBQgqA/gOQBagTBcgKQEUgiEZAmQBZAHB4AWQB3AWA3BNQAcA0gDBFQgCBEgKA8QgPBhgfBlIg7DEQgZBNg9AlQg2AghGAAIgSAAg");
	this.shape_164.setTransform(13.2,-65.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-0.6,-0.1,7.6,-0.1).s().p("AgbLsQg4gQgEgFIAA3CICvgFIAAXHQgrAagoAAQgPAAgRgFg");
	this.shape_165.setTransform(-7.3,126);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#9E9E9E").ss(1,1,1).p("AmBglQAEAFBuAhQBvAjCpAFQCqgFBmgkQBmgjADgF");
	this.shape_166.setTransform(-8.4,207);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-34.6,-2.9,29.1,2.4).s().p("AmiCUQing8gHhYQAHhYCng7QCng7D7gDQD8ADCnA7QCoA7AGBYQgGBYioA8QinA7j8ACQj6gCiog7gAlZgiQACAEBXAeQBWAhCUAEQCSAFC6hMQgDgEhbgZQhagZiTgDIgQAAQiOAAimA5g");
	this.shape_167.setTransform(-4.2,207.3);

	this.addChild(this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203.7,-238.8,407.5,477.7);


(lib.boy_phone = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C95050").ss(1,1,1).p("AgzjyQAFgdAMgBQAKgFAGgEQAHgEAaAEQA3ACAIALQAGAMgEAcQgDAcgCARQAAAOgGBZQgGBXgJBlQgJBkgLAvQABACgCANQgCANgSABQgqgGgHgGQgCAAgOgGQgOgGgKgNQgHgTADhvQAEhuALhyQAKhpAEgeg");
	this.shape.setTransform(-1.7,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AgkEQIgQgGQgOgGgKgNQgHgTADhvQAEhuALhyQAKhpAEgeQAFgdAMgBIAQgJQAHgEAaAEQA3ACAIALQAGAMgEAcIgFAtQAAAOgGBZQgGBXgJBlQgJBkgLAvQABACgCANQgCANgSABQgqgGgHgGg");
	this.shape_1.setTransform(-1.7,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C95050").ss(1,1,1).p("AAekrQAAAEgFBSQgEBRgIBvQgIBtgJBdQgLBcgOAb");
	this.shape_2.setTransform(4.2,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AAekqIgFBVQgEBRgIBvQgIBtgJBcQgLBdgOAag");
	this.shape_3.setTransform(4.2,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D86464").s().p("AATFPQhWgIAAgBQgCAAgHgEQgJgFACgVQARiIAJiJQAJhmALhnQACgRAKg3QAKg3APgWQAIgHAJAJQAOATgGApIgJA/QgFBegDBfQgEAogIAoQgKApgCArQgDAlATAeQAQASAXACQAWADAQAPQAMAQgHARQgGARADARQACACgIAIQgGAGgfAAIgRAAg");
	this.shape_4.setTransform(4.3,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C95050").ss(1,1,1).p("AgflAQgCgEALgYQAMgYAzgEIAuADQABgGAFAGQAGAGAEBaQACBIgICMQgJCKgLB/QgLCAgHAhQADACgIAIQgHAIgvgCQhXgHABgBQgDAAgHgFQgIgEACgWQADgXAMiJQAMiJAPiUQAQiWANg/g");
	this.shape_5.setTransform(6.2,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6666").s().p("AAAF5QhXgHABgBQgDAAgHgFQgIgEACgWQADgXAMiJQAMiJAPiUQAQiWANg/QgCgEALgYQAMgYAzgEIAuADQABgGAFAGQAGAGAEBaQACBIgICMQgJCKgLB/QgLCAgGAhQACACgIAIQgGAGgfAAIgRAAg");
	this.shape_6.setTransform(6.2,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C95050").ss(1,1,1).p("AAOB0QAAgEAEg0QADg0ACg0QADg2gFgKQgHgSgKAeQgIAegTCy");
	this.shape_7.setTransform(2.6,-33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6666").s().p("AgXBwQATiyAIgeQAKgeAHASQAFAKgDA2QgCA0gDA0IgEA4g");
	this.shape_8.setTransform(2.6,-33.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CB9966").ss(1,1,1).p("AgOhUQADAEAPA2QASAzgKA8");
	this.shape_9.setTransform(7.6,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4D3B0").s().p("AgOhUQADAEAPA2QASAzgKA8g");
	this.shape_10.setTransform(7.6,13.8);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-45.8,28.5,91.7);


(lib.boy_no_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CB9966").ss(0.5,1,1).p("AhShPQgNBmAVAdQAQAVAwAGQAvAGAzgPIgFgVQgJgZgOgVQgvhEhfgOg");
	this.shape.setTransform(28.2,-176.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4D3B0").s().p("AgKBPQgwgGgQgVQgVgdANhmQBfAOAvBEQAOAVAJAZIAFAVQgkAKgjAAQgPAAgMgBg");
	this.shape_1.setTransform(28.2,-176.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CB9966").ss(0.5,1,1).p("AhiBJIAFgWQAKgZAQgXQA1hHBrgPQAPBrgXAeQgTAXg1AFQg2AHg5gQg");
	this.shape_2.setTransform(52.9,-178.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4D3B0").s().p("AhiBJIAFgWQAKgZAQgXQA1hHBrgPQAPBrgXAeQgTAXg1AFQgOACgRAAQgnAAgpgLg");
	this.shape_3.setTransform(52.9,-178.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).to({state:[]},2).wait(72));

	// Character
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#64A1AF").ss(1,1,1).p("Aj4kMIAfA5QAIAABIBOQBHBNAgCXIBYCuQABgDAegpQAdgpAtgqQAtgpAtgG");
	this.shape_4.setTransform(93.1,-95.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF761B").s().p("AACAFQgDgtgUgeQAFgBAFAAQgDgFAAgGQAIAAAFAEIgHgKIAIAMIAIALQAPAbgBAmQgCA2gWAjQAJgjgFgxg");
	this.shape_5.setTransform(56.7,-221.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AF761B").s().p("AgNBGQAFgMADgMQAMgWgBg0QgBhFgMgcQAbA6AKA+QABA9ghA0QAOgjAAgoQgLAXgOAbQgMAWgFAVQAGgcALgcg");
	this.shape_6.setTransform(69.4,-209);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AF761B").s().p("AgMAmQgVgugDg2IAMAmQAHAXALAJQAAgcAQgYQARgYAKgaQgFAwgTAsIASgpQgLAqgKAvQgEAZACAYQgIgdgMgcg");
	this.shape_7.setTransform(33.2,-218.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AF761B").s().p("AhHAkQgLAPADAQQgHgcAIgbQASghAagdIgFATQAKgNAEgPIABAXQAegbAMgoQAEAsgQApQAbgUAVgZQgEATgOASQgOAQgJAQQAmgMAggZIgYAsQgNAZgWAMIgwAQQgbAIgCAeQgWgfAEglg");
	this.shape_8.setTransform(74.5,-190.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAAQACgHAMgBQAOABABAHQgBAIgOABQgMgBgCgIg");
	this.shape_9.setTransform(30.2,-177.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAGIAhgcIgJAsQgYgMAAgEg");
	this.shape_10.setTransform(26.8,-172.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgkAAQADAiAhADQAigDADgiQgDghgigDQghADgDAhg");
	this.shape_11.setTransform(29,-175.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,3.8).s().p("AgkAAQADghAhgDQAiADADAhQgDAigiADQghgDgDgig");
	this.shape_12.setTransform(29,-175.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5885C6").ss(0.3,1,1).p("Ag1AAQAFAxAwAFQAxgFAFgxQgFgwgxgFQgwAFgFAwg");
	this.shape_13.setTransform(29,-175.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,5.4).s().p("Ag1AAQAFgwAwgFQAxAFAFAwQgFAxgxAFQgwgFgFgxg");
	this.shape_14.setTransform(29,-175.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAAQABgIAOAAQAPAAABAIQgBAIgPACQgOgCgBgIg");
	this.shape_15.setTransform(55.4,-179.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAGIAlgdIgKAvQgbgNAAgFg");
	this.shape_16.setTransform(51.8,-174.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgoAAQAEAlAkADQAlgEAEgkQgEgjglgEQgkAEgEAjg");
	this.shape_17.setTransform(54.1,-177.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5885C6").ss(0.3,1,1).p("AgkAAQADAiAhADQAigDADgiQgDghgigDQghADgDAhg");
	this.shape_18.setTransform(54.1,-177.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","#66A2FF"],[0,1],0,0,0,0,0,3.8).s().p("AgkAAQADghAhgDQAiADADAhQgDAigiADQghgDgDgig");
	this.shape_19.setTransform(54.1,-177.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5885C6").ss(0.3,1,1).p("Ag6AAQAGA1A0AFQA2gFAFg1QgFg0g2gFQg0AGgGAzg");
	this.shape_20.setTransform(54.1,-177.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EABF9B").s().p("AgLgRQASgIAVAGQgQACgTAMQgVAKABASQgCgXASgRg");
	this.shape_21.setTransform(77.5,-179.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CB9966").ss(1,1,1).p("AAagOQgCgCgUACQgTACgKAc");
	this.shape_22.setTransform(77.2,-180.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4D3B0").s().p("AAEgOQAUgCACACIgzAeQAKgcATgCg");
	this.shape_23.setTransform(77.2,-180.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#AF761B").ss(1,1,1).p("ABNAhQgDgHgtgiQgsgkg9ATQACAAAsAQQAqANBBAdg");
	this.shape_24.setTransform(49.6,-194);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E8A225").s().p("AgegJIgugQQA9gTAsAkQAtAiADAHQhBgdgqgNg");
	this.shape_25.setTransform(49.6,-194);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#AF761B").ss(1,1,1).p("AAwgxQgDgHgjAIQghAHgZBfQADgFAggpQAegnAfgSg");
	this.shape_26.setTransform(26.8,-193);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E8A225").s().p("AAKgwQAjgIADAHQgfASgeAnQggApgDAFQAZhfAhgHg");
	this.shape_27.setTransform(26.8,-193);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABRA4QAFgJgag8Qgag+hxgFQgDAFADA1QACAzAiAlQAhAkBbgug");
	this.shape_28.setTransform(28.1,-176);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3F8FF").s().p("AgrBCQgiglgCgzQgDg1ADgFQBxAFAaA+QAaA8gFAJQg0AZgfAAQgbAAgOgPg");
	this.shape_29.setTransform(28.1,-176);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EABF9B").s().p("AgrBCQgiglgCgzQgDg1ADgFQBxAFAaA+QAaA8gFAJQg0AZgfAAQgbAAgOgPg");
	this.shape_30.setTransform(27.9,-174.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#CB9966").ss(0.5,1,1).p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQglArh5gdg");
	this.shape_31.setTransform(54,-178.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3F8FF").s().p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQgWAZgzAAQgkAAgxgLg");
	this.shape_32.setTransform(54,-178.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#CB9966").ss(1,1,1).p("AgcACQAJgFAwAC");
	this.shape_33.setTransform(38.3,-162.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4D3B0").s().p("AAdgBIg5ADQAJgFAwACg");
	this.shape_34.setTransform(38.3,-162.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EABF9B").s().p("AhfBOQgCgDAFgmQAFglAngoQAngoBigIQADAFAFA1QAEA0gmAqQgWAZgzAAQgkAAgxgLg");
	this.shape_35.setTransform(55.4,-177.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B77070").ss(0.3,1,1).p("AibgTQAKADAqAKQA1AKBFgQQBIgSA5hWQACADAIAyQAHAxgUA1QgVA3hSATQhPANgfgdQgegdgPgmQgNgigdgPQgEgCAAAA");
	this.shape_36.setTransform(47.4,-140);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FF9999","#000000"],[0,1],0.8,6.1,-0.1,-2.2).s().p("AhGBhQgegdgPgmQgNgigdgPQAKADAqAKQA1AKBFgQQBIgSA5hWQACADAIAyQAHAxgUA1QgVA3hSATQgZAEgSAAQgtAAgWgUg");
	this.shape_37.setTransform(47.6,-140);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CB9966").ss(1,1,1).p("AAoh4QgBAHgCAeQgCAkgCAMQgGAKgaATQgXAQgDACQgHAEgHAnQgGAmBOAc");
	this.shape_38.setTransform(33.3,-160.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F4D3B0").s().p("AgnA3QAHgnAHgEIAagSQAagTAGgKQACgMACgkIADglIgHDxQhOgcAGgmg");
	this.shape_39.setTransform(33.3,-160.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AF761B").s().p("AAAAiQgOgYgLgZQgMgPgGgSQAWAUAWASQABgKgGgWQgIgVgIgIIAkAdQgLgUgHgUIAUAQQALACAHAJQAMArgGAsIgBAaQgBATADAGQgYgYgTgZg");
	this.shape_40.setTransform(15.1,-188);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AF761B").s().p("AgLATQgUgwgUgZQAXAYAUAbIAaAfQAVAYANgEQgNAHgLAAQgaAAgNgkg");
	this.shape_41.setTransform(18.3,-206);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AF761B").s().p("AAhBTIgQgGQgOgKgHgOQgkhAgGhMQACASALAPIAfA7QAWArAbAoIgOgFg");
	this.shape_42.setTransform(25.5,-210.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AF761B").s().p("AgaBDQAVgnAEgiQAHg2gIgzQADASALATQAJAYAAAbQABA0gXAuQAfgZAUgiQAMgogFgtQAFAmAEAmQgEAWgMAPQgYAcgkAPQgdANgZANQAYgQAOgeg");
	this.shape_43.setTransform(44.8,-213.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AF761B").s().p("AgNBSQgEgaAFgIIgNANIgNANIgDgSIgCgWQgBgeAPgXQAhgrAFg3QgDA4ABA4QAPgYAWgOQgEAVgOAUQgNATgIAVQgLAogBAoIgGgkg");
	this.shape_44.setTransform(60.8,-206.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#AF761B").ss(1,1,1).p("AEHiIQALBLAJBNQAcgVAggYQgLAzAEA3QAYgCAWgIQgQARgRAdQAXAMAfgEQgHANglAxQglAxgDAGQgGgCguADQguAEgQAqQgDgBgXgYQgYgYgDgfIAAAoQgDgBgUguQgVgugDhQIgaAaIgbhQQgCABgQAMQgRAMgMAPQgHALABgbQABgaAAgEQgBADgmAZQgmAZg2AMQg1AMgxglIgUAaQgLABgRABQgSABgFgKQgCAbAHAcQACAcgCAcQgDA3gFAzQAAgOgOgUQgOgUgJgMQgYgfgQgjQgDgmgPgkQAhACAXAWQAAgsgKgrQgKgqADgrQAKAHAEAMQADAMAOAEQAPhSAZhEQgDAYAOAXQANAYAIAWQAVgdAUggQAJgjAYgbQAEAhALAeQAUgMAOgVQAPgVARgNQAVA0ANgtQANgtAAgiQAJAaAeAkQAbAjAZAVQAVgPACgTQACgUAhAVQAiAYAWAlQAQgGAHgNQAGgNAOgJQgNAUAHAYQAUgGAVgHQgBAZARAUQAPgMAHgSg");
	this.shape_45.setTransform(48.9,-208.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E8A225").s().p("AlBD+IgXggQgYgfgQgjQgDgmgPgkQAhACAXAWQAAgsgKgrQgKgqADgrQAKAHAEAMQADAMAOAEQAPhSAZhEQgDAYAOAXQANAYAIAWQAVgdAUggQAJgjAYgbQAEAhALAeQAUgMAOgVQAPgVARgNQAVA0ANgtQANgtAAgiQAJAaAeAkQAbAjAZAVQAVgPACgTQACgUAhAVQAiAYAWAlQAQgGAHgNQAGgNAOgJQgNAUAHAYIApgNQgBAZARAUQAPgMAHgSQALBLAJBNIA8gtQgLAzAEA3QAYgCAWgIQgQARgRAdQAXAMAfgEQgHANglAxQglAxgDAGQgGgCguADQguAEgQAqQgDgBgXgYQgYgYgDgfIAAAoQgDgBgUguQgVgugDhQIgaAaIgbhQIgSANQgRAMgMAPQgHALABgbIABgeQgBADgmAZQgmAZg2AMQg1AMgxglIgUAaIgcACQgSABgFgKQgCAbAHAcQACAcgCAcQgDA3gFAzQAAgOgOgUg");
	this.shape_46.setTransform(48.9,-208.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EABF9B").s().p("AATGcQgSgUgMgWQgXgmgIgtQgJg3AHhpQAHhoAKhXIALhdQgThTAFhWQACgaAIgjQAIgkASgRQgDAcgGAdQACAdAHAbQAPAzgDA4QgFAvgJAvQgEAzABAzQgBAugBAyQAAAYgEAXIAEAwIgHBTQgDAoAKArQAWA3AbA0QgNgOgQgOg");
	this.shape_47.setTransform(21.2,-168.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CB9966").ss(1,1,1).p("AB9nEQhTgbhxgRQhzgRhKBDQhKBDApDjQgBAFgLBYQgKBWgHBpQgHBpAJA3QALBRBSBEQBSBEDLgKQCJgOAzhLQAzhMAAheQABhegNhDQgPhZgDgUIgCgQQAFADAegJQAegKgFg5QgGgrgShGQgShGgphAQgpg/hMgXg");
	this.shape_48.setTransform(48.9,-169);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4D3B0").s().p("AjjG5QhShEgLhRQgJg3AHhpQAHhpAKhWIAMhdQgpjjBKhDQBKhDBzARQBxARBTAbQBMAXApA/QApBAASBGQASBGAGArQAFA5geAKQgeAJgFgDIACAQIASBtQANBDgBBeQAABegzBMQgzBLiJAOIgwABQilAAhIg7g");
	this.shape_49.setTransform(48.9,-169);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EABF9B").s().p("Ah0ATQgCgtgRgPQBCAgBFgNQBHgMA0g1QACAaAIAbQAJAbgOATQgjAcgsADIijAuIgChGg");
	this.shape_50.setTransform(53.8,-120.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#CB9966").ss(1,1,1).p("ACBgmQgZgrANgYQgDAEggAYQgiAZg5ANQg6AOhKgiQAgAXgLAvQgMAxAaAfQAsAcBPgXQBRgXAjgjQAVgjgZgpg");
	this.shape_51.setTransform(54.4,-119);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4D3B0").s().p("AhqBbQgagfAMgxQALgvgggXQBKAiA6gOQA5gNAigZQAggYADgEQgNAYAZArQAZApgVAjQgjAjhRAXQgjAKgdAAQgjAAgYgPg");
	this.shape_52.setTransform(54.4,-119);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#CB9966").ss(1,1,1).p("AgKgFIAVAL");
	this.shape_53.setTransform(54.2,1.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CB9966").ss(1,1,1).p("Ag1AoQABgCAggcQAegZAsgY");
	this.shape_54.setTransform(126.9,-47.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F4D3B0").s().p("AgUAKQAegZAsgYIhrBPIAhgeg");
	this.shape_55.setTransform(126.9,-47.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#6AAFBA").ss(1,1,1).p("AAHjqQA6ALgGAmQgcgBgnABQgpACAFAnQAFANASANQARANAGAOQAHAVgEAYQgDAXAFAVQAIAVAWAcQAVAcARAXQAPATAhATQAiAUAFADQASAbAHAeQgFAOgZAYQgZAYACAJQgngvgcg/Qgdg/gVg5QgYhKgehKQgdg6gwguQgUgSgZgWQgZgWgCgdQACgDAhAMQAhAMAYAKQAKADADABQAgAHA4AKg");
	this.shape_56.setTransform(88,-93.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6AAFBA").s().p("ABDCxQgcg/gXg5QgXhKgehKQgdg6gwguIgtgoQgZgWgDgdQAEgDAgAMIA6AWIAMAEQAgAHA4AKQA6ALgGAmQgcgBgnABQgpACAFAnQAFANASANQARANAGAOQAHAVgDAYQgEAXAFAVQAIAVAVAcIAnAzQAPATAhATIAnAXQATAbAGAeQgEAOgZAYQgaAYACAJQgngvgcg/g");
	this.shape_57.setTransform(88,-93.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#64A1AF").ss(1,1,1).p("ACjCoQgNANgtAwQgsAwgCAKQgngvgag/Qgdg/gVg5QgahKgehKQgdg6gwguQgUgSgZgWQgZgWgDgdQADgDAhAMQAhAMAYAKQAKADADABQBBAWBEAHQBRAMAsA2QArA1AhBKQAnBFAuBEQgggCgYAVQgYAWgUATg");
	this.shape_58.setTransform(95.5,-93.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7CC2D8").s().p("AgGCxQgcg/gXg5QgZhKgehKQgdg6gwguIgtgoQgZgWgDgdQAEgDAgAMIA6AWIAMAEQBBAWBFAHQBQAMAsA2QArA1AhBKQAmBFAvBEQgggCgYAVIgsApQgOANgsAwQgsAwgCAKQgngvgag/g");
	this.shape_59.setTransform(95.5,-93.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EABF9B").s().p("ABLCxIALguQg8g9g2hBQgrguglg1QgQgUgJgXQgFgoAPgpQAUA3AlAtQAjAmAbAqQAYAnAiAlIAkAnQASATAcABQgZBHg5AzQAOgNAHgdg");
	this.shape_60.setTransform(112.7,-57);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CB9966").ss(1,1,1).p("ADzndQAFAFBBBTQBCBTBBBcQBCBcAFAiQAEAsgrBcQgrBfiNCFQiJBwilA/QhLAfhUgFQhUgEhKggQgdgPgQgWQgPgVghgJQgSgCgfgBQgfgBgLgOQgLgWAegKQAegKAWgCQBUgLBQAZQA4AbA8ASQA3AFAwgYQAwgXAkgmQBZhZA2hxQAMgWAghDQAhhEgIgUQgDgDgxg0Qgyg0g2hCQg2hCgRgu");
	this.shape_61.setTransform(97.4,-34.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4D3B0").s().p("AipHdQhUgEhKggQgdgPgQgWQgPgVghgJQgSgCgfgBQgfgBgLgOQgLgWAegKQAegKAWgCQBUgLBQAZQA4AbA8ASQA3AFAwgYQAwgXAkgmQBZhZA2hxQAMgWAghDQAhhEgIgUIg0g3Qgyg0g2hCQg2hCgRguIDnhoIBGBYQBCBTBBBcQBCBcAFAiQAEAsgrBcQgrBfiNCFQiJBwilA/QhBAbhJAAIgVgBg");
	this.shape_62.setTransform(97.4,-34.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EABF9B").s().p("AgRAUQgQgRgBgSQAOAOAbABQAcABgHgZQADAHADASQADATgJADQgIACgKAAQgLAAgQgFg");
	this.shape_63.setTransform(-15.1,-6.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EABF9B").s().p("AgVAWQgSgOACgUQAIANAUABQATAAAOgEQAGgLgBgPQADAIAFAUQAFAXgMACQgJAEgLAAQgNAAgSgHg");
	this.shape_64.setTransform(-6.6,-5.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EABF9B").s().p("AgKAZQgegMAEghQAQAKAZAEQAcAFADgZQADAagEAZQAAACgLAAQgMAAgWgCg");
	this.shape_65.setTransform(0.8,-4.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EABF9B").s().p("AgYAXQgQgRAAgTQAGAAAhAFQAgAGACghQAKAJgDAaQgDAYgMAIQgKAEgJAAQgQAAgOgNg");
	this.shape_66.setTransform(10.6,-4.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#CB9966").ss(1,1,1).p("ABLAKQgfgKg6gUQg9gUABA7QAeACAlADQAjAEAZgJ");
	this.shape_67.setTransform(56.6,-3.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F4D3B0").s().p("AgHAYIhDgFQgBg7A9AUIBZAeIgWAJQgSAGgXAAIgTgBg");
	this.shape_68.setTransform(56.6,-3.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#CB9966").ss(1,1,1).p("AAUghQgPgRgWADQgZALAIAfQACAdASATQAaAKATgHQAIgDgCgYQgCgVgBgDg");
	this.shape_69.setTransform(-15.5,-8.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F4D3B0").s().p("AgOArQgSgTgCgdQgIgfAZgLQAWgDAPARIAOAcIADAYQACAYgIADQgIADgKAAQgNAAgOgGg");
	this.shape_70.setTransform(-15.5,-8.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#CB9966").ss(1,1,1).p("AAWglQgRgUgZAEQgcAMAJAjQACAhAUAWQAeALAWgIQAIgEgCgaQgCgYgBgEg");
	this.shape_71.setTransform(-7.1,-7.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F4D3B0").s().p("AgRAxQgUgWgBghQgKgjAcgMQAZgEASAUIAPAfIADAcQACAagIAEQgJADgLAAQgPAAgRgGg");
	this.shape_72.setTransform(-7.1,-7.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#CB9966").ss(1,1,1).p("AAbgvQgvgUgOAXQgMAYAIAVQADANACARQACASAWAGQAtAFAAgFQACgGAEgpQAEgogTgPg");
	this.shape_73.setTransform(0.7,-7.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F4D3B0").s().p("AgJA3QgWgGgCgSQgCgRgDgNQgIgVAMgYQAOgXAvAUQATAPgEAoQgEApgCAGQAAACgMAAQgMAAgVgCg");
	this.shape_74.setTransform(0.7,-7.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#CB9966").ss(1,1,1).p("AAhhAQgNgPgpAPQgjASANApQAJArATAWQASATAegKQAMgHACgZQACgZgDgMQgBgJgBgWQAAgWgLgLg");
	this.shape_75.setTransform(9.8,-8.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F4D3B0").s().p("AgPA8QgTgWgJgrQgNgpAjgSQApgPANAPQALALAAAWIACAfQADAMgCAZQgCAZgMAHQgKAEgJAAQgPAAgOgNg");
	this.shape_76.setTransform(9.8,-8.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#CB9966").ss(1,1,1).p("AA2AoQgBgCgggcQgegZgsgY");
	this.shape_77.setTransform(-13.6,-48.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#8C7A6C").ss(1,1,1).p("AC2gQQgwAQg6ADQhDAEgXg8QgcAKgeAFQAQgGAPgEQAOgEAMgDADDgVIgNAFQhIAchoAYQhwAbhYgKQAMgvA9gYQAagLAXgJQgIACgIAB");
	this.shape_78.setTransform(-123.2,148);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8C7A6C").s().p("Ai8A0QANgvA9gYIAxgUQAdgFAcgKQAYA8BDgEQA6gCAwgRQhJAchoAYQhRAUhGAAQgZAAgYgDg");
	this.shape_79.setTransform(-123.9,148.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#8C7A6C").ss(1,1,1).p("Aj+gbQgNAOgHAVQCHBDCKgoQBDgOBHgRQAhgJAigRQAjgRAkgDQhLAChGANQhGANhLgBQhEgIg9gRQgpgIgVAGQgSAGgeAJQABAAAAgBQAVgUAlgBAkMgWQAIgDAGgC");
	this.shape_80.setTransform(-47.9,211.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#8C7A6C").s().p("AkSAIQAHgVANgOIAwgPQAVgGApAIQA9ARBEAIQBLABBGgNQBGgNBLgCQgkADgjARQgiARghAJQhHARhDAOQgzAPgzAAQhWAAhVgqgAjDgxIg6AVQAVgUAlgBg");
	this.shape_81.setTransform(-47.9,211.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#64A1AF").ss(1,1,1).p("AhkDmQgBgFAThRQAUhSAthpQAqhqBNhQ");
	this.shape_82.setTransform(30.3,-96.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#64A1AF").ss(1,1,1).p("AAQAAQgBAPgPABQgOgBgBgPQABgOAOgBQAPABABAOg");
	this.shape_83.setTransform(-61.9,131.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#64A1AF").ss(1,1,1).p("AAQAAQgBAPgPABQgOgBgBgPQABgOAOgBQAPABABAOg");
	this.shape_84.setTransform(-1.9,194.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#64A1AF").ss(1,1,1).p("ACMs9QgDABgsANQgsAOgyAPQg0AQgaAIQghANgEAZQgFAZACADIAUAoIgbAbIAbAoIgbA8QABAIAFCwQAFCxADDyQADD1gFDVQgFDWgUBU");
	this.shape_85.setTransform(6.8,115.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#64A1AF").ss(1,1,1).p("AMKqeQABAJgRBJQgRBJgrAhQgBgBgOABQgNABgMARQgMASgNgBQgOgBgBgBQgGgBiCgPQiCgQivgUQiugUiJgOQiMgOgZACQgJgBgNAQQgCAXgYACQgMAAACAUQACAUABADQACACgCAMQgCAMgXAHQgXAJACAaQABAbACADQgCAGgpB+QgpB+g7CsQg7Cvg4CYQg5CZghA6QgBADgLAYQgMAYgMAS");
	this.shape_86.setTransform(7.7,69.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#6AAFBA").ss(1,1,1).p("AgphLQBHBNAIAlQAHAmgEgB");
	this.shape_87.setTransform(5.7,-74.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF99").s().p("AgbAZIAAgcQABgOAEgOQAHgLAEgLIAUA0QAHATANARQgPgJgOAKQgOAFgGALIgCABIgFgcg");
	this.shape_88.setTransform(70.2,-116.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#E0DC4F").ss(1,1,1).p("AB0g0QhCADg+ANQhAARg/ATQg0AWgrAUQBkgUBpAEQBgAIBeAHQgzARhBgCQg+gDg4gCQhLgChCARQgZAPgfAAQAAgbAOgWQgDAAgCAAQgQACgPACQA/gyBagWQBagWBOgOQCMgcB8BJQgfgRg3gFQg4gGgjADg");
	this.shape_89.setTransform(56.6,-57.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E0DC4F").s().p("AkAAgIgFAAIgfAEQA/gyBagWQBagWBOgOQCMgcB8BJQgfgRg3gFQg4gGgjADQhCADg+ANQhAARg/ATIhfAqQBkgUBpAEIC+APQgzARhBgCIh2gFQhLgChCARQgZAPgfAAQAAgbAOgWg");
	this.shape_90.setTransform(56.6,-57.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#64A1AF").ss(1,1,1).p("AgGBdQgCgHgDhCQgChBAZgv");
	this.shape_91.setTransform(19.5,-86.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7CC2D8").s().p("AgLATQgChAAZgvIgSC5QgCgHgDhDg");
	this.shape_92.setTransform(19.5,-86.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABOAyQgQAwgjBNQgiBNg1AxQg2AwhGglQArAZA8ANQA8AOAxAIQARgDAahmQAZhmAbiMQAaiKARhzQAShzABgcQgPA4gSA3QgIA5gGA5QgTBngpBdg");
	this.shape_93.setTransform(-50.1,111);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6AAFBA").s().p("AhRFeQg8gNgrgZQBGAlA2gwQA1gxAihNQAjhNAQgwQAphdAThnQAGg5AIg5QASg3APg4QgBAcgSBzQgRBzgaCKQgbCMgZBmQgaBmgRADQgxgIg8gOg");
	this.shape_94.setTransform(-50.1,111);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#64A1AF").ss(1,1,1).p("ANsqVQgEgDiUglQiTgljwgaQjwgakXAdQgCgDgdAXQgcAYgbBgQgOA4g6CZQg6CahXC+QhWC8hmCiQhlCjhlBIQAFAEBkA3QBkA3COA9QCNA+CEAXQADgGAuinQAvinAyj2QAzj1AQj3QABgFAQgzQAQgzATgaQAagQBIANQBIANAkADQAYACBPAQQBQAQBhAQQBhAQBNAB");
	this.shape_95.setTransform(-21.5,70.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7CC2D8").s().p("AoQK0QiPg9hjg3Qhlg3gEgEQBlhIBmijQBliiBXi8QBXi+A5iaQA6iZAOg4QAbhgAdgYQAcgXACADQEXgdDwAaQDvAaCUAlQCUAlAEADIjOEzQhNgBhhgQQhigQhPgQQhPgQgYgCQglgDhHgNQhIgNgaAQQgUAagPAzIgRA4QgQD3gzD1QgzD2guCnQguCngDAGQiEgXiNg+g");
	this.shape_96.setTransform(-21.5,70.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABHiLQgTAWgKAmQgJAngRAcQgQAYgVAaQgXAbgeAHQAMACAMAbQALAbAFAMQAsg+Awg7QgDAIAHAUQAIAUAFAGQgTgcAAhNQgBhOAQgdg");
	this.shape_97.setTransform(13.2,-79);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6AAFBA").s().p("AgyBlQgMgbgMgCQAegHAXgbQAVgaAPgYQASgcAJgnQAKgmATgWQgRAdACBOQAABNATAcQgFgGgIgUQgHgUACgIQgvA7grA+IgRgng");
	this.shape_98.setTransform(13.2,-79);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#E0DC4F").ss(1,1,1).p("AgkoEQADAsAIAoQAXA1AKBBQAJCNgRCFQgHBDgEBCQgDBEgRBBQgJAiACAXQACAXAGAfQAPBLg8AdQANABAVADQAVADAKAKQADAEATAaQAUAaADADIAHg8IgphdQACgFARhUQAShUAQhoQAQhngBhBQgDhGADhhQAEhiADhLQg4gug4gxg");
	this.shape_99.setTransform(90.1,-43.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E0DC4F").s().p("AAMHoIgWgeQgKgKgVgDIgigEQA8gegPhKQgGgggCgXQgCgWAJgiQARhCADhDQAEhCAHhDQARiFgJiNQgKhBgXg0QgIgogDgtIBwBfIgHCtQgDBiADBFQABBBgQBmQgQBpgSBUIgTBZIApBdIgHA8IgXgdg");
	this.shape_100.setTransform(90.1,-43.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#E0DC4F").ss(1,1,1).p("AGfimQgHgzgdgsQgcgrgSgxQgKgmgJglQgKgmgYgfQgkgogqglQgIgGgGgHQglgmgdgXQgcgWgzAQQgXAIgnAOQgoAOgYgFQgPgLgggKQiqDgg3EYQALA5AMBWQANBYABBUQgCDhhIBfQgRAYgHAJIAsgHQgBgEA4gUQA5gUCCALQBaALBiAYQBkAZBNAXQBNAXATAHIAvA8IAHg8IgohdQABgFAShUQARhUARhoQAQhpgChBQgCg5AFg3QAEg6gEg5g");
	this.shape_101.setTransform(55.7,-57.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF99").s().p("AFLJZQgTgHhNgXQhNgXhkgZQhigYhagLQiCgLg5AUQg4AUABAEIgsAHIAYghQBIhfACjhQgBhUgNhYQgMhWgLg5QA3kYCqjgQAgAKAPALQAYAFAogOIA+gWQAzgQAcAWQAdAXAlAmIAOANQAqAlAkAoQAYAfAKAmIATBLQASAxAcArQAdAsAHAzQAEA5gEA6QgFA3ACA5QACBBgQBpQgRBogRBUIgTBZIAoBdIgHA8g");
	this.shape_102.setTransform(55.7,-57.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#64A1AF").ss(1,1,1).p("ACskAQgbAKgJADQgfAOgXACQgYADgfADQhQANgsA1QgsA1ggBKQgnBFguBEQAggCAYAWQAYAVAUAUQAcAaARAfQARAeAWAaQAxg2Apg8QAAACAKAwQA7kVCujgQgEACgcAIQgcAHgbAJg");
	this.shape_103.setTransform(17.4,-94);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7CC2D8").s().p("AhxDjQgRgfgcgaQgUgUgYgVQgYgWggACQAuhEAnhFQAghKAsg1QAsg1BQgNIA3gGQAXgCAfgOIAkgNQAbgJAcgHQAcgIAEgCQiuDgg7EVIgKgyQgpA8gxA2QgWgagRgeg");
	this.shape_104.setTransform(17.4,-94);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#E0DC4F").ss(1,1,1).p("AADgDIgDAAQAAACgCADQgDAGAIgLg");
	this.shape_105.setTransform(13.6,-4.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#64A1AF").ss(1,1,1).p("AANgmQgBAEgLAhQgIAfgFAJ");
	this.shape_106.setTransform(43.1,-5.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7CC2D8").s().p("AANgmIgMAmQgIAegFAJg");
	this.shape_107.setTransform(43.1,-5.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#64A1AF").ss(1,1,1).p("AANgiQgBAEgHAcQgFAagMAK");
	this.shape_108.setTransform(39,-5.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#7CC2D8").s().p("AANgiIgIAgQgFAagMALg");
	this.shape_109.setTransform(39,-5.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#6AAFBA").ss(1,1,1).p("AA0ikQgLgHgBgBQAgBogtBfQgTAlglAwQgnAwgqAMQCrAMAmipQAVg/gOhCQgGgMgQgPQgRgOgPgJg");
	this.shape_110.setTransform(81.8,16.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6AAFBA").s().p("AhuCsQAqgMAngwQAlgwATglQAthfgghoIAMAIQAPAJARAOQAQAPAGAMQAOBCgVA/QgkCeiXAAIgWgBg");
	this.shape_111.setTransform(81.8,16.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#6AAFBA").ss(1,1,1).p("ACgiOQg4gBhbAHQhZAGgsAjQgCADgRARQgRARgDACQgDAHARAsQAQApAUAuQATAuAGAPQAYgyAxgZQgXgjgXgfQgXgegJgnQAggMAqABQAoABAkADQgMAdgCAhQgCAfgZAZQAmAdAxgMQADgmghgIQAOgHAWgEQgUgLgQgNQAMgBAMgCQgOgiARgkQARglAngMg");
	this.shape_112.setTransform(34.9,-3.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6AAFBA").s().p("AhtBSQgUgugQgpQgRgsADgHIAUgTIATgUQAsgjBZgGQBbgHA4ABQgnAMgRAlQgRAkAOAiIgYADQAQANAUALQgWAEgOAHQAhAIgDAmQgxAMgmgdQAZgZACgfQACghAMgdQgkgDgogBQgqgBggAMQAJAnAXAeQAXAfAXAjQgxAZgYAyIgZg9g");
	this.shape_113.setTransform(34.9,-3.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#64A1AF").ss(1,1,1).p("AFChpIg8hWQhvhJiJgCQiHgDhmAYQhlAXgFAEIgnAnQBUDQA7DaIADAAQAFAFCBANQB/ANC+gtQB2gmAQhQQAPhQgZhCQgahFgFgFg");
	this.shape_114.setTransform(55.8,8.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#7CC2D8").s().p("AhYEJQiBgNgFgFIgDAAQg7jahUjQIAngnQAFgEBlgXQBmgYCHADQCJACBvBJIA8BWQAFAFAaBFQAZBCgPBQQgQBQh2AmQiTAjhtAAQggAAgdgDg");
	this.shape_115.setTransform(55.8,8.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABbkVQgEgChEAJQhCAIhUApQhVApg2BhQg2BfAYCwQACAhgDA1QgCA1AQAZQARgVAFgfQAFgfAMgcQAfg9A2gtQAYgSA8gPQA9gPApAJQAqAIgcA1QAQgSA1gKQA0gLAYgFQBAgSA+gTQg7jZhUjSg");
	this.shape_116.setTransform(2.3,26.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6AAFBA").s().p("AktESQADg1gCghQgYiwA2heQA2hiBVgpQBUgpBCgIQBEgIAEABIBKhKQBUDSA7DYIh+AnIhMAPQg1AKgQASQAcg1gqgIQgpgJg9APQg8APgYASQg2AtgfA9QgMAcgFAeQgFAggRAVQgQgZACg1g");
	this.shape_117.setTransform(2.3,26.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#6AAFBA").ss(1,1,1).p("ABDlnQgJAUgcBhQgbBhgeB5QggB2gXBaQgYBaAAAFQBkA9BwAUQgagcgdgdQgcgdgQgjQgOgrgBg+QgCg9AHgwQAGgtASgtQATgtAIgxQAJgsALg6QAKg6gLgog");
	this.shape_118.setTransform(-41.8,161);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6AAFBA").s().p("AhqEXQAAgFAYhaIA3jQQAeh5AbhhQAchhAKgUQAKAogKA6IgUBmQgIAxgTAtQgSAtgFAtQgIAwACA9QABA+APArQAQAjAcAdIA3A5QhxgUhkg9g");
	this.shape_119.setTransform(-41.8,161);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#64A1AF").ss(1,1,1).p("ADTvSQgEgChEAJQhEAIhSApQhVApg2BhQg2BhAXCwQAZC3ggDxQghDwg3DnQg4DoguCYQguCZgDAGQCyBdCGAUQCFAVBMgMQBMgMABgEQAAgGAFh2QAFh2AFiXQAEiWABhnQgBhOgIiWQgHiWgLifQgKiigIhyQgIhygBgFQAggEA/gRQA/gRA7gSQA6gSAQgFQg7jahUjSg");
	this.shape_120.setTransform(-9.7,96.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#75B9C9").s().p("AhzQQQiGgUiyhdQADgGAuiZQAuiYA4joQA3jnAhjwQAgjxgZi3QgXiwA2hhQA2hhBVgpQBSgpBEgIQBEgJAEACIBKhKQBUDSA7DaIhKAXQg7ASg/ARQg/ARggAEIAJB3IASEUQALCfAHCWQAICWABBOQgBBngECWIgKENIgFB8QgBAEhMAMQgcAEgkAAQg8AAhVgNg");
	this.shape_121.setTransform(-9.7,96.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#706257").ss(1,1,1).p("AgngiQgBAbAAAYQABAbgRAYQASAAAZgHQAYgIAJgRQAEgKAhhdQgLADgoAKQgmALgGAEQgBACAAADg");
	this.shape_122.setTransform(-3.3,224.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#706257").s().p("Ag4BEQARgYgBgbIABgzIABgFQAGgEAmgLIAzgNQghBdgEAKQgJARgYAIQgXAHgSAAIgCAAg");
	this.shape_123.setTransform(-3.3,224.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#8C7A6C").ss(1,1,1).p("Ag9BQQACAugSAaQAXgHAWgKQApgTAugTQAOguALgvQALguABghQgHhAhBgHQhAgHgvADQAiBFgIBRQACAiACAug");
	this.shape_124.setTransform(-3.1,207);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8C7A6C").s().p("Ag9BQIgEhQQAIhRgihFQAvgDBAAHQBBAHAHBAQgBAhgLAuQgLAvgOAuQguATgpATQgWAKgXAHQASgagCgug");
	this.shape_125.setTransform(-3.1,207);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#706257").ss(1,1,1).p("AhFBeQAdgBAxgMQAzgNAHghQAAgBABgiQABgkABg5QgNAFgzASQgyASgHABQAJAfACAwQACAxgfARg");
	this.shape_126.setTransform(-56,160.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#706257").s().p("AgoAcQgCgwgJgfQAHgBAygSIBAgXIgCBdIgBAjQgHAhgzANQgxAMgdABQAfgRgCgxg");
	this.shape_127.setTransform(-56,160.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#8C7A6C").ss(1,1,1).p("ABShrQgHgsgCgEQgUAegqAVQgoAWgkAEQgCBIAPBAQAKApgIASQgHATghAUQAOgBArgNQApgOAogPQAogPADgGQABhJgChGQgBgMgHgsg");
	this.shape_128.setTransform(-58,141.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8C7A6C").s().p("AgyB1QAIgSgKgpQgPhAAChIQAkgEAogWQAqgVAUgeQACAEAHAsQAHAsABAMQACBGgBBJQgDAGgoAPQgoAPgpAOQgrANgOABQAhgUAHgTg");
	this.shape_129.setTransform(-58,141.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#706257").ss(1,1,1).p("AG0hoQguARgsASQixBFjKAWQjLAYjFg1QgEAZAGARQAGAQAeAQQBLAiBuADQBvADBRgKQB3gMBfhMQAHAXAOAVQAfgEBCgIQBDgJARgcQABgBALgdQALggAPgug");
	this.shape_130.setTransform(-41.2,227.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8C7A6C").s().p("AjSBoQhugDhLgiQgegQgGgQQgGgRAEgZQDFA1DLgYQDKgWCxhFQAsgSAugRIgaBOIgMAeQgRAchDAJIhhAMQgOgVgHgXQhfBMh3AMQg+AIhQAAIgygBg");
	this.shape_131.setTransform(-41.2,227.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#8C7A6C").ss(1,1,1).p("AF3ilQhLgghngOQhmgOhYAMQAAACgxApQgzAohmA2QhoAshGAkQhFAlgLBuQgCARgBANQDFA3DLgYQDJgXCyhGQAsgSAtgRQAPgvALgtQALgvAAgiQgDgshLggg");
	this.shape_132.setTransform(-39.3,208.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#BFA78E").s().p("AnEC1IADgeQALhuBFglQBGgkBogsQBmg2AzgoQAxgpAAgCQBYgMBmAOQBnAOBLAgQBLAgADAsQAAAigLAvQgLAtgPAvIhZAjQiyBGjJAXQg9AHg8AAQiNAAiKgmg");
	this.shape_133.setTransform(-39.3,208.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#8C7A6C").ss(1,1,1).p("AF4jLQhLgghngOQhngOhXAMQAAACgxApQgzAohnA2QhoAshFAmQhGAjgKBuQgHArACAWQADAWAlATQBKAiBuADQBvADBSgKQB3gMBfhMQAGAXAOAVQAggEBCgIQBCgJASgcQABgDASgzQASg0AShAQAShDABguQgDgshLggg");
	this.shape_134.setTransform(-39.3,212.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BFA78E").s().p("AjlEAQhugDhKgiQgmgTgCgWQgCgWAHgrQALhuBFgjQBFgmBogsQBng2AygoQAygpAAgCQBXgMBnAOQBnAOBLAgQBLAgADAsQgCAugSBDQgRBAgSA0IgUA2QgRAchCAJIhiAMQgOgVgGgXQhfBMh3AMQg/AIhQAAIgygBg");
	this.shape_135.setTransform(-39.3,212.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#C95050").ss(1,1,1).p("AGIhOQgggMgvAAQhYABhXAIQgsACh4AKQh7AKh9AYQh8AZgzAtQgQAQgBAUQAqAYBBgFQBBgEAwgHQCCgOCAgNQB7gIB1geQAxgMA/gIQA/gLAogkQgrgOgggLg");
	this.shape_136.setTransform(50.3,35.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C95050").s().p("AnSBHQABgUAQgQQAzgtB9gZQB8gYB6gKQB5gKAsgCQBYgIBXgBQAvAAAgAMIBKAZQgoAkg+ALQg/AIgxAMQh2Aeh6AIIkBAbQgxAHhBAEIgVABQgzAAgjgUg");
	this.shape_137.setTransform(50.3,35.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#64A1AF").ss(1,1,1).p("AiNi2QgIgCAtBVQAuBVDJDF");
	this.shape_138.setTransform(83.7,-102.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#AF4848").ss(1,1,1).p("AHeh4QgZgXiWgBQiXgBjWAcQjYAcjeA/IAiCkQAGACCUAEQCUAEDZgJQDbgJDcgmQACgHAFhIQAGhFgTgzQgDgHgFgGg");
	this.shape_139.setTransform(54.2,41);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF6666").s().p("Ak4CQQiUgEgGgCIgiikQDeg/DYgcQDWgcCXABQCWABAZAXQAFAGADAHQATAzgGBFQgFBIgCAHQjcAmjbAJQiWAGh1AAIhigBg");
	this.shape_140.setTransform(54.2,41);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#706257").ss(1,1,1).p("AH0h8QjnBgj6AfQj4Aij4ghQgJArACArQgIACgHgBQC9AnDagGQDWgGCnh2QAMAmAFAoQAegMBLgMQBLgMALgmQAAgBABgiQABgkABg5g");
	this.shape_141.setTransform(-98.9,163.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#8C7A6C").s().p("AnzBbQAIABAHgCQgCgrAJgrQD4AhD4giQD6gfDnhgIgCBdIgBAjQgLAmhLAMQhLAMgeAMQgFgogMgmQinB2jXAGIg1ABQi7AAimgig");
	this.shape_142.setTransform(-98.9,163.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#8C7A6C").ss(1,1,1).p("AFWj1QhsAehoAyQhnAygJAGQg6Akg4AiQg3AjhGAIQhAAGg0AXQgzAWgrA4QgrA5gOBJQD4AiD4giQD5giDohfQABhZgDheQgDhhgNg4QgWg0hrAfg");
	this.shape_143.setTransform(-97.9,139.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#BFA78E").s().p("AnoDxQAOhJArg5QArg4AzgWQA0gXBAgGQBGgIA3gjQA4giA6gkQAJgGBngyQBogyBsgeQBrgfAWA0QANA4ADBhQADBegBBZQjoBfj5AiQh8ARh9AAQh8AAh7gRg");
	this.shape_144.setTransform(-97.9,139.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#8C7A6C").ss(1,1,1).p("AFgkqQhsAfhnAyQhoAygIAGQg7Ajg3AjQg4AihGALQhAAGgzAWQg0AVgrA3QhEBfAEB6QgHACgHgBQC9AnDZgGQDXgGCmh4QAMAoAFAnQAegLBLgMQBLgMALgmQABgFAChaQAChbgDhrQgChtgOg/QgWg0hsAeg");
	this.shape_145.setTransform(-98.9,144.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#BFA78E").s().p("AnzEUQAHABAHgCQgEh6BEhfQArg3A0gVQAzgWBAgGQBGgLA4giQA3gjA7gjQAIgGBogyQBngyBsgfQBsgeAWA0QAOA/ACBtQADBrgCBbIgDBfQgLAmhLAMQhLAMgeALQgFgngMgoQimB4jXAGIg6ABQi4AAikgig");
	this.shape_146.setTransform(-98.9,144.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EABF9B").s().p("AiHBhQAcgBASgTIAkgnQAiglAYgnQAbgqAjgmQAlgtAUg3QAPApgFAoQgJAXgQAUQglA1grAuQg2BBg8A9IALAuQAIAdANANQg4gzgahHg");
	this.shape_147.setTransform(0.5,-57.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#CB9966").ss(1,1,1).p("AAUm8QgFAGg/BSQhCBThCBcQhBBcgFAiQgFAsArBdQArBeCOCFQCMCAAzAHQAzAHADg9QgCg9hMh9QhMh8gpiHQAEgDAxgzQAxg0A2hDQA2hCASgt");
	this.shape_148.setTransform(-10.6,-38.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F4D3B0").s().p("ACkG8QgzgHiMiAQiOiFgrheQgrhdAFgsQAFgiBBhcQBChcBChTIBEhYIDnBpQgSAtg2BCQg2BDgxA0Ig1A2QApCHBMB8QBMB9ACA9QgDA3gpAAIgKgBg");
	this.shape_149.setTransform(-10.6,-38.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#C95050").ss(1,1,1).p("AI8jvQgahGhAgdQhrglh4gBQiSgKiSgDQiUgCiSAWQg/AJhHAWQhHAXgnA2QggA2AXA6QATBJARBHQASBEgBBOQgLBkA2BSQAqAwA4AEQA5ADA8gDQCjgDCjgEQBEAEBXAMQBYANA+gPQBOgcAvhOQAwhOAZhcQAZhdAKhHQANhYgghdg");
	this.shape_150.setTransform(63.5,-66);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C95050").s().p("ADQGAQhXgMhEgEIlGAHQg8ADg5gDQg4gEgqgwQg2hSALhkQABhOgShEIgkiQQgXg6Agg2QAng2BHgXQBHgWA/gJQCSgWCUACQCSADCSAKQB4ABBrAlQBAAdAaBGQAgBdgNBYQgKBHgZBdQgZBcgwBOQgvBOhOAcQgiAIgpAAQgjAAgogGg");
	this.shape_151.setTransform(63.5,-66);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#AF4848").ss(1,1,1).p("AKelAQg3hNh3gWQh4gWhZgHQkZgmkUAiQhcAKhaATQg/AOhQAqQhQAqgSBFQgJBhAlBnQAkBlAPBgQADBYANBZQANBYBbAuQA9AXA/gSQA/gTA9gNQBIgLBVgDQBUgCBFAQQCMAkCSAIQBRAEA9gkQA+glAYhNQAdheAehmQAfhlAPhhQAKg8AChEQADhFgcg0g");
	this.shape_152.setTransform(67,-65.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF6666").s().p("AFeHVQiSgIiMgkQhFgQhUACQhVADhIALQg9ANg/ATQg/ASg9gXQhbgugNhYQgNhZgDhYQgPhggkhlQglhnAJhhQAShFBQgqQBQgqA/gOQBagTBcgKQEUgiEZAmQBZAHB4AWQB3AWA3BNQAcA0gDBFQgCBEgKA8QgPBhgfBlIg7DEQgYBNg+AlQg2AghGAAIgSAAg");
	this.shape_153.setTransform(67,-65.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-0.6,-0.1,7.6,-0.1).s().p("AgbLsQg3gQgFgFIAA3CICvgFIAAXHQgrAagoAAQgPAAgRgFg");
	this.shape_154.setTransform(46.5,126);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#9E9E9E").ss(1,1,1).p("AmBglQAEAFBuAhQBvAjCpAFQCqgFBmgkQBmgjADgF");
	this.shape_155.setTransform(45.3,207);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-34.6,-2.9,29.1,2.4).s().p("AmiCUQing8gHhYQAHhYCng7QCng7D7gDQD8ADCnA7QCoA7AGBYQgGBYioA8QinA7j8ACQj6gCiog7gAlZgiQACAEBXAeQBWAhCUAEQCSAFC6hMQgDgEhbgZQhagZiTgDIgQAAQiOAAimA5g");
	this.shape_156.setTransform(49.5,207.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABVA2QgTAXg1AFQg2AHg5gQIAFgWQAKgZAQgXQA1hHBrgPQAPBrgXAeg");
	this.shape_157.setTransform(53,-174.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F4D3B0").s().p("AhiBJIAFgWQAKgZAQgXQA1hHBrgPQAPBrgXAeQgTAXg1AFQgOACgRAAQgnAAgpgLg");
	this.shape_158.setTransform(53,-174.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-238.8,300,477.7);


(lib.boy_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CB9966").ss(0.5,1,1).p("AAwAkQABgRgJgTQgSgkg1gIIgJABIgFAYQgFAZAHANQANAbAlgBQAbgCAOgHg");
	this.shape.setTransform(-6.4,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4D3B0").s().p("AgrATQgHgNAFgZIAFgYIAJgBQA1AIASAkQAJATgBARQgOAHgbACIgDAAQgjAAgMgag");
	this.shape_1.setTransform(-6.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CB9966").ss(0.5,1,1).p("AAlgqQAMA2gKAPQgIAMgYADQgWAEgbgJIABgLQADgNAHgMQAVgjAvgIg");
	this.shape_2.setTransform(6.9,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4D3B0").s().p("AgqAlIABgLQADgNAHgMQAVgjAvgIQAMA2gKAPQgIAMgYADIgOABQgRAAgSgGg");
	this.shape_3.setTransform(6.9,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-6.5,24.6,13.1);


(lib.audiospeaker = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcDeQgYgdAAgjQAAgZASgYQAWgdAoAAQBZAAAiAxQASAaAAAfQgBAggTAYQgXAbglABQhSAAgjgwgAjKBMIhAgYQgcgHgMgeQgIgQABgQQAAgcBBgzQBEg1AvAAQBPABAXBCQAMAhgEAjQgBAvgHAUQgTAug/ABQgbAAg+gYgABJAmQgJgNAAgRIABgNQgBggAVgYQAOgRATgGQgdAFgiAAQguAAgUglQgNgWABgUQgBguAuggQAwggBLAAQAxAAAVApQAJAWABAWQgBAwgvAdQgUAMgYAGIAMAAQBpAAAoAgQAZAVAAAlQAABNh9ABQhcAAgZgqg");
	this.shape.setTransform(31.5,27);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,54);


(lib.points_available = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"10":1,"7":9,"4":17,"1":25,great:33});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_8 = function() {
		/* stop();*/
	}
	this.frame_16 = function() {
		/* stop();*/
	}
	this.frame_24 = function() {
		/* stop();*/
	}
	this.frame_32 = function() {
		/* stop();*/
	}
	this.frame_46 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(8).call(this.frame_24).wait(8).call(this.frame_32).wait(14).call(this.frame_46).wait(1));

	// Text
	this.instance = new lib._10();
	this.instance.setTransform(25.3,3.8,2,2,0,0,0,59.5,28.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib._7();
	this.instance_1.setTransform(7.1,0.4,2,2,0,0,0,30.5,35.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib._4();
	this.instance_2.setTransform(3.5,0,2,2,0,0,0,30.9,34.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib._1();
	this.instance_3.setTransform(4.2,3.8,2,2,0,0,0,28.4,28.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Great();
	this.instance_4.setTransform(22,1,0.68,0.68,0,0,0,66,25);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:25.2,alpha:1},7).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({scaleX:1,scaleY:1,x:3.6,alpha:1},7).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({scaleX:1,scaleY:1,x:4.1,alpha:1},7).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).to({scaleX:0.4,scaleY:0.4},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Interior = function() {
	this.initialize();

	// Darken overlay
	this.instance = new lib.Darken();
	this.instance.setTransform(3.7,4.3,1.205,1.205);
	this.instance.alpha = 0.449;

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D8DAEB").ss(1,1,1).p("AC4BNIlviZ");
	this.shape.setTransform(111.4,118.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D8DAEB").ss(1,1,1).p("AGBBCIsBiE");
	this.shape_1.setTransform(-41.5,160.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8DAEB").s().p("A0fAAIgNglMApZAAAIggAnQoFAVpIAJQk0AGj8AAQq4AAj3gmg");
	this.shape_2.setTransform(30.6,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFB300").ss(1,1,1).p("AjLtAQA3DNArDiQCILTgfKfID6gdQgMk5g1mQQhosejFmzIiFgKg");
	this.shape_3.setTransform(249,67.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF7E2").s().p("AhpmRQgrjig3jNIguigICFAJQDFG0BoMeQA1GQAME5Ij6AdQAfqfiIrTg");
	this.shape_4.setTransform(249,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFB300").ss(1,1,1).p("AivtvIAYBXQAdB6AWCrQBHIfgVNEIDfBxQALkPgal/Qg0r+i1o1g");
	this.shape_5.setTransform(231.6,67.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE69E").s().p("AgyNvQAVtDhHofQgWirgdh6IgYhWIBkhyQC1I1A0L9QAaGAgLEPg");
	this.shape_6.setTransform(231.6,67.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFA600").ss(1,1,1).p("AlTgwQgJBLBeBEQBdBFCNAUQCMAVBqgoQBqgnAIhNQAJhLhdhEQhehFiNgVQiLgUhqAoQhqAngJBNg");
	this.shape_7.setTransform(248.1,162.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FECC50").s().p("AgUC4QiNgUhdhFQhehEAJhLQAJhNBqgnQBqgoCLAUQCNAVBeBFQBdBEgJBLQgIBNhqAnQhGAahVAAQgsAAgvgHg");
	this.shape_8.setTransform(248.1,162.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFA600").ss(1,1,1).p("AhZiBQhEA8gVBOQgWBRAlA2QAmA1BKgDQBJgEBEg8QBEg8AVhOQAWhRglg2Qgmg2hKAEQhJAEhEA8g");
	this.shape_9.setTransform(225.1,-25.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FECC50").s().p("AijCPQglg2AWhQQAVhOBEg8QBEg8BJgDQBKgEAmA1QAlA2gWBRQgVBPhEA7QhEA8hJADIgKABQhDAAgjgzg");
	this.shape_10.setTransform(225.1,-25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFB300").ss(1,1,1).p("AhynXQAfB0AYCAQBNGZgSF9ICOgQQgHiygejjQg7nDhvj3IhMgGg");
	this.shape_11.setTransform(177.4,68.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF7E2").s().p("Ag7jjQgYiAgfh0IgbhbIBMAGQBvD3A7HDQAeDjAHCyIiOAQQASl9hNmZg");
	this.shape_12.setTransform(177.4,68.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFB300").ss(1,1,1).p("AhjnyIAOAyQAQBEANBhQAoE0gMHaIB+BAQAGiagPjZQgdmxhmlBg");
	this.shape_13.setTransform(167.5,68.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE69E").s().p("AgcHzQAMnagok0QgNhhgQhEIgOgyIA5hAQBmFBAdGxQAPDZgGCag");
	this.shape_14.setTransform(167.5,68.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFA600").ss(1,1,1).p("AjAgbQgFAqA1AnQA1AnBQAMQBOALA9gWQA8gXAFgsQAFgpg1gnQg2gnhQgMQhOgLg8AWQg8AXgFArg");
	this.shape_15.setTransform(176.9,122.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FECC50").s().p("AgLBoQhQgLg1gnQg1gnAFgpQAFgsA8gXQA8gWBOALQBQANA2AnQA1AngFApQgFArg8AWQgoAPgxAAQgZAAgZgEg");
	this.shape_16.setTransform(176.9,122.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFA600").ss(1,1,1).p("ABdhQQgWgfgqACQgoACgnAiQgmAigNAsQgMAtAVAfQAWAfAqgCQAogDAngiQAmghANgsQAMgtgVgfg");
	this.shape_17.setTransform(163.8,15.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FECC50").s().p("AhcBRQgVgfAMgtQANgsAmghQAngjAogBQAqgDAWAfQAVAfgMAuQgNArgmAhQgnAjgoABIgFABQgnAAgUgdg");
	this.shape_18.setTransform(163.8,15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFB300").ss(1,1,1).p("AgkiNQAvD/gLDtIBYgKQgEhvgTiOQglkZhEiaIgvgDIAQA5QATBIAQBQg");
	this.shape_19.setTransform(130,72.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF7E2").s().p("AgkiNQgQhQgThIIgQg5IAvADQBECaAlEZQATCOAEBvIhYAKQALjtgvj/g");
	this.shape_20.setTransform(130,72.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFB300").ss(1,1,1).p("AgjiwQAZC/gHEoIBOAoQAEhggKiIQgSkNg/jIIgjAoIAIAfQALArAHA8g");
	this.shape_21.setTransform(123.8,72.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEE69E").s().p("AgRE3QAHkogZi/QgHg8gLgrIgIgfIAjgoQA/DIASENQAKCIgEBgg");
	this.shape_22.setTransform(123.8,72.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFA600").ss(1,1,1).p("Ah3gQQgDAZAhAYQAhAZAyAHQAwAHAlgOQAmgOADgbQADgZghgYQghgZgygHQgwgHgmAOQglAOgDAbg");
	this.shape_23.setTransform(129.7,106.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FECC50").s().p("AgGBBQgygHghgZQghgYADgZQADgbAlgOQAmgOAwAHQAyAHAhAZQAhAYgDAZQgDAbgmAOQgYAJgeAAQgQAAgPgCg");
	this.shape_24.setTransform(129.7,106.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFA600").ss(1,1,1).p("AgfgtQgXAVgIAbQgHAdANATQAMATAbgCQAYgBAZgVQAXgVAIgbQAHgcgNgUQgMgTgbACQgYABgZAVg");
	this.shape_25.setTransform(121.5,39.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FECC50").s().p("Ag4AzQgNgTAHgdQAIgaAXgWQAZgVAYgBQAagCANAUQANASgHAdQgIAbgXAUQgZAVgYACIgEAAQgXAAgMgRg");
	this.shape_26.setTransform(121.5,39.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFB300").ss(1,1,1).p("AgPg3QATBkgEBeIAmgEQgIiugvhhIgUgCg");
	this.shape_27.setTransform(44.5,82.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFF7E2").s().p("AgPg3IgWhTIAUACQAvBhAICuIgmAEQAEhegThkg");
	this.shape_28.setTransform(44.5,82.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFB300").ss(1,1,1).p("Agah6IAMA1QALBLgDB1IAgAQQAHiWgrh/g");
	this.shape_29.setTransform(41.8,82.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEE69E").s().p("AgGB7QADh1gLhLIgMg1IAQgQQArB/gHCWg");
	this.shape_30.setTransform(41.8,82.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFA600").ss(1,1,1).p("AgzgFQgBAIAOAKQAOAKAWACQAyAHAEgaQABgIgOgKQgPgKgWgCQgTgDgRAFQgQAGgBALg");
	this.shape_31.setTransform(44.4,95.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FECC50").s().p("AgCAZQgWgCgOgKQgPgKACgIQABgLARgGQAPgFAUADQAWACAPAKQAOAKgBAIQgDAVghAAIgSgCg");
	this.shape_32.setTransform(44.4,95.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFA600").ss(1,1,1).p("AgYAUQAOASAXgUQAagTgOgSQgOgSgXAUQgaASAOATg");
	this.shape_33.setTransform(40.8,69.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FECC50").s().p("AgYAUQgOgTAagSQAXgUAOASQAOASgaATQgNAKgIAAQgJAAgHgIg");
	this.shape_34.setTransform(40.8,69.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFB300").ss(1,1,1).p("AgThFQAZB9gGB1IAwgFQgKjZg7h6IgagBg");
	this.shape_35.setTransform(63.2,80.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFF7E2").s().p("AgThFIgchnIAaACQA7B6AKDYIgwAFQAGh1gZh9g");
	this.shape_36.setTransform(63.2,80.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFB300").ss(1,1,1).p("AghiZIAPBCQANBegECSIAqAUQAIi7g3ieg");
	this.shape_37.setTransform(59.9,80.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEE69E").s().p("AgJCZQAEiSgNheIgPhBIATgUQA3CegIC7g");
	this.shape_38.setTransform(59.9,80.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFA600").ss(1,1,1).p("AhAgHQgCALASAMQASAMAbAEQAaAEAUgHQAUgHACgOQACgLgSgMQgSgMgbgEQgagDgUAHQgUAHgCANg");
	this.shape_39.setTransform(63,97.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FECC50").s().p("AgDAgQgbgEgSgMQgSgMACgLQACgNAUgHQAUgHAaADQAbAEASAMQASAMgCALQgCAOgUAHQgNAEgQAAIgRgBg");
	this.shape_40.setTransform(63,97.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFA600").ss(1,1,1).p("AgeAaQAHAJAPgBQAMAAANgLQAfgXgRgXQgRgXgeAaQgfAXARAXg");
	this.shape_41.setTransform(58.6,64.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FECC50").s().p("AgeAaQgRgXAfgXQAegaARAXQARAXgfAXQgNALgMAAIgDAAQgNAAgGgIg");
	this.shape_42.setTransform(58.6,64.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFB300").ss(1,1,1).p("AgcjgIgigCIAlCHQAhClgICaIA/gHQgDhIgNhbQgbi2gwhkg");
	this.shape_43.setTransform(91.9,76.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFF7E2").s().p("AgZhbIgliHIAiACQAwBkAbC1QANBcADBIIg/AGQAIiaghikg");
	this.shape_44.setTransform(91.9,76.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFB300").ss(1,1,1).p("AAnBOQgNivgsiBIgZAaIATBWQASB8gGDAIA3AaQADg+gHhYg");
	this.shape_45.setTransform(87.6,76.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEE69E").s().p("AgMDJQAGi/gSh8IgThXIAZgZQAsCBANCvQAHBYgDA9g");
	this.shape_46.setTransform(87.6,76.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFA600").ss(1,1,1).p("AAFgpQgigFgbAKQgaAJgDARQgCAQAYAQQAYAPAjAFQAiAFAbgJQAbgKACgRQACgQgYgQQgYgPgjgFg");
	this.shape_47.setTransform(91.7,98.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FECC50").s().p("AgEAqQgjgFgYgPQgYgQACgQQADgRAagJQAbgKAiAFQAjAFAYAPQAYAQgCAQQgCARgbAKQgSAGgUAAQgMAAgLgCg");
	this.shape_48.setTransform(91.7,98.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFA600").ss(1,1,1).p("AApgfQgKgNgSABQgRABgRANQgRAPgGAQQgGASAKANQAJAMATgBQARAAARgOQASgOAFgQQAFgTgJgMg");
	this.shape_49.setTransform(85.9,55.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FECC50").s().p("AgoAhQgKgNAGgSQAGgQARgOQARgOARgBQATgBAJANQAJAMgFASQgFARgSAOQgRAOgRAAIgCAAQgRAAgJgLg");
	this.shape_50.setTransform(85.9,55.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFB300").ss(1,1,1).p("AH2a1QgZothprIQjR2PmMsHIkMgQIBcEcQBvFsBWGTQETUIg/Sqg");
	this.shape_51.setTransform(354.3,54.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFF7E2").s().p("AjUrLQhWmThvlsIhckcIEMAQQGMMHDRWPQBpLIAZItIn2AyQA/yqkT0Ig");
	this.shape_52.setTransform(354.3,54.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFB300").ss(1,1,1).p("AE9JbQhp1UlsvtIjKDJIAxCbQA6DXAtEwQCOPKgqXPIHDDJQAVnhg1qrg");
	this.shape_53.setTransform(319.5,54.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEE69E").s().p("AhmYeQAq3PiOvKQgtkwg6jXIgxibIDJjJQFtPtBpVUQA1KrgWHhg");
	this.shape_54.setTransform(319.5,54.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFA600").ss(1,1,1).p("AAqlIQkZgkjUBHQjVBGgSCJQgRCGC7B6QC8B6EbAlQEaAlDUhHQDVhHARiIQASiHi8h6Qi7h6kcglg");
	this.shape_55.setTransform(352.7,224.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FECC50").s().p("AgpFJQkbgli8h6Qi7h6ARiGQARiJDWhGQDUhHEZAkQEcAlC7B6QC8B6gSCHQgRCIjVBHQiMAuiqAAQhZAAhfgMg");
	this.shape_56.setTransform(352.7,224.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFA600").ss(1,1,1).p("AFJj/QhLhgiVAHQiUAHiIBqQiJBrgrCNQgsCPBLBgQBLBgCWgHQCTgHCJhqQCIhqAriNQAsiPhLhhg");
	this.shape_57.setTransform(306.4,-111);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FECC50").s().p("AlIEAQhLhgAsiPQAriNCJhrQCIhqCUgHQCVgHBLBgQBLBhgsCOQgrCOiIBqQiJBqiTAHIgUAAQiHAAhGhZg");
	this.shape_58.setTransform(306.4,-111);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFB300").ss(1,1,1).p("AGa3KQhuFshXGTQkTUIA+SqIn1gyQAZotBprIQDR2PGMsHQCGgICGgIQglBlg3C3g");
	this.shape_59.setTransform(-308.2,19.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFF7E2").s().p("An1a1QAZotBprIQDR2PGMsHIEMgQQglBlg3C3QhuFshXGTQkTUIA+Sqg");
	this.shape_60.setTransform(-308.2,19.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFB300").ss(1,1,1).p("AFj4dQgUAvgdBsQg6DXgsEwQiPPKAqXPInCDJQgWnhA1qrQBp1UFtvtg");
	this.shape_61.setTransform(-273.3,19.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEE69E").s().p("Ak8JbQBp1UFtvtIDIDJQgUAvgcBsQg6DXgtEwQiOPKAqXPInDDJQgVnhA1qrg");
	this.shape_62.setTransform(-273.3,19.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFA600").ss(1,1,1).p("AKrhWQARCGi7B6Qi8B6kbAlQkZAljVhHQjVhHgRiIQgSiHC8h6QC8h6EbglQEZgkDVBHQDUBGASCJg");
	this.shape_63.setTransform(-306.5,189.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FECC50").s().p("AnDEnQjVhHgSiIQgSiHC8h6QC8h6EbglQEZgkDVBHQDVBGARCJQASCGi8B6Qi8B6kbAlQhfAMhZAAQiqAAiLgug");
	this.shape_64.setTransform(-306.5,189.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFA600").ss(1,1,1).p("AC0jnQCJBrArCNQAsCPhLBgQhLBgiWgHQiTgHiIhqQiJhqgriNQgsiPBLhhQBLhgCWAHQCTAHCIBqg");
	this.shape_65.setTransform(-260.3,-145.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FECC50").s().p("ABoFZQiTgHiIhqQiJhrgriMQgsiQBLhgQBLhgCWAHQCTAHCIBqQCJBqArCOQAsCOhLBgQhGBaiHAAIgUAAg");
	this.shape_66.setTransform(-260.3,-145.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFB300").ss(1,1,1).p("AAQg2QgTBhADBcIglgEQAIipAvhfIAUgBg");
	this.shape_67.setTransform(13.5,80.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFF7E2").s().p("AglCDQAHipAvhfIAVgBIgWBQQgTBhADBcg");
	this.shape_68.setTransform(13.5,80.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFB300").ss(1,1,1).p("AAbh3IgMA0QgLBJAEByIghAPQgHiSArh7g");
	this.shape_69.setTransform(16.1,80.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FEE69E").s().p("AALiGIAQAPIgMA0QgLBJAEByIghAPQgHiSArh7g");
	this.shape_70.setTransform(16.1,80.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFA600").ss(1,1,1).p("AA0gFQADAXg0AHQgzAGgDgZQgBgIAOgKQAPgJAVgDQAUgDAQAGQARAFABALg");
	this.shape_71.setTransform(13.6,93.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FECC50").s().p("AgzAGQgBgIAOgKQAPgJAVgDQAUgDAQAGQARAFABALQADAXg0AHIgSABQgiAAgCgUg");
	this.shape_72.setTransform(13.6,93.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFA600").ss(1,1,1).p("AAZATQgOASgXgUQgagRAOgSQAPgSAWAUQAaASgOARg");
	this.shape_73.setTransform(17.1,68.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FECC50").s().p("AgMARQgagRAOgSQAPgSAWAUQAaASgOARQgHAJgJAAQgJAAgMgLg");
	this.shape_74.setTransform(17.1,68.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFB300").ss(1,1,1).p("AAUhCQgYB3AEBwIgugEQAKjQA6h0IAZgCg");
	this.shape_75.setTransform(-6.2,77.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFF7E2").s().p("AguChQAKjPA6h1IAZgCIgbBjQgYB4AEBvg");
	this.shape_76.setTransform(-6.2,77.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFB300").ss(1,1,1).p("AAhiSIgOA/QgNBaAECMIgpASQgIizA1iXg");
	this.shape_77.setTransform(-3,77.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FEE69E").s().p("AAOilIATATIgOA/QgNBaAECMIgpASQgIiyA1iYg");
	this.shape_78.setTransform(-3,77.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFA600").ss(1,1,1).p("ABAgHQACALgSALQgSAMgaADQgZAEgUgHQgUgHgCgNQgBgKARgMQASgLAbgEQAYgDAUAGQAUAHACANg");
	this.shape_79.setTransform(-6.1,93.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FECC50").s().p("AgpAcQgUgIgCgNQgBgKARgLQASgMAbgEQAYgDAUAGQAUAIACAMQACALgSALQgSAMgaADIgQACQgQAAgNgEg");
	this.shape_80.setTransform(-6.1,93.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFA600").ss(1,1,1).p("AAfAZQgHAJgOgBQgNgBgMgKQgggWASgWQARgWAdAZQAeAVgQAXg");
	this.shape_81.setTransform(-1.7,62);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FECC50").s().p("AAKAhQgNgBgMgKQgggWASgWQARgWAdAZQAeAVgQAXQgHAIgNAAIgBAAg");
	this.shape_82.setTransform(-1.7,62);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFB300").ss(1,1,1).p("AAahVQggCaAGCRIg8gGQAEhDAMhXQAZirAvheIAhgCg");
	this.shape_83.setTransform(-32.2,73);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFF7E2").s().p("Ag7DQQAChDANhXQAairAuheIAggCIgiCAQghCaAHCRg");
	this.shape_84.setTransform(-32.2,73);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFB300").ss(1,1,1).p("AAri9IgSBSQgSB0AFC1Ig1AYQgCg6AGhTQANikAqh6g");
	this.shape_85.setTransform(-28,73);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FEE69E").s().p("AglBJQANikAqh6IAZAYIgSBSQgSB0AFC1Ig1AYQgCg6AGhTg");
	this.shape_86.setTransform(-28,73);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFA600").ss(1,1,1).p("Ag9gTQAXgPAigEQAggFAaAJQAaAIACARQADAOgXAPQgXAPgjAFQggAEgagJQgZgIgDgRQgCgOAXgPg");
	this.shape_87.setTransform(-32,93.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FECC50").s().p("Ag2AjQgZgIgDgRQgCgOAXgPQAXgPAigEQAggFAaAJQAaAIACARQADAOgXAPQgXAPgjAFIgSABQgWAAgSgGg");
	this.shape_88.setTransform(-32,93.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFA600").ss(1,1,1).p("AAnAfQgJALgSAAQgQgBgRgNQgQgNgFgPQgGgSAJgLQAKgMASABQAQAAAQANQARANAFAQQAGARgKAMg");
	this.shape_89.setTransform(-26.4,52.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FECC50").s().p("AAMAqQgQgBgRgNQgQgNgFgPQgGgSAJgLQAKgMASABQAQAAAQANQARANAFAQQAGARgKAMQgIALgRAAIgCAAg");
	this.shape_90.setTransform(-26.4,52.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFB300").ss(1,1,1).p("ABak8IgRAzQgUBBgPBJQgwDmAKDWIhZgJQAEhkATiAQAmj+BFiLg");
	this.shape_91.setTransform(-66.3,68.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFF7E2").s().p("AhZE0QAFhkASiAQAmj+BFiLIAxgDIgRAzQgTBBgQBJQgwDmAKDWg");
	this.shape_92.setTransform(-66.3,68.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFB300").ss(1,1,1).p("AAkifQgaCtAIELIhPAkQgEhWAJh7QATj0BAi0IAkAkIgJAcQgKAmgIA3g");
	this.shape_93.setTransform(-60.1,68.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FEE69E").s().p("Ag4BsQATj0BAi0IAkAkIgJAcQgKAmgIA3QgaCtAIELIhPAkQgEhWAJh7g");
	this.shape_94.setTransform(-60.1,68.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFA600").ss(1,1,1).p("AB6gOQADAWghAWQgiAWgzAHQgxAGgmgMQgmgNgEgZQgDgWAigWQAigWAzgHQAwgGAnANQAmAMADAZg");
	this.shape_95.setTransform(-66,99.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FECC50").s().p("AhQA1QgmgNgEgZQgDgWAigWQAigWAzgHQAxgGAmANQAmAMAEAZQACAWghAWQgiAWgzAHQgPACgQAAQgfAAgZgIg");
	this.shape_96.setTransform(-66,99.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFA600").ss(1,1,1).p("AAggpQAYATAIAYQAIAagNARQgOASgbgCQgYgBgZgTQgZgTgHgYQgIgZANgSQAOgRAbABQAYABAZATg");
	this.shape_97.setTransform(-57.7,39.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FECC50").s().p("AASA9QgYgBgZgTQgZgTgHgYQgIgZANgSQAOgRAbABQAYABAZATQAYATAIAYQAIAagNARQgNARgXAAIgFgBg");
	this.shape_98.setTransform(-57.7,39.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFB300").ss(1,1,1).p("AB1mmQggBogYBzQhNFuAQFVIiOgOQAHifAejLQA8mVBwjdIBMgFg");
	this.shape_99.setTransform(-118.1,60.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFF7E2").s().p("AiOHqQAHifAejLQA8mVBwjdIBMgFIgbBRQgfBogZBzQhMFuAQFVg");
	this.shape_100.setTransform(-118.1,60.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFB300").ss(1,1,1).p("ABlm+IgOAtQgQA9gNBXQgpETAMGpIh/A5QgGiJAPjDQAemEBnkfg");
	this.shape_101.setTransform(-108.2,60.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FEE69E").s().p("AhZCsQAemEBnkfIA5A5IgOAtQgQA9gNBXQgpETAMGpIh/A5QgGiJAPjDg");
	this.shape_102.setTransform(-108.2,60.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFA600").ss(1,1,1).p("AgLhcQBPgLA9AUQA8AUAFAnQAGAlg2AjQg2AjhRAKQhOALg9gUQg9gUgFgnQgFglA2gjQA2gjBQgKg");
	this.shape_103.setTransform(-117.7,109.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FECC50").s().p("AiABUQg9gUgFgnQgFglA2gjQA2gjBQgKQBPgLA9AUQA8AUAFAnQAGAlg2AjQg2AjhRAKQgZAEgaAAQgwAAgogNg");
	this.shape_104.setTransform(-117.7,109.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFA600").ss(1,1,1).p("AhdhIQAWgbAqACQApACAoAeQAmAfAMAnQANAogVAcQgWAbgqgCQgpgCgngeQgngegMgnQgNgpAVgcg");
	this.shape_105.setTransform(-104.5,13.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FECC50").s().p("AAdBiQgogCgngeQgngegNgnQgMgpAVgcQAWgbArACQApACAnAeQAmAfAMAnQANAogWAcQgUAZgmAAIgGAAg");
	this.shape_106.setTransform(-104.5,13.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFB300").ss(1,1,1).p("AD/uCQhMDPhHFIQiKKOAeJgIj+gbQANkaA1lrQBrrSDImKQBEgFBEgEg");
	this.shape_107.setTransform(-200.4,48.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFF7E2").s().p("Aj+NpQANkcA1lqQBrrSDImKICIgIQhMDOhHFIQiKKOAeJgg");
	this.shape_108.setTransform(-200.4,48.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFB300").ss(1,1,1).p("AC0scQgpBggkD3QhIHtAVL0IjkBnQgKj2AalbQA1q0C5oAg");
	this.shape_109.setTransform(-182.7,48.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FEE69E").s().p("AigEzQA1q1C5n/IBmBlQgpBggkD3QhIHtAVL0IjkBnQgKj1Aalbg");
	this.shape_110.setTransform(-182.7,48.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFA600").ss(1,1,1).p("AgUimQCOgSBsAjQBsAkAJBGQAJBDhfA+QhgA+iQATQiOAThsgkQhsgkgJhGQgJhDBgg+QBfg+CQgTg");
	this.shape_111.setTransform(-199.5,134.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FECC50").s().p("AjlCWQhtgkgIhGQgJhDBgg+QBfg+CQgTQCOgSBsAjQBsAkAJBGQAJBDhfA+QhgA+iQATQgwAGgtAAQhWAAhHgXg");
	this.shape_112.setTransform(-199.5,134.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFA600").ss(1,1,1).p("ACnCCQgmAxhMgEQhKgDhGg2QhFg2gWhHQgWhJAmgxQAmgwBMADQBKAEBFA1QBGA3AWBGQAWBJgmAxg");
	this.shape_113.setTransform(-176,-35.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FECC50").s().p("AA1CvQhKgDhGg2QhFg2gWhHQgWhJAmgxQAmgwBMADQBKAEBFA1QBGA3AWBGQAWBJgmAxQgkAthEAAIgKAAg");
	this.shape_114.setTransform(-176,-35.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1,1,1).p("AV7hPQoVAXprAKQzUASmrhDIgCAFQgcBbgCAvQFgA+UXgSQKMgJJGgVQgRhNgZhAg");
	this.shape_115.setTransform(31.6,-20.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#727396").s().p("A2jAwQACgvAchbIABgFQGrBDTUgSQJqgKIVgXQAZBAASBNQpGAVqMAJQkmAEj2AAQtKAAkQgwg");
	this.shape_116.setTransform(31.6,-20.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AhGBsIgBAAQinhIjuiPIATAAIBbA2QBsA7BtA3IBQAlIBIABIASgFIA5gTQBigkBtg0QBTgqBZg1IAUAAQiuBpiiBAIiIAwg");
	this.shape_117.setTransform(34.1,49.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A0A8CE").s().p("AhFBnIhQglQhtg3hrg7Ihbg2QHQAGHBgHQhZA1hTApQhtA0hiAlIg4ASIgSAGg");
	this.shape_118.setTransform(34.1,49.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AhYCIIgCAAQjzhelDixIAWABQBGAmBvA5QCCBACJA8IBeAnIAFACIABAAIBaABIAEgBIASgFQAggIAmgMQB5gmCGg8QCIg6CUhRIAVAAQjzCHjkBSQhHAZg+ASIgvANg");
	this.shape_119.setTransform(34.8,52.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#9A9CBC").s().p("AhWCDIgBgBIgFgBIhegnQiJg8iChAQhvg5hGgmICXACQDuCQCnBHIABABIBNABICGgwQCjhBCthpIClgDQiUBRiIA6QiGA7h5AmQgmANggAIIgSAFIgEABg");
	this.shape_120.setTransform(34.8,51.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("An3C0Qhugbiyg4QCXAsCKAiICVAJIgXAEgAGpgqIABAAQC3hFCqhMIANAAQj9BykFBXICTg4g");
	this.shape_121.setTransform(73.2,55.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D8DAEB").s().p("AhwCxQiJgiiYgsQmEh3l8ihQEFAJEDAEQFCCxD0BeIACAAIBcABIAvgNQA+gSBHgZQDlhSDziHQDtgGEOgKQiqBMi3BFIgCAAIiTA4QlpB8kPAug");
	this.shape_122.setTransform(34.1,55.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AnFDQQkki0j3jMIgPgGQgPgGAAgJQAAgFAEgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIAYAUQAyAOB3AHQHTAgVXg4IABAAQADAAACACQABADgCAEIgFAFIgNAJQj2DZkBCbIgUAAQEJieD7jdIABAAIAHgGQ1OA4nRggQhngHgwgKQD9DPEcCsg");
	this.shape_123.setTransform(31.8,18.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BEC5E0").s().p("AnCDAQkcisj8jPQAwAKBnAHQHRAgVNg4IgHAGIAAAAQj7DdkJCeQjgAEj9AAQjaAAjbgDg");
	this.shape_124.setTransform(33.4,19.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("ApyDOQk/ixkXjKIgSgGQgSgHAAgKQAAgFAEgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABgBIADABIAdAXQA9APCVAIIAoACIANALIg2gDQiBgHg8gMQEVDHE+CwgATOipIALgGIjqAIIAIgFIAGgGIDpgIQAEABACACQACADgCACIgBACIgHAGIgQAJQkODSkYCcIgWAAQEhifEVjXg");
	this.shape_125.setTransform(31.8,18);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B7B6CC").s().p("ApxC+Qk+iwkVjGQA8ALCBAIIA2ACQDqC+EOCmgAPWi0IAFgDIDqgIIgLAGQkVDXkhCeIikAEQEBicD1jYg");
	this.shape_126.setTransform(33.8,19.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#D8DAEB").ss(1,1,1).p("AV7JnIgHgTQi9nPqCnIQjJiQjeh+Ii0hhQlJB8j0CkQkkDDjWESQjREOhQEIQExAuH5AaQPvA0Pkhl");
	this.shape_127.setTransform(31.1,-91.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A6B2D5").s().p("ApUKhQn5gakxguQBQkIDRkOQDWkSEkjDQD0ikFJh8IC0BhQDeB+DJCQQKCHIC9HPIALAcQqQBDqWAAQlVAAlYgSg");
	this.shape_128.setTransform(31.1,-91.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1).p("A2aN3QsetDkhvlMBOzABmQnaP3qVLcQohAapyALQzWAWmchMQgEgBgEgBA2aN3QADADACAC");
	this.shape_129.setTransform(33.3,-119.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#BEC5E0").s().p("A2aN3QsetDkhvlMBOzABmQnaP3qVLcQohAapyALQkPAFjqAAQs4AAlBg7g");
	this.shape_130.setTransform(33.3,-119.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BEC5E0").s().p("A2aN3IAFAFIgNgHIAIACQsetDkhvlMBOzABmQnaP3qVLcQohAapyALQkPAFjqAAQs4AAlBg7g");
	this.shape_131.setTransform(33.3,-119.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("AWMKZQosATqAAIQz9AQmfg5QsfpYkqrqMBQLABMQnsL5qOILg");
	this.shape_132.setTransform(34,-81.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B7B6CC").s().p("A28KLQsfpYkqrqMBQLABMQnsL5qOILQosATqAAIQkWAEjvAAQtTAAlEgtg");
	this.shape_133.setTransform(34,-81.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AhLTmIiAgJIgBAAQqYikpVkVQqHksnpmNQkwj2jEkGQhShthAiXQiPlOBliqQAxhRBbgHQBOgGBWAwIABABQBIAoCGBWQCLBZBEAnQD2CLDUANQERARFRBwQAyARBGAcQA6ASBHgNIABAAQAHgBADgTQAEgaAVgCQARgBAYANQAaANANABQJuAoMmAKQAzAAD5ANQC+AKB2gGQFigTDDiwIABgBIBzh7QBIhPA6gbQCOhCFxgMQBlgEDAAEQDHADBdgCQAbgBC7gZQCHgRBSARQBbAVAQAtQANAjgeBbQhODpkTERQhiBhiPB7IjlC+QsQKXvNFrQjtBhiIAvQj0BViXAAQgTAAgSgBgEgxMgTbQhWAGguBNIAAAAQg0BXARCPQAPB5A+CQIAAABQBCCYBPBpQDDEFEvD1IABAAQGyFhIxEVQIKECJLCrQCzA3BtAbIB/AJIAYgEQB8ADC7g5QBwgiDPhSQEFhaD9hyIgMABQL9lXJ6oXIDljAQCPh6BihhQERkQBOjmIAAgBQAdhXgMggQgPgohWgTQhPgRiGASQi5AYgeABQhdACjHgDQjAgEhlAEQluAMiMBBQg5AahHBOIh0B8IAAAAQjHCzllATQh3AGi+gKQj3gNg0AAQsngKptgoQgRgCgagNQgXgMgMABIgCAAQgLACgEASQgEAZgPADIAAAAQhJANg9gSQhHgcgxgRIAAAAQlMhwkTgRQjXgNj4iNQhEgmiMhaQiFhWhJgoQhLgqhEAAIgPABg");
	this.shape_134.setTransform(43,-50.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D8DAEB").s().p("Ag0TcQENguFph8QjKBRhtAiQi2A4h7AAgA5ALYQoxkVmylgIgBgBQkvj1jCkFQhPhohCiZIgBgBQg9iQgPh5QgRiPAzhWIABgBQAuhNBWgGQBKgFBUAvQBIAoCGBWQCLBZBEAnQD5CNDWANQETARFMBwIABAAQAwAQBIAcQA8ASBJgMIABAAQAOgDAEgaQAEgRAMgCIABgBQAMgBAYAMQAaAOAQABQJuAoMmAKQA0ABD4AMQC+AKB3gGQFkgTDHizIABAAIBzh8QBIhNA4gaQCMhCFvgMQBlgDC/ADQDIAEBdgDQAegBC5gYQCGgSBPASQBWASAOApQAMAggdBXIAAAAQhNDmkSEQQhiBhiPB7IjkDAQp7IXr9FWQkOALjtAFQEZicEOjTIAQgKIAGgFIACgCQACgCgDgDQgCgDgDAAIjqAIQACgEgBgDQgCgCgDAAIgBAAQ1XA4nTggQh3gHgygOIgYgUQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgEADAAAFQAAAJAPAGIAPAGIAWASIgogCQiVgJg8gPIgegWIgDgBQgBAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQgFADAAAFQABAKARAHIASAFQEXDNE/CxQkDgFkFgJQF8ChGFB5QpMiroKkCg");
	this.shape_135.setTransform(43.1,-50.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#D8DAEB").ss(1,1,1).p("AhjAQIDHgf");
	this.shape_136.setTransform(86.3,115.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#D8DAEB").ss(1,1,1).p("Ai8gxIF5Bj");
	this.shape_137.setTransform(48.4,116.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#D8DAEB").ss(1,1,1).p("ABqBqIjTjT");
	this.shape_138.setTransform(-0.3,104.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#D8DAEB").ss(1,1,1).p("AqXgxIUvBj");
	this.shape_139.setTransform(-83.9,121.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#D8DAEB").ss(1,1,1).p("EAhCgLUQjCgEk2ASQpqAio+BtQshCXpXEUQrsFXl/IK");
	this.shape_140.setTransform(-158.7,167.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#D8DAEB").ss(1,1,1).p("AgghdIBBC7");
	this.shape_141.setTransform(290.6,274.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#D8DAEB").ss(1,1,1).p("AFJB6IqRjz");
	this.shape_142.setTransform(47.8,163.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#D8DAEB").ss(1,1,1).p("AAcl1Ig3Lr");
	this.shape_143.setTransform(223,223.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#D8DAEB").ss(1,1,1).p("AKHj6I0NH1");
	this.shape_144.setTransform(-35.3,260.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#D8DAEB").ss(1,1,1).p("AL2i8I3rF5");
	this.shape_145.setTransform(64,180.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#D8DAEB").ss(1,1,1).p("AJPgEIydAJ");
	this.shape_146.setTransform(183.4,136.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#D8DAEB").ss(1,1,1).p("AWVv2Qi3AqkRBUQoiConCDTQp4EnlhFRQm5GoAXHU");
	this.shape_147.setTransform(-64.4,198.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#D8DAEB").ss(1,1,1).p("AsosoQhjAgiPA5QkdByjbB9QkyCviBCrQiiDTB/DEQDrFsYwBxQIaAnLjALQGTAHJeAC");
	this.shape_148.setTransform(195.1,183.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#D8DAEB").ss(1,1,1).p("Aq6lxQiYA5hYBiQiwDEFBDPQFBDRMAghQGBgRFAg6");
	this.shape_149.setTransform(224.9,147.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#D8DAEB").ss(1,1,1).p("AKuCFI1bkJ");
	this.shape_150.setTransform(-229,189.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#D8DAEB").ss(1,1,1).p("AmABZIMBix");
	this.shape_151.setTransform(-160.9,185.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1,1,1).p("EA7vAOaUgAOgAJg3DAAKUg4IAAKgFsAAYQA1hXgdhbQgQg1hIhlQhEhhgOg0QgXhWA/hSQAxhAC7g/QBkghAvgQQBQgcAngVQHFjuDIh5QBuhCBwg5QR3pCetAVQP7ALP/FvQJIDSHoEfg");
	this.shape_152.setTransform(-46.1,190.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#B2B6D8").s().p("Eg4+AMLQgQg1hIhlQhEhhgOg0QgXhWA/hSQAxhAC7g/ICTgxQBQgcAngVQHFjuDIh5QBuhCBwg5QR3pCetAVQP7ALP/FvQJIDSHoEfIAAPrUgAOgAJg3DAAKUg4IAAKgFsAAYQA1hXgdhbg");
	this.shape_153.setTransform(-46.1,190.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFA600").s().p("Eg+XAtWQgFAAAAgFMAAAhahQAAgFAFAAMB8vAAAQAFAAAAAFMAAABahQAAAFgFAAgEg+SAtMMB8lAAAMAAAhaXMh8lAAAg");
	this.shape_154.setTransform(28.8,-10.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#7DAAD6").s().p("Eg+SAtMMAAAhaXMB8lAAAMAAABaXgEgu+gZ3QhbAGgxBRQhlCrCOFOQBBCWBSBtQDEEHEvD3QHqGMKGErQJWEWKYCjIABABIB9AIQCdAMEBhYQCPgxD7hmQPNlrMPqVIDljAQCQh7BihiQESkRBPjpQAehagNgkQgQgshcgVQhRgRiHARQi7AZgbABQhdACjIgDQi/gEhlAEQlxALiOBDQg6AbhJBOIhzB8IgBABQjDCwliASQh2AGi+gJQj5gNgzAAQsmgKptgpQgNAAgagOQgZgNgRACQgVACgDAaQgDASgIACIgBAAQhGANg6gSQhGgcgygRQlRhxkRgQQjUgNj3iLQhEgniKhaQiHhWhIgoIgBAAQhNgrhGAAIgQABg");
	this.shape_155.setTransform(28.8,-10.1);

	this.addChild(this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-429.5,-300.3,865.4,601.7);


(lib.girl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.girl_eyes("synched",0);
	this.instance.setTransform(-28.2,-99,0.878,0.857);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604F40").s().p("AAAgNQAmgDADADQALgFADgFQgDAJgDACQANgFADgHQgHARgHACQgzgRgiAXQgWAPgIAJQAegjAigDg");
	this.shape.setTransform(-15,-100.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EABF9B").s().p("AAOgbQAqANADAIQg7gNgfAWQgWATgFAIQAihFAmAMg");
	this.shape_1.setTransform(-15.8,-100.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#604F40").s().p("AA5AQQgcgXhNACIgOgJQgLgLgEgKIAKAMQAKAKAJAFQgEgDgDgSQACAIAIAKQAGgDAuAGQAtAFAaAoQgHgIgOgNg");
	this.shape_2.setTransform(-41.7,-103.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EABF9B").s().p("AArAJQgbgahRADQAGgJAzgMQAwgLAaBTQgFgIgSgUg");
	this.shape_3.setTransform(-40.2,-102.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgkgOQACgBAZAEQAXADAXAX");
	this.shape_4.setTransform(-38.8,-103.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAAQABgFAIAAQAJAAABAFQgBAGgJAAQgIAAgBgGg");
	this.shape_5.setTransform(-40.5,-102.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLgOIAXASQAAAEgQAHg");
	this.shape_6.setTransform(-38.3,-99.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("AAaAAQgDAXgXADQgWgCgDgYQADgWAWgDQAXADADAWg");
	this.shape_7.setTransform(-39.7,-101.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#65C165").s().p("AgZAAQADgWAWgDQAXADACAWQgCAXgXADQgWgCgDgYg");
	this.shape_8.setTransform(-39.7,-101.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.3,1,1).p("AAlAAQgDAjgiACQgggCgEgjQAEghAggDQAiADADAhg");
	this.shape_9.setTransform(-39.7,-101.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#23A723").s().p("AgkAAQAEghAggDQAiADADAhQgDAjgiACQgggCgEgjg");
	this.shape_10.setTransform(-39.7,-101.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABBAOQACgFgYgbQgYgehJAHIgKADQgBADADAYQADAXAPAQQAaAaAngRQAtgTgBgEg");
	this.shape_11.setTransform(-39.9,-100.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsAcQgPgQgDgXIgCgbIAKgDQBJgHAYAeQAYAbgCAFQABAEgtATQgQAGgMAAQgVAAgQgPg");
	this.shape_12.setTransform(-39.9,-100.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EABF9B").s().p("AguAfQgPgSgDgZQgDgaAAgDIALgEQBMgHAZAgQAZAegCAGQABAEgvAUQgRAHgNAAQgWAAgQgQg");
	this.shape_13.setTransform(-40.2,-99.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAAQABgFAIAAQAJAAABAFQgBAGgJAAQgIAAgBgGg");
	this.shape_14.setTransform(-16.5,-100.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLgOIAXASQAAADgQAIg");
	this.shape_15.setTransform(-14.2,-97.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("AAZAAQgCAXgXADQgWgDgCgXQACgWAWgCQAXACACAWg");
	this.shape_16.setTransform(-15.7,-99);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#65C165").s().p("AgYAAQACgWAWgCQAXACACAWQgCAXgXACQgWgCgCgXg");
	this.shape_17.setTransform(-15.7,-99);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.3,1,1).p("AAlAAQgDAhgiAEQgggEgEghQAEghAggDQAiADADAhg");
	this.shape_18.setTransform(-15.7,-99);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#23A723").s().p("AgkAAQAEggAggEQAhAEAEAgQgEAighADQgggDgEgig");
	this.shape_19.setTransform(-15.7,-99);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CB9966").ss(0.5,1,1).p("Ag7AIQgBgFAbgaQAagbBDAOQAAADgGAfQgFAcgMAMQghAQg/gug");
	this.shape_20.setTransform(-16.1,-97.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag7AIQgBgFAbgaQAagbBDAOIgGAiQgFAcgMAMQgJAEgKAAQgdAAgwgig");
	this.shape_21.setTransform(-16.1,-97.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EABF9B").s().p("AgDAqQgdgJgfgYQgBgGAcgcQAdgeBHAPIgGAlQgGAfgNANQgIAFgLAAQgLAAgMgEg");
	this.shape_22.setTransform(-15.7,-97.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7A644E").s().p("AgOBGQgbgRgLgNQgSgWgPghQgQgkAFgcIAjA7QANAYAXAMQALADAEgHIACgEIACgOQABgMABgBQAQANAUARQAVASAVgTQANgPgCgdQgCgcgLgRIAHAIQAUAagBAlQgBAjgNAdQgMAbgXgUQgQgKgBAEIgIAQQgGAHgIAAQgKAAgOgKg");
	this.shape_23.setTransform(-9.2,-119.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7A644E").s().p("AiQBJQgZghAFgoQAFgmAdgdIAbgUQgfAeAJAoQAWApAmgDQAlgEAjgPQAjgJAfgTQAUgRAXgMQAEAOATgLIAbgRQgEARgOANIgCADIgMAOIgGAFQgTASgVAQQglAdgqATQgWANgZgBQgGgIgLAAQgNAFgOAHQgPAHgNAAQgSAAgQgPg");
	this.shape_24.setTransform(-48.1,-123);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#705B47").ss(1,1,1).p("AhiB2QgHgIgOhJQgOhIA1gsQA9gkA2gCQA3gCAhAcQgGgEg3gKQg3gJgjAsQgfAugOAlQgOAogLBBg");
	this.shape_25.setTransform(-14.8,-135.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7A644E").s().p("Ah3AlQgOhIA1gsQA9gkA2gCQA3gCAhAcQgGgEg3gKQg3gJgjAsQgfAugOAlQgOAogLBBQgHgIgOhJg");
	this.shape_26.setTransform(-14.8,-135.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#705B47").ss(1,1,1).p("AFMgoQgDApgSA5QgTA5gCAYQgDAVgSAKQgSAJgDAAQAAgJgrhWQgqhUhZg/QgEgBg9APQg8AQhGAtQhHAvgfBeQgGAoAFAoQgMgQgBgOQAAgOgGgQQgJgOgUgEQgVgFgOAIQABgEgCgsQgBgtgKgqQgUg2ANg6QALghAagiQAagjAegSQAngXAtAAQAqgDAlAQQAlAQBYBUQACgFAxgcQAwgdBJAHQBFAOATAoQATAogCAog");
	this.shape_27.setTransform(-32.9,-117.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#604F40").s().p("AjtDLQAAgOgGgQQgJgOgUgEQgVgFgOAIIgBgwQgBgtgKgqQgUg2ANg6QALghAagiQAagjAegSQAngXAtAAQAqgDAlAQQAlAQBYBUQACgFAxgcQAwgdBJAHQBFAOATAoQATAogCAoQgDApgSA5QgTA5gCAYQgDAVgSAKQgSAJgDAAQAAgJgrhWQgqhUhZg/QgEgBg9APQg8AQhGAtQhHAvgfBeQgGAoAFAoQgMgQgBgOg");
	this.shape_28.setTransform(-32.9,-117.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4D3B0").s().p("AgrAFIAugdQAGACAcAOQAbAMgjgBQgngCgTAMQgRAKgCACg");
	this.shape_29.setTransform(-16.1,-102.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4D3B0").s().p("AgZgFQgpgEgDADIAVgZQAvACAiAUQAjASACADIgTAUQglgigngDg");
	this.shape_30.setTransform(-41.2,-107.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#CB9966").ss(1,1,1).p("AgMgJQAIgBARAV");
	this.shape_31.setTransform(-59.4,-97.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F4D3B0").s().p("AgMgJQAIgBARAVg");
	this.shape_32.setTransform(-59.4,-97.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#CB9966").ss(1,1,1).p("AgTANQALgcAcAE");
	this.shape_33.setTransform(-4.3,-95.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4D3B0").s().p("AAUgLIgnAYQAMgcAbAEg");
	this.shape_34.setTransform(-4.3,-95.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#CB9966").ss(1,1,1).p("AgagWQASgTAWADQAYACAAAgQgFAVgaAPQgZAPgTgQ");
	this.shape_35.setTransform(-4.4,-96.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4D3B0").s().p("AglAfIALg1QASgTAWADQAYACAAAgQgFAVgaAPQgLAHgMAAQgLAAgKgIg");
	this.shape_36.setTransform(-4.4,-96.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#B77070").ss(0.3,1,1).p("ABJAIQgDAEgrAEQgqAFg5gl");
	this.shape_37.setTransform(-29,-80.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#B77070").ss(0.3,1,1).p("AAuALQABAJgNAGQgRAGgcgFQgegFgHggIgKgFQACgBAQgCQAQgDAJgEQANgFAIAFQAKABAHgBQAEABAJAKQAJAKAOADIgQADQABAAACAJg");
	this.shape_38.setTransform(-28.3,-79.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FF9999","#000000"],[0,1],-1.8,0,28.8,0.1).s().p("AgLAbQgegFgHggIgKgFIASgDQAQgDAJgEQANgFAIAFQAKABAHgBQAEABAJAKQAJAKAOADIgQADQABAAACAJQABAJgNAGQgJADgOAAQgLAAgLgCg");
	this.shape_39.setTransform(-28.3,-79.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CB9966").ss(0.5,1,1).p("AARg5QgBACgHARQgBADgBADQgFANABALIAAAMQABAAAMAGQALAGABAQQABAeg5gF");
	this.shape_40.setTransform(-24.5,-91);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4D3B0").s().p("AgcAtIAjhZQgFAMABALIAAAOIANAGQALAFABAPQABAagqAAIgPAAg");
	this.shape_41.setTransform(-24.5,-89.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#705B47").ss(1,1,1).p("AA0AeQAEgDgRgWQgRgVhKgNg");
	this.shape_42.setTransform(-39,-109.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7A644E").s().p("Ag0gdQBKANARAVQARAWgEADg");
	this.shape_43.setTransform(-39,-109.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#705B47").ss(1,1,1).p("AgsARQgBgDARgOQARgPA4gBg");
	this.shape_44.setTransform(-17.8,-106);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7A644E").s().p("AgcAAQARgPA4gBIhZAhQgBgDARgOg");
	this.shape_45.setTransform(-17.8,-106);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EABF9B").s().p("ABFDBQAsg7AGhHIAFgxQADgWgQgUQgfgfgoAIQAigJAJgfQAAgYgXgSIgpggQgtgmg7gPQgggDgigHQAhgCAagPQBcgrBGBGQBKBGAHBaQAGBYgjBbQgQAygfApQgeAkgpAPQAkggAdgmg");
	this.shape_46.setTransform(-22.1,-100.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#CB9966").ss(1,1,1).p("ADbjYQgrg0hEgDQgeAFgcAGQgKgBhEAWQhFAWhMA1QhLA1geBcQgIABADAiQAGApBJADQgCAEATA0QATAzA4A0QA3AzBqACQBEgCA2goQA2gmAZhBQAjhcAAhUQgBhXhBhQg");
	this.shape_47.setTransform(-35.2,-99);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4D3B0").s().p("AhwDbQg4g0gTgzQgTg0ACgEQhJgDgGgpQgDgiAIgBQAehcBLg1QBMg1BFgWQBEgWAKABIA6gLQBEADArA1QBBBPABBXQAABUgjBcQgZBAg2AoQg2AnhEACQhqgCg3gzg");
	this.shape_48.setTransform(-35.2,-99);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BC6868").ss(1,1,1).p("AAGgCQgGACgFAD");
	this.shape_49.setTransform(7.7,-32.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BC6868").ss(1,1,1).p("AgFAaIABgHQADgKABgJQACgHACgJIACgGQAAgBABgC");
	this.shape_50.setTransform(9,-32.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#5A9E5A").ss(1,1,1).p("Ak+i2QgBABgCABQgOAMgBAQQAFAWANACQAAAEACAEQAMAeAWAWQABABABABQAAAGADAHQAGATARAEQgCADgBAFQgDAVAVAWQALAMAKADQgBgGABgHQAEgGALACQAKADgGAJQgJAHgKgCQAEAWAiAOQASAHALAAQALARAUAIQARANAUgCQAGAMAIAJQASAVAYADQAAgSAXADQACAHgCAHQgMACgLgBQAAADABAEQAIAKAZAHQAaAGAMgFQgDgJABgKQARAGgOANQgBAAAAAAQAHAbAjAHQAkAHAMgQQAPANAbAFQAZAEALgLQgFgHAAgKQAGAAAGAAQgCAKgFAHQALAQAigBQAugBAEgpQAKgKADgRQAFgeALgHAk+i2QALgIACAVQgFAAgEAAQgDgHgBgGgAk+iAQgEgTAcAKQgPAKgJgBgAkYhCQgBgOARABQADAggTgTgAj+geQADgGAFgEQAIgHADARQgLACgIgCgAk0jrQgRAZAHAcAhTBzQgCgFgCgGQgHgTAbAFQAKAEgKAJQgJAJgEACQgBAAgCABgAiXBPQgDgEgCgFQAHgMAPADQgCARgPABgAE0DCQgGAGgLADQgDgDgBgDQAHgKAOAEQAAABAAACgACHDSQgFgGgFgGQAIgBAHABQgBAHgEAFg");
	this.shape_51.setTransform(45.2,-55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#5A9E5A").ss(1,1,1).p("AATi+QAAAGgFBVQgFBVgJBZQgGBagMAa");
	this.shape_52.setTransform(77.3,-65.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#80AF80").s().p("AATi+IgFBbQgFBVgJBZQgGBagMAag");
	this.shape_53.setTransform(77.3,-65.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#80AF80").s().p("AAMDVIg2gFQgHADgDgXQAKhWAGhXQAGhBAHhCQABgKAGgjQAHgjAJgOQAFgFAGAGQAIAMgDAaIgGAoIgFB5QgIAygGA1QgDAYAMATQAKAMAOABQAPABAKAKQAHAKgEALQgEALACALQABABgFAFQgEAEgSAAIgMAAg");
	this.shape_54.setTransform(77.3,-62.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#5A9E5A").ss(1,1,1).p("AgTjMQgCgCAHgPQAIgQAfgCIAeACQAAgEAEAEQAEAEACA5QABAugFBZQgGBXgHBSQgHBRgEAVQACABgFAFQgFAGgdgCQg2gEgBgBQgHAEgDgYQACgPAIhXQAHhXAKhdQAKhgAJgpg");
	this.shape_55.setTransform(78.6,-65.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#87C187").s().p("AAADwQg2gEgBgBQgHAEgDgYIAKhmQAHhXAKhdQAKhgAJgpQgCgCAHgPQAIgQAfgCIAeACQAAgEAEAEQAEAEACA5QABAugFBZQgGBXgHBSQgHBRgEAVQACABgFAFQgEAEgTAAIgLAAg");
	this.shape_56.setTransform(78.6,-65.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E56161").s().p("AgIASQAlgUALgoQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIATgKIgSAJIAlgUQgHAZgWAUQgQARgTANQgSAQgWAOQgWALgTANQAhgWAfgZg");
	this.shape_57.setTransform(78.1,94);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E56161").s().p("ABBAVIgpgEIgngDIgTgCQgSgEgSgBQgPgGgQgBQApAFAsAAQATACAUgDQANgEgEgGQgFgHgHgIQAKAFAKAIIATAIIAUAJQAMACALAEQgIAHgSAAIgLgBg");
	this.shape_58.setTransform(3.4,135.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#999999").ss(1,1,1).p("AAQAAQgCAOgOACQgNgCgCgOQACgNANgCQAOACACANg");
	this.shape_59.setTransform(-69.5,7.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgPAAQACgNANgCQAOACACANQgCAOgOACQgNgCgCgOg");
	this.shape_60.setTransform(-69.5,7.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CB9966").ss(1,1,1).p("AAAAUIABgn");
	this.shape_61.setTransform(-37.9,-71.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DB7979").s().p("AgbAwQgjgQgbAMQAWgMAdACQAcACAUgKQAsgiAkguQgOA3gmArQgSALgSAAQgNAAgQgHg");
	this.shape_62.setTransform(-19.6,19);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#5A9E5A").ss(1,1,1).p("AhBAUQAAgCAIgRQAHgPASgEQAegEAZAIQAbAEAKgBQAFgBABgB");
	this.shape_63.setTransform(23.3,-79.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#87C187").s().p("Ag2ABQAGgPATgEQAdgEAaAIQAbAEAKgBIh9AfIAIgTg");
	this.shape_64.setTransform(23,-79.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BC6868").ss(1,1,1).p("AAgADQAAgBgUgCQgTgDgYAD");
	this.shape_65.setTransform(-73.2,-9.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CB9966").ss(1,1,1).p("AAPgUQgDgBgOAJQgQAKAGAX");
	this.shape_66.setTransform(-20.8,120.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EABF9B").s().p("AgSABQAIgcAdgCQgUACABAYQAAAWAQALQgbgCgHgbg");
	this.shape_67.setTransform(-20.5,121.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#C10C09").ss(1,1,1).p("AihAQIABgQQgBgHAZgwQAYgwA9gIIAoA3QAEAEArAjQAuAiAnAWIApAbQABACgHANQgHANgVAKQgZAIgygBQgxgBgSgB");
	this.shape_68.setTransform(0.2,131.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F96262").s().p("AA1BvQgxgBgSgBIiThdIABgQQgBgHAZgwQAYgwA9gIIAoA3IAvAnQAuAiAnAWIApAbQABACgHANQgHANgVAKQgWAIgqAAIgLgBg");
	this.shape_69.setTransform(0.2,131.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CB9966").ss(1,1,1).p("AgMgXQgDADgCAVQgCAXAlAA");
	this.shape_70.setTransform(49.9,92.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EABF9B").s().p("AgaAQQgLgaAYgUIgDAGQgGAWAPAOQARAJAUAGQgMAEgLAAQgSAAgPgPg");
	this.shape_71.setTransform(50.8,91.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E56161").s().p("Ag4AcQAbgXAggMQAigPAdgVQADAMgDAKQgHAGgJACIgnARIgpAVIgUAJIgRAKQADgKAIgGg");
	this.shape_72.setTransform(58.1,104.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#C10C09").ss(1,1,1).p("ADMiUQgLgQgpASQgpAWgLAGQgLAGACAAQgBAFhUAFQhHgEgBgFQgCAGgIAlQgIAnAFAgQgGACgwAaQgwAagWARQgOAOAGAIQAGAHADAFQADAIAMASQAMATACACQAGAHAygUQABABADgDQAEgEgMgRQgVgfAHAGIAFgBQAGgBAdgGQAbgFAGgCQAHgDArgNQAvgTAzgvQAygxAQgRQAPgOAWgWQAWgWACgCQACgEgLgPg");
	this.shape_73.setTransform(72.8,99.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F96262").s().p("AitCbIgOgVQgMgSgDgIIgJgMQgGgIAOgOQAWgRAwgaIA2gcQgFggAIgnIAKgrQABAFBHAEQBUgFABgFIAJgGIA0gcQApgSALAQQALAPgCAEIgYAYIglAkQgQARgyAxQgzAvgvATIgyAQQgGACgbAFIgjAHIgFABQgHgGAVAfQAMARgEAEQgDADgBgBQglAPgNAAQgEAAgCgCg");
	this.shape_74.setTransform(72.8,99.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BC6868").ss(1,1,1).p("AgEgKQAAgCACABQACAAAFAY");
	this.shape_75.setTransform(34.9,-60.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCCCCC").s().p("AgWAPQADgaASgWQAGAPASACIgNAYQgKAWAGAEQgPgGgNgNg");
	this.shape_76.setTransform(28.8,-67.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#999999").ss(1,1,1).p("AgqgqQAAAEANAKQARAMBMgLQAAAFglA6QACADgTADQgRAEg4goQgFgDAagtg");
	this.shape_77.setTransform(32.9,-67);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Ag/AGQgFgDAagtQAAAEANAKQARAMBMgLQAAAFglA6QACADgTADIgDABQgSAAg0glg");
	this.shape_78.setTransform(32.9,-67);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgOgZQAHAFANAQQAFAFACAMQACAMAAAB");
	this.shape_79.setTransform(34.8,-81.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgggWQACAAANACQAOABAHAEQAJAFAKAOQAJARABAC");
	this.shape_80.setTransform(38.7,-84);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BC6868").ss(1,1,1).p("AAUgKQgCgBgPADQgNADgJAQ");
	this.shape_81.setTransform(27.1,-63);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EABF9B").s().p("Ag8BWQgCAAAAgPQABgPAbgoIgKgpIgNgJIgJgEQAAgCAMgLQAMgKAPAIQAUANgIgHQgGgKALgHQAMgDADgGQgCgFAJgIQAIgIAEgCIAPgDIgIAHQgGAEgBAHQACgCALAHIAPAKQAOAOABAUQgOgYgbgHQgKgBgQAHQgNAIAKAKQgTgLgOAIQgIAUANATQAMASgKAWQgXAeAMAhQgNgDgHgLg");
	this.shape_82.setTransform(34.9,-79.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#CB9966").ss(1,1,1).p("AgZhFQgCgCAFgLQAJgKANgHQAQgGABAAQARgCAPAXQAPAWAIANQAJAMAKATQAKASgMAOQgPANghAiQghAigEAEQgCABgcAEQgdAEgWgHIgMgPQgCABAAgPQABgPAbgoIgKgqIgNgJIgJgDQAAgDAMgKQAMgLAPAIQAUANgIgHQgBgBABgKQAAgKATgBQABAAABAA");
	this.shape_83.setTransform(37.8,-79.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F4D3B0").s().p("AhNBlIgMgPQgCABAAgPQABgPAbgoIgKgqIgNgJIgJgDQAAgDAMgKQAMgLAPAIQAUANgIgHQgBgBABgKQAAgKATgBIACAAIgCAAQgCgCAFgLQAJgKANgHIARgGQARgCAPAXIAXAjQAJAMAKATQAKASgMAOQgPANghAiIglAmQgCABgcAEIgTACQgRAAgPgFg");
	this.shape_84.setTransform(37.8,-79.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#5A9E5A").ss(1,1,1).p("AgGARQgCgBABgJQAAgIAQgP");
	this.shape_85.setTransform(41.1,-91.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#87C187").s().p("AgHAGQAAgGAQgPIgPAgQgCgBABgKg");
	this.shape_86.setTransform(41.1,-91.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#69B269").ss(1,1,1).p("ACMhyQghACgOAiQgRAjAkATQABAJg5ASQg4AUgrgOQhFgngdA6QgaA8A9AbQgWgSAIgfQAHggAVgKQAYgIAYAHQAYAHAXgBQA0gCArgaQAYgUgFgYQgFgXAQgaQAIgMAOgGQgFgDgFgBg");
	this.shape_87.setTransform(28.8,-84.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#80AF80").s().p("AiNAcQAdg6BFAnQArAOA4gUQA5gSgBgJQgkgTARgjQAOgiAhgCQAFABAFADQgOAGgIAMQgQAaAFAXQAFAYgYAUQgrAag0ACQgXABgYgHQgYgHgYAIQgVAKgHAgQgIAfAWASQg9gbAag8g");
	this.shape_88.setTransform(28.8,-84.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#5A9E5A").ss(1,1,1).p("AB0h1QgfADgTArQgMAfAiAPQABAIg5ATQg3AUgsgPQhFgmgdA6QgbA7A7AZQAbANArgNQArgNAcgJQApgJAqgYQArgXAZghQAfgtgfgtQgVgcgWABg");
	this.shape_89.setTransform(31.2,-84.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#87C187").s().p("AiFBvQg7gZAbg7QAdg6BFAmQAsAPA3gUQA5gTgBgIQgigPAMgfQATgrAfgDQAWgBAVAcQAfAtgfAtQgZAhgrAXQgqAYgpAJIhHAWQgWAHgRAAQgSAAgNgHg");
	this.shape_90.setTransform(31.2,-84.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BC6868").ss(1,1,1).p("AgmgFQAHgHBGAT");
	this.shape_91.setTransform(-30,-24.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BC6868").ss(1,1,1).p("AhCAJQADgCArgHQAogIAvAA");
	this.shape_92.setTransform(-34.7,-25.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BC6868").ss(1,1,1).p("AgDAYQAGgCABgt");
	this.shape_93.setTransform(-54.8,-45.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BC6868").ss(1,1,1).p("AAIArQgCgBgGgTQgFgSgCgNQAHgeADgF");
	this.shape_94.setTransform(-11.7,-43);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BC6868").ss(1,1,1).p("AAsgIQgGgHhRAZ");
	this.shape_95.setTransform(-69.2,-9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CCCCCC").s().p("AgBAeQgCgMgGgVQgGgXgOgBQAdgFAVAQQACAFAEASQADAUgBACIgVABIgJAAg");
	this.shape_96.setTransform(-57.7,2.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#999999").ss(1,1,1).p("ABbAIQgHgBg6AJQg3AJgYAdQgGABgVgIQgWgIAcgfQAegfASgPQARgPAlAAQApgBAMALQALALgBAog");
	this.shape_97.setTransform(-63.8,4.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AhQAvQgWgIAcgfQAegfASgPQARgPAlAAQApgBAMALQALALgBAoQgHgBg6AJQg3AJgYAdIgCAAQgGAAgTgHg");
	this.shape_98.setTransform(-63.8,4.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#CB9966").ss(1,1,1).p("AAAAbQAAgCAAgTQAAgSAAgO");
	this.shape_99.setTransform(-54.4,27.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EABF9B").s().p("AAAgBQgVgUgQgVQAmgGAWAiQARAagDAgQgVgVgQgYg");
	this.shape_100.setTransform(-56.3,8.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EABF9B").s().p("AgRAbQgXgHAAgPQABgMACgVQADAYAVAHQAFAMASAGQATAHAMABIgWAAQgTAAgRgCg");
	this.shape_101.setTransform(-49.9,28.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EABF9B").s().p("AgbABQANgOAOgIQgMATANADQARAFAPgGQgTAVgaABQgdgEAOgRg");
	this.shape_102.setTransform(-77.8,30);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EABF9B").s().p("AgWAQQgfgCAIgOQAIgLAXgFQgHACALAEQAKAFAFAAQAWgCAVgJQgRAhglAAIgQgBg");
	this.shape_103.setTransform(-71,38.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EABF9B").s().p("AgKAhIAUgQQAKgLgIgXQgJgYgCgNQAcAbgFAnQgFAWgRADQgPADgLAPQAAgLAOgLg");
	this.shape_104.setTransform(-61.4,35.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#CB9966").ss(1,1,1).p("ABWimQgfg1hAApQgEAAgdAVQgdAVgKAqQgFAoABATQABASgQALQgSAMgNAQQgLAPgCADQABgDgWAIQgPAIgCAOQgDAOAWAEQAXgBARgPQARgQAGgFQAHgFATgMQASgMACgCQgCAEgNAgQgNAhgCAYQAAATgHABQgHAAgOADQgQAHgEALQgEALAfACQAmAEAegVQANgZADgeQAFgOAKgRQAJgQACgCQAAACAHASQAHATAEARQADAjgDAEQgBABgQANQgNAMgKALQgKANAQAHQANAIA6gbIAVgMQAAgFAAgzQgBgnAGgHQAAABAOAJQAOAJAeAAQAcgDAGgKQAHgJgCgCQABAAgEgEQgEgDgXgEQgXgGgFgSQgFgSABgCQAAgGgKhBQgJhBgQggg");
	this.shape_105.setTransform(-62.6,23.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F4D3B0").s().p("AgLDDQgQgHAKgNQAKgLANgMIARgOQADgEgDgjIgLgkIgHgUIgLASQgKARgFAOQgDAegNAZQgeAVgmgEQgfgCAEgLQAEgLAQgHIAVgDQAHgBAAgTQACgYANghIAPgkIgUAOIgaARIgXAVQgRAPgXABQgWgEADgOQACgOAPgIQAWgIgBADIANgSQANgQASgMQAQgLgBgSQgBgTAFgoQAKgqAdgVQAdgVAEAAQBAgpAfA1QAQAgAJBBQAKBBAAAGQgBACAFASQAFASAXAGQAXAEAEADQABABABABQABABAAAAQAAABAAAAQAAAAAAAAQACACgHAJQgGAKgcADQgeAAgOgJQgOgJAAgBQgGAHABAnIAAA4IgVAMQgtAVgSAAQgFAAgDgCg");
	this.shape_106.setTransform(-62.6,23.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BC6868").ss(1,1,1).p("AASAAQgIACgbgC");
	this.shape_107.setTransform(-74.6,7.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#BC6868").ss(1,1,1).p("AAGAVQABgBAAgPQABgOgOgM");
	this.shape_108.setTransform(-62,-3.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BC6868").ss(1,1,1).p("AAWADQgCACgQADQgOACgLgR");
	this.shape_109.setTransform(-71.2,2.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CCCCCC").s().p("AAIgNQAIgWgDgFQALAJAFAYIAFAbQgkgBgfAWQAYgaARgcg");
	this.shape_110.setTransform(-26.4,-66.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CCCCCC").s().p("AAIAWQgggVgUAiQgBgSAGgaQAGgbASgHIAWgIIgCAkQAWAiASAhQgPgSgWgMg");
	this.shape_111.setTransform(-38.6,-67.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#999999").ss(1,1,1).p("AA+BSQgGgFgUgRQgagWgYgGQgtAAgEADQAEgFAbghQAcgkAJgRQAKgbgGgBQABgCAKAPQALAPAJA4QAIA1AIARQAEAJACADQACAEAAgB");
	this.shape_112.setTransform(-26.2,-62.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAlA9QgagVgYgGQgtgBgEAEIAfgmQAcgkAJgSQAKgagGgBQABgCAKAPQALAPAJA2QAIA3AIARIAGAMIgagXg");
	this.shape_113.setTransform(-26.3,-62.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#999999").ss(1,1,1).p("AAKhjIgDAkQAIgDA2BzIgxgLQAFgIgtAdQgtAkgDAFQABgJAMg0QALg2AHgZQAEgSACgPQACgOAQgFg");
	this.shape_114.setTransform(-38.8,-62.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("Ag3AnQALg2AHgZIAGghQACgOARgFIAWgHIgDAkQAIgDA2BzIgxgLQAGgIguAdQgtAkgDAFIANg9g");
	this.shape_115.setTransform(-38.8,-62.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DB7979").s().p("AgxgJQgJgJgLgJQgGgCgEgFQgMgTgBgYQgBgKAEgLIAGgLIAIgLQgEAmAcAkQAcAkAXAaQAXAdAbAZQAOALAKANQAHAQAMALQhMg8hChGg");
	this.shape_116.setTransform(-3.1,-35.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DB7979").s().p("Ag7EEQABgJAMgMIASgUIAdgpQAPgWASgfIAUggQACgFAEgiQAEgjgMgNQgMgEgigUQgggUgXgtQgXgsAWhMQgDABgeA5QgdA6gYBkIgFA4IAAAYQAAAPgFAHQgHAIgLgBQgkADgfAQQALgKgPgGQgPgFgLACQANgNANAEQANAGAOgCQAZgQgBglQALg3APg1QAEgOAHgPQANgdAPgbQANgaASgYQAJgLAHgMQANgUAIgVQADgRAAgSQABAEADAEQAGAHAEAHQAIATgDAUQgDAmACAiQABAiAVAiQAlA4BBgNQAZgGAZgJQAfgRAagaQgCAJgHASQgHATgJACIASADIAXAAQAWAAAVAIIACABQgTACgSAIQAVACANASQgdgEgdgIQghgGgdAMQgiAIgWAWQgKAcABAgQACAMgCAMQAOAEgPAJQgLALgJANQgWAbgZAZQgPASgQAVQgNAXgJAWQgJgIgDgLg");
	this.shape_117.setTransform(-50.1,-22.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#BC6868").ss(1,1,1).p("AgjkuQgHA3AbAwQAdA0AKANQAKANgRASQgRAcgWBGQgWBFgHAeQgDAbAHA3QAHA2gCAYQgEAWgFAgQgFAfgCAIQAAAFAKAFQALAEACAAIAThGQAFghgGgyQgGgxAAglQADgmANgoQALgnABgEQgEgBAVg+QANgdAJgFQAKgFAAgHQAEgGABgOQACgPgng6QgdgqgEg0QAAgPADgOQAIgRACgTQgCAAgLAKQgOAKgDAFQgGAQgBARg");
	this.shape_118.setTransform(-30.1,-24);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D37D7D").s().p("AgwFlQgKgFAAgFIAHgnIAJg2QACgYgHg2QgHg3ADgbQAHgeAWhFQAWhGARgcQARgSgKgNQgKgNgdg0QgbgwAHg3QABgRAGgQQADgFAOgKQALgKACAAQgCATgIARQgDAOAAAPQAEA0AdAqQAnA6gCAPQgBAOgEAGQAAAHgKAFQgJAFgNAdQgVA+AEABIgMArQgNAogDAmQAAAlAGAxQAGAygFAhIgTBGIgNgEg");
	this.shape_119.setTransform(-30.1,-24);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#DB7979").s().p("AhvAfQAEgegFgUQgDgZAYgTQAXgRAXABQAyACAyAIQAWAFAaAQQAZAQAAAYQgIgOgNgMQgQgLgSgHQgJAMACARQACAQgHANQgLghgegIQgcgCgaAOQABgVAWgFQgWgFgZAEQgZAEgGAaQgDAZgIAbQgKAZgRAXQAMgTAEgeg");
	this.shape_120.setTransform(29.2,-59.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EABF9B").s().p("Ag9gFIADgkIBxAGQAAAFADAeQAEAggBAJIAAABQg/gSg7gdg");
	this.shape_121.setTransform(-31.6,-70.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#CB9966").ss(1,1,1).p("AA6hKIh0gHQAAADgCAZQgCAagBAEQgBAmAVASQAUATATAeQAZgVASgOQASgOAHgfQABgHgEghQgDggAAgEg");
	this.shape_122.setTransform(-31.6,-66.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F4D3B0").s().p("AgrAhQgVgSABgmIADgeIACgcIB0AHIADAkQAEAhgBAHQgHAfgSAOIgrAjQgTgegUgTg");
	this.shape_123.setTransform(-31.6,-66.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#DB7979").s().p("AglAdQADhGg6AGQg7AGgxAXQBVgqBYgnQgBgGCIgDQAUAIAQARQAbASAeALQgUgCgUAHQgVAIgFAWQgCAUASAYQARAXAPAMQhMg5gzBGQgKgHABgOQABgNgTgHQgdgEgOAbQgUAUgcAKQAOgiALgig");
	this.shape_124.setTransform(-38.2,-61);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#DB7979").s().p("AhgBiQgKgEgGgJQgDgJgIgFIARADQAMACAEgDQACgGgLgHIgQgJQAkACAegSQAJgMgUgCQgRgHgEgRQAPAOAXgCQAIAAAHgHQAJgJALgGQAKgBALgGQAJgHAGgLQAKgTgNgRQAbASgOAdQAKAAAFAHQAbgGAGgZQABgNgCgLQgDgKgGgIQgGgEgBgHQAFABAFACQAhAUALAkQAEADgKAYQgLAWhKALQhIALgLASQgMASAEACIAqAnQgDABgbABIgGAAQgYAAgTgHg");
	this.shape_125.setTransform(-65.1,2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BC6868").ss(1,1,1).p("AioEEQgHAIgHAKQgjAtgEAFQABAFASAsQASArAeAUQAZAOAJgCQAJgCA1gWQA3gVANACQAMABACACIAQhTQBDAMAJANQAJANADgDQAJgHAcgPQAdgOAUgEQArgGAIgDQgzgSgggwQgggwgNgZQgKgbADgvQAEgvABgFQALgOAXgOQAXgPAngkQAjgpgCgeQgCgcgDgCQAyAmB3BxQAcAYAkgFAHRhdQgHgIgGgHQgTgXgTgYQgKgNgIgMQgtg8gnhBQg2hHg3gPQgcgNgmgWQgngXgEgCQiIACABAHQgFADhGAgQhGAhhEAYQg8AegRBSQgRBRgEAZQgFANgOA6QgPA6gXBDQgWBFgfAuQgqBBARAnQARAnAhAGQAcAGAHAOQAHAOAQAKQAWAIAbgBQAcgCACAAIgpgoQgEgCALgSQALgSBLgKQBAgKAQgTQABgCABgBQABgCABgCQAKgYgEgDQgYg4gugKQgtgJgFADIAJhtQAYhkAeg6QAeg5ACgBQgVBMAWAsQAXAsAiATQAiAVAMAFQANANgFAjQgEAigBAEQgCADgSAeQgSAfgQAWQgNASgXAd");
	this.shape_126.setTransform(-36.9,-25.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF8A8A").s().p("AiaG4QgegUgSgrQgSgsgBgFIAngyIAOgSQgQAThAAKQhLAKgLASQgLASAEACIApAoIgeACQgbABgWgIQgQgKgHgOQgHgOgcgGQghgGgRgnQgRgnAqhBQAfguAWhFQAXhDAPg6QAOg6AFgNIAVhqQARhSA8geQBEgYBGghIBLgjQgBgHCIgCIArAZQAmAWAcANQA3APA2BHQAnBBAtA8IASAZIAmAvIANAPIAbCFQgkAFgcgYQh3hxgygmQADACACAcQACAegjApQgnAkgXAPQgXAOgLAOQgBAFgEAvQgDAvAKAbQANAZAgAwQAgAwAzASQgIADgrAGQgUAEgdAOQgcAPgJAHQgDADgJgNQgJgNhDgMIgQBTQgCgCgMgBQgNgCg3AVQg1AWgJACIgCAAQgJAAgXgMgAimEBIgCADIACgDIAkgvQAQgWASgfIAUghQABgEAEgiQAFgjgNgNQgMgFgigVQgigTgXgsQgWgsAVhMQgCABgeA5QgeA6gYBkIgJBtQAFgDAtAJQAuAKAYA4QAEADgKAYIgCAEIAAAAg");
	this.shape_127.setTransform(-36.9,-25.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#DB7979").s().p("AAbCxQhEgDgvglQg+g2gEhSQAEg5ArgrQAUgWAjgcQAkgcAbAAQgLAbgWAVQgYAUgIAeQgGBAAXA1QAQBCA9AdIBzAtIgtAAIhTgBg");
	this.shape_128.setTransform(-56,26.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#BC6868").ss(1,1,1).p("ACFhbQA3gtgNgaQgNgbgVgQQgVgPgugEQgugEgZgCQgWgBgYATQgXATADAYQAGAegIAfQgJAfgIAdQgTBKgpBCQgiAlAAAyQABAvAtAFQAbgBAWgUQAVgUARgUQAXgZAog/QApg+Ajg1QAig3ADgDg");
	this.shape_129.setTransform(24.3,-44.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF8A8A").s().p("AiwCzQAAgyAiglQAphCAThKIARg8QAIgfgGgeQgDgYAXgTQAYgTAWABIBHAGQAuAEAVAPQAVAQANAbQANAag3AtIglA6QgjA1gpA+QgoA/gXAZQgRAUgVAUQgWAUgbABQgtgFgBgvg");
	this.shape_130.setTransform(24.3,-44.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#DB7979").s().p("AgeBEIg2gVQgggHgjgDIgigFQAEgYApgPIBAgaQA1gXA0gFIBvgIIAPAIIAPAIQAIADAIABQgQAEgQAGQg+AVglAmQgRAWgTARQgMALgRAAQgJAAgLgCg");
	this.shape_131.setTransform(-29.5,11.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#BC6868").ss(1,1,1).p("AGNi6QgeAHgjAdQggAkghBZQggBXgrA7QgwA0gyAVQgzAVgEgBQgFgCg2gMQg4gMgwgCQgxABhNgIQhMgIglgcQgZgUgbg0Qgbg0AbhBQAbhDCHhAIF/gkIAeAQQgGABAVAAQAVAAB4gMQAGgCAvgBQAvgCANAVQgCgBgeAHg");
	this.shape_132.setTransform(-28.5,26.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF8A8A").s().p("AAnDWIg7gOQg4gMgwgCQgxABhNgIQhMgIglgcQgZgUgbg0Qgbg0AbhBQAbhDCHhAIF/gkIAeAQQgGABAVAAQAVAAB4gMQAGgCAvgBQAvgCANAVQgCgBgeAHQgeAHgjAdQggAkghBZQggBXgrA7QgwA0gyAVQgxAUgGAAIAAAAg");
	this.shape_133.setTransform(-28.5,26.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EABF9B").s().p("AgpCIIAKgwIARhNQAJgkAEgCIg/gGIhAgFQgGgDAIgTQAJgTAHgEIAbADQAOgEALgJQAtgpAeg1QAXgfAbgGQAbgGAmgHQgcAJgVAYQgmAngYAwQgNAYgCAZQAFAUAZAAQAOAAAMgDQgNAEgNAVIgWAkQgRAigKAmQgUBQgWBMIAOhmg");
	this.shape_134.setTransform(-12.6,50.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#CB9966").ss(1,1,1).p("ABGoeQAvgGApAnQAjAtgCAnQgBAogDAQQgDAUgbBBQgbBAgPAnQgKAagfBBQgfBAggBCQgdBDgNAhQgSAqgLAjQgKAjATAzQAXA1AcAmQAZAmAKALQAHARgZAvQgXAvgxgNQg3gTgzgnQgzgmAlhAQAHAGAUhmQAFgpAJh2QAJh1ARiAQARiDAdhQIiAgLQgCgDAIgqQAIgpAsguQAtgtBqgPQAEgEAvgFg");
	this.shape_135.setTransform(-6.5,80.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F4D3B0").s().p("Ag3IdQg3gTgzgnQgzgmAlhAQAHAGAUhmQAFgpAJh2QAJh1ARiAQARiDAdhQIiAgLQgCgDAIgqQAIgpAsguQAtgtBqgPQAEgEAvgFQAvgGApAnQAjAtgCAnQgBAogDAQQgDAUgbBBQgbBAgPAnQgKAagfBBIg/CCQgdBDgNAhQgSAqgLAjQgKAjATAzQAXA1AcAmQAZAmAKALQAHARgZAvQgRAlgjAAQgJAAgLgDg");
	this.shape_136.setTransform(-6.5,80.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EABF9B").s().p("AB4DKQgwhIgihFQgQgbgfgbIg7gqQgcgXgxgiQgwgjgjABQAGgDAKgOIAPgUQASgTAWgOQAVgLAUgEQAUgEARgSIAigpQApgpA5gGQgaAbgcAZQgRAWgIAZQgKAcAaAQQAvA3AWBHQAjBjAmBfQAVArAgAuQAgAtAMAuQg9gxgwhHg");
	this.shape_137.setTransform(6.1,38.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#CB9966").ss(1,1,1).p("Aj2nVQAEgBAmAGQAmAGAWAXQARAaAFAhQAFAhADAOQAEANAfBhQAfBgAsB0QAqBxAqBFQA6BaAdAYQAdAYAvASQA2AWA2AHQA1AGAPAAQAIAFgYAnQgZAogEAFQgCgBgngCQgmgCgwAMQgyAPg1gLQg1gLgEg2QABg0gHgSQgHgSgRgdQgSgegsgmQgtglg9hHQg9hMgjg4Qgig6gBgEQgGgHg/g5Qg+g4glgQQgTgJASg3QASg3Asg5QArg4A4gN");
	this.shape_138.setTransform(34.2,53.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F4D3B0").s().p("ACQHSQg1gLgEg2QABg0gHgSQgHgSgRgdQgSgegsgmQgtglg9hHQg9hMgjg4Qgig6gBgEQgGgHg/g5Qg+g4glgQQgTgJASg3QASg3Asg5QArg4A4gNIAEgCQAEgBAmAGQAmAGAWAXQARAaAFAhQAFAhADAOIAjBuQAfBgAsB0QAqBxAqBFQA6BaAdAYQAdAYAvASQA2AWA2AHQA1AGAPAAQAIAFgYAnQgZAogEAFQgCgBgngCQgmgCgwAMQgdAIgdAAQgWAAgXgEg");
	this.shape_139.setTransform(34.2,53.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E56161").s().p("AgGAXQgMgHgKgKQgKgGgJgJIgDgFIABgIIADgIIADgKIArAgIArAdQAAgKAGgBQADAEgBAGQAAALgCAKQgdgFgagNg");
	this.shape_140.setTransform(-20.3,129.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#C10C09").ss(1,1,1).p("ADSBDQgQgLhGguQhFgsgVgVQgNgSgNgSQgLgSgBgBQgDgEgnAPQgmAQgdBTIhXg/QgCABgGAbQgHAaAGAgQAGAdABAAQAAgBgBgCQABABANAKQANAJALADQAIABgFgOQgFgNABgHQAGgCAbAYQAaAZAXAJQAcAGBVAHQBXAHArgFQAigHAMgOQAMgPgHgHg");
	this.shape_141.setTransform(-4.5,131.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F96262").s().p("AAdBsQhVgHgcgGQgXgJgagZQgbgYgGACQgBAHAFANQAFAOgIgBQgLgDgNgJIgOgLIABADIgHgdQgGggAHgaQAGgbACgBIBXA/QAdhTAmgQQAngPADAEIAMATIAaAkQAVAVBFAsIBWA5QAHAHgMAPQgMAOgiAHQgRACgXAAQglAAg1gEg");
	this.shape_142.setTransform(-4.5,131.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3DA83D").s().p("ABRBZQiJgChsgTQhsgUgWgGQgtgQAHgFQACgEABgdQACgMAPgDQAQgDAJgKIAUgdIAMgTIIgArIAtBYQhvAuiGAAIgIAAg");
	this.shape_143.setTransform(-36,43.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3DA83D").s().p("Aj8D2QgbgRgDgMQgDgNABAAQAAgIghhyQghhwhBh7QgDgBgDgPQgDgPAagOQABgDBegXQBegWCvgEQCtgDD1A1IAfAKQABAAAFAGQAEAGgHANQgTAVgoByQgTAphkA7QhjA6hfAuIhkAwQgJADhMARQgrAJgfAAQgXAAgQgFg");
	this.shape_144.setTransform(-42.2,15.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#3F9E3F").ss(1,1,1).p("AGXg5IBPEYIgHAxQgBAFhjAkQhiAkivAHQitAHjnhSQgBgEgXhPQgWhOgjhlQgjhjglhIQgwhjATgaQATgZAHADQAGgECQgaQCQgaDOgBQDRAADJBJQAEgBAOALQAPALgXAmQgaAtgQA6QgRA7AAAFg");
	this.shape_145.setTransform(-43.2,22.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#74C174").s().p("AkqEZIgYhTQgWhOgjhlQgjhjglhIQgwhjATgaQATgZAHADQAGgECQgaQCQgaDOgBQDRAADJBJQAEgBAOALQAPALgXAmQgaAtgQA6QgRA7AAAFIBPEYIgHAxQgBAFhjAkQhiAkivAHIgcABQijAAjVhMg");
	this.shape_146.setTransform(-43.2,22.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-27.7,0,27.7,0).s().p("AigHaQgigLglgWQgmgXgHgnQAAgdAIgcQBbl1Bhl1QAOhUA4ACQA1ABA0AfQA0AfAEAEQAMDwAxDpQAUBxAVBwQAKAnAKAyQAKAzgSAkQgZAjg3AOQg2AOgpAFQghAEghAAQhdAAhbghgABhHNQAdAAAbgJQAdgEAagHQAcgSgJglQgJgkgHgaQgNhEgLhFQgXifgTieQgPh7gNh8Qg8AGg2gDIg3gDQgaB9gdB+IhNFNIgcB5IgMAsIgBAGQgCAgAoAKQBFAeBMAFQAmACAkgBQAhAAAgAFg");
	this.shape_147.setTransform(-39.9,96.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.573,1],-27.1,0,27.2,0).s().p("AgEBlQhzgGhLghQhLgggBgqQAFgrBOgZQBOgZBxAFQBzAGBMAhQBLAgABAqQgFArhOAZQhCAVhdAAIghgBgAiVgqQg/ALgDAVQABATA+ARQA9ARBcAFQBeAEA/gLQA/gLADgVQgBgTg+gQQg9gRhegFIgvgBQg+AAguAHg");
	this.shape_148.setTransform(-40.1,136.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.573,1],-20.4,0,20.5,0).s().p("AgCBAQhXgFg5gUQg4gWgBgaQADgbA7gQQA7gPBVAEQBXAEA5AWQA5AVAAAZQgDAcg7APQgvANhDAAIgegBgAhxgiQgvAHgCANQABANAuAJQAvAMBFAEQBGACAwgGQAvgGADgOQgCgLgugLQgvgLhGgEIgpgBQgrAAghAEg");
	this.shape_149.setTransform(-39.3,101.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#705B47").ss(1,1,1).p("AF1mQQgvAehIgFQhIgFgygOQhBgPg9gQQgQgGgbgFQgbgGgUAFQgUAHAAARQgBARgMANQgEABgSABQgRABACAEQACAAABAgQABAhgSBKQgPA3g1BvQg0Bsg/BwQg+BvgsA3QgDABgFAJQgFAJAbAOQATAMBlAeQBmAfDBAPQC+APElgiQACABAHAAQAHAAgNgUQgPgVgGgfQgGgfgFgZQgXhlgShnQgrjmAcjrQABgKACgLg");
	this.shape_150.setTransform(-47.4,-58.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#604F40").s().p("AgcG0QjBgPhmgfQhlgegTgMQgbgOAFgJQAFgJADgBQAsg3A+hvQA/hwA0hsQA1hvAPg3QAShKgBghQgBgggCAAQgCgEARgBIAWgCQAMgNABgRQAAgRAUgHQAUgFAbAGQAbAFAQAGQA9AQBBAPQAyAOBIAFQBIAFAvgeIgDAVQgcDrArDmQASBnAXBlIALA4QAGAfAPAVQANAUgHAAQgHAAgCgBQjLAXibAAQhEAAg5gEg");
	this.shape_151.setTransform(-47.4,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-148,190.3,295.4);


(lib.girl_no_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Blink
	this.instance = new lib.girl_eyes("synched",0);
	this.instance.setTransform(-32.3,-113);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({_off:false},0).wait(2));

	// Character
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CB9966").ss(1,1,1).p("AAEAeQgBgEgDgZQgDgXAAgH");
	this.shape.setTransform(-20.6,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4D3B0").s().p("AAAACQgDgXAAgIIAHA7IgEgcg");
	this.shape_1.setTransform(-20.6,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB7979").s().p("AAFC6QgDgEAAgGIAAAIQgCgzgJgvQgLgvgBgxIACgwQACgVgNgXQgMgRgKgZQgKgZASgSQABAsAcAiQASAOAJARQgEAZgIAeQAAA+AaA6QAFAUAAAeQAAAdAagCQgPAOgVAAQgHAAgJgCg");
	this.shape_2.setTransform(-8.5,-35.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(1,1,1).p("AgTAAQACASARACQASgCACgSQgCgRgSgCQgRACgCARg");
	this.shape_3.setTransform(-2.9,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAAQADgRAQgCQASACABARQgBASgSACQgQgCgDgSg");
	this.shape_4.setTransform(-2.9,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgjAjQgCgDAFgYQAEgWADgHQAKgLASgCQAUgCAOABQgRACgIAdQgIAagBAOIgmgBg");
	this.shape_5.setTransform(-17.5,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("AhvAKQAJgBBGALQBFALAeAkQAHABAagKQAbgJgignQgmgngVgSQgWgTguABQgygCgOAOQgOANABAyg");
	this.shape_6.setTransform(-10,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABDBDQgegkhFgLQhGgLgJABQgBgyAOgNQAOgOAyACQAugBAWATQAVASAmAnQAiAngbAJQgXAJgIAAIgCAAg");
	this.shape_7.setTransform(-10,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BC6868").ss(1,1,1).p("AgUASQgBgEAJgQQAJgTAYAG");
	this.shape_8.setTransform(-6.5,-3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BC6868").ss(1,1,1).p("AgCgUQgBACgBASQgBAPAKAG");
	this.shape_9.setTransform(-15.9,-5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DB7979").s().p("AApA/QgbgSgcgOQgbgFgaABQgaAAgNgbIgEgLQgLglAegSQARgCAMAMQARAEAPgKQAOgLAQAIQAbAfAlAUQAWAAAMAMQAEAKgCALQgCAKAHAMQALAGgCAMQgJAKgNgBIgQABQgSAAgRgGg");
	this.shape_10.setTransform(-10.3,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BC6868").ss(1,1,1).p("AggADQAAgBAWgCQASgDAaAD");
	this.shape_11.setTransform(-0.5,-16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BC6868").ss(1,1,1).p("AgsgJQAGgHBTAb");
	this.shape_12.setTransform(-4.6,-15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EABF9B").s().p("AhJCCQgGgDANgGIAQgHQAYgGAGgTQAFgSgBgDQAAgIAJhBQAIhDAQggQAUgdAOAFQAOAFAGAWQAHAYgEAYQgsAFgLAcQgLAagHAmQgBAPAAAWQAAAVgKAMQgIAGgWAGQgSAEgKAAIgFAAg");
	this.shape_13.setTransform(-22.1,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EABF9B").s().p("AANBPIgMgCQgHgGgJgHIAAg4IgFgwQgEgiAQgEIACBaQABAYAGANQAHAMAOARQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgGAAg");
	this.shape_14.setTransform(-17.5,28.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EABF9B").s().p("AAVBFQgPgGgGgIQgNgZgCgeQgLgXgPgWQgHgSAIgIQADAAAFAFIAMASIAQARQAHAOgBASQgBAUAFARQAKAaAdADQgFAFgHAAQgFAAgHgDg");
	this.shape_15.setTransform(-7.4,28);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EABF9B").s().p("AAwAxQgPgFgJgHIgbgbQgRgJgWgNQgWgPAIgXQANAQAOANQAKACAKAGIALANQAWAbAjAJQACAPgIAAIgFgCg");
	this.shape_16.setTransform(-0.3,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CB9966").ss(1,1,1).p("AA5ASQACADANAiQAOAhACAZQAAAUAHAAQAHABAPADQAQAHAEALQAFAMggABQgoAFgegWQgOgagDgfQgFgOgLgRQgJgRgCgCQAAACgHATQgHATgFASQgDAkADAEQACABAQANQANANALALQAKAOgQAHQgOAIg8gcIgVgMQAAgGAAg0QABgogGgIQAAACgPAJQgPAJgeAAQgdgDgHgKQgGgKABgBQgBgBAEgDQAEgEAYgEQAYgGAGgTQAFgSgBgDQAAgGAJhDQAKhDAQggQAhg3BCAqQADAAAeAWQAeAVALArQAFAqgBATQgBATAQALQATAMANASQALAOACAEQAAgDAXAIQAPAJACAOQADAPgXADQgYgBgRgQQgSgQgFgFQgIgFgTgNQgTgMgCgBg");
	this.shape_17.setTransform(-11.4,18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4D3B0").s().p("Ag9C1IgVgMIAAg6QABgogGgIQAAACgPAJQgPAJgeAAQgdgDgHgKQgGgKABgBQgBgBAEgDQAEgEAYgEQAYgGAGgTQAFgSgBgDQAAgGAJhDQAKhDAQggQAhg3BCAqQADAAAeAWQAeAVALArQAFAqgBATQgBATAQALQATAMANASIANASQAAgDAXAIQAPAJACAOQADAPgXADQgYgBgRgQIgXgVIgbgSIgVgNIAPAlQAOAhACAZQAAAUAHAAQAHABAPADQAQAHAEALQAFAMggABQgoAFgegWQgOgagDgfQgFgOgLgRIgLgTIgHAVQgHATgFASQgDAkADAEIASAOQANANALALQAKAOgQAHQgDACgGAAQgSAAgvgWg");
	this.shape_18.setTransform(-11.4,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BC6868").ss(1,1,1).p("Agtl1QAEADAcAqQAaApAEAqQABAfAXBZQAYBZAcBSQAcBVAPARQAcAZAJA/QAKA/hXAZQACAFgSAaQgRAbg6gLQgqgJg5gVQg4gVgTgsQgUgsBEhOQACgBAcgJQAdgJAdgHQABgIgMg6QgMg6gEgOQgHgeAFgeQAFgdgEgdQgGgVgNgTQgMgTABgX");
	this.shape_19.setTransform(-4.8,-30.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF8A8A").s().p("AAFFzQgqgJg5gVQg4gVgTgsQgUgsBEhOIAegKQAdgJAdgHQABgIgMg6IgQhIQgHgeAFgeQAFgdgEgdQgGgVgNgTQgMgTABgXIAuijQAEADAcAqQAaApAEAqQABAfAXBZQAYBZAcBSQAcBVAPARQAcAZAJA/QAKA/hXAZQACAFgSAaQgMATghAAQgOAAgQgDg");
	this.shape_20.setTransform(-4.8,-30.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#999999").ss(1,1,1).p("AASAAQgBARgRABQgQgBgBgRQACgPAPgCQARACABAPg");
	this.shape_21.setTransform(-79,8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAAQACgPAPgCQAQACACAPQgCAQgQACQgPgCgCgQg");
	this.shape_22.setTransform(-79,8.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BC6868").ss(1,1,1).p("AAlADQgBgBgXgCQgVgEgcAE");
	this.shape_23.setTransform(-83.3,-11.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BC6868").ss(1,1,1).p("AAygJQgHgIhcAd");
	this.shape_24.setTransform(-78.7,-10.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AgKgEQgIgagPgCQANgBASACQARABAJALQADAGAEAUQAEAXgCADIgjABQgBgNgHgZg");
	this.shape_25.setTransform(-65.6,2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#999999").ss(1,1,1).p("ABnAJQgIgBhBALQg/AKgcAhQgGABgZgJQgYgJAfgkQAjgkAUgRQAUgRAqABQAugCAOANQANAMgCAug");
	this.shape_26.setTransform(-72.5,5.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhcA2QgYgJAfgkQAjgkAUgRQAUgRAqABQAugCAOANQANAMgCAuQgIgBhBALQg/AKgcAhIgBAAQgIAAgWgIg");
	this.shape_27.setTransform(-72.5,5.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CB9966").ss(1,1,1).p("AAAAfQAAgCAAgXQAAgUAAgQ");
	this.shape_28.setTransform(-61.9,31.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EABF9B").s().p("AAAgCQgYgWgSgYQArgHAZAmQAUAegEAlQgYgYgSgcg");
	this.shape_29.setTransform(-64,9.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EABF9B").s().p("AgUAeQgZgIAAgRQAAgOACgYQAEAcAZAIQAFANAUAIQAXAIAMAAIgYACQgWAAgUgEg");
	this.shape_30.setTransform(-56.8,32);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EABF9B").s().p("AgfABQAPgPAQgKQgOAVAQADQATAGARgGQgWAXgdACQgigFAQgTg");
	this.shape_31.setTransform(-88.4,34);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EABF9B").s().p("AgZASQgkgCAJgPQAKgNAagGQgIACAMAFQAMAGAGAAQAZgDAXgKQgTAlgqAAIgSgBg");
	this.shape_32.setTransform(-80.7,43.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EABF9B").s().p("AgMAmIAYgTQALgMgKgaQgJgcgDgOQAgAegFAtQgHAYgTAEQgQADgOARQAAgMAQgMg");
	this.shape_33.setTransform(-69.8,40.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CB9966").ss(1,1,1).p("ADNA9QgEgFgbgEQgagHgGgUQgGgVABgCQAAgHgKhKQgLhKgSgkQgjg8hKAvQgEAAghAXQggAYgMAwQgGAuABAVQABAUgSANQgUANgPATQgMARgDADQABgDgZAJQgRAKgCAQQgDAQAZADQAaAAATgSQAUgSAGgGQAJgFAUgOQAVgNADgCQgCADgPAmQgPAlgDAbQAAAWgIAAQgHABgQAEQgSAHgFANQgFAMAkACQArAFAigYQAPgdADgiQAFgPANgTQAKgTABgCQABACAIAVQAIAVAEATQAEApgEAEQgBABgSAOQgPAOgLANQgMAPASAIQAQAIBBgfIAYgNQAAgGAAg5QgBgsAHgJQAAACAQAKQAQAKAiAAQAggEAHgLQAHgKgCgCQACAAgFgEg");
	this.shape_34.setTransform(-71.2,26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4D3B0").s().p("AgNDeQgSgIAMgPQALgNAPgOIATgPQAEgEgEgpQgEgTgIgVIgJgXIgLAVQgNATgFAPQgDAigPAdQgiAYgrgFQgkgCAFgMQAFgNASgHQAQgEAHgBQAIAAAAgWQADgbAPglIARgpIgYAPIgdATIgaAYQgTASgaAAQgZgDADgQQACgQARgKQAZgJgBADIAPgUQAPgTAUgNQASgNgBgUQgBgVAGguQAMgwAggYQAhgXAEAAQBKgvAjA8QASAkALBKQAKBKAAAHQgBACAGAVQAGAUAaAHQAbAEAEAFQAFAEgCAAQACACgHAKQgHALggAEQgiAAgQgKQgQgKAAgCQgHAJABAsIAAA/IgYANQg0AZgUAAQgGAAgDgCg");
	this.shape_35.setTransform(-71.2,26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BC6868").ss(1,1,1).p("AAUAAQAAABgPAAQgMAAgNgB");
	this.shape_36.setTransform(-84.8,8.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BC6868").ss(1,1,1).p("AAGAZQACgCAAgSQABgPgQgO");
	this.shape_37.setTransform(-70.5,-4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BC6868").ss(1,1,1).p("AAZAEQgDACgRADQgQADgNgU");
	this.shape_38.setTransform(-81,2.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DB7979").s().p("AhtBwQgLgFgHgLQgEgKgJgGIATAFQAOACAEgEQADgHgNgHIgSgLQApACAjgVQAIgIgHgCIgOgFQgUgIgEgTQARAQAagDQAJAAAIgIQAKgKAMgIQAMAAANgGQAKgJAHgMQALgWgPgUQAgAVgRAhQAMAAAFAIQAegHAIgdQACgNgEgNQgDgMgGgJQgHgFgBgIIAKAEQAmAWANApQAEADgLAcQgMAZhUANQhTAMgNAVQgMAUAEACIAvAtQgDABgfACIgGAAQgbAAgWgIg");
	this.shape_39.setTransform(-74,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DB7979").s().p("AAfDJQhPgDg1gqQhGg+gEhcQAFhCAwgxQAXgZAoggQApgfAfgBQgNAggaAXQgaAXgJAiQgIBJAaA8QATBLBFAhICDAzIg2ABQgrAAgwgCg");
	this.shape_40.setTransform(-63.6,30.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#604F40").s().p("AAAgPQArgDAEADQAMgFADgGQgDAKgDACQAPgFADgIQgIATgHACQg8gTgmAaQgaASgIAJQAhgnAogEg");
	this.shape_41.setTransform(-17,-114.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EABF9B").s().p("AAQgfQAvAPAEAJQhEgPgiAaQgZAVgGAJQAnhPArAOg");
	this.shape_42.setTransform(-18,-114.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#604F40").s().p("ABBASQgggahYADIgPgMQgNgLgEgMIALANQALAMALAFQgFgDgEgUQACAJAKAMQAGgEA2AGQAyAGAdAuQgHgJgQgPg");
	this.shape_43.setTransform(-47.4,-117.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EABF9B").s().p("AAwAJQgegdhdACQACgDAfgNQAggNAhAMQAjALARBBQgEgJgXgXg");
	this.shape_44.setTransform(-45.6,-117.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#CB9966").ss(0.5,1,1).p("AgpgQQACgBAdAEQAaAEAaAa");
	this.shape_45.setTransform(-44.1,-117.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAAQABgFAKgBQALABABAFQgBAGgLABQgKgBgBgGg");
	this.shape_46.setTransform(-46.1,-116.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNgRIAaAVQABAEgTAKg");
	this.shape_47.setTransform(-43.5,-113.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.3,1,1).p("AAdAAQgCAbgbACQgZgCgDgbQADgaAZgCQAbACACAag");
	this.shape_48.setTransform(-45.1,-115.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.3,1,1).p("AAqAAQgEAngmAEQglgEgEgnQAEgmAlgEQAmAEAEAmg");
	this.shape_49.setTransform(-45.2,-115.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CB9966").ss(0.5,1,1).p("ABKARQACgGgbggQgcghhTAHIgLAEQgBADAEAbQADAaARATQAdAeAtgUQAzgWgBgDg");
	this.shape_50.setTransform(-45.3,-114.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgyAgQgRgTgDgaQgEgbABgDIALgEQBTgHAcAhQAbAggCAGQABADgzAWQgTAIgOAAQgXAAgSgSg");
	this.shape_51.setTransform(-45.3,-114.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EABF9B").s().p("Ag0AjQgSgVgDgcQgEgeABgDIAMgEQBWgIAdAkQAcAjgCAGQABAEg1AXQgTAJgPAAQgZAAgSgTg");
	this.shape_52.setTransform(-45.7,-113.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgLAAQABgFAKgBQALABABAFQgBAGgLABQgKgBgBgGg");
	this.shape_53.setTransform(-18.8,-114.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNgRIAbAVQgBAEgSAJg");
	this.shape_54.setTransform(-16.2,-110.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.3,1,1).p("AAdAAQgDAbgaACQgagDgCgaQACgaAagCQAaACADAag");
	this.shape_55.setTransform(-17.9,-112.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFFFFF","#009900"],[0,1],0,0,0,0,0,3).s().p("AgcAAQADgZAZgDQAbADACAZQgDAbgaACQgZgDgDgag");
	this.shape_56.setTransform(-17.9,-112.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.3,1,1).p("AAqAAQgEAmgmAEQglgEgEgmQAEglAlgEQAmAEAEAlg");
	this.shape_57.setTransform(-17.9,-112.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFFFFF","#009900"],[0,1],0,0,0,0,0,4.3).s().p("AgpAAQAEglAlgEQAnAEADAlQgDAngnADQglgDgEgng");
	this.shape_58.setTransform(-17.9,-112.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#CB9966").ss(0.5,1,1).p("AhDAJQgBgGAegdQAfgfBLAPQAAAFgGAiQgGAggOAOQgPAKgdgJQgggJghgag");
	this.shape_59.setTransform(-18.3,-111.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgCAsQgggJghgaQgBgGAegdQAfgfBLAPIgGAnQgGAggOAOQgIAFgMAAQgLAAgNgEg");
	this.shape_60.setTransform(-18.3,-111.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EABF9B").s().p("AgDAwQghgKgjgdQgCgGAhggQAggiBRARIgHAqQgHAjgOAQQgJAFgNAAQgMAAgOgEg");
	this.shape_61.setTransform(-17.9,-110.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7A644E").s().p("AgQBQQgfgTgMgPQgUgZgSgmQgSgoAGggIAoBDQAOAbAbAOQAMADAEgIIADgFIACgPQABgOABgCQATAPAXAUQAXAVAZgWQAPgRgDghQgDghgMgSIAIAIQAXAegBAqQgBAogPAhQgOAfgagXQgSgMgCAFIgIATQgHAGgKAAQgLAAgQgKg");
	this.shape_62.setTransform(-10.5,-136.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7A644E").s().p("AikBTQgdgmAGgtQAGgrAhghIAfgXQgkAiAKAuQAaAuArgDQAqgEAogRQAogLAjgVQAXgUAagOQAEAQAWgNIAfgSQgFATgPAPIgDADIgOAQIgGAFQgVAVgZATQgqAggwAWQgYAPgdgBQgHgJgMgBQgPAGgRAIQgQAIgPAAQgVAAgSgRg");
	this.shape_63.setTransform(-54.7,-140);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#705B47").ss(1,1,1).p("ACLhnQgHgGg+gKQg/gKgoAxQgiA1gRArQgQAsgNBKQgHgJgPhTQgQhSA8gyQBFgpA9gCQA/gCAlAgg");
	this.shape_64.setTransform(-16.8,-153.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7A644E").s().p("AiHAqQgQhSA8gyQBFgpA9gCQA/gCAlAgQgHgGg+gKQg/gKgoAxQgiA1gRArQgQAsgNBKQgHgJgPhTg");
	this.shape_65.setTransform(-16.8,-153.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#705B47").ss(1,1,1).p("AFmiJQAWAugDAuQgDAugVBAQgVBBgDAcQgDAYgUALQgVAKgDAAQAAgDgWgyQgVgzgshBQgsg+hDgsQgEgBhGARQhEAShQA0QhQA1gkBrQgGAtAFAuQgOgSAAgQQAAgRgIgSQgJgQgXgEQgYgFgQAIQAAgEgBgyQgBgzgLgwQgXg9APhCQAMgmAdgnQAdgnAjgVQAsgaAzAAQAwgDAqASQAqASBlBgQACgGA3ghQA3ggBTAIQBPAQAVAtg");
	this.shape_66.setTransform(-37.4,-133.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#604F40").s().p("AkNDnQAAgRgIgSQgJgQgXgEQgYgFgQAIIgBg2QgBgzgLgwQgXg9APhCQAMgmAdgnQAdgnAjgVQAsgaAzAAQAwgDAqASQAqASBlBgQACgGA3ghQA3ggBTAIQBPAQAVAtQAWAugDAuQgDAugVBAQgVBBgDAcQgDAYgUALQgVAKgDAAQAAgDgWgyQgVgzgshBQgsg+hDgsQgEgBhGARQhEAShQA0QhQA1gkBrQgGAtAFAuQgOgSAAgQg");
	this.shape_67.setTransform(-37.4,-133.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F4D3B0").s().p("AgxAFIA0ghQAIADAeAPQAfAOgngBQgtgCgWANQgTAMgBADg");
	this.shape_68.setTransform(-18.2,-116.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F4D3B0").s().p("AgdgGQgtgEgEACIAXgbQA1ACAnAXQAoAVACADIgVAWQgqgmgtgEg");
	this.shape_69.setTransform(-46.8,-122);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CB9966").ss(1,1,1).p("AgOgLQAIAAAVAX");
	this.shape_70.setTransform(-67.5,-110.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F4D3B0").s().p("AgOgLQAIAAAVAXg");
	this.shape_71.setTransform(-67.5,-110.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#CB9966").ss(1,1,1).p("AgWAOQANgfAgAE");
	this.shape_72.setTransform(-4.9,-109);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F4D3B0").s().p("AAXgNIgtAbQANgfAgAEg");
	this.shape_73.setTransform(-4.9,-109);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#CB9966").ss(1,1,1).p("AgegZQAVgWAaADQAbADgBAlQgFAXgeARQgdARgVgR");
	this.shape_74.setTransform(-5,-109.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F4D3B0").s().p("AgqAkIAMg9QAVgWAaADQAbADgBAlQgFAXgeARQgNAJgNAAQgNAAgLgJg");
	this.shape_75.setTransform(-5,-109.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#B77070").ss(0.3,1,1).p("ABTAJQgDAEgyAFQgwAFhAgp");
	this.shape_76.setTransform(-32.9,-91.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#B77070").ss(0.3,1,1).p("AAmAdQgTAHgggGQgigFgIgkIgLgHQACAAASgDQATgEAKgEQAPgFAJAGQALABAIgCQAFACAKALQAKAMAQACIgSAEQABABACAKQABAKgPAGg");
	this.shape_77.setTransform(-32.1,-90.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#FF9999","#000000"],[0,1],-2,0,32.8,0.1).s().p("AgNAeQgigFgIgkIgLgHIAVgDQARgEALgEQAOgGAKAHQALABAIgCQAFACAKALQALAMAPACIgSADQACACABAKQABAKgPAGQgKAEgPAAQgMAAgOgDg");
	this.shape_78.setTransform(-32.1,-90.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#CB9966").ss(0.5,1,1).p("AAThBQgBACgIATQgCAFgBAGQgEANAAALIAAANQACAAANAHQAMAIACARQABAihBgF");
	this.shape_79.setTransform(-27.9,-103.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F4D3B0").s().p("AggAxIAnhiQgEANAAALIAAAPQADAAAMAHQAMAGADARQAAAegxAAIgQgBg");
	this.shape_80.setTransform(-27.9,-102.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#705B47").ss(1,1,1).p("AA8AiQAEgDgTgaQgTgXhVgPg");
	this.shape_81.setTransform(-44.3,-124.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7A644E").s().p("Ag7ghQBVAPATAYQATAZgEADg");
	this.shape_82.setTransform(-44.3,-124.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#705B47").ss(1,1,1).p("AgyATQgCgDAUgQQAUgSA/AAg");
	this.shape_83.setTransform(-20.2,-120.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7A644E").s().p("AggAAQAUgSA/AAIhlAlQgCgDAUgQg");
	this.shape_84.setTransform(-20.2,-120.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EABF9B").s().p("ABPDbQAyhDAGhRQACgcAEgbQAEgZgTgYQgigiguAIQAngKAKgiQAAgcgagVIgvgkQg0grhDgRQgkgEgngIQAngCAdgRQBogwBPBOQBVBQAIBnQAHBkgoBnQgSA5gjAvQgiAogvARQApgkAhgrg");
	this.shape_85.setTransform(-25.2,-114.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#CB9966").ss(1,1,1).p("AB7k0QgiAGggAHQgMgChMAZQhPAZhWA8QhWA9giBoQgJABADAoQAHAuBTAEQgCAEAWA7QAVA7A/A6QA/A6B4ACQBOgCA9gsQA+gtAchJQAohpAAhgQgBhihKhaQgxg9hNgDg");
	this.shape_86.setTransform(-40,-112.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F4D3B0").s().p("AiAD5Qg/g6gVg7QgWg7ACgEQhTgEgHgvQgDgnAJgBQAihpBWg8QBWg7BPgZQBMgaAMABIBCgMQBNADAxA9QBKBaABBiQAABhgoBnQgcBKg+AsQg9AthOACQh4gCg/g6g");
	this.shape_87.setTransform(-40,-112.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E56161").s().p("AgKAWQAQgOASgOQARgRADgYQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBABIAVgMIgUAKIAqgXQgIAdgZAWQgSATgVAQQgVATgaAPIgsAZQAlgYAigbg");
	this.shape_88.setTransform(88.8,106.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E56161").s().p("ABKAYIgvgFIgtgDIgVgDQgVgEgUgBQgRgHgRgBQAuAFAwABQAXACAXgEQAPgEgGgHQgFgIgHgJQALAGAKAJIAXAJIAWAKIAaAHQgJAIgTAAIgNgBg");
	this.shape_89.setTransform(3.9,154.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#CB9966").ss(1,1,1).p("AgBAXIACgt");
	this.shape_90.setTransform(-43,-81.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DB7979").s().p("AgfA2QgogSgeAOQAZgOAgADQAgACAYgMQAygmAog1IgXA+QgLAdgZAWQgTAMgVAAQgPAAgTgJg");
	this.shape_91.setTransform(-22.3,21.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#CB9966").ss(1,1,1).p("AARgXQgEgBgQALQgSAKAHAb");
	this.shape_92.setTransform(-23.6,136.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EABF9B").s().p("AgVABQAJggAigCQgXACABAbQAAAaASAMQgfgDgIgeg");
	this.shape_93.setTransform(-23.4,137.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#C10C09").ss(1,1,1).p("Ai4ASIACgSQgBgIAbg2QAcg3BGgJIAtA/QAFAEAxAoQA0AmAtAZIAuAgQABABgIAPQgIAQgYALQgdAJg4gBQg4gBgVgC");
	this.shape_94.setTransform(0.2,149.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F96262").s().p("AA8B/Qg4gBgVgCIinhqIACgSQgBgIAbg2QAcg3BGgJIAtA/IA2AsQA0AmAtAZIAuAgQABABgIAPQgIAQgYALQgZAIgtAAIgPAAg");
	this.shape_95.setTransform(0.2,149.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#CB9966").ss(1,1,1).p("AgNgbQgEAEgCAYQgDAaAqAB");
	this.shape_96.setTransform(56.7,104.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EABF9B").s().p("AgeASQgMgeAbgXQgDADgBAEQgGAZARAQQATALAYAGQgOAGgNAAQgUAAgSgSg");
	this.shape_97.setTransform(57.7,104);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E56161").s().p("AhAAgQAfgaAlgPQAmgQAhgYQAEAOgEALQgIAGgKADIgsAUIgvAYIgXAKIgTALQADgLAJgHg");
	this.shape_98.setTransform(66.1,118.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#C10C09").ss(1,1,1).p("ACtimQguAYgNAIQgMAHABgBQgBAGhfAGQhRgFgBgFQgCAGgJAqQgJAtAFAkQgGADg3AeQg3AdgYAUQgQAPAGAJQAHAIAEAGQADAJAOAVQANAUACADQAIAIA4gWQABABAEgEQAEgEgOgUQgXgjAHAGQgBABAHgBQAGgBAigHQAegGAIgDQAIgCAwgPQA2gWA6g2QA5g3ASgTQARgQAZgZQAZgZADgDQABgEgMgSQgNgSguAVg");
	this.shape_99.setTransform(82.7,113.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F96262").s().p("AjFCwIgPgXQgOgVgDgJIgLgOQgGgJAQgPQAYgUA3gdIA9ghQgFgkAJgtIALgwQABAFBRAFQBfgGABgGIALgGIA7ggQAugVANASQAMASgBAEIgcAcIgqApQgSATg5A3Qg6A2g2AWIg4ARQgIADgeAGIgoAIIgGAAQgHgGAXAjQAOAUgEAEQgEAEgBgBQgpAQgPAAQgGAAgCgCg");
	this.shape_100.setTransform(82.7,113.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BC6868").ss(1,1,1).p("AgrgGQAHgIBQAW");
	this.shape_101.setTransform(-34.1,-27.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BC6868").ss(1,1,1).p("AhLAKQADgBAxgJQAugJA1AA");
	this.shape_102.setTransform(-39.4,-29.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BC6868").ss(1,1,1).p("AgEAbQABAAAEgPQAGgMgDga");
	this.shape_103.setTransform(-62.2,-51.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BC6868").ss(1,1,1).p("AAJAyQgCgDgHgVQgHgVgBgOQAHghAFgH");
	this.shape_104.setTransform(-13.4,-49.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CCCCCC").s().p("AAIgQQAKgZgDgFQAMAKAGAbQAGAcAAAEQgqgBgjAYQAcgdASghg");
	this.shape_105.setTransform(-30,-75.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CCCCCC").s().p("AAJAZQgkgYgXAnQgBgVAHgdQAHgfAUgIIAagIIgDAoQAZAmAVAmQgSgVgZgNg");
	this.shape_106.setTransform(-43.9,-77.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#999999").ss(1,1,1).p("ABHBfQgHgHgXgUQgegZgbgGQgygBgGAEQAGgHAdgkQAggpALgUQALgegHgBQABgDAMASQAMARAKA/QAKA9AIATQAFALADAEQACADAAgB");
	this.shape_107.setTransform(-29.8,-71);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAqBFQgegZgbgGQgygBgGAEIAjgrQAggpALgUQALgegHgBQABgDAMASQAMARAKA+QAKA+AIATIAIAPIgegbg");
	this.shape_108.setTransform(-29.9,-71.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#999999").ss(1,1,1).p("AAMhwIgDAoQAIgDA+CDIg4gMQAGgJgzAgQg0AogDAHQACgKAMg8QAOg9AHgcQAFgVACgQQABgRAUgGQAVgGAFgBg");
	this.shape_109.setTransform(-44.2,-71.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Ag/AsQANg9AIgcQAFgWACgPQABgRAUgGIAZgIIgCApQAIgEA+CDIg4gLQAGgKg0AhQgzAogEAHIAPhGg");
	this.shape_110.setTransform(-44.2,-71.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DB7979").s().p("AAwCOQgwgagTgSQgVgTBsBFQgpgggKgzQgKg0gjgkQgLgMgLgJQgHgDgFgFQgNgWgCgbQgBgMAFgMIAGgMQAGgHADgGQgEArAgApQAeApAbAeQASAgAXAcQAFAIgEAUQgFAUAEAJQASAdgNAAQgIAAgRgJg");
	this.shape_111.setTransform(-6.3,-39.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DB7979").s().p("AhDEoQABgLANgOIAUgWIAigvQARgZAVgiIAXgmQABgFAFgnQAFgngOgPQgNgGgngVQglgYgagyQgagzAZhWQgDABgiBCQgiBBgbByIgGA/IAAAcQAAARgFAIQgIAJgNgCQgoAEgkASQANgLgRgHQgRgGgNACQAPgOAOAFQAPAGAQgCQASgFADgTIAHgkQAMg/ARg8QAFgRAIgQQAOghASggQAPgdAUgaQAKgNAIgPQAOgWAKgYQADgTAAgUQABAFADAEQAHAHAGAIQAIAWgDAXQgEArACAnQACAnAYAmQAqBABJgPQAegGAcgLQAjgTAdgeQgCAKgIAVQgIAVgLADQALABALACIAaAAQAZAAAXAJIADABQgWACgUAJQAYACAPAWQgigFghgKQglgGghAOQgPAHgUAFQgTAHgJAPQgNAfACAlQACAOgCAOQAQAFgRAKQgNAMgKAPQgZAegcAdQgSAVgRAXQgQAZgKAaQgKgIgDgNg");
	this.shape_112.setTransform(-57,-25.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BC6868").ss(1,1,1).p("AgSjiQAiA7AMAPQALAPgTATQgUAggZBQQgZBPgIAiQgEAfAIA+QAJA+gDAbQgEAZgGAjQgGAkgCAJQAAAGAMAFQAMAFACAAIAVhPQAHgmgHg4QgIg4ABgrQAEgrAOgtQAMgtACgEQgEgBAXhGQAOgiALgGQALgGABgHQAEgHABgQQACgRgshCQghgwgEg7QAAgQADgQQAJgUADgVQgCgBgOAMQgPAMgEAFQgHASgBATQgIA/AeA3g");
	this.shape_113.setTransform(-34.3,-27.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D37D7D").s().p("Ag2GVQgMgFAAgGQACgJAGgkIAKg8QADgbgJg+QgIg+AEgfQAIgiAZhPQAZhQAUggQATgTgLgPQgMgPgig7Qgeg3AIg/QABgTAHgSQAEgFAPgMQAOgMACABQgDAVgJAUQgDAQAAAQQAEA7AhAwQAsBCgCARQgBAQgEAHQgBAHgLAGQgLAGgOAiQgXBGAEABIgOAxQgOAtgEArQgBArAIA4QAHA4gHAmIgVBPIgOgFg");
	this.shape_114.setTransform(-34.3,-27.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EABF9B").s().p("AhFgGIAEgpICAAIIADAnQAEAlAAAKIAAACQhIgWhDghg");
	this.shape_115.setTransform(-36,-80.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#CB9966").ss(1,1,1).p("ABChVIiEgIQgBAEgCAdQgCAdgBAEQgBArAXAWQAYAVAVAiQAdgYAUgPQAVgQAIgkQAAgIgDglQgEglAAgFg");
	this.shape_116.setTransform(-35.9,-76.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F4D3B0").s().p("AgyAmQgXgVABgsIADghIADggICEAIQAAAEAEAlQADAlAAAIQgIAkgVAQIgxAoQgVgjgYgVg");
	this.shape_117.setTransform(-35.9,-76.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#DB7979").s().p("AgqAiQADhRhCAHQhDAIg4AaQBhgxBkgrQgBgICbgDQAWAJASATQAfAVAjAMQgXgCgXAIQgXAIgHAaQgCAWAVAdQATAZASAOQhXhBg7BQQgKgJABgPQABgPgWgJQghgDgRAeQgWAYgfAKQAPgnANglg");
	this.shape_118.setTransform(-43.5,-69.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BC6868").ss(1,1,1).p("AHkAyQACgNAFgVQAKgogBgKQgTgfgUggQgGgKgMgeQgLgegGgJQgVgkANgwQAOgxgSgmQg+hQg+gSQgggOgrgaQgsgagEgCQidADABAHQgGADhOAmQhPAlhOAbQguATgXA2QgWA2gIA1QgIA1gEAPQgGAPgQBCQgQBCgaBMQgaBPgjAzQgvBKATAsQATAtAmAGQAfAHAIAQQAIARATALQAYAJAfgCQAggBACgBIgvgtQgEgCAMgVQANgUBVgMQBIgLATgWQgIAKgIALQgnAzgFAGQABAGAVAxQAUAyAiAWQAcAQALgCQAKgCA8gZQA9gYARACQAOABABACIAShfQBMAOALAPQAKAPADgEQALgIAggQQAhgRAWgEQAVgCASgEQASgEABAAQg5gVglg2Qglg3gOgcQgMgeAEg2QAEg1ACgGQAMgQAagQQAbgRArgpQAogvgCgiQgCgggDgDQAaAVASA4QATA4BCA+QABACAAACQgCANABAFIAAAAQAAABAAABQgCAGgDAJQgFALgIAPQgZAwAMABAiBEkQABgCABgCQALgcgEgDQgchAg0gLQg0gKgFADIAKh8QAbhyAihBQAihCADgBQgYBWAaAzQAaAyAmAWQAnAYAOAFQAOAPgFAnQgFAngCAFQgCADgUAjQgVAigSAZQgPAVgZAhgAiEEnQABgBACgC");
	this.shape_119.setTransform(-47.8,-29.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF8A8A").s().p("Ah0H0QgigWgUgyQgVgxgBgGIAsg5IAQgVIADgDIgDADQgTAWhIALQhVAMgNAUQgMAVAEACIAvAtIgiACQgfACgYgJQgTgLgIgRQgIgQgfgHQgmgGgTgtQgTgsAvhKQAjgzAahPQAahMAQhCQAQhCAGgPQAEgPAIg1QAIg1AWg2QAXg2AugTQBOgbBPglIBUgpQgBgHCdgDIAwAcQArAaAgAOQA+ASA+BQQASAmgOAxQgNAwAVAkQAGAJALAeQAMAeAGAKIAnA/QABAKgKAoIgHAiIgBgEQhCg+gTg4QgSg4gagVQADADACAgQACAigoAvQgrApgbARQgaAQgMAQQgCAGgEA1QgEA2AMAeQAOAcAlA3QAlA2A5AVIgTAEQgSAEgVACQgWAEghARQggAQgLAIQgDAEgKgPQgLgPhMgOIgSBfQgBgCgOgBQgRgCg9AYQg8AZgKACIgDAAQgLAAgZgOgAiBEkIAog2QASgZAVgiIAWgmQACgFAFgnQAFgngOgPQgOgFgngYQgmgWgagyQgagzAYhWQgDABgiBCQgiBBgbByIgKB8QAFgDA0AKQA0ALAcBAQAEADgLAcIgCAEIAAAAgAHRBvQAIgPAFgLIgaBLQgMgBAZgwg");
	this.shape_120.setTransform(-47.8,-29.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#DB7979").s().p("AgjBNIg8gYQgmgIgngDQgUgCgTgEQAFgcAugRQAugTAbgKQA9gaA7gFIB+gKIARAJIARAJQAJAEAKABQgSAEgTAHQhGAYgrArQgTAZgVAUQgOANgUAAQgKAAgNgDg");
	this.shape_121.setTransform(-33.5,13.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BC6868").ss(1,1,1).p("AF5irQgkApglBmQglBjgwBDQg3A6g5AYQg7AYgEgBQgGgCg9gOQg/gOg3gCQg4ABhXgJQhXgJgqgfQgdgXgeg7Qgeg8AehKQAehMCahIIG0gqIAiATQgHABAYAAQAYAACIgOQAHgCA2gCQA1gBAPAYQgCgCgiAJQgjAIgoAgg");
	this.shape_122.setTransform(-32.4,29.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF8A8A").s().p("AAsDzIhDgQQg/gOg3gCQg4ABhXgJQhXgJgqgfQgdgXgeg7Qgeg8AehKQAehMCahIIG0gqIAiATQgHABAYAAQAYAACIgOQAHgCA2gCQA1gBAPAYQgCgCgjAJQgiAIgoAgQgkApglBmQglBjgxBDQg2A6g5AYQg5AYgGAAIAAgBg");
	this.shape_123.setTransform(-32.4,29.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EABF9B").s().p("AgvCaIALg3QAJgsALgrQAKgpAEgDIhHgFIhJgHQgHgEAKgVQAKgVAHgFIAfAEQAQgFAMgKQA0gvAig9QAagiAfgHIBKgPQggAKgYAcQgrAsgbA3QgPAbgDAdQAHAWAbAAQARAAANgDQgPAFgPAXQgQAcgIANQgUAogMAqQgWBcgZBWIAQh1g");
	this.shape_124.setTransform(-14.3,57.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#CB9966").ss(1,1,1).p("ADVmjQgEAXgeBJQgfBJgRAsQgLAdgjBKQgkBKgkBKQgiBNgOAlQgVAwgMAoQgMAoAWA5QAbA9AfArQAdAsALALQAIAUgcA1QgbA2g3gPQg/gWg6grQg6gsAqhIQAIAGAXh0QAFgvAKiFQALiFATiSQAUiVAghbIiQgNQgDgDAJgvQAJgwAygzQAzg0B5gQQAEgFA2gGQA1gHAvAtQAoAygCAtQgCAtgDATg");
	this.shape_125.setTransform(-7.4,91.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F4D3B0").s().p("Ag+JnQg/gWg6grQg6gsAqhIQAIAGAXh0QAFgvAKiFQALiFATiSQAUiVAghbIiQgNQgDgDAJgvQAJgwAygzQAzg0B5gQQAEgFA2gGQA1gHAvAtQAoAygCAtQgCAtgDATQgEAXgeBJIgwB1QgLAdgjBKIhICUQgiBNgOAlQgVAwgMAoQgMAoAWA5QAbA9AfArQAdAsALALQAIAUgcA1QgVAqgnAAQgKAAgMgDg");
	this.shape_126.setTransform(-7.4,91.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EABF9B").s().p("ACIDmQg2hSgnhPQgSgfgkgeQgngcgcgUQgggag3gnQg3gngnAAQAGgCALgRIARgWQAVgXAZgPQAYgLAXgGQAXgFATgTIAmgwQAwguBAgHQgdAeghAdQgTAZgJAcQgGAUAFAJQAFAJAPANQA1A/AZBRQAoBvAqBtQAYAwAlA0QAlA1ANAzQhFg3g3hRg");
	this.shape_127.setTransform(6.9,43.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#CB9966").ss(1,1,1).p("AkZoWQAFgBAsAHQArAHAZAaQASAeAGAlQAGAlAEAQQAEAQAkBtQAjBuAyCDQAwCBAwBPQBCBnAhAbQAhAbA1AUQA+AaA8AHQA8AHASgBQAJAHgcAsQgbAtgFAGQgDgBgsgDQgsgCg2AOQg5ARg8gNQg8gNgEg9QAAg6gIgVQgHgVgUggQgVgigxgrQgzgrhGhQQhFhWgnhBQgohCAAgEQgIgIhHhBQhHhAgqgSQgVgKAVg/QAUg+AxhAQAxhABAgQ");
	this.shape_128.setTransform(38.9,60.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F4D3B0").s().p("ACjIRQg8gNgEg9QAAg6gIgVQgHgVgUggQgVgigxgrQgzgrhGhQQhFhWgnhBQgohCAAgEQgIgIhHhBQhHhAgqgSQgVgKAVg/QAUg+AxhAQAxhABAgQIAEgCQAFgBAsAHQArAHAZAaQASAeAGAlIAKA1IAoB9QAjBuAyCDQAwCBAwBPQBCBnAhAbQAhAbA1AUQA+AaA8AHQA8AHASgBQAJAHgcAsIggAzQgDgBgsgDQgsgCg2AOQggAKghAAQgaAAgagGg");
	this.shape_129.setTransform(38.9,60.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E56161").s().p("AgHAaQgNgIgMgLQgMgHgJgLIgEgGIABgJIADgJIAEgLIAxAkIAxAiQAAgLAHgCQADAEgBAIQAAAMgCAMQgigGgdgPg");
	this.shape_130.setTransform(-23.1,146.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#C10C09").ss(1,1,1).p("AC6ApQgsgdgugdQgtgggMgOQgOgVgPgUQgNgUgBgCQgFgEgrARQgsASggBfIhkhIQgCACgHAeQgHAeAGAkIAIAhQAAgBgBgCQACABAPALQAOAKANAEQAJABgGgQQgGgPABgIQAHgDAeAcQAfAcAZALQASAEA4AGQA2AFA8ADQA8ADAdgEQAmgIAOgRQAOgQgJgIQgIgGgsgdg");
	this.shape_131.setTransform(-5.2,149.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F96262").s().p("ABcB+Qg8gDg2gFQg4gGgSgEQgZgLgfgcQgegcgHADQgBAIAGAPQAGAQgJgBQgNgEgOgKIgRgMIABADIgIghQgGgkAHgeQAHgeACgCIBkBIQAghfAsgSQArgRAFAEIAOAWIAdApQAMAOAtAgIBaA6IA0AjQAJAIgOAQQgOARgmAIQgSACgdAAIgqgBg");
	this.shape_132.setTransform(-5.2,149.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3DA83D").s().p("ABcBlQicgCh6gWQh7gXgZgHQg0gRAIgGQACgFACghQACgNASgEQARgEALgKIAWgiIAOgWIJrAxIAzBlQh+A1iXAAIgLgBg");
	this.shape_133.setTransform(-40.9,49.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3DA83D").s().p("AkfEXQgfgTgDgOQgEgOACgBQAAgJgmiBQgliAhKiMQgDgBgEgRQgDgRAegQQABgDBqgaQBrgZDHgEQDFgEEWA8IAjAMQACAAAFAGQAFAHgIAOQgWAYgtCDQgWAuhxBDQhxBChsA0QhqA0gIACIgxANQgtALg1AHQgVADgRAAQgZAAgPgGg");
	this.shape_134.setTransform(-48,17.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#3F9E3F").ss(1,1,1).p("AHOhBIBbE/IgIA3QgCAGhwApQhwApjHAIQjFAIkHheQgBgFgZhZQgahZgnhzQgnhxgrhSQg2hvAVgeQAWgdAIAEQAHgECjgeQCjgeDsAAQDtgBDkBTQAFgCAQANQAQANgZArQgeAzgTBCQgSBDgBAGg");
	this.shape_135.setTransform(-49.1,24.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#74C174").s().p("AlUE/IgaheQgahZgnhzQgnhxgrhSQg2hvAVgeQAWgdAIAEQAHgECjgeQCjgeDsAAQDtgBDkBTQAFgCAQANQAQANgZArQgeAzgTBCQgSBDgBAGIBbE/IgIA3QgCAGhwApQhwApjHAIIgfAAQi6AAjzhWg");
	this.shape_136.setTransform(-49.1,24.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.345,1],-31.4,0,31.5,0).s().p("AgpI8QhLgKhCgYQgngMgqgaQgqgagIgsQgBghAKggQBnmnBumoQARhfA/ABQA9ACA7AjQA7AjAEAFQADCHAVCIQAVCHAYCEQAWB/AZB/IAWBmQAMA6gUApQgdAog+AQQg+AQgvAFQgkAGglAAQghAAglgFgABvILQAhABAegLQAhgEAegIQAfgVgKgqQgKgpgJgdQgOhOgMhOQgai1gWizQgQiMgPiNQhFAHg9gDQg7gDgEgBQgeCPggCOQgrC9gtC/IggCIIgOAyIgBAHQgCAlAtALQBQAiBWAFQArADApgCQAlABAlAFg");
	this.shape_137.setTransform(-45.4,109.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.573,1],-30.8,0,30.9,0).s().p("AgEBzQiDgHhWglQhVglgBgwQAFgxBZgcQBZgcCBAFQCDAHBVAlQBWAlABAwQgGAxhYAcQhMAYhqAAIgkgBgAipgwQhHANgFAXQACAWBGATQBGATBoAGQBrAFBIgNQBHgMAEgXQgCgWhGgTQhFgUhrgFIg1gBQhHAAg0AIg");
	this.shape_138.setTransform(-45.6,155);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#000000","#FFFFFF","#000000"],[0,0.573,1],-23.2,0,23.3,0).s().p("AgCBJQhjgFhBgYQhAgYgBgeQAEgfBCgSQBDgRBhAEQBjAFBBAYQBAAYABAeQgEAfhCASQg3AOhMAAIghgBgAiAgmQg2AHgDAPQACAPA0ALQA1ANBPAEQBQADA2gHQA2gHADgPQgCgOg1gMQg0gNhRgEIgugBQgxAAglAFg");
	this.shape_139.setTransform(-44.7,115.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#705B47").ss(1,1,1).p("AEhmqQhSgFg5gRQhKgRhFgSQgTgHgegGQgfgGgXAFQgWAJgBATQAAATgOAOQgFABgUACQgUABADAFQACgBABAlQABAmgUBUQgRA+g8B+Qg8B8hGB+QhHB/gyA/QgEAAgFAKQgGAKAeARQAWANBzAjQB0AiDbARQDZASFNgnQACACAIgBQAIAAgQgWQgQgYgHgjQgHgkgFgcQgbhzgUh1QgxkFAfkLQACgMACgMQg1AhhSgFg");
	this.shape_140.setTransform(-53.9,-66.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#604F40").s().p("AggHvQjbgRh0giQhzgjgWgNQgegRAGgKQAFgKAEAAQAyg/BHh/QBGh+A8h8QA8h+ARg+QAUhUgBgmQgBglgCABQgDgFAUgBIAZgDQAOgOAAgTQABgTAWgJQAXgFAfAGQAeAGATAHQBFASBKARQA5ARBSAFQBSAFA1ghIgEAYQgfELAxEFQAUB1AbBzIAMBAQAHAjAQAYQAQAWgIAAQgIABgCgCQjlAaivAAQhQAAhCgFg");
	this.shape_141.setTransform(-53.9,-66.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(103));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.9,-168.3,216,335.6);


(lib.girl_eyes_timed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl_eyes();
	this.instance.setTransform(-1.6,-1.1,0.71,0.684);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true},2).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fade_in:0,pick_up:24,answer:30,"exit":36});

	// timeline functions:
	this.frame_0 = function() {
		/* _parent.spotlight1._alpha = 7;
		_parent.spotlight2._alpha = -17;*/
	}
	this.frame_3 = function() {
		/* _parent.spotlight1._alpha = 20;
		_parent.spotlight2._alpha = -10;*/
	}
	this.frame_30 = function() {
		/* stop();
		_parent.answering = true;
		_parent.currentPoints.play();*/
	}
	this.frame_36 = function() {
		/* _parent.answering = false;*/
	}
	this.frame_71 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(27).call(this.frame_30).wait(6).call(this.frame_36).wait(35).call(this.frame_71).wait(1));

	// Blink
	this.instance = new lib.girl_eyes_timed();
	this.instance.setTransform(7.9,-104.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(42));

	// Phone
	this.instance_1 = new lib.girl_phone();
	this.instance_1.setTransform(81.8,-77.4,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},24).wait(29).to({_off:false},0).wait(19));

	// Graphics
	this.instance_2 = new lib.girl_no_phone();
	this.instance_2.setTransform(21.9,-40.1,0.5,0.5);

	this.instance_3 = new lib.girl1();
	this.instance_3.setTransform(26.5,-32.2,0.75,0.75);

	this.instance_4 = new lib.girl2();
	this.instance_4.setTransform(27.3,-31.3,0.75,0.75);

	this.instance_5 = new lib.girl3();
	this.instance_5.setTransform(27.8,-31.1,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},18).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_5}]},8).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},7).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.66,scaleY:0.66,x:26.9,y:-32.1},5,cjs.Ease.get(1)).to({_off:true},18).wait(29).to({_off:false},0).wait(10).to({scaleX:0.5,scaleY:0.5,x:21.9,y:-40.1},7,cjs.Ease.get(1)).wait(2));

	// Shadow
	this.instance_6 = new lib.Shadow();
	this.instance_6.setTransform(6.8,52.9,0.7,0.7);
	this.instance_6.alpha = 0.211;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,x:8.1,y:71.5,alpha:0.301},4,cjs.Ease.get(0.63)).wait(57).to({scaleX:0.7,scaleY:0.7,x:6.8,y:40.9,alpha:0.211},7,cjs.Ease.get(0.63)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-124,123.2,167.6);


(lib.frog_think = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("AgDgFIAHgDQgCAIgCAIg");
	this.shape.setTransform(6.1,-66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212121").s().p("AiQAdQADgIABgKQBYgWA1gKQBBgNAiACQAYABAKAHQARAKgJATIgTgGQACgEgBgBIgCgBQgEgEgSgBQgfgChBANQgtAHg3AOIgsAMIgCABIgBAAIAAAAg");
	this.shape_1.setTransform(20.6,-68.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#070707").s().p("AgIAJQAAgJADgJIAOACIgCARg");
	this.shape_2.setTransform(-17,-68.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AgDAKQgGgEgBgDIgBgDIAFgIIAEgCIACgBIACAHIABgCIAAAAIAJACQgEAIgGAIg");
	this.shape_3.setTransform(-19.3,-69.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212121").s().p("AgFAIIgBAAQAGgIACgJIAFABQgDAIAAAKg");
	this.shape_4.setTransform(-18.4,-68.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhTBJQgjgZgDgnIAAgHIARABIACgRIgQgCQAJggAfgWQAfgWApgDQAwgEAmAZQAmAZADApQABAIgBAFIgJADIAFAPQgLAegeAUQgeAUgoADIgJABQgvAAghgYgAgFhLQgrADgcAaQgbAZACAdQACAeAfAVQAgAVApgDQAsgEAcgZQAbgagCgcQgDgfgfgUQgbgSgjAAIgLAAg");
	this.shape_5.setTransform(-5.7,-68.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEA6QgegUgDgfQgCgdAbgZQAcgZAsgDQApgEAgAVQAeAVADAeQADAcgcAaQgcAagsADIgJABQgkAAgcgTg");
	this.shape_6.setTransform(-5.7,-68);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag6BBQgigfgHgmQgHgpAYgdQAagbAqADQAnADAiAfQAbAZAKAgQALAegLAcIgIgCIgBAAIgBACIgBgHIgEABIgFACQAIgRgEgWQgFgfgegaQgdgbgfgCQgigDgSAVQgSAVAGAfQAFAgAdAaQAdAaAgADQAhACATgUIAEgFIAAAEQACAEAFADIAHADIgEAEQgXAZgkAAQgrAAgmgig");
	this.shape_7.setTransform(-27.8,-75.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBPQgggDgdgaQgdgagFggQgGgfASgVQASgVAiADQAfACAdAbQAeAaAFAfQAEAWgIARIAAABQgEABAAAHIgEAFQgRASgcAAg");
	this.shape_8.setTransform(-27.8,-75.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F201D").s().p("AgGAAIANAAIgJABIgEgBg");
	this.shape_9.setTransform(28,-72);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F201D").s().p("AgJAIIAJgLIACgGIAEAAIAEACIACgBIAAAAIgLARIgNABg");
	this.shape_10.setTransform(26.6,-71.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQgGIAcgEIAFAKIgFAGIgDACIgSADQgFgKgCgHg");
	this.shape_11.setTransform(24.3,-70.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#212121").s().p("AgFgEIALAAIgGAJIgFgJg");
	this.shape_12.setTransform(26.2,-71.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAJQgDgLgGgFIAPgMQAHAIAEAPIABADIgQANg");
	this.shape_13.setTransform(-33.8,-81.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AgJAAQAAAtAJAAQAKAAAAgtQAAgsgKAAQgJAAAAAsg");
	this.shape_14.setTransform(16.7,-87.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AgJAAQAAgsAJAAQAJAAABAsQgBAtgJgBQgJABAAgtg");
	this.shape_15.setTransform(16.7,-87.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AgJAAQAAAtAJAAQAKAAAAgtQAAgsgKAAQgJAAAAAsg");
	this.shape_16.setTransform(-2.5,-92.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AgJAAQAAgrAJgBQAJABAAArQAAAtgJgBQgJABAAgtg");
	this.shape_17.setTransform(-2.5,-92.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ABMg7QgNgQgfAGQggAGgeAZQgfAZgOAcQgNAdANAQQANAQAfgGQAfgGAegZQAggZANgbQAOgegNgQg");
	this.shape_18.setTransform(40.9,-41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("AhLA8QgNgQANgdQAOgcAfgZQAegZAggGQAfgGANAQQANAQgOAeQgNAbggAZQgeAZgfAGIgPACQgUAAgJgMg");
	this.shape_19.setTransform(40.9,-41.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALIgKgDQgIgFgBgGQgBgIAHABQAFACADAIg");
	this.shape_20.setTransform(23.3,-102.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9EF7F").s().p("AAAAIQgIgFgBgGQgBgIAHABQAFACADAIIAFALg");
	this.shape_21.setTransform(23.3,-102.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A6D514").ss(1,1,1).p("AAHgBIAGAPIgNgEQgLgGgBgIQgBgLAJACQAHACAEAKg");
	this.shape_22.setTransform(24,-100.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9EF7F").s().p("AAAAKQgLgGgBgIQgBgLAJACQAHACAEAKIAGAPg");
	this.shape_23.setTransform(24,-100.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A6D514").ss(1,1,1).p("AAMARIgMgGQgMgJABgJQAAgMAKAEQAHADACAMg");
	this.shape_24.setTransform(24.6,-97.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9EF7F").s().p("AAAALQgMgJABgJQAAgMAKAEQAHADACAMIAEARg");
	this.shape_25.setTransform(24.6,-97.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A6D514").ss(1,1,1).p("AgCgSQAJAEADAOIAFAVIgPgIQgOgLAAgKQABgPALAFg");
	this.shape_26.setTransform(25.3,-95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9EF7F").s().p("AAAANQgOgLAAgKQABgPALAFQAJAEADAOIAFAVg");
	this.shape_27.setTransform(25.3,-95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A6D514").ss(1,1,1).p("AgHgRQAKACAGANIAJAVIgRgFQgQgIgCgLQgDgPANADg");
	this.shape_28.setTransform(26.5,-92.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9EF7F").s().p("AABAOQgQgIgCgLQgDgPANADQAKACAGANIAJAVg");
	this.shape_29.setTransform(26.5,-92.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A6D514").ss(1,1,1).p("AAUAaIgUgJQgSgNgBgOQAAgTAPAFQAMAGAFARg");
	this.shape_30.setTransform(27.3,-89.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9EF7F").s().p("AAAARQgSgNgBgOQAAgTAPAFQAMAGAFARIAHAbg");
	this.shape_31.setTransform(27.3,-89.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAdIgQgNQgSgQADgPQAEgSALAIQANAIABARg");
	this.shape_32.setTransform(27.8,-84.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9EF7F").s().p("AAAAQQgSgQADgPQAEgSALAIQANAIABARIACAdg");
	this.shape_33.setTransform(27.8,-84.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A6D514").ss(1,1,1).p("AANAgQgjgaAJgZQAGgTALALQANAKgBARg");
	this.shape_34.setTransform(27.2,-80.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D9EF7F").s().p("AgNgTQAGgTALALQANAKgBARIgDAgQgjgaAJgZg");
	this.shape_35.setTransform(27.2,-80.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A6D514").s().p("AAKAlQglgdAIgdIAAgBQAEgMAJgDQAGgDAHAHQARAMgDAVIgCAgIAAACQAAAFgFAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgDgbQgEABgCAHIAAABQgFAOAOARIAIAKIABAAIACgXQACgRgMgIQgBgDgCAAIgBABg");
	this.shape_36.setTransform(26.7,-76.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9EF7F").s().p("AgOgUQAHgUAMALQANAKgCATIgCAiQglgcAJgag");
	this.shape_37.setTransform(26.7,-76.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQIAFgKQAFgKgFgHQgFgIgEAHQgEAHADAGg");
	this.shape_38.setTransform(24.5,-103.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9EF7F").s().p("AgFABQgDgGAEgHQAEgHAFAIQAFAHgFAKIgFAKg");
	this.shape_39.setTransform(24.5,-103.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A6D514").ss(1,1,1).p("AgFACIAFAPIAFgLQAFgKgFgHQgFgJgEAIQgFAHAEAHg");
	this.shape_40.setTransform(25.6,-100.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAFAHgFAKIgFALg");
	this.shape_41.setTransform(25.6,-100.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A6D514").ss(1,1,1).p("AAHAHQAGgMgHgJQgGgKgFAIQgGAJAFAJIAGASg");
	this.shape_42.setTransform(26.7,-98.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgJQAFgIAGAKQAHAJgGAMIgHANg");
	this.shape_43.setTransform(26.7,-98.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZIAIgQQAHgQgHgKQgIgMgGAKQgHAKAFAMg");
	this.shape_44.setTransform(28.2,-94.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D9EF7F").s().p("AgIADQgFgMAHgKQAGgKAIAMQAHAKgHAQIgIAQg");
	this.shape_45.setTransform(28.2,-94.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A6D514").ss(1,1,1).p("AgFAYIAJgOQALgOgGgLQgGgOgHAJQgJAJADAMg");
	this.shape_46.setTransform(29.7,-91.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D9EF7F").s().p("AgKABQgDgMAJgJQAHgJAGAOQAGALgLAOIgJAOg");
	this.shape_47.setTransform(29.7,-91.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdIAPgOQAQgQgEgPQgFgRgLAIQgMAJAAAQg");
	this.shape_48.setTransform(30.6,-88.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D9EF7F").s().p("AgOAAQAAgQAMgJQALgIAFARQAEAPgQAQIgPAOg");
	this.shape_49.setTransform(30.6,-88.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAJgGAGgIQAQgPgEgQQgFgRgLAIQgMAJABAQg");
	this.shape_50.setTransform(31.2,-83.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQALgIAFARQAEAQgQAPQgGAIgJAGg");
	this.shape_51.setTransform(31.2,-83.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#A6D514").ss(1,1,1).p("AgTAeQALgEAIgIQAVgQgBgQQgCgUgQAHQgNAHgDATg");
	this.shape_52.setTransform(31.2,-79.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9EF7F").s().p("AgOgBQADgTANgHQAQgHACAUQABAQgVAQQgIAIgLAEg");
	this.shape_53.setTransform(31.2,-79.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A6D514").s().p("AgUAeQAEAAAAgFIAAgBIABgEIAMgEQAVgKACgNIAAAAQACgIgDgCQgCgCgFAAQgMACgHAQIAAABIgIARIACgYIAAgDQAJgPAPgEQAKgCAFAHQAHAHgDALIAAACQgGAZgnAJgAgdAeQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIAAgBIAGAEQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAg");
	this.shape_54.setTransform(30.3,-75.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D9EF7F").s().p("AgLgDQAIgTAPgDQARgDgEAVQgDAQgXAKQgMAGgMABg");
	this.shape_55.setTransform(30.3,-75.1);

	this.instance = new lib.Crown("synched",0);
	this.instance.setTransform(107.2,-0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2,1,1).p("AAsAkQgbAggdAMQggAMgSgPQgTgPAGgiQAGgfAbggQAaggAegMQAfgMATAPQASAPgGAiQgGAfgaAgg");
	this.shape_56.setTransform(13.5,-84.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag+BNQgTgPAGgiQAGgfAbggQAaggAegMQAfgMATAPQASAPgGAiQgGAfgaAgQgbAggdAMQgOAFgLAAQgPAAgKgIg");
	this.shape_57.setTransform(13.5,-84.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,1,1).p("AArAkQgaAggeAMQgfAMgTgPQgSgPAGgiQAGgfAaggQAbggAegMQAfgMASAPQATAPgGAiQgGAfgbAgg");
	this.shape_58.setTransform(-5.7,-89.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag/BNQgSgPAGgiQAGgfAaggQAbggAegMQAfgMASAPQATAPgGAiQgGAfgbAgQgaAggeAMQgOAFgLAAQgOAAgLgIg");
	this.shape_59.setTransform(-5.7,-89.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,1,1).p("AAKAAQAAAJgKAAQgJAAAAgJQAAgIAJAAQAKAAAAAIg");
	this.shape_60.setTransform(-18.1,-53);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF00FF").s().p("AgJAAQABgIAIAAQAJAAAAAIQAAAJgJAAQgIAAgBgJg");
	this.shape_61.setTransform(-18.1,-53);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2,1,1).p("AAJAAQAAAJgJAAQgIAAAAgJQAAgIAIAAQAJAAAAAIg");
	this.shape_62.setTransform(-29.2,-55.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_63.setTransform(-29.2,-55.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AAAgMQgaAIAUANQAKAKAHgPIAEgQ");
	this.shape_64.setTransform(43.1,3.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF00FF").s().p("AgGAJQgUgNAagIIAPAAIgEAQQgEAJgGAAQgCAAgFgEg");
	this.shape_65.setTransform(43.1,3.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AgHgcQgfAYAYAVQAQATARgMQAQgNgUgX");
	this.shape_66.setTransform(-58.1,8.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF00FF").s().p("AgOARQgYgVAfgYIAWAQQAUAXgQANQgHAFgHAAQgIAAgLgMg");
	this.shape_67.setTransform(-58.1,8.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AANgyIgYAIQgbANgCAWQgDAaAXAVQAWAWAXgUQAVgSgFgbQgEgXgMgN");
	this.shape_68.setTransform(-53.5,51.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF00FF").s().p("AgUAoQgXgVADgaQACgWAbgNIAYgIIAMALQAMANAEAXQAFAbgVASQgLAJgLAAQgKAAgNgLg");
	this.shape_69.setTransform(-53.5,51.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AhKgZQAJAeAYAQQAsAgBIhS");
	this.shape_70.setTransform(69.5,18.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("AgpAVQgYgQgJgeICUgEQgzA7glAAQgPAAgMgJg");
	this.shape_71.setTransform(69.5,18.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AAFgqIgPAdQgKAfAhAZ");
	this.shape_72.setTransform(50,12.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF00FF").s().p("AgKgNIAPgdIAIBVQghgZAKgfg");
	this.shape_73.setTransform(50,12.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AAAg3QgVAWgHAZQgPAyBKAP");
	this.shape_74.setTransform(47.4,-6.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF00FF").s().p("AgcgIQAHgZAVgWIAfBvQhKgOAPgyg");
	this.shape_75.setTransform(47.4,-6.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("Agkg2QAYABAUAOQAqAdgSBB");
	this.shape_76.setTransform(-78.3,33.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF00FF").s().p("Agkg2QAYABAUAPQAqAcgSBAg");
	this.shape_77.setTransform(-78.3,33.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AgYg2QAYAEANAQQAdAggqA5");
	this.shape_78.setTransform(-66.6,-2.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF00FF").s().p("AgYg2QAYAEANAQQAdAggqA5g");
	this.shape_79.setTransform(-66.6,-2.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AArhPQAMAggGAkQgMBIhXAT");
	this.shape_80.setTransform(-85.3,7.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF00FF").s().p("AArhPQAMAhgGAjQgMBIhXATg");
	this.shape_81.setTransform(-85.3,7.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(3,1,1).p("AhAh1IACAXQAEAcALAdQAgBbBPBA");
	this.shape_82.setTransform(-34.3,55.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(3,1,1).p("Ahxh1QAmA2BBBHQBWBjAmAK");
	this.shape_83.setTransform(-25.4,54.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(3,1,1).p("Ah5g6QAgAfAuAcQBbA8BKgD");
	this.shape_84.setTransform(-1.8,48.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(3,1,1).p("Ah1gKQBqAeCBgM");
	this.shape_85.setTransform(1.4,31.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(3,1,1).p("AjAkjICWDwQAwBQASAUQAiAnAngDQA8gEBCAAQAcAAADADQADADgLAIQgkAZACAUQACAcASAJQAbAJAUAJQAYANgwgDQgZgCgqgEQgIAgAYAbQAUAYgPgGQgQgGg0grIgIAEQgJAIgDATIgEAgQAAAQhDiGIgJgMQgPgRghgWQiAhTiXjm");
	this.shape_86.setTransform(-38.4,21.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF00FF").s().p("AAyCsIgJgMQgPgRghgWQiAhTiXjmIBehjICWDwQAwBQASAUQAiAnAngDQA8gEBCAAQAcAAADADQADADgLAIQgkAZACAUQACAcASAJQAbAJAUAJQAYANgwgDIhDgGQgIAgAYAbQAUAYgPgGQgQgGg0grIgIAEQgJAIgDATIgEAgIAAACQgHAAg8h4g");
	this.shape_87.setTransform(-38.4,21.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(3,1,1).p("ADqC/Qgugzg4g8Qhuh1gqgqQgtgqAAgmQAAgTAJgLIAUhDQgngEgYAnQgQAbgmghQghgdgLgfQgLgbgFAWQgGAWAOAxIhTgLQgRgGAfAaQAgAaAVAJIgUAKQgXAJgUAAQgZAAAPAKQAQAKAtAIQAkAYATAPIBDAkQApBRA4BXQBuCsBPAMQBOAMAQgMQAKgHAMgsIAKgr");
	this.shape_88.setTransform(21.6,1.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF00FF").s().p("ACvEpQhPgMhuisQg4hXgphRIhDgkQgTgPgkgYQgtgIgQgKQgPgKAZAAQAUAAAXgJIAUgKQgVgJgggaQgfgaARAGIBTALQgOgxAGgWQAFgWALAbQALAfAhAdQAmAhAQgbQAYgnAnAEIgUBDQgJALAAATQAAAmAtAqQAqAqBuB1IBmBvIBDAMIgKArQgMAsgKAHQgIAGgYAAQgXAAgngGg");
	this.shape_89.setTransform(21.6,1.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(2,1,1).p("AAFgaQgTAUATAh");
	this.shape_90.setTransform(26.1,-46.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF00FF").s().p("AAEgaIAAA1QgRghARgUg");
	this.shape_91.setTransform(26.1,-46.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(2,1,1).p("AnJheQASAWAlAeQBKA5BfAkQEsBwGHiq");
	this.shape_92.setTransform(-19.7,-46.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF00FF").s().p("AjpAzQhfgkhKg5QglgegSgWIOTBXQjtBmjMAAQiDAAh3gsg");
	this.shape_93.setTransform(-19.7,-46.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(3,1,1).p("AH5gGQgXA4hhBwQiNCiAUCOQiugEg8g3QhZhThPA/QgoAggpgDQgugChEgvQg8gpguARQgXAIgMAQQARgpAHhKQAQiUgsigQgsijAIiLQAEhGANglQB+BFCjBGQFDCNC1ADIDRALIAJA6QAGBCgPApg");
	this.shape_94.setTransform(-3.9,39.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAeGXQhZhThPA/QgoAggpgDQgugDhEguQg8gpguARQgXAIgMARQARgqAHhJQAQiUgsihQgsiiAIiMQAEhGANglQB+BFCjBGQFDCNC1ADIDRALIAJA6QAGBCgPApQgXA5hhBvQiNChAUCPQiugEg8g3g");
	this.shape_95.setTransform(-3.9,39.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AJbRAQhTgBjOhTQiuhHgpgcQgigXgMgdQgKgXAEgfIgdgLQgrgWgNgVQgBgFgPgGQgRgHgTAAQgzgDgoAeQgwAkgugHQgcgEgdgUQgeAihIAwQgzAjhpBYIhXBKQgMAIgFACIgFAAQgHAAgEgEQgGgFAAgIQAAgFADgJIAMggQARgxgMgWIgBgCIgCgBQgEgBgJACQgRAFgdATQgUANgYAUIgTAQIgBAAIgVgVIAAAAIABgBIAQgUQATgZAMgWQAQgbAAgRQABgFgCgDQgFgEgGgBQgtgHgqAFIgUADIgMADIgBAAIgIgdIAngKQArgMAVgLQAMgGADgFQgPgOhJgLIACgdIAAgBIACAAIBagFQBlgJAmgQQBAgZAFgMQAGgLgGgVQgJgdgggtQgthDiEi4QhxiggLgnQgKgqgBgOQgCgkAUgaQAzg4CsAoQgMgegBgaQgCgqAegbQAdgbA5gIQg1h2gahFQgdhNAThRQAZhsBthKIADgCIDGiHQAGAFADANIADALIjECFQhkBEgWBgQgQBFAaBIQASAyAjBQIAhBJIAAABIAJATIgWACQg+AFgaAYQgUASABAcQABAXALAaIAJAQIACAFIABABIAWAfIgmgIQi8gyglAwQgWAVAVBHQAIAfBvCeQCFC3AtBEQAiAxAKAhQALAhgNAXQgLATgaAMQgOAHghALQgtAThnAJQALAGAGAHQAHAIgBAKQAAAIgGAJQgIAKgSAJIgBABIARACQAUADAJAMQAJAMgBAQQgBAXgQAdQAcgRATgFQAPgEAMADQAQAEAHAPQAQAggUA9IgBADIBBg3QBrhcA0giQA7goAbgbQAJgJAEgGIACgCIAAgBIAHgRIAQAMQAdAXAaAEQAjAFAlgcQAwgkA+ADQA6AEATAeQAGANAlAQIAaALIALAEIAAAAIANAEIgCANQgHAeAJATQAIAUAbATQAmAbCrBFQCAA0BZAUIAIACIgPgMQgUgNgIgLQgNgRAOgPQANgPArgIIAagEQgagPgQgTQgKgNAAgOQABgMAKgNQALgKALgGQhjgGhpgcQgSgFgKgMQgIgLABgSQACgYAYgiQAgguA5g0QEZj/CMiHQAfgdAIgWQAHgSgJgMQgVgih4gFQhmgEhOAnQgVALgWAQIgnApIAAgnIAPAAIgPhSQgDh3gkh8QgKglgOgkIgIgUIgCgFIgBgBIAAgBIgDgHIAog+IAAgBIABgBQBYhkgZhMQgMgjgpgfQhphQhig0QgcgPgNgYIAUgDIAAABIgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAFAAIADgCQABAAAHgJQAHAHAOAIQBgAzBvBUQAwAjAPAtQAgBchkBxIgeAvQBFClAEC2IAAAzQBfhECKAGQCCAHAjAsQATAagOAhQgLAdgjAhQieCWkHDwQg1AughAvQgTAdgBAPQgBAFACADQAFAFAHABQCrAuB5gOIABAAIABAEIAAADIAEAWIgCAAIgUAFQgYAGgVAIQgZAJgJALQgEADAAACQAAADADAEQAXAbAnANQAJAEAQAEIAIABIACAAIgCAaIABAEIgiABQgpACgXAEQgXAEgMAHQAEAFAOAIIABABIAAABIBdBKgADgsOQABgYAahFQAQgsgMgqQgLgogcgNQgYgLgyAWQgQAHgRAJIgKAFIgDACIAAAAIgUANIgDgXQgGgkgSgQQgPgOgXgBQgdgCg0AWQgXAJhHA5IhgBNIg+AtIgBgEQgFgQgHgIIA5goIBfhOQBMg7AagLQA+gYAgACQAiACAWAVQATARAKAgIAhgQQA9gYAjAOQAOAGAKAJQAdBJAHA7QgEARgEAMIgKAaQgGgDgFACQgIADgEAMIgBABQgEATANASIAAAHQgBAKACAJIgeAEQgDgMACgNgAD/s1IAAgBQADgHADgBQABAAAAgBQABAAAAAAQABABABAAQAAAAABAAIgJAcQgEgLACgIgAEPvpQAQAbACAjQgIgigKgcg");
	this.shape_96.setTransform(0,4.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF00FF").s().p("AIeQcQhYgUiAg0QishFglgbQgbgTgJgUQgIgTAGgeIADgNIgNgEIgBAAIgKgEIgbgLQgkgQgGgNQgTgeg6gEQg/gDgvAkQgmAcgjgFQgZgEgegXIgPgMIgIARIAAABIgCACQgEAGgIAJQgcAbg7AoQgzAihsBcIhAA3IABgDQATg9gPggQgHgPgQgEQgNgDgPAEQgSAFgcARQAPgdACgXQABgQgKgMQgIgMgVgDIgQgCIAAgBQATgJAHgKQAGgJAAgIQABgKgHgIQgGgHgLgGQBogJAtgTQAggLAPgHQAZgMAMgTQAMgXgKghQgLghghgxQguhEiEi3QhwiegHgfQgVhHAVgVQAmgwC7AyIAnAIIgWgfIgBgBIgDgFIgIgQQgMgaAAgXQgBgcATgSQAagYA/gFIAVgCIgJgTIAAgBIgghJQgjhQgTgyQgZhIAPhFQAWhgBlhEIC5h+QAJgOAUgEIgBgBIA/gtIBfhNQBIg5AWgJQA1gWAdACQAWABAPAOQASAQAGAkIAEAXIATgNIABAAIACgCIAKgFQARgJARgHQAxgWAYALQAdANALAoQALAqgQAsQgaBFgBAYQgBANADAMIgDAAIADACQAMAMgBANQANATAYAMQBiA0BpBQQApAfALAjQAaBMhYBkIgBABIgBABIgoA+IAEAHIAAABIAAABIACAFIAIAUQAOAkALAlQAkB8ACB3IAAB5IAdggIAKgJQAWgQAVgLQBPgnBlAEQB5AFAVAiQAIAMgGASQgIAWgfAdQiNCHkYD/Qg6A0ggAuQgXAigDAYQgBASAJALQAJAMATAFQBoAcBjAGQgKAGgLAKQgLANAAAMQgBAOALANQAQATAaAPIgaAEQgrAIgNAPQgOAPANARQAIALAUANIAPAMgAkorQIgBABQAEAAACgEIgCAAIgDADg");
	this.shape_97.setTransform(0,3.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALIgKgDQgIgFgBgGQgBgIAHABQAFACADAIg");
	this.shape_98.setTransform(-24.2,-111);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D9EF7F").s().p("AAAAIQgIgFgBgGQgBgIAHABQAFACADAIIAFALg");
	this.shape_99.setTransform(-24.2,-111);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOIgNgEQgLgGgBgIQgBgLAJACQAHACAEAKg");
	this.shape_100.setTransform(-23.5,-108.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D9EF7F").s().p("AAAAKQgLgGgBgIQgBgLAJACQAHACAEAKIAGAPg");
	this.shape_101.setTransform(-23.5,-108.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A6D514").ss(1,1,1).p("AAMARIgMgGQgMgJABgJQAAgMAKAEQAHADACAMg");
	this.shape_102.setTransform(-22.9,-105.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D9EF7F").s().p("AAAALQgMgJABgJQAAgMAKAEQAHADACAMIAEARg");
	this.shape_103.setTransform(-22.9,-105.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAVIgPgIQgOgLAAgKQABgPALAFQAJAEADAOg");
	this.shape_104.setTransform(-22.2,-103.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D9EF7F").s().p("AAAANQgOgLAAgKQABgPALAFQAJAEADAOIAFAVg");
	this.shape_105.setTransform(-22.2,-103.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#A6D514").ss(1,1,1).p("AAJgCIAJAVIgRgFQgQgIgCgLQgDgPANADQAKACAGANg");
	this.shape_106.setTransform(-21,-100.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D9EF7F").s().p("AABAOQgQgIgCgLQgDgPANADQAKACAGANIAJAVg");
	this.shape_107.setTransform(-21,-100.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#A6D514").ss(1,1,1).p("AAUAaIgUgJQgSgNgBgOQAAgTAPAFQAMAGAFARg");
	this.shape_108.setTransform(-20.2,-97.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D9EF7F").s().p("AAAARQgSgNgBgOQAAgTAPAFQAMAGAFARIAHAbg");
	this.shape_109.setTransform(-20.2,-97.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAdIgQgNQgSgQADgPQAEgSALAIQANAIABARg");
	this.shape_110.setTransform(-19.7,-92.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D9EF7F").s().p("AAAAQQgSgQADgPQAEgSALAIQANAIABARIACAdg");
	this.shape_111.setTransform(-19.7,-92.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A6D514").ss(1,1,1).p("AANAgQgjgaAJgZQAGgTALALQANAKgBARg");
	this.shape_112.setTransform(-20.3,-88.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D9EF7F").s().p("AgNgTQAGgTALALQANAKgBARIgDAgQgjgaAJgZg");
	this.shape_113.setTransform(-20.3,-88.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAiQglgcAJgaQAHgUAMALQANAKgCATg");
	this.shape_114.setTransform(-20.8,-84.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D9EF7F").s().p("AgOgUQAHgUAMALQANAKgCATIgCAiQglgcAJgag");
	this.shape_115.setTransform(-20.8,-84.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQIAFgKQAFgKgFgHQgFgIgEAHQgEAHADAGg");
	this.shape_116.setTransform(-23,-111.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D9EF7F").s().p("AgFABQgDgGAEgHQAEgHAFAIQAFAHgFAKIgFAKg");
	this.shape_117.setTransform(-23,-111.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARIAFgLQAFgKgFgHQgFgJgEAIQgFAHAEAHg");
	this.shape_118.setTransform(-21.9,-108.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAFAHgFAKIgFALg");
	this.shape_119.setTransform(-21.9,-108.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUIAHgNQAGgMgHgJQgGgKgFAIQgGAJAFAJg");
	this.shape_120.setTransform(-20.8,-106.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgJQAFgIAGAKQAHAJgGAMIgHANg");
	this.shape_121.setTransform(-20.8,-106.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZIAIgQQAHgQgHgKQgIgMgGAKQgHAKAFAMg");
	this.shape_122.setTransform(-19.3,-103);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D9EF7F").s().p("AgIADQgFgMAHgKQAGgKAIAMQAHAKgHAQIgIAQg");
	this.shape_123.setTransform(-19.3,-103);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#A6D514").ss(1,1,1).p("AgKABIAFAXQAFgFAEgJQALgOgGgLQgGgOgHAJQgJAJADAMg");
	this.shape_124.setTransform(-17.8,-99.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D9EF7F").s().p("AgKABQgDgMAJgJQAHgJAGAOQAGALgLAOQgEAJgFAFg");
	this.shape_125.setTransform(-17.8,-99.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAJgGAGgIQAQgQgEgPQgFgRgLAIQgMAJAAAQg");
	this.shape_126.setTransform(-16.9,-96.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D9EF7F").s().p("AgOAAQAAgQAMgJQALgIAFARQAEAPgQAQQgGAIgJAGg");
	this.shape_127.setTransform(-16.9,-96.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAJgGAGgIQAQgPgEgQQgFgRgLAIQgMAJABAQg");
	this.shape_128.setTransform(-16.3,-91.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQALgIAFARQAEAQgQAPQgGAIgJAGg");
	this.shape_129.setTransform(-16.3,-91.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#A6D514").ss(1,1,1).p("AgTAeQALgEAIgIQAVgQgBgQQgCgUgQAHQgNAHgDATg");
	this.shape_130.setTransform(-16.3,-87.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D9EF7F").s().p("AgOgBQADgTANgHQAQgHACAUQABAQgVAQQgIAIgLAEg");
	this.shape_131.setTransform(-16.3,-87.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#A6D514").ss(1,1,1).p("AgZAaQAMgBAMgGQAXgKADgQQAEgVgRADQgPADgIATg");
	this.shape_132.setTransform(-17.2,-83.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D9EF7F").s().p("AgLgDQAIgTAPgDQARgDgEAVQgDAQgXAKQgMAGgMABg");
	this.shape_133.setTransform(-17.2,-83.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#A6D514").ss(1,1,1).p("AgJCnQAGgGAFgMQAPgZAHghQAUhohHiY");
	this.shape_134.setTransform(-20.9,-94.4);

	this.addChild(this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.instance,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.1,-114,188.3,227.1);


(lib.frog_stand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.frog_eyes("synched",0);
	this.instance.setTransform(2.4,-90.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("AgDgFIAHgDQgBAJgDAHg");
	this.shape.setTransform(1.2,-70.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212121").s().p("AiQAdQADgIABgKQBYgWA1gKQBBgNAiACQAYABAKAHQARAKgJATIgTgGQACgEgBgBIgCgBQgEgEgSgBQgfgChBANQgtAHg3AOIgsAMIgCABIgBAAIAAAAg");
	this.shape_1.setTransform(15.7,-72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#070707").s().p("AgIAJQAAgJADgJIAOACIgCARg");
	this.shape_2.setTransform(-21.9,-72.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AgDAKQgGgEgBgDIgBgDIAFgIIAEgCIACgBIACAHIABgCIAAAAIAJACQgEAIgGAIg");
	this.shape_3.setTransform(-24.2,-73.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212121").s().p("AgFAIIgBAAQAGgIACgJIAFABQgDAIAAAKg");
	this.shape_4.setTransform(-23.3,-72.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhTBJQgjgZgDgnIAAgHIARABIACgRIgQgCQAJggAfgWQAfgWApgDQAxgEAlAZQAmAZAEApQABAIgBAFIgJADIAEAPQgLAegeAUQgeAUgoADIgJABQguAAgigYgAgEhLQgsADgcAaQgcAZADAdQADAeAeAVQAfAVAqgDQAsgEAcgZQAbgagCgcQgDgfgegUQgcgSgjAAIgKAAg");
	this.shape_5.setTransform(-10.6,-71.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEA6QgegUgDgfQgCgdAbgZQAcgZAsgDQApgEAgAVQAeAVADAeQADAcgcAaQgcAagsADIgIABQglAAgcgTg");
	this.shape_6.setTransform(-10.6,-71.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag6BBQgigfgHgmQgHgpAYgdQAagbAqADQAnADAiAfQAbAZAKAgQALAegLAcIgIgCIgBAAIgBACIgBgHIgEABIgFACQAIgRgEgWQgFgfgegaQgdgbgfgCQgigDgSAVQgSAVAGAfQAFAgAdAaQAdAaAgADQAhACATgUIAEgFIAAAEQACAEAFADIAHADIgEAEQgXAZgkAAQgrAAgmgig");
	this.shape_7.setTransform(-32.7,-78.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBPQgggDgdgaQgdgagFggQgGgfASgVQASgVAiADQAfACAdAbQAeAaAFAfQAEAWgIARIAAABQgEABAAAHIgEAFQgRASgcAAg");
	this.shape_8.setTransform(-32.7,-78.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F201D").s().p("AABADIgBAAIgHgGIAHAAIAJAAIAAADIgBAAIAAAAQAAAEgFAAg");
	this.shape_9.setTransform(26.2,-75.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F201D").s().p("AgRAAIABAAIAAgBIACABIAEACIAAAAIADABQAFAAAAgDIAAAAIAAgBIAAgDQALAAAJACQgNAEgPADIgCAAQgFAAAAgFg");
	this.shape_10.setTransform(27.4,-75.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F201D").s().p("AgEAEIAFgMIABABIAAAAIgBADQAAAEAFAAIACAAIAAAAIgFAHIgKABg");
	this.shape_11.setTransform(25.4,-74.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQgHIAcgDQABAKAEAHIgdAEQgEgKAAgIg");
	this.shape_12.setTransform(22.6,-74.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#212121").s().p("AgCAKQgDgIgCgKIAMgBIADADIgGALIgCAFg");
	this.shape_13.setTransform(24.7,-75.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAAQgBgFgCgDIAPgMQADAGACAJIADANIgQANQgBgKgDgLg");
	this.shape_14.setTransform(-35.5,-84.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AgfBqQgggCgegNIgTgIQghgKgTgcQglAHgWgZQgEgEgBgFQgVAHgWASQgIAHgJADQgbAKgIgbQgGgVAPgPIAVgbQAAgTAMgPIAOgQQAAgWAKgTQAIgOAOAAQAZADAUAPIAAAAQAKABAIAGIACABQAtgPAKAuQACAJAJAFQAXABAWAHQADABADgBQAMgDAMAAQAegaAbAlIADADQApgEApAGQAbADAXANIADAAQA0gMAygSQAJgDAKgCQAlgHACAiQABANgMAFQg4Aag7AQQgIACgIAFIgGAEQgHALgMAHIgHAGQgDA1g5ANQgTAEgSAAQgvAAgngbg");
	this.shape_15.setTransform(-10.5,-70.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgIgcIgMAPQgKAQAPAPQAQASARgMQAQgMgUgY");
	this.shape_16.setTransform(-48.5,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AgPASQgPgPAKgQIAMgPIAWAQQAUAYgQAMQgHAFgGAAQgJAAgLgLg");
	this.shape_17.setTransform(-48.5,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AgYg2IAOAEQANAGAKAKQAdAggqA5");
	this.shape_18.setTransform(-57.1,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("AgYg2IAOAFQANAFAKAKQAdAfgqA6g");
	this.shape_19.setTransform(-57.1,1.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("AEIm5IgUA2QgbBEgfBEQhlDahwCKIgpA3QgrA9gQAhQgRAlAFALQABADAXAUQAZAUBiBLQAEARhqg6IAlB0QASA0hkiLIgJAzQgKA3gKASQgIAOgEg1QgEhEgNgRIgXARQgYATgEALQgJAGgEgGQgIgMAbg6QAbg6ALgvIAGgjQAhhDBTigQBBh5A9i3QBAi9gFg6");
	this.shape_20.setTransform(23.7,62.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF00FF").s().p("Ai0HtQgEhEgNgRIgXARQgYATgEALQgJAGgEgGQgIgMAbg6QAbg6ALgvIAGgjIB0jjQBBh5A9i3QBAi9gFg6IChBcIgUA2QgbBEgfBEQhlDahwCKIgpA3QgrA9gQAhQgRAlAFALQABADAXAUQAZAUBiBLQAEARhqg6IAlB0QASA0hkiLIgJAzQgKA3gKASQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgGAAgDgpg");
	this.shape_21.setTransform(23.7,62.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AAKpuIgKACQgNAIgCAfQgGBhBmEdQBoEbApC0QAVBbAAAhQhLBCieA2IBsgEIgdBOQgGATAggfQAugtAXgJIACAsQADAvAIANQAEAHAEgIQABgCAKgYQAXg6AlgsIAIAoQAJApAIAKQAQAXAAh6QAEgfACgQQADgdgNgcQgMgag8khQhDlGgKgpQgShIgIhPIgDhAAgtmgIgpgPQgxgRgpgJQiHgbgOBEQgPBECfDoQA0BLA8BMQAzBCADABQADABAMATQANAXAGAXQAUBGhAAYQhpAmhVgIIARAeQALAkgcAYQgNALAGgCQARgGAIAAQAugDgYBaQgNAwAMgJQAVgYAOgPQA8hBgOCb");
	this.shape_22.setTransform(-59.8,44.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF00FF").s().p("AAtJsQgIgNgDgvIgBgsQgXAJgsAtQggAfAGgTIAdhOIhsAEQCbg2BLhCQAAghgUhbQgqi0hmkbQhnkdAGhhQACgfAMgIIANgCICABoIAEBAQAHBPAQBIQAKApBEFGQA8EhALAaQANAcgDAdIgFAvQAAB6gRgXQgIgKgJgpIgIgoQgkAsgXA6IgLAaQgDAEgCAAQgCAAgCgDg");
	this.shape_23.setTransform(-44.3,44.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQAAAtAIAAQAKAAAAgtQAAgsgKAAQgIAAAAAsg");
	this.shape_24.setTransform(15.2,-90.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AgJAAQABgsAIABQAJgBAAAsQAAAtgJAAQgIAAgBgtg");
	this.shape_25.setTransform(15.2,-90.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,1,1).p("AgJAAQAAAtAJAAQAJAAAAgtQAAgsgJAAQgJAAAAAsg");
	this.shape_26.setTransform(-4.1,-96);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AgJAAQABgsAIAAQAKAAAAAsQAAAtgKgBQgIABgBgtg");
	this.shape_27.setTransform(-4.1,-96);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("ABMg7QgNgQgfAGQggAGgeAZQgfAZgOAcQgNAdANAQQANAQAfgGQAfgGAegZQAggZAOgbQANgegNgQg");
	this.shape_28.setTransform(39.3,-44.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AhLA8QgNgQANgdQAOgcAfgZQAegZAggGQAfgGANAQQANAQgNAeQgOAbggAZQgeAZgfAGIgPACQgUAAgJgMg");
	this.shape_29.setTransform(39.3,-44.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A6D514").ss(1,1,1).p("AgDgKQAGACACAIIAFALQgRgEgCgKQgBgIAHABg");
	this.shape_30.setTransform(21.7,-105.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9EF7F").s().p("AgJgDQgBgIAHABQAGACACAIIAFALQgRgEgCgKg");
	this.shape_31.setTransform(21.7,-105.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgFgCgNQgBgLAJACQAHACAEAKg");
	this.shape_32.setTransform(22.4,-103.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9EF7F").s().p("AgMgEQgBgLAJACQAHACAEAKIAGAPQgXgFgCgNg");
	this.shape_33.setTransform(22.4,-103.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgZgJABgPQAAgMAKAEQAHADACAMg");
	this.shape_34.setTransform(23,-100.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D9EF7F").s().p("AgLgHQAAgMAKAEQAHADACAMIAFARQgZgJABgPg");
	this.shape_35.setTransform(23,-100.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAVQgegLABgSQABgPALAFQAJAEADAOg");
	this.shape_36.setTransform(23.8,-98);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9EF7F").s().p("AgOgIQABgPALAFQAJAEADAOIAFAVQgegLABgSg");
	this.shape_37.setTransform(23.8,-98);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A6D514").ss(1,1,1).p("AASATQgggFgDgTQgDgPANADQAKACAFANQAHAPADAGg");
	this.shape_38.setTransform(24.9,-95.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9EF7F").s().p("AgRgFQgDgPANADQAKACAFANIAKAVQgggFgDgTg");
	this.shape_39.setTransform(24.9,-95.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A6D514").ss(1,1,1).p("AAUAaQgngMAAgYQAAgTAPAFQAMAGAEARg");
	this.shape_40.setTransform(25.7,-92.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D9EF7F").s().p("AgTgKQAAgTAPAFQAMAGAEARIAIAbQgngMAAgYg");
	this.shape_41.setTransform(25.7,-92.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAdQgjgUAEgYQAEgSALAIQANAIABARQABAVABAIg");
	this.shape_42.setTransform(26.2,-87.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9EF7F").s().p("AgPgPQAEgSALAIQANAIABARIACAdQgjgUAEgYg");
	this.shape_43.setTransform(26.2,-87.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A6D514").ss(1,1,1).p("AANAgQgJgGgGgKQgRgSAGgRQAGgTALALQANAKgCARg");
	this.shape_44.setTransform(25.7,-83.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D9EF7F").s().p("AgCAQQgRgSAGgRQAGgTALALQANAKgCARIgCAgQgJgGgGgKg");
	this.shape_45.setTransform(25.7,-83.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A6D514").s().p("AgTgQIAAgCQAEgLAIgDQAHgDAHAGQAQANgCAUIgCAbIAAADIgJAAIgJAAQgbgbAHgXgAgDgXQgEABgDAIIAAAAQgEAOAOARQAEAHAFAEIACgZQACgPgMgJQgBgCgCAAIgBAAg");
	this.shape_46.setTransform(25.1,-79.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D9EF7F").s().p("AAAAPQgOgQAFgPIAAAAQADgIADgBQADgBACADQAMAJgDAPIgBAZQgFgEgFgHg");
	this.shape_47.setTransform(25.1,-79.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A6D514").ss(1,1,1).p("AgEgMQgFAHAEAGIAFAPQANgQgIgLQgFgIgEAHg");
	this.shape_48.setTransform(22.9,-106.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D9EF7F").s().p("AgFABQgEgGAFgHQAEgHAFAIQAIALgNAQg");
	this.shape_49.setTransform(22.9,-106.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQANgRgIgLQgFgJgEAIQgFAHAEAHQAFALAAAEg");
	this.shape_50.setTransform(24.1,-103.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAIALgNARIgFgPg");
	this.shape_51.setTransform(24.1,-103.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUQAQgUgKgOQgGgKgFAIQgGAJAFAJg");
	this.shape_52.setTransform(25.1,-101.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgJQAFgIAGAKQAKAOgQAUg");
	this.shape_53.setTransform(25.1,-101.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQATgZgMgRQgHgMgHAKQgHALAGALg");
	this.shape_54.setTransform(26.6,-97.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D9EF7F").s().p("AgIADQgGgLAHgLQAHgKAHAMQAMARgTAZg");
	this.shape_55.setTransform(26.6,-97.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#A6D514").ss(1,1,1).p("AgFAZQAXgXgJgRQgGgOgHAJQgJAJADAMQAEASABAGg");
	this.shape_56.setTransform(28.1,-94.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D9EF7F").s().p("AgKABQgDgMAJgJQAHgJAGAOQAJARgXAXIgFgYg");
	this.shape_57.setTransform(28.1,-94.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAhgXgGgWQgFgRgLAIQgMAJABAQg");
	this.shape_58.setTransform(29,-91.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQALgIAFARQAGAWghAXg");
	this.shape_59.setTransform(29,-91.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAhgWgHgXQgEgRgLAIQgMAJAAAQg");
	this.shape_60.setTransform(29.6,-86.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D9EF7F").s().p("AgOAAQAAgQAMgJQALgIAEARQAHAXghAWg");
	this.shape_61.setTransform(29.6,-86.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#A6D514").ss(1,1,1).p("AgTAeQApgSgCgaQgCgUgQAHQgNAHgDATg");
	this.shape_62.setTransform(29.6,-82.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D9EF7F").s().p("AgOgBQADgTANgHQAQgHACAUQACAagpASg");
	this.shape_63.setTransform(29.6,-82.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A6D514").s().p("AgXAYIAAgBIANgEQAUgJADgNIAAgBQABgHgCgDQgCgCgFABQgMACgHAOIgJAUIACgYIABgDQAJgQAOgDQAKgCAGAGQAGAHgCAMIAAABQgFARgTAKQgJgCgNAAg");
	this.shape_64.setTransform(29.5,-78.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D9EF7F").s().p("AgSARIAJgSQAHgQAMgCQAFAAACACQACACgBAIIAAABQgDAMgUAKIgNAEg");
	this.shape_65.setTransform(29,-78.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A6D514").s().p("AgOCmQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIABAAIAAAAIAJgLIAKgBIgNAUQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgFABAAgGgAAUBTQAQhkhDiRIgBgEQAAgEAFAAQADAAACACQBGCYgTBpQgDADgEAGQAAgIgCgHg");
	this.shape_66.setTransform(25,-89.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(2,1,1).p("AArAkQgaAggeAMQgfAMgTgPQgSgPAGgiQAGgfAaggQAbggAegMQAfgMASAPQATAPgGAhQgGAggbAgg");
	this.shape_67.setTransform(12,-87.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag/BNQgSgPAGgiQAGgfAaggQAbggAegMQAfgMASAPQATAPgGAhQgGAggbAgQgaAggeAMQgOAFgLAAQgOAAgLgIg");
	this.shape_68.setTransform(12,-87.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2,1,1).p("AAsAkQgbAggeAMQgfAMgSgPQgTgPAGgiQAGgfAbggQAaggAegMQAfgMASAPQATAPgGAiQgGAfgaAgg");
	this.shape_69.setTransform(-7.3,-92.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ag+BNQgTgPAGgiQAGgfAbggQAaggAegMQAfgMASAPQATAPgGAiQgGAfgaAgQgbAggeAMQgOAFgLAAQgOAAgKgIg");
	this.shape_70.setTransform(-7.3,-92.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_71.setTransform(-19.7,-56.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_72.setTransform(-19.7,-56.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(2,1,1).p("AAKAAQAAAJgKAAQgJAAAAgJQAAgIAJAAQAKAAAAAIg");
	this.shape_73.setTransform(-30.7,-58.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF00FF").s().p("AgJAAQABgIAIAAQAJAAAAAIQAAAJgJAAQgIAAgBgJg");
	this.shape_74.setTransform(-30.7,-58.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1).p("AAAgNQgGACgEAEQgJAHAMAJQASAQAEgm");
	this.shape_75.setTransform(41.5,0.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF00FF").s().p("AgHAJQgMgJAJgHQAEgEAGgCIAPAAQgDAbgLAAQgCAAgGgFg");
	this.shape_76.setTransform(41.5,0.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AANgyIgYAIQgbANgCAWQgDAaAXAVQAWAWAXgUQAVgSgFgbQgDgXgNgN");
	this.shape_77.setTransform(-55.1,48.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF00FF").s().p("AgUAoQgXgVADgaQACgWAbgNIAYgIIAMALQANANADAXQAFAbgVASQgLAJgLAAQgLAAgMgLg");
	this.shape_78.setTransform(-55.1,48.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1).p("AhJgZIAHASQAKASAPAKQAsAgBHhS");
	this.shape_79.setTransform(67.9,15.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF00FF").s().p("AgpAVQgPgKgKgSIgHgSICTgEQgzA7glAAQgPAAgMgJg");
	this.shape_80.setTransform(67.9,15.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1).p("AAFgqIgPAdQgKAfAhAZ");
	this.shape_81.setTransform(48.4,9.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF00FF").s().p("AgKgNIAPgdIAIBVQghgZAKgfg");
	this.shape_82.setTransform(48.4,9.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1,1).p("AAAg3QgEAFgGAJQgOARgEARQgPAxBKAP");
	this.shape_83.setTransform(45.8,-9.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF00FF").s().p("AgcgIQAEgQAOgRIAKgOIAfBvQhKgOAPgyg");
	this.shape_84.setTransform(45.8,-9.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("Agkg1IAPACQARAEAMAJQAqAcgRBB");
	this.shape_85.setTransform(-79.9,30.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF00FF").s().p("Agkg2IAPADQARADAMAJQAqAdgRBBg");
	this.shape_86.setTransform(-79.9,30.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1,1,1).p("AArhPIAFAVQAEAZgDAXQgMBHhXAT");
	this.shape_87.setTransform(-86.8,4.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF00FF").s().p("AArhPIAFAVQAEAZgDAXQgMBGhXAUg");
	this.shape_88.setTransform(-86.8,4.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(3,1,1).p("AgLiRIgKAfQgLAngDAmQgHB3BPBA");
	this.shape_89.setTransform(-33.1,59.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(3,1,1).p("AhPiyQAEAFBBC1QA3ChAjAK");
	this.shape_90.setTransform(-23.6,54.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(3,1,1).p("Ai2iJIApAsQAyA0AwAqQCYCLBKgC");
	this.shape_91.setTransform(-9.5,46.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(3,1,1).p("Ah1gKIBGANQBUAMBRgH");
	this.shape_92.setTransform(-0.2,37.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(2,1,1).p("AAEgaIgGAOQgEARAKAW");
	this.shape_93.setTransform(24.5,-49.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF00FF").s().p("AgCgMIAGgOIAAA1QgKgWAEgRg");
	this.shape_94.setTransform(24.5,-49.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(2,1,1).p("AnJheIA3A1QBKA5BfAjQEsBwGHiq");
	this.shape_95.setTransform(-21.3,-49.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF00FF").s().p("AjpAzQhfgjhJg5Ig4g1IOTBXQjtBmjMAAQiDAAh3gsg");
	this.shape_96.setTransform(-21.3,-49.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(3,1,1).p("AH4gGQgWA5hiBvQiNCiAVCOQivgEg8g3QhZhThPA/QgoAggogCQgvgDhEgvQg7gogvAQQgOAFgMALQgFAFgDAEQAQgqAIhKQAPiTgsihQgrijAIiLQACgsAHgkIAHgbIBUArQBoA1BlArQFECNC0ADIDRALQAZBkgZBBg");
	this.shape_97.setTransform(-5.4,36.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAdGXQhZhUhPBAQgoAggogDQgvgChEgvQg7gpgvARQgOAFgMALIgIAJQAQgqAIhJQAPiUgsihQgriiAIiMQACgrAHglIAHgbIBUAsQBoA0BlArQFECNC0ADIDRALQAZBkgZBBQgWA5hiBvQiNCiAVCOQivgEg8g3g");
	this.shape_98.setTransform(-5.4,36.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(3,1,1).p("ABAj+QirBnA7CzQA5C1AYAu");
	this.shape_99.setTransform(-61.7,-44.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AGZRAQhTgBjOhTQithHgogcQgjgYgLgcQgLgYAFgeIgdgLQgugWgMgVQgCgFgOgGQgRgHgUAAQg0gCgmAdQgxAkgugHQgagEgfgUQgcAhhJAxIgRgZQA4glAfgeQAJgJAEgGIABgCIAAgBIAIgRIAPAMQAfAXAZAEQAiAFAmgcQAwgkA+ADQA6AEATAeIAAAAQAFAMAnARIAbALIAIADIACABIABAAIANAEIgDANQgGAeAIATQAJAUAbATQAnAbCoBFQB6AyBeAWIAJACIgOgMQgVgMgIgMQgNgQAOgQQAOgPAqgIIAagEQgZgOgRgUQgLgNABgPQABgNAKgLQAJgJANgHQhkgGhogcQgTgFgJgMQgJgMACgRQACgYAXgiQAfgtA7g1QFXk7BOhLQAfgeAIgVQAHgRgJgNQgVgih4gFQhngEhNAnQgaANgRAOIgOAMIgaAdIAAh5QgCh3gkh8QgMgpgMghIgKgYIgBgBIAAgBIgEgHIAog+IABgBIABgBQBYhlgZhLQgMgjgpgfQhthThegxQghgRgMgfIAfgEIABABIgIAKIgBABIAAAAQgBAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAFAFAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIAIgJQAHAHAOAIQBdAxByBWQAvAjAQAtQAgBchkBxIgfAvQBGCjADC4IAAAzQBfhECLAGQCDAIAhArQAUAbgOAgQgKAcgkAiQieCWkIDwQg5A1gcAoQgTAcgCAQQAAAGACACQACAEAJACQCvAuB3gPIAFAeIgDgOIAAAAIACAOIgBAAIgUAFQgXAGgXAIQgYAJgKALQgDADAAACQAAADADAEQAXAbAnANQAIAEARAEIAHABIADAAIgCAeIghABQgpACgXAEQgVAEgPAHQAEAFAOAIIABABIABABIBdBKgArarFIgQgXIABAAIDKiJQACACABAHIAEAWIjBCDgAAdsOQACgZAZhEQAQgsgLgqQgLgpgdgMQgVgLgyAWQgLAEgWAMIgOAHIAAABIgTAMIgEgXQgGgkgSgQQgNgNgYgCQgfgCg1AWQgVAIhJA6IhfBNQgWARgrAdIgDgOQgDgKgDgGIA4gnIBfhOQBMg8AZgKQA+gYAjACQAiACAWAVQAUASAIAfIAigQQA8gYAiAOQAMAFALAKQAdBGAHA+QgDARgFAMIgJAaQgGgDgFACQgIADgEAMIgBABQgEATANASIgBARIgeADIAAgPgABNvpQAPAbADAjQgGgcgMgig");
	this.shape_100.setTransform(17.9,1.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF00FF").s().p("AIdQcQhegWh6gyQiqhFgngbQgbgTgJgUQgIgTAGgeIADgNIgNgEIgBAAIgCgBIgIgDIgbgLQglgRgFgMIAAAAQgTgeg6gEQg+gDgwAkQgmAcgigFQgZgEgfgXIgPgMIgIARIAAABIgBACQgEAGgJAJQgfAeg4AlQgzAihsBcIhAA2IABgCQAUg8gQghQgHgPgQgEQgNgDgPAEQgTAFgbARQAQgdABgWQAAgSgIgLQgKgMgTgDIgRgCIABgBQASgKAHgKQAGgGABgKQAAgKgHgIQgGgHgLgGQBogJAtgSIAvgTQAZgMAMgTQAMgXgKghQgLghghgxIiyj7QhwidgHggQgMgrADgYQAFgbAdgNQBMgjB6AzQBbAiBdBIIAUgWQgQgSgNg1QgOg7gHgXIgYhLQgOgygihMQgrhdgLgeQgZhIAPhFQAWhgBlhEIDAiDIABAeQgOATAFAbQAFAZAWAUQAVATAaADQAbADASgQQAPAIAaAFQADAbAZARQAZAQAggDQAdgCAVgPQAVgQAEgXIABABIABAAIADgBIA1gPQA/gQBCgNQAkgHAlgFQAMAfAhARQBeAxBtBTQApAfAMAjQAZBLhYBlIgBABIgBABIgoA+IAEAHIAAABIABABIAKAYQAMAhAMApQAkB8ACB3IAAB5IAdggIALgJQARgOAagNQBNgnBnAEQB4AFAVAiQAJANgHARQgIAVgfAeQhOBLlXE7Qg7A1gfAtQgXAigCAYQgCARAJAMQAJAMATAFQBoAcBkAGQgNAHgJAJQgKALgBANQgBAPALANQARAUAZAOIgaAEQgqAIgOAPQgOAQANAQQAIAMAVAMIAOAMgAg9rsQgYgPggADQg8AEgOAwQgQgDgPgGQATgrgqgnQgngignAQQAAgKgCgRQArgdAWgRIBfhNQBJg6AVgIQA1gWAdACQAYACANANQASAQAGAkIAEAXIATgMIAAgBIAOgHQAWgMALgEQAzgWAWALQAdAMALApQALAqgQAsQgZBEgCAZIAAAPQgtAHgbAFQhVARhhAbQgFgagZgPg");
	this.shape_101.setTransform(-1.5,0.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgEgCgKQgBgIAHABQAGACACAIg");
	this.shape_102.setTransform(-25.8,-114);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D9EF7F").s().p("AgJgDQgBgIAHABQAGACACAIIAFALQgRgEgCgKg");
	this.shape_103.setTransform(-25.8,-114);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgFgCgNQgBgLAJACQAHACAEAKg");
	this.shape_104.setTransform(-25.1,-111.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D9EF7F").s().p("AgMgEQgBgLAJACQAHACAEAKIAGAPQgXgFgCgNg");
	this.shape_105.setTransform(-25.1,-111.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgZgJABgPQAAgMAKAEQAHADACAMg");
	this.shape_106.setTransform(-24.5,-108.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D9EF7F").s().p("AgLgHQAAgMAKAEQAHADACAMIAFARQgZgJABgPg");
	this.shape_107.setTransform(-24.5,-108.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#A6D514").ss(1,1,1).p("AAKAAIAFAVQgegLABgSQABgPALAFQAJAEADAOg");
	this.shape_108.setTransform(-23.7,-106.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D9EF7F").s().p("AgOgIQABgPALAFQAJAEADAOIAFAVQgegLABgSg");
	this.shape_109.setTransform(-23.7,-106.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A6D514").ss(1,1,1).p("AAIgCQAHAPADAGQgggFgDgTQgDgPANADQAKACAFANg");
	this.shape_110.setTransform(-22.6,-103.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D9EF7F").s().p("AgRgFQgDgPANADQAKACAFANIAKAVQgggFgDgTg");
	this.shape_111.setTransform(-22.6,-103.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A6D514").ss(1,1,1).p("AgEgYQAMAGAEARIAIAbQgngMAAgYQAAgTAPAFg");
	this.shape_112.setTransform(-21.8,-100.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D9EF7F").s().p("AgTgKQAAgTAPAFQAMAGAEARIAIAbQgngMAAgYg");
	this.shape_113.setTransform(-21.8,-100.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#A6D514").ss(1,1,1).p("AAAgZQANAIABARQABAVABAIQgjgUAEgYQAEgSALAIg");
	this.shape_114.setTransform(-21.3,-95.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D9EF7F").s().p("AgPgPQAEgSALAIQANAIABARIACAdQgjgUAEgYg");
	this.shape_115.setTransform(-21.3,-95.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#A6D514").ss(1,1,1).p("AAEgbQANAKgCARIgCAgQgJgGgGgKQgRgSAGgRQAGgTALALg");
	this.shape_116.setTransform(-21.8,-91.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D9EF7F").s().p("AgCAQQgRgSAGgRQAGgTALALQANAKgCARIgCAgQgJgGgGgKg");
	this.shape_117.setTransform(-21.8,-91.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#A6D514").ss(1,1,1).p("AAEgdQAOAKgCATIgDAiQgJgHgHgLQgRgTAGgRQAGgUAMALg");
	this.shape_118.setTransform(-22.4,-87.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D9EF7F").s().p("AgDAQQgRgTAGgRQAGgUAMALQAOAKgCATIgDAiQgJgHgHgLg");
	this.shape_119.setTransform(-22.4,-87.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQANgQgIgLQgFgIgEAHQgFAHAEAGg");
	this.shape_120.setTransform(-24.6,-114.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D9EF7F").s().p("AgFABQgEgGAFgHQAEgHAFAIQAIALgNAQg");
	this.shape_121.setTransform(-24.6,-114.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQANgRgIgLQgFgJgEAIQgFAHAEAHQAFALAAAEg");
	this.shape_122.setTransform(-23.4,-111.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAIALgNARIgFgPg");
	this.shape_123.setTransform(-23.4,-111.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUQAQgUgKgOQgGgKgFAIQgGAJAFAJg");
	this.shape_124.setTransform(-22.4,-109.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgJQAFgIAGAKQAKAOgQAUg");
	this.shape_125.setTransform(-22.4,-109.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQATgZgMgRQgHgMgHAKQgHALAGALg");
	this.shape_126.setTransform(-20.9,-106);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D9EF7F").s().p("AgIADQgGgLAHgLQAHgKAHAMQAMARgTAZg");
	this.shape_127.setTransform(-20.9,-106);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#A6D514").ss(1,1,1).p("AgFAZQAXgXgJgRQgGgOgHAJQgJAJADAMQAEASABAGg");
	this.shape_128.setTransform(-19.4,-102.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D9EF7F").s().p("AgKABQgDgMAJgJQAHgJAGAOQAJARgXAXIgFgYg");
	this.shape_129.setTransform(-19.4,-102.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAhgXgGgWQgFgRgLAIQgMAJABAQg");
	this.shape_130.setTransform(-18.5,-99.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQALgIAFARQAGAWghAXg");
	this.shape_131.setTransform(-18.5,-99.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAhgWgHgXQgEgRgLAIQgMAJAAAQg");
	this.shape_132.setTransform(-17.9,-95);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D9EF7F").s().p("AgOAAQAAgQAMgJQALgIAEARQAHAXghAWg");
	this.shape_133.setTransform(-17.9,-95);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#A6D514").ss(1,1,1).p("AgTAeQApgSgCgaQgCgUgQAHQgNAHgDATg");
	this.shape_134.setTransform(-17.9,-90.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D9EF7F").s().p("AgOgBQADgTANgHQAQgHACAUQACAagpASg");
	this.shape_135.setTransform(-17.9,-90.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#A6D514").ss(1,1,1).p("AgLgDQgKAWgEAHQAtgGAFgbQAEgVgRADQgPADgIATg");
	this.shape_136.setTransform(-18.8,-86.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D9EF7F").s().p("AgLgDQAIgTAPgDQARgDgEAVQgFAbgtAGIAOgdg");
	this.shape_137.setTransform(-18.8,-86.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#A6D514").ss(1,1,1).p("AgJCnQAWgXALg1QAUhohHiZ");
	this.shape_138.setTransform(-22.5,-97.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.1,-117.1,186.8,234.7);


(lib.frog_jump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.frog_eyes("synched",0);
	this.instance.setTransform(-52.8,-69.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("AgDgFIAHgCQgCAHgCAJg");
	this.shape.setTransform(-50.7,-50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212121").s().p("AiQAdQADgIABgKQBYgWA1gKQBBgNAiACQAYABAKAHQARAKgJATIgTgGQACgEgBgBIgCgBQgEgEgSgBQgfgChBANQgtAHg3AOIgsAMIgCABIgBAAIAAAAg");
	this.shape_1.setTransform(-36.2,-52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#070707").s().p("AgIAJQAAgJADgJIAOACIgCARg");
	this.shape_2.setTransform(-73.8,-52.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AgDAKQgGgEgBgDIgBgDIAFgIIAEgCIACgBIACAHIABgCIAAAAIAJACQgEAIgGAIg");
	this.shape_3.setTransform(-76.1,-53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212121").s().p("AgFAIIgBAAQAGgIACgJIAFABQgDAIAAAKg");
	this.shape_4.setTransform(-75.2,-52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhTBJQgigZgEgnIAAgHIARABIACgRIgQgCQAJggAfgWQAfgWApgDQAwgEAmAZQAmAZADApQABAIgBAFIgJADIAFAPQgLAegeAUQgeAUgoADIgJABQgvAAghgYgAgEhLQgsADgcAaQgcAZADAdQADAeAeAVQAfAVAqgDQAsgEAcgZQAcgagDgcQgDgfgfgUQgbgSgjAAIgKAAg");
	this.shape_5.setTransform(-62.5,-51.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEA6QgegUgDgfQgCgdAbgZQAcgZAsgDQApgEAgAVQAeAVADAeQADAcgcAaQgcAagsADIgIABQglAAgcgTg");
	this.shape_6.setTransform(-62.5,-51.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag6BBQgigfgHgmQgHgpAYgdQAagbAqADQAnADAiAfQAbAZAKAgQALAegLAcIgIgCIgBAAIgBACIgBgHIgEABIgFACQAIgRgEgWQgFgfgegaQgdgbgfgCQgigDgSAVQgSAVAGAfQAFAgAdAaQAdAaAgADQAhACATgUIAEgFIAAAEQACAEAFADIAHADIgEAEQgXAZgkAAQgrAAgmgig");
	this.shape_7.setTransform(-84.6,-58.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBPQgggDgdgaQgdgagFggQgGgfASgVQASgVAiADQAfACAdAbQAeAaAFAfQAEAWgIARIAAABQgEABAAAHIgEAFQgRASgcAAg");
	this.shape_8.setTransform(-84.6,-58.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F201D").s().p("AgKAIIABgBIACgDQAEgEADgHIABgCIAMgBQgEAJgJALIgMABIACgDg");
	this.shape_9.setTransform(-29.9,-54.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVgGIAdgEIADAHIgHAIIgBABIgCADIgNACQgGgJgDgIgAASADIAEAEIgHABg");
	this.shape_10.setTransform(-31.4,-54.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAGQgCgHgEgHIAOgMQAGAJAEAMIABAGIgQAOg");
	this.shape_11.setTransform(-88.5,-64.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQABAtAIgBQAKAAgCgsQgBgsgIAAQgKABACArg");
	this.shape_12.setTransform(-40.1,-71.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF00FF").s().p("AgIAAQgCgrAKgBQAIAAABAsQACAsgKAAIgBABQgHgBgBgsg");
	this.shape_13.setTransform(-40.1,-71.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQABAtAIAAQAKgBgBgsQgCgsgIABQgKAAACArg");
	this.shape_14.setTransform(-59.5,-75.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AgIAAQgCgrAKAAQAIgBACAsQABAsgKABQgIAAgBgtg");
	this.shape_15.setTransform(-59.5,-75.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("ABKg9QgNgQggAHQgdAIgfAaQgfAagMAbQgMAeANAQQANAQAggIQAdgHAfgaQAfgaAMgcQAMgdgNgQg");
	this.shape_16.setTransform(-14.4,-25.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AhJA/QgNgQAMgeQAMgbAfgbQAfgZAdgIQAggIANARQANAQgMAdQgMAbgfAbQgfAagdAHQgKACgJAAQgRAAgJgKg");
	this.shape_17.setTransform(-14.4,-25.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgDgCgKQgCgJAIACQAFABADAIg");
	this.shape_18.setTransform(-34,-86.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9EF7F").s().p("AgJgCQgCgJAIACQAFABADAIIAFALQgRgDgCgKg");
	this.shape_19.setTransform(-34,-86.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgEgCgOQgCgLAKACQAHACAEAKg");
	this.shape_20.setTransform(-33.2,-83.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9EF7F").s().p("AgMgEQgCgLAKACQAHACAEAKIAGAPQgXgEgCgOg");
	this.shape_21.setTransform(-33.2,-83.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgZgJAAgOQAAgNAKAEQAIADACALg");
	this.shape_22.setTransform(-32.5,-81.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9EF7F").s().p("AgMgGQAAgNAKAEQAIADACALIAFASQgZgJAAgOg");
	this.shape_23.setTransform(-32.5,-81.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAUQgdgKAAgSQAAgOALAEQAKAEADANg");
	this.shape_24.setTransform(-31.7,-78.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9EF7F").s().p("AgOgIQAAgOALAEQAKAEADANIAFAVQgdgKAAgSg");
	this.shape_25.setTransform(-31.7,-78.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A6D514").ss(1,1,1).p("AATASQgggDgEgTQgDgPAMACQALACAGANg");
	this.shape_26.setTransform(-30.5,-75.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9EF7F").s().p("AgRgEQgDgPAMACQALACAGANIAKAUQgggDgEgTg");
	this.shape_27.setTransform(-30.5,-75.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A6D514").ss(1,1,1).p("AAVAZQgngLgBgXQgBgTAPAFQAMAEAFARg");
	this.shape_28.setTransform(-29.5,-72.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9EF7F").s().p("AgTgJQgBgTAPAFQAMAEAFARIAJAbQgngLgBgXg");
	this.shape_29.setTransform(-29.5,-72.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A6D514").ss(1,1,1).p("AARAcQgkgSAEgYQADgSAMAHQANAIABARg");
	this.shape_30.setTransform(-28.9,-68.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9EF7F").s().p("AgPgOQADgSAMAHQANAIABARIADAcQgkgSAEgYg");
	this.shape_31.setTransform(-28.9,-68.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAgQgkgZAIgZQAGgTALAKQAOAKgBARg");
	this.shape_32.setTransform(-29.3,-64.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9EF7F").s().p("AgOgSQAGgTALAKQAOAKgBARIgCAgQgkgZAIgZg");
	this.shape_33.setTransform(-29.3,-64.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A6D514").s().p("AAMAlIAAAAQgmgdAGgcIABgCQAEgLAHgDQAIgEAHAHQAQALgBAWIgCAhQAAAFgFAAgAgEgbQgDABgDAIQgEAPAOAQIAKAKIACgXQABgRgMgIQgBgCgCAAIgCAAg");
	this.shape_34.setTransform(-29.8,-59.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D9EF7F").s().p("AgPgTQAGgUANAKQAOAKgBATIgCAiQgmgbAIgag");
	this.shape_35.setTransform(-29.8,-59.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQADgEADgGQAEgKgFgHQgFgIgEAHQgFAHAFAHg");
	this.shape_36.setTransform(-32.8,-86.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9EF7F").s().p("AgEACQgFgHAFgHQAEgHAFAIQAFAHgEAKIgGAKg");
	this.shape_37.setTransform(-32.8,-86.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQAEgFACgGQAEgKgFgHQgFgJgEAIQgFAHAEAHg");
	this.shape_38.setTransform(-31.6,-84.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAFAHgEAKQgCAGgEAFg");
	this.shape_39.setTransform(-31.6,-84.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUQAEgFADgIQAFgNgGgIQgGgKgFAIQgGAJAFAJg");
	this.shape_40.setTransform(-30.5,-81.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgJQAFgIAGAKQAGAIgFANQgDAIgEAFg");
	this.shape_41.setTransform(-30.5,-81.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQAFgHADgJQAHgQgIgLQgHgMgHALQgHAKAGALg");
	this.shape_42.setTransform(-28.8,-78.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9EF7F").s().p("AgIACQgGgLAHgKQAHgLAHAMQAIALgHAQQgDAJgFAHg");
	this.shape_43.setTransform(-28.8,-78.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A6D514").ss(1,1,1).p("AgEAZQAEgGAFgIQAKgPgGgLQgGgOgHAJQgIAJADAMg");
	this.shape_44.setTransform(-27.3,-75.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D9EF7F").s().p("AgJABQgDgMAIgJQAHgJAGAOQAGALgKAPQgFAIgEAGg");
	this.shape_45.setTransform(-27.3,-75.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAGgJQAPgPgFgQQgFgRgKAJQgMAJABAQg");
	this.shape_46.setTransform(-26.3,-72);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAFAQgPAPQgGAJgJAGg");
	this.shape_47.setTransform(-26.3,-72);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAggXgHgXQgFgRgKAJQgMAJABAQg");
	this.shape_48.setTransform(-25.5,-67.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAHAXggAXg");
	this.shape_49.setTransform(-25.5,-67.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A6D514").ss(1,1,1).p("AgSAfQAogUgDgaQgDgUgPAHQgNAIgCAUQgDAXgBAIg");
	this.shape_50.setTransform(-25.3,-63.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D9EF7F").s().p("AgOAAQACgUANgIQAPgHADAUQADAagoAUIAEgfg");
	this.shape_51.setTransform(-25.3,-63.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A6D514").s().p("AgdAbIAAgCIAAgBIAGAEIAAABIADABQAFAAAAgFIAAgGIANgEQAUgKACgNIAAgBQABgIgDgCQgCgCgEABQgNACgGARIgIASIACgcQAJgQAOgDQAKgCAGAGQAGAHgCAMQgFAcgvAKIgCABQgFAAAAgFg");
	this.shape_52.setTransform(-26.1,-58.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9EF7F").s().p("AgRASIAIgSQAFgRANgCQAFgBACACQACACAAAIIAAABQgDANgUAKIgMAEg");
	this.shape_53.setTransform(-25.8,-59);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A6D514").s().p("AgHCmIAAgBIAMgBIgFAGQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgFAAAAgFgAALCFIABAAIAAABIgBABQAAAFAFABIACgBIABAAIgCADIgLAAgAAYBSQANhmhIiOIAAgDQAAgFAFAAQADAAABADQBMCVgQBqQgFAEgCAEIgDgOg");
	this.shape_54.setTransform(-30.3,-69.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,1,1).p("AA9hOQATAPgFAhQgFAggaAgQgZAhgdANQgfANgTgOQgTgOAFgiQAFggAZghQAaggAdgNQAfgNATAOg");
	this.shape_55.setTransform(-43.1,-67.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag8BPQgTgOAFgiQAFggAZghQAaggAdgNQAfgNATAOQATAPgFAhQgFAggaAgQgZAhgdANQgPAGgMAAQgNAAgKgHg");
	this.shape_56.setTransform(-43.1,-67.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2,1,1).p("AAtAiQgaAhgdANQgfANgTgOQgTgPAFghQAFggAZggQAaghAdgNQAfgNATAOQASAOgEAiQgFAggZAgg");
	this.shape_57.setTransform(-62.6,-72.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ag8BPQgTgPAFghQAFggAZggQAaghAdgNQAfgNATAOQASAOgEAiQgFAggZAgQgaAhgdANQgPAGgMAAQgNAAgKgHg");
	this.shape_58.setTransform(-62.6,-72.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2,1,1).p("AAKAAQAAAJgKAAQgIAAgBgJQAAgIAJAAQAIgBACAJg");
	this.shape_59.setTransform(-73.8,-35.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("AgIAAQAAgIAIAAQAIgBABAJQAAAJgJAAQgIAAAAgJg");
	this.shape_60.setTransform(-73.8,-35.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2,1,1).p("AAKAAQAAAIgKACQgHAAgCgKQAAgHAJgCQAJAAABAJg");
	this.shape_61.setTransform(-84.9,-37.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF00FF").s().p("AgIAAQgBgIAJgBQAJAAABAJQAAAJgKAAQgHAAgBgJg");
	this.shape_62.setTransform(-84.9,-37.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2,1,1).p("AADgaQgRAUATAh");
	this.shape_63.setTransform(-29.4,-30.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF00FF").s().p("AADgaIACA1QgTghARgUg");
	this.shape_64.setTransform(-29.4,-30.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2,1,1).p("AnKhWQATAWAmAcQBMA3BfAgQEwBmGBi2");
	this.shape_65.setTransform(-75.3,-27.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF00FF").s().p("AjmAzQhfgghMg3QgmgcgTgWIOVA5Qj4B0jVAAQh3AAhtgkg");
	this.shape_66.setTransform(-75.3,-27.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQABAtAIgBQAKAAgCgsQgBgsgIAAQgKABACArg");
	this.shape_67.setTransform(-40.1,-71.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF00FF").s().p("AgIAAQgCgrAKgBQAIAAABAsQACAsgKAAIgBABQgHgBgBgsg");
	this.shape_68.setTransform(-40.1,-71.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQABAtAIAAQAKgBgBgsQgCgsgIABQgKAAACArg");
	this.shape_69.setTransform(-59.5,-75.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("AgIAAQgCgrAKAAQAIgBACAsQABAsgKABQgIAAgBgtg");
	this.shape_70.setTransform(-59.5,-75.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(2,1,1).p("ABKg9QgNgQggAHQgdAIgfAaQgfAagMAbQgMAeANAQQANAQAggIQAdgHAfgaQAfgaAMgcQAMgdgNgQg");
	this.shape_71.setTransform(-14.4,-25.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AhJA/QgNgQAMgeQAMgbAfgbQAfgZAdgIQAggIANARQANAQgMAdQgMAbgfAbQgfAagdAHQgKACgJAAQgRAAgJgKg");
	this.shape_72.setTransform(-14.4,-25.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgDgCgKQgCgJAIACQAFABADAIg");
	this.shape_73.setTransform(-34,-86.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D9EF7F").s().p("AgJgCQgCgJAIACQAFABADAIIAFALQgRgDgCgKg");
	this.shape_74.setTransform(-34,-86.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgEgCgOQgCgLAKACQAHACAEAKg");
	this.shape_75.setTransform(-33.2,-83.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D9EF7F").s().p("AgMgEQgCgLAKACQAHACAEAKIAGAPQgXgEgCgOg");
	this.shape_76.setTransform(-33.2,-83.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgZgJAAgOQAAgNAKAEQAIADACALg");
	this.shape_77.setTransform(-32.5,-81.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D9EF7F").s().p("AgMgGQAAgNAKAEQAIADACALIAFASQgZgJAAgOg");
	this.shape_78.setTransform(-32.5,-81.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAUQgdgKAAgSQAAgOALAEQAKAEADANg");
	this.shape_79.setTransform(-31.7,-78.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D9EF7F").s().p("AgOgIQAAgOALAEQAKAEADANIAFAVQgdgKAAgSg");
	this.shape_80.setTransform(-31.7,-78.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#A6D514").ss(1,1,1).p("AATASQgggDgEgTQgDgPAMACQALACAGANg");
	this.shape_81.setTransform(-30.5,-75.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D9EF7F").s().p("AgRgEQgDgPAMACQALACAGANIAKAUQgggDgEgTg");
	this.shape_82.setTransform(-30.5,-75.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#A6D514").ss(1,1,1).p("AAVAZQgngLgBgXQgBgTAPAFQAMAEAFARg");
	this.shape_83.setTransform(-29.5,-72.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D9EF7F").s().p("AgTgJQgBgTAPAFQAMAEAFARIAJAbQgngLgBgXg");
	this.shape_84.setTransform(-29.5,-72.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#A6D514").ss(1,1,1).p("AARAcQgkgSAEgYQADgSAMAHQANAIABARg");
	this.shape_85.setTransform(-28.9,-68.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D9EF7F").s().p("AgPgOQADgSAMAHQANAIABARIADAcQgkgSAEgYg");
	this.shape_86.setTransform(-28.9,-68.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAgQgkgZAIgZQAGgTALAKQAOAKgBARg");
	this.shape_87.setTransform(-29.3,-64.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D9EF7F").s().p("AgOgSQAGgTALAKQAOAKgBARIgCAgQgkgZAIgZg");
	this.shape_88.setTransform(-29.3,-64.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D9EF7F").s().p("AgPgTQAGgUANAKQAOAKgBATIgCAiQgmgbAIgag");
	this.shape_89.setTransform(-29.8,-59.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQADgEADgGQAEgKgFgHQgFgIgEAHQgFAHAFAHg");
	this.shape_90.setTransform(-32.8,-86.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D9EF7F").s().p("AgEACQgFgHAFgHQAEgHAFAIQAFAHgEAKIgGAKg");
	this.shape_91.setTransform(-32.8,-86.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQAEgFACgGQAEgKgFgHQgFgJgEAIQgFAHAEAHg");
	this.shape_92.setTransform(-31.6,-84.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAFAHgEAKQgCAGgEAFg");
	this.shape_93.setTransform(-31.6,-84.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUQAEgFADgIQAFgNgGgIQgGgKgFAIQgGAJAFAJg");
	this.shape_94.setTransform(-30.5,-81.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgJQAFgIAGAKQAGAIgFANQgDAIgEAFg");
	this.shape_95.setTransform(-30.5,-81.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQAFgHADgJQAHgQgIgLQgHgMgHALQgHAKAGALg");
	this.shape_96.setTransform(-28.8,-78.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D9EF7F").s().p("AgIACQgGgLAHgKQAHgLAHAMQAIALgHAQQgDAJgFAHg");
	this.shape_97.setTransform(-28.8,-78.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#A6D514").ss(1,1,1).p("AgEAZQAEgGAFgIQAKgPgGgLQgGgOgHAJQgIAJADAMg");
	this.shape_98.setTransform(-27.3,-75.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D9EF7F").s().p("AgJABQgDgMAIgJQAHgJAGAOQAGALgKAPQgFAIgEAGg");
	this.shape_99.setTransform(-27.3,-75.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAGgJQAPgPgFgQQgFgRgKAJQgMAJABAQg");
	this.shape_100.setTransform(-26.3,-72);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAFAQgPAPQgGAJgJAGg");
	this.shape_101.setTransform(-26.3,-72);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAggXgHgXQgFgRgKAJQgMAJABAQg");
	this.shape_102.setTransform(-25.5,-67.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAHAXggAXg");
	this.shape_103.setTransform(-25.5,-67.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A6D514").ss(1,1,1).p("AgSAfQAogUgDgaQgDgUgPAHQgNAIgCAUQgDAXgBAIg");
	this.shape_104.setTransform(-25.3,-63.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D9EF7F").s().p("AgOAAQACgUANgIQAPgHADAUQADAagoAUIAEgfg");
	this.shape_105.setTransform(-25.3,-63.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(2,1,1).p("AA9hOQATAPgFAhQgFAggaAgQgZAhgdANQgfANgTgOQgTgOAFgiQAFggAZghQAaggAdgNQAfgNATAOg");
	this.shape_106.setTransform(-43.1,-67.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Ag8BPQgTgOAFgiQAFggAZghQAaggAdgNQAfgNATAOQATAPgFAhQgFAggaAgQgZAhgdANQgPAGgMAAQgNAAgKgHg");
	this.shape_107.setTransform(-43.1,-67.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(2,1,1).p("AAtAiQgaAhgdANQgfANgTgOQgTgPAFghQAFggAZggQAaghAdgNQAfgNATAOQASAOgEAiQgFAggZAgg");
	this.shape_108.setTransform(-62.6,-72.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("Ag8BPQgTgPAFghQAFggAZggQAaghAdgNQAfgNATAOQASAOgEAiQgFAggZAgQgaAhgdANQgPAGgMAAQgNAAgKgHg");
	this.shape_109.setTransform(-62.6,-72.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(2,1,1).p("AAKAAQAAAJgKAAQgIAAgBgJQAAgIAJAAQAIgBACAJg");
	this.shape_110.setTransform(-73.8,-35.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF00FF").s().p("AgIAAQAAgIAIAAQAIgBABAJQAAAJgJAAQgIAAAAgJg");
	this.shape_111.setTransform(-73.8,-35.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(2,1,1).p("AAKAAQAAAIgKACQgHAAgCgKQAAgHAJgCQAJAAABAJg");
	this.shape_112.setTransform(-84.9,-37.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF00FF").s().p("AgIAAQgBgIAJgBQAJAAABAJQAAAJgKAAQgHAAgBgJg");
	this.shape_113.setTransform(-84.9,-37.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(2,1,1).p("AAAgMQgaAJAUANQALAJAGgQIAEgQ");
	this.shape_114.setTransform(-20.1,19.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF00FF").s().p("AgGAKQgUgNAagJIAPgBIgEAQQgEALgGAAQgCAAgFgEg");
	this.shape_115.setTransform(-20.1,19.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(2,1,1).p("AhJgZQAJAeAXAQQAsAgBHhS");
	this.shape_116.setTransform(63.2,22.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF00FF").s().p("AgpAVQgXgQgJgeICTgEQgzA7glAAQgPAAgMgJg");
	this.shape_117.setTransform(63.2,22.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(2,1,1).p("AgQAkQAQANAWglQAXgigfgNQgagMgOAhQgOAgAYASg");
	this.shape_118.setTransform(-24.5,27.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF00FF").s().p("AgQAkQgYgSAOggQAOghAaAMQAfANgXAiQgQAbgMAAQgFAAgFgDg");
	this.shape_119.setTransform(-24.5,27.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(2,1,1).p("AgYg2Qg0A3AkAlQARARAXAAQATgBARgPQARgOACgTQADgTgSgR");
	this.shape_120.setTransform(-8.8,13.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF00FF").s().p("AgoAmQgkglA0g3IBAAYQASARgDATQgCATgRAOQgRAPgTABIgBAAQgWAAgRgRg");
	this.shape_121.setTransform(-8.8,13.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(2,1,1).p("AAAgnIAMAbQAHAeggAW");
	this.shape_122.setTransform(-90.1,25.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF00FF").s().p("AAAgnIAMAbQAHAeggAWg");
	this.shape_123.setTransform(-90.1,25.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(3,1,1).p("AikhVQAZASAuA3QAqAxAfARQA5AgCAAA");
	this.shape_124.setTransform(-35.1,52.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(3,1,1).p("AGzkKIgyAuQhBA4hQAzQj+Chk1AvIgQgLQgVgNgagFQhUgRhnBBIgVAOQgGAIABAFQADAJAogRQApgRAeACIAVAEIglAdQgnAggKAVQgLAUAVgIQAkgRAYgLIBHgcIgxAlQgxApAAAUQAAAUAmgWQA2gfAAAAQAjgFAZgHQAugMAOgYQI8iuCNhEQBYgsA4gNIAngD");
	this.shape_125.setTransform(-57.7,35.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF00FF").s().p("An7ECQAAgUAxgpIAxglIhHAcIg8AcQgVAIALgUQAKgVAnggIAlgdIgVgEQgegCgpARQgoARgDgJQgBgFAGgIIAVgOQBnhBBUARQAaAFAVANIAQALQE1gvD+ihQBQgzBBg4IAyguICmCNIgnADQg4ANhYAsQiNBEo8CuQgOAYguAMQgZAHgjAFIg2AfQgUALgJAAQgJAAAAgJg");
	this.shape_126.setTransform(-57.7,35.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(3,1,1).p("AlihrQAqAMAaA/QAgBIAVASQA8AyB8AAQAUAAC3gWQB/gQBKAb");
	this.shape_127.setTransform(-4.7,46);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(3,1,1).p("Aj9gTQBUAVBugBQA2gBBlAKQBrAKAzAA");
	this.shape_128.setTransform(7,34.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(2,1,1).p("AADgaQgRAUATAh");
	this.shape_129.setTransform(-29.4,-30.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF00FF").s().p("AADgaIACA1QgTghARgUg");
	this.shape_130.setTransform(-29.4,-30.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(2,1,1).p("AnKhWQATAWAmAcQBMA3BfAgQEwBmGBi2");
	this.shape_131.setTransform(-75.3,-27.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF00FF").s().p("AjmAzQhfgghMg3QgmgcgTgWIOVA5Qj4B0jVAAQh3AAhtgkg");
	this.shape_132.setTransform(-75.3,-27.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(3,1,1).p("AJ6jZQCXBDAyBjQg5gCgxAoQgdAUg7A1QgjAYhTAZQhQAXgjAcQgnAeg5AwQgxAhhDAHQgYACgxAAQgqADgaAQQgYAOgQAdQgVAogIAJQADgnhAg3Qgjgeg+guQgpgng5gdQghgRhKgjQhRgphQg+QhXhHhmhtQhDhIgOglQgMgcgGgRQgLgeAEgQQAmAwBzAdQAZAGAyALQB/AbCsAAQEMAAEUh6QAugTA8AdQBCAoAgALQAnAOA6AlQBBApAeANg");
	this.shape_133.setTransform(-1.3,56);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AhLEpQgjgeg+guQgpgng5gdQghgRhKgjQhRgphQg+QhXhHhmhtQhDhIgOglQgMgcgGgRQgLgeAEgQQAmAwBzAdIBLARQB/AbCsAAQEMAAEUh6QAugTA8AdQBCAoAgALQAnAOA6AlQBBApAeANQCXBDAyBjQg5gCgxAoQgdAUg7A1QgjAYhTAZQhQAXgjAcQgnAeg5AwQgxAhhDAHQgYACgxAAQgqADgaAQQgYAOgQAdQgVAogIAJQADgnhAg3g");
	this.shape_134.setTransform(-1.3,56);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AjBJfQhuAAhdg/QgWgPgRgWIgagnQgPgTgZgSIg2gmQg1gogtgtQgggig6hFQiGiSAlh6QAfhjBdhDIABAAIAAgBIDYidQAFAGACAJIADAPQjNCYgEAAQhWA/gbBYQghBoB7CGQA7BHAfAgQAqArA0AnIA2AlQAcAVASAXIAbAnQANASASAMQAnAaA2ARQA3ARAugCIABAegAK0HBQhWgsg2gkQgxghhEhMQhKhUgigaIgEgSQAHgQAUgaQASgXAFgMQAjhbhahAQhxhQheguQgagMgOgWIAPgCIAAAAQAAAFAFAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABAAIAFgGIAGgBQAIAHAKAFQBbAtB4BTQAxAiATAyQAUAzgWA4QgMAdgiAnQAhAcBKBTQA/BGAsAdQA0AjBVAsICPBKIgPAaIiOhKgAA7kzQAAgZAXhFQAQgsgOgqQgMgpgdgLQgYgKgvAXIghARIgMAIIgBAAIAAABIgTAMIgEgWQgHgkgTgQQgPgMgWgBQgfgBg0AXQgWAJhGA8IhdBRQgMAKgfAXIgCgHQgDgOgHgIIAkgbIBchQQBLg/AZgLQA6gaAlABQAjABAWAUQAUARAKAfIAhgRQA6gaAkAMQANAGALAJQAfBGAJA9QgDASgEALIgJAaQgFgCgGACQgIADgEAMIAAACIgBAIQAAAOALAOIgBAHQABAOADAJIgeAEQgEgOABgOgABYlVIABgHQACgIAEgBIAEABIgIAcQgDgIAAgFgABjoPQAQAZAEAkQgIgegMgfg");
	this.shape_135.setTransform(-39.8,-26.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF00FF").s().p("Ai2I5QguACg4gRQg2gQgngbQgRgMgOgSIgbgmQgSgYgcgUIg1glQg1gogqgrQgfgfg6hHQh8iHAihoQAbhYBVg+QAEAADNiYIAAACQAHgJAMgEIgBgDQAfgWAMgLIBdhQQBHg8AVgJQA1gYAeABQAXABAPANQASAQAIAkIAEAWIATgNIAAAAIAAAAIANgIIAhgRQAugXAZAKQAcALANAoQANArgPArQgXBGgBAZQgBAOAEANQAGAKABAJIACAAQAOAWAaAMQBfAvBwBPQBaBBgjBaQgEANgSAXQgUAZgIAQIgEALIAJAHQAhAbBLBUQBEBMAxAhQA0AiBOApQBYAsAsAYIvnBPg");
	this.shape_136.setTransform(-40.1,-26);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(3,1,1).p("AFfg/IiyApQi/AshKAbIgLAWQgQAbgbAbQgZAZgGACQgEAAgDAGQgNATgPgGQgPgFAgguIAQgmIgoAaQgsAdgNAVQgIAMgHABQgGABABgJQABgbAog2IhMArQgKAGgGgBQgFgBAEgJQAKgYA+gvQA9gvAxgJQAegHAsAGIGPij");
	this.shape_137.setTransform(-109.5,33.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF00FF").s().p("AjUCrQgPgFAgguIAQgmIgoAaQgsAdgNAVQgIAMgHABQgGABABgJQABgbAog2IhMArQgKAGgGgBQgFgBAEgJQAKgYA+gvQA9gvAxgJQAegHAsAGIGPijIAsBsIiyApQi/AshKAbIgLAWQgQAbgbAbQgZAZgGACQgEAAgDAGQgKAOgMAAIgGgBg");
	this.shape_138.setTransform(-109.5,33.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgDgCgKQgCgJAIABQAFACADAHg");
	this.shape_139.setTransform(-81.7,-93);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D9EF7F").s().p("AgJgCQgCgJAIABQAFACADAHIAFAMQgRgDgCgKg");
	this.shape_140.setTransform(-81.7,-93);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgEgCgNQgCgLAJABQAHACAEAKg");
	this.shape_141.setTransform(-80.9,-90.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D9EF7F").s().p("AgMgDQgCgLAJABQAHACAEAKIAHAPQgXgEgCgNg");
	this.shape_142.setTransform(-80.9,-90.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgYgIgBgPQAAgNAKAEQAIADACAMg");
	this.shape_143.setTransform(-80.3,-87.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D9EF7F").s().p("AgMgGQAAgNAKAEQAIADACAMIAFARQgYgIgBgPg");
	this.shape_144.setTransform(-80.3,-87.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAUQgdgKAAgSQAAgOALAEQAKAEADANg");
	this.shape_145.setTransform(-79.4,-85.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D9EF7F").s().p("AgOgIQAAgOALAEQAKAEADANIAFAVQgdgKAAgSg");
	this.shape_146.setTransform(-79.4,-85.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#A6D514").ss(1,1,1).p("AAJgCIAKAUQgggEgEgSQgDgPAMACQALACAGANg");
	this.shape_147.setTransform(-78.2,-82.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D9EF7F").s().p("AgRgEQgDgPAMACQALACAGANIAKAUQgggEgEgSg");
	this.shape_148.setTransform(-78.2,-82.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#A6D514").ss(1,1,1).p("AgFgXQANAEAEARIAJAbQgngKgBgYQgBgTAPAFg");
	this.shape_149.setTransform(-77.3,-79.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D9EF7F").s().p("AgTgJQgBgTAPAFQANAEAEARIAJAbQgngKgBgYg");
	this.shape_150.setTransform(-77.3,-79.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#A6D514").ss(1,1,1).p("AARAcQglgSAEgYQADgSANAHQANAHABASg");
	this.shape_151.setTransform(-76.6,-74.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D9EF7F").s().p("AgQgOQADgSANAHQANAHABASIADAcQglgSAEgYg");
	this.shape_152.setTransform(-76.6,-74.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAgQgjgZAHgZQAGgTAMAKQANAKgBARg");
	this.shape_153.setTransform(-77.1,-70.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D9EF7F").s().p("AgOgSQAGgTAMAKQANAKgBARIgCAgQgjgZAHgZg");
	this.shape_154.setTransform(-77.1,-70.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#A6D514").ss(1,1,1).p("AAEgdQAOAKgBATIgCAhQgmgaAJgaQAGgUAMAKg");
	this.shape_155.setTransform(-77.5,-66.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D9EF7F").s().p("AgOgTQAGgUAMAKQAOAKgBATIgCAhQgmgaAJgag");
	this.shape_156.setTransform(-77.5,-66.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQADgEACgGQAFgKgGgHQgEgIgEAHQgFAHAEAGg");
	this.shape_157.setTransform(-80.5,-93.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D9EF7F").s().p("AgFABQgEgGAFgHQAEgHAEAIQAGAHgFAKQgCAGgDAEg");
	this.shape_158.setTransform(-80.5,-93.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQAEgFACgGQAEgKgFgHQgFgJgEAIQgFAHAFAHg");
	this.shape_159.setTransform(-79.4,-90.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D9EF7F").s().p("AgEACQgFgHAFgHQAEgIAFAJQAFAHgEAKQgCAGgEAFg");
	this.shape_160.setTransform(-79.4,-90.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAVQAEgGADgIQAFgNgGgIQgGgKgGAJQgFAIAFAJg");
	this.shape_161.setTransform(-78.2,-88.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D9EF7F").s().p("AgGACQgFgJAFgIQAGgJAGAKQAGAIgFANQgDAIgEAGg");
	this.shape_162.setTransform(-78.2,-88.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#A6D514").ss(1,1,1).p("AgIADIAIAWQAFgHADgJQAHgQgIgKQgHgMgHAKQgHALAGALg");
	this.shape_163.setTransform(-76.6,-85.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D9EF7F").s().p("AgIADQgGgLAHgLQAHgKAHAMQAIAKgHAQQgDAJgFAHg");
	this.shape_164.setTransform(-76.6,-85.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#A6D514").ss(1,1,1).p("AgEAYQAEgGAFgIQAKgOgGgMQgGgNgHAJQgIAJADAMg");
	this.shape_165.setTransform(-75,-82);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D9EF7F").s().p("AgJABQgDgMAIgJQAHgJAGANQAGAMgKAOQgFAIgEAGg");
	this.shape_166.setTransform(-75,-82);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAGgIQAPgQgFgPQgFgSgKAJQgMAJABAQg");
	this.shape_167.setTransform(-74,-78.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFASQAFAPgPAQQgGAIgJAGg");
	this.shape_168.setTransform(-74,-78.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAFgJQAQgQgFgPQgFgRgKAJQgMAJABAQg");
	this.shape_169.setTransform(-73.2,-74.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAFAPgQAQQgFAJgJAGg");
	this.shape_170.setTransform(-73.2,-74.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#A6D514").ss(1,1,1).p("AgSAfQAogTgDgbQgDgUgPAIQgNAHgCAUQgDAXgBAIg");
	this.shape_171.setTransform(-73,-70);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D9EF7F").s().p("AgOAAQACgUANgHQAPgIADAUQADAbgoATIAEgfg");
	this.shape_172.setTransform(-73,-70);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#A6D514").ss(1,1,1).p("AgYAbQAtgIAEgbQADgVgRADQgPAEgHATg");
	this.shape_173.setTransform(-73.8,-65.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D9EF7F").s().p("AgLgDQAHgTAPgEQARgDgDAVQgEAbgtAIg");
	this.shape_174.setTransform(-73.8,-65.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A6D514").s().p("AgfhJIgBgDQAAgFAFAAQAEAAABAEQAoBPAPBIIgJAIQgNhIgqhTg");
	this.shape_175.setTransform(-78.4,-85.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgDgCgKQgCgJAIABQAFACADAHg");
	this.shape_176.setTransform(-81.7,-93);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D9EF7F").s().p("AgJgCQgCgJAIABQAFACADAHIAFAMQgRgDgCgKg");
	this.shape_177.setTransform(-81.7,-93);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgEgCgNQgCgLAJABQAHACAEAKg");
	this.shape_178.setTransform(-80.9,-90.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D9EF7F").s().p("AgMgDQgCgLAJABQAHACAEAKIAHAPQgXgEgCgNg");
	this.shape_179.setTransform(-80.9,-90.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgYgIgBgPQAAgNAKAEQAIADACAMg");
	this.shape_180.setTransform(-80.3,-87.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D9EF7F").s().p("AgMgGQAAgNAKAEQAIADACAMIAFARQgYgIgBgPg");
	this.shape_181.setTransform(-80.3,-87.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAUQgdgKAAgSQAAgOALAEQAKAEADANg");
	this.shape_182.setTransform(-79.4,-85.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D9EF7F").s().p("AgOgIQAAgOALAEQAKAEADANIAFAVQgdgKAAgSg");
	this.shape_183.setTransform(-79.4,-85.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#A6D514").ss(1,1,1).p("AAJgCIAKAUQgggEgEgSQgDgPAMACQALACAGANg");
	this.shape_184.setTransform(-78.2,-82.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D9EF7F").s().p("AgRgEQgDgPAMACQALACAGANIAKAUQgggEgEgSg");
	this.shape_185.setTransform(-78.2,-82.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#A6D514").ss(1,1,1).p("AgFgXQANAEAEARIAJAbQgngKgBgYQgBgTAPAFg");
	this.shape_186.setTransform(-77.3,-79.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D9EF7F").s().p("AgTgJQgBgTAPAFQANAEAEARIAJAbQgngKgBgYg");
	this.shape_187.setTransform(-77.3,-79.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#A6D514").ss(1,1,1).p("AARAcQglgSAEgYQADgSANAHQANAHABASg");
	this.shape_188.setTransform(-76.6,-74.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D9EF7F").s().p("AgQgOQADgSANAHQANAHABASIADAcQglgSAEgYg");
	this.shape_189.setTransform(-76.6,-74.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAgQgjgZAHgZQAGgTAMAKQANAKgBARg");
	this.shape_190.setTransform(-77.1,-70.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D9EF7F").s().p("AgOgSQAGgTAMAKQANAKgBARIgCAgQgjgZAHgZg");
	this.shape_191.setTransform(-77.1,-70.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#A6D514").ss(1,1,1).p("AAEgdQAOAKgBATIgCAhQgmgaAJgaQAGgUAMAKg");
	this.shape_192.setTransform(-77.5,-66.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D9EF7F").s().p("AgOgTQAGgUAMAKQAOAKgBATIgCAhQgmgaAJgag");
	this.shape_193.setTransform(-77.5,-66.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQADgEACgGQAFgKgGgHQgEgIgEAHQgFAHAEAGg");
	this.shape_194.setTransform(-80.5,-93.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D9EF7F").s().p("AgFABQgEgGAFgHQAEgHAEAIQAGAHgFAKQgCAGgDAEg");
	this.shape_195.setTransform(-80.5,-93.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQAEgFACgGQAEgKgFgHQgFgJgEAIQgFAHAFAHg");
	this.shape_196.setTransform(-79.4,-90.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D9EF7F").s().p("AgEACQgFgHAFgHQAEgIAFAJQAFAHgEAKQgCAGgEAFg");
	this.shape_197.setTransform(-79.4,-90.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAVQAEgGADgIQAFgNgGgIQgGgKgGAJQgFAIAFAJg");
	this.shape_198.setTransform(-78.2,-88.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D9EF7F").s().p("AgGACQgFgJAFgIQAGgJAGAKQAGAIgFANQgDAIgEAGg");
	this.shape_199.setTransform(-78.2,-88.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#A6D514").ss(1,1,1).p("AgIADIAIAWQAFgHADgJQAHgQgIgKQgHgMgHAKQgHALAGALg");
	this.shape_200.setTransform(-76.6,-85.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D9EF7F").s().p("AgIADQgGgLAHgLQAHgKAHAMQAIAKgHAQQgDAJgFAHg");
	this.shape_201.setTransform(-76.6,-85.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#A6D514").ss(1,1,1).p("AgEAYQAEgGAFgIQAKgOgGgMQgGgNgHAJQgIAJADAMg");
	this.shape_202.setTransform(-75,-82);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D9EF7F").s().p("AgJABQgDgMAIgJQAHgJAGANQAGAMgKAOQgFAIgEAGg");
	this.shape_203.setTransform(-75,-82);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAGgIQAPgQgFgPQgFgSgKAJQgMAJABAQg");
	this.shape_204.setTransform(-74,-78.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFASQAFAPgPAQQgGAIgJAGg");
	this.shape_205.setTransform(-74,-78.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAFgJQAQgQgFgPQgFgRgKAJQgMAJABAQg");
	this.shape_206.setTransform(-73.2,-74.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAFAPgQAQQgFAJgJAGg");
	this.shape_207.setTransform(-73.2,-74.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#A6D514").ss(1,1,1).p("AgSAfQAogTgDgbQgDgUgPAIQgNAHgCAUQgDAXgBAIg");
	this.shape_208.setTransform(-73,-70);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D9EF7F").s().p("AgOAAQACgUANgHQAPgIADAUQADAbgoATIAEgfg");
	this.shape_209.setTransform(-73,-70);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#A6D514").ss(1,1,1).p("AgYAbQAtgIAEgbQADgVgRADQgPAEgHATg");
	this.shape_210.setTransform(-73.8,-65.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D9EF7F").s().p("AgLgDQAHgTAPgEQARgDgDAVQgEAbgtAIg");
	this.shape_211.setTransform(-73.8,-65.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(3,1,1).p("AA8lqQA7AAArAZQAoAdAPALQAPAKBQBOQBLBKAPAGQCCAmA2AbQAiARAxACIAqgCIgmAKQgoAPgPAWQgVAlBtAbIhVgCQhLAFAzApIAsArQgcADgzgeQhng7h6ihIg+gjQhKgkhBgLIgDgFQgFgEgLgBQglgBhTAsQiIBGAWgVImXEuQDHAlBSgWIBTgVQAHgRAOgQQAdgfAkAKQApAPANADQASAFAugHQAwgHAtgTIAlgRIhBA2QgUAQAIABQAJABApgNIA2gQIgqAnQg4AqhAARQg/ARhDgLQgjgFgygMIh5A7QiIA6hLgDQhKgEhIgqQgjgVgVgUIGvo9QD5hBBaAAg");
	this.shape_212.setTransform(73.6,51.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF00FF").s().p("An7FrQhLgEhIgqQgjgVgVgUIGvo9QD5hBBaAAQA7AAAqAZIA4AoQAOAKBRBOQBLBKAPAGQCCAmA2AbQAiARAxACIAqgCIgmAKQgoAPgPAWQgVAlBtAbIhWgCQhKAFAzApIArArQgbADgzgeQhng7h6ihIg+gjQhKgkhBgLIgDgFQgFgEgMgBQglgBhSAsQiIBGAWgVImWEuQDFAlBTgWIBTgVQAHgRAOgQQAcgfAmAKQAoAPANADQASAFAugHQAvgHAvgTIAkgRIhBA2QgUAQAIABQAJABApgNIA2gQIgqAnQg4AqhAARQg+ARhEgLQgjgFgzgMIh4A7QiAA3hKAAIgIAAg");
	this.shape_213.setTransform(73.6,51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.1,-96.1,292.4,192.8);


(lib.frog_bend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.frog_eyes("synched",0);
	this.instance.setTransform(-31.7,-80.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("AgDgFIAHgDQgCAJgCAHg");
	this.shape.setTransform(-34.4,-60.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212121").s().p("AiQAdQADgIABgKQBYgWA1gKQBBgNAiACQAYABAKAHQARAKgJATIgTgGQACgEgBgBIgCgBQgEgEgSgBQgfgChBANQgtAHg3AOIgsAMIgCABIgBAAIAAAAg");
	this.shape_1.setTransform(-19.9,-62.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#070707").s().p("AgIAJQAAgJADgJIAOACIgCARg");
	this.shape_2.setTransform(-57.5,-62.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AgDAKQgGgEgBgDIgBgDIAFgIIAEgCIACgBIACAHIABgCIAAAAIAJACQgEAIgGAIg");
	this.shape_3.setTransform(-59.8,-63.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212121").s().p("AgFAIIgBAAQAGgIACgJIAFABQgDAIAAAKg");
	this.shape_4.setTransform(-58.9,-62.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhTBJQgjgZgDgnIAAgHIARABIACgRIgQgCQAJggAfgWQAfgWApgDQAwgEAmAZQAmAZADApQABAIgBAFIgJADIAFAPQgLAegeAUQgeAUgoADIgJABQgvAAghgYgAgFhLQgrADgcAaQgbAZACAdQACAeAfAVQAgAVApgDQAsgEAcgZQAbgagDgcQgCgfgfgUQgbgSgjAAIgLAAg");
	this.shape_5.setTransform(-46.2,-62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEA6QgegUgDgfQgCgdAbgZQAcgZAsgDQApgEAgAVQAeAVADAeQADAcgcAaQgcAagsADIgIABQglAAgcgTg");
	this.shape_6.setTransform(-46.2,-62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag6BBQgigfgHgmQgHgpAYgdQAagbAqADQAnADAiAfQAbAZAKAgQALAegLAcIgIgCIgBAAIgBACIgBgHIgEABIgFACQAIgRgEgWQgFgfgegaQgdgbgfgCQgigDgSAVQgSAVAGAfQAFAgAdAaQAdAaAgADQAhACATgUIAEgFIAAAEQACAEAFADIAHADIgEAEQgXAZgkAAQgrAAgmgig");
	this.shape_7.setTransform(-68.3,-69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBPQgggDgdgaQgdgagFggQgGgfASgVQASgVAiADQAfACAdAbQAeAaAFAfQAEAWgIARIAAABQgEABAAAHIgEAFQgRASgcAAg");
	this.shape_8.setTransform(-68.3,-69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F201D").s().p("AgLAKIAAgBIADgDIAIgLIABgEIAMgBQgFAKgIAJIgLACg");
	this.shape_9.setTransform(-8.7,-64.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQgGIAdgEIAEAJIgFAFIgDADIAAABIgBABIgQACQgEgIgEgJg");
	this.shape_10.setTransform(-10.9,-64.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAAQAAgDgEgFIAPgNQAEAIACAJIADAMIgQANIgEgVg");
	this.shape_11.setTransform(-68,-74.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQABAtAIgBQAKAAgBgsQgCgsgIAAQgKABACArg");
	this.shape_12.setTransform(-19,-81.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF00FF").s().p("AgIAAQgCgrAKgBQAIAAACAsQABAsgKAAIAAABQgIAAgBgtg");
	this.shape_13.setTransform(-19,-81.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQACAtAHAAQALgBgCgsQgCgsgIABQgKAAACArg");
	this.shape_14.setTransform(-38.4,-86.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AgJAAQgCgrALAAQAHgBACAsQADAsgLABQgIAAgCgtg");
	this.shape_15.setTransform(-38.4,-86.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgcBHQAdgHAfgaQAfgbAMgbQANgegOgQQgNgPgfAHQgeAHgfAaQgfAagMAcQgMAeANAPQANAQAggHg");
	this.shape_16.setTransform(6.7,-36);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AhJA+QgOgPANgeQAMgcAfgaQAfgaAdgHQAggHANAPQAOAQgNAeQgMAbggAbQgfAagcAHQgKACgJAAQgRAAgJgLg");
	this.shape_17.setTransform(6.7,-36);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgDgCgKQgBgJAHACQAFABADAIg");
	this.shape_18.setTransform(-12.9,-96.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9EF7F").s().p("AgJgCQgBgJAHACQAFABADAIIAFALQgRgDgCgKg");
	this.shape_19.setTransform(-12.9,-96.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgEgCgOQgCgLAJACQAHACAEAKg");
	this.shape_20.setTransform(-12.1,-94.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9EF7F").s().p("AgMgEQgCgLAJACQAHACAEAKIAHAPQgXgEgCgOg");
	this.shape_21.setTransform(-12.1,-94.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgZgJAAgOQAAgNAKAEQAHADADALg");
	this.shape_22.setTransform(-11.4,-91.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9EF7F").s().p("AgMgGQAAgNAKAEQAHADADALIAFASQgZgJAAgOg");
	this.shape_23.setTransform(-11.4,-91.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAUQgdgKAAgSQAAgOALAEQAJAEAEANQAEAQABAFg");
	this.shape_24.setTransform(-10.6,-89);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9EF7F").s().p("AgPgIQAAgOAMAEQAJAEADANIAGAVQgdgKgBgSg");
	this.shape_25.setTransform(-10.6,-89);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A6D514").ss(1,1,1).p("AATASQgggDgEgTQgDgPAMACQALACAGANg");
	this.shape_26.setTransform(-9.4,-86.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9EF7F").s().p("AgRgEQgDgPAMACQALACAGANIAKAUQgggDgEgTg");
	this.shape_27.setTransform(-9.4,-86.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A6D514").ss(1,1,1).p("AAVAZQgngLgBgXQgBgTAPAFQANAEAEARg");
	this.shape_28.setTransform(-8.5,-83.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9EF7F").s().p("AgTgJQgBgTAPAFQANAEAEARIAJAbQgngLgBgXg");
	this.shape_29.setTransform(-8.5,-83.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A6D514").ss(1,1,1).p("AARAcQgkgSADgYQADgSANAHQANAIABARg");
	this.shape_30.setTransform(-7.8,-78.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9EF7F").s().p("AgQgOQADgSANAHQANAIABARIADAcQgkgSADgYg");
	this.shape_31.setTransform(-7.8,-78.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAgQgjgZAHgZQAGgTAMAKQANAKgBARg");
	this.shape_32.setTransform(-8.3,-74.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9EF7F").s().p("AgOgSQAGgTAMAKQANAKgBARIgCAgQgjgZAHgZg");
	this.shape_33.setTransform(-8.3,-74.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A6D514").s().p("AANAlIgBAAQgngaAIggQAEgMAIgDQAHgEAHAHQAQALgBAWIgCAhQAAAFgFAAgAgEgbQgDABgDAIQgEAQAOAPIALAKIABgXQABgRgMgIQgBgCgDAAIgBAAg");
	this.shape_34.setTransform(-8.7,-70.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D9EF7F").s().p("AAAAPQgOgPAEgQQADgIADgBQADgBACADQAMAJgBAPIgBAZIgLgLg");
	this.shape_35.setTransform(-8.7,-70.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQADgEACgGQAFgKgGgHQgEgIgEAHQgFAHAEAHg");
	this.shape_36.setTransform(-11.7,-97.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgHAEAIQAGAHgFAKQgCAGgDAEg");
	this.shape_37.setTransform(-11.7,-97.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQADgFACgGQAFgLgFgHQgFgIgEAIQgFAHAEAGg");
	this.shape_38.setTransform(-10.5,-94.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9EF7F").s().p("AgFABQgEgGAFgHQAEgIAFAIQAFAHgFALQgCAGgDAFg");
	this.shape_39.setTransform(-10.5,-94.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUQAEgFADgIQAFgNgGgIQgGgKgGAIQgFAJAFAJg");
	this.shape_40.setTransform(-9.4,-92.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D9EF7F").s().p("AgGACQgFgJAFgJQAGgIAGAKQAGAIgFANQgDAIgEAFg");
	this.shape_41.setTransform(-9.4,-92.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQAFgHADgJQAHgQgIgLQgHgLgHAKQgHAKAGALg");
	this.shape_42.setTransform(-7.8,-88.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9EF7F").s().p("AgIACQgGgLAHgKQAHgKAHALQAIALgHAQQgDAJgFAHg");
	this.shape_43.setTransform(-7.8,-88.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A6D514").ss(1,1,1).p("AgEAZQAWgYgJgQQgHgOgGAJQgJAJAEAMg");
	this.shape_44.setTransform(-6.2,-85.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D9EF7F").s().p("AgJABQgEgMAJgJQAGgJAHAOQAJAQgWAYg");
	this.shape_45.setTransform(-6.2,-85.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A6D514").ss(1,1,1).p("AgLAdQAggXgIgXQgFgRgKAJQgMAJABAQg");
	this.shape_46.setTransform(-5.2,-82.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAIAXggAXg");
	this.shape_47.setTransform(-5.2,-82.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAhgXgIgWQgFgSgKAJQgMAJABAQg");
	this.shape_48.setTransform(-4.4,-77.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFASQAIAWghAXg");
	this.shape_49.setTransform(-4.4,-77.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A6D514").ss(1,1,1).p("AgSAfQAogUgDgaQgCgUgQAHQgNAIgCAUQgDAXgBAIg");
	this.shape_50.setTransform(-4.2,-73.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D9EF7F").s().p("AgOAAQACgUANgIQAQgHACAUQADAagoAUIAEgfg");
	this.shape_51.setTransform(-4.2,-73.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A6D514").s().p("AgdAbIAAgCIAAgBIABAAIAFAFIABAAIACABQAFAAAAgFIAAgGQAHgBAGgDQATgJADgOIAAgBQABgIgCgCQgDgDgEACQgMACgHARIAAAAIgHASIABgcQAJgQAOgDQAKgCAGAGQAGAGgCANQgFAcgvAKIgCABQgFAAAAgFg");
	this.shape_52.setTransform(-5,-69.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9EF7F").s().p("AgRATIAAgBIAIgSIAAAAQAGgRAMgCQAFgBACACQADADgBAHIAAABQgDAOgUAJQgFADgHACg");
	this.shape_53.setTransform(-4.8,-69.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A6D514").s().p("AgHCmIABgDIAMgCIgGAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgFAAAAgFgAALCEIABABIAAAAIAAAAIgBADQAAAEAFAAIACAAIABAAIgBAAIgLABgAAZBSQANhlhJiQIAAgCQAAgFAFAAQADAAABADQBMCVgQBpIgHAJQAAgGgCgIg");
	this.shape_54.setTransform(-9.3,-80.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,1,1).p("AAtAiQgaAhgdANQgfANgTgOQgTgPAFghQAFggAZggQAaghAdgNQAfgNATAOQATAPgFAhQgFAggZAgg");
	this.shape_55.setTransform(-22.1,-78.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag8BPQgTgPAFghQAFggAZggQAaghAdgNQAfgNATAOQATAPgFAhQgFAggZAgQgaAhgdANQgPAGgMAAQgNAAgKgHg");
	this.shape_56.setTransform(-22.1,-78.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2,1,1).p("AA9hOQATAPgFAhQgFAggZAgQgaAhgdANQgfANgTgOQgSgOAEgiQAFggAZggQAaghAdgNQAggNASAOg");
	this.shape_57.setTransform(-41.5,-82.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ag8BPQgSgOAEgiQAFggAZggQAaghAdgNQAggNASAOQATAPgFAhQgFAggZAgQgaAhgdANQgPAGgMAAQgNAAgKgHg");
	this.shape_58.setTransform(-41.5,-82.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2,1,1).p("AAJAAQAAAJgJAAQgIAAAAgJQgBgIAJAAQAJgBAAAJg");
	this.shape_59.setTransform(-52.7,-45.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("AgIAAQgBgIAJAAQAJgBAAAJQAAAJgJAAQgIAAAAgJg");
	this.shape_60.setTransform(-52.7,-45.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2,1,1).p("AAJAAQAAAJgJAAQgIAAAAgJQgBgIAJAAQAJgBAAAJg");
	this.shape_61.setTransform(-63.8,-47.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF00FF").s().p("AgIAAQgBgIAJAAQAJgBAAAJQAAAJgJAAQgIAAAAgJg");
	this.shape_62.setTransform(-63.8,-47.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2,1,1).p("AADgaIgFAOQgFARALAW");
	this.shape_63.setTransform(-8.3,-40.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF00FF").s().p("AgCgMIAFgOIABA1QgLgWAFgRg");
	this.shape_64.setTransform(-8.3,-40.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2,1,1).p("AnKhWQATAWAmAcQBMA3BfAgQEwBmGBi2");
	this.shape_65.setTransform(-54.3,-38.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF00FF").s().p("AjmAzQhfgghMg3QgmgcgTgWIOVA5Qj4B0jVAAQh3AAhtgkg");
	this.shape_66.setTransform(-54.3,-38.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQABAtAIgBQAKAAgBgsQgCgsgIAAQgKABACArg");
	this.shape_67.setTransform(-19,-81.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF00FF").s().p("AgIAAQgCgrAKgBQAIAAACAsQABAsgKAAIAAABQgIAAgBgtg");
	this.shape_68.setTransform(-19,-81.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2,1,1).p("AgIAAQACAtAHAAQALgBgCgsQgCgsgIABQgKAAACArg");
	this.shape_69.setTransform(-38.4,-86.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("AgJAAQgCgrALAAQAHgBACAsQADAsgLABQgIAAgCgtg");
	this.shape_70.setTransform(-38.4,-86.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(2,1,1).p("AgcBHQAdgHAfgaQAfgbAMgbQANgegOgQQgNgPgfAHQgeAHgfAaQgfAagMAcQgMAeANAPQANAQAggHg");
	this.shape_71.setTransform(6.7,-36);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AhJA+QgOgPANgeQAMgcAfgaQAfgaAdgHQAggHANAPQAOAQgNAeQgMAbggAbQgfAagcAHQgKACgJAAQgRAAgJgLg");
	this.shape_72.setTransform(6.7,-36);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgDgCgKQgBgJAHACQAFABADAIg");
	this.shape_73.setTransform(-12.9,-96.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D9EF7F").s().p("AgJgCQgBgJAHACQAFABADAIIAFALQgRgDgCgKg");
	this.shape_74.setTransform(-12.9,-96.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgEgCgOQgCgLAJACQAHACAEAKg");
	this.shape_75.setTransform(-12.1,-94.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D9EF7F").s().p("AgMgEQgCgLAJACQAHACAEAKIAHAPQgXgEgCgOg");
	this.shape_76.setTransform(-12.1,-94.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgZgJAAgOQAAgNAKAEQAHADADALg");
	this.shape_77.setTransform(-11.4,-91.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D9EF7F").s().p("AgMgGQAAgNAKAEQAHADADALIAFASQgZgJAAgOg");
	this.shape_78.setTransform(-11.4,-91.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAUQgdgKAAgSQAAgOALAEQAJAEAEANQAEAQABAFg");
	this.shape_79.setTransform(-10.6,-89);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D9EF7F").s().p("AgPgIQAAgOAMAEQAJAEADANIAGAVQgdgKgBgSg");
	this.shape_80.setTransform(-10.6,-89);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#A6D514").ss(1,1,1).p("AATASQgggDgEgTQgDgPAMACQALACAGANg");
	this.shape_81.setTransform(-9.4,-86.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D9EF7F").s().p("AgRgEQgDgPAMACQALACAGANIAKAUQgggDgEgTg");
	this.shape_82.setTransform(-9.4,-86.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#A6D514").ss(1,1,1).p("AAVAZQgngLgBgXQgBgTAPAFQANAEAEARg");
	this.shape_83.setTransform(-8.5,-83.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D9EF7F").s().p("AgTgJQgBgTAPAFQANAEAEARIAJAbQgngLgBgXg");
	this.shape_84.setTransform(-8.5,-83.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#A6D514").ss(1,1,1).p("AARAcQgkgSADgYQADgSANAHQANAIABARg");
	this.shape_85.setTransform(-7.8,-78.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D9EF7F").s().p("AgQgOQADgSANAHQANAIABARIADAcQgkgSADgYg");
	this.shape_86.setTransform(-7.8,-78.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAgQgjgZAHgZQAGgTAMAKQANAKgBARg");
	this.shape_87.setTransform(-8.3,-74.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D9EF7F").s().p("AgOgSQAGgTAMAKQANAKgBARIgCAgQgjgZAHgZg");
	this.shape_88.setTransform(-8.3,-74.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQADgEACgGQAFgKgGgHQgEgIgEAHQgFAHAEAHg");
	this.shape_89.setTransform(-11.7,-97.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgHAEAIQAGAHgFAKQgCAGgDAEg");
	this.shape_90.setTransform(-11.7,-97.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQADgFACgGQAFgLgFgHQgFgIgEAIQgFAHAEAGg");
	this.shape_91.setTransform(-10.5,-94.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D9EF7F").s().p("AgFABQgEgGAFgHQAEgIAFAIQAFAHgFALQgCAGgDAFg");
	this.shape_92.setTransform(-10.5,-94.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUQAEgFADgIQAFgNgGgIQgGgKgGAIQgFAJAFAJg");
	this.shape_93.setTransform(-9.4,-92.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D9EF7F").s().p("AgGACQgFgJAFgJQAGgIAGAKQAGAIgFANQgDAIgEAFg");
	this.shape_94.setTransform(-9.4,-92.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQAFgHADgJQAHgQgIgLQgHgLgHAKQgHAKAGALg");
	this.shape_95.setTransform(-7.8,-88.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D9EF7F").s().p("AgIACQgGgLAHgKQAHgKAHALQAIALgHAQQgDAJgFAHg");
	this.shape_96.setTransform(-7.8,-88.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#A6D514").ss(1,1,1).p("AgEAZQAWgYgJgQQgHgOgGAJQgJAJAEAMg");
	this.shape_97.setTransform(-6.2,-85.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D9EF7F").s().p("AgJABQgEgMAJgJQAGgJAHAOQAJAQgWAYg");
	this.shape_98.setTransform(-6.2,-85.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#A6D514").ss(1,1,1).p("AgLAdQAggXgIgXQgFgRgKAJQgMAJABAQg");
	this.shape_99.setTransform(-5.2,-82.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAIAXggAXg");
	this.shape_100.setTransform(-5.2,-82.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAhgXgIgWQgFgSgKAJQgMAJABAQg");
	this.shape_101.setTransform(-4.4,-77.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFASQAIAWghAXg");
	this.shape_102.setTransform(-4.4,-77.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#A6D514").ss(1,1,1).p("AgSAfQAogUgDgaQgCgUgQAHQgNAIgCAUQgDAXgBAIg");
	this.shape_103.setTransform(-4.2,-73.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D9EF7F").s().p("AgOAAQACgUANgIQAQgHACAUQADAagoAUIAEgfg");
	this.shape_104.setTransform(-4.2,-73.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(2,1,1).p("AAtAiQgaAhgdANQgfANgTgOQgTgPAFghQAFggAZggQAaghAdgNQAfgNATAOQATAPgFAhQgFAggZAgg");
	this.shape_105.setTransform(-22.1,-78.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("Ag8BPQgTgPAFghQAFggAZggQAaghAdgNQAfgNATAOQATAPgFAhQgFAggZAgQgaAhgdANQgPAGgMAAQgNAAgKgHg");
	this.shape_106.setTransform(-22.1,-78.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(2,1,1).p("AA9hOQATAPgFAhQgFAggZAgQgaAhgdANQgfANgTgOQgSgOAEgiQAFggAZggQAaghAdgNQAggNASAOg");
	this.shape_107.setTransform(-41.5,-82.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("Ag8BPQgSgOAEgiQAFggAZggQAaghAdgNQAggNASAOQATAPgFAhQgFAggZAgQgaAhgdANQgPAGgMAAQgNAAgKgHg");
	this.shape_108.setTransform(-41.5,-82.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(2,1,1).p("AAJAAQAAAJgJAAQgIAAAAgJQgBgIAJAAQAJgBAAAJg");
	this.shape_109.setTransform(-52.7,-45.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF00FF").s().p("AgIAAQgBgIAJAAQAJgBAAAJQAAAJgJAAQgIAAAAgJg");
	this.shape_110.setTransform(-52.7,-45.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(2,1,1).p("AAJAAQAAAJgJAAQgIAAAAgJQgBgIAJAAQAJgBAAAJg");
	this.shape_111.setTransform(-63.8,-47.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF00FF").s().p("AgIAAQgBgIAJAAQAJgBAAAJQAAAJgJAAQgIAAAAgJg");
	this.shape_112.setTransform(-63.8,-47.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1).p("AAAgMIgKAGQgJAGANAKQASAPADgm");
	this.shape_113.setTransform(12.4,11.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF00FF").s().p("AgGAKQgNgKAJgGIAKgGIAPgBQgCAbgMAAQgCAAgFgEg");
	this.shape_114.setTransform(12.4,11.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1,1,1).p("AhJgZIAHASQAKATAPAJQAsAgBHhS");
	this.shape_115.setTransform(79.9,15);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF00FF").s().p("AgpAVQgPgJgKgTIgHgSICTgEQgzA7glAAQgPAAgMgJg");
	this.shape_116.setTransform(79.9,15);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("AAZAvQALgDADgTQACgRgGgSQgRgzgkATQgiASAWAnQAVApAigJg");
	this.shape_117.setTransform(22.3,21.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF00FF").s().p("AgeAPQgWgnAigSQAkgTARAzQAGASgCARQgDATgLADQgGABgGAAQgaAAgRghg");
	this.shape_118.setTransform(22.3,21.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("AgYg3QgzA4AjAkQAkAlAogjQARgPACgSQADgTgSgR");
	this.shape_119.setTransform(18.7,1.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF00FF").s().p("AgoAlQgjgkAzg4IBAAZQASARgDATQgCASgRAPQgVARgRAAQgTAAgTgTg");
	this.shape_120.setTransform(18.7,1.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(3,1,1).p("AC6lbIATCfQAYCsAdA9QAdA/hLgBQgpAAhZgQQhDgEgTAVIgJAWQgIAfAAAvQAAAmAKA3QACAcgqgpIgdg/IgEApQgEAtAIATQAFALgDAFQgDAFgKgHQgagUgmhSIgiBgQgEALgIgEQgHgFgFgQQgMgrATg4QAFgPAEgJIgPACQgVAIgKASQgGALgIACQgIABAAgJQgCgbA5g5QA3g3AfgSIAwgPQBagzBpgoQAJAAADgIQAIgRgYgqQhHiKgZghAjFDJQAJgaAAAGQgBAEgEAPg");
	this.shape_121.setTransform(7.1,35.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF00FF").s().p("AhbFYQgagUgmhSIgiBgQgEALgIgEQgHgFgFgQQgMgrATg4IAJgYIAEgBIAFgTQAAgGgJAaIgPACQgVAIgKASQgGALgIACQgIABAAgJQgCgbA5g5QA3g3AfgSIAwgPQBagzBpgoQAJAAADgIQAIgRgYgqQhHiKgZghICnhQIATCfQAYCsAdA9QAdA/hLgBQgpAAhZgQQhDgEgTAVIgJAWQgIAfAAAvQAAAmAKA3QACAcgqgpIgdg/IgEApQgEAtAIATQAFALgDAFQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgEAAgGgEg");
	this.shape_122.setTransform(7.1,35.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1,1,1).p("Agkg2QAGABAJACQARAEAMAJQAqAcgRBB");
	this.shape_123.setTransform(-68.3,31.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF00FF").s().p("Agkg2IAPADQARAEAMAJQAqAcgRBBg");
	this.shape_124.setTransform(-68.3,31.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1,1,1).p("AAAhMIAJAPQALASAEATQAMA7g9Aq");
	this.shape_125.setTransform(-77.5,16.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF00FF").s().p("AAAhLIAJAOQALASAEAUQAMA5g9Aqg");
	this.shape_126.setTransform(-77.5,16.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(3,1,1).p("AhSh9QBEAbAZBaQAQA3AHAPQARAoAgAY");
	this.shape_127.setTransform(-27.3,48.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(3,1,1).p("AiPizQBNACAvAwQAiAmAcBOQAIAUAbBXQAeBNAkAJ");
	this.shape_128.setTransform(-19.6,42.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(3,1,1).p("AjViBQA5gDA5ApQAjAZBABCQA+BCAkAZQA6ApA6gC");
	this.shape_129.setTransform(-2.2,35);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(3,1,1).p("Ah1gKQBqAeCAgM");
	this.shape_130.setTransform(10.2,25.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(2,1,1).p("AADgaIgFAOQgFARALAW");
	this.shape_131.setTransform(-8.3,-40.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF00FF").s().p("AgCgMIAFgOIABA1QgLgWAFgRg");
	this.shape_132.setTransform(-8.3,-40.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(2,1,1).p("AnKhWQATAWAmAcQBMA3BfAgQEwBmGBi2");
	this.shape_133.setTransform(-54.3,-38.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF00FF").s().p("AjmAzQhfgghMg3QgmgcgTgWIOVA5Qj4B0jVAAQh3AAhtgkg");
	this.shape_134.setTransform(-54.3,-38.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(3,1,1).p("Anyj4IA4AKQBGANCaAOQCZASBKAFQCCAJBfgTQBPgQAtg8QAqg6gChRQAjAgBlBLQBVBJAGBBQADAjgWA3QgdBKgDAKQgYBnAdBTQANAlAVAgQAfAvAagEQhGAiggAKQg0AQg6gFQgIAAhogSQhEgLgvAHQgmAGg+AaQhHAfgbAHQg4APhEgRQgogKhQgiQhTgigVgGQhHgSgaAkQAVgfAGhCQAFg/gLgnQgPg0g6g6QhFg7gcgfQhEhJgNgkQgnhrASgvQAnA0B+AXg");
	this.shape_135.setTransform(-1.2,36);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AhbGVQgogKhQgiQhTgigVgGQhHgSgaAkQAVgfAGhCQAFg/gLgnQgPg0g6g6QhFg7gcgfQhEhJgNgkQgnhrASgvQAnA0B+AXIA4AKQBGANCaAOQCZASBKAFQCCAJBfgTQBPgQAtg8QAqg6gChRQAjAgBlBLQBVBJAGBBQADAjgWA3QgdBKgDAKQgYBnAdBTQANAlAVAgQAfAvAagEQhGAiggAKQg0AQg6gFIhwgSQhEgLgvAHQgmAGg+AaQhHAfgbAHQgbAHgcAAQghAAgkgJg");
	this.shape_136.setTransform(-1.2,36);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(1,1,1).p("AANgyIgYAIQgbANgCAWQgDAaAXAVQAWAWAXgUQAVgSgFgbQgEgXgMgM");
	this.shape_137.setTransform(-44.7,45.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF00FF").s().p("AgUAoQgXgVADgaQACgWAbgNIAYgIIAMAMQAMAMAEAXQAFAbgVASQgLAJgLAAQgKAAgNgLg");
	this.shape_138.setTransform(-44.7,45.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("ALJHNQhXg7glggQhahLgWgQIhAgwQgngcgXgJIgIgUQAIgQAWgbQATgYAEgLQAjhchag/QgUgPhAgoQhQgygrgVQgcgNgOgYIASgCIgBADQAAAFAFAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAGgIIADgBQAGAGAOAIQBOAmCFBaQAyAiASAyQAUAzgWA4IguBCQApAVBLA9QAdAUBVBJQAiAeBZA7QBMA6ATA+IgdAJQgOgzhGg2gAnYHWQgqgXgRgNQg2gogsgtQghgig6hFQiGiTAmh5QAehiBdhEIABAAIAAgBIDTiZQADAFAAAFIAEAWIjJCSQhVA9gcBaQghBoB8CGQA6BHAfAgQArArA0AnQANAKAqAXQAoAVARAPIgTAXQgNgMgngUgABSkKQABgZAXhFQAOgsgNgqQgMgpgdgKQgXgLgwAXQgWALgLAGIgJAGIgDACIAAAAIgBABIgSAMIgFgWQgHgkgSgQQgQgMgWgBQgggBgzAXQgUAJhIA8IhdBRIgyAmIgDgNQgDgKgEgHIApgfIBchQQBLg/AZgLQA6gaAlABQAiABAXAUQAUAQAKAgIAhgRQA5gaAlAMQANAGALAJQAfBFAJA+QgCAOgFAPIgJAaQgFgCgGACQgIADgEANIgBAJQAAAOALAOIAAAHQAAANADAIIgfADQgDgNABgMgAB6nmQAQAZAEAlQgIgfgMgfg");
	this.shape_139.setTransform(-21.1,-41.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF00FF").s().p("AmaHeIAKgMQgSgOgngVQgqgXgOgKQg0gngrgsQgfgfg6hHQh8iGAihpQAchaBVg8IDJiTIAAACIAGgMQANgUAXgCIAbgUIBchQQBJg9ATgIQA0gXAfAAQAXABAPANQASAPAIAlIAEAWIATgNIAAAAIABAAIACgCIAKgGQAKgHAXgKQAvgXAYAKQAdALAMAoQANAqgPAsQgXBGgBAZQAAAKACALQAJANADAPQAOAUAZALQAqAVBQAyQBAApAUAOQBbBBgjBaQgEALgUAZQgWAbgIAPIgHAPIAQAGQAWAIAnAdIBAAwQAXAPBZBMQAlAeBUA6QBGA2AQAwg");
	this.shape_140.setTransform(-21.1,-40);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(3,1,1).p("AH5mPQAbgOAwgNQBggZBqAFQB5AGAbA+QAZA7hFBCQgxAvi7B8Qi/B9gNAMQg5A1gfArQgvBFAwANQCxAuB7gPIhGAUQhBAZAYAeQAoAvBDAIIhkAHQhWAPBAAlIA7AvQhPAAjNhSQgggNhKgdQhBgcgigbQhfhLBehsQAHgHAmgfQAfgYAIgTQgrAFhnAHQhbAJgyAcQgWAMgbATQgWAMgkgCQhGgEgjgYQAIAGhFA/Qg8A3gUANQg0AjhpBaQhcBOgGACQgFABAPgtQATg3gOgbQgOgehFAuQgjAWgfAdQAdgjAUgjQAphIgvgIQg4gJgrAHQAxgMAegQQBKgoiYgYQCpgEBDgcQAhgMANgGQAXgLAIgOQASghg8hXQgwhHiBhpQhzhcgHgcQgMgvADgZQAFgmAlgQQCUhBD5ApAuDD6QgOACgNAE");
	this.shape_141.setTransform(10,55.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF00FF").s().p("AE0GiIhqgqQhBgcgigbQhfhLBehsQAHgHAmgfQAfgYAIgTQgrAFhnAHQhbAJgyAcQgWAMgbATQgWAMgkgCQhGgEgjgYQAIAGhFA/Qg8A3gUANQg0AjhpBaQhcBOgGACQgFABAPgtQATg3gOgbQgOgehFAuQgjAWgfAdQAdgjAUgjQAphIgvgIQg4gJgrAHQAxgMAegQQBKgoiYgYQCpgEBDgcIAugSQAXgLAIgOQASghg8hXQgwhHiBhpQhzhcgHgcQgMgvADgZQAFgmAlgQQCUhBD5ApIPpBUQAbgOAwgNQBggZBqAFQB5AGAbA+QAZA7hFBCQgxAvi7B8Qi/B9gNAMQg5A1gfArQgvBFAwANQCxAuB7gPIhGAUQhBAZAYAeQAoAvBDAIIhkAHQhWAPBAAlIA7AvQhPAAjNhSg");
	this.shape_142.setTransform(10,55.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(3,1,1).p("AAAh4IgzAxQgxA8AIAwQAIA4AGAOQAEAKALAEQAFABAGglQAGguARgTQASgUALgDIAKAAQgKBaATAEQANADANgdQAOgkAGgNIAdhB");
	this.shape_143.setTransform(-69.6,44.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF00FF").s().p("Ag/B5QgLgEgEgKQgGgOgIg4QgIgwAxg8IAzgxIBeBHIgdBBIgUAxQgNAdgNgDQgTgEAKhaIgKAAQgLADgSAUQgRATgGAuQgFAkgFAAIgBAAg");
	this.shape_144.setTransform(-69.6,44.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgDgCgKQgBgJAHABQAFACADAHg");
	this.shape_145.setTransform(-60.7,-103.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D9EF7F").s().p("AgJgCQgBgJAHABQAFACADAHIAFAMQgRgDgCgKg");
	this.shape_146.setTransform(-60.7,-103.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgEgCgNQgCgLAJABQAHACAEAKg");
	this.shape_147.setTransform(-59.8,-100.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D9EF7F").s().p("AgMgDQgCgLAJABQAHACAEAKIAHAPQgXgEgCgNg");
	this.shape_148.setTransform(-59.8,-100.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgZgIAAgPQAAgNAKAEQAHADADAMg");
	this.shape_149.setTransform(-59.2,-98.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D9EF7F").s().p("AgMgGQAAgNAKAEQAHADADAMIAFARQgZgIAAgPg");
	this.shape_150.setTransform(-59.2,-98.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAUQgegKgBgSQAAgOAMAEQAKAEADANg");
	this.shape_151.setTransform(-58.3,-95.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D9EF7F").s().p("AgOgIQAAgOALAEQAKAEADANIAFAVQgdgKAAgSg");
	this.shape_152.setTransform(-58.3,-95.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#A6D514").ss(1,1,1).p("AATASQgggEgEgSQgDgPAMACQAKACAGANg");
	this.shape_153.setTransform(-57.1,-93);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D9EF7F").s().p("AgRgEQgDgPAMACQAKACAGANIALAUQgggEgEgSg");
	this.shape_154.setTransform(-57.1,-93);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#A6D514").ss(1,1,1).p("AAVAZQgngKgBgYQgBgTAPAFQANAEAEARg");
	this.shape_155.setTransform(-56.2,-90);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D9EF7F").s().p("AgTgJQgBgTAPAFQANAEAEARIAJAbQgngKgBgYg");
	this.shape_156.setTransform(-56.2,-90);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#A6D514").ss(1,1,1).p("AARAcQgkgSAEgYQACgSANAHQANAHABASg");
	this.shape_157.setTransform(-55.6,-85.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D9EF7F").s().p("AgPgOQACgSANAHQANAHABASIADAcQgkgSAEgYg");
	this.shape_158.setTransform(-55.6,-85.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAgQgjgZAIgZQAFgTAMAKQANAKgBARg");
	this.shape_159.setTransform(-56,-81.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D9EF7F").s().p("AgNgSQAFgTAMAKQANAKgBARIgCAgQgjgZAIgZg");
	this.shape_160.setTransform(-56,-81.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAhQglgaAIgaQAGgUAMAKQAOAKgBATg");
	this.shape_161.setTransform(-56.5,-76.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D9EF7F").s().p("AgOgTQAGgUAMAKQAOAKgBATIgCAhQglgaAIgag");
	this.shape_162.setTransform(-56.5,-76.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQADgEACgGQAFgKgGgHQgEgIgEAHQgFAHAEAGg");
	this.shape_163.setTransform(-59.5,-103.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D9EF7F").s().p("AgFABQgEgGAFgHQAEgHAEAIQAGAHgFAKQgCAGgDAEg");
	this.shape_164.setTransform(-59.5,-103.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQADgFACgGQAFgKgFgHQgFgJgEAIQgFAHAEAHg");
	this.shape_165.setTransform(-58.3,-101.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAFAHgFAKQgCAGgDAFg");
	this.shape_166.setTransform(-58.3,-101.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAVQAEgGADgHQAFgNgGgJQgGgKgFAJQgGAIAFAJg");
	this.shape_167.setTransform(-57.1,-98.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgIQAFgJAGAKQAGAJgFANQgDAHgEAGg");
	this.shape_168.setTransform(-57.1,-98.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQAFgHADgJQAHgQgIgKQgHgMgHAKQgHALAHALg");
	this.shape_169.setTransform(-55.5,-95.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#D9EF7F").s().p("AgHADQgHgLAHgLQAHgKAHAMQAIAKgHAQQgDAJgFAHg");
	this.shape_170.setTransform(-55.5,-95.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#A6D514").ss(1,1,1).p("AgEAYQAEgGAFgIQAKgOgGgMQgHgNgGAJQgJAJAEAMg");
	this.shape_171.setTransform(-53.9,-92.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D9EF7F").s().p("AgJABQgEgMAJgJQAGgJAHANQAGAMgKAOQgFAIgEAGg");
	this.shape_172.setTransform(-53.9,-92.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAFgJQAQgQgFgPQgFgRgKAJQgMAJABAQg");
	this.shape_173.setTransform(-52.9,-89.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAFAPgQAQQgFAJgJAGg");
	this.shape_174.setTransform(-52.9,-89.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAGgJQAPgQgFgPQgFgRgKAJQgMAJABAQg");
	this.shape_175.setTransform(-52.2,-84.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAFAPgPAQQgGAJgJAGg");
	this.shape_176.setTransform(-52.2,-84.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#A6D514").ss(1,1,1).p("AgSAfQApgUgEgaQgCgVgQAIQgNAIgCATg");
	this.shape_177.setTransform(-52,-80.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D9EF7F").s().p("AgOgBQACgTANgIQAQgIACAVQAEAagpAUg");
	this.shape_178.setTransform(-52,-80.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#A6D514").ss(1,1,1).p("AgYAbQAtgIAEgbQADgVgRAEQgPADgHATg");
	this.shape_179.setTransform(-52.8,-76);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D9EF7F").s().p("AgLgDQAHgTAPgDQARgEgDAVQgEAbgtAIg");
	this.shape_180.setTransform(-52.8,-76);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#A6D514").ss(1,1,1).p("AgCCmQAWgXAJg1QAQhphLiW");
	this.shape_181.setTransform(-57,-86.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgRgDgCgKQgBgJAHABQAFACADAHg");
	this.shape_182.setTransform(-60.7,-103.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D9EF7F").s().p("AgJgCQgBgJAHABQAFACADAHIAFAMQgRgDgCgKg");
	this.shape_183.setTransform(-60.7,-103.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgXgEgCgNQgCgLAJABQAHACAEAKg");
	this.shape_184.setTransform(-59.8,-100.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D9EF7F").s().p("AgMgDQgCgLAJABQAHACAEAKIAHAPQgXgEgCgNg");
	this.shape_185.setTransform(-59.8,-100.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#A6D514").ss(1,1,1).p("AANARQgZgIAAgPQAAgNAKAEQAHADADAMg");
	this.shape_186.setTransform(-59.2,-98.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D9EF7F").s().p("AgMgGQAAgNAKAEQAHADADAMIAFARQgZgIAAgPg");
	this.shape_187.setTransform(-59.2,-98.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAUQgegKgBgSQAAgOAMAEQAKAEADANg");
	this.shape_188.setTransform(-58.3,-95.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D9EF7F").s().p("AgOgIQAAgOALAEQAKAEADANIAFAVQgdgKAAgSg");
	this.shape_189.setTransform(-58.3,-95.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#A6D514").ss(1,1,1).p("AATASQgggEgEgSQgDgPAMACQAKACAGANg");
	this.shape_190.setTransform(-57.1,-93);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D9EF7F").s().p("AgRgEQgDgPAMACQAKACAGANIALAUQgggEgEgSg");
	this.shape_191.setTransform(-57.1,-93);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#A6D514").ss(1,1,1).p("AAVAZQgngKgBgYQgBgTAPAFQANAEAEARg");
	this.shape_192.setTransform(-56.2,-90);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D9EF7F").s().p("AgTgJQgBgTAPAFQANAEAEARIAJAbQgngKgBgYg");
	this.shape_193.setTransform(-56.2,-90);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#A6D514").ss(1,1,1).p("AARAcQgkgSAEgYQACgSANAHQANAHABASg");
	this.shape_194.setTransform(-55.6,-85.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D9EF7F").s().p("AgPgOQACgSANAHQANAHABASIADAcQgkgSAEgYg");
	this.shape_195.setTransform(-55.6,-85.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAgQgjgZAIgZQAFgTAMAKQANAKgBARg");
	this.shape_196.setTransform(-56,-81.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D9EF7F").s().p("AgNgSQAFgTAMAKQANAKgBARIgCAgQgjgZAIgZg");
	this.shape_197.setTransform(-56,-81.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAhQglgaAIgaQAGgUAMAKQAOAKgBATg");
	this.shape_198.setTransform(-56.5,-76.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D9EF7F").s().p("AgOgTQAGgUAMAKQAOAKgBATIgCAhQglgaAIgag");
	this.shape_199.setTransform(-56.5,-76.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQQADgEACgGQAFgKgGgHQgEgIgEAHQgFAHAEAGg");
	this.shape_200.setTransform(-59.5,-103.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D9EF7F").s().p("AgFABQgEgGAFgHQAEgHAEAIQAGAHgFAKQgCAGgDAEg");
	this.shape_201.setTransform(-59.5,-103.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQADgFACgGQAFgKgFgHQgFgJgEAIQgFAHAEAHg");
	this.shape_202.setTransform(-58.3,-101.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAFAHgFAKQgCAGgDAFg");
	this.shape_203.setTransform(-58.3,-101.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAVQAEgGADgHQAFgNgGgJQgGgKgFAJQgGAIAFAJg");
	this.shape_204.setTransform(-57.1,-98.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgIQAFgJAGAKQAGAJgFANQgDAHgEAGg");
	this.shape_205.setTransform(-57.1,-98.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQAFgHADgJQAHgQgIgKQgHgMgHAKQgHALAHALg");
	this.shape_206.setTransform(-55.5,-95.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D9EF7F").s().p("AgHADQgHgLAHgLQAHgKAHAMQAIAKgHAQQgDAJgFAHg");
	this.shape_207.setTransform(-55.5,-95.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#A6D514").ss(1,1,1).p("AgEAYQAEgGAFgIQAKgOgGgMQgHgNgGAJQgJAJAEAMg");
	this.shape_208.setTransform(-53.9,-92.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D9EF7F").s().p("AgJABQgEgMAJgJQAGgJAHANQAGAMgKAOQgFAIgEAGg");
	this.shape_209.setTransform(-53.9,-92.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAFgJQAQgQgFgPQgFgRgKAJQgMAJABAQg");
	this.shape_210.setTransform(-52.9,-89.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAFAPgQAQQgFAJgJAGg");
	this.shape_211.setTransform(-52.9,-89.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#A6D514").ss(1,1,1).p("AgMAdQAJgGAGgJQAPgQgFgPQgFgRgKAJQgMAJABAQg");
	this.shape_212.setTransform(-52.2,-84.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQAKgJAFARQAFAPgPAQQgGAJgJAGg");
	this.shape_213.setTransform(-52.2,-84.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#A6D514").ss(1,1,1).p("AgSAfQApgUgEgaQgCgVgQAIQgNAIgCATg");
	this.shape_214.setTransform(-52,-80.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D9EF7F").s().p("AgOgBQACgTANgIQAQgIACAVQAEAagpAUg");
	this.shape_215.setTransform(-52,-80.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#A6D514").ss(1,1,1).p("AgYAbQAtgIAEgbQADgVgRAEQgPADgHATg");
	this.shape_216.setTransform(-52.8,-76);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D9EF7F").s().p("AgLgDQAHgTAPgDQARgEgDAVQgEAbgtAIg");
	this.shape_217.setTransform(-52.8,-76);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#A6D514").ss(1,1,1).p("AgCCmQAWgXAJg1QAQhphLiW");
	this.shape_218.setTransform(-57,-86.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.7,-106.5,208.9,213.6);


(lib.frog_ask = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.frog_eyes();
	this.instance.setTransform(20.9,-87.1);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("AgDgFIAHgCQgBAHgDAJg");
	this.shape.setTransform(23.8,-67.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212121").s().p("AiQAdQADgIABgKQBYgWA1gKQBBgNAiACQAYABAKAHQARAKgJATIgTgGQACgEgBgBIgCgBQgEgEgSgBQgfgChBANQgtAHg3AOIgsAMIgCABIgBAAIAAAAg");
	this.shape_1.setTransform(38.4,-69.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#070707").s().p("AgIAJQAAgJADgJIAOACIgCARg");
	this.shape_2.setTransform(0.8,-69.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AgDAKQgGgEgBgDIgBgDIAFgIIAEgCIACgBIACAHIABgCIAAAAIAJACQgEAIgGAIg");
	this.shape_3.setTransform(-1.6,-70.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212121").s().p("AgFAIIgBAAQAGgIACgJIAFABQgDAIAAAKg");
	this.shape_4.setTransform(-0.6,-69.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhTBJQgjgZgDgnIAAgHIARABIACgRIgQgCQAJggAfgWQAfgWApgDQAxgEAlAZQAmAZADApQACAIgCAFIgJADIAFAPQgKAegfAUQgeAUgnADIgKABQgvAAghgYgAgFhLQgrADgcAaQgbAZACAdQACAeAfAVQAgAVApgDQArgEAdgZQAbgagDgcQgCgfgegUQgcgSgjAAIgLAAg");
	this.shape_5.setTransform(12.1,-69.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEA6QgegUgDgfQgCgdAbgZQAcgZAsgDQApgEAgAVQAeAVADAeQADAcgcAaQgcAagsADIgJABQgkAAgcgTg");
	this.shape_6.setTransform(12,-69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag6BBQgigfgHgmQgHgpAYgdQAagbAqADQAnADAiAfQAbAZAKAgQALAegLAcIgIgCIgBAAIgBACIgBgHIgEABIgFACQAIgRgEgWQgFgfgegaQgdgbgfgCQgigDgSAVQgSAVAGAfQAFAgAdAaQAdAaAgADQAhACATgUIAEgFIAAAEQACAEAFADIAHADIgEAEQgXAZgkAAQgrAAgmgig");
	this.shape_7.setTransform(-10,-76.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBPQgggDgdgaQgdgagFggQgGgfASgVQASgVAiADQAfACAdAbQAeAaAFAfQAEAWgIARIAAABQgEABAAAHIgEAFQgRASgcAAg");
	this.shape_8.setTransform(-10,-76.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#070007").s().p("AgCgHIAEgBIAAAEQABAFgCAJg");
	this.shape_9.setTransform(12.2,-64.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCABIACgBIADABg");
	this.shape_10.setTransform(43.7,-69.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPgHIAcgCIADAHIgIAIIAAABIgBAAIAAAAIgBACIgOABQgFgJgCgIg");
	this.shape_11.setTransform(41.4,-70.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#212121").s().p("AgDgCIAFgBIACAAIgBADIgDADIgDgFg");
	this.shape_12.setTransform(43.1,-71.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AgJAAQAAAtAJAAQAKAAAAgtQAAgsgKAAQgJAAAAAsg");
	this.shape_13.setTransform(33.7,-87.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF00FF").s().p("AgJAAQABgsAIAAQAKAAAAAsQAAAtgKgBQgIABgBgtg");
	this.shape_14.setTransform(33.7,-87.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AgJAAQAAAtAJAAQAKAAAAgtQAAgsgKAAQgJAAAAAsg");
	this.shape_15.setTransform(14.5,-92.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF00FF").s().p("AgJAAQAAgrAJgBQAJABABArQgBAtgJgBQgJABAAgtg");
	this.shape_16.setTransform(14.5,-92.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("ABMg7QgNgQgfAGQggAGgeAZQgfAZgOAcQgNAdANAQQANAQAfgGQAfgGAfgZQAfgZAOgcQANgdgNgQg");
	this.shape_17.setTransform(57.9,-41.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF00FF").s().p("AhLA8QgNgRANgdQAOgbAfgZQAegZAggGQAfgGANAQQANAQgNAeQgOAagfAaQgfAYgfAHIgPACQgTAAgKgMg");
	this.shape_18.setTransform(57.9,-41.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgFgBgFgCQgIgFgBgGQgBgIAHABQAGACACAIg");
	this.shape_19.setTransform(40.2,-102.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D9EF7F").s().p("AAAAIQgIgFgBgGQgBgIAHABQAGACACAIIAFALIgKgDg");
	this.shape_20.setTransform(40.2,-102.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgGgBgGgDQgLgGgCgIQgBgLAJACQAHACAEAKg");
	this.shape_21.setTransform(41,-100.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9EF7F").s().p("AABAKQgLgGgCgIQgBgLAJACQAHACAEAKIAGAPQgGgBgGgDg");
	this.shape_22.setTransform(41,-100.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A6D514").ss(1,1,1).p("AAMARQgGgCgGgEQgMgJABgJQAAgMAJAEQAIADACAMg");
	this.shape_23.setTransform(41.6,-97.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D9EF7F").s().p("AAAALQgMgJABgJQAAgMAJAEQAIADACAMIAEARQgGgCgGgEg");
	this.shape_24.setTransform(41.6,-97.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAVQgIgDgHgFQgOgKAAgLQABgPALAFQAJAEADAOg");
	this.shape_25.setTransform(42.3,-95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D9EF7F").s().p("AAAANQgOgKAAgLQABgPALAFQAJAEADAOIAFAVQgIgDgHgFg");
	this.shape_26.setTransform(42.3,-95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A6D514").ss(1,1,1).p("AASATQgIgBgJgEQgQgIgCgLQgDgPANADQAKACAFANg");
	this.shape_27.setTransform(43.5,-92.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D9EF7F").s().p("AABAOQgQgIgCgLQgDgPANADQAKACAFANIAKAVQgIgBgJgEg");
	this.shape_28.setTransform(43.5,-92.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A6D514").ss(1,1,1).p("AAUAaQgKgDgKgGQgTgNAAgOQAAgTAPAGQAMAEAEASg");
	this.shape_29.setTransform(44.3,-89.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D9EF7F").s().p("AAAARQgTgNAAgOQAAgTAPAGQAMAEAEASIAIAbQgKgDgKgGg");
	this.shape_30.setTransform(44.3,-89.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAcQgJgFgHgIQgSgPADgPQAEgSALAIQANAHABASg");
	this.shape_31.setTransform(44.7,-84.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D9EF7F").s().p("AAAAPQgSgPADgPQAEgSALAIQANAHABASIACAcQgJgFgHgIg");
	this.shape_32.setTransform(44.7,-84.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A6D514").ss(1,1,1).p("AANAgQgJgHgGgKQgRgRAGgRQAGgTALAKQANAKgCASg");
	this.shape_33.setTransform(44.2,-80.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D9EF7F").s().p("AgCAPQgRgRAGgRQAGgTALAKQANAKgCASIgCAgQgJgHgGgKg");
	this.shape_34.setTransform(44.2,-80.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A6D514").s().p("AALAmIgBAAIAAgBQglgdAIgdIAAgBQAEgMAIgDQAHgDAHAHQAPAMgBAVIAAAAIAAABIgCAaIAAAFIgBABIAAABQAAAFgEAAIgDgBgAgDgbQgEABgDAHIAAABQgEAOAOARIAJALIACgYIAAAAQABgRgLgIQgBgDgCAAIgBABg");
	this.shape_35.setTransform(43.7,-76.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D9EF7F").s().p("AgDAQQgRgTAGgRQAGgUAMALQAOAKgCATIgDAiQgJgHgHgLg");
	this.shape_36.setTransform(43.7,-76.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#A6D514").ss(1,1,1).p("AgEgMQgFAGAEAHIAFAPQANgQgIgLQgFgIgEAHg");
	this.shape_37.setTransform(41.5,-103.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D9EF7F").s().p("AgFABQgEgHAFgGQAEgHAFAIQAIALgNAQg");
	this.shape_38.setTransform(41.5,-103.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQANgRgIgLQgFgJgEAHQgFAHAEAHg");
	this.shape_39.setTransform(42.6,-100.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D9EF7F").s().p("AgFABQgEgHAFgHQAEgHAFAJQAIALgNARg");
	this.shape_40.setTransform(42.6,-100.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUQAQgUgKgOQgGgKgGAIQgFAJAEAJg");
	this.shape_41.setTransform(43.7,-98.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D9EF7F").s().p("AgHACQgEgJAFgJQAGgIAGAKQAKAOgQAUg");
	this.shape_42.setTransform(43.7,-98.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZQAUgagNgQQgHgNgHALQgHAKAGALg");
	this.shape_43.setTransform(45.2,-94.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D9EF7F").s().p("AgIACQgGgLAHgKQAHgLAHANQANAQgUAag");
	this.shape_44.setTransform(45.2,-94.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#A6D514").ss(1,1,1).p("AgFAYQAXgWgJgRQgGgOgHAJQgJAJADAMg");
	this.shape_45.setTransform(46.7,-91.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D9EF7F").s().p("AgKABQgDgMAJgJQAHgJAGAOQAJARgXAWg");
	this.shape_46.setTransform(46.7,-91.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdIAPgOQAQgPgEgQQgFgRgLAIQgMAJABAQg");
	this.shape_47.setTransform(47.5,-88.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQALgIAFARQAEAQgQAPIgPAOg");
	this.shape_48.setTransform(47.5,-88.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdIAPgPQAQgPgEgPQgFgSgLAJQgMAIAAARg");
	this.shape_49.setTransform(48.2,-83.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D9EF7F").s().p("AgOAAQAAgRAMgIQALgJAFASQAEAPgQAPIgPAPg");
	this.shape_50.setTransform(48.2,-83.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#A6D514").ss(1,1,1).p("AgTAeIATgMQAVgQgBgQQgCgVgQAHQgNAIgDATg");
	this.shape_51.setTransform(48.2,-79.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D9EF7F").s().p("AgOgBQADgTANgIQAQgHACAVQABAQgVAQIgTAMg");
	this.shape_52.setTransform(48.2,-79.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A6D514").s().p("AgZAfQgFAAAAgFIABgCIAFAEIAAAAIABAAIADABQAEAAAAgFIAAAAIABgBIAAgEIAMgEQAVgKADgNQABgIgDgCQgBgCgFAAQgNACgHARIgIASIACgYIAAgBIAAgDQAKgPAOgEQAKgCAGAHQAGAGgDANQgGAbgwAKIAAAAg");
	this.shape_53.setTransform(47.3,-75.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D9EF7F").s().p("AgLgDQAIgTAPgDQARgDgEAVQgDAQgXAKIgYAHg");
	this.shape_54.setTransform(47.3,-75.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A6D514").s().p("AgOCmIAAgBIAOgBIgGAGQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgFAAAAgGgAAACQIAFgLIABABIgBACQAAAFAFABIABAAIAAgBIABAAIgCAEgAAUBTQAQhlhDiQIgBgEQAAgEAFAAQAEgBABAEQBGCXgTBpIgHAJQAAgIgCgHg");
	this.shape_55.setTransform(43.6,-86.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2,1,1).p("AArAkQgaAggeAMQgfAMgTgPQgSgPAGghQAGggAaggQAbggAegMQAfgMASAPQATAPgGAhQgGAggbAgg");
	this.shape_56.setTransform(30.5,-84.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag/BNQgSgPAGgiQAGgeAaghQAbggAegMQAfgMASAPQATAPgGAiQgGAfgbAgQgaAggeAMQgOAFgLAAQgOAAgLgIg");
	this.shape_57.setTransform(30.5,-84.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,1,1).p("AAsAkQgbAggeAMQgfAMgSgPQgTgPAGgiQAGgfAbggQAaggAegMQAfgMATAPQASAPgGAiQgGAfgaAgg");
	this.shape_58.setTransform(11.2,-89.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag+BNQgTgPAGgiQAGgfAbggQAaggAegMQAfgMATAPQASAPgGAiQgGAfgaAgQgbAggeAMQgOAFgLAAQgOAAgKgIg");
	this.shape_59.setTransform(11.2,-89.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,1,1).p("AAJAAQAAAKgJAAQgIAAAAgKQAAgJAIAAQAJAAAAAJg");
	this.shape_60.setTransform(-1.2,-53);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF00FF").s().p("AgIAAQAAgJAIAAQAJAAAAAJQAAAKgJgBQgIABAAgKg");
	this.shape_61.setTransform(-1.2,-53);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2,1,1).p("AAKAAQAAAJgKAAQgJAAAAgJQAAgIAJAAQAKAAAAAIg");
	this.shape_62.setTransform(-12.2,-55.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("AgJAAQABgIAIAAQAKAAAAAIQAAAJgKAAQgIAAgBgJg");
	this.shape_63.setTransform(-12.2,-55.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AAAgNQgGACgEAEQgJAHAMAJQASAQAEgm");
	this.shape_64.setTransform(60.1,3.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF00FF").s().p("AgHAJQgMgJAJgHQAEgEAGgCIAPAAQgDAbgLAAQgCAAgGgFg");
	this.shape_65.setTransform(60.1,3.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AANgyQgNACgLAGQgbANgCAWQgDAaAXAVQAWAWAXgUQAVgSgFgbQgDgXgNgM");
	this.shape_66.setTransform(-36.6,51.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF00FF").s().p("AgUAoQgXgVADgaQACgWAbgNQALgGANgCIAMAMQANAMADAXQAFAbgVASQgLAJgLAAQgLAAgMgLg");
	this.shape_67.setTransform(-36.6,51.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AhJgZIAHASQAKATAPAJQAsAgBHhS");
	this.shape_68.setTransform(86.4,18.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF00FF").s().p("AgpAVQgPgJgKgTIgHgSICTgEQgzA7glAAQgPAAgMgJg");
	this.shape_69.setTransform(86.4,18.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AAFgqIgPAdQgKAfAhAZ");
	this.shape_70.setTransform(67,12.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("AgKgNIAPgdIAIBVQghgZAKgfg");
	this.shape_71.setTransform(67,12.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AAAg3QgUAWgIAZQgPAyBKAP");
	this.shape_72.setTransform(64.3,-6.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF00FF").s().p("AgcgIQAIgZAUgWIAfBvQhKgOAPgyg");
	this.shape_73.setTransform(64.3,-6.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("Agkg2IAPADQARAEAMAJQAqAcgRBB");
	this.shape_74.setTransform(-61.4,33.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF00FF").s().p("Agkg2IAPADQARAEAMAJQAqAdgRA/g");
	this.shape_75.setTransform(-61.4,33.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AArhPQAMAggGAlQgMBHhXAT");
	this.shape_76.setTransform(-68.3,7.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF00FF").s().p("AArhPQAMAggGAlQgMBHhXATg");
	this.shape_77.setTransform(-68.3,7.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(3,1,1).p("AhAh1IACAXQAFAcAKAdQAhBaBPBA");
	this.shape_78.setTransform(-17.3,55.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(3,1,1).p("Ahxh1QAmA3BBBGQBWBjAmAL");
	this.shape_79.setTransform(-8.4,54.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(3,1,1).p("Ah5g6IBOA7QBbA8BKgD");
	this.shape_80.setTransform(15.2,48.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(3,1,1).p("Ah1gKIBGANQBUAMBRgH");
	this.shape_81.setTransform(18.3,31.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(3,1,1).p("ADqC/Qi5jKhFhDQgsgqAAgmQAAgTAJgLIAThDQgngEgYAnQgPAagmghQghgdgMgfQgKgbgGAWQgGAXAOAxQg7gEgYgIQgRgGAgAaQAgAbAUAIQgfAUggAAQgZAAAPAKQAQAJAtAJIA4AnQATAQAvATIAbA1QAjA+AjA1QBuCtBPAMIApAEQAsADAJgHQAQgMAQhT");
	this.shape_82.setTransform(38.6,1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF00FF").s().p("ADYEuIgpgEQhPgMhuitQgjg1gjg+Igbg1QgvgTgTgQIg4gnQgtgJgQgJQgPgKAZAAQAgAAAfgUQgUgIgggbQgggaARAGQAYAIA7AEQgOgxAGgXQAGgWAKAbQAMAfAhAdQAmAhAPgaQAYgnAnAEIgTBDQgJALAAATQAAAmAsAqQBFBDC5DKIBDAMQgQBTgQAMQgHAFgYAAIgWgBg");
	this.shape_83.setTransform(38.6,1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(2,1,1).p("AAEgaQgEAFgCAJQgEARAKAW");
	this.shape_84.setTransform(43.1,-46.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF00FF").s().p("AgCgMQACgJAEgFIAAA1QgKgWAEgRg");
	this.shape_85.setTransform(43.1,-46.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(2,1,1).p("AnJheIA3A1QBKA5BfAjQEsBwGHiq");
	this.shape_86.setTransform(-2.7,-46.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF00FF").s().p("AjpAzQhfgjhJg5Ig4g1IOTBXQjtBmjMAAQiDAAh3gsg");
	this.shape_87.setTransform(-2.7,-46.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(3,1,1).p("AFeB5Qgjg5hAhAQh/h+iMgnQgXgUhBgxQgpgfg7gWIgzgQQgHgCABAGQABAMApArQggALgfANQhAAZAAAKQAAAJAfgLQAqgOAVAAQgXAOgYAQQgwAhgCAMQgBAJAbgNQAtgUApgFQg1AggJAXQgFAMAYgIQAwgQAhgEQB/gQAYAQQBXA+AvAtQCJCABiC5");
	this.shape_88.setTransform(-76.1,-25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF00FF").s().p("ABWgJQgvgthXg+QgYgQh/AQQghAEgwAQQgYAIAFgMQAJgXA1ggQgpAFgtAUQgbANABgJQACgMAwghQAYgQAXgOQgVAAgqAOQgfALAAgJQAAgKBAgZQAfgNAggLQgpgrgBgMQgBgGAHACIAzAQQA7AWApAfQBBAxAXAUQCMAnB/B+QBABAAjA5IgdC3Qhii5iJiAg");
	this.shape_89.setTransform(-76.1,-25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(3,1,1).p("AH4gGQgWA4hiBwQiNCiAVCOQivgEg8g3QhZhThPA/QgoAggogDQgvgChEgvQg7gpgvARQgOAFgMALIgIAIQAQgpAIhKQAPiUgsigQgrijAIiLQAEhGAMglIBUArQBoA1BlArQFECNC0ADIDRALQAZBkgZBBg");
	this.shape_90.setTransform(13.1,39.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAdGXQhZhThPA/QgoAggogDQgvgDhEguQg7gpgvARQgOAFgMALIgIAJQAQgqAIhJQAPiUgsihQgriiAIiMQAEhGAMglIBUAsQBoA0BlArQFECNC0ADIDRALQAZBkgZBBQgWA5hiBvQiNChAVCPQivgEg8g3g");
	this.shape_91.setTransform(13.1,39.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AJbRAQhTgBjOhTQishFgrgeQgigYgMgcQgKgXAEgfQgOgFgOgGQgsgWgNgUQgBgGgPgGQgRgGgTgBQg0gCgnAdQgvAkgvgHQgdgEgcgUQgaAfhLAzQg2AkhmBYIhYBJQgLAIgGACIgFAAQgGAAgFgEQgFgEAAgJQAAgGACgIIAMggQARgygLgVQgBAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIgCgBQgEgBgIACQgTAFgbATQgYAPgVASIgTAQIgWgUIAAgBIABgBIAQgTQAWgfAJgQQARgeAAgPQAAgFgCgDQgDgDgIgBQgsgIgrAFIghAGIgIgdIACAAIAAAAIANgDIAYgHQAqgLAWgMQALgFAEgGQgQgOhIgLIACgdIAAgBIAbgBIBBgEQBhgIAqgRQBAgZAFgLQAHgLgHgWQgJgcgfguIiyj6QhwifgMgpQgLgoAAgXQgBgnAcgZQAwgpBuAQQAjAGBZAXQgTgngKgXQgRgoADggQADgNASgKQAOgGAPgDIAagEQg9iMgRgwQgdhNAShRQAZhsBuhKIAFAIIABABIAAAAIAAABIAAgBIgEgLIC4h9QAEAHABAGIAEASIizB5QhkBEgWBgQgQBFAaBIQAPAqAmBYIAhBJIAAABIAJATIgVACQgWACgWAFQgNACgKAEIgDACQgCAYAVAuQAaA3AFAWIAEAVIgWgGQiGgfgOgCQhggQglAiQgRANAAAbQAAAUAKAlQAIAhBwCcICxD7QAiAxAKAhQALAjgNAVQgLATgZAMIgwATQgtAShnAJQALAGAGAHQAGAIAAAKQAAAJgGAIQgHAJgTAKIAAABIAQACQATADAKAMQAKANgBAQQgCAWgPAdQAYgPAWgHQARgEAKADQARAEAHAPQAPAhgUA8IAAADIBAg3QBnhYA4gmQA2gjAgggIANgOIAJgVIAQAMQAeAXAZAEQAiAFAmgcQAxgkA9ADQA7AEATAeQAFAMAlARIAjAOIACABIAAAAIABAAIANAEIgDANQgHAeAJATQAIAUAbATQAmAbCsBFQCAA0BYAUIAJACIgPgMQgUgMgIgMQgOgQAPgQQANgOAqgJIAagDQgYgOgRgVQgMgNACgOQAAgOALgKQAIgJANgIQhhgGhrgbQgTgFgIgNQgJgMABgRQACgYAYgiQAgguA6g0QEBjqCkicQAegdAIgWQAHgRgIgNQgVgih5gFQhmgEhOAnQgaAOgRAOIgKAIIgDADIAAAAIAAAAIgaAdIAAh5QgDh5gjh6QgLglgOgkIgKgaIgBAAIAAgBIgDgHIAog+IABgCQBYhlgZhLQgNglgogdQh7hahPgqIAOgbQBOAqCABdQAyAoAOAoQAgBchlBxIgeAwQBFCgAEC6IAAAzQBfhECLAHQCCAHAiArQATAagOAhQgKAbgkAjQhUBQlRE2Qg4AzgeAqQgTAcgBAQQAAAGACACQACAEAJADQCtAtB5gOIAEAdIAAAAIgBABIgFAAIgQAEQgXAGgWAIQgaAKgIAKQgDADAAADQAAACADAEQAWAbAnANQAJAEAQAEIAIABIACAAIgBAeIghABQgmACgaAFQgXADgNAHQAHAHALAHIACABIBcBKgADgsOQABgXAahGQAQgqgMgsQgLgpgcgMQgXgLgyAWQgRAHgRAJIgKAFIgCACIgBAAIAAABIgTAMIgEgXQgGgkgSgQQgOgNgXgCQgegCg0AWQgWAIhIA6IhfBNIhQA5IgCgLQgEgNgEgGIBHgyIBfhNQBMg8AagLQA+gYAgACQAiACAWAVQAUASAJAfIAhgQQA9gYAjAOQANAGALAJQAdBGAHA+QgDAQgFANIgKAaQgFgCgGABQgIADgEAMIAAABQgFATANASIAAAHQAAAOADAJIgfACQgDgMABgPgAD/s1IAAgBQADgHAEgBIAEAAIgJAcQgFgKADgJgAEPvpQAQAbACAkQgFgcgNgjg");
	this.shape_92.setTransform(17,4.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF00FF").s().p("AIeQcQhYgUiAg0QishFgmgbQgbgTgIgUQgJgTAHgeIADgNIgNgEIgBAAIAAAAIgCgBIgjgOQglgRgFgMQgTgeg7gEQg9gDgxAkQgmAcgigFQgZgEgegXIgQgMIgJAVIgNAOQggAgg2AjQg4AmhnBYIhAA3IAAgDQAUg8gPghQgHgPgRgEQgKgDgRAEQgWAHgYAPQAPgdACgWQABgQgKgNQgKgMgTgDIgQgCIAAgBQATgKAHgJQAGgIAAgJQAAgKgGgIQgGgHgLgGQBngJAtgSIAwgTQAZgMALgTQANgVgLgjQgKghgigxIixj7QhwicgIghQgKglAAgUQAAgbARgNQAlgiBgAQQAOACCGAfIAWAGIgEgVQgFgWgag3QgVguACgYIADgCQAKgEANgCQAWgFAWgCIAVgCIgJgTIAAgBIghhJQgmhYgPgqQgahIAQhFQAWhgBkhEICohxQAOgVAWgFIADgBIBGgyIBfhNQBIg6AWgIQA0gWAeACQAXACAOANQASAQAGAkIAEAXIATgMIAAgBIABAAIACgCIAKgFQARgJARgHQAygWAXALQAcAMALApQAMAsgQAqQgaBGgBAXQgBAKABAIQAOALAGAUQADAIAAAHQALALAQAIQBPAqB7BaQAoAdANAlQAZBLhYBlIgBACIgoA+IADAHIAAABIABAAIAAABIAKAZQAOAkALAlQAjB6ADB5IAAB5IAagdIAAAAIAAAAIADgDIAKgIQARgOAagOQBOgnBmAEQB5AFAVAiQAIANgHARQgIAWgeAdQikCckBDqQg6A0ggAuQgYAigCAYQgBARAJAMQAIANATAFQBrAbBhAGQgNAIgIAJQgLAKAAAOQgCAOAMANQARAVAYAOIgaADQgqAJgNAOQgPAQAOAQQAIAMAUAMIAPAMg");
	this.shape_93.setTransform(17,3.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALQgFgBgFgCQgIgFgBgGQgBgIAHABQAGACACAIg");
	this.shape_94.setTransform(-7.3,-111);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D9EF7F").s().p("AAAAIQgIgFgBgGQgBgIAHABQAGACACAIIAFALIgKgDg");
	this.shape_95.setTransform(-7.3,-111);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOQgGgBgGgDQgLgGgCgIQgBgLAJACQAHACAEAKg");
	this.shape_96.setTransform(-6.5,-108.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D9EF7F").s().p("AABAKQgLgGgCgIQgBgLAJACQAHACAEAKIAGAPQgGgBgGgDg");
	this.shape_97.setTransform(-6.5,-108.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#A6D514").ss(1,1,1).p("AAMARQgGgCgGgEQgMgJABgJQAAgMAJAEQAIADACAMg");
	this.shape_98.setTransform(-5.9,-105.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D9EF7F").s().p("AAAALQgMgJABgJQAAgMAJAEQAIADACAMIAEARQgGgCgGgEg");
	this.shape_99.setTransform(-5.9,-105.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAVQgIgDgHgFQgOgKAAgLQABgPALAFQAJAEADAOg");
	this.shape_100.setTransform(-5.2,-103.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D9EF7F").s().p("AAAANQgOgKAAgLQABgPALAFQAJAEADAOIAFAVQgIgDgHgFg");
	this.shape_101.setTransform(-5.2,-103.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A6D514").ss(1,1,1).p("AASATQgIgBgJgEQgQgIgCgLQgDgPANADQAKACAFANg");
	this.shape_102.setTransform(-4,-100.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D9EF7F").s().p("AABAOQgQgIgCgLQgDgPANADQAKACAFANIAKAVQgIgBgJgEg");
	this.shape_103.setTransform(-4,-100.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A6D514").ss(1,1,1).p("AAUAaQgKgDgKgGQgTgNAAgOQAAgTAPAGQAMAEAEASg");
	this.shape_104.setTransform(-3.2,-97.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D9EF7F").s().p("AAAARQgTgNAAgOQAAgTAPAGQAMAEAEASIAIAbQgKgDgKgGg");
	this.shape_105.setTransform(-3.2,-97.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAcQgJgFgHgIQgSgPADgPQAEgSALAIQANAHABASg");
	this.shape_106.setTransform(-2.8,-92.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D9EF7F").s().p("AAAAPQgSgPADgPQAEgSALAIQANAHABASIACAcQgJgFgHgIg");
	this.shape_107.setTransform(-2.8,-92.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#A6D514").ss(1,1,1).p("AANAgQgJgHgGgKQgRgRAGgRQAGgTALAKQANAKgCASg");
	this.shape_108.setTransform(-3.3,-88.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D9EF7F").s().p("AgCAPQgRgRAGgRQAGgTALAKQANAKgCASIgCAgQgJgHgGgKg");
	this.shape_109.setTransform(-3.3,-88.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A6D514").ss(1,1,1).p("AANAiQgJgHgHgLQgRgTAGgRQAGgUAMALQAOAKgCATg");
	this.shape_110.setTransform(-3.8,-84.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D9EF7F").s().p("AgDAQQgRgTAGgRQAGgUAMALQAOAKgCATIgDAiQgJgHgHgLg");
	this.shape_111.setTransform(-3.8,-84.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A6D514").ss(1,1,1).p("AAFgLQgFgIgEAHQgFAGAEAHIAFAPQANgQgIgLg");
	this.shape_112.setTransform(-6,-111.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D9EF7F").s().p("AgFABQgEgHAFgGQAEgHAFAIQAIALgNAQg");
	this.shape_113.setTransform(-6,-111.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARQANgRgIgLQgFgJgEAHQgFAHAEAHg");
	this.shape_114.setTransform(-4.9,-108.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D9EF7F").s().p("AgFABQgEgHAFgHQAEgHAFAJQAIALgNARg");
	this.shape_115.setTransform(-4.9,-108.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUQAQgUgKgOQgGgKgGAIQgFAJAEAJg");
	this.shape_116.setTransform(-3.8,-106.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D9EF7F").s().p("AgHACQgEgJAFgJQAGgIAGAKQAKAOgQAUg");
	this.shape_117.setTransform(-3.8,-106.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#A6D514").ss(1,1,1).p("AgHgTQgHAKAGALIAIAXQAUgagNgQQgHgNgHALg");
	this.shape_118.setTransform(-2.3,-102.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D9EF7F").s().p("AgIACQgGgLAHgKQAHgLAHANQANAQgUAag");
	this.shape_119.setTransform(-2.3,-102.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#A6D514").ss(1,1,1).p("AgFAYQAXgWgJgRQgGgOgHAJQgJAJADAMg");
	this.shape_120.setTransform(-0.8,-99.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D9EF7F").s().p("AgKABQgDgMAJgJQAHgJAGAOQAJARgXAWg");
	this.shape_121.setTransform(-0.8,-99.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdIAPgOQAQgPgEgQQgFgRgLAIQgMAJABAQg");
	this.shape_122.setTransform(0,-96.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQALgIAFARQAEAQgQAPIgPAOg");
	this.shape_123.setTransform(0,-96.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdIAPgPQAQgPgEgPQgFgSgLAJQgMAIAAARg");
	this.shape_124.setTransform(0.7,-91.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D9EF7F").s().p("AgOAAQAAgRAMgIQALgJAFASQAEAPgQAPIgPAPg");
	this.shape_125.setTransform(0.7,-91.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#A6D514").ss(1,1,1).p("AgTAeIATgMQAVgQgBgQQgCgVgQAHQgNAIgDATg");
	this.shape_126.setTransform(0.7,-87.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D9EF7F").s().p("AgOgBQADgTANgIQAQgHACAVQABAQgVAQIgTAMg");
	this.shape_127.setTransform(0.7,-87.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#A6D514").ss(1,1,1).p("AgZAaIAYgHQAXgKADgQQAEgVgRADQgPADgIATg");
	this.shape_128.setTransform(-0.2,-83.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D9EF7F").s().p("AgLgDQAIgTAPgDQARgDgEAVQgDAQgXAKIgYAHg");
	this.shape_129.setTransform(-0.2,-83.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#A6D514").ss(1,1,1).p("AgJCnIALgSQAPgZAHghQAUhohHiY");
	this.shape_130.setTransform(-3.9,-94.4);

	this.addChild(this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.6,-114,223.8,227.1);


(lib.boy_eyes_timed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boy_eyes();
	this.instance.setTransform(-0.1,-3.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fade_in":0,"pick_up":24,"answer":30,"exit":37});

	// timeline functions:
	this.frame_0 = function() {
		/* _parent.spotlight1._alpha = 7;
		_parent.spotlight2._alpha = -17;*/
	}
	this.frame_3 = function() {
		/* _parent.spotlight1._alpha = 20;
		_parent.spotlight2._alpha = -10;*/
	}
	this.frame_30 = function() {
		/* stop();
		_parent.answering = true;
		_parent.currentPoints.play();*/
	}
	this.frame_37 = function() {
		/* _parent.answering = false;*/
	}
	this.frame_63 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(27).call(this.frame_30).wait(7).call(this.frame_37).wait(26).call(this.frame_63).wait(1));

	// Blink
	this.instance = new lib.boy_eyes_timed();
	this.instance.setTransform(16.9,-123.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({_off:true},7).wait(27));

	// Phone
	this.instance_1 = new lib.boy_phone();
	this.instance_1.setTransform(117.5,-99.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},23).wait(25).to({_off:false},0).wait(16));

	// Graphics
	this.instance_2 = new lib.boy_no_phone();
	this.instance_2.setTransform(-2.6,-48.1,0.4,0.4);
	this.instance_2.alpha = 0.898;

	this.instance_3 = new lib.boy1();
	this.instance_3.setTransform(24.3,-37.9,0.5,0.5);

	this.instance_4 = new lib.boy2();
	this.instance_4.setTransform(24.3,-44.2,0.5,0.5);

	this.instance_5 = new lib.boy3();
	this.instance_5.setTransform(24.3,-38,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},17).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},5).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.44,scaleY:0.44,y:-44.5,alpha:0.93},0).to({scaleX:0.5,scaleY:0.5,y:-38.2,alpha:1},4).wait(1).to({_off:true},17).wait(25).to({_off:false},0).wait(9).to({scaleX:0.43,scaleY:0.43,y:-45.4,alpha:0.93},5).wait(2));

	// Shadow
	this.instance_6 = new lib.Shadow();
	this.instance_6.setTransform(6.8,52.9,0.7,0.7);
	this.instance_6.alpha = 0.211;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,x:8.1,y:71.5,alpha:0.301},4,cjs.Ease.get(0.63)).wait(51).to({scaleX:0.7,scaleY:0.7,x:6.8,y:52.9,alpha:0.211},5,cjs.Ease.get(0.65)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-143.4,188.5,190.6);


(lib.frog_complete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{think:0,ask:41,leave:66,"enter":94});

	// timeline functions:
	this.frame_0 = function() {
		/* _parent.speech.gotoAndPlay("ready");*/
	}
	this.frame_41 = function() {
		/* for (i=0; i<=3; i++){
			main["btn"+i]._visible = true;
		}*/
	}
	this.frame_93 = function() {
		/* stop();
		_parent.char.play();*/
	}
	this.frame_109 = function() {
		/* gotoAndPlay("think");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(52).call(this.frame_93).wait(16).call(this.frame_109).wait(1));

	// Blink
	this.instance = new lib.frog_eyes();
	this.instance.setTransform(12.4,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},41).wait(69));

	// Frog
	this.instance_1 = new lib.frog_think();
	this.instance_1.setTransform(9.2,-0.7);

	this.instance_2 = new lib.frog_ask();
	this.instance_2.setTransform(-7.6,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("AgDgFIAHgDQgCAIgCAIg");
	this.shape.setTransform(15.1,-66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212121").s().p("AiQAdQADgIABgKQBYgWA1gKQBBgNAiACQAYABAKAHQARAKgJATIgTgGQACgEgBgBIgCgBQgEgEgSgBQgfgChBANQgtAHg3AOIgsAMIgCABIgBAAIAAAAg");
	this.shape_1.setTransform(29.6,-68.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#070707").s().p("AgIAJQAAgJADgJIAOACIgCARg");
	this.shape_2.setTransform(-8,-68.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AgDAKQgGgEgBgDIgBgDIAFgIIAEgCIACgBIACAHIABgCIAAAAIAJACQgEAIgGAIg");
	this.shape_3.setTransform(-10.3,-69.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212121").s().p("AgFAIIgBAAQAGgIACgJIAFABQgDAIAAAKg");
	this.shape_4.setTransform(-9.4,-68.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhTBJQgjgZgDgnIAAgHIARABIACgRIgQgCQAJggAfgWQAfgWApgDQAwgEAmAZQAmAZADApQABAIgBAFIgJADIAFAPQgLAegeAUQgeAUgoADIgJABQgvAAghgYgAgEhLQgsADgcAaQgbAZACAdQACAeAfAVQAgAVApgDQAsgEAcgZQAbgagCgcQgDgfgfgUQgbgSgjAAIgKAAg");
	this.shape_5.setTransform(3.3,-68.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEA6QgegUgDgfQgCgdAbgZQAcgZAsgDQApgEAgAVQAeAVADAeQADAcgcAaQgcAagsADIgJABQgkAAgcgTg");
	this.shape_6.setTransform(3.3,-68);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag6BBQgigfgHgmQgHgpAYgdQAagbAqADQAnADAiAfQAbAZAKAgQALAegLAcIgIgCIgBAAIgBACIgBgHIgEABIgFACQAIgRgEgWQgFgfgegaQgdgbgfgCQgigDgSAVQgSAVAGAfQAFAgAdAaQAdAaAgADQAhACATgUIAEgFIAAAEQACAEAFADIAHADIgEAEQgXAZgkAAQgrAAgmgig");
	this.shape_7.setTransform(-18.8,-75.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBPQgggDgdgaQgdgagFggQgGgfASgVQASgVAiADQAfACAdAbQAeAaAFAfQAEAWgIARIAAABQgEABAAAHIgEAFQgRASgcAAg");
	this.shape_8.setTransform(-18.8,-75.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F201D").s().p("AgFAAIAMAAIgJAAIgDAAg");
	this.shape_9.setTransform(37.2,-72.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F201D").s().p("AgJAIIAJgLIABgGIAGAAIADACIACgBIABAAIgMARIgMABg");
	this.shape_10.setTransform(35.8,-71.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQgGIAcgEIAFAKIgFAGIgDACIgSADQgFgKgCgHg");
	this.shape_11.setTransform(33.5,-70.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#212121").s().p("AgFgEIAKgBIgFALIgFgKg");
	this.shape_12.setTransform(35.4,-71.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAJQgDgLgGgFIAPgMQAHAIAEAPIABADIgQANg");
	this.shape_13.setTransform(-24.7,-81.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AgJAAQAAAtAJAAQAKAAAAgtQAAgsgKAAQgJAAAAAsg");
	this.shape_14.setTransform(25.9,-87.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AgJAAQAAgrAJAAQAJAAAAArQAAAsgJABQgJgBAAgsg");
	this.shape_15.setTransform(25.9,-87.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AgJAAQAAAtAJAAQAKAAAAgtQAAgsgKAAQgJAAAAAsg");
	this.shape_16.setTransform(6.7,-93);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AgIAAQgBgsAJABQAKgBAAAsQAAAtgKAAQgJAAABgtg");
	this.shape_17.setTransform(6.7,-93);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ABMg7QgNgQgfAGQggAGgeAZQgfAZgOAcQgNAdANAQQANAQAfgGQAfgGAegZQAggZANgbQAOgegNgQg");
	this.shape_18.setTransform(50.1,-41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("AhLA8QgNgQANgdQAOgcAfgZQAegZAggGQAfgGANAQQANAQgOAeQgNAbggAZQgeAZgfAGIgPACQgUAAgJgMg");
	this.shape_19.setTransform(50.1,-41.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALIgKgDQgIgFgBgGQgBgIAHABQAFACADAIg");
	this.shape_20.setTransform(32.4,-102.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9EF7F").s().p("AAAAIQgIgFgBgGQgBgIAHABQAFACADAIIAFALg");
	this.shape_21.setTransform(32.4,-102.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A6D514").ss(1,1,1).p("AAHgBIAGAPIgNgEQgLgGgBgIQgBgLAJACQAHACAEAKg");
	this.shape_22.setTransform(33.2,-100.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9EF7F").s().p("AAAAKQgLgGgBgIQgBgLAJACQAHACAEAKIAGAPg");
	this.shape_23.setTransform(33.2,-100.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A6D514").ss(1,1,1).p("AAMARIgMgGQgMgJABgJQAAgMAKAEQAHADACAMg");
	this.shape_24.setTransform(33.7,-97.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9EF7F").s().p("AAAALQgMgJABgJQAAgMAKAEQAHADACAMIAEARg");
	this.shape_25.setTransform(33.7,-97.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A6D514").ss(1,1,1).p("AgCgSQAJAEADAOIAFAVIgPgIQgOgLAAgKQABgPALAFg");
	this.shape_26.setTransform(34.5,-95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9EF7F").s().p("AAAANQgOgLAAgKQABgPALAFQAJAEADAOIAFAVg");
	this.shape_27.setTransform(34.5,-95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A6D514").ss(1,1,1).p("AgHgRQAKACAGANIAJAVIgRgFQgQgIgCgLQgDgPANADg");
	this.shape_28.setTransform(35.6,-92.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9EF7F").s().p("AABAOQgQgIgCgLQgDgPANADQAKACAGANIAJAVg");
	this.shape_29.setTransform(35.6,-92.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A6D514").ss(1,1,1).p("AAUAaIgUgJQgSgNgBgOQAAgTAPAFQAMAGAFARg");
	this.shape_30.setTransform(36.4,-89.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9EF7F").s().p("AAAARQgSgNgBgOQAAgTAPAFQAMAGAFARIAHAbg");
	this.shape_31.setTransform(36.4,-89.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAdIgQgNQgSgQADgPQAEgSALAIQANAIABARg");
	this.shape_32.setTransform(36.9,-84.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D9EF7F").s().p("AAAAQQgSgQADgPQAEgSALAIQANAIABARIACAdg");
	this.shape_33.setTransform(36.9,-84.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A6D514").ss(1,1,1).p("AANAgQgjgaAJgZQAGgTALALQANAKgBARg");
	this.shape_34.setTransform(36.4,-80.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D9EF7F").s().p("AgNgTQAGgTALALQANAKgBARIgDAgQgjgaAJgZg");
	this.shape_35.setTransform(36.4,-80.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A6D514").s().p("AAKAlQglgdAIgdIAAgBQAEgMAJgDQAGgDAHAHQARAMgDAVIgCAgIAAACQAAAFgFAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgDgbQgEABgCAHIAAABQgFAOAOARIAIAKIABAAIACgXQACgRgMgIQgBgDgCAAIgBABg");
	this.shape_36.setTransform(35.8,-76.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9EF7F").s().p("AgOgUQAHgUAMALQANAKgCATIgCAiQglgcAJgag");
	this.shape_37.setTransform(35.8,-76.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQIAFgKQAFgKgFgHQgFgIgEAHQgEAHADAGg");
	this.shape_38.setTransform(33.6,-103.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9EF7F").s().p("AgFABQgDgGAEgHQAEgHAFAIQAFAHgFAKIgFAKg");
	this.shape_39.setTransform(33.6,-103.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A6D514").ss(1,1,1).p("AgFACIAFAPIAFgLQAFgKgFgHQgFgJgEAIQgFAHAEAHg");
	this.shape_40.setTransform(34.8,-100.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAFAHgFAKIgFALg");
	this.shape_41.setTransform(34.8,-100.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A6D514").ss(1,1,1).p("AAHAHQAGgMgHgJQgGgKgFAIQgGAJAFAJIAGASg");
	this.shape_42.setTransform(35.8,-98.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgJQAFgIAGAKQAHAJgGAMIgHANg");
	this.shape_43.setTransform(35.8,-98.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZIAIgQQAHgQgHgKQgIgMgGAKQgHAKAFAMg");
	this.shape_44.setTransform(37.3,-94.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D9EF7F").s().p("AgIADQgFgMAHgKQAGgKAIAMQAHAKgHAQIgIAQg");
	this.shape_45.setTransform(37.3,-94.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A6D514").ss(1,1,1).p("AgFAYIAJgOQALgOgGgLQgGgOgHAJQgJAJADAMg");
	this.shape_46.setTransform(38.9,-91.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D9EF7F").s().p("AgKABQgDgMAJgJQAHgJAGAOQAGALgLAOIgJAOg");
	this.shape_47.setTransform(38.9,-91.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdIAPgOQAQgQgEgPQgFgRgLAIQgMAJAAAQg");
	this.shape_48.setTransform(39.7,-88.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D9EF7F").s().p("AgOAAQAAgQAMgJQALgIAFARQAEAPgQAQIgPAOg");
	this.shape_49.setTransform(39.7,-88.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAJgGAGgIQAQgPgEgQQgFgRgLAIQgMAJABAQg");
	this.shape_50.setTransform(40.3,-83.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQALgIAFARQAEAQgQAPQgGAIgJAGg");
	this.shape_51.setTransform(40.3,-83.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#A6D514").ss(1,1,1).p("AgTAeQALgEAIgIQAVgQgBgQQgCgUgQAHQgNAHgDATg");
	this.shape_52.setTransform(40.4,-79.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9EF7F").s().p("AgOgBQADgTANgHQAQgHACAUQABAQgVAQQgIAIgLAEg");
	this.shape_53.setTransform(40.4,-79.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A6D514").s().p("AgUAeQAEAAAAgFIAAgBIABgEIAMgEQAVgKACgNIAAAAQACgIgDgCQgCgCgFAAQgMACgHAQIAAABIgIARIACgYIAAgDQAJgPAPgEQAKgCAFAHQAHAHgDALIAAACQgGAZgnAJgAgdAeQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIAAgBIAGAEQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAg");
	this.shape_54.setTransform(39.5,-75.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D9EF7F").s().p("AgLgDQAIgTAPgDQARgDgEAVQgDAQgXAKQgMAGgMABg");
	this.shape_55.setTransform(39.5,-75.2);

	this.instance_3 = new lib.Crown("synched",0);
	this.instance_3.setTransform(116.4,-0.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2,1,1).p("AAsAkQgbAggdAMQggAMgSgPQgTgPAGgiQAGgfAbggQAaggAegMQAfgMATAPQASAPgGAiQgGAfgaAgg");
	this.shape_56.setTransform(22.7,-84.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag+BNQgTgPAGgiQAGgfAbggQAaggAegMQAfgMATAPQASAPgGAiQgGAfgaAgQgbAggdAMQgOAFgLAAQgPAAgKgIg");
	this.shape_57.setTransform(22.7,-84.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,1,1).p("AArAkQgaAggeAMQgfAMgTgPQgSgPAGgiQAGgfAaggQAbggAegMQAfgMASAPQATAPgGAiQgGAfgbAgg");
	this.shape_58.setTransform(3.4,-89.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag/BNQgSgPAGgiQAGgfAaggQAbggAegMQAfgMASAPQATAPgGAiQgGAfgbAgQgaAggeAMQgOAFgLAAQgOAAgLgIg");
	this.shape_59.setTransform(3.4,-89.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,1,1).p("AAKAAQAAAJgKAAQgJAAAAgJQAAgIAJAAQAKAAAAAIg");
	this.shape_60.setTransform(-9,-53.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF00FF").s().p("AgIAAQgBgIAJAAQAKAAgBAIQABAJgKAAQgJAAABgJg");
	this.shape_61.setTransform(-9,-53.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2,1,1).p("AAJAAQAAAJgJAAQgIAAAAgJQAAgIAIAAQAJAAAAAIg");
	this.shape_62.setTransform(-20,-55.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_63.setTransform(-20,-55.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AAAgMQgaAIAUANQAKAKAHgPIAEgQ");
	this.shape_64.setTransform(52.2,3.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF00FF").s().p("AgGAJQgUgNAagIIAPAAIgEAQQgEAJgGAAQgCAAgFgEg");
	this.shape_65.setTransform(52.2,3.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AgHgcQgfAYAYAVQAQATARgMQAQgNgUgX");
	this.shape_66.setTransform(-48.9,8.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF00FF").s().p("AgOARQgYgVAfgYIAWAQQAUAXgQANQgHAFgHAAQgIAAgLgMg");
	this.shape_67.setTransform(-48.9,8.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AANgyIgYAIQgbANgCAWQgDAaAXAVQAWAWAXgUQAVgSgFgbQgEgXgMgN");
	this.shape_68.setTransform(-44.4,51.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF00FF").s().p("AgUAoQgXgVADgaQACgWAbgNIAYgIIAMALQAMANAEAXQAFAbgVASQgLAJgLAAQgKAAgNgLg");
	this.shape_69.setTransform(-44.4,51.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AhKgZQAKAeAXAQQAsAgBIhS");
	this.shape_70.setTransform(78.6,18.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("AgpAVQgXgQgKgeICVgEQg1A7gkAAQgPAAgMgJg");
	this.shape_71.setTransform(78.6,18.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AAFgqIgPAdQgKAfAhAZ");
	this.shape_72.setTransform(59.2,12.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF00FF").s().p("AgKgNIAPgdIAIBVQghgZAKgfg");
	this.shape_73.setTransform(59.2,12.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AAAg4QgVAXgHAZQgPAyBKAO");
	this.shape_74.setTransform(56.5,-6.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF00FF").s().p("AgcgIQAHgZAVgXIAfBxQhKgPAPgyg");
	this.shape_75.setTransform(56.5,-6.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("Agkg1QAYABAUAOQAqAcgSBB");
	this.shape_76.setTransform(-69.2,33.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF00FF").s().p("Agkg1QAYAAAUAOQAqAdgSBBg");
	this.shape_77.setTransform(-69.2,33.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AgYg2QAYAEANAQQAdAggqA5");
	this.shape_78.setTransform(-57.4,-2.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF00FF").s().p("AgYg2QAYAEANAQQAdAggqA5g");
	this.shape_79.setTransform(-57.4,-2.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AArhPQAMAggGAkQgMBIhXAT");
	this.shape_80.setTransform(-76.1,7.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF00FF").s().p("AArhPQAMAggGAlQgMBGhXAUg");
	this.shape_81.setTransform(-76.1,7.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(3,1,1).p("AhAh1IACAXQAEAcALAdQAgBbBQBA");
	this.shape_82.setTransform(-25.1,55.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(3,1,1).p("Ahxh1QAmA2BBBHQBWBjAmAK");
	this.shape_83.setTransform(-16.3,54.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(3,1,1).p("Ah5g6QAgAfAuAcQBbA8BKgD");
	this.shape_84.setTransform(7.4,48.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(3,1,1).p("Ah1gKQBrAeCAgM");
	this.shape_85.setTransform(10.5,31.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(3,1,1).p("AjAkjICWDwQAwBQASAUQAiAnAngDQA8gEBCAAQAcAAADADQADADgLAIQgkAZACAUQACAcASAJQAbAJAUAJQAYANgwgDQgZgCgqgEQgIAgAYAbQAUAYgPgGQgQgGg0grIgIAEQgJAIgDATIgEAgQAAAQhDiGIgJgMQgPgRghgWQiAhTiXjm");
	this.shape_86.setTransform(-29.2,21.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF00FF").s().p("AAyCsIgJgMQgPgRghgWQiAhTiXjmIBehjICWDwQAwBQASAUQAiAnAngDQA8gEBCAAQAcAAADADQADADgLAIQgkAZACAUQACAcASAJQAbAJAUAJQAYANgwgDIhDgGQgIAgAYAbQAUAYgPgGQgQgGg0grIgIAEQgJAIgDATIgEAgIAAACQgHAAg8h4g");
	this.shape_87.setTransform(-29.2,21.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(3,1,1).p("ADqC/Qgugzg4g8Qhuh1gqgqQgtgqAAgmQAAgTAJgLIAUhDQgngEgYAnQgQAbgmghQghgdgLgfQgLgbgFAWQgGAWAOAxIhTgLQgRgGAfAaQAgAaAVAJIgUAKQgXAJgUAAQgZAAAPAKQAQAKAtAIQAkAYATAPIBDAkQApBRA4BXQBuCsBPAMQBOAMAQgMQAKgHAMgsIAKgr");
	this.shape_88.setTransform(30.8,1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF00FF").s().p("ACvEpQhPgMhuisQg4hXgphRIhDgkQgTgPgkgYQgtgIgQgKQgPgKAZAAQAUAAAXgJIAUgKQgVgJgggaQgfgaARAGIBTALQgOgxAGgWQAFgWALAbQALAfAhAdQAmAhAQgbQAYgnAnAEIgUBDQgJALAAATQAAAmAtAqQAqAqBuB1IBmBvIBDAMIgKArQgMAsgKAHQgIAGgYAAQgXAAgngGg");
	this.shape_89.setTransform(30.8,1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(2,1,1).p("AAFgaQgTAUATAh");
	this.shape_90.setTransform(35.2,-46.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF00FF").s().p("AAFgaIAAA1QgTghATgUg");
	this.shape_91.setTransform(35.2,-46.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(2,1,1).p("AnJheQASAWAlAeQBKA5BfAkQEsBwGHiq");
	this.shape_92.setTransform(-10.6,-46.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF00FF").s().p("AjpAzQhfgkhKg5QglgegSgWIOTBXQjtBmjMAAQiDAAh3gsg");
	this.shape_93.setTransform(-10.6,-46.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(3,1,1).p("AH5gGQgXA5hhBvQiNCiAUCOQiugEg8g3QhZhThPA/QgoAggpgCQgugDhEgvQg8goguAQQgXAIgMARQARgqAHhKQAQiTgsihQgsijAIiLQAEhGANglQB+BFCjBGQFDCNC1ADIDRALIAJA6QAGBDgPAog");
	this.shape_94.setTransform(5.3,39.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAeGXQhZhThPA/QgoAggpgDQgugChEgvQg8goguAQQgXAIgMAQQARgpAHhKQAQiUgsigQgsijAIiLQAEhFANgmQB+BGCjBGQFDCMC1AEIDRAKIAJA6QAGBDgPAoQgXA4hhBwQiNCiAUCOQiugEg8g3g");
	this.shape_95.setTransform(5.3,39.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AJbRAQhTgBjOhTQiuhHgpgcQgigXgMgdQgKgXAEgfIgdgLQgrgWgNgVQgBgFgPgGQgRgHgTAAQgzgDgoAeQgwAkgugHQgcgEgdgUQgeAihIAwQgzAjhpBYIhXBKQgMAIgFACIgFAAQgHAAgEgEQgGgFAAgIQAAgFADgJIAMggQARgxgMgWIgBgCIgCgBQgEgBgJACQgRAFgdATQgUANgYAUIgTAQIgBAAIgVgVIAAAAIABgBIAQgUQATgZAMgWQAQgbAAgRQABgFgCgDQgFgEgGgBQgtgHgqAFIgUADIgMADIgBAAIgIgdIAngKQArgMAVgLQAMgGADgFQgPgOhJgLIACgdIAAgBIACAAIBagFQBlgJAmgQQBAgZAFgMQAGgLgGgVQgJgdgggtQgthDiEi4QhxiggLgnQgKgqgBgOQgCgkAUgaQAzg4CsAoQgMgegBgaQgCgqAegbQAdgbA5gIQg1h2gahFQgdhNAThRQAZhsBthKIADgCIDGiHQAGAFADANIADALIjECFQhkBEgWBgQgQBFAaBIQASAyAjBQIAhBJIAAABIAJATIgWACQg+AFgaAYQgUASABAcQABAXALAaIAJAQIACAFIABABIAWAfIgmgIQi8gyglAwQgWAVAVBHQAIAfBvCeQCFC3AtBEQAiAxAKAhQALAhgNAXQgLATgaAMQgOAHghALQgtAThnAJQALAGAGAHQAHAIgBAKQAAAIgGAJQgIAKgSAJIgBABIARACQAUADAJAMQAJAMgBAQQgBAXgQAdQAcgRATgFQAPgEAMADQAQAEAHAPQAQAggUA9IgBADIBBg3QBrhcA0giQA7goAbgbQAJgJAEgGIACgCIAAgBIAHgRIAQAMQAdAXAaAEQAjAFAlgcQAwgkA+ADQA6AEATAeQAGANAlAQIAaALIALAEIAAAAIANAEIgCANQgHAeAJATQAIAUAbATQAmAbCrBFQCAA0BZAUIAIACIgPgMQgUgNgIgLQgNgRAOgPQANgPArgIIAagEQgagPgQgTQgKgNAAgOQABgMAKgNQALgKALgGQhjgGhpgcQgSgFgKgMQgIgLABgSQACgYAYgiQAgguA5g0QEZj/CMiHQAfgdAIgWQAHgSgJgMQgVgih4gFQhmgEhOAnQgVALgWAQIgnApIAAgnIAPAAIgPhSQgDh3gkh8QgKglgOgkIgIgUIgCgFIgBgBIAAgBIgDgHIAog+IAAgBIABgBQBYhkgZhMQgMgjgpgfQhphQhig0QgcgPgNgYIAUgDIAAABIgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAFAAIADgCQABAAAHgJQAHAHAOAIQBgAzBvBUQAwAjAPAtQAgBchkBxIgeAvQBFClAEC2IAAAzQBfhECKAGQCCAHAjAsQATAagOAhQgLAdgjAhQieCWkHDwQg1AughAvQgTAdgBAPQgBAFACADQAFAFAHABQCrAuB5gOIABAAIABAEIAAADIAEAWIgCAAIgUAFQgYAGgVAIQgZAJgJALQgEADAAACQAAADADAEQAXAbAnANQAJAEAQAEIAIABIACAAIgCAaIABAEIgiABQgpACgXAEQgXAEgMAHQAEAFAOAIIABABIAAABIBdBKgADgsOQABgYAahFQAQgsgMgqQgLgogcgNQgYgLgyAWQgQAHgRAJIgKAFIgDACIAAAAIgUANIgDgXQgGgkgSgQQgPgOgXgBQgdgCg0AWQgXAJhHA5IhgBNIg+AtIgBgEQgFgQgHgIIA5goIBfhOQBMg7AagLQA+gYAgACQAiACAWAVQATARAKAgIAhgQQA9gYAjAOQAOAGAKAJQAdBJAHA7QgEARgEAMIgKAaQgGgDgFACQgIADgEAMIgBABQgEATANASIAAAHQgBAKACAJIgeAEQgDgMACgNgAD/s1IAAgBQADgHADgBQABAAAAgBQABAAAAAAQABABABAAQAAAAABAAIgJAcQgEgLACgIgAEPvpQAQAbACAjQgIgigKgcg");
	this.shape_96.setTransform(9.2,4.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF00FF").s().p("AIeQcQhYgUiAg0QishFglgbQgbgTgJgUQgIgTAGgeIADgNIgNgEIgBAAIgKgEIgbgLQgkgQgGgNQgTgeg6gEQg/gDgvAkQgmAcgjgFQgZgEgegXIgPgMIgIARIAAABIgCACQgEAGgIAJQgcAbg7AoQgzAihsBcIhAA3IABgDQATg9gPggQgHgPgQgEQgNgDgPAEQgSAFgcARQAPgdACgXQABgQgKgMQgIgMgVgDIgQgCIAAgBQATgJAHgKQAGgJAAgIQABgKgHgIQgGgHgLgGQBogJAtgTQAggLAPgHQAZgMAMgTQAMgXgKghQgLghghgxQguhEiEi3QhwiegHgfQgVhHAVgVQAmgwC7AyIAnAIIgWgfIgBgBIgDgFIgIgQQgMgaAAgXQgBgcATgSQAagYA/gFIAVgCIgJgTIAAgBIgghJQgjhQgTgyQgZhIAPhFQAWhgBlhEIC5h+QAJgOAUgEIgBgBIA/gtIBfhNQBIg5AWgJQA1gWAdACQAWABAPAOQASAQAGAkIAEAXIATgNIABAAIACgCIAKgFQARgJARgHQAxgWAYALQAdANALAoQALAqgQAsQgaBFgBAYQgBANADAMIgDAAIADACQAMAMgBANQANATAYAMQBiA0BpBQQApAfALAjQAaBMhYBkIgBABIgBABIgoA+IAEAHIAAABIAAABIACAFIAIAUQAOAkALAlQAkB8ACB3IAAB5IAdggIAKgJQAWgQAVgLQBPgnBlAEQB5AFAVAiQAIAMgGASQgIAWgfAdQiNCHkYD/Qg6A0ggAuQgXAigDAYQgBASAJALQAJAMATAFQBoAcBjAGQgKAGgLAKQgLANAAAMQgBAOALANQAQATAaAPIgaAEQgrAIgNAPQgOAPANARQAIALAUANIAPAMgAkorQIgBABQAEgBACgDIgCAAIgDADg");
	this.shape_97.setTransform(9.1,3.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#A6D514").ss(1,1,1).p("AAKALIgKgDQgIgFgBgGQgBgIAHABQAFACADAIg");
	this.shape_98.setTransform(-15.1,-111);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D9EF7F").s().p("AAAAIQgIgFgBgGQgBgIAHABQAFACADAIIAFALg");
	this.shape_99.setTransform(-15.1,-111);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A6D514").ss(1,1,1).p("AANAOIgNgEQgLgGgBgIQgBgLAJACQAHACAEAKg");
	this.shape_100.setTransform(-14.3,-108.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D9EF7F").s().p("AAAAKQgLgGgBgIQgBgLAJACQAHACAEAKIAGAPg");
	this.shape_101.setTransform(-14.3,-108.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A6D514").ss(1,1,1).p("AAMARIgMgGQgMgJABgJQAAgMAKAEQAHADACAMg");
	this.shape_102.setTransform(-13.8,-105.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D9EF7F").s().p("AAAALQgMgJABgJQAAgMAKAEQAHADACAMIAEARg");
	this.shape_103.setTransform(-13.8,-105.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A6D514").ss(1,1,1).p("AAPAVIgPgIQgOgLAAgKQABgPALAFQAJAEADAOg");
	this.shape_104.setTransform(-13,-103.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D9EF7F").s().p("AAAANQgOgLAAgKQABgPALAFQAJAEADAOIAFAVg");
	this.shape_105.setTransform(-13,-103.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#A6D514").ss(1,1,1).p("AAJgCIAJAVIgRgFQgQgIgCgLQgDgPANADQAKACAGANg");
	this.shape_106.setTransform(-11.9,-100.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D9EF7F").s().p("AABAOQgQgIgCgLQgDgPANADQAKACAGANIAJAVg");
	this.shape_107.setTransform(-11.9,-100.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#A6D514").ss(1,1,1).p("AAUAaIgUgJQgSgNgBgOQAAgTAPAFQAMAGAFARg");
	this.shape_108.setTransform(-11.1,-97.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D9EF7F").s().p("AAAARQgSgNgBgOQAAgTAPAFQAMAGAFARIAHAbg");
	this.shape_109.setTransform(-11.1,-97.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A6D514").ss(1,1,1).p("AAQAdIgQgNQgSgQADgPQAEgSALAIQANAIABARg");
	this.shape_110.setTransform(-10.6,-92.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D9EF7F").s().p("AAAAQQgSgQADgPQAEgSALAIQANAIABARIACAdg");
	this.shape_111.setTransform(-10.6,-92.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A6D514").ss(1,1,1).p("AANAgQgjgaAJgZQAGgTALALQANAKgBARg");
	this.shape_112.setTransform(-11.1,-88.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D9EF7F").s().p("AgNgTQAGgTALALQANAKgBARIgDAgQgjgaAJgZg");
	this.shape_113.setTransform(-11.1,-88.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#A6D514").ss(1,1,1).p("AAOAiQglgcAJgaQAHgUAMALQANAKgCATg");
	this.shape_114.setTransform(-11.7,-84.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D9EF7F").s().p("AgOgUQAHgUAMALQANAKgCATIgCAiQglgcAJgag");
	this.shape_115.setTransform(-11.7,-84.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAQIAFgKQAFgKgFgHQgFgIgEAHQgEAHADAGg");
	this.shape_116.setTransform(-13.9,-111.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D9EF7F").s().p("AgFABQgDgGAEgHQAEgHAFAIQAFAHgFAKIgFAKg");
	this.shape_117.setTransform(-13.9,-111.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#A6D514").ss(1,1,1).p("AAAARIAFgLQAFgKgFgHQgFgJgEAIQgFAHAEAHg");
	this.shape_118.setTransform(-12.7,-108.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D9EF7F").s().p("AgFACQgEgHAFgHQAEgIAFAJQAFAHgFAKIgFALg");
	this.shape_119.setTransform(-12.7,-108.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAUIAHgNQAGgMgHgJQgGgKgFAIQgGAJAFAJg");
	this.shape_120.setTransform(-11.7,-106.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D9EF7F").s().p("AgGACQgFgJAGgJQAFgIAGAKQAHAJgGAMIgHANg");
	this.shape_121.setTransform(-11.7,-106.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A6D514").ss(1,1,1).p("AAAAZIAIgQQAHgQgHgKQgIgMgGAKQgHAKAFAMg");
	this.shape_122.setTransform(-10.2,-103);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D9EF7F").s().p("AgIADQgFgMAHgKQAGgKAIAMQAHAKgHAQIgIAQg");
	this.shape_123.setTransform(-10.2,-103);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#A6D514").ss(1,1,1).p("AgKABIAFAXQAFgFAEgJQALgOgGgLQgGgOgHAJQgJAJADAMg");
	this.shape_124.setTransform(-8.6,-99.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D9EF7F").s().p("AgKABQgDgMAJgJQAHgJAGAOQAGALgLAOQgEAJgFAFg");
	this.shape_125.setTransform(-8.6,-99.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAJgGAGgIQAQgQgEgPQgFgRgLAIQgMAJAAAQg");
	this.shape_126.setTransform(-7.8,-96.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D9EF7F").s().p("AgOAAQAAgQAMgJQALgIAFARQAEAPgQAQQgGAIgJAGg");
	this.shape_127.setTransform(-7.8,-96.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#A6D514").ss(1,1,1).p("AgNAdQAJgGAGgIQAQgPgEgQQgFgRgLAIQgMAJABAQg");
	this.shape_128.setTransform(-7.2,-92);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D9EF7F").s().p("AgNAAQgBgQAMgJQALgIAFARQAEAQgQAPQgGAIgJAGg");
	this.shape_129.setTransform(-7.2,-92);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#A6D514").ss(1,1,1).p("AgTAeQALgEAIgIQAVgQgBgQQgCgUgQAHQgNAHgDATg");
	this.shape_130.setTransform(-7.1,-87.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D9EF7F").s().p("AgOgBQADgTANgHQAQgHACAUQABAQgVAQQgIAIgLAEg");
	this.shape_131.setTransform(-7.1,-87.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#A6D514").ss(1,1,1).p("AgZAaQAMgBAMgGQAXgKADgQQAEgVgRADQgPADgIATg");
	this.shape_132.setTransform(-8,-83.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D9EF7F").s().p("AgLgDQAIgTAPgDQARgDgEAVQgDAQgXAKQgMAGgMABg");
	this.shape_133.setTransform(-8,-83.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#A6D514").ss(1,1,1).p("AgJCnQAGgGAFgMQAPgZAHghQAUhohHiZ");
	this.shape_134.setTransform(-11.7,-94.4);

	this.instance_4 = new lib.frog_stand();
	this.instance_4.setTransform(-2.5,1.9);

	this.instance_5 = new lib.frog_bend();
	this.instance_5.setTransform(-10,1.9);

	this.instance_6 = new lib.frog_jump();
	this.instance_6.setTransform(-61.3,-5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},41).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_3},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},25).to({state:[{t:this.instance_4,p:{skewY:0}}]},3).to({state:[{t:this.instance_5,p:{skewY:0}}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},8).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_6}]},8).to({state:[{t:this.instance_5,p:{skewY:180}}]},1).to({state:[{t:this.instance_4,p:{skewY:180}}]},3).to({state:[{t:this.instance_4,p:{skewY:0}}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({guide:{path:[-61.4,-5.1,-74.8,-34.3,-128.3,-59.4,-186.1,-86.7,-269.1,-55.1,-291.1,-39,-313.1,-22.9,-329.5,-13.7,-332.1,-4.7,-345.1,18.4,-358.2,41.4]}},8,cjs.Ease.get(1)).wait(11).to({skewY:180},0).to({guide:{path:[-358.2,41.4,-345.1,18.4,-332.1,-4.7,-329.5,-13.7,-313.1,-22.9,-291.1,-39,-269.1,-55.1,-186.1,-86.7,-128.3,-59.4,-74.8,-34.3,-61.4,-5.1]}},8).to({_off:true},1).wait(7));

	// Shadow
	this.instance_7 = new lib.Shadow();
	this.instance_7.setTransform(-1.6,94.5,1.4,1.5);
	this.instance_7.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({x:-6.1},0).wait(6).to({scaleX:1,scaleY:0.75,x:-117.2,y:101.3,alpha:0.398},2).to({scaleX:1.4,scaleY:1.5,x:-350.2,y:116.8,alpha:0.52},6).wait(11).to({scaleX:1.22,x:-265.3,y:94.1,alpha:0.398},2).to({scaleX:1.4,x:-71.7,y:107.5,alpha:0.52},6).wait(1).to({x:-14.5,y:92.7},0).wait(3).to({x:-0.3,y:96.2},0).wait(2).to({x:-7.4},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-114.3,192.5,226.6);


(lib.frog = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.frog_complete();
	this.instance.setTransform(102.8,112.8,1,1,0,0,0,13.6,-1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,192.5,226.6);


// stage content:
(lib.quizShownewCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:9,congrats:16});

	// timeline functions:
	this.frame_0 = function() {
		/* if (_root.MMplayerType == undefined) {
			// --- upgrade not needed
			gotoAndPlay(2);
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
					
					getURL("javascript:alert('There was an error in downloading the Flash Player update. Please try again later, or visit macrmedia.com to download the latest version of the Flash plugin.')");
				}
			}
			
			// --- Start upgrade
			loadUpdater();
		}*/
	}
	this.frame_1 = function() {
		/* stop();
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "MultipleChoiceGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/quizShow.xml", "MultipleChoiceGame");
		}*/
	}
	this.frame_2 = function() {
		/* stop();
		
		character = "";
		spotlightEndX = -500;
		
		playNow.onRelease = function() {
			if (playNow._currentframe == 2) {
				gotoAndPlay("game");
			}
		}
		
		selectBoy.onRelease = function() {
			spotlightEndX = 179;
			playNow.gotoAndStop(2);
			character = "boy";
		}
		
		selectGirl.onRelease = function() {
			spotlightEndX = 408;
			playNow.gotoAndStop(2);
			character = "girl";
		}*/
	}
	this.frame_9 = function() {
		//var gameid:Number;
		//var runGame:RunGame = new RunGame(this);
		//stop();
		///*
		//_global.main = this;
		//qNum = -1;
		//charSelect = _global.charPick;
		//answering = false;
		//avail = 10;
		//currentScore = 0;
		//questions = [];
		//answers = [];
		//options0 = [];
		//options1 = [];
		//options2 = [];
		//options3 = [];
		//// Load XML, parse into correct arrays
		//GameVars = new XML();
		//GameVars.ignoreWhite = true;
		//GameVars.onLoad = function(success) {
		//	if (success) {
		//		loadQuestions(this);
		//	}
		//};
		////GameVars.load("quizShow.xml");
		//GameVars.load("../customizer/customVars.php?action=play&gameid="+_root.gameid);
		////GameVars.load("http://www.linguazone.com/_NEW/customizer/customVars.php?action=edit&gameid=99");
		//function loadQuestions(xml_file) {
		//	amount = 4;
		//	var node:Array = xml_file.firstChild.childNodes[2].childNodes;
		//	for (a=0; a<node.length; a++) {
		//		//trace("Question #"+a+" "+node[a].attributes.value);
		//		questionLayer = node[a];
		//		questions.push(questionLayer.attributes.value);
		//		orderedArray = [];
		//		randomArray = [];
		//		for (i=0; i<amount; i++) {
		//			orderedArray.push(i);
		//		}
		//		for (j=0; j<amount; j++) {
		//			randomSpot = random(orderedArray.length);
		//			randomArray.push(orderedArray[randomSpot]);
		//			orderedArray.splice(randomSpot, 1);
		//		}
		//		for (b=0; b<4; b++) {
		//			c = randomArray[b];
		//			//Unlogisch
		//			answerLayer = questionLayer.firstChild.childNodes[c];
		//			trace("answer layer is: "+answerLayer);
		//			trace("    display "+b+" : "+answerLayer.firstChild.attributes.value);
		//			trace("    answer "+answerLayer.firstChild.attributes.decoy);
		//			if (answerLayer.firstChild.attributes.decoy == "correct") {
		//				answers.push(b);
		//				//Not working-- see line below
		//				trace("SEEE        correct answer num == "+b);
		//			}
		//			_root["options"+b].push(answerLayer.firstChild.attributes.value);
		//		}
		//	}
		//	tNum = questions.length-1;
		//}
		////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		////                   Prepare Variables and Stage
		////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		//// Correct spotlight illusion
		//spotlight1.swapDepths(1000);
		//// Create character MC holder
		//attachMovie(charSelect, "char", 50);
		//if (charSelect == "girl") {
		//	char._x = 490;
		//	char._y = 280;
		//} else {
		//	char._x = 475;
		//	char._y = 280;
		//}
		//char.stop();
		//for (i=0; i<=3; i++) {
		//	main["btn"+i]._visible = false;
		//}
		////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		////                               Functions
		////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		//function nextQ() {
		//	for (i=0; i<=3; i++) {
		//		main["btn"+i]._visible = false;
		//	}
		//	main.speech.gotoAndPlay("exit");
		//	currentScore += avail;
		//	avail = 13;
		//	currentPoints.gotoAndPlay("great");
		//	correctAnswer = true;
		//}
		//function wrongChoice(selected) {
		//	main["btn"+selected]._visible = false;
		//	avail -= 3;
		//	if (!correctAnswer) {
		//		currentPoints.play();
		//	}
		//}
		////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		////                              Options
		////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		//for (i=0; i<=3; i++) {
		//	this["btn"+i].i = i;
		//	this["btn"+i].onRollOver = function() {
		//		this.gotoAndStop(2);
		//	};
		//	this["btn"+i].onRollOut = function() {
		//		this.gotoAndStop(1);
		//	};
		//	this["btn"+i].onRelease = function() {
		//		selected = this.i;
		//		correctAnswer = false;
		//		if (selected == answers[qNum]) {
		//			nextQ();
		//			selected = null;
		//		}
		//		if (selected != answers[qNum]) {
		//			wrongChoice(selected);
		//		}
		//	};
		//}
		////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		//this.onEnterFrame = function() {
		//	speech.question = questions[qNum];
		//	btn0.btnText = options0[qNum];
		//	btn1.btnText = options1[qNum];
		//	btn2.btnText = options2[qNum];
		//	btn3.btnText = options3[qNum];
		//	if (!answering) {
		//		btn0.enabled = false;
		//		btn1.enabled = false;
		//		btn2.enabled = false;
		//		btn3.enabled = false;
		//		currentPoints._alpha = 0;
		//	} else {
		//		btn0.enabled = true;
		//		btn1.enabled = true;
		//		btn2.enabled = true;
		//		btn3.enabled = true;
		//		currentPoints._alpha = 35;
		//	}
		//};
		//*/
	}
	this.frame_16 = function() {
		/* stop();
		removeMovieClip(spotlight1);
		char.swapDepths(congrats);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(7).call(this.frame_9).wait(7).call(this.frame_16).wait(10));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egu1AfPMAAAg+dMBdrAAAMAAAA+dg");
	this.shape.setTransform(299.9,199.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(17));

	// Opening spotlight
	this.spotlight = new lib.Spotlight();
	this.spotlight.setTransform(-167.7,149.8);
	this.spotlight.alpha = 0.199;
	this.spotlight._off = true;
	this.spotlight.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 153, 0)];
	this.spotlight.cache(-108,-206,217,412);

	this.timeline.addTween(cjs.Tween.get(this.spotlight).wait(2).to({_off:false},0).to({_off:true},7).wait(17));

	// Opening pic
	this.playNow = new lib.playNow();
	this.playNow.setTransform(532,373.7,1,1,0,0,0,57.5,21);

	this.selectGirl = new lib.girl_no_phone();
	this.selectGirl.setTransform(446.9,171.4);

	this.selectBoy = new lib.boy_no_phone();
	this.selectBoy.setTransform(158.3,187.3,0.7,0.7);

	this.instance = new lib.frog_ask();
	this.instance.setTransform(304.3,319.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.selectBoy},{t:this.selectGirl},{t:this.playNow}]},2).to({state:[]},7).wait(17));

	// Layer 23
	this.instance_1 = new lib.white_spot("synched",0);
	this.instance_1.setTransform(484.8,153.3,0.484,0.467);

	this.instance_2 = new lib.Cirlcewire("synched",0);
	this.instance_2.setTransform(369.3,265.6,0.75,0.745);

	this.instance_3 = new lib.white_spot("synched",0);
	this.instance_3.setTransform(358.8,256.1,0.807,0.781);

	this.instance_4 = new lib.Cirlcewire("synched",0);
	this.instance_4.setTransform(488.4,153.5,0.483,0.49);

	this.instance_5 = new lib.Cirlcewire("synched",0);
	this.instance_5.setTransform(175.9,183.1);

	this.instance_6 = new lib.white_spot("synched",0);
	this.instance_6.setTransform(173.2,189.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[]},7).wait(17));

	// Intro BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#417FCD","#1C4B7A","#1E4E80","#417FCD"],[0,0.255,0.663,1],-6.6,298.8,6.7,-298.8).s().p("EgusAfTMAAAg+lMBdYAAAMAAAA+lg");
	this.shape_1.setTransform(300.5,200.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},7).wait(17));

	// Extra buttons
	this.instance_7 = new lib.playAgain();
	this.instance_7.setTransform(496,373);
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.playAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(10));

	// Speech bubble
	this.congrats = new lib.Congrats();
	this.congrats.setTransform(292.3,328.4,0.9,1,0,0,0,218.1,30.4);

	this.instance_8 = new lib.Shadow();
	this.instance_8.setTransform(294.2,356.4,2.88,1);
	this.instance_8.alpha = 0.379;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, -10)];
	this.instance_8.cache(-64,-12,129,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.congrats}]},16).wait(10));

	// Score
	this.currentPoints = new lib.points_available();
	this.currentPoints.setTransform(43.1,359.5);
	this.currentPoints.alpha = 0.352;

	this.text = new cjs.Text("0", "16px 'Arial'", "#666666");
	this.text.lineHeight = 18;
	this.text.lineWidth = 39;
	this.text.setTransform(549.1,380.2);

	this.text_1 = new cjs.Text("current score:", "16px 'Arial'", "#666666");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 110;
	this.text_1.setTransform(441,379.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text},{t:this.currentPoints}]},9).to({state:[]},7).wait(10));

	// Spotlight
	this.spotlight1 = new lib.Spotlight();
	this.spotlight1.setTransform(493,178.5);
	this.spotlight1.alpha = 0.199;

	this.text_2 = new cjs.Text("80", "70px 'Arial'", "#0066CC");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 72;
	this.text_2.lineWidth = 93;
	this.text_2.setTransform(294.1,117);

	this.text_3 = new cjs.Text("80", "70px 'Arial'", "#CCCCCC");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 72;
	this.text_3.lineWidth = 93;
	this.text_3.setTransform(297.2,119.2);

	this.text_4 = new cjs.Text("Final Score:", "bold 30px 'Comic Sans MS'", "#FFFFFF");
	this.text_4.lineHeight = 32;
	this.text_4.lineWidth = 179;
	this.text_4.setTransform(209.8,70.4);

	this.text_5 = new cjs.Text("Final Score:", "bold 30px 'Comic Sans MS'", "#666666");
	this.text_5.lineHeight = 32;
	this.text_5.lineWidth = 179;
	this.text_5.setTransform(207,72.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.spotlight1,p:{scaleX:1,scaleY:1,x:493,y:178.5}}]},9).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.spotlight1,p:{scaleX:1.8,scaleY:1.8,x:293,y:30.8}}]},7).wait(10));

	// Spotlight2
	this.spotlight2 = new lib.Shadow();
	this.spotlight2.setTransform(494.8,351.9,1.674,3.108);
	this.spotlight2.alpha = 0;
	this.spotlight2._off = true;
	this.spotlight2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.spotlight2.cache(-64,-12,129,24);

	this.timeline.addTween(cjs.Tween.get(this.spotlight2).wait(9).to({_off:false},0).to({_off:true},7).wait(10));

	// BG
	this.instance_9 = new lib.Interior();
	this.instance_9.setTransform(263.9,127.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;