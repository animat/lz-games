(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 145,
	height: 198,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.coat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAAAAIAAAA");
	this.shape.setTransform(41.9,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AFbkzQABgEAAgEIBZI9IAjIQIAGgBQALALANAJQA/ArBPADQAfgCAWgNQASgTAMgaIAAgDQgWkigfktIhttbIAAgDQAEhjg7g0QjigYiygpIAAAAQgEgBgFgBIAAABIgBAAIgBgCQgOgLgQgVQgVgegKgNQgFAKgHARQgHARgZAeQgbAeguAbQgvAbgCgBQgfgCgZgPQgagQghhIQg0BRgDAGIgEAFIAAACIgBgBIh/CSIAQANIAAAAIA7AyIgXAZIggAhIAKAjIENNsIAAAAIAAAAIAAAAABhtyQACABABABQACABACABQABABAAAAICRBjIgTAKIh3BDIAVAPIA5AnIgOAuIkyO3AFbkzIgThrIgIguABgtyQAAAeg0BMQgKANgJAMIhWHCIhLIaIg6mJQAijjgDjtQADACADACQAEADAFADQACABABAAQAJADALAAQAJAAAIgCQAGgBAFgDQABCTAVBnQAGAeAIAfAm8j9IgVGlIgBgHIgaJHQgSAWgaAPQgUAMgaAHQhpAEgngkIAdqjIA8qWQgEhlAjgWIEqh7IABABAjFqvIAiBDAjFqvQANAHAMABQAShTAWgiQAYARAmBdQANgDAOgGAhspgQAIgDAHgEIAyhQQAkgPAggpAkystQArBqBCAUAm9lcIAAAhIABA+IArHNIAAAAQgBADAAADQg4E2gGEmQAuBDBMAjQBHAiBiAFIA0i7IABABAm9lcIgBgiAnCk7QADgRACgQAjCicIhwqRAiDFfIABgBIAAABgAiHFtIAAgBAiGFpIgBADIAAAAQABACAAABIgBgDAiHFtIAAAFIABgDQAAADgCADQABgCAAgCQAAgCAAgCgAiGFpIADgKAiBFgQgDAEgCAFAiIF1QgICPAYEAQAAABAAAAIA/C7IABAAQDvgYC8hMQAggOAfgPQgOj0hGlYQgakZAXkN");
	this.shape_1.setTransform(72.8,99);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#959595").s().p("AgQBaQgBgFAIgPIACgEIAEgMQAFgDAKgBQAPABAAAXQAAALgHALQgJAMgLAAQgRgBABgRgAgahXQAAgKAKgJIAFAAIAFACIAPAFQAMAFAAAKQAAAJgFAKQgIAMgIgBQgaABAAgig");
	this.shape_2.setTransform(63.3,154.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAgAAAAAg");
	this.shape_3.setTransform(59.1,135.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4C4C4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(59.7,134.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F6F6F").s().p("AAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_5.setTransform(59.7,134.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595959").s().p("ACeFZIABABIABAAIgFAJgAiflBIAFghIABAhg");
	this.shape_6.setTransform(43.7,99.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AhBAiQAijhgDjtIAGAEIAKAGIACABQAJADAJABQAJAAAIgDQAGgBAFgDQABCUAVBmQAGAeAIAfIhJIag");
	this.shape_7.setTransform(59.9,79.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AAAAAA").s().p("AgXBcIgDgBIgKgHIgFgEIgjhCQANAGANABQARhQAXgjQAWASAmBaQANgCANgGIgxBQQgIAEgHACQgIADgHAAQgLAAgJgDg");
	this.shape_8.setTransform(60.6,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C8C8C8").s().p("AoqLmQAGkmA3k1IACgHIAAAAIgrnNIgBg+QAiD2A0DwQARBOgYBQQhCDjAtDrQANA+AfBDQhMgjgthDgAELKLQgQhkgbhCQgjhXhKhQQgegggKgSQgPgbARgVQARgUAvhIQAvhIAFhyQAFhzAIiDQAJiCAXg4IATBrQgXENAaEZQBGFYAOD0QgfAPggAOQgCg8gMhJgAISDJQgqhQAAgDQANhsAAhaIAAhGQgDhFAAgqQAAhqgNhJQgaiGAQikIBtNbQAfEtAWEiIAAAEQgMAZgSATQgjnfgqhQgApvHGQgSh8AHhOQAHhPAei9QAcixAdjGIAFAAIABA+IgVGlIgBgHIgbJHQgSAWgZAPQATiEgQh3gAoKosIAcggIEMNsQi5l0hvnYgAjdESIEyu3IApAiQiaIui/FogAoXmHIAAAAgAoJrEIANgWIA7AxIgYAZgAAWsJIB3hDIAgAbQg/AjhDAUg");
	this.shape_9.setTransform(81.8,106.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7B7B7B").s().p("AhpM8IAAAAIAAABgAh4GpIAAgFIABAFIAAgCQAAADgBACIAAgDgAh4GkIAAAAIABADgAB3s2IgEgCIgDgCIABgCIAIACIAAAAIgBAEIgBAAg");
	this.shape_10.setTransform(71.2,93.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAEAEA").s().p("AgrJvIkNtsIgKgiIAgghIAXgZIg7gyIAAAAIgQgNIB/iSIABABIBwKPIA6GKIBJoZIBYnDIATgYQA0hMAAgeIABAAIADACIAEACIABABICRBiIgTALIh2BDIAUAOIA6AoIgPAuIkyO3IgBABIgDAKIgBACg");
	this.shape_11.setTransform(63.6,73.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AjKAiIACgBIgBAAIAAABIgBAAgADKghIAAAAIABAAIAAABIgBgBg");
	this.shape_12.setTransform(62.2,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#626262").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(82.5,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9D9D9").s().p("AgpPAIhAi7IAAgBQgSi8AAh/QAAguACgmQACgDAAgDIgBgDIAAAAIABgDIAFgJIABgBQC8loCcovIgoghIAPguIg6gnQBEgUA+gjIgggbIATgKIiRhjIABgEQCzApDhAYQA7A0gEBjIAAADQgPCkAZCGQANBJAABqQAAAqADBFIAABGQAABagNBsQAAADAqBQQArBQAiHfQgWANgfACQhOgDhAgrQgNgJgKgLIgHABIgjoQIhZo9IgBAIIgShrIgJguIAJAuQgYA4gICCQgJCDgFBxQgFBzgvBJQguBIgSAUQgRAVAQAbQAKASAdAgQBKBQAjBXQAbBCAQBkQAMBJACA8Qi8BMjvAYgAhTJgIgEALIgCAFQgIAOABAGQgBARATAAQALAAAIgLQAIgLAAgLQAAgYgPAAQgKAAgHAEgAhqHRQAAAhAaAAQAKAAAIgLQAFgKAAgJQAAgKgMgFIgRgFIgFgDIgFAAQgKAKAAAKgAlHOYQgghDgNg+QgtjrBDjjQAXhQgRhOQg0jwghj2IgBghIgBgiIABAiIgFAhQgcDGgcCvQgfC/gHBPQgGBOARB8QAQB3gTCEQgUAMgZAHQhqAEgngkIAdqjIA8qWQgEhlAkgWIEph7IABABIh/CSIAQANIAAAAIgNAXIAxA0IggAhIAKAjIgcAgQBvHYC6F0IAAAAIAAABIAAAEIgBAEQgCAmAAAuQAAB/ASC8IAAAAIg1C7QhigFhHgigAkjstQArBqBCAUQhCgUgrhqIAAgCIAFgFIA2hXQAhBIAaAQQAZAPAgACQABABAvgbQAugbAZgeQAbgeAHgRQAHgRAFgKIAfArQAQAVAOALIABACQAAAeg0BMIgTAZQgiApgiAPQAigPAigpIhWHCQgIgfgGgeQgVhngBiTIAEgDIAyhQQgNAGgOADQgmhdgXgRQgXAigSBTQgMgBgNgHIAiBDQADDtgiDjgAAorvg");
	this.shape_14.setTransform(71.3,99);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,2,147.6,194.2);


// stage content:
(lib.tn_coatCJS = function() {
	this.initialize();

	// Layer 1
	this._ = new lib.coat();
	this._.setTransform(72.9,97.5,1,1,0,0,0,72.8,97.5);

	this.addChild(this._);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(72,101.5,146.6,193.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;