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



(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBHQglgsAHguQAHgxAGgDIgDATQgEASAAAYQgCAlAeAlQAJgEASgPQATgQAKgdIgFgWQgEgSAAgQQAAgKADgFIAAAMQAAAOAOAtIAAABQgNAkgYASQgXARgEAAIgCAAIgCgBg");
	this.shape.setTransform(-29.4,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#682F51").s().p("AgtgSQAFguAEgEIBIAAQgCAPAGAbIAHAbQgNAigYARQgWAQgDAAQgkgrAGgrg");
	this.shape_1.setTransform(-29.4,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWACQgagNgBgDQgDgDADgDQACgCADACQABADAYAOQAXANAsAFQAEABAAADQgBADgDAAQgugEgYgQg");
	this.shape_2.setTransform(4.7,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDC1AB").s().p("AgBBQQgzgUgZg8IgBgBIgDAAQgEABgrgCQgsgCgxgWQgBAAgDgGIAAgBQgBgFALgKQALAHAuAMQAuAMBNgKQAGACANgNQADgEAAgFQAAgOgQgWQAHgFAPABQAWAFAUAqQgBAFAhAaQAgAYBSALQAkgCAJAIQAAABgEAEIgBACQABADgQANQgQAOgsgEIgBAAIgBABQgDADgtANQgVAGgWAAQgbAAgbgIg");
	this.shape_3.setTransform(-5.7,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEBXQg1gUgag+QgLABgqgDQgqgDgugUQgEAAgEgMQgBgLAQgNIACgCIACACQABADAvAPQAvAOBTgLQAEACAJgIQAFgNgTgcIgDgCIADgCQACgIAdgBQAZAGAVAtQAAADAfAaQAfAXBPAKQAJgBASACQASABAGAIIAAAEQAAAFgFAFQAAAFgSAPQgSAOgtgDQgJAGgtAMQgTAFgVAAQgcAAgdgJg");
	this.shape_4.setTransform(-5.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#141000").ss(1,1,1,3,true).p("AgfgOQA+gIABgDQACAHgWAs");
	this.shape_5.setTransform(25.5,-7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7EE9F").s().p("AgHAOQgIgFgBgJQgBgKADgDQAEgCAMAEQAOADABAIIgJAIQgIAGgEAAIgDAAg");
	this.shape_6.setTransform(26.8,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7EE9F").s().p("AgLARQgDgEABgNQABgNAIgDIAJAIQAJAHAAAHQgDAHgLADIgHABIgEAAg");
	this.shape_7.setTransform(29.8,-10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7EE9F").s().p("AgBAMQgOgEgBgIIAKgHQAHgIAIACQAHAFABAJQAAAKgCADIgEAAIgMgCg");
	this.shape_8.setTransform(31.4,-13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7EE9F").s().p("AgIAQIgFgMQgEgJAFgHQAIgFAHADQALADABADQAAAFgIAJQgHAKgFAAIgDAAg");
	this.shape_9.setTransform(29.5,-15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9D53D").s().p("AgZAjQgPgKgDgSQgDgmAogLQAngEALAoQADAPgKAPQgLAPgTAEIgHAAQgNAAgMgIg");
	this.shape_10.setTransform(29.1,-13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DDB612").s().p("AgeApQgRgMgEgVQgDgtAvgNQAqgEAPAoIACAGQADATgMARQgNASgWAEIgIABQgQAAgOgKg");
	this.shape_11.setTransform(29.1,-13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#141000").s().p("AgdCTQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgBIAAgCIALgQIALgQIgBgiIgBgjQgVgEg/glQg/gmgVhXIACACIgCgDQAGgNA/gEQA/gFAvgBQA5gBAzACQAzACAOAGIADAAIACABIABADQAFAFgZA6QgZA5hrA1QgEAdgBAYQAAAIABADQAFAIALAMIAMAOIABACIAAABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQgDACgaAFQgMACgKAAQgOAAgNgDgAAAiNQicAFgPAKIAAABQANA8AnAjQAnAiAjAPQAkAPADAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIABAlIAAAkIgBACIgHALIgMARQAnADAYgJQgOgPgKgQQgDgFAAgKIADggIADgXQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQBfgtAcgyQAcgzgBgRIgCgBQgLgJh4AAIgnABg");
	this.shape_12.setTransform(10.9,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8C51A").s().p("AASgdQgGgKgUgDIglgGQAjAAAaAEQAbADADAIIgCAIQgFAMgUAXQgTAYgiAPQAigWASg4g");
	this.shape_13.setTransform(19.3,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8C51A").s().p("AgmANQgqgCgJgHIgBgEQACgIAkgFIACAAQAlgBAxACQAzACAEAKQgCAJgkAFIgBAAIgpAAIgxgBg");
	this.shape_14.setTransform(14.6,-4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7EE9F").s().p("AhaARQgqgCgJgIIgBgDQAEgLAzgEQAzgFAkgBQAkgBAzACQAzACAFALQgFAKgzAFQgyAFglABIgiAAQgeAAgagBg");
	this.shape_15.setTransform(9.4,-4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#141000").s().p("AhwARQg1gCgKgIIgCgDQAGgLA/gEQA/gFAtgBQAugBA/ACQA/ACAGALQgFAKg/AFQhAAFguABIgrAAQgkAAghgBgAAAgJQiOAFgZAHQAaAICNgBQCQgFAYgHQgWgHhqAAIgoAAg");
	this.shape_16.setTransform(10.7,-10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9D53D").s().p("AhTALQgggcgHgRIBCgCIBxgDIBCgBQgHARgbAcQgdAeg0AGQg6AAghgeg");
	this.shape_17.setTransform(11.4,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9D53D").s().p("AhTALQgggcgHgRIBCgCIBxgDIBCgBQgHARgbAcQgdAeg0AGQg6AAghgeg");
	this.shape_18.setTransform(11.4,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DDB614").s().p("AhiAHQgiglAAgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIEBgGQAAAAABAAQABAAAAABQAAAAABAAQAAAAAAABIABAEQAAAGgeAlQgeAnhBAJQhIgCgigog");
	this.shape_19.setTransform(10.6,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7ECC1").s().p("AhSCTQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgBQACgCAIgBQAZgGAEgiQAEgigCg2QgDgegIgBQgIgBAigMQAWgKgagKQgagLgjgHIgigGQASgBBogZQAtgPgTgOQgSgOgRgGQAuAAAnACQAmACALAGIADAAIACABQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAEAGgZA6QgZA5hpA0QgEAdgBAYQAAAIABADQAFAJALAMIAMANIAAADIAAAAQAAABAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgdAIQgNADgMAAQgNAAgOgEg");
	this.shape_20.setTransform(16.1,3.1);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-18.1,68.8,36.3);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBHQglgsAHguQAHgxAGgDIgDATQgEASAAAYQgCAlAeAlQAJgEASgPQATgQAKgdIgFgWQgEgSAAgQQAAgKADgFIAAAMQAAAOAOAtIAAABQgNAkgYASQgXARgEAAIgCAAIgCgBg");
	this.shape.setTransform(-29.4,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#682F51").s().p("AgtgSQAFguAEgEIBIAAQgCAPAGAbIAHAbQgNAigYARQgWAQgDAAQgkgrAGgrg");
	this.shape_1.setTransform(-29.4,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWACQgagNgBgDQgDgDADgDQACgCADACQABADAYAOQAXANAsAFQAEABAAADQgBADgDAAQgugEgYgQg");
	this.shape_2.setTransform(4.7,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDC1AB").s().p("AgBBQQgzgUgZg8IgBgBIgDAAQgEABgrgCQgsgCgxgWQgBAAgDgGIAAgBQgBgFALgKQALAHAuAMQAuAMBNgKQAGACANgNQADgEAAgFQAAgOgQgWQAHgFAPABQAWAFAUAqQgBAFAhAaQAgAYBSALQAkgCAJAIQAAABgEAEIgBACQABADgQANQgQAOgsgEIgBAAIgBABQgDADgtANQgVAGgWAAQgbAAgbgIg");
	this.shape_3.setTransform(-5.7,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEBXQg1gUgag+QgLABgqgDQgqgDgugUQgEAAgEgMQgBgLAQgNIACgCIACACQABADAvAPQAvAOBTgLQAEACAJgIQAFgNgTgcIgDgCIADgCQACgIAdgBQAZAGAVAtQAAADAfAaQAfAXBPAKQAJgBASACQASABAGAIIAAAEQAAAFgFAFQAAAFgSAPQgSAOgtgDQgJAGgtAMQgTAFgVAAQgcAAgdgJg");
	this.shape_4.setTransform(-5.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#141000").ss(1,1,1,3,true).p("AgfgOQA+gIABgDQACAHgWAs");
	this.shape_5.setTransform(25.5,-7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7EE9F").s().p("AgHAOQgIgFgBgJQgBgKADgDQAEgCAMAEQAOADABAIIgJAIQgIAGgEAAIgDAAg");
	this.shape_6.setTransform(26.8,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7EE9F").s().p("AgLARQgDgEABgNQABgNAIgDIAJAIQAJAHAAAHQgDAHgLADIgHABIgEAAg");
	this.shape_7.setTransform(29.8,-10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7EE9F").s().p("AgBAMQgOgEgBgIIAKgHQAHgIAIACQAHAFABAJQAAAKgCADIgEAAIgMgCg");
	this.shape_8.setTransform(31.4,-13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7EE9F").s().p("AgIAQIgFgMQgEgJAFgHQAIgFAHADQALADABADQAAAFgIAJQgHAKgFAAIgDAAg");
	this.shape_9.setTransform(29.5,-15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9D53D").s().p("AgZAjQgPgKgDgSQgDgmAogLQAngEALAoQADAPgKAPQgLAPgTAEIgHAAQgNAAgMgIg");
	this.shape_10.setTransform(29.1,-13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DDB612").s().p("AgeApQgRgMgEgVQgDgtAvgNQAqgEAPAoIACAGQADATgMARQgNASgWAEIgIABQgQAAgOgKg");
	this.shape_11.setTransform(29.1,-13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#141000").s().p("AgdCTQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgBIAAgCIALgQIALgQIgBgiIgBgjQgVgEg/glQg/gmgVhXIACACIgCgDQAGgNA/gEQA/gFAvgBQA5gBAzACQAzACAOAGIADAAIACABIABADQAFAFgZA6QgZA5hrA1QgEAdgBAYQAAAIABADQAFAIALAMIAMAOIABACIAAABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQgDACgaAFQgMACgKAAQgOAAgNgDgAAAiNQicAFgPAKIAAABQANA8AnAjQAnAiAjAPQAkAPADAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIABAlIAAAkIgBACIgHALIgMARQAnADAYgJQgOgPgKgQQgDgFAAgKIADggIADgXQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQBfgtAcgyQAcgzgBgRIgCgBQgLgJh4AAIgnABg");
	this.shape_12.setTransform(10.9,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8C51A").s().p("AASgdQgGgKgUgDIglgGQAjAAAaAEQAbADADAIIgCAIQgFAMgUAXQgTAYgiAPQAigWASg4g");
	this.shape_13.setTransform(19.3,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8C51A").s().p("AgmANQgqgCgJgHIgBgEQACgIAkgFIACAAQAlgBAxACQAzACAEAKQgCAJgkAFIgBAAIgpAAIgxgBg");
	this.shape_14.setTransform(14.6,-4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7EE9F").s().p("AhaARQgqgCgJgIIgBgDQAEgLAzgEQAzgFAkgBQAkgBAzACQAzACAFALQgFAKgzAFQgyAFglABIgiAAQgeAAgagBg");
	this.shape_15.setTransform(9.4,-4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#141000").s().p("AhwARQg1gCgKgIIgCgDQAGgLA/gEQA/gFAtgBQAugBA/ACQA/ACAGALQgFAKg/AFQhAAFguABIgrAAQgkAAghgBgAAAgJQiOAFgZAHQAaAICNgBQCQgFAYgHQgWgHhqAAIgoAAg");
	this.shape_16.setTransform(10.7,-10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9D53D").s().p("AhTALQgggcgHgRIBCgCIBxgDIBCgBQgHARgbAcQgdAeg0AGQg6AAghgeg");
	this.shape_17.setTransform(11.4,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9D53D").s().p("AhTALQgggcgHgRIBCgCIBxgDIBCgBQgHARgbAcQgdAeg0AGQg6AAghgeg");
	this.shape_18.setTransform(11.4,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DDB614").s().p("AhiAHQgiglAAgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIEBgGQAAAAABAAQABAAAAABQAAAAABAAQAAAAAAABIABAEQAAAGgeAlQgeAnhBAJQhIgCgigog");
	this.shape_19.setTransform(10.6,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7ECC1").s().p("AhSCTQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgBQACgCAIgBQAZgGAEgiQAEgigCg2QgDgegIgBQgIgBAigMQAWgKgagKQgagLgjgHIgigGQASgBBogZQAtgPgTgOQgSgOgRgGQAuAAAnACQAmACALAGIADAAIACABQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAEAGgZA6QgZA5hpA0QgEAdgBAYQAAAIABADQAFAJALAMIAMANIAAADIAAAAQAAABAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgdAIQgNADgMAAQgNAAgOgEg");
	this.shape_20.setTransform(16.1,3.1);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-18.1,68.8,36.3);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#720000").s().p("AgCAgIgNgJQgEgSAAgSQgBgVAIgGQAEgDAIAFQACABAIALQAJAMACAUQAAAQgJAUIgOgKg");
	this.shape.setTransform(-0.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAsQADgEgFADIgGADIgggOIgCgCIgEghQgCgcAMgMQAJgGAMAJQAEAAAPAVQAQATgUAuIAAAAIAAgCg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-4.7,6,9.4);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABEQgPgLgSgcQgSgbgBgCQAEABASAYQASAYAKAIQAVAMAEgGIgBgHQAGg+AQgIQgdgmgDgNQgDgMABABIAHANQAHAOAcAgIABADQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAQgCAAgKAQQgJARAAArQAAAGgCAFQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABgBAAQgGAAgTgKg");
	this.shape.setTransform(-27,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#682F51").s().p("Ag0AGQgBgDADgCIAigmQAbgiAFgEQADACgBADQgBAAAEAMQAEAMAcAgIABADIgCADQgBgBgKAQQgKARAAArIgBADQgBAFgYABQgdgGgchAg");
	this.shape_1.setTransform(-27.1,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDC1AB").s().p("AgmAnQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgjAJg5AKQg5AKgXgGQgCAAgCgGIAAgBQgBgFANgLQAPgBBBgKQBCgKAwgUQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAIAAgBQAAgCgEgUQgDgVgMgTQAHgJASgCQAQADAOAdQgCAGAOATQAMANAjAKQAiAIBFgCIACgBQAUgIAHABIAAABQABABgFAHQAAAFgSATQgSAUgsgDQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgFAJgzASQgNAFgNAAQgpAAgugqg");
	this.shape_2.setTransform(-4.3,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqAvQgUAFg+AMQhAAMgcgIQgEAAgEgMIAAgBQAAgLAPgMIACgBQAHAABDgKQBCgKAygTQAAgIgEgSQgEgSgLgPIgBgCIABgCQABgCAJgHQAJgIAPABQAUADAQAiIAAABQgCADANASQALAMAhAJQAhAIBCgBQAUgMAQAGQAEAHgHAKQAAAEgTAVQgUAWgvgCQgKAMg0AQQgMAEgNAAQgqAAgwgpg");
	this.shape_3.setTransform(-4.3,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#141000").ss(1,1,1,3,true).p("AgdAAQA5gXABgDQAEAGgKAv");
	this.shape_4.setTransform(24.6,-9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7EE9F").s().p("AgOACQgEgIACgEQADgCANgBQAOAAAEAIIgHAJQgHAKgHAAQgIgCgDgKg");
	this.shape_5.setTransform(25.1,-13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7EE9F").s().p("AgHARQgDgDgDgOQgCgMAHgFIAKAFQALAFABAHQgBAIgJAFQgFAFgEAAIgCgBg");
	this.shape_6.setTransform(28.6,-12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7EE9F").s().p("AgRAGIAHgJQAHgKAHAAQAIADADAKQAEAIgCADQgEADgNAAQgNAAgEgIg");
	this.shape_7.setTransform(29.6,-16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7EE9F").s().p("AgJAGQgHgHADgIQAGgHAJAAQAKABACADQABAEgEALQgFAOgHAAIgIgLg");
	this.shape_8.setTransform(27,-17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9D53D").s().p("AgQApQgQgHgIgQQgNgkAkgVQAlgNAVAjQAHAQgGAPQgHARgSAIQgJAFgIAAQgIAAgIgDg");
	this.shape_9.setTransform(27.3,-15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DDB612").s().p("AgSAwQgUgIgJgTQgPgrAqgYQAogPAZAjIADAGQAIATgHASQgIAUgUAKQgLAEgKAAQgJAAgJgDg");
	this.shape_10.setTransform(27.3,-15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#141000").s().p("AAlCkIAAgBIAAgCIAGgSIAGgTIgJggIgJgiQgWAChFgWQhGgWgqhMIACABIgDgDQADgNA8gUQA8gVAsgMQA3gQAygLQAygLAPADIADgBIADAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAGAFgKA+QgKA9hZBOQADAdAFAXQACAIACADQAHAGAOAKIAPAJQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgDACgYAMQgXAMgaABIgDgCgAAlA1IAKAjIAKAjIAAADIgFANIgHATQAogHAWgPQgSgMgOgMQgEgEgCgLIgGgfIgDgXQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQBRhCAOg5QAOg4gFgQIgCAAQgPgGiXApQiWAtgMANIAAABQAbA3AvAWQAvAYAmAGQAkAGAEgBQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABg");
	this.shape_11.setTransform(10.4,3.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#141000").s().p("AioAzIgDgDQADgNA8gUQA8gTAsgMQArgNA+gOQA+gOAJAKQgDANg8AUQg8ATgtAMQg5ARg0ALQgkAHgRAAQgHAAgDgBgAgBgJQiLAngVAPQAbACCIgmQCKgmAVgQIgCAAQgeAAiCAkg");
	this.shape_12.setTransform(10.2,-7.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7ECC1").s().p("AgSCkIAAgBIAIgFQAWgMgFgiQgFgigNg0QgMgcgHABQgIABAegUQARgPgagEQgcgDgkACIgiACQARgFBegzQAngagVgJQgTgJgUgBQAtgMAmgIQAlgHAMADIADgBQAAgBABAAQAAAAAAAAQABABAAAAQAAAAABAAIACACQAFAFgKA+QgKA9hZBOQADAdAFAXQACAIADADQAGAGAOAKIAPAJIACADIAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAABQgDACgXAMQgYAMgYABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_13.setTransform(16.1,3.6);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.5,-20.2,65.1,40.4);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFAFB").s().p("AAIAhQABgLgJgeQgLgagIgOQAUAYAPAgIADAHQAEAhgJABQgHgFABgLg");
	this.shape.setTransform(0.2,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7F9FF").s().p("AgOAUQAEgfgEgVIgEgVQAOAMAMAXQAOAWgDAUQgKAfgPgBIgCAAQgJAAADgigAgSg1IAAAAIAAAAg");
	this.shape_1.setTransform(0.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0E9F2").s().p("AgRAcQAGgrgHgaQgHgbgCgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABABAAQASAQARAgQASAegFAcQgMAqgVgBIgCABQgMAAADgvg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-7.5,5.8,15.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#141000").s().p("AAbAaQgCghgIgMQgIAJgkAbQgDACgDgDQgBgDACgCQAygmgDgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAHADAGAyQAAADgEABQgDgBAAgDg");
	this.shape.setTransform(10.9,-11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7EE9F").s().p("AgLAGQgGgHABgDQACgEAOgEQAMgFAFAHIgDALQgEALgIADQgHgBgGgIg");
	this.shape_1.setTransform(10.6,-14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7EE9F").s().p("AgLACQgGgKAFgHIAMABQALABAEAIQABAHgHAHQgHAIgCAAQgEgCgHgNg");
	this.shape_2.setTransform(14.3,-14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7EE9F").s().p("AgRALIAEgLQAEgLAIgDQAHABAGAIQAGAHgBAEQgCADgOAEIgHACQgHAAgEgEg");
	this.shape_3.setTransform(14.7,-17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7EE9F").s().p("AgEAJQgKgHABgHQAEgIAJgCQAJgDADACQADAEgBAMQgCAOgIADQgBAAgHgIg");
	this.shape_4.setTransform(11.4,-18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9D53D").s().p("AgDAsQgSgCgMgNQgXgfAdgeQAggYAdAbQALAOgBAQQgCATgOANQgMALgQAAIgDAAg");
	this.shape_5.setTransform(12.5,-16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDB612").s().p("AgEA0QgVgCgOgQQgbglAigjQAhgaAiAaIAEAFQAOAQgBATQgCAWgRAOQgQAOgSAAIgDAAg");
	this.shape_6.setTransform(12.5,-16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABgCwIgBgDIABgTIACgUIgRgdIgSgeQgVAHhHgCQhKgCg+hBIADABIgEgDIAAgCQAFgNAygiQAzgiAmgWQAxgfAtgYQAugYAPgBIACgBIADgBIACACQAHADAHBBQAFA+hABgIAPAjQAJASAEAEQAJAFAPAFIARAFQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAABIgBACQgCAEgUARQgTASgZAIIgBAAIgDgBgABEBEIAlA/IAAACIgBAOIgBAUQAlgRARgUQgVgGgRgJQgIgHgKgXIgOggIAAgCIAAgCQBBhfgGg8QgDgwgIgNIgCAAQgPgBiIBQQiFBTgIAOIABAAIAAAAQBBBCBLgCQBKgBAIgFIABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAg");
	this.shape_7.setTransform(-0.8,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiVBeIgDgCQgGAAAWgSQAWgRBuhBQBshCAagLQAagMgDAGQAGAAgWARQgWAShuBBIgqAaIhGAoQgiATgIAAIAAAAgAAAgCQhZA1glAaQAogVBXg1QBZg0AlgbQgoAVhXA1g");
	this.shape_8.setTransform(-2.2,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgEAAQhJAAhAhBg");
	var mask_graphics_1 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgEAAQhJAAhAhBg");
	var mask_graphics_2 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgEAAQhJAAhAhBg");
	var mask_graphics_3 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgEAAQhJAAhAhBg");
	var mask_graphics_4 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgEAAQhJAAhAhBg");
	var mask_graphics_5 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_6 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_7 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgEAAQhJAAhAhBg");
	var mask_graphics_8 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_9 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_10 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_11 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_12 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_13 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_14 = new cjs.Graphics().p("AiYA4IABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA7hABgIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_15 = new cjs.Graphics().p("AiYA5IABAAIgBgBQAJgQCEhQQCHhQAQABIACAAQAHANADAwQAGA6hABhIgRANIgEADIgDACQgHAFhKABIgDAAQhKAAhAhAg");
	var mask_graphics_16 = new cjs.Graphics().p("AiYA+IABgBIgBAAQAJgRCEhPQCHhRAQACIACAAQAHAMADAwQAGA6hABiIgRANIgEADIgDABQgHAGhKABIgDAAQhKAAhAhAg");
	var mask_graphics_17 = new cjs.Graphics().p("AiYBCIABgBIgBAAQAJgQCEhQQCHhRAQACIACAAQAHAMADAwQAGA7hABhIgRANIgEADIgDACQgHAFhKABIgDAAQhKAAhAhAg");
	var mask_graphics_18 = new cjs.Graphics().p("AiYBGIABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA6hABhIgRAOIgEADIgDABQgHAFhKACIgDAAQhKAAhAhBg");
	var mask_graphics_19 = new cjs.Graphics().p("AiYBLIABgBIgBAAQAJgQCEhQQCHhRAQACIACAAQAHAMADAwQAGA6hABiIgRANIgEADIgDACQgHAFhKABIgDAAQhKAAhAhAg");
	var mask_graphics_20 = new cjs.Graphics().p("AiYBPIABAAIgBgBQAJgQCEhQQCHhQAQABIACAAQAHANADAwQAGA6hABhIgRANIgEADIgDACQgHAFhKABIgEAAQhJAAhAhAg");
	var mask_graphics_21 = new cjs.Graphics().p("AiYBUIABgBIgBAAQAJgRCEhPQCHhRAQACIACAAQAHAMADAwQAGA6hABiIgRANIgEADIgDABQgHAGhKABIgDAAQhKAAhAhAg");
	var mask_graphics_22 = new cjs.Graphics().p("AiYBYIABgBIgBAAQAJgQCEhQQCHhRAQACIACAAQAHAMADAwQAGA6hABiIgRANIgEADIgDACQgHAFhKABIgDAAQhKAAhAhAg");
	var mask_graphics_23 = new cjs.Graphics().p("AiYBcIABAAIgBAAQAJgRCEhQQCHhQAQACIACgBQAHANADAwQAGA6hABhIgRAOIgEADIgDABQgHAFhKACIgEAAQhJAAhAhBg");
	var mask_graphics_24 = new cjs.Graphics().p("AiYBhIABgBIgBAAQAJgQCEhQQCHhRAQACIACAAQAHAMADAwQAGA6hABiIgRANIgEADIgDABQgHAGhKABIgEAAQhJAAhAhAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.6,y:-0.9}).wait(1).to({graphics:mask_graphics_1,x:-1.6,y:0}).wait(1).to({graphics:mask_graphics_2,x:-1.7,y:0.8}).wait(1).to({graphics:mask_graphics_3,x:-1.7,y:1.7}).wait(1).to({graphics:mask_graphics_4,x:-1.7,y:2.6}).wait(1).to({graphics:mask_graphics_5,x:-1.8,y:3.5}).wait(1).to({graphics:mask_graphics_6,x:-1.8,y:4.4}).wait(1).to({graphics:mask_graphics_7,x:-1.8,y:5.2}).wait(1).to({graphics:mask_graphics_8,x:-1.9,y:6.1}).wait(1).to({graphics:mask_graphics_9,x:-1.9,y:7}).wait(1).to({graphics:mask_graphics_10,x:-1.9,y:7.9}).wait(1).to({graphics:mask_graphics_11,x:-2,y:8.8}).wait(1).to({graphics:mask_graphics_12,x:-2,y:9.6}).wait(1).to({graphics:mask_graphics_13,x:-2,y:10.5}).wait(1).to({graphics:mask_graphics_14,x:-2.1,y:11.4}).wait(1).to({graphics:mask_graphics_15,x:-2.1,y:12.2}).wait(1).to({graphics:mask_graphics_16,x:-2.1,y:12.6}).wait(1).to({graphics:mask_graphics_17,x:-2.2,y:13.1}).wait(1).to({graphics:mask_graphics_18,x:-2.2,y:13.5}).wait(1).to({graphics:mask_graphics_19,x:-2.2,y:14}).wait(1).to({graphics:mask_graphics_20,x:-2.3,y:14.4}).wait(1).to({graphics:mask_graphics_21,x:-2.3,y:14.8}).wait(1).to({graphics:mask_graphics_22,x:-2.3,y:15.3}).wait(1).to({graphics:mask_graphics_23,x:-2.4,y:15.7}).wait(1).to({graphics:mask_graphics_24,x:-2.4,y:16.2}).wait(1));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF8E1").s().p("AhlAKQAGADB2hLIgsAgQguAegBAIQAGAJAsAWQApAWBPgPQgEAGhCAJIgRACQg4AAg8g1g");
	this.shape_9.setTransform(-6.5,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7EE9F").s().p("Ah/AaQAGgIAigOIArgDIAugBQA+gDAfgMQAfgNAGgGQADAFg9AcQg9AbiQAKQgCgBAGgJg");
	this.shape_10.setTransform(-2.1,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8C51A").s().p("AgBgiQAigRgBgDQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABABQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQACAEgJAlQgJAigxAcIgNAGQAmgnAAg0g");
	this.shape_11.setTransform(8.2,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9D53D").s().p("AgpA/QgugIgZgTQgZgTgBgCQgCgDADgDQgCgDAZgNQAagPBYgEQBIgEAfgPQAegPgBgDQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQACADgJAlQgJAjgzAcQg0AWgnAAQgLAAgLgCg");
	this.shape_12.setTransform(-1.9,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8C51A").s().p("AiGApQABgCAhgTQAigUA6gQQAsgOA1gIQA1gIgIAZQgQAXg3AOQg3AOg5AFQg2AGgbAAIgEAAg");
	this.shape_13.setTransform(-1.8,0.1);

	this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(25));

	// Layer 4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7ECC1").s().p("AAnCwIgBgBQABgCAGgGQAUgRgOgfQgOgfgdgvQgRgagHAEQgHADAXgZQAMgVgaAEQgcAFghALIghAKQAPgIBOhKQAegkgVgEQgXgCgTAFQAqgZAggSQAigQANgCIACgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABABIACABQAHACAHA/QAHA+hBBjQALAbAMAWQADAGADACQAIAFAQAFIARAFIACACIABABIgBADIgVAVQgUASgZAHIgBABIgCgBg");
	this.shape_14.setTransform(4.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-21.5,35.4,43.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(-6.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-6,-0.1,-2.4,1.3,2.1,2.3,2.8,2.5,3.5,2.6]}},9).to({guide:{path:[3.5,2.6,2.8,2.5,2.1,2.3,-2.4,1.3,-6,-0.1]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-5,5.9,9.4);


(lib.drink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#271235").s().p("Al1FaQhIgIgTAEQgDgMAAgQQABgiAGggIAHgiIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgPAIgJAUQgKAUgEANQgFgPAAgrQAAgxAGg6IAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBABQAAAAgBAAQgBAAAAAAQgBABAAAAQgYAVgWAJQAEgtAohOQAnhNAnhBIArhHQApg0AzgDQAygCAFADQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQCxhaBxgcQBzgcAFADQDGgEBgBrQAwA7AQBBQAPBAgBAuQAAARgCAMQgRgwgTgaQgTgbgDgCQgCgCgDABIgBADIAAACQAeBGgCAgQgBAbgHAGQgQgkgmglQgngmgjgaIgogcIgDAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABgBAAQgFARgDAdIgFA4QgLgkgPgjIgRgnIgDgCQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAABQg5BGgvAmQgvAmgWAMQAmg/AKglQAKgmgCgHIAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAABQhEBGghAXQghAXgIAAQAOgegCgPIAAgEQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABIhIBRIhUBeIgqAvIgBACQgEAgAAAdQACBIAOAvQAPAvAIAMIgcASIgaARQhbgyhIgHg");
	this.shape.setTransform(-76.3,-86.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjTGaQhkg2hLgFQhLgFgFAEQgDAAgBgDQgEgOAAgUQAAgaAEgZIAIgpQgLAMgHASQgIARgCALQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgDAAQgNgNAAg6QABg5AEgnQgOALgPAHIgRAIQgBAAAAABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQABgqAnhQQAmhNAqhEIAvhPQApg1AygEQAzgFAMAFQCyhaBxgcQBzgcAGADQDKgFBiBvQAxA7AQBCQAPBBgBAvQgBAugCADQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQgDAAgBgDQgUg/gZgfQATAzgBAcQgHAtgIgCIgDABQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQgTgyg8gyQg8gygYgOQgGAegEAuIgDAzQgBAEgDAAQgEAAAAgEQgCgcgRgrQgRgrgJgUQhJBZg2AlQg1AkgEAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgBgCIAAgCQAkg4ANgkQAMglABgPQhVBWgfAQQgeAPAAgGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgBgBIABgCQANgZAAgQIhGBPIhOBYIgqAvQgEAfAAAcQACBPARAwQARAwADACIAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIg6AmIgCAAIgCAAg");
	this.shape_1.setTransform(-76.3,-86.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(85));

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-88.1,-71.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:-67.8,alpha:1},5).wait(6).to({startPosition:0},0).to({y:-65.9,alpha:0},4).to({_off:true},1).wait(60));

	// hand
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSBHQglgsAHguQAHgxAGgDIgDATQgEASAAAYQgCAlAeAlQAJgEASgPQATgQAKgdIgFgWQgEgSAAgQQAAgKADgFIAAAMQAAAOAOAtIAAABQgNAkgYASQgXARgEAAIgCAAIgCgBg");
	this.shape_2.setTransform(-81,-12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#682F51").s().p("AgtgSQAFgtAEgFIBIAAQgCAPAGAbIAHAaQgNAkgYAQQgWAQgDABQgkgsAGgrg");
	this.shape_3.setTransform(-81.1,-12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWACQgagNgBgDQgDgDADgDQACgCADACQABADAYAOQAXANAsAFQAEABAAADQgBADgDAAQgugEgYgQg");
	this.shape_4.setTransform(-46.9,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDC1AB").s().p("AgBBQQgzgUgZg8IgBgBIgDAAQgEABgrgCQgsgCgxgWQgBAAgDgGIAAgBQgBgFALgKQALAHAuAMQAuAMBNgKQAGACANgNQADgEAAgFQAAgOgQgWQAHgFAPABQAWAFAUAqQgBAFAhAaQAgAYBSALQAkgCAJAIQAAABgEAEIgBACQABADgQANQgQAOgsgEIgBAAIgBABQgDADgtANQgVAGgWAAQgbAAgbgIg");
	this.shape_5.setTransform(-57.3,-5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEBXQg1gUgag+QgLABgqgDQgqgDgugUQgEAAgEgMQgBgLAQgNIACgCIACACQABADAvAPQAvAOBTgLQAEACAJgIQAFgNgTgcIgDgCIADgCQACgIAdgBQAZAGAVAtQAAADAfAaQAfAXBPAKQAJgBASACQASABAGAIIAAAEQAAAFgFAFQAAAFgSAPQgSAOgtgDQgJAGgtAMQgTAFgVAAQgcAAgdgJg");
	this.shape_6.setTransform(-57.3,-5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#141000").ss(1,1,1,3,true).p("AgfgOQA+gIABgDQACAHgWAs");
	this.shape_7.setTransform(-26.2,-14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7EE9F").s().p("AgHAOQgIgFgBgJQgBgKADgDQAEgCAMAEQAOADABAIIgJAIQgIAGgEAAIgDAAg");
	this.shape_8.setTransform(-24.9,-19.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7EE9F").s().p("AgLARQgDgEABgNQABgNAIgDIAJAIQAJAHAAAHQgDAHgLADIgHABIgEAAg");
	this.shape_9.setTransform(-21.8,-17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7EE9F").s().p("AgBAMQgOgEgBgIIAKgHQAHgIAIACQAHAFABAJQAAAKgCADIgEAAIgMgCg");
	this.shape_10.setTransform(-20.3,-20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7EE9F").s().p("AgIAQIgFgMQgEgJAFgHQAIgFAHADQALADABADQAAAFgIAJQgHAKgFAAIgDAAg");
	this.shape_11.setTransform(-22.2,-22.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9D53D").s().p("AgZAjQgPgKgDgSQgDgmAogLQAngEALAoQADAPgKAPQgLAPgTAEIgHAAQgNAAgMgIg");
	this.shape_12.setTransform(-22.6,-20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DDB612").s().p("AgeApQgRgMgEgVQgDgtAvgNQAqgEAPAoIACAGQADATgMARQgNASgWAEIgIABQgQAAgOgKg");
	this.shape_13.setTransform(-22.6,-20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#141000").s().p("AgdCTQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgBIAAgCIALgQIALgQIgBgiIgBgjQgVgEg/glQg/gmgVhXIACACIgCgDQAGgNA/gEQA/gFAvgBQA5gBAzACQAzACAOAGIADAAIACABIABADQAFAFgZA6QgZA5hrA1QgEAdgBAYQAAAIABADQAFAIALAMIAMAOIABACIAAABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQgDACgaAFQgMACgKAAQgOAAgNgDgAAAiNQicAFgPAKIAAABQANA8AnAjQAnAiAjAPQAkAPADAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIABAlIAAAkIgBACIgHALIgMARQAnADAYgJQgOgPgKgQQgDgFAAgKIADggIADgXQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQBfgtAcgyQAcgzgBgRIgCgBQgLgJh4AAIgnABg");
	this.shape_14.setTransform(-40.8,-4.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8C51A").s().p("AASgdQgGgKgUgDIglgGQAjAAAaAEQAcADACAIIgCAIQgFAMgUAXQgTAYgiAPQAigWASg4g");
	this.shape_15.setTransform(-32.3,-8.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8C51A").s().p("AgmANQgqgCgJgHIgBgEQACgIAkgFIACAAQAlgBAxACQAzACAEAKQgCAJgkAFIgBAAIgpAAIgxgBg");
	this.shape_16.setTransform(-37.1,-11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7EE9F").s().p("AhaARQgqgCgJgIIgBgDQAEgLAzgEQAzgFAkgBQAkgBAzACQAzACAFALQgFAKgzAFQgyAFglABIgiAAQgeAAgagBg");
	this.shape_17.setTransform(-42.2,-11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#141000").s().p("AhwARQg1gCgKgIIgCgDQAGgLA/gEQA/gFAtgBQAugBA/ACQA/ACAGALQgFAKg/AFQhAAFguABIgrAAQgkAAghgBgAAAgJQiOAFgZAHQAaAICNgBQCQgFAYgHQgWgHhqAAIgoAAg");
	this.shape_18.setTransform(-40.9,-17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9D53D").s().p("AhTALQgggcgHgRIBCgCIBwgDIBDgBQgGARgcAcQgdAfg0AFQg6AAghgeg");
	this.shape_19.setTransform(-40.2,-6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9D53D").s().p("AhTALQgggcgHgRIBCgCIBwgDIBDgBQgGARgcAcQgdAfg0AFQg6AAghgeg");
	this.shape_20.setTransform(-40.2,-6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DDB614").s().p("AhiAHQgiglAAgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIEBgGQAAAAABAAQABAAAAABQAAAAABAAQAAAAAAABIABAEQAAAGgeAlQgeAnhBAJQhIgCgigog");
	this.shape_21.setTransform(-41,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7ECC1").s().p("AhSCTQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgBQACgCAIgBQAZgGAEgiQAEgigCg2QgDgegIgBQgIgBAigMQAWgKgagKQgagLgjgHIgigGQASgBBogZQAtgPgTgOQgSgOgRgGQAuAAAnACQAmACALAGIADAAIACABQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAEAGgZA6QgZA5hpA0QgEAdgBAYQAAAIABADQAFAJALAMIAMANIAAADIAAAAQAAABAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgdAIQgNADgMAAQgNAAgOgEg");
	this.shape_22.setTransform(-35.5,-4);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(-51.6,-7.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(-50.9,-26.5,0.999,0.999,-35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgmAvQgUgbAAgaQAAgcADgCIACAdQACAYASAZQAZAbAwgCIAHgdQAFgVAAgTQAAgQgFgJQgJgDgVgNQgJgGgGgMQgEgMACgBIAKAQQAMAOAeAKIACACQAKAZgHAkQgIAlgCAGQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgIAAQgwAAgZgcg");
	this.shape_23.setTransform(-78.5,-15.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#682F51").s().p("AglAvQgVgagBgZQgBgaACgDQAAgDAEAAIAbgTIAbgTQACAAAAAEQACAJARALQAQAKAQAGIACACQAKAZgHAkQgIAlgCAGQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgIAAQgwAAgZgcg");
	this.shape_24.setTransform(-78.5,-15.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag9ATIAmgIQAhgIAugWQADgBADADQABADgDACQgfAOgaAIQgoAKgQAAQgGAAgCgBg");
	this.shape_25.setTransform(-41.5,-24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDC1AB").s().p("AjWBdIAAgCQAAgJAKgJIA8geQAwgYAPgNIABgBIAGgPQAGgQAIgLIABgDIAAAAIgCgDQgPgJgNgMQgOgMAAgIIAAgDQACgCADgBQAVgGARAIQAQAJAMAJQAOAOBIAIQBJAJBThEQAEAHABAOQAAAGgDAIQgJAdguATQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAAABIAAAGQAGATgnAfQglAYgzAFQgyAFg2ggQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIhDAjQgsAXgQAMQgIgDgFgMg");
	this.shape_26.setTransform(-54.4,-22.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AjKB1IgJgGQgIgGgCgLIAAgDQAAgMAMgLIABgBIBEgiQApgVAMgKIAHgQQAFgNAHgLQgLgHgPgNQgPgNgCgNIACgGQADgFAGgCQAXgIAZAMQAZANACADQANAMBFAJQBHAJBRhFIADgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAFADADAaQAAAIgCAIQgKAggvAUIAAAFQAGAVgrAjQglAZg2AFQgzAGg4ghQgtAXgmAVQglAUgFAGQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgBgBg");
	this.shape_27.setTransform(-54.4,-23);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(-44.6,-37.7);

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(-54.9,-28.4,0.999,0.999,-13);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_3},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.instance_4}]},16).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.shape_22},{t:this.shape_18},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},14).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,rotation:-35,x:-50.9,y:-26.5},11).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:7.3,x:-52.8,y:-17.6},6).to({_off:true},14).wait(17));

	// mouth
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgCAUQgDgCABgDQAEgOAAgJIgDgMQADAAADAMQAFAJgHARQAAABAAAAQgBABAAAAQAAAAAAAAQAAABgBAAIgBgBg");
	this.shape_28.setTransform(-51.1,-42.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag0AGQguggACgHQADgCACADQAAAFAsAbQAtAeBggFQAEAAAAAEQAAADgDABIglABQhIAAgmgcg");
	this.shape_29.setTransform(-62.8,-45.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgJARQgBgRAKgJQAIgLADABIgIAMQgFAJAAAOQAAAEgDAAQgDAAgBgDg");
	this.shape_30.setTransform(-72.3,-47.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3F0101").s().p("AAPACQgUgRgegEIgDAAIAZgEQADgBAUAKQAXAKAGAcQgCgCgWgUg");
	this.shape_31.setTransform(-64.3,-38.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAANQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAgRgDgGQACAAADAJQAEAGgEAKQAAABAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAIAAgBg");
	this.shape_32.setTransform(-47.3,-44.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAMQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAJgNAMgEQAOgEACACIgNAGQgKAFgHALQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgBg");
	this.shape_33.setTransform(-71.4,-49.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#720000").s().p("AgUArQgSgGgNgYQgMgWgLgdQAQgDAygBQAvgBAcARQAHAHABAJQg5A2gfAAIgHgBg");
	this.shape_34.setTransform(-61.2,-37);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4C2D00").s().p("AA0AkQgfgUgxABQg0ACgNADQgPgmgEgiQAWAQBAAXQA/AWBMgLQgQASgjAhQgDgJgHgGg");
	this.shape_35.setTransform(-59.5,-43.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhSAoIgSguQgQgqgHgnQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAFAHBJAfQBGAfBZgQQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQgBADgbAeQgbAcglAfQgiAfgdAGIgCAAQgYAAgZg0g");
	this.shape_36.setTransform(-59.4,-40.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAQAKQgCgHgMgDQgLgDgLgBQgDgBAAgDQABgEADAAQAFAAAPAFQASAEAFALQAAADgDACIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAg");
	this.shape_37.setTransform(-61.1,-41.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC1AB").s().p("AgCBBQhPgCgohmIgJgZQAiAVAtAQIADABIAWAJQBPAdBDgcIAAgBIAIgDQALAHggAnQgfAnhJAAIgFAAg");
	this.shape_38.setTransform(-59,-42.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAPIgXgJQg7gVgJgIQgDgCABgDQACgDADABQADADApATQAoARAzALQA1ALApgVQADgCACADQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABIAAAAQghAPglAAQglAAgmgQg");
	this.shape_39.setTransform(-58.9,-46.4);

	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(-55.4,-48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},32).to({state:[{t:this.instance_5},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},16).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},20).wait(17));

	// eye
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDFAFB").s().p("AgJAAQABgHAIgBQAKABAAAHQAAAIgKABQgIgBgBgIg");
	this.shape_40.setTransform(-73.3,-78);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAAQACgYAYgCQAZACACAYQgCAZgZACQgYgCgCgZg");
	this.shape_41.setTransform(-72.3,-78.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F5FBFC").s().p("AgWB0QApg8gGhKQgHhMgthBQA1AgAbBDQAZBEgUA8QgWA+g3AYQgLAEgMACQASgVAOgXg");
	this.shape_42.setTransform(-54.2,-74.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDFAFB").s().p("AgzCYQg4gfgdhFQgZhEAVg9QAVg9A5gYQA7gVA3AfQA4AgAdBFQAZBDgVA+QgVA9g6AYQgXAIgXAAQghAAgigTg");
	this.shape_43.setTransform(-63.7,-75.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag2CfQg7gggdhIQgbhHAWhAQAWhAA9gZQA+gWA5AhQA7AgAeBIQAaBHgWBAQgWBAg9AZQgZAJgYAAQgjAAgjgUg");
	this.shape_44.setTransform(-63.8,-75.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("ABbBBQgFg+gmgmQgngpgGgCQgogpgegiQgegkAAgEQACACAgAhQAfAjApAmQAHAEAnApQAmAoAGBBQAAApgaAmQgNAPgYARIgYARQBPg7AAhFg");
	this.shape_45.setTransform(-36.8,-72.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC1AB").s().p("AASDGIgSg/IgsiIIgqiIIgTg9IApAmIBQBLQAIADAmApQAmApAGBAQABBJhTA+IgCAAIgEgBg");
	this.shape_46.setTransform(-37.6,-72.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDFAFB").s().p("AgJAAQABgHAIgBQAKABAAAHQAAAIgKABQgIgBgBgIg");
	this.shape_47.setTransform(-41.5,-87.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAAQACgYAYgCQAZACACAYQgCAZgZACQgYgCgCgZg");
	this.shape_48.setTransform(-40.8,-88.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F5FBFC").s().p("AgVBRQAWgpACg1QACg3gggiQAZAHANAfQAQAfABArQgBA6gbAjIgVgWg");
	this.shape_49.setTransform(-34.6,-87.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FDFAFB").s().p("AAGBMQgrgqgbgfQACgsASgfQASgdAagBQAbAAASAhQATAgABAvQgBA6gcAkQgbgagDgCg");
	this.shape_50.setTransform(-38.2,-87.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAjBvQgegegEgBIgBAAQgrgqgcggIAAgDQABgwAVghQAUggAdgBQAfABAUAjQAVAiAAAyQgBBAgfAmQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_51.setTransform(-38.2,-87);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FDFAFB").s().p("AgIAAQAAgHAIAAQAJAAABAHQgBAHgJABQgIgBAAgHg");
	this.shape_52.setTransform(-35.7,-93.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYAAQACgWAWgCQAXACACAWQgCAXgXACQgWgCgCgXg");
	this.shape_53.setTransform(-35.1,-92.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:-40.8,y:-88.5}},{t:this.shape_47,p:{x:-41.5,y:-87.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:-72.3,y:-78.6}},{t:this.shape_40,p:{x:-73.3,y:-78}}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:-34.6,y:-81.6}},{t:this.shape_47,p:{x:-35.3,y:-82.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:-61.2,y:-71.2}},{t:this.shape_40,p:{x:-62,y:-72.7}}]},25).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_53},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:-63.2,y:-85.2}},{t:this.shape_40,p:{x:-64,y:-86.7}}]},25).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:-40.8,y:-88.5}},{t:this.shape_47,p:{x:-41.5,y:-87.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:-72.3,y:-78.6}},{t:this.shape_40,p:{x:-73.3,y:-78}}]},18).wait(17));

	// Layer 1
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgRACQAHgJADgBQgOgJgMAIQgMAIgBABQARgjAWAIQAUAIARATQARAWAAACQgygbgBANQgBAPAEAFQgXgQAHgMg");
	this.shape_54.setTransform(-102,-46.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AguA2QgYgUgEgZQgFgWABgDIABgCQAQgrAfgGQAlgBAiAeQAhAeAEAHQACABgDACQgCACgDgCQgCgDghgeQgggdgiABQgaAEgPAoIAAAAQgBAGAFAUQAFAVAUAQQAZARApgIIAdgHQARgFADABQgBACgNAFQgMAGgJADQgWAGgRAAQgbAAgTgOg");
	this.shape_55.setTransform(-102.4,-46.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E2B7A3").s().p("AgtA2QgYgUgFgZQgEgWABgDIAAgCQAQgrAfgGQAmgBAhAeQAiAeAEAHQAAACgDAXQgCAXgCAEQgqARgeAAQgbAAgSgOg");
	this.shape_56.setTransform(-102.5,-46.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2B7A3").s().p("ABbFxIg1g6QgtgzgxghQgHABg0gzQg0g1gVh7QgBgCAFg8QAGg9AWhWQAXhVAzhQQg5DCBQC9QBPC/CpBwQgfAagLARQgDAEgTAKQgIAEgJAAQgJAAgIgFg");
	this.shape_57.setTransform(-83.4,-56.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC1AB").s().p("AhhG9QgFgIgwgzQgvgygxghQgHABg0g0Qgzg0gWh8QgBgGAJhWQAKhYArhtQArhuBhhHQCjhtENBsQgBAIgBAZQgBAoAOBIQAOBIAsBcIABACQAEAAAWAYQAXAXAFAsIAAAGQAABNhiBZQgWAUgbAVIgKAGIgDACIg3AlQg7Aog/AxQg9AwgWAeQgDADgSAKQgJAFgIAAQgJAAgJgFg");
	this.shape_58.setTransform(-64.4,-64.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhmHCQgEgGgwgzQgwgygwghQgHABg1g1Qg2g2gVh/QgCgGAKhXQAKhZArhvQArhvBjhJQCnhwEUBvQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQgBACgBAiQgBAnANBHQAOBGArBbQAHADAWAZQAXAYAEAtIAAAGQAABiiWB0IhAArQg8AohAAxQg+AxgWAdIAAABQgDAEgVALQgJAFgKAAQgMAAgLgIg");
	this.shape_59.setTransform(-64.4,-64.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7C596F").s().p("AgJALIgSgEQAdgEANgGIANgIIAAAAIgLALQgBAAAAAAQgBABAAAAQAAABAAAAQAAABABAAIACAGIAAAAQgIADgKAAIgJgBg");
	this.shape_60.setTransform(-76.5,28.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7C596F").s().p("AgJALIgSgEQAdgEANgGIANgIIAAAAIgLALQgBAAAAAAQgBAAAAABQAAABAAAAQAAABABAAIACAGIAAAAQgIADgKAAIgJgBg");
	this.shape_61.setTransform(-66.1,26.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgVACQgJgGAAgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQACAGAdAGQAMACATgHQABAAAAAAQABAAAAAAQAAAAAAABQAAABgBAAQgJAHgPAEIgDABQgRAAgJgJg");
	this.shape_62.setTransform(-79,26.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVACQgJgGAAgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQACAGAdAGQAMACATgHQABAAAAAAQABAAAAAAQAAAAAAABQAAABgBAAQgJAHgPAEIgDABQgRAAgJgJg");
	this.shape_63.setTransform(-67.5,23.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AggAWQADgGAdgcQARgRAXgGQABACgFADQgfAPgUAXIgYAcQACgHAFgHg");
	this.shape_64.setTransform(-81.8,3.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgnAPQABgEADgBQAjAAATgMIAUgPQABAEgTAOQgTAQglABQgDgBgBgCg");
	this.shape_65.setTransform(-72.6,13);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AATAOQAEgGgsgWQABgBAHABQACAAALAFQASALgBACQAGAMgBAAIgDgCg");
	this.shape_66.setTransform(-63.2,1.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#682F51").s().p("AABChQgUgFgOgTIgDguIgGhNQgEgmgEgOIAAgCQgFgBgFgNQACgEAFgFIAAAAQAHgDAGgzQAAgOgEgTIANgLQAFAgAYBgQAWBeApBQIgYAOQgMAHgPAAIgJgBg");
	this.shape_67.setTransform(-64.9,-9.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgDCpQgWgEgOgXIAAgBIgEgpIgIhOQgEgogEgPQgEgEgDgPQAAgGAFgGIAAAAQABAAAHgWQAHgWgIgnQgBAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAUgSQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIADADQAAAEALA2QAMA2ATBGQAVBHAeA4QABADgCACQgDADgVAKQgQAJgUAAIgJgBg");
	this.shape_68.setTransform(-64.7,-9.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5B2949").s().p("AghB8Qg2gPgJgLQAtinAdg7QgNA5AbA6QAZA5AxAtQAPANAQAIQgzATgpAAQgTAAgTgFg");
	this.shape_69.setTransform(-83.7,-3.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#682F51").s().p("AgjClQg6gPgKgMQAliJAbg/QAbhAABAAQALgRASgLQASgMAIgDQAiAmgDAeIgBAQQgEAJgBANQABAfABAFIAAABQAjBdgDAyIAAAcQg5AZgtAAQgSAAgSgFg");
	this.shape_70.setTransform(-83,-7.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ag3CrQg0gUgBgIQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAliLAdhAQAdhBACAAQAOgVAUgNQAUgMADgBQABgBAAAAQABAAAAAAQABABAAAAQABAAAAABQAlAqgFAiIAAANQgDAKAAAOQABAdACAGQAhBegEAzQgBAdgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQhKAbgtAAQgZAAgRgHg");
	this.shape_71.setTransform(-83.2,-7.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A53F77").s().p("AASgGQAVAHAAAEQgpgGgUAEIgQAGQAlgXATAIg");
	this.shape_72.setTransform(-71.5,-3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B35082").s().p("Ag3CzQhTgHgRgLIAjhZIBAibIAjhWIAsgFIAwgFQAaCLAaBAQAaBDAFAFIABAOIABAPQh0A3hNAAIgSgBg");
	this.shape_73.setTransform(-75.9,-6.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("Ah0C0QgrgLgCgCQgDgCABgDICIlQQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIBjgKQADAAABADQAaCSAbBAQAbBDACgBIABACIADAhQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQhaAwhIAFQgZACgWAAQgpAAgcgHg");
	this.shape_74.setTransform(-76,-6.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#331229").s().p("AiAAXIgLgzQBmAGBMgVQBOgVAUgLQACAJABALQgBAggJAhIgLAsQgTAFgdABQgeABgNgBIABgUQgBgVgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABQgQApgGAHIg6AFIg6AFIgKg1g");
	this.shape_75.setTransform(-75.9,12.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ah8BRIgWhwQgBAAAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIADgBQBxAHBQgZQBTgZAFgFIADAAIACACQAJAfgMAyQgLAygEAIQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgXAHgjABIgqAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgCIABgBQACgNAAgKIAAgFQgRAjgEABQgBABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIhAAGIg3AEQgEAAgBgDg");
	this.shape_76.setTransform(-75.9,12.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC1AB").s().p("AgNAoIAAgpIgBgsIAOACIAOACIAAApQgBAggCAOQgLgBgNgFg");
	this.shape_77.setTransform(-79.4,22.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgRAqQgBgHAAgnQgBgqABgGIAfADQAEACACAFIgCBaQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDABIAAABQgHAAgWgLg");
	this.shape_78.setTransform(-79.3,22.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#997189").s().p("AAIAuQgRAAgVgFQgUgFgFgKIgBgDQACgLANgKQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAAAIgBgBQgFgDgEgRIABgFQAGgPAogEQALgBAVADQAVACAHALQACANgOANQgBABAAAAQAAABAAAAQgBABAAAAQAAABABAAQABAAADALQADALgHALQgKANgXAAIgDAAg");
	this.shape_79.setTransform(-79,28.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAHA1QgHABgagFQgcgEgJgQIgBgGQAAgLAPgMQgHgGgCgQIABgHQAIgUAtgEQAFgBAaACQAaADAKAPQACADAAAFQAAALgOAOQADAFABAQQAAAMgHALQgKALgTAAIgMgBg");
	this.shape_80.setTransform(-79,28.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDC1AB").s().p("AgMAlIABglIACgjIAWgCIgCAlIgBAlIgNABQgGAAgDgBg");
	this.shape_81.setTransform(-67.7,20.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgMAsQgEgCgCgEIABhIQAEgEAGgBIAVgFQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIgIBRQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIgOABQgGAAAAgBg");
	this.shape_82.setTransform(-67.4,19.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#682F51").s().p("AgVAYQgGgigBgjQAAgOACgKIAdA+QAUAlAGAUQgJAOggAGQgDgLgGgjg");
	this.shape_83.setTransform(-64.7,-16.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgPBRQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgMhBQgKg2AKgmQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABABIAdA7QAZAxAHAYIgBAEQgBACgPALQgOAKgTAAIgCAAg");
	this.shape_84.setTransform(-64.7,-17);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#51143B").s().p("AgxAuQASguAWgYQAVgYAHgDIAfAIQghAWgRAeQgQAggDALQgMgBgSgFg");
	this.shape_85.setTransform(-74.3,38.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgoA5IgRgFQgEgBABgDQAUg2AagaQAYgaADAAIADgBIAqAMQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAADgDABQglAUgTAkQgRAlAAAFIgCACIgFAAQgIAAgKgDg");
	this.shape_86.setTransform(-74,38.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#35012E").s().p("AhxAbQgCABgEgKIgBgIQgDgRAig1IAdAFIAaAEIAAAAQAGgBAxAKQAzAJAjAhQAPAQAAAXIgBAGQgQAIhEAHIgVABQg6AAhHgig");
	this.shape_87.setTransform(-74.8,37.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ah2AjQgDABgHgPQgMgSAthIQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAABIAdAFIAdAFQAJgCAyALQA0AKAkAlQARASAAAaIAAAKQAAABAAAAQAAAAgBABQAAAAAAAAQgBABgBAAQgFAGhKALQgOACgPAAQg9AAhNglg");
	this.shape_88.setTransform(-74.6,38.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#997189").s().p("AgIArQgMgBgNgDQgNgEgEgHQAAgLAMgJIABgDIgBgDQgOgKAAgVQAAgMAxgBQAKgBAUADQATAEAGAKQAEALgYATQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAGAFgEAUQgGAJgXAAIgNAAg");
	this.shape_89.setTransform(-67.3,25.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgIAyQgFABgSgEQgSgEgHgNIgBgFQABgJALgLQgKgIgFgVIACgIQAIgTAxABQAEgBAYAEQAYADAJAPIABAHQgBANgTARQADAGABALQAAAHgDAGQgJANgcAAIgNgBg");
	this.shape_90.setTransform(-67.4,25.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#51143B").s().p("AgrAtQACgNAPggQANggAfgTQAGgBAUALQgMAHgVAXQgRAVgHApIgCABQgKAAgSgHg");
	this.shape_91.setTransform(-63.2,34);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgyAzQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgHAPgmQAQglAkgXIACAAQAHgDAdASQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgDAAgZAXQgXAVgHAwQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgEABQgKAAgagJg");
	this.shape_92.setTransform(-63.1,34);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#35012E").s().p("AhkAXIAAgBQgDABgFgJIgBgGQgEgOAog3IAQACIAOACIAAAAQAFgBAsAHQAuAIAkAhQAWAXAAAjIAAAIQgNAGg7AAIgDAAQg3AAhQgng");
	this.shape_93.setTransform(-64.2,33.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhpAeQgFAAgHgNQgBgEAAgGQAAgZAngyQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAQACIARACQAHgBAtAIQAwAIAlAkQAZAZAAAnIAAAKQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgEAEhAAEIgJAAQg7AAhWgpg");
	this.shape_94.setTransform(-64,33.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgYAVIgBgZQAAgXACgEQABADACAVIADAYQAIAMAJAAQAIgHAIgaIAKggQABAEgFAfQgGAcgQAJIgCABQgLAAgLgQg");
	this.shape_95.setTransform(-60.1,9.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EDC1AB").s().p("AgVBwQgFgLgCgpQgCgbANgUIABgDIAAAAIgeh/QgBgCAFgIQAEgDANAEIAUA5QAPAsAXArIABAAQAHACAHAmQAAAQgKAXQAAACgGAMQgGANgNAEIgFABQgMAAgRgRg");
	this.shape_96.setTransform(-60.7,1.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgbB1IgBgCQgFgIgDgvQgBgbANgXIgIggIgOg9IgIghIAAgBQgBgHAIgJQAJgGARAHQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIATAzQAPAuAYAuQAKAFAGAoQABASgLAYQAAACgHAOQgHAOgQAGIgHABQgPAAgUgUg");
	this.shape_97.setTransform(-60.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-127.7,114.7,173);


// stage content:



(lib.drinkCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.drink();
	this.instance.setTransform(168.8,136.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(136.8,109,114.7,173);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;