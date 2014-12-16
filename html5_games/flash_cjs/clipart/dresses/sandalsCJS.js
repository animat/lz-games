(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 93,
	height: 118,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.sliper = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(216,95,82,0.8)").ss(1,1,1).p("AAAAAQAAAAAAAA");
	this.shape.setTransform(66.3,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AE5h7QABAAACAAQBBgGAcAaQAHAGAEAIIAkA/IAAABQAMAWABARQABAHgBAHIgBAIIgBAkQgJAegoAUQiYA9g4geQgugYADh/QAAgGAAgJQAAgPABgQQAIgHAFgHQAjgrAwgPQABAAABAAQAWgHAZAAgAEcAgQACgDACgDQAsg8ByAIQAFAAAFAAACwBCIAAAAQAKAnAYAMQA4AeCYg9QAogUAJgeQABgEABgEAmGg5IABgBIAxhCQARgIAQgFQBBgSA1AtQADACACACQAbAZAZAKQAUAIATgDQAPgCAOgJQAYgRAagMQACAAABgBIABAAQAFgHAAgFQAFAZgHAQQhBAdgxAxQgWAghCAxQhfA9iPhSQgdgRAKgwQADgPATgRQAZgPAVgDQACAAABAAQABAAABgBQABAAACgBgAkegGQABgBABgCQADgEACgDQAeggAxBAQAGAIAGAKQAxgjASgbQAagcAfgVAkegGQAAAAAAgBQgigygkgFQgQgCgRAGQAAABgBAAAnSgFQgBAIAFAKQAFAIAKAJQCPBSBfg9QALgJAKgIAkiAAQACgDACgDAE8h7IgDAAACViPQgBAFABAFQAAAFAJAMIAAAAQACAGADAFQABAFACAFQACAIACAJQABAIAAAIQgBADAAAEQgBACgBADQAAgCgBgDQgBgEgCgEQgDgJgEgIQgEgIgFgIQgOgYAPgXQAGgMAdgHACogsQAAgCAAgDQAAAAAAgBAEcAhIAAgBQgBAAgBgBQgmgfgwAsQgBABgCABIAAABQgIAIgJALQgHgagCgmAg2iXQAyALgBATQAAABAAAB");
	this.shape_1.setTransform(47,70.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEAEAE").s().p("ADSCQQgugYAEh9QABAkAHAaIAAAAQALAnAXAMQA5AdCXg8QApgUAIgeIACAAIgBAkQgJAegpAUQhmApg7AAQgcAAgTgKgAm+AyQgdgRAKgvQgCAKAFAHQAFAJALAIQCPBTBeg+IAWgQQAwgkASgbQAbgbAegVQAYgRAbgMIADgBIAAgBQAFgGABgFQAEAZgHAPQhBAegxAyQgVAfhDAwQgoAagxAAQhCAAhSgvgAClhJQgDgJgFgHIgJgQQgOgYAQgYIgBALQABAFAIALIAAABIAFALIADAJIAEASQACAHgBAIIgBAHIgCABIgDgJg");
	this.shape_2.setTransform(46.9,71.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D0D0").s().p("ADRCHQgYgMgKgnIAAAAIARgTQAIAXALAOIAWASQAbAPAbgUQBLgnBQgNQAEgCACgHQAHgRgBgQQgBgQgIgNIAKAAIAAABQAMAUABATQABAHgBAHIgCAIQgJAegoAUQhnApg7AAQgcAAgSgKgAnAAwQgKgJgFgIQgFgKABgKQADgNATgRQAZgPAVgDIADAAIACgBIAAABIgcASQgYATAWATIACACQAYATBDAVIABAAIAZgcIgJAdIAXATIAWADQAXgIASgSIAEgEIAXgUIAMASIgVARQgpAagxAAQhCAAhSgvgACngfIAAgBIACgFIABgHQAAgIgBgIIgEgRIgDgKIgFgLIAAAAQgJgMAAgFIAAgKQAGgMAdgHQgDA2AAAyIgNAOIAAgFgAgyhaIgFgrQAyALgBATIAAACQgBAFgEAHIgBAAIgDABQgaAMgYARQgOAJgPACQAXgUAVgWg");
	this.shape_3.setTransform(47.1,68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1E1E1").s().p("ACGApIAAgRIABgdIAOgPQAigqAwgPQhZA1AVBqIgDADIAAgBIAAABIgRAUQgHgagCgmgAjpA2Qgxg/geAeQAhgkAYAAQAMAAAKAFQALAFAHAAQANAAATgMQAOgKAEgFQAUAIATgDQAPgCAOgJQgeAVgbAZQgSAbgxAmIgMgTgAD5BFQgJgVgZgjQAZAYALgwQgHAwALAcIgEAGIAAAAIgCgCgAGdAKQhLgXAAgRQATgOAAgJQAAgIgVgIQgbgIgNgGIgNgBIAAgBQBBgGAcAaQAHAHAEAIIAkA9IgKgBgAmmgUIAxhBQARgJAQgEQBBgTA1AuQgMgDgTAAQgeAAgnALQg0AOgPAaQgQgCgRAGg");
	this.shape_4.setTransform(50.3,66.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEEEEE").s().p("ADchLIACgBQAWgGAYgBIADAAIgDAAIADAAIAAAAIANACQAOAFAbAIQAVAJAAAIQAAAJgUAOQAAARBLAXQhxgIgsA+QgMgbAIgxQgLAwgZgXQAYAjAKAVQgmgggwAtQgWhqBag1gADwBJIAAAAIAAAAgAmQgVQAPgaAzgOQAngLAfAAQASAAANADIAFAEQAbAZAYAJQgEAGgOAKQgSAMgNAAQgHAAgLgFQgLgFgMgBQgYABggAkIgFAHIgCACQgigwgkgFg");
	this.shape_5.setTransform(51.4,66.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,53,96,34.7);


// stage content:
(lib.sandalsCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sliper();
	this.instance.setTransform(47,16.4,1,1,0,0,0,47,16.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(46,112.5,95,33.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;