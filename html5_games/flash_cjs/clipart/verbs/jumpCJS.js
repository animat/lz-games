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



(lib.jump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5A61A").s().p("Ag5CDQAMiZBihzIAFByIgCARIgBAGIgBAFIgBAAIAAAGIAAAAIgBAFIgBAwIgCA+IgMAFQgdAHgWAAQgYAAgTgHg");
	this.shape.setTransform(-67,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAKQgIgKgOAEQgDgFAIgHQADgDgVgIQABgDAOACQALACARAnIgIgLg");
	this.shape_1.setTransform(-65,-32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8A166").s().p("AAMAvQgbgIgQgRQgLgbASgbQAJgOAIAAQARAHARAcIAJAPIgOArIgKAAg");
	this.shape_2.setTransform(-65.5,-34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAaQgNgfAUgdQALgRALABQARAEANAYQANAWACAFIgRgXQgQgXgNgEQgHAAgKAOQgSAbAMAbQAIAMAVAIIAXAIQgzgEgGgVg");
	this.shape_3.setTransform(-65.7,-34.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAYIgEgDQgGgKgNAFIgCABIgBgCQgJgNAEgXQACgFAOAEQAYAKAEASQgBAOgGADIgEACIgCgBgAAJARIADACIABAAQACABADgPQgEgMgVgKQgIgDgCACQgBADAAAEQAAALAGAKIAIAAQAJAAAEAHg");
	this.shape_4.setTransform(-34.5,-59.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F2401").s().p("AAMAWQgEgLgVADIgFgOQgEgLAEgIQAHgGAPALQAQAKABAKQgCAQgFAAIgCAAg");
	this.shape_5.setTransform(-34.6,-59.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663B02").s().p("AhGDoQAAgGAKgJQAEgEAAgGIABACQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQgEAPgKAJIAAAAIAAABIgBACIgCgIgAhFCqQgCgDAAgDIAAgBQADgIALgHIAFgDQAHANAAAMQAAAIgEAEQgGAGgDAEQgEgNgHgJgAg1BvQgHgJgBgHIAAgDQABgEAGgDIAOgHQAFAHADAHIABAEQgBAIgOAJIgDADIgEgFgAkNAoQAAgGACgGIAFAFIACACIgCACIgGAHIgBgEgAkHgUQADgTAOgLQgFALACAOIAAACIgBABIgLALQgCgEAAgFgAD0gTQAGgDAFgVQAAgDgCgDIAEAAQAGgCAGAFQADAGgJAPQgEAHgGAEIgHgBIgHABgAD2g7IgCgBIABgCQACgCABgOQAAgPgSgNIgCgBIABgDQADgBgCgMQgFgLgXgHIgCAAIABgDQACgEgJgPQgJgJgVABIgCABIAAgCQAAgFgRgNQgQgGgWALIgCABIgCgCQAAgCgMgIQgMgHgYAIIgBAAIgBAAQgRgIgTgBQgGACgLAGQgRAMgPgBIgFgCQgMgOgcAmIgCADIgCgDQAAgCgMgBQgMgCgdAgIgBABIgCgBIgQgBQgOgBgOAIQgMAKgBATIAAABIgBABIgQAJQgPAJgNAQQABggAZgSQAYgSAEgBIACAAIAAgCQABgTAMgJQANgJAPABQAPABABABIACAAIABgBQAdggAMACQAMABAAADIACACIACgDQAbgmAMAPIAGABQAPABARgMQALgGAGgCQASABASAIIABAAIABAAQAYgIAMAHQAMAIAAACIABACIACgBQAXgLAPAGQASANgBAFIABACIACAAQAUgCAKAJQAJAQgDADIAAADIACAAQAXAHAFAMQACALgDABIgBADIACABQASANgBAPQAAAOgCACIgBACIACABQAIAHABAJQgFAVgGADIgDACQgCgDgEgEg");
	this.shape_6.setTransform(-56,-59.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#563301").s().p("AiDESQgLgIgDgNIgCgOIgBgEIgDABQgTAHgKgIQgJgJgBgNIAAgOIAAgDIgDAAQgSACgJgJQgMgXAFgHIAAgDIgCAAQgRgGgFgMQgCgfAHgHIABgCIgBgBQgUgdADgSQAEgSADgCIABgCIgCgBQgLgLgBgNQAIgfAKgEIACgCIgCgCQgMgJAAgMQACgOAKgLIAMgMIABAAIAAgCQgCgjAZgTQAagUAEAAIACgBIAAgCQABgTAMgJQANgIAPAAQAPABABABIACAAIABgBQAdggAMADQAMABAAACIACACIACgCQAbgnAMAPIAGACQAPABARgMQALgHAGgBQASABASAHIABABIABgBQAYgIAMAIQAMAHAAADIABACIACgBQAXgLAPAGQASAMgBAFIABACIACAAQAUgCAKAKQAJAPgDAEIAAACIACABQAXAGAFAMQACAMgDABIgBACIACACQASANgBAOQAAAPgCACIgBABIACACQAIAHABAJQgFAVgGADIgGAFIAIgBQAGgBAGAFQADAFgJAPQgHAMgMADQgagBgEgGIgCgBIgBABQgSAIgNgMQgHgFgFAAQgGAAgIAFQgLAJgUACQgMgBgEgFQgJgKgOARQgNAMgMgDQgNgDgBgCIgDgCIgBAEQgDALgIAFQgcAHgGgGIgDgBIAAAEQgFAWgfAMQgGADgBAEIAAACQAAAHAIAJQAGAIAEAJIABAEQgBAIgOAJQgLAGgDAIIAAACQAAADACADQAMAQABATQAAAIgEAEQgKAJAAAGQAAAEAEAHQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQgEAPgKAJIAAABIAAABQgGAdgPATQgOAUgDACQgJAEgHAAQgGAAgEgCg");
	this.shape_7.setTransform(-56,-55.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiGEcQgUgTABgSQgUAGgMgJQgOgQACgSIAAgFQgSACgKgKQgLgPABgOIABgFQgSgGgGgOQgCgHAAgHQACgVAGgHQgTgbABgTQACgUAFgGQgMgLgBgPIAAgBQAFgbANgKQgMgKAAgNQAJggAQgJIgBgIQADgfAWgTQAXgSAJgDQABgVAOgKQAfgPAQAHQAYgdAVgBQAJAAAEADQAbgnARAPIAFABQANABAPgMQAMgHAHgBQAYABAOAIQAYgIANAGQAMAGAEAGQAYgLARAGQARALACAJQAVgCALALQAJANgBAJQAYAHAGAOQABAEAAAEQAAAFgCADQAUAQgCARQAAALgCAEQAJAIABALIAAABQgCAPgHAIQAGAAAFAGQACADAAAEQAAAIgIALQgIAPgPADQgZABgIgIQgVAIgOgNQgGgEgDAAQgEAAgHAFQgMAJgWACQgPgBgFgGQgFgIgKAOQgcAUgQgNQgDAMgJAFQgXAIgMgFQgEAPgNAIQgOAKgIADQgEACAAACIAAABQAAAFAHAIIALASQACADgBADQgCANgPAIQgKAHgCAFIAAAAIABADQANASABAVQAAAKgFAHIgMAHQABAFAGAHQACAEAAADQgFAVgKAHQgGAggPAUQgQAVgDABIAAABIAAAAQgLAFgIAAQgHAAgFgDg");
	this.shape_8.setTransform(-55.9,-55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhDgDIAAAJQgIgLADgDIABgDIADACQAsARAlgGQAngDANgGIgEgEIANAGIgDABQgCAEgoAJQgMADgNAAQgeAAgpgPg");
	this.shape_9.setTransform(-38.7,-30.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIgMIAFADQgTAVgGAAQAIgFAMgTg");
	this.shape_10.setTransform(-38.9,-44.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAeQAYgcADgVQgEgRghgKQgegKgXgDQAFgCAdADQAVAFAVAJQAUAJACAOQgFAeggAiQgSASgFAAIAZgfg");
	this.shape_11.setTransform(-31,-40.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5B173").s().p("Agtg+QAFAAAoALQAoAKAGAVQgCAXgZAdQgVAcgEACg");
	this.shape_12.setTransform(-31.2,-40.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAAQAAgHAEgBQAEABABAHQAAAIgFABQgDAAgBgJg");
	this.shape_13.setTransform(-31.9,-49.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXgEQACgoAVgDQAWADACAoQgDAugVAGQgUgGgDgug");
	this.shape_14.setTransform(-33.4,-51.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgagEQABgtAZgEQAaAEABAtQgBAygaAHQgZgHgBgygAgVgEQADAuASAHQATgHADguQgCgpgUgCQgTADgCAog");
	this.shape_15.setTransform(-33.4,-51.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAAQABgHAEgBQAFABABAHQgBAJgFAAQgEAAgBgJg");
	this.shape_16.setTransform(-37.9,-48.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAuQgUgRgHgfQgEgXALgNQAHgIAJgCQAYAAAIAoIABAMQAAAZgLAOQgEAFgFABIgBAAQgEAAgEgDg");
	this.shape_17.setTransform(-39.8,-50.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDAyQgUgSgHgiQgDgYALgQQAHgKALgBQAagCAIAuQAEAigOAVQgFAHgGABIgCAAQgGAAgEgEgAgDgwQgJABgGAIQgKAOAEAXQAGAfASAQQAEAEAEAAQAEgBAEgFQAKgOAAgZIgBgMQgHgogUAAIgBAAg");
	this.shape_18.setTransform(-39.8,-50.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3F2401").s().p("AgbAZQADgcAPgNQAOgMACAAQAEACAHALQAIAMACADQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgBAAQgdAOgFANQgDACgDAAQgEAAgGgEg");
	this.shape_19.setTransform(-44.7,-57.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAiIgJgFIgBAAIAAgCQACgeAQgPQAQgPAGgBQABgFAQAUQAJAMADAHQAAACgBACQgFADgDgBQgcAMgGANQgBAFgGAAIgJgCg");
	this.shape_20.setTransform(-44.8,-57.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8A166").s().p("AAODhQg0gdgsiAQgZhCgEgyQAChOAfgzQAggyAlgWQgFBOgCBlQgDBkAYBVQAaBVBRAeIggATIgEABQgPAAgvgZg");
	this.shape_21.setTransform(-57.8,-35.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E5B173").s().p("AhNDzQg2gdgtiAQgYhBgFgzQAEhcApg2QAqg2AngNQAzgTBJgFQBKgEAhAtQAEAMAXBZQAWBZADBDQAIAJgfBAQgfBAiiBjIgFABQgOAAgugZg");
	this.shape_22.setTransform(-48.4,-37.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhMD6Qg6gcg3iHQgtiTAxhVQAxhWA2gRQA0gUBLgEQBNgEAiAwIgDABIARA6QAOAzANA+QAOA7gBAnQAIADgeBCQgfBCioBfIgBAAIAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgNAAgvgYg");
	this.shape_23.setTransform(-48.4,-37.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C17E1E").s().p("AhKgBQgOgsACgVIAAgDQA7AGAvAHQAwAHAHAFQAJASADAiQAAAOgGAGQgXAFghgeIgEgDIAAAFQgCAcgNAQQgLARgGAEQgygcgNgrg");
	this.shape_24.setTransform(-52.8,-11.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhSgLQgMg5ADgIQAqAEA6AIQA8AHAJAJQAGALAGAfQAGAcgLAOQgMAIgTgQQgUgPgKgKQgFAfgOAVQgNAUgDACQg7gggMg4g");
	this.shape_25.setTransform(-52.7,-11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGgCIABgDIANAHIgDAEQgMgHABgBg");
	this.shape_26.setTransform(-70.4,38.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAQQALgQgCgJQgCgKgBAAQAGgBACATQgCAIgLANg");
	this.shape_27.setTransform(-70.4,39);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGAJQALgNACgHQAAAEgGANQgBAEgCACg");
	this.shape_28.setTransform(-63.6,41.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJAMQAJgSAKgFQgIAIgFAPg");
	this.shape_29.setTransform(-60.6,-2.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AggCTQgsgNgCgEQANiEA/hJQA+hKAJgCIADAFQgJABg9BHQg6BGgNCAQAHAHAmAMQAkALA4gVIABg+IABgwQABgLAEgMIAEgQQgGA1AAAwIgBAzQgoAQggAAQgRAAgPgFg");
	this.shape_30.setTransform(-68.8,-3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D39518").s().p("AgpCLQgYgKgGgEQANiAA7hHQA8hGAKgCIABCYIgDASQgCAZABAXIAAAFIgCAqIAAAPQgaAKgWADIgMAAQgbAAgUgIg");
	this.shape_31.setTransform(-68.6,-3.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D8A166").s().p("AAACEIAAgJIAAgCIAAgBQgCABgGgNIgBgIQgCgQASgiIAAgBIAAgBQgDgGgPg7QgRg9gCg7QAAgMACgLQAHAGAVAIQgIAxANAvQAOAuAMAtQgJAfgCAfQgCAggOAaQgEgMAAgRg");
	this.shape_32.setTransform(-71,25.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E5B173").s().p("AgSCqIgBgBQgQgQAAgdIAAgKIAAgCIgBAAQgCAAgGgMIgBgJQgBgPATgjIAAgBIAAgBQgDgFgRg7QgQg9gDg7QAAgNACgLQAJAJAdAIQAbAIAvgQQgEARgIAsQgHAtgBAuQAAAXAFATIABABIAQAWQAPAUACAVIgBADQgEAmgTARQgFADgGgCIgBAAIgBAAQgPALgPgGIAAgCIgCACQgIAIgHAAIgBAAg");
	this.shape_33.setTransform(-67.4,26.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUCwIAAAAQgRgOABgdIABgQQgGgCgFgLQgCgFAAgFQACgVASgeQgFgOgUg/QgThBABg4QACgKADgHIABgEIAEADQAAAEAeAMQAeANA2gUIAFgCIgBAFIgMA1QgKAxgBA0QAAAYAEATQAFAEAOAUQAOAUACAVIgBAFQgBAKgFATQgFATgMAJQgGADgHgEQgMAKgXgFQgGAKgJAAIgGgBg");
	this.shape_34.setTransform(-67.7,26.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C17E1E").s().p("Ah6AiQgcgBgSgDIgDgeQB2AQBagQQBngSAdgPIADAdQgSAFg0ANQgWAEgtAHQgrAGggACIhBABIgRAAg");
	this.shape_35.setTransform(-52.3,16.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AirAkIgCgBIgDgnIADABQB8APBdgPQBogWAXgOIAEgBIACAoIgBAAQgfARiRAUQg7AEgqAAQgwAAgWgFg");
	this.shape_36.setTransform(-52.3,16.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C17E1E").s().p("Ag9AeQhKgHgVgXIAFgbQBTAsBcgQQBdgOAigRIAHAYQhgAlhyAAIgJgBg");
	this.shape_37.setTransform(-53,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag1AlQhRgJgbgYIgBgBIAIgmIADADQBBAmBNgEQA3gCAtgOQAtgPAQgHIADABIAIAiIgDgBQhVAnh3AAIgJAAg");
	this.shape_38.setTransform(-53,1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ah1D7QgjgNAAgDIgBgBQgmiiAShqQAShtAgg4QAhg3AEgBIACgCIABACQBQA4ApgOQArgOADgIIACgCIACACQAyBIAUBoQATBmACBSQACBSgCAGIAAACIgBAAQAAACgnAMQgnALhcANQgnAFgdAAQgmAAgTgHgAiFilQgjBKgFCHQgBBSAaBqQACAEAjAKQAjALBTgJQChgbAGgKIAAgfQAChGgQh8QgQh+g7hZQgKANgsAJQgqAJhJgzQgNAKgkBKg");
	this.shape_39.setTransform(-52.3,7.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D39518").s().p("AgdCQIAAgCQgsg8ALhOQALhLAVhLQgDBSAWBLQAUBOA4A2QggAEgZAAQgVAAgQgDg");
	this.shape_40.setTransform(-59,18.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E5A61A").s().p("Ah1D4QgjgNACgCQgniiAThrQAShsAgg3QAgg2AEAAQBSA5AqgPQAtgPAAgHQA0BIATBoQATBmABBSQACBRgBAFQAJAGiyAfQgnAEgdAAQglAAgUgGg");
	this.shape_41.setTransform(-52.3,7.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ah3EXQgGgEgCgIIgBgIQADgbAKg2QAJg1ADgkQAAhBgBgKQgDgCAAgFIAAgCQABgFAHgDIACgiQABgdAAgmQgBgjgEgfQgDggAAgXQAAgkAJgRIAFADQgPAYAKBRQAEA0gCA4IgDA8IAAABIgBABQgFADAAADQACAEABAAIACAAIAAACIgCBLQgCAmgJA2QgKA+ABAYQABAFAFACQAOACALgGQAygsApgNQAsgOAQABQgYgkgBgyQADhKAOgZQADgFAAgGQgGgZgIgEIgBgBIABgCQADgJAKgpQAJgpABgfIAAgDIACAAIAYgPQAXgPANgWIgIAOQgIANgJAIQgXARgJAEQABAggLAnQgKAmgFAMQALAJAGAXQAAAHgFAHQgOAUgEBGQACA1AaAlIAEAEIgMACQgDgCguAMQgsALg5AyQgFAGgTAAIgGAAg");
	this.shape_42.setTransform(-57.1,58);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#77582A").s().p("Ah1ESQgFgCgBgFQgBgXAKg/QAJg2ACgmIAChLIAAgBIgCgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBgBQAAgDAFgFIABAAIAAAAIADg8QACg4gEg0QgKhRAPgYIgDgBIDdBFQgNAXgWAOQgWAOgCABIgCAAIAAADQgBAfgJApQgKApgDAJIgBACIABABQAHAFAHAYQAAAGgDAFQgOAZgDBLQABAxAYAkQgPAAgsANQgqAOgyArQgIAFgKAAIgHgBg");
	this.shape_43.setTransform(-56.7,57.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3A260C").s().p("Ag1AMQgxgCgKgCQgGgCgCgDIgBgDIABgCQAUACBPADQBOAEBBgTIgCAMQgTAJg1ADIg4ABIgtgBg");
	this.shape_44.setTransform(-55.3,86.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F4E8D4").s().p("Ag8AmQAIgoAmgiQAsgEATAWQAOASgCASIAAACQgzASg/AAIgHAAg");
	this.shape_45.setTransform(-49.2,82.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#42392B").s().p("AhNAfQAPgXAlgTQAigWAJgEIAbABIAhABQgjAjgIAmQhUgDgcgEg");
	this.shape_46.setTransform(-59.5,82.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag0AyQgzgCgKgDQgIgCgDgGIgCgGIABgHQAOgYAngWQAogYAIgDIAAAAIA8ABQA1gIAVAZQAPAUABATQABAWgCADIAAAAIgBABQgTAMg2ADQggACgeAAIgpgBg");
	this.shape_47.setTransform(-55.3,82.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66471F").s().p("AgMC5QgOgUgFgZIAAgCQAEgRAHgSQATguABgoIAAgNIAAgCIgBAAQgDAAgDgCIAAAAQgBgCAGgHIABgBIAAgBQAAgIgJg7QgIg6gXhBQATABATAFQARAEATgJQAaCog3CmQgMAiAJAiQgNgOAAgDg");
	this.shape_48.setTransform(-49.1,59.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#77582A").s().p("AgIEGQgcgFgKgLQgKgLAAgCQgOgUgGgZIABgCQAEgRAGgSQAUguADgoQAAgHgBgGIAAgCIgDAAQgDAAgDgDIAAgBQgBgCAHgHIAAgBIAAgBQABgOgQhYQgPhZgug+QAYgCBDgLQBCgLA4gTQAHAFADANIgBAFQgDAGgFAEIgBABIAAABIgFBZQgFBPgKAzIAAABIABAAQAKARAAALIAAADIgFAHIAAABQgBALAAAmQgBA2AMARQANAJAIAAQAGABAAABIAJANQgOgBgUAQQgIAIgJALQgOAUgUARQgRAOgWAAIgHAAg");
	this.shape_49.setTransform(-44.6,55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgIEMQgfgGgLgMQgMgMABgCQgDgDgIgQQgJgPgBgNIABgEQAEgRAGgSQAVgsAEgkIgBgOQgFAAgFgGIgBgDQACgGAHgHQAAgQgShYQgRhZgvg7IgDgEIAFgBQAIAABMgLQBKgLBAgVIACgBIABABQAHADAHAUIgCAHQgEAIgFAEIgHBcQgGBMgKAxQAKAMAEASIgBAFIgFAFQgBAWABAbQgBA2AJAOQAMAGAIgBQAHAAADAFQAHANAFAFIABAAIgCAEIAAABIAAAAQgGgGggAUQgIAGgIAKQgPAUgVATQgTAQgZAAIgHAAg");
	this.shape_50.setTransform(-44.7,54.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3A260C").s().p("AhQAMIgVgBIgEgLQAUABAqABQAqABAsgEQAugIARgFQgFAQgEABQgDADgsAGQgXADgfAAQghAAgrgDg");
	this.shape_51.setTransform(-34.4,82.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4E8D4").s().p("AgugBQAKgaAVgPQANgCAZAFQAbAEAJAaQACALAAAKIgBANQgQAFguAHQgdAFgdACQADgVALgYg");
	this.shape_52.setTransform(-29.8,77.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#42392B").s().p("AgjAwIgVgCIgEgKQAbADA4AAIgBAMQgZAAgggDgAg9AfQgCgLAAgKQAAgKAEgDQAIgLAggQQAdgQA2gFQgjArgEArQg7AAgbgEg");
	this.shape_53.setTransform(-38.9,78.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E5B173").s().p("AgMAKQgBgVAMgUQALAQADAPIAAADQgGANgMALIgFAFIgCgWg");
	this.shape_54.setTransform(-34.3,32.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOAmQgCgFgBgaQgBgYAOgXIACgCIACACQACAEAIAOQAJAOgBAKQgHAPgNAMIgHAIIAAgBIgBAHg");
	this.shape_55.setTransform(-34.3,32.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhOA2IgZgCIAAgCQgDgFgEgVQgEgUAJgLQAKgNAjgQQAigQA1gEQAGgCAhAEQAgADALAgQAGAegFAQQgFAPgCAAIgBABQgCACgtAIQgYAFghAAQghAAgrgEg");
	this.shape_56.setTransform(-34.7,78.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAPAKQgKgKgNAEQgDgEAIgHQADgDgVgIQAAgDAOACQAMACARAmIgHgLg");
	this.shape_57.setTransform(-35.1,-36.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D8A166").s().p("AAMAvQgbgJgQgRQgLgaASgbQAJgOAIAAQARAHARAcQAJAOAAACIgOAqIgKAAg");
	this.shape_58.setTransform(-35.6,-37.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgiAZQgNgeAUgcQALgRALAAQARAFANAXQANAWACAFIgRgXQgQgWgNgEQgHAAgKAOQgSAaAMAbQAIALAVAIIAXAJQgzgEgGgWg");
	this.shape_59.setTransform(-35.7,-37.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAKAYIgEgDQgGgKgMAFIgDABIgBgCQgJgNAEgWQACgGAOAEQAYALAEARQgBAOgGADIgEACIgCgBgAAJARIADACIABAAQACABADgPQgEgLgVgLQgIgDgCADQgBACAAAEQAAALAGAKIAIgBQAJAAAEAIg");
	this.shape_60.setTransform(-4.6,-63.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3F2401").s().p("AAMAVQgEgLgVADIgFgNQgEgLAEgIQAHgGAPALQAQAKABAJQgCARgFAAIgCgBg");
	this.shape_61.setTransform(-4.7,-63.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663B02").s().p("AhGDlQAAgFAKgJQAEgEAAgGIABACIACADQgEAPgKAJIAAAAIAAABIgBACIgCgIgAhFCoQgCgDAAgDIAAgBQADgIALgHIAFgDQAHANAAANQAAAHgEAEQgGAGgDAEQgEgMgHgKgAg1BtQgHgJgBgHIAAgCQABgDAGgEIAOgGQAFAGADAHIABAEQgBAIgOAJIgDADIgEgGgAkNAnQAAgFACgGIAFAFIACACIgCABIgGAIIgBgFgAkHgUQADgSAOgMQgFAMACANIAAACIgBABIgLALQgCgEAAgFgAD0gTQAGgDAFgUQAAgDgCgEIAEAAQAGgBAGAFQADAGgJAOQgEAHgGAEIgHgBIgHABgAD2g7IgCgBIABgBQACgCABgPQAAgNgSgOIgCgBIABgCQADgCgCgMQgFgLgXgGIgCgBIABgCQACgEgJgPQgJgJgVABIgCAAIAAgBQAAgFgRgMQgQgHgWALIgCACIgCgDQAAgCgMgIQgMgHgYAIIgBAAIgBAAQgRgIgTgBQgGACgLAGQgRANgPgCIgFgCQgNgOgbAmIgCACIgCgCQAAgCgMgBQgMgDgdAhIgBABIgCgBIgQgBQgOgCgOAJQgMAJgBATIAAACIgBABIgQAJQgPAHgNARQABggAZgSQAYgSAEAAIACgBIAAgBQABgUAMgIQANgJAPABQAPAAABABIACAAIABAAQAdggAMADQAMAAAAADIACACIACgDQAbglAMAOIAGACQAPABARgMQALgHAGgBQASABASAHIABABIABgBQAYgIAMAIQAMAHAAADIABACIACgBQAXgLAPAGQASAMgBAFIABACIACAAQAUgCAKAJQAJAQgDADIAAADIACAAQAXAHAFALQACAMgDABIgBACIACACQASANgBAOQAAAPgCABIgBACIACABQAIAIABAIQgFAVgGADIgDACQgCgDgEgFg");
	this.shape_62.setTransform(-26.1,-62.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#563301").s().p("AiDEPQgLgIgDgNIgCgOIgBgEIgDABQgTAHgKgIQgJgIgBgNIAAgPIAAgDIgDAAQgSADgJgJQgMgXAFgHIAAgDIgCAAQgRgGgFgMQgCgfAHgGIABgCIgBgBQgUgdADgSQAEgSADgBIABgCIgCgCQgLgKgBgNQAIgfAKgEIACgCIgDgCQgLgJAAgLQACgPAKgKIAMgMIABAAIAAgCQgCgjAZgTQAagTAEAAIACgBIAAgCQABgTAMgJQANgIAPABQAPAAABABIACAAIABgBQAdgfAMACQAMABAAADIACACIACgDQAbglAMAOIAGACQAPABARgMQALgHAGgBQASABASAHIABABIABgBQAYgIAMAIQAMAHAAADIABACIACgBQAXgLAPAGQASAMgBAFIABACIACAAQAUgCAKAJQAJAQgDADIAAADIACAAQAXAGAFAMQACAMgDABIgBACIACACQASANgBAOQAAAOgCACIgBACIACABQAIAHABAJQgFAVgGADIgGAFIAIgBQAGgBAGAFQADAFgJAPQgHAMgMACQgagBgEgFIgCgBIgBABQgSAHgNgMQgHgEgFgBQgGABgIAFQgLAIgUACQgMgBgEgFQgJgKgOARQgNANgMgDQgNgDgBgCIgDgCIgBADQgDALgIAFQgcAHgGgGIgDgBIAAAEQgFAWgfALQgGADgBAFIAAACQAAAHAIAJQAGAHAEAJIABAEQgBAIgOAJQgLAGgDAIIAAACQAAADACADQAMAPABATQAAAIgEAEQgKAJAAAGQAAAEAEAHIACAEQgEAPgKAJIAAAAIAAABQgGAdgPATQgOAUgDACQgJAEgIAAQgFAAgEgCg");
	this.shape_63.setTransform(-26.1,-59);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AiGEZQgUgSABgSQgUAGgMgJQgOgRACgRIAAgFQgSACgKgKQgLgPABgNIABgFQgSgHgGgOQgCgHAAgGQACgVAGgHQgTgaABgTQACgUAFgGQgMgLgBgPIAAgBQAFgaANgKQgMgKAAgNQAJggAQgIIgBgJQADgeAWgTQAXgSAJgDQABgVAOgKQAfgOAQAHQAYgdAVgBQAJAAAEADQAbgnARAPIAFACQANAAAPgLQAMgHAHgCQAYACAOAHQAYgIANAHQAMAGAEAFQAYgLARAHQARAKACAJQAVgCALALQAJANgBAJQAYAHAGAOQABAEAAADQAAAFgCADQAUAQgCARQAAALgCAEQAJAIABALIAAABQgCAPgHAHQAGABAFAFQACADAAAEQAAAIgIALQgIAPgPADQgZABgIgIQgVAIgOgNQgGgEgDAAQgEAAgHAFQgMAJgWACQgPgBgFgGQgFgIgKAOQgcAUgQgNQgDALgJAGQgXAIgMgGQgEAQgNAHQgOAKgIADQgEACAAACIAAABQAAAFAHAIIALARQACAEgBACQgCAOgPAIQgKAGgCAFIAAAAIABADQANASABAVQAAAKgFAGIgMAHQABAFAGAIQACADAAADQgFAVgKAHQgGAfgPAVQgQAUgDABIAAABIAAAAQgLAFgIAAQgHAAgFgDg");
	this.shape_64.setTransform(-26,-59.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhDgCIAAAJQgIgLADgDIABgDIADABQAsARAlgFQAngDANgHIgEgEIANAGIgDACQgCADgoAJQgLADgOAAQgdAAgqgOg");
	this.shape_65.setTransform(-8.8,-34.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAIgLIAFACQgTAVgGAAQAIgFAMgSg");
	this.shape_66.setTransform(-9,-48.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAOAeQAZgcACgVQgDgQgigKQgegKgXgDQAGgCAcADQAUAFAWAJQAUAJACAOQgGAdggAiQgRARgFAAIAZgeg");
	this.shape_67.setTransform(-1.1,-43.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E5B173").s().p("Agtg9QAFAAAoALQAoAKAGAVQgCAWgZAcQgWAcgDADg");
	this.shape_68.setTransform(-1.3,-43.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEAAQgBgHAFgBQAEABABAHQAAAIgFABQgEAAAAgJg");
	this.shape_69.setTransform(-1.9,-53);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgXgEQACgoAVgDQAWADACAoQgDAtgVAHQgUgHgDgtg");
	this.shape_70.setTransform(-3.5,-54.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgagEQABgtAZgDQAaADABAtQgBAxgaAIQgZgIgBgxgAgVgEQADAuASAGQATgGADguQgCgogUgDQgTADgCAog");
	this.shape_71.setTransform(-3.5,-54.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAAAtQgUgQgHgfQgEgXALgNQAHgIAJgBQAYgBAIAoIABAMQAAAZgLAOQgEAFgFAAIgBAAQgEAAgEgDg");
	this.shape_72.setTransform(-9.9,-53.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgDAxQgUgRgHgiQgDgYALgPQAHgKALgCQAagBAIAtQAEAhgOAWQgFAHgGAAIgCABQgGAAgEgFgAgDgvQgJABgGAIQgKANAEAXQAGAfASAQQAEAEAEgBQAEAAAEgGQAKgOAAgYIgBgMQgHgngUAAIgBAAg");
	this.shape_73.setTransform(-9.9,-53.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3F2401").s().p("AgbAYQADgcAPgMQAOgMACAAQAEADAHAKQAIALACAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCAAQgdANgFAOQgDACgDAAQgEAAgGgFg");
	this.shape_74.setTransform(-14.7,-61);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgYAiIgJgFIgBAAIAAgCQACgeAQgOQAQgPAGgBQABgFAQATQAJAMADAHQAAACgBACQgFADgDgBQgdAMgFANQgBAEgGAAIgJgBg");
	this.shape_75.setTransform(-14.9,-60.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D8A166").s().p("AAPDfQg0gdgth/QgZhBgEgyQAChMAfgzQAhgxAkgWQgFBNgDBkQgCBjAZBUQAaBUBQAdIggAUIgFAAQgOAAgugYg");
	this.shape_76.setTransform(-27.9,-39.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E5B173").s().p("AhNDwQg2gdgth+QgYhBgFgxQAEhbApg2QAqg1AngOQAzgTBJgEQBKgEAhAtQAEAMAXBYQAWBYADBBQAIAKgfA/QgfA/iiBiIgFABQgOAAgugZg");
	this.shape_77.setTransform(-18.5,-41.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AhMD3Qg6gbg3iGQgtiRAxhVQAxhUA2gSQA0gTBLgEQBNgEAiAvIgDABIARA6QAOAzANA8QAOA7gBAmQAIADgeBCQgfBBioBeIgBAAIAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgNAAgvgYg");
	this.shape_78.setTransform(-18.4,-41.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D39518").s().p("AgrBmQgFgJgDgtQgCglAVgpQAUgqA8giIgCgCIAGADQgwAlgKA+QgMA8AYA2IgNABQgVAAgPgHg");
	this.shape_79.setTransform(-36,-11.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E5A61A").s().p("AhKBmQgFgJgDgtQgBglAUgpQAVgqA7giIgBgCIBDAnIgDAAQgDAGgKAvQgJAuARAxIAAABIAAABQACABgOAHQgTAIgsAIQgTAEgQAAQgWAAgRgHg");
	this.shape_80.setTransform(-33,-11.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhJBnIgBgBIgBAAQgFgGgDg5QgEg4A4g9QAMgLATgKIAVgLQg7AigVArQgUApABAkQADAuAFAJQAdALArgJQAtgIAUgIQAOgHgCgBIAAgBIAAAAIAAgBQgSgxAKguQAJgvAEgGQABAEgHApQgMAwASA1IABAFQgCAGgOAGQgQAHgxAJQgSAFgRAAQgYAAgSgIg");
	this.shape_81.setTransform(-33.4,-11);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D19D65").s().p("AA6BkIgBgBIgBgBQgKgChIggQhKgggjgoQgYgogOgrQgOgsgDgNIARgGIAYBFQARAwAKARQAKAPAxAeQAwAgBHAgQADAFAZAcQAZAbAUgLQAAACARgCQASgBAbgbQgBADgPASQgQASgagBIgCAAQgEADgUAEIgBAAQgRAAgfg3g");
	this.shape_82.setTransform(-20.8,14);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E5B173").s().p("AA0BtIgBgBIgBAAQgKgChIggQhKghgjgpQgYgngOgrQgOgsgDgNQALgFAmgKQAmgKAtABIAAAhIACAfQABAHAdAZQATAQAZAbIAdAcQAeAkAZAEIAAAAQAsgGANADQAFAMAFAOIABACIACAAIALABQAKACAFAHQALAYgRAQIgBAAIAAABQgBACgPASQgQASgagBIgBAAIgBABQgEADgUADIgBAAQgQAAggg3g");
	this.shape_83.setTransform(-20.2,13);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAwBwQgRgEhGghQhIgggigpQgbgrgOgvIgPg0IAAgDIACgBQADgCAqgMQAqgMA0ACIACAAIAAADIABAlQAAAVABAGQADAHAZAXQATAQAZAbIAeAcQAdAjAWADQA4gHAFAHQAGAMAEANQAQgBANAPQAFAKAAAMQABAQgNAHQgCAGgQASQgQARgcgBQgIAEgSADIgCAAQgTAAghg5g");
	this.shape_84.setTransform(-20.3,13.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C17E1E").s().p("AhKgBQgNgrACgVIAAgEQA7AGAuAIQAxAGAHAFQAIASADAiQAAAOgGAGQgWAFghgfIgEgCIAAAFQgDAbgNARQgKARgGAEQgzgdgNgqg");
	this.shape_85.setTransform(-23,-15.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AhSgLQgMg5ADgHQAqAEA6AIQA8AHAJAIQAGAMAGAeQAGAcgLAOQgMAHgTgPQgUgQgKgJQgFAfgOAUQgNAVgDABQg7gggMg3g");
	this.shape_86.setTransform(-22.8,-15);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C17E1E").s().p("Ai1ACIAEgRIAEgWQAZAPBYASQBVAPCdgNIgCAmIiTACQhngBhvgjg");
	this.shape_87.setTransform(-30.5,9.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAiAtQhpgBhygnIgCAAIAKguIABgEIADACQAWAOBYAQQBWAPCigPIADAEIAAAEIgDArIAAACIgCABQghAFhGAAIgugBg");
	this.shape_88.setTransform(-30.6,9.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C17E1E").s().p("AidgFIAPghQAZAJAvANQAvAOA8ACQA9ACA5gNIABAQIACARQgdAOhMADIgJAAQhJAAiAgsg");
	this.shape_89.setTransform(-28.3,-6.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AidgEIAPghQAnAPBYAQQBWAPBUgTIABAQIACARQgeANhQACIgGAAQhMAAh7gqg");
	this.shape_90.setTransform(-28.3,-6.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AiggBIgDAAIABgDQAIgUAKgSIABgCIABABQAmAOBZASQBYAPBUgUIAEgBIADArIgCAFQgdAOhRAAIgEAAQhPAAiBgug");
	this.shape_91.setTransform(-28.4,-6.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D39518").s().p("ABODcQgwgBg5gGQg/g4gahVQgahTABhbQAchGAugvIBOAdQgKByAfBqQAeBtBRBOIgBACQgMABgeAAIgWAAg");
	this.shape_92.setTransform(-29.8,3.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E5A61A").s().p("ABED2QhCgChJgLQhKgLgsgYQAAgUAQheQAQhcAthiQAthiBTgdIAAAAIAAgBQACgCAYgHQAZgHAhAKQAbAEAgA5QAfA5AACiQADB5gkBVQgMABgaAAIgzgBg");
	this.shape_93.setTransform(-31.3,0.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgXD3Qh9gKgwgqQgCgFALhUQAKhTAthkQAthnBmg7QADgDAZgHQAZgHAjAKQAMABAZAVQAZAWASBOQATBigGBxQgHBzggAyIg8ABIgJAAQg0AAg7gGg");
	this.shape_94.setTransform(-31.4,0.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E5A61A").s().p("AgeA0QgRgQgFgHQAZgeAfgdQAhgdAQgNQgLA0gPAsQgPAvgMACQgOgEgQgRg");
	this.shape_95.setTransform(-42.8,-10.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgoA4IgVgWIgBgBIABgCQAggkAogiQApghAFgDIAGgEIgCAHQgFAbgSA8QgSA8gUAFQgVgFgTgTg");
	this.shape_96.setTransform(-42.9,-10.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E5B173").s().p("AgXgFQADgrAHgMIASATIATAQIgRAnIgRAvQgNgoAAgag");
	this.shape_97.setTransform(-44.8,-0.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgNBHQgWhCAHglQAIgmADgDIACgDIAtAtIgpBsg");
	this.shape_98.setTransform(-44.8,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3A260C").s().p("Ag7ASQhNgUgLgJQABgIADgJQAVAJAnAOQAoAMArAGQAqAEApgFQAqgGAWgGIABAMIgBAIQg9AJgyAAQg2AAgpgLg");
	this.shape_99.setTransform(-30.6,80);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AhGAXQhQgYgCgHIgBgBIAAgCQABgJAEgMIABgDIADABQATAJApAOQAoAMAsAHQArAFAqgGQAqgGAVgEIADgBIABADIACAXIAAACIgCABQhFALg2AAQg5AAgqgNgAiTgMQALALBMATQBLAVCEgTIAAgIIAAgLQgXAGgpAFQgqAGgqgFQgrgGgngMQgogNgUgKIgEAQg");
	this.shape_100.setTransform(-30.5,79.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgCgMQAIgMACABQgBAAgHALQgGAMAGAWIgEACQgIgZAKgLg");
	this.shape_101.setTransform(-22.8,34.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#77582A").s().p("AgkD8QgagRgLgYIgCgCQgGgXAqgyQAogyAhgdIACgDIgDgCQgWgHgCgKQABgLAEgBIACgCIgCgCQh3hngfhJQgfhKAFgFIAAgBIgMgHIgBgBQAEgIAVgKIgBgCID6CDIAFAOQABAKADAKIAYAyQAhA/ALAsIAAAEQgHAsgyBJQgxBJgNAPIgYAAQgwAAgVgOg");
	this.shape_102.setTransform(-34.6,46.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgqEAQgdgSgMgZIgCgCQgCgEAAgFQAFghAtgwQAqgxAVgSQgWgIgEgLIAAgDQAAgIAEgEQhxhhgfhJQgfhJADgMIgKgHQgEgDABgCQAKgQASgGIADAFQgWAKgEAHIABABIAMAIIAAABQgFAEAfBKQAfBKB3BmIACACIgCACQgEABgBALQACAKAWAIIAEABIgEADQgfAdgpAzQgqAyAGAWIACADQALAYAaARQAaARBDgEQANgPAxhJQAyhJAHgsIAAgEQgLgsghg/IgYgyQgHgcABgGQAHAbAcA3QAjBEAMAvQgDAsg2BLQg3BMgLANIgBABIgBAAIgZAAQgzAAgYgOg");
	this.shape_103.setTransform(-34.5,46.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#66471F").s().p("Ag6hMIAGgCQAkAVATAqQAWAoAiAKQgMAYgvAUQgMhTguhIg");
	this.shape_104.setTransform(-18.7,43.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#77582A").s().p("Ah3BXQgBgoATglQAaAAA5gEQA3gFANgKIABgCIgDgBQgFgBg4gVQg6gVg6gjQg6gigGgrQAVAJBZAUQBYAUB7ACQAJAPAaA8QAbA7AEAoIgBAJQABAeg1AjQg0AkjGAAQgGgUgEg9g");
	this.shape_105.setTransform(-30.8,36.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AhxCwIgCAAIAAgCQgFgMgEhFQgCguAUgpIABgCIABAAQApgBAtgDQArgDAQgHQgVgFg3gWQg6gXgzgiQg0gigDgqIAAgCIAAgDIADABQAFAEBeAWQBdAXCFACIABAAIABACQAHALAhBFQAgBCgDAnQgFAsg/AjQg9AhipAAIgPAAg");
	this.shape_106.setTransform(-30.8,37);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F4E8D4").s().p("AhQAyQgDgkAyg5IAJgGQAzgKAbAZQAfAlgEAhIgBAIQg1AJgwAAQgeAAgdgDg");
	this.shape_107.setTransform(-23.9,77.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhTA2IgDAAIAAgCQgFgkA2g/IALgHIAAAAQA2gKAdAbQAYAZAEAaQAEAcgCAEIAAACIgCAAQg3AKgyAAQggAAgfgEgAgYgxIgJAGQgzA5AEAkQBOAIBSgOIAAgIQAFghgfglQgUgSggAAQgLAAgPADg");
	this.shape_108.setTransform(-23.8,77.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#42392B").s().p("Ag7A7QhNgVgLgKQAHgdAQgeQAQgeAIgJQASAfAdAIQAdAJAVAAIALACIAEACQARgDAMgKQA1gLAcAaQAeAlgEAhIgBAHQg/AKgyAAQg1AAgogMg");
	this.shape_109.setTransform(-30.6,75.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AhGA/QhQgZgCgFIgBgBIAAgCQAHgiATgiQAUgiAHgDIACAAIABACQAQAeAcAIQAcAJAVAAQAOAAACAEQAFABAVgOIAAAAIABAAQA4gKAdAbQAYAXAEAcQADAcgBAEIAAACIgCAAQhCAJg0AAQg8AAgsgNgAh9geQgQAegGAdQALAKBMAVQBLAVCEgSIAAgIQAEghgeglQgbgZg2AKQgLAKgSADIgDgCIgMgCQgUAAgegIQgdgJgRgeQgIAJgRAdg");
	this.shape_110.setTransform(-30.5,75.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3A260C").s().p("Ag6A/IAAgDQAFg8AngzQAlg3AJgHQAJgEASACQgjAagrBTQgXA2ACAkQABAVACALQgUgRgBgkg");
	this.shape_111.setTransform(-54.6,48.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgmB8QgcgUAAguQAEg+Aog4QAmg4AJgHIAAAAIABAAQAMgFAYADIAGAAIgGAFQgNALgYAcQgYAcgTAsQgWA1ADAkQABAjACACIAEAKg");
	this.shape_112.setTransform(-54.2,49.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F4E8D4").s().p("AgGAFIgIgDIgBgBIAAgBQABgGAFgHQAWAHADAGQgBAHgFAHQgJgHgHgCg");
	this.shape_113.setTransform(-46.8,51.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAIATQgIgIgIgDIgJgDQgCgCgBgDQACgNAFgGIACgCIABAAQAfALAAAIIAAABIAAABQgEAOgEAFIgCADgAgQAAIAAAAIABAAIAIADQAIADAJAHQAEgHACgGQgDgIgWgHQgFAIgCAHg");
	this.shape_114.setTransform(-46.8,51.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F4E8D4").s().p("AgoAqQgcgQAAgqIAAgCQgBgOAFgSQAPAAAuAHQAtAIAbAVQgVAugSAKQgRAJgQAAQgSAAgTgJg");
	this.shape_115.setTransform(-53.5,56.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgrAxQgdgUgBgtQAAgSAFgUIABgCIACAAQAJgBAyAHQAwAGAfAZIABABIgBACQgUAzgTAMQgTAKgTAAQgTAAgUgIg");
	this.shape_116.setTransform(-53.6,56.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#42392B").s().p("Ag2BzQgbgQgBgrIAAgCQAFg7Ang1QAmg2AIgIQAPgFAWAEQAVAEAGACIALAUQgNAJgGA3QAAAVAIAYQgLAhgOAdQgPAegQAJQgQAJgRAAQgSAAgTgJg");
	this.shape_117.setTransform(-52.1,49.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("Ag6B6QgdgUgBgvQAEg+Aog4QApg4AGgHIABAAIAAAAQATgGAYAFIAbAGIABAAIAOAaIgBABQgDABgLAcQgLAcANAxIABABIgBABQgEAOgTAoQgTApgQALQgSAKgTAAQgTAAgUgIg");
	this.shape_118.setTransform(-52.1,49.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F4E8D4").s().p("AhABzQgcgQAAgrIAAgCQAEg7Aog1QAmg2AJgIQAOgFAVAEQAWAEAGACIAHAMIAGALIATAEQgKATABAcQABAkADANIgagBIAAACQgBAGgRAqQgQAqgXAQQgPAJgSAAQgSAAgTgJg");
	this.shape_119.setTransform(-51.1,49.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AhGB6QgcgUgBgvQAEg+Aog4QAog4AJgHIAAAAIABAAQARgGAYAFIAbAGIABAAIAGALIAGAMIAOACIAKADIgBADQgMASABAdQACAtADAHIABAEIgNgBIgPgBQgDAKgTArQgUArgRANQgRAKgVAAQgSAAgVgIg");
	this.shape_120.setTransform(-50.9,49.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAPAKQgKgKgNAEQgDgFAIgGQADgDgVgHQAAgDAOACQAMACARAkIgHgKg");
	this.shape_121.setTransform(-35.1,-29.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D8A166").s().p("AAMAsQgbgIgQgQQgLgZASgZQAJgNAIAAQARAHARAZQAJANAAACIgOAoIgKAAg");
	this.shape_122.setTransform(-35.6,-30.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgiAYQgNgcAUgbQALgQALAAQARAEANAXQANAUACAEIgRgVQgQgVgNgEQgHAAgKANQgSAZAMAaQAIAKAVAIIAXAIQgzgEgGgUg");
	this.shape_123.setTransform(-35.7,-30.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAKAXIgEgDQgGgJgMAEIgDABIgBgCQgJgMAEgVQACgFAOAEQAYAKAEAQQgBANgGADIgEABIgCAAgAAJAQIADACIABAAQACABADgOQgEgLgVgKQgIgCgCACQgBACAAAEQAAAKAGAKIAIgBQAJAAAEAHg");
	this.shape_124.setTransform(-4.6,-54.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3F2401").s().p("AAMAUQgEgKgVADIgFgNQgEgKAEgIQAHgFAPAKQAQAKABAIQgCAQgFAAIgCgBg");
	this.shape_125.setTransform(-4.7,-54.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#663B02").s().p("AhGDYQAAgFAKgJQAEgEAAgGIABACIACAEQgEAOgKAIIAAABIAAABIgBABIgCgHgAhFCeQgCgCAAgDIAAgCQADgHALgHIAFgCQAHAMAAALQAAAIgEAEIgJAJQgEgMgHgJgAg1BnQgHgIgBgHIAAgCQABgEAGgDIAOgGQAFAGADAHIABADQgBAIgOAIIgDADIgEgFgAkNAlQAAgGACgFIAFAFIACABIgCACIgGAHIgBgEgAkHgTQADgRAOgLQgFALACANIAAABIgBABIgLALQgCgEAAgFgAD0gSQAGgCAFgUQAAgDgCgDIAEAAQAGgBAGAEQADAGgJAOQgEAGgGAEIgHgBIgHABgAD2g3IgCgBIABgCQACgCABgNQAAgNgSgNIgCgBIABgCQADgCgCgKQgFgLgXgGIgCAAIABgDQACgEgJgNQgJgJgVABIgCABIAAgCQAAgFgRgMQgQgGgWALIgCABIgCgCQAAgCgMgHQgMgHgYAHIgBABIgBgBQgRgHgTgBQgGACgLAFQgRAMgPgBIgFgCQgNgNgbAjIgCADIgCgCQAAgCgMgBQgMgDgdAeIgBABIgCAAIgQgCQgOgBgOAIQgMAJgBASIAAABIgBABIgQAIQgPAIgNAQQABgfAZgQQAYgRAEAAIACgBIAAgCQABgSAMgIQANgIAPABQAPABABABIACAAIABgBQAdgeAMACQAMABAAACIACACIACgCQAbgjAMANIAGABQAPABARgLQALgGAGgBQASABASAHIABAAIABAAQAYgIAMAHQAMAHAAADIABABIACgBQAXgKAPAGQASALgBAFIABACIACAAQAUgCAKAJQAJAOgDAEIAAACIACAAQAXAGAFAMQACAKgDABIgBADIACABQASAMgBAOQAAANgCACIgBABIACACQAIAGABAJQgFATgGADIgDACIgGgHg");
	this.shape_126.setTransform(-26.1,-54.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#563301").s().p("AiDD/QgLgHgDgMQgDgMABgCIgBgDIgDABQgTAGgKgHQgJgJgBgMIAAgNIAAgDIgDAAQgSACgJgIQgMgWAFgGIAAgDIgCAAQgRgFgFgMQgCgdAHgGIABgCIgBgBQgUgbADgRQAEgRADgBIABgCIgCgBQgLgKgBgMQAIgdAKgEIACgCIgDgCQgLgIAAgLQACgNAKgLIAMgKIABgBIAAgCQgCggAZgSQAagSAEAAIACgBIAAgCQABgSAMgIQANgIAPABQAPABABABIACAAIABgBQAdgeAMACQAMABAAACIACACIACgCQAbgjAMANIAGABQAPABARgLQALgGAGgBQASABASAHIABAAIABAAQAYgIAMAHQAMAHAAADIABABIACgBQAXgKAPAGQASALgBAFIABACIACAAQAUgCAKAJQAJAOgDAEIAAACIACAAQAXAGAFAMQACAKgDABIgBADIACABQASAMgBAOQAAANgCACIgBABIACACQAIAGABAJQgFATgGADIgGAFIAIgBQAGgBAGAEQADAGgJAOQgHALgMACQgagBgEgFIgCgBIgBABQgSAHgNgLQgHgEgFgBQgGABgIAEQgLAIgUACQgMgBgEgFQgJgJgOAQQgNAMgMgDQgNgDgBgCIgDgCIgBAEQgDAKgIAFQgcAGgGgFIgDgBIAAADQgFAUgfAMQgGACgBAFIAAACQAAAGAIAIQAGAHAEAJIABADQgBAIgOAIQgLAGgDAIIAAABQAAADACADQAMAPABARQAAAIgEAEQgKAIAAAGQAAAEAEAGIACAEQgEAOgKAIIAAABIAAABQgGAbgPASQgOASgDACQgJAEgIAAQgFAAgEgCg");
	this.shape_127.setTransform(-26.1,-50.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AiGEIQgUgRABgRQgUAGgMgJQgOgPACgRIAAgEQgSACgKgKQgLgOABgMIABgFQgSgGgGgNQgCgHAAgGQACgTAGgHQgTgZABgRQACgTAFgGQgMgKgBgOIAAgBQAFgZANgJQgMgJAAgNQAJgeAQgIIgBgIQADgcAWgSQAXgQAJgEQABgTAOgKQAfgNAQAGQAYgbAVgBQAJAAAEADQAbgkARAOIAFABQANAAAPgKQAMgHAHgBQAYACAOAGQAYgHANAGQAMAFAEAFQAYgKARAGQARAKACAIQAVgBALAKQAJAMgBAIQAYAHAGANQABAEAAADQAAAFgCADQAUAPgCAQQAAAKgCAEQAJAHABALIAAAAQgCAOgHAHQAGABAFAFQACADAAAEQAAAHgIALQgIANgPADQgZABgIgHQgVAHgOgMQgGgDgDgBQgEABgHAEQgMAIgWACQgPgBgFgGQgFgHgKANQgcATgQgMQgDALgJAFQgXAHgMgFQgEAPgNAHQgOAJgIADQgEABAAACIAAABQAAAFAHAHIALARQACADgBADQgCAMgPAIQgKAGgCAEIAAABIABADQANAQABAUQAAAJgFAGIgMAHQABAEAGAHQACAEAAADQgFATgKAHQgGAdgPATQgQAUgDABIAAAAIAAAAQgLAFgIAAQgHAAgFgDg");
	this.shape_128.setTransform(-26,-50.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhDgCIAAAIQgIgKADgDIABgDIADACQAsAPAlgFQAngCANgHIgEgDIANAFIgDACQgCADgoAIQgMADgOAAQgdAAgpgNg");
	this.shape_129.setTransform(-8.8,-27.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAIgKIAFACQgTATgGAAQAIgFAMgQg");
	this.shape_130.setTransform(-9,-40.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAOAcQAZgaACgTQgDgQgigJQgegJgXgDQAGgDAcAEQAUAEAWAJQAUAIACANQgGAcggAgQgRAQgFAAQAEgDAVgag");
	this.shape_131.setTransform(-1.1,-36.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E5B173").s().p("Agtg5QAFAAAoAKQAoAJAGAUQgCAUgZAbQgWAbgDACg");
	this.shape_132.setTransform(-1.3,-36.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgEAAQgBgGAFgBQAEAAABAHQAAAIgFAAQgEAAAAgIg");
	this.shape_133.setTransform(-1.9,-45);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgXgEQACglAVgDQAWADACAlQgDArgVAGQgUgGgDgrg");
	this.shape_134.setTransform(-3.5,-46.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgagEQABgqAZgDQAaADABAqQgBAugaAIQgZgIgBgugAgVgEQADArASAGQATgGADgrQgCglgUgDQgTADgCAlg");
	this.shape_135.setTransform(-3.5,-46.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgFAAQABgGAEgBQAFABABAGQgBAIgFABQgEgBgBgIg");
	this.shape_136.setTransform(-8,-44.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAAArQgUgQgHgdQgEgVALgMQAHgIAJgBQAYgBAIAmIABALQAAAXgLANQgEAFgFAAIgBAAQgEAAgEgCg");
	this.shape_137.setTransform(-9.9,-45.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgDAvQgUgRgHgfQgDgXALgPQAHgJALgBQAagBAIAqQAEAfgOAUQgFAHgGAAIgCAAQgGAAgEgDgAgDgsQgJABgGAHQgKANAEAVQAGAdASAPQAEAEAEAAQAEgBAEgFQAKgNAAgXIgBgLQgHglgUAAIgBAAg");
	this.shape_138.setTransform(-9.9,-45.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3F2401").s().p("AgbAXQADgaAPgMQAOgLACAAQAEACAHAKQAIALACADQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCAAQgdANgFAMQgDACgDAAQgEAAgGgEg");
	this.shape_139.setTransform(-14.7,-52.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgYAgIgJgFIgBAAIAAgCQACgbAQgOQAQgOAGgBQABgFAQASQAJAMADAGQAAACgBACQgFACgDgBQgdAMgFAMQgBAEgGAAIgJgBg");
	this.shape_140.setTransform(-14.9,-52.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D8A166").s().p("AAPDSQg0gcgth3QgZg9gEgvQAChIAfgvQAhgvAkgVQgFBJgDBeQgCBdAZBPQAaBQBQAbIggASIgEABQgPAAgugXg");
	this.shape_141.setTransform(-27.9,-32.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E5B173").s().p("AhNDiQg2gbgth3QgYg9gFgvQAEhVApgzQAqgyAngMQAzgTBJgDQBKgEAhAqQAEALAXBTQAWBTADA+QAIAIgfA8QgfA7iiBdIgEABQgPAAgugYg");
	this.shape_142.setTransform(-18.5,-33.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhMDpQg6gag3h+QgtiIAxhQQAxhQA2gQQA0gTBLgDQBNgEAiAtIgDABIARA2QAOAwANA5QAOA3gBAkQAIADgeA+QgfA9ioBYIgBABIAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgNAAgvgWg");
	this.shape_143.setTransform(-18.4,-33.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D39518").s().p("AgrBgQgFgIgDgrQgCgiAVgnQAUgoA8gfIgCgDIAGAEQgwAigKA6QgMA5AYAzIgNABQgVAAgPgHg");
	this.shape_144.setTransform(-36,-5.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E5A61A").s().p("AhKBgQgFgIgDgrQgBgiAUgnQAVgoA7gfIgBgDIBDAlIgDAAQgDAGgKAsQgJArARAvIAAABQACABgOAHQgTAIgsAHQgTAEgQAAQgWAAgRgHg");
	this.shape_145.setTransform(-33,-5.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AhJBhIgBgBIgBAAQgFgFgDg2QgEg1A4g5QAMgLATgJIAVgKQg7AfgVApQgUAmABAiQADArAFAJQAdAKArgIQAtgHAUgIQAOgHgCgBIAAAAIAAgBIAAAAQgSguAKgsQAJgsAEgGQABAEgHAnQgMAtASAxIABAFQgCAGgOAGQgQAHgxAIQgSAEgRAAQgYAAgSgHg");
	this.shape_146.setTransform(-33.4,-5.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D19D65").s().p("AA6BeIgBgBIgBgBQgKgBhIgfQhKgegjgmQgYglgOgpQgOgqgDgMIARgFIAYBBQARAuAKAPQAKAOAxAdQAwAdBHAfQADAFAZAZQAZAaAUgKQAAACARgCQASgBAbgZQgBACgPARQgQARgagBIgCAAQgEADgUAEIgBAAQgRAAgfg0g");
	this.shape_147.setTransform(-20.8,18.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E5B173").s().p("AA0BnIgBgBIgBgBQgKgChIgeQhKgfgjgmQgYgkgOgpQgOgqgDgMQALgFAmgJQAmgKAtACIAAAeIACAdQABAIAdAXQATAPAZAaIAdAaQAeAiAZADIAAAAQAsgFANADIAKAYIABABIACAAIALACQAKACAFAHQALAWgRAOIgBABIAAAAQgBADgPARQgQARgagBIgBAAIgBAAQgEAEgUACIgBAAQgRAAgfgzg");
	this.shape_148.setTransform(-20.2,17.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAwBqQgRgFhGgeQhIgegignQgbgpgOgsIgPgxIAAgCIACgBQADgCAqgLQAqgMA0ACIACAAIAAADIABAiQAAAUABAHQADAGAZAVQATAQAZAZIAeAaQAdAhAWADQA4gHAFAHQAGALAEAMQAQgBANAOQAFAKAAALQABAPgNAHQgCAFgQARQgQAQgcAAQgIAEgSADIgBAAQgUAAghg2g");
	this.shape_149.setTransform(-20.3,17.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C17E1E").s().p("AhKAAQgNgpACgUIAAgDQA7AFAuAHQAxAGAHAFQAIARADAgQAAANgGAFQgWAFghgcIgEgDIAAAFQgDAagNAPQgKAQgGADQgzgagNgng");
	this.shape_150.setTransform(-23,-9.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AhSgKQgMg2ADgHQAqAEA6AHQA8AHAJAIQAGALAGAcQAGAagLANQgMAIgTgPQgUgOgKgJQgFAdgOATQgNATgDABQg7gdgMg0g");
	this.shape_151.setTransform(-22.8,-9.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C17E1E").s().p("Ai1ABIAEgQIAEgTQAZAOBYAQQBVAOCdgMIgCAkIiTABQhnAAhvgig");
	this.shape_152.setTransform(-30.5,13.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAiArQhpgChygkIgCAAIALgvIADABQAWANBYARQBWANCigNIADADIAAADIgDApIAAACIgCAAQggAFhEAAIgxAAg");
	this.shape_153.setTransform(-30.6,13.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C17E1E").s().p("AidgFIAPgfQAZAJAvAMQAvANA8ACQA9ACA5gMIABAPIACAPQgdANhMAEIgIAAQhJAAiBgqg");
	this.shape_154.setTransform(-28.3,-0.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AidgEIAPgfQAnAOBYAQQBWANBUgRIABAPIACAPQgeANhQACIgHAAQhMAAh6gog");
	this.shape_155.setTransform(-28.3,-1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AiggBIgDAAIABgDQAIgTAKgRIABgCIABABQAmAOBZAQQBYAPBUgTIAEgBIADApIgCAEQgdANhRAAIgEABQhPAAiBgsg");
	this.shape_156.setTransform(-28.4,-1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D39518").s().p("ABODPQgwgBg5gFQg/g1gahQQgahOABhWQAchCAugsIBOAcQgKBrAfBkQAeBmBRBKIgBABIgkABIgcAAg");
	this.shape_157.setTransform(-29.8,8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E5A61A").s().p("ABEDnQhCgBhJgLQhKgKgsgXQAAgSAQhZQAQhXAthcQAthcBTgcIAAAAIAAAAQACgCAYgHQAZgGAhAJQAbADAgA2QAfA2AACYQADBygkBQIghABIg4gBg");
	this.shape_158.setTransform(-31.3,5.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgXDpQh9gKgwgnQgCgFALhPQAKhOAtheQAthhBmg4QADgDAZgGQAZgHAjAKQAMAAAZAVQAZAUASBKQATBcgGBqQgHBtggAuIg8ABIgJAAQg0AAg7gFg");
	this.shape_159.setTransform(-31.4,5.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E5A61A").s().p("AgeAxQgRgOgFgIQAZgcAfgbQAhgcAQgLQgLAwgPAqQgPAsgMACQgOgEgQgQg");
	this.shape_160.setTransform(-42.8,-4.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgoA1IgVgVIgBgBIABgCQAggiAogfIAugiIAGgEIgCAGQgFAagSA4QgSA5gUAEQgVgEgTgSg");
	this.shape_161.setTransform(-42.9,-5.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E5B173").s().p("AgXgFQADgoAHgLIASARIATAQIgRAkIgRAsQgNglAAgZg");
	this.shape_162.setTransform(-44.8,4.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgNBCQgWg+AHgiQAIgkADgCIACgEIAtArIgpBmg");
	this.shape_163.setTransform(-44.8,4.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3A260C").s().p("Ag7ARQhNgSgLgJQABgIADgIQAVAJAnANQAoALArAFQAqAEApgFQAqgFAWgFIABALIgBAHQg9AIgxAAQg3AAgpgKg");
	this.shape_164.setTransform(-30.6,80.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AhGAVQhQgWgCgGIgBgBIAAgCQABgJAEgLIABgDIADABQATAJApANQAoALAsAGQArAFAqgGQAqgFAVgEIADAAIABACIACAWIAAABIgCABQhGALg2AAQg4AAgqgNgAiTgLQALAKBMASQBLAUCEgSIAAgIIAAgKQgXAFgpAFQgqAFgqgEQgrgGgngKQgogNgUgJQgDAIgBAHg");
	this.shape_165.setTransform(-30.5,80.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgCgMQAIgKACAAQgBAAgHALQgGALAGAVIgEACQgIgYAKgLg");
	this.shape_166.setTransform(-22.8,37.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#77582A").s().p("AgkDtQgagQgLgWIgCgCQgGgWAqgvQAogvAhgcIACgDIgDgBQgWgHgCgJQABgLAEgBIACgBIgCgCQh3hhgfhFQgfhGAFgEIAAgBIgMgHIgBgBQAEgHAVgJIgBgDID6B8IAFANQABAJADAKIAYAvQAhA7ALApIAAAEQgHApgyBFQgxBFgNAOIgXABQgxAAgVgOg");
	this.shape_167.setTransform(-34.6,48.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgqDxQgdgRgMgXIgCgCQgCgEAAgFQAFgfAtgtQAqguAVgRQgWgHgEgLIAAgCQAAgIAEgEQhxhcgfhEQgfhEADgMIgKgGQgEgDABgCIAAgBQAKgOASgGIADAEQgWAKgEAHIABABIAMAHIAAABQgFAEAfBGQAfBFB3BhIACABIgCACQgEABgBAKQACAKAWAHIAEABIgEADQgfAbgpAwQgqAvAGAVIACADQALAWAaAQQAaAQBDgDQANgOAxhFQAyhFAHgpIAAgEQgLgpghg7IgYgvQgHgbABgGQAHAaAcAzQAjBAAMAtQgDApg2BHQg3BHgLAMIgBABIgBAAIgbAAQgxAAgYgNg");
	this.shape_168.setTransform(-34.5,48.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#66471F").s().p("Ag6hHIAGgCQAkASATApQAWAmAiAJQgMAXgvASQgMhNguhEg");
	this.shape_169.setTransform(-18.7,45.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#77582A").s().p("Ah3BRQgBglATgjQAaAAA5gDQA3gFANgJIABgCIgDgBQgFgBg4gUQg6gUg6ggQg6ghgGgoQAVAIBZATQBYASB7ADQAJAOAaA5QAbA2AEAmIgBAJQABAcg1AiQg0AhjGAAQgGgSgEg7g");
	this.shape_170.setTransform(-30.8,39.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AhxCmIgCAAIAAgCQgFgMgEhBQgCgrAUgnIABgBIABAAQApgBAtgDQArgDAQgGQgVgFg3gVQg6gVgzggQg0ghgDgnIAAgCIAAgDIADABQAFADBeAWQBdAVCFACIABAAIABABQAHALAhBBQAgA/gDAkQgFApg/AhQg+AgisAAIgLAAg");
	this.shape_171.setTransform(-30.8,39.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F4E8D4").s().p("AhQAvQgDgiAyg1IAJgGQAzgJAbAXQAfAjgEAfIgBAHQg0AJgwAAQgeAAgegDg");
	this.shape_172.setTransform(-23.9,77.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AhTAzIgDAAIAAgDQgFghA2g8IALgGIAAAAQA2gKAdAaQAYAXAEAZQAEAagCAEIAAABIgCABQg3AJgyAAQghAAgegDgAgYguIgJAFQgzA2AEAhQBOAJBSgOIAAgHQAFgfgfgjQgUgRghAAQgLAAgOADg");
	this.shape_173.setTransform(-23.8,78);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#42392B").s().p("Ag7A4QhNgUgLgKQAHgbAQgbQAQgdAIgIQASAdAdAIQAdAIAVAAIALABIAEADQARgEAMgJQA1gKAcAYQAeAjgEAfIgBAHQg/AIgzAAQg0AAgogKg");
	this.shape_174.setTransform(-30.6,76.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AhGA7QhQgXgCgFIgBgBIAAgCQAHggATggQAUggAHgDIACAAIABACQAQAdAcAHQAcAIAVABQAOAAACAEQAFAAAVgNIAAAAIABAAQA4gJAdAZQAYAWAEAaQADAagBAEIAAACIgCAAQhBAJg0AAQg9AAgsgNgAh9gcQgQAcgGAbQALAKBMAUQBLAUCEgSIAAgHQAEgfgegjQgbgYg2AKQgLAJgSADIgDgCIgMgCQgUAAgegHQgdgIgRgdQgIAIgRAcg");
	this.shape_175.setTransform(-30.5,76.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#3A260C").s().p("Ag6A7IAAgCQAFg4AngxQAlgzAJgHQAJgEASACQgjAYgrBOQgXAzACAiQABAUACAKQgUgQgBgig");
	this.shape_176.setTransform(-54.6,50.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgmB1QgcgTAAgsQAEg5Aog1QAmg1AJgGIAAgBIABAAQAMgFAYADIAGABIgGAEQgNALgYAaQgYAbgTApQgWAxADAiQABAiACACIAEAJg");
	this.shape_177.setTransform(-54.2,51.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F4E8D4").s().p("AgGAEIgIgCIgBgCIAAAAQABgFAFgIQAWAHADAGQgBAHgFAHQgJgHgHgDg");
	this.shape_178.setTransform(-46.8,53.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAIASQgIgIgIgCIgJgEQgCgBgBgCQACgNAFgGIACgCIABAAQAfAKAAAIIAAAAIAAACQgEANgEAFIgCACgAgQAAIAAAAIABABIAIACQAIACAJAHQAEgGACgGQgDgHgWgHQgFAIgCAGg");
	this.shape_179.setTransform(-46.8,53.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F4E8D4").s().p("AgoAoQgcgQAAgnIAAgBQgBgOAFgRQAPAAAuAHQAtAHAbAUQgVArgSAKQgRAIgQAAQgSAAgTgIg");
	this.shape_180.setTransform(-53.5,58.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgrAuQgdgSgBgrQAAgQAFgTIABgDIACAAQAJgBAyAHQAwAGAfAYIABABIgBABQgUAwgTALQgUAKgSAAQgTAAgUgIg");
	this.shape_181.setTransform(-53.6,58.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#42392B").s().p("Ag2BtQgbgQgBgoIAAgCQAFg3AngzQAmgyAIgIQAPgEAWADIAbAGIALATQgNAJgGA0QAAATAIAWQgLAfgOAcQgPAcgQAJQgQAIgRAAQgSAAgTgIg");
	this.shape_182.setTransform(-52.1,51.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("Ag6BzQgdgTgBgtQAEg5Aog1QApg1AGgGIABAAIAAgBQATgFAYAEIAbAGIABAAIAOAZIgBABQgDAAgLAaQgLAbANAuIABABIgBABQgEANgTAmQgTAmgQALQgSAKgUAAQgSAAgUgIg");
	this.shape_183.setTransform(-52.1,51.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F4E8D4").s().p("AhABtQgcgQAAgoIAAgCQAEg3AogzQAmgyAJgIQAOgEAVADIAcAGIAHAMIAGAKIATAEQgKASABAaQABAiADAMIgagBIAAACQgBAFgRAoQgQAngXAQQgPAIgSAAQgSAAgTgIg");
	this.shape_184.setTransform(-51.1,51.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AhGBzQgcgTgBgtQAEg5Aog1QAog1AJgGIAAAAIABgBQARgFAYAEIAbAGIABAAIAGALIAGALIAOACIAKACIgBADQgMARABAcQACAqADAHIABADIgNgBIgPgBQgDAJgTApQgUApgRAMQgRAKgVAAQgSAAgVgIg");
	this.shape_185.setTransform(-50.9,51.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgFAFQgMgGABgEIAOAFQAGADAOgHQgCAEgLAFIgFABIgFgBg");
	this.shape_186.setTransform(14.3,-29.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgBAZQgdgJgRgIQgDgaADgNQANAKAfASQAcARAWgDIADAAIgHAUIgCAAQgEABgGAAQgNAAgTgHg");
	this.shape_187.setTransform(16.6,-40);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#441701").s().p("AgGAiQgbgNgHgqIgCgNIApAQQAaAJASgCQgNAdgWAPQgFACgDAAIgGgBg");
	this.shape_188.setTransform(16.1,-34.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgOBCQgfgPgHgwQgHgtAGgVIABgEIADADIAkAbQAfAWAagDIAMgDQgBAGgQAfQgPAigXAPQgDADgEAAQgEAAgEgCg");
	this.shape_189.setTransform(16.7,-37.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AANALQgHgLgPACQgBgFAHgGQAEgCgTgLQABgDAMAEQAMAEAMApIgGgNg");
	this.shape_190.setTransform(-1.5,-48.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D8A166").s().p("AAHAvQgZgLgPgTQgHgcAVgZQALgNAHABQAQAKAOAdIAGAQIgTAqIgJgCg");
	this.shape_191.setTransform(-2,-50.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgkAUQgJgfAXgbQANgPAJABQASAHAKAZQALAXABAFQgBgDgNgWQgNgYgNgGQgHgBgLANQgVAZAIAcQAIANAUAKIAUAMQgygLgDgWg");
	this.shape_192.setTransform(-2.2,-50.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAIAaIgEgEQgEgLgOADIgCABIgBgCQgCgEgCgLQgCgNAGgIQACgFAOAGQAWANACASQgDAOgGADIgDABIgDgBgAAIASIACADIACAAQACABAEgOQgCgNgUgNQgHgEgCADQgCACgBAEQgBAMAEAKIADAAQAOAAAEAJg");
	this.shape_193.setTransform(31.8,-72);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#3F2401").s().p("AAJAXQgDgMgVABIgDgNQgDgNAFgHQAIgFANAMQAPANAAAJQgEAQgFAAIgCgBg");
	this.shape_194.setTransform(31.9,-72);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#663B02").s().p("AhhDgQAAgFALgIQAEgDACgHIABACIAAAEQgGAOgKAJIgBABIAAABQgCgEABgEgAhZCiQgCgCABgDIAAgBQAEgIAMgGIAFgCQAFAOgBAMQgBAIgFAEQgGAEgEAEQgCgNgGgLgAhCBqQgGgKAAgHIABgCQABgEAGgDQAIgCAHgDQAEAHACAJIABADQgCAIgQAHIgDACIgDgFgAD2AQIgHABIAGgFQAGgDAHgSIgBgGIAEAAQAGgBAFAFQADAHgLAMQgFAGgHADIgGgBgAkPAKQAAgGADgEIAEADIACADIgDACIgHAGIABgEgAD7gaIgBgBIABgCQACgCACgOQADgPgRgPIgCgBIACgDQADgBgBgLQgDgMgWgKIgCAAIAAgCQADgEgHgQQgIgLgUgBIgCAAIgBgBQACgFgRgPQgOgIgXAJIgDAAIgBgCQAAgDgLgIQgKgJgZAFIgBAAIgCgBQgQgJgSgDQgHABgLAEQgUAKgNgDIgGgCQgKgQgfAiIgCADIgDgCQAAgDgLgCQgMgEggAcIgBABIgCAAQgJgIgkAIQgNAIgDASIAAACIgCABIgQAHQgQAHgPAOQAFggAbgPQAagPAFAAIABAAIAAgCQADgTANgHQAkgJAJAIIACABIABgCQAggbANAEQAKACAAACIACADIACgDQAggjAKARIAEADQAOACAVgKQALgFAHgBQASAEAQAJIABABIABgBQAagFAKAJQALAJAAACIABADIACgBQAYgIAOAIQARAPgCAEIAAADIACAAQAVAAAIAKQAIARgEADIAAACIACABQAWAJADANQABALgDABIgCACIACACQARAQgDAOQgCAOgCABIgBACIABACQAHAIAAAJQgHAUgHACIgCACQgCgEgEgEgAkCgxQAFgTAPgJQgGALAAAOIAAABIgBACIgMAJQgCgFABgEg");
	this.shape_195.setTransform(10.5,-74.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#563301").s().p("AinEFQgKgJgBgNIgBgPIAAgDIgDABQgUAEgJgIQgMgcAGgKIABgDIgDAAQgSgBgIgJQgIgZAEgHIABgCIgDgBQgPgHgEgNQgCgOAGgLIAGgMIABgBIgBgCQgQggAFgRQAGgRADgBIACgCIgCgCQgKgKABgNQADgPAIgJIALgLIACgCIgCgCQgKgKABgMQAEgNALgKIAOgKIABgBIAAgCQABgiAcgRQAcgQAFAAIACAAIAAgCQADgTANgIQAjgIAJAIIACAAIABgBQAggcANAFQAKACABACIACACIACgCQAggjAJARIAEACQAPADAVgKQALgFAGgBQASADARAKIABAAIABAAQAZgFAKAJQALAJAAACIABADIADgBQAYgJAOAJQAQAOgCAFIABACIACAAQAUAAAJALQAHAQgDAEIAAACIABABQAWAJADANQABALgDABIgBACIABABQARAQgCAOQgDAPgCABIgBACIACABQAHAIgBAKQgHAUgGACIgGAFIAHAAQAHgBAEAFQADAGgKAOQgJALgMABQgagEgDgGIgCgBIgBABQgTAFgMgNQgGgFgFgBQgGgBgIAEQgMAIgUgBQgMgDgEgFQgHgLgQAPQgOALgMgFQgMgEgBgCIgDgDIgBAEQgEALgKAEQgcADgEgGIgEgCIAAADQgIAVggAJQgGACgCAEIgBACQAAAHAHALQAEAHAEAKIAAAEQgBAIgQAHQgMAFgEAIIAAABQAAADABADQAKASgBATQAAAIgFAEQgLAHgBAGQgBAEAEAIIABAEQgGAOgKAIIgBACQgKAcgQARQgRASgEABQgHADgGAAQgHAAgFgEg");
	this.shape_196.setTransform(10.5,-71);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AisEOQgRgUACgSQgUADgKgKQgMgSAEgRIAAgFQgSgBgJgLQgIgQACgNIABgFQgQgJgEgOQgCgIABgGQAFgUAGgIQgPgcADgTQAEgTAGgGQgLgKACgPIAAgBQAIgcAOgJQgKgLABgMIAAgBQADgPALgJQALgLAEgCIABgJQAGgeAZgQQAYgPAJgDQAEgUAPgJQAhgKAQAJQAbgaAUABQAJABADADQAggjAOARIAEADQAMABAUgJQAMgGAHAAQAXAEAOAJQAYgFAMAIQANAIACAGQAZgJAQAKQAPALABAKQAWABAJAMQAIAOgDAJQAXAKAEAOIABAIQgBAFgBACQARATgEARQgCAKgCAEQAIAKAAAKIgBABQgDAPgIAHQAGABAEAGQACAEgBADQgBAIgJALQgKANgPACQgZgDgGgJQgWAFgNgNQgFgFgDgBQgFAAgHADQgNAIgWgBQgOgCgFgGQgDgJgNAMQgeARgOgPQgFAMgJAEQgYAFgLgHQgGAMgPAJQgOAIgIACQgEABgCACIABABQAAAGAFAIQAFAJAEAKQABADAAAEQgFAMgPAHQgKAEgDAGIAAAAIAAADQALATgBAVQgBAKgHAGIgMAGQABAFAEAIQABADAAAFQgIASgKAHQgKAfgRASQgSATgDABIAAAAIgBABQgIADgHAAQgKAAgGgGg");
	this.shape_197.setTransform(10.6,-71.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgOALQAKgFAOgQIAFADQgVASgHAAIgBAAg");
	this.shape_198.setTransform(25.8,-57.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgXA+IAdgbQAbgZAFgVQgCgQgegOQgegOgWgGQAGgBAcAHQATAHAUALQAUAMAAAOQgKAdgkAeQgTAOgEAAIgBAAg");
	this.shape_199.setTransform(33.5,-52.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E5B173").s().p("Agqg/QAGABAlAOQAmAPAEAWQgFAWgbAaIgeAbg");
	this.shape_200.setTransform(33.3,-52.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgEAAQABgHADgBQAFABAAAHQgBAIgEABQgEgBAAgIg");
	this.shape_201.setTransform(33.4,-61.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgXgHQAHgoAVAAQAWAGgDAoQgJAtgUAEQgVgJADgug");
	this.shape_202.setTransform(32.1,-63.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgagHQAHgtAYAAQAaAGgEAuQgIAwgZAFQgZgLAFgxgAgVgGQgDAuATAIQASgEAJgtQADgogUgGQgUAAgGApg");
	this.shape_203.setTransform(32.1,-63.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgFAAQACgIAEAAQAFACAAAHQgCAIgEAAQgGgBABgIg");
	this.shape_204.setTransform(27.2,-61.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgGAtQgTgTgDggQgBgXANgMQAIgHAIAAQAZACADApQABAFgCAHQgDAZgMANQgFAEgFAAQgDAAgFgEg");
	this.shape_205.setTransform(25.6,-63.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgJAwQgTgTgCgjQAAgZANgOQAIgIAJgBQAcADADAtQAAAigRAUQgGAGgHABIgBAAQgEAAgFgHgAgNgpQgLAMAAAXQACAhAQASQAFAEACAAQAFAAAEgFQALgMAEgZIABgMQgDgpgXgCQgGAAgHAHg");
	this.shape_206.setTransform(25.6,-63.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#3F2401").s().p("AgdAVQAHgbARgKQAPgLACABQADACAHAMIAIAQIgFAAIAAgBIgBABQgfAJgGANIgEABQgFAAgHgGg");
	this.shape_207.setTransform(21.6,-71.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgZAgIgJgGIgBgBIAAgCQAGgdASgNQARgNAGAAQABgFAOAVQAIAOACAFQAAAEgCABQgFADgDgCQgeAJgHANQgCADgEAAQgEAAgFgCg");
	this.shape_208.setTransform(21.3,-71.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D8A166").s().p("AAADeQgyglgdiEQgQhBACg1QALhNAmgvQAlguAlgRQgPBMgOBlQgNBiAOBYQAQBYBMAnIgjAPIgCAAQgOAAgrgfg");
	this.shape_209.setTransform(4.9,-50.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E5B173").s().p("AhqDnQgygkgdiEQgQhCACg1QAOhbAwgwQAvgwApgJQAzgNBLAFQBKAFAbAwQADANALBaQAMBcgFBCQAGALgmA7QgnA7itBPIgCABQgOAAgtggg");
	this.shape_210.setTransform(15.5,-51.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AhoDuQg3gjgmiNQgbiWA7hQQA7hPA4gKQA0gOBNAFQBNAGAbAzIgDABIAKA8QAIA1AGA+QAGA9gGAmQAIAEgmA+QgnA+ixBJIgCABIgCAAQgLAAgvgeg");
	this.shape_211.setTransform(15.4,-51.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("Ai9AtIgCgBIAAgCQgCgFALgoQALgrA0gcIABgBIABABIBSAaQBHAXAjABQAFgIAQgTQAPgTAMgDQAWAEAIAJQAGgDAOgBQANgCAGAHQADAGABAMQABAUgSAVQABAHgJAaQgKAZgfADQgSgBgGgEQgFgEgLACIgJACQgfALhJAHIgYACQhAAAhKgfgAivgHQgMAkACAMQBWAjBJgHQBHgHAegLIAKgCQANgCAGAEQAGAEAQABQAdgEAIgZQAIgagBgCIAAAAIABgBQAYglgMgRQgKgGgYAHIgCAAIgBgBQgEgGgXgFQgIABgNAPQgNAQgKAPIgBABIgBAAQgiABhFgWQhHgWgRgHQguAZgLAlg");
	this.shape_212.setTransform(16.2,-9.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D19D65").s().p("AizANQgEgGAQgxQBuBPCVgnQAbAaAUgSQAUgQAWgMQgCAOgJAQQgKATgZACQgRgBgGgEQgGgEgMACQgRAHhOAMQgSACgTAAQhBAAhMgeg");
	this.shape_213.setTransform(15.4,-6.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E5B173").s().p("Ai8AqQgDgEALgoQAKgpAzgdIBUAbQBIAYAkgBIARgYQARgVAMgDQAZAGAEAHIAQgEQAPgCAGAGQANATgZAmQABACgIAaQgJAbgfAEQgRgBgGgEQgGgFgMACQgRAIhOALQgSADgTAAQhBAAhMgfg");
	this.shape_214.setTransform(16.3,-9.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#66471F").s().p("AB7B+QgOhAgZgyQgYgwgDgDIAAgBIgZAAQgIAAgCgEQgCgJAFgHIABgBIgBgCQgSgLg/gOIhVgTIAAAAQAmgSARgDQAXAAA/ATQA9ATADANQgIALgBAFQgCAEAggCQAgADAPA/QAQBAgKA6IgPgDg");
	this.shape_215.setTransform(5.1,35.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgHCEQgEgBgig0QgjgzgFhXIAEAUIAGAgQAPA6AZAjQAXAjAIAGQAggSAYg0QAYg1AEgOQghglgJgmQgHgmABgJIAAAAIAKAnQAHAoAjAoIACACIgBABQgCAKgZA4QgZA6glATIgCAAg");
	this.shape_216.setTransform(-2.8,-16.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AAAAHQgRgLgBgEQACgBAJAFQAJAKARADIgFAAQgFAAgJgCg");
	this.shape_217.setTransform(-40.6,32);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D39518").s().p("AgYAyQgkg6gFhmIARAZQAjBiBPAsQgWAqgdAMQgFgBgig8g");
	this.shape_218.setTransform(-5,-14.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgPgGQAHgHAYASIgEAEQgTgPgIAAg");
	this.shape_219.setTransform(-12.5,-19.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E5A61A").s().p("AgoBTQgigygJhXIByhOQgBADAJApQAJAoAlAoQgBAHgZA4QgaA6gkAUQgEgBghgxg");
	this.shape_220.setTransform(-2.9,-16.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#C17E1E").s().p("AgzBJQgKgRgFgcQgEgcgBgXIgBgfQAhgqAiAUQAdAOAYAbQAXAaACANQABAUgRAZQgPAVgLgBQgMgFgJgOIgIgRIgBgDIgIAPIgHATQgIAQgMADQgJAAgIgKg");
	this.shape_221.setTransform(7.8,-30.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("Ag1BOQgQgfgDgwQgEgxABgIIAAgBIABgBQAYgrAuATQAcAOAZAdQAYAcADAQQgBAdgQAWQgOAVgPABQgLgEgIgPQgIgPgDgIIgJAdQgLAXgNAFQgLAAgJgNg");
	this.shape_222.setTransform(7.7,-30);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#C17E1E").s().p("AAhAnQhPgIhogpIASghQAkAMBSAUQBSASBRACIACABIAAAQIAAAQQgPACgUAAQghAAgygFg");
	this.shape_223.setTransform(-1.2,-18.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAjAtQhRgIhsgrIgDgBIACgCQAKgUALgRIABgDIACABQAhAMBRAWQBPAUBZgCIAHACIgCApIgCAAQgPADgWAAQggAAgygFg");
	this.shape_224.setTransform(-1.3,-18.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#AF6C14").s().p("AgqgDQgNAGABAOQgngPgQgbQBqAgBygFIgEAVQgTADgTAAQg8AAgzgdg");
	this.shape_225.setTransform(1.6,0.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C17E1E").s().p("ABTA1Qg/gHhPgYQg4gXg+gYIAEgPIAGgRQAgARBnAgQBlAdBugFQgEAXgDATIgMAAQgbAAgygFg");
	this.shape_226.setTransform(-5.2,-0.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("Ai2gWIgCgBIAOgqIADABQAbAOBjAfQBiAdB9gBIADAAIgBADQgDAagFAWIAAACIgDAAQgQAEgWAAQhqAAjThYg");
	this.shape_227.setTransform(-5.2,-0.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#D39518").s().p("AAjCEQgkgDgjgZQgNAJACAOQhMgiAAhOQAAhMAOhJQAjBLA8A0QA8AyBOAIQgEAqgGAoIgjACQgWAAgWgDg");
	this.shape_228.setTransform(0.9,-10.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E5A61A").s().p("AARD0QhjgMhwg8QgDgDgCgMIAAgDQABgFAGgDIABgBIAAgBIAUhIQAUhDAphVQAphWA/hAQAFgEAngLQApgLAxAPQAtASASA8QAEAIAEA1QABBGgIBfQgIBggaBAIgBACIACABQALAHACAIIAAABQgBAEgNACQgQADgZAAQgnAAg9gHg");
	this.shape_229.setTransform(-6.1,-9.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AguDyQhQgRhFgxIgBAAQgFgDgFgQIAAgDQAEgIAIgFQABgJAQhBQAQhBAphTQAohUBIhFQAEgEAqgPQAtgOAwAVQAzAgANAqQANAqgBAcQABBFgHBgQgGBhgaBAQAIAFACAMIAAACQgGAKgUAFQgEABg7AAQg6AAhOgRg");
	this.shape_230.setTransform(-6.3,-9.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E5A61A").s().p("Ag0AyQgSgYgLgSQApgeAvgWQAygXAZgIQgZAeghA0IgoBFQgRgCgTgYg");
	this.shape_231.setTransform(-15.4,-25.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgSBSQgXgCgYggQgYgfgDgGIgBgDIACgBQA1gmA9gZQA+gYAGgBIADAFQgWATgqA/QgoBBgFAKIgBABg");
	this.shape_232.setTransform(-15.4,-25.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E5B173").s().p("AgoBcQgOghgCgyIABgPQARhsAkgSQADgDAEAAQAFALAQAaQARAbAOAKIgUA0IgjBaIgTA3QgJgLgOghg");
	this.shape_233.setTransform(-23.1,-11.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgVCOQgDgBgTghQgSgigBg/QAChAAUgmQATgmAQgJQAGgHAFABIABAAIABABIAZArQARAaALAGIACABIhRDVg");
	this.shape_234.setTransform(-23,-10.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#77582A").s().p("AjcDPQg8gZgOgNQANgXAvglQAuglAsgfIAvggIABgBIAAgCIgBgJIAAgKQALACAcgMQAVgQAog8IAxhJIABgBIgBgCQgIgPAFgKQAHgJAKgEIANgDIAAgCIDYCdIgDADQgXAGgeAFIgBAAIgBAAQgIAHgaAJIgtAOIgBAAIggAbIhyBjQg9A3gOAIQgUARABAQQgnAOgjAAQghAAgegMg");
	this.shape_235.setTransform(-32.9,28.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AjnDSQg+ghgDgJIgCgBIAAgCQAagtBNg0QBNg0AVgMIgEgLQABgMABgCIABgCIACAAQAFAEAjgNQAPgLAkgyQAigyAWgiQgGgKgBgIQAAgGADgFQAHgMAMgDIAOgEIABAGIgNADQgKADgHAJQgFAKAIAPIABACIgBABQgHAMgqA9QgoA8gVAQQgcAMgKgCIgBAKQgBAFACAEIABACIgCABIgvAhQgsAeguAlQguAlgOAXQAOANA8AZQA9AZBMgbQgBgQAVgQQAOgJA8g2IByhkIAggbIABAAIAtgOQAagJAIgHIABAAIABAAQAPgCAVgFIAWgFQgqARgOAAQgOAJgdALIglANIgRANIgQAKIh7BvQg2AzgMAHQgUARADAHIAAACIgBABQgxAUgoAAQgkAAgdgQg");
	this.shape_236.setTransform(-33.1,28.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#77582A").s().p("ACwDSQgcgEgJgDQgPhAgYgyQgYgygDgDIgBgBIgYAAQgIAAgCgEQgCgJAFgHIABgBIgBgCQgSgLg/gMQhBgPgUgEQiEgngihEQgMgbADgSQACgSABgBIABgBIAAAAQAAgDADgCQAggNB0AcQB0AcBaAdIAiAVQAeASAZAMQAoASAZBGQASAnAeAvIAnA8QgFAIgUAUQgTAVgbAJQgRAEgQAAQgLAAgLgCg");
	this.shape_237.setTransform(3.6,27.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("ACpDYQghgHgEgCIgBAAIgBgCQgMg6gTgvQgTgvgLgOIgNAAIgLAAQgLAAgEgGQgCgDABgDQACgIAEgGQgPgHg1gMQg2gOgxgJQiDgmgdhFQgLgZABgRQACgWACgEQAAgFAFgEQAZgMBUARQBTARBPAXIBYAaIABAAIAAABIAgAVQAdASAaANQArAUAbBJQATApAgAwIAkA2IABACIgBABQgCAEgVAaQgUAZgfALQgQADgQAAQgQAAgQgDg");
	this.shape_238.setTransform(3.6,27.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAAAAQgNgLgJgFQAGAAAVAOQANAHAFAKIgGACQgEgJgNgIg");
	this.shape_239.setTransform(-54.5,56.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#3A260C").s().p("AgjBjQgOgWABgdQADgwAHgQIAegvQAZgnAWgOIAKAIQhEAngVBnQgCAKABAIQAFAyAiAPQgVgDgMgPg");
	this.shape_240.setTransform(-63.9,57.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgpBmQgSgdAEgmQAEgkAGgRIAAAAIAAgBIAggwQAagpAYgOIABAAIACABIAOALIADACIgEADQhFAkgUBoQgGAmARATQARATAQAHIgBAFIgDAAQgdAAgQgVgAgEB1QgigPgFgyIABgSQAVhnBEgnIgKgIQgWAOgZAnQgaAngEAIQgHAQgDAwQgBAdAOAWQAMAPAVADIAAAAg");
	this.shape_241.setTransform(-63.7,57.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F4E8D4").s().p("Ag8AwQgPgWABgcQACgoAGgUQAdgGAmAGQAoAFAiAgIgDAQQgDAWgRAZQgQAZgzADIgBAAQgeAAgOgSg");
	this.shape_242.setTransform(-61.3,62.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#42392B").s().p("Ag3B1IgCAAIgFgBIgCAAIgFgBIgCgBIgEgBIgCgBIgDgCIgCgBIgDgCIgCgBIgDgDIgBgCIgDgCIgBgDIgCgDIgCgDIgBgCIgCgEIAAgDIgCgFIAAgBQgDgNAAgPIAAgJIAAAAIABgIIAAgBIABgIIAAgBIABgHIAAgBIABgHIAAgBIACgEIAAAAIACgLQAdgFAoAFQAmAFAiAeIgDAQQgDAYgRAZQgQAZgzADIgHAAgAgcgQQgogGgdAFIAeguQAbgnAWgOQAGAHAcAQQAfAQA9AFIgeAuQgUAdgLANIgCADQgjgdgmgGg");
	this.shape_243.setTransform(-58,57.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AhkBlQgSgdAEgmQAEgkAGgRIAAAAIAAgBIAggxQAcgoAYgOIABgBIACACQAAADAdARQAgATBDAEIAFABIgDAEIgbAqQgYAigNARQgFAGgCAPQgDAZgPAcQgPAcg1AEQglgCgTgWg");
	this.shape_244.setTransform(-57.8,57.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#3A260C").s().p("AgrAtQhTgDgPgJIgBgJIABgLQANAJAxAFQAwAFBXgZQBIgYANgbIACASIAAABQhlBGhQAAIgFAAg");
	this.shape_245.setTransform(34.4,52.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgzA3QhYgGgGgHIgBgBIAAgBQgCgKACgRIAAgEIAEACQAHAIAwAHQAwAHBdgbQBOgbAJgbIADgGIACAHQAEAYgCAEIAAABIgBABQhpBIhSAAIgLAAgAiOAdIABAIQAPAKBTACQBSADBohJIAAgBIgBgRQgOAahJAYQhWAagxgFQgwgGgNgIIgBALg");
	this.shape_246.setTransform(34.3,52.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F4E8D4").s().p("Ag2AIQACglAPgYIAUgDIARgDQAVgDAOANQANANAEASQADASAAAGIAAABQgtAjgwATQgRgbABgag");
	this.shape_247.setTransform(43.2,49.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#42392B").s().p("AhQBFQgzgGgLgGIAAgIQAAgUAGgWIAIgeQAlALAdgRQAegRAFgIQAOACAygJIAFAAQgNAYgDAlQAAAZAQAcQg3ARgsAAIgXgBgAAgAAQACgnAPgXIAmgGQAXgEANANQAOAOADASQADASAAAHIAAABIgMAHIgEADIgIAGIgGADIgGAEIgGAEIgGADIgGAEIgHADIgFADIgHADIgFACIgIAEIgDABIgGACQgRgbABgYg");
	this.shape_248.setTransform(34.4,50.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("Ag0BNQhXgGgGgHIgBgBIgBgBQgDgWAIgfIAKgiIABgDIACABQAmAMAdgTQAegTACgEIABgBIACABQAMACAzgJIAzgMQAZgDAQAOQAQASADAXQACAXgBACIAAABIgBABQhpBKhSAAIgMAAg");
	this.shape_249.setTransform(34.4,49.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#441701").s().p("AgFAiQgbgNgIgqIgCgNIAoAQQAaAJATgCQgOAdgVAPQgFACgDAAIgFgBg");
	this.shape_250.setTransform(21.1,-39.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AANALQgHgLgPACQgCgFAJgGQADgCgUgLQACgDANAEQALAEANApIgHgNg");
	this.shape_251.setTransform(3.5,-53.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgOALQAKgFAOgQIAEADQgUASgHAAIgBAAg");
	this.shape_252.setTransform(30.8,-62.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#E5B173").s().p("AgrhAQAHACAkAPQAoAOAEAXQgGAVgcAaIgcAbg");
	this.shape_253.setTransform(38.3,-57.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgFAAQACgHADgBQAFABABAHQgCAIgEABQgFgBAAgIg");
	this.shape_254.setTransform(38.4,-66.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgagHQAHgtAYAAQAaAGgEAuQgIAwgZAFQgZgKAFgygAgVgHQgDAvATAIQASgEAJgtQADgogUgGQgUAAgGAog");
	this.shape_255.setTransform(37.1,-68.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#3F2401").s().p("AgcAVQAGgbAQgKQAPgLACABQAEACAGAMIAIAQIgDAAIgBgBIgBABQgeAJgIANIgDABQgGAAgFgGg");
	this.shape_256.setTransform(26.6,-76.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgaAgIgJgGIgBgBIAAgCQAHgdASgNQARgNAHAAQABgFANAVQAHAOACAFQAAAEgCABQgEADgEgCQgcAJgIANQgCADgEAAQgEAAgGgCg");
	this.shape_257.setTransform(26.3,-76.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgGCEQgFgBgjg0QghgzgGhXIADAUIAHAgQAQA6AXAjQAYAjAIAGQAhgSAXg0QAYg1AEgOQgiglgHgmQgJgmACgJIAAAAIAKAnQAGAoAlAoIABACIAAABQgCAKgaA4QgZA6gkATIgCAAg");
	this.shape_258.setTransform(2.2,-21.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E5A61A").s().p("AgpBTQghgygKhXIByhOQgBADAJApQAKAoAkAoQgBAHgZA4QgZA6gkAUQgFgBghgxg");
	this.shape_259.setTransform(2.1,-21.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("Ag1BOQgQgfgDgwQgEgxABgIIAAgBIABgBQAYgrAuATQAcAOAZAdQAYAcADAQQgBAdgQAWQgOAVgPABQgLgEgIgPIgLgXIgJAdQgLAXgNAFQgLAAgJgNg");
	this.shape_260.setTransform(12.7,-35);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C17E1E").s().p("AAhAnQhPgIhogpIATghQAjAMBTAUQBRASBRACIACABIgBAQIAAAQQgOACgUAAQghAAgygFg");
	this.shape_261.setTransform(3.8,-23.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AAjAtQhRgIhsgqIgDgCIACgCQAKgUAKgSIACgBIACAAQAiANBRAVQBPAUBXgBIAHABIAAApIgDABQgPABgWAAQggAAgygEg");
	this.shape_262.setTransform(3.7,-23.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#AF6C14").s().p("AgqgDQgNAGACAOQgngPgSgbQBsAgBwgFIgCAVQgUADgTAAQg8AAgzgdg");
	this.shape_263.setTransform(6.6,-4.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C17E1E").s().p("ABSA1Qg9gHhRgYQg3gXg/gYIAGgPIAFgRQAgARBoAgQBkAdBtgFQgCAXgFATIgLAAQgbAAgzgFg");
	this.shape_264.setTransform(-0.2,-5.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("Ai2gWIgCgBIAOgqIADABQAbAOBkAfQBhAdB8gBIAEAAIAAADQgEAagEAWIgBACIgCAAQgRAEgWAAQhqAAjThYg");
	this.shape_265.setTransform(-0.2,-5.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#D39518").s().p("AAjCEQglgDgigZQgMAJAAAOQhKgiAAhOQAAhMANhJQAjBLA9A0QA7AyBNAIQgDAqgHAoIgiACQgWAAgWgDg");
	this.shape_266.setTransform(5.9,-15.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E5A61A").s().p("AgzAyQgTgYgLgSQAogeAwgWQAxgXAagIQgZAegiA0IgoBFQgQgCgSgYg");
	this.shape_267.setTransform(-10.4,-30.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgSBSQgXgDgYgfQgYgfgDgHIgBgBIACgCQA1gmA9gYQA+gZAGgBIADAEQgWAVgqA/QgoBAgFAKIgBABg");
	this.shape_268.setTransform(-10.4,-30.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgVCOQgDgBgSghQgTgigCg/QAEhAATgmQAUgmAQgJQAFgHAFABIABAAIAAABIAaArQARAaAKAGIAEABIhSDVg");
	this.shape_269.setTransform(-18,-15.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#77582A").s().p("AjbDPQg+gZgMgNQAMgXAuglQAvglArgfIAwggIACgBIgBgCIgCgJIACgKQAJACAdgMQAVgQAog8IAxhJIABgBIgBgCQgIgPAFgKQAHgJALgEIALgDIAAgCIDYCdIgBADQgZAGgdAFIgBAAIAAAAQgKAHgZAJIgtAOIgBAAIggAbIhyBjQg8A3gPAIQgUARABAQQgnAOgjAAQghAAgdgMg");
	this.shape_270.setTransform(-27.9,23.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AjnDSQg+ghgEgJIgBgBIAAgCQAZgtBOg0QBNg0AVgMIgDgLQAAgMABgCIAAgCIADAAQAFAEAjgNQAPgLAlgyQAhgyAWgiQgGgKgBgIQAAgGACgFQAIgMAMgDIAOgEIAAAGIgLADQgLADgHAJQgFAKAIAPIABACIgBABQgHAMgqA9QgoA8gVAQQgcAMgKgCIgBAKQAAAFABAEIABACIgCABIgwAhQgrAeguAlQgvAlgMAXQANANA9AZQA8AZBMgbQgBgQAUgQQAPgJA9g2IBxhkIAggbIABAAIAtgOQAZgJAKgHIAAAAIABAAQAPgCAVgFIAWgFQgqARgPAAQgNAJgeALIglANIgPANIgQAKIh8BvQg3AzgMAHQgSARACAHIAAACIgCABQgwAUgoAAQgkAAgdgQg");
	this.shape_271.setTransform(-28.1,23.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AAAAAQgNgLgJgFQAFAAAXAOQANAHAEAKIgGACQgDgJgOgIg");
	this.shape_272.setTransform(-49.5,51.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AhkBlQgSgdAEgmQAEgkAGgRIAAgBIAAAAIAggwQAcgpAYgOIABgBIACACQAAADAdASQAgARBDAFIAFABIgDAEIgbArQgYAhgNARQgFAGgCAPQgDAZgPAcQgPAcg1ADQglAAgTgXg");
	this.shape_273.setTransform(-52.8,52.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#3A260C").s().p("AgrAtQhTgDgQgJIAAgJIABgLQANAJAwAFQAxAFBWgZQBKgYAMgbIACASIAAABQhlBGhQAAIgFAAg");
	this.shape_274.setTransform(39.4,47.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#66471F").s().p("ABLClQgCgPgQg3QgPg3gaghIgBgBIgCAAIgCgBQgEgBgBgQIAAgBIAAgBIgjg0Qgjgxg1g7QAagHAVgBQATAGAeA4QAdA3AMAgIAEAQQADANAGACQALgBAAgBQADADAeA2QAeA6ALBJQgUgHgXgMg");
	this.shape_275.setTransform(16.5,56);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AANAMQgHgMgPAEQgCgGAJgGQADgCgTgLQABgDAOAEQAKAEAMAnIgGgLg");
	this.shape_276.setTransform(12.1,-29.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#D8A166").s().p("AAHAvQgagMgOgTQgHgcAVgYQALgNAIABQAQAKAOAdIAGARIgUApIgJgCg");
	this.shape_277.setTransform(11.7,-30.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgkAUQgJggAYgaQANgPAIACQATAHAKAZQAKAXABAFIgOgZQgNgYgNgGQgGgBgLANQgWAXAIAdQAHANAUAKIAVAMQgygLgDgWg");
	this.shape_278.setTransform(11.6,-30.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAIAaIgEgEQgEgKgOACIgCABIgBgCIgEgOQgCgOAGgIQADgFANAGQAWAOACARQgDAOgGADIgDAAIgDAAgAAIASIACADIACAAQABABAFgNQgCgNgTgNQgIgEgCACQgCACgBAEQAAAMADAKIACAAQAPAAAEAJg");
	this.shape_279.setTransform(45.8,-51.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#3F2401").s().p("AAJAXQgDgMgVABIgDgMQgDgOAFgHQAIgFANANQAPAMAAAKQgEAPgFAAIgCgBg");
	this.shape_280.setTransform(45.9,-51.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#663B02").s().p("AhlDeQABgGAMgIQAEgDABgGIABACIAAAEQgFAOgLAIIgBAAIAAABIAAABIgCgHgAhbChIgCgGIABgCQADgHANgFIAFgDQAFAOgCAMQAAAIgFAEIgKAIQgCgNgGgKgAhEBpQgGgKAAgHIABgCQACgFAGgCIAOgFQAEAHADAIIAAAEQgCAIgPAHIgEACIgDgFgAD2ATIgIAAIAGgFQAGgCAIgSQAAgDgBgDIAEAAQAGAAAFAFQADAGgLALQgGAHgGADIgGgBgAkQAGQAAgFADgDIAEADIACACIgCACIgHAGIAAgFgAD7gXIgBgBIABgCQACgCADgOQACgOgQgPIgCgCIACgCQACgBAAgLQgDgMgWgKIgCgBIAAgCQADgEgHgQQgIgKgUgBIgCAAIAAgCQABgFgQgPQgOgIgYAIIgCABIgBgCQAAgDgLgJQgLgJgZAFIgBAAIgBAAQgQgKgSgDQgHAAgLAFQgVAKgNgDIgFgDQgKgPggAhIgCADIgCgDQAAgCgLgDQgMgEghAcIgBABIgCAAQgJgIgkAIQgNAHgDATIAAABIgCABIgRAGQgPAHgPAPQAFggAbgOQAagPAEAAIACAAIAAgCQADgTAOgHQAjgIAJAHIACABIABgBQAhgbAMAEQALACAAADIACACIACgCQAggjAIAQIAGADQAOADAVgKQALgEAHgBQASADAQAKIABABIABgBQAagEAKAJQALAJAAACIABACIACgBQAYgIAOAJQAQAOgBAFIAAACIACAAQAVABAIAKQAHARgDADIgBACIACABQAWAKADALQAAAMgCABIgCACIACACQAQAPgCAOQgDAOgCACIgBACIABABQAIAIgBAJQgIAVgGABIgCACIgGgIgAkCg0QAFgRAPgKQgGALAAAOIAAABIgBABIgNAJQgBgEABgFg");
	this.shape_281.setTransform(24.6,-54.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#563301").s().p("AirECQgJgJgBgMIgBgPIAAgEIgDABQgUAEgJgJQgIgKABgNQABgNABgBIABgDIgEgBQgSAAgHgJQgJgZAFgHIABgCIgCgBQgRgHgDgNQACgfAJgGIABgBIgBgCQgRgfAGgRQAGgSADgBIACgCIgCAAQgKgLACgNQACgPAJgJIALgLIACgBIgCgCQgKgLACgLQADgOAMgJIANgKIABgBIAAgBQADgkAcgPQAcgQAEABIACgBIAAgCQADgTANgHQAkgIAJAIIACABIABgCQAhgbAMAEQALADAAACIACADIACgDQAggiAIAQIAFADQAPADAVgKQALgFAHgBQASAEAQAKIABAAIABAAQAZgFALAJQALAJAAADIABACIACgBQAYgIAOAIQAQAOgBAFIAAACIACAAQAUABAIALQAHAQgDAEIAAACIACABQAWAJADAMQAAALgCACIgCACIACABQAQAQgCAOQgDAOgCABIgBACIABACQAIAIgBAJQgIAUgGACIgGAEIAIABQAGgBAFAGQACAGgKANQgJALgNABQgZgFgDgGIgCgBIgBABQgTAFgMgNQgGgFgFgCQgGAAgIAEQgMAHgUgBQgMgDgEgFQgHgLgQAPQgOAKgMgEQgMgFgBgCIgDgCIgCAEQgEAKgJAEQgcADgFgHIgDgBIgBADQgIAVggAIQgGACgCAEIgBADQAAAHAGAJQAFAIAEAKIAAAEQgCAIgPAGQgNAGgDAHIgBACIACAGQAJARgBATQgBAIgEADQgMAIgBAGQAAAEAEAHIAAAEQgFAOgLAIIgBABIAAABQgJAcgRARQgRARgEACQgHACgGAAQgHAAgGgEg");
	this.shape_282.setTransform(24.5,-51.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AivEMQgRgVADgSQgVADgKgKQgMgSAFgRIAAgFQgSgBgIgLQgJgQADgNIABgFQgRgJgEgPQgBgGABgHQAFgUAGgHQgPgdAEgSQAEgTAGgFQgLgLACgPIAAgBQAJgcANgIQgKgLACgNQANgeARgHIAAgIQAHgfAZgPQAYgPAKgCQAEgUAOgJQAhgKAQAJQAbgZAVABQAJABADAEQAhgjANARIAEACQAMACAUgJQAMgFAHgBQAYAFANAJQAYgFAMAIQAMAIADAGQAZgIAQAJQAPAMABAJQAWACAJAMQAIAOgDAIIAAABQAXAKAEAOIAAAHIgDAIQASATgEARQgCAKgDAEQAIAJgBALIAAABQgDAPgIAGQAGACAEAGQABADAAADQgBAIgJALQgLANgOABQgZgCgHgJQgWAFgMgOQgGgFgDgBQgEAAgHADQgNAIgWgBQgPgDgEgGQgEgJgNAMQgeARgNgPQgFALgKAEQgYAFgLgHQgGANgOAIQgPAIgIACQgFABAAACIgBABQABAEAFAJQAFAJAEAKIAAAHQgEAMgQAHQgLAEgDAGIAAAAIABACQAKATgBAWQgBAKgHAFIgMAGQABAFAEAIQABADAAAEQgIATgKAHQgKAegSASQgSASgDABIgBABIAAAAQgJADgHAAQgJAAgGgFg");
	this.shape_283.setTransform(24.6,-51.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AhDgIIgCAJQgFgMACgCIABgDIAEACQApAWAlAAQAnAAAOgEIgEgEIANAHIgDABQgDADgpAFIgLABQgiAAgwgZg");
	this.shape_284.setTransform(38,-23.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgNALQAIgEAQgRIADAEQgUARgHAAIAAAAg");
	this.shape_285.setTransform(39.6,-37.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgYA+IAdgbQAbgZAGgUQgBgRgfgOQgegOgVgGQAEgBAdAHQATAIAUALQATALAAAPQgJAdglAcQgTAPgFAAIAAAAg");
	this.shape_286.setTransform(47.4,-32.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E5B173").s().p("Agqg/QAFAAAmARQAnAPADAWQgGAVgbAZQgaAZgEACg");
	this.shape_287.setTransform(47.1,-32.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgEAAQABgHADgBQAGABgBAHQgBAIgEABQgEgBAAgIg");
	this.shape_288.setTransform(47.1,-41.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgXgHQAHgoAVAAQAWAHgDAnQgKAtgUADQgUgJADgtg");
	this.shape_289.setTransform(46,-43.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgagHQAIgtAYABQAaAGgFAtQgIAwgZAFQgZgMAFgwgAgUgGQgEAtATAJQASgDAJguQAEgngVgGQgTAAgGAog");
	this.shape_290.setTransform(46,-43.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgFAAQACgIAEAAQAFABAAAHQgCAJgEAAQgFgBAAgIg");
	this.shape_291.setTransform(41.1,-41.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgGAsQgTgSgCghQgBgWANgMQAIgHAHAAQAZADADAoQABAFgBAHQgEAZgMAMQgFAFgFAAQgDAAgFgFg");
	this.shape_292.setTransform(39.4,-43);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgKAwQgSgTgCgjQAAgYANgOQAJgJAIAAQAcACADAuQgBAigRATQgGAGgGAAQgFAAgGgGgAgNgpQgMANABAWQABAgARATQAFAEACAAQAEAAAFgFQALgMADgZIABgMQgCgogXgDQgGAAgHAHg");
	this.shape_293.setTransform(39.5,-43);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#3F2401").s().p("AgcAVQAGgbARgKQAPgKACAAQAEADAGAMQAGALABAEQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQgfAJgHANIgEABQgGAAgFgGg");
	this.shape_294.setTransform(35.4,-51.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgaAfIgJgGIgBgBIAAgBQAHgdASgNQARgNAHAAQABgEAOAVQAHANACAFQAAAEgCACQgFACgDgBQgeAIgHAMQgCADgEAAQgEAAgGgCg");
	this.shape_295.setTransform(35.2,-51);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#D8A166").s().p("AgBDbQgygkgciEQgPhBACg0QANhNAmgtQAmguAlgRQgQBMgPBkQgOBhANBYQAPBXBMAoIgjAOIgCABQgOAAgrghg");
	this.shape_296.setTransform(18.5,-30.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E5B173").s().p("AhsDkQgygkgciEQgPhCACgzQAQhbAwgvQAxgwAogIQAzgMBLAFQBKAGAbAxQACAMALBbQAKBagGBCQAHAKgoA7QgnA6itBNIgDAAQgOAAgsggg");
	this.shape_297.setTransform(29.2,-31.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AhsDsQg2gkgkiMQgaiXA8hNQA8hOA5gKQA0gNBNAGQBMAHAbAzIAAAAIgDABIAJA7QAIA0AFA/QAFA8gGAmQAIAEgnA9QgnA9izBHIgBAAIgDABQgLAAgvgeg");
	this.shape_298.setTransform(29.2,-31.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgSANQgXgNAGgHQAIgPAQAAIAXAGIASAEIgCAFIgRgEIgWgFQgMAAgHAKQgCAGARAJQAvAOAEgIIACAFQgCADgIAAQgOAAgggKg");
	this.shape_299.setTransform(-21,10.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#E5B173").s().p("AAAAtQgGgJACgJQAVgTAJgRQAIgGASADQAFABABADIAAADQgBAHgHAOIgJAUIgBABQgTALgMAAQgFAAgEgDgAgYAXQgHgHgBgHQAWgTACgPQAIgIAMAFQAMAQgFAEQgJAOgOAPIgEABQgFADgEAAQgEAAgDgCgAg2ABQgDgCAAgGIABgIQAEgMAFgKQANgOAPAGQAIAPgDAFIABAAQgEANgQAPIAAgBIgDABIgJABQgGAAgDgDg");
	this.shape_300.setTransform(-24,9.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#E5B173").s().p("AgSALQgXgLAJgKQAJgKALABIAXAFIARAFIAIAbQgCACgHAAQgNAAgggJg");
	this.shape_301.setTransform(-20.8,10.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgQAGQAAABAdgNIAEACQgaALgGAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_302.setTransform(47,11.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#D8A166").s().p("ABvA8QgTgHgUgLIgXgMIgBgBIgBAAQgFAEhDgEQhFgFhRg4QACgHAKgUQBqBFB8ABQAzAkA6gWIgYAUQgUAPgRAAIgEAAg");
	this.shape_303.setTransform(33,16);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E5B173").s().p("ABkBjQgUgGgUgMIgXgMIAAgBIgBAAQgGAEhDgEQhFgEhRg7QADgIATgiQASghAkgcQALAHAfAYIAoAeQAgAgBJAEIABAAIABgBQAFgIAcgEQAJABAGAJIACACIACgBQAGgIAgAFIABABIABAAQACgCAKADQAKAHgHAVIAAABIAAABQAFAGgaAgQgCADgWARQgUAPgRAAIgDAAg");
	this.shape_304.setTransform(34.2,12.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("ABfBvQgrgSgQgNQgMAFhKgHQhLgHhCg6IgCgBIAAgCQABgEAUgnQAUgpApgiIADgCIABADQAEAAAxAtQAOANAOAKQAgAhBFAEQAJgLAbgCQAKADAHAKQAMgKAdAFQAFgCALAEQAJAFAAARQgBAJgFAIQAGAJgaAhQgEAEgXARQgVAOgTAAIgGAAg");
	this.shape_305.setTransform(34.2,11.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#D39518").s().p("AAdBbQgOgJgUgcQgYgcgRgbQgOgeAAg4IAAgEQAYBpBiA8QgRASgLAAIgFgBg");
	this.shape_306.setTransform(11.9,3.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#E5A61A").s().p("AAABtQgNgJgXgdQgXgbgRgeQgOgbgBg5QABgSADgPIADgGIBIARQAAACAXAaQAZAaA1AaQADAKAAAKQAAAKgEAEQgFADgPAVQgPAVgUAXQgSAUgLAAIgEgBg");
	this.shape_307.setTransform(14.9,1.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgEBxQgOgJgWgdQgWgbgSgfQgLgTgEgtQgFgtANgWIgEApQAAA5AOAaQASAeAXAcQAXAcANAKQAMAEAUgXQAVgXAPgWQAPgVAEgDQAFgDAAgKQgBgKgCgKQg1gYgagaQgZgagBgDIAfAbQAgAaAuAWIAAABIABABQABAEACANQABAQgIAHQgFAEgNASQgSAbgWAYQgRATgNAAIgGgCg");
	this.shape_308.setTransform(14.9,2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#AF6C14").s().p("AAKAWQghgVgggXQAyAEA+gEQgJAYgIAVIgegBg");
	this.shape_309.setTransform(22.3,20.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#C17E1E").s().p("AgUA4QhYgQhMg/IAXgwQAQAZBRAnQBQAmCpgHQgHAYgKAYQhmAAhWgQg");
	this.shape_310.setTransform(9.4,15.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AABBFQhpgPhVhLIgCgBIABgCQAMgaAPgbIABgDIADACQARAUBOArQBMApCwgIIAEAAIgBADQgJAdgLAcIgBACIgBAAIgfABQg3AAhSgMg");
	this.shape_311.setTransform(9.5,15.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#C17E1E").s().p("AA2A0Qg6gOg6gXQg7gVgYgdIAZghQAfAXBKAiQBJAiBYgLQAAAdgEAcQgcgDg8gOg");
	this.shape_312.setTransform(16.3,-1.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("ACTBMQgqgEhegXQhbgXhHg0IgCgCIABgBQAPgXARgVIACgCIACABQAdAWBLAhQBKAgBagGIADAAIAAADQgBAfgDAgIgBADg");
	this.shape_313.setTransform(16,-1.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AAJgHIACAGIgLAEIgKAFQAQgRADACg");
	this.shape_314.setTransform(-28.4,28.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgBgLIADABQgCALAAALQgCgXABAAg");
	this.shape_315.setTransform(-26.1,30.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#D39518").s().p("AhHAdQhBhNAZhxQAHBlBAA8QA9A+BiALQgOA1gQAjQhfg1hBhPg");
	this.shape_316.setTransform(16.7,7.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#C17E1E").s().p("AhGBMQgMgTgEgfQgEgcAAgbIABggQAsgqAqAZQAkASAcAfQAcAdACAPQAAAWgWAZQgVAUgPgCQgOgGgKgQIgJgTIAAgEIgNAQIAAAAQAAADgLAQQgKAQgPACQgMAAgJgMg");
	this.shape_317.setTransform(24.4,-10.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AhJBSQgTgjgBgzQgBg2ABgIIAAgBIABAAQAhgtA5AaQAkASAdAhQAdAhACARQgCAfgWAWQgTAVgUgBQgNgGgJgQQgJgRgBgJIgRAeQgOAYgSADQgNgBgKgOg");
	this.shape_318.setTransform(24.4,-10.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E5A61A").s().p("AhkDTQhkgwgQgRQA6icBUhtQBShtAQgMQBtgNApAvQApAwgBAMQADAhAAAfQgFCHgjBXQglBXgJAKQgpAHgmAAQhTAAhFghg");
	this.shape_319.setTransform(9.2,6.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgsDvQhOgagwggQgwgggCgEIgBgBIAAgCQAdhnA5hXQA5hYAxg3QAvg3AEgCIABgBIAAAAQBxgNArAyQAqA0gBAKQAMCwgsBrQgsBsgIAEIgLAAQgoAIgkAAQgxAAgsgOg");
	this.shape_320.setTransform(9.1,7.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#77582A").s().p("AjEBSQgOgQgbgVQg1gigYghQgLgWAyglQAegTAcgHQAbgIAIAHIAoAtIAbAgIABACIACgBQAHgEACACQACADgBAGIgBADIADABQAUAAAygWIA9gcIACgBIgBgDQgFgNAEgIQAEgGACABIgBgDIEZCYQgaALgLgHQgGgDgIAAQgSAAhDAJQhDAKhLAOIhdASQgoAJgKABIgIAAQgsAAgogeg");
	this.shape_321.setTransform(-16,32);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AjDBYQgNgMgZgSQg7gmgcgmQgHgSATgTQASgTAQgJQAbgSAfgLQAegMALAJIAlAsIAeAlQAKgFAGABQACAGgCAHIAAADQASgCApgRQAogQAagNQgFgJgBgIQgBgEACgDQAJgJADABIABAFQgBgBgFAHQgEAHAGAOIABACIgDABIg9AdQgxAVgVAAIgDgBIABgCQACgGgDgEQgCgBgGADIgCABIgCgCIgbgfIgoguQgHgGgcAHQgcAHgeATQgyAlAMAWQAXAhA2AjQAaAUAPAQQArAhAxgDQAJgBApgIIBdgTQBKgNBEgKQBDgKARgBQAIABAHADQAKAIAcgNQAAACgKAHQgKAHgUgGQgGgDgHAAQgQABhBALIiLAYIhhASIg0AHIgIABQgvAAgpggg");
	this.shape_322.setTransform(-16.4,31.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#D39518").s().p("AgpgFQAogOArAFQgHASAAAHIgjADIgfACQgHgKgDgLg");
	this.shape_323.setTransform(-1.6,-2.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#E5A61A").s().p("AhaAcQADgyAEgRQA6gOAwgDQAxgCATABQhWBEgHAnQgtgFgoANQgDgOAAgQg");
	this.shape_324.setTransform(3,-9.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E5A61A").s().p("AhaAQQADgyAFgRQA6gOAvgDQAxgCATABQhDA1gTAiQgQAlACAKIgjADIghACQgOgVABghg");
	this.shape_325.setTransform(3,-8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AhXBMQgSggAFgsQAFgvACgIIABgCIABAAQBIgRA2gCQA4gBAEABIAHAAIgGAFQhNA9gRAlQgOAoADACIAAACIhNAGg");
	this.shape_326.setTransform(3.4,-7.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgBAxQgKgJACgKIAAgBQgKADgIgFQgKgJAAgKQgNADgHgGQgIgPAEgGQAFgNAFgLIAAAAIABAAQAVgUAOALQAIAIgBAJIAAAEQAIgKAPAGQAKAIAAAJIgBAEQAKgIAVADQAGABACAFQACAKgKATQgGAKgEALIgDACIABAAQgTAMgNAAQgIAAgEgFg");
	this.shape_327.setTransform(-24,9.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#D8A166").s().p("Ag1AlQApg+A+gTIAEANQgPASglAWQgjAZgTALg");
	this.shape_328.setTransform(-10.2,1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E5B173").s().p("AhECCQgJgOADgGIABgEIgEABQgLAEgGgEQgKgLACgGIgBgDIgDABQgNAEgFgFQgFgLADgIQATgvAVgGQAWgHADADIACABIABgCQAhgqA3guQA5guAMgFIAdgDQgNAkABAaQACAjAEAIQgSAVgtAbIgzAgIgCAAIAAACQABAGABAqQAAAHgFAEQgVALgIgEIgBAAIgBABQgUALgLAAQgFAAgEgDg");
	this.shape_329.setTransform(-17,0.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AhICKQgLgTAEgDQgOADgJgFQgEgIgBgLQgQAFgKgFQgIgRAFgHQASgqAZgMQAYgNAJADQAigsA2gvQA5guAOgFIAjgDIAFgBIgCAEQgQAmABAcQAEApADACIABACIgBABQgRAUgsAaIg7AjQACANABAlQAAAKgHAGQgXAKgPgFQgQALgMAAQgGAAgFgCg");
	this.shape_330.setTransform(-16.8,0.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#77582A").s().p("ABeDtQgDgOgPg4QgQg3gaghIgBgBIgBAAIgDgBQgEgBgBgSIAAgBIAAgBIglg4Qgmgxg3g9Qg4g9g6ggQgbgigMgcQAYAUBcAlQBcAnB8gNQANAGAHAMQAAAHgMALIgPANIA+BUIA0BEQAKAQAWA9IAlBpIAFAOIAGAQQgCALglAUQgOAEgQAAQgqAAg3gdg");
	this.shape_331.setTransform(14.7,48.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("ABZDzIgBAAIgBgCQAAgGgNg5QgOg5gZgiQgGAAgGgDQgGgDACgQIgog9Qglgyg2g8Qg2g8g4geIgBgBIgWgfQgRgYgCgPIAAgCIABgEIADADQAFAIBgAtQBgAtCJgNIABgBIABABQAMAEALASIABACQgBAEgCAEQgPAPgJAGIBCBcQAhAqAJAJQAGAFAOAkIA2CVIAKAcIgBABQABACgJAOQgJANgXAJQgPAGgSAAQgsAAg6gfg");
	this.shape_332.setTransform(14.7,48.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#3A260C").s().p("AiKgDIgCgQQBkAhBKgLQBNgKAegQQgEAdgnAJQgbAHhIACIgIAAQhGAAg7gbg");
	this.shape_333.setTransform(41.1,79);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F4E8D4").s().p("AgpgnQA0gGAlARQAVAPABAXQglAVhmALQABgqAbgng");
	this.shape_334.setTransform(48.2,75);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#42392B").s().p("AhQANQAAgQARgJQAJAFAkACQAhADAfggIAjgFQgYAoAAAnIgIAAQg6AAhHgbg");
	this.shape_335.setTransform(35.1,75.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AiPAbIgBAAIAAgCQgCgDAAgVQAAgTAVgLIABAAIABAAQAEADAkAEQAkAFAfggIABgBIABAAQAGgCApgEQArgDAlALQATAIAIAUQAJAUgDAPQABAUgwANQgdAIhJABIgHAAQhIAAg9geg");
	this.shape_336.setTransform(41.1,76.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#3A260C").s().p("AhrBkQAMhIAvgsQAuguArgVQAugWAIgCQAGADAGAGQhxApgqBDQgsBEgCAeIgNgIg");
	this.shape_337.setTransform(-53.2,26);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#42392B").s().p("AgvAWQgPgZgUgNQAVgXAdgUQAdgUAygOQAcAiAIATQhYAogCAeIAAACQACAOAGAEIgRAVQgMAMgLAKQAHgrgPgcg");
	this.shape_338.setTransform(-46.6,25.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#F4E8D4").s().p("Ag2A7QACgPANgkQANgiAmgqQAmAWAFA8QAAAOgEAQQgiAZgaAAQgbAAgSgKg");
	this.shape_339.setTransform(-56.5,31.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AhPB1Qg0gLgDgIIgBgBIAAgBQAMhNAzgtQAygwAugWQAwgWAEAAIABAAIABAAQAYANAQAZQAQAbABAEIABADIgCABQg2AYgTARQgTAQABAKQAEAQAFABIADACIgUASQg1A8guAAQgHAAgIgCg");
	this.shape_340.setTransform(-51.3,26.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgcB5QgNgMgQggQgQghgLgiQgHgVAEguQAEgvARgUQgDAIgJAhQgKA5AIAeQAMAhAQAhQARAhAMAMQAMAHAWgTQAYgUATgTQAKgLAIgTQAJgTAAgHQhZhZAHgKQABADAYAgQAZAgAoAdIABABIAAABQgBAFgMAXQgLAXgJAKQgXAXgZAUQgPAOgMAAQgGAAgEgEg");
	this.shape_341.setTransform(34.1,-3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#D39518").s().p("AANBlQgMgNgPggQgRghgLgfQgIggAKg6IABgEQADBvBTBQQgRAOgKAAQgEAAgDgCg");
	this.shape_342.setTransform(30.3,-1.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E5A61A").s().p("AgXB2QgMgMgQghQgRghgMghQgIgeAKg5IAKgiIAEgFIA/AfQAAACASAfQAVAfAvAjQgBAFgKAUQgLAUgJALQgTATgYAUQgQAOgLAAQgEAAgDgCg");
	this.shape_343.setTransform(34,-3.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#D8A166").s().p("ABfBWQgRgJgSgQIgTgRIgBAAIgBAAQgGADg/gSQhCgShDhJIAQgZQBaBbB3AYQAqAvA8gMQgDAEgYAMQgRAJgNAAQgGAAgGgCg");
	this.shape_344.setTransform(48.6,15);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E5B173").s().p("ABOB4QgRgKgSgPIgTgSIgBAAIgBAAQgGADg/gSQhCgShDhIQAFgLAYgeQAYgdAngWQAKAJAZAeQAZAdAIAJQAZAnBGAQIABAAIABAAQAGgHAbABQAJADAFAKIABACIACAAQAHgHAeALIABABIABAAQACgCAKAFQAHAMgKAUIgBABIAAABQAEAGgfAcIgbAQQgRAIgOAAIgLgBg");
	this.shape_345.setTransform(50.3,11.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("ABKCCQgRgJgPgOIgUgTQgMAChGgVQhHgVg2hFIgBgCIABgBQABgFAbglQAbgmAugaIADgCIABAEQADAAAnA3QALAQAMANQAZAnBCAQQAKgJAbACQAJAFAFANQANgJAbALQAFgBAKAGQAHAIgDARQgCAJgGAIQAEAKggAcQgEAEgaAMQgRAIgOAAQgIAAgHgDg");
	this.shape_346.setTransform(50.2,11.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AANALQgHgLgPADQgCgFAJgGQADgDgUgKQABgDANADQAMADANAqIgHgNg");
	this.shape_347.setTransform(31.8,-35.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#D8A166").s().p("AAIAxQgZgLgPgTQgIgdAUgZQAKgOAIABQAQAIAPAfIAHAQIgSArIgKgBg");
	this.shape_348.setTransform(31.3,-36.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgkAWQgJggAWgcQANgQAKABQARAHALAZQALAXABAGIgPgaQgOgYgMgFQgHgBgLANQgUAaAIAdQAIANAVAKIAVALQgygKgFgWg");
	this.shape_349.setTransform(31.1,-36.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAJAaIgFgEQgEgKgNAEIgDABIgBgDIgEgPQgDgNAGgJQACgFAOAFQAXANACATQgCAOgGADIgEABIgCgBgAAJATIACACIABAAQACABAEgOQgCgNgUgNQgIgDgCACQgCACAAAEQgBAMAFAKIAEAAQAMAAAFAKg");
	this.shape_350.setTransform(64.5,-59.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#3F2401").s().p("AAKAXQgDgLgVABIgEgNQgDgNAFgIQAHgFAOAMQAQAMAAAKQgEAQgFAAIgCgBg");
	this.shape_351.setTransform(64.5,-59.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#663B02").s().p("AhbDoQABgHALgIQAEgDABgHIAAACIABAEQgFAPgKAIIgBABIAAABIAAABQgCgEAAgDgAhUCoIgCgGIABgBQADgIAMgGIAFgDQAFAOAAANQgBAIgEAEIgKAJQgDgNgGgLgAg/BuQgHgLAAgHIABgCQABgEAHgCIAOgGIAHAPIAAAEQgBAIgPAIIgEACIgDgFgAkPARQAAgGACgFIAFAFIACACIgCACIgHAHIAAgFgAD3AIIgIAAIAGgFQAGgCAHgTIgBgGIAEAAQAGgBAFAFQADAHgKANQgGAGgGAEQgEgCgCAAgAD6gjIgBgCIABgBQACgCACgOQACgPgRgQIgCgBIACgCQACgBAAgMQgEgMgWgJIgCgBIAAgCQADgEgIgRQgIgKgUAAIgDAAIAAgCQABgFgQgOQgPgIgYAJIgCABIgBgCQAAgDgLgJQgLgIgZAGIgBAAIgBgBQgRgJgSgDQgGABgMAGQgSAKgPgCIgFgDQgLgQgeAlIgCACIgCgCQgBgCgLgCQgMgEggAeIgBABIgBgBQgKgIgjAKQgNAIgCAUIgBABIgBABIgRAHQgPAIgPAPQAFghAagQQAagPAEAAIABgBIABgCQACgTANgJQAjgJAKAHIABABIABgBQAggeAMAEQALACAAACIADADIACgDQAegkALAQIAFADQANACAUgLQAMgFAGgBQASADARAJIABABIABgBQAZgGALAJQALAJAAACIABACIACgBQAYgJAPAIQAQAPgBAEIAAACIACAAQAVABAIAKQAIAQgDAEIAAACIACABQAWAJAEAMQAAAMgCACIgCACIACABQARAQgCAOQgCAPgCACIgBABIABACQAIAHAAAKQgHAVgGACIgDACQgCgEgEgEgAkEgrQAFgTAOgLQgFAMABAOIAAACIgCABIgMAKQgBgFAAgEg");
	this.shape_352.setTransform(43.1,-61.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#563301").s().p("AifEOQgKgIgCgOIgBgPIAAgDIgDABQgUAFgJgJQgJgKABgNQAAgNABgCIABgEIgEAAQgSABgIgKQgJgYAFgHIAAgCIgCgBQgQgIgEgNQABggAIgGIABgBIgBgCQgSgfAGgTQAFgSADgBIABgCIgBgCQgLgJABgNQACgQAJgKQAIgLACAAIACgCIgCgCQgLgKABgMQADgOALgLIANgKIACgBIAAgBQABglAbgRQAbgRAFAAIABAAIABgCQACgUANgIQAjgJAKAHIABAAIABgBQAggdAMADQALADAAACIADACIACgCQAegkALAQIAFACQANACAUgKQAMgGAGgBQASADARAKIABAAIABAAQAZgGALAJQALAIAAADIABACIACgBQAYgJAPAIQAQAOgBAFIAAACIACAAQAVAAAIAKQAIARgDAEIAAACIACABQAWAJAEAMQAAAMgCABIgCACIACACQARAPgCAOQgCAPgCACIgBACIABABQAIAIAAAJQgHAWgGACIgGAFIAIgBQAGAAAFAFQADAGgKAOQgJAMgMACQgagEgDgGIgCgBIgBAAQgTAGgMgNQgGgFgFgBQgGAAgIAFQgMAHgUAAQgMgCgEgFQgIgMgPAQQgOAMgMgEQgMgFgCgCIgDgCIgBAEQgDALgKAEQgcAEgFgGIgDgBIAAADQgHAWggAKQgHACgBAEIgBADQAAAHAHAJQAFAJAEAJIAAAEQgBAJgPAHQgMAGgEAIIAAABQAAADACADQAKARAAAUQgBAIgEAEQgLAIgBAGQgBAFAEAHIABAEQgFAQgKAIIgBAAIAAABQgIAdgRATQgQASgDACQgIADgGAAQgHAAgFgEg");
	this.shape_353.setTransform(43.1,-58);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AikEYQgRgVACgSQgVAEgKgKQgNgSAEgSIAAgFQgSAAgJgLQgKgQADgOIABgFQgRgIgFgPQgBgHAAgHQAFgVAFgHQgQgdAEgTQADgUAFgGQgLgKABgQIAAgBQAIgdANgIQgKgMABgNQAMggAQgHIABgJQAFggAYgQQAYgQAJgDQADgVAPgJQAggMAQAJQAbgcAUABQAJABAEADQAfglAPARIAEACQALACATgKQAMgGAIgBQAXAEAOAIQAYgFAMAHQAMAIADAGQAZgJAQAIQAQAMACAJQAVABAJAMQAJAOgCAJQAXAKAEAPIABAHQgBAFgCADQATATgEARQgBALgCAEQAIAJgBALIAAABQgDAPgHAHQAGABAEAGQACAEgBAEQAAAIgJALQgKAOgOACQgagCgHgIQgWAFgMgNQgGgFgDgBQgEAAgHAEQgNAIgWAAQgPgCgEgHQgEgIgMANQgeASgOgOQgFALgKAEQgXAHgLgIQgFAOgPAIQgOAKgIACQgEABgBACIAAABQAAAFAGAJQAFAJAEAKIABAHQgEANgPAHQgLAFgCAGIAAAAIAAADQAMATgBAWQgBAKgGAGIgMAGQABAGAEAIQACAEgBADQgHAUgJAHQgJAggSATQgRATgDACIAAAAIgBAAQgIAEgIAAQgIAAgHgFg");
	this.shape_354.setTransform(43.3,-58.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AhDgGIgBAJQgHgMADgDIABgDIADACQAqAWAmgCQAngCAOgFIgEgCIANAFIgEABQgCAEgoAHIgQABQghAAgugWg");
	this.shape_355.setTransform(57.8,-30.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAKgLIAEADQgVAUgGAAQAJgFAOgSg");
	this.shape_356.setTransform(58.8,-44.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgUA/QAEgCAYgbQAagaAFgVQgCgRgggNQgegOgWgFQAGgCAcAGQAUAHAUAMQAUAKABAPQgJAegkAgQgSAPgFAAIAAAAg");
	this.shape_357.setTransform(66.7,-39.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#E5B173").s().p("AgrhBQAGABAlAPQAoAOAEAWQgFAWgaAbQgZAbgEADg");
	this.shape_358.setTransform(66.4,-39.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgFAAQACgIADAAQAFABABAHQgBAJgFAAQgEAAgBgJg");
	this.shape_359.setTransform(66.3,-49);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgXgGQAFgpAWgBQAWAFgCApQgHAvgUAEQgVgIABgvg");
	this.shape_360.setTransform(65,-51.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgagHQAGguAYgBQAaAFgDAwQgGAygZAFQgZgLADgygAgUgGQgCAvATAIQASgEAHgvQACgqgUgEQgTABgFApg");
	this.shape_361.setTransform(65,-51.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgFAAQACgIADgBQAGACAAAHQgCAJgEAAQgFgBAAgIg");
	this.shape_362.setTransform(60.2,-48.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgEAuQgTgSgEghQgCgXANgNQAHgIAJAAQAYACAEApIAAANQgCAagMAMQgFAFgFAAQgEAAgEgEg");
	this.shape_363.setTransform(58.5,-50.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgIAyQgSgTgEgkQgBgZANgPQAIgJAKgBQAaACAFAuQABAkgQAUQgGAHgHAAIgBAAQgEAAgGgGgAgOgpQgMANACAXQADAhARASQAEAFADAAQAEgBAFgFQAKgNADgZIAAgNQgEgqgVgBQgIAAgGAIg");
	this.shape_364.setTransform(58.5,-50.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#3F2401").s().p("AgcAXQAGgcAQgLQAOgLACAAQAEADAHAMQAHAMABADQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAQgeALgHANIgEABQgFAAgGgFg");
	this.shape_365.setTransform(54.2,-58.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgZAhQgIgEgBgCIgBgBIAAgBQAFgeASgOQAQgOAHAAQABgFAOAVQAIAOACAFQAAAEgBACQgFACgDgBQgeAKgGANQgCADgEAAQgEAAgGgCg");
	this.shape_366.setTransform(54,-58.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#D8A166").s().p("AACDjQgxgjghiHQgShCAAg1QAJhQAlgwQAkgxAkgTQgMBPgKBnQgLBlAQBaQASBZBOAmIgiAQIgDABQgOAAguggg");
	this.shape_367.setTransform(38.4,-37.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#E5B173").s().p("AhjDuQgzgighiHQgShFAAgzQAMheAvgzQAugzAogJQA1gPBIACQBLADAcAxQADANAPBcQAOBcgDBFQAHALglA+QglA9iqBWIgDABQgOAAguggg");
	this.shape_368.setTransform(48.7,-38.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AhiD2Qg3ghgqiPQggiaA5hSQA5hTA4gMQA1gQBLADQBNAEAdAzIgDABIAMA9QAJA1AIBAQAHA+gEAnQAIAEglBBQgkBAiwBQIgBABIAAAAIgDAAQgLAAgwgdg");
	this.shape_369.setTransform(48.7,-38.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#C17E1E").s().p("AhIBJQgMgSgEgdQgEgcAAgaIABgfQAtgoArAYQAlASAcAdQAdAcACAOQAAAWgXAXQgWAUgOgCQgPgGgKgQIgJgSIAAgDIgNAPIAAAAQgBADgKAPQgLAQgQACQgMgBgJgLg");
	this.shape_370.setTransform(43.4,-16.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AhKBOQgUghgBgxQgBg0ACgIIAAAAIAAgBQAjgrA5AZQAkASAeAfQAeAgACAQQgCAegWAVQgTAUgVgBQgNgFgJgQIgLgZIgRAdQgOAXgSADQgOgBgKgOg");
	this.shape_371.setTransform(43.3,-15.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#C17E1E").s().p("AAvAxQhRgKh8g4QAIgaAIgMQAfAVBZAiQBWAjBbgSQADARABASQgMAEgWAAQgfAAgvgHg");
	this.shape_372.setTransform(39,-7.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#C17E1E").s().p("AivgMIACgTIACgVQAgAZBdAcQBbAfCDgbIgCAUIgBASQgfAGhFACQgNACgOAAQhYAAiFhBg");
	this.shape_373.setTransform(37.2,8.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AAyA7QhcgCiIhAIgCgBIAHgvIACgDIADACQAcAYBbAfQBZAfCNgeIgGAzQgaAIhDAAIggAAgAingcIgGARQCAA7BcAEQBeADAigLIABgSIACgUQiCAbhYgdQhZgagggZIgGATg");
	this.shape_374.setTransform(37,8.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgFAqQgegIgvgPQgtgOgjgVIATgtQAaATBfAlQBdAjBWgUIAGAuQgOAGgZAAQguAAhTgUg");
	this.shape_375.setTransform(39,-7.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#E5A61A").s().p("AADDWQhKgOgygdQgygbgHgIIgBgHQgCg9AWhrQAVhtBIg8QAQgJBPgBQBSgBAtBPQAaBDgCBTQAABFgIA0QgHA1gDALQg6AYg3AAQgXAAgXgFg");
	this.shape_376.setTransform(37,1.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AAADcQhOgPgzgdQgzgcgDgFIgBgCQgFghAIhIQAJhFAbhIQAchHAzgjIABgBIABgBQAEgCAtgGQArgHA2AOQA1AOAeA6QAXA6gBBPQAABNgJA9QgIA9gCAEIAAABIgBABQg+AZg6AAQgYAAgXgFg");
	this.shape_377.setTransform(36.7,1.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#77582A").s().p("AkEA7QAEg+AIgPQBcgQA2AFQA3ADABACIgBgJQAKgCAGABQADgDABgSQgCgzgFgPIgHgSQACgOAFgIQByBIBRAEQBRADAUgJQgMArg/BAQg+BDgiAZQgiAThCACQhDABgXgDQgVABgpANQgpAPgNAFQgxgtAEg5g");
	this.shape_378.setTransform(23.5,30.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AjYCnQg9gtALhEQAKhCAHgIIAAgBIABgBQAxgLBAABQBAABAVACIgBgBQAAgEABgBQAJgHAJADQABgEAAgJQAAgfgGglQgIgIAAgKQAEgXAFgEIABgCIACABQB+BPBUgCQBUgBAEgHIAEgBIAAAEQgIAthEBEQhFBHgiAZQgjAUg/gBQhCAAgYgCQgVABgtAQIgyATIgBAAg");
	this.shape_379.setTransform(23.4,30.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#66471F").s().p("AhqDrQAFgSATgwIAmhbIAVgwQgEgDgEgGIAAgCQAEgKAJgFIABAAIAAgCQgFglgjhcQgjhcgOgjQBGAZA3ABQA4ACAggHQgeB9g2B2Qg1B3gWB/QgvgMgHgJg");
	this.shape_380.setTransform(38.3,45.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#77582A").s().p("AhID+QgwgMgHgJQAEgSAUgwIAmhbIAVgwQgFgDgDgGIAAgBQAEgLAIgFIABAAIAAgCQgEgkgkhdQgihcgOgjQBjAhBCgGQBEgGAMgGQALAIgBAIIAAABQgIAPgGAAIgDABIAAACIgDA4QgEA1gBAzIACAcIAAAIQgDA0gPBVIgUBpQhDAZgsAAQgPAAgNgDg");
	this.shape_381.setTransform(40.4,45.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AhXEEQgrgPAAgHIgCgBIABgBQAIgcAhhOIAqhlQgGgEgBgEIAAgBQAGgPAKgFQgGgYgWg9IgqhyIgYg7IgCgFIAGACQBrAlBDgJQBHgHADgEIACgBIABABQAOAKAAALIAAACQgHAQgKADIgGA7QgFAvADA0IABAcIAAAIQgCBKgQBQQgQBPgEAMIAAABIgCABQhRAZguAAQgTAAgNgEg");
	this.shape_382.setTransform(40.2,45.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#3A260C").s().p("AgLCDQgWgcABg/QAAgWADgXQAOhjAUgWQAJgGATgDQgPATgSAoQgQApgCA4QgBA0AaA/QgPgEgDgBg");
	this.shape_383.setTransform(-10.9,43.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#42392B").s().p("Ag5BJQACg6ASgmQASgnAOgRQApgBAWAEQgRAZABAWQADAeAGAIQgIAPAAAPQABAUAFAUIABABQgdgRhOAKg");
	this.shape_384.setTransform(-6.1,37.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#F4E8D4").s().p("AgfA6Qgcg9ACg0QBTgLAbATQAEASABATIgBAPQgGAfgWANQgWALgUAAQgJAAgJgCg");
	this.shape_385.setTransform(-6.3,51.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgQCPQgegGgEgCIgBAAIAAgBQgigmAJhhQAGguANglQAMglAMgKQAYgOAmACQAnACAGACIAFABIgDAEQgXAfAFAaQAGAaADADIABABIgBACQgQAbALAfQAKAhgBAmQgEAmgYAMQgWAKgVAAIgQgBg");
	this.shape_386.setTransform(-7.2,43.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#3A260C").s().p("AguAdQhfgYgTgKQAEgSAFgPQALAJAyAWQAzATBGAAQBogJAZgOIABALQgBAOgBADQhEAWg9AAQgmAAgmgKg");
	this.shape_387.setTransform(41.3,77.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#F4E8D4").s().p("AhQAqQAKgtA+gnQBEASATAjIACAIQgYAOhlAJIgOABIgWgBg");
	this.shape_388.setTransform(49.1,74);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#42392B").s().p("Ag8AXQglgTgIgEQAWguALgCQAcAnA/gLQBBgLAPgHIAHACQg9AmgKAvQg4gIgngSg");
	this.shape_389.setTransform(36.8,73.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AhHA8QhcgcgEgHIgCgBIABgCQAMg4ASgSQATgTACABIADgBIABADQAaAmBCgMQBBgMAJgFIABAAQBWATAYAsQAIATgDANQgEAMgBABIgBABIgBAAQhSAWhBAAQgvAAgngMg");
	this.shape_390.setTransform(41.2,74.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AAUBoQgSgBgtgOQgvgOgXgbIAAgBIAAgBQgCgIApg5QAog7BpgZQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQhhAWgpA2QgoA0gBAPQAUAXAsAOQArAOAUABQAQAAgBgCIAAgBQAIg0AdgiQAeghAGgDIAGgEQgFACgeAkQgfAmgHAyIAAABIgCAEQgDAEgLAAIgFAAg");
	this.shape_391.setTransform(30.8,-13.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#D39518").s().p("AA7BTQgTgCgsgNQgugOgVgZQgBgDAUgiQAUglAwglQgiAvASA1QARA1A3ALIgIABIgFAAg");
	this.shape_392.setTransform(26.8,-11.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#E5A61A").s().p("AgsBWQgugOgVgZQgCgHAog5QAng6BpgZIApBCQgEACgfAlQggAmgHA1QAGAEgZABQgTgBgsgOg");
	this.shape_393.setTransform(30.8,-13);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#D8A166").s().p("AAkCFIgCgBIgBAAQgFABgSgGQgOgFgCg+IAAgFIAAgBIgBgBQgIgGgzg7Qgyg9gMg7IgBgIQAYBFA1A6QA0A4AGAEIgBAaQAAAXAHAMQASAPAHgEQAZALAUgHQATgHABgCQAUgHABgbQAGAGAAAGIAAABQAAAbgXAFIgBAAIgBABQgCACgVAJQgJAEgJAAQgOAAgNgIg");
	this.shape_394.setTransform(31.6,20.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E5B173").s().p("AAkDJIgCAAIAAAAQgGABgSgGQgOgFgCg+IAAgFIAAgCIgBAAQgIgGgzg9Qgyg7gMg7IgBgPQADhDAMgdQALgcAGgHQAIAAAiAGQAiAHAkAWIgOAdQgJAUgDAIIAAADQAAALALAhIATA8IAMAiQAKAvAUAOIAAABIAAAAQAqAPAKAJIAAABIgDAaIAAACIACABQAIACAJATIAAABQAAAagXAGIgBAAIgBABQgCACgVAJQgJAEgJAAQgOAAgNgJg");
	this.shape_395.setTransform(31.6,13.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AAhDPQgIAAgSgGQgQgGgDhCIAAgEQgNgMgxg+Qgxg8gKg1IgBgPQABg9AOgkQAPglACgBIABgCIACAAQADgBAlAGQAlAGArAaIACABIgCACIgRAiQgHATgCAGIgBACQABAJAJAdIAUA8IAMAmQAKAtASANQA1AUABAIIAAACQAAAOgCAMQANAFAGATIAAACQgBAegbAHQgFAFgXAHQgIADgJAAQgOAAgPgIg");
	this.shape_396.setTransform(31.5,13.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AAOALQgJgLgOAEQgCgFAIgHQADgCgUgJQABgDAOACQALADAPAnIgHgLg");
	this.shape_397.setTransform(37.2,-39.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#D8A166").s().p("AAKAwQgagKgQgSQgJgcATgaQAKgNAIAAQAQAIAQAdIAIAQIgRAqIgJAAg");
	this.shape_398.setTransform(36.7,-40.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgjAYQgLgfAVgcQAMgRALABQARAGAMAYQAMAXABAFIgQgZQgOgXgNgEQgHgBgKAOQgUAaAKAbQAIAMAVAKIAWAJQgzgGgFgWg");
	this.shape_399.setTransform(36.5,-40.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AAKAZIgFgEQgFgKgNAEIgCACIgBgDIgFgOQgDgNAFgJQACgFAOAFQAXALAEASQgCAOgGAEIgDABIgDgBgAAJASIADACIABAAQACABADgPQgCgMgVgLQgIgEgCADQgCACAAAEQAAAMAFAKIAHgBQAKAAAEAJg");
	this.shape_400.setTransform(68.9,-65);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#3F2401").s().p("AALAWQgEgLgVACIgEgNQgEgMAFgIQAHgGAOAMQAQALABAKQgDAQgFAAIgCgBg");
	this.shape_401.setTransform(68.9,-65);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#663B02").s().p("AhSDmQABgHAKgIQAEgEABgGIABACQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgFAOgKAJIAAABIAAABIgBABQgCgEAAgDgAhNCnQgCgDAAgDIAAgBQADgIAMgGIAFgDQAGANAAANQgBAIgEAEQgHAFgCAEQgEgNgGgKgAg6BtQgHgJgBgHIABgDQABgEAGgCQAHgDAHgEQAEAHAEAIIAAAEQgBAIgPAIIgDACIgDgFgAkOAbQAAgGACgFIAFAFIACACIgCACIgHAHIAAgFgAD3gBIgIABIAGgFQAGgDAGgVIgBgGIADAAQAGgBAGAFQADAGgKAOQgEAHgHAEIgGgBgAkFggQAEgTAOgLQgGAMACAOIAAABIgBABIgMAKQgBgEAAgEgAD5gtIgCgBIABgCQACgCACgOQABgPgRgOIgCgBIABgDQADgBgCgLQgEgMgWgIIgCgBIAAgCQADgEgJgQQgJgJgUAAIgCAAIgBgCQACgFgRgNQgPgHgYAKIgCABIgBgCQAAgCgMgJQgLgIgZAHIgBAAIgBAAQgRgIgSgCQgGABgLAFQgSAMgPgCIgFgCQgMgPgdAkIgCADIgCgCQAAgCgMgCQgMgDgeAeIgCABIgBAAQgCgBgOgCQgPgBgOAIQgMAIgCATIAAACIgCAAIgQAJQgPAIgOAPQADggAZgRQAagRAEAAIABgBIABgBQABgTANgJQAOgIAOACIAQACIACABIABgBQAegfANAEQALABAAACIACADIACgDQAeglALAQIAFACQANACAUgMQALgFAGgCQATACARAJIABAAIABAAQAZgHALAIQALAIAAADIACACIACgBQAXgKAPAHQARANgBAFIABACIACAAQAUgBAJAKQAIAQgDAEIAAACIACABQAXAIAEALQABAMgDABIgBACIACACQASAOgCAOQgBAPgCACIgBABIABACQAJAHgBAJQgGAVgGACIgCADQgCgEgEgEg");
	this.shape_402.setTransform(47.4,-65.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#563301").s().p("AiTENQgKgIgCgNIgCgPIAAgDIgEABQgTAGgKgIQgIgKAAgNIAAgOIABgEIgEAAQgSACgIgKQgKgXAEgIIABgCIgDgBQgQgGgFgMQAAggAIgGIABgCIgBgBQgTgeAEgSQAFgSADgBIABgCIgBgCQgMgLABgLQABgPAJgLQAIgKABgBIACgCIgCgCQgLgJABgLQACgPALgKIAMgLIACgBIAAgCQgBgjAbgSQAagSAFAAIABgBIABgBQABgTANgJQAOgIAOACIAQACIACABIABgBQAegfANAEQALABAAACIACADIACgDQAeglALAQIAFACQANACAUgMQALgFAGgCQATACARAJIABAAIABAAQAZgHALAIQALAIAAADIACACIACgBQAXgKAPAHQARANgBAFIABACIACAAQAUgBAJAKQAIAQgDAEIAAACIACABQAXAIAEALQABAMgDABIgBACIACACQASAOgCAOQgBAPgCACIgBABIABACQAJAHgBAJQgGAVgGACIgFAGIAHgBQAGgBAGAFQADAGgKAOQgIAMgMACQgagCgDgGIgCgBIgBABQgSAGgNgMQgHgFgFgBQgGAAgIAFQgLAIgUABQgMgCgEgFQgIgKgPAQQgOAMgMgEQgMgEgCgCIgDgCIgBAEQgDALgJAFQgcAFgFgGIgDgCIgBAEQgGAWgfAKQgGADgCAEIAAACQAAAHAHAKQAGAHAEAKIAAAEQgBAIgPAIQgLAGgDAIIgBABQAAADACADQALARABATQgBAIgEAEQgLAIAAAGQAAAEAEAIQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgFAOgKAJIAAABIAAABQgHAcgQATQgQATgDACQgIADgHAAQgGAAgFgDg");
	this.shape_403.setTransform(47.4,-62.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AiXEXQgSgTABgTQgUAGgLgKQgNgRACgSIABgEQgTAAgJgLQgKgPACgNIAAgGQgRgHgFgOQgCgHABgHQADgUAGgIQgSgbADgTQACgUAFgFQgLgMAAgNIAAgBQAHgdANgKQgLgKAAgNQALggAQgIIAAgIQAEgfAYgRQAXgRAJgDQACgVAOgJQAggNAQAIQAagdAUAAQAKABADADQAeglAQAPIAFACQAKABATgKQALgGAIgCQAXADAOAIQAYgGANAGQAMAHADAGQAZgKAQAIQARALABAJQAWAAAKALQAJAOgCAIQAYAJAEAOQACAEgBADQAAAGgCACQATASgCARIgDAPQAIAIAAALIAAABQgCAPgIAHQAHABAEAGQACADgBAEQAAAIgIALQgKAOgOADQgZgBgHgIQgWAGgNgNQgGgEgDgBQgFAAgHAFQgMAIgWABQgPgCgFgGQgEgIgLANQgdATgPgNQgEALgKAFQgXAHgLgHQgFAPgOAIQgOAJgIADQgEABgBACIAAABQABAFAGAJIAKASIABAGQgDANgPAIQgLAFgCAGIAAAAIABADQAMASAAAWQAAAKgGAGIgMAGQABAFAFAIQACAEgBADQgGAUgJAHQgIAggRATQgQAUgDABIAAABIgBAAQgJAEgIAAQgIAAgGgEg");
	this.shape_404.setTransform(47.6,-62.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AhDgFIgBAKQgHgMADgDIABgDIADACQArATAlgDQAngDAOgEIgEgEIANAGIgEAAQgCADgoAJQgJACgLAAQgfAAgsgTg");
	this.shape_405.setTransform(63.4,-36.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgNAMQAJgFANgSIAFADQgTAUgHAAIgBAAg");
	this.shape_406.setTransform(63.8,-50.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AALAgQAZgbAEgVQgDgQgggMQgfgMgWgEQAGgCAcAFQAUAGAVAKQAUAKABAOQgHAegiAgQgTARgEAAQAEgDAXgbg");
	this.shape_407.setTransform(71.7,-45.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#E5B173").s().p("Agsg/QAGAAAmANQAoANAFAVQgEAWgZAbQgYAcgDACg");
	this.shape_408.setTransform(71.4,-45.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgEAAQAAgHAEgBQAFABAAAHQAAAIgFABQgEgBAAgIg");
	this.shape_409.setTransform(71.1,-54.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgXgFQAEgpAVgBQAWAEAAAoQgFAugUAFQgVgHgBgug");
	this.shape_410.setTransform(69.7,-56.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgagFQAEguAYgBQAaAEgBAtQgEAxgZAIQgZgKABgxgAgVgFQAAAuAUAHQASgFAFguQAAgpgUgDQgTABgEApg");
	this.shape_411.setTransform(69.7,-56.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgFAAQABgIAEAAQAGABAAAHQgBAJgFAAQgFgBAAgIg");
	this.shape_412.setTransform(65,-54.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgCAtQgUgRgFggQgDgXAMgNQAHgHAKgBQAXABAGAoIABAMQgCAZgLAOQgFAFgEAAQgFAAgEgEg");
	this.shape_413.setTransform(63.2,-55.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgFAxQgUgSgFgiQgCgZAMgPQAIgKAKgBQAaAAAGAuQADAigPAVQgGAGgGABIgBABQgFAAgFgGgAgQgoQgKANACAXQAEAgASARQADAEAEAAQAFgBAEgFQAKgNABgZIAAgMQgFgpgVAAQgIAAgHAIg");
	this.shape_414.setTransform(63.2,-55.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#3F2401").s().p("AgcAXQAFgbAPgMQAOgMADABQADACAIALQAHAMABADQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAQgeALgGAOIgFABQgFAAgGgFg");
	this.shape_415.setTransform(58.7,-63.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgZAhIgJgFIgBgBIAAgBQAEgeARgOQAQgOAHgBQABgFAPAVQAIANADAFQAAAEgCABQgEADgEgBQgcALgHAMQgBAEgGAAIgJgCg");
	this.shape_416.setTransform(58.5,-63.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#D8A166").s().p("AAIDgQgzgggmiDQgVhAgCg1QAGhNAigxQAjgxAjgUQgHBNgHBmQgIBjAUBWQAWBXBPAhIgiASIgDABQgOAAgugcg");
	this.shape_417.setTransform(44,-42);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#E5B173").s().p("AhZDuQg1gggmiDQgVhCgCgyQAIhcAtg0QAsg0AogLQA0gRBJAAQBKgBAeAvQAEANASBZQASBagBBDQAIAKgjA+QgiA+inBbIgDABQgOAAgugcg");
	this.shape_418.setTransform(53.9,-43.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AhYD1Qg5gfgwiKQgliUA1hTQA1hTA4gPQA1gRBLAAQBMAAAgAxIgDABIAOA8QALAzALA+QAKA8gDAnQAIADgiBBQgiBBisBVIgBABIgBAAIgDAAQgMAAgvgag");
	this.shape_419.setTransform(54,-43.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#C17E1E").s().p("AgsBNQgRgOgMgaQgMgbgGgWIgIgeQAhgxAvAKQAoAGAkAUQAjAUAGANQAGAUgQAbQgPAYgPACQgQgBgOgMIgOgPIgCgCIgJARIAAABIgDAUQgGARgPAHIgFAAQgJAAgJgGg");
	this.shape_420.setTransform(49.7,-20.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgsBTQgcgagPgwQgOgugBgIIAAgBIAAAAQAWgyA9AHQAoAHAlAVQAlAWAHAQQAGAbgQAaQgNAYgTAFQgPgBgNgNIgSgUIgJAgQgGAZgQAIIgHABQgKAAgKgIg");
	this.shape_421.setTransform(49.6,-20.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AAFgIQAGADgMANIgFABQAGgDAFgOg");
	this.shape_422.setTransform(45,33.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AhSACQACABAwgBQAtAABGgKQACACgsAGQg3AHhBABQADAAgGgGg");
	this.shape_423.setTransform(37.9,35.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgRAdQgHgIgBgMIABgGQgHAAgFgDQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAEACAIgBIAHgBIgEADQgGANAKALQAEAIAMgFQAXgRAHgbQABgEgDgDQgTgJgUADQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAFgBAOAAQAQAAAJAIQAEAEgBAIQgHAdgaATQgFADgDAAQgHAAgHgHg");
	this.shape_424.setTransform(61.9,18.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#D8A166").s().p("AgcARQAIAAAJgDQAagMgIgiQANABAHAGQAGAJgLARQgKAUgNAKQgFACgEAAQgNAAgFgQg");
	this.shape_425.setTransform(62.6,18.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#E5B173").s().p("AgRAYQgJgMAHgMQgFABgKgBIAaggIAQAAQAQAAAJAHQAHAJgLARQgLAUgOAKQgEACgDAAQgIAAgGgJg");
	this.shape_426.setTransform(61.9,18.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAKgJQgBgBgJADQgJACgBAP");
	this.shape_427.setTransform(62.6,20.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#C17E1E").s().p("AAgAnQhmgChvglIAJgmQAaAQBbAVQBYASCVgVIgDAnQghAEhFAAIgtAAg");
	this.shape_428.setTransform(40.9,7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#D39518").s().p("ABTBOQhDgEhLgMQhMgMgtgYQAAgTAPhXQBSAdBRAIQAMASASARQBDAzBWgGQgHAYgJAUIgFAAIhNgDg");
	this.shape_429.setTransform(39.3,15.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#D39518").s().p("Ag5AnQANg2AVg5QAcAMAbAIQgCBBAdA7QhcgSgYgPg");
	this.shape_430.setTransform(29.6,-1.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#E5A61A").s().p("ABMBOQhDgEhLgMQhNgMgsgYQAAgTAPhXQBtAmBiADQBlADA0gJQgGBJgYA1IgFAAIhNgDg");
	this.shape_431.setTransform(40,15.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#E5A61A").s().p("AgUBQQhXgRgngPQAshdBTgdIABAAQABgCAWgHQAZgHAhAJQAxASAbBCQACAGAGBCQguAMgwAAQglAAgkgHg");
	this.shape_432.setTransform(43.8,-18);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#C17E1E").s().p("AidgEIAPgiQApAQBbATQBYASBNgZIAAAHIACAQIAAAKQgdAOhQACIgHAAQhLAAh7grg");
	this.shape_433.setTransform(43.1,-8.7);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#E5A61A").s().p("AhCBDQhXgSgXgOQAMg2AWg5QB+AwBKAAQBMABApgTQACAnAAApIAAAjQhKAIg7AAQhAAAgugKg");
	this.shape_434.setTransform(41.4,-1.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("ABRD/QhEgEhPgMQhQgMgvgaIgBgBIAAgCQgBglAPhgQAPhdAuhdQAuhdBYgeQADgDAZgHQAZgHAjAKQAyASAdBHIAAAAQABAFAHBDIAAAAIACAUIAAAEIABAWQAEA1gCA/IAAADIgCAvIgBACQgGBOgaA2IAAACIgCAAIgEAAIhJgDg");
	this.shape_435.setTransform(40.1,-1.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#66471F").s().p("AgQCtQgGgLgDhDQAAg0ASgiIABgCIgDgCQgEABgkghQgjgigOhTIAAgCIgBAAQgKgGgEgKIAAgCQABgEAJgFQAIAEA5AQQgHBEAtAsQAsAqBGgDQgYAHgfAIQgeAJgRAPQgUAagEAuQgDAuAeASIgfAAg");
	this.shape_436.setTransform(31.1,34.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#77582A").s().p("AhpCtQgGgLgDhCQgBg1ATgiIABgCIgDgCQgEABgkghQgkgigOhTIAAgBIgBgBQgJgFgEgLIAAgBQABgFAJgEQAMAGBfAWQBcAXCBABQAFALAdA/QAdA+AEAsIgBAKQgFAqg+AgQg6AdihAAIgVAAg");
	this.shape_437.setTransform(40,34.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AhoCzIgEgBIgBgDIgGgfQgFgZgBggQACgwASgeQgMgEgdgdQgegggThWQgKgFgFgQIAAgBQABgJAOgFIAAAAIABAAQAGAEBfAXQBdAYCFACIADAAIACADQAHALAeBCQAdBBgBAvQgBAug/AjQg4AfiXAAIgoAAg");
	this.shape_438.setTransform(39.8,34.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#F4E8D4").s().p("AgKAxQgKgrAIgZQAJgZAEgGIAQADQgKAUABAbQABAkADAPIgWgCg");
	this.shape_439.setTransform(28.1,43.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#F4E8D4").s().p("Ag0AqIgBgBQgJgOAMhMQAbACAgAHQAjAHAOASIgDAGQgQAhgRAPIgBAAIgEADQgQAIgQAAQgSAAgTgIg");
	this.shape_440.setTransform(19.2,55);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#F4E8D4").s().p("AgGAFIgIgDIgBgCIAAAAQABgGAFgIQAWAIADAGQgBAIgFAHQgJgIgHgCg");
	this.shape_441.setTransform(24.6,49.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#42392B").s().p("AgIBAQgggIgagCQAEgPAHgQQAthZAjgVQAYAEAHACIAKATIABACQgNAJgGA2QAAAUAIAbIAAAAIgBAAQgFgJgZgGIgBAAIgBABQgHAGgBAQQAAADADACIAJADQAKADAJAIIAAAAIgEALQgUgQgegIg");
	this.shape_442.setTransform(21,43.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#3A260C").s().p("Ag4BRIAAgCIgBgGIgBgJIAAgDIABgKIABgLIABgBQAIglAVgiQAVgjAQgXIAVgYIAFgCQAJgBANABQgjAagrBUQgIAQgEAQIgBACIAAABQgIAhAAAXQABAWACALQgPgOgEgXg");
	this.shape_443.setTransform(16.9,46.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#66471F").s().p("AghDTIgCgCIgCgHQAEgbAmgvQAoguAdgbIADgDIgEgCQgVgHgDgKIAAgCQADgJACgBIACgCIgCgCQhshggchTQgchUADgXIAiATQACA+AoAuQAnAtArArQAsArANA2QABAYghAiQghAjgUAoQgRBAA2AeQhHgMgWgvg");
	this.shape_444.setTransform(32.8,44.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#77582A").s().p("AgpEBQghgUgNgZIgCgDQgCgDAAgEQAEgbAoguQAogvAbgbIADgDIgEgBQgTgIgDgKIAAgCQACgJABgBIACgCIgCgCQhshfgchUQgchUADgXIBDAkIByA/IA/AiQAIAdAbA2QAhBAALAsIAAAEQgHAtgxBKQgyBKgNAPQgRADgQAAQgdAAgWgNg");
	this.shape_445.setTransform(38.2,44.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AhCB8IAAAAIgGgEIgCgBIgEgDIgDgEIgCgCQgQgTABgiQAEg+Ang5QAng5AJgHIAAAAIABAAIAEgCIABAAIABAAIACgBIADAAIACAAIACAAIAVABIADABQAZAEADACIABAAIABABIAMAWIANADIALACIgCADQgLATABAdQACAuADAHIABADIgNAAIgQgBIAAACIAAAAQgJAOgJAdQgKAdgQAVIgCADIgBABIgCACIgBAAIgBACIgBABIgCABIgBABIgCABIgCACQgQAIgTAAQgRAAgTgGg");
	this.shape_446.setTransform(20.7,47.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("Ag0EFQgbgSgMgaIgCgCQgCgEAAgFQAEggApgsQAqgtAVgcQgSgIgCgMIgBgDQABgIAEgEQhyhkgbhXQgahXAEgRIAAgGID/CKIAAACQAGAcAcA3IAfA8QAPAdgCAVQgPBKgvBCQgwBDgKAJIgBABIgBAAIgYABQgzAAgWgPg");
	this.shape_447.setTransform(38.2,44.5);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#D8A166").s().p("AgVgZIAAgBIgBgBIgEgBQATAFAHARIATAeQADABAEADIgBABQgRAAgdg2g");
	this.shape_448.setTransform(55.8,24.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#D8A166").s().p("AgLgNIABAAQAFgEALALQAHANgBAGIgEAAIgBAAIAAABIgFABQAGgVgTgHg");
	this.shape_449.setTransform(60.9,25.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#D8A166").s().p("AgFAOQAGgOgFgQQAFAIAFATQgGAEgFACIAAgDg");
	this.shape_450.setTransform(63.4,24.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#D8A166").s().p("AgCAdQAQghgcgZIAFACIACACQAPAHAHAdQgGAJgKAKIgBgBg");
	this.shape_451.setTransform(64.8,22.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#D8A166").s().p("AgQgUIAEgCQALAAAMAOQAIAKgDANQgCAFgEADQAFgbgfgQg");
	this.shape_452.setTransform(66.3,20.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#E5B173").s().p("ABFBuIAAgBIgBAAQgKgChJghQhKghgjgpQgYgngOgsQgOgtgDgNQALgFAmgKQAmgKAuABIAAAhIABAfQACAIAcAZQARARAbAbIAdAcQAfAlAYADIABAAQArgFANADQAFAJAEAOQgGADgGAIIAAAFQgIgBgEADQgKAKACANQgEgBgFADQgIAFgBAMQgLACAAAQQACAGAEACQAOADAEgEQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAABAAAAQgGACgHgBQgCgCgBgDQACgNAGAAQAFgEANAMQAHAOgBAGIgFABIAAAAIAAAAQgJAEgYAEIgBAAQgRAAgfg4g");
	this.shape_453.setTransform(46.6,10.9);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#E5B173").s().p("AAAAAQgIgKgLACQACgIAFgDQAHgDACACQADgJAUAuQgHAEgHACQABgIgHgPg");
	this.shape_454.setTransform(62.1,24.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#3A260C").s().p("AgpATQhagVgQgKIAEgRQAVAJAnAOQAoAMArAGQAqAFApgGQAqgFAWgGIABAMIgBAHQgxALgvAAQgxAAgrgLg");
	this.shape_455.setTransform(40.9,78.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#42392B").s().p("AhPATQAYg6ASgUQARAfAbAJQAeAJAUAAIAOACIADACIAGAAQgeAjgFAeQhSgUgqgUg");
	this.shape_456.setTransform(34.7,73.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#F4E8D4").s().p("AhDApIgLgBQABglAqglIAKgGQAzgKAbAZQAYAZACAdQgRAIgpAFQgTACgTAAQgYAAgagDg");
	this.shape_457.setTransform(47.7,75.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#E5B173").s().p("AgVgIQgBgMAHgIQAEgDAJAFIACABQAQAIAGAcQgGAKgMAJQgOgpgLADg");
	this.shape_458.setTransform(64.1,22.6);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#E5B173").s().p("AgPgIIgEgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAFgHAGgCQAJAAAPAOQAHALgDAMQgCAHgIAEIgBAAIAAABQgJgagPgHg");
	this.shape_459.setTransform(65.9,20.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AAwBxQgRgEhGghQhIgggigqQgbgsgPgvIgOg1IgBgCIACgBQADgCAqgNQAqgMA0ACIADAAIAAADIAAAlIABAcQADAHAaAXIAsAsIAdAcQAdAjAWAEQA5gIAEAHQAHANAEANQANABAPAPQAHAKAAALIgBAJQgDAJgKAFQgCAIgYAVIgCABQgLAIgPABQgKAEgXAEIgCAAQgUAAggg6g");
	this.shape_460.setTransform(48.2,10.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AhGBAQhPgZgCgGIgCgBIAAgCQAHgiAUgjQAUgiAGgDIADAAIABACQAPAeAcAJQAdAIAVABQAOAAACAEQADABANgIIAKgGIAAgBIABAAQA4gLAdAbQAYAYACAdQAEAdgCAEIgBACIgCAAQhAAJgzAAQg9AAgsgNg");
	this.shape_461.setTransform(40.9,74.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AAUBlQgSgBgtgOQgvgNgXgaIAAgBIAAgBQgCgIApg3QAog6BpgYQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQhhAWgpA1QgoAygBAPQAUAWAsAOQArANAUABQAQAAgBgBIAAgBQAIgzAdgiQAeggAGgDIAGgEQgFACgeAjQgfAlgHAyIAAAAIgCAEQgDAEgLAAIgFAAg");
	this.shape_462.setTransform(30.8,-10.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#D39518").s().p("AA7BQQgTgBgsgNQgugOgVgYQgBgDAUghQAUgkAwgkQgiAuASAzQARA0A3ALIgIABIgFgBg");
	this.shape_463.setTransform(26.8,-8.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#E5A61A").s().p("AgsBTQgugNgVgYQgCgHAog3QAng5BpgYIApBBQgEABgfAkQggAlgHAzQAGAEgZABQgTgBgsgOg");
	this.shape_464.setTransform(30.8,-10.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#D8A166").s().p("AAkCCIgCgBIgBAAQgFABgSgGQgOgFgCg8IAAgFIAAgBIgBgBQgIgGgzg5Qgyg7gMg6IgBgIQAYBDA1A4QA0A3AGAEIgBAZQAAAXAHAMQASAOAHgEQAZALAUgHQATgHABgCQAUgGABgbQAGAGAAAGIAAABQAAAagXAFIgBAAIgBABQgCACgVAJQgJADgJAAQgOAAgNgHg");
	this.shape_465.setTransform(31.6,22);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#E5B173").s().p("AAkDEIgCAAIAAAAQgGAAgSgFQgOgFgCg9IAAgEIAAgCIgBAAQgIgGgzg8Qgyg5gMg6IgBgOQADhBAMgcQALgcAGgGQAIgBAiAHQAiAGAkAVIgOAdQgJAUgDAHIAAADQAAALALAgIATA6IAMAiQAKAtAUAOIAAABIAAAAQAqAPAKAIIAAABIgDAaIAAACIACABQAIACAJASIAAABQAAAZgXAGIgBAAIgBABQgCACgVAIQgKAEgJAAQgNAAgNgIg");
	this.shape_466.setTransform(31.6,15.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AAhDJQgIABgSgGQgQgGgDhAIAAgFQgNgLgxg9Qgxg6gKg0IgBgOQABg7AOgkQAPgjACgCIABgBIACAAQADgBAlAGQAlAFArAZIACACIgCACIgRAgQgHATgCAGIgBACQABAJAJAcIAUA6IAMAmQAKArASANQA1ATABAIIAAACQAAAOgCALQANAFAGATIAAABQgBAegbAGQgFAFgXAIQgIACgIAAQgPAAgPgIg");
	this.shape_467.setTransform(31.5,15.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AAOALQgJgLgOAEQgCgFAIgHQADgCgUgJQABgDAOADQALACAPAnIgHgLg");
	this.shape_468.setTransform(37.2,-36.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#D8A166").s().p("AAKAuQgagKgQgRQgJgbATgZQAKgNAIAAQAQAIAQAcIAIAQIgRApIgJgBg");
	this.shape_469.setTransform(36.7,-37.6);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgjAXQgLgeAVgcQAMgQALABQARAGAMAXQAMAWABAFIgQgYQgOgWgNgEQgHgBgKANQgUAaAKAaQAIAMAVAJIAWAKQgzgHgFgVg");
	this.shape_470.setTransform(36.5,-37.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AAKAYIgFgDQgFgKgNAEIgCACIgBgDIgFgOQgDgMAFgJQACgFAOAFQAXALAEARQgCAOgGADIgDABIgDgBgAAJASIADACIABAAQACABADgPQgCgLgVgLQgIgEgCADQgCACAAADQAAAMAFAKIAHgBQAKAAAEAJg");
	this.shape_471.setTransform(68.9,-61.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#3F2401").s().p("AALAWQgEgMgVACIgEgMQgEgMAFgIQAHgFAOALQAQALABAJQgDAQgFAAIgCAAg");
	this.shape_472.setTransform(68.9,-61.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#663B02").s().p("AhSDgQABgHAKgHQAEgEABgGIABACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgFAPgKAIIAAABIAAABIgBAAIgCgGgAhNCjQgCgDAAgDIAAgBQADgHAMgHIAFgDQAGANAAANQgBAHgEAEQgHAGgCADQgEgMgGgKgAg6BqQgHgJgBgHIABgCQABgEAGgDIAOgFQAEAGAEAHIAAAFQgBAHgPAIIgDADIgDgGgAkOAaQAAgGACgFIAFAGIACABIgCACIgHAHIAAgFgAD3gBIgIABIAGgFQAGgDAGgUIgBgGIADAAQAGgBAGAFQADAGgKANQgEAIgHADIgGgBgAkFgfQAEgTAOgKQgGALACAOIAAABIgBABIgMAKQgBgEAAgEgAD5gsIgCgBIABgCQACgCACgOQABgNgRgOIgCgCIABgCQADgBgCgMQgEgLgWgIIgCgBIAAgBQADgEgJgPQgJgKgUABIgCAAIgBgCQACgGgRgMQgPgHgYAKIgCABIgBgCQAAgDgMgHQgLgJgZAIIgBAAIgBgBQgRgIgSgCQgGABgLAFQgSAMgPgCIgFgCQgMgPgdAjIgCAEIgCgDQAAgCgMgBQgMgDgeAdIgCABIgBAAQgCgCgOgBQgPgBgOAHQgMAIgCATIAAABIgCABIgQAIQgPAIgOAPQADgfAZgQQAagRAEAAIABgBIABgBQABgTANgIQAOgIAOACIAQACIACAAIABgBQAegeANAEQALABAAADIACACIACgCQAeglALAPIAFACQANADAUgMQALgFAGgBQATABARAJIABAAIABAAQAZgHALAIQALAIAAACIACACIACgBQAXgKAPAIQARANgBAFIABABIACAAQAUgBAJAKQAIAQgDADIAAACIACABQAXAIAEALQABALgDACIgBABIACACQASAOgCAOQgBAOgCACIgBABIABACQAJAHgBAJQgGAUgGADIgCACQgCgEgEgEg");
	this.shape_473.setTransform(47.4,-61.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#563301").s().p("AiTEGQgKgIgCgMIgCgPIAAgDIgEABQgTAFgKgHQgIgKAAgMIAAgOIABgEIgEAAQgSACgIgKQgKgWAEgIIABgCIgDgBQgQgGgFgMQAAgeAIgHIABgBIgBgCQgTgdAEgRQAFgSADgBIABgCIgBgBQgMgLABgLQABgPAJgKQAIgKABgBIACgCIgCgCQgLgJABgLQACgOALgKIAMgLIACAAIAAgCQgBgiAbgSQAagRAFAAIABgBIABgCQABgSANgIQAOgIAOABIAQADIACAAIABgBQAegeANAEQALABAAACIACADIACgDQAegkALAPIAFACQANACAUgLQALgFAGgCQATACARAIIABABIABgBQAZgGALAIQALAIAAACIACACIACgBQAXgKAPAHQARANgBAFIABACIACAAQAUgBAJAKQAIAQgDADIAAACIACABQAXAIAEALQABALgDACIgBABIACACQASAOgCAOQgBAOgCACIgBABIABACQAJAHgBAJQgGAUgGACIgFAFIAHAAQAGgBAGAFQADAGgKANQgIAMgMACQgagCgDgGIgCgBIgBABQgSAGgNgMQgHgEgFgBQgGAAgIAEQgLAIgUABQgMgCgEgFQgIgKgPAQQgOALgMgDQgMgEgCgCIgDgCIgBAEQgDALgJAEQgcAFgFgGIgDgBIgBAEQgGAVgfAKQgGACgCAFIAAACQAAAGAHAKQAGAHAEAJIAAAEQgBAIgPAIQgLAFgDAIIgBACQAAADACADQALAQABASQgBAIgEAEQgLAIAAAGQAAAEAEAHQAAABAAAAQAAAAABABQAAAAAAABQAAABAAAAQgFAOgKAJIAAAAIAAABQgHAcgQATQgQASgDACQgIADgHAAQgGAAgFgDg");
	this.shape_474.setTransform(47.4,-58.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AiXEQQgSgTABgSQgUAFgLgJQgNgQACgSIABgEQgTAAgJgLQgKgOACgNIAAgGQgRgGgFgPQgCgGABgHQADgUAGgHQgSgbADgSQACgTAFgGQgLgLAAgNIAAgBQAHgcANgJQgLgLAAgMQALgfAQgIIAAgIQAEgeAYgRQAXgQAJgDQACgUAOgJQAggNAQAIQAagcAUAAQAKAAADADQAegkAQAPIAFACQAKABATgKQALgGAIgBQAXADAOAHQAYgGANAGQAMAHADAGQAZgKAQAIQARAKABAJQAWAAAKALQAJAOgCAIQAYAIAEAOQACAEgBADQAAAFgCADQATARgCAQIgDAPQAIAIAAALIAAABQgCAOgIAHQAHABAEAGQACADgBAEQAAAHgIAMQgKANgOADQgZgBgHgIQgWAGgNgMQgGgFgDAAQgFAAgHAEQgMAIgWABQgPgCgFgGQgEgHgLAMQgdATgPgNQgEAKgKAFQgXAHgLgGQgFAOgOAIQgOAIgIADQgEABgBADIAAAAQABAGAGAIIAKARIABAHQgDAMgPAIQgLAFgCAFIAAABIABACQAMASAAAVQAAAKgGAGIgMAGQABAFAFAIQACADgBAEQgGATgJAHQgIAfgRATQgQATgDABIAAABIgBAAQgJADgIAAQgIAAgGgDg");
	this.shape_475.setTransform(47.6,-58.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AhDgEIgBAJQgHgLADgDIABgDIADABQArATAlgDQAngDAOgEIgEgEIANAGIgEAAQgCADgoAJQgJABgKAAQggAAgsgRg");
	this.shape_476.setTransform(63.4,-33);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgNALQAJgEANgSIAFADQgTAUgHAAIgBgBg");
	this.shape_477.setTransform(63.8,-46.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AALAfQAZgaAEgUQgDgQgggMQgfgLgWgEQAGgCAcAFQAUAGAVAJQAUAKABAOQgHAcgiAgQgTAQgEAAQAEgDAXgag");
	this.shape_478.setTransform(71.7,-41.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#E5B173").s().p("Agsg9QAGAAAmAMQAoANAFAVQgEAVgZAbIgbAdg");
	this.shape_479.setTransform(71.4,-41.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgEAAQAAgGAEgBQAFAAAAAHQAAAIgFABQgEgBAAgIg");
	this.shape_480.setTransform(71.1,-51);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgXgFQAEgoAVgBQAWAEAAAnQgFAtgUAFQgVgHgBgtg");
	this.shape_481.setTransform(69.7,-53);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgagFQAEgtAYgBQAaAEgBAsQgEAwgZAHQgZgJABgwgAgVgEQAAAsAUAHQASgFAFgtQAAgngUgEQgTACgEAog");
	this.shape_482.setTransform(69.7,-53);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgFAAQABgIAEAAQAGABAAAHQgBAIgFABQgFgBAAgIg");
	this.shape_483.setTransform(65,-50.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgCAsQgUgRgFgfQgDgWAMgNQAHgHAKgBQAXABAGAnQABAHAAAFQgCAYgLANQgFAGgEAAQgFAAgEgEg");
	this.shape_484.setTransform(63.2,-52);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgFAwQgUgSgFghQgCgYAMgPQAIgJAKgBQAaAAAGAtQADAhgPAUQgGAGgGABIgBAAQgFAAgFgFgAgQgnQgKANACAWQAEAfASARQADAEAEAAQAFgBAEgFQAKgNABgYIAAgMQgFgngVgBQgIABgHAHg");
	this.shape_485.setTransform(63.2,-52.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#3F2401").s().p("AgcAXQAFgbAPgMQAOgLADABQADACAIALIAIAOQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAQgeALgGANIgFABQgFAAgGgEg");
	this.shape_486.setTransform(58.7,-59.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgZAgIgJgEIgBgBIAAgCQAEgdARgNQAQgOAHgBQABgFAPAUQAIANADAFQAAAEgCABQgEADgEgBQgcAKgHANQgBADgFAAIgKgCg");
	this.shape_487.setTransform(58.5,-59.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#D8A166").s().p("AAIDaQgzgfgmh/QgVg+gCg0QAGhLAigwQAjgwAjgTQgHBLgHBjQgIBgAUBVQAWBUBPAhIgiARIgDAAQgOAAgugbg");
	this.shape_488.setTransform(44,-38.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#E5B173").s().p("AhZDoQg1gggmh/QgVhAgCgxQAIhaAtgyQAsgyAogMQA0gQBJAAQBKgBAeAuQAEAMASBXQASBYgBBBQAIAKgjA8QgiA9inBYIgDABQgOAAgugbg");
	this.shape_489.setTransform(53.9,-40.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AhYDvQg5gegwiHQgliQA1hRQA1hRA4gPQA1gQBLAAQBMAAAgAwIgDABIAOA6QALAyALA8QAKA7gDAlQAIAEgiA/QgiA/isBTIgBABIgBAAIgDAAQgLAAgwgZg");
	this.shape_490.setTransform(54,-40.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#C17E1E").s().p("AgsBMQgRgOgMgaQgMgagGgVIgIgdQAhgwAvAKQAoAGAkATQAjATAGANQAGAUgQAZQgPAYgPACQgQgBgOgMIgOgOIgCgCIgJARIAAAAIgDAUQgGARgPAGIgGAAQgJAAgIgFg");
	this.shape_491.setTransform(49.7,-18.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgsBRQgcgagPguQgOgtgBgIIAAgBIAAAAQAWgxA9AHQAoAHAlAVQAlAUAHARQAGAZgQAaQgNAXgTAFQgPgBgNgMQgNgNgFgHIgJAfQgGAZgQAIIgGAAQgLAAgKgHg");
	this.shape_492.setTransform(49.6,-17.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AAFgHQAGACgMANIgFAAQAGgCAFgNg");
	this.shape_493.setTransform(45,35.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AhSACQACABAwgBQAtAABGgJQACABgsAGQg3AHhBABQADAAgGgGg");
	this.shape_494.setTransform(37.9,36.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgRAdQgHgJgBgLIABgGQgHAAgFgDQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAEACAIgBIAHgBIgEADQgGAMAKAMQAEAHAMgEQAXgRAHgaQABgFgDgDQgTgIgUADQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAFgBAOAAQAQAAAJAIQAEADgBAJQgHAbgaATQgFADgDAAQgHAAgHgGg");
	this.shape_495.setTransform(61.9,19.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#D8A166").s().p("AgcAQQAIABAJgDQAagMgIghQANABAHAGQAGAIgLARQgKAUgNAJIgJACQgNAAgFgQg");
	this.shape_496.setTransform(62.6,19.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#E5B173").s().p("AgRAYQgJgMAHgMQgFABgKgBIAagfIAQAAQAQAAAJAHQAHAIgLARQgLATgOAKQgEACgDAAQgIAAgGgIg");
	this.shape_497.setTransform(61.9,19.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#C17E1E").s().p("AAgAmQhmgChvgkIAJglQAaAQBbAUQBYASCVgVIgDAmQghAEhFAAIgtAAg");
	this.shape_498.setTransform(40.9,8.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#D39518").s().p("ABTBMQhDgEhLgMQhMgLgtgYQAAgSAPhVQBSAcBRAIQAMASASAQQBDAyBWgGQgHAYgJATIgFAAIhNgDg");
	this.shape_499.setTransform(39.3,17.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#D39518").s().p("Ag5AmQANg0AVg3IA3ATQgCA/AdA6QhcgSgYgPg");
	this.shape_500.setTransform(29.6,0.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#E5A61A").s().p("ABMBMQhDgEhLgMQhNgLgsgYQAAgSAPhVQBtAlBiADQBlADA0gJQgGBHgYA0IgFAAIhNgDg");
	this.shape_501.setTransform(40,17.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#E5A61A").s().p("AgUBOQhXgQgngPQAshaBTgcIABgBQABgCAWgHQAZgHAhAKQAxARAbBAQACAGAGBBQgtALgwAAQglAAglgHg");
	this.shape_502.setTransform(43.8,-15.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#C17E1E").s().p("AidgEIAPghQApAQBbASQBYARBNgYIAAAHIACAPIAAALQgdANhQACIgHAAQhLAAh7gqg");
	this.shape_503.setTransform(43.1,-6.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#E5A61A").s().p("AhCBBQhXgRgXgOQAMg1AWg3QB+AvBKAAQBMAAApgSQACAmAAAoIAAAiQhKAIg7AAQhAAAgugKg");
	this.shape_504.setTransform(41.4,1.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("ABRD4QhEgDhPgMQhQgLgvgaIgBgBIAAgCQgBgkAPhdQAPhbAuhaQAuhbBYgeQADgCAZgHQAZgHAjAKQAyASAdBEIAAABQABAEAHBCIAAgBIACAUIAAAEIABAWQAEAzgCA+IAAADIgCAtIgBACQgGBMgaA1IAAABIgCAAIgEAAIhJgDg");
	this.shape_505.setTransform(40.1,0.7);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#66471F").s().p("AgQCoQgGgKgDhBQAAgzASgiIABgCIgDgBQgEABgkggQgjgigOhQIAAgBIgBgBQgKgFgEgLIAAgBQABgFAJgEQAIAEA5APQgHBCAtArQAsAqBGgEQgYAHgfAIQgeAIgRAPQgUAZgEAtQgDAtAeASIgfgBg");
	this.shape_506.setTransform(31.1,36.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#77582A").s().p("AhpCpQgGgLgDhBQgBgzATgiIABgBIgDgCQgEABgkggQgkgigOhQIAAgBIgBgBQgJgFgEgLIAAgBQABgFAJgEQAMAGBfAWQBcAWCBABQAFALAdA9QAdA8AEArIgBAKQgFApg+AfQg6AdihAAIgVAAg");
	this.shape_507.setTransform(40,36.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AhoCuIgEgBIgBgDIgGgeQgFgZgBgfQACguASgeQgMgDgdgdQgegfgThUQgKgFgFgPIAAgBQABgIAOgFIAAgBIABABQAGADBfAXQBdAXCFACIADAAIACADQAHALAeBAQAdA/gBAuQgBAtg/AiQg4AfiWAAIgpgBg");
	this.shape_508.setTransform(39.8,36.2);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#F4E8D4").s().p("AgKAwQgKgrAIgXQAJgZAEgGIAQADQgKAUABAaQABAiADAQIgWgCg");
	this.shape_509.setTransform(28.1,44.3);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#F4E8D4").s().p("Ag0ApIgBgBQgJgNAMhLQAbACAgAHQAjAHAOASIgDAGQgQAggRAOIgBAAIgEADQgQAIgQAAQgSAAgTgIg");
	this.shape_510.setTransform(19.2,55.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#F4E8D4").s().p("AgGAFIgIgDIgBgCIAAAAQABgFAFgIQAWAHADAGQgBAIgFAGQgJgHgHgCg");
	this.shape_511.setTransform(24.6,50.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#42392B").s().p("AgIA+QgggHgagCQAEgPAHgQQAthWAjgVQAYAEAHADIAKASIABACQgNAJgGA0QAAATAIAbIAAAAIgBAAQgFgJgZgGIgBAAIgBAAQgHAHgBAPQAAADADACIAJAEQAKACAJAIIAAAAIgEALQgUgQgegIg");
	this.shape_512.setTransform(21,45);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#3A260C").s().p("Ag4BPIAAgCIgBgGIgBgJIAAgCIABgLIABgKIABgBQAIgkAVghQAVgiAQgWIAVgYIAFgCQAJgBANABQgjAagrBRQgIAPgEAQIgBACIAAABQgIAgAAAXQABAVACALQgPgOgEgWg");
	this.shape_513.setTransform(16.9,47.7);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#66471F").s().p("AghDOIgCgCIgCgHQAEgbAmgtQAogtAdgaIADgDIgEgCQgVgHgDgKIAAgCQADgJACgBIACgBIgCgCQhshdgchSQgchRADgXIAiASQACA9AoAsQAnAtArAqQAsAqANA0QABAXghAiQghAigUAnQgRA+A2AdQhHgMgWgtg");
	this.shape_514.setTransform(32.8,45.8);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#77582A").s().p("AgpD6QghgTgNgZIgCgCQgCgDAAgEQAEgbAogtQAogtAbgaIADgDIgEgCQgTgHgDgKIAAgCQACgIABgBIACgCIgCgCQhshdgchSQgchRADgXIBDAjIByA9IA/AhQAIAdAbA1QAhA9ALAsIAAAEQgHArgxBIQgyBIgNAPQgRADgQAAQgdAAgWgNg");
	this.shape_515.setTransform(38.2,45.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AhCB4IAAABIgGgEIgCgCIgEgDIgDgDIgCgCQgQgTABghQAEg8Ang4QAng3AJgHIAAAAIABAAIAEgCIABAAIABAAIACgBIADAAIACAAIACAAIAVABIADABQAZAEADACIABAAIABABIAMAVIANADIALACIgCADQgLASABAdQACAsADAIIABACIgNAAIgQgBIAAACIAAAAQgJAOgJAcQgKAcgQAVIgCADIgBAAIgCACIgBABIgBACIgBAAIgCACIgBABIgCABIgCABQgQAJgTAAQgRAAgTgHg");
	this.shape_516.setTransform(20.7,48.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("Ag0D+QgbgSgMgZIgCgCQgCgEAAgFQAEgfApgrQAqgrAVgbQgSgIgCgMIgBgDQABgIAEgEQhyhhgbhVQgahUAEgRIAAgGID/CHIAAABQAGAbAcA2IAfA6QAPAdgCAUQgPBIgvBBQgwBBgKAJIgBABIgBAAIgYABQgzAAgWgPg");
	this.shape_517.setTransform(38.2,45.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#D8A166").s().p("AgVgYIAAgBIgBgBIgEgBQATAFAHAQIATAdQADABAEAEIgBAAQgRAAgdg0g");
	this.shape_518.setTransform(55.8,26.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#D8A166").s().p("AgLgMIABgBQAFgEALAMQAHAMgBAGIgEAAIgBAAIgFACQAGgUgTgHg");
	this.shape_519.setTransform(60.9,26.8);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#D8A166").s().p("AgCAcQAQgggcgYIAFACIACACQAPAGAHAcQgGAJgKAKIgBgBg");
	this.shape_520.setTransform(64.8,24.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#D8A166").s().p("AgQgUIAEgCQALABAMANQAIAKgDAMQgCAFgEAEQAFgbgfgQg");
	this.shape_521.setTransform(66.3,21.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#E5B173").s().p("ABFBsIAAgBIgBgBQgKgChJggQhKgggjgoQgYgmgOgrQgOgrgDgNQALgFAmgJQAmgLAuACIAAAgIABAeQACAIAcAYQARAQAbAbIAdAbQAfAkAYADIABAAQArgFANADQAFAJAEAOQgGACgGAIIAAAFQgIgBgEADQgKAKACAMQgEAAgFADQgIAEgBAMQgLACAAAQQACAFAEACQAOADAEgEQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgGADgHgCQgCgBgBgDQACgNAGAAQAFgEANALQAHAOgBAGIgFABIAAAAIAAAAQgJAEgYAEIgBAAQgRAAgfg2g");
	this.shape_522.setTransform(46.6,12.7);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#E5B173").s().p("AAAAAQgIgKgLACQACgHAFgDQAHgDACABQADgIAUAtQgHADgHACQABgIgHgOg");
	this.shape_523.setTransform(62.1,25.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#3A260C").s().p("AgpASQhagTgQgLIAEgQQAVAJAnAOQAoALArAGQAqAEApgFQAqgFAWgGIABAMIgBAHQgxAKgvAAQgwAAgsgLg");
	this.shape_524.setTransform(40.9,78.7);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#42392B").s().p("AhPASQAYg4ASgTQARAeAbAIQAeAJAUAAIAOABIADADIAGAAQgeAigFAeQhSgTgqgVg");
	this.shape_525.setTransform(34.7,73.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#F4E8D4").s().p("AhDAoIgLgBQABgkAqgkIAKgGQAzgKAbAYQAYAZACAcQgRAIgpAFQgTACgTAAQgYAAgagDg");
	this.shape_526.setTransform(47.7,75.4);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#E5B173").s().p("AgVgIQgBgLAHgIQAEgDAJAEIACACQAQAHAGAcQgGAJgMAJQgOgogLADg");
	this.shape_527.setTransform(64.1,24.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#E5B173").s().p("AgPgIIgEgDQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAFgGAGgDQAJABAPANQAHALgDALQgCAIgIADIgBABIAAABQgJgZgPgIg");
	this.shape_528.setTransform(65.9,22.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AAwBuQgRgEhGggQhIgfgigpQgbgrgPguIgOgzIgBgCIACgBQADgCAqgNQAqgMA0ACIADAAIAAADIAAAlQAAAUABAHQADAHAaAWQASAQAaAbIAdAbQAdAiAWAEQA5gIAEAHQAHAMAEAOQANABAPAOQAHAKAAALIgBAIQgDAJgKAFQgCAIgYAUIgCABQgLAIgPABQgKAEgXAEIgCAAQgUAAggg5g");
	this.shape_529.setTransform(48.2,12.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AhGA+QhPgYgCgGIgCgBIAAgCQAHghAUgiQAUghAGgDIADAAIABACQAPAdAcAJQAdAIAVAAQAOAAACAEQADABANgHIAKgGIAAgBIABAAQA4gLAdAbQAYAXACAcQAEAcgCAEIgBACIgCAAQhAAJg0AAQg9AAgrgNg");
	this.shape_530.setTransform(40.9,74.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AAPAKQgKgKgNAEQgDgFAIgHQADgDgVgIQAAgDAOACQAMACARAnIgHgLg");
	this.shape_531.setTransform(13.5,-36.4);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AAOAeQAZgcACgVQgDgRgigKQgegKgXgDQAGgCAcADQAUAFAWAJQAUAJACAOQgGAeggAiQgRASgFAAIAZgfg");
	this.shape_532.setTransform(47.5,-43.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#E5B173").s().p("Agtg+QAFAAAoALQAoAKAGAVQgCAXgZAcQgWAdgDACg");
	this.shape_533.setTransform(47.3,-43.7);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgFAAQABgHAEgBQAEABABAHQAAAIgFABQgDAAgCgJg");
	this.shape_534.setTransform(46.6,-53.2);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgagEQABguAZgDQAaADABAuQgBAygaAHQgZgHgBgygAgVgEQADAuASAHQATgHADguQgCgogUgDQgTADgCAog");
	this.shape_535.setTransform(45.1,-55.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#D8A166").s().p("AAPDhQg0gdgtiAQgZhCgEgyQAChOAfgzQAhgyAkgWQgFBOgDBlQgCBkAZBVQAaBVBQAeIggATIgEABQgPAAgugZg");
	this.shape_536.setTransform(20.7,-39.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgHAQQAMgQgCgJQgCgKgBAAQAFgBADATQgCAIgLANg");
	this.shape_537.setTransform(8.1,35.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgGAKQALgOACgHQAAAEgGANQgBAEgCACg");
	this.shape_538.setTransform(14.9,37.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#D8A166").s().p("AAACEIAAgJIAAgCIgBgBQgCABgFgNIgBgIQgBgQAQgiIABgBIgBgBQgCgGgPg7QgQg9gDg7QAAgMACgLQAIAGAUAIQgIAxANAvQANAuANAtQgIAfgDAfQgCAggOAaQgEgMAAgRg");
	this.shape_539.setTransform(7.5,22.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#C17E1E").s().p("Ah6AiQgcgBgSgDIgDgeQB2AQBagQQBngSAdgPIADAdQgSAFg0ANQgWAEgtAHQgrAGggACIhAABIgSAAg");
	this.shape_540.setTransform(26.2,13.4);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AirAkIgCgBIgDgnIADABQB8APBdgPQBogWAXgOIADgBIADAoIgCAAQgeARiQAUQg8AEgqAAQgwAAgWgFg");
	this.shape_541.setTransform(26.2,13.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#C17E1E").s().p("Ag9AeQhKgHgVgXIAFgbQBUAsBbgQQBdgOAigRIAHAYQhgAlhyAAIgJgBg");
	this.shape_542.setTransform(25.5,-2.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("Ag1AlQhRgJgbgYIgCgBIAJgmIADADQBBAmBMgEQA4gCAtgOQAtgPAQgHIAEABIAIAiIgEgBQhVAnh3AAIgJAAg");
	this.shape_543.setTransform(25.5,-2.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("Ah3EXQgGgEgCgIIgBgIQADgbAKg2QAJg1ADgkQAAhBgBgKQgDgCAAgFIAAgCQABgFAHgDIACgiQABgdAAgmQgBgjgEgfQgDggAAgXQAAgkAJgRIAFADQgPAYAKBRQAEA0gCA4IgDA8IAAABIgBABQgFADAAADQACAEABAAIACAAIAAACIgCBLQgCAmgJA2QgKA+ABAYQABAFAFACQAOACALgGQAygsApgNQAsgOAQABQgYgkgBgyQADhKAOgZQADgFAAgGQgGgZgIgEIgBgBIABgCQADgJAKgpQAJgpABgfIAAgDIACAAIAYgPQAXgPANgWIgIAOQgIANgJAIQgXARgJAEQABAggLAnQgKAmgFAMQALAJAGAXQAAAHgFAHQgOAUgEBGQACA1AaAlIAEAEIgMACQgDgCguAMQgsALg5AyQgGAGgSAAIgGAAg");
	this.shape_544.setTransform(21.4,54.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#42392B").s().p("AhNAfQAQgXAjgTQAjgWAIgEIAcABIAhABQgjAjgIAmQhVgDgbgEg");
	this.shape_545.setTransform(19,78.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#77582A").s().p("AgIEGQgbgFgLgLQgKgLAAgCQgOgUgFgZIAAgCQADgRAHgSQAUguADgoQAAgHgCgGIAAgCIgCAAQgDAAgDgDIAAgBQgBgCAHgHIAAgBIAAgBQAAgOgPhYQgPhZgug+QAYgCBEgLQBBgLA4gTQAHAFADANIgBAFQgDAGgFAEIgBABIAAABIgFBZQgGBPgJAzIAAABIAAAAQALARAAALIAAADIgFAHIAAABQgBALAAAmQgBA2AMARQANAJAIAAQAFABABABIAJANQgOgBgVAQQgHAIgJALQgOAUgUARQgRAOgWAAIgHAAg");
	this.shape_546.setTransform(33.9,51.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#3A260C").s().p("AhQAMIgVgBIgEgLQAUABAqABQAqABAsgEQAvgIAQgFQgFAQgEABQgDADgtAGQgWADgfAAQghAAgrgDg");
	this.shape_547.setTransform(44.1,78.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#F4E8D4").s().p("AgugBQALgaAUgPQAMgCAZAFQAcAEAIAaQADALAAAKIgBANQgQAFguAHQgdAFgdACQADgVALgYg");
	this.shape_548.setTransform(48.7,74.1);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#42392B").s().p("AgjAwIgVgBIgEgLQAbADA4AAIgBAMQgZAAgggDgAg9AfQgCgLAAgKQAAgKAEgDQAIgLAggQQAdgQA2gEQgjApgEAsQg7AAgbgEg");
	this.shape_549.setTransform(39.6,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56,p:{x:-34.7,y:78.5}},{t:this.shape_55,p:{x:-34.3,y:32.4}},{t:this.shape_54,p:{x:-34.3,y:32.3}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:-44.7,y:54.9}},{t:this.shape_49},{t:this.shape_48,p:{x:-49.1,y:59.8}},{t:this.shape_47,p:{x:-55.3,y:82.9}},{t:this.shape_46},{t:this.shape_45,p:{x:-49.2,y:82.1}},{t:this.shape_44,p:{x:-55.3,y:86.1}},{t:this.shape_43,p:{x:-56.7,y:57.8}},{t:this.shape_42},{t:this.shape_41,p:{x:-52.3,y:7.4}},{t:this.shape_40,p:{x:-59,y:18.2}},{t:this.shape_39,p:{x:-52.3,y:7.4}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-67.7,y:26.2}},{t:this.shape_33,p:{x:-67.4,y:26.4}},{t:this.shape_32},{t:this.shape_31,p:{x:-68.6,y:-3.1}},{t:this.shape_30,p:{x:-68.8,y:-3}},{t:this.shape_29,p:{x:-60.6,y:-2.8}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-70.4,y:38.4}},{t:this.shape_25,p:{x:-52.7,y:-11.3}},{t:this.shape_24,p:{x:-52.8,y:-11.5}},{t:this.shape_23,p:{x:-48.4,y:-37.7}},{t:this.shape_22,p:{x:-48.4,y:-37.7}},{t:this.shape_21},{t:this.shape_20,p:{x:-44.8,y:-57.7}},{t:this.shape_19,p:{x:-44.7,y:-57.8}},{t:this.shape_18,p:{x:-39.8,y:-50.4}},{t:this.shape_17,p:{x:-39.8,y:-50.4}},{t:this.shape_16,p:{x:-37.9,y:-48.9}},{t:this.shape_15},{t:this.shape_14,p:{x:-33.4,y:-51.6}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-38.9,y:-44.8}},{t:this.shape_9,p:{x:-38.7,y:-30.6}},{t:this.shape_8,p:{x:-55.9,y:-55.9}},{t:this.shape_7,p:{x:-56,y:-55.8}},{t:this.shape_6,p:{x:-56,y:-59.4}},{t:this.shape_5,p:{x:-34.6,y:-59.9}},{t:this.shape_4,p:{x:-34.5,y:-59.9}},{t:this.shape_3,p:{x:-65.7,y:-34.3}},{t:this.shape_2,p:{x:-65.5,y:-34.1}},{t:this.shape_1},{t:this.shape,p:{x:-67,y:-2.3}}]}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_16,p:{x:-8,y:-52.2}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},11).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_249,p:{x:34.4,y:49.9}},{t:this.shape_248,p:{x:34.4,y:50.1}},{t:this.shape_247,p:{x:43.2,y:49.1}},{t:this.shape_246,p:{x:34.3,y:52.1}},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243,p:{x:-58,y:57.4}},{t:this.shape_242,p:{x:-61.3,y:62.6}},{t:this.shape_241,p:{x:-63.7,y:57.4}},{t:this.shape_240,p:{x:-63.9,y:57.4}},{t:this.shape_239},{t:this.shape_238,p:{x:3.6,y:27.9}},{t:this.shape_237,p:{x:3.6,y:27.8}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233,p:{x:-23.1,y:-11.1}},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230,p:{x:-6.3,y:-9.8}},{t:this.shape_229,p:{x:-6.1,y:-9.8}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221,p:{x:7.8,y:-30.4}},{t:this.shape_220},{t:this.shape_219,p:{x:-12.5,y:-19.7}},{t:this.shape_218,p:{x:-5,y:-14.7}},{t:this.shape_217,p:{x:-40.6,y:32}},{t:this.shape_216},{t:this.shape_215,p:{x:5.1,y:35.5}},{t:this.shape_214,p:{x:16.3,y:-9.6}},{t:this.shape_213,p:{x:15.4,y:-6.6}},{t:this.shape_212,p:{x:16.2,y:-9.5}},{t:this.shape_211,p:{x:15.4,y:-51.5}},{t:this.shape_210,p:{x:15.5,y:-51.5}},{t:this.shape_209,p:{x:4.9,y:-50.5}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206,p:{x:25.6,y:-63.1}},{t:this.shape_205,p:{x:25.6,y:-63.1}},{t:this.shape_204,p:{x:27.2,y:-61.5}},{t:this.shape_203},{t:this.shape_202,p:{x:32.1,y:-63.7}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:33.5,y:-52.4}},{t:this.shape_198},{t:this.shape_197,p:{x:10.6,y:-71.1}},{t:this.shape_196,p:{x:10.5,y:-71}},{t:this.shape_195,p:{x:10.5,y:-74.3}},{t:this.shape_194,p:{x:31.9,y:-72}},{t:this.shape_193,p:{x:31.8,y:-72}},{t:this.shape_192,p:{x:-2.2,y:-50.2}},{t:this.shape_191,p:{x:-2,y:-50.1}},{t:this.shape_190},{t:this.shape_189,p:{x:16.7,y:-37.4}},{t:this.shape_188},{t:this.shape_187,p:{x:16.6,y:-40}},{t:this.shape_186,p:{x:14.3,y:-29.4}}]},1).to({state:[{t:this.shape_249,p:{x:39.4,y:44.9}},{t:this.shape_248,p:{x:39.4,y:45.1}},{t:this.shape_247,p:{x:48.2,y:44.1}},{t:this.shape_246,p:{x:39.3,y:47.1}},{t:this.shape_274},{t:this.shape_273},{t:this.shape_243,p:{x:-53,y:52.4}},{t:this.shape_242,p:{x:-56.3,y:57.6}},{t:this.shape_241,p:{x:-58.7,y:52.4}},{t:this.shape_240,p:{x:-58.9,y:52.4}},{t:this.shape_272},{t:this.shape_238,p:{x:8.6,y:22.9}},{t:this.shape_237,p:{x:8.6,y:22.8}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_233,p:{x:-18.1,y:-16.1}},{t:this.shape_268},{t:this.shape_267},{t:this.shape_230,p:{x:-1.3,y:-14.8}},{t:this.shape_229,p:{x:-1.1,y:-14.8}},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_221,p:{x:12.8,y:-35.4}},{t:this.shape_259},{t:this.shape_219,p:{x:-7.5,y:-24.7}},{t:this.shape_218,p:{x:0,y:-19.7}},{t:this.shape_217,p:{x:-35.6,y:27}},{t:this.shape_258},{t:this.shape_215,p:{x:10.1,y:30.5}},{t:this.shape_214,p:{x:21.3,y:-14.6}},{t:this.shape_213,p:{x:20.4,y:-11.6}},{t:this.shape_212,p:{x:21.2,y:-14.5}},{t:this.shape_211,p:{x:20.4,y:-56.5}},{t:this.shape_210,p:{x:20.5,y:-56.5}},{t:this.shape_209,p:{x:9.9,y:-55.5}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_206,p:{x:30.6,y:-68.1}},{t:this.shape_205,p:{x:30.6,y:-68.1}},{t:this.shape_204,p:{x:32.2,y:-66.5}},{t:this.shape_255},{t:this.shape_202,p:{x:37.1,y:-68.7}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_199,p:{x:38.5,y:-57.4}},{t:this.shape_252},{t:this.shape_197,p:{x:15.6,y:-76.1}},{t:this.shape_196,p:{x:15.5,y:-76}},{t:this.shape_195,p:{x:15.5,y:-79.3}},{t:this.shape_194,p:{x:36.9,y:-77}},{t:this.shape_193,p:{x:36.8,y:-77}},{t:this.shape_192,p:{x:2.8,y:-55.2}},{t:this.shape_191,p:{x:3,y:-55.1}},{t:this.shape_251},{t:this.shape_189,p:{x:21.7,y:-42.4}},{t:this.shape_250},{t:this.shape_187,p:{x:21.6,y:-45}},{t:this.shape_186,p:{x:19.3,y:-34.4}}]},1).to({state:[{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341}]},1).to({state:[{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450,p:{y:24.8}},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427,p:{y:20.6}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391}]},1).to({state:[{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_450,p:{y:26.3}},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_427,p:{y:22.2}},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462}]},1).to({state:[{t:this.shape_56,p:{x:43.8,y:75}},{t:this.shape_55,p:{x:44.2,y:28.9}},{t:this.shape_54,p:{x:44.2,y:28.8}},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_50,p:{x:33.8,y:51.4}},{t:this.shape_546},{t:this.shape_48,p:{x:29.4,y:56.3}},{t:this.shape_47,p:{x:23.2,y:79.4}},{t:this.shape_545},{t:this.shape_45,p:{x:29.3,y:78.6}},{t:this.shape_44,p:{x:23.2,y:82.6}},{t:this.shape_43,p:{x:21.8,y:54.3}},{t:this.shape_544},{t:this.shape_41,p:{x:26.2,y:3.9}},{t:this.shape_40,p:{x:19.5,y:14.7}},{t:this.shape_39,p:{x:26.2,y:3.9}},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_34,p:{x:10.8,y:22.7}},{t:this.shape_33,p:{x:11.1,y:22.9}},{t:this.shape_539},{t:this.shape_31,p:{x:9.9,y:-6.6}},{t:this.shape_30,p:{x:9.7,y:-6.5}},{t:this.shape_29,p:{x:17.9,y:-6.3}},{t:this.shape_538},{t:this.shape_537},{t:this.shape_26,p:{x:8.1,y:34.9}},{t:this.shape_25,p:{x:25.8,y:-14.8}},{t:this.shape_24,p:{x:25.7,y:-15}},{t:this.shape_23,p:{x:30.1,y:-41.2}},{t:this.shape_22,p:{x:30.1,y:-41.2}},{t:this.shape_536},{t:this.shape_20,p:{x:33.7,y:-61.2}},{t:this.shape_19,p:{x:33.8,y:-61.3}},{t:this.shape_18,p:{x:38.7,y:-53.9}},{t:this.shape_17,p:{x:38.7,y:-53.9}},{t:this.shape_16,p:{x:40.6,y:-52.4}},{t:this.shape_535},{t:this.shape_14,p:{x:45.1,y:-55.1}},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_10,p:{x:39.6,y:-48.3}},{t:this.shape_9,p:{x:39.8,y:-34.1}},{t:this.shape_8,p:{x:22.6,y:-59.4}},{t:this.shape_7,p:{x:22.5,y:-59.3}},{t:this.shape_6,p:{x:22.5,y:-62.9}},{t:this.shape_5,p:{x:43.9,y:-63.4}},{t:this.shape_4,p:{x:44,y:-63.4}},{t:this.shape_3,p:{x:12.8,y:-37.8}},{t:this.shape_2,p:{x:13,y:-37.6}},{t:this.shape_531},{t:this.shape,p:{x:11.5,y:-5.8}}]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-84.6,60.3,172.7);


// stage content:
(lib.jumpCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.jump();
	this.instance.setTransform(105.3,105.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(121.7,120.8,60.3,172.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;