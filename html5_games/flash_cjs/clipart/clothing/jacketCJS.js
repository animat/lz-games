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



(lib.coat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADADAD").s().p("AANF+Qgig1gPgdQgBgCAAgFQADgWAegeQAcgdAVgQIAHgFIgIgDQgZgLg4ggQg6ggg1giQgLgIAAgaQAChGAqiDQAriCA1h4QARgzALgEIAgAKIAmAOIgqANIAAAEQgCASAACKQABCKAZCjQAaClBJBlQgyA+gwBhQgLgVgmg7g");
	this.shape.setTransform(-35.8,-19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADADAD").s().p("AhbBrIgWgNQATgSA7g8QA5g5A/hMIAdAgQglAyg8BFQg7BHgeANIgTgLg");
	this.shape_1.setTransform(-54,36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADADAD").s().p("AAdBPQgdgiheiCIAigYQARAYAvBBQAyA/ApAgQgVAZgQAJIAAABQgCAAgbgfg");
	this.shape_2.setTransform(22.3,41.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0E0E0").s().p("AgdAAQACgYAbgCQAcACACAYQgCAZgcACQgbgCgCgZg");
	this.shape_3.setTransform(-22.1,45.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnAAQADghAkgDQAkADAEAhQgDAhglAEQgkgEgDghg");
	this.shape_4.setTransform(-22.1,45.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiABhIAFgEIBHhFQA/g+BIhYIADgEIAqAuIgBADIgyA/QgmAwgqAvQgrAvgYAGIgBABg");
	this.shape_5.setTransform(-54.2,36.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAeBhQgegfhpiTIgDgEIAzgjIACAEQAGAKA2BKQA4BIArAgIAFADIgEAEIgTAWQgOAPgMAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgFAAgYgYg");
	this.shape_6.setTransform(22.4,41.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhAAjIgDAAIgQg3IAGgBQAigIA3gDIBBgDIAHAAIgPBBIgCABQgPAFgxAAIhDgBgAAEgVQgsACgfAGIAGATIAGATIBKABQAjgBAKgCIAGgXIAFgZIhDAEg");
	this.shape_7.setTransform(-6.8,-63.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C9C9C9").s().p("AgDAfIg9gBIgMgvQAjgHA3gDIA/gDIgMA5QgPAEgtAAIgIAAg");
	this.shape_8.setTransform(-6.8,-63.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D6D6C").s().p("AjhBVQgWiuACiDQABhQABgSIAbgJIAWgHQAKgFB3gWQAjgFAmgDIAVgBIAhgBQARAAAQACQA8ADA0ATIADABIAAAAIAkALIAAADQgBAqgdBZQgeBagpBcQgpBbgkA1QgyBGg9BLIhTBmQhNhvgWiwg");
	this.shape_9.setTransform(-6.6,-29);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ADADAD").s().p("AlBIyIgBABQgHgJAAgRQAFg4ATgxQAIgXABgHQAjhPAug9QAug+AFgEIgCgBIBThyIBWh5QAjgzArhgQAqhhAfhdQAehdgBgpIgBgDIgjgMQAsgiAcgEQAFgBBTAsQAVAeACBuQgBA6gQBSIgpDSIgDARQgIAUhHAjQhHAjhIASIgKACIAIAGQADACAVAWQAVAWAEAgIAAACQAAAZgXAVQgkAhhTBJIilCPIhnBZIgFgEg");
	this.shape_10.setTransform(0.7,-11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4C").s().p("ACfJeQhmgbhXg2IADgCQgWgTg3giIhKgsIAAgBQACgrAtijQAtiiA8i+QA8i9A5hyQA6hzAFgEIgJgFQgEAEg6B0Qg6Byg8C+QglB3gkB3QgjB6gXBaQgXBZABAaIAAADIACABIA1AfQAvAcAkAZIgQAQQgHADhRgQQhQgQhJhLIAghZQAdhUAfhdQAfheAHglQgDACgGgJQgFgIAfggQABgHAjhyQAjhxAxh7QAuh6ArgiQBrhIApghQgPAigjBWQgiBVgeBeQgeBdgCA8QAAAhAPALQAyAfA6AcQA6AdAfANQgTAOgdAcQgeAdgDAcQAAAFACAFQAPAdAlA2IAiA1QAQAbACAIQgBAGgIAWQgUA0gEA3QgBAfAUALIADABIABgBQAXAOAGARQABANgGAWIgLAjIAFABIgaBuQgJAAhmgbg");
	this.shape_11.setTransform(-58.9,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("Ao/KWIgGiCQANghABghQgIgWgXgPIBqhcICjiMIB2hoQAagYAAgdIAAgDQgCgbgQgTQgPgUgMgKQAygLBWgcQBVgcAMgdIADgRQAsjrAAiIQAAhfgWgtQBMAqBOAtQBNAuAWAUQAPAUAwCBQAwCCA6CqQA5CpArCOQAsCPAFAtQgJAEhlAYQhlAZhUgIIgKhhQgKhbgQhnQgQhngUgqQgBABgLgEQgLgEgDgPQAEgFArgWQArgXAsAUIAFgIQghgSgiAKQgiAKgXANQAVggAxgKIgBgKQgdADgVASQgVARgLAPIgrhDQgShcgThNIgVhTIgKADIAQA+QAPA6ARBOQAQBOAIA+IAGAAQAPBlAICDQAJCDgUBSQgEAEhvA1QhuA0itAwQiKAliVAAQgnAAgmgCg");
	this.shape_12.setTransform(29.8,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AkbLRIgJAAIgBgmIgDhFIgPA7IgIAgIgKgCQgPgChqgjQhqgihZg7IgQARIgEAAQgMADhTgRQhTgShKhOIgEgFIACgFIAfhYIA7ivQAehdAKgrIgFgFQgDgFAAgFQAEgYAXgVQAHgZAkh0QAkh0Awh3QAwh3AsgiQA5gmAsggIA2gpQAHgZAMgUQAMgUAPABQAPAEAdAKIApAQQAbgJAvgJQAvgJAXgDQChgWBnAmQAPgMAcgRQAbgRAUAAQARAFBQArQBPArBRAxQBRAwAYAWQAQAVAyCGQAyCGA6CwQA7CuAsCTQArCSAGAvIABAIIgHACQgPAGhmAZQhnAZhVgJIgIgBIgBgIIgKhiQgJhagQhnQgPhngUgtQgNgCgMgPQgFgIAAgKQAAgHADgJIgVggQAKA8ALBnQALBnABBlQABBXgPA5IgBAEIgEACQgGAFhyA6QhzA6ixAzQiOAriaAAQgkAAgkgDg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0E0E0").s().p("AhvA5IgJhHIAwgEQAvgEAwgKQAygKARgRIAgBMQgDAEhDAXQgtAQg8AAQgcAAgegDg");
	this.shape_14.setTransform(75,50.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah2A+IgEgBIgLhQIAGAAQAugDBLgKQBJgKAYgVIAFgHIAmBYIgEACQgDAGhGAdQgnAQgzgBQgnAAgugIg");
	this.shape_15.setTransform(75,50.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0E0E0").s().p("AgnAvQhCgogEgHIAkhJQAwAwBAAUQBBASAGAAIgJA3QgZAGgXAAQgxAAgrgbg");
	this.shape_16.setTransform(-77.3,54);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDBPQg0gRgggdQgfgcgEgFIgDAAIAshVIAFAFQA0AvBDAUQBGASAIAAIAFAAIgMA/IgCABQgoARgjAAQgWAAgSgHg");
	this.shape_17.setTransform(-77.3,54.3);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.2,-72.4,184.5,144.8);


// stage content:
(lib.jacketCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.coat();
	this.instance.setTransform(100,100,1.055,1.055);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(102.7,123.6,194.7,152.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;