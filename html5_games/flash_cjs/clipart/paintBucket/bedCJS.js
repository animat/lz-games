(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 170,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.bed = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AKaLMIAFACIADABIgIgDgAI0KfIgFgIQAqATBGAXIAGAIgAJPHdQATAGgWACIADgIgAjHE+IiVhLIAAgBQBcAvCZBDIgEAIIhcgugAYnivQBRloAvi4IAHACQgXCGglE7IAACgQgdAvgmBHIgnBLIgGAKQgGALgDAAQgRAAA/kZgA6tnDIA5AjIAAgIQAyAjBdA5Qh1hBhTg2g");
	this.shape.setTransform(200.4,259.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDDDDD").s().p("AOHSsQhaghijhDIizhKQjGhTkOh0IjdhhQqGkYkvh8IAEgLQAiAGAxAAIABAAQAaAaA2AWQAMAFAwAOQAfAbAvAFIAvAGQAaAkALAAQAHAAAKgOIAEgFQA4ASBmAqIACABIAQAGQBqAtA/AeIDVBnQBjAvA2AYIBBAdQDfBgBVAHQAmAkA0ArQAUATApASQAoARA9AQIBUAZQBiAVCfA+QCfA/CFi3IAxhDQBKhkB/imIiGDsIggA3IgOAXIgEAGQgVAkgDACQgIAHAFAcIAAADIgBADIgDAKQh/B/hyAAQgSAAhWgfgAY+EYIgdgKIAkgDQAdg7BJiEQAwgbAAhAQAAhSiAgyQgpgQhagZQhrgfgsgOIhpglIgNgMQhggzhjgiQhjgihbgmQhbglgYgSQgYgSgvADQkFhoi9hJQlqiNhkgrQgmgRgPgRQglgKgqgTQgpgUhOCwIhHBTQhHCFhUBpIAAAAIgCACIhhCVIgBADIAAgBIgJANIABACQgOAUgKALIACgBQiJCviZCXQimCoAAAIIAAASQhhglgPAAIgKAAQhUghgjgTQgigSgCgHQgBgIhqgxQhqgygPgIQgUgLAfANQAjAPBpAuIABABIBqA6IgtgbIgVgOIhRhCQDUBvAEgkIAAAAIAXgEQAVgWAXgfQBRhxAZgaQBphpAmgqQBQhXA5hWIB/i+QBLhpBEhBQCaiTAZgcQBfhugDhNIACgBIgKgKIgLgKIgegbIAAgBIhNg+IAZARIAjAcIA1AqIADACIATAPIARATIADAEIAKAPQA0BOgBA1IAhgyQDJBeEQBWQCQAuCzBSQDFBbBaAfQAeALEJBSQDnBGCRA4QFgCIBSCAQAZAnAAAmQAAARgRAgQgXAsg1BFIgoAyIAAgDIABgBQAAgPgEAVIAAAAIgCAEIgWAcIAYggQggAZgFAKQgFALgEAOIgBAAIgHAJIgKAPIgFAIIAAAAIgPgIIgEgBQgVAfgDAAQgEAAARgjg");
	this.shape_1.setTransform(191.5,133.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AL/ZSIgFgCIgFgCIiIg5IgFgCIAAAAIhZgoQlgiejAhfIAEgIQiYhDhcgvIAAABQj6h8oXkEQjahqidhXIgBAAQhdg5gygjIgBAIIg4gkQi2h3gThEIAAgBIABABIAAAAIAAAAIgEgNIgEgLIgDgLIgBAFIgCgKIgBgLIgFgTIABgGIgLhPQgXipAAhjIgHg7IAAAAIgPiFIAAgBIgJhSIAAgiQAAAGAFACIgDgIQgMgoAAgzQAAhLAnhUIAAgBIABAAQAKgYAOgYQBJhuA0hSIAigwIAEgGQDnk/CIiFIACgBQApgoAhgXIAHgEQBxg/BCghQAqgVAWgJIAJgDQAGgHARgCQAkgOAVgGQBUAFBsA3IAKAFIAcAPIABABQAXANAWAPIBMA+IABABIAeAbIALAKIAKAKIgCABQgdgWgbgSQhGgvg7gXQgggNgdgGIgWgEQi1gcjCCBQjNCKitDsQgxBDg4BcQgqBEguBTQgqBLgYA4QgYA4ABAaQABAaAMBsQAHBAARAfIAIAMQATAeAcAdQAVAVAZAUIABAAIAAAAQAQANASAMIAVAOIAuAbIhqg6IgBgBQhVgrgpgOIgPgEQgegNAUALQgIgBgEACQgkAODgCcIABABIAnAaQELC1EbB+IBLAiQGvC9DcBRQBdAiKaEdQIGDeBbAAQFcAAHxzmQAAgXgDgRQgCgMgFgKQgMgcgeAAIgBADQgJAQgsBpIAAABIgaA9QhjDohaCuQihE2iPCVIgJAIIAEgKIAAgDIABgDQgGgcAJgHQADgCAVgkIADgGIAOgXIAhg3IA4hcQBEhxAdhNIBCixQAphpAnhEIAAAAIAEgIIALgPIAHgJIABAAQAEgOAFgLQAFgKAggZIgYAgIAWgcIACgEIAAAAIADgCIAogyQA1hFAXgsQAQghAAgSQAAgmgYgnIAFgDQAVAlARAiIAAAAQAWAtAOAoIABABIAAAAIAAAAIAHAWIAAABIAAABQATBAgDA0QgGBRAAAhQgBAOACAFIgJAgIAAALQAAAYgHBnQgJCRgPB6QgKBPgLA/QgHATgCAdIgHAhIgFARQgIAXgJAeQgEAJAAAGQg1AzgLASIAAigQAkk7AXiGIgGgCQgvC3hRFpQhMFSAnhCQgaAwgQAbQg0BfguBIQgtBHgoBGQgKARhtCKIABABIgQASIgBACIAAAAIgKALQhoB1hcASQgIABgKAAQhJAAjNhRgAKPYhIBxAqIgGgIQhGgXgqgTIAFAIgAKnVnQAWgCgTgGIgDAIgAUGS0IAGgCIgDgBIgDADgA6Bh5IABAAIAMgZgA77liIAAABIAAAAIAAgBIgBgBIAAAAIABABg");
	this.shape_2.setTransform(191.4,169.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AYxVjIARgXIgNAaIgEgDgAGXQLQqZkdhdgiQjdhRmui9IhLgiQkbh+kMi3IgngaIgBgBQjgiaAlgOQAEgCAHABQAOAIBrAyQBqAvABAIQACAHAiASQAjATBUAhIAKAAQAPAABhAlIAAgSQAAgICmimQCZiZCJivIgCABQAKgLAOgUIgBgCIAJgNIAAABIABgDIBhiVIACgCIAAAAQBUhpBHiFIBHhTQBOiwApAUQApATAmAKQAPARAmARQBkArFqCNQC9BJEFBoQAvgDAYASQAYASBbAlQBbAmBjAiQBjAiBgAzIANAMIBpAlQAsAOBrAfQBaAZApAQQCAAyAABSQAABCgwAbQhJCCgdA7IgkADIAdAKQghBFAshBIAEABIAPAIQgnBFgoBqIhCCxQgeBNhDBxIg5BcICGjsQh/CmhKBkIgxBDQiFC3ifg/Qifg+higVIhUgZQg9gQgogRQgpgSgUgTQg0grgmgkQhVgHjfhgIhBgdQg2gYhjgvIjVhnQg/gehqgtIgQgGIgCgBQhmgqg4gSIgEAFQgKAOgHAAQgMAAgZgkIgvgGQgvgFgfgbQgwgOgMgFQg2gWgagaIgBAAQgxAAgigGIgGACIgOADIAQAGIAAAAQEuB8KHEYIDfBhQEMB0DGBTICzBKQCjBDBaAhQBWAfASAAQByAAB/h/IAIgIQCPiVChk2QBaiuBjjqIAag9IAAgBQAthnAIgQIACgDQAdAAANAcQAEAKACAMQAEARAAAVQnyTolbAAQhbAAoHjegAcRNlIAHghIgBAaIgKAWIAEgPgA13NSIAAAAIAAAAgA19NOIAFgBIAAACgA8wHsIgBgBIgGgIIgBgGIgDgPIAAgFIAEALIADALIAEANIAAAAIAAAAgAaNBJQAEgVAAAPIgBABIAAADIgDACIAAAAIAAAAgA7FhOIBRBCQgTgMgQgNIAAAAIAAAAQgagUgVgVQgcgcgTgfIgHgMQgSgfgHhAQgMhsgBgaQgBgaAYg4QAYg4ArhLQAthTAqhEQA4hcAxhDQCtjsDNiKQDCiBC2AcIAWAEQAcAGAgANQA7AXBGAvQAbATAdAVQADBNhfBuQgZAciaCTQhEBBhLBpIh/C+Qg5BWhQBXQgmAqhpBpQgZAahRBzQgXAfgVAWIgXAEIAAAAQg1gFijhGgA4xhyQBKAAA2hPQAqg/AAguIAAgCIgEADQg5AlhNAAIgcAAQAGARAEAGIgTACQgFgHgDgLQhZgSgCAqQgCApAUAWQAUAXgOgKQAdArAzAAgAyYyOQiXB6hHBXQgzBAhOCEQhxC9AABQQAAAPAHASIAAABIAagDQApgDAigSQAkglA5hAQAOgYAQgVQAkg0AfgPQCFiXAZgXQBZhOCViSIA/g6QAlggAWgGQA4gQAWgVQAVgTAAggQAAgZgGgIQgRgWgwgGQgQgBgUAAQiAAAjYCtgA8phbIAOAEQAqAOBUArQhpgugjgPgA8Rh3IABABIAAAAgA8Sh4IABAAIAAABIgBgBgAoXz0IgSgcQg3gkAiAVIAFgEIAyA7g");
	this.shape_3.setTransform(193.5,146.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,382.8,339.9);


// stage content:
(lib.bedCJS = function() {
	this.initialize();

	// Layer 1
	this.colorMe = new lib.bed();
	this.colorMe.setTransform(101.4,81.8,0.47,0.323,0,0,0,191.3,161.1);
	this.colorMe.alpha = 0.762;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABgBAIgLABQgyAAhqgqQg1gUgbgOQgrgRAAgaQAAgXAZAAQAIAACiBGIB8AaQBGAPAAAVQAAAXgVAAQgSAAg8gOg");
	this.shape.setTransform(71.8,84.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACxBzQgCgGAAgIIABgJIgBAAQgSAAgFgMQgCgGgBgIQAAgYAaAAQAVAAAEAYQgBAGgBAFIAEAAQAZAAACAYQABAagcAAQgTAAgGgMgAi2A+QgHAFgKAAQgVAAgGgQIgDgRQABgPAThFQAWhMAJAAQAXAAAFAvQAhANAIBuQAAAhgYAAQgeAAgTgPg");
	this.shape_1.setTransform(41,96.3);

	this.addChild(this.shape_1,this.shape,this.colorMe);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(111.5,114.8,179.8,109.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;