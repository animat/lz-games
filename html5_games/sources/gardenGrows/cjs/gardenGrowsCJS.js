(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"rsc/mma/whiteglow.png", id:"whiteglow"},
		{src:"sounds/bellwav.mp3", id:"bellwav"},
		{src:"sounds/blossommp3.mp3", id:"blossommp3"}
	]
};



// symbols:



(lib.whiteglow = function() {
	this.initialize(img.whiteglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,345);


(lib.whiteglowingoutline = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.whiteglow, null, new cjs.Matrix2D(1,0,0,1,-299,-172.5)).s().p("EgutAa8MAAAg14MBdaAAAMAAAA14g");
	this.shape.setTransform(299,172.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,598,345);


(lib.submit = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("Submit", "bold 11px 'Verdana'", "#FFFF00");
	this.text.lineHeight = 13;
	this.text.lineWidth = 47;
	this.text.setTransform(-27,-13.1);

	this.text_1 = new cjs.Text("Submit", "bold 11px 'Verdana'");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(-26.3,-12.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#037017").s().p("AgpASQgGAEgFAIQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAWgWIABgHQACgMAIgLIgFAKQgFAMACAHIAcgLQgBgEACgGQADgMAKgIIgHAIQgGALAAALIAXgEIAGgIQAJgIAJgEQgNAGgKAOIAXgBIAEgCIgCACIAGgBIgMAEIAFAHQgDAAgEgHIgJABIgHAAIgMgBIABAHQAEAGAKAIQgPgHgCgNQgLABgKAFIACAJQAFALAOAGQgTgEgFgWQgPAHgGAFIgGAEIACAGQADAHAIAHQgLgFgDgNg");
	this.shape.setTransform(24.7,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#028E1F").s().p("Ag3AdQAAgJAFgLQAHgUAQgKQAjgXAmAPIgBAAQgPAJgKgFQgDgBgDADQgHAEgDADQgEAHgBABQgBgBACgKQACgGgJADQgHABgHAJIgKAOIABgMIgNAPQgGAJAGAIIAFAGIgCgIIAHAAIAJAGQAFADACAAQAEABAHgDQAGgCAAgDIgEgFIgFgGQgCgFAAgCIAHADIAFAGQAHAEAFAAQAKAAgBgGIgGgFQgIgGAFgCIAFACIAFADIAIACQACAAAGgDIARgHIgQAIQgTASgQAHQgNAIgQAAQgPAAgQgHg");
	this.shape_1.setTransform(24.8,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009F29").s().p("Ag9AdQAAgJAFgLQAHgUAQgKQAjgXAmAPIgGAGQgFAFAEACQAGAEALgLIAMALQgMAFgQAKQgTASgPAHQgOAIgQAAQgPAAgQgHg");
	this.shape_2.setTransform(25.4,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#037017").s().p("AgVAuQAEgFADgVQgIAEgHAIIgGAIQAIgPANgGIAJgZQgIgEgKAFIgIAFQAPgOAMAGQAEgNAMgPQgHgFgIACIgJADQAOgJALAHQAMgQAKgDQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAAAIgMAJQAJAIABAOQgDgLgEgGIgEgDIgFAEIgOAVQAPAMgDAYQAAgSgHgKIgHgFIgJAWQAJAGABAUQgCgOgEgHIgFgDIgDAOIgFARQAFAHgCAEIgDgIIgGALIABgFIgJAKQAEgHAGgFg");
	this.shape_3.setTransform(7.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#028E1F").s().p("AgIArQAEgFAAgCIAAgJIgBgIIgBgHQACgEAEALIABAIQAFAEACgMQABgGgCgJIgCgIQgCgJACAAIAEAFIAEAHIACAFQADADADgHQAEgIAAgEIAAgJIgCgLIACgJIAFAFIgDgIQgFgJgIAEIgIAFQgGADAAACIAJACIgNAHQgJAGgCAGQgEAMAEABIAJAAIgIAFQgEAAgFAHQgCADAAADQABAPgLANQgCguAcgiQARgYAbAIQACApgSAcIgbAgIgKAMIAKgPg");
	this.shape_4.setTransform(7.2,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009F29").s().p("AgfA2IgEgOQgBgcAFgQQAFgWARgUQARgYAbAIQACApgSAcIgbAgQgOAOgGAMg");
	this.shape_5.setTransform(7.2,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#037017").s().p("ACTAZIgRgKQgMgIgegHIgagGQgFApgiAdQgRAPgOAGQAtgcANglQAEgMAAgIIAAgJQgXgHgbAAIgVABQAAAsguAfQAwgwgHgcIgmAJQgJACgMACIgZADQgKAXgLAAQARgLgDgMQg4gIgYAJQAWgLAmAFQgHgHgPgHIgNgGQAVAFAUAPQARAEA0gOQgfglgpgKQAtAJAgAkQAlgJAkAFQgDgsgggZQAVAPALAZQAIAQAAANQAoAFAxAQQADgqgmgtQAtAtgDAsQAzAWAWAfQgBAEgEgCQgLgNgOgJIgLgHQgIApgfAWQAkgmgDgcg");
	this.shape_6.setTransform(-10.8,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#028E1F").s().p("AgPBeQgfgJgjgVIgwgcQgVgKgVgIIAxAPQARAHAGgBQAJgDAOgJQAHgEAIgJIAPgOQANACgTAcIgKAKQgGAHgBAEQgBAIAMAEQALACAHgBQAMgDAXgSIASgVQARgSACAEQACAEgHASIgMAUIgPAUQAAAJAIABIAPABQALgCAXACQAJgDANgNIAXgVIAXgFQgBAJgGARQAMgLAFgJQAOgdgUgVIgVgVIgMgMQgHgIgFAAIAIATQAFANgEAHIgkgrQgXgWgUAAIgUABQgNACAGAMIALAPQADAJgBAHQgFAAgIgHIgLgLQgJgJgXgJQgLgFgHAFQggAWgtgSIgBgBQBvhGByAxQAzAWAdA7QAPAfAEAbQhDAqhBAAQgdAAgagHg");
	this.shape_7.setTransform(-8.6,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009F29").s().p("AAFBeQgdgJgjgVIgwgcQgygZgkgGIAUgXQAXgcAGgEQBBgpAwgHQA7gKBDAcQAzAWAdA7QAPAfAEAbQhDArhBAAQgdAAgcgIg");
	this.shape_8.setTransform(-10.8,-1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#037017").s().p("AAnAYIgMgLQgJgKAAABIgDAGQgBAJAEAOIgDgKQgDgMAEgIQgKgGgKgEIgDAHQgCANAJARQgDgFgDgHQgFgPAEgKQgPgHgIAAIgGgBIgCAGQgBAIADAJQgGgKAEgNQgHgBgIADQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAABgBIAIgCQAJgBALACIAGgHQAIgIAMgDIgKAFQgKAGgDAIIAbAKIAGgHQAHgEAJAAQgOAAgHAMIAWANIAJgBQALgBAJAEQgOgFgOAFIATAPIAFABIgEAAIAEAEQgEgDgHgDIABAKQgDgCAAgJg");
	this.shape_9.setTransform(15.1,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#028E1F").s().p("AAjAiQgZAAgOgFQgfgLgUghIAPgMQARgMARADQAnAIAXAnIgCAAQgPgEgGgKQgBgCgFgBQgHgCgEABIgKAAIAIgGQAFgDgLgGQgGgEgHACIgRAFIAJgJIgKABIgJACQgJADAAALQAAAEACAEIABgIIAGAFIAEAIQACAHACACQACADAIADQAHAFAAgDIgBgJIgBgIQAAgEACgBQACAAACAGIADAJQABAJAEAEQAIAIACgGIgBgJQgDgMAEACQACAAABAHIADAGIAEAIQACACAGAAIATAGIgRgDg");
	this.shape_10.setTransform(15.2,3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009F29").s().p("AAfAgQgaAAgOgFQgfgLgTghIAOgMQARgMARADQAnAIAXAnIgHAAQgHABACAFQADAGAOAAIAEASQgMgFgRgCg");
	this.shape_11.setTransform(15.6,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#037017").s().p("AiYAlQgSAJgUAWQgDACgBgFQAWggA0gXQgBgsAugvQgoAvADApIAdgJQAjgLAZgDIAJgeQAOghAjgTQgwAcgFA2IAWgDQAcgBAXAFIAWgUQAcgVAcgHQgqALgfAnIAcAGQAfAFAKgEIANgIQAPgKANgDQgYAJgMANIAWgCQAZAAAOAHQgYgKg5AKIABAHQADAJAJAGQgKABgKgXQgLAAgNgCQgIAAgOgEIglgHIACATQAIAbAdAcQgtgcABgtQgigDglALIgBAHQAAALAEAMQANAkArAbQgOgGgQgOQghgcgEgpQgxAKgUANIgSAJIADATQAHAYAWAYQgegWgHgog");
	this.shape_12.setTransform(8.3,-7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#028E1F").s().p("AivA/QAFgaAQggQAfg8AzgXQB0g1BsBCIgBABQguATgfgVQgGgEgMAFQgYALgIAIIgMAMQgHAHgFAAQgCgGAEgKIAKgPQAHgMgNgCIgTAAQgWABgWAWIglAtQgEgIAGgNIAIgTQgFAAgIAJIgMAMIgWAVQgTAVAMAdQAFAKAMAKIgHgZQAAgDALADQAJACADACQAGADARARQANANAJADQAKADAYgGQAYgBgCgKIgOgTIgLgUQgHgQACgFQACgFAIAHIAJALQAPAQADAEQAXARALADQAHABALgDQAMgEgBgIQAAgEgHgHIgJgJQgEgGgEgKQgEgMAGAAIAPALQAIAJAHAEQAOAJAJABQAGACARgIQASgIAmgLQgZAJgZANIgwAeQgkAWgfAJQgdAKggAAQg+AAg/gng");
	this.shape_13.setTransform(6.4,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009F29").s().p("AjCA/QAFgaAQggQAfg8AzgXQB0g1BsBCQgJAGgIAHQgQAQAKAHQAQANAlgZIAgAoQgkAFg0AbIgwAeQgkAWgdAJQgfAKggAAQg+AAg/gng");
	this.shape_14.setTransform(8.3,-7.7);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-18,61.9,36.2);


(lib.stem_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CC33").ss(5,1,1).p("AAYCWQhfiWBfiV");
	this.shape.setTransform(2.4,15);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9.8,35);


(lib.stem_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CC33").ss(5,1,1).p("AgNCbQA5ibg5ia");
	this.shape.setTransform(1.5,15.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,36.1);


(lib.stem_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CC33").ss(5,1,1).p("AAAAMIAAihAAAA3IAABf");
	this.shape.setTransform(2.6,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC33").s().p("AhxBsQhAhZBugbQAuAWAQAWQANAVgNAVQgRAWgyAUQgIADgHAAQgPAAgLgPgAAXgEQg/hZBsgdQCOBHiTA5QgHADgHAAQgQAAgKgNg");
	this.shape_1.setTransform(3.3,12.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-2.5,27.6,35);


(lib.stem_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CC33").ss(5,1,1).p("AAAgRIAACnAAAhQIAAhF");
	this.shape.setTransform(1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC33").s().p("AgsAzQgJgMgFgLQgUgkAUgZQAQgVAqgLQCNBFiQA7QgIADgHAAQgPAAgLgPg");
	this.shape_1.setTransform(6.9,10.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-2.5,15.5,35);


(lib.signal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tryAgain:1,goodJob:2});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_1 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_2 = function() {
        this.stop();
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// 图层 1
	this.text = new cjs.Text("Try Again!", "37px 'Comic Sans MS'", "#FFFFFF");
	this.text.lineHeight = 39;
	this.text.lineWidth = 183;
	this.text.setTransform(-93.4,-27.8);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1).to({text:"Good Job!"},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.playNow = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play the game!", "34px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 199;
	this.text.setTransform(99.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Av1GzIAAtkIfrAAIAANkg");
	this.shape.setTransform(101.5,42.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,203,87);


(lib.playagain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play again?", "20px 'Arial'", "#375902");
	this.text.lineHeight = 22;
	this.text.lineWidth = 265;
	this.text.setTransform(-87,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A1ECaIAAk0MAqKAAAIAAE0g");
	this.shape.setTransform(44,15.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91,0,273,31);


(lib.ground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#315E02").s().p("EgvBACSQABguAhgnIAhgeIAVBLICEhFIgXAZQgNAaAyAGQBQAMAIgcIDSAzQg5glgwgmQhjhLAlgEQAkgDBqBEQA1AkAsAkQgTgwgNgsQgahYAlAPQA6AXAeB8QAVgWAXgVQAtgqADAMQAGATgpAxIDFAuQhOgngUgzQgHgQABgOIACgNQAAAvC9A/QgtghAGgpIARgkIBIBcQAMg0APgtQAeheAQAbQAbArgpB/QAegVAhgTQBBgnAKAKQAGAJgpAkQgnAhAQADQAdAFBWgLQgjgUAMgrQAFgRAIgEQAKgFAIAOQAVApAeAWIAsiqQAkAZAABQQAAApgIAkIBmAAIAlgoIDvAiIhRhRQBHAFDuBIQgdgNgRgXIgOgiQA2AQCZA/QgqgVgbgxIgXg1QBTAOA2AvQAbAZALAVQgRg6Acg1IAhgqQAkAggDBCQgCAhgJAbQArAAAlgzQAVAuD/AXQhSgZg9gqIguglQBJAADHBRQgjgTAHgWQABgKALgLIALgIQATA6DcAjQhPg2gKg2QgEgOAEgPIAFgLQBHAUA1BoQgMgkAagfQALgMAQgJIAPgHIAAB3QADgHAOgIQAbgQAxgDQBQgHBYhZQADAlhBA4QgYATABAGQABAIAogCQB0gFAWgdICLAiIhJgzQBeAACDA5QhEgrgYhPQgIgZgBgaIgBgVQBAAhA9BYQARAZAOAXQgLgrBCgWQAugOA4AAIgTAMQgWAQgJANQgfAqBfADQBfAFAggRQAOgHgDgJQAdAuDEgGQg/gLhBg1Ig1gxQBRAABbAsIAjATQg7gxgMhFQgGgeAEgeIAEgXQBQAWBXC3QgFggAggZIAfgQQAABCCVAKQBLAFBKgIQgug3gdgrQg5hbBRAvQCBBKARAzQgHgYAbgYQAZgYAggHQAjgHANAYQAPAagYBCQAohKBJgRQAMA4gWAVQAiACBDABQA6ABAmAIQiFgcAphBQAVgiA2ggQgHAFAQAzIAUA7QBEiSBVgDIAEAuQABAdgHARQgGASgZAWQgaAWgGAPQAEgHApAGQApAGAlAOQApAPACANQADAPg7AIQB7AHA0ghQgLgMgpgaQgjgWgKgTQgNgVAHhfQANASA5AoQAxAjANAdQAPgtAKgWQAOgmAmgTQAFAaAEBpQAVAAAkgQQAkgPAUgBQgCAUgJAeQgFAYAPAWQA8A6ADgBg");
	this.shape.setTransform(301.7,17);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,2.3,602,29.4);


(lib.flower3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#896A5D").s().p("Ag1BPQgighAAguQAAgtAighQAhghAtAAQAiAAAdATQhIgEgnAoQgtAsAfBCQAWAvA0AKIgMABQgtAAghghg");
	this.shape.setTransform(28,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9E6305").ss(1,1,1).p("ABShRQAiAiAAAvQAAAwgiAiQgiAjgwAAQgvAAgigjQgigiAAgwQAAgvAigiQAigjAvAAQAwAAAiAjg");
	this.shape_1.setTransform(30.3,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#604335").s().p("AhRBSQgigiAAgwQAAgvAigiQAigjAvABQAwgBAiAjQAiAiAAAvQAAAwgiAiQgiAjgwAAQgvAAgigjg");
	this.shape_2.setTransform(30.3,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E5468").s().p("AAVBhQgSgGgNggQghhkghg4QBSBTA4BOQAEAHALAEQgcAXgUAAIgIgBg");
	this.shape_3.setTransform(42.3,46.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E5468").s().p("AAFBBQg1gTgQgIQgdgPAAgVQABgWAognQApgnAXAAQAVgBAQAeQgigIgTAdQgWAeAZAcQAqAqA1AwQgggRg5gSg");
	this.shape_4.setTransform(14.1,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B29E0F").ss(1,1,1).p("AACACQAlAkBBAbQAlAPBBAWQAwASAGAXQAHAbgxAwQgwAxgcgHQgVgGgTgvQgWhBgPgmQgbhBgkglgAgBgBQgmglhAgaQhKgagdgLQgvgTgGgWQgHgbAwgxQAxgwAbAHQAWAFATAwQALAdAaBJQAaBBAlAmIADAD");
	this.shape_5.setTransform(30.4,30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#82768C").s().p("ACOEEQgVgFgTgwQgWhBgPgmQgbhAgkgmQAlAkBBAbQAlAPBBAWQAwATAGAVQAHAcgxAxQgqAqgaAAIgIgBgAhnhAIhnglQgvgTgGgVQgHgcAwgxQAxgwAbAHQAWAGATAwIAlBmQAaBAAlAmQgmgkhAgbg");
	this.shape_6.setTransform(30.4,30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E5468").s().p("AgGg4QANgjAQgJQAUgKAdAWQgTgCAAAGQgrBkhRBYQAhg3Aghpg");
	this.shape_7.setTransform(41.4,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E5468").s().p("AgxA7QgngmgCgWQgCgVAcgPQARgKAygRQA6gUAegOQgtAjhcBEQgQAPAZAeQAVAZAkAYIgDAAQgYAAgqgog");
	this.shape_8.setTransform(12.8,46.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B29E0F").ss(1,1,1).p("AACgBQAlgmAbhCQAQglAWhCQATgwAWgGQAcgHAwAwQAxAxgHAbQgGAWgwATQhCAXgmAPQhBAcgmAlgAgBACIADgDAgBACQglAmgbBBQgQAmgWBCQgTAwgWAGQgcAHgwgwQgxgxAHgcQAGgWAwgTQBCgWAlgPQBCgcAmglg");
	this.shape_9.setTransform(29.6,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#82768C").s().p("AjcDeQgxgxAHgcQAGgWAwgTQBCgWAlgPQBCgcAmglQglAmgbBBQgQAmgWBBQgTAxgWAFIgIACQgagBgqgpgABChpQAQglAWhCQATgwAWgGQAcgHAwAxQAxAwgHAbQgGAXgwATQhCAWgmAQQhBAbgmAlQAlgmAbhCg");
	this.shape_10.setTransform(29.6,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5E5468").s().p("AAgAlQhqgwg0gHQA+gNA3gaIgDAfQgDATAGAFQA7ApBNAHQgIAMgTAAQgZAAgrgVg");
	this.shape_11.setTransform(45.6,32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5E5468").s().p("AhdAAQAAhGAcgJQAUgGA2AbQgfABgTAmQgUAkAWAAQBGAGA/gEQgZAJgzAaQgoAVgSAEIgMACQgpAAAAhRg");
	this.shape_12.setTransform(9.9,30.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B29E0F").ss(1,1,1).p("AADAAQAyAAA/gaQAkgPA7gfQAugVASAMQAYAOAABDQAABFgYAOQgSALgugUQg7gfgkgQQg/gagygBgAgBAAQgzABg/AaQgkAQg7AfQgtAUgTgLQgYgOAAhFQAAhDAYgOQATgMAtAVQAbAMBEAiQA/AaAzAAIAEAA");
	this.shape_13.setTransform(29.9,30.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#82768C").s().p("ADTBJQg7gegkgQQg+gbgzAAQAzAAA+gaQAkgPA7ggQAugUASALQAXAOAABEQAABEgXAOQgHAFgKAAQgSAAgdgOgAkSBSQgYgOAAhEQAAhDAYgPQATgLAtAUIBfAvQA+AaAzAAQgzAAg+AbQgjAQg8AeQgdAOgSAAQgKAAgHgFg");
	this.shape_14.setTransform(29.9,30.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E5468").s().p("AgpB5QgIgTAUguQAdg4AMgkQAZg8ABgyQAAAZAGAZQgDAmgHAiQgEAPgdAuQgVAwASAkQAJASASAIQg4gCgKgYg");
	this.shape_15.setTransform(26.3,45.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5E5468").s().p("AgYAhQgghAgMgbQgTgsALgSQANgXA/AAQBIAAAJAeQg2gXgeAYIgEAEQgLANAFAyQAPCDABATQgDAWAAARQAAgygYg9g");
	this.shape_16.setTransform(30.1,14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B29E0F").ss(1,1,1).p("AAAgCQAAg0gag/QgihGgMgbQgVgvAMgTQAOgYBDAAQBFAAAOAYQALATgUAvQgfA8gQAlQgaA/gBA0gAAAADQABA0AaA/QAQAlAfA8QAUAvgLATQgOAYhFAAQhDAAgOgYQgMgTAVgvQAfg8APglQAag/AAg0IAAgF");
	this.shape_17.setTransform(30.1,30.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#82768C").s().p("AhREYQgMgSAVgvQAeg9AQgkQAag/AAg0QAAA0AbA/QAQAkAeA9QAVAvgMASQgOAZhEAAQhDAAgOgZgAgah1IguhhQgVgvAMgSQAOgZBDAAQBEAAAOAZQAMASgVAvQgeA9gQAkQgbA/AAA0QAAg0gag/g");
	this.shape_18.setTransform(30.1,30.5);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.8,63);


(lib.flower2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604335").s().p("AhdgsIgbgLIAWgFQAWgCAJAJQAOANAJghIAdAYIArgdIAAAmIAlgOQAogOAPACQgaAWgcAeQg3A4gLAlQhGhwgXgLg");
	this.shape.setTransform(24.9,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B29E0F").ss(1,1,1).p("ABYDbQg0hFguhXQhhirAQhXQAQhVBTDoQArBzAsCR");
	this.shape_1.setTransform(14.7,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#82768C").s().p("AgKA/QhhirAQhXQAQhVBTDoQArBzAsCRIgHAHQg0hFguhXg");
	this.shape_2.setTransform(14.7,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B29E0F").ss(1,1,1).p("AgFDsQgPhugJhxQgSjhAggUQAQgMAPAyQAOAvAEBOQALDAgyBxg");
	this.shape_3.setTransform(22.1,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82768C").s().p("AgdANQgSjhAggUQAQgMAPAyQAOAvAEBOQALDAgyBxQgPhugJhxg");
	this.shape_4.setTransform(22.1,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B29E0F").ss(1,1,1).p("Ag0DXQAChcALhjQAXjEAqgkQAZgUACAxQACAsgQBSQgnDBg0BLg");
	this.shape_5.setTransform(29.8,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#82768C").s().p("AgnAYQAXjEAqgkQAZgUACAxQACAsgQBSQgnDBg0BLQAChcALhjg");
	this.shape_6.setTransform(29.8,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B29E0F").ss(1,1,1).p("ABdinQgogJhRCsQgqBUgiBYIATAAQA9hQAzhSQBrijgpgKg");
	this.shape_7.setTransform(37.4,25.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#82768C").s().p("AhoCoQAihYAqhUQBRisAoAJQApAKhrCjQgzBSg9BQg");
	this.shape_8.setTransform(37.4,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B29E0F").ss(1,1,1).p("ABbBgQgbg4gjgxQhEhngnAVQgoAWBaBOQBLBFAsASg");
	this.shape_9.setTransform(9.2,31.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#82768C").s().p("AgcAJQhahOAogWQAngVBEBnQAjAxAbA4QgsgShLhFg");
	this.shape_10.setTransform(9.2,31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B29E0F").ss(1,1,1).p("AAfAOQhQBNgqgFQAigyAngsQBMhcAaASQAeAVhTBLg");
	this.shape_11.setTransform(39.6,32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#82768C").s().p("AhbBWQAigyAngsQBMhcAaASQAeAVhTBLQhLBIgpAAIgGAAg");
	this.shape_12.setTransform(39.6,32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5E5468").s().p("Ag3CDQgpg1glg3QhLhrASgJQASgIAtA+QAXAfATAfQgMgpgHgqQgOhUAbAIQAsAMASB/QADgqAHgqQAQhUAXAPQAZAPgFBEQgCAigGAcQAQgnARggQAig/ARAWQAbAkg5BgIA8glQA6gegLAvQgSBJh6BGQgQAKgWADQgJACgHAAQgfAAgXgWg");
	this.shape_13.setTransform(24.4,28.4);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,50.9,54.7);


(lib.flower1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#604335").s().p("AhbgvQAAgrgEgdIgGgUIAiBMIAlg1IAAArIBHg4IgPA9IBMguIgZBkQgkBrg0AvQhQh4AAhDg");
	this.shape.setTransform(10.9,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B29E0F").ss(1,1,1).p("AAIDqQgUhTgNhjQgZjDAvhKQAthJgID3QgEB6gNCY");
	this.shape_1.setTransform(3.5,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#82768C").s().p("AgZA0QgZjDAvhKQAthJgID3QgEB6gNCYIgJADQgUhTgNhjg");
	this.shape_2.setTransform(3.5,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B29E0F").ss(1,1,1).p("AghDrQgEhvAChyQAEjhAggRQATgJAKAyQAKAwgEBOQgIDAg9Bsg");
	this.shape_3.setTransform(10,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82768C").s().p("AgjAKQAEjhAggRQATgJAKAyQAKAwgEBOQgIDAg9BsQgEhvAChyg");
	this.shape_4.setTransform(10,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B29E0F").ss(1,1,1).p("Ag0DWQAChbALhjQAWjEArgkQAZgUACAxQACArgQBSQgnDBg0BLg");
	this.shape_5.setTransform(16.8,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#82768C").s().p("AgnAYQAWjEArgkQAZgUACAxQACArgQBSQgnDBg0BLQAChbALhjg");
	this.shape_6.setTransform(16.8,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B29E0F").ss(1,1,1).p("Ag7CzQAwhZAlhaQBPiygqgDQgpgDg1C4QgbBagTBcg");
	this.shape_7.setTransform(22.4,26);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#82768C").s().p("AgfAAQA1i4ApADQAqADhPCyQglBagwBZIgSADQAThcAbhag");
	this.shape_8.setTransform(22.4,26);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,32.2,61.8);


(lib.foreignCharBtn = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Need to type a foreign character?", "bold 10px 'Verdana'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.lineWidth = 105;
	this.text.setTransform(52.5,0);

	this.text_1 = new cjs.Text("Need to type a foreign character?", "bold 10px 'Verdana'", "#000099");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 12;
	this.text_1.lineWidth = 105;
	this.text_1.setTransform(53.3,0.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,0,102,0)").s().p("AoaCgIAAk/IQ2AAIAAE/g");
	this.shape.setTransform(53,16);

	this.addChild(this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,110.8,32);


(lib.foreigntoolbatbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3C65AA").ss(2.5,1,1).p("AnLiGQg+ABgsAnQgsAoAAA2QAAA3AsAoQAsAnA+ABIOXAAQA+gBAsgnQAsgoAAg3QAAg2gsgoQgsgng+gBg");
	this.shape.setTransform(61,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A4BEFD","#B5E8FD"],[0.173,1],0,-21.5,0,21.5).s().p("AnKCGQg/AAgrgnQgsgogBg3QABg2AsgoQArgnA/gBIOWAAQA9ABAtAnQAsAoAAA2QAAA3gsAoQgtAng9AAg");
	this.shape_1.setTransform(61,13.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,124.5,29.5);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C65AA").s().p("AgehaIA9BaIg9Bbg");
	this.shape.setTransform(6.8,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGh2IADAAIAAAAIASAAIAAABQAsAHAgAbQAsAjAAAwQAAAxgsAjQggAbgsAHIgSABIgDAAgAgiBYIA+hZIg+hbg");
	this.shape_1.setTransform(7.2,13.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.5,14.3,24);


(lib.toolbarstartbuttonbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3C65AA").ss(2.5,1,1).p("ACMhpQgOgdgWAAIjQAAQgVAAgPAdQgPAeAAApIAABFQAAApAPAdQAPAeAVAAIDQAAQAWAAAOgeQAQgdgBgpIAAhFQABgpgQgeg");
	this.shape.setTransform(15.6,13.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#FFFFFF"],[0.173,1],0,-15.6,0,15.6).s().p("AhnCHQgWgBgPgdQgPgdAAgpIAAhFQAAgpAPgeQAPgdAWAAIDPAAQAWAAAOAdQAQAeAAApIAABFQAAApgQAdQgOAdgWABg");
	this.shape_1.setTransform(15.6,13.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,33.7,29.5);


(lib.mask = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("EgkiAEhIAApBMBJFAAAIAAJBg");
	this.shape.setTransform(233.9,29);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,467.8,58);


(lib.letter_btn = function() {
	this.initialize();

	// Text
	this.text = new cjs.Text("", "14px 'TimesNewRomanPSMT'", "#000066");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 13;
	this.text.setTransform(8.1,3.4);

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABlgsQAAgrgugBQgCAAgBAAIhmAAQgGAAgEAAQgoAEAAAoIAABZQAAAoAoAEQAEAAAGAAIBmAAQABAAACAAQAugBAAgrg");
	this.shape.setTransform(10.2,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.502)").s().p("AAzBZIhlAAIgKAAQgogEAAgoIAAhZQAAgoAogEIAKAAIBlAAIAEAAQAuABAAArIAABZQAAArguABIgEAAg");
	this.shape_1.setTransform(10.2,13.2);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,3.3,22.4,20);


(lib.congratsbg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(165,217,252,0.922)").s().p("A7PLOIAA2bMA2fAAAIAAWbg");
	this.shape.setTransform(174.5,71.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,349,143.8);


(lib.congratswindow = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Congrats!", "32px 'Arial'", "#375902");
	this.text.lineHeight = 34;
	this.text.lineWidth = 268;
	this.text.setTransform(28,69.3);

	this.text_1 = new cjs.Text("Great job, you beat Garden Grows!", "16px 'Verdana'", "#375902");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 335;
	this.text_1.setTransform(28,115);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(28,69.3,339,99.7);


(lib.cancel = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("Cancel", "bold 11px 'Verdana'", "#FFFF00");
	this.text.lineHeight = 13;
	this.text.setTransform(-26.5,-13.6);

	this.text_1 = new cjs.Text("Cancel", "bold 11px 'Verdana'");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(-25.9,-12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#037017").s().p("AgpASQgGAEgFAIQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAWgWIABgHQACgMAIgLIgFAKQgFAMACAHIAcgLQgBgEACgGQADgMAKgIIgHAIQgGALAAALIAXgEIAGgIQAJgIAJgEQgNAGgKAOIAXgBIAEgCIgCACIAGgBIgMAEIAFAHQgDAAgEgHIgJABIgHAAIgMgBIABAHQAEAGAKAIQgPgHgCgNQgLABgKAFIACAJQAFALAOAGQgTgEgFgWQgPAHgGAFIgGAEIACAGQADAHAIAHQgLgFgDgNg");
	this.shape.setTransform(24.7,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#028E1F").s().p("Ag3AdQAAgJAFgLQAHgUAQgKQAjgXAmAPIgBAAQgPAJgKgFQgDgBgDADQgHAEgDADQgEAHgBABQgBgBACgKQACgGgJADQgHABgHAJIgKAOIABgMIgNAPQgGAJAGAIIAFAGIgCgIIAHAAIAJAGQAFADACAAQAEABAHgDQAGgCAAgDIgEgFIgFgGQgCgFAAgCIAHADIAFAGQAHAEAFAAQAKAAgBgGIgGgFQgIgGAFgCIAFACIAFADIAIACQACAAAGgDIARgHIgQAIQgTASgQAHQgNAIgQAAQgPAAgQgHg");
	this.shape_1.setTransform(24.8,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009F29").s().p("Ag9AdQAAgJAFgLQAHgUAQgKQAjgXAmAPIgGAGQgFAFAEACQAGAEALgLIAMALQgMAFgQAKQgTASgPAHQgOAIgQAAQgPAAgQgHg");
	this.shape_2.setTransform(25.4,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#037017").s().p("AgVAuQAEgFADgVQgIAEgHAIIgGAIQAIgPANgGIAJgZQgIgEgKAFIgIAFQAPgOAMAGQAEgNAMgPQgHgFgIACIgJADQAOgJALAHQAMgQAKgDQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAAAIgMAJQAJAIABAOQgDgLgEgGIgEgDIgFAEIgOAVQAPAMgDAYQAAgSgHgKIgHgFIgJAWQAJAGABAUQgCgOgEgHIgFgDIgDAOIgFARQAFAHgCAEIgDgIIgGALIABgFIgJAKQAEgHAGgFg");
	this.shape_3.setTransform(7.2,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#028E1F").s().p("AgIArQAEgFAAgCIAAgJIgBgIIgBgHQACgEAEALIABAIQAFAEACgMQABgGgCgJIgCgIQgCgJACAAIAEAFIAEAHIACAFQADADADgHQAEgIAAgEIAAgJIgCgLIACgJIAFAFIgDgIQgFgJgIAEIgIAFQgGADAAACIAJACIgNAHQgJAGgCAGQgEAMAEABIAJAAIgIAFQgEAAgFAHQgCADAAADQABAPgLANQgCguAcgiQARgYAbAIQACApgSAcIgbAgIgKAMIAKgPg");
	this.shape_4.setTransform(7.2,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009F29").s().p("AgfA2IgEgOQgBgcAFgQQAFgWARgUQARgYAbAIQACApgSAcIgbAgQgOAOgGAMg");
	this.shape_5.setTransform(7.2,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#037017").s().p("ACTAZIgRgKQgMgIgegHIgagGQgFApgiAdQgRAPgOAGQAtgcANglQAEgMAAgIIAAgJQgXgHgbAAIgVABQAAAsguAfQAwgwgHgcIgmAJQgJACgMACIgZADQgKAXgLAAQARgLgDgMQg4gIgYAJQAWgLAmAFQgHgHgPgHIgNgGQAVAFAUAPQARAEA0gOQgfglgpgKQAtAJAgAkQAlgJAkAFQgDgsgggZQAVAPALAZQAIAQAAANQAoAFAxAQQADgqgmgtQAtAtgDAsQAzAWAWAfQgBAEgEgCQgLgNgOgJIgLgHQgIApgfAWQAkgmgDgcg");
	this.shape_6.setTransform(-10.8,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#028E1F").s().p("AgPBeQgfgJgjgVIgwgcQgVgKgVgIIAxAPQARAHAGgBQAJgDAOgJQAHgEAIgJIAPgOQANACgTAcIgKAKQgGAHgBAEQgBAIAMAEQALACAHgBQAMgDAXgSIASgVQARgSACAEQACAEgHASIgMAUIgPAUQAAAJAIABIAPABQALgCAXACQAJgDANgNIAXgVIAXgFQgBAJgGARQAMgLAFgJQAOgdgUgVIgVgVIgMgMQgHgIgFAAIAIATQAFANgEAHIgkgrQgXgWgUAAIgUABQgNACAGAMIALAPQADAJgBAHQgFAAgIgHIgLgLQgJgJgXgJQgLgFgHAFQggAWgtgSIgBgBQBvhGByAxQAzAWAdA7QAPAfAEAbQhDAqhBAAQgdAAgagHg");
	this.shape_7.setTransform(-8.6,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009F29").s().p("AAFBeQgdgJgjgVIgwgcQgygZgkgGIAUgXQAXgcAGgEQBBgpAwgHQA7gKBDAcQAzAWAdA7QAPAfAEAbQhDArhBAAQgdAAgcgIg");
	this.shape_8.setTransform(-10.8,-1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#037017").s().p("AAnAYIgMgLQgJgKAAABIgDAGQgBAJAEAOIgDgKQgDgMAEgIQgKgGgKgEIgDAHQgCANAJARQgDgFgDgHQgFgPAEgKQgPgHgIAAIgGgBIgCAGQgBAIADAJQgGgKAEgNQgHgBgIADQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAABgBIAIgCQAJgBALACIAGgHQAIgIAMgDIgKAFQgKAGgDAIIAbAKIAGgHQAHgEAJAAQgOAAgHAMIAWANIAJgBQALgBAJAEQgOgFgOAFIATAPIAFABIgEAAIAEAEQgEgDgHgDIABAKQgDgCAAgJg");
	this.shape_9.setTransform(15.1,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#028E1F").s().p("AAjAiQgZAAgOgFQgfgLgUghIAPgMQARgMARADQAnAIAXAnIgCAAQgPgEgGgKQgBgCgFgBQgHgCgEABIgKAAIAIgGQAFgDgLgGQgGgEgHACIgRAFIAJgJIgKABIgJACQgJADAAALQAAAEACAEIABgIIAGAFIAEAIQACAHACACQACADAIADQAHAFAAgDIgBgJIgBgIQAAgEACgBQACAAACAGIADAJQABAJAEAEQAIAIACgGIgBgJQgDgMAEACQACAAABAHIADAGIAEAIQACACAGAAIATAGIgRgDg");
	this.shape_10.setTransform(15.2,3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009F29").s().p("AAfAgQgaAAgOgFQgfgLgTghIAOgMQARgMARADQAnAIAXAnIgHAAQgHABACAFQADAGAOAAIAEASQgMgFgRgCg");
	this.shape_11.setTransform(15.6,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#037017").s().p("AiYAlQgSAJgUAWQgDACgBgFQAWggA0gXQgBgsAugvQgoAvADApIAdgJQAjgLAZgDIAJgeQAOghAjgTQgwAcgFA2IAWgDQAcgBAXAFIAWgUQAcgVAcgHQgqALgfAnIAcAGQAfAFAKgEIANgIQAPgKANgDQgYAJgMANIAWgCQAZAAAOAHQgYgKg5AKIABAHQADAJAJAGQgKABgKgXQgLAAgNgCQgIAAgOgEIglgHIACATQAIAbAdAcQgtgcABgtQgigDglALIgBAHQAAALAEAMQANAkArAbQgOgGgQgOQghgcgEgpQgxAKgUANIgSAJIADATQAHAYAWAYQgegWgHgog");
	this.shape_12.setTransform(8.3,-7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#028E1F").s().p("AivA/QAFgaAQggQAfg8AzgXQB0g1BsBCIgBABQguATgfgVQgGgEgMAFQgYALgIAIIgMAMQgHAHgFAAQgCgGAEgKIAKgPQAHgMgNgCIgTAAQgWABgWAWIglAtQgEgIAGgNIAIgTQgFAAgIAJIgMAMIgWAVQgTAVAMAdQAFAKAMAKIgHgZQAAgDALADQAJACADACQAGADARARQANANAJADQAKADAYgGQAYgBgCgKIgOgTIgLgUQgHgQACgFQACgFAIAHIAJALQAPAQADAEQAXARALADQAHABALgDQAMgEgBgIQAAgEgHgHIgJgJQgEgGgEgKQgEgMAGAAIAPALQAIAJAHAEQAOAJAJABQAGACARgIQASgIAmgLQgZAJgZANIgwAeQgkAWgfAJQgdAKggAAQg+AAg/gng");
	this.shape_13.setTransform(6.4,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009F29").s().p("AjCA/QAFgaAQggQAfg8AzgXQB0g1BsBCQgJAGgIAHQgQAQAKAHQAQANAlgZIAgAoQgkAFg0AbIgwAeQgkAWgdAJQgfAKggAAQg+AAg/gng");
	this.shape_14.setTransform(8.3,-7.7);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-18,61.9,36.2);


(lib.BGintro = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABkAAQgIBUhbAJQhagGgKhWQAIhUBbgJQBaAGAKBWg");
	this.shape.setTransform(107.8,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E33AA").s().p("AhiABQAGhUBcgJQBZAGALBWQgIBUhbAJQhagGgJhWg");
	this.shape_1.setTransform(107.8,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABVB0QgIgDhKgwQhIgvgjg1Qgjg2BsgXQBugPAWA5QAWA5gRA9QgRA/gEAFg");
	this.shape_2.setTransform(96.9,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E33AA").s().p("AADBBQhIgvgjg1Qgjg2BsgXQBugPAWA5QAWA5gRA9QgRA/gEAFQgIgDhKgwg");
	this.shape_3.setTransform(96.9,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#914CC1").ss(1.1,1,1).p("ACIAbQgHAFhSAhQhPAghBgCQhAgDArhjQA1hkA7APQA5AOAqAyQAqAwABAHg");
	this.shape_4.setTransform(92.4,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E33AA").s().p("AhhBfQhAgDArhjQA1hkA7APQA5AOAqAyQAqAwABAHQgHAFhSAhQhJAeg9AAIgKAAg");
	this.shape_5.setTransform(92.4,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABjh+QAAAEgIA3QgJA3gTA6QgTA8ggASQgeASgvhHQg5hfArgrQAsgqA/gJQBAgJAHABg");
	this.shape_6.setTransform(94.8,37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E33AA").s().p("AhBBHQg5hfArgrQAsgqA/gJQBAgJAHABIgIA7QgJA3gTA6QgTA8ggASQgGADgGAAQgbAAgmg4g");
	this.shape_7.setTransform(94.8,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#914CC1").ss(1.1,1,1).p("AhQB1QAJgDBHgyQBHgyAig1QAhg4hsgUQhvgLgUA5QgUA6ASA8QATA/AEAFg");
	this.shape_8.setTransform(116.1,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E33AA").s().p("AhnAxQgSg8AUg6QAUg5BvALQBsAUghA4QgiA1hHAyQhHAygJADQgEgFgTg/g");
	this.shape_9.setTransform(116.1,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#914CC1").ss(1.1,1,1).p("AiIAiQAIAFBTAeQBQAeBAgGQBBgFgvhhQg4hig7ARQg4AQgoA0QgoAygCAGg");
	this.shape_10.setTransform(124.3,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E33AA").s().p("AgtBFQhTgegIgFQACgGAogyQAog0A4gQQA7gRA4BiQAvBhhBAFIgUABQg5AAhDgZg");
	this.shape_11.setTransform(124.3,20.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#914CC1").ss(1.1,1,1).p("AhthpQABAJAlBQQAkBOAuArQAxAqAmhmQAfhrg0geQg1geg/AHQhAAHgGADg");
	this.shape_12.setTransform(119.9,35.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E33AA").s().p("AALBpQgugrgkhOQglhQgBgJQAGgDBAgHQA/gHA1AeQA0AegfBrQgbBIggAAQgNAAgPgMg");
	this.shape_13.setTransform(119.9,35.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#914CC1").ss(1.1,1,1).p("AgEiFQgGAHgqBNQgpBLgFBBQgFBABogfQBpgpgIg8QgIg7gtgvQgsgvgFgDg");
	this.shape_14.setTransform(107.5,38.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E33AA").s().p("AhiBbQAFhBAphLQAqhNAGgHQAFADAsAvQAtAvAIA7QAIA8hpApQghAKgWAAQgvAAADgrg");
	this.shape_15.setTransform(107.5,38.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#037017").s().p("AABBJQADgQgwgLIgugHIALgKQAKgLgOgHQgRgHgTgEIgTgEIAagHQAWgFAGgIQAEgIABgMIABgNQAhASAXgWQAWgVABgFIANAPQAOANAQAHQASAEAZgEIAcgFQgDABgSAMQgTAMgCAPQAEANAdAEQAdAEADAAIgbAIQgYAHgTABQgOACAJANQAJANACACQgdACgZASIgXASQADgFABgKg");
	this.shape_16.setTransform(109.4,29);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9E6AC4").s().p("ABnARIgNgGQgNgGgSgEIgTgCQgGAegUANQgTAOgCgBQAjgWAEgSQAEgRgCgBQgrgGgHACQgBAVgOAMQgOANgCAAQAXgWADgNQADgKgCgBQgBgBgLADIgOADIgQACIgRABQgNAUgBgEQANgNgEgCQgmgCgNABQAKgCALABIAQAAIgTgKQAUAGACAEQALAAATgCIAUgEQgSgRgRgHIgNgFQAVAGAOAKQAQAKAAACQAtgGAHADQgFgZgOgMIgPgKQAYANAHAQQAIAQgBACQAWACAUAGIAVAEQAAgRgKgQQAWAfgGADQA2AbgBAGQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgYgTgDAAQgFATgKAKIgLAKQAbgjgEgGg");
	this.shape_17.setTransform(96.9,78);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E33AA").s().p("AgJA6Qg3gTgbgQQgSgIgOgEIAkAJQAIAFAJgBQAIgDAIgEIALgIQAEgHAHgCQAEAIgJALQgHAFgEAIQAGAKAPgDQANgEALgJQAGgGAGgHQAHgJAHABQAAAHgEAGIgIANQgGAGgEAGQAEAJANgDQAMACAMgBQAJgDAHgHQAHgIAIgFQAKgEAHABIgFAPQAIgEAEgIQAJgSgOgMQgIgHgIgGQgIgJgJgEQAIAMgBANQgMgOgPgNQgNgNgSAAIgOAAQgIABAEAIQAKAIAAALQgKgDgIgIQgLgHgMgEQgHgEgGAEQgbAMgcgKIgBAAQBMgtBUAfQArAUAQAeQAQAggBADQg3AcgrAAQgUAAgPgFg");
	this.shape_18.setTransform(98.1,78);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E33AA").s().p("AAEA6Qg0gSgcgRQg7gWgEACIAOgNQAJgMAMgIQAkgXArgIQAtgFAtAQQArAUAQAeQAQAggBADQg3AcgrAAQgTAAgSgFg");
	this.shape_19.setTransform(96.6,78);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9E6AC4").s().p("AgJBCQAqgbAFgWQAFgUgDgBQg0gIgHAEQgCAYgQAPQgRAPgCAAQAbgaAEgPQADgNgCAAQgCgCgNADIgQAEIgTADIgVABQgPAXgCgEQAQgPgFgDQgtgCgPABQAMgCANAAIASABQgOgJgIgDQAXAHAEAEQANABAWgDIAYgFQgWgUgUgIIgQgFQAaAGARALQASANABACQA1gHAIADQgEgbgQgPIgOgKQAYAOAIARQAJAUgCACQAbADAYAGIAZAFQgBgXgOgUIgPgTQAaAZAGATQAFATgBABQBBAfgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgdgWgDABQgEAPgHALIgCgDQALgWgCgEIgBgBIABABQAAABgQgIQgPgHgVgFIgWgCQgCAJgEAJIgGAGQgFAIgCAHQgeAcgIAAIAAAAg");
	this.shape_20.setTransform(97.3,105.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7E33AA").s().p("AAEAPIgzgXQgYgKgSgGIAwANQAJAFALgBQAKgDAJgFQAFgFAGgFQAFgHAHgDQAGAJgLANQgJAGgEAIQAHAMASgDQAQgGAMgIIASgQQAHgKAIAAQABAIgEAIIgCACQgDAEgCAFIgDADQgHAHgFAHQAAAJANgCIAEAQQgsgFghgRg");
	this.shape_21.setTransform(92.5,109.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E33AA").s().p("ABQAnIALgEQAIgCABACIgGATQAJgGAFgJQALgVgRgRIgTgNQgJgKgMgGQAKAOgBAOQgOgPgRgPQgQgPgWgBIgQAAQgLABAFAKQAMAKAAANQgMgEgJgKQgNgIgPgFQgIgEgHAEQggAPghgMIgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQgVAMgUAIQgHgSgMgMg");
	this.shape_22.setTransform(99.5,105);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E33AA").s().p("AgmA2Ig1gaQhGgagEADIAbgcQACABAPAGQAQAGAMgGQAIgIgNgJQgNgJgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQgWAMgUAIQgNghgcgNQgbgMgQATQgQAaANAZQgqgFghgQg");
	this.shape_23.setTransform(96.9,105.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9E6AC4").s().p("AB7AUIgRgHQgPgHgVgFIgWgCQgHAjgZAQQgWAQgDAAQAqgbAFgWQAFgUgDgBQg0gHgHACQgCAZgQAPQgRAPgCAAQAbgaAEgPQADgNgCgBQgCgBgNADIgQAFIgTACQgKABgLAAQgPAYgCgGQAQgOgFgDQgtgCgPABQAMgCANAAIASABIgUgLQAVAGAEAFQANAAAWgDIAYgFQgWgVgUgHIgQgGQAaAHARALQASANABABQA1gHAIAFQgFgfgSgNIgRgNQAdARAJASQAJAUgCACQAbADAYAGIAZAFQgBgYgOgTIgPgTQAaAZAGATQAFATgBABQBBAfgBAIQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAgBQgdgWgDABQgGAWgMANQgMAMgBgBQAggrgEgGg");
	this.shape_24.setTransform(96.3,137.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7E33AA").s().p("AgIBFQhCgWghgUQgYgKgSgGIAwANQAJAGALgCQAKgCAJgGQAHgEAGgGQAFgHAHgDQAGAJgLANQgJAHgEAJQAHAMASgDQAQgFAMgLIAQgPQAHgLAIABQABAIgFAIIgJAPQgIAHgEAIQAEAKAPgDQAPACAOgBQALgEAIgJQAJgIAKgHIAKgEQAJgCAAACIgFATQAJgGAFgJQALgVgRgPIgTgPQgKgKgLgGQAKAOgBAQQgPgRgRgPQgPgPgWgBIgRAAQgKABAFAKQAKAKAAANQgKgEgJgKQgNgIgPgFQgIgEgHAEQggAPgigMIgBAAQBbg1BkAlQAzAXATAkQATAmgBAEQhCAigzAAQgXAAgSgHg");
	this.shape_25.setTransform(97.5,137.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7E33AA").s().p("AAGBFQhAgWghgUQhGgagEADIAbgcQACABAPAGQAQAGAMgGQAIgIgNgJQgNgJgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQhBAig0AAQgXAAgUgHg");
	this.shape_26.setTransform(95.9,137.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9E6AC4").s().p("AhqA8QgNgMgGgWQgEgBgbAYQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgIBAghQgBgBAEgTQAFgTAZgaIgOAUQgNATAAAYIAZgGQAXgHAbgEQgBgCAIgUQAIgTAbgRIgQAMQgRAQgEAdQAIgEA2AGQAAgCASgNQAQgMAagIIgQAGQgUAJgUAVIAYAEQAWADANgCQADgFAZgIIgYANIATgBQANgBANAEQgPgBgvAFQgEAAAQAPQgCAEgQgUIgUgBQgKgBgJgDIgRgDQgNgDgCACQgBgBADANQAEAQAdAZQgDAAgRgPQgRgOgCgYQgIgDg0AJQgCABAGAUQAFAWArAZQgDABgXgPQgYgQgJgjIgWADQgVAGgPAIIgQAHQgEAHAiApQgCAAgMgLg");
	this.shape_27.setTransform(130.1,122.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7E33AA").s().p("AiUAvQgBgEARgnQASgkAygZQBjgpBdAyIgCABQghAMgggNQgHgEgJAEQgOAFgNAJQgIALgKAEQgBgNAKgLQAEgKgKAAQgIgBgIABQgWACgPAQQgRAQgOAQQgBgPAJgOQgLAFgJALIgSAQQgRAPAMAVQAFAJAJAGIgGgTQABgCAIACIALADQAKAGAJAJQAJAIALADQANABAPgCQAPACAEgKQgFgIgHgHIgKgOQgFgIAAgJQAJAAAHAKIAQAPQANAKAQAEQASADAHgNQgFgIgJgGQgLgNAFgIQAIABAFAHQAGAGAHADQAJAGALACQAKABAJgFIAvgPQgRAGgYALQggAVhBAYQgUAJgbAAQgxAAg/geg");
	this.shape_28.setTransform(128.9,122);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7E33AA").s().p("AikAvQgBgEARgnQARgkAzgZQBjgpBcAyIgPAKQgMAJAIAIQAMAGAQgHIARgIIAcAdQgFgChFAaQggAVg+AYQgXAJgaAAQgxAAg/geg");
	this.shape_29.setTransform(130.5,122);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9E6AC4").s().p("AhtA3QgLgNgFgWQgEgBgdAVQAAABgBAAQAAAAAAAAQgBgBgBAAQAAgBgBgBQgBgHBCgeQgBgBAGgSQAGgTAbgZIgPATQgPAUgCAXIAagEQAXgGAbgCQgBgCAKgUQAGgSAfgOIgRAKQgRAOgHAeQAJgEA1AJQAAgCATgMQARgLAagFIgQAFQgUAHgXATIAYAGQAWADANgCQAEgCAZgHQgJADgPAHIASAAQAOAAAMAFQgQgDguACQgEADAPAPQgCAEgOgXQgLgBgKgCQgJgBgJgBIgRgFQgNgDgCABQgBAAACANQADAQAbAbQgCgBgQgPQgRgQAAgYQgIgDg0AGQgDABAFAUQAEAWApAcQgDAAgWgRQgXgQgGgkIgXACQgVAEgQAGQgUAKAFgEQgIADAhAwQgBAAgMgMg");
	this.shape_30.setTransform(130.2,92);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7E33AA").s().p("AiVAmQgBgEAUgkQAUglA0gWQBlgiBZA4IgBABQgiAKgfgQQgHgEgJAEQgPAEgMAIQgKAKgMAEQAAgOAMgJQAFgKgKgBIgQgBQgWAAgQAPQgRAPgQAQQAAgQAKgNQgLAEgKAKIgTAPQgSAOALAWQAEAJAJAGIgFgTQABgCAIADIAKADQAKAIAJAJQAIAIAKAFQAOABAPgBQAPADAFgKQgFgIgHgHQgFgIgEgIQgEgIABgIQAIAAAHALIAPAQQAMALAQAFQASADAHgLQgEgJgJgHQgKgNAGgKQAHADAFAIQAGAGAHAEQAIAGALADQAKACAJgFIAwgMQgRAFgZAJQgiAUhCATQgQAGgVAAQg1AAhDglg");
	this.shape_31.setTransform(128.9,92);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7E33AA").s().p("AilAmQgBgEAUgkQAUgmA0gVQBIgZBHAYQA7AXAnAwQgFgDhHAYQghAThAAUQgTAGgVAAQg0AAhDglg");
	this.shape_32.setTransform(130.6,92.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9E6AC4").s().p("AhTAyQgKgJgGgTQgDAAgWATQAAABgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQgCgGA0gcQgHgFAUgdQgJAPABARIAUgFQATgGAVgEQgBgBAHgRQAGgPAWgOIgNAKQgNANgEAYQAHgDArADQABgBAOgLQANgKAVgHIgNAGQgQAHgRARIAUADQASACALgCQACgDATgHIgSALQAIgEAXAEQgOAAgfAEQgDACANAKQgBAEgNgRQgJABgIgBIgPgDIgOgCQgLgCgBABQgCAAAEAKQADANAYAUQgCAAgOgMQgPgLgCgUQgGgCgqAIQgCACAFAPQAFASAjATQgCABgTgMQgUgMgIgcIgSADQgRAEgMAHIgMAGQgEAFAcAiIgLgJg");
	this.shape_33.setTransform(124.5,67.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7E33AA").s().p("Ah4ApQgBgEAOggQANgdApgVQBQgjBLAnIgBABQgbALgagLQgGgDgGAEQgMAEgKAIQgHAIgIAEQAAgLAHgIQAAgNgSAFQgSABgMANQgNANgLAPQgCgNAIgMQgJAFgHAJQgIAGgHAFQgNAOAKARQAEAHAIAFIgGgPQAHgCAJAEQAJAFAHAGQAIAHAIADQAMAAALgCQANACADgJQgEgGgHgFIgIgMQgDgHgBgGQAHgBAHAIQAGAHAGAFQALAIANADQAPACAFgKQgEgHgIgFQgJgKAEgGQAHAAAEAGIALAHQAIAEAIACQAIABAIgFIAmgMQgOAFgUAJQgaASg0AUQgRAIgXAAQgnAAgygWg");
	this.shape_34.setTransform(123.7,67.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7E33AA").s().p("AiFApQgBgEAOggQANgdApgVQBQgjBLAnIgMAJQgJAIAGAGQAKAEANgFIANgHIAYAXQgEgCg4AWQgaASgyAUQgTAIgXAAQgnAAgygWg");
	this.shape_35.setTransform(125,67.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9E6AC4").s().p("ABDAEIgIgEQgJgCgMgDIgNgCQgEATgOAJQgKAJgDAAQAXgPADgNQADgKgCgBQgdgEgEACQgBANgKAIQgJAJgCAAQAbgdgIgBQgIAAgKADIgLACIgLABQgJAMgBgDQAJgGgDgCQgVgCgKABQAQgEAFACIgNgHQAOAFACACQAHABANgCIAOgDQgNgKgIgEQAVAIACAFQAegEAFACQgCgKgDgHQALAMgEAFQAkAGAIAEQgBgNgGgLQAPAVgFAEQAmAQgBAEQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgQgNgCABQgLAagHAAQAUgagFgCg");
	this.shape_36.setTransform(99.2,58.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7E33AA").s().p("AgEAnQgmgMgTgMQgNgGgLgDIAcAIQAFADAGgBQAGgCAFgDIAHgFQADgFAFgBQADAFgGAIQgFADgDAFQAEAHAKgBQAJgDAIgGIAIgJQAEgGAFAAQAAAFgDAEIgFAJIgHAIQACAGAJgBIARAAQAGgCAEgFIALgJQAHgDAEABIgDALQAFgEADgFQAHgMgKgIIgLgIQgFgGgHgDQAGAIgBAJIgSgTQgJgIgNgBQgMgDABAKQAFAFAAAIQgFgCgGgGQgHgFgIgDQgFgCgEACQgSAJgUgHIAAAAQAzgfA5AWQAeANAKAUQALAWAAACQgmATgdAAQgOAAgJgEg");
	this.shape_37.setTransform(99.7,57.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7E33AA").s().p("AADAnQgkgMgSgMQgpgOgCABIAOgNQA4gvBEAZQAeANALAUQAKAWAAACQglATgeAAQgNAAgMgEg");
	this.shape_38.setTransform(98.8,57.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7E33AA").s().p("AAAIxQAJiVAEjIQAEjJgTifQgfjtAEiiQAEijADgGQgDCGADA4QACA4AKBGQAKBFAQCwQARC8gCDIQgCDIgICLIgKCRIgYAAIANicg");
	this.shape_39.setTransform(111.4,94.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9E6AC4").s().p("AhJAIQgDgBgQAPQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBgEAngSQgFgFAQgXQgIAMABAOQAHgEAmgHQgEgGAMgNQgDAHgCAMQAFgDAgADQABgFAXgKQgJAFgNALIAPACQANACAIgBQACgCANgFIgMAHQAFgCASADIgiACQgCACAJAHQgBADgJgMIgNgBIgLgCQgLgCgIgBQgIACAcAeQgBAAgKgJQgLgJgBgNQgFgCgeAFQgCABAEALQADAOAZAPQgCAAgNgJQgPgJgFgVIgNAEQgNADgJACIgJAFQgDAEAUAZQgGAAgNgbg");
	this.shape_40.setTransform(118.7,53.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7E33AA").s().p("AhZAcQAAgCAKgYQALgVAegPQA7gZA4AeIgBABQgUAHgTgIQgFgCgFADQgIADgIAFQgFAGgGADQAAgIAFgGQABgKgNADQgOABgJAKIgSAUQgBgKAGgIQgHADgGAHQgGAEgFAFQgKAJAHAMQAEAGAFADIgEgLQAFgBAHADQAHADAFAGQAFAEAHADIARgBQAJABADgGIgIgJIgGgJQgDgFAAgFQAFAAAFAGIAJAJQAIAGAKADQAKABAFgHQgEgFgFgEQgHgIADgEQAFAAADAFIAIAFQAGADAGACQAGAAAGgDIAcgJIgZAKQgTANgnAPQgMAFgQAAQgeAAgmgSg");
	this.shape_41.setTransform(118.1,52.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7E33AA").s().p("AhjAcQAAgCAKgYQALgVAegPQA7gZA4AeIgJAGQgHAGAFAFQAUABAHgHIARASQgDgCgqAPQgTANglAPQgOAFgQAAQgeAAgmgSg");
	this.shape_42.setTransform(119.1,52.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABkAAQgHBUhcAJQhagGgKhWQAIhUBbgJQBaAGAKBWg");
	this.shape_43.setTransform(-34.2,26.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7E33AA").s().p("AhiABQAHhUBbgJQBZAGAKBWQgHBUhbAJQhZgGgKhWg");
	this.shape_44.setTransform(-34.2,26.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABVB0QgIgDhKgwQhIgvgjg1Qgjg2BsgXQBugPAWA5QAWA5gRA9QgRA/gEAFg");
	this.shape_45.setTransform(-45.1,10.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7E33AA").s().p("AADBBQhIgvgjg1Qgjg2BsgXQBugPAWA5QAWA5gRA9QgRA/gEAFQgIgDhKgwg");
	this.shape_46.setTransform(-45.1,10.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#914CC1").ss(1.1,1,1).p("ACIAbQgHAFhSAhQhPAghBgCQhAgDArhjQA1hkA7APQA5AOAqAyQAqAwABAHg");
	this.shape_47.setTransform(-49.6,20.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7E33AA").s().p("AhhBfQhAgDArhjQA1hkA7APQA5AOAqAyQAqAwABAHQgHAFhSAhQhJAeg9AAIgKAAg");
	this.shape_48.setTransform(-49.6,20.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABjh+QAAAEgIA3QgJA3gTA6QgTA8ggASQgeASgvhHQg5hfArgrQAsgqA/gJQBAgJAHABg");
	this.shape_49.setTransform(-47.2,37.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7E33AA").s().p("AhBBHQg5hfArgrQAsgqA/gJQBAgJAHABIgIA7QgJA3gTA6QgTA8ggASQgGADgGAAQgbAAgmg4g");
	this.shape_50.setTransform(-47.2,37.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#914CC1").ss(1.1,1,1).p("AhQB1QAJgDBHgyQBHgyAig1QAhg4hsgUQhvgLgUA5QgUA6ASA8QATA/AEAFg");
	this.shape_51.setTransform(-25.9,12.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7E33AA").s().p("AhnAxQgSg8AUg6QAUg5BvALQBsAUghA4QgiA1hHAyQhHAygJADQgEgFgTg/g");
	this.shape_52.setTransform(-25.9,12.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#914CC1").ss(1.1,1,1).p("AiIAiQAIAFBTAeQBQAeBAgGQBBgFgvhhQg4hig7ARQg4AQgoA0QgoAygCAGg");
	this.shape_53.setTransform(-17.7,20.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7E33AA").s().p("AgtBFQhTgegIgFQACgGAogyQAog0A4gQQA7gRA4BiQAvBhhBAFIgUABQg5AAhDgZg");
	this.shape_54.setTransform(-17.7,20.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#914CC1").ss(1.1,1,1).p("AhthpQABAJAlBQQAkBOAuArQAxAqAmhmQAfhrg0geQg1geg/AHQhAAHgGADg");
	this.shape_55.setTransform(-22.1,35.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7E33AA").s().p("AALBpQgugrgkhOQglhQgBgJQAGgDBAgHQA/gHA1AeQA0AegfBrQgbBIggAAQgNAAgPgMg");
	this.shape_56.setTransform(-22.1,35.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#914CC1").ss(1.1,1,1).p("AgEiFQgGAHgqBNQgpBLgFBBQgFBABogfQBpgpgIg8QgIg7gtgvQgsgvgFgDg");
	this.shape_57.setTransform(-34.5,38.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7E33AA").s().p("AhiBbQAFhBAphLQAqhNAGgHQAFADAsAvQAtAvAIA7QAIA8hpApQghAKgWAAQgvAAADgrg");
	this.shape_58.setTransform(-34.5,38.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#037017").s().p("AABBJQAEgQgxgLIgugHIALgKQAKgLgOgHQgRgHgTgEIgTgEIAZgHQAXgFAGgIQAFgIAAgMIABgNQAiASAWgWQAWgVABgFIANAPQANANARAHQASAEAagEIAbgFQgDABgSAMQgSAMgDAPQAEANAdAEQAcAEAEAAIgbAIQgYAHgTABQgOACAJANQAIANADACQgdACgZASIgXASQADgFABgKg");
	this.shape_59.setTransform(-32.6,29);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9E6AC4").s().p("ABnARIgNgGQgNgGgSgEIgTgCQgGAegUANQgTAOgCgBQAjgWAEgSQAEgRgCgBQgrgGgHACQgBAVgOAMQgOANgCAAQAXgWADgNQADgKgCgBQgBgBgLADIgOADIgQACIgRABQgNAUgBgEQANgNgEgCQgmgCgNABQAKgCALABIAQAAIgTgKQAUAGACAEQALAAATgCIAUgEQgSgRgRgHIgNgFQAVAGAOAKQAQAKAAACQAtgGAHADQgFgZgOgMIgPgKQAYANAHAQQAIAQgBACQAWACAUAGIAVAEQAAgRgKgQQAWAfgGADQA2AbgBAGQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgYgTgDAAQgFATgKAKIgLAKQAbgjgEgGg");
	this.shape_60.setTransform(-45.1,78);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7E33AA").s().p("AgJA6Qg3gTgbgQQgSgIgOgEIAkAJQAIAFAJgBQAIgDAIgEIALgIQAEgHAHgCQAEAIgJALQgHAFgEAIQAGAKAPgDQANgEALgJQAGgGAGgHQAHgJAHABQAAAHgEAGIgIANQgGAGgEAGQAEAJANgDQAMACAMgBQAJgDAHgHQAHgIAIgFQAKgEAHABIgFAPQAIgEAEgIQAJgSgOgMQgIgHgIgGQgIgJgJgEQAIAMgBANQgMgOgPgNQgNgNgSAAIgOAAQgIABAEAIQAKAIAAALQgKgDgIgIQgLgHgMgEQgHgEgGAEQgbAMgcgKIgBAAQBMgtBUAfQArAUAQAeQAQAggBADQg3AcgrAAQgUAAgPgFg");
	this.shape_61.setTransform(-43.9,78);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7E33AA").s().p("AAEA6Qg0gSgcgRQg7gWgEACIAOgNQAJgMAMgIQAkgXArgIQAtgFAtAQQArAUAQAeQAQAggBADQg3AcgrAAQgTAAgSgFg");
	this.shape_62.setTransform(-45.4,78);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9E6AC4").s().p("AgJBCQAqgbAFgWQAFgUgDgBQg0gIgHAEQgCAYgQAPQgRAPgCAAQAbgaAEgPQADgNgCAAQgCgCgNADIgQAEIgTADIgVABQgPAXgCgEQAQgPgFgDQgtgCgPABQAMgCANAAIASABQgOgJgIgDQAXAHAEAEQANABAWgDIAYgFQgWgUgUgIIgQgFQAaAGARALQASANABACQA1gHAIADQgEgbgQgPIgOgKQAYAOAIARQAJAUgCACQAbADAYAGIAZAFQgBgXgOgUIgPgTQAaAZAGATQAFATgBABQBBAfgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgdgWgDABQgEAPgHALIgCgDQALgWgCgEIgBgBIABABQAAABgQgIQgPgHgVgFIgWgCQgCAJgEAJIgGAGQgFAIgCAHQgeAcgIAAIAAAAg");
	this.shape_63.setTransform(-44.7,105.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7E33AA").s().p("AAEAPIgzgXQgYgKgSgGIAwANQAJAFALgBQAKgDAJgFQAFgFAGgFQAFgHAHgDQAGAJgLANQgJAGgEAIQAHAMASgDQAQgGAMgIIASgQQAHgKAIAAQABAIgEAIIgCACQgDAEgCAFIgDADQgHAHgFAHQAAAJANgCIAEAQQgsgFghgRg");
	this.shape_64.setTransform(-49.5,109.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7E33AA").s().p("ABQAnIALgEQAIgCABACIgGATQAJgGAFgJQALgVgRgRIgTgNQgJgKgMgGQAKAOgBAOQgOgPgRgPQgQgPgWgBIgQAAQgLABAFAKQAMAKAAANQgMgEgJgKQgNgIgPgFQgIgEgHAEQggAPghgMIgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQgVAMgUAIQgHgSgMgMg");
	this.shape_65.setTransform(-42.5,105);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7E33AA").s().p("AgmA2Ig1gaQhGgagEADIAbgcQACABAPAGQAQAGAMgGQAIgIgNgJQgNgJgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQgWAMgUAIQgNghgcgNQgbgMgQATQgQAaANAZQgqgFghgQg");
	this.shape_66.setTransform(-45.1,105.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9E6AC4").s().p("AB7AUIgRgHQgPgHgVgFIgWgCQgHAjgZAQQgWAQgDAAQAqgbAFgWQAFgUgDgBQg0gHgHACQgCAZgQAPQgRAPgCAAQAbgaAEgPQADgNgCgBQgCgBgNADIgQAFIgTACQgKABgLAAQgPAYgCgGQAQgOgFgDQgtgCgPABQAMgCANAAIASABIgUgLQAVAGAEAFQANAAAWgDIAYgFQgWgVgUgHIgQgGQAaAHARALQASANABABQA1gHAIAFQgFgfgSgNIgRgNQAdARAJASQAJAUgCACQAbADAYAGIAZAFQgBgYgOgTIgPgTQAaAZAGATQAFATgBABQBBAfgBAIQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAgBQgdgWgDABQgGAWgMANQgMAMgBgBQAggrgEgGg");
	this.shape_67.setTransform(-45.7,137.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7E33AA").s().p("AgIBFQhCgWghgUQgYgKgSgGIAwANQAJAGALgCQAKgCAJgGQAHgEAGgGQAFgHAHgDQAGAJgLANQgJAHgEAJQAHAMASgDQAQgFAMgLIAQgPQAHgLAIABQABAIgFAIIgJAPQgIAHgEAIQAEAKAPgDQAPACAOgBQALgEAIgJQAJgIAKgHIAKgEQAJgCAAACIgFATQAJgGAFgJQALgVgRgPIgTgPQgKgKgLgGQAKAOgBAQQgPgRgRgPQgPgPgWgBIgRAAQgKABAFAKQAKAKAAANQgKgEgJgKQgNgIgPgFQgIgEgHAEQggAPgigMIgBAAQBbg1BkAlQAzAXATAkQATAmgBAEQhCAigzAAQgXAAgSgHg");
	this.shape_68.setTransform(-44.5,137.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7E33AA").s().p("AAGBFQhAgWghgUQhGgagEADIAbgcQACABAPAGQAQAGAMgGQAIgIgNgJQgNgJgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQhBAig0AAQgXAAgUgHg");
	this.shape_69.setTransform(-46.1,137.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9E6AC4").s().p("AhqA8QgNgMgGgWQgEgBgbAYQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgIBAghQgBgBAEgTQAFgTAZgaIgOAUQgNATAAAYIAZgGQAXgHAbgEQgBgCAIgUQAIgTAbgRIgQAMQgRAQgEAdQAIgEA2AGQAAgCASgNQAQgMAagIIgQAGQgUAJgUAVIAYAEQAWADANgCQADgFAZgIIgYANIATgBQANgBANAEQgPgBgvAFQgEAAAQAPQgCAEgQgUIgUgBQgKgBgJgDIgRgDQgNgDgCACQgBgBADANQAEAQAdAZQgDAAgRgPQgRgOgCgYQgIgDg0AJQgCABAGAUQAFAWArAZQgDABgXgPQgYgQgJgjIgWADQgVAGgPAIIgQAHQgEAHAiApQgCAAgMgLg");
	this.shape_70.setTransform(-11.9,122.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7E33AA").s().p("AiUAvQgBgEARgnQASgkAygZQBjgpBdAyIgCABQghAMgggNQgHgEgJAEQgOAFgNAJQgIALgKAEQgBgNAKgLQAEgKgKAAQgIgBgIABQgWACgPAQQgRAQgOAQQgBgPAJgOQgLAFgJALIgSAQQgRAPAMAVQAFAJAJAGIgGgTQABgCAIACIALADQAKAGAJAJQAJAIALADQANABAPgCQAPACAEgKQgFgIgHgHIgKgOQgFgIAAgJQAJAAAHAKIAQAPQANAKAQAEQASADAHgNQgFgIgJgGQgLgNAFgIQAIABAFAHQAGAGAHADQAJAGALACQAKABAJgFIAvgPQgRAGgYALQggAVhBAYQgUAJgbAAQgxAAg/geg");
	this.shape_71.setTransform(-13.1,122);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7E33AA").s().p("AikAvQgBgEARgnQARgkAzgZQBjgpBcAyIgPAKQgMAJAIAIQAMAGAQgHIARgIIAcAdQgFgChFAaQggAVg+AYQgXAJgaAAQgxAAg/geg");
	this.shape_72.setTransform(-11.5,122);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9E6AC4").s().p("AhtA3QgLgNgFgWQgEgBgdAVQAAABgBAAQAAAAAAAAQgBgBgBAAQAAgBgBgBQgBgHBCgeQgBgBAGgSQAGgTAbgZIgPATQgPAUgCAXIAagEQAXgGAbgCQgBgCAKgUQAGgSAfgOIgRAKQgRAOgHAeQAJgEA1AJQAAgCATgMQARgLAagFIgQAFQgUAHgXATIAYAGQAWADANgCQAEgCAZgHQgJADgPAHIASAAQAOAAAMAFQgQgDguACQgEADAPAPQgCAEgOgXQgLgBgKgCQgJgBgJgBIgRgFQgNgDgCABQgBAAACANQADAQAbAbQgCgBgQgPQgRgQAAgYQgIgDg0AGQgDABAFAUQAEAWApAcQgDAAgWgRQgXgQgGgkIgXACQgVAEgQAGQgUAKAFgEQgIADAhAwQgBAAgMgMg");
	this.shape_73.setTransform(-11.8,92);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7E33AA").s().p("AiVAmQgBgEAUgkQAUglA0gWQBlgiBZA4IgBABQgiAKgfgQQgHgEgJAEQgPAEgMAIQgKAKgMAEQAAgOAMgJQAFgKgKgBIgQgBQgWAAgQAPQgRAPgQAQQAAgQAKgNQgLAEgKAKIgTAPQgSAOALAWQAEAJAJAGIgFgTQABgCAIADIAKADQAKAIAJAJQAIAIAKAFQAOABAPgBQAPADAFgKQgFgIgHgHQgFgIgEgIQgEgIABgIQAIAAAHALIAPAQQAMALAQAFQASADAHgLQgEgJgJgHQgKgNAGgKQAHADAFAIQAGAGAHAEQAIAGALADQAKACAJgFIAwgMQgRAFgZAJQgiAUhCATQgQAGgVAAQg1AAhDglg");
	this.shape_74.setTransform(-13.1,92);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7E33AA").s().p("AilAmQgBgEAUgkQAUgmA0gVQBIgZBHAYQA7AXAnAwQgFgDhHAYQghAThAAUQgTAGgVAAQg0AAhDglg");
	this.shape_75.setTransform(-11.4,92.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9E6AC4").s().p("AhTAyQgKgJgGgTQgDAAgWATQAAABgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQgCgGA0gcQgHgFAUgdQgJAPABARIAUgFQATgGAVgEQgBgBAHgRQAGgPAWgOIgNAKQgNANgEAYQAHgDArADQABgBAOgLQANgKAVgHIgNAGQgQAHgRARIAUADQASACALgCQACgDATgHIgSALQAIgEAXAEQgOAAgfAEQgDACANAKQgBAEgNgRQgJABgIgBIgPgDIgOgCQgLgCgBABQgCAAAEAKQADANAYAUQgCAAgOgMQgPgLgCgUQgGgCgqAIQgCACAFAPQAFASAjATQgCABgTgMQgUgMgIgcIgSADQgRAEgMAHIgMAGQgEAFAcAiIgLgJg");
	this.shape_76.setTransform(-17.5,67.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7E33AA").s().p("Ah4ApQgBgEAOggQANgdApgVQBQgjBLAnIgBABQgbALgagLQgGgDgGAEQgMAEgKAIQgHAIgIAEQAAgLAHgIQAAgNgSAFQgSABgMANQgNANgLAPQgCgNAIgMQgJAFgHAJQgIAGgHAFQgNAOAKARQAEAHAIAFIgGgPQAHgCAJAEQAJAFAHAGQAIAHAIADQAMAAALgCQANACADgJQgEgGgHgFIgIgMQgDgHgBgGQAHgBAHAIQAGAHAGAFQALAIANADQAPACAFgKQgEgHgIgFQgJgKAEgGQAHAAAEAGIALAHQAIAEAIACQAIABAIgFIAmgMQgOAFgUAJQgaASg0AUQgRAIgXAAQgnAAgygWg");
	this.shape_77.setTransform(-18.3,67.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7E33AA").s().p("AiFApQgBgEAOggQANgdApgVQBQgjBLAnIgMAJQgJAIAGAGQAKAEANgFIANgHIAYAXQgEgCg4AWQgaASgyAUQgTAIgXAAQgnAAgygWg");
	this.shape_78.setTransform(-17,67.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9E6AC4").s().p("ABDAEIgIgEQgJgCgMgDIgNgCQgEATgOAJQgKAJgDAAQAXgPADgNQADgKgCgBQgdgEgEACQgBANgKAIQgJAJgCAAQAbgdgIgBQgIAAgKADIgLACIgLABQgJAMgBgDQAJgGgDgCQgVgCgKABQAQgEAFACIgNgHQAOAFACACQAHABANgCIAOgDQgNgKgIgEQAVAIACAFQAegEAFACQgCgKgDgHQALAMgEAFQAkAGAIAEQgBgNgGgLQAPAVgFAEQAmAQgBAEQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgQgNgCABQgLAagHAAQAUgagFgCg");
	this.shape_79.setTransform(-42.8,58.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7E33AA").s().p("AgEAnQgmgMgTgMQgNgGgLgDIAcAIQAFADAGgBQAGgCAFgDIAHgFQADgFAFgBQADAFgGAIQgFADgDAFQAEAHAKgBQAJgDAIgGIAIgJQAEgGAFAAQAAAFgDAEIgFAJIgHAIQACAGAJgBIARAAQAGgCAEgFIALgJQAHgDAEABIgDALQAFgEADgFQAHgMgKgIIgLgIQgFgGgHgDQAGAIgBAJIgSgTQgJgIgNgBQgMgDABAKQAFAFAAAIQgFgCgGgGQgHgFgIgDQgFgCgEACQgSAJgUgHIAAAAQAzgfA5AWQAeANAKAUQALAWAAACQgmATgdAAQgOAAgJgEg");
	this.shape_80.setTransform(-42.3,57.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7E33AA").s().p("AADAnQgkgMgSgMQgpgOgCABIAOgNQA4gvBEAZQAeANALAUQAKAWAAACQglATgeAAQgNAAgMgEg");
	this.shape_81.setTransform(-43.2,57.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7E33AA").s().p("AAAIxQAJiVAEjIQAEjJgTifQgfjtAEiiQAEijADgGQgDCGADA4QACA4AKBGQAKBFAQCwQARC8gCDIQgCDIgICLIgKCRIgYAAIANicg");
	this.shape_82.setTransform(-30.6,94.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9E6AC4").s().p("AhJAIQgDgBgQAPQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBgEAngSQgFgFAQgXQgIAMABAOQAHgEAmgHQgEgGAMgNQgDAHgCAMQAFgDAgADQABgFAXgKQgJAFgNALIAPACQANACAIgBQACgCANgFIgMAHQAFgCASADIgiACQgCACAJAHQgBADgJgMIgNgBIgLgCQgLgCgIgBQgIACAcAeQgBAAgKgJQgLgJgBgNQgFgCgeAFQgCABAEALQADAOAZAPQgCAAgNgJQgPgJgFgVIgNAEQgNADgJACIgJAFQgDAEAUAZQgGAAgNgbg");
	this.shape_83.setTransform(-23.3,53.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7E33AA").s().p("AhZAcQAAgCAKgYQALgVAegPQA7gZA4AeIgBABQgUAHgTgIQgFgCgFADQgIADgIAFQgFAGgGADQAAgIAFgGQABgKgNADQgOABgJAKIgSAUQgBgKAGgIQgHADgGAHQgGAEgFAFQgKAJAHAMQAEAGAFADIgEgLQAFgBAHADQAHADAFAGQAFAEAHADIARgBQAJABADgGIgIgJIgGgJQgDgFAAgFQAFAAAFAGIAJAJQAIAGAKADQAKABAFgHQgEgFgFgEQgHgIADgEQAFAAADAFIAIAFQAGADAGACQAGAAAGgDIAcgJIgZAKQgTANgnAPQgMAFgQAAQgeAAgmgSg");
	this.shape_84.setTransform(-23.9,52.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7E33AA").s().p("AhjAcQAAgCAKgYQALgVAegPQA7gZA4AeIgJAGQgHAGAFAFQAUABAHgHIARASQgDgCgqAPQgTANglAPQgOAFgQAAQgeAAgmgSg");
	this.shape_85.setTransform(-22.9,52.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABkAAQgIBUhbAJQhagGgKhWQAHhUBcgJQBaAGAKBWg");
	this.shape_86.setTransform(-175.2,26.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7E33AA").s().p("AhjABQAIhUBbgJQBZAGAKBWQgGBUhcAJQhagGgKhWg");
	this.shape_87.setTransform(-175.2,26.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABVB0QgIgDhKgwQhIgvgjg1Qgjg2BsgXQBugPAWA5QAWA5gRA9QgRA/gEAFg");
	this.shape_88.setTransform(-186.1,10.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7E33AA").s().p("AADBBQhIgvgjg1Qgjg2BsgXQBugPAWA5QAWA5gRA9QgRA/gEAFQgIgDhKgwg");
	this.shape_89.setTransform(-186.1,10.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#914CC1").ss(1.1,1,1).p("ACIAbQgHAFhSAhQhPAghBgCQhAgDArhjQA1hkA7APQA5AOAqAyQAqAwABAHg");
	this.shape_90.setTransform(-190.6,20.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7E33AA").s().p("AhhBfQhAgDArhjQA1hkA7APQA5AOAqAyQAqAwABAHQgHAFhSAhQhJAeg9AAIgKAAg");
	this.shape_91.setTransform(-190.6,20.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#914CC1").ss(1.1,1,1).p("ABjh+QAAAEgIA3QgJA3gTA6QgTA8ggASQgeASgvhHQg5hfArgrQAsgqA/gJQBAgJAHABg");
	this.shape_92.setTransform(-188.2,37.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7E33AA").s().p("AhBBHQg5hfArgrQAsgqA/gJQBAgJAHABIgIA7QgJA3gTA6QgTA8ggASQgGADgGAAQgbAAgmg4g");
	this.shape_93.setTransform(-188.2,37.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#914CC1").ss(1.1,1,1).p("AhQB1QAJgDBHgyQBHgyAig1QAhg4hsgUQhvgLgUA5QgUA6ASA8QATA/AEAFg");
	this.shape_94.setTransform(-166.9,12.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7E33AA").s().p("AhnAxQgSg8AUg6QAUg5BvALQBsAUghA4QgiA1hHAyQhHAygJADQgEgFgTg/g");
	this.shape_95.setTransform(-166.9,12.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#914CC1").ss(1.1,1,1).p("AiIAiQAIAFBTAeQBQAeBAgGQBBgFgvhhQg4hig7ARQg4AQgoA0QgoAygCAGg");
	this.shape_96.setTransform(-158.7,20.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7E33AA").s().p("AgtBFQhTgegIgFQACgGAogyQAog0A4gQQA7gRA4BiQAvBhhBAFIgUABQg5AAhDgZg");
	this.shape_97.setTransform(-158.7,20.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#914CC1").ss(1.1,1,1).p("AhthpQABAJAlBQQAkBOAuArQAxAqAmhmQAfhrg0geQg1geg/AHQhAAHgGADg");
	this.shape_98.setTransform(-163.1,35.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7E33AA").s().p("AALBpQgugrgkhOQglhQgBgJQAGgDBAgHQA/gHA1AeQA0AegfBrQgbBIggAAQgNAAgPgMg");
	this.shape_99.setTransform(-163.1,35.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#914CC1").ss(1.1,1,1).p("AgEiFQgGAHgqBNQgpBLgFBBQgFBABogfQBpgpgIg8QgIg7gtgvQgsgvgFgDg");
	this.shape_100.setTransform(-175.5,38.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7E33AA").s().p("AhiBbQAFhBAphLQAqhNAGgHQAFADAsAvQAtAvAIA7QAIA8hpApQghAKgWAAQgvAAADgrg");
	this.shape_101.setTransform(-175.5,38.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#037017").s().p("AABBJQADgQgwgLIgugHIAKgKQALgLgNgHQgTgHgRgEIgTgEIAYgHQAXgFAHgIQAEgIAAgMIAAgNQAjASAXgWQAVgVABgFIAOAPQAMANARAHQASAEAagEIAbgFQgEABgRAMQgSAMgDAPQAEANAdAEQAdAEAEAAIgbAIQgZAHgTABQgOACAJANQAIANADACQgcACgaASIgWASQACgFABgKg");
	this.shape_102.setTransform(-173.6,29);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#9E6AC4").s().p("ABnARIgNgGQgNgGgSgEIgTgCQgGAegUANQgTAOgCgBQAjgWAEgSQAEgRgCgBQgrgGgHACQgBAVgOAMQgOANgCAAQAXgWADgNQADgKgCgBQgBgBgLADIgOADIgQACIgRABQgNAUgBgEQANgNgEgCQgmgCgNABQAKgCALABIAQAAIgTgKQAUAGACAEQALAAATgCIAUgEQgSgRgRgHIgNgFQAVAGAOAKQAQAKAAACQAtgGAHADQgFgZgOgMIgPgKQAYANAHAQQAIAQgBACQAWACAUAGIAVAEQAAgRgKgQQAWAfgGADQA2AbgBAGQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgYgTgDAAQgFATgKAKIgLAKQAbgjgEgGg");
	this.shape_103.setTransform(-186.1,78);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7E33AA").s().p("AgJA6Qg3gTgbgQQgSgIgOgEIAkAJQAIAFAJgBQAIgDAIgEIALgIQAEgHAHgCQAEAIgJALQgHAFgEAIQAGAKAPgDQANgEALgJQAGgGAGgHQAHgJAHABQAAAHgEAGIgIANQgGAGgEAGQAEAJANgDQAMACAMgBQAJgDAHgHQAHgIAIgFQAKgEAHABIgFAPQAIgEAEgIQAJgSgOgMQgIgHgIgGQgIgJgJgEQAIAMgBANQgMgOgPgNQgNgNgSAAIgOAAQgIABAEAIQAKAIAAALQgKgDgIgIQgLgHgMgEQgHgEgGAEQgbAMgcgKIgBAAQBMgtBUAfQArAUAQAeQAQAggBADQg3AcgrAAQgUAAgPgFg");
	this.shape_104.setTransform(-184.9,78);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7E33AA").s().p("AAEA6Qg0gSgcgRQg7gWgEACIAOgNQAJgMAMgIQAkgXArgIQAtgFAtAQQArAUAQAeQAQAggBADQg3AcgrAAQgTAAgSgFg");
	this.shape_105.setTransform(-186.4,78);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9E6AC4").s().p("AgJBCQAqgbAFgWQAFgUgDgBQg0gIgHAEQgCAYgQAPQgRAPgCAAQAbgaAEgPQADgNgCAAQgCgCgNADIgQAEIgTADIgVABQgPAXgCgEQAQgPgFgDQgtgCgPABQAMgCANAAIASABQgOgJgIgDQAXAHAEAEQANABAWgDIAYgFQgWgUgUgIIgQgFQAaAGARALQASANABACQA1gHAIADQgEgbgQgPIgOgKQAYAOAIARQAJAUgCACQAbADAYAGIAZAFQgBgXgOgUIgPgTQAaAZAGATQAFATgBABQBBAfgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgdgWgDABQgEAPgHALIgCgDQALgWgCgEIgBgBIABABQAAABgQgIQgPgHgVgFIgWgCQgCAJgEAJIgGAGQgFAIgCAHQgeAcgIAAIAAAAg");
	this.shape_106.setTransform(-185.7,105.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7E33AA").s().p("AAEAPIgzgXQgYgKgSgGIAwANQAJAFALgBQAKgDAJgFQAFgFAGgFQAFgHAHgDQAGAJgLANQgJAGgEAIQAHAMASgDQAQgGAMgIIASgQQAHgKAIAAQABAIgEAIIgCACQgDAEgCAFIgDADQgHAHgFAHQAAAJANgCIAEAQQgsgFghgRg");
	this.shape_107.setTransform(-190.5,109.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7E33AA").s().p("ABQAnIALgEQAIgCABACIgGATQAJgGAFgJQALgVgRgRIgTgNQgJgKgMgGQAKAOgBAOQgOgPgRgPQgQgPgWgBIgQAAQgLABAFAKQAMAKAAANQgMgEgJgKQgNgIgPgFQgIgEgHAEQggAPghgMIgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQgVAMgUAIQgHgSgMgMg");
	this.shape_108.setTransform(-183.5,105);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#7E33AA").s().p("AgmA2Ig1gaQhGgagEADIAbgcQACABAPAGQAQAGAMgGQAIgIgNgJQgNgJgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQgWAMgUAIQgNghgcgNQgbgMgQATQgQAaANAZQgqgFghgQg");
	this.shape_109.setTransform(-186.1,105.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#9E6AC4").s().p("AB7AUIgRgHQgPgHgVgFIgWgCQgHAjgZAQQgWAQgDAAQAqgbAFgWQAFgUgDgBQg0gHgHACQgCAZgQAPQgRAPgCAAQAbgaAEgPQADgNgCgBQgCgBgNADIgQAFIgTACQgKABgLAAQgPAYgCgGQAQgOgFgDQgtgCgPABQAMgCANAAIASABIgUgLQAVAGAEAFQANAAAWgDIAYgFQgWgVgUgHIgQgGQAaAHARALQASANABABQA1gHAIAFQgFgfgSgNIgRgNQAdARAJASQAJAUgCACQAbADAYAGIAZAFQgBgYgOgTIgPgTQAaAZAGATQAFATgBABQBBAfgBAIQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAgBQgdgWgDABQgGAWgMANQgMAMgBgBQAggrgEgGg");
	this.shape_110.setTransform(-186.7,137.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7E33AA").s().p("AgIBFQhCgWghgUQgYgKgSgGIAwANQAJAGALgCQAKgCAJgGQAHgEAGgGQAFgHAHgDQAGAJgLANQgJAHgEAJQAHAMASgDQAQgFAMgLIAQgPQAHgLAIABQABAIgFAIIgJAPQgIAHgEAIQAEAKAPgDQAPACAOgBQALgEAIgJQAJgIAKgHIAKgEQAJgCAAACIgFATQAJgGAFgJQALgVgRgPIgTgPQgKgKgLgGQAKAOgBAQQgPgRgRgPQgPgPgWgBIgRAAQgKABAFAKQAKAKAAANQgKgEgJgKQgNgIgPgFQgIgEgHAEQggAPgigMIgBAAQBbg1BkAlQAzAXATAkQATAmgBAEQhCAigzAAQgXAAgSgHg");
	this.shape_111.setTransform(-185.5,137.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7E33AA").s().p("AAGBFQhAgWghgUQhGgagEADIAbgcQACABAPAGQAQAGAMgGQAIgIgNgJQgNgJgCAAQBbg1BkAlQAzAXATAkQATAmgBAEQhBAig0AAQgXAAgUgHg");
	this.shape_112.setTransform(-187.1,137.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#9E6AC4").s().p("AhqA8QgNgMgGgWQgEgBgbAYQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgIBAghQgBgBAEgTQAFgTAZgaIgOAUQgNATAAAYIAZgGQAXgHAbgEQgBgCAIgUQAIgTAbgRIgQAMQgRAQgEAdQAIgEA2AGQAAgCASgNQAQgMAagIIgQAGQgUAJgUAVIAYAEQAWADANgCQADgFAZgIIgYANIATgBQANgBANAEQgPgBgvAFQgEAAAQAPQgCAEgQgUIgUgBQgKgBgJgDIgRgDQgNgDgCACQgBgBADANQAEAQAdAZQgDAAgRgPQgRgOgCgYQgIgDg0AJQgCABAGAUQAFAWArAZQgDABgXgPQgYgQgJgjIgWADQgVAGgPAIIgQAHQgEAHAiApQgCAAgMgLg");
	this.shape_113.setTransform(-152.9,122.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#7E33AA").s().p("AiUAvQgBgEARgnQASgkAygZQBjgpBdAyIgCABQghAMgggNQgHgEgJAEQgOAFgNAJQgIALgKAEQgBgNAKgLQAEgKgKAAQgIgBgIABQgWACgPAQQgRAQgOAQQgBgPAJgOQgLAFgJALIgSAQQgRAPAMAVQAFAJAJAGIgGgTQABgCAIACIALADQAKAGAJAJQAJAIALADQANABAPgCQAPACAEgKQgFgIgHgHIgKgOQgFgIAAgJQAJAAAHAKIAQAPQANAKAQAEQASADAHgNQgFgIgJgGQgLgNAFgIQAIABAFAHQAGAGAHADQAJAGALACQAKABAJgFIAvgPQgRAGgYALQggAVhBAYQgUAJgbAAQgxAAg/geg");
	this.shape_114.setTransform(-154.1,122);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#7E33AA").s().p("AikAvQgBgEARgnQARgkAzgZQBjgpBcAyIgPAKQgMAJAIAIQAMAGAQgHIARgIIAcAdQgFgChFAaQggAVg+AYQgXAJgaAAQgxAAg/geg");
	this.shape_115.setTransform(-152.5,122);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9E6AC4").s().p("AhtA3QgLgNgFgWQgEgBgdAVQAAABgBAAQAAAAAAAAQgBgBgBAAQAAgBgBgBQgBgHBCgeQgBgBAGgSQAGgTAbgZIgPATQgPAUgCAXIAagEQAXgGAbgCQgBgCAKgUQAGgSAfgOIgRAKQgRAOgHAeQAJgEA1AJQAAgCATgMQARgLAagFIgQAFQgUAHgXATIAYAGQAWADANgCQAEgCAZgHQgJADgPAHIASAAQAOAAAMAFQgQgDguACQgEADAPAPQgCAEgOgXQgLgBgKgCQgJgBgJgBIgRgFQgNgDgCABQgBAAACANQADAQAbAbQgCgBgQgPQgRgQAAgYQgIgDg0AGQgDABAFAUQAEAWApAcQgDAAgWgRQgXgQgGgkIgXACQgVAEgQAGQgUAKAFgEQgIADAhAwQgBAAgMgMg");
	this.shape_116.setTransform(-152.8,92);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#7E33AA").s().p("AiVAmQgBgEAUgkQAUglA0gWQBlgiBZA4IgBABQgiAKgfgQQgHgEgJAEQgPAEgMAIQgKAKgMAEQAAgOAMgJQAFgKgKgBIgQgBQgWAAgQAPQgRAPgQAQQAAgQAKgNQgLAEgKAKIgTAPQgSAOALAWQAEAJAJAGIgFgTQABgCAIADIAKADQAKAIAJAJQAIAIAKAFQAOABAPgBQAPADAFgKQgFgIgHgHQgFgIgEgIQgEgIABgIQAIAAAHALIAPAQQAMALAQAFQASADAHgLQgEgJgJgHQgKgNAGgKQAHADAFAIQAGAGAHAEQAIAGALADQAKACAJgFIAwgMQgRAFgZAJQgiAUhCATQgQAGgVAAQg1AAhDglg");
	this.shape_117.setTransform(-154.1,92);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7E33AA").s().p("AilAmQgBgEAUgkQAUgmA0gVQBIgZBHAYQA7AXAnAwQgFgDhHAYQghAThAAUQgTAGgVAAQg0AAhDglg");
	this.shape_118.setTransform(-152.4,92.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#9E6AC4").s().p("AhTAyQgKgJgGgTQgDAAgWATQAAABgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQgCgGA0gcQgHgFAUgdQgJAPABARIAUgFQATgGAVgEQgBgBAHgRQAGgPAWgOIgNAKQgNANgEAYQAHgDArADQABgBAOgLQANgKAVgHIgNAGQgQAHgRARIAUADQASACALgCQACgDATgHIgSALQAIgEAXAEQgOAAgfAEQgDACANAKQgBAEgNgRQgJABgIgBIgPgDIgOgCQgLgCgBABQgCAAAEAKQADANAYAUQgCAAgOgMQgPgLgCgUQgGgCgqAIQgCACAFAPQAFASAjATQgCABgTgMQgUgMgIgcIgSADQgRAEgMAHIgMAGQgEAFAcAiIgLgJg");
	this.shape_119.setTransform(-158.5,67.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7E33AA").s().p("Ah4ApQgBgEAOggQANgdApgVQBQgjBLAnIgBABQgbALgagLQgGgDgGAEQgMAEgKAIQgHAIgIAEQAAgLAHgIQAAgNgSAFQgSABgMANQgNANgLAPQgCgNAIgMQgJAFgHAJQgIAGgHAFQgNAOAKARQAEAHAIAFIgGgPQAHgCAJAEQAJAFAHAGQAIAHAIADQAMAAALgCQANACADgJQgEgGgHgFIgIgMQgDgHgBgGQAHgBAHAIQAGAHAGAFQALAIANADQAPACAFgKQgEgHgIgFQgJgKAEgGQAHAAAEAGIALAHQAIAEAIACQAIABAIgFIAmgMQgOAFgUAJQgaASg0AUQgRAIgXAAQgnAAgygWg");
	this.shape_120.setTransform(-159.3,67.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7E33AA").s().p("AiFApQgBgEAOggQANgdApgVQBQgjBLAnIgMAJQgJAIAGAGQAKAEANgFIANgHIAYAXQgEgCg4AWQgaASgyAUQgTAIgXAAQgnAAgygWg");
	this.shape_121.setTransform(-158,67.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9E6AC4").s().p("ABDAEIgIgEQgJgCgMgDIgNgCQgEATgOAJQgKAJgDAAQAXgPADgNQADgKgCgBQgdgEgEACQgBANgKAIQgJAJgCAAQAbgdgIgBQgIAAgKADIgLACIgLABQgJAMgBgDQAJgGgDgCQgVgCgKABQAQgEAFACIgNgHQAOAFACACQAHABANgCIAOgDQgNgKgIgEQAVAIACAFQAegEAFACQgCgKgDgHQALAMgEAFQAkAGAIAEQgBgNgGgLQAPAVgFAEQAmAQgBAEQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgQgNgCABQgLAagHAAQAUgagFgCg");
	this.shape_122.setTransform(-183.8,58.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7E33AA").s().p("AgEAnQgmgMgTgMQgNgGgLgDIAcAIQAFADAGgBQAGgCAFgDIAHgFQADgFAFgBQADAFgGAIQgFADgDAFQAEAHAKgBQAJgDAIgGIAIgJQAEgGAFAAQAAAFgDAEIgFAJIgHAIQACAGAJgBIARAAQAGgCAEgFIALgJQAHgDAEABIgDALQAFgEADgFQAHgMgKgIIgLgIQgFgGgHgDQAGAIgBAJIgSgTQgJgIgNgBQgMgDABAKQAFAFAAAIQgFgCgGgGQgHgFgIgDQgFgCgEACQgSAJgUgHIAAAAQAzgfA5AWQAeANAKAUQALAWAAACQgmATgdAAQgOAAgJgEg");
	this.shape_123.setTransform(-183.3,57.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#7E33AA").s().p("AADAnQgkgMgSgMQgpgOgCABIAOgNQA4gvBEAZQAeANALAUQAKAWAAACQglATgeAAQgNAAgMgEg");
	this.shape_124.setTransform(-184.2,57.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7E33AA").s().p("AAAIxQAJiVAEjIQAEjJgTifQgfjtAEiiQAEijADgGQgDCGADA4QACA4AKBGQAKBFAQCwQARC8gCDIQgCDIgICLIgKCRIgYAAIANicg");
	this.shape_125.setTransform(-171.6,94.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9E6AC4").s().p("AhJAIQgDgBgQAPQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBgEAngSQgFgFAQgXQgIAMABAOQAHgEAmgHQgEgGAMgNQgDAHgCAMQAFgDAgADQABgFAXgKQgJAFgNALIAPACQANACAIgBQACgCANgFIgMAHQAFgCASADIgiACQgCACAJAHQgBADgJgMIgNgBIgLgCQgLgCgIgBQgIACAcAeQgBAAgKgJQgLgJgBgNQgFgCgeAFQgCABAEALQADAOAZAPQgCAAgNgJQgPgJgFgVIgNAEQgNADgJACIgJAFQgDAEAUAZQgGAAgNgbg");
	this.shape_126.setTransform(-164.3,53.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7E33AA").s().p("AhZAcQAAgCAKgYQALgVAegPQA7gZA4AeIgBABQgUAHgTgIQgFgCgFADQgIADgIAFQgFAGgGADQAAgIAFgGQABgKgNADQgOABgJAKIgSAUQgBgKAGgIQgHADgGAHQgGAEgFAFQgKAJAHAMQAEAGAFADIgEgLQAFgBAHADQAHADAFAGQAFAEAHADIARgBQAJABADgGIgIgJIgGgJQgDgFAAgFQAFAAAFAGIAJAJQAIAGAKADQAKABAFgHQgEgFgFgEQgHgIADgEQAFAAADAFIAIAFQAGADAGACQAGAAAGgDIAcgJIgZAKQgTANgnAPQgMAFgQAAQgeAAgmgSg");
	this.shape_127.setTransform(-164.9,52.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7E33AA").s().p("AhjAcQAAgCAKgYQALgVAegPQA7gZA4AeIgJAGQgHAGAFAFQAUABAHgHIARASQgDgCgqAPQgTANglAPQgOAFgQAAQgeAAgmgSg");
	this.shape_128.setTransform(-163.9,52.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7E33AA").s().p("AgsNxIAIhGQAHhEAJhvQhpAuhEgeQgcgJgVgMIgjgSIgBgBIgEgCIgLgEIgDgCIgKgDIAAgBIgKgDIgBgBIgJgDIgigJIAdgfIASAJQAQAGANgGQAIgHgKgIQgKgJgHgDIgCgBQBhg2BqApIAMAFIADACIAJAFIABABIAKAHIACABIAHAHIABABIAIAIIACACIAFAHIABACIAGAIIABACIAEAGIABACIAEAIIABACIADAFIABADIACAGQALiRAEikIgRAIIgCABIgQAGIgEgIIgBgDIgDgFIgCgEIgDgDIgDgEIgCgDQgigigeAQIgCACIgCACIAAABIgBAAIgBACIgEAFIgCAEIAAABQgGAOAEAOIABAFIAAADIADAHQgZgDgVgHIgBAAQgbgKgWgLIgogVIgLgFIgCgBIgKgEIgKgEIgCAAIgJgDQgggKgCABIAegfQABACARAGQAQAHANgGQAIgHgLgJQgKgIgGgDIgCgBQBgg2BrApIAMAFIACABIALAGIAJAHIACACIAJAHIAAABIAHAHIACACIAGAIIABACIAFAGIACADIAEAHIACAEIACAEIACAEIAAABIAFAKQACimgPiEQgVikgBiHIgHACQhOAZgYgfQgEgFgCgHQgJAIgLADQgnAIgrhFQg0hVAfg2QAFgJAHgHQgzAHgYgWQgcgcAkhKQAnhNA1gMQglgnADghQAIgoBQgMQBigPAmAyIAIAMQAogjBTANQBQANAIAnQADAcgaAfIAGAAQA+ACAtBZQAkBJgbAcQgWAUgsgEQAHAogTA5QgcBNgnAAQgjgDggguQgOAwhDAdIADAZQALgZAegPQBBgYA6AgIAAABQgEABgHAGQgGAFAFAEQAVACAHgHIASATQgBgBgaAIIgDABIgGADIgCABIgJAEIgZAMQgNAHgQAGQgnAQg3gWIAPCQIACgIIAAgBQADgJAGgKIACgCIAFgHIACgDIAHgIIABgBIAJgIIADgCIAIgGIADgCIANgGQBWgjBPArIgBAAQgGADgIAHQgIAHAHAGQAKAFANgGIAPgHIAYAZQgBgBgaAIIgHADIgCABIgIADIAAAAIgIADIgCABIgJAEIgDACIgBAAIgcAQQgSAJgWAIQgxAVhIgXIgKgEIAAAAIgIgEIAFBIQAGBSACBaIABAAIABgFIABgCIACgEIABgCIACgEIABgDIAEgGIAAgBIAFgIIACgCIAEgGIACgDIAEgGIADgDIAFgFIACgDIAIgHIACgCIAHgFIAEgDIAHgEIADgCIAIgEIAEgCIAMgEIATgFIABgBQBFgQA+AXIACAAIAAABQAZAJAYAPIgCABIAAAAQASANAPARIAVAXQgBgBghAHIgKADIgBAAIgKADIgBAAIgJAEIgDABIgLAEIgFABIgBABIgkAQQgWAKgcAIQhIAZhog4IgBAAQADCcgGCVIACgFIAAgCIADgGIACgEIACgEIACgFIACgCIAFgIIABgCIAEgHIACgCIAHgIIAHgIIACgCIAHgHIACgBIAKgHIACgBIAIgFIADgCIAMgFQBrgpBgA2IgBAAQgFACgLAJQgMAJAIAIQANAGAQgGIASgJIAdAfIgiAJIABAAIgKADIgBABIgUAHIgDABIgKAFIgFACIgBABIgDACIgBAAIgeAQQgWAMgcAJQhFAehsgxQgHCwgHByIgKB3gAiuANQgXgIgSgIIgigRIgJgEIgDgBIgHgDIgBgBIgIgDIgBAAIgIgDIgcgHIAPgQQAJgMAMgJIALgFIAAAAQAkgUAlgFIABAAIACAAIAJgBIADAAIAJAAIACAAQAiAAAlAPQAtAVAQAiQAQAigBADQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQg4AYgsAAQgbAAgXgKgAiQjbIAAAAQgQgFgMgHIgXgMIgJgEIgCgBIgFgCIgDgBIgEgBIgCgBIgUgFIAPgQQAIgHAJgGIACgBQASgKAUgEQAfgGAiAKIALAEQAfAOALAXQALAXgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgmARgeAAQgSAAgQgGg");
	this.shape_129.setTransform(181.8,77.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7E33AA").s().p("AgsNxIAIhGQAHhEAJhvQhpAuhEgeQgcgJgVgMIgjgSIgBgBIgEgCIgLgEIgDgCIgKgDIAAgBIgKgDIgBgBIgJgDIgigJIAdgfIASAJQAQAGANgGQAIgHgKgIQgKgJgHgDIgCgBQBhg2BqApIAMAFIADACIAJAFIABABIAKAHIACABIAHAHIABABIAIAIIACACIAFAHIABACIAGAIIABACIAEAGIABACIAEAIIABACIADAFIABADIACAGQALiRAEikIgRAIIgCABIgQAGIgEgIIgBgDIgDgFIgCgEIgDgDIgDgEIgCgDQgigigeAQIgCACIgCACIAAABIgBAAIgBACIgEAFIgCAEIAAABQgGAOAEAOIABAFIAAADIADAHQgZgDgVgHIgBAAQgbgKgWgLIgogVIgLgFIgCgBIgKgEIgKgEIgCAAIgJgDQgggKgCABIAegfQABACARAGQAQAHANgGQAIgHgLgJQgKgIgGgDIgCgBQBgg2BrApIAMAFIACABIALAGIAJAHIACACIAJAHIAAABIAHAHIACACIAGAIIABACIAFAGIACADIAEAHIACAEIACAEIACAEIAAABIAFAKQACimgPiEQgVikgBiHIgHACQhOAZgYgfQgEgFgCgHQgJAIgLADQgnAIgrhFQg0hVAfg2QAFgJAHgHQgzAHgYgWQgcgcAkhKQAnhNA1gMQglgnADghQAIgoBQgMQBigPAmAyIAIAMQAogjBTANQBQANAIAnQADAcgaAfIAGAAQA+ACAtBZQAkBJgbAcQgWAUgsgEQAHAogTA5QgcBNgnAAQgjgDggguQgOAwhDAdIADAZQALgZAegPQBBgYA6AgIAAABQgEABgHAGQgGAFAFAEQAVACAHgHIASATQgBgBgaAIIgDABIgGADIgCABIgJAEIgZAMQgNAHgQAGQgnAQg3gWIAPCQIACgIIAAgBQADgJAGgKIACgCIAFgHIACgDIAHgIIABgBIAJgIIADgCIAIgGIADgCIANgGQBWgjBPArIgBAAQgGADgIAHQgIAHAHAGQAKAFANgGIAPgHIAYAZQgBgBgaAIIgHADIgCABIgIADIAAAAIgIADIgCABIgJAEIgDACIgBAAIgcAQQgSAJgWAIQgxAVhIgXIgKgEIAAAAIgIgEIAFBIQAGBSACBaIABAAIABgFIABgCIACgEIABgCIACgEIABgDIAEgGIAAgBIAFgIIACgCIAEgGIACgDIAEgGIADgDIAFgFIACgDIAIgHIACgCIAHgFIAEgDIAHgEIADgCIAIgEIAEgCIAMgEIATgFIABgBQBFgQA+AXIACAAIAAABQAZAJAYAPIgCABIAAAAQASANAPARIAVAXQgBgBghAHIgKADIgBAAIgKADIgBAAIgJAEIgDABIgLAEIgFABIgBABIgkAQQgWAKgcAIQhIAZhog4IgBAAQADCcgGCVIACgFIAAgCIADgGIACgEIACgEIACgFIACgCIAFgIIABgCIAEgHIACgCIAHgIIAHgIIACgCIAHgHIACgBIAKgHIACgBIAIgFIADgCIAMgFQBrgpBgA2IgBAAQgFACgLAJQgMAJAIAIQANAGAQgGIASgJIAdAfIgiAJIABAAIgKADIgBABIgUAHIgDABIgKAFIgFACIgBABIgDACIgBAAIgeAQQgWAMgcAJQhFAehsgxQgHCwgHByIgKB3gAiuANQgXgIgSgIIgigRIgJgEIgDgBIgHgDIgBgBIgIgDIgBAAIgIgDIgcgHIAPgQQAJgMAMgJIALgFIAAAAQAkgUAlgFIABAAIACAAIAJgBIADAAIAJAAIACAAQAiAAAlAPQAtAVAQAiQAQAigBADQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQg4AYgsAAQgbAAgXgKgAiQjbIAAAAQgQgFgMgHIgXgMIgJgEIgCgBIgFgCIgDgBIgEgBIgCgBIgUgFIAPgQQAIgHAJgGIACgBQASgKAUgEQAfgGAiAKIALAEQAfAOALAXQALAXgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgmARgeAAQgSAAgQgGg");
	this.shape_130.setTransform(41.8,77.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7E33AA").s().p("AgsNxIAIhGQAHhEAJhvQhpAuhEgeQgcgJgVgMIgjgSIgBgBIgEgCIgLgEIgDgCIgKgDIAAgBIgKgDIgBgBIgJgDIgigJIAdgfIASAJQAQAGANgGQAIgHgKgIQgKgJgHgDIgCgBQBhg2BqApIAMAFIADACIAJAFIABABIAKAHIACABIAHAHIABABIAIAIIACACIAFAHIABACIAGAIIABACIAEAGIABACIAEAIIABACIADAFIABADIACAGQALiRAEikIgRAIIgCABIgQAGIgEgIIgBgDIgDgFIgCgEIgDgDIgDgEIgCgDQgigigeAQIgCACIgCACIAAABIgBAAIgBACIgEAFIgCAEIAAABQgGAOAEAOIABAFIAAADIADAHQgZgDgVgHIgBAAQgbgKgWgLIgogVIgLgFIgCgBIgKgEIgKgEIgCAAIgJgDQgggKgCABIAegfQABACARAGQAQAHANgGQAIgHgLgJQgKgIgGgDIgCgBQBgg2BrApIAMAFIACABIALAGIAJAHIACACIAJAHIAAABIAHAHIACACIAGAIIABACIAFAGIACADIAEAHIACAEIACAEIACAEIAAABIAFAKQACimgPiEQgVikgBiHIgHACQhOAZgYgfQgEgFgCgHQgJAIgLADQgnAIgrhFQg0hVAfg2QAFgJAHgHQgzAHgYgWQgcgcAkhKQAnhNA1gMQglgnADghQAIgoBQgMQBigPAmAyIAIAMQAogjBTANQBQANAIAnQADAcgaAfIAGAAQA+ACAtBZQAkBJgbAcQgWAUgsgEQAHAogTA5QgcBNgnAAQgjgDggguQgOAwhDAdIADAZQALgZAegPQBBgYA6AgIAAABQgEABgHAGQgGAFAFAEQAVACAHgHIASATQgBgBgaAIIgDABIgGADIgCABIgJAEIgZAMQgNAHgQAGQgnAQg3gWIAPCQIACgIIAAgBQADgJAGgKIACgCIAFgHIACgDIAHgIIABgBIAJgIIADgCIAIgGIADgCIANgGQBWgjBPArIgBAAQgGADgIAHQgIAHAHAGQAKAFANgGIAPgHIAYAZQgBgBgaAIIgHADIgCABIgIADIAAAAIgIADIgCABIgJAEIgDACIgBAAIgcAQQgSAJgWAIQgxAVhIgXIgKgEIAAAAIgIgEIAFBIQAGBSACBaIABAAIABgFIABgCIACgEIABgCIACgEIABgDIAEgGIAAgBIAFgIIACgCIAEgGIACgDIAEgGIADgDIAFgFIACgDIAIgHIACgCIAHgFIAEgDIAHgEIADgCIAIgEIAEgCIAMgEIATgFIABgBQBFgQA+AXIACAAIAAABQAZAJAYAPIgCABIAAAAQASANAPARIAVAXQgBgBghAHIgKADIgBAAIgKADIgBAAIgJAEIgDABIgLAEIgFABIgBABIgkAQQgWAKgcAIQhIAZhog4IgBAAQADCcgGCVIACgFIAAgCIADgGIACgEIACgEIACgFIACgCIAFgIIABgCIAEgHIACgCIAHgIIAHgIIACgCIAHgHIACgBIAKgHIACgBIAIgFIADgCIAMgFQBrgpBgA2IgBAAQgFACgLAJQgMAJAIAIQANAGAQgGIASgJIAdAfIgiAJIABAAIgKADIgBABIgUAHIgDABIgKAFIgFACIgBABIgDACIgBAAIgeAQQgWAMgcAJQhFAehsgxQgHCwgHByIgKB3gAiuANQgXgIgSgIIgigRIgJgEIgDgBIgHgDIgBgBIgIgDIgBAAIgIgDIgcgHIAPgQQAJgMAMgJIALgFIAAAAQAkgUAlgFIABAAIACAAIAJgBIADAAIAJAAIACAAQAiAAAlAPQAtAVAQAiQAQAigBADQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQg4AYgsAAQgbAAgXgKgAiQjbIAAAAQgQgFgMgHIgXgMIgJgEIgCgBIgFgCIgDgBIgEgBIgCgBIgUgFIAPgQQAIgHAJgGIACgBQASgKAUgEQAfgGAiAKIALAEQAfAOALAXQALAXgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgmARgeAAQgSAAgQgGg");
	this.shape_131.setTransform(-100.2,77.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7E33AA").s().p("AgsNxIAIhGQAHhEAJhvQhpAuhEgeQgcgJgVgMIgjgSIgBgBIgEgCIgLgEIgDgCIgKgDIAAgBIgKgDIgBgBIgJgDIgigJIAdgfIASAJQAQAGANgGQAIgHgKgIQgKgJgHgDIgCgBQBhg2BqApIAMAFIADACIAJAFIABABIAKAHIACABIAHAHIABABIAIAIIACACIAFAHIABACIAGAIIABACIAEAGIABACIAEAIIABACIADAFIABADIACAGQALiRAEikIgRAIIgCABIgQAGIgEgIIgBgDIgDgFIgCgEIgDgDIgDgEIgCgDQgigigeAQIgCACIgCACIAAABIgBAAIgBACIgEAFIgCAEIAAABQgGAOAEAOIABAFIAAADIADAHQgZgDgVgHIgBAAQgbgKgWgLIgogVIgLgFIgCgBIgKgEIgKgEIgCAAIgJgDQgggKgCABIAegfQABACARAGQAQAHANgGQAIgHgLgJQgKgIgGgDIgCgBQBgg2BrApIAMAFIACABIALAGIAJAHIACACIAJAHIAAABIAHAHIACACIAGAIIABACIAFAGIACADIAEAHIACAEIACAEIACAEIAAABIAFAKQACimgPiEQgVikgBiHIgHACQhOAZgYgfQgEgFgCgHQgJAIgLADQgnAIgrhFQg0hVAfg2QAFgJAHgHQgzAHgYgWQgcgcAkhKQAnhNA1gMQglgnADghQAIgoBQgMQBigPAmAyIAIAMQAogjBTANQBQANAIAnQADAcgaAfIAGAAQA+ACAtBZQAkBJgbAcQgWAUgsgEQAHAogTA5QgcBNgnAAQgjgDggguQgOAwhDAdIADAZQALgZAegPQBBgYA6AgIAAABQgEABgHAGQgGAFAFAEQAVACAHgHIASATQgBgBgaAIIgDABIgGADIgCABIgJAEIgZAMQgNAHgQAGQgnAQg3gWIAPCQIACgIIAAgBQADgJAGgKIACgCIAFgHIACgDIAHgIIABgBIAJgIIADgCIAIgGIADgCIANgGQBWgjBPArIgBAAQgGADgIAHQgIAHAHAGQAKAFANgGIAPgHIAYAZQgBgBgaAIIgHADIgCABIgIADIAAAAIgIADIgCABIgJAEIgDACIgBAAIgcAQQgSAJgWAIQgxAVhIgXIgKgEIAAAAIgIgEIAFBIQAGBSACBaIABAAIABgFIABgCIACgEIABgCIACgEIABgDIAEgGIAAgBIAFgIIACgCIAEgGIACgDIAEgGIADgDIAFgFIACgDIAIgHIACgCIAHgFIAEgDIAHgEIADgCIAIgEIAEgCIAMgEIATgFIABgBQBFgQA+AXIACAAIAAABQAZAJAYAPIgCABIAAAAQASANAPARIAVAXQgBgBghAHIgKADIgBAAIgKADIgBAAIgJAEIgDABIgLAEIgFABIgBABIgkAQQgWAKgcAIQhIAZhog4IgBAAQADCcgGCVIACgFIAAgCIADgGIACgEIACgEIACgFIACgCIAFgIIABgCIAEgHIACgCIAHgIIAHgIIACgCIAHgHIACgBIAKgHIACgBIAIgFIADgCIAMgFQBrgpBgA2IgBAAQgFACgLAJQgMAJAIAIQANAGAQgGIASgJIAdAfIgiAJIABAAIgKADIgBABIgUAHIgDABIgKAFIgFACIgBABIgDACIgBAAIgeAQQgWAMgcAJQhFAehsgxQgHCwgHByIgKB3gAiuANQgXgIgSgIIgigRIgJgEIgDgBIgHgDIgBgBIgIgDIgBAAIgIgDIgcgHIAPgQQAJgMAMgJIALgFIAAAAQAkgUAlgFIABAAIACAAIAJgBIADAAIAJAAIACAAQAiAAAlAPQAtAVAQAiQAQAigBADQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQg4AYgsAAQgbAAgXgKgAiQjbIAAAAQgQgFgMgHIgXgMIgJgEIgCgBIgFgCIgDgBIgEgBIgCgBIgUgFIAPgQQAIgHAJgGIACgBQASgKAUgEQAfgGAiAKIALAEQAfAOALAXQALAXgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgmARgeAAQgSAAgQgGg");
	this.shape_132.setTransform(-250.2,77.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#914CC1").s().p("EgpAAQ+IAAzBQBDAEBAgBQD3ADD2gaQD3gaDwhRQCsg2CmhSQCnhSClhcQDHhyDXiEQDWiEDhhSQDjhSDwAjQFFA7E2BvQE3BuE1BzQDYBPDeA9QDdA9DpAcIAAYBg");
	this.shape_133.setTransform(-36.3,58.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#315E02").ss(1,1,1).p("EApBgcFMhSBAAAMAAAA4LMBSBAAAg");
	this.shape_134.setTransform(-36.3,-12.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#7A0ABC").s().p("EgpAAcGMAAAg4LMBSAAAAMAAAA4Lg");
	this.shape_135.setTransform(-36.3,-12.4);

	this.addChild(this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-299.8,-193.2,527,361.7);


(lib.answerQuestion = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9ArQgEgDAAgCIAAgBIAAgHIABgFIAAgBIAAgFIgBgFIAAgEIAAgHIAAgDIAAgDIABgDIACgBIABgBIABAAQAEAAACADIABABIAAAAIABgCQAGgIAEAAQADAAADACIACABIABAAIAEACIAEAGIABAIIAAACIgBALIAAARIgBAGIgDABIgCAAIAAAAIgBAAIgBAAIgEgBIgFgDIAAgBIAAgDIABgKIAAgPIAAgEIAAgFIgBAAQgDAAgCAHQgCAHAAAIIAAAPIAAADIAAADIgCABIgCABQgDAAgFgCgAirArQgEgCAAgDIAAgBIAAgKIAAgFIAAgJIAAgHIAAgGIAAgJIABgJIgBgEIAAgFIABgDIAAgEIgBgCIAAgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAFgBQAEAAAEADQAFACAAABIAAABIgBAGIAAAJIgBAIIABAQIABAUIAAAGIgBAFIABACIAAACQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgFAAQgGAAgDgCgAAEAtIgEgBIgCgCIgEgBIgEgCQgDgBgCgGQgCgFAAgHQAAgOAFgJQAFgLADAAIAFACIAEABIABABIABAAIABAAQAEAAAFAIQADAGAAALQABAMgGAJQgFAJgFAAIgBAAgAAAAJQgDAJAAAIIACAEIABABQAAAAACgGQACgGAAgJIAAgIQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgBAJgACgArIgGgBIgBgBIgBgBIAAgBIgBgTIAAgCIAAgHIAAgBIAAgBIAAgCIAAAAIgBAAQgBAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgCgCABgDQAAgDAEgBIADgBIABgGIAAgJIAAgIIAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIADgBQAHAAACACIABABIACABIABABIAAACIAAAKIAAAHQAEAAABACQABABAAAEIAAAEIgCABIgBAAIgCAAIgBAAIgBABIAAACIAAACIAAAJIABATIAAACIgCADIgDABIgEgBgAAsAsIgEgBIgEgBIgDgCIgCgBQgBgCgCgKIgBgGIgBgQIgBgMQAAAAAAgBQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAGABQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAABIAAABIgBACIABADIAAADIAAAIIAAAEIABAEIABAAQABAAACgHIABgJIACgJIACgBIABAAIABAAIAAAAIACgBIADABIAEACQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAEIgBADIAAAFIABACIAAAAQACAAABgIIAEgPIAAgCQACgIADAAQAEAAADACQADACAAACQAAADgEAMIgGAYIgBAGQgCAKgDAAIgGgCIgCAAIgEgCIgBgCIgBgEIgBgJIAAgCIgBAAQgBAAgDAMIgBABIAAACQgBAGgBAAgAB7AqQgDgDAAgDIAAgCIAAgDIAAgHIAAgHIAAgEIAAgEIAAgFIAAgEIAAgCIAAgBIAAgGIAAAAIAAgBIABgCIAFgBQAFAAADACQACADAAAGIAAAcIAAAFIAAACQABAHgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAQgEAAgDgCgAhWAmIgDgFIgFgGIgCgDIgBABIAAAFIAAADIAAAFIAAAEIAAABIgCABIgGgBIgHgBIgBgEIgBgIIAAgMQAAgdACgZIAAgDIAAgBIAAgBIABgCIADgBIAFAAIAEACIACAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBARIgBAXIAAACIAAACIAAABIAAABIAAABQACAAACgEIAHgOIABgCQACgEADAAQACAAADADQADAEABACIgCAEIgIASIAGAMIAEAIQAAABgEAEQgDADgCAAQgCAAgEgGgACAgRIgCgBIgBAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBgCgBgGQAAgEACgDQACgDAEAAIABAAIAFABQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAEIABAEQAAAFgCACQgCADgEAAIgBAAg");
	this.shape.setTransform(26,18.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ag8ArQgFgDAAgCIAAgBIAAgHIAAgFIAAgBIAAgFIAAgFIAAgEIAAgHIAAgDIAAgDIAAgDIADgBIABgBIABAAQAFAAABADIABABIAAAAIABgCQAGgIAFAAQACAAADACIACABIACAAIADACIAEAGIABAIIAAACIAAALIgBARIgBAGIgDABIgCAAIAAAAIgBAAIAAAAIgGgBIgDgDIAAgBIAAgDIAAgKIAAgPIAAgEIAAgFIgBAAQgCAAgDAHQgCAHAAAIIAAAPIAAADIAAADIgBABIgDABQgDAAgEgCgAirArQgDgCgBgDIAAgBIAAgKIAAgFIAAgJIAAgHIAAgGIAAgJIABgJIgBgEIAAgFIABgDIAAgEIgBgCIAAgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAGgBQAEAAAFADQAEACAAABIAAABIgBAGIAAAJIgBAIIABAQIAAAUIAAAGIAAAFIAAACIAAACQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgFAAQgFAAgEgCgAAEAtIgEgBIgCgCIgEgBIgFgCQgCgBgCgGQgCgFAAgHQAAgOAFgJQAEgLAEAAIAFACIAEABIABABIABAAIABAAQAEAAAFAIQADAGAAALQAAAMgFAJQgFAJgFAAIgBAAgAAAAJQgCAJgBAIIABAEIACABQABAAACgGQABgGAAgJIAAgIQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQgCAAAAAJgACgArIgGgBIgBgBIgBgBIAAgBIgBgTIAAgCIAAgHIAAgBIAAgBIAAgCIAAAAIgCAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgCAAgDQgBgDAFgBIADgBIABgGIAAgJIAAgIIAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIADgBQAHAAACACIABABIACABIABABIAAACIgBAKIAAAHQAGAAAAACQABABAAAEIAAAEIgCABIgBAAIgCAAIgBAAIgBABIAAACIAAACIAAAJIAAATIAAACIgBADIgDABIgEgBgAAsAsIgEgBIgEgBIgDgCIgCgBQgBgCgBgKIgBgGIgCgQIgBgMQAAAAAAgBQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAGABQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAABIAAABIgBACIABADIAAADIAAAIIAAAEIABAEIABAAQABAAACgHIABgJIACgJIACgBIAAAAIABAAIABAAIACgBIADABIAEACQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIABAHIAAAEIgBADIAAAFIABACIAAAAQABAAACgIIAEgPIAAgCQACgIADAAQAEAAADACQADACAAACQAAADgEAMIgGAYIAAAGQgDAKgDAAIgGgCIgCAAIgEgCIgBgCIAAgEIgCgJIAAgCIgBAAQgCAAgCAMIgBABIAAACQgBAGgBAAgAB7AqQgDgDAAgDIAAgCIAAgDIAAgHIAAgHIAAgEIAAgEIAAgFIAAgEIAAgCIAAgBIAAgGIAAAAIAAgBIABgCIAFgBQAFAAADACQADADAAAGIAAAcIAAAFIAAACQgBAHgBACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAQgEAAgDgCgAhWAmIgDgFIgFgGIgCgDIgBABIAAAFIAAADIAAAFIABAEIgBABIgDABIgFgBIgHgBIgBgEIAAgIIAAgMQAAgdABgZIAAgDIAAgBIAAgBIABgCIADgBIAFAAIAEACIACAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBARIgBAXIAAACIAAACIAAABIAAABIABABQAAAAADgEIAHgOIABgCQACgEADAAQABAAAEADQAEAEAAACIgCAEIgJASIAHAMIAEAIQgBABgDAEQgDADgCAAQgCAAgEgGgACAgRIgCgBIgBAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgCABgGQAAgEABgDQACgDAEAAIABAAIAEABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIACAEIAAAEQAAAFgCACQgCADgEAAIgBAAg");
	this.shape_1.setTransform(26.7,19.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#037017").s().p("AiQB5QAAgBAAAAQAAgBAAgBQAAAAABAAQABgBAAAAQAPgCAOgEIALgFQgQgaAJggQgDArAQAOIAQgHQANgGAYgQIAVgPQgTgZAIglQADgTAIgOQgRAtALAcQAFANAJAGQAQgNATgTIAPgQQgZgWAPgvQgHA5AUAJIAVgcIAMgSIAQgSQgGgUAHgHQgGAQAJAFQAqgiALgXQgIAXgdAXQAJgBAOgHIAMgGQgRANgVAGQgOAJgcAsQAkgCAegTQggAVgkAEQgUAcgcAYQAZAVAkgLQgXAIgVgFQgOgDgHgGQgbAZgqAZQAUAYAwgDQg1AIgWgaQgrAYgeAAIgEAAg");
	this.shape_2.setTransform(14.6,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#028E1F").s().p("AhhByQgagGgRgKQAhhiBMgxQAagRAggOQAjgNAMgGQAQgHATgLIgmAYQgPAJgEAEIgJAWQgDAJAAAIQgCARgBABQgKAHgCgbIACgLQABgIgCgDQgEgFgJAHQgJAGgEAGQgEAIgHAaIgDAXIAAAMQgBAJgEgBQgEAAgEgOIgDgRIAAgUQgEgHgRASQgHAIgQAMQgEAHgDASQgBASgDAIQAAADgGAIQgGAJgBgCIgJgRQgCANABAIQAHAZAZgCIAZgFIAOgCQAJAAAEgDQgEgCgMgDQgKgDgBgGIAugEQAagEANgOIAPgPQAHgLgKgCIgPAAQgJgBgBgGQADgEAJgBIAOgCQAKgCAUgLQAKgDADgIQAKghAngWIACgBQgmBvhnA4QgfARgiAAQgQAAgQgEg");
	this.shape_3.setTransform(14.2,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009F29").s().p("AhlB/QgagGgRgKQAhhiBMgxQAagRAggOQAjgNAMgGQAvgWAcgWIgBAbQgBAegCAHQgVBAgdAkQglAwg5AgQggARgiAAQgQAAgQgEg");
	this.shape_4.setTransform(14.6,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#037017").s().p("AjiAuQgcALgcAbQgGACAAgFQAggoBOgdQgDg2BEg6Qg7A6AFAzQBJgXA7gGQABgQALgVQAXgpA1gWQhJAhgHBCIAhgCQAqgCAiAGIAhgYQApgaAqgJQg+AOgvAwIAqAGQAtAHAQgEIATgLQAXgMATgDQgkALgSAPIAhgDQAlABAUAJQgkgNhTANIABAJQAEAKAOAJQgOAAgPgcQgRAAgTgDIghgEIg3gJQgLAjBEA4QhCgiABg4QgzgEg3AOIgBAIQABAOAFAOQASAtBCAiQgWgIgYgRQgxgigGgzQhIAMgfAQQgWAMgEAAQgEAkA0AtQgtgagKgxg");
	this.shape_5.setTransform(31.4,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#028E1F").s().p("AkEBOQAHggAXgnQAuhLBMgcQCuhAChBQIgDABQhEAXgugZQgJgFgSAGQgiANgOAKIgRAPQgLAJgHAAQgEgIAHgMIAQgSQAJgPgTgDIgeAAQgfABgiAcIg3A2QgFgJAIgQQAKgRACgHQgHABgMAKQgMAMgFAEIggAaQgeAaATAkQAGALASANQgHgUgCgLQgBgEAQAEIATAFQAFADAcAVQAUARANADQAPAEAjgHQAlgCgDgLQgQgQgFgIQgMgOgFgKQgMgUAFgHQAEgGAKAJQAGAFAIAIQATARAJAIQAjAVAPADQALACAQgEQASgFgBgJQgBgGgJgIQgOgKAAgCQgcghASgCQACAAAVAPQALAKALAFQATALAPADQAJABAZgJQAcgKA3gOQglAMgkAQIhHAkQg2AbguAMQgtAMgvAAQhdAAhcgwg");
	this.shape_6.setTransform(28.6,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009F29").s().p("AkgBOQAHggAXgnQAthLBNgcQCuhACgBQQgPAHgLAJQgYATAPAKQAZAPA2geIAvAwQg2AHhLAiIhHAkQg2AbgsAMQgvAMgvAAQhdAAhcgwg");
	this.shape_7.setTransform(31.4,19.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,32.3);


(lib._blossommp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("blossommp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._bellmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_1 = function() {
        this.stop();
		playSound("bellwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.inputPanel = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AR0CMMgjnAAAIAAkXMAjnAAAg");
	this.shape.setTransform(114,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxzCLIAAkWMAjmAAAIAAEWg");
	this.shape_1.setTransform(114,14);

	// Button
	this.cancel = new lib.cancel();
	this.cancel.setTransform(149.8,53.3,1,0.999,0,0,0,0.7,0.1);

	this.submit = new lib.submit();
	this.submit.setTransform(71.7,53.2,1,0.999);

	this.addChild(this.submit,this.cancel,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,230,72.3);


(lib.foreignbackground = function() {
	this.initialize();

	// bar
	this.instance = new lib.foreigntoolbatbackground("synched",0);
	this.instance.setTransform(61,15,1,1,0,0,0,61,15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,124.5,29.5);


(lib.arrowmc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(7.1,11.2,1,1,0,0,0,7.1,11.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.5,14.3,24);


(lib.startbutton = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("é", "bold 19px 'Comic Sans MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 18;
	this.text.setTransform(13.4,-2);

	// background
	this.instance = new lib.toolbarstartbuttonbackground("synched",0);
	this.instance.setTransform(15.6,13.5,1,1,0,0,0,15.6,13.5);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-2,33.7,31);


(lib.scrollMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrowmc();
	this.instance.setTransform(7.2,11.2,1.004,1,0,0,180,7.1,11.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.5,14.4,24);


(lib.flowerhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{correct_1:0,incorrect_1:11});

	// timeline functions:
	this.frame_6 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_13 = function() {
        this.stop();
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(7).call(this.frame_13).wait(7));

	// Animation
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#037017").s().p("Ah+CDQg1g2AAhNQAAhMA1g3QA1g2BJAAQBKAAA0A2QA1A3AABMQAABMg1A3Qg0A3hKAAQhJAAg1g3g");
	this.shape.setTransform(0.5,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#037017").s().p("AikAfQgJgiALglQAKghASgPQAcgYAlgNQAPgGBNgWQA5gQAuBGQArA+AABDQAAAzhJArQgkAVglAMQiggcgbhig");
	this.shape_1.setTransform(-0.2,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#037017").s().p("AgYASIAJhJIAoBdQgKANgMAEIgFABQgRAAgFgmg");
	this.shape_2.setTransform(3.5,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#037017").s().p("Ag4gEIAogrQArgrAWgCQAUgCggBDQglBSAAAXQAAAPgEAAQgMAAgohhg");
	this.shape_3.setTransform(12.4,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#037017").s().p("AgdBDQAhhIgbg0QgKgTAGABQAFABANAQQAjAtAEAtQAEAsggAAg");
	this.shape_4.setTransform(-7.1,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#037017").s().p("AhYCeIAhiIQANgqAYgtQAwhZA7gEQhmC3gKBHQgGAtgeANQgLAFgKAAIgIgBg");
	this.shape_5.setTransform(20.5,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#037017").s().p("AgHBPQALh/grgnQBMAgADBWQACA2gZADIgDAAQgLAAgKgJg");
	this.shape_6.setTransform(-16.8,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#037017").s().p("AhagvQgBgrgFgdIgFgUIAhBMIAmg1IAAArIBHg4IgPA9IBMguIgZBkQgkBrg0AvQhPh4AAhDg");
	this.shape_7.setTransform(0.7,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B29E0F").ss(1,1,1).p("AAIDqQgUhTgNhjQgZjDAvhKQAthJgID3QgEB6gNCY");
	this.shape_8.setTransform(-6.6,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE81F").s().p("AgZA0QgZjDAvhKQAthJgID3QgEB6gNCYIgJADQgUhTgNhjg");
	this.shape_9.setTransform(-6.6,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B29E0F").ss(1,1,1).p("AghDrQgEhvAChyQAEjhAggRQATgJAKAyQAKAwgEBOQgIDAg9Bsg");
	this.shape_10.setTransform(-0.1,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE81F").s().p("AgjAKQAEjhAggRQATgJAKAyQAKAwgEBOQgIDAg9BsQgEhvAChyg");
	this.shape_11.setTransform(-0.1,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B29E0F").ss(1,1,1).p("Ag0DWQAChbALhjQAWjEArgkQAZgUACAxQACArgQBSQgnDBg0BLg");
	this.shape_12.setTransform(6.7,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE81F").s().p("AgnAYQAWjEArgkQAZgUACAxQACArgQBSQgnDBg0BLQAChbALhjg");
	this.shape_13.setTransform(6.7,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B29E0F").ss(1,1,1).p("Ag7CzQAwhZAlhaQBPiygqgDQgpgDg1C4QgbBagTBcg");
	this.shape_14.setTransform(12.2,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE81F").s().p("AgfAAQA1i4ApADQAqADhPCyQglBagwBZIgSADQAThcAbhag");
	this.shape_15.setTransform(12.2,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#037017").s().p("AhcgsIgbgLIAUgFQAXgCAJAJQANANAJghIAdAYIArgdIAAAmIAlgOQAogOARACQgaAWgcAeQg4A4gLAlQhGhwgWgLg");
	this.shape_16.setTransform(-0.7,30.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B29E0F").ss(1,1,1).p("ABYDbQg0hFguhXQhhirAQhXQAQhVBTDoQArBzAsCR");
	this.shape_17.setTransform(-10.9,10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE81F").s().p("AgKA/QhhirAQhXQAQhVBTDoQArBzAsCRIgHAHQg0hFguhXg");
	this.shape_18.setTransform(-10.9,10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#B29E0F").ss(1,1,1).p("AgFDsQgPhugJhxQgSjhAggUQAQgMAPAyQAOAvAEBOQALDAgyBxg");
	this.shape_19.setTransform(-3.5,8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE81F").s().p("AgdANQgSjhAggUQAQgMAPAyQAOAvAEBOQALDAgyBxQgPhugJhxg");
	this.shape_20.setTransform(-3.5,8.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#B29E0F").ss(1,1,1).p("Ag0DXQAChcALhjQAXjEAqgkQAZgUACAxQACAsgQBSQgnDBg0BLg");
	this.shape_21.setTransform(4.2,8.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE81F").s().p("AgnAYQAXjEAqgkQAZgUACAxQACAsgQBSQgnDBg0BLQAChcALhjg");
	this.shape_22.setTransform(4.2,8.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#B29E0F").ss(1,1,1).p("ABdinQgogJhRCsQgqBUgiBYIATAAQA9hQAzhSQBrijgpgKg");
	this.shape_23.setTransform(11.8,10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE81F").s().p("AhoCoQAihYAqhUQBRisAoAJQApAKhrCjQgzBSg9BQg");
	this.shape_24.setTransform(11.8,10.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#B29E0F").ss(1,1,1).p("ABbBgQgbg4gjgxQhEhngnAVQgoAWBaBOQBLBFAsASg");
	this.shape_25.setTransform(-16.4,16.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE81F").s().p("AgcAJQhahOAogWQAngVBEBnQAjAxAbA4QgsgShLhFg");
	this.shape_26.setTransform(-16.4,16.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#B29E0F").ss(1,1,1).p("AAfAOQhQBNgqgFQAigyAngsQBMhcAaASQAeAVhTBLg");
	this.shape_27.setTransform(14,17.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE81F").s().p("AhbBWQAigyAngsQBMhcAaASQAeAVhTBLQhLBIgpAAIgGAAg");
	this.shape_28.setTransform(14,17.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B29E0F").s().p("Ag3CDQgpg1glg3QhLhrASgJQASgIAtA+QAXAfATAfQgMgpgHgqQgOhUAbAIQAsAMASB/QADgqAHgqQAQhUAXAPQAZAPgFBEQgCAigGAcQAQgnARggQAig/ARAWQAbAkg5BgIA8glQA6gegLAvQgSBJh6BGQgQAKgWADQgJACgHAAQgfAAgXgWg");
	this.shape_29.setTransform(-1.2,13.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#9E6305").ss(1,1,1).p("AgehLIgSAWQgSAdAFAkQAEApAjAQQAdAOATgNQAigXADglQAFg2higfg");
	this.shape_30.setTransform(-1.8,15.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFA400").s().p("AgWBFQgjgQgEgpQgFgkASgdIASgWQBiAfgFA2QgDAlgiAXQgJAGgMAAQgLAAgQgHg");
	this.shape_31.setTransform(-1.8,15.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#B29E0F").ss(1,1,1).p("Ag1h7IAJCCQATCBAxgOQAzgOglhwIgshwQgdAdgSgkg");
	this.shape_32.setTransform(1,28.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFE81F").s().p("AgsAHIgJiCQASAkAdgdIAsBwQAlBwgzAOIgKACQgoAAgSh1g");
	this.shape_33.setTransform(1,28.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#B29E0F").ss(1,1,1).p("AAkhnIgVATQgXAYgRAZQg2BLArAxQAqAxAdhuIAVh2QgCgJgSgEg");
	this.shape_34.setTransform(-9.3,27.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE81F").s().p("AgkBZQgrgxA2hLQARgZAXgYIAVgTQASAEACAJIgVB2QgUBMgZAAQgNAAgNgPg");
	this.shape_35.setTransform(-9.3,27.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B29E0F").ss(1,1,1).p("ABZAmQgkAjgoARQhNAjgUhZQgah2AhgPQApgSCECBIgKAEQgIAGALAOg");
	this.shape_36.setTransform(-11.8,13.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFE81F").s().p("AhUAkQgah2AhgPQApgSCECBIgKAEQgIAGALAOQgkAjgoARQgUAKgSAAQgtAAgOhAg");
	this.shape_37.setTransform(-11.8,13.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#B29E0F").ss(1,1,1).p("ABQCPQgahXgghMQg9icgcArQgeAvAyBRQAlA4BaBcg");
	this.shape_38.setTransform(-9.7,2.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFE81F").s().p("AgvgFQgyhRAegvQAcgrA9CcQAgBMAaBXQhahcglg4g");
	this.shape_39.setTransform(-9.7,2.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#B29E0F").ss(1,1,1).p("AADCvQAWhWANhWQAZisgxgFQgagCgRAlQgPAigBA6QgDCBAzBdg");
	this.shape_40.setTransform(-3.5,-1.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFE81F").s().p("AgtgvQABg6APgiQARglAaACQAxAFgZCsQgNBWgWBWQgzhdADiBg");
	this.shape_41.setTransform(-3.5,-1.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#B29E0F").ss(1,1,1).p("ABuApQgggmh/AcQCRgtAAgtQAAgRgPgJQgPgKgYADQg8AIhDBMQAng0Ahg3QA/hugggRQgSgLgZAIQgbAJgWAbQg3BCALCBIA1CTQANAjAPAZQAvBSAuglQAugkhIhEQgWgWgegWIgbgRQB7BFAdghQAhgmgageg");
	this.shape_42.setTransform(10.3,9.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFE81F").s().p("AglDBQgPgZgNgjIg1iTQgLiBA3hCQAWgbAbgJQAZgIASALQAgARg/BuQghA3gnA0QBDhMA8gIQAYgDAPAKQAPAJAAARQAAAtiRAtQB/gcAgAmQAaAeghAmQgdAhh7hFIAbARQAeAWAWAWQBIBEguAkQgPALgOAAQgeAAgig4g");
	this.shape_43.setTransform(10.3,9.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#9E6305").ss(1,1,1).p("ABKhEQAfAcAAAoQAAApgfAcQgfAdgrAAQgqAAgfgdQgfgcAAgpQAAgoAfgcQAfgdAqAAQArAAAfAdg");
	this.shape_44.setTransform(3.2,11.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFA400").s().p("AhJBFQgegcAAgpQAAgoAegcQAfgdAqAAQArAAAfAdQAfAcgBAoQABApgfAcQgfAdgrAAQgqAAgfgdg");
	this.shape_45.setTransform(3.2,11.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#B29E0F").ss(1,1,1).p("ABWB7QhZgzg8g5Qh5hvCYgXQCXgXgBCDQAABAggBGg");
	this.shape_46.setTransform(-7.8,-5.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFE81F").s().p("Ag/APQh5hvCYgXQCXgXgBCDQAABAggBGQhZgzg8g5g");
	this.shape_47.setTransform(-7.8,-5.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#B29E0F").ss(1,1,1).p("ACQAfQheAthPARQiiAiBFiJQBFiKBoBNQA2AmAnBAg");
	this.shape_48.setTransform(-13,5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFE81F").s().p("Ah6gKQBFiKBoBNQA2AmAnBAQheAthPARQggAGgXAAQheAAA4htg");
	this.shape_49.setTransform(-13,5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#B29E0F").ss(1,1,1).p("ABpiEQgMBogdBMQg4CchPiEQhRiCB5gyQA7gZBNABg");
	this.shape_50.setTransform(-10.5,23.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFE81F").s().p("AhHBIQhRiCB5gyQA7gZBNABQgMBogdBMQgeBVgkAAQggAAglg9g");
	this.shape_51.setTransform(-10.5,23.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#B29E0F").ss(1,1,1).p("AAhh2QiXgYABCDQAABAAfBGQBZgzA9g4QB6huiZgYg");
	this.shape_52.setTransform(12.2,-2.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFE81F").s().p("Ah1gLQgBiDCXAYQCZAYh6BuQg9A4hZAzQgfhGAAhAg");
	this.shape_53.setTransform(12.2,-2.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#B29E0F").ss(1,1,1).p("AgzhHQg1AmgnBAIA5AZQBEAaAwALQCiAihFiIQhFiLhpBNg");
	this.shape_54.setTransform(20.6,6.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFE81F").s().p("AAeBdQgwgLhEgaIg5gZQAnhAA1gmQBphNBFCLQA4BsheAAQgXAAgggGg");
	this.shape_55.setTransform(20.6,6.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#B29E0F").ss(1,1,1).p("AAXh3QgngHg1AGIguAHIAXA7QAcBBAbAsQBXCMAziSQAziQiBgYg");
	this.shape_56.setTransform(15.9,21.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFE81F").s().p("AglA3QgbgsgchBIgXg7IAugHQA1gGAnAHQCBAYgzCQQgaBKgkAAQgiAAgqhEg");
	this.shape_57.setTransform(15.9,21.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#B29E0F").ss(1,1,1).p("AAAiMQg6BXgdBLQg6CbCRgvQCTgwg7hzQgTgkglgog");
	this.shape_58.setTransform(2.5,24.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFE81F").s().p("AhXAWQAdhLA6hXIAgAfQAlAoATAkQA7BziTAwQggALgYAAQhLAAAsh3g");
	this.shape_59.setTransform(2.5,24.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#037017").s().p("AAABMQAAgUgwgJQgigHgNgBQAdgVgVgJIg6gRQA0gKAGgJQAFgKAAgZQAdAUAggXQAPgMAJgPIANAQQASARANAFQAWAHA1gMQgLAFgLAJQgYAPAAAMQABASBFAGQg0APgXABQgOAAAIAPQAFAIAGAIQgXAAghAUQgRAKgJAKQAGgIAAgJgAhfAnIgEACQgOgEASACgAhfAnIAAAAg");
	this.shape_60.setTransform(4.9,14.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DD8B07").s().p("Ag1BPQgighAAguQAAgtAighQAhghAtAAQAiAAAdATQhIgEgnApQgtArAfBBQAWAwA0AKIgMABQgtAAghghg");
	this.shape_61.setTransform(0.8,8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#9E6305").ss(1,1,1).p("ABShRQAiAiAAAvQAAAwgiAiQgiAjgwAAQgvAAgigjQgigiAAgwQAAgvAigiQAigjAvAAQAwAAAiAjg");
	this.shape_62.setTransform(3.1,8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFA400").s().p("AhRBSQgigiAAgwQAAgvAigiQAigjAvAAQAwAAAiAjQAiAiAAAvQAAAwgiAiQgiAjgwgBQgvABgigjg");
	this.shape_63.setTransform(3.1,8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E8CF15").s().p("AAVBhQgSgGgNggQghhkghg4QBSBTA4BOQAEAHALAEQgcAXgUAAIgIgBg");
	this.shape_64.setTransform(15.1,23.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E8CF15").s().p("AAFBBQg1gTgQgIQgdgPAAgVQABgWAognQApgnAXAAQAVgBAQAeQgigIgTAdQgWAeAZAcQAqAqA1AwQgggQg5gTg");
	this.shape_65.setTransform(-13.1,-7.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#B29E0F").ss(1,1,1).p("AgBgBQgmgkhAgbQhKgagdgLQgvgTgGgWQgHgbAwgxQAxgwAbAHQAWAFATAwQALAdAaBJQAaBCAlAlIADADQAlAlBBAaQAlAQBBAVQAwATAGAWQAHAbgxAxQgwAwgcgHQgVgFgTgwQgWhBgPglQgbhBgkgm");
	this.shape_66.setTransform(3.2,8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFE81F").s().p("ACOEEQgVgGgTgwQgWhAgPgmQgbhBgkglQAlAlBBAaQAlAQBBAVQAwATAGAVQAHAcgxAxQgqAqgaAAIgIgBgAhnhAIhnglQgvgSgGgXQgHgbAwgxQAxgwAbAHQAWAFATAwIAlBnQAaBAAlAmQgmgkhAgbg");
	this.shape_67.setTransform(3.2,8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E8CF15").s().p("AgFg4QAMgjAQgJQATgKAfAWQgUgCAAAGQgrBkhRBYQAhg3Ahhpg");
	this.shape_68.setTransform(14.2,-7.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E8CF15").s().p("AgxA7QgngmgCgWQgCgVAcgPQARgKAygRQA6gUAegOQgtAjhcBEQgQAPAZAeQAVAZAkAYIgDAAQgYAAgqgog");
	this.shape_69.setTransform(-14.4,24);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#B29E0F").ss(1,1,1).p("AACgBQAlgmAbhCQAQglAWhCQATgwAWgGQAcgHAwAwQAxAxgHAbQgGAWgwATQhCAXgmAPQhBAcgmAlgAgBACIADgDAgBACQglAmgbBBQgQAmgWBCQgTAwgWAGQgcAHgwgwQgxgxAHgcQAGgWAwgTQBCgWAlgPQBCgcAmglg");
	this.shape_70.setTransform(2.4,8.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFE81F").s().p("AjcDeQgxgxAHgcQAGgWAwgTQBCgWAlgQQBCgbAmglQglAmgbBCQgQAlgWBBQgTAxgWAFIgIACQgaAAgqgqgABChpQAQglAWhBQATgxAWgFQAcgIAwAwQAxAxgHAcQgGAVgwATQhCAXgmAQQhBAbgmAlQAlgmAbhCg");
	this.shape_71.setTransform(2.4,8.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E8CF15").s().p("AAgAlQhqgwg0gHQA+gNA3gaIgDAfQgDATAGAFQA7ApBNAHQgIAMgTAAQgZAAgrgVg");
	this.shape_72.setTransform(18.4,9.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E8CF15").s().p("AhdAAQAAhGAcgJQAUgGA2AbQgfABgTAmQgUAkAWAAQBGAGA/gEQgZAJgzAaQgoAVgSAEIgMACQgpAAAAhRg");
	this.shape_73.setTransform(-17.3,7.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#B29E0F").ss(1,1,1).p("AADAAQAyAAA/gaQAkgQA7gfQAtgUATALQAYAOAABEQAABFgYANQgTAMgtgUQg7gggkgPQg/gbgyAAgAgCAAIAFAAAgCAAQgzAAg+AbQgkAPg7AgQgtAUgTgMQgYgNAAhFQAAhDAYgPQATgLAtAUQAbANBEAiQA+AaAzAAg");
	this.shape_74.setTransform(2.7,7.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFE81F").s().p("ADTBJQg7gegkgQQg+gagzgBQAzAAA+gaQAkgQA7geQAtgVATAMQAYAOgBBDQABBEgYAOQgHAFgKAAQgSAAgdgOgAkSBSQgYgOABhEQgBhDAYgOQATgMAtAVIBfAuQA+AaA0AAQg0ABg+AaQgkAQg7AeQgdAOgSAAQgKAAgHgFg");
	this.shape_75.setTransform(2.7,7.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E8CF15").s().p("AgpB5QgIgUAUgtQAdg5AMgjQAZg9ABgxQAAAZAGAZQgDAlgHAjQgEAPgdAuQgVAwASAkQAJASASAIQg4gCgKgYg");
	this.shape_76.setTransform(-0.9,22.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E8CF15").s().p("AgYAiQgghAgMgbQgTgsALgSQANgXA/AAQBIAAAJAeQg2gXgeAYIgEAEQgLANAFAyQAPCDABATQgDAVAAAQQAAgxgYg8g");
	this.shape_77.setTransform(2.9,-8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#B29E0F").ss(1,1,1).p("AAAgBQAAg0gahAQgihFgNgcQgUguALgUQAPgYBDAAQBFAAAOAYQALAUgUAuQgfA8gQAlQgbBAAAA0gAAAADQAAA0AbA/QAQAlAfA8QAUAvgLATQgOAYhFAAQhDAAgPgYQgLgTAUgvQAfg8AQglQAag/AAg0IAAgE");
	this.shape_78.setTransform(2.9,7.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFE81F").s().p("AhSEZQgLgUAUguQAgg8APglQAahAAAgzQAAAzAbBAQAQAlAfA8QAUAugLAUQgOAYhFAAQhDAAgPgYgAgah1IgvhhQgUguALgUQAPgXBDAAQBFAAAOAXQALAUgUAuQgfA9gQAkQgbA/AAA0QAAg0gag/g");
	this.shape_79.setTransform(2.9,7.8);

	this.instance = new lib.flower1("synched",0);
	this.instance.setTransform(12,17.7,1,1,0,0,0,15.1,30.1);

	this.instance_1 = new lib.flower2("synched",0);
	this.instance_1.setTransform(6.8,20.5,1,1,0,0,0,24.4,26.6);

	this.instance_2 = new lib.flower3("synched",0);
	this.instance_2.setTransform(6.1,21.9,1,1,0,0,0,29.9,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,0.4,36,37.4);


(lib.BG = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#03490A").s().p("AFyC7QhegCgtgGQhDgKhegCQhcgDgjgCQgVgCgwgIIhagNIgsgHIlvAbIAxgaQAsgWAVgFQASgFAfgMIAigOQgBgGgmgoQgmgmg/AAQAIgDBMgKQBLgIApAYQAjAZAmAIQAlAJADAAIg4hwIhNhAQAJACBHAXQBHAYAdAVQAWAXAXAfIAZAgIAUiLIA5g/QgCAGADBLQADBKAaA7QADgEAwgxQAzgzA/gqQA/gsAoAUQA2AkAaAaQAaAaAAACQgGgFgygXQgygWgYAUQgRAegFAwQgFAwABAEQAEABA4gLQA4gKA8gcQA8gcAOg2QACADgEAsQgDApghAoQAHgGApgQQAxgTBUAbIhTBQICFBKIhVABIhTAAIhaAAg");
	this.shape.setTransform(505.1,437.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03490A").s().p("AoeC7IhVgBICGhKIhUhQQBUgbAxATQAqAQAHAGQghgngEgpQgEgrADgFQgCAtAxAcQAwAbA9AOQA9AOAhACQAAgDgNgtIgYhfQgNgxAAgLQBPALBGA5QBGA6AxA5QAag7AChKQADhLgBgGIA4A/IAUCLIAZggQAXgfAWgXQAdgVBHgYQBHgXAJgCIhMBAIg5BvQADABAlgJQAmgIAjgZQApgYBLAIQBMAKAIADQg/AAgmAmQgmAogBAGIAiAOQAfAMATAFQAUAFAsAWIAxAaIlvgbIgsAHIhaAOQgwAHgVACQgjAChcADQheAChDAKQgtAGhdACIhaAAIhUAAg");
	this.shape_1.setTransform(365.2,438.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#03490A").s().p("AoeC7IhVgBICGhKIhUhQQBUgbAxATQAqARAHAFQgigogDgpQgEgsADgDQALAvAtAbQAtAZAtAKQBTAYAFgbQAFgaAShKQA2AfATBCQgLhLA0g3IAnBJQAUAkAjASQARgZARhKQAShKgTgfIAcAgIAcAfIAUCLIAZggQAXgfAWgXQAdgVBHgYQBHgWAJgDIhMBAIg5BvQADABAlgJQAmgIAjgZQApgZBLAKQBMAIAIAEQg/AAgmAmQgmAogBAHIAiANQAfAMATAFQAUAFAsAWIAxAaIlvgbIgsAHIhaANQgwAIgVACQgjAChcADQheAChDAKQgtAGhdACIhaAAIhUAAg");
	this.shape_2.setTransform(229.6,438);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#03490A").s().p("AoeC6IhVgBICGhJIhUhQQBUgcAxAUQAqAQAHAHQgigogDgpQgEgtADgEQAOA3A7AcQA8AcA4AKQA5ALAEgBQAAgEgFgwQgFgwgRgfQgYgUgyAXQgyAWgGAGQAAgCAagaQAagbA3gjQAngUA/ArQA/AsAzAzQAxAwADAFQAag8AChKQADhKgBgHIA4BAIAUCJIAZgfQAXgfAWgWQAdgWBHgXIBQgaIhMBAIg5BwQADAAAlgIQAmgJAjgZQApgYBMAIQBLAKAIACQg/ACgmAmQgmAogBAFIAiAOQAfANATADQAUAGAsAWIAxAZIlvgaIgsAHIhaAOQgwAHgVACQgjAChcACQheADhDAKQgtAGhdABIhaABIhUgBg");
	this.shape_3.setTransform(96.6,434.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2894D").s().p("AAKAjQgCgWgKgUIgOgYQAIgJAAAHQAUAdADAQQACATgBABQgCAFgCAAIgCgCg");
	this.shape_4.setTransform(180.2,357.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2894D").s().p("AgQAOIgBgBQgJgJAEgDQAlgGADgJQALAKgIAAQgVATgLAAIgFgBg");
	this.shape_5.setTransform(180.2,357.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2894D").s().p("AgVAOQgJgGAEgFQATACAOgIQAQgJABgBQAHAHgEACQgbASgPAAIgGAAg");
	this.shape_6.setTransform(150.9,349.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2894D").s().p("AAPAjQAAgDgLgaQgIgYgQgNQABgCAIgBQADgBAOAPQAQAOgBAkQACADgEACg");
	this.shape_7.setTransform(150.5,349.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2894D").s().p("AAHAHQgIgbgVgQQAAgFAJACQACAAAOASQARASADAmQACABgIAEQAAgDgKgeg");
	this.shape_8.setTransform(152.4,338.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2894D").s().p("AgVAQQgMgKAEgDQAygJAFgJQAIAEgFAEQgkAXgMAAIgCAAg");
	this.shape_9.setTransform(152.5,339);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2894D").s().p("AALASQgOgngjgdQgBgBAEgHQADgHAKAFQADAAAYAeQAaAeAGA0QAHAEgSAHQABgEgQgpg");
	this.shape_10.setTransform(117.9,322.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2894D").s().p("AgoAiQgNgDACgGQABgGACgBQAsgKAVgTQAXgUAAgCQAQAFgFAFQgeAjgdAMQgbAKgFAAIAAAAg");
	this.shape_11.setTransform(118.4,322.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A57C47").s().p("Ag5AWIACgFQAagSAigNIAngMQARACgEAFQgEAFgCAAQgaADggARQgiARgEADQgNgBABgDg");
	this.shape_12.setTransform(115.6,337.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2894D").s().p("AAIALQgSggghgTQgJgGAYgCQAEABAZAYQAdAXANArQAKADgYADQgBgEgUgig");
	this.shape_13.setTransform(115.9,336.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A57C47").s().p("AhFAhQABgHABgBQAggcApgSQArgRAEgBQAVADgFAHQgFAHgCABQggAEgnAZQgpAcgEAEQgQgBABgGg");
	this.shape_14.setTransform(57.3,320.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B2894D").s().p("AAKAOQgXgogngXQgBgBAAgFQABgFASACQAEAAAgAdQAiAdARA1QAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAADgTABQgBgFgYgpg");
	this.shape_15.setTransform(57.7,320.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A57C47").s().p("AhGAxQABgKABgCQAggqAqgaQAsgbAFAAQAVAEgFAKQgFAKgDABQggAHgoAnQgqAogEAGQgQgCABgIg");
	this.shape_16.setTransform(62,295.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B2894D").s().p("AAJAVQgVg8gigjQgCgBABgHQAAgIARADQADAAAdAsQAeArAQBPQABAAAAAFQgBAFgQAAQgBgGgWg+g");
	this.shape_17.setTransform(61.7,295.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#069117").s().p("AAIATQgHAEgPgCIgMgKIgYgCIAMgKIAPABIgNgOIgNgBQAGgEAMgDQAOAKAIAIIgMgXIALAFQAKAFAAAMIAJgLQAIgJAIgBQgHABgKAXIAIgHQAHgHAKACQASANAAADIgWgEIgFAGIAOAGIAHAMIgUgFIACALg");
	this.shape_18.setTransform(149.4,358.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#069117").s().p("AAMAcIgMAFQgNACgIgDIgRgPIgkgFIATgOIAVACIgTgUIgTgDQAJgFASgEQAGACAMAMIANALIgRghQACAAAOAHQAOAIABARIANgQQAMgNALgBIgLAJQgJAJgDAQIAKgLQAKgJAPAEQAbARgBAGIgfgGIgHAKIATAIIALASIgegJIAEARg");
	this.shape_19.setTransform(112.7,351.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#069117").s().p("AATAuQgCACgSAEQgUAFgNgGQgZgUgDgEIg5gGIAegZIAiAEIgfgiIgegCIASgJQAPgIAKABQAJAEAUASIAVATIgcg2QADAAAXAMQAXAMACAbQABgDAUgWQAUgWASgBQgDAAgPAPQgPAPgFAZQAAgCARgPQAQgPAXAFQAWAKALAPQAKANAAABIgzgKIgLAQIAfANIASAeIgwgPIAGAbgAA7g+IAAAAIAAAAg");
	this.shape_20.setTransform(54.7,341.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#603B22").s().p("AgkCPQgFgNACgEIAmkHQAggSAGARQAFAQgCAEIgpD5QgUAQgJAAQgFAAgBgEg");
	this.shape_21.setTransform(151.8,344.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#603B22").s().p("AhLEkQgKgaADgIIBPobQBDgkALAhQALAhgDAIIhWH/QgpAhgSAAQgKAAgDgJg");
	this.shape_22.setTransform(59.2,313.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#603B22").s().p("Ag5DJQgHgSACgFIA8l0QAzgYAIAXQAJAXgDAFIhBFfQgfAXgOAAQgHAAgDgGg");
	this.shape_23.setTransform(116.5,333.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E3A21").s().p("AArAhIlFg6IjBg8IAGhdIDjBqIEJA2IG+CXQANAZgMALQgLAKgDABg");
	this.shape_24.setTransform(83.2,325.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5E3A21").s().p("AFeDKIkLh2Ik4iIQichDhkgqIAAhaIBUAZQBMAXAjAHQAdAFAkAKIAoAKIAyBLIAyAYQAuAWA2AZQA3AZAcAHQAoAOAoAeQApAdAOAHIA/ARQA1APA3AYQA3AYATAeQADADAEAVQAFAVgbAKIhxgyg");
	this.shape_25.setTransform(85.5,307.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B2894D").s().p("AAuBkIgSgsQgRgpgYgpQgZgsgZgKQgBgBgBgJQgBgJAWgBQACgGAhAdQAfAeAsCFQABACgFAJQgCAFgFAAQgEAAgFgCg");
	this.shape_26.setTransform(277.5,396.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A57C47").s().p("AhrBNQgGgJABgBQA5hSA+gdQBAgeAXgHQASgIABALQABALgBADQhzAwgsAwQgsAxACAEQgOAAgFgIg");
	this.shape_27.setTransform(277.6,396.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B2894D").s().p("ABEBSQgEgJg0g9Qgxg7gogJQgCgBgDgIQgDgIAUgHQAAgGAlASQAkATBLBwIgBAMQgBAHgIAAIgFAAg");
	this.shape_28.setTransform(55.9,390.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A57C47").s().p("AhNBHQAehHAuggQAsgiARgJQANgJADAIQACAIAAACQhTA5gaAqQgaAtADADQgXgCAAgIg");
	this.shape_29.setTransform(56.4,390.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B2894D").s().p("ABPBSQgGgJg7g9Qg5g7gugJQgCgBgEgIQgDgIAXgHQAAgGArASQApATBXBwIgBAMQgBAHgKAAIgFAAg");
	this.shape_30.setTransform(54.2,362.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A57C47").s().p("AhZBHQAkhHA0ggQAygiAUgJQAPgJADAIQADAIAAACQhfA5geAqQgeAtADADQgbgCAAgIg");
	this.shape_31.setTransform(54.7,362.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B2894D").s().p("ABIBUQgFgJg2g/Qg0g9grgJQgCAAgDgJQgEgIAWgIQAAgGAoATQAlATBQB0IgBAMQgBAIgJAAIgFgBg");
	this.shape_32.setTransform(160.4,394.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A57C47").s().p("AheBHQAlhHA4ggQA1giAVgJQAQgJADAIQAEAIgBACQhlA5gfAqQggAtADADQgcgCAAgIg");
	this.shape_33.setTransform(160.7,394.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B2894D").s().p("ABIBUQgFgJg2g/Qg0g9grgJQgCAAgDgJQgEgIAWgIQAAgGAoATQAlATBQB0IgBAMQgBAIgJAAIgFgBg");
	this.shape_34.setTransform(162.4,370.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A57C47").s().p("AhoBHQAphHA+ggQA7giAXgJQARgJAEAIQAEAIgBACQhvA5gjAqQgjAtADADQgfgCAAgIg");
	this.shape_35.setTransform(163.7,370.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B2894D").s().p("ABIBUQgFgJg2g/Qg0g9grgJQgCAAgDgJQgEgIAWgIQAAgGAoATQAlATBQB0IgBAMQgBAIgJAAIgFgBg");
	this.shape_36.setTransform(279.4,372);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A57C47").s().p("AhPBDQAghDAugeQAtgfARgJQAOgIADAHQACAIAAACQhUA1gbAnQgbAqADADQgYgBAAgIg");
	this.shape_37.setTransform(280.2,372);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B2894D").s().p("ABIBUQgFgJg2g/Qg0g9grgJQgCAAgDgJQgEgIAWgIQAAgGAoATQAlATBQB0IgBAMQgBAIgJAAIgFgBg");
	this.shape_38.setTransform(531.9,339);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A57C47").s().p("AhXBlQgHgHAAgCQAlhcA4grQA1gsAVgMQAQgMADALQAEALgBACQhlBKgfA4QggA7ADADIgIABQgIAAgFgFg");
	this.shape_39.setTransform(532.2,339.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B2894D").s().p("ABIBUQgFgJg2g/Qg0g9grgJQgCAAgDgJQgEgIAWgIQAAgGAoATQAlATBQB0IgBAMQgBAIgJAAIgFgBg");
	this.shape_40.setTransform(528.9,369);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A57C47").s().p("AhXBlQgHgHAAgCQAlhcA4grQA1gsAVgMQAQgMADALQAEALgBACQhlBKgfA4QggA7ADADIgIABQgIAAgFgFg");
	this.shape_41.setTransform(529.2,369.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B2894D").s().p("ABIBUQgFgJg2g/Qg0g9grgJQgCAAgDgJQgEgIAWgIQAAgGAoATQAlATBQB0IgBAMQgBAIgJAAIgFgBg");
	this.shape_42.setTransform(408.9,392);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A57C47").s().p("AhXBlQgHgHAAgCQAlhcA4grQA1gsAVgMQAQgMADALQAEALgBACQhlBKgfA4QggA7ADADIgIABQgIAAgFgFg");
	this.shape_43.setTransform(409.2,392.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B2894D").s().p("ABIBUQgFgJg2g/Qg0g9grgJQgCAAgDgJQgEgIAWgIQAAgGAoATQAlATBQB0IgBAMQgBAIgJAAIgFgBg");
	this.shape_44.setTransform(409.5,362.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A57C47").s().p("AhXBlQgHgHAAgCQAlhcA4grQA1gsAVgMQAQgMADALQAEALgBACQhlBKgfA4QggA7ADADIgIABQgIAAgFgFg");
	this.shape_45.setTransform(409.8,362.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#70492C").s().p("ARNA9IguACIhcAFIhIADQgngCgmgMQgmgNgmgBQgmAEgkARQglATgkgCIhHgKIhFgKIkYAAIm2g8IhvgBQhngBh7AAQh6gBg9ADQg7AFhWAEIiaAIIhHADIl8hJIAAgmQEhAuEmgBQEngBEkAIQDXgFDVA0QD/BHD/gzQgNgYADgXQBFALBQgFQBPgFA+ARQCXAxCmABQCnABCmgMQgEgRAGgVQAHgTgIgTIAJAAQAsAngcAqQgcArgIAEg");
	this.shape_46.setTransform(191.7,397.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C5331").s().p("ARNBfIguACIhcAFQgxACgXABQgngCgmgNQgmgMgmgBQgmADgkASQglATgkgDIhHgJIhFgKIkYAAIm2g9IhvgBQhngCh7gBQh6AAg9AEQg7AFhWAFIiaAIIhHACIl8hIIAAhqIHCAzIGkAAIB8AEIDyALICkAEQAjABBkAHIDJASQBlAJApAGQAnADBPgPQBPgPBLgPQBKgRAYgBQAYAABPAKICgAWIB1ARQAkAGBjAEIC9AHIBgAEQAsAngcAqQgcArgIADg");
	this.shape_47.setTransform(191.7,394.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#70492C").s().p("AXIBKIg0gEIjpAAIiKgDIkugHIkvgHIiJgDIpCAKInggoIiCgUIqegwIAAgYQFHgCFJAeQFIAeFGArQClAOCigcQCjgaCeAUQB8AOCmACQClACCbgIQALgBgMgJQgNgJAEAAQAyAAA+gEQA+gGAGA7QBMgCBLAIQBLAIA2g2QAKgLgKgWQgJgXgQgZQARgCAQACQAgAGASAnQAZA3gdAmQgNAIgaAAIgKAAg");
	this.shape_48.setTransform(191.3,370.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C5331").s().p("AXIBvIg0gDIjpAAIiKgDIkugHIkvgIIiJgCIpCAKInggpIiCgUIqegvIAAhlIKAAVIFKA7IB9ABIEEADQCPACBQAEQExAOEzgGIG5ACQBlgCBkADQAxgCAygNQAxgMAuADQAgAGASAlQAZA4gdAmQgMAJgZAAIgMgBg");
	this.shape_49.setTransform(191.3,367.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#70492C").s().p("AwREMQgQgJABgiIB/gIQA+gDBCgbQA9gTBLACQBLADBFgaQAUgIAUgWQgRgEgWAFQgWAFgJgaQAsgDApgLQAogMAtAGQgtgDgPArQBbgYBjAHQBjAIBbgfQgQgbgZAIIgxAOQgYAHgQggQCtgFCugOQCvgOCmg3QgPgGgPAEQgPAEgPgMQBpg2BvgBQBvgCBxgXQAngNAzgMQgWAEgVgCQgfgCgQgjQBBAMBBggQAbgSgbgdIAygMIgKCWImuBQIjIBOIjSAeIk+A8IoIBaIhfARQhZAQhhANQg5AHgjAAQgYAAgNgDg");
	this.shape_50.setTransform(458.1,380.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C5331").s().p("AwREMQgSgLADgnQADgmAJgWQAfg7A/AAQA+ABA8gEID5gqIGOhAICWgoIBVgNICpgYQBYgMAagBQAUgCBtgZID2g6IDug7IBrgaIgKCWImuBQIjIBOIjSAeIk+A8IoIBaIhfARQhZAQhhANQg6AHgiAAQgYAAgNgDg");
	this.shape_51.setTransform(458.1,380.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#70492C").s().p("AwWENQAlgEAmgIQAHgCAPgNQAPgNAXgCQCigmCUgWQENgiEIg/QEGg+EHgnIg8ACQgeABgegNQBGgmBOAAQBNgBBQADQBPADBMgbIBdgcQAwgOAngcQhTAghSASQhTARhSgbQBYgbBtgMQBtgMAfhJIA/gPIgKCWImuBQIjIBOIjSAeIk+A8IoIBaIhaAQQhVAPhfANQhCAJgmAAQgSAAgNgCg");
	this.shape_52.setTransform(459.1,351.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C5331").s().p("AwPEMQgggTAXgrQAYgrAYgTQAigYArgBQArgCAogFID8g4QDOgZDLgpIAngLIBIgTIAngKIBVgNICpgYQBYgMAagBQAUgCBtgZID2g6IDug7IBrgaIgKCWImuBQIjIBOIjSAeIk+A8IoIBaIhfARQhZAQhiANQg6AHgiAAQgYAAgMgDg");
	this.shape_53.setTransform(457.9,351.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#076D13").s().p("EgpAACWIAAkrQAlAAAcATQBZAoBdAaQBdAbBpgNQDLgVDJAYQDIAXDEA0QCVAlCUgOQCUgNCUgXQCTgWCWAHIFoAcQGaAnGcgGQGdgHGdAYQFyAIFxhEQDEgVCqAwIABBpg");
	this.shape_54.setTransform(298.9,441.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A57C46").s().p("EgpAADTIAAmkIACgBQCnBrDMANQDMAODFgNQgFgPAHgOQAHgNACgIQBOgXA9A1QBxB7CfAOQCfAOCogdQCpgaCOgGQIqgFI1BTIEEAyQBLARBKgfQBLgeBMgGQDpAGDsgBQDugBDoAGQDHACDGgYQDHgYDHABIACC7g");
	this.shape_55.setTransform(298.9,435.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B2894D").s().p("EgpAADWIAAmjQAFgHBzgBQBygBCaACIEaAFQCAADAfACQErATEpAoIAlAFQEjAeEjAWQKCBFKIgHQE3gHE2gcQE1gcE2gHQAXAABmgJQBngIB+gOQB+gPBegRQBfgSAGgSQgGDKAFDNg");
	this.shape_56.setTransform(299,435.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#069117").s().p("AhJApQADgTgagPQgZgNgEgBQAoACAOALQAMAMAAADQAIgZgRgWQgNgSgEgDQAnAZAOAYQAOAZgBACQATgkAAgiQAAghAAgDQAQAegDAqQgDApgCAEQAggpApgNQApgOAEABQg1AVgZAfQgaAhASgSIACgBQAXgUAdACQAeACACACQhBgBgOAZQgPAZADAEgAAAhNIAAAAIAAAAg");
	this.shape_57.setTransform(56.1,409.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#603B22").s().p("AgVhZQAAgCgIgMQgHgMgPAGQAqgngCg2QgDg1gRg2IgKgWQA3gFAIADIAeD6IgKDGIAADSIg1AKQAajTgkjVg");
	this.shape_58.setTransform(57.1,381.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#70482A").s().p("AgXgcIg8kEQAPgrA6gFQA4gFAIADIAfD6IgKDGIAADSIhtAUg");
	this.shape_59.setTransform(53.9,382.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#069117").s().p("AhJApQADgTgagPQgZgNgEgBQAoACAOALQAMAMAAADQAIgZgRgWQgNgSgEgDQAnAZAOAYQAOAZgBACQATgkAAgiQAAghAAgDQAQAegDAqQgDApgCAEQAggpApgNQApgOAEABQg1AVgZAfQgaAhASgSIACgBQAXgUAdACQAeACACACQhBgBgOAZQgPAZADAEgAAAhNIAAAAIAAAAg");
	this.shape_60.setTransform(163.1,415.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#603B22").s().p("AgoFGQgJi2ASi6QgEgYgTgXQgTgYAMgJQA1gnARg6QATg7gVg2IgCgEQAxAHANAmIg8EEIAKFwg");
	this.shape_61.setTransform(166.1,388.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#069117").s().p("AhZB9QgFgigsgNQgqgMgHAAQA7gTAYAPQAYAOABAFQgBg0gigdQgcgXgHgEQBFAYAfAjQAgAlAAAFQALhOgQg8QgPg7gEgEQAoApANBOQAPBMAAAIQAZhcA0gwQA1gwAFABQgrApgYA0QgYAzgFAcQgFAdALggIACgEQAXgvAsgMQAqgNAFABQheAjgJA0QgIA0AGAGg");
	this.shape_62.setTransform(409.4,422.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#603B22").s().p("AgaBoQgDgJABgDIAci/QAWgNAEAMQAEAMgBADIgdC0QgPAMgGAAQgEAAgBgDg");
	this.shape_63.setTransform(180.1,359);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#069117").s().p("AhuA8QAEgbgmgWQgmgWgGgCQA9AEATASQASARABAEQALglgYggQgUgcgHgFQA8AnAVAkQAUAmgBACQAdg2AAgzQAAgygBgDQAZArgEA/QgFA+gDAHQAwg/A9gTQA+gVAFACQhOAggmAvQgnAxAcgbIACgCQAigdAsACQAsADAEADQhigBgVAlQgVAlAEAHg");
	this.shape_64.setTransform(276.5,424);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#70482A").s().p("AhJFAIAAjSIgKjGIAdj6QAJgDA4AFQA6AFAQArIg8EEIAJFwg");
	this.shape_65.setTransform(164.4,387.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#603B22").s().p("Ag8GHQACijABijQAEggAcg3QAZg4ALg3QgDgOgYgNQgagOgFgdQAVALADgRQAEgRANADQANhegphFQAigLAZAMQAZALACADIAEBRQAFBJABAgIAABUIAAA8Ig9CjIAeECQgmAMghAAIgUgBg");
	this.shape_66.setTransform(280.6,394.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5E3A21").s().p("AjkhfQgEghAFgEQAFgFABACIHDECIgaAOg");
	this.shape_67.setTransform(159.8,353.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#70482A").s().p("AgzGEQgugOgBgDIAdksIApjMIgUjOQAvg/ArAMQAtANACAHIAGBRQAEBIAAAgIAABUIAAA9Ig7CjIAeECQguAMghAAQgXAAgTgFg");
	this.shape_68.setTransform(276.9,394.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#069117").s().p("AhaB9QgEgigrgNQgsgNgGABQA7gTAZAPQAWAOABAFQAAg0gigdQgcgXgHgEQBFAYAfAjQAgAlgBAFQANhPgQg7QgQg6gDgFQAnApANBOQAPBMgBAIQAahcA0gwQA1gwAFABQgrApgYA0QgXAzgGAcQgFAdALggIACgDQAYgxArgLQAqgNAFABQheAjgIA0QgJA0AGAGg");
	this.shape_69.setTransform(529.4,414.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E3A21").s().p("AD1CyQgNgFgCgDQkPjIhugyQhpgwgCAFQgFghAMgLQALgMACABQDkB/CFBlQCGBoADAGQgBATgJAAIgFgBg");
	this.shape_70.setTransform(163.2,346.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#603B22").s().p("AgrEYQAJh7AFhvQghgDABgXQAAgWgSgKQAYgOAYgMQAYgNAHgVQAQhJgHg3QgGg2gqg6QAlgCAKgWQAMgWgBgYQAXhMghhCQAcADAVAIQAWAIgBAPIgLBvIgaD0IgaDxIgLBvIAOC3IAABxQgFADg5AJQgJh6AJh7g");
	this.shape_71.setTransform(533.9,373.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#70482A").s().p("AheILIAAm5IAVjVIAIhAIANh3IAIg/QAAgngOglQgOglAegbQAWgMA2AGQA4AGAFAbIgMBvIgaD0IgZDxIgMBvIAPC3IAABxQgDACgmAHQgVAEgYAAQgUAAgXgDg");
	this.shape_72.setTransform(532.4,373.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#603B22").s().p("AgKDIQgFgPgcgYQgbgYAKglQAUgNAUADQAihLgOhCQgOhDgug8QA5gpACgwQABgwgQg0QgQgzACgyQgDgOghgLQAegUAjAEQAhAEAXAcQgRAegDAjQACAHAPAXQAPAWgBAcQgOA7gGA9IACEwIAAGRQg0AOggAEQAeicgEibg");
	this.shape_73.setTransform(412,382.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#70482A").s().p("AhAH/QgcgHAEgDIAUlcIADhkIAFi4IAChnQABhMgLhLQgGgigDgXQgCgXAegaQAegYAjADQAlADAZAeQgSAegCAjQACAHAPAWQAOAXAAAcQgPA7gGA9IACEwIAAGRQhUAWgjAAQgJAAgGgCg");
	this.shape_74.setTransform(409.8,383);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4F564F").s().p("ApvNEIifgJQCmo0D6lrQD7luDxi1QD0i2CRgNQlQDgkNEuQhYBTgxBmQgzBmAwBvQASASAogPQAogOAgALQAhAcAQAnQAQAoA1gRQB2gmCEAIQgeCChvBNQhvBOhgBVQgHAQgBAYQABAXAHARQAtAgArASQCGAbCDABQCDABB/AJQCAAJB7AyQjrA7kNAWQkMAXjvAAIgeAAQjdAAiPgHg");
	this.shape_75.setTransform(469.4,348.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5F6860").s().p("AqYNFQitgIgGgBQCEnKDClGQDBlEDOjLQDMjKCrhXQCqhXBWAUQBBAVA1CgQA0CfAoDiQAoDiAbDeQAbDfAOCWIANCbQjnBNkeAeQkeAfkJACIh0ABQi+AAiGgHg");
	this.shape_76.setTransform(475.5,348.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#067F12").s().p("A5lI2QB5h7CCh3QA7gvA8gtQC5glDFATQDFAUC7ADQEZgLEhgUQDKgNDCgtQDBgsDGgjIEUgbQCCgMBphlQBahcBYiHQBWiIAHiDIAACxIAAGEIAAGFIAACxg");
	this.shape_77.setTransform(397.6,400.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0A7516").s().p("A3DEmIAAnPQB9glCBgdQFghUFkAlQFkAmFsBZQBlAbBnANQBnAMA/g+QAjgpgJg4QG3EIGyEkg");
	this.shape_78.setTransform(184,427.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A57C46").s().p("AISCkQkbhrkehSQkhhVkwgEIAAhIQKQBcJhEZQg2gKgxgNg");
	this.shape_79.setTransform(99.8,339.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#997142").s().p("AIMC+QhUgkhSg2QgUgEgCAVQgCAUgGADQhIgMhAgpQg/gphRgGIAABGQg7g+hNgoQhOgmhUAMQgOALgSAVQgSAYgeACQhfgThdgeQhdgfhdgUIAAigQFxAxFeBzQFfBwFTClIgWAAQhTAAhMgfg");
	this.shape_80.setTransform(106.9,342.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#047C15").s().p("A3DKqIAA1TQIVBJHyDLQHwDKHdEaQHdEcHWE/g");
	this.shape_81.setTransform(184,388.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC7205").s().p("AG7BcQhBgUgVgFQhPgLhQgQQgXgEgPgIIgkgUQgigOghAGQg0AAgvgHQg+gMg/AJQg3AEgzgWQg2gLg4gIQgZgIgYgLQgbgIgcADIgHgBIgegDQgFgNgCgOQAWgFAqAFIBVAUQAuALAsgKQAhgKAaASQAbASAaAKQBpARBmAGQBnAFBgAfQCcAvCWAoQgIAEgOAAQgZAAgqgNg");
	this.shape_82.setTransform(96,339.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DF8000").s().p("AHzB5QgngGgtgOQgtgOgNgDQhQgLhPgQQgXgEgPgIIgkgTQgigRghAIQg0AAgvgJQg+gKg/AHQg3AEgzgUQg2gLg4gIQgagIgXgLQgbgIgdADIgGgBIgegDQgJgZABgaQAtgQAxAEQBrAQBqAaQBoARBpAPQA6ASA/AKQAtgDApAAQAsAMAqASIAVABQA0AgA7AaQAlAIAhAPQAYAXAegHQAEARgXAAIgPgCg");
	this.shape_83.setTransform(96,337.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B2894D").s().p("AgNAAQADgQALgBQANADAAAPQgDAQgLABQgNgDAAgPg");
	this.shape_84.setTransform(80.6,313.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6B4428").s().p("Ag+A1IAOh+IBvAJIgUCKg");
	this.shape_85.setTransform(73.1,321.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6B4428").s().p("AhCAyIAOhwIB3AOIgXBvg");
	this.shape_86.setTransform(75.1,304.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7C5331").s().p("AhpCZIAelNIC0ATIg2FWg");
	this.shape_87.setTransform(74.9,313.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#603B22").s().p("AjagdIGxAyIAEAJg");
	this.shape_88.setTransform(73.4,322.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#603B22").s().p("Ah3CgIAbleIDUAbIg0Fig");
	this.shape_89.setTransform(75,312.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#603B22").s().p("AikgQIACgHIFHAvg");
	this.shape_90.setTransform(68.9,310.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#603B22").s().p("AjfgMIgBgKIHBAsg");
	this.shape_91.setTransform(75.4,302);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#603B22").s().p("AjdgJIgDgOIHCAvg");
	this.shape_92.setTransform(75.9,295);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#603B22").s().p("AB1AOQhmgIhpgIQhsgKgagIIHBApIhsgHg");
	this.shape_93.setTransform(76.8,287.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1FA2FF").s().p("AgvA0IAPiAIBQAiIgVB3g");
	this.shape_94.setTransform(117.3,309.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#603B22").s().p("AhNBGIAUixICHA9IghCZg");
	this.shape_95.setTransform(116.9,308.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1FA2FF").s().p("AgQAaIASg/IAQAIIgSBDg");
	this.shape_96.setTransform(127.2,273.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9B6D3B").s().p("AgBB0QgFgKgMADQgJgWgRgRQgfgxgHg6QgHgfADgcQADgcAagHQAWgEAXAHQAVAIAWAEQAYABAVAHQAVAMgPAZQgQA0gXAxQgXAzgMA1QgHgIgCgKg");
	this.shape_97.setTransform(122.7,264.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7C5331").s().p("AgjBjIAQiaIA3g+IgDBBIgDBKQgDARgMAlIgNAqg");
	this.shape_98.setTransform(127,267.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#916234").s().p("AgYBXQgFgSADgTIAQhFQAHgdADgeQgDgVAEgTIAHgEQAPgDACAbQADAcAAALQgBBMgdBHQgLARgHATQACgSgGgTg");
	this.shape_99.setTransform(130,267.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A57E49").s().p("AgnB3QgtgQgPgiQgPgqAFg2QAFg3AjgrIB0BuQAkAeAcAeQgVAqgrAaQgZANgYAAQgSAAgTgHg");
	this.shape_100.setTransform(120.3,266.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B2894D").s().p("ACzFAQAAALgHAJQgLgRgDgXQgIAlgLgcQgLgcgRAEQgKgSgFgVQgLAFgJAIQgKgNgBgPQgOANgKASQgEgdgKgYQgPAMgBASQgLgPgLgQIgKgSQgIgOAAgDQgBAqgNAoIgUg/QgMgkgUgRQgKAQgCAVQgUgxgZgtQgKASgHASQgNjtgnjuQAHAYArAjIA+A0ICvCkIA3A0QAZAXAOAiQAaBaAUBbQAKAeAAAfIgCArQgBAcAJAOQgNgSgHgVQACAWgEAVQgIgVgNgRg");
	this.shape_101.setTransform(118.4,273.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6B4428").s().p("ABTAiQhOgWhNgZQhQgbgNgQIFKBxIhSgXg");
	this.shape_102.setTransform(112.2,330.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6B4428").s().p("ABUApQhOgdhPggQhRgigOgQIFRCNIhVgeg");
	this.shape_103.setTransform(113.8,321.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6B4428").s().p("ABVAyQhPgmhRgpQhSgsgNgRIFVC1IhWgpg");
	this.shape_104.setTransform(115.1,313.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6B4428").s().p("ABVAyQhQgmhQgpQhSgsgNgRIFVC1IhWgpg");
	this.shape_105.setTransform(115.9,306.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6B4428").s().p("ABVAyQhQgmhQgpQhSgsgNgRIFVC1IhWgpg");
	this.shape_106.setTransform(117.2,299);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6B4428").s().p("Ag0gEIBxAEIh5AFg");
	this.shape_107.setTransform(87,240.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6B4428").s().p("AhUgIICjAFIAGAMg");
	this.shape_108.setTransform(86.9,247.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6B4428").s().p("AhqgRIDSAZIADAKg");
	this.shape_109.setTransform(85.7,251.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6B4428").s().p("AiGABIADgJIEKARg");
	this.shape_110.setTransform(83.6,256);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6B4428").s().p("ABSAMQhIgBhKgFQhMgFgSgMIE9AXIgWAAIg3AAg");
	this.shape_111.setTransform(82.7,261.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6B4428").s().p("Ai6gHQAmgHBZAGQBWAFBNAGIBTAJg");
	this.shape_112.setTransform(81,267.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6B4428").s().p("AjKgLQAYgEBkAHQBiAHBeAGIBZAIg");
	this.shape_113.setTransform(79,272.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#724B2E").s().p("AjQEZIBHo7IFaDdIgPBTQgXgKgIgVQgJgXgTgLQgFAOgMAFQgXg7g2AgQAEgLgHgFQgHgGADgKQgVATgNATQgbgogcggQgNgRgIAXQgIAXgMAOIgEgYQgdBcgWBmQgXBpANBig");
	this.shape_114.setTransform(115.4,305.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#7C5331").s().p("AjQD6IBHo8IFaDeIhPGmg");
	this.shape_115.setTransform(115.4,308.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#724B2E").s().p("Ai3DDIBBhYIB9iqQBDhaAXgcQAbgfAWAAQAWgBAQAJQgqAQgZApQgZApgfAfQggAVgYAVQgEAMAIAMQAHAJABAIQACAnggAWQghAWADAbQAkBJBQAXg");
	this.shape_116.setTransform(72.9,256.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#7C5331").s().p("AjrC7IBChYIB/iqQBBhaAXgcQAcggAYABQAWABARAJQAMAMAXBoQAYBmATBnIAVBvg");
	this.shape_117.setTransform(78,257.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6B4428").s().p("AkBDUIAgnyIHjAeIhVIgg");
	this.shape_118.setTransform(77,305.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#AA7D43").s().p("Aj3DGQgFAJgHAIQAYiFBehnQBehpBRhtQAZgdAkAIQAlAHAPAiQBQC7AhDDIhrAGIi8ALQhegDhSArQgUAUgUAPIAEg9g");
	this.shape_119.setTransform(78.7,260.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B2894D").s().p("AlzDOQgNASgQAQQADgYgHgWQgOAMgLAQQAKggAPgiQBGiOBuhyQA5hLBGg7QBHg8BXA2QBLA3A+BGQB5CCBuCOIg9ADIlUAUIi8ALQhdgDhSArQgUAUgUAQQABgeADgfg");
	this.shape_120.setTransform(91.1,259.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0A7516").s().p("AjzMvIAA5XQAWgHAaAAQgHAlAHAXQAtAHAtgHQgKAJALASQAJARgVAFQAhgHASAIQANAegKAeQgKAegDAeQAugFAvAKQAyAKAtgFQAIBWgiBKQgSgBgQALIAeAAIAEgKQASAAAIgoQAFBDgJA/QgIA/AMBDQAJAVAQAOQAQAOAJAVQAPBCAnA7QAnA7gXBKIgeAAQAyAogLA8QgMA7gvApQgOAJACAjIACBCQgdADgLAXQgKAXAAALQgLBHgpAwQgqAvgaBAQAAAFgNAFQgPAFgeAjQgiAagyAFQgeACgfAAIgrgBg");
	this.shape_121.setTransform(60.8,280.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0A7516").s().p("AA0D/QhFgbhHg6QhGg5gIgtQAAg5AngxQAngzAqg1QArg2AIhDQA5AiAvBoQAuBnAKBtQAKBvg1A5QgLAJgRAAQgSAAgYgJg");
	this.shape_122.setTransform(165.1,346);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0A7516").s().p("AgMGqQiQgcgyhOQgyhOAIhoQAHhnAdhnQAFggALgUQALgVArANQgIiGBjhIQBhhIB4gWQAHBJAVA3QAVA2g7A6QAWgCAIAMQAFAmgFAlQgGAmAGAlIAoAAQAXA6ABBLQABBLgXBHQgaBWg9AzQguAphFAAQgTAAgTgDg");
	this.shape_123.setTransform(130.6,333.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1182BA").s().p("EgpAAIaIAAoeQBygwB9AeQDjA8DxAAQDzAADghJQCHg0BkhtQBjhsBnhkQBmhjCPgbQCFgUAeArQAdAsAVB1QANArBJBlQBJBlBRA/QBQA8AmhFQAchHA5hAQA4hABIgJQB1gBA9BZQA7BZBDBOQBjBcBHgcQBHgbBOhWQBdhhBfgSQBegSCQAfQBcAVBFANQBGAMBkghQBVgmBJhEQBJhFBRgSQBSgEA+BAQA/BAA0A4QA3A0A8AeQB7A5CKgBQCKAACQgKIAAIxg");
	this.shape_124.setTransform(298.9,403.1);

	this.instance = new lib.whiteglowingoutline();
	this.instance.setTransform(299,321.2,1,1,0,0,0,299,172.5);
	this.instance.alpha = 0.52;

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#9AD1F5","#1FA2FF"],[0,1],0,-170.8,0,98.2).s().p("EgpAAjtMAAAhHZMBSBAAAMAAABHZg");
	this.shape_125.setTransform(298.9,228.5);

	this.addChild(this.shape_125,this.instance,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,598,493.7);


// stage content:
(lib.gardenGrowsCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:7,win:13});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* #include "../../gameAssets/expressinstall.as"
		
		if (_root.MMplayerType == undefined) {
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
        this.stop();
		/* stop();
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "RecognitionGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/gardenGrows.xml", "RecognitionGame");
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
	this.frame_7 = function() {
        this.stop();
		/* stop();
		var gameid:Number;
		
		if (game != undefined) delete(game);
		var game:RunGame = new RunGame(this);
		
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
	this.frame_29 = function() {
        this.stop();
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			game.resetGame();
			delete game;
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(5).call(this.frame_7).wait(22).call(this.frame_29).wait(1));

	// Congrats
	this.playAgain = new lib.playagain();
	this.playAgain.setTransform(325.5,221,1,1,0,0,0,57.5,15);

	this.congratsWindow = new lib.congratswindow();
	this.congratsWindow.setTransform(291,173.5,1,1,0,0,0,210,138.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.congratsWindow},{t:this.playAgain}]},29).wait(1));

	// Congrats BG
	this.instance = new lib.congratsbg();
	this.instance.setTransform(277.5,171.3,0.08,0.082,0,0,0,174.5,71.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({scaleX:1},9,cjs.Ease.get(1)).to({scaleY:1,y:171.4},7,cjs.Ease.get(1)).wait(1));

	// Flowers
	this.signal = new lib.signal();
	this.signal.setTransform(293.8,33.4);
	this.signal._off = true;

	this.timeline.addTween(cjs.Tween.get(this.signal).wait(7).to({_off:false},0).to({_off:true},6).wait(17));

	// Ground
	this.ground = new lib.ground();
	this.ground.setTransform(299,398.8,1,1,0,0,0,300.8,26.9);
	this.ground._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ground).wait(7).to({_off:false},0).wait(6).to({x:299.9,y:410.4},0).wait(17));

	// Signals
	this.tryAgain = new lib.signal();
	this.tryAgain.setTransform(301.5,104.3);
	this.tryAgain._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tryAgain).wait(13).to({_off:false},0).wait(17));

	// Sky
	this.playGame = new lib.playNow();
	this.playGame.setTransform(165.5,326,1,1,0,0,0,101.5,42);

	this.text = new cjs.Text("Spell out the words before the flower is finished growing to have create a healthy garden.", "16px 'Verdana'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 395;
	this.text.setTransform(95,83.5);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.instance_1 = new lib.BGintro();
	this.instance_1.setTransform(341.5,213.8,1.143,1.112);
	this.instance_1.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 76.5, 76.5, 0)];
	this.instance_1.cache(-302,-195,531,366);

	this.instance_2 = new lib.BG("synched",0);
	this.instance_2.setTransform(313.3,203.8,1.198,1,0,0,0,299,246.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.text},{t:this.playGame}]},2).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},6).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
