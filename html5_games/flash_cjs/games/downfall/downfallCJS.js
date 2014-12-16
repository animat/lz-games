(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/explodemp3.mp3", id:"explodemp3"},
		{src:"sounds/twangmp3.mp3", id:"twangmp3"},
		{src:"sounds/whooshmp3.mp3", id:"whooshmp3"}
	]
};



// symbols:



(lib.ufoexplosion = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAzgoQgTgMgxgSIhFAyQAEAJACALQAEAXgLARQAPAUANABIAoAKQADgBACgDQAEgHAAgMQgBgTATAFIAfADIAJgRQAFgLAMAIIAXgLIgLgRQgOgVgMgIg");
	this.shape.setTransform(55.4,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#57677F").s().p("Ag6A8QgOAAgPgUQALgRgFgXQgBgLgEgJIBFgyQAxASASANQAMAHAOAVIAMARIgXALQgMgIgFALIgJASIgfgEQgUgFACATQABAMgFAHQgCADgDABg");
	this.shape_1.setTransform(55.4,7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhCAmQgTgEgGgPQAIgNAAgVQgBgMgDgJIAFgOICuAeQgCAIgNAHQgNAFgDgCQgGgHgKASQgIARgPgKQgHgEgLAGQgKAGgBAHIgMAUQgCgDgtgKg");
	this.shape_2.setTransform(55,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABxAdQAAgIgBgKQgDgTgIgIQgOgOgTgiIgJAAQgLAEgKANQgQAWgSgaIgcgfIgZALQgQAHgFgUIgjgJIgFAfQgEAjAGATQAJAcAlBBIB2AJQAOgyArgPg");
	this.shape_3.setTransform(72.7,142.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#57677F").s().p("Ag+BVQglhBgJgcQgGgTAEgjIAFgfIAjAJQAFAUAQgHIAZgLIAcAfQASAaAQgWQAKgNALgEIAJAAQATAiAOAOQAIAIADATQABAKAAAIQgrAPgOAyg");
	this.shape_4.setTransform(72.7,142.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah1hcQALgHAUAEQATAFAAAIQAAANAdgNQAZgLAHAYQADALAQAEQARAEAIgHIAegKQAAAFAoA0QAJALABAQQAAAIgBAGQgiAIgXAwIgRAKg");
	this.shape_5.setTransform(74,142.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AglghIgCAfQAEAJANAXIApADQAGgSAPgFIgEgPQgFgFgHgMIgLAGQgGAHgGgJIgJgLIgJAEQgGADgCgIg");
	this.shape_6.setTransform(133.8,94.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#57677F").s().p("AgWAeQgNgXgEgJIACgeIAMACQACAIAGgDIAJgEIAJAMQAGAIAGgHIALgGQAHAMAFAFIAEAPQgPAGgGARg");
	this.shape_7.setTransform(133.8,94.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpggQAEgDAHACQAHABAAADQAAAFAKgFQAJgDADAIQABAEAEABQAHACACgDIALgDIAPAUIADAOQgMADgIARIgHAEg");
	this.shape_8.setTransform(134.2,94.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgZgeIgNgDIgBAfQADAJAOAXIAqADQAFgSAPgFIgFgPQgFgFgHgMIgKAGQgGAIgHgKIgJgLIgJAEQgFADgCgIg");
	this.shape_9.setTransform(110.7,113.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#57677F").s().p("AgWAfQgOgYgDgJIACgfIAMAEQACAHAGgDIAJgDIAIAKQAHAKAGgIIALgGQAHAMAEAFIAFAPQgPAGgGARg");
	this.shape_10.setTransform(110.7,113.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpggQADgDAIACQAHABAAADQAAAFALgFQAIgDADAIQABAEAEABQAGACAEgDIAKgDQABABAOATIADAOQgMADgIARIgHAEg");
	this.shape_11.setTransform(111.1,113);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgngiQgFAUAEAMQADAJAOAZIAsADQAFgTAQgFIgEgQQgFgGgIgMIgLAGQgGAIgHgJIgJgMIgKAEQgGADgCgIg");
	this.shape_12.setTransform(124.7,32);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#57677F").s().p("AgXAgQgOgZgDgJQgEgMAFgUIANADQACAIAGgDIAKgEIAJAMQAHAJAGgIIALgGQAIAMAFAGIAEAQQgQAFgFATg");
	this.shape_13.setTransform(124.7,32);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgrgiQAEgDAHACQAIACAAADQAAAFALgFQAKgEACAJQABAEAFABQAGACAEgDIALgDQAAABAPAUIADAOQgMADgJASIgGAFg");
	this.shape_14.setTransform(125.1,31.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AANgRQgGAIgHgJIgJgMIgJAEQgHADgBgIIgOgDIgBAgQADAJAPAZIArADQAFgTARgFIgFgQQgFgFgIgNg");
	this.shape_15.setTransform(5.4,116.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#57677F").s().p("AgXAgQgPgZgCgJIABggIANADQABAIAHgDIAJgEIAKAMQAHAJAFgIIALgGQAIANAFAFIAEAQQgPAFgGATg");
	this.shape_16.setTransform(5.4,116.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgrgiQAEgCAHABQAIACAAADQAAAFALgFQAJgEADAJQABAEAFACQAGABADgCIAMgEQgBAEAPARIAEAPQgNADgJASIgGAEg");
	this.shape_17.setTransform(5.8,116.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAdAHIgDgKQgEgEgFgJIgIAFQgEAFgFgGIgGgJIgGADQgEACgCgFIgJgCIgBAWQADAGAJARIAeACQAEgNALgEg");
	this.shape_18.setTransform(117.9,75.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#57677F").s().p("AgQAWQgJgRgDgGIABgWIAJACQACAFAEgCIAGgDIAGAJQAFAGAEgFIAIgFQAFAJAEAEIADAKQgLAEgEANg");
	this.shape_19.setTransform(117.9,75.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgegXQAEgCAFABQAFABAAACQAAADAIgDQAGgCACAGQAAADADABQAFABACgCIAIgDQAAACAKANIACAKQgIACgGAMIgFADg");
	this.shape_20.setTransform(118.2,75.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AgbgXIgBAWQACAGAKARIAeACQADgNAMgEIgDgKQgEgEgFgJIgIAFQgEAGgFgHIgGgIIgGACQgEACgBgFg");
	this.shape_21.setTransform(97.1,107.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#57677F").s().p("AgQAWQgJgRgDgGIABgWIAJACQABAFAFgCIAHgCIAFAIQAFAHAEgGIAIgFQAFAJAEAEIADAKQgLAEgEANg");
	this.shape_22.setTransform(97.1,107.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgegXQADgCAFACQAFABABACQgBAEAIgEQAHgDABAGQABADADABQAFABACgCIAIgCIAKAPIACAJQgJACgGANIgEACg");
	this.shape_23.setTransform(97.4,107.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AAdAHIgDgKQgEgEgFgJIgIAFQgEAGgFgHIgFgIIgHACQgEACgCgFIgJgCIgBAWQADAGAKARIAdACQAEgNALgEg");
	this.shape_24.setTransform(122,96.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#57677F").s().p("AgPAWQgKgRgDgGIABgWIAJACQACAFAEgCIAHgCIAFAIQAFAHAEgGIAIgFQAFAJAEAEIADAKQgLAEgEANg");
	this.shape_25.setTransform(122,96.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgegXQADgCAGABQAFACAAACQAAADAIgDQAFgDADAGQAAADADABQAFABACgCIAIgCIAKAPIACAJQgIACgGANIgFACg");
	this.shape_26.setTransform(122.3,96.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AgJgIIgBAIQABACAEAGIAKABQABgFAEgCIAAgCIgEgFIgDACQgCACgBgDIgBgDIgDABQgBABgBgCg");
	this.shape_27.setTransform(119.2,41);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#57677F").s().p("AgFAIIgEgIIAAgIIADABQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAgBIADgBIABADQAAABABAAQAAABABAAQAAAAABgBQAAAAAAAAIAEgCIADAFIAAACQgDACgCAFg");
	this.shape_28.setTransform(119.2,41);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgKgHQAFgEAAAFQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABgBQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAABABQAAAAABgBQAAAAABgBIADgBIAEAFIABADQgDABgCAFIgCABg");
	this.shape_29.setTransform(119.3,40.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AgFgUIgHACIgFgDIgKgCQgDAOACAIIANAXIAdACQAEgNALgEIgDgKQgEgEgFgJIgIAFQgEAFgFgGg");
	this.shape_30.setTransform(74.8,10.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#57677F").s().p("AgPAWIgNgXQgCgIADgOIAKACIAFADIAHgCIAFAIQAFAGAEgFIAIgFQAFAJAEAEIADAKQgLAEgEANg");
	this.shape_31.setTransform(74.8,10.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdgXQACgCAGABQAFACAAACQAAAEAHgEQAGgDADAGQAAADADABQAFABACgCIAIgCIAKAPIACAJQgIACgGANIgFACg");
	this.shape_32.setTransform(75.1,10.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AgRgBQACADAGALIASACQACgIAHgDIgCgFIgGgJIgEAEQgDADgDgEIgDgFIgEABQgDABAAgCIgGgCg");
	this.shape_33.setTransform(18.3,55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#57677F").s().p("AgJAOQgGgMgCgCIABgOIAGACQAAAAAAABQAAAAABABQAAAAABAAQAAAAABAAIAEgCIADAEQADAFADgEIAEgCIAGAIIACAFQgHADgCAIg");
	this.shape_34.setTransform(18.3,55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSgOQACgBADABQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAABABQAAAAABAAQAAAAABAAQABgBABAAQAEgCABAEQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAIAFgCIAHAKIABAFQgFABgEAIIgDACg");
	this.shape_35.setTransform(18.5,54.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AgagYQgDAPACAIIAMAXIAeADQADgOALgDIgDgMQgDgDgFgJIgIAFQgEAGgFgHIgGgIIgHADIgFgEg");
	this.shape_36.setTransform(40.1,20.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#57677F").s().p("AgPAWIgMgXQgCgIADgPIAJADIAFAEIAHgEIAGAIQAFAIAEgHIAIgEQAFAJADADIADAMQgLADgDAOg");
	this.shape_37.setTransform(40.1,20.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdgXQACgCAGABQAFABAAACQAAAEAHgEQAGgCADAGQAAADADABQAFABACgCIAIgDIAKAPIACAKQgIACgGAMIgFADg");
	this.shape_38.setTransform(40.4,20.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AgcgBQADAGAKARIAdACQAEgNALgEIgDgKQgEgEgFgJIgIAFQgEAFgFgGIgGgIIgGACQgEACgCgFIgJgCg");
	this.shape_39.setTransform(65.1,74.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#57677F").s().p("AgPAWQgKgRgDgGIABgWIAJACQACAFAEgCIAGgCIAGAIQAFAGAEgFIAIgFQAFAJAEAEIADAKQgLAEgEANg");
	this.shape_40.setTransform(65.1,74.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgegXQADgCAGABQAFACAAACQAAADAIgDQAGgDABAGQABADADABQAFABACgCIAIgCQAAABAKAOIACAJQgIACgHANIgEACg");
	this.shape_41.setTransform(65.4,74.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AARgQIgIAFQgEAFgFgGIgGgIIgGACQgFACgBgFIgJgCIgBAWQACAGAKARIAeACQAEgNALgEIgDgKQgEgEgFgJg");
	this.shape_42.setTransform(53.4,87.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#57677F").s().p("AgQAWQgKgRgCgGIABgWIAJACQABAFAFgCIAGgCIAGAIQAFAGAEgFIAIgFQAFAJAEAEIADAKQgLAEgEANg");
	this.shape_43.setTransform(53.4,87.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgegXQADgCAFABQAFACABACQgBAEAIgEQAHgDABAGQABADADABQAFABACgCIAIgCIAKAPIACAJQgJACgGANIgEACg");
	this.shape_44.setTransform(53.7,87.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("ABfgkIgEAMQgHAOgOAKQgtAmhhACQglAHAYgbQAcgaAngSQA3gYA6AMg");
	this.shape_45.setTransform(86.8,95.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E5E5E5").s().p("AhVAUQAcgaAngSQA3gYA6AMIgEAMQgHAOgOAKQgtAmhhACIgMABQgUAAATgVg");
	this.shape_46.setTransform(86.8,95.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhOAUQAZgaAkgSQAygYA2AMIgEAMQgGAOgNAKQgpAmhZACIgLABQgTAAASgVg");
	this.shape_47.setTransform(84.4,95.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("ACNhtIgNAXQgSAcgbAcQhVBYiLA0QBJgQBGgjQCPhFgEhjg");
	this.shape_48.setTransform(95.8,72.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E5E5E5").s().p("ABTgeQAbgcASgcIANgXQAEBjiPBFQhGAjhJAQQCLg0BVhYg");
	this.shape_49.setTransform(95.8,72.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("Ag8gGQgYAJgFAPQgDAJABAdQABAWgPATQgMAQgPAHIgJAUQBHgSBGgkQCMhHAChXQgDgWgIgUQgQgmgaASIgNAVQgTAXgaAKIgKAGQgKAIgJANQgNAZgxAWg");
	this.shape_50.setTransform(95.8,69.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A2BDDD").s().p("AiEB4QAPgHAMgQQAPgTgBgWQgBgdADgJQAFgPAYgJQAygWANgZQAIgNAKgIIAKgGQAbgKASgXIANgVQAagSAQAmQAIAUACAWQgBBXiMBHQhGAkhGASg");
	this.shape_51.setTransform(95.8,69.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgDAAQgBgCAEgBQADgBABAEQABADgFABIAAAAQgCAAgBgEg");
	this.shape_52.setTransform(98.4,26.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAAQgBgCAEgBQADgBABAEQABADgFABIAAAAQgCAAgBgEg");
	this.shape_53.setTransform(98.2,28.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AAAAXQAKAFAFgBIgCgtIgPgIQgNAoABALg");
	this.shape_54.setTransform(97.9,27.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFC757").s().p("AAAAXIgOACQgBgLANgoIAPAIIACAtIgDAAQgFAAgHgEg");
	this.shape_55.setTransform(97.9,27.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAAAVQgCgBgLAEQgEgCABgGIAbgrQAIANgCAVQAAAMgDAJg");
	this.shape_56.setTransform(98.2,28);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgLABQgDgLANgBQAMgDACAOQACAKgNACIgCABQgJAAgCgMg");
	this.shape_57.setTransform(99,9.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMABQgBgKAMgDQALgBACANQACALgNABIgBABQgJAAgDgMg");
	this.shape_58.setTransform(98.3,16.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("AgBBCQAaAMAOgDQAIgDgFg/QgDgegEggIgSgMQgRgLgLACQgkBxAEAgg");
	this.shape_59.setTransform(97.9,12.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFC757").s().p("AgBBCIgqAFQgEggAkhxQALgCARALIASAMQAEAgADAeQAFA/gIADIgHABQgNAAgUgKg");
	this.shape_60.setTransform(97.9,12.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAAA9QgFgCgNAGQgOAFgGgDQgMgFACgPIBOh8QAWAlgEA9QgCAggGAZg");
	this.shape_61.setTransform(98.4,14.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgMAAQAAgLAMgBQANABAAALQAAANgNgBQgMABAAgNg");
	this.shape_62.setTransform(8.3,42);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgLAAQAAgMALABQAMgBAAAMQAAANgMAAQgLAAAAgNg");
	this.shape_63.setTransform(100.4,43.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgMAAQABgMALAAQANAAgBAMQABANgNAAQgLAAgBgNg");
	this.shape_64.setTransform(95.9,50.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgLAAQAAgLALAAQAMAAAAALQAAANgMAAQgLAAAAgNg");
	this.shape_65.setTransform(88.7,56.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAAQABgMALABQANgBgBAMQABANgNAAQgLAAgBgNg");
	this.shape_66.setTransform(79.7,60.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgMAAQAAgLAMgBQAMABAAALQAAANgMgBQgMABAAgNg");
	this.shape_67.setTransform(14.3,43.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AA/AHQARgYgCgOQgBgIg/gFQgegDgggBQgdAbAAAQQBqA0AgACg");
	this.shape_68.setTransform(10.8,44.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFC757").s().p("AhNgFQAAgQAdgbIA+AEQA/AFABAIQACAOgRAYIgCAqQgggChqg0g");
	this.shape_69.setTransform(10.8,44.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#777777").ss(1,1,1).p("AgDgfQBWANAsAwIhbgGQhkgCg+APQAlgtAGgbQAkgDAsAHg");
	this.shape_70.setTransform(69.7,36.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#ABB0B7").s().p("AhTgjQAkgDAsAHQBWANAsAwIhbgGQhkgCg+APQAlgtAGgbg");
	this.shape_71.setTransform(69.7,36.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AAsAeQhBgzAWg0Ig8ASQg9AZAFApQAIASAgARQBCAiB9gHIgXgMQgcgOgVgRg");
	this.shape_72.setTransform(32.2,65.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A2BDDD").s().p("AhLAuQgggRgIgSQgFgpA9gZIA8gSQgWA0BBAzQAVARAcAOIAXAMIgqABQheAAg3gcg");
	this.shape_73.setTransform(32.2,65.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("ACehtIgJAgQgPAngbAkQhWBvixAfQgFgVAggjQAJAAgJgVQgLgaAOgJQAugOAvgYQBagzAehNg");
	this.shape_74.setTransform(88.4,52.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFC757").s().p("AiBBUQAJgBgJgUQgLgaAOgKQAugOAvgXQBagzAehNIBHAdIgJAgQgPAngbAkQhWBuixAgQgFgVAggjg");
	this.shape_75.setTransform(88.4,52.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("ABGAVQgcAPgEAIQgGAOg3ggQg7gfgOgrQAPARAfAPQA9AdBWgGg");
	this.shape_76.setTransform(30.6,73.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#57677F").s().p("AgXAaQg7gfgOgrQAPARAfAPQA9AdBWgGIgbAOQgcAPgEAIQgCAFgGAAQgPAAgmgXg");
	this.shape_77.setTransform(30.6,73.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgVAZIAPgcQgDgVAAgLQAAgHAMgJIAOgJQAZArgZAoQgMAVgQAMIgRAFQgEgMALgYg");
	this.shape_78.setTransform(73.9,61.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ah0gHQAWgRBggBQBggCAaAOIAJAHQAJAIAAAJIh8gCQiAAAgfASQgFgNAegVg");
	this.shape_79.setTransform(69.2,40);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAhA0IhthgQAngQA8AOIA2ARIgXAlQgDAEAEAPQADAOgEAFQgFAIgIAAIgIgCg");
	this.shape_80.setTransform(13.7,43.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1).p("ACtgOQgOAug8BmIi6AOIgUgqQgcgugqgOQgDg0AWgVIA0hLQAVgHAaAiQAQAVAUgLIASgQIAtgxQAVABASAQQAaALAHgfIA3gOIAIAwQAHA3gJAeg");
	this.shape_81.setTransform(60,208.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#57677F").s().p("AhrBqQgcgugqgOQgDg0AWgVIA0hLQAVgHAaAiQAQAVAUgLIASgQIAtgxQAVABASAQQAaALAHgfIA3gOIAIAwQAHA3gJAeQgOAug8BmIi6AOg");
	this.shape_82.setTransform(60,208.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AhdCJIgZgnQgggpghgIQgKgkAZgeIAogzQAWgcAAgKQAiACAOANQAMAKAbgFQAagGAFgRQAFgRAPgGQAOgFAQAGQAtAUAAgUQAAgMAggHQAggHAQALIj9Esg");
	this.shape_83.setTransform(57.9,207.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AAugKQgIARAJAOIgQALQgHABgOAFQgFgCABgKQAAgHgGgBQAAAAgDAAIgRACQgDgEgBgFIgCgDQgDgCgEADIgNgGQAKgRAKgGIAjgQg");
	this.shape_84.setTransform(67.5,41.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#57677F").s().p("AAGAZQAAgGgGgBIgDAAIgRACQgDgEgBgFIgCgDQgDgCgEADIgNgGQAKgRAKgHIAjgQIAlAbQgIAQAJAPIgQALQgHAAgOAGQgFgCABgLg");
	this.shape_85.setTransform(67.5,41.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAEAQQgBgDgEgEQgGgDgDACQgIAFgFgIQgFgJgDAEQgCAAgHgBQgHgEgBgFIBcgQIADAHQgFATAHAKIgNAKIgaAHQgFgGgBgFg");
	this.shape_86.setTransform(67.7,43.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1,1,1).p("Ag7AQQgBgRAIgHIARgaQAHgCAJAMQAGAHAGgEIAGgFIAOgRQAHABAHAFQAIADADgKIASgFIADARQACASgDAKQgEAPgVAiIg9AFIgHgOQgKgQgOgEg");
	this.shape_87.setTransform(58.3,114.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#57677F").s().p("AgjAkQgKgQgOgEQgBgRAIgHIARgZQAHgDAJAMQAGAGAGgDIAGgFIAOgRQAHAAAHAFQAIAFADgLIASgFIADAQQACATgDAKQgEAOgVAjIg9AFg");
	this.shape_88.setTransform(58.3,114.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgfAuIgIgNQgLgOgLgDQgDgMAIgJQAVgcAAgCQAMABAEAEQAEAEAJgCQAIgCACgGQAEgNANAGQAPAHAAgHQAAgEALgDQAKgCAGAEIhUBkg");
	this.shape_89.setTransform(57.6,113.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("AAMAQIgVACIgLgNQAAgFACgCIAHgJQACgBADAEIAGgBIAFgGQACAAADACQADACABgEIAGgCIABAQQgCAEgHANg");
	this.shape_90.setTransform(25.6,88.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#57677F").s().p("AgUAFQAAgFACgCIAHgJQACgBADAEIAGgBIAFgGQACAAADACQAAABABAAQABAAAAgBQABAAAAgBQAAAAABgBIAGgCIABAQQgCAEgHANIgVACg");
	this.shape_91.setTransform(25.6,88.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgKAQIgLgLQgBgEACgCQAIgJAAgCQAEAAACACQABAAAAABQABAAAAAAQABAAAAAAQABAAABgBQABAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABgFAFACQAGADAAgDQAAAAAAAAQAAgBABAAQAAAAABgBQABAAAAAAQAEgBACABIgdAjg");
	this.shape_92.setTransform(25.4,88.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(1,1,1).p("AgSgCIAHgJQACgBAEAEIAFgBIAFgGQACAAADACQADACABgEIAGgCIABAQQgCAEgHANIgVABIgLgMQAAgFACgCg");
	this.shape_93.setTransform(38,98.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#57677F").s().p("AgUAFQAAgFACgCIAHgJQACgBAEAEIAFgBIAFgFQACAAADACQAAAAABAAQABAAAAAAQABgBAAAAQAAgBABgBIAGgCIABAQQgCAFgHAMIgVABg");
	this.shape_94.setTransform(38,98.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgKAQIgLgKQgBgFADgCQAHgJAAgCQAEABACABQABABAAAAQAAAAABAAQABAAAAAAQABAAABAAQABAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQABgFAFACQAGADAAgDQAAAAAAAAQAAgBABAAQAAAAABgBQABAAABAAQADgBACABIgdAjg");
	this.shape_95.setTransform(37.8,98.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("AgSgCIAGgKQADgBADAEIAGAAIAFgGQADAAACABQAEACAAgEIAIgBIAAARQgCAEgHANIgWACIgMgNQAAgGADgCg");
	this.shape_96.setTransform(30.5,55.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#57677F").s().p("AgVAFQAAgFADgDIAGgJQADgBADAFIAGgBIAFgGQADAAACABQABABABAAQAAAAABAAQAAgBABAAQAAgBAAgBIAIgBIAAAQQgCAFgHANIgWACg");
	this.shape_97.setTransform(30.5,55.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgLARIgLgLQgBgFADgCQAIgJAAgCQAEAAACACQAGAFABgIQABgFAFADQAGACAAgCQAAgBABAAQAAAAAAgBQABAAABAAQAAgBABAAQAEgBACACIgeAkg");
	this.shape_98.setTransform(30.3,55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,1,1).p("AgGgJIAGAAIAFgHQADABACACQAEACAAgFIAIgCIAAARQgCAFgHANIgWACIgMgOQAAgFADgCIAGgJQADgCADAEg");
	this.shape_99.setTransform(94.2,100.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#57677F").s().p("AgVAGQAAgGADgCIAGgKQADgBADAFIAGgBIAFgHIAFADQABAAABAAQAAAAABAAQAAAAABgBQAAgBAAgBIAIgBIAAARQgCADgHAOIgWACg");
	this.shape_100.setTransform(94.2,100.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgLARIgLgLQgBgFADgCIAIgLQAEAAACACQAGAFABgIQABgEAFACQAGACAAgCQAAgBABAAQAAAAAAgBQABAAABAAQAAgBABAAQAEgBACACIgeAkg");
	this.shape_101.setTransform(94,100.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AAPgMIAAAMQgBACgFAKIgPABIgIgJQAAgEACgBIAEgHQACAAADADIADgBIAEgEQABAAACABQACABABgCg");
	this.shape_102.setTransform(34.1,78.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#57677F").s().p("AgOAEQAAgEACgBIAEgHQACAAADADIADgBIAEgEIADABQABAAAAABQAAAAABgBQAAAAAAAAQABgBAAAAIAFgCIAAAMQgBACgFAKIgPABg");
	this.shape_103.setTransform(34.1,78.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgHAMIgIgIQgBgDADgBQAFgGAAgCIAEACQAEADABgFQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQABABABAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAgFAHAEIgUAZg");
	this.shape_104.setTransform(34,78.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("AAKgKIAFgCIAAAMIgGALIgPACIgIgJQAAgEABgBIAFgHQACAAACADIAEgBIADgEQACAAACABQACABABgCg");
	this.shape_105.setTransform(45.3,95.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#57677F").s().p("AgOAEQAAgEABgBIAFgHQABAAAAAAQABAAAAABQABAAAAAAQABABAAABIAEgBIADgEQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAAAABgBQAAAAAAAAQABgBAAAAIAFgCIAAAMIgGALIgPACg");
	this.shape_106.setTransform(45.3,95.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgHAMIgIgIQgBgDACgBQAGgGAAgCIAEACQAEAEAAgGQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQABABABAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAgGAHAFIgVAZg");
	this.shape_107.setTransform(45.1,95.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("AgOAEQAAgEACgBIAEgHQACAAACADIAEgBIADgEIAEABQACABABgCIAFgCIAAAMQgBADgFAJIgPABg");
	this.shape_108.setTransform(31.9,89.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#57677F").s().p("AgOAEQAAgEACgBIAEgHQABAAAAAAQABAAAAABQABAAAAAAQABABAAABIAEgBIADgEIAEABQAAABABAAQAAAAABgBQAAAAAAAAQABgBAAAAIAFgCIAAAMIgGAMIgPABg");
	this.shape_109.setTransform(31.9,89.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgHAMIgIgHQgBgEACgBQAGgGAAgBIAEABQAEAFABgHQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQABABABAAQAAABABAAQABAAAAgBQAAAAAAgBQAAgGAHAFIgVAZg");
	this.shape_110.setTransform(31.8,89.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1,1,1).p("AADgDIACgBIAAAEIgCAEIgFABIgDgEQAAgBABAAIACgCIABABIABAAIABgCIABABQABAAAAgBg");
	this.shape_111.setTransform(33.5,59.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#57677F").s().p("AgFABIABgBIACgCIABAAIABAAIABgBIABAAIABAAIACgBIAAAEIgCAEIgFAAg");
	this.shape_112.setTransform(33.5,59.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgCAEIgDgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACgCIABABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABABIgHAIg");
	this.shape_113.setTransform(33.4,59.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("AAJAMIgPABIgIgJQAAgEACgBIAEgHQACAAACADIAEgBIADgEIAEABQACABABgCIAFgCIAAAMQgBADgFAJg");
	this.shape_114.setTransform(57.1,43.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#57677F").s().p("AgOAEQAAgEACgBIAEgHQABAAAAAAQABAAAAABQABAAAAAAQABABAAABIAEgBIADgEIAEABQAAAAABABQAAAAABgBQAAAAAAAAQABgBAAAAIAFgCIAAAMIgGAMIgPABg");
	this.shape_115.setTransform(57.1,43.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgHAMIgIgHQgBgEACgBIAGgHIAEABQAEAFABgHQAAAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQABABABAAQABABAAAAQABAAAAgBQAAAAAAgBQAAgGAHAFIgVAZg");
	this.shape_116.setTransform(57,43.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("AAFAHIgIABIgFgGQgBgCACAAIADgEQABgBABACIACAAIACgDIACABQABABABgCIADgBIAAAHg");
	this.shape_117.setTransform(87.3,67.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#57677F").s().p("AgIACQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIADgEQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIACAAIACgDIACABQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIADgBIAAAHIgEAHIgIABg");
	this.shape_118.setTransform(87.3,67.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgEAIIgFgFIABgDIADgEIADABQABABABAAQAAAAAAAAQAAAAAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAgBQAAAAAAAAQAAgFAFAEIgMAPg");
	this.shape_119.setTransform(87.2,67.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AAPAAQgBACgGAKIgOABIgIgJQgBgEACgBIAFgHQACAAACADQACADACgEIADgEQACAAACABQACABABgCIAFgCg");
	this.shape_120.setTransform(75.7,48.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#57677F").s().p("AgOAEQgBgEACgBIAFgHQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQACADACgEIADgEQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABgBQAAAAAAAAQABgBAAAAIAFgCIAAAMIgHAMIgOABg");
	this.shape_121.setTransform(75.7,48.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgHAMIgIgIQgBgDADgBQAFgGAAgCIAEACQAEADABgFQAAgBAAAAQABgBABAAQAAAAABAAQAAAAABAAQABABABAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAgFAHAEIgUAZg");
	this.shape_122.setTransform(75.5,48.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1,1,1).p("AgOAEQAAgEABgBIAFgHQACAAACADIAEgBIADgEQACAAACABQACABABgCIAFgCIAAAMQgBADgFAJIgPABg");
	this.shape_123.setTransform(62.3,77.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#57677F").s().p("AgOAEQAAgEABgBIAFgHQABAAAAAAQABAAAAABQABAAAAAAQABABAAABIAEgBIADgEQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABgBQAAAAAAAAQABgBAAAAIAFgCIAAAMIgGAMIgPABg");
	this.shape_124.setTransform(62.3,77.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgHAMIgIgHQAAgEACgBIAFgHIAFABQADAGABgIQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQABABABAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAgFAHAEIgUAZg");
	this.shape_125.setTransform(62.1,77.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("AAPgMIAAAMQgBACgFAJIgPACIgIgKQAAgDACgBIAEgHQACgBACADIAEAAIADgEQACAAACABQACABABgDg");
	this.shape_126.setTransform(68.6,84.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#57677F").s().p("AgOADQAAgDACgBIAEgHQABAAAAAAQABAAAAAAQABAAAAABQABABAAAAIAEAAIADgEQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIAFgBIAAAMIgGALIgPACg");
	this.shape_127.setTransform(68.6,84.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgHANIgIgIQgBgDACgCQAGgGAAgBQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAEAEABgGQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABABQABAAABAAQAAAAABAAQABAAAAAAQAAAAAAAAQAAgHAHAFIgVAZg");
	this.shape_128.setTransform(68.4,84.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1).p("AgxgTQABAKAMAJQAYAUAzABQAFABADgBQAHgBgIgJQgogpg3ALg");
	this.shape_129.setTransform(50.7,89);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E5E5E5").s().p("AAnAVQgzgBgYgUQgMgJgBgKQA3gLAoApQAIAJgHABIgDABIgFgBg");
	this.shape_130.setTransform(50.7,89);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAkAVQgvgBgWgUQgLgJgBgKQAygLAlApQAHAJgGABIgDABIgEgBg");
	this.shape_131.setTransform(52,89);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("AhKg5QAIASAXAYQAsAtBKAcIhLgbQhMgkACg0g");
	this.shape_132.setTransform(45.9,76.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E5E5E5").s().p("AAAAfQhMgkACg0QAIASAXAYQAsAtBKAcg");
	this.shape_133.setTransform(45.9,76.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("AguhGQAIAUAXAJQAIADAHALQAHAOAaALQARAGgBAaQgBAYAXALIAEAKIhLgcQhJgngBgtQAGgxAWAQg");
	this.shape_134.setTransform(45.9,74.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#A2BDDD").s().p("AAAAvQhJgngBgtQAGgxAWAQQAIAUAXAJQAIADAHALQAHAOAaALQARAGgBAaQgBAYAXALIAEAKg");
	this.shape_135.setTransform(45.9,74.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAAACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIAAAAg");
	this.shape_136.setTransform(44.5,51.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_137.setTransform(44.7,53.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("AAAAMIgGACQgCgBADgWQAFgFACABIAGAag");
	this.shape_138.setTransform(44.7,52.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFC757").s().p("AgFgJQAFgFACABIAGAaIgIgBIgGACQgCgBADgWg");
	this.shape_139.setTransform(44.7,52.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEgOIANAXIgBAEQgDABgFgCIgGADQgFgRAHgMg");
	this.shape_140.setTransform(44.6,52.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAAAGQgHAAACgGQABgGAFABQAHABgCAFQAAAGgGAAIAAgBg");
	this.shape_141.setTransform(44.3,43.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAAAGQgGgBABgFQABgHAFACQAHABgCAFQgBAFgFAAIAAAAg");
	this.shape_142.setTransform(44.6,46.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1,1,1).p("AABAjIgUAFQgHgCAJhBQAQgNAHABQAFAQAFARQAJAhgCALg");
	this.shape_143.setTransform(44.8,44.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFC757").s().p("AgRgbQAQgNAHABIAKAhQAJAhgCALIgWgDIgUAFQgHgCAJhBg");
	this.shape_144.setTransform(44.8,44.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgOgoIAoBBIgFALQgGADgOgHIgUAJQgOgyATgfg");
	this.shape_145.setTransform(44.5,45.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_146.setTransform(92.7,60.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAHgHgBQgFABAAgHg");
	this.shape_147.setTransform(43.5,61.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgGAAQAAgGAGABQAHgBAAAGQAAAGgHAAQgGAAAAgGg");
	this.shape_148.setTransform(45.9,64.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgGAAQAAgFAGgBQAGABABAFQgBAHgGAAQgGAAAAgHg");
	this.shape_149.setTransform(49.8,68.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgGAAQABgFAFgBQAHABAAAFQAAAHgHAAQgFAAgBgHg");
	this.shape_150.setTransform(54.6,70.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgGAAQAAgFAGgBQAGABABAFQgBAHgGAAQgGAAAAgHg");
	this.shape_151.setTransform(89.5,61.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1,1,1).p("AggAEQgJgMABgIQABgHBBgCIAQAXIgfANQgfAOgLABg");
	this.shape_152.setTransform(91.3,61.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFC757").s().p("AggAEQgJgMABgIQABgHBBgCIAQAXIgfANQgfAOgLABg");
	this.shape_153.setTransform(91.3,61.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#777777").ss(1,1,1).p("AhDAPQBRgJA1ANQgUgXgCgOIgrABQguAHgXAZg");
	this.shape_154.setTransform(59.9,57.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#ABB0B7").s().p("AhDAPQAYgZAtgHIArgBQADAOATAXQg1gNhRAJg");
	this.shape_155.setTransform(59.9,57.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1,1,1).p("AAoAYQgjAShCgEQAVgIASgOQAigbgMgbQAQACAQAHQAhAOgDAUg");
	this.shape_156.setTransform(79.9,73.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A2BDDD").s().p("Ag9AmQAVgIASgOQAigbgMgbQAQACAQAHQAhAOgDAUIgWATQgdAPgwAAIgYgBg");
	this.shape_157.setTransform(79.9,73.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1,1,1).p("Ag4AAQAuA6BdAQQABgCgBgGQgDgKgLgLQgEAAAEgLQAHgOgIgFQgCgCgwgSQgvgbgQgpIgmAQQAEAbAXAeg");
	this.shape_158.setTransform(49.9,66.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFC757").s().p("Ag4AAQgXgegEgbIAmgQQAQApAvAbIAyAUQAIAFgHAOQgEALAEAAQALALADAKQABAGgBACQhdgQgug6g");
	this.shape_159.setTransform(49.9,66.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1,1,1).p("AAbgIQggAPgtgDIAfAUQADAHAcgRQAggQAHgXg");
	this.shape_160.setTransform(80.8,77.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#57677F").s().p("AgTAYIgfgUQAtADAggPIAYgRQgHAXggAQQgTAMgIAAQgDAAgBgCg");
	this.shape_161.setTransform(80.8,77.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAGAeQgjgbAWgiIANANIgCARIAIAOQAGANgCAGg");
	this.shape_162.setTransform(57.6,70.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AhLAGIAKgMQAOgIAzABQAyABAMAJQAKAGADAGIAAAFQgagOh8AGg");
	this.shape_163.setTransform(60.2,59.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgcAZQgEgGAEgPIgMgSQAvgWAiAOIg5Ayg");
	this.shape_164.setTransform(89.8,61.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F7F6CD").s().p("AgUDKQAGgVgDgKQgKgNAAgJQAAgEAIgKQAMgVgMgWQgDgIABgOQACgQgDgHQgLgOABgNQADgLgBgGQgCgEgHgDIgMgGQgCgCgCgGQgGgGgLADQgNADgBAKQgKAEgMAOQgLARgJADQAFgMAHgKQADgEADgOQAGgBACgDIACgHIAMgJQAHgGgCgGQgCgHgMAAQgUAAgMAFQgLAFgFAAIgSABIARgGIAUgLIAOgJQAAgFABgCQAHgCACgDIADgeQABgKAagBQACgIgIgHQgLgJgBgFIgFgQIgHgOQgHgBgEgIQgEgHgIAAQACgEgDgCQARAIAoAcQAJALAFACQAGADAIgCQAJgDADAAQAGAEAEABQAKgCAFAAQAUAFALgBQAMgCACgJQABgNADgDQAIgJABgOQAEgMAAgHQAHACgDAuQgKADAIAIQAKAIACADQALgEAIABIAEAUQAFALAOgDIAYgKQAMgEAOAEQgKgBgRAKQgIAFgTAEQgGADgBAJQgBAKgEADQgBABgMACQgKABABAIQAAAHAHAOQgCAOAFAFQAMAOABAFQABAOAOAHQAVAMAEABIgNABQgFgCgOgKQgHgFgJgLQgIgNgUgFQgUgFAFAVQABAFAEACIAMACQAIAFgCACIgFAIQgBACAGANQAGAKgIABIgEgRQgLgEgCgEQgBgEADgGQgEgFgJgBIgDgJQgDgFgGgCQgRgFABAXQAAAMgEAGQgIALAAAEIABAQIgFANQgGAMAMAJQABAEgEAMIAEAKQAFARgEAIQgCADgHAJQgHAHAAAHQABADAFAIQADAGgBAGIgEAMIACAMQgEAFgDAAQgFAAgDgMg");
	this.shape_165.setTransform(59.3,80.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F7F6A2").s().p("AgkGjQgCgLAFgVQAFgVgCgLQgSgcAAgSQABgFAMgZQAXgpgWgvQgHgQADgeQADgggFgOIgMgbQgHgOAAgPQAIgYgDgMQgDgKgOgIIgUgMQgEgEgCgNQgMgKgTAFQgXAGgDAWQgRAGgVAhQgVAjgPAGQAJgYANgWQAEgHAHghQAKgBADgHIAFgOQAPgLAGgHQALgOgDgMQgEgOgTgBQglAAgVALQgIAEgFAEQgEADgLAAIghADIAegNQAFgCAggWQAVgPACgDQAAgKADgEQAMgFACgFQAGgMABgTIAAggQACgSANgDIAhgBQADgRgOgPQgTgTgDgJQgBgUgHgNQgNgaAAgDQgLgDgIgRQgHgOgNABQACgJgFgFQAfARBGA5QAPAXAKAFQAKAFAOgEQARgFAFABQAKAIAHABQATgEAIAAQAkALAVgDQAVgEACgTQAEgaAFgHQAPgSABgeQAGgZgBgNQAOAEgGBeQgRAHANAQQASASAEAFQAHACAKgEQAKgFAHACQAFAlACAEQAIAXAagIIAqgSQAWgKAYAIQgTgCgdAVQgOAKgiAIQgLAHgCAUQgCAUgFAFQgDADgWAEQgRADABAQQABAGAHANQAHAMgCALIgEAWQAAAIAJALIAPARQAHAIABANQAEAfAWAPQAjAZALACIgXACQgGgCgcgWQgNgLgPgZQgOgcgjgJQglgKAIAqQADAMAIAEQAMADAIADQAOAKgDAFIgJAPQgBAEALAbQAJAVgNADIgIgjQgTgKgDgIQgBgCAFgIQAEgGgEgEQgEgFgIgDQgIgDgEgEIgGgSQgDgKgNgFQgUgHgGAPQgCAIABAYQABAZgIANQgPAVAAAKIACAgQgCAMgIAOQgHAPAIAKQAKANABAHQACAJgIAYIAHAWQAJAhgHARQgCAGgQATQgNAOACAPQABAHAJAQQAGAMgDANIgGAZQgBAFADATQgHAKgFAAQgIAAgFgYg");
	this.shape_166.setTransform(60.4,90);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FC8535").s().p("AAMJTQgDgogLgdQgQgkADggIAFgZQgCgMADgMIADgFIgEAdQACAMAIANQAUAhADAJQAHAbgPAyQgBAKAEAkQADAdgFAPQgCgwgCgYgAgFGFQACgbgTgmQgVgqgBgXQgBgKAFhNQADg4gMgdQgRgrglgiQgqgmgrACQgQAAgcANQgeANgJAMQACgGALgJQALgKABgHQADgKgDgSIgEgeQADgmgDgMQgDgSgggGQgPgDgmAFQgqAFgFAKQAIgQAUgLQAdgQAFgDQANgLABgDQADgNAEgIQAZg1AbgYIAfgTQASgKAFgTQAOgxgtgtIglglQgUgVgFgVQgEgMACgbQABgagEgMIgQghQgIgSADgUQAKANAeAzQAYArAUAUQAMANAWAJQAbAJAJAHQAFAEAYAcQAQAUATAAQARACASgNQAVgPAKgBQAHgBAHABQADABAgAXQAYAPAVgLQAXgMgHgZQgHgcAMgMQAPgNAcAKQAgAMAPgFQAUgIAFgPQAEgKAAgcQAAgwAdgoQACATgKAcQgKAcAAAOQAAATAhAkQADAEABAOQABALAHAHQAIAHAMABQAPABAFADQAFACAVAbQADAVATAOQAdAIAKAEQgTARgEAXIgDAuQgdADghApQggAoACAdQABAKAKAPQAKARABAJQACALgHAVQgGATACAKQADAKAOAQQAPAPADAKQgrgHgJADQgHACgEALQgDAKgMADQgFABgZgFQgUgEgGAHQgQAPAWAOIAjASQAYARgFAJIgPAcQgBAGASAvQAOAlgVAGQgCgrgMgTQgEgFgPgKQgOgIgDgIQgCgFAIgMQAGgMgFgGQgHgKgOgFQgOgGgGgKIgJgdQgFgRgVgJQg2gTgMBbQgCARAABrQAAAkgWAyQgKAUAAAWIABAsQgBAXgLAQQgJAQgEANIABgPg");
	this.shape_167.setTransform(59.2,98.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF6F00").s().p("Ag5PCQgMgNgFgdQgEgYAKguQALgtgGgYQgCgNgTgjQgPgdABgWQAAgMAag0QAuhbgshlQgPgiAHhCQAGhGgJgeQgmhDgBg2QAPg1gGgZQgGgagcgPQgmgXgDgEQgCgDgBgOQgCgNgGgGQgJgJgVgDQgTgDgOAEQgZAHgTAhQgXAlgQAKIgfAJQgRAFgIATQgEAKgDAZQgCAQgOAOQgaAZgaAKQgFgUALgLIAVgUQADgHAJgqQAHggAPgPQAdgUAPgZQAigqASgZQAXgegIgcQgHgegmgBQhKgBgrAYQgQAJgKAJQgHAGgYABIhBAFQALgKARgGIAfgLQAZgLAdgZIAygqQAegXAJgOQAEgIALgqQAHgYAmgTQAngUAIgeQAKgkgagVQgHgGgSgLQgPgLgHgKQgVgcAGgxQAKhHgBgHQgDgegegiQgogqgHgPQgFgKgIgeQgGgVgQgRQgKgLgagUQgUgSAAgVQAaACAOAkIAogBQAZACALAOQAKALgDAfQgDAhAGALQAGAOAbATQAZATAIAQQgBAhAIAJQAKAKAJAAQAPAAAHADQAhANAfAmQAkAtATAMQAWAPAIgOQAOgXAHgDQALgGAQgCQANgBAjAEQAfADAPgEQAhgOAXgDQAaABALgBQATgCAMgSQAKgNADgjQACgjALgPQAWgdAEgQQAFgOADgsQAAgKAGggQAEgZgBgRQAcAJgMDMQghAQAZAjQAlAlAIANQAMADAVgKQAUgJAPAEQALBSACAIQASAwAzgQQAVgGAZgNIAngVQArgVAxARQgdgDgXANIgsAfQgOALgiAJQgjAJgNAKQgWARgEApQgFAsgKALQgGAIgQADIgcAEQgiAGACAjQABANAPAdQANAbgDAXQgDAVgFAZQgCAUATAXIAfAlQAOASADAbQAHBFAtAiQBGA0AVAFIgSAFQgSADgKgEQgQgFgUgRIgggdQhAg2gGggIACguQgBgbgagDQgTgCgqAdQgPAFgaADQgRAGACAcQACAYATALQAbAIANAJQAdAUgHALIgKANQgGAKgDAMQgBAIAWA6QASAsgaAIQgCg1gPgXQgFgIgTgLQgQgKgDgJQgDgGAKgQQAIgOgHgJQgIgKgRgIQgRgGgHgNIgLglQgHgVgagKQgqgQgKAhQgGARACA3IACAqQgBARgOAWQgJAOgNAPQgIAOAAAZQAAAHAEAbQACAVgBAOQgFAagTAgQgNAfAQAVQAWAeACANQACAKgIAaQgHAaABAMQABARALAdQAVBHgPAmQgEANghAoQgcAfAFAhQACAPARAjQANAbgGAcQgDASgKAiQAAAFAEAXQAEAUgDAFQgLASgLAAQgGAAgGgGg");
	this.shape_168.setTransform(63.7,107.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#515151").s().p("AhPPNQgIggAQhIQAVhYABgTQABgbgFhYQgEhIAHgsQAEgZgEgdQgHgigCgVQgDgWAEg2QADgygEgYQgDgRgSgWQgSgVgDgTQgDgVACglQACgrgBgPQgBgcgkgxQgmgzgdgCQgKgBgqAZQgnAYgJAHQgFAFgJASQgHAOgLAGQgIAEgUAFQgQAFgMAJQgLAJgbAmQgXAigQAHQgaALgZggQgcgigYAFQALgJAYABQAOAXAUAKQAYAMATgQQAEgEADgUIAEgZQAGgTAOgVQARgSAJgSQADgaAKgRQALgRAWgQQAZgRALgKQAygsgzgVQgqgRg4AIQgPACgcAMQgaAKgSABQgGABgTgDQgPgCgKADQgHACgNAKQgMAJgJACIgMADQAQgWAcgIQAhgGARgGQAmgLAmgyIAYgaQAOgRAEgNQACgJgCgXQgCgWAFgMQACgGAKgMQAIgJAAgNQABgXgWgRQgZgUgDgOQgFgSAKgDQAGgCAUAEQAtAJAFgcQAHgigogQIg9gWQgKgHAAgOQABgSgEgGQgBgCgXgPQgRgMAEgJIABgEQAWgBATAPQAYAUAJADQAWAIAMgHQAOgNAOgJQAEgcgNgWIgZgpQgGgQgEgjQgDgHgKgLQgKgKgCgIQgEgNgNggQgIgcAIgPQAMAHAHAUQAJAYAFAHQAZAMAIAJQgDAQADAFIAdAeQAPARACAFQACAIAGAPIAPAiQALANAyAUQAmAQADAgQgCgaBVAuQAdAKARgTQASgTgKgfQgEgLgLgLQgMgLgDgKQgFgPAIgPQALgQACgJQALgigHgYQgDgLgWgqQgUgmAFhfQAQgFAQAFQgEA+AFAdQADASANAeQAOAiADANQAGAVgKBBQgIA5APAZQAQAaAsAEQAcADAMgMQAWgVAKgFIAlgIQASgEAIgVQADgKgEgYQgEgYAEgJQAFgKAVgLQAWgNAGgIQAHgLAAgRIACgeQAFgWAQgnQAEAlAEATQATAtAGAWQAGAWgFAZQgCAMgNAdQgCAiAeAQQAtAXAIAKQgEAUADAFQAEAFAMAGQAMAFAEAFQAQAVADAUQAIABA4gEQAogCATANQAsg2A9BGQgmgJgWALQgMAGggAfQgUAVgcABIg4ADQg9ANgHA8QgFAiAKBMQABAQgIAfQgJAigBAOQgCAdAOAQIAcAhQAEAHABAPQACAOAEAHQAVAIAGAJQAIAMgBASQAGASAGAlQAFAOATAYIAJAPQgqAFhfhpIgggfQgYgUgSAJQgXANAKAWQAJAYAcgHQACArgHByQghAGgRgjQgKgTgPgqQgEACgLACQgHgHgfgvQgaglgPgDQgNAcADAyIAFBSQgBAdgRAUQgXAYgFARQgIAXAKAlQAIAjAQAUQAcAeADAJQAFALgcAXQgbAXgFAQQgEAMAEApQACAdgNAQQgWAZgFAMQgHAWACAkIAEA7QgBATgJAbQgMAbgBATQgBAXAHAxQAGAugDAbQgEAlgcAGIgHAAQgWAAgJggg");
	this.shape_169.setTransform(61.2,105.2);

	this.addChild(this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,138.9,225);


(lib.UFO_pic = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAuBSIhcij");
	this.shape.setTransform(48.7,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("Ag9B6IB7jz");
	this.shape_1.setTransform(-46.7,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,1,1).p("AIXB6IwtAAIAAjzIQtAAg");
	this.shape_2.setTransform(-0.5,-27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AoWB6IAAjzIQtAAIAADzg");
	this.shape_3.setTransform(-0.5,-27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424F63").s().p("Ai0BdQASgRAHgPQAVguhjAAIC8gYQDKglBNg9QgaAyhDA0QiHBmjLAKg");
	this.shape_4.setTransform(27.3,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C9C8C7").s().p("Ag0AcQAHgLABgKQABgeg/gLIBGgCQBQADA/AWQgyAuhzACg");
	this.shape_5.setTransform(5.2,-8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFAwQgHgUAAgTQABg5BHgQQgVAMBmAUQgjAJgiARQhEAggCAng");
	this.shape_6.setTransform(-23.9,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5AIIgXgRQAbghA0gEQgxAnA7AeQAfAQApAIQhggRgqgWg");
	this.shape_7.setTransform(-41.5,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B5632").s().p("AgWAAQAAgWAWAAQAWAAAAAWQAAAXgWgBQgWABAAgXg");
	this.shape_8.setTransform(31.6,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B5632").s().p("AgVAAQgBgWAWAAQAXAAAAAWQAAAWgXAAQgWAAABgWg");
	this.shape_9.setTransform(21.3,4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B5632").s().p("AgVAAQAAgWAVAAQAWAAgBAWQABAXgWAAQgVAAAAgXg");
	this.shape_10.setTransform(7.1,6.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B5632").s().p("AgWAAQAAgVAWAAQAXAAgBAVQABAVgXAAQgWAAAAgVg");
	this.shape_11.setTransform(-7.3,7.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6B5632").s().p("AgXAAQAAgTAXAAQAXAAAAATQAAAUgXAAQgXAAAAgUg");
	this.shape_12.setTransform(-21.9,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B5632").s().p("AgTAAQAAgSATAAQAUAAAAASQAAATgUAAQgTAAAAgTg");
	this.shape_13.setTransform(-35,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#777777").ss(1,1,1).p("Aj8BaQjCgYhnhDIgCgMQACgMAPgEQAcAbBPAXQCdAzD8gHQEGgHChhBQB2gyAKgtQAbADgLAnQgFARgrAcQgyAehKAbQjJBHj9gMQhNABhigMg");
	this.shape_14.setTransform(0,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E5E5E5").s().p("AhNBlQhNABhigMQjCgYhnhDIgCgMQACgMAPgEQAcAbBPAXQCdAzD8gHQEGgHChhBQB2gyAKgtQAbADgLAnQgFARgrAcQgyAehKAbQirA9jRAAQgkAAgmgCg");
	this.shape_15.setTransform(0,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A2BDDD").s().p("AldBrQA+gNC6ggQCbgaBfgXQgFgNAAgcQAsgUAGgWQAFgWgjgTQC8ARgCAmQgBAPgdAZQghAag1AZQiMBCjAAIQg4ADg0AAQhLAAhEgFg");
	this.shape_16.setTransform(19.2,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5D7591").ss(1,1,1).p("AlXgLQBnAoDQgFQDsgEBwgwQAwgVAHgYQAHgYgmgTQDFARgCAoQgBAQgeAaQgjAbg4AbQiTBFjLAJQjsAKiggdQiogeghhCIAggTQAsgYA1gKQADAGAJAIQARAPAhANg");
	this.shape_17.setTransform(0.1,8.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C0D8F9").s().p("AlNBgQiogeghhCIAggTQAsgYA1gKQADAGAJAIQARAPAhANQBnAoDQgFQDsgEBwgwQAwgVAHgYQAHgYgmgTQDFARgCAoQgBAQgeAaQgjAbg4AbQiTBFjLAJQg+ACg3AAQihAAh2gVg");
	this.shape_18.setTransform(0.1,8.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D39C39").s().p("AhcAUIhDhSQBQgTAfgeQDDA/ANAsQAHAXg5AiQg+AjhkAYQgGgqgigyg");
	this.shape_19.setTransform(22.9,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#7F5812").ss(1,1,1).p("AmVAVIAvgtQA/g1BNggIApAYQA9AWBhgEQBggEBCgdQAigPANgNQDKA/ANAuQAFASgeAWQghAag7AXQiTA4jJADQi6AChig2QgxgcgMgcg");
	this.shape_20.setTransform(-1.7,2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC757").s().p("AlYBNQgxgcgMgcIAvgtQA/g1BNggIApAYQA9AWBhgEQBggEBCgdQAigPANgNQDKA/ANAuQAFASgeAWQghAag7AXQiTA4jJADIgQAAQiuAAheg0g");
	this.shape_21.setTransform(-1.7,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#777777").ss(1,1,1).p("AisgZQBEgfBSAAQDWAAAeA0QAHAMguARQgwAThFAIQi2AVhqhGg");
	this.shape_22.setTransform(-2.6,-7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5E5E5").s().p("AjeADIAygcQBEgfBSAAQDWAAAeA0QAHAMguARQgwAThFAIQgrAFglAAQh/AAhRg2g");
	this.shape_23.setTransform(-2.6,-7.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2F3A49").ss(1,1,1).p("AinB9QDwASCVgmQDcg4BhizQhBAjhcAjQi3BDiHgCQjVgFmFhRQAgAwA+AvQB+BkCXALg");
	this.shape_24.setTransform(0,19.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#57677F").s().p("AimB9QiYgLh+hkQg+gvgfgwQGEBRDVAFQCHACC3hDQBcgjBAgjQhhCzjbA4QhmAaiPAAQhDAAhMgGg");
	this.shape_25.setTransform(0,19.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#7F5812").ss(1,1,1).p("Ai+ANQAPAYAaADIEmgFIAdgHQAcgOgCgdQgCgzmNA5g");
	this.shape_26.setTransform(1.9,32.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5E5E5").s().p("Ai+ANIgJgWQGNg5ACAzQACAdgcAOIgdAHIkmAFQgagDgPgYg");
	this.shape_27.setTransform(1.9,32.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#7F5812").ss(1,1,1).p("AhwAIQAQATAWAAICeAAQAygNgNgbQgNgcjnAfg");
	this.shape_28.setTransform(2.4,36.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E5E5E5").s().p("AhKAbQgWAAgQgTIgLgSQDngfANAcQANAbgyANg");
	this.shape_29.setTransform(2.4,36.6);

	this.addChild(this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.2,-40.3,112.5,80.7);


(lib.turboText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("TURBO", "11px 'Arial'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 40;
	this.text.setTransform(20,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,16.2);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#515151").s().p("AhvLGQB9hMASiPQAGgvgDhXQgDhqACgnQAEhdgGiIQgJi+AAggQgDjGAricQgVhYgmhCIBaA8QgSAtgNAxQALAvAHA1QANBkAACrQAABAgZCyQgWCWANBVQADAYAeBAQAYAygHArQgFAdgfAjQghAkgGAYQgHAZAEA2QAEA6gDARQgGAiggAAQglAAhFgmg");
	this.shape.setTransform(300.4,397.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AhJJBQAHgbAVg4QAQgzgEgkQgGg4gUgyQgLgbgUgsQgOgkAGgkQAIgtAmhDQA9htACgpQABgjguiAQgrh0ACh0QAChjAniGIA6BaQg7BjAPCdQAFA/A4BkQA5BiADAzQAEBFg8BIIguA8QgZAjgIAiQgNAxAWA9QAeBWACAOQAJBAgKBkQgLCMgBAXQhdg6Aahig");
	this.shape_1.setTransform(190.4,94.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#515151").s().p("AgeEsQABgigRgsQgYg9gDgMQgLgtANgvQAMguAtgtQAkgnAAguQAAgPgQgQQgSgSgJgKQgfglArgzQgGguAIhbIAACHIgCACQACANACAKQANAyBIBLIhACNQgqBoADAlQADAeAWAuQAeA5AEALQAMAjgTAVQgXAahHAOQAhg5ACgvg");
	this.shape_2.setTransform(159.2,319.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#515151").s().p("AA8NnQAMgPAKgRIADgiQADgyAIgqIgMgQQgeglgBgUQAAgQAgguIArg7Qg+g2g/hGQhRhbgTgzQgVg2AKiBQAPi1AAgQQgBgkAPhAQAQhDAAgYQABg8gIgVQgGgRgcg4QgTgqgNguQBCBjBrBDQhLCCgHBNQgEAyAaBAQAdBJACAdQADApgcAxQgfA0gBAWQgEBdBTA6IBQAzQA0AgAgAhQg5BlgVBBQgMAngIAwQARAYgBAHQgDAygbAtQgGBHgKASQgUAnhRAMQBDhJAcgjgAidpTQhBh3A3hTQgBhEAAhxIAtCHQgbAVgRAZQABA5ACAZQAHBSAVBJQgLgRgKgSg");
	this.shape_3.setTransform(19.4,158);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#515151").s().p("AA4QuQAHhDgNiBQgMh0AOhKQAPhQgEhyQAHAOAOAVQAcApAEAYQAJAvgJBPIgQB+QgDAlAJB5QAJCHgBBFQgEEAh6ASQAoiCAckWgAA3HTQgHgqAHgyQAGA9ACA2QgHgOgBgJgAAwE9QgRh/gIhBQgMhwAAhRQAAhQAWjPQATi1gHhWQgDgjgYhcQgRhBAJg/QAGgkAPgvQAJgpgQg2QgPgxghg6IhChjQhVh9gHhbIEbDDQhtA3AlCBQALAnAiBEQAjBIAIAYQAZBNgMAiQgdAxgTBEQgUBIAbBAQAoBMASA6QAWBLAJBtQAKBygLBLQgJA1gZBGIgvB5QghBVgIBGIgHg6g");
	this.shape_4.setTransform(397.3,147.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#515151").s().p("AiIUWQAIgqAtiwQAgh7AAg0QAAghgJhPQgIhHACgpQADg4AWgsQAghFAEgLQAdhlANkDQAJiugBgbQgChrgjhRQgthsgChCQAAgTASinQAYjlgIivQgDgzgYhBIgthtQg0iBAwhdQAMgZA9g9QAsguABg0IBLgPQhTAxgmBgQgmBaAHBqQAIBpAwBWQA1BbBWAmQiEBTgKDPQgEBHALBrIARCjQAFA8AlB/QAiB2AAA1QAAAigOBvQgKBYAJBEQAMBdgNBAQgNA9gvBbIgsBTQgSAhgEATQgGAfAnBwQAyCHgxDwQgMBDgfCFQgZB1gFBPQh8hOA4kTg");
	this.shape_5.setTransform(79.6,323.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#515151").s().p("AhRV+QgTjXAxiSQAEgLAegvQAUgiABguQABgbgWg0QgXg0ABghQABg7AsiWQApiEgNheQgEgfgcg5QgZg5gCgVQgEghAUgyQARgxgEgfQgEgqg2gyQg9g4gMggQgVg1AWiKQAKhDBQjrQAZhKgDhfIgGixQAAgQgDhMQgDg9AFgYQADgOAngOQAogNABgLQABgVgUgWQgUgWgBgKQgDgrgMhLQgIg9ABgcQAChTBrhRIAegtQhGCWgXCBQglDQB9AXQhbBagFBlQgDAnAKA4IATBoQALBAgYCTQgWCOASBUQg5AegCBIQgCA4AgBeQAUA2AuBrQAlBZADAtQAGB+gnDkQgqDyAABxQAABhgkBuQgsCLgIA3QgOBaAWCtQAWCogTBgQgxk1gEgug");
	this.shape_6.setTransform(248,246.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,415.6,488.6);


(lib.star = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AAAAVQgHAAgHgGQgGgHAAgIQAAgHAGgHQAHgGAHAAQAIAAAHAGQAGAHAAAHQAAAIgGAHQgGAGgJAAIAAAAg");
	this.shape.setTransform(2.1,2.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,4.3);


(lib.score_txt = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("", "16px 'ComicSansMS-Bold'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 30;
	this.text.setTransform(-2,-13.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-13.5,34,27);


(lib.playGamemedium = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play\nMedium Difficulty", "bold 22px 'Comic Sans MS'", "#FC7807");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 200;
	this.text.setTransform(100,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AwEE/IAAp+MAgJAAAIAAJ+g");
	this.shape.setTransform(102,33);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,206,89);


(lib.playGamehard = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play\nHard Difficulty", "bold 22px 'Comic Sans MS'", "#FC7807");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 188;
	this.text.setTransform(94,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Au/FYIAAqvId+AAIAAKvg");
	this.shape.setTransform(96,32.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,192,101);


(lib.playGame = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play the game", "bold 24px 'Comic Sans MS'", "#FF6600");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 228;
	this.text.setTransform(114,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AyMEsIAApWMAkYAAAIAAJWg");
	this.shape.setTransform(116.3,28.6);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-1.4,233,61.5);


(lib.playagain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play again?", "bold 16px 'Comic Sans MS'", "#FF6600");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 195;
	this.text.setTransform(97.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvfCPIAAgSIgMAAIAAkMIfXAAIAAEMIgBAAIAAASg");
	this.shape.setTransform(99,13.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-0.9,201,28.8);


(lib.plane = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAgvQAHgKAHgDIAFgCQgTAZgKAzQgGAbgCAWQABhPARgfg");
	this.shape.setTransform(-0.6,-10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRgtQAeAzAGAog");
	this.shape_1.setTransform(14.1,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAVQAOgiAcgjIgzBhQACgKAHgSg");
	this.shape_2.setTransform(-12.4,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDB040").s().p("AgmA1IAIgaQAYATAYgyQAIgQAHgVIAGgSQgOBjggARQgHADgHAAQgJAAgIgHg");
	this.shape_3.setTransform(-13.4,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDB040").s().p("AAEAoQgYgXgIhCIAOAlQARAiAUgMIAGAoIgDAAQgKAAgMgKg");
	this.shape_4.setTransform(14.9,7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDB040").s().p("AAHB0QgqgEgLgjQgEgMAAgNIABgKIAGAJQAIAJAIAGQAZAVAPgUQARgUgChTIgFhRQAcA1AAB7QAAArgXAMQgHADgHAAIgHgBg");
	this.shape_5.setTransform(0.9,-5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AADAHIgFAAIAAgMIAFAAg");
	this.shape_6.setTransform(-1.6,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAHIAAgNIAFAAIAAANg");
	this.shape_7.setTransform(-1.6,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("AADAHIgFAAIAAgNIAFAAg");
	this.shape_8.setTransform(-2.9,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAHIAAgNIAFAAIAAANg");
	this.shape_9.setTransform(-2.9,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.3,1,1).p("AAEAFIgHAAIAAgJIAHAAg");
	this.shape_10.setTransform(-0.4,13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAFIAAgJIAHAAIAAAJg");
	this.shape_11.setTransform(-0.4,13.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.3,1,1).p("AADAIIgFAAIAAgPIAFAAg");
	this.shape_12.setTransform(1.1,13.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAIIAAgPIAFAAIAAAPg");
	this.shape_13.setTransform(1.1,13.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("AADAGIgFAAIAAgLIAFAAg");
	this.shape_14.setTransform(5.8,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCAGIAAgLIAFAAIAAALg");
	this.shape_15.setTransform(5.8,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("AAEAGIgGAAIAAgLIAGAAg");
	this.shape_16.setTransform(3.6,14.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDAGIAAgLIAHAAIAAALg");
	this.shape_17.setTransform(3.6,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.3,1,1).p("AADAFIgFAAIAAgJIAFAAg");
	this.shape_18.setTransform(3,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAFIAAgJIAFAAIAAAJg");
	this.shape_19.setTransform(3,12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.3,1,1).p("AADAGIgGAAIAAgLIAGAAg");
	this.shape_20.setTransform(1.2,11.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCAGIAAgLIAGAAIAAALg");
	this.shape_21.setTransform(1.2,11.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.3,1,1).p("AAEAGIgHAAIAAgLIAHAAg");
	this.shape_22.setTransform(-0.4,11.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAGIAAgLIAHAAIAAALg");
	this.shape_23.setTransform(-0.4,11.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.3,1,1).p("AAEAHIgHAAIAAgNIAHAAg");
	this.shape_24.setTransform(-4.5,13.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAHIAAgNIAFAAIAAANg");
	this.shape_25.setTransform(-4.5,13.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.3,1,1).p("AgEgGIAJAAIAAAMIgJAAg");
	this.shape_26.setTransform(-2.6,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_27.setTransform(-2.6,12.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AgcAAQANBYAtgBQAEgGgGgZQgMgxguhdIgBAcQAAAhADAZg");
	this.shape_28.setTransform(14.8,3.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FCD054").s().p("AgcAAQgDgZAAghIABgcQAuBdAMAxQAGAZgEAGIgBAAQgsAAgNhXg");
	this.shape_29.setTransform(14.8,3.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AgdAoQAXg1AyhIIgCAgQgEAmgIAcQgXBfgygcQACgNAMgbg");
	this.shape_30.setTransform(-13.2,2.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCD054").s().p("AgrBQQACgNAMgbQAXg1AyhIIgCAgQgEAmgIAcQgSBJghAAQgKAAgMgGg");
	this.shape_31.setTransform(-13.2,2.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AgbhZIgRBKQgPBOAMAbQAIAPAQAJQAOAJAPAAQAoABAFgoQAFgxgKhIQgLhRgVgEQgRgDgOARQgHAKgDAJg");
	this.shape_32.setTransform(1,-5.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FCD054").s().p("AAGB7QgPAAgOgJQgQgJgIgPQgMgbAPhOIARhKQADgJAHgKQAOgRARADQAVAEALBRQAKBIgFAxQgEAngoAAIgBAAg");
	this.shape_33.setTransform(1,-5.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C1C1C1").s().p("AgkBcIAehWQAehVANgMIgCAeQgCAkgHAbQgSBagoAAIgEAAg");
	this.shape_34.setTransform(-11.6,2.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C1C1C1").s().p("AgdBxQgKgGgIgLIgGgJQAMg0APgyQAbhpALgBQAHgBALAdQAMAeAGAmQATBjgjAfQgTARgRAAQgNAAgMgJg");
	this.shape_35.setTransform(2.5,-3.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("ABBh8QAhAsAVArQAiBEAZBiIABAHQABAJgCAHQgEAWgXgIQgsgVgcgNQg1gYghADQghACgwATQgwAUgLABQgWABgHgPQgHgQANgWIBUiYQATgbAVgcQAqg5AMgEIAdAHg");
	this.shape_36.setTransform(0,-0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D8D8D8").s().p("ACXCmIhIgiQg1gYghADQghACgwATQgwAUgLABQgWABgHgPQgHgQANgWIBUiYIAog3QAqg5AMgEIAdAHIAcAkQAhAsAVArQAiBEAZBiIABAHQABAJgCAHQgDAQgNAAQgFAAgGgCg");
	this.shape_37.setTransform(0,-0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AhmAAIAGAEQAHAHALAHQAgATAuAAQAvAAAfgNQAYgJABgLQACgIgtgRQgwgTgdAFQgbAFggAQg");
	this.shape_38.setTransform(0.3,12);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1A2D3D").s().p("AhOASQgLgHgHgHIgGgEIAagOQAggQAbgFQAdgFAwATQAtARgCAIQgBALgYAJQgfANgvAAQguAAgggTg");
	this.shape_39.setTransform(0.3,12);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AgYgIIADANQAGAOAPAAQAPAAAGgLQAGgIgDgNQgDgJgVAGg");
	this.shape_40.setTransform(0.5,16.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FCD054").s().p("AgVAFIgDgNIAYgIQAVgGADAJQADANgGAIQgGALgPAAQgPAAgGgOg");
	this.shape_41.setTransform(0.5,16.1);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38.1);


(lib.meteor_pic = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#878C91").s().p("AARAcQgWgEABgFQAEgTgJgOQgIgMgDgCQgDgDgEAFQAAgGADgGQAEgNAIgBQAHAAABAKQABAOABACQAEAHAPgQIgEAUQgCAUAFAJQAHAOAFAZg");
	this.shape.setTransform(-3.3,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#878C91").s().p("AgDAEQgIgGgCgGQgDgGAAgNQAAgKACgFIADgDQAQgDAJgIIgEAGQgKASAHAKQAIAMACAWQABAYgIAHQgKAKgHAEQAMgqgIgLg");
	this.shape_1.setTransform(-4.7,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#878C91").s().p("AgRA/QAFgKgDgDQgDgEgGgDIgFgCQAdACAHgQQAEgLgLgIQgMgIgIACIASgJQAXgPAAgMIgBgiIAGADQAFAFgBALIgDBCQgBAMgVALQAFAMgIAGQgDADgIADQgIADgCACIAAAAIACgGg");
	this.shape_2.setTransform(6.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383C42").s().p("AgIAAIAAgJIAGAFIALgNQgIARgBATQgHgHgBgMg");
	this.shape_3.setTransform(1,-11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383C42").s().p("AgnAcQAFgNAIgBIAggDQAZgEAAgMQABgOAGgMIAFgKIgBANQgBAPABAJQADASgaAKQgMAEgQgDQgQgDgCADQgHAFgIAMIADgOg");
	this.shape_4.setTransform(3.3,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383C42").s().p("AAAAEQgEgEgGgMIgFgLQANgFAAgQIACAOQACAPAIAGQAMAJgNAtQACgegLgLg");
	this.shape_5.setTransform(-6.5,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383C42").s().p("AAKARQgQgEgRgUIAUgJIAEARQAJATAOgEQgDABgEAAIgHAAg");
	this.shape_6.setTransform(1.7,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AAZiPIgTAUQgEgEgCgEQgIgHgEAEQgVAbgQAFQgJAEgEAEIgCAEQgCAWgOAHQgQAHAAAiQAAAGAMANQALALgCAJQgCAOACARQACARAGAAQAEAAAFgEQAFgCAGALQAMATgCASQgBAHAXACQAJAcAEAAQACAAATgtQAMAAAHgKQAEgHAFgCQAEgBAMgEQAQgHgGgQQAVgKABgbQADg+gCgDQAAgCgHgGQgGgFAAgIQgBgEADgKQACgGgEgIQgWgsgPgBQgDAAgKgDQgFgBgDADg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ABB0B7").s().p("AgPB2QgXgCABgHQACgSgMgTQgGgLgFACQgFAEgEAAQgGAAgCgRQgCgRACgOQACgJgLgLQgMgNAAgGQAAgiAQgHQAOgHACgWIACgEQAEgEAJgEQAQgFAVgbQAEgEAIAHIAGAIIATgUQADgDAFABIANADQAPABAWAsQAEAIgCAGQgDAKABAEQAAAIAGAFQAHAGAAACQACADgDA+QgBAbgVAKQAGAQgQAHIgQAFQgFACgEAHQgHAKgMAAQgTAtgCAAQgEAAgJgcg");

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-15.7,21.5,31.4);


(lib.livesMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5A5A5").s().p("AgjAVIg2gpICVAAIAeApg");
	this.shape.setTransform(9.1,2.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,4.3);


(lib.indicator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{correct:1,incorrect:14});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_13 = function() {
		/* gotoAndStop(1);*/
	}
	this.frame_27 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(14).call(this.frame_27).wait(1));

	// 图层 1
	this.text = new cjs.Text("Good Job!", "50px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 262;
	this.text.setTransform(131,0);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},12).wait(1).to({_off:false,x:132,y:31,text:"You shot the wrong ufo!",font:NaN,lineHeight:51,lineWidth:338},0).to({_off:true},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hiddenHitTest = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AoWF8IAAr3IQtAAIAAL3g");
	this.shape.setTransform(53.5,38);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,76);


(lib.fire2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F78D19").ss(0.5,1,1).p("AgFADQgVAjACAUQATgXAGgJQgIAgAHAmQgBgBgBAAQgFALAAAHQAegugEgsQgBAAgFAFQgCgeAAgFQAJglgBgRQgBgBAAABQAMgtgHgDIgKgDQgNA8gOAeQAGgGACgDQACAJgFAPQgFANAAAIQAEgDAFgIIABgC");
	this.shape.setTransform(-7.3,-21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6F00").s().p("AgCBfIACABQgHgnAIgfIgZAgQgCgUAVgjIABgBIgBABQgFAIgEADQAAgIAFgNQAFgPgCgJIgIAJQAOgeANg8IAKADQAHADgMAtIABAAQABARgJAlIACAjIAGgGQAEAsgeAvQAAgHAFgLg");
	this.shape_1.setTransform(-7.3,-21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F78D19").ss(0.5,1,1).p("AADg/IACgTQgBgWgJghQgOgqgCgLQAMAYAdAkQADAGAMAjQAIAbAJAJQgPgKgHgGQgLgUgHADQALAXALA7QgEgQgLgLQABAYAIApQAEAZgCA2QgdgzgKgeQgJAZABA0QABAdACA1QgIgfgBgHQgDgMgIgXQgQgmgBg0QAHAPAPAjQACgcAGgfQAIgdADgQQAGgcgFgXQADALAGAOQAAADADgOg");
	this.shape_2.setTransform(1,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6F00").s().p("AgWCZQgDgMgJgXQgQgmgBg0QAIAPAOAjQACgcAGgfQAIgdADgQQAGgcgFgXQADALAGAOQAAADADgOIACgTQgBgWgJghQgOgqgCgLQAMAYAdAkQADAGALAjQAJAbAJAJIgWgQQgLgUgHADQAKAXAMA7QgEgQgLgLQABAYAIApQAEAZgCA2QgdgzgKgeQgJAZACA0IACBSIgIgmg");
	this.shape_3.setTransform(1,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F78D19").ss(0.5,1,1).p("AgWBtQAAgXgBgLQgHAGgPASQAbhUgGggQgBABgWAQQARhIAhgiQARgRALARQAMASAFBTQgIABgTgkQAGAcAOA+QgKgPgFgFQgHgLgEAMQgEAQAEBCQAAgFgNgcQgLgdgEgEQgIAegBAgIAAAH");
	this.shape_4.setTransform(0.7,-21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6F00").s().p("AACBRQgLgcgEgFQgIAfgBAfIgBgiQgHAGgPASQAbhUgGggIgXAQQARhHAggiQASgRALARQAMATAFBSQgIACgUglIAUBbIgOgVQgHgLgEANQgEAPAEBDQgBgGgMgcg");
	this.shape_5.setTransform(0.7,-22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.5,1,1).p("AAyCwQADAEAIAAIAAgUQACAAAGAAQAIgggDgSQgGgVgBgMQAAg3gBgZQADAZAfAPQAFgOgJgXQgLgcgBgIQABADACAIQABgJAAgEQAVgEgSgmQgWgxAAgDQAJAQAZAUQAEgMgDg8QAMAXAKAPQACgZgNgfQgMgdgUgSQAEACAHgBQADgRgKgYQgJgWgNgOQgBADgIAIQgJgiAAgTQAAABgHALQgLgNABgaQgJAAgJAJQgGAFgJgLQgTgUgDAUQgFgBgRgJIAAgFQgJATgQAkQgeAoAAABQAKgIAQgUQgFAbgSA3QALgKAHgGQACgDADgCAAUCqQADAVAaAhQACgggBgQQgBgJgBgEAAUCqQAAgDAAgDAg8A3QgBADgBADQAKgNAMgIQABAkgMAXQgdA3ABAWQAAAVAWAiQAIAWAAA3QAAAHAGBMQAQguAChIQABgbADgHQACAEAfAmQAIhIAAgnAhRkAQgIAKgMAhQgJAXgOAsQAVgQABAAQgGAOgKAyQgIAyAAAFQAJgGAMgUQALgUAKgFQAAAGgBAMIAFgFQAAACgIAUQgFANABAIQACgBACgBQACgCABgBAhKAEQgGAJgFARQgDAKABA3QAUgZAHgPQABgDAAgCAhYgoQgRAPgGAtQAQgFAVgLQAIgNALADQgKAGgJAE");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7F6A2").s().p("AgxE0QAAg3gIgWQgWgiAAgVQgBgWAdg3QAMgXgBgkQgMAIgKANIACgGQgHAPgUAZQgBg3ADgKQAFgRAGgJQgVALgQAFQAGgtARgPIgEACQgBgIAFgNIAIgWIgFAFQABgMAAgGQgKAFgLAUQgMAUgJAGQAAgFAIgyQAKgyAGgOIgWAQQAOgsAJgXQAMghAIgKIAFgFIgFAFIgSAQQASg3AFgbQgQAUgKAIIAegpIAZg3IAAAFIAWAKQADgUATAUQAJALAGgFQAJgJAJAAQgBAaALANIAHgMQAAATAJAiQAIgIABgDQANAOAJAWQAKAYgDARQgHABgEgCQAUASAMAdQANAfgCAZQgKgPgMgXQADA8gEAMQgZgUgJgQQAAADAWAxQASAmgVAEIgBANIgDgLQABAIALAcQAJAXgFAOQgfgPgDgZIABBQQABAMAGAVQADASgIAgIgIAAIAAAUQgIAAgDgEQgBgJgBgEQABAEABAJQABAQgCAgQgaghgDgVIAAgGIAAAGQAAAngIBIQgfgmgCgEQgDAHgBAbQgCBIgQAuIgGhTgAg8A3IABgFIgBAFgAhKAEIATgKIgEAAIAAAAIAAAAQgIAAgHAJIAAAAIAAABIAAAAgAhYgoIADgDIgDADgAhKAEIAAAAgAhKADIAAAAQAHgJAIAAIAAAAIAAAAIAEAAIgTAKIAAgBg");

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-40.1,27.5,80.3);


(lib.fire1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F78D19").ss(0.5,1,1).p("AAhgGQgDgOgLgLQABAYAIAoQADAagBA1Qgeg0gJgdQgJAaABA0QABAdACA0QgIgegBgHQgDgOgJgWQgPgmgBgzQAHAOAPAjQACgeAGgcQAIgeADgQQAGgbgEgWQADAOAFAKQAAAEACgPQACgLAAgIQgBgWgIghQgOgrgCgKQAGAMAPASQANASAHAMQADAGAMAjQAIAbAJAJQgQgLgGgGQgMgTgGACQAKAVALA8QAAABAAAC");
	this.shape.setTransform(2.9,-13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6F00").s().p("AgXCZQgDgPgJgUQgPgngBgzIAWAxQADgeAFgcIALguQAGgbgEgWQADAOAFAKQAAAEADgPQACgLAAgIQgBgWgJghQgOgrgCgKQAGAMAPASQANASAGAMQAEAGALAjQAKAbAIAJQgQgLgGgFQgLgTgHACQAKAUALA8QgDgOgLgLQAAAYAJAoQADAagBA1Qgdg0gKgdQgJAaABA0IADBSIgJgmg");
	this.shape_1.setTransform(2.9,-13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F78D19").ss(0.5,1,1).p("AgWBtQAAgWgBgMQgHAGgPASQAbhUgGgfQgIADgPANQARhIAggiQASgRALARQALARAGBUQgJACgTglQAGAcAOA+QgJgOgFgGQgIgKgDALQgFAQAFBCQgBgFgMgcQgLgcgEgFQgJAeAAAgIAAADQAAACAAAC");
	this.shape_2.setTransform(-4.3,-24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6F00").s().p("AACBRQgLgcgEgFQgJAeAAAgIgBgiQgHAGgPASQAbhUgGgfQgIADgPAMQARhHAggiQASgRALARQALARAGBUQgJACgTglIAUBaIgOgUQgIgKgDALQgFAQAFBCQgBgFgMgcg");
	this.shape_3.setTransform(-4.3,-24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.5,1,1).p("AiPAhQAGgQAfhYIgSAPQgRAQgEANIAzi7IgrAqQABgBARg3QAYg8AJgfQgcAWgQAAQAFgBAKgSQAKgTAIgBQANgBAJgPQADgGAKgdQAHAKAPADQAQACAFgMQAKAMAKgBQANAAAHgPQAIAkAFAFQAGAIAJgEQAHgEAFgLQAFAPAJAaQAFALAEAGQAHALANAXQgRgOgJgGQgBgBAAAAQgBgBgBAAQABABACABQAFAZAJAdQALAhAOAjQAXA6AGAGQg4gygEgOIANBYQARBlARBJIg9igIAFBMQAGBPAFAQIgohtIAHAvQACAMgWgTIABCQIgahQIgTDfIgIiTIgYDRQgBkxgIg/IgMA/IAAhNIgPAeIgBgaIgTAiQgTAlgEAQQgFAaACgcIAZh+IgtA/IgCACAA9lmQgBgCgBgCIACADQAAABAAAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7F6A2").s().p("AgyAVIgMA/IAAhNIgPAeIgBgaIgTAiQgTAlgEAQQgFAaACgcIAZh+IgtA/QAGgQAfhYIgSAPQgRAQgEANIAzi7IgrAqIASg4QAYg8AJgfQgcAWgQAAQAFgBAKgSQAKgTAIgBQANgBAJgPQADgGAKgdQAHAKAPADQAQACAFgMQAKAMAKgBQANAAAHgPQAIAkAFAFQAGAIAJgEQAHgEAFgLIAOApIAJARIAUAiQgRgOgJgGIgBgBIgBgBIAAAAIgBAAIADACQAFAZAJAdQALAhAOAjQAXA6AGAGQg4gygEgOIANBYQARBlARBJIg9igIAFBMQAGBPAFAQIgohtIAHAvQACAMgWgTIABCQIgahQIgTDfIgIiTIgYDRQgBkxgIg/gABOkeIAAAAgABLkgIABAAIAAAAIABABIABABIgDgCgAA7lqIACADIAAABIgCgEg");

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.6,-39.9,31.3,80);


(lib.asteroid_fall = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F78D19").ss(0.5,1,1).p("AgGAMIgBhNIAHg9IgHgQIgEBpIAFAxIAAAQIABgEgAgFAYIAEAgIgDA1QAAAHAGgYIgFAzQAAAEAPg2IgHgVIgEALIgBhMg");
	this.shape.setTransform(3.1,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6F00").s().p("AgDCPIAFgzQgGAYAAgHIADg1IgEggIAFgRIABBMIAEgLIAHAVQgOAygBAAIAAAAgAgGAMIgFgxIAEhpIAHAQIgHA9IABBNIABAMIgBAEg");
	this.shape_1.setTransform(3.1,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F78D19").ss(0.5,1,1).p("AAJglIgCAlQAAAFgJgPIgHAPIAAAFIgKgMQAAAHgHAkQgBAOATgiIgFAdIASgfQgBgHABgEQABgIAEAJQAJAWADgMQABgJAEg7g");
	this.shape_2.setTransform(-1.8,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6F00").s().p("AgIAVQgTAjABgOQAHglAAgHIAKAMIAAgGIAHgOQAJAOAAgEIACglIASgMQgEA7gBAJQgDANgJgXQgEgJgBAIIAAALIgSAfg");
	this.shape_3.setTransform(-1.8,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#878C91").s().p("AAHAMIgIgEQABgIgDgFQgFgJgCADIAGgLQAEAAAAALQAAAEAHgIIgBAVQADAGACALg");
	this.shape_4.setTransform(-1,43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#878C91").s().p("AgBACQgFgEAAgJIACgIQAGgBAEgEIgCADQgEAIACAFQAEAFABAIQAAALgDADIgGAGQADgSgCgFg");
	this.shape_5.setTransform(-1.5,37.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#878C91").s().p("AgFAWIgGgEQALABADgHQABgFgEgDQgEgEgDABQAPgHAAgIIAAgPIAEAJIgBAbQAAAGgJAEQACAGgEACQgFADgCACQAEgFgCgDg");
	this.shape_6.setTransform(3.1,40.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383C42").s().p("AgDgDIACACIAFgGIgEAPg");
	this.shape_7.setTransform(0.9,34.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383C42").s().p("AgKAGQAWgCABgGIAEgPIAAAQQABAHgLAEQgPgCgDADIgGAHg");
	this.shape_8.setTransform(1.8,39.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383C42").s().p("AAAACIgFgLQAFgCAAgHIAEAPQAFADgGATQABgNgEgEg");
	this.shape_9.setTransform(-2.3,38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383C42").s().p("AgJgCIAIgEIABAGQAEAJAGgCIgEAAQgGAAgJgJg");
	this.shape_10.setTransform(1.1,42.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AACg2QgEgHgCACQgIAMgIADIgGAFQgBAKgFACQgHAEAAAOQAAAHAJAKQgDAVAGAAQAHAAABACQAFAIgBAIIAKAEIAFANQAAAAAIgUQAEAAADgFQABgCAKgEQAGgDgCgHQAIgFABgLQABgagBgCQgFgDgBgGIAAgNQgIgTgGAAQgJgBAAAAg");
	this.shape_11.setTransform(0.4,39.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ABB0B7").s().p("AgFAzIgKgEQABgIgFgIQgBgCgHAAQgGAAADgVQgJgKAAgHQAAgOAHgEQAFgCABgKIAGgFQAIgDAIgMQACgCAEAHIAIgJIAJABQAGAAAIATIAAANQABAGAFADIAAAcQgBALgIAFQACAHgGADQgKAEgBACQgDAFgEAAQgIAUAAAAg");
	this.shape_12.setTransform(0.4,39.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(0.5,1,1).p("AAqjIIAGklIhfL6IgKgKIgCBgQgWASAEgSIgLAhIAPAQIACAlIAWgIIAVA9IASgVQAAAEAWgDQAMgCAMgDQAGgCAAgIIASghIALggIASgXIAAghIgMAdIgEgtIgCAZIgHgtIgOAUIgIgnIgGAKIAQheIgOg1IgCA9IgCkhg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7F6A2").s().p("AgxGwIgWAIIgCgkIgPgRIALghQgEATAWgTIADhfIAKAKIBer6IgGElIgIB3IABEgIACg9IAPA1IgRBeIAHgKIAIAnIAOgUIAHAtIABgZIAFAtIAMgdIAAAhIgSAXIgLAgIgSAhQgBAIgGACIgXAFQgWADABgEIgTAVg");

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-50.4,19.8,100.8);


(lib.arrowIndicator = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5A5A5").s().p("AgsAsIAhghIg4g2IBPAAIA4A2IghAhg");
	this.shape.setTransform(6.8,4.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.7,8.9);


(lib._whooshmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("whooshmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._twangmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("twangmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._explodemp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("explodemp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.turboIndicator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{inactive:0,active:7});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_21 = function() {
		/* gotoAndPlay("active");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

	// Txt
	this.text = new cjs.Text("TURBO", "11px 'Arial'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 50;
	this.text.setTransform(25,0);

	this.instance = new lib.turboText();
	this.instance.setTransform(22,8.5,1,1,0,0,0,22,8.5);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 51, 51, 51, 0)];
	this.instance.cache(-2,-2,48,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,17);


(lib.score = function() {
	this.initialize();

	// Layer 2
	this.score = new lib.score_txt();
	this.score.setTransform(73.3,30.5,1,1,0,0,0,28,13.5);

	this.addChild(this.score);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(28.3,3.5,34,27);


(lib.meteor = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.meteor_pic("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-15.7,21.5,31.4);


(lib.livesIndicator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{alive:0,dead:7});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_49 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// MC
	this.instance = new lib.livesMC();
	this.instance.setTransform(9.1,2.1,1,1,0,0,0,9.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({scaleX:9.1,scaleY:9.1,x:9.6,y:1.8,alpha:0},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,4.3);


(lib.lives = function() {
	this.initialize();

	// Layer 1
	this.life3 = new lib.livesIndicator();
	this.life3.setTransform(9.3,2.3,1,1,0,0,0,9.1,2.1);

	this.life2 = new lib.livesIndicator();
	this.life2.setTransform(26.6,2.3,1,1,0,0,0,9.1,2.1);

	this.life1 = new lib.livesIndicator();
	this.life1.setTransform(44.5,2.1,1,1,0,0,0,9.1,2.1);

	this.addChild(this.life1,this.life2,this.life3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,53.4,4.5);


(lib.asteroid = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.asteroid_fall("synched",0);
	this.instance.setTransform(8.9,49.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.8,100.8);


(lib.arrowLineUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.arrowIndicator();
	this.instance.setTransform(6.8,4.4,1,1,0,0,0,6.8,4.4);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.5},5).wait(65));

	// 2
	this.instance_1 = new lib.arrowIndicator();
	this.instance_1.setTransform(18.8,4.4,1,1,0,0,0,6.8,4.4);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({alpha:1},5).to({alpha:0.5},6).wait(59));

	// 3
	this.instance_2 = new lib.arrowIndicator();
	this.instance_2.setTransform(30.8,4.4,1,1,0,0,0,6.8,4.4);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({alpha:1},6).to({alpha:0.5},6).wait(53));

	// 4
	this.instance_3 = new lib.arrowIndicator();
	this.instance_3.setTransform(42.8,4.4,1,1,0,0,0,6.8,4.4);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({alpha:1},6).to({alpha:0.5},7).wait(46));

	// 5
	this.instance_4 = new lib.arrowIndicator();
	this.instance_4.setTransform(54.8,4.4,1,1,0,0,0,6.8,4.4);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({alpha:1},7).to({alpha:0.5},7).wait(39));

	// 6
	this.instance_5 = new lib.arrowIndicator();
	this.instance_5.setTransform(66.8,4.4,1,1,0,0,0,6.8,4.4);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({alpha:1},7).to({alpha:0.5},8).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.7,8.9);


(lib.anim_engine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.fire2("synched",0);
	this.instance.setTransform(-1.4,1);
	this.instance.alpha = 0.859;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.fire1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-39.9,31.3,80);


(lib.anim_amunisi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDD0D3").s().p("AgDAFQADgHgMgGQAJAAADgEIAHAEQAIAEgCAEIgEAEQgGAGgMACg");
	this.shape.setTransform(1.7,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F8F9").s().p("AgDgBIAEAAIADADQgFgBgCgCg");
	this.shape_1.setTransform(-0.7,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F8F9").s().p("AABgHIAIACQgTAEAJAJQgRgIATgHg");
	this.shape_2.setTransform(-1.9,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCDCA4").s().p("AgFAZIALg0IgHAzIABAEQgBAAgEgDg");
	this.shape_3.setTransform(-0.9,-14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0A410").s().p("AgIgcIARA3IgOACg");
	this.shape_4.setTransform(0.8,-14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C19006").ss(0.3,1,1).p("AARAeIgLACQgLACgLgEIAPg+g");
	this.shape_5.setTransform(0,-14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC757").s().p("AgQAeIAPg+IASA+IgLACIgGABQgIAAgIgDg");
	this.shape_6.setTransform(0,-14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCATIAAglIAFAAIAAAlg");
	this.shape_7.setTransform(0,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BFBEBE").ss(0.3,1,1).p("AgQgNQAQAIAQgIQAHACAFAEQAJAHgOAIIgQAGQgQADgOgJIgHgIQgEgIASgFg");
	this.shape_8.setTransform(0.1,15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5E5E5").s().p("AgXAIIgHgIQgEgIASgFQAQAIAQgIQAHACAFAEQAJAHgOAIIgQAGIgIAAQgMAAgKgGg");
	this.shape_9.setTransform(0.1,15.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4B596D").s().p("AgCB/QgBgGADgYIAAgiQgEgtABgRQADghAAgfQAAgKgFgbQgCgYANgFIAAEBQgEACgCAAQgBAAgBgDg");
	this.shape_10.setTransform(1,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#494848").ss(0.3,1,1).p("AgPiDQAPAJAQgHIAAEBIgJADQgKADgMgGg");
	this.shape_11.setTransform(0,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#57677F").s().p("AgPCAIAAkDQAPAJAQgHIAAEBIgJADIgHABQgHAAgIgEg");
	this.shape_12.setTransform(0,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAUIAWgnIABAng");
	this.shape_13.setTransform(-2.6,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLAUIABgnIAWAng");
	this.shape_14.setTransform(2.7,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CDD0D3").s().p("AgCAAIgBAAQAEgDACABIAAACQAAAAgDACQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQABAAAAgBQABgBAAAAQAAgBAAAAQAAAAgBAAg");
	this.shape_15.setTransform(1.1,17.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BFBEBE").ss(0.3,1,1).p("AAHgFQAEABACABQAEADgHADIgHADQgGABgGgEQgKgEANgEQAGADAHgDg");
	this.shape_16.setTransform(0.1,17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5E5E5").s().p("AgJADQgKgEANgEQAGADAHgDIAGACQAEADgHADIgHADIgDAAQgEAAgFgDg");
	this.shape_17.setTransform(0.1,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 2
	this.instance = new lib.anim_engine();
	this.instance.setTransform(0,24.8,0.18,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-19,8.5,51.6);


(lib.panel = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.arrowLineUp();
	this.instance.setTransform(339.4,40.1,1,1,0,0,0,36.8,4.4);

	this.turboIndicator = new lib.turboIndicator();
	this.turboIndicator.setTransform(132,30.5,1,1,0,0,0,22,8.5);

	this.lives = new lib.lives();
	this.lives.setTransform(53.2,53.9,1,1,0,0,0,26.9,2.1);

	this.text = new cjs.Text("", "16px 'Arial-BoldMT'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 178;
	this.text.setTransform(492,22);

	this.score = new lib.score();
	this.score.setTransform(28,34.5,1,1,0,0,0,28,13.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAdIgCgBIgBgEIAAgLQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAFAAIAKAAIADABIAAAFIAAALQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABgEAAgAgIgIIgBgEIAAgLIABgEQAAgBAFAAIAKAAIADABIAAAEIAAALQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAIgFAAIgLAAIgBAAIgBgBg");
	this.shape.setTransform(378.5,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAdIgWgXIgOAAIAAAXIgOAAIAAg5IAzAAQAHAAAEACQADAEAAAFIAAAOQAAAEgDADQgEADgHgBIgIAAIAcAXgAgVgCIAfAAIAFgBIACgDIAAgHIgCgEQgBgBgEAAIgfAAg");
	this.shape_1.setTransform(366.7,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAaQgDgDAAgIIAAgdQAAgIADgDQAEgDAJAAIArAAQAKAAADADQADADAAAIIAAAdQAAAIgDADQgEADgJAAIgrAAIgDAAQgHAAgDgDgAgWASIAtAAIAAgjIgtAAg");
	this.shape_2.setTransform(356.7,30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAdIAAg5IA9AAIAAAKIguAAIAAAQIAYAAIAAAJIgYAAIAAAWg");
	this.shape_3.setTransform(348.5,30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAdIAAgZIgrAAIAAAZIgOAAIAAg5IAOAAIAAAXIArAAIAAgXIAOAAIAAA5g");
	this.shape_4.setTransform(333.6,30.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAaQgCgDAAgIIAAgdQAAgIACgDQAEgDAJAAIAjAAQAJAAADADQAEADgBAIIAAAGIgOACIAAgLIglAAIAAAjIAlAAIAAgNIAOADIAAAHQABAIgEADQgDADgJAAIgjAAIgCAAQgIAAgDgDg");
	this.shape_5.setTransform(324.1,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAdIAAgvIgcAAIAAgKIBFAAIAAAKIgcAAIAAAvg");
	this.shape_6.setTransform(315.9,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaAdIgIgNIglAAIgHANIgPAAIAjg5IAMAAIAkA5gAgNAFIAZAAIgMgWg");
	this.shape_7.setTransform(308.1,30.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAaAdIAAgnIgaAgIgBAAIgbgfIAAAmIgLAAIAAg5IALAAIAcAhIAcghIAMAAIAAA5g");
	this.shape_8.setTransform(298.1,30.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAdIAAgvIgcAAIAAgKIBFAAIAAAKIgcAAIAAAvg");
	this.shape_9.setTransform(283.2,30.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWAdIAAgZIgrAAIAAAZIgPAAIAAg5IAPAAIAAAXIArAAIAAgXIAPAAIAAA5g");
	this.shape_10.setTransform(274,30.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggAaQgDgDAAgIIAAgdQAAgIADgDQADgDAJAAIApAAQAJAAADADQADACAAAIIAAACIgOACIAAgGIgrAAIAAAjIArAAIAAgNIgWAAIAAgJIAkAAIAAATQAAAIgDADQgDADgJAAIgpAAIgCAAQgHAAgDgDg");
	this.shape_11.setTransform(264.2,30.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAdIAAg5IANAAIAAA5g");
	this.shape_12.setTransform(257.3,30.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIgWgXIgOAAIAAAXIgOAAIAAg5IAzAAQAHAAAEACQADAEAAAFIAAAOQAAAEgDADQgEADgHgBIgIAAIAcAXgAgVgCIAfAAIAFgBIACgDIAAgHIgCgEQgBgBgEAAIgfAAg");
	this.shape_13.setTransform(251.1,30.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfAdIAAg5IA+AAIAAAKIgvAAIAAAOIAaAAIAAAIIgaAAIAAAOIAwAAIAAALg");
	this.shape_14.setTransform(236.7,30.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWAdIAAgZIgrAAIAAAZIgOAAIAAg5IAOAAIAAAXIArAAIAAgXIAOAAIAAA5g");
	this.shape_15.setTransform(227.2,30.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGAdIAAgvIgcAAIAAgKIBFAAIAAAKIgcAAIAAAvg");
	this.shape_16.setTransform(218,30.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgkAdIAAg5IAmAAQARAAAJAIQAJAIAAAMQAAAPgKAHQgJAHgSAAgAgWASIATAAQANAAAGgEQAGgEAAgKQAAgIgFgFQgFgFgKAAIgYAAg");
	this.shape_17.setTransform(203.9,30.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAaAdIgwgmIAAAmIgNAAIAAg5IAKAAIAwAmIAAgmIANAAIAAA5g");
	this.shape_18.setTransform(193.8,30.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAdIAAg5IANAAIAAA5g");
	this.shape_19.setTransform(186.8,30.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjAjIAAhGIBHAAIAAANIg2AAIAAATIAcAAIAAALIgcAAIAAAbg");
	this.shape_20.setTransform(181.6,29.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE1BD").s().p("AjECHIiohxIAAieIAJAAIAAAnIAABLIAAAnIArAeIBNAzIApAdIBZAAIC/ABIDAABIBXAAIAAAIg");
	this.shape_21.setTransform(47.7,45.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE1BD").s().p("AjnB5IAAjBIAtAAIAxAAIAOgZIAMgWICQAAIAKAMIALAQIAwAAIBVAAIAtAAIAAAIIi2AAIgKgNIgLgPIhCAAIhFAAIgOAZIgMAXIgqAAIgwAAIAAA0IAABVIAAAvg");
	this.shape_22.setTransform(30.4,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AjxBrIAAjQIAvAAIA1AAIAMgaIAKgWICWAAIALANIAOAPIAzAAIBYAAIAvAAIAABCIhoAAIjCAAIhxAAIAAA5IABBhIABAzgAjjgjIAABVIAAAxIAUALIAaAQIgBg9IAAhYIgBguIBoAAIDCAAIBxAAIAAgmIg0AAIhSAAIgsAAIgLgNIgOgPIhCAAIhFAAIgNAaIgKAVIgqAAIg0AAIAAA1g");
	this.shape_23.setTransform(30.7,17.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBBC5E").s().p("AjqBpIAAjFIBhAAIAWgvICPAAIAZAbIC2AAIAAA0ImbAAIACDIg");
	this.shape_24.setTransform(30.7,17.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE1BD").s().p("AFQE0IAAgJIAqAAIAvAAIARgoIAQgoIgfg3Igfg4IgwAAIhTAAIgtAAIAtgoIAvgrIAAg4IAAg6IgqgtIhMhQIgpgqIAMgRIgcgYIhggBIjOAAIjPAAIheAAIAAgJIJeABIAkAgIgMARIArAtIBKBOIAnAqIAAB5IgiAfIgsAoIBWAAIBIAAIBDB2IgkBag");
	this.shape_25.setTransform(50,35.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE1BD").s().p("AAxBJIjEiLIAFgHIAyAkIBcBBIAzAlIAyAAIAvAAIAAAJg");
	this.shape_26.setTransform(24.6,61.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbAiIAAhEIA3AAIgLASIgdAAIAAAKIAiAAIgLANIgXAAIAAAKIAnAAIgMARg");
	this.shape_27.setTransform(50.1,17.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAOAiIAAgRIgEgFIgXAAIAAAWIgQAAIAAhEIAwAAIALAXIgIANIAIAMIAAAUgAgNgEIAYAAIADgGIgDgGIgYAAg");
	this.shape_28.setTransform(42.8,17.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAiIgLgQIAAgjIALgRIAlAAIALARIAAAjIgKAQgAgOARIAcAAIAAghIgcAAg");
	this.shape_29.setTransform(35.3,17.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRAiIgLgQIAAgjIALgRIAuAAIgNASIgcAAIAAAhIAnAAIgMARg");
	this.shape_30.setTransform(28.7,17.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AggAiIALgRIAhAAIADgEIgDgGIghAAIgKgSIAKgXIA2AAIgMASIghAAIgCAFIACAEIAiAAIAKAUIgLAVg");
	this.shape_31.setTransform(21.3,17.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A5A5A5").s().p("AgbAiIAAhEIA3AAIgLASIgdAAIAAAKIAiAAIgLANIgXAAIAAAKIAnAAIgMARg");
	this.shape_32.setTransform(49.4,17.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A5A5A5").s().p("AAOAiIAAgRIgEgFIgXAAIAAAWIgQAAIAAhEIAwAAIALAXIgIANIAIAMIAAAUgAgNgEIAYAAIADgGIgDgGIgYAAg");
	this.shape_33.setTransform(42.1,17.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A5A5A5").s().p("AgSAiIgLgQIAAgkIALgQIAlAAIALAQIAAAkIgKAQgAgNARIAbAAIAAghIgbAAg");
	this.shape_34.setTransform(34.6,17.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5A5A5").s().p("AgRAiIgKgQIAAgkIAKgQIAtAAIgMASIgcAAIAAAhIAnAAIgMARg");
	this.shape_35.setTransform(28,17.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5A5A5").s().p("AghAiIAMgRIAhAAIADgEIgDgGIghAAIgLgSIALgXIA3AAIgNASIghAAIgDAFIADAEIAiAAIALAUIgMAVg");
	this.shape_36.setTransform(20.6,17.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AjSAEIABgIIGkAAIgPAIg");
	this.shape_37.setTransform(38.9,22.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A5A5A5").s().p("AjSAEIABgIIGkAAIgPAIg");
	this.shape_38.setTransform(38.4,23);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAvBgIjRiRIAjguIAuAeIBUA4IAxAdIAqAAIAnAAIAeA0IAAAYgAiPg0IA3AmIBZA+IAzAiIAuAAIA0AAIAAgGIgMgUIgNgWIgpAAIglAAIgqgcIhPgzIgyggIgTAZg");
	this.shape_39.setTransform(24.3,60.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FBBC5E").s().p("AAwBYIjKiMIAbgjICvBwIBQAAIAbAwIAAAPg");
	this.shape_40.setTransform(24.5,60.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D69F56").s().p("AjqBnIAAjBIBhAAIAWguICPAAIAZAbIC2AAIAAAzImbAAIACDDg");
	this.shape_41.setTransform(29.4,17.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FFFFFF","#BEBEBE"],[0,1],-44.2,-21.6,64,36.9).s().p("AjJDdIhKgzIhLg1IAAlRICiAAIDLAAIBoAAIBGBJIBGBJIAABoIguAlIgsAkIAAAoIBEAAIBHAAIAVAhIAWAgIgJANg");
	this.shape_42.setTransform(48.6,35.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#050505").s().p("AjYDxIidhuIAAlyIH5gBICTCaIAAByIgqAjIgvAmIAAAXIBHAAIA+AAIAzBNIgbAogAloiCIAACjIAABbIBLA0IBKAzIBXAAIC6AAIC8AAIBZAAIATgaIgVggIgVgfIhJAAIhCAAIAAgsIArgjIAugmIAAgyIAAgzIhGhJIhFhJIh/AAIjkAAIiEAAIAABgg");
	this.shape_43.setTransform(49.7,34.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A5A5A5").s().p("AjUDqIiZhrIAAloIHvAAICPCWIAABsIhZBJIAAAhICIAAIAuBFIgWAig");
	this.shape_44.setTransform(49.7,34.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AjSFFIjgieIAAg6IAAg+IgYgYIgVgVIAAlGIJtAAIAsAoIgJAPIArAuIBIBMIAmApIAACFIgYAWIgkAhIBPAAIA5AAIBKB+IgrBmIhzAAIAAgeIhoAAIizAAIhlAAIAAAaIAAATgAnSjiIAACRIAABQIAZAVIAUAVIAAA5IAAA+IA6ApIBlBHIA4AoIA+AAIBFAAIAAgaIAAgTIGaAAIAAAeIAwAAIAuAAIASgtIASgrIghg4Ighg5IguAAIhMAAIgpAAIAngkIApgnIAAg8IAAg+IgpgsIhLhPIgngrIAIgOIgSgQIgPgOIheAAIjLAAIjOAAIhjAAIAABVg");
	this.shape_45.setTransform(50.1,36);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#FFFFFF","#FBBC5E"],[0,1],-84.8,0.1,68,-0.2).s().p("AjQE+IjbiaIAAh3IgtgtIAAk9IJjAAIAmAiIgIAPICbClIAACAIhGBAICVAAIBGB3IgoBgIhpAAIAAgfImMAAIAAAtg");
	this.shape_46.setTransform(50,36);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A5A5A5").s().p("ACCATIgyglICLAAIAbAlgAgqATIgxglICaAAIAwAlgAjBATIg0glICIAAIAxAlg");
	this.shape_47.setTransform(70.1,49.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFE1BD").s().p("Ai0B8IiZhoIAAiQIAHAAIAABFIAABHIBLAyIBKAzIBRAAICuAAICwABIBQAAIAAAIg");
	this.shape_48.setTransform(65.1,41.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFE1BD").s().p("AjTBuIAAivIApAAIAtAAIAMgYIALgUICEAAIAJAMIALAOIAsAAIBNAAIApAAIAAAHIimAAIgJgMIgLgNIg8AAIg/AAIgNAXIgLAVIgmAAIgsAAIAAAvIAABOIAAAqg");
	this.shape_49.setTransform(49.2,14.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AjcBiIAAi+IArAAIAwAAIALgZIAJgTICKAAIAKALIAMAOIAvAAIBQAAIArAAIAAA9IhfAAIixAAIhoAAIAAA0IABBZIABAugAjQAGIAABVIAqAYIAAg3IgBhRIAAgqIBfAAICxAAIBoAAIAAgkIhWAAIhNAAIgLgLIgMgNIg8AAIhAAAIgLAXIgJAUIgoAAIgvAAIAABWg");
	this.shape_50.setTransform(49.5,16.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FBBC5E").s().p("AjWBgIAAi0IBZAAIAUgrICDAAIAXAZICmAAIAAAvIl4AAIACC4g");
	this.shape_51.setTransform(49.4,16);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFE1BD").s().p("AE0EaIAAgHIAmAAIArAAIAQgmIAPgkIgdgzIgcgzIgsAAIhMAAIgqAAIAqglIAqgnIAAg0IAAg1IgmgoIhGhKIglgnIALgPIgZgWIhYAAIi9gBIi+AAIhXAAIAAgIIIsABIAhAdIgLAQIBKBNIBFBKIAABuIgfAdIgpAlIBQAAIBCAAIA9BtIghBRg");
	this.shape_52.setTransform(67.2,32.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFE1BD").s().p("AAtBDIi0h/IAFgGIAuAgIBUA7IAvAiIAtAAIAsABIAAAHg");
	this.shape_53.setTransform(43.8,56.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZAgIAAg/IAzAAIgLAQIgZAAIAAAJIAeAAIgKANIgUAAIAAAJIAjAAIgLAQg");
	this.shape_54.setTransform(67.3,16.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AANAgIAAgQIgEgFIgVAAIAAAVIgOAAIAAg+IArAAIAKATIgHANIAHALIAAATgAgMgDIAWAAIADgGIgDgFIgWAAg");
	this.shape_55.setTransform(60.5,16.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRAgIgKgPIAAggIAKgPIAiAAIAKAPIAAAgIgKAPgAgMAQIAaAAIAAgeIgaAAg");
	this.shape_56.setTransform(53.7,16.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgPAgIgKgPIAAghIAKgPIApAAIgKAQIgaAAIAAAfIAjAAIgLAQg");
	this.shape_57.setTransform(47.6,16.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgeAgIALgQIAeAAIADgEIgDgFIgeAAIgKgSIAKgTIAyAAIgLAQIgfAAIgCADIACAFIAfAAIAKASIgKAUg");
	this.shape_58.setTransform(40.8,16.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A5A5A5").s().p("AgZAgIAAg/IAzAAIgKAQIgaAAIAAAJIAeAAIgKANIgUAAIAAAJIAjAAIgLAQg");
	this.shape_59.setTransform(66.6,16.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A5A5A5").s().p("AANAgIAAgQIgEgFIgVAAIAAAVIgOAAIAAg/IArAAIAKAUIgHANIAHAKIAAAUgAgMgDIAWAAIADgGIgDgGIgWAAg");
	this.shape_60.setTransform(59.9,16.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A5A5A5").s().p("AgRAgIgKgPIAAghIAKgPIAiAAIALAPIAAAhIgLAPgAgMAQIAaAAIAAgfIgaAAg");
	this.shape_61.setTransform(53.1,16.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A5A5A5").s().p("AgPAgIgKgPIAAghIAKgPIApAAIgLAQIgZAAIAAAfIAjAAIgLAQg");
	this.shape_62.setTransform(47,16.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A5A5A5").s().p("AgeAgIALgQIAeAAIADgFIgDgEIgeAAIgKgSIAKgUIAyAAIgLAQIgfAAIgCAEIACAFIAfAAIAKARIgKAVg");
	this.shape_63.setTransform(40.2,16.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AjBAEIABgHIGCAAIgOAHg");
	this.shape_64.setTransform(57,20.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A5A5A5").s().p("AjBAEIABgHIGCAAIgOAHg");
	this.shape_65.setTransform(56.5,21.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAsBYIjBiFIAhgqIAqAcIBNAzIAsAaIAnAAIAkAAIAcAwIAAAWgACKBMIAAgGIgLgTIgMgUIgmAAIghAAIhKgwIhTg1IgSAWIAzAjIBSA5IAtAgIArAAIAwAAIAAAAg");
	this.shape_66.setTransform(43.6,55.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FBBC5E").s().p("AAsBQIi5h/IAZghICgBnIBJAAIAZAsIAAANg");
	this.shape_67.setTransform(43.7,55.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D69F56").s().p("AjWBeIAAiwIBZAAIAUgqICDAAIAXAYICmAAIAAAvIl4AAIACCzg");
	this.shape_68.setTransform(48.2,16.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#FFFFFF","#BEBEBE"],[0,1],-40.5,-19.8,58.7,33.9).s().p("Ai4DLIhEgwIhFgvIAAk2ICVAAIC6AAIBfAAIBABEIBBBCIAABfIgrAjIgoAgIAAAmIA+AAIBBAAIAUAdIAUAdIgJANg");
	this.shape_69.setTransform(65.9,32.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#050505").s().p("AjFDdIiRhkIAAlUIHPAAICHCMIAABoIgnAhIgrAjIAAAVIBBAAIA5AAIAvBGIgaAlgAlKh3IAACVIAABUIBFAvIBDAvICEAAIDwAAICFAAIARgYIgUgeIgTgcIhCAAIg9AAIAAgnIAnghIArgjIAAgtIAAgvIhAhDIhAhDIh0AAIjSAAIh4AAIAABYg");
	this.shape_70.setTransform(67,31.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A5A5A5").s().p("AjDDXIiMhiIAAlKIHGAAICECJIAABiIhSBEIAAAeIB8AAIArBAIgVAfg");
	this.shape_71.setTransform(66.9,31.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AjBEqIjNiRIAAg1IAAg5IgVgVIgUgUIAAkrII4AAIApAlIgIAOIBJBNIBDBIIAAB6IgVAUIghAfIBHAAIA2AAIBDBzIgnBeIhrAAIAAgcIheAAIikAAIhdAAIAAAYIAAARgAmrjPIAACFIAABJIAWAUIAUATIAAA0IAAA5IA0AlIBdBCIA0AkIA5AAIA+AAIAAgYIAAgSIF4AAIAAAcIAsAAIApAAIARgoIARgoIgeg0Igfg0IhMAAIhIAAIAjghIAmgkIAAg2IAAg5IgmgpIhFhJIgkgmIAIgOIgegbIhXAAIi5AAIi9AAIhbAAIAABOg");
	this.shape_72.setTransform(67.2,33);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FFFFFF","#FBBC5E"],[0,1],-77.8,0.1,62.3,-0.2).s().p("Ai+EkIjKiOIAAhtIgogpIAAkjIIvAAIAjAgIgHAOICNCWIAAB1IhAA7ICJAAIBABuIgkBXIhgAAIAAgcIlsAAIAAAqg");
	this.shape_73.setTransform(67.2,33);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_74.setTransform(585.5,48.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_75.setTransform(582.4,48.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_76.setTransform(579.3,48.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_77.setTransform(577,48.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_78.setTransform(535.7,49.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_79.setTransform(532.7,49.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_80.setTransform(529.6,49.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_81.setTransform(527.2,49.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_82.setTransform(584.7,48.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_83.setTransform(581.6,48.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_84.setTransform(578.6,48.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_85.setTransform(581.7,48.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ADADAD").s().p("Ag3AlIAAhIIBvAAIAABIg");
	this.shape_86.setTransform(581.7,48.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_87.setTransform(534.9,48.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_88.setTransform(531.9,48.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_89.setTransform(528.8,48.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_90.setTransform(531.9,49.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#ADADAD").s().p("Ag3AkIAAhHIBvAAIAABHg");
	this.shape_91.setTransform(532,49.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_92.setTransform(522.2,48.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_93.setTransform(519.2,48.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_94.setTransform(516.1,48.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_95.setTransform(513.7,48.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_96.setTransform(472.5,49.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_97.setTransform(469.4,49.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_98.setTransform(466.4,49.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_99.setTransform(464,49.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_100.setTransform(521.4,48.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_101.setTransform(518.4,48.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_102.setTransform(515.3,48.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_103.setTransform(518.4,48.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#ADADAD").s().p("Ag3AlIAAhIIBvAAIAABIg");
	this.shape_104.setTransform(518.5,48.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_105.setTransform(471.7,48.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_106.setTransform(468.6,48.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_107.setTransform(465.6,48.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_108.setTransform(468.7,49.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#ADADAD").s().p("Ag3AkIAAhHIBvAAIAABHg");
	this.shape_109.setTransform(468.7,49.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_110.setTransform(457.2,48.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_111.setTransform(454.2,48.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_112.setTransform(451.1,48.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_113.setTransform(448.7,48.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_114.setTransform(407.5,49.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_115.setTransform(404.4,49.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_116.setTransform(401.4,49.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_117.setTransform(399,49.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_118.setTransform(456.4,48.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_119.setTransform(453.4,48.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_120.setTransform(450.3,48.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_121.setTransform(453.4,48.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#ADADAD").s().p("Ag3AlIAAhIIBvAAIAABIg");
	this.shape_122.setTransform(453.5,48.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_123.setTransform(406.7,48.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_124.setTransform(403.6,48.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_125.setTransform(400.6,48.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_126.setTransform(403.7,49.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#ADADAD").s().p("Ag3AkIAAhHIBvAAIAABHg");
	this.shape_127.setTransform(403.7,49.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#161616").ss(0.5,1,1,3,true).p("AO3API9tAAIAAgdIdtAAg");
	this.shape_128.setTransform(493.6,51.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FBBC5E").s().p("Au2APIAAgcIdtAAIAAAcg");
	this.shape_129.setTransform(493.6,51.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C6C6C6").s().p("AuuAYIAAgvIddAAIAAAvg");
	this.shape_130.setTransform(493.5,51.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_131.setTransform(358.6,14.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_132.setTransform(355.5,14.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_133.setTransform(352.5,14.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_134.setTransform(350.1,14.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_135.setTransform(308.8,14.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_136.setTransform(305.8,14.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_137.setTransform(302.7,14.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_138.setTransform(300.3,14.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_139.setTransform(357.8,14);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_140.setTransform(354.7,14);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_141.setTransform(351.7,14);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_142.setTransform(354.8,14.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#ADADAD").s().p("Ag3AkIAAhIIBvAAIAABIg");
	this.shape_143.setTransform(354.8,14.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_144.setTransform(308,14.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_145.setTransform(305,14.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_146.setTransform(301.9,14.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgfIgzAAIgyAAIAAAfg");
	this.shape_147.setTransform(305,14.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#ADADAD").s().p("Ag3AkIAAhIIBvAAIAABIg");
	this.shape_148.setTransform(305.1,14.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_149.setTransform(378.6,14.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_150.setTransform(375.5,14.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_151.setTransform(372.5,14.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_152.setTransform(370.1,14.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_153.setTransform(328.8,14.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_154.setTransform(325.8,14.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_155.setTransform(322.7,14.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_156.setTransform(320.3,14.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_157.setTransform(377.8,14);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_158.setTransform(374.7,14);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_159.setTransform(371.7,14);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_160.setTransform(374.8,14.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#ADADAD").s().p("Ag3AkIAAhIIBvAAIAABIg");
	this.shape_161.setTransform(374.8,14.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_162.setTransform(328,14.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_163.setTransform(325,14.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_164.setTransform(321.9,14.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgfIgzAAIgyAAIAAAfg");
	this.shape_165.setTransform(325,14.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#ADADAD").s().p("Ag3AkIAAhIIBvAAIAABIg");
	this.shape_166.setTransform(325.1,14.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#020202").s().p("AgegRIADgFIA6AoIgDAEg");
	this.shape_167.setTransform(393.2,16.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#020202").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUgAgQAAQACAPAOACQAPgCACgPQgCgPgPgBQgOACgCAOg");
	this.shape_168.setTransform(397.8,19.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#898B8C").s().p("AhrBnIAAhIIBeiFIB5AAIAAAFIg7AAIg8AAIgtBCIgtA/IAAAkIAAAjg");
	this.shape_169.setTransform(395.9,18);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EFEDED").s().p("AhmBfIArgBIBPAAIAtgBIARgcIAQgcIAAhEIAAhEIAFAAIAACKIgjA8IiqABg");
	this.shape_170.setTransform(396,18.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#020202").s().p("Ah3B0IAAhaIBkiNICLAAIAACeIgtBJgAg9gkIgvBBIAAAkIAAAoIAyAAIBRAAIAuAAIAVghIATggIAAhFIAAhMIhAAAIg6AAIgwBFg");
	this.shape_171.setTransform(396.1,18.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#FFFFFF","#BEBEBE"],[0,1],27.5,19.3,-35.1,-24.6).s().p("AhxBvIAAhUIBhiJICCAAIAACXIgpBGg");
	this.shape_172.setTransform(396,18.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("A9IADIAAgFMA6RAAAIAAAFg");
	this.shape_173.setTransform(258,15.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C6C6C6").s().p("A9IAPIAAgdMA6RAAAIAAAdg");
	this.shape_174.setTransform(258,16.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_175.setTransform(586.8,4.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_176.setTransform(583.8,4.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_177.setTransform(580.7,4.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgBAfIAAg9IADAAIAAA9g");
	this.shape_178.setTransform(578.3,4.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_179.setTransform(419.9,4.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_180.setTransform(416.8,4.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_181.setTransform(413.8,4.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_182.setTransform(411.4,4.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#5383BE").s().p("AgMAjIAAhGIAZAAIAAAGIgTAAIAABAg");
	this.shape_183.setTransform(592.2,49.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#5383BE").s().p("ALKCGIAAgGIAbAAIAfAAIAAg+IAAg6IgmgvIgngxIiaAAIluAAImxAAIltAAIiZAAIAAgtIAGAAIAAASIAAAWICaAAIFtAAIGxAAIFrAAICZAAIBPBjIAACAg");
	this.shape_184.setTransform(517.3,20.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0B437F").s().p("Ag9ALIAAgVIACAAIAAASIA9AAIA8AAIAAADg");
	this.shape_185.setTransform(582.8,7.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_186.setTransform(586,4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_187.setTransform(583,4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_188.setTransform(579.9,4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_189.setTransform(583,4.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ADADAD").s().p("Ag3AlIAAhIIBvAAIAABIg");
	this.shape_190.setTransform(583.1,4.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_191.setTransform(419.1,4.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_192.setTransform(416,4.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_193.setTransform(413,4.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#050505").s().p("Ag8AqIAAhTIB5AAIAABTgAgyAAIAAAfIAyAAIAzAAIAAgfIAAgeIgzAAIgyAAIAAAeg");
	this.shape_194.setTransform(416.1,4.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#ADADAD").s().p("Ag3AkIAAhIIBvAAIAABIg");
	this.shape_195.setTransform(416.1,4.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EFEDED").s().p("AvLCxIAAhgICwkBIbnAAIAAAFIi3AAIm2AAIoIAAIm3AAIi4AAIguBDIhTB4IgtBCIAAAwIAAAvg");
	this.shape_196.setTransform(482.8,21.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#FFFFFF","#BEBEBE"],[0,1],-89.3,-50.7,144.3,75.8).s().p("AtZCtIg9hLIgbggIAAh+IAegsIAvhEIcVAAIABFZg");
	this.shape_197.setTransform(491.2,36.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#050505").s().p("AO6C7IABiWIABiQIAAhFIjAAAInEAAIoYAAInDAAIi/AAIgtBCIgsBBIAAA9IAABAIAbAhIA9BKIgNAAIhWhnIAAiFIBfiJIcuAAIgDF1g");
	this.shape_198.setTransform(492.2,34.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#A5A5A5").s().p("AtpC5IhYhqIAAiAIBciHIcnAAIgDFxg");
	this.shape_199.setTransform(492.2,35);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AtfDqIhAhNIgUALIgSAJIg0gwIAAgYIAUAAIAXAAIAAg3IAAgzIB1iwIA7AAIBuAAIA9AAIAQgcIAQgcIZNAAIAAACIinAAImQAAInbAAImRAAIioAAIgRAdIgQAcIg7AAIhuAAIg9AAIgeAuIg4BTIgeAtIAAA1IAAA2IgUAAIgXAAIAAAUIAZAYIAaAXIATgKIASgKIBEBQg");
	this.shape_200.setTransform(486.3,30);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#050505").s().p("AQADvIAAhRIAAglIAYgdIAZgfIAAhFIAAhHIg1hJIg2hLIipAAImQAAInaAAImQAAIipAAIgQAcIgNAZIg8AAIhxAAIhAAAIgfAvIg4BUIgfAsIAAA4IAAA1IgSAAIgYAAIAAAVIAZAZIAbAbIAWgMIARgJIBBBNIgOAAIg1hAIgWAMIgRAJIg9g9IAAgjIASAAIAZAAIAAg3IAAguIB6i4IA8AAIBxAAIBAAAIAPgcIANgZIZZAAIBwCcIAACSIgYAdIgaAgIAAAlIAABNg");
	this.shape_201.setTransform(491.5,29.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FBBC5E").s().p("AubDsIg7hGIgnAVIg5g5IAAgcIArAAIAAhoIB4i0IDtAAIAdg1IZSAAIBtCYIAACPIgxA8IAAB0g");
	this.shape_202.setTransform(491.5,29.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#050505").s().p("AhMgoIDQAAIAABLIkHAGgAhYgCIgXAgIBDgCIBogCIA9gBIAAgaIAAgcIg1AAIhYAAIgyAAIgSAbg");
	this.shape_203.setTransform(415.7,11.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#050505").s().p("AvZDDIAAiDICykGIcBAAIAABhI9wEsgAtPh3IhSB4IgtBDIAAA4IAAA9IAeABIAZABIDFgeIHVhKIIuhWIHWhJIDIggIAAgmIAAgpIi8AAIm5AAIoKAAIm4AAIi6AAIgtBEg");
	this.shape_204.setTransform(483,22.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C6C6C6").s().p("AvTC+IAAh8ICvkCIb4AAIAABXI9qEqgAsahMID6gEIAAhDIjKAAg");
	this.shape_205.setTransform(483,22.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#050505").s().p("AkIAxIAAhhIIRAAIAABhgAj9AAIAAAmICGAAIDvAAICGAAIAAgmIAAgmIiGAAIjvAAIiGAAIAAAmg");
	this.shape_206.setTransform(429.4,11);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#898B8C").s().p("AkCAsIAAhXIIFAAIAABXg");
	this.shape_207.setTransform(429.4,10.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#D69F56").s().p("AALCeIAAhJIAAhOIgYAAIgWAAIAAiyIAPAAIAAAHIgIAAIAABTIAABRIAaAAIAUAAIAAAnIAABKIAAApIASANIgEAFg");
	this.shape_208.setTransform(7.7,34.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D69F56").s().p("AESAYIAAgTIAAgVIhYAAIi6AAIi5AAIhXAAIAAAJIgHAAIAAgQIIvAAIAAAvg");
	this.shape_209.setTransform(60.2,63.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#BCBCBC").s().p("A5OANIAAgZMAydAAAIAAAZg");
	this.shape_210.setTransform(225.5,20.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(1,1,1,3,true).p("EAhuACNMhDbAAAIAAkZMBDbAAAg");
	this.shape_211.setTransform(275.4,32.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#FFFFFF","#BEBEBE"],[0,1],-205,-111,311.6,168.7).s().p("EghtACNIAAkZMBDbAAAIAAEZg");
	this.shape_212.setTransform(275.4,32.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FBBC5E").s().p("EghpAC/IAAl9MBDTAAAIAAF9g");
	this.shape_213.setTransform(270.2,31.9);

	this.addChild(this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.score,this.text,this.lives,this.turboIndicator,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,0,597.9,69.8);


(lib.bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bullet
	this.instance = new lib.anim_amunisi();
	this.instance.setTransform(2.4,13.9,0.866,0.772);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAgSQAJAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgJAAQgIAAgGgGQgGgFgBgIQABgHAGgFQAGgGAIAAg");
	this.shape.setTransform(2.4,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,6.8,39.1);


(lib.anim_UFO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UFO_pic("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 2
	this.instance_1 = new lib.anim_engine();
	this.instance_1.setTransform(3.8,50.9,1,0.376);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-40.3,112.5,106);


(lib.anim_ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plane("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 2
	this.instance_1 = new lib.anim_engine();
	this.instance_1.setTransform(1.2,28.6,0.517,0.294);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,59.1);


(lib.ufo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,explode:6,fail:14,drop:21});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_13 = function() {
		/* stop();*/
	}
	this.frame_20 = function() {
		/* gotoAndPlay("static");*/
	}
	this.frame_21 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(7).call(this.frame_20).wait(1).call(this.frame_21).wait(5));

	// Text
	this.text = new cjs.Text("", "16px 'ComicSansMS-Bold'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 96;
	this.text.setTransform(53.3,0,1.001,1);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},6).wait(8).to({_off:false},0).wait(1).to({x:59.3},0).wait(1).to({x:50.3},0).wait(1).to({x:55.3},0).wait(1).to({x:47.3},0).wait(1).to({x:53.3},0).to({_off:true},2).wait(5));

	// Hidden hit test
	this.hiddenHitTest = new lib.hiddenHitTest();
	this.hiddenHitTest.setTransform(54.5,39,1,1,0,0,0,53.5,38);
	this.hiddenHitTest.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hiddenHitTest).to({_off:true},6).wait(20));

	// Anim
	this.instance = new lib.anim_UFO();
	this.instance.setTransform(55.2,40.5,1.001,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgjgcIAvgVIAyAkQgLAWALATIgUAPQgKAAgTAHIgFgQQAAgOgNAEIgVACIgHgMIgDgDQgEgDgFAEIgQgIQANgXANgJg");
	this.shape.setTransform(58.9,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#57677F").s().p("AAIAiQAAgOgNAEIgVACIgHgMIgDgDQgEgDgFAEIgQgIQANgXANgJIAvgVIAyAkQgLAWALATIgUAPQgKAAgTAHg");
	this.shape_1.setTransform(58.9,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAWQAAgFgGgEQgJgEgEACQgLAHgGgMQgHgMgEAFQgDABgIgDQgJgFgDgGIB8gVIADAKQgHAZAKANIgDAGQgHAGgIACIghAJg");
	this.shape_2.setTransform(59.2,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgvgtQAKgDALAPQAHAJAKgFIAagdQAKABAIAHQADABADAAQAHgBACgJIAZgGQAJAmgHAWIghBBIhTAHIgIgTQgNgVgTgGQgBgWAKgKg");
	this.shape_3.setTransform(46.7,101.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#57677F").s().p("AgvAwQgNgVgTgGQgBgWAKgKIAXgiQAKgDALAPQAHAJAKgFIAagdQAKABAIAHQADABADAAQAHgBACgJIAZgGQAJAmgHAWIghBBIhTAHg");
	this.shape_4.setTransform(46.7,101.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpA9IgLgRQgPgTgOgEQgFgPALgNQAcgnAAgBQAPABAHAGQAFAFAMgDQALgDACgIQAFgQASAHQAUAJAAgJQAAgGAOgDQAOgDAIAFIhxCGg");
	this.shape_5.setTransform(45.7,100.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgQgPQADgBAFAFQACAEAEgCIAIgLQADAAADADIAGgDIAJgDQADAOgCAIIgMAWIgdADIgDgHQgFgIgHgCQAAgHADgDg");
	this.shape_6.setTransform(3.4,67.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#57677F").s().p("AgQARQgFgIgHgCQAAgHADgDIAJgMQADgBAFAFQACAEAEgCIAIgLQADAAADADIAGgDIAJgDQADAOgCAIIgMAWIgdADg");
	this.shape_7.setTransform(3.4,67.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAWIgOgOQgCgGAEgDIAKgPQAGABACACQAIAGACgJQABgGAHACQAHAEAAgEQAAgCAFgBQAFgBADACIgoAvg");
	this.shape_8.setTransform(3,67);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgQgPQADgBAFAFQACAEAEgCIAIgLQADAAADADIAGgDIAJgDQADAOgCAIIgMAXIgdACIgDgHQgFgIgHgCQAAgHADgDg");
	this.shape_9.setTransform(19.8,80.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#57677F").s().p("AgQARQgFgIgHgCQAAgHADgDIAJgMQADgBAFAFQACAEAEgCIAIgLQADAAADADIAGgDIAJgDQADAOgCAIIgMAXIgdACg");
	this.shape_10.setTransform(19.8,80.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAWIgOgOQgCgGAEgDIAKgPQAFABADACQAIAGACgJQABgGAHACQAHAEAAgEQAAgCAFgBQAFgBADACIgoAvg");
	this.shape_11.setTransform(19.4,80.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgdAIQAAgIADgDIAJgNQAEgBAEAGQADADADgCIADgCIAGgJQAEABADACIAGgDIAJgDQADAPgCAIIgNAYIgeACIgDgHQgFgIgHgCg");
	this.shape_12.setTransform(9.8,22.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#57677F").s().p("AgRASQgFgIgHgCQAAgIADgDIAJgNQAEgBAEAGQADADADgCIADgCIAGgJQAEABADACIAGgDIAJgDQADAPgCAIIgNAYIgeACg");
	this.shape_13.setTransform(9.8,22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAXIgPgPQgCgGAFgDIAKgQQAGABACACQACACAFgBQADgBABgDQABgHAHADQAIAEAAgEQAAgCAFgBQAFgBADACIgpAxg");
	this.shape_14.setTransform(9.5,22.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAQAWIgeADIgDgHQgFgIgHgDQAAgHADgEIAJgMQAEgCAEAHQADADADgCIAJgLQAEAAADADIAGgDIAJgDQADAOgCAJg");
	this.shape_15.setTransform(94.4,82.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#57677F").s().p("AgRASQgFgIgHgCQAAgIADgEIAJgMQAEgCAEAGQADAFADgCIAJgMQAEABADACIAGgEIAJgCQADAOgCAJIgNAXIgeADg");
	this.shape_16.setTransform(94.4,82.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPAXIgPgPQgBgGAEgEIAKgPQAGAAACADQACABAFAAQADgBABgDQABgHAHADQAIAEAAgEQAAgCAFgBQAFgCADACIgpAyg");
	this.shape_17.setTransform(94.1,82.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AgRgCIAGgJQACgBADAEIAGAAIAEgGQADAAACACIAEgCIAGgCQADAKgCAGIgJAPIgUACIgLgMQAAgFADgCg");
	this.shape_18.setTransform(14.7,53.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#57677F").s().p("AgUAFQAAgFADgCIAGgJQACgBADAEIAGAAIAEgGIAFACIAEgCIAGgCQADAKgCAGIgJAPIgUACg");
	this.shape_19.setTransform(14.7,53.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKAQIgKgKQgCgFADgBIAIgLQAEAAABACQAGAFABgHQABgFAFACQAFACAAgCQAAgGAKAEIgdAig");
	this.shape_20.setTransform(14.4,53.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AgTAFQAAgFACgCIAGgJQADAAADAEIAFgCIAFgFQACAAACACIAEgCIAHgCIAAAPIgIARIgVABg");
	this.shape_21.setTransform(29.4,76.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#57677F").s().p("AgTAFQAAgFACgCIAGgJQADgBADAFIAFgBIAFgGQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAIAEgDIAHgBIAAAQIgIAQIgVABg");
	this.shape_22.setTransform(29.4,76.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKAQIgKgLQgBgEACgCQAIgIAAgCQAEAAABACQAGAFABgIQACgEAEACQAFACAAgCQAAgBAAAAQABAAAAgBQAAAAABAAQABAAABAAQAEgBACABIgdAig");
	this.shape_23.setTransform(29.2,76.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AATgQQADAKgCAGIgJAPIgUACIgLgMQAAgFACgCIAHgJQACgBADAEIAGAAIAEgGQADAAACACIAEgCg");
	this.shape_24.setTransform(11.7,68.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#57677F").s().p("AgUAFQAAgFACgCIAHgJQACgBADAEIAGAAIAEgGIAFACIAEgCIAGgCQADAKgCAGIgJAPIgUACg");
	this.shape_25.setTransform(11.7,68.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAQIgKgKQgCgEADgCIAIgLQAEAAABACQAGAFABgHQABgFAFACQAFACAAgCQAAgGAKAEIgdAig");
	this.shape_26.setTransform(11.5,68.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AgGACQgBgCABAAIADgDQABAAABABIABAAIABgCIACAAIACgBIACAAQABAEgBABIgDAFIgGABg");
	this.shape_27.setTransform(13.7,29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#57677F").s().p("AgGACQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIADgDIACABIABAAIABgCIACAAIACgBIACAAIAAAFIgDAFIgGABg");
	this.shape_28.setTransform(13.7,29.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgDAGIgEgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgDIACABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAgBQAAAAAAAAQAAgEAEAEIgJALg");
	this.shape_29.setTransform(13.6,29);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AAMAPIgVACIgKgMQgBgFADgCIAGgJQADAAADAEIAFgBIAFgGQACAAACACIAEgCIAHgCIAAAQg");
	this.shape_30.setTransform(45.1,7.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#57677F").s().p("AgTAFQgBgFADgCIAGgJQADAAADAEIAFgBIAFgGQACAAACACIAEgCIAHgCIAAAQIgIAPIgVACg");
	this.shape_31.setTransform(45.1,7.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKAQIgKgKQgCgEADgCIAIgLQAEABABABQAGAGABgIQABgFAFACQAFACAAgCQAAgGAKAEIgdAig");
	this.shape_32.setTransform(44.9,7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AgMADQAAgDACgBIADgFQACAAACACIADgBIACgDQACAAABABIADgCIAEgBQABAHgBADIgFAKIgMABg");
	this.shape_33.setTransform(85.2,39);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#57677F").s().p("AgMADQAAgDACgBIADgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAABABIADAAIACgEIADABIADgCIAEgBQABAHgBADIgFAJIgMACg");
	this.shape_34.setTransform(85.2,39);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGALIgGgHQgBgDACgBIAEgGIAEACQADAEAAgGQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABABQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAQAAgGAGAFIgRAUg");
	this.shape_35.setTransform(85.1,38.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AALAPIgUADIgLgNQAAgFACgCIAHgJQACgBADAEIAGgBIAEgGQADABACABIAEgCIAGgCQACAKgBAGg");
	this.shape_36.setTransform(69.8,14.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#57677F").s().p("AgUAEQAAgEACgCIAHgJQACgBADAEIAGAAIAEgHIAFACIAEgCIAGgBQACAJgBAHIgJAQIgUACg");
	this.shape_37.setTransform(69.8,14.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgJARIgLgLQgBgFACgBIAIgLQAEAAABACQABAAAAABQABAAAAAAQABAAABAAQAAAAABgBQABAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABgFAFACQAGACAAgCQAAgHAJAFIgdAjg");
	this.shape_38.setTransform(69.5,14.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AATgQQACAKgBAFIgJAQIgUACIgLgMQAAgFACgCIAHgJQACgBADAEIAGgBIAEgFQACAAADACIAEgDg");
	this.shape_39.setTransform(52.1,52.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#57677F").s().p("AgUAFQAAgFACgCIAHgJQACgBADAFIAGgCIAEgFQACAAADACIAEgCIAGgCQACAKgBAFIgJAQIgUACg");
	this.shape_40.setTransform(52.1,52.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgJAQIgLgLQgBgEADgCIAHgKQAEAAACACQAFAGABgJQACgEAEACQABAAABABQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAEgBACABIgcAig");
	this.shape_41.setTransform(51.8,52.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AgLgLQACgBADAEIAGAAIAEgGQADAAACACIAEgCIAGgCQACAKgBAGIgJAPIgUACIgLgMQAAgFACgCg");
	this.shape_42.setTransform(60.4,61.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#57677F").s().p("AgUAFQAAgFACgCIAHgJQACgBADAEIAGAAIAEgGIAFACIAEgCIAGgCQACAKgBAGIgJAPIgUACg");
	this.shape_43.setTransform(60.4,61.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJARIgLgLQgCgEAEgCIAHgKQAEAAABABQABABAAAAQABAAAAAAQABAAABAAQAAAAABAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQACgEAEACQAGACgBgCQABgIAIAGIgbAig");
	this.shape_44.setTransform(60.1,61.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AhCgZQACANAQAMQAgAbBEACQAHABAEgBQAJgDgLgMQg2g3hJAQg");
	this.shape_45.setTransform(36.6,67.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E5E5E5").s().p("AA0AdQhEgCgggbQgQgMgCgNQBJgQA2A3QALAMgJADIgFAAIgGAAg");
	this.shape_46.setTransform(36.6,67.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAwAdQg/gCgdgbQgOgMgCgNQBDgQAxA3QAKAMgIADIgFAAIgFAAg");
	this.shape_47.setTransform(38.3,67.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AhjhMQALAYAeAgQA8A9BiAlIgggJQgmgMgegPQhmgxADhFg");
	this.shape_48.setTransform(30.3,51.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E5E5E5").s().p("ABEBFQgmgMgegQQhmgwADhFQALAYAeAfQA8A9BiAlg");
	this.shape_49.setTransform(30.3,51.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("Ag+heQALAaAfAMQALAFAIAOQAKATAiAPQARAFAEALQACAGgBAVQgCAfAgAPIAFAOIgfgKQglgMgggQQhigzgBg9QAIhBAdAVg");
	this.shape_50.setTransform(30.3,49.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A2BDDD").s().p("ABFBaQglgMgggQQhigzgBg9QAIhBAdAVQALAaAfAMQALAFAIAOQAKATAiAPQARAFAEALQACAGgBAVQgCAfAgAPIAFAOg");
	this.shape_51.setTransform(30.3,49.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAEABgBABQAAABgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAAAg");
	this.shape_52.setTransform(28.4,18.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgCAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAAAAAQADABAAABQgBADgCAAQgCAAAAgDg");
	this.shape_53.setTransform(28.6,20.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AAAARIgJACQgDgBAEgeQAIgGACAAQAKAcgBAIg");
	this.shape_54.setTransform(28.7,19.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFC757").s().p("AgIgMQAIgGACAAQAKAcgBAIIgLgBIgJACQgDgBAEgeg");
	this.shape_55.setTransform(28.7,19.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGgTIASAfIgCAFQgDACgHgDIgJAEQgHgYAKgPg");
	this.shape_56.setTransform(28.6,19.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAAAJQgJgBABgIQACgJAHACQAKABgCAHQgCAIgHAAIAAAAg");
	this.shape_57.setTransform(28,7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAAAJQgJgBABgIQACgJAHACQAKABgCAHQgCAIgHAAIAAAAg");
	this.shape_58.setTransform(28.5,11.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("AABAvIgbAGQgKgCAMhXQAWgSAKACQAZBQgCAXg");
	this.shape_59.setTransform(28.8,8.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFC757").s().p("AgYgkQAWgSAKACQAZBQgCAXIgegEIgbAGQgKgCAMhXg");
	this.shape_60.setTransform(28.8,8.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTg2IA2BXIAAAGQgBAGgGADQgEACgJgEQgKgFgEACQgFAEgWAIQgThEAagpg");
	this.shape_61.setTransform(28.4,10.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_62.setTransform(92.3,29.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_63.setTransform(27.1,30.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_64.setTransform(30.2,35.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_65.setTransform(35.4,40);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_66.setTransform(41.7,42.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgIAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJg");
	this.shape_67.setTransform(88,31);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AAighQAVASAAAMIgpASQgqATgOABIgCgeIgKgaQABgKBXgCg");
	this.shape_68.setTransform(90.5,31.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFC757").s().p("AgsAFIgKgbQABgKBXgBQAVASAAAMIgpARQgqAUgOABg");
	this.shape_69.setTransform(90.5,31.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#777777").ss(1,1,1).p("AhZAUQBtgMBGASIgOgUQgOgTgDgMIg4ACQg9AKgfAhg");
	this.shape_70.setTransform(48.8,25.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#ABB0B7").s().p("AhZAUQAfghA9gKIA4gCQADAMAOATIANAUQhGgShsAMg");
	this.shape_71.setTransform(48.8,25.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AhSAOQAgAEAkgEQBHgHAagkQADABABAEQACAGgGAKIgGAIQgJAGgPAHQgwAWhXgHQgKgLAKgDg");
	this.shape_72.setTransform(75.4,50.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E5E5E5").s().p("AhSAcQgKgLAKgDQAgAEAkgEQBHgHAagkQADABABAEQACAGgGAKIgGAIQgJAGgPAHQglARg7AAIgngCg");
	this.shape_73.setTransform(75.4,50.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AhRAzQAbgLAYgTQAtgkgPgkQBYAMgGAuIgGAIQgIAKgPAHQguAZhYgGg");
	this.shape_74.setTransform(75.4,46.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A2BDDD").s().p("AhRAzQAbgLAYgTQAtgkgPgkQBYAMgGAuIgGAIQgIAKgPAHQgmAUhBAAIgfgBg");
	this.shape_75.setTransform(75.4,46.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AhuhNQAFAkAfAoQA9BOB8AVIgBgKQgDgNgPgQIgCgCQgBgEADgIQAJgTgLgGQgDgDg/gYQg/gkgVg2g");
	this.shape_76.setTransform(35.5,37.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFC757").s().p("AhKgCQgfgogFgjIAygUQAVA2A/AkIBCAbQALAGgJATQgDAIABAEIACACQAPAQADANIABALQh8gXg9hOg");
	this.shape_77.setTransform(35.5,37.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AhDAFQAlARAEAKQAEAJAngWQAqgWAJgeIggAWQgrAUg8gEg");
	this.shape_78.setTransform(76.5,52.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#57677F").s().p("AgaAgQgEgKglgRQA8AEArgUIAggWQgJAegqAWQgbAPgKAAQgFAAgBgCg");
	this.shape_79.setTransform(76.5,52.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAIAoIgTgYQgSgbASgfQASAKAAAIQgEARACAGIAKASQAIASgDAIg");
	this.shape_80.setTransform(45.8,43.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhkAIQAAgJAOgIQASgKBEABQBDACAQAMQANAIAEAIIABAHQgjgTimAIg");
	this.shape_81.setTransform(49.1,28.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AglAhQgDgEACgKQADgKgCgDIgRgZQBAgeAtATIhNBEIgFAAQgHAAgDgFg");
	this.shape_82.setTransform(88.5,31);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F7F6CD").s().p("AgfC/QgMgJAMgSQAPgWAAgCQAAgIgLgFQgLgEAAgIQABgGALgGQAKgGgBgGQAAgCgDgEQgGgGgTgDIgJgGQgEgDgJACQgKACgQAOQgQAOgJACQADgHAPgLQALgRgEgRQgEgTgVAFIgiALQgXAHgNgCQAFgHANgDQAQgDAEgDQAZgQAFgNQADgGgBgNQACgGALgJQACgJgRgZQgIgdgQgOQApAiATgRQAIgHgCgUIgDgeQAHAEABAMQABAOAEAEQALAOAegBQAbAAAOgMQAOgLACgcQAAgQgCgdQAGAXAAAgQAAAWAFADQALAGAEgIQgBAEADAEQAEAGAJgBQAFARAbAEIABAGQAQADAegGQgFACgMAKQgFADgQAEQgGAEABAOQABARgDAEQgMAFgCAGQgIAUAgAfIAxAnQgFAFAMAPQALAOAJAGQgSgEgcgaQgJgFgSgHQgRgLgDAAQgCAHAGAIIAKAMQAGAZAFAHQgIgKgVgQQgTgRgIAAQgDAAgLAEQgFAAgIgGQgGABgIAHQgHAHgIgBQAAAIgIAEQgIADgBADQgBAFAFAHQAEAHgBAFQgKAOgBAHQAEALAAAFQABAJgGAHQgEAFgFAAQgEAAgFgEg");
	this.shape_83.setTransform(51.1,49.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7F6A2").s().p("AguEZQgRgOAQgZQAWghAAgDQABgMgQgGQgRgHABgMQAAgJAQgJQAQgJgBgIQgBgFgEgEQgJgIgbgFIgOgJQgHgFgMADQgQADgXAVQgXAVgNADQAFgLAVgQQARgYgGgZQgGgcggAGIgyAQQghALgTgDQAIgKASgEQAXgGAGgDQAlgXAIgUQAEgJgCgUQACgEAJgHQAHgGABgFQADgNgYgmQgLgogYgVQA8AwAbgYQAMgLgCgeQgBgQgEgbQALAGABASQACAUAFAGQARAUAsgBQAogBAUgRQAWgRACgpQABgWgDgrQAIAhAAAvQAAAhAIAEQAPAJAGgMQgBAGAEAGQAHAIANgBQAHAZAoAHIABAJQAXAEAtgJQgIADgRAPQgIAFgWAEQgKAHABAVQACAYgEAHQgSAHgDAIQgFAPAOAZQAMAWAOAOQAFAGBEA0QgIAHASAXQAPAUAOAIQgbgFgpgmQgNgHgagLQgGgEgIgIQgGgFgJAAQgDAMAIAKQALALAEAHQAJAmAIAKIgrgmQgbgagNAAQgEAAgRAGQgHgBgNgIQgIABgLALQgKALgMgCQAAAMgNAFQgLAFgCAEQgCAHAHALQAHAKgCAHQgPAUgCALQAGAQABAIQABANgJALQgGAHgHAAQgGAAgHgGg");
	this.shape_84.setTransform(51.1,50);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FC8535").s().p("Ag9DmIgRgiQgCgHgCgWQgDgYgEgFQgQgSguACIhCAEQACgQgOgUQgOgUADgSIhEgBQAGgKASgMQASgMAFgIQAKgLACgTIABgnQACg1gEgQQgFgZgcggQBUARAVgNQANgJgBgbQgBgdALgKQAKAGATADQAVADAIAFQAbAaAOAJQA3g6AGgBQALgDARAMQAUAOAIABIAhgHQASgEAOAZQAFAIADAXQACAOARAJQAUALBAgPQgKADgVAWQgKAGgcAHQgMAKACAdQACAigFAJQgCAGgMAFQgKAFgCAGQgGAVASAkQAOAgARATQAHAIBUBJQgKALAWAgQASAbARANQgTgEgYgWQgigfgGgFIgxgbQgLABAAAOQgBAOAKABQgNAAgigLQgdgKgTAEQgOADgYAOQgZAOgOADQgVAEgFADQgLAEgKAPQgEAGgBAUQgBAOgOAEQAKgSgHgSg");
	this.shape_85.setTransform(51.4,53.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF6F00").s().p("AhOH0QgdgYAdgtIAXgjQANgSAAgKQABgWgcgMQgbgMABgUQABgQAbgQQAagQgCgOQgBgKgHgHQgOgOgugJQgEgBgUgPQgKgIgUAEQgbAGgmAlQgnAmgWAFQAFgLAPgNQASgPAFgIQAcgsgJgtQgKgxg0ALIhUAcQg3AUgfgFQAMgSAfgIQAngJAJgHQA/gqAMghQADgJgCgRQgBgTAEgJQACgGAOgNQANgLACgJQADgOgRgfQgUgmgCgHQgShJgnglQAgAcAkAQQAzAXAZgYQAUgTgDg0QgCgdgGgyQASAMACAgQADAkAIALQAbAjBKgCQBEgCAigdQAkgfADhJQACgogFhMQANA5AABWQgCAYABAMQABAWAOAIQANAIALgGQAHgEAEgHQgCAMAHALQALAQAVgCQAMAsBDAMIACAQQAnAJBKgRQgOAFgbAbQgGAEgUAEQgSADgHAFQgRANADAkQADArgHAMQgDAHgPAHQgOAGgDAIQgIAaAYAuQATAoAXAZQAJAJBxBcQgNANAeApQAZAjAWAQQgZgFghgdQgsglgLgHQgUgMgtgTQgKgIgMgNQgLgKgPABQgEAUANASQASAUAHAMQAHALAHAiQAHAfAGAJIhGhDIghghQgPgMgTgBQgDAAgMAFQgLAGgIAAQgGgBgLgIQgLgHgFAAQgNACgTAUQgSASgTgDQgBAWgVAIQgUAJgDAIQgDAMAMASQAMASgEAOQgZAkgDATQgCALAGAMQAHAPAAAFQABAXgPASQgJAMgLAAQgLAAgMgKg");
	this.shape_86.setTransform(50.5,51.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EFEFEF").s().p("AghHDQgrgKAFgeQACgJAMgLQAMgLABgMQACgWgbgpQgEgNAEgXQAEgXgDgLQgEgNgigXQgTgOgLgBQgNgBgTAOIgZAXQgMAMgPADQgSADghAOQgCgLAQgMQAVgPACgGQAFgKgEgrQgDgmgYgLQgQgIgPAIIgdANQgVAFg0gDQhBAIAYgYQAJgJAagFQAbgFALgKQAVgTAZgiQALgQADgcQACgcgFgVIgJgQQgGgJADgHQADgKAYgOQAIgQgMgYQgGgLgRgSQgDgLAGgWQgBgLgQglQgMgdAJgYQAOAHAWAkQAUAfAWAAQAfAAALgYQASgjACgMQgIgyAQgDQAFAXAEAIQAFANAWAHQABANAjAHQAcAFAKgSQALgDAUANQAUAMANgFQALgDAngkQARgQACgFQgCgLADgFQADgFAKgJQAGgOAIgtQARgDACA0QACA9ADAEQAKgBADADQAFAKAGAEQAIAEAPAEIAYAHIAFALIAIAHQAFAEAIgCQgBATAZAKQAHADAiAIQgCAUAwADQA3AEAGAIQgHAGgfARQgYANgLAOQgQAVgCAWQgDAngLAaQgLAZAAAkQABAqARASQAbALAJAIQAIAIAOAYQATAgAVAIQABAKAKALQAMAOACAFIAIAcQADAJAMAQQAMAPACAJQgOAEgagRIglgaQgNgKgUgEIgigGQgCAPADAfQADAjAAAMQgOgEgQgTQgTgXgIgGQgSgKglAAQgMgCgUgHQgOgCgbAAQgZgFgJAGIgYAdQgPATgSAGQgDABgNABQgHAAgCAJQgEAJAEAWQAEAYgCAJQgDANgBAKQAAAKAGANQAIANAAAGQAAAYgYAAQgJAAgMgDg");
	this.shape_87.setTransform(48.8,53.4);

	this.instance_1 = new lib.ufoexplosion();
	this.instance_1.setTransform(69.3,111.5,1,1,0,0,0,69.3,111.5);
	this.instance_1._off = true;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#424F63").s().p("Ai0BdQASgRAHgPQAVgvhjABIC8gYQDKglBNg9QgaAyhDA0QiHBmjLAKg");
	this.shape_88.setTransform(82.4,34.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C9C8C7").s().p("Ag0AcQAHgLABgKQABgeg/gLIBGgCQBQADA/AWQgyAuhzACg");
	this.shape_89.setTransform(60.4,4.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhFAwQgHgUAAgTQABg5BHgQQgVAMBmAUQgjAJgiARQhEAggCAng");
	this.shape_90.setTransform(31.3,13.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag5AIIgXgRQAbghA0gEQgxAnA7AeQAfAQApAIQhggRgqgWg");
	this.shape_91.setTransform(13.6,23.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6B5632").s().p("AgVAAQAAgWAVAAQAXAAAAAWQAAAXgXAAQgVAAAAgXg");
	this.shape_92.setTransform(86.7,14);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6B5632").s().p("AgWAAQAAgWAWAAQAXAAgBAWQABAXgXgBQgWABAAgXg");
	this.shape_93.setTransform(76.4,17.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6B5632").s().p("AgVAAQAAgWAVAAQAVAAAAAWQAAAXgVAAQgVAAAAgXg");
	this.shape_94.setTransform(62.3,19.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6B5632").s().p("AgWAAQAAgVAWAAQAWAAAAAVQAAAVgWAAQgWAAAAgVg");
	this.shape_95.setTransform(47.9,20.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6B5632").s().p("AgWAAQAAgTAWAAQAXAAAAATQAAAUgXAAQgWAAAAgUg");
	this.shape_96.setTransform(33.3,19.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6B5632").s().p("AgTAAQAAgSATAAQAUAAAAASQAAATgUAAQgTAAAAgTg");
	this.shape_97.setTransform(20.1,16.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#777777").ss(1,1,1).p("Aj8BaQjDgYhnhDIgBgMQABgMAQgEQAcAbBOAXQCeAzD8gHQEGgHChhBQB2gyAKgtQAbADgLAnQgFARgrAcQgyAehKAbQjJBHj9gMQhNABhigMg");
	this.shape_98.setTransform(55.2,25);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E5E5E5").s().p("AhNBlQhNABhigMQjDgYhnhDIgBgMQABgMAQgEQAcAbBOAXQCeAzD8gHQEGgHChhBQB2gyAKgtQAbADgLAnQgFARgrAcQgyAehKAbQirA9jQAAQglAAgmgCg");
	this.shape_99.setTransform(55.2,25);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A2BDDD").s().p("AldBrQA+gNC6ggQCbgaBfgXQgFgNAAgcQAsgUAGgWQAFgWgjgTQC8ARgCAmQgBAPgdAZQghAag1AZQiMBCjAAIQg4ADg0AAQhLAAhEgFg");
	this.shape_100.setTransform(74.3,22);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#5D7591").ss(1,1,1).p("AlYgLQBoAoDQgFQDsgEBwgwQAwgVAHgYQAHgYgmgTQDFARgCAoQgBAQgeAaQgjAbg4AbQiTBFjLAJQjsAKiggdQiogegihCIAhgTQArgYA2gKQACAGAJAIQASAPAgANg");
	this.shape_101.setTransform(55.2,21.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C0D8F9").s().p("AlNBgQiogegihCIAhgTQArgYA2gKQACAGAJAIQASAPAgANQBoAoDQgFQDsgEBwgwQAwgVAHgYQAHgYgmgTQDFARgCAoQgBAQgeAaQgjAbg4AbQiTBFjLAJQg+ACg2AAQiiAAh2gVg");
	this.shape_102.setTransform(55.2,21.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D39C39").s().p("AhcAUIhDhSQBQgSAfgfQDDA/ANAsQAHAXg5AiQg+AkhkAXQgGgqgigyg");
	this.shape_103.setTransform(78,14.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#7F5812").ss(1,1,1).p("AmVAVIAvgtQA/g1BNggIApAYQA9AWBhgEQBggEBCgdQAigPANgNQDKA/ANAuQAFASgeAWQghAag7AXQiTA4jJADQi6AChig2QgxgcgMgcg");
	this.shape_104.setTransform(53.5,16.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFC757").s().p("AlYBNQgxgcgMgcIAvgtQA/g1BNggIApAYQA9AWBhgEQBggEBCgdQAigPANgNQDKA/ANAuQAFASgeAWQghAag7AXQiTA4jJADIgQAAQiuAAheg0g");
	this.shape_105.setTransform(53.5,16.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#777777").ss(1,1,1).p("AisgZQBEgfBSAAQDWAAAeA0QAHAMguARQgwAThFAIQi2AVhqhGg");
	this.shape_106.setTransform(52.5,5.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E5E5E5").s().p("AjeADIAygcQBEgfBSAAQDWAAAeA0QAHAMguARQgwAThFAIQgrAFglAAQh/AAhRg2g");
	this.shape_107.setTransform(52.5,5.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#2F3A49").ss(1,1,1).p("AimB9QDvASCVgmQDcg4BhizQhBAjhcAjQi3BDiHgCQjVgFmFhRQAgAwA+AvQB+BkCYALg");
	this.shape_108.setTransform(55.1,32.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#57677F").s().p("AimB9QiYgLh+hkQg+gvgggwQGFBRDVAFQCHACC3hDQBcgjBBgjQhhCzjcA4QhmAaiPAAQhDAAhMgGg");
	this.shape_109.setTransform(55.1,32.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#7F5812").ss(1,1,1).p("Ai+ANQAPAYAaADIEmgFIAdgHQAcgOgCgdQgCgzmNA5g");
	this.shape_110.setTransform(57.1,45.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E5E5E5").s().p("Ai+ANIgJgWQGNg5ACAzQACAdgcAOIgdAHIkmAFQgagDgPgYg");
	this.shape_111.setTransform(57.1,45.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#7F5812").ss(1,1,1).p("AhwAIQAQATAWAAICeAAQAygNgNgbQgNgcjnAfg");
	this.shape_112.setTransform(57.5,49.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E5E5E5").s().p("AhKAbQgWAAgQgTIgLgSQDngfANAcQANAbgyANg");
	this.shape_113.setTransform(57.5,49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},2).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(8).to({_off:false},0).wait(1).to({x:61.2},0).wait(1).to({x:52.2},0).wait(1).to({x:57.2},0).wait(1).to({x:49.2},0).wait(1).to({x:55.2},0).to({_off:true},2).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:1.19,scaleY:1.19,alpha:0.078},3).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,111.6,106.1);


(lib.ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,hit:6,boost:20});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* gotoAndStop("static");*/
	}
	this.frame_32 = function() {
		/* gotoAndPlay("boost");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(13).call(this.frame_32).wait(1));

	// Ship
	this.instance = new lib.anim_ship();
	this.instance.setTransform(-0.5,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(5).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-20.2,37,58.6);


// stage content:



(lib.downfallCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,instructions:8,game:17,win:25,lose:32});

	// timeline functions:
	this.frame_0 = function() {
		/* #include "../../gameAssets/expressinstall.as"
		
		if (_root.MMplayerType == undefined) {
			// --- upgrade not needed
			gotoAndPlay(2);
		} else {
			stop();
		 
		 	var updater:MovieClip;
			var hold:MovieClip;
		
			loadUpdater = function() {
				System.security.allowDomain("fpdownload.macromedia.com");
				
				updater = _root.createEmptyMovieClip("expressInstallHolder", 10000000);
				updater.installStatus = installStatus;
				hold = updater.createEmptyMovieClip("hold", 1);
			
				updater.onEnterFrame = function() {
					if (typeof hold.startUpdate == 'function') {
						loadInit();
						delete this.onEnterFrame;
					}
				}
			
				var cacheBuster = Math.random();
				hold.loadMovie("http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+cacheBuster);
			}
			
			loadInit = function() {
				hold.redirectURL = _root.MMredirectURL;
				hold.MMplayerType = _root.MMplayerType;
				hold.MMdoctitle = _root.MMdoctitle;
				hold.startUpdate();
			}
			
			installStatus = function(statusValue) {
				if (statusValue == "Download.Complete") {
					// Installation is complete. In most cases the browser window that this SWF 
					// is hosted in will be closed by the installer or manually by the end user
				} else if (statusValue == "Download.Cancelled") {
					// The end user chose "NO" when prompted to install the new player
					// by default no User Interface is presented in this case. It is left up to 
					// the developer to provide an alternate experience in this case
					
					getURL("javascript:alert('This content requires a more recent version of the Macromedia Flash Player.')");
				} else if (statusValue == "Download.Failed") {
					// The end user failed to download the installer due to a network failure
					// by default no User Interface is presented in this case. It is left up to 
					// the developer to provide an alternate experience in this case
					
					getURL("javascript:alert('There was an error in downloading the Flash Player update. Please try again later, or visit macrmedia.com to download the latest version of the Flash plugin.')");
				}
			}
			
			// --- Start upgrade
			loadUpdater();
		}*/
	}
	this.frame_1 = function() {
		/* stop();
		//var loader:LoadGame = new LoadGame(this, "http://www.linguazone.com/customizer/customVars.php?action=play&gameid=8062", "MatchingGame"); // For deployment
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "MatchingGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/downfall.xml", "MatchingGame");
		}*/
	}
	this.frame_2 = function() {
		/* stop();
		var difficultySelection:Number;
		
		playMedium.onRelease = function() {
			difficultySelection = 1;
			gotoAndStop("instructions");
		}
		
		playHard.onRelease = function() {
			difficultySelection = 2;
			gotoAndStop("instructions");
		}
		
		dispatchEvent ({type:"ready", bubbles:true});*/
	}
	this.frame_8 = function() {
		/* stop();
		
		playGame.onRelease = function() {
			gotoAndStop("game");
		}*/
	}
	this.frame_17 = function() {
		/* stop();
		var gameid:Number;
		if (game != undefined) delete(game);
		var game:RunGame = new RunGame(this);
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
	this.frame_25 = function() {
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}
	this.frame_32 = function() {
		/* stop();
		
		dispatchEvent ({type:"lose", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(6).call(this.frame_8).wait(9).call(this.frame_17).wait(8).call(this.frame_25).wait(7).call(this.frame_32).wait(7));

	// score
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjaBaQgVgBgPgPQgPgOAAgVIAAhNQAAgVAPgPQAPgPAVAAIG1AAQAVAAAOAPQAPAPAAAVIAABNQAAAVgPAOQgOAPgVABg");
	this.shape.setTransform(-99,531);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17).to({_off:false},0).to({_off:true},8).wait(14));

	// Win MC
	this.text = new cjs.Text("Congratulations, you finished the game.", "20px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 471;
	this.text.setTransform(306.5,90.2);

	this.text_1 = new cjs.Text("You made it!", "30px 'Comic Sans MS'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 398;
	this.text_1.setTransform(307,24);

	this.text_2 = new cjs.Text("", "33px 'ComicSansMS'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 35;
	this.text_2.lineWidth = 88;
	this.text_2.setTransform(392,311);

	this.text_3 = new cjs.Text("Total score:", "30px 'Comic Sans MS'", "#FFFFFF");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 32;
	this.text_3.lineWidth = 248;
	this.text_3.setTransform(342,311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text,p:{x:306.5,y:90.2,text:"Congratulations, you finished the game.",font:"20px 'Comic Sans MS'",lineHeight:22,lineWidth:471}}]},25).to({state:[{t:this.text,p:{x:291.2,y:38.5,text:"Oh no!\nYour ship crashed too many times. You only have three lives!\nGood luck trying again.",font:"32px 'Comic Sans MS'",lineHeight:34,lineWidth:485}}]},7).wait(7));

	// Welcome Text
	this.playHard = new lib.playGamehard();
	this.playHard.setTransform(431,317,1,1,0,0,0,96,33);

	this.playMedium = new lib.playGamemedium();
	this.playMedium.setTransform(193,316,1,1,0,0,0,102,33);

	this.text_4 = new cjs.Text("Shoot the UFO that matches the term at the top of the screen.", "20px 'Comic Sans MS'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 22;
	this.text_4.lineWidth = 341;
	this.text_4.setTransform(304.2,124.3);

	this.text_5 = new cjs.Text("Shoot the UFO to match this term", "16px 'Arial'", "#FF0000");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 153;
	this.text_5.setTransform(482.9,160.2);

	this.text_6 = new cjs.Text("Earn points for shooting the correct UFO", "16px 'Arial'", "#FF0000");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 181;
	this.text_6.setTransform(96.3,8);

	this.text_7 = new cjs.Text("Get correct answers in a row for turbo boost!", "16px 'Arial'", "#FF0000");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 215;
	this.text_7.setTransform(297.6,33);

	this.text_8 = new cjs.Text("You start with three lives", "16px 'Arial'", "#FF0000");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 188;
	this.text_8.setTransform(104.2,177.2);

	this.playGame = new lib.playGame();
	this.playGame.setTransform(302.4,353,1,1,0,0,0,107.2,18.5);

	this.text_9 = new cjs.Text("Fire missle", "14px 'Comic Sans MS'", "#FFFFFF");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 16;
	this.text_9.lineWidth = 114;
	this.text_9.setTransform(231,275.7);

	this.text_10 = new cjs.Text("Move ship", "14px 'Comic Sans MS'", "#FFFFFF");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 16;
	this.text_10.lineWidth = 113;
	this.text_10.setTransform(231.5,242.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(3,1,1).p("AhWAAICrAAIACgCIgHAAABXADIgjAjABSgGIgege");
	this.shape_1.setTransform(377.9,255.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(3,1,1).p("ABXAAIirAAIgCgCIAHAAAhVADIAjAjAhRgGIAfge");
	this.shape_2.setTransform(312.9,255.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(1,1,1).p("AOIlZIh7AAQhZAAgJBQQgCAJAAALIAABpQAABkBkAAIB7AAQBkAAAAhkIAAhpQAAgLgBgJQgKhQhZAAgAFaiKQAABkhkAAIh6AAQhkAAAAhkIAAhpQAAgMACgKQAKhOBYAAIB6AAQBZAAAKBOQABAKAAAMgEgrGAH4MBWAAAAEgq5gH3MBWAAAA");
	this.shape_3.setTransform(294,273.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,1,1).p("AHBhdIuBAAQgeAAAAAeIAAB/QAAAeAeAAIOBAAQAeAAAAgeIAAh/QAAgegeAAg");
	this.shape_4.setTransform(343.2,292.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(3,1,1).p("AcVEOIAADBAc3D9Qm5AAk4g+Qk3g9AAhXQAAhVE3g+QE4g9G5AAQG4AAE4A9QE4A+AABVQAABXk4A9Qk4A+m4AAgEgpGgCmIAAnoEgqUADDQgZgNgVgVQg1g1AAhLQAAhJA1g1QA1g1BLAAQBLAAA1A1QA2A1AABJQAABLg2A1QgOAPgQAKQhjAAhRAJQgwAFgqAJQhwAWAAAgQAAAfBwAXQBwAWCfAAQCeAABwgWQBwgXAAgfQAAgghwgWQhwgXieAAQAAAAgBAAQgrAdg3AAQgtAAglgUgEgnAAFmIAAEpA39AIQAAAjhCAZQhCAZhdAAQhdAAhCgZQhBgZAAgjQAAghBBgZQBCgZBdAAQBdAABCAZQBCAZAAAhgA40g9IHQnP");
	this.shape_5.setTransform(305.3,114.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AnQE6QgeAAAAgeIAAiCQAAgdAeAAIOBAAQAeAAAAAdIAACCQAAAegeAAgAl/gGQhkAAAAhkIAAhpQAAgMACgKQAKhOBYAAIB7AAQBYAAAKBOQACAKAAAMIAABpQAABkhkAAgAlyhvIgjgjgAmTiWICtAAIitAAIgCgCIAHAAIgHAAgAmQidIAegegAERgIQhkAAAAhkIAAhpIABgUQAKhQBZAAIB6AAQBZAAAKBQIABAUIAABpQAABkhkAAgAF+hxIAjgjgAGfiYIADgCIgIAAIAIAAIgDACIisAAICsAAgAGdifIgfgeg");
	this.shape_6.setTransform(344.8,270.5);

	this.playAgain = new lib.playagain();
	this.playAgain.setTransform(300.5,370.5,1,1,0,0,0,65,13.5);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_4,p:{x:304.2,y:124.3,text:"Shoot the UFO that matches the term at the top of the screen.",font:"20px 'Comic Sans MS'",color:"#FFFFFF",lineHeight:22,lineWidth:341}},{t:this.playMedium},{t:this.playHard}]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_10},{t:this.text_9},{t:this.playGame},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4,p:{x:341,y:278.2,text:"space",font:"24px 'Arial'",color:"#333333",lineHeight:26,lineWidth:88}}]},6).to({state:[]},9).to({state:[{t:this.playAgain,p:{scaleX:1,scaleY:1,x:300.5,y:370.5}}]},8).to({state:[{t:this.playAgain,p:{scaleX:2.025,scaleY:2.025,x:322.1,y:305}}]},7).wait(7));

	// Pics
	this.instance = new lib.panel();
	this.instance.setTransform(299.5,119.6,1,1,0,0,0,300.9,34.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true},9).wait(22));

	// BG Smoke
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(287.2,190.3,1,1,0,0,0,207.8,244.3);
	this.instance_1.alpha = 0.109;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(37));

	// BG Color
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Egu3AfPMAAAg+eMBdvAAAMAAAA+eg");
	this.shape_7.setTransform(300,200);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2).to({_off:false},0).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;