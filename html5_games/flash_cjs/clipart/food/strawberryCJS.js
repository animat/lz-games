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



(lib.strawberry = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDD15").s().p("AgEAAQAAgBAEgBQAEgBABADQAAADgFAAIAAAAQgDAAgBgDg");
	this.shape.setTransform(21.2,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDD15").s().p("AgEAAQAAgBAEgBQAEgBABADQAAADgFAAIAAAAQgDAAgBgDg");
	this.shape_1.setTransform(11.2,-4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDD15").s().p("AgEAAQAAgBAEgBQAEgBABADQAAADgFAAIAAAAQgDAAgBgDg");
	this.shape_2.setTransform(18,-4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDD15").s().p("AAAABQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgCABIAAgBg");
	this.shape_3.setTransform(-16.7,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDD15").s().p("AgCAGQgHgFACgEQACgCADgBQACgBADACQADACACADQABABgCADQgBADgDAAIgCAAIgDgBg");
	this.shape_4.setTransform(-12.6,-5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDD15").s().p("AAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgCABIAAgBg");
	this.shape_5.setTransform(-8.7,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDD15").s().p("AAAACQgEgCABgBQACgCACACQADABAAACIgCABIgCgBg");
	this.shape_6.setTransform(-7.8,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFDD15").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABIAAAAg");
	this.shape_7.setTransform(-15.2,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFDD15").s().p("AgBAEQgFgEACgBQACgEAEACQAFADgBADQgCACgDAAIgCgBg");
	this.shape_8.setTransform(-10.1,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDD15").s().p("AAAADQgGgDACgCQACgDAEADQAFACgBADQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_9.setTransform(-12.7,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDD15").s().p("AAAADQgFgDACgBQACgDADACQAEACgCACQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIgBgBg");
	this.shape_10.setTransform(-15,-3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFDD15").s().p("AAAACQgFgCABgBQACgDADACQAFACgBACIgDACIgCgCg");
	this.shape_11.setTransform(-11.5,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFDD15").s().p("AAAACQgEgCABgBQACgCACABQAEACgBACQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBgBg");
	this.shape_12.setTransform(-18.8,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFDD15").s().p("AAAACQAAgBAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIgCABIAAAAg");
	this.shape_13.setTransform(-16.3,7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFDD15").s().p("AAAADQgFgDACgBQACgDACACQAEACgBACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBgBg");
	this.shape_14.setTransform(-22.1,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#427527").s().p("AgaAKQAJgKAOgGQAMgGASAFQgGABgCADQgBADAEACQAEADgBAEIAAABQgZgDgaADg");
	this.shape_15.setTransform(-17.3,-7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#427527").s().p("AAGAYIgLAAQgKgSgIgSIAJgGIAJgFQAPASAMASIABAHQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgKAAIgGAAg");
	this.shape_16.setTransform(-21,-2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#234C0D").ss(0.5,1,1).p("AAygvQgFAIgWAJQgLAEgCAIQgCAIACAIQACAGABAHQABAGgEABQgHABgIAAQgLgBgKABQgKABgDAHQgDAHgDALQgDAMgDAJQgCAJAAABQAAAAgFgKQgFgKgBgRQgCgQAJgVQAJgRAIgGQAIgHAHgDQAIgDAGgLQAHgMAKgIQALgJAPgBQAPgCATAKQgBAAgGAAQgGgBgFABQgEACAEADQAHAGgFAJg");
	this.shape_17.setTransform(-19.7,-1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#559636").s().p("Ag6BCQgFgKgBgRQgCgQAJgVQAJgRAIgGQAIgHAHgDQAIgDAGgLQAHgMAKgIQALgJAPgBQAPgCATAKIgHAAQgGgBgFABQgEACAEADQAHAGgFAJQgFAIgWAJQgLAEgCAIQgCAIACAIIADANQABAGgEABQgHABgIAAQgLgBgKABQgKABgDAHIgGASIgGAVIgCAKIgFgKg");
	this.shape_18.setTransform(-19.7,-1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AF1B1B").s().p("AAyBiQgBgkgOgkQgPgigYgdQgbgeglgOQAIgKAJgHQAJgIALAAQAKABALAGQANAIANAOQANAPALARQAJARADARIAGAUIAIAhQAEASgBAOQAAAQgGAJQgFAGgJACIABgJg");
	this.shape_19.setTransform(-12.2,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EF5E5E").s().p("AAHAYQgYgNgIgLQgFgHAAgJQgBgKABgJQAXAqAnAdQgOgFgLgHg");
	this.shape_20.setTransform(-21.9,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#6B1111").ss(0.5,1,1).p("ABmA/QgCgUgGgVQgFgVgEgOQgEgVgOgVQgOgXgTgOQgTgPgQgCQgOAAgKAJQgLAJgKANQgJAOgKAMQgKAMgMAFQgBABgFAPQgFAOgCARQgDATAIAOQAHAKASALQASAMAZAJQAZAKAXAGQAaAHAWAAQAVAAAHgNQAHgOgCgUg");
	this.shape_21.setTransform(-15.2,2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D62929").s().p("AAVBnQgXgGgZgKQgZgKgSgLQgSgLgHgKQgIgPADgSQACgRAFgPIAGgOQAMgGAKgMIATgZQAKgOALgJQAKgJAOAAQAQACATAOQATAQAOAVQAOAWAEAVIAJAjQAGAVACAUQACAVgHAMQgHAOgVAAQgWAAgagHg");
	this.shape_22.setTransform(-15.2,2.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#234C0D").ss(0.5,1,1).p("AAiAZQAAAAgMgKQgMgJgPgIQgSgKgSgEQABAAAHgFQAIgFAGADQADACAKAHQAIAHAMAHQALAJAJAGQAIAHAAAAg");
	this.shape_23.setTransform(-25.3,-6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#559636").s().p("AAWAPQgMgJgPgIQgSgKgSgEIAIgFQAIgFAGADIANAJIAUAOIAUAPIAIAHIgIADIgMgKg");
	this.shape_24.setTransform(-25.3,-6.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFDD15").s().p("AgBAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_25.setTransform(1.6,-2.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFDD15").s().p("AgGAAQABgHAFgBQAGABABAHQgBAIgGABQgFgBgBgIg");
	this.shape_26.setTransform(7.8,-1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFDD15").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_27.setTransform(3.8,5.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFDD15").s().p("AgBAAQAAgDABAAQACAAAAADQAAAEgCAAQgBAAAAgEg");
	this.shape_28.setTransform(-1,9.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFDD15").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_29.setTransform(-7.2,4.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFDD15").s().p("AgEAAQABgFADAAQAEAAABAFQgBAGgEAAQgDAAgBgGg");
	this.shape_30.setTransform(-5,8.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFDD15").s().p("AgDAAQABgFACAAQADAAABAFQgBAGgDAAQgCAAgBgGg");
	this.shape_31.setTransform(-1.2,3.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFDD15").s().p("AgCAAQAAgDACgBQAEABAAADQAAAEgEABQgCgBAAgEg");
	this.shape_32.setTransform(4.4,-1.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFDD15").s().p("AgCAAQAAgEACAAQADAAAAAEQAAAFgDAAQgCAAAAgFg");
	this.shape_33.setTransform(3.7,2.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFDD15").s().p("AgCAAQABgDABgBQADABAAADQAAAEgDAAQgBAAgBgEg");
	this.shape_34.setTransform(-4.5,-1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFDD15").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_35.setTransform(-6,2.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFDD15").s().p("AgCAAQAAgDACgBQADABABADQgBAEgDABQgCgBAAgEg");
	this.shape_36.setTransform(-7.9,-3.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#427527").s().p("AgUgWQAPADAKAJQALAJAFARQgEgGgEABQgCAAgCAFQgBAFgEACIgBAAQgIgYgPgVg");
	this.shape_37.setTransform(7,-5.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#427527").s().p("AgGAdIgIgOIgGgMQALgPAMgQIAJAFIAJAFQgIAWgLATIgEAFIgDABIgBAAg");
	this.shape_38.setTransform(0.2,-6.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#234C0D").ss(0.5,1,1).p("AhbABQAAgBAGgHQAHgIANgKQAPgJAWgCQAVgCAHAFQAKAEAGAFQAHAEAMABQAOABANAFQANAGAIALQAJANAAAVQAAgBgDgFQgCgGgEgDQgDgEgBAFQgCAJgKAAQgJAAgSgPQgJgIgIACQgIACgHAFQgGAGgDAEQgFAEgDgDQgEgFgFgKQgFgJgFgHQgGgIgHAAQgIABgLADQgMACgKADQgJABAAAAg");
	this.shape_39.setTransform(0.4,-6.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AF1B1B").s().p("Ag+BlQgIgBgFgHQAEgBAOgBQAOAAAjgeQAigeAQgnQARgqgbgzQAOACAKAFQALAFAFAJQAEAKAAAMQAAARgGATQgHASgKAPQgLAQgMALIgSAQIgXAXQgNALgOAHQgLAHgJAAIgEgBg");
	this.shape_40.setTransform(1.5,3.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EF5E5E").s().p("AgQARQAAgPABgJQACgLAEgGQAEgHAFgFQAIgEAJgEQgaApgGAwIgBgcg");
	this.shape_41.setTransform(-7.8,-3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#6B1111").ss(0.5,1,1).p("AAVhjQgVgDgNgKQAAAAgJABQgJABgNADQgNAEgMAGQgMAGgHAKQgGALgBAWQgBAVADAaQADAZAHAaQAHAZAKAUQAKASAPAAQAPAAARgMQAPgLAPgPQAQgPAMgLQARgOAMgWQAMgVAFgYQAEgXgHgRQgJgQgUgEQgUgFgWgCg");
	this.shape_42.setTransform(-0.2,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D62929").s().p("AhCBfQgKgUgHgZQgHgagDgZQgDgaABgVQABgWAGgLQAHgKAMgGQAMgGANgEIAWgEIAJgBQANAKAVADQAWACAUAFQAUAEAJAQQAHARgEAXQgFAYgMAVQgMAWgRAOIgcAaQgPAPgPALQgRAMgPAAIgBAAQgOAAgKgSg");
	this.shape_43.setTransform(-0.2,2.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#234C0D").ss(0.5,1,1).p("AgHguQABAAAEADQACACAEADQAEAEABAEQAAAEgCAMQgCAMgCAMQgCAPgBAKQgBALAAABIgHgGQABgBACgPQADgPAAgSQABgUgGgSg");
	this.shape_44.setTransform(3,-12.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#559636").s().p("AgIApIADgQQADgPAAgSQABgUgGgSIAFADIAGAFQAEAEABAEIgCAQIgEAYIgDAZIgBAMg");
	this.shape_45.setTransform(3,-12.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFDD15").s().p("AgCAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_46.setTransform(13.7,9.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFDD15").s().p("AgIABQAAgFAIgCQAHAAACAGQAAAFgJACIAAAAQgGAAgCgGg");
	this.shape_47.setTransform(13.2,15.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFDD15").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_48.setTransform(6.2,12.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFDD15").s().p("AgDAAQAAgBADAAQAEgBAAACQAAABgEABQgDAAAAgCg");
	this.shape_49.setTransform(1.9,8.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFDD15").s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_50.setTransform(6.1,1.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFDD15").s().p("AgFABQAAgEAFgBQAFAAABAEQAAAEgGAAIAAABQgEAAgBgEg");
	this.shape_51.setTransform(1.9,4.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFDD15").s().p("AgFAAQAAgCAFgBQAFAAABADQAAADgGABIAAAAQgEAAgBgEg");
	this.shape_52.setTransform(7.4,7.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFDD15").s().p("AgEABQAAgDAEgBQAEAAABADQAAACgFABIAAABQgDAAgBgDg");
	this.shape_53.setTransform(13.7,12.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFDD15").s().p("AgEAAQAAgBAEgBQAEgBABADQAAACgFABIAAAAQgDAAgBgDg");
	this.shape_54.setTransform(9.3,12);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFDD15").s().p("AgDAAQAAgBADgBQADAAABACQAAACgEABIAAAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQAAAAAAgBg");
	this.shape_55.setTransform(12.1,3.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFDD15").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_56.setTransform(8.2,2.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFDD15").s().p("AgEAAQAAgBAEgBQAEgBABADQAAADgFAAIAAAAQgDAAgBgDg");
	this.shape_57.setTransform(13.4,-0.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#427527").s().p("AgHAQQAAgDgGgBQgFgBgCgDIAAgBQAVgLAUgSQAAAPgIALQgIANgQAGQAFgEgBgDg");
	this.shape_58.setTransform(17.6,14.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#427527").s().p("AgWAGIgFgFQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAFgEAIgGIALgIQARAJASALIgEAKIgEAJQgWgGgWgIg");
	this.shape_59.setTransform(17.6,7.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#234C0D").ss(0.5,1,1).p("AgNhdQAAAAAKAFQAHAGALAMQAMANAFAVQAEAWgDAKQgDAHgEAHQgEAIABAMQABANgEAOQgEAOgMAKQgJAJgVADQABAAAFgDQAFgDADgEQADgDgFgBQgKgBgBgJQgBgKANgUQAGgKgCgHQgDgIgHgGQgGgGgFgCQgEgEACgEQAFgEAJgHQAJgFAHgHQAGgHgBgHQgCgHgCgLQgEgMgEgJQgEgIAAgBg");
	this.shape_60.setTransform(17.7,7.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#AF1B1B").s().p("AAiA/QgUgEgPgIQgSgIgMgLIgTgPIgZgUQgNgMgJgNQgJgMAAgLQABgIAFgGIAFAHQAVAdAhAVQAhATAlAIQAnAIAngLQgBAOgDALQgDALgJAGQgJAGgNABIgLABQgMAAgMgDg");
	this.shape_61.setTransform(7.9,10.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EF5E5E").s().p("AgugGQAPgEANgBQAbgEAOAFQAHADAGAHQAGAFAFAJQgtgVgwABg");
	this.shape_62.setTransform(13.3,-0.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#6B1111").ss(0.5,1,1).p("ABygWQAAAAgCgJQgCgJgFgMQgFgNgIgLQgIgLgLgFQgLgEgWABQgVACgYAGQgaAHgYAKQgZAKgSAMQgRANACAPQACAOAOANQAOAQAQANQARAOAMALQAQAOAWAKQAYAJAYACQAYABAQgKQAOgKACgVQACgUAAgWQAAgUAIgQg");
	this.shape_63.setTransform(8.3,7.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D62929").s().p("AAwBgQgYgCgYgJQgWgKgQgOIgdgZQgQgNgOgQQgOgNgCgOQgCgPARgNQASgMAZgKQAYgKAagHQAYgGAVgCQAWgBALAEQALAFAIALQAIALAFANQAFAMACAJIACAJQgIAQAAAUQAAAWgCAUQgCAVgOAKQgOAJgUAAIgGAAg");
	this.shape_64.setTransform(8.3,7.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#234C0D").ss(0.5,1,1).p("AAugIQAAAAgCAFQgBADgDAEQgDAEgEABQgEABgMgBQgNAAgMAAQgPgBgKAAQgLAAgBgBIAFgHQABAAAPABQAPABASgCQAVAAAQgIg");
	this.shape_65.setTransform(23.9,8.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#559636").s().p("AARAJIgZAAIgZgBIgMgBIAFgHIAQABQAPABASgCQAVAAAQgIIgCAFIgEAHQgDAEgEABIgGAAIgKAAg");
	this.shape_66.setTransform(23.9,8.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFDD15").s().p("AAAAHQgIgDAAgEQACgHAHABQAIACgBAFQgBAGgHAAIAAAAg");
	this.shape_67.setTransform(12.7,9.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFDD15").s().p("AAAAEQgGgBABgDQABgEAEAAQAGACAAADQgBAEgFAAIAAgBg");
	this.shape_68.setTransform(24.7,-1.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFDD15").s().p("AAAAEQgFgCAAgCQABgEAEABQAGACAAACQgBADgFAAIAAAAg");
	this.shape_69.setTransform(19,1.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#427527").s().p("AgMADQgIgLABgPQASATAVAMIAAABQgCAEgFAAQgGAAAAADQgBADAEAFQgPgHgHgOg");
	this.shape_70.setTransform(8.5,7.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#427527").s().p("AgZAJIgEgJQATgKARgIIAKAJQAJAGAEADQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABIgGAFQgVAHgXAEIgDgKg");
	this.shape_71.setTransform(8.8,0.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#234C0D").ss(0.5,1,1).p("AAThdQAAAAgKAFQgJAFgLALQgMAMgGAWQgFAUACAKQADAIADAIQAEAHgCANQgCANAEAOQADAOALAKQAJALAUAEQAAAAgFgEQgFgEgDgDQgDgEAGgBQAJAAABgJQACgKgMgUQgFgLADgHQADgHAHgGQAHgFAEgDQAFgDgCgEQgEgFgJgGQgJgHgHgHQgFgHABgHQAAgHAFgLQAFgLAFgJQAEgIAAgBg");
	this.shape_72.setTransform(8.7,1.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#AF1B1B").s().p("AhJA8QgMgCgJgGQgIgHgDgLQgDgLABgOQAmANAngGQAlgGAigRQAigTAXgbIAFgIQAGAHAAAIQgBALgJAMQgKALgOAMIgaASIgTAPQgNAKgRAHQgSAHgTADIgRACQgKAAgJgCg");
	this.shape_73.setTransform(18.4,4.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EF5E5E").s().p("AgjAAQAHgHAHgDQAHgCALAAQAJABAOACIAbAHQgwgEgtATQAFgJAGgEg");
	this.shape_74.setTransform(13.5,-6.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#6B1111").ss(0.5,1,1).p("ABgAQQgOAPgSAMQgSANgMAKQgRAOgWAIQgZAIgYAAQgYAAgPgLQgOgLgBgVQAAgUABgWQABgUgHgQQAAAAADgJQACgJAGgMQAGgMAIgLQAJgKALgFQALgEAWADQAVADAXAIQAaAIAYALQAYAMARANQARAOgEAOQgDANgOAOg");
	this.shape_75.setTransform(18.2,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D62929").s().p("AhdBVQgOgLgBgVIABgqQABgUgHgQIADgJQACgJAGgMQAGgMAIgLQAJgKALgFQALgEAWADQAVADAXAIQAaAIAYALQAYAMARANQARAOgEAOQgDANgOAOQgOAPgSAMIgeAXQgRAOgWAIQgZAIgYAAQgYAAgPgLg");
	this.shape_76.setTransform(18.2,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#234C0D").ss(0.5,1,1).p("AApADQgBAAgPAAQgPAAgSgCQgUgCgQgJQAAABABAEQACAFACADQADAEAEACQAEAAAMABQAMAAANABQAPAAAKAAQALAAAAAAg");
	this.shape_77.setTransform(2.4,1.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#559636").s().p("AAiALIgZgBIgZgBIgQgBQgEgBgDgFIgEgHIgBgFQAQAJAUABQASADAPABIAQAAIAEAHIgLAAg");
	this.shape_78.setTransform(2.4,1.9);

	this.addChild(this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-18.2,61.2,36.4);


// stage content:
(lib.strawberryCJS = function() {
	this.initialize();

	// outline
	this.instance = new lib.strawberry("synched",0);
	this.instance.setTransform(100,100,3.318,3.317);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;