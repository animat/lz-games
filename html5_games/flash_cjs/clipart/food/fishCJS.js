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



(lib.fish = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFBFC").s().p("AiPBDQADgEAGgCIAJgEIAFgBQAfgbAjgVQAigUAfgQQAhgQAagKQAbgLAPgFIAQgGIASAJQgXABgfAMQggAMgiARQggARgdAPQgeARgTAMIgXAPQgGAGgBADIAAADIgCAAIgMAAQgGABgEADQgEADgBADIgBAEQgCgGADgEg");
	this.shape.setTransform(-30.5,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFBFC").s().p("AlbAzIh0gEIg3AAIgLgyIAHAFQAJAHAZAJQAYAJAvAHQAvAGBNgBQC3gECTgKQCVgKBvgMQArgIArgIIAigGIAigEIAggDQAMgBAGgDQAHgCAGgFIAQgNQgFAKgFANQgEANgDAOIgEAUIgDgFQgEgFgIgGIgOgJIgJgFQgLgCgLAAIgVACQgfADgfAGIg9AMIgYACIhAAFIhcAHIhtAHIhwAIIhqAGIhYAEIgnABIgSAAg");
	this.shape_1.setTransform(48,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAFBFC").s().p("AI6BIIADgRQACgLgCgKQgCgKgHgJQgQgOgOgBQgOAAgMAMQgIAHgFAIQgFAHgKAFQgJAFgTgBQgKABgdgGIhKgPIhjgUIhzgUQg8gKg7gKQg6gJg2gEQg2gFgrAAQhLAChAAJQhAAIgwALQgwALgaAHIgbAHIgcgLIAWgIQAWgHAngLQAngKA0gKQA0gLA9gGQA9gGBBACQBCACBBANQCAAdBnAUQBnARBIAIQBIAHAngGIAFgHQAGgFAKgEQALgGAPgBQAPgCAUAGIAEAGIAJANQAFAJAEAKQADAJgBAIQgCAJgEAIIgHALIgDADg");
	this.shape_2.setTransform(42.6,-1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C847C").s().p("AApAQIgPgDIgPgEQgIgBgDABQgCAAgJgEIgQgHIgNgKIgHgFIASAKQAKAGAIABQAIADADAAQAEgBAKACQAJACAKAEQAKAEAFAEIgHgCg");
	this.shape_3.setTransform(-39.6,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAKQgDgEgBgGQABgFADgEQAFgEAFAAQAGABAFADQAEAEAAAFQAAAGgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_4.setTransform(-28.9,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EAEAEA").ss(1,1,1).p("AAAAgQgOAAgKgJQgKgKAAgNQAAgMAKgKQAKgJAOAAQAPAAAKAJQAKAKAAAMQAAANgKAKQgKAJgPAAg");
	this.shape_5.setTransform(-29,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFE3","#B1B5B4"],[0.004,1],-1.7,-2,0,-1.7,-2,7.9).s().p("AgYAXQgJgKgBgNQABgMAJgKQALgJANAAQAPAAAKAJQAJAKABAMQgBANgJAKQgKAJgPAAQgNAAgLgJg");
	this.shape_6.setTransform(-29,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#D2D4D7","#000000"],[0.004,1],17.4,-0.6,0,17.4,-0.6,18.9).s().p("AAiAgIg/gIIgHgBIgQgEIgSgFQgIgDgFgDIgNgIQgFgBgFgEQgEgEAAgGQAAgGAGgCQAFgDAGgBIAGAAIATgCIAwgCQAbgBAkAFQAiAEAiAMIgnAEIAbALIgHAcg");
	this.shape_7.setTransform(3.3,26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B1B5B4").s().p("ABOA+QgUgCgTgHQgUgHgSgIIgSgJIgBAAIgIAAIgUgCIgZgGQgNgEgLgIQgOgJgMgMIgWgZIgXgZIAKAEIAKAFQAFACAFAAIALAAQAOACAKAEQAJADAJAGIATAPQARAMAVAGQAVAFAVAEIAXAGIAjAKIAmAJQATAEAOAAQAPAAAHgEQgTAPgWAJQgSAIgTAAIgLgBg");
	this.shape_8.setTransform(-27.1,22.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#707070").ss(1,1,1).p("AAqiVQgYAJgoASQgZALgcARQgcARgYARQgYARgQALQgPAMAAAAQgBAAgEABQgEAAgFADQgFADgCAGQgBAGAEAHQAEAKAEAIQAFAHABAAQAEAJALANQALAOAOAOQAPAOAOAKQALAIAOAEQANAEAMACQAMACAIAAIAIABQAYAKAWAKQAZAJAZADQAWADAUgHQAUgIARgMQASgMAQgOQAGgFAEgFQAEgGACgGQAMgVAEgUQAGgigIgeQgIgfgTgbQgTgcgagUQgZgVgfgMQgGABgYAIg");
	this.shape_9.setTransform(-25,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#D2D4D7","#B1B5B4"],[0.004,0.318,1],13.3,-18.4,-10.8,19.7).s().p("AA5CeQgZgDgZgJIgugUIgIgBQgIAAgMgCQgMgCgNgEQgOgEgLgIQgOgKgPgOQgOgOgLgOQgLgNgEgJIgGgHQgEgIgEgKQgEgHABgGQACgGAFgDQAFgDAEAAIAFgBIAPgMIAogcQAYgRAcgRQAcgRAZgLQAogSAYgJIAegJQAfAMAZAVQAaAUATAcQATAbAIAfQAIAegGAiQgEAUgMAVQgCAGgEAGQgEAFgGAFQgQAOgSAMQgRAMgUAIQgPAFgQAAIgLgBg");
	this.shape_10.setTransform(-25,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A4A5A4").s().p("AhYB/QhngChlgTQhkgThggkIhngpIgIAAQgIAAgMgCQgMgCgNgEQgNgCgLgIQgOgKgOgNQAZAKAbAGQAbAGAbACQAbACAYgCQAogCAigPQAhgQAcgbQAdgaAbghQABALAGANIAKAbQAFANgDAKIgDAGQgGAWgMASQgMAPgWAHQA5AUA5AKQA6AKA6ADQA7ACA6gCIBzgFQBOgFBLgSQBKgSBJgaQBIgdBHgkQAMgGALgJIAXgSIATgIQAKgFALAAQALAAAKAIQAfAiAmAUQgCAGgFAHQgFAGgJAHQgKAGgKAAQgLAAgMgCQgOgDgTgBQgSAAgZAIIgXAMQgVAMgqAQQgpATg5AUQg6AUhHASQhUAUhUAKQhIAIhGAAIgWAAg");
	this.shape_11.setTransform(30.3,24);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#707070").ss(1,1,1).p("ALXhOQgJAPgEAVQgFAVAGAXQAFAQABAMQABAMgEAJQgFAKgOALQgLAHgLAAQgLgBgOgCQgOgDgRAAQgSAAgXAHQAAAAgWAMQgWALgpATQgpASg6AVQg6AUhIASQhIAShUAKQhUALhcgBQhegBhkgSQhlgShpgmIhngpQAAAAgIgBQgIAAgMgCQgMgCgOgEQgNgEgLgIQgOgKgPgOQgOgOgLgOQgLgNgEgJQgBAAgEgIQgFgHgEgJQgEgIABgHQADgGAEgCQAFgDAEAAQAEgBABAAQAAAAAQgMQAPgLAYgRQAYgRAcgRQAbgRAZgLQAygVAYgIIAZgIQAAAAAWgHQAXgHAmgLQAngKAzgKQAzgLA5gHQA5gIA7gBQA5gBA4AHQBSANBKARQBKARBEAPQBEAQBCAIQBCAJBDgFQAMgIAPgIQANgHAPgBQAPgCAOAKQAMAIAHANQAIAOACAPQABAPgIANg");
	this.shape_12.setTransform(28,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFFFF","#D2D4D7","#B1B5B4"],[0.004,0.318,1],-4.4,-30.2,6.6,30.8).s().p("AhCDtQhegBhkgSQhlgShpgmIhngpIgIgBIgUgCQgMgCgOgEQgNgEgLgIQgOgKgPgOQgOgOgLgOQgLgNgEgJIgFgIQgFgHgEgJQgEgIABgHQADgGAEgCQAFgDAEAAIAFgBIAQgMIAngcQAYgRAcgRQAbgRAZgLQAygVAYgIIAZgIIAWgHIA9gSQAngKAzgKQAzgLA5gHQA5gIA7gBQA5gBA4AHQBSANBKARICOAgQBEAQBCAIQBCAJBDgFQAMgIAPgIQANgHAPgBQAPgCAOAKQAMAIAHANQAIAOACAPQABAPgIANQgJAPgEAVQgFAVAGAXQAFAQABAMQABAMgEAJQgFAKgOALQgLAHgLAAQgLgBgOgCQgOgDgRAAQgSAAgXAHIgWAMQgWALgpATQgpASg6AVQg6AUhIASQhIAShUAKQhNAKhTAAIgQAAg");
	this.shape_13.setTransform(28,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#707070").ss(1,1,1).p("ACEiaQAKALADAKQADAKgIAIQgHAGgLADQgLAEgMABQgMACgIAAQgIAAgBAAIgIgDQgIgDgLgCQgLgCgLACQgIABgLADQgKADgLADQgMACgHACQgIACgBAAQABAAALACQAKACAPADQANADAOACQAOADAHABQAGACANAEQANAEAPAEQAOAFAKADQAKADABAAQAAAAAEAIQAEAIACALQABAMgIAKQgIAJgDAKQgEAKAAAHQgBAHAAAAIgpARIg1gZIgrAAIB9A1QAAABAEAFQAEAFAFAIQAEAJACAJQACAJgFAIQgFAHgMAGQgMAGgOAEQgPADgMABQgNAAgHgDQgGgDgBADQgBAEACAFQACAGACAFQACAEAAABIgngIQAAAAgGgEQgFgDgIgGQgIgGgHgHQgHgIgEgHQgCgIgEgIQgEgIgIgIQgIgHgPgGQgPgFgagEIAAjnQABgBAOgFQANgFAWgHQAVgGAYgFQARgDAWgEQAVgEAXgDQAYgDAUACQATACALAJQAPAMAKALg");
	this.shape_14.setTransform(107.7,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#D2D4D7","#000000"],[0.004,1],22.8,-3.7,0,22.8,-3.7,62.2).s().p("AgSC2IgGgEIgNgJQgIgGgHgHQgHgIgEgHIgGgQQgEgIgIgIQgIgHgPgGQgPgFgagEIAAjnIAPgGQANgFAWgHQAVgGAYgFIAngHIAsgHQAYgDAUACQATACALAJQAPAMAKALQAKALADAKQADAKgIAIQgHAGgLADQgLAEgMABIgUACIgJAAIgIgDIgTgFQgLgCgLACIgTAEIgVAGIgTAEIgJACIAMACIAZAFIAbAFIAVAEIATAGIAcAIIAYAIIALADIAEAIQAEAIACALQABAMgIAKQgIAJgDAKQgEAKAAAHIgBAHIgpARIg1gZIgrAAIB9A1IAEAGIAJANQAEAJACAJQACAJgFAIQgFAHgMAGQgMAGgOAEQgPADgMABQgNAAgHgDQgGgDgBADQgBAEACAFIAEALIACAFg");
	this.shape_15.setTransform(107.7,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#707070").ss(1,1,1).p("AAfgRQAGgBAJABQAIAAAIACQAIACADAEQAHAJAGACQAHAEABgBIgNAVIiugnIAVgMIBgAIQAAAAAHAAg");
	this.shape_16.setTransform(43.1,-8.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#D2D4D7","#000000"],[0.004,1],14.6,-0.5,0,14.6,-0.5,15.8).s().p("AhdgNIAVgMIBgAIIAHAAIAPAAQAIAAAIACQAIACADAEQAHAJAGACIAIADIgNAVg");
	this.shape_17.setTransform(43.1,-8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FAFBFC").s().p("AiPBDQADgEAGgCIAJgEIAFgBQAfgbAjgVQAigUAfgQQAhgQAagKQAbgLAPgFIAQgGIASAJQgXABgfAMQggAMgiARQggARgdAPQgeARgTAMIgXAPQgGAGgBADIAAADIgCAAIgMAAQgGABgEADQgEADgBADIgBAEQgCgGADgEg");
	this.shape_18.setTransform(-68.9,-8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FAFBFC").s().p("AlbAzIh0gEIg3AAIgLgyIAHAFQAJAHAZAJQAYAJAvAHQAvAGBNgBQC3gECTgKQCVgKBvgMQArgIArgIIAigGIAigEIAggDQAMgBAGgDQAHgCAGgFIAQgNQgFAKgFANQgEANgDAOIgEAUIgDgFQgEgFgIgGIgOgJIgJgFQgLgCgLAAIgVACQgfADgfAGIg9AMIgYACIhAAFIhcAHIhtAHIhwAIIhqAGIhYAEIgnABIgSAAg");
	this.shape_19.setTransform(9.6,-4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAFBFC").s().p("AI6BIIADgRQACgLgCgKQgCgLgHgHQgQgPgOgBQgOAAgMALQgIAIgFAIQgFAHgKAFQgJAEgTAAQgKAAgdgFIhKgPIhjgUIhzgUQg8gKg7gJQg6gKg2gEQg2gFgrABQhLABhAAJQhAAIgwALQgwAKgaAIIgbAHIgcgKIAWgIQAWgIAngKQAngLA0gKQA0gLA9gGQA9gGBBACQBCACBBANQCAAdBnATQBnASBIAHQBIAJAngIIAFgFQAGgGAKgEQALgGAPgBQAPgCAUAGIAEAHIAJAMQAFAJAEAKQADAJgBAHQgCALgEAGIgHAMIgDADg");
	this.shape_20.setTransform(4.2,-14.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7C847C").s().p("AApAQIgOgDIgRgEQgIgBgCABQgDAAgIgEIgPgHIgPgKIgGgFIASAKQAKAGAIABQAIADADAAQAEgBAKACQAKACAKAEQAJAEAFAEIgHgCg");
	this.shape_21.setTransform(-78,3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgEAFAAQAGABAFADQAEAEAAAFQAAAGgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_22.setTransform(-67.3,-2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#EAEAEA").ss(1,1,1).p("AAAAgQgOAAgKgJQgKgKAAgNQAAgMAKgKQAKgJAOAAQAPAAAKAJQAKAKAAAMQAAANgKAKQgKAJgPAAg");
	this.shape_23.setTransform(-67.4,-2.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFE3","#B1B5B4"],[0.004,1],-1.7,-2,0,-1.7,-2,7.9).s().p("AgYAXQgJgKgBgNQABgMAJgKQALgJANAAQAOAAALAJQAKAKAAAMQAAANgKAKQgLAJgOAAQgNAAgLgJg");
	this.shape_24.setTransform(-67.4,-2.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#D2D4D7","#000000"],[0.004,1],17.4,-0.6,0,17.4,-0.6,18.9).s().p("AAiAgIg/gIIgHgBIgQgEIgSgFQgJgDgEgDIgMgIQgHgBgDgEQgFgEAAgGQABgGAFgCQAGgDAFgBIAGAAIATgCIAwgCQAcgBAiAFQAkAEAhAMIgmAEIAbALIgIAcg");
	this.shape_25.setTransform(-35.1,13.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B1B5B4").s().p("ABOA+QgUgCgTgHQgUgHgSgIIgSgJIgBAAIgIAAIgUgCIgZgGQgNgEgLgIQgOgJgMgMIgWgZIgXgZIAKAEIAKAFQAFACAFAAIALAAQAOACAKAEQAJADAJAGIATAPQARAMAVAGQAVAFAVAEIAXAGIAjAKIAmAJQATAEAOAAQAPAAAHgEQgTAPgWAJQgSAIgTAAIgLgBg");
	this.shape_26.setTransform(-65.5,9.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#707070").ss(1,1,1).p("AAqiVQgYAJgoASQgZALgcARQgcARgYARQgYARgQALQgPAMAAAAQgBAAgEABQgEAAgFADQgFADgCAGQgBAGAEAHQAEAKAEAIQAFAHABAAQAEAJALANQALAOAOAOQAPAOAOAKQALAIAOAEQANAEAMACQAMACAIAAIAIABQAYAKAWAKQAZAJAZADQAWADAUgHQAUgIARgMQASgMAQgOQAGgFAEgFQAEgGACgGQAMgVAEgUQAGgigIgeQgIgfgTgbQgTgcgagUQgZgVgfgMQgGABgYAIg");
	this.shape_27.setTransform(-63.4,-0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FFFFFF","#D2D4D7","#B1B5B4"],[0.004,0.318,1],13.3,-18.4,-10.8,19.7).s().p("AA5CeQgZgDgZgJIgugUIgIgBQgIAAgMgCQgMgCgNgEQgOgEgLgIQgOgKgPgOQgOgOgLgOQgLgNgEgJIgGgHQgEgIgEgKQgEgHABgGQACgGAFgDQAFgDAEAAIAFgBIAPgMIAogcQAYgRAcgRQAcgRAZgLQAogSAYgJIAegJQAfAMAZAVQAaAUATAcQATAbAIAfQAIAegGAiQgEAUgMAVQgCAGgEAGQgEAFgGAFQgQAOgSAMQgRAMgUAIQgPAFgPAAIgMgBg");
	this.shape_28.setTransform(-63.4,-0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A4A5A4").s().p("AhYB/QhngChlgTQhkgThggkIhngpIgIAAQgIAAgMgCQgMgCgNgEQgNgCgLgIQgOgKgOgNQAZAKAbAGQAbAGAbACQAbACAYgCQAogCAigPQAhgQAcgbQAdgaAbghQABALAGANIAKAbQAFANgDAKIgDAGQgGAWgMASQgMAPgWAHQA5AUA5AKQA6AKA6ADQA7ACA6gCIBzgFQBOgFBLgSQBKgSBJgaQBIgdBHgkQAMgGALgJIAXgSIATgIQAKgFALAAQALAAAKAIQAfAiAmAUQgCAGgFAHQgFAGgJAHQgKAGgKAAQgLAAgMgCQgOgDgTgBQgSAAgZAIIgXAMQgVAMgqAQQgpATg5AUQg6AUhHASQhUAUhUAKQhIAIhGAAIgWAAg");
	this.shape_29.setTransform(-8.1,11.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#707070").ss(1,1,1).p("ALXhOQgJAPgEAVQgFAVAGAXQAFAQABAMQABAMgEAJQgFAKgOALQgLAHgLAAQgLgBgOgCQgOgDgRAAQgSAAgXAHQAAAAgWAMQgWALgpATQgpASg6AVQg6AUhIASQhIAShUAKQhUALhcgBQhegBhkgSQhlgShpgmIhngpQAAAAgIgBQgIAAgMgCQgMgCgOgEQgNgEgLgIQgOgKgPgOQgOgOgLgOQgLgNgEgJQgBAAgEgIQgFgHgEgJQgEgIABgHQADgGAEgCQAFgDAEAAQAEgBABAAQAAAAAQgMQAPgLAYgRQAYgRAcgRQAbgRAZgLQAygVAYgIIAZgIQAAAAAWgHQAXgHAmgLQAngKAzgKQAzgLA5gHQA5gIA7gBQA5gBA4AHQBSANBKARQBKARBEAPQBEAQBCAIQBCAJBDgFQAMgIAPgIQANgHAPgBQAPgCAOAKQAMAIAHANQAIAOACAPQABAPgIANg");
	this.shape_30.setTransform(-10.4,0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFFFFF","#D2D4D7","#B1B5B4"],[0.004,0.318,1],-4.4,-30.2,6.6,30.8).s().p("AhCDtQhegBhkgSQhlgShpgmIhngpIgIgBIgUgCQgMgCgOgEQgNgEgLgIQgOgKgPgOQgOgOgLgOQgLgNgEgJIgFgIQgFgHgEgJQgEgIABgHQADgGAEgCQAFgDAEAAIAFgBIAQgMIAngcQAYgRAcgRQAbgRAZgLQAygVAYgIIAZgIIAWgHIA9gSQAngKAzgKQAzgLA5gHQA5gIA7gBQA5gBA4AHQBSANBKARICOAgQBEAQBCAIQBCAJBDgFQAMgIAPgIQANgHAPgBQAPgCAOAKQAMAIAHANQAIAOACAPQABAPgIANQgJAPgEAVQgFAVAGAXQAFAQABAMQABAMgEAJQgFAKgOALQgLAHgLAAQgLgBgOgCQgOgDgRAAQgSAAgXAHIgWAMQgWALgpATQgpASg6AVQg6AUhIASQhIAShUAKQhNAKhTAAIgQAAg");
	this.shape_31.setTransform(-10.4,0.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#707070").ss(1,1,1).p("ACEiaQAKALADAKQADAKgIAIQgHAGgLADQgLAEgMABQgMACgIAAQgIAAgBAAIgIgDQgIgDgLgCQgLgCgLACQgIABgLADQgKADgLADQgMACgHACQgIACgBAAQABAAALACQAKACAPADQANADAOACQAOADAHABQAGACANAEQANAEAPAEQAOAFAKADQAKADABAAQAAAAAEAIQAEAIACALQABAMgIAKQgIAJgDAKQgEAKAAAHQgBAHAAAAIgpARIg1gZIgrAAIB9A1QAAABAEAFQAEAFAFAIQAEAJACAJQACAJgFAIQgFAHgMAGQgMAGgOAEQgPADgMABQgNAAgHgDQgGgDgBADQgBAEACAFQACAGACAFQACAEAAABIgngIQAAAAgGgEQgFgDgIgGQgIgGgHgHQgHgIgEgHQgCgIgEgIQgEgIgIgIQgIgHgPgGQgPgFgagEIAAjnQABgBAOgFQANgFAWgHQAVgGAYgFQARgDAWgEQAVgEAXgDQAYgDAUACQATACALAJQAPAMAKALg");
	this.shape_32.setTransform(69.3,-0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#D2D4D7","#000000"],[0.004,1],22.8,-3.7,0,22.8,-3.7,62.2).s().p("AgSC2IgGgEIgNgJQgIgGgHgHQgHgIgEgHIgGgQQgEgIgIgIQgIgHgPgGQgPgFgagEIAAjnIAPgGQANgFAWgHQAVgGAYgFIAngHIAsgHQAYgDAUACQATACALAJQAPAMAKALQAKALADAKQADAKgIAIQgHAGgLADQgLAEgMABIgUACIgJAAIgIgDIgTgFQgLgCgLACIgTAEIgVAGIgTAEIgJACIAMACIAZAFIAbAFIAVAEIATAGIAcAIIAYAIIALADIAEAIQAEAIACALQABAMgIAKQgIAJgDAKQgEAKAAAHIgBAHIgpARIg1gZIgrAAIB9A1IAEAGIAJANQAEAJACAJQACAJgFAIQgFAHgMAGQgMAGgOAEQgPADgMABQgNAAgHgDQgGgDgBADQgBAEACAFIAEALIACAFg");
	this.shape_33.setTransform(69.3,-0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#707070").ss(1,1,1).p("AAfgRQAGgBAJABQAIAAAIACQAIACADAEQAHAJAGACQAHAEABgBIgNAVIiugnIAVgMIBgAIQAAAAAHAAg");
	this.shape_34.setTransform(4.7,-21.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#D2D4D7","#000000"],[0.004,1],14.6,-0.5,0,14.6,-0.5,15.8).s().p("AhdgNIAVgMIBgAIIAHAAIAPAAQAIAAAIACQAIACADAEQAHAJAGACIAIADIgNAVg");
	this.shape_35.setTransform(4.7,-21.4);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.8,-25,208.2,63);


// stage content:
(lib.fishCJS = function() {
	this.initialize();

	// outline
	this.instance = new lib.fish("synched",0);
	this.instance.setTransform(100,100,0.961,0.961,0,0,0,19.2,6.4);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200.2,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;