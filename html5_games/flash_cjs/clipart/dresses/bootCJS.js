(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 95,
	height: 81,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.boot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AFpjIQAPBFAEAjQABALABAIIABAEQAIBGAPANQABABAAAAQABABACABQAuAiALAlQAJAigTAkQg+BDh8AEQgHABgHAAQgtgBgigXQgigfAOguQAAAAABgBQAOg/gDg6QgBgDAAgEQAAgBAAgCQgEg+AAgFQAAhcAXg7IgCAoQAAAIAAAKQAAALAhAJQAIACAKABQAcAEAmgGQAMgBAKgEQAXgKAJgWIgBgnQADANACAJgAFli3QADgIABgJADtiQIAMB/QAzgWA0AJIgbh5AjCiMQAGAAAGAAQBdgQANgrQAPA0ACAuIACAuQAHAPgBAfQgBALgBAOQgDAXhRAgQgvAdgLAcIgCABQgrA2hHgEQiugJASg4QAAgBAAgBQAAAAAAAAQA1AoBqgHQBDAAAdgeIADgCQAwg2AsgQQAygVAQgfAk7ggQATgZAPgnIAWhLQACAfA/AAQgDBJgiAsQgBABAAAAQgggSgzAIgAlTgGQAAAAABAAIABgCQAMgKAKgOAlTgGQAAAAABAAQAAAAABAAQBRgLAmAaAnTBwQgOhHCOgvACeB9QAXBOB3gLQCegkAJhIAGWAKQhVgGhdAm");
	this.shape.setTransform(48.8,58.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919191").s().p("AEBDHQgtgBgigXQgigfAOgtQAXBNB3gLQCegkAJhIQAJAigTAkQg+BDh8AFIgMAAIgCAAgAk3CYQiugJASg4IAAgCQA1AoBqgHQBDAAAdgeIADgCQAwg2AsgQQAygTAQghIgCAbQgDAVhRAgQgvAdgLAcIgCABQgoAyhBAAIgJAAgADtirQAcAEAmgGQAMgBAKgEIAbB5Qg0gJgzAWgAk7g7QATgZAPgnIAWhLQACAfA/AAQgDBJgiAsIgBABQgggSgzAIg");
	this.shape_1.setTransform(48.8,61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEEEE").s().p("AGEAhIgMgBIgTgBIgPgCIgRgDIgOgDQgIgBgIgFIgCgCIAAgEQAFgKAMgEQAIgFAJgCIARgEIAHgCIAHAAIATgBIARABQAMACAJAHQAGADAFAEIAFAEQAHAIgHAJQgFAHgJADIgSACIgLAAgAmsAZIgGgNQAsg3BIANQARAFANAJIAIAGQg9AfhEAGIgTgCg");
	this.shape_2.setTransform(49.1,63.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1E1E1").s().p("ACfCOIABgCQAOg/gDg6IgBgIIAAgEIgEhBQAAhcAXg7IgCAoIAAATQABAKAhAJIARAEIAMB+QAzgVA0AIIgbh5QAXgKAJgWQADgIABgJQAQBFADAjIACAUIABAEQAIBDAQAQIAAAAIADACQAuAiALAlQgJBJieAjIgbACQheAAgVhEgAFqAzIgIABIgHABIgQAEQgKADgIAFQgMAFgEAKIAAAFIACACQAHAEAJACIANACIARAEIAPABIATACIAMABIAMAAIARgDQAJgDAGgHQAGgIgGgIIgFgFQgFgFgGgEQgKgHgLgCIgSgBIgSABgADlA6IADgBIACgBIAAAAIACAAIAAgBQBLgdBGAAIABAAIAAAAIAaABIgagBIAAAAIgBAAQhGAAhLAdIAAABIgCAAIAAAAIgCABIgDABgAnRCBIgBgBQgOhHCOgxIABAAIABAAIAAgCQAMgIAKgOQAzgIAgATIABgCQAigsADhJIANAAQBcgQAOgqQAOAzACAuIACAuQAIAPgCAdQgQAhgyAVQgsAQgwA2IgDACQgcAehEAAIgfABQhTAAgsghgAmuBSIAGAMIATADQBDgHA9ggIgIgHQgMgIgSgGQgNgCgMAAQg2AAgkAvgAjZAZIgBAAIgCgCIAAAAQgbgSgvAAIAAAAIAAAAQgTAAgVADIgCAAIACAAQAVgDATAAIAAAAIAAAAQAvAAAbASIAAAAIACACIABAAg");
	this.shape_3.setTransform(48.7,56.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,34.7,96.1,47.3);


// stage content:
(lib.bootCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boot();
	this.instance.setTransform(48,40.5,1,1.001,0,0,0,48,40.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48.8,75.7,95.1,46.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;