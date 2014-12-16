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



(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C19987").s().p("ABIAYQgFgIgJgHIgKgHIgCAAIgGgEQgHgGgKAEQgLADgHABQgHgBgdgPIgugYIAEgCIAoAVQAeAQAJACIABAAIAWgEQALgBADABIALAJIAUARQAEADAAAIIgCANQgBgKgDgJg");
	this.shape.setTransform(5.8,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87695F").s().p("AgCAKQgBgOADgWIADAAIgDARQgCAOACAWQgBgCgBgPg");
	this.shape_1.setTransform(-5.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87695F").s().p("AgKANQgDgJAGgLQAHgMAFgBQAGgBABABQgCgBgKAJQgJAJACAZQgBgBgCgIg");
	this.shape_2.setTransform(-2.8,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBB39E").s().p("ABDAvIgGgPQgDgJgCgDQgEgEgLgBQgMgCgMACQgLAFgDAOQgDAMgFACQgHABgEgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgCQACgFABgIIACgNIAEgQIAAgCIgBAAIgqgPIgggKQABgMAGgGQAEgFADAAIAoAVQAcAQAMACIAAAAIAWgEQALgBADABIAMALIATAPQAEADAAAIIgCANQgBgKgDgJQgFgIgJgFIgKgHQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAKAFQAIAGAEAIQAEALABAMQABANgCAEIgCABQgFgBgDgHg");
	this.shape_3.setTransform(5.3,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABMA7QgHgBgDgIIgFgSQgDgHgEgCQgDgDgKgCQgKgBgMACQgIADgEANQgEAOgKAEQgKAAgBgGQgBgDAAgDIAAgFQACgEABgIIACgMQABgJAEgIIgwgPIgdgIIgCgBIAAgBQACgSAJgFIAKgGIABAAIABABQAWAPAWALQAVAMAGABIAXgEQAQgBAGACIAMALQAMALAHADQAHAFgBAKQAAAKgEAHIgBAAIgBAMQAAAHgBADQgDADgBAAIgBgBg");
	this.shape_4.setTransform(5.2,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#87695F").s().p("AANAvIAFgQIAGgWQAEgOgCgQQgBgQgHgEQgIgBgGAEIgFAFIgCACIgBgDQgFgNgKAAQgGABgFAFQAFgLAKgBQAKgBAFAOIAAACIABgCIAHgFQAGgEAIACQAHADACAQQABAQgEAPIgGAVIgFARQgEALgDADIADgIg");
	this.shape_5.setTransform(-4.6,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A58577").s().p("AAJA3QgGAAgFgOIAAgBIgBAAQgCgCgPAJQgFACAAgBQgFgDgCgPQgCgOACgRQABgTADgQQADgQANgDQAKAAADANIABADIACgCIAHgFQAHgEAHABQAHAEACAQQABAQgEAOIgFAWIgGAQQgGARgEAAIgBgBg");
	this.shape_6.setTransform(-4.9,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A58577").s().p("AAJA3QgGAAgFgOIAAgBIgBAAQgCgCgPAJQgFACAAgBQgFgDgCgPQgCgOACgRQABgTADgQQADgQANgDQAKAAADANIABADIACgCIAHgFQAHgEAHABQAHAEACAQQABAQgEAOIgFAWIgGAQQgGARgEAAIgBgBg");
	this.shape_7.setTransform(-4.9,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEAsQgDAAgKAGQgGADgDgBQgKgHgBgNQgBgOACgTQACgUADgQQAEgTAQgDQALAAAFAOQAHgJAPACQAKAFABAVQABAVgEAPIgGAVIgGARQgDAJgDACIgHABIAAAAQgIAAgGgQg");
	this.shape_8.setTransform(-5,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66402A").s().p("AgLgFIAAgEIAHgJQAFAOALALQgEAHgEAFQgIgKgHgOg");
	this.shape_9.setTransform(-12.3,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66402A").s().p("AgKAPIABgKQAAgTAJgQQABAPAKASQgGAPgGANIgJgQg");
	this.shape_10.setTransform(-12.5,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66402A").s().p("AgJAAIAHgHQAEAGAIACQgDAEgFADIgLgIg");
	this.shape_11.setTransform(-8.9,2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66402A").s().p("AgOAGQAIgMAEgQQAGAKALAIQgFANgIAOQgIgIgIgJg");
	this.shape_12.setTransform(-9.4,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66402A").s().p("AgJABQAGgNADgOQACAOAIAMIgGAaQgHgLgGgOg");
	this.shape_13.setTransform(-10.3,-5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E6042").s().p("AgDA4QgQgMgMgYQgCgHABgeQABgZAKgRQAGgGAIgCQADALAIAaQAMAbARAMIgBASQABAagSAOQgEAAgOgLg");
	this.shape_14.setTransform(-10.1,-3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQBIQgCABgOgJQgOgJgVgiIgBAAQgBgFAAgbQAAgdAMgVQAIgJALgCIACAAIABACQgBABAFAWQAGAWAdAfIABABIAAABQACAEgCAYQgCAYgSANIgBAAg");
	this.shape_15.setTransform(-10.2,-3.5);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,-10.9,28.1,21.8);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C19987").s().p("ABIAYQgFgIgJgHIgKgHIgCAAIgGgEQgHgGgKAEQgLADgHABQgHgBgdgPIgugYIAEgCIAoAVQAeAQAJACIABAAIAWgEQALgBADABIALAJIAUARQAEADAAAIIgCANQgBgKgDgJg");
	this.shape.setTransform(5.8,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87695F").s().p("AgCAKQgBgOADgWIADAAIgDARQgCAOACAWQgBgCgBgPg");
	this.shape_1.setTransform(-5.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87695F").s().p("AgKANQgDgJAGgLQAHgMAFgBQAGgBABABQgCgBgKAJQgJAJACAZQgBgBgCgIg");
	this.shape_2.setTransform(-2.8,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBB39E").s().p("ABDAvIgGgPQgDgJgCgDQgEgEgLgBQgMgCgMACQgLAFgDAOQgDAMgFACQgHABgEgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgCQACgFABgIIACgNIAEgQIAAgCIgBAAIgqgPIgggKQABgMAGgGQAEgFADAAIAoAVQAcAQAMACIAAAAIAWgEQALgBADABIAMALIATAPQAEADAAAIIgCANQgBgKgDgJQgFgIgJgFIgKgHQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAKAFQAIAGAEAIQAEALABAMQABANgCAEIgCABQgFgBgDgHg");
	this.shape_3.setTransform(5.3,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABMA7QgHgBgDgIIgFgSQgDgHgEgCQgDgDgKgCQgKgBgMACQgIADgEANQgEAOgKAEQgKAAgBgGQgBgDAAgDIAAgFQACgEABgIIACgMQABgJAEgIIgwgPIgdgIIgCgBIAAgBQACgSAJgFIAKgGIABAAIABABQAWAPAWALQAVAMAGABIAXgEQAQgBAGACIAMALQAMALAHADQAHAFgBAKQAAAKgEAHIgBAAIgBAMQAAAHgBADQgDADgBAAIgBgBg");
	this.shape_4.setTransform(5.2,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#87695F").s().p("AANAvIAFgQIAGgWQAEgOgCgQQgBgQgHgEQgIgBgGAEIgFAFIgCACIgBgDQgFgNgKAAQgGABgFAFQAFgLAKgBQAKgBAFAOIAAACIABgCIAHgFQAGgEAIACQAHADACAQQABAQgEAPIgGAVIgFARQgEALgDADIADgIg");
	this.shape_5.setTransform(-4.6,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A58577").s().p("AAJA3QgGAAgFgOIAAgBIgBAAQgCgCgPAJQgFACAAgBQgFgDgCgPQgCgOACgRQABgTADgQQADgQANgDQAKAAADANIABADIACgCIAHgFQAHgEAHABQAHAEACAQQABAQgEAOIgFAWIgGAQQgGARgEAAIgBgBg");
	this.shape_6.setTransform(-4.9,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A58577").s().p("AAJA3QgGAAgFgOIAAgBIgBAAQgCgCgPAJQgFACAAgBQgFgDgCgPQgCgOACgRQABgTADgQQADgQANgDQAKAAADANIABADIACgCIAHgFQAHgEAHABQAHAEACAQQABAQgEAOIgFAWIgGAQQgGARgEAAIgBgBg");
	this.shape_7.setTransform(-4.9,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEAsQgDAAgKAGQgGADgDgBQgKgHgBgNQgBgOACgTQACgUADgQQAEgTAQgDQALAAAFAOQAHgJAPACQAKAFABAVQABAVgEAPIgGAVIgGARQgDAJgDACIgHABIAAAAQgIAAgGgQg");
	this.shape_8.setTransform(-5,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66402A").s().p("AgLgFIAAgEIAHgJQAFAOALALQgEAHgEAFQgIgKgHgOg");
	this.shape_9.setTransform(-12.3,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66402A").s().p("AgKAPIABgKQAAgTAJgQQABAPAKASQgGAPgGANIgJgQg");
	this.shape_10.setTransform(-12.5,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66402A").s().p("AgJAAIAHgHQAEAGAIACQgDAEgFADIgLgIg");
	this.shape_11.setTransform(-8.9,2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66402A").s().p("AgOAGQAIgMAEgQQAGAKALAIQgFANgIAOQgIgIgIgJg");
	this.shape_12.setTransform(-9.4,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66402A").s().p("AgJABQAGgNADgOQACAOAIAMIgGAaQgHgLgGgOg");
	this.shape_13.setTransform(-10.3,-5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E6042").s().p("AgDA4QgQgMgMgYQgCgHABgeQABgZAKgRQAGgGAIgCQADALAIAaQAMAbARAMIgBASQABAagSAOQgEAAgOgLg");
	this.shape_14.setTransform(-10.1,-3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQBIQgCABgOgJQgOgJgVgiIgBAAQgBgFAAgbQAAgdAMgVQAIgJALgCIACAAIABACQgBABAFAWQAGAWAdAfIABABIAAABQACAEgCAYQgCAYgSANIgBAAg");
	this.shape_15.setTransform(-10.2,-3.5);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,-10.9,28.1,21.8);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBF6FF").s().p("ACzimIAhAHIl5FFIgvAAg");
	this.shape.setTransform(21.3,16.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,33.4);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBF6FF").s().p("Aj3CrIHNlZIAiACInJFbIgmgEg");
	this.shape.setTransform(24.9,17.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.7,35.1);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67ADF9").s().p("AoCCBQjSg0gIhNQAIhMDRg0QDSg1ExgCQEyACDSA1QDRA0AIBMQgIBMjRA1QjSA1kyACQkxgCjRg1g");
	this.shape.setTransform(73.4,18.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146.8,36.9);


(lib.look = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C19987").s().p("AAHAHQgCgHgFgCQgDgDgHACIgDABQAFgEAFgBQAGgCAFADQAFAEABAFIgKAGIADgCg");
	this.shape.setTransform(-95,-77.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C19987").s().p("AAIAQIgBgDQgEgRgJgJIgHgEIAAAAQAHgBAGAFQAKAJAEARIAAAFIgGgCg");
	this.shape_1.setTransform(-85.5,-76.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBB39E").s().p("AgTAFQAMgQANgEQAIgBAEADQAFADACAHIgUAJQgOAHgPADQACgGADgFg");
	this.shape_2.setTransform(-96.1,-76.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAAQABgEADAAQAFAAAAAEQAAAFgFAAQgDAAgBgFg");
	this.shape_3.setTransform(-95.6,-74.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJASQgIgHAIgPQAJgQAKADQAIAHgJAPQgIANgGAAIgEAAg");
	this.shape_4.setTransform(-95.7,-73.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDEDED").s().p("AgUAYQAPgEAJgRQAIgLABgLIAIgFQABANgJAOQgMASgNADIgEABIgEgBg");
	this.shape_5.setTransform(-95.7,-73.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAXQgLgIAFgSQAOgCAOgHIAXgMQABANgJAOQgMASgNADIgFABQgEAAgDgCg");
	this.shape_6.setTransform(-96.2,-73.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAkQgKgHABgOQAAgOAJgOQAMgTAPgFQAJgCAHAEQAKAHAAAOQgBAOgIAOQgNATgPAFIgGAAQgFAAgFgCg");
	this.shape_7.setTransform(-96.2,-74.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DBB39E").s().p("AgEADIgOgKIgBgBQAFgHAHgCQAGgBAFAFQAMAJADARIABAFQgNgEgLgLg");
	this.shape_8.setTransform(-86,-76.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_9.setTransform(-87.1,-74.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJAFQgIgPAIgHQAJgDAJAQQAJAPgIAHIgEAAQgGAAgJgNg");
	this.shape_10.setTransform(-86.9,-73.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDEDED").s().p("AgPAJQAFADAFgBQAFgBAEgHQAFgGABgLIAGABQAAANgGAIQgFAGgFABIgCAAQgGAAgHgGg");
	this.shape_11.setTransform(-85.7,-73.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVgBQgCgPAEgLIARAOQALALANACQAAAMgGAJQgEAGgHABIAAAAQgSAAgIgdg");
	this.shape_12.setTransform(-86.2,-74.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAEQgEgjAYgHQAGgCAHAGQAOAKAEAVIABAIQAAAPgHAKQgGAIgIACIAAAAQgXAAgIgkg");
	this.shape_13.setTransform(-86.3,-75.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C19987").s().p("AABATQAMgZgNgLQgEgEgHACIAGgDQAFgBAFADQAOAMgLAYQgEADgKAEIAHgEg");
	this.shape_14.setTransform(-94.8,-75.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C19987").s().p("AAJAJQgEgSgKgIQgFgEgGAAQADgCADAAQAGgBAEAEQAMAJAEARQABAJgBAIIgHACQABgIgBgIg");
	this.shape_15.setTransform(-85.7,-76.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DBB39E").s().p("AgaAWQABgNAIgKQALgSANgEQAIgCAFADQANAMgLAYQgEADgPAFQgGADgIAAQgHAAgIgDg");
	this.shape_16.setTransform(-96.2,-75.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DBB39E").s().p("AgFAVQgNgFgDgEQgDgdATgGQAFgCAGAFQAMAJADARQACAJgBAIQgHACgGAAQgJAAgFgEg");
	this.shape_17.setTransform(-86.3,-76.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIAIQgEgDAAgGQAOgCALgFIgCAFQgJAMgGAAIgEgBg");
	this.shape_18.setTransform(-95.8,-72.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAAQgEgGAAgGQAKAHAQADQADAKgGAEIgEABQgGAAgJgNg");
	this.shape_19.setTransform(-86.9,-72.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAIQgHgEAAgIQAaAEARgJQgLAPgNAEIgEAAQgEAAgEgCg");
	this.shape_20.setTransform(-96.6,-72.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUgLQAOALAagDQgBAEgDAEQgEAGgHABIgBAAQgPAAgJgXg");
	this.shape_21.setTransform(-86.2,-72.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAkQgKgHAAgOIAAgCQABgNAIgNQANgTAPgFQAJgCAHAEQARAOgNAdIgBAAIgDAGQgMATgPAFIgGAAQgFAAgFgCg");
	this.shape_22.setTransform(-96.2,-74.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C19987").s().p("AgUAiIABAAQAPgFAJgRQARgdgQgOIgEgBQAHgBAEACQAQAOgRAdQgLARgNAFIgEAAIgEAAg");
	this.shape_23.setTransform(-95.6,-74.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C19987").s().p("AgGAjQAFgCADgFQAIgNgDgRQgEgTgKgJQgDgDgDgBIABAAQAGgBAGAFQAKAJAEATQADARgIANQgFAGgEABIgCAAIgEAAg");
	this.shape_24.setTransform(-85.6,-75.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DBB39E").s().p("AgTAgQgPgOAQgcQAMgSANgEQAHgCAGADQAPAOgQAdQgMARgNAEIgFABQgEAAgEgCg");
	this.shape_25.setTransform(-96.2,-74.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DBB39E").s().p("AgVADQgDgeATgHQAFgBAGAFQAMAJADATQADARgIANQgEAGgHABQgSAAgIggg");
	this.shape_26.setTransform(-86.3,-75.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},10).to({state:[{t:this.shape_13},{t:this.shape_7},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},4).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},49).to({state:[{t:this.shape_13},{t:this.shape_7},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(19));

	// tv
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AALAOQgWg3gTgoIgVgrQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIAVArQATAnAWA4QAYA6ANA4IgEACQgOg4gXg6g");
	this.shape_27.setTransform(-18.3,-51.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AguDKQgDACAPhcQAOhdA/jbQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAgBABQg1C5gSBmQgSBoAAAJIgEACIAAgBg");
	this.shape_28.setTransform(-6.6,-59.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHAAQACgHAFABQAIABAAAGQgCAGgGABQgHgCAAgGg");
	this.shape_29.setTransform(-23.5,-64.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_30.setTransform(-1.8,-80.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0C0909").s().p("AgnAGIAggKIAYgJQAIABAPAGIggAKIgZAKIgWgIg");
	this.shape_31.setTransform(-12,-40);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSATIgKgEQgKgDgIgFIgDgCIBCgXIAAAAIANADQAJADAHAEIAFADIhFAYg");
	this.shape_32.setTransform(-11.9,-40);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#161211").s().p("AAmEYIhPgWQgqgMgVgIIAAgJQAxAJAtgPQArgQATgtQAihyAAhuQAAhxADh1IAQAHIgDBYIgGCtIgFC6QgCBZAAAqIgzgNg");
	this.shape_33.setTransform(-34.9,-1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3F3734").s().p("AheEUQgCgggBhcQAAhcAHhyQAHhzAVhrQAOABAxAIQAzAIAuAOIAAAGQgugOgxgIQgvgHgNgBQgVBrgIBzQgHBzABBbQAABTACAjIgEgBg");
	this.shape_34.setTransform(-36,-5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B2320").s().p("AAnEnIhPgVQgpgMgWgIIgBgrIgBhbQgBhbAHhyQAHh0AVhrIAqAGQAeAEAnAIQAmAJAdALIgDBYIgGCuIgFC5IgDCEIgzgOg");
	this.shape_35.setTransform(-35.2,-2.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B2423").s().p("AhSAuQgzgIgYgCQAUgJAzgUQAzgSA/gWQBCgVBAgPQhdAYhTAgQhUAdgeANIBEAKQAvAIAnANIgOAKQgogQgygIg");
	this.shape_36.setTransform(-25.8,-37.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0F0C0B").s().p("Ai0BNIgBgBIgJgDQAygWA5gVQA5gVAygiQAKgIgCgPQgBgQgMgLIANgBIAgAJQAdAJAlANQAkANAZAPQhZADhQATQhOAUg3AXQg2AWgPAHg");
	this.shape_37.setTransform(-5.8,-37.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1C1615").s().p("AhgBNIgCgBQgogQg3gKQg3gJgZgDIBdgkQBDgYBSgYQBQgZBCgFIAhAJQAdAJAkANQAkANAZAPQhZADhPATQhQAUg1AXQg3AWgOAHg");
	this.shape_38.setTransform(-14.2,-37.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B2320").s().p("AAACCQgRgLgWgEIAEhAIAGhrQADg6AAggQAHAIARAOQAPAQAbAFIgGAzIgHBZQgEAyAAAnIAAAWQgIgIgPgKg");
	this.shape_39.setTransform(-15,-2.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1C1615").s().p("AhpAmQgWgTgGgIIA3gTQArgQAxgPQAzgPAjgBIAMAXQAJARANAPIgyAJQgkAHgqAMQgoAMgfAQIgDAAQgSAAgTgSg");
	this.shape_40.setTransform(-4.1,-18.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0F0C0B").s().p("AhrCQQBkgZAvhWQAxhTAChlIARgDIgJA8QgIAugGAzQgHA1gCAiQgJABggAJQggAJgmAOQgoAOgfASIgBgLg");
	this.shape_41.setTransform(-1.4,-3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B2423").s().p("AhfA5IAIhgIAGg3QAogTA0gOQA3gOAigGIgBAEQgjAHg0ANQgyANgmAUIgFA0QgFAqgDA0QgEA0AAAmIgFACQgBglAEg2g");
	this.shape_42.setTransform(-2.2,-3.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1C1615").s().p("AhoBAQADg4AFguIAGg7QAfgQAqgMQApgMAkgHIAwgKIgJA8IgOBhQgHA1gCAiQgJABggAJQggAJgmAOQgoAOgfASQgCgiAEg5g");
	this.shape_43.setTransform(-1.4,-3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhMC9IgVgQQgTgOgcgFIgCAAIAAgCIADg8IAHh1QAEg/AAgeIAAgCIABAAIArgTQAlgRA0gQQA2gQA1gCIABAAIABACIALAVQALAUAOASIABABIAAABIgIAzIgPBnQgIA6gBAkIgBACIgBAAIgjAJQghAJgrAPQgqAPghATIgCABg");
	this.shape_44.setTransform(-4.8,-5.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F3734").s().p("AjBDRIAFi2IAFiqIAEhgQAJgFA3gXQA3gWBRgWQBTgWBdgDIgBAFQhbAFhRAVQhOAWg2AWQg1AWgJAFIgDBcIgGCkIgFCzQgCBWAAAuIgKAEQAAgpADhXg");
	this.shape_45.setTransform(-5.9,-5.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1C1615").s().p("AjBDSIAFi3IAFiqIAEhgQAJgFA3gXQA3gWBRgWQBTgWBdgDIgJBQIgPCXIgRCfQgIBLgFAlIg3AdIhpA2IhvA4QgyAZgSAHQAAgqADhVg");
	this.shape_46.setTransform(-5.9,-5.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhhF2IgrgMIhXgXQgvgNgWgIIgBgBIgBgBQgBgGgDhbQgDhbAHiAQAGiBAbh6IAAgBIABAAIBQgiQBKgeBcgdQBbgdA+ABIABAAIAjALQAgAJAmAOQAmAOAYAQIABABIAAABIgFA6IgLCHQgHBRgKBSQgKBVgLBBIAAABIgCABQggAVhMAmQhLAnhFAiQhHAigVAHg");
	this.shape_47.setTransform(-16.1,-8.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#422820").s().p("AghA2QBPg0A0gaQA5gcASgUQAVgdAIgjQAJgjAAgWIALgEQgIAkgGApIgIAzQhiAvhaA3QhYA5g/AuQg/AugTAQQBshcBQg0g");
	this.shape_48.setTransform(-3.7,30.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#724F44").s().p("AjSBkQgFgsgDgJIBag4QBLgwBgg3QBhg2BPgdIAAAEQhQAghgA2QhdA1hKAuIhXA2QADAJAFAoQAFAogHA0IgIAGIgBABQAJg1gFgrg");
	this.shape_49.setTransform(-4.5,31.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A3786C").s().p("AhUBJQgHhCgPgjQgQgkgJgLQAmAPA4ATIBnAkIBCATIAAAFIhHgWIhhghQgzgSgkgOQAKALAPAjQAPAiAHBAIgIgDg");
	this.shape_50.setTransform(-40.5,34.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#775045").s().p("AgjAwQAjgMANgkQAPghgGgqIAEABQADAKAFArQAFAqgKA3IhAgcg");
	this.shape_51.setTransform(-29.5,43.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8C6254").s().p("ABCBeIhmgsIg3gWQgHhAgPglQgQglgJgLIBkAlIBqAkIA9AUQADAKAFApQAFAsgKA2IhCgbg");
	this.shape_52.setTransform(-39.8,38.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4C2F26").s().p("Aj2CbQAegMBRgzQBRgyBfg1QBgg4BKgYQAKgDAGgJIAAgBQAAgEgGgEQgKgHgtgJQgtgJgzgIIhOgNIACgBQAIABA4AIQA4AJA5ALQA4ALAOAIQAGAEAAAFIgBAAQgFAJgKADQhPAZhoA6QhnA3hSA0IheA8IgPgFg");
	this.shape_53.setTransform(-3.5,19.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#664336").s().p("AlVAvIC7hHICkhBQBGgbAIgBQAKABA4AIQA3AIA5ALQA5AMANAHQAGAFAAAEIAAAAQgGAKgKACQhFAXhbAuQhbAxhOAxQivgIijg/g");
	this.shape_54.setTransform(-13.1,15.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8E6659").s().p("ABcA8IhigjQg4gTgqgOQgqgQgGgFQAAgEAKgGQAIgGAKgDIBEgbIAFABIg8AYQgJAEgJAGQgIAFgBAFIAAABQAIAFA9AWQA8AVBBAWIBhAgIgFAEQgLgDgtgOg");
	this.shape_55.setTransform(-41.6,27.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7A5343").s().p("AiPCOIhkgiIhigjQgqgQgGgFQAAgEAKgGQAIgGAKgDICTg5IChg/ICCgyQA1gUAGgCQAKABA4AIQA4AJA4ALQA5ALANAIQAGAEAAAFIAAAAQgFAJgLADQhPAZhoA6QhoA3hSA0IhcA8QgLgDgtgPg");
	this.shape_56.setTransform(-17.9,19.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5E3D31").s().p("AjXBlQgGgqgDgKIBdg5QBPgyBig3QBkg3BOgdQgIAkgGApIgHAzQhjAwhaA3QhYA5g/AuQhAAugSAPQAJg2gFgrg");
	this.shape_57.setTransform(-3.9,30.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AlBCPIAAgBQgHhagUghQgVgfgCABIgBgBQgXgJABgCQAAgKAMgHQANgHAGgCQAtgWBQgfQBPggBVggICPg2QA8gVAGgBQAKAAA4AJQA4AIA6ALQA6AMAOAIQAJAHgCAHQgCAHgHAEIgKAEIgGACQgIAQgFAfQgFAfgDAaIgCAcIAAABIgBAAQhsAyhiA/QhhA/g9AvIhBAxIgBABg");
	this.shape_58.setTransform(-17.9,27.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#26201F").s().p("AgKACQADADAGAAQAJAAAAgJIAAgFQADAEAAAEQgBAJgKACQgHgBgDgHg");
	this.shape_59.setTransform(-46.3,43.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3A3331").s().p("AgLAAQABgKAKAAQAKAAACAKQgCAKgKACQgKgCgBgKg");
	this.shape_60.setTransform(-46.3,43.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgPAAQACgOANgBQAOABACAOQgCAOgOACQgNgCgCgOg");
	this.shape_61.setTransform(-46.3,43.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#262120").s().p("AgIAJIADABQAJgBABgJQAAgHgFgDQAIACABAIQgBAKgJABQgEAAgDgCg");
	this.shape_62.setTransform(-21.9,48.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3A3331").s().p("AgLAAQACgJAJgCQALACABAJQgBALgLAAQgJAAgCgLg");
	this.shape_63.setTransform(-22.1,48.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgPAAQABgNAOgCQAPACABANQgBAPgPABQgOgBgBgPg");
	this.shape_64.setTransform(-22.1,48.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#231E1D").s().p("AgHAKIACAAQAJAAAAgKQAAgIgFgCQAIABABAJQgBAKgJABIgFgBg");
	this.shape_65.setTransform(14,25.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3A3331").s().p("AgLAAQABgKAKAAQAKAAABAKQgBAKgKABQgKgBgBgKg");
	this.shape_66.setTransform(13.7,25.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgPAAQACgOANgBQAPABABAOQgBAPgPABQgNgBgCgPg");
	this.shape_67.setTransform(13.7,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(88));

	// table
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9B0202").s().p("AgUAIQAYAFAIgWQAGgBAEgCIgEANIgBAJQgEACgMABIgBAAQgLAAgJgFg");
	this.shape_68.setTransform(-80.4,9.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0000").s().p("AgXAGIAAgHIAAgNQAGAGARACQASAAAGgEIgCAMIgCAKQgFACgOABIgBAAQgLAAgMgJg");
	this.shape_69.setTransform(-80.7,9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#840303").s().p("AgXgBQADgDAUAAQAVADADACQgEAEgUAAQgSgDgFgDg");
	this.shape_70.setTransform(-80.6,7.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgbAMIgBgBIAAgaIgBgBIABgCQgCgEAegBQAgAGgDAFIABABIgBABIgFAdIgCABQgDABgRACIgCABQgNAAgOgMg");
	this.shape_71.setTransform(-80.6,8.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D4F0FF").s().p("AAAACQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAg");
	this.shape_72.setTransform(-73.9,12.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1775AA").s().p("AgJANIgCgCQAJACAGgJQADgEAAgEQABgGgEgEQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAGAEgBAHQAAADgDAFQgGAIgFAAQgEAAgDgCg");
	this.shape_73.setTransform(-73.6,13.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2494E0").s().p("AgHANQgKgIAIgLQAEgGAFgCQAFgBAEADQAFAEAAAIQAAADgDAEQgHAIgFAAQgDAAgDgCg");
	this.shape_74.setTransform(-73.8,13.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgKARQgNgLAKgPQAFgHAIgCQAGgCAFAEQANALgKAPQgIAKgHAAQgFAAgEgDg");
	this.shape_75.setTransform(-73.8,13.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#192023").s().p("AgTAMQgngGgigJIAHgDQAjAIAiAFIAoAFQAkgMAYgQIAJAAIgdAQQgSAJgWAIIgrgFg");
	this.shape_76.setTransform(-80.1,10.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#273035").s().p("AgUAQQgmgFgigLIAdgIQATgHALgGIAnAFQAkADAzACIgdAPQgSAKgWAHIgsgFg");
	this.shape_77.setTransform(-80.1,9.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3C474C").s().p("Ag1AWQgDgKAAgdIABgEQAbAKAhAFQAhAFATABIgCAFQgTgCgggDQgfgGgagKIAAAEQgBAWACANIgBgBg");
	this.shape_78.setTransform(-84.2,12.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#192023").s().p("AALATQgagHgggMQAfAHAZgFQAbgDAGgcIAGABIgBA6IgkgLg");
	this.shape_79.setTransform(-82.8,15.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#273035").s().p("AANAcQghgKgkgPQgDgIAAgfIAAgEQAgALAkAGQAnAGAMAAIgBA6IgugNg");
	this.shape_80.setTransform(-83.9,14.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#192023").s().p("AgiAqQAVgLAOgGIAVgHIAEggIAFgdIAEgDIgFAfIgFAkIgXAIQgPAHgVALg");
	this.shape_81.setTransform(-73.9,13.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3C474C").s().p("AgigKQAXgIASgLIAcgRIgBAGQgYARgnAQIgBA0IgEACg");
	this.shape_82.setTransform(-73.9,13.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#273035").s().p("AgigKQAXgIASgLIAcgRIgFAfIgFAkQgGABgRAHQgPAHgVALg");
	this.shape_83.setTransform(-73.9,13.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAXA7IgmgNIhSgbIgBgBIgBAAIgCgRQgCgNACgTIAAgCIACgBIAagJQAYgHAPgHIABAAIAoADQAnAEA2ADIADAAIgBACIgEAYQgEAVgEAZIAAACIgBAAIgUAJQgTAIgZAPg");
	this.shape_84.setTransform(-80.1,12.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#754E32").s().p("Aj4AXQhlgagEgpIAAgFQAEApBlAZQBlAcCTABQCTgBBmgcQBkgZAEgpIABgCIAAAGIgBABQgEAphkAaQhmAbiTACQiTgChlgbg");
	this.shape_85.setTransform(-72.9,29.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BA8B67").s().p("AjoAUQhfgVgaglIAAgEQAaAlBfAVQBgAXCIABQCJgBBggXQBhgVAYgmIAAAEQgYAlhhAWQhgAYiJAAQiIAAhggYg");
	this.shape_86.setTransform(-72.9,28.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#996E48").s().p("Aj4AZQhlgagEgoIAAgLQAaAlBfAVQBgAXCIABQCJgBBggXQBhgVAYgmIAAAKIgBACQgEAohkAaQhmAciTABQiTgBhlgcg");
	this.shape_87.setTransform(-72.9,29.2);

	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(-71.7,15,0.463,0.463);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(-86.9,13.6,0.463,0.463);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(-106.9,13.4,0.463,0.463);
	this.instance_2.alpha = 0.301;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#996E48").s().p("Aj4BEQhlgcgEgoQAEgnBlgcQBlgcCTgBQCUABBlAcQBlAcAEAnQgEAohlAcQhlAciUABQiTgBhlgcgAj0g/QhhAZgDAmQADAnBhAaQBhAZCTABQCUgBBhgZQBhgaADgnQgDgmhhgZQhhgaiUgBQiTABhhAag");
	this.shape_88.setTransform(-72.9,21.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Aj/BYQhkgdgEgsIAAggIAAgCQALgrBkgbQBjgbCVgBQCUABBkAbQBjAbAMAqIABADIAAAgIgBABQgFAshlAdQhkAciZABQiagBhlgdgAjthJQhhAYgEAjQAEAiBhAYQBgAZCNABQCNgBBhgZQBhgYAEgiQgEgkhhgXQhhgZiNgBQiNABhgAZg");
	this.shape_89.setTransform(-72.9,23.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D8B59E").s().p("AgJAAQAAgEAJgBQAIAAACAFQgBAEgJABIAAABQgIAAgBgGg");
	this.shape_90.setTransform(-71.9,30.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D8B59E").s().p("AgJAAQABgEAIgBQAIAAACAFQAAAEgKABIAAABQgIAAgBgGg");
	this.shape_91.setTransform(-50.5,33.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#634028").s().p("AAfBcQADgWgOgLQgTgMgNAGQgOAHgCACIgDADIgCgEQgDgMgBgMQgBgtAWgnQATgnARgSIALgBQgPAPgXAnQgYAmAAAsQABAMAEALIABAFIADgDQACgDAPgGQANgGASALQAOALgCAVQgCAMgJAKQADgHABgHg");
	this.shape_92.setTransform(-50.3,27.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#966E53").s().p("AgOBpQgcgVgEgnQgDglASgrQARgsAkghIADAAQgkAggRAsQgRAqACAkQAEAoAcAUQASANAWgHQALgEAIgJQgJALgNAFQgIACgIAAQgLAAgNgIg");
	this.shape_93.setTransform(-52.2,28.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7F5738").s().p("AgTBpQgcgUgEgoQgCglARgrQASgsAkghIAKAAIARgBQgQAPgYAnQgWAmAAAsQABAMAEALIABAFIADgDQACgDANgGQAPgGASALQAOALgCAVQgGAagYAKQgIACgHAAQgNAAgNgJg");
	this.shape_94.setTransform(-51.7,28.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgXBuQgfgWgEgqQgCgnASgsQASguAlgiIABAAIAtgCIgGAFIgSAWQgRAUgRAgQgOAfABAhIAEARQAHgGAMgDQAPgDAQAKQASAOgEAXQgGAfgcAKQgIADgJAAQgNAAgPgKg");
	this.shape_95.setTransform(-51.6,28.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#966E53").s().p("AgXBTQgGgUANgMQAQgOAOAEQAPAEACACIAEACIABgEQACgMgBgLQgGgsgegjQgbgigSgNIANgBQAUAQAYAkQAaAjAGArQABAMgCANIgBAEIgEgCIgEgDIgNgEQgQgEgOAOQgNAOAFAVQADAJAGAHQgMgJgEgOg");
	this.shape_96.setTransform(-73.1,24.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#634028").s().p("AgPBvIgFgCIABAAQAVAEASgQQAZgYgCgnQgDgjgXgpQgWgpgqgbIAFgBQAqAbAVAqQAYApADAkQABAngZAZQgOANgQAAIgJgBg");
	this.shape_97.setTransform(-70.5,24.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7F5738").s().p("AgDBvQgagGgJgaQgGgUANgMQARgOAOAEQAPAEACACIAEACIAAgEQACgMgBgLQgGgsgbgjQgegigRgNIAQgCIALgBQAoAbAYAqQAXApADAkQACAngZAZQgPANgRAAIgHgBg");
	this.shape_98.setTransform(-71.6,24.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAAB1QgdgHgKgdQgGgXAPgQQAPgMAPABQANABAHAEQACgIgBgJQgEghgSgcQgUgdgUgSIgWgTIgGgEIArgFIABAAIABABQAqAbAZAsQAYArADAkQACArgbAaQgQAPgUAAIgJgBg");
	this.shape_99.setTransform(-72.1,24.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#966E53").s().p("AggBSQgEgTAOgMQARgMANAEQAPAFACADIAEACIgOgFQgPgFgPAMQgOANAEAWQADAJAEAIQgLgKgDgPgAAgA3IgDgCIABgEQACgLAAgMQgCgtgbgkQgZglgRgOIANAAQATASAVAlQAXAlADAsQAAALgDANIgBAFg");
	this.shape_100.setTransform(-99.1,40.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#634028").s().p("AAaBcQAEgVgOgNQgQgNgOAFQgPAGgCACIgEADIgBgFQgDgMAAgNQADgrAYgmQAWglATgSIALAAQgRAOgZAlQgbAlgDAsQAAALADAMIABAEIAEgCQABgDAPgEQAOgFARAMQAOAMgEAUQgDAMgJAKQADgHACgHg");
	this.shape_101.setTransform(-66.4,44.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#634028").s().p("AgZBvIgEgBQAWAFARgPQAbgWABgnQAAglgVgpQgSgrgogeIAEAAQAmAeAVArQAUApAAAmQgBAogaAWQgOALgOAAIgMgCg");
	this.shape_102.setTransform(-96.6,40.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7F5738").s().p("AgOBvQgZgHgHgbQgEgUAOgMQARgMAPAFQANAFACACIAEADIABgFQACgLAAgLQgCgtgZglQgbgkgRgOIARgBIALAAQAmAeAUArQAVApAAAmQgBAogbAWQgOALgOAAIgMgCg");
	this.shape_103.setTransform(-97.7,40.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#966E53").s().p("AgRBmQgbgWgBgoQAAgmAVgpQAUgrAmgeIADAAQglAegUAqQgVApAAAlQACAnAaAWQAQAPAWgGQAMgDAIgIQgIALgOADIgMACQgOAAgOgLg");
	this.shape_104.setTransform(-68.6,44.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7F5738").s().p("AgZBmQgbgWgBgoQAAgmAVgpQAUgrAmgeIAMAAIAQABQgQAOgbAkQgaAlgCAtQgBALADALIABAFIAEgDQABgCANgFQAQgFASAMQANAMgEAUQgHAagaAIIgLACQgOAAgOgLg");
	this.shape_105.setTransform(-67.8,44.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgLB1QgcgJgIgdQgFgYAQgPQAQgLAPACQANACAHAFIACgRQgBghgRgeQgSgegSgTIgVgVIgGgFIAtgBIABABQAoAfAVAsQAWArAAAnQgCArgdAYQgPAMgSAAQgFAAgHgCg");
	this.shape_106.setTransform(-98.2,40.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgiBrQgdgYgBgrQAAgnAWgrQAVgsAogfIABgBIAtABIgGAFIgVAVQgSATgTAeQgQAegBAhQAAAIACAJQAHgFANgCQAPgCAQALQAQAPgFAYQgIAdgdAJQgHACgEAAQgSAAgQgMg");
	this.shape_107.setTransform(-67.3,44.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7F5536").s().p("ADmgJQhhgXiFgBQiEABhhAXQhhAWgaAlIgBgDQAEgpBlgZQBlgcCTgBQCUABBlAcQBlAZAEApIgBADQgaglhhgWg");
	this.shape_108.setTransform(-72.9,17.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AFgA2QgSgmhjgWQhigZiJgBQiIABhiAZQhjAWgSAmIgDAHIgCgHQgDgGAAgGQAEgrBlgdQBkgdCagBQCaABBlAdQBlAdAEArQAAAGgDAGIgDAHg");
	this.shape_109.setTransform(-73,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},26).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},32).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},8).wait(22));

	// body
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#070605").s().p("AgGAOQAGgCADgEQgDgBAAgCQAAgDADgFIgLgIIACgBIAOAJQgEAFAAADQABACADABQgEAFgIABIgCAAg");
	this.shape_110.setTransform(-117,17.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#231E1E").s().p("AgIAGIAJgSIADABIgJARQACAFAKACIACAAIgGABQgKgDgBgFg");
	this.shape_111.setTransform(-118,17.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#161211").s().p("AgNAGIAMgSIAOAJQgDAFAAADQABACACABQgEAFgJABQgLgDgCgFg");
	this.shape_112.setTransform(-117.5,17.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#070605").s().p("AgYAJQAmgMAIADQABgDAAgEIAAgDIABACIAAADIgBAGQgIgCgmAMIgBgCg");
	this.shape_113.setTransform(-103.6,6.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#231E1E").s().p("AgZACQAqgNAIABIACABQgLAAgnAMIAFAIIgCAAIgFgJg");
	this.shape_114.setTransform(-103.9,6.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#161211").s().p("AgaACQAqgNAJABIACACIAAADIgBAGQgJgCglAMIgGgJg");
	this.shape_115.setTransform(-103.8,6.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#070605").s().p("AgVAbQASgZAXgRIgFgLIABgBQACAHAEAGQgYAQgRAaIgCgBg");
	this.shape_116.setTransform(-112.8,11.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#231E1E").s().p("AgZAUQAWgbAcgUIABABQgbAUgVAZIANAHIgBACIgPgIg");
	this.shape_117.setTransform(-113.7,11.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#161211").s().p("AgbAUQAWgbAcgUQACAHADAGQgZAQgPAaIgPgIg");
	this.shape_118.setTransform(-113.5,11.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#351C13").s().p("AgFAIQAFgIgFgJIALAIIgIALIgDgCg");
	this.shape_119.setTransform(-115.2,15.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#603D2F").s().p("AgGACIgBAAIgDgCIAIgMIABABIgGALIADABIABAAIAOAJIgBADIgQgLg");
	this.shape_120.setTransform(-117,15.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#492A1B").s().p("AgMACIgBAAIgDgCIAIgMIAZANIgKAMIgTgLg");
	this.shape_121.setTransform(-116.4,15.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7E93A3").s().p("AAAgDIAAADQAAgKgGgIIADgBQAGAFAEAXIAAADIgKAIQAEgKgBgNg");
	this.shape_122.setTransform(-106.7,8.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B2C4D1").s().p("AgDAVIgGgKQgFgJgBgGQAKgHAUgKIABACQgTAJgKAHQABAGAFAIIAHALIgDgBg");
	this.shape_123.setTransform(-109.2,8.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#95A9BA").s().p("AgKAWIgHgLQgEgIgCgGIAPgJQAJgGAKgDQAIAEAFAYIgBADQgGAEgLAFQgGADgFAAIgFAAg");
	this.shape_124.setTransform(-108.4,8.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AhYBDIgEgFIgBgBIABgBIAMgXIgEgCIgBgBIABgCIAKgSIABgCIACABIAGADQAXgcAggVIgBgDIAAgBIABgBIANgJQAMgHANgEIABAAIABABIABABQAzgRAFACIABAAQAEACABADQACAMgDAEIgBACIgCAAIgMAAQgMABgXAJQADAIgBAMIAAABIgBABIgQAJQgOAHgLgEIAAAAIAAgBIgEgHQgYARgRAYIAEADIABABIgOATIgDgBIgDAHIAFAFIgGAFQgGAEgJAAQgJAAgFgFg");
	this.shape_125.setTransform(-110.1,12);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EDE7E6").s().p("AgUBjQANgDAJgKQALgKgDgSIgQhEQgMgogBgJQAAgHAEgPQgCgMgQgGIADgBQAKAAAHAIQAEAGAAAFIAAABIgBAEIgDAPIAAACIAIAfQAGAcALAfQALAgALAVQgDADgNAHQgOAFgXACIgBgCg");
	this.shape_126.setTransform(-91.9,16.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EDE7E6").s().p("AgEAAQgRgBgLABQAWgGAZgBIAIAFIAKAGIgIAFQgOgJgPAAg");
	this.shape_127.setTransform(-102.7,7.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EDE7E6").s().p("AgEBaQgPgDgGgEQAZgCAIgQQADgGgCgfQgCgdgEgjIgEg1IACAAIAFAvIAGA+IACAhIAAACIACAAIAHAAIACAQIABAMQgNAHgNAAIgEAAg");
	this.shape_128.setTransform(-95.8,21.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FCF7F5").s().p("AgGBeQgQgEgEgDQADgcABgrIABhKIAAgdIAIgGIABAEQAHAGAHgCIAFAvIAFA+IADAhIAAACIACAAIAHAAIABAQIACAMQgOAHgMAAIgHAAg");
	this.shape_129.setTransform(-95.9,21.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FCF7F5").s().p("ABQA7IgFg9IgEgoIgBgCIgCAAQgIACgGgEIAAgBQABgFAEgEIgDgEIAAAAQgCAEggAYQgeAYgrAQQgrATglgQIgIgEQADgHAPgYQAPgYAhgXQAhgWA0gEIAIAHIAKAHIgnAYIgdARIgBAAQgIgBgEgEIgEgGQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQABABAAAAQAAAEAOAIQgMACgMgBQgMgCgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAIAQACQAPADAMgGIAigTIAugdQAZgOAIgCQAKAAAHAIQAEAGAAAFIAAABIgBAEQgDAJAAAGIAAACIAIAfQAIAcALAfQALAgAMAVQgEADgNAHQgOAFgZACIgEgqg");
	this.shape_130.setTransform(-102.4,16.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AA0B7QgTgGgCgCIgBgBIAAgCQAFggACgtQADgqgDgyQgVAbgzAXQg1AUgsgPIgMgFIAAgCQAAgDAOgaQAPgaAigbQAjgaA7gEIAAAAIAKAHIALAIQAegRAJgBQAMAAAIAJQAHAJgBAIIgBAEQgEAKAAAFQABAHANAuQANAsAYAtIAAACIgBABQAAABgNAIQgMAHgaADIAEAfIgCABQgQAIgNAAQgIAAgGgCg");
	this.shape_131.setTransform(-102.3,18.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C19987").s().p("AgSAkQABgKADgJQAKgRAEgJQAEgMgEgPIAEgBQADAIAMANQgHAEgMANQgKANgCAYIgGgCg");
	this.shape_132.setTransform(-94.3,35);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#DBB39E").s().p("AgRAdQgNgIgEgLIAHgSIAKgdQALAFAagEQADAIAMAMQgHAFgMAMQgMAOgCAXQgGgCgNgHg");
	this.shape_133.setTransform(-95.9,35);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CE7465").s().p("AhAASQgkgUgFgKIgCgFQAgAcAsAIQAqAHArgMQASgEANgPQANgQgHgVQARARgBAZQACADgRASQgRARg8AFQgqgCglgXg");
	this.shape_134.setTransform(-90.1,39.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E08975").s().p("AhAAfQgkgWgFgJIgCgFIABgEQAFgEAFgBQAHAOAQAGQAQAIADAAIADACIABgEQADgZAOgOQAPgPACAAQABgCAQgGQATgHAbAGQA/APgDAxQACACgRASQgRASg8AEQgqgCglgWg");
	this.shape_135.setTransform(-90.1,37.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("Ag+AqQgpgYgGgLQgCgEAAgDQAAgCACgDQAGgHAHAAIAJgVQAGgPADgQIABgDIACABIANAEQAMADAOgFIADAAIAAABIAFAJQAEAGAHAHQAGgEAUgEQAVgFAaAFQA+ARgGA0QADAEgPAUQgPATg+AEQgsgBgpgYg");
	this.shape_136.setTransform(-90.1,37.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CE7465").s().p("AheBJQAsgEAwgWQAtgWAagnQAIgPgHgTQgIgTgOgLQAJACAIAEQAdATABAvQgIAGgzAgQgxAhhKAOIgBAAQgCAAgEgGg");
	this.shape_137.setTransform(-81.5,27.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C19987").s().p("AARALQgBgLgFgGQgEgEgKgGQgKgFgKgIIAGgBQADACALAHQAKAGANAAIAAAPQAAANADASIgDABIgDgVg");
	this.shape_138.setTransform(-88.5,29.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#DBB39E").s().p("AgMAgQgHgDgBgXQAAgRgLgSIAMgDIAJgDQAEADAKAGQALAHAOAAIgCAQQAAAMAFARIgRAFQgLADgKABIAAABQgCAAgEgEg");
	this.shape_139.setTransform(-89.3,29.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E08975").s().p("AheBGIAAgBQAAgDABgCQAHgFADABQAOgBANgEIAPgFIACgBIAAgCQgIgjAEgMIABgBQgBgDAJgYQAJgZAegSQAigQAbAQQAcATABAuQgHAHgzAgQgxAghLAPIgBAAQgDAAgDgKg");
	this.shape_140.setTransform(-81.5,27.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhTBVQgFgBgCgLIAAgCQAAgFADgDIAEgDIgCgBQgJgJAAgVQACgXgOgMIgCgDIAegIIABABIAIAHQAJAHAWABQABgJAKgZQALgZAcgRQAkgRAcARQAgAWABA1IAAABIgBAAQAAABgqAdQgrAdhkAdIgBAAIgFgCg");
	this.shape_141.setTransform(-82.4,27.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#87695F").s().p("AgWAeIAEhAQADggANgMQAQgGALAAQAOAGACATIAAAAQgDgDgEgCQgLgFgJAHQgKAJgBAgQgCAWgGAjQgIAbgJALQgLAKgHABQAPgUADgjg");
	this.shape_142.setTransform(-126.1,-13.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A58577").s().p("AggBVIAAgMQAEgmgOguQgJgXgCgOQABgNACgDQAUABAegMQAXgKAPAAQAOAGACATIAAAAQgDgDgEgCQgLgFgJAHQgKAJgBAgQgDAWgHAjQgHAggNAKQgMAJgGAAIAAgBg");
	this.shape_143.setTransform(-127.4,-13.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#66402A").s().p("AgBgDIAAgBIAAgBQADgDAEgGIAAAOQgGAHgGAIQAEgRABgBg");
	this.shape_144.setTransform(-128.5,-4.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#66402A").s().p("AAAgLQABgDAFAAIAEAXQgKACgJAEQABgUAIgGg");
	this.shape_145.setTransform(-124.1,-18.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#66402A").s().p("AgFAkQgKghgCgZIAUgQQAFAdAKAbIgWAVIgBgDg");
	this.shape_146.setTransform(-127.4,4.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#66402A").s().p("AgYgQIAAgEQAXgJAPgBIALAvQgVADgVALIgHgvg");
	this.shape_147.setTransform(-123.4,-9.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#66402A").s().p("AgjAJQAlgXAZgIIAJACQgUALgnAgQgGgFgGgJg");
	this.shape_148.setTransform(-110.6,8.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#66402A").s().p("AgXgBIAVgVQAKAQAQALQgFAJgFAJQgRgGgUgSg");
	this.shape_149.setTransform(-122.3,14.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#66402A").s().p("AgQACIAQgRQAHAJAJAGIgLAQQgKgGgLgIg");
	this.shape_150.setTransform(-118.1,14.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#66402A").s().p("AgdAAQAUgNAYgOQAHANAHALQgVAMgQATQgLgMgKgQg");
	this.shape_151.setTransform(-117.3,10.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#66402A").s().p("AgZgPIAbgVQAKAfAOAWIgZAUQgPgZgLgbg");
	this.shape_152.setTransform(-122.9,8.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#66402A").s().p("AgLgXIAMgBQAEAWAHAaIgNABIgKgwg");
	this.shape_153.setTransform(-121.7,-15.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#66402A").s().p("AgegPQAbgPARgHQAIAbAJAXQgVAJgYAQQgJgbgHgag");
	this.shape_154.setTransform(-121,1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#66402A").s().p("AgQgUQALgKALgGIAMA3QgPAIgNAKQgFghgBgYg");
	this.shape_155.setTransform(-125.9,-2.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#66402A").s().p("AgagWIAWgCIAEALIABABIABAAQAIgBAIABQAIACABADIAAABQgDALgHAIIgBABIAAABIABACQgMACgSAGIgNgvg");
	this.shape_156.setTransform(-118.2,-5.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#66402A").s().p("AglgRQAagLAMgCQAOAXAXAQQgeAJgWAOQgNgXgKgag");
	this.shape_157.setTransform(-114.1,4.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8E6042").s().p("AgqCtQghgQgWg7QgPg0ABgjQADgxAEgCIAAgBQAOgKAKgjQAIgkACgYQACgeAIgIQAIgFAHAEQAGADADAFQADATAKAoQALAoANAWIABABIABAAIAPABQAIACACADIAAABQgDANgIAIIgBABIABABIAMAZQALAXAVAYQAUAZAfAHQgRAKgkAdQglAdgWAoIgBABQgLAAgegPg");
	this.shape_158.setTransform(-118.2,-1.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgHDHQgWgEgZgVQgZgUgNguQgMg4ACgiQACghAEgLQgQAHgCgCIgCAAIAAgCQABgRgCgdQgDgegKgdQgJgcADgMQADgMABgBIABgBIABABQATABAfgMQAagKAPAAQAPAEAEAQQAEARgBADIAAAAQAEAVAJAkQAIAlAOAUQAFAAAKABQAKACADAHIAAACQgEAOgHAIQACAHAMAVQAMAYAVAWQAUAXAdAEIAHABIgGAEIgYAPQgWAPgbAZQgbAZgQAeIgBABIgBAAIgBAAQgEAAgQgEg");
	this.shape_159.setTransform(-119.5,-2.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#87695F").s().p("AADAMQgGgJgHgVIAGgCIADARQADANAIALIgHgJg");
	this.shape_160.setTransform(-143.8,-3.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#66402A").s().p("AgMAEQAEgIAHgKQAFAKAKAGIgIANQgJgDgJgIg");
	this.shape_161.setTransform(-138.4,-2.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#66402A").s().p("AgIAKQAFgOAFgOIAHAPIgLAWIgGgJg");
	this.shape_162.setTransform(-140.9,-5.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#66402A").s().p("AgPADIAZgcQACAOAEALQgMANgHAMQgIgLgEgLg");
	this.shape_163.setTransform(-135.2,-7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#66402A").s().p("AgOAFQAKgPAJgQQAEAOAGANIgQAaQgIgLgFgLg");
	this.shape_164.setTransform(-138.4,-6.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#66402A").s().p("AgSAAIAegmQAFAXABAUQgNAMgQAWQgFgVgCgSg");
	this.shape_165.setTransform(-133,-13.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#66402A").s().p("AgQAJQAQgaAQgTIABAiQgPAQgNAXQgEgRgBgLg");
	this.shape_166.setTransform(-136.7,-13.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#8E6042").s().p("AgnBKQgMgPgCgEQAXg+AegmQAbgnALgIQAKASADAeQADAdAAAPIAAAGQgbAXgSAcQgQAbgEAJQgRgFgLgOg");
	this.shape_167.setTransform(-136.4,-10.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgKBjQgVgGgNgQQgMgRgBgDIgBgBIAAgBQAKgmAWghQAXgjASgWQAUgXACgBIACgBIABACQAPAXACAmIACArIAAABIgBABQgbAQgUAiQgRAhgCAFIAAABg");
	this.shape_168.setTransform(-136.5,-10.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#87695F").s().p("AguAcIgGgGIAmAKQAUAFgCgQQgEgVANgBQAOgDAAgYQAAgJgFgLQAMALAJALQAJALAAAHQABADgDACQgHADgKAEIgKAEIgDAAIABADIAFARQACAJgCADQgCAEgSAEIgGABQgUAAgagVg");
	this.shape_169.setTransform(-139.7,0.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#A58577").s().p("AgiAxQgigiAFgZQAEgSAYgIIACgBIgBgCIgEgRQgCgJACgDIAAgBQAHAAAVALQAUALATAQQAMALAMAMQALALABAIQAAADgDACIgRAJIgLADIgCABIABACIAFASQACAJgCADQgCAEgSAEIgIABQgSAAgagVg");
	this.shape_170.setTransform(-141,-1.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgIBGQgSgFgSgQQgbgcACgYIABgIQAFgUAYgJQgEgJgBgPQAAgEABgCQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAJgBAXAMQAVANARAOQAnAigBAMIABADQAAAFgEADQgGAEgJACIgOAEQAFAKABAPIgBAHQgFAHgUADIgFAAQgIAAgMgEg");
	this.shape_171.setTransform(-140.9,-1.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F4B519").s().p("AgNAFQADgQAIgDQAIALAIADQgIAKAAAFQgOgEgFgGg");
	this.shape_172.setTransform(-134.3,15.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#9FE2FF").s().p("AgCALQgKgDgEgIQgCgCABgDQAGgKAOAFQAKADAEAHQACACgBAEQgEAHgJAAIgHgCg");
	this.shape_173.setTransform(-131,11.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3583A5").s().p("AgEAQQgMgFgEgIQgDgEACgFQAHgOATAFQALAFAFAJQADADgCAFQgFAKgMAAIgJgBg");
	this.shape_174.setTransform(-131,11.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0E495E").s().p("AgcAAQACgWAagCQAbACACAWQgCAXgbACQgagCgCgXg");
	this.shape_175.setTransform(-131.5,12.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgLAoQgLgBgIgFIgJgGIAAAAIAAgCQAAgLAFgIQAGgGADgBIgCgJQADgcAegCQAfACADAcQgDAbgfACIgHgBQgKASACABIAAACg");
	this.shape_176.setTransform(-132.1,13.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C19987").s().p("ABVA/QABghgCgPQgBgKgMAAIgkgFQgdgHgigfQglgegNgNQgHgIgGgLIALADQAEAGAZAaQAaAaAmAbQACADAiAJIARABQAQgBAFALQAEAJAAAZQABAjgLARQgDAEgEAAQAJgFACghg");
	this.shape_177.setTransform(-132.3,15.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C19987").s().p("AgPANQANACAEgQQAHgTADgCQAEACAAAEQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgCAOgFALQgFANgEAAQgJgBgDgJg");
	this.shape_178.setTransform(-129.2,25.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C19987").s().p("AgOASIAAAAIAAgBQAPABAFgSIAGgVQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIgBASQgCAOgJAIQgDABgBAAQgFAAgIgEg");
	this.shape_179.setTransform(-126.7,25.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#DBB39E").s().p("AAhBkQABgHAEgKQAFgLABgKIAAgBIAAgBIgBAAIgPgLQgNgJgEgRIgBgGQAAgNAMgLIACgCIgDgCIgfgPQgegPgggVQgggUgHgSIAMgVQALAKAcAKQAEAGAaAaQAaAaAmAaQABAEAjAKIARACQAQgBAFAJQAEAJAAAZQABAigLASQgDAEgEgBQACgSgBgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIgBASQgBAQgKAHQgHAFgMgHIgBAAQAIgVABgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABQgDAOgFAMQgFANgGAAQgNgBAAgVg");
	this.shape_180.setTransform(-134.4,15.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAcBlQABgIAFgLQAEgLABgHQgFgBgMgHQgMgHgEgYIgBgGQAAgOALgLIgjgSQgbgNgcgTQgcgTgOgXIAAgBIAAgBIAFgKIAJgPIACgCIABABIAOAKQAMAIAPAEIABAAIAAAAIAVAZQAWAYAyAkQABACAiAKIAQACQARgBAIAMQAFAKAAAZQABAZgMAfQgGAHgGgCQgDANgJAGQgJAGgOgIIgBAAQgFAJgHAAIgBAAQgOAAgDgbg");
	this.shape_181.setTransform(-134.4,15.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#C19987").s().p("AAJAAQgOgDgTAGQABgCASgDQAQgGAOANQgBgCgPgDg");
	this.shape_182.setTransform(-114.2,-30);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgPAKQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgEANgIQgQgCgCABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQACgBAQACQANACAOAMQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgIgQgBIgBAAQgJAAgDADQgDAHAAAAIgCACIgBgBg");
	this.shape_183.setTransform(-137.2,-51.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgrAOQgIgXAOgWQAKgLATABQAaAGAOAYQAOAWABAFQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBgDgNgVQgOgYgXgFQgRgCgJAKQgMATAHAWQAEARAHAEQAGAEAIgBQALgCAMgGIAQgHQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgRAIQgMAGgLABIgGABQgRAAgHgcg");
	this.shape_184.setTransform(-137.3,-51.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#DBB39E").s().p("AgeAkQgHgFgEgRQgGgSAHgRQAGgSAaABQAZAFAOAYQAOAXAAADIgTAIIgQAHQgNAGgKABIgEAAQgHAAgGgDg");
	this.shape_185.setTransform(-137.3,-51.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgSARIgCgGQAIgdAMgEQAMgEACABQAHAQAAAHQAAAGgBAAQgMAFgIAIIgKAJQgGgDgCgGg");
	this.shape_186.setTransform(-96.4,-82.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgCARQgGgLgJgIIACgHQACgGAMgNQABgBAKAJQALAJgDAdIgEAFQgFAFgHABIgEgMg");
	this.shape_187.setTransform(-83.4,-78.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#193308").s().p("AhUBFQghgRgDgBQAMgkATgVQASgVAEgDQgNAJgLAKIgNALQAbgkAZgVQAZgUACgBQgbgFgHACQAZgMAdgJIAfgJQAiA/ADgCQgPgjAAgDQAMAbAdAjIAgAlQgwAGgpgHQgmgHgDgCQAFAQAIALIALANQgNgBgFgEQgIgEAAgBQgDAOgDATIgCAVIgIgnQgEAUgCAWIgCAYQgRgZgggSg");
	this.shape_188.setTransform(-131.3,-66.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#193308").s().p("AjjBUIgLgSQAKgnAVgXQAUgUACAAQgOAcABABQAogfA6gSQA6gTA1gHQA3gIAgAAQAvgBAbgKQAbgKABgCQgFAMgKAFIgJAFQAigMAPgNIAOgOQgaA1gfAVQgfAWgDgBQAfAKARgDQAQgDABgCQgeAwg1ARQg2AQgtgBIgsgCIArALIAYAEQhUAChHgPQhGgPgEgCQAJASASAPIAUARQgcgFgXgOQgXgOgBgCQgEAPABAPIABAQQgMgKgKgRg");
	this.shape_189.setTransform(-102.6,-85);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#0B1C01").s().p("AkIDHQgbgcgxgXQACgLAUgmQAUgmApgdIgCgEIgZAHIgmAMQAHgOAigZQAjgXBLgRIABAAIAAgBQABgDAVgfQAVgeAqgkQgDAGAAAHIAAAFIABADIADgCQACgCAugWQAsgUBJgMQAjgGAkgCQA3gEAygKQAxgKAjgfQgFAUgTAjQgTAighASIABAEQACACARgHQARgFAWgYQABAWgUAtQgTAshBAYQhaAWhUgHQhSgKglgVIgDAFIAbATQAYAQAYAPQgTgBghgGQghgFgVgOIgEgEIABAGQAAAGAKAkQAMAlAdAgQgLADglAEQgkADgxgMIgGgBIADAFIAJAMQAHAMAOAKIgUAAQgMAAgIgBIgCAAIAAADQgBAGgBAhQAAAZAEASIgOAEIgPAFQgEgIgbgbg");
	this.shape_190.setTransform(-111.3,-75.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AjuD0QAAgDgcgcQgcgbg0geIgCAAIAAgCQAAgEASgmQASglAogiIggAJQgSAFgHAEIgFADIACgGQgBgFAhgfQAhgeBbgVQADgHAVgiQAVgfAygkIADADQgEACgEATQANgIApgTQAngUBAgLQAkgFAkgCQA5gDA2gKQA2gKAigjIAHgGIgCAJQgBAGgQAmQgRAmgjAdQAUgFAYgdIAEgGIAAAHQABADgEAdQgFAdgXAkQgXAig1ATQhOAThNgHQhKgFgwgTQAOALATALQAUANAOAIIgBAFQgGABglgCQgmgDghgXQACAQAMAhQAMAhAbAaIACACIgDABQgCACgoAIQgnAHg2gQQAIAPAXARIAHAEIgIAAIgSABIgcgBIgBAkQABAcAEAQIABACIgkANg");
	this.shape_191.setTransform(-111.1,-76);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AAiCqQgVgIgmgfQgpgfgmgqQglgqgKglIAAAAQgQgNABgLQAAgOALgKQARgKAFADQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgFgEgPAHQgJAJAAAMQABAKAJAJIAAgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAEAiAkArQAkArArAiQApAiAXAKQAQAGAXgOQAcgRAYgnQAYgnAGgzQACgsgWgpQgWgpgYgaQgYgbgCgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQADABAZAbQAaAaAYAqQAYAqgCAtQgHA1gbAoQgcAngdASQgRALgOAAQgGAAgFgDg");
	this.shape_192.setTransform(-93,-52.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C19987").s().p("AAcB0QgTgHgjgdQgmgcgkgmQgkgkgPglQAnA4A7AjQA4AmBCgIQAxgNARg3QASg5gQg2QASAmgDApQgKBGgoAvQgiAngdAAIgLgCg");
	this.shape_193.setTransform(-92.3,-47.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DBB39E").s().p("AAfCpQgWgJgpgiQgsgiglgsQglgrgEgkQAAgDAYggQAXggAxghQAwghBIgFIAaAbQAYAaAXAqQAWAqgDAtQgKBIgoAuQghAngdAAIgLgBg");
	this.shape_194.setTransform(-92.6,-53.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AhQAhQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQA2geAhADQAjAFAIAJQAQAMAAgDIAIgEQgGgMgDgRIgDgWQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIACAaQACAOAKALIACACIgOAGQAAABgGgBQgFgBgKgIQgIgKghgGQgggEgzAhIgCAAIgBAAg");
	this.shape_195.setTransform(-114.1,-32.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#C19987").s().p("AifDPQgWgjgbgyQA0AOApgHQAqgHAmgjQApglAsgkQAsghAiglQAlgrAPgwQAPgvAOg5QgBA3gRBAQgKAkgbAdQgaAdgoAiQgwAmg3A7Qg5A8g6BiIgdgsg");
	this.shape_196.setTransform(-104.7,-31.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#DBB39E").s().p("AiHEwQgrhHgnhcQgnhbgDhNQAAgNACgMQADgeAQg7QAQg8Alg+QAkg/BBglQB1hACvBTQAFAGAWA4QAWA4ADBhQAAA+gTBKQgKAjgbAeQgbAdgnAhQgwAog5A8Qg3A7g7BjQgMgRgqhHg");
	this.shape_197.setTransform(-109.7,-45.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AhTGMQgFgFgvhKQgvhJgshnQgrhoAHhbQADgeAQg9QAQg8Alg/QAlg/BDgmQB2hBCyBUIABABQACACATAsQAUAtAJBQQAKBQgaBoQgKAlgWAcQgWAdgnAiQgyAog+A9Qg7A9g8BkIgCADg");
	this.shape_198.setTransform(-109.6,-45.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0B1C01").s().p("AAMAoIgWgCQABgQgWg/QANAJATAXQAVAUAKAfIgUgCg");
	this.shape_199.setTransform(-84.2,-73.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAlAzIgSgCIgdgCIgCAAIAAgDIgEgaQgFgXgQgnIgDgGIAHAEQAFACAcAaQAaAZAOApIABADg");
	this.shape_200.setTransform(-84.5,-73.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#87695F").s().p("AAEArQgPgKghgEIAbgoQASgdAPgLIAAAAQAFgDAJgEQAJgEAGACIgBAIIgsAzQgLAUALAMIAbAXIAAAHQgFgIgSgKg");
	this.shape_201.setTransform(-110.4,-14.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A58577").s().p("AACAsQgPgKgigFIAcgoQATgdANgKIABAAIAOgIQAKgEAFACQAEACAAAEIABACQgBALgIAYQgLAjgEArQgEgHgSgKg");
	this.shape_202.setTransform(-110.2,-14.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAKA1QgOgOgugGIgDAAIACgDIAagmQAWghAPgOIAPgIQAMgHAIADQAFABACAIQAAAOgJAcQgNAmgCAuIgEABQAAgCgQgOg");
	this.shape_203.setTransform(-110.3,-14.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#442719").s().p("AgGAAQABgHAFgBQAFABACAHQgCAIgFABQgFgBgBgIg");
	this.shape_204.setTransform(-114.7,-5.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgKAAQABgMAJgBQAKABABAMQgBANgKABQgJgCgBgMg");
	this.shape_205.setTransform(-114.7,-5.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#66402A").s().p("AgNgVQAQAEAJAdIACAEQgKAEgHACIgKgrg");
	this.shape_206.setTransform(-114.3,-12);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#66402A").s().p("AgIAAIgGgUIAOgBQAFAVAKAVIgPABQgFgLgDgLg");
	this.shape_207.setTransform(-115.4,-4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#66402A").s().p("AgRgLIARgCQAHANALANIgSABQgIgLgJgOg");
	this.shape_208.setTransform(-112.8,1.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#66402A").s().p("AgVgHIAUgBQAJAIAOAHIgHACIgCAAQgHAAgbgQg");
	this.shape_209.setTransform(-108.6,5.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#66402A").s().p("AgPgQQAKgCAHgGQAEAQAKAYQgJAGgHADQgJgUgGgVg");
	this.shape_210.setTransform(-112.3,-4.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#66402A").s().p("AgKgGIAMgDIAJAQIgLADIgKgQg");
	this.shape_211.setTransform(-112.8,-1.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#66402A").s().p("AgKgOIANgCIAIAeIgNADIgIgfg");
	this.shape_212.setTransform(-115.1,-8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#66402A").s().p("AgRgHIAPgEQAJALALAJIgRACQgIgJgKgJg");
	this.shape_213.setTransform(-109.1,3.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#66402A").s().p("AgGAGQgFgGgFgIQAJgDAHgFQAHAPAKAMIgPAGIgIgLg");
	this.shape_214.setTransform(-109.9,0.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#66402A").s().p("AgZgEQAJgCAJgEIAGACIABAAIAAAAIAHgBQAIgBAHAFQAEADAAAGIgcAHQgKgGgNgJg");
	this.shape_215.setTransform(-104.6,4.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgJBdQghgTgchKIgJgkQgHggAHgYQAKgTAKADQAXAEAKAjQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgLghgTgCQgKgBgFANQgDAJAAAMQABAYAFAWIAHAXQAaBFAfATQAdATAFgCIAZgGIAcgGQAAgIgFgEQgHgFgIABIgJABIgBAAQgZgIgQgcQgPgcgHgZIgJgeQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAIAcQAHAYANAbQAQAcAYAIQACgBAJAAQAIAAAIAFQAHAGgBAMIAAACIg5ANIAAAAIgCAAQgHAAgagQg");
	this.shape_216.setTransform(-109.8,-3.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#8E6042").s().p("AgHBbQgggSgchKQgCgDgHggQgHgfAGgZQAKgUAQAJQAQAJAHAaIAIAZIAHAcQAIAYAOAdQAQAcAYAIQADgBAOABQAOAAABAUIg3AMIgBABQgGAAgagQg");
	this.shape_217.setTransform(-109.8,-3.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#66402A").s().p("AgDASIgFgmIADAAQAFABAAACIAIAnIgLgEg");
	this.shape_218.setTransform(-120,-16.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#66402A").s().p("AgNgBIAGgPQAJgDAJgBIADAmQgOAAgNADIAAgWg");
	this.shape_219.setTransform(-123.5,-9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#66402A").s().p("AgGgOIAAgGIALgEIACArIgNAGQgBgWABgRg");
	this.shape_220.setTransform(-125.5,-4.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#66402A").s().p("AgQgcIARgHQAFAeAKAZQgLAHgIAJQgIgcgFgkg");
	this.shape_221.setTransform(-124.1,7.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#66402A").s().p("AgUgBQAQgMAMgHIANAUQgLAIgKANQgLgLgJgLg");
	this.shape_222.setTransform(-114.9,10.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#66402A").s().p("AgGASIgIgnQALABAFACIANAoIgVgEg");
	this.shape_223.setTransform(-118.4,-9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#66402A").s().p("AgWAEQAIgLAKgLQAKAPASAEQgHAIgEAKIgCAAQgKAAgXgPg");
	this.shape_224.setTransform(-119.5,15.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#66402A").s().p("AgVgZQARgEAPgBQAEAaAHAXQgRAFgSAHQgGgegCgag");
	this.shape_225.setTransform(-122.5,0.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#66402A").s().p("AgLAVQgEgVgCgUQAPAAALABIAJAoQgOgBgPABg");
	this.shape_226.setTransform(-120.2,-5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#66402A").s().p("AgLgSQAKgBAIACIAGAkQgLgCgMACIgBglg");
	this.shape_227.setTransform(-121.3,-13.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#66402A").s().p("AgYgTQATgFANgBQAHAVAKATQgQAEgRAHQgJgWgHgXg");
	this.shape_228.setTransform(-117.8,4.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#66402A").s().p("AgSgVIAXADIAOAoIgXAAQgJgWgFgVg");
	this.shape_229.setTransform(-116.2,-0.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#66402A").s().p("AgagJQAUgNAQgHQAHASAKAMQgQAMgNASQgPgSgJgWg");
	this.shape_230.setTransform(-119.7,10.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#66402A").s().p("AgRgJQAPgEAJgBQAFALAGAIQgLADgLAHIgNgYg");
	this.shape_231.setTransform(-113.4,6.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#87695F").s().p("AgtA3QAPgCAKgSIAUg5QAJgeAWgOQAGgGgEgFQAHgBADACQADAFAAAFQgBAJgEAGQgDgDgFgBQgHAAgGAIQgGAKgIAcQgGAZgLAbQgMAbgOAJIgIgYg");
	this.shape_232.setTransform(-124,-13.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#A58577").s().p("AgpAeQgTgzACgkQABgIACgIQAHAHAgADQAVgBAVgIQAVgIAIAEQAEAEAAAFQgCAJgDAGQgDgDgFgBQgHAAgHAJQgFAJgIAcQgJAZgKAbQgKAbgPAJQgDgNgNgjg");
	this.shape_233.setTransform(-125.2,-13.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#8E6042").s().p("AgPCwQgPgFgPgQQgQgVgJg9QgKg9ADg7IABgLIAAgCQAKgPAIgVIAOgpQAIgbAFgJQAFgHAFABQAFABABADIAHAfIANA5QAIAfAJATIABABIABAAQAKAAADAEIAAACQACACgNAKIgBABIAAABIARAuQAPApAVAdQgKAFgZAVQgZAWgQAhQgDAAgOgFg");
	this.shape_234.setTransform(-118.4,-0.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAbDHIgSgEQgOgFgTgSQgjgkACiwQgGAHgHADIgDABIAAgCIgGgUQgFgTgIgWQgNgigCgYQgDgYAGgTIABgEIADADQAAABAJAGQAJAFAVACQAWgDAUgJQAXgKAKAHQAHAIgDAKIgGAOIAHAgQAGAaAIAdQAJAeAIATQAJgBAGAIIABADQgBAGgLAIQADAKAMAkQANAkAZAhIACABIgCACQgCgBgYASQgYASgbAvIgBACg");
	this.shape_235.setTransform(-120.8,-2.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#C19987").s().p("AAKAAQgMgIgVADQACgBATgBQAQAAAKAPIgOgIg");
	this.shape_236.setTransform(-108.6,-35);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AA8AdQgFgCgHgLQgFgLgfgNQgdgPg7AWQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQA8gSAeAOQAhAMAGAMQAMAPABgDIAJgCQgDgNABgRIADgWIAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAABIgFAaQgDAOAHAMIABADIgPACIAAABIgFgCg");
	this.shape_237.setTransform(-108.5,-35.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgDACQgCgCAEgDQACgCADAEQACACgEADIgCABQgBAAgCgDg");
	this.shape_238.setTransform(-72.4,-69.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgIASQgJgGAIgQQAJgRAKAEQAIAGgIAQQgJAOgGAAIgDgBg");
	this.shape_239.setTransform(-73.1,-68.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EDEDED").s().p("AgKAjQAEgCAEgDQAIgMAAgSQgBgTgJgKQgEgEgEgBIAEgBQAFAAAEAGQALAKABATQAAATgKAKQgDAGgGAAIgEAAg");
	this.shape_240.setTransform(-73.1,-70.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgVABQABggAUgDQAFAAAFAEQALALABATQAAASgKAMQgFAFgHABQgSgDgDggg");
	this.shape_241.setTransform(-73.9,-70.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgZAAQABgjAYgEQAGAAAHAGQANAMAAAVIAAAJQgCAPgIAJQgHAHgIAAQgXgDgDglg");
	this.shape_242.setTransform(-74,-70.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAAAFQgFgCABgDQACgFADABQAFACgBADQgCAEgDAAIAAAAg");
	this.shape_243.setTransform(-83.3,-71.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgOAOQgGgJANgMQANgNAJAHQAGAJgOAMQgHAIgHAAQgEAAgDgCg");
	this.shape_244.setTransform(-83.6,-70.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EDEDED").s().p("AgYAeQAPgCAMgNQAXgYgMgRQgDgDgEgBIACAAQAHAAAFAEQAMARgXAYQgNAPgQABIgFgBg");
	this.shape_245.setTransform(-83.2,-72.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgZAbQgMgRAXgYQAOgPAPgBQAHAAAFAFQAMAQgYAZQgPAOgNABQgIAAgEgEg");
	this.shape_246.setTransform(-83.7,-72.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgdAdQgIgIAEgOQADgMANgNQAQgQAPAAQAKgBAFAGQAIAJgDAOQgDAMgNANQgQAQgQABQgJgBgGgGg");
	this.shape_247.setTransform(-83.7,-72.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AASANQABgLgPgCIgBAAQgJgDgEADIgEAHQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAABAAQABgFAOgEIgRgFQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAIARAEQANAFAKAPQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_248.setTransform(-128.6,-57.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgTApQgXABgBghQgDgZASgSQAMgJARAEQAaAMAJAaQAJAZAAAFQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgEgIgZQgJgZgXgJQgPgGgKAJQgQAQACAXQABAQAFAGQAGAFAIABQAKABAOgEIARgDQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgSADQgKACgJAAIgFAAg");
	this.shape_249.setTransform(-128.9,-58.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#DBB39E").s().p("AgTAmQgKAAgFgGQgGgGgBgSQgCgSAKgQQAKgQAXAGQAZAKAJAaQAJAagBADIgUAEIgRADQgKADgJAAIgFgBg");
	this.shape_250.setTransform(-128.8,-58.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgUANIgBgHQAOgaAMgCQAOgBABACQAEARgCAFQgCAHgBgBQgMAEgJAGIgMAGQgFgEgBgGg");
	this.shape_251.setTransform(-82.3,-78.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgCAdIgEgNQgDgMgIgJIAEgHQADgGANgKQABAAAJALQAJAKgJAcIgFAFQgEADgEAAIgCAAg");
	this.shape_252.setTransform(-70.6,-75.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#193308").s().p("AhaAzQgcgYgEgBQATgfAZgSQAUgRAFgCQgOAFgNAJIgOAIQAhgeAdgPQAcgPACgBQgagKgFABQAZgHAcgDIAjgCQAVBFADgCQgIglABgDQAHAcAUAoIAXArQgwgEgmgPQglgPgBgCQACAQAEANIAIAPQgMgEgEgFIgHgGQgGAMgGATIgHATQAAgjABgDQgIASgGAVIgHAYQgNgdgbgYg");
	this.shape_253.setTransform(-120.4,-71.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#193308").s().p("Ah1AfQhCgdgEgCQAHATAOATIAPATQgZgKgUgTIgVgUQgGAOgDAPIgCAQQgKgNgGgSIgHgUQASgjAZgRQAYgSACAAQgVAbACABQAugYA9gGQA7gHA2AEQA3AEAgAHQAuAJAdgFQAcgEABgCQgIAKgJAEIgKADQAjgFARgKQAOgIADgDQgkAvgjAPQgiAMgEgBQAdAQARAAQAPAAACgBQgnArg3AFQg4AFgrgKIgrgLIAnATIAXAKQhTgQhCgdgADShAIAAAAIAAAAg");
	this.shape_254.setTransform(-87.4,-82.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#0B1C01").s().p("Ak0CAQgUgfgsghQAEgLAcggQAbgfAugVIgBgEIgaACQgWABgRADQAJgMAngSQAngSBMgBIABAAIABgBQABgCAbgaQAbgZAwgcQgDAGgCAIIgBAEIAAADIADgBQADgCAygMQAvgKBKACQAjADAjAFQA4AIAxAAQAzAAApgXQgJASgaAeQgaAegjALIAAAFQABABATgDQARgCAagSQgDAVgdAoQgcAmhFAJQhbAGhSgZQhOgbgfgbIgEAEIAWAYQATAWAXASQgUgEgegLQgggMgSgUIgDgFIAAAGQgCAGADAlQAEAnAWAlQgMACgkgFQglgEgtgVIgFgDIACAGQgBABAHANQAEAMAMANIgUgEIgTgEIgDgBIAAACQgCAFgHAhQgGAYABASIgPADIgPABQgDgJgVghg");
	this.shape_255.setTransform(-97.4,-75);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AkjCyQAAgCgWghQgWgggsgoIgCgCIABgBQAAgEAZghQAZgfAugZIghACIgZAEIgHABIAEgFQAAgFAmgYQAngXBegDQAEgHAbgbQAbgcA4gYIADAEQgEAAgHATQANgGAsgLQArgKBAACQAkADAkAEQA5AJA2ABQA3ACApgbIAHgFIgEAJQgCAFgXAiQgZAignAVQAUgBAegYIAFgEIgBAHIgLAeQgLAcgdAeQgdAcg4AGQhQAFhKgWQhIgVgqgcIAbAeQAQAPAPALIgCAEQgGAAglgKQgmgIgbgeQgBAQAFAhQAFAjAVAeIACADIgEABQgDACgngBQgogBgygaQAFAQATAVIAGAFIgIgBIgRgDIgcgGIgIAjQgGAaABASIABACIgnAFg");
	this.shape_256.setTransform(-97.2,-75.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgGCiQgSgMgignQghgngcgwQgdgvgBgoIgBgBQgMgQAEgKQACgOANgHQATgGAEAEQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAgBQgEgDgQADQgLAHgCALQgBALAGALIABgFQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQgEAlAaAvQAbAyAjAqQAiApAWAPQAMAJAZgJQAfgLAfghQAfgiARgwQAMgqgNgtQgOgtgRgfIgVggQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAWAiQAUAfAPAuQAPAugMAsQgRAxgjAiQgkAhgfALQgNAFgLAAQgLAAgHgFg");
	this.shape_257.setTransform(-84.4,-49.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#C19987").s().p("AgHBmQgSgLgfgjQgegkgcgqQgbgtgHgnQAaA/AyAuQAyAxA/AGQAzgEAcg0QAdgxgFg4QAKAogLAoQgYBDgxAlQgiAagaAAQgKAAgHgFg");
	this.shape_258.setTransform(-84.2,-43.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#DBB39E").s().p("AgHCiQgUgNgkgqQgjgqgbgyQgbgxAEgmQAAgCAegbQAdgbA3gWQAzgWBKAKIAUAgQASAeANAuQAOAtgMAsQgZBEgxAlQgiAagZAAQgLAAgHgEg");
	this.shape_259.setTransform(-84.2,-49.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#C19987").s().p("AjTCiQgOgngRg2QAwAYAqABQAqADAtgbQAxgbAwgaQAzgYApgeQAsgjAZgqQAYgsAag0QgNA1gdA8QgRAgghAXQggAXgtAXQg3AdhCAvQhEAvhNBUIgTgxg");
	this.shape_260.setTransform(-99.5,-31.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#DBB39E").s().p("AjVEVQgbhNgUhiQgThiANhLQADgNAEgLQAJgdAcg3QAcg3Awg2QAxg1BHgXQB/gnCaB1QAEAHAKA8QAKA7gRBfQgMA9giBEQgRAhggAXQghAXgtAYQg3AehCAvQhEAvhNBUQgJgUgbhOg");
	this.shape_261.setTransform(-100.9,-47.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AizF6QgEgFgfhSQgghSgVhuQgWhrAbhbQAIgdAdg3QAcg4Axg2QAxg2BJgYQCBgnCdB3IAAABIAAABQACABAKAwQAKAvgHBRQgHBQgvBhQgRAhgbAYQgdAXgsAZQg5AehHAuQhJAwhPBVIgCACg");
	this.shape_262.setTransform(-101,-47.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#0B1C01").s().p("AAEAqIgVgHQAEgQgJhCQALALAOAbQAQAYAEAhIgTgGg");
	this.shape_263.setTransform(-72.2,-68.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAaA6IgSgGIgcgJIgCAAIABgCQABgBAAgaQABgYgIgoIgBgIIAFAGQAFADAUAfQAWAeAFArIAAAEg");
	this.shape_264.setTransform(-72.4,-69.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#66402A").s().p("AgMALIALgZQAFAGAJAFIgIASIgDAAQgEAAgKgEg");
	this.shape_265.setTransform(-135.2,-3.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#66402A").s().p("AgOAHQAJgPAHgMQAGALAHAJIgOAVQgIgHgHgHg");
	this.shape_266.setTransform(-132.5,-9.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#66402A").s().p("AgIAIQABgFAHgWIAJAKQgGANgDAQQgEgFgEgHg");
	this.shape_267.setTransform(-137.8,-5.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#66402A").s().p("AgOADQANgRAJgLIAHAbQgJAJgKAQQgGgMgEgMg");
	this.shape_268.setTransform(-131.6,-14);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#66402A").s().p("AgOALQAIgSAHgRIAOATQgIAMgHASQgHgHgHgHg");
	this.shape_269.setTransform(-135.4,-7.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#66402A").s().p("AgNALQAJgQAMgUIAGATQgLANgIATIgIgPg");
	this.shape_270.setTransform(-134.6,-12.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#8E6042").s().p("AgWBQQgNgFgLgRQABgKATgsQASgrAmgrIAFAeQAEAUAIAUIgXAhQgRAcgLAiIgDAAQgGAAgJgDg");
	this.shape_271.setTransform(-134,-10.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgTBYQgRgEgPgWIAAgBIAAgBQgBgEARguQARgsAwg1IADgDIABAFIAEAZQAEAZAKAZIABACIgBAAQgCACgTAaQgUAdgKAoIgBACIAAAAIAAAAIgTgDg");
	this.shape_272.setTransform(-134.1,-10.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#87695F").s().p("AgqA7QAQAHALgDQANgHAAgQIgBgOIAAgDIADAAIAKgBQALgBAHgIIABgFQgBgKgNgSQgOgRgIgJIgEgFIgZgUQAUAKASATIAEAEQAKAKAOARQANAQAAAMIgBAEQgGAJgLABIgNABIgCAAIAAADIABAOQAAAQgLAHIgHAAQgPAAgUgNg");
	this.shape_273.setTransform(-135.9,-1.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#A58577").s().p("AgNBAQgWgMgQgbQgWglAMgUQAGgJAKAAIADAAIgBgDIAAgMQABgKAMgFQAMgEAPAKQANALAPANIAEAEQAKAKANARQAOAPAAANIgBAEQgGAJgLABIgNABIgDAAIABADIABAOQAAAQgOAGIgIABQgMAAgNgJg");
	this.shape_274.setTransform(-138.1,-1.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgOBJQgVgKgRgcQgIgNgFgPQgFgNAAgLQABgKAEgHQAGgKALgBIAAgIQAAgPAQgIQAbgIAcAcIAEAEQAGAGASAYQASAXACASIgCAGQgOAPgOgCIABANQgCATgSAHQgGACgGAAQgKAAgOgGg");
	this.shape_275.setTransform(-138.1,-1.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F4B519").s().p("AgNAEQAEgPAIgEQAIANAHACQgIAKgBAGQgNgFgFgHg");
	this.shape_276.setTransform(-132.5,15);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#9FE2FF").s().p("AgDALQgKgEgDgHQgBgDABgDQAGgJAOAFQAKAEADAGQACAEgBADQgEAGgIAAQgFAAgEgCg");
	this.shape_277.setTransform(-129,11.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#3583A5").s().p("AgFAPQgMgFgDgJQgDgDACgGQAIgNATAHQALAFAEAJQADAEgCAFQgGAJgLAAQgFAAgFgDg");
	this.shape_278.setTransform(-128.9,11.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#0E495E").s().p("AgcAAQADgYAaAAQAbAEACAVQgFAYgZAAQgbgEgBgVg");
	this.shape_279.setTransform(-129.4,12.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgOAnQgKgCgHgFIgJgGIAAgDQAAgMAGgGQAGgFADgBIgBgJQAFgcAegBQAfAFABAcQgEAZggABIgGgBQgNAQADACIAAACg");
	this.shape_280.setTransform(-130.2,13.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#C19987").s().p("ABPBEQAEgggCgOQAAgKgMgDQgLgBgZgGQgcgIggghQgjghgMgNQgHgIgFgMQAFACAGACQADAGAYAcQAYAbAkAdQACADAiALIAQACQAQABAFALQADAJgBAZQgCAjgMARQgDADgEAAQAJgFAEghg");
	this.shape_281.setTransform(-130.3,15.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#C19987").s().p("AgQALQAMAEAGgRQAJgSADgBQADABAAAEQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQgDANgGALQgFAMgEAAQgJgBgDgKg");
	this.shape_282.setTransform(-128,25.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#C19987").s().p("AgPARIgBAAIABgCQAPACAGgRQAFgQADgEQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCASQgCAOgKAHQgCACgCAAQgGAAgHgFg");
	this.shape_283.setTransform(-125.5,25.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#DBB39E").s().p("AAlB/QgNgDABgUQABgHAFgKQAGgLABgJIAAgBIAAgBIgBgBIgOgLQgMgLgEgRIAAgFQABgNAMgKIACgDIgCgBIgegSQgegQgegXQgegWgHgTIAOgVQALAMAbALQAEAGAYAcQAYAcAkAdQABADAiAKIARADQAQABAFAKQADAKgBAZQgCAigMARQgDAEgEgBQADgSgBgEQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAACgCAQQgCAQgKAHQgIAEgLgHIgBgBQAJgTACgKQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgDAOgGAMQgFANgGAAIAAAAg");
	this.shape_284.setTransform(-132.4,15.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAjCEQgOABgBgdQABgIAGgKQAFgLABgHQgFgCgMgHQgLgHgDgZIAAgGQABgOAMgKIgjgUQgagOgbgWQgagUgNgZIAAgBIABAAIAFgKIAKgOIACgCIACABQAAACAMAJQAMAIAPAFIABABQAAABAUAbQAUAbAwAjQAAADAhALIARACQARAAAGAOQAFAKgBAZQgCAZgOAeQgGAHgGgDQgDANgKAGQgKAFgNgJIgBAAQgEAIgIAAIgBAAg");
	this.shape_285.setTransform(-132.4,15.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#87695F").s().p("AgYAdQgigCgKADQgGgLABgLIAAgBQAtAJAlgMQAmgJAXgqQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIAAACQgBAHgGAIQgKASgGAXQgGAYgBALQgkgSgggBg");
	this.shape_286.setTransform(-108.7,-16.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#A58577").s().p("AgYAdQgigBgKACQgGgKABgLIABgIQAHgRAPgKQAQgLACAAQAZgFAYgDQAagDAQAAQANABACACIAAADQgBAGgGAIQgKASgGAXQgGAZgBALQgkgTgggBg");
	this.shape_287.setTransform(-108.7,-16.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAtA1QgmgVgkAAQgkAAgDABIgCABIgBgBQgKgSAFgPQAIgUAQgLQAQgLADAAQAZgGAZgDQAbgDAQAAQAPAAADAGQAEAHgKAOQgMAVgFAaIgGAfIgBAEg");
	this.shape_288.setTransform(-108.7,-16.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#442719").s().p("AgEAAQABgEADAAQAFAAAAAEQAAAFgFAAQgEgBAAgEg");
	this.shape_289.setTransform(-113.5,-4.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgJAAQABgIAIgBQAJABABAIQgBAKgJAAQgJgBAAgJg");
	this.shape_290.setTransform(-113.4,-4.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#66402A").s().p("AgUADIAFgEQAQgRAVgCIgBAhQgYACgRAFIAAgRg");
	this.shape_291.setTransform(-113.2,-17.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#66402A").s().p("AgMAWQACgWAJgTIAMgEIACAoQgOADgLAEIAAgCg");
	this.shape_292.setTransform(-116.4,-12.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#66402A").s().p("AgIAMIABgaQAJAGAHAXIgRgDg");
	this.shape_293.setTransform(-107.3,-17.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#66402A").s().p("AgJgCIAJgHQAFAIAFAGIgLAFIgIgMg");
	this.shape_294.setTransform(-110.3,8.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#66402A").s().p("AgPgQIAYgJIAHAmQgOAHgDAGQgJgWgFgUg");
	this.shape_295.setTransform(-115.7,-4.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#66402A").s().p("AgagBQAQgGASgFQALAMAHAFQgKABgYAHIgSgOg");
	this.shape_296.setTransform(-105.2,6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#66402A").s().p("AgKgFIAKgLQAEAOAHAMIgLAHIgKgWg");
	this.shape_297.setTransform(-112.8,3.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#66402A").s().p("AgKARIAAgkIAVADIgBAkIgUgDg");
	this.shape_298.setTransform(-107.2,-9.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#66402A").s().p("AgMAVIAAgpIAZAAIAAAqIgZgBg");
	this.shape_299.setTransform(-109.6,-13.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#66402A").s().p("AgTgQQASgEAVgCIAAAlQgUADgQAEIgDgmg");
	this.shape_300.setTransform(-113.1,-9.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#66402A").s().p("AgQAHIgCgPQAMgGARgEQADAPAFAHQgRAGgMAJQgEgGgCgGg");
	this.shape_301.setTransform(-108.7,1.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#66402A").s().p("AgNgRQANgCAMABIACAjIgbACIAAgkg");
	this.shape_302.setTransform(-109.5,-5.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#66402A").s().p("AgSgGIASgLQAHANAMAKQgPAGgIAGQgIgMgGgMg");
	this.shape_303.setTransform(-109.8,5.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#66402A").s().p("AgXgIIgCgDIAQgEIAAABIAAAAIABABIAVAPQALAHACAEQgPABgMACQgKgKgMgOg");
	this.shape_304.setTransform(-104,2.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#66402A").s().p("AgKgQIASABIADAdQgKABgGACQgDgQgCgRg");
	this.shape_305.setTransform(-106.9,-2.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#66402A").s().p("AgQgRQALgGATgDQABAZABAPQgNAHgGAGQgIgXgFgVg");
	this.shape_306.setTransform(-112.4,-1.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#8E6042").s().p("AgqBPQgagygKg0QgCgPAAgPQADgrAbgbQAZgWAZAEIAAAAQADgBARANQAPANABA0QgDBlAMAcIAAACQANAIALAIQAKAIACADIAAACQgCAIgGAMIggAIQgaAHgXALQgIgMgagzg");
	this.shape_307.setTransform(-109.6,-5.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgLCSQgEgEgcg2Qgcg2gMg5QgIhAAmgoQAagYAcAFQADgCASAOQASAOAAA3QgFBhAPAfQAIAFAMAJQANAKACAFIABADQgEAQgGAHIgBACIAAAAIgeAHQgbAHgaANIgCAAg");
	this.shape_308.setTransform(-109.7,-5.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AASBTQgLAAgtgkIgYgVQgdgagUglQgVglAAgHIAFgBQARAvAeAjQAfAjAdAUQAcAUAJADQAKADAKgXQAHgNAQgaQAZgiAVgSQAWgSABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAAAQgBABAAAAQAAABgBAAQgBAAgVASQgVARgYAiQgQAZgJATQgJARgLAAIgBAAg");
	this.shape_309.setTransform(-107.7,-35.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgUANIgBgHQAOgaAMgCQAOgBABACQAEARgCAFQgCAHgBgBQgMAEgJAGIgMAGQgFgEgBgGg");
	this.shape_310.setTransform(-82.1,-81.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgCAdIgEgNQgDgMgIgJIAEgHQADgGANgKQABAAAJALQAJAKgJAcIgFAFQgEADgEAAIgCAAg");
	this.shape_311.setTransform(-70,-75.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#A50707").s().p("AgHAjQgNgEgKgUQgKgSgFgcQAHgBAeAGQAbAFAbAdQgNANgPAKQgNAJgIAAIgEgBg");
	this.shape_312.setTransform(-114.2,-27.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#380101").s().p("AgTAOIgGghQAQAQAjAXQgkgJgJADg");
	this.shape_313.setTransform(-117,-32.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgJAgQgggZgDgEIgBAAQgFgpgBgZQASAoAdAgQAcAhAcAWQgegHgfgZg");
	this.shape_314.setTransform(-115.1,-35.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#380101").s().p("AgOgIQAKACAGAAIACAAIALAGIgJAJQgIgKgMgHg");
	this.shape_315.setTransform(-109.8,-28.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AhKBoQgYgLgNgwQgMgugFgvIgEg2IAFgBQARAsAfAlQAhAiAdAXQAbAWAIAAQAJADAKgWQAHgOAQgYQAZgkAVgSQAVgSACAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQgBAAAAAAQAAABgBAAQgBAAgVASQgVARgYAiQgQAZgHAOQgKAXgNgBQgGAAgNgKQgHAKgXAWQgVAUgSAAIgEAAg");
	this.shape_316.setTransform(-107.7,-33.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#A50707").s().p("AgWAPQgOgPgNgZQAHgEAegCQAcgCAiAWQgKAOgMAOQgMAOgLABQgMgBgPgQg");
	this.shape_317.setTransform(-115.8,-24.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#380101").s().p("AgdgOQATALAoAMQglABgHAFQgIgPgHgOg");
	this.shape_318.setTransform(-119.5,-28.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AAAAiIgpgTIgBgBQgQgmgIgXQAcAiAmAWQAjAZAgAOIgHAAQgcAAgggOg");
	this.shape_319.setTransform(-118.5,-32.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#380101").s().p("AgOgEQAKABAGgDIABgBIAMAFIgFAJQgLgHgNgEg");
	this.shape_320.setTransform(-111.5,-26.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AhIBBQgZgrgQgrIgSgyIAEgDQAcAnAoAbQApAZAfAOQAiAOAIgBQAKAAAEgYQADgPAJgcQAOgpAQgXQAQgXACgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgCAAgPAWQgQAXgOApQgJAbgDAOQgEAagMACQgGABgQgFQgFALgRAbQgPAbgTADQgagEgZgrg");
	this.shape_321.setTransform(-112.9,-31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187,p:{y:-78.8}},{t:this.shape_186,p:{y:-82.4}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]}).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252,p:{x:-70.6,y:-75.5}},{t:this.shape_251,p:{x:-82.3,y:-78.1}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},17).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_311},{t:this.shape_310},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_309},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_252,p:{x:-70,y:-75.7}},{t:this.shape_251,p:{x:-82.1,y:-81.9}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},28).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_311},{t:this.shape_310},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_252,p:{x:-70,y:-75.7}},{t:this.shape_251,p:{x:-82.1,y:-81.9}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},5).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187,p:{y:-80.8}},{t:this.shape_186,p:{y:-84.4}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},16).wait(22));

	// hand
	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#87695F").s().p("AAVAJIgBgIQgCgCgHAAIgLgBIgBABIAAgDIgBgMQgBgIgEgEQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQgIADgGAIIACgFQAGgJALgEQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQACADABAIIABAMIAAADIACAAIAMAAQAHAAACAEIABAGQAAASgMATQAIgQgBgNg");
	this.shape_322.setTransform(-106.2,-1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#A58577").s().p("AgCAgQgNgJgNgYQAAgHAJgTQAFgJALgEQABAAAAAAQABAAABAAQAAAAAAABQAAAAAAABQADADABAIIABAMIAAADIADAAIALAAQAHAAADAEIAAAIQABAHgEAOQgFAMgJAJQgEgBgKgJg");
	this.shape_323.setTransform(-106.5,-0.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgDAmQgPgJgQgdIAAgBQgBgEAKgYIAAgBIAHgIQAGgGAHgBQAFgBACAEQAIAMgBANQAFgBAJACQAIABAEAGQADAIgGARQgFASgOAMIgBAAIgBAAIAAAAQgCAAgMgIg");
	this.shape_324.setTransform(-106.4,-0.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#66402A").s().p("AgGgEQAGAAADgBIAEAIQgFACgEABIgEgKg");
	this.shape_325.setTransform(-111.2,-5.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#66402A").s().p("AgKgJIALgBIAKAPQgHAEgFACIgJgUg");
	this.shape_326.setTransform(-109.6,-2.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#66402A").s().p("AgIgGIAIgGQAEALAFAJQgEADgFACQgFgKgDgJg");
	this.shape_327.setTransform(-109.4,-4.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#66402A").s().p("AgHgEQAHgCAFgDIAAAEIACAKQgEACgFADIgFgOg");
	this.shape_328.setTransform(-110.4,-7.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#66402A").s().p("AgDARQgDgOAAgJQAAgGABgEIAHAEIAFAcIgHABIgDAAg");
	this.shape_329.setTransform(-111.9,-9.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#8E6042").s().p("AgMAMQgLgdgBgYQgBgGACgFIAOAIQAIAFABAGIADAPQABAbAWAcQgHAIgRAIQgDgKgLgfg");
	this.shape_330.setTransform(-110.1,-6.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgBA5IgKgaQgJgWgGgYQgHgaAGgPIABgCIACABIANAHQALAHADAJQACAFACAKQABANAFAOQAEAPAMAMIACABIgCACIgJAJQgIAIgMADIAAABg");
	this.shape_331.setTransform(-110,-6.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#C19987").s().p("AAcABQgRgBgLAEQgMABgTgJQgUgLgRgTIABgDQAIAHAUAOQAUAOANACQAJgBAMgDQASgFATABQARAEgBAEQABACgOAAIgBAAIgGgFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAGAEAJAMQAJALAAAJIAAACQgYgjgRgCg");
	this.shape_332.setTransform(-97.4,5.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#DBB39E").s().p("AAYAlQgNgLgKgLIgBgBIAAAAQgZgBgVgSQgUgVgFgIIAGgLIAcAVQAUAOAOABQAIAAANgDQARgGAUACQARADgBAFQAAADgOAAIAAAAIgHgGQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAABABQAAAAAAAAQAHAGAJAJQAJALAAAKQABACgFAFQgFADgJgDQAAgIgOgGQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBABIAAAAIACADQAMAGgBAFQgBAHgEACIgBAAQgIAAgMgJg");
	this.shape_333.setTransform(-97.6,6.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAUAoQgQgOgEgGQgdgCgWgVQgWgXgCgFIgBgBIALgTIACACIAcAXQASAOALABQAKgBAOgDQARgGAVABQAUAEAAAKQACAFgQABQAOANABAPQABADgHAIQgGAFgKgCQgCAIgFACIgDAAQgLAAgOgMg");
	this.shape_334.setTransform(-97.7,6.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#87695F").s().p("AAVAIIgBgHQgCgCgHgBIgLAAIgBAAIAAgCIgBgMQgBgIgEgEQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAQgIADgGAIIACgFQAGgJALgFQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQACAFABAHIABAMIAAACIACAAIAMAAQAHABACAEIABAGQAAASgMAUQAIgRgBgOg");
	this.shape_335.setTransform(-103.6,-0.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#A58577").s().p("AgCAgQgNgJgNgXQAAgHAJgUQAFgJALgFQABAAAAABQABAAABAAQAAAAAAABQAAAAAAAAQADAFABAHIABAMIAAACIADAAIALAAQAHABADAEIAAAIQABAIgEAMQgFAOgJAHQgEAAgKgJg");
	this.shape_336.setTransform(-103.9,-0.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#66402A").s().p("AgGgDQAGgBADgBIAEAJQgFACgEAAIgEgJg");
	this.shape_337.setTransform(-108.6,-5.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#66402A").s().p("AgKgIIALgDIAKAPQgHAFgFACIgJgTg");
	this.shape_338.setTransform(-107,-2.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#66402A").s().p("AgIgGIAJgGQACALAHAJQgFADgFACQgFgKgDgJg");
	this.shape_339.setTransform(-106.8,-4.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#66402A").s().p("AgHgEQAHgCAFgDIABAEIABAJQgEADgFADIgFgOg");
	this.shape_340.setTransform(-107.8,-7.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#8E6042").s().p("AgMAMQgLgdgBgYQAAgGABgFIAOAIQAIAFABAGIADAPQABAbAVAcQgGAIgRAIQgDgKgLgfg");
	this.shape_341.setTransform(-107.5,-6.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#C19987").s().p("AAcABQgRgBgLAEQgMABgTgJQgUgLgRgTIABgDQAIAHAUAOQAUAOANACQAJgBAMgDQASgFATABQARAEgBAEQABACgOAAIgBAAIgGgFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAGAEAJAMQAJALAAAJIAAACQgYgjgRgCg");
	this.shape_342.setTransform(-94.8,5.7);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(-96.8,-1.6,1,1,15);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(-93.4,-6.3);
	this.instance_4._off = true;

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#C19987").s().p("ABAAfQgIgEgIgOQgJgNgFgEQgGgBgPAIQgOAJgFABQgCgHADgDIgjgSIghgUIAHgEIAdAUQAWAOAPAGQgDAJgCgCQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIANgJQAMgIAJgEQAGAAAKAPQAKAPAOANQABABAAABQABABAAAAQAAABAAAAQAAABAAAAQgEAEgLAAQANgFgIgEg");
	this.shape_343.setTransform(-86.7,-2.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#C19987").s().p("AgDAjQAHgNgFgNQgGgLgCgKQAEgNAPgJQgKAKgDANQgBAFAEAGQAEAJABALQgDAMgFADg");
	this.shape_344.setTransform(-87.8,4.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#C19987").s().p("AAAgFQgIgJgHADIgCgEQAIgCAJAGQAJAJAJANQgDAAAAAFIgPgVg");
	this.shape_345.setTransform(-76.2,0.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#C19987").s().p("AAOAbQAEgCAAgDQgCgGgKgPIgPgVQgKgGgFAHIgCgCQADgGAJAAQAFABALARIAIALIAHAKQAHAIACAEQgBACgIACIgDgBg");
	this.shape_346.setTransform(-79.2,-0.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#DBB39E").s().p("AAAALIgIgLIgJgPQAIgCAJAGQAJAJAJANQABAGgEAAQgFAAgKgGg");
	this.shape_347.setTransform(-76.2,0.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#DBB39E").s().p("AACAVQADgEgFgGQgNgMgJgOIgEgGQADgGAJAAQAFAAALASIAIALIAHAJQAHAJACAEQgBACgIACIgBAAQgGAAgIgHg");
	this.shape_348.setTransform(-79.2,-0.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#DBB39E").s().p("AgJBIQgFgFgEgOIgIgRIgCgDQgFgJAAgDQABgEAFgFQAHgJAAgDIAAgDQgBgFgDgDIgbgKIgegMIAAgGQgCgPAZgSIAeAUQAVAOAPAIIgGAFIgBABIAAACQAAAAABAAQAAAAABAAQAAABABgBQAAAAABAAIAOgJQANgJAIgEQAGAAAKAQQAKAPAOANQABAAAAAAQABABAAABQAAAAAAAAQAAABAAAAQgHAHgSgEQgLgGgHgFIgHgHIgBgCIgCACQgDABgOALQgNAKgFAPQAAAEAEAHQAFAKAAALQgCAMgGADIgDABIgBgBg");
	this.shape_349.setTransform(-87.6,0.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgnBMQgGgGgFgPIgHgQIgCgEQgLgNAMgMQAIgKgCgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgWgJIgjgOIgBAAIAAgCQgCgBADgQQADgPAWgNIABgBIABABIAdATQAZARARAIQANgLAMgFQAHgCAHAKQAFgHALABQAHABANASIADAEIAKgBQAIAAAHAFQAGAGAHAKIAIALIADADQgFANgWgMIgFAEQgMAGgPgNQgLAHgQgGQgUgKgFgHQgEAEgMAHQgMAKgDAMIAAAAIADAIQAHALAAAMIAAACQgCAOgKAEIgEABQgDAAgCgCg");
	this.shape_350.setTransform(-84.9,0.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#87695F").s().p("AgHAIQADgPAKgRIAEAAQgCABgIAPQgGANgDAUIACgRg");
	this.shape_351.setTransform(-98.3,-5.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#87695F").s().p("AAAAnIANgaIABgCQAJgRgCgRQgCgNgIgEQgGgDgIADIgPAEIgCABIAAgDQgDgRgKgCIgCgBQAJgJAIACQAKACACARIABADIACgBIANgEQAKgCAGACQAIAEACAOQACAQgJARIgBACQgGAOgOAWQgLAWgQAEQALgMAIgQg");
	this.shape_352.setTransform(-95.7,-4.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#87695F").s().p("AgOACQgBgVAegJQgEACgLAIQgMANABAiQgCgDgBgYg");
	this.shape_353.setTransform(-95.1,-4.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#A58577").s().p("AgdAyIgBgBIgCAAQgGAEgIgCQgEgDABgJQABgTAEgZQAGgbAKgSQAMgRAMACQAIACACARIAAADIADgBIAPgEQAJgCAHACQAIAEACAOQABAQgIARIgCACQgFAPgOAVQgOAXgOADIgBAAQgLAAgLgRg");
	this.shape_354.setTransform(-97.1,-4.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgfA2QgHAEgKgDQgHgFABgLQAAgIAFgfQAFgcANgYQANgUAPACQAHAAAHAVQANgGASADQALAGACAPQACANgKAXIgBACQgHAQgOAXQgOAWgRADIgCAAQgNAAgKgRg");
	this.shape_355.setTransform(-97.1,-4.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#66402A").s().p("AgEAGIAEgRIAFAGQABAEgBAMIAAABQgFgCgEgEg");
	this.shape_356.setTransform(-100,-8.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#66402A").s().p("AgLgFIAAgEIAHgJQAFAOALALQgDAHgGAFQgHgKgHgOg");
	this.shape_357.setTransform(-104.9,-7.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#66402A").s().p("AgKAOIAAgJQACgTAHgQQADAPAJASQgFAPgIANIgIgRg");
	this.shape_358.setTransform(-105.1,-12.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#66402A").s().p("AgJAAIAGgHQAGAGAHACQgDAEgFADIgLgIg");
	this.shape_359.setTransform(-101.5,-4.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#66402A").s().p("AgOAGQAIgMAEgQQAGAKALAIQgFANgIAOQgIgIgIgJg");
	this.shape_360.setTransform(-102.1,-7.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#66402A").s().p("AgJACQAGgOADgNQACANAIAMIgGAbQgHgMgGgNg");
	this.shape_361.setTransform(-102.9,-12.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#8E6042").s().p("AgDA3QgQgKgMgZQgCgHABgfQABgYAKgRQAGgGAIgBQADAKAIAbQAMAaARAMIgBASQABAagSAPQgEgBgOgMg");
	this.shape_362.setTransform(-102.8,-10.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AAQBIQgCABgOgJQgOgJgVgiIgBAAQgBgFAAgbQAAgdAMgVQAIgJALgCIACAAIABACQgBABAFAWQAGAWAdAfIABABIAAABQACAEgCAYQgCAYgSANIgBAAg");
	this.shape_363.setTransform(-102.8,-10.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#A87C69").s().p("AglAKQAigaASADQATADAEAFQgBAEgIAFQgIAHgOADIgKAAQgVAAgNgEg");
	this.shape_364.setTransform(-85.7,0.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgXASQgQgDgCgCIgEAAIADgDQAqgiAVAHQAXAHABAEIABABIgBACIgJAJQgIAJgTADIgOABIgSgBg");
	this.shape_365.setTransform(-85.8,0.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#C19987").s().p("AAAgFQgIgJgGADIgDgEQAIgCAJAGQAJAJAJANQgDAAAAAFIgPgVg");
	this.shape_366.setTransform(-77.6,5.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#C19987").s().p("AANAbQAEgCABgDQgCgGgKgPIgQgVQgIgGgGAHIgCgCQADgGAKAAQAEABALARIAJALIAFAKQAIAIACAEQgBACgIACIgEgBg");
	this.shape_367.setTransform(-80.6,3.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#DBB39E").s().p("AAAALIgIgMIgJgOQAIgCAJAFQAJAJAJAOQABAGgEAAQgFAAgKgGg");
	this.shape_368.setTransform(-77.6,5.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#DBB39E").s().p("AACAVQADgEgFgGQgMgMgJgOIgFgGQADgGAKAAQAEAAALASIAJALIAFAJQAIAJACAEQgBACgIACIgBAAQgGAAgIgHg");
	this.shape_369.setTransform(-80.6,3.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#DBB39E").s().p("AgJBIQgFgFgEgOIgIgRIgCgDQgFgJAAgDQABgEAFgFQAHgJAAgDIAAgDQgBgFgDgDIgbgKIgegMIAAgGQgCgPAZgSIAeAUQAVAOAPAIIgGAFIgBABIAAACQABAAAAAAQAAAAABAAQAAABABgBQAAAAABAAIAOgJQANgJAIgEQAGAAAKAQQAKAPAOANQABAAAAAAQABABAAABQAAAAAAAAQAAABAAAAQgHAHgSgEQgLgGgHgFIgHgHIgBgCIgCACQgDABgOALQgNAKgFAPQAAAEAEAHQAFAKAAALQgCAMgGADIgCABIgCgBg");
	this.shape_370.setTransform(-89,5.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgnBMQgGgGgFgOIgHgRIgCgEQgLgMAMgNQAIgKgCgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgWgJIgjgOIgBAAIAAgBQgCgCADgQQADgPAWgNIACgBIABABIAcATQAZARASAIQAMgKAMgGQAHgCAIALQAEgIALABQAHABAOASIACAEIAKAAQAIgBAHAFQAGAFAHALIAJALIACAEQgFAMgWgMIgFAEQgMAGgPgNQgLAGgQgEQgTgLgGgHQgEADgMAIQgLALgEALIAEAIQAGALABANIAAABQgDAOgKAEIgDABQgEAAgCgCg");
	this.shape_371.setTransform(-86.3,5.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#66402A").s().p("AgLgFIAAgEIAHgJQAFAOALALQgEAHgEAFQgIgKgHgOg");
	this.shape_372.setTransform(-106.3,-3.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#66402A").s().p("AgKAOIABgJQAAgTAJgQQABAPAKASQgGAPgGANIgJgRg");
	this.shape_373.setTransform(-106.5,-8.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#66402A").s().p("AgJAAIAHgHQAEAGAIACQgDAEgFADIgLgIg");
	this.shape_374.setTransform(-102.9,0.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#C19987").s().p("AA2AuQANgDgHgFQgHgFgHgPQgHgQgEgDQgHgBgQAGQgOAIgFAAQgCgHAEgDIghgVIgfgXIAHgEQAHAHAUAQQAVAQAOAIQgEAJgCgCQABAAAAABQAAAAABAAQAAAAABAAQAAAAAAAAIANgIQAOgGAJgDQAGABAJAPQAHAPANAQQABABAAABQABAAAAABQAAABAAAAQAAAAgBAAQgDAEgHAAIgFgBg");
	this.shape_375.setTransform(-88.1,1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#C19987").s().p("AgJAiQAJgMgFgOQgFgLAAgKQAFgMAQgIQgLAKgFAMQAAAEADAHQACAJAAAMQgBALgIACg");
	this.shape_376.setTransform(-89.5,8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#C19987").s().p("AAKAOIgKgRQgHgKgGADIgDgEQAJgBAIAGQAIAJAIAPIgHgBg");
	this.shape_377.setTransform(-77.8,4.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#C19987").s().p("AALAcQAEgCAAgDQAAgGgJgPIgNgXQgIgHgHAHIgBgDQADgFAKABQAEAAAKATIAHAMIAFAKIAIANQgCADgHAAIgEgBg");
	this.shape_378.setTransform(-80.8,3.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#DBB39E").s().p("AAAANQgDgIgFgFIgIgOQAJgBAIAGQAIAJAIAPIgRgCg");
	this.shape_379.setTransform(-77.8,4.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#DBB39E").s().p("AAAAUQADgCgDgIQgMgMgHgQIgEgGQADgFAKABQAEAAAKATIAHAMIAFAKIAIANQgCADgHAAIgBAAQgGAAgIgJg");
	this.shape_380.setTransform(-80.8,3.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#DBB39E").s().p("AgSBKQgEgGgDgOIgGgSIgBgDQgFgJABgDQABgEAFgFQAIgIABgEIAAgCQgBgFgCgDIgZgNIgdgPIAAgGQAAgQAagOIAbAXQAVAQAOAKIgHADIgBACIAAABQAAABABAAQAAAAABAAQAAABABAAQAAAAABgBIAPgIQANgHAJgDQAGAAAJASQAHAPANANQABABAAABQAAABABAAQAAABAAAAQgBAAAAAAQgHAHgRgHQgLgFgGgIIgGgGIgBgCIgCABIgTAJQgNAKgGAPQgBADADAIQAFALAAALQgEALgHADIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_381.setTransform(-89.2,3.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgwBNQgFgGgDgPIgGgSIgBgDQgKgOANgMQAJgIgCgDIgBgEIgVgLIghgRIgCgBIAAgBQgBgBAEgQQAFgPAXgLIACAAIABAAIAaAXQAYATAQAJQAOgIAMgEQAHgCAGAMQAGgIALACQAGACAMAUQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABIAKAAQAIABAHAGQAFAEAGALIAHANIACAEIgbgDIgFAEQgNAFgNgOQgMAFgPgHQgTgNgEgGIgSAJQgMAJgFALIAAABIADAIQAFAKAAAOIAAABQgEANgLAEIgCAAQgEAAgDgDg");
	this.shape_382.setTransform(-86.5,3.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#87695F").s().p("AgHAHQAEgNAMgRIADAAIgLAPQgHAMgFAUQAAgCAEgPg");
	this.shape_383.setTransform(-99.2,-3.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#87695F").s().p("AgHApIAOgZIABgCQALgQAAgQQgBgOgHgFQgGgDgIABIgPADIgDABIAAgDQgBgRgJgEIgDAAQAKgIAIACQAKAEABARIAAACIACAAIANgDQAKgBAGADQAIAFABANQAAARgLAQIgBABQgIAOgPAVQgOAUgQACQAMgKALgPg");
	this.shape_384.setTransform(-96.3,-2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#87695F").s().p("AgQABQACgVAfgHQgFACgLAIQgOALgCAiQgCgDABgYg");
	this.shape_385.setTransform(-96.1,-1.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#A58577").s().p("AghAvIgBgBIgBAAQgHADgIgDQgEgDACgJQADgTAHgYQAIgaAMgRQANgQAKADQAKAEABARIAAACIACAAIAQgDQAKgBAFADQAIAFABANQAAARgLAQIgBACQgIAOgQAUQgQAVgOABQgMAAgJgTg");
	this.shape_386.setTransform(-98.2,-2);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgkAzQgHAEgKgFQgGgFACgMIAJgjQAHgeAPgXQAQgSANAEQAIAAAFAWQAOgFASAFQAKAGAAAQQACANgOAXIAAABQgJAPgRAWQgQAVgQABQgOgBgKgTg");
	this.shape_387.setTransform(-98.2,-2.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#66402A").s().p("AgKgGIAAgEIAIgIQAEAOAJAMIgJALQgGgKgGgPg");
	this.shape_388.setTransform(-105.6,-6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#66402A").s().p("AgKAOIABgKQADgTAIgPQACAQAHATQgHAOgIAMIgGgRg");
	this.shape_389.setTransform(-105.4,-11.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#66402A").s().p("AgJAAIAIgHQADAGAIADQgDAEgFACQgCgBgJgHg");
	this.shape_390.setTransform(-102.6,-2.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#66402A").s().p("AgFAFIAFgQIAGAGIgCAQIAAABQgEgDgFgEg");
	this.shape_391.setTransform(-100.7,-6.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#66402A").s().p("AgOAEQAJgLAFgQQAFAMAKAIQgGANgJANQgIgIgGgLg");
	this.shape_392.setTransform(-102.8,-5.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#66402A").s().p("AgJAAQAIgNADgNQADAOAFANIgIAaQgGgNgFgOg");
	this.shape_393.setTransform(-103.2,-10.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#8E6042").s().p("AgHA3QgPgNgKgZQgBgIAEgeQAEgYAMgPQAGgHAHgBQABAMAIAbQAJAcAPAMIgCATQgDAZgSANQgFgBgMgMg");
	this.shape_394.setTransform(-103.3,-8.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AAJBJQgBABgMgLQgOgKgSgkIAAAAQgBgFACgbQADgdAPgUQAIgIAKgBIACABIAAACQgBAAAFAXQAEAWAaAiIABABIgBABQABAEgEAYQgEAYgTAKIgBABg");
	this.shape_395.setTransform(-103.4,-8.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#9B0202").s().p("AAAALQgLAAgLgHQAZAJAJgWIALgCIgFAMIgCAJQgEACgHAAIgFgBg");
	this.shape_396.setTransform(-83.2,7.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#CC0000").s().p("AAAAQQgNAAgLgLIABgHIABgNQAFAGARAEQASACAHgDIgEAMIgDAJQgEABgJAAIgFAAg");
	this.shape_397.setTransform(-83.4,6.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#840303").s().p("AAAAFQgSgFgEgEQAEgCASACQAVAEACADQgCADgJAAIgMgBg");
	this.shape_398.setTransform(-83.3,5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgeAKIAAgBIADgbIgBgBIACgBQgDgEAfACQAfAIgEAFIABACIgBAAIgJAdIgBAAQgCABgRABQgQgBgOgNg");
	this.shape_399.setTransform(-83.3,6.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#D4F0FF").s().p("AAAACQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAg");
	this.shape_400.setTransform(-77.2,11.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#1775AA").s().p("AgLAMIgBgCQAJADAGgJQADgEABgDQABgGgDgEQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAEAEAAAHQgBAEgEAEQgGAGgFAAQgEAAgEgCg");
	this.shape_401.setTransform(-76.9,12.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#2494E0").s().p("AgJAMQgIgIAIgLQAFgGAFgBQAFAAAEADQAFAFgBAGQgBAEgDAEQgGAHgFAAQgEAAgEgDg");
	this.shape_402.setTransform(-77.1,12.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgMAQQgMgMAMgOQAGgHAGgBQAIgBAFAEQALAMgKAOQgJAJgGAAQgFAAgGgEg");
	this.shape_403.setTransform(-77.1,12.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#192023").s().p("AgWAIQglgIghgPIAIgCQAhAOAiAGQAgAIAGAAQAmgJAZgLIAJABIgeANQgTAIgXAEIgrgJg");
	this.shape_404.setTransform(-82.9,8.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#273035").s().p("AgVAOQgmgJghgNIAfgHIAegIIAnAIQAjAHAyAHIgeAMQgTAIgXAFIgqgKg");
	this.shape_405.setTransform(-82.9,7.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#3C474C").s().p("Ag3AWQgCgKAEgdIAAgEQAbANAfAIQAiAIASADIgCAFIgzgMQgdgHgagNIAAAFQgDAVABANIgCgBg");
	this.shape_406.setTransform(-87.4,9.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#192023").s().p("AAGAQQgYgKgegNQAeAIAZgBQAbgCAJgbIAGABIgHA6IgkgOg");
	this.shape_407.setTransform(-86,13.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#273035").s().p("AAIAeQgggOgjgRQgBgKADgeIABgFQAeAPAkAKIAyAKIgIA6QgLgDghgOg");
	this.shape_408.setTransform(-87,11.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#192023").s().p("AgmAnQAVgKARgDIAUgGIAIgfIAHgdIAFgCIgIAdIgJAkIgXAGQgQAFgXAJg");
	this.shape_409.setTransform(-77.2,11.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#3C474C").s().p("AgggOQAXgFATgJIAegOIgCAGQgZAOgpALIgGAzIgFADg");
	this.shape_410.setTransform(-77.2,11.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#273035").s().p("AgggOQAXgFATgJIAegOIgIAdIgJAkIgXAGQgQAFgXAJg");
	this.shape_411.setTransform(-77.2,11.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AAOA9IglgQQgkgPgqgVIgCAAIABgBIgBgPQAAgPADgTIABgCIABAAIAbgGQAZgFAQgGIAAAAIABAAIAnAIQAmAIA2AIIACAAIAAACIgHAXIgMAuIAAACIgCABIgVAFQgUAHgaALg");
	this.shape_412.setTransform(-83.1,10.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#A87C69").s().p("AgmAGQAlgWARAEQASAFAFAGIgLAIQgIAGgOABQgdgCgPgGg");
	this.shape_413.setTransform(-87.3,4.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgZAOIgRgFIgEgCIADgCQAsgdAXAJQAWAJAAAEIABABIgBABIgKAJQgKAIgSABQgRAAgQgEg");
	this.shape_414.setTransform(-87.5,4.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#C19987").s().p("ABFAUQgJgDgLgNQgLgMgFgCQgGgBgOALQgNAMgDABQgEgGADgEIgmgMIgkgPIAGgEIAhAOQAXALAQADQgBAJgCgBQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAgBIALgJQALgLAIgFQAGgBAMAPQAMAKAQALQABABABABQAAABABAAQAAABAAAAQAAAAgBABQgCAFgLACQALgIgHgCg");
	this.shape_415.setTransform(-86.6,-2.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#C19987").s().p("AAAAKQgGgKgDgJQACgOANgLQgIAMgBANQAAAEADAFQAIAJACALQgBAMgGADQAGgNgJgMg");
	this.shape_416.setTransform(-86.6,3.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#C19987").s().p("AAAgDQgKgHgGAEIgDgDQAIgEALAEQAJAIALALIgHACQgGgIgHgHg");
	this.shape_417.setTransform(-75.7,-2.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#C19987").s().p("AASAZQADgDAAgDQgCgGgMgNQgLgLgJgGQgKgFgEAIIgCgCQACgGAJgCQAFAAANAPIALAJIAHAIQAJAIADAEQgBACgHADIgCAAIgCAAg");
	this.shape_418.setTransform(-78.8,-2.5);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#DBB39E").s().p("AgHABIgMgLQAIgDALAEQAJAHALAMIgSADIgJgMg");
	this.shape_419.setTransform(-75.7,-2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#DBB39E").s().p("AAGAUQACgEgHgGQgOgKgLgMIgFgFQACgGAJgBQAFgBANAQIALAJIAHAIQAJAHADAEQgBACgHADIgEABQgFAAgHgFg");
	this.shape_420.setTransform(-78.8,-2.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#DBB39E").s().p("AAEBEQgEgFgGgMIgKgRIgCgCQgHgHAAgEQAAgDADgGQAHgLgCgDIAAgDQgCgFgDgBIgcgHIgggHIgBgFQgEgPAVgWIAhAPQAYALAPAFIgFAFIAAACIAAABQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIANgNQALgKAIgFQAGgBAMAOQAMANARAMQAAAAABABQAAAAABABQAAAAAAABQAAAAgBAAQgFAJgSgCQgMgDgIgGIgIgGIgCgCIgBACQgDABgMAOQgNAMgCAQQABADAFAHQAHAJADALQgBAMgHAEIgDABIgBAAg");
	this.shape_421.setTransform(-87.3,0.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgYBIQgHgFgHgOIgJgQIgDgCQgNgLAKgPQAGgJgDgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgXgFIglgIIgBgBIgBgBQgBgBAAgQQAAgPAUgRIABgBIACABIAfAOQAcANASAEQANgMAIgHQAHgEAJAKQADgIALgBQAHAAARAQIADADIAJgCQAIgCAIAEQAHAFAIAJIALAMIACACIgZAFIgFAEQgLAHgQgJQgKAIgRgCQgVgIgHgHQgEAFgJALQgKAKgCAMIAAAAIAFAHQAIAKACAMIAAABQABAOgKAHIgFABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_422.setTransform(-84.5,0.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#87695F").s().p("AgFAJQAAgOAHgVIAEAAQgBABgFAQQgFAPABAUIgBgRg");
	this.shape_423.setTransform(-98.5,-4.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#87695F").s().p("AAMAkIAJgdIABgCQAGgSgFgQQgEgNgIgDQgHgBgHADIgOAHIgCACIgBgDQgGgQgJgCIgDABQAIgLAIABQAKABAFAQIABADIADgCQADgDAIgDQAJgEAHABQAJADAEANQAEAQgGAUIAAACQgEANgKAYQgKAYgNAGQAIgNAGgRg");
	this.shape_424.setTransform(-96.3,-3.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#87695F").s().p("AgLAFQgEgVAcgOQgEADgJAKQgLAPAIAhQgDgCgFgYg");
	this.shape_425.setTransform(-95.4,-3.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#A58577").s().p("AgUA1IgBgCIgCABQgGAFgIgBQgFgCgBgJQgBgTAAgaQABgaAHgUQAJgTAMAAQAKABAFAQIAAADIACgBQAFgEAJgDQAJgEAHACQAIADAEANQAEAPgGAUIAAACQgEAOgKAYQgKAYgQAGIgCAAQgIAAgMgNg");
	this.shape_426.setTransform(-97.1,-3.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgXA5QgGAFgLgCQgGgDgCgMQgBgHAAgfQAAgdAJgZQAKgXAPAAQAJgBAIATQAMgIATAAQAKAEAFAPQAFAMgHAbIAAACQgFAPgKAZQgLAYgRAGIgDABQgLAAgMgOg");
	this.shape_427.setTransform(-97,-3.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#66402A").s().p("AgLgCIgBgFIAFgKQAIAMAMAKQgCAHgEAFQgJgHgJgMg");
	this.shape_428.setTransform(-105.4,-5.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#66402A").s().p("AgIAPIgBgJQgDgTAGgRQAGAPALAQQgDAQgHAOIgJgQg");
	this.shape_429.setTransform(-106.3,-10.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#66402A").s().p("AgJACIAFgIIAOAGQgCADgEAEIgNgFg");
	this.shape_430.setTransform(-101.4,-2.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#66402A").s().p("AgFAHIACgRIAFAFQACAEABALIAAABIgKgEg");
	this.shape_431.setTransform(-100.5,-7.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#66402A").s().p("AgMAIQAFgNABgQQAIAJALAFQgBAPgGAOQgJgGgJgIg");
	this.shape_432.setTransform(-102.5,-5.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#66402A").s().p("AgJADQAEgOABgOQAEAMAJANQABALgCAPQgJgLgIgMg");
	this.shape_433.setTransform(-104.1,-10.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#8E6042").s().p("AADA4QgPgIgQgXQgDgFgEgfQgDgYAIgTQAEgHAIgDQAEALAOAYQAPAYATAJIACASQAFAZgPARQgFABgSgJg");
	this.shape_434.setTransform(-103.6,-8.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AAaBGQgBABgQgHQgOgGgbgeIAAAAIAAgBQgCgDgFgbQgFgdAJgXQAGgKALgEIACAAIABACQgBABALAUQAIAVAhAaIABAAIABABQABAEADAYQACAZgQAPIAAAAg");
	this.shape_435.setTransform(-103.7,-8.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#9B0202").s().p("AgTAMQAaACADgXIAKgFIgBAOIAAAIQgEADgMACIgIACQgGAAgIgDg");
	this.shape_436.setTransform(-80.4,1.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#CC0000").s().p("AgTAKIgCgJIgCgLQAHAFARgBQASgDAFgFIAAAOIAAAJQgFACgNADIgHABQgJAAgJgFg");
	this.shape_437.setTransform(-80.9,1.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#840303").s().p("AgWABQACgCAUgDQAVgBACAEQgDADgTADQgTAAgEgEg");
	this.shape_438.setTransform(-80.9,-0.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgXARIAAgBIgFgaIgBgBIABgBQgDgEAfgGQAfAAgCAFIABACIgBABIgBAeIgBAAQgCACgRAEIgIABQgLAAgMgGg");
	this.shape_439.setTransform(-80.9,0.9);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#D4F0FF").s().p("AgCAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAABABQAAAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_440.setTransform(-73.3,4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#1775AA").s().p("AgIAPIgCgCQAKAAADgKQACgDAAgFQgBgGgEgDIAEABQAGADABAHQAAADgCAFQgGAKgGAAIgFAAg");
	this.shape_441.setTransform(-72.8,4.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#2494E0").s().p("AgFAOQgLgGAGgMQADgHAGgDQADgCAFADQAGADAAAHQABADgCAFQgGALgGAAIgFgCg");
	this.shape_442.setTransform(-73.1,4.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgHATQgOgIAGgRQAEgIAJgDQAEgDAGADQAPAJgHAQQgHAMgJAAIgHgBg");
	this.shape_443.setTransform(-73.1,4.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#192023").s().p("AhaASIAHgEQAjAFAjgCIAogBQAhgRAWgUIAJgBIgaAVQgRALgUALIgsACIgLAAQggAAgfgFg");
	this.shape_444.setTransform(-80,1.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#273035").s().p("AhaASIAcgPQARgHAKgHIAngCIBXgJQgIAIgSANQgRALgUALIgsACIgGAAQgjAAghgFg");
	this.shape_445.setTransform(-80.1,1.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#3C474C").s().p("AgvAWQgEgKgFgdIgBgEQAeAGAgAAQAjAAASgCQAAADgBADQgTABghAAQgfgBgbgFIAAAEQAEAWAEAMIgCAAg");
	this.shape_446.setTransform(-83.8,6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#192023").s().p("AALAZQgagDgigGQAgACAYgKQAagIABgbIAGgBIAJA5IgmgEg");
	this.shape_447.setTransform(-81.4,7.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#273035").s().p("AARAaQgigFgmgIQgEgKgFgdIAAgEQAhAHAlgBIAzgCIAJA5IgxgFg");
	this.shape_448.setTransform(-83,6.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#192023").s().p("AgbAvQASgOANgIIAUgLIgBggIAAgdIAEgEIAAAfIABAkIgWAMQgNAJgUAPg");
	this.shape_449.setTransform(-73.2,4.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#3C474C").s().p("AgegFQAVgLAPgOIAZgVIAAAGQgUAUglAWIAIA0IgEADg");
	this.shape_450.setTransform(-73.7,4.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#273035").s().p("AgfgFQAVgLAQgOIAZgVIAAAfIABAkIgVAMQgOAJgTAPg");
	this.shape_451.setTransform(-73.6,4.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AAmA7IgngGQgngEgvgJIgBAAIAAgBIgFgQQgEgPgCgSIAAgBIACgBIAYgMQAXgNANgJIABAAIAogCQAogDA1gHIADAAIAAACIgBAZIABAvIAAABIgBACIgTALQgSALgWARIgBABg");
	this.shape_452.setTransform(-80.1,4.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#A87C69").s().p("AgjAQQAdgfASAAQATgBAFAFQgBAEgHAHQgGAHgNAFQgTAEgOAAIgLAAg");
	this.shape_453.setTransform(-85,-0.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgnAUIgEAAIADgEQAkgnAWADQAXADACAEIABABIgBABQAAACgHAJQgHAKgRAHQgQAEgQAAQgRAAgCgBg");
	this.shape_454.setTransform(-85.1,-0.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#C19987").s().p("AAAAKQgGgKgDgKQACgNANgMQgIANgBANQAAAEADAFQAIAIACAMQgBAMgGADIgBABQAHgOgJgMg");
	this.shape_455.setTransform(-86.8,3.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#C19987").s().p("AgBgEQgJgGgJACIAAgBQAIgEALAEQAJAIALAMIgHABQgFgJgJgHg");
	this.shape_456.setTransform(-75.8,-2.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#C19987").s().p("AANACQgNgNgJgFQgOgEgIAIIgBgCIABAAIAFgEQAGgEAHAAQAFgCAMANIALALIAHAGQAIAIADAEQgBADgKACIgBABQAGgHgOgPg");
	this.shape_457.setTransform(-79.3,-2.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#C19987").s().p("AA+AVQgGgEgLgLQgLgKgGgEQgGgBgHAHQgIAGgHAEQgIACABgGQAAgEABgBQgQgEgTgJIgfgQIABgCIAhAPQAXAKAPAGQgBAGgCAAQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIALgKQAJgHAGgBQAGAAALALQAKAKARAMQABABABAAQAAABAAAAQABABAAAAQgBABAAAAQgEAIgRABQASgGgHgGg");
	this.shape_458.setTransform(-86.6,-2.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#DBB39E").s().p("AAIBEQgGgFgEgMIgKgQIgDgDQgGgHAAgEQgBgDAFgGQAGgLgCgDIAAgDQgCgFgEgBIgZgFIglgIQgHgYAZgTIAkAQQAXAKAPAFIgFAGIgBABIABACQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIANgMQAIgHAHgCQAGABAKALQALAMARAMQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQgGAIgSAAQgMgDgHgFIgIgHIgCgBIgBABQgCABgLALQgKAIgCAQQAAAEAGAGQAHAJADAMQgBAMgHAEIgCAAIgCAAg");
	this.shape_459.setTransform(-87.7,0.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#DBB39E").s().p("AAEASIgBgBQgBgDgCgCQgQgMgKgJIgGgFIABAAIAFgFQAGgDAHgBQAFgBAMAMIALAMIAHAGQAIAHADAEQgBADgKADIgFABQgGAAgHgGg");
	this.shape_460.setTransform(-79.3,-2.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#DBB39E").s().p("AgHABIgMgLQAIgDALAEQAJAIALALIgSADIgJgMg");
	this.shape_461.setTransform(-75.8,-2.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgXBIQgHgGgHgNIgJgPIgDgEQgNgLAKgOQAGgJgCgDQgCgEgJgCIgdgFQgVgFgFgDQgKgeAdgUIAjAQQAcAMATAFQAKgKAJgDQAFgBAGAGIABgBIAHgFQAGgFAJAAQAGgCAPAPIADACIAKgCQAIgBAIAEQAHAEAIAKIAKALIADADIgaAEIgFAFQgLAHgTgIQgJALgVgCQgVgGgGgHQgDADgIAHQgIAJgBAMIAFAHQAIAJACANIABABQgBAOgJAHIgFABIgEgBg");
	this.shape_462.setTransform(-84.6,0.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#840303").s().p("AgUABQAFgBAPgBQAQgBAFABQgFABgPACIgIAAQgJAAgEgBg");
	this.shape_463.setTransform(-80.9,0.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#9B0202").s().p("AgTAHQAOABAIgKQAMgDAFgCIgBALIgQADIgIABIgOgBg");
	this.shape_464.setTransform(-80.5,1.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#CC0000").s().p("AgVAGIgCgKQAGADASgBQASgCAFgDIgCAKIgSAEIgIABQgIAAgJgCg");
	this.shape_465.setTransform(-80.9,1.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgXAMIgBgBIgEgPIgCgBIADgCQgDgCAegFQAegBgBAEIACABIgBACIgDARIgBABIgSAEIgLABQgKAAgKgDg");
	this.shape_466.setTransform(-81,1.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#D4F0FF").s().p("AgCAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_467.setTransform(-73.5,3.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#1775AA").s().p("AgIAPIgCgCQAJABAEgLQADgDgBgEQAAgGgFgEQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAGADABAHQAAADgCAFQgFAKgHAAIgFAAg");
	this.shape_468.setTransform(-72.9,4.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#2494E0").s().p("AgFAPQgLgHAGgMQADgHAGgCQADgCAFACQAGADAAAIQABADgCAEQgGAKgGAAIgFAAg");
	this.shape_469.setTransform(-73.1,4.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgHATQgPgJAHgRQAEgIAJgDQAFgDAFADQAPAJgHAQQgIANgIAAIgHgBg");
	this.shape_470.setTransform(-73.1,4.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#192023").s().p("AhaARIAHgEQAjAFAkgBQAggBAGgBQAjgQAVgUIAJgBQgJAIgQANQgSALgUAKIgrACIgLABQghAAgfgGg");
	this.shape_471.setTransform(-80.1,1.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#273035").s().p("AhaARIAbgOIAcgPIAngCQAlgCAygGQgIAIgRANQgSALgUALIgsACIgFAAQgkAAghgGg");
	this.shape_472.setTransform(-80.1,1.4);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#3C474C").s().p("AgvAVQgEgIgFgdIgBgFQAeAGAgAAIA1gBIAAAGQgUABghAAQgfgBgbgGIAAAEQADAWAEAMIgBgBg");
	this.shape_473.setTransform(-83.8,5.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#192023").s().p("AALAZQgagEghgGQAfACAYgJQAagIABgbIAHgBIAIA5IgmgEg");
	this.shape_474.setTransform(-81.5,7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#273035").s().p("AARAaQgigFgmgJQgEgJgFgdIAAgEQAhAGAkAAIA0gCIAIA5IgwgFg");
	this.shape_475.setTransform(-83.1,6.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#192023").s().p("AgbAvQATgOANgJIATgKIAAggIAAgdIADgEIABAfIAAAkIgVAMQgOAJgUAPg");
	this.shape_476.setTransform(-73.4,4.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#3C474C").s().p("AgfgFQAWgLAPgOIAZgUIABAFQgWAUgkAVIAIA0IgEADg");
	this.shape_477.setTransform(-73.8,4.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#273035").s().p("AgfgFQAWgLAOgOIAagUIAAAeIABAkIgVAMQgOAJgTAOg");
	this.shape_478.setTransform(-73.7,4.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AAmA7IgogGQgngGgugJIgBAAIgBgBIgFgQQgEgOgBgSIAAgCIABAAIAZgNQAWgLAOgKIABAAIAogDQAngCA2gGIADAAIAAADIgBAXQgBAWACAaIAAABIgBABQgCAAgSALQgRALgXATIAAAAg");
	this.shape_479.setTransform(-80.1,4.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#A87C69").s().p("AgjAQQAdgfASAAQATAAAFAFQgBAEgHAGQgGAIgNAEQgSAEgPAAIgLAAg");
	this.shape_480.setTransform(-85,-0.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgUAVQgQAAgCgBIgFgBIADgDQAkgnAWADQAYAEABADIABABIgBABIgHALQgHAKgRAHQgPAEgOAAIgDAAg");
	this.shape_481.setTransform(-85.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_334,p:{x:-97.7,y:6.3}},{t:this.shape_333,p:{x:-97.6}},{t:this.shape_332},{t:this.shape_331,p:{x:-110}},{t:this.shape_330},{t:this.shape_329,p:{x:-111.9}},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324,p:{x:-106.4,y:-0.7}},{t:this.shape_323},{t:this.shape_322}]}).to({state:[{t:this.shape_334,p:{x:-95.1,y:6.4}},{t:this.shape_333,p:{x:-95}},{t:this.shape_342},{t:this.shape_331,p:{x:-107.4}},{t:this.shape_341},{t:this.shape_329,p:{x:-109.3}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_324,p:{x:-103.8,y:-0.6}},{t:this.shape_336},{t:this.shape_335}]},17).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.shape_365,p:{x:-85.8,y:0.7}},{t:this.shape_364,p:{x:-85.7,y:0.8}},{t:this.shape_363,p:{x:-102.8,y:-10.3}},{t:this.shape_362,p:{x:-102.8,y:-10.2}},{t:this.shape_361,p:{x:-102.9,y:-12.5}},{t:this.shape_360,p:{x:-102.1,y:-7.5}},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356,p:{x:-100,y:-8.8}},{t:this.shape_355,p:{x:-97.1,y:-4.4}},{t:this.shape_354,p:{x:-97.1,y:-4.3}},{t:this.shape_353,p:{x:-95.1,y:-4.2}},{t:this.shape_352,p:{x:-95.7,y:-4.3}},{t:this.shape_351,p:{x:-98.3,y:-5.9}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344,p:{x:-87.8,y:4.7}},{t:this.shape_343,p:{x:-86.7,y:-2.4}}]},1).to({state:[{t:this.shape_365,p:{x:-87.2,y:5.2}},{t:this.shape_364,p:{x:-87.1,y:5.3}},{t:this.shape_363,p:{x:-104.2,y:-5.8}},{t:this.shape_362,p:{x:-104.2,y:-5.7}},{t:this.shape_361,p:{x:-104.3,y:-8}},{t:this.shape_360,p:{x:-103.5,y:-3}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_356,p:{x:-101.4,y:-4.3}},{t:this.shape_355,p:{x:-98.5,y:0.1}},{t:this.shape_354,p:{x:-98.5,y:0.2}},{t:this.shape_353,p:{x:-96.5,y:0.3}},{t:this.shape_352,p:{x:-97.1,y:0.2}},{t:this.shape_351,p:{x:-99.7,y:-1.4}},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_344,p:{x:-89.2,y:9.2}},{t:this.shape_343,p:{x:-88.1,y:2.1}}]},1).to({state:[{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375}]},2).to({state:[{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415}]},1).to({state:[{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455}]},3).to({state:[{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415}]},2).to({state:[{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455}]},2).to({state:[{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415}]},2).to({state:[{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455}]},3).to({state:[{t:this.shape_365,p:{x:-87.2,y:5.2}},{t:this.shape_364,p:{x:-87.1,y:5.3}},{t:this.shape_363,p:{x:-104.2,y:-5.8}},{t:this.shape_362,p:{x:-104.2,y:-5.7}},{t:this.shape_361,p:{x:-104.3,y:-8}},{t:this.shape_360,p:{x:-103.5,y:-3}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_356,p:{x:-101.4,y:-4.3}},{t:this.shape_355,p:{x:-98.5,y:0.1}},{t:this.shape_354,p:{x:-98.5,y:0.2}},{t:this.shape_353,p:{x:-96.5,y:0.3}},{t:this.shape_352,p:{x:-97.1,y:0.2}},{t:this.shape_351,p:{x:-99.7,y:-1.4}},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_344,p:{x:-89.2,y:9.2}},{t:this.shape_343,p:{x:-88.1,y:2.1}}]},19).to({state:[{t:this.shape_365,p:{x:-85.8,y:0.7}},{t:this.shape_364,p:{x:-85.7,y:0.8}},{t:this.shape_363,p:{x:-102.8,y:-10.3}},{t:this.shape_362,p:{x:-102.8,y:-10.2}},{t:this.shape_361,p:{x:-102.9,y:-12.5}},{t:this.shape_360,p:{x:-102.1,y:-7.5}},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356,p:{x:-100,y:-8.8}},{t:this.shape_355,p:{x:-97.1,y:-4.4}},{t:this.shape_354,p:{x:-97.1,y:-4.3}},{t:this.shape_353,p:{x:-95.1,y:-4.2}},{t:this.shape_352,p:{x:-95.7,y:-4.3}},{t:this.shape_351,p:{x:-98.3,y:-5.9}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344,p:{x:-87.8,y:4.7}},{t:this.shape_343,p:{x:-86.7,y:-2.4}}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.shape_334,p:{x:-95.1,y:6.4}},{t:this.shape_333,p:{x:-95}},{t:this.shape_342},{t:this.shape_331,p:{x:-107.4}},{t:this.shape_341},{t:this.shape_329,p:{x:-109.3}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_324,p:{x:-103.8,y:-0.6}},{t:this.shape_336},{t:this.shape_335}]},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({_off:true,rotation:0,x:-93.4,y:-6.3},3).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},3).to({_off:true},1).wait(38).to({_off:false},0).to({rotation:15,x:-96.8,y:-1.6},4).to({_off:true,rotation:0,x:-103.6,y:-0.9},1).wait(22));

	// chair
	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#7F4721").s().p("AgOAAQAMgGAZAAIADAEQgBgBgRAAQgOAAgTAKQAAgBALgGg");
	this.shape_482.setTransform(-119.9,19);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#7F4721").s().p("AgHACQAGgMALgGIADABQgFABgUAfIAFgPg");
	this.shape_483.setTransform(-117.8,19.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#7F3C0F").s().p("AgIAXIABAAQAJgCABgYQgBgQgCgIQAHADABAYQgCAagHACQgEAAgDgFg");
	this.shape_484.setTransform(-128.7,28.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#C66D32").s().p("AgIACQACgZAIgCQAEAAADAGQgDgEgDAAQgIABgCAZQAAAPAFAIQgFgIgBgQg");
	this.shape_485.setTransform(-129.2,28.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#A85218").s().p("AgKAAQABgZAJgCQAJACACAZQgCAagJACQgJgCgBgag");
	this.shape_486.setTransform(-129,28.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgRBCQgBgaAFgSIAGgTQgBgEAAgHQAAgLADgIIgBgBQgCgRgJgFQgJgFgCABQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQACAAAIAGQAIAGAFANQADgIAGAAQAEAAADADQAAgPAMgOQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABgBAAQAAAAgBAAQgLAHAAAMQAAALABABIgBABQAFAJAAAPQAAAJgDAIIAAABIAGAIQAEAIAAANQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQACgMgEgGIgGgHQgEAJgHAAQgGgBgFgLIgHATQgFANAEAWQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_487.setTransform(-129.6,29.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#D18654").s().p("ABKDHQgqgDgxgnQgzgmgVhqQgLhHAEgzQAEg1ATgYQALgOAQAAIAHAAQgkASgCAvQgCAuAFAmQAKBuBVBNQAXARAaAHQAJAgATAJQgLAAgNgCg");
	this.shape_488.setTransform(-142.2,28.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#99582B").s().p("AAdDHIgBAAQALABAJAAQg0gZAYjRQAIhFAfgVQAMgIAIAAQgkgVgugUQgwgVgggGQAfAFAyAVQAwAVAmAWQgIAAgMAHQgfAVgIBGQgZDRA1AZIgEAAIgUgCg");
	this.shape_489.setTransform(-137.8,28.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#AF6533").s().p("AA6DHQgpgDgxgnQgzgmgVhqQgMhHAEgzQAEg1ATgYQAMgOAPAAQAcABA0AWQA2AWAqAYQgJAAgLAHQgfAVgJBGQgZDRA2AZQgLAAgOgCg");
	this.shape_490.setTransform(-140.7,28.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#A5531C").s().p("AgOCJQgbgEgKguQANgDAKgFQA0gfAMg7QAMg/AAg+QAJAwgKBrQgIBVgfAXQgIAIgOACg");
	this.shape_491.setTransform(-129.7,34.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#E58442").s().p("AAGCkQg7gKAbjeQAFgpALgUQAKgUAJgGQATgKAGADIACABQgIgBgOAIQgKAGgJAUQgKAUgGApQgZDVA1ASg");
	this.shape_492.setTransform(-131.9,31.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#CC6825").s().p("AgLCkQg9gKAajeQAFgpALgUQALgUAKgGQASgKAGADQARALAGAHQAbAigQCbQgIBVgeAXQgKAIgMADg");
	this.shape_493.setTransform(-130,31.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AAhDMQgigBg2giQg1ghgXhwQgMhJADg5QADg6ATgZQANgPASgBQAeABA5AYQA6AYAoAZIABAAIABABQARALAGAIQAdAjgQCdQgIBXggAZQgQANgbAAIgUgCg");
	this.shape_494.setTransform(-138.2,28.2);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#A5531C").s().p("AiSCGQAFgHADgKQBJgFBAgdQA+gdAmg2QAng0gEhQIAEgDQADAFABAFQAIAhgEA3QgEA2gZAjQgQARgoASQgoASgtAOQgwANglAEIgPAAQgOAAgIgCg");
	this.shape_495.setTransform(-112.3,31);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#CC6825").s().p("AiSCGQAMgSAFglQAGgkACgjIABgrQBJABA1gVQA3gWAigYQAigZAJgJQADAFABAFQAIAhgEA3QgEA2gZAjQgQARgoASQgoASgtAOQgwANglAEIgPAAQgOAAgIgCg");
	this.shape_496.setTransform(-112.3,31);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#99582B").s().p("AgGgCQAIgUgHgTQgJgSgVgHQAigBAlALQAnAKAUAVQgKAMgyAfQgvAhhSARQA4gRAgg1g");
	this.shape_497.setTransform(-108.3,19.6);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#AF6533").s().p("AhWCbQgOgMgbgkQgagkgXgsQgWgqgCgjIAAgKQAEgXAVgJIA4gRQAygPA5gPQA3gOAagCQAigBAnALQAoALATAUQgHAJgiAYQgiAZg3AVQg4AVhHgBIgCAAIAAADIgBAkQgCAjgFAoQgGAogMASIgCgCg");
	this.shape_498.setTransform(-118.9,28.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AhaCgIgCAAIAAgBIgEgCQgPgOgdgnQgdgngWgvQgWgtADgjQAEgaAXgKIAAgBIA5gRQAxgPA4gPQA2gPAagCQAggBArALQAqAMAWAWIACABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAgBAAQAFAGACAHQAIAigGA6QgGA4gbAlQgZAbhEAZQhFAYg+AFIgOABQgSAAgKgEg");
	this.shape_499.setTransform(-118.3,28.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#7F3C0F").s().p("AgBAQQgCAAgCgNQAJgFACgNIAAADIAAAHQgEAVgDAAIAAAAg");
	this.shape_500.setTransform(-90.2,15.9);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#C66D32").s().p("AgDAAQACgRADgEIABgBIACACIgBgBIgBABQgDAEgDARQAAARADAFQgEgEABgTg");
	this.shape_501.setTransform(-90.3,15.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#A85218").s().p("AgFAAQADgRACgFIABAAQAEAAABARIAAAFQgEAXgDAAQgEAAAAgXg");
	this.shape_502.setTransform(-90.2,15.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#99582B").s().p("AAPB+QgwgLgfgSQgPgKgIgkQgIgjAAgpQAAghAFgcQAIgqARgHQgTAxAHAwQAHAtAoAjQAxAkA8AEQADAjALAPIADADIgIABQgeAAgrgKg");
	this.shape_503.setTransform(-102.2,18.2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#D18654").s().p("ABCCIIgBgBQgOgVgCgzQgBgyAFgwQAFgyAFgQQAHgSAKgEQgegGgxgDQgxgCgnABIAEgCQAnAAAyACQA0ACAeAGQgLAFgGASQgGAQgFAxQgFAwACAzQACAzAOAUIACADIgJAAg");
	this.shape_504.setTransform(-100.2,18.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#AF6533").s().p("AAIB+QgvgLgggRQgPgLgHgjQgIgkAAgoQgBghAGgdQAJgtATgEQAngBAxACQAzACAgAHQgLAEgHASQgFAQgGAyQgEAvABAzQACAzAOAUIADAEIgIAAQgeAAgsgKg");
	this.shape_505.setTransform(-101.6,18.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgSAqQgBgPAEgIIAGgIIAAAAQgBgIABgFIACgMQAAgPgGgDQgFgEgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQADAAAIARQACgEADgCQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIADABQACgKALgEQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgKgBAAAGIgBAJQADAKgBANIgCALQAGACAAAVQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAFgPgHgCQgEAJgEABQgFgBgCgIIgGAIQgEAFAEAMQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_506.setTransform(-90.2,15.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#A5531C").s().p("AgQB6QgKgOgDghQAvgYAHg9QAIg+gWg1QAPATADA2QADA0gIA2QgLA+gPAJIgFABQgFAAgEgEg");
	this.shape_507.setTransform(-90.7,19);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#E58442").s().p("AgGB8QgNgTgBgyQgCgxAFgvQAEgxAGgRQAGgRAHgDQAMAAACADIACACQgEgDgIABQgJADgEARQgGARgEAxQgFAvACAyQABAxANATIABABQgDgBgCgDg");
	this.shape_508.setTransform(-91.8,18.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#CC6825").s().p("AgPB7QgNgSgCgyQgBgyAEgvQAFgxAFgRQAGgQAKgDQAJgBACADQARASADA3QAEA1gJA3QgLA+gPAJIgFABQgFAAgEgFg");
	this.shape_509.setTransform(-90.8,18.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgCCEQg3gMgigSQgQgLgIgiQgJgigBgmQgBgpAGggQADgSAIgPQAJgQANgDIABAAIAxAAQAoABAtADQArAEALAJIABABQAOANAGA2QAHA3gIA3QgDAUgJAcQgIAbgOAHIgDACIgBAAIgCAAIgTACQgbAAgmgJg");
	this.shape_510.setTransform(-99.8,18.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#B75D20").s().p("AA+DJQgmhCgXhaQgVhYgEhlIAAgfQgegHgNgKIgCgJQAKAQAqAKIABAfQAEBlAVBZQAWBaAnBCIgIgBg");
	this.shape_511.setTransform(-150.9,0);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#E5813E").s().p("AAvDIQgHgMgdhIQgbhIgUhbIgLguQgMgygKg6IAIAIQAJA2ALAuIAKAuQAWBbAbBIQAcBIAIAMIAQABIAAABIgXgCg");
	this.shape_512.setTransform(-150.9,0);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#CC6825").s().p("AAvDIQgHgMgdhIQgbhIgUhbIgLguQgMgygKg6QAKAQAqAKIABAfQAEBlAVBZQAWBaAnBCIgXgCg");
	this.shape_513.setTransform(-150.9,0);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#B75D20").s().p("Ag3C9QhSghgzhJQgegsgCgyQgCg0ALg2QAogKA2gVQBLgfBXgWQBZgWBXAYQgIAzgRA9IgNArQgNAqgJAmQgIApAAA3IABA2QgGAEgnASQgaAEgZAAQg6AAg3gXg");
	this.shape_514.setTransform(-124.8,-5.7);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#E58442").s().p("AAgC6QgkhAgXhbQgXhZgEhkIAAgcIAIABIgBAbQAEBkAYBZQAUBbAnBAIAPABIgXgBg");
	this.shape_515.setTransform(-146.7,1.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#CC6825").s().p("AifDrQgmhBgXhbQgXhYgEhlIAAgcQARADAYgCQAsgFBIgdQBMgfBWgWQBZgWBXAYQgIAzgRA8IgNAsQgNApgJAnQgIAogBA4QAAAYACAeQgHAFguATQgtAThKAQQg8AOhKAAIgigBg");
	this.shape_516.setTransform(-127.4,-3.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#99582B").s().p("AikgxQAphVAxggQAwgfAkgIIALADQAxARAoAYQAnAZAYAbQAxA5AABlQAAAjgGApQhYgYhYAUQhVAVhLAfQg8AXgpAKQAPiqAqhVg");
	this.shape_517.setTransform(-124.2,-38.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#D18654").s().p("AiBDOQAAhdAShOQAShLAhg2QAxhIAygWQA0gWAnADQgngBgwAYQgvAXgtBDQghA2gSBLQgSBOAABdIAWACIgGAAQgQAAgLgCg");
	this.shape_518.setTransform(-139.3,-38.8);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#AF6533").s().p("Aj7DOQAAhdAShOQAShMAig1QAshCAwgYQAwgYAnABQAlAAAQAFQAxARAoAZQAnAYAXAbQAyA6AABkQAAAjgGApQhYgYhYAVQhWAUhLAfQhHAdgtAFIgTABQgOAAgLgCg");
	this.shape_519.setTransform(-127.1,-38.8);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#9B592C").s().p("AiUDMIANADQAAheAShOQAThMAig2QAvhHAygXQAzgYAoACIAZAFQgogFg4AWQg1AWg0BNQgiA1gSBNQgSBOAABeQgQgDgKgFg");
	this.shape_520.setTransform(-140.4,-39.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#D18654").s().p("AhmDGQgMgKgCgFQgGgrAAgtQgBg4AQg3QAPg5Ang2QA7hRBvgFIAHAAQhvAFg7BRQgnA2gPA5QgQA3ABA4QAAAtAGArQACAFAKAJQAKAJAZAHIAAABQgdgGgLgKg");
	this.shape_521.setTransform(-146.5,-39.7);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#AF6533").s().p("AiRDGQgMgKgBgEQgHgrAAgtQAAg5APg3QAQg4Amg3QA9hRBtgFQAugBAuALQgogEg3AVQg4AWgyBMQghA2gTBNQgSBOAABdQgcgGgMgKg");
	this.shape_522.setTransform(-142.2,-39.7);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AieGaIgBAAIgBgBQgDgFgehKQgfhKgWhiIgKgtQgQg5gNg/IgBgBIAAgCQgMhMAMhQQALhQA2hNQBBhUBzgFQBVgBBOAiQBOAiAoAvQBdBrhGD8IgNArQgQAygLAzQgMAyAFBSIAAABIgBABQgCACgxAWQgxAVhUARQg2AMhCAAQghAAgkgDg");
	this.shape_523.setTransform(-130.5,-20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482}]}).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.8,-100.5,181.4,157.4);


// stage content:



(lib.watchCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.look();
	this.instance.setTransform(172.3,125.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(112.5,125.2,181.4,157.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;