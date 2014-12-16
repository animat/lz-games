(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/splashcorrect.mp3", id:"splashcorrect"},
		{src:"sounds/splashincorrect.mp3", id:"splashincorrect"}
	]
};



// symbols:



(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgCAAgDAAQgCAAgCAAQgDgCAAgEQAAgBAAgBIgIAAQgBACAAAAQABAGAFAFQAFAFAFAAQAHgBAFgFQAEgEAAgGQAAgBAAgCg");
	this.shape.setTransform(107.4,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1C1C6").s().p("AgKAFQgFgFgBgGIABgCIAIAAIAAACQAAAEADACQACABACAAQADgBACAAQADgCAAgEIgBgCIAJAAIAAACQABAGgFAEQgFAFgHABQgFgBgFgEg");
	this.shape_1.setTransform(107.4,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#59595B").s().p("AABAOQgCgBgDgEQgEgFAAgEQABgFAEgFQADgDABAAQgBAKAAAFQADAGAGAGIgEAAIgEAAg");
	this.shape_2.setTransform(-94.9,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B7B7C").s().p("AAAAAQAAgFgEgHQAEACABACQAEAFgBAEQAAAGgEAEIgBACQABgHAAgGg");
	this.shape_3.setTransform(-93.3,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAMAOQgGAFgGgBQgHAAgGgGQgFgGAAgGQABgHAGgGQAGgFAGAAQAHABAGAGQAFAGgBAGQAAAHgGAGg");
	this.shape_4.setTransform(-94.3,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D6D70").s().p("AAAASQgHAAgGgGQgFgGAAgGQABgHAGgGQAGgFAGAAQAHABAGAGQAFAGgBAGQAAAHgGAGQgFAFgHAAIAAgBg");
	this.shape_5.setTransform(-94.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A9A9B").s().p("AQzAUIABgBIADAAIAAABgAwxgOIgEgDIgBgCIDKAGg");
	this.shape_6.setTransform(-0.5,-6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBDBDD").s().p("AQ1AfIgBgBIAAgBIADAAIAAACgAw2gXQABgEACgCIACgBIElALg");
	this.shape_7.setTransform(-0.6,-7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AQ6AjQACgCABgCQAAgDgCgCQgCgCgCAAQgDAAgCABMghVgA8QgBgBgGABQgFAAgGAEQgGADgBALQAAAJAGAFQAFADAFAAQAGABAAAAMAhYAAhQAEAEAEgDg");
	this.shape_8.setTransform(-0.6,-7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C1C1C6").s().p("AQyAiMghYgAhIgFgBQgGAAgFgDQgGgFABgJQAAgLAHgDQAFgEAGAAIAGAAMAhVAA8QAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAQADAAACACQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_9.setTransform(-0.6,-7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AvNBDQABAAAMgGQALgFAXgQQAWgQAZgYQAZgZAcgpIAVAKQASAIAoANQAmALAtAFQAsAFA2gHQA0gIAxgbIAOAIQASAIAVAJQAVAIAlAJQAiAHAmACQAlAAArgKQArgLAogZIAUAJQAOAHAnAPQAgALAqAJQAqAJAwABQAuACAvgMQAtgLApgfQAAAAAYAIQAVAHArAKQAoAJAzAEQAzAEA4gHQA3gHA2gYIAQAGQAOAGAfAIQAcAHAkAEQAjADApgGQAmgFArgT");
	this.shape_10.setTransform(9,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7B7B7C").s().p("AAAAJIgCgBQAAgIgEgIIAKAHIADABQAAADgBACIgEAEIgCAAIAAAAg");
	this.shape_11.setTransform(-98.3,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#59595B").s().p("AgCADIgCgDIAAgEQACgCACgBQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAABAAIABABQgBAHADAHg");
	this.shape_12.setTransform(-100.6,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AAVAMQgDADgEACQgEABgDgCIgYgOQgDgCgBgCQgBgEACgEQADgEAEgBQADgCAEACIAXAOQAEABABAEQABADgCAFg");
	this.shape_13.setTransform(-99.4,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D6D70").s().p("AAHAQIgYgOQgDgCgBgCQgBgEACgEQADgEAEgBQADgCAEACIAXAOQAEABABAEQABADgCAFQgDADgEACIgDAAIgEgBg");
	this.shape_14.setTransform(-99.4,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#59595B").s().p("AgYAqIAJgPIAPgbIAOgbIAIgPIADACIgYAoQgKAVgNAWIgCgBg");
	this.shape_15.setTransform(-96.6,4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7B7B7C").s().p("AgXAqQAXgqAWgqIACABIgIAPIgQAaIgNAcIgIAPIgCgBg");
	this.shape_16.setTransform(-96.2,4.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AgRAyIgOgIIAxhbIAOAIg");
	this.shape_17.setTransform(-96.4,4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D6D70").s().p("AgfAqIAxhbIAOAIIgxBbg");
	this.shape_18.setTransform(-96.4,4.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BBBBBC").s().p("AgEAYQgLgOgBgQQgBgRAJgPQgHAYAMAaQAIAPAMAMQgNgEgIgLg");
	this.shape_19.setTransform(-97.8,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3E3E5").s().p("AAAAAQAAgTgJgSIAIAHQALAQAAARQgBAUgLAPQADgUgBgSg");
	this.shape_20.setTransform(-90,0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8D8D8").s().p("AgSA1QgOgFgKgMQgLgMgCgPQgCgMAEgPQAFgOAMgKQAMgLAPgCQANgCAOAEQAOAFALAMQAKAMADAPQACANgFAOQgFAOgMALQgMAKgPADIgJABQgIAAgKgEg");
	this.shape_21.setTransform(-94.3,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D6D6D8").s().p("AAAAXQADgYgGgYQgIgZgSgUQAMACAMAGQAJAGAJALQANAPAEAUQADAQgHATQgGASgPAOQgKAKgOAEQAQgXADgZg");
	this.shape_22.setTransform(-90.1,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B6B6B7").s().p("AAEBDQgNgGgLgNQgOgQgDgTQgDgRAGgTQAGgSAQgOQALgJALgEQAOgFANABIABAAQgXAHgNAPQgKAOgCAUQgDARAKAVQAQAcAaATIgDAEIgEAAQgOAAgOgGg");
	this.shape_23.setTransform(-97.8,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("ABJAZQgGAUgRAOQgRAOgUAEQgSADgUgGQgTgHgOgQQgOgRgEgVQgDgSAGgUQAHgTARgOQAQgOAUgEQATgDATAGQAUAHAOARQAOAQAEAUQADATgHATg");
	this.shape_24.setTransform(-94.3,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C1C1C6").s().p("AgZBKQgSgIgPgQQgOgRgDgUQgEgSAGgTQAIgTAQgPQAQgOAVgEQASgDATAGQATAIAPAQQAOARAEATQADATgHATQgGATgQAPQgRAOgVADIgNACQgMAAgNgEg");
	this.shape_25.setTransform(-94.3,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgBAAgEAAQgBAAgDAAQgCgCAAgEQAAgBAAgBIgJAAQgBACAAAAQABAGAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgGQAAgBgBgCg");
	this.shape_26.setTransform(78.5,-4.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C1C1C6").s().p("AgKAFQgFgFgBgGIABgCIAIAAIAAACQAAAEADACQADAAABAAQAEAAACAAQACgCAAgEIgBgCIAJgBIAAADQAAAGgEAEQgFAFgHAAQgFAAgFgEg");
	this.shape_27.setTransform(78.5,-4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgCAAgDAAQgCAAgCAAQgDgCAAgEQAAgBAAgBIgIAAQgBABAAABQABAGAFAEQAFAFAFAAQAHAAAFgFQAEgEAAgGQAAgBAAgCg");
	this.shape_28.setTransform(-73.8,-6.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C1C1C6").s().p("AgKAEQgFgEAAgGIAAgCIAJAAIAAACQAAAEACACQADABABAAQADgBACAAQADgCAAgEIgBgCIAJAAIAAACQABAGgFAEQgFAFgHABQgFAAgFgGg");
	this.shape_29.setTransform(-73.8,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgCABgDAAQgCAAgCgBQgDgCAAgEQAAgBAAgBIgIAAQgBACAAAAQABAGAFAFQAFAFAFAAQAHgBAFgFQAEgEAAgGQAAgBAAgCg");
	this.shape_30.setTransform(-37.8,-5.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C1C1C6").s().p("AgKAEQgFgEgBgFIABgDIAIAAIAAADQABADACACQACABACAAQAEgBACAAQACgCAAgDIAAgDIAIAAIABADQgBAFgEAEQgFAFgHABQgFAAgFgGg");
	this.shape_31.setTransform(-37.8,-5.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgIABQAAABAAABQAAAEgCACQgCAAgEAAQgBAAgDAAQgCgCAAgEQAAgBAAgBIgJAAQgBABAAABQABAGAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgGQAAgBgBgCg");
	this.shape_32.setTransform(-3.2,-5.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C1C1C6").s().p("AgKAEQgFgEAAgGIAAgCIAJAAIAAACQAAAEACACQADABABAAQADgBACAAQADgCAAgEIgBgCIAJAAIAAACQABAGgFAEQgFAFgHABQgFAAgFgGg");
	this.shape_33.setTransform(-3.2,-5.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAACQAAADgDACQgCABgDAAQgCAAgCgBQgDgCAAgDQAAgCAAgBIgIAAQgBACAAABQABAFAFAFQAFAFAFAAQAHgBAFgFQAEgEAAgFQAAgCAAgCg");
	this.shape_34.setTransform(38.9,-4.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C1C1C6").s().p("AgKAFQgFgFgBgFIABgDIAIAAIAAADQAAADADACQADAAABAAQAEAAACAAQACgCAAgDIgBgDIAJgBIAAAEQAAAFgEAEQgFAFgHAAQgFABgFgFg");
	this.shape_35.setTransform(38.9,-4.6);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.1,-12.6,220.2,25.2);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhCBjQghgEgfgRQAKAFAUACQAVACAbgCQAagBAagFQAYgFAVgIQAUgIAJgLQAFgGgMgIQgMgJgTgLIgngVQgVgNgOgNQgMgOgHgKQgGgLgDgKIgHgVIAKATQAHANAPAQQAOAPAXAPQANAKAUAJQATAGATAHQASAGAQAEIAWAGQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACABADQAAADgCADIgFAGIgEADIgaAQQgSAKgZAKQgaAJgcAFQgRADgSAAQgOAAgOgCg");
	this.shape.setTransform(3.3,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AArBvQgrgJgggYQgigYgZgkQgZgigQgrQAIgFAHgHIALgPQAGgHALgEIAKgFQAIgEAJgDQAIgDAGAAQAFgBgBAGIgIAiQgFARABATQAAATAHASQAIAUATAVQAcATApARQApAQAtANQgfAHgbAAQgRAAgPgCg");
	this.shape_1.setTransform(-7.6,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Ag/h4QAoAZAGANQAGAOAMASQAOATAbASQAQAKAUAHQATAIATAHQATAGAOAEQAPAEAHABQABAAAEADQAEACABAGQABAGgJAIQgEAFgQAKQgQALgZALQgZAMgeAHQgfAIgggCQghgBgigRQgigPgggkQgfgjgKhK");
	this.shape_2.setTransform(-1.3,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgGB8QghgCgigQQgigPgggkQgfgjgKhKQBMhZApAaQAoAZAGANQAGANAMATQAOATAbASQAQAKAUAHQATAIATAHIAhAKIAWAFIAFADQAEACABAGQABAGgJAIQgEAEgQALQgQAKgZAMQgZALgeAIQgZAGgbAAIgLAAg");
	this.shape_3.setTransform(-1.3,-1.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-14.2,38.8,26.4);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABbhCQgBAAgJAGQgJAGgOAIQgOAHgPAHQgQAGgNACQAAAAgCALQgEALgIANQgHAPgLAPQgKAOgNAHQgNAIgOgFQgBAAgDgFQgDgFAAgLQAAgIAEgRQADgRADgSQABgUgEgQ");
	this.shape.setTransform(-6.9,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhSBBIgEgFQgDgFgBgLQABgIAEgRQADgRACgSQACgUgEgQICsgOIgJAGIgXAOQgOAHgPAHQgQAGgNACIgCALIgMAYQgHAPgLAPQgKAOgNAHQgIAFgIAAQgGAAgFgCg");
	this.shape_1.setTransform(-6.9,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAOQgEgBgDgEQgCgEAAgFQABgFADgFQADgEADABQAEABACAEQADAEAAAFQgBAFgDAFQgDADgDAAIAAAAg");
	this.shape_2.setTransform(18.8,-38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAlQgKgCgGgLQgGgLABgOQACgQAIgKQAHgJAJAAQAKACAGALQAGALgCAOQgCAQgHAJQgHAKgIAAIgBAAg");
	this.shape_3.setTransform(18,-37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5E2BE").s().p("AAHBFIgPgBQgFgLgEgLQgCgMgCgOIgBgQQABgYAGgUQAIgUAJgIQgGAVgBAeIABAPQACAPACAPQACAPAGALQAGAMAJADIgQAAg");
	this.shape_4.setTransform(13.5,-40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AARhIQgMgLgMABQgOACgLAOQgKANgFAWQgEAWACAYQADAfALAXQAOgEAVAEQAWADAXALQADgJABgOQACgNAAgPQAAgPgBgMQgDgYgJgVQgIgUgNgMg");
	this.shape_5.setTransform(16,-39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABFQgVgEgOAEQgLgXgDgfQgCgYAEgWQAFgWAKgNQALgOAOgCQAMgBAMALQANAMAIAUQAJAVADAYIABAbQAAAPgCANQgBAOgDAJQgXgLgWgDg");
	this.shape_6.setTransform(16,-39.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAARQgGAAgDgGQgDgFAAgGQABgHAEgFQAEgFAEAAQAGABADAGQADAFgBAGQAAAHgEAFQgEAFgEAAIAAgBg");
	this.shape_7.setTransform(2.2,-37.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAtQgOgCgIgOQgIgOABgRQACgTALgMQALgLAMAAQAOACAIAOQAIAOgBARQgCATgLAMQgKALgLAAIgCAAg");
	this.shape_8.setTransform(1.4,-36.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5E2BE").s().p("AgcASQgDgZAHgXQAHgXAPgPQAMgPATgDQgUAMgJAZQgKAYADAeQACAaAIATQAKATARAKIgeAIQgYgZgEgsg");
	this.shape_9.setTransform(-6.2,-38.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("ABKAEQgHgwgXgYQgXgZgeADQgVADgPAPQgQAPgIAYQgHAYACAbQACAXAJASQAIATANANQARgEAagHQAbgGAkgFQAHgOACgQQADgRgCgSg");
	this.shape_10.setTransform(-2,-38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/A7QgJgSgCgXQgCgbAHgYQAIgYAQgPQAPgPAVgDQAegDAXAZQAXAYAHAwQACASgDARQgCAQgHAOQgkAFgbAGIgrALQgNgNgIgTg");
	this.shape_11.setTransform(-2,-38.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE4B3").s().p("AAsAcQgJgBgPgHQgPgGgWgOIgEgDIgJgHIgHgEQgDABgFAEQgEAEgJABIADgHIAIgMQAFgFAEAAIAEACQADABACAFIAKAKQALAKATAJQAUALAcAGIgDACIgFABIgHgBg");
	this.shape_12.setTransform(13.1,-30);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D8A235").s().p("AgDAEQgBgCgCgGIAFABIAHADQADABgFACIgFACIgCgBg");
	this.shape_13.setTransform(8.8,-27.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D8A235").s().p("AA9AWQgLgCgNgFIgYgGQgQgCgSAAIgdAAIgbgBQgQAAgOgEQgOgCgEgFIgCgFIgCgEIAAgBQAHAGAIACQAIADAHAAIAIABQAUACAZAAQAZAAAZgEIAMgDQAGgCAHABQAIACAGAEQAGADAHACQAHADAIgCQAIgDAHgCIAFgGQADgDAEgCQAFAAAFABQAGACAEgCQAEgCABgDQACgDAEgCIABAJQAAAEgCAEQgDADgGABIgLAAIgIgCIgDgBIAAAEQgHAPgJAFQgGADgHAAIgHgBg");
	this.shape_14.setTransform(6.8,-23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("ABygEQAMAEABAAIADAEQACAFACAHQABAHgEAGQgEAFgHAAQgHABgFgBIgGgBQgIARgJAFQgKAGgLgCQgLgBgNgEQgMgEgNgDQgNgCgMAAQgOAAgNAAQgHAAgNAAQgNAAgPgBQgPgBgMgEQgLgDgEgHQgFgJgBgDQAAgCAHgBQAHgBASgDQARgBAQgFQARgDAPgFQALgFAKgHQAJgGAGgKQABgDAEgGQAEgGAFgGQAEgFAGgBQAFgBAEAIQAHAKAOAKQAPAJARAHQAQAIAMAEg");
	this.shape_15.setTransform(6.7,-27.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9C248").s().p("ABAA7QgLgBgNgEQgMgEgNgDQgNgCgMAAIgbAAIgUAAIgcgBQgPgBgMgEQgLgDgEgHIgGgMQAAgCAHgBIAZgEQARgBAQgFQARgDAPgFQALgFAKgHQAJgGAGgKIAFgJQAEgGAFgGQAEgFAGgBQAFgBAEAIQAHAKAOAKQAPAJARAHQAQAIAMAEIANAEIADAEQACAFACAHQABAHgEAGQgEAFgHAAIgMAAIgGgBQgIARgJAFQgIAFgJAAIgEgBg");
	this.shape_16.setTransform(6.7,-27.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9B0D0D").s().p("AgCAMQgOgHgLgIIgRgQIAMAAIAUAAQAIARAPAGQAPAGAUgBQgJAKgPABQgNAAgLgIg");
	this.shape_17.setTransform(4.2,-21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AA7gWIh1AAQABAAAHAHQAHAIALAHQAMAJANAHQALAHAOAAQANAAAIgHQAJgIAEgIQAEgHABgIQACgHAAAAg");
	this.shape_18.setTransform(4.7,-21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C12D05").s().p("AgHAQQgNgHgMgJQgLgHgHgIIgIgHIB1AAIgCAHQgBAIgEAHQgEAJgJAHQgIAGgNABQgOAAgLgHg");
	this.shape_19.setTransform(4.7,-21.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("ABcgZQADgLAAgBIi9ABQABABAMALQAMAMATANQATAPAVAKQAUAMATAAQASgCANgLQAMgMAIgNQAIgOAEgLg");
	this.shape_20.setTransform(3.9,-20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8A235").s().p("AgKAaQgVgLgSgPQgUgNgMgLIgMgMIC8gBIgDAMQgEALgIAOQgIANgMALQgNAMgSABQgTAAgUgLg");
	this.shape_21.setTransform(3.9,-20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AgoALQAAAAAJgBQAJgCAOgDQALgCAOgDQAOgEAKgG");
	this.shape_22.setTransform(8,50.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("ABsAXIgFgKQgJgNgNgLQgNgLgLgDQgUgDgUAHQgRAGgSAKQgRAGgQAGQgRAGgRAAQgRgBgTgLQAEgEAGgDQAHgEAIgBIAIAAQAUACAVgDQAVgCASgKQARgLAOgVQACgBAHgBQAIAAANAHQAMAHARAUQATAXAKAQQAMAVgCAMQgBAFgGAEIgEACQAGgRgIgTg");
	this.shape_23.setTransform(24.6,-10);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AgsgdQAUgDARgKQAOgJANgUQAAgBAFgBQAFgCAJABQAJABANAIQAMAIAQASQAfAmAIAVQAIAYgRAJQgJAGgVAHQgXAHgfACQggACgjgJQgmgKgogbQgSgNgBgNQgCgLAKgKQAKgKAQgCQAFAAAEAAQAWACAUgDg");
	this.shape_24.setTransform(24.5,-9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AggBEQgmgKgogbQgSgNgBgNQgCgLAKgKQAKgKAQgCIAJAAQAWACAUgDQAUgDARgKQAOgJANgUIAFgCQAFgCAJABQAJABANAIQAMAIAQASQAfAmAIAVQAIAYgRAJQgJAGgVAHQgXAHgfACIgMAAQgZAAgegHg");
	this.shape_25.setTransform(24.5,-9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhhBLQALABARgIQASgHAVgNQAUgMARgPQATgPANgOQANgPAEgNQABgGgKgDQgKgDgPgCIgggDIgjgDQgQgCgKgFQgTgHAGACIAqAGQAYACAZgCQAbgCAWgEQAWgDAKgEIAEABQADABACACQACACgBAEIgCAHIgCAEIgOAYQgKAQgQARQgQATgXARQgVARgcALQgZAJgeAAIgIgBg");
	this.shape_26.setTransform(-0.3,-4.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgCBGQgogGglgUQglgTgfgcQAFgIACgIIADgRQACgJAIgIIAIgGIAQgIQAIgEAIgBQAHAAABAFQAEAVAHAWQAGAWANAQQAOARAZAEIABAAQATACAaAAQAbAAAcgEQAdgDAcgFQgjAfgnAKQgYAHgYAAQgPAAgNgDg");
	this.shape_27.setTransform(-11.9,-5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,1,1).p("AiyAZQAwAoAqAQQApARAkgBQAiAAAdgNQAdgMAWgTQAXgTAQgUQAQgSAIgPQAKgPABgFQAEgLgDgFQgDgEgFgBQgFAAgBAAQgGACgOADQgOADgTACQgSACgUABQgVABgSgCQgegEgSgKQgVgKgKgJQgLgIAAgBQAAAAgIgDQgIgCgMgBQgNgBgOAC");
	this.shape_28.setTransform(-8,-6.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AhYBRQgqgQgwgoIBDh4QAOgCANABQAMABAIACIAIADIALAJQAKAJAVAKQASAKAeAEQASACAVgBQAUgBASgCIAhgFIAUgFIAGAAQAFABADAEQADAFgEALQgBAFgKAPQgIAPgQASQgQAUgXATQgWATgdAMQgdANgiAAIgDAAQgjAAgngQg");
	this.shape_29.setTransform(-8,-6.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B4B4B4").s().p("AgFAyQgQgKgQgQQgQgRgNgPIgUgcIgIgMIC9gLIgDAMIgHAdQgGARgIAQQgIARgMAMQgLANgPACIgEABQgNAAgNgKg");
	this.shape_30.setTransform(4.3,-18.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B4B4B4").s().p("AgpHJQgxgTgpgmQghgfgYgnQgXgogNgtQgNgtgBgwIgBgMQAAg/AVg7QAHgUAHggQAGggAFgmIAJhNIAGhKQACgjAAgbIAAgPIAAgIQAAgaAFgZQAFgaAMgWQANgVAVgOQgRAWgHAeQgHAdAAAfIAAAHIAAAPQAAAbgCAjIgGBKIgJBNQgFAmgGAgQgHAggHAWQgVA5AAA/IABAMQABAxANAtQANAtAYAnQAXAnAhAfQAoAmAyAUQAvATA0gBQArgCAogPQAogQAigbQglAmgvAVQguAVg0ACIgHAAQgwAAgsgSg");
	this.shape_31.setTransform(3.1,-5.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E5E5E5").s().p("AAjGWQAngvAWhBQAFgZABgaQAAgSgBgRQgDhBgZg7IgEgLIgchEIgghOQgOgpgOgoQgOgogJgiQgJgjgBgXQgOgogCgVQgEgwgVgqIgNgSIgSgUQAOgEAOAEQAMAEAKAJQAJAIAIAKIAOAUQAMARAJATQAJATAEAUQADAUABAVQABAfADAeQABAeAHAeQAKAmALAmQAMAmANAlIAtB9IABADIADAFIABACQAVA7AAA/QAAARgBASQgDAYgFAZQgbBAgtAsQgrAtg4AUQA1gZAmgvg");
	this.shape_32.setTransform(22.6,-7.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCCCC").s().p("AhRHUQgxgTgpgmQghgfgYgnQgXgogNgtQgNgtgBgwIAAgMQgBhAAVg6QAHgWAHgeQAGggAFgnQAGglAEgoIAGhKQACgjAAgaIgBgPIAAgIQAAgeAHgdQAHgdARgXQAQgXAegKIAVgHIAXgEQARgCATADQATADAPAJQAPAJAIAOQgDgIAGgKQAJgKAPgGQAPgGASAFQAMAFALALQALAKAJANIARAYQASApACAuQAAAVAMAoQAAAWAHAiQAHAiAMAnQAMAnAOApIAbBNIAZBDIAEALQAVA7ABA/IgCAiQgDAYgFAZQgYA5gmAqQgmApgwAYQgxAXg2ACIgHAAQgvAAgugSg");
	this.shape_33.setTransform(7.1,-6.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AB+JKIgNgZIgNgbIgIgPQgNgNgOgCQgOgDgQABQgRABgTgBQhKgIg/giQg+gigtg2Qgtg2gVhDQgWhEAHhLQAHhMAlhAQANgYANglQAOglANgsQAMgsALgsQALgtAHgmQAHgnACgbQAFgqASgkQASgkAegbQAegcAngPQgfAcgSAmQgTAlgEAqIgDAcIgGBFQgDAigHAdIgIAgQgGAYgEAWQgFAWAAAVIABARQgNgHgLADQgIAEgGAIQgFAIgDALIgGAVIgDAJQgHAagJAZQgJAYgHAWQgHAZgDAbQgHBLAVBDQAVBDAqA1QArA2A8AiQA8AhBFAIQBPAIBEgYQBEgYA2g2QgVAkgdAeQgdAdggAcQgSASgMAWIgXAsQgMAWgTAQIAAAAQgCAAgGgKg");
	this.shape_34.setTransform(-3.9,0.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2,1,1).p("AAdpgQgtgEgrANQgrAOgiAcQgiAdgWAnQgVAngFAwQgCAagHAmQgIAmgKAsQgKAsgNAsQgMAsgOAlQgNAlgOAYQglA/gIBPQgGBNAWBEQAWBGAtA3QAuA3BAAiQA/AjBNAIQAVACASAAQATAAASAGQAQAHAOAUQAGAKADANQADAOAFAKQAFALAMgBQANgBAIgKQAIgKAGgQQAGgPAFgPQAFgQAFgMQADgGADgEQAXgbAagWQAagWAYgYQAYgZAQghQAYgkAPgqQAPgqAEguQAFgrgGgpQgGgpgNglQgLgcgPgpQgPgpgQgtQgPgugNgsQgNgsgHgkQgHgkABgWQAFgwgOgqQgOgrgcgiQgcgigogWQgngVgwgFg");
	this.shape_35.setTransform(-0.7,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("ABaJYQgFgKgDgOQgDgNgGgKQgOgUgQgHQgSgGgTAAIgngCQhNgIg/gjQhAgigug3Qgtg3gWhGQgWhEAGhNQAIhPAlg/QAOgYANglQAOglAMgsQANgsAKgsIAShSQAHgmACgaQAFgwAVgnQAWgnAigdQAigcArgOQArgNAtAEQAwAFAnAVQAoAWAcAiQAcAiAOArQAOAqgFAwQgBAWAHAkQAHAkANAsQANAsAPAuIAfBWIAaBFQANAlAGApQAGApgFArQgEAugPAqQgPAqgYAkQgQAhgYAZQgYAYgaAWQgaAWgXAbIgGAKQgFAMgFAQIgLAeQgGAQgIAKQgIAKgNABIgBAAQgLAAgFgKg");
	this.shape_36.setTransform(-0.7,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("AAHgcQAAABgGAFQgEAGgLAHQgKAHgOADQgNAFgPgBQAAAAgCAFQgCAEADAFQADAFAOAEQABAAAOABQAPAAAUgBQAUgCAUgFQATgGALgM");
	this.shape_37.setTransform(-26.7,42.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgjAdIgPgBQgOgEgDgFQgDgFACgEIACgFQAPABANgFQAOgDAKgHQALgHAEgGIAGgGIA/AfQgLAMgTAGQgUAFgUACIgZABIgKAAg");
	this.shape_38.setTransform(-26.7,42.5);

	this.addChild(this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-62.1,77.1,124.2);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5F1FC").s().p("Ag5BqQgdgLgYgSQgYgTgPgZQgOgZgBgbQABgcAQgbQAPgbAZgPQgCAdAJAaQAIAbARAVQASASAZAJQAgAJAhgJQAigIAbgVQAagXANghQADAJAKAHQAJAIAFAKQAKAhgNAaQgNAdgbAUQgcAWggAMQggAMgZAAQgcAAgdgLg");
	this.shape.setTransform(721.4,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5F1FC").s().p("AA1CwQgagJgXgRQgVgQgQgWIgEgEIgGACQglALgigBQgaAAgZgEQgZgFgTgOQgTgOgIgbQgCgIgEgJQgDgJgHgGQgHgGgLADQAMgfgLgoQAKAfASAXQATAaAaAQQAaAQAfADQAWAFAUgHQAUgHAMgPQANgOAAgVQAAgRgSgVQAfAMAegEQAbgFAXgRQAXgRANgZQALgWAEgZQADgZgDgYQAWAbAMAjQAHAXgHAKQgHALgOAHQgPAGgPAJQgSANgJAUQgIAUAFAUQAHAZAQANQARANAbgDQAPgDAGgJQAGgKgCgKQgBgKgGgFQgGgGgHAGIAFACIAFABQAEASgLAGQgKAFgPgDQgOgEgIgIQgNgRADgSQADgTALgPQAXgfAhgDQAggEAgAQQAfARAVAdQAWAbAAAgQAAAdgPAYQgPAZgYATQgZASgdAKQgdALgcAAQgaAAgbgJg");
	this.shape_1.setTransform(761.9,-12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6FAFF").s().p("Ak5DuQgdgLgYgTQgYgTgPgYQgOgZgBgdQAAgUAJgUQAIgUAOgQQAPgQASgJQAPgHATgEQATgGARACQASACANAOQAJALAEAPQADAPgGAOQgDAGgJAHQgJAHgJABQgIABgCgMQgIgCgCAEQgBAEADAFQADAGAFACQAIADAKgDQALgDAHgEQAPgLAFgQQAGgRgFgSQgFgVgOgJQgOgLgUgCQgggCgJgQQgKgQAUgbQANgQAagOQAbgOAegFQAegGAYAKQAXAJAGAfQABAIgEAHQgDAHgBAFQAAAGAKADQAPADAEgHQADgHgEgNQgEgMgGgMIgKgSQgFgIgIgFIgPgJQgHgFAAgIQAAgJAJgKQAJgJALgIIATgNQAigYAngNQAogOAnAAQAqAAAqAQQArAPAlAbQAbAUAUAbQAUAaALAgQAHAWgHALQgHALgOAGQgOAHgQAJQgSAMgIATQgJAUAFAWQAHAZARANQAQANAbgEQAPgCAGgKQAGgJgBgKQgCgKgFgFQgGgGgIAFIAFACIAGACQADASgLAFQgKAGgOgDQgPgEgIgJQgNgQADgUQADgTALgPQAXgdAhgEQAggDAgAQQAgARAVAbQAVAcABAhQgBAdgPAYQgPAZgYASQgYATgdAKQgdALgdAAQgaAAgbgJQgagKgXgQQgXgQgQgWIgEgFIgGACQgkALgjAAQgaABgXgFQgZgFgTgOQgTgOgIgbIgFgRQgEgKgHgFQgHgGgMADQACAGAGAFIALALQAGAFADAIQAKAhgNAcQgNAcgbAVQgcAWggALQggAMgbABQgcgBgdgKg");
	this.shape_2.setTransform(747,-15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#29AAD6").s().p("AlLECQgggNgagVQgbgVgQgbQgQgcgBggQABgbAMgZQANgXAUgUQAWgTAagLQgCgJAAgJQABgiAXgcQAWgbAhgQQAigQAjAAIANABQAYglAmgbQAngbArgPQAtgQAqAAQAuABAtAQQAuAQAoAeQAnAdAZAnQAYAnAEAtQAlAHAhAVQAhAWAVAcQAVAfABAjQgBAggQAcQgRAbgbAUQgbAVgfAMQggALggABQgdAAgdgKQgdgLgZgRQgagTgRgXQgnAMgmAAQgfAAgegIQgggJgegPQgJAlgcAcQgcAdgmAQQgnARgmAAQggABgfgMg");
	this.shape_3.setTransform(747,-15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5F1FC").s().p("AgyBBQgZgMgQgVQgRgUgBgYQABgTAKgSQALgSAQgKQgBAeANAYQANAXAZAJQAVAGAWgGQAWgFASgOQASgPAIgWQADAGAGAFQAGAFADAHQAHAWgIARQgJATgSAOQgTAOgVAIQgVAIgRAAQgZAAgZgNg");
	this.shape_4.setTransform(679,-27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C5F1FC").s().p("AASBuQgXgNgRgWIgCgEIgEACQgZAHgXAAQgRAAgRgDQgQgDgNgKQgNgJgFgSQgCgIgFgJQgFgIgLACQAIgVgHgbQAKAgAXAUQAXAVAfAEQAUAEAQgJQAQgJAFgQQAFgPgQgTQAgAMAZgMQAbgMANgZQAIgPACgRQACgQgCgQQAPASAIAXQAEAPgEAHQgFAHgJAFIgUAKQgMAIgGAOQgGANAEANQAEARALAJQAMAIARgCQAOgDACgJQADgKgEgHQgEgHgHAFIAHACQACAMgHAEQgHADgKgCQgJgCgGgGQgIgLACgMQABgMAIgKQAPgVAWgCQAWgCAVAKQAVALAOAUQAOARABAWQgBAZgRAUQgRAVgZAMQgZAMgaAAQgaAAgagNg");
	this.shape_5.setTransform(706,-34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6FAFF").s().p("AjcCZQgZgMgRgUQgRgWAAgZQAAgUAMgTQAMgTASgJQAKgFANgCQAMgEAMACQAMABAIAIQAGAHADALQACAKgEAJQgCAEgGAFQgGAEgGABQgFABgCgIQgHgCABAGQABAFAGADQAFACAHgCQAHgCAEgCQALgIADgKQAEgMgDgMQgEgNgJgGQgJgHgOgBQgVgCgGgKQgHgLAOgTQAIgKASgKQASgJAUgDQAUgEAPAGQAQAHAEAUQABAFgDAFQgCAFAAADQgBAEAHACQANADAAgJQAAgIgFgMIgJgRQgGgIgIgFQgJgDgBgIQABgHAFgFQAGgHAIgFIAMgIQAXgRAagIQAagKAaABQAcgBAcALQAdAKAYASQAlAbAPArQAFAOgFAIQgEAHgKAFIgUAKQgMAJgFALQgGANAEAPQAEARALAIQALAJASgCQAOgDACgKQADgJgFgHQgEgHgHAEIAHADQADAMgHADQgHAEgKgDQgKgCgFgFQgJgLACgNQACgNAIgLQAPgSAWgCQAVgCAWALQAVAKAOARQAOAUAAAWQAAAZgRAVQgRATgZAMQgZAMgaABQgbgBgZgNQgagNgQgWIgCgDIgEABQgZAIgXAAQgRAAgPgDQgQgEgNgJQgNgJgFgSQgCgJgFgIQgFgJgLADQACAGAGAFQAGAEAEAIQAHAWgJATQgJASgSAOQgSAOgWAJQgVAHgSABQgaAAgYgNg");
	this.shape_6.setTransform(696,-36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#29AAD6").s().p("AjqClQgcgNgSgYQgSgWgBgdQABgbARgWQASgXAbgLIgBgLQAAgXAQgTQAOgRAXgLQAWgLAXAAIAJAAQAQgYAZgSQAZgTAegJQAegLAbABQAfgBAeALQAfALAaAUQAaAUARAZQAQAaACAeQAZAGAWAOQAWAOAOASQAOAUABAYQgBAcgSAXQgTAXgcANQgbAOgdAAQgeAAgbgPQgcgPgSgXQgbAIgZAAQgVAAgTgGQgVgGgUgKQgGAZgTATQgTATgZALQgZALgaABQgcgBgcgOg");
	this.shape_7.setTransform(696,-36.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C5F1FC").s().p("AglAxQgTgJgMgQQgNgPAAgSQAAgOAIgNQAIgOAMgHQgBAWAKASQAKARATAHQAPAEAQgEQARgFANgJQAOgLAGgRQACAFAEADQAFAEACAFQAGARgHAMQgGAOgOALQgOAKgQAGQgQAGgMAAQgSAAgTgJg");
	this.shape_8.setTransform(467.2,-20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C5F1FC").s().p("AANBSQgQgKgNgQIgCgCIgDAAQgSAGgSAAQgTAAgSgGQgRgGgHgUQgBgHgDgGQgEgGgIABQAGgOgGgVQAIAYAQAOQASARAYACQAOADAMgHQANgGADgNQAEgKgMgOQAXAIATgIQAVgJAJgTQALgXgDgZQALAOAGARQADALgDAFQgEAGgHADIgPAIQgJAGgEAKQgFAKADAJQADANAJAGQAIAHAOgCQAKgCABgHQACgHgDgFQgDgGgFAEIAGABQABAJgFADQgGADgHgCQgHgBgEgFQgGgIABgJQACgJAFgHQALgQARgBQAQgCAQAIQAQAIALAPQAKAMABARQgBATgNAPQgNAPgSAJQgUAJgSAAQgUAAgUgKg");
	this.shape_9.setTransform(487.5,-25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6FAFF").s().p("AilBzQgTgKgMgPQgNgQAAgTQAAgPAJgOQAJgOANgHQAMgFAPgCQAOgCAKAJQAFAGABAIQACAHgDAHQgBADgFADQgFAEgEABQgEAAgBgGQgGgBABAEQABAEAEACQAEACAFgCIAJgDQAIgGACgIQADgIgCgJQgGgTgVgBQgQgCgFgHQgFgJALgNQAGgIANgHQAOgHAPgCQAPgEALAGQAMAEADAPQABAEgCAEIgCAGQAAADAFABQAKADAAgHQAAgHgFgIIgGgOQgFgFgGgEQgGgCgBgGQABgIAJgGIAOgKQARgMAUgHQAUgHASAAQAVAAAVAIQAWAHASAOQAcAUALAgQAEAMgEAFQgDAFgHAEQgIACgHAGQgJAGgEAHQgFALADALQADANAJAGQAIAGANgCQAKgBACgIQACgGgDgGQgDgFgFADIAFACQACAJgGACQgFAEgHgDQgHgBgEgEQgHgJACgJQABgKAGgHQALgOARgCQAQgCAQAJQAPAIALAMQALAPAAAQQAAATgNAPQgNAQgTAIQgTAKgTAAQgUgBgTgJQgTgKgMgRIgCgCIgDABQgSAGgSAAQgSAAgRgGQgRgHgHgUQgBgGgEgGQgEgHgIACQABAEAFAEQAFAEACAFQAGARgHANQgGAPgOAKQgOALgQAGQgQAGgNAAQgTAAgTgJg");
	this.shape_10.setTransform(480,-27.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#29AAD6").s().p("AivB8QgUgLgOgRQgOgRgBgVQABgVANgQQANgRAVgIIgCgIQABgRALgPQALgNARgIQARgIARgBIAGABQAUgbAfgRQAggQAggBQAfABAeAOQAeAOAVAYQAUAZACAdQATAFAQAKQARAKALAOQAKAPAAASQAAAVgOARQgOARgUALQgWAJgVABQgVgBgWgKQgUgLgOgTQgTAHgUgBQgeAAgegQQgEATgPAOQgOAOgTAJQgTAJgTgBQgWAAgUgKg");
	this.shape_11.setTransform(480,-27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C5F1FC").s().p("Ag/BSQgfgQgVgaQgUgZgBgeQAAgYANgWQANgXAVgNQgBAZAHAWQAGAWAPARQAPAPAVAHQAaAIAbgIQAdgGAWgSQAWgSAKgcQADAHAIAHQAIAGAEAIQAJAcgLAVQgLAYgXASQgXARgaAKQgbAKgVABQgfgBgggPg");
	this.shape_12.setTransform(299.2,27.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C5F1FC").s().p("AAXCJQgegQgVgbIgCgFIgGACQgeAJgcAAQgWAAgVgEQgVgEgQgMQgPgLgIgWIgEgPQgDgHgGgFQgGgFgJACQALgagKghQAMAnAdAZQAdAbAnAFQAYAFAUgLQAVgMAGgUQAFgTgTgYQAaAKAYgDQAXgEATgOQATgOALgVQAKgTACgVQADgUgDgUQATAXAJAdQAHASgGAJQgGAJgMAFQgMAGgNAIQgOAKgIARQgHARAFAQQAFAVAOALQAOAKAXgDQAMgCAFgIQAEgHgBgJQgBgIgEgEQgGgFgGAFIAJADQADAOgJAFQgJAFgMgDQgMgDgHgIQgKgNACgPQACgPAKgNQAUgaAbgDQAagDAbAOQAaAOASAYQARAVABAcQgBAggVAZQgVAaggAPQgfAPggAAQghAAgggRg");
	this.shape_13.setTransform(333,19.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6FAFF").s().p("AkUC/QgfgPgVgaQgVgagBggQAAgQAIgRQAGgQAMgOQAMgNAPgIQANgGAPgDQAQgEAQABQAOACAKALQAIAJADANQADANgFALQgDAFgHAGQgIAGgGABQgIAAgBgKQgHgBgBADQgCADADAFQADAEAEACQAGADAJgDQAJgCAGgEQANgJAEgOQAEgNgDgPQgEgSgMgHQgMgKgRgBQgagCgJgNQgHgNAQgXQALgNAWgMQAXgLAYgFQAagEATAIQAUAIAFAZQABAGgEAGQgCAGgBAFQAAAEAIADQAMADAEgGQACgGgDgLIgIgUIgIgPQgFgHgGgEIgNgHQgGgEAAgHQAAgIAIgIQAIgIAIgGIAQgLQAcgUAhgLQAhgLAhAAQAiAAAkANQAjAMAfAXQAXARARAWQAQAWAJAaQAGATgFAJQgHAJgLAFQgMAGgNAIQgPAKgHAPQgIAQAFATQAFAVAOALQAOAKAXgDQAMgCAFgIQAFgHgBgJQgCgIgEgFQgFgEgGAEIAJADQADAPgKAFQgIAEgMgCQgMgDgHgIQgLgOADgQQACgQAJgMQAUgYAbgDQAbgDAaAOQAbANARAWQASAYAAAcQgBAfgUAaQgVAZggAPQggAQgfAAQgigBgfgQQgggQgVgcIgDgEIgFACQgeAJgdAAQgWAAgSgEQgVgEgRgMQgPgLgHgWIgFgPQgDgIgGgEQgFgFgKACQACAIAJAGQAHAGAEAJQAKAcgMAXQgKAYgXARQgXASgaAKQgcAKgWAAQggAAgfgQg");
	this.shape_14.setTransform(320.5,16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#29AAD6").s().p("AklDPQgigSgXgcQgWgdgCgjQACgjAVgbQAWgcAhgOQgBgIAAgHQABgdASgXQATgWAcgOQAcgNAdAAQAGgBAFACQAUgfAggXQAfgWAlgNQAlgMAjAAQAmAAAnANQAmAOAhAYQAgAZAVAgQAUAhACAkQAgAHAcASQAbASASAXQARAZABAeQgBAkgYAcQgXAcgiARQgjARgjAAQglAAgjgSQgjgSgWgeQghAJggABQgaAAgYgHQgbgHgZgNQgHAfgYAYQgYAYgfANQggAOggABQgkgBgigRg");
	this.shape_15.setTransform(320.5,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C5F1FC").s().p("AhHCwQgpgNgngWQgngXgdgfQgdgggLglQgLgkAOgqQAEgLAKgKIARgRQAJgHADgKQAPAoAcAeQAdAfAlASQAlASApAGQAnAFAogKQApgPAcgeQAcghANgrQAOgrgDgvQAaAQAVAaQAUAZAMAeQAMAfAAAdQAAAsgYAoQgYApgnAeQgmAeguARQguARguAAQghAAgogMg");
	this.shape_16.setTransform(422.2,-26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C5F1FC").s().p("AkGEZQgugRgogdQgngfgYgnQgYgogBgtQABgqAXgmQAWgmAlgcQAkgcAqgMQArgMAoALQAoALAeAoQALARAGATQAHAUgCASQgCAUgOASQgKAKgQAHQgQAFgQgBQgQgBgJgKQgKgKAFgVIAJgEQAEgCAEAAQgMgJgKAJQgJAIgCARQgCAQAJAOQAJAPAZAEQArAHAbgVQAbgUAKgpQAJghgOghQgOghgcgUQgTgLgSgJQgSgIgOgKQgNgJgFgQQgEgQAJgbQATg4AjgsQgGAnAGAnQAGAoASAkQAUApAmAbQAlAbAtAHQAvAIAzgUQgdAjAAAdQAAAgAUAXQAVAYAfALQAgALAjgHQAygGAqgZQAqgbAegpQAeglAPgwQgJAeABAcQABAcAKAcQgTgFgKAJQgLAJgGAPQgGAPgDANQgNAqgfAXQgfAWgoAIQgoAJgqgBQg3AAg7gSIgKgDIgGAJQgZAigjAaQglAbgrAOQgqAPgqAAQguAAgvgRg");
	this.shape_17.setTransform(357,-41.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6FAFF").s().p("AFSGEQgogNgngXQgngWgdggQgdgfgLglQgLgmAOgqQAEgMAJgJIATgRQAIgIADgKQgSgFgMAJQgKAJgHAPQgFAPgEANQgNArgeAWQgfAXgoAIQgmAIgqgBQg3AAg7gRIgKgDIgGAIQgaAigkAbQgmAagqAPQgrAOgpABQgvgBgugQQgvgRgngeQgngegYgoQgYgngBguQABgqAXgmQAWgnAkgaQAlgdAqgMQArgLAnALQApALAeAmQALAQAGAUQAGATgCAUQgBAVgOARQgKALgQAGQgQAGgQgBQgRgBgJgKQgJgLAFgVIAJgDQAEgCAEgBQgNgIgJAIQgJAJgCAQQgDAQAKAPQAJAPAZAEQAqAGAbgVQAbgUALgpQAJgjgOghQgOgegdgUQgSgMgSgIQgTgIgNgKQgOgKgEgQQgFgPAJgbQASg0AggqQAggqAsghQAngdAsgVQAsgVAugLQAugLAsAAQBBAABAAWQBAAVA2AnIAdAUQATANAOAPQAOAPABAPQgBANgLAIIgXAPQgOAIgIANIgQAdQgJATgGAUQgHAUAFALQAFAMAZgGQANgDABgGQADgGgEgIIgGgQQgDgJAAgJQAIgoAagRQAbgRAkAAQAlAAAmAMQAmAMAfATQAgASAQAVQAWAdAAAVQgBAVgSANQgUAMghACQghACgWATQgXAQgIAhQgHAdAIAbQAJAbAYARQAIAEAKAEQALAEAKACQALABAJgDQAIgEAEgJQAFgJgCgGQgCgGgNADQgCAPgJACQgJADgLgGQgLgFgJgJQgKgJgEgHQgKgWAGgZQAGgYAOgSQAVgXAdgDQAcgDAeAJQAeAHAZAMQAdAOAXAaQAXAaANAgQAOAgAAAgQgBAugXAoQgYAogmAfQgoAegtARQgvARgtAAQgjAAgpgMg");
	this.shape_18.setTransform(381,-47.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#29AAD6").s().p("AFFGQQgsgQgogaQgngbgbgjQgcgjgKgrQguAYgxAMQgvANgwABQg7gBg7gSQgbAkgnAcQgnAbgsAQQgtAPgsABQgxAAgxgTQgygRgpggQgpgggZgqQgagqAAgwQAAgqATglQATglAggcQAggeAogVQAogUArgKQADg3AagxQAZgxAqgpQAqgqA0geQA0gdA5gRQA5gRA4AAQBCABBEAXQBEAXA6AqQA6AqAnA4IATgBQAoAAAoAOQAoAOAhAaQAhAZAUAiQAVAiAAAnQAAAOgDANQApASAgAeQAhAdATAlQATAmAAAqQAAAxgZAqQgZArgoAgQgpAggxASQgwATgxAAQgsABgtgPg");
	this.shape_19.setTransform(381,-47.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C5F1FC").s().p("AhAB2QgkgNgfgYQgfgYgOggQgPgeAMglQADgIAHgFIAMgMQAGgGACgHQAOAmAeAZQAeAXAmAKQAlAJAkgKQAdgJAUgVQATgXAKgeQAJgegCggQASAKAPASQAOASAIAVQAJAVAAAVQgBAegQAcQgRAcgbAWQgbAUggANQggALggABQgdAAgkgOg");
	this.shape_20.setTransform(691.5,73.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C5F1FC").s().p("Ai2DEQghgMgbgUQgcgVgRgcQgRgbAAggQABgmAYgeQAXggAkgTQAkgSAkAEQAlADAaAjQANASACAVQADAUgOATQgHAHgLAEQgLAEgLAAQgMgBgFgHQgHgHADgPIAGgCIAGgCQgJgGgGAGQgHAGgBALQgCAMAGAKQAHAKARADQAfAEASgOQATgOAHgdQAGgXgKgWQgJgXgUgOQgSgLgQgHQgPgHgJgMQgHgMAHgZQAOgnAZgfQgEAbAEAcQAEAbAMAZQAPAdAaATQAaATAfAFQAhAFAjgOQgVAYABAUQAAAWAOARQAPARAVAHQAXAIAYgFQAjgEAegSQAdgSAVgdQAVgaALgkQgMAuANAkQgNgDgHAGQgIAGgEALIgGATQgKAegVAQQgVAPgcAGQgcAGgdgBQgnAAgpgMIgHgCIgFAFQgRAZgYASQgaASgeALQgdAKgdAAQghAAgggMg");
	this.shape_21.setTransform(645.9,62.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6FAFF").s().p("ADeEKQgkgNgfgYQgegYgPggQgPggAMglQADgHAHgHIAMgMQAHgGACgHQgNgCgIAFQgIAHgEAKIgGAUQgKAegVAQQgVAPgcAGQgaAFgdAAQgnAAgpgNIgHgBIgFAFQgRAZgaARQgaATgeAKQgdAKgdABQghAAgggMQghgMgbgVQgcgUgRgcQgRgbAAggQABgmAYggQAXgfAkgSQAkgTAkAFQAlADAaAhQANASACAVQADAVgOAUQgHAHgLAEQgLAEgLgBQgMgBgFgGQgHgIADgPIAGgBIAGgCQgJgGgGAGQgHAFgBAMQgCALAGALQAHAKARADQAfAEASgPQATgOAHgcQAGgZgKgXQgJgUgUgOQgSgLgQgHQgPgIgJgMQgHgMAHgZQANgkAWgdQAXgdAegXQAqgfAwgRQAwgSAvABQAsAAAtAPQAsAPAnAbIAUAOQANAJAKALQAJAKABAKQgBAKgHAFIgRALQgJAFgGAKIgLAUQgHANgDAOQgFAOAEAHQADAJARgEQAMgEgBgFQgBgHgDgIQgEgIAAgIQAFgcATgMQATgMAZAAQAZAAAbAIQAbAJAWANQAWANALAOQAXAfgMASQgLASgjACQgXABgPANQgRALgFAXQgFAVAGASQAGATARAMQAHAFANAEQAMACAJgCQAFgDAEgGQADgHgBgEQgCgEgJABQgDAOgJAAQgJgCgLgHQgKgIgDgIQgIgPAEgRQAFgRAKgNQAOgPAUgDQAUgBAVAGQAWAEARAJQAUAJAQASQAQATAJAXQAKAWAAAWQgBAggQAcQgQAcgbAWQgcAUggANQggALggABQgeAAglgOg");
	this.shape_22.setTransform(662.7,58.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#29AAD6").s().p("ADOEPQgogSgfgeQgegggKgmQgfAQgjAJQggAJgiAAQgpAAgpgNQgUAagaASQgbAUggAKQgfAMgfAAQgiAAgigNQgjgMgcgXQgegWgRgdQgRgdgBgiQAAgnAXghQAXgfAkgWQAjgXAogJQADgwAbgqQAbgpApgfQAqggAygRQAxgSAxAAQAuAAAwAQQAvAQAoAdQApAeAbAmIANAAQAmAAAlASQAkAQAXAeQAYAeABAkQAAAKgBAJQAbAMAXAUQAXAWAOAaQAMAZABAeQgBAigRAeQgRAdgcAXQgdAXgiANQgiANgigBQgqAAgpgSg");
	this.shape_23.setTransform(662.7,58.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C5F1FC").s().p("Ag8BvQgigMgdgXQgdgWgOgeQgOgcALgjQADgIAGgGIAMgLQAGgFACgGQANAjAcAYQAdAWAkAJQAiAJAjgJQAbgKASgTQATgWAJgcQAJgdgCgeQARAKAOARQANARAIAUQAIAUAAATQAAAdgQAaQgQAbgZAUQgaAUgeALQgfALgeAAQgbAAgigNg");
	this.shape_24.setTransform(555.2,75.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C5F1FC").s().p("AisC5QgfgLgagUQgagTgQgaQgQgbAAgeQABgjAWgcQAXgfAhgRQAigSAiAEQAjAEAZAhQALAQADAUQADATgNARQgJAKgPAEQgPADgMgGQgLgGAEgSIAFgDIAGgBQgIgGgGAGQgGAFgCALQgBALAGAKQAGAJAQADQAdAEARgOQASgNAHgbQAGgVgJgWQgKgVgSgNQgRgKgPgHQgPgHgIgMQgHgLAHgYQANgkAYgeQgEAaADAaQAEAaAMAYQAOAbAYASQAZASAdAEQAfAFAigNQgUAXAAATQAAAVAOAQQANAPAVAIQAVAHAXgFQAhgEAcgRQAcgRAUgbQAUgZAKghQgMArANAhQgMgCgHAGQgHAFgEAKIgGATQgJAcgUAPQgUAOgbAGQgaAFgcAAQgkAAgngMIgHgCIgEAFQgRAXgWASQgYARgcAKQgcAJgcABQgfgBgegLg");
	this.shape_25.setTransform(512.1,65.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6FAFF").s().p("ADSD7QgjgMgcgXQgegXgOgdQgNgeALgjQAEgIAFgGIAMgMQAGgFACgGQgNgDgHAGQgHAFgEAKQgEAKgCAJQgJAcgTAPQgVAPgaAFQgZAFgbAAQglAAgngMIgGgCIgFAGQgRAXgXARQgZARgcAKQgcAKgcAAQgfAAgegLQgfgMgagTQgagUgPgaQgQgagBgeQABgjAXgfQAWgcAigSQAhgRAiADQAjAEAZAfQALAQAEAVQADAUgOASQgJAJgPAEQgPADgLgGQgMgGAEgSIAGgCIAFgCQgIgGgGAGQgGAGgBAKQgCALAGAKQAGAJAQADQAdAEASgNQARgOAIgbQAFgXgJgWQgKgTgSgNQgRgKgPgHQgPgHgIgLQgHgMAHgXQAMgjAWgbQAUgcAdgWQAogdAtgQQAtgQAtAAQApAAAqAOQArAPAkAZIATANQAMAJAJAKQAKAKABAKQgBAIgHAFIgQAKQgJAFgFAJQgEAGgGANQgHANgEANQgEANAEAIQADAHAQgDQAKgDAAgGQAAgGgEgIQgDgHAAgIQAGghAZgKQAagKAfAGQAhAFAbAPQAdAPAOARQAVAdgKARQgLARghACQgWABgPANQgPAKgFAWQgFATAGARQAFASAQALQAIAFALADQALADAJgDQAFgDADgFQADgGgBgEQgBgEgJACQgCANgJgBQgJgBgKgIQgJgHgDgHQgIgOAEgQQAFgRAJgMQANgOAUgCQASgCAUAGQAUAEARAIQASAJAQARQAPASAJAVQAJAVAAAVQAAAegQAbQgQAagZAUQgaAUgeAMQgfALgeAAQgdAAgigNg");
	this.shape_26.setTransform(528,61.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#29AAD6").s().p("ADDEBQgmgSgdgdQgdgdgJglQgeAQggAIQgfAJgfAAQgngBgogMQgRAZgaARQgaATgdAKQgeALgdgBQggAAghgMQgggMgbgVQgcgUgQgcQgRgcAAggQAAglAWgeQAVgdAigWQAhgWAmgHQADguAagoQAZgnAngdQAogeAvgQQAugRAvAAQAqAAAtAPQAtAQAnAbQAmAcAaAkIAMgBQAkABAiAQQAiAQAXAdQAWAbABAjIgCASQAbALAVAUQAWATAMAYQANAZAAAcQAAAggQAcQgRAcgaAVQgbAWggAMQghANggAAQgngBgngQg");
	this.shape_27.setTransform(528,61.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C5F1FC").s().p("Ag5BqQgdgLgYgSQgYgTgPgZQgOgZgBgbQABgcAQgbQAPgbAZgPQgCAdAJAaQAIAbARAVQASASAZAJQAgAJAhgJQAigIAbgVQAagXANghQADAJAKAHQAJAIAFAKQAKAhgNAaQgNAdgbAUQgcAWggAMQggAMgZAAQgcAAgdgLg");
	this.shape_28.setTransform(183.9,-2.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C5F1FC").s().p("AA1CwQgagJgXgRQgVgQgQgWIgEgEIgGACQglALgigBQgaAAgZgEQgZgFgTgOQgTgOgIgbQgCgIgEgJQgDgJgHgGQgHgGgLADQAMgfgLgoQAKAfASAXQATAaAaAQQAaAQAfADQAWAFAUgHQAUgHAMgPQANgOAAgVQAAgRgSgVQAfAMAegEQAbgFAXgRQAXgRANgZQALgWAEgZQADgZgDgYQAWAbAMAjQAHAXgHAKQgHALgOAHQgPAGgPAJQgSANgJAUQgIAUAFAUQAHAZAQANQARANAbgDQAPgDAGgJQAGgKgCgKQgBgKgGgFQgGgGgHAGIAFACIAFABQAEASgLAGQgKAFgPgDQgOgEgIgIQgNgRADgSQADgTALgPQAXgfAhgDQAggEAgAQQAfARAVAdQAWAbAAAgQAAAdgPAYQgPAZgYATQgZASgdAKQgdALgcAAQgaAAgbgJg");
	this.shape_29.setTransform(224.4,-12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E6FAFF").s().p("Ak5DuQgdgLgYgTQgYgTgPgYQgOgZgBgdQAAgUAJgUQAIgUAOgQQAPgQASgJQAPgHATgEQATgGARACQASACANAOQAJALAEAPQADAPgGAOQgDAGgJAHQgJAHgJABQgIABgCgMQgIgCgCAEQgBAEADAFQADAGAFACQAIADAKgDQALgDAHgEQAPgLAFgQQAGgRgFgSQgFgVgOgJQgOgLgUgCQgggCgJgQQgKgQAUgbQANgQAagOQAbgOAegFQAegGAYAKQAXAJAGAfQABAIgEAHQgDAHgBAFQAAAGAKADQAPADAEgHQADgHgEgNQgEgMgGgMIgKgSQgFgIgIgFIgPgJQgHgFAAgIQAAgJAJgKQAJgJALgIIATgNQAigYAngNQAogOAnAAQAqAAAqAQQArAPAlAbQAbAUAUAbQAUAaALAgQAHAWgHALQgHALgOAGQgOAHgQAJQgSAMgIATQgJAUAFAWQAHAZARANQAQANAbgEQAPgCAGgKQAGgJgBgKQgCgKgFgFQgGgGgIAFIAFACIAGACQADASgLAFQgKAGgOgDQgPgEgIgJQgNgQADgUQADgTALgPQAXgdAhgEQAggDAgAQQAgARAVAbQAVAcABAhQgBAdgPAYQgPAZgYASQgYATgdAKQgdALgdAAQgaAAgbgJQgagKgXgQQgXgQgQgWIgEgFIgGACQgkALgjAAQgaABgXgFQgZgFgTgOQgTgOgIgbIgFgRQgEgKgHgFQgHgGgMADQACAGAGAFIALALQAGAFADAIQAKAhgNAcQgNAcgbAVQgcAWggALQggAMgbABQgcgBgdgKg");
	this.shape_30.setTransform(209.5,-15.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#29AAD6").s().p("AlLECQgggNgbgVQgagVgQgbQgQgcAAggQAAgbAMgZQAMgXAWgUQAVgTAagLQgBgJgBgJQABgiAXgcQAWgbAigQQAhgQAjAAIANABQAZglAmgbQAmgbAsgPQAsgQAqAAQAtABAvAQQAtAQAnAeQAoAdAYAnQAZAnAEAtQAlAHAhAVQAhAWAVAcQAVAfABAjQgBAggQAcQgRAbgbAUQgbAVgfAMQghALgfABQgdAAgdgKQgdgLgZgRQgZgTgSgXQgnAMgmAAQgfAAgegIQgggJgegPQgJAlgcAcQgcAdgnAQQglARgnAAQggABgfgMg");
	this.shape_31.setTransform(209.5,-15.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C5F1FC").s().p("AgyBBQgZgMgQgVQgRgUgBgYQABgTAKgSQALgSAQgKQgBAeANAYQANAXAZAJQAVAGAWgGQAWgFASgOQASgPAIgWQADAGAGAFQAGAFADAHQAHAWgIARQgJATgSAOQgTAOgVAIQgVAIgRAAQgZAAgZgNg");
	this.shape_32.setTransform(141.5,-27.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C5F1FC").s().p("AASBuQgXgNgRgWIgCgEIgEACQgZAHgXAAQgRAAgRgDQgQgDgNgKQgNgJgFgSQgCgIgFgJQgFgIgLACQAIgVgHgbQAKAgAXAUQAXAVAfAEQAUAEAQgJQAQgJAFgQQAFgPgQgTQAgAMAZgMQAbgMANgZQAIgPACgRQACgQgCgQQAPASAIAXQAEAPgEAHQgFAHgJAFIgUAKQgMAIgGAOQgGANAEANQAEARALAJQAMAIARgCQAOgDACgJQADgKgEgHQgEgHgHAFIAHACQACAMgHAEQgHADgKgCQgJgCgGgGQgIgLACgMQABgMAIgKQAPgVAWgCQAWgCAVAKQAVALAOAUQAOARABAWQgBAZgRAUQgRAVgZAMQgZAMgaAAQgaAAgagNg");
	this.shape_33.setTransform(168.5,-34.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E6FAFF").s().p("AjcCZQgZgMgRgUQgRgWAAgZQAAgUAMgTQAMgTASgJQAKgFANgCQAMgEAMACQAMABAIAIQAGAHADALQACAKgEAJQgCAEgGAFQgGAEgGABQgFABgCgIQgHgCABAGQABAFAGADQAFACAHgCQAHgCAEgCQALgIADgKQAEgMgDgMQgEgNgJgGQgJgHgOgBQgVgCgGgKQgHgLAOgTQAIgKASgKQASgJAUgDQAUgEAPAGQAQAHAEAUQABAFgDAFQgCAFAAADQgBAEAHACQANADAAgJQAAgIgFgMIgJgRQgGgIgIgFQgJgDgBgIQABgHAFgFQAGgHAIgFIAMgIQAXgRAagIQAagKAaABQAcgBAcALQAdAKAYASQAlAbAPArQAFAOgFAIQgEAHgKAFIgUAKQgMAJgFALQgGANAEAPQAEARALAIQALAJASgCQAOgDACgKQADgJgFgHQgEgHgHAEIAHADQADAMgHADQgHAEgKgDQgKgCgFgFQgJgLACgNQACgNAIgLQAPgSAWgCQAVgCAWALQAVAKAOARQAOAUAAAWQAAAZgRAVQgRATgZAMQgZAMgaABQgbgBgZgNQgagNgQgWIgCgDIgEABQgZAIgXAAQgRAAgPgDQgQgEgNgJQgNgJgFgSQgCgJgFgIQgFgJgLADQACAGAGAFQAGAEAEAIQAHAWgJATQgJASgSAOQgSAOgWAJQgVAHgSABQgaAAgYgNg");
	this.shape_34.setTransform(158.5,-36.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#29AAD6").s().p("AjqClQgcgNgRgYQgTgWAAgdQAAgbASgWQARgXAbgLIgBgLQAAgXAPgTQAPgRAWgLQAXgLAXAAIAIAAQARgYAZgSQAagTAdgJQAegLAbABQAegBAfALQAfALAaAUQAaAUARAZQAQAaACAeQAZAGAWAOQAWAOAOASQAOAUAAAYQAAAcgTAXQgSAXgcANQgbAOgdAAQgdAAgcgPQgdgPgSgXQgZAIgaAAQgUAAgUgGQgVgGgUgKQgGAZgTATQgSATgaALQgZALgaABQgdgBgbgOg");
	this.shape_35.setTransform(158.5,-36.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C5F1FC").s().p("AglAxQgTgJgMgQQgNgPAAgSQAAgOAIgNQAIgOAMgHQgBAWAKASQAKARATAHQAPAEAQgEQARgFANgJQAOgLAGgRQACAFAEADQAFAEACAFQAGARgHAMQgGAOgOALQgOAKgQAGQgQAGgMAAQgSAAgTgJg");
	this.shape_36.setTransform(-70.3,-20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C5F1FC").s().p("AANBSQgQgKgNgQIgCgCIgDAAQgSAGgSAAQgTAAgRgGQgSgGgHgUQgBgHgDgGQgEgGgJABQAGgOgFgVQAHAYARAOQASARAYACQAOADAMgHQANgGADgNQADgKgMgOQAYAIATgIQAVgJAJgTQALgXgDgZQAKAOAGARQAEALgEAFQgDAGgHADIgPAIQgJAGgEAKQgFAKADAJQAEANAIAGQAIAHAOgCQAJgCACgHQACgHgCgFQgDgGgGAEIAGABQABAJgFADQgGADgGgCQgIgBgEgFQgGgIABgJQACgJAFgHQALgQARgBQAQgCAQAIQAQAIAKAPQALAMABARQgBATgNAPQgMAPgTAJQgTAJgUAAQgUAAgTgKg");
	this.shape_37.setTransform(-50,-25.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E6FAFF").s().p("AilBzQgTgKgMgPQgNgQAAgTQAAgPAJgOQAJgOANgHQAMgFAPgCQAOgCAKAJQAFAGABAIQACAHgDAHQgBADgFADQgFAEgEABQgEAAgBgGQgGgBABAEQABAEAEACQAEACAFgCIAJgDQAIgGACgIQADgIgCgJQgGgTgVgBQgQgCgFgHQgFgJALgNQAGgIANgHQAOgHAPgCQAPgEALAGQAMAEADAPQABAEgCAEIgCAGQAAADAFABQAKADAAgHQAAgHgFgIIgGgOQgFgFgGgEQgGgCgBgGQABgIAJgGIAOgKQARgMAUgHQAUgHASAAQAVAAAVAIQAWAHASAOQAcAUALAgQAEAMgEAFQgDAFgHAEQgIACgHAGQgJAGgEAHQgFALADALQADANAJAGQAIAGANgCQAKgBACgIQACgGgDgGQgDgFgFADIAFACQACAJgGACQgFAEgHgDQgHgBgEgEQgHgJACgJQABgKAGgHQALgOARgCQAQgCAQAJQAPAIALAMQALAPAAAQQAAATgNAPQgNAQgTAIQgTAKgTAAQgUgBgTgJQgTgKgMgRIgCgCIgDABQgSAGgSAAQgSAAgRgGQgRgHgHgUQgBgGgEgGQgEgHgIACQABAEAFAEQAFAEACAFQAGARgHANQgGAPgOAKQgOALgQAGQgQAGgNAAQgTAAgTgJg");
	this.shape_38.setTransform(-57.5,-27.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#29AAD6").s().p("AivB8QgVgLgNgRQgOgRgBgVQABgVANgQQAOgRATgIIgBgIQABgRALgPQALgNARgIQARgIARgBIAGABQAUgbAggRQAggQAfgBQAfABAeAOQAeAOAUAYQAVAZACAdQATAFARAKQARAKAKAOQAKAPAAASQAAAVgOARQgOARgUALQgVAJgWABQgWgBgVgKQgUgLgOgTQgTAHgUgBQgdAAgfgQQgFATgOAOQgOAOgTAJQgTAJgTgBQgVAAgVgKg");
	this.shape_39.setTransform(-57.5,-27.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C5F1FC").s().p("Ag/BSQgfgQgVgaQgUgZgBgeQAAgYANgWQANgXAVgNQgBAZAHAWQAGAWAPARQAPAPAVAHQAaAIAbgIQAdgGAWgSQAWgSAKgcQADAHAIAHQAIAGAEAIQAJAcgLAVQgLAYgXASQgXARgaAKQgbAKgVABQgfgBgggPg");
	this.shape_40.setTransform(-238.3,27.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C5F1FC").s().p("AAXCJQgegQgVgbIgCgFIgGACQgeAJgcAAQgWAAgVgEQgVgEgQgMQgPgLgIgWIgEgPQgDgHgGgFQgGgFgJACQAKgagJghQAMAnAdAZQAcAbAoAFQAYAFAUgLQAVgMAGgUQAGgTgUgYQAaAKAYgDQAXgEATgOQATgOALgVQAKgTADgVQACgUgCgUQASAXAKAdQAFASgFAJQgGAJgMAFQgMAGgNAIQgPAKgGARQgIARAEAQQAGAVAOALQAOAKAXgDQAMgCAFgIQAEgHgBgJQgBgIgFgEQgFgFgGAFIAJADQADAOgJAFQgJAFgMgDQgLgDgIgIQgKgNACgPQACgPAKgNQATgaAcgDQAbgDAaAOQAaAOASAYQARAVABAcQgBAggVAZQgVAaggAPQgfAPggAAQghAAgggRg");
	this.shape_41.setTransform(-204.5,19.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E6FAFF").s().p("AkUC/QgfgPgVgaQgVgaAAggQgBgQAIgRQAGgQANgOQAMgNAOgIQANgGAQgDQAPgEAPABQAPACAKALQAIAJADANQADANgFALQgDAFgHAGQgHAGgIABQgHAAgCgKQgGgBgBADQgBADACAFQACAEAEACQAHADAJgDQAJgCAGgEQANgJAEgOQAEgNgDgPQgFgSgLgHQgMgKgRgBQgagCgIgNQgJgNASgXQAKgNAWgMQAXgLAZgFQAZgEATAIQAUAIAFAZQAAAGgDAGQgDAGAAAFQAAAEAIADQAMADADgGQADgGgDgLIgJgUIgHgPQgFgHgHgEIgMgHQgFgEgBgHQAAgIAIgIQAHgIAJgGIAQgLQAcgUAhgLQAhgLAhAAQAjAAAjANQAjAMAfAXQAXARARAWQAQAWAJAaQAGATgGAJQgGAJgMAFQgLAGgNAIQgPAKgHAPQgIAQAFATQAGAVANALQAOAKAXgDQAMgCAFgIQAFgHgBgJQgBgIgFgFQgFgEgGAEIAJADQADAPgJAFQgJAEgMgCQgMgDgHgIQgLgOADgQQACgQAKgMQATgYAbgDQAbgDAaAOQAbANASAWQARAYABAcQgBAfgWAaQgVAZgfAPQgfAQggAAQghgBghgQQgfgQgVgcIgDgEIgFACQgeAJgdAAQgVAAgUgEQgVgEgQgMQgPgLgHgWIgFgPQgDgIgGgEQgFgFgKACQACAIAJAGQAHAGAEAJQAKAcgLAXQgLAYgXARQgXASgaAKQgcAKgWAAQggAAgfgQg");
	this.shape_42.setTransform(-217,16.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#29AAD6").s().p("AklDPQgigSgXgcQgWgdgCgjQACgjAVgbQAWgcAigOQgCgIAAgHQABgdATgXQASgWAcgOQAcgNAdAAQAFgBAGACQAVgfAfgXQAfgWAlgNQAmgMAiAAQAmAAAnANQAmAOAhAYQAgAZAUAgQAVAhACAkQAfAHAdASQAbASASAXQARAZABAeQgCAkgWAcQgXAcgjARQgjARgjAAQglAAgjgSQgjgSgXgeQggAJggABQgaAAgZgHQgagHgZgNQgIAfgXAYQgYAYgfANQggAOggABQgkgBgigRg");
	this.shape_43.setTransform(-217,16.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C5F1FC").s().p("AhHCwQgpgNgngWQgngXgdgfQgdgggLglQgLgkAOgqQAEgLAKgKIARgRQAJgHADgKQAPAoAcAeQAdAfAlASQAlASApAGQAnAFAogKQApgPAcgeQAcghANgrQAOgrgDgvQAaAQAVAaQAUAZAMAeQAMAfAAAdQAAAsgYAoQgYApgnAeQgmAeguARQguARguAAQghAAgogMg");
	this.shape_44.setTransform(-115.3,-26);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C5F1FC").s().p("AkGEZQgugRgogdQgngfgYgnQgYgogBgtQABgqAXgmQAWgmAlgcQAkgcAqgMQArgMAoALQAoALAeAoQALARAGATQAHAUgCASQgCAUgOASQgKAKgQAHQgQAFgQgBQgQgBgJgKQgKgKAFgVIAJgEQAEgCAEAAQgMgJgKAJQgJAIgCARQgCAQAJAOQAJAPAZAEQArAHAbgVQAbgUAKgpQAJghgOghQgOghgcgUQgTgLgSgJQgSgIgOgKQgNgJgFgQQgEgQAJgbQATg4AjgsQgGAnAGAnQAGAoASAkQAUApAmAbQAlAbAtAHQAvAIAzgUQgdAjAAAdQAAAgAUAXQAVAYAfALQAgALAjgHQAygGAqgZQAqgbAegpQAeglAPgwQgJAeABAcQABAcAKAcQgTgFgKAJQgLAJgGAPQgGAPgDANQgNAqgfAXQgfAWgoAIQgoAJgqgBQg3AAg7gSIgKgDIgGAJQgZAigjAaQglAbgrAOQgqAPgqAAQguAAgvgRg");
	this.shape_45.setTransform(-180.5,-41.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E6FAFF").s().p("AFTGEQgpgNgngXQgngWgdggQgcgfgMglQgLgmAOgqQAEgMAKgJIASgRQAJgIACgKQgSgFgLAJQgMAJgFAPQgGAPgDANQgNArgfAWQgfAXgoAIQgmAIgqgBQg4AAg7gRIgJgDIgGAIQgaAigkAbQgmAagqAPQgqAOgrABQgugBgugQQgvgRgngeQgogegXgoQgZgnAAguQABgqAWgmQAXgnAkgaQAlgdAqgMQAqgLApALQAnALAfAmQALAQAGAUQAHATgDAUQgCAVgOARQgJALgQAGQgQAGgQgBQgQgBgKgKQgJgLAFgVIAJgDQAEgCAEgBQgNgIgJAIQgJAJgCAQQgDAQAKAPQAJAPAYAEQAsAGAagVQAbgUALgpQAIgjgNghQgOgegdgUQgSgMgSgIQgSgIgOgKQgOgKgEgQQgEgPAJgbQARg0AggqQAggqAsghQAngdAsgVQAsgVAugLQAugLAsAAQBBAABAAWQA/AVA3AnIAdAUQASANAPAPQAOAPABAPQgBANgLAIIgYAPQgNAIgIANIgQAdQgKATgGAUQgGAUAFALQAFAMAZgGQANgDABgGQADgGgEgIIgGgQQgDgJAAgJQAIgoAbgRQAagRAlAAQAkAAAmAMQAmAMAgATQAfASAQAVQAWAdAAAVQAAAVgUANQgSAMgiACQghACgXATQgWAQgIAhQgGAdAHAbQAJAbAZARQAHAEAKAEQAKAEALACQAMABAHgDQAIgEAGgJQAEgJgCgGQgDgGgMADQgCAPgJACQgJADgLgGQgLgFgJgJQgKgJgEgHQgKgWAGgZQAGgYAOgSQAUgXAdgDQAdgDAeAJQAeAHAZAMQAeAOAWAaQAXAaAOAgQANAgAAAgQAAAugYAoQgYAogmAfQgnAegvARQgtARguAAQgjAAgogMg");
	this.shape_46.setTransform(-156.5,-47.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#29AAD6").s().p("AFFGQQgsgQgogaQgngbgbgjQgcgjgKgrQguAYgxAMQgvANgwABQg7gBg7gSQgbAkgnAcQgnAbgsAQQgtAPgsABQgxAAgxgTQgygRgpggQgpgggZgqQgagqAAgwQAAgqATglQATglAggcQAggeAogVQAogUArgKQADg3AagxQAZgxAqgpQAqgqA0geQA0gdA5gRQA5gRA4AAQBCABBEAXQBEAXA6AqQA6AqAnA4IATgBQAoAAAoAOQAoAOAhAaQAhAZAUAiQAVAiAAAnQAAAOgDANQApASAgAeQAhAdATAlQATAmAAAqQAAAxgZAqQgZArgoAgQgpAggxASQgwATgxAAQgsABgtgPg");
	this.shape_47.setTransform(-156.5,-47.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C5F1FC").s().p("AhAB2QgkgNgfgYQgfgYgOggQgPgeAMglQADgIAHgFIAMgMQAGgGACgHQAOAmAeAZQAeAXAmAKQAlAJAkgKQAdgJAUgVQATgXAKgeQAJgegCggQASAKAPASQAOASAIAVQAJAVAAAVQgBAegQAcQgRAcgbAWQgbAUggANQggALggABQgdAAgkgOg");
	this.shape_48.setTransform(154,73.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C5F1FC").s().p("Ai3DEQgggMgbgUQgcgVgRgcQgRgbAAggQABgmAYgeQAXggAkgTQAjgSAlAEQAkADAbAjQANASADAVQACAUgNATQgHAHgLAEQgMAEgLAAQgLgBgHgHQgGgHADgPIAGgCIAGgCQgJgGgGAGQgHAGgBALQgBAMAFAKQAHAKARADQAfAEASgOQATgOAHgdQAGgXgJgWQgKgXgUgOQgRgLgQgHQgQgHgJgMQgHgMAHgZQAOgnAZgfQgEAbAEAcQAEAbAMAZQAPAdAaATQAaATAfAFQAhAFAjgOQgUAYAAAUQAAAWAOARQAPARAVAHQAXAIAYgFQAjgEAegSQAdgSAVgdQAVgaALgkQgNAuAOAkQgNgDgHAGQgIAGgEALIgGATQgKAegVAQQgVAPgcAGQgdAGgdgBQgnAAgpgMIgGgCIgFAFQgRAZgYASQgaASgeALQgdAKgdAAQghAAghgMg");
	this.shape_49.setTransform(108.4,62.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E6FAFF").s().p("ADeEKQgkgNgegYQgfgYgPggQgPggAMglQAEgHAGgHIAMgMQAHgGACgHQgNgCgIAFQgIAHgEAKIgGAUQgKAegVAQQgVAPgcAGQgbAFgdAAQgnAAgpgNIgGgBIgFAFQgRAZgaARQgaATgeAKQgdAKgdABQghAAghgMQgggMgbgVQgcgUgRgcQgRgbAAggQABgmAYggQAXgfAkgSQAjgTAlAFQAkADAbAhQANASACAVQADAVgNAUQgHAHgLAEQgMAEgLgBQgLgBgHgGQgGgIADgPIAGgBIAGgCQgJgGgGAGQgHAFgBAMQgBALAFALQAHAKARADQAfAEASgPQATgOAHgcQAGgZgJgXQgKgUgUgOQgRgLgQgHQgQgIgJgMQgHgMAHgZQANgkAXgdQAWgdAfgXQApgfAwgRQAwgSAuABQAtAAAsAPQAuAPAmAbIAUAOQANAJAJALQAKAKABAKQAAAKgIAFIgQALQgJAFgHAKIgKAUQgIANgDAOQgFAOAEAHQADAJARgEQAMgEgBgFQAAgHgEgIQgFgIABgIQAFgcATgMQASgMAaAAQAZAAAbAIQAbAJAWANQAWANALAOQAXAfgLASQgMASgjACQgXABgPANQgRALgFAXQgFAVAGASQAGATARAMQAIAFAMAEQAMACAIgCQAHgDACgGQAEgHgBgEQgCgEgJABQgDAOgJAAQgJgCgKgHQgKgIgFgIQgGgPAEgRQAEgRAKgNQAOgPAUgDQAUgBAWAGQAUAEASAJQAUAJAQASQAQATAJAXQAKAWAAAWQAAAggRAcQgQAcgcAWQgbAUggANQggALggABQgfAAgkgOg");
	this.shape_50.setTransform(125.2,58.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#29AAD6").s().p("ADOEPQgpgSgegeQgegggJgmQghAQgiAJQggAJghAAQgpAAgqgNQgUAagaASQgcAUgfAKQgfAMgfAAQgiAAgigNQgjgMgcgXQgegWgRgdQgRgdgBgiQABgnAWghQAXgfAjgWQAkgXApgJQADgwAagqQAbgpAqgfQAqggAxgRQAxgSAyAAQAtAAAvAQQAwAQAoAdQApAeAbAmIANAAQAmAAAkASQAkAQAYAeQAYAeABAkQAAAKgBAJQAbAMAXAUQAXAWANAaQANAZABAeQAAAigSAeQgRAdgcAXQgdAXgiANQgiANgigBQgpAAgqgSg");
	this.shape_51.setTransform(125.2,58.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C5F1FC").s().p("Ag8BvQgigMgdgXQgdgWgOgeQgOgcALgjQADgIAGgGIAMgLQAGgFACgGQANAjAcAYQAdAWAkAJQAiAJAjgJQAbgKASgTQATgWAJgcQAJgdgCgeQARAKAOARQANARAIAUQAIAUAAATQAAAdgQAaQgQAbgZAUQgaAUgeALQgfALgeAAQgbAAgigNg");
	this.shape_52.setTransform(17.7,75.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C5F1FC").s().p("AisC5QgfgLgagUQgagTgQgaQgQgbAAgeQABgjAWgcQAXgfAhgRQAigSAiAEQAjAEAZAhQALAQADAUQADATgNARQgJAKgPAEQgPADgMgGQgLgGAEgSIAFgDIAGgBQgIgGgGAGQgGAFgCALQgBALAGAKQAGAJAQADQAdAEARgOQASgNAHgbQAGgVgJgWQgKgVgSgNQgRgKgPgHQgPgHgIgMQgHgLAHgYQANgkAYgeQgEAaADAaQAEAaAMAYQAOAbAYASQAZASAdAEQAfAFAigNQgUAXAAATQAAAVAOAQQANAPAVAIQAVAHAXgFQAhgEAcgRQAcgRAUgbQAUgZAKghQgMArANAhQgMgCgHAGQgHAFgEAKIgGATQgJAcgUAPQgUAOgbAGQgaAFgcAAQgkAAgngMIgHgCIgEAFQgRAXgWASQgYARgcAKQgcAJgcABQgfgBgegLg");
	this.shape_53.setTransform(-25.4,65.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E6FAFF").s().p("ADSD7QgigMgdgXQgdgXgPgdQgOgeAMgjQADgIAHgGIALgMQAGgFACgGQgMgDgHAGQgIAFgEAKQgEAKgCAJQgIAcgUAPQgVAPgbAFQgYAFgcAAQgkAAgngMIgHgCIgDAGQgRAXgZARQgYARgcAKQgcAKgcAAQgeAAgfgLQgfgMgagTQgagUgPgaQgRgaAAgeQABgjAWgfQAXgcAigSQAhgRAiADQAjAEAZAfQALAQADAVQAEAUgOASQgJAJgPAEQgPADgLgGQgLgGADgSIAFgCIAGgCQgIgGgGAGQgGAGgBAKQgCALAGAKQAGAJAQADQAdAEASgNQASgOAGgbQAGgXgJgWQgJgTgTgNQgRgKgPgHQgPgHgHgLQgIgMAIgXQAMgjAVgbQAUgcAdgWQAogdAtgQQAtgQAsAAQArAAApAOQArAPAkAZIATANQAMAJAJAKQAKAKAAAKQAAAIgHAFIgPAKQgKAFgFAJQgEAGgGANQgGANgFANQgEANAEAIQADAHAQgDQAKgDAAgGQAAgGgEgIQgDgHAAgIQAGghAagKQAZgKAfAGQAgAFAdAPQAcAPANARQAWAdgKARQgLARghACQgWABgPANQgPAKgGAWQgEATAGARQAFASARALQAHAFALADQALADAJgDQAFgDADgFQADgGgBgEQgCgEgIACQgCANgJgBQgJgBgJgIQgKgHgDgHQgIgOAEgQQAFgRAJgMQAOgOASgCQATgCAUAGQAUAEARAIQASAJAQARQAPASAJAVQAIAVABAVQAAAegRAbQgPAagZAUQgaAUgeAMQgfALgeAAQgdAAgigNg");
	this.shape_54.setTransform(-9.5,61.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#29AAD6").s().p("ADDEBQgmgSgdgdQgdgdgJglQgeAQggAIQgfAJgfAAQgngBgogMQgRAZgaARQgaATgdAKQgeALgdgBQggAAghgMQgggMgbgVQgcgUgQgcQgRgcAAggQAAglAWgeQAVgdAigWQAhgWAmgHQADguAagoQAZgnAngdQAogeAvgQQAugRAvAAQAqAAAtAPQAtAQAnAbQAmAcAaAkIAMgBQAkABAiAQQAiAQAXAdQAWAbABAjIgCASQAbALAVAUQAWATAMAYQANAZAAAcQAAAggQAcQgRAcgaAVQgbAWggAMQghANggAAQgngBgngQg");
	this.shape_55.setTransform(-9.5,61.3);

	this.addChild(this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-254.5,-88.6,1046.5,177.4);


(lib.tergetFood = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgigpQAPgSATAAQAUAAAPASQAPARAAAYQAAAZgPARQgPASgUAAQgTAAgPgSQgPgRAAgZQAAgYAPgRg");
	this.shape.setTransform(5,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AgiAqQgPgRAAgZQAAgYAPgRQAPgSATAAQAUAAAPASQAOARAAAYQAAAZgOARQgPARgUABQgTgBgPgRg");
	this.shape_1.setTransform(5,6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,12,14);


(lib.pondBoundary = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAeuIIAAcRIg7AAIAA8Rg");
	this.shape.setTransform(3,90.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#497028").s().p("AgdOJIAA8QIA7AAIAAcQg");
	this.shape_1.setTransform(3,90.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,8,183);


(lib.playAgain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play Again?", "14px 'Arial'", "#000066");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 134;
	this.text.setTransform(67,0);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,102,0)").s().p("Al2BoIAAjQILsAAIAADQg");
	this.shape.setTransform(37.5,10.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,138,24);


(lib.playgame = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play the game!", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 193;

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,51,0,0)").s().p("ArACUIAAknIWBAAIAAEng");
	this.shape.setTransform(70.5,15.3);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,197.1,30.2);


(lib.tears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgQAIQAAgBAEgFQADgEAGgGQAEgFAFgBQAGgBADAIQAGAPgKAFQgJAGgSgLg");
	this.shape.setTransform(21.2,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAIIAEgGQADgEAGgGQAEgFAFgBQAGgBADAIQAGAPgKAFQgDACgFAAQgGAAgNgHg");
	this.shape_1.setTransform(21.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AASAAIgGgDQgFgEgHgEQgFgDgFAAQgGABgBAJQAAAQAKACQAJADAQgRg");
	this.shape_2.setTransform(-21.1,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAOQgKgCAAgQQABgJAGgBQAFAAAFADIAMAIIAGADQgOAPgIAAIgDgBg");
	this.shape_3.setTransform(-21.1,-5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgSgDQABAAAGgDQAHgDAGgDQAJgCAFABQAFACgDAIQgFAKgEAEQgEAFgFgDQgGgEgMgMg");
	this.shape_4.setTransform(18.2,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAANQgGgEgMgMIAHgDIANgGQAJgCAFABQAFACgDAIQgFAKgEAEQgDADgDAAIgDgBg");
	this.shape_5.setTransform(18.2,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAhAMQAAABgCACQgDADgBgBQADACABAFQAAAEgCADQgBAEgEABQgHAAgBgFQgBgFACgGQABgGACgDQgDgBgDAAQgDAAgCgDQgCgCgBgCQgBgCgDgBQgCAAgBAAQgDAAgDgBQgCgCgCgDQgBgDgCgCQgEgCgEgBQgEgCgDgCQgDgDgBgEQgCgDACgDQABgDAEgBQAFAAAEADQACABACACQACACACABQADAAACAAQABgBADAAQADgBAEADQAFADACAFQACAFAFACQAFADAEACQAFADABAFQABAEgCAFg");
	this.shape_6.setTransform(6.9,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAfQgBgFACgGIADgJIgGgBQgDAAgCgDIgDgEIgEgDIgDAAIgGgBQgCgCgCgDQgBgDgCgCIgIgDIgHgEQgDgDgBgEQgCgDACgDQABgDAEgBQAFAAAEADIAEADIAEADIAFAAIAEgBQADgBAEADQAFADACAFQACAFAFACIAJAFQAFADABAFQABAEgCAFIgCADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQADACABAFQAAAEgCADQgBAEgEABQgHAAgBgFg");
	this.shape_7.setTransform(6.9,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ABFgFQgFgCgOgBQAAgBgFgCQgFgDgHgCQgIgDgIAAQgMAAgFABIgHABIgDgDQgEgDgGgCQgGgCgIABQgIACgFAEQgFAEAAAFQAAAFAIAFIgGABQgGABgHADQgHAEgDAFQgDAFAGAFQAAAAABACQACACADAAQACABAEgDQADgEAGgGQAHgGAHgFQAHgEAIAAQAJAAALABQAMACAMACQAMACAHAAQAIAAAHABQAHABAFgBQAEAAABgDQAAgCAAgDQgBgCgFgDg");
	this.shape_8.setTransform(-11.9,-2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhAAbQgBAAgBAAQAAAAgBAAQgBgBAAAAQAAAAgBgBIgBgCQgGgFADgFQADgFAHgEIANgEIAGgBQgIgFAAgFQAAgFAFgEQAFgEAIgCQAIgBAGACIAKAFIADADIAHgBIARgBQAIAAAIADQAHACAFADIAFADQAOABAFACQAFADABACIAAAFQgBADgEAAIgMAAIgPgBIgTgCIgYgEQgLgBgJAAQgIAAgHAEIgOALIgJAKQgDACgDAAIAAAAg");
	this.shape_9.setTransform(-11.9,-2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAnAOQAAACgDADQgDADgBgBQADACABAGQABAFgCAEQgCAFgFABQgHAAgCgGQgBgGACgHQACgIABgEQgDAAgEgBQgCAAgDgDQgCgDgBgCQgCgDgDgBQgDAAgCAAQgDgBgDgBQgDgCgBgEQgBgDgDgDQgFgCgFgCQgEgCgDgDQgEgDgCgFQgBgEABgEQACgEAEAAQAHAAAEADQADACACACQACACADACQACAAADgBQACgBACAAQAFgBAFAEQAFADACAGQADAHAGADQAFACAGAEQAFADACAGQAAAGgCAFg");
	this.shape_10.setTransform(7.5,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAmQgBgGACgHIADgMIgHgBQgCAAgDgDIgDgFQgCgDgDgBIgFAAIgGgCQgDgCgBgEQgBgDgDgDIgKgEIgHgFQgEgDgCgFQgBgEABgEQACgEAEAAQAHAAAEADIAFAEIAFAEIAFgBIAEgBQAFgBAFAEQAFADACAGQADAHAGADIALAGQAFADACAGQAAAGgCAFIgDAFQgBABAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQADACABAGQABAFgCAEQgCAFgFABQgHAAgCgGg");
	this.shape_11.setTransform(7.5,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("ABHgFQgGgEgOAAQAAgBgFgDQgFgDgIgDQgHgDgJAAQgMAAgFABIgIACQAAgBgDgDQgDgEgHgCQgFgCgJACQgIACgFAEQgGAFABAFQAAAGAIAGQgBAAgGABQgGABgHAEQgHAFgDAFQgDAFAGAGQAAABACACQABACADAAQADABADgEQAEgEAGgHQAHgHAHgGQAIgEAIAAQAIAAAMABQAMACAMADQANACAHAAQAIAAAHABQAHABAFAAQAFgBAAgDQABgDgBgDQAAgCgFgDg");
	this.shape_12.setTransform(-12.1,-2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhCAfQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgCgCQgGgGADgGQADgFAHgEIANgFIAHgCQgIgFAAgGQgBgFAGgFQAFgFAIgCQAJgBAFACQAHADADADIADADIAIgBIARgBQAJAAAHAEIANAFIAFAEQAOABAGACQAFADAAADIAAAGQAAADgFABIgMgBIgPgBQgHAAgNgDIgYgEQgMgBgIAAQgIAAgIAEIgOANIgKALQgDADgCAAIgBAAg");
	this.shape_13.setTransform(-12.1,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:18.2,y:4.2}},{t:this.shape_4,p:{x:18.2,y:4.2}},{t:this.shape_3,p:{x:-21.1,y:-5.3}},{t:this.shape_2,p:{x:-21.1,y:-5.3}},{t:this.shape_1,p:{x:21.2,y:-0.5}},{t:this.shape,p:{x:21.2,y:-0.5}}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_5,p:{x:22.3,y:9.2}},{t:this.shape_4,p:{x:22.3,y:9.2}},{t:this.shape_3,p:{x:-25.9,y:-10.7}},{t:this.shape_2,p:{x:-25.9,y:-10.7}},{t:this.shape_1,p:{x:23.6,y:-2.2}},{t:this.shape,p:{x:23.6,y:-2.2}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-7.8,48,15.6);


(lib.penguing = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE4B3").s().p("Ag6AJQAAgHABgFQABgIADgBIAFgBQAEgBAEAEIAOADQANADAVgBQAYAAAbgKIgEAFQgFAFgRADQgSACgjAAIgGAAIgKgBQgGAAgCAAQgDABgCAFQgBAGgHAFg");
	this.shape.setTransform(-8.1,-33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8A235").s().p("AAAAEIgHgFIAGgCIAGAAQAEAAgDADQgEAEgCAAIAAAAg");
	this.shape_1.setTransform(-11.1,-30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8A235").s().p("AhnBIIgFgDIgDgDQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAJACAIgCIAOgFIAIgEQASgIAVgNQAWgNASgSIAJgGQAFgFAGgDQAIgDAHABQAIABAHgBQAIgCAFgGQAGgGADgHIACgIQABgEADgDQADgEAGgBQAFgBADgEQADgEgBgEQgBgDADgDIAGAGQACAEAAAEQgBAEgFAEIgJAGIgIADIgDABIADAEQACARgGAJQgGAIgKACQgKAEgNADQgMACgMAFQgRAHgNAJIgZAPIgXAOQgOAHgOAFQgHACgGAAQgEAAgDgBg");
	this.shape_2.setTransform(-11.5,-27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABmhLQAFADAFAFQAFAFgBAHQgBAGgFAEQgGAEgFACQgFADAAAAQABASgFAKQgGAIgKAEQgKAEgMADQgNADgNAFQgMAFgMAHQgJAHgMAHQgGADgLAHQgMAGgNAHQgNAHgMADQgMADgHgEQgIgFgCgCQgCgCAGgEQAGgEANgMQAOgKAMgMQAMgMAKgOQAHgIAEgKQAFgLABgMQAAgDAAgIQAAgHACgHQABgHAEgDQAEgEAIAEQAIAGASAAQASABASgCQASgDAMgCQAMgCABAAg");
	this.shape_3.setTransform(-11.5,-27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C248").s().p("AhpBNIgKgHQgCgCAGgEIATgQQAOgKAMgMQAMgMAKgOQAHgIAEgKQAFgLABgMIAAgLIACgOQABgHAEgDQAEgEAIAEQAIAGASAAQASABASgCIAegFIANgCIAFADQAFADAFAFQAFAFgBAHQgBAGgFAEIgLAGIgFADQABASgFAKQgGAIgKAEQgKAEgMADIgaAIQgMAFgMAHIgVAOIgRAKIgZANQgNAHgMADIgJABQgGAAgEgCg");
	this.shape_4.setTransform(-11.5,-27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B0D0D").s().p("AgaANIgbgFIAMgHIAUgKQASAJASAAQAVgCASgMQgDANgOAHQgNAHgSABIgGABQgNAAgNgCg");
	this.shape_5.setTransform(-8.9,-22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AA2gkIhzBAQABABALACQALADARACQARACAPgBQASgCANgHQAMgIAEgLQAEgJgBgKQgBgLgDgHQgDgHAAgBg");
	this.shape_6.setTransform(-9.1,-24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C12D05").s().p("AgVAkQgRgCgLgDIgMgDIBzhAIADAIQADAHABALQABAKgEAJQgEALgMAIQgNAHgSACIgLAAIgVgBg");
	this.shape_7.setTransform(-9.1,-24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ABcARQAGgRgBgQQgBgSgDgLQgEgMAAgBIi5BoQAAAAANACQAMADAUADQAUADAXABQAUACAVgDQAVgCAPgJQASgLAFgSg");
	this.shape_8.setTransform(-10.3,-24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8A235").s().p("AgIA6QgXgBgUgDIgggGIgNgCIC5hoIAEAMQADANABARQABAQgGARQgFARgSAMQgPAJgVACQgOACgOAAIgNgBg");
	this.shape_9.setTransform(-10.3,-24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AAGBhQAQgPAPgVQAQgWAMgXQANgVAHgVQAHgVgDgOQgBgIgOAEQgOAEgVAIIgqAQQgXAIgUADQgSABgMgCQgMgCgKgEIgVgJQAHADAOACQAPADAVgBQAVgCAagHQAWgIAZgOQAZgNATgNQAUgOAIgHIAFgCIAFABQADACABAEIABAHIAAAGQAAAJgEAUQgEAUgIAaQgJAYgQAbQgPAagYAXQgYAWggAOQALgFAMgOg");
	this.shape_10.setTransform(-13.1,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag7A7QgrgDgrgQQABgKgCgJIgEgSQgBgIAEgLIADgKIAFgRQADgJADgEQAEgFADAFQANASAPATQAQATAYAKQAYAMAkgCIAAAAQAhgLAngTQAngUAmgbQgVAtghAaQghAbgoAKQgdAJghAAIgVgBg");
	this.shape_11.setTransform(-18.9,5.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AhYg5QABABANAEQAOAEAYABQAYABAcgJQAZgIAZgOQAZgOATgNQATgNAHgGQAAgBAFgBQAFgCAFADQAGADAAAMQAAAGgCATQgCATgGAbQgHAagOAaQgOAdgWAZQgXAZgiAQQghAQguACQgvABg/gS");
	this.shape_12.setTransform(-16.5,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AicBuIBEinIAOAFQAOAEAYABQAYABAcgJQAZgIAZgOQAZgOATgNQATgNAHgGIAFgCQAFgCAFADQAFADABAMQAAAGgCATQgCATgGAbQgHAagOAaQgOAdgWAZQgXAZgiAQQghAQguACIgIAAQgsAAg6gRg");
	this.shape_13.setTransform(-16.5,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#59595B").s().p("AgIAGQgEgEgBgFQAAgDACgDQAFAJAGABQAGACAIgCQgEAIgKABQgEAAgEgEg");
	this.shape_14.setTransform(8.1,-9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7B7B7C").s().p("AACAAQgDgFgJAAQADgCAFAAQAEAAAEAEQAFADAAAGIAAACQgEgHgFgBg");
	this.shape_15.setTransform(8.5,-10.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AATAAQgBAHgFAGQgFAFgIABQgGAAgGgGQgFgFgBgIQAAgGAGgGQAFgFAHgBQAHAAAGAGQAFAFABAHg");
	this.shape_16.setTransform(8.1,-10.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D6D70").s().p("AgMANQgFgFgBgIQAAgGAGgGQAFgFAHAAQAHgBAGAGQAFAFABAHQgBAHgFAGQgFAFgIABQgGgBgGgFg");
	this.shape_17.setTransform(8.1,-10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9A9A9B").s().p("Aq+MyICGiYIiACYIgEAAIgBABIgBgBgAK9svIACgDIAAABIgCACg");
	this.shape_18.setTransform(62.2,-87.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DBDBDD").s().p("ArFMoIAAgCIDDjbIjCDjIgBgGgALGstIAAABIgCABIgBABg");
	this.shape_19.setTransform(61.7,-87.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("ALLswQgBgFgGgBQgFABgBAFI1/ZEQgBAAgDAEQgDAFgBAHQgBAGAIAIQAHAGAGgBQAHgBAEgEQAEgEABAAIVq5YQAFgBABgFg");
	this.shape_20.setTransform(61.6,-87.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C1C1C6").s().p("ArCMyQgIgIABgGQABgHADgFIAEgEIV/5EQABgFAFgBQAGABABAFQgBAFgFABI1qZYIgFAEQgEAEgHABIgCAAQgGAAgFgFg");
	this.shape_21.setTransform(61.6,-87.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("Ao9MKQAAAAADgOQAEgNACgaQACgagEglQgEgkgOgvQABAAAPgHQAOgHAYgPQAYgPAcgWQAcgWAbgeQAbgfAVgmQAUgnAJguQABAAAOgGQAPgGAXgNQAXgNAbgVQAbgUAageQAZgdASgmQATgnAGgxQABAAATgJQAUgJAfgSQAegQAhgbQAigbAggjQAfgjAUgsQATgrACgzQAAAAAPgJQAPgKAZgRQAYgSAegaQAdgaAdghQAcgiAYgpQAXgoAMgwQABAAAPgIQAPgJAYgQQAXgSAagZQAZgaAWgiQATgeALgm");
	this.shape_22.setTransform(73.5,-89);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7B7B7C").s().p("AgJAAIALgFQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQADABABACIAAADQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABIgBAAQgGgGgJAAg");
	this.shape_23.setTransform(12.9,-0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#59595B").s().p("AgEAFQgDgBAAgDQgBgBABgCIACgDIABAAQAFAFAIABIgJAFIgBAAIgDgBg");
	this.shape_24.setTransform(11.2,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AAWgHQACAEgCADQgBADgEACIgZAKQgEABgEgCQgDgCgCgEQgCgEACgEQABgCAEgCIAZgKQAEgCAEADQADABACAFg");
	this.shape_25.setTransform(12.1,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D6D70").s().p("AgQAOQgDgCgCgEQgCgEACgEQABgCAEgCIAZgKQAEgCAEADQADABACAFQACAEgCADQgBADgEACIgZAKIgDABIgFgCg");
	this.shape_26.setTransform(12.1,-0.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#59595B").s().p("AAKAeIgKgdIgLgcIgGgQIADgCIAPAtIARAtIgCABIgGgQg");
	this.shape_27.setTransform(9.6,-5.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7B7B7C").s().p("AAAAAIgRgsIABAAIAHAQIAJAcIAMAdIAGAQIgCAAIgQgtg");
	this.shape_28.setTransform(10.2,-6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AAbAuIgQAGIglhhIAPgGg");
	this.shape_29.setTransform(9.9,-5.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D6D70").s().p("AgagtIAPgGIAmBhIgQAGg");
	this.shape_30.setTransform(9.9,-5.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BBBBBC").s().p("AgSAIQgOgIgFgRQAOASAaAIQASADARgCQgLAHgPABQgQAAgOgKg");
	this.shape_31.setTransform(7,-6.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E3E3E5").s().p("AADgDQgOgMgTgFQAFgBAFAAQAUAAAOANQAOAKADAUQgLgQgRgJg");
	this.shape_32.setTransform(10.2,-13.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D8D8D8").s().p("AgmApQgRgRgBgYQABgWAPgQQAQgRAYgBQAXABAQAPQARAQABAYQgBAXgPAQQgRARgYABQgWgBgQgPg");
	this.shape_33.setTransform(8.1,-10.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D6D6D8").s().p("AAfAEQgSgRgWgKQgXgKgcABQAUgQAbgCQATAAARAKQARAJAKARQAKAPABAUQAAAPgGAOQgHgbgRgTg");
	this.shape_34.setTransform(9.4,-12.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B6B6B7").s().p("AgbA0QgRgKgKgQQgKgRgBgTQAAgOAFgNQAFgNAJgKIABAAQgJAVADAUQADATAOAMQAOAOAUAGQAhAEAfgJIACAGQgLANgOAHQgPAIgSAAQgSAAgRgJg");
	this.shape_35.setTransform(7.4,-8.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("ABOAAQAAAUgKASQgLASgRAKQgSALgVABQgUAAgSgKQgSgLgLgRQgKgSgBgVQAAgUAKgSQALgSARgLQARgKAWgBQAUAAASAKQASAKAKASQALARABAWg");
	this.shape_36.setTransform(8.1,-10.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C1C1C6").s().p("AglBEQgSgLgLgRQgKgSgBgVQAAgUAKgSQALgSARgLQARgKAWgBQAUAAASAKQASAKAKASQALARABAWQAAAUgKASQgLASgRAKQgSALgVABQgUAAgSgKg");
	this.shape_37.setTransform(8.1,-10.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AAIgNQgBgBgBAAIgGAHQACAAABABQACACABADQAAACgCADQgCADgCAAQgDAAgDgCQgBgBgBgBIgFAHQABABABABQAFAEAGgBQAGAAAFgGQAEgGgBgEQgBgHgFgFg");
	this.shape_38.setTransform(131.9,-167.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C1C1C6").s().p("AgLAMIgCgCIAFgHIACACQADACADAAQACAAACgDQACgDAAgCQgBgDgCgCIgDgBIAGgHIACABQAFAFABAHQABAEgEAGQgFAGgGAAIgBAAQgGAAgEgDg");
	this.shape_39.setTransform(131.9,-167.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AAIgNQgBgBgBAAIgGAHQACAAABABQACACABADQAAACgCADQgCADgCAAQgDAAgDgCQgBgBgBgBIgFAHQABABABABQAFAEAGgBQAGAAAFgGQAEgGgBgFQgBgGgFgFg");
	this.shape_40.setTransform(114.3,-146.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C1C1C6").s().p("AgLAMIgCgCIAFgHIACACQADACADAAQACAAACgDQACgDAAgCQgBgDgCgCIgDgBIAGgHIACABQAFAFABAGQABAFgEAGQgFAGgGAAIAAAAQgGAAgFgDg");
	this.shape_41.setTransform(114.3,-146.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AAIgNQgBgBgBAAIgGAHQABAAACABQACACABADQAAACgCADQgCADgCAAQgDAAgDgCQgBgBgBgBIgFAHQABABABABQAFAEAGgBQAGAAAFgGQAEgGgBgFQgBgGgFgFg");
	this.shape_42.setTransform(15.1,-30.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C1C1C6").s().p("AgLAMIgCgCIAFgHIACACQADACADAAQACAAACgDQACgDAAgCQgBgDgCgCIgDgBIAGgHIACABQAFAFABAGQABAFgEAGQgFAGgGAAIAAAAQgGAAgFgDg");
	this.shape_43.setTransform(15.1,-30.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AAIgNQgBgBgBAAIgGAHQABAAACABQACACABADQAAACgCADQgCADgCAAQgDAAgDgCQgBgBgBgBIgFAHQABABABABQAFAEAGgBQAGAAAFgGQAEgGgBgFQgBgGgFgFg");
	this.shape_44.setTransform(39.1,-57.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C1C1C6").s().p("AgLAMIgCgCIAFgHIACACQADACADAAQACAAACgDQACgDAAgCQgBgDgCgCIgDgBIAGgHIACABQAFAFABAGQABAFgEAGQgFAGgGAAIAAAAQgGAAgFgDg");
	this.shape_45.setTransform(39.1,-57.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AAIgNQgBgBgBAAIgGAHQABAAACABQACACABADQAAACgCADQgCADgCAAQgDAAgDgCQgBgBgBgBIgFAHQABABABABQAFAEAGgBQAGAAAFgGQAEgGgBgFQgBgGgFgFg");
	this.shape_46.setTransform(61.1,-84.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C1C1C6").s().p("AgLAMIgCgCIAFgHIACACQADACADAAQACAAACgDQACgDAAgCQgBgDgCgCIgDgBIAGgHIACABQAFAFABAGQABAFgEAGQgFAGgGAAIAAAAQgGAAgFgDg");
	this.shape_47.setTransform(61.1,-84.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AAIgNQgBgBgBAAIgGAHQACAAABABQACACABADQAAACgCADQgCADgCAAQgDAAgDgCQgBgBgBgBIgFAHQABABABABQAFAEAGgBQAGAAAFgGQAEgGgBgEQgBgHgFgFg");
	this.shape_48.setTransform(88.8,-116.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C1C1C6").s().p("AgLAMIgCgCIAFgHIACACQADACADAAQACAAACgDQACgDAAgCQgBgDgCgCIgDgBIAGgHIACABQAFAFABAHQABAEgEAGQgFAGgGAAIgBAAQgGAAgEgDg");
	this.shape_49.setTransform(88.8,-116.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAAKQgEgCgCgFQgCgDAAgDQABgFAEgBQADgCACACQADACACAFQADACgBAEQgBAFgDABIgDABIgCgBg");
	this.shape_50.setTransform(-4.6,-40.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgCAaQgJgGgGgMQgGgKACgKQABgLAIgEQAIgEAHAGQAJAFAGAMQAGALgCALQgBAKgIAEIgHABQgFAAgDgDg");
	this.shape_51.setTransform(-5.5,-41.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAMQgEgCgEgGQgCgEABgFQABgFAEgCQAFgCACACQAFADADAFQACAEgBAGQgBAFgEACIgDABQgDAAgBgCg");
	this.shape_52.setTransform(-18.9,-33.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFAgQgMgGgHgPQgGgNACgMQADgNAKgGQALgFAKAHQALAGAHAPQAHAMgCANQgDAOgLAFQgEACgFAAQgGAAgFgEg");
	this.shape_53.setTransform(-20.5,-34.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E5E2BE").s().p("AgSAvQgLgKgKgMIgIgNQgNgUgEgVQgDgVAGgOQACAXAPAbIAJAMQAPATASAMQAQAOARACQAPACAKgHQAGgFADgGQABAHgBAHQgiAIgdAOQgJgIgLgKg");
	this.shape_54.setTransform(-10.3,-43.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("AAqgYQgPgVgTgNQgQgNgRgEQgRgDgMAJQgMAJgCARQgCARAGAWQAHATAQAVQATAbAWANQAfgPAmgIQACgRgHgVQgHgTgPgUg");
	this.shape_55.setTransform(-10.2,-44.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgpAkQgQgVgHgTQgGgWACgRQACgRAMgJQAMgJARADQARAEAQANQATANAPAVQAPAUAHATQAHAVgCARQgmAIgfAPQgWgNgTgbg");
	this.shape_56.setTransform(-10.2,-44.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E5E2BE").s().p("AABBBQgPgLgNgUQgQgUgGgWQgFgWAEgTQAEgUAOgMQgKAUAEAZQADAbATAXQAPAVARALQASAMATABQgLAMgHAKQgRgEgRgMg");
	this.shape_57.setTransform(-28.7,-33.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AA9gqQgRgXgWgNQgWgNgUgBQgWgBgRAMQgQANgGAVQgGAVAGAZQAGAXAQAXQAOATARAMQASAMAQAFQAMgQAUgVQATgVAcgWQgFgbgTgcg");
	this.shape_58.setTransform(-25.8,-33.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgcBMQgRgMgOgTQgQgXgGgXQgGgZAGgVQAGgVAQgNQARgMAWABQAUABAWANQAWANARAXQATAcAFAbQgcAWgTAVQgUAVgMAQQgQgFgSgMg");
	this.shape_59.setTransform(-25.8,-33.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,1,1).p("Agwg2QABAAALAEQAMAFASAJQAQAKARAOQASAMALATQABAAgCAEQgBADgDAEQgDADgFAAQgEAAgOABQgOABgPACQgRABgPAFQgOAEgGAI");
	this.shape_60.setTransform(45.1,18.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("Agwg2IAMAEQAMAFASAJQAQAKARAOQASAMALATIgBAEIgEAHQgDADgFAAIgSABIgdADQgRABgPAFQgOAEgFAIg");
	this.shape_61.setTransform(45.1,18.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2,1,1).p("Ageg3QAAABAMAFQANAGAPAMQASALARASQARAQAKAYQAAABgCADQgCAEgEADQgEAEgHgBQgFgBgRgCQgRgDgTgBQgVgBgTABQgSACgIAJ");
	this.shape_62.setTransform(29.3,37);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("Ageg2IAMAGQANAFAPAMQASALARASQARAQAKAYIgCAEQgCAEgEADQgEAEgGgBIgXgDIgkgEQgVgBgTABQgSACgIAIg");
	this.shape_63.setTransform(29.3,37);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B4B4B4").s().p("AAnBJQgUgBgUgFQgWgGgTgIIgggOIgNgGICchpIAFALIAHAdQAFARABASQACATgDARQgEAQgMAKQgLAIgTAAIgBAAg");
	this.shape_64.setTransform(-11.9,-22.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B4B4B4").s().p("ABBF4QhBgPg4gpQg5gpgng+IgGgKQghg3gMg8QgFgXgKgfQgLgfgPghQgPgkgRgjQgQgkgQgfQgRgfgNgXIgIgNIgEgGQgNgXgJgZQgJgYAAgZQgBgZAMgXQgDAdAIAdQAJAcAQAaIAEAHIAIANQANAWARAgIAgBDIAgBHQAOAjALAdQALAfAFAWQAMA9AhA3IAGAKQAnA9A5ApQA2ApBCAPQA3ANA0gJQA0gIAtgcQAkgYAbghQAaghAPgpQgNAzgdAqQgdAqgrAcQgtAcg0AIQgVAEgWAAQgfAAgggHg");
	this.shape_65.setTransform(-2.3,-5.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E5E5E5").s().p("AEbEjQAKg8gOhDQgJgZgMgWQgJgQgJgOQgkg2g0glIgJgHIg7gsIhEg0IhBg3QgggbgagZQgZgZgNgUQgggbgNgRQgcgngngaIgVgJIgZgIQAJgKAQgEQAMgCAPADQAQAEAOAGIAaAMQAlAaAZAnQALASAeAcQAMATAXAZQAXAaAfAcQAcAcAgAcIBAA1IA4AuIAIAHQAxAmAgA2IAQAeQALAWAHAYQAKBFgQA9QgPA9gnAvQAggxALg9g");
	this.shape_66.setTransform(6.5,-16.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CCCCCC").s().p("AA8G4QhAgPg5gpQg4gpgog9IgGgKQggg3gNg9QgEgWgLgfQgLgfgPgkIgfhFQgRgjgQgfIgeg2IgIgNIgDgHQgQgagJgcQgJgdADgcQADgcAUgYIAOgQQAJgIAKgIQANgKASgHQARgHASAAQASgBAOAIQgFgDAAgJQAAgIAEgKQAFgKAJgJQAJgIANgDQANgDAPAEQAPADAPAHIAZAMQAlAaAZAnQAMASAeAbQAKAUAXAZQAXAZAeAcQAeAcAhAcIBAA2IA3AtIAJAHQAxAoAgA0IAQAeQAKAXAIAYQAJA8gMA4QgLA3geAtQgeAtguAdQgsAcg1AJQgVADgWAAQgfAAgggHg");
	this.shape_67.setTransform(-1.8,-11.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgQHZQg3gLgxgbQgxgagogpQgngpgag3QghhFgChLQAAgbgIgnQgHgngLgqQgMgsgNgsQgOgsgNglQgOglgLgYQgSgmgDgpQgCgoALgnQAMgmAagiQgNAoAEAqQADAqASAmIAMAaIAeA+QAOAfAJAcIAKAgIAOAtQAHAVALASIAKAOQgQABgHAIQgIALADAQQACAOAFAPIADAKQAHAbAEAZQAFAZAGAZQAHAZALAZQAgBDA1AvQAzAwBAAYQA+AYBFgBQBEgCBCgdQAkgSAigWQAigXAdgdQAcgcATgiQATghAFgmQgBAegHAbQgHAcgKAYIgUAsIgOAhQgPAPgPANIgfAaQgOANgLAOIgKgDIgEgCIgDADQggAYgjAQQg2Aag5AGQgWADgWAAQgiAAgggHg");
	this.shape_68.setTransform(-2.5,-0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2,1,1).p("ADkitQgigbgkggQglgfghgfQgigfgYgcQgZgbgHgUQgVgrgigeQghgegqgPQgqgPgtACQgtACgrAUQgrAUgeAiQgeAigPApQgPAqACAtQACAtAUArQALAXANAlQAOAkANArQAOAsALAqQALAsAIAnQAHAmABAcQABAlAJAlQAIAlARAkQAaA3ApArQApArAzAdQAyAcA5ALQA2AMA5gIQA6gIA1gdQANgGAWgLQAWgMAbgRQAagRAZgWQAZgWARgcQAPgZANgYQANgZAHgeQAHgfgEgqQABgdgIgeQgHgfgMgeQgLgegOgcQgSglgaggQgZghgggZQgYgUgigcg");
	this.shape_69.setTransform(-2.7,-4.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AgMINQg5gLgygcQgzgdgpgrQgpgrgag3QgRgkgIglQgJglgBglQgBgcgHgmQgIgngLgsQgLgqgOgsQgNgrgOgkQgNglgLgXQgUgrgCgtQgCgtAPgqQAPgpAegiQAegiArgUQArgUAtgCQAtgCAqAPQAqAPAhAeQAiAeAVArQAHAUAZAbQAYAcAiAfQAhAfAlAfIBGA7IA6AwQAgAZAZAhQAaAgASAlQANAcAMAeQAMAeAHAfQAIAegBAdQADAqgGAfQgHAegNAZQgNAYgPAZQgRAcgZAWQgZAWgaARQgbARgWAMIgjARQg1Adg6AIQgXADgXAAQgiAAgfgHg");
	this.shape_70.setTransform(-2.7,-4.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(2,1,1).p("AgLgmQAAAAgCAJQgCAHgGAMQgFAKgJALQgJALgNAGQAAABAAAFQABAEAFADQAFADAOgEQAAAAAJgFQAJgEANgIQALgIANgLQANgIAKgNQAKgMACgM");
	this.shape_71.setTransform(-5.3,49);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgzApQgFgDgBgFIAAgFQANgGAJgLQAJgLAFgKIAIgTIACgJIBFgDQgCAMgKAMQgKANgNAIQgNALgLAIIgWAMIgJAFQgIACgGAAQgDAAgCgBg");
	this.shape_72.setTransform(-5.3,49);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#999999").s().p("AAaB7QgMgBgPgSQgNgOgSgZQgOgWgDgOQgEgOADgHQACgHACgBQAZgGAPgPQANgPAIgUQAIgTAEgTIACgJQAEgHAFgFQAFgFAGgCQAGAVgFAQQgEARgKAOQgLAPgMANQgNAPgLAPQgLAQgDAVQAAAMAGAPQAHAQAMAMIAGAIQAQAMASAAIgCADQgFAEgFAAIgCAAg");
	this.shape_73.setTransform(15.2,-26.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(2,1,1).p("ABBhmQgHgUgNgFQgMgGgMAHQgLAGgHAQQgCAEgBAFQgDAVgIASQgIASgOAOQgOANgXAHQAAAAgDAEQgDACgBAJQgCAJAEAPQAEAOANAUQAcAoAUAOQASAPAOgOQAIgHANgSQANgUAKgdQALgeACglQABgngPgug");
	this.shape_74.setTransform(17.2,-26.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("AgKB7QgUgOgcgoQgNgUgEgOQgEgPACgJQABgJADgCIADgEQAXgHAOgNQAOgOAIgSQAIgSADgVIADgJQAHgQALgGQAMgHAMAGQANAFAHAUQAPAugBAnQgCAlgLAeQgKAdgNAUQgNASgIAHQgGAHgJAAQgHAAgKgIg");
	this.shape_75.setTransform(17.2,-26.9);

	this.addChild(this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.6,-170.4,182,224.7);


(lib.rolling_the_string_rod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgsBMQASgJATgOQASgOARgQQASgRAMgOQAMgQACgNQABgHgNgBQgNgBgUABIgoABQgWAAgRgEQgQgFgKgFQgJgFgHgHIgPgOQAFAFALAGQAMAGASAGQASAGAYABQAVAAAZgEQAZgEAUgGQAVgGAJgEIAEAAIAFACQABADAAAEIgBAGIgCAFQgDAIgJARQgJAQgPASQgPAUgVATQgVASgZANQgbAMggACQAKgBAQgIg");
	this.shape.setTransform(8,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAABIQgkgDgkgQQgkgQgfgbQAEgIABgHIACgRQACgJAGgIIAGgIIAJgOQAFgGAEgDQAFgDABAFQAFAUAIAVQAIAVAQAQQARASAgAKIABAAQAdAAAngGQAngGAogMQgfAhgkAOQgdALgfAAIgNAAg");
	this.shape_1.setTransform(-0.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AhchbQAjABAKAIQAKAIAUAHQATAJAcABQAXABAagFQAZgEAUgGQAUgGAHgDQABgBAEABQAFAAADAEQAEAEgDALQgCAFgHAQQgHAQgOAVQgOATgUAVQgUAUgaAPQgbAPgfAEQgiAEgogNQgpgNgvgj");
	this.shape_2.setTransform(2.9,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhNBSQgpgNgvgjQAmh+AjABQAjABAKAIQAKAIAUAHQATAJAcABQAXABAagFQAZgEAUgGQAUgGAHgDIAFAAQAFAAADAEQAEAEgDALIgJAVQgHAQgOAVQgOATgUAVQgUAUgaAPQgbAPgfAEIgQABQgbAAgfgKg");
	this.shape_3.setTransform(2.9,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAgBdQALgPAKgWQALgVAHgXQAIgVACgUQADgUgEgMQgDgHgMAGQgMAFgRAKIgkAVQgRALgRAFQgQADgLAAQgLAAgKgCIgTgFQAHABAMAAQAOABASgEQATgEAVgLQASgLAUgPQAUgQAPgPQAQgPAFgHIAEgDIAFAAQADABACAEIACAGIABAFQABAJAAATQAAATgEAYQgDAZgKAYQgJAbgSAYQgRAXgcARQAJgGAKgPg");
	this.shape_4.setTransform(2.9,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ah1A/QAAgJgDgIIgHgQQgCgJABgLIABgJIABgOQACgJACgEQADgFADAEQAOAPARAMQARAPAYAIQAXAHAfgGIAAgBQAcgOAfgWQAfgZAdgeQgLAtgZAbQgYAdgjAQQgiAQglADIgXABQgcAAgdgGg");
	this.shape_5.setTransform(-0.5,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AhYgiQAAABANACQAMABAWgCQAVgDAXgMQAVgLAUgQQAUgQAPgPQAPgPAFgGQAAgBAEgCQAEgCAFACQAFACADALQABAFABASQACARgCAZQgCAZgIAaQgHAcgQAaQgQAagcATQgbATgoAJQgpAIg7gI");
	this.shape_6.setTransform(1.4,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhzB/QgoiPBKgSIANADQANABAVgCQAVgDAXgMQAVgLAUgQQAUgQAPgPQAPgPAFgGIAEgDQAEgCAFACQAFACADALIACAXQACARgCAZQgCAZgIAaQgHAcgQAaQgQAagcATQgbATgoAJQgWAEgaAAQgYAAgcgEg");
	this.shape_7.setTransform(0.7,-3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AihA0IAtAAIAAgBIgEABQgoACgDgjQgEgKABgNQABgVATgIQAJgEAHgBQATAFAKAJIAHgCIAJADIABgDQACgFAEAEQAOAPARANQARAPAYAHQAVAIAhgHIAAAAQAbgPAggWQAfgYAdgeQgLAsgZAbQgYAegjAPQgiAQgmADIgMAAQgsAAhpgQg");
	this.shape_8.setTransform(7.2,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AiNg6QBEAYAOADQAOACAWgDQAWgDAYgMQAUgLAVgQQATgQAPgPQAPgPAFgGQAAgBAEgCQAEgCAFACQAFACADALQABAFACASQABARgCAZQgCAZgHAaQgIAcgQAaQgQAagcATQgbATgoAJQgpAIg7gI");
	this.shape_9.setTransform(11,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AhaB/QhpjSBDAZQBEAYAOADQAOACAWgDQAUgDAagMQAVgLAUgQQAUgQAOgPQAPgPAFgGIAEgDQAEgCAFACQAGACACALIADAXQABARgCAZQgCAZgHAaQgIAcgQAaQgQAZgcAUQgbATgqAJQgTAEgbAAQgYAAgcgEg");
	this.shape_10.setTransform(9.7,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgpBLQARgJATgPQASgOARgQQARgRAMgPQAMgQABgNQABgHgNgBQgNgBgUACIgoACQgVAAgSgEQgPgEgKgFQgKgFgHgHIgPgNQAFAEALAGQAMAHASAFQATAFAXAAQAVAAAZgEQAZgFAUgGQAUgGAJgEIAFAAIAEACQACACAAAEIgBAHIgCAFQgDAIgJAQQgIARgPAUQgOASgWATQgUATgZANQgaANggACQALgBAPgIg");
	this.shape_11.setTransform(12.5,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AABBHQgkgCgkgQQgkgPgggaQAEgJABgGIACgRQABgJAGgJIAGgIIAJgNQAFgHAEgDQAEgDACAFQAFAUAIAVQAJAVAQAPQARASAhAJIAAAAQAdAAAngHQAngHAogMQgfAhgjAPQgfAMggAAIgKAAg");
	this.shape_12.setTransform(4.2,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AhWhsQAjAdALAGQAMAHAPAHQAOAHAWACQAWACAdgBQAcgBAUgGQAUgGAIgEQAAAAAFAAQAEAAAEAEQADAEgCALQgCAGgHAQQgHAPgNAUQgNAVgUAVQgTAVgbAPQgaAPgfAFQgiAEgogMQgpgMgwgi");
	this.shape_13.setTransform(7.5,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AhKBkQgpgMgwgiQgNh1BbgtQAjAdALAGIAbAOQAOAHAWACQAWACAdgBQAcgBAUgGQAUgGAHgEIAFAAQAFAAAEAEQADAEgDALIgIAWQgHAPgNAUQgNAVgUAVQgUAVgaAPQgaAPggAFIgSABQgaAAgdgJg");
	this.shape_14.setTransform(7.4,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:2.9,y:-4.4}}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_4,p:{x:14.4,y:-3.7}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).wait(2));

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#59595B").s().p("AgHAEQgBgEADgFQACgFAEgCIAHgBQgHAIgBAFQAAAIAEAGQgHgBgEgJg");
	this.shape_15.setTransform(16.4,-5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7B7B7C").s().p("AABABQADgEgDgIQADACABAFQACAEgDAFQgCAFgEACIgDAAQAFgEABgHg");
	this.shape_16.setTransform(17.8,-5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AAFASQgGABgHgDQgGgEgDgHQgCgGAEgGQADgHAIgDQAGgCAGAEQAHAEACAHQADAGgEAHQgDAGgIADg");
	this.shape_17.setTransform(17,-5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D6D70").s().p("AgIAQQgGgEgDgHQgCgGAEgGQADgHAIgDQAGgCAGAEQAHAEACAHQADAGgEAHQgDAGgIADIgFAAQgDAAgFgCg");
	this.shape_18.setTransform(17,-5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7B7B7C").s().p("AgEAIIgBgBQAEgHgBgJIAHAJQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_19.setTransform(9.5,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#59595B").s().p("AgEAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQABgDACgBQACgCABAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABABQgFAGAAAIg");
	this.shape_20.setTransform(7.7,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAOATQgEACgEAAQgEAAgCgDIgQgVQgDgEACgEQAAgEAEgDQAEgCAEAAQAEAAABAEIARAUQADAEgBAEQgBAEgEADg");
	this.shape_21.setTransform(8.6,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D6D70").s().p("AAAASIgQgVQgDgEABgEQACgEADgDQADgCAFAAQAEAAABAEIARAUQACAEAAAEQgBAEgEADQgEACgEAAQgEAAgCgDg");
	this.shape_22.setTransform(8.6,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#59595B").s().p("AgmAcIAOgLIAYgRIAXgTIAOgKIACACQgTAOgTAOIgmAdIgBgCg");
	this.shape_23.setTransform(13.3,-2.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7B7B7C").s().p("AglAdIAlgdIAlgdIABABIgNALIgZARIgXAUIgNAKIgBgBg");
	this.shape_24.setTransform(13.6,-2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AgkAmIgJgNIBSg+IAJANg");
	this.shape_25.setTransform(13.4,-2.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D6D70").s().p("AgtAZIBSg+IAJANIhSA+g");
	this.shape_26.setTransform(13.4,-2.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#59595B").s().p("AAAAAQgHABgGAEQAAgHAJgEQAEgCAGADQAEACADAEQABADAAADQgIgGgGgBg");
	this.shape_27.setTransform(17.7,-7.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7B7B7C").s().p("AgDAEQgFgCgDgEIgBgCQAGAEAGABQAFACAIgDQgCADgFACIgEAAIgFgBg");
	this.shape_28.setTransform(17.5,-5.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AgQAHQgCgHACgGQADgHAIgDQAFgCAHACQAHADADAIQADAFgDAHQgDAHgIADQgGADgGgDQgHgDgDgHg");
	this.shape_29.setTransform(17.8,-6.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D6D70").s().p("AgGARQgHgDgDgHQgCgHACgGQADgHAIgDQAFgCAHACQAHADADAIQADAFgDAHQgDAHgIADIgGABQgDAAgDgBg");
	this.shape_30.setTransform(17.8,-6.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B7B7C").s().p("AgCAFQgDAAgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQAAgCABgCIACgBQAHADAJgBIgKAHIgBACIgBgBg");
	this.shape_31.setTransform(10.1,-13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#59595B").s().p("AAGAFQgGgEgIABIAIgFQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQADAAACACQACACAAABIgCAEg");
	this.shape_32.setTransform(11.4,-15.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AgRAQQgDgEAAgEQAAgEADgDIAUgRQADgDAEABQAEAAADAEQADADAAAEQABAEgDADIgUARQgEADgEgBQgEAAgDgDg");
	this.shape_33.setTransform(10.7,-14.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6D6D70").s().p("AgKATQgEAAgDgDQgDgEAAgEQAAgEADgDIAUgRQADgDAEABQAEAAADAEQADADAAAEQABAEgDADIgUARQgDACgDAAIgCAAg");
	this.shape_34.setTransform(10.7,-14.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#59595B").s().p("AAAABQgQgQgPgUIABgBIALANIATAXIAVAVIALAOIgCACIgegkg");
	this.shape_35.setTransform(14.9,-10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7B7B7C").s().p("AATAYIgTgYIgUgWIgMgNIACAAIAeAjIAhAjIgCABIgMgMg");
	this.shape_36.setTransform(14.5,-9.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AgoghIANgKIBEBMIgNALg");
	this.shape_37.setTransform(14.7,-10.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6D6D70").s().p("AgoghIANgKIBEBMIgNALg");
	this.shape_38.setTransform(14.7,-10.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#59595B").s().p("AgGAOQAGgJAAgFQgBgHgEgGQAHAAAEAIQACAFgCAFQgCAFgEADIgFABIgBAAg");
	this.shape_39.setTransform(18.6,-6.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7B7B7C").s().p("AgDAHQgCgGACgEQACgFADgCIADgBQgFAFAAAGQgBAFABAIQgBgDgCgDg");
	this.shape_40.setTransform(17.1,-6.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AgGgQQAGgCAHACQAHADADAHQADAGgDAGQgDAIgHADQgHADgFgDQgHgDgDgHQgDgHACgFQACgHAIgEg");
	this.shape_41.setTransform(17.9,-6.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6D6D70").s().p("AgGARQgGgDgEgHQgCgHACgFQADgHAHgEQAGgCAHACQAHADADAHQADAGgDAGQgDAIgHADIgHABIgGgBg");
	this.shape_42.setTransform(17.9,-6.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7B7B7C").s().p("AgDAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgDACgCQAAgBABAAQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABABQgCAHACAJg");
	this.shape_43.setTransform(24.5,-14.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#59595B").s().p("AgEAHIAAAAQAEgHgCgIIAGAIQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAADgCACQgCACgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_44.setTransform(26.5,-13.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AgPgQQADgDAFAAQAEAAADACIARAUQADADAAAEQgBAEgDADQgDADgFAAQgEABgDgDIgRgTQgDgEAAgEQAAgEAEgDg");
	this.shape_45.setTransform(25.6,-13.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6D6D70").s().p("AABASIgRgTQgDgEAAgEQAAgEAEgDQADgDAFAAQAEAAADACIARAUQADADAAAEQgBAEgDADQgDADgFAAIgBAAQgDAAgDgCg");
	this.shape_46.setTransform(25.6,-13.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#59595B").s().p("AgiAfIAigfQAQgRATgQIABABIgNANIgWATIgVAVIgMANIgCgDg");
	this.shape_47.setTransform(21.3,-9.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7B7B7C").s().p("AgiAgIAMgLIAWgVIAWgVIAMgLIABABIgjAfIghAhIgBgBg");
	this.shape_48.setTransform(21,-9.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AAggpIALAMIhKBHIgMgMg");
	this.shape_49.setTransform(21.2,-9.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6D6D70").s().p("AgqAeIBKhHIALAMIhKBHg");
	this.shape_50.setTransform(21.2,-9.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#59595B").s().p("AgFAGQgFgCgCgEIgBgHQAIAHAFAAQAHAAAHgDQgBAHgJADIgEABQgCAAgDgCg");
	this.shape_51.setTransform(18.3,-2.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7B7B7C").s().p("AABAAQgFgDgHADQACgDAEgBQAFgCAFADQAFACABAEIACADQgGgGgGAAg");
	this.shape_52.setTransform(18.6,-3.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("AASgFQACAGgEAHQgDAHgHACQgGADgHgEQgHgDgCgIQgDgGAEgGQAEgHAHgDQAGgCAGAEQAHADADAHg");
	this.shape_53.setTransform(18.2,-2.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6D6D70").s().p("AgHAQQgHgDgCgIQgDgGAEgGQAEgHAHgDQAGgCAGAEQAHADADAHQACAGgEAHQgDAHgHACIgGABQgDAAgEgCg");
	this.shape_54.setTransform(18.2,-2.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7B7B7C").s().p("AgJADIAJgHIAEAAQADAAABACQABABAAAAQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAIgBABQgHgEgJABg");
	this.shape_55.setTransform(25.5,4.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#59595B").s().p("AgBAFQgEAAgBgCQgCgCAAgBIACgEIABgBQAGAFAIAAIgJAFIAAABIgBgBg");
	this.shape_56.setTransform(24.1,6.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AATgNQACADAAAFQAAAEgDABIgVARQgDACgFAAQgDgBgDgEQgDgDAAgEQAAgFAEgCIAUgQQAEgDAEABQAEABADAEg");
	this.shape_57.setTransform(24.9,5.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6D6D70").s().p("AgLATQgDgBgDgEQgDgDAAgEQAAgFAEgCIAUgQQAEgDAEABQAEABADAEQACADAAAFQAAAEgDABIgVARQgDACgDAAIgCAAg");
	this.shape_58.setTransform(24.9,5.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#59595B").s().p("AASAZIgSgYIgTgXIgKgNIACgDIAcAmQAPARAOAVIgBABIgLgOg");
	this.shape_59.setTransform(20.9,0.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7B7B7C").s().p("AAAAAIgdgkIABgBIALANIARAYIAUAXIAKAOIgBABIgdgmg");
	this.shape_60.setTransform(21.3,0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("AAmAjIgMALIhAhRIANgKg");
	this.shape_61.setTransform(21.1,0.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6D6D70").s().p("AgmgjIANgKIBABQIgNALg");
	this.shape_62.setTransform(21.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},2).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},2).wait(2));

	// Layer 1
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BBBBBC").s().p("AAKAUQgQgCgNgLQgMgKgFgRQAMAUAbALQAQAEASAAQgLAGgMAAIgEgBg");
	this.shape_63.setTransform(15.8,-3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E3E3E5").s().p("AAEgDQgNgNgTgHQAFgBAGABQASACAOAOQANAMABAUQgKgRgPgLg");
	this.shape_64.setTransform(19.6,-9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D8D8D8").s().p("AgDA4QgYgCgPgSQgPgRACgWQACgYASgPQARgPAWACQAYACAPASQAPARgCAWQgCAYgSAPQgQANgUAAIgDAAg");
	this.shape_65.setTransform(17.2,-6.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D6D6D8").s().p("AAdAFQgPgSgVgMQgXgMgbgCQAVgPAcACQASACAQALQAPALAJARQAJAPgCAVQgBAPgHANQgEgbgQgVg");
	this.shape_66.setTransform(18.8,-8.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B6B6B7").s().p("AADA/QgSgCgQgLQgPgLgJgRQgJgRACgTQABgOAHgNQAGgMAKgJIAAAAQgLAUABAUQABATANANQAMAQAVAIQAfAHAggGIABAGQgMALgPAHQgMAEgOAAIgHAAg");
	this.shape_67.setTransform(16.3,-5.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("ABNAGQgCAWgMAQQgLARgTAIQgSAKgUgCQgVgCgRgMQgRgLgJgTQgJgSACgTQACgWAMgRQALgQASgKQATgJAUACQAVACARAMQARALAJASQAJATgCAUg");
	this.shape_68.setTransform(17.2,-6.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C1C1C6").s().p("AgFBNQgVgCgRgMQgRgLgJgTQgJgSACgTQACgWAMgRQALgQASgKQATgJAUACQAVACARAMQARALAJASQAJATgCAUQgCAWgMAQQgLARgTAIQgPAIgSAAIgFAAg");
	this.shape_69.setTransform(17.2,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-15,40.8,28.7);


(lib.blinking2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAOQgEgBgDgEQgCgFAAgEQABgGADgDQADgFADABQAEABACAEQADAFAAADQgBAHgDADQgDAEgDAAIAAAAg");
	this.shape.setTransform(13,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAlQgKgCgGgLQgGgLABgOQACgQAIgKQAHgJAJAAQAKACAGALQAGALgCAOQgCAQgHAJQgHAKgIAAIgBAAg");
	this.shape_1.setTransform(12.2,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAASQgGgBgDgGQgDgFAAgGQABgIAEgEQAEgFAEAAQAGABADAGQADAFgBAFQAAAJgEAEQgEAFgEAAIAAAAg");
	this.shape_2.setTransform(-3.6,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAtQgOgCgIgOQgIgOABgRQACgTALgMQALgMAMABQAOACAIAOQAIAOgBARQgCATgLAMQgKALgLAAIgCAAg");
	this.shape_3.setTransform(-4.4,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5E2BE").s().p("AAGBFIgNAAQgGgLgDgMQgEgMgBgPIAAgQQgBgXAIgUQAHgUAKgJQgIAWABAeIAAAQQACAOACAPQACAPAGALQAFALAJAFIgQgBg");
	this.shape_4.setTransform(7.7,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AARhIQgMgLgMABQgOACgLAOQgKANgFAWQgEAWACAYQADAfALAXQAOgEAVAEQAWADAXALQADgJABgOQACgNAAgPQAAgPgBgMQgDgYgJgVQgIgUgNgMg");
	this.shape_5.setTransform(10.2,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABFQgVgEgOAEQgLgXgDgfQgCgYAEgWQAFgWAKgNQALgOAOgCQAMgBAMALQANAMAIAUQAJAVADAYIABAbQAAAPgCANQgBAOgDAJQgXgLgWgDg");
	this.shape_6.setTransform(10.2,-0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E2BE").s().p("AgcASQgDgZAHgXQAHgXAPgPQAMgPATgDQgUAMgJAZQgKAYADAeQACAaAIATQAKATARAKIgeAIQgYgZgEgsg");
	this.shape_7.setTransform(-12,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ABKAEQgHgwgXgYQgXgZgeADQgVADgPAPQgQAPgIAYQgHAYACAbQACAXAJASQAIATANANQARgEAagHQAbgGAkgFQAHgOACgQQADgRgCgSg");
	this.shape_8.setTransform(-7.8,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/A7QgJgSgCgXQgCgbAHgYQAIgYAQgPQAPgPAVgDQAegDAXAZQAXAYAHAwQACASgDARQgCAQgHAOQgkAFgbAGIgrALQgNgNgIgTg");
	this.shape_9.setTransform(-7.8,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAGBFIgOAAQgFgLgDgMQgDgMgCgPIgBgPQAAgYAHgUQAIgTAKgKQgIAWAAAeIABAQQABAOADAPQACAPAGALQAGALAJAFIgRgBg");
	this.shape_10.setTransform(7.7,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AARhHQgMgMgMABQgOACgLAOQgKANgFAWQgEAWACAYQADAfALAXQAOgEAVAEQAWADAXALQADgJABgNQACgOAAgPQAAgPgCgMQgCgYgJgVQgIgUgNgLg");
	this.shape_11.setTransform(10.2,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AAABFQgVgEgOAEQgLgXgDgfQgCgYAEgWQAFgWAKgNQALgOAOgCQAMgBAMAMQANALAIAUQAJAVACAYQACAMAAAPIgCAdQgBANgDAJQgXgLgWgDg");
	this.shape_12.setTransform(10.2,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgcASQgDgZAHgXQAHgXAPgPQAMgPATgDQgUAMgJAZQgKAYADAeQACAaAIATQAKATARAKIgeAIQgYgZgEgsg");
	this.shape_13.setTransform(-12,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgJhaQgUADgQAPQgQAPgHAYQgIAYACAbQADAXAIASQAIATANANQARgEAagHQAbgGAkgFQAHgOACgQQADgRgCgSQgHgwgXgZQgXgYgeADg");
	this.shape_14.setTransform(-7.8,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("Ag/A7QgIgSgDgXQgCgbAIgYQAHgYAQgPQAQgPAUgDQAegDAXAYQAXAZAHAwQACASgDARQgCAQgHAOQgkAFgbAGIgrALQgNgNgIgTg");
	this.shape_15.setTransform(-7.8,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAKQgCgFAAgFQABgHADgEQADgFADABQAEABACAEQADAGAAAEQgBAIgDAEQgDAEgDAAQgEgBgDgFg");
	this.shape_16.setTransform(13,-0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAqQgKgBgGgNQgGgNABgRQACgSAIgLQAHgLAJABQAKABAGANQAGANgCAQQgCASgHALQgHALgIAAIgBAAg");
	this.shape_17.setTransform(12.2,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJANQgDgGAAgHQABgJAEgFQAEgGAEABQAGABADAGQADAGgBAHQAAAJgEAFQgFAFgDAAQgGgBgDgGg");
	this.shape_18.setTransform(-3.6,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDA0QgOgDgIgPQgIgQABgUQACgWALgNQALgOAMAAQAOADAIAPQAIAQgBAVQgCAVgLAOQgKANgMAAIgBAAg");
	this.shape_19.setTransform(-4.4,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E5E2BE").s().p("AAGBPIgNAAQgGgNgDgNQgEgNgBgSIAAgSQgBgbAIgXQAHgWAKgLQgIAZABAiIAAASQACARACARQACASAGAMQAFANAJAFIgQgBg");
	this.shape_20.setTransform(7.7,-2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AARhSQgMgNgMABQgOACgLAQQgKAQgFAYQgEAaACAcQADAkALAZQAOgEAVAEQAWAEAXAMQADgKABgPQACgQAAgRQAAgRgBgOQgDgcgJgYQgIgXgNgNg");
	this.shape_21.setTransform(10.2,-2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAABPQgVgEgOAEQgLgZgDgkQgCgcAEgaQAFgYAKgQQALgQAOgCQAMgBAMANQANANAIAXQAJAYADAcIABAfQAAARgCAQQgBAPgDAKQgXgMgWgEg");
	this.shape_22.setTransform(10.2,-2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5E2BE").s().p("AgcAUQgDgcAHgbQAHgaAPgRQAMgRATgEQgUANgJAdQgKAcADAjQACAeAIAVQAKAWARAMIgeAJQgYgdgEgzg");
	this.shape_23.setTransform(-12,-1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("ABKAEQgHg3gXgcQgXgbgeADQgVADgPARQgQARgIAcQgHAcACAfQACAaAJAVQAIAWANAPQARgGAagHQAbgHAkgGQAHgQACgTQADgTgCgVg");
	this.shape_24.setTransform(-7.8,-1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag/BEQgJgVgCgaQgCgfAHgcQAIgcAQgRQAPgRAVgDQAegDAXAbQAXAcAHA3QACAVgDATQgCATgHAQQgkAGgbAHIgrANQgNgPgIgWg");
	this.shape_25.setTransform(-7.8,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},5).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-10.2,32.7,20.4);


(lib.blinking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTAIIACgPQAKgEAHACQAMAEAIAKQgKgDgKABQgJABgKAGIAAgCg");
	this.shape.setTransform(12,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgCgzQgMgDgMAGQgFAeALAYQAMAaAYAQQADACAEADQAAAAABgBQAGgagCgWQgBgVgJgPQgIgPgMgEg");
	this.shape_1.setTransform(12.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAQAwQgYgQgMgaQgLgYAFgeQAMgGAMADQAMAEAIAPQAJAPABAVQACAWgGAaIgBABIgHgFg");
	this.shape_2.setTransform(12.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AguAlQAGgXANgRQANgTAPgKQAXgNAWAFIACABQgZAMgRAVQgOASgJAaQgPADgPABIABgFg");
	this.shape_3.setTransform(-10,-7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABDgTQgOgTgUgFQgUgFgSAJQgUAJgQAUQgPASgIAcQgBAFgBAFQAcgBAcgJQAXgIAUgPQAUgNAOgTg");
	this.shape_4.setTransform(-8.6,-7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AhAAkQAIgcAPgSQAQgUAUgJQASgJAUAFQAUAFAOATQgOATgUANQgUAPgXAIQgcAJgcABIACgKg");
	this.shape_5.setTransform(-8.6,-7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAKQgEgBgBgFQAAgEACgCQACgFAEgCQABgCAEACQADABABAFQABADgDADQgCAFgDACIgCABIgDgBg");
	this.shape_6.setTransform(11.1,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAcQgIgEgBgKQgCgLAGgLQAGgMAJgFQAHgGAIAEQAHAEACALQACAKgGAKQgGAMgJAGQgDADgFAAIgHgBg");
	this.shape_7.setTransform(11.2,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFANQgEgCgBgFQgBgGADgEQADgFAEgDQADgCAEACQAEACABAFQABAFgCAEQgDAGgFACQgCACgCAAIgDgBg");
	this.shape_8.setTransform(-3.4,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAiQgKgGgDgNQgCgMAGgNQAHgPAMgGQAKgGAKAEQALAGADANQACANgHANQgHAOgLAGQgGAEgGAAQgEAAgFgCg");
	this.shape_9.setTransform(-3.8,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5E2BE").s().p("AggAwQgCgNABgOQAAgPAEgNIAFgPQAJgZANgQQAMgPAPgFQgRARgIAcIgFAPQgGAXACAVQABAWAIAPQAHAOAMADQAIABAHgBQgFAFgGAEQgZgWgegOg");
	this.shape_10.setTransform(8.1,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AAzARQAGgYgBgWQgCgWgJgQQgIgPgOgEQgPgDgMAJQgPAJgMATQgMATgHAaQgIAdAEAaQAhAPAdAZQAOgKALgSQALgTAHgYg");
	this.shape_11.setTransform(9.9,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2AwQgEgaAIgdQAHgaAMgTQAMgTAPgJQAMgJAPADQAOAEAIAPQAJAQACAWQABAWgGAYQgHAYgLATQgLASgOAKQgdgZghgPg");
	this.shape_12.setTransform(9.9,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E5E2BE").s().p("AgsAqQgCgUAGgWQAHgYANgTQAOgTAPgJQASgJASADQgVAEgSAUQgPAUgIAeQgHAWAEAWQADAWALAPIgdABQgIgQgBgVg");
	this.shape_13.setTransform(-10.5,-3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("ABLgTQgEgZgMgRQgNgSgVgFQgUgFgSAJQgUAJgPAUQgQAUgHAcQgGAVACAVQABAVAJARQATgBAdACQAbACAiAHQAUgWAJghQAHgcgFgXg");
	this.shape_14.setTransform(-7.8,-3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBOQgdgCgTABQgJgRgBgVQgCgVAGgVQAHgcAQgUQAPgUAUgJQASgJAUAFQAVAFANASQAMARAEAZQAFAXgHAcQgJAhgUAWQgigHgbgCg");
	this.shape_15.setTransform(-7.8,-3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgeAsQgCgMABgNQAAgOAEgMIAEgOQAJgWANgOQAKgPAOgDQgPAPgIAZIgEAOQgGAVACATQABAUAHAOQAHAMALADQAHACAHgCQgFAFgFADQgYgTgcgNg");
	this.shape_16.setTransform(8.1,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AAWhOQgOgEgMAJQgOAIgLASQgMARgGAXQgIAcAEAXQAgAOAaAWQAOgJAKgQQALgRAGgXQAGgVgBgUQgCgVgIgOQgIgOgNgDg");
	this.shape_17.setTransform(9.7,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgzAsQgEgXAIgcQAGgXAMgRQALgSAOgIQAMgJAOAEQANADAIAOQAIAOACAVQABAUgGAVQgGAXgLARQgKAQgOAJQgagWgggOg");
	this.shape_18.setTransform(9.7,3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgoAnQgDgTAEgUQAGgWANgSQAMgRAPgIQARgJATADQgWAEgQASQgOASgHAcQgFAVAEAUQAFAUALAOIgcAAQgJgOgCgTg");
	this.shape_19.setTransform(-11.2,-3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AAUhNQgUgFgSAIQgTAJgPASQgPATgGAaQgEATADATQADATAJAQQATgBAdACQAbACAjAGQASgUAHgeQAGgagGgVQgFgXgOgQQgNgQgVgFg");
	this.shape_20.setTransform(-8.2,-2.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgOBIQgdgCgTABQgJgQgDgTQgDgTAEgTQAGgaAPgTQAOgSAUgJQASgIAUAFQAVAFANAQQAOAQAFAXQAGAVgGAaQgHAegSAUQgjgGgbgCg");
	this.shape_21.setTransform(-8.2,-2.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgUAJIACgQQALgFAHADQANADAIAMQgLgEgKACQgJAAgLAHIAAgCg");
	this.shape_22.setTransform(12.3,-5.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AAZA4QAGgcgBgYQgCgWgJgQQgJgRgNgEQgMgDgMAGQgGAhAMAaQAMAcAZARQAEACAEADQAAAAABAAQAAgBAAAAg");
	this.shape_23.setTransform(12.9,-1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1979AF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_24.setTransform(15.4,4.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AAQA0QgZgRgMgcQgMgaAGghQAMgGAMADQANAFAJAQQAJAQACAWQABAYgGAcIgBABIgIgFg");
	this.shape_25.setTransform(12.9,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEALQgDgCgBgEQgBgFACgDQACgFAFgCQABgCAEACQAEACAAAEQABAEgCAEQgCAEgEACIgDACIgDgBg");
	this.shape_26.setTransform(11.4,10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMAeQgJgFgBgLQgCgLAGgLQAGgNAKgGQAHgGAJAEQAIAEACAMQABALgGALQgGANgJAGQgEAEgGAAQgDAAgDgCg");
	this.shape_27.setTransform(11.4,8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5E2BE").s().p("AghA0QgCgOAAgQQABgQAEgOIAFgRQAJgZAOgRQANgRAPgFQgRASgJAeIgFAQQgGAZACAXQABAXAIAQQAIAPANADQAHACAIgCQgFAGgHAEQgagXgfgPg");
	this.shape_28.setTransform(8.2,2.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AA2ASQAGgagBgYQgCgYgJgQQgJgQgPgEQgPgEgOAKQgPAKgNAUQgMAUgHAcQgJAgAFAcQAiAQAeAaQAPgKAMgUQAMgUAHgag");
	this.shape_29.setTransform(10,2.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag4A0QgFgcAJggQAHgcAMgUQANgUAPgKQAOgKAPAEQAPAEAJAQQAJAQACAYQABAYgGAaQgHAagMAUQgMAUgPAKQgegagigQg");
	this.shape_30.setTransform(10,2.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AguAoQAGgZANgSQANgUAPgLQAXgOAWAGIACAAQgZANgRAWQgOAUgJAcQgPADgPABIABgFg");
	this.shape_31.setTransform(-10,-8.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("ABDgVQgOgTgUgGQgUgFgSAKQgUAJgQAWQgPATgIAeQgBAFgBAFQAcgBAcgJQAXgKAUgPQAUgOAOgVg");
	this.shape_32.setTransform(-8.6,-8.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AhAAnQAIgeAPgTQAQgWAUgJQASgKAUAFQAUAGAOATQgOAVgUAOQgUAPgXAKQgcAJgcABIACgKg");
	this.shape_33.setTransform(-8.6,-8.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgFAOQgEgCgBgGQgBgFADgFQADgFAEgEQADgCAEACQAEACABAGQABAFgCAFQgDAFgFAEIgDABIgEgBg");
	this.shape_34.setTransform(-3.4,3.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgPAkQgKgGgDgNQgCgOAGgOQAHgPAMgHQAKgHAKAFQALAGADAOQACAOgHANQgHAPgLAHQgGAEgFAAQgFAAgFgCg");
	this.shape_35.setTransform(-3.8,1.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5E2BE").s().p("AgsAtQgCgWAGgXQAHgaANgUQAOgUAPgJQASgKASADQgVAFgSAVQgPAUgIAgQgHAYAEAYQADAXALAQQgRAAgMABQgIgRgBgWg");
	this.shape_36.setTransform(-10.5,-4.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("ABLgUQgEgagMgTQgNgTgVgGQgUgFgSAKQgUAKgPAVQgQAVgHAeQgGAWACAXQABAWAJASQATgBAdACQAbACAiAHQAUgWAJgjQAHgegFgZg");
	this.shape_37.setTransform(-7.8,-3.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRBTQgdgCgTABQgJgSgBgWQgCgXAGgWQAHgeAQgVQAPgVAUgKQASgKAUAFQAVAGANATQAMATAEAaQAFAZgHAeQgJAjgUAWQgigHgbgCg");
	this.shape_38.setTransform(-7.8,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},15).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-13,33.1,26.1);


(lib.blingking3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAOQgEgBgDgEQgCgFAAgEQABgGADgDQADgFADABQAEABACAEQADAFAAADQgBAHgDADQgDAEgDAAIAAAAg");
	this.shape.setTransform(8.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAlQgKgCgGgLQgGgLABgOQACgQAIgKQAHgJAJAAQAKACAGALQAGALgCAOQgCAQgHAJQgHAKgIAAIgBAAg");
	this.shape_1.setTransform(7.8,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAARQgGAAgDgGQgDgFAAgGQABgIAEgEQAEgFAEAAQAGABADAGQADAFgBAFQAAAJgEAEQgEAFgEAAIAAgBg");
	this.shape_2.setTransform(-10.1,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAtQgOgCgIgOQgIgOABgRQACgTALgMQALgMAMABQAOACAIAOQAIANgBASQgCASgLANQgKALgMAAIgBAAg");
	this.shape_3.setTransform(-10.8,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5E2BE").s().p("AAGBFIgNAAQgGgLgDgMQgEgMgBgPIAAgQQgBgXAIgUQAHgUAKgJQgIAWABAeIAAAQQACAOACAPQACAPAGALQAFALAJAFIgQgBg");
	this.shape_4.setTransform(7.7,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AARhIQgMgLgMABQgOACgLAOQgKANgFAWQgEAWACAYQADAfALAXQAOgEAVAEQAWADAXALQADgJABgOQACgNAAgPQAAgPgBgMQgDgYgJgVQgIgUgNgMg");
	this.shape_5.setTransform(10.2,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABFQgVgEgOAEQgLgXgDgfQgCgYAEgWQAFgWAKgNQALgOAOgCQAMgBAMALQANAMAIAUQAJAVADAYIABAbQAAAPgCANQgBAOgDAJQgXgLgWgDg");
	this.shape_6.setTransform(10.2,-0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E2BE").s().p("AgcASQgDgZAHgXQAHgXAPgPQAMgPATgDQgUAMgJAZQgKAYADAeQACAaAIATQAKATARAKIgeAIQgYgZgEgsg");
	this.shape_7.setTransform(-12,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ABKAEQgHgwgXgYQgXgZgeADQgVADgPAPQgQAPgIAYQgHAYACAbQACAXAJASQAIATANANQARgEAagHQAbgGAkgFQAHgOACgQQADgRgCgSg");
	this.shape_8.setTransform(-7.8,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/A7QgJgSgCgXQgCgbAHgYQAIgYAQgPQAPgPAVgDQAegDAXAZQAXAYAHAwQACASgDARQgCAQgHAOQgkAFgbAGIgrALQgNgNgIgTg");
	this.shape_9.setTransform(-7.8,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAGBFIgOAAQgFgLgDgMQgDgMgCgPIgBgPQAAgYAHgUQAIgTAKgKQgIAWAAAeIABAQQABAOADAPQACAPAGALQAGALAJAFIgRgBg");
	this.shape_10.setTransform(7.7,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AARhHQgMgMgMABQgOACgLAOQgKANgFAWQgEAWACAYQADAfALAXQAOgEAVAEQAWADAXALQADgJABgNQACgOAAgPQAAgPgCgMQgCgYgJgVQgIgUgNgLg");
	this.shape_11.setTransform(10.2,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AAABFQgVgEgOAEQgLgXgDgfQgCgYAEgWQAFgWAKgNQALgOAOgCQAMgBAMAMQANALAIAUQAJAVACAYQACAMAAAPIgCAdQgBANgDAJQgXgLgWgDg");
	this.shape_12.setTransform(10.2,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgcASQgDgZAHgXQAHgXAPgPQAMgPATgDQgUAMgJAZQgKAYADAeQACAaAIATQAKATARAKIgeAIQgYgZgEgsg");
	this.shape_13.setTransform(-12,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgJhaQgUADgQAPQgQAPgHAYQgIAYACAbQADAXAIASQAIATANANQARgEAagHQAbgGAkgFQAHgOACgQQADgRgCgSQgHgwgXgZQgXgYgeADg");
	this.shape_14.setTransform(-7.8,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("Ag/A7QgIgSgDgXQgCgbAIgYQAHgYAQgPQAQgPAUgDQAegDAXAYQAXAZAHAwQACASgDARQgCAQgHAOQgkAFgbAGIgrALQgNgNgIgTg");
	this.shape_15.setTransform(-7.8,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E5E2BE").s().p("AAGBNIgNgBQgGgMgDgNQgEgNgBgQIAAgSQgBgbAIgVQAHgWAKgKQgIAXABAiIAAARQACAQACARQACARAGAMQAFAMAJAFIgQAAg");
	this.shape_16.setTransform(7.7,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AARhQQgMgMgMABQgOACgLAPQgKAPgFAYQgEAZACAbQADAiALAZQAOgEAVAEQAWAEAXAMQADgKABgPQACgPAAgQQAAgRgBgNQgDgbgJgXQgIgXgNgNg");
	this.shape_17.setTransform(10.2,-1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAABMQgVgEgOAEQgLgZgDgiQgCgbAEgZQAFgYAKgPQALgPAOgCQAMgBAMAMQANANAIAXQAJAXADAbIABAeQAAAQgCAPQgBAPgDAKQgXgMgWgEg");
	this.shape_18.setTransform(10.2,-1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5E2BE").s().p("AgcAVQgDgeAHgaQAHgbAPgRQAMgRATgEQgUAOgJAcQgKAdADAjQACAeAIAWQAKAVARANQgSAEgMAFQgYgdgEgzg");
	this.shape_19.setTransform(-12,-1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("ABKAEQgHg4gXgbQgXgcgeADQgVADgPARQgQASgIAcQgHAcACAfQACAaAJAWQAIAWANAPQARgFAagIQAbgHAkgGQAHgQACgTQADgTgCgWg");
	this.shape_20.setTransform(-7.8,-1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag/BFQgJgWgCgaQgCgfAHgcQAIgcAQgSQAPgRAVgDQAegDAXAcQAXAbAHA4QACAWgDATQgCATgHAQQgkAGgbAHIgrANQgNgPgIgWg");
	this.shape_21.setTransform(-7.8,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},5).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-10.2,32.7,20.4);


(lib.fishLayer = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.water2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AliMlQhDhWhHiSQhHiegbg5Qh1j5gkjAQg3kuCihjQCXhcCWHmQBKDxAtEGQgSlOAKlPQAUqiCKgSQBSgLBVBhQBXBkAsClQAxC5gXDOQgUC0hKCrQBDh/BShpQDpktCcDQQCACsinFCQhyDgigCSQieCQjrBkQg1AWgzAAQiCAAh0iRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.8,-95,151.6,190.1);


(lib.hook = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5BXQgdgXgEgkIAAgvQgOgGgCgOIgEAAIAAg7IAUAAIAAgMIAVAAIAAAMIASAAIAAA7IgEAAQgDAMgKAHIAAAsQADAcAWATQAWATAeABQAhgBAWgTQAWgTADgcIADgEQADgCAEgBQAFABADACIAEAEQgBAYgOAUQgOATgXAMQgWALgcABQgmgBgcgXg");
	this.shape.setTransform(19.8,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.6,8.9,22.4,22.3);


(lib.circle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjfDfQhchdAAiCQAAiCBchdQBdhcCCAAQCCAABdBcQBdBdAACCQAACChdBdQhdBdiCAAQiCAAhdhdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.6,-31.6,63.3,63.3);


(lib.fish3_in_bucket_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhMg6QgSAJgIAPQgJASADATQACAVALAWQALAVAQARQARASAUAKQAUAJATgCQAQgCASgGQASgGAQgLQAQgKAMgNQAMgOAFgPQAEgQgGgSQgCgGgEgEQgJgQgQgMQgRgMgVgJQgVgJgWgEQgUgFgVABQgSABgOAFAh0h3QgBABABAGQABABAAABQAAACAAACQAAAFABAGQAAAKgBANQgCANgFAM");
	this.shape.setTransform(24.9,-30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ACsgQQgDgDgDgDQgPgPgagLQgigOgbgLQgbgLgRgJQgRgKgGgJQgHgKgLgYQgKgZgJglQgJgmgEgyQgBAAgDgCQgEgCgFAAQgFAAgGAEQgHAEgFANIgEAMQgEANgDAVQgEAWAAAdQAAAaAGAeQAAADABAEQAAAAgBACIAAAAQgBADgBACQgBADgBAAQgBADgDACQgCADgCACQgEAHgCAHQgCAHgDAHQgDAGgIAEQgDACgFAFQgEAFgFALQgGALgFASQgFARgDAcQgDAUgBAVQABAAABgBQAEgCADgCIAFgCAisBNQgBABgBAAQgHAFgGAHQgGAHgEALQgEALACAOIACABQACAAAFgDQAFgDAJgFQABgBABAAQgBAPAAAQQABAWABAXQACAkAEAkQABAJABAJQABAFABAFAiuB6QABgBABAAQAHgEALgDACrEtQABgFABgFQAKgsAGgsQAAgBABgBQAKhIAAhK");
	this.shape_1.setTransform(23.2,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E3502").s().p("AAAAcQgNAAgLgEQgLgEgGgGQgHgHAAgHQAAgHAHgGQAHgHALgEQALgEAMABQAOAAALAEQALAEAGAGQAHAHAAAGIgBAGQgJAAgGAEQgHAEAAAFIABAFIgDABQgKADgOAAIAAAAg");
	this.shape_2.setTransform(23.3,-33.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACIBBIgFAAIgHgBQgIgDgGgEIgFgCIgBgBIABgBQAHgJABgKQABgLgCgJQgCgJgDgFIAAAAIgDgFIADgBIACAAIAKgEIALgFQAFgDACABQACACABADIAAADQAIAJADAMQAEALABAKIABAPIgBAGQgFAJgJACIgGAAIAAAAgAhBAoQgSAAgPgFIgKgDQgOgFgLgJQgNgKgJgMIgBgDQACgOAFgJQAGgKAHgGIAMgJIAFgDIAGgCQANgEAPAAQATgBAUAEQAUADASAGQARAGANAIQAOAHAGAIQgCASgLAKQgKANgQAIQgOAIgSADQgPADgQAAIgFAAgAgeAJQAHADAKABQALAAAEgEQAIgEAAgFQAAgFgHgEQgFgEgKgBIgDAAIACgFQAAgIgHgHQgGgHgLgDQgLgFgOAAQgOAAgLAEQgMAEgGAGQgHAHAAAIQAAAIAGAHQAHAFALADQALAEAOAAQAOAAALgDIADgBQABADAEADg");
	this.shape_3.setTransform(29.7,-31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBWQgUgJgRgSQgQgRgLgWQgLgUgDgVQgCgVAJgRQAHgPASgJIgMAIQgHAHgFAJQgGAKgCAOIACADQgBAMAEAOQAFARALASQALATAQAOQAQAPASAIQASAIAQgCQAMgBAOgEQgWgFgSgMQgUgNgPgSQgNgPgGgTIALADQAOAFASAAQASABAQgEQASgDAQgGQAQgIAKgNQALgNACgRQgGgIgOgIQgNgHgSgHQgTgGgSgDQgUgDgTABQgPAAgNAEQAOgFASAAQAUgBAVAEQAWAFAVAIQAVAJAQAMQARANAJAPIAGANQAGAPgFAQQgEAQgMANQgMAOgQAKQgRAKgSAHQgRAGgRACIgEAAQgRAAgRgIgAAbgOQgLAAgGgEQgEgCgCgEIgBgEQAAgGAHgEQAGgDAJgBIACAAQAKABAHAEQAHAEAAAFQAAAHgHAEQgHADgKAAIAAAAg");
	this.shape_4.setTransform(25.6,-28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1E8DA").s().p("AAIA4QgQgIgPgPQgQgPgLgSQgMgQgFgUQgDgNAAgMQAIANAOALQAKAIAOAFQAHATANAOQAMASAUAMQAUAMAXAFQgOAFgNABIgGAAQgPAAgPgGg");
	this.shape_5.setTransform(21.2,-25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C5B1D").s().p("AhTEqIgCgKIgBgNQgFgngCgmIgBgqIAAgjIgCABIgCABIgOAIQgFADgCAAIgBgBQgCgOADgLQAEgLAGgHQAGgHAHgFIACgBIACgBIAEgnQAEgeAFgRQAFgSAFgLQAFgKAFgEQAEgFACgBQAIgEAEgGQADgGACgIQACgHAEgHQADgGAFgEIAAAAIADgGIACgGIAAgBQgHggAAgdQABgcADgWQADgWAEgMIAEgNIAFgKQAEgFADgDQAEgCAGACQAHADACAHIgBAEIgBAEIgBgIIAAAKQgEgHgDABQgEAAgDAGIgFANIgEANIgCAIIgDAZIgBAbQABAOACAJQAFATADAPIAIAaQAEAMgCAMQgBAMgKANQgCAHgFADIgJAHIgJAIQgKAMgGAOQgHAMgDAPQgDAPgCAOQgEBMABBBIAAAIQABAvADArIABAKgAheB5QAIgEAKgDQgKADgIAEgAhVBIIgHAEIAHgEIAFgCgAgUhPQgBAMgFANQAFgNABgMIABgTIAAgEIAAgLIAAALIAAAEIgBATgABTCoQgJgBgLgHQgTgNgKgMQgKgLgDgIIgEgHIAHAFIARANQAKAIAOAGQAOAHAOACQAPACAOgEIgDADIgHAIQgFAFgHADQgFACgGAAIgGgBg");
	this.shape_6.setTransform(15.4,-30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#638C3B").s().p("ABCEmIACgKIAFgXIAOhDIAHgtQAHg0ABgsIgBgPIAFACQAGAEAIADIAHABQAABGgKBMQgFAggGAgIgGAaIgCAKgABfANQgHgPgLgPIgXgiIABAAQAYALAPAOIAJAJIAAABQADAGACAJQACAHgBALQgBAKgHAJQgCgNgEgKgAhEhrQgEgBgIgHQgIgGgLgRQgJgOgFgUQgGgUgDgVIgDgnIgBgdIAAgCIAAgKIABAIQAGAsAHAfQAJAiAIAVQAJAUAHALQAHALAEAEIAEADg");
	this.shape_7.setTransform(30.1,-29.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#497028").s().p("ACbEtIACgKIAFgaQAGghAFgfQALhMAAhGIAEAAQAABKgLBIIAAACQgHAsgJAsIgCAKgAiQEqIgBgKQgEgrAAgvIgBgIQgBhCAFhLQABgOADgPQAEgPAGgMQAGgPAKgLIAJgIIAKgHQAEgDAFgHQAJgOACgLQABgMgDgMIgIgaQgGgPgFgTQgCgKAAgNIABgbIACgZIACgIIAFgNIAGgNQADgGAEAAQAEgBADAHIAAACIABAdIAEAnQADAVAFAUQAGAUAJAOQAKARAIAGQAIAHAFABIAEABIgEgDQgFgEgHgLQgHgLgIgUQgJgVgIgiQgIgfgGgsIABgEIABgEQgCgHgGgDQgGgDgFADQgFADgDAFIgGAKIgEANQgDAMgEAWQgDAVAAAdQAAAdAGAgIABABIgDAGIAAgEIAAAEIgCAGIgBAAQgFAEgDAGQgEAHgCAHQgCAIgDAGQgDAGgIAEQgDABgEAFQgEAEgFAKQgGALgFASQgFARgEAeIgEAnIgCABIAFgpQADgcAFgRQAFgSAFgLQAFgLAFgFQAFgFADgCQAHgEAEgGQADgHACgHQACgHAEgHIAEgFIAEgFIABgDIACgFIABAAIABgCIgCgHQgFgeAAgaQAAgdAEgWQADgVAEgNIADgMQAGgNAGgEQAGgEAGAAQAFAAAEACIADACQAEAyAKAmQAJAlAKAZQAKAYAIAKQAHAJAQAKQARAJAbALIA9AZQAaALAPAPIAGAGIgDABIADAFIgKgJQgOgOgYgLIgBAAIAWAiQALANAHARQAFAKABANIgBABIACABIAAAPQAAAsgIA0IgHAtIgNBDIgFAXIgDAKgAhEB0QAEAIAKALQAKAMASANQAMAHAJABQAHABAHgCQAHgDAFgFIAIgIIACgDQgOAEgOgCQgNgDgOgGQgNgGgLgIIgRgNIgGgFIADAHgAgdhLQgSABgOAEIgFACIgFADQgTAJgHAPQgJARADAWQACATALAVQALAWAQARQARASAUAJQAUAKATgCQAQgCASgGQARgHARgKQAQgKAMgOQAMgNAFgPQAEgQgGgSIgGgLQgJgPgQgMQgRgNgVgIQgVgJgWgEQgRgEgRAAIgHAAgAivEqIgCgKIgCgSQgEgkgCgkIgCgtIAAgfIACgBIAAAjIACAqQACAmAEAnIACANIABAKgAhuhxIAAAAg");
	this.shape_8.setTransform(24.4,-30);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.2,-61.1,43.3,62.3);


(lib.fish3_in_bucket_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AilFKQACggAEggQAKhRARhQQAVhhAchcQACgGADgLQADgLAEgOQAFgOAFgOQADgGADgGQgOgNgRgRQgRgRgQgUQgPgUgKgVQgKgVABgVQANgDALAFQAMAFAKAJQALAIAJAJQAOAMALAHQAKAHAGADIAGADQAAgBAFgHQAFgHAIgKQAJgLAJgLQAHgLAIgHAAblIQAAAAABAAQAIgDAEAJQAFAKgCAUQgCATgMAdQgMAcgYAiQABABAAAAQAGAOAJAVQAJAWALAbQALAbALAcQALAcAJAZQAKAaAIAVQAHAUAFAMQAUA2ATA4QAGARAFARQAIAaAHAa");
	this.shape.setTransform(18.6,-31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C5B1D").s().p("AAxEWQgOg6gQg1IgghqIgjhpQgQg2gRg6IAHAOIATAvIAVA1IAUAxIAOAqIAQAuQAUAzASA2IAPAmIAPA0IAXAgIgDAEQg1gogCgIgAhpirQgCgIABgHIAAgCIABgFIABgFQAEgNAIgNIAPgaQAIgNAFgNQADgFAAgHQABgHgDgGQgCgGgEgFIAAAAQAJgKAHgCIAAAAQAIgCAEAJQAFAKgCATQgCAUgMAdQgMAbgZAiIgCACIAAAAIgOAFg");
	this.shape_1.setTransform(26.8,-32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#638C3B").s().p("AgXAaQAKguAMgwQALgwAOgvIADgMIAHgYIAKgdIAJgTIAEgBQgHAMgDANIgXB5IgWB+QgIBBgJBBQgFAugEAtIggAEQAIhpAZh2g");
	this.shape_2.setTransform(8.1,-23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#497028").s().p("AipEKQALhRARhQQAUhhAchcIAFgRIAIgZIAJgcIAGgMIgfgeQgRgRgQgUQgPgUgKgVQgKgVABgVQANgDALAFQAMAFAKAJIAUARQAOAMALAHIAQAKIAGADIAFgIIAOgRIARgWQAJgLAHgHQAEAFACAGQACAGAAAHQAAAHgDAFQgFANgGANIgQAaQgHANgEANIgCAFIAAAEIgBADQAAAHABAIIAAAAIAPgFIAAAAIABgCQAXgiAMgcQAMgcACgUQACgUgEgJQgFgJgHACQAIgDAEAJQAFAKgCAUQgCATgMAdQgMAcgYAiIABABIAQAjIATAxIAWA3IAUA1IASAvIAMAgQAUA2ATA4IALAiIgOgmQgTg2gTgzIgRguIgPgrIgUgwIgVg1IgSgvIgGgOQAOA6ARA1IAjBqIAiBpQAQA2AOA6QACAIA0AnIk7AEQAEgsAGgvQAIhAALhCIAVh+IAXh5QAEgNAHgMIgFACIgIATIgKAcIgHAZIgDALQgPAwgMAtQgMAxgLAvQgYB3gJBoIgEABIAGhAg");
	this.shape_3.setTransform(19.5,-31.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-65.5,36.7,68.1);


(lib.fish2_in_bucket_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F6E87").s().p("AgPAAQAHgIAHgEQAGgEAFgCIAGgBIABAAIAEACQADACADAIQgQADgMAFQgPAHgKAMQAEgNAHgHg");
	this.shape.setTransform(6.8,-13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAaAXQACAAAAgCQADgDABgIQABgHAAgIQgBgJgCgJQgDgIgDgDQgDgEgDAAIgCAAQgBAAgGACQgGABgFAFQgIAEgHAJQgIAIgEANQgEAOACAVQAEgDAJgDQAJgDAKgDQAMgEANAAg");
	this.shape_1.setTransform(6.8,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#167FA3").s().p("AgdAEQAEgMAIgJQAHgIAIgFQAFgFAGgBIAHgCIACAAQADABADADQADADADAJQACAIABAKQAAAHgBAIQgBAHgDAEQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgNABgMADIgTAGIgNAGQgCgVAEgOg");
	this.shape_2.setTransform(6.8,-12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAbAZQgQAAgMAFQgOAEgJAEQgJAEAAAAQgCgXAEgPQAEgNAIgKQAIgJAIgFQAHgFAFgBIAGgCQABAAACAAQADABAEAEQAEADADAKQADAKAAAMQAAAJgCAIQgCAIgEABg");
	this.shape_3.setTransform(6.8,-12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#167FA3").s().p("AgfAEQAEgOAIgIQAIgKAIgFQAHgEAFgCIAGgCIADAAQADABAEAEQAEADADAKQADAKAAAMQAAAJgCAIQgCAIgEABQgQAAgMAEQgOAFgJADIgJAFQgCgXAEgPg");
	this.shape_4.setTransform(6.8,-12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AABhRQgBAKAEAKQAGALAMAJQANAJARAFQARAEAPgBQAPgBALgGQAKgGADgLQADgKgGgLQgFgLgNgJQgMgJgRgFQgRgFgPACQgMAAgIAEAh7jCIAAAAIAAAFQAAACAAADQAAAJAEAQQADAOAKARQACADACADQAMAVAaAWABSClQADALgDAHQgEAIgHACQgIACgIAAQgJAAgGgCQgGgBAAAAQAAAAgCgCQgBgBgCgHQgBgGACgOQABgNAGgYIAWgEQAAAAAFAHQAEAHAGAKQAFAKADAKg");
	this.shape_5.setTransform(19.1,-23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AB1grQgBgDgCgDQgKgRgPgNQgBAAgJgHQgJgHgOgLQgOgMgPgNQgPgOgKgOQgHgLgIgOQgIgOgJgOQgJgOgKgMQgJgMgMgHQgLgGgNAAQgOABgKAJQgKAIgHAMQgIAMgEAMQgFALgCAIIgCAIAici0QAAAAgEgDQgEgDgFgDQgGgDgFABQgEABgDAIQgCAIADAHQABAHAEAGQADAHABAGQACAGgDAGQgDAEgEAQQgEAQgDAYQgDAZAAAeQABAdAHAiQAHAjARAjQARAjAdAiQAAAAADARQADAQAFAdQABAGABAGACEDIIAEiPQAAgDAAgLQAAgLgBgPQgCgPgEgOACEDIIAAACIAAAIIgCA0ADEEGQgEgLgGgIQgJgOgLgJQgLgJgKgFQgIgEgFgC");
	this.shape_6.setTransform(22.4,-24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#635311").s().p("AgEAOQgJgDgGgFQgHgFgCgDQAEgJAMgCQAMgDANAEQAHACAHAEQACAEAAACIgFAAQgGgCgFACQgFAAgBADQgBAEADADQADADAEACIgJABQgGAAgFgCg");
	this.shape_7.setTransform(24.3,-31.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAlQgRgFgMgIQgNgJgGgLQgFgJACgKIADgCIABgCQAEAJAKAIQAJAFAPAEQANAEAJgBQAMgBAIgFQAIgEADgGQACgKgGgJQgKgGgLgDQgOgFgOABQgMABgJAEIgBgCQAJgEALgBQAPgBAPAFQARAFANAJQAMAJAGALQAFAIgCALQgEAKgKAHQgLAGgPABIgGAAQgMAAgMgEgAAIABIgDgBQgEAAgBgCQgDgEABgEQABgEADgBQAFgBAGABIAGADIAEADQADAEgBAEQgBABgFACIgFAAIgGgBg");
	this.shape_8.setTransform(25.4,-29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeBtQgUgDgbgOQgagOgggcIAGAFIASANQAMAIAPAIQAQAIASAFQATAFATgBQALAAAJgGQAKgFAJgIQAIgHAHgIIAKgNIADgFIgCAHQgDAHgGAKQgGAKgKAJQgKAKgPAFQgIADgMAAIgNgBgAhRg0QAEgNAHgKQAHgLAIgHIANgLIAGgDIABABIABACQAJgEAMgBQANgBAOAFQAMADAKAGQAGAJgCAKQgDAIgIAEQgIAFgMABQgJABgOgEQgOgEgKgHQgJgIgEgJIgCACIgCACQgGAHgGAJQgFAKgDAKIgFASIgCAIQgCgPADgNgAANhEQAGACAFgBQAFgCABgDQABgEgEgEIgEgDQAAgFgCgEQgHgEgHgCQgNgEgMADQgMADgFAIQADAGAGAFQAHAFAJACQAKADAJgCIAEABgABogfIgFAAIgHgBIgDAAIgDgBIgDgEIgGgHQgEgFAAgDQAAgDAFAAIAGgCIAFgCIABgBIACgBIAKgIIALgKIAEgEQAHADAEAFQAEAGACAGIACAJIAAAEQgEAKgIAFQgIAEgJAAIgCAAIgBAAgAh0g8IgGgEIgDgCQAHACAEgDQAFgCACgEIACgEQgBALgDAEQgDACgCAAIgCAAg");
	this.shape_9.setTransform(24.9,-22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCB244").s().p("AAQEEIgBgJIgJgvIgDgTIAAgBIgBgBQgfgngRgpQgSgpgFgoQgFglACggQACghAFgVQAFgWADgHQAEgHgCgHQgBgHgEgHIgEgMQgCgGABgHQACgGACgBIACAAQAEABAFADIAJAHIADADIADADIABgIIACgIIAHgTQAEgLAHgLQAGgMAIgIQAJgIANgBIACAAQAKABAKAFQgPAIgNAPQgQAWgEAaQgHAaADAZQADAaAKAVIgGgJIgLgMIgIgLIgBgCIgBACQgJgRgEgNQgDgQAAgJIAAgBIAAgCIAAgCIAAACIAAACIAAABQAAAJADAQQAEANAJARQgLAqABApQABAqANApQANApAVAkQAYAjAiAaIgIgCIgHgBIgEABQgBABAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQgGAUAAATQAAAQADAQgAgWh0IAAAAg");
	this.shape_10.setTransform(10.6,-24.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#40A9C6").s().p("AAAAiIgOgBIgGgCIgBgCQgCgCgBgHQAJAHAJABQAGACAHgIQAHgHAAgKQAAgHgEgLQgEgKgGgKIABgBIAHAKIAJAQQAEAIADAIQACAKgDAGQgDAHgHACQgGACgHAAIAAgBg");
	this.shape_11.setTransform(24.7,-7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCEDAE").s().p("AgICkIAAg4QAAgrABgsIAFgbIAEgeQAAgMgBgKQgBgKgBgJIgBgBQADgQgBgRIADABIAHABQAIAegBAmIgGDNgAgRijQALALAGAOIgEADQgEgOgJgOg");
	this.shape_12.setTransform(33.9,-14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE473").s().p("ACbEGIAHjQQABgmgJgcIAFAAQAEAOABAPIACAaIAAAOIgECPIAAACIgBAIIgBA0gAgkEGQgDgQAAgQQAAgTAGgUQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAIAEgBIAHABIAIACQgigagYgkQgXgjgNgpQgNgpgBgqQgBgqALgpIABgCIABACIAIALIALAMIAIAJQgMgVgDgaQgDgZAHgaQAGgaAQgWQANgQAPgHQgKgGgKAAIgCAAQgNABgJAIQgKAIgGALQgHAMgEALIgHATIgCAIIgBAIIgDgDIAAgGIAAAGIgDgDIgJgHQgFgDgEgBIgCAAQgCABgCAGQgBAHACAGIAEAMQAEAHABAHQACAHgEAHQgDAHgFAWQgFAVgCAhQgCAgAFAlQAFAnASAqQARApAhAnIABABIAAABIADATIAJAuIABAKIgEAAIgCgMIgIgtIgDgRQgdgigRgjQgRgjgHgjQgHgigBgdQgBgeAEgZQADgYAEgQQAEgQACgEQADgGgBgGIgFgNIgFgNQgCgHACgIQACgIAFgBQAFgBAFADIAKAGIAEADIAAAAIACgIIAHgTQAEgMAIgMQAHgMAKgIQAKgJANgBQAOAAALAGQALAHAKAMQAKAMAJAOIAPAcQAIAOAJALQAKAOAPAOIAcAZIAYASIAJAHQAQANAKARIADAGIgDACIgBAAQgHgOgKgLQAIAOAEAOIgGABQgFAAABAEQAAADADAEIAGAIIAEAEIACAAQACAPgEAQIAAABQADAJABAKQABALAAALIgGAfIgEAcQgCAsAAAsIAAA4gAAlDQIAPABQAIABAIgDQAHgCAEgHQACgIgCgKQgDgLgGgKIgKgRIgEgHIgWAEQgGAYgCAOQgBANABAHQABAGACACIACABIAGACgAgWBvQAYAOAVADQAUACAPgFQAOgFALgJQAKgKAGgJQAGgKADgHIACgHIgDAFIgKANQgHAHgIAIQgJAIgKAFQgLAFgLABQgUAAgSgFQgQgFgQgIQgQgHgLgIIgSgOIgHgFQAhAdAaAOgAALhVIgLALQgIAHgHAKQgHAKgEANQgEANADAPIABgHIAFgSQAEgLAFgJQAGgJAGgHQgDAKAEAKQAGALAMAJQAMAJARAFQARAEAQgBQAPgBAKgGQALgGADgLQADgKgGgLQgGgLgMgJQgMgJgRgEQgRgFgQABQgLABgJADIAAgBIgGAEgAhDgtIAGAEQADABAEgEQACgDACgMIgCAEQgDAEgEADQgEADgHgDgAhqhsQANAVAaAWQgagWgNgVIgEgGIAEAGg");
	this.shape_13.setTransform(19.4,-24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F95B5").s().p("AAXAdIgCgGQgGgSgOgKQgLgLgUgFIABgHIAHADQAKAFALAJQAKAJAKAMQAHAIAFALg");
	this.shape_14.setTransform(38.7,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#167FA3").s().p("ABhA/QgEgLgHgIQgKgOgMgJQgLgJgKgFIgIgDIAAgDIANAGQAKAGALAJQALAJAJANQAGAJAEAKgAAiA/IABg0QAUAFAMALQAPAMAGARIACAHgAhJALIgOgCIgGgCIgCgBQgCgCgBgEQgBgGABgOQACgOAGgYIAVgEIAFAHIAKARQAGAKACALQADAKgDAHQgDAGgIADQgGACgHAAIgDAAgAhXAHIAOABQAIABAHgCQAHgCADgFQADgGgDgKQgCgJgFgJIgJgQIgGgKIgCABQAGAKAEAKQAFALAAAJQAAAKgIAHQgGAGgIgCQgJgBgJgFQABAFABACIACACIAGACg");
	this.shape_15.setTransform(32.1,-4.7);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-51.7,41.3,54.4);


(lib.fish2_in_bucket_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgDjBQAAgDgBgDQgCgEgEgEQgEgDgDgEQgLgNgHgOQgJgRgGgSQgDgIgCgKQgCgIgCgKQAAABAEAGQADAFAFAGQABACACACQAHAKAKAJQAJAJALAGQAIAGAMgBQALAAAKgHQAKgGAJgKQAIgJAGgJQABgBAAgBQAFgIAEgFQADgGAAgBQgDALgEAJQgFAPgGAOQgIAUgKATQgEAFgEAGQgEAGgCAFQgCAGABAGQAAABABABIgGgEIgLgGIgCgBIgPANQABgDAAgCgAhMEIIABgYQAChRAKhQQAKhPAThOQAKgwAPgvQACgFABgGQABgEACgFAAdjAQADAGACAIQAEANACANQADAOACAKQACALABAFQAOAzAOAyQAPAxAOAyQANAuAKAsQAKArAIAmQACAIABAIQAEAVAEATAiPE7QgDgHgBgGQgBgBgCgGQgCgHgCgJQAAgCgBgCQgBgHAAgHQABgIAFgFQAFgEAHACQAHACAIAEQAHAFAIAEQAHAEAHAAQALAAAHgBAhNE7IABgz");
	this.shape.setTransform(15.7,-31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F95B5").s().p("AACAhIgDgOIAAAAIgEgMIgDgMIAAgBQgBgIAAgGQABgHAEgDQACgCADAAIAFABIgCAaIABAIQAAAQAFAOg");
	this.shape_1.setTransform(1.2,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCB244").s().p("AAkECIgCgIIgIggIgCgIIgBgEIgDgLIgDgKIgBgEIgCgIIgEgTIgGgYIgEgYIgEgTIgCgHIgbhyQgNg6gJg5QgJg1gEg3IALAHQADAIADALIAGAaIAEAVIAEARIAQA7IARA7IAWBSQAMAtAKAqIASBQIAEASIAHAog");
	this.shape_2.setTransform(24,-25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCEDAE").s().p("AgdDoIAChLQAChQAKhOQAKhQAQhOIAIgiIALgmIgDANIgCAFQgTBFgGBGQgIBFgBBEQgBBBACBAIAAAJIAAAfg");
	this.shape_3.setTransform(11.4,-22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE473").s().p("ABxECIgHgoIgEgRIgShQQgKgrgMgsIgYhSIgRg7IgQg8IgEgQIgCgWIgGgaQgDgLgEgIIAGADIAAgBIAFAOIAEAaIAFAYIACAQIAdBlIAdBjQANAuAKArIASBSIADAPIAHAogAhbECIAAgfIAAgJQgChAABhBQABhGAIhDQAIhGAThFIACgFIADgNIgLAmIgIAiQgSBOgKBOQgKBQgCBQIgCBLIgFAAIACgyIABgZQABhQALhRQAKhOAShOQALgwAPgvIADgLIACgJIgBAEIARgMIACABQAEA2AJA2QAJA5ALA5IAbByIACAIIAFASIAFAZIAGAYIAFATIABAHIACAFIACAKIADAKIACAFIACAHIAIAgIABAIg");
	this.shape_4.setTransform(19.7,-25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#167FA3").s().p("AhfE7QgEgPgBgPIgBgLIACgaIgFgBQgEAAgDACQgEAEgBAGQAAAHABAIIAAAAIADAPIAEALIAAAAIAFAPIgCAAIgEgOIgDgGIgEgQIgBgFIAAgNQAAgIAFgFQAFgEAHACQAHACAIAEIAPAJQAIAEAGAAIATgBIgCAzgAAhjBQAAgDgBgDQgCgEgEgEIgHgHQgLgNgHgOQgGgRgGgRIgGgSIgDgSIAEAGIAHAMIADADQAGAKAJAJQAJAJALAGQALAGALAAQALgBAKgHQALgGAIgKQAIgJAGgJIABgBIAJgOIADgGIgHAUIgLAcQgIAUgKATIgIALQgEAGgCAGQgCAFABAGIABACIgGgDIgLgHIgCgBIgRANIABgFgAgUk3IAAAAIAAAAg");
	this.shape_5.setTransform(11.9,-31);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-63.5,33.5,65);


(lib.fish1_in_bucket_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A33128").s().p("AgDBEQgUgBgSgFQgQgEgMgIQgQglgKgmQgGgVgEgVIADgBIAIAhIAJAFQAKAEARAFQASAFAXACQAWADAdgEQAdgDAfgLIAGAqIAGAvIgJABIgZAEIgkADIgUABIgTgBg");
	this.shape.setTransform(14.9,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A33128").s().p("AgCBEQgVgBgTgFQgPgEgMgIQgPglgLgmQgGgVgFgVIAFgBIAHAhIAKAFQAJAEARAFQARAFAYACQAWADAdgEQAdgDAggLIAFAqIAGAvIgJABIgaAEIgkADIgTABIgSgBg");
	this.shape_1.setTransform(14.5,-19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAgQgTgGgQgMQgPgMgMgKQgLgMgFgIIgHgJQAaAhAZAOQAYARAXAEQAUAEATgEQASgEAQgJQAQgJALgJIANgLQgUAVgUAMQgYAOgXACIgHAAQgQAAgQgGg");
	this.shape_2.setTransform(14.8,-30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAEQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBACgCIAGgCQADgBADACQAAAAABAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAABQgBABAAAAQgDACgEABIAAAAQgCAAgDgCg");
	this.shape_3.setTransform(21.2,-42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A0707").s().p("AgPANQgHgEgCgHQAAgFAHgFQAGgGALgBQAJgBAHAEQAIAEABAHQABAFgHAFQgHAFgKACIgCAAQgIAAgHgDg");
	this.shape_4.setTransform(19.4,-42.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAWQgJgCgFgFQgGgFAAgHQgBgEAEgGQAFgGAIgEQAIgEAKgBQAIgBAJACQAIADAGAEQAFAFABAHQABAFgFAFQgEAGgIAEQgIAEgKABIgCAAQgIAAgHgBg");
	this.shape_5.setTransform(19.4,-42.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AACAgQgPABgOgCQgOgDgJgHQgJgGgBgJQgBgHAIgIQAHgIAOgGQANgGARgBQAPgCAOADQAPADAJAGQAJAGABAJQABAHgIAJQgHAIgOAGQgNAFgSACg");
	this.shape_6.setTransform(19.3,-42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAfQgOgDgJgHQgJgGgBgJQgBgHAIgIQAHgIAOgGQANgGARgBQAPgCAOADQAPADAJAGQAJAGABAJQABAHgIAJQgHAIgOAGQgNAFgSACIgKAAQgKAAgJgBg");
	this.shape_7.setTransform(19.3,-42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAXARQAEgNgCgKQgCgKgEgIIgEgGIggABQABAAABAGQACAHAAAJQABAIgDAKQgCAJgIAFQABAAAGADQAGACAJABQAHABAHgCQAJgDADgKg");
	this.shape_8.setTransform(30.4,-41.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7A1B16").s().p("AgDAfIgPgDIgHgDQAIgFACgJQADgKgBgIIgCgQQgBgGgBAAIAggBIAEAGQAEAIACAKQACAKgEANQgDAKgJADIgKABIgEAAg");
	this.shape_9.setTransform(30.4,-41.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#842824").s().p("AASCOQgOgKgMgOIgXgVIAAAAIgSgGIgIgSQgFgOgEgSQgEgSAAgWQABgVAGgYQAHgYASgZIABgCIgBgCQgFgNgBgKQAAgJACgCQAEAAAGAGQAGAHAHALIABACIAIgEIgBgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAEgGAHgHQAIgHALgGIAUgKIALgFQAMAAAJAHIgIAAQgLABgKAIQgbAbgPAjQgMAjgCAmQgCAkALAmQAJAlAWAfQALALALAJQgQgFgOgKg");
	this.shape_10.setTransform(8.8,-42.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AiCEqQgCgEACgFQgDgWAAgpQABgXABgeQAGhdAAgqQABgbAAgaQABgGABgHQABgLACgKQgBgBgFgLQgFgLgFgTQgGgTgBgZQgCgZAHgcQAHgcATgcQAAgBgBgFQgCgFgBgIQgCgHABgGQAAgGAEgCQAEgBAFADQAFAEAEAFQAFAGACAEQADAEAAAAQgCgEAFgGQAFgHAJgHQAJgGALgGQAKgGAJgEQAIgEADAAQAOAAAIAHQAJAHAGAMQAGALAFAOQAFANAFANQAFAMAHAJQAIAKAMAJQALAJANAKQAMAJALALQAKAKAHAMQAGAMAAAPQABAMAAAGQgBAGAAACIABACIgEATQgCALgCASQAAAGgBAHQAAAzgBA8QAAANAAANQAAAMAACw");
	this.shape_11.setTransform(15.5,-27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A33128").s().p("AB3EqIABAAIgOhBIASAzIAIASIgIAEIgDABIgCgJgAiDCwQAGhdAAgqIABg1IACgNIADgWIgGgLQgFgLgFgTQgGgTgBgZQgCgZAHgcQAHgcATgdIgBgFIgDgNQgCgHABgGQAAgGAEgCQAEgBAFADQAFAEAEAFIAHAKIADAEQgCgEAFgGQAFgHAJgHIAUgMIATgKQAIgEADAAQAOAAAIAHQAJAHAGAMQAGALAFAOIAKAaQAFAMAHAJQAIAKAMAJIAYASQAMAKALAKQAKALAHAMQAGAMAAAOIABATIgBAIIABACIgEATIgEAdIgBANIgBASIAAAFIAAAEIgDAAIAAgbIAAAAIABgNIADgZIAEgYIAAgHIAAgVQABgUgSgUQAGAXgFAYQgFAXgNAWQgIANgKAMIgMANIAAAAIAAAAIgBACIABgBIgBAHIACgIIAVgNIABAAIAHgFIADADIgCACIgGANIAAAAQgEALgBAMIgBAIQgCAFAGADIAJAEQgHAHgDAIQgHAOAGAOIgBAzQgBAIgSAMQhmknhrF7IACg1gAh+ALIACgXIgBA1IgEABIADgfgAh8gMIAAAAg");
	this.shape_12.setTransform(15.5,-28);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BA3B35").s().p("AB3DdIACgBIgBAJgAiFDWQgCgDACgGQgDgWABgpQBrl7BlEnQATgLAAgJIABgwIABgdQAEgHAGgIIgJgDIACgqIAAAAIAGgNIACgCIgDgDIgHAFIgBAAIgVANIgCAJIABgIIAAgBIAAAAIABAAIALgNQAKgLAIgOQAOgVAEgYQAFgXgGgXQASATAAAVIAAAUIAAAHIgEAYIgDAZIgBANIAAAAIgBAdIgBBsIAAAFIgFCaIgSgzIANBBIAAAAQh8APg/AAQg5AAgGgMg");
	this.shape_13.setTransform(15.8,-19.3);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-59.7,33.9,64.2);


(lib.fish1_in_bucket_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhtjIQAMgPAJgUQAJgVAGgXQAGgXAAgUQgNgBgKAGQgKAHgHAMQgGALgFANQgFANgDALQgEgKgHgKQgGgKgIgKQgJgJgJgGQgKgHgLgBQAAAPAEASQAEARAIARQAIARAMAOQAKANAMAJQABAQADAaQADAhAFAtQAFAtAGA0QAHA1AHA8QAIA7AJA+QAFAjADAeAC/EjQgCgJgCgKQgNg8gVgwQgUgwgYgmQgYgmgYgeQgZgbgVgYQgUgXgOgTQgigtgUgaQgUgagIgLIgIgJAiEjBQABAAADABAhwjFQACgCABgB");
	this.shape.setTransform(9.6,-32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3B35").s().p("AhXDDIgQh0IgOhrIgLhhIgIhOIgFgzIAAgBIAQgEIACACIAHAJIAEAFIACANQAGA7AIA8IADAXIABAAQAJgDALAAQALAAALABIARADIAHACIAXAcQgQgHgPgBQgPAAgMADQgMADgHADIgHAEIgBgDIAKBJIACANQANgCAPAAQAXAAAWAEQAVADATAFIAfAHIAKADIABABIAiA/IgEgCQgLgIgQgEQgSgFgVgBQgUgBgUABIgiADIgaAEIgJACIAGAuIAGAtQAggMAbgDQAdgDAYACQAXADASAEQARAFAJAFIAJAEIAIAhIgoAFQgQgCgSABQgXAAgWADIglAIIgdAGIgEABIABABIghAFIgIhCg");
	this.shape_1.setTransform(10.9,-26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#842824").s().p("ABwDMQgLgogPglIADACIghg/IgCgBIgLgQIg4hRIg3hNQgagmgYgoIgQgdIgBgNIgFgFIgGgJIgDgCIAAAAIABAAIAHAJIAdAlIA1BGQAPAUAXAZQAVAXAWAdQAYAdAXAkQAYAmAUAvQAUAwANA8IAEARIgcAEIgKgrg");
	this.shape_2.setTransform(13.3,-27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A33128").s().p("AhOECIgRh5IgOhxIgLhhIgIhOIgEgqIAEABIgEgBQgMgJgKgNQgMgOgIgRQgIgRgEgRQgEgSAAgPQALABAKAHQAJAGAJAJQAIAKAGAKIALAUIAIgYQAFgNAGgLQAHgMAKgHQAKgGANABQAAAUgGAXQgGAXgJAVQgJAUgMAPIAIAJIAcAlIA2BHQAOATAUAXQAVAYAZAbQAYAeAYAmQAYAmAUAwQAVAwANA8IAEATIgEAAIgEgRQgNg8gUgwQgUgvgYgmQgYglgYgeQgYgbgVgXQgUgZgPgUIg1hGIgdglIgIgJIADgDIgDADIAAAAIAAAAIgQAFIAAAAIAFAzIAIBOIALBfIAOBtIAQB1IAIBBIgEAAIgIhBgAgiE+IAEgBIAdgHIAlgHQAWgDAXgBQASgBAQACIiUATIgBgBgACTEGIgJgEQgJgEgRgGQgSgEgXgDQgYgCgdADQgbAEggALIgGgtIgGguIAJgCIAagEIAigDQAUgBAUABQAVACASAEQAPAEAMAIQAQAlALAoIAKArIgEAAgABRBuIgfgHQgTgEgXgEQgUgDgXgBQgPAAgNACIgCgNIgKhLIABADIAHgEQAHgDAMgBQAMgDAPAAQAPABAOAFIgVgaIgHgCIgRgDQgLgBgLAAQgLAAgJADIgBAAIgDgXQgIg7gGg8IAQAdQAYAoAaAmIA1BMIA6BSIALAQgAiEjBIAAAAg");
	this.shape_3.setTransform(9.6,-32.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-65.8,40.3,66.8);


(lib.fish_catched_layer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAEgNIgEAAAAEAOIgEgOQgCgEgBgG");
	this.shape.setTransform(0.7,-15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AI7liQgDAHgGAJIhEB9IgBADIgDADQghAug8gHIpvAAAI7liIgCARIgJA2IgKBiQAVABAEALIgBAJAI+lvIgDANAHnCPIAIgQQATgiAAADQAAADAGgSQAGgRAEghIAUjYAHBDfIgJBQQgQAfgxgEIkXgOAHBDfIgIASQgaA5g2ABIkVgLIglgDIkRgEAG8hUIgdFBAHnCPIArlHQgRgwgXBxIgpFWAjih8IJ2gBQA8AGAZgmIBHh+AAvFcIFrAUQA2gGABgwIAWirABUEgIglgCAo7iyQADAKAZAAIE9AAAoth8IgOg2IAAAAQAAAAgBgBQgBgKAUgSAoth8IgBAAIAAABIATB9IAAAAIAQBvIgQCIQgCAhAgAKIEbAPAjiEZIi8gIQhSAJgNhWIgejCAjih8IlLAAAjiFWIk0gRQglgKgDgtIAjkMAjiFWIERAFIAxABABgE5IlCgG");
	this.shape_1.setTransform(57.6,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900CC").s().p("ABFEIIAAgBIkQgGIAAgjIFBAHIAAACIEXAPQAyADAPgeIAKhQIAplWQAWhxASAvIgrFHIgXCrQgBAxg2AGgAB2EIIgxgBgAoADwQgkgJgEgtIAkkKIAQBsIgRCIQgCAiAgAKIEbAOIAAAjg");
	this.shape_2.setTransform(55.3,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336699").s().p("ABTEYIglgCIAlACIglgCIAAAAIkQgEIAAmWIJ2gBQA7AHAZgnIBHh9IgJBhIgVDYQgDAhgHASQgGARAAgDQAAgDgTAiIgHAQIArlHQgSgvgWBwIgpFWIgJASQgaA5g2ABgAGeDlIAdlBgAmfEKQhRAJgOhXIgdjAIgTh/IABAAIFKgBIAAGWg");
	this.shape_3.setTransform(57.6,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996699").s().p("Ao5A1QACAKAaAAIE9AAIAAArIlLABgAjgA/IJuAAQA9AGAhgtIACgDIABgDIBFh8IAGABIgJA3IhGB7QgZAng8gHIp2ABg");
	this.shape_4.setTransform(57.4,-4.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-19.2,117.1,75.8);


(lib.fadedBackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("A6tD6IAAnzMA1bAAAIAAHzg");
	this.shape.setTransform(171,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,342,50);


(lib.ripple2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#89D4E8").s().p("AmhERQhggnh3AFQh2AGiGhXIADhlIADh6IADhyIAChUIABggIAAgQQF0AhFzAoQA1AGBAADICBAHQBEADBCAJQBDAJA6ARQA7ASAsAeQAfAWAVAdIAoA5QAUAcAeAVQAOAJAcAHQAcAGAjAHQAiAGAhAJQAhAHAYALQAXAMAGAPQAMAsgOAcQgPAdghAQQgiASgrAHQgsAIguACQguABgngBIg+gBQhjgChaAIQhaAHhZALIiHAPQhsALhxAAIAAAAQhxAAhfgmg");
	this.shape.setTransform(-19.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#89D4E8").s().p("Ak5EuQg1gIgygRQgmgNgpgIQhDgNhMADQgZABgYgDQhUgIhYgnQgSgNgSgPIAAAAIAChBIABgoIABgwIAChPIAAgRIADhZIAAgMIABg4IABgbIAAgEIAAgGQADgWACgBIACgNQEkAZEjAeIBiAKIBXAJIAVACIBiAHIAOABIBrAHIAPABQAmAEAkAFIBAAKQBCAJBAARIAPAFQA3AQAlAZQAfAWAGAbIABABQAMAaANAZQAIAaAdAVIACABQANAIAcAGIABAAQAcAHAkAGIAdAFIApAIQAVAEAPAFIAXAKIALAGQAPAJAFALQAEANACALQAEAdgNAVQgEAHgGAHQgRASgZAMQgOAIgPAFIgnAOIggAHIgjAEQgRADgbgBIgnAAIhBgBQgtgBgtACQg3ACgzAEIhFAFIh0AKIgVABIh3ALIgtAEQg5AEg6ADIhFACIgGAAQg4AAg0gJg");
	this.shape_1.setTransform(-18.8,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#89D4E8").s().p("Ak0EvQg2gHg0gPQgogMgqgHQhHgLhOABQgZABgZgCQhZgIhagfQgRgPgQgRIAChDIABgqIABgyIAChRIAAgSIADhcIAAgNIACg6IABgbIAAgEIAAgHQAEgTAEAAIAFgMQEtAbEtAeIBlAKIBbAIIAVACIBmAIIAOABQA3ADA3AGIAQACQAnAFAkAIIBDALQBBAKBGASIAPAEQA8AQAjAXQAgAVgJAaIABABQAEAXAHAXQgFAYAdAVIABABQAOAIAdAGIABAAQAdAGAmAGIAdAEQAXADAUAEQAWAEAPAGIAYAKIAMAGQAPAIAGAMQAFAMACAMQAFAegQAVIgLANQgTASgaAMQgPAIgPAGQgXAJgGAHIgVAHQgKAEgOACQgIADghAAIgogBIhDgBQguAAgwACQg6ACgzAEIhHAFIh5AHIgVAAQg+ADg+AFIgvAFQg5AFg8ADQgkACgkAAIgNABQg2AAg0gIg");
	this.shape_2.setTransform(-17.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#89D4E8").s().p("AkuExQg4gHg3gNQgpgKgsgGQhKgLhPABQgaAAgagCQhdgHhcgXQgSgRgMgTIAAgBIABhFIABgrIACg0IAChUIAAgSIADhgIAAgMIACg8IAAgcIAAgEIAAgHQAHgRAGAAIAGgJQE3AbE3AgIBpAJIBeAIIAVACIBqAHIAOACQA5AEA4AIIAQACQAqAHAkAKIBEANQBCALBKARIAQAEQBBAQAiAVQAgAVgXAYIAAABQgEAVABAUQgRAXAbAUIACAAQANAJAfAGIABAAQAdAGAoAEIAfAEQAYADAUAEQAYADANAGIAaALIANAFQAPAIAHANQAFAMADANQAHAdgVAWQgFAHgHAGQgVASgZAMIggANQgXAKAEAIQgHAFgDAEQgDADgKADQABAFgmgBIgqgBIhFAAQgvAAgyACIhwAGIhKAEQg4AEhFAAIgXABQhAAAg/AFIgyAEQg6AGg+AEIhKADIgXAAQgzAAgxgFg");
	this.shape_3.setTransform(-16.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#89D4E8").s().p("AknEyQg7gGg5gLQgrgJgtgFQhNgJhRgBQgbAAgbgCQhhgHhfgPQgQgSgLgVIAAgBIAChIIABgsIACg2IAChWIAAgTIADhjIAAgMIACg+IABgdIAAgEIAAgIQAIgNAIAAIAJgIQFAAcFAAhIBtAJIBhAHIAWACIBtAIIAPACQA7AFA5AJIARADQAqAIAlAMQAaAHAtAJQBBALBPARIARAEQBGAPAgAUQAgAUglAXIAAABQgNASgFASQgdAVAaAUIACAAQANAJAgAGIACAAQAdAFAqAEIAgADQAZADAVADQAZAEANAFIAaALIAOAGQAQAIAHANQAHALADAOQAHAdgXAXQgGAGgIAGQgXASgaAMIggAOQgYAKAOAKQgCAFAEAEQADAEgFADQAJAGgrgBIgrAAIhIgBQgwABg0ACIh0AGIhLAEQg5ADhJgCIgXAAQhDgBhBAEIgzAEQg8AGhAAFIhMADIgjABQguAAgugEg");
	this.shape_4.setTransform(-15.4,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89D4E8").s().p("AkiEzQg8gEg7gKQgtgHgvgFQhPgIhTgBQgcAAgcgCIjHgOQgPgVgIgXIAAAAIABhKIABgtIACg4IAChZIABgVIADhlIAAgNIACg/IAAgeIAAgFIAAgIQALgKAJABIALgGQFLAcFJAiQA1AFA7AEIBlAHIAXABIBwAJIAOACQA+AGA6AKIARAEQAtAKAkAOQAZAIAwAKICWAcIARAEQBLAPAfATQAgATg0AUIAAABQgVAQgLAQQgqAUAaATIABAAQAOAJAhAFIACAAQAdAGAtADIAgADQAbABAUADQAbAEANAFIAcAMIANAGQARAHAJANQAGAMAEAOQAIAegaAWQgHAHgIAFQgaASgZAMIghAPQgZAKAYAMQADAEAKAFQAJAFAAADQASAHgwgBIgtAAIhKAAQgxAAg2ADIh4AGIhOAEQg4AChOgEIgYgBQhFgDhCAEIg1AEIh/ALQgoADgnABIgzABQgpAAgogCg");
	this.shape_5.setTransform(-14.2,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#89D4E8").s().p("AkbEzQg/gDg9gHIhfgKQhSgHhVgCIg6gCQhqgHhjABQgPgWgGgZIAAgBIAChMIABgvIACg6IAChbIABgVIADhpIAAgNIAChBIABgeIAAgFIAAgJQAMgHALABIAOgEQFUAdFTAiQA1AGA+ADIBoAHIAWABIB1AKIAPABQBAAHA7AMIASAEQAtAMAlAQQAYAJA0ALICaAdIASAEQBQAOAdARQAhAThDATIgBABQgcANgRAOQg3ASAZASIABABQAOAIAjAGIABAAQAeAFAvADIAhABQAcACAVACQAcAEAMAFIAdAMIAOAGQARAHAKAOQAIALAEAOQAJAfgeAXQgHAGgJAFQgcARgaAMIghAQQgaALAiANQAJAFAPAFQAQAFAFAEQAaAIg1gBIguAAIhMAAIhrADIh7AHIhQADQg5ABhSgFIgYgCQhJgFhDADQgbACgbADIiDAMQgpADgpABQgiACgiAAQgiAAghgCg");
	this.shape_6.setTransform(-13.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#89D4E8").s().p("AkVE0QhBgCg/gFIhjgIQhVgGhXgDIg7gDQhvgGhlAKQgOgZgDgbIAAgBQAAgfACgwIABgvIABg8IADheIABgWIADhsIAAgMIABhEIABgfIAAgFIAAgJQAOgEAOABIAPgCQFeAeFdAjQA2AFBAAEIBpAGIAZABQA8AEA8AGIAQACQBCAHA9AOIARAFQAwANAkASQAXAKA3AMQBAANBgARIATADQBVAPAbAPQAgAShRARIAAABQglALgYALQhDARAZASIAAAAQAOAJAlAFIACAAQAeAFAxACIAiABIAyADQAeADALAGIAeANIAPAFQASAHAKAOQAIALAFAPQAKAeghAYQgHAGgKAFQgeARgaAMIgjAQQgaALAsAPQANAFAXAGQAWAFAKAEQAhAKg6gBIgvgBIhOABQg0ABg6ADIh/AGIhSADQg5ABhWgIIgagCQhKgHhFADQgdABgbADIiHANIhUAFQgxADgxAAIgpgBg");
	this.shape_7.setTransform(-12,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#89D4E8").s().p("AkQE1QhCgBhCgDIhmgGIiwgIIg9gDQh0gGhnARQgNgagBgdIAAgBIAChRIABgxIACg+IAChhIABgWIADhvIAAgNIAChFIABggIAAgFIAAgJQAQgCAPACIASAAQFnAeFnAkQA3AGBCADIBtAGIAZABQA+ADA+AHIAQACQBEAIA+AQIASAFQAxAOAkAVQAWALA7ANQA/ANBmARIATADQBaAOAZAOQAhAShgAPIAAABQgtAIgeAJQhPAQAYARQAOAJAmAFIACAAQAeAEAzACIAjAAQAfABAVACQAfADALAFQAMAGATAHIAQAGQASAGALAPQAJALAGAPQAKAfgkAYQgIAGgKAFIg7AcIgkARQgaAMA2APQASAGAdAGQAdAGAOAFQAqALg/gCIgxAAIhQAAIhyAFIiCAGIhUADQg5AAhbgKIgagDQhNgJhGACQgeACgbADIiLAOQgrAEgsACQg/ADhBAAIgQAAg");
	this.shape_8.setTransform(-10.8,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#89D4E8").s().p("AvnD9IAChTIADhzIADh6IADhyIAChUIABggIAAgQQGNAhGLAoQA5AGBEADICKAHQBJADBGAJQBHAJA/ARQA+ASArAaQArAbDmAhQDmAii+AXQi9AYAgAUQAOAJApAFQApAFBPAAQBQAAAQAJQARAKAgAJQAgAKAOAmQAPAmg+AdIhiAtQgjARCCAYQCDAZhegDQhegCicAIQibAJhBgBQhAAAhzgPQhygQhgALIiOAPQh1ALh4AAQh5AAh5gEIjzgLQh5gHhpAbQgMgdABggg");
	this.shape_9.setTransform(-8.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B4E6FC").s().p("Aw4FLIAcrGIAwAEICDAMIDDATIDvAYIEIAdIEMAgQCFAQB6ARQB6ASBkARQBkARBFARQBFARAcAQQAmAWANAVQANAVgEATQgEATgOARQgOAQgQAQQgQAQgLAPQgLAPACAOQACAOAWANQAoAXAuAXIBYAsIBEAgQAbAMjiAyQwwBSnmAAQl5AAgYgxg");
	this.shape_10.setTransform(-1.9,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B4E6FC").s().p("Aw/E9IAaq6IAwAFICEAMIDEASIDxAZIEKAcIENAgQCGARB7ARQB6ARBcALQBbAMBSAPQBTAPAcAXQAmAdATAUQATAVgNAUIgcAmQgOAPgQARQgQAQgLAPQgLAPACAOQABANAWANQApAXA3AXQA3AWAmAVIA7AhQAXANjJAsQvYBbn4AAQmpAAhShBg");
	this.shape_11.setTransform(-1,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B4E6FC").s().p("AxHEvIAYqtIAxAEICFAMIDFATIDyAYIEMAdIEOAgQCIAQB7ASQB7ARBTAFQBTAFBfAOQBgAOAdAeQAlAjAZAUQAaAUgXAWQgYAVgNARQgPAQgQAQQgQAQgLAPQgLAPACAPQABANAWANQApAXBBAVQBAAWAhAUIAzAjQATANiwAnQuPBjoCAAQnQAAiPhQg");
	this.shape_12.setTransform(0,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B4E6FC").s().p("AxPEhIAYqhIAxAFICGAMIDGASID0AZIENAcIEQAgQCIARB8ARQB8ARBKgBQBLgBBsANQBuAMAdAlQAlAqAfATQAfAUggAXQghAWgOASQgOAPgRARQgQAQgLAPQgLAPACAOQABANAXANQAoAXBKAUQBJAUAdAWQAcAWAPAOQAOAOiWAhQtPBsoKAAQnuAAjPhgg");
	this.shape_13.setTransform(0.8,7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B4E6FC").s().p("AxWETIAWqUIAxAEICHAMIDHATID2AYIEOAdIESAgQCJAQB9ARQB8ASBCgHQBCgHB6ALQB7AKAeAtQAkAwAlATQAlATgqAYQgqAYgOARQgPAQgQAQQgRAQgLAPQgLAPACAOQACAOAWANQApAXBTATQBSATAYAWQAYAXALAOQALAOh9AcQsUB0oQAAQoHAAkQhvg");
	this.shape_14.setTransform(1.7,7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B4E6FC").s().p("AxeEFIAVqIIAxAEICIAMIDIATID3AYIEQAdIEUAgQCJAQB+ASQB9ARA5gOQA5gNCIAKQCIAJAfA0QAjA3ArASQArATgzAZQg0AZgOARQgOAQgRARQgQAPgMAPQgLAPACAPQABANAXANQApAXBcASQBcARAUAYQATAWAHAQQAGAPhkAWQrdB9oVAAQobAAlSh/g");
	this.shape_15.setTransform(2.7,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B4E6FC").s().p("AxmD3IAUp8IAyAFICIAMIDKASID4AZIERAcIEWAgQCKARB+ARQB/ARAwgTQAwgTCWAIQCVAIAgA6QAiA9AxASQAxATg9AaQg9AagOASQgPAPgQARQgRAQgLAPQgMAPACAOQACANAXANQApAXBlARQBlARAPAXQAPAYADAPQADAQhLARQqqCGoZAAQotAAmViPg");
	this.shape_16.setTransform(3.6,7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B4E6FC").s().p("AxuDpIATpvIAyAEICJAMIDLATID6AYIETAdIEXAgQCLAQB/ARQB/ASAogaQAogZCiAHQCjAGAgBCQAiBDA3ASQA3AShGAbQhHAcgOARQgPAQgRAQQgQAQgMAPQgLAPACAOQABAOAYANQApAXBuAPQBuAQALAYQAKAYgBAQQgBAQgyAMQp4COodAAQo8AAnZieg");
	this.shape_17.setTransform(4.5,7.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B4E6FC").s().p("Ax3DaIASpiIAyAEICKAMIDMATID7AYIEVAdIEYAgQCMAQCAARQCAASAfggQAfgfCwAFQCwAFAhBJQAiBJA9ASQA9ARhQAdQhRAdgOARQgPASgQAOQgRAQgMAPQgLAPACAOQABAOAYANQApAXB4AOQB3APAGAYQAFAZgEARQgFAQgZAGQpJCYofAAQpKAAodivg");
	this.shape_18.setTransform(5.5,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B4E6FC").s().p("AyBDMIAQpWIAyAFICLAMIDNASID9AZIEWAcIEaAgQCNARCBARQCAARAXglQAWgmC+AEQC9ADAiBQQAhBQBDARQBDARhaAeQhaAegOASQgPARgRAPQgRAQgLAPQgMAPACAOQACANAXANQAqAXCBAOQCAANABAZQABAagIARQgJARABAAQobCholAAQpTAAphi/g");
	this.shape_19.setTransform(6.7,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-31.5,216.3,76.2);


(lib.rectangle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnBGLIAAsVIODAAIAAMVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-39.5,90,79);


(lib.island2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B6A3A").s().p("AjrA+IAZgHIA9gQIBPgUQAqgKAigGQAkgFAVAAIAoAAIgEgJQgCgIgBgLQAAgLAHgJQAHgJATgDQAbgDAZAAQAYAAAPABIAQACIgJAEQgJAFgLALQgKAKgIAQQgGAQgDAOIgDAZIgBAKIgXACIg+AFIhUAFIhbAEIhWABQgoAAgZgEg");
	this.shape.setTransform(-97.2,-117.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E882").s().p("ABoARIjtgRQh3gHh5gGQAhgNAVAAIA3gBIBnAAICCAAQBEAABFACQBFACA6ADQA7ADAlAGQAmAFAHAHIgeAbQh5gDh3gIg");
	this.shape_1.setTransform(10.3,-104.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80A559").s().p("AAXAAQgXgZgVgLQgWgKgNgCIgNgBIBWgVQAVAhAMAgQALAfAFAWIAEAXQgWgvgZgYg");
	this.shape_2.setTransform(-70.7,-85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#80A559").s().p("AAXAAQgXgZgVgLQgWgKgNgCIgNgBIBWgVQAVAhAMAgQALAfAFAWIAEAXQgWgvgZgYg");
	this.shape_3.setTransform(-77.6,-85.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA1gCQgbgjgXgKQAKAVAGAWQAHAVADAVIAGAhIABANQgWgvgXgeQgYgbgWgPQgWgQgNgFIgOgGIBZgVIAMATIA3gNQAQAYAKAcQAKAaAGAZIAIApIADARQgZg1gbghg");
	this.shape_4.setTransform(-72.6,-81.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#80A559").s().p("AAVAIQgmgPgdgCQgdAAgQAEIgQAFIBahCQAbAUAXAWQAYAYAQASQARAWAJANIAJAOQgvgqgogRg");
	this.shape_5.setTransform(40.6,-91.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A2CE7A").s().p("AAVAYQglgRgdgBQgegBgQAEQgPAEgBACIA3hhQAdAUAbAbQAdAcAXAaIAmAtIAOATQgvgqgogRg");
	this.shape_6.setTransform(48.5,-95.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAtQgpgVgggHQgfgHgTAAIgSABIBahBIAXAQIAthGQAeAUAaAfQAbAeAUAdQAVAfALAWIAMAWQgjgggggXQgigWgcgKQgagNgUAAQAVATAQAUQASAXAOAVQAOAVAHAOIAIAOQgvgqgogWgAiYALIAAAAIAAAAg");
	this.shape_7.setTransform(48.1,-90.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#80A559").s().p("AAdAAQgdgfgZgMQgbgNgRgCIgQgCIBrgZQATAdAMAeQANAdAHAaQAHAZADAQIADAQQgbg5gegdg");
	this.shape_8.setTransform(-56.2,-84.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#80A559").s().p("AAdAAQgdgfgZgMQgbgNgRgCIgQgCIBrgZQATAdAMAeQANAdAHAaQAHAZADAQIADAQQgbg5gegdg");
	this.shape_9.setTransform(-64.5,-85.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABBgDQghgqgcgNQAMAZAIAcQAHAaAFAZIAGAoIACAQQgbg5gcgkQgeghgagTQgbgUgRgGIgQgHIBtgaQAHALAHANIBEgRQASAeANAhQANAhAHAeQAHAgADATIADAUQgehAghgpg");
	this.shape_10.setTransform(-58.4,-80.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B57F4E").s().p("AlCQBIA6luIASgqIAzhxIBMikQANgcASg2QASg2AVhHIAriXIApiiIAoicIAhiEIAXhcIAIgiIBOk+IBqh+IgwDVIAAEXIgIAeIgTBPIgaBsIgcB4IgYByQgLA2gGAkQgGAjACALQAGAYAKAUQALAUAFAVQAGAWgJAcIgPAtIgUA3IgVA2IgPAqIgGAQIgTB0IAJGpIgWAPQgVAPgnAUQglAVg0AQQg0ARg9AFIgYABQgzAAg2gOg");
	this.shape_11.setTransform(11.5,4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("ABzmPIB0ErIhXH0QAAAAgZgCQgYgDgpgFQgogFgvgIQgxgIgwgLQgxgLgpgOIgKhEIEWpBg");
	this.shape_12.setTransform(-39.2,68);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9B6A3A").s().p("AB3GOIhBgIQgogFgvgIQgxgIgwgLQgxgLgpgOIgKhEIEWpBIBDhXIB0ErIhXH0IgZgCg");
	this.shape_13.setTransform(-39.2,68);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C98F4B").s().p("AkWF8IAOg5QAOg5AWhnQAXhlAZiIQAZiJAXihQAWihAPivIF2gTIgJAvIgbCBIgqC8QgYBqgeB5QgeB4gjB6QgiB7glB1QgkB0gnBiQgnBigoBGg");
	this.shape_14.setTransform(2.3,-14.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B57F4E").s().p("AhtIxIANhlIASiVIAWi1IAVjDQAKhlAIhhQAJhhAFhWQADhVAAhCIBzAdIgDAmIgLBnQgHBBgLBVQgLBVgPBgQgOBggSBhQgSBjgUBdQgWBegZBPQgZBPgdA5IAFglg");
	this.shape_15.setTransform(-21.8,-28);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B57F4E").s().p("ACtrmIgbgEQgbgGgtgMQgsgNg1gVQg2gVg5ggQg4gegygsIHEBhIAdAvIgnarg");
	this.shape_16.setTransform(-104.8,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AEiqFQgCBVgDBsQgCBtgDB8QgDB7gDB+QgDCAgCB6QgDB7gDBrQgCBrgCBRQgCBSgBAuQgBAuAAABIokBqIBq+lIHEBgQAAAAAHAGQAHAGAHALQAHALABAPQAAAFgBAyQgBAxgCBUg");
	this.shape_17.setTransform(-110.1,12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9B6A3A").s().p("Ai7vSIHEBhIAHAFQAHAHAHAKQAHALABAPIgBA3IgDCFIgFDCIgFDnIgGD5IgFD7IgGDmIgEC8IgDCAIgBAvIokBqg");
	this.shape_18.setTransform(-110.1,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B57F4E").s().p("ADdhSQgFgKgJgDQgKgEgJAEQgKADgFAKQgiA9gvAeQgvAgg1AIQg3AIg8gIQg7gIg7gRIABh0Ig6hNIJVgdIgCAeIgEBUIgHB9IgLCeQgciLgaiOg");
	this.shape_19.setTransform(-53.6,-68.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B57F4E").s().p("AhBE4IgngJQgYgFgbgCQgagCgWADIADlDQAgAJAqgWQBfgvBUhEQBVhEBChdQgOAygPArQgQArgRAiIhnDKQgnBPgRAqIgaA4IgGAPIAABDIgQgEg");
	this.shape_20.setTransform(-59.2,69.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C98F4B").s().p("Ah5OyIgngJQgYgFgbgCQgagCgWADIAT7uIg6hNIJVgdIgCAwIgHCBQgFBSgIBrQgIBrgLB4QgMB3gQB7QgQB4gVByQgVBxgbBfQgaBeghBBIhlDMQgnBPgTAqIgaA4IgGAPIAABDIgQgEg");
	this.shape_21.setTransform(-53.6,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("ACVvhIhWeuQgBAAgPAEQgPAEgXAEQgVAEgaADQgZADgWgCQgWgCgMgIIgd+IQAAAAABgFQABgFAMgHQAMgHAfgHQAegHA7gFQA5gFBeAAg");
	this.shape_22.setTransform(-148.7,12.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9B6A3A").s().p("AhVPhQgWgCgMgIIgd+IIABgFQABgFAMgHQAMgHAfgHQAegHA7gFQA5gFBeAAIhWeuIgQAEIgmAIIgvAHIgeACIgRgBg");
	this.shape_23.setTransform(-148.7,12.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B9E882").s().p("ADUAlIAYgPQAKgHAOgHQgWgNgZgHQgYgHgQAAQhQgDhQAGQhOAHhQAJQhRAIhRAHQhSAHhSgCIAAgeIAdABIBMABQAvAAA4gCQA5gBA4gFQA4gEAvgJQAvgJA7gEQA9gEBBAAQBBgBA6AEQA7ADAsAGQArAGASAJQAAAOgPAFQgPAGgXACQgWABgWAAIgmgBQgSABgMAMQgNANgGANQgmgHgmgDg");
	this.shape_24.setTransform(-118.3,-127.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#80A559").s().p("AjcB9QgcgEgpgIIhagTIhggWIhWgUIg/gPIgYgGIllAnIAAjFQAxATA0AHQAzAHA0AAQA0ABA1gBQA1gBA1ADQgWAAgTAJQgSAJgRAMIgiAXQgRAKgSAEQA/AEA+ACQA+ABA9AHQA9AGA6ARQgEgKADgKQAEgMAAgMQAAgMgNgKQBwAIBvAMQBvALBtAIQBvAIBxgDQBxgDBzgVIgBAKQgBAKgHAIQBAAIA+ABQA/ACA9gCQA9gDA+AAQA9AABAAHIgZAYIgcABIhFAEIhcAFIheAEIhPAEIgsABQgPAAgZgGQgZgFgagIIgsgNIgTgGIqrAmIBNBOIgFAAQgJAAgVgDg");
	this.shape_25.setTransform(-64.9,-93.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A2CE7A").s().p("AkXD7QgcgEgqgIIhagTIhggWIhWgUIg/gPIgYgGIllAnIAAmdIAeABIBLAAQAvABA5gCQA4gCA4gEQA5gFAvgIQAvgJA9gEQA9gFBAAAQBBAAA7ADQA7ADArAGQAsAHASAIQgBAPgPAGQgPAHgWABQgWACgXgBIglgBQgPABgKAIQgLAJgIALIgLAUIgDAJIgaAFIhDAOIhZAUIhfAXQgvAMglALQglALgRAKQgQAKANAFQAMAFAiACQAiACAvgBIBkgDIBmgFIBZgFQA5gEAqAAQAqAAAfADQAgACAZAGQAaAFAZAHQAVAFAaAAQAcgCAegFQAegFAagGIAqgLIARgFIgLALQgJALgMAOQgLAPgGAQQgGAQAGAMQAJAKAcgJQAcgIAlgQIBIgeQAkgMAWgBIA3AAIBngBICDAAQBGABBEACQBFABA7ACQA6ADAlAFQAmAGAHAIIiRCHIgbACIhFADIhcAFIhfAFIhPADIgrACQgPgBgagFIgzgOIgsgNIgTgGIqrAnIBNBNIgGABQgJAAgTgEg");
	this.shape_26.setTransform(-59,-106.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Awxy+IC5AMICxgMIAqgIQApgIBHgGQBIgGBcAEICbAHQA/ADAhAIQAiAIAFASIgQAQQgQAQgTAaQgUAbgMAgQgMAgAHAhIAQACIApAGIAzAHIAyAGQAXADAKAAQATgBAdgJQAdgJAmgIQAmgIAwACIgiBTICthEILUATIAGARQAFAPgBAXQgBAWgSAUQgPAPgLAcQgLAcgHAeQgHAegEAVIgDAWIgKFbIgHAbIgSBFIgYBhIgZBrIgXBjQgKAvgFAgQgGAgACAJQAIAeAFAhQAGAhAAAdQAAANgFAcQgEAdgIAjIgOBFIgMA3IgFAWIgFAgIgLBSIgNByQgGA/gDBBQgEBBACA7QACA6AJApIgXAOQgXANgtASQguAShDAOQhDAPhZAFQhZAEhugOQhugOhLgMIh8gVQgygIgjgFQgigEgbAAQgbABgcAFIg+AKIhoAPIiCARIiMATIiJARIh0APIhRAKIgfADg");
	this.shape_27.setTransform(-57.8,-9.3);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.6,-133.4,229.1,248.2);


(lib.island = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C98F4B").s().p("AhTF7IADgYIAJg+IANhWIAOhiIAQhcIAOhJQAGgfAFgLQADgRAAghQgCgigHgoQgHgpgHgmIgPg+IgGgZICBAKIAAL/g");
	this.shape.setTransform(170.1,134.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AiQmGQgDARgFAaQgGAagJAaQgKAbgPAUIA8BkIAeIGIAUAeIDkAKQAAgBAEghQAEghAGg4QAGg3AHhGQAGhGAGhLQAFhJAChHQADhGgDg6QgCg6gJgjQgIgkgRgEIkqgUQAAAAgCASg");
	this.shape_1.setTransform(143.9,132.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("AhSGPIgUgdIgeoHIg8hjQAPgUAKgbQAJgbAGgZIAIgsIACgSIEqAUQARAFAIAkQAJAjACA5QADA6gDBHQgCBHgFBJIgMCRIgNB9IgKBZIgEAhg");
	this.shape_2.setTransform(143.9,132.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AB8kXIlIIRQABAAAUAFQAUAEAhAGQAiAFAoAFQApAFAnAAQA4AAAoAAQAoAAAWAAIAXAAIgfnzg");
	this.shape_3.setTransform(110.1,142.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9B6A3A").s().p("AC2EXIg+AAIhfAAQgoABgpgFQgogFgigFIg1gKIgVgGIFJoQIAxA9IAfHxg");
	this.shape_4.setTransform(110.1,142.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C98F4B").s().p("AjpF3IBuriQAQgMAegIQAfgJAmgEQAkgEAogCIBIgCIA2AAIAVABQAWAGgEAlQgEAlgYA7QgYA7glBHQgkBIgrBJQgrBMgoBGIhNB+Ig4BZIgWAhg");
	this.shape_5.setTransform(102,130.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AlTnkIgePJQABAAAagCQAbgCArgDQArgEAzgHQAygHAygKQAygKAmgPQBCgZA2gFQA2gGAhACQAgADABABIB4sVQgBAAgbADQgbADgqAFQgqAEgvAFQgvAEgpADQgpADgZAAQgeAAgkgJQgmgJgjgMQgigLgWgJQgXgJAAgBg");
	this.shape_6.setTransform(49.6,131.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9B6A3A").s().p("AlSnjICVA7IAYAKQAWAJAiAMQAjAMAlAIQAlAJAeABQAZAAAogDIBZgIIBZgJIBFgIIAcgCIh5MTQAAgBgggCQghgDg3AGQg1AHhCAYQgmAOgyALQgxAKgzAIQgzAGgrAEIhGAFIgbABg");
	this.shape_7.setTransform(49.6,131.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9B6A3A").s().p("ABVBBIhbgEIhUgFIg+gFIgXgCIgBgKIgDgZQgDgOgGgQQgIgQgKgKQgLgLgJgFIgJgEIAQgCQAPgBAYAAQAZAAAbADQATADAHAJQAHAJAAALQgBALgCAIIgEAJIAoAAQAVAAAkAFQAiAGAqAKIBPAUIA9AQIAZAHQgZAEgoAAIhWgBg");
	this.shape_8.setTransform(-75.8,39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B9E882").s().p("ABHhGIgnBfIEDgRIk3AtIBDhoIlRB5g");
	this.shape_9.setTransform(-32.2,232.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B9E882").s().p("Ajbg9IAaBYIGnhHIh2AdIh5AbIhuAZIhQASIgeAHg");
	this.shape_10.setTransform(-64.5,229.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AgGiuQAAABADAWQADAVAAAjQAAAjgGAoQgHAmgUAmQgUAlgmAaQAAAAATAFQASAFAdAJQAbAIAgAKQAfAKAbAJIhFlWg");
	this.shape_11.setTransform(-87.7,253.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9B6A3A").s().p("AAiCbIg7gSIgvgNIgTgFQAmgaAUgmQAUglAHgmQAGgoAAgjQAAgjgDgWIgDgWIAdAHIBFFWIg6gUg");
	this.shape_12.setTransform(-87.7,253.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9B6A3A").s().p("ACTAcIAAguIj9BYIAdh+IiLAmIgaAnIgOg+IEWg5IhmB5IFRhuIg0BYIAfBig");
	this.shape_13.setTransform(-58.5,240.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C98F4B").s().p("ADEEbQiBgQhQgXQhTgXgsgXQgugXgQgQQgSgQABAAIhZmAIEYg6IhoB8IFRhxIg0BaICdHyg");
	this.shape_14.setTransform(-53.2,260.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B57F4E").s().p("AhNjyIB4gQIhHAoIBqHeg");
	this.shape_15.setTransform(-27.4,263.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AikjpICeH1ICcALIAPotg");
	this.shape_16.setTransform(-18.8,262.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9B6A3A").s().p("AgGENIien2IFJgtIgPItg");
	this.shape_17.setTransform(-18.8,262.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B9E882").s().p("AoUCqQAZgrAcggQAeghAbgWQAZgWARgLIASgKQgdgGgngCQgngBgpACQgpABgkAEIg5AFIgWABQB+hCCDgvQCEgvCCgeQCDgdB2gQQB4gQBngHQBngGBMAAQBNAAAqABIAsADIiqAUQAAgBgwgEQgwgFhaADQhbADiCAUQiBAUimAxQinAwjGBXIAigGQAigFA7ABQA6ACBLATIgPAFQgPAEgeAZQgfAYgwA0QgvA1gbAkQgaAlgLASIgLASQAOgzAZgrgAqaABIAAAAIAAAAg");
	this.shape_18.setTransform(-64.2,211.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#80A559").s().p("AjdBBIh4BjIgehaIjIA9IhGg9IhQAoIiBgzIAWgDIgeAAIAIADIhsAPQAmgeAlggQAkgfAlgdQAlgfAqgUQApgWAxgGQAKAAgBANIgBAhQgCASAEAQQAPgJAPgPIAegdQAPgOAPgEQAPgEAPAOQAPALAHASQAHASADAWIAIAnQAWgRAQgbIAeg0QAOgaATgSQAUgRAdgBQAKABAEAQQAFARAAAXIABAsQAegQAcgTQAcgTAegPQAdgQAjgFQABAlgCAmQgCAlgHAjQAugjAygfQAxggA1gdQAAAmgOAjQgNAkgXAcQBBggA/gfIB9g/QA+ggBBgoIAggKQARgGANABQANABAFAOQAFALgGANQgFANgJAOQgJAOgGAPIAwgpQAYgVAbgQQAbgQAigFQAFAZgDAWIgHAtQgEAXgBAYQAZgFARgPIAhgdQAQgPATgFQAXgIANALQAOAJAIAUQAHATADAWQACAVAAAQQAzgXAsgfQAsgeArghIgCBCIgMAOIgeAiIgoAnQgVAVgVARQgUARgQAGQgZAKgSACQgSACgJgCIgKgCIhQA9IgohHIi0BRIACgUQADgTAHgbQAHgbANgaQAOgaAWgOIjkBiIBahiIgVAFQgUAFggALQgfAKgiAPQgiAPgcASQgbATgNAUIAUhuIgVAIIg2AWQghAOglATQgoATgmAWQgmAXgfAYQgeAZgQAYg");
	this.shape_19.setTransform(82.8,227);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A2CE7A").s().p("AFqDhIh4BkIgehaIjIA8IhEg8IhQAoIiCg0IkqAqIBIhrIgtAPIhFAZIhPAcIhMAbIg4AVIgWAIIBzh2IhlATIhmAVIhbAUIhAAPIgZAFIgIhbIlSB1QAOg0AZgqQAZgrAeghQAeggAbgWQAbgWARgMIASgLQgegEgogCQgogBgqABIhNAFIg7AEIgXADQCBhCCDgwQCEgvB/gdQCAgeB1gQQB0gQBjgHQBjgGBIgBQBKAAAoACIApACIAdgDIBMgHIBtgMIB9gPICCgQIB2gSQA2gJAlgIQAzgMBAgFQA/gEBEAAQBEABBBAEQBCADA2AFIBbAIQAfACAyACIBuADIB3ABIBtABIBQAAIAfABIgKGiIgMANIgeAiIgoApQgVAVgVARQgUARgQAHQgZAJgSACQgSACgJgCIgKgBIhQA8IgohGIi0BQIACgQIAGgnQAGgXAKgYQAJgYARgTQAIgJAJgGIjjBkIBahkIgVAFIg0ARQgfAKgiAPQgiAPgcASQgcASgMAWIAUhuIgVAIIg2AVQghAOgnATQgoATgmAWQgnAXgeAYQgeAYgQAag");
	this.shape_20.setTransform(24.3,210.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AF/IhQh/gGhagNQhZgNg8gRQg6gSgkgTQgkgTgVgRQgUgSgKgNQgLgNgIgGQgLgHgYgHIg1gQIg5gPIgtgKIgTgEQA0gsAWgzQAXgzADgyQADgzgIgqQgHgogJgZQgIgagBgBIk5BoQALgyAWgsQAVgrAaghQAagiAYgYQAYgXAPgMIAQgNQhdgDhJAGQhJAFgqAIIgrAHQBTg/BugwQBugvB9gjQB9gjCDgXQCBgYB+gPQB9gPBvgIQBugIBUgDQBUgDAwgBIAwAAIjURBg");
	this.shape_21.setTransform(-60,236);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B9E882").s().p("Al1ABQAHgGAmgHQAlgFA7gDQA6gDBFgCQBFgCBEAAICCgBIBnABIA3ABQAVAAAhAMQh5AHh3AHIjtARQh3AIh5AEg");
	this.shape_22.setTransform(-183.3,52.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#80A559").s().p("AhBAwQAFgWALgfQAMggAVghIBWAVIgNABQgNACgWAKQgWALgWAZQgZAYgWAvIAEgXg");
	this.shape_23.setTransform(-102.3,72.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#80A559").s().p("AhBAwQAFgWALgfQAMggAVghIBWAVIgNABQgNACgWAKQgWALgWAZQgZAYgWAvIAEgXg");
	this.shape_24.setTransform(-95.4,71.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBHIAGghQADgVAHgVQAGgWAKgVQgXAKgbAjQgbAhgZA1IADgRIAIgpQAGgZAKgaQAKgcAQgYIA3ANIAMgTIBZAVIgOAGQgNAFgWAQQgWAPgYAbQgXAegWAvIABgNg");
	this.shape_25.setTransform(-100.4,75.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#80A559").s().p("AhiA1QAJgOARgUQAQgTAYgXQAXgYAbgTIBaBCIgQgFQgQgFgdACQgdABgmAPQgoARgvAqIAJgOg");
	this.shape_26.setTransform(-213.6,65.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A2CE7A").s().p("AhdBAIAmgtQAXgaAdgcQAbgbAdgUIA3BhQgBgCgPgEQgQgEgeABQgdABglARQgoARgvAqIAOgTg");
	this.shape_27.setTransform(-221.5,61.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhDBfQAIgOANgVQAOgVASgXQAQgUAVgTQgUAAgaANQgcAKghAWQgiAXgiAgIAMgWQALgWAVgfQAUgdAbgeQAagfAegUIAuBGIAVgQIBbBBIgTgBQgRAAggAHQggAHgpAVQgoAWgvAqIAIgOgACZALIAAAAg");
	this.shape_28.setTransform(-221.1,66.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#80A559").s().p("AhSBGQADgQAHgZQAHgaANgdQAMgeATgdIBrAZIgQACQgRACgbANQgaAMgcAfQgeAdgbA5IADgQg");
	this.shape_29.setTransform(-116.8,72.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#80A559").s().p("AhSBGQADgQAHgZQAHgaANgdQAMgeATgdIBrAZIgQACQgRACgbANQgaAMgcAfQgeAdgbA5IADgQg");
	this.shape_30.setTransform(-108.5,71.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgqBWIAHgoQAEgZAIgaQAIgcAMgZQgcAMghArQghApgeBBIADgVQADgTAHgfQAHgfANggQANgjASgdIBFAQQAFgLAIgLIBtAZIgQAGQgSAIgaASQgbAUgdAhQgcAkgbA6IABgRg");
	this.shape_31.setTransform(-114.5,76.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B57F4E").s().p("ADCQOQg9gFg0gRQg0gQglgVQgngUgVgPIgWgPIAJmpIgTh0IgGgQIgPgqIgVg2IgUg3IgPgtQgJgcAGgWQAFgVALgUQAKgUAGgYQACgLgGgjQgGgkgLg2IgYhyIgch4IgahsIgThPIgIgeIAAkXIgwjVIBqB+IBOE+IAIAiIAXBcIAhCEIAoCcIApCiIArCXQAVBHASA2QASA2ANAcIBMCkIAzBxIASAqIA6FuQg2AOgzAAIgYgBg");
	this.shape_32.setTransform(-184.5,161.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AhymPIh0ErIBXH0QAAAAAZgDQAYgCApgFQAogFAvgIQAxgIAwgLQAxgLApgPIAKhDIkWpBg");
	this.shape_33.setTransform(-133.8,225.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9B6A3A").s().p("AjmhkIB0krIBDBXIEWJBIgKBDQgpAPgxALQgwALgxAIQgvAIgoAFIhBAHIgZADg");
	this.shape_34.setTransform(-133.8,225.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C98F4B").s().p("ABBIwQgnhigkh0Qglh0gih8Qgjh5geh5Qgeh4gYhrIgqi8IgbiAIgJgwIF2AUQAPCuAWChQAXChAZCJQAZCHAXBnQAWBmAOA5IAOA6IiHFbQgohFgnhjg");
	this.shape_35.setTransform(-175.3,142.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B57F4E").s().p("AA9HOQgZhPgWheQgUhdgShjQgShhgOhgQgPhggLhVQgLhVgHhBIgLhnIgDgmIBygdQAABCAEBVQAFBWAJBhQAIBhAKBlIAVDDIAWC1IASCVIANBlIAFAlQgdg5gZhPg");
	this.shape_36.setTransform(-151.2,129.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B57F4E").s().p("AjwsMIAdgxIHEhgQgyAsg4AfQg5Afg2AVQg1AVgsAMQgtANgbAFIgbAFIgdaEg");
	this.shape_37.setTransform(-68.2,163.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AkhqFQACBVADBsQACBtADB8QADB7ADB+QADB/ACB7QADB6ADBsQACBqACBSQACBSABAuQABAuAAABIIkBqIhq+lInEBgQAAAAgHAGQgHAGgHALQgHALgBAPQAAAFABAyQABAxACBUg");
	this.shape_38.setTransform(-62.9,169.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9B6A3A").s().p("Aj+NpIgBgwIgDh/IgEi9IgGjlIgFj6IgGj5IgFjpIgFjAIgDiGIgBg3QABgPAHgKQAHgMAHgGIAHgGIHEhgIBqelg");
	this.shape_39.setTransform(-62.9,169.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B57F4E").s().p("AkdApIgHh9IgEhUIgCgeIJVAdIg6BNIABB0Qg7ARg7AIQg8AIg3gIQg1gIgvggQgvgegig9QgFgKgKgDQgJgEgKAEQgJADgFAKQgaCOgcCLIgLieg");
	this.shape_40.setTransform(-119.4,88.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B57F4E").s().p("AAyD5IgGgPIgag4QgSgqgmhPIhnjKQgRgigQgrQgPgrgOgyQBCBdBVBEQBUBEBfAvQAqAWAggJIADFDQgWgDgaACQgbACgYAFIgnAJIgQAEg");
	this.shape_41.setTransform(-113.8,226.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C98F4B").s().p("ABqNyIgGgOIgag5QgTgqgnhOIhljMQghhBgaheQgbhegVhzQgVhxgQh5QgQh6gMh4QgLh4gIhqQgIhqgFhTIgHiBIgCgwIJVAdIg6BNIATbtQgWgDgaACQgbADgYAFIgnAIIgQAFg");
	this.shape_42.setTransform(-119.4,163.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AhCvyQhNgMhfgBIBWevQABAAAtAMQAtALBQASQBRASBuAVIAd+IQAAgBgTgMQgTgMgngRQgmgSg6gRQg5gShLgLg");
	this.shape_43.setTransform(-15.3,172.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9B6A3A").s().p("AASPZQhPgSgtgLIgugMIhW+uQBfAABNAMQBLALA5ASQA5ARAnASQAmARATAMIAUANIgdeHQhugUhSgSg");
	this.shape_44.setTransform(-15.3,172.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B9E882").s().p("ApUAVQgMgMgSgBIgmABQgWAAgWgBQgXgCgPgGQgPgFAAgOQASgJArgGQAsgGA7gDQA7gEBAABQBBAAA9AEQA9AEAvAJQAdAGA6ADQA6AEBNACIChAEICvACICnAAICOAAIBigBIAlAAIpEAdQhSAChSgHQhPgHhRgIQhQgJhQgHQhQgGhQADQgQAAgYAHQgZAHgWANQAOAHAKAHIAYAPQgmADgmAHQgGgNgNgNg");
	this.shape_45.setTransform(-25.7,29.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#80A559").s().p("Ad4DKIhUgGIh5gIIiSgJIiagHQhNgChIgBQhHAAg6ADIjsALQhoAFhVgDQhVgEhMgQQhBgPhCgVQhDgVg9gYQg9gXgwgVIhNghIgdgMIljgmIgYAGIg+AOIhXAVIhfATIhaATQgqAJgcAEQgcAEgHgCIBNhLIqtgnIgSAGIgsAOQgbAHgZAGQgZAGgPAAIgsgCIhOgDIhfgFIhcgEIhFgEIgbgBIgagYQBAgHA+AAQA9AAA+ACQA9ACA+gBQA+gBBAgKQgHgIgBgKIgBgLQBzAVBxADQBxADBvgIQBvgIBvgLQBvgLBwgIQgNAKAAAMQAAALAEAMQADAMgDAKQA6gSA8gHQA9gGA+gCQA+gBA/gEQgSgEgRgLIgigXQgRgMgSgJQgTgIgWgBQA1gDA1ABIBpABQA1AAAzgHQAxgHAxgUIAUAHIAuARIA2AUQAVAIAXABQAXABAUgCIAhgFIAOgDIhDA2ICTgbIgMAJIgZAVQgNAMgHAJQgGAJAJAAQAJAAASgGQATgFAWgIIAsgQIAigNIAOgFIhWBQIB+goIgMAxQACgDAIgFQAJgFAWgGQAXgFAqgFQAigEAtACQAtACAvAGIBWALIBAALIAZAFIAMANQAMANAZAQQAZATAoARQAfAMAlAHQAlAHAjADQAiADAXABIAXAAIBdAAIAHAvIAogbIBQAUIGQgUIAABrIgfgDgAFDigIAAAAg");
	this.shape_46.setTransform(-14.4,70.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A2CE7A").s().p("Ae2FJIg5gFIhKgGIhNgGIg/gFIgigCIgkgCIg4gCIg3gCIghgBIgqAAIhTAAIhpAAIhuAAQg0AAguADIhfAFQgxADg9AAQg+AAhRgEQg4gEg/gPQg/gOg/gVQhAgVg5gXQg6gXgtgUIhHggIgbgNIllgmIgZAGIg/APIhXAUIhgAVIhaATQgqAJgcAEQgcAEgHgCIBNhNIqxgnIgTAHIgsANIg0ANQgZAGgQAAIgrgBIhQgEIhfgFIhcgEIhGgEIgbgBIiSiFQAHgJAmgFQAmgGA6gDQA7gDBFgCQBFgCBHAAICDAAIBoAAIA3ABQAXABAjANIBJAeQAmARAcAIQAcAIAIgKQAHgLgGgQQgGgQgMgQQgLgQgKgKIgKgLIAQAFIArALQAaAGAeAFQAeAFAdABQAcABAVgFQAZgIAagFQAagFAfgDQAfgDArABQAqAAA6ADIBZAGIBnAFQA1ACAvABQAvAAAjgBQAigCANgFQANgGgRgJQgSgKgkgLQglgMgvgMIhggXIhagTIhDgOIgagFIgEgJQgEgJgHgLQgHgMgLgIQgLgJgPAAIglABQgXAAgWgBQgXgCgPgGQgPgHgBgOQATgJArgGQAsgGA7gDQA8gEBBABQBBAAA9AEQA9AFAwAIQAvAJA5AEQA4AFA5ABQA5ACAtAAIBMgBIAdgBIdSAHIgNJqIgWgCg");
	this.shape_47.setTransform(-19.7,58.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C98F4B").s().p("AhTl6IB/gKIgFAZIgPA+QgHAmgHApQgHAogCAiQgBAhAFARQAEALAGAfIAOBJIAPBcIAPBiIANBWIAJA+IAEAYIioAKg");
	this.shape_48.setTransform(186.2,134.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("ACRmGQADARAFAaQAGAaAJAaQAKAbAPAUIg8BkIgeIGIgUAeIjkAKQAAgBgEghQgEghgGg4QgGg3gHhGQgGhGgGhLQgFhJgChHQgDhGADg6QACg6AJgjQAIgkARgEIEqgUQAAAAACASg");
	this.shape_49.setTransform(212.3,132.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9B6A3A").s().p("AiVF4IgKhZIgNh9IgMiRQgFhJgChHQgDhHADg6QACg5AJgjQAIgkARgFIEqgUIACASIAIAsQAGAZAJAbQAKAbAPAUIg8BjIgeIHIgUAdIjkAKIgEghg");
	this.shape_50.setTransform(212.3,132.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("Ah7kXIFIIRQgBAAgUAFQgUAEghAGQgiAFgoAFQgpAFgnAAQg4AAgoAAQgoAAgWAAIgWAAIAenzg");
	this.shape_51.setTransform(246.2,142.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9B6A3A").s().p("Ah3EXIg+AAIgXAAIAfnxIAxg9IFJIQIgVAGIg1AKQgiAFgpAFQgoAFgogBIhfAAg");
	this.shape_52.setTransform(246.2,142.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C98F4B").s().p("ACYF0Ig4hZIhNh+QgohGgrhMQgrhJgkhIQglhHgYg7QgYg7gEglQgEglAWgGIAVgBIA2AAIBIACQAoACAkAEQAmAEAfAJQAeAIAQAMIBuLiIg8AeIgWghg");
	this.shape_53.setTransform(254.2,130.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AFUnkIAePJQgBAAgagCQgbgCgrgDQgrgEgygHQgzgHgygKQgygKgmgPQhBgZg3gFQg2gGggACQghADgBABIh4sVQACAAAaADQAbADAqAFQAqAEAvAFQAvAEAqADQAoADAZAAQAdAAAmgJQAlgJAjgMQAigLAWgJQAXgJABgBg");
	this.shape_54.setTransform(306.7,131.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9B6A3A").s().p("AFWHjIhFgFQgrgEgzgGQgzgIgxgKQgygLgmgOQhCgYg1gHQg3gGghADQggACgBABIh4sTIAcACIBFAIIBZAJIBZAIQApADAZAAQAcgBAlgJQAmgIAigMQAjgMAWgJIAXgKICWg7IAePHIgbgBg");
	this.shape_55.setTransform(306.7,131.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9B6A3A").s().p("AjrA+IAZgHIA9gQIBPgUQAqgKAigGQAkgFAVAAIAoAAIgEgJQgCgIgBgLQAAgLAHgJQAHgJATgDQAbgDAZAAQAYAAAPABIAQACIgJAEQgJAFgLALQgKAKgIAQQgGAQgDAOIgDAZIgBAKIgXACIg+AFIhUAFIhbAEIhWABQgoAAgZgEg");
	this.shape_56.setTransform(432,39.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B9E882").s().p("AgugzIBDBoIk3gtIEDARIgnhfIFpCMg");
	this.shape_57.setTransform(388.4,232.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B9E882").s().p("ADIA3IhQgSIhugZIh5gbIh2gdIGnBHIAahYIAKB7IgegHg");
	this.shape_58.setTransform(420.7,229.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AAHiuQAAABgDAWQgDAVgBAjQAAAjAHAoQAHAmAUAmQAUAlAmAaQAAAAgTAFQgSAFgdAJQgbAIggAKQgfAKgbAJIBFlWg");
	this.shape_59.setTransform(443.9,253.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9B6A3A").s().p("AgWinIAdgHIgDAWQgDAWgBAjQAAAjAHAoQAHAmAUAlQAUAmAmAaIgTAFIgvANIg7ASIg6AUg");
	this.shape_60.setTransform(443.9,253.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9B6A3A").s().p("AjMABIg0hYIFRBuIhmh5IEWA5IgOA+IgagnIiLgmIAdB+Ij9hYIAAAuIhZBHg");
	this.shape_61.setTransform(414.7,240.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C98F4B").s().p("AiYjGIg0haIFRBxIhoh8IEZA6IhaGAQABAAgSAQQgQAQguAXQgsAXhTAXQhQAXiBAQIhyARg");
	this.shape_62.setTransform(409.5,260.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B57F4E").s().p("AAdjaIhIgoIB5AQIicH2g");
	this.shape_63.setTransform(383.6,263.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("ACljpIieH1IicALIgPotg");
	this.shape_64.setTransform(375,262.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9B6A3A").s().p("AikkWIFJAtIieH2IicAKg");
	this.shape_65.setTransform(375,262.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B9E882").s().p("AIxD2QgLgSgaglQgbgkgvg1Qgwg0gfgYQgegZgQgEIgOgFQBLgTA6gCQA6gBAjAFIAiAGQjHhXimgwQimgxiBgUQiCgUhbgDQhbgDgvAFQgwAEAAABIiqgUIAsgDQAqgBBNAAQBMAABnAGQBmAHB5AQQB2AQCDAdQCCAeCEAvQCDAvB+BCIgWgBIg6gFQgigEgpgBQgpgCgoABQgnACgdAGIARAKQASALAZAWQAbAWAdAhQAeAgAYArQAZArAOAzIgLgSgAKbABIAAAAIAAAAg");
	this.shape_66.setTransform(420.4,211.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#80A559").s().p("ACmCbQgfgYgmgXQgmgWgogTQglgTghgOIg2gWIgVgIIAUBuQgNgUgbgTQgcgSgigPQgigPgfgKQgggLgUgFIgVgFIBaBiIjkhiQAWAOAOAaQANAaAHAbQAHAbADATIACAUIi0hRIgoBHIhQg9IgKACQgJACgSgCQgSgCgZgKQgQgGgUgRQgVgRgVgVIgognIgegiIgMgOIgChCQArAhAsAeQAsAfAzAXQAAgQACgVQADgWAHgTQAIgUAOgJQANgLAXAIQATAFAQAPIAhAdQARAPAZAFQgBgYgEgXIgHgtQgDgWAFgZQAiAFAbAQQAbAQAYAVIAwApQgGgPgJgOQgJgOgFgNQgGgNAFgLQAFgOANgBQANgBARAGIAgAKQBBAoA+AgIB9A/QA/AfBBAgQgXgcgNgkQgOgjAAgmQA1AdAxAgQAyAfAuAjQgHgjgCglQgCgmABglQAjAFAdAQQAeAPAcATQAcATAeAQIABgsQAAgXAFgRQAEgQAKgBQAdABAUARQATASAOAaIAeA0QAQAbAWARIAIgnQADgWAHgSQAHgSAPgLQAPgOAPAEQAPAEAPAOIAeAdQAPAPAPAJQAEgQgCgSIgBghQgBgNAKAAQAxAGApAWQAqAUAlAfQAlAdAkAfQAlAgAmAeIhsgPIAIgDIgeAAIAWADIiBAzIhQgoIhGA9IjIg9IgeBaIh4hjIgKCLQgQgYgegZg");
	this.shape_67.setTransform(273.4,227);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A2CE7A").s().p("AmhE7QgegYgngXQgmgWgogTQgngTghgOIg2gVIgVgIIAUBuQgNgWgcgSQgbgSgigPQghgPgggKIg0gRIgVgFIBaBkIjjhkQAKAGAHAJQARATAJAYQAKAYAFAXIAHAnIACAQIi0hQIgoBGIhQg8IgKABQgJACgSgCQgSgCgZgJQgPgHgVgRQgUgRgWgVIgogpIgegiIgMgNIgKmiIAfgBIBQAAIBtgBIB3gBIBugDQAygCAfgCIBbgIQA3gFBBgDQBAgEBEgBQBFAAA/AEQA/AFA0AMQAlAIA2AJIB2ASICCAQIB9APIBtAMIBMAHIAdADIApgCQAogCBJAAQBKABBiAGQBiAHB1AQQB1AQCAAeQB/AdCEAvQCDAwCBBCIgXgDIg7gEIhNgFQgrgBgoABQgoACgdAEIASALQARAMAbAWQAbAWAeAgQAeAhAZArQAZAqAOA0IlSh1IgIBbIgZgFIhAgPIhbgUIhmgVIhmgTIB0B2IgWgIIg4gVIhMgbIhPgcIhFgZIgtgPIBIBrIkrgqIiBA0IhQgoIhEA8IjIg8IgeBaIh4hkIgKCMQgPgagfgYg");
	this.shape_68.setTransform(331.9,210.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AoyIhIjUxBIAwAAQAwABBUADQBUADBuAIQBvAIB9APQB+APCBAYQCDAXB9AjQB9AjBuAvQBuAwBTA/IgrgHQgqgIhJgFQhJgGhdADIAQANQAPAMAYAXQAYAYAaAiQAaAhAVArQAWAsALAyIk5hoQgBABgIAaQgJAZgHAoQgIAqADAzQADAyAXAzQAWAzA0AsIgTAEIgtAKIg5APIg1AQQgYAHgLAHQgIAGgLANQgKANgUASQgVARgkATQgkATg6ASQg8ARhZANQhaANh/AGg");
	this.shape_69.setTransform(416.2,236);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B9E882").s().p("ABoARIjtgRQh3gHh5gHQAhgMAVAAIA3gBIBngBICCABQBEAABFACQBFACA6ADQA7ADAlAFQAmAHAHAGIgeAcQh5gEh3gIg");
	this.shape_70.setTransform(539.5,52.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#80A559").s().p("AAXAAQgXgZgVgLQgWgKgNgCIgNgBIBWgVQAVAhAMAgQALAfAFAWIAEAXQgWgvgZgYg");
	this.shape_71.setTransform(458.5,72.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#80A559").s().p("AAXAAQgXgZgVgLQgWgKgNgCIgNgBIBWgVQAVAhAMAgQALAfAFAWIAEAXQgWgvgZgYg");
	this.shape_72.setTransform(451.6,71.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AA1gCQgbgjgXgKQAKAVAGAWQAHAVADAVIAGAhIABANQgWgvgXgeQgYgbgWgPQgWgQgNgFIgOgGIBZgVIAMATIA3gNQAQAYAKAcQAKAaAGAZIAIApIADARQgZg1gbghg");
	this.shape_73.setTransform(456.6,75.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#80A559").s().p("AAVAIQgmgPgdgBQgdgCgQAFIgQAFIBahCQAbATAXAYQAYAXAQATQARAUAJAOIAJAOQgvgqgogRg");
	this.shape_74.setTransform(569.8,65.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A2CE7A").s().p("AAVAYQglgRgdgBQgegBgQAEQgPAEgBACIA3hhQAdAUAbAbQAdAcAXAaIAmAtIAOATQgvgqgogRg");
	this.shape_75.setTransform(577.7,61.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgLAtQgpgVgggHQgfgHgTAAIgSABIBahBIAXAQIAthGQAeAUAaAfQAbAeAUAdQAVAfALAWIAMAWQgjggghgXQghgWgcgKQgagNgUAAQAVATAQAUQASAXAOAVQANAVAIAOIAIAOQgvgqgogWgAiYALIAAAAIAAAAg");
	this.shape_76.setTransform(577.3,66.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#80A559").s().p("AAdAAQgdgfgZgMQgbgNgRgCIgQgCIBrgZQATAdAMAeQANAdAHAaQAHAZADAQIADAQQgbg5gegdg");
	this.shape_77.setTransform(473,72.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#80A559").s().p("AAdAAQgdgfgZgMQgbgNgRgCIgQgCIBrgZQATAdAMAeQANAdAHAaQAHAZADAQIADAQQgbg5gegdg");
	this.shape_78.setTransform(464.7,71.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("ABBgDQghgrgcgMQAMAZAIAcQAHAaAFAZIAGAoIACARQgbg6gcgkQgeghgagUQgbgSgRgIIgQgGIBtgZQAHALAHALIBEgQQASAdANAjQANAgAHAfQAHAfADATIADAVQgehBghgpg");
	this.shape_79.setTransform(470.8,76.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B57F4E").s().p("AlCQBIA6luIASgqIAzhxIBMikQANgcASg2QASg2AVhHIAriXIApiiIAoicIAhiEIAXhcIAIgiIBOk+IBqh+IgwDVIAAEXIgIAeIgTBPIgaBsIgcB4IgYByQgLA2gGAkQgGAjACALQAGAYAKAUQALAUAFAVQAGAWgJAcIgPAtIgUA3IgVA2IgPAqIgGAQIgTB0IAJGpIgWAPQgVAPgnAUQglAVg0AQQg0ARg9AFIgYABQgzAAg2gOg");
	this.shape_80.setTransform(540.7,161.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("ABzmPIB0ErIhXH0QAAAAgZgDQgYgCgpgFQgogFgvgIQgxgIgwgLQgxgLgpgPIgKhDIEWpBg");
	this.shape_81.setTransform(490,225.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9B6A3A").s().p("AB3GNIhBgHQgogFgvgIQgxgIgwgLQgxgLgpgPIgKhDIEWpBIBDhXIB0ErIhXH0IgZgDg");
	this.shape_82.setTransform(490,225.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C98F4B").s().p("AkWF9IAOg6QAOg5AWhmQAXhnAZiHQAZiJAXihQAWihAPiuIF2gUIgJAwIgbCAIgqC8QgYBrgeB4QgeB5gjB5QgiB8glB0QgkB0gnBiQgnBjgoBFg");
	this.shape_83.setTransform(531.5,142.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B57F4E").s().p("AhtIxIANhlIASiVIAWi1IAVjDQAKhlAIhhQAJhhAFhWQADhVAAhCIBzAdIgDAmIgLBnQgHBBgLBVQgLBVgPBgQgOBggSBhQgSBjgUBdQgWBegZBPQgZBPgdA5IAFglg");
	this.shape_84.setTransform(507.4,129.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B57F4E").s().p("ACtrmIgbgFQgbgFgtgNQgsgMg1gVQg2gVg5gfQg4gfgygsIHEBgIAdAxIgnaqg");
	this.shape_85.setTransform(424.4,163.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AEiqFQgCBVgDBsQgCBtgDB8QgDB7gDB+QgDB/gCB7QgDB6gDBsQgCBqgCBSQgCBSgBAuQgBAuAAABIokBqIBq+lIHEBgQAAAAAHAGQAHAGAHALQAHALABAPQAAAFgBAyQgBAxgCBUg");
	this.shape_86.setTransform(419.1,169.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9B6A3A").s().p("Ai7vSIHEBgIAHAGQAHAGAHAMQAHAKABAPIgBA3IgDCGIgFDAIgFDpIgGD5IgFD6IgGDlIgEC9IgDB/IgBAwIokBqg");
	this.shape_87.setTransform(419.1,169.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B57F4E").s().p("ADdhSQgFgKgJgDQgKgEgJAEQgKADgFAKQgiA9gvAeQgvAgg1AIQg3AIg8gIQg7gIg7gRIABh0Ig6hNIJVgdIgCAeIgEBUIgHB9IgLCeQgciLgaiOg");
	this.shape_88.setTransform(475.6,88.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B57F4E").s().p("AhBE4IgngJQgYgFgbgCQgagCgWADIADlDQAgAJAqgWQBfgvBUhEQBVhEBChdQgOAygPArQgQArgRAiIhnDKQgnBPgRAqIgaA4IgGAPIAABDIgQgEg");
	this.shape_89.setTransform(470,226.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C98F4B").s().p("Ah5OxIgngIQgYgFgbgDQgagCgWADIAT7tIg6hNIJVgdIgCAwIgHCBQgFBTgIBqQgIBqgLB4QgMB4gQB6QgQB5gVBxQgVBzgbBeQgaBeghBBIhlDMQgnBOgTAqIgaA5IgGAOIAABEIgQgFg");
	this.shape_90.setTransform(475.6,163.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("ABDvyQBMgMBggBIhWevQgBAAgtAMQgtALhPASQhSAShuAVIgd+IQAAgBATgMQATgMAngRQAngSA5gRQA6gSBKgLg");
	this.shape_91.setTransform(371.5,172.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9B6A3A").s().p("AjuuIIATgNQAUgMAmgRQAngSA5gRQA5gSBLgLQBMgMBgAAIhWeuIguAMQgtALhPASQhSAShuAUg");
	this.shape_92.setTransform(371.5,172.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B9E882").s().p("AH2AlIAYgPQAKgHAOgHQgWgNgZgHQgYgHgQAAQhQgDhQAGQhQAHhQAJQhRAIhPAHQhSAHhSgCIpEgdIAlAAIBiABICOAAICnAAICvgCIChgEQBNgCA6gEQA6gDAdgGQAvgJA9gEQA9gEBBAAQBAgBA7AEQA7ADAsAGQArAGASAJQAAAOgPAFQgPAGgXACQgWABgWAAIgmgBQgSABgMAMQgNANgGANQgmgHgmgDg");
	this.shape_93.setTransform(381.9,29.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#80A559").s().p("A+WBiIGQAUIBQgUIAoAbIAHgvIBdAAIAXAAQAXgBAigDQAjgDAlgHQAlgHAfgMQAogRAZgTQAZgQAMgNIAMgNIAZgFIBAgLIBWgLQAvgGAtgCQAtgCAiAEQAqAFAXAFQAWAGAJAFQAIAFACADIgMgxIB+AoIhWhQIAOAFIAiANIAsAQQAWAIATAFQASAGAJAAQAJAAgGgJQgHgJgNgMIgZgVIgMgJICTAbIhDg2IAOADIAhAFQAUACAXgBQAXgBAVgIIA2gUIAugRIAUgHQAxAUAxAHQAzAHA1AAIBpgBQA1gBA1ADQgWABgTAIQgSAJgRAMIgiAXQgRALgSAEQA/AEA+ABQA+ACA9AGQA8AHA6ASQgDgKADgMQAEgMAAgLQAAgMgNgKQBwAIBvALQBvALBvAIQBvAIBxgDQBxgDBzgVIgBALQgBAKgHAIQBAAKA+ABQA+ABA9gCQA+gCA9AAQA+AABAAHIgaAYIgbABIhFAEIhcAEIhfAFIhOADIgsACQgPAAgZgGQgZgGgbgHIgsgOIgSgGIqtAnIBNBLQgHACgcgEQgcgEgqgJIhagTIhfgTIhXgVIg+gOIgYgGIljAmIgdAMIhNAhQgwAVg9AXQg9AYhDAVQhCAVhBAPQhMAQhVAEQhVADhogFIjsgLQg6gDhHAAQhIABhNACIiaAHIiSAJIh5AIIhUAGIgfADgAlCigIAAAAIAAAAg");
	this.shape_94.setTransform(370.6,70.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A2CE7A").s().p("A/YkfIdSgHIAdABIBMABQAtAAA5gCQA5gBA4gFQA5gEAvgJQAwgIA9gFQA9gEBBAAQBBgBA8AEQA7ADAsAGQArAGATAJQgBAOgPAHQgPAGgXACQgWABgXAAIglgBQgPAAgLAJQgLAIgHAMQgHALgEAJIgEAJIgaAFIhDAOIhaATIhgAXQgvAMglAMQgkALgSAKQgRAJANAGQANAFAiACQAjABAvAAQAvgBA1gCIBngFIBZgGQA6gDAqAAQArgBAfADQAfADAaAFQAaAFAZAIQAVAFAcgBQAdgBAegFQAegFAagGIArgLIAQgFIgKALQgKAKgLAQQgMAQgGAQQgGAQAHALQAIAKAcgIQAcgIAmgRIBJgeQAjgNAXgBIA3gBIBoAAICDAAQBHAABFACQBFACA7ADQA6ADAmAGQAmAFAHAJIiSCFIgbABIhGAEIhcAEIhfAFIhQAEIgrABQgQAAgZgGIg0gNIgsgNIgTgHIqxAnIBNBNQgHACgcgEQgcgEgqgJIhagTIhggVIhXgUIg/gPIgZgGIllAmIgbANIhHAgQgtAUg6AXQg5AXhAAVQg/AVg/AOQg/APg4AEQhRAEg+AAQg9AAgxgDIhfgFQgugDg0AAIhuAAIhpAAIhTAAIgqAAIghABIg3ACIg4ACIgkACIgiACIg/AFIhNAGIhKAGIg5AFIgWACg");
	this.shape_95.setTransform(375.9,58.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AegTXIiOgFIjWgHIkNgKIkzgLIlHgLIlIgNIk5gMIkVgLIjkgKQhkgFg8gEQg8gDgNgDQgcgFgbgBQgbAAgiAEQgjAFgyAIIh+AVQhLAMhuAOQhuAOhZgEQhZgFhDgPQhDgOgugSQgtgSgXgNIgXgOQAJgpACg7QACg6gEhBQgDhBgGg/IgNhyIgLhSIgFggIgFgWIgMg3IgOhFQgIgjgEgdQgFgcAAgNQAAgdAGghQAFghAIgeQACgJgGggQgFgggKgvIgXhjIgZhrIgYhhIgShFIgHgbIgKlbIgDgWQgEgVgHgeQgHgegLgcQgLgcgPgPQgSgUgBgWQgBgXAFgPQAFgQABgBILUgTICtBEIgihTQAwgCAmAIQAmAIAdAJQAdAJATABQAMAAAXgDIAygGIAzgHIApgGIAQgCQAHghgMggQgMgggUgbQgTgagQgQIgQgQQAFgSAigIQAhgIA/gDICbgHQBcgEBIAGQBHAGApAIIAqAIICxAMMAgZgAMMgAQAmWIgzgBg");
	this.shape_96.setTransform(-20.7,147.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("A/iy+MAgZAAMICxgMIAqgIQApgIBHgGQBIgGBcAEICbAHQA/ADAhAIQAiAIAFASIgQAQQgQAQgTAaQgUAbgMAgQgMAgAHAhIAQACIApAGIAzAHIAyAGQAXADAMAAQATgBAdgJQAdgJAmgIQAmgIAwACIgiBTICthEILUATQABABAFAQQAFAPgBAXQgBAWgSAUQgPAPgLAcQgLAcgHAeQgHAegEAVIgDAWIgKFbIgHAbIgSBFIgYBhIgZBrIgXBjQgKAvgFAgQgGAgACAJQAIAeAFAhQAGAhAAAdQAAANgFAcQgEAdgIAjIgOBFIgMA3IgFAWIgFAgIgLBSIgNByQgGA/gDBBQgEBBACA6QACA7AJApIgXAOQgXANgtASQguAShDAOQhDAPhZAFQhZAEhugOQhugOhLgMIh+gVQgygIgjgFQgigEgbAAQgbABgcAFQgNADg8ADQg8AEhkAFIjkAKIkVALIk5AMIlIANIlHALIkzALIkNAKIjWAHIiOAFIgzABg");
	this.shape_97.setTransform(376.9,147.8);

	this.addChild(this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-236.4,23.7,829.1,267.9);


(lib.audiospeakersoundwaves = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AgOhqQA7Bug7Bn");
	this.shape.setTransform(1.5,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,5.1,23.5);


(lib.bubble_of_water = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape.setTransform(-5.3,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBfQAQgHANgSQARgcAAgoQAAglgRgcQgSgZgYgCQAJgEAKAAQAaAAAUAcQAUAbAAAnQAAAngUAcQgUAcgaAAIgGAAg");
	this.shape_1.setTransform(5.7,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00CCFF").ss(0.8,1,1).p("ABXhWQAkAkAAAyQAAAzgkAkQgkAkgzAAQgyAAgkgkQgkgkAAgzQAAgyAkgkQAkgkAyAAQAzAAAkAkg");
	this.shape_2.setTransform(0.2,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCFFFF").s().p("AhWBXQgkgkAAgzQAAgyAkgkQAkgkAyAAQAyAAAlAkQAkAkAAAyQAAAzgkAkQglAkgyAAQgyAAgkgkg");
	this.shape_3.setTransform(0.2,-0.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.2,-14,26.7,26.7);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hook("synched",0);
	this.instance.setTransform(-32.4,90.5);
	this.instance.alpha = 0.43;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 204, 0)];
	this.instance.cache(7,7,26,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(1,1,1).p("ADSvsQhvEYhqGHQjYMNAPIt");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.8,-101.5,45.9,223.1);


(lib.walking_penguin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.blinking2();
	this.instance.setTransform(10.1,-73.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({x:9.7,y:-77.5},0).wait(6).to({x:10.1,y:-75.5},0).wait(6).to({y:-77.5},0).wait(6));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ah6l6QgHBFAEBMQAFBMAPBOQAPBOAYBHQAXBJAfA+QAcA+AkAtQAkAuAnAV");
	this.shape.setTransform(141.6,-116.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3B35").s().p("AgQAIQAGgLABgKIABgLIAtgJQgBAJgEANIgJAVIgFALIg2ANQAOgMAGgOg");
	this.shape_1.setTransform(233.9,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA3B35").s().p("Ag3AzQAPgIAKgQQAKgQAIgQIAKgfIACgOIA4AYQgBAVgFAQQgGASgFALIgHALg");
	this.shape_2.setTransform(219.5,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA3B35").s().p("AhTA4QAZgIAQgPQAQgQALgRQAKgTAFgSIAHgdIACgMIBKAcQgCARgNAVQgNAUgQAVQgPAVgMAOIgMAPg");
	this.shape_3.setTransform(203.6,-6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA3B35").s().p("AhLBsQgPgLgKgMIgSgWIgGgKQAvgMAigVQAkgUAVgYQAYgYAPgWQAOgXAFgPIAHgOIAuBYQgMAdgWAWQgVAYgYAUQgXATgWAOQgTAOgNAHIgOAIQgQgEgOgLg");
	this.shape_4.setTransform(185.9,-20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAZQgSgQgDgMQgEgNAFgLQAFgKAIgIQAIgHAHgDIAFgEQgPARgCARQgCARAIAOQAIAPAKANQAMAMAJAHIAJAHQgjgTgPgQg");
	this.shape_5.setTransform(172.2,-62.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpAsQgkAAgdgFQgdgEgQgGIgPgEQA+AOAzAAQAzAAAlgLQAngKAcgQQAdgNASgQIASgRQgaAdgeAQQgmAYgoAKQgkAKgiAAIgEgBg");
	this.shape_6.setTransform(176,-47.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AgLhEIgJAIQgIAIgJARQgJASgDAXQgDAbAJAkQAAAAAKgIQAJgHAPgKQANgKAQgIQARgIAOgC");
	this.shape_7.setTransform(169.5,-22.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A33128").s().p("AgxAGQADgYAJgRQAJgQAIgJIAJgIIA+BTQgOACgRAJQgQAIgNAKIgYARIgKAIQgJgkADgbg");
	this.shape_8.setTransform(169.5,-22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAtQALgJAEgQQADgQgBgQQgBgRgDgNIgDgNIA5gFQAGAXgCAVQgDAUgGASQgFARgGALIgFALg");
	this.shape_9.setTransform(196.5,-68.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#842824").s().p("AhaHcQhHgDhCgRQhDgRg6giQhYg2gyhHQgxhIgLhXQgEgtADgjQAEgiAFgSQAGgVABgBIACgFIgGgDQgCgBgMgJQgMgKgQgSQgQgTgNgdQgNgcgDgnQgDgnANgyIADgLQACgJgBgNQgBgNgKgKIgKgKIgJgMQgEgGABgEIAAgBIAFgDQAGgDAMADQAMAEANAHQAOAHAKAIIAJAFIACgJIADgLIAKgaQAGgQAKgQQAJgSANgOQAMgPAQgHQgLAUgHAWQgHAWgFAWQgHAegCAlQgBAmAFAoQAEAoAMAlQALAmASAfQASAeAZATQAaATAhACQgOAJgLAWQgLAWgHAeQgGAfgBAfQAAAgAIAbQARA7AeApQAdAoArAcQAsAcA7AVQBKAbBRAQQBOAQBQgBQBQAABHgWQBIgWA3gwIAVABIACAAIABAAIATgKIApgVIAygdQAagQAUgQQAJgGAOgGQANgGAMgCQAMgDAFAGQAEAGgFAKQgGALgKAMQgJALgKAKIgFADIADAFQAMAWAJAWQAKAWAEARQAEAQgFAEQgCACgEgCIgMgJQgJgIgOgKQgPgJgVgFQgWgGgfADQgOACgZAGIg7AQIhlAaQg6AOhDAMQhCANhHAHQgxAEguAAIgtgBg");
	this.shape_10.setTransform(211.4,-41.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BA3B35").s().p("ABwFYQg4gGg2gRQg0gQgwgaQg1gbgpgqQgogrgag2Qgag1gIg8QgIg5ANg9QAAgFAFgFIAMgMQAHgGAGgHQAEgGABgIQAIgkgKgfQgJgfgTgbQgUgcgWgZIABAAIARAHQAPAGAUARQAUASASAiQATAhAIA3IAKBYQAGA4AIAtQAIAwARAlQARAmAgAbIABABQAXASAaATQAZASAhARQAgASAtAOQAtAPA9AKQA9AKBRAEQgxAZg2AIQggAFghAAQgWAAgXgCg");
	this.shape_11.setTransform(218.2,-36.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AJ3FgQAHAPAFAQQAGAQABANQABAMgGAGQgGAEgHgEQgGgEgJgIQgJgIgOgIQgNgIgUgFQgUgFgdADQgVADgqALQgrALg6APQg6AQhGAOQhFAPhLAIQhMAJhKgCQhMgChHgRQhIgRg+gmQhIgsgqgyQgqgygVgyQgUgygFgtQgEguADgkQAEgjAGgTQAFgUABgBQgBAAgMgJQgMgJgRgTQgRgTgNgeQgOgegEgoQgEgpAOg1QAAAAACgJQACgJgBgKQgBgMgHgIQgJgIgHgJQgIgJgBgIQgCgJALgFQAIgEANAEQAMADAMAGQAMAHAJAFQAIAFABABQAAgBADgMQAEgNAIgSQAIgTAMgTQAMgUARgOQAQgOAVgEQAAAAAIACQAIADANALQANAMAQAZQANAVASAWQARAWAWAUQAVAUAWANQAWAOAUACQABgBAKAEQAKAEAQAKQAQAKASAUQARAUAOAfQAOAgAHAuQAHA6AGAzQAFAwAIArQAIAqAQAiQAQAiAeAYQAXATAZATQAbAUAiARQAjASAvAOQAwAOBBAKQBBAKBXADQABAAAQgIQAQgIAZgNQAYgOAagQQAagQAVgQQAAAAAKgFQAIgFANgGQANgFAMgBQAMgBAHAHQAFAJgEALQgFALgJAMQgJALgHAIQgIAHgBABQABAAAFAKQAFAKAHAOg");
	this.shape_12.setTransform(211.4,-41.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A33128").s().p("AhKHnQhMgChHgRQhIgRg+gmQhIgsgqgyQgqgygVgyQgUgygFgtQgEguADgkQAEgjAGgTQAFgUABgBIgNgJQgMgJgRgTQgRgTgNgeQgOgegEgoQgEgpAOg1IACgJQACgJgBgKQgBgMgHgIIgQgRQgIgJgBgIQgCgJALgFQAIgEANAEQAMADAMAGIAVAMIAJAGIADgNQAEgNAIgSQAIgTAMgTQAMgUARgOQAQgOAVgEIAIACQAIADANALQANAMAQAZQANAVASAWQARAWAWAUQAVAUAWANQAWAOAUACIALADQAKAEAQAKQAQAKASAUQARAUAOAfQAOAgAHAuIANBtQAFAwAIArQAIAqAQAiQAQAiAeAYQAXATAZATQAbAUAiARQAjASAvAOQAwAOBBAKQBBAKBXADIARgIIApgVIAygeQAagQAVgQIAKgFQAIgFANgGQANgFAMgBQAMgBAHAHQAFAJgEALQgFALgJAMIgQATIgJAIIAGAKIAMAYQAHAPAFAQQAGAQABANQABAMgGAGQgGAEgHgEQgGgEgJgIQgJgIgOgIQgNgIgUgFQgUgFgdADQgVADgqALIhlAaQg6AQhGAOQhFAPhLAIQg+AHg7AAIgdAAg");
	this.shape_13.setTransform(211.4,-41.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AgNg1QAAABAMAKQAJALAUANQAUANAaAIQAZAJAcgCQAAAAADAFQADAFAAAHQAAAHgIAHQgIAGgUAFQgBAAgSABQgSABgdgBQgeAAgdgEQgggEgcgKQgcgKgQgT");
	this.shape_14.setTransform(35.2,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAeA1QgdAAgdgEQgggEgcgKQgcgKgQgTIB2g7IANALQAJALAUANQAUANAaAIQAZAJAcgCIADAFQADAFAAAHQAAAHgIAHQgIAGgUAFIgTABIgZABIgXgBg");
	this.shape_15.setTransform(35.2,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhOApQACgFAFgEIAFgDQAMgHALgJQAMgKAHgLQAHgOAAgTQAAgCAEgDQAFgDAIAAQAKgBARAHQAWAHAMAIQAQAJADAIQACAEgCAFIgCACQgDgMgMgKIgHgEQgLgHgMgBQgMgCgIACQgNAGgHALQgJAMgHALQgGAMgIAKQgHAKgLAGQgKAGgPAAQAAgEACgFg");
	this.shape_16.setTransform(-18.7,-48.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AAdg5QAiANANALQAOAMgGANQgDAHgKAKQgKANgSAOQgSANgZAJQgYAIgjgCQgPgCgGgIQgGgHABgKQACgKAJgIQACgCAEgBQAUgLANgOQANgQAAgaQgBgBAFgFQAEgEAMgCQAJgCAWAIg");
	this.shape_17.setTransform(-18.7,-47.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("Ag7BAQgPgCgGgIQgGgHABgKQACgKAJgIIAGgDQAUgLANgOQANgQAAgaIAEgGQAEgEAMgCQAJgCAWAIQAiANANALQAOAMgGANQgDAHgKAKQgKANgSAOQgSANgZAJQgTAGgZAAIgPAAg");
	this.shape_18.setTransform(-18.7,-47.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE4B3").s().p("Ag3AbIgDgBQAdgGATgLQATgJALgJIAKgKQACgFADgBIAEgCQAEAAAFAFIAIAMIADAGQgJgBgEgEIgIgEIgHADIgJAHIgEADQgWAOgPAGQgPAHgJABIgGAAIgGgBg");
	this.shape_19.setTransform(2.7,-64.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8A235").s().p("AgDADQgFgCAEgBIAGgCIAFgCQgBAGgCACIgCABIgFgCg");
	this.shape_20.setTransform(6.9,-62.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8A235").s().p("AhQATQgJgEgIgPIABgDIgDAAIgIACIgLAAQgGgBgDgDQgCgEAAgEIABgIQAEABABADQACAEADACQAFABAGgBQAFgCAFABQAEABADADIAGAGQAGACAIADQAIACAHgDQAHgCAGgDQAGgEAIgCQAHAAAGABIANADQAYAEAZAAQAYAAAVgCIAJAAIAOgEQAIgCAHgGQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgCADIgCAFQgEAFgOACQgOADgQABIgbAAIgdABQgSgBgQADQgNACgLAEQgNAEgLACIgHABQgHAAgGgDg");
	this.shape_21.setTransform(9,-58.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("ABmAKQgQgBgRgEQgRgEgPgEQgLgFgJgHQgKgGgHgKQAAgDgEgGQgEgFgEgGQgFgFgGgBQgFgBgEAHQgHALgOAJQgPAJgRAHQgQAIgMAEQgMADgBAAIgCAFQgDAFgCAGQgBAHAEAFQAEAFAHABQAHABAFgBIAGgBQAIAQAKAFQAJAGALgCQALgBANgEQAMgEANgCQAOgDALAAQAOABANgBQAHAAANAAQANAAAPgBQAPgBAMgDQALgEAEgHQAFgIABgDQAAgCgHgBQgHgBgSgDg");
	this.shape_22.setTransform(9,-62.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9C248").s().p("AhTA2QgKgFgIgQIgGABQgFABgHgBQgHgBgEgFQgEgFABgHQACgGADgFIACgFIANgDIAcgMQARgHAPgJQAOgJAHgLQAEgHAFABQAGABAFAFIAIALIAEAJQAHAKAKAGQAJAHALAFQAPAEARAEQARAEAQABIAZAEQAHABAAACIgGALQgEAHgLAEQgMADgPABIgcABIgUAAIgbAAQgLAAgOADQgNACgMAEQgNAEgLABIgEAAQgJAAgHgEg");
	this.shape_23.setTransform(9,-62.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9B0D0D").s().p("AgsAJQASABARgHQAOgFAIgQIAVAAIAMAAIgSAQQgLAGgOAIQgLAHgOAAQgPgBgHgJg");
	this.shape_24.setTransform(11.5,-56.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AAIAPQgMAHgNAAQgOAAgIgHQgIgHgEgIQgEgIgCgHQgBgGAAgBIB0ABIgHAHQgGAHgMAHQgMAJgNAGg");
	this.shape_25.setTransform(11,-56.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C12D05").s().p("AgmAPQgJgHgEgIQgEgHgBgHIgBgHIB0AAIgIAHIgSAOQgLAJgOAGQgLAIgOgBQgOAAgHgHg");
	this.shape_26.setTransform(11,-56.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("ABTgXQgNALgTAMQgTAPgWALQgTAKgTAAQgSgBgNgLQgNgMgHgMQgIgOgDgLQgEgKAAgBIC9ABQAAABgMALg");
	this.shape_27.setTransform(11.8,-55.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D8A235").s().p("Ag6AYQgNgLgIgNQgHgNgEgLIgEgLIC8AAIgLAMIggAYQgTAOgVALQgTALgUAAQgSgCgMgLg");
	this.shape_28.setTransform(11.8,-55.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhSBTIgGgBQgEAAgBgDIgBgFIABgEQAGgIAKgSQALgSAKgYQALgVAFgWIAJgoQABgFAAATQAAANgFAUIgLAmQgGAUgCAOQgCAOAGACQAPACAXgKQAVgKAXgRQAYgRARgPQARgSAFgNQgKAggSAUQgSAWgWAPQgWAOgTAIQgWAIgRADIgYAFIgFAAIAAAAg");
	this.shape_29.setTransform(38.3,-21.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgFBCQAOglAIgdIAAAAQAEgYgKgRQgKgSgPgOIghgYQgEgDADgGQADgGAGgGIAMgLIAIgGQAJgEAJAEIAOAIQAIAEAJgCQATAzABAyQABAxgWAqQgXArgwAcQAVgkAQgkg");
	this.shape_30.setTransform(43.3,-30.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("ABBiaQANAEAIANQAIAOAEATQAEATAAAUQABAVgBASQgBARgCAJQgFAegOAaQgOAagXAUQgRAOgWAMQgUAMgYAHQgYAIgXAAQgKAAgDgFQgDgEACgFQABgFAAAAQAFgGAKgSQAKgSALgXQALgYAGgWQAGgagCgWQgBgWgFgMQgCgJAAAGAg0hOQAAgHADgMQADgMAHgM");
	this.shape_31.setTransform(38.7,-28.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AhkCWQgDgEACgFIABgFQAFgGAKgSQAKgSALgXQALgYAGgWQAGgagCgWQgBgWgFgMQgCgJAAAGIgBgSQAAgHADgMQADgMAHgMIBoghQANAEAIANQAIAOAEATQAEATAAAUQABAVgBASQgBARgCAJQgFAegOAaQgOAagXAUQgRAOgWAMQgUAMgYAHQgYAIgXAAQgKAAgDgFg");
	this.shape_32.setTransform(38.7,-28.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B4B4B4").s().p("AgYA6QgPgCgLgNQgMgMgIgRQgIgPgGgRIgHgcIgDgLIC9AKIgIAMIgUAcQgNAOgQAQQgQAQgQAKQgNAJgNAAIgEAAg");
	this.shape_33.setTransform(11.4,-53.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B4B4B4").s().p("Ag5HQQg0gCgugVQgvgVglgkQAiAaAoAPQAoAPArACQA0ABAvgTQAygTAoglQAhgeAXgmQAYgnANgrQANgtABgvIABgMQAAg+gUg3QgIgVgGgfQgHgggFglIgJhLIgGhIQgCgjAAgZIAAgPIAAgIQAAgdgHgdQgHgdgRgWQAVAOANAVQAMAVAFAZQAFAZAAAaIAAAHIAAAPQAAAaACAiIAGBIIAJBLQAFAlAGAgQAHAfAHATQAVA6AAA+IgBAMQgBAvgNArQgNAsgYAnQgXAmghAeQgoAlgyATQgrASgxAAIgHAAg");
	this.shape_34.setTransform(12.6,-41.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5E5E5").s().p("AgrGTQgsgrgbg/QgGgXgCgZQgBgQgBgRQABg9AVg6IABgDIACgFIABgCQAYg+AWg8QANgkAMglQALglAKglQAGgeACgdQADgeABgeQABgVADgTQADgUAKgSQAJgTAMgQIAOgTQAIgKAJgIQAKgJALgEQAPgEAOAEQgKAKgIAKIgOASQgUApgEAuQgCAVgOAnQgBAXgJAhQgJAigOAnQgOAmgOApIggBLIgcBDIgEALQgZA6gEA/IAAAiQABAZAEAZQAXA/AnAuQAmAuA1AZQg5gUgrgsg");
	this.shape_35.setTransform(-6.8,-43.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AgRHaQg3gCgxgWQgwgXgmgpQgmgpgYg3QgGgYgCgYQgBgRAAgRQAAg9AVg5IAEgLIAZhCIAbhKQAOgoAMgnQALgmAIghQAHghAAgWQAMgmABgUQABguATgoIAPgXQAKgMALgLQALgLAMgEQASgFAPAGQAPAGAJAJQAGAKgDAHQAHgNAQgJQAPgIATgDQATgDARACIAYAEIAUAGQAeALARAWQAQAWAHAdQAHAcAAAdIAAAHIAAAPQgBAaADAiIAFBJQAEAmAFAlQAGAlAGAfQAHAeAHAVQAUA5AAA+IAAAMQgBAvgNAsQgNAsgYAmQgXAnghAeQgpAlgxATQguARgvAAIgGAAg");
	this.shape_36.setTransform(8.6,-42.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhMIZQglgBgkgLQgjgLgkgXQgTgNgTgTIglglIggghQA1AzBDAXQBEAXBPgHQBGgIA7ghQA8ggAqg1QArg0AVhCQAVhBgHhJQgCgagIgYQgHgZgJgWQgJgXgIgZIgCgKIgGgUQgDgKgFgIQgGgIgIgDQgLgEgOAHIACgQQAAgVgFgVIgLgtIgHggQgHgcgDghIgHhDIgCgbQgEgqgTgkQgSglgfgbQAnAPAeAaQAeAbASAjQASAkAEApQADAaAHAlQAIAmAKArQAKAsANArQANArAOAkQANAkANAVQAlBBAHBJQAHBKgWBCQgVBCgtA1QgtA0g+AhQg/AihLAHQgcADgdAAIgTAAg");
	this.shape_37.setTransform(19.7,-39.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2,1,1).p("AENh6QANAqANAlQAOAjANAWQAlBAAIBNQAFA9gPA6QgPA6ggAyQghAygvAmQgwAlg7AVQhOAbhDgBQhGgBg9gcQhYgphChjQgYgjgPgpQgPgpgEgtQgEgqAFgoQAGgnAOglQALgdAPgmQAOgoAQgtQAPgsANgrQANgrAHgjQAHgjgBgWQgFguAOgqQANgqAdghQAcghAogVQAngVAwgFQAtgEArANQAqAOAjAbQAiAcAWAmQAVAnAFAuQACAZAHAmQAIAlAKArQALArAMArg");
	this.shape_38.setTransform(16.4,-39.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgWIqQhGgBg9gcQhYgphChjQgYgjgPgpQgPgpgEgtQgEgqAFgoQAGgnAOglIAahDIAehVQAPgsANgrQANgrAHgjQAHgjgBgWQgFguAOgqQANgqAdghQAcghAogVQAngVAwgFQAtgEArANQAqAOAjAbQAiAcAWAmQAVAnAFAuQACAZAHAmQAIAlAKArQALArAMArQANAqANAlQAOAjANAWQAlBAAIBNQAFA9gPA6QgPA6ggAyQghAygvAmQgwAlg7AVQhLAahBAAIgFAAg");
	this.shape_39.setTransform(16.4,-39.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#59595B").s().p("AgGAGQgEgDgCgEIAAgHQAHAIAFAAQAHAAAHAAQgBACgDADQgDADgEABIgDAAQgCAAgEgDg");
	this.shape_40.setTransform(-19.8,-23.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7B7B7C").s().p("AABgBQgEgDgIACQADgEAEAAQAEgBAFADQAFAEABAEIABADQgFgGgGgCg");
	this.shape_41.setTransform(-19.6,-25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AARgCQACAGgEAHQgEAGgHACQgGABgGgEQgGgFgCgIQgCgGADgHQAEgGAHgCQAGgBAGAEQAHAFACAIg");
	this.shape_42.setTransform(-19.8,-24.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6D6D70").s().p("AgIAQQgGgFgCgIQgCgGADgHQAEgGAHgCQAGgBAGAEQAHAFACAIQACAGgEAHQgEAGgHACIgDAAQgEAAgFgDg");
	this.shape_43.setTransform(-19.8,-24.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7B7B7C").s().p("AgJAAIAGgBIAEgDIAEgBQADABABADIABACQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgBABQgGgFgJgBg");
	this.shape_44.setTransform(-13.5,-15.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#59595B").s().p("AgDAFQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBQgBgCABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIABgBQAFAFAHAAIgEACIgEADIgBABIgCgBg");
	this.shape_45.setTransform(-15.1,-14.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AAUgKQACAEgBAEQgBACgDACQgHAEgGADQgEACgGAEQgDACgEgBQgEgBgCgEQgCgDABgFQAAgDAEgBQAHgEAFgDQAEgDAGgEQAEgCAEACQAEABACAEg");
	this.shape_46.setTransform(-14.2,-15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6D6D70").s().p("AgNAQQgEgBgCgEQgCgDABgFQAAgDAEgBIAMgHIAKgHQAEgCAEACQAEABACAEQACAEgBAEQgBACgDACIgNAHIgKAGIgFACIgCgBg");
	this.shape_47.setTransform(-14.2,-15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#59595B").s().p("AAQAcIgQgbIgQgaIgJgPIADgCIAYAqQANAUALAVIgCACIgIgPg");
	this.shape_48.setTransform(-17.7,-20.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7B7B7C").s().p("AABAAIgagoIACgCIAJAQIAPAaIAQAaIAJAQIgCAAIgXgqg");
	this.shape_49.setTransform(-17.1,-20.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AAQAKQAIAOAKASQgEACgDACQgDABgEADQgKgSgIgOQgGgNgJgMQgIgPgMgSQAEgDACgCQADgCAEgCQAMATAIAOQAHAOAJAMg");
	this.shape_50.setTransform(-17.4,-20.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6D6D70").s().p("AACASIgPgZIgUghIAGgFIAHgEIAUAhIAQAaIASAgIgHAEIgHAEIgSggg");
	this.shape_51.setTransform(-17.4,-20.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BBBBBC").s().p("AgPAJQgOgIgIgOQARAQAaADQAQgBAQgEQgJAJgOADIgKABQgJAAgLgFg");
	this.shape_52.setTransform(-20.2,-20.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3E3E5").s().p("AACgDQgRgJgUgDIAJgDQANgCANAFQALAEAKAKQAKAIAFANQgQgQgSgHg");
	this.shape_53.setTransform(-18.6,-27.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D8D8D8").s().p("AgcAxQgRgNgHgYQgEgPADgPQADgPAKgLQAJgKAPgDQAPgDANAGQAPAGALAMQALANAEAQQAFAXgMASQgNASgWAGIgLABQgOAAgOgKg");
	this.shape_54.setTransform(-19.7,-24.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D6D6D8").s().p("AAeAEQgWgPgXgHQgagHgYAHQAGgLAJgHQAKgHANgDQATgDASAIQATAIAPAQQAPAQAFASQADARgCAOQgNgbgWgRg");
	this.shape_55.setTransform(-19.1,-27.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B6B6B7").s().p("AggAuQgWgQgJgeQgDgPAAgPQABgPAFgMIABAAQgDAlASAWQARAXAfAEQAfgCAegMIACAFQgHAOgNAKQgNAJgRAEIgNABQgTAAgRgMg");
	this.shape_56.setTransform(-20,-22.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("ABJgJQAFAUgHATQgHATgPANQgPANgVAEQgcAGgXgRQgYgRgJghQgFgVADgVQAEgVAMgPQANgOAUgEQAVgEATAJQAVAIAPARQAQARAFAWg");
	this.shape_57.setTransform(-19.5,-24.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C1C1C6").s().p("AgmBEQgYgRgJghQgFgVADgVQAEgVAMgPQANgOAUgEQAVgEATAJQAVAIAPARQAQARAFAWQAFAUgHATQgHATgPANQgPANgVAEIgNABQgVAAgRgMg");
	this.shape_58.setTransform(-19.5,-24.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9A9A9B").s().p("As0K7QCQjtCnjJQCnjJC/inQC+ioDeiLQDeiKD/hvIASgIIAQgHIATgHQkHBvjkCMQjkCMjECrQjGCpirDNQisDMiWDzIgDABIgCAAgAMyq5IADgBIAAAAIgEACg");
	this.shape_59.setTransform(47.6,-88);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DBDBDD").s().p("As6KuIAAgCQCSj4CujMQCtjMDLilQDHimDpiGQDpiHEJhtIghANIgdANIggANQj6BujaCHQjbCHi7CkQi9CiikDGQijDFiNDrQgBgEAAgEgAM4qzIgBAAIAEgBIAAAAIgCABg");
	this.shape_60.setTransform(47.1,-88.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("AM/q3QACgFgHgCQgDgBgDABQgCABgCACQi0BIisBWQisBWiiBoQigBoiVB+QjECmigDFQigDEiBDfQgBAAgDAFQgDAGAAAIQAAAJAGAJQAGAHAGgCQAGgBADgFQAEgEAAgBQCZjxCvjNQCvjMDHipQDGirDmiNQDliMEIhxQAGABACgEg");
	this.shape_61.setTransform(47.3,-88);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C1C1C6").s().p("As5K6QgGgJAAgJQAAgIADgGIAEgFQCBjfCgjEQCgjFDEimQCVh+CghoQCihoCshWQCshWC0hIQACgCACgBQADgBADABQAHACgCAFQgCAEgGgBQkIBxjlCMQjmCNjGCrQjHCpivDMQivDNiZDxIgEAFQgDAFgGABIgCABQgFAAgFgGg");
	this.shape_62.setTransform(47.3,-88);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("Aq8KkQAGgbAAghQgBgigFgiQgFgigEgdQgFgcgCgTQgBgSAFgCQAagGAfgJQAfgIAfgRQAggQAZgdQAagdAOgtQAOgugDhDQA0AIAmgKQAmgKAZgWQAagWAPgdQAQgdAIgdQAIgbADgZQADgYAAgOQA+ACAugPQAvgPAigZQAjgaAXgdQAVgfAQgcQAPgcAJgVQAJgWAGgHQA8AGAugLQAugJAigVQAigUAZgaQAZgZAUgaQASgaAPgUQAQgUAOgLQAOgJAbgIQAbgJAigKQAigKAjgNQAkgOAggSQAggSAXgZ");
	this.shape_63.setTransform(57.3,-89.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AARgJQgBgBgBgBQgDABgCABQgCABgDABQACABABABQACADgBACQAAABgEACQgEACgCgBQgFAAgCgDQgBgBgBAAQgDAAgCABQgCABgDABQABABABABQAGAGAJABQAGABAIgDQAHgEACgGQACgEgFgFg");
	this.shape_64.setTransform(128.3,-156.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C1C1C6").s().p("AgDAMQgJgBgGgGIgCgCIAFgCIAFgBIACABQACADAFAAQACABAEgCQAEgCAAgBQABgCgCgDIgDgCIAFgCIAFgCIACACQAFAFgCAEQgCAGgHAEQgGACgFAAIgDAAg");
	this.shape_65.setTransform(128.3,-156.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AAMgLQgBgCgBgBQgDACgCABQgCABgCABQACABABABQAEAEAAADQABACgEACQgDACgDgBQgEgBgEgEQgCAAgBgBQgCABgCAAQgCABgCABQABABABACQAIAHAKACQAIACAHgEQAGgEAAgHQgBgFgIgHg");
	this.shape_66.setTransform(100,-143.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C1C1C6").s().p("AAAAOQgKgCgIgHIgCgDIAEgCIAEgBIADABQAEAEAEABQADABADgCQAEgCgBgCQAAgDgEgEIgDgCIAEgCIAFgDIACADQAIAHABAFQAAAHgGAEQgEADgGAAIgFgBg");
	this.shape_67.setTransform(100,-143.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AAAgJQAEAEABAFQABACgCADQgCADgCAAQgDgBgEgEQgBgBgBgCQgCACgBACQgBABgBACQABACABABQAIAIAFABQAHACAFgGQADgGgCgJQgCgIgHgIQgBgBgCgCQgBACgBACQAAACAAACQAAABAAABg");
	this.shape_68.setTransform(-13.8,-45.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C1C1C6").s().p("AABATQgFgBgIgIIgCgDIACgDIADgEIACADQAEAEADABQACAAACgDQACgDgBgCQgBgFgEgEIAAgCIAAgEIACgEIADADQAHAIACAIQACAJgDAGQgEAFgFAAIgDgBg");
	this.shape_69.setTransform(-13.8,-45.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AAAgKQAEAFABAFQACACgCADQgCADgDgBQgEgCgFgEQgBgBgBgBQgCABgBAAQgBACgCACQACACABABQAKAJAGADQAJADAFgGQAEgFgDgKQgEgHgIgKQgCgCgCgBQgBADgCADQACACAAABg");
	this.shape_70.setTransform(9.3,-71.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C1C1C6").s().p("AACATQgGgDgKgJIgDgDIADgEIADgBIACACQAFAEAEACQADABACgDQACgDgCgCQgBgFgEgFIgCgDIADgGIAEADQAIAKAEAHQADAKgEAFQgDAEgFAAIgGgBg");
	this.shape_71.setTransform(9.3,-71.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AASACQgDgIgKgJQgCgCgCgBQgBACgDADQACACABABQAEAFACAFQABACgCADQgCACgDgBQgFgCgFgEQgCAAgBgCQgCABgBABQgBAAgCACQACABACACQAJAKAIADQAKADAFgFQAFgFgEgJg");
	this.shape_72.setTransform(32,-95.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C1C1C6").s().p("AACASQgIgDgJgKIgEgDIADgCIADgCIADACQAFAEAFACQADABACgCQACgDgBgCQgCgFgEgFIgDgDIAEgFIAEADQAKAJADAIQAEAJgFAFQgDADgFAAIgHgBg");
	this.shape_73.setTransform(32,-95.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AAUACQgCgHgKgJQgCgBgCgBQgCABgBABQgBABgBACQABABABACQAFAEABAEQABACgCADQgDABgDgBQgFgBgFgEQgCAAgBgCQgCABgCABQgBAAgCABQABACACABQAKAJAIADQALADAGgEQAFgFgDgIg");
	this.shape_74.setTransform(64.7,-119.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C1C1C6").s().p("AABAQQgIgDgKgJIgDgDIADgBIAEgCIADACQAFAEAFABQADABADgBQACgDgBgCQgBgEgFgEIgCgDIACgDIADgCIAEACQAKAJACAHQADAIgFAFQgEACgEAAIgJgBg");
	this.shape_75.setTransform(64.7,-119.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(2,1,1).p("AgnhXIg1BHQABABAEANQAEAKALASQAKATATARQASARAaAJQABAAALgKQAMgJAQgQQARgQAOgSQAOgTAFgPQAFgSgLgNQgPgRgVgIQgVgJgVgEQgSgDgOAAQgOAAAAAAg");
	this.shape_76.setTransform(-17.1,-40.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgrA+QgTgRgKgTQgLgSgEgKIgFgOIA1hHIAOAAQAOAAASADQAVAEAVAJQAVAIAPARQALANgFASQgFAPgOATQgOASgRAQQgQAQgMAJIgMAKQgagJgSgRg");
	this.shape_77.setTransform(-17.1,-40.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(2,1,1).p("AArguQAAAAgOAHQgOAHgRAJQgUAJgRAGQgRAHgIAAQgGAAgKACQgKAEgJAHQgJAGgFAHQgEAHAEAFQAEAGARACQAeADAggBQAfgCAdgGQAdgGATgJQAQgJAIgKQAIgJADgHQADgIAAAA");
	this.shape_78.setTransform(-4,13.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AhcAtQgRgCgEgGQgEgFAEgHQAFgHAJgGQAJgHAKgEQAKgCAGAAQAIAAARgHQARgGAUgJIAfgQIAOgHIBJAbIgDAIQgDAHgIAJQgIAKgQAJQgTAJgdAGQgdAGgfACIgVAAQgVAAgUgCg");
	this.shape_79.setTransform(-4,13.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BA3B35").s().p("AgQAIQAGgMABgKIABgKIAtgKQgBALgEAMIgJAVIgFAKIg2APQAOgNAGgOg");
	this.shape_80.setTransform(233.9,-2.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(2,1,1).p("AgLhEIgJAIQgIAIgJARQgJARgDAYQgDAbAJAkQAAgBAKgHQAJgHAPgKQANgKAQgIQARgJAOgC");
	this.shape_81.setTransform(169.5,-24.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A33128").s().p("AgxAHQADgZAJgRQAJgQAIgJIAJgIIA+BUQgOABgRAJQgQAIgNAKIgYARIgKAIQgJgkADgag");
	this.shape_82.setTransform(169.5,-24.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(2,1,1).p("AgJg1QgBABgLAKQgMALgUAOQgUAOgZAHQgaAKgcgCQAAAAgDAFQgCAFAAAHQgBAHAIAHQAIAHAVAEQAAAAASABQASABAegCQAdgCAggGQAigGAggLQAfgNAYgSQAXgVAJgf");
	this.shape_83.setTransform(20,12.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AhnA3IgSgBQgVgEgIgHQgIgHABgHQAAgHACgFIADgFQAcACAZgKQAagHAUgOQAUgOAMgLIALgLICogBQgIAfgXAVQgYASggANQgfALgjAGQgfAGgeACIgjABIgMAAg");
	this.shape_84.setTransform(20,12.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#999999").s().p("AhQA0QAAgFACgFQACgFAFgEIAFgDQAMgHALgKQAMgKAHgLQAHgOAAgUIAEgFQAFgDAIgBQAKAAARAHQAWAIAMAHQAQAJADAIQACAFgCAFIgCACQgDgNgMgJIgHgFQgLgHgMgBQgMgCgIACQgNAGgHAMQgJALgHAMQgGAMgIAKQgHALgLAGQgKAHgPAAIAAAAg");
	this.shape_85.setTransform(-18.7,-52);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(2,1,1).p("ABUgIQgDAHgKALQgKANgSAOQgSAOgZAIQgYAJgjgDQgPgBgGgIQgGgIABgKQACgKAJgIQACgCAEgCQAUgLANgPQANgQAAgbQgBAAAFgFQAEgFAMgCQAJgBAWAIQAiAMANANQAOAMgGANg");
	this.shape_86.setTransform(-18.7,-51.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#666666").s().p("Ag7BBQgPgBgGgIQgGgIABgKQACgKAJgIIAGgEQAUgLANgPQANgQAAgbIAEgFQAEgFAMgCQAJgBAWAIQAiAMANANQAOAMgGANQgDAHgKALQgKANgSAOQgSAOgZAIQgTAHgZAAIgPgBg");
	this.shape_87.setTransform(-18.7,-51.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFE4B3").s().p("Ag3AcIgDgCQAdgGATgLQATgJALgKIAKgKQACgFADgBIAEgCQAEAAAFAFIAIAMIADAHQgJgBgEgEQgFgEgDgBIgHAEIgJAHIgEADQgWAOgPAGQgPAHgJABIgHABIgFgBg");
	this.shape_88.setTransform(2.7,-68.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D8A235").s().p("AgDADQgFgCAEgBIAGgDIAFgBQgBAGgCACIgCABIgFgCg");
	this.shape_89.setTransform(6.9,-66.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D8A235").s().p("AhQAUQgJgFgIgPIABgEIgDABIgIACIgLAAQgGgBgDgDQgCgEAAgEIABgJQAEACABADQACADADACQAFACAGgCQAFgBAFAAQAEACADADIAGAGQAGACAIADQAIACAHgDQAHgCAGgDQAGgEAIgCQAHgBAGACIANADQAYAEAZAAQAYAAAVgCIAJgBQAGAAAIgDQAIgCAHgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAEIgCAFQgEAFgOACQgOAEgQAAIgbABIgdAAQgSAAgQACIgYAGQgNAFgLACIgHABQgHAAgGgDg");
	this.shape_90.setTransform(9,-62.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1,1,1).p("ABmAKQgQgBgRgFQgRgDgPgFQgLgFgJgHQgKgGgHgKQAAgDgEgGQgEgGgEgGQgFgFgGgBQgFgBgEAIQgHAKgOAKQgPAJgRAHQgQAIgMAEQgMAEgBAAIgCAEQgDAFgCAHQgBAHAEAGQAEAFAHAAQAHABAFgBIAGgBQAIARAKAFQAJAGALgCQALgBANgEQAMgEANgDQAOgCALAAQAOAAANAAQAHAAANAAQANAAAPgBQAPgBAMgEQALgDAEgHQAFgJABgDQAAgCgHgBQgHgBgSgDg");
	this.shape_91.setTransform(9,-66.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F9C248").s().p("AhTA3QgKgFgIgRIgGABIgMAAQgHAAgEgFQgEgGABgHQACgHADgFIACgEIANgEQAMgEAQgIQARgHAPgJQAOgKAHgKQAEgIAFABQAGABAFAFIAIAMIAEAJQAHAKAKAGQAJAHALAFQAPAFARADQARAFAQABIAZAEQAHABAAACIgGAMQgEAHgLADQgMAEgPABIgcABIgUAAIgbAAQgLAAgOACQgNADgMAEQgNAEgLABIgEABQgJAAgHgFg");
	this.shape_92.setTransform(9,-66.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9B0D0D").s().p("AgsAJQASABARgHQAOgFAIgQIAVAAIAMAAIgSAPQgLAHgOAIQgLAHgOAAQgPAAgHgKg");
	this.shape_93.setTransform(11.5,-60);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AAIAQQgMAHgNAAQgOAAgIgHQgIgIgEgIQgEgHgCgIQgBgGAAgBIB0ABIgHAGQgGAIgMAHQgMAJgNAHg");
	this.shape_94.setTransform(11,-60.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C12D05").s().p("AgmAPQgJgHgEgIQgEgHgBgIIgBgHIB0ABIgIAGQgHAIgLAHQgLAJgOAHQgLAHgOAAQgOAAgHgIg");
	this.shape_95.setTransform(11,-60.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("AAzAAQgTAPgWALQgTALgTAAQgSgBgNgMQgNgLgHgNQgIgOgDgLQgEgLAAgBIC9ABQAAABgMALQgNALgTANg");
	this.shape_96.setTransform(11.8,-59.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D8A235").s().p("Ag6AYQgNgLgIgNQgHgOgEgLIgEgMIC8ABIgLANIggAYQgTAPgVALQgTAKgUABQgSgCgMgMg");
	this.shape_97.setTransform(11.8,-59.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999999").s().p("AhYBUQgEAAgBgDIgBgFIABgFQAGgHAKgTQALgTAKgYQALgVAFgXIAJgpQABgGAAAUQAAANgFAVIgLAnQgGAVgCAOQgCAPAGACQAPACAXgLQAVgKAXgRQAYgSARgPQARgTAFgNQgKAhgSAUQgSAXgWAPQgWAOgTAJQgWAIgRADIgYAFIgFAAIAAAAIgGgBg");
	this.shape_98.setTransform(38.3,-24.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgFBDQAOglAIgeIAAAAQAEgYgKgTQgKgSgPgNIghgZQgEgDADgGQADgHAGgGIAMgMIAIgFQAJgEAJADIAOAIQAIAFAJgCQATA0ABA0QABAxgWAsQgXAsgwAcQAVgkAQgmg");
	this.shape_99.setTransform(43.3,-33.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(2,1,1).p("ABBieQANAEAIAOQAIAOAEATQAEAUAAAVQABAVgBASQgBASgCAJQgFAfgOAaQgOAagXAVQgRAPgWANQgUAMgYAHQgYAIgXAAQgKgBgDgEQgDgFACgFQABgEAAAAQAFgHAKgSQAKgTALgYQALgYAGgXQAGgbgCgWQgBgWgFgNQgEgMAAgBQAAAAABgIQAAgIADgMQADgMAHgM");
	this.shape_100.setTransform(38.7,-31.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#666666").s().p("AhkCaQgDgFACgFIABgEQAFgHAKgSQAKgTALgYQALgYAGgXQAGgbgCgWQgBgWgFgNIgEgNIABgIQAAgIADgMQADgMAHgMIBogiQANAEAIAOQAIAOAEATQAEAUAAAUQABAWgBASQgBASgCAJQgFAfgOAaQgOAagXAVQgRAPgWANQgUAMgYAHQgYAIgXAAQgKgBgDgEg");
	this.shape_101.setTransform(38.7,-31.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B4B4B4").s().p("AgYA7QgPgCgLgNQgMgMgIgRQgIgQgGgRIgHgdIgDgMIC9ALIgIAMIgUAcQgNAPgQARQgQAQgQAKQgNAKgNAAIgEgBg");
	this.shape_102.setTransform(11.4,-57.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B4B4B4").s().p("Ag5HbQg0gCgugVQgvgVglgmQAiAbAoAQQAoAPArACQA0ABAvgTQAygUAogmQAhgfAXgnQAYgnANgtQANgtABgxIABgMQAAg/gUg5QgIgVgGggQgHghgFgmIgJhNIgGhKQgCgjAAgbIAAgPIAAgHQAAgfgHgdQgHgegRgWQAVAOANAVQAMAWAFAaQAFAZAAAaIAAAIIAAAPQAAAbACAjIAGBKIAJBNQAFAmAGAgQAHAgAHAUQAVA7AAA/IgBAMQgBAwgNAtQgNAtgYAoQgXAnghAfQgoAmgyATQgrASgxAAIgHAAg");
	this.shape_103.setTransform(12.6,-44.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E5E5E5").s().p("AgrGdQgsgsgbhAQgGgZgCgYQgBgSgBgRQABg/AVg7IABgCIACgFIABgDQAYhAAWg9QANglAMgmQALgmAKgmQAGgeACgeQADgeABgfQABgWADgTQADgUAKgTQAJgTAMgRIAOgUQAIgKAJgIQAKgJALgEQAPgEAOAEQgKAJgIALIgOASQgUAqgEAwQgCAVgOAoQgBAXgJAjQgJAigOAoQgOAogOApIggBOIgcBEIgEALQgZA7gEBBIAAAjQABAaAEAZQAXBBAnAvQAmAvA1AZQg5gUgrgtg");
	this.shape_104.setTransform(-6.8,-46.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CCCCCC").s().p("AgRHmQg3gCgxgXQgwgYgmgpQgmgqgYg5QgGgYgCgZQgBgRAAgRQAAg/AVg7IAEgLIAZhDIAbhNQAOgpAMgnQALgnAIgiQAHgiAAgWQAMgoABgVQABguATgpIAPgYQAKgNALgKQALgLAMgFQASgFAPAGQAPAGAJAKQAGAKgDAIQAHgOAQgJQAPgJATgDQATgDARACIAYAEIAUAHQAeAKARAXQAQAXAHAdQAHAdAAAeIAAAIIAAAPQgBAaADAjIAFBKQAEAoAFAlQAGAnAGAgQAHAeAHAWQAUA6AABAIAAAMQgBAwgNAtQgNAtgYAoQgXAnghAfQgpAmgxATQguASgvAAIgGAAg");
	this.shape_105.setTransform(8.6,-45.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AhMImQglgBgkgLQgjgLgkgYQgTgNgTgTIglgnIgggiQA1A1BDAXQBEAYBPgHQBGgIA7giQA8ghAqg2QArg2AVhDQAVhDgHhKQgCgbgIgZQgHgZgJgXQgJgXgIgaIgCgKIgGgVQgDgKgFgIQgGgIgIgEQgLgEgOAHIACgQQAAgVgFgWIgLguIgHggQgHgdgDgjIgHhEIgCgcQgEgrgTglQgSglgfgdQAnAQAeAbQAeAcASAkQASAkAEAqQADAbAHAmQAIAnAKAsQAKAtANAsQANAsAOAlQANAlANAWQAlBCAHBLQAHBLgWBEQgVBEgtA2QgtA2g+AiQg/AihLAHQgcAEgdAAIgTgBg");
	this.shape_106.setTransform(19.7,-42.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(2,1,1).p("AENh+QANAsANAlQAOAlANAWQAlBBAIBPQAFA/gPA8QgPA7ggAzQghAzgvAnQgwAng7AVQhOAchDgBQhGgBg9gdQhYgqhChlQgYglgPgqQgPgqgEguQgEgrAFgoQAGgpAOgmQALgdAPgnQAOgpAQguQAPgtANgsQANgsAHglQAHgkgBgWQgFgvAOgrQANgqAdgjQAcgiAogWQAngVAwgFQAtgEArAOQAqANAjAdQAiAcAWAnQAVAoAFAvQACAaAHAmQAIAnAKAsQALAsAMArg");
	this.shape_107.setTransform(16.4,-43.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#666666").s().p("AgWI4QhGgBg9gdQhYgqhChlQgYglgPgqQgPgqgEguQgEgrAFgoQAGgpAOgmIAahEIAehXQAPgtANgsQANgsAHglQAHgkgBgWQgFgvAOgrQANgqAdgjQAcgiAogWQAngVAwgFQAtgEArAOQAqANAjAdQAiAcAWAnQAVAoAFAvQACAaAHAmQAIAnAKAsQALAsAMArQANAsANAlQAOAlANAWQAlBBAIBPQAFA/gPA8QgPA7ggAzQghAzgvAnQgwAng7AVQhLAbhCAAIgEAAg");
	this.shape_108.setTransform(16.4,-43.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#59595B").s().p("AgGAHQgEgEgCgEIAAgHQAHAIAFAAQAHABAHgBQgBACgDADQgDAEgEAAIgDAAQgCAAgEgCg");
	this.shape_109.setTransform(-19.8,-26.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7B7B7C").s().p("AABgBQgEgDgIACQADgEAEAAQAEgBAFAEQAFADABAFIABACQgFgGgGgCg");
	this.shape_110.setTransform(-19.6,-28);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1,1,1).p("AARgCQACAGgEAHQgEAGgHACQgGABgGgEQgGgFgCgIQgCgGADgHQAEgHAHgBQAGgCAGAFQAHAFACAIg");
	this.shape_111.setTransform(-19.8,-27.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6D6D70").s().p("AgIAQQgGgFgCgIQgCgGADgHQAEgHAHgBQAGgCAGAFQAHAFACAIQACAGgEAHQgEAGgHACIgDABQgEAAgFgEg");
	this.shape_112.setTransform(-19.8,-27.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7B7B7C").s().p("AgJABIAGgCIAEgDIAEgBQADABABADIABADQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAIgBABQgGgFgJAAg");
	this.shape_113.setTransform(-13.5,-18.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#59595B").s().p("AgDAFQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBQgBgCABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIABgBQAFAFAHAAIgEACIgEADIgBABIgCgBg");
	this.shape_114.setTransform(-15.1,-17.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1,1,1).p("AAUgLQACAFgBADQgBADgDACQgHAEgGADQgEADgGAEQgDACgEgCQgEgBgCgDQgCgEABgEQAAgEAEgBQAHgEAFgDQAEgDAGgEQAEgCAEABQAEACACADg");
	this.shape_115.setTransform(-14.2,-17.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6D6D70").s().p("AgNAQQgEgBgCgDQgCgEABgEQAAgEAEgBIAMgHIAKgHQAEgCAEABQAEACACAEQACAEgBAEQgBACgDACIgNAHIgKAHIgEABIgDgBg");
	this.shape_116.setTransform(-14.2,-17.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#59595B").s().p("AAQAdIgQgdIgQgaIgJgPIADgCIAYArQANAUALAXIgCABIgIgPg");
	this.shape_117.setTransform(-17.7,-23.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7B7B7C").s().p("AABAAIgagqIACgBIAJAQIAPAbIAQAbIAJAQIgCABIgXgsg");
	this.shape_118.setTransform(-17.1,-23.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("AAQALQAIAOAKASQgEACgDACQgDACgEACQgKgRgIgPQgGgOgJgMQgIgPgMgTQAEgDACgBQADgCAEgDQAMATAIAPQAHAOAJANg");
	this.shape_119.setTransform(-17.4,-23.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6D6D70").s().p("AACATIgPgbIgUghIAGgFIAHgEIAUAiIAQAaIASAgIgHAFIgHAEIgSggg");
	this.shape_120.setTransform(-17.4,-23.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E3E3E5").s().p("AACgDQgRgKgUgCIAJgDQANgCANAEQALAFAKAKQAKAIAFANQgQgQgSgHg");
	this.shape_121.setTransform(-18.6,-30.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D8D8D8").s().p("AgcAzQgRgNgHgZQgEgQADgPQADgPAKgLQAJgLAPgDQAPgDANAGQAPAGALANQALAMAEARQAFAXgMATQgNATgWAFIgLABQgOAAgOgJg");
	this.shape_122.setTransform(-19.7,-27.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D6D6D8").s().p("AAeAEQgWgPgXgHQgagHgYAGQAGgLAJgHQAKgHANgDQATgDASAIQATAIAPAQQAPARAFATQADARgCAOQgNgbgWgSg");
	this.shape_123.setTransform(-19.1,-30.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B6B6B7").s().p("AggAwQgWgRgJgfQgDgPAAgPQABgPAFgNIABAAQgDAmASAWQARAZAfADQAfgCAegNIACAGQgHAOgNAKQgNAKgRADIgOABQgTAAgQgLg");
	this.shape_124.setTransform(-20,-25.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1,1,1).p("ABIAeQgHAUgQANQgPANgUAFQgdAGgXgSQgYgRgJgiQgFgWAEgVQADgVANgQQAMgPAVgEQAVgDASAIQAVAJAPARQAQASAFAWQAFAVgGATg");
	this.shape_125.setTransform(-19.6,-27.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C1C1C6").s().p("AgmBFQgYgRgJgiQgFgWAEgVQADgVANgQQAMgPAVgEQAVgDASAIQAVAJAPARQAQASAFAWQAFAVgGATQgHAUgQANQgPANgUAFIgOACQgVAAgRgOg");
	this.shape_126.setTransform(-19.6,-27.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9A9A9B").s().p("As0K7QCQjtCnjKQCnjIC/inQC+ioDeiLQDeiKD/hwIASgHIAQgGIATgIQkHBvjkCNQjkCLjECrQjGCpirDNQisDNiWDyIgDABIgCAAgAMyq5IADgBIAAAAIgEACg");
	this.shape_127.setTransform(47.6,-90);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#DBDBDD").s().p("As6KuIAAgCQCSj4CujMQCtjMDLikQDHinDpiHQDpiHEJhtIghAPIgdALIggAPQj6BtjaCHQjbCHi7CkQi9CjikDEQijDGiNDqQgBgDAAgEgAM4qzIgBAAIAEgBIAAAAIgCABg");
	this.shape_128.setTransform(47.1,-90.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1).p("AAAgJQAEAEABAFQABACgCAEQgCADgCgBQgDgBgEgEQgBgBgBgCQgCACgBACQgBACgBACQABABABACQAIAIAFABQAHABAFgGQADgGgCgJQgCgIgHgIQgBgCgCgBQgBACgBACQAAACAAACQAAABAAABg");
	this.shape_129.setTransform(-13.8,-49.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C1C1C6").s().p("AABAUQgFgBgIgIIgCgDIACgEIADgEIACADQAEAEADABQACABACgDQACgEgBgCQgBgFgEgEIAAgCIAAgEIACgEIADADQAHAIACAIQACAJgDAGQgEAFgFAAIgDAAg");
	this.shape_130.setTransform(-13.8,-49.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(1,1,1).p("AAAgKQAEAFABAFQACADgCACQgCADgDgBQgEgCgFgEQgBgBgBgBQgCABgBABQgBABgCACQACACABACQAKAJAGACQAJADAFgFQAEgGgDgKQgEgIgIgJQgCgCgCgCQgBAEgCADQACACAAABg");
	this.shape_131.setTransform(9.3,-75.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C1C1C6").s().p("AACATQgGgCgKgJIgDgEIADgDIADgCIACACQAFAEAEACQADABACgDQACgCgCgDQgBgFgEgFIgCgDIADgHIAEAEQAIAJAEAIQADAKgEAGQgDAEgFAAIgGgCg");
	this.shape_132.setTransform(9.3,-75.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(1,1,1).p("AASACQgDgIgKgKQgCgBgCgCQgBADgDADQACABABACQAEAFACAFQABADgCACQgCACgDgBQgFgCgFgEQgCAAgBgCQgCABgBABQgBAAgCACQACACACACQAJAJAIADQAKADAFgEQAFgFgEgKg");
	this.shape_133.setTransform(32,-99.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C1C1C6").s().p("AACASQgIgDgJgJIgEgEIADgCIADgCIADACQAFAEAFACQADABACgCQACgCgBgDQgCgFgEgFIgDgDIAEgGIAEADQAKAKADAIQAEAKgFAFQgDADgFAAIgHgCg");
	this.shape_134.setTransform(32,-99.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1,1,1).p("AAUACQgCgHgKgJQgCgBgCgCQgCACgBABQgBABgBACQABABABABQAFAFABAEQABACgCADQgDABgDgBQgFgBgFgEQgCAAgBgCQgCABgCABQgBAAgCABQABACACABQAKAJAIADQALADAGgEQAFgEgDgJg");
	this.shape_135.setTransform(64.7,-124.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C1C1C6").s().p("AABAQQgIgDgKgJIgDgDIADgBIAEgCIADACQAFAEAFABQADABADgBQACgDgBgCQgBgEgFgFIgCgCIACgDIADgDIAEADQAKAJACAHQADAJgFAEQgEADgEAAIgJgCg");
	this.shape_136.setTransform(64.7,-124.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(2,1,1).p("AgZhZQgOgBAAABIg1BJQABABAEANQAEALALASQAKATATARQASASAaAKQABgBALgKQAMgJAQgQQARgRAOgSQAOgTAFgQQAFgSgLgOQgPgRgVgJQgVgJgVgEQgSgDgOAAg");
	this.shape_137.setTransform(-17.1,-44.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgrA/QgTgRgKgTQgLgSgEgLIgFgOIA1hJIAOAAQAOAAASADQAVAEAVAJQAVAJAPARQALAOgFASQgFAQgOATQgOASgRARQgQAQgMAJIgMALQgagKgSgSg");
	this.shape_138.setTransform(-17.1,-44.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(2,1,1).p("AgJg1QgBABgLAKQgMALgUAOQgUAOgZAHQgaAKgcgCQAAAAgDAFQgCAFAAAHQgBAHAIAHQAIAHAVAEQAAAAASABQASABAegCQAdgCAggGQAigGAggLQAfgNAYgSQAXgVAJgf");
	this.shape_139.setTransform(7.4,10.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AhnA3IgSgBQgVgEgIgHQgIgHABgHQAAgHACgFIADgFQAcACAZgKQAagHAUgOQAUgOAMgLIALgLICogBQgIAfgXAVQgYASggANQgfALgjAGQgfAGgeACIgjABIgMAAg");
	this.shape_140.setTransform(7.4,10.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BA3B35").s().p("AhSA4QAYgIAPgPQARgQAKgRQALgTAFgSIAHgdIACgMIBLAcQgDARgMAVQgNAUgQAVQgQAVgMAOIgMAPg");
	this.shape_141.setTransform(203.6,-7.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(2,1,1).p("AgLhEIgJAJQgIAHgJASQgJARgDAXQgDAbAJAkQAAAAAKgIQAJgHAPgKQANgKAQgIQARgIAOgC");
	this.shape_142.setTransform(169.5,-23.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A33128").s().p("AgxAGQADgYAJgQQAJgSAIgHIAJgJIA+BTQgOACgRAJQgQAIgNAKIgYARIgKAIQgJgkADgbg");
	this.shape_143.setTransform(169.5,-23.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#999999").s().p("AhOApQACgFAFgDIAFgEQAMgGALgKQAMgKAHgLQAHgOAAgUQAAgBAEgEQAFgDAIAAQAKAAARAGQAWAIAMAHQAQAKADAIQACAEgCAFIgCACQgDgMgMgKIgHgFQgLgGgMgCQgMgCgIADQgNAGgHALQgJAMgHALQgGAMgIAKQgHAKgLAHQgKAGgPAAQAAgFACgFg");
	this.shape_144.setTransform(-18.7,-50.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(2,1,1).p("ABUgIQgDAHgKAKQgKAOgSANQgSAOgZAIQgYAJgjgDQgPgBgGgIQgGgIABgKQACgKAJgIQACgCAEgBQAUgLANgPQANgQAAgaQgBgBAFgEQAEgFAMgCQAJgBAWAHQAiANANAMQAOAMgGANg");
	this.shape_145.setTransform(-18.7,-49.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#666666").s().p("Ag7BAQgPgBgGgIQgGgIABgKQACgKAJgIIAGgDQAUgLANgPQANgQAAgaIAEgFQAEgFAMgCQAJgBAWAHQAiANANAMQAOAMgGANQgDAHgKAKQgKAOgSANQgSAOgZAIQgTAHgZAAIgPgBg");
	this.shape_146.setTransform(-18.7,-49.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(2,1,1).p("AA5g+QgBABgSAJQgSAJgXAMQgaAMgWAIQgXAJgKAAQgIABgNADQgNAFgMAJQgMAIgGAJQgGAKAFAGQAGAIAWADQAnAEArgCQApgCAmgIQAmgIAYgMQAVgMALgOQALgLAEgLQADgKAAAA");
	this.shape_147.setTransform(3.4,13.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("Ah5A8QgWgDgGgIQgFgGAGgKQAGgJAMgIQAMgJANgFQANgDAIgBQAKAAAXgJQAWgIAagMIApgVIATgKIBfAkIgDAKQgEALgLALQgLAOgVAMQgYAMgmAIQgmAIgpACIgaABQgdAAgbgDg");
	this.shape_148.setTransform(3.4,13.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFE4B3").s().p("Ag3AbIgDgBQAdgGATgLQATgJALgKIAKgJQACgFADgCIAEgBQAEgBAFAGIAIALIADAHQgJgBgEgEQgFgEgDAAQgDAAgEADIgJAHIgEADQgWAOgPAGQgPAHgJABIgGAAIgGgBg");
	this.shape_149.setTransform(2.7,-66.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D8A235").s().p("AhQAUQgJgFgIgPIABgDIgDAAIgIACIgLAAQgGgBgDgDQgCgDAAgFIABgIQAEABABADQACAEADACQAFABAGgBQAFgCAFABQAEABADAEIAGAFQAGADAIACQAIACAHgCQAHgDAGgDQAGgEAIgBQAHgBAGABIANADQAYAEAZAAQAYAAAVgCIAJAAIAOgDQAIgDAHgGQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgCADIgCAFQgEAFgOADQgOADgQAAIgbABIgdAAQgSAAgQACIgYAGQgNAFgLACIgHAAQgGAAgHgCg");
	this.shape_150.setTransform(9,-60.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(1,1,1).p("ABmAKQgQgBgRgFQgRgDgPgFQgLgFgJgGQgKgHgHgJQAAgEgEgFQgEgGgEgGQgFgFgGgBQgFgBgEAIQgHAKgOAJQgPAKgRAHQgQAHgMAEQgMAEgBAAIgCAEQgDAFgCAHQgBAHAEAFQAEAFAHABQAHABAFgBIAGgBQAIAQAKAGQAJAFALgBQALgCANgEQAMgEANgCQAOgCALAAQAOAAANAAQAHgBANAAQANAAAPgBQAPgBAMgDQALgEAEgHQAFgIABgDQAAgCgHgBQgHgBgSgDg");
	this.shape_151.setTransform(9,-64.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F9C248").s().p("AhTA3QgKgGgIgQIgGABQgFABgHgBQgHgBgEgFQgEgFABgHQACgHADgFIACgEIANgEIAcgLQARgHAPgKQAOgJAHgKQAEgIAFABQAGABAFAFIAIAMIAEAJQAHAJAKAHQAJAGALAFQAPAFARADQARAFAQABIAZAEQAHABAAACQgBADgFAIQgEAHgLAEQgMADgPABIgcABIgUABIgbAAQgLAAgOACQgNACgMAEQgNAEgLACIgEAAQgJAAgHgEg");
	this.shape_152.setTransform(9,-64.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#9B0D0D").s().p("AgsAJQASABARgHQAOgFAIgQIAVAAIAMAAIgSAQQgLAHgOAHQgLAHgOAAQgPgBgHgJg");
	this.shape_153.setTransform(11.5,-58);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1,1,1).p("AAIAQQgMAHgNAAQgOgBgIgHQgIgHgEgIQgEgIgCgHQgBgGAAgBIB0ABIgHAHQgGAHgMAHQgMAJgNAHg");
	this.shape_154.setTransform(11.1,-58.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C12D05").s().p("AgnAPQgIgHgEgIQgEgIgCgHIgBgHIB0ABIgGAHQgIAHgLAHQgMAJgNAHQgLAHgNAAQgOgBgJgHg");
	this.shape_155.setTransform(11.1,-58.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1,1,1).p("AhPAAQgIgOgDgLQgEgKAAgBIC9ABQgBABgMALQgMALgTANQgTAOgVALQgUALgTAAQgSgCgNgLQgNgLgHgNg");
	this.shape_156.setTransform(11.8,-57.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D8A235").s().p("Ag7AYQgNgLgHgNQgIgOgDgLIgEgLIC8ABIgMAMIgfAYQgTAOgWALQgSALgUAAQgSgBgNgMg");
	this.shape_157.setTransform(11.8,-57.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#999999").s().p("AhYBTQgEgBgBgCIgBgGIABgEQAGgHAKgTQALgSAKgYQALgVAFgXIAJgoQABgFAAATQAAANgFAVIgLAmQgGAVgCAOQgCAOAGACQAPACAXgLQAVgKAXgRQAYgRARgPQARgSAFgNQgKAggSAUQgSAXgWAOQgWAOgTAJQgWAIgRADIgYAEIgFABIAAAAIgGgBg");
	this.shape_158.setTransform(38.3,-23.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgFBDQAOglAIgeIAAAAQAEgYgKgSQgKgSgPgNIghgZQgEgDADgGQADgGAGgGIAMgLIAIgGQAJgEAJADIAOAIQAIAFAJgCQATAzABAzQABAxgWArQgXArgwAcQAVgkAQgkg");
	this.shape_159.setTransform(43.3,-31.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(2,1,1).p("ABBicQANAEAIAOQAIAOAEASQAEAUAAAVQABAUgBASQgBASgCAJQgFAegOAaQgOAagXAVQgRAPgWAMQgUAMgYAHQgYAHgXABQgKgBgDgEQgDgFACgFQABgEAAAAQAFgHAKgSQAKgSALgYQALgXAGgXQAGgbgCgVQgBgWgFgNQgEgMAAgBQAAAAABgIQAAgHADgMQADgMAHgM");
	this.shape_160.setTransform(38.7,-30.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#666666").s().p("AhkCXQgDgEACgFIABgEQAFgHAKgSQAKgSALgYQALgXAGgXQAGgbgCgVQgBgWgFgNIgEgNIABgIQAAgHADgMQADgMAHgMIBoghQANADAIAOQAIAOAEASQAEAUAAAVQABAUgBASQgBASgCAJQgFAegOAaQgOAagXAVQgRAPgWAMQgUAMgYAHQgYAHgXABQgKgBgDgFg");
	this.shape_161.setTransform(38.7,-30.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#B4B4B4").s().p("AgYA7QgPgDgLgMQgMgMgIgRQgIgQgGgRIgHgcIgDgMIC9ALIgIAMIgUAcQgNAOgQAQQgQAQgQALQgNAJgNAAIgEAAg");
	this.shape_162.setTransform(11.4,-55.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B4B4B4").s().p("Ag5HUQg0gCgugUQgvgVglgmQAiAbAoAPQAoAPArACQA0ABAvgTQAygTAogmQAhgeAXgnQAYgmANgsQANgtABgvIABgMQAAg/gUg4QgIgVgGggQgHgfgFgmIgJhMIgGhJQgCgiAAgbIAAgPIAAgHQAAgegHgdQgHgdgRgWQAVANANAVQAMAWAFAZQAFAZAAAaIAAAIIAAAPQAAAaACAjIAGBJIAJBMQAFAlAGAfQAHAgAHAUQAVA5AAA/IgBAMQgBAwgNAsQgNAsgYAnQgXAmghAfQgoAlgyAUQgrARgxAAIgHAAg");
	this.shape_163.setTransform(12.6,-42.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E5E5E5").s().p("AgrGXQgsgsgbg/QgGgYgCgYQgBgRgBgRQABg+AVg6IABgDIACgFIABgCQAYg/AWg9QANgkAMglQALglAKgmQAGgeACgeQADgdABgfQABgVADgTQADgUAKgTQAJgTAMgQIAOgTQAIgLAJgIQAKgIALgEQAPgEAOAEQgKAJgIAKIgOATQgUApgEAvQgCAVgOAnQgBAXgJAiQgJAigOAnQgOAngOAqIggBMIgcBDIgEAKQgZA7gEBAIAAAjQABAZAEAZQAXA/AnAvQAmAvA1AYQg5gUgrgsg");
	this.shape_164.setTransform(-6.8,-44.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CCCCCC").s().p("AgRHfQg3gCgxgXQgwgXgmgpQgmgqgYg4QgGgXgCgZQgBgRAAgRQAAg9AVg7IAEgKIAZhDIAbhLQAOgoAMgnQALgnAIghQAHghAAgWQAMgnABgVQABgtATgpIAPgXQAKgNALgLQALgKAMgFQASgEAPAFQAPAGAJAKQAGAKgDAHQAHgOAQgIQAPgJATgDQATgDARACIAYAEIAUAHQAeAKARAXQAQAWAHAdQAHAcAAAeIAAAHIAAAPQgBAaADAjIAFBJQAEAnAFAlQAGAlAGAgQAHAeAHAVQAUA6AAA+IAAAMQgBAwgNAsQgNAtgYAmQgXAnghAeQgpAmgxATQguASgvAAIgGAAg");
	this.shape_165.setTransform(8.6,-44);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AhMIeQglgBgkgLQgjgLgkgYQgTgNgTgSIglgmIgggiQA1A0BDAXQBEAYBPgIQBGgHA7ghQA8ghAqg2QArg0AVhCQAVhCgHhKQgCgagIgZQgHgYgJgXQgJgXgIgZIgCgKIgGgUQgDgLgFgIQgGgIgIgDQgLgEgOAHIACgRQAAgUgFgWIgLgtIgHggQgHgcgDgiIgHhEIgCgbQgEgqgTglQgSglgfgcQAnAQAeAaQAeAbASAkQASAkAEApQADAaAHAnQAIAmAKArQAKAsANAsQANArAOAkQANAlANAVQAlBCAHBKQAHBKgWBDQgVBCgtA2QgtA1g+AhQg/AihLAHQgcAEgdAAIgTgBg");
	this.shape_166.setTransform(19.7,-40.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(2,1,1).p("AENh8QANAsANAkQAOAkANAWQAlBAAIBOQAFA+gPA6QgPA7ggAyQghAzgvAmQgwAmg7AVQhOAbhDgBQhGAAg9gdQhYgqhChjQgYgkgPgpQgPgqgEgtQgEgqAFgoQAGgpAOglQALgdAPgmQAOgpAQgsQAPgtANgsQANgrAHgkQAHgjgBgWQgFgvAOgqQANgqAdgiQAcghAogWQAngVAwgEQAtgFArAOQAqANAjAcQAiAcAWAnQAVAnAFAvQACAZAHAmQAIAlAKAsQALArAMArg");
	this.shape_167.setTransform(16.4,-41.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#666666").s().p("AgWIvQhGAAg9gdQhYgqhChjQgYgkgPgpQgPgqgEgtQgEgqAFgoQAGgpAOglIAahDIAehVQAPgtANgsQANgrAHgkQAHgjgBgWQgFgvAOgqQANgqAdgiQAcghAogWQAngVAwgEQAtgFArAOQAqANAjAcQAiAcAWAnQAVAnAFAvQACAZAHAmQAIAlAKAsQALArAMArQANArANAlQAOAkANAWQAlBAAIBOQAFA+gPA6QgPA7ggAyQghAzgvAmQgwAmg7AVQhLAahBAAIgFAAg");
	this.shape_168.setTransform(16.4,-41.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(2,1,1).p("AgJgmQAAABAJAHQAGAIAOAJQAPAKASAFQASAGAUgBQAAAAACAEQACADAAAFQAAAFgFAFQgGAFgPADQAAAAgNABQgOABgUAAQgVgBgVgDQgXgDgUgHQgUgHgLgO");
	this.shape_169.setTransform(39.5,8.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AAWAnQgVgBgVgDQgXgDgUgHQgUgHgLgOIBVgqIAJAIQAGAIAOAJQAPAKASAFQASAGAUgBIACAEQACADAAAFQAAAFgFAFQgGAFgPADIgNABIgYABIgKAAg");
	this.shape_170.setTransform(39.5,8.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#59595B").s().p("AgGAHQgEgEgCgEIAAgHQAHAIAFAAQAHAAAHAAQgBACgDADQgDADgEABIgDAAQgCAAgEgCg");
	this.shape_171.setTransform(-19.8,-25.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6D6D70").s().p("AgIAQQgGgFgCgIQgCgGADgHQAEgGAHgCQAGgBAGAEQAHAFACAIQACAGgEAHQgEAGgHACIgEAAQgDAAgFgDg");
	this.shape_172.setTransform(-19.8,-25.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#7B7B7C").s().p("AgJAAIAGgBIAEgDIAEgBQADABABADIABADQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgBABQgGgFgJgBg");
	this.shape_173.setTransform(-13.5,-17.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#59595B").s().p("AgDAFQgCAAgCgDQgBgCABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIABgBQAFAFAHAAIgEACIgEADIgBABIgCgBg");
	this.shape_174.setTransform(-15.1,-15.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(1,1,1).p("AAUgKQACAEgBAEQgBACgDACQgHAEgGADQgEADgGAEQgDACgEgCQgEgBgCgDQgCgEABgEQAAgEAEgBQAHgEAFgDQAEgDAGgEQAEgCAEACQAEABACAEg");
	this.shape_175.setTransform(-14.2,-16.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#6D6D70").s().p("AgNAQQgEgBgCgDQgCgEABgEQAAgEAEgBIAMgHIAKgHQAEgCAEACQAEABACAEQACAEgBAEQgBACgDACIgNAHIgKAHIgEABIgDgBg");
	this.shape_176.setTransform(-14.2,-16.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#59595B").s().p("AAQAcIgQgbIgQgaIgJgQIADgBIAYAqQANAUALAWIgCABIgIgPg");
	this.shape_177.setTransform(-17.6,-21.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#7B7B7C").s().p("AAAABIgZgqIABgBIAKAQIAOAaIARAbIAJAPIgBABIgZgqg");
	this.shape_178.setTransform(-17.1,-21.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(1,1,1).p("AAQAKQAIAOAKASQgEACgDACQgDACgEACQgKgRgIgOQgGgOgJgMQgIgPgMgSQAEgDACgCQADgCAEgCQAMATAIAOQAHAOAJAMg");
	this.shape_179.setTransform(-17.4,-21.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6D6D70").s().p("AACATIgPgaIgUghIAGgFIAHgEIAUAhIAQAaIASAgIgHAEIgHAEIgSgfg");
	this.shape_180.setTransform(-17.4,-21.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E3E3E5").s().p("AACgDQgRgKgUgCIAKgDQAMgCANAEQAKAFAKAKQALAHAFAOQgQgQgSgHg");
	this.shape_181.setTransform(-18.5,-29.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D8D8D8").s().p("AgcAyQgRgNgHgZQgEgPADgPQADgPAKgLQAJgLAPgDQAPgCANAGQAPAGALAMQALAMAEARQAFAXgMASQgNATgWAFIgLABQgOAAgOgJg");
	this.shape_182.setTransform(-19.7,-25.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D6D6D8").s().p("AAeAEQgWgPgXgHQgagHgYAGQAGgKAJgIQAKgHANgCQATgDASAIQATAIAPAPQAPARAFATQADAQgCAOQgNgbgWgRg");
	this.shape_183.setTransform(-19.1,-28.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B6B6B7").s().p("AggAuQgWgPgJgfQgDgPAAgPQABgPAFgNIABAAQgDAmASAWQARAYAfADQAfgBAegNIACAFQgHAOgNAKQgNAKgRADIgOACQgSAAgRgNg");
	this.shape_184.setTransform(-20,-24);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(1,1,1).p("ABIAeQgHATgQANQgPANgUAFQgdAGgXgRQgYgRgJgiQgFgVAEgVQADgWANgOQAMgPAVgEQAVgEASAJQAVAIAPARQAQARAFAXQAFAUgGATg");
	this.shape_185.setTransform(-19.6,-25.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#C1C1C6").s().p("AgmBFQgYgRgJgiQgFgVAEgVQADgWANgOQAMgPAVgEQAVgEASAJQAVAIAPARQAQARAFAXQAFAUgGATQgHATgQANQgPANgUAFQgIABgGAAQgVAAgRgMg");
	this.shape_186.setTransform(-19.6,-25.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#9A9A9B").s().p("As1K7QCSjtCmjKQCnjIDAinQC+ioDdiLQDeiKD+hwIASgHIAQgGIATgIQkGBvjkCNQjkCLjDCrQjGCpisDNQisDNiWDyIgEABIgCAAgAMxq5IAEgBIABAAIgFACg");
	this.shape_187.setTransform(47.7,-89.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1,1,1).p("ANAq4QABgFgGgCQgDAAgDABQgDABgBACQi0BIitBWQisBWiiBoQigBoiVB+QjECmigDEQigDFiBDeQgBABgCAFQgDAGgBAIQAAAJAGAIQAHAIAFgCQAGgCADgEQAEgEAAgBQCZjxCvjNQCvjMDIiqQDFirDmiMQDmiMEHhxQAGABADgFg");
	this.shape_188.setTransform(47.2,-89);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#C1C1C6").s().p("As5K5QgGgIAAgJQABgIADgGIADgGQCBjeCgjFQCgjEDEimQCVh+CghoQCihoCshWQCthWC0hIQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAIAGgBQAGACgBAFQgDAFgGgBQkHBxjmCMQjmCMjFCrQjICqivDMQivDNiZDxIgEAFQgDAEgGACIgCABQgEAAgGgHg");
	this.shape_189.setTransform(47.2,-89);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1,1,1).p("AAAgJQAEAFABAEQABADgCADQgCADgCgBQgDgBgEgDQgBgCgBgCQgCADgBABQgBACgBACQABABABACQAIAIAFABQAHABAFgGQADgGgCgJQgCgIgHgIQgBgBgCgCQgBACgBACQAAACAAACQAAABAAABg");
	this.shape_190.setTransform(-13.8,-47.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#C1C1C6").s().p("AABAUQgFgBgIgIIgCgDIACgEIADgEIACAEQAEADADABQACABACgDQACgDgBgDQgBgEgEgFIAAgCIAAgEIACgEIADADQAHAIACAIQACAJgDAGQgEAFgFAAIgDAAg");
	this.shape_191.setTransform(-13.8,-47.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1,1,1).p("AAAgJQAEAEABAFQACADgCACQgCADgDgBQgEgCgFgEQgBgBgBgBQgCABgBABQgBABgCACQACACABACQAKAJAGACQAJADAFgFQAEgGgDgKQgEgHgIgKQgCgCgCgBQgBADgCADQACACAAACg");
	this.shape_192.setTransform(9.3,-73.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C1C1C6").s().p("AACATQgGgCgKgJIgDgEIADgDIADgCIACACQAFAEAEACQADABACgDQACgCgCgDQgBgFgEgEIgCgEIADgGIAEADQAIAKAEAHQADAKgEAGQgDADgFAAIgGgBg");
	this.shape_193.setTransform(9.3,-73.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(1,1,1).p("AASACQgDgIgKgJQgCgCgCgBQgBACgDADQACACABACQAEAEACAFQABADgCACQgCADgDgCQgFgCgFgEQgCAAgBgCQgCACgBAAQgBAAgCACQACACACACQAJAJAIADQAKADAFgEQAFgFgEgKg");
	this.shape_194.setTransform(32,-97.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#C1C1C6").s().p("AACASQgIgDgJgJIgEgEIADgCIADgCIADACQAFAEAFACQADACACgDQACgCgBgDQgCgFgEgEIgDgEIAEgFIAEADQAKAJADAIQAEAKgFAFQgDACgFAAIgHgBg");
	this.shape_195.setTransform(32,-97.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(2,1,1).p("AgZhYQgOAAAAAAIg1BIQABABAEANQAEAKALATQAKASATARQASARAaAKQABAAALgKQAMgKAQgPQARgQAOgTQAOgTAFgPQAFgSgLgOQgPgQgVgJQgVgJgVgDQgSgEgOAAg");
	this.shape_196.setTransform(-17.1,-42.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgrA+QgTgRgKgSQgLgTgEgKIgFgOIA1hIIAOAAQAOAAASAEQAVADAVAJQAVAJAPAQQALAOgFASQgFAPgOATQgOATgRAQQgQAPgMAKIgMAKQgagKgSgRg");
	this.shape_197.setTransform(-17.1,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{y:-143.7,x:100}},{t:this.shape_66,p:{y:-143.7,x:100}},{t:this.shape_65,p:{y:-156.8}},{t:this.shape_64,p:{y:-156.8}},{t:this.shape_63,p:{y:-89.5}},{t:this.shape_62,p:{y:-88}},{t:this.shape_61,p:{y:-88}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{y:-20.2}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{y:-24.2}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{y:-41.8}},{t:this.shape_12,p:{y:-41.8}},{t:this.shape_11,p:{y:-36.5}},{t:this.shape_10,p:{y:-41.5}},{t:this.shape_9,p:{y:-68.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{y:-47.9}},{t:this.shape_5,p:{y:-62.2,x:172.2}},{t:this.shape_4,p:{y:-20.5}},{t:this.shape_3,p:{y:-6.2}},{t:this.shape_2,p:{y:-1.6}},{t:this.shape_1},{t:this.shape,p:{y:-116.6,x:141.6}}]}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{y:-124.5}},{t:this.shape_135,p:{y:-124.5}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_67,p:{y:-145.6,x:100}},{t:this.shape_66,p:{y:-145.6,x:100}},{t:this.shape_65,p:{y:-158.8}},{t:this.shape_64,p:{y:-158.8}},{t:this.shape_63,p:{y:-91.4}},{t:this.shape_62,p:{y:-89.9}},{t:this.shape_61,p:{y:-89.9}},{t:this.shape_128,p:{x:47.1,y:-90.4}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_52,p:{y:-23.1}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110,p:{y:-28}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{y:-66.4}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_13,p:{y:-43.7}},{t:this.shape_12,p:{y:-43.7}},{t:this.shape_11,p:{y:-38.4}},{t:this.shape_10,p:{y:-43.4}},{t:this.shape_9,p:{y:-70.8}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_6,p:{y:-49.8}},{t:this.shape_5,p:{y:-64.2,x:172.2}},{t:this.shape_4,p:{y:-22.4}},{t:this.shape_3,p:{y:-8.2}},{t:this.shape_2,p:{y:-3.5}},{t:this.shape_80,p:{y:-2.3}},{t:this.shape,p:{y:-118.5,x:141.6}}]},6).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.shape_136,p:{y:-123.6}},{t:this.shape_135,p:{y:-123.6}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_67,p:{y:-144.7,x:100.1}},{t:this.shape_66,p:{y:-144.7,x:100.1}},{t:this.shape_65,p:{y:-157.9}},{t:this.shape_64,p:{y:-157.9}},{t:this.shape_63,p:{y:-90.5}},{t:this.shape_189,p:{y:-89}},{t:this.shape_188,p:{y:-89}},{t:this.shape_128,p:{x:47.2,y:-89.5}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_52,p:{y:-21.6}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_42,p:{y:-25.7}},{t:this.shape_110,p:{y:-26.5}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_89,p:{y:-64.4}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_13,p:{y:-42.8}},{t:this.shape_12,p:{y:-42.8}},{t:this.shape_11,p:{y:-37.6}},{t:this.shape_10,p:{y:-42.6}},{t:this.shape_9,p:{y:-70}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_6,p:{y:-48.9}},{t:this.shape_5,p:{y:-63.3,x:172.3}},{t:this.shape_4,p:{y:-21.5}},{t:this.shape_141},{t:this.shape_2,p:{y:-2.6}},{t:this.shape_80,p:{y:-1.4}},{t:this.shape,p:{y:-117.6,x:141.7}}]},6).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{y:-124.5}},{t:this.shape_135,p:{y:-124.5}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_67,p:{y:-145.6,x:100}},{t:this.shape_66,p:{y:-145.6,x:100}},{t:this.shape_65,p:{y:-158.8}},{t:this.shape_64,p:{y:-158.8}},{t:this.shape_63,p:{y:-91.4}},{t:this.shape_189,p:{y:-89.9}},{t:this.shape_188,p:{y:-89.9}},{t:this.shape_128,p:{x:47.1,y:-90.4}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_52,p:{y:-23.1}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110,p:{y:-28}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{y:-66.4}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_13,p:{y:-43.7}},{t:this.shape_12,p:{y:-43.7}},{t:this.shape_11,p:{y:-38.4}},{t:this.shape_10,p:{y:-43.4}},{t:this.shape_9,p:{y:-70.8}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_6,p:{y:-49.8}},{t:this.shape_5,p:{y:-64.2,x:172.2}},{t:this.shape_4,p:{y:-22.4}},{t:this.shape_3,p:{y:-8.2}},{t:this.shape_2,p:{y:-3.5}},{t:this.shape_80,p:{y:-2.3}},{t:this.shape,p:{y:-118.5,x:141.6}}]},6).wait(6));

	// Layer 5
	this.instance_1 = new lib.circle("synched",0);
	this.instance_1.setTransform(16.4,15.5,1.505,0.327);
	this.instance_1.alpha = 0.699;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 128, 165, 89, 0)];
	this.instance_1.cache(-34,-34,67,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({scaleX:1.35,scaleY:0.27},0).wait(6).to({scaleX:1.51,scaleY:0.33},0).wait(6).to({scaleX:1.35,scaleY:0.27},0).wait(6));

	// Layer 6
	this.instance_2 = new lib.circle("synched",0);
	this.instance_2.setTransform(216.3,5.1,1.693,0.273);
	this.instance_2.alpha = 0.699;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 128, 165, 89, 0)];
	this.instance_2.cache(-34,-34,67,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-159.4,314.8,185.3);


(lib.penguin_standing = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.blingking3();
	this.instance.setTransform(-110.1,-6.7,1,1,0,0,180);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ah6l6QgHBFAEBMQAFBMAPBOQAPBOAYBHQAXBJAfA+QAcA+AkAtQAkAuAnAV");
	this.shape.setTransform(21.6,-49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3B35").s().p("AgQAIQAGgLABgLIABgKIAtgJQgBAKgEAMIgJAVIgFAKIg2APQAOgNAGgOg");
	this.shape_1.setTransform(113.9,66.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA3B35").s().p("Ag2AzQANgIALgQQALgQAGgQIALgfIACgOIA3AYQAAAVgFAQQgGASgGALIgGALg");
	this.shape_2.setTransform(99.5,65.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA3B35").s().p("AhSA4QAYgIAPgPQARgQAKgRQALgTAFgSIAHgdIACgMIBLAcQgDARgNAVQgNAUgPAVQgQAVgMAOIgMAPg");
	this.shape_3.setTransform(83.6,60.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA3B35").s().p("AhLBsQgOgLgMgMIgRgWIgGgKQAvgMAjgVQAigUAWgYQAYgYAPgWQANgXAHgPIAGgOIAvBYQgOAdgUAWQgWAYgXAUQgYATgVAOQgUAOgNAHIgOAIQgQgEgOgLg");
	this.shape_4.setTransform(65.9,46.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAZQgSgQgDgMQgEgNAFgLQAFgKAIgIQAIgHAHgDIAFgEQgPARgCARQgCARAIAOQAIAPAKANQAMAMAJAHIAJAHQgjgTgPgQg");
	this.shape_5.setTransform(52.2,4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpAsQgkAAgdgFQgdgEgQgGIgPgEQA+AOAzAAQAzAAAlgLQAngKAcgQQAdgNASgQIASgRQgaAdgeAQQgmAYgoAKQgkAKgiAAIgEgBg");
	this.shape_6.setTransform(56,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AgLhEIgJAJQgIAIgJARQgJARgDAYQgDAaAJAkQAAAAAKgIQAJgHAPgKQANgKAQgIQARgIAOgC");
	this.shape_7.setTransform(49.5,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A33128").s().p("AgxAGQADgXAJgSQAJgRAIgHIAJgJIA+BTQgOACgRAJQgQAIgNAKIgYARIgKAIQgJgkADgbg");
	this.shape_8.setTransform(49.5,44.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAtQALgJAEgQQADgQgBgQQgBgRgDgNIgDgNIA5gFQAGAXgCAVQgDAUgGASQgFARgGALIgFALg");
	this.shape_9.setTransform(76.5,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#842824").s().p("AhaHcQhHgDhCgRQhDgRg6giQhYg2gyhHQgxhIgLhXQgEgtADgjQAEgiAFgSQAGgVABgBIACgFIgGgDQgCgBgMgJQgMgKgQgSQgQgTgNgdQgNgcgDgnQgDgnANgyIADgLQACgJgBgNQgBgNgKgKIgKgKIgJgMQgEgGABgEIAAgBIAFgDQAGgDAMADQAMAEANAHQAOAHAKAIIAJAFIACgJIADgLIAKgaQAGgQAKgQQAJgSANgOQAMgPAQgHQgLAUgHAWQgHAWgFAWQgHAegCAlQgBAmAFAoQAEAoAMAlQALAmASAfQASAeAZATQAaATAhACQgOAJgLAWQgLAWgHAeQgGAfgBAfQAAAgAIAbQARA7AeApQAdAoArAcQAsAcA7AVQBKAbBRAQQBOAQBQgBQBQAABHgWQBIgWA3gwIAVABIACAAIABAAIATgKIApgVIAygdQAagQAUgQQAJgGAOgGQANgGAMgCQAMgDAFAGQAEAGgFAKQgGALgKAMQgJALgKAKIgFADIADAFQAMAWAJAWQAKAWAEARQAEAQgFAEQgCACgEgCIgMgJQgJgIgOgKQgPgJgVgFQgWgGgfADQgOACgZAGIg7AQIhlAaQg6AOhDAMQhCANhHAHQgxAEguAAIgtgBg");
	this.shape_10.setTransform(91.4,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BA3B35").s().p("ABwFYQg4gGg2gRQg0gQgwgaQg1gbgpgqQgogrgag2Qgag1gIg8QgIg5ANg9QAAgFAFgFIAMgMQAHgGAGgHQAEgGABgIQAIgkgKgfQgJgfgTgbQgUgcgWgZIABAAIARAHQAPAGAUARQAUASASAiQATAhAIA3IAKBYQAGA4AIAtQAIAwARAlQARAmAgAbIABABQAXASAaATQAZASAhARQAgASAtAOQAtAPA9AKQA9AKBRAEQgxAZg2AIQggAFghAAQgWAAgXgCg");
	this.shape_11.setTransform(98.2,30.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AJ3FgQAHAPAFAQQAGAQABANQABAMgGAGQgGAEgHgEQgGgEgJgIQgJgIgOgIQgNgIgUgFQgUgFgdADQgVADgqALQgrALg6APQg6AQhGAOQhFAPhLAIQhMAJhKgCQhMgChHgRQhIgRg+gmQhIgsgqgyQgqgygVgyQgUgygFgtQgEguADgkQAEgjAGgTQAFgUABgBQgBAAgMgJQgMgJgRgTQgRgTgNgeQgOgegEgoQgEgpAOg1QAAAAACgJQACgJgBgKQgBgMgHgIQgJgIgHgJQgIgJgBgIQgCgJALgFQAIgEANAEQAMADAMAGQAMAHAJAFQAIAFABABQAAgBADgMQAEgNAIgSQAIgTAMgTQAMgUARgOQAQgOAVgEQAAAAAIACQAIADANALQANAMAQAZQANAVASAWQARAWAWAUQAVAUAWANQAWAOAUACQABgBAKAEQAKAEAQAKQAQAKASAUQARAUAOAfQAOAgAHAuQAHA6AGAzQAFAwAIArQAIAqAQAiQAQAiAeAYQAXATAZATQAbAUAiARQAjASAvAOQAwAOBBAKQBBAKBXADQABAAAQgIQAQgIAZgNQAYgOAagQQAagQAVgQQAAAAAKgFQAIgFANgGQANgFAMgBQAMgBAHAHQAFAJgEALQgFALgJAMQgJALgHAIQgIAHgBABQABAAAFAKQAFAKAHAOg");
	this.shape_12.setTransform(91.4,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A33128").s().p("AhKHnQhMgChHgRQhIgRg+gmQhIgsgqgyQgqgygVgyQgUgygFgtQgEguADgkQAEgjAGgTQAFgUABgBIgNgJQgMgJgRgTQgRgTgNgeQgOgegEgoQgEgpAOg1IACgJQACgJgBgKQgBgMgHgIIgQgRQgIgJgBgIQgCgJALgFQAIgEANAEQAMADAMAGIAVAMIAJAGIADgNQAEgNAIgSQAIgTAMgTQAMgUARgOQAQgOAVgEIAIACQAIADANALQANAMAQAZQANAVASAWQARAWAWAUQAVAUAWANQAWAOAUACIALADQAKAEAQAKQAQAKASAUQARAUAOAfQAOAgAHAuIANBtQAFAwAIArQAIAqAQAiQAQAiAeAYQAXATAZATQAbAUAiARQAjASAvAOQAwAOBBAKQBBAKBXADIARgIIApgVIAygeQAagQAVgQIAKgFQAIgFANgGQANgFAMgBQAMgBAHAHQAFAJgEALQgFALgJAMIgQATIgJAIIAGAKIAMAYQAHAPAFAQQAGAQABANQABAMgGAGQgGAEgHgEQgGgEgJgIQgJgIgOgIQgNgIgUgFQgUgFgdADQgVADgqALIhlAaQg6AQhGAOQhFAPhLAIQg9AHg8AAIgdAAg");
	this.shape_13.setTransform(91.4,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AgNg1QAAABAMAKQAJALAUANQAUANAaAIQAZAJAcgCQAAAAADAFQADAFAAAHQAAAHgIAHQgIAGgUAFQgBAAgSABQgSABgdgBQgeAAgdgEQgggEgcgKQgcgKgQgT");
	this.shape_14.setTransform(-84.8,78.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAfA1QgeAAgdgEQgggEgcgKQgcgKgQgTIB3g7IAMALQAJALAUANQAUANAaAIQAZAJAcgCIADAFQADAFAAAHQAAAHgIAHQgIAGgUAFIgTABIgVABIgagBg");
	this.shape_15.setTransform(-84.8,78.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhOApQADgFAEgEIAFgDQAMgHALgJQAMgKAHgLQAHgOAAgTQAAgCAEgDQAFgDAIAAQAKgBARAHQAWAHANAIQAPAJADAIQACAEgCAFIgBACQgEgMgMgKIgHgEQgMgHgLgBQgMgDgIADQgNAGgHALQgJALgHAMQgGALgHALQgIAKgKAGQgLAGgPAAQAAgEACgFg");
	this.shape_16.setTransform(-138.7,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AAdg5QAhANAOAMQAOALgGANQgDAHgKALQgKAMgSAOQgSANgZAJQgZAIgigCQgQgCgFgHQgHgIACgKQACgKAJgHQACgDADgBQAVgLANgOQANgQAAgaQgBgBAFgEQAEgFAMgCQAJgCAWAIg");
	this.shape_17.setTransform(-138.7,19.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("Ag7BAQgQgCgFgHQgHgIACgKQACgKAJgHIAFgEQAVgLANgOQANgQAAgaIAEgFQAEgFAMgCQAJgCAWAIQAhANAOAMQAOALgGANQgDAHgKALQgKAMgSAOQgSANgZAJQgTAGgZAAIgPAAg");
	this.shape_18.setTransform(-138.7,19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE4B3").s().p("Ag3AbIgDgBQAcgGAVgLQASgJAKgJIALgKQABgFAEgBIAEgCQAEAAAEAFIAIAMIAEAGQgIgBgGgEIgHgEIgHADIgJAHIgEADQgWAOgPAGQgQAHgIABIgGAAIgGgBg");
	this.shape_19.setTransform(-117.3,1.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8A235").s().p("AgDADQgFgCAEgBIAGgCIAFgCQgBAGgCACIgCABIgFgCg");
	this.shape_20.setTransform(-113.1,4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8A235").s().p("AhQATQgJgEgIgPIABgDIgDAAIgIACIgLAAQgGgBgDgDQgCgEAAgEIABgIQAEABABADQACAEADACQAFABAGgBQAFgCAFABQAEABADADIAGAGQAGACAIADQAIACAHgDQAHgCAGgDQAGgEAIgCQAHAAAGABIANADQAYAEAZAAQAYAAAVgCIAJAAIAOgEQAIgCAHgGQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgCADIgCAFQgEAFgOACQgOADgQABIgbAAIgdABQgSgBgQADQgNACgLAEQgNAEgLACIgHABQgHAAgGgDg");
	this.shape_21.setTransform(-111,7.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("ABmAKQgQgBgRgEQgRgEgPgEQgLgFgJgHQgKgGgHgKQAAgDgEgGQgEgFgEgGQgFgFgGgBQgFgBgEAHQgHALgOAJQgPAJgRAHQgQAIgMAEQgMADgBAAIgCAFQgDAFgCAGQgBAHAEAFQAEAFAHABQAHABAFgBIAGgBQAIAQAKAFQAJAGALgCQALgBANgEQAMgEANgCQAOgDALAAQAOABANgBQAHAAANAAQANAAAPgBQAPgBAMgDQALgEAEgHQAFgIABgDQAAgCgHgBQgHgBgSgDg");
	this.shape_22.setTransform(-111,4.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9C248").s().p("AhTA2QgKgFgIgQIgGABQgFABgHgBQgHgBgEgFQgEgFABgHQACgGADgFIACgFIANgDIAcgMQARgHAPgJQAOgJAHgLQAEgHAFABQAGABAFAFIAIALIAEAJQAHAKAKAGQAJAHALAFQAPAEARAEQARAEAQABIAZAEQAHABAAACIgGALQgEAHgLAEQgMADgPABIgcABIgUAAIgbAAQgLAAgOADQgNACgMAEQgNAEgLABIgEAAQgJAAgHgEg");
	this.shape_23.setTransform(-111,4.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9B0D0D").s().p("AgtAJQAUACAPgIQAPgFAIgQIAUAAIANAAIgSAQQgLAGgOAIQgMAHgMAAQgPgBgJgJg");
	this.shape_24.setTransform(-108.5,10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AAIAPQgMAIgMAAQgPgBgIgHQgIgHgEgIQgEgIgBgGQgCgHAAgBIB1ABIgHAHQgHAHgMAHQgLAJgOAGg");
	this.shape_25.setTransform(-109,10.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C12D05").s().p("AgnAPQgIgHgEgIQgEgIgCgGIgBgIIB0ABIgGAHIgTAOQgMAJgNAGQgMAIgMgBQgOAAgJgHg");
	this.shape_26.setTransform(-109,10.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("ABSgXQgMALgSAMQgUAPgWALQgTAKgTAAQgSgBgNgLQgMgLgIgNQgHgOgEgKQgEgLAAgBIC9ABQAAABgNALg");
	this.shape_27.setTransform(-108.2,11.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D8A235").s().p("Ag6AYQgOgMgHgMQgIgNgDgMIgDgKIC8AAIgNAMIgfAXQgTAPgWALQgTAKgTAAQgSgBgMgLg");
	this.shape_28.setTransform(-108.2,11.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhYBSQgEgBgBgCIgBgFIABgEQAGgIAKgSQALgTAKgXQAKgVAGgWIAJgoIABAOQgBANgEAUIgLAmQgGAUgCAOQgCAOAGACQAPACAXgKQAVgLAXgQQAYgRARgPQARgSAFgNQgKAggSAUQgSAWgWAPQgWAOgTAIQgWAIgRADIgYAFIgFAAIgGgBg");
	this.shape_29.setTransform(-81.7,45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgFBCQAOgkAIgeIAAAAQAFgXgKgSQgLgSgOgNIgigZQgEgDADgFQADgHAGgGIAMgLIAIgGQAJgEAJAEIAOAIQAJAEAIgCQAUAzAAAzQABAwgWAqQgXArgvAcQAVgkAPgkg");
	this.shape_30.setTransform(-76.7,36.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("ABBiaQAMAEAJANQAHAOAEATQAEATABAUQABAVgBASQgBARgCAJQgFAegPAaQgOAZgXAVQgRAOgVAMQgUAMgYAHQgYAIgXAAQgLgBgCgEQgDgEABgFQABgFABAAQAFgGAKgSQAKgSALgXQAKgYAGgWQAHgbgCgVQgCgWgEgMQgDgJAAAGAg1hOQABgIADgLQADgMAHgM");
	this.shape_31.setTransform(-81.2,38.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AhkCWQgDgEABgFIACgFQAFgGAKgSQAKgSALgXQAKgYAGgWQAHgbgCgVQgCgWgEgMQgDgJAAAGIgBgSQABgIADgLQADgMAHgMIBoghQAMAEAJANQAHAOAEATQAEATABAUQABAVgBASQgBARgCAJQgFAegPAaQgOAZgXAVQgRAOgVAMQgUAMgYAHQgYAIgXAAQgLgBgCgEg");
	this.shape_32.setTransform(-81.2,38.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B4B4B4").s().p("AgYA6QgPgCgLgNQgMgMgIgRQgJgPgEgRQgGgQgDgMIgCgLIC9AKIgIAMIgUAcQgNAOgQAQQgQAQgRAKQgMAJgOAAIgDAAg");
	this.shape_33.setTransform(-108.6,13.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B4B4B4").s().p("Ag5HQQg0gDgugUQgvgVglglQAiAbAoAPQAoAPArABQA1ACAvgTQAxgTApglQAggfAYgmQAXgmANgsQANgsACgvIAAgMQAAg+gUg3QgIgVgGgfQgHgggFglIgJhLIgGhJQgCgiAAgaIAAgPIAAgHQAAgegHgcQgHgdgRgWQAVANANAVQAMAVAFAaQAFAZAAAZIAAAIIAAAPQAAAZACAjIAGBIQAEAmAFAlQAFAlAHAgQAGAfAIATQAUA5AAA+IAAAMQgCAvgNAsQgNAsgYAmQgXAnghAeQgoAlgxATQgtASgxAAIgGAAg");
	this.shape_34.setTransform(-107.4,25.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5E5E5").s().p("AgqGTQgtgsgag+QgHgYgBgYQgCgRAAgQQgBg+AWg5IABgDIACgFIABgDQAYg9AWg8QANglALglQANgkAJglQAGgeACgdIAEg8QABgVAEgTQACgUAKgSQAJgTAMgQQAHgKAHgJQAIgLAJgHQAKgJALgEQAPgEANAEQgJAJgHAKIgPATQgUAogEAvQgCAVgOAnQgBAWgKAiQgIAhgOAnIgcBQQgQAogQAjIgbBDIgGAKQgZA7gDA/QgBARABARQABAZAFAZQAVA/ApAuQAmAuA0AZQg5gVgqgrg");
	this.shape_35.setTransform(-126.8,23.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AgRHaQg3gBgxgXQgxgXglgpQgngpgWg3QgHgYgBgYQgCgRAAgQQgBg+AWg5IAEgKIAZhCIAbhLIAahOQAMgnAHghQAGggABgWQAMgnAAgUQACgtATgpIAPgXQAKgMALgLQALgKAMgFQARgFAQAGQAPAGAJAKQAGAJgDAIQAHgOAQgIQAQgJASgDQASgDARACQANABALADQAMADAJADQAeALARAWQARAWAGAdQAHAcAAAeIAAAHIAAAOQAAAaABAiQACAjAFAmQADAmAGAlQAFAlAGAgQAHAdAHAVQAUA5ABA+IAAAMQgCAvgOAsQgNAsgXAnQgXAmghAeQgpAlgxATQgtARgvAAIgHAAg");
	this.shape_36.setTransform(-111.3,24.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhNIZQglgBgkgLQgkgLgjgXQgTgNgTgSIgmgmIgdggQA0AzBBAWQBEAXBQgHQBFgIA8ggQA8ghAqg1QArg0AUhCQAVhBgGhJQgDgagHgYQgHgZgJgWQgJgXgIgZIgCgJIgGgUQgEgLgFgIQgFgIgIgDQgLgEgOAHIACgQQgBgVgEgVIgLgtIgIgfQgGgcgDgiIgHhDIgCgbQgEgqgTgkQgTglgegbQAnAPAeAbQAdAaATAkQASAjAEApQACAaAIAmQAHAlALAsQAKArANArQANArANAkQAOAkANAVQAlBBAHBKQAHBJgWBCQgVBCgtA1QgtA0g+AiQg/AhhKAHQgfADgfAAIgPAAg");
	this.shape_37.setTransform(-100.2,27.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2,1,1).p("AEOh6QAMAqANAlQAOAkANAVQAlBAAIBNQAFA9gOA6QgPA6ghAyQghAygvAmQgwAlg7AVQhOAbhDgBQhGgBg9gcQhYgphChjQgYgjgPgpQgPgpgEgtQgEgqAFgnQAGgoAOglQALgdAPgmQAOgoAQgsQAPgtANgrQANgrAIgjQAGgjgBgWQgFguAOgqQAOgpAcgiQAcghAogVQAngVAwgFQAtgEArANQArAOAiAbQAiAcAWAmQAVAnAFAuQACAaAIAlQAHAlAKArQALArANArg");
	this.shape_38.setTransform(-103.6,27.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgWIqQhGgBg9gcQhYgphChjQgYgjgPgpQgPgpgEgtQgEgqAFgnQAGgoAOglIAahDIAehUIAchYQANgrAIgjQAGgjgBgWQgFguAOgqQAOgpAcgiQAcghAogVQAngVAwgFQAtgEArANQArAOAiAbQAiAcAWAmQAVAnAFAuQACAaAIAlQAHAlAKArQALArANArQAMAqANAlQAOAkANAVQAlBAAIBNQAFA9gOA6QgPA6ghAyQghAygvAmQgwAlg7AVQhLAahBAAIgFAAg");
	this.shape_39.setTransform(-103.6,27.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#59595B").s().p("AgGAGQgEgDgCgEQgBgEABgDQAHAIAFAAQAHAAAHAAQgBACgDADQgDADgEABIgDAAQgCAAgEgDg");
	this.shape_40.setTransform(-139.8,43.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7B7B7C").s().p("AABgBQgEgDgIACQADgEAEAAQAEgBAFADQAFAEABAEIABADQgFgGgGgCg");
	this.shape_41.setTransform(-139.6,41.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AARgCQACAGgEAHQgEAGgHACQgGABgGgEQgGgFgCgIQgCgGADgHQAEgGAHgCQAGgBAGAEQAHAFACAIg");
	this.shape_42.setTransform(-139.8,42.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6D6D70").s().p("AgIAQQgGgFgCgIQgCgGADgHQAEgGAHgCQAGgBAGAEQAHAFACAIQACAGgEAHQgEAGgHACIgDAAQgEAAgFgDg");
	this.shape_43.setTransform(-139.8,42.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7B7B7C").s().p("AgJAAIAGgBIAEgDIAEgBQADABABADIABACQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgBABQgGgFgJgBg");
	this.shape_44.setTransform(-133.5,51);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#59595B").s().p("AgDAFQgCAAgCgDQgBgCABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIABgBQAFAFAHAAIgEACIgEADIgBABIgCgBg");
	this.shape_45.setTransform(-135.1,52.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AAUgKQACAEgBAEQgBACgDACQgHAEgGADQgEACgGAEQgDACgEgBQgEgBgCgEQgCgDABgFQAAgDAEgBQAHgEAFgDQAEgDAGgEQAEgCAEACQAEABACAEg");
	this.shape_46.setTransform(-134.2,51.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6D6D70").s().p("AgNAQQgEgBgCgEQgCgDABgFQAAgDAEgBIAMgHIAKgHQAEgCAEACQAEABACAEQACAEgBAEQgBACgDACIgNAHIgKAGIgFACIgCgBg");
	this.shape_47.setTransform(-134.2,51.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#59595B").s().p("AAQAcIgQgbIgQgaIgJgQIADgBIAYAqQANAUALAVIgCACIgIgPg");
	this.shape_48.setTransform(-137.7,46.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7B7B7C").s().p("AAAABIgZgpIABgBIAKAPIAOAaIARAaIAJAPIgBABIgZgpg");
	this.shape_49.setTransform(-137.1,46.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AAQAKQAIAOAKASQgEACgDACQgDABgEADQgKgSgIgOQgGgNgJgMQgIgPgMgSQAEgDACgCQADgCAEgCQAMATAIAOQAHAOAJAMg");
	this.shape_50.setTransform(-137.4,46.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6D6D70").s().p("AACASIgPgZIgUghIAGgFIAHgEIAUAhIAQAaIASAgIgHAEIgHAEIgSggg");
	this.shape_51.setTransform(-137.4,46.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BBBBBC").s().p("AgPAJQgOgIgIgOQARAQAaADQAQgBAQgEQgJAJgOADIgKABQgJAAgLgFg");
	this.shape_52.setTransform(-140.2,46.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3E3E5").s().p("AACgDQgRgJgUgDIAJgDQANgCANAFQALAEAJAKQALAIAFANQgQgQgSgHg");
	this.shape_53.setTransform(-138.6,39);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D8D8D8").s().p("AgcAxQgRgNgHgYQgEgPADgPQADgPAKgLQAJgKAPgDQAPgDANAGQAPAGALAMQALANAEAQQAFAXgMASQgNASgWAGIgLABQgOAAgOgKg");
	this.shape_54.setTransform(-139.7,42.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D6D6D8").s().p("AAeAEQgWgPgXgHQgagHgYAHQAGgLAJgHQAKgHANgDQATgDASAIQATAIAPAQQAPAQAFASQADARgCAOQgNgbgWgRg");
	this.shape_55.setTransform(-139.1,39.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B6B6B7").s().p("AggAuQgWgQgJgeQgDgPAAgPQABgPAFgMIABAAQgDAlASAWQARAXAfAEQAfgCAegMIACAFQgHAOgNAKQgNAJgRAEIgNABQgTAAgRgMg");
	this.shape_56.setTransform(-140,44.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("ABJgJQAFAUgHATQgHASgPANQgPANgVAFQgcAGgXgRQgYgRgJgiQgGgVAEgUQAEgVAMgPQANgPAUgEQAVgDATAIQAUAIAQASQAQAQAFAXg");
	this.shape_57.setTransform(-139.5,42.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C1C1C6").s().p("AgmBEQgYgRgJgiQgGgVAEgUQAEgVAMgPQANgPAUgEQAVgDATAIQAUAIAQASQAQAQAFAXQAFAUgHATQgHASgPANQgPANgVAFQgHACgGAAQgVAAgRgNg");
	this.shape_58.setTransform(-139.5,42.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9A9A9B").s().p("As1K7QCSjtCmjJQCmjJDBinQC+ioDdiLQDeiKD/hwIASgHIAPgHIATgHQkGBvjkCNQjkCLjDCrQjGCpisDNQisDMiWDzIgEABIgCAAgAMxq5IAEgBIABAAIgFACg");
	this.shape_59.setTransform(-72.4,-21.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DBDBDD").s().p("As6KuIAAgCQCSj4CujMQCtjMDLikQDHinDpiHQDpiHEJhtIghAPIgdAMIggANQj6BujaCHQjbCHi7CkQi9CjikDEQijDGiNDrQgBgEAAgEgAM4qzIgBAAIAEgBIAAAAIgCABg");
	this.shape_60.setTransform(-72.9,-21.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("AM/q3QACgFgHgCQgDgBgDABQgDABgBACQi0BIisBWQisBWiiBoQigBoiVB+QjFCmifDFQigDEiBDfQgBAAgDAFQgDAGAAAIQAAAJAGAJQAGAHAGgCQAFgCAEgEQAEgEAAgBQCZjxCvjNQCujMDIipQDGisDmiMQDliMEIhxQAGABACgEg");
	this.shape_61.setTransform(-72.7,-21.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C1C1C6").s().p("As5K6QgGgJAAgJQAAgIADgGQADgFABAAQCBjfCgjEQCfjFDFimQCVh+CghoQCihoCshWQCshWC0hIQABgCADgBQADgBADABQAHACgCAFQgCAEgGgBQkIBxjlCMQjmCMjGCsQjICpiuDMQivDNiZDxIgEAFQgEAEgFACIgCABQgFAAgFgGg");
	this.shape_62.setTransform(-72.7,-21.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("Aq8KkQAGgbAAghQgBgigFgiQgFgigEgdQgFgcgCgTQgBgSAFgCQAagGAfgJQAfgIAfgRQAggQAZgdQAagdAOgtQAOgugDhDQA0AIAmgKQAmgKAZgWQAagWAPgdQAQgdAIgdQAIgbADgZQADgYAAgOQA+ACAugPQAvgPAigZQAjgaAXgdQAVgfAQgcQAPgcAJgVQAJgWAGgHQA8AGAugLQAugJAigVQAigUAZgaQAZgZAUgaQASgaAPgUQAQgUAOgLQAOgJAbgIQAbgJAigKQAigKAjgNQAkgOAggSQAggSAXgZ");
	this.shape_63.setTransform(-62.7,-22.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AARgJQgBgBgBgBQgDABgCABQgCABgDABQACABABABQACADgBACQAAABgEACQgEACgCgBQgFAAgCgDQgBgBgBAAQgDAAgCABQgCABgDABQABABABABQAGAGAJABQAGABAIgDQAHgEACgGQACgEgFgFg");
	this.shape_64.setTransform(8.3,-90);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C1C1C6").s().p("AgDAMQgJgBgGgGIgCgCIAFgCIAFgBIACABQACADAFAAQACABAEgCQAEgCAAgBQABgCgCgDIgDgCIAFgCIAFgCIACACQAFAFgCAEQgCAGgHAEQgGACgFAAIgDAAg");
	this.shape_65.setTransform(8.3,-90);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AAMgLQgBgCgBgBQgDACgCABQgCABgCABQACABABABQAEAEAAADQABACgEACQgDACgDgBQgEgBgEgEQgCAAgBgBQgCABgCAAQgCABgCABQABABABACQAIAHAKACQAIACAHgEQAGgEAAgHQgBgFgIgHg");
	this.shape_66.setTransform(-20,-76.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C1C1C6").s().p("AAAAOQgKgCgIgHIgCgDIAEgCIAEgBIADABQAEAEAEABQADABADgCQAEgCgBgCQAAgDgEgEIgDgCIAEgCIAFgDIACADQAIAHABAFQAAAHgGAEQgEADgGAAIgFgBg");
	this.shape_67.setTransform(-20,-76.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AAAgJQAEAEABAFQABACgCADQgCADgCAAQgDgBgEgEQgBgBgBgCQgCACgBACQgBABgBACQABACABABQAIAIAFABQAHACAFgGQADgGgCgJQgCgIgHgIQgBgBgCgCQgBACgBACQAAACAAACQAAABAAABg");
	this.shape_68.setTransform(-133.8,21);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C1C1C6").s().p("AABATQgFgBgIgIIgCgDIACgDIADgEIACADQAEAEADABQACAAACgDQACgDgBgCQgBgFgEgEIAAgCIAAgEIACgEIADADQAHAIACAIQACAJgDAGQgEAFgFAAIgDgBg");
	this.shape_69.setTransform(-133.8,21);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AAAgKQAEAFABAFQACACgCADQgCADgDgBQgEgCgFgEQgBgBgBgBQgCABgBAAQgBACgCACQACACABABQAKAJAGADQAJADAFgGQAEgFgDgKQgEgHgIgKQgCgCgCgBQgBADgCADQACACAAABg");
	this.shape_70.setTransform(-110.7,-4.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C1C1C6").s().p("AACATQgGgDgKgJIgDgDIADgEIADgBIACACQAFAEAEACQADABACgDQACgDgCgCQgBgFgEgFIgCgDIADgGIAEADQAIAKAEAHQADAKgEAFQgDAEgFAAIgGgBg");
	this.shape_71.setTransform(-110.7,-4.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AASACQgDgIgKgJQgCgCgCgBQgBACgDADQACACABABQAEAFACAFQABACgCADQgCACgDgBQgFgCgFgEQgCAAgBgCQgCABgBABQgBAAgCACQACABACACQAJAKAIADQAKADAFgFQAFgFgEgJg");
	this.shape_72.setTransform(-88,-28.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C1C1C6").s().p("AACASQgIgDgJgKIgEgDIADgCIADgCIADACQAFAEAFACQADABACgCQACgDgBgCQgCgFgEgFIgDgDIAEgFIAEADQAKAJADAIQAEAJgFAFQgDADgFAAIgHgBg");
	this.shape_73.setTransform(-88,-28.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AAUACQgCgHgKgJQgCgBgCgBQgCABgBABQgBABgBACQABABABACQAFAEABAEQABACgCADQgDABgDgBQgFgBgFgEQgCAAgBgCQgCABgCABQgBAAgCABQABACACABQAKAJAIADQALADAGgEQAFgFgDgIg");
	this.shape_74.setTransform(-55.3,-52.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C1C1C6").s().p("AABAQQgIgDgKgJIgDgDIADgBIAEgCIADACQAFAEAFABQADABADgBQACgDgBgCQgBgEgFgEIgCgDIACgDIADgCIAEACQAKAJACAHQADAIgFAFQgEACgEAAIgJgBg");
	this.shape_75.setTransform(-55.3,-52.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(2,1,1).p("AgnhXIg0BHQAAABAEANQAEAKALASQAKASATASQASARAaAJQABAAALgKQAMgJARgQQAQgQAOgSQAOgTAFgPQAFgSgLgNQgPgRgVgIQgVgJgVgEQgSgDgOAAg");
	this.shape_76.setTransform(-137.1,26);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgrA+QgTgSgKgSQgLgSgEgKIgEgOIA0hHIAOAAQAOAAASADQAVAEAVAJQAVAIAPARQALANgFASQgFAPgOATQgOASgQAQQgRAQgMAJIgMAKQgagJgSgRg");
	this.shape_77.setTransform(-137.1,26);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(2,1,1).p("AArguQAAAAgOAHQgOAGgRAJQgUAKgRAGQgRAHgIAAQgGAAgKADQgKADgJAHQgJAGgFAHQgEAHAEAFQAEAFARADQAeADAhgBQAegCAdgGQAdgFATgKQAQgJAIgKQAIgJADgHIADgI");
	this.shape_78.setTransform(-124,80.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AhcAtQgRgCgEgGQgEgFAEgHQAFgHAJgGQAJgGAKgEQAKgDAGAAQAIAAARgHIAlgPIAfgQIAOgHIBJAbIgDAHQgDAJgIAIQgIAKgQAJQgTAJgdAGQgdAGgeACIgWAAQgVAAgUgCg");
	this.shape_79.setTransform(-124,80.5);

	this.instance_1 = new lib.circle("synched",0);
	this.instance_1.setTransform(-103.6,82.3,1.505,0.327);
	this.instance_1.alpha = 0.699;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 128, 165, 89, 0)];
	this.instance_1.cache(-34,-34,67,67);

	this.instance_2 = new lib.circle("synched",0);
	this.instance_2.setTransform(96.3,71.9,1.693,0.273);
	this.instance_2.alpha = 0.699;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 128, 165, 89, 0)];
	this.instance_2.cache(-34,-34,67,67);

	this.addChild(this.instance_2,this.instance_1,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156.9,-92.6,314.8,185.3);


(lib.penguin_crying = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE4B3").s().p("AAuApQgHgBgLgHQgLgIgOgRIgRgYIgIgKIgBgBIgGABIgLACIgLABIAFgFQAFgGAHgEQAIgEAHABIAGAKQAFAJAIAOQAJAMANAOQANAOARAKIgBAAIgFgBg");
	this.shape.setTransform(17.6,-24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8A235").s().p("AgEAEQgCgEAAgCIAAgFIAGAEQADADADACQAEAEgHABIgCABQgDAAgCgEg");
	this.shape_1.setTransform(14.5,-23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8A235").s().p("AAuAYQgKgFgLgIIgKgGQghgUgogCQgRAAgLABQgLABgIADIgPAHIADgLIACgFIAOgDIAigCQAUgBAUACQAUADALAHQAMAIAMAGIAZAKIAKADQADABACgCIAGgCIAOgGQAHgDAHAAQANABAEAEQADAFgCAEQgEAFgHABQgHABgKgGIgBgBIgBgBIgCACQgMALgKACIgDAAQgJAAgIgEg");
	this.shape_2.setTransform(11,-19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AByARQAKAIABAAQAAABABAGQABAFgCAHQgBAHgFAEQgGACgHgBQgGgBgFgDQgEgDgBAAQgOANgNABQgMAAgMgHQgMgHgNgKQgggVgogCQgTgBgLACQgLABgIAEQgIADgJAGQgCAAACgFQABgFADgIQADgHADgGQADgFABgBQAKgMAOgGQAEgCAEgBQAQgGAQAAQARAAAQgCQAPgBAOgJQAEgDAIgGQAJgGAHgCQAIgBADALQACAMALANQALAOANAMQANAKAJAIg");
	this.shape_3.setTransform(11,-22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C248").s().p("AAnA4QgMgHgNgKQgggVgogCQgTgBgLACQgLABgIAEIgRAJQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAgBABgBIAEgNIAGgNIAEgGQAKgMAOgGQAEgCAEgBQAQgGAQAAQARAAAQgCQAPgBAOgJIAMgJQAJgGAHgCQAIgBADALQACAMALANQALAOANAMIAWASIALAIIABAHQABAFgCAHQgBAHgFAEQgGACgHgBQgGgBgFgDIgFgDQgOANgNABIgBAAQgLAAgMgHg");
	this.shape_4.setTransform(11,-22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ABOAJQgDgJgKgEQgLgHgPgBQgUgBgSgFQgRgFgUgDQgJgBgJAAQgJAAgGADQgFADgDAFQASACAOAHQAOAHAOAIQAOAKANAIQARAEAQgDQAQgEANgIQADgDADgDg");
	this.shape_5.setTransform(10.1,-19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B23820").s().p("AAKAaQgNgIgOgKQgOgIgOgHQgOgHgSgCQADgFAFgDQAGgDAJAAQAJAAAJABQAUADARAFQASAFAUABQAPABALAHQAKAEADAJIgGAGQgNAIgQAEIgOABQgJAAgKgCg");
	this.shape_6.setTransform(10.1,-19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AAxgZQgZgDgXgFQgVgGgZgEQgLgCgLAAQgLABgIAEQgGADgEAHQgCAGACALQAOgBANAHQAOAGAMAIQANAKAMAJQAMAJAKAFQAMAEAPACQAOABANgDQAOgEAKgIQARgQgBgNQgCgLgOgIQgOgIgTgBg");
	this.shape_7.setTransform(10.1,-18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8A235").s().p("AAfAuQgPgCgMgEQgKgFgMgJIgZgTQgMgIgOgGQgNgHgOABQgCgLACgGQAEgHAGgDQAIgEALgBQALAAALACQAZAEAVAGQAXAFAZADQATABAOAIQAOAIACALQABANgRAQQgKAIgOAEQgKACgKAAIgHAAg");
	this.shape_8.setTransform(10.1,-18.5);

	// Layer 2
	this.instance = new lib.tears();
	this.instance.setTransform(15.5,-27.1,1,0.979);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABAJQgDAAgEgEQgEgEACgJIAHAAQAEAAAEAEQAFAEgFAJIgBAAIgFAAg");
	this.shape_9.setTransform(29.8,-40.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAIQgJAAgHgIIAHgEQAGgEAGABQAJAAAFAJIgGAEQgFACgGAAIAAAAg");
	this.shape_10.setTransform(9,-50.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AACAgQgHgFgJgQQgIgOgEghIACAHIAIARQAFALAJAJIALANIAMAKIAGAFIgIABIgCAAQgGAAgJgFg");
	this.shape_11.setTransform(28,-41.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgxATIALgCQALgBAQgEQANgEANgGIARgHIAMgKIAHgEIgDAIQgCAHgLAGQgJAJgVAFQgMAEgWAAIgUgBg");
	this.shape_12.setTransform(7.4,-48.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgTAIIACgOQAKgEAHACQAMADAIAKQgKgDgKABQgJABgKAGIAAgCg");
	this.shape_13.setTransform(26.6,-39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAYAyQAGgYgCgWQgBgUgJgPQgIgPgMgEQgMgDgMAGQgFAeALAXQAMAZAYAQQADACAEACQAAABAAAAQAAgBABgBg");
	this.shape_14.setTransform(27.1,-35.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1979AF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(29.4,-30.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AAQAvQgYgQgMgZQgLgXAFgeQAMgFAMACQAMAEAIAPQAJAPABAUQACAWgGAZIgBABIgHgFg");
	this.shape_16.setTransform(27.1,-35.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AguAlQAGgXANgRQANgSAPgKQAXgNAWAFIACABQgZALgRAVQgOASgJAZQgPADgPABIABgEg");
	this.shape_17.setTransform(4.5,-42.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ABDgTQgOgSgUgFQgUgFgSAJQgUAJgQAUQgPARgIAcQgBAEgBAFQAcAAAcgJQAXgJAUgOQAUgNAOgTg");
	this.shape_18.setTransform(5.9,-42.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AhAAkQAIgcAPgRQAQgUAUgJQASgJAUAFQAUAFAOASQgOATgUANQgUAOgXAJQgcAJgcAAIACgJg");
	this.shape_19.setTransform(5.9,-42.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAKQgEgBgBgFQAAgEACgCQACgEAEgCQABgCAEABQADABABAFQABADgDADQgCAFgDACIgCABIgDgBg");
	this.shape_20.setTransform(25.7,-25.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMAbQgIgEgBgKQgCgKAGgLQAGgLAJgGQAHgFAIADQAHAFACAKQACAKgGAKQgGAMgJAFQgDAEgFAAIgHgCg");
	this.shape_21.setTransform(25.7,-26.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFANQgEgCgBgFQgBgFACgEQADgGAFgCQACgCAFABQAEACABAFQABAFgDAEQgDAGgEACIgDACIgEgBg");
	this.shape_22.setTransform(11.1,-31.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAhQgKgFgDgNQgCgMAGgNQAHgOAMgGQAKgGAKAEQALAFADANQACANgHAMQgHAOgLAGQgGAEgGAAQgEAAgFgCg");
	this.shape_23.setTransform(10.7,-33.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5E2BE").s().p("AggAvQgCgNABgOQAAgOAEgNIAFgPQAJgYANgPQAMgQAPgEQgRAQgIAcIgFAOQgGAXACAVQABAVAIAPQAHANAMADQAIACAHgCQgFAFgGAEQgZgVgegOg");
	this.shape_24.setTransform(22.6,-32);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AAzAQQAGgXgBgWQgCgWgJgOQgIgQgOgDQgPgEgMAJQgPAJgMATQgMASgHAZQgIAeAEAZQAhAPAdAYQAOgKALgSQALgSAHgYg");
	this.shape_25.setTransform(24.4,-32);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag2AvQgEgZAIgeQAHgZAMgSQAMgTAPgJQAMgJAPAEQAOADAIAQQAJAOACAWQABAWgGAXQgHAYgLASQgLASgOAKQgdgYghgPg");
	this.shape_26.setTransform(24.4,-32);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5E2BE").s().p("AgjBNQgIgQgBgUQgCgUAGgVQAHgYANgSQAOgTAPgIQASgJASADQgVAEgSATQgPATgIAeQgHAWAEAVQADAVALAQIgdAAg");
	this.shape_27.setTransform(4,-38.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("ABLgSQgEgZgMgRQgNgRgVgFQgUgFgSAJQgUAJgPAUQgQATgHAbQgGAVACAUQABAVAJARQATgBAdABQAbACAiAHQAUgVAJggQAHgcgFgWg");
	this.shape_28.setTransform(6.7,-38.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRBMQgdgBgTABQgJgRgBgVQgCgUAGgVQAHgbAQgTQAPgUAUgJQASgJAUAFQAVAFANARQAMARAEAZQAFAWgHAcQgJAggUAVQgigHgbgCg");
	this.shape_29.setTransform(6.7,-38.3);

	// Layer 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhCBjQgggEgggRQAKAFAVACQAVACAagCQAagBAagFQAZgFAUgIQAUgIAKgLQAEgGgMgIQgLgJgUgLIgngVQgVgNgNgNQgNgNgGgLQgGgLgDgKIgHgVQACAHAHAMQAIANAOAQQAOAPAXAPQAOAKATAJQATAGATAHQATAGAPAEIAXAGIAEACQACACABADQABADgDADIgFAGIgEADQgIAGgRAKQgSAKgaAKQgaAJgcAFQgRADgRAAQgOAAgPgCg");
	this.shape_30.setTransform(-7.2,-10.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AArBuQgqgIghgYQgigYgZgkQgagigPgrQAJgFAFgHIAMgPQAGgHAMgFIAJgEIARgHQAIgDAGAAQAGgBgBAGIgJAhQgEASAAATQAAATAHASQAIAUATAVIABAAQAbATApAQQApARAtAMQgeAIgcAAQgRAAgPgDg");
	this.shape_31.setTransform(-18.2,-11.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("AgPhsQAAABAGANQAGANAMATQAOATAbARQAQALAUAIQATAHATAGQATAHAOAEQAPADAHABQABABAEACQAEADABAGQABAGgJAIQgEAEgQALQgQAKgZAMQgZALgeAIQgfAHgigBQgfgCgigQQgigPgggkQgfgjgag6");
	this.shape_32.setTransform(-12.6,-10.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AAABtQgfgCgigQQgigPgggkQgfgjgag6ICtg3IAGAOQAGANAMATQAPATAaARQAQALAUAIQATAHATAGIAhALIAWAEIAFADQAEADABAGQABAGgJAIQgEAEgQALQgQAKgZAMQgZALgeAIQgZAGgbAAIgNAAg");
	this.shape_33.setTransform(-12.6,-10.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#59595B").s().p("AABANQgCgBgDgDQgEgFAAgEQABgGAEgEQADgDABAAQgBAKAAAFQADAHAGAEIgEABIgEgBg");
	this.shape_34.setTransform(9.6,2.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7B7B7C").s().p("AAAAAQAAgFgEgHQAEACABACQAEAFgBAEQAAAGgEAEIgBACQABgHAAgGg");
	this.shape_35.setTransform(11.1,2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AAMAOQgGAFgGgBQgHAAgGgGQgFgGAAgGQABgHAGgGQAGgFAGAAQAHABAGAGQAFAGgBAGQAAAHgGAGg");
	this.shape_36.setTransform(10.1,2.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6D6D70").s().p("AAAASQgHAAgGgGQgFgGAAgGQABgHAGgGQAGgFAGAAQAHABAGAGQAFAGgBAGQAAAHgGAGQgFAFgHAAIAAgBg");
	this.shape_37.setTransform(10.1,2.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9A9A9B").s().p("AQ0AUIAAgBIADAAIAAABgAwxgOIgDgDIgCgCIDKAGg");
	this.shape_38.setTransform(103.9,-5.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DBDBDD").s().p("AQ1AfIgBgBIAAgBIADAAIAAACgAw2gXQABgEACgCIACgBIElALg");
	this.shape_39.setTransform(103.9,-6.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AQ6AjQACgCABgCQAAgDgCgCQgCgCgCAAQgDAAgCABMghVgA8QgBgBgGABQgFAAgGAEQgGADgBALQAAAJAGAFQAFADAFAAQAGABAAAAMAhYAAhQAEAEAEgDg");
	this.shape_40.setTransform(103.9,-6.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C1C1C6").s().p("AQyAiMghXgAhIgHgBQgFAAgFgDQgGgFAAgJQACgLAFgDQAGgEAFAAIAHAAMAhVAA8QABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQACAAACACQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_41.setTransform(103.9,-6.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("Au/BDQAAAAANgGQANgGAVgPQAVgPAZgZQAagaAbgoQABABAVAJQAVAKAlAKQAkALAvAFQAuAGA0gIQAzgHAygbQAAAAAOAHQAOAIAZAJQAZAKAhAIQAhAHAnABQAmABAqgKQApgKAqgaQAAAAAUAJQATAJAhAMQAhANAqAIQArAJAuABQAvACAugMQAugLApggQAAABAYAIQAYAIAoAIQAoAKAzAEQAzAEA4gHQA3gHA2gZQAAABAQAGQAQAHAcAHQAcAHAkADQAkAEApgGQAagDAbgK");
	this.shape_42.setTransform(112.1,0.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7B7B7C").s().p("AAAAJIgCgBQAAgIgEgIIAKAHIADABQAAADgBACIgEAEIgCAAIAAAAg");
	this.shape_43.setTransform(6.2,11.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#59595B").s().p("AgCADIgCgDIAAgEQACgCACgBQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAABAAIABABQgBAHADAHg");
	this.shape_44.setTransform(3.8,11);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AAVAMQgDADgEACQgEABgDgCIgYgOQgDgCgBgCQgBgEACgEQADgEAEgBQADgCAEACIAXAOQAEABABAEQABADgCAFg");
	this.shape_45.setTransform(5.1,11.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6D6D70").s().p("AAHAQIgYgOQgDgCgBgCQgBgEACgEQADgEAEgBQADgCAEACIAXAOQAEABABAEQABADgCAFQgDADgEACIgDAAIgEgBg");
	this.shape_46.setTransform(5.1,11.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#59595B").s().p("AgXAqIAIgPIAPgbIANgbIAIgPIADACIgXAoQgKAVgNAWIgBgBg");
	this.shape_47.setTransform(7.8,6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7B7B7C").s().p("AgXAqQAXgqAWgqIACABIgJAPIgOAaIgOAcIgJAPIgBgBg");
	this.shape_48.setTransform(8.3,6.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AgRAyIgOgIIAxhbIAOAIg");
	this.shape_49.setTransform(8,6.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6D6D70").s().p("AgfAqIAxhbIAOAIIgxBbg");
	this.shape_50.setTransform(8,6.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BBBBBC").s().p("AgEAYQgLgOgBgQQgBgRAJgPQgHAYAMAaQAIAPAMAMQgNgEgIgLg");
	this.shape_51.setTransform(6.6,3.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E3E3E5").s().p("AAAAAQAAgTgJgSIAIAHQALAQAAARQgBAUgLAPQADgUgBgSg");
	this.shape_52.setTransform(14.4,1.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D8D8D8").s().p("AgSA1QgOgFgKgMQgLgMgCgPQgCgMAEgPQAFgOAMgKQAMgLAPgCQANgCAOAEQAOAFALAMQAKAMADAPQACANgFAOQgFAOgMALQgMAKgPADIgJABQgIAAgKgEg");
	this.shape_53.setTransform(10.1,2.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D6D6D8").s().p("AAAAXQADgYgGgYQgIgZgSgUQAMACAMAGQAJAGAJALQANAPAEAUQADAQgHATQgGASgPAOQgKAKgOAEQAQgXADgZg");
	this.shape_54.setTransform(14.4,2.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B6B6B7").s().p("AAEBDQgNgGgLgNQgOgQgDgTQgDgRAGgTQAGgSAQgOQALgJALgEQAOgFANABIABAAQgXAHgNAPQgLAOgBAUQgDARAKAVQAQAcAaATIgDAEIgEAAQgOAAgOgGg");
	this.shape_55.setTransform(6.7,2.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("ABKAZQgHAUgQAOQgRAOgVAEQgSADgUgGQgTgHgOgQQgOgRgEgVQgDgSAGgUQAHgTARgOQAQgOAUgEQATgDATAGQAUAHAOARQAOAQAEAUQADATgGATg");
	this.shape_56.setTransform(10.2,2.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C1C1C6").s().p("AgYBJQgUgGgOgQQgOgSgEgUQgDgSAHgUQAGgSARgPQARgOATgEQATgDATAHQAUAHAOAQQAOARADATQAEATgHATQgGAUgRAOQgRAOgUADIgNACQgMAAgMgFg");
	this.shape_57.setTransform(10.2,2.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgIABQAAABAAACQAAADgDACQgBABgEAAQgCAAgCgBQgDgCAAgDQAAgCAAgBIgIAAQAAACAAABQAAAFAFAFQAFAFAFAAQAHgBAFgFQAEgEAAgFQAAgCAAgCg");
	this.shape_58.setTransform(210.3,-2.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C1C1C6").s().p("AgKAFQgFgFgBgFIABgDIAIAAIAAACQABAEACACQACAAACAAQAEAAACAAQACgCAAgEIAAgCIAIAAIAAACQAAAGgEAEQgFAFgHAAQgFAAgFgEg");
	this.shape_59.setTransform(210.3,-2.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AAQgIIgIAAQAAABAAACQAAADgCACQgCABgEAAQgBAAgDgBQgCgCAAgDQAAgCAAgBIgJAAQAAACAAABQAAAFAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgFQAAgCgBgBg");
	this.shape_60.setTransform(183,-2.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C1C1C6").s().p("AgKAFQgFgFAAgFIAAgDIAJAAIAAADQgBADADACQADABABAAQAEAAABgBQADgCAAgDIAAgDIAIgBIABAEQAAAFgFAEQgFAFgHABQgFAAgFgFg");
	this.shape_61.setTransform(183,-2.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgIABQAAABAAABQAAAEgDACQgCAAgDAAQgCAAgCAAQgDgCAAgEQAAgBAAgBIgIAAQAAACAAAAQAAAGAFAFQAFAFAFAAQAHgBAFgFQAEgEAAgGQAAgBAAgCg");
	this.shape_62.setTransform(30.6,-5.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C1C1C6").s().p("AgKAFQgFgFAAgGIAAgCIAJAAIAAACQAAAEACACQADAAABAAQADABACgBQADgCAAgEIgBgCIAJgBIAAADQABAGgFAEQgFAFgHAAQgFAAgFgEg");
	this.shape_63.setTransform(30.6,-5.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgCAAgDAAQgCAAgCAAQgDgCAAgEQAAgBAAgBIgIAAQgBACAAABQABAFAFAFQAFAFAFAAQAHgBAFgFQAEgEAAgGQAAgBAAgCg");
	this.shape_64.setTransform(66.7,-4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C1C1C6").s().p("AgKAFQgFgFAAgFIAAgDIAJAAIAAACQAAAEACACQADAAABAAQADABACgBQADgCAAgEIgBgCIAJAAIAAACQABAGgFAEQgFAFgHAAQgFAAgFgEg");
	this.shape_65.setTransform(66.7,-4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgBABgEAAQgBAAgDgBQgCgCAAgEQAAgBAAgBIgJAAQgBACAAAAQABAGAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgGQAAgBgBgCg");
	this.shape_66.setTransform(101.3,-4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C1C1C6").s().p("AgKAEQgFgEgBgFIABgDIAIAAIAAADQABADACACQACABACAAQAEAAACgBQACgCAAgDIAAgDIAIgBIABAEQgBAFgEAEQgFAFgHABQgFgBgFgFg");
	this.shape_67.setTransform(101.3,-4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgCAAgDAAQgCAAgCAAQgDgCAAgEQAAgBAAgBIgIAAQgBABAAACQABAFAFAFQAFAFAFAAQAHgBAFgFQAEgEAAgGQAAgBAAgCg");
	this.shape_68.setTransform(143.4,-3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C1C1C6").s().p("AgKAFQgFgFAAgFIAAgDIAJAAIAAACQgBAEADACQADAAABAAQAEABABgBQADgCAAgEIAAgCIAIgBIABADQAAAGgFAEQgFAFgHAAQgFABgFgFg");
	this.shape_69.setTransform(143.4,-3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(2,1,1).p("AAkhBQABAAAEAMQAEANAEATQAEATAAAVQABAXgIAVQAAAAgDABQgEACgEAAQgFAAgEgEQgCgEgJgKQgKgKgKgMQgNgMgMgIQgNgHgJAB");
	this.shape_70.setTransform(9,48.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AAaA+IgLgOIgUgWQgNgMgMgIQgNgGgJAAIBYhBIAFAMIAIAgQAEATAAAVQABAXgIAVIgDABQgEACgEAAQgFAAgEgEg");
	this.shape_71.setTransform(9,48.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(2,1,1).p("AAzhGQAAABADANQAEANACAVQACAVgDAXQgDAYgMAXQAAABgEAAQgEABgGgBQgFgBgDgGQgDgEgJgPQgJgPgLgRQgMgPgNgNQgNgNgMgB");
	this.shape_72.setTransform(-15.5,49.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AAeBGQgFgBgDgGIgMgTQgJgPgLgRQgMgPgNgNQgNgNgMgBIBvgoIADAOQAEANACAVQACAVgDAXQgDAYgMAXIgEABIgDABIgHgBg");
	this.shape_73.setTransform(-15.5,49.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B4B4B4").s().p("AgNBHQgPgEgMgPQgMgPgKgVQgJgTgGgUIgKgiIgDgOIC1A3IgGAKIgRAWQgLAPgOANQgNAOgPAIQgMAGgJAAIgHgBg");
	this.shape_74.setTransform(8.1,-18.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B4B4B4").s().p("AgDHXQgygQgngjQgogigZgyQgVgogIgtQgJgtADgvQADguAOgvIAEgLQAWg6AngwQAOgSARgcQARgcASgiQARgiARgjQAPgkAOggIAXg6IAFgOIACgHQAJgZANgWQAOgXATgQQATgQAZgGQgZAQgQAZQgRAZgKAdIgCAHIgFAOQgJAagOAgQgOAggRAkQgQAjgQAiQgSAigRAcQgRAcgOASQgnAwgWA6IgDALQgPAvgDAuQgDAvAJAtQAIAtAVAoQAZAyAoAiQAnAjAwAQQAqAOAqgBQArgBApgOQgwAXgzAEIgVABQgoAAglgNg");
	this.shape_75.setTransform(-9.3,-7.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E5E5E5").s().p("Ag1GoQA1gfApg2QANgWAKgYIALghQATg+gDhBIgBgLIgDhKIgDhTQgBgtAAgqQABgqADgkQADgjAGgWQAAgrAGgUQANgvgGguIgGgWQgEgNgGgMQAOABANAJQAKAIAJAOQAJANAHAOQAGAPADAMQACAWgBAWQgBAWgHAbQgCAHgFAJIgJAUQgFALgBANQgHAWgFAiQgEAigDApQgCApgBArIAABRIAABIIAAALQABA/gWA7QgFAQgIAQQgKAXgOAUQguA0g4AbQg5Aag8ABQA6gGA1gfg");
	this.shape_76.setTransform(14.8,-5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CCCCCC").s().p("AhoHZQgygRgngjQgogigZgyQgVgogIgtQgJgtADgvQADgvAOgtIAEgMQAWg5AngxQAOgSARgcQARgcASgiQASgiAQgjIAfhEIAXg6IAFgOIACgHQAKgcAQgZQARgZAVgQQAXgQAgAAIAVABQAMABAMADQARAEAQAJQARAJAMANQALAOADAQQgBgIAMgHQALgGAQgBQARAAAOAKQAKAJAHAOQAHAOAEAPIAHAbQAEAugOAsQgHAUgCAoQgHAWgFAiQgFAigCApIgDBSIgBBTIABBIIAAALQAAA/gVA8QgGAQgHAPQgLAWgNAVQgqAugxAbQgyAag2AGIgZABQgoAAgngMg");
	this.shape_77.setTransform(0.8,-7.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("ABIIhIgogGQgTgDgQAAIgEgKIgBgEIgDgBQgngJgjgQQg2gagqgnQgpgogbgxQgagxgLg3QgLg3AGg5QAHg5AZg2QAhhDA4gyQAVgSAZgeQAZgeAbglQAbglAZgnQAXgmAUgiQAUgiALgYQASgmAegcQAdgcAmgPQAlgQAqgCQgnARgeAdQgeAdgSAmIgMAaIgdA+QgPAfgQAZIgSAcQgOAUgLATQgMATgFAUIgFAQQgKgLgMAAQgJAAgHAGQgIAGgHAJIgMARIgGAJQgQAWgRAUQgQATgPAVQgPAVgMAZQgfBBgEBGQgDBHAWBBQAWBAAtA0QAtA0BAAfQAvAYA1AMQA2ANA0gEQA0gEAsgaQggAYgjAOQgjAOgeAHIgxAOQgVgCgUgEg");
	this.shape_78.setTransform(-16.5,-5.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(2,1,1).p("ACtorQgtgCgpAPQgqAPgiAeQgfAegVArQgLAYgUAhQgTAhgZAnQgZAmgaAkQgbAlgZAfQgZAegVASQgcAYgXAfQgXAegRAiQgaA4gHA7QgHA6ALA5QAKA6AbAyQAbAzArAnQAqAnA5AXQANAGAXAJQAXALAeAJQAeAKAhAFQAfAFAggFQAcgEAcgGQAbgFAcgPQAbgOAegeQAXgSATgYQATgZAQgdQAPgcAOgdQASgmAIgoQAJgpAAgoQgBggAAgrQAAgsABgwQABguADguQACgtAGglQAFgkAJgUQAUgsACgsQABgugPgpQgPgqgdgiQgfghgrgVQgrgUgtgBg");
	this.shape_79.setTransform(-7.4,-5.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#666666").s().p("AgbIqQghgFgegKQgegJgXgLIgkgPQg5gXgqgnQgrgngbgzQgbgygKg6QgLg5AHg6QAHg7Aag4QARgiAXgeQAXgfAcgYQAVgSAZgeQAZgfAbglQAagkAZgmQAZgnATghQAUghALgYQAVgrAfgeQAigeAqgPQApgPAtACQAtABArAUQArAVAfAhQAdAiAPAqQAPApgBAuQgCAsgUAsQgJAUgFAkQgGAlgCAtQgDAugBAuIgBBcIABBLQAAAogJApQgIAogSAmQgOAdgPAcQgQAdgTAZQgTAYgXASQgeAegbAOQgcAPgbAFQgcAGgcAEQgQACgQAAQgPAAgQgCg");
	this.shape_80.setTransform(-7.4,-5.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(2,1,1).p("AAUgcQgBABgMAFQgMAFgSACQgTACgSgHQgBAAgDADQgEAEACAGQABAFAMAGQAAAAAOAGQANAGAVAGQARAGAVABQAUABAPgI");
	this.shape_81.setTransform(-43.8,28.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AAhAdQgVgBgRgGQgVgGgNgGIgOgGQgMgGgBgFQgCgGAEgEIAEgDQASAHATgCQASgCAMgFIANgGIAwAyQgNAHgQAAIgGAAg");
	this.shape_82.setTransform(-43.8,28.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999999").s().p("Ag9AVQAPgaAUgYQAUgXARgQQAPgHAOgBQAPgBAOABQALAHAHAKQgJAJgLADQgLAEgMABIgSADQgJACgIAEQgNAJgMAQQgLANgJARQgKATgMAPQgLAPgRAHQAJgeAQgbg");
	this.shape_83.setTransform(35.1,3.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(2,1,1).p("AgdhKQgSAFgOAFQgUAHgMAIQgNAJgGANQgGAOgEAVQgEAVAEAUQAEATAOAMQAPALAcgDQAUgEANgOQANgOALgTQAIgTAMgSQAMgQARgJQANgHAOgBQAPgCAOgEQAOgDAKgNQgLgSgUgIQgUgHgZABQgUAAgVAEQgTAEgSAFg");
	this.shape_84.setTransform(31.7,3.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#666666").s().p("AhoBQQgOgMgEgTQgEgUAEgVQAEgVAGgOQAGgNANgJQAMgIAUgHIAggKQASgFATgEQAVgEAUAAQAZgBAUAHQAUAIALASQgKANgOADQgOAEgPACQgOABgNAHQgRAJgMAQQgMASgIATQgLATgNAOQgNAOgUAEIgMAAQgTAAgMgIg");
	this.shape_85.setTransform(31.7,3.3);

	this.addChild(this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.instance,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.6,-62.2,265,119.9);


(lib.happy_penguin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{done:71});

	// Layer 2
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(-21.6,47.8,1,1,0,0,0,0,65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({scaleY:1.07,y:27.8},4).to({scaleY:1,y:47.8},2).to({_off:true},1).wait(11).to({_off:false},0).to({scaleY:1.07,y:27.8},4).to({scaleY:1,y:47.8},2).to({_off:true},1).wait(11).to({_off:false},0).to({scaleY:1.07,y:27.8},4).to({scaleY:1,y:47.8},2).to({_off:true},1).wait(11).to({_off:false},0).to({scaleY:1.07,y:27.8},4).to({scaleY:1,y:47.8},2).to({_off:true},1).wait(5));

	// Layer 3
	this.instance_1 = new lib.blinking2();
	this.instance_1.setTransform(-16.9,-51.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE4B3").s().p("AAsAcQgJgBgPgHQgPgGgWgOIgFgDIgIgHIgHgEQgDABgFAEQgEAEgJABIADgHIAIgMQAFgFAEAAIAEACQADABACAFIAKAKQALAKATAJQATALAdAGIgDACIgFABIgHgBg");
	this.shape.setTransform(-9.8,-42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8A235").s().p("AgDAEQgBgCgCgGIAFABIAHADQADABgFACIgFACIgCgBg");
	this.shape_1.setTransform(-14.2,-40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8A235").s().p("AA9AWQgLgCgNgFIgYgGQgQgCgSAAIgdAAIgbgBQgQAAgOgEQgOgCgEgFIgCgFIgCgEIAAgBQAHAGAIACQAIADAHAAIAIABQAUACAZAAQAZAAAZgEIAMgDQAGgCAHABQAIACAGAEQAGADAHACQAHADAIgCQAIgDAHgCIAFgGQADgDAEgCQAFAAAFABQAGACAEgCQAEgCABgDQACgDAEgCIABAJQAAAEgCAEQgDADgGABIgLAAIgIgCIgDgBIAAAEQgHAPgJAFQgGADgHAAIgHgBg");
	this.shape_2.setTransform(-16.2,-36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABygEQAMAEABAAIADAEQACAFACAHQABAHgEAGQgEAFgHAAQgHABgFgBIgGgBQgIARgJAFQgKAGgLgCQgLgBgNgEQgMgEgNgDQgNgCgMAAQgOAAgNAAQgHAAgNAAQgNAAgPgBQgPgBgMgEQgLgDgEgHQgFgJgBgDQAAgCAHgBQAHgBASgDQARgBAQgFQARgDAPgFQALgFAKgHQAJgGAGgKQABgDAEgGQAEgGAFgGQAEgFAGgBQAFgBAEAIQAHAKAOAKQAPAJARAHQAQAIAMAEg");
	this.shape_3.setTransform(-16.2,-39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C248").s().p("ABAA7QgLgBgNgEQgMgEgNgDQgNgCgMAAIgbAAIgUAAIgcgBQgPgBgMgEQgLgDgEgHIgGgMQAAgCAHgBIAZgEQARgBAQgFQARgDAPgFQALgFAKgHQAJgGAGgKIAFgJQAEgGAFgGQAEgFAGgBQAFgBAEAIQAHAKAOAKQAPAJARAHQAQAIAMAEIANAEIADAEQACAFACAHQABAHgEAGQgEAFgHAAIgMAAIgGgBQgIARgJAFQgIAFgJAAIgEgBg");
	this.shape_4.setTransform(-16.2,-39.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgoALQAAAAAJgBQAJgCAOgDQALgCAOgDQAOgEAKgG");
	this.shape_5.setTransform(-15,38);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AA0gXQAAAAAAAMQAAALAEARQAFARAMAPQAAAAAAABQAAACgEABQgEAAgLgBQgJAAgPgCQgPgCgQgJQgTgIgSgWQgTgUgPgp");
	this.shape_6.setTransform(-34.2,39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AA2A0IgYgCQgPgCgQgJQgTgIgSgWQgTgUgPgpIB8AdIAAAMQAAALAEARQAFARAMAPIAAABQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBABIgEAAIgLgBg");
	this.shape_7.setTransform(-34.2,39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("ABPBUIgCAAIgDAAQAOgMADgUIABgLQgBgSgGgPQgGgOgIgIQgQgNgUgEQgTgEgTgBQgTgBgRgEQgRgDgPgJQgPgJgKgTQAGgCAHAAQAHAAAIADIAHAEQARALATAJQATAIATAAQAVABAXgMQADAAAHAEQAGADAIAMQAHANAFAZQAEAcAAAUQAAAZgHAJQgEAEgGAAIgBAAg");
	this.shape_8.setTransform(0,-22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("ABGhAQAJADAKANQAKAOAFAfQAJAugFAZQgFAYgTAAQgKAAgXgFQgWgFgdgOQgagOgcgbQgcgbgVgqQgJgTAFgMQAGgNAMgDQAOgEAPAHQAEACAEACQASAMATAIQAQAHAUAAQAUAAAUgKQABgBAIACg");
	this.shape_9.setTransform(-0.5,-22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AAzBXQgWgFgdgOQgagOgcgbQgcgbgVgqQgJgTAFgMQAGgNAMgDQAOgEAPAHIAIAEQASAMATAIQAQAHAUAAQAUAAAUgKQABgBAIACQAJADAKANQAKAOAFAfQAJAugFAZQgFAYgTAAIgBAAQgKAAgWgFg");
	this.shape_10.setTransform(-0.5,-22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AAZBDQAMgQAKgWQAKgWAGgTQAFgVgDgOQgDgFgLADQgKADgQAGIgdANQgPAFgLABQgbACgagIIANADQALACAPgBQAQgBASgHQAPgHARgKQASgLANgKQANgLAFgGIAEgBIAEAAQACABABADIACAGIAAAEIgBAWQAAAPgEAUQgEARgIAVQgJAUgPARQgPASgYALQAJgFAMgQg");
	this.shape_11.setTransform(-32.3,-22.9,1,1,0,0,0,0.2,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgvA1QgogDgmgOQAAgJgCgIIgEgRQgDgHADgKIAFgJIAKgNQAFgHAGgEQAFgDAEAEIAUAaQAKAOANAIQAMAMAPAFQAPAEAPgEIAAAAQAdgKAigRQAigTAggZQgQAqgcAXQgcAZgkAJQgZAIgcAAIgTgBg");
	this.shape_12.setTransform(-38.4,-16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AhRg0QAAABAMAEQANADAVABQAWABAYgIQAWgIAVgNQAWgMAQgMQARgMAFgGQABAAAEgCQAEgBAFADQAEADACALQABAFgBASQgBARgFAYQgEAYgLAYQgLAagTAXQgTAXgdAOQgdAPgpACQgqABg5gQ");
	this.shape_13.setTransform(-36.4,-21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AiGBlIA1iZIAMAFQANADAVABQAWABAYgIQAWgIAVgNQAWgMAQgMQARgMAFgGIAFgCQAEgBAFADQAEADACALQABAFgBASQgBARgFAYQgEAYgLAYQgLAagTAXQgTAXgdAOQgdAPgpACIgGAAQgoAAg1gPg");
	this.shape_14.setTransform(-36.4,-21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9B0D0D").s().p("AgCAMQgOgHgLgIIgRgQIAMAAIAUAAQAIARAPAGQAPAGAUgBQgJAKgPABQgNAAgLgIg");
	this.shape_15.setTransform(-18.7,-33.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AA7gWIh1ABQABAAAHAGQAHAIALAHQAMAJANAHQALAHAOAAQANAAAIgHQAJgIAEgIQAEgHABgIQACgGAAgBg");
	this.shape_16.setTransform(-18.3,-33.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C12D05").s().p("AgHAQQgNgHgMgJQgLgHgHgIIgIgHIB1AAIgCAHQgBAIgEAHQgEAJgJAHQgIAGgNABQgOAAgLgHg");
	this.shape_17.setTransform(-18.3,-33.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ABcgZQADgLAAAAIi9AAQABABAMALQAMAMAUANQASAPAWALQATALATAAQATgCAMgLQANgMAHgNQAIgOAEgLg");
	this.shape_18.setTransform(-19.1,-33.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D8A235").s().p("AgJAaQgWgLgTgPQgTgNgMgLIgNgMIC8gBIgDAMQgDALgIAOQgHANgNALQgNAMgSABQgTAAgTgLg");
	this.shape_19.setTransform(-19.1,-33.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B4B4B4").s().p("AgFAyQgQgKgQgQQgQgRgNgPIgUgcIgIgMIC9gLIgDAMIgHAdQgGARgIAQQgIARgMAMQgLANgPACIgEABQgNAAgNgKg");
	this.shape_20.setTransform(-18.6,-30.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B4B4B4").s().p("AgpHJQgxgTgpgmQghgfgYgnQgXgogNgtQgNgtgBgwIgBgMQAAg/AVg7QAHgUAHggQAGggAFgmIAJhNIAGhKQACgjAAgbIAAgPIAAgIQAAgaAFgZQAFgaAMgWQANgVAVgOQgRAWgHAeQgHAdAAAfIAAAHIAAAPQAAAbgCAjIgGBKIgJBNQgFAmgGAgQgHAggHAWQgVA5AAA/IABAMQABAxANAtQANAtAYAnQAXAnAhAfQAoAmAyAUQAvATA0gBQArgCAogPQAogQAigbQglAmgvAVQguAVg0ACIgHAAQgwAAgsgSg");
	this.shape_21.setTransform(-19.8,-18.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E5E5E5").s().p("AAiGWQAogvAWhBQAFgZABgaQAAgSgBgRQgDhBgZg7IgEgLIgchEIgghOQgOgpgOgoQgOgogJgiQgJgjgBgXQgOgogCgVQgEgwgVgqIgNgSIgSgUQAOgEAOAEQANAEALALQALALAJANIAQAYQATApABAuQABAVAMAnQAAAXAFAiQAIAhALAoQAMAnAOApIAbBMIAYBEIAFAKQAVA7AAA/QAAARgBASQgDAYgFAZQgbBAgtAsQgrAtg4AUQA1gZAlgvg");
	this.shape_22.setTransform(-0.3,-20.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AhRHUQgxgTgpgmQghgfgYgnQgXgogNgtQgNgtgBgwIAAgMQgBhAAVg6QAHgWAHgeQAGggAFgnQAGglAEgoIAGhKQACgjAAgaIgBgPIAAgIQAAgeAHgdQAHgdARgXQAQgXAegKIAVgHIAXgEQARgCATADQATADAPAJQAPAJAIAOQgDgIAGgKQAJgKAPgGQAPgGASAFQAMAFALALQALAKAJANIARAYQASApACAuQAAAVAMAoQAAAWAHAiQAHAiAMAnQAMAnAOApIAbBNIAZBDIAEALQAVA7ABA/IgCAiQgDAYgFAZQgYA5gmAqQgmApgwAYQgxAXg2ACIgHAAQgvAAgugSg");
	this.shape_23.setTransform(-15.9,-19.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("ACQI2QgZgIgPgMQgPgMgHgKIgDgDIgDAAQgoAFglgEQhKgHg/giQg+gigtg2Qgtg2gVhEQgWhEAHhLQAHhLAlhAQANgYANglQAOglANgsQAMgsALgtQALgsAHgnQAHgnACgaQAFgqASgkQASglAegbQAegbAngQQgfAdgSAlQgTAlgEArIgDAcIgGBEQgDAjgHAdIgIAgQgGAYgEAWQgFAWAAAVIABAQQgNgHgLAEQgIADgGAJQgFAIgDAKIgGAVIgDAKQgHAagJAYQgJAYgHAXQgHAZgDAbQgHBKAVBDQAVBDAqA2QArA2A8AhQA8AiBFAIQBPAHBEgYQBEgYA2g2QgPAbgYAaQgXAbgXAVQgXAVgQANIgRANIgFAEIABADIAWAjIAIAKIgCAAIACACIgFADQgngBgagJg");
	this.shape_24.setTransform(-26.8,-13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("AEFjJQgNgsgHgkQgHgkABgWQAFgwgOgrQgOgqgcgjQgcgigogVQgngWgwgFQgtgEgrAOQgrAOgiAcQgiAcgWAnQgVAogFAwQgCAZgHAnQgIAmgKAsQgKAsgNAsQgMArgOAmQgNAkgOAYQglA/gIBQQgGBMAWBFQAWBFAtA3QAuA3BAAjQA/AjBNAIQAmADAngEQAHAKAQAMQAPANAbAJQAbAKAqAAQAAAAAEgCQADgBACgDQADgEgEgGQgEgHgGgKQgHgJgEgIQgFgIgBAAQABAAAMgKQALgJATgQQASgQAVgUQAUgVASgXQASgXALgXQAYglAPgqQAPgqAEguQAFgqgGgpQgGgpgNglQgLgegPgnQgPgpgQguQgPgtgNgsg");
	this.shape_25.setTransform(-23.6,-14.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("ABtJFQgbgJgPgNQgQgMgHgKQgnAEgmgDQhNgIg/gjQhAgjgug3Qgtg3gWhFQgWhFAGhMQAIhQAlg/QAOgYANgkQAOgmAMgrQANgsAKgsQAKgsAIgmQAHgnACgZQAFgwAVgoQAWgnAigcQAigcArgOQArgOAtAEQAwAFAnAWQAoAVAcAiQAcAjAOAqQAOArgFAwQgBAWAHAkQAHAkANAsQANAsAPAtIAfBXIAaBFQANAlAGApQAGApgFAqQgEAugPAqQgPAqgYAlQgLAXgSAXQgSAXgUAVQgVAUgSAQIgeAZIgNAKIAGAIIALARIAKARQAEAGgDAEQgCADgDABIgEACQgqAAgbgKg");
	this.shape_26.setTransform(-23.6,-14.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("AAHgcQAAABgGAFQgEAGgLAHQgKAHgOADQgNAFgPgBQAAAAgCAFQgCAEADAFQADAFAOAEQABAAAOABQAPAAAUgBQAUgCAUgFQATgGALgM");
	this.shape_27.setTransform(-49.6,29.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgjAdIgPgBQgOgEgDgFQgDgFACgEIACgFQAPABANgFQAOgDAKgHQALgHAEgGIAGgGIA/AfQgLAMgTAGQgUAFgUACIgZABIgKAAg");
	this.shape_28.setTransform(-49.6,29.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAOQgEgBgDgEQgDgEABgFQAAgGAEgDQADgEADAAQAEABADAEQADAFgBADQgBAHgDADQgDAEgDAAIAAAAg");
	this.shape_29.setTransform(-2.9,-49.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTAYQgGgLABgOQACgQAIgJQAIgKAJABQALABAGALQAGALgBAOQgCAPgIAKQgIAJgJAAQgLgBgGgLg");
	this.shape_30.setTransform(-3.7,-48.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5E2BE").s().p("AAHBEIgPgBQgGgKgDgMQgEgLgBgPIgBgPQAAgYAIgTQAHgTALgJQgIAVAAAdIABAQQABAOADAPQACAPAGAKQAGALAKAEIgRAAg");
	this.shape_31.setTransform(-8.5,-51.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AAThGQgOgLgMABQgPABgLAOQgLANgFAWQgFAVACAYQAEAfAMAWQAPgEAVAEQAXADAYAKQAEgIABgOQACgNAAgOQAAgPgCgMQgCgYgJgUQgJgUgNgLg");
	this.shape_32.setTransform(-5.9,-50.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAABEQgVgEgPAEQgMgWgEgfQgCgYAFgVQAFgWALgNQALgOAPgBQAMgBAOALQANALAJAUQAJAUACAYQACAMAAAPQAAAOgCANQgBAOgEAIQgYgKgXgDg");
	this.shape_33.setTransform(-5.9,-50.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAARQgGgBgDgFQgEgFABgGQAAgHAFgFQAEgFAFABQAFAAAEAGQADAFgBAGQAAAHgFAFQgEAEgEAAIAAAAg");
	this.shape_34.setTransform(-20.4,-49.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgDAsQgPgCgIgNQgJgOABgRQACgTAMgLQALgMANABQAOABAJAOQAJAOgBARQgDASgLAMQgKALgMAAIgCAAg");
	this.shape_35.setTransform(-21.1,-47.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5E2BE").s().p("AgeASQgCgZAHgXQAHgWAPgOQANgPAUgDQgUALgKAZQgKAYACAdQADAaAJASQAKATASAKIggAHQgZgYgFgrg");
	this.shape_36.setTransform(-29.2,-50);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("ABOAEQgHgwgYgXQgZgYgfADQgWACgQAPQgRAPgIAYQgIAYACAaQADAWAIASQAJATAOANQASgFAbgGQAcgGAmgFQAHgOADgQQADgRgCgRg");
	this.shape_37.setTransform(-24.8,-50);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhDA6QgIgSgDgWQgCgaAIgYQAIgYARgPQAQgPAWgCQAfgDAZAYQAYAXAHAwQACARgDARQgDAQgHAOQgmAFgcAGIgtALQgOgNgJgTg");
	this.shape_38.setTransform(-24.8,-50);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFE4B3").s().p("AAvAcQgKgCgPgGQgRgHgXgNIgEgDIgJgHQgFgDgDAAQgDAAgFAEQgFAEgJABIAEgHIAIgLQAFgGAEABIAEABQAEACACAFIAKAJQAMAKATAJQAVALAeAGIgDABIgGABIgGAAg");
	this.shape_39.setTransform(-9.1,-41.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D8A235").s().p("AgDAEQgCgCgBgGIAFABIAHADQADABgFACIgFACIgCgBg");
	this.shape_40.setTransform(-13.7,-38.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D8A235").s().p("ABAAVIgZgGQgMgEgNgCQgRgCgTAAIgeAAIgdgBQgRAAgOgDQgPgDgEgFIgCgFIgCgDIAAgCQAGAGAJADIAQADIAIAAQAWACAaAAQAaAAAagEIANgDQAHgBAHAAQAIACAGAEQAHADAHADQAIACAIgCQAIgDAHgCIAGgFQADgEAEgBQAFgBAGACQAGABAFgBQADgCACgEQABgDAEgBQACAEAAAEQAAAEgCAEQgDADgGABIgMAAIgJgCIgDAAIABADQgIAPgKAEQgGADgHAAIgIgBg");
	this.shape_41.setTransform(-15.8,-35.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AB4gEQAMAEABAAQAAAAADAEQADAFABAHQABAHgEAFQgEAFgHABQgHAAgGAAIgGgBQgJAQgKAFQgKAGgLgCQgMgBgNgEQgNgEgOgDQgOgCgMAAQgOABgOgBQgHAAgOAAQgOAAgQgBQgQgBgMgEQgMgDgEgHQgFgJgBgCQAAgDAHAAQAIgBASgDQASgCARgEQASgDAQgFQALgFAKgGQAKgHAHgKQABgDAEgFQAEgGAFgGQAFgFAFgBQAGgBAEAIQAHAKAQAJQAPAJASAIQARAHANAEg");
	this.shape_42.setTransform(-15.8,-38.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9C248").s().p("ABDA6QgMgBgNgEQgNgEgOgDQgOgCgMAAIgcAAIgVAAIgegBQgQgBgMgEQgMgDgEgHIgGgLQAAgDAHAAIAagEQASgCARgEQASgDAQgFQALgFAKgGQAKgHAHgKIAFgIIAJgMQAFgFAFgBQAGgBAEAIQAHAKAQAJQAPAJASAIIAeALIANAEIADAEQADAFABAHQABAHgEAFQgEAFgHABIgNAAIgGgBQgJAQgKAFQgHAFgJAAIgFgBg");
	this.shape_43.setTransform(-15.8,-38.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AgqALQAAAAAKgBQAJgCAOgCQANgEAOgCQAPgEALgG");
	this.shape_44.setTransform(-14.5,38.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("AA3gXQgBABAAALQABALAEAQQAFARANAQQAAAAAAABQAAABgEABQgEAAgMgBQgKAAgQgCQgPgBgSgJQgTgJgTgVQgUgUgQgo");
	this.shape_45.setTransform(-34.8,39.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AA5AzIgagCQgPgBgSgJQgTgJgTgVQgUgUgQgoICDAcIgBAMQABALAEAQQAFARANAQIAAABIgEACIgFAAIgLgBg");
	this.shape_46.setTransform(-34.8,39.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("ABTBTIgCAAIgDAAQAOgMAEgUIAAgKQAAgSgGgPQgHgOgIgIQgRgNgVgEQgUgEgUgBQgUgBgSgDQgSgDgQgJQgPgJgLgSQAGgDAIAAQAIAAAHADIAIAEQASALAUAJQATAHAVABQAWABAYgLQADgBAHAEQAHADAIAMQAIAMAEAZQAGAcgBATQAAAZgHAJQgEAEgHAAIgBAAg");
	this.shape_47.setTransform(1.2,-21.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,1,1).p("ABKg/QAJADALANQAKANAGAfQAIAugFAXQgFAYgUAAQgKAAgYgFQgYgEgegOQgcgOgdgaQgdgbgWgpQgKgTAGgMQAFgMAOgEQAOgDAQAGQAEACAEACQATANAUAHQARAHAVAAQAVAAAWgKQAAgBAJACg");
	this.shape_48.setTransform(0.6,-21.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AA2BVQgYgEgegOQgcgOgdgaQgdgbgWgpQgKgTAGgMQAFgMAOgEQAOgDAQAGIAIAEQATANAUAHQARAHAVAAQAVAAAWgKIAJABQAJADALANQAKANAGAfQAIAugFAXQgFAYgUAAIgBAAQgLAAgWgFg");
	this.shape_49.setTransform(0.6,-21.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AAaBQQAQgUAOgZQAPgaAIgXQAIgZgEgQQgDgGgOACQgOADgUAHIgmAOQgUAGgOABQgjAAghgLIARAEQAOADATAAQAUgBAYgHQAUgHAXgMQAWgMASgMQASgMAHgGIAEgCQADAAACABQADABABADIACAHIAAAFQAAAJgCASQgBASgGAXQgGAVgMAYQgMAYgVAUQgUAVgdAMQAKgFAQgTg");
	this.shape_50.setTransform(-34.2,-21.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgyA0QgpgDgpgNQABgKgDgIIgEgQQgCgHACgKIAGgIIAJgOQAGgHAGgDQAGgDAEAEIAUAZQAMAOANAJQANALAPAEQAQAFAQgFIABAAQAegJAkgRQAjgTAigYQgRApgdAWQgeAZglAKQgbAHgeAAIgUgBg");
	this.shape_51.setTransform(-39.2,-15.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2,1,1).p("AhWgzQABABANADQANAEAWABQAXABAagIQAXgIAWgMQAXgMARgMQARgMAGgGQABAAAEgCQAFgBAFADQAEACACALQABAGgBARQgBARgFAYQgFAYgLAXQgMAZgUAXQgTAWgfAPQgfAOgqACQgtABg8gQ");
	this.shape_52.setTransform(-37.1,-20.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AiNBjIA3iWIAOAEQANAEAWABQAXABAagIQAXgIAWgMQAXgMARgMQARgMAGgGIAFgCQAFgBAFADQAEACACALQABAGgBARQgBARgFAYQgFAYgLAXQgMAZgUAXQgTAWgfAPQgfAOgqACIgHAAQgrAAg3gPg");
	this.shape_53.setTransform(-37.1,-20.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9B0D0D").s().p("AgDAMQgOgHgMgHIgSgQIANAAIAVAAQAJAQAPAFQARAIAUgCQgIAJgRABQgNAAgNgHg");
	this.shape_54.setTransform(-18.5,-32.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("AA+gWIh7ABQABAAAHAHQAHAHAMAHQAMAJAPAHQAMAHAOAAQAOgBAJgHQAIgHAFgIQAEgIABgHQACgGAAgBg");
	this.shape_55.setTransform(-18,-32.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C12D05").s().p("AgHAQQgPgHgMgJQgMgHgHgHIgIgHIB7gBIgCAHQgBAHgEAIQgFAIgIAHQgJAHgOABQgOAAgMgHg");
	this.shape_56.setTransform(-18,-32.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("ABkgkIjHABQABABAMALQANALAVANQAUAOAWALQAUALAUAAQAUgCANgLQANgLAIgNQAJgOADgKQAEgLAAgBg");
	this.shape_57.setTransform(-18.8,-31.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D8A235").s().p("AgKAaQgXgLgTgOQgVgNgMgLIgOgMIDHgBIgEAMQgDAKgJAOQgIANgNALQgNALgUACQgUAAgUgLg");
	this.shape_58.setTransform(-18.8,-31.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B4B4B4").s().p("AgFAxQgRgKgRgQQgRgQgNgOIgWgcIgIgMIDHgLIgDAMIgIAcQgFARgJAPQgJASgMAMQgMAMgQACIgDABQgPAAgNgKg");
	this.shape_59.setTransform(-18.4,-29.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B4B4B4").s().p("AgsHBQgzgTgrglQgjgfgYgmQgZgmgOgtQgNgsgCgwIAAgMQAAg+AVg6QAIgTAHggQAHgfAFglQAGgmAEgmQAEgmACgjQACgiAAgbIAAgPIAAgHQAAgaAFgZQAFgZANgWQAOgVAWgNQgSAWgIAdQgHAdAAAeIAAAHIAAAPQAAAagCAjIgGBJQgEAmgFAlQgGAlgHAgQgHAggIAVQgVA4AAA+IAAAMQACAwAOAsQANAsAZAnQAZAmAiAeQArAmA0ATQAxATA3gBQAugCAqgPQApgPAkgbQgnAlgxAVQgwAVg3ACIgHAAQgzAAgvgSg");
	this.shape_60.setTransform(-19.6,-17.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E5E5E5").s().p("AAkGPQAqguAXhAQAFgZABgZQABgSgBgRQgEg/gag7IgFgLIgdhDIgihLQgPgpgOgoQgPgngJghQgJgigCgXQgPgngBgVQgFgvgVgpIgPgTIgSgTQAOgEAQAEQAMAEAMALQAMALAKANIARAXQATAoABAuQABAUANAnQAAAWAFAhQAIAhAMAnQAMAnAPAoIAdBLIAaBCIAEALQAXA6AAA9QAAARgCARQgCAZgGAXQgcA/gvAsQguAsg7AUQA3gZAogug");
	this.shape_61.setTransform(0.8,-19.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CCCCCC").s().p("AhVHMQg0gTgrglQgigfgZgmQgYgngOgsQgOgtgCgvIAAgMQAAg+AVg6QAIgVAHgeQAHgfAFgmQAGglAEgnQAEgmACgjQACgiAAgaIAAgPIAAgHQAAgeAHgcQAHgdASgWQASgWAfgLIAVgGIAZgFQASgBAUADQATADARAIQAQAIAIAOQgDgHAGgKQAJgJAQgGQAQgGATAFQANAEALALQAMAKAKANIARAXQATApACAtQAAAVANAmQAAAXAIAhQAHAhAMAmQANAnAOAoIAdBLIAaBDIAEAKQAXA6AAA+IgCAiQgCAYgGAYQgZA3goAqQgoApgzAXQgzAWg6ACIgHABQgxAAgwgSg");
	this.shape_62.setTransform(-15.5,-18.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("ACYItQgbgIgQgMQgQgMgHgKIgDgDIgEABQgpAEgngDQhOgIhCgiQhCghgvg1Qgvg1gXhDQgWhCAHhKQAHhKAng/QAOgYAOgkQAOgkAOgrQANgsALgsQALgrAIgmQAHgmADgaQAEgqATgjQAUgkAfgbQAggbAogPQggAcgTAlQgUAkgEAqIgDAcIgGBDQgEAigHAcIgIAgQgHAXgEAWQgFAWAAAUIABAQQgOgGgLADQgJAEgFAIQgGAIgEAKIgGAUIgDAKQgHAagKAYQgJAXgIAWQgHAZgDAbQgHBJAWBBQAVBDAtA0QAtA1A/AhQA/AhBJAIQBTAHBIgXQBIgYA4g1QgQAbgZAZQgYAagZAUQgYAWgRAMIgSANIgFAEIACACIAXAjIAIALIgCgBIACACQgBACgEABQgpgBgbgIg");
	this.shape_63.setTransform(-27,-12.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2,1,1).p("AD4lOQAEgvgOgqQgPgpgdgiQgeghgqgWQgpgVgygFQgwgEgtAOQgtANgkAcQgkAcgXAmQgWAngFAvQgDAZgHAmQgIAlgLAsQgLArgNArQgNArgOAlQgOAkgOAXQgnA+gJBOQgHBMAYBDQAXBEAwA2QAwA2BDAiQBDAjBQAHQApAEAogFQAIAKAQANQARAMAcAJQAcAKAsgBQAAAAAEgBQAEgBACgEQACgDgDgGQgFgHgGgJQgHgKgFgIQgFgHAAgBQAAAAANgJQAMgIATgQQATgQAWgUQAWgVATgWQATgXALgXQAZgjAQgqQAQgpAEgtQAFgqgGgoQgGgogOglQgMgegQgmQgPgogRgtQgQgsgOgsQgNgrgHgkQgIgjACgWg");
	this.shape_64.setTransform(-23.6,-13.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("ABzI7QgcgJgRgMQgQgNgIgKQgoAFgpgEQhQgHhDgjQhDgigwg2Qgwg2gXhEQgYhDAHhMQAJhOAng+QAOgXAOgkQAOglANgrQANgrALgrQALgsAIglQAHgmADgZQAFgvAWgnQAXgmAkgcQAkgcAtgNQAtgOAwAEQAyAFApAVQAqAWAeAhQAdAiAPApQAOAqgEAvQgCAWAIAjQAHAkANArQAOAsAQAsIAgBVIAcBEQAOAlAGAoQAGAogFAqQgEAtgQApQgQAqgZAjQgLAXgTAXQgTAWgWAVQgWAUgTAQIgfAYIgNAJIAFAIIAMASIALAQQADAGgCADQgCAEgEABIgEABIAAAAQgsAAgcgJg");
	this.shape_65.setTransform(-23.6,-13.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,1,1).p("AAIgbQAAAAgHAGQgEAFgLAHQgMAHgOADQgOAFgPgBQgBABgCAEQgCAEAEAFQADAFAPADQAAABAPAAQAQABAVgBQAVgCAVgFQAUgGAMgM");
	this.shape_66.setTransform(-51,30.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#08577A").s().p("AglAcIgPgBQgPgDgDgFQgEgFACgEIADgFQAPABAOgFQAOgDAMgHIAPgMIAHgGIBCAeQgMAMgUAGQgVAFgVACIgXAAIgOAAg");
	this.shape_67.setTransform(-51,30.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAAAOQgEgBgDgEQgCgEAAgFQABgFADgFQADgEADABQAEAAACAFQADAEAAAFQgBAFgDAFQgDADgDAAIAAAAg");
	this.shape_68.setTransform(-3.9,-51.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgCAlQgKgCgGgLQgGgLABgOQACgQAIgKQAHgJAJAAQAKACAGALQAGALgCAOQgCAQgHAJQgHAKgIAAIgBAAg");
	this.shape_69.setTransform(-4.7,-50);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E5E2BE").s().p("AAGBFIgOgBQgFgLgEgLQgDgMgBgOIAAgRQAAgXAGgUQAIgUAKgIQgHAVAAAeIAAAPQABAPADAPQACAPAGALQAFAMAKADIgRAAg");
	this.shape_70.setTransform(-9.2,-53);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("AARhIQgMgLgMABQgOACgLAOQgKANgFAWQgEAWACAYQADAfALAXQAOgEAVAEQAWADAXALQADgJABgOQACgNAAgPQAAgPgBgMQgDgYgJgVQgIgUgNgMg");
	this.shape_71.setTransform(-6.8,-52.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAABFQgVgEgOAEQgLgXgDgfQgCgYAEgWQAFgWAKgNQALgOAOgCQAMgBAMALQANAMAIAUQAJAVADAYIABAbQAAAPgCANQgBAOgDAJQgXgLgWgDg");
	this.shape_72.setTransform(-6.8,-52.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAAASQgGgBgDgGQgDgFAAgGQABgHAEgFQAEgFAEABQAGAAADAGQADAFgBAGQAAAHgEAFQgEAFgEAAIAAAAg");
	this.shape_73.setTransform(-20.6,-50.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAtQgOgCgIgOQgIgOABgRQACgTALgMQALgLAMAAQAOACAIAOQAIAOgBARQgCATgLAMQgKALgLAAIgCAAg");
	this.shape_74.setTransform(-21.3,-49.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E5E2BE").s().p("AgcASQgDgZAHgXQAHgXAPgPQAMgPATgDQgUAMgJAZQgKAYADAeQACAaAIATQAKATARAKIgeAIQgYgZgEgsg");
	this.shape_75.setTransform(-28.9,-51.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("ABKAEQgHgwgXgYQgXgZgeADQgVADgPAPQgQAPgIAYQgHAYACAbQACAXAJASQAIATANANQARgEAagHQAbgGAkgFQAHgOACgQQADgRgCgSg");
	this.shape_76.setTransform(-24.7,-51.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag/A7QgJgSgCgXQgCgbAHgYQAIgYAQgPQAPgPAVgDQAegDAXAZQAXAYAHAwQACASgDARQgCAQgHAOQgkAFgbAGIgrALQgNgNgIgTg");
	this.shape_77.setTransform(-24.7,-51.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("AAZBRQAPgUAOgaQANgaAIgXQAHgZgDgRQgDgHgNADQgNADgUAHIgkAOQgTAGgNABQghABgfgLIAPAEQAOADATgBQASAAAXgHQATgIAWgMQAVgMARgMQAQgNAHgGIAEgBQADgBACABQADABABAEIABAHIAAAFQABAIgCATQgBASgGAYQgGAVgLAZQgLAYgUAVQgTAUgcANQAKgGAPgTg");
	this.shape_78.setTransform(-33.7,-22.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1).p("ABQAAQAIgOAEgLQACgLAAAAIi8AAQABABAMALQAMAMATANQATAPAVALQAUALATAAQASgCANgLQAMgMAIgNg");
	this.shape_79.setTransform(-19.1,-33.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D8A235").s().p("AgKAaQgVgLgSgPQgUgNgMgLIgMgMIC8gBIgEAMQgDALgIAOQgIANgMALQgMAMgTABQgTAAgUgLg");
	this.shape_80.setTransform(-19.1,-33.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B4B4B4").s().p("AgpHJQgxgTgpgmQghgfgYgnQgXgogNgtQgNgtgBgwIgBgMQAAg/AVg7QAHgUAHggQAGggAFgmIAJhNIAGhKQACgjAAgbIAAgPIAAgIQAAgaAFgZQAFgaAMgWQANgVAVgOQgRAWgHAeQgHAdAAAfIAAAHIAAAPQAAAbgCAjIgFBKIgKBNQgFAmgGAgQgHAggHAWQgVA5AAA/IABAMQABAxANAtQANAtAXAnQAYAnAhAfQAoAmAyAUQAuATA1gBQArgCAogPQAogQAigbQglAmgvAVQguAVg0ACIgHAAQgwAAgsgSg");
	this.shape_81.setTransform(-19.9,-18.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CCCCCC").s().p("AhRHUQgxgTgpgmQghgfgXgnQgYgogNgtQgNgtgBgwIAAgMQgBhAAVg6QAHgWAHgeQAGggAFgnQAGglAEgoIAGhKQACgjAAgaIgBgPIAAgIQAAgeAHgdQAHgdARgXQAQgXAegKIAVgHIAXgEQARgCATADQATADAPAJQAPAJAIAOQgDgIAGgKQAJgKAPgGQAPgGASAFQAMAFALALQALAKAJANIAQAYQATApACAuQAAAVAMAoQAAAWAHAiQAHAiAMAnQAMAnAOApIAbBNIAZBDIAEALQAVA7AAA/IgBAiQgDAYgFAZQgYA5gmAqQgmApgwAYQgxAXg3ACIgGAAQgvAAgugSg");
	this.shape_82.setTransform(-15.9,-19.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("ACQI2QgZgIgPgMQgPgMgHgKIgDgDIgDAAQgoAFglgEQhKgHg/giQg+gigtg2Qgtg2gVhEQgWhEAHhLQAHhLAlhAQANgYANglQAOglANgsQAMgsALgtQALgsAHgnQAHgmACgbQAFgqASgkQASglAegbQAegbAngQQgfAdgSAlQgTAlgEArIgDAcIgGBEQgDAjgHAdIgIAgQgGAYgEAWQgFAWAAAVIABAQQgNgHgLAEQgIADgGAJQgFAIgDAKIgGAVIgDAKQgHAagJAYQgJAYgHAXQgHAZgDAbQgHBKAVBDQAVBDAqA2QArA2A8AhQA8AiBFAIQBPAHBEgYQBEgYA2g2QgPAbgYAaQgXAbgXAVQgXAVgQANIgRANIgFAEIABADIAWAjIAIAKIgCAAIACACIgFADQgngBgagJg");
	this.shape_83.setTransform(-26.9,-13.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAAANQgEgBgDgEQgDgDABgFQAAgFAEgEQADgEADABQAEAAADAEQADAFgBADQgBAGgDAEQgDADgDAAIAAAAg");
	this.shape_84.setTransform(-2.9,-45.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgCAiQgLgBgGgKQgGgLABgNQACgPAIgJQAIgJAJABQALABAGALQAGAKgBANQgCAOgIAKQgIAIgIAAIgBAAg");
	this.shape_85.setTransform(-3.7,-43.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E5E2BE").s().p("AAHBBIgPgBQgGgKgDgLQgEgLgBgOIgBgPQAAgWAIgSQAHgTALgIQgIAUAAAcIABAPQABANADAPQACANAGAKQAGALAKAEIgRAAg");
	this.shape_86.setTransform(-8.5,-46.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1,1,1).p("AAThDQgOgKgMABQgPABgLANQgLANgFAUQgFAVACAWQAEAdAMAVQAPgDAVADQAXADAYAKQAEgIABgNQACgMAAgOQAAgOgCgLQgCgXgJgTQgJgTgNgLg");
	this.shape_87.setTransform(-5.9,-46.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAABAQgVgDgPADQgMgVgEgdQgCgWAFgVQAFgUALgNQALgNAPgBQAMgBAOAKQANALAJATQAJATACAXQACALAAAOQAAAOgCAMQgBANgEAIQgYgKgXgDg");
	this.shape_88.setTransform(-5.9,-46.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAAAQQgGAAgDgFQgEgFABgGQAAgHAFgEQAEgFAFABQAFAAAEAGQADAFgBAFQAAAHgFAEQgEAEgEAAIAAAAg");
	this.shape_89.setTransform(-20.4,-44.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgDAqQgPgCgIgNQgJgNABgPQACgTAMgKQALgLANAAQAOABAJANQAJAOgBAPQgDASgLAMQgLAKgMAAIgBAAg");
	this.shape_90.setTransform(-21.1,-43.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E5E2BE").s().p("AgeARQgCgYAHgVQAHgVAPgOQANgOAUgDQgUALgKAXQgKAXACAcQADAYAJARQAKASASAKIggAHQgZgXgFgpg");
	this.shape_91.setTransform(-29.2,-45.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("ABOADQgHgsgYgXQgZgXgfADQgWACgQAOQgRAPgIAWQgIAXACAZQADAVAIARQAJASAOAMQASgEAbgGQAcgGAmgEQAHgOADgPQADgQgCgRg");
	this.shape_92.setTransform(-24.8,-45.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhDA3QgIgRgDgVQgCgZAIgXQAIgWARgPQAQgOAWgCQAfgDAZAXQAYAXAHAsQACARgDAQQgDAPgHAOQgmAEgcAGIgtAKQgOgMgJgSg");
	this.shape_93.setTransform(-24.8,-45.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFE4B3").s().p("AAvAaQgKgBgPgGQgRgGgXgNIgEgDIgJgGIgIgEQgDABgFAEQgFAEgJAAIAEgGIAIgLQAFgFAEAAIAEACQAEABACAFIAKAJQAMAJATAIQAVALAeAGIgDABIgGABIgGgBg");
	this.shape_94.setTransform(-9.1,-37);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D8A235").s().p("AgDAEQgCgCgBgGIAFACIAHACQADABgFACIgFACIgCgBg");
	this.shape_95.setTransform(-13.7,-34.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D8A235").s().p("ABAAUIgZgGQgMgDgNgCQgRgDgTABIgegBIgdAAQgRgBgOgDQgPgCgEgFIgCgEIgCgEIAAgBQAGAGAJACQAJACAHABIAIAAQAWACAaAAQAaAAAagEIANgCQAHgCAHABQAIABAGAEQAHADAHACQAIADAIgCQAIgDAHgCQAEgCACgDQADgDAEgCQAFAAAGABQAGACAFgCQADgCACgDQABgDAEgBQACADAAAFQAAAEgCADQgDADgGABIgMAAIgJgCIgDAAIABADQgIAOgKAEQgGADgHAAIgIgBg");
	this.shape_96.setTransform(-15.8,-31.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(1,1,1).p("AB4gDQAMADABAAQAAAAADAEQADAFABAHQABAGgEAFQgEAFgHAAQgHABgGgBIgGgBQgJAQgKAFQgKAFgLgBQgMgBgNgEQgNgEgOgDQgOgBgMAAQgOAAgOAAQgHgBgOAAQgOAAgQgBQgQgBgMgDQgMgDgEgHQgFgIgBgDQAAgCAHgBQAIAAASgDQASgCARgDQASgEAQgEQALgFAKgGQAKgGAHgJQABgDAEgGQAEgGAFgFQAFgFAFgBQAGAAAEAHQAHAJAQAJQAPAJASAHQARAHANAEg");
	this.shape_97.setTransform(-15.8,-34.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F9C248").s().p("ABDA4QgMgBgNgEQgNgEgOgDQgOgBgMAAIgcAAIgVgBIgegBQgQgBgMgDQgMgDgEgHIgGgLQAAgCAHgBIAagDQASgCARgDQASgEAQgEQALgFAKgGQAKgGAHgJIAFgJIAJgLQAFgFAFgBQAGAAAEAHQAHAJAQAJQAPAJASAHIAeALIANADIADAEQADAFABAHQABAGgEAFQgEAFgHAAQgHABgGgBIgGgBQgJAQgKAFQgHAEgJAAIgFAAg");
	this.shape_98.setTransform(-15.8,-34.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,1,1).p("AgqALQAAAAAKgCQAJgCAOgCQANgDAOgCQAPgEALgG");
	this.shape_99.setTransform(-14.5,38.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(2,1,1).p("AA3gWQgBABAAALQABAKAEAQQAFAQANAOQAAAAAAABQAAABgEABQgEABgMgBQgKAAgQgCQgPgCgSgIQgTgIgTgVQgUgSgQgm");
	this.shape_100.setTransform(-34.8,39.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AA5AxIgagCQgPgCgSgIQgTgIgTgVQgUgSgQgmICDAaIgBAMQABAKAEAQQAFAQANAOIAAABIgEACIgFAAIgLAAg");
	this.shape_101.setTransform(-34.8,39.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("ABTBPIgCAAIgDAAQAOgLAEgTIAAgKQAAgRgGgPQgHgNgIgHQgRgNgVgDQgUgEgUgBQgUgBgSgDQgSgDgQgIQgPgJgLgRQAGgDAIAAQAIAAAHADIAIAEQASAKAUAIQATAIAVABQAWAAAYgLQADAAAHADQAHAEAIALQAIAMAEAXQAGAagBATQAAAXgHAJQgEAEgHAAIgBAAg");
	this.shape_102.setTransform(1.2,-18.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(2,1,1).p("ABKg8QAJADALANQAKAMAGAdQAIAsgFAWQgFAXgUgBQgKABgYgFQgYgEgegOQgcgNgdgYQgdgagWgnQgKgSAGgMQAFgLAOgDQAOgEAQAGQAEACAEACQATAMAUAHQARAHAVAAQAVAAAWgKQAAgBAJACg");
	this.shape_103.setTransform(0.6,-18.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#666666").s().p("AA2BRQgYgEgegOQgcgNgdgYQgdgagWgnQgKgSAGgMQAFgLAOgDQAOgEAQAGIAIAEQATAMAUAHQARAHAVAAQAVAAAWgKQAAgBAJACQAJADALANQAKAMAGAdQAIAsgFAWQgFAXgUgBIgBAAQgLAAgWgEg");
	this.shape_104.setTransform(0.6,-18.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("AAaBMQAQgTAOgYQAPgZAIgVQAIgYgEgPQgDgGgOACQgOADgUAHIgmAMQgUAGgOABQgjABghgLIARAEQAOADATgBQAUAAAYgHQAUgHAXgLQAWgMASgLQASgLAHgGIAEgCQADAAACABQADABABADIACAHIAAAFQAAAIgCARQgBARgGAWQgGAUgMAXQgMAXgVATQgUATgdAMQAKgFAQgSg");
	this.shape_105.setTransform(-34.2,-18.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgyAyQgpgDgpgNQABgJgDgHIgEgQQgCgGACgKIAGgIIAJgNQAGgGAGgDQAGgEAEAEIAUAZQAMAMANAJQANAKAPAFQAQAEAQgEIABAAQAegKAkgQQAjgRAigXQgRAngdAVQgeAXglAJQgbAHgeAAIgUAAg");
	this.shape_106.setTransform(-39.2,-12.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(2,1,1).p("AhWgwQABAAANAEQANAEAWAAQAXABAagIQAXgHAWgMQAXgLARgMQARgLAGgFQABgBAEgBQAFgBAFACQAEADACAKQABAGgBAQQgBAQgFAXQgFAWgLAWQgMAZgUAVQgTAVgfAOQgfAOgqABQgtACg8gQ");
	this.shape_107.setTransform(-37.1,-17.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#666666").s().p("AiNBeIA3iOIAOAEQANAEAWAAQAXABAagIQAXgHAWgMQAXgLARgMQARgLAGgFIAFgCQAFgBAFACQAEADACAKQABAGgBAQQgBAQgFAXQgFAWgLAWQgMAZgUAVQgTAVgfAOQgfAOgqABIgIAAQgqAAg3gOg");
	this.shape_108.setTransform(-37.1,-17.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#9B0D0D").s().p("AgDALQgOgHgMgGIgSgPIANAAIAVAAQAJAPAPAFQARAHAUgBQgIAIgRABQgNAAgNgHg");
	this.shape_109.setTransform(-18.5,-28.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("AA+gUIh7AAQABAAAHAGQAHAHAMAHQAMAJAPAGQAMAGAOAAQAOAAAJgGQAIgHAFgIQAEgHABgHg");
	this.shape_110.setTransform(-18,-28.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C12D05").s().p("AgHAPQgPgHgMgIQgMgGgHgIIgIgGIB7AAIgCAGQgBAGgEAIQgFAHgIAIQgJAGgOAAQgOABgMgHg");
	this.shape_111.setTransform(-18,-28.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("ABggYQAEgKAAAAIjHAAQABABAMALQANALAVAMQAUANAWALQAUAKAUAAQAUgBANgLQANgLAIgMQAJgOADgKg");
	this.shape_112.setTransform(-18.8,-28.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D8A235").s().p("AgKAZQgXgLgTgNQgVgNgMgKIgOgLIDHgBIgEAKQgDALgJANQgIAMgNAKQgNALgUACQgUAAgUgKg");
	this.shape_113.setTransform(-18.8,-28.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B4B4B4").s().p("AgFAvQgRgKgRgPQgRgPgNgOIgWgaIgIgLIDHgLIgDAMIgIAaQgFAQgJAPQgJAQgMAMQgMALgQADIgEAAQgOAAgNgJg");
	this.shape_114.setTransform(-18.4,-26);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B4B4B4").s().p("AgsGrQgzgSgrgjQgjgdgYglQgZglgOgqQgNgqgCgtIAAgLQAAg7AVg3QAIgTAHgeQAHgeAFgjQAGgkAEgkQAEglACghQACggAAgZIAAgPIAAgHQAAgYAFgYQAFgYANgVQAOgTAWgOQgSAWgIAbQgHAcAAAcIAAAHIAAAOQAAAZgCAhIgGBFQgEAlgFAjQgGAkgHAeQgHAegIAUQgVA1AAA7IAAAMQACAtAOAqQANAqAZAlQAZAlAiAcQArAkA0ASQAxASA3gBQAugCAqgOQApgOAkgaQgnAkgxAUQgwATg3ACIgHABQgzAAgvgSg");
	this.shape_115.setTransform(-19.6,-14.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E5E5E5").s().p("AAkF8QAqgtAXg8QAFgYABgXQABgRgBgRQgEg8gag4IgFgKIgdhAIgihIQgPgngOglQgPglgJggQgJghgCgVQgPglgBgVQgFgsgVgnIgPgSIgSgSQAOgEAQAEQAMAEAMAKQAMAKAKANIARAWQATAmABArQABAUANAlQAAAVAFAfQAIAgAMAlQAMAkAPAnIAdBHIAaA/IAEAKQAXA3AAA7QAAAQgCAQQgCAXgGAXQgcA8gvAqQguApg7ATQA3gXAogsg");
	this.shape_116.setTransform(0.8,-16.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CCCCCC").s().p("AhVG2Qg0gSgrgkQgigdgZglQgYgkgOgqQgOgrgCgtIAAgLQAAg7AVg3QAIgUAHgdQAHgeAFgjQAGgkAEgkQAEglACghQACggAAgZIAAgOIAAgHQAAgcAHgcQAHgbASgVQASgVAfgKIAVgGIAZgFQASgBAUADQATADARAHQAQAJAIANQgDgHAGgKQAJgJAQgFQAQgGATAFQANAEALAKQAMAKAKAMIARAWQATAnACArQAAAUANAkQAAAWAIAfQAHAgAMAkQANAlAOAmIAdBIIAaA/IAEAKQAXA3AAA7IgCAgQgCAXgGAXQgZA1goAnQgoAngzAWQgzAVg6ACIgIAAQgxAAgvgQg");
	this.shape_117.setTransform(-15.5,-15.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("ACYISQgbgIgQgLQgQgLgHgKIgDgDIgEABQgpAEgngDQhOgHhCggQhCgggvgzQgvgygXg/QgWhAAHhGQAHhHAng8QAOgWAOgiQAOgjAOgpQANgpALgqQALgqAIgjQAHglADgZQAEgnATgiQAUgiAfgZQAggaAogOQggAagTAjQgUAjgEAoIgDAaIgGBAQgEAggHAbIgIAeQgHAXgEAUQgFAVAAATIABAQQgOgHgLAEQgJADgFAIQgGAHgEAKIgGAUIgDAJQgHAYgKAXQgJAWgIAVQgHAYgDAZQgHBFAWA/QAVA/AtAyQAtAyA/AgQA/AfBJAHQBTAIBIgXQBIgWA4gzQgQAagZAYQgYAYgZAUQgYAUgRAMIgSAMIgFAEIACACIAXAhIAIAKIgCAAIACACIgFACQgpAAgbgIg");
	this.shape_118.setTransform(-27,-10.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(2,1,1).p("AD4k9QAEgtgOgoQgPgogdggQgegggqgUQgpgUgygEQgwgEgtANQgtAMgkAbQgkAagXAlQgWAlgFAsQgDAZgHAjQgIAkgLApQgLApgNApQgNApgOAjQgOAigOAXQgnA7gJBKQgHBHAYBBQAXBBAwAzQAwAzBDAhQBDAgBQAIQApADAogEQAIAJAQAMQARAMAcAIQAcAJAsAAQAAAAAEgBQAEgBACgDQACgEgDgFQgFgHgGgJQgHgJgFgHQgFgHAAgBQAAAAANgJQAMgIATgPQATgPAWgTQAWgUATgVQATgWALgVQAZgiAQgoQAQgnAEgrQAFgogGgmQgGgmgOgjQgMgcgQgkQgPgngRgqQgQgrgOgpQgNgpgHgiQgIgiACgUg");
	this.shape_119.setTransform(-23.6,-10.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#666666").s().p("ABzIfQgcgIgRgMQgQgMgIgJQgoAEgpgDQhQgIhDggQhDghgwgzQgwgzgXhBQgYhBAHhHQAJhKAng7QAOgXAOgiQAOgjANgpQANgpALgpQALgpAIgkQAHgjADgZQAFgsAWglQAXglAkgaQAkgbAtgMQAtgNAwAEQAyAEApAUQAqAUAeAgQAdAgAPAoQAOAogEAtQgCAUAIAiQAHAiANApQAOApAQArIAgBRIAcBAQAOAjAGAmQAGAmgFAoQgEArgQAnQgQAogZAiQgLAVgTAWQgTAVgWAUQgWATgTAPIgfAXIgNAJIAFAIIAMAQIALAQQADAFgCAEQgCADgEABIgEABQgsAAgcgJg");
	this.shape_120.setTransform(-23.6,-10.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(2,1,1).p("AAIgaQAAAAgHAGQgEAFgMAHQgLAGgOADQgOAFgPgBQgBAAgCAEQgCAEADAFQAEAFAOADQABAAAPABQAQAAAVgBQAVgBAVgGQAUgFAMgL");
	this.shape_121.setTransform(-51,30.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AglAbIgQgBQgOgDgEgFQgDgFACgEIADgEQAPABAOgFQAOgDALgGQAMgHAEgFIAHgGIBCAdQgMALgUAFQgVAGgVABIgYABIgNAAg");
	this.shape_122.setTransform(-51,30.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AAGBFIgOgBQgFgKgDgMQgDgLgCgPIgBgQQAAgYAHgUQAIgTAKgJQgIAVAAAeIABAQQABAOADAPQACAPAGALQAGALAJAEIgRAAg");
	this.shape_123.setTransform(-9,-53.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AARhHQgMgMgMABQgOACgLAOQgKANgFAWQgEAWACAYQADAfALAXQAOgEAVAEQAWADAXALQADgJABgNQACgOAAgPQAAgPgCgMQgCgYgJgVQgIgUgNgLg");
	this.shape_124.setTransform(-6.6,-52.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#666666").s().p("AAABFQgVgEgOAEQgLgXgDgfQgCgYAEgWQAFgWAKgNQALgOAOgCQAMgBAMAMQANALAIAUQAJAVACAYQACAMAAAPIgCAdQgBANgDAJQgXgLgWgDg");
	this.shape_125.setTransform(-6.6,-52.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgcASQgDgZAHgXQAHgXAPgPQAMgPATgDQgUAMgJAZQgKAYADAeQACAaAIATQAKATARAKIgeAIQgYgZgEgsg");
	this.shape_126.setTransform(-28.7,-51.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("AgJhaQgUADgQAPQgQAPgHAYQgIAYACAbQADAXAIASQAIATANANQARgEAagHQAbgGAkgFQAHgOACgQQADgRgCgSQgHgwgXgZQgXgYgeADg");
	this.shape_127.setTransform(-24.5,-51.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#666666").s().p("Ag/A7QgIgSgDgXQgCgbAIgYQAHgYAQgPQAQgPAUgDQAegDAXAYQAXAZAHAwQACASgDARQgCAQgHAOQgkAFgbAGIgrALQgNgNgIgTg");
	this.shape_128.setTransform(-24.5,-51.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E5E2BE").s().p("AAHBFIgOgBQgGgLgDgLQgDgMgCgOIgBgRQAAgXAHgUQAIgUAJgIQgHAVAAAeIABAPQABAPADAPQACAPAGALQAGAMAIADIgPAAg");
	this.shape_129.setTransform(-9.2,-53);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1,1,1).p("ABegkIi8AAQABABAMALQAMAMATANQATAOAVAMQAUAKATABQASgCANgLQANgMAHgNQAIgOADgLQAEgLgBAAg");
	this.shape_130.setTransform(-19.1,-33.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D8A235").s().p("AgJAaQgWgLgTgOQgTgNgMgMIgNgMIC8gBIgDAMQgDALgIAOQgHANgNALQgNAMgSABQgTAAgTgLg");
	this.shape_131.setTransform(-19.1,-33.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("ABfgkIi9AAQABABAMALQAMAMAUANQASAPAWALQATALATAAQATgCAMgLQANgMAHgNQAIgOAEgLQADgLAAAAg");
	this.shape_132.setTransform(-19.1,-33.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(1,1,1).p("ABUAAQAJgOADgKQAEgLAAgBIjHABQABABAMALQANALAVANQAUAOAWALQAUALAUAAQAUgCANgLQANgLAIgNg");
	this.shape_133.setTransform(-18.8,-31.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("ABcgZQACgLAAAAIi8AAQABABAMALQAMAMATANQATAPAVALQAUALATAAQASgCANgLQAMgMAIgNQAIgOAEgLg");
	this.shape_134.setTransform(-19.1,-33.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1,1,1).p("ABkgiIjHAAQABABAMALQANALAVAMQAUANAWALQAUAKAUAAQAUgBANgLQANgLAIgMQAJgOADgKQAEgKAAAAg");
	this.shape_135.setTransform(-18.8,-28.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("AAdAmQASgCANgLQANgMAHgNQAIgOADgLQAEgLgBAAIi8AAQABABAMALQAMAMATANQATAOAVAMQAUAKATABg");
	this.shape_136.setTransform(-19.1,-33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28,p:{y:29.9}},{t:this.shape_27,p:{y:29.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:-20.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-30.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.4,y:-16.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.2}},{t:this.shape_3,p:{x:-16.2}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.2}},{t:this.shape},{t:this.instance_1}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},3).to({state:[]},3).to({state:[{t:this.shape_28,p:{y:29.8}},{t:this.shape_27,p:{y:29.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_83},{t:this.shape_82},{t:this.shape_22,p:{y:-20.4}},{t:this.shape_81},{t:this.shape_20,p:{x:-18.7,y:-30.8}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.5,y:-16.5}},{t:this.shape_78,p:{x:-33.7}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.3}},{t:this.shape_3,p:{x:-16.3}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.1}},{t:this.shape},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-20.6}},{t:this.shape_72,p:{x:-6.8}},{t:this.shape_71,p:{x:-6.8}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},7).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_28,p:{y:29.9}},{t:this.shape_27,p:{y:29.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:-20.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-30.9}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.4,y:-16.4}},{t:this.shape_78,p:{x:-33.6}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.2}},{t:this.shape_3,p:{x:-16.2}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.2}},{t:this.shape},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-20.5}},{t:this.shape_72,p:{x:-6.7}},{t:this.shape_71,p:{x:-6.7}},{t:this.shape_129},{t:this.shape_69},{t:this.shape_68},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},2).to({state:[{t:this.shape_28,p:{y:29.9}},{t:this.shape_27,p:{y:29.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:-20.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-30.9}},{t:this.shape_19},{t:this.shape_132},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.4,y:-16.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.2}},{t:this.shape_3,p:{x:-16.2}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.2}},{t:this.shape},{t:this.instance_1}]},2).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_133},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},3).to({state:[]},3).to({state:[{t:this.shape_28,p:{y:29.8}},{t:this.shape_27,p:{y:29.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_83},{t:this.shape_82},{t:this.shape_22,p:{y:-20.4}},{t:this.shape_81},{t:this.shape_20,p:{x:-18.7,y:-30.8}},{t:this.shape_80},{t:this.shape_134},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.5,y:-16.5}},{t:this.shape_78,p:{x:-33.7}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.3}},{t:this.shape_3,p:{x:-16.3}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.1}},{t:this.shape},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-20.6}},{t:this.shape_72,p:{x:-6.8}},{t:this.shape_71,p:{x:-6.8}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},7).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_135},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_28,p:{y:29.9}},{t:this.shape_27,p:{y:29.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:-20.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-30.9}},{t:this.shape_131},{t:this.shape_136},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.4,y:-16.4}},{t:this.shape_78,p:{x:-33.6}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.2}},{t:this.shape_3,p:{x:-16.2}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.2}},{t:this.shape},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-20.5}},{t:this.shape_72,p:{x:-6.7}},{t:this.shape_71,p:{x:-6.7}},{t:this.shape_129},{t:this.shape_69},{t:this.shape_68},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},2).to({state:[{t:this.shape_28,p:{y:29.9}},{t:this.shape_27,p:{y:29.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:-20.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-30.9}},{t:this.shape_19},{t:this.shape_132},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.4,y:-16.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.2}},{t:this.shape_3,p:{x:-16.2}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.2}},{t:this.shape},{t:this.instance_1}]},2).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_133},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},3).to({state:[]},3).to({state:[{t:this.shape_28,p:{y:29.8}},{t:this.shape_27,p:{y:29.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_83},{t:this.shape_82},{t:this.shape_22,p:{y:-20.4}},{t:this.shape_81},{t:this.shape_20,p:{x:-18.7,y:-30.8}},{t:this.shape_80},{t:this.shape_134},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.5,y:-16.5}},{t:this.shape_78,p:{x:-33.7}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.3}},{t:this.shape_3,p:{x:-16.3}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.1}},{t:this.shape},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-20.6}},{t:this.shape_72,p:{x:-6.8}},{t:this.shape_71,p:{x:-6.8}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},7).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_135},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_28,p:{y:29.9}},{t:this.shape_27,p:{y:29.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:-20.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-30.9}},{t:this.shape_131},{t:this.shape_136},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.4,y:-16.4}},{t:this.shape_78,p:{x:-33.6}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.2}},{t:this.shape_3,p:{x:-16.2}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.2}},{t:this.shape},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-20.5}},{t:this.shape_72,p:{x:-6.7}},{t:this.shape_71,p:{x:-6.7}},{t:this.shape_129},{t:this.shape_69},{t:this.shape_68},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},2).to({state:[{t:this.shape_28,p:{y:29.9}},{t:this.shape_27,p:{y:29.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:-20.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-30.9}},{t:this.shape_19},{t:this.shape_132},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.4,y:-16.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.2}},{t:this.shape_3,p:{x:-16.2}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.2}},{t:this.shape},{t:this.instance_1}]},2).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_133},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},3).to({state:[]},3).to({state:[{t:this.shape_28,p:{y:29.8}},{t:this.shape_27,p:{y:29.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_83},{t:this.shape_82},{t:this.shape_22,p:{y:-20.4}},{t:this.shape_81},{t:this.shape_20,p:{x:-18.7,y:-30.8}},{t:this.shape_80},{t:this.shape_134},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.5,y:-16.5}},{t:this.shape_78,p:{x:-33.7}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.3}},{t:this.shape_3,p:{x:-16.3}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.1}},{t:this.shape},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-20.6}},{t:this.shape_72,p:{x:-6.8}},{t:this.shape_71,p:{x:-6.8}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},7).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_135},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_28,p:{y:29.9}},{t:this.shape_27,p:{y:29.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:-20.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-30.9}},{t:this.shape_131},{t:this.shape_136},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-38.4,y:-16.4}},{t:this.shape_78,p:{x:-33.6}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-16.2}},{t:this.shape_3,p:{x:-16.2}},{t:this.shape_2},{t:this.shape_1,p:{y:-40.2}},{t:this.shape},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-20.5}},{t:this.shape_72,p:{x:-6.7}},{t:this.shape_71,p:{x:-6.7}},{t:this.shape_129},{t:this.shape_69},{t:this.shape_68},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-74.7,75.7,120.3);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 5
	this.instance = new lib.circle("synched",0);
	this.instance.setTransform(25.4,-10.4,0.1,0.1);
	this.instance.alpha = 0.559;

	this.instance_1 = new lib.circle("synched",0);
	this.instance_1.setTransform(50.2,-10.4,0.1,0.1);
	this.instance_1.alpha = 0.559;

	this.instance_2 = new lib.circle("synched",0);
	this.instance_2.setTransform(37.8,15.2,0.1,0.1);
	this.instance_2.alpha = 0.559;

	this.instance_3 = new lib.circle("synched",0);
	this.instance_3.setTransform(159.4,16.9,0.1,0.1);
	this.instance_3.alpha = 0.559;

	this.instance_4 = new lib.circle("synched",0);
	this.instance_4.setTransform(137.9,24.3,0.1,0.1);
	this.instance_4.alpha = 0.559;

	this.instance_5 = new lib.circle("synched",0);
	this.instance_5.setTransform(166,46.6,0.1,0.1);
	this.instance_5.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:166,y:46.6}},{t:this.instance_4,p:{x:137.9,y:24.3}},{t:this.instance_3,p:{x:159.4,y:16.9}},{t:this.instance_2,p:{x:37.8,y:15.2}},{t:this.instance_1,p:{x:50.2,y:-10.4}},{t:this.instance,p:{x:25.4,y:-10.4}}]}).to({state:[{t:this.instance_5,p:{x:158.6,y:-3}},{t:this.instance_4,p:{x:140.4,y:-14.5}},{t:this.instance_3,p:{x:172.6,y:23.5}},{t:this.instance_2,p:{x:69.2,y:-12.9}},{t:this.instance_1,p:{x:70.8,y:-41}},{t:this.instance,p:{x:49.3,y:-17}}]},1).to({state:[{t:this.instance_5,p:{x:158.6,y:-3}},{t:this.instance_4,p:{x:140.4,y:-14.5}},{t:this.instance_3,p:{x:172.6,y:23.5}},{t:this.instance_2,p:{x:69.2,y:-12.9}},{t:this.instance_1,p:{x:70.8,y:-41}},{t:this.instance,p:{x:49.3,y:-17}}]},4).to({state:[{t:this.instance_5,p:{x:166,y:46.6}},{t:this.instance_4,p:{x:137.9,y:24.3}},{t:this.instance_3,p:{x:159.4,y:16.9}},{t:this.instance_2,p:{x:37.8,y:15.2}},{t:this.instance_1,p:{x:50.2,y:-10.4}},{t:this.instance,p:{x:25.4,y:-10.4}}]},1).to({state:[]},1).wait(7));

	// Layer 1
	this.instance_6 = new lib.water2("synched",0);
	this.instance_6.setTransform(91,115.5,0.6,0.6,0,0,0,-11.6,96);
	this.instance_6.alpha = 0.398;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({scaleY:1.44},5).to({alpha:0},4).wait(1));

	// Layer 2
	this.instance_7 = new lib.water2("synched",0);
	this.instance_7.setTransform(91,115.5,1.148,0.6,0,0,0,-11.6,96);
	this.instance_7.alpha = 0.398;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({scaleX:1.09,scaleY:1.44,x:90.9},5).to({alpha:0},5).to({_off:true},1).wait(2));

	// Layer 3
	this.instance_8 = new lib.water2("synched",0);
	this.instance_8.setTransform(91,115.5,0.6,0.6,0,0,0,-11.6,96);
	this.instance_8.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1.44},3).to({alpha:0},5).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.2,-13.6,147,128.5);


(lib.rod = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hook("synched",0);
	this.instance.setTransform(53.3,98.4);
	this.instance.alpha = 0.43;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 204, 0)];
	this.instance.cache(7,7,26,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgBAAgEAAQgBAAgDAAQgCgCAAgEQAAgBAAgBIgJAAQgBABAAABQABAGAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgGQAAgBgBgCg");
	this.shape.setTransform(108,-99.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1C1C6").s().p("AgKAFQgFgFgBgFIABgDIAIAAIAAADQABADACACQACAAACAAQAEAAACAAQACgCAAgDIAAgDIAIgBIABAEQgBAFgEAEQgFAFgHAAQgFABgFgFg");
	this.shape_1.setTransform(108,-99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#59595B").s().p("AABANQgCgBgDgDQgEgFAAgEQABgFAEgFQADgCABgBQgBAKAAAFQADAHAGAEIgEABIgEgBg");
	this.shape_2.setTransform(-94.3,-94.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B7B7C").s().p("AAAAAQAAgFgEgHQAEACABACQAEAFgBAEQAAAGgEAEIgBACQABgHAAgGg");
	this.shape_3.setTransform(-92.7,-94.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAMAOQgGAFgGgBQgHAAgGgGQgFgGAAgGQABgHAGgGQAGgFAGAAQAHABAGAGQAFAGgBAGQAAAHgGAGg");
	this.shape_4.setTransform(-93.7,-94.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D6D70").s().p("AAAASQgHAAgGgGQgFgGAAgGQABgHAGgGQAGgFAGAAQAHABAGAGQAFAGgBAGQAAAHgGAGQgFAFgHAAIAAgBg");
	this.shape_5.setTransform(-93.7,-94.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A9A9B").s().p("AQzAUIABgBIADAAIAAABgAwxgOIgDgDIgCgCIDKAGg");
	this.shape_6.setTransform(0.1,-102.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBDBDD").s().p("AQ1AfIgBgBIAAgBIADAAIAAACgAw2gXQABgEACgCIACgBIElALg");
	this.shape_7.setTransform(0,-103.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AQ6AjQACgCABgCQAAgDgCgCQgCgCgCAAQgDAAgCABMghVgA8QgBgBgGABQgFAAgGAEQgGADgBALQAAAJAGAFQAFADAFAAQAGABAAAAMAhYAAhQAEAEAEgDg");
	this.shape_8.setTransform(0,-103.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C1C1C6").s().p("AQyAiMghXgAhIgHgBQgFAAgFgDQgGgFAAgJQACgLAFgDQAGgEAFAAIAHAAMAhVAA8QABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQACAAACACQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_9.setTransform(0,-103.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000099").ss(1,1,1).p("AAel2QgsFZgQGU");
	this.shape_10.setTransform(68.1,69.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AvOoaQABAAAMgGQALgFAXgQQAWgQAZgZQAZgaAcgpIAVAKQASAIAoANQAmALAtAFQAsAFA2gHQA0gIAxgbIAOAIQASAIAVAJQAVAIAlAJQAiAHAmACQAlAAArgKQArgLAogZIAUAJQAOAHAnAPQAgALAqAKQAqAKAwABQAuACAvgMQAtgNApgfQAAAAAYAIQAVAHArAKQAoAJAzAEQAzAEA4gHQA3gHA2gYIAQAGQAOAGAfAIQAcAHAkAEQAjADApgGQAmgFArgTQAFAQgJAaQgDALiPGBQhVDigpC0QgxDbgiD8");
	this.shape_11.setTransform(9.7,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B7B7C").s().p("AAAAJIgCgBQAAgIgEgIIAKAHIADABQAAADgBACIgEAEIgCAAIAAAAg");
	this.shape_12.setTransform(-97.7,-85.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#59595B").s().p("AgCADIgCgDIAAgEQACgCACgBQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAABAAIABABQgBAHADAHg");
	this.shape_13.setTransform(-100,-86);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAVAMQgDADgEACQgEABgDgCIgYgOQgDgCgBgCQgBgEACgEQADgEAEgBQADgCAEACIAXAOQAEABABAEQABADgCAFg");
	this.shape_14.setTransform(-98.8,-85.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D6D70").s().p("AAHAQIgYgOQgDgCgBgCQgBgEACgEQADgEAEgBQADgCAEACIAXAOQAEABABAEQABADgCAFQgDADgEACIgDAAIgEgBg");
	this.shape_15.setTransform(-98.8,-85.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#59595B").s().p("AgYAqIAJgPIAPgbIANgbIAIgPIAEACIgYAoQgJAVgOAWIgCgBg");
	this.shape_16.setTransform(-96,-91);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7B7B7C").s().p("AgXAqQAXgqAWgqIACABIgIAPIgPAaIgOAcIgJAPIgBgBg");
	this.shape_17.setTransform(-95.6,-90.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AgRAyIgOgIIAxhbIAOAIg");
	this.shape_18.setTransform(-95.8,-90.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6D6D70").s().p("AgfAqIAxhbIAOAIIgxBbg");
	this.shape_19.setTransform(-95.8,-90.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BBBBBC").s().p("AgEAYQgLgOgBgQQgBgRAJgPQgHAYAMAaQAIAPAMAMQgNgEgIgLg");
	this.shape_20.setTransform(-97.2,-93.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3E3E5").s().p("AAAAAQAAgTgJgSIAIAHQALAQAAARQgBAUgLAPQADgUgBgSg");
	this.shape_21.setTransform(-89.4,-95.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D8D8D8").s().p("AgSA1QgOgFgKgMQgLgMgCgPQgCgMAEgPQAFgOAMgKQAMgLAPgCQANgCAOAEQAOAFALAMQAKAMADAPQACANgFAOQgFAOgMALQgMAKgPADIgJABQgIAAgKgEg");
	this.shape_22.setTransform(-93.7,-94.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D6D6D8").s().p("AAAAXQADgYgGgYQgIgZgSgUQAMACAMAGQAJAGAJALQANAPAEAUQADAQgHATQgGASgPAOQgKAKgOAEQAQgXADgZg");
	this.shape_23.setTransform(-89.5,-94.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B6B6B7").s().p("AAEBDQgNgGgLgNQgOgQgDgTQgDgRAGgTQAGgSAQgOQALgJALgEQAOgFANABIABAAQgXAHgNAPQgKAOgCAUQgDARAKAVQAQAcAaATIgDAEIgEAAQgOAAgOgGg");
	this.shape_24.setTransform(-97.2,-94.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("ABKAZQgHAUgQAOQgRAOgVADQgSAEgTgHQgUgHgOgQQgOgRgEgUQgDgSAHgUQAGgTARgOQARgOAUgEQASgDATAGQAUAHAOARQAOAQAEAUQADATgGATg");
	this.shape_25.setTransform(-93.7,-94.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C1C1C6").s().p("AgZBJQgSgGgPgQQgOgRgEgVQgDgSAHgUQAHgSAQgPQARgOATgDQATgEATAHQAUAGAOARQAOAQADAVQAEASgHATQgGAUgQAOQgSAOgUAEIgNABQgMAAgNgFg");
	this.shape_26.setTransform(-93.7,-94.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgIABQAAABAAACQAAADgCACQgCABgEAAQgBAAgDgBQgCgCAAgDQAAgCAAgBIgJAAQAAACAAABQAAAFAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgFQAAgCgBgCg");
	this.shape_27.setTransform(79.1,-99.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C1C1C6").s().p("AgKAEQgFgEAAgGIAAgCIAIAAIAAACQABAEACACQACABACAAQADgBADAAQACgCAAgEIAAgCIAIAAIABACQgBAGgEAEQgFAFgHABQgFAAgFgGg");
	this.shape_28.setTransform(79.1,-99.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgDACQgBAAgEAAQgBAAgDAAQgCgCAAgEQAAgBAAgBIgJAAQgBACAAAAQABAGAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgGQAAgBgBgCg");
	this.shape_29.setTransform(-73.2,-102.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C1C1C6").s().p("AgKAFQgFgFgBgFIABgDIAIAAIAAADQABADACACQACAAACAAQAEAAACAAQACgCAAgDIgBgDIAJgBIAAAEQAAAFgEAEQgFAFgHAAQgFAAgFgEg");
	this.shape_30.setTransform(-73.2,-102.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgIABQAAABAAABQAAAEgCACQgCAAgEAAQgBAAgDAAQgCgCAAgEQAAgBAAgBIgJAAQAAACAAAAQAAAGAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgGQAAgBgBgCg");
	this.shape_31.setTransform(-37.2,-101);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C1C1C6").s().p("AgKAFQgFgFAAgGIAAgCIAJAAIAAACQgBAEADACQADAAABAAQADAAACAAQADgCAAgEIAAgCIAIgBIABADQAAAGgFAEQgFAFgHAAQgFAAgFgEg");
	this.shape_32.setTransform(-37.2,-101);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgIABQAAABAAABQAAAEgCACQgDABgDAAQgBAAgDgBQgCgCAAgEQAAgBAAgBIgJAAQAAACAAAAQAAAGAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgGQAAgBgBgCg");
	this.shape_33.setTransform(-2.6,-100.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C1C1C6").s().p("AgKAFQgFgFgBgFIABgDIAIAAIAAADQABADACACQACAAACAAQAEAAACAAQACgCAAgDIgBgDIAJgBIAAAEQAAAFgEAEQgFAFgHAAQgFAAgFgEg");
	this.shape_34.setTransform(-2.6,-100.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AAQgJIgJABQABABAAABQAAAEgCACQgDAAgDAAQgBAAgDAAQgCgCAAgEQAAgBAAgBIgJAAQgBACAAAAQABAGAFAFQAFAFAFAAQAHgBAFgFQAFgEAAgGQAAgBgBgCg");
	this.shape_35.setTransform(39.5,-100);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C1C1C6").s().p("AgKAFQgFgFgBgGIABgCIAJAAIAAACQAAAEACACQACAAACAAQADAAADAAQACgCAAgEIAAgCIAIAAIABACQgBAGgEAEQgFAFgHAAQgFAAgFgEg");
	this.shape_36.setTransform(39.5,-100);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109.5,-107.9,220.2,237.4);


(lib.bucket = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAEgNIgEAAAAEAOIgEgOQgCgEgBgG");
	this.shape.setTransform(0.7,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AI7lXIADgXAIvkQIAJg3IADgQAIgl6QAaAAAEAMQAEAIgHAPQgEAHgGAIIhEB+IgBADIgCADQghAtg9gGIpuAAAjihyIJ2gBQA8AHAYgnIBHh9AHnCZIAHgQQATghAAACQAAADAGgRQAHgSADghIAek5AHnCZIArlHQgSgvgWBxIgpFWIgJARQgZA6g3AAIkVgLIglgCIkQgEAAuFnIFrAUQA3gGAAgxIAXirAHBDqIgKBQQgPAegygDIkXgPAG7hKIgdFBAoqjEQgTASABAKQAAAAAAABIAAAAQADAKAaAAIE8AAAothxIgBAAIAAAAIATB9IAAABIAQBuIgRCIQgCAiAgAKIEbAOAo8inIAPA2AjjhyIlKABAjjEkIi8gIQhRAJgOhXIgdjCAjjFgIk0gRQgkgJgEgtIAkkMABTEqIglgBAjiFgIEQAGIAxABABfFEIlBgH");
	this.shape_1.setTransform(57.6,37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900CC").s().p("ABFEIIAAgBIkQgGIAAgjIFBAHIAAACIEXAPQAyADAPgeIAKhQIAplWQAWhxASAvIgrFHIgXCrQgBAxg2AGgAB2EIIgxgBgAoADwQgkgJgEgtIAkkKIAQBsIgRCIQgCAiAgAKIEbAOIAAAjg");
	this.shape_2.setTransform(55.3,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336699").s().p("ABTEYIglgCIAlACIglgBIAAgBIkQgFIAAmVIJ2gBQA7AHAZgnIBHh9IgeE5QgDAhgHASQgGARAAgDQAAgDgTAiIgHAQIArlHQgSgvgWBxIgpFWIgJARQgaA5g2ABgAGeDlIAdlBgAmfEKQhRAJgOhXIgdjAIgTh/IABAAIFKgBIAAGVg");
	this.shape_3.setTransform(57.6,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996699").s().p("Ao5A1QACAKAaAAIE9AAIAAArIlLABgAjgA/IJuAAQA9AGAhgtIACgDIABgDIBFh8IAGABIgJA3IhGB7QgZAng8gHIp2ABg");
	this.shape_4.setTransform(57.4,15.7);

	// Layer 2
	this.fish_catched_layer = new lib.fish_catched_layer();
	this.fish_catched_layer.setTransform(57.3,54.3,1,1,0,0,0,57.3,34.3);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AocBuIC4iiQAVgTAigDINXgFAk4BuIgPiYAIhhtItUAAQg1AAgpAnIiYCN");
	this.shape_5.setTransform(57.3,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#000000","#6FC47E"],[0,0.82],-7.6,59.7,0,-7.6,59.7,131.9).s().p("AGLBtIrEAAIgPiYIAPCYIjkAAIC4iiQAVgTAigDINXgEItXAEQgiADgVATIi4CiIgDAAQgaAAgCgKIgBgBQgBgKAUgSICYiMQApgnA1AAINUAAQAZAAAFAMIgEAWIgJAQIhGB+IgCADQgdAogyAAIgPgBg");
	this.shape_6.setTransform(57.4,11.1);

	this.addChild(this.shape_6,this.shape_5,this.fish_catched_layer,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,117.2,77.9);


(lib.ripple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.circle("synched",0);
	this.instance.setTransform(0,0,0.64,0.64);
	this.instance.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0},4).to({_off:true},1).wait(6));

	// Layer 8
	this.instance_1 = new lib.circle("synched",0);
	this.instance_1.setTransform(0,0,1.4,1.4);
	this.instance_1.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:2,scaleY:2,alpha:0},4).to({_off:true},1).wait(6));

	// Layer 5
	this.instance_2 = new lib.circle("synched",0);
	this.instance_2.setTransform(0,0,0.4,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({scaleX:0.54,scaleY:0.54,alpha:0.328},3).to({scaleX:0.64,scaleY:0.64,alpha:0.262},2).wait(1));

	// Layer 6
	this.instance_3 = new lib.circle("synched",0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({scaleX:1.24,scaleY:1.24,alpha:0.328},3).to({scaleX:1.4,scaleY:1.4,alpha:0.262},2).wait(1));

	// Layer 2
	this.instance_4 = new lib.circle("synched",0);
	this.instance_4.setTransform(0,0,0.4,0.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.7,scaleY:0.7,alpha:0.211},5).to({scaleX:1,scaleY:1,alpha:0},5).wait(1));

	// Layer 1
	this.instance_5 = new lib.circle("synched",0);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.5,scaleY:1.5,alpha:0.211},5).to({scaleX:2,scaleY:2,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-44.3,88.6,88.6);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-538.4},641).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.5,-88.6,1046.5,177.4);


(lib.background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00AAED").ss(1,1,1).p("EAtEgOBQhAAohVApQhVAqhsAiQhsAiiGARQiFASikgKQikgJjEgtQjEgujohaQiSg5iMgZQiNgZiIAAQiIAAiGASQiGATiEAfQiDAfiEAkQiFAkiGAjQi2Avi2AIQi2AIi1gWQi1gWizgqQi0gqixg1Qiyg2ivg3Qh9gmiFgKQiFgLiGASQiFARh+AuIAAftMBdnAAAIAA/hQgvAchBAog");
	this.shape.setTransform(-237.6,94.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#29B2EF","#CFEEFF"],[0,1],0.1,-69.6,0.1,167.3).s().p("EguzAQcIAA/tQB+guCFgRQCHgSCEALQCFAKB9AmQCvA3CyA2QCxA1C0AqQCzAqC2AWQC1AWC1gIQC3gIC1gvIELhHQCEgkCDgfQCEgfCGgTQCGgSCIAAQCJAACMAZQCNAZCSA5QDnBaDEAuQDEAtCkAJQCkAKCFgSQCGgRBsgiQBsgiBVgqQBUgpBBgoIBwhEIAAfhg");
	this.shape_1.setTransform(-237.6,94.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009CEA").s().p("Egu6ARAMAAAgh/MBd1AAAMAAAAh/g");
	this.shape_2.setTransform(-237.1,90.8,1,1,0,0,0,-0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5FCFF").s().p("EguxARIMAAAgiPMBdjAAAMAAAAiPg");
	this.shape_3.setTransform(-237.9,89.8);

	this.instance = new lib.clouds();
	this.instance.setTransform(-254.5,-100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDA921").s().p("Aj2JDQhqgQhgg4QBHAVBJACQBJACBIgSQBLgTBFgnQBDgnA8g5QA8g5AvhHQAxhKAahPQAbhOAEhOQAEhPgThNQgbhphFhZQhFhYhng+IgOgIQBHAYBCAnQBnA+BFBYQBFBYAbBqQATBNgEBPQgEBOgbBOQgaBPgxBKQgvBHg8A5Qg8A4hFAoQhFAnhJATQhBARhCAAQgoAAgngHg");
	this.shape_4.setTransform(-183.9,-47.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoCEQghgLgYgaQgZgagKgmQgJgjAJgjQAJgjAYgZQAYgZAjgJQAjgJAjAKQAlAJAcAZQAdAZAKAmQAJAjgNAkQgNAkgcAbQgcAagjAJQgQAEgNAAQgTAAgSgGg");
	this.shape_5.setTransform(-224.9,-68.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE473").s().p("AhGGFQhIgNg/goQg+gpgug+Qgtg+gUhQQgUhQAKhLQAKhMAkhBQAkhBA5guQA5guBLgUQA8gPA9AFQA/AEA8AWQA9AVA0AmQAzAlAmAzQAlA0AQBAQAUBQgRBMQgRBPgtBEQgtBEhAAwQhAAwhLAUQgsAKgoAAQgfAAgegFg");
	this.shape_6.setTransform(-214,-59);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,1,1).p("AJSiiQAYBkgMBgQgNBjgrBbQgrBahCBMQhCBMhTA1QhTA1hdAYQhcAXhZgJQhbgIhTgmQhUglhFg9QhGg+gzhSQgyhSgahjQgYhjAFheQAFhhAghXQAhhXA3hIQA4hJBMgzQBLgzBdgYQBdgXBgAHQBiAGBeAiQBeAiBQA6QBRA6A5BQQA6BPAaBjg");
	this.shape_7.setTransform(-199.1,-49.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC952").s().p("AhBJiQhbgIhTgmQhUglhFg9QhGg+gzhSQgyhSgahjQgYhjAFheQAFhhAghXQAhhXA3hIQA4hJBMgzQBLgzBdgYQBdgXBgAHQBiAGBeAiQBeAiBQA6QBRA6A5BQQA6BPAaBjQAYBkgMBgQgNBjgrBbQgrBahCBMQhCBMhTA1QhTA1hdAYQhCARhAAAQgaAAgZgDg");
	this.shape_8.setTransform(-199.1,-49.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B6ECFF").s().p("Egu4AG9IASpqQAAABA1AQQA0AQBfAVQBeAVCAAQQB/AQCWACQCWACCjgWQCHgUBxgnQBwgnBigvQBigwBdgwQBdgwBhgnQBggmBtgUQBugUCCAHQBwAIBVAdQBUAdBCAsQBCArA2AzQA2AzAzAyQAzAzA3AsQA2ArBEAdQBEAcBZAHQBnAIBSgWQBSgTBHgnQBGgnBEguQBFguBLgpQBLgqBbgbQBbgbB1gBQBlABBgAaQBhAZBdAqQBdAqBaAxICzBiQBYAuBWAnQBWAnBWAUQBWAUBVgGQCUgNBdgUQBdgUAygUQAygVASgNIASgPIAAD/QAAABgaAOQgbAPg1AUQg2AUhSAQQhSAQhvADQhvADiNgTQh1gShbgjQhcgjhNgtQhNgthJgvQhJguhOgoQhOglhfgYQhfgYh5gBQhoABhbAdQhaAchUAxQhTAwhSA5QhSA5hXA4QhXA4hiAtQhiAsh0AXQhzAXiJgJQiLgKhhgiQhhgihDgxQhDgxgvg4Qgvg4glg3Qglg2gngtQgngsgygbQgygbhJAAQhBABhhAfQhhAfh5AxQh5AziJA9QiKA9iSA9QiTA+iUAyQiTAziOAfQiNAeh/AAQiAAAhpgpgEAu5AACIAAAAg");
	this.shape_9.setTransform(-237.2,-125.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#29B2EF","#CFEEFF"],[0,1],0,-105.1,0,80.7).s().p("EguyAR2MAAAgjrMBdlAAAMAAAAjrg");
	this.shape_10.setTransform(-237.8,-88.7);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-538.3,-203,1075.8,403.5);


(lib.audiospeaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,playing:6});

	// timeline functions:
	this.frame_44 = function() {
		/* gotoAndPlay("playing");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Wave-3
	this.instance = new lib.audiospeakersoundwaves();
	this.instance.setTransform(25.3,14.7,0.479,0.479,0,0,0,1.5,10.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:30.9,y:14.8},6).to({scaleX:1.06,scaleY:1.06,x:32.8,alpha:0.199},2).to({_off:true},1).wait(17));

	// Wave-2
	this.instance_1 = new lib.audiospeakersoundwaves();
	this.instance_1.setTransform(25.3,14.7,0.479,0.479,0,0,0,1.5,10.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:30.9,y:14.8},6).to({scaleX:1.06,scaleY:1.06,x:32.8,alpha:0.199},2).to({_off:true},1).wait(23));

	// Wave-1
	this.instance_2 = new lib.audiospeakersoundwaves();
	this.instance_2.setTransform(25.3,14.7,0.479,0.479,0,0,0,1.5,10.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:30.9,y:14.8},6).to({scaleX:1.06,scaleY:1.06,x:32.8,alpha:0.199},2).to({_off:true},1).wait(30));

	// Speaker
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(4.3,1,1).p("AgjgkIAXgNIAwgbIAACZAAcBNIgeggIgcgc");
	this.shape.setTransform(15.9,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAxAvIgbgbIAbAbIhmAAQgVAAAAgUIAAg1QAAgUAVAAIBdAAIAPAAQATAAABAUIAAA1QgBAUgTAAgAARghIAXgNg");
	this.shape_1.setTransform(10.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(45));

	// Text
	this.text = new cjs.Text("Click\nto play", "10px 'Arial'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.lineWidth = 40;
	this.text.setTransform(-20.9,0.8);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},6).wait(39));

	// Text hit area
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().p("AESBwIojAAQgeAAAAgTIAAi5QAAgTAeAAIIjAAQAfAAgBATIAAC5QABATgfAAIAAAAg");
	this.shape_2.setTransform(-8.3,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},6).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,0.8,63,24.5);


(lib.bubblewater_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubble_of_water("synched",0);
	this.instance.setTransform(0.2,0.2,0.808,0.808);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(5));

	// bubble_water
	this.instance_1 = new lib.bubble_of_water("synched",0);
	this.instance_1.setTransform(-16.3,-12.4,0.378,0.378);
	this.instance_1.alpha = 0.488;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},2).wait(3));

	// bubble_water
	this.instance_2 = new lib.bubble_of_water("synched",0);
	this.instance_2.setTransform(17.1,-20.1,0.378,0.378);
	this.instance_2.alpha = 0.488;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(2).to({scaleX:0.29,scaleY:0.29,x:0.6,y:-23.5},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-11.3,22,22);


(lib.penguin_crying_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"done":59});

	// timeline functions:
	this.frame_59 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(-181.7,-76.5,1,1,0,0,0,-3.5,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-11.2,scaleX:1,scaleY:1,rotation:-47.3,x:-191.2,y:-78.7},6).to({startPosition:0},14).to({regY:-11.3,scaleX:1,scaleY:1,rotation:0,x:-185.4,y:-77.5},12).to({_off:true},1).wait(27));

	// pancingan
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(-166.5,-58.7,1,1,0,0,0,-100,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-37.4,x:-173.5,y:-72.7},6).to({startPosition:0},14).to({scaleX:1,scaleY:1,rotation:0,x:-166.5,y:-58.7},12).to({_off:true},1).wait(27));

	// Layer 3
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(39.5,-54.9,1,1,0,0,0,20,-100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:-8.5,x:20.7,y:-144},3).to({rotation:-14.3,x:-9.2,y:-197.6},3).to({regX:19.9,scaleX:1,scaleY:1,rotation:-8.3,x:-9.3,y:-197.5},7).to({regY:-100.8,rotation:-9.3,y:-197.4},7).to({regX:20,regY:-100.9,scaleX:1,scaleY:1,rotation:0,x:39.5,y:-54.9},12).wait(28));

	// Layer 4
	this.instance_3 = new lib.blinking();
	this.instance_3.setTransform(-154.8,-92.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE4B3").s().p("AAkAnQgIgEgMgLQgNgLgPgVIgDgFIgGgJQgDgFgDgBQgDAAgFACQgGADgIgDIAFgFIAMgIQAGgEADACIAEADQADACgBAGIAHAMQAHAMANAQQAPARAZAPIgDABQgEAAgHgEg");
	this.shape.setTransform(-151.2,-81.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8A235").s().p("AAsAvQgKgFgKgIQgKgIgLgHQgOgIgRgFIgbgIIgZgKQgQgGgMgHQgMgIgBgHIgBgGIAAgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAEAIAHAFQAHAFAGADIAIADQASAJAYAIQAXAIAZADIAMACQAHAAAGADQAHAEAEAGIAKAMQAGAEAIABQAIAAAIgCIAHgDQAEgDAEAAQAFABAFADQAEAEAFAAQAFgBACgDQACgCAEAAIgBAIQgBAFgEACQgDACgGgBQgGgBgFgDIgIgEIgCgCIgBAGQgMAMgLABIgDAAQgIAAgIgFg");
	this.shape_1.setTransform(-158.2,-78.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8A235").s().p("AgEAEIAAgJIAEADIAFAFQACADgFAAIgCAAQgEAAAAgCg");
	this.shape_2.setTransform(-155.9,-80.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AA3g2QACAMALAOQALAOANAMQANALAKAIQAJAIABAAQAAAAABAGQABAGgBAHQgBAHgGAEQgGADgGgCQgHgBgEgDQgFgCAAgBQgOANgKACQgLACgKgEQgKgFgKgIQgLgJgMgGQgKgHgMgEQgNgFgNgEQgGgDgMgEQgNgEgNgEQgOgGgKgHQgKgIgBgIQgCgKABgCQAAgDAHACQAHACASADQAQAEARACQARABARgBQALgBAMgDQAJgDAKgHQACgDAGgEQAGgEAGgEQAHgDAFABQAFAAACAJg");
	this.shape_3.setTransform(-158.2,-79.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9C248").s().p("AAuA+QgKgFgKgIQgLgJgMgGQgKgHgMgEIgagJIgSgHQgNgEgNgEQgOgGgKgHQgKgIgBgIIgBgMQAAgDAHACIAZAFQAQAEARACQARABARgBQALgBAMgDQAJgDAKgHIAIgHIAMgIQAHgDAFABQAFAAACAJQACAMALAOQALAOANAMQANALAKAIIAKAIIABAGQABAGgBAHQgBAHgGAEQgGADgGgCQgHgBgEgDIgFgDQgOANgKACIgHABQgIAAgGgDg");
	this.shape_4.setTransform(-158.2,-79.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B0D0D").s().p("AANAcQgNgEgHgLQgLgMgIgKIgLgVIAMAEIATAHQACASALALQANAMASAFQgFACgGABIgDABQgFAAgGgDg");
	this.shape_5.setTransform(-161.9,-76.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AA3ACIhtgkQAAAAAEAJQAEAJAIAMQAIALAKALQAKALALAEQANAEAKgEQAKgEAHgHQAHgHAEgGQADgGAAgBg");
	this.shape_6.setTransform(-160.8,-76.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C12D05").s().p("AABAhQgLgEgKgLQgKgLgIgLIgMgVIgEgJIBtAkIgDAHIgLANQgHAHgKAEQgFACgGAAQgGAAgGgCg");
	this.shape_7.setTransform(-160.8,-76.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ABSAOQAHgJAAgBIixg8QAAABAFAJQAFAKAJAQQAJAPALAOQAMAPANANQAOANAMAEQASAFAQgHQAPgGANgLQALgMAHgJg");
	this.shape_8.setTransform(-161.4,-76.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8A235").s().p("AACA2QgMgEgOgNQgNgNgMgPQgLgOgJgPIgOgaIgFgKICxA8IgHAKQgHAJgLAMQgNALgPAGQgKAFgKAAQgHAAgHgDg");
	this.shape_9.setTransform(-161.4,-76.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AAkhBQAAAAAFAMQAEAMAEAUQAEATABAVQAAAWgIAWQAAAAgDACQgDABgFAAQgFAAgEgEQgCgEgJgKQgKgKgKgMQgNgMgMgJQgNgGgKAB");
	this.shape_10.setTransform(-160.2,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAaA+IgMgOIgTgWQgNgMgMgIQgNgHgKABIBahBIAEANIAIAfQAEATAAAVQAAAWgGAWIgEABIgIACQgFAAgEgEg");
	this.shape_11.setTransform(-160.2,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AAzhGQAAABADANQAEANACAVQACAVgDAXQgDAYgMAXQAAABgEAAQgEABgGgBQgFgBgDgGQgDgEgJgPQgJgPgLgRQgMgPgNgNQgOgNgLgB");
	this.shape_12.setTransform(-184.8,-5.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAeBGQgFgBgDgGIgMgTQgJgPgLgRQgMgPgNgNQgOgNgLgBIBvgoIADAOQAEANACAVQACAVgDAXQgDAYgMAXIgEABIgEABIgGgBg");
	this.shape_13.setTransform(-184.8,-5.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B4B4B4").s().p("AgNBHQgPgEgMgPQgMgQgJgUQgKgTgGgUQgHgUgDgOIgDgOIC1A3IgGAKIgRAWQgLAPgOANQgNAOgPAIQgMAGgJAAIgHgBg");
	this.shape_14.setTransform(-161.2,-73.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B4B4B4").s().p("AgCHYQgzgRgngjQgogigZgyQgVgogIgtQgJgtADgvQADguAPguIAEgMQAVg5AngxQAOgSARgcIAjg+QASgiARgjIAchEIAXg5IAFgPIACgHQAJgZAOgWQANgXATgQQATgQAZgGQgYAQgRAZQgRAZgJAdIgDAHIgFAPQgJAZgOAgIgeBEIghBFQgSAigRAcQgQAcgPASQgnAxgVA5IgEAMQgPAugDAuQgDAvAJAtQAJAtAUAoQAZAyAoAjQAnAiAxARQApANArgBQAqgBApgOQgwAXgyAEIgVABQgoAAglgMg");
	this.shape_15.setTransform(-178.6,-62.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E5E5E5").s().p("AgvGoQAzgfAqg1QANgXAKgYIAMghQASg+gDhBIgBgLIgDhKIgDhTIgBhXQABgqADgkQADgjAHgWQAAgqAGgVQAMgvgGguIgGgWIgJgZQAOABAMAJQAKAIAHAPQAHANAEAQIAHAbQADAtgOAtQgGATgCApQgIAWgEAiQgFAigCApQgDApAAArIgBBRIAABIIAAALQABA/gVA7IgNAgQgLAXgOAUQguA0g4AbQg5Aag8ABQA6gGA2gfg");
	this.shape_16.setTransform(-155,-60.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AhnHZQgzgRgngjQgogigZgyQgVgogIgtQgJgtADgvQADgvAPgtIAEgMQAVg6AngwQAOgSARgcIAjg+QASgiARgjIAehEIAXg6IAFgOIACgHQAKgcAQgZQARgZAVgQQAYgQAfAAIAWABQALABANADQAQAEARAJQAQAJAMANQALAOADAQQAAgIALgHQALgHAQAAQARAAAPAKQAJAJAHAOQAHAOAFAPIAHAbQADAtgOAtQgHATgCApQgHAWgFAiQgFAigCApQgCApgBApIAABTIAABIIAAALQAAA/gVA8IgNAfQgLAWgNAVQgqAugxAbQgyAag2AGIgZABQgnAAgngMg");
	this.shape_17.setTransform(-168.5,-62.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("ABIIhIgngGQgUgDgQAAIgDgKIgBgEIgEgBQgngJgjgQQg2gagqgnQgpgogbgxQgagygLg2QgLg3AGg5QAHg5AZg2QAhhDA5gyQAUgSAZgeQAageAbglQAaglAZgnQAXgmAUgiQAUgiALgYQASgnAegbQAdgcAmgPQAlgQAqgCQgnAQgeAeQgeAdgSAmIgMAaIgdA+QgPAfgPAZIgTAcQgOAUgLATQgMATgFAUQgDAIgCAIQgKgMgMABQgJAAgHAGQgIAGgGAJIgNARIgGAJQgQAWgRAUIgfAoQgPAVgMAZQgfBBgDBGQgEBHAXBBQAWBAAsA0QAtA0BBAfQAuAYA1AMQA2ANA0gEQA0gEAsgaQggAYgiAOQgkANgeAIIgxAOQgVgCgUgEg");
	this.shape_18.setTransform(-185.8,-60.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("ACtorQgtgCgpAPQgqAPgiAeQgfAegVArQgLAXgUAiQgTAhgZAnQgZAmgaAkQgbAlgZAfQgZAegVASQgcAYgXAfQgXAegRAiQgaA4gHA7QgHA6ALA5QAKA6AbAyQAbAzArAnQAqAnA5AXQANAFAXAKQAXAKAeAKQAeAKAhAFQAfAFAggFQAcgEAcgGQAbgFAcgPQAbgOAegeQAXgSATgYQATgZAQgdQAPgcAOgdQASgnAIgnQAJgpAAgoQgBggAAgrQAAgsABgwQABguADguQACguAGgkQAFgkAJgUQAUgsACgsQABgugPgpQgPgqgdgiQgfghgrgVQgrgUgtgBg");
	this.shape_19.setTransform(-176.7,-60.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgbIqQghgFgegKQgegKgXgKIgkgPQg5gXgqgnQgrgngbgzQgbgygKg6QgLg5AHg6QAHg7Aag4QARgiAXgeQAXgfAcgYQAVgSAZgeQAZgfAbglQAagkAZgmIAshIQAUgiALgXQAVgrAfgeQAigeAqgPQApgPAtACQAtABArAUQArAVAfAhQAdAiAPAqQAPApgBAuQgCAsgUAsQgJAUgFAkQgGAkgCAuQgDAugBAuQgBAwAAAsIABBLQAAAogJApQgIAngSAnQgOAdgPAcQgQAdgTAZQgTAYgXASQgeAegbAOQgcAPgbAFQgcAGgcAEQgQACgQAAQgPAAgQgCg");
	this.shape_20.setTransform(-176.7,-60.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("AAUgcQgBAAgNAFQgLAFgTADQgTACgSgIQgBAAgDAEQgDADABAGQABAGANAGQAAAAAOAGQANAFAUAGQASAGAVACQAUABAPgI");
	this.shape_21.setTransform(-213,-26.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAhAdQgVgCgSgGQgUgGgNgFIgOgGQgNgGgBgGQgBgGADgDIAEgEQASAIATgCQATgDALgFIAOgFIAwAyQgMAHgRAAIgGAAg");
	this.shape_22.setTransform(-213,-26.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhXBLIgBAAQgIgCgDgEQgHgKADgZQADgUAIgbQAHgZAJgLQAJgLAHgDQAHgDACABQAWAOAVACQATACAUgHQAUgGASgJIAHgDQAIgCAIAAQAHABAFAEQgMARgQAHQgQAIgRABQgSABgSgBQgTgCgUACQgUACgRALQgKAHgHAPQgIANgCASIgBALQABAUAMAOIgDAAg");
	this.shape_23.setTransform(-140.4,-53.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("Ag1hIQgBAAgEAAQgGAAgIAFQgIAFgIAMQgJAMgGAXQgOAtACAZQACAYATADQAKABAXgCQAXgDAegKQAcgLAfgXQAegYAagnQALgTgDgMQgEgNgNgFQgMgFgQAFQgFABgEACQgTAKgTAFQgUAGgRgCQgUgDgTgNg");
	this.shape_24.setTransform(-139.9,-53.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AheBSQgTgDgCgYQgCgZAOgtQAGgXAJgMQAIgMAIgFQAIgFAGAAIAFAAQATANAUADQARACAUgGQATgFATgKQAEgCAFgBQAQgFAMAFQANAFAEANQADAMgLATQgaAngeAYQgfAXgcALQgeAKgXADIgYABIgJAAg");
	this.shape_25.setTransform(-139.9,-53.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3}]}).to({state:[]},33).wait(27));

	// Layer 5
	this.instance_4 = new lib.ripple();
	this.instance_4.setTransform(0.6,75,0.668,0.227);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},7).wait(26).to({_off:false},0).wait(27));

	// senang
	this.instance_5 = new lib.penguin_crying("single",0);
	this.instance_5.setTransform(-169.6,-54.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.8,-117.2,264.4,284.9);


(lib.penguin_catch_fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"done":15});

	// timeline functions:
	this.frame_15 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 13
	this.instance = new lib.water();
	this.instance.setTransform(-2.3,-44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// dapet
	this.instance_1 = new lib.penguing();
	this.instance_1.setTransform(-123.7,-49.4,0.998,0.998,42.6,0,0,-14.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:5.5,x:-115.7,y:-35.4},2).to({_off:true},1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:42.6,x:-123.7,y:-49.4},2).wait(1));

	// Layer 6
	this.instance_2 = new lib.hook("synched",0);
	this.instance_2.setTransform(73.9,122.7);
	this.instance_2.alpha = 0.43;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 204, 0)];
	this.instance_2.cache(7,7,26,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(1,1,1).p("AASl+Qg9HHArE2");
	this.shape.setTransform(86.7,95.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADHs1QiGGth2HhQhkGUgtFJ");
	this.shape_1.setTransform(108.5,-25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000099").ss(1,1,1).p("Ah8jwQAqErDPC2");
	this.shape_2.setTransform(120.9,78.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhaxyQEgPjiqLNQhJFBAhD0");
	this.shape_3.setTransform(109.7,-59.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Aly2VQL8Joi/PUQjAPXFnEY");
	this.shape_4.setTransform(45.9,-224.4,0.999,0.999,-71.7,0,0,-40.6,-144.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("A2/AAQM4oVNlHqQNoHoF6j9");
	this.shape_5.setTransform(195.5,-227.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:73.9,y:122.7}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-29.3,x:119.8,y:100.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-29.3,x:119.8,y:100.9}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:73.9,y:122.7}}]},1).wait(1));

	// dapet
	this.instance_3 = new lib.rolling_the_string_rod();
	this.instance_3.setTransform(-118.4,-69.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A9A9B").s().p("AsFLpIgCAAICUiKIiOCKIgCAAIgCAAgAMGrlIACgDIAAABIgCACg");
	this.shape_6.setTransform(-40.2,-147.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBDBDD").s().p("AsOLeIABgDIDXjGIjXDOIgBgFgAMOriIAAAAIgCACIgBAAg");
	this.shape_7.setTransform(-40.6,-147.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AMSrmQAAgFgFgBQgGAAgBAFI4OWwQAAAAgEAEQgEAFgBAGQgBAHAGAIQAHAHAGgBQAHAAAEgEQAFgDAAAAIX83HQAFAAAAgFg");
	this.shape_8.setTransform(-40.6,-147);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C1C1C6").s().p("AsMLnQgGgIABgHQABgGAEgFIAEgEIYO2wQABgFAGAAQAFABAAAFQAAAFgFAAI38XHIgFADQgEAEgHAAIgBAAQgGAAgGgGg");
	this.shape_9.setTransform(-40.6,-147);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AqKLQQAAAAAFgNQAFgNAEgaQAEgZAAglQAAglgJgvIAPgGQAQgFAZgNQAZgMAegTQAegUAegbQAdgcAYgkQAYgkAOgtQAAAAAPgFQAPgEAZgLQAYgLAcgSQAdgRAcgbQAcgbAWgkQAWglALgvQABAAAUgIQAUgHAhgPQAggNAjgXQAlgYAigfQAiggAYgqQAYgoAGgzQAAAAAQgIQAQgIAagPQAagPAggXQAfgXAggeQAggfAbgmQAagmARguQABAAAQgHQAQgHAYgOQAZgPAcgXQAcgXAZggQAYgfAPgp");
	this.shape_10.setTransform(-28.1,-148.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AAKgMQgBgBgBgBIgGAHQABAAABABQACADABADQgBABgCADQgDACgBAAQgDABgDgDQgBgBgBgBIgGAGQABABABABQAFAFAHAAQAFAAAFgFQAFgFAAgFQAAgHgFgFg");
	this.shape_11.setTransform(36.7,-220.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C1C1C6").s().p("AgMAKIgCgCIAGgGIACACQADADADgBQABAAADgCQACgDABgCQgBgCgCgDIgCgCIAGgGIACACQAFAEAAAIQAAAEgFAGQgFAFgFAAQgHAAgFgFg");
	this.shape_12.setTransform(36.7,-220.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AAKgNQgBgBgBAAIgGAGQABABABAAQACADABADQgBACgCADQgDACgBAAQgDAAgDgDQgBgBgBgBIgGAHQABABABABQAFAEAHABQAFgBAFgFQAFgFAAgFQAAgHgFgFg");
	this.shape_13.setTransform(17.2,-201.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C1C1C6").s().p("AgMAKIgCgCIAGgHIACACQADAEADgBQABAAADgCQACgDABgBQgBgDgCgEIgCgBIAGgGIACABQAFAFAAAIQAAAEgFAFQgFAFgFABQgHgBgFgEg");
	this.shape_14.setTransform(17.2,-201.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAKgNQgBgBgBAAIgGAGQABABABABQACACABADQgBACgCACQgDADgBAAQgDABgDgEQgBgBgBAAIgGAGQABABABABQAFAFAHAAQAFAAAFgFQAFgFAAgGQAAgHgFgFg");
	this.shape_15.setTransform(-92.3,-95.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C1C1C6").s().p("AgMAKIgCgCIAGgGIACABQADADADAAQABAAADgDQACgCABgCQgBgDgCgCIgCgBIAGgHIACABQAFAFAAAHQAAAFgFAGQgFAFgFAAQgHAAgFgFg");
	this.shape_16.setTransform(-92.3,-95.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AAKgNQgBgBgBAAIgGAGQABABABABQACACABADQgBACgCADQgDACgBAAQgDABgDgEQgBgBgBAAIgGAGQABABABABQAFAFAHAAQAFAAAFgFQAFgFAAgGQAAgHgFgFg");
	this.shape_17.setTransform(-65.9,-120.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C1C1C6").s().p("AgMAKIgCgCIAGgGIACACQADADADgBQABAAADgCQACgDABgCQgBgCgCgEIgCgBIAGgGIACACQAFAFAAAGQAAAGgFAEQgFAGgFAAQgHgBgFgEg");
	this.shape_18.setTransform(-65.9,-120.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AAKgMQgBgCgBAAIgGAHQABAAABABQACACABAEQgBABgCADQgDACgBAAQgDABgDgDQgBgBgBgBIgGAGQABABABABQAFAFAHAAQAFAAAFgFQAFgFAAgFQAAgHgFgFg");
	this.shape_19.setTransform(-41.5,-144.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C1C1C6").s().p("AgMAKIgCgCIAGgHIACACQADAEADgBQABAAADgDQACgCABgBQgBgEgCgDIgCAAIAGgHIACABQAFAGAAAHQAAAFgFAEQgFAFgFABQgHgBgFgEg");
	this.shape_20.setTransform(-41.5,-144.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAKgNQgBgBgBAAIgGAGQABABABAAQACADABAEQgBABgCADQgDACgBAAQgDAAgDgCQgBgBgBgCIgGAHQABABABABQAFAFAHAAQAFAAAFgFQAFgFAAgFQAAgIgFgFg");
	this.shape_21.setTransform(-11,-173.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C1C1C6").s().p("AgMAKIgCgCIAGgHIACADQADACADAAQABAAADgCQACgDABgCQgBgCgCgEIgCgBIAGgGIACACQAFAEAAAIQAAAEgFAFQgFAGgFAAQgHAAgFgFg");
	this.shape_22.setTransform(-11,-173.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE4B3").s().p("Ag7AHQAAgHACgEQACgIADgBIAFAAQAEgBAEAEIANAFQAOAEAUABQAXAAAdgFQABAAgGAEQgFADgSACQgRACgjgEIgGgCQgFAAgGgBQgFgBgDABQgCABgCAFQgCAFgIAEIAAgHg");
	this.shape_23.setTransform(-102.3,-111.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D8A235").s().p("AAAAEQgCgBgEgFIAFgBQADgBAEABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQgFAEgBAAIAAAAg");
	this.shape_24.setTransform(-105.7,-108);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D8A235").s().p("AhtA9IgEgEIgDgDQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAJADAIgCIAOgDIAIgDQAUgHAWgKQAWgLAUgQIAKgFQAFgEAHgDQAHgCAIACQAHABAIAAQAHgBAGgGQAGgFAEgHIADgIQACgEACgDQAEgDAGAAQAGgBADgEQACgDAAgEQAAgEADgCIAFAHQACAEgBADQgBAFgFADIgKAFIgIACIgDABIADAEQAAARgHAIQgHAGgKADQgLADgMABQgNACgMADQgRAGgOAIIgbAMIgYALQgPAGgOADIgLACQgFAAgEgCg");
	this.shape_25.setTransform(-106.4,-105.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("ABug8QAEADAEAGQAEAGgBAHQgBAGgGADQgGAEgFACQgFABgBAAQAAATgGAHQgHAJgKADQgKAEgNACQgNABgOADQgMAEgMAGQgKAGgNAGQgGACgMAGQgMAFgNAGQgOAFgMACQgMADgHgGQgIgFgBgDQgCgCAHgDQAFgEAPgKQAOgJANgLQAOgLAKgMQAIgHAGgKQAFgKACgMQABgEABgHQABgHACgGQACgIAEgCQAFgEAHAFQAIAHASACQARACASAAQASgBANgBQAMgBAAAAQABAAAFADg");
	this.shape_26.setTransform(-106.4,-106);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9C248").s().p("AhvBHQgIgFgBgDQgCgCAHgDIAUgOQAOgJANgLQAOgLAKgMQAIgHAGgKQAFgKACgMIACgLIADgNQACgIAEgCQAFgEAHAFQAIAHASACQARACASAAIAfgCIAMgBIAGADQAEADAEAGQAEAGgBAHQgBAGgGADQgGAEgFACIgGABQAAATgGAHQgHAJgKADQgKAEgNACQgNABgOADQgMAEgMAGIgXAMIgSAIIgZALQgOAFgMACIgHABQgHAAgFgEg");
	this.shape_27.setTransform(-106.4,-106);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9B0D0D").s().p("AAEANQgPgBgPgEQgSgDgJgEIAMgEIAVgJQARAMASAAQAVAAATgKQgDAKgQAIQgNAFgQAAIgDAAg");
	this.shape_28.setTransform(-104.2,-99.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AA7ghIh5A0QABABALADQAKADARAEQAQAEAQAAQARABAOgGQANgHAFgKQAFgKAAgJQAAgLgCgHQgCgIAAAAg");
	this.shape_29.setTransform(-104.4,-101.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C12D05").s().p("AAIAiQgPAAgQgEIgcgHIgLgEIB5g0IACAIIACASQAAAJgFAKQgFAKgOAHQgMAFgQAAIgDAAg");
	this.shape_30.setTransform(-104.4,-101.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("ABbAUQAIgQAAgQQABgRgCgMQgCgMgBgBIjBBVQAAAAAMAEQAMAEAUAFQAUAEAWAEQAUAEAVgBQAVgBAQgHQASgKAHgRg");
	this.shape_31.setTransform(-105.6,-101.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D8A235").s().p("AgMA0IgqgIIgggJIgMgEIDBhVIADANQACAMgBARQAAAQgIAQQgHARgSAKQgQAHgVABIgJAAQgRAAgPgDg");
	this.shape_32.setTransform(-105.6,-101.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAJQgEgCgCgEQgBgEABgDQABgEAEgCQACgBACACQAEADACAFQABACgBAEQgBAFgDAAIgDABIgCgCg");
	this.shape_33.setTransform(-98.2,-117.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAaQgIgHgFgMQgEgLACgKQADgLAIgDQAJgDAGAHQAIAGAFANQAEAKgCALQgCAKgJADIgFABQgFAAgFgEg");
	this.shape_34.setTransform(-99.1,-118.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAMQgFgDgCgGQgCgEACgFQABgFAEgCQAEgBADADQAEADACAFQADAFgCAFQgBAFgFABIgDABQgBAAgCgCg");
	this.shape_35.setTransform(-113.2,-112.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIAfQgLgHgFgPQgGgNAEgNQAEgNALgFQALgDAJAIQALAHAGAPQAEAOgDAMQgEANgLAEIgGABQgGAAgIgFg");
	this.shape_36.setTransform(-114.6,-113);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E5E2BE").s().p("AgXAwQgKgLgIgOQgEgGgDgHQgLgVgCgVQgBgVAIgNQAAAXAMAbIAHANQANAUARAPQAOAOARAEQAPAEALgGQAGgEAEgHQAAAIgCAHQgiAEgcALQgLgIgKgLg");
	this.shape_37.setTransform(-103.6,-121.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AAtgSQgNgWgRgPQgPgPgRgFQgQgEgNAHQgNAIgEARQgDAQAEAXQAFATANAXQARAcAVAPQAggMAmgEQAEgRgFgVQgFgVgNgUg");
	this.shape_38.setTransform(-103.5,-122);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgsAiQgNgXgFgTQgEgXADgQQADgRANgIQAOgHAQAEQARAFAOAPQARAPAOAWQANAUAFAVQAEAVgDARQgmAEggAMQgVgPgRgcg");
	this.shape_39.setTransform(-103.5,-122);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E5E2BE").s().p("AgCBBQgPgOgMgTQgNgXgEgVQgEgXAGgTQAHgTAPgKQgNASABAaQACAaAQAZQANAWAPANQASANASAEIgUAUQgQgGgOgNg");
	this.shape_40.setTransform(-123.1,-112.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("ABAgiQgPgZgUgPQgUgPgUgDQgVgDgTAKQgRALgIAVQgIAUAEAZQADAXAOAZQAMAUAQAOQAQAOASAGQALgOAWgUQAVgTAegTQgCgbgRgdg");
	this.shape_41.setTransform(-119.9,-112.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgjBKQgQgOgMgUQgOgZgDgXQgEgZAIgUQAIgVARgLQATgKAVADQAUADAUAPQAUAPAPAZQARAdACAbQgeATgVATQgWAUgLAOQgSgGgQgOg");
	this.shape_42.setTransform(-119.9,-112.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2,1,1).p("Agmg1QAAAAALAFQAMAGAPALQAQALAQAPQAQAOAKAUQAAAAgBAEQgCADgDADQgEAEgFAAQgEgBgOgBQgOgBgPABQgRAAgPADQgPADgGAH");
	this.shape_43.setTransform(-55,-54.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("Agmg1IALAFQAMAGAPALQAQALAQAPQAQAOAKAUIgBAEIgFAGQgEAEgFAAIgSgCIgdAAQgRAAgPADQgPADgGAHg");
	this.shape_44.setTransform(-55,-54.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("AgUg5QAAAAAMAIQAJAGARAOQAQANAPARQAQAUAIAZQAAAAgDADQgCAEgFADQgEADgHgCQgFgBgQgEQgRgEgTgDQgVgEgSAAQgTAAgJAI");
	this.shape_45.setTransform(-72.5,-37.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AA0A5IgVgFIgkgHQgVgEgSAAQgTAAgJAIIA0hqIAMAIQAJAGARAOQAQANAPARQAQAUAIAZIgDADQgCAEgFADQgDACgEAAIgEgBg");
	this.shape_46.setTransform(-72.5,-37.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B4B4B4").s().p("AAiBHQgUgDgTgIQgVgIgTgKIgegQIgNgIICmhYIADALIAFAdQADASAAARQgBAUgFAQQgFAQgMAJQgKAFgOAAIgIAAg");
	this.shape_47.setTransform(-107.4,-100);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B4B4B4").s().p("AAVGGQg+gVg0gvQg1gughhAIgFgLQgbg5gGg+QgDgWgIggQgHgegMglQgLgkgNglQgNglgNggQgNghgMgYIgGgOIgEgGQgLgYgGgZQgGgZACgZQACgZAOgVQgHAbAGAeQAGAdAOAcIADAGIAGAOQAMAYANAhIAaBFIAYBKQALAkAIAgQAIAdACAXQAHA+AbA5IAFALQAhBBA0AtQA0AvA/AVQA0ARA1gDQA1gDAugYQAngUAdgeQAegfATgnQgSAyghAnQghAmguAYQguAYg1ADIgQABQgtAAgsgPg");
	this.shape_48.setTransform(-98.7,-83.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E5E5E5").s().p("AD0E+QAQg8gIhDQgHgZgKgYQgGgQgJgQQgeg4gwgsIgIgIIg3gvIg+g6Ig7g9QgegegWgbQgXgbgLgVQgdgegLgTQgYgpglgdIgUgLIgYgLQALgJAPgCQANgBAOAFQAPAFAOAHIAYAPQAiAdAWApQAJATAbAeQAKAVAVAbQAVAbAZAfQAbAfAdAfIA7A7IAyAwIAIAIQAtAsAbA5IANAfQAIAYAFAYQADBFgVA7QgVA7grArQAkgtARg7g");
	this.shape_49.setTransform(-88.7,-92.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CCCCCC").s().p("AAMG9Qg+gVg0guQg0gugihBIgFgLQgbg5gGg+QgDgWgIggQgHgggMgkIgYhIQgNglgNggIgYg5IgHgNIgDgHQgOgbgFgdQgGgdAFgcQAGgbAVgXIAQgOQAJgIALgGQAPgJASgFQASgFARABQASABANAKQgEgEABgJQAAgIAGgKQAFgJAKgIQAKgHANgCQANgBAOAFQAPAEAOAIIAZAPQAiAdAVApQAJATAZAeQAKAVAVAbQAVAbAbAfQAbAfAeAfIA6A7IAzAyIAIAIQAsAqAbA5IANAfQAIAYAFAYQADA9gRA2QgQA2giApQgiAqgwAZQgvAXg1AEIgRAAQgsAAgsgOg");
	this.shape_50.setTransform(-97.7,-88.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AhGHjQg2gQgugfQgugfgkgtQgjgtgUg4QgahHAFhLQACgcgEgnQgDgngHgrQgHgtgJgtQgKgsgKgmQgJgmgJgZQgOgoABgpQABgoAPglQAQglAcgfQgQAngBApQAAAqAOAoIAKAaIAXBBQALAgAHAdIAGAgIAKAuQAFAWAJATIAIAOQgPAAgIAIQgJAKABAQQABAQADAOIACAKQAEAbACAZQADAZADAaQAFAaAIAZQAaBGAvA0QAvA0A+AeQA9AeBCAFQBEAFBEgXQAlgNAlgUQAkgTAegaQAfgZAWggQAWgfAJglQgEAegKAaQgKAbgMAXIgXApIgSAgQgPANgRAMIghAWQgQAMgMANIgKgEIgDgCIgEACQghAVgkANQg5AUg5ABIgHAAQgzAAgygPg");
	this.shape_51.setTransform(-99.1,-79.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2,1,1).p("AmPjsQAJAYAKAlQAKAmAJAsQAJAtAHAsQAHArAEAnQADAngBAcQgDAlAFAlQAFAmAOAlQAUA6AlAuQAkAvAwAhQAvAhA3AQQA3ARA3gCQA6gCA4gYQANgFAXgJQAYgKAbgOQAcgOAbgUQAbgUAUgaQARgWAPgXQAPgYAKgdQAJgeAAgqQAEgdgEgfQgEgegJggQgJgfgLgdQgOgogWghQgXgigcgcQgXgWgfgfQgegfghgiQgigjgegiQgegigWgeQgWgdgHgVQgRgtgcghQgfgggogTQgogTgsgDQgtgCgtAPQgtARggAeQghAfgTAoQgTAogDAsQgCAtAPAtg");
	this.shape_52.setTransform(-99.3,-82.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AhEIPQg3gQgvghQgwghgkgvQglgugUg6QgOglgFgmQgFglADglQABgcgDgnQgEgngHgrQgHgsgJgtQgJgsgKgmQgKglgJgYQgPgtACgtQADgsATgoQATgoAhgfQAggeAtgRQAtgPAtACQAsADAoATQAoATAfAgQAcAhARAtQAHAVAWAdQAWAeAeAiQAeAiAiAjIA/BBIA2A1QAcAcAXAiQAWAhAOAoQALAdAJAfQAJAgAEAeQAEAfgEAdQAAAqgJAeQgKAdgPAYQgPAXgRAWQgUAagbAUQgbAUgcAOQgbAOgYAKIgkAOQg4AYg6ACIgNAAQgwAAgxgPg");
	this.shape_53.setTransform(-99.3,-82.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2,1,1).p("AgHgmQAAABgDAHQgEAIgGALQgHALgJAIQgKAKgOAFQAAABAAAFQAAAEAFAEQAFAEAOgEQAAAAAJgDQAJgEAOgHQAMgHAOgJQAOgHALgLQALgLADgN");
	this.shape_54.setTransform(-107.5,-28.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("Ag3AlQgFgEAAgEIAAgGQAOgFAKgKQAJgIAHgLIAKgTIADgIIBEADQgDANgLALQgLALgOAHQgOAJgMAHIgXALIgJADIgLACQgGAAgCgCg");
	this.shape_55.setTransform(-107.5,-28.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AAKB5QgKgCgPgUQgMgPgPgbQgMgXgCgOQgCgOADgGQADgGACgBQAagFAQgOQAOgNAKgSQAKgTAGgTIADgIQAEgHAFgEQAGgFAHgBQADAVgGAQQgGAQgLANQgMAOgOAMQgOANgMAPQgOAOgEAUQgBAMAFAQQAFAQAKAOIAIAIQANAOARABIgCADQgFADgFAAIgCAAg");
	this.shape_56.setTransform(-79.5,-101.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2,1,1).p("ABKhhQgGgVgLgGQgMgGgMAFQgNAFgIAPQgCADgCAFQgGAVgIARQgKASgPAMQgPAMgYAEQAAAAgDAEQgEAEgCAHQgCAIACAPQADAPALAVQAYAqATAQQASAQANgLQAJgHAOgRQAPgSANgdQAOgcAFgkQAFgngKgvg");
	this.shape_57.setTransform(-77.9,-101.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgWB3QgTgQgYgqQgLgVgDgPQgCgPACgIQACgHAEgEIADgEQAYgEAPgMQAPgMAKgSQAIgRAGgVIAEgIQAIgPANgFQAMgFAMAGQALAGAGAVQAKAvgFAnQgFAkgOAcQgNAdgPASQgOARgJAHQgGAFgFAAQgJAAgLgKg");
	this.shape_58.setTransform(-77.9,-101.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_3}]},3).to({state:[]},10).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.7,-203.5,319.6,357.3);


(lib.fishing_penguin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0});

	// Anim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhCBjQghgEgfgRQAKAFAUACQAVACAbgCQAagBAagFQAYgFAVgIQAUgIAJgLQAFgGgMgIQgMgJgTgLIgngVQgVgNgOgNQgMgOgHgKQgGgLgDgKIgHgVIAKATQAHANAPAQQAOAPAXAPQANAKAUAJQATAGATAHQASAGAQAEIAWAGQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACABADQAAADgCADIgFAGIgEADIgaAQQgSAKgZAKQgaAJgcAFQgRADgSAAQgOAAgOgCg");
	this.shape.setTransform(44.1,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AArBvQgrgJgggYQgigYgZgkQgZgigQgrQAIgFAHgHIALgPQAHgHALgEIAJgFQAIgEAJgDQAIgDAGAAQAFgBAAAGIgJAiQgFARAAATQABATAHASQAIAUATAVQAcATApARQApAQAtANQgfAHgbAAQgRAAgPgCg");
	this.shape_1.setTransform(33.2,49.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AgPhsQAAAAAGAOQAGANAMATQAOATAbARQAQALAUAIQATAHATAGQATAHAOAEQAPADAHABQAAAAAFADQAEADABAGQABAGgJAIQgEAEgQALQgQAKgZAMQgZALgeAIQgfAHgigBQgfgCgigQQgigQgggjQgfgjgag6");
	this.shape_2.setTransform(38.7,51);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAAB2QgfgBgigQQgigQgggjQgfgkgag6QBXhvBWA4IAGAOQAGAOAMATQAOASAbASQAQAKAUAHQATAIATAHIAhAKIAWAFIAFADQAEACABAGQABAGgJAJQgEAEgQAKQgQALgZALQgZAMgeAHQgZAHgcAAIgMgBg");
	this.shape_3.setTransform(38.7,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// Rod
	this.instance = new lib.rod("synched",0);
	this.instance.setTransform(62.3,54.4,1,1,0,0,0,-92.2,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-92.3,rotation:-2.3},5).to({regX:-92.2,rotation:0},5).wait(1));

	// Body
	this.instance_1 = new lib.blinking();
	this.instance_1.setTransform(66.9,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE4B3").s().p("AAkAnQgIgEgMgLQgNgLgPgVIgDgFIgGgJQgDgFgDgBQgDAAgFACQgGADgIgDIAFgFIAMgIQAGgEADACIAEADQADACgBAGIAHAMQAHAMANAQQAPARAZAPIgDABQgEAAgHgEg");
	this.shape_4.setTransform(70.5,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8A235").s().p("AAsAvQgKgFgKgIQgKgIgLgHQgOgIgRgFIgbgIIgZgKQgQgGgMgHQgMgIgBgHIgBgGIAAgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAEAIAHAFQAHAFAGADIAIADQASAJAYAIQAXAIAZADIAMACQAHAAAGADQAHAEAEAGIAKAMQAGAEAIABQAIAAAIgCIAHgDQAEgDAEAAQAFABAFADQAEAEAFAAQAFgBACgDQACgCAEAAIgBAIQgBAFgEACQgDACgGgBQgGgBgFgDIgIgEIgCgCIgBAGQgMAMgLABIgDAAQgIAAgIgFg");
	this.shape_5.setTransform(63.4,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8A235").s().p("AgEAEIAAgJIAEADIAFAFQACADgFAAIgCAAQgEAAAAgCg");
	this.shape_6.setTransform(65.7,35.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AA3g2QACAMALAOQALAOANAMQANALAKAIQAJAIABAAQAAAAABAGQABAGgBAHQgBAHgGAEQgGADgGgCQgHgBgEgDQgFgCAAgBQgOANgKACQgLACgKgEQgKgFgKgIQgLgJgMgGQgKgHgMgEQgNgFgNgEQgGgDgMgEQgNgEgNgEQgOgGgKgHQgKgIgBgIQgCgKABgCQAAgDAHACQAHACASADQAQAEARACQARABARgBQALgBAMgDQAJgDAKgHQACgDAGgEQAGgEAGgEQAHgDAFABQAFAAACAJg");
	this.shape_7.setTransform(63.4,36.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9C248").s().p("AAuA+QgKgFgKgIQgLgJgMgGQgKgHgMgEIgagJIgSgHIgagIQgOgGgKgHQgKgIgBgIIgBgMQAAgDAHACIAZAFQAQAEARACQARABARgBQALgBAMgDQAJgDAKgHIAIgHIAMgIQAHgDAFABQAFAAACAJQACAMALAOQALAOANAMQANALAKAIIAKAIIABAGQABAGgBAHQgBAHgGAEQgGADgGgCQgHgBgEgDIgFgDQgOANgKACIgHABQgIAAgGgDg");
	this.shape_8.setTransform(63.4,36.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B0D0D").s().p("AANAcQgNgEgIgLQgKgMgIgKIgLgVIALAEIAUAHQACASALALQANAMASAFQgFACgHABIgCABQgFAAgGgDg");
	this.shape_9.setTransform(59.7,39.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AA3ACIhtgkQAAAAAEAJQAEAJAIAMQAIALAKALQAKALALAEQANAEAKgEQAKgEAHgHQAHgHAEgGQADgGAAgBg");
	this.shape_10.setTransform(60.8,39.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C12D05").s().p("AABAhQgLgEgKgLQgKgLgIgLIgMgVIgEgJIBtAkIgDAHIgLANQgHAHgKAEQgFACgGAAQgGAAgGgCg");
	this.shape_11.setTransform(60.8,39.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("ABSAOQAHgJAAgBIixg8QAAABAFAJQAFAKAJAQQAJAPALAOQAMAPANANQAOANAMAEQASAFAQgHQAPgGANgLQALgMAHgJg");
	this.shape_12.setTransform(60.3,39.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D8A235").s().p("AACA2QgMgEgOgNQgNgNgMgPQgLgOgJgPIgOgaIgFgKICxA8IgHAKQgHAJgLAMQgNALgPAGQgKAFgKAAQgHAAgHgDg");
	this.shape_13.setTransform(60.3,39.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AAkhBQAAABAFAMQAEAMAEATQAEAUAAAUQAAAXgHAVQAAAAgDACQgDABgFAAQgFAAgEgEQgDgDgIgKQgKgLgKgMQgNgMgMgIQgNgGgJAA");
	this.shape_14.setTransform(61.4,109.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAaA+IgLgNIgUgXQgNgMgMgIQgNgHgKABIBZhBIAFAMIAIAgQAEAUAAAUQABAWgIAWIgDABIgIACQgFAAgEgEg");
	this.shape_15.setTransform(61.4,109.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AAzhGQAAABADANQAEANACAVQACAVgDAXQgDAYgMAXQAAABgEAAQgEABgGgBQgFgBgDgGQgDgEgJgPQgJgPgLgRQgMgPgNgNQgOgNgLgB");
	this.shape_16.setTransform(36.9,110.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAeBGQgFgBgDgGIgMgTQgJgPgLgRQgMgPgNgNQgOgNgLgBIBvgoIADAOQAEANACAVQACAVgDAXQgDAYgMAXIgEABIgEABIgGgBg");
	this.shape_17.setTransform(36.9,110.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B4B4B4").s().p("AgNBHQgPgEgMgPQgMgQgJgUQgKgTgGgUQgHgUgDgOIgDgOIC1A3IgGAKIgRAWQgLAPgOANQgNAOgPAIQgMAGgJAAIgHgBg");
	this.shape_18.setTransform(60.5,42.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B4B4B4").s().p("AgCHYQgzgRgngjQgogigZgyQgVgogIgtQgJgtADgvQADguAPguIAEgMQAVg5AngxQAOgSARgcIAjg+QASgiARgjIAchEIAXg5IAFgPIACgHQAJgZAOgWQANgXATgQQATgQAZgGQgYAQgRAZQgRAZgJAdIgDAHIgFAPQgJAZgOAgIgeBEIghBFQgSAigRAcQgQAcgPASQgnAxgVA5IgEAMQgPAugDAuQgDAvAJAtQAJAtAUAoQAZAyAoAjQAnAiAxARQApANArgBQAqgBApgOQgwAXgyAEIgVABQgoAAglgMg");
	this.shape_19.setTransform(43.1,53.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E5E5E5").s().p("AgvGoQAzgfAqg1QANgXAKgYIAMghQASg+gDhBIgBgLIgDhKIgDhTIgBhXQABgqADgkQADgjAHgWQAAgqAGgVQAMgvgGguIgGgWIgJgZQAOABAMAJQAKAIAHAPQAHANAEAQIAHAbQADAtgOAtQgGATgCApQgIAWgEAiQgFAigCApQgDApAAArIgBBRIAABIIAAALQABA/gVA7IgNAgQgLAXgOAUQguA0g4AbQg5Aag8ABQA6gGA2gfg");
	this.shape_20.setTransform(66.7,56.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AhoHZQgygRgngjQgogigZgyQgVgogIgtQgJgtADgvQADgvAOgtIAEgMQAWg5AngxQAOgSARgcQARgcASgiQASgiAQgjIAfhEIAXg6IAFgOIACgHQAKgcAQgZQARgZAVgQQAXgQAgAAIAVABQAMABAMADQARAEARAJQAQAJAMANQALAOADAQQgBgIAMgHQALgGAQgBQARAAAOAKQAKAJAHAOQAHAOAEAPIAHAbQAEAugOAsQgHAUgCAoQgHAWgFAiQgFAigCApIgDBSIgBBTIABBIIAAALQAAA/gVA8QgGAQgHAPQgLAWgNAVQgqAugxAbQgyAag2AGIgZABQgoAAgngMg");
	this.shape_21.setTransform(53.2,53.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("ABIIhIgngGQgUgDgQAAIgDgKIgBgEIgEgBQgngJgjgQQg2gagqgnQgpgogbgxQgagygLg2QgLg3AGg5QAHg5AZg2QAhhDA5gyQAUgSAZgeQAageAbglQAaglAZgnQAXgmAUgiQAUgiALgYQASgnAegbQAdgcAmgPQAlgQAqgCQgnAQgeAeQgeAdgSAmIgMAaIgdA+QgPAfgPAZIgTAcQgOAUgLATQgMATgFAUQgDAIgCAIQgKgMgMABQgJAAgHAGQgIAGgGAJIgNARIgGAJQgQAWgRAUIgfAoQgPAVgMAZQgfBBgDBGQgEBHAXBBQAWBAAsA0QAtA0BBAfQAuAYA1AMQA2ANA0gEQA0gEAsgaQggAYgiAOQgkANgeAIIgxAOQgVgCgUgEg");
	this.shape_22.setTransform(35.9,55.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("ACtorQgtgCgpAPQgqAPgiAeQgfAegVArQgLAXgUAiQgTAhgZAnQgZAmgaAkQgbAlgZAfQgZAegVASQgcAYgXAfQgXAegRAiQgaA4gHA7QgHA6ALA5QAKA6AbAyQAbAzArAnQAqAnA5AXQANAFAXAKQAXAKAeAKQAeAKAhAFQAfAFAggFQAcgEAcgGQAbgFAcgPQAbgOAegeQAXgSATgYQATgZAQgdQAPgcAOgdQASgnAIgnQAJgpAAgoQgBggAAgrQAAgsABgwQABguADguQACguAGgkQAFgkAJgUQAUgsACgsQABgugPgpQgPgqgdgiQgfghgrgVQgrgUgtgBg");
	this.shape_23.setTransform(45,55.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgbIqQghgFgegKQgegKgXgKIgkgPQg5gXgqgnQgrgngbgzQgbgygKg6QgLg5AHg6QAHg7Aag4QARgiAXgeQAXgfAcgYQAVgSAZgeQAZgfAbglQAagkAZgmIAshIQAUgiALgXQAVgrAfgeQAigeAqgPQApgPAtACQAtABArAUQArAVAfAhQAdAiAPAqQAPApgBAuQgCAsgUAsQgJAUgFAkQgGAkgCAuQgDAugBAuIgBBcIABBLQAAAogJApQgIAngSAnQgOAdgPAcQgQAdgTAZQgTAYgXASQgeAegbAOQgcAPgbAFQgcAGgcAEQgQACgQAAQgPAAgQgCg");
	this.shape_24.setTransform(45,55.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("AAUgcQgBAAgNAFQgLAFgTADQgTACgSgIQgBAAgDAEQgDADABAGQABAGANAGQAAAAAOAGQANAFAUAGQASAGAVACQAUABAPgI");
	this.shape_25.setTransform(8.7,90.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAhAdQgVgCgSgGQgUgGgNgFIgOgGQgNgGgBgGQgBgGADgDIAEgEQASAIATgCQATgDALgFIAOgFIAwAyQgMAHgRAAIgGAAg");
	this.shape_26.setTransform(8.7,90.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhXBLIgBAAQgIgCgDgEQgHgKADgZQADgUAIgbQAHgZAJgLQAJgLAHgDQAHgDACABQAWAOAVACQATACAUgHQAUgGASgJIAHgDQAIgCAIAAQAHABAFAEQgMARgQAHQgQAIgRABQgSABgSgBQgTgCgUACQgUACgRALQgKAHgHAPQgIANgCASIgBALQABAUAMAOIgDAAg");
	this.shape_27.setTransform(81.3,63.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,1,1).p("ABzg8QgEgNgNgFQgMgFgQAFQgFABgEACQgTAKgTAFQgUAGgRgCQgUgDgTgNQgBAAgEAAQgGAAgIAFQgIAFgIAMQgJAMgGAXQgOAtACAZQACAYATADQAKABAXgCQAXgDAegKQAcgLAfgXQAegYAagnQALgTgDgMg");
	this.shape_28.setTransform(81.7,63.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AheBSQgTgDgCgYQgCgZAOgtQAGgXAJgMQAIgMAIgFQAIgFAGAAIAFAAQATANAUADQARACAUgGQATgFATgKQAEgCAFgBQAQgFAMAFQANAFAEANQADAMgLATQgaAngeAYQgfAXgcALQgeAKgXADIgYABIgJAAg");
	this.shape_29.setTransform(81.7,63.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,-0.9,264.4,289.4);


(lib.penguin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{happy_done:25,catch_done:52,empty_done:68,"static":0,happy:11,"catch":26,empty:53});

	// timeline functions:
	this.frame_10 = function() {
		/* stop();
		*/
	}
	this.frame_25 = function() {
		/* stop();
		*/
	}
	this.frame_26 = function() {
		playSound("splashcorrect");
	}
	this.frame_52 = function() {
		/* stop();
		*/
	}
	this.frame_53 = function() {
		playSound("splashincorrect");
	}
	this.frame_68 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(15).call(this.frame_25).wait(1).call(this.frame_26).wait(26).call(this.frame_52).wait(1).call(this.frame_53).wait(15).call(this.frame_68).wait(10));

	// Anim
	this.penguin = new lib.happy_penguin();
	this.penguin.setTransform(42.9,58.1,1,1,0,0,0,-23.6,-14.6);

	this.penguin_1 = new lib.penguin_catch_fish();
	this.penguin_1.setTransform(130.9,141.8,1,1,0,0,0,-0.3,10.8);

	this.penguin_2 = new lib.penguin_crying_anim();
	this.penguin_2.setTransform(131,141.5,1,1,0,0,0,-88.9,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.penguin}]},11).to({state:[{t:this.penguin_1}]},15).to({state:[{t:this.penguin_2}]},27).wait(25));

	// Rod
	this.instance = new lib.fishing_penguin();
	this.instance.setTransform(117.9,140.7,1,1,0,0,0,132.8,143.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},11).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-4.1,263.9,289.4);


(lib.fish3right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIARQgEgHgBgKQABgJAEgHQAEgHAEAAQAGAAAEAHQAEAHAAAJQAAAKgEAHQgEAGgGABQgEgBgEgGg");
	this.shape.setTransform(31.9,-5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E3502").s().p("AgNAqQgHgGgEgLQgDgMAAgNQAAgMADgLQAEgMAHgGQAGgHAHAAQAHAAAHAHQAGAGAEAMQAEALAAAMQAAANgEAMQgEALgGAGQgHAHgHAAQgHAAgGgHg");
	this.shape_1.setTransform(33.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#638C3B").s().p("ABRAfIgdgBIgngEQgTgDgUgFQgUgGgOgJQgQgIgHgJQgHgIgBgEIgBgFIAEAFQADAEALAHQALAHAVAIQAUAHAgAJQAiAJAxAHIgMgBg");
	this.shape_2.setTransform(50.1,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C5B1D").s().p("AAWAwQgHgEgMgJQgJgLgNgSQgHgKgCgJQgBgJADgHQADgHAFgFIAIgIIADgCQgEAOACAOQACAQAHALQAEAOAHALIANARIAFAGg");
	this.shape_3.setTransform(16.8,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C5B1D").s().p("Ag+ApQgKgEABgIQACgHAIgKQAFADAHACQAGABAHgBQAHgBAFgEQAMgGALgIIAWgTQAMgJANgGQAMgFAOAAIgCAPQggAdgbAQQgZAQgTAEQgMADgIAAIgJgBg");
	this.shape_4.setTransform(-54.9,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("ABRgSQgPgMgTgPQgUgPgWgNQgUgNgWgGQgWgHgVADQgBANAHALQAGALAKAJQAKAJAJAIQAPANAIAJQAJAKADADIADAFQAAABgGAGQgHAGgJAJQgKAKgKALQgJALgHAKQgHAKgCAGQgBAIAJAEQALADATgFQATgEAZgQQAagQAggf");
	this.shape_5.setTransform(-55.2,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#497028").s().p("Ag8BhQgJgEABgIQACgGAHgKQAHgKAJgLIAUgVIAQgPIAGgHIgDgFQgDgDgJgKQgIgJgPgNIgTgRQgKgJgGgLQgHgLABgNQAVgDAWAHQAWAGAUANQAWANAUAPIAiAbIgJAuQggAfgaAQQgZAQgTAEQgMADgIAAQgGAAgEgBg");
	this.shape_6.setTransform(-55.2,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAXQgFgDgJgCQgJgCgJABQgLACgKAHIgDgGQgDgGgDgJQgDgHACgIQABgJAJgGIAHAAIAPABQAIABALAEQALADAMAIIADAAQADABABACQACADgDACQgDAGgCAGIgEAKIgBAEIgHgDg");
	this.shape_7.setTransform(29.6,-19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AAfgRIgCAFQgCAEgEAHQgEAFgIAGQgHAGgJADQgKAEgPgCQAAAAAAgCQgBgBADgFQAEgFAFgIQAFgIADgN");
	this.shape_8.setTransform(20.3,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C5B1D").s().p("AgeAVIAAgCQgBgBADgFIAJgNQAFgIADgNIAqAEIgCAFIgGALQgEAFgIAGQgHAGgJADQgHADgIAAIgKgBg");
	this.shape_9.setTransform(20.3,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAjAAQAAAAgGAAQgHgBgKgBQgKAAgLABQgNABgMAD");
	this.shape_10.setTransform(39.8,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeBNQgMgQgFgUQgEgPgBgSQAAgQAEgTQADgRAJgQQAIgPAMgLQANgKAPgDQAIAHAIANQAIAOAFATQAGASADAUQADASAAATQgBASgGAPIgDAGIgJALQgGAIgKAFQgKAGgLABQgQgIgLgOg");
	this.shape_11.setTransform(33,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1E8DA").s().p("AAJBEQgSgFgSgMQgSgLgPgQQgPgQgHgQQgIgSACgSQABgMAFgOQAFAWAMAVQAMAUARAMQASAPAUAHQAYAHAWAAQAWAAATgFIgCAGQgKAXgUAJQgLAEgNAAQgLAAgNgDg");
	this.shape_12.setTransform(28.7,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AhUgjQAHgSAKgQQAKgRAOgLQANgMAQgEQAOgFASAGQAGADAGADQAPAKAMAQQANARAIAVQAJAVAEAVQAEAVgBAVQgBAVgGAQQgKAWgSAJQgRAJgVgDQgVgDgUgLQgVgLgRgRQgSgRgJgUQgKgUACgSQACgRAHgRg");
	this.shape_13.setTransform(28.9,-2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVB0QgVgDgUgLQgVgLgRgRQgSgRgJgUQgKgUACgSQACgRAHgRQAHgSAKgQQAKgRAOgLQANgMAQgEQAOgFASAGIAMAGQAPAKAMAQQANARAIAVQAJAVAEAVQAEAVgBAVQgBAVgGAQQgKAWgSAJQgNAGgOAAIgLAAg");
	this.shape_14.setTransform(28.9,-2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C5B1D").s().p("ABMA6Qg8gCg5gHQg7gIg5gLQg5gLg0gNIgwgIIgsgKIg1gNIg3gOIgxgNIgPgFQA7AIA3AKIBwAVIBtASQA3AJA7AGQA7AGBAACQBBACBMgEQAOgBAPgDQAPgEAOgGQAPgGALgIQAFgEADgFIAHgJQAEgFAGgEQAOgJAMgCQALgBANADQAMADAOAGQAOAFATAFQAKADAOAAIAbgBIAYgCIAIgCIAOgEIANgGQAFgEABgDQAAgEgHgEIACAAIAFgCIAEAAQAGACADAGQADAGgDAFQgCAFgGADIgJAGIgNADQgNAEgVADQgWADgdAAQgcAAghgHIgBAAIgLAEIgBABIgKAIQgHACgHABQgIACgGAEQgGADgFAIQAAACgFAEQgEAEgLAGQgKAFgTAFQgTAFgdADQguAFgvAAIgaAAg");
	this.shape_15.setTransform(7.3,11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#638C3B").s().p("AmlBqQAEgJALgIQAKgIAOgIIAbgNIAXgKIALgFQAugVAtgSQAugRAugQQCHgvB1gWQB2gWBrACIALADQAJACAOAHQANAIAOAOQANAPALAYIAAABIgigXQgPgLgRgHQgRgHgXgBQgrABg1AHQg1AHg7AMQg7ANg9AQQg/AQg/ATIh8AlIh1AmQgPAHgMAKQgMALgGAOQgBgFACgGg");
	this.shape_16.setTransform(-7,-8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AnQgQQAKgFAGgCQBagpBdghQBNgbBQgVQBPgVBPgLQBSgLBSABQAAAAAJADQAKACAOAHQAPAIAPAPQAPAPAKAaQAOAjALAbQALAaAJASQAJAQAJAHQAKAIAZAKQAXALAnAKQAlAJAxAFQABAAACADQACAEAAAFQAAAFgFAHQgEAGgMAFQAAAAgNAEQgMADgWAEQgWADgdAAQgdAAghgHQAAAAgDABQgCABgDABIgCABQgDABgDADQgDADgCABQgGAEgHACQgIACgHADQgGADgEAHQgBAEgFAEQgGAFgLAFQgLAFgSAFQgTAFgdADQg6AHg6gCQg7gBg4gIQg7gHg6gLQg5gMg5gNQgMgCgWgFQgVgFgbgHQgcgGgdgHQgegHgcgHQgcgHgXgHQgXgHgOgFQgOgFgCgEQgEgIAEgIQAEgJAKgIQAJgIANgIQANgFANgGQANgGALgEg");
	this.shape_17.setTransform(5.5,-1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#497028").s().p("ABhC7Qg6gBg5gIQg7gHg6gLQg5gMg5gNIghgHIgxgMIg5gNIg6gOIgygOIglgMQgPgFgCgEQgEgIAEgIQAEgJAKgIQAKgIANgIIAZgLIAYgKIAQgHQBagpBeghQBMgbBQgVQBPgVBQgLQBRgLBSABIAJADQALACAOAHQAOAIAPAPQAPAPALAaIAXA+QAMAaAJASQAJAQAKAHQAJAIAZAKQAYALAlAKQAmAJAxAFIACADQACAEABAFQAAAFgFAHQgEAGgMAFIgNAEIgiAHQgWADgdAAQgdAAghgHIgDABIgFACIgDABIgFAEIgFAEQgHAEgGACIgPAFQgGADgEAHQgBAEgGAEQgFAFgLAFQgLAFgTAFQgSAFgcADQgwAGgvAAIgWgBg");
	this.shape_18.setTransform(5.5,-1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3C5B1D").s().p("AgqA5QgGgEABgMQABgKAFgPQAEAFAEACQAFACAEgBQAFgBADgGQAIgJAIgMIAOgbQAIgMAIgJQAJgIAJABIgCAWQgVApgSAWQgQAXgNAHQgHAEgGAAQgEAAgDgDg");
	this.shape_19.setTransform(-51.6,10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AA3gaQgLgSgNgUQgNgWgPgSQgMgSgPgJQgPgKgOAFQgBASAEAPQAFAQAGANQAHANAHALQAJASAGAOQAFANADAFIACAIQAAAAgFAJQgEAIgGAOQgHAOgGAPQgHAQgEAOQgFAOgBAJQgBALAGAFQAHAFANgHQANgGAQgXQASgWAVgr");
	this.shape_20.setTransform(-51.8,2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#497028").s().p("AgoCJQgGgFABgLQABgJAFgOIALgeIANgdIAKgWIAFgJIgCgIIgIgSQgGgOgJgSQgHgLgHgNQgGgNgFgQQgEgPABgSQAOgFAPAKQAPAJAMASQAPASANAWIAYAmIgHBDQgVArgSAWQgQAXgNAGQgIAEgFAAQgEAAgDgCg");
	this.shape_21.setTransform(-51.8,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIARQgEgHAAgKQAAgJAEgHQADgHAFAAQAFAAAFAHQAEAHAAAJQAAAKgEAHQgFAGgFABQgFgBgDgGg");
	this.shape_22.setTransform(29.2,-5.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E3502").s().p("AgNAqQgGgGgEgLQgEgMAAgNQAAgMAEgLQAEgMAGgGQAGgHAHAAQAHAAAHAHQAGAGAEAMQAEALAAAMQAAANgEAMQgEALgGAGQgHAHgHAAQgHAAgGgHg");
	this.shape_23.setTransform(31.1,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#638C3B").s().p("ABQAfIgdgBIgngEQgSgDgTgFQgUgGgOgJQgQgIgGgJQgHgIgBgEIgBgFIADAFQAEAEALAHQAKAHAVAIQAUAHAfAJQAhAJAxAHIgMgBg");
	this.shape_24.setTransform(47.1,2.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C5B1D").s().p("AAVAwQgHgEgLgJQgJgLgNgSQgHgKgBgJQgBgJADgHQADgHAEgFIAIgIIAEgCQgFAOACAOQACAQAHALQAEAOAHALIAMARIAGAGg");
	this.shape_25.setTransform(14.4,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAXAXQgGgDgJgCQgIgCgJABQgLACgJAHIgDgGIgHgPQgCgHACgIQABgJAJgGIAGAAIAPABQAIABALAEQALADALAIIADAAQADABABACQACADgCACIgGAMIgDAKIgCAEIgGgDg");
	this.shape_26.setTransform(27,-19.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("AAfgJIgCADQgCACgEAEQgFACgHADQgHAEgJACQgKACgOgBIgBgBQAAgBADgDQADgDAFgEQAFgEAEgH");
	this.shape_27.setTransform(17.9,16.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3C5B1D").s().p("AgdAMIgBgBIADgEIAIgHQAFgEAEgHIApACIgCADIgGAGIgMAFQgHAEgJACQgGABgIAAIgKAAg");
	this.shape_28.setTransform(17.9,16.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AAjAAQgBAAgGAAQgGgBgKgBQgKAAgLABQgMABgNAD");
	this.shape_29.setTransform(37,10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeBNQgLgQgFgUQgEgPgBgSQAAgQADgTQAEgRAIgQQAIgPANgLQAMgKAPgDQAIAHAHANQAIAOAGATQAFASADAUQADASAAATQgBASgGAPIgDAGQgCAEgGAHQgGAIgKAFQgKAGgLABQgQgIgLgOg");
	this.shape_30.setTransform(30.3,-0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1E8DA").s().p("AAJBEQgRgFgSgMQgTgLgOgQQgOgQgIgQQgHgSABgSQACgMAEgOQAFAWAMAVQAMAUARAMQARAPAUAHQAYAHAVAAQAWAAATgFIgDAGQgJAXgUAJQgLAEgNAAQgLAAgMgDg");
	this.shape_31.setTransform(26.1,1.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AhTgjQAHgSAKgQQAKgRANgLQAOgMAPgEQAOgFARAGQAGADAGADQAPAKAMAQQAMARAJAVQAIAVAEAVQAEAVgBAVQgBAVgGAQQgKAWgRAJQgRAJgVgDQgUgDgUgLQgVgLgRgRQgRgRgJgUQgJgUACgSQACgRAGgRg");
	this.shape_32.setTransform(26.3,-2.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAUB0QgUgDgUgLQgVgLgRgRQgRgRgJgUQgJgUACgSQACgRAGgRQAHgSAKgQQAKgRANgLQAOgMAPgEQAOgFARAGIAMAGQAPAKAMAQQAMARAJAVQAIAVAEAVQAEAVgBAVQgBAVgGAQQgJAWgSAJQgNAGgOAAIgLAAg");
	this.shape_33.setTransform(26.3,-2.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3C5B1D").s().p("ABKA6Qg7gCg3gHQg6gIg4gLQg4gLg0gNIgvgIIgrgKIg0gNIg2gOIgwgNIgPgFQA7AIA2AKIBtAVIBrASQA3AJA6AGQA5AGA/ACQBAACBKgEQAOgBAPgDQAPgEAOgGQAOgGALgIQAFgEADgFIAHgJQAEgFAGgEQANgJAMgCQAMgBAMADQALADAOAGQAPAFASAFQAKADANAAIAbgBIAYgCIAIgCIANgEIANgGQAFgEABgDQAAgEgHgEIACAAIAFgCIADAAQAHACADAGQACAGgCAFQgDAFgFADIgKAGIgMADQgMAEgWADQgVADgcAAQgcAAghgHIAAAAIgLAEIgBABIgKAIQgGACgIABQgHACgGAEQgHADgEAIIgFAGQgEAEgLAGQgKAFgSAFQgTAFgcADQguAFguAAIgaAAg");
	this.shape_34.setTransform(5.1,11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#638C3B").s().p("AmdBqQAEgJAKgIQALgIANgIQANgHAOgGIAXgKIAKgFQAtgVAtgSQAtgRAsgQQCFgvBzgWQB0gWBpACIAKADQAKACANAHQANAIAOAOQANAPAKAYIAAABIghgXQgPgLgQgHQgRgHgXgBQgqABg0AHQg0AHg6AMQg6ANg8AQQg9AQg+ATIh7AlIhyAmQgPAHgMAKQgMALgFAOQgCgFADgGg");
	this.shape_35.setTransform(-9,-8.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("AnIgQQAKgFAGgCQBYgpBcghQBLgbBOgVQBOgVBOgLQBQgLBRABQAAAAAJADQAKACAOAHQAOAIAPAPQAOAPALAaQANAjAKAbQALAaAJASQAJAQAKAHQAJAIAYAKQAYALAlAKQAlAJAwAFQABAAACADQABAEABAFQAAAFgFAHQgEAGgMAFIgMAEQgNADgVAEQgVADgdAAQgcAAghgHIgDABQgCABgDABIgCABQgDABgCADQgDADgCABQgHAEgHACQgHACgHADQgGADgEAHQgCAEgFAEQgFAFgKAFQgLAFgSAFQgTAFgbADQg6AHg5gCQg6gBg3gIQg5gHg5gLQg5gMg3gNQgMgCgVgFQgWgFgbgHQgagGgdgHQgdgHgcgHQgbgHgXgHQgWgHgOgFQgOgFgCgEQgEgIAEgIQAEgJAJgIQAKgIAMgIQANgFANgGQAMgGALgEg");
	this.shape_36.setTransform(3.3,-1.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#497028").s().p("ABfC7Qg6gBg3gIQg5gHg5gLQg5gMg3gNIghgHIgxgMIg3gNIg5gOIgygOIgkgMQgOgFgCgEQgEgIAEgIQAEgJAJgIQAKgIAMgIIAagLIAXgKIAQgHQBYgpBcghQBLgbBOgVQBOgVBOgLQBQgLBRABIAJADQAKACAOAHQAOAIAPAPQAOAPALAaIAXA+QALAaAJASQAJAQAKAHQAJAIAYAKQAYALAlAKQAlAJAwAFIADADIACAJQAAAFgFAHQgEAGgMAFIgMAEIgiAHQgVADgdAAQgcAAghgHIgDABIgFACIgCABIgFAEIgFAEQgHAEgHACIgOAFQgGADgEAHQgCAEgFAEQgFAFgKAFQgLAFgSAFQgTAFgbADQgvAGguAAIgWgBg");
	this.shape_37.setTransform(3.3,-1.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3C5B1D").s().p("Ag5AnQgJgEABgHQABgHAHgKQAFADAHACQAGABAGgBQAGgBAEgDQAMgHAKgHIAUgSQALgJAMgFQALgGANABIgCAOQgeAbgYAQQgXAPgSAEQgKADgIAAIgIgBg");
	this.shape_38.setTransform(-54.3,7.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3C5B1D").s().p("AAWAwQgHgEgMgJQgJgLgNgTQgIgJgBgJQAAgJACgIQADgGAFgFIAIgIIADgCQgEAOACAOQACAPAGAMQAFAOAHAKIANASIAFAGIgHgEg");
	this.shape_39.setTransform(16.8,0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3C5B1D").s().p("AAJA5QgRgEgTgKQgSgKgPgNQgOgNgIgOQgIgPACgPQACgLAEgMQAFATAMARQAMASARAKQASAMAVAGQAYAGAWAAQAVAAAUgEIgDAFQgKAUgUAHQgLAFgNAAQgLAAgNgEg");
	this.shape_40.setTransform(28.7,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAaBYQgagBgXgJQgZgJgSgQQgSgRgHgTQgGgRACgSQADgOAGgPQAHgQALgOIAIgJIACgBIACABIABACIgBACIgHAJQgKANgHAPQgGAOgDAOIAAAAQgCAQAJAPQAKAQARAOQAQAOAVAJQATAJAVADQAVACAQgHQARgHAJgSQADgHACgIIABgCIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgCAJgDAIQgLAUgOAIQgNAIgUAAIgHAAg");
	this.shape_41.setTransform(28.8,-2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIASQgEgIgBgKQABgJAEgIQAEgIAEABQAGgBAEAIQAEAIAAAJQAAAKgEAIQgEAIgGgBQgEABgEgIg");
	this.shape_42.setTransform(26.1,-6.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1E3502").s().p("AgNAuQgHgHgEgMQgDgMAAgPQAAgNADgMQAEgMAHgHQAGgIAHAAQAHAAAHAIQAGAHAEAMQAEAMAAANQAAAPgEAMQgEAMgGAHQgHAHgHAAQgHAAgGgHg");
	this.shape_43.setTransform(28.1,-0.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgeBSQgMgQgFgWQgEgRgBgTQAAgRAEgTQADgUAJgQQAIgRAMgLQANgMAPgDQAIAIAIAOQAIAPAFAUQAGATADAWQADAUAAAVQgBATgGARIgDAFIgJAOQgGAGgKAHQgKAGgLABQgQgIgLgRg");
	this.shape_44.setTransform(27.2,-1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1E8DA").s().p("AAJBKQgSgGgSgNQgSgMgPgRQgPgRgHgSQgIgTACgUQABgNAFgPQAFAYAMAWQAMAWARAOQASAQAUAHQAYAHAWABQAWAAATgGIgCAHQgKAZgUAJQgLAFgNAAQgLAAgNgDg");
	this.shape_45.setTransform(22.9,1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AhUgmQAHgTAKgSQAKgRAOgNQANgNAQgFQAOgEASAGQAGADAGAEQAPAKAMASQANASAIAXQAJAWAEAXQAEAXgBAXQgBAWgGARQgKAZgSAJQgRAJgVgDQgVgCgUgNQgVgMgRgSQgSgSgJgWQgKgVACgUQACgSAHgTg");
	this.shape_46.setTransform(23.1,-3.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAVB9QgVgCgUgNQgVgMgRgSQgSgSgJgWQgKgVACgUQACgSAHgTQAHgTAKgSQAKgRAOgNQANgNAQgFQAOgEASAGIAMAHQAPAKAMASQANASAIAXQAJAWAEAXQAEAXgBAXQgBAWgGARQgKAZgSAJQgNAHgPAAIgKgBg");
	this.shape_47.setTransform(23.1,-3.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#638C3B").s().p("AmlBqQAEgJALgIQAKgIAOgIIAbgNIAXgKIALgFQAtgUAugTQAugQAugRQCHgvB0gWQB3gWBqACIALADQAKACAOAIQANAHAOAPQANAOAKAZIABAAIgigXQgPgLgRgHQgRgHgXAAQgsAAg0AHQg1AHg7AMQg7ANg9AQQg/ARg/ASIh9AlQg9ATg4AUQgOAGgNAKQgMALgFAOQgCgFADgGg");
	this.shape_48.setTransform(-12.8,-8.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2,1,1).p("AobAOQAGgEAGgEQANgGANgFQANgHALgEQALgFAFgCQBagpBdghQBNgbBQgVQBPgVBPgLQBSgLBSACQAAgBAKADQAJACAPAHQAOAIAPAPQAPAPAKAbQAOAiALAbQALAbAJARQAJAQAJAHQAKAIAYAKQAZALAlAKQAmAJAyAFQAAAAACADQACAEAAAFQAAAGgEAGQgFAGgMAGIgNADQgMAEgWADQgWADgdAAQgdAAghgHQAAAAgDABQgCABgDABQgCABgBAAQgCABgDADQgCADgDABQgGAEgHACQgIACgHADQgGADgEAIQgCADgFAFQgFAEgLAFQgLAGgSAEQgTAFgcADQg6AHg7gBQg7gCg4gHQg6gIg6gLQg6gLg4gNQgNgDgVgFQgWgFgbgGQgcgHgdgGQgdgIgcgHQgcgHgXgHQgSgFgMgE");
	this.shape_49.setTransform(1,-1.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#497028").s().p("ABhC8Qg7gCg4gHQg6gIg6gLQg6gLg4gNIgigIIgxgLIg5gNIg5gPIgzgOIgegJIgHgDQgPgFgCgEQgEgIAEgIQAEgJAKgIIAKgHIAMgIQANgGANgFIAYgLIAQgHQBagpBdghQBNgbBQgVQBPgVBPgLQBSgLBSACIAKACQAJACAPAHQAOAIAPAPQAPAPAKAbIAZA9QALAbAJARQAJAQAJAHQAKAIAYAKQAZALAlAKQAmAJAyAFIACADQACAEAAAFQAAAGgEAGQgFAGgMAGIgNADQgMAEgWADQgWADgdAAQgdAAghgHIgDABIgFACIgDABIgFAEIgFAEQgGAEgHACQgIACgHADQgGADgEAIIgHAIQgFAEgLAFQgLAGgSAEQgTAFgcADQgwAGgwAAIgVAAg");
	this.shape_50.setTransform(-0.3,-1.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3C5B1D").s().p("AgtApQgHgEABgIQABgHAGgKQAEADAFACIAJAAQAFgBAEgEQAJgGAIgIIAQgTQAIgJAJgGQAKgFAKAAIgCAPQgYAdgTAQQgRAQgPAEQgIADgGAAIgHgBg");
	this.shape_51.setTransform(-57.2,7.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2,1,1).p("AA7gSQgLgMgOgPQgPgPgQgNQgOgNgQgGQgQgHgPADQgBANAFALQAEALAIAJQAHAJAHAIQALANAGAJQAGAKACADIADAFQgBABgEAGQgFAGgHAJQgHAKgHALQgHALgFAKQgFAKgBAGQgCAIAIAEQAHADAOgFQAOgEASgQQATgQAXgf");
	this.shape_52.setTransform(-57.4,2.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#497028").s().p("AgrBhQgIgEACgIQABgGAFgKQAFgKAHgLIAOgVIAMgPIAFgHIgDgFIgIgNQgGgJgLgNIgOgRQgIgJgEgLQgFgLABgNQAPgDAQAHQAQAGAOANQAQANAPAPIAZAbIgHAuQgXAfgTAQQgSAQgOAEQgIADgGAAQgEAAgDgBg");
	this.shape_53.setTransform(-57.4,2.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2,1,1).p("AAfgKIgCADQgCADgEAEQgEACgIAEQgHAEgJACQgKADgPgCQAAABAAgCQgBgBADgDQAEgDAFgFQAFgFADgI");
	this.shape_54.setTransform(14.5,16.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3C5B1D").s().p("AgeANIAAgBQgBgBADgDIAJgIQAFgFADgIIAqADIgCADIgGAHQgEACgIAEQgHAEgJACQgGACgIAAIgLgBg");
	this.shape_55.setTransform(14.5,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:7.3}},{t:this.shape_14,p:{x:28.9}},{t:this.shape_13,p:{x:28.9}},{t:this.shape_12,p:{x:28.7}},{t:this.shape_11,p:{x:33}},{t:this.shape_10,p:{x:39.8}},{t:this.shape_9,p:{x:20.3}},{t:this.shape_8,p:{x:20.3}},{t:this.shape_7,p:{x:29.6,y:-19.7}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:16.8}},{t:this.shape_2,p:{x:50.1}},{t:this.shape_1,p:{x:33.9}},{t:this.shape,p:{x:31.9}}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},6).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:7.3}},{t:this.shape_14,p:{x:28.9}},{t:this.shape_13,p:{x:28.9}},{t:this.shape_12,p:{x:28.7}},{t:this.shape_11,p:{x:33}},{t:this.shape_10,p:{x:39.8}},{t:this.shape_9,p:{x:20.3}},{t:this.shape_8,p:{x:20.3}},{t:this.shape_7,p:{x:29.6,y:-19.7}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_38},{t:this.shape_3,p:{x:16.8}},{t:this.shape_2,p:{x:50.1}},{t:this.shape_1,p:{x:33.9}},{t:this.shape,p:{x:31.9}}]},6).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:7.3}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_10,p:{x:39.8}},{t:this.shape_9,p:{x:20.3}},{t:this.shape_8,p:{x:20.3}},{t:this.shape_7,p:{x:28.5,y:-17.4}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_38},{t:this.shape_39},{t:this.shape_2,p:{x:50.1}}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_15,p:{x:1.5}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_10,p:{x:34}},{t:this.shape_9,p:{x:14.5}},{t:this.shape_8,p:{x:14.5}},{t:this.shape_7,p:{x:23.8,y:-19.7}},{t:this.shape_3,p:{x:11}},{t:this.shape_2,p:{x:44.3}},{t:this.shape_43},{t:this.shape_42}]},4).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_15,p:{x:1.5}},{t:this.shape_14,p:{x:23.1}},{t:this.shape_13,p:{x:23.1}},{t:this.shape_12,p:{x:22.9}},{t:this.shape_11,p:{x:27.2}},{t:this.shape_10,p:{x:34}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_7,p:{x:23.8,y:-19.7}},{t:this.shape_3,p:{x:11}},{t:this.shape_2,p:{x:44.3}},{t:this.shape_1,p:{x:28.1}},{t:this.shape,p:{x:26.1}}]},2).wait(4));

	// water_anim2
	this.instance = new lib.bubblewater_anim();
	this.instance.setTransform(-49.9,-2.1,0.244,0.244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-22.3,126.2,43.2);


(lib.fish3left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJARQgEgHAAgKQAAgJAEgHQAEgHAFAAQAFAAAEAHQAEAHABAJQgBAKgEAHQgEAGgFABQgFgBgEgGg");
	this.shape.setTransform(-34.4,-5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E3502").s().p("AgNAqQgGgGgEgLQgEgMAAgNQAAgMAEgLQAEgMAGgGQAHgHAGAAQAIAAAGAHQAHAGAEAMQADALAAAMQAAANgDAMQgEALgHAGQgGAHgIAAQgGAAgHgHg");
	this.shape_1.setTransform(-36.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#638C3B").s().p("AgJAQQAggJAUgHQAVgIALgHQALgHADgEIAEgFIgBAFQgBAEgHAIQgHAJgQAIQgOAJgUAGQgUAFgTADIgnAEIgdABIgMABQAxgHAigJg");
	this.shape_2.setTransform(-52.6,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C5B1D").s().p("AgXAuIANgRQAHgLAEgOQAHgLACgQQACgOgEgOIADACIAIAIQAFAFADAHQADAHgBAJQgCAJgHAKQgNASgJALQgMAJgHAEIgHAEg");
	this.shape_3.setTransform(-19.3,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C5B1D").s().p("AAiAnQgTgEgZgQQgbgQgggdIgCgPQAOAAAMAFQANAGAMAJIAWATQALAIAMAGQAFAEAHABQAHABAGgBQAHgCAFgDQAIAKACAHQABAIgKAEIgJABQgIAAgMgDg");
	this.shape_4.setTransform(52.4,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AhQgSQAPgMATgPQAUgPAWgNQAUgNAWgGQAWgHAVADQABANgHALQgGALgKAJQgKAJgJAIQgPANgIAJQgJAKgDADIgDAFQAAABAGAGQAHAGAJAJQAKAKAKALQAJALAHAKQAHAKACAGQABAIgJAEQgLADgTgFQgTgEgZgQQgagQgggf");
	this.shape_5.setTransform(52.7,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#497028").s().p("AAfBfQgTgEgZgQQgagQgggfIgJguIAigbQAUgPAWgNQAUgNAWgGQAWgHAVADQABANgHALQgGALgKAJIgTARQgPANgIAJQgJAKgDADIgDAFIAGAHIAQAPIAUAVQAJALAHAKQAHAKACAGQABAIgJAEQgEABgGAAQgIAAgMgDg");
	this.shape_6.setTransform(52.7,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAKARQgKgBgIACQgJACgFADIgHADIgBgEIgEgKQgCgGgDgGQgDgCACgDQABgCADgBIADAAQAMgIALgDQAKgEAJgBIAPgBIAHAAQAJAGABAJQACAIgDAHQgDAJgDAGIgDAGQgKgHgLgCg");
	this.shape_7.setTransform(-32.1,-19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AgegRIACAFQACAEAEAHQAEAFAIAGQAHAGAJADQAKAEAPgCQAAAAAAgCQABgBgDgFQgEgFgFgIQgFgIgDgN");
	this.shape_8.setTransform(-22.8,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C5B1D").s().p("AAGATQgJgDgHgGQgIgGgEgFIgGgLIgCgFIAqgEQADANAFAIIAJANQADAFgBABIAAACIgKABQgIAAgHgDg");
	this.shape_9.setTransform(-22.8,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgiAAQAAAAAGAAQAHgBAKgBQAKAAALABQANABAMAD");
	this.shape_10.setTransform(-42.3,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRBcQgKgFgGgIIgJgLIgDgGQgGgPgBgSQAAgTADgSQADgUAGgSQAFgTAIgOQAIgNAIgHQAPADANAKQAMALAIAPQAJAQADARQAEATAAAQQgBASgEAPQgFAUgMAQQgLAOgQAIQgLgBgKgGg");
	this.shape_11.setTransform(-35.5,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1E8DA").s().p("Ag4BDQgUgJgKgXIgCgGQATAFAWAAQAWAAAYgHQAUgHASgPQARgMAMgUQAMgVAFgWQAFAOABAMQACASgIASQgHAQgPAQQgPAQgSALQgSAMgSAFQgNADgLAAQgNAAgLgEg");
	this.shape_12.setTransform(-31.2,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("ABVgjQgHgSgKgQQgKgRgOgLQgNgMgQgEQgPgFgRAGQgGADgGADQgPAKgMAQQgNARgIAVQgJAVgEAVQgEAVABAVQABAVAGAQQAKAWASAJQARAJAVgDQAUgDAVgLQAVgLARgRQASgRAJgUQAKgUgCgSQgCgRgHgRg");
	this.shape_13.setTransform(-31.4,-2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag6BuQgSgJgKgWQgGgQgBgVQgBgVAEgVQAEgVAJgVQAIgVANgRQAMgQAPgKIAMgGQARgGAPAFQAQAEANAMQAOALAKARQAKAQAHASQAHARACARQACASgKAUQgJAUgSARQgRARgVALQgVALgUADIgLAAQgOAAgNgGg");
	this.shape_14.setTransform(-31.4,-2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C5B1D").s().p("AjCA1QgdgDgTgFQgTgFgKgFQgLgGgEgEQgFgEAAgCQgFgIgGgDQgGgEgIgCQgHgBgHgCIgKgIIgBgBIgLgEIgBAAQghAHgcAAQgdAAgWgDQgVgDgNgEIgNgDIgJgGQgGgDgCgFQgDgFADgGQADgGAGgCIAEAAIAFACIACAAQgHAEAAAEQABADAFAEIANAGIAOAEIAIACIAYACIAbABQAOAAAKgDQATgFAOgFQAOgGAMgDQANgDALABQAMACAOAJQAGAEAEAFIAHAJQADAFAFAEQALAIAPAGQAOAGAPAEQAPADAOABQBMAEBBgCQBAgCA7gGQA7gGA3gJIBtgSIBwgVQA3gKA7gIIgPAFIgxANIg3AOIg1ANIgsAKIgwAIQg0ANg5ALQg5ALg7AIQg5AHg8ACIgaAAQgvAAgugFg");
	this.shape_15.setTransform(-9.8,11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#638C3B").s().p("AGVBcQgMgKgPgHIh1gmIh8glQg/gTg/gQQg9gQg7gNQg7gMg1gHQg1gHgrgBQgXABgRAHQgRAHgPALIgiAXIAAgBQALgYANgPQAOgOANgIQAOgHAJgCIALgDQBrgCB2AWQB1AWCHAvQAuAQAuARQAtASAuAVIALAFIAXAKIAbANQAOAIAKAIQALAIAEAJQACAGgBAFQgGgOgMgLg");
	this.shape_16.setTransform(4.5,-8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AEJhhQhMgbhQgVQhPgVhQgLQhRgLhSACQAAgBgKADQgJACgPAHQgOAIgPAPQgPAPgKAaQgOAjgLAbQgKAbgKARQgJAQgKAHQgJAIgYAKQgZALgmAKQglAJgyAFQAAAAgCADQgCAEAAAFQAAAGAEAGQAFAGAMAFQAAABANADQAMADAWAEQAWADAdAAQAdAAAhgHQAAAAADABQACABADABQADABAAAAQACABADADQACADADABQAGAEAIACQAHACAHADQAGADAEAIQACADAFAFQAFAEALAFQALAFASAFQATAFAcADQA6AHA7gCQA7gBA4gIQA6gHA6gLQA6gMA5gNQAMgCAVgFQAWgFAbgHQAcgGAdgHQAdgHAcgHQAcgHAXgHQAXgGAPgGQAOgFACgEQAEgIgEgIQgEgJgKgIQgKgIgMgHQgNgGgNgGQgNgGgLgEQgLgFgFgCQhagpheghg");
	this.shape_17.setTransform(-8,-1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#497028").s().p("AjVC2QgcgDgTgFQgSgFgLgFQgLgFgFgEQgFgFgCgDQgEgIgGgDQgHgDgHgCQgIgCgGgEIgFgEIgFgEIgDgBIgFgCIgDgBQghAHgdAAQgdAAgWgDQgWgEgMgDIgNgEQgMgFgFgGQgEgGAAgGQAAgFACgEIACgDQAygFAlgJQAmgKAZgLQAYgKAJgIQAKgHAJgQQAKgRAKgbIAZg+QAKgaAPgPQAPgPAOgIQAPgHAJgCIAKgCQBSgCBRALQBQALBPAVQBQAVBMAbQBeAhBaApIAQAHIAYAKIAaAMQAMAHAKAIQAKAIAEAJQAEAIgEAIQgCAEgOAFQgPAGgXAGIgzAOIg5AOIg5ANIgxAMIghAHQg5ANg6AMQg6ALg6AHQg4AIg7ABIgVABQgwAAgwgGg");
	this.shape_18.setTransform(-8,-1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3C5B1D").s().p("AAXA4QgNgHgQgXQgSgWgVgpIgCgWQAJgBAJAIQAIAJAIAMIAOAbQAIAMAIAJQADAGAFABQAEABAFgCQAEgCAEgFQAFAPABAKQABAMgGAEQgDADgEAAQgGAAgHgEg");
	this.shape_19.setTransform(47.8,10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("Ag2gaQALgSANgUQANgWAPgSQAMgSAPgJQAPgKAOAFQABASgEAPQgFAQgGANQgHANgHALQgJASgGAOQgFANgDAFIgCAIQAAAAAFAJQAEAIAGAOQAHAOAGAPQAHAQAEAOQAFAOABAJQABALgGAFQgHAFgNgHQgNgGgQgXQgSgWgVgr");
	this.shape_20.setTransform(48,2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#497028").s().p("AAVCHQgNgGgQgXQgSgWgVgrIgHhDIAYgmQANgWAPgSQAMgSAPgJQAPgKAOAFQABASgEAPQgFAQgGANQgHANgHALQgJASgGAOIgIASIgCAIIAFAJIAKAWIANAdIALAeQAFAOABAJQABALgGAFQgDACgEAAQgFAAgIgEg");
	this.shape_21.setTransform(48,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJARQgDgHAAgKQAAgJADgHQAFgHAEAAQAGAAADAHQAEAHABAJQgBAKgEAHQgDAGgGABQgEgBgFgGg");
	this.shape_22.setTransform(-33,-5.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E3502").s().p("AgNAqQgGgGgEgLQgEgMAAgNQAAgMAEgLQAEgMAGgGQAHgHAGAAQAIAAAGAHQAGAGAEAMQAEALAAAMQAAANgEAMQgEALgGAGQgGAHgIAAQgGAAgHgHg");
	this.shape_23.setTransform(-34.9,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#638C3B").s().p("AgJAQQAfgJAVgHQAUgIAKgHQALgHAEgEIADgFIgBAFQgBAEgHAIQgGAJgQAIQgOAJgUAGQgTAFgSADIgnAEIgdABIgLABQAwgHAhgJg");
	this.shape_24.setTransform(-50.8,2.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C5B1D").s().p("AgWAuIAMgRQAHgLAEgOQAHgLACgQQACgOgFgOIAEACIAIAIQAEAFADAHQADAHgBAJQgBAJgHAKQgNASgJALQgLAJgHAEIgIAEg");
	this.shape_25.setTransform(-18.2,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAKARQgKgBgIACQgIACgGADIgGADIgBgEIgEgKIgFgMQgDgCACgDQABgCADgBIADAAQALgIALgDQAKgEAIgBIAQgBIAGAAQAJAGACAJQABAIgCAHIgHAPIgDAGQgJgHgLgCg");
	this.shape_26.setTransform(-30.7,-19.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("AgegJIACADQACACAEAEQAFACAHADQAHAEAJACQAKACAOgBIABgBQAAgBgDgDQgDgDgFgEQgFgEgEgH");
	this.shape_27.setTransform(-21.7,16.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3C5B1D").s().p("AAGALQgJgCgHgEIgMgFIgGgGIgCgDIApgCQAEAHAFAEIAIAHIADAEIgBABIgKAAQgIAAgGgBg");
	this.shape_28.setTransform(-21.7,16.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AgiAAQABAAAGAAQAGgBAKgBQAKAAALABQAMABANAD");
	this.shape_29.setTransform(-40.8,10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRBcQgKgFgGgIQgGgHgCgEIgDgGQgGgPgBgSQAAgTADgSQADgUAFgSQAGgTAIgOQAHgNAIgHQAPADAMAKQANALAIAPQAIAQAEARQADATAAAQQgBASgEAPQgFAUgLAQQgLAOgQAIQgLgBgKgGg");
	this.shape_30.setTransform(-34.1,-0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1E8DA").s().p("Ag3BDQgUgJgJgXIgDgGQATAFAWAAQAVAAAYgHQAUgHARgPQARgMAMgUQAMgVAFgWQAEAOACAMQABASgHASQgIAQgOAQQgOAQgTALQgSAMgRAFQgMADgLAAQgNAAgLgEg");
	this.shape_31.setTransform(-29.9,1.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("ABUgjQgHgSgKgQQgKgRgNgLQgOgMgPgEQgPgFgQAGQgGADgGADQgPAKgMAQQgMARgJAVQgIAVgEAVQgEAVABAVQABAVAGAQQAKAWARAJQARAJAVgDQATgDAVgLQAVgLARgRQARgRAJgUQAJgUgCgSQgCgRgGgRg");
	this.shape_32.setTransform(-30.1,-2.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag5BuQgRgJgKgWQgGgQgBgVQgBgVAEgVQAEgVAIgVQAJgVAMgRQAMgQAPgKIAMgGQAQgGAPAFQAPAEAOAMQANALAKARQAKAQAHASQAGARACARQACASgJAUQgJAUgRARQgRARgVALQgVALgTADIgLAAQgOAAgNgGg");
	this.shape_33.setTransform(-30.1,-2.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3C5B1D").s().p("Ai/A1QgcgDgTgFQgSgFgKgFQgLgGgEgEIgFgGQgEgIgHgDQgGgEgHgCQgIgBgGgCIgKgIIgBgBIgLgEIAAAAQghAHgcAAQgcAAgVgDQgWgDgMgEIgMgDIgKgGQgFgDgDgFQgCgFACgGQADgGAHgCIADAAIAFACIACAAQgHAEAAAEQABADAFAEIANAGIANAEIAIACIAYACIAbABQANAAAKgDQASgFAPgFQAOgGALgDQAMgDAMABQAMACANAJQAGAEAEAFIAHAJQADAFAFAEQALAIAOAGQAOAGAPAEQAPADAOABQBKAEBAgCQA/gCA5gGQA6gGA3gJIBrgSIBtgVQA2gKA7gIIgPAFIgwANIg2AOIg0ANIgrAKIgvAIQg0ANg4ALQg4ALg6AIQg3AHg7ACIgaAAQguAAgugFg");
	this.shape_34.setTransform(-8.9,11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#638C3B").s().p("AGOBcQgMgKgPgHIhygmIh7glQg+gTg9gQQg8gQg6gNQg6gMg0gHQg0gHgqgBQgXABgRAHQgQAHgPALIghAXIAAgBQAKgYANgPQAOgOANgIQANgHAKgCIAKgDQBpgCB0AWQBzAWCFAvQAsAQAtARQAtASAtAVIAKAFIAXAKQAOAGANAHQANAIALAIQAKAIAEAJQADAGgCAFQgFgOgMgLg");
	this.shape_35.setTransform(5.2,-8.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("AHJgQQgKgFgGgCQhYgphcghQhLgbhOgVQhOgVhOgLQhQgLhRABQAAAAgJADQgKACgOAHQgOAIgPAPQgOAPgLAaQgNAjgKAbQgLAagJASQgJAQgKAHQgJAIgYAKQgYALglAKQglAJgwAFQgBAAgCADQgBAEgBAFQAAAFAFAHQAEAGAMAFIAMAEQANADAVAEQAVADAdAAQAcAAAhgHIADABQACABADABIACABQADABACADQADADACABQAHAEAHACQAHACAHADQAGADAEAHQACAEAFAEQAFAFAKAFQALAFASAFQATAFAbADQA6AHA5gCQA6gBA3gIQA5gHA5gLQA5gMA3gNQAMgCAVgFQAWgFAbgHQAagGAdgHQAdgHAcgHQAbgHAXgHQAWgHAOgFQAOgFACgEQAEgIgEgIQgEgJgJgIQgKgIgMgIQgNgFgNgGQgMgGgLgEg");
	this.shape_36.setTransform(-7.1,-1.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#497028").s().p("AjRC2QgbgDgTgFQgSgFgLgFQgKgFgFgFQgFgEgCgEQgEgHgGgDIgOgFQgHgCgHgEIgFgEIgFgEIgCgBIgFgCIgDgBQghAHgcAAQgdAAgVgDIgigHIgMgEQgMgFgEgGQgFgHAAgFIACgJIADgDQAwgFAlgJQAlgKAYgLQAYgKAJgIQAKgHAJgQQAJgSALgaIAXg+QALgaAOgPQAPgPAOgIQAOgHAKgCIAJgDQBRgBBQALQBOALBOAVQBOAVBLAbQBcAhBYApIAQAHIAXAKIAaALQAMAIAKAIQAJAIAEAJQAEAIgEAIQgCAEgOAFIgkAMIgyAOIg5AOIg3ANIgxAMIghAHQg3ANg5AMQg5ALg5AHQg3AIg6ABIgWABQguAAgvgGg");
	this.shape_37.setTransform(-7.1,-1.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3C5B1D").s().p("AAgAlQgSgEgXgPQgYgQgegbIgCgOQANgBALAGQAMAFALAJIAUASQAKAHAMAHQAEADAGABQAGABAGgBQAHgCAFgDQAHAKABAHQABAHgJAEIgIABQgIAAgKgDg");
	this.shape_38.setTransform(51.8,7.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2,1,1).p("AHRgQQgKgFgGgCQhagphdghQhNgbhQgVQhPgVhQgLQhRgLhSABQgBAAgJADQgKACgNAHQgPAIgPAPQgPAPgLAaQgNAjgLAbQgLAagJASQgJAQgKAHQgJAIgZAKQgYALgmAKQglAJgyAFQAAAAgCADQgCAEAAAFQAAAFAEAHQAFAGAMAFQAAAAANAEQAMADAWAEQAWADAdAAQAdAAAhgHQAAAAADABQACABADABIACABQADABADADQACADADABQAGAEAHACQAIACAGADQAHADAEAHQABAEAFAEQAGAFALAFQALAFASAFQATAFAcADQA6AHA7gCQA6gBA5gIQA7gHA6gLQA5gMA5gNQAMgCAWgFQAVgFAbgHQAcgGAdgHQAegHAcgHQAcgHAXgHQAXgHAOgFQAOgFACgEQAEgIgEgIQgEgJgKgIQgJgIgNgIQgNgFgNgGQgNgGgLgEg");
	this.shape_39.setTransform(-8,-1.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#497028").s().p("AjVC2QgcgDgTgFQgSgFgLgFQgLgFgGgFQgEgEgCgEQgEgHgHgDIgNgFQgIgCgGgEIgFgEIgFgEIgDgBIgFgCIgDgBQghAHgdAAQgdAAgWgDIgigHIgNgEQgMgFgFgGQgEgHAAgFQABgFACgEIABgDQAygFAmgJQAmgKAYgLQAYgKAJgIQAKgHAJgQQAKgSALgaIAXg+QAMgaAOgPQAPgPAPgIQANgHAKgCIAKgDQBSgBBRALQBQALBPAVQBQAVBNAbQBdAhBZApIARAHIAYAKIAZALQAOAIAJAIQAKAIAEAJQAEAIgEAIQgCAEgOAFIgmAMIgyAOIg6AOIg5ANIgwAMIgiAHQg5ANg6AMQg6ALg6AHQg5AIg6ABIgWABQgvAAgwgGg");
	this.shape_40.setTransform(-8,-1.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3C5B1D").s().p("AgXAuIANgSQAHgKAFgOQAGgMACgPQACgOgEgOIADACIAIAIQAFAFADAGQACAIAAAJQgBAJgIAJQgNATgJALQgMAJgHAEIgHAEIAFgGg");
	this.shape_41.setTransform(-19.3,0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3C5B1D").s().p("Ag4A4QgUgHgKgUIgDgFQAUAEAVAAQAWAAAYgGQAVgGASgMQARgKAMgSQAMgRAFgTQAEAMACALQACAPgIAPQgIAOgOANQgPANgSAKQgTAKgRAEQgNAEgLAAQgNAAgLgFg");
	this.shape_42.setTransform(-31.2,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhBBQQgOgIgLgUQgDgIgCgJQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIADAAIABACQACAIADAHQAJASARAHQAQAHAVgCQAVgDATgJQAVgJAQgOQARgOAKgQQAJgPgCgQIAAAAQgDgOgGgOQgHgPgKgNIgHgJIgBgCIABgCIACgBIACABIAIAJQALAOAHAQQAGAPADAOQACASgGARQgHATgSARQgSAQgZAJQgYAJgZABIgHAAQgUAAgNgIg");
	this.shape_43.setTransform(-31.3,-2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgJASQgEgIAAgKQAAgJAEgIQAEgIAFABQAFgBAEAIQAEAIABAJQgBAKgEAIQgEAIgFgBQgFABgEgIg");
	this.shape_44.setTransform(-34.4,-6.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E3502").s().p("AgNAuQgGgHgEgMQgEgMAAgPQAAgNAEgMQAEgMAGgHQAHgIAGAAQAIAAAGAIQAHAHAEAMQADAMAAANQAAAPgDAMQgEAMgHAHQgGAHgIAAQgGAAgHgHg");
	this.shape_45.setTransform(-36.4,-0.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRBkQgKgHgGgGIgJgOIgDgFQgGgRgBgTQAAgVADgUQADgWAGgTQAFgUAIgPQAIgOAIgIQAPADANAMQAMALAIARQAJAQADAUQAEATAAARQgBATgEARQgFAWgMAQQgLARgQAIQgLgBgKgGg");
	this.shape_46.setTransform(-35.5,-1.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1E8DA").s().p("Ag4BIQgUgJgKgZIgCgHQATAGAWAAQAWgBAYgHQAUgHASgQQARgOAMgWQAMgWAFgYQAFAPABANQACAUgIATQgHASgPARQgPARgSAMQgSANgSAGQgNADgLAAQgNAAgLgFg");
	this.shape_47.setTransform(-31.2,1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("ABVgmQgHgTgKgSQgKgRgOgNQgNgNgQgFQgPgEgRAGQgGADgGAEQgPAKgMASQgNASgIAXQgJAWgEAXQgEAXABAXQABAWAGARQAKAZASAJQARAJAVgDQAUgCAVgNQAVgMARgSQASgSAJgWQAKgVgCgUQgCgSgHgTg");
	this.shape_48.setTransform(-31.4,-3.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag6B3QgSgJgKgZQgGgRgBgWQgBgXAEgXQAEgXAJgWQAIgXANgSQAMgSAPgKIAMgHQARgGAPAEQAQAFANANQAOANAKARQAKASAHATQAHATACASQACAUgKAVQgJAWgSASQgRASgVAMQgVANgUACIgKABQgPAAgNgHg");
	this.shape_49.setTransform(-31.4,-3.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#638C3B").s().p("AGWBcQgNgKgOgGQg4gUg9gTIh9glQg/gSg/gRQg9gQg7gNQg7gMg1gHQg0gHgsAAQgXAAgRAHQgRAHgPALIgiAXIABAAQAKgZANgOQAOgPANgHQAOgIAKgCIALgDQBqgCB3AWQB0AWCHAvQAuARAuAQQAuATAtAUIALAFIAXAKIAbANQAOAIAKAIQALAIAEAJQADAGgCAFQgFgOgMgLg");
	this.shape_50.setTransform(4.5,-8.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2,1,1).p("AIcAOQgGgEgGgEQgNgGgNgFQgNgHgLgEQgLgFgFgCQhagphdghQhNgbhQgVQhPgVhPgLQhSgLhSACQAAgBgKADQgJACgPAHQgOAIgPAPQgPAPgKAbQgOAigLAbQgLAbgJARQgJAQgJAHQgKAIgYAKQgZALglAKQgmAJgyAFQAAAAgCADQgCAEAAAFQAAAGAEAGQAFAGAMAGIANADQAMAEAWADQAWADAdAAQAdAAAhgHQAAAAADABQACABADABQACABABAAQACABADADQACADADABQAGAEAHACQAIACAHADQAGADAEAIQACADAFAFQAFAEALAFQALAGASAEQATAFAcADQA6AHA7gBQA7gCA4gHQA6gIA6gLQA6gLA4gNQANgDAVgFQAWgFAbgGQAcgHAdgGQAdgIAcgHQAcgHAXgHQASgFAMgE");
	this.shape_51.setTransform(-9.3,-1.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#497028").s().p("AjVC2QgcgDgTgFQgSgEgLgGQgLgFgFgEIgHgIQgEgIgGgDQgHgDgIgCQgHgCgGgEIgFgEIgFgEIgDgBIgFgCIgDgBQghAHgdAAQgdAAgWgDQgWgDgMgEIgNgDQgMgGgFgGQgEgGAAgGQAAgFACgEIACgDQAygFAmgJQAlgKAZgLQAYgKAKgIQAJgHAJgQQAJgRALgbIAZg9QAKgbAPgPQAPgPAOgIQAPgHAJgCIAKgCQBSgCBSALQBPALBPAVQBQAVBNAbQBdAhBaApIAQAHIAYALQANAFANAGIAMAIIAKAHQAKAIAEAJQAEAIgEAIQgCAEgPAFIgHADIgeAJIgzAOIg5APIg5ANIgxALIgiAIQg4ANg6ALQg6ALg6AIQg4AHg7ACIgVAAQgwAAgwgGg");
	this.shape_52.setTransform(-8,-1.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3C5B1D").s().p("AAZAnQgPgEgRgQQgTgQgYgdIgCgPQAKAAAKAFQAJAGAIAJIAQATQAIAIAJAGQAEAEAFABIAJAAQAFgCAEgDQAGAKABAHQABAIgHAEIgHABQgGAAgIgDg");
	this.shape_53.setTransform(48.9,7.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2,1,1).p("Ag6gSQALgMAOgPQAPgPAQgNQAOgNAQgGQAQgHAPADQABANgFALQgEALgIAJQgHAJgHAIQgLANgGAJQgGAKgCADIgDAFQABABAEAGQAFAGAHAJQAHAKAHALQAHALAFAKQAFAKABAGQACAIgIAEQgHADgOgFQgOgEgSgQQgTgQgXgf");
	this.shape_54.setTransform(49.1,2.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#497028").s().p("AAXBfQgOgEgSgQQgTgQgXgfIgHguIAZgbQAPgPAQgNQAOgNAQgGQAQgHAPADQABANgFALQgEALgIAJIgOARQgLANgGAJIgIANIgDAFIAFAHIAMAPIAOAVQAHALAFAKQAFAKABAGQACAIgIAEQgDABgEAAQgGAAgIgDg");
	this.shape_55.setTransform(49.1,2.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2,1,1).p("AgegKIACADQACADAEAEQAEACAIAEQAHAEAJACQAKADAPgCQAAABAAgCQABgBgDgDQgEgDgFgFQgFgFgDgI");
	this.shape_56.setTransform(-22.8,16.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3C5B1D").s().p("AAGAMQgJgCgHgEQgIgEgEgCIgGgHIgCgDIAqgDQADAIAFAFIAJAIQADADgBABIAAABIgLABQgIAAgGgCg");
	this.shape_57.setTransform(-22.8,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-32.1,y:-19.7}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},6).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-32.1,y:-19.7}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_38},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_16},{t:this.shape_15},{t:this.shape_43},{t:this.shape_42},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-31,y:-17.4}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_38},{t:this.shape_41},{t:this.shape_2}]},2).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_15},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-32.1,y:-19.7}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_45},{t:this.shape_44}]},4).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_57},{t:this.shape_56},{t:this.shape_7,p:{x:-32.1,y:-19.7}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(4));

	// water_anim2
	this.instance = new lib.bubblewater_anim();
	this.instance.setTransform(-49.9,-2.1,0.244,0.244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-22.3,126.2,43.2);


(lib.fish3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lefttoright:3,righttoleft:5});

	// timeline functions:
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(2));

	// water_anim2
	this.instance = new lib.fish3left();
	this.instance.setTransform(33.3,-5.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AAwhQQAOAZAEAgQACAMAAALQAAAMgCAMQgEAhgOAYQgOAYgTAHQgIADgHAAQgGAAgIgDQgTgHgPgYQgTghAAgwQAAgvATghQAVgiAbAAQAcAAAUAigAAGAAQAHABAFAIQAGAJAAAMQAAAMgGAJQgGAJgIAAQgFAAgGgJQgGgJAAgMQAAgHADgF");
	this.shape.setTransform(-25,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgBAZQgGgBgEgHQgFgHABgKQgBgKAFgHQAFgHAGAAQAGAAAFAHQAFAHAAAKIgBAHIgEAKQgFAIgGAAIgBAAg");
	this.shape_1.setTransform(-25.9,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgbA0QgMgXAAgdQAAgdAMgVQAMgVAPAAQAQAAAMAVQAMAVAAAdQAAAdgMAXQgMAUgQAAQgPAAgMgUgAgNAOQAAALAGAJQAGAKAFAAQAIAAAGgKQAGgJAAgLQAAgNgGgHQgFgIgHgBIABgIQAAgLgFgHQgDgHgHAAQgHAAgFAHQgFAHABALQgBALAFAHQAEAFAGABQgDAFAAAIIAAAAgAgHAiQgGgJAAgLQAAgIADgFIACAAQAHAAADgGIAEgKQAHABAFAIQAGAHAAANQAAALgGAJQgGAKgIAAQgFAAgGgKgAAGgPIAAAAg");
	this.shape_2.setTransform(-25,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBwQgTgHgPgYQgTghAAgwQAAgvATghQAVgiAbAAQAcAAAUAiQAOAZAEAgQACAMAAALQAAAMgCAMQgEAhgOAYQgOAYgTAHQgIADgHAAQgGAAgIgDgAgbghQgMAVAAAcQAAAeAMAWQAMAVAPAAQAQAAAMgVQAMgWAAgeQAAgcgMgVQgMgVgQAAQgPAAgMAVg");
	this.shape_3.setTransform(-25,-6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.8,1,1).p("AgthLQATghAaABQAagBATAhQATAfAAAsQAAAtgTAfQgTAggaAAQgaAAgTggQgSgfAAgtQAAgsASgfgAAFAAQAHAAAFAIQAGAIAAANQAAALgGAIQgFAIgHAAQgGAAgGgIQgFgIAAgLQAAgHACgG");
	this.shape_4.setTransform(-43.4,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgCAXQgEgBgEgGQgFgGABgKQgBgKAFgGQAFgHAFAAQAGAAAFAHQAEAGAAAKIgBAHQgBAFgCAEQgFAHgGABIgCgBg");
	this.shape_5.setTransform(-44.2,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgaAwQgLgUAAgcQAAgbALgUQALgUAPAAQAQAAALAUQALAUAAAbQAAAcgLAUQgLAUgQAAQgPAAgLgUgAgMANQAAALAFAJQAGAHAGABQAHgBAFgHQAGgJAAgLQAAgMgGgHQgFgIgHAAIACgHQAAgLgFgHQgDgGgGgBQgHABgFAGQgEAHAAALQAAAKAEAHQAEAEAFAAQgCAGAAAHIAAAAgAgHAhQgFgJAAgLQAAgHACgGIADABQAGgBADgEQADgFAAgFQAHAAAFAIQAGAHAAAMQAAALgGAJQgFAHgHABQgGgBgGgHgAAFgOIAAAAg");
	this.shape_6.setTransform(-43.4,-3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBMQgSgfAAgtQAAgsASgfQATghAaABQAagBATAhQATAfAAAsQAAAtgTAfQgTAggaAAQgaAAgTgggAgagfQgLAUAAAaQAAAdALAUQALAUAPAAQAQAAALgUQALgUAAgdQAAgagLgUQgLgUgQAAQgPAAgLAUg");
	this.shape_7.setTransform(-43.4,-5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.8,1,1).p("ADDhEQAOgYAXgZQAbgdAWgIQAGAfAAALQAAA7guAoQA4AgAGA8QgHADgSAAQgbAAgYgbQgQgSgHgSQgBgDgBgDAjSi6QAaAHALAIQgDAGgEAMQgDAKgHAAQgEgBgOgFQgQAAgMACQgMABgGADIguAAQAAgJgCAAIAAgqIA1AAQAWAEARAEgAjriQQgyAyACBSQACBPAhAvQADAFAEAFQAAABABABQAMAPARAOQADACACADQACABACACQAjAcA5AdABQiaQgaAIghARQgKAAgDgHQgFgIgKgEQAFgEAYgcQAHgHAGgGQAPgPAIgEQAbgMAEAAQASAAACADQABACALAnIAAASQgNAAgSAFQgFABgFACQACACACADIABAAQARAUANAnQAMAiADAdQABAIAAAIQABADAAAFQAAAugJAaQgHAQgOAVQAZgKAhgfQAUgTAYgbAAZjKQgaghhLgJQhMgIg4AzABUiVQAEgEADAAQASgBBWBWQgCACgBADABiBwQABgCABgBQABgCABgBABiBwQgBABgBACQgEAFgEAGQgFAHgGAIQgCABgBACQASgDAiAAQAZABAAgOQgEgHAAgDQggAAgRgGgAggDgQAHgUACgeQAAgIAXgoAggDgQgIAWgYAAQgYgBgHgGQgHgHgDgNQAAgBAAAAQgFgVgdg2ABKCQQgPARggAaQgSAPgMAJQgSAMgLABAjxB8QgEALgWAAQgMAAgTgBQgIAXAtADQApgBAOAB");
	this.shape_8.setTransform(-26.8,-5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003300").s().p("ABjAoQgFgIgMgEIAegeIAOgNQAPgPAHgEQAcgMAEAAQASAAACADIAMApIAAAQQgOAAgRAFIgKADQgaAIgiARQgKAAgCgHgAh1AbQgQAAgMACQgMABgGADIguAAQAAgJgCAAIAAgoIA1AAQAWAEAQAEQAbAHAKAGQgDAGgDAMQgEAKgGAAQgEgBgOgFg");
	this.shape_9.setTransform(-35.8,-23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#497028").s().p("AhBD2QgYgBgHgGQgIgHgCgNIgBgBQgEgVgdg2QAdA2AEAVIABABIgGABQg4gdgkgcIgDgDIgFgFQgRgOgNgPIgBgCIgHgKQgggvgChPQgDhSAygyIAAgDQALgCARAAQANAFAFABQAGAAAEgKQADgMADgGQgLgIgagHIADgPQA4gzBLAIQBMAJAZAhIAKAJIgNANIgcAgQAKAEAEAIQADAHAKAAQAigRAagIIAEAFIAAAAQARAUAOAnQAMAiADAdIABAQIAAAIQAAAugJAaQgGAQgOAVIgCADIgCADQAQAGAhAAQAAADADAHQAAAOgYgBQgjAAgRADIACgDIAMgPIAIgLIACgDIgCADIgIALIgMAPIgCADQgPARghAaQgSAPgLAJQgSAMgLABQAGgUACgeQAAgIAZgoQgZAoAAAIQgCAegGAUQgIAWgXAAIgBAAgAhqDbIAAAAgAkrCGIAeABQAXAAADgLIABACQANAPARAOIAFAFQgOgBgqABQgtgDAJgXgAB5BFQAJgaAAguIAAgIIgBgQQgDgdgMgiQgOgngRgUIAAAAQADgEADAAQASgBBWBWIgDAFIADgFQAOgYAXgZQAbgdAXgIQAFAfAAALQAAA7gtAoQA4AgAFA8QgHADgRAAQgbAAgYgbQgQgSgHgSIgDgGIADAGQgYAbgUATQgiAfgYAKQAOgVAGgQgADLATIAAAAg");
	this.shape_10.setTransform(-26.6,-5.4);

	this.instance_1 = new lib.fish3right();
	this.instance_1.setTransform(-31.7,-5.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.8,1,1).p("AgvhQQgOAZgEAgQgCAMAAALQAAAMACAMQAEAhAOAYQAOAYATAHQAIADAGAAQAHAAAIgDQATgHAPgYQATghAAgwQAAgvgTghQgVgigcAAQgbAAgUAigAgFAAQgHABgFAIQgGAJAAAMQAAAMAGAJQAGAJAIAAQAFAAAGgJQAGgJAAgMQAAgHgDgF");
	this.shape_11.setTransform(9.4,-13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBwQgTgHgOgYQgOgYgEghQgCgMAAgMQAAgLACgMQAEggAOgZQAUgiAbAAQAcAAAVAiQATAhAAAvQAAAwgTAhQgPAYgTAHQgIADgHAAQgGAAgIgDgAgbghQgMAVAAAcQAAAeAMAWQAMAVAPAAQAQAAAMgVQAMgWAAgeQAAgcgMgVQgMgVgQAAQgPAAgMAVg");
	this.shape_12.setTransform(9.4,-13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgbAzQgMgVAAgeQAAgdAMgUQAMgWAPAAQAQAAAMAWQAMAUAAAdQAAAegMAVQgMAVgQAAQgPAAgMgVgAgDArQAFABAGgKQAGgJAAgLQAAgIgDgFQAGgBAEgEQAFgIgBgLQABgLgFgGQgFgIgHAAQgHAAgDAIQgFAGAAALIABAIQgHABgFAIQgGAHAAANQAAALAGAJQAGAKAIgBIAAAAgAgDArQgIABgGgKQgGgJAAgLQAAgNAGgHQAFgIAHgBIAEALQADAFAHAAIACAAQADAFAAAIQAAALgGAJQgGAKgFgBIAAAAgAgFgPIAAAAg");
	this.shape_13.setTransform(9.4,-11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AAAAZQgFAAgFgHIgEgLIgBgHQAAgKAFgGQAFgIAFAAQAHAAAFAIQAFAGgBAKQABAKgFAIQgEAFgGACIgCAAg");
	this.shape_14.setTransform(10.3,-13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.8,1,1).p("AAuhLQgTghgbABQgZgBgTAhQgTAfAAAsQAAAtATAfQATAgAZAAQAbAAATggQASgfAAgtQAAgsgSgfgAgEAAQgHAAgFAIQgGAIAAANQAAALAGAIQAFAIAHAAQAGAAAGgIQAFgIAAgLQAAgHgCgG");
	this.shape_15.setTransform(27.8,-12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AgKAQQgDgEAAgFIgBgHQAAgKAEgGQAFgHAFAAQAGAAAFAHQAEAGAAAKQAAAKgEAGQgDAGgFABIgDABQgFgBgFgHg");
	this.shape_16.setTransform(28.7,-13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgaAwQgLgUAAgcQAAgbALgUQALgUAPAAQAQAAALAUQALAUAAAbQAAAcgLAUQgLAUgQAAQgPAAgLgUgAgEAoQAGABAGgJQAFgIAAgLQAAgHgCgFQAFgBAEgEQAEgHAAgKQAAgLgEgHQgFgGgHgBQgGABgDAGQgFAHAAALIACAHQgHAAgFAIQgGAHAAAMQAAALAGAIQAFAJAHgBIAAAAgAgEAoQgHABgFgJQgGgIAAgLQAAgMAGgHQAFgIAHAAQAAAFADAFQADAEAGABIADAAQACAFAAAHQAAALgFAIQgGAJgGgBIAAAAgAgEgOIAAAAg");
	this.shape_17.setTransform(27.8,-10.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsBMQgTgfAAgtQAAgsATgfQATghAZABQAbgBATAhQASAfAAAsQAAAtgSAfQgTAggbAAQgZAAgTgggAgagfQgLAUAAAaQAAAdALAUQALAUAPAAQAQAAALgUQALgUAAgdQAAgagLgUQgLgUgQAAQgPAAgLAUg");
	this.shape_18.setTransform(27.8,-12.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.8,1,1).p("ADTi6QgaAHgLAIQADAGAEAMQADAKAHAAQAEgBAOgFQAQAAAMACQAMABAGADIAuAAQAAgJACAAIAAgqIg1AAQgWAEgRAEgAhPiaQAaAIAhARQAKAAADgHQAFgIAKgEQgFgEgYgcQgHgHgGgGQgPgPgIgEQgbgMgEAAQgSAAgCADQgBACgLAnIAAASQANAAASAFQAFABAFACQgCACgCADIgBAAQgRAUgNAnQgMAigDAdQgBAIAAAIQgBADAAAFQAAAuAJAaQAHAQAOAVQgZgKghgfQgUgTgYgbAhTiVQgEgEgDAAQgSgBhWBWQACACABADAgYjKQAaghBLgJQBMgIA4AzAhhBwQABABABACQAEAFAEAGQAFAHAGAIQACABABACQAPARAgAaQASAPAMAJQASAMALABQgHgUgCgeQAAgIgYgoAhhBwQgBgCgBgBQgBgCgBgBADsiQQAyAygCBSQgCBPghAvQgDAFgEAFQAAABgBABQgMAPgRAOQgDACgCADADyB8QAEALAWAAQAMAAATgBQAIAXgtADQgpgBgOABQgCABgCACQgjAcg5AdAAhDgQAIAWAYAAQAYgBAHgGQAHgHADgNQAAgBAAAAQAFgVAdg2AjChEQgOgYgXgZQgbgdgWgIQgGAfAAALQAAA7AuAoQg4AggGA8QAHADASAAQAbAAAYgbQAQgSAHgSQABgDABgDAhJCQQgSgDgiAAQgZABAAgOQAEgHAAgDQAgAAARgG");
	this.shape_19.setTransform(11.2,-12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#497028").s().p("AAiDgQgGgUgCgeQAAgIgZgoQAZAoAAAIQACAeAGAUQgLgBgSgMQgLgJgSgPQghgagPgRIgCgDIgMgPIgIgLIgCgDIgCgDIgCgDQgOgVgGgQQgJgaAAguIAAgIIABgQQADgdAMgiQAOgnARgUIAAAAIAEgFQAaAIAiARQAKAAADgHQAEgIAKgEIgcggIgNgNIAKgJQAZghBMgJQBLgIA4AzIADAPQgaAHgLAIQADAGADAMQAEAKAGAAQAFgBANgFQARAAALACIAAADQAyAygDBSQgCBPggAvIgHAKIgBACQgNAPgRAOIgFAFIAFgFQARgOANgPIABgCQADALAXAAIAegBQAJAXgtADQgqgBgOABIgDADQgkAcg4AdIgGgBIABgBQAEgVAdg2QgdA2gEAVIgBABQgCANgIAHQgHAGgYABIgBAAQgXAAgIgWgAh8CNQgYABAAgOQADgHAAgDQAhAAAQgGIACADIAIALIAMAPIACADQgRgDgjAAgAieBBQgUgTgYgbIADgGIgDAGQgHASgQASQgYAbgbAAQgRAAgHgDQAFg8A4ggQgtgoAAg7QAAgLAFgfQAXAIAbAdQAXAZAOAYQBWhWASABQADAAADAEIAAAAQgRAUgOAnQgMAigDAdIgBAQIAAAIQAAAuAJAaQAGAQAOAVQgYgKgigfgAi9g/IgDgFIADAFg");
	this.shape_20.setTransform(11,-12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003300").s().p("AiqAWIgJgDQgSgFgOAAIAAgQIAMgpQACgDASAAQAFAAAaAMQAJAEAPAPIAMANIAfAeQgMAEgFAIQgDAHgJAAQgigRgagIgACkAhQgGgDgMgBQgLgCgRAAQgNAFgFABQgHAAgDgKQgDgMgEgGQAMgGAZgHQARgEAXgEIA0AAIAAAoQgCAAAAAJg");
	this.shape_21.setTransform(20.3,-30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// Layer 3
	this.text = new cjs.Text("sdfadf", "bold 14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 121;
	this.text.setTransform(29.5,9.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({x:-33,y:16},0).wait(1).to({x:-34,y:10},0).wait(1).to({x:11,y:8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-28.1,126.2,61.4);


(lib.fish2right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F6E87").s().p("AAAACQAFgMADgQQAIADACADIACAEIAAABIgBAGQgCAFgFAGQgEAHgHAHQgHAHgNAEQAMgKAHgPg");
	this.shape.setTransform(20.8,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgWgZQAAgCACAAQADgDAHgBQAIgBAHAAQAKABAIACQAJADADADQADADAAADIABACQAAABgCAGQgBAGgFAFQgFAIgIAHQgIAIgNAEQgOAEgVgCQACgEADgJQAEgJADgKQADgMABgNg");
	this.shape_1.setTransform(19.1,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#167FA3").s().p("AgmAgIAGgNIAGgTQADgMABgNQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAEgDAHgBQAIgBAHAAQAKABAIACQAJADADADQADADAAADIABACIgCAHQgBAGgFAFQgFAIgIAHQgIAIgNAEQgKADgOAAIgLgBg");
	this.shape_2.setTransform(19.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgYgaQgBAQgEAMQgEAOgEAJQgDAJAAAAQAWACAPgEQAOgEAJgIQAJgIAEgIQAFgHACgFIABgGQAAgBAAgCQAAgDgDgEQgEgEgKgDQgKgDgLAAQgKAAgIACQgIACgBAEg");
	this.shape_3.setTransform(19,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#167FA3").s().p("AgpAiIAFgJQADgJAFgOQAEgMAAgQQABgEAIgCQAIgCAJAAQAMAAAKADQAKADADAEQAEAEABADIAAADIgCAGQgCAFgEAHQgFAIgKAIQgIAIgOAEQgKADgOAAIgOgBg");
	this.shape_4.setTransform(19,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AgXg8QASAGAOAJQAOAHANAKQAEAEAEAEQADAEAFACQAEACAGgCIgNAPIALATQgHgDgGADQgGACgGAEQgFAEgGAEQgSAKgSAIQgYAKgZAIQABAAAFgDQAGgEAJgGQAKgGAJgIQAJgIAGgLQAGgKAAgLQAAgJgEgMQgGgKgJgKQgJgJgJgHQgJgHgGgEQgHgEAAAAQASADASAGg");
	this.shape_5.setTransform(-51.5,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#167FA3").s().p("Ag3BDIAPgKQAKgGAJgIQAJgJAGgKQAGgKAAgMQAAgIgEgMQgGgLgJgIQgJgKgJgHIgPgLIgHgEQASAEASAFQASAGAOAJQAOAHANALIAIAHQADAEAFACQAEACAGgCIgNAOIALATQgHgCgGACQgGADgGAEIgLAIQgSAKgSAIQgYAKgZAIIAGgDgAg7hFIAAAAIAAAAg");
	this.shape_6.setTransform(-51.5,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAHIgDgHQgBgBADgDQAEgDAJgBIgEACQgEACAAAEQgDACACAHIgDgCgAAIgIIAAAAIAAAAg");
	this.shape_7.setTransform(36.6,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#40A9C6").s().p("AgcAXIgCgCIgBgGIgCgOQgBgGADgHQACgHAGgDQAHgDAJADQAHACAJAFIAQAJIAKAGIgBAAQgKgEgKgEQgLgEgHAAQgKAAgHAHQgIAFACAHQABAJAHAJQgHgBgCgBg");
	this.shape_8.setTransform(14.1,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AggAVIABACQACACAGABQAHABANgBQAMgBAYgGIAEgUQAAgBgHgEQgHgFgKgFQgKgFgJgDQgKgDgIADQgHADgDAIQgCAHABAHQAAAIABAGg");
	this.shape_9.setTransform(14.1,-1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#167FA3").s().p("AgXAaQgGgBgCgCIgBgCIgCgGIgBgOQgBgHACgHQADgIAHgDQAIgDAKADQAJADAKAFQAKAFAHAFIAHAFIgEAUQgYAGgMABIgMABIgIgBg");
	this.shape_10.setTransform(14.1,-1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AA5AdQAAAAgKAAQgJAAgQgEQgRgEgTgNQgUgKgWga");
	this.shape_11.setTransform(43.8,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoAXIAIgCIASgFQAKgDAHgFQALgHAIgFIALgNIAFgGIADACIgEAGIgKANQgIAGgKAHQgJAHgMAEQgIACgJAAIgLgBg");
	this.shape_12.setTransform(36.3,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAMQgEgEgCgGQgBgEABgFQACgFADgBQADgBADAEQAEADACAGQABAEgBAFQgCAFgDABIgCAAQgCAAgCgCg");
	this.shape_13.setTransform(37.4,-3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#635311").s().p("AgFAUQgFgGgCgJQgEgLADgKQADgKAIgCQAEgCAGAEQADAGACAIQAEANgCAMQgDAMgIAEQgEgCgFgHg");
	this.shape_14.setTransform(38.1,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAhQgIgKgDgOQgEgMABgLQABgMAEgIQAFgIAIgDQAIgCAJAGQAGAKADAMQAEAPAAAMQgBAOgFAKQgFAKgIAEQgHgEgIgJg");
	this.shape_15.setTransform(38.1,-1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgkAKQAFARAJAMQAJANALAFQAIAGALgDQALgDAGgKQAGgLABgPQABgPgFgPQgEgRgJgNQgJgMgLgGQgJgFgKACQgLADgGALQgGAKgCAQQgBAPAFAPg");
	this.shape_16.setTransform(36.6,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCA5QgLgFgJgNQgJgMgFgRQgFgPABgPQACgQAGgKQAGgLALgDQAKgCAJAFQALAGAJAMQAJANAEARQAFAPgBAPQgBAPgGALQgGAKgLADIgHABQgHAAgFgEg");
	this.shape_17.setTransform(36.6,-2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEAfQgDAAgFgDIgHgGIgEgEIgBgGQgBgGAAgHQABgIAEgJQAEgIAKgEIAEAAIAIACQAFACAGAEQAFAEAEAHIgFAEIgJAJQgGAGgEAHQgCAGAAAGQAAAEgDAAIgBAAg");
	this.shape_18.setTransform(35.4,-12.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLApQgOgagDgSQgDgUAGgPQAFgPAJgKQAJgKAIgGQAKgHAHgCIAHgDIgFAEIgNAKIgNAPQgIAIgFALQgFAKgBAMQAAATAFAQQAFATAIAPQAFAQAIAMIAMAQQgXgcgLgXg");
	this.shape_19.setTransform(21.5,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCB244").s().p("ADuBvQgngFgpgRQgpgSgnghIgBgBIgBAAIgUgDIgugIIhAgNIhRgQIhXgWIhUgYIg7gRIg7gRIgRgDIgVgEIgZgGQgNgDgKgFQgIgEgDgFIAAgBQA6AEA6AJQA5AJA5ANIB0AcIAHABIATAFIAYAGIAZAFIATAFIAHABIAEACIALACIAKADIAEABIAoALQARAEAUABQAUAAATgHQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIACgFIgCgHIgBgIQAaAgAjAYQAkAYApANQApAMArABQArABAqgLIgBgBIgLgJIgNgKIgJgIQAVALAaADQAaADAagGQAagHAWgPQAQgNAGgNQAHAHgBAKIAAADQAAAMgJAJQgHAKgMAHQgLAGgMAFIgSAGIgJACIgHACIAFAFIAIAJQADAFAAAFIAAABQAAADgGABQgHACgHgCQgGgCgFgDQgHgDgHgCQgIgCgHAEQgGADgWAFQgVAFghADIgSAAQgZAAgdgEg");
	this.shape_20.setTransform(5.1,8.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCEDAE").s().p("AlmAXIAigIQBOgRBQgKQBQgKBQgBIEYgJQApgBAfAKQAfAJAUAQQgugYgoALIgBAAQgJgDgKgCQgKgBgLABIgfAGIgdAEQgrACgsAAIhXgBQhDgBhFABQhFABhGAGQhGAHhFAUIgFABIgNADIAmgKg");
	this.shape_21.setTransform(-1.5,-9.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AnxhYQAGgBAFgCQAvgPAwgKQBPgTBQgKQBQgKBQgCIEWgIQADAAALAAQALAAAPABQAQACASAFQARAFARAJQARAKANAQQAAAAAHAJQAHAKALAOQAMANANAPQAOAPAOAKQALAJAOAIQAOAIAOAHQAOAJAMAKQAMAJAGAMQAHALAAANQgBAOgJAKQgIAKgMAHQgMAIgMAEQgMAFgIACQgHACgBAAQABAAADAEQADAEADAFQADAGgBAFQgBAFgIACQgIACgHgCQgHgCgHgDQgGgEgGgBQgGgCgGADQgEADgQAEQgQAEgYADQgZADgeAAQgfgBgjgHQgigHgjgRQgjgRgigdQgBAAgQgDQgQgDgdgFQgbgFgmgIQgmgIgsgKQgrgKgugNQgygOgzgNQgygOgzgOQgFgBgLgCQgKgCgOgCQgNgDgNgEQgNgEgJgEQgJgFgDgGQgBgGAIgIQADgDAGgCQAGgCAGgCg");
	this.shape_22.setTransform(5,3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE473").s().p("AEXCmQgfgBgjgHQgigHgjgRQgjgRgigdIgRgDIgtgIIhBgNIhSgSQgrgKgugNIhlgbIhlgcIgQgDIgYgEIgagHQgNgEgJgEQgJgFgDgGQgBgGAIgIQADgDAGgCIAMgEIALgDQAvgPAwgKQBPgTBQgKQBQgKBQgCIEWgIIAOAAIAaABQAQACASAFQARAFARAJQARAKANAQIAHAJIASAYIAZAcQAOAPAOAKQALAJAOAIIAcAPQAOAJAMAKQAMAJAGAMQAHALAAANQgBAOgJAKQgIAKgMAHQgMAIgMAEIgUAHIgIACIAEAEIAGAJQADAGgBAFQgBAFgIACQgIACgHgCIgOgFQgGgEgGgBQgGgCgGADQgEADgQAEQgQAEgYADQgVADgaAAIgIAAg");
	this.shape_23.setTransform(5,3.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1F95B5").s().p("AA8ApIgEAAQgFgZgNgPQgMgMgRgGQgQgGgTgBQgSgBgSABIgBgFQAAgEACgCQAEgEAGgBIAPABIAOADIAMAEQASAGAOAKQANALAKAJQAIAMAFAKIAGAPIgEAAg");
	this.shape_24.setTransform(4.9,-15.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("ABDAqQAAgBgDgGQgCgGgFgKQgGgKgJgJQgJgLgNgJQgOgKgQgFQAAAAgGgCQgHgCgJgCQgJgCgJAAQgIAAgFAFQgEAGACAHQACAHAEAHQAFAIADAGQAEAHABAGQgBANgBAIQgBAHAAAA");
	this.shape_25.setTransform(5,-15.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#167FA3").s().p("AgwAlIACgVQgBgGgEgHIgIgOQgEgHgCgHQgCgHAEgGQAFgFAIAAQAJAAAJACIAQAEIAGACQAQAFAOAKQANAJAJALQAJAJAGAKIAHAQIADAHIh0ACIABgHg");
	this.shape_26.setTransform(5,-15.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0F6E87").s().p("AAAABQAFgGADgIQAIABACACIACACIAAABIgBADIgHAFQgDAEgJADQgGAEgNACQAMgFAHgIg");
	this.shape_27.setTransform(17.5,14.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AgWgNQAAAAACgBQADgBAIgBQAHAAAIAAQAJAAAIABQAJACADABQADACAAACIABABQAAAAgCADQgBADgFADQgFAEgIAEQgIAEgNACQgOACgVgBQADgCACgFQAEgFADgFQADgGABgHg");
	this.shape_28.setTransform(15.8,14.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#167FA3").s().p("AgmARIAFgHIAHgKQAEgGAAgHIACgBQADgBAIgBIAPAAQAJAAAJABIALADQABABABAAQAAABABAAQAAAAAAABQAAAAAAABIABABIgCADQgBADgFADQgEAEgJAEQgJAEgMACQgKABgOAAIgLAAg");
	this.shape_29.setTransform(15.8,14.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AgYgNQAAAJgFAFQgDAIgEAEQgEAFAAAAQAWABAPgCQAOgCAJgEQAJgFAFgEQAFgCABgEIABgDIAAgBQAAgCgDgCQgEgCgKgCQgKgBgLAAQgKAAgIABQgIABgBACg");
	this.shape_30.setTransform(15.7,14.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#167FA3").s().p("AgoASIADgFQAFgEADgIQAEgFABgJQABgCAIgBIASgBQALAAAKABQAKACAEACQADACAAACIAAABIgBADQgBAEgGACQgEAEgJAFQgJAEgOACQgKABgNAAIgOAAg");
	this.shape_31.setTransform(15.7,14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("AgRhVQANAEALAIQALAHAJALQADADACAFQADAEADACQAEACAEgEIgJAYIAIAUQgGgBgEAEQgFAEgEAGQgEAHgEAFQgOASgNANQgRASgTAPQAAAAAFgFQAFgGAGgJQAHgKAHgNQAGgMAFgOQAEgPAAgNQAAgOgCgNQgEgNgIgKQgGgKgHgIQgHgHgFgEQgDgDgBAAQANAAANAEg");
	this.shape_32.setTransform(-53.1,-1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#167FA3").s().p("AgpBVIAMgPQAHgKAGgNQAIgMAEgOQAEgPAAgNQAAgOgCgNQgFgNgHgKIgNgSIgLgLIgFgDQANAAANAEQANAEALAIQAKAHAJALQADADADAFQADAEADACQAEACAEgEIgKAYIAIAUQgFgBgEAEQgFAEgEAGIgJAMQgNASgMANQgSASgTAPIAEgFg");
	this.shape_33.setTransform(-53.1,-1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#40A9C6").s().p("AgSAXIgBgCIgBgGIgBgOQAAgGABgHQACgHAEgDQAEgDAGADQAEACAGAFIAKAJIAGAGIAAAAQgGgEgHgEQgHgEgEAAQgGAAgFAHQgFAFABAHQABAJAFAJQgFgBgCgBg");
	this.shape_34.setTransform(12.1,-1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AgVAVIACACQAAACAFABQAEABAIgBQAHgBAQgGIADgUQAAgBgFgEQgEgFgHgFQgHgFgFgDQgGgDgFADQgEADgCAIQgCAHAAAHQABAIAAAGg");
	this.shape_35.setTransform(12.2,-1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#167FA3").s().p("AgOAaQgFgBAAgCIgBgCIgCgGIgBgOQAAgHACgHQABgIAFgDQAFgDAGADQAGADAGAFIALAKIAFAFIgDAUQgQAGgGABIgIABIgFgBg");
	this.shape_36.setTransform(12.2,-1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AA5AdQAAAAgKAAQgKAAgPgEQgRgEgTgNQgUgKgWga");
	this.shape_37.setTransform(40.5,13.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCB244").s().p("ADuBvQgngFgpgRQgqgSgnghIgBgBIAAAAIgUgDIgugIIhAgNIhRgQIhWgWIhVgYIg6gRIg8gRIgRgDIgVgEIgagGQgNgDgIgFQgJgEgDgFIAAgBQA7AEA4AJQA5AJA6ANIB0AcIAIABIATAFIAXAGIAZAFIASAFIAIABIAFACIAKACIAKADIAEABIAoALQASAEATABQAUAAATgHQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAIABgFIgBgHIgCgIQAaAgAjAYQAkAYApANQApAMArABQArABAqgLIgBgBIgLgJIgNgKIgJgIQAWALAZADQAaADAagGQAZgHAXgPQAPgNAIgNQAFAHAAAKIAAADQgBAMgIAJQgHAKgMAHQgLAGgLAFIgTAGIgIACIgIACIAGAFIAGAJQAEAFAAAFIAAABQgBADgFABQgHACgGgCQgHgCgGgDQgGgDgHgCQgHgCgIAEQgHADgVAFQgVAFghADIgSAAQgZAAgdgEg");
	this.shape_38.setTransform(1.8,8.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCEDAE").s().p("AlmAXIAigIQBOgRBQgKQBPgKBRgBIEZgJQAogBAfAKQAfAJAUAQQgugYgnALIgBAAQgKgDgKgCQgKgBgMABIgeAGIgcAEQgsACgsAAIhXgBQhDgBhFABQhGABhFAGQhGAHhFAUIgFABIgNADIAmgKg");
	this.shape_39.setTransform(-4.8,-9.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("AgXg8QARAGAPAJQAOAHAMAKQAFAEADAEQAEAEAEACQAEACAGgCIgMAPIALATQgIgDgGADQgGACgFAEQgFAEgGAEQgTAKgRAIQgYAKgZAIQABAAAFgDQAHgEAJgGQAJgGAJgIQAJgIAGgLQAGgKAAgLQAAgJgEgMQgGgKgJgKQgJgJgJgHQgJgHgGgEQgGgEgBAAQASADASAGg");
	this.shape_40.setTransform(-50.3,-3.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#167FA3").s().p("Ag2BDIAPgKQAJgGAJgIQAJgJAGgKQAGgKAAgMQAAgIgDgMQgGgLgJgIQgJgKgJgHIgQgLIgGgEQASAEARAFQARAGAPAJQAOAHAMALIAIAHQAEAEAEACQAFACAFgCIgMAOIALATQgIgCgGACIgLAHIgLAIQgSAKgSAIQgYAKgZAIIAHgDgAg7hFIABAAIgBAAg");
	this.shape_41.setTransform(-50.3,-3.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgDAHQgDgDgBgEQgBgBADgDQAEgDAJgBIgEACQgEACAAAEQgDACACAHgAAIgIIAAAAIAAAAg");
	this.shape_42.setTransform(36.7,9.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0F6E87").s().p("AAAACQAFgMADgQQAIADACADIACAEIAAABIgCAGQgBAFgFAGQgEAHgIAHQgGAHgNAEQAMgKAHgPg");
	this.shape_43.setTransform(21.1,16.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AgWgZQABgCABAAQADgDAIgBQAHgBAIAAQAJABAIACQAJADADADQADADAAADIABACQAAABgCAGQgBAGgFAFQgEAIgJAHQgJAIgLAEQgOAEgVgCQACgEADgJQADgJAEgKQADgMAAgNg");
	this.shape_44.setTransform(19.4,16.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#167FA3").s().p("AgmAgIAGgNIAHgTQACgMABgNIABgCQAEgDAHgBQAIgBAHAAQAKABAIACQAIADADADQAEADAAADIABACIgCAHQgCAGgEAFQgFAIgIAHQgJAIgMAEQgKADgOAAIgLgBg");
	this.shape_45.setTransform(19.4,16.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AgYgaQgBAQgDAMQgEAOgEAJQgEAJAAAAQAWACAPgEQANgEAKgIQAIgIAFgIQAFgHACgFIABgGQAAgBAAgCQgBgDgDgEQgEgEgJgDQgKgDgMAAQgJAAgIACQgIACgBAEg");
	this.shape_46.setTransform(19.4,16.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#167FA3").s().p("AgoAiIAEgJQAEgJAEgOQADgMABgQQABgEAIgCQAJgCAIAAQAMAAAKADQAJADAEAEQADAEABADIAAADIgCAGQgBAFgFAHQgEAIgKAIQgJAIgMAEQgLADgOAAIgNgBg");
	this.shape_47.setTransform(19.4,16.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#40A9C6").s().p("AgcAXIgCgCIgBgGIgCgOQAAgGACgHQACgHAGgDQAHgDAJADQAHACAJAFIAQAJIAJAGIAAAAQgKgEgKgEQgLgEgHAAQgKAAgHAHQgHAFABAHQACAJAGAJQgHgBgCgBg");
	this.shape_48.setTransform(14.5,-1.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AggAVQAAAAACACQABACAGABQAHABANgBQAMgBAYgGIADgUQAAgBgHgEQgGgFgKgFQgKgFgJgDQgKgDgIADQgHADgCAIQgCAHAAAHQAAAIACAGQABAGAAAAg");
	this.shape_49.setTransform(14.5,-1.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#167FA3").s().p("AgXAaQgGgBgBgCIgCgCIgBgGQgCgGAAgIQAAgHACgHQACgIAHgDQAIgDAKADQAJADAKAFIAQAKIAHAFIgDAUQgYAGgMABIgMABIgIgBg");
	this.shape_50.setTransform(14.5,-1.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("AA4AdQAAAAgJAAQgKAAgQgEQgQgEgSgNQgUgKgWga");
	this.shape_51.setTransform(43.9,13.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgoAXIAIgCIASgFQAKgDAHgFQALgHAIgFIALgNIAEgGIAEACIgEAGIgLANQgHAGgKAHQgJAHgMAEQgIACgJAAIgLgBg");
	this.shape_52.setTransform(37.1,3.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHAWQgMgGgKgMQgIgIgFgPQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIADgCIAEAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAFAMAIAJQAIAJANABQAIACAJgDQAJgEACgDQADgCABgMIAAgIQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAABQABgBAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAIQgBANgHAKQgHAKgNAEIgIABQgHAAgHgEg");
	this.shape_53.setTransform(37,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgDAfQgEAAgEgDIgIgGIgDgEIgBgGQgCgGABgHQAAgIAEgJQAEgIALgEIADAAIAIACQAGACAFAEQAFAEAEAHIgFAEIgJAJQgGAGgEAHQgCAGAAAGQAAAEgDAAIAAAAg");
	this.shape_54.setTransform(36,-7.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgLAmQgOgagDgSQgCgUAFgPQAFgPAJgKQAJgKAIgGQAKgHAHgCIAHgDIgFAEIgNAKIgNAPQgIAIgFALQgFAKgBAMQAAATAFAQQAFATAIAPQAFAQAIAMIANASIADAEQgbgggLgZg");
	this.shape_55.setTransform(21.9,2.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCB244").s().p("ADrBvQgmgFgpgRQgpgSgmghIgBgBIgBAAIgUgDIgtgIIhAgNIhPgQIhWgWIhTgYIg6gRIg7gRIgQgDIgVgEIgagGQgMgDgJgFQgJgEgCgFIAAgBQA5AEA4AJQA5AJA4ANIBzAcIAHABIATAFIAYAGIAYAFIATAFIAHABIAFACIAJACIALADIAEABIAnALQARAEAUABQATAAAUgHIADgBIABgFIgBgHIgCgIQAaAgAjAYQAiAYApANQApAMArABQAqABAqgLIgBgBIgMgJIgMgKIgJgIQAVALAZADQAaADAagGQAZgHAWgPQAPgNAHgNQAGAHAAAKIAAADQgBAMgIAJQgIAKgLAHQgLAGgLAFIgTAGIgIACIgHACIAFAFIAHAJQAEAFAAAFIAAABQgBADgFABQgHACgHgCIgMgFQgGgDgHgCQgHgCgIAEQgGADgVAFQgWAFggADIgRAAQgaAAgcgEg");
	this.shape_56.setTransform(5.6,8.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FCEDAE").s().p("AliAXIAigIQBNgRBPgKQBPgKBPgBIEVgJQAogBAfAKQAfAJATAQQgtgYgnALIgBAAQgJgDgKgCQgKgBgMABIgeAGIgcAEQgrACgsAAIhWgBQhBgBhFABQhFABhEAGQhFAHhEAUIgFABIgNADIAlgKg");
	this.shape_57.setTransform(-1,-9.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,1,1).p("AnrhYQAGgBAEgCQAvgPAwgKQBNgTBPgKQBPgKBQgCIETgIQACAAALAAQALAAAPABQAQACARAFQASAFAQAJQARAKAMAQQABAAAGAJQAHAKAMAOQALANANAPQAOAPAOAKQALAJAOAIQANAIAOAHQAOAJAMAKQALAJAHAMQAHALgBANQgBAOgIAKQgJAKgLAHQgMAIgMAEQgLAFgIACIgIACQAAAAAEAEQADAEADAFQACAGAAAFQgBAFgIACQgJACgGgCQgHgCgHgDQgGgEgGgBQgGgCgGADQgEADgQAEQgPAEgZADQgYADgeAAQgegBgigHQgigHgjgRQgjgRghgdQgBAAgQgDQgQgDgcgFQgbgFgmgIQglgIgrgKQgrgKgtgNQgygOgygNQgygOgygOQgFgBgLgCQgKgCgNgCQgOgDgMgEQgNgEgJgEQgJgFgCgGQgCgGAIgIQADgDAGgCQAGgCAGgCg");
	this.shape_58.setTransform(5.6,3.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFE473").s().p("AETCmQgegBgigHQgigHgjgRQgjgRghgdIgRgDIgsgIIhBgNIhQgSQgrgKgtgNIhkgbIhkgcIgQgDIgXgEIgagHQgNgEgJgEQgJgFgCgGQgCgGAIgIQADgDAGgCIAMgEIAKgDQAvgPAwgKQBNgTBPgKQBPgKBQgCIETgIIANAAIAaABQAQACARAFQASAFAQAJQARAKAMAQIAHAJIATAYIAYAcQAOAPAOAKQALAJAOAIIAbAPQAOAJAMAKQALAJAHAMQAHALgBANQgBAOgIAKQgJAKgLAHQgMAIgMAEIgTAHIgIACIAEAEIAGAJQACAGAAAFQgBAFgIACQgJACgGgCIgOgFQgGgEgGgBQgGgCgGADQgEADgQAEQgPAEgZADQgUADgZAAIgJAAg");
	this.shape_59.setTransform(5.6,3.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1F95B5").s().p("AA7ApIgEAAQgEgZgNgPQgNgMgQgGQgQgGgSgBQgTgBgRABIgCgFQABgEACgCQADgEAHgBIAOABIAPADIALAEIAAAAQASAGAOAKQANALAJAJQAJAMAFAKIAGAPIgFAAg");
	this.shape_60.setTransform(5.5,-15.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2,1,1).p("ABCAqQAAgBgDgGQgCgGgFgKQgFgKgJgJQgJgLgNgJQgOgKgQgFQAAAAgGgCQgHgCgJgCQgJgCgJAAQgIAAgEAFQgEAGABAHQACAHAFAHQAEAIAEAGQAEAHAAAGQAAANgBAIQgBAHgBAA");
	this.shape_61.setTransform(5.6,-15.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#167FA3").s().p("AgvAlIABgVQAAgGgEgHIgIgOQgFgHgCgHQgBgHAEgGQAEgFAIAAQAJAAAJACIAQAEIAGACQAQAFAOAKQANAJAJALQAJAJAFAKQAFAKACAGIADAHIhzACIACgHg");
	this.shape_62.setTransform(5.6,-15.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgCANQgDgEgCgHQgCgFABgFQACgFADgCQADgBADAEQAEAEACAHQABAFgBAFQgCAFgDACIgCAAQgCAAgCgDg");
	this.shape_63.setTransform(37.5,-4.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#635311").s().p("AgFAXQgFgHgDgKQgDgMADgLQADgLAHgDQAEgCAGAEQAEAHACAJQAEAOgDAOQgCANgJAFQgDgDgFgHg");
	this.shape_64.setTransform(38.2,-1.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgJAlQgHgLgEgQQgEgNABgNQABgNAEgJQAFgJAIgDQAHgCAKAHQAFAKAEAOQAEARgBANQAAAPgFAMQgFALgIAFQgHgEgIgLg");
	this.shape_65.setTransform(38.2,-1.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AgkALQAFATAJAOQAJAOALAGQAIAHALgEQAKgDAGgMQAGgLABgRQACgRgFgRQgFgTgJgOQgIgOgLgGQgJgGgKADQgLADgGAMQgGALgBASQgBAQAEARg");
	this.shape_66.setTransform(36.8,-3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgCBAQgLgGgJgOQgJgOgFgTQgEgRABgQQABgSAGgLQAGgMALgDQAKgDAJAGQALAGAIAOQAJAOAFATQAFARgCARQgBARgGALQgGAMgKADIgIABQgHAAgEgEg");
	this.shape_67.setTransform(36.8,-3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgDAjQgEgBgEgDIgIgHIgDgEIgBgHQgCgGABgIQAAgKAEgJQAEgJALgFIADAAIAIADQAGACAFAEQAFAFAEAIIgFAFIgJAJQgGAHgEAHQgCAIAAAGQAAAFgDAAIAAAAg");
	this.shape_68.setTransform(33.5,-13.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgCAMQgDgEgCgGQgCgEABgFQACgFADgBQADgBADAEQAEADACAGQABAEgBAFQgCAFgDABIgCAAQgCAAgCgCg");
	this.shape_69.setTransform(37.5,-3.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#635311").s().p("AgFAUQgFgGgDgJQgDgLADgKQADgKAHgCQAEgCAGAEQAEAGACAIQAEANgDAMQgCAMgJAEQgDgCgFgHg");
	this.shape_70.setTransform(38.2,-1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJAhQgHgKgEgOQgEgMABgLQABgMAEgIQAFgIAIgDQAHgCAKAGQAFAKAEAMQAEAPgBAMQAAAOgFAKQgFAKgIAEQgHgEgIgJg");
	this.shape_71.setTransform(38.2,-1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AgkAKQAFARAJAMQAJANALAFQAIAGALgDQAKgDAGgKQAGgLABgPQACgPgFgPQgFgRgJgNQgIgMgLgGQgJgFgKACQgLADgGALQgGAKgBAQQgBAPAEAPg");
	this.shape_72.setTransform(36.8,-2.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCA5QgLgFgJgNQgJgMgFgRQgEgPABgPQABgQAGgKQAGgLALgDQAKgCAJAFQALAGAIAMQAJANAFARQAFAPgCAPQgBAPgGALQgGAKgKADIgHABQgHAAgFgEg");
	this.shape_73.setTransform(36.8,-2.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0F6E87").s().p("AAAABQAFgHADgLQAIADACACIACACIAAABIgBAEQgCAEgFACQgDAFgJAEQgGAFgNACQAMgGAHgKg");
	this.shape_74.setTransform(17.5,15.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1).p("AgWgQQAAgBACgBQADgBAIgBQAHgBAIABQAJAAAIABQAJACADACQADACAAACIABACQAAAAgCAEQgBAEgFADQgFAFgIAFQgIAEgNADQgOADgVgBQADgDACgGQAEgGADgGQADgIABgIg");
	this.shape_75.setTransform(15.8,15.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#167FA3").s().p("AgmAVIAFgJIAHgMQAEgIAAgIIACgCQADgBAIgBQAHgBAIABQAJAAAJABQAIACADACQABABABAAQAAABABAAQAAABAAAAQAAABAAAAIABACIgCAEQgBAEgFADQgEAFgJAFQgJAEgMADQgKACgOAAIgLAAg");
	this.shape_76.setTransform(15.8,15.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AgYgQQAAAKgFAHQgDAJgEAGQgEAGAAAAQAWACAPgDQAOgDAJgFQAJgFAFgGQAFgDABgEIABgEIAAgCQAAgCgDgCQgEgDgKgCQgKgCgLAAQgKAAgIACQgIABgBADg");
	this.shape_77.setTransform(15.7,15.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#167FA3").s().p("AgoAWIADgGIAIgPQAEgHABgKQABgDAIgBQAIgCAKAAQALAAAKACQAKACAEADQADACAAACIAAACIgBAEQgBAEgGADQgEAGgJAFQgJAFgOADQgKACgNAAIgOgBg");
	this.shape_78.setTransform(15.7,15.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#40A9C6").s().p("AgTAXIgBgCIgBgGIgBgOQgBgGACgHQABgHAFgDQAEgDAGADQAFACAGAFIALAJIAHAGIAAAAQgHgEgIgEQgHgEgEAAQgHAAgFAHQgFAFABAIQABAIAFAJQgGgBgBgBg");
	this.shape_79.setTransform(11.9,-1.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AgWAVIABACQABACAEABQAFABAJgBQAIgBAQgGIADgUQAAgBgFgEQgEgFgIgFQgHgFgFgDQgHgDgFADQgFADgCAIQgCAHABAHQAAAIABAGg");
	this.shape_80.setTransform(12,-1.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#167FA3").s().p("AgQAaQgEgBgBgCIgBgCIgBgGIgBgOQgBgHACgHQACgIAFgDQAFgDAHADQAFADAHAFIAMAKIAFAFIgDAUQgQAGgIABIgIABIgGgBg");
	this.shape_81.setTransform(12,-1.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(2,1,1).p("AgRhEQANAMALAPQALANAJARQADAFACAGQADAFADADQAEAEAEgBIgJASIAIAcQgGgFgEABQgFACgEADQgEAEgEADQgOAJgNAFQgRAHgTAEQAAgBAFgCQAFgDAGgFQAHgGAHgIQAGgJAFgLQAEgLAAgPQAAgOgCgOQgEgPgIgOQgGgPgHgMQgHgLgFgHQgDgFgBgBQANAIANANg");
	this.shape_82.setTransform(-53.1,-6.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#167FA3").s().p("AgpBXQAGgDAGgFQAHgGAGgIQAIgJAEgLQAEgLAAgPQAAgOgCgOQgFgPgHgOIgNgbIgLgSIgFgGQANAIANANQANAMALAPQAKANAJARIAGALQADAFADADQAEAEAEgBIgKASIAIAcQgFgFgEABQgFACgEADIgJAHQgNAJgMAFQgSAHgTAEIAEgDg");
	this.shape_83.setTransform(-53.1,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26,p:{x:5}},{t:this.shape_25,p:{x:5}},{t:this.shape_24,p:{x:4.9}},{t:this.shape_23,p:{x:5}},{t:this.shape_22,p:{x:5}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:21.5}},{t:this.shape_18,p:{x:35.4}},{t:this.shape_17,p:{x:36.6}},{t:this.shape_16,p:{x:36.6}},{t:this.shape_15,p:{x:38.1}},{t:this.shape_14,p:{x:38.1}},{t:this.shape_13,p:{x:37.4}},{t:this.shape_12,p:{x:36.3}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:36.6}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26,p:{x:1.7}},{t:this.shape_25,p:{x:1.7}},{t:this.shape_24,p:{x:1.6}},{t:this.shape_23,p:{x:1.7}},{t:this.shape_22,p:{x:1.7}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_19,p:{x:18.2}},{t:this.shape_18,p:{x:32.1}},{t:this.shape_17,p:{x:33.3}},{t:this.shape_16,p:{x:33.3}},{t:this.shape_15,p:{x:34.8}},{t:this.shape_14,p:{x:34.8}},{t:this.shape_13,p:{x:34.1}},{t:this.shape_12,p:{x:33}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_7,p:{x:33.3}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},7).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:36,y:-7.2}},{t:this.shape_53},{t:this.shape_52,p:{x:37.1,y:3.3}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},7).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_52,p:{x:36.4,y:4.2}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},2).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:35.5,y:-12.3}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_52,p:{x:36.4,y:4.2}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},2).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_26,p:{x:1.7}},{t:this.shape_25,p:{x:1.7}},{t:this.shape_24,p:{x:1.6}},{t:this.shape_23,p:{x:1.7}},{t:this.shape_22,p:{x:1.7}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_19,p:{x:18.2}},{t:this.shape_18,p:{x:32.1}},{t:this.shape_17,p:{x:33.3}},{t:this.shape_16,p:{x:33.3}},{t:this.shape_15,p:{x:34.8}},{t:this.shape_14,p:{x:34.8}},{t:this.shape_13,p:{x:34.1}},{t:this.shape_12,p:{x:33}},{t:this.shape_37},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_7,p:{x:33.3}}]},3).wait(7));

	// water_anim2
	this.instance = new lib.bubblewater_anim();
	this.instance.setTransform(60,14.7,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-21.2,125,42.6);


(lib.fish2left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F6E87").s().p("AAAAQQgHgHgEgHQgFgGgCgFIgBgGIAAgBIACgEQACgDAIgDQADAQAFAMQAHAPAMAKQgNgEgHgHg");
	this.shape.setTransform(-20.8,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAXgZQAAgCgCAAQgDgDgIgBQgHgBgIAAQgJABgJACQgIADgDADQgEADAAADIAAACQAAABACAGQABAGAFAFQAEAIAJAHQAIAIANAEQAOAEAVgCQgDgEgDgJQgDgJgDgKQgEgMAAgNg");
	this.shape_1.setTransform(-19.1,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#167FA3").s().p("AAEAeQgNgEgIgIQgIgHgFgIQgFgFgBgGIgCgHIABgCQAAgDADgDQADgDAJgDQAIgCAKgBQAHAAAHABQAIABAEADQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABANADAMIAGATIAGANIgLABQgOAAgKgDg");
	this.shape_2.setTransform(-19.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAZgaQABAQAEAMQAEAOAEAJQAEAJAAAAQgXACgPgEQgNgEgKgIQgJgIgEgIQgFgHgCgFIgBgGQAAgBAAgCQAAgDAEgEQADgEAKgDQAKgDAMAAQAJAAAIACQAIACABAEg");
	this.shape_3.setTransform(-19.1,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#167FA3").s().p("AAEAgQgOgEgIgIQgKgIgFgIQgEgHgCgFIgCgGIAAgDQABgDAEgEQADgEAKgDQAKgDALAAQAKAAAIACQAIACABAEQABAQADAMQAEAOAEAJIAEAJIgNABQgOAAgKgDg");
	this.shape_4.setTransform(-19.1,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AAYg8QgSAGgOAJQgOAHgNAKQgEAEgEAEQgDAEgFACQgEACgGgCIANAPIgLATQAHgDAGADQAGACAGAEQAFAEAGAEQASAKASAIQAYAKAZAIQgBAAgFgDQgGgEgJgGQgKgGgJgIQgJgIgGgLQgHgKAAgLQAAgJAFgMQAGgKAJgKQAJgJAJgHQAJgHAGgEQAHgEAAAAQgSADgSAGg");
	this.shape_5.setTransform(51.4,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#167FA3").s().p("AANA0QgSgIgSgKIgLgIQgGgEgGgDQgGgCgHACIALgTIgNgOQAGACAEgCQAFgCADgEIAIgHQANgLAOgHQAOgJASgGQASgFASgEIgHAEIgPALQgJAHgJAKQgJAIgGALQgFAMAAAIQAAAMAHAKQAGAKAJAJQAJAIAKAGIAPAKIAGADQgZgIgYgKgAA8hFIAAAAIAAAAg");
	this.shape_6.setTransform(51.4,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABAAQgBgEgDgCIgEgCQAJABAEADQADADgBABIgDAHIgDACQACgHgDgCgAgHgIIAAAAIAAAAg");
	this.shape_7.setTransform(-36.7,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#40A9C6").s().p("AAcAHQACgHgIgFQgHgHgKAAQgHAAgLAEQgKAEgKAEIgBAAIAKgGIAQgJQAIgFAIgCQAJgDAHADQAGADACAHQADAHgBAGIgCAOIgBAGIgCACQgCABgHABQAHgJABgJg");
	this.shape_8.setTransform(-14.2,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AAhAVIgBACQgCACgGABQgHABgNgBQgMgBgYgGIgEgUQAAgBAHgEQAHgFAKgFQAKgFAJgDQAKgDAIADQAHADADAIQACAHgBAHQAAAIgBAGg");
	this.shape_9.setTransform(-14.2,-1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#167FA3").s().p("AAEAaQgMgBgYgGIgEgUIAHgFQAHgFAKgFQAKgFAJgDQAKgDAIADQAHADADAIQACAHgBAHIgBAOIgCAGIgBACQgCACgGABIgIABIgMgBg");
	this.shape_10.setTransform(-14.2,-1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Ag4AdQAAAAAKAAQAJAAAQgEQARgEATgNQAUgKAWga");
	this.shape_11.setTransform(-43.9,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AANAWQgNgEgIgHQgKgHgIgGIgKgNIgEgGIADgCIAFAGIALANQAIAFALAHQAHAFAKADIASAFIAIACIgLABQgJAAgIgCg");
	this.shape_12.setTransform(-36.4,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAOQgDgBgCgFQgBgFABgEQACgGAEgDQACgEAEABQADABACAFQABAFgBAEQgCAGgEAEQgDACgBAAIgCAAg");
	this.shape_13.setTransform(-37.5,-3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#635311").s().p("AgOANQgCgMAEgNQACgIADgGQAGgEAEACQAIACADAKQADAKgEALQgCAJgFAGQgFAHgEACQgIgEgDgMg");
	this.shape_14.setTransform(-38.2,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAgQgFgKgBgOQAAgMAEgPQADgMAGgKQAJgGAIACQAIADAFAIQAEAIABAMQABALgEAMQgDAOgIAKQgIAJgHAEQgIgEgFgKg");
	this.shape_15.setTransform(-38.2,-1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAlAKQgFARgJAMQgJANgLAFQgIAGgLgDQgLgDgGgKQgGgLgBgPQgBgPAFgPQAEgRAJgNQAJgMALgGQAJgFAKACQALADAGALQAGAKACAQQABAPgFAPg");
	this.shape_16.setTransform(-36.7,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQA8QgLgDgGgKQgGgLgBgPQgBgPAFgPQAEgRAJgNQAJgMALgGQAJgFAKACQALADAGALQAGAKACAQQABAPgFAPQgFARgJAMQgJANgLAFQgFAEgHAAIgHgBg");
	this.shape_17.setTransform(-36.7,-2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAbQAAgGgCgGQgEgHgGgGIgJgJIgFgEQAEgHAFgEQAGgEAFgCIAIgCIAEAAQAKAEAEAIQAEAJABAIQAAAHgBAGIgBAGIgEAEIgHAGQgFADgDAAIgBAAQgDAAAAgEg");
	this.shape_18.setTransform(-35.5,-12.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYBbIAOgSQAIgMAFgQQAIgPAFgTQAFgQAAgTQgBgMgFgKQgFgLgIgIIgNgPIgNgKIgFgEIAHADQAHACAKAHQAIAGAJAKQAJAKAFAPQAGAPgDAUQgDASgOAaQgMAZgbAgIADgEg");
	this.shape_19.setTransform(-21.6,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCB244").s().p("Ak1BzQghgDgVgFQgWgFgGgDQgHgEgIACQgHACgHADQgFADgGACQgHACgHgCQgGgBAAgDIAAgBQAAgFAEgFIAHgJIAFgFIgIgCIgIgCIgTgGQgLgFgLgGQgLgHgIgKQgJgJAAgMIAAgDQAAgKAFgHQAIANAPANQAXAPAZAHQAaAGAagDQAZgDAWgLIgJAIIgNAKIgLAJIgBABQAqALArgBQArgBApgMQApgNAkgYQAjgYAaggIgCAIIgBAHIABAFQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQATAHAUAAQAUgBARgEIAogLIAEgBIAKgDIALgCIAEgCIAHgBIATgFIAZgFIAXgGIAUgFIAHgBIB0gcQA6gNA4gJQA5gJA7gEIAAABQgDAFgIAEQgKAFgNADIgZAGIgVAEIgRADIg8ARIg6ARIhUAYIhXAWIhRAQIhAANIguAIIgUADIgBAAIgBABQgnAhgpASQgpARgnAFQgdAEgZAAIgSAAg");
	this.shape_20.setTransform(-5.1,8.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCEDAE").s().p("AGAAeIgFgBQhFgUhGgHQhGgGhFgBQhFgBhDABIhXABQgsAAgrgCIgdgEIgfgGQgLgBgKABQgKACgJADIgCAAQgogLgtAYQAUgQAfgJQAfgKApABIEYAJQBQABBQAKQBQAKBOARIAiAIIAmAKIgNgDg");
	this.shape_21.setTransform(1.5,-9.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AHyhYQgGgBgFgCQgvgPgwgKQhPgThQgKQhQgKhQgCIkWgIQgDAAgLAAQgLAAgPABQgQACgSAFQgRAFgRAJQgRAKgNAQQAAAAgHAJQgHAKgLAOQgMANgNAPQgOAPgOAKQgLAJgOAIQgOAIgOAHQgOAJgMAKQgMAJgGAMQgHALAAANQABAOAJAKQAIAKAMAHQAMAIAMAEQAMAFAIACQAHACABAAQgBAAgDAEQgDAEgDAFQgDAGABAFQABAFAIACQAIACAHgCQAHgCAHgDQAGgEAGgBQAGgCAGADQAEADAQAEQAQAEAYADQAZADAeAAQAfgBAjgHQAigHAjgRQAjgRAigdQABAAAQgDQAQgDAdgFQAbgFAmgIQAmgIAsgKQArgKAugNQAygOAzgNQAygOAzgOQAFgBALgCQAKgCAOgCQANgDANgEQANgEAJgEQAJgFADgGQABgGgIgIQgDgDgGgCQgGgCgGgCg");
	this.shape_22.setTransform(-5.1,3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE473").s().p("AlNCjQgYgDgQgEQgQgEgEgDQgGgDgGACQgGABgGAEIgOAFQgHACgIgCQgIgCgBgFQgBgFADgGIAGgJIAEgEIgIgCIgUgHQgMgEgMgIQgMgHgIgKQgJgKgBgOQAAgNAHgLQAGgMAMgJQAMgKAOgJIAcgPQAOgIALgJQAOgKAOgPIAZgcIASgYIAHgJQANgQARgKQARgJARgFQASgFAQgCIAagBIAOAAIEWAIQBQACBQAKQBQAKBPATQAwAKAvAPIALADIAMAEQAGACADADQAIAIgBAGQgDAGgJAFQgJAEgNAEIgaAHIgYAEIgQADIhlAcIhlAbQguANgrAKIhSASIhBANIgtAIIgRADQgiAdgjARQgjARgiAHQgjAHgfABIgIAAQgaAAgVgDg");
	this.shape_23.setTransform(-5.1,3.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1F95B5").s().p("Ag7ApIgEAAIAGgPQAFgKAIgMQAKgJANgLQAOgKASgGIAMgEIAOgDIAPgBQAGABAEAEQACACAAAEIgBAFQgSgBgSABQgTABgQAGQgRAGgMAMQgNAPgFAZIgEAAg");
	this.shape_24.setTransform(-5,-15.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("AhCAqQAAgBADgGQACgGAFgKQAGgKAJgJQAJgLANgJQAOgKAQgFQAAAAAGgCQAHgCAJgCQAJgCAJAAQAIAAAFAFQAEAGgCAHQgCAHgEAHQgFAIgDAGQgEAHgBAGQABANABAIQABAHAAAA");
	this.shape_25.setTransform(-5.1,-15.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#167FA3").s().p("AhCAqIADgHIAHgQQAGgKAJgJQAJgLANgJQAOgKAQgFIAGgCIAQgEQAJgCAJAAQAIAAAFAFQAEAGgCAHQgCAHgEAHIgIAOQgEAHgBAGIACAVIABAHg");
	this.shape_26.setTransform(-5.1,-15.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0F6E87").s().p("AAAAIQgHgDgEgEIgHgFIgBgDIAAgBIACgCQACgCAIgBQADAIAFAGQAHAIAMAFQgNgCgHgEg");
	this.shape_27.setTransform(-20.8,14.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AAXgNQAAAAgCgBQgDgBgIgBQgHAAgIAAQgJAAgJABQgIACgDABQgEACAAACIAAABQAAAAACADQABADAFADQAEAEAJAEQAIAEANACQAOACAVgBQgDgCgDgFQgDgFgDgFQgEgGAAgHg");
	this.shape_28.setTransform(-19.1,14.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#167FA3").s().p("AAEAQQgNgCgIgEQgIgEgFgEQgFgDgBgDIgCgDIABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABgBIAMgDQAIgBAKAAIAOAAQAIABAEABIABABQABAHADAGIAGAKIAGAHIgLAAQgOAAgKgBg");
	this.shape_29.setTransform(-19.1,14.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AAZgNQABAJAEAFQAEAIAEAEQAEAFAAAAQgXABgPgCQgNgCgKgEQgJgFgEgEQgFgCgCgEIgBgDIAAgBQAAgCAEgCQADgCAKgCQAKgBAMAAQAJAAAIABQAIABABACg");
	this.shape_30.setTransform(-19.1,14.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#167FA3").s().p("AAEARQgOgCgIgEQgKgFgFgEQgEgCgCgEIgCgDIAAgBQABgCAEgCQADgCAKgCQAKgBALAAIASABQAIABABACQABAJADAFQAEAIAEAEIAEAFIgOAAQgNAAgKgBg");
	this.shape_31.setTransform(-19.1,14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("AAShVQgNAEgLAIQgLAHgJALQgDADgCAFQgDAEgEACQgDACgEgEIAJAYIgIAUQAGgBAEAEQAFAEAEAGQAEAHAEAFQAOASANANQARASATAPQgBAAgEgFQgFgGgGgJQgHgKgHgNQgGgMgFgOQgFgPAAgNQAAgOADgNQAEgNAIgKQAGgKAHgIQAHgHAFgEQADgDABAAQgNAAgNAEg");
	this.shape_32.setTransform(49.7,-1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#167FA3").s().p("AAJA5QgMgNgOgSIgIgMQgEgGgFgEQgEgEgGABIAIgUIgJgYQAFAEADgCQADgCADgEQACgFADgDQAKgLAKgHQAKgIAOgEQANgEANAAIgEADIgMALIgNASQgIAKgDANQgEANAAAOQAAANAFAPQAFAOAGAMQAHANAHAKIAMAPIAEAFQgSgPgTgSg");
	this.shape_33.setTransform(49.7,-1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#40A9C6").s().p("AASAHQABgHgFgFQgFgHgGAAQgEAAgHAEQgHAEgGAEIAAAAIAGgGIAKgJQAFgFAFgCQAGgDAEADQAEADACAHQABAHAAAGIgBAOIgBAGIgBACQgCABgFABQAFgJABgJg");
	this.shape_34.setTransform(-15.5,-1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AAWAVIgBACQgBACgFABQgEABgIgBQgHgBgQgGIgCgUQAAgBAEgEQAEgFAHgFQAHgFAFgDQAGgDAFADQAFADABAIQACAHAAAHQgBAIAAAGg");
	this.shape_35.setTransform(-15.5,-1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#167FA3").s().p("AADAaQgIgBgPgGIgCgUIAEgFIALgKQAGgFAGgDQAGgDAFADQAEADACAIQABAHABAHIgBAOIgBAGIgBACQgCACgEABIgFABIgHgBg");
	this.shape_36.setTransform(-15.5,-1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("AAYg8QgSAGgOAJQgOAHgNAKQgEAEgDAEQgEAEgEACQgFACgGgCIANAPIgLATQAIgDAGADQAFACAGAEQAFAEAGAEQASAKASAIQAYAKAYAIQgBAAgFgDQgGgEgJgGQgJgGgJgIQgJgIgHgLQgGgKAAgLQAAgJAEgMQAGgKAJgKQAJgJAJgHQAJgHAHgEQAGgEAAAAQgSADgRAGg");
	this.shape_37.setTransform(51.4,-3.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#167FA3").s().p("AANA0QgRgIgTgKIgLgIIgLgHQgGgCgIACIALgTIgNgOQAHACAEgCQAEgCAEgEIAHgHQANgLAOgHQAPgJARgGQARgFASgEIgGAEIgQALQgIAHgKAKQgIAIgGALQgFAMAAAIQAAAMAHAKQAGAKAJAJQAJAIAJAGIAPAKIAGADQgYgIgYgKgAA8hFIgBAAIABAAg");
	this.shape_38.setTransform(51.4,-3.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AABAAQgBgEgDgCIgEgCQAJABAEADQADADgBABQgBAEgDADIgCACQACgHgDgCgAgHgIIAAAAIAAAAg");
	this.shape_39.setTransform(-35.6,9.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0F6E87").s().p("AAAAQQgHgHgEgHQgFgGgBgFIgCgGIAAgBIACgEQACgDAIgDQADAQAFAMQAHAPAMAKQgNgEgHgHg");
	this.shape_40.setTransform(-20,16.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AAXgZQAAgCgCAAQgDgDgHgBQgIgBgHAAQgKABgIACQgIADgEADQgDADAAADIAAACQAAABABAGQACAGAFAFQAEAIAIAHQAJAIAMAEQAOAEAVgCQgCgEgEgJQgDgJgDgKQgDgMgBgNg");
	this.shape_41.setTransform(-18.3,16.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#167FA3").s().p("AADAeQgLgEgIgIQgJgHgFgIQgEgFgCgGIgCgHIABgCQAAgDAEgDQACgDAJgDQAIgCAJgBQAIAAAIABQAHABADADIACACQAAANAEAMIAGATIAFANIgKABQgOAAgLgDg");
	this.shape_42.setTransform(-18.3,16.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AAZgaQAAAQAEAMQAEAOAEAJQAEAJAAAAQgWACgQgEQgMgEgKgIQgIgIgFgIQgFgHgCgFIgBgGQAAgBAAgCQAAgDAEgEQAEgEAJgDQAKgDALAAQAKAAAIACQAIACABAEg");
	this.shape_43.setTransform(-18.2,16.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#167FA3").s().p("AAEAgQgNgEgKgIQgJgIgEgIQgFgHgBgFIgCgGIAAgDQAAgDAEgEQADgEAKgDQAKgDAMAAQAJAAAIACQAIACAAAEQACAQADAMQAEAOAEAJIAEAJIgNABQgOAAgKgDg");
	this.shape_44.setTransform(-18.2,16.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#40A9C6").s().p("AAcAHQABgHgHgFQgHgHgKAAQgHAAgLAEQgKAEgKAEIAAAAIAJgGIAQgJQAIgFAIgCQAJgDAHADQAGADACAHQACAHAAAGIgCAOIgBAGIgCACQgCABgHABQAGgJACgJg");
	this.shape_45.setTransform(-13.4,-1.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AAhAVQAAAAgCACQgBACgGABQgHABgNgBQgMgBgYgGIgDgUQAAgBAHgEQAGgFAKgFQAKgFAJgDQAKgDAIADQAHADACAIQACAHAAAHQAAAIgCAGQgBAGAAAAg");
	this.shape_46.setTransform(-13.4,-1.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#167FA3").s().p("AAEAaQgMgBgYgGIgDgUIAHgFIAQgKQAKgFAJgDQAKgDAIADQAHADACAIQACAHAAAHQAAAIgCAGIgBAGIgCACQgBACgGABIgIABIgMgBg");
	this.shape_47.setTransform(-13.4,-1.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("Ag3AdQAAAAAJAAQAKAAAQgEQAQgEASgNQAUgKAWga");
	this.shape_48.setTransform(-42.8,13.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AANAWQgNgEgIgHQgKgHgHgGIgLgNIgEgGIAEgCIAEAGIALANQAIAFALAHQAHAFAKADIASAFIAIACIgLABQgJAAgIgCg");
	this.shape_49.setTransform(-36,3.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgPAYQgMgDgHgLQgHgKgBgMIAAAAIAAgIQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgCIADACQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAHIAAABQABAMACABQADAEAJADQAJAEAIgCQANgBAIgJIAAAAQAIgJAEgNIADgCIAEAAIADACQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgFAOgJAJQgJAMgMAGIAAAAQgIAEgGAAIgJgCg");
	this.shape_50.setTransform(-35.9,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AABAbQAAgGgCgGQgEgHgGgGIgJgJIgFgEQAEgHAFgEQAFgEAGgCIAIgCIADAAQALAEAEAIQAEAJAAAIQABAHgCAGIgBAGIgDAEIgIAGQgEADgEAAIAAAAQgDAAAAgEg");
	this.shape_51.setTransform(-34.9,-7.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgKBMQAIgMAFgQQAIgPAFgTQAFgQAAgTQgBgMgFgKQgFgLgIgIIgNgPIgNgKIgFgEIAHADQAHACAKAHQAIAGAJAKQAJAKAFAPQAFAPgCAUQgDASgOAaQgMAXgWAcIAMgQg");
	this.shape_52.setTransform(-20.8,1.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCB244").s().p("AkxBzQgggDgWgFQgVgFgGgDQgIgEgHACQgHACgGADIgMAFQgHACgHgCQgFgBgBgDIAAgBQAAgFAEgFIAHgJIAFgFIgHgCIgIgCIgTgGQgLgFgLgGQgLgHgIgKQgIgJgBgMIAAgDQAAgKAGgHQAHANAPANQAWAPAZAHQAaAGAagDQAZgDAVgLIgJAIIgMAKIgMAJIgBABQAqALAqgBQArgBApgMQApgNAigYQAjgYAaggIgCAIIgBAHIABAFIADABQAUAHATAAQAUgBARgEIAngLIAEgBIALgDIAJgCIAFgCIAHgBIATgFIAYgFIAYgGIATgFIAHgBIBzgcQA4gNA5gJQA4gJA5gEIAAABQgCAFgJAEQgJAFgMADIgaAGIgVAEIgQADIg7ARIg6ARIhTAYIhWAWIhPAQIhAANIgtAIIgUADIgBAAIgBABQgmAhgpASQgpARgmAFQgcAEgaAAIgRAAg");
	this.shape_53.setTransform(-4.5,8.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCEDAE").s().p("AF7AeIgFgBQhEgUhFgHQhEgGhFgBQhFgBhBABIhWABQgsAAgrgCIgcgEIgegGQgMgBgKABQgKACgJADIgBAAQgngLgtAYQATgQAfgJQAfgKAoABIEVAJQBPABBPAKQBPAKBNARIAiAIIAlAKIgNgDg");
	this.shape_54.setTransform(2.1,-9.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,1,1).p("AHshYQgGgBgEgCQgvgPgwgKQhNgThPgKQhPgKhQgCIkTgIQgCAAgLAAQgLAAgPABQgQACgRAFQgSAFgQAJQgRAKgMAQQgBAAgGAJQgHAKgMAOQgLANgNAPQgOAPgOAKQgLAJgOAIQgNAIgOAHQgOAJgMAKQgLAJgHAMQgHALABANQABAOAIAKQAJAKALAHQAMAIAMAEQALAFAIACIAIACQAAAAgEAEQgDAEgDAFQgCAGAAAFQABAFAIACQAJACAGgCQAHgCAHgDQAGgEAGgBQAGgCAGADQAEADAQAEQAPAEAZADQAYADAeAAQAegBAigHQAigHAjgRQAjgRAhgdQABAAAQgDQAQgDAcgFQAbgFAmgIQAlgIArgKQArgKAtgNQAygOAygNQAygOAygOQAFgBALgCQAKgCANgCQAOgDAMgEQANgEAJgEQAJgFACgGQACgGgIgIQgDgDgGgCQgGgCgGgCg");
	this.shape_55.setTransform(-4.5,3.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFE473").s().p("AlICjQgZgDgPgEQgQgEgEgDQgGgDgGACQgGABgGAEIgOAFQgGACgJgCQgIgCgBgFQAAgFACgGIAGgJIAEgEIgIgCIgTgHQgMgEgMgIQgLgHgJgKQgIgKgBgOQgBgNAHgLQAHgMALgJQAMgKAOgJIAbgPQAOgIALgJQAOgKAOgPIAYgcIATgYIAHgJQAMgQARgKQAQgJASgFQARgFAQgCIAagBIANAAIETAIQBQACBPAKQBPAKBNATQAwAKAvAPIAKADIAMAEQAGACADADQAIAIgCAGQgCAGgJAFQgJAEgNAEIgaAHIgXAEIgQADIhkAcIhkAbQgtANgrAKIhQASIhBANIgsAIIgRADQghAdgjARQgjARgiAHQgiAHgeABIgJAAQgZAAgUgDg");
	this.shape_56.setTransform(-4.5,3.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1F95B5").s().p("Ag6ApIgEAAIAFgPQAGgKAIgMQAJgJANgLQAOgKASgGIAAAAIALgEIAPgDIAOgBQAHABADAEQACACABAEIgBAFQgSgBgTABQgSABgPAGQgSAGgMAMQgNAPgEAZIgEAAg");
	this.shape_57.setTransform(-4.3,-15.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,1,1).p("AhBAqQAAgBADgGQACgGAFgKQAFgKAJgJQAJgLANgJQAOgKAQgFQAAAAAGgCQAHgCAJgCQAJgCAJAAQAIAAAEAFQAEAGgBAHQgCAHgFAHQgEAIgEAGQgEAHAAAGQAAANABAIQABAHABAA");
	this.shape_58.setTransform(-4.5,-15.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#167FA3").s().p("AhBAqIADgHQACgGAFgKQAFgKAJgJQAJgLANgJQAOgKAQgFIAGgCIAQgEQAJgCAJAAQAIAAAEAFQAEAGgBAHQgCAHgFAHIgIAOQgEAHAAAGIABAVIACAHg");
	this.shape_59.setTransform(-4.5,-15.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDAQQgDgCgCgFQgBgFABgFQACgHAEgEQACgEAEABQADACACAFQABAFgCAFQgCAHgDAEQgDADgBAAIgCAAg");
	this.shape_60.setTransform(-36.4,-4.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#635311").s().p("AgNAPQgDgOAEgOQACgJAEgHQAGgEAEACQAHADADALQADALgDAMQgDAKgFAHQgFAHgDADQgJgFgCgNg");
	this.shape_61.setTransform(-37.1,-1.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgSAkQgFgMAAgPQgBgNAEgRQAEgOAFgKQAKgHAHACQAIADAFAJQAEAJABANQABANgEANQgEAQgHALQgIALgHAEQgIgFgFgLg");
	this.shape_62.setTransform(-37.1,-1.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("AAlALQgFATgJAOQgJAOgLAGQgIAHgLgEQgKgDgGgMQgGgLgBgRQgCgRAFgRQAFgTAJgOQAIgOALgGQAJgGAKADQALADAGAMQAGALABASQABAQgEARg");
	this.shape_63.setTransform(-35.7,-3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgQBDQgKgDgGgMQgGgLgBgRQgCgRAFgRQAFgTAJgOQAIgOALgGQAJgGAKADQALADAGAMQAGALABASQABAQgEARQgFATgJAOQgJAOgLAGQgEAEgHAAIgIgBg");
	this.shape_64.setTransform(-35.7,-3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AABAeQAAgGgCgIQgEgHgGgHIgJgJIgFgFQAEgIAFgFQAFgEAGgCIAIgDIADAAQALAFAEAJQAEAJAAAKQABAIgCAGIgBAHIgDAEIgIAHQgEADgEABIAAAAQgDAAAAgFg");
	this.shape_65.setTransform(-32.4,-13.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgDAOQgDgBgCgFQgBgFABgEQACgGAEgDQACgEAEABQADABACAFQABAFgCAEQgCAGgDAEQgDACgBAAIgCAAg");
	this.shape_66.setTransform(-36.4,-3.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#635311").s().p("AgNANQgDgMAEgNQACgIAEgGQAGgEAEACQAHACADAKQADAKgDALQgDAJgFAGQgFAHgDACQgJgEgCgMg");
	this.shape_67.setTransform(-37.1,-1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgSAgQgFgKAAgOQgBgMAEgPQAEgMAFgKQAKgGAHACQAIADAFAIQAEAIABAMQABALgEAMQgEAOgHAKQgIAJgHAEQgIgEgFgKg");
	this.shape_68.setTransform(-37.1,-1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,1,1).p("AAlAKQgFARgJAMQgJANgLAFQgIAGgLgDQgKgDgGgKQgGgLgBgPQgCgPAFgPQAFgRAJgNQAIgMALgGQAJgFAKACQALADAGALQAGAKABAQQABAPgEAPg");
	this.shape_69.setTransform(-35.7,-2.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgQA8QgKgDgGgKQgGgLgBgPQgCgPAFgPQAFgRAJgNQAIgMALgGQAJgFAKACQALADAGALQAGAKABAQQABAPgEAPQgFARgJAMQgJANgLAFQgFAEgHAAIgHgBg");
	this.shape_70.setTransform(-35.7,-2.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0F6E87").s().p("AAAAKQgHgEgEgFQgFgCgCgEIgBgEIAAgBIACgCQACgCAIgDQADALAFAHQAHAKAMAGQgNgCgHgFg");
	this.shape_71.setTransform(-20.8,15.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AAXgQQAAgBgCgBQgDgBgIgBQgHgBgIABQgJAAgJABQgIACgDACQgEACAAACIAAACQAAAAACAEQABAEAFADQAEAFAJAFQAIAEANADQAOADAVgBQgDgDgDgGQgDgGgDgGQgEgIAAgIg");
	this.shape_72.setTransform(-19.1,15.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#167FA3").s().p("AAEATQgNgDgIgEQgIgFgFgFQgFgDgBgEIgCgEIABgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQADgCAJgCQAIgBAKAAQAHgBAHABQAIABAEABIABACQABAIADAIIAGAMIAGAJIgLAAQgOAAgKgCg");
	this.shape_73.setTransform(-19.1,15.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AAZgQQABAKAEAHQAEAJAEAGQAEAGAAAAQgXACgPgDQgNgDgKgFQgJgFgEgGQgFgDgCgEIgBgEIAAgCQAAgCAEgCQADgDAKgCQAKgCAMAAQAJAAAIACQAIABABADg");
	this.shape_74.setTransform(-19.1,15.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#167FA3").s().p("AAEAVQgOgDgIgFQgKgFgFgGQgEgDgCgEIgCgEIAAgCQABgCAEgCQADgDAKgCQAKgCALAAQAKAAAIACQAIABABADQABAKADAHIAIAPIAEAGIgOABQgNAAgKgCg");
	this.shape_75.setTransform(-19.1,15.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#40A9C6").s().p("AATAIQABgIgFgFQgFgHgHAAQgEAAgHAEQgIAEgHAEIAAAAIAHgGIALgJQAFgFAGgCQAGgDAEADQAFADABAHQACAHgBAGIgBAOIgBAGIgBACQgBABgGABQAFgJABgIg");
	this.shape_76.setTransform(-15.3,-1.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AAXAVIgBACQgBACgEABQgFABgJgBQgIgBgQgGIgDgUQAAgBAFgEQAEgFAIgFQAHgFAFgDQAHgDAFADQAFADACAIQACAHgBAHQAAAIgBAGg");
	this.shape_77.setTransform(-15.4,-1.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#167FA3").s().p("AADAaQgIgBgQgGIgDgUIAFgFIAMgKQAHgFAFgDQAHgDAFADQAFADACAIQACAHgBAHIgBAOIgBAGIgBACQgBACgEABIgGABIgIgBg");
	this.shape_78.setTransform(-15.4,-1.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(2,1,1).p("ADpiRQhQgKhRgCIkVgIQgDAAgLAAQgLAAgPACQgQABgSAFQgRAFgRAJQgRAKgNAQQAAAAgHAJQgHAKgLAOQgMAOgNAOQgOAPgOAKQgLAJgOAIQgOAJgOAGQgOAJgMAKQgMAKgHALQgGALAAAOQABANAJAKQAIAKAMAHQAMAIAMAEQALAFAIACIAIACQAAAAgDAEQgDAEgDAGQgDAFABAFQABAFAIACQAIACAHgCQAHgCAGgDQAHgDAGgCQAGgBAGADQAEACAQAEQAQAEAYADQAZAEAegBQAfgBAigHQAjgHAjgRQAjgRAigdQAAAAARgDQAQgCAdgGQAbgFAmgIQAmgHArgLQAsgKAugMQAygPAzgMQAygPAzgOQAFgBALgCQAKgCAOgCQANgDANgEQANgDAJgFQAJgFACgGQACgGgIgIQgDgDgGgCQgGgCgGgBQgGgCgFgBQgvgPgwgLQhPgThQgKg");
	this.shape_79.setTransform(-5.1,3.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFE473").s().p("AlNCjQgYgDgQgEQgQgEgEgCQgGgDgGABIgNAFIgNAFQgHACgIgCQgIgCgBgFQgBgFADgFIAGgKIADgEIgIgCIgTgHQgMgEgMgIQgMgHgIgKQgJgKgBgNQAAgOAGgLQAHgLAMgKQAMgKAOgJIAcgPQAOgIALgJQAOgKAOgPIAZgcIASgYIAHgJQANgQARgKQARgJARgFQASgFAQgBIAagCIAOAAIEVAIQBRACBQAKQBQAKBPATQAwALAvAPIALADIAMADQAFACAEADQAIAIgCAGQgCAGgJAFQgJAFgNADIgaAHIgYAEIgQADIhlAdIhlAbQguAMgsAKIhRASIhBANIgtAIIgRADQgiAdgjARQgjARgjAHQgiAHgfABIgKAAQgYAAgVgDg");
	this.shape_80.setTransform(-5.1,3.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(2,1,1).p("AhCAqIADgHQACgGAFgKQAFgKAJgJQAJgLAOgJQANgKARgFQAAAAAGgCQAHgDAJgBQAJgDAJABQAIAAAFAFQAEAFgCAIQgCAGgEAIQgFAIgEAFQgEAIAAAGQAAANABAIQACAHAAAA");
	this.shape_81.setTransform(-5.1,-15.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#167FA3").s().p("AhCAqIADgHIAHgQQAFgKAJgJQAJgLAOgJQANgKARgFIAGgCIAQgEQAJgDAJABQAIAAAFAFQAEAFgCAIQgCAGgEAIIgJANQgEAIAAAGIABAVIACAHg");
	this.shape_82.setTransform(-5.1,-15.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(2,1,1).p("AAShEQgNAMgLAPQgLANgJARQgDAFgCAGQgDAFgEADQgDAEgEgBIAJASIgIAcQAGgFAEABQAFACAEADQAEAEAEADQAOAJANAFQARAHATAEQgBgBgEgCQgFgDgGgFQgHgGgHgIQgGgJgFgLQgFgLAAgPQAAgOADgOQAEgPAIgOQAGgPAHgMQAHgLAFgHQADgFABgBQgNAIgNANg");
	this.shape_83.setTransform(49.7,-6.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#167FA3").s().p("AAJBPQgMgFgOgJIgIgHQgEgDgFgCQgEgBgGAFIAIgcIgJgSQAFABADgEQADgDADgFIAFgLQAKgRAKgNQAKgPAOgMQANgNANgIIgEAGIgMASIgNAbQgIAOgDAPQgEAOAAAOQAAAPAFALQAFALAGAJQAHAIAHAGQAHAFAFADIAEADQgSgEgTgHg");
	this.shape_84.setTransform(49.7,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_7},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},7).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:-34.9,y:-7.2}},{t:this.shape_50},{t:this.shape_49,p:{x:-36,y:3.3}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},7).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_49,p:{x:-35.3,y:4.2}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},2).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:-34.4,y:-12.3}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_49,p:{x:-35.3,y:4.2}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},2).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_24},{t:this.shape_80},{t:this.shape_79},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_7}]},3).wait(7));

	// water_anim2
	this.instance = new lib.bubblewater_anim();
	this.instance.setTransform(-64.7,9.2,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-21.2,129.3,42.6);


(lib.fish2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":1,"lefttoright":3,static2:5,"righttoleft":6});

	// timeline functions:
	this.frame_1 = function() {
		/* 
		stop();*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}
	this.frame_7 = function() {
		/* gotoAndPlay("static");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(2).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.fish2left();
	this.instance.setTransform(43.7,-11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAAQgBgEgDgCIgEgCQAJABAEADQADADgBABIgDAHIgDACQACgHgDgCgAgHgIIAAAAIAAAAg");
	this.shape.setTransform(8.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F6E87").s().p("AAAAKQgHgEgEgFQgFgDgCgDIgBgEIAAAAIACgDQACgDAIgCQADALAFAHQAHAKAMAGQgNgCgHgFg");
	this.shape_1.setTransform(24.2,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAXgQQAAgBgCgBQgDgBgIgBQgHgBgIABQgJAAgJABQgIACgDACQgEACAAACIAAACQAAAAACAEQABAEAFADQAEAFAJAFQAIAEANADQAOADAVgBQgDgDgDgGQgDgGgDgGQgEgIAAgIg");
	this.shape_2.setTransform(25.9,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#167FA3").s().p("AAEATQgNgDgIgEQgIgFgFgFQgFgDgBgEIgCgEIABgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQADgCAJgCQAIgBAKAAQAHgBAHABQAIABAEABIABACQABAIADAIIAGAMIAGAJIgLAAQgOAAgKgCg");
	this.shape_3.setTransform(25.9,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAZgQQABAKAEAHQAEAJAEAGQAEAGAAAAQgXACgPgDQgNgDgKgFQgJgFgEgGQgFgDgCgEIgBgEIAAgCQAAgCAEgCQADgDAKgCQAKgCAMAAQAJAAAIACQAIABABADg");
	this.shape_4.setTransform(25.9,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#167FA3").s().p("AAEAVQgOgDgIgFQgKgFgEgGQgFgDgCgEIgCgEIAAgCQABgCAEgCQADgDAKgCQAKgCALAAQAKAAAIACQAIABABADQABAKADAHIAIAPIAEAGIgOABQgNAAgKgCg");
	this.shape_5.setTransform(25.9,5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#40A9C6").s().p("AATAIQABgIgFgFQgFgHgHAAQgEAAgHAEQgIAEgHAEIAAAAIAHgGIALgJQAFgFAGgCQAGgDAEADQAFADABAHQACAHgBAGIgBAOIgBAGIgBACQgBABgGABQAFgJABgIg");
	this.shape_6.setTransform(29.7,-11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AAXAVIgBACQgBACgEABQgFABgJgBQgIgBgQgGIgDgUQAAgBAFgEQAEgFAIgFQAHgFAFgDQAHgDAFADQAFADACAIQACAHgBAHQAAAIgBAGg");
	this.shape_7.setTransform(29.6,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#167FA3").s().p("AADAaQgIgBgQgGIgDgUIAFgFIAMgKQAHgFAFgDQAHgDAFADQAFADACAIQACAHgBAHIgBAOIgBAGIgBACQgBACgEABIgGABIgIgBg");
	this.shape_8.setTransform(29.6,-11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Ag4AdQABAAAJAAQAJAAARgEQAQgEATgNQAUgKAWga");
	this.shape_9.setTransform(1.1,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAWQgNgEgIgHQgKgHgIgGIgKgNIgEgGIADgCIAFAGIALANQAIAFALAHQAHAFAKADIASAFIAIACIgLABQgJAAgIgCg");
	this.shape_10.setTransform(8.6,-5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAOQgDgBgCgFQgBgFABgEQACgGAEgDQACgEAEABQADABACAFQABAFgBAEQgCAGgEADQgDADgBAAIgCAAg");
	this.shape_11.setTransform(7.5,-13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#635311").s().p("AgOANQgCgMAEgNQACgIADgGQAGgEAEACQAIACADAKQADAKgEALQgCAJgFAGQgFAHgEACQgIgEgDgMg");
	this.shape_12.setTransform(6.8,-11.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAgQgFgKgBgOQAAgMAEgPQADgMAGgKQAJgGAIACQAIADAFAIQAEAIABAMQABALgEAMQgDAOgIAKQgIAJgHAEQgIgEgFgKg");
	this.shape_13.setTransform(6.8,-11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAlAKQgFARgJAMQgJANgLAFQgIAGgLgDQgLgDgGgKQgGgLgBgPQgBgPAFgPQAEgRAJgNQAJgMALgGQAJgFAKACQALADAGALQAGAKACAQQABAPgFAPg");
	this.shape_14.setTransform(8.3,-12.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQA8QgLgDgGgKQgGgLgBgPQgBgPAFgPQAEgRAJgNQAJgMALgGQAJgFAKACQALADAGALQAGAKACAQQABAPgFAPQgFARgJAMQgJANgLAFQgFAEgHAAIgHgBg");
	this.shape_15.setTransform(8.3,-12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AABAbQAAgGgCgGQgEgHgGgGIgJgJIgFgEQAEgHAFgEQAGgEAFgCIAIgCIAEAAQAKAEAEAIQAEAJABAIQAAAHgBAGIgBAGIgEAEIgHAGQgFADgDAAIgBAAQgDAAAAgEg");
	this.shape_16.setTransform(9.5,-22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYBbIAOgSQAIgMAFgQQAIgPAFgTQAFgQAAgTQgBgMgFgKQgFgLgIgIIgNgPIgNgKIgFgEIAHADQAHACAKAHQAIAGAJAKQAJAKAFAPQAGAPgDAUQgDASgOAaQgMAZgbAgIADgEg");
	this.shape_17.setTransform(23.4,-7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCB244").s().p("Ak1BzQghgDgVgFQgWgFgGgDQgHgEgIACQgHACgHADQgFADgGACQgHACgHgCQgGgBAAgDIAAgBQAAgFAEgFIAHgJIAFgFIgIgCIgIgCIgTgGQgLgFgLgGQgLgHgIgKQgJgJAAgMIAAgDQAAgKAFgHQAIANAPANQAXAPAZAHQAaAGAagDQAZgDAWgLIgJAIIgNAKIgLAJIgBABQAqALArgBQArgBApgMQApgNAkgYQAjgYAaggIgCAIIgBAHIABAFQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQATAHAUAAQAUgBARgEIAogLIAEgBIAKgDIALgCIAEgCIAHgBIATgFIAZgFIAXgGIAUgFIAHgBIB0gcQA6gNA4gJQA5gJA7gEIAAABQgDAFgIAEQgKAFgNADIgZAGIgVAEIgRADIg8ARIg6ARIhUAYIhXAWIhRAQIhAANIguAIIgUADIgBAAIgBABQgnAhgpASQgpARgnAFQgdAEgZAAIgSAAg");
	this.shape_18.setTransform(39.9,-1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCEDAE").s().p("AGAAeIgFgBQhFgUhGgHQhGgGhFgBQhFgBhDABIhXABQgsAAgrgCIgdgEIgfgGQgLgBgKABQgKACgJADIgCAAQgogLgtAYQAUgQAfgJQAfgKApABIEYAJQBQABBQAKQBQAKBOARIAiAIIAmAKIgNgDg");
	this.shape_19.setTransform(46.5,-19.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AHyhYQgGgBgFgCQgvgPgwgKQhPgThQgKQhQgKhQgCIkWgIQgDAAgLAAQgLAAgPABQgQACgSAFQgRAFgRAJQgRAKgNAQQAAAAgHAJQgHAKgLAOQgMANgNAPQgOAPgOAKQgLAJgOAIQgOAIgOAHQgOAJgMAKQgMAJgGAMQgHALAAANQABAOAJAKQAIAKAMAHQAMAIAMAEQAMAFAIACQAHACABAAQgBAAgDAEQgDAEgDAFQgDAGABAFQABAFAIACQAIACAHgCQAHgCAHgDQAGgEAGgBQAGgCAGADQAEADAQAEQAQAEAYADQAZADAeAAQAfgBAjgHQAigHAjgRQAjgRAigdQABAAAQgDQAQgDAdgFQAbgFAmgIQAmgIAsgKQArgKAugNQAygOAzgNQAygOAzgOQAFgBALgCQAKgCAOgCQANgDANgEQANgEAJgEQAJgFADgGQABgGgIgIQgDgDgGgCQgGgCgGgCg");
	this.shape_20.setTransform(39.9,-6.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE473").s().p("AlNCjQgYgDgQgEQgQgEgEgDQgGgDgGACQgGABgGAEIgOAFQgHACgIgCQgIgCgBgFQgBgFADgGIAGgJIAEgEIgIgCIgUgHQgMgEgMgIQgMgHgIgKQgJgKgBgOQAAgNAHgLQAGgMAMgJQAMgKAOgJIAcgPQAOgIALgJQAOgKAOgPIAZgcIASgYIAHgJQANgQARgKQARgJARgFQASgFAQgCIAagBIAOAAIEWAIQBQACBQAKQBQAKBPATQAwAKAvAPIALADIAMAEQAGACADADQAIAIgBAGQgDAGgJAFQgJAEgNAEIgaAHIgYAEIgQADIhlAcIhlAbQguANgrAKIhSASIhBANIgtAIIgRADQgiAdgjARQgjARgiAHQgjAHgfABIgIAAQgaAAgVgDg");
	this.shape_21.setTransform(39.9,-6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F95B5").s().p("Ag7ApIgEAAIAGgPQAFgKAIgMQAKgJANgLQAOgKASgGIAMgEIAOgDIAPgBQAGABAEAEQACACAAAEIgBAFQgSgBgSABQgTABgQAGQgRAGgMAMQgNAPgFAZIgEAAg");
	this.shape_22.setTransform(40,-25.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("AhCAqQAAgBADgGQACgGAFgKQAGgKAJgJQAJgLANgJQAOgKAQgFQAAAAAGgCQAHgCAJgCQAJgCAJAAQAIAAAFAFQAEAGgCAHQgCAHgEAHQgFAIgDAGQgEAHgBAGQABANABAIQABAHAAAA");
	this.shape_23.setTransform(39.9,-25.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#167FA3").s().p("AhCAqIADgHIAHgQQAGgKAJgJQAJgLANgJQAOgKAQgFIAGgCIAQgEQAJgCAJAAQAIAAAFAFQAEAGgCAHQgCAHgEAHIgIAOQgEAHgBAGIACAVIABAHg");
	this.shape_24.setTransform(39.9,-25.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("AAShEQgNAMgKAPQgLANgJARQgDAFgDAGQgDAFgDADQgDAEgFgBIAKASIgIAcQAFgFAFABQAEACAEADQAEAEAFADQANAJANAFQASAHASAEQAAgBgEgCQgFgDgHgFQgHgGgGgIQgHgJgFgLQgFgLAAgPQAAgOAEgOQAEgPAHgOQAHgPAGgMQAHgLAFgHQADgFABgBQgNAIgNANg");
	this.shape_25.setTransform(94.7,-16.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#167FA3").s().p("AAJBPQgMgFgOgJIgIgHQgEgDgFgCQgEgBgGAFIAIgcIgJgSQAFABADgEQADgDADgFIAFgLQAKgRAKgNQAKgPAOgMQANgNANgIIgEAGIgMASIgNAbQgIAOgDAPQgEAOAAAOQAAAPAFALQAFALAGAJQAHAIAHAGQAHAFAFADIAEADQgSgEgTgHg");
	this.shape_26.setTransform(94.7,-16.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.8,1,1).p("AgSggQAIgOAKAAQALAAAIAOQAIAOAAASQAAATgIAOQgIAOgLAAQgKAAgIgOQgIgOAAgTQAAgSAIgOg");
	this.shape_27.setTransform(-39.8,-0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJARQgDgIAAgJQAAgKADgHQADAFAEAAQADAAADgGIACgGIADAFQAFAIAAALQAAAJgFAIQgDAIgGAAQgEAAgFgIg");
	this.shape_28.setTransform(-39.5,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AgGANIAAgBQgDgFAAgHQAAgGADgGQADgFADAAQAEAAADAFQADAGAAAGIgBAGIgCAGQgDAGgEAAQgDAAgDgFg");
	this.shape_29.setTransform(-39.8,-2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgSAgQgIgNAAgTQAAgSAIgOQAIgOAKAAQALAAAIAOQAIAOAAASQAAATgIANQgIAOgLABQgKgBgIgOgAgGggQgDAFAAAIQAAAHADAGIAAAAQgDAGAAAKQAAAKAEAJQAEAHAEABQAGgBAEgHQAEgJAAgKQAAgKgEgHIgEgGIABgGQAAgIgDgFQgDgGgEAAQgDAAgDAGg");
	this.shape_30.setTransform(-39.8,-0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.8,1,1).p("AgSggQAIgOAKAAQALAAAIAOQAIAOAAASQAAATgIAOQgIANgLAAQgKAAgIgNQgIgOAAgTQAAgSAIgOg");
	this.shape_31.setTransform(-52.6,-0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgJARQgDgIAAgJQAAgKADgHQACAFAFAAQADAAADgGIACgGIAEAFQADAIAAALQAAAJgDAIQgFAIgFAAQgEAAgFgIg");
	this.shape_32.setTransform(-52.2,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCCCC").s().p("AgFANIgBgBQgDgFAAgHQAAgGADgGQADgFADAAQAEAAADAFQADAGAAAGIAAAGIgDAGQgDAGgEAAQgDAAgCgFg");
	this.shape_33.setTransform(-52.6,-2.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgSAhQgIgNAAgUQAAgSAIgOQAIgNAKAAQALAAAIANQAIAOAAASQAAAUgIANQgIANgLAAQgKAAgIgNgAgGghQgDAGAAAIQAAAIADAEIABABQgEAGAAAJQAAAMAEAHQAEAJAEgBQAGABAEgJQAEgHAAgMQAAgJgEgIIgDgFIAAgGQAAgIgDgGQgDgFgEAAQgDAAgDAFg");
	this.shape_34.setTransform(-52.6,-0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.8,1,1).p("AhiiUQAfgWAkgBQACAAABAAQAVgBALACQAMACAGADQAOAGAuAXABShDQAOAWAAAfQAAAdgOAVQgMAWgSAAQgSAAgNgWQgNgVAAgdQAAgfANgWQANgVASAAQASAAAMAVgACAhnQAAAAAAgBQAaAIAlAUQAGg2ASg1QgKBUAABEQAAAqABAEQAPAxABABQgWgXgShCQgEACgEAEQABADAAAEQAAALgOAOQgMANgKABQgEALgGAPQgOAjghAhQgJAKgTAMQgQApgmgBQgxAAgOgKQgIgHgMgUACUgBQAAABAAAAQgBACAAABQgCAJgFAOQgBABAAABACUgBQAFgHADgKQADgIAGAAQAHAAACAIAB8hiQADADAOAVQABABAFAeQAEAZgDARAhiiUQAHAEAEAHQAKANgWAdQgHgOgXgHQgBgBgBAAQgQgHAGgKQAQgRAOAAQAHAAAGADgAinAtQgQgeAAgPQAAgjARgkQAHgOAcggAhKBCIgHAAQgbAEgDgBAiWBJQg0gBgTggIAAgTIAMAAQAcAQAOAIQAHANAKAPgAh0B5QABgCABgCQAEgGAIgDAh0B5QAAgBgBgBQgTgZgOgVAhiB1QAIARAHANQgTgNgOgNABJBkQABABAIAVAAhBGQAJAAAYAFAA2CQQAFgMADgR");
	this.shape_35.setTransform(-44.7,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.8,1,1).p("AgjhEIAAAAQgCg1AagdQAFgEAFgEQAAAEABAEQAAAPAAAWQAAAnAAAIAB7AAQgBABgDACQgHAHgPAAQgPgHgSgEQABgTAOgHQAJgFAPAAQAWAAAAAXQAAAFgCAEAglBVQAAAfgNAWQgMAVgSAAQgTAAgNgVQgMgWAAgfQAAgeAMgWQANgWATAAQASAAAMAWQANAWAAAeg");
	this.shape_36.setTransform(-44.2,-10.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("ABMAQQABgQAOgIQAJgFAOAAQAXAAAAAVQAAAFgCAEIAAABIgEAFQgHAGgQAAQgOgHgSgGgAh6AFIgCgBQgQgFAGgKQAQgRAOAAQAHAAAGADQAGAEAFAHQAKANgWAbQgHgOgXgHg");
	this.shape_37.setTransform(-45.4,-12.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAhA1QgMgWAAgeQAAgdAMgWQANgVASAAQASAAANAVQANAWAAAdQAAAegNAWQgNAWgSAAQgSAAgNgWgAheAzQgNgWAAgdQAAgeANgWQANgWASAAQASAAAMAWQANAWAAAeQAAAdgNAWQgMAVgSAAQgSAAgNgVg");
	this.shape_38.setTransform(-45.9,-2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFE473").s().p("AgSC4QgyAAgOgKQgIgHgMgUIgPgeIAPAeQgTgNgOgNIACgEQAEgGAIgDQgIADgEAGIgDACQgTgZgNgVQgLgPgGgNQgQgegBgPQAAgjARgkQAHgOAcggIACABQAYAHAGAOQAWgdgJgNQgFgHgHgEQAfgWAlgBIACAAQAVgBANACQAMACAEADIA8AdIACAFQgOAIgBASQASAGAPAHQAPAAAHgGIAEgFIAAgBQAaAIAlAUQAGg2ASg1QgKBUAABEQAAAqABAEIAPAyQgVgXgShCIgIAGQgCgIgHAAQgGAAgDAIQgDAKgFAHIABgNQAAgNgCgQIgGgfIgRgYIARAYIAGAfQACAQAAANIgBANIAAABIgBADIgHAXIgBACIgKAaQgOAjggAhIgKgWIAKAWQgKAKgTAMQAFgMADgRQgDARgFAMQgQAogkAAIgBAAgAAvBLQgXgFgKAAQAKAAAXAFgAh1BFIAEgBIAAAAIADAAIAAAAIACAAIAAAAIAEgBIACAAIAAAAIACgBIAHAAIgHAAIgCABIAAAAIgCAAIgEABIAAAAIgCAAIAAAAIgDAAIAAAAIgEABIgJAAIAAAAIgDAAIgBAAIABAAIADAAIAAAAIAJAAgAAChDQgLAWAAAfQAAAdALAVQANAWASAAQASAAANgWQANgVgBgdQABgfgNgWQgNgVgSAAIAAAAQgSAAgNAVgAh+hFQgMAWAAAfQAAAcAMAWQANAWATAAQASAAAMgWQANgWAAgcQAAgfgNgWQgMgWgSAAQgTAAgNAWg");
	this.shape_39.setTransform(-42.8,-0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#167FA3").s().p("AjFCHIAAgTIAMAAIAqAYQAHANAKAPQg1gBgSgggACjB4IAHgWIABgDIABgDQAFgHACgKQADgIAGAAQAHAAACAHIABAIQAAANgNAOQgNANgKAAIABgCgAgEhNIgDAAQgCg1AZgdIAJgIIABAIQACAQAAAVIAAAvQgNgCgTAAg");
	this.shape_40.setTransform(-47,-10);

	this.instance_1 = new lib.fish2right();
	this.instance_1.setTransform(-43.7,-9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.8,1,1).p("AgSggQAIgOAKAAQALAAAIAOQAIAOAAASQAAAUgIANQgIAOgLAAQgKAAgIgOQgIgNAAgUQAAgSAIgOg");
	this.shape_41.setTransform(38.2,-5.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIARQgFgIAAgJQABgKADgHQADAFAEAAQACAAADgGIADgGIAEAFQADAIAAALQAAAJgDAIQgEAIgGAAQgFAAgDgIg");
	this.shape_42.setTransform(38.5,-4.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgSAhQgIgNAAgUQAAgSAIgOQAIgNAKAAQALAAAIANQAIAOAAASQAAAUgIANQgIANgLAAQgKAAgIgNgAgGghQgDAGAAAIQAAAIADAEIAAABQgDAGAAAJQAAAMAEAHQAEAJAEgBQAGABAEgJQAEgHAAgMQAAgJgEgIIgEgFIABgGQAAgIgDgGQgDgFgEAAQgDAAgDAFg");
	this.shape_43.setTransform(38.2,-5.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.8,1,1).p("AgSggQAIgOAKAAQALAAAIAOQAIAOAAASQAAAUgIANQgIANgLAAQgKAAgIgNQgIgNAAgUQAAgSAIgOg");
	this.shape_44.setTransform(25.4,-5.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CCCCCC").s().p("AgGANIAAgBQgDgFAAgHQAAgGADgGQADgFADAAQAEAAADAFQADAGAAAGIgBAGIgCAGQgDAGgEAAQgDAAgDgFg");
	this.shape_45.setTransform(25.4,-7.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.8,1,1).p("AimBUQgRgdAAgSQAAgjARgiQAHgNAcghQgQgGAGgLQAQgRAOAAQAHAAAHAEQAegXAlgBIAAAAQgCg+AigdQADASAAAcQAAAnAAAHQALACAGADQAOAGAuAXAgeiEQABAAABAAQAVAAAMABAiDhOQABABABAAQAYAIAHANQAVgdgJgNQgFgHgGgDAhrgeQANgVATAAQASAAAMAVQANAWAAAdQAAAfgNAVQgMAWgSAAQgTAAgNgWQgMgVAAgfQAAgdAMgWgAA0gxQASAAANAWQANAVAAAdQAAAfgNAVQgNAWgSAAQgSAAgNgWQgNgVAAgfQAAgdANgVQANgWASAAgAB8g7QgHAGgPAAQgPgGgSgGQABgTAOgIQAJgFAPAAQAWAAAAAXQAAAGgCAEQAAAAAAAAQgCADgCACQADAEAOAUQABACAFAeQAEAXgDAQQAAACAAACQgBABAAABQgCAJgFAOQgBABAAABQgEAMgGAPQgOAiggAhQgJgUgBgBACUAkQAFgHADgKQADgHAGAAQAHAAACAHQABADAAAFQAAAMgOAPQgMANgKAAACAhAQAaAHAlAUQAGg2ASg1QgKBUAABDQAAAsABADQAPAxABABQgWgXgShDQgEABgEAEAAhBuQAKAAAXAEAh0CgQABgCABgCQAEgGAIgDAhJBqIgHAAQgbAEgDgCAh0CgQAAgBgBgBQgTgZgNgUAA2C4QgQAogmAAQgxgBgOgKQgIgGgMgVQgHgMgIgSAA2C4QAFgNAEgRAhTC6QgTgNgOgNAimBUQAGANALAQQg1gCgSgfIAAgTIAMAAQAbAPAPAIgABTChQgKAKgTAN");
	this.shape_46.setTransform(33.3,-9.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#167FA3").s().p("AjFCHIAAgTIAMAAIAqAYQAHANAKAPQg1gBgSgggACjB4IAIgWIAAgDIABgDQAFgHADgKQACgIAHAAQAGAAACAHIABAIQAAANgOAOQgMANgJAAIAAgCgAgEhNIgDAAQgCg+AigcQADARAAAcIAAAvQgNgCgTAAg");
	this.shape_47.setTransform(31,-15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFE473").s().p("AgSC4QgyAAgOgKQgIgHgMgUIgPgeIAPAeQgTgNgOgNIACgEQAEgGAIgDQgIADgEAGIgDACQgTgZgOgVQgKgPgHgNQgPgeAAgPQAAgjAQgkQAHgOAcggIACABQAXAHAIAOQAVgdgKgNQgEgHgHgEQAfgWAkgBIADAAQAVgBAOACQALACAEADIA7AdIADAFQgOAIgBASQASAGAOAHQAQAAAHgGIAEgFIAAgBQAaAIAlAUQAGg2ASg1QgKBUAABEQAAAqABAEIAQAyQgXgXgRhCIgJAGQgBgIgHAAQgHAAgCAIQgDAKgFAHIABgNQAAgNgDgQIgFgfIgRgYIARAYIAFAfQADAQAAANIgBANIgBABIAAADIgHAXIgBACIgKAaQgOAjghAhIgJgWIAJAWQgJAKgTAMQAFgMADgRQgDARgFAMQgQAogkAAIgBAAgAAvBLQgYgFgJAAQAJAAAYAFgAh1BFIACgBIACAAIAFAAIAAAAIAEgBIABAAIAAAAIABAAIAAAAIADgBIAHAAIgHAAIgDABIAAAAIgBAAIAAAAIgBAAIgEABIAAAAIgFAAIgCAAIgCABIgJAAIAAAAIgDAAIAAAAIAAAAIADAAIAAAAIAJAAgAAChDQgLAWAAAfQAAAdALAVQANAWASAAQASAAAMgWQAOgVAAgdQAAgfgOgWQgMgVgSAAIAAAAQgSAAgNAVgAh+hFQgMAWAAAfQAAAcAMAWQANAWASAAQATAAAMgWQANgWAAgcQAAgfgNgWQgMgWgTAAQgSAAgNAWg");
	this.shape_48.setTransform(35.2,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-45.9,y:-2.2}},{t:this.shape_37,p:{x:-45.4,y:-12.8}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-39.8,y:-0.3}},{t:this.shape_29,p:{x:-39.8,y:-2.4}},{t:this.shape_28,p:{x:-39.5,y:0.8}},{t:this.shape_27}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_48},{t:this.shape_37,p:{x:32.6,y:-17.8}},{t:this.shape_47},{t:this.shape_38,p:{x:32.1,y:-7.2}},{t:this.shape_46},{t:this.shape_30,p:{x:25.4,y:-5.8}},{t:this.shape_28,p:{x:25.8,y:-4.7}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_29,p:{x:38.2,y:-7.4}},{t:this.shape_42},{t:this.shape_41}]},1).wait(2));

	// Layer 5
	this.text = new cjs.Text("sdfadf", "bold 14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 119;
	this.text.setTransform(42.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4).to({x:-47.5,y:15.2},0).wait(1).to({y:5.2},0).wait(1).to({x:29,y:9.1},0).wait(1).to({x:30},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-32.2,132.8,61.4);


(lib.fish1right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubblewater_anim();
	this.instance.setTransform(60.5,5.1,0.198,0.198,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA3B35").s().p("AgIAdIgCgHIgFgQQgDgJgBgLQgCgLACgJQACgJAGgEIAaANIgDAIIgDAUQgCAKACAOQADAQAJAPg");
	this.shape.setTransform(-30.1,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3B35").s().p("AgMBHIgFgLIgLgeQgHgSgGgUQgGgWgDgXQgEgWADgUIBHAOIgBAKIgBAbIACAkQABARAEAVQADAUAHASQAHAQALAMg");
	this.shape_1.setTransform(-14.6,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA3B35").s().p("AgHBfIgGgJQgFgJgHgQQgHgRgGgXQgFgVAAgeQAAgdAHgjIA8gFIgBALIgDAdIgDApQAAAUACAXQACAWAGAUQAGAUALANg");
	this.shape_2.setTransform(0.3,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA3B35").s().p("AgKBdIgLgaQgGgRgFgZQgFgZgCgeQgBggAEgnIA5AAIgFALQgFAMgFASQgFAUAAAYQAAAWAIAcQAJAbAXAbIguAOg");
	this.shape_3.setTransform(15.5,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AA8ADQgOAPgUAMQgUAMgVAJQgWAIgUADQgDgNAGgLQAGgKALgIQAKgIAMgHQANgFAIgDQgIgEgMgFQgLgFgKgHQgKgHgHgIQgIgJgCgLQAPgDARACQASADARAFQARAHAPAJQAQAJAKAM");
	this.shape_4.setTransform(-55.6,-7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A33128").s().p("Ag2AmQAGgKAKgIQALgIANgHIATgIIgTgJQgLgFgJgHQgLgHgHgIQgIgJgCgLQAPgDARACQATADAPAFQASAHAQAJQAPAJALAMIgFASQgNAPgUAMQgUAMgUAJQgXAIgUADQgCgNAFgLg");
	this.shape_5.setTransform(-55.6,-7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjBjQgJgFgNgKQgNgKgLgOQgNgPgJgSQgJgTgBgUQAAgWALgaQAKgUAVgXIgLAOQgJAMgHARQgHAQgCATQgDAUAHAUQAGAVATAXQARAXAjAWIgJgFg");
	this.shape_6.setTransform(28.1,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAGQgCgDAAgDQAAgCACgDQACgDABAAQACAAACADQABACABADQgBADgBADQgCADgCAAQgBAAgCgDg");
	this.shape_7.setTransform(38.4,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A0707").s().p("AgKASQgFgIAAgKQAAgJAFgHQAFgIAFAAQAGAAAFAIQAFAHAAAJQAAAKgFAIQgEAHgHAAQgFAAgFgHg");
	this.shape_8.setTransform(39.4,-3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLAgQgFgFgDgJQgDgJAAgJQAAgJADgIQADgJAGgEQAFgGAFAAQAGAAAFAGQAGAEADAJQADAIAAAJQAAAJgDAJQgDAJgGAFQgFAEgGAAQgFAAgGgEg");
	this.shape_9.setTransform(39.4,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgfAAQAAARAFAOQAEAOAHAIQAHAIAIAAQAJAAAHgIQAHgIAEgOQAFgOAAgRQAAgPgFgPQgEgOgHgIQgHgIgJAAQgIAAgHAIQgHAIgEAOQgFAPAAAPg");
	this.shape_10.setTransform(38.5,-3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPA1QgHgJgEgNQgFgOAAgRQAAgQAFgOQAEgOAHgHQAHgJAIAAQAJAAAHAJQAHAHAEAOQAFAOAAAQQAAARgFAOQgEANgHAJQgHAIgJAAQgIAAgHgIg");
	this.shape_11.setTransform(38.5,-3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgRgMIABADQAAADgCAEQgBADgDAEQgEAEgIADQAAAAAIABQAGABALAAQAJgBAMgEQAMgEALgJ");
	this.shape_12.setTransform(24.7,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#842824").s().p("AgaAMIgIgBQAIgCADgFQAEgEABgCIACgIIgBgDIA0AJQgMAIgMAFQgLAEgJAAIgRgBg");
	this.shape_13.setTransform(24.7,13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgTgVQANgGAJABQAMABAHADIAHADIADAgIgHgBQgHgBgKABQgIAAgIADQgJAEgFAIIgDgGQgDgGgCgJQgCgHACgIQACgIAJgEg");
	this.shape_14.setTransform(37.1,-14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7A1B16").s().p("AgZAVQgDgGgCgJQgCgHACgIQACgIAJgEQANgGAJABQAMABAHADIAHADIADAgIgHgBQgHgBgKABQgIAAgIADQgJAEgFAIg");
	this.shape_15.setTransform(37.1,-14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BA3B35").s().p("AFRAMIAFgIIgEgDQgZAVgxAAQhEAFhEABQhEABhCAAIiGgCIiEgCQhDgBhCABIgFgDIgKgGIgFgDIgBAAIAAAAQgKgCgGgDIgGgDIgCgDIADgCIAYAAIA2gCIBPgBIBhgBIBuAAIB0ACQBaACBCgEQBAgEAqgHQArgGAUgGQAVgFACgBIAIgBIAUgCQAUgCAWAPQgYgDgXAHQgXAHgUAOQgUAPgQAUIAMgZg");
	this.shape_16.setTransform(-7.1,-9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#842824").s().p("ABsB5Qg9gFgwgOQgxgPgpgTQgpgSgfgVQghgUgZgQQgbgTgWgNIhMgsIgpgYIgLgIIgBAAIgPgEIgIgEQAtAOArATQApATAqAVQAqAWApAXIBZAuQAlASAqANQAnAMArAGQAsAGArABQArAAAngEQAogFAhgJQAhgJAZgOQAEAHAIAGIAPANQAIAGAFAGIgEgBIgHAAIgFAAIgBAAQhYAWhKAGQgmADgjAAQghAAgdgDg");
	this.shape_17.setTransform(-9.8,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#842824").s().p("AgcBOQgTgCgNgEIgUgGQgCgJgGgIIgXgWQgPgMgLgNQgMgKgGgQQAKAKAMAJQAiASAlAHQAmAHAkgGQAmgGAhgPQAigSAYgeQAHgKAAgMIgBgIQAIAJABAMIgDAMIgJAUQgFALgGAJQgGAIgFAEQgBAAAAABQgBAAgBAAQAAAAAAAAQgBAAAAAAIgCgBIgEAIIADABQALAFAHAGQAIAGgBADQgBADgJAAQgKAAgOgDIgCAAIgCABQgWATgYAKQgXAJgWADIgTABIgUgBg");
	this.shape_18.setTransform(39.7,6.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("ABqh1QhCAEhcgCQg+gBg8AAQg8gBg2AAQg2ABgtAAQguABghABQghABgSAAIgTABIgCACQgDADAAADQAAAEAGADQAGAEAPADIAMAIQAMAHAcAQQAdARAwAcQAVAMAaAQQAZATAhAUQAgAVApATQAoATAyAPQAzAOA9AGQA8AGBLgGQBKgHBZgWQABABALAEQAMAEATADQAUAEAZgBQAZgBAbgKQAbgJAbgXQAAABAFABQAGABAHAAQAIABAGgBQAGgBABgEQABgFgEgEQgEgFgGgDQgGgEgEgCQgEgCgBgBQAFACAFgFQAGgGAGgKQAGgKAFgLQAFgLADgJQADgGAAgEQgCgOgIgIQgIgJgMgFQgMgEgOgEQgOgDgNgEQgNgEgKgGQgKgHgKgLQgKgKgLgMQgLgLgLgKQgMgJgMgFQgNgGgOACQgNABgGAAQgGABgCAAIgCAAIgTAGQgTAFgqAHQgpAHhCAEg");
	this.shape_19.setTransform(1.5,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A33128").s().p("AgFCTQg9gGgzgOQgygPgogTQgpgTgggVQghgUgZgTQgagQgVgMIhNgtIgogXIgMgIQgPgDgGgEQgGgDAAgEQAAgDADgDIACgCIATgBIAzgBIBPgCIBjgBIByABIB6ABQBcACBCgEQBCgEApgHQAqgHATgFIATgGIACAAIAIgBIATgBQAOgCANAGQAMAFAMAJQALAKALALIAVAWQAKALAKAHQAKAGANAEIAbAHQAOAEAMAEQAMAFAIAJQAIAIACAOQAAAEgDAGIgIAUIgLAVQgGAKgGAGQgFAFgFgCIAFADIAKAGQAGADAEAFQAEAEgBAFQgBAEgGABQgGABgIgBIgNgBIgFgCQgbAXgbAJQgbAKgZABQgZABgUgEQgTgDgMgEIgMgFQhZAWhKAHQgmADgiAAQgiAAgdgDg");
	this.shape_20.setTransform(1.5,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("AAoADQgKASgNAOQgNAPgNAKQgPAKgNADQgBgQADgMQAEgMAHgKQAHgJAIgIQAIgGAFgFQgFgDgHgGQgHgGgHgIQgHgJgFgKQgFgKgCgNQALgDALACQAMADAKAHQAMAHAKALQAKALAHAO");
	this.shape_21.setTransform(-53.1,-7.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A33128").s().p("AgjAtQAEgMAHgKQAHgJAIgIIANgLQgFgDgHgGQgHgGgHgIQgHgJgFgKQgFgKgCgNQALgDALACQAMADAKAHQAMAHAKALQAKALAHAOIgCAVQgKASgNAOQgNAPgNAKQgPAKgNADQgBgQADgMg");
	this.shape_22.setTransform(-53.1,-7.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BA3B35").s().p("AgKBdQgFgJgGgRQgGgRgGgZQgFgZgBgeQgCggAFgnIA5AAIgGALQgEAMgFASQgFAUAAAYQgBAWAJAcQAJAbAWAbIgtAOIgFgJg");
	this.shape_23.setTransform(15.2,3.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDAGQgBgDAAgDQAAgCABgDQACgDABAAQACAAACADQABACABADQgBADgBADQgCADgCAAQgBAAgCgDg");
	this.shape_24.setTransform(38,-5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AgRgVIAAAFQAAAFgBAHQgBAFgEAGQgEAHgHAFQAAAAAHACQAHABALAAQAJgBALgHQAMgHAMgO");
	this.shape_25.setTransform(24.3,14.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#842824").s().p("AgaAVIgIgCQAIgFADgHQAEgGABgFIABgMIAAgFIA0AOQgMAOgMAHQgLAHgJABIgFAAIgMgBg");
	this.shape_26.setTransform(24.3,14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BA3B35").s().p("AFRAMIAFgIIgEgDQgaAVgwAAQhEAFhEABQhFABhBAAIiGgCIiEgCQhDgBhBABIgGgDIgKgGIgFgDIgBAAIAAAAQgKgCgGgDIgGgDIgBgDIACgCIAYAAIA3gCIBOgBIBhgBIBuAAIB0ACQBbACBBgEQBAgEArgHQApgGAVgGQAVgFACgBIAIgBIAUgCQAUgCAWAPQgYgDgXAHQgXAHgUAOQgUAPgQAUIAMgZg");
	this.shape_27.setTransform(-7.5,-9.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#842824").s().p("ABsB5Qg9gFgwgOQgxgPgpgTQgpgSgfgVQgggUgagQQgbgTgWgNIhMgsIgpgYIgLgIIgBAAIgQgEIgHgEQAtAOArATQAqATApAVQApAWAqAXIBZAuQAlASApANQAoAMArAGQAsAGArABQArAAAngEQAogFAhgJQAhgJAZgOQAEAHAIAGIAPANQAIAGAFAGIgEgBIgHAAIgFAAIgBAAQhYAWhKAGQgmADgjAAQghAAgdgDg");
	this.shape_28.setTransform(-10.1,3.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#842824").s().p("AgcBOQgTgCgNgEIgUgGQgCgJgGgIIgXgWQgPgMgLgNQgMgKgGgQQAKAKAMAJQAiASAlAHQAmAHAkgGQAmgGAhgPQAigSAYgeQAHgKAAgMIgBgIQAIAJABAMIgDAMIgJAUQgFALgGAJQgGAIgFAEQgBAAAAABQgBAAgBAAQAAAAAAAAQgBAAAAAAIgCgBIgEAIIADABQALAFAHAGQAIAGgBADQgBADgJAAQgKAAgOgDIgCAAIgCABQgWATgYAKQgXAJgWADIgUABIgTgBg");
	this.shape_29.setTransform(39.3,6.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("An2hSQAMAHAcARQAdAQAwAcQAVAMAaARQAaASAgAUQAgAVApATQAoATAzAPQAyAOA9AGQA8AGBLgGQBKgHBagVIALAEQAMAEAUADQATAEAZgBQAZgBAbgKQAbgJAbgXQAAABAFABQAGABAHAAQAIABAGgBQAGgBABgEQABgFgEgEQgEgEgGgEQgGgEgEgCQgEgCgBAAQAFABAFgFQAGgGAGgKQAGgKAFgLQAFgLADgIQADgHAAgEQgCgOgIgIQgIgJgMgEQgMgFgOgEQgOgDgNgEQgNgEgJgGQgLgHgKgLQgKgKgLgMQgLgLgLgJQgMgKgMgFQgNgGgOACQgNABgGABQgGAAgCAAIgBAAQAAABgUAFQgTAFgpAHQgqAHhCAEQhCAEhcgCQg+gBg8AAQg8gBg2AAQg2ABgtAAQguABghABQghABgSAAQgTABAAAAIgCACQgCADAAADQgBAEAGADQAGAEAPAEg");
	this.shape_30.setTransform(1.2,1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A33128").s().p("AgFCTQg9gGgygOQgzgPgogTQgpgTgggVIg6gmQgagRgVgMIhNgsIgogYIgMgHQgPgEgGgEQgGgDABgEQAAgDACgDIACgCIATgBIAzgBIBPgCIBjgBIByABIB6ABQBcACBCgEQBCgEAqgHQApgHATgFIAUgGIABAAIAIAAIATgCQAOgCANAGQAMAFAMAKQALAJALALIAVAWQAKALALAHQAJAGANAEIAbAHQAOAEAMAFQAMAEAIAJQAIAIACAOIgDALIgIATIgLAVQgGAKgGAGQgFAFgFgBIAFACIAKAGQAGAEAEAEQAEAEgBAFQgBAEgGABQgGABgIgBIgNgBIgFgCQgbAXgbAJQgbAKgZABQgZABgTgEQgUgDgMgEIgLgEQhaAVhKAHQgmADgiAAQgiAAgdgDg");
	this.shape_31.setTransform(1.2,1.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BA3B35").s().p("AgIAdIgCgHIgFgQQgDgJgBgLQgBgLABgJQACgJAHgEIAZANIgDAIIgDAUQgCAKACAOQADAQAJAPg");
	this.shape_32.setTransform(-31,-2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BA3B35").s().p("AgMBHIgEgLQgFgLgGgTQgHgSgGgUQgGgWgDgXQgEgWADgUIBGAOIgBAKIgBAbIACAkQABARAEAVQADAUAHASQAHAQALAMg");
	this.shape_33.setTransform(-15.7,1.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BA3B35").s().p("AgHBfIgFgJQgFgJgHgQQgHgRgGgXQgFgVAAgeQAAgdAHgjIA7gFIgBALIgDAdIgDApQAAAUACAXQACAWAFAUQAHAUAKANg");
	this.shape_34.setTransform(-0.9,3.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BA3B35").s().p("AgKBdQgFgJgGgRQgGgRgFgZQgFgZgCgeQgBggAFgnIA3AAIgFALQgEAMgFASQgFAUAAAYQgBAWAJAcQAJAbAWAbIgtAOg");
	this.shape_35.setTransform(14,3.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("AA7ADQgOAPgUAMQgUAMgTAJQgWAIgUADQgCgNAFgLQAGgKAKgIQALgIAMgHQAMgFAIgDQgIgEgLgFQgLgFgKgHQgKgHgHgIQgIgJgDgLQAQgDARACQASADAPAFQASAHAPAJQAPAJALAM");
	this.shape_36.setTransform(-56.1,-7.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A33128").s().p("Ag1AmQAGgKAKgIQALgIAMgHIAUgIIgTgJQgLgFgKgHQgKgHgHgIQgIgJgDgLQAQgDARACQASADAPAFQASAHAPAJQAPAJALAMIgEASQgOAPgUAMQgUAMgTAJQgWAIgUADQgCgNAFgLg");
	this.shape_37.setTransform(-56.1,-7.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAiBjIgVgPQgNgKgLgOQgNgPgJgSQgJgTAAgUQgBgWAMgaQAKgUAUgXIgLAOQgIAMgIARQgHAQgCATQgCAUAGAUQAHAVASAXQARAXAiAWIgJgFg");
	this.shape_38.setTransform(26.5,2.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDAGQgBgDgBgDQABgCABgDQABgBAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQACAAACADQABACAAADQAAADgBADQgCADgCAAQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_39.setTransform(36.6,-5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3A0707").s().p("AgKASQgFgIAAgKQAAgJAFgHQAFgIAFAAQAGAAAEAIQAGAHgBAJQABAKgGAIQgDAHgHAAQgFAAgFgHg");
	this.shape_40.setTransform(37.6,-3.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgKAgQgFgFgEgJQgDgJAAgJQAAgJADgIQADgJAGgEQAFgGAFAAQAGAAAGAGQAFAEADAJQADAIAAAJQAAAJgDAJQgDAJgFAFQgGAEgGAAQgFAAgFgEg");
	this.shape_41.setTransform(37.6,-3.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AgeAAQAAARAEAOQAEAOAHAIQAIAIAHAAQAIAAAHgIQAIgIAEgOQAEgOAAgRQAAgPgEgPQgEgOgIgIQgHgIgIAAQgHAAgIAIQgHAIgEAOQgEAPAAAPg");
	this.shape_42.setTransform(36.7,-3.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPA1QgHgJgEgNQgEgOAAgRQAAgQAEgOQAEgOAHgHQAIgJAHAAQAIAAAHAJQAIAHAEAOQAEAOAAAQQAAARgEAOQgEANgIAJQgHAIgIAAQgHAAgIgIg");
	this.shape_43.setTransform(36.7,-3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AgRgOIAAADQAAAEgBAEQgBADgEAFQgDAFgHADIAGABQAHABALAAQAJgBALgEQAMgFALgJ");
	this.shape_44.setTransform(23.1,13.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#842824").s().p("AgaAOIgHgBQAHgDADgFQAEgFACgDIABgIIAAgDIAyAKQgLAJgMAFQgLAEgJABIgRgBg");
	this.shape_45.setTransform(23.1,13.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AgTgVQANgGAJABQALABAIADIAHADIACAgIgHgBQgGgBgKABQgIAAgIADQgJAEgEAIQgBAAgDgGQgCgGgCgJQgCgHACgIQABgIAJgEg");
	this.shape_46.setTransform(35.3,-14);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7A1B16").s().p("AgZAVIgEgPQgCgHACgIQABgIAJgEQANgGAJABQALABAIADIAHADIACAgIgHgBQgGgBgKABQgIAAgIADQgJAEgEAIIgEgGg");
	this.shape_47.setTransform(35.3,-14);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BA3B35").s().p("AFMAMIAFgIIgEgDQgZAVgwAAQhDAFhDABQhDABhBAAIiEgCIiCgCQhCgBhBABIgGgDIgJgGIgFgDIgBAAIAAAAQgKgCgFgDIgHgDIgBgDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAYAAIA2gCIBNgBIBggBIBtAAIByACQBZACBAgEQBAgEApgHQAqgGAUgGQAVgFACgBIAHgBIAUgCQAUgCAVAPQgXgDgXAHQgWAHgUAOQgUAPgQAUIAMgZg");
	this.shape_48.setTransform(-8.3,-9.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#842824").s().p("ABqB5Qg8gFgvgOQgxgPgogTQgogSgfgVQgggUgZgQQgbgTgVgNIhLgsIgogYIgMgIIgCAAIgOgEIgHgEQAsAOAqATQAqATApAVIBSAtIBYAuQAjASApANQAnAMArAGQArAGAqABQAqAAAngEQAogFAggJQAigJAXgOQAFAHAHAGIAPANQAIAGAGAGIgFgBIgIAAIgDAAIgBAAQhXAWhKAGQglADgjAAQggAAgdgDg");
	this.shape_49.setTransform(-10.8,3.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#842824").s().p("AgcBOQgSgCgNgEIgTgGQgDgJgFgIIgXgWQgPgMgLgNQgMgKgGgQQALAKALAJQAhASAlAHQAmAHAjgGQAlgGAhgPQAhgSAYgeQAHgKAAgMIgBgIQAIAJABAMIgDAMIgJAUQgFALgGAJQgGAIgFAEQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIgBgBIgEAIIACABQALAFAIAGQAHAGgBADQgBADgJAAQgKAAgNgDIgCAAIgCABQgWATgXAKQgXAJgWADIgTABIgUgBg");
	this.shape_50.setTransform(37.9,6.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2,1,1).p("AnwhSQAMAHAcARQAcAQAwAcQAVAMAZARQAaASAfAUQAgAVAoATQAoATAyAPQAxAOA9AGQA7AGBKgGQBJgHBYgVIAMAEQALAEATADQAUAEAZgBQAYgBAbgKQAbgJAagXQAAABAFABQAGABAHAAQAHABAGgBQAGgBABgEQABgFgEgEQgEgEgGgEQgFgEgFgCQgCgCgCAAQAFAAAFgEQAGgGAFgKQAGgKAFgLQAFgLADgIQADgHAAgEQgCgOgIgIQgIgJgMgEQgMgFgNgEQgOgDgNgEQgMgEgKgGQgKgHgKgLQgKgKgLgMQgLgLgLgJQgLgKgNgFQgMgGgOACQgMABgGABQgGAAgCAAIgCAAQAAABgTAFQgTAFgpAHQgpAHhBAEQhBAEhagCQg+gBg7AAQg7gBg1AAQg2ABgsAAQgtABghABQghABgSAAQgSABAAAAIgCACQgCADAAADQgBAEAGADQAGAEAPAEg");
	this.shape_51.setTransform(0.3,1.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A33128").s().p("AgFCTQg9gGgxgOQgygPgogTQgogTgggVIg5gmQgZgRgVgMIhMgsIgogYIgLgHQgPgEgGgEQgGgDABgEQAAgDACgDIACgCIASgBIAzgBIBOgCIBigBIBwABIB5ABQBaACBBgEQBBgEApgHQApgHATgFIATgGIACAAIAIAAIASgCQAOgCAMAGQANAFALAKIAWAUIAVAWQAKALAKAHQAKAGAMAEIAbAHQANAEAMAFQAMAEAIAJQAIAIACAOQAAAEgDAHIgIATIgLAVQgFAKgGAGQgFAEgFAAIAEACIAKAGQAGAEAEAEQAEAEgBAFQgBAEgGABQgGABgHgBIgNgBIgFgCQgaAXgbAJQgbAKgYABQgZABgUgEQgTgDgLgEIgMgEQhYAVhJAHQglADgiAAQghAAgdgDg");
	this.shape_52.setTransform(0.3,1.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BA3B35").s().p("AgMBHIgFgLIgLgeIgNgmQgGgWgDgXQgEgWADgUIBHAOIgBAKIgBAbIACAkQABARAEAVQADAUAHASQAHAQALAMg");
	this.shape_53.setTransform(-17.6,1.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BA3B35").s().p("AgHBfIgGgJQgFgJgHgQQgHgRgFgXQgGgVAAgeQAAgdAIgjIA8gFIgCALIgEAdIgCApQAAAUACAXQACAWAGAUQAGAUALANg");
	this.shape_54.setTransform(-2.7,3.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgDAGQgBgDgBgDQABgCABgDQACgDABAAQACAAACADQABACAAADQAAADgBADQgCADgCAAQgBAAgCgDg");
	this.shape_55.setTransform(35.4,-5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AgRgVIABAFQAAAFgCAHQgBAFgDAGQgEAHgIAFQAAAAAIACQAGABALAAQAJgBAMgHQAMgHALgO");
	this.shape_56.setTransform(21.7,14.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#842824").s().p("AgbAVIgGgCQAHgFAEgHQADgGABgFIACgMIgBgFIAzAOQgKAOgMAHQgMAHgJABIgFAAIgNgBg");
	this.shape_57.setTransform(21.7,14.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BA3B35").s().p("AFNAMIAFgIIgEgDQgZAVgxAAQhEAFhEABQhEAChCgBIiGgCIiEgCQhDgBhBACIgGgEIgKgGIgFgDIAAAAIgBAAIgBAAIgKgDQgJgGAJgEIAKAAIAEAAIA3gBIBOgCIBigBIBuAAIBzACQBbACBBgEQBBgEAqgHQAqgGAUgFIAXgHIAIgBIAUgCQAUgCAWAQQgYgEgXAHQgXAHgUAOQgUAPgQAUIAMgZg");
	this.shape_58.setTransform(-9.8,-9.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#842824").s().p("ABsB5Qg9gFgwgOQgygPgogTQgogSghgVQgggUgZgQQgbgTgWgNIhMgsIgogYIgNgIIgBAAIgOgEIgHgEQAsAOAqATQArATApAVQApAWAqAXIBaAuQAkASAqANQAnAMArAGQAsAGArABQAqAAAogEQAogFAhgJQAigJAYgOQAEAHAIAGIAPANQAIAGAGAGIgFgBIgIAAIgEAAIAAAAQhZAWhKAGQgmADgjAAQghAAgdgDg");
	this.shape_59.setTransform(-12.8,3.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,1,1).p("AoQhaQABAAAAABIAMAHQAMAHAcARQAdAQAwAcQAVAMAaARQAaASAgAVQAgAUApATQAoAUAzAOQAyAOA9AGQA8AGBLgGQBKgHBagVQAAAAALAEQAMAEAUADQATAEAZgBQAZgBAbgKQAcgJAagXQAAABAFABQAGABAHAAQAIABAGgBQAGgBABgEQABgEgEgFQgEgEgGgEQgGgEgEgCQgDgCgBAAQAEABAFgFQAGgGAGgKQAGgKAFgLQAFgKADgJQADgHAAgDQgCgPgIgIQgIgJgMgEQgMgFgOgEQgOgDgNgEQgNgDgJgHQgLgHgKgLQgKgKgLgLQgLgMgLgJQgMgKgMgFQgNgGgOACQgNABgGABQgGAAgCABIgBAAIgUAFQgTAFgpAHQgqAHhCAEQhCAEhcgCQg+gBg8AAQg8gBg2ABQg2AAgtABQgtAAgiABQgfABgSAB");
	this.shape_60.setTransform(-0.2,1.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A33128").s().p("AgNCTQg+gGgygOQgygOgpgUQgogTghgUIg6gnQgagRgUgMIhNgsIgogYIgMgHIgBgBQgSgLASgLIAxgCIBOgBIBkgBIByAAIB6ABQBbACBCgEQBCgEAqgHQApgHAUgFIATgFIACAAIAIgBIASgCQAOgCANAGQANAFALAKQAMAJALAMIAVAVQAKALAKAHQAKAHANADIAaAHQAOAEAMAFQANAEAIAJQAIAIABAPQABADgDAHIgIATIgLAVQgGAKgGAGQgFAFgFgBIAEACIALAGIAJAIQAEAFAAAEQgCAEgGABQgGABgHgBIgNgBIgGgCQgaAXgbAJQgbAKgZABQgZABgUgEQgUgDgLgEIgMgEQhZAVhLAHQglADgiAAQgiAAgdgDg");
	this.shape_61.setTransform(-0.6,1.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2,1,1).p("AAnAEQgJARgNAOQgOAPgMAKQgPAKgNADQgCgPAEgNQAEgMAHgKQAHgJAIgIQAIgGAEgEQgEgEgHgGQgIgGgGgIQgHgIgFgLQgFgKgCgNQAKgDAMADQAMACAKAHQALAHALALQAKALAHAO");
	this.shape_62.setTransform(-55.9,-7.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A33128").s().p("AgjAtQAEgMAHgKQAHgJAIgIIAMgKIgLgKQgIgGgGgIQgHgIgFgLQgFgKgCgNQAKgDAMADQAMACAKAHQALAHALALQAKALAHAOIgDAWQgJARgNAOQgOAPgMAKQgPAKgNADQgCgPAEgNg");
	this.shape_63.setTransform(-55.9,-7.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAPATQgJAAgKgFQgJgGgKgIIgLgOIAAgCIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACABIAKANQAJAHAJAFQAhAGgFgOQAAAAABAAQAAAAAAAAQAAAAAAgBQAAgBAAgCQAAgIgBgCIAAgDIACgBIACAAIACACQADAIAAAGQAAAJgFAGQgFAGgLAAg");
	this.shape_64.setTransform(35.7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:37.1,y:-14}},{t:this.shape_14,p:{x:37.1,y:-14}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:38.5}},{t:this.shape_10,p:{x:38.5}},{t:this.shape_9,p:{x:39.4}},{t:this.shape_8,p:{x:39.4}},{t:this.shape_7},{t:this.shape_6,p:{x:28.1}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:0.3}},{t:this.shape_1,p:{x:-14.6}},{t:this.shape,p:{x:-30.1}}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:39.3}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_15,p:{x:36.7,y:-14}},{t:this.shape_14,p:{x:36.7,y:-14}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_11,p:{x:38.2}},{t:this.shape_10,p:{x:38.2}},{t:this.shape_9,p:{x:39}},{t:this.shape_8,p:{x:39}},{t:this.shape_24},{t:this.shape_6,p:{x:27.7}},{t:this.shape_23,p:{x:15.2}},{t:this.shape_2,p:{x:0}},{t:this.shape_1,p:{x:-15}},{t:this.shape,p:{x:-30.5}},{t:this.shape_22},{t:this.shape_21}]},6).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},6).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_29,p:{x:36.7}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_15,p:{x:34.1,y:-14}},{t:this.shape_14,p:{x:34.1,y:-14}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_11,p:{x:35.5}},{t:this.shape_10,p:{x:35.5}},{t:this.shape_9,p:{x:36.4}},{t:this.shape_8,p:{x:36.4}},{t:this.shape_55},{t:this.shape_6,p:{x:25.1}},{t:this.shape_23,p:{x:12.5}},{t:this.shape_54},{t:this.shape_53},{t:this.shape,p:{x:-33.1}}]},6).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_29,p:{x:36.7}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_15,p:{x:34.8,y:-8.7}},{t:this.shape_14,p:{x:34.8,y:-8.7}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_64},{t:this.shape_6,p:{x:25.1}},{t:this.shape_23,p:{x:12.5}},{t:this.shape_54},{t:this.shape_53},{t:this.shape,p:{x:-33.1}}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-17.7,125.5,35.4);


(lib.fish1Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubblewater_anim();
	this.instance.setTransform(-69.6,5.1,0.198,0.198);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA3B35").s().p("AgIASQACgOgCgKIgDgUIgDgIIAagNQAGAEACAJQACAJgCALQgBALgDAJIgFAQIgCAHIgdAUQAJgPADgQg");
	this.shape.setTransform(23.8,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3B35").s().p("AgiBEQAHgSADgUQAEgVABgRIACgkIgBgbIgBgKIBHgOQADAUgEAWQgDAXgGAWQgGAUgHASIgLAeIgFALIhBAZQALgMAHgQg");
	this.shape_1.setTransform(8.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA3B35").s().p("AgaBDQAGgUACgWQACgXAAgUIgDgpIgDgdIgBgLIA8AFQAHAjAAAdQAAAegGAVQgFAXgHARQgHAQgFAJIgGAJIgzAFQALgNAGgUg");
	this.shape_2.setTransform(-6.6,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA3B35").s().p("AgoBYQAXgbAJgbQAIgcAAgWQAAgYgFgUQgFgSgFgMIgFgLIA5AAQAEAngBAgQgCAegFAZQgFAZgGARIgLAaIgFAJg");
	this.shape_3.setTransform(-21.8,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Ag7ADQAOAPAUAMQAUAMAVAJQAWAIATADQAEgNgGgLQgGgKgLgIQgKgIgMgHQgNgFgIgDQAIgEAMgFQALgFAKgHQAKgHAHgIQAIgJACgLQgPgDgRACQgTADgQAFQgRAHgQAJQgPAJgKAM");
	this.shape_4.setTransform(49.4,-7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A33128").s().p("AAPAzQgUgJgUgMQgUgMgNgPIgFgSQALgMAPgJQAQgJASgHQAPgFATgDQARgCAPADQgCALgIAJQgHAIgLAHQgJAHgMAFIgSAJIATAIQANAHALAIQAKAIAGAKQAFALgCANQgUgDgXgIg");
	this.shape_5.setTransform(49.4,-7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJA7QATgXAGgVQAHgUgDgUQgCgTgHgQQgHgRgJgMIgLgOQAVAXAKAUQALAaAAAWQgBAUgJATQgJASgNAPQgMAOgMAKQgNAKgJAFIgJAFQAjgWARgXg");
	this.shape_6.setTransform(-34.4,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAGQgBgDgBgDQABgDABgCQACgDABAAQACAAACADQACADAAACQAAADgCADQgCADgCAAQgBAAgCgDg");
	this.shape_7.setTransform(-44.6,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A0707").s().p("AgKASQgFgIAAgKQAAgJAFgHQAFgIAFAAQAGAAAFAIQAFAHAAAJQAAAKgFAIQgFAHgGAAQgGAAgEgHg");
	this.shape_8.setTransform(-45.7,-3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAgQgGgFgDgJQgDgJAAgJQAAgJADgIQADgJAGgEQAFgGAFAAQAGAAAFAGQAGAEADAJQADAIAAAJQAAAJgDAJQgDAJgFAFQgGAEgGAAQgFAAgFgEg");
	this.shape_9.setTransform(-45.7,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAgAAQAAARgFAOQgEAOgHAIQgHAIgJAAQgIAAgHgIQgHgIgEgOQgFgOAAgRQAAgPAFgPQAEgOAHgIQAHgIAIAAQAJAAAHAIQAHAIAEAOQAFAPAAAPg");
	this.shape_10.setTransform(-44.8,-3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPA1QgHgJgEgNQgFgOAAgRQAAgQAFgOQAEgOAHgHQAHgJAIAAQAJAAAHAJQAHAHAEAOQAFAOAAAQQAAARgFAOQgEANgHAJQgHAIgJAAQgIAAgHgIg");
	this.shape_11.setTransform(-44.8,-3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AASgMIAAADQAAADABAEQABADAEAEQAEAEAHADQAAAAgHABQgHABgLAAQgKgBgKgEQgMgEgMgJ");
	this.shape_12.setTransform(-30.9,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#842824").s().p("AgKAJQgMgFgMgIIA0gJIgBADIACAIQABACAEAEQADAFAHACIgHABIgRABQgKAAgKgEg");
	this.shape_13.setTransform(-30.9,13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAUgVQgNgGgJABQgMABgHADIgHADIgDAgIAHgBQAHgBAKABQAHAAAJADQAJAEAFAIIADgGQADgGACgJQACgHgCgIQgCgIgJgEg");
	this.shape_14.setTransform(-43.4,-14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7A1B16").s().p("AAJAPQgJgDgHAAQgKgBgHABIgHABIADggIAHgDQAHgDAMgBQAJgBANAGQAJAEACAIQACAIgCAHQgCAJgDAGIgDAGQgFgIgJgEg");
	this.shape_15.setTransform(-43.4,-14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BA3B35").s().p("AloACQgUgOgXgHQgXgHgYADQAWgPAUACIAUACIAIABQACABAVAFQAUAGArAGQAqAHBAAEQBCAEBagCIB0gCIBuAAIBhABIBPABIA2ACIAYAAIADACIgCADIgGADQgGADgKACIAAAAIgBAAIgFADIgKAGIgFADQhCgBhDABIiEACIiGACQhCAAhEgBQhEgBhEgFQgxAAgZgVIgEADIAFAIIAMAZQgQgUgUgPg");
	this.shape_16.setTransform(0.9,-9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#842824").s().p("AjyB5QhKgGhYgWIgBAAIgFAAIgHAAIgEABQAFgGAIgGIAPgNQAIgGAEgHQAZAOAhAJQAhAJAoAFQAnAEArAAQArgBAsgGQArgGAngMQAqgNAlgSIBZguQApgXAqgWQAqgVApgTQArgTAtgOIgIAEIgPAEIgBAAIgMAIIgoAYIhMAsQgWANgbATQgZAQghAUQgfAVgpASQgpATgxAPQgwAOg9AFQgdADghAAQgjAAgmgDg");
	this.shape_17.setTransform(3.5,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#842824").s().p("AgKBOQgWgDgXgJQgYgKgWgTIgCgBIgCAAQgOADgKAAQgJAAgBgDQgBgDAIgGQAHgGALgFIADgBIgEgIIgCABQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQgFgEgGgIQgGgJgFgLIgJgUIgDgMQABgMAIgJIgBAIQAAAMAHAKQAYAeAiASQAhAPAmAGQAkAGAmgHQAlgHAigSQAMgJAKgKQgGAQgMAKQgLANgPAMIgXAWQgGAIgCAJIgUAGQgNAEgTACIgUABIgTgBg");
	this.shape_18.setTransform(-46,6.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("AH3hSQgMAHgcARQgdAQgwAcQgVAMgaARQgaASggAUQggAVgpATQgoATgzAPQgyAOg9AGQg8AGhLgGQhKgHhagVIgLAEQgMAEgUADQgTAEgZgBQgZgBgbgKQgbgJgbgXQAAABgFABQgGABgHAAQgIABgGgBQgGgBgBgEQgBgFAEgEQAEgEAGgEQAGgEAEgCQAEgCABAAQgFABgFgFQgGgGgGgKQgGgKgFgLQgFgLgDgIQgDgHAAgEQACgOAIgIQAIgJAMgEQAMgFAOgEQAOgDANgEQANgEAJgGQALgHAKgLQAKgKALgMQALgLALgJQAMgKAMgFQANgGAOACQANABAGABQAGAAACAAIABAAQAAABAUAFQATAFApAHQAqAHBCAEQBCAEBcgCQA+gBA8AAQA8gBA2AAQA2ABAtAAQAuABAhABQAhABASAAQATABAAAAIACACQACADAAADQABAEgGADQgGAEgPAEg");
	this.shape_19.setTransform(-7.8,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A33128").s().p("AiBCTQhKgHhagVIgLAEQgMAEgUADQgTAEgZgBQgZgBgbgKQgbgJgbgXIgFACIgNABQgIABgGgBQgGgBgBgEQgBgFAEgEQAEgEAGgEIAKgGIAFgCQgFABgFgFQgGgGgGgKIgLgVIgIgTIgDgLQACgOAIgIQAIgJAMgEQAMgFAOgEIAbgHQANgEAJgGQALgHAKgLIAVgWQALgLALgJQAMgKAMgFQANgGAOACIATACIAIAAIABAAIAUAGQATAFApAHQAqAHBCAEQBCAEBcgCIB6gBIBygBIBjABIBPACIAzABIATABIACACQACADAAADQABAEgGADQgGAEgPAEIgMAHIgoAYIhNAsQgVAMgaARIg6AmQggAVgpATQgoATgzAPQgyAOg9AGQgdADgiAAQgiAAgmgDg");
	this.shape_20.setTransform(-7.8,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("AgnADQAKASANAOQANAPANAKQAPAKANADQABgQgDgMQgEgMgHgKQgHgJgIgIQgIgGgFgFQAFgDAHgGQAHgGAHgIQAHgJAFgKQAFgKACgNQgLgDgLACQgMADgKAHQgMAHgKALQgKALgHAO");
	this.shape_21.setTransform(46.5,-7.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A33128").s().p("AAKA8QgNgKgNgPQgNgOgKgSIgCgVQAHgOAKgLQAKgLAMgHQAKgHAMgDQALgCALADQgCANgFAKQgFAKgHAJQgHAIgHAGQgHAGgFADIANALQAIAIAHAJQAHAKAEAMQADAMgBAQQgNgDgPgKg");
	this.shape_22.setTransform(46.5,-7.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BA3B35").s().p("AgnBYQAWgbAJgbQAIgcAAgWQAAgYgFgUQgFgSgEgMIgGgLIA5AAQAFAngCAgQgBAegFAZQgGAZgGARQgGARgFAJIgFAJg");
	this.shape_23.setTransform(-21.8,3.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AASgVIAAAFQAAAFABAHQABAFAEAGQAEAHAHAFQAAAAgHACQgHABgLAAQgKgBgKgHQgMgHgMgO");
	this.shape_24.setTransform(-30.9,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#842824").s().p("AAKAWQgKgBgKgHQgMgHgMgOIA0gOIgBAFIACAMQABAFAEAGQADAHAHAFIgHACIgMABIgFAAg");
	this.shape_25.setTransform(-30.9,14.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BA3B35").s().p("AgIASQACgOgCgKIgDgUIgDgIIAZgNQAHAEACAJQABAJgBALQgBALgDAJIgFAQIgCAHIgdAUQAJgPADgQg");
	this.shape_26.setTransform(24.2,-2.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BA3B35").s().p("AgiBEQAHgSADgUQAEgVABgRIACgkIgBgbIgBgKIBGgOQADAUgEAWQgDAXgGAWQgGAUgHASQgGATgFALIgEALIhBAZQALgMAHgQg");
	this.shape_27.setTransform(8.9,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BA3B35").s().p("AgaBDQAGgUACgWQACgXAAgUIgCgpIgEgdIgBgLIA6AFQAJAjAAAdQgBAegGAVQgFAXgGARQgIAQgEAJIgGAJIgzAFQAMgNAFgUg");
	this.shape_28.setTransform(-5.8,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BA3B35").s().p("AgnBYQAWgbAJgbQAIgcAAgWQAAgYgFgUQgFgSgEgMIgFgLIA3AAQAFAngBAgQgCAegFAZQgFAZgGARQgGARgFAJIgFAJg");
	this.shape_29.setTransform(-20.8,3.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("Ag6ADQAOAPAUAMQAUAMATAJQAWAIAUADQACgNgFgLQgGgKgKgIQgLgIgMgHQgMgFgIgDQAIgEALgFQALgFAKgHQAKgHAHgIQAIgJADgLQgQgDgRACQgSADgPAFQgSAHgPAJQgPAJgLAM");
	this.shape_30.setTransform(49.3,-7.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A33128").s().p("AAPAzQgTgJgUgMQgUgMgOgPIgEgSQALgMAPgJQAPgJASgHQAPgFASgDQARgCAQADQgDALgIAJQgHAIgKAHQgKAHgLAFIgTAJIAUAIQAMAHALAIQAKAIAGAKQAFALgCANQgUgDgWgIg");
	this.shape_31.setTransform(49.3,-7.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAJA7QASgXAHgVQAGgUgCgUQgCgTgHgQQgIgRgIgMIgLgOQAUAXAKAUQAMAagBAWQAAAUgJATQgJASgNAPQgMAOgMAKIgVAPIgJAFQAigWARgXg");
	this.shape_32.setTransform(-33.3,2.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAGQgBgDgBgDQABgDABgCQACgDABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQACADAAACQAAADgCADQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgCgDg");
	this.shape_33.setTransform(-43.4,-5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3A0707").s().p("AgKASQgEgIgBgKQABgJAEgHQAFgIAFAAQAHAAAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAAQgFAAgFgHg");
	this.shape_34.setTransform(-44.3,-3.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAgQgFgFgEgJQgDgJAAgJQAAgJADgIQAEgJAFgEQAFgGAFAAQAGAAAFAGQAFAEADAJQAEAIAAAJQAAAJgEAJQgDAJgEAFQgGAEgGAAQgFAAgFgEg");
	this.shape_35.setTransform(-44.3,-3.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AAfAAQAAARgEAOQgEAOgHAIQgIAIgIAAQgHAAgHgIQgIgIgEgOQgEgOAAgRQAAgPAEgPQAEgOAIgIQAHgIAHAAQAIAAAIAIQAHAIAEAOQAEAPAAAPg");
	this.shape_36.setTransform(-43.5,-3.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOA1QgIgJgEgNQgEgOAAgRQAAgQAEgOQAEgOAIgHQAHgJAHAAQAIAAAIAJQAHAHAEAOQAEAOAAAQQAAARgEAOQgEANgHAJQgIAIgIAAQgHAAgHgIg");
	this.shape_37.setTransform(-43.5,-3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AARgOIAAADQAAAEABAEQACADADAFQAEAFAHADIgHABQgHABgKAAQgKgBgLgEQgLgFgLgJ");
	this.shape_38.setTransform(-29.9,13.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#842824").s().p("AgLAKQgLgFgLgJIAzgKIAAADIABAIQABADADAFQAEAFAHADIgGABIgSABQgKgBgLgEg");
	this.shape_39.setTransform(-29.9,13.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AAUgVQgNgGgJABQgLABgIADIgHADIgCAgIAHgBQAGgBAKABQAHAAAJADQAJAEAEAIQABAAADgGQACgGACgJQACgHgCgIQgBgIgJgEg");
	this.shape_40.setTransform(-42.1,-14);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7A1B16").s().p("AAJAPQgJgDgHAAQgKgBgGABIgHABIACggIAHgDQAIgDALgBQAJgBANAGQAJAEABAIQACAIgCAHIgEAPIgEAGQgEgIgJgEg");
	this.shape_41.setTransform(-42.1,-14);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BA3B35").s().p("AljACQgUgOgWgHQgXgHgXADQAVgPAUACIAUACIAHABQACABAVAFQAUAGAqAGQApAHBAAEQBAAEBZgCIBygCIBtAAIBgABIBNABIA2ACIAYAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAIgBADIgHADQgFADgKACIAAAAIgBAAIgFADIgJAGIgGADQhBgBhCABIiCACIiEACQhBAAhDgBQhDgBhDgFQgwAAgZgVIgEADIAFAIIAMAZQgQgUgUgPg");
	this.shape_42.setTransform(1.5,-9.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#842824").s().p("AjvB5QhIgGhXgWIgCAAIgEAAIgHAAIgEABQAFgGAIgGIAQgNQAGgGAEgHQAZAOAgAJQAiAJAmAFQAnAEAqAAQArgBArgGQArgGAngMQAogNAlgSIBYguIBSgtQApgVApgTQAqgTArgOIgGAEIgPAEIgBAAIgMAIIgoAYIhLAsQgVANgbATQgZAQggAUQggAVgnASQgoATgxAPQgvAOg9AFQgcADggAAQgjAAgmgDg");
	this.shape_43.setTransform(4.1,3.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#842824").s().p("AgKBOQgWgDgXgJQgXgKgWgTIgCgBIgCAAQgNADgKAAQgJAAgBgDQgBgDAHgGQAIgGALgFIACgBIgEgIIgBABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgFgEgGgIQgGgJgFgLIgJgUIgDgMQABgMAIgJIgBAIQAAAMAHAKQAYAeAhASQAhAPAlAGQAjAGAmgHQAlgHAhgSQALgJALgKQgGAQgMAKQgLANgPAMIgXAWQgFAIgDAJIgTAGQgNAEgSACIgUABIgTgBg");
	this.shape_44.setTransform(-44.7,6.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("AHxhSQgMAHgcARQgcAQgwAcQgVAMgZARQgZASggAUQggAVgoATQgoATgyAPQgxAOg9AGQg7AGhKgGQhJgHhYgVIgMAEQgLAEgTADQgUAEgZgBQgYgBgbgKQgbgJgagXQAAABgFABQgGABgHAAQgHABgGgBQgGgBgBgEQgBgFAEgEQAEgEAGgEQAFgEAFgCQACgCACAAQgFAAgFgEQgGgGgFgKQgGgKgFgLQgFgLgDgIQgDgHAAgEQACgOAIgIQAIgJAMgEQAMgFANgEQAOgDANgEQAMgEAKgGQAKgHAKgLQAKgKALgMQALgLALgJQALgKANgFQAMgGAOACQAMABAGABQAGAAACAAIACAAQAAABATAFQATAFApAHQApAHBBAEQBBAEBagCQA+gBA7AAQA7gBA1AAQA2ABAsAAQAtABAhABQAhABASAAQASABAAAAIACACQACADAAADQABAEgGADQgGAEgPAEg");
	this.shape_45.setTransform(-7.1,1.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A33128").s().p("Ah/CTQhJgHhYgVIgMAEQgLAEgTADQgUAEgZgBQgYgBgbgKQgbgJgagXIgFACIgNABQgHABgGgBQgGgBgBgEQgBgFAEgEQAEgEAGgEIAKgGIAEgCQgFAAgFgEQgGgGgFgKIgLgVIgIgTQgDgHAAgEQACgOAIgIQAIgJAMgEQAMgFANgEIAbgHQAMgEAKgGQAKgHAKgLIAVgWIAWgUQALgKANgFQAMgGAOACIASACIAIAAIACAAIATAGQATAFApAHQApAHBBAEQBBAEBagCIB5gBIBwgBIBiABIBOACIAzABIASABIACACQACADAAADQABAEgGADQgGAEgPAEIgLAHIgoAYIhMAsQgVAMgZARQgZASggAUQggAVgoATQgoATgyAPQgxAOg9AGQgdADghAAQgiAAglgDg");
	this.shape_46.setTransform(-7.1,1.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BA3B35").s().p("AlkACQgUgOgXgHQgXgHgYAEQAWgQAUACIAUACIAIABIAXAHQAUAFAqAGQAqAHBBAEQBBAEBbgCIBzgCIBuAAIBiABIBOACIA3ABIAEAAIAKAAQAJAEgJAGIgKADIgBAAIgBAAIAAAAIgFADIgKAGIgGAEQhBgChDABIiEACIiGACQhCABhEgCQhEgBhEgFQgxAAgZgVIgEADIAFAIIAMAZQgQgUgUgPg");
	this.shape_47.setTransform(0.5,-9.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,1,1).p("AIRhaQgBAAAAABIgMAHQgMAHgcARQgdAQgwAcQgVAMgaARQgaASggAVQggAUgpATQgoAUgzAOQgyAOg9AGQg8AGhLgGQhKgHhagVQAAAAgLAEQgMAEgUADQgTAEgZgBQgZgBgbgKQgcgJgagXQAAABgFABQgGABgHAAQgIABgGgBQgGgBgBgEQgBgEAEgFQAEgEAGgEQAGgEAEgCQADgCABAAQgEABgFgFQgGgGgGgKQgGgKgFgLQgFgKgDgJQgDgHAAgDQACgPAIgIQAIgJAMgEQAMgFAOgEQAOgDANgEQANgDAJgHQALgHAKgLQAKgKALgLQALgMALgJQAMgKAMgFQANgGAOACQANABAGABQAGAAACABIABAAIAUAFQATAFApAHQAqAHBCAEQBCAEBcgCQA+gBA8AAQA8gBA2ABQA2AAAtABQAtAAAiABQAfABASAB");
	this.shape_48.setTransform(-9.1,1.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A33128").s().p("Ah4CTQhLgHhZgVIgMAEQgLAEgUADQgUAEgZgBQgZgBgbgKQgbgJgagXIgGACIgNABQgHABgGgBQgGgBgCgEQAAgEAEgFIAJgIIALgGIAEgCQgFABgFgFQgGgGgGgKIgLgVIgIgTQgDgHABgDQABgPAIgIQAIgJANgEQAMgFAOgEIAagHQANgDAKgHQAKgHAKgLIAVgVQALgMAMgJQALgKANgFQANgGAOACIASACIAIABIACAAIATAFQAUAFApAHQAqAHBCAEQBCAEBbgCIB6gBIByAAIBkABIBOABIAxACQASALgSALIgBABIgMAHIgoAYIhNAsQgUAMgaARIg6AnQghAUgoATQgpAUgyAOQgyAOg+AGQgdADgiAAQgiAAglgDg");
	this.shape_49.setTransform(-8.7,1.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2,1,1).p("AgmAEQAJARANAOQAOAPAMAKQAPAKANADQACgPgEgNQgEgMgHgKQgHgJgIgIQgIgGgEgEQAEgEAHgGQAIgGAGgIQAHgIAFgLQAFgKACgNQgKgDgMADQgMACgKAHQgLAHgLALQgKALgHAO");
	this.shape_50.setTransform(46.6,-7.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A33128").s().p("AAKA8QgMgKgOgPQgNgOgJgRIgDgWQAHgOAKgLQALgLALgHQAKgHAMgCQAMgDAKADQgCANgFAKQgFALgHAIQgGAIgIAGIgLAKIAMAKQAIAIAHAJQAHAKAEAMQAEANgCAPQgNgDgPgKg");
	this.shape_51.setTransform(46.6,-7.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgOATQgLAAgFgGQgFgGAAgJQAAgGADgIIACgCIACAAIACABIAAADQgBACAAAIQAAACAAABQAAABAAAAQAAAAAAAAQABAAAAAAQgFAOAhgGQAJgFAJgHIAKgNIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABACIAAACIgLAOQgKAIgJAGQgKAFgJAAg");
	this.shape_52.setTransform(-45,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-43.4,y:-14}},{t:this.shape_14,p:{x:-43.4,y:-14}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-43.4,y:-14}},{t:this.shape_14,p:{x:-43.4,y:-14}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_23},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_22},{t:this.shape_21}]},6).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},6).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_18},{t:this.shape_17},{t:this.shape_47},{t:this.shape_15,p:{x:-43.4,y:-14}},{t:this.shape_14,p:{x:-43.4,y:-14}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_23},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_18},{t:this.shape_17},{t:this.shape_47},{t:this.shape_15,p:{x:-44.1,y:-8.7}},{t:this.shape_14,p:{x:-44.1,y:-8.7}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_52},{t:this.shape_6},{t:this.shape_23},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-17.7,128.3,35.4);


(lib.fish1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":1,"lefttoright":3,"static2":5,"righttoleft":6});

	// timeline functions:
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(3));

	// Layer 2
	this.instance = new lib.bubblewater_anim();
	this.instance.setTransform(-99.6,2.1,0.198,0.198);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},2).wait(3));

	// Layer 4
	this.instance_1 = new lib.fish1Left();
	this.instance_1.setTransform(57.9,-4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgOgbQAGgGAIAAQALAAAJAKQAIAKAAANQAAAOgIAKQgJAJgLABQgKgBgJgJQgHgKAAgOQAAgNAHgKQACgCADgCgAABgUQAHAAAFAGQAFAIAAAHQAAAKgFAGQgFAHgHAAQgFAAgFgHQgFgGAAgKQAAgFADgFQABgCABgDQAEgEAEgBQABgBABAAg");
	this.shape.setTransform(-43.4,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgEAHQgCgDAAgEQAAgDACgDQACgDACAAQACAAADADQACADAAADQAAAEgCADQgDADgCAAQgCAAgCgDg");
	this.shape_1.setTransform(-43.5,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAPQgGgGAAgJQABgFACgFIADgFQADgEAEgBIADgBQAGgBAFAHQAGAHAAAIQAAAJgGAGQgFAIgGAAQgGAAgEgIgAgGgRQgDADABAEQgBAFADADQACACADAAQABAAACgCQADgDAAgFQAAgEgDgDQgCgDgBAAQgDAAgCADg");
	this.shape_2.setTransform(-43.3,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgTAXQgIgKAAgNQAAgNAIgJIAEgFQAHgFAIAAQALgBAIALQAIAJAAANQAAANgIAKQgIAKgLAAQgKAAgJgKgAgBgTQgEABgEAFIgCAEQgDAFAAAFQAAAKAFAGQAFAHAFAAQAHAAAFgHQAFgGAAgKQAAgHgFgHQgFgHgHAAIgCABg");
	this.shape_3.setTransform(-43.4,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgPgbQAHgGAIAAQALAAAJAKQAHAKAAANQAAAOgHAKQgJAJgLABQgLgBgIgJQgIgKAAgOQAAgNAIgKQACgCACgCgAABgUQAHAAAFAGQAFAIAAAHQAAAKgFAGQgFAHgHAAQgFAAgFgHQgFgGAAgKQAAgFACgFQABgDACgCQADgEAFgBQABgBABAAg");
	this.shape_4.setTransform(-57,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgEAHQgCgDAAgEQAAgDACgDQACgDACAAQACAAADADQACADAAADQAAAEgCADQgDADgCAAQgCAAgCgDg");
	this.shape_5.setTransform(-57.1,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAQQgEgHAAgJQgBgFADgFIACgFQAEgFAEAAIADgBQAGgBAFAHQAFAHABAIQgBAJgFAHQgFAGgGABQgGgBgFgGgAgGgRQgCADAAAFQAAADACAEQACACADAAQABAAACgCQADgEAAgDQAAgFgDgDQgCgDgBAAQgDAAgCADg");
	this.shape_6.setTransform(-56.9,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgSAXQgJgKAAgNQAAgNAJgJIADgFQAHgFAIAAQALAAAIAKQAJAJgBANQABANgJAKQgIAKgLAAQgLAAgHgKgAgBgTQgEABgEAFIgCAEQgDAGAAAEQAAAJAFAHQAFAHAFAAQAHAAAFgHQAFgHAAgJQAAgIgFgGQgFgHgHAAIgCABg");
	this.shape_7.setTransform(-57,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AhjhXQANgTARAAQASAAAMATQAMAUAAAbQAAAbgMARQgMATgSAAQgRAAgNgTQgMgRAAgbQAAgbAMgUgABJhvQAPACALARQAMAUAAAbQAAAbgMASQgLAQgPACQgCAAgBAAIgBAAQgRAAgNgSQgMgSAAgbQAAgbAMgUQANgTARAAIABAAQABAAACAAgABHA7QgEAGgEAFQgkAqghAAQgbAAgggn");
	this.shape_8.setTransform(-50.3,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AiSAQQgFAAgFgBQACgGABgJIAAgBQABgMAAgTQACAAACgBQALABAOANQAGAFAGAIQAIAIAJANQgOACgPAAQgHABgIgBQgEAAgEgBgACDAbQgDAAgCgBQgPgGgNgDQgCAAgDgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBgBAAIAAgNQAIgFAGgFQADgDADgCQANgIAHAAQANAAAEAJQAEAPAHAPIAAARIgMAAQgHgCgGgD");
	this.shape_9.setTransform(-49.7,-9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.8,1,1).p("AAshyIAIABQBlAIgHA4QAXgrADgHQAKgXAWAAQAEAMAAAQQAAAugpAPQATAvgDAjIACAAQgZACgMgaQgIgcgHgKQgBgBAAgBIgKAAIgPAPIgCAHQgCgagMghAiCBxQgUgFgOggQgNgfAAgnQAAgrATgYAiShWQAKgJAJgFQBTgzBYAlABfgzQABAAABABABEhaQgJgQgPgIABpAHQACAhgOAaQgZAxgrADAhrB3QAAgBgBgBQgTgEgDAAQgegGgQgTQgQgSgNgwQgKgpAhgrAg6CCQgCgIgIABAgfCAQAFgIAJAC");
	this.shape_10.setTransform(-46.2,-1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AhmAwQgMgTAAgbQAAgZAMgTQANgUARABQASgBAMAUQAMATAAAZQAAAbgMATQgMATgSAAQgRAAgNgTgABIA/IgCgBQgQgBgLgSQgMgTAAgZQAAgbAMgUQALgRAQgBQAPABALARQAMAUAAAbQAAAZgMATQgLASgPABQAPgBALgSQAMgTAAgZQAAgbgMgUQgLgRgPgBIACgBIABAAQAJABAIAFQAHAFAFAIQANAUAAAbQAAAZgNATQgMAUgRAAgABGhCIAAAAg");
	this.shape_11.setTransform(-50,-1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("ACRAhIgNgFIgBgBIgFgBQgPgGgNgDIgFgBIgCAAIAAgBIAAgBIgCgBIAAgNIAOgKIAGgFQANgIAHAAQANAAAEAJQAEAPAGAPIAAARgAiKARIgIgBIgJgBIACgPIAAgBIABgfIAEgBQALABAOANIAMANIARAVQgOACgPAAIAAAAIgPAAg");
	this.shape_12.setTransform(-49.7,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A33128").s().p("AhrBpIgBgCIgWgEQgUgFgOgfQgNggAAgkQAAgtATgYQgTAYAAAtQAAAkANAgQAOAfAUAFQgegGgQgSQgQgTgNgwQgKgoAhgsIAJABIAPABQAOAAAPgDIgRgXQAKgIAJgGQBTgyBYAlIAIAAQBlAJgHA3IAagyQAKgXAWABQAEAMAAAQQAAAugpAOQATAwgDAjIACAAQgZACgMgbQgIgbgHgLIgBgBIgKAAIgPAOIgCAJQgCgcgMghIAEACIACAAIANAGIALAAIAAgSQgGgPgFgQQgDgKgNAAQgIAAgMAJIgGAEIgOAMIAAANIACABIAAABIAAAAIAAABIACABIAAAAIAFABQAMACAQAGQAMAhACAcQACAfgOAbQgZAxgrADIgEgDIAIgLIgIALQghAqgjAAQgcAAgggngAg6B1QgCgIgGAAIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAQAGAAACAIgAgfBzQAEgHAGAAIAAAAIAAAAIAEAAIgEAAIAAAAIAAAAQgGAAgEAHgAiMg3QgMAUAAAbQAAAZAMATQAMATASAAQARAAAMgTQANgTAAgZQAAgbgNgUQgMgTgRAAQgSAAgMATgAAAg8QgMAUAAAbQAAAZAMATQAKATASAAIAAAAIAGAAIAAAAQASAAAMgTQAMgTAAgZQAAgbgMgUQgGgJgHgEQgHgGgKAAIAAAAIgGAAIAAAAQgSAAgKATgABEhoQgJgQgPgHQAPAHAJAQgABbhCIAAAAg");
	this.shape_13.setTransform(-46.2,-0.3);

	this.instance_2 = new lib.fish1right();
	this.instance_2.setTransform(-53,-2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BA3B35").s().p("AgIAdIgCgHIgFgQQgDgJgBgLQgCgLACgJQACgJAGgEIAaANIgDAIIgDAUQgCAKACAOQADAPAJAPg");
	this.shape_14.setTransform(-65,-4.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BA3B35").s().p("AgMBHIgFgMIgLgdQgHgSgGgUQgGgWgDgXQgEgWADgUIBHAOIgBAKIgBAbIACAkQABARAEAVQADAUAHARQAHASALALg");
	this.shape_15.setTransform(-49.5,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BA3B35").s().p("AgHBfIgGgJQgFgJgHgQQgHgRgGgXQgFgVAAgeQAAgdAHgjIA8gFIgBALIgDAdIgCApQgBAUACAXQACAWAGAUQAGAUALANg");
	this.shape_16.setTransform(-34.6,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BA3B35").s().p("AgKBdQgFgJgGgRQgGgRgGgZQgFgZgBgeQgCggAFgnIA5AAIgGALQgEAMgFASQgFAUAAAYQgBAWAJAcQAJAbAWAbIgtAOIgFgJg");
	this.shape_17.setTransform(-19.4,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAjBjQgJgFgNgKQgNgKgLgOQgNgPgJgSQgJgTgBgUQAAgWALgaQAKgUAVgXIgLAOQgJAMgHARQgHAQgCATQgDAUAHAUQAGAVATAXQARAXAjAWIgJgFg");
	this.shape_18.setTransform(-6.8,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAPATQgJAAgKgFQgJgGgKgIIgLgOIAAgCIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACABIAKANQAJAHAJAFQAhAGgFgOQAAAAABAAQAAAAAAAAQAAAAAAgBQAAgBAAgCQAAgIgBgCIAAgDIACgBIACAAIACACQADAIAAAGQAAAJgFAGQgFAGgLAAg");
	this.shape_19.setTransform(3.8,-2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AgRgVIAAAFQAAAFgBAHQgBAFgEAGQgEAHgHAFQAAAAAHACQAHABALAAQAJgBALgHQANgHALgO");
	this.shape_20.setTransform(-10.2,12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#842824").s().p("AgbAVIgHgCQAIgFADgHQAEgGABgFIABgMIAAgFIAzAOQgLAOgMAHQgLAHgJABIgFAAIgNgBg");
	this.shape_21.setTransform(-10.2,12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AgTgVQANgGAJABQAMABAHADIAHADIADAgIgHgBQgHgBgKABQgIAAgIADQgJAEgFAIIgDgGQgDgGgCgJQgCgHACgIQACgIAJgEg");
	this.shape_22.setTransform(2.9,-10.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7A1B16").s().p("AgZAVQgDgGgCgJQgCgHACgIQACgIAJgEQANgGAJABQAMABAHADIAHADIADAgIgHgBQgHgBgKABQgIAAgIADQgJAEgFAIg");
	this.shape_23.setTransform(2.9,-10.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BA3B35").s().p("AFNAMIAFgIIgEgDQgZAVgxAAQhEAFhEABQhEAChCgBIiGgCIiEgCQhDgBhBACIgGgEIgKgGIgFgDIAAAAIgBAAIgBAAIgKgDQgJgGAJgEIAKAAIAEAAIA3gBIBOgCIBigBIBuAAIBzACQBbACBBgEQBBgEAqgHQAqgGAUgFIAXgHIAIgBIAUgCQAUgCAWAQQgYgEgXAHQgXAHgUAOQgUAPgQAUIAMgZg");
	this.shape_24.setTransform(-41.7,-11.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#842824").s().p("ABsB5Qg9gFgwgOQgxgPgpgTQgpgSgggVQgfgUgagQQgbgTgWgNIhMgsIgpgYIgLgIIgBAAIgQgEIgHgEQAtAOAqATQArATApAVQApAWArAXIBYAuQAlASApANQAoAMArAGQAsAGArABQArAAAngEQAogFAhgJQAigJAYgOQAEAHAHAGIAQANQAIAGAFAGIgEgBIgIAAIgDAAIgCAAQhYAWhKAGQgnADgiAAQghAAgdgDg");
	this.shape_25.setTransform(-44.7,1.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#842824").s().p("AgcBOQgTgCgNgEIgUgGQgCgJgGgIIgXgWQgPgMgLgNQgMgKgGgQQAKAKAMAJQAiASAlAHQAmAHAkgGQAmgGAhgPQAigSAYgeQAHgKAAgMIgBgIQAIAJABAMIgDAMIgJAUQgFALgGAJQgGAIgFAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgCgBIgEAIIADABQALAFAHAGQAIAGgBADQgBADgJAAQgKAAgOgDIgCAAIgCABQgWATgYAKQgXAJgWADIgUABIgTgBg");
	this.shape_26.setTransform(4.8,4.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("AoQhaQABAAAAABIAMAHQAMAHAcARQAdAQAwAcQAVAMAaARQAaASAgAVQAgAUApATQAoAUAzAOQAyAOA9AGQA8AGBLgGQBKgHBagVQAAAAALAEQAMAEAUADQATAEAZgBQAZgBAbgKQAcgJAagXQAAABAFABQAGABAHAAQAIABAGgBQAGgBABgEQABgEgEgFQgEgEgGgEQgGgEgEgCQgDgCgBAAQAEABAFgFQAGgGAGgKQAGgKAFgLQAFgKADgJQADgHAAgDQgCgPgIgIQgIgJgMgEQgMgFgOgEQgOgDgNgEQgNgDgJgHQgLgHgKgLQgKgKgLgLQgLgMgLgJQgMgKgMgFQgNgGgOACQgNABgGABQgGAAgCABIgBAAIgUAFQgTAFgpAHQgqAHhCAEQhCAEhcgCQg+gBg8AAQg8gBg2ABQg2AAgtABQgtAAgiABQgfABgSAB");
	this.shape_27.setTransform(-32.1,-0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A33128").s().p("AgNCTQg+gGgygOQgygOgpgUQgogTghgUIg6gnQgagRgUgMIhNgsIgogYIgMgHIgBgBQgSgLASgLIAxgCIBOgBIBkgBIByAAIB6ABQBbACBCgEQBCgEAqgHQApgHAUgFIATgFIACAAIAIgBIASgCQAOgCANAGQANAFALAKQAMAJALAMIAVAVQAKALAKAHQAKAHANADIAaAHQAOAEAMAFQANAEAIAJQAIAIABAPQABADgDAHIgIATIgLAVQgGAKgGAGQgFAFgFgBIAEACIALAGIAJAIQAEAFAAAEQgCAEgGABQgGABgHgBIgNgBIgGgCQgaAXgbAJQgbAKgZABQgZABgUgEQgUgDgLgEIgMgEQhZAVhLAHQglADgiAAQgiAAgdgDg");
	this.shape_28.setTransform(-32.5,-0.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("AAnAEQgJARgNAOQgOAPgMAKQgPAKgNADQgCgPAEgNQAEgMAHgKQAHgJAIgIQAIgGAEgEQgEgEgHgGQgIgGgGgIQgHgIgFgLQgFgKgCgNQAKgDAMADQAMACAKAHQALAHALALQAKALAHAO");
	this.shape_29.setTransform(-87.8,-9.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A33128").s().p("AgjAtQAEgMAHgKQAHgJAIgIIAMgKIgLgKQgIgGgGgIQgHgIgFgLQgFgKgCgNQAKgDAMADQAMACAKAHQALAHALALQAKALAHAOIgDAWQgJARgNAOQgOAPgMAKQgPAKgNADQgCgPAEgNg");
	this.shape_30.setTransform(-87.8,-9.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AAAgUQgHAAgFAGQgFAHAAAIQAAAJAFAHQAFAHAHAAQAFAAAFgHQAFgHAAgJQAAgFgDgFQgBgDgBgCQgEgEgEgBQgCgBAAAAgAAPgbQgGgGgJAAQgKAAgJAKQgIAKAAANQAAANAIAKQAJAKAKAAQALAAAIgKQAIgKAAgNQAAgNgIgKQgBgCgDgCg");
	this.shape_31.setTransform(36.2,-7.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgTAXQgHgJAAgOQAAgNAHgKQAJgKAKAAQAJAAAGAHIAFADQAHAKABANQgBAOgHAJQgJAKgLABQgKgBgJgKgAgMgOQgFAIAAAHQAAAKAFAGQAFAHAHAAQAFAAAFgHQAFgGAAgKQAAgEgDgGIgCgFQgDgEgFgBIgCgBQgHAAgFAGg");
	this.shape_32.setTransform(36.2,-7.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKAPQgGgGAAgJQAAgIAGgHQAEgGAGAAIADAAQAFACADAEIADAEQACAGABAFQAAAJgGAGQgEAIgHgBQgGABgEgIgAgBgRQgDADAAAEQAAAFADACQABADACAAQADAAACgDQADgCgBgFQABgEgDgDQgCgDgDAAQgCAAgBADg");
	this.shape_33.setTransform(36,-7.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("AgEAHQgCgDAAgEQAAgDACgDQADgDABAAQADAAACADQACADAAADQAAAEgCADQgCADgDAAQgBAAgDgDg");
	this.shape_34.setTransform(36.2,-8.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AAAgUQgHAAgFAGQgFAIAAAHQAAAJAFAHQAFAHAHAAQAFAAAFgHQAFgHAAgJQAAgFgDgFQAAgCgCgDQgDgEgFgBQgCgBAAAAgAAQgbQgHgFgJAAQgKAAgJAKQgHAJAAANQAAANAHAKQAJAKAKABQAMgBAIgKQAHgKAAgNQAAgNgHgJQgCgDgCgCg");
	this.shape_35.setTransform(49.8,-7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgSAXQgIgJAAgOQAAgNAIgKQAIgKAKABQAJgBAHAHIAEADQAIAKAAANQAAAOgIAJQgJAKgLAAQgKAAgIgKgAgMgOQgFAIAAAHQAAAKAFAGQAFAHAHAAQAFAAAFgHQAFgGAAgKQAAgFgDgFIgCgFQgEgEgEgBIgCgBQgHAAgFAGg");
	this.shape_36.setTransform(49.8,-7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgKAPQgGgGAAgJQAAgIAGgHQAFgGAFAAIAEABQAEABADAEIADAEQACAGAAAFQABAJgGAGQgEAIgHAAQgFAAgFgIgAgBgRQgDADAAAEQAAAEADAEQABACACAAQADAAACgCQADgEgBgEQABgEgDgDQgCgDgDAAQgCAAgBADg");
	this.shape_37.setTransform(49.6,-6.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCCCCC").s().p("AgEAHQgCgDAAgEQAAgDACgDQADgDABAAQADAAACADQACADAAADQAAAEgCADQgCADgDAAQgBAAgDgDg");
	this.shape_38.setTransform(49.8,-8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AhFhvIAAAAQASAAAMATQANAUAAAbQAAAbgNASQgMASgSAAIAAAAQgBAAgCAAQgPgCgLgQQgMgSAAgbQAAgbAMgUQALgRAPgCQACAAABAAgAAohXQgMAUAAAbQAAAbAMARQAMATASAAQARAAANgTQAMgRAAgbQAAgbgMgUQgNgTgRAAQgSAAgMATgABCBJQggAngbAAQghAAgkgqQgEgFgEgG");
	this.shape_39.setTransform(43.1,-4.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AiDAcQgGADgHADIgMAAIAAgSQAHgPAEgPQAEgJANAAQAHAAANAJQADABADADQAGAFAIAFIAAANQgBAAgBABQAAAAAAABQAAAAAAABQgBAAgBAAQgDABgCAAQgMADgQAGQgCABgCABACTAQQAFAAAFgBQgCgGgBgJIAAAAQgBgNAAgTQgCAAgCAAQgLAAgOANQgGAFgGAIQgIAIgJANQAOACAPABQAHAAAIgBQAEAAAEgBg");
	this.shape_40.setTransform(42.4,-16.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.8,1,1).p("AgrhyIgIABQhlAIAHA4QgXgrgDgHQgKgXgWAAQgEAMAAAQQAAAuApAPQgTAvADAjIgCAAQAZACAMgaQAIgcAHgKQABgBAAgBIAKAAIAPAPIACAHQgCAhAOAaQAZAxArADAhDhaQAJgQAPgIAhegzQgBAAgBABAhoAHQACgaAMghACThWQgKgJgJgFQhTgzhYAlACfg9QATAYAAArQAAAngNAfQgOAggUAFQAegGAQgTQAQgSANgwQAKgpghgrAAgCAQgFgIgJACAA7CCQACgIAIABABsB3QAAgBABgBQATgEADAA");
	this.shape_41.setTransform(38.9,-8.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCCCCC").s().p("AArAwQgMgTAAgbQAAgZAMgUQAMgSASgBQARABANASQAMAUAAAZQAAAbgMATQgNATgRABQgSgBgMgTgAhIA+QgRABgMgUQgNgTAAgZQAAgbANgTQAFgJAHgFQAIgGAJAAIABAAIACABQAQABALASQAMATAAAbQAAAZgMATQgLASgQABQgPgBgLgSQgMgTAAgZQAAgbAMgTQALgSAPgBQgPABgLASQgMATAAAbQAAAZAMATQALASAPABIgCAAgAhFA+IAAAAg");
	this.shape_42.setTransform(42.7,-8.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#663300").s().p("AibAhIAAgRQAGgPAEgPQAEgJANAAQAHAAANAJIAGAEIAOAKIAAANIgCABIAAAAIAAACIgCAAIgFABQgNADgPAGIgEACIgCAAIgNAFgAB8ARQgPAAgOgCIARgVIAMgNQAOgNALAAIAEAAIABAfIAAABIADAPIgKABIgIABIgPAAIAAAAg");
	this.shape_43.setTransform(42.4,-16.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A33128").s().p("AgUBmIgIgLIAIALIgEADQgrgDgZgxQgOgbACgfIgCgJIgPgOIgKAAIgBABQgHALgIAbQgMAbgZgCIACAAQgDgjATgwQgpgOAAguQAAgQAEgMQAWgBAKAXIAaAyQgHg3BlgJIAIAAQgPAHgJAQQAJgQAPgHQBYglBTAyQAJAGAKAIIgRAXQAPADAOAAIAPgBIAJgBQAhAsgKAoQgNAwgQATQgQASgeAGQAUgFAOgfQANggAAgkQAAgtgTgYQATAYAAAtQAAAkgNAgQgOAfgUAFIgWAEIgBACQggAngcAAQgjAAghgqgAA7B1IAAAAIABgCQACgGAFAAIAAAAIAAAAIACAAIgCAAIAAAAIAAAAQgFAAgCAGIgBACIAAAAgAAgBzQgEgHgGAAIAAAAIAAAAIgBAAIgCAAIgBAAIABAAIACAAIABAAIAAAAIAAAAQAGAAAEAHgABSg3QgNAUAAAbQAAAZANATQAMATARAAQASAAAMgTQAMgTAAgZQAAgbgMgUQgMgTgSAAQgRAAgMATgAgyhJQgHAEgGAJQgMAUAAAbQAAAZAMATQAMATASAAIAAAAIAGAAIAAAAQASAAAKgTQAMgTAAgZQAAgbgMgUQgKgTgSAAIAAAAIgGAAIAAAAQgKAAgHAGgAhogFQACgcAMghQgMAhgCAcgAhthrQgFAQgGAPIAAASIALAAIANgGIACAAIAEgCQAQgGAMgCIAFgBIAAAAIACgBIAAgBIAAAAIAAgBIACgBIAAgNIgOgMIgGgEQgMgJgIAAQgNAAgDAKg");
	this.shape_44.setTransform(38.9,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:57.9}}]}).to({state:[{t:this.instance_1,p:{x:37.9}}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).wait(1));

	// Layer 5
	this.text = new cjs.Text("sdfadf", "bold 14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 116;
	this.text.setTransform(52,9.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4).to({x:-48},0).wait(1).to({x:-58,y:13.2},0).wait(2).to({x:45,y:8.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-21.2,128.3,54.5);


// stage content:



(lib.fishingCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:53,win:59});

	// timeline functions:
	this.frame_0 = function() {
		/* if (_root.MMplayerType == undefined) {
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
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "TranslationGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/fishing.xml", "TranslationGame");
		}*/
	}
	this.frame_52 = function() {
		/* stop();
		dispatchEvent ({type:"ready", bubbles:true});
		
		playGame.onRelease = function() {
			gotoAndStop("game");
		}*/
	}
	this.frame_53 = function() {
		/* stop();
		
		if(game != undefined) delete(game);
		var game:RunGame = new RunGame(this);
		dispatchEvent ({type:"play", bubbles:true, game:game});
		
		*/
	}
	this.frame_59 = function() {
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(51).call(this.frame_52).wait(1).call(this.frame_53).wait(6).call(this.frame_59).wait(5));

	// Text
	this.text = new cjs.Text("Fishing", "47px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 336;
	this.text.setTransform(133,10);

	this.text_1 = new cjs.Text("Fishing", "47px 'Arial'", "#009CEA");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 49;
	this.text_1.lineWidth = 336;
	this.text_1.setTransform(135,12);

	this.text_2 = new cjs.Text("Catch fish by clicking on the fish that matches the prompt in the sky", "14px 'Arial'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 371;
	this.text_2.setTransform(294.5,289);

	this.text_3 = new cjs.Text("Catch fish by clicking on the fish that matches the prompt in the sky", "14px 'Arial'", "#3E2B17");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 371;
	this.text_3.setTransform(295.5,291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{x:135,y:12,text:"Fishing",font:"47px 'Arial'",color:"#009CEA",lineHeight:49,lineWidth:336}},{t:this.text,p:{x:133,y:10,text:"Fishing",font:"47px 'Arial'",color:"#FFFFFF",lineHeight:49,lineWidth:336}}]},2).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1,p:{x:135,y:12,text:"Fishing",font:"47px 'Arial'",color:"#009CEA",lineHeight:49,lineWidth:336}},{t:this.text,p:{x:133,y:10,text:"Fishing",font:"47px 'Arial'",color:"#FFFFFF",lineHeight:49,lineWidth:336}}]},50).to({state:[]},1).to({state:[{t:this.text_1,p:{x:312.5,y:240.5,text:"Congratulations!",font:"43px 'Arial'",color:"#000066",lineHeight:45,lineWidth:329}},{t:this.text,p:{x:376.5,y:297.4,text:"You found all of the matches! Great job.",font:"16px 'Arial'",color:"#000066",lineHeight:18,lineWidth:201}}]},6).wait(5));

	// Text BG
	this.instance = new lib.fadedBackground();
	this.instance.setTransform(310,312,1.941,0.2,0,0,0,171,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleY:1,alpha:0.738},22,cjs.Ease.get(1)).to({_off:true},1).wait(11));

	// Buttons
	this.playGame = new lib.playgame();
	this.playGame.setTransform(307.2,441.9,1,1,0,0,0,75.5,16.2);
	this.playGame._off = true;

	this.playAgain = new lib.playAgain();
	this.playAgain.setTransform(381.5,357.2,1,1,0,0,0,38.5,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,102,0)").s().p("Al2BoIAAjQILtAAIAADQg");
	this.shape.setTransform(450.5,368.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playGame}]},44).to({state:[{t:this.playGame}]},8).to({state:[]},1).to({state:[{t:this.shape},{t:this.playAgain}]},6).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.playGame).wait(44).to({_off:false},0).to({y:371.9},8,cjs.Ease.get(1)).to({_off:true},1).wait(11));

	// Penguin
	this.instance_1 = new lib.walking_penguin();
	this.instance_1.setTransform(516,221.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.penguin_standing("synched",0);
	this.instance_2.setTransform(335.8,154.5);

	this.tergetFood = new lib.tergetFood();
	this.tergetFood.setTransform(265.9,364.2,1,1,0,0,0,5,6);
	this.tergetFood.alpha = 0;

	this.penguin = new lib.penguin();
	this.penguin.setTransform(170.8,225.6,1,1,0,0,0,132.8,143.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.penguin},{t:this.tergetFood}]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:216},49).to({_off:true},1).wait(12));

	// Fish bucket
	this.bucket = new lib.bucket();
	this.bucket.setTransform(31.9,306.7,1,1,0,0,0,37,33.6);
	this.bucket._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bucket).wait(53).to({_off:false},0).wait(11));

	// Foreground
	this.instance_3 = new lib.island("synched",0);
	this.instance_3.setTransform(85.4,180.4,1.194,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80A559").s().p("AkZAWIB6CHIjIgMIAIlDIAgAJIBSAZQA0APBCAVQBBAWBEAaQBGAaBDAcQBCAcA3AdQA2AeAiAfImFhwIDPCzg");
	this.shape_1.setTransform(35.4,353.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9E882").s().p("AgugzIBDBpIk3gtIEDARIgnhgIFpCNg");
	this.shape_2.setTransform(28.5,367.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B9E882").s().p("ADIA3IhQgSIhugaIh5gbIh2gcIGnBHIAahYIAKB7IgegHg");
	this.shape_3.setTransform(60.7,364.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AAHiuQAAAAgDAWQgDAWgBAjQAAAjAHAoQAHAmAUAmQAUAlAmAaQAAAAgTAFQgSAFgdAJQgbAIggAKQgfAKgbAJIBFlWg");
	this.shape_4.setTransform(84,389);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("AgWinIAdgHIgDAXQgDAVgBAjQAAAjAHAoQAHAmAUAmQAUAlAmAaIgTAFIgvAOIg7ARIg6AUg");
	this.shape_5.setTransform(84,389);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B6A3A").s().p("AjMABIg0hYIFRBuIhmh5IEWA6IgOA+IgagoIiLgmIAdB+Ij9hYIAAAvIhZBGg");
	this.shape_6.setTransform(54.7,375.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C98F4B").s().p("AiYjGIg0haIFRBxIhph8IEZA6IhZGAQABAAgRAQQgSAQgsAXQgtAXhSAXQhRAXiCAQIhwARg");
	this.shape_7.setTransform(49.5,395.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B57F4E").s().p("AAdjaIhHgpIB5ARIicH1g");
	this.shape_8.setTransform(23.7,398.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("ACljpIieH2IicAKIgPotg");
	this.shape_9.setTransform(15,397.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9B6A3A").s().p("AikkWIFJAtIieH1IicALg");
	this.shape_10.setTransform(15,397.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B9E882").s().p("AITD3QgKgTgbgkQgagkgwg1Qgwg1gfgYQgegYgPgEQgMgFgDAAQBLgTA6gCQA7gBAiAEIAiAGQilhIiXgrQiXgqiCgUQiDgUhrgFQhrgEhMAEQhNAFgpAGIgpAGIAAg4IAogCQAogCBHAAQBHABBhAGQBgAGByARQBwAQB9AeQB9AdCAAvQCBAwB9BCIgWgCIg5gFIhMgFQgpgBgnABQgnACgeAGIASAJQARAMAaAWQAaAWAeAgQAdAhAYArQAZAqAOA0IgLgSg");
	this.shape_11.setTransform(63.4,346.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A2CE7A").s().p("AhNEHIg2gVIhKgbIhOgcIhEgZIgrgPIBGBrIk5gtIACnbIApgCQAngCBIAAQBGABBhAGQBgAHByAQQBwAQB9AeQB9AdCBAvQCBAwB9BEIgXgDIg5gGIhMgFQgpgBgnABQgoACgcAGIARAJQARAMAbAWQAaAWAdAgQAdAhAZArQAZAqANA0IlLh1IgHBbIgYgFIg/gPIhZgUIhigVIhjgTIBxB2IgWgIg");
	this.shape_12.setTransform(63.3,347.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AqcIaIAGwzIAnAAIBrACQBFACBaAHQBcAGBpAOQBpANBtAXQBvAWBuAiQBuAiBlAvQBkAvBTA/IgrgHQgqgHhJgGQhJgFheADIARAMQAPAMAYAYQAYAXAaAiQAZAiAWArQAWArALAyIk5hnQgBAAgIAaQgJAZgIAoQgHAqADAzQADAyAWAzQAXAzA0ArIgTAEIgtALIg5APQgdAHgYAIQgYAIgLAHQgIAGgLANQgLANgUASQgTARgjATQgkATg8ASQg8ARhaANQhZAOiAAFg");
	this.shape_13.setTransform(66.9,371.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#AF7C5A").ss(0.9,1,1).p("AmTFoIgKqeQgBAAABgFQACgFALgHQAMgHAfgHQAfgIA7gFQA6gFBfAAIgdKYAhkEnIAiqEIHEBhQAAAAAHAGQAHAGAHALQAHAKABAPIgBA3QgBAygCBUQgCBLgCBhQgBAJAAAKQAAACAAADQAAAOAAAPIgDBlQAAAIAAAH");
	this.shape_14.setTransform(-48.8,231.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9B6A3A").s().p("AnBh8IABgGQABgFAMgGQAMgIAfgHQAegHA7gFQA7gFBeAAIgdKXQh9AdiGAagAFvH/IABgOIAAAPgAgOHrIg4gcIhCARIAjqEQAyAsA2AfQA4AgA3AVQA2AUAtANQAtAKAaAGIAcAFIAIHZgAFehDIAIAGQAHAGAHALQAHALAAAOgAgVmeIAXgHIA9gRIBPgTQAqgKAkgHQAkgGAVgBIAoAAIgEgJQgCgHgBgMQAAgLAHgJQAHgJATgDQAbgDAZAAQAYAAAPABIAQACIgJAEQgJAFgLALQgKAKgIARQgGAQgDAPIgDAaIgBAJIgXACIg+AFIhUAFIhdAEIhWABQgoAAgXgDg");
	this.shape_15.setTransform(-45.2,212.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C98F4B").s().p("AoeFcIAGn5QA6ASA8AIQA7AIA3gJQA4gIAvggQAugfAjg+QAFgJAJgEQAKgDAJADQAKADAFAKQAaCQAbCKIgRDBIgPCKQh3AYh6AAQh8AAh+gYgACCgQQAWihAPiuIF4gUIgJAwIgbCAIgqC9QgYBogeB4IgEAPIkiAAQgVALgMAYQAYiEAWiYgAAAkLIAChTIgBARIgCBPIABgNg");
	this.shape_16.setTransform(49.3,231.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B57F4E").s().p("AC3C7QALhlAIhfQAIhhAFhVQAFhVAAhCIB0AdIgEAmIgLBmQgHBBgLBVQgLBTgOBgQgNBXgQBZIhLAAIgJAZIASiqgAmOFMIgcAAIgInYIgcgFQgagFgtgNQgtgMg2gVQg3gVg4ggQg4gfgygrIHFBgIAdAwIgBA4IgDCDIgECuIAAATIAAAFIgBAeIgCBlIgBAOgAJvEGIAFgUIAhiFIAXhbIAIggIBOk/IAUgXQARAAAaAGIARAFIgWBjIAAEWIgIAeIgTBOIgPBBIgKAPIhGAqgAB7jsQgFgKgJgDQgKgEgJAEQgKADgFAKQgiA9gtAgQgvAgg3AIQg3AIg8gIQg7gIg7gRIAAAAIABh2Ig6hNIApgCIANAIQAVAQAZAdQAYAdAXAvIgCgNIgFghQgEgUgGgXQgHgXgJgVQAWAKAcAkQAbAjAYA0IgCgQIgIgqQgGgZgLgcIgDgIQAaATAcAiQAeAkAbA5IgCgQIgGgoQgFgZgHgcQgIgcgMgZQAcAMAhArQAhArAeBAIgDgUQgDgUgHgfQgHgegNgjQgHgSgIgQIEJgNIgCAeIgEBUIAAAMIgDAzIgBAMIgDA0IgBAPIgIBsIgBARIgBAQQgciJgaiQg");
	this.shape_17.setTransform(29.6,228.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#80A559").s().p("AAmBAIgXgWQgNgKgKgHIgIgEIgIgEIgCgBIAHAQIAFALQAJAYAFAVQAGAZADARIACAPQgZg5gegeIgMgNQgTgRgRgKIgIgEIgCgBIgDABIADAGIANAbIAEAMQAMAgAEAWIAFAXQgXgvgYgaIgPgOQgNgLgLgGIgHgFIgGgCIgCgBIALAaIABADQALAhAFAVIAEAYQgWgwgZgZIgGgHQgRgQgPgJIgIgEIgDgBIhXAEIgZABIABABIBMBNQgGACgcgEQgcgFgqgIIhagTIhggVIhCgQIgUgFIgQgDIgsgKIgBgBIgBAAIgBAAIgYgHIlfAmIgDABIgDAAIAAjFQAyAUAzAGQAzAIA0gBQA1ABA0gBQA1gBA1ADQgVABgTAIQgTAJgRAMIgiAXQgRAKgSAFQA/AEA/ABQA+ABA9AHQA8AGA6ATQgEgKAEgMQADgMABgLQAAgNgOgKQBxAIBuAMQBvALBwAIQBtAIBwgDQBxgDB0gVIgBALQgCAKgHAIQBBAKA+ABQA+ABA9gCQA9gCA+AAQAuAAAvADIA/gtIAIAFIAFADIALAJIAQANIAAAAIAMAMIAIAIQASARAOARQARAVAJANIAJAPQgpglgkgSIgKgFIgJgDQgXgIgUgDIgHgBIgKgBIgKAAIgRANIgGABIgVAAIgfACIgmADIhcAEIhIAEIgXABIhPADIgrABQgPAAgagFIgPgEIgkgKIgsgLIgTgGIkoAPIAEAFQAHAOAFAOIABACQAMAdAHAaQAHAZADAQIADAQQgbg5gegfg");
	this.shape_18.setTransform(16.3,190.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B9E882").s().p("APwCYQhrgEhpgHIjugRQh4gJh4gGIAHgDIAEgBQAYgIASgBIA3gBIBnAAICDAAQBGAABEACIAAAAQBFACA6ADIBcAIIAEABQAmAFAHAJIgWAUIgIAHIgcAAgAl8hCIAZgPQAKgHAOgHQgXgPgZgHQgYgHgPAAQhRgDhQAGQhPAHhRAJQhQAKhSAHQhRAHhTgCIAAggIAAAAIADABIAFAAIAVAAIBMABQAvAAA4gCQA5gBA4gFQA4gEAvgJQAwgJA8gEQA+gEBAAAQBBgBA7AEQA7ADArAGQAsAGARAJQAAAOgPAHQgPAGgXACQgWABgWAAIgmgBQgLAAgIAGIgCAAIgDACIgGAFIgBACIgBAAIgMAPIgEAHIgBACQgmgHgmgDg");
	this.shape_19.setTransform(14.5,165.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A2CE7A").s().p("AQOCYQgegNgYgEIgJgBIgGgBIgIAAIgDAAIAAAAIgQgNIgLgJIgFgDIgIgGIg+AuQgvgEgvAAQg9AAg9ADQg+ACg+gCQg+gBhAgKQAGgIACgKIABgKQhzAVhxADQhxADhtgIQhwgIhvgLQhugMhxgIQAOAKAAAMQgBAMgDAMQgDAMADAKQg6gTg8gGQg9gHg+gBQg/gCg+gEQARgEARgKIAigXQARgMATgJQATgJAWAAQg1gDg1ABQg1ABg1gBQgzAAgzgHQg0gHgxgTIAAi2QBSABBSgGQBRgHBRgKQBQgKBQgGQBQgHBQADQAQAAAYAIQAYAHAXAOQgOAHgKAIIgYAOQAlAEAmAHIgEAJIgEAJIgaAFIhCAOIhaAUIhfAXQgvAMglALQglALgRAKQgQAKANAFQAMADAjACQAhACAwgBIBjgDIBmgDIBZgFQA5gEAqAAQAqAAAfADQAgACAaAFQAZAEAZAHQAVAGAcgBQAcgCAcgFQAfgFAZgEIAqgLIARgFIgKALQgKAJgMAQQgLAPgGAQQgGAQAHAMQAIAKAcgJQAcgIAlgQIBJgeIALgEIgHACQB5AGB3AJIDvASQBoAHBrADIAcABIAIgHQANAJANAMIAFAFIAEAEQAdAcAYAbIAlAuIAPATQgwgqgngRgAqnDEIgRgEIARAEIATAFIgTgFgAGhC9IgQgEIAQADQAZAGAPAAIArgBIBPgEIAYgBIgYACIhPADIgrACQgPgBgZgFgAl9DCIAZgBIgYACgANDCwIAVgBIgVACIgfABIAfgCgAlYimIAHgGIgBABIgHAGIABgBg");
	this.shape_20.setTransform(20.3,173.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AxziAIFfgmIAYAGIABAAIAAAAIABABIAsAKIARAEIAUAEIBCAQIBgAVIBaATQApAJAcAEQAcAEAHgCIhNhNIAYgBIBXgFIAEABIAHAEQAPAJASARIAGAGQAYAaAXAvIgFgXQgEgWgMghIgBgDIgLgaIACABIAGADIAHAEQAMAGAMALIAPAPQAZAZAWAvIgEgXQgFgWgLggIgFgMIgMgbIgEgGIAEgBIACABIAIAEQARAKATASIAMAMQAeAfAbA5IgDgQQgDgQgHgaQgGgVgJgXIgFgMIgHgQIADABIAHAEIAIAEQAMAHANAKIAXAWQAcAfAbA5IgCgQQgDgQgHgZQgIgagLgdIgBgCQgEgOgHgNIgDgGIEmgRIATAGIAsAOIAjAJIAQAEQAZAGAPAAIAsgBIBPgEIAXgBIBHgEIBcgEIAngCIAegCIAVgBIAHAAIARgQIAKAAIAJABIgpAeIAAAAIAAAAIATgBIAGABIgUAXIhOE9IgIAiIgXBbIghCFIgFAUIgSAAIADgPQAeh5AZhqIApi8IAbh/IAKgvIl4ATQgPCtgXChQgWCagXCEQgFAJgDAMQgCAHAAAHIgXAAQAQhZANhXQAOhgALhVQALhVAHhBIALhkIAEgmIh0gdQAABCgFBTQgFBVgIBhQgIBhgLBlIgSCqIgFARIgPADIAPiLIARjBIABgQIABgRIAIhuIABgPIADg0IABgMIADgxIAEhOIAAgSIACgeIkLANQAIAQAHASQANAjAHAeQAHAfADASIADAUQgeg+gfgrQghgrgcgMQAMAZAIAcQAHAcAFAZIAGAmIACAQQgbg3gegkQgcgigagTIADAIQALAcAGAZIAIAqIACAOQgYgygbgjQgcgkgWgKQAJAVAHAXQAGAXAEAUIAFAhIACALQgXgtgYgdQgZgdgVgQIgNgIIgpACIA6BNIgBB0IAAAAIgGH6IgLgCIgWgWIAAgPIAChlIABgeIAAgFIAAgTIAEiuIADiFIABg4QAAgOgHgKQgHgKgHgGIgIgGInFhgIgjKDIgrAKIAdqXQheAAg7AFQg7AFgeAHQgfAHgMAIQgMAHgBAFIgBAFIALKdIgTAEgANoFZIAThOIAIgeIAAkWIAWhjIgRgFQgagGgRAAIAYgdQATAEAXAJIAJAEIALAFQAjARApAlIgJgOQgIgOgRgVQgOgRgTgTIgHgIIgMgLIADAAIAHAAIAGAAIAKACQAXAEAeAMQAoARAvAqIgPgTIglgtQgYgcgdgcIgEgDIgFgGQgNgLgMgKIAWgUQgHgJgmgFIgFgBIhbgIQg6gDhFgCIAAAAQhFgChGAAIiCAAIhnAAIg3ABQgSABgYAIIgEABIgMAEIhJAeQglARgcAIQgcAIgIgKQgHgLAGgQQAGgQAMgQQALgQAKgKIAKgLIgQAFIgqALQgaAGgcAFQgeAFgdABQgcABgVgFQgZgIgZgFQgagFgfgDQgfgDgqABQgqAAg6ADIhZAGIhmAFIhjADQgvAAgigBQgigCgNgFQgNgGAQgJQASgKAlgMQAkgLAvgMIBfgXIBagTIBCgOIAagFIAEgJIAFgKIABgCIAEgHIAMgPIAAAAIAHgGIABgBIADgCIABAAQAJgGALAAIAmABQAWAAAWgBQAXgCAPgGQAPgHAAgOQgSgJgrgGQgsgGg7gDQg6gEhBABQhBAAg9AEQg9AEgvAJQgvAJg4AEQg4AFg5ABQg4ACgvAAIhMgBIgWAAIgEAAIAAgZIC5AMICxgMIAqgJQApgHBHgGQBIgHBcAFICbAHQA/ADAhAHQAiAIAFATIgQAQQgQAQgTAaQgUAagMAgQgMAgAHAhIAQADIApAGIAzAHIAyAGQAXACAMAAQATgBAdgJQAbgJAmgIQAmgIAwADIgiBSICthDILUATIAGAQQAFAQgBAWQAAAJgDAJQAaATAYAcQAbAfAUAfQAVAfALAVIAMAWQgiggghgWQgigXgcgMQgcgMgUAAQAVASASAXQASAXAOAVQAOAVAHAOIAIAOQgvgrgpgVQgUgKgSgHQgGAYgDARIgDAWIgKFZIgHAbIgKAmIgsBGIAPhBgAnHmtQgkAHgqAKIhPATIg9ARIgZAHQAZADAoABIBWgCIBdgEIBUgFIA+gEIAXgCIABgKIADgZQADgPAGgRQAIgRAKgKQALgKAJgFIAJgFIgQgBQgPgCgYAAQgZAAgbADQgTADgHAJQgHAKAAALQABALACAIIAEAIIgoAAQgVABgkAGgANdiXIAAAAg");
	this.shape_21.setTransform(22.5,208.1);

	this.instance_4 = new lib.rectangle();
	this.instance_4.setTransform(299.1,295,6.674,2.759);
	this.instance_4.alpha = 0.488;
	this.instance_4.filters = [new cjs.ColorFilter(0.5390625, 0.5390625, 0.5390625, 1, -121, 13, 94, 0)];
	this.instance_4.cache(-47,-41,94,83);

	this.instance_5 = new lib.ripple2();
	this.instance_5.setTransform(-2.9,247.2,1.142,1,0,0,0,-107.8,1.4);
	this.instance_5.alpha = 0.199;

	this.instance_6 = new lib.island2("synched",0);
	this.instance_6.setTransform(73.4,282.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},51).wait(11));

	// pondBoundaries
	this.pondBoundaryRight = new lib.pondBoundary();
	this.pondBoundaryRight.setTransform(841.8,287,1,1,0,0,0,3,90.5);
	this.pondBoundaryRight.alpha = 0;

	this.pondBoundaryLeft = new lib.pondBoundary();
	this.pondBoundaryLeft.setTransform(-2,287,1,1,0,0,0,3,90.5);
	this.pondBoundaryLeft.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pondBoundaryLeft},{t:this.pondBoundaryRight}]},2).wait(62));

	// Fish
	this.fishLayer = new lib.fishLayer();
	this.fishLayer.setTransform(15.7,40.9,1,1,0,0,0,15.6,40.9);
	this.fishLayer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fishLayer).wait(53).to({_off:false},0).to({_off:true},6).wait(5));

	// BG
	this.instance_7 = new lib.background("synched",0);
	this.instance_7.setTransform(537.4,203);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;