(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 200,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.bananas = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2D396").s().p("AhEBXIAogoQAMgNARgYIAlgwIAggsIANgTIgLATIgdArQgSAZgVAaQgTAcgXAYQgXAYgVAOIAOgPg");
	this.shape.setTransform(23.3,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAE6").s().p("Ah1BrQADghAjgyQAPgVAYgXQAYgYAagYQAbgZAZgUIApggIAQgMIgRAPIgrAmIg4A0QgbAdgYAaQgZAcgOAXQgRAcgDAUQgDAUAFAMQAEANAGAGIAFAFQgfgTAEggg");
	this.shape_1.setTransform(18.3,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2774B").s().p("AgOASIAHgFQAHgEAAgJQABgFgCgFQgDgEgEgCIgFgDIAGgBQAFgBAFADQAHACAFAJIgEAEQgEADgDAGQgDAHABAIg");
	this.shape_2.setTransform(39.3,-4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2D396").s().p("AiCCnQAjgDAfgUQAfgVAagfQAZggAXgiIAshAIAQgZQAJgQAHgTQAHgTgBgQQgCgQgQgJQgOgGgJABQgJABgDgBIABAAIAJgEQAIgDAMACQAMABAMAMQAKALgEAVQgEAVgJAWQgKAWgIANIgLATQgLARgSAZQgTAcgXAdQgVAdgaAYQgaAYgaAMQgPAIgPAAQgJAAgJgDg");
	this.shape_3.setTransform(23.8,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ACUhbQgIAUgHAOQgHANgBABQAAABgLASQgLASgTAaQgTAbgYAeQgYAegZAZQgbAZgbALQgbAMgYgKQgjgPgGgaQgGgZAMgeQAMgdAUgbQAUgYARgRQAYgZAdgaQAbgZAbgVQAbgVARgNQARgNABAAQAAgBAJgDQAJgEANABQAOACAOANQAKALgCATQgCATgHATg");
	this.shape_4.setTransform(21.7,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF2BD").s().p("AhxCqQgjgPgGgaQgGgZAMgeQAMgdAUgbQAUgYARgRQAYgZAdgaIA2guIAsgiIASgNIAJgEQAJgEANABQAOACAOANQAKALgCATQgCATgHATQgIAUgHAOIgIAOIgLATIgeAsQgTAbgYAeQgYAegZAZQgbAZgbALQgPAHgOAAQgLAAgLgFg");
	this.shape_5.setTransform(21.7,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ACXAQQgFAFgOAEQgOAFgPADQgPADgHAAQgWgBgWgKQgWgKgPgPQgKgHgJgLQgIgLgKgKQgJgJgOgFQgbgIgUADQgVACgWAOQASAFASgBQASgBASADQASAEALAMQAMANAKALQAMAPAOAKQALAJARAKQAMAGATAEQATAEATgEQATgGAMgLQANgLALgOg");
	this.shape_6.setTransform(47,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FED239").s().p("AA6A6QgTgEgLgGQgRgKgMgJQgNgKgNgPQgKgLgMgNQgLgMgRgEQgTgDgSABQgSABgSgFQAXgOAUgCQAVgDAaAIQAOAFAJAJQAKAKAIALQAJALAKAHQAPAPAWAKQAWAKAXABQAGAAAPgDQAPgDAOgFQAPgEAEgFQgLAOgMALQgOALgSAGQgKACgKAAQgJAAgJgCg");
	this.shape_7.setTransform(47,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6CEAA").s().p("AArAsQgdgFgtgYQgigQgPgMQgPgLgDgHQgCgHACgCIAEgDIAJgDQAJgCANACQANACAMAOIAWAaQANANAQANQASANAWAHQAVAHAagFIgOADIgKABQgMAAgVgEg");
	this.shape_8.setTransform(43.5,7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AA4BJQgcAEgcgJQgZgIgZgMQgIgEgQgJQgPgJgRgMQgRgNgNgMQgMgOgCgOQgCgOAPgMQAIgFAMgCQAPgCAPABQAQACALAEQAOAEAKAKQAJAJAJALQAIAMAKAJQAPAMAWAKQAWAKAWABQAIAAAPgDQAPgDAOgEQAOgFAEgEQgMAOgPAPQgOAQgSALQgRAMgTADg");
	this.shape_9.setTransform(46.9,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7F1D7").s().p("AAABEQgZgIgZgMIgYgNQgPgJgRgMQgRgNgNgMQgMgOgCgOQgCgOAPgMQAIgFAMgCQAPgCAPABQAQACALAEQAOAEAKAKQAJAJAJALQAIAMAKAJQAPAMAWAKQAWAKAWABQAIAAAPgDIAdgHQAOgFAEgEQgMAOgPAPQgOAQgSALQgRAMgTADIgQABQgUAAgUgGg");
	this.shape_10.setTransform(46.9,5.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D6CEAA").s().p("AAABCQgMgDgNgRQgOgQgGgkQgEgdALgNQAKgOAPgDQAOgEANABIANACQgbAJgDAPQgFAPAIAQQAHAPAMAMQALANAFADQAIAGACAHIACAIIglAQIAAAAIgKgDg");
	this.shape_11.setTransform(28.8,-6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AA6gpQgGAGgIAJQgJAJgGAKQgHAIAAAKQAAAKAAANQAAAMgDALQgCAKgJAEQAAAAgKAEQgLADgQgBQgQgBgNgOQgNgOgJgVQgJgVABgTQABgVARgPQAOgKAUgDQAUgEATABQAUAAARABQAQABAHgDQAYgJADgCQgBACgEAFQgGAGgHAJQgHAIgHAGg");
	this.shape_12.setTransform(32.6,-6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7F1D7").s().p("AgdBNQgQgBgNgOQgNgOgJgVQgJgVABgTQABgVARgPQAOgKAUgDQAUgEATABIAlABQAQABAHgDIAbgLIgFAHIgNAPIgOAOIgOAPQgJAJgGAKQgHAIAAAKIAAAXQAAAMgDALQgCAKgJAEIgKAEQgJADgMAAIgGgBg");
	this.shape_13.setTransform(32.6,-6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE9A4").s().p("AibAsQAggUAigIQAigJAagFQASgCAZgNQAZgMAbgPIAygdIAjgVQAagMAPgCQAPgBAAABIgMAEIgbALIghAQQgPAIgYARIgyAgQgZAQgRAGQgYAKghAGQgiAGglAMQgZAJgSAPQgSAQgLANIgKANQATgpAggVg");
	this.shape_14.setTransform(5.6,9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("ADljYQgDgGgIgDQgHgEgNAHQAAABgEAKQgDALgEAKQgDALgBABQAAgDgQABQgRABgXACQgXACgTADQgSACgEABQgkAOgfAUQgiAUgiAUQgiAUgkAMQgUAGgWACQgVADgUAHQgNAFgSAJQgSAJgRANQgSAKgLAQQgLAPACARQAIgEAGgHQAGgIAIgFQARgJAUgCQAUgCATgDQAVgDAVgBQAVgCAUgFQAOgGAMgJQAMgJAMgKQAMgJAOgGQAZgKAYgGQAWgFAXgGQAXgGAWgMQAWgLAUgXQAHgHANgFQANgGANgBQAOgCAKADQABAHgGAJQgGAJgDAGQgFAKgDAKQgEAKAAALQABARAIAWQAJAWAJAWQAJAYADAWQACAWAGAVQAGAVALAQQAKAQAPAIQAZALAVAQQAVARAOAaQADgQgDgPQgDgOgKgMQgJgKgOgRQgNgRgKgRQgKgQgBgLQAAgGgDgZQgCgZgFgfQgEgigFghQgGghgFgYQgFgYgEgFQAAAAAAgKQAAgJADgMQACgMAHgIQAAgBgDgGg");
	this.shape_15.setTransform(17.7,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FED239").s().p("AEmC4QgVgQgZgLQgPgIgKgQQgLgQgGgVQgGgVgCgWQgDgWgJgYIgSgsQgIgWgBgRQAAgLAEgKQADgKAFgKIAJgPQAGgJgBgHQgKgDgOACQgNABgNAGQgNAFgHAHQgUAXgWALQgWAMgXAGIgtALQgYAGgZAKQgOAGgMAJIgYATQgMAJgOAGQgUAFgVACQgVABgVADIgnAFQgUACgRAJQgIAFgGAIQgGAHgIAEQgCgRALgPQALgQASgKQARgNASgJIAfgOQAUgHAVgDQAWgCAUgGQAkgMAigUIBEgoQAfgUAkgOIAWgDIAqgFIAogDQAQgBAAADIAEgMIAHgVIAEgLQANgHAHAEQAIADADAGIADAHQgHAIgCAMQgDAMAAAJIAAAKQAEAFAFAYIALA5IAJBDIAHA4IADAfQABALAKAQQAKARANARIAXAbQAKAMADAOQADAPgDAQQgOgagVgRg");
	this.shape_16.setTransform(17.7,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D6CEAA").s().p("AhjAsQgLgCgMAAIgZgBQAEAAAIgFIAOgKIALgHQAVgLAVgGQATgDATgDQAUgDASgHQAigMAjgHIBHgOQgmAigpAaQgTALgSAFIgmAKQgcAJgcAAQgSAAgTgEg");
	this.shape_17.setTransform(4.5,12.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ACyg4QAWgFABAAQgBABgTAQQgUAQgfAWQggAUglATQgmASgiAGQgwAGgvgBQgvgBgvgDQAFgOANgIQAOgHAQgEQAPgEANgCQAagGAYgMQAYgJAagGQAfgHAmgIQAmgIAkgHQAkgHAXgFg");
	this.shape_18.setTransform(7.6,12.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7F1D7").s().p("AhqA+QgugBgwgDQAFgOAOgIQANgHAQgEIAcgGQAagGAYgMQAYgJAagGIBFgPIBKgPIA7gMIAXgFIgUARQgUAQggAWQggAUgkATQgmASghAGQgqAFgpAAIgNAAg");
	this.shape_19.setTransform(7.6,12.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D6CEAA").s().p("AAmB+IgmgLQgQgFgEgEQgFgFgHgNIgNggQgDghgJggQgIgggPgfQACgTAEgQIAIgcIAQAjIAWAvIAXAyIASAmQAKAUANAUQANATAMAPIAUAaIgrgJg");
	this.shape_20.setTransform(39.6,23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AhGiRQgBAAgEAPQgFAQgEAWQgFAWgBAXQgBAXAIAPQAKATAKAaQALAaAJAWQAJAWAHAHQAGAFATAGQAQAGAWAFQAWAFAQADQAQADABAAQAAAAgOgQQgNgRgSgZQgRgZgOgbQgLgVgMgcQgPgfgOgeQgOgegJgUQgKgVAAAAg");
	this.shape_21.setTransform(39.9,22.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7F1D7").s().p("ABKCPIgmgIIgmgLQgTgGgGgFQgHgIgJgVIgUgwQgKgagKgSQgIgQABgWQABgXAFgXQAEgWAFgQIAFgPIAKAVIAXAzIAdA8IAXAxQAOAbARAaIAfAoIAOARIgRgDg");
	this.shape_22.setTransform(39.9,22.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE9A4").s().p("AgmAiQgKgCgRgFQgXgIgXgEIgpgJQgTgDgKgDQgLgCgSgJIgfgQIgPgIIAJABQAIABAGAFQADACAVAGIA1AOIBFAMQAlAHAjAEQAhAEAZgBQAggCAjgEIBDgJIA4gGIAYgDIgiAFIhOAOQgoAHggADIg7AGIgeAEIgGABIgQgCg");
	this.shape_23.setTransform(-24.3,-31.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJAIIgBgCIACgJIAFgCIAIgEIAGAGIgGAGQgFAFgDACQgFAAgBgCg");
	this.shape_24.setTransform(-50,-33.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE9A4").s().p("AjHAbIgOgIIAVACIA4ACQAiABApgCQAqgCAogHIAWgDIA1gKQAggEAfgIQAggIAXgKIgaAMQgbAMg0ALQg0AOhLAIQgnAEguAAQgtAAgzgEg");
	this.shape_25.setTransform(-32,-15.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE9A4").s().p("Al0BTIAigBQAjgCA8gFQA8gGBQgOQBPgNBagXQBdgVBggkQA6gWA5gaIADAGIgMAJQgOAKgYAOQgaANgmAPQghAMgrAJQgqAKguAKIhdAUQhiAWhOALQhOAKgzACIgZAAQgfAAgNgEg");
	this.shape_26.setTransform(-21,-24.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7A5F13").s().p("AhMAZQg0gGgfgNQgggLgOgLIgPgLIAaAFQAsAUA4AFQA3AHA1gBQA4gBAvgFQAugDAdgFIAcgEQhjAbhJAHQgnADgeAAQgfAAgYgDg");
	this.shape_27.setTransform(-35.9,-11.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE9A4").s().p("AjIBvQBXgRBDgcQBBgcAwggQAxgeAfgdQAfgdAPgSIAIgLQgwBBg1ApQg4Arg0AYQg2AZgrAKQgrALgaACIgZACIgBgBg");
	this.shape_28.setTransform(-7.4,-2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE9A4").s().p("AkDC4QBJgSBBgiQBBgiA4gqQA5gqAugoQAugqAggkQAhgkARgVIASgXIAKADQhRBjhMBDQhNBAg/ApQhCAogxAVQgxAUgcAHIgcAHIgBgBg");
	this.shape_29.setTransform(-5.5,-10.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7A5F13").s().p("AjUA+IASABQAbABAugDQAtgDA5gMQA3gMA8gbQA9gZA4guIgRAQQgQAPgiAWQgiAUg0AUQg0AUhFAKQgpAGgvAAQgeAAghgDg");
	this.shape_30.setTransform(-7.8,3.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B2774B").s().p("AAFAhIgEgMQgBgGgEgCQgGgCgCgKQgBgIAEgLQADgKAAgDIgBgEIAUgDIgGBNIgCgGg");
	this.shape_31.setTransform(23.5,-31.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAJQgHgCgBgFQgCgCABgEIABgFQAJAEAIACIALADIACAHIgHACIgHABIgIgBg");
	this.shape_32.setTransform(-32.4,9.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjgCWIA0gOQAhgJAngOQAogOAngTQAmgTAhgXQAyghAlggQAlghAXgcQAYgdAMgSIAMgSIgKASQgKASgVAdQgWAdgiAiQgiAggwAhQg6AnhMAfQhNAfhjANIAUgEg");
	this.shape_33.setTransform(-7,-5.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#E2B72B","#9B7B18"],[0,1],13,-13.5,-0.5,9.9).s().p("AkBDhIgCAAIgOADQgKABgGgEIgEgEQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAAAQAIADALgCQAKgCAIgEIAJgDIAaACQAaABArgBQAqgBA0gIQAzgIAygSQA1gTAsgiQA2grAbguQAagtAIgoQAHgpgBgZIgCgaIAFgIIAJgOQADgFAAgLQAAgKgBgMQgCgLgDgGQgCgGAGgCQAGgDAHgBIAIAAIgDAWIgDAeIgBAbQAAAIABADIAAANQABAUgGAmQgFAmgTAsQgTAvgoAtQhFBOh0AeQhHAShbAAQg1AAg6gGg");
	this.shape_34.setTransform(-4.7,-12.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AEsjqQAAAAgCAMQgBAMgCARQgCARAAAPQgBAOABAGQABADAAAZQgBAZgIAmQgIAmgUApQgUAsgmApQgmApg8AfQg9AfhXANQhZANh6gNQgBABgJABQgJACgJgCQgKgCgCgKQgDgOAFgFQAEgFAKABQAFAAAdgHQAegIAxgVQAygWBAgpQA/gpBKhAQBLhDBPhhQAAgBACgJQACgJAEgMQAEgMAFgJQAGgKAHgBQAQgDAJABQAJABAAABg");
	this.shape_35.setTransform(-4.6,-12.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FED239").s().p("AkCDmIgKACQgJACgJgCQgKgCgCgKQgDgOAFgFQAEgFAKABQAFAAAdgHQAegIAxgVQAygWBAgpQA/gpBKhAQBLhDBPhhIACgKIAGgVQAEgMAFgJQAGgKAHgBQAQgDAJABIAJACIgCAMIgDAdIgCAgQgBAOABAGQABADAAAZQgBAZgIAmQgIAmgUApQgUAsgmApQgmApg8AfQg9AfhXANQgsAHg1AAQg1AAg9gHg");
	this.shape_36.setTransform(-4.6,-12.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAGAQQgrgDgZgHQgZgGgJgDQgGAEgHACIgIACIAAgSQAPADAGgDIAGgEIAAAGIAMAGQAMAFARAEQATAGAXACQAdADAcABIAxAAIATAAQgjACgeAAQgaAAgVgCg");
	this.shape_37.setTransform(-49.7,-14.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#E2B72B","#9B7B18"],[0,1],8.3,-17.4,-4.1,4.1).s().p("AjSCbQg3gCgngNQgngMgZgQQgZgRgLgMIgMgMQgEgGAAgHIABgDQABgDADgBIAFgCQAxAnA6AQQA6ARBAgBQA/AABBgLQA/gLA/gPQAsgKArgOQAqgOAogUQAWgMAVgNQAVgLASgQQAMgKAEgNIAKgYQAEgNAIgLIANgPQAGgIAFgJQACgDAIgIQAHgJAIgDQAIgEACAKIAAABQAAAHgIALQgHALgJAIIgDAEIADAEIACACIABAHIAAABQAAAIgHAQQgIAQgXAbQgXAYgtAnQg3AuhDAZQhDAYhHAKQhEAKhAABIgxABIg/gBg");
	this.shape_38.setTransform(-19.4,-21.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AGXhtQAFgGAGgIQAGgJACgIQACgIgHgEQgPgIgLgCQgMgCgMAMIgUAhQgBABghAPQgiAQhAAXQg/AYhZAYQhXAXhuASQhuATh/AFIglgDQgBAAgHABQgHABgFAHQgEAGAIAPQAAAAALANQAMAMAZARQAZARAoANQAoANA5ACQA4ABBDgBQBCgCBDgKQBFgLBBgZQBAgZA2gsQAzgtAYgbQAXgdAGgRQAFgRgDgHQgCgGgBAAQAAAAAGgHg");
	this.shape_39.setTransform(-19.4,-22);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FED239").s().p("AjSCjQg5gCgogNQgogNgZgRQgZgRgMgMIgLgNQgIgPAEgGQAFgHAHgBIAIgBIAlADQB/gFBugTQBugSBXgXQBZgYA/gYQBAgXAigQIAigQIAUghQAMgMAMACQALACAPAIQAHAEgCAIQgCAIgGAJIgLAOIgGAHQABAAACAGQADAHgFARQgGARgXAdQgYAbgzAtQg2AshAAZQhBAZhFALQhDAKhCACIhAAAIg7AAg");
	this.shape_40.setTransform(-19.4,-22);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AA6A0Ig+gCQg2gEgngPQgogPgagQQgagRgNgNIgOgPIAIgGIAKAPQALAOAbATQAbARAwAPQAwAQBJADQBLAEBqgQIhEALQgaAEgUABIgdAAIgQAAg");
	this.shape_41.setTransform(-28.5,-29.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#E2B72B","#9B7B18"],[0,1],3.4,-10.5,-3.3,1).s().p("AixA9IgRgHQgQgHgYgPQgZgPgZgUQgZgXgSgfIAAgGIACgKQACgGAEgDQAsA+A7AeQA7AgBFAIQBFAJBGgJQBJgJBGgVQBHgUA/gZQgdAYgtAXQguAZg/ARQg/ARhRABIgIABQhNAAhdgWg");
	this.shape_42.setTransform(-18.4,-27.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AEmhDQAIgJALgJQAMgJAKAAQAPgBADAGQADAFgIAUQgCAHgRASQgRATgfAVQgfAXguAWQguAWg8AOQg9AOhJgBQhMAAhbgVQAAAAgRgHQgQgHgYgPQgZgPgZgXQgZgUgSgfQAAgBAAgFQAAgGACgGQACgGAGgCQAGgCALAIQABAAAgAKQAfAKA1AMQA0ALA/AGQA+AFA8gIQB8gSBCgLQBCgKABgBQABAAAIgJg");
	this.shape_43.setTransform(-15.8,-28.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FED239").s().p("AgkBfQhMAAhbgVIgRgHQgQgHgYgPQgZgPgZgXQgZgUgSgfIAAgGQAAgGACgGQACgGAGgCQAGgCALAIIAhAKQAfAKA1AMQA0ALA/AGQA+AFA8gIQB8gSBCgLIBDgLIAJgJQAIgJALgJQAMgJAKAAQAPgBADAGQADAFgIAUQgCAHgRASQgRATgfAVQgfAXguAWQguAWg8AOQg7ANhGAAIgFAAg");
	this.shape_44.setTransform(-15.8,-28.7);

	this.addChild(this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-39.3,126.2,78.7);


// stage content:
(lib.bananaCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bananas("synched",0);
	this.instance.setTransform(100,100.1,1.577,1.577);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;