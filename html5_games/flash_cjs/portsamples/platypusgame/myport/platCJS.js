(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 400,
	fps: 20,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cliff.png", id:"cliff"},
		{src:"sounds/pop.mp3", id:"pop"}
	]
};



// symbols:



(lib.cliff = function() {
	this.initialize(img.cliff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,311);


(lib.Tail = function() {
	this.initialize();

	// tail
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTFoQgcgggIgqQgHgnABg+QAAhRgBgTQgEg5gRgcQgCgCgXgRQgXgSgBAEQABgHAYANQAUALAFAEQAZAYAIA6QAEAgABA8QABBAADAdQAGA0ASAaQAMAQAQAJQAVAKAPgLQAagVAOg4QAEgRAJhIQANhjgFhPQgHhagfhSQghhYgwg5QgGgIgtglQgugmgBAEQACgIAuAgQAnAaAMALQA7A7AmBhQAkBYAHBgQAGBVgQBrQgKBFgHAZQgSA6ghARQgNAHgNAAQgYAAgWgag");
	this.shape.setTransform(13.3,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C6239").s().p("AALF1QgdgOgPgnQgKgbgEgsQAFhngGg6QgLhohFgLIAYleQBjApA/B2QA7BpAJB1QAGBQgIBPQgJBXgYBEQgNAjgQAOQgMALgPAAQgLAAgNgFg");
	this.shape_1.setTransform(12.9,39.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.3,26.6,77.3);


(lib.LegFrontMove = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglALQAEg+AKAHQgIgEAIBEQAHgUAGgbIAFAUQADAJACAHQACAFASANQASANAAgDQACAIgdgNQgUgKgBgHQgEANgJASQgMgZgCgKg");
	this.shape.setTransform(6.3,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeASQgdgNAIgFIAPAHQAOAEAWgHIAcgLQAYgMABABQAFAFgZANQgWANgIACQgLAEgLAAIgLgBg");
	this.shape_1.setTransform(10.8,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMDnQg4gkgdhBQgfhJAAhMQAQhrAKAJQgBgBgGAmIgGAqQAABDAaBFQAcBJAqAgQAXASAfACQAiABATgXQAeglgRhOQgZhWgGgfQgNhLALg7QAahYAJAGQgBgBgLArQgKArgBAGQgGA+AVBXIAfByQAMBHgiAnQgcAggiAAQgaAAgcgSg");
	this.shape_2.setTransform(13,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A67C52").s().p("AAZDwQhXgPgpiFQgSg5ACg1QABg5AVgjIDNiCQgnBDAJBeQAEAnAfB7QAQBAgRAuQgSAwgxAAQgKAAgKgBg");
	this.shape_3.setTransform(12.5,24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAtBLQgcgEgSgHQgigLgVgTQgzhRAWgBQAeA6AHAGQATARAdAJQgRgHgPg6QgPg8AMACQACAAAGAaIAHAdQALAaATAVQAPARAYARIAsAbIgwgHg");
	this.shape_4.setTransform(25.5,53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAoQgogegCgwIAxgiQgCAtAVAlQAVAnAmAYQg2gIgfgZg");
	this.shape_5.setTransform(23.3,52.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOBPQgmgHgggeQgtg3ANgDQA1A0AJAFQAhAVAQAAQgBgCgBgBQAAgBgBAAQAAgBAAAAQABAAAAABQgmgigQgcQgbhNAPABQACAAAFARIAEATQAOAjAdAcQARAQAWALIAsATQgZAKgNADQgNADgMAAIgPgCg");
	this.shape_6.setTransform(30.8,47);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOA5QgugbgOgpIAshAQgCAuAgApQAeApAsARQgOAGgQAAQgdAAgdgTg");
	this.shape_7.setTransform(29.3,46.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANBMQgXgKgRgSQgdgggGgpQABhBAMAEQAGBBACAHQARAuAmAVQgJgegFgaQgMg1AMAAQABAAAMApIANAsQAIAPAdArQgggFgSgGg");
	this.shape_8.setTransform(16.6,55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAUQgbgwASgzIAwAeQAABJAoA4QgzgIgcg0g");
	this.shape_9.setTransform(15.7,55.2);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.4,40.1,64.3);


(lib.hair4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABRQAIAIAhhXQgSAJgXAWIAHgqQAEgZAAgTQgIAJgXASQgdAVgCgFQABADAhggQAcgfAJgLIAAAlQAAAVgDAQQgCAQALgHQAQgKAKgDQAFAOgbArQgWAkgHAAIgBgBg");
	this.shape.setTransform(5.3,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A67C52").s().p("AgxgRQAogVAcgkQAAArgKAqQASgNAXgIQAAAsgwApg");
	this.shape_1.setTransform(5,9.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,10.6,16.5);


(lib.hair3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBAIANgGQAOgKgCgaQgCgVgMgaIgDAYQgBAMgDAJQgbAkgDgIQAFAIAXhFIAAg1QASAgAHAUQAOAmgKAYQgDAFgOAIQgJAGgCAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(3.2,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A67C52").s().p("AgcAnQAYgLAFgcQADgOAAgpQAUAeAEAhQAGAtgjADg");
	this.shape_1.setTransform(2.9,7.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,6.4,13.5);


(lib.hair2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbA/QgDgBAGgbIAGggQAAgSgHgwIAZAQQANALAHAMQAIAPABAPQABAGgGASQgGAWgHgFQADACgFgiQgEgfgDAEIgIAqQgJAigJAAIgDgBg");
	this.shape.setTransform(3,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A67C52").s().p("AgGg0QAUANAIAcQAHAZgPAWIglARQAZgugIg7g");
	this.shape_1.setTransform(2.6,7.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,5.9,13);


(lib.hair1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxBDQAggYADgFQAJgRAHgkIAJg3QAPAKAIAIQALALAEANQACAIgEAiQgFAlgKgHQgDgCAEgfQAEgegKgIIAAAAIAAAAQABACgHAWIgIAYQgJAYgOANQgYANgJAAQgGAAAAgEg");
	this.shape.setTransform(5,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A67C52").s().p("AgEARQAFgRAJg3QAWAOADAfQADAbgPAWIg6ARQAUgKALgdg");
	this.shape_1.setTransform(5.9,7.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,10.1,14.4);


(lib.EyeBallDot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgFgGgBgIQABgHAFgGQAGgFAHgBQAIABAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape.setTransform(2,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.EyeBall = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABIAOIhFgXQgEgBhEABQhAAAgBgBQgFgUCGgDQCYAtgNAWIgBAAQgGAAg3gUg");
	this.shape.setTransform(-1.3,-8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNA1QgBgBAHgZIAHgbQAAgDgHgYIgGgZQAKgPASBDQgPA3gKAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1.setTransform(13.6,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtAOQghgOAGgEIAiADQAjACADgBIAmgJQAhgKACACQALAMhSAWQgJABgKAAQgPAAgNgEg");
	this.shape_2.setTransform(1.2,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbBtQgigVgUgqQgTgoABgmQARhKAKAJQABABgMAhQgHAiAOAnQAPArAdAbQAjAiAmgSQAmgQAAgpQAAghgWgkQgUgjgcgaIgngeQACgIAsAcQAgAYAYAlQAdArgBAqQgDAygvAVQgQAIgRAAQgVAAgXgPg");
	this.shape_3.setTransform(0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbBoQgcgTgSgmQgRglgBglQgBgpAUgZIAqgYQAeAHAdAgQAgAfARAnQAqBfhSAaQgMAFgMAAQgUAAgVgOg");
	this.shape_4.setTransform(0.1,-0.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.8,-12.3,30,25);


(lib.Eye = function() {
	this.initialize();

	// eyeball
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCATQgJgBgEgHQgFgHACgGQABgIAHgFQAHgFAGACQAJABAEAHQAFAHgCAGQgCAJgGAEQgFAEgGAAIgCgBg");
	this.shape.setTransform(11.3,14.4);

	// eyeshape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBBQgZgRgRgfQgOgbAAgcIADgSIAQgGIAngOIAKAGQAYARATAYQAVAbAEAWQAFAegXAQIgHACIgdAJQgNgCgNgKg");
	this.shape_1.setTransform(11.3,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABBvQABABBMgsQALAIgrAYQgbARgKAAQgHAAgBgGgAg/BVQghgPAGgFIAiADIALABQgRgMgOgVQgUgcgDgdQACgdADgNIgnANQgLgSB9guQATgEA/AEQBLAFgDAQQgBAChBgCIhHgBIgTAGIADABQAaAPAWAZQAcAfADAfQADAVgJAPIAAAAQAFAGgRAJIgLAIQgRAMgRgBIgMACQgLACgKAAQgPAAgNgEgAhIhHIgQAGIgDATQAAAcAOAaQARAfAZASQAPAKANABIAbgIIAHgCQAXgRgFgdQgEgXgVgbQgTgXgXgSIgLgFIgnANgAA9A3QgBgBAHgZIAHgcQAAgCgHgYIgGgZQAHgJAMAcQALAaAAAGQgBAKgKAYQgJAWgGAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_2.setTransform(13.6,11.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,23.4);


(lib.Beak = function() {
	this.initialize();

	// beakshapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#534741").s().p("AAHAUQgOgNgBgHQgCgFAIgEIACgCIgJAFIgCACQACgIALgCIgaAEIAPgEQANgEAHAFQAHAHAEAIQAEAKgBAKQgBAFgEAAQgEAAgJgHgAADgaQgEABgMAEIgBABQAKgIAHACg");
	this.shape.setTransform(51.9,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai5FxQhGgbgthLQglg9gQhWQgJgsAEgbQAFgmAcgTQAXgRAsgPQA6gUAMgGQA5gcBAgtQAsggBBg2QATgPAbgeQAggkALgLIABgBQgJgcAIgYQALgkAuAbQAUAMATARQAFACgBADQAXAVASAcIAJAIQAqAxAUBRQATBNgCBKQgDBTghA8QhICJiQBJQhbAuhUAAQg8AAg6gXgABlkKQgWAcgRAOQg6AygmAfQg4ArgyAdQgsAahUAfQglAOgRARQgTAXADAlQAGBKAeBDQAiBLA3AlQB6BSCkhKQCVhDBOiCQAkg9AGhTQAEgzgIg3IAFADQgIgJgkhbQgphYg2guQgVgQgIgFQgYgOgDALQgHAbAXAqIAqA/QAkA5gFACQgJAEhXiAIgFgLIgjAqgACph6QgMgGgJgLQgMgPAJgKIACgCIAKgFIgDACQgIAEACAGQABAIAQANQAQAOACgMQABgKgEgKQgEgKgHgHQgHgFgPAEIgPAEQgFgEAPgGIABgBQAMgFAGAAIAEABQAPAEAKATQAKAUgIAOQgFAIgIAAQgEAAgGgCg");
	this.shape_1.setTransform(36.1,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#736357").s().p("AjWFIQg3gkgjhMQgehCgGhLQgDgkAUgXQAQgRAmgOQBTgfAtgbQAygdA3grQAmgeA7gzQAQgOAXgcIAigpIAFALQBYB/AIgDQAGgCglg6Igpg/QgYgqAHgaQADgMAZAPQAHAEAVARQA3AuApBXQAjBbAIAKIgFgDQAIA2gEA0QgGBTgkA8QhNCDiVBDQhNAjhFAAQhMAAhAgsgACPilQgJAJANAQQAJALAMAFQAPAHAHgMQAIgPgKgTQgJgTgQgFIgEAAQgIgDgKAIQgQAGAFAFIAdgFQgOADgCAIg");
	this.shape_2.setTransform(36.2,39.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.5,72.2,78.5);


(lib.BurstBalloon = function() {
	this.initialize();

	// poppedballoonshapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAALTQgEgPACgZQACgUAFgJIgDgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgBgCQgJADgYACQgugFgqhCQg6hcgUieQgJhFAKgxQAEgTAHgRIAFhgQALiGAEhEQAHh1gBhYIAhCFQAcBzAGgBQAQhFAChZQABg2gEhqQgIi7AUifQAIAvARCCQAPBvAMBCQAFAbAaB/QAMA1AHArQAQASAIAWQgEhMADheQACg9AGhsQAOBSA1DTQAvC1ALBvIAGByIAAAFIAEAoQAEBPgBA1QgCBJgNA6QgRBKghANIgHADQgMAGgNACIgPADIgGgEQAigHAEgCQAXgLANgdQAJgTAHgiQAKgyAAhEIgBg8IAHAKIAAAAIAAAAQgCgEgVj7QgIhBgMhFQgQhjgSg1IgUgyQgMgdgBgUQAAAfADA+QACA5gHAnQgBgHgMgMQgHgGgHgIIgFgEIgHgHIACATQADAcATByQAUB5ADgCQgPALgrkHQgFg7gPhGQgHgjgVhbQgShDgKg/IgEg2QgCghgJgTQgMAtAHBHIALB2QAGCxglB7QgWgcgOgqIgUhNQABAMgZD9QgRCngBA7IAEAeIADgBQASCOAxBWQAPAbAMAOQATAXAUADIArACIgUgcQghgwgBADQAHgOAlA0QALATAHAMIACgDQAMgOAcAPQgHgHgBgvQAAg5AJABQAFABABA3QAAA3gDAAIgBAAIALAHQACgUAThCQAXhQADABIABAAQAPACgeBVQgOAogRAoQAKAHgDAFIgCABIgMgFIgngGQADAEgCANQgBAMgEAOQgHAqAzgMQA2gLgXgSQgQgLgHgGQgMgLADgKQgBADArATIADACQAhAWgcAXQgVASgkAFIgNAAQgeAAgIgWgAAuDOIADgCIACABIgBABIgCAAIgCAAg");
	this.shape.setTransform(20.5,74.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("AALJjQAEgOACgMQABgNgDgEIAnAGQgDAKANALQAGAGAQALQAYASg2ALQgMACgIAAQgeAAAFgggABgJUQgrgTABgDIAMAFIACgBQADgFgJgHQAQgoAOgoQAfhVgQgCIAAAAQgEgBgWBQQgUBBgCAVIgLgHIABAAQADAAAAg4QgBg2gEgBQgKgBABA5QAAAvAIAHQgdgPgMANIgCAEQgFgNgNgSQglg0gHAOQACgDAhAwIATAcIgrgCQgUgDgTgXQgMgOgOgbQgyhWgSiOIgDABIgDgeQABg7AQinQAZj9gBgMIAUBNQAOAqAWAbQAlh7gGiwIgLh2QgHhHAMgtQAJATADAhIADA2QAKA/ASBDQAWBbAGAjQAQBGAFA7QAqEGAPgKQgDACgUh3QgSh0gEgcIgBgTIAHAGIAEAFQAHAIAHAFQAMANABAGQAHgmgBg5QgDg+gBggQACAVALAdIAUAxQASA1ARBmQALBFAIA/QAWD7ABAEIgHgKIABA8QABBEgKAyQgIAhgJAUQgNAcgXAMQgEACgiAHIAHAEQAGADAEAFIgDgCgAAqB/QABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAAgBIgBgBgAC8E8IABAAIgBAAg");
	this.shape_1.setTransform(20.9,82.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,149.2);


(lib.balloonChunk4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0A0QgZgdgFgbQgCgMAVgRIAfgWQASgNAKAAQAIAAgWARQgeATgGALQgMASARAVQAcAoAYABQAaAAAbgoIgcg1QgXgwAZAAQADgBAIAxQAIAiAiAMQgnBHgsAAQgZAAgbgfg");
	this.shape.setTransform(8.4,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("AAABQQgYgFgUgeIgbgyIAfgnQAVgVAVAAIAegPQAAAlAGAUQAIAdAaAMQgSAggLALQgSAUgTAAIgGgBg");
	this.shape_1.setTransform(8.2,8.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,16.8,16.8);


(lib.balloonChunk3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnEBQgKgLgKgaQgLgcgIgKQgFgHgVgXQgQgSgIgNQgHgNAMgVIAWgfQAZglAIgTQANgfgIgeQgEgOgSgkQgPgggDgUQAGgIAQgJIAYgNQAugdAUgQQgJgcAAABQADgFANAbQAOgLgCgBQAHAEgQAQQAKAVAOAnQAHAUAuBIQAlA5gBAnQgBApgtAkQg3AjgWATQgkAgAAAlQAAAFAHAiQACAPgGAAQgFAAgKgKgAgwi1QgeAVgCASQgBAPATAmQAWAtgIAoQgHAgghAuQgXAfAZAeQAkArADAPQAFgkAkgeIBEguQAogbAKgZQAOgggegxIgng/QgVgjgJggIgOgtIgBgCQgSASgqAegAAAkJIAAAAIAAAAg");
	this.shape.setTransform(13.4,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("AhCC4QgZgwgfgYIAshFQAcgrgDgeQgBgPgcgwQgXgoAIgXIBGgnQAbgTAQgVQgIgPgKgLIAcAKQgEAIgGAIIAFALQAFANAGAeQAJAsAjA0QAkA0AHAbQANAtglAhQhJAzgcAdQgwAxAZA9QgXg0gOgag");
	this.shape_1.setTransform(13.6,26.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,26.5,53.5);


(lib.balloonChunk2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhzDVQgXgXgFgWQgFgXAbgrIAng+QAOgjAjhtQAdhcAZgzQASDNgDAAQgFgBgJhCIgLhMQgGASgfBuQgXBMgZAvQgnBJgBAEQgIAfApAnQAgg/AwghQA0glBCAHQAAgIgphMQgmhGADAAQAIgCAtBPQAcAzAXArQhZABgvAgQgsAegmBRIgqgjg");
	this.shape.setTransform(14.8,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("AhsDFQgRgSgFgRQgFgTAYglIAhg3QASgpAdhgQAbhaAUgvQACAVAKBCQAIA3AAAgIAFgYQAGAlAhAuQAtBEAGAMQhLgBg0AiQgwAhghBFQgWgSgJgKg");
	this.shape_1.setTransform(14.8,25.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,29.1,49.7);


(lib.balloonChunk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABtEnQg7hCgXg5QgShEgMgsQgbhUgdAJQhTAWhNBsQgqA9hDB2QAVhvgEhIIgFhkQgBg4AJgqQAhhqAJg0QAPhbg3g7QBfAtAiALIgegFQgygJgHgGQAnAfgOBOQgFAYgeBaQgWA/AEBkQAFB8gFApQAUhLBKhHQBMhFBNgQQAggFAaBQQAOArAQBDQAaBMAnAnIAYAUQAPAMADAHQgShvCogyQgIghgpg1Qgqg1gKggQgOgxALgoQAIgTADgNQAFgWgIgLQgYgeg0gPIhdgWQgzgNgXgZQgfgfADg8QhTBBgDgFQAAgBArglIA0grQgDBnBVAhQAQAGBDARQA3ANAfARQAjASgIA6QgJBQAFAOQALApApA6QAxBFAMAcIhJAXQgqARgWAYQggAkAOA5QACAJAiBWQhFhJgggkg");
	this.shape.setTransform(33.2,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1272D").s().p("ABlEkQgqgugRgnQgKgXgMgkIgSg6QgHgogJgVQgOgigXAFQhYAXhDBRQgiAnhHB5QAKg2gFiFQgFh1AWhCQAfhiAFgaQALhMgngqQA6ApA+gGIAFAOQA9gqAdgbQgDBVBHAhQAqAUBmAZQAaAKAOAIQAXAPAEAQQADAUgKAsQgKArAFAYQALApAoA6QAxBIALAYQhWAZgmAqQgwA2AgBPIhHhOg");
	this.shape_1.setTransform(33.5,38.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,66,80.9);


(lib.Balloon = function() {
	this.initialize();

	// balloonshapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1272D").s().p("AACLSQgPgGAAgSIAEgaQAFgWgCgBIAmAGQgBADATANQAVAOACAFQAFAMgRAKQgNAIgOACQgKADgIAAQgIAAgGgDgAAtKNIgDgFIAPgaQAGgRAJgjIAKgvQAHgrgFAAIgYBRQgTBAgEAUIgJgHQABgDAAg0QAAg3gFgBQgIgBAAA6QABAqAGAKIgMgFQgZgJgHAKIgQgYQglg1gHAPQABgDAiAwIAXAiIgQgEQgygRg3gnQhnhGhchyQhVhpgziGQgyiDgKiJQgPi+BbidQBeiiCuhEQCxhFC3AlQDMApBcCaQBYCVgSDUQgPCthTC7QhJClhtB8QgvA2g4AtQhQA2gRALIgKgFgAHbi6QgKADABAZQABAZAMAAQANAAgCgcQgCgZgKAAIgDAAgAE1pDQgDADA4A5QAjArAbA6QAcA8ANA/QAJBFAFAAQASABgWhgQgUhUgLgWQgag6grguQgIgKgZgTQgYgUgHAAIgCABgAgsKIIAWAFIAAAAIAAACIgWgHg");
	this.shape.setTransform(55.9,74.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCDGQgBgZAKgDQANgEACAdQACAcgNAAQgMAAgBgZgABPCCQgFAAgJhFQgNg9gcg8QgZg6gjgrQg4g5ADgDQADgGAeAZQAZATAIAKQApAuAaA6QALAWAUBSQAWBfgSAAIAAAAg");
	this.shape_1.setTransform(95.9,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMONIgBhiIgHjEIgCgyQgYgGgGgXQgDgJAIgeQACgLAEgHQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAgBIAAgBIgWgEIgYgGQhHgdhRhEQiPh4hQiTQhciqgTi2QgVjLBRifQBUimCvhRQCmhNC+AUQBeALBNAiQBVAmA6BAQA8BEAfBfQAbBUACBkQADCSgtCZQgqCMhQCGQhHB4hZBXIg3AsQgZAUgYARQgzAmgRAGIAEADQAbARADAJQAFATgRAPQgNANgUAGQgJADgJACQAKDgAAB2QAAAPgPAAQgPAAAAgPgAgHHtIgFAaQABASAOAGQAOAEASgEQAOgDANgHQASgKgFgMQgCgFgVgOQgTgOAAgCIgmgHQACABgEAXgABTFYIgJAuQgJAjgGARIgQAbIAEAEIAKAFQARgKBPg3QA5gtAvg2QBth7BJimQBSi5AQiuQASjVhZiUQhciajMgpQi3glixBFQiuBDheCjQhaCdAOC+QALCLAxCCQA0CFBVBoQBcByBmBHQA4AmAyARIAPAEIgXgiQghgvgCACQAIgOAlA0IAQAZQAHgLAZAJIALAFQgGgKAAgqQgBg5AJABQAEAAAAA3QAAA1gBADIAKAGQADgTAUhBIAYhRQAFABgIArg");
	this.shape_2.setTransform(55.8,92.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,111.6,184.9);


(lib.Cloud = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiTHOQgygGhAgnQhcg4gPgHQghgPgygBIhUgBQgPgCg2gTQgsgPgZAFQgsAIhUAeQhYAggqAIQi3AliIgcQhBgNgugXQhKglAWguQARglA4gdQAqgWA1gNQAXgFADgPQAAgUAGgOQAWg0BGgRQA0gNAvhCQA6hTAdgVQBAguBKgQQBQgRBFAZQAmANASgJQANgHAlghQA0gmAygSQAOgFAmACQAkACAMgIQASgMAZgiQAcglAOgMQA5gxBUgTQBRgTBQAOQBWAOA9AvQBDAzAYBQIAHAdQAEAHAVABIBVAAQB8gCBIAJQBsAOA2AzQBAA8gbBjQBBADAmARQA9AagVA1QBfAUA/AkQAYAOAbAcQAmAoAJAHQAaAXBSAGQBJAGAdAjIABACQAmAyhUAfQg0AThPAHIhDAGQgnABgcgEQgwgIgugQQgrAFgzABQhWAChMgOQgTgDg/gYQgzgTgeACQgiACgqgJQgwgMgbgFQhIgOhHAGQhSAHg2AgQhbA1g1AVQhDAag9AAIgcgBgAmFFEQAwAbBdA6QBSArBKgGQBGgGBRgoICNhPIhggMQhSgMABgJQAAgEB6AKICIAMQBkAJA9gGQAmgFAYgIQAjgLASgVQACgDALgcQAKgcgCAAQATgDgnBMQgNAXgiANQgWAIglAFQAmARBCAGQA3AGgTgOQAVAAASAIQgPADAVAJQAQAHALACQAyAPAhAFQBqASB8gNIgZgMQgWgLACgCQABgCBLATIBWAXQBIAOBJgJQBPgJA1gjIAFgDQB8hSmTABQgDgGApgKQAigJAOgCQgjg9hbgwQhmg2guAzQAMAHAegBQAfAAAOAIQAqAWAFAqQgkBzgQgTQAphOgFgSQgOg8hKADQgoAChKAaQBEg+ANgqQATg7hkgGIh9AAQhuACgBgDQgCgIBWgJIBbgJQA4gXgphIQglhAgugUQhEgch1gCQiDADg7gDQgwgBAAgEQgFg9gjgwQghgtg4geQgxgbg+gNQiLgdhxBRQhCAwglA3QgNASAnAiQAeAbAZAMQgDgHgDgJQADgCAGALQAGALgCAEQgEAFg/gqQhFgsgIgCQg1gJhbA+QhRA3gGA9QgHA+BGBAQhAgVgvAAQg+gBgsAgQglAbAXAsQAFALANASQAJAOgEAEQgKAMgVgwQgWgxALgTQAXgoA5gKIAxgEQAcgEASgJQgUgeADgnQADgjAVggQh3g8iDA7QiBA6gqB9QAtAAAAAHQgxAMgxAPQhkAfgHApQgPBTBhgOIBIgPQAjgIAEAJQAGAOhHAMQhEAMgUgFQgPgEgngYQgXgPgkAMQgtAPghASQhEAmAfAqQAbAjBGAOQCvAhCqgcQBegPBhgjQASgGAjgPQAggLAXAEQALACA6ATQApANAfgDIA5gFIACAAQAeAAAXANg");
	this.shape.setTransform(0.4,0.4,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkbGUQgygjgagQQgwgcgkADQhjAJhDgZQgagNgJgDQgNgFgXAJIhRAeQjLBEi5gKQhagFgqgIQhWgQgegmQgjgsBAgqQArgdA7gPQAhgHAJgHQALgJAFgcQAMg4BNgXQA5gQA3hJQBAhXApgYQBIgsBPgFQAegCAvARQAyASAXABQAJAAATgVIAYgbQAhgaAlgSQAvgXAhgDQAKgBAdAJQANAEARgWQBliJCFgZQBIgOBHAQQBJAPA7ArQBEAyAYBCQAHATABAWQAEAMAfABIBdAAQC5gBBVAdQCZA1guCVQBBACAoAQQA/AYgaAzQAOgZARgFQAPgDAHAMQAHAMgNAIQgNAKgfgGQBlAVBAAjQATALA0AxQAoAlAiAGQBFANAzAUQBVAkg3AmQhSA3iAgHQiSgThIgBQhUAAgqgBQhIgCg1gMIhbgYQgzgNgqgCQg2gDgtgbQghADgzgBQgvgFgZgCQgrgDgbAPQhoA8goASQhSAnhIAFIgVAAQhUAAhRgvg");
	this.shape_1.setTransform(0.5,0.2,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkXGUQgygjgbgQQgvgcglADQhjAJhDgZQgagNgIgDQgNgFgXAJIhRAeQjLBEi6gKQhZgFgqgIQhXgQgegmQgigsA/gqQAsgdA6gPQAigHAIgHQALgJAGgcQAMg4BNgXQA4gQA3hJQBAhXApgYQBJgsBOgFQAegCAvARQAzASAXABQAJAAASgVIAZgbQAggaAmgSQAvgXAggDQALgBAdAJQANAEAQgWQBmiJCFgZQBIgOBGAQQBKAPA6ArQBFAyAXBCQAHATACAWQAEAMAeABIBeAAQC4gBBWAdQCYA1guCVQBCACAnAQQBAAZgcA0QBfATA8AfQBRApAhBCQgPggASgIQAPgIAYALQAZALgGAMQAAADgCACQgGAGgTACIgOACQAWAKArALQBkAYARAVQAhAohsAhQh3AniRgfQg0gLhdABQhmACgrgHQgigEhWgXQhJgUgvgCQg2gDgugbQggADgzgBQgwgFgYgCQgsgDgaAPQhoA8goASQhTAnhIAFIgUAAQhUAAhRgvg");
	this.shape_2.setTransform(0.1,0.2,0.9,0.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.3,-41.3,255.5,83.5);


(lib.LegFront2 = function() {
	this.initialize();

	// legmovement
	this.instance = new lib.LegFrontMove("synched",0);
	this.instance.setTransform(10.3,13.7,1,1,-31.7,0,0,10.3,13.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.4,-4.2,53.3,56.8);


(lib.LegFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legmovement
	this.instance = new lib.LegFrontMove("synched",0);
	this.instance.setTransform(10.3,13.7,1,1,-31.7,0,0,10.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:0.79,rotation:0,skewX:-4.8,skewY:-16.4,x:10.4},4).to({scaleX:1,scaleY:1,rotation:28.7,skewX:0,skewY:0,x:10.3,y:13.8},5).to({regX:10.4,regY:13.6,scaleX:1,scaleY:1.07,rotation:0,skewX:-1.3,skewY:4.6,x:10.4},5).to({regX:10.3,regY:13.5,scaleX:1,scaleY:1,rotation:-31.7,skewX:0,skewY:0,x:10.3,y:13.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,-4.2,53.3,56.8);


(lib.EyeSurprise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.EyeBallDot("synched",0);
	this.instance.setTransform(14.6,18.1,1,1,0,0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63,scaleY:0.63,x:13.6,y:6.1},4).wait(21));

	// Layer 1
	this.instance_1 = new lib.EyeBall("synched",0);
	this.instance_1.setTransform(15,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,30,25);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair3
	this.instance = new lib.hair3("synched",0);
	this.instance.setTransform(76.1,11.3,1,1,0,0,0,3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:3.2,regY:6.9,scaleX:1.02,skewX:17.7,skewY:6.7,x:77.5,y:7.3},0).wait(1).to({regX:3,regY:10.9,scaleX:1.03,skewX:23.7,skewY:9,x:76.1,y:11.3},0).to({regY:11,scaleX:1,skewX:0,skewY:0},2).wait(1));

	// hair4
	this.instance_1 = new lib.hair4("synched",0);
	this.instance_1.setTransform(80.7,39.1,1,1,0,0,0,2.3,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:5.3,regY:8.4,scaleY:1.01,skewX:18.1,skewY:11.6,x:84.7,y:36.6},0).wait(1).to({regX:2.3,regY:11.7,scaleY:1.01,skewX:24.2,skewY:15.5,x:80.7,y:39.1},0).to({scaleY:1,skewX:0,skewY:0},2).wait(1));

	// hair2
	this.instance_2 = new lib.hair2("synched",0);
	this.instance_2.setTransform(35.3,24.4,1,1,0,0,0,2.7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:3,regY:6.6,scaleX:1.15,skewX:7.3,skewY:32.4,x:36.1,y:20.4},0).wait(1).to({regX:2.8,regY:10.7,scaleX:1.2,skewX:9.7,skewY:43.2,x:35.4,y:24.4},0).to({regX:2.7,regY:10.8,scaleX:1,skewX:0,skewY:0,x:35.3},2).wait(1));

	// hair1
	this.instance_3 = new lib.hair1("synched",0);
	this.instance_3.setTransform(30.4,27,1,1,0,0,0,7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:5,regY:7.3,scaleX:1,scaleY:1.01,skewX:8.3,skewY:1.3,x:28.7,y:24.4},0).wait(1).to({regX:6.9,regY:9.8,scaleX:1,scaleY:1.01,skewX:11.1,skewY:1.8,x:30.3,y:27},0).to({regX:7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:30.4},2).wait(1));

	// bodyShapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAFQgXgUALgCQADgBAPAQQAQAMABADIAAABQgBAEgEAAQgGAAgMgNg");
	this.shape.setTransform(86.7,70.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAGQgngsARADQgCAAAfAjQAgAhABgDQgBAGgEAAQgKAAgZgeg");
	this.shape_1.setTransform(88.6,68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjPAtQgvgngSgpQgOhLAMAFQgBgBAFAdQAGAcACAEQASAoAxAjQBcBGBmgRQBfgQBYhFQAIgHAsgxQAtgygBAAQALAFgwA7QgoAvgRAPQhVBHhjAQQgUAEgVAAQhYAAhOhAg");
	this.shape_2.setTransform(32.7,101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A67C52").s().p("Ag1BnQhOgChNg8QhVhCAUhLIIngDQgsBbheA6QhbA6hcAAIgKgBg");
	this.shape_3.setTransform(32.7,100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAOQADgTAEgEQADgEANgKQASgLABAHQABABgKAIIgLAIQgDAEgIARQgIATgCABIgBAAQgDAAADgRg");
	this.shape_4.setTransform(86.4,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiFfQgGgDgBgGQgBgFADgFQAbgkAOgtQAbhNgEhrQgFi7hKjXQgFgNAPgEQAPgDAEANQATAzAMAzQAeBrAMBqQANBsgJBOQgLBqguBHQgHALgFAEQgEADgFAAQgEAAgEgDg");
	this.shape_5.setTransform(83.1,43.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAOQgKgFAbgOQAZgPgBAMQAAADgUAJQgQAKgEAAIgBAAg");
	this.shape_6.setTransform(41.4,47.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAEQAJgagEgFQgPgDgWAeQgWAhgHAAQgEAAAbghQAcggAGgDQAQgIABASQACAMgGAOQAGgKAhgHIAcgEIgVAJQgbALgFAEQgOALgYAXIAPgig");
	this.shape_7.setTransform(31.4,47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgwBYIAyhLQAKgTgBgeIgEg0QAZBNAEgBQAHgEgBgeQgBgeADAAIAFAvQgBAngZgWQAJAMgiAsQgkAtgIAAIgCgBg");
	this.shape_8.setTransform(155,66.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAAQANg7ALAJQgCgBgMAzQgKA1ACgBIgCAAQgOAAAOg0g");
	this.shape_9.setTransform(5.6,63.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah2CmQAAgBBMgpQArgjAjg8QAggzAUhAQAUhUAFABQARABgdBeQgZBNgNAYQglBDgtAkQhJAogTAAQgHAAAAgEg");
	this.shape_10.setTransform(71.2,75.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A67C52").s().p("AB0inQgIBsg8BhQhDB1hgANg");
	this.shape_11.setTransform(70.9,75.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AACBaQhcgXhQg4Qh6hnARgJQBZBRAJAGQBRA1BbAZQB2AiBLgnQAngUAYgnQAXgzACAAQAFACgIAaQgHAXgEAFQgWAvgrAYQgtAag+AAQgoAAgwgMg");
	this.shape_12.setTransform(111.7,83.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A67C52").s().p("AALBWQhXgUhTg1QhSgzgig5IInAyQgVBdhOAgQgmAQgvAAQgmAAgrgKg");
	this.shape_13.setTransform(111.7,83.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AoZH4QgBADA5gFQAfgIAmgbQAyglBEhSIA3hGQAigqAagZQBKhHBTAAQBMAABnAxQByA9A5AXQBUAhBfgQQBWgOBTg1QBSg0AohIQAuhSgYhUQgmiIi/h3Qifhji7gpQi8goi3AaQjNAcisBpQi+BzhWCrQgxBdgFBnQgGBsAqBeQApBaBFApQAvAcAzACQAFABBAgGQAEAHg8AAQg4gBgKgDQhIgUg1hEQg1hEgThbQgShXAPhZQAciiCEiKQB0h5CohMQCqhNDCgJQC6gKC3A3QC/A5CPBsQC3CKgCCZQAABhhSBUQhGBHhoAoQh3AuhhgYQgxgLhCgiIhug5Qg+gdgrgMQg7gQgyAKQgxAJgtAnQgYAVgxA5IhDBQQgnAtghAeQgwAqgmAQQg0AKgUAAQgOAAACgFg");
	this.shape_14.setTransform(85.1,59.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A67C52").s().p("AoPH1IgIgCIARgHQiYAphgiMQgog6gUhNQgShKAGhFQAOibBwiJQBhh3CahVQEJiSFAAeQFDAdDsC+QCABoAZBwQANA8gUA6QgSA3gtAwQhZBfh9AgQiCAhhzgzQgngShTgpQhLglgzgOQiRgohfBmQgbAcg2BCQgzA/geAfQgvAwgjAWQgqAZgmAAQgMAAgKgCg");
	this.shape_15.setTransform(84.9,60.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.4,170.2,111.5);


(lib.BalloonPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smallChunk1
	this.instance = new lib.balloonChunk4("synched",0);
	this.instance.setTransform(19.1,96.1,1,1,49.1,0,0,8.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:8.4,regY:8.4,rotation:-52.4,x:-36.9,y:137.2},0).to({_off:true},1).wait(8));

	// smallChunk2
	this.instance_1 = new lib.balloonChunk4("synched",0);
	this.instance_1.setTransform(19.1,16.2,1,1,114.5,0,0,8.4,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-8.9,y:-29.8},0).to({_off:true},1).wait(8));

	// midChunk1
	this.instance_2 = new lib.balloonChunk2("synched",0);
	this.instance_2.setTransform(15.9,50.8,1,1,0,0,0,14.6,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:9,x:-44.7,y:21.3},0).to({_off:true},1).wait(8));

	// midChunk2
	this.instance_3 = new lib.balloonChunk3("synched",0);
	this.instance_3.setTransform(91.7,84,1,1,0,0,0,13.2,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:13.3,rotation:9,x:154.3,y:92},0).to({_off:true},1).wait(8));

	// bigChunk
	this.instance_4 = new lib.balloonChunk1("synched",0);
	this.instance_4.setTransform(65,34.3,1,1,0,0,0,33,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:79.5,y:-17.2},0).to({_off:true},1).wait(8));

	// flatBalloon
	this.instance_5 = new lib.BurstBalloon("synched",0);
	this.instance_5.setTransform(56.1,143.9,1,0.805,0,0,0,23.4,138.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({regX:20.4,regY:74.6,scaleY:1,x:53.1,y:79.9},0).to({scaleY:1,skewX:-5.2,x:46.4},2).to({scaleY:1,skewX:4.6,x:59.2},3).wait(1).to({scaleY:1,skewX:2.3,x:56.1,y:79.8},0).wait(1).to({scaleY:1,skewX:0,x:53.1,y:79.9},0).wait(1));

	// string
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEE6QgBhJgFiTIgKjZIgFiQIgChMQgBgOAPAAQANAAABAOIADBuIAKDpQAGCMACBcIAGA/QACAwgLAJQgGAGgFAAQgMAAAAgsg");
	this.shape.setTransform(58.2,150.5,1,0.961);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-6,103.6,191);


(lib.Background = function() {
	this.initialize();

	// cliff
	this.instance = new lib.cliff();
	this.instance.setTransform(0,89);

	// FlashAICB
	this.instance_1 = new lib.Cloud("synched",0);
	this.instance_1.setTransform(629.6,340.6,0.51,0.32,0,46.1,0);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Cloud("synched",0);
	this.instance_2.setTransform(334.6,280.6,0.66,0.555,0,-44.5,0);
	this.instance_2.alpha = 0.48;

	this.instance_3 = new lib.Cloud("synched",0);
	this.instance_3.setTransform(297.6,98.6,1.4,1.408,0,-6.2,180);

	this.instance_4 = new lib.Cloud("synched",0);
	this.instance_4.setTransform(666.6,195.6,1.31,1.293,0,50.2,0);
	this.instance_4.alpha = 0.629;

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7ECCB","#48A6AD"],[0,1],0,210,0.1,-209.9).s().p("Eg+fAfPMAAAg+eMB8/AAAMAAAA+eg");
	this.shape.setTransform(400,200);

	this.addChild(this.shape,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,804,400);


(lib.PlatypusPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beak
	this.instance = new lib.Beak("synched",0);
	this.instance.setTransform(63.6,260.4,1,1,0,0,0,63.6,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-11.2,x:79.7,y:271.5},4).wait(6));

	// balloon
	this.instance_1 = new lib.BalloonPop("synched",0);
	this.instance_1.setTransform(129.1,91.1,1,1,0,0,0,55.8,92.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// legback
	this.instance_2 = new lib.LegFront2("synched",0);
	this.instance_2.setTransform(182.4,255.1,1,1,22.3,0,0,13.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:13.8,regY:8.8,rotation:-90.6,y:242.9},4).wait(6));

	// legfront
	this.instance_3 = new lib.LegFront2("synched",0);
	this.instance_3.setTransform(106.4,264.7,1,1,46.2,0,0,10.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:17.6,rotation:83,x:100.8,y:256.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:159,x:103.8,y:248.7},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:145.3,x:136.2,y:240.2},0).wait(7));

	// eye
	this.instance_4 = new lib.EyeSurprise("synched",0);
	this.instance_4.setTransform(80.1,248.1,1,1,0,0,0,15,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-11.2,x:93.5,y:256.2,startPosition:3},4).wait(6));

	// body
	this.instance_5 = new lib.Body("synched",0);
	this.instance_5.setTransform(132.1,185.1,1,1,0,0,0,80,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-11.2,x:132.2,y:184.3,startPosition:3},4).wait(6));

	// tail
	this.instance_6 = new lib.Tail("synched",0);
	this.instance_6.setTransform(214.1,236.7,1.001,1.004,0,-0.1,5.6,9.8,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.05,skewX:-173.6,skewY:12.1,x:220.2,y:219.6},4).to({skewX:-184.1,skewY:1.7},3).to({skewX:-173.6,skewY:12.1},2).wait(1));

	// legfrontback
	this.instance_7 = new lib.LegFront2("synched",0);
	this.instance_7.setTransform(158.8,246.3,0.86,0.86,51.7,0,0,10.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:17.6,rotation:-39.5,y:236.8},4).to({_off:true},1).wait(5));

	// legbackfront
	this.instance_8 = new lib.LegFront2("synched",0);
	this.instance_8.setTransform(98.5,267.6,0.884,0.884,68.5,0,0,13.9,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:14,rotation:0,skewX:-126.1,skewY:-127.5,y:262},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.6,230.9,324.2);


(lib.PlatypusIdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beak
	this.instance = new lib.Beak("synched",0);
	this.instance.setTransform(63.6,260.4,1,1,0,0,0,63.6,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3,x:63.7},9,cjs.Ease.get(1)).to({rotation:0,x:63.6},10).wait(1));

	// eye
	this.instance_1 = new lib.Eye("synched",0);
	this.instance_1.setTransform(80.6,253,1,1,-10.7,0,0,10.8,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-10.6,x:80.5,y:252.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-10.7,x:80.6,y:253},5,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).wait(1));

	// balloon
	this.balloon = new lib.Balloon();
	this.balloon.setTransform(129.9,3.9,1,1,0,0,0,56.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.balloon).wait(20));

	// legback
	this.instance_2 = new lib.LegFront("synched",9);
	this.instance_2.setTransform(182.5,255.2,1,1,0,0,0,13.9,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// legfront
	this.instance_3 = new lib.LegFront("synched",0);
	this.instance_3.setTransform(106.4,264.6,1,1,0,0,0,10.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// body
	this.instance_4 = new lib.Body("synched",0);
	this.instance_4.setTransform(132.1,185.1,1,1,0,0,0,80,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// tail
	this.instance_5 = new lib.Tail("synched",0);
	this.instance_5.setTransform(214.1,236.7,1.001,1.004,0,-0.1,5.6,9.8,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:9.7,regY:23.5,scaleX:1,scaleY:1,skewX:-24,skewY:-19.5,x:213.9,y:236.5},9,cjs.Ease.get(1)).to({regX:9.8,regY:23.9,scaleX:1,scaleY:1,skewX:-0.1,skewY:5.6,x:214.1,y:236.7},10).wait(1));

	// legfrontback
	this.instance_6 = new lib.LegFront("synched",0);
	this.instance_6.setTransform(163.7,254.1,0.86,0.86,0,0,0,10.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// legbackfront
	this.instance_7 = new lib.LegFront("synched",9);
	this.instance_7.setTransform(99.4,263.2,0.884,0.884,0,0,0,13.9,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,230.9,316.4);


(lib.Platypus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,pop:60,fall:65});

	// timeline functions:
	this.frame_59 = function() {
		///* js
		//this.gotoAndPlay("idle");
		//*/
		//gotoAndPlay("idle");
		this.gotoAndPlay("idle");
	}
	this.frame_60 = function() {
		playSound("pop");
	}
	this.frame_64 = function() {
		///* js
		//if (this.onPopped) { this.onPopped(this); }
		//*/
		if (this.onPopped) { this.onPopped(this); }
	}
	this.frame_69 = function() {
		///* js
		//this.gotoAndPlay("fall");
		//*/
		//gotoAndPlay("fall");
		this.gotoAndPlay("fall");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1).call(this.frame_60).wait(4).call(this.frame_64).wait(5).call(this.frame_69).wait(1));

	// idle
	this.platypusIdle = new lib.PlatypusIdle();
	this.platypusIdle.setTransform(128.3,9,1,1,-5.7,0,0,128.3,9);

	this.timeline.addTween(cjs.Tween.get(this.platypusIdle).to({regY:9.1,rotation:0,y:14.1},14,cjs.Ease.get(-1)).to({regY:9,rotation:3.7,x:128.4,y:9.1},16,cjs.Ease.get(1)).to({regX:128.8,regY:9.5,rotation:0.3,x:128.8,y:14},14,cjs.Ease.get(-1)).to({regX:128.3,regY:9,rotation:-5.7,x:128.3,y:9},15,cjs.Ease.get(1)).to({_off:true},1).wait(10));

	// pop and fall
	this.instance = new lib.PlatypusPop("synched",0);
	this.instance.setTransform(128.2,167.7,1,1,0,0,0,127.6,165.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.5,-5.4,235.3,333.2);


// stage content:



(lib.platCJS = function() {
	this.initialize();

	// score
	this.scoreTxt = new cjs.Text("SCORE: 0", "bold 24px 'Arial'", "#FFFFFF");
	this.scoreTxt.name = "scoreTxt";
	this.scoreTxt.lineHeight = 26;
	this.scoreTxt.lineWidth = 220;
	this.scoreTxt.setTransform(23.2,18);

	// platypus
	this.platypus = new lib.Platypus();
	this.platypus.setTransform(657,157.8,0.801,0.801,0,0,0,137.8,94.3);

	// background
	this.bg = new lib.Background();
	this.bg.setTransform(400,200,1,1,0,0,0,400,200);
	this.bg.cache(-2,-2,808,404);

	this.addChild(this.bg,this.platypus,this.scoreTxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(400,200,875.5,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;