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



(lib.salad = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73CA79").s().p("AAHAcIgQABIgdgdIANAFIAFAFIAIAKQAFAGACAAQADAAACgCIAFgEIgFgUIgGgHIgCgDIgGgGQgDgEgDAAQAAgBgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgFIABgDIgEgQIAEAHIAJAQIAGAJIAFAFIAEAGQADADABADIADAKQABAFADAGQACAEAFAFIAJAHIABgFIABgJIADgKIACgJQAAgFABgEQACgFgCgEIgEgHIgGgKIgDgHIAEAIIAJAKIADAVIgGAYIgBAPIAEACIgFAGg");
	this.shape.setTransform(-1,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73CA79").s().p("AATBKQgCgFAAgGIAAgGQACgHgBgKQAAgJgGgNIgZgSIgCgDIgDgJIgCgMIgCgTIgCgSIAAgJIABAJIAEAUIAEAWIADANIAFAGIAHAFIAIAGQgGgLgCgOQgBgNABgLIABgRIADgRIABgHIAAAIIgBAQIgBASQgCALADAPQAEANAIAPQAHAMAAALQAAALgBAGIgBAGQAAAFACAFIACAGIgEABIgCgGg");
	this.shape_1.setTransform(8.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#CEAC67"],[0.004,1],-5.6,5.1,0,-5.6,5.1,13.2).s().p("AAHAqQgIgBgKgGQgJgGgHgKQgHgLgCgIQgCgLADgKQADgJAIgGQAIgFAKAAQAIABAJAGQAKAGAHAKQAHAKACAJQACALgDAKQgEAKgHAFQgHAFgJAAIgCAAg");
	this.shape_2.setTransform(-17.9,-7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CEAC67").s().p("AAIAwQgJgBgLgHQgLgGgIgMQgIgMgDgLQgCgNAEgKQADgLAJgGQAKgHALABQAJABALAHQALAGAIAMQAIAMADALQACANgEAKQgDALgJAHQgIAFgKAAIgDAAg");
	this.shape_3.setTransform(-17.8,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#73CA79").ss(1,1,1).p("ADwj1QgIgEgGAEQgGADgDAFQgEAGgCAFQgCAFAAAAIgSgSQAAgBgGADQgGADgJAHQgGAFAAAGQABAGACAFQACAFABAAIgBABQAAAAgEABQgDACgIADQgFACgHAJQgHAIgGAKQgGAKgEAIQgEAHAAAAIgcAlQAAAAgHgCQgGgCgJgCQgJgBgIABQgIACgIAGQgHAFgGAGQgFAFAAAAQAAABgGAEQgGAEgIAFQgJAGgJAFQgHADgFAFQgFAEgHAFQgHAGgMAFQgLAGgTAFQgUAGgKACQgLADgHABQgIABgHADQgIADgMAFQgNAHgPAMQgPANgOAMQgOANgIAJQgJAJAAAAIAwAWQABAAAHAAQAHAAALABQALAAALAAQALAAAJgBQAKgCAFAEQAFADAEAGQADAFAGAFQAGAFABAGQABAGgEAFQgEAFgJABQgJAAgLAFQgKAFgIAFQgHAFgBABQAAAAABAGQABAGACAKQACAJACAJQACAJADAGQACAFAIAFQAHAEALADQAKADALABQALABAKgBQAJgBALgEQAMgEAKgEQALgFAHgDIAHgDQAAAAAIgJQAJgJAMgNQAPgOARgQQASgQAUgPQAUgPAZgGQAYgHAZgBQAOAAAKAEQAJAFAIAIQAHAIAHAKQAHAJAJAJQAEAFAIAGQAIAFAJAHQgDgIgDgIQgEgMgBgMQgBgMABgMQAAgNAAgMQAAgOgDgNQgEgQgFgNQgFgMgDgOQgEgLAAgQQACgVADgVQAEgWACgVQAAgFADgMQADgMADgOQAEgPADgOQADgOACgLQABgKgBgDQgFgKgHgJQgHgIgHgDg");
	this.shape_4.setTransform(-2.2,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#59D362","#449979"],[0.004,1],0.8,-45.1,0,0.8,-45.1,67.7).s().p("AhwD3QgKgBgLgDQgLgDgHgEQgHgFgDgFIgFgPIgEgSIgCgQIgBgGIAHgGIASgKQALgFAJAAQAKgBADgFQAFgFgCgGQgBgGgFgFQgHgFgDgFQgDgGgFgDQgGgEgKACIgTABIgXAAIgSgBIgIAAIgwgWIAJgJIAXgWIAdgZQAPgMANgHIATgIIAPgEIASgEIAegIQATgFALgGQANgFAGgGIANgJQAEgFAHgDQAKgFAIgGIAOgJIAGgFIAFgFIANgLQAIgGAHgCQAJgBAIABIAQAEIAHACIAcglIADgHIAKgSIAOgSQAGgJAGgCIALgFIAEgBIABgBIgDgFQgDgFAAgGQgBgGAHgFIAPgKIAFgCIATASIACgFQACgFADgGQAEgFAGgDQAFgEAJAEQAHADAGAIQAIAJAFAKQABADgBAKIgFAZIgHAdIgGAaIgEARIgFArQgDAVgCAVQAAAQADALQAEAOAFAMQAFANAEAQQADANAAAOIAAAZQgBAMABAMQAAAMAEAMIAHAQIgRgMIgMgLQgKgJgGgJIgPgSQgHgIgKgFQgJgEgOAAQgZABgZAHQgYAGgUAPQgUAPgSAQIggAeIgVAWIgIAJIgHADIgSAIIgWAIIgUAFIgKABIgLgBg");
	this.shape_5.setTransform(-2.2,-2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#73CA79").ss(1,1,1).p("AE0goQANASALAQQAMAPAHAKQAHALAAAAIAAAlQAAAAgGACQgFACgHAEQgIAEgFAGQgEAHABAGQABAGADAEQACAFABAAQgBAAgJAIQgJAIgOALQgOALgOALQgOAKgLAFQgKAFgDAFQgDAFgBAEQAAAEgBACQgBABgFgCQgGgCgKgGQgKgFgLgHQgKgHgKgHQgJgHgFgFQgGgFgGgHQgGgHgCgJQgCgKAEgOQAAAAgKAAQgKgBgQAAQgRAAgTACQgUADgTAGQgUAGgNAMQgUAPgSAQQgSAQgOAOQgOANgJAJQgIAIAAABIgHADQgHADgLAFQgKAEgLAEQgMAEgJABQgKABgLgBQgLgBgKgDQgLgDgHgEQgIgFgCgFQgDgGgCgJQgCgJgCgJQgCgKgBgGQgBgGAAAAQABgBAHgFQAIgFAKgFQALgFAJgBQAJAAAEgFQAEgFgBgGQgBgGgGgFQgFgFgEgFQgEgGgFgDQgFgEgKACQgJABgLAAQgLAAgLAAQgLgBgHAAIgHAAIgxgWIAHgHQAHgHALgKQAMgJANgLQANgKANgHQAMgHAKgFQAJgFAJgCQAKgEANgEQAMgFAUgGQATgFALgGQAMgFAHgGQAHgFAFgEQAFgFAHgDQAJgFAJgGQAJgFAGgEQAGgEABgBQAAAAAFgFQAFgGAIgFQAHgGAIgCQAIgBAJABQAKACAGACQAHACAAAAIAZglQAAAAAEgHQAEgIAGgKQAHgKAGgJQAHgIAGgCQAIgDADgCQADgBABAAIAAgBQAAAAgDgFQgCgFAAgGQgBgGAGgFQAKgHAGgDQAFgDABABIASASQAAAAACgFQABgFAEgGQAEgFAGgDQAFgEAIAEQAIADAIAKQAHAJAFALQAGALADAIQADAIAAABIAEAHQAFAHAHAMQAHALAKANQAJAMAJALQAKAMAJAGQAKAHAMAPQANAOANARg");
	this.shape_6.setTransform(6.7,-2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#59D362","#65AE79"],[0.004,1],35.2,-11.2,0,35.2,-11.2,28.1).s().p("AjJD3QgLgBgKgDQgLgDgHgEQgIgFgCgFIgFgPIgEgSIgDgQIgBgGIAIgGIASgKQALgFAJgBQAJAAAEgFQAEgFgBgGQgBgGgGgFQgFgFgEgFQgEgGgFgDQgFgEgKACIgUABIgWAAIgSgBIgHAAIgxgWIAHgHIASgRIAZgUQANgKANgHIAWgMIASgHIAXgIQAMgFAUgGQATgFALgGQAMgFAHgGIAMgJQAFgFAHgDIASgLIAPgJIAHgFIAFgFQAFgGAIgFQAHgGAIgCQAIgBAJABIAQAEIAHACIAZglIAEgHIAKgSIANgTQAHgIAGgCIALgFIAEgBIAAgBIgDgFQgCgFAAgGQgBgGAGgFQAKgHAGgDIAGgCIASASIACgFQABgFAEgGQAEgFAGgDQAFgEAIAEQAIADAIAKQAHAJAFALIAJATIADAJIAEAHIAMATIARAYIASAXQAKAMAJAGQAKAHAMAPQANAOANARIAYAiIATAZIAHALIAAAlIgGACQgFACgHAEQgIAEgFAGQgEAHABAGQABAGADAEIADAFIgKAIIgXATIgcAWQgOAKgLAFQgKAFgDAFQgDAFgBAEIgBAGQgBABgFgCIgQgIIgVgMIgUgOIgOgMIgMgMQgGgHgCgJQgCgKAEgOIgKAAIgagBQgRAAgTACQgUADgTAGQgUAGgNAMQgUAPgSAQIggAeIgXAWIgIAJIgHADIgSAIIgVAIIgVAFIgKABIgLgBg");
	this.shape_7.setTransform(6.7,-2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#73CA79").ss(1,1,1).p("AC3ghQgGgIgCgCIgBgCIAJgSIgbg6IgTAAIgVgfIgGACQgGACgJAEQgJADgHAGQgIAGgEAIQgDAIgGAFQgGAFgHAEQgGADgEABIgEABQgBAAgKAAQgKgBgNAAQgPgBgQAAQgQAAgNACQgMABgGACQgEADgLAJQgKAIgNAKQgNALgMAKQgMAJgIAHQgIAGAAABIgMBEICrBVIAsgSIADAHQAEAGAFAHQAGAIAGAEQAGAFAGgDQAFgDAKgEQALgFAMgHQANgGAMgKQANgJAIgNQAJgMACgRQAAAAgFgGQgFgGgGgJQgGgIgEgJQgEgKgBgHQABAAAEABQAFAAAFACQAFACACAEQABAFAEABQAEABACAAQAEAAAAgBQAAAAAEgHQADgIAEgKQAEgJACgKQABgKgDgFg");
	this.shape_8.setTransform(45.2,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#59D362","#65AE79"],[0.004,1],0.5,-27.9,0,0.5,-27.9,42.3).s().p("AA3CWQgGgEgGgIIgJgNIgDgHIgsASIirhVIAMhEIAIgHIAUgQIAZgVIAXgSIAPgMQAGgCAMgBQANgCAQAAIAfABIAXABIALAAIAEgBIAKgEQAHgEAGgFQAGgFADgIQAEgIAIgGQAHgGAJgDIAPgGIAGgCIAVAfIATAAIAbA6IgJASIABACIAIAKQADAFgBAKQgCAKgEAJIgHASIgEAHIgEABQgCAAgEgBQgEgBgBgFQgCgEgFgCIgKgCIgFgBQABAHAEAKQAEAJAGAIIALAPIAFAGQgCARgJAMQgIANgNAJQgMAKgNAGIgXAMIgPAHIgFABQgDAAgEgDg");
	this.shape_9.setTransform(45.2,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#73CA79").ss(1,1,1).p("AA+hDIgZADIABgFQAAgEgBgJQgBgJgFgMQgHgTgKgJQgJgIgFACQgEABgFAFQgEAEgFAFQgEAFgDAEQgDADAAABIgigHIgqAiQgBAAgFAJQgGAIgGANQgGANgCAPQgCAPAGAKQAFAJAPANQAPANATAQQAUAQAWAPQAVAPARANQASAMAMAIIALAIIAfgTIgJgVIA3gnIAGgHIgGgVQAAAAABgEQACgFABgGQABgGgBgFQgCgFgFgBQgIgDgIgGQgIgFgFgFQgFgFAAAAIgJgcg");
	this.shape_10.setTransform(43.6,-17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#59D362","#65AE79"],[0.004,1],0.4,-25.3,0,0.4,-25.3,37.4).s().p("AAmCDIgegUIgmgcQgWgPgUgQIgigdQgPgNgFgJQgGgKACgPQACgPAGgNQAGgNAGgIIAGgJIAqgiIAiAHIADgEIAHgJIAJgJQAFgFAEgBQAFgCAJAIQAKAJAHATQAFAMABAJIABANIgBAFIAZgDIASAPIAJAcIAFAFIANAKQAIAGAIADQAFABACAFQABAFgBAGQgBAGgCAFIgBAEIAGAVIgGAHIg3AnIAJAVIgfATg");
	this.shape_11.setTransform(43.6,-17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#73CA79").ss(1,1,1).p("ADuhaQgegIgggIQgggHgfgGQgegGgagDQgagDgRAAQgPAAgWAFQgXAFgYAIQgYAHgUAIQgVAIgNAFQgMAFgBABIhlBTIgHACQgIACgLAGQgLAEgKAIQgLAHgGALQgHANgCAJQgCAJABAEQABAEAAAAQAAABAQAGQAPAGAbAJQAbAJAkAIQAkAHApACQApADAsgHQAsgGAogTIAEg6QgBAAgCgCQgBgBgCgCQgCgCABgCQABgDAGgEQAHgEADgCQAEgCAAgBIABAAIgDAHQgDAHgBAJQgCAJADAIQADAIAEAIQAEAJAEAFQADAGAAAAIANgCQAMgCAVgEQAVgDAZgFQAZgFAagFQAagFAWgFQAXgFAQgEQAQgEAEgCQAHgEAGgLQAGgKADgPQADgMgDgPQgCgQgLgNQgLgNgWgJQgWgIgdgIg");
	this.shape_12.setTransform(9,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#82EB79","#65AE79"],[0.004,1],1,-24.2,0,1,-24.2,45.1).s().p("AiJCDQgpgCgkgHQgkgIgbgJQgbgJgPgGIgQgHIgBgEQgBgEACgJQACgJAHgNQAGgLALgHQAKgIALgEQALgGAIgCIAHgCIBlhTIANgGIAigNQAUgIAYgHQAYgIAXgFQAWgFAPAAQARAAAaADQAaADAeAGQAfAGAgAHIA+AQQAdAIAWAIQAWAJALANQALANACAQQADAPgDAMQgDAPgGAKQgGALgHAEQgEACgQAEIgnAJIgwAKIgzAKIguAIIghAGIgNACIgDgGIgIgOIgHgQQgDgIACgJQABgJADgHIADgHIgBAAIgEADIgKAGQgGAEgBADQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIADADIADACIgEA6QgoATgsAGQggAFgeAAIgXgBg");
	this.shape_13.setTransform(9,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#73CA79").ss(1,1,1).p("ACOhMQgiAKghAAQghAAgggFQgegFgggGQgggGghgCQgIgCgJAJQgJAJgIAOQACAAAAAAIAAAGQAAAFAAAPQAAAIAEALQADALAEAJQAEALADAHQAEAHAAABIA2AXIAoAIIAWAJIATAAQAAAAAFABQAFACAGABQAHACAEAAQAEAAAGACQAGACAGADQAGADAFACQADABABABQgFgKAFgIQAEgJAKgHQAKgHAKgFQAKgFAFgBQAFgBACgFQACgGAAgGQABgHgBgEIAAgFQAAAAgCgIQgCgJgCgWQgBgKAEgIQAEgIAGgFQAFgFAFgCQAEgCAAAAQAAAAABgFQgFABgFACg");
	this.shape_14.setTransform(-32.8,14.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#73CA79").ss(1,1,1).p("ADYAFQAAgCAAgCQAAgIAEgHQgugIgrgNQgsgMgqgSQgpgTgkgaQgiAPghAEQghABgegJQgfgIgcgTQAHAOALAOQALAOAUAQQARAPATAIQATAJASAFQARAFAMACQAMACADAAIADAAIAAAaQAAAIADAJQACAKAEAKQAEAKADAIQADAIACACQABABAIADQAIADAKAFQAJAEAHADQAIADABABIAnAIIAFACQAFADAFACQAGACAAAAQABAAAFAAQAFAAAFAAQAFAAABAAQAAAAAFABQAFACAGABQAGACAFAAQADAAAGACQAGACAGACQAHADAEADQgBgDAAgCQAAgFACgEQADgHAIgHQAGgGAJgEQAIgFAHgDQAHgDAEgBQADgBABgEQACgDABgGQAAgFAAgFQAAgFAAgDQAAAAgCgJQgCgKgCgVg");
	this.shape_15.setTransform(-42.2,10.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#69E86B","#65AE79","#469B79"],[0.004,0.541,1],-20.4,-15.7,0,-20.4,-15.7,48.2).s().p("ACXB5IgMgEIgJgCIgLgCIgLgDIgFgBIgGAAIgKAAIgGAAIgGgCIgKgFIgFgCIgngJIgJgDIgQgHIgSgIIgJgEIgFgLIgHgRIgGgUQgDgKAAgHIAAgaIgDAAIgPgCQgMgCgRgFQgSgFgTgJQgTgIgRgPQgUgQgLgOQgLgOgHgNQAcARAfAKQAeAIAhgBQAhgEAigOQAkAZApATQAqASAsANQArAMAuAIQgEAGAAAJIAAADIAEAgIACAJIAAAIIAAAKQgBAGgCADQgBAEgDABIgLAEIgPAIQgJAEgGAGQgIAGgDAIQgCAEAAAEIABAFIgLgFg");
	this.shape_16.setTransform(-42.2,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#73CA79").ss(1,1,1).p("ADDg8QALAMAMAOQAMAOAKANQAKAKAFAHQAEAHACAMQACALAAANQABAOgBALQgBAMAAAHQgBAIAAAAQgBAAgEACQgEADgGAEQgGAFgEAIQgEAIABAKQADAWACAJIABAKQAAAAABAFQAAAEgBAHQAAAGgCAGQgCAFgFABQgFACgKAEQgKAEgKAIQgJAHgFAJQgFAJAGAJQgBAAgEgCQgEgCgGgDQgHgDgGgCQgGgCgDAAQgFAAgGgCQgHgBgFgBQgEgCgBAAIgVAAIgVgIIgogJIg1gXQAAgBgDgHQgEgHgEgLQgEgLgDgLQgDgLAAgIQAAgPAAgFIAAgGQgEAAgNgBQgMgCgRgFQgSgGgTgJQgTgJgSgOQgQgOgLgMQgKgMgHgMQgHgLgGgMQgHgKgJgNQgLgRgEgJQgDgKACgDQABgEAAAAIgPgUIACgIQACgHAEgKQADgKAFgIQAGgJAFgDQAIgFAHgDQAHgCAGgFQAGgEADgHQACgGgBgLQgBgMgCgPQgCgNAAgMQgBgMACgGQAFgKAFgEQAFgDAAAAIAoAvIAPgEIArAGQAAABABAFQABAEADAHQAEAHAFAHQAFAGAIAEQAIACAKACQAKABAJAAQAJABAGgBQAGAAAAAAIA1ADIB3BUIAIAIQAHAIALANg");
	this.shape_17.setTransform(-43.7,-3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#59D362").s().p("ACxEOIgKgFIgNgFQgGgDgDAAIgLgBIgMgDIgFgBIgVAAIgVgIIgogJIg1gYIgDgHIgIgSIgHgWQgDgLAAgIIAAgUIAAgGIgRgBQgMgDgRgFQgSgFgTgJQgTgJgSgOQgQgOgLgMQgKgMgHgMIgNgXIgQgXQgLgRgEgKQgDgJACgDIABgEIgPgVIACgHIAGgRQADgJAFgJQAGgIAFgEIAPgIQAHgDAGgEQAGgEADgHQACgGgBgMIgDgaIgCgZQgBgMACgGQAFgKAFgDIAFgEIAoAvIAPgEIArAGIABAGIAEALQAEAHAFAGQAFAHAIADQAIAEAKABIATABIAPAAIAGAAIA1ADIB3BUIAIAIIASAVIAXAaIAWAbIAPARQAEAHACALQACAMAAANIAAAZIgBATIgBAIIgFACIgKAHQgGAFgEAIQgEAHABALIAFAfIABAJIABAGIgBALQAAAGgCAGQgCAFgFABIgPAGQgKAEgKAHQgJAHgFAJQgFAKAGAJIgFgCg");
	this.shape_18.setTransform(-43.7,-3.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4DA055").s().p("Aj1DZQgagDgVgIQgVgIgTgMQgTgMgSgPIgegXIgVgPIgHgFIgBAAIgGABIgOADIgPADIgHACIgGgHIgIgKIgFgFIgBAAIgHABIgFgCIAAAAIACgEIAMgPIAVgaIAXgdIASgYIAIgIIABgBIgBgCIgHgMQgFgJgEgJQgDgJgBgHIABgEQABgDAEgBIAEADIAFAEIACACIADgDIgDgEIgHgIIgIgKQgDgEgBgGIgBgLIgBgFIAAgBIgDgGIgHgNIgFgOQgBgHABgIIAAgKQAAgFgDgEQgKgPgEgLQgFgLACgFIACgDQAIALAIAKQAIAKAGAMQAFANAEAQQAEAQAGAOQAHAPANAHIANAHQAGADADAHQACAEAAAFIAAAKQAAAGADAEQAFAIAKAEIASAIQAJAEAGAHQAEAFABAFIACAJQABAFAEAEIAMAJIANAIIASAMIATANQAKAHAGAHQAHAIAEAKQADAKAHAJIALANQAGAIAGAFQANAKAQAEQAQAEAQgDQAPgCARgIIAigOQASgHARgCQARgCAPAJQAVAOAWAEQAXAEAVgCQAWgCAVgFIArgMQAWgGAVgDQAWgDAVACQATACARAFIAiAIQARADATAAIgIgUIgIgTQgCgJAEgCQALgHAMACQALABAMAGIAYALQALAGAKACQALACAIgFIAFgEIAIASIAJAQIADAFIAIAJIAHALIAFAHIgOAEIgVAGIgWAFIgQACQgHgBgOgDIgdgJIgagIQgMgEgGAAIgUABIgrADIg7AEIhCAEIhDAFIg6AEIgpADIgUABIgNADIgeAJIgpAKIguAKQgXAFgUACIgYABIgKAAg");
	this.shape_19.setTransform(-2.1,-19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#69E86B").s().p("AA0AqQgHgDgGgFIgIgJIgDgGQgBgFgCgCIgFgBIgGAAIgEgBIgFgCIgBgCQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgCgCIgFgDIgOgLQgHgFgHgDQgIgDgHgBIgPgBQgKAAgKgDIgTgGQgGgBgEACQgEABgDADIgJAGIAEgIIgBAAQAAgHAFgDQAFgCAGABIAMAAIAVACIAUABIAOAAQAIABAFADIALAHIASAOIAWAQQAKAGADAGIACACQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQADAAACgDIAFgJIAHgKQADgHAGgFQAFgFAIgCQAIgBAKAAQAJABAHACQAFADABADIAEAIQACAEADACIgHgCIgHgCIgEgDIgGgDQgCAAACAFQgEgBgCgEQgGADgBADQgCADABAEQAAAHgCABIgJAAIgJAAQgEABgCAFQgBAEABADIADAHIABAHQAAAJgFABIgCAAQgEAAgGgDg");
	this.shape_20.setTransform(-34.5,-45.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#69E86B").s().p("AFGDrIgIgPIgHgQQgEgGgEgFQgMgQgJgRQgJgSgEgTQgCgLAAgLIgCgXQgBgMgDgKIgIgQIgHgSIgCgKIgCgKQgBgCgEgDIgFgEQgJgIgEgIQgDgKAAgLIADgLQADgGAAgFQgBgEgCgCIgDgDIgGgDQgFgDgEgGIgFgMQgEgFgEgEQgFgBgEAAIgLAAIgKABQgFgBgDgDIgGgFQgJgDgEABQgEACAAAHQABAGADAHQgKAAgHgFIgQgJIgOgDIgOgDQgHgCgDgFIAAgFIgCgGIgDgDQgDgBgBgEQgCgEADgDQABgEADgCQADgDACgEQgGAAgEADIgIAFQgFADgEACQgFAAgEgBIgIgDQgFgBgFABQgTADgLANQgKAOABAUIgLAGIgLAFQgLAEgJgFQgJgFgGgKQgHgJgDgIQgCgFgEgDIgIgFQgHADgHgCQgGgBgGgGIgGgGQgDgCgBgFIABgFIgBgDQgCgEgEgCQgEgDgCgDIAAgEIgBgDQgDgDgEAAQgDABgDADIgDgEIgEgDIgBgEQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgDgEgHgDQgHgDgJgBQgJgBgHACQgHACgCAFQgBAFADAFIAGAKIAEAIIADAJQABAEgCACQgCACgFgEIgFgEQgCgCgDAAQgDgCgEABIgOACQgFAAgGgFIgDgEIgDgFIgIgDIgKgCIgJgCQgGAAgCACQgCABAAAEIgBAIQgHgCgHgDIgOgHQgIgDgHgCQAEgEABgGIAHACIAGAEIABABIABAAIAPgFQAKgCAKgBQALgBAIACQANAFAHAFIAGAGIAEgEIgEgFIgIgNIgFgHIAHgFIALgJIAKgIIAGgEIAbAFQAQAEARAEQASAGANAGQAMAGAFAHIANAYIASAdIAQAZIAIALIACADIABgDIAFgIQADgJAJgLQAHgLALgMQALgMAPgHQANgIARAAQAkAAAVgCIAegDIgIALIgLATIgLASIgGAIIAaAKIABgBIAHgHQADgDAGgDQAFgCAFAAIAYAHIABAAIAEgBIAMgBIANgBIAKAAIAGgCQACgBADABQADABAEAGQAFAGAJAPIAbAxIAVAkQAKASAGAMQADAHACANIAFAZIACAaIACAUIAAAHIADANIAFAbQAFAQAGARQAGAQAJAOIADADIAHAKIAIALIAFAGIgMAEIgQAFIgDgFg");
	this.shape_21.setTransform(12.5,-27);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#73CA79").ss(1,1,1).p("AFjiiQAGAHAHAOQALAUANAWQAMAVALAUQALATAGAOQAEAJADAMQACALACAOQACANABANQABAMAAAHQABAIAAAAQAAABACAKQABALAEAQQAEAQAHARQAGARAJANQAMAQAGAHQAFAHABACIABABQgBAAgJADQgJADgMAEQgOADgMADQgMADgIAAQgHAAgNgEQgNgEgPgFQgPgEgNgEQgMgDgGgBQgDAAgSABQgRABgbACQgcACghACQghACgjACQgiADghACQggACgaACQgYABgPACQgPABgBAAIgLADQgLADgTAFQgTAFgXAGQgXAFgXAFQgXAEgVACQgUADgOgCQgbgDgXgIQgWgJgSgMQgTgMgQgOQgRgNgNgKQgNgKgIgEIgHgFIgrAJIgSgVQgBAAgDAAQgDAAgDAAQgDgBgBgCQgCgCADgFQADgEAKgLQAIgMAMgPQAMgOALgPQAMgOAHgJQAIgJAAgBQgBAAgEgIQgGgIgFgMQgEgLgBgGQAAgJAJgCIAMAKQAAgBgEgDQgDgDgEgFQgEgFgEgFQgDgEgBgHQgBgGAAgFQgBgFAAAAIgDgGQgDgGgEgIQgDgHgCgHQgBgGAAgGQABgGAAgFQAAgGgDgEQgDgEgEgHQgEgHgDgIQgDgIAAgGQgBgHAGgCQAMgEAHAAQAIAAAAABIgBgHQgCgHgBgKQgCgLAAgLQAAgLACgIQADgJAHgDQAKgDAPAAQAOABAPACQAOACALACQAKACAAABQAAAAAJAGQAJAFAMAJQAMAIALAJQAKAJAEAGQADAFADgEQADgFAEgIQAFgJAHgIQAHgJALgCQAPgDAMADQALADAHAEQAHAFAAAAQAAAAAGgCQAGgCAIgBQAJgCAJgBQAKAAAHACQANAFAHAFQAGAEABABIgSgbIAkgcQABAAAKACQAKACAPADQAPAEAPAEQAQAFAKAGQAMAHAEAHQAFAJAJAPQAJAPAJAOQAKAPAGAKIAHAKIAEgIQAEgIAIgLQAIgMALgMQAMgMAPgIQAPgIASAAQAuAAAXgDQAWgDAAAAIgkA6IAVAJQABAAAEgFQAEgEAGgEQAGgDAHABQAJACAHACQAIACAAAAIAFAAQAFgBAHgBQAGAAAHgBQAGAAAEAAQADAAADgCQADAAADABQADABAFAGg");
	this.shape_22.setTransform(-2,-24.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#59D362").s().p("Aj2EKQgbgDgXgIQgWgJgSgMQgTgMgQgOIgegXIgVgOIgHgFIgrAJIgSgVIgEAAIgGAAQgDgBgBgCQgCgCADgFIANgPIAUgbIAXgdIATgXIAIgKIgFgIQgGgIgFgMQgEgLgBgGQAAgJAJgCIAMAKIgEgEIgHgIIgIgKQgDgEgBgHIgBgLIgBgFIgDgGIgHgOQgDgHgCgHQgBgGAAgGIABgLQAAgGgDgEIgHgLIgHgPQgDgIAAgGQgBgHAGgCQAMgEAHAAIAIABIAAAAIAAAAIgBgHIgDgRQgCgLAAgLQAAgLACgIQADgJAHgDQAKgDAPAAQAOABAPACIAZAEIAKADIAJAGIAVAOIAXARQAKAJAEAGQADAFADgEIAHgNQAFgJAHgIQAHgJALgCQAPgDAMADQALADAHAEIAHAFIAGgCIAOgDIASgDQAKAAAHACQANAFAHAFIAHAFIgSgbIAkgcIALACIAZAFIAeAIQAQAFAKAGQAMAHAEAHIAOAYIASAdIAQAZIAHAKIAEgIQAEgIAIgLQAIgMALgMQAMgMAPgIQAPgIASAAQAuAAAXgDIAWgDIgkA6IAVAJIAFgFIAKgIQAGgDAHABIAQAEIAIACIAFAAIAMgCIANgBIAKAAQADAAADgCIAGABQADABAFAGQAGAHAHAOIAYAqIAXApQALATAGAOQAEAJADAMIAEAZIADAaIABATIABAIIACALIAFAbQAEAQAHARQAGARAJANIASAXIAGAJIABABIgKADIgVAHIgaAGQgMADgIAAQgHAAgNgEIgcgJIgcgIQgMgDgGgBIgVABIgsADIg9AEIhEAEIhDAFIg6AEIgnADIgQABIgLADIgeAIIgqALIguAKQgXAEgVACIgXACIgLgBgAECjfIAAAAg");
	this.shape_23.setTransform(-2,-24.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#DAC768","#CEAC67"],[0.004,1],56.1,-13.3,0,56.1,-13.3,141.7).s().p("AivE1QhVgLhJgWQhLgVg8gdQg8gdgsgkQgrgjgXgpQgZgpAAgsQAAgrAZgpQAXgoArglQAsgjA8gdQA8gdBLgVQBJgWBVgLQBUgLBbAAQBcAABUALQBVALBJAWQBLAVA8AdQA8AdAsAjQArAlAXAoQAYApABArQgBAsgYApQgXApgrAjQgsAkg8AdQg8AdhLAVQhJAWhVALQhUALhcAAQhbAAhUgLg");
	this.shape_24.setTransform(0,-6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#997E48").ss(1,1,1).p("ALaAAQgBAwgZAtQgaAtgwAnQgwAohCAgQhDAghRAXQhSAXhdANQhcAMhlAAQhkAAhdgMQhdgNhRgXQhSgXhCggQhDgggvgoQgwgngagtQgagtAAgwQAAgvAagtQAaguAwgmQAvgoBDggQBCggBSgXQBRgYBdgMQBdgMBkAAQBlAABcAMQBdAMBSAYQBRAXBDAgQBCAgAwAoQAwAmAaAuQAZAtABAvg");
	this.shape_25.setTransform(0,-6.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFDF97").s().p("AjBFTQhdgMhRgXQhSgYhCggQhDgfgvgoQgwgngagtQgagtAAgwQAAgwAagtQAagsAwgnQAvgoBDggQBCggBSgXQBRgYBdgLQBdgNBkAAQBlAABcANQBdALBSAYQBRAXBDAgQBCAgAwAoQAwAnAaAsQAZAtABAwQgBAwgZAtQgaAtgwAnQgwAohCAfQhDAghRAYQhSAXhdAMQhcAMhlABQhkgBhdgMg");
	this.shape_26.setTransform(0,-6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C4A953").s().p("ABHEVQhZgUhSglQhSgmhFg2QhDg1gwhAQgug+gahHQgZhHgBhMQBHgKBHgEICOgIIBHgEQgGAbgBAaQAAAbAJAcQAGAZADAaIAGA0QADAZAJAXQAOAbAMAcQALAeAOAcIAQAUIAOAQQAnApAnAaQAoAbAtARQAuASA3ANQAbAHAfADQAfADAiABIBNADQhiAYhrAAQhhAAhcgTg");
	this.shape_27.setTransform(-26,21.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#997E48").ss(1,1,1).p("AJykKQgzgOg0gPQhngfhogHQhogGhtARQgeAEgdAFQgdAFgaAGQgnAHgpAHQgpAHgrAFQhDAHhDAFQhDAEhBADQhHADhIAFQhIAFhHAJQABBNAZBIQAZBIAvA+QAwBBBEA2QBFA2BSAmQBTAlBbATQBcAUBgAAQBkAABdgVQBcgUBSgmQBRgmBCg0QBCg1AwhAQAwg+AZhKQAahJABhQQgzgMgzgOg");
	this.shape_28.setTransform(0.1,17.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#DFD168","#CEAC67"],[0.004,1],47.4,-30.7,0,47.4,-30.7,152.8).s().p("Ai7E7QhcgThTglQhRgmhGg2QhEg2gvhBQgwg+gYhIQgahIAAhNQBGgJBJgFQBIgFBGgDICEgHQBDgFBDgHQArgFAogHIBRgOIA3gLQAdgFAdgEQBtgRBpAGQBoAHBnAfIBnAdIBlAaQAABQgaBJQgZBKgxA+QgvBAhCA1QhDA0hRAmQhRAmhcAUQhdAVhkAAQhgAAhbgUg");
	this.shape_29.setTransform(0.1,17.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#997E48").ss(1,1,1).p("ALajxQhngZhngfQhngfhpgHQhogGhuARQgvAHguAJQgsAIguAIQguAJgwAFQhGAIhGAEQhFAEhFAEQhFADhFAFQhFAFhFAJQABBQAaBJQAaBJAwA+QAwBBBCA0QBDA0BRAmQBRAmBdAUQBdAUBjABQBlgBBcgUQBdgVBSgmQBRglBDg1QBCg1AwhAQAwg/AahKQAZhJABhRQAAAAAAgBg");
	this.shape_30.setTransform(0,17.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#DFD1A8","#CEAC67"],[0.004,1],47.4,-30.7,0,47.4,-30.7,152.8).s().p("AjAE9QhdgUhRgmQhRgmhDg0QhCg0gwhBQgwg+gahJQgahJgBhQQBFgJBFgFQBFgFBFgDICKgIQBGgEBGgIQAwgFAugJIBagQQAugJAvgHQBugRBoAGQBpAHBnAfQBnAfBnAZIAAABQgBBRgZBJQgaBKgwA/QgwBAhCA1QhDA1hRAlQhSAmhdAVQhcAUhlABQhjgBhdgUg");
	this.shape_31.setTransform(0,17.6);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74,-52.3,148.1,104.8);


// stage content:
(lib.saladCJS = function() {
	this.initialize();

	// outline
	this.instance = new lib.salad("synched",0);
	this.instance.setTransform(100,100,1.342,1.341);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;