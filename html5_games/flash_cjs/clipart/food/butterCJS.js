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



(lib.butter = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8B8B").s().p("ABvCeQAFgLABgOQACgNgLgIQgRgMgegHQgdgJgigCQgYgCgXgNQgXgNgRgQQgRgSgGgQQgHgNgDgUQgCgUADgSQAEgUAMgOIAbgdIAXgbIAKgLIgFAKIgOAWQgIANgKAKQgLAIgKATQgJATgDAWQgCAXAMAVQATAdARAQQARAPAPAGQAPAFAWAEQAVAEAZABQAQACAQADQAPAEAMAHQAMAHAEAKQADAKgBAMQgBAMgEAKQgFAKgHADIAFgLg");
	this.shape.setTransform(-69.4,-22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D1D1").s().p("AAJAfQAGgHAEgMQAEgMgHgOQgHgMgJgCQgHgBgKADQgJAEgGAFIgGAEQAUgUAOgDQANgDAJAIQAKAHAFALIAGANQAAAGgJAJQgJAJgJAGIgLAIIAIgHg");
	this.shape_1.setTransform(-70,-36.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A7A7A").s().p("AhvBCIDfiYIAAAVIjgCYg");
	this.shape_2.setTransform(77.2,-38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3838").s().p("AhyBOQgGgDgHgFIDkiWQAQANALABIghAVIg6AlIhBAoIg2AiIgYAPIgIgDg");
	this.shape_3.setTransform(81.8,-31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ACZgeIj4CcQAAAAgKgEQgJgEgMgKQgMgJgIgSQgHgSACgcIDrigQgBAAgCAIQgBAKAEAPQADAPAQAUQANAQAMAFQALAGAHAAQAFAAACAAg");
	this.shape_4.setTransform(80.8,-35.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545454").s().p("AhpB6QgJgDgMgKQgMgKgIgSQgHgSACgcIDrigIgDAJQgBAIAEAQQADAQAQATQANAQAMAGQALAFAHAAIAHAAIj4CcIgKgEgABUh9IAAAAIAAAAg");
	this.shape_5.setTransform(80.8,-35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#605E5D").s().p("AgBAuQgLgEgJgJIgIgJQANAGALgFQAKgHACgSQACgPgJgUIgGgLQAQAIAMAWQAJATgBARQgCASgMAHQgFACgGAAIgGgBg");
	this.shape_6.setTransform(93.9,-43.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AgZgyQAPgHAPAKQARAJALAWQAMAUgDAUQgCATgPAIQgPAHgPgKQgRgKgLgVQgLgUADgUQACgTAOgIg");
	this.shape_7.setTransform(93.2,-43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#707070").s().p("AgFAwQgQgKgMgVQgLgUADgUQACgTAOgIQAPgHAQAKQAQAJAMAWQAKAUgCAUQgCATgOAIQgHADgGAAQgJAAgJgGg");
	this.shape_8.setTransform(93.2,-43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A2A2A2").s().p("AlMDPIAlgZIBYg9IB4hSICAhYIB3hSIBYg8IAkgZIAMAKIAVARIAQAMIgYARIgqAfIgHgEQgHgDgHgHQgGgGgEgKIouF4IgKgKg");
	this.shape_9.setTransform(40.5,-10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8E8E8E").ss(1,1,1).p("AEbjlIpvGsQAAABAHAHQAGAIAOAHQANAHAUAAQAUABAbgOQAQgJAmgaQAmgZA1glQA1gkA4gqQA7gpA4gmQA5goAughQAughAbgTQAcgUABgBg");
	this.shape_10.setTransform(40.6,-9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AkYDlQgUAAgNgHQgOgHgGgIIgHgIIJvmsIA6AtIgdAVIhJA0IhnBJIhzBPIhtBOIhbA+QgmAagQAJQgaAOgTAAIgCgBg");
	this.shape_11.setTransform(40.6,-9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8C98B").s().p("AgtA9QgOgBgPgGQgHgDgJgHQgJgGgEgJQgEgIAJgIQAMgKAQgEIAggLQAQgFAOgIIAcgTQANgHAOgFQAOgFAOABQANACAMANQAFAHABAIQAAAIgBAGIgCAGIgQAKIglAVQgVANgUALQgRALgJACQgLADgLAAIgGAAg");
	this.shape_12.setTransform(16.4,8.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAC883").s().p("AgRB0QgLgCgGgJIgKgRQgGgIgLAAQgHABgGAFIgNAJQgHAEgIgDQgGgDgCgFQgCgFAAgGQABAHAIACQAIACAGgDQAFgCAEgFIAIgIIAKgKQAHgHAIgFQAIgEAFACQAHAFgBAIQAAAJgDAJQgCAJABAIQAAAHAJAEQAMAEAKgFQAIgFAKgIQAJgIAKgFQAQgGAIADQAIADAGAGQAHAGAMADQALACANgOQAOgPANgWQAOgVAKgUIAPgbIALgVQAJgRAIgUQAIgUABgOQAEAHgEAPQgEAPgIARIgOAfIgJARIgPAbQgKAUgOAVQgOAWgNAOQgOAPgLgCQgLgDgHgGQgHgGgIgDQgIgDgPAGQgMAGgIAHQgHAHgIAEQgFAFgKAAIgFgBgAjaBTQgEgEACgHQAEAFAOgBQAOgBANgJIAXgSQAMgIAJgBQAJAAAGAPQACAGAAAGIAAgCQgHgPgJAAQgJABgLAIIgYASQgMAJgOABIgDAAQgLAAgEgDg");
	this.shape_13.setTransform(12.5,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE3A0").s().p("AgRCIQgMgBgKgSQgKgSgNABQgEAAgPALQgMAJgKgEQgHgEgCgKIgDgSQgKgYgaATQglAbgNAAQgwACA9g6QAhgfCHiAQAcgaAkAGIA3gGQANAAAJANQAMAUAIAGQAMAJAUgGQAagJARADQAXAFg3BiQg+B+gcgGQgGgBgTgOQgNgIgTAIQgHADgUAPQgKAJgNAAIgEAAg");
	this.shape_14.setTransform(12.3,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E8BDA8").ss(1,1,1).p("AGChWQgYAWgfAOIjIFSIophGIFZlcQAAgBABgOQABgPAIgVQAHgWATgWQATgXAggQQAjgRA3gEQA3gFBRAPQBRAPAqAXQArAXANAbQANAagJAaQgKAbgXAWg");
	this.shape_15.setTransform(10.3,13.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#AA623D","#FFDECF"],[0,1],26.4,35.6,-28.9,-35.1).s().p("AmmDaIFZlcIABgPQABgPAIgVQAHgWATgWQATgXAggQQAjgRA3gEQA3gFBRAPQBRAPAqAXQArAXANAbQANAagJAaQgKAbgXAWQgYAWgfAOIjIFSg");
	this.shape_16.setTransform(10.3,13.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#84531C","#6B3D27"],[0,1],-18.4,-3.2,7.8,1.3).s().p("AkKgBIgKhBIIpBEIgFBBg");
	this.shape_17.setTransform(-4.3,42.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#84531C","#6B3D27"],[0,1],-10.3,0,10.4,0).s().p("AhhCJIDGlSIACA5IjNFag");
	this.shape_18.setTransform(33.3,29);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#84531C","#6B3D27"],[0,1],-5.2,0,5.3,0).s().p("AgzAuIAQgKQAPgKAUgTQARgQAPgbQAPgaAAghIAFBfQABAAgFAOQgEAPgVAXQgVAWguAWg");
	this.shape_19.setTransform(48.2,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8C8B8B").s().p("AAJA1QgJgJgMgFQgNgFgOgCQAFgGALgDQALgEAKgFQAIgGACgIQAAgLgGgQIgLgfQgHgRgFgNQAQAFAMANQAGAHAIAQQAIAPAFAVQAHAUgBAXQAAAggOAYQAAgSgRgRg");
	this.shape_20.setTransform(-59.9,-17.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#CAC7CB","#7F7E79"],[0,1],-12.9,0.1,12.9,0.1).s().p("ABdCwQAFgGAFgJQAEgKgCgMQgBgMgOgNQgOgNgUgFQgTgEgVgCQgUgBgUgDQgUgDgQgJQgggTgTgeQgTgcAAgiQABgiAdghQASgVAMgRQANgRAMgKQAMgKASAAQAPAAANAKQAMAKADANQADAOgLAKIgWAUQgNAKgHAKQgHAKAGAKQAHAKAOAFQAMAFAMABIANACIALAAQAKABANAEQAOAFAMAMQAJAKAKAWQALAXAEAeQAEAegIAeQgJAegbAWIAEgEg");
	this.shape_21.setTransform(-68.4,-22.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFD788").s().p("AiXBUQgMgOAAgPIABgIQAFgVAXgTQAXgSAhgQQAigRAlgOQAkgOAigKIA7gRIAggIIAKAMQgCgBgLACIgXAGIgZAHIgOAEIg9AQQggAKgbAKQgNAFgVAJQgUAJgVANQgUAMgOAQQgOAQAAARQAAATAVATQAHAHAJAGQgWgKgMgNg");
	this.shape_22.setTransform(-80.5,-15.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F29E25").s().p("AgXBaQANgQAGgSQAFgSgFgNQgJgMgOgFIgdgHQgPgBgLgIQgKgIgCgTQAAgTAKgQQAKgQAQgLQAQgLASgEQAggGAXARQAWARAQAcQAUAiAFAbQAFAhgYAkIgJAJQgJAHgaAKQgZAJgwAFIgFABQAKgIAOgRg");
	this.shape_23.setTransform(-66.8,-13.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E29213").ss(1,1,1).p("ADJAsQgGARgHALQgHAMAAABQAAAAgJAJQgJAIgaAKQgbAKg0AFQgsAEgugEQgvgFgpgMQgpgNgXgUQgXgUAFgbQAFgXAagTQAZgVAlgSQAlgSAogOQAmgOAjgKQAjgKAWgGQAWgFABAAQAAAAAKANQAKANAOAVQAPAVANAZQANAZAHAWQAEAPgGARg");
	this.shape_24.setTransform(-76.9,-14);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFC32C","#FF9A2C"],[0,1],-7.9,-2.2,23.1,3.1).s().p("AggB/QgvgFgpgMQgpgNgXgUQgXgUAFgbQAFgXAagTQAZgVAlgSQAlgSAogOQAmgOAjgKIA5gQIAXgFIAKANQAKANAOAVQAPAVANAZQANAZAHAWQAEAPgGARQgGARgHALIgHANIgJAJQgJAIgaAKQgbAKg0AFQgVACgVAAQgXAAgZgCg");
	this.shape_25.setTransform(-76.9,-14);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FFE592","#FFC32C"],[0,1],8.4,-7.5,-8.8,8.1).s().p("AhzAuQg4gEgtgKQgugJgdgPQAdgNAsgNQAtgMA3gIQA3gHA+gCQA8gCA5AEQA4AEAtAKQAuAKAdAOQgdAOgsAMQgtAMg3AIQg3AIg+ACIgfAAQgtAAgpgDg");
	this.shape_26.setTransform(-58.4,-7.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DBBA6A").s().p("AhABPQhKgKgpgTQgqgTgBgVQgBgKALgKQATgUAvgRQAugQBAgKQA/gLBLgCQAugCArACQgKAmAEAmQAEAkATAhIAQATQg1AHhAACIglABQhKAAg8gJg");
	this.shape_27.setTransform(-68.9,-11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D1A43F").ss(1,1,1).p("AFNgJQAAARgZASQgZARgtAOQguAPg8AJQg8AJhFACQhEACg8gFQg9gFgugMQgugLgbgQQgagQgBgTQAAgSAZgRQAZgSAugOQAtgOA8gJQA8gJBGgCQBDgCA9AFQA8AFAvALQAuAMAaAQQAaAQABATg");
	this.shape_28.setTransform(-58.4,-11.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDCD74").s().p("Ah9BZQg9gFgugMQgugLgbgQQgagQgBgTQAAgSAZgRQAZgSAugOQAtgOA8gJQA8gJBGgCQBDgCA9AFQA8AFAvALQAuAMAaAQQAaAQABATQAAARgZASQgZARgtAOQguAPg8AJQg8AJhFACIgjABQgxAAgsgEg");
	this.shape_29.setTransform(-58.4,-11.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CC8E11").ss(1,1,1).p("AGCgLQAAAXgdAWQgdAWg1ARQg0AShGALQhFALhRADQhOAChHgHQhGgGg1gPQg2gOgegUQgfgUgBgYQAAgXAdgWQAdgWA1gRQA0gSBGgLQBFgMBRgCQBOgDBGAHQBHAHA1AOQA2APAeAUQAfAUABAYg");
	this.shape_30.setTransform(-58.4,-11.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFC32C").s().p("AiSBvQhGgGg1gPQg2gOgegUQgfgUgBgYQAAgWAdgXQAdgVA1gSQA0gSBGgLQBFgMBRgCQBOgDBGAIQBHAGA1APQA2AOAeAUQAfAUABAZQAAAWgdAWQgdAWg1ARQg0AShGALQhFALhRADIgnABQg6AAg0gGg");
	this.shape_31.setTransform(-58.4,-11.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDB22E").s().p("AiiCYQg+gHgtgMQgsgMgWgQQAeAKAqAJQAqAKA0AHQAzAGA5gCQBggEBGgSQBHgSAmgYQAlgYABgWIAAgBIADgWIAJgyIAJg/IAJg1IAmgBIAQAAIgEAaIgJA2IgKA+IgIAxIgDAVIAAABQgBAWgoAVQgpAVhJAPQhJAPhgAEIgmAAQg3AAgvgEg");
	this.shape_32.setTransform(-55.8,6.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDB22E").s().p("AiDA1QhHgJgygNQgygOgcgKIgbgJIgFgaIgBgLIgBgFIAigBIBUgBIBzgDICDgCICEgDIBzgCIBUgCIAigBIgDARIgFAjIgdAIQgdAJgvANQgwAMg8ALQg7AKg/ADIgiABQhAAAg3gHg");
	this.shape_33.setTransform(-58.7,-3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFEBC0").s().p("AgCBZIgEgWIgKg0IgLg+IgKg3IgFgbIASgBIAqgBQABBCAGBBQAFBCANBCQgsgUgBgXg");
	this.shape_34.setTransform(-90.9,5.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#CC8E11").ss(1,1,1).p("AlyiRIAoDgQABATAbAQQAaAQAuALQAuALA9AGQA9AFBDgCQBGgDA8gJQA8gJAtgOQAugOAZgSQAZgRAAgTIAjjag");
	this.shape_35.setTransform(-58.7,6.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FFE592","#FFC32C"],[0,1],-37.1,0,37.1,0).s().p("Ah7CeQg9gGgugLQgugLgagQQgbgQgBgTIgojgILlgPIgjDaQAAATgZARQgZASguAOQgtAOg8AJQg8AJhGADIglAAQgwAAgrgDg");
	this.shape_36.setTransform(-58.7,6.4);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.4,-50.2,196.9,99.5);


// stage content:
(lib.butterCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.butter("synched",0);
	this.instance.setTransform(100,99.7,1.009,1.01,0,0,0,0,-0.3);

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;