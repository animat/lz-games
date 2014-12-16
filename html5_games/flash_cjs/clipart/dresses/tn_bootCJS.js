(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 97,
	height: 67,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib.tn_bootCJS = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AFlimQADgHABgJAFlimIgBgmQADANACAJQAPBFAEAjQABALABAIIABAEQAIBEAPAPQABAAAAABQABABACAAQAuAjALAlQAJAigTAkQg+BDh8AEQgHABgHAAQgtgBgigXQgigfAOguQAAAAABgBQAOg/gDg6QgBgEAAgFQAAgBAAgCQgEg8AAgFQAAhdAXg6IAAABIgCAnQAAAIAAAKQAAALAhAJQAIACAKABIAMB+QAzgVA0AJIgbh5QAXgKAJgXgADth+QAcAEAmgGQAMgCAKgDAFkjMQgHgag4gMQhQgHgZArAhMi1QAPA0ACAtIACAuQAHAPgBAeQgBAMgBAPQgDAXhRAgQgvAdgLAcIgCABQgrA2hHgEQiugJASg4QAAgBAAgBQAAAAAAAAQA1AoBqgHQBDAAAdgeIADgCQAwg2AsgQQAygVAQghAjCh6QAGAAAGAAQBdgRANgqAkDiYQACAdA/ABQgDBJgiAsQgBABAAAAQgggTgzAJQATgZAPgnIAVhKQAAAAABAAQAwhIBbAOQAjACAJAbAkEiYIABgBQAAAAAAABAlTAKQAAAAABAAIABgCQAMgIAKgOAlTAKQAAAAABAAQAAAAABAAQBRgKAmAbAnTCCQgOhHCOgxACeCPQAXBOB3gLQCegkAJhIAGWAcQhVgHhdAn");
	this.shape.setTransform(48.8,33.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],0.3,-3.7,0.3,13.8).s().p("AhaAOQAxhGBYAPQAjACAJAbQgNAohbAQIgMABQg/gBgCgeg");
	this.shape_1.setTransform(31.9,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,-3.1,-0.1,14.1).s().p("AghA5IgSgDQgggJgBgLIAAgSIACglQAZgrBOAHQA5AMAGAaIABAkQgJAXgXAKQgKAEgMABQgXAEgRAAQgNAAgLgCg");
	this.shape_2.setTransform(76,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#919191").s().p("AEBDHQgtgBgigXQgigfAOgtQAXBNB3gLQCegjAJhJQAJAigTAkQg+BDh8AFIgMAAIgCAAgAk3CYQiugJASg4IAAgBQA1AnBqgHQBDAAAdgeIADgCQAwg2AsgQQAygTAQghIgCAbQgDAVhRAgQgvAdgLAcIgCABQgoAzhBAAIgJgBgADtirQAcAEAmgGQAMgBAKgEIAbB5Qg0gJgzAWgAk7g7QATgZAPgnIAVhJIABgCIAAABIgBABIABgBQACAdA/ABQgDBJgiAsIgBABQgggSgzAIg");
	this.shape_3.setTransform(48.8,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEEEEE").s().p("AGEAiIgMgBIgTgCIgPgBIgRgEIgOgCQgIgCgIgEIgCgCIAAgFQAFgKAMgDQAIgFAJgDIARgEIAHgBIAHgBIATgBIARABQAMACAJAHQAGAEAFADIAFAFQAHAIgHAIQgFAHgJADIgSADIgLAAgAmsAZIgGgMQAsg4BIANQARAFANAJIAIAHQg9AehEAHIgTgDg");
	this.shape_4.setTransform(49.1,40.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1E1E1").s().p("ACfCOIABgBQAOhAgDg6IgBgJIAAgDIgEhBQAAhcAXg7IAAABIgCAnIAAASQABALAhAJIARAEIAMB+QAzgWA0AJIgbh5QAXgKAJgWQADgIABgJQAQBFADAjIACATIABAFQAIBDAQAPIAAABIADACQAuAiALAlQgJBJieAjIgbACQheAAgVhEgAFqA0IgIAAIgHABIgQAEQgKADgIAFQgMAFgEAKIAAAFIACACQAHAFAJABIANADIARADIAPABIATACIAMABIAMAAIARgDQAJgCAGgIQAGgIgGgIIgFgFQgFgFgGgDQgKgIgLgBIgSgBIgSABgADlA7IADgCIAFgCIABAAIACgBIAAAAQBJgcBFgBIAAAAIAAAAIAXABIADAAIgDAAIgXgBIAAAAIAAAAQhFABhJAcIAAAAIgCABIgBAAIgFACIgDACgAnRCBIgBgBQgOhHCOgxIABAAIABAAIAAgCQAMgIAKgOQAzgIAgASIABgBQAigsADhJIANAAQBcgQAOgqQAOAzACAuIACAuQAIAPgCAdQgQAhgyAWQgsAPgwA2IgDACQgcAehEAAIgfABQhTAAgsghgAmuBSIAGANIATACQBDgGA9ghIgIgGQgMgJgSgGQgNgCgMAAQg2AAgkAvgAjZAZQgbgUgyAAIAAAAIAAAAQgTAAgVADIgCAAIACAAQAVgDATAAIAAAAIAAAAQAyAAAbAUIAAAAg");
	this.shape_5.setTransform(48.7,33.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.3,41.7,96.1,50.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;