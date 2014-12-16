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



(lib.baseball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9D641").s().p("Ag8CXIgBAAQAOgRAJgUIAIACQAFAAABgEQABgFgFgBIgGgBQAHgWABgXIAMgKQAMgOAIgPIACgBIALgGQAUAWAaAOIgDAQQAAAFAEABQAFAAACgEIACgOQAMAFAOADIgGAJIAAACQgIANgLALIgCADIgGAGIgCACIgMAKIgFAEIgGAEIgHAEIgGADIgKAFIgFACIgJADIgEACIgMADIgDABIgLABIgFABIgOABIgRgBgAh1CGQAqgdAlgiQgCAQgFAPIgPgDQgFAAgCAEQgBAFAFABIAOADQgJAUgPAQQgYgEgUgKgABNAsIADgNQAAgFgEgBQgFgBgCAFIgCAKQgWgMgQgTIAMgIQAEgBgCgEQgDgEgFADIgNAGIgCgCQAhhIgThNQA+AkARBEIABACIACAIIABAIIAAAFIABAPQAAAfgNAeQgPgCgNgGg");
	this.shape.setTransform(-53,62.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2E84B").s().p("AgQChQAOgRAHgTIAIABQAFABABgFQABgEgFgCIgGgBQAIgZABgbIgCgVIAOgEQAFgCgBgEQgCgEgFAAIgNAEQgKgtgfggIAHgIQADgEgDgDQgEgDgEADIgHAIQgYgUgggJIADgIQABgEgFgCQgEgBgCAEIgDAJQgMgCgMAAIgNABQAvhJBbgEQAbAAAYAIQgIAOgFAPIgUgCQgFAAgBAFQAAAFAFAAIARACQgFAUAAAWIAAAPIgQADQgFABABAEQABAFAFAAIAQgDQAGAkAVAbIgLAGQgEADADAEQADAEAEgCIALgHQAUAXAaANIgDAQQgBAFAFABQAFABACgFIACgNQAMAFANADQgtBUhkAFIgQgBgAhSCLIgBAAIgKgHIgEgDIgHgFQgXgUgPgbIgBgBIgGgMIgBgDIgEgLIgBgEIgDgLIgBgEIgCgMIAAgEIgBgPIABgRIAAgDIAEgRIAAAAQAEgTAJgRIATgCQALAAAKACIgFAPQgBAFAEACQAFABACgFIAFgQQAdAIAXASIgTATQgDAEAEADQAEADADgDIASgTQAgAeAHArIgLAEQgFABABAFQACAEAFgBIAJgDIACASQAAAagHAYIgQgDQgEgBgCAEQgBAFAFACIAOACQgJAUgPARQgdgGgZgOgAB6A2IADgNQAAgFgFgBQgFAAgBAEIgCAKQgWgMgQgTIAMgIQAEgDgCgEQgEgDgEACIgNAIQgUgZgGgiIAOgCQAFgBgBgFQgBgFgFABIgNACIgBgNQABgVAFgUIAMABQAFAAABgFQAAgEgFgBIgJgBQAFgNAIgNQBLAiAVBOIABADIACAHIABAIIAAAGIABANQAAAggNAfQgPgDgNgGg");
	this.shape_1.setTransform(-57.5,61.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah6B6QgxgxgChJQAChIAxgxQAygwBIgCQBKACAxAwQAxAxACBIQgBBJgyAxQgxAwhKACQhIgCgygwg");
	this.shape_2.setTransform(-57.5,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B79769").s().p("AgjB9Qg6gPgSgTIA9hkIA+hrIAGgKQAOAGAdAWQAdAWAQAnQAIAZgDAZQgEAegTAhQg2AzguAAQgLAAgMgCg");
	this.shape_3.setTransform(-21.7,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6B167").s().p("AicETQgsgSgMgKIAWgkQAIAIAlATQAkATA1gCQA+gGAyg7QAthUgZhEQgUgtgfgZQgdgZgQgHIBBhnIAvhJIAeguQAXAOAmA7QAlA7gJBqQgJBUhMB0QhOB1hjARQgRABgQAAQgpAAgfgMg");
	this.shape_4.setTransform(-15.9,30.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8B880").s().p("AgyA5IAWgrIABgCIACgBQAygNAQgjQAGgRgJgTQARAbgHAWQgPAigxARIgCAAIgBABIgWAuIgJgRg");
	this.shape_5.setTransform(68.4,-81.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8B880").s().p("AlvJlQgegLgXgVIAGACQA8AVA4gNQA3gNAYgTQAVgVBli+QBji+CJkIQCJkKB/j8QAJALAJANIj7IGQiDEJhfC/QhgC+gVAVQgXAUg3AOQgXAGgYAAQghAAgkgMg");
	this.shape_6.setTransform(0.2,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7996E").s().p("AhXCaIBAh9IA5h1IAohOIAGgKQAFAIADAKIggBFIhACHIg/CDIgQgXg");
	this.shape_7.setTransform(52.9,-53.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#846A44").s().p("AgLAGIANgbIAAgBQAIALACAFIgNAdQgEgKgGgHg");
	this.shape_8.setTransform(62.6,-72.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#846A44").s().p("AgSAMIAWguIABAAIAOAUIgWAxIgPgXg");
	this.shape_9.setTransform(43.3,-33.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EACD92").s().p("AgZBBQgTgTgtAHIAbggIACgCIgBgCQgEgGgDgqQgDgtApgUQAvgOAsAoQAkAkgIAiQgPAkgzAQIgCABIgBACIgUAtQgFgPgUgUg");
	this.shape_10.setTransform(64.3,-84.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EACD92").s().p("AlQKOQhdgjgXiAQAFghBkisQAMALAtASQAuASBBgHQBogRBOh4QBZiKAAheQABhgglg2Qglg3gUgOQBvisCkjlQARgCA2ATQA3ATA0BDQh5D7iCEMQiDEJheC+QhhC+gUAWQgYATg3AOQgXAGgZAAQghAAgjgLg");
	this.shape_11.setTransform(-2.9,27.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C9AD7D").s().p("AgoCOQgkgihZABIBChUIBuiOIA9hPQALgBAiAIQAhAJAQAqIghBFIhBCHIg/CDQgIgUglgjg");
	this.shape_12.setTransform(45.1,-55.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C5C29").s().p("AhUCIQgjgQgKgKIAKgPQAVAUA9AOQA7APBFhDQAmhCgTg2QgQgpgegXQgdgYgQgGIAIgOQAPAGAfAYQAeAYATAtQAMAhgFAjQgFAjgVAoQgvA3g7AGIgIAAQgqAAgfgQg");
	this.shape_13.setTransform(-21.3,40.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9E8357").s().p("Ag1gOIASgYQAsgCAWAVQAVATACAIIgPAfQgdg2g/ABg");
	this.shape_14.setTransform(58.4,-74.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9E8357").s().p("AgVgRQg3gQgXACIAbglQBVgBAoAlQAoAiAHAQIgYA0QgthHg0gQg");
	this.shape_15.setTransform(35.2,-36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AnxOrQgzgWghg2Qgig2gFguQABghBkirQBlisChj2QCij0C2kCQC5kCCpjNQgHgTADgyQACgnApgPQAsgPA2ApQAVAQAOAbQANAbgJAVQgCAFgTASQgSARgnALIhiDOIjIGgIjpHhIjCGUQhRCkgLAQQgXAbhAAMQgYAFgZAAQgpAAgqgNg");
	this.shape_16.setTransform(12.9,0);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.9,-95.2,149.9,190.5);


// stage content:
(lib.baseballCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.baseball();
	this.instance.setTransform(96.8,100.3);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;