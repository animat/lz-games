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



(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAkQAogYABgVQgBgMgGgHQgHgHgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQACAAAJAIQAJAHABAPQAAALgMAOQgHAHgJAIQgLAIgIABQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBg");
	this.shape.setTransform(5.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAHQgBgCADgGQACgGAFgBIgFAIIgBAIIgCABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_1.setTransform(-7.5,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADAJQAAgKgDgEIgGgEQADgCAHAHQAEAHgBADQgBABAAABQAAABgBAAQAAABAAAAQgBAAAAAAIgBgBg");
	this.shape_2.setTransform(3.8,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPARQglgHgEgEQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAFAiAGQAhAGAjgiQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQggAegdAAIgMgBg");
	this.shape_3.setTransform(-1.9,1.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-4,16.1,8.1);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF8F3").s().p("AhABkQgFgGgPg+QgQg7Afg1QAmgzBsANQAMBGABBJQABA+gSAOQgdAMgtAHIgTABQggAAgMgVg");
	this.shape.setTransform(9,11.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.3,18.2,24.4);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF8F3").s().p("AgOB5QgsgHgFgDQgPgIgFgsQgGgsAAg2QAAgpACgjQBogYAsAvQAlAzgKBBQgJBCgFAHQgDAMgMAGQgUAJgaAAQgNAAgOgDg");
	this.shape.setTransform(9.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.2,18.2,24.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.68},4).to({scaleX:1},4).to({scaleY:1.3,y:-1.2},4).to({scaleY:1,y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-4,16.1,8.1);


(lib.eat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcACQAKgKAJgBIAQgBQAQgBANgGQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgOAGgRACIgRABQgGABgLAIIgNAMQAAgDALgNg");
	this.shape.setTransform(-116,-18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAAQAHgHANAAQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgMAAgGAEIgHAGQgBgBAGgHg");
	this.shape_1.setTransform(-114.5,-15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDB38C").s().p("AAJAtQgfgMABgBIgCAAQg7gEgUgHQgVgHgBgEIgBgDIAAAAIABgBIADgaIAFgmQABgNAHgFQAKgEACABQARAHAWgCIAbgCQATABgBADIgBADIAAADIADABQAJAAABACIAAADQAAASgIAGQgLAFgCgCQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAIAJAFAPIAEAQQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQBBAaAbAEQAcAFAFgEQAGAMgBAIQgBALgDAEQhPgWghgNg");
	this.shape_2.setTransform(-111,-13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AB5BVQhNgUgigOQgfgNgDgCQhcgEgMgSIgBgFIAAgCIADgiIADgfQACgQAJgGQANgGADACIABAAQAPAGAXgBIAZgDQAUAAAEAIIABADIAAAAQAHAAABAEQADADgBADIAAABIAAABQgBAUgIAHQgFAEgFAAQAGAKACAMIADAQQBNAeAYABQAYABgCgCIACgBIACABQALAVgEALQgEAMgBABIgCABIgBgBg");
	this.shape_3.setTransform(-110.9,-13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0E0E0").s().p("AgFgBQABgGALADQgEABgJAJQgBgCACgFg");
	this.shape_4.setTransform(-107.8,-23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0E0E0").s().p("AgIADQAAgBAGgDQACgEAJAIQgDgCgOACg");
	this.shape_5.setTransform(-107.5,-25.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIADQAAgBAGgDQACgEAJAIQgEgCgNACg");
	this.shape_6.setTransform(-102.9,-26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFgBQADgGAKAGQgEAAgLAGIACgGg");
	this.shape_7.setTransform(-104.7,-26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsASQADgOADgCIABgBIAAgBIgBgEIABgFQAKgJAEABIABAAIABgBQALgJAJACIAIACIABABIABgBQAHgEAEABQAEACAAACIABACIACgBQAIgCAFAFQAEAFABADQgFAJgcAJQgaAMgbAHQgDgFAAgEg");
	this.shape_8.setTransform(-105.2,-25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgyASQACgMAJgGQgEgBABgLQAKgLAHABQALgJAKABQAIACADACQAIgFAGAAQAFABAAAHQATgBAGANIAAABIAAAAQgEAKgXAIQgWAKgUAHIgZAHQgGgHgBgHg");
	this.shape_9.setTransform(-105.2,-25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah9A+QgFAAgDgEQgFgIAAgJIABgFIAAgCIAtgNIBTgWIAsgNQAqgmAcgFQAbgGADACIABABIAAABQAFAIgDAIQgMASgfAKQgfAKgGAAIi3BDgAgEACIhSAXIguANIAAADQgBAIAEAFQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIAwgSIBWghIAvgQQARgDAagJQAagJAIgOIABgFIgCgGQgHgBgZAHQgZAHglAiIAAAAIgBAAIgpALg");
	this.shape_10.setTransform(-113.3,-20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2E2E2").s().p("AiGAwIgBgMICrgvQAqgmAcgFQAbgGABACQAIAQgTALQgUAMgWAGIgYAGIi2BDQgJgDAAgJg");
	this.shape_11.setTransform(-113.3,-20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AANAEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgFgCgKAAQgMAAgCgBQACgCANAAQALgBAHADQAEADAAAEQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_12.setTransform(-115.9,-33);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AARAEIgPgNQgCgFgiAMQgGACAFgEQAGgEAPgEQAOgFAGAEQASATALAFQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQgIgBgLgKg");
	this.shape_13.setTransform(-115.1,-36.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EDB38C").s().p("AAjBhQgfgegiglQgNgMgNgDIgQgEQgJgGgEgaQgEgcAAgaQABgMAOgOQANgNAJgHQAIgGAGABQAJADABACIAAAAQAuAdAIgFQADADAAAJQAAAIgCAHQgBAOgHAFQgPADgDgDIgBAAIgBACQgFAcgKAJQgJAJgCAAIgCACQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQA5A5AbAQQAaAQAGgCQACAIAAAGQAAAPgHAFQgHAGgDABQgHgCgfgdg");
	this.shape_14.setTransform(-114.3,-27.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABKCFIgBAAQgNgDgngnIg5g9QgOgLgLgBIgNgBIgBgBQgOgKgCgiQgDglAAgLQACgRAQgPQAQgQAEgBQAJgIAJABQALADACAEQAZARAMADIANADQABgBAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAHAGgBAMQgBAMgDACQADAPgLAIQgMAGgJgEQgCAWgJAKQgJALgGACQBBA+AZALQAZAMgBgEIACAAIACACQAGAUgHAOQgMAQgFAAIAAAAg");
	this.shape_15.setTransform(-114.2,-27.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0E0E0").s().p("AgEgBQADgFAJAGQgEAAgLAFQAAgCADgEg");
	this.shape_16.setTransform(-105.7,-38.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0E0E0").s().p("AgHAAQAAgBAGgCQAEgDAFAKQgDgDgMgBg");
	this.shape_17.setTransform(-105,-39.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAAQAAgBAGgCQAEgDAFAKQgDgDgMgBg");
	this.shape_18.setTransform(-100.7,-38.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDgBQADgEAIAGQgEgBgLAEQAAgCAEgDg");
	this.shape_19.setTransform(-102,-39.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsAUQgCgFACgFQAGgKAEAAIACAAIAAgCIAAgFIADgEQALgGAEACIABAAQANgGAGAEIAIAFIABABIACAAQAHgCADACQADADAAABIAAADIADAAQAIAAACAEQADAFAAADQgHAHgdADQgXACgWAAIgJAAg");
	this.shape_20.setTransform(-102.9,-39.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxAYQgDgIACgHQAGgJAJgDQgDgDAFgJQAMgIAGADQANgGAGAEQAJAEADAEQAIgEAGADQAEACgCAGQASAEABAMIAAABQgGAIgYADQgXADgWAAIgZAAg");
	this.shape_21.setTransform(-102.9,-39.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AiMARQgCgJACgHIACgDIABgCIAtABIBTABIAsAAQAxgXAbACQAbADACACIABABIAAABQADAJgGAHQgQALgfABQggAAgFgBIi8ANQgFgCgBgFgAiGACQgDAHACAGIADADIAxgDIBZgGIAwgDQAQABAagBQAbgBALgJQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFQgFgEgaAAQgZgBgrATIgBABIAAAAIgqgBIhRgBIgvAAIAAACg");
	this.shape_22.setTransform(-111.3,-37);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2E2E2").s().p("AiKAHIADgIICrABQAygWAbACQAaADAAACQADAPgVAFQgUAFgXAAIgYgBIi7AMQgHgEACgKg");
	this.shape_23.setTransform(-111.4,-37);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AALALQgBgFgJgGQgGgEgJgDQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAQAEABAKAHQAMAFADAJQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_24.setTransform(-108.9,-38.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAMANIABgKIABgJQgJgDgVAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAZAAAFACQAGADgBACIgBAUQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBgBAAg");
	this.shape_25.setTransform(-111.2,-35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDB38C").s().p("AAoCEIgVgmIgkhEQgUgggHgJQgJgLgJgNQgIgNABgFQAKgdAKgTQAKgUAEgBIABAAQALgDANgDQAKgCAGABQAHAEAJAHQAKAIABAIQADAZgDAHIgBACQABAJgGAIQgFADgHgDQAAgBgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgKAKQgGAJgKAEIgBACIAAACIASAlQAQAfARAdQASAeAJAEQACABAFAJIABAEQAAAFgEAGQgJAFgIAAQgFAAgFgCg");
	this.shape_26.setTransform(-111.1,-28.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAjCGIgUgkIgkhEQgUghgHgJIgRgWQgLgPABgLQAHgTAMgZQALgZAKgDIgBAAIAVgFQAPgEAIADQAEABAMAJQANAJABAMQACAKAAAKQAAALgDAEIAAABQACAJgKALQgFAEgJgDQgIAKgQANQARAlAYAqQAXApAKAGQADAAAHANIABAFQAAAHgFAIIgBAAQgCACgMAEIgIACQgIAAgFgGg");
	this.shape_27.setTransform(-111.1,-28.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0E0E0").s().p("AgEgBQADgFAIAGQgEAAgJAEQgBgCADgDg");
	this.shape_28.setTransform(-104.3,-40.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0E0E0").s().p("AgGAAQAAAAAGgCQADgCAEAIQgCgDgLgBg");
	this.shape_29.setTransform(-103.7,-41.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGAAQAAAAAGgCQADgCAEAIQgCgDgLgBg");
	this.shape_30.setTransform(-99.8,-40.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgDgBQADgEAIAGQgEgBgKADQAAgBADgDg");
	this.shape_31.setTransform(-101,-42);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoASQgBgFABgEQAGgJADAAIABgBIAAgBIABgFIACgEQAKgEAEABIABAAIAAAAQAMgFAFADIAHAFIABABIACAAQAGgCADACQABABAAAAQABABAAAAQAAABAAAAQABABgBAAIABACIACAAQANAEgBAHQgGAHgaACQgRACgSAAIgOAAg");
	this.shape_32.setTransform(-101.8,-41.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgsAWQgDgIACgGQAFgIAJgCQgDgDAEgIQALgHAGACQALgFAGAEQAIAEACACQAIgCAFACQADACgBAFQAQAEABAKIAAABQgLALgkABIgkABIgHAAg");
	this.shape_33.setTransform(-101.8,-41.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ah+AQQgCgIACgHIACgDIAAgBIApAAIBMABIAnABQAtgVAYACQAYACACACIABABIAAABQACAIgFAGQgOAKgdABQgcAAgFgBIiqALQgEgBgBgEgAh5ACQgCAGABAGQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAtgDIBPgGIAsgDQAOACAYgBQAYgCAKgHIACgEIAAgFQgFgDgXAAQgXgBgmARIgBABIAAgBIgmAAIhKgBIgpAAIgBACg");
	this.shape_34.setTransform(-109.4,-39.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2E2E2").s().p("Ah8AHIACgIICbABQAsgUAZACQAXACABADQACANgSAEQgTAFgUAAIgWgBIioALQgHgEACgIg");
	this.shape_35.setTransform(-109.5,-39.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAgAJQgFgEgMgEQgNgDgGgBQgGABgMAEQgMAHgCAAQAAgCAMgHQAMgIAJgBQAGABAOAFQANAEAGAEQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABIgCABIgCgBg");
	this.shape_36.setTransform(-112,-41.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAKAKQgUgSgEAAQAFgFAXATQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgCAAIgCAAg");
	this.shape_37.setTransform(-109.4,-39.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIAJIANgQQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQgLAMgFAAIgBAAg");
	this.shape_38.setTransform(-117.4,-41.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAEQgCgEgBgEQADACADACQAAABABAAQAAABAAAAQAAAAAAABQAAAAgBABIgCABIgBgBg");
	this.shape_39.setTransform(-111,-38.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLAAQADAAARgBQAAgBABABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIgKABQgJAAgCgDg");
	this.shape_40.setTransform(-112.5,-38.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDB38C").s().p("AgYAjQglgpgEgMQABgdACgYQACgZADgFIAKABIAIAAIADgBQALgOAIgBQARABASAFQAUAFAEAHQABABgEAFQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQACACgDALQgBAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAIAGAEANQAAADgDACQAAACgIAAQgJgCgIgOIgCgBIgIgBIgCABIgBADQACACgBATQAAATgUAOIgBACQgCABAOAWQAMAYA2A0IgSAXQglgngjgrg");
	this.shape_41.setTransform(-112.7,-31.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAsB5IgjglQgZgegZgfQgagdgDgMQADg/ADgOQAEgNADACIAIABIAKAAIALgLQAGgGAGABQALAAAWAGQAYAEAHAMIAAADQAAADgEAEIABAFQAAAEgCAFQAIAHAEAOIAAABQAAAFgEAEQgCADgMAAQgKgCgJgPIgDgBIAAANQADAXgYAUQgBADANAWQAPAWAxAvIABACIgBACQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQg5g4gLgWQgMgVADAAIABgCQAUgOAAgTQABgTgCgDIAAgDQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAIAAIACACQAHAOAJACQAJAAAAgCQACgCABgEQgEgMgIgHQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAEgKgCgCIABgDQAEgFgCgBQgEgHgTgFQgTgFgRgCQgHABgMAPIgCABIgIgBIgKAAQgDAFgCAYQgCAYgBAdQAEANAkApQAjArAlAnIABABIgBADIgCAAIgCgBg");
	this.shape_42.setTransform(-112.7,-31.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAsB5IgjglQgZgegZgfQgagdgDgMQADg/ADgOQAEgNADACIAIABIAKAAIALgLQAGgGAGABQALAAAWAGQAYAEAHAMIAAADQAAADgEAEIABAFQAAAEgCAFQAIAHAEAOIAAABQAAAFgEAEQgBADgNAAQgKgCgJgPIgDgBIAAANQADAXgYAUQgBADANAWQAPAWAxAvIABACIgBACQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAIgSAXIABABIgBADIgCAAIgCgBg");
	this.shape_43.setTransform(-112.7,-31.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhXAKQgEgCgCgEQgBgFADgGIACgEIABgBIAnADIBKAHQAoACAIAEIgpgDIhMgFIgpgEIgBACQgDAGABADIADADIAiABIBFABIBCABIAKAEg");
	this.shape_44.setTransform(-111.7,-43.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E2E2E2").s().p("AhUAIQgHgEACgGIAEgIICdANIASAIg");
	this.shape_45.setTransform(-111.8,-43.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B7B7B7").s().p("AgNAGQgVgEAHgFIAJgCIgDADQgCACAIACQAEACAMAAQAOAAAPgDIgPAEQgJABgHAAIgMAAg");
	this.shape_46.setTransform(-100.3,-39.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E2E2E2").s().p("Ah8AHIACgIICbABQAsgUAZACQAXACABADQABANgSAFQgTAEgUAAIgVgBIioALQgHgEACgIg");
	this.shape_47.setTransform(-107.2,-39.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ah+AQQgCgIACgHIACgDIAAgBIApAAIBMABIAnABQAtgVAYACQAYACACACIABABIAAABQACAIgFAGQgOAKgdABQgcAAgFgBIiqALQgEgBgBgEg");
	this.shape_48.setTransform(-107.1,-39.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ah6AYQgFgCgCgFQgCgJADgIIABgDIACgDIApABIBMABIAnAAQAugVAYACQAZACACADIACABIABACQACAKgGAFQgQANgiABQghABgEgCIihALg");
	this.shape_49.setTransform(-107.1,-39.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ah5AYIgBAAQgFgCgCgFQgCgJADgIIABgDIACgDIApABIBMABIAnAAQAugVAYACQAZACACADIACABIABACQACAKgGAFQgQANgiABQghABgEgCIigALg");
	this.shape_50.setTransform(-111.1,-37);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B7B7B7").s().p("AgagBIAIgEIgCAEQgCACAIACQAFABAMgCQAMgBANgBIgMABQgNAFgOAAQgVgCAGgFg");
	this.shape_51.setTransform(-105.3,-21.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E2E2E2").s().p("Ah7ASIACgKICagLQAqgaAYAAQAYgBABADQADAOgSAHQgSAGgUAAIgVABIimAdQgIgEABgIg");
	this.shape_52.setTransform(-112,-20.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ah8AbQgDgHACgIIABgEIAAgCIApgDIBMgFIAmgEQArgZAYgBQAYAAACACIABABIAAABQADAIgEAGQgNAOgcABQgcAEgFgBIioAdQgEgCgCgEg");
	this.shape_53.setTransform(-111.9,-20.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ah2AjIgBAAQgFgBgDgGQgDgIACgIIABgFIABgDIApgEIBMgEIAngEQArgaAZAAQAZgBACACIACABIABADQADAJgFAIQgPANghAEQghAEgEgBIieAbg");
	this.shape_54.setTransform(-111.9,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_49},{t:this.shape_48,p:{x:-107.1,y:-39.6}},{t:this.shape_47,p:{x:-107.2,y:-39.7}},{t:this.shape_46,p:{x:-100.3,y:-39.7}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},3).to({state:[{t:this.shape_50},{t:this.shape_48,p:{x:-111.1,y:-36.8}},{t:this.shape_47,p:{x:-111.2,y:-37}},{t:this.shape_46,p:{x:-104.3,y:-37}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(36));

	// mouth
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgKgBQAEgFALABQAFABACACQgBABgGAAQgGABgFABIgDAFQgEgDADgEg");
	this.shape_55.setTransform(-102.1,-40.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AADACQgDgIgGgBQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBgBgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAJACAEALQADAMgBACIgGgMg");
	this.shape_56.setTransform(-92.2,-47.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEAZQghgBgUgKQgVgLgBgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAGgOQAFgMAAADIgFAXQAJAFAkAJQAhAJAsgRQANgGAJgGQAKgIABAAIgJAKIgPAKQgfATgcAAIgCAAg");
	this.shape_57.setTransform(-100.2,-45.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AACAGQACgFgCgDIgIgEQAEgEAIAFQACADgBAFQgCAGgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_58.setTransform(-94,-47.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag2ACQgTgOgBgDQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAIAVAOQATALAeAEQAbAAAZgOIAbgRQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAAAQgnAngoACQgfgEgTgRg");
	this.shape_59.setTransform(-101.6,-44.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5E3A00").s().p("AhDgUQASANAmAEQAkADArgiQgDATgKAeQgZgOgVAJQgTAHgQASQgTgUgWgjg");
	this.shape_60.setTransform(-102,-45.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7F2400").s().p("AgoABQAQgQAVgHQASgIAaANQgMAhgZAJIgEABQgRAAgXgZg");
	this.shape_61.setTransform(-100.6,-42);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5E3A00").s().p("AhDggQASAMAmAFQAkAEArgjQgDAUgLAfQgLAhgYAJIgFAAQggAAgxhPg");
	this.shape_62.setTransform(-102,-44.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhLgkQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQACADAWAKQAVALAfgCQAggCAighQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgFAcQgEAXgMAYQgMAYgVAGIgHABQglAAg1hbg");
	this.shape_63.setTransform(-102.2,-44.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgEgEQAGgEAEADQgDAAgDAEIAAAFQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgFgDACgJg");
	this.shape_64.setTransform(-110.1,-45.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAEATQACgEgDgSQgCgFgEgGIgGgHQABAAAIAFQAGAGADAHQACASgCAFQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_65.setTransform(-88,-46.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAAAAIgGgJQAPALgCAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgBgBgEgJg");
	this.shape_66.setTransform(-93,-45.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgCARQgjgCgUgOQgTgLAAgDQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABADASAKQASAJAgAAQAeABAugaQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQgqAcghAAIgCAAg");
	this.shape_67.setTransform(-100.7,-43.6);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(-100.4,-45.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5E0000").s().p("AgngDQAMgEAZgEQAXgEAUAGQgMAVgXABQgXgCgWgOg");
	this.shape_68.setTransform(-98.3,-41.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#442D00").s().p("AgPgCQAMACATgBIgWAEIgJgFg");
	this.shape_69.setTransform(-102.3,-43);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#442D00").s().p("AgPADQAPgDAQgGIgGANQgKgEgPAAg");
	this.shape_70.setTransform(-95,-44.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgxARQgNgMgHgIQARAEAnABQAkABAvgVIgFATQgmASgiAAQgkAAgGgCg");
	this.shape_71.setTransform(-99.6,-45.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgoAOQgcgXgHgMIgFgIIAIAEQADADAsAGQAqAGA7geIAFgDIgBAGQAAAHgMAiQgMAkgiAEQgigEgcgag");
	this.shape_72.setTransform(-100,-44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]}).to({state:[{t:this.shape_59},{t:this.shape_58}]},10).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},2).to({state:[{t:this.instance}]},6).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},24).wait(12));

	// Layer 1
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDB38C").s().p("AgmAjQgIgHAAgGQADgEANgGIgBAAQAHgCAHgPQAIgQADgMIABgBQAFgDARAEQAQADAOAFQgGAAgNAKIgYAQQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIAAgFQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAIAAABIABAEQgEAZgFAAQgMAIgIAAIgGgBg");
	this.shape_73.setTransform(-84.2,14.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgnAnQgMgKACgGQgFgBAYgMQAFgBAPgrQABgCADgCQAKgEAWAHQAXAHACACQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgOgFgQgDQgRgEgEADIgBABIgLAcQgHAOgHADIAAAAQgNAGgDAEQAAAFAIAHQAJAFARgLQAFAAAFgZQAAgDgCgBIAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAQADAUgNANQgKAJgMAAIgIgBg");
	this.shape_74.setTransform(-84.3,14.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDB38C").s().p("AgJAHQAEAAAGgGIAJgIIAAAEQgKALgGAAIgDgBg");
	this.shape_75.setTransform(-105.6,-53.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F4C7A8").s().p("AgrAGQAGgVARgEQAPgCAQAIQATAJAPAKQhLgogOA2QAAgNABgBg");
	this.shape_76.setTransform(-112.4,-60.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDB38C").s().p("AAoAwQAFABAHgHQAIgHABgDIABAEQgMANgHAAIgDgBgAgqAjQgRgPgBgUQgCgTABgCQAHgXAQgEQAcgCAcAWIAiAaIABgCIAEAQIAEAUIgKAFIgIAGQgDgCAAgGIgBgCIgDAAQgdAMgTAAQgSAAgMgKg");
	this.shape_77.setTransform(-110.7,-57.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgqAqQgTgRgBgWQgCgUABgDQAIgaATgFQAegDAcAWQAeAXADAGQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAIghgZQgcgXgcACQgQAFgIAWIABAVQACAUAQAQQAZATA2gWQAAAAAAAAQABgBAAABQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABQAAAFACACIAJgGQAIgFACAAQAAACgJAHQgIAIgEgBQgFgDgBgFQgcAKgTAAQgUAAgNgKg");
	this.shape_78.setTransform(-111.1,-57.5);

	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(-119.1,-74.5,0.55,0.55);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(-102.5,-75,0.55,0.55);
	this.instance_2.alpha = 0.5;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgMADIAWgKIADAFIgWAKg");
	this.shape_79.setTransform(-91.2,-66.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AABAAQgDgDgCABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAgBQADgBAHAFQACACAAAEQABAGgBABIgGgJg");
	this.shape_80.setTransform(-87.4,-66.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgLAAQAHgKAIgBQAHACAEAHQAEAFgBACIgFgFQgEgEgFgBQgFABgHAGIgJAKQgBgCAHgKg");
	this.shape_81.setTransform(-87.3,-67.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgLAsIARgTQARgQAFgTQgDgTgEAAQgHgLgJABQgKAEgMASIgOASQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABgDALgSQALgSAOgEQALgBAJAMQAFABADAWQgCAZgnAeIgBAAIgCgBg");
	this.shape_82.setTransform(-87.3,-66.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDB38C").s().p("AgNAsIgHgbQgFgUgEADQgBAAAKgUQAJgUAOgEQALgBAJAMQAFABADAWQgCAZgmAeIgCAAIgCgBg");
	this.shape_83.setTransform(-87.1,-66.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgLAdIAAgBQACgCAMgEIASgGQgBgNgIgJQgJgLgEgFIgMATQgKANgCABQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAWgjIACgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABACANAPQAMAMABASQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIghAJIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAg");
	this.shape_84.setTransform(-84.1,-89.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#49392B").s().p("AgRAUIgGgKIAIgSIAJgUIACgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQACACALAPQANAMAAASQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIghAJIgHgKg");
	this.shape_85.setTransform(-83.9,-89.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#49392B").s().p("ACECHQgHgLAAgaQACgbACgQQABgCgFgDQgGgDgZAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgDgGAIgSQAGgSAJgPQABAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgYAFgUgCIgXgEIgCAAQgYAQgdAAQgfgBgDgBQhjgSgdgjQgcgkACgSQAbAZAUABQAVAAABgCIgHgIQgGgIgBgQIABgKQAmAfAeADQAeADACgDIAAAAIgGgJQgHgIgBgXIAAgDQAfAVAcAAQAeAAAEgDQAxgGAbAMQAcAMAAACQAoAjAMAfQANAggBATQAAAOgCAHQgJgGgIABIgCABIAAABIAAABQAGAOAAAPQgBAZgIATQgIAUgDAFIgRABIgOAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_86.setTransform(-102.6,-81.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ACCCPQgJgNABgaQADgiAEgKQgIgEgagCQgFAAgBgDQgCgCABgEQAAgMAJgQIAOgYQgaAHgTgDIgXgGQgaAPgdAAQggAAgEgBQhTgMgigdQgigdgFgZQgGgZACgCQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQAVAXARAFQARAFAIgCQgNgPABgPQABgPABgCIACgCIADABQAdAbAaAHQAZAHALgCQgLgSABgTIABgKQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAABAAAAQABAAAAAAQAdAYAeACQAdACADgCQAzgHAeAKQAdALACADQA/A7ACAsQACAugFADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgFgIgIAAQAGAQAAARQgBAcgJATQgJAUgCACQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIghACQgFAAgDgEg");
	this.shape_87.setTransform(-103,-81.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D3D3D3").s().p("AhrAuIAYgFQAQgEAGgDIACgGIAAgBQgCgEgLABIgLACIAWgGIAAgCIgBgCQgGgGgmALIAAgBIAZgIQAVgHAMADIADADIAAABICVg5IACABQACABAAAGIgoAPIhHAYIgnAOIgBABQACACgOAOQgIAFgSAEIgaAEgAhqAfIALgDIgLAEIAAgBg");
	this.shape_88.setTransform(-92.3,19.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhuAsIABAAIAbgGQAPgEADgCQABAAAAgBQAAAAAAgBQABgBAAAAQAAgBgBAAQACgCgLABQgNABgMAEIgMAEIgBABIAAgHIAWgGIAXgHQAAgBgJAAQgIABgbAHIgCABIACgHIABAAIAZgKQAXgHANAEQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAIAngOIBEgcIAmgPQACgBAEACQAFACABAGIAAABIgCAEIgoAPIhHAYIgoAOQABAFgOANQgLAGgVAEIgZAEIgBABg");
	this.shape_89.setTransform(-92.4,19.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgEAAQABgCADAAQAEAAAAACQAAADgEAAQgDAAgBgDg");
	this.shape_90.setTransform(-111.2,-63.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgPAAQACgSANgDQAOADACASQgCATgOACQgNgCgCgTg");
	this.shape_91.setTransform(-111,-64.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgEAAQABgCADAAQAEAAABACQgBADgEAAQgDAAgBgDg");
	this.shape_92.setTransform(-98.1,-64.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgRAAQACgSAPgDQAQADACASQgCAUgQACQgPgCgCgUg");
	this.shape_93.setTransform(-98.1,-65.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EDB38C").s().p("AgyAOQABgIADgEQgBAAAPgGQAOgHAtgKIALAKQAKAJAEADIgCAAIgkAGQgdAFgYAKIgBAAQgMAAACgIg");
	this.shape_94.setTransform(-86.9,19.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ag1ARQgCgIAHgJQgBAAAPgIQAPgIAugKQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAAAIgCADQgtAKgOAIQgPAFABABQgEAFAAADIAAADQAFAHAIABQAXgKAdgFIAigGQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAACgNACIgfAHIgZAGIgUAGIgGABQgIAAgEgKg");
	this.shape_95.setTransform(-87,19.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgFAgQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAKgSgCgTIgBgXQADACADAVQADAUgLATIgDABIgBAAg");
	this.shape_96.setTransform(-107.2,-61.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgmA6QgEgFgJgkQgKghATgfQAYggBAAIQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAIAFAkQADAcgCAbQgCAegOALQgGADgeAGIgKABQgUAAgKgPgAgmgsQgRAdAIAgQAJAiADADQAIAPAagEQAYgEAQgGQAKgIgBgiQAAgngHgmIgXgCQgnAAgRAWg");
	this.shape_97.setTransform(-114.1,-67.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgFBIIgcgHQgMgHgEgdQgFgdAAgcQAAgdABgJQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQA+gOAbAcQAWAfgGAkQgGAlgDAGQgCAIgHAEQgMAGgOAAQgIAAgHgCgAgug+IgBAqQAAAcADAYQADAZAIAEQADACAYAEQAWAEASgIQAGgDABgHQADgEAFgkQAGgigVgdQgQgRgcAAQgQAAgUAFg");
	this.shape_98.setTransform(-97.6,-68.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgeAJQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgDAPgGQAPgIAeAOQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgcgJgMADQgOAGAAACIgCABIgCAAg");
	this.shape_99.setTransform(-105.6,-66.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E0A882").s().p("AAdEIIgLgUQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgeAKQAkhVgFhgQgEhegphVQACgpAOgnIgfACQgRACgCgEQgHghAUgWIApguQAIAGAEAHQAbAkgCApQgBAggHAXIgIAXIAAACIAAABQAcBNAJA/QAKBAgBAtQgDBNgDADIAAABIAAABIAHAOIAIAQIgGAVQgFARgLAHIgPgZg");
	this.shape_100.setTransform(-90.4,-56.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F4C7A8").s().p("AgnAsQgWgUgHgYQgHgZAAgVIACgYQAAAVAFAYQAFAYALAPQAZAjAgAKQAhAJAmABQgQACgPAAQg1AAgfgbg");
	this.shape_101.setTransform(-107,-36.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EDB38C").s().p("AB8EWIgLgUQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQidA2g/g2QgWgUgHgaQgHgZABgVQABgZABgCQAGhjAAhHQgBh5gJg8QgJg8gEgKQDEgwA9BHQAbAjgCApQgBAggHAXIgHAYIgBABIABABQAzCcgGBdQgDBNgDADIAAABIABABIAGAOIAIAQIgGAVQgFARgLAHIgPgZg");
	this.shape_102.setTransform(-99.9,-57.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("ACGE2IgMgYIgNgaQieA5hAg2QgfghgEglQgEgmACgDQAQjkgOhpQgOhqgDABQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgBQDHgyA/BKQAcAlgCArQgBAfgEAWQgEAXgCAEQAbBPAIA/QAJBCgBAuQgDBFgFAIIAJAOIAIANIAAABIAAACIgEANQgEANgGANQgKAOgFADQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_103.setTransform(-99.9,-57.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#9B7C24").s().p("AAQAEQgUgOgggGQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAaADAQANQAPAIAKAKIAJAKQgBgDgXgQg");
	this.shape_104.setTransform(-85.2,0.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#9B7C24").s().p("AgMgCQAYgMAZAKQABAAAAABQAAAAABAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgXgJgWAJQgZAHgCADQABgCAZgKg");
	this.shape_105.setTransform(-89.6,1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#69542C").s().p("AhEARIgKgtIAfgUIAfgTIAjAIIAmAJIAGAdIAKAzIAGAgIgxgFQgcgEgHgGIgNgLQgIgHgIABQgEABgDAHQADAEgVAZIgJgyg");
	this.shape_106.setTransform(-85,-30.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("Ag9BKIgCgCIgVhmQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIBAgoIACAAIBMAQQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAWB1IgBACIgCABQgKAAgjgEQgjgEgLgJQgNgOgLgBQAAAAgBAAQAAAAAAABQgBAAAAABQAAABgBABQAEAGgbAeIgBAAIgBAAg");
	this.shape_107.setTransform(-85,-30.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#AA8A30").s().p("AAiB8QgCgSgHgxQgHgxgQggQgHgQgIgDQgHgDgBACIgIgcIgQg2QA1ArAQBEQAQBDAGBLQgFAAgHgDg");
	this.shape_108.setTransform(-74.5,-14.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B59834").s().p("AAbCVQgCgSgHgxQgGgxgOghQgKgQgHgDQgIgDgBACIgKgiIgTg+IgKghQACgBAQgBQARAAARANIATAeQAQAXAIAHIABAAQAIADAEAGQgBAFgKAEIgCADIAAABIAGAkQAFAhAJAsQAJAtALAhQgCAEgJAIQgGAFgJAAQgHAAgIgDg");
	this.shape_109.setTransform(-73.7,-16.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAWCbQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgEgogIgtQgIgsgKgYQgIgQgIAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQABgCAHADQAIACAJAPQAOAiAHAxQAHAxABASQAVAGAKgIQAJgIACgEQgLghgJgsQgJgtgFggIgGglIAAgBIABgCQALgFAAgEIAAgBQgDgGgIgCIgBgBQgIgHgQgWIgTgfQgRgNgRAAQgRABgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAQACgBARgBQASAAATAPIAAAAQAYAsATAPIAIADQAGAEABAGIAAABQgCAGgNAGIARBfQAKAzAPAsIAAABIAAABQAAADgKAJQgJAHgSAAIgNgBg");
	this.shape_110.setTransform(-73.6,-17.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAAACIgDgMQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQABgBAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIACANQACAMgBACQgBgCgCgLg");
	this.shape_111.setTransform(-88.2,-26.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DDBB66").s().p("AgSAbQgNgGgEgPQgEgOAAgGQAVgTAXAJQAZAIAKAIQgiAkgSAAIgGgBg");
	this.shape_112.setTransform(-85.2,-26.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#69542C").s().p("AgqAwIgBgEQADgPAIgJIABgCIAAgBIgCgBQgSgFgEgLIAAAAQACgKARgMQASgMAMgFQApgRABAJQAEAKgFAJQgBABAAAAQAAABAAAAQABABAAAAQAAAAABABQAVANgBAMQgEARgSALQgSALgDAAQgeALgLAAIgDAAQgJAAgCgDg");
	this.shape_113.setTransform(-68.8,-1.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AguAyQgHgGARgZQgXgHgDgLIAAgBQADgPAWgNQAVgNAGgDQAngSAMAMQADAEAAAGQgCAJgDAGQAWANABANIAAACQgEATgTALQgVAMgDAAQgdALgPAAQgNAAgEgGg");
	this.shape_114.setTransform(-68.6,-1.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgUAiQgQgJgEgTQgFgSABgDIAAgCQAbgaAcAOQAfAOADAFIABABIgBADQgkApgWAAIgHgBg");
	this.shape_115.setTransform(-85.2,-26);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EDB38C").s().p("AguBgIgjgIIgYgFQgNgLABgNQABgPADgEQANgJAQAEIARAEIADAAIAagUIAagTQAPgFAogbQAdgUAPgHQAGgEgBgOIAAgLIALgEIAMgFQADAMAAAIQgBAOgFAHIgGAHQgqAYgdAZIgfAZIgBACIAAABQADAFAAAGQgCAPgHALIgKALIgBABQgDANgHAEQgLAEgGAAQgDAAgCgCg");
	this.shape_116.setTransform(-78.4,11.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgoBnIgLgDQgUgHgSgCIgSgCIADgBQgSgPABgQQABgRABgCIABgBQAOgKAQACQAQADAFADIAagUIAWgPQAHgBAPgMIAkgXQAdgUAQgIQACgCAAgLIgBgMQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAbgLIACAAIACABQAFAOAAALQgBAQgGAIQgHAIgCABQglAVgdAWQgcAUgHAHQADAGABAHQgBAPgJALIgNAOQgCANgIAHQgEAEgHAAIgGgBg");
	this.shape_117.setTransform(-78.4,11.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#AA8A30").s().p("AgrDvQAwhqgFiDQgHiBgPh4QAOABAKAIQALAIACAPQAJA/AJBmQAKBjABBYQABBcgUATIhEgJg");
	this.shape_118.setTransform(-77.8,-6.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B59834").s().p("AAjDvQg9gIhcgGQgHgFgDgjQAAgVAKgfQADgEAVhEQAUhCADhjIgCghIgCgiQAAgFATgaQASgZAzgRQADgBAZgCQAZgCAUALQALAIACAPQAJBAAKBlQAJBkABBXQABBdgUATIhKgKg");
	this.shape_119.setTransform(-86.2,-7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AApD1Qg/gJhjgGIgCgBQgDgBgHgaQgIgZAQgxQAFgFAZhWQAZhTgKh+IAAgCQgBgEATgbQASgbA3gSQAEgBAagCQAagCAWAMQALALAAASIALBPQAKBEAJBXQAIBYgCBEQgDBEgWAKIgCAAQgDgBhBgIg");
	this.shape_120.setTransform(-86.2,-6.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E0E0E0").s().p("AgFAAQABAAAEgCQADgCADAHQgCgCgJgBg");
	this.shape_121.setTransform(-103,20.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E0E0E0").s().p("AgDgEIAEABQAFABgDAHQAAgDgGgGg");
	this.shape_122.setTransform(-102,19.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgDgEIAEABQAFABgDAHQAAgDgGgGg");
	this.shape_123.setTransform(-99.8,22.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgFAAQABgBAEgBQADgBACAHQgBgCgJgCg");
	this.shape_124.setTransform(-100.2,20.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AADANQgRgLgQgKQABgEADgCQAJgEADABIABAAIABgBIACgDIAEgBQAHACABACIABABIAAAAQALACADAGQADAGgBABIAAABIACAAQAFABABACIAAAEIgBABIABABQAHAKgFAFIgCAAQgHAAgRgKg");
	this.shape_125.setTransform(-101.3,21);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgFALIgdgTQACgGAEgDQAJgEAGACQAAgDAHgEQAJAAACAFQATAIgBAKQAGACACACQACADgEADQAJAKgFAJIgBABIgDAAQgMAAgWgQg");
	this.shape_126.setTransform(-101.3,20.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EDB38C").s().p("AgQAiQgDgGACgFQAKgagBgPIgBgRIgBAAIAQALQAMAHABACQgDAXgHAMQgHANgCABQgGACgEAAQgFAAgBgCg");
	this.shape_127.setTransform(-107.4,16.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgSAlQgGgMADgFQAKgXABgNQABgNgDgIQABgEADAGQABAAABAQQAAAPgKAaQgCAFADAGQAFAEALgFQACgCAHgLQAHgMADgXIABgEQAAgBAAAAQAAAAABAAQAAAAAAABQABAAAAACIAAAQIgEAPQgMAXgDAAIAAAAQgIAEgGAAQgFAAgDgDg");
	this.shape_128.setTransform(-107.5,16.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E2E2E2").s().p("ABWBQQgWgDgLgOQgLgNAAgCIAAgBIgmgdIhEgzIgngeIgBgCQABgIAHgGIAlAjIAiAgIBBAzIABAAQAdgBALAEQALAEAEAFQALALgDALQgFAHgJAAIgEAAg");
	this.shape_129.setTransform(-108.4,16.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAyBGQgMgNgBgFIglgdIhGg0IgmgdIAAgBIgCgEQABgIAEgHIAHgGIABgCIAmAkIAlAjIAfAXIAhAbQAcgBAMAEQAMADAGAHQAKAJABANQAAAEgBADQgCAKgXAAQgXgDgMgOg");
	this.shape_130.setTransform(-108.4,16.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B59834").s().p("AgHBhQgHgEgDgCQAIgbACgoQACglAAgcIAAgWQAFgQAPgSQADANAAAbQgBAtgEAuQgDAvgCANQgHAEgDAAIgFgBg");
	this.shape_131.setTransform(-94.9,-14.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgLBmQgKgEgBgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAHgYADgkQADgiAAgdIgBgfQACgLAJgOIAOgRQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIACACQAGATgCAuQgBAsgEArIgFAwIgBACQgIADgFAAQgFAAgFgCg");
	this.shape_132.setTransform(-94.8,-15.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#69542C").s().p("AAJAnQgJgDgDgDQgZgNgGgIQgHgIABgDQAGgIAMgBIACgBIAAgDQgMgSAFgFQAGgGAQAEQAOADANAFQASALABAKIAAABQgBAHgGADIgIAEQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAABQADAKAAAHQAAAHgEADQgDADgFAAIgHgBg");
	this.shape_133.setTransform(-97,-3.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAGAqQgLgFgDgDQgmgTABgNIAAgCQACgEAHgEIANgEQgJgLgCgIQAAgFADgDQALgIAVAIIAZAJQAVAKgBAMIAAAAQgEAPgLAEQADAJAAAHQAAAJgGAFQgFADgGAAQgFAAgGgCg");
	this.shape_134.setTransform(-97,-3.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EDB38C").s().p("AgoBuIgegDQgDABgCgDQgHgJABgUQAAgZADgQQALgMASgNIAXgMQAOgBANgFIARgGIABgBIANgaIAYgxIAOgdIAMAIQgGAagVArIgYAvIgBABQgBAegGAOIgGAMIAAABQAAACAFACIAGAEQgGAIgdAIIgCABIAAABIABACQAVAZgEACIAAABIgCACQgVgJgagCg");
	this.shape_135.setTransform(-105.5,10.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAFB/IgBAAQgMgJgdgCIgggCQgGAAgEgEQgIgOABgdIACghIAWgTQAVgPAMgHIAWgFIAXgHIAOgcIAXgyIAMgbIACgBIADAAIAQAMQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAAQgEAZgVAoQgVAogJALQgCAwgHAJQAIADABAHIAAAAQgCAHgOAFIgWAHQASASACAKIgBADQgCAFgFAAIgBAAg");
	this.shape_136.setTransform(-105.4,9.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFEBE9").s().p("AghBaIgVi8QAKAGAaACQAYACAYAAIAZgBQgjAHgfgDIgkgDIADAuIAIBTIAFAuQAEAEAJAEIAKAEQgagGABgDg");
	this.shape_137.setTransform(-63.8,23.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CE807A").s().p("Ag5AAQAAgEAKgDQgFADgBADQgBAFA2ABQAWAAAQgCQAQgDABgCIgDgEQAGADAAADQAAABgRAEQgRACgYABQg0gCgFgGg");
	this.shape_138.setTransform(-62,20.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BC6258").s().p("AAbACIAAgBQgGADgSAAQgWgBgCgDQACgDAWgBIAKABQgPgEgbABIgSAAQAQgCAXAAQAXAAAQADQAQACABADQgCAHgmADQATgDAAgFg");
	this.shape_139.setTransform(-61,20.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#ED7D74").s().p("Ag5AAQAFgIA0gBQAYAAARADQARADAAADQAAAEgRADQgRADgYAAQg0gBgFgJg");
	this.shape_140.setTransform(-62,20.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8E0C35").s().p("AgqA5QAdACAVgTQAZghgDhDIANAAIgQBxQgaAIgSAAQgOAAgLgEg");
	this.shape_141.setTransform(-60.5,26.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BA1920").s().p("AgSA7QgZgGgBgCIgNhuIBzgBIgQBxQgZAIgRAAQgKAAgIgCg");
	this.shape_142.setTransform(-62,26.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#84093A").ss(1,1,1,3,true).p("ABLAAQgBAFgVADQgVADggAAQgeAAgWgDQgVgDgBgFQAAgGBKgDQAgAAAVADQAVADABADg");
	this.shape_143.setTransform(-62,13);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EFCCC7").s().p("Ag6BdQAJACALgFQALgFAEgHQAGgLgGgNQgGgNgHgLQgSgbAOgcQAIgKAMgGQAOgFAPAAQAigBgBgdQgBgHgDgCQgFgCgCgHQAbgCABgDIgGAzIgLBXIgFAxQACAIg0AEQgkgDgJgEg");
	this.shape_144.setTransform(-60.7,23.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#84093A").ss(1,1,1,3,true).p("ABFg0QgGAvgFAsQgGAuAAAEQABABgMAFQgLAHgfABQg4gIAEgDIgBgIQgBgJgDgjQgCgngDgUQgDgWgIg8QACACAOADQAQAFAqAAQABAAAggBQAfgBALgJQgBAEgFAug");
	this.shape_145.setTransform(-62,23.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EDEDED").s().p("AgHAyQAqgXAGgdIABgIQgFglhLgnQApAPAsAZQAsAZAPAeQgCAGgtAXQgtAWh3AbQA2gOAsgXg");
	this.shape_146.setTransform(-134.9,81.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#939393").s().p("AgcACQACgMAagDQAZgBAEANQgCAMgbADIAAAAQgYAAgEgMg");
	this.shape_147.setTransform(-163.4,75.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D3D3D3").s().p("ABGAYQgJgZgcgUQglgTgjgEIgmgDQAGgCAmAAQAkAAAmAZQAhAYAEAyIgIgag");
	this.shape_148.setTransform(-168.2,78.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D3D3D3").s().p("AApALQgMgLgVgHQgSgGgVABQgUABgCABIAGgKQAEgDAlAEQAjAEAZAmIgNgMg");
	this.shape_149.setTransform(-157,77.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D3D3D3").s().p("AgHgQQgWgSgCAAQAEAAAXAPQAVAQAPAiIgFAEQgOgigUgRg");
	this.shape_150.setTransform(-167.3,71.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D3D3D3").s().p("ABnBRQhKgThTgrQhWgpg9hLQgDgIAjADQAjACAdAMIBHAaQBoAxA5AnQAoAdAUAWQAUAWgHAFQgYgEhJgTg");
	this.shape_151.setTransform(-184.7,85.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#070300").s().p("ACGBhQhQgRhigtQhkgqhEhVQgCgBgDgIQgDgJAXgBQAXgCBKASIAKAFQB8AqBQA4QBPA6AZAuIAAAAQgHAAhNgPg");
	this.shape_152.setTransform(-184.4,85);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F7F7F7").s().p("AhSCCQhOgVhhgxQhhgwhChQIAogOIAjgMQBPgcBngSQBngTBxARQASAEAbAJIAxAOQBJARBSAdQBTAdAkA0QADAFgWAcQgXAchZAfQhaAfjGAQQgGAAhOgVg");
	this.shape_153.setTransform(-163.2,81);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#070300").s().p("AADCfQgEAAhPgVQhPgVhkgyQhjgyhEhSIgCgDIBTgdQBSgeB5gWQB5gXBwAjQAjALBDAOQBEAOBCAdQBDAdAiA0IAAAAIAAABQAEAEgTAdQgUAdhaAiQhaAhjRARg");
	this.shape_154.setTransform(-163.3,80.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#335D7F").s().p("AheARIAAgFIApgBQAmgBAqgHQAsgEAUgQIAEAEQgVAOgsAHQgqAHgmABIgnACIgFgBg");
	this.shape_155.setTransform(-87.8,28.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EA112B").s().p("AgIABQgFgCAJgBIAIgBIgGADIALABQAFACgIABIgEAAQgEAAgGgDg");
	this.shape_156.setTransform(-103.8,27.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CC002C").s().p("AgHAHIgHgDQgFgDAGgBQABgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIACgCQADgBAEAFIAEgEQABgEAEACQAIAFgIACQgCABAKAAQAJAAgGAEQgKAGgFAAQgEAAgDgDg");
	this.shape_157.setTransform(-103.9,27.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EA112B").s().p("AgGAAIAGgGIgBAHQABgBAHgFQAGgCgGAHQgFAFgHACQgHAAAGgHg");
	this.shape_158.setTransform(-106,27.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CC002C").s().p("AgJAHQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDgEALgBQgCgDAGgGQAHgCgEAHIAHgFQAHgFgBAIQgGAQgJgBIgGADIgCAAQgDAAACgFg");
	this.shape_159.setTransform(-106.1,27.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EA112B").s().p("AgIACQgGgCAJgCIAIgCIgFAEQACAAAJAAQAGABgJADIgGABQgDAAgFgDg");
	this.shape_160.setTransform(-106.1,25.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CC002C").s().p("AgGAHIgHgCQgGgCAGgDQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAgBAAIACgDQADgBAFAFIADgFQACgEADACQAIAEgHADIAHAAQAKAAgGAEQgKAHgFAAQgDAAgDgDg");
	this.shape_161.setTransform(-106.1,25.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#95C2EF").s().p("AhUApQgXgCgUgFIAJgtQAUADAXACQA+ADAzgKQA2gKASgPIACgDIAQACIgBAAQgKAdg0AbQgrAZhKAAIgggBg");
	this.shape_162.setTransform(-89.6,30.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#A09425").s().p("AgCABIgEgHIAIAGIAFAHg");
	this.shape_163.setTransform(-81.2,27);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#BCB12B").s().p("AgaAMIAxgfIAEAJIgyAeg");
	this.shape_164.setTransform(-84.3,28.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E0D83F").s().p("AgeANIAzgdIAKAGIg2Acg");
	this.shape_165.setTransform(-83.7,29);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#A09425").s().p("AgBgBIAFgIIgCAKIgEAJg");
	this.shape_166.setTransform(-91.7,26.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BCB12B").s().p("AgbgLIAGgIIAxAgIgGAHg");
	this.shape_167.setTransform(-89.2,28.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E0D83F").s().p("AgZgJIACgMIAwAkIgBAIg");
	this.shape_168.setTransform(-88.9,28);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A09425").s().p("AgCAAIACgJIADAJIgCAKg");
	this.shape_169.setTransform(-82.7,28.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#BCB12B").s().p("AgeADIACgHIA7AAIgBAJg");
	this.shape_170.setTransform(-86.1,27.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E0D83F").s().p("AgcAAIgDgFIA7ACIAEAJg");
	this.shape_171.setTransform(-85.9,28.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A09425").s().p("AgEAAIADgNIAFAOIgCANg");
	this.shape_172.setTransform(-94.6,28.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BCB12B").s().p("AgvAAIACgOIBdASIgDALg");
	this.shape_173.setTransform(-89.5,30.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E0D83F").s().p("AgqAAIgHgQIBeAXIAGAKg");
	this.shape_174.setTransform(-89.8,28.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E0E0E0").s().p("AgXAAQgEAAgDgFQAAgDAEgCQgBABAEAGQAHADAVAFIAaAHQgZgCgdgKg");
	this.shape_175.setTransform(-102.4,28.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#E0E0E0").s().p("AABAAIgEgBQACgBADAAIACAFIgDgDg");
	this.shape_176.setTransform(-92.3,26.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E0E0E0").s().p("AACAAQgBgDgFACQACgCAEABQADAEgBACIgCgEg");
	this.shape_177.setTransform(-96,27);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAGABQgBgBAAAAQgBAAAAABQAAAAgBAAQAAABgBAAIAAADIgBgEIgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgBAAIgCAAIACgBIgBgCIgFABQABgDAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIABAAIABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQADACgBADIgCgEg");
	this.shape_178.setTransform(-92.2,25.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E0E0E0").s().p("AAAAAIgCgBQABgBADAAIACAFIgEgDg");
	this.shape_179.setTransform(-92.8,25.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E0E0E0").s().p("AABAAIgEgBQACgBADAAIABAFIgCgDg");
	this.shape_180.setTransform(-91.7,26.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E0E0E0").s().p("AgMASQAHgCAAgFQADACACgCQADgCgCgEQAFACADgEQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAgBAAQAEgEgGgFQAEABACgFQACgFgCAAIACACQACADgCACIgCACIACAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAAAEIABABIACAEIABAIIgBAEQgUAGgWAAIAJgBg");
	this.shape_181.setTransform(-90.5,27.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgGAjQgxgGgSgGQgMgFABgDIAAAAQACgEABgBIABAAIAAgBIADgEIACAAIABgCIAAgDIADAAIACgFQACgFAEgDIACAAIADAAIADgDIAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEAAQAEgBAAgEIABgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAGAAIgBgCIAAgBIABgCIAAABIADABQADAAABgDIACgCIAFAAIACgBQABAAABAAQAAAAABABQAAAAABAAQAAAAAAAAIACAEIABgEQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAIACADIABgDQACgCABgBQADAAABADIABACIACgBQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIACADIAAAEIADgDIADgCIADADIABACIACgCIADgBIABACIACAEIACgBIACgBIACADIAAACIADgCQAEgCACABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAIAAAEIADgCQACgCADABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIADAAQACgCADAIIAAADIACgCIACgBQACADAAADIgBACIACAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgDADIAFAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIAAACIADACIAAAAIgBABIgBAAIACAFIABAHIgBAEQgbAHgdAAQgSAAgQgDg");
	this.shape_182.setTransform(-96.9,25.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgGAnQgygGgSgGQgNgFgBgGIAAgBQABgFADgCIAAgBIABAAIACgDIADgDIAAgCIAEgBIABgEQADgGAFgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIACAAIABgCQADgFADACIADAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAEgDADABIAAABIAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAEgBABACIABgBQABgDADgBIACAAIACAAIAEAAQACgBADACQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAIAFACQACgDACAAQAFAAACADQAEgCADABIACADIAEgCQADABACADQACgCADABQADABAAADIABAAIADAAIADADQADgDAFABQACACABADQAEgCAEACQADACAAAEQAFAAACAHQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAEADAAAGQACABACABIABADIgBACQAAAAABAAQABABAAAAQABAAAAABQABAAAAABIABADIgBABQAEAFAAADIABAIIgCAGIgBAAQgcAHgeAAQgSAAgQgCg");
	this.shape_183.setTransform(-96.9,25.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EBF7DC").s().p("AghAMQAGgJAIgDIAHgCIgWAGQgPAFAIgJQAtgRAVAFQAVAEgBADIgPgDQgLgCgNAEQgQAGgNAJQgIAFgCAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBg");
	this.shape_184.setTransform(-106.6,28.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#C5E8A3").s().p("AgLAGIAKgPIgUAPQgRAOAHgKQAJgLATgKQARgKAVAKIgKAHIgQAKQgFADAEgIIAFgJIgKAJQgHAKgJAGIgCAAQgDAAAHgLg");
	this.shape_185.setTransform(-105.4,29.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#8DD350").s().p("AgEAaQgHgEAAgCIgCgDIgDACQgIAFgFgCQgFgDgBgBIgBgCIgCABQgDAAgCgBQgEgGABgGIAAgDIgDAAIgKgBIACgBQAogbAbAEQAeADABADQAUAHgBABQgCACgGABQgNADgGAEIgGAJQgOAKgDgEIgBAAIgBABQgIAKgEAAIAAAAg");
	this.shape_186.setTransform(-106.6,29.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#699E36").s().p("AgPAVQgUALgDgMQgGABgEgBQgEgJACgHQgHACgGgCQgBgFAGgEQAqgcAaADQAdAEADADQAYAHgCAFIAAACQAAACgLAAQgMADgGAGQgFAIAAACIAAAAIgBAAQgPANgGgHQgIAMgHABQgHgEgBgGg");
	this.shape_187.setTransform(-106.3,29.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EBF7DC").s().p("AgkAHQANgHAHgBIgSABQgQAAAKgFQAwgGATAKQATAHgBACIgOgGQgKgCgOAAQgRABgPAFIgLADQAAAAAAgBQgBAAAAAAQAAAAAAgBQABAAAAAAg");
	this.shape_188.setTransform(-109.3,27);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#C5E8A3").s().p("AgMADIAMgMIgWAJQgUAJAJgHQANgJAUgEQATgFASAPIgLACIgTAIQgGACAGgIIAJgGIgNAFQgKAHgKAEIgBAAQgEAAAKgKg");
	this.shape_189.setTransform(-108.4,28.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#8DD350").s().p("AgNAYQgGgEABgDIgBgDIgDABQgKADgEgEQgEgDAAgCIgBgBIgCAAIgEgCQgDgGADgFIAAgDIgDgBQgKgDABAAIADgDQAtgPAaAKQAbALABADIAAABQARAJAAABQgDABgGAAQgOgBgHAFQgIAFgBACQgPAGgCgEIgBgBIgCABQgGAGgFAAIgDgBg");
	this.shape_190.setTransform(-109.3,28.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#699E36").s().p("AgPAdQgGgFAAgGQgWAFAAgNIgJgBQgCgJAEgGQgIAAgFgDQgCgDAEgDIAGgEQAvgQAZAKQAbALACAEQAVALgDAEIAAACQgBADgLgDQgMgBgIAHIgIAIIAAAAQgSAIgEgIQgIAIgIAAIgBAAg");
	this.shape_191.setTransform(-109.3,28);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A3643B").s().p("Ag1AjQgOgMAnggQgIAJgDAGQgDAHAWgCQA/gNAOgiQAAASgkAaQgjAagdACIgEABQgDAAgDgCg");
	this.shape_192.setTransform(-86.5,24.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C37C31").s().p("Ag0AnQgQgPAvgjQAjgaAcgDQAHAAAEACQAPAOgvAkQgjAZgcADIgDABIgHgCg");
	this.shape_193.setTransform(-86.5,23.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#542C27").s().p("Ag4AoQgSgPAxgkQAlgbAegDQAJAAAFACQAGADAAAFQAAASgkAZQglAbgfADIgDAAQgHAAgEgCg");
	this.shape_194.setTransform(-86.6,24);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A3643B").s().p("AgvAeQgGAAgEgCQgNgOArgbQgJAIgEAFQgEAHAWABQBAgIATgeQgCASgoAVQglAWgcAAIgBgBg");
	this.shape_195.setTransform(-85.3,25.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#C37C31").s().p("AguAjQgGAAgEgCQgOgQAzgeQAmgWAcABQAHAAADACQAOARgzAdQglAVgcAAIgBAAg");
	this.shape_196.setTransform(-85.3,24.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#542C27").s().p("AguAlQgJgBgFgDQgRgRA2geQAngWAfAAQAJABAEADQAFADAAAGQgCARgnAVQgnAWgeAAIgBAAg");
	this.shape_197.setTransform(-85.3,24.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#A3643B").s().p("Ag2ASQgGgCgDgDQgJgPAwgRQgLAFgFAGQgFAGAVAEQBAAJAagZQgHAOgrAOQgaAGgUAAQgNAAgLgCg");
	this.shape_198.setTransform(-84.4,26.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#C37C31").s().p("Ag2AXQgGgCgCgDQgKgSA5gRQAqgMAbAHQAGACADADQAJARg4ATQgZAGgVAAQgNAAgLgCg");
	this.shape_199.setTransform(-84.4,25.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#542C27").s().p("Ag2AYQgIgCgFgFQgMgSA8gSQAsgMAdAIQAJADAEAEQAEAEgCAFQgGAPgsANQgZAGgVAAQgPAAgMgDg");
	this.shape_200.setTransform(-84.5,25.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#82B1D8").s().p("AgOArQg5gEgogPQgogOgNgMQgFgGABgBQACgQAugKQAtgKBLADQBKAFAvAQQAvAQABAPQABACgEADQgOALg0AKQgpAIgxAAIgYgBg");
	this.shape_201.setTransform(-95.7,25.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#335D7F").s().p("AgPAvQg6gEgpgPQgpgPgOgNQgFgFAAgEQAEgTAwgLQAxgKBJAEQBIAEAzAQQAyARACASQAAADgFAEQgSAOg1AJQgqAHgvAAIgZAAg");
	this.shape_202.setTransform(-95.7,25.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#95C2EF").s().p("AgXBJQhcgLglglQgmgiABgSQgCgEAbgTQAbgTBegEQBSgBA/ARQBAAQATAXQAIAJgEAIQgLAYg0AcQgqAXhNAAIgegBg");
	this.shape_203.setTransform(-95.7,27.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#335D7F").s().p("AgXBUQhhgNgmgoQgngnACgVIAAAAQgDgFAbgWQAbgXBkgFQBXgBBAATQBAATAUAZQAJAMgFAKQgMAdg1AeQgsAahPAAIgegBg");
	this.shape_204.setTransform(-95.6,27.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#79AACC").s().p("AgPAHQgEgKAOgIQAOgGAHALQAEAKgOAIQgGACgCAAQgIAAgFgHg");
	this.shape_205.setTransform(-101.3,32.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#79AACC").s().p("AgJAFQgCgFAJgFQAIgEAEAGQACAEgJAFQgDACgDAAQgEAAgCgDg");
	this.shape_206.setTransform(-93.9,32.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#79AACC").s().p("AgPAHQgEgKAOgIQAOgGAHALQAEAKgOAIQgGACgCAAQgIAAgFgHg");
	this.shape_207.setTransform(-87.6,32.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#703B0B").s().p("AgJCeQjIgNiYgoQiXgng2g2QgUgUAAgWIAAgEQACgYAZgUQA8gvCcgWQCbgVDGALQDIANCXAoQCXAnA2A2QAXAWgCAXQgFAthQAfQhPAfiGANQhNAIhYAAQhBAAhEgEgAlUiIQiZAUg7AuQgWASgBATQgBATASASQA1A1CVAmQCVAnDGANQCcAJCEgMQCDgNBRgcQBQgdAFgoQABgUgTgRQg0g1iVgmQiWgnjFgNQhDgEhAAAQh3AAhkAOg");
	this.shape_208.setTransform(-97.4,33.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#8E4E1A").s().p("AhtCYQh+gJhvgTQhwgUhXgcQCUAiC2AMQC1AMCdgKQCggKBlgeQBmgeAGgxQABgWgVgYQgbgchEggQhFghhDgWQBoAYBKAgQBKAgAhAlQAVAYgBAWQgGAyhYAiQhZAjiTAOQhUAJheAAQhGAAhNgFg");
	this.shape_209.setTransform(-88,35.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#8E4E1A").s().p("ApEA8QgWgYACgXQABgWAZgUQBBg2CrgYQCqgYDaANQCxAMCSAgQCRAhBUAsQhagliGgeQiHgficgLQjagMisAYQisAYhDA2QgYATgCAXQAAAMAKAPQAKAPALANQAVAWAlAVQhGgegfgig");
	this.shape_210.setTransform(-101.3,28.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#82470D").s().p("AgKCxQjegPingvQimgug7g/QgVgXABgXQABgYAZgWQBCg3CsgYQCrgZDcANQDdAPCnAvQCoAuA6A/QAWAXgCAXQgGAyhYAjQhZAiiTAPQhUAIheAAQhHAAhMgFg");
	this.shape_211.setTransform(-97.2,34.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#82470D").s().p("AgKCxQjegPingvQimgug7g/QgVgXABgXQABgYAZgWQBCg3CsgYQCrgZDcANQDdAPCnAvQCoAuA6A/QAWAXgCAXQgGAyhYAjQhZAiiTAPQhUAIheAAQhHAAhMgFg");
	this.shape_212.setTransform(-97.2,34.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#703B0B").s().p("AgOCjQgugIhWgZQgyAIhKgKQhKgLhBgUQhBgVgYgZQiEgrgig3IAAgBIAThzQABgFAFAAIT/BEQADAAABADQASAjADBYIABACIgBAAQgbAgg7AXQg5AWg6AKQgQAThCAFQhCAFhRABIgjAAIglABQgUAQg0AFQgTACgTAAQgiAAghgGgAiQB9QBUAYAvAIQA3AJAzgFQA0gGAPgNIABgBIBKgCQBKAABFgFQBEgFAOgSIACgBQA8gLA5gWQA4gWAYgdQgChXgSgiIz/hDIgCALIgEAaIgIAxIgFAbQAiA1CBAqIABAAIABABQAWAYBBAVQBAAUBKAKQBJAKAygHIABgBg");
	this.shape_213.setTransform(-97.4,45);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#703B0B").s().p("AgKC7QjfgPiogxQiogwg7hBQgXgZABgaQACgbAagYQBEg4CsgaQCtgaDcAOQDfAPCnAxQCoAwA8BBQAXAZgBAaQgGA0haAkQhZAmiUAPQhWAJhgAAQhHAAhLgFg");
	this.shape_214.setTransform(-97.2,34.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E2E2E2").s().p("AgHCHQgCgBgDgHIgDgJQATg4gGhNQgDggAAgYQACgpAJgMIAKgLIgGAJQgHAKgBAlIACAjIAEAoQAJBRgUA5IgDACIgBgBg");
	this.shape_215.setTransform(-146.9,57.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E2E2E2").s().p("AAIBsQgIgJgDgXIgFgiQABAAABgZQACgcgGghQgIgjgHgMQgHgNAAABQAAgDADgBQABAAAKAOQAJANAJAlQADAbABAeQACAdAIAaQAIAZALAKQAAABgLACIgMABIgCAAg");
	this.shape_216.setTransform(-50.3,61.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E2E2E2").s().p("AgJCHQgBABgCgSQgCgRAJg1QALhSgGgxQgGgwgCgCQACgCADACQACACAFAlQAHAlgDA4QgFBIAFAdIAFAdIgMAEIgJACIgBAAgAANCBIAAAAIAAAAg");
	this.shape_217.setTransform(-112.5,65.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E2E2E2").s().p("AgHBzQgCgNAEgjQAEgkADgfQAGgwgIgfQgJgfgCgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQADADAIAdQAJAdgDAhQgGAigCAoQgBAoADAMQgBACgEADIgGADIgBAAg");
	this.shape_218.setTransform(-82.2,64.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EDEDED").s().p("AA3DzQhJgWgdgfQgdgeABgEIgCgCQhpgSgqgjQgpgjgBgHIAAAAQABgNAKg5IAXh/IAVhyIAXABQghBiAjBiQAiBfBcA8QAIBLAzAXQAyAWBEgBQBFAAA5AGIAYAQQhHAMg2AAQgyAAglgKg");
	this.shape_219.setTransform(-140.3,54.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F2F2F2").s().p("Ai9DVQgQgJgGgFQAdAMAhgPQA/goAzguQAygtBLgXQBIgWAKhMQAKhOgIhUIANAAQAMAaAFA5QAGA5ABAzIABA5QguBAg4AbQg5AagqAEQgoAFgDgCQgjACgPAKQgPALAAACQgXAkgfAEIgJAAQgQAAgNgGg");
	this.shape_220.setTransform(-52.1,57.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F7F7F7").s().p("AhBD3QgkgOgBgDIgCAAQiSAdhQgVQhQgVgfggQgfggABgEIgCgCQhpgSgqgjQgpgjgBgHIAAAAQABgNAKg5IAXh/IAVhyIB4AGIEhAPIFiASIFAARIC4AJQAHBUgKBOQgKBMhHAWQhMAXgzAuQg0Atg/AoQghAPgdgMIgCgCQgpgZgcAIQgcAIgCAEQhOArg+ABIgIAAQg3AAghgNg");
	this.shape_221.setTransform(-100.7,55.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#F7F7F7").s().p("AhTD3QgjgOgCgDIgCAAQiSAdhQgVQhQgVgfggQgfggABgEIgCgCQhpgSgpgjQgqgjAAgHIAAAAQAAgNAKg5IAXh/IAVhyIBhAFIDtAMIEyAQIEzAPIDuAMIBgAFQALAbAGA4QAFA5ABAzIABA5QguBAg5AbQg4AagqAEQgqAFgDgCQgjACgPALQgPAKAAACQgXAkggAEQgZABgSgKQgSgLgBgCQgogZgdAIQgcAIgBAEQhPArg+ABIgIAAQg2AAgigNg");
	this.shape_222.setTransform(-98.9,55.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#562904").s().p("AhTEAQgngPgFgFQiEAmhPgTQhQgSgkgiQgkgjgDgLQhagNgpgWQgogXgLgUQgKgUABgCIgBgCIAAgBQABgSANhJIAaiTIAPhVQABAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIUEBEIADABQAMAbAGA8QAFA8ACA1IAAA7QABADgWAcQgXAcgvAdQg9AfgxAEQgxAFgDgCQgcgEgPAQQgPAPAAADQgZAngiAEQgbABgTgLQgTgLgBgDQgVgcgUAAQgVAAgOAKIgQANQhOAsg/AAIgEABQg6AAglgQg");
	this.shape_223.setTransform(-98.9,55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.instance_2},{t:this.instance_1},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]}).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.instance_2},{t:this.instance_1},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},10).wait(45));

	// hand
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#69542C").s().p("AgdAuQgGgFgBgQQgBgPACgMIAAgBQACgqAKAAQAIgCAIAGQAHAGAEAFIABABIACgBQALgLAKACQAHAFACAQQABAPgBAIQgDAggNAEQgIACgHgFIgGgGIgCgBIgCABQgOAOgIAAIgDAAg");
	this.shape_224.setTransform(-97.5,-6.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgfAyQgMgJABgYIACgUQAAgpAQgGQAJgCAKAHQAHAHAEAFQAPgPAKAEQALAIABATQABARgBAFQgEAkgQAGQgIACgHgGIgJgJQgPARgLAAIgEgBg");
	this.shape_225.setTransform(-97.5,-6.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B59834").s().p("AgHBhQgHgEgDgCQAIgbACgoQACglAAgcIAAgWQAFgQAPgSQADANAAAbQgBAtgEAuQgDAvgCANQgHAEgDAAIgFgBg");
	this.shape_226.setTransform(-94.9,-14.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgLBmQgKgEgBgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAHgYADgkQADgiAAgdIgBgfQACgLAJgOIAOgRQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIACACQAGATgCAuQgBAsgEArIgFAwIgBACQgIADgFAAQgFAAgFgCg");
	this.shape_227.setTransform(-94.8,-15.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#69542C").s().p("AAFAvQgGgKgEgHQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCABQgUAVgDgFQgHgFAAgRQgBgRACgOQAGgdAHgKQAGgJAEAAQAMACADAIQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIACAAQANgIAIAEQALAIADAVQADATgBAMQgEAbgGAJQgFAJgEAAQgIAAgIgKg");
	this.shape_228.setTransform(-103.6,-15.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AADA0QgHgLgEgIQgQAUgKgDQgLgIAAgXQABgVABgGQAKgyASgDQAHgBAEAGIAFAJQAOgJAMAEQAOAMADAZQADAXgBAEQgHAwgRADIgBAAQgKAAgIgLg");
	this.shape_229.setTransform(-103.6,-15.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("Ag3BFQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABhDQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAZgMAXgaQAVgZACgEQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAIABACIgBACIgXAdQgXAZgZALIgBAbIgBAgQAWgSBShMQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgxAtgcAaIgfAcIgCABIgBgBg");
	this.shape_230.setTransform(-95.8,-17.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#B59834").s().p("Ag3BFQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABhDQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAZgMAXgaQAVgZACgEQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAIABACIAQAQIARAQQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgxAtgcAaIgfAcIgCABIgBgBg");
	this.shape_231.setTransform(-95.8,-17.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#69542C").s().p("AgXA7QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgGQAHgUAAgTQgEgogJgPQANADAIAGQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQADgYACAEQACAAAKAOQAJAPAJASQgBAjgEALQgFAMgDAAQgJgCgFgHQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgCABQgOARgFADIgEADIAAgBg");
	this.shape_232.setTransform(-102.4,-15.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgZA/QgHgIAEgIQAKglgHgaQgIgcgCgCIAAgDIABgBQAOgBALAHQABgTAIgBQAIAAAMAUQALATAFAMIABABQgBA7gQAEQgMABgGgJQgTAWgGAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_233.setTransform(-102.5,-15.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgJApQgHgQgEgXQgDgUADgTQADgRAKgDQAJAAAIAQQAIARADAXQADAUgDATQgDARgLADIAAAAQgIAAgIgRgAgPACQAKAxAMACQANgGgFgwQgJgxgMgCQgNAGAEAwg");
	this.shape_234.setTransform(-105.5,-14.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#513D1D").s().p("AgRACQgFgxAQgHQAQACAIAzQAGAxgRAHQgQgCgIgzg");
	this.shape_235.setTransform(-105.6,-14.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AguBAIgBgCIgGgtIAAgBQAGgLAigbIAugpQAAgBABAAQAAAAABAAQAAAAABABQAAAAABAAIAAACIgBACQgfAagXAXQgaAVgDAGIACASIADAWQALgHAbgWQAagXAbggQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAQghAngdAYQgfAYgDABIgBABIgCgBg");
	this.shape_236.setTransform(-96.4,-19.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#B59834").s().p("AgsBAIgCgCIgFgtIAAgBQAGgLAigbIAtgpQABgBAAAAQABAAAAAAQABAAAAABQABAAABAAIAAACIAHATQAGARAAADQgSAVgjAeIgpAjIgBABIgBgBg");
	this.shape_237.setTransform(-96.5,-19.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#69542C").s().p("AgBAzQgHgGABgJIgBgCIgCgBQgWAHgGgBQgGgBABAAQgBgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIAEgFQARgNAKgPQATgjABgRQAJAJADAJQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIACgBQAPgSAAAEQAEADAAARQAAARgEATQgVAdgKAHQgIAGgCAAIgBgBg");
	this.shape_238.setTransform(-105.2,-20.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgEA6QgJgHAAgLQglAJABgIQgBgLAHgEQAegZAJgZQAIgcgBgDIABgCIADAAQAMAHAEAMQAMgPAHADQAJAGgBAXQgCAVgCAMIgBABQgfAtgOAAIgEAAg");
	this.shape_239.setTransform(-105.1,-21);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgZA0QgJgGADgSQADgSAKgTQAKgTALgOQAMgOAKAEQAJAHgCARQgDATgKASQgKAUgLAOQgKAKgIAAIgFgBgAgNgGQgUAsALAKQAOACAWgsQAUgrgLgKIgCAAQgOAAgUApg");
	this.shape_240.setTransform(-107.2,-21.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#513D1D").s().p("AgXAyQgOgMAWgtQAWgtASADQANAMgWAtQgUAqgRAAIgCAAg");
	this.shape_241.setTransform(-107.3,-21.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AhDAfIgCgBIgBgDIAVgmIABgBQALgFAqgGIA/gHQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBACIgCABIhIAJQgiAFgGADIgIAOIgLAUQANAAAkgDQAhgEApgMQABgBABABQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgzAPglADIgmABIgEAAg");
	this.shape_242.setTransform(-97.5,-20.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B59834").s().p("AhFAeIgBgDIAVgmIABgBQALgFAqgGIA/gHQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBACIgFAUIgGARQgaAIguAGIg2AGIgCgBg");
	this.shape_243.setTransform(-97.5,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},10).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238}]},2).to({state:[{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},3).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.3,-96.3,176,193);


// stage content:



(lib.eatCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eat();
	this.instance.setTransform(214.8,98.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(108.5,102.4,176,193);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;