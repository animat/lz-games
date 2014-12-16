(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.duck_sad = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyBQQgvgOgzgDIh8AKQgzgIg2AAIAKgGQgLgBgZgIQgZgJAVgOQARgFAYALQAYAMATACQBPgJBQgLQAmgCAPAKIAnAXQAvAWAzgCQAyADA/gDQAxgDAogOQgaANgeAEQg/AKg7ADIgTABQgrAAgmgMgAGhhbQgDAcgZAEQgYAFgXAKIgHAGQAlgzAtgCg");
	this.shape.setTransform(-16,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB8F22").s().p("AieEMQgggEgGgSQgGgSgRgXQgZgUgXgMQgYgMAVgqQATgcAkgPQAkgPAcgTQAcgXAjgYQAjgZAXgeQANgVAAgRQAAgSAHgTQACgGAPgbQARgcAHAOQABAGAOAjQAPAkAWAEQAZgIAwgyQAwgzASgbQAggwAbAVQgxArgbA/QgbA/gvArQgiAPgfgcQgfgdgVAZQgpA+g3AXQg3AYgoAlQgVAYASAiQASAiAoAPQgLgDgBAKQAAAKgKADQAIAuAeAVIg0gDg");
	this.shape_1.setTransform(-32.9,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.7,1,1).p("AFLCWQg2AWgeAUQg4A0hHATQhDAOhBAEQg/gGhBgKQhnABhpgHQgggEgGgSQgGgSgRgXQgZgUgXgMQgYgMAVgqQASgcAlgPQAkgOAcgUQAcgXAjgXQAjgaAXgeQANgUAAgSQAAgSAHgTQACgGARgbQARgbAHANQABAGAOAkQAOAjAWAEQAagIAwgyQAugzASgbQAjgzAdAbQAcAbAWA0QAWAzAOAWQAsAkA8AEQAuAIA/AYQA/AXAMAyQADArgsAdQgrAdg3AWg");
	this.shape_2.setTransform(-13.8,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2B435").s().p("AiMEJQhnABhpgHQgggEgGgSQgGgSgRgXQgZgUgXgMQgYgMAVgqQASgcAlgPQAkgOAcgUQAcgXAjgXQAjgaAXgeQANgUAAgSQAAgSAHgTQACgGARgbQARgbAHANQABAGAOAkQAOAjAWAEQAagIAwgyQAugzASgbQAjgzAdAbQAcAbAWA0QAWAzAOAWQAsAkA8AEQAuAIA/AYQA/AXAMAyQADArgsAdQgrAdg3AWQg2AWgeAUQg4A0hHATQhDAOhBAEQg/gGhBgKg");
	this.shape_3.setTransform(-13.8,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAoAEQgogOhPACQAGgFA9gHQA5gHAjAxQgEgEgkgOg");
	this.shape_4.setTransform(9.7,41);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D6D6").s().p("AABgRQgOglgEgFQAsAugKAiQgKAlgGACQARgogRglg");
	this.shape_5.setTransform(-8.9,-56.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D6D6").s().p("AgFARQgtgkgJguQAEAJA3BBQAcAiAgAXQgigUgfgdg");
	this.shape_6.setTransform(22,-54.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D6D6").s().p("AgUgBQgNgtA4gCQgDAAgSAZQgPAXAMAxQgHgGgMgsgAAXgxIAAABIAAgBg");
	this.shape_7.setTransform(5.4,-58.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2.6,1,1).p("AgohkQgVAZgQBCQgPBBAABCQBlglBUhNQgchfgfgVQgfgVgUANQgWANgBADg");
	this.shape_8.setTransform(-20.6,-36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AhNgJQAQhCAVgZQABgDAWgNQAUgNAfAVQAfAVAcBfQhUBNhlAlQAAhCAPhBg");
	this.shape_9.setTransform(-20.6,-36.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2.6,1,1).p("ABzgaQgGgpgVgkQgVglgsgHQgygEgkAfQgkAegWAuQAJANAgAhQAfAkApAmQAiAjAfAVQAfAVAPgGQAWgUgDg/QgChAgFgag");
	this.shape_10.setTransform(16.3,-34.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AA5CEQgfgVgigjQgpgmgfgkQggghgJgNQAWguAkgeQAkgfAyAEQAsAHAVAlQAVAkAGApQAFAaACBAQADA/gWAUQgEABgEAAQgPAAgXgQg");
	this.shape_11.setTransform(16.3,-34.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDFDFD").s().p("AgOABQgBgMAOgEQANAAADAPQABAMgOAEIgBAAQgMAAgDgPg");
	this.shape_12.setTransform(-22.8,-18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDFDFD").s().p("AgKAbQgTgLAJgYQANgXASAGQASALgIAXQgLATgMAAIgIgBg");
	this.shape_13.setTransform(-18.8,-27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D3444").s().p("AgGAfQgVgIAEgbQAJgcAVACQAVAIgEAbQgIAagSAAIgEAAg");
	this.shape_14.setTransform(-20.7,-22.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#165472").s().p("Ag5gBQAIhHA0gEQA2AJABBFQgIBHg0AEQg2gJgBhFg");
	this.shape_15.setTransform(-20.5,-22.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDFDFD").s().p("AgSACQgBgQASgEQAQgBAEASQABAQgSAEIgBAAQgPAAgEgRg");
	this.shape_16.setTransform(13.1,-13.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDFDFD").s().p("AgNAgQgXgNALgdQAQgdAXAIQAXANgLAdQgNAXgQAAIgKgCg");
	this.shape_17.setTransform(18,-24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D3444").s().p("AgHAkQgZgJAFggQAKghAZADQAZAJgFAhQgJAdgWAAIgEAAg");
	this.shape_18.setTransform(15.8,-18.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#165472").s().p("AhHgCQALhXBBgFQBBALABBWQgKBXhAAFQhCgMgChVg");
	this.shape_19.setTransform(16,-18.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2.6,1,1).p("AgzioQACgGAcgNQAagNAkAqQAkAqAaCfQgBADgXAlQgXAlglAkQgiAkgngBQgCABgRgXQgRgYgKg9QgHhEAQhNQAQhPAYgcg");
	this.shape_20.setTransform(-19.5,-30);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AhJCpQgRgYgKg9QgHhEAQhNQAQhPAYgcQACgGAcgNQAagNAkAqQAkAqAaCfQgBADgXAlQgXAlglAkQgiAkgngBIAAAAQgDAAgQgWg");
	this.shape_21.setTransform(-19.5,-30);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2.6,1,1).p("ACJhvQAQBagTBiQgUBjgiApQgHAChAgDQg+gEglgaQgdgigMg5QgNg6AAgGQAAgFARg9QAShAAqg8QArg9BIAEQBJAOAQBbg");
	this.shape_22.setTransform(13.8,-27.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AAJDYQg+gEglgaQgdgigMg5QgNg6AAgGQAAgFARg9QAShAAqg8QArg9BIAEQBJAOAQBbQAQBagTBiQgUBjgiApIgLABIg8gCg");
	this.shape_23.setTransform(13.8,-27.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1DFDC").s().p("ABTJgQg9gCgTgEQgwgJg+gWQg/gXgpgpQgpgpANhBQAXhWATgeQATgfAJgMQAKgNgFgiQgBgCABgxQAAgxAKg9QAJg8AdgoQgCgDgFgkQgFglARgkQARgjA/ABQgBgFAkgpQAmgqBbgSQgDgDgSg4QgSg3AChEQAChEA6gnIABgBQgFAUACAUQgRAPACATQAAB+AYB6Qg6AAgpAZQgqAYgMA/QgBAEgQgKQgTgJgNAFQgvBEAOBiQAOBfgUBNIguCBQgYBEAcA8QA9BdBrAcQAeAEBLACQBKACAPARQAHAig0AKQgqAIgwAAIgYgBg");
	this.shape_24.setTransform(-12.3,-39.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2.6,1,1).p("AGsA4QAAh1g8hSQg8hTg+grQg9grgFAAQgYgoAFhFQAFhFgVgNQgagBgNAgQgMAgAAAFQgBgTgDgwQgDgvgXgDQgYAIgPAmQgQAmgBAFQAAgGgEgyQgEgzACgeQABgWgKAAQgLAAgCABQg7ApgCBEQgCBFASA5QATA4ADADQhdATgnAqQgnAqABAFQhAgBgRAkQgRAkAFAmQAFAlACADQgdApgKA8QgKA+AAAyQAAAyAAADQAFAigKANQgJANgUAfQgTAegXBYQgNBCAqAqQAqAqA/AWQA/AXAzAJQBTAYBTgQQAegRAZgaQAtgbA0gEQAzgFAwgTQAegMAvgZQAwgZAIghQAAgigUgXQgVgWgDgBQA6hcAUheQAVhfgBgHg");
	this.shape_25.setTransform(5.3,-39.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AiwJhQgzgJg/gXQg/gWgqgqQgqgqANhCQAXhYATgeQAUgfAJgNQAKgNgFgiIAAg1QAAgyAKg+QAKg8AdgpQgCgDgFglQgFgmARgkQARgkBAABQgBgFAngqQAngqBdgTQgDgDgTg4QgSg5AChFQAChEA7gpQACgBALAAQAKAAgBAWQgCAeAEAzIAEA4QABgFAQgmQAPgmAYgIQAXADADAvIAEBDQAAgFAMggQANggAaABQAVANgFBFQgFBFAYAoQAFAAA9ArQA+ArA8BTQA8BSAAB1QABAHgVBfQgUBeg6BcQADABAVAWQAUAXAAAiQgIAhgwAZQgvAZgeAMQgwATgzAFQg0AEgtAbQgZAageARQgiAGghAAQgxAAgygOg");
	this.shape_26.setTransform(5.3,-39.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.9,1,1).p("AgDgVIAHAr");
	this.shape_27.setTransform(26.6,35.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2.6,1,1).p("AgtjrQgIgCgIAkQABAWAGAgQAGAhABADIgGDzQgBABgLAPQgKAQgDAKQgEAWABAGIAZADQABACAGAOQAGAOAHgCQASgJAEAAQADAGASAGQASgGACgGQAAAHAWACQAMgEAKgLQALgMABgBIAAgcQgBgJgKAJQgJASAAABIgLAAQAAgCgIgaQgJgagWgTIgSjlIASAJQAAgHgNg4QgLg3gigUg");
	this.shape_28.setTransform(27.7,47.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AgODgQgEAAgSAJQgHACgGgOIgHgQIgZgDQgBgGAEgWQADgKAKgQIAMgQIAGjzIgHgkQgGgggBgWQAIgkAIACQAiAUALA3QANA4AAAHIgSgJIASDlQAWATAJAaQAIAaAAACIALAAIAJgTQAKgJABAJIAAAcIgMANQgKALgMAEQgWgCAAgHQgCAGgSAGQgSgGgDgGg");
	this.shape_29.setTransform(27.7,47.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CB8F22").s().p("AAMCaQg1gfg3giIhIgsQgYgNgMgXQgMgVAJgRQAOgQAhgNQAhgNAEgBQACgCAIgdQAHgdgLgdQAIAEAGgcQACABAOgCQAFAjgBAgQAAAhgXAQIglAaQgWAPAJAYQAOAcAgAIQAgAHAmAFIAvApQAoAGAzgGQACgoAbACQAbACAbADQgLg0AmgmQABAggJAXQgEAPALASQAKASgLANQgQALgXAHQgYAHgMAOQgKARgIAZQgHAYgVACQgSgCg3gfg");
	this.shape_30.setTransform(38.9,80.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1.7,1,1).p("ADSBcQgPALgYAHQgYAIgNAOQgKASgIAYQgIAZgVACQgSgCg5ggQg2gfg4gjQg4gigSgLQgYgNgMgYQgNgVAKgSQAOgRAigNQAhgNAFgBQACgCAHgeQAIgegLgdQAIAEAGgdQABABANgCQANgBAFgSQADADAHAoQAHAngPAoQADABAhAFQAhAFAWADQAtAJAyACQAZgBAggCQAggCAGAKQAEANgCAXQgBAWgHAQQgDAQAKASQALATgMANg");
	this.shape_31.setTransform(39.4,80.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2B435").s().p("AAMCnQg2gfg4gjIhKgtQgYgNgMgYQgNgVAKgSQAOgRAigNQAhgNAFgBQACgCAHgeQAIgegLgdQAIAEAGgdQABABANgCQANgBAFgSQADADAHAoQAHAngPAoIAkAGIA3AIQAtAJAyACIA5gDQAggCAGAKQAEANgCAXQgBAWgHAQQgDAQAKASQALATgMANQgPALgYAHQgYAIgNAOQgKASgIAYQgIAZgVACQgSgCg5ggg");
	this.shape_32.setTransform(39.4,80.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E1DFDC").s().p("Ag3B7QABguADgHIAWgyQAVgtAOg2QAQg3gLgbIgDgEQAYgEAYgCQggBLgWBPQgOA2gDA5QgEAYAIAWIACACQAMAMAPACQgNALgOAFQgugDAAgug");
	this.shape_33.setTransform(13.4,15.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2.6,1,1).p("AgBioQAJAbgOA3QgRA4gUAtQgVAwgCAEQgDAGgBAvQAAAvAvAEQAvgMASg2QASg2gBgHQgcgsAIgxQAHgyAZgqQglgTgkgKQABABAAABg");
	this.shape_34.setTransform(14.6,16.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("AhGB5QABgwADgGIAXg0QAUgtAQg3QAPg4gJgbIgBgCQAkAKAlATQgZAqgHAyQgIAxAcAsQABAHgSA2QgSA2gwALQgugDAAgug");
	this.shape_35.setTransform(14.6,16.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D6277").s().p("AhAB9QAJgkAlhMIAohUQAAgFAHggQAIgfAPgMIANgDQgMAoABArQAAArghAkQgtBEAlBOQhJgXgEgGg");
	this.shape_36.setTransform(2.9,37.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1.7,1,1).p("AA5ihQhBgehFAdQgPAMgIAiQgJAiAAAFQgBADgWArQgVAqgXAyQgWAygFAWQAEAFBFAXQBFAXBdgKQBegKBNhgQABgIgQgcQgRgdgFgGQghg2gdg2QgPgigggQg");
	this.shape_37.setTransform(15.8,37.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#256E8A").s().p("AiCChQhFgXgEgFQAFgWAWgyQAXgyAVgqIAXguQAAgFAJgiQAIgiAPgMQBFgdBBAeQAgAQAPAiQAdA2AhA2IAWAjQAQAcgBAIQhNBgheAKQgdADgZAAQg8AAgwgQg");
	this.shape_38.setTransform(15.8,37.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E1DFDC").s().p("AhhA7QgngsgHguQgHgvACgEIAsgEQArgDA7gHQgnAfgPAjQgQAiAkAaQBVA8BkgaQguAZhEAIIgXAAQhLAAgigmg");
	this.shape_39.setTransform(11.7,58.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2.6,1,1).p("AC+iVQgSAFgbAmQgYAahWAQQhVAQhQAHQhQAHgGAAQgCAEAHAwQAHAxApAvQAqAuBlgHQCXgUA0hcQA0hZgbhpQAAgCgSAGg");
	this.shape_40.setTransform(18.1,53.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFEFE").s().p("AijByQgpgvgHgxQgHgwACgEIBWgHQBQgHBVgQQBWgQAYgaQAbgmASgFQASgGAAACQAbBpg0BZQg0BciXAUIgYABQhSAAglgog");
	this.shape_41.setTransform(18.1,53.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CB8F22").s().p("AAFBJQABgXAJgZQAIgZgKgMQgRgLgqgCQgqgCgDgYQACgUAPgQQABAGAHAFQAfARApgEIBWgFQgiBLgXBPQgIACgGAAQgQAAAAgPg");
	this.shape_42.setTransform(-20.6,92.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB8F22").s().p("AhwA/QgOgWgdgRQgdgSAMgPQATgPAkAGQAkAGAeADIBFACIBdAEIAuABQgCgDgDgeQgDgdASgSIAJAHQgHAeAEAcQAEAZgMALQg0ARhHgUQhFgShAAVQgLAIARAPQARAPAbACQglACgiAWQAEgKgEgKg");
	this.shape_43.setTransform(-15.2,72.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1.7,1,1).p("AC6AhQgqA2hUAwQihBcADgvQABgYAJgaQAJgagLgQQgTgLgsgCQgtgCgDgZQAFgbAUgUQAUgTgGgWQgOgWgegTQgdgTAMgSQATgQAlAHQAkAGAfADQAVABAzACQAwACAsABQAsACADAAQgCgEgEgfQgDgfATgTIApAhQgBACgBAWQgCAXAJAVQAEAAAbAMQAaAMAEAYQAAAbgqA0g");
	this.shape_44.setTransform(-10.5,82.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2B435").s().p("AhiC0QABgYAJgaQAJgagLgQQgTgLgsgCQgtgCgDgZQAFgbAUgUQAUgTgGgWQgOgWgegTQgdgTAMgSQATgQAlAHQAkAGAfADIBIADIBcADIAvACQgCgEgEgfQgDgfATgTIApAhQgBACgBAWQgCAXAJAVQAEAAAbAMQAaAMAEAYQAAAbgqA0QgqA2hUAwQhrA9gjAAQgRAAABgQg");
	this.shape_45.setTransform(-10.5,82.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2.6,1,1).p("AA7jTQgEABgaAZQgaAZgDAlQAAAcgPA9QgQA9gQA2QgRA2gBADQgBAEAAAZQgBAaAHAHQAVAIAIAAIAqAEIAdgUQgEgEgTgEQgVABgJAAIAGgRIAbgDIAaACQAHgGgIgOQgUgIgGAAIgVgZIAMhdIAsiwQACgCAIgTQAIgTgNgQg");
	this.shape_46.setTransform(1.6,43.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEFEFE").s().p("AgfDQQgIAAgVgIQgHgIABgZIABgdIASg6QAQg1AQg9QAPg9AAgcQADglAagaQAagYAEgCQANARgIASQgIAUgCACIgsCwIgMBdIAVAZQAGAAAUAIQAIANgHAHIgagDIgbAEIgGARIAegBQATAEAEAEIgdAVg");
	this.shape_47.setTransform(1.6,43.3);

	this.addChild(this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.9,-103.4,124,206.7);


(lib.water4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0DB5D6").s().p("AxSHBQgzhbCeg9QBngnB/gMQCsgQAmgPQA2gUBghkQArgtBth4QBmhqBJgkQBDghBggCQA/AAB6APQCBAQA3ABQBjACBBgcQAngQA2hHQA5hKApgVQB/hBC3AuQAJAmgJApQACgLhnAeQhnAdgTAOQgcAWgQAZIgWArQgYAxhIAcQhAAZhVAEQg5AChlgHQh1gJgqAAQhYgBhAARQhwAehgBSQgzAshrB6QhfBshBAvQhjBIh3ANQihAYhnAMQheALg0AAQg5AAgHgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112,-46.2,224.1,92.5);


(lib.water3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0DB5D6").s().p("AivByQgrgegcAEQALgUAcgMQAmgRAKgHQATgQARgcQAUgjAOgPQAwg1BrgLQAzgFCCAGQAHAZhqApQiGA0gKAHQgTAMgiAzQggAwgVALQgPAHgOAAQgWAAgWgPg");
	this.shape.setTransform(-94.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0DB5D6").s().p("AhoBWQAjAEAmgsQAmgtgSgaQgHgKgtgGQgqgGgCgJQgGgZAfgEQAcgEAtAOQAqAOAhAVQAlAYAFAVQAJAnhdAaQg7ARgrAAQgOAAgMgBg");
	this.shape_1.setTransform(108.4,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0DB5D6").s().p("AkXBlQA2gJASgGQAtgOALgbQAYg1g1gYIgqgRQgWgJgEgKQgMgiBQgHQA9gGA4AJIAAABQAhAFAXAPQAlAbAIAEQAjARBVADQBSADAnAVQALBSkKAJQhgADgvANQg5APgQABIgEAAQgYAAg7gMg");
	this.shape_2.setTransform(68.4,0.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.2,-12.9,238.6,25.9);


(lib.water2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0DB5D6").s().p("Ar8DSQA3gNBwgRQBzgSAxgLQAsgKCHgHQB7gHA2gRQAegKAfguQAdguAXgIQATgHBDAHQA/AHAQgJQBkhJiSguQgpgNhVgSQhMgPgRgHQBrhBCkApQAgAIBqAhQBVAcAzAIQAdAECOgGQB9AFgOBBQgDARh+AaIiYAaQgmAJiMAMQh8ALgyASQgiAMgdAUQgQALgdAXQg1AphUAHQkPAZgyAEQhhAGhXAAQhMAAhEgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.5,-21.5,153.1,43.1);


(lib.water1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0DB5D6").s().p("ANnEtIiRgRQhVgJgwADQjgAQhmgFQiWgIingyQkkhYkHAAQi7ANhygFQjTgHgIhSQAjgbBPgLQAtgHBegJQBOgJAggYQArgggOhBQgJg1EChHQBjgcBegRQA/gLAggCQg2AGgsBKQguBPADBEQAAAHACAGQBGABBEAgIB9A5QBVAhB4APQBFAICRAOQGZA2FyBvQg7Ash6AAQgiAAgogEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.6,-30.5,225.3,61);


(lib.flower = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape.setTransform(-291.1,-98.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_1.setTransform(-290.1,-97.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_2.setTransform(-290.1,-97.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_3.setTransform(-297.1,-83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_4.setTransform(-296.2,-82.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_5.setTransform(-296.2,-82.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_6.setTransform(-284.7,-79.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_7.setTransform(-283.7,-78.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_8.setTransform(-283.7,-78.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_9.setTransform(-299.6,-94.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_10.setTransform(-298.6,-93.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_11.setTransform(-298.6,-93.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_12.setTransform(-286.7,-92);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_13.setTransform(-285.7,-91.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_14.setTransform(-285.7,-91.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#46812E").ss(0.7,1,1).p("AAzglQgMAngGAwIAvguIgbA6IA2gGIhUAiIgQgYIgHARIgSgiIg1AAIAbgOIg+hAIBFAkQAEgCACgdQADgegzgiQAHgFAmAPQAkAPgIBeQAAgEASgnQAUgpAhgcQgCADgMApg");
	this.shape_15.setTransform(294.1,-89.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFF252").s().p("AAHBCIgHARIgSgiIg1AAIAbgOIg+hAIBFAkQAEgCACgdQADgegzgiQAHgFAmAPQAkAPgIBeQAAgEASgnQAUgpAhgcIgOAsQgMAngGAwIAvguIgbA6IA2gGIhUAig");
	this.shape_16.setTransform(294.1,-89.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#46812E").ss(0.7,1,1).p("ACGg6QgggRgrAUIgFgpIgyASIgXgSQAAACACAOQABANgDAMQgEgDgwgIQgwgHgtAbQAGgDAlAAQAlAAAFAiQgGABgpAOQgqAPgGASQADgDAfgIQAfgIAZAOQABADgIAWQgHAXgaAPQgSANAogTQAogUAIgpIAtBIQAAgCAEgVQAFgVAJgTQAMgMALAaQALAaABAFQAFABAagHQAagHgRggQgQghAsAOQArANASAqQAEgEgHglQgGgig8gSQgBgBAOgJQAPgIAkAFQgBgEghgRg");
	this.shape_17.setTransform(270.2,-80);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFF252").s().p("Ah8BbQAagPAHgXQAIgWgBgDQgZgOgfAIQgfAIgDADQAGgSAqgPQApgOAGgBQgFgiglAAQglAAgGADQAtgbAwAHQAwAIAEADQADgMgBgNIgCgQIAXASIAygSIAFApQArgUAgARQAhARABAEQgkgFgPAIQgOAJABABQA8ASAGAiQAHAlgEAEQgSgqgrgNQgsgOAQAhQARAggaAHQgaAHgFgBIgMgfQgLgagMAMQgJATgFAVIgEAXIgthIQgIApgoAUQgYAMgDAAQgCAAAHgGg");
	this.shape_18.setTransform(270.2,-80);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#46812E").s().p("Ah8BcQAagQAHgWQAIgXgBgCQgZgPgfAJQgfAIgDACQAGgSAqgPQApgNAGgBQgFgjglAAQglABgGACQAtgbAwAIQAwAHAEADQADgLgBgOIgCgPIAXASIAygSIAFAoQArgTAgAQQAhARABAEQgkgFgPAJQgOAIABACQA8ASAGAiQAHAkgEAEQgSgqgrgNQgsgNAQAgQARAhgaAHQgaAHgFgCQgBgFgLgaQgLgagMAMQgJATgFAVIgEAXIgthIQgIAqgoATQgYALgDAAQgCAAAHgEg");
	this.shape_19.setTransform(276.3,-80.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_20.setTransform(280.1,6.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_21.setTransform(281.1,7.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_22.setTransform(281.1,7.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_23.setTransform(274.1,21);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_24.setTransform(275.1,21.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_25.setTransform(275.1,21.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_26.setTransform(286.5,24.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQACAAABAAAgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABg");
	this.shape_27.setTransform(287.5,25.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_28.setTransform(287.5,25.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_29.setTransform(271.6,10.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_30.setTransform(272.6,10.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_31.setTransform(272.6,10.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2B435").s().p("AgJAAQABgGAIgBQAJABABAGQgBAHgJABQgIgBgBgHg");
	this.shape_32.setTransform(284.5,12.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgVgMQgDgBgEgCQgHgDACgMQAFgJAJAMQAIALACADQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCQABACAKAQQALASgHANQgKAJgFgTQgHgTAAgRQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDQgDABgNAEQgPAGgMgIQgHgLAVAAQARAAAGABQACAAABAA");
	this.shape_33.setTransform(285.5,13.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F9FAE8").s().p("AAAAgQgHgTAAgRIAAAAIAAAAQAAADgJASQgIAUgQACQgNgEARgUQARgRAEgDIgQAFQgPAGgMgIQgHgLAVAAIAXABIADAAIgDAAIgHgDQgHgDACgMQAFgJAJAMIAKAOQgBgDACgMQACgNAPgDQAOACgLANQgMANgBACQACgBAcgEQAcgDAEAOQgEALgbgDQgbgFgDgCIALASQALASgHANQgDADgDAAQgGAAgDgNg");
	this.shape_34.setTransform(285.5,13.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2B435").s().p("AgTAAQACgNARgCQASACACANQgCAOgSACQgRgCgCgOg");
	this.shape_35.setTransform(287.1,88.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#6B7F1A").ss(0.3,1,1).p("AgqgaQgFgBgJgEQgPgHAFgWQAKgTARAXQARAXACAFQgBgDAEgaQAEgaAegEQAdACgXAaQgWAagEAEQAGgDA2gGQA3gHAIAbQgIAYg1gIQg1gKgGgEQACAEAVAhQAUAkgOAaQgSARgMglQgOgmAAgiQAAAGgRAlQgRAoggADQgZgHAigoQAfgiAIgIQgFAEgZAIQgdALgYgRQgOgVArAAQAiAAALABQADAAABAB");
	this.shape_36.setTransform(289,90.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9FAE8").s().p("AgBA/QgOgmAAgiQAAAGgRAlQgRAoggADQgZgHAigoQAfgiAIgIQgFAEgZAIQgdALgYgRQgOgVArAAIAtABIAEABIgEgBIgOgFQgPgHAFgWQAKgTARAXQARAXACAFIAAAAIAAAAQgBgDAEgaQAEgaAegEQAdACgXAaQgWAagEAEQAGgDA2gGQA3gHAIAbQgIAYg1gIQg1gKgGgEQACAEAVAhQAUAkgOAaQgFAFgGAAQgLAAgIgZg");
	this.shape_37.setTransform(289,90.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2B435").s().p("AgTAAQACgNARgCQASACACANQgCAOgSACQgRgCgCgOg");
	this.shape_38.setTransform(284.3,74.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#6B7F1A").ss(0.3,1,1).p("AgqgaQgFgBgJgEQgPgHAFgWQAKgTARAXQARAXACAFQgBgDAEgaQAEgaAegEQAdACgXAaQgWAagEAEQAGgDA2gGQA3gHAIAbQgIAYg1gIQg1gKgGgEQACAEAVAhQAUAkgOAaQgSARgMglQgOgmAAgiQAAAGgRAlQgRAoggADQgZgHAigoQAfgiAIgIQgFAEgZAIQgdALgYgRQgOgVArAAQAiAAALABQADAAABAB");
	this.shape_39.setTransform(286.2,76);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F9FAE8").s().p("AgBA/QgOgmAAgiQAAAGgRAlQgRAoggADQgZgHAigoQAfgiAIgIQgFAEgZAIQgdALgYgRQgOgVArAAIAtABIAEABIgEgBIgOgFQgPgHAFgWQAKgTARAXQARAXACAFQgBgDAEgaQAEgaAegEQAdACgXAaQgWAagEAEQAGgDA2gGQA3gHAIAbQgIAYg1gIQg1gKgGgEQACAEAVAhQAUAkgOAaQgFAFgGAAQgLAAgIgZg");
	this.shape_40.setTransform(286.2,76);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2B435").s().p("AgNAAQABgJAMgBQANABABAJQgBAKgNABQgMgBgBgKg");
	this.shape_41.setTransform(235.5,76.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#6B7F1A").ss(0.2,1,1).p("AgdgSQgEgBgHgDQgLgFAEgQQAHgOAMARQANARABADQgBgCADgTQADgTAWgDQAUACgQATQgRATgCACQAEgCAogEQAngFAGATQgGARgmgFQgngHgEgDQACADAOAXQAPAagKATQgNANgIgbQgLgcABgYQAAAEgNAbQgMAcgXADQgSgFAYgdQAXgYAGgGQgEADgSAFQgVAIgRgMQgKgPAeAAQAZAAAJABQABAAABAA");
	this.shape_42.setTransform(236.8,77.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9FAE8").s().p("AAAAuQgLgcABgYIAAAAIAAAAQAAAEgNAbQgMAcgXADQgSgFAYgdQAXgYAGgGIgWAIQgVAIgRgMQgKgPAeAAIAiABIACAAIgCAAIgLgEQgLgFAEgQQAHgOAMARQANARABADQgBgCADgTQADgTAWgDQAUACgQATQgRATgCACQAEgCAogEQAngFAGATQgGARgmgFQgngHgEgDQACADAOAXQAPAagKATQgEAEgEAAQgJAAgEgSg");
	this.shape_43.setTransform(236.8,77.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2B435").s().p("AgTAAQACgNARgCQASACACANQgCAOgSACQgRgCgCgOg");
	this.shape_44.setTransform(247.1,71.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#6B7F1A").ss(0.3,1,1).p("AgqgaQgFgBgJgEQgPgHAFgWQAKgTARAXQARAXACAFQgBgDAEgaQAEgaAegEQAdACgXAaQgWAagEAEQAGgDA2gGQA3gHAIAbQgIAYg1gIQg1gKgGgEQACAEAVAhQAUAkgOAaQgSARgMglQgOgmAAgiQAAAGgRAlQgRAoggADQgZgHAigoQAfgiAIgIQgFAEgZAIQgdALgYgRQgOgVArAAQAiAAALABQADAAABAB");
	this.shape_45.setTransform(249,72.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9FAE8").s().p("AgBA/QgOgmAAgiQAAAGgRAlQgRAoggADQgZgHAigoQAfgiAIgIQgFAEgZAIQgdALgYgRQgOgVArAAIAtABIAEABIgEgBIgOgFQgPgHAFgWQAKgTARAXQARAXACAFQgBgDAEgaQAEgaAegEQAdACgXAaQgWAagEAEQAGgDA2gGQA3gHAIAbQgIAYg1gIQg1gKgGgEQACAEAVAhQAUAkgOAaQgFAFgGAAQgLAAgIgZg");
	this.shape_46.setTransform(249,72.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4C6E0").s().p("AgEANQgEAEgBgHQgCgIgDABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBABAAQAIgSABAOQgDASANgSQAQgSgEAKQgDACgKAPIgGAMQADgHgEADg");
	this.shape_47.setTransform(266.8,73.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4C6E0").s().p("AgKAKQgHgFgGAAIAIgEQAAgCgDgEQgEgDALgDQgGADALALQAXAIAHgBIgPACIgIAAQgGAAgFgCg");
	this.shape_48.setTransform(269.5,84.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4C6E0").s().p("AgDALIgBgKQAEgSAEADQgDABgBAQIgDAMIAAgEg");
	this.shape_49.setTransform(260.3,85.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4C6E0").s().p("AgIAVQAIgQAAgUQAGgWAHAFIgIAHQgFADAAAYQAAAOAAABQAAABgEAHQgHAIAAABIAAAAQgDAAAGgNg");
	this.shape_50.setTransform(259,86.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4C6E0").s().p("AAAgEQAKABADADIgHgCQgGgCgMAJQABgEALgFg");
	this.shape_51.setTransform(257.9,80);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4C6E0").s().p("AgMACQAEgHAKACQAQgCAEgDQgDADgTAFQgKACgDAFIgIADQADgCAGgGg");
	this.shape_52.setTransform(256.3,81.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4C6E0").s().p("AAAAFQgCgQgDgFQAFABACAQQgBAQAFAAIAAAAQgFAAgBgMg");
	this.shape_53.setTransform(259.5,75.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F4C6E0").s().p("AAIAjQgIgCgDgMQACgVgHgMQgKgUgCgEIANALQAJALAAAOQgCAeAVAHIgBAAIgMgCg");
	this.shape_54.setTransform(258.6,75.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F4C6E0").ss(1,1,1).p("AAAgCIAAAG");
	this.shape_55.setTransform(263.5,75.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F4C6E0").ss(1,1,1).p("AgGAAQADAAAKAA");
	this.shape_56.setTransform(258.6,79);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E4E217").s().p("AgNAyQAHgjgIAPQgQAdAGgNIAEgQQgCgCgJAGQgJABAEgIQAKgJgFgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIgFACQgWAOAAgHQANgLgCgDQgPgDAHgBIAQABQAHABgIgDQgOgEACAAQgCgFAPADIAMAAQAKAAgOgGQgbgTANACQAQAQgFgNQgLgVAJALQARAUgDgNQgLgUACgCQADgFAGANQAJAPADgLQAAgEADACQACADACgHQAHgWgDANQgDAVALgMQAMgMgMASQgHAPANgJQAJgEgEAFQgJAGASAAIAagDQANgCgPAFQgtAHASAFQAXAIgMAAQgBAEABAHQgJgEgMgCQgCABAJAGQAKAGABAJQgBAFgCABIACADQgFAEgKgGIABABQAGAHAAADQgGABgLgOQgHgLgEANIgFASQgCAGgBAAQgBAAAAgGg");
	this.shape_57.setTransform(264.4,79.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#F4C6E0").ss(1,1,1).p("Ag9AgQgCAFgBAPQADALgEAIQgDANAAAGQgCAIAMgEQAJABAHgFQAJgKAPgDQAOABgDgKQAAgFADgBQADgBACgLQAEgPAAgFQABACADAGQAFAJAMACQALABAEADQADACANgCQAegDgBABQABgDgPgPQgQgHgBgHQgCgIgCgBQAEgCAOgLQAMgSAJgKQALgLAJgEQAJgKgKAEQgHAKgJgEQgEAAgLgBQgQgJgNgBQgJAAAFgNQAHgLgDgCQgFAAgNABQgNABgGgBQgGAAgGALQgFAMgCAFQgDACgIgJQgHgKgDgGQACgCgTABQgXgKgNgGQgJgCALAOQALAQgCAcQgHAUAOAFQgFAAgJAJQgFAHgIABQgGAAAAAEQgFADgNAPQAEgCAFADQACADAJAAQAJABABgBQAEAAAMADQAFAAACgBQABgBAAgC");
	this.shape_58.setTransform(264.3,80.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AE76A5").s().p("AhEBaQAAgGADgNQAEgIgDgLQABgPACgFIABgDIgBADIgHABIgQgDIgKAAQgJAAgCgDQgFgDgEACQANgPAFgDQAAgEAGAAQAIgBAFgHQAJgJAFAAQgOgFAHgUQACgcgLgQQgLgOAJACIAkAQQATgBgCACQADAGAHAKQAIAJADgCIAHgRQAGgLAGAAQAGABANgBIASgBQADACgHALQgFANAJAAQANABAQAJIAPABQAJAEAHgKQAKgEgJAKQgJAEgLALQgJAKgMASQgOALgEACQACABACAIQABAHAQAHQAPAPgBADQAAgBgdADQgNACgDgCQgEgDgLgBQgMgCgFgJIgEgIIgEAUQgCALgDABQgDABAAAFQADAKgOgBQgPADgJAKQgHAFgJgBIgGACQgFAAABgGgABWAzIAAAAIAAAAg");
	this.shape_59.setTransform(264.3,80.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#31471B").ss(1,1,1).p("AgVAAQgBAAgBAAQgUAAgGAAQAPgCANACgAAeALQAEgEAPACQgHAAgNAJIAHACIgNAAIABAEIgGgHIgOAHIAIgJIgUACIAIgHQAAgCgQgHQgCgBgDAAQAVABAJALIgHgjQAAABAGAMQAFALABAJQAAAGAHgOQAIgMAMgFQgCABgIAIQgIAGgBANQABgIAbgFQgDAAgHADQgIAEgCAEQgBABgBAC");
	this.shape_60.setTransform(264.2,89.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3D8758").s().p("AAEARIgMAHIAIgJIgWACIAJgHQgBgCgQgHIgFgBQAWABAKALIgHgjIAGANQAEALAAAJQAAAGAHgOQAIgMAMgFIgKAJQgIAGgBANQABgIAbgFIgKADQgIAEgCAEIgCADIACgDQAEgEAPACQgHAAgNAJIAHACIgNAAIABAEg");
	this.shape_61.setTransform(265.6,89.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#31471B").ss(1,1,1).p("AABgdQABABAGAUQAGASgFAZQAAgCgFgXQgEgUgHgPQgHgLAIACQAGADABAB");
	this.shape_62.setTransform(264.7,85.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D8758").s().p("AAEAKQgEgUgHgPQgHgLAIACIAHAEIAAABQABABAGAUQAGASgFAZIgFgZg");
	this.shape_63.setTransform(264.7,85.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#31471B").ss(1,1,1).p("AAmgEQAAgCgYgBQgVgCgpASQAHgEAagFQAegIAWAIQARAKgHgHQgGgFgDgCg");
	this.shape_64.setTransform(254.9,88.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3D8758").s().p("AAOgHQAYABAAACIAJAHQAHAHgRgKQgWgIgeAIQgaAFgHAEQApgSAVACg");
	this.shape_65.setTransform(254.9,88.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#31471B").ss(1,1,1).p("Ag7ALQAHgEAdgHQAjgMAhALQAaAJgLgIQgLgIgEgCQgBgCgfABQgcAAgsAWQgCABgBAA");
	this.shape_66.setTransform(254.4,88.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3D8758").s().p("AALgKQAfgBABACIAPAJQAMAJgbgJQghgLgiALQgdAIgIAEQAsgWAcAAg");
	this.shape_67.setTransform(254.6,88);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#31471B").ss(1,1,1).p("AAlgEQgCgBgbgFQgZgFgeAGQAFgBAdABQAeAAAVAOQAPAOgHgLQgGgJgDgDg");
	this.shape_68.setTransform(254.7,86);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3D8758").s().p("AAmAFQgVgOgeAAQgdgBgFABQAegGAZAFIAdAGIAJAMQABACABAAQAAABAAABQAAAAAAABQAAAAAAAAQgBAAgJgIg");
	this.shape_69.setTransform(254.7,86);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#31471B").ss(1,1,1).p("AAlgCQgBgBgZgGQgWgFgeAGQAEgBAgAEQAdADANAJQAHAKgDgKQgDgHgBgCg");
	this.shape_70.setTransform(255.5,85.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3D8758").s().p("AAlAHQgNgJgdgDQgggEgEABQAegGAWAFIAaAHIAEAJQAAACABABQAAAAAAABQAAABAAAAQAAAAgBAAQgBAAgDgFg");
	this.shape_71.setTransform(255.5,85.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#31471B").ss(1,1,1).p("AAgARQgBgCgVgWQgTgXgfgMQAEACAUAPQAWARAXAfQASAdgIgNQgIgNgCgEg");
	this.shape_72.setTransform(253.3,79.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3D8758").s().p("AAdAXQgXgfgWgRIgYgRQAfAMATAXQAVAWABACIgDAFIAKARIACAEIgMgUg");
	this.shape_73.setTransform(253.3,79.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#31471B").ss(1,1,1).p("AAVAnQgBACgSgWQgQgUgbg/QAAAEAPAoQAQAmAgAgQAdAYgNgPQgNgQgEgEg");
	this.shape_74.setTransform(255.3,76.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3D8758").s().p("AAWAyQgggggQgmQgPgoAAgEQAbA/AQAUQASAWABgCIARAUQAFAGgBAAQgDAAgRgPg");
	this.shape_75.setTransform(255.3,76.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#31471B").ss(1,1,1).p("AgBg3QABAAAFATQAHATgJAdQgIAdgEAHIgCAGIAJACQACgCAGgdQAJgagFgaQgGgXgDgDQgCgEAAACg");
	this.shape_76.setTransform(270.3,70.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3D8758").s().p("AgLA2IACgGIAMgkQAJgdgHgTQgFgTgBAAQAAAAAAAAQAAgBABABQAAAAAAABQAAAAABABQADADAGAXQAFAagJAaQgGAdgCACg");
	this.shape_77.setTransform(270.3,70.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#31471B").ss(1,1,1).p("AgfAUQADgDANgRQANgRAMgIQAegFAEAIQABgGgYgDQgVgFghAxQgPAaAHgIQAIgIACgDg");
	this.shape_78.setTransform(275.6,75.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3D8758").s().p("AghANQAhgxAVAFQAYADgBAGQgEgIgeAFQgMAIgNARIgQAUIgKALIgCACQgCAAAMgUg");
	this.shape_79.setTransform(275.6,75.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#31471B").ss(1,1,1).p("AAAAnQAAgBAJgaQAIgYgHglQAAAFgBAXQgBAZgMAcQgNAXAIgGQAHgHACgDg");
	this.shape_80.setTransform(272.2,73.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3D8758").s().p("AgEAgQAMgcABgZIABgcQAHAlgIAYQgJAaAAABIgJAKIgDABQgCAAAKgSg");
	this.shape_81.setTransform(272.2,73.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#31471B").ss(1,1,1).p("AgZgBQAHgJA/AAQgDABgeAGQgcAEgUAIQgOAFALgHQALgHADgBg");
	this.shape_82.setTransform(271.8,81.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3D8758").s().p("AgnAHIAOgIQAHgJA/AAIghAHQgcAEgUAIIgHACQgCAAAGgEg");
	this.shape_83.setTransform(271.8,81.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#31471B").ss(1,1,1).p("AgqAQQACgDAdgPQAcgRAnAAQgBgBgbAAQgaAAgiAVQgeAWAIgDQAJgCADgCg");
	this.shape_84.setTransform(274.2,78.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3D8758").s().p("AggABQAigVAaAAQAbAAABABQgnAAgcARQgdAPgCADIgMAEIgBABQgEAAAbgUg");
	this.shape_85.setTransform(274.2,78.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#31471B").ss(1,1,1).p("AgGggQABACAKAXQAMAWABAWQAAgCgJgXQgIgUgLgRQgLgNAGACQAHACACACg");
	this.shape_86.setTransform(268.9,87.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#31471B").ss(1,1,1).p("AgYgdQACAAATAKQARAJAIALQAGAagEADQAEgFgPgZQgKgKgMgFQgOgFgBAAg");
	this.shape_87.setTransform(271,87.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3D8758").s().p("AANAAQgKgKgMgEIgPgGIAAgJIAVAKQARAKAIAKQAGAagEADQAEgGgPgYg");
	this.shape_88.setTransform(271,87.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#31471B").ss(1,1,1).p("AAeAaQgCgEgHgKQgJgMgXgJQgYgIAIgGQAIgGANADQACAAAMAOQANAMAJAaQAAABAAAB");
	this.shape_89.setTransform(270.5,84.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3D8758").s().p("AAVANQgJgNgXgIQgYgIAIgGQAIgGANADQACAAAMAOQANALAJAbIgJgOg");
	this.shape_90.setTransform(270.5,84);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#46812E").ss(0.7,1,1).p("AF9ibQgHgCg4gCQg7gChDAOQhEANgbAuQgGgFhmgPQhngQiMAcQiJAchtB6QALgKBSgvQBbg2CLgXQCMgWCSBXQgFgDhLgJQhJgJhVAMQhWALglA6QAEgCBOgQQBOgQBngDQBpgCBVAnQgHgDhOAPQhMAPg3BCQALgKBOghQBXgkBtAmIg6A/ICbhAIiEgoIC5AHIhchEIhYgFQADgHBHgYQBJgZByAoQgCgFhTgbQhSgbiFASQgCgHAmgrQAngqBpAEg");
	this.shape_91.setTransform(239.2,85.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EFF252").s().p("AEOBhQhtgmhXAkQhOAhgLAKQA4hCBLgPQBOgPAHADQhVgnhpACQhnADhOAQQhOAQgEACQAlg6BWgLQBVgMBJAJQBLAJAEADQiRhXiMAWQiLAXhbA2QhSAvgLAKQBth6CKgcQCKgcBpAQQBmAPAFAFQAbguBEgNQBDgOA7ACQA4ACAHACQhpgEgmAqQgnArACAHQCFgSBSAbQBSAbADAFQhygohJAZQhHAYgDAHIBYAFIBcBEIi5gHICEAoIiaBAg");
	this.shape_92.setTransform(239.2,85.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#46812E").ss(0.7,1,1).p("AAzglQgMAngGAwIAvguIgbA6IA2gGIhUAiIgQgYIgHARIgSgiIg1AAIAbgOIg+hAIBFAkQAEgCACgdQADgegzgiQAHgFAmAPQAkAPgIBeQAAgEASgnQAUgpAhgcQgCADgMApg");
	this.shape_93.setTransform(-247.1,65.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EFF252").s().p("AAHBCIgHARIgSgiIg1AAIAbgOIg+hAIBFAkQAEgCACgdQADgegzgiQAHgFAmAPQAkAPgIBeQAAgEASgnQAUgpAhgcIgOAsQgMAngGAwIAvguIgbA6IA2gGIhUAig");
	this.shape_94.setTransform(-247.1,65.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#46812E").ss(0.7,1,1).p("ACGg6QgggRgrAUIgFgpIgyASIgXgSQAAACACAOQABANgDAMQgEgDgwgIQgwgHgtAbQAGgDAlAAQAlAAAFAiQgGABgpAOQgqAPgGASQADgDAfgIQAfgIAZAOQABADgIAWQgHAXgaAPQgSANAogTQAogUAIgpIAtBIQAAgCAEgVQAFgVAJgTQAMgMALAaQALAaABAFQAFABAagHQAagHgRggQgQghAsAOQArANASAqQAEgEgHglQgGgig8gSQgBgBAOgJQAPgIAkAFQgBgEghgRg");
	this.shape_95.setTransform(-271,75.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EFF252").s().p("Ah8BbQAagPAHgXQAIgWgBgDQgZgOgfAIQgfAIgDADQAGgSAqgPQApgOAGgBQgFgiglAAQglAAgGADQAtgbAwAHQAwAIAEADQADgMgBgNIgCgQIAXASIAygSIAFApQArgUAgARQAhARABAEQgkgFgPAIQgOAJABABQA8ASAGAiQAHAlgEAEQgSgqgrgNQgsgOAQAhQARAggaAHQgaAHgFgBIgMgfQgLgagMAMQgJATgFAVIgEAXIgthIQgIApgoAUQgYAMgDAAQgCAAAHgGg");
	this.shape_96.setTransform(-271,75.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#46812E").s().p("Ah8BbQAagPAHgXQAIgWgBgDQgZgOgfAIQgfAIgDADQAGgSAqgPQApgOAGgBQgFgiglAAQglAAgGADQAtgbAwAHQAwAIAEADQADgMgBgOIgCgPIAXASIAygSIAFApQArgUAgARQAhARABAEQgkgFgPAIQgOAJABABQA8ASAGAiQAHAlgEAEQgSgqgrgNQgsgOAQAhQARAggaAHQgaAHgFgBQgBgFgLgaQgLgagMAMQgJATgFAVIgEAXIgthIQgIApgoAUQgYAMgDAAQgCAAAHgGg");
	this.shape_97.setTransform(-264.9,75.4);

	this.addChild(this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-305.7,-102.8,611.6,205.6);


(lib.duck3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.6,1,1).p("AJmEXIzLAOIBInFIQfiEg");
	this.shape.setTransform(2.1,42.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AodigIQeiEIBlI7IzLAOg");
	this.shape_1.setTransform(2.1,42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB8F22").s().p("AgzCYQgUADgggEQgjgHAHgRQAGgRAOgbQAHgYgcgJQgbgJgCgMQAGgJAtgIQAugJAwgEIA6gHQARgCAegNIAhgOQgLg3AUghQAUghAEgBQADAFAEADQgeAjgBAtQgBAtAbAaQgdgJgUACQgwAtg4gKQg3gKg2AJQAnAUgWAXQgXAXAGAgQAKARAagDQAZgEASAMQADAFgEAIQgFgKgTACg");
	this.shape_2.setTransform(-17.6,90.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.7,1,1).p("ADcgCQgkgkgcgHQgbgIgBACQgEgEgDguQgCgtAmgkQgDACgIACQgKACgCgRQAAADgKAJQgKAJgOgSQgEABgVAjQgUAjAMA5QgEACgfANQgeANgQADQgNABgxAGQgxAHgvAJQgvAIgFAJQABAMAcAJQAdAJgHAaQgPAbgHASQgGATAkAHQAnAEAVgDQAVgDgDAZQgHAcAFAGQAEAGAxgRQAkgNBFgiQBFgiAygnQAzgngTgZg");
	this.shape_3.setTransform(-12,92.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2B435").s().p("AhZDBQgFgGAHgcQADgZgVADQgVADgngEQgkgHAGgTQAHgSAPgbQAHgagdgJQgcgJgBgMQAFgJAvgIQAvgJAxgHIA+gHQAQgDAegNIAjgPQgMg5AUgjQAVgjAEgBQAOASAKgJQAKgJAAgDQACARAKgCIALgEQgmAkACAtQADAuAEAEQABgCAbAIQAcAHAkAkQATAZgzAnQgyAnhFAiQhFAigkANQgkAMgMAAQgEAAgBgBg");
	this.shape_4.setTransform(-12,92.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1DFDC").s().p("AgPAmQgHAAgBgCQAVgNALgbQAOgeABgDQgCAJgIAUIgOAaQADAHAGgFQgPASgIAAIgBAAg");
	this.shape_5.setTransform(52.2,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1DFDC").s().p("AgWAZQACABAQgSQAOgPANgnIgKAgQgIAagFAIQgFASAFAIIAAABQgIAAgOgWg");
	this.shape_6.setTransform(47.6,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1DFDC").s().p("AglAEQgBgVACgIQACgCAXAFQAVAFAdAiIgcgRQgYgMgMADQgKAHgBANIgBAPIAAgWg");
	this.shape_7.setTransform(41.4,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1DFDC").s().p("AgOAsQgdgFgCgCIgCgPQAPgIAFgSQADgUAAgCIASgSIgHAKQgHAKAHAIQAFAIgIAKQgIAMAJANQAOALAWgEQAYgEADgBQgdAQgWAAIgLgBgAAwAdIAAAAIAAAAg");
	this.shape_8.setTransform(-39.3,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1DFDC").s().p("AgdAcIAwhCQAEgEAGAFQgFABgOAVIgQAcQgLASASACQgBACgMAFIgFABQgIAAgEgNg");
	this.shape_9.setTransform(-43.9,22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2.6,1,1).p("AgvgkQACgDAeAFQAcAEAjAvQABADgOANQgPANgpgU");
	this.shape_10.setTransform(42,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgVAaIgag+QACgDAeAFQAcAEAjAvQABADgOANQgGAFgKAAQgQAAgYgMg");
	this.shape_11.setTransform(42,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2.6,1,1).p("AAbgmQABADgNAfQgNAcgcAP");
	this.shape_12.setTransform(46.2,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AAbgmQABADgNAfQgNAcgcAPg");
	this.shape_13.setTransform(46.2,9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2.6,1,1).p("AAdgrQABADgNAgQgOAfgfAV");
	this.shape_14.setTransform(50.7,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AAdgrQABADgNAgQgOAfgfAVg");
	this.shape_15.setTransform(50.7,12.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.6,1,1).p("AAKgzIgxBKQgCAHAQARQAQARAxgx");
	this.shape_16.setTransform(-44.3,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgZAvQgQgRACgHIAxhKIAeBCQgmAlgRAAQgGAAgEgFg");
	this.shape_17.setTransform(-44.3,22.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2.6,1,1).p("ABOAIQgGAhgWAYQgLANgQAEQgIACgIgDQgHgEgHgIQgGgDgGgFQgOgJgLgNQgEgHgGgFQgGgDgGgEQgBgBgBAAQgJgNABgPQgEgdANgYQAIgIAKgGQAlgTAMAoQACADABAEQACgDARAAQARgBALAgQACgBANAFQAOAGgBASg");
	this.shape_18.setTransform(48.7,10.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AAHBRQgHgEgHgIIgMgIQgOgJgLgNQgEgHgGgFIgMgHIgCgBQgJgNABgPQgEgdANgYQAIgIAKgGQAlgTAMAoIADAHQACgDARAAQARgBALAgQACgBANAFQAOAGgBASQgGAhgWAYQgLANgQAEIgGABQgFAAgFgCg");
	this.shape_19.setTransform(48.7,10.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDFDFD").s().p("AgRAAQACgQAPgBQAQABACAQQgCAQgQACQgPgCgCgQg");
	this.shape_20.setTransform(-21.8,-39.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDFDFD").s().p("AgQAcQgTgOAOgaQASgZAUAKQATAPgOAZQgMASgNAAQgGAAgHgDg");
	this.shape_21.setTransform(-15.9,-49.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFDFD").s().p("AgSAAQABgRARgBQASABABARQgBASgSABQgRgBgBgSg");
	this.shape_22.setTransform(10.5,-30.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDFDFD").s().p("AgRAeQgVgQAPgbQATgbAWALQAVAQgPAbQgOATgOAAQgGAAgHgDg");
	this.shape_23.setTransform(16.9,-41.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0D3444").s().p("AgMAiQgXgNAKgeQAOgfAYAHQAXANgKAdQgLAagSAAIgJgBg");
	this.shape_24.setTransform(-18.9,-43.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D3444").s().p("AgMAjQgYgNAKgfQAPgfAYAGQAYANgKAfQgMAagSAAIgJgBg");
	this.shape_25.setTransform(13.8,-35.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#165472").s().p("AgOBXQg8gSAJhQQAUhPA8AEQA8ATgJBOQgUBMg3AAIgFAAg");
	this.shape_26.setTransform(-18.5,-43.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#165472").s().p("AgQBeQg/gVAJhUQAWhVBBAEQA/ATgKBWQgUBRg8AAIgGAAg");
	this.shape_27.setTransform(14.1,-35.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D2D6D6").s().p("AAIAJQgIgtgfgZQAEABAbAbQAcAcAEAxQABAHgPAKQABgFgLgvg");
	this.shape_28.setTransform(-9,-68.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D2D6D6").s().p("ABmBpQgJgGgBgCQgJh6gjgiQgjgigiANQgkAMgMAPQgQAQgNgCQgMgBgBgCQAPgYAjgXQAjgYAzAMQAzAXATBHQASBGgBAcQgBAPgFAAIgEgBg");
	this.shape_29.setTransform(23.8,-57);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AjrA5QhKgdg4hrQAHAMAcAiQAmAtBKAkQBLAlBtgcQCdgxBQgkQBQglAAgCQAGgDAngBQAngCgBAbQgLAZgjgQQgigQgFgEIhPAgIiWA6QhJAegLACQgIAEg8AJQgNACgPAAQgxAAg6gXg");
	this.shape_30.setTransform(-11.5,2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJgEQgLgZABgCIALAAQAGAQAJAVIANAaQgUgPgJgVg");
	this.shape_31.setTransform(-44,-24);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag9AXQAagLAtgPIA0gTIg/AbIgnASg");
	this.shape_32.setTransform(-21.2,14.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag6ArQgsgTARhOQADAGAzAsQAxAqBIACQgEACgzAKQgRADgRAAQgeAAgdgMg");
	this.shape_33.setTransform(-35.8,5.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CB8F22").s().p("AhtEFQg6gogOhBQgPhBAngqQgDgDgcguQgcgxgPg8QgPg9AkgoQACgEAbgCQAagBAaA8QAFACAnAFQAnAFAOgHQAEgNgDghQgCggAygGQAAAFAKAmQAKAnAWAGQAbgEA3gtQA3gtAVgZQAKgMAJgGQggArgaAwQgaAxgrAgQgfAKgagUQgagTgZgVQgbAlg1gMQg0gNgXANQgrAiAbBAQAbA+AOA1QABAhgJAiQgJAiANAfQAUAgAmAGQAmAGAigBQAWgDAtgPQAsgPAVAMQAHAGgBAOQAOADAOAAQhMAZgigDQgDADgyAIIgSABQgqAAgxgZg");
	this.shape_34.setTransform(-31.9,-11);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1.7,1,1).p("AGRCLQgkAQgjAAQgjAAgDgCQgJADhMAaQhMAZglAMQgkANhQAcQhSAbgmgDQgDAEgzAHQgzAIg+ghQg7gogPhCQgPhCAogrQgDgDgdgyQgcgvgQg+QgPg+AlgoQACgFAbgBQAbgBAaA9QAFACAoAFQAoAFAOgHQAEgNgCghQgDgiA2gGQgBAGAKAnQAKAmAXAHQAbgEA4guQA2guAXgZQArgwAaAgQAaAgAQA4QAPA4AMAYQAoAsA9ALQAvAPA+AhQA9AfAGA3QgDAwgjARg");
	this.shape_35.setTransform(-12.5,-11.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2B435").s().p("Ak1EOQg7gogPhCQgPhCAogrQgDgDgdgyQgcgvgQg+QgPg+AlgoQACgFAbgBQAbgBAaA9QAFACAoAFQAoAFAOgHQAEgNgCghQgDgiA2gGQgBAGAKAnQAKAmAXAHQAbgEA4guQA2guAXgZQArgwAaAgQAaAgAQA4QAPA4AMAYQAoAsA9ALQAvAPA+AhQA9AfAGA3QgDAwgjARQgkAQgjAAQgjAAgDgCIhVAdIhxAlQgkANhQAcQhSAbgmgDQgDAEgzAHIgUACQgrAAgygbg");
	this.shape_36.setTransform(-12.5,-11.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1DFDC").s().p("AgkCnQgBABgNgXQgNgXgDg4QACg9AZhDQAahEAYgXQABgCAQgIQAQgHAXAGQg/AkgQBJQgQBHAQBBQAKAsAnAVQggAWgdAAIgMgBg");
	this.shape_37.setTransform(-23,-44.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2.6,1,1).p("AgViqQACgFAbgJQAegKAeAvQAfAuAFChQgCADgbAhQgcAigpAfQgnAfgngGQgCABgNgZQgOgagCg+QAChEAbhKQAahMAbgag");
	this.shape_38.setTransform(-19.8,-43.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AhIC6QgCABgNgZQgOgagCg+QAChEAbhKQAahMAbgaQACgFAbgJQAegKAeAvQAfAuAFChIgdAkQgcAigpAfQghAaghAAIgMgBg");
	this.shape_39.setTransform(-19.8,-43.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E1DFDC").s().p("AhCCrQgXgkgFg5QgFg4ABgGQAAgEAXg1QAWg2Atg1QAqg1BBABQhjAygeB2QgfB0AnBlQADAIAEAIQgigLgRgTg");
	this.shape_40.setTransform(9.4,-36.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2.6,1,1).p("ACVhkQAEBcggBeQghBhgnAkQgHAAg9gLQg/gLghggQgYglgFg7QgGg6ABgGQAAgFAag7QAag8Ayg3QAwg2BJANQBHAXAEBcg");
	this.shape_41.setTransform(13.8,-35.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEFEFE").s().p("AgTDQQg/gLghggQgYglgFg7QgGg6ABgGQAAgFAag7QAag8Ayg3QAwg2BJANQBHAXAEBcQAEBcggBeQghBhgnAkIAAAAQgKAAg6gLg");
	this.shape_42.setTransform(13.8,-35.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2.6,1,1).p("AgxgNQADADAhANQAfAQAggG");
	this.shape_43.setTransform(-50.4,31);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEFEFE").s().p("AgOADQgggNgDgDIBjAaQgJABgJAAQgYAAgWgLg");
	this.shape_44.setTransform(-50.4,31);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2.6,1,1).p("AgrgJQACACAdAJQAbALAdgE");
	this.shape_45.setTransform(-49.2,23.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEFEFE").s().p("AgMACQgdgJgCgCIBXASIgQABQgVAAgTgIg");
	this.shape_46.setTransform(-49.2,23.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1DFDC").s().p("AgYBQQgOgOAEgQQAFgQACgCQgRgeANgNQANgOADAAIAGgcQAFgYAMgGQAQgDAOAGQgRAIgHAWQgKAdAgAIQgeAAgSAUQgOAiAqAQQgWACgNAPQAAAGACAFIgHgFg");
	this.shape_47.setTransform(-51.2,26.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2.6,1,1).p("AAthaQgXgUgcAEQgRAHgHAcQgHAbAAAEQgEAAgPARQgQARAUAgQgCABgFATQgFATAQAPQAcAYAiADQAUADAIgRQAEgVgIgTQAVgJAEgWQADgPgFgNQgBgCgGgJQgGgIgDACQAHgHAHgHQALgfgZgWg");
	this.shape_48.setTransform(-49.8,27.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AAOBrQgigDgcgYQgQgPAFgTQAFgTACgBQgUggAQgRQAPgRAEAAQAAgEAHgbQAHgcARgHQAcgEAXAUQAZAWgLAfIgOAOQADgCAGAIIAHALQAFANgDAPQgEAWgVAJQAIATgEAVQgHAOgRAAIgEAAg");
	this.shape_49.setTransform(-49.8,27.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E1DFDC").s().p("AhyBwQgTgYANg1QAEgBA8gfQA7gdBBgyQAlgcAWgfIgVAgQg0BMifBNQgEgBgGAVQgHAVAfAtIAAAAQgEAAgTgYg");
	this.shape_50.setTransform(22.2,30.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAAASIhBgJIAngOQAigOAggDQAfgEgGAaQgBgDgNgHQgSgJhSAYIAmACQAhAEAVANIgrgGg");
	this.shape_51.setTransform(-6.8,55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2.6,1,1).p("ACjg4QAAAEgZAPQgZAPgsgLQgHAJhTBHQhVBKhLAkQAAABACAQQABAQADAQQAAAFgNAIQgNAIgggwQgCgBgEgXQgFgYAJgiQAAgFAUgHQAQgCBMgqQBMgpBBhOQACgBAKgRQAJgQACgXQgBgXAAgXQAAgXAQgCQAkAGABAFQADgGAagPQAbgPASAwQACgDARAAQARgBALAgQACgBANAFQAOAGgBAUQgEAZgVAdQgWAegggPg");
	this.shape_52.setTransform(32.3,23.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("AjpCzQgCgBgEgXQgFgYAJgiQAAgFAUgHQAQgCBMgqQBMgpBBhOIAMgSQAJgQACgXIgBguQAAgXAQgCQAkAGABAFQADgGAagPQAbgPASAwQACgDARAAQARgBALAgQACgBANAFQAOAGgBAUQgEAZgVAdQgWAegggPQAAAEgZAPQgZAPgsgLQgHAJhTBHQhVBKhLAkIACARIAEAgQAAAFgNAIIgEABQgOAAgbgpg");
	this.shape_53.setTransform(32.3,23.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E1DFDC").s().p("ABTLcQAAgvAEgHIAWgyQAUguAQg3QAQg2gLgbQgfglg0AHQg5ACg0gSQgwgPg7gfQg7gegjguQgkguAWg/QAhhSAXgcQAWgbAMgMQALgLAAggQgBgDAHgxQAGgwASg8QASg7AhgkQgBgDAAglQgBglAWgiQAVggA8AJQAAgFArgkQArgkBdgHQgCgDgLg6QgLg5ALhCQALhDA/ggIABAAQgJATABATQgTANgBAUQgRB8AJB8Qg5gHgtATQgtASgTA9QgCAFgRgNQgRgLgOADQg1A9ABBjQABBigeBKIg/B4QggBAAUA/QAvBjBjApQBmAqBzgIQgvBsgiBxQgPA4gEA6QgEAYAIAVIACADQAOAMAPABQgNAMgQAEQgugDABgtg");
	this.shape_54.setTransform(-13.9,-32);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2.6,1,1).p("AGfAkQghBbhFBTQADABARAZQASAZgFAiQgIAWgwAWQgxAVgzAQQg0APgRAFQgRAGgiArQgiAsgSA9QgRA9AhA5QABAHgSA2QgRA2gwALQgvgDAAgvQABgvAEgHQACgDAUgwQAVgvAQg4QAQg3gLgbQgggmg0AHQg6ADg3gTQgxgQg8geQg8gfgkgvQgkgvAWhAQAihUAXgcQAXgcAMgLQALgMAAggQgBgDAHgxQAGgyASg8QASg9AjgkQgCgDAAgmQAAgmAVgiQAWghA/AKQAAgGAsgkQAsglBcgGQgCgEgLg7QgLg6ALhEQALhEBAggQACgCALACQAMABgEAXQgGAdgDAzQgDAyAAAGQACgFAUgjQAVgkAZgFQAVAGgDAwQgCAvgDAUQABgGAQgeQARgeAaAEQATAQgOBEQgOBEATAqQAEABA4AzQA4AyAwBaQAxBagQB1QABAIghBZg");
	this.shape_55.setTransform(3.7,-32.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEFEFE").s().p("AhfLoQABgvAEgHIAWgzQAVgvAQg4QAQg3gLgbQgggmg0AHQg6ADg3gTQgxgQg8geQg8gfgkgvQgkgvAWhAQAihUAXgcQAXgcAMgLQALgMAAggQgBgDAHgxQAGgyASg8QASg9AjgkQgCgDAAgmQAAgmAVgiQAWghA/AKQAAgGAsgkQAsglBcgGQgCgEgLg7QgLg6ALhEQALhEBAggQACgCALACQAMABgEAXQgGAdgDAzIgDA4QACgFAUgjQAVgkAZgFQAVAGgDAwQgCAvgDAUQABgGAQgeQARgeAaAEQATAQgOBEQgOBEATAqQAEABA4AzQA4AyAwBaQAxBagQB1QABAIghBZQghBbhFBTQADABARAZQASAZgFAiQgIAWgwAWQgxAVgzAQIhFAUQgRAGgiArQgiAsgSA9QgRA9AhA5QABAHgSA2QgRA2gwALQgvgDAAgvg");
	this.shape_56.setTransform(3.7,-32.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D6277").s().p("AhAB9QAJgkAlhMIAohUQAAgFAHggQAIgfAPgMIANgDQgMAoABArQAAArghAkQgtBEAlBOQhJgXgEgGg");
	this.shape_57.setTransform(-10.4,50.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1.7,1,1).p("AA9itQgHAAg2ABQg2AAgXAHQgPALgIAjQgJAiAAAEQgBADgWAsQgVApgXAyQgWAygFAXQAEAEBFAXQBFAYBdgLQBegKBOhgQgDgFgUgpQgWgmgGgOQgKgWgWgIQgMgIgSgwQgTgvgLgGg");
	this.shape_58.setTransform(2.5,51.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#256E8A").s().p("AiBCdQhGgXgDgEQAEgXAXgyQAWgyAVgpIAXgvQABgEAIgiQAIgjAQgLQAWgHA2AAIA9gBQALAGATAvQASAwAMAIQAWAIAKAWIAbA0IAYAuQhOBgheAKQgdAEgZAAQg8AAgvgRg");
	this.shape_59.setTransform(2.5,51.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2.6,1,1).p("AD5BDQgJAChcgSQhcgRhAg1QgBgBgRgSQgQgSgRgTQgOgWgPgSQgOgSgeAcQgCgCgWgKQgVgKgTABQgRAGgGAcQgHAcAAAEQgEAAgQARQgPAQAUAgQgCACgFATQgGASARAQQAUAQAgAJQAfAJAQgdQABADAdAGQAdAHAtgRQAIAEBdAdQBfAdBMABQACAAAJgRQAKgRgKgag");
	this.shape_60.setTransform(-30.9,29.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEFEFE").s().p("ABDBhQhdgdgIgEQgtARgdgHQgdgGgBgDQgQAdgfgJQgggJgUgQQgRgQAGgSQAFgTACgCQgUggAPgQQAQgRAEAAQAAgEAHgcQAGgcARgGQATgBAVAKQAWAKACACQAegcAOASQAPASAOAWIAhAlIASATQBAA1BcARQBcASAJgCQAKAagKARQgJARgCAAQhMgBhfgdg");
	this.shape_61.setTransform(-30.9,29.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E1DFDC").s().p("AhhA7QgngsgHguQgHgvACgEIAtgEQAqgDA7gHQgnAfgPAjQgQAiAkAaQBVA8BkgaQguAZhEAIIgXAAQhLAAgigmg");
	this.shape_62.setTransform(-1.6,71.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2.6,1,1).p("AC+iVQgSAFgbAmQgYAahWAQQhVAQhQAHQhQAHgGAAQgCAEAHAwQAHAxApAvQAqAuBlgHQCXgUA0hcQA0hZgbhpQAAgCgSAGg");
	this.shape_63.setTransform(4.8,66.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FEFEFE").s().p("AijByQgpgvgHgxQgHgwACgEIBWgHQBQgHBVgQQBWgQAYgaQAbgmASgFQASgGAAACQAbBpg0BZQg0BciXAUIgYABQhSAAglgog");
	this.shape_64.setTransform(4.8,66.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CB8F22").s().p("AAqBFQgdgIgPgCQgVgDgVAGQgQAPgUgJQACgTAigJQAjgJAQgBQgBgDAIgLQAGgIAKgcIAMgjQgXgCgIgJQgIgJABgBQAPAEAAgQQAGAIgDAMIAnAHQgLAmgFAjQABAOALARQAHALAKAEQgWgEgVgLQAGAXARAFQAPAFAMANQgMgMgbgIg");
	this.shape_65.setTransform(12.9,81.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1.7,1,1).p("ABhiWQgCAAgZALQgYAMgQAfQgBACgOADQgOAEgJgQQgCAJgMgEQABABgCAHQgDAHgMgDQgBABAJAJQAIAJAWACQAAAEgKAfQgKAegGAHQgJALABADQgFgBgkAHQgkAHgKAXQgGAFAVAJQAYgCAOAJQAGAKgDAPQgDAPAPABQARgCAQgFQAPgFAMAIQAJAMgFAQQgFAPAmgPQAqgSALgKQAKgJABgJQACgLAHg5QAHg3gCg5QgBg5gYgKg");
	this.shape_66.setTransform(16.7,82.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2B435").s().p("AALCPQAFgQgJgMQgMgIgPAFQgQAFgRACQgPgBADgPQADgPgGgKQgOgJgYACQgVgJAGgFQAKgXAkgHQAkgHAFABQgBgDAJgLQAGgHAKgeIAKgjQgWgCgIgJQgJgJABgBQAMADADgHQACgHgBgBQAMAEACgJQAJAQAOgEQAOgDABgCQAQgfAYgMQAZgLACAAQAYAKABA5QACA5gHA3QgHA5gCALQgBAJgKAJQgLAKgqASQgTAIgIAAQgJAAADgIg");
	this.shape_67.setTransform(16.7,82.5);

	this.addChild(this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.6,-113.1,125.4,226.1);


(lib.duck2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.6,1,1).p("AJmEXIzLAOIBInFIQfiEg");
	this.shape.setTransform(2.1,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AodigIQeiEIBlI7IzLAOg");
	this.shape_1.setTransform(2.1,38.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB8F22").s().p("AhrCdQADgSAKgcQACgagdgEQgdgEgDgLQAEgJArgRQArgQAugPIA4gPQARgFAbgSIAegUQgVgzAOglQAOgkAEgCIAIAHQgXAoAHAtQAHAsAfAXQgfgHgSAHQgnA0g6AAQg3AAgzASQApANgSAaQgSAbALAfQAOAPAYgIQAYgIAUAJQACAEgCAJQgFgJgTAGQgTAFggACQgkgBAEgSg");
	this.shape_2.setTransform(-3.7,92.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.7,1,1).p("ADWgkQgqgdgcgDQgcgCgBACQgEgEgLgsQgLgtAfgpQgCABgIAEQgJAEgFgQQAAADgIAKQgIALgQgPQgEACgPAmQgOAmAWA2QgDACgcATQgaASgRAGQgNADgvAPQgvANgtARQgsARgEAKQADAMAeAEQAdAEgCAbQgKAdgDATQgDATAkABQAogDAUgGQAUgHABAZQgCAdAGAFQAFAFAtgZQAigTA+guQA+gtArgwQAqgtgXgXg");
	this.shape_3.setTransform(2.3,94.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2B435").s().p("Ag4DSQgGgFACgdQgBgZgUAHQgUAGgoADQgkgBADgTQADgTAKgdQACgbgdgEQgegEgDgMQAEgKAsgRQAtgRAvgNIA8gSQARgGAagSIAfgVQgWg2AOgmQAPgmAEgCQAQAPAIgLQAIgKAAgDQAFAQAJgEIAKgFQgfApALAtQALAsAEAEQABgCAcACQAcADAqAdQAXAXgqAtQgrAwg+AtQg+AugiATQglAUgKAAIgDAAg");
	this.shape_4.setTransform(2.3,94.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1DFDC").s().p("AgPAmQgHAAgBgCQAVgNALgbQAOgeABgDQgBAJgJAUIgOAaQADAHAGgFQgPASgIAAIgBAAg");
	this.shape_5.setTransform(52.2,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1DFDC").s().p("AgWAZQACABAQgSQAOgPANgnIgKAgQgIAagFAIQgFASAFAIIAAABQgIAAgOgWg");
	this.shape_6.setTransform(47.6,7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1DFDC").s().p("AglAEQgBgVACgIQACgCAXAFQAVAFAdAiIgcgRQgYgMgMADQgKAHgBANIgBAPIAAgWg");
	this.shape_7.setTransform(41.4,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1DFDC").s().p("AgOAsQgdgFgCgCIgCgPQAPgIAFgSQADgUAAgCIASgSIgHAKQgHAKAHAIQAFAIgIAKQgIAMAJANQAOALAWgEQAYgEADgBQgdAQgWAAIgLgBgAAwAdIAAAAIAAAAg");
	this.shape_8.setTransform(-39.3,27.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1DFDC").s().p("AgdAcIAwhCQAEgEAGAFQgFABgOAVIgQAcQgLASASACQgBACgMAFIgFABQgIAAgEgNg");
	this.shape_9.setTransform(-43.9,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2.6,1,1).p("AgvgkQACgDAeAFQAcAEAjAvQABADgOANQgPANgpgU");
	this.shape_10.setTransform(42,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgVAaIgag+QACgDAeAFQAcAEAjAvQABADgOANQgGAFgKAAQgQAAgYgMg");
	this.shape_11.setTransform(42,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2.6,1,1).p("AAbgmQABADgNAfQgNAcgcAP");
	this.shape_12.setTransform(46.1,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AAbgmQABADgNAfQgNAcgcAPg");
	this.shape_13.setTransform(46.1,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2.6,1,1).p("AAdgrQABADgNAhQgOAegfAV");
	this.shape_14.setTransform(50.7,9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AAdgrQABADgNAhQgOAegfAVg");
	this.shape_15.setTransform(50.7,9.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.6,1,1).p("AAKgzIgxBKQgCAHAQARQAQARAxgx");
	this.shape_16.setTransform(-44.3,19.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgZAvQgQgRACgHIAxhKIAeBCQgmAlgRAAQgGAAgEgFg");
	this.shape_17.setTransform(-44.3,19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2.6,1,1).p("ABOAIQgGAhgWAYQgLANgQAEQgIACgIgDQgHgEgHgIQgGgDgGgFQgOgJgLgNQgEgHgGgFQgGgDgGgEQgBgBgBAAQgJgNABgPQgEgdANgYQAIgIAKgGQAlgTAMAoQACADABAEQACgDARAAQARgBALAgQACgBANAFQAOAGgBASg");
	this.shape_18.setTransform(48.7,7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AAHBRQgHgEgHgIIgMgIQgOgJgLgNQgEgHgGgFIgMgHIgCgBQgJgNABgPQgEgdANgYQAIgIAKgGQAlgTAMAoIADAHQACgDARAAQARgBALAgQACgBANAFQAOAGgBASQgGAhgWAYQgLANgQAEIgGABQgFAAgFgCg");
	this.shape_19.setTransform(48.7,7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDFDFD").s().p("AgRAAQACgQAPgBQAQABACAQQgCARgQABQgPgBgCgRg");
	this.shape_20.setTransform(-21.8,-42.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDFDFD").s().p("AgQAcQgTgOAOgaQASgZAUAKQATAPgOAZQgNASgMAAQgGAAgHgDg");
	this.shape_21.setTransform(-15.9,-52.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFDFD").s().p("AgSAAQABgRARgBQASABABARQgBASgSABQgRgBgBgSg");
	this.shape_22.setTransform(10.5,-34.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDFDFD").s().p("AgRAeQgVgQAPgbQATgbAWALQAVAQgPAbQgOATgOAAQgGAAgHgDg");
	this.shape_23.setTransform(16.9,-44.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0D3444").s().p("AgMAiQgXgNAKgdQAOggAYAHQAXAMgKAeQgLAagSAAIgJgBg");
	this.shape_24.setTransform(-18.9,-46.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D3444").s().p("AgMAjQgYgNAKgfQAPgfAYAGQAYANgKAfQgMAagSAAIgJgBg");
	this.shape_25.setTransform(13.8,-38.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#165472").s().p("AgOBXQg8gSAJhQQAUhOA8ADQA8ASgJBQQgUBLg3AAIgFAAg");
	this.shape_26.setTransform(-18.6,-47.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#165472").s().p("AgPBdQhAgTAKhWQAVhUBBADQA/AVgJBUQgVBSg8AAIgFgBg");
	this.shape_27.setTransform(14.1,-39.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D2D6D6").s().p("AAIAJQgIgtgfgYQAEAAAbAbQAcAcAEAyQABAFgPAMQABgGgLgvg");
	this.shape_28.setTransform(-9,-71.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D2D6D6").s().p("ABmBpQgJgGgBgCQgJh6gjgiQgjgigiANQgkAMgMAPQgQAQgNgCQgMgBgBgCQAPgYAjgXQAjgYAzAMQAzAXATBHQASBGgBAcQgBAPgFAAIgEgBg");
	this.shape_29.setTransform(23.8,-60.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AjrA5QhKgdg4hrQAHAMAcAiQAmAtBKAkQBLAlBtgcQCdgxBQgkQBQglAAgCQAGgDAngBQAngCgBAbQgLAZgjgQQgigQgFgEIhPAgIiWA6QhJAegLACQgIAEg8AJQgNACgPAAQgxAAg6gXg");
	this.shape_30.setTransform(-11.5,-1.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJgFQgLgYABgDIALAAQAGARAJAVIANAbQgUgPgJgXg");
	this.shape_31.setTransform(-44,-27.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag9AXQAagLAtgPIA0gTIg/AbIgnASg");
	this.shape_32.setTransform(-21.2,10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag6ArQgsgTARhOQADAGAzAsQAxAqBIACQgEACgzAKQgRADgRAAQgeAAgdgMg");
	this.shape_33.setTransform(-35.8,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CB8F22").s().p("AhtEFQg6gogOhBQgPhBAngqQgDgDgcguQgcgxgPg8QgPg9AkgoQACgEAbgCQAagBAaA8QAFACAnAFQAnAFAOgHQAEgNgDghQgCggAygGQAAAFAKAmQAKAnAWAGQAbgEA3gtQA3gtAVgZQAKgMAJgGQggArgaAwQgaAxgrAgQgfAKgagUQgagTgZgVQgbAlg1gMQg0gNgXANQgrAiAbBAQAbA+AOA1QABAhgJAiQgJAiANAfQAUAgAmAGQAmAGAigBQAWgDAtgPQAsgPAVAMQAHAGgBAOQAOADAOAAQhMAZgigDQgDADgyAIIgSABQgqAAgxgZg");
	this.shape_34.setTransform(-31.9,-14.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1.7,1,1).p("AGRCLQgkAQgjAAQgjAAgDgCQgJADhMAaQhMAZglAMQgkANhQAcQhSAbgmgDQgDAEgzAHQgzAIg+ghQg7gogPhCQgPhCAogrQgDgDgdgyQgcgvgQg+QgPg+AlgoQACgFAbgBQAbgBAaA9QAFACAoAFQAoAFAOgHQAEgNgCghQgDgiA2gGQgBAGAKAnQAKAmAXAHQAbgEA4guQA2guAXgZQArgwAaAgQAaAgAQA4QAPA4AMAYQAoAsA9ALQAvAPA+AhQA9AfAGA3QgDAwgjARg");
	this.shape_35.setTransform(-12.5,-15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2B435").s().p("Ak1EOQg7gogPhCQgPhCAogrQgDgDgdgyQgcgvgQg+QgPg+AlgoQACgFAbgBQAbgBAaA9QAFACAoAFQAoAFAOgHQAEgNgCghQgDgiA2gGQgBAGAKAnQAKAmAXAHQAbgEA4guQA2guAXgZQArgwAaAgQAaAgAQA4QAPA4AMAYQAoAsA9ALQAvAPA+AhQA9AfAGA3QgDAwgjARQgkAQgjAAQgjAAgDgCIhVAdIhxAlQgkANhQAcQhSAbgmgDQgDAEgzAHIgUACQgrAAgygbg");
	this.shape_36.setTransform(-12.5,-15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1DFDC").s().p("AgkCnQgBABgNgXQgNgXgDg4QACg9AZhDQAahEAYgXQABgCAQgIQAQgHAXAGQg/AkgQBJQgQBHAQBBQAKAsAnAVQggAWgdAAIgMgBg");
	this.shape_37.setTransform(-23,-47.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2.6,1,1).p("AgViqQACgFAbgJQAegKAeAvQAfAuAFChQgBADgcAhQgcAigpAfQgmAfgogGQgCABgNgZQgOgagCg+QAChEAbhKQAahMAbgag");
	this.shape_38.setTransform(-19.8,-47.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AhIC6QgCABgNgZQgOgagCg+QAChEAbhKQAahMAbgaQACgFAbgJQAegKAeAvQAfAuAFChQgBADgcAhQgcAigpAfQggAagiAAIgMgBg");
	this.shape_39.setTransform(-19.8,-47.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E1DFDC").s().p("AhCCrQgXgkgFg5QgFg4ABgGQAAgEAXg1QAWg2Atg1QAqg1BBABQhjAygeB2QgfB0AnBlQADAIAEAIQgigLgRgTg");
	this.shape_40.setTransform(9.4,-39.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2.6,1,1).p("ACVhkQAEBcggBeQghBhgnAkQgHAAg9gLQg/gLghggQgYglgFg7QgGg6ABgGQAAgFAag7QAag8Ayg3QAwg2BJANQBHAXAEBcg");
	this.shape_41.setTransform(13.8,-39.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEFEFE").s().p("AgTDQQg/gLghggQgYglgFg7QgGg6ABgGQAAgFAag7QAag8Ayg3QAwg2BJANQBHAXAEBcQAEBcggBeQghBhgnAkIAAAAQgKAAg6gLg");
	this.shape_42.setTransform(13.8,-39.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2.6,1,1).p("AgxgNQADADAhANQAfAQAggG");
	this.shape_43.setTransform(-50.4,27.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEFEFE").s().p("AgOADQgggNgDgDIBjAaQgJABgJAAQgYAAgWgLg");
	this.shape_44.setTransform(-50.4,27.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2.6,1,1).p("AgrgJQACACAdAJQAbALAdgE");
	this.shape_45.setTransform(-49.2,20.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEFEFE").s().p("AgMACQgdgJgCgCIBXASIgQABQgVAAgTgIg");
	this.shape_46.setTransform(-49.2,20.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1DFDC").s().p("AgYBQQgOgOAEgQQAFgQACgCQgRgeANgNQANgOADAAQAAgEAGgYQAFgYAMgGQAQgDAOAGQgRAIgHAWQgKAdAgAIQgeAAgSAUQgOAiAqAQQgWACgNAPQAAAGACAFIgHgFg");
	this.shape_47.setTransform(-51.2,22.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2.6,1,1).p("AAthaQgXgUgcAEQgRAHgHAcQgHAbAAAEQgEAAgPARQgQARAUAgQgCABgFATQgFATAQAPQAcAYAiADQAUADAIgRQAEgVgIgTQAVgJAEgWQADgPgFgNQgBgCgGgJQgGgIgDACQAHgHAHgHQALgfgZgWg");
	this.shape_48.setTransform(-49.8,23.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AAOBrQgigDgcgYQgQgPAFgTQAFgTACgBQgUggAQgRQAPgRAEAAQAAgEAHgbQAHgcARgHQAcgEAXAUQAZAWgLAfIgOAOQADgCAGAIIAHALQAFANgDAPQgEAWgVAJQAIATgEAVQgHAPgRAAIgEgBg");
	this.shape_49.setTransform(-49.8,23.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E1DFDC").s().p("AhyBwQgTgYANg1QAEgBA8gfQA7gdBBgyQAlgcAWgfIgVAgQg0BMifBNQgEgBgGAVQgHAVAfAtIAAAAQgEAAgTgYg");
	this.shape_50.setTransform(22.2,27.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AABANIhggPIA3gLQAwgLAvABQAuAAgFAZQgDgCgVgJQgbgMh2AQIA5AGQAxAHAgARIhAgMg");
	this.shape_51.setTransform(-1.5,52.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2.6,1,1).p("ACjg4QAAAEgZAPQgZAPgsgLQgHAJhTBHQhVBKhLAkQAAABACAQQABAQADAQQAAAFgNAIQgNAIgggwQgCgBgEgXQgFgYAJgiQAAgFAUgHQAQgCBMgqQBMgpBBhOQACgBAKgRQAJgQACgXQgBgXAAgXQAAgXAQgCQAkAGABAFQADgGAagPQAbgPASAwQACgDARAAQARgBALAgQACgBANAFQAOAGgBAUQgEAZgVAdQgWAegggPg");
	this.shape_52.setTransform(32.3,20.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("AjpCzQgCgBgEgXQgFgYAJgiQAAgFAUgHQAQgCBMgqQBMgpBBhOIAMgSQAJgQACgXIgBguQAAgXAQgCQAkAGABAFQADgGAagPQAbgPASAwQACgDARAAQARgBALAgQACgBANAFQAOAGgBAUQgEAZgVAdQgWAegggPQAAAEgZAPQgZAPgsgLQgHAJhTBHQhVBKhLAkIACARQABAQADAQQAAAFgNAIIgEABQgOAAgbgpg");
	this.shape_53.setTransform(32.3,20.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E1DFDC").s().p("ABTLbQAAguAEgHIAWgyQAUguAQg3QAQg3gLgaQgfgmg0AIQg5ACg0gSQgwgQg7geQg7gegjguQgkguAWg/QAhhTAXgbQAWgbAMgMQALgMAAgfQgBgDAHgwQAGgxASg7QASg8AhgkQgBgDAAglQgBgmAWggQAVgiA8AKQAAgFArgkQArgkBdgGQgCgEgLg6QgLg5ALhDQALhCA/ggIABgBQgJAUABATQgTAOgBASQgRB9AJB9Qg5gIgtATQgtASgTA9QgCAEgRgMQgRgMgOAEQg1A9ABBjQABBjgeBJIg/B4QggBAAUA/QAvBjBjApQBmAqBzgIQgvBtgiBwQgPA4gEA6QgEAYAIAVIACADQAOALAPACQgNAMgQAFQgugDABgvg");
	this.shape_54.setTransform(-13.9,-35.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2.6,1,1).p("AGfAkQghBbhFBTQADABARAZQASAZgFAiQgIAWgwAWQgxAVgzAQQg0APgRAFQgRAGgiArQgiAsgSA9QgRA9AhA5QABAHgSA2QgRA2gwALQgvgDAAgvQABgvAEgHQACgDAUgwQAVgvAQg4QAQg3gLgbQgggmg0AHQg6ADg3gTQgxgQg8geQg8gfgkgvQgkgvAWhAQAihUAXgcQAXgcAMgLQALgMAAggQgBgDAHgxQAGgyASg8QASg9AjgkQgCgDAAgmQAAgmAVgiQAWghA/AKQAAgGAsgkQAsglBcgGQgCgEgLg7QgLg6ALhEQALhEBAggQACgCALACQAMABgEAXQgGAdgDAzQgDAyAAAGQACgFAUgjQAVgkAZgFQAVAGgDAwQgCAvgDAUQABgGAQgeQARgeAaAEQATAQgOBEQgOBEATAqQAFABA3AzQA4AyAxBaQAwBagQB1QABAIghBZg");
	this.shape_55.setTransform(3.7,-35.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEFEFE").s().p("AhfLoQABgvAEgHIAWgzQAVgvAQg4QAQg3gLgbQgggmg0AHQg6ADg3gTQgxgQg8geQg8gfgkgvQgkgvAWhAQAihUAXgcQAXgcAMgLQALgMAAggQgBgDAHgxQAGgyASg8QASg9AjgkQgCgDAAgmQAAgmAVgiQAWghA/AKQAAgGAsgkQAsglBcgGQgCgEgLg7QgLg6ALhEQALhEBAggQACgCALACQAMABgEAXQgGAdgDAzIgDA4QACgFAUgjQAVgkAZgFQAVAGgDAwQgCAvgDAUQABgGAQgeQARgeAaAEQATAQgOBEQgOBEATAqQAFABA3AzQA4AyAxBaQAwBagQB1QABAIghBZQghBbhFBTQADABARAZQASAZgFAiQgIAWgwAWQgxAVgzAQIhFAUQgRAGgiArQgiAsgSA9QgRA9AhA5QABAHgSA2QgRA2gwALQgvgDAAgvg");
	this.shape_56.setTransform(3.7,-35.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D6277").s().p("AhAB+QAJglAlhNIAohTQAAgFAHgfQAIghAPgKIANgDQgMAnABArQAAAsghAjQgtBDAlBPQhJgXgEgFg");
	this.shape_57.setTransform(-10.4,47.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1.7,1,1).p("AA9itQgHAAg2ABQg2AAgXAHQgPALgIAjQgJAiAAAEQgBADgWAsQgVApgXAyQgWAygFAXQAEAEBFAXQBGAYBcgLQBegKBOhgQgDgFgUgpQgWgmgGgOQgKgWgWgIQgLgIgTgwQgTgvgLgGg");
	this.shape_58.setTransform(2.5,47.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#256E8A").s().p("AiBCdQhGgXgDgEQAEgXAXgyQAWgyAVgpIAXgvQABgEAIgiQAIgjAQgLQAWgHA2AAIA9gBQALAGATAvQATAwALAIQAWAIAKAWIAbA0IAYAuQhOBgheAKQgdAEgZAAQg7AAgwgRg");
	this.shape_59.setTransform(2.5,47.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2.6,1,1).p("AD5BDQgJAChcgSQhcgRhAg1QgBgBgRgSQgQgSgRgTQgOgWgPgSQgOgSgeAcQgCgCgWgKQgVgKgTABQgRAGgGAcQgHAcAAAEQgEAAgQARQgPAQAUAgQgCACgFATQgGASARAQQAUAQAgAJQAfAJAQgdQABADAdAGQAdAHAtgRQAIAEBdAdQBfAdBMABQACAAAJgRQAKgRgKgag");
	this.shape_60.setTransform(-30.9,25.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEFEFE").s().p("ABDBhQhdgdgIgEQgtARgdgHQgdgGgBgDQgQAdgfgJQgggJgUgQQgRgQAGgSQAFgTACgCQgUggAPgQQAQgRAEAAQAAgEAHgcQAGgcARgGQATgBAVAKQAWAKACACQAegcAOASQAPASAOAWIAhAlIASATQBAA1BcARQBcASAJgCQAKAagKARQgJARgCAAQhMgBhfgdg");
	this.shape_61.setTransform(-30.9,25.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E1DFDC").s().p("AhhA7QgngsgHguQgHgvACgEIAsgEQArgDA7gHQgnAfgPAjQgQAiAkAaQBVA8BkgaQguAZhEAIIgXAAQhLAAgigmg");
	this.shape_62.setTransform(-1.6,68);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2.6,1,1).p("AC+iVQgSAFgbAmQgYAahWAQQhVAQhQAHQhQAHgGAAQgCAEAHAwQAHAxApAvQAqAuBlgHQCXgUA0hcQA0hZgbhpQAAgCgSAGg");
	this.shape_63.setTransform(4.8,63.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FEFEFE").s().p("AijByQgpgvgHgxQgHgwACgEIBWgHQBQgHBVgQQBWgQAYgaQAbgmASgFQASgGAAACQAbBpg0BZQg0BciXAUIgYABQhSAAglgog");
	this.shape_64.setTransform(4.8,63.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CB8F22").s().p("AgdBvQgKgIAIgPQAEgPgPAAQgOABgbgGQgYgHAGgKQAFgLALgQQAGgQgTgIQgTgGAAgHQAKgIA7gCIBKgBQAMgBAVgGIAYgHQgFgkAPgVQAQgUADAAQADAFADACQgPAQABAQQACAQgDASQgHASgTAFIgjAIQgiAGgggDIgagCQgQgBgIAFQgGAHALAIQASAKgFAHIgDAFQgOAEABALQAKAKAOAAQAVgDASAHQALAUgPAUIAdAKQgNAGgKAAQgLAAgLgFg");
	this.shape_65.setTransform(-12.8,87.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1.7,1,1).p("ACChqQgHAEgGgOQgBACgHAFQgHAFgJgMQgCABgQAUQgQAVAGAkQgDABgVAGQgWAGgMABQgQgBg7ACQg7ACgKAIQAAAIATAFQATAIgGAQQgLAQgFALQgGALAZAHQAaAFAPAAQAOAAgDAPQgIAPAJAIQAdAMAcgRQAdgSAXgNQAYgKAggbQAggbgOgbQgFgFgLgCQgKgCgCgDQgDgEABgdQABgbAZgTQABAAABgB");
	this.shape_66.setTransform(-11,87.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2B435").s().p("AgxBwQgJgIAIgPQADgPgOAAQgPAAgagFQgZgHAGgLQAFgLALgQQAGgQgTgIQgTgFAAgIQAKgIA7gCQA7gCAQABQAMgBAWgGIAYgHQgGgkAQgVQAQgUACgBQAJAMAHgFQAHgFABgCQAGAOAHgEQgZATgBAbQgBAdADAEQACADAKACQALACAFAFQAOAbggAbQggAbgYAKIg0AfQgQAKgRAAQgMAAgMgFg");
	this.shape_67.setTransform(-11,87.3);

	this.addChild(this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.6,-116.6,125.4,233);


(lib.duck1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.6,1,1).p("AJmEXIzLAOIBInFIQfiEg");
	this.shape.setTransform(2.1,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AodigIQeiEIBlI7IzLAOg");
	this.shape_1.setTransform(2.1,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB8F22").s().p("AgSAJQAPgcAlgUIgbAbQgXAXgRAcQgBgCAQgcg");
	this.shape_2.setTransform(30.1,72.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB8F22").s().p("AhsBzQgCgZArgVQAqgUAYgGQgCgDAGgQQAGgMAGgpIAHgwQgcADgNgKQgMgKAAgBQAVABgDgVQAKAJgBAQIAyABQgGAzADAxQAFARASAUQARATAUgEQgRAFgSgGQgSgGgSgBQANAcAYADQAWADASAOQgSgNglgDQgpgEgUABQgdAAgaAOQgOASgUAAIgMgBg");
	this.shape_3.setTransform(20.9,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.7,1,1).p("AAyi5QgdAVgOAsQgBADgQAIQgRAIgSgTQAAACgEAHQgEAHgJgGQABACgBAKQgBAKgRgCQgBACANAJQANAKAhgDQgBAGgHArQgGApgGAMQgJAQACAEQgHAAgtASQguASgHAgQgHAIAeAIQAfgJAVAJQAKALgBAUQAAAVATgDQAWgHAUgKQARgKAUAHQAPAOgDAWQgDAVAvgeQAyghAMgPQAMgPgCgMQAAgOgEhNQgFhLgQhKQgPhKgigHQgDAAgdAVg");
	this.shape_4.setTransform(25,87.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2B435").s().p("AAoDHQADgWgPgOQgUgHgRAKQgUAKgWAHQgTADAAgVQABgUgKgLQgVgJgfAJQgegIAHgIQAHggAugSQAtgSAHAAQgCgEAJgQQAGgMAGgpIAIgxQghADgNgKQgNgJABgCQARACABgKQABgKgBgCQAJAGAEgHIAEgJQASATARgIQAQgIABgDQAOgsAdgVQAdgVADAAQAiAHAPBKQAQBKAFBLQAEBNAAAOQACAMgMAPQgMAPgyAhQgbARgLAAQgHAAABgIg");
	this.shape_5.setTransform(25,87.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1DFDC").s().p("AgPAmQgHAAgBgCQAVgNALgbQAOgeABgDQgBAJgJAUIgOAaQADAHAGgFQgPASgIAAIgBAAg");
	this.shape_6.setTransform(52.2,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1DFDC").s().p("AgWAZQACABAQgSQAOgPANgnIgKAgQgIAagFAIQgFASAFAIIAAABQgIAAgOgWg");
	this.shape_7.setTransform(47.6,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1DFDC").s().p("AglAEQgBgVACgIQACgCAXAFQAVAFAdAiIgcgRQgYgMgMADQgKAHgBANIgBAPIAAgWg");
	this.shape_8.setTransform(41.4,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1DFDC").s().p("AgOAsQgdgFgCgCIgCgPQAPgIAFgSQADgUAAgCIASgSIgHAKQgHAKAHAIQAFAIgIAKQgIAMAJANQAOALAWgEQAYgEADgBQgdAQgWAAIgLgBgAAwAdIAAAAIAAAAg");
	this.shape_9.setTransform(-39.3,34.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1DFDC").s().p("AgdAcIAwhCQAEgEAGAFQgFABgOAVIgQAcQgLASASACQgBACgMAFIgFABQgIAAgEgNg");
	this.shape_10.setTransform(-43.9,25.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2.6,1,1).p("AgvgkQACgDAeAFQAcAEAjAvQABADgOANQgPANgpgU");
	this.shape_11.setTransform(42,10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgVAaIgag+QACgDAeAFQAcAEAjAvQABADgOANQgGAFgKAAQgQAAgYgMg");
	this.shape_12.setTransform(42,10.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2.6,1,1).p("AgaAnQAcgPANgcQANgfgBgD");
	this.shape_13.setTransform(46.2,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AAbgmQABADgNAfQgNAcgcAPg");
	this.shape_14.setTransform(46.2,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2.6,1,1).p("AgcAsQAfgVAOgfQANgggBgD");
	this.shape_15.setTransform(50.7,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AAdgrQABADgNAgQgOAfgfAVg");
	this.shape_16.setTransform(50.7,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2.6,1,1).p("AAKgzIgxBKQgCAHAQARQAQARAxgx");
	this.shape_17.setTransform(-44.3,26.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AgZAvQgQgRACgHIAxhKIAeBCQgmAlgRAAQgGAAgEgFg");
	this.shape_18.setTransform(-44.3,26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2.6,1,1).p("ABOAIQgGAhgWAYQgLANgQAEQgIACgIgDQgHgEgHgIQgGgDgGgFQgOgJgLgNQgEgHgGgFQgGgDgGgEQgBgBgBAAQgJgNABgPQgEgdANgYQAIgIAKgGQAlgTAMAoQACADABAEQACgDARAAQARgBALAgQACgBANAFQAOAGgBASg");
	this.shape_19.setTransform(48.7,13.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AAHBRQgHgEgHgIIgMgIQgOgJgLgNQgEgHgGgFIgMgHIgCgBQgJgNABgPQgEgdANgYQAIgIAKgGQAlgTAMAoIADAHQACgDARAAQARgBALAgQACgBANAFQAOAGgBASQgGAhgWAYQgLANgQAEIgGABQgFAAgFgCg");
	this.shape_20.setTransform(48.7,13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDFDFD").s().p("AgRAAQACgPAPgCQAQACACAPQgCAQgQACQgPgCgCgQg");
	this.shape_21.setTransform(-21.8,-36);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFDFD").s().p("AgQAcQgTgOAOgaQASgZAUAKQATAPgOAZQgMASgNAAQgGAAgHgDg");
	this.shape_22.setTransform(-15.9,-46);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDFDFD").s().p("AgSAAQABgRARgBQASABABARQgBASgSABQgRgBgBgSg");
	this.shape_23.setTransform(10.5,-27.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDFDFD").s().p("AgRAeQgVgQAPgbQATgbAWALQAVAQgPAbQgOATgOAAQgGAAgHgDg");
	this.shape_24.setTransform(16.9,-38.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D3444").s().p("AgMAiQgXgMAKgfQAOgeAYAGQAXANgKAdQgLAagSAAIgJgBg");
	this.shape_25.setTransform(-18.9,-40.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0D3444").s().p("AgMAjQgYgNAKgfQAPgfAYAGQAYANgKAfQgMAagSAAIgJgBg");
	this.shape_26.setTransform(13.8,-32.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#165472").s().p("AgOBXQg8gSAJhQQAUhOA8ADQA8ASgJBPQgUBMg3AAIgFAAg");
	this.shape_27.setTransform(-18.6,-40.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#165472").s().p("AgPBeQhAgVAKhUQAVhVBBAEQA/ATgJBWQgVBRg8AAIgFAAg");
	this.shape_28.setTransform(14.1,-32.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D2D6D6").s().p("AAIAJQgIgtgfgZQAEABAbAbQAcAdAEAwQABAHgPAKQABgFgLgvg");
	this.shape_29.setTransform(-9,-65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D2D6D6").s().p("ABmBpQgJgGgBgCQgJh6gjgiQgjgigiANQgkAMgMAPQgQAQgNgCQgMgBgBgCQAPgYAjgXQAjgYAzAMQAzAXATBHQASBGgBAcQgBAPgFAAIgEgBg");
	this.shape_30.setTransform(23.8,-53.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AjrA5QhKgdg4hrQAHAMAcAiQAmAtBKAkQBLAlBtgcQCdgxBQgkQBQglAAgCQAGgDAngBQAngCgBAbQgLAZgjgQQgigQgFgEIhPAgIiWA6QhJAegLACQgIAEg8AJQgNACgPAAQgxAAg6gXg");
	this.shape_31.setTransform(-11.5,5.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgJgEQgLgZABgCIALAAQAGAPAJAWIANAaQgUgOgJgWg");
	this.shape_32.setTransform(-44,-20.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag9AXQAagLAtgPIA0gTIg/AbIgnASg");
	this.shape_33.setTransform(-21.2,17.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag6ArQgsgTARhOQADAGAzAsQAxAqBIACQgEACgzAKQgRADgRAAQgeAAgdgMg");
	this.shape_34.setTransform(-35.8,8.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CB8F22").s().p("AhtEFQg6gogOhBQgPhBAngqQgDgDgcguQgcgxgPg8QgPg9AkgoQACgEAbgCQAagBAaA8QAFACAnAFQAnAFAOgHQAEgNgDghQgCggAygGQAAAFAKAmQAKAnAWAGQAbgEA3gtQA3gtAVgZQAKgMAJgGQggArgaAwQgaAxgrAgQgfAKgagUQgagTgZgVQgbAlg1gMQg0gNgXANQgrAiAbBAQAbA+AOA1QABAhgJAiQgJAiANAfQAUAgAmAGQAmAGAigBQAWgDAtgPQAsgPAVAMQAHAGgBAOQAOADAOAAQhMAZgigDQgDADgyAIIgSABQgqAAgxgZg");
	this.shape_35.setTransform(-31.9,-7.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1.7,1,1).p("AGRCLQgkAQgjAAQgjAAgDgCQgJADhMAaQhMAZglAMQgkANhQAcQhSAbgmgDQgDAEgzAHQgzAIg+ghQg7gogPhCQgPhCAogrQgDgDgdgyQgcgvgQg+QgPg+AlgoQACgFAbgBQAbgBAaA9QAFACAoAFQAoAFAOgHQAEgNgCghQgDgiA2gGQgBAGAKAnQAKAmAXAHQAbgEA4guQA2guAXgZQArgwAaAgQAaAgAQA4QAPA4AMAYQAoAsA9ALQAvAPA+AhQA9AfAGA3QgDAwgjARg");
	this.shape_36.setTransform(-12.5,-8.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2B435").s().p("Ak1EOQg7gogPhCQgPhCAogrQgDgDgdgyQgcgvgQg+QgPg+AlgoQACgFAbgBQAbgBAaA9QAFACAoAFQAoAFAOgHQAEgNgCghQgDgiA2gGQgBAGAKAnQAKAmAXAHQAbgEA4guQA2guAXgZQArgwAaAgQAaAgAQA4QAPA4AMAYQAoAsA9ALQAvAPA+AhQA9AfAGA3QgDAwgjARQgkAQgjAAQgjAAgDgCIhVAdIhxAlQgkANhQAcQhSAbgmgDQgDAEgzAHIgUACQgrAAgygbg");
	this.shape_37.setTransform(-12.5,-8.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E1DFDC").s().p("AgkCnQgBABgNgXQgNgXgDg4QACg9AZhDQAahEAYgXQABgCAQgIQAQgHAXAGQg/AkgQBJQgQBHAQBBQAKAsAnAVQggAWgdAAIgMgBg");
	this.shape_38.setTransform(-23,-40.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2.6,1,1).p("AgViqQACgFAbgJQAegKAeAvQAfAuAFChQgCADgbAhQgcAigpAfQgmAfgogGQgCABgNgZQgOgagCg+QAChEAbhKQAahMAbgag");
	this.shape_39.setTransform(-19.8,-40.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEFEFE").s().p("AhIC6QgCABgNgZQgOgagCg+QAChEAbhKQAahMAbgaQACgFAbgJQAegKAeAvQAfAuAFChIgdAkQgcAigpAfQggAagiAAIgMgBg");
	this.shape_40.setTransform(-19.8,-40.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E1DFDC").s().p("AhCCrQgXgkgFg5QgFg4ABgGQAAgEAXg1QAWg2Atg1QAqg1BBABQhjAygeB2QgfB0AnBlQADAIAEAIQgigLgRgTg");
	this.shape_41.setTransform(9.4,-32.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2.6,1,1).p("ACVhkQAEBcggBeQghBhgnAkQgHAAg9gLQg/gLghggQgYglgFg7QgGg6ABgGQAAgFAag7QAag8Ayg3QAwg2BJANQBHAXAEBcg");
	this.shape_42.setTransform(13.8,-32.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEFEFE").s().p("AgTDQQg/gLghggQgYglgFg7QgGg6ABgGQAAgFAag7QAag8Ayg3QAwg2BJANQBHAXAEBcQAEBcggBeQghBhgnAkIAAAAQgKAAg6gLg");
	this.shape_43.setTransform(13.8,-32.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2.6,1,1).p("AgxgNQADADAhANQAfAQAggG");
	this.shape_44.setTransform(-50.4,34.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEFEFE").s().p("AgOADQgggNgDgDIBjAaQgJABgJAAQgYAAgWgLg");
	this.shape_45.setTransform(-50.4,34.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2.6,1,1).p("AgrgJQACACAdAJQAbALAdgE");
	this.shape_46.setTransform(-49.2,27.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEFEFE").s().p("AgMACQgdgJgCgCIBXASIgQABQgVAAgTgIg");
	this.shape_47.setTransform(-49.2,27.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E1DFDC").s().p("AgYBQQgOgOAEgQQAFgQACgCQgRgeANgNQANgOADAAIAGgcQAFgYAMgGQAQgDAOAGQgRAIgHAWQgKAdAgAIQgeAAgSAUQgOAiAqAQQgWACgNAPQAAAGACAFIgHgFg");
	this.shape_48.setTransform(-51.2,29.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2.6,1,1).p("AAthaQgXgUgcAEQgRAHgHAcQgHAbAAAEQgEAAgPARQgQARAUAgQgCABgFATQgFATAQAPQAcAYAiADQAUADAIgRQAEgVgIgTQAVgJAEgWQADgPgFgNQgBgCgGgJQgGgIgDACQAHgHAHgHQALgfgZgWg");
	this.shape_49.setTransform(-49.8,30.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEFEFE").s().p("AAOBrQgigDgcgYQgQgPAFgTQAFgTACgBQgUggAQgRQAPgRAEAAQAAgEAHgbQAHgcARgHQAcgEAXAUQAZAWgLAfIgOAOQADgCAGAIIAHALQAFANgDAPQgEAWgVAJQAIATgEAVQgHAOgQAAIgFAAg");
	this.shape_50.setTransform(-49.8,30.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E1DFDC").s().p("AhyBwQgTgYANg1QAEgBA8gfQA7gdBBgyQAlgcAWgfIgVAgQg0BMifBNQgEgBgGAVQgHAVAfAtIAAAAQgEAAgTgYg");
	this.shape_51.setTransform(22.2,33.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgrAHQAtgZAugOQAsgOACAhQgEgEgWgEQgegFhuA1IA6gIQAxgHAjAJIhBAGQg6AGgnAFIAxgfg");
	this.shape_52.setTransform(-1,57.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2.6,1,1).p("ACjg4QAAAEgZAPQgZAPgsgLQgHAJhTBHQhVBKhLAkQAAABACAQQABAQADAQQAAAFgNAIQgNAIgggwQgCgBgEgXQgFgYAJgiQAAgFAUgHQAQgCBMgqQBMgpBBhOQACgBAKgRQAJgQACgXQgBgXAAgXQAAgXAQgCQAkAGABAFQADgGAagPQAbgPASAwQACgDARAAQARgBALAgQACgBANAFQAOAGgBAUQgEAZgVAdQgWAegggPg");
	this.shape_53.setTransform(32.3,27.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEFEFE").s().p("AjpCzQgCgBgEgXQgFgYAJgiQAAgFAUgHQAQgCBMgqQBMgpBBhOIAMgSQAJgQACgXIgBguQAAgXAQgCQAkAGABAFQADgGAagPQAbgPASAwQACgDARAAQARgBALAgQACgBANAFQAOAGgBAUQgEAZgVAdQgWAegggPQAAAEgZAPQgZAPgsgLQgHAJhTBHQhVBKhLAkIACARQABAQADAQQAAAFgNAIIgEABQgOAAgbgpg");
	this.shape_54.setTransform(32.3,27.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E1DFDC").s().p("ABTLcQAAgvAEgHIAWgyQAUguAQg3QAQg2gLgbQgfglg0AHQg5ACg0gSQgwgQg7geQg7gegjguQgkguAWg/QAhhSAXgcQAWgbAMgMQALgMAAgfQgBgDAHgxQAGgwASg8QASg7AhgkQgBgDAAglQgBglAWgiQAVghA8AKQAAgFArgkQArgkBdgHQgCgDgLg5QgLg6ALhCQALhDA/ggIABAAQgJATABATQgTANgBAUQgRB8AJB8Qg5gHgtATQgtASgTA9QgCAEgRgLQgRgMgOADQg1A+ABBiQABBjgeBJIg/B3QggBBAUA/QAvBjBjApQBmApBzgGQgvBrgiBxQgPA4gEA6QgEAYAIAVIACACQAOANAPABQgNAMgQAEQgugDABgtg");
	this.shape_55.setTransform(-13.9,-28.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2.6,1,1).p("AGfAkQghBbhFBTQADABARAZQASAZgFAiQgIAWgwAWQgxAVgzAQQg0APgRAFQgRAGgiArQgiAsgSA9QgRA9AhA5QABAHgSA2QgRA2gwALQgvgDAAgvQABgvAEgHQACgDAUgwQAVgvAQg4QAQg3gLgbQgggmg0AHQg6ADg3gTQgxgQg8geQg8gfgkgvQgkgvAWhAQAihUAXgcQAXgcAMgLQALgMAAggQgBgDAHgxQAGgyASg8QASg9AjgkQgCgDAAgmQAAgmAVgiQAWghA/AKQAAgGAsgkQAsglBcgGQgCgEgLg7QgLg6ALhEQALhEBAggQACgCALACQAMABgEAXQgGAdgDAzQgDAyAAAGQACgFAUgjQAVgkAZgFQAVAGgDAwQgCAvgDAUQABgGAQgeQARgeAaAEQATAQgOBEQgOBEATAqQAEABA4AzQA4AyAwBaQAxBagQB1QABAIghBZg");
	this.shape_56.setTransform(3.7,-29.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEFEFE").s().p("AhfLoQABgvAEgHIAWgzQAVgvAQg4QAQg3gLgbQgggmg0AHQg6ADg3gTQgxgQg8geQg8gfgkgvQgkgvAWhAQAihUAXgcQAXgcAMgLQALgMAAggQgBgDAHgxQAGgyASg8QASg9AjgkQgCgDAAgmQAAgmAVgiQAWghA/AKQAAgGAsgkQAsglBcgGQgCgEgLg7QgLg6ALhEQALhEBAggQACgCALACQAMABgEAXQgGAdgDAzIgDA4QACgFAUgjQAVgkAZgFQAVAGgDAwQgCAvgDAUQABgGAQgeQARgeAaAEQATAQgOBEQgOBEATAqQAEABA4AzQA4AyAwBaQAxBagQB1QABAIghBZQghBbhFBTQADABARAZQASAZgFAiQgIAWgwAWQgxAVgzAQIhFAUQgRAGgiArQgiAsgSA9QgRA9AhA5QABAHgSA2QgRA2gwALQgvgDAAgvg");
	this.shape_57.setTransform(3.7,-29.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1D6277").s().p("AhAB9QAJgkAlhMIAohUQAAgFAHggQAIgfAPgMIANgDQgMAoABArQAAArghAkQgtBEAlBPQhJgYgEgGg");
	this.shape_58.setTransform(-10.4,53.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1.7,1,1).p("AA9itQgHAAg2ABQg2AAgXAHQgPALgIAjQgJAiAAAEQgBADgWAsQgVApgXAyQgWAygFAXQAEAEBFAXQBFAYBdgLQBegKBOhgQgDgFgUgpQgWgmgGgOQgKgWgWgIQgMgIgSgwQgTgvgLgGg");
	this.shape_59.setTransform(2.5,54.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#256E8A").s().p("AiBCdQhGgXgDgEQAEgXAXgyQAWgyAVgpIAXgvQABgEAIgiQAIgjAQgLQAWgHA2AAIA9gBQALAGATAvQASAwAMAIQAWAIAKAWIAbA0IAYAuQhOBgheAKQgdAEgZAAQg8AAgvgRg");
	this.shape_60.setTransform(2.5,54.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2.6,1,1).p("AD5BDQgJAChcgSQhcgRhAg1QgBgBgRgSQgQgSgRgTQgOgWgPgSQgOgSgeAcQgCgCgWgKQgVgKgTABQgRAGgGAcQgHAcAAAEQgEAAgQARQgPAQAUAgQgCACgFATQgGASARAQQAUAQAgAJQAfAJAQgdQABADAdAGQAdAHAtgRQAIAEBdAdQBfAdBMABQACAAAJgRQAKgRgKgag");
	this.shape_61.setTransform(-30.9,32.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEFEFE").s().p("ABDBhQhdgdgIgEQgtARgdgHQgdgGgBgDQgQAdgfgJQgggJgUgQQgRgQAGgSQAFgTACgCQgUggAPgQQAQgRAEAAQAAgEAHgcQAGgcARgGQATgBAVAKQAWAKACACQAegcAOASQAPASAOAWIAhAlIASATQBAA1BcARQBcASAJgCQAKAagKARQgJARgCAAQhMgBhfgdg");
	this.shape_62.setTransform(-30.9,32.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E1DFDC").s().p("AhhA7QgngsgHguQgHgvACgEIAsgEQArgDA7gHQgnAfgPAjQgQAiAkAaQBVA8BkgaQguAZhEAIIgXAAQhLAAgigmg");
	this.shape_63.setTransform(-1.6,74.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2.6,1,1).p("AC+iVQgSAFgbAmQgYAahWAQQhVAQhQAHQhQAHgGAAQgCAEAHAwQAHAxApAvQAqAuBlgHQCXgUA0hcQA0hZgbhpQAAgCgSAGg");
	this.shape_64.setTransform(4.8,70);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FEFEFE").s().p("AijByQgpgvgHgxQgHgwACgEIBWgHQBQgHBVgQQBWgQAYgaQAbgmASgFQASgGAAACQAbBpg0BZQg0BciXAUIgYABQhSAAglgog");
	this.shape_65.setTransform(4.8,70);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB8F22").s().p("AiJBtQgXgHAXgbIAQgRQAIgKgIgKQgNgGgZACQgZACADgRQAHgMATgDQATgCAHgMQAEgNgQgDQgPgCgagQQgRgRAtgDQAsgDAIABQBPgRBGAEQBIADAFACQAEgcAZgGQAagFADABIAFABQgdADgLAaQgKAagFAcQg3gjhBAEQgSgBggACQgfACgRALQgOAKAKAJQAKAIANAGQghgEgIASQgCAUAcABQAcAAAEAbQgWAAgWAMQgWAMAQAYQAFAHAIAIIgQABQgSAAgQgFg");
	this.shape_66.setTransform(-30.9,87.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1.7,1,1).p("AC8gbQgjgVgHgBQgCgDgCgRQgDgSAagCQACgCACgMQADgNgNgDQgEgBgaAGQgZAGgEAdQgFgChJgDQhHgDhPARQgIgBgtADQgsADARASQAaARAPACQAQADgFAOQgHAMgSADQgTADgHANQgEASAZgCQAagDANAHQAIAKgJALQgIALgHAHQgZAgAdAGQAeAFAZgFQA7gKA4gNQBBgOA/gVQARgFAXgIQAWgIALgPQALgdgjgVg");
	this.shape_67.setTransform(-28.6,87.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F2B435").s().p("AifB1QgdgGAZggIAPgSQAJgLgIgKQgNgHgaADQgZACAEgSQAHgNATgDQASgDAHgMQAFgOgQgDQgPgCgagRQgRgSAsgDQAtgDAIABQBPgRBHADQBJADAFACQAEgdAZgGQAagGAEABQANADgDANQgCAMgCACQgaACADASQACARACADQAHABAjAVQAjAVgLAdQgLAPgWAIIgoANQg/AVhBAOQg4ANg7AKQgMADgNAAQgPAAgPgDg");
	this.shape_68.setTransform(-28.6,87.9);

	this.addChild(this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.6,-109.9,125.4,219.6);


(lib.duck_win2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB8F22").s().p("AAPC/QhCgmhEgqIhag2QgcgRgQgcQgPgbAMgVQARgUApgQQApgQAFgBQACgDAJgkQAKgkgOgjQABABAIgGQAIgGAAgTQACABASgDQAGArAAApQgBAogdAUIguAhQgbASAMAeQAQAjAoAJQAoAKAvAFQAPAJAQARQAPAQANAJQAxAIBAgIQACgxAiACIBCAHQgNhCAvguQABAngLAdQgFATANAWQANAXgOAPQgTAOgdAJQgdAJgQARQgMAVgJAeQgKAegaADQgWgDhEgmg");
	this.shape.setTransform(19.9,84.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2.1,1,1).p("ACmCkQgNAVgJAfQgKAegaADQgXgChFgoQhEgnhFgrQhGgqgWgNQgdgRgQgdQgPgbALgWQASgVAqgQQAqgRAFgBQACgDAKgkQAJglgOgkQACAAAIgGQAIgGAAgTQACABAQgCQAQgCAGgWQADAEAIAxQAJAxgSAxQAEABApAGQAoAGAcAEQA4ALA9ADQAggBAngCQAogDAIANQAFAQgCAcQgDAbgIAUQgEAUANAXQANAXgOAQQgTAOgeAJQgeAJgQASg");
	this.shape_1.setTransform(20.4,83.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B435").s().p("AAQDPQhEgnhFgrIhcg3QgdgRgQgdQgPgbALgWQASgVAqgQQAqgRAFgBQACgDAKgkQAJglgOgkQACAAAIgGQAIgGAAgTQACABAQgCQAQgCAGgWQADAEAIAxQAJAxgSAxIAtAHIBEAKQA4ALA9ADIBHgDQAogDAIANQAFAQgCAcQgDAbgIAUQgEAUANAXQANAXgOAQQgTAOgeAJQgeAJgQASQgNAVgJAfQgKAegaADQgXgChFgog");
	this.shape_2.setTransform(20.4,83.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAeQhQgGgvg5QAJAIAzAbQA7AiBkgEQgEACgPAAQgXAAgygEg");
	this.shape_3.setTransform(-14.8,-11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLgOQACguACgFQACAPAHgBQAJgBABgBQgKAhAEAoQAEAqACAEQgZgiACgug");
	this.shape_4.setTransform(-36.5,-39.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D6D6").s().p("AARAHQgRgPgigGQACgGAYgFQAWgGAVA5QgCgDgQgQg");
	this.shape_5.setTransform(6.6,-78.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D6D6").s().p("AArBGQgBgHgQg0QgPgzgTgMQgVgCgOASQgOASgBADQgDgSAMgTQAMgTAegBQAdAIATA6QATA4AAARQgHAGgEAAQgEAAgCgDg");
	this.shape_6.setTransform(37.3,-65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AADAAQAXgMADABQgbgOgkANQglAMgEACQBHhCAmAXQAoAWACATQAAALgGgFQgGgFAAgBQgrgDgbAXQgaAWgDAGQAQgmAWgKg");
	this.shape_7.setTransform(-6.1,-54.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAGAnQADgvgrg6QgCABgIAAQgIAAAAgQQAEgGApAFQAnAEAVBOQgBgBgRgSQgRgSgVgFQADABAMAlQAMAggXA5QACgLADgjg");
	this.shape_8.setTransform(29.9,-37.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F08080").s().p("AgpgaQAOAIASgHQAPgIANgCIAegBIARgBQgsAUgpAaIguAdQARg+AHgCg");
	this.shape_9.setTransform(-6.7,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D5912").s().p("AkqA1QgPgnA7hEQADgHgOgVIAGABQAFAFBBAUQBCATBKgRQAxgQBLgRQBNgQBDgCQBCgCAQAdQABACgFAIQgFAHgVgQQAIgFgwAZQhZgUhSAdQhRAdhUATQgaAAgfgOQgfgPgcALQgfANgLAjQgKAlAZAnQgjgPgPgmg");
	this.shape_10.setTransform(0.3,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.9,1,1).p("AkDheQAFAFBCAUQBBAUBKgTQAxgRBMgRQBNgSBCgCQBDgCAQAdQABADgFAHQgFAIgVgQQAIgGg0AcQgWAQhBA3QhCA4hbApQhdAqhpgaQgEAAgigPQgigQgNgoQgNgnA7hFQACgIgOgV");
	this.shape_11.setTransform(0.3,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AE730F").s().p("AjWBxQgEAAgigPQgigQgNgoQgNgnA7hFQACgIgOgVIAGABQAFAFBCAUQBBAUBKgTQAxgRBMgRQBNgSBCgCQBDgCAQAdQABADgFAHQgFAIgVgQQAIgGg0AcQgWAQhBA3QhCA4hbApQg5Aag+AAQgnAAgogKg");
	this.shape_12.setTransform(0.3,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CB8F22").s().p("AkTgwQAMhbAagGQAdAEAHAVQAHAVgBADQAeAgAmAFQAmAGAEgCQgMg2AfgOQAggOAGACQgbAyARAVQAQAVAFAAQAugBBUgtQBTgtApAAQAgAMAEAaQAEAagCAEIADANQgWgGgUgNQgUgNgWAAQgcAOgeAZQgOACgPgHQgQgHgNACQgoAOgiAQQgfAQglgFQAHgLgFgJQgEgJABgMQgJATgKASQgLARgcgPIgvghQgWgQgJADQgkAsgCA0QgDA2AIA7Qg1hpAMhZg");
	this.shape_13.setTransform(-16.9,-35.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1.7,1,1).p("ABzlTQgpgBhSAwQhVAwgwABQgEABgRgWQgQgXAbgzQgGgCggAOQggAPAMA5QgEABgmgFQgmgGgeghQABgDgHgWQgHgWgdgDQgXAEgOBUQgOBTAkBmQAlBlB/BAQgLABgVAiQgVAigFALQgXA6AYAuQAYAuA6ARQCQAgCDhCQCHhEAxgtQAygsATgIQAZgBAVgCQAUgCgGg2QgIg3gfgMQgegNgmgRQgmgUgog0Qgpg0gWiAQACgEgEgbQgEgcgggLg");
	this.shape_14.setTransform(-4.4,-16.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2B435").s().p("Ai6FSQg7gRgXguQgYguAWg6QAGgLAUgiQAVgiALgBQh/hAgkhlQglhmAOhTQAOhUAXgEQAdADAHAWQAHAWgBADQAeAhAnAGQAlAFAEgBQgMg5AggPQAggOAGACQgbAzAQAXQARAWAEgBQAwgBBVgwQBSgwApABQAgALAEAcQAEAbgBAEQAVCAApA0QApA0AlAUQAmARAeANQAfAMAIA3QAGA2gUACIguADQgTAIgyAsQgxAtiHBEQhYAshdAAQguAAgvgKg");
	this.shape_15.setTransform(-4.4,-16.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.6,1,1).p("AFll7QgTAigXAmQgYAnAGAZQARAZA0BXQA0BWgOCHQgNCJi0CzQADACAFAeQAFAdgfAiQgfAhhoAMQAJgBAkgjQAlgigtgwQgqgchkgWQhlgVhggyQhfgxgYhxQgGAAgagYQgZgZAgguQAAgDANgvQAOgxAig6QAhg5A8gcQgGgEACggQACghBTgNQADgHA9gmQA9gnBWAIQAAgEAPgyQAPgxAcgvQAcgwAmADIgUCnQABgDATglQATgkAggiQAhghAoAFQgEAHgcA/QgcA/gHArQADgHAogqQAogqAjAHQATAMgTAhg");
	this.shape_16.setTransform(19.1,-54);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("ABnH+QAlgigtgwQgqgchkgWQhlgVhggyQhfgxgYhxQgGAAgagYQgZgZAgguQAAgDANgvQAOgxAig6QAhg5A8gcQgGgEACggQACghBTgNQADgHA9gmQA9gnBWAIQAAgEAPgyQAPgxAcgvQAcgwAmADIgUCnQABgDATglQATgkAggiQAhghAoAFQgEAHgcA/QgcA/gHArQADgHAogqQAogqAjAHQATAMgTAhIgqBIQgYAnAGAZQARAZA0BXQA0BWgOCHQgNCJi0CzQADACAFAeQAFAdgfAiQgfAhhoAMQAJgBAkgjg");
	this.shape_17.setTransform(19.1,-54);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E1DFDC").s().p("AgPAmQgIAAAAgCQAVgNAMgbQANgeAAgDQgBAJgJAUIgMAbQACAGAGgFQgPASgIAAIgBAAg");
	this.shape_18.setTransform(52.9,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E1DFDC").s().p("AgWAZQABABARgSQAOgPANgnIgJAgQgJAagFAIQgFASAFAIIAAABQgIAAgOgWg");
	this.shape_19.setTransform(48.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E1DFDC").s().p("AglAEQgBgVACgIQACgCAXAFQAVAFAdAiIgcgRQgYgMgMADQgKAHgBANIgBAPIAAgWg");
	this.shape_20.setTransform(42.2,-3.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E1DFDC").s().p("AgQApQgdgKgBgCIAAgPQARgGAHgRQAIgTAAgCIARgOIgFAIQgJAIAGAKQAEAJgLAJQgKAJAHAOQALAOAYAAQAYAAADgBQgXAJgTAAQgKAAgLgEg");
	this.shape_21.setTransform(-43.6,13.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1DFDC").s().p("AgiAWIA7g5QAEgDAGAGQgGAAgSATIgUAYQgOAQAUAFQgCACgOACIgEABQgJAAgCgPg");
	this.shape_22.setTransform(-46.1,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2.6,1,1).p("AgvgkQACgDAeAFQAcAEAjAvQABADgOANQgPANgpgU");
	this.shape_23.setTransform(42.7,-3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AgVAaIgag+QACgDAeAFQAcAEAjAvQABADgOANQgGAFgKAAQgQAAgYgMg");
	this.shape_24.setTransform(42.7,-3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2.6,1,1).p("AAbgmQABADgNAfQgNAcgcAP");
	this.shape_25.setTransform(46.9,-1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AAbgmQABADgNAfQgNAcgcAPg");
	this.shape_26.setTransform(46.9,-1.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2.6,1,1).p("AAdgrQABADgNAhQgOAegfAV");
	this.shape_27.setTransform(51.4,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AAdgrQABADgNAhQgOAegfAVg");
	this.shape_28.setTransform(51.4,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2.6,1,1).p("AAXgwIg+BAQgDAGANAUQANAUA5go");
	this.shape_29.setTransform(-47,4.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AgdAqQgNgUADgGIA+hAIASBGQgoAbgRAAQgJAAgEgHg");
	this.shape_30.setTransform(-47,4.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2.6,1,1).p("ABOAIQgGAhgWAYQgLANgQAEQgIACgIgDQgHgEgHgIQgGgDgGgFQgOgJgLgNQgEgHgGgFQgGgDgGgEQgBgBgBgBQgJgMABgPQgEgdANgYQAIgIAKgGQAlgTAMAoQACADABAEQACgDARAAQARgBALAgQACgBANAFQAOAGgBASg");
	this.shape_31.setTransform(49.4,-0.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AAHBRQgHgEgHgIIgMgIQgOgJgLgNQgEgHgGgFIgMgHIgCgCQgJgMABgPQgEgdANgYQAIgIAKgGQAlgTAMAoIADAHQACgDARAAQARgBALAgQACgBANAFQAOAGgBASQgGAhgWAYQgLANgQAEIgGABQgFAAgFgCg");
	this.shape_32.setTransform(49.4,-0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2.6,1,1).p("AgugVQACADAeATQAcAVAhAA");
	this.shape_33.setTransform(-53.9,11.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("AgOABQgegTgCgDIBdArIgCAAQggAAgbgVg");
	this.shape_34.setTransform(-53.9,11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2.6,1,1).p("AgogQQABACAbAOQAYAPAdAC");
	this.shape_35.setTransform(-51.6,4.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AgMAAQgbgNgBgCIBRAfQgdgBgYgPg");
	this.shape_36.setTransform(-51.6,4.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1DFDC").s().p("AgoBLQgLgQAHgQQAHgPACgBQgMgeAQgNQAPgMADAAIAKgaQAIgXAPgDQAPAAANAIQgSAFgKAUQgPAcAeAMQgegFgVARQgTAfAmAXQgWgCgPANQgBAGABAFIgGgGg");
	this.shape_37.setTransform(-53.7,6.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2.6,1,1).p("AA7hTQgUgXgegBQgQAEgLAaQgMAaAAAEQgEgBgSAOQgSAPAOAiQgDACgIARQgIARANATQAYAbAiAKQASAFAKgPQAJgTgGgVQAWgFAJgVQAFgOgCgPQgBgCgFgJQgEgJgEABQAJgEAIgHQAQgcgVgbg");
	this.shape_38.setTransform(-52.7,7.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AgEBrQgigKgYgbQgNgTAIgRQAIgRADgCQgOgiASgPQASgOAEABQAAgEAMgaQALgaAQgEQAeABAUAXQAVAbgQAcQgIAHgJAEQAEgBAEAJIAGALQACAPgFAOQgJAVgWAFQAGAVgJATQgHALgNAAIgIgBg");
	this.shape_39.setTransform(-52.7,7.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E1DFDC").s().p("AiHBXQgPgbAWgzQAFABBAgTQA/gUBIgmQAogVAagZIgYAZQg/BDirAvQgDgBgKAUQgKATAXAyQgEAAgPgbg");
	this.shape_40.setTransform(18,23.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AACAYQg6gEgogCQAEgCAzgRQAwgUAvgGQAugHgEAhQgDgEgVgHQgcgKh1AhQAFgBA0ACQAyACAhAPIhBgFg");
	this.shape_41.setTransform(-9.4,42.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2.6,1,1).p("ACQgIQgbAJgqgQQgIAHheA4QhgA7hQAWQAAABgCAQQgBARAAAPQAAAFgPAGQgOAFgYg0QgBgBgBgYQAAgYAOggQABgFAVgDQAQABBSgeQBSgbBOhBQABgBANgPQANgPAFgVQACgXAFgXQAEgXAQABQAiAMABAFQADgFAdgLQAcgKAKAyQACgCASACQARADAFAhQACgBAMAIQAMAHgEAUQgHAYgbAZQgaAagdgUQgBADgbALg");
	this.shape_42.setTransform(28.5,17.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEFEFE").s().p("AkDCOQgBgBgBgYQAAgYAOggQABgFAVgDQAQABBSgeQBSgbBOhBIAOgQQANgPAFgVQACgXAFgXQAEgXAQABQAiAMABAFQADgFAdgLQAcgKAKAyQACgCASACQARADAFAhQACgBAMAIQAMAHgEAUQgHAYgbAZQgaAagdgUQgBADgbALQgbAJgqgQQgIAHheA4QhgA7hQAWIgCARQgBARAAAPQAAAFgPAGIgDAAQgOAAgVgvg");
	this.shape_43.setTransform(28.5,17.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E1DFDC").s().p("AhdCdQAJgtAFgGQAIgJAxhSQAvhPgFgvQgIgWgVgKQgXgJgWgCQgagDgYgIQAdgcAjgUQBEAeBMAIQhABjgzBnQgYA1gNA4QgJAXAFAWIACADQALAOAPAEQgPAKgRACQgsgLAHgug");
	this.shape_44.setTransform(-2.1,13.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2.6,1,1).p("AA7jPQgxgghBAQQg4AYgtAsQAXAHAZAEQAXACAXAJQAYAKAJAXQAEAvgyBRQgyBTgIAJQgFAGgJAuQgIAvAuALQAygDAbgzQAbgyABgHQgYg+Acg5QAZg3ApglQAqglARgDQAJgBAXgCQgxgngxghg");
	this.shape_45.setTransform(2.9,12.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEFEFE").s().p("AiTCsQAJguAFgGQAIgJAyhTQAyhRgFgvQgIgXgXgKQgYgJgWgCQgZgEgYgHQAsgsA5gYQBBgQAxAgQAxAhAwAnIgfADQgRADgqAlQgpAlgaA3QgbA5AXA+QAAAHgbAyQgaAzgzADQgugLAIgvg");
	this.shape_46.setTransform(2.9,12.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D6277").s().p("AhXBqQAPgjAxhFIA2hLQABgEANgeQANgfAQgIQAEgBAKAAQgTAlgHArQgGAqgnAeQg4A7AZBUQhGgkgDgGg");
	this.shape_47.setTransform(-17.6,38.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1.7,1,1).p("AC/AyQgNgrgFgNQgGgXgUgMQgKgKgLgyQgKgygKgHQgHgCg2gIQg1gJgXADQgRAIgOAhQgOAgAAAFQgIAIg0BKQg1BIgQAlQACAFBBAjQBBAiBcAGQBeAGBdhSQgBgFgOgsg");
	this.shape_48.setTransform(-6.9,39.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#256E8A").s().p("AATCvQhdgGhAgiQhAgjgDgFQAQglA0hIIA9hSQAAgFAOggQAOghARgIQAXgDA0AJIA9AKQALAHAKAyQALAyAKAKQAUAMAGAXIASA4IAPAxQhXBNhYAAIgMgBg");
	this.shape_49.setTransform(-6.9,39.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2.6,1,1).p("ADzBpQgDAAgugPQgugPg4gdQg4gdgigpQgBgCgLgUQgNgUgNgWQgLgYgLgUQgLgUgiAWQgCgCgUgOQgTgNgTgCQgRADgMAaQgLAbgBADQgEAAgSAOQgSAOAOAkQgCACgIARQgJASAOAQQARAUAeAOQAdAOAVgaQAAADAcALQAbALAvgJQAIAGBWAsQBZAtBLAOQACAAAMgPQAMgPgFgbg");
	this.shape_50.setTransform(-35.3,13.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEFEFE").s().p("AA6BnQhWgsgIgGQgvAJgbgLQgcgLAAgDQgVAagdgOQgegOgRgUQgOgQAJgSQAIgRACgCQgOgkASgOQASgOAEAAQABgDALgbQAMgaARgDQATACATANQAUAOACACQAigWALAUQALAUALAYIAaAqIAMAWQAiApA4AdQA4AdAuAPQAuAPADAAQAFAbgMAPQgMAPgCAAQhLgOhZgtg");
	this.shape_51.setTransform(-35.3,13.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E1DFDC").s().p("AATBoQhdgKgfgyQgggwACgwQACgwACgEIAsAEQAqAEA6ADQgpAZgWAgQgVAgAeAeQBKBKBngJQgoAOg0AAIgZgBg");
	this.shape_52.setTransform(-12.8,59.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2.6,1,1).p("ADKiCQgSACghAhQgcAWhYAAQhWABhQgGQhRgHgFgBQgDAEgBAyQgCAwAhA1QAhA1BlAKQCZAGBChSQBDhPgJhsQAAgCgTADg");
	this.shape_53.setTransform(-4.6,57.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEFEFE").s().p("Ag4CEQhkgKgig1Qghg1ACgwQABgyADgEIBWAIQBQAGBWgBQBYAAAcgWQAhghASgCQATgDAAACQAJBshCBPQg/BNiJAAIgUgBg");
	this.shape_54.setTransform(-4.6,57.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CB8F22").s().p("AA5DCQgHgbgKgKQgOgEgYAIQgVAHgXgDQgTgIADghQACgggGgSQgKgMgYABQgYABgYgEQgUgHAHgTQAGgTADgDQAhhLA7gkQA6gkAxgJQAxgKADACQgRgkANgPQANgOAYgCQglA8A8ApQAEACgMAJQgMAIgIABQhBgQg9AfQg7AfgfA9QAsAAARATQAJAJgFAWIgJAqQAnAPAugIQgDA9AmAzIAAAAQgbAAgHgag");
	this.shape_55.setTransform(-40.8,66.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1.7,1,1).p("ACijkQgDgBgcgBQgcgBgUAPQgUAOAUArQgDgCg1AKQgyAKg/AlQhAAlgjBPQgDADgHAUQgGAUAVAHQAaAEAZgBQAagBAKANQAHATgCAiQgDAiAVAIQAXAEAagIQAXgHAPAEQALAKAIAcQAHAcAdAAQA4gQgBg9QAIg8ALg8QARg6Aag3QAIgVAAgWQAAgWgYgIQgWgBgTgLQgNgKAGgOQAGgHAHADQAHAEAHgBQAYgOgOgZg");
	this.shape_56.setTransform(-39.2,67.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2B435").s().p("AAkDLQgIgcgLgKQgPgEgXAHQgaAIgXgEQgVgIADgiQACgigHgTQgKgNgaABQgZABgagEQgVgHAGgUQAHgUADgDQAjhPBAglQA/glAygKQA1gKADACQgUgrAUgOQAUgPAcABQAcABADABQAOAZgYAOQgHABgHgEQgHgDgGAHQgGAOANAKQATALAWABQAYAIAAAWQAAAWgIAVQgaA3gRA6QgLA8gIA8QABA9g4AQQgdAAgHgcg");
	this.shape_57.setTransform(-39.2,67.3);

	this.addChild(this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.1,-109.9,122.2,219.8);


(lib.duck_win1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB8F22").s().p("AjBDoQgHgDgHgFQgpgrAegwQAdgwAIgFQAvhHAShTQAJgiADgkQgFgrAWgkQAQgVAaAGQAWAPALAYQAnAdA0gJIArgFQAXgDARAMQAUAVgHAdQgGAeANAaQALAJAQgCQAQgDAHAQIAAABIgmAJQgRAEgFgNQgzhJg4gPQg3gOgrA2QgmA6gaBLQgaBNhLAvIAAAgQAcAcAlATIgMAAQgaAAgWgIg");
	this.shape.setTransform(38.4,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.7,1,1).p("ACli2QgRgNgYADQgYADgUADQg1AJgngeQgMgZgXgQQgagGgQAVQgXAmAGAtQgDAlgKAkQgSBWgwBLQgIAFgeAyQgfAyArAtQAGAFAIADQA2ATBAgVQBAgWAtgcQBJgoA4g9QAcgeAWgjQAKgQALgTQAKgVgEgTQgHgRgQADQgRADgKgKQgOgbAHgfQAGgfgUgVg");
	this.shape_1.setTransform(38,51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B435").s().p("AjFDyQgIgDgGgFQgrgtAfgyQAegyAIgFQAwhLAShWQAKgkADglQgGgtAXgmQAQgVAaAGQAXAQAMAZQAnAeA1gJIAsgGQAYgDARANQAUAVgGAfQgHAfAOAbQAKAKARgDQAQgDAHARQAEATgKAVQgLATgKAQQgWAjgcAeQg4A9hJAoQgtAchAAWQgiALgfAAQgcAAgZgJg");
	this.shape_2.setTransform(38,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.7,1,1).p("AAuAVQgQgTgagCQgYgCgcAuQgBACgHAGQgHAGgGgOQgCACgJAAQgIAAAKgXQAAgEATgcQATgfAlgLQAjgLA1A1IgVA1QgBgDgRgUg");
	this.shape_3.setTransform(23,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2B435").s().p("AhFAsQgCACgJAAQgIAAAKgXQAAgEATgcQATgfAlgLQAjgLA1A1IgVA1QgBgDgRgUQgQgTgagCQgYgCgcAuQgBACgHAGQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgFAAgEgKg");
	this.shape_4.setTransform(23,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhxgUQAKAGA4ASQA/AXBigVQgIAGhTAIIgXABQhBAAgwgpg");
	this.shape_5.setTransform(-21,-5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPgLQgGguABgFQAEAOAJgDQAHgCABgBQgDAiAKAnQALApACADQgegdgGgtg");
	this.shape_6.setTransform(-47,-30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D6D6").s().p("AASAHQgSgLglgBQABgGAXgJQAVgKAeA0QgDgDgRgMg");
	this.shape_7.setTransform(-11.2,-76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2D6D6").s().p("AAzBCQgCgHgYgxQgYgvgVgJQgVABgLAVQgLAUAAADQgGgRAIgVQAJgVAegGQAeADAdA2QAcA0ACAQQgGAIgFAAQgDAAgCgBg");
	this.shape_8.setTransform(21.6,-67.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AACgCQAVgPADAAQgbgKgjAUQgjARgDAEQA6hNAqAPQArAQAFATQACALgGgDIgIgGQgrADgWAbQgWAcgCAFQAKgoATgOg");
	this.shape_9.setTransform(-19.7,-49.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAkQgFgvg0gxQgBABgIABQgJABgCgPQADgGApgDQAngDAiBKQgBgCgUgPQgUgOgWgBQAEAAARAiQASAegNA8QABgMgEgig");
	this.shape_10.setTransform(17.9,-39.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F08080").s().p("AgtgTQAPAHAQgLQAOgKANgFIAdgHIARgDQgoAcgkAgIgpAlQAGhBAHgDg");
	this.shape_11.setTransform(-11.3,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8D5912").s().p("AkZBmQgVgkAvhMQABgIgSgSIAHAAQAFAEBEAIQBFAIBFgeQAugYBHgdQBKgdBBgNQBBgNAVAZQABADgEAIQgEAIgXgMQAHgHgsAhQhbgFhMArQhKAqhPAhQgbADgggJQghgJgaAPQgdASgEAmQgEAnAfAiQglgJgVgjg");
	this.shape_12.setTransform(-4.4,3.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.9,1,1).p("AkJgpQAFADBEAJQBFAJBFgfQAugZBHgfQBKgeBBgNQBBgNAVAaQABACgEAJQgDAIgYgNQAHgHgvAlQgSAUg3BCQg3BAhVA5QhTA5hsgIQgEABgkgKQgkgKgTglQgUgkAuhOQACgIgTgS");
	this.shape_13.setTransform(-4.5,4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AE730F").s().p("Ai6CbQgEABgkgKQgkgKgTglQgUgkAuhOQACgIgTgSIAHAAQAFADBEAJQBFAJBFgfQAugZBHgfQBKgeBBgNQBBgNAVAaQABACgEAJQgDAIgYgNQAHgHgvAlQgSAUg3BCQg3BAhVA5QhIAyhbAAIgcgBg");
	this.shape_14.setTransform(-4.5,4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CB8F22").s().p("AkPgGQgEhcAZgKQAdgBAKATQALAUgBADQAjAaAngBQAmgBADgCQgVgzAdgTQAdgTAGABQgSA1AUASQAUASAEgBQAugIBLg7QBLg7AngGQAiAGAIAZQAJAZgBAEIAEAMQgWgCgWgJQgWgJgWADQgZASgZAeQgNAFgRgFQgQgEgNAEQglAUgfAWQgcAVglACQAFgMgGgIQgGgJgBgLQgFAUgIATQgIARgegIIgzgZQgZgMgIAFQgcAvAHA2QAGA2ASA4QhGhfgDhZg");
	this.shape_15.setTransform(-27.9,-28.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1.7,1,1).p("AGkAFQgSgygggHQgggHgogNQgpgNgwgtQgxgsgrh6QABgEgJgaQgJgbghgGQgoAGhJA+QhLA+gwAJQgEABgUgTQgUgTASg4QgGgBgdAUQgdAUAVA2QgDACgnABQgmABgkgbQABgEgLgUQgKgVgdACQgXAIABBVQAABUA2BfQA1BdCIAqQgKADgPAlQgQAlgCALQgNA9AfAqQAfApA8AHQCSAHB4hXQB5haApg0QApg1ASgKQAZgGATgFQAUgGgPg1g");
	this.shape_16.setTransform(-12.8,-11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2B435").s().p("Ah0FoQg8gHgfgpQgfgqANg9QACgLAQglQAPglAKgDQiIgqg1hdQg2hfAAhUQgBhVAXgIQAdgCAKAVQALAUgBAEQAkAbAmgBQAngBADgCQgVg2AdgUQAdgUAGABQgSA4AUATQAUATAEgBQAwgJBLg+QBJg+AogGQAhAGAJAbQAJAagBAEQArB6AxAsQAwAtApANQAoANAgAHQAgAHASAyQAPA1gUAGIgsALQgSAKgpA1QgpA0h5BaQhvBQiEAAIgXAAg");
	this.shape_17.setTransform(-12.8,-11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2.6,1,1).p("AEDl3QggBBAKApQAVAWBCBMQBCBMAJCIQAKCKiTDOQADACAKAcQAKAcgYAmQgZAmhlAeQAJgDAegoQAegog1goQgugVhogEQhlgDhnghQhmghgqhrQgGABgegUQgdgUAYgzQgBgDAFgyQAFgzAYg9QAXg+A3gmQgHgDgEggQgDggBPgbQACgHA2gxQA1gwBYgHQAAgDAGg0QAHgzARg0QAUgzAmgEIAICoQAAgDANgnQANgoAagmQAagmApgCQgCAHgSBDQgRBDAAAsQADgIAggwQAggxAkACQAZAQggBDg");
	this.shape_18.setTransform(6.6,-55.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("ACuH6QAegog1goQgugVhogEQhlgEhnggQhmghgqhrQgGABgegUQgdgUAYgzQgBgDAFgzQAFgyAYg8QAXg/A3glQgHgEgEgfQgDghBPgbQACgHA2gxQA1gwBYgGQAAgEAGg0QAHgzARg0QAUgzAmgEIAICpQAAgDANgoQANgnAagnQAagnApgBIgUBKQgRBDAAAsQADgIAggwQAggxAkACQAZAQggBCQggBDAKAoQAVAWBCBMQBCBMAJCIQAKCKiTDOQADACAKAbQAKAdgYAmQgZAmhlAeQAJgDAegog");
	this.shape_19.setTransform(6.6,-55.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E1DFDC").s().p("AgPAmQgHAAgBgCQAVgNALgbQAOgeABgDQgCAJgIAUIgOAbQADAGAGgFQgPASgIAAIgBAAg");
	this.shape_20.setTransform(46.8,5.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E1DFDC").s().p("AgWAZQACABAQgSQAOgPANgnIgKAgQgIAagFAIQgFASAFAIIAAABQgIAAgOgWg");
	this.shape_21.setTransform(42.2,3.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1DFDC").s().p("AglAEQgBgVACgIQACgCAXAFQAVAFAdAiIgcgRQgYgMgMADQgKAHgBANIgBAPIAAgWg");
	this.shape_22.setTransform(36,-0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E1DFDC").s().p("AgOAsQgdgFgCgCIgCgPQAPgIAFgSQADgUAAgCIASgSIgHAKQgHAKAHAIQAFAIgIAKQgIAMAJANQAOALAWgEQAYgEADgBQgdAQgWAAIgLgBgAAwAdIAAAAIAAAAg");
	this.shape_23.setTransform(-44.7,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1DFDC").s().p("AgdAcIAwhCQAEgEAGAFQgFABgOAVIgQAcQgLASASACQgBACgMAFIgFABQgIAAgEgNg");
	this.shape_24.setTransform(-49.3,14.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2.6,1,1).p("AgvgkQACgDAeAFQAcAEAjAvQABADgOANQgPANgpgU");
	this.shape_25.setTransform(36.6,-0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AgVAaIgag+QACgDAeAFQAcAEAjAvQABADgOANQgGAFgKAAQgQAAgYgMg");
	this.shape_26.setTransform(36.6,-0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2.6,1,1).p("AAbgmQABADgNAfQgNAcgcAP");
	this.shape_27.setTransform(40.7,1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AAbgmQABADgNAfQgNAcgcAPg");
	this.shape_28.setTransform(40.7,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2.6,1,1).p("AAdgrQABADgNAhQgOAegfAV");
	this.shape_29.setTransform(45.3,4.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AAdgrQABADgNAhQgOAegfAVg");
	this.shape_30.setTransform(45.3,4.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2.6,1,1).p("AAKgzIgxBKQgCAHAQARQAQARAxgx");
	this.shape_31.setTransform(-49.7,15.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AgZAvQgQgRACgHIAxhKIAeBCQgmAlgRAAQgGAAgEgFg");
	this.shape_32.setTransform(-49.7,15.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2.6,1,1).p("ABOAIQgGAhgWAYQgLANgQAEQgIACgIgDQgHgEgHgIQgGgDgGgFQgOgJgLgNQgEgHgGgFQgGgDgGgEQgBgBgBgBQgJgMABgPQgEgdANgYQAIgIAKgGQAlgTAMAoQACADABAEQACgDARAAQARgBALAgQACgBANAFQAOAGgBASg");
	this.shape_33.setTransform(43.3,2.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("AAHBRQgHgEgHgIIgMgIQgOgJgLgNQgEgHgGgFIgMgHIgCgCQgJgMABgPQgEgdANgYQAIgIAKgGQAlgTAMAoIADAHQACgDARAAQARgBALAgQACgBANAFQAOAGgBASQgGAhgWAYQgLANgQAEIgGABQgFAAgFgCg");
	this.shape_34.setTransform(43.3,2.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2.6,1,1).p("AgxgNQACADAhANQAfAQAhgG");
	this.shape_35.setTransform(-55.8,23.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AgOADQgggNgDgDIBjAaQgJABgJAAQgYAAgWgLg");
	this.shape_36.setTransform(-55.8,23.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2.6,1,1).p("AgqgJQABACAdAJQAbALAcgE");
	this.shape_37.setTransform(-54.6,16.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEFEFE").s().p("AgMACQgdgJgBgCIBWASIgQABQgVAAgTgIg");
	this.shape_38.setTransform(-54.6,16.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E1DFDC").s().p("AgYBQQgOgOAEgQQAFgQACgCQgRgeANgNQANgOADAAIAGgcQAFgYAMgGQAQgDAOAGQgRAIgHAWQgKAdAgAIQgeAAgSAUQgOAiAqAQQgWACgNAPQAAAGACAFIgHgFg");
	this.shape_39.setTransform(-56.6,18.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2.6,1,1).p("AAthaQgXgUgcAEQgRAHgHAcQgHAbAAAEQgEAAgPARQgQARAUAgQgCABgFATQgFATAQAPQAcAYAiADQAUADAIgRQAEgVgIgTQAVgJAEgWQADgPgFgNQgBgCgGgJQgGgIgDACQAHgHAHgHQALgfgZgWg");
	this.shape_40.setTransform(-55.2,19.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFEFE").s().p("AAOBrQgigDgcgYQgQgPAFgTQAFgTACgBQgUggAQgRQAPgRAEAAQAAgEAHgbQAHgcARgHQAcgEAXAUQAZAWgLAfIgOAOQADgCAGAIIAHALQAFANgDAPQgEAWgVAJQAIATgEAVQgHAPgRAAIgEgBg");
	this.shape_41.setTransform(-55.2,19.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E1DFDC").s().p("AhyBwQgTgYANg1QAEgBA8gfQA7gdBBgyQAlgcAWgfIgVAgQg0BMifBNQgEgBgGAVQgHAUAfAuIAAAAQgEAAgTgYg");
	this.shape_42.setTransform(16.8,22.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgrAHQAtgZAugOQAsgOACAhQgEgEgWgEQgegFhuA1IA6gIQAxgHAjAJIhBAGQg6AGgnAFIAxgfg");
	this.shape_43.setTransform(-6.4,46.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2.6,1,1).p("ACjg4QAAAEgZAPQgZAPgsgLQgHAJhTBHQhVBKhLAkQAAABACAQQABAQADAQQAAAEgNAJQgNAIgggwQgCgBgEgXQgFgYAJgiQAAgFAUgHQAQgCBMgqQBMgpBBhOQACgBAKgRQAJgQACgXQgBgXAAgXQAAgXAQgCQAkAGABAFQADgGAagPQAbgPASAwQACgDARAAQARgBALAgQACgBANAFQAOAFgBAVQgEAZgVAdQgWAegggPg");
	this.shape_44.setTransform(26.9,16.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEFEFE").s().p("AjpCzQgCgBgEgXQgFgYAJgiQAAgFAUgHQAQgCBMgqQBMgpBBhOIAMgSQAJgQACgXIgBguQAAgXAQgCQAkAGABAFQADgGAagPQAbgPASAwQACgDARAAQARgBALAgQACgBANAFQAOAFgBAVQgEAZgVAdQgWAegggPQAAAEgZAPQgZAPgsgLQgHAJhTBHQhVBKhLAkIACARQABAQADAQQAAAEgNAJIgEABQgOAAgbgpg");
	this.shape_45.setTransform(26.9,16.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E1DFDC").s().p("AgjCjQAAgvAEgGIAWgzQASguAQg1QAQg3gLgaQgeglgzAIQgaAAgYgDQAXghAfgZQBIARBNgFQgvBtgiBvQgPA4gEA5QgCAYAGAVIACADQAOAMAPABQgNAMgQAFQgsgDABgug");
	this.shape_46.setTransform(-7.3,17.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2.6,1,1).p("AAwjfQg0gYg+AcQg1AhgkAzQAYADAZgBQA0gIAhAmQAKAbgQA4QgQA1gVAwQgUAvgCAEQgEAHAAAvQgBAvAvADQAwgMASg2QASg2gBgHQgig5ARg7QASg8AigsQAjgsAQgGQAJgCAWgGQg2geg2gYg");
	this.shape_47.setTransform(-2.1,15.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEFEFE").s().p("AhaC6QAAgvAEgHIAWgzQAVgwAQg1QAQg4gKgbQghgmg0AIQgZABgYgDQAkgzA1ghQA+gcA0AYQA2AYA2AeIgfAIQgQAGgjAsQgiAsgSA8QgRA7AiA5QABAHgSA2QgSA2gwAMQgvgDABgvg");
	this.shape_48.setTransform(-2.1,15.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1D6277").s().p("AhAB+QAJglAlhNIAohTQAAgEAHghQAIggAPgKIANgEQgMAoABAsQAAAqghAkQgtBDAlBQQhJgYgEgFg");
	this.shape_49.setTransform(-15.8,42.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1.7,1,1).p("AA9itQgHAAg2ABQg2AAgWAHQgQALgIAjQgIAiAAAEQgCADgWAsQgVApgWAyQgXAygFAXQAEAEBFAXQBGAYBcgLQBegKBOhgQgDgFgUgpQgVgmgHgOQgKgWgWgIQgLgIgTgwQgTgvgLgGg");
	this.shape_50.setTransform(-2.9,43.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#256E8A").s().p("AiBCdQhGgXgDgEQAEgXAXgyQAWgyAVgpIAXgvQABgEAIgiQAIgjAQgLQAWgHA2AAIA8gBQAMAGATAvQATAwALAIQAWAIAKAWIAbA0IAYAuQhOBgheAKQgdAEgZAAQg7AAgwgRg");
	this.shape_51.setTransform(-2.9,43.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2.6,1,1).p("AD5BDQgJAChcgSQhcgRhAg1QgBgBgRgSQgQgSgRgTQgOgWgPgSQgOgSgeAcQgCgCgWgKQgVgKgTABQgRAGgGAcQgHAcAAAEQgEAAgQARQgPAQAUAgQgCACgFATQgGASARAQQAUAQAgAJQAfAJAQgdQABADAdAGQAdAHAtgRQAIAEBdAdQBfAdBMACQACgBAJgRQAKgRgKgag");
	this.shape_52.setTransform(-36.3,21.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("ABDBhQhdgdgIgEQgtARgdgHQgdgGgBgDQgQAdgfgJQgggJgUgQQgRgQAGgSQAFgTACgCQgUggAPgQQAQgRAEAAQAAgEAHgcQAGgcARgGQATgBAVAKQAWAKACACQAegcAOASQAPASAOAWIAhAlIASATQBAA1BcARQBcASAJgCQAKAagKARQgJARgCABQhMgChfgdg");
	this.shape_53.setTransform(-36.3,21.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E1DFDC").s().p("AhhA7QgngsgHguQgHgvACgEIAsgEQArgDA7gHQgnAfgPAjQgQAiAkAaQBVA8BkgaQguAZhEAIIgXAAQhLAAgigmg");
	this.shape_54.setTransform(-7,63.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2.6,1,1).p("AC+iVQgSAFgbAmQgYAahWAQQhVAQhQAHQhQAHgGAAQgCAEAHAwQAHAxApAvQAqAuBlgHQCXgUA0hcQA0hZgbhpQAAgCgSAGg");
	this.shape_55.setTransform(-0.6,58.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEFEFE").s().p("AijByQgpgvgHgxQgHgwACgEIBWgHQBQgHBVgQQBWgQAYgaQAbgmASgFQASgGAAACQAbBpg0BZQg0BciXAUIgYABQhSAAglgog");
	this.shape_56.setTransform(-0.6,58.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CB8F22").s().p("ABgDIQgMgZgMgIQgOgCgWAMQgWALgVABQgUgFgDghQgDgggJgQQgMgLgXAFQgYAFgYABQgVgEADgUQADgUACgDQAUhQA1gtQA0gtAtgSQAvgRADAAQgXggALgRQAKgRAXgFQgbBCBDAdQAEACgKAKQgKALgIACQhDgFg1ApQg3ApgUBCQArgIAUAQQALAHgBAXIgCAqQApAJAsgRQAIA9AuAsIgIABQgUAAgKgVg");
	this.shape_57.setTransform(-30.5,86.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1.7,1,1).p("AB+jqQgDAAgbAEQgcAEgRARQgSARAcAoQgEgBgyASQgwATg4AvQg4AvgWBUQgCADgDAVQgDAUAWAFQAagBAZgFQAZgGANAMQAJAQAEAiQADAiAWAGQAYgBAWgMQAXgMAPACQANAIAMAaQANAaAcgEQA1gagLg7QgEg9ACg9QAGg7ARg7QAEgXgEgVQgEgWgYgEQgXADgUgHQgPgIAEgPQALgJAPAEQAWgSgTgXg");
	this.shape_58.setTransform(-28.9,87.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F2B435").s().p("ABLDUQgMgagNgIQgPgCgXAMQgWAMgYABQgWgGgDgiQgEgigJgQQgNgMgZAGQgZAFgaABQgWgFADgUQADgVACgDQAWhUA4gvQA4gvAwgTQAygSAEABQgcgoASgRQARgRAcgEQAbgEADAAQATAXgWASQgPgEgLAJQgEAPAPAIQAUAHAXgDQAYAEAEAWQAEAVgEAXQgRA7gGA7QgCA9AEA9QALA7g1AaIgIABQgWAAgLgXg");
	this.shape_59.setTransform(-28.9,87.1);

	this.addChild(this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.9,-111.8,125.7,223.4);


(lib.bridge2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C17F3E").s().p("AH9A0QiQgDibgXQibgYhaAEQhfAMhLAMQhMAMhigQQhQgMhYgBQhZgBhOgWQBYABBUgCQBVgCBWANQAwAKAaAEQAbAFAtgMQAjgIAbgMQAagMAmgGQDkgZDpAHIBmAGQBYAGBSAJQBRAJAAAJQg7A+iHAAIgMAAg");
	this.shape.setTransform(-197.8,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C17F3E").s().p("Ak6ARQhvgLhwgGQAYAAAbgDQA6gKA5ADQCRASCQADQBKgEBEgOQBFgPBOgDIBqgCQBPgBBIADQA7ADAPAJQgrAUhZgHIiZgIQhPAAhAAOQhAAQhJAFIhBABQhyAAhsgLg");
	this.shape_1.setTransform(-181.2,-9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C17F3E").s().p("AGCBIQhYgbhbgmQhbgjhBgMQiLgRiXABQiXABiOAAQBhgiB/AFQCAAFBuAGQDsAODnAHQhAAQABAbQACAZA6ATQARADAuAEQAtADAXAJQAXAKg0ATIAlgHQgaAKghAAQgnAAgxgOg");
	this.shape_2.setTransform(-27.2,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E4A17").s().p("ADOBDQhKgBhIgOQglgFghgIQgjgLghgNQgYgHgYAHQgSgBgTgEIhpgDQgagDgagFQgYgEgaABIgxAAIAxgIQAoAAAnACIAiACQAUABAKgHQg5gVhAABQgegEgbgNQgcgHgWgOQAPABAPACQAAAIAJADIgFgBIAHACIAHABIAfAIQATACASAAQA1AGA1AEQA8AAA8AFQA1AIA0APQAyANA4AEIAxABQAjADAhAGQAwADAwgJQBYgGBJgkQAngVAyAJQg7AbhCAQQg0AUg6AGIhEAAQiBAKh+gYIgqgOQghgJgDAJQAoAGAjAQQAoANApAJQApAEAqgBIBrAEQBBAFA/gGQAegDAcgHQAWgIAXgEQAWgFAXgCQAWAAAVgHIAvgRIg8ApQhIAjhTAAIjYgGgAp9gMQBAgFA/ALQg/gChAgEg");
	this.shape_3.setTransform(106.3,-3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C17F3E").s().p("AGGBPIhhgOQg6gJgigOQgrgbgQggQgRghhFgJQgzgCggAUQghAUgsAQQgwAKg7ACIhwADQhFACgvgPQgwgRg9gZQg1gTgwgFQgegDgigBIAlgDQAygGAqAAIDJAGQCtALCtgCQBHgHBbgKQBagLBFAZQAjASATAfQASAdAkASQAtAPA2gJQA1gIAwAEIAAABQA4AOBCAIQgEAdgUgGQgVgGgagBQgZADgQAFQgQAFgYAFQggAEggAAQg1AAg3gKg");
	this.shape_4.setTransform(46.8,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C17F3E").s().p("AAwA2IhYgEQitABipgJQh0gHh1gFQAsAAAkgHQAWgGATgLQATgKAaACQAYACANAPQAOAPARAGQAsAGA4gLQA4gMAvgDQA1gBA3AGQA3AGAygGQAwgJATgVQASgXAogRQAagGA4ABQA4ACAhACQBcAIBdASQAxAJAzAGIgggDQhLgEhYgIQhYgHhJALQgpAKgWAWQgXAYgoANQgZAGghAAIgcgBg");
	this.shape_5.setTransform(205,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E4A17").s().p("AARAQQgZgNgHgUQgNgDgMADQgIAKAHAKIALAKQAIAHgBABQgbgCgQgTQgIgSAggEIAtgGQAJgDAJAAQgLALAAAQQAEAOASAIQASAJASAGQgagFgZgMg");
	this.shape_6.setTransform(100.8,-16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E4A17").s().p("Ag1AkQgagGgagIIgSgDQgJgEgBgFQAYgDAWAKQAUAJAWgDQgWgDgRgLQAKgFATACIAfACQAsAGAqgHQAagNgigFQgqgEgogBQAJABARAEQAPADgKAIQgDAAgOAAIgTgBIgwgBIgigCQgXgCgEgJQAAgHAOgFIAWgGQA+gJA9AMQBDAKA7AXQgGAFgQAFIgZAHQgiAJgjAFQgYAEgWAAQgRAAgRgCg");
	this.shape_7.setTransform(123.7,-15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E4A17").s().p("AhPAMQh9gZgGgIQCtAeB6gIQBsgGASgDQhuAehaAAQgvAAgrgKg");
	this.shape_8.setTransform(123.1,-7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B5D1F").s().p("AWJCWQi7gPizgcQgngFhFgDQhFgCg/gHQhAgIgZgVQDOgHDMASQA4AFAigEQAhgDAzgIQAzgEAzAGQAzAGAvgRQgFgthRgNQhQgPhcAAIiFAAQgTADgOATQgOAVgTACQksAGkrgPQjlALjmgCQjmgDjmAJQjDANjFAPQhjAEhbgJQhEgHhHgFQCMAGCMAAQAPgqgygIQgygKhCAFIhgAGQi5ACi6ABQjCgBjCgHIiTgJQhPgFhBAKQghAHgWAOQgWAQgdAMQhVAdhqgOQhrgOhKgnQBaAFBaAAQBrgGgdgjQgNgQgugMQgWgEhUgEQhUgDhPAEQhOAEgHARIABgOIBhgOIBigDIh3gUIhLADIACg9IGKA9IDBAWIBWAFIDAAKIDMALIB7AGQA6ABBQgCIBWgEICOAEIClgdIB/AJIFPAqIGMAAIC0gMIGYAWIIaAMIC0gVQAAgBAQgGQAQgGAcADQAFgHB7gNQB6gOC3BCIBggBIDZAAIDlgBICCAAQAzABBCgBIBIgBIBQAAQBLgBBagFQBYgFAvgMIAzASIgBAUIgWALIq+ADILMATIAOAOIkxgEQiWgBiPAXQhYAOhWgOQhVgOhTgBQhRgChMA1QhAArhWACIgWAAQhLAAhQgJg");
	this.shape_9.setTransform(-11.1,-14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9B5D1F").s().p("AH3A3IhkgEIhygGIg3gDImggLImyALIj0gCQhNAAg5gIQg5gIhGgQQhMgIhSAAQAPhCBcAPQBcAQA+ANQDWAUDbgFQDagFDYAEIOCAWQAqgCAqgQQApgRAjgHQBFADBHAKQBHAJBGADIAaAGIBCAdIgtAPIhKgSIhdAEIjTAKIjfAJQhZADgiAAIgIAAg");
	this.shape_10.setTransform(139.7,14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9B5D1F").s().p("AYqBNIhmAIIgygBIhSgDIh3gDIhVgCIi9g2IhQgCIgdgRIgzgFIhYgCIi1ggIiFAHQh7AGiKAEQiGADgxgJQgvgJh7gCQh7gDhtAAIh1ABIlYAMInbgMIhoAIIi4AkIh6g3IAxgWQBmgKBngcQAJAAAJAVQAHATDdAFQDdAGFOgEQFOgDFZgHIJZgLQEBgEBDADQgHABAMAPQAMAOAEAEQASAKAZgCQAZgCAUADQBYAYBTAmQBZAiBlgBQBlAABpgHIBFAJIDLA2g");
	this.shape_11.setTransform(-109.9,18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.4,1,1).p("EAqbgCNIgXALIq+AGILNATIAVAYIBagDIAWAMIgXASIn1gBIFsBEIA0ANQAEACAeADQAdADAFgMQAEgMAeAAQAdABAEABIBLgEIAUBVIguAcInXgYICcA0IBCAgIgtARIhKgUQgFAAhZAFQhZAFh5AGQh6AGhmAEQhlAFgegBQgkgBg/gDQg/gDg0gDQgzgDgDAAImigLImyANIoLgCQAIADBEAUQBFAUAZADQAXACA0AGQA1AHAGABIDPA8IjmglIhpAKQgEAAgugCQgvgBglgBQgrgBhPgCQhPgCgJAAIi+g8IhSgCIgdgTIg0gHIhagCIi6gkQgIABh/AIQh+AHiMAEQiMAEgxgJQgxgKh9gDQh9gDhwABQhwAAgIABIlfAOInmgMIhoAJIi9ArIh9hAIBrgzIBcheIBTgCIAzASIDCALIBZAPIC8gaIBpADIH0gEICWADIC7gTICNAuIhYgsIGxAFInAgcIhSAKIi0AHIizgFIi7AHIisACIizgFIiWATIiWgEIh3gKIjeguIiygvIgHgeIABgeIEGgLIkUgOIABgkIBigPIBhgEIh3gVIhLAEIADhCIGKBBIDBAXQAEAABRAFQBRAFBvAGQBvAHBeAFQBdAFAdABQA6ABBQgDQBPgEAIAAICOAEIClggIB/AJIFPAtIGMgBICzgNIGZAXIIZAOIC0gZQABgCAPgGQAQgHAcAEQAFgIB7gPQB7gPC2BKQAEAABcgCQBdgBB9gBQB9gBBngBQBogBAbAAQAzABBCAAQBBgBAHgBQAEABBMgBQBLgBBZgFQBZgGAugOIA0AUg");
	this.shape_12.setTransform(1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AA6A24").s().p("AIPEYIhpAJIgygBIhUgCIh6gEIhYgCIi+g7IhSgCIgdgTIg0gIIhagCIi6gjIiHAIQh+AIiMAEQiMAEgxgJQgxgKh9gDQh9gDhwAAIh4ABIlfAPInmgMIhoAJIi9AqIh9g/IBrgzIBcheIBTgBIAzARIDCALIBZAPIC8gaIBpADIH0gEICWADIC7gTICNAuIhYgtIGxAGInAgcIhSAKIi0AHIizgEIi7AHIisABIizgFIiWATIiWgFIh3gJIjeguIiyguIgHgfIABgeIEGgLIkUgOIABgkIBigPIBhgEIh3gUIhLADIADhBIGKBAIDBAXIBVAFIDAALIDNAMQBdAGAdAAQA6ABBQgDIBXgEICOAEIClggIB/AKIFPAtIGMgCICzgNIGZAXIIZAOIC0gZQABgCAPgGQAQgHAcAEQAFgHB7gPQB7gQC2BKIBggBIDagDIDkgCICDgBQAzABBCAAIBIgCIBQAAQBLgBBZgFQBZgFAugPIA0AUIgBAYIgXALIq+AGILNATIAVAZIBagEIAWANIgXARIn1gBIFsBDIA0AOQAEACAeACQAdAEAFgMQAEgMAeAAQAdABAEAAIBLgDIAUBUIguAdInXgYICcA0IBCAfIgtARIhKgTIheAEIjSAMIjgAKQhlAFgegBIhjgEIhzgGIg2gDImigLImyANIoLgCIBMAWQBFAVAZADQAXABA0AHIA7AIIDPA7g");
	this.shape_13.setTransform(1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#673810").s().p("A9+BAQgahcAIhTQAIhSADgGID9AfIDABNIZwAsIT8AyIHvC8IzKgDMgnNAAMQhhgqgZheg");
	this.shape_14.setTransform(-97.1,-8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2.7,1,1).p("ACShpIhRg7IkohAIgOBVIARASIgTASIgLBeIAgAOIgnAoQABADAZAqQAaAqAiAsQAiAsAaAJQAeAFBFgCQBEgCA8gEQA+gEADgBIBdhuIgoiFg");
	this.shape_15.setTransform(-270.4,-7.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#512A0C").s().p("Ah2DhQgbgJgigsQgigsgagqIgbgtIAogoIgggOIALheIATgSIgRgSIAOhVIEoBAIBRA7IBQBPIApCFIheBuIhBAFQg8AEhDACIgjABQgrAAgVgEg");
	this.shape_16.setTransform(-270.4,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1.8,1,1).p("AFCiBIgvAdIAfAaICFADIhDAqIhvgDIAfAYIBHASICnAVIAHApIhPA6IjggLIAeAcIArAIIgxARIjrg4InPhEIhghsIAchSICJgIIKOgVg");
	this.shape_17.setTransform(239.6,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#673810").s().p("AAXB0InPhEIhghsIAchSICJgIIKOgVIAnAqIgvAdIAfAaICFADIhDAqIhvgDIAfAYIBHASICnAVIAHApIhPA6IjggLIAeAcIArAIIgxARg");
	this.shape_18.setTransform(239.6,0.4);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-298.4,-32.7,596.7,65.4);


(lib.bridge = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2CFD2").s().p("AhvglQAIACBOgHQBNgFA8gbIjfCWg");
	this.shape.setTransform(-285.6,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2CFD2").s().p("AjFBoIAAiiIBbg1QALAIAKAAQAdAJAYATQAYASAIgDQAogUAmgiQAhAaApARQAVAVAXARIACADIhbBNIgaBEg");
	this.shape_1.setTransform(-277.2,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0DFE1").s().p("Ag3BTQgQgYgbgNQgcgdgmgUQAfgcAggZIAWgLIAiAKIDSgcIjYCrIgEgDg");
	this.shape_2.setTransform(-251.9,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0DFE1").s().p("AhMA6QgYgOgagTICahaIBjAcIgSAMQhHAlhGAyQgHAEgJAAQgNAAgPgIg");
	this.shape_3.setTransform(-273.1,-16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B5654").s().p("AhvgxQAFAEBHgDQBGgEBOg1IglBnIi7Btg");
	this.shape_4.setTransform(-285.6,-14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#686D6C").s().p("Ag3AdIjjgMIAEhSIDvACIAnAlIEHgcIAVBGIkdAyg");
	this.shape_5.setTransform(-237.4,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2CFD2").s().p("AANAUQgqgQgvgEQgvgDgegiQCZgDCagMIhfBpQgXgXgXgKg");
	this.shape_6.setTransform(-209.6,-3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0DFE1").s().p("AkhCZIiEACIDqjFIBvgGIA9giIh/gPIBAguIEagNIDaATIh1A9IAAAdQirgEirAVQAJAUAPAMQANAQAIAAIAoAIIgDADQgSARgUANQg0Aag2AYQgzASgwAeg");
	this.shape_7.setTransform(-224.1,-6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0DFE1").s().p("Ai5A1QAUgRAXgPQAOgLARgIIAjgNQAlgNAkgXQASgMASgRIADgDQBZALA9AuIhEBLIkGAbg");
	this.shape_8.setTransform(-222.9,4.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2CFD2").s().p("AhzARICognIA/AlIhhAIg");
	this.shape_9.setTransform(-178.6,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2CFD2").s().p("AhEAjIArgkIAigLIAWgOQAUgMASgCIgVBRg");
	this.shape_10.setTransform(-155.2,9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0DFE1").s().p("AleCMICfivICDgIIAlgaIhnAAIgvgZIB6g7IDRgFQBDAABDgDIAmgEQAJAAAGAFQAIAJgDAQQgDARgIAIQgPAHgMAPQgUAxgKAyIgHAhQgFAYgFAFIhLAZIheA7IhUgqIjVAzg");
	this.shape_11.setTransform(-174,-4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2CFD2").s().p("AAbgLIgYAJIgTALIg4AAIARgRIBkgHIAcAfg");
	this.shape_12.setTransform(151.8,-18.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D2CFD2").s().p("AgSgPIAlAHIAAAOIgXAKg");
	this.shape_13.setTransform(161.8,-18.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D2CFD2").s().p("AiRAXIgmggIAAgUIEwgDIADAHIA8AwIgjAAIgqgMIgngRIhIADIhYgKIgOAVIALAZg");
	this.shape_14.setTransform(184.3,-16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D2CFD2").s().p("AgzgJIBnAAIhEATg");
	this.shape_15.setTransform(204.9,-18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0DFE1").s().p("AiigOIBfgjIDmADIgcAQIgqAtIgEANIiuAWg");
	this.shape_16.setTransform(219.5,-14.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4B5654").s().p("AixAXIAGhEIBNAaIBHgMIDKAJIgkAPIiLAAIhiAKIgWAXIgHAUg");
	this.shape_17.setTransform(-128,8.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0DFE1").s().p("ABkCgIkkADIg3gMIAXgXIBkgMICIAAIA0gPIjZgJIhHAMIhOgaIBRjzIC4gDIBIADIAAAYIgjAXIgLAVIhEA5IhBAhIA3AVIBiAAIBeAJIBxADIAdAOIA6B7IiEAGg");
	this.shape_18.setTransform(-114.9,-3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D2CFD2").s().p("AhGARQA+gUA3gYIAOAlIAKAKQgiAIghAAQglAAglgLg");
	this.shape_19.setTransform(-79.6,-12.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0DFE1").s().p("AAUBpIgzh8IgogYIhRgTQA1ggA8gWQBQAaBRgPIAgAgIg9BSIAAA8IgMAwg");
	this.shape_20.setTransform(-83.5,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D2CFD2").s().p("Aj8BRIAogGIAogkIAOgkIBCgdIAHg8IBDAYIAfgeIBdASIB/gMIAUA6QhUAdhSAgQguAPgpAXIgMgCIhWAYg");
	this.shape_21.setTransform(-100.1,-12.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0DFE1").s().p("AgrCeQhWgEhXADQgEgSAEgSIBrAAQBAABAdgbQhEgEhDAIQghAGggADQggACgZgcIA4hJQAPgcALgGQALgGArABQAoABAVgIQAWgHgkgcQgigXgiACQghABgngGQgEgTgYgCQgCgUgOgMQgPgLgBgTQA1gPBGAIQBHAIA6ACIEDAAIAlAJIgSA3IAzA2IghCBIAOBAIgqA7QiJgViIgNg");
	this.shape_22.setTransform(-45.3,-2.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0DFE1").s().p("AC/C5IhsgVIggARIj1gNIgvgRIATgRIC6AAIAcgEIjlgZIgvgZIAriwIgrg2IAvgiICaAEIAmARIAtgRICVAEIAcAVIAzCYIifALIiJgIIB3AVICWAAIAqAVIApCPg");
	this.shape_23.setTransform(11.4,-2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D2CFD2").s().p("AAjATIhOAIIgzg5ICKgEIAzAsIgEAZg");
	this.shape_24.setTransform(39.7,-17.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0DFE1").s().p("AhzCfIghh+Igcg1IgchZIBBgIIBZARIAcgmIgvgzICLAAIB0AWIATAqIgXAVIgvA/IgqAiIgTAfIhKBZIAbAzIgbARIgtAAIgqAJg");
	this.shape_25.setTransform(55.4,-1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D2CFD2").s().p("AgIglIAjAaIA5AAIgUALIgLAOIg5AVIhQADg");
	this.shape_26.setTransform(75.4,-3.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E0DFE1").s().p("ADYDAQgxgGgqgGIgtgHIgTARIgyAAIh6gMIhkAAIglgcIAZgFIC0AAIArgGIiDgIQgegEg5gDQAZghAEgiQAEgigUgTQgWgZgNgeQgMgeATgOQAMgKAQgDQAyAGA1gCQg3gGgwACQg2gGgagwIAHACICWgjIAuADIAcgCIA9AGIgDAKIglARIAxAHIAyAAIAagTIBHAYIAJA3IAcBAIgLAOIgMAZIgXAPIgngCIg1AFIgxAAIgbgGIgKgEIgtgBIATAEIAbADIAMADIgOAJIgQACIhhAAIAdAFIBRAAIAOgHIA5AAIgYARIgUABIgjAHIA8gFIAsgRIBpAAIAgAFIASAGIA/CSIgOABQgVAAgjgEg");
	this.shape_27.setTransform(144.2,-0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0DFE1").s().p("AgqCvIi/gFIgbgIIAGgLIAugNIBxgGIAegFIA7ADIg9gMIgcAGIhuAEIAOgRIAhgVIgpARIgUAUIg4AOIg0gcIBWhdIBigDIA3gTIAlAJIAZgLIBMADIhPgMIgUALIghgOIAZgDIARgRQASgOAlgEIA4gGQg8gHg2AWIAAABIhWgTIgXgYIAkgjIgLg7IAfAAIAZAUIAfgSIC2AEIBGALIAQAFIAiA2QAMAhADAiQADAiATAYIAcAAQAEAfgOAaQgOAagKAcQhRgDgeAdIgegQQgUgLgJACIgRAMIgRALIgYAWIg8AFg");
	this.shape_28.setTransform(90.8,-1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0DFE1").s().p("AiDCuIgQACIgbADQgPACgbgGIgegHIhRivIg8h2IgPgwIAcgLIA4AwIBEAIIgJg1ICDAFIA7AUQAhAJAbABQAZACAcAWQA6A1AoBBIA+gDIAqAOIgIAXIgpARIhkAGIgigJIiKAOID0gCIAZARIAWACIgMgRIAPAAIAogFICQBuIh9AIIhKgIIhxAFIgvAHQgpAGgMABIgyACIgoABg");
	this.shape_29.setTransform(201.4,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0DFE1").s().p("AAdCKIgqglIgxgfIgrgaIgUgTIgDgIIgCgYIAdgbIgigLQgLgEgQAAIgSgBIg9AHIghgVIgLgLICSgZIAsACIAWgCIgLgVIA0gvIAYAFIAOAqIAXAHIAUADQATACARABIDJCHIgHAZIAAAZIgcAXIgaACIgtAcIhTgFIghAFIB8AIIATgKIgQAVQgJAEgSACQgQgCgGABIgegCIguARIglgfg");
	this.shape_30.setTransform(238.9,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D2CFD2").s().p("AArAxIhmABIhagEIAmgkIAZgQQADgGAFgMQAAgFAEgOIAFgQIDbB3g");
	this.shape_31.setTransform(275.8,10.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0DFE1").s().p("AABAeIi7h7IgOgNIgQgVQAHgLgHgIQgGgHgBgBIgmAAIgbgVID2gUIBzBLQgGAWgLACQgLACgPAFQgRAIggAHIglAHIAYADQAVADAMAGQAQAEAjgJIAogKIAtAAIAdAKIAVAKIAmATQARAKAWAJIAZAKIAADGg");
	this.shape_32.setTransform(268.7,-1.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#686D6C").s().p("AFqC4Ig0gSIgpgBIg8AHIg6AAIgwgRIgjAEIgZAMIgrgFIgzAYIjGihIADguQACgEgFgKQgFgEgLgFIgNgGIg/ANIgmgRIgUgZIADgUIB7gLIA4gLIAPADIAAgbIAjgaIAQgWIAWADIAkApIANAZIAzgMIGtENIgBA1g");
	this.shape_33.setTransform(250.5,3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#686D6C").s().p("ACIByQh7hJhxhFIh5hLIAAgrQgDgKgSAEQgTAEgDACIgYgWIgIgiQBCAEBWANQBYAOBAANIBGAOIgFBGIAoAJIC3BtIAACfQgkgPh8hKg");
	this.shape_34.setTransform(268.2,0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#585E5D").s().p("AjnDIIgTgFIiLlHIgNhHQAaAmA8gMQA7gNAHgEIBkAhQBOgIBIALQAxAVAkAoQAKAMARAWQAQAXAOAGIAXAHIAXAHIAyADIAJArIgPALIAPAZIBLArIBRAcIgGAkIgmgCIhkAIIgngEIgwgEQgLAAglAHQgmAGgOABIhPAFIhHAGIg7gDIgfAGIgmAIIgDABQgJAAgNgEg");
	this.shape_35.setTransform(201.4,4.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#686D6C").s().p("AhTApIABgjIBGgaIBfgXIACArIgUgIIgFAYIg3Acg");
	this.shape_36.setTransform(75.3,-0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#686D6C").s().p("AIYDcIiegjIgpAbIhzgJIhMgLIhYAUIgkgbIADgVIgsgRIgdARIgBAwIgqgDQgig2gLAaQgNAbgfAHIghgCIgfgBIgxgCQgvgCg4AAQg4gBghAFIgUgDIgNgPIgmgVIAEgUIAFgYQgCgIgJgXIgMgZIBZhWIA5AKIA8gYIAqgBIACgbIgSgFIgZAAIgcgKIgMgcIAIgdIAQgCIAJhcIAiATIAzABIBrgKIDbAXICXgUIBngJIgGApIAzAHIAwgSIA9AUIALgHIAIBGIAPApIgLBDIBiCdIgBA9g");
	this.shape_37.setTransform(115.1,2.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#686D6C").s().p("AjYiMIgJhDIC2gFIENAzIgLBPIimDFIAOA3IgmAaIh3ARg");
	this.shape_38.setTransform(52.8,0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#686D6C").s().p("AC6DPIhPgOIgvAOIkNgFIgvgVIAKgiIgqgRIAEhQIAhh0IghgqIAOhIIA0gVIBUAAIBdAeIApgnICaARIBLCgIAAA1IA4CHIAEA3g");
	this.shape_39.setTransform(11.4,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#686D6C").s().p("ACSDIIhrAAIg8AAIhOAAIg/ABIgtADIgvgiIAAgmIgXgNIAFg/IA+gtQA2gmAOgVQABgPgngHQgogHgGAAIgqgaIgWhwQA0AeCCABQCAABB0gKQBzgJAHgBIAKAuIgFAZIAcA3IAABjIgTBNIAKAdIg0BZg");
	this.shape_40.setTransform(-45.3,0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4B5654").s().p("ABiABIhRgKIhvgIIhqgPIgNgsIBQAAIAJgRQA9gKA5gXQA3gXA6AbQBLAmATBKQATBIgIBMg");
	this.shape_41.setTransform(-103.1,3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4B5654").s().p("AgiBHIADhhIA/hXIADBsIgXA2QgRAygDAPg");
	this.shape_42.setTransform(-74.2,5.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#686D6C").s().p("ADNDAIg7gJIh0iMIhOgLIhxgJIhrgPIgNgpIBRAAIATgpIAUgYIAGgUIAghJIBLAaQBCgFBBAEQBBAEA4ApQAZAXAWAZIAQANIAPAKIgEAoIgGBIIgDAoIgTAhQgRAegDAMQgBAJgMADIgMADIAAAAg");
	this.shape_43.setTransform(-96.4,-1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#686D6C").s().p("AjLC7IgugOIgDgmIg3gXIAKhMIBujNIDcgXIgJBUIAAB5IEPBuIANA1IgdARg");
	this.shape_44.setTransform(-115.1,-0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#686D6C").s().p("AiNAAIgnhHIFpADIgEAzIgoAqIi3AdIgZASg");
	this.shape_45.setTransform(217.7,-12);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#686D6C").s().p("AioAvIgPAAIgdg2IABg0IDQgDIDYA2IgHAhIjJgDIhSApg");
	this.shape_46.setTransform(181.4,-13.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#686D6C").s().p("AAKAWIhWAJIAOgkIB2gZIAVAWIgDAng");
	this.shape_47.setTransform(150.7,-16.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#686D6C").s().p("AiCAmIAYhCICngcIBAAZIAGBCIh2AWg");
	this.shape_48.setTransform(-179.6,16);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#686D6C").s().p("AhZBAIApg/ICBhFIAJBQIgQA5g");
	this.shape_49.setTransform(-156.4,12.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4B5654").s().p("AjcDHQgigIgGgUQgFgUgNgYIAbgiIBPiMIhGgGIgIhPIABAAIEfgnICogXQAVgFAWAAQAbAJACAbQADAcgEAWQgFAZgVATQgVASgNAWQgYAygWA1IgBAAQgyAVgrAdQgPAOgLAWQgLAVgYACQgRgFgUgJQgfgEggAEQglAGgeAPQgXAKgaAAIgUgBg");
	this.shape_50.setTransform(-166.3,-0.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#686D6C").s().p("AlLCmIgGhCIKhktIACBVIhCD8IisA0IiWgfIinAsg");
	this.shape_51.setTransform(-174.5,-0.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4B5654").s().p("AAyCjQgIgCgSgJQgHgNgOgMQgVgFgbANQgcAMgVAHQg9AOhBgLQgdgGgbgLQgbgKgfgBQBlh5ARiVIA4giIHvgJIgMBQIhbAnIgDBFIilC1QgFgWgJAAg");
	this.shape_52.setTransform(-215.4,-1.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#686D6C").s().p("AiOgmIEcAJIACBAIkZAEg");
	this.shape_53.setTransform(-283.4,12.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4B5654").s().p("AhBB5IANglQAIgVgGgPQgIgPgVgLIglgRQhPgfhPgdQgDgOAOgMQAOgMAMgIQARgMAQgBQAQgBAVgFQAkgNAZgUQAYgUAqgCQAYAAAHAGQAHAGAPAJQAjAJAogCQA/ALA9gKQAigQAcgcIABBDIjxDTIg0BYIgrAPg");
	this.shape_54.setTransform(-262.8,-2.9);

	this.addChild(this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-297.8,-24.9,595.7,50);


(lib.background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C6E0").s().p("AgEANQgEAEgBgHQgCgIgDABQgDABACgEQAIgSABAOQgDASANgSQAQgSgEAKQgDACgKAPIgGAMQADgHgEADg");
	this.shape.setTransform(295.7,-110.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4C6E0").s().p("AgKAKQgHgFgGAAIAIgEQAAgCgDgEQgEgDALgDQgGADALALQAXAIAHgBIgPACIgIAAQgGAAgFgCg");
	this.shape_1.setTransform(298.5,-99.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4C6E0").s().p("AgDALIAAgKQADgSAFADQgEABgBARIgCAMIgBgFg");
	this.shape_2.setTransform(289.2,-98.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4C6E0").s().p("AgIAVQAIgQAAgUQAGgWAHAFIgIAHQgFADAAAYQAAAOAAABQAAABgEAHQgHAIAAABIAAAAQgDAAAGgNg");
	this.shape_3.setTransform(287.9,-97.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4C6E0").s().p("AAAgEQAKABADADIgHgCQgGgDgMAKQABgFALgEg");
	this.shape_4.setTransform(286.8,-103.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4C6E0").s().p("AgMACQAEgGAKABQAQgCAEgDQgDADgTAFQgKACgDAFIgIACQADgBAGgGg");
	this.shape_5.setTransform(285.2,-102.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4C6E0").s().p("AAAAFQgCgQgDgFQAFABACAQQgBAQAFAAIAAAAQgFAAgBgMg");
	this.shape_6.setTransform(288.4,-108.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4C6E0").s().p("AAIAjQgIgCgDgMQACgVgHgMQgLgUAAgEIAMAMQAIAKABAOQgCAeAUAHIAAAAIgMgCg");
	this.shape_7.setTransform(287.6,-108.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F4C6E0").ss(1,1,1).p("AAAgDIAAAH");
	this.shape_8.setTransform(292.4,-108.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F4C6E0").ss(1,1,1).p("AgGAAQADAAAKAA");
	this.shape_9.setTransform(287.5,-104.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4E217").s().p("AgNAyQAHgjgIAPQgQAdAGgNIAEgQQgCgCgJAGQgJABAEgIQAKgJgFgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQABAAAAgBIgFACQgWAOAAgHQANgLgCgDQgPgDAHgBIAQABQAHABgIgDQgOgEACAAQgCgFAPADIAMAAQAKAAgOgGQgbgTANACQAQAQgFgNQgLgVAJALQARAUgDgNQgLgUACgCQADgFAGANQAJAPADgLQAAgEADACQACADACgHQAHgWgDANQgDAVALgMQAMgMgMASQgHAPANgJQAJgEgEAFQgJAGASAAIAagDQANgCgPAFQgtAHASAFQAXAIgMAAQgBAEABAHQgJgEgMgCQgCABAJAGQAKAGABAJQgBAFgCABIACADQgFAEgKgGIABABQAGAHAAADQgGABgLgOQgHgLgEANIgFASQgCAGgBAAQgBAAAAgGg");
	this.shape_10.setTransform(293.4,-104.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F4C6E0").ss(1,1,1).p("Ag9AgQgCAFgBAPQADALgEAIQgDANAAAHQgCAHAMgEQAJABAHgEQAJgLAPgDQAOABgDgKQAAgFADgBQADgBACgLQAEgPAAgFQABACADAGQAFAJAMACQALABAEADQADACANgCQAegDgBABQABgDgPgPQgQgHgBgHQgCgIgCgBQAEgCAOgLQAMgSAJgKQALgLAJgEQAJgKgKAEQgHAKgJgEQgEAAgLgBQgQgJgNgBQgJAAAFgNQAHgLgDgCQgFAAgNABQgNABgGgBQgGAAgGALQgFAMgCAFQgDACgIgJQgHgKgDgGQACgCgTABQgXgKgNgGQgJgCALAOQALAQgCAcQgHAUAOAFQgFAAgJAJQgFAHgIABQgGAAAAAEQgFADgNAPQAEgCAFADQACADAJAAQAJABABgBQAEAAAMADQAFAAACgBQABgBAAgC");
	this.shape_11.setTransform(293.2,-103.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AE76A5").s().p("AhEBbQAAgHADgNQAEgIgDgLQABgPACgFIABgDIgBADIgHABIgQgDIgKAAQgJAAgCgDQgFgDgEACQANgPAFgDQAAgEAGAAQAIgBAFgHQAJgJAFAAQgOgFAHgUQACgcgLgQQgLgOAJACIAkAQQATgBgCACQADAGAHAKQAIAJADgCIAHgRQAGgLAGAAQAGABANgBIASgBQADACgHALQgFANAJAAQANABAQAJIAPABQAJAEAHgKQAKgEgJAKQgJAEgLALQgJAKgMASQgOALgEACQACABACAIQABAHAQAHQAPAOgBAEQAAgBgdADQgNACgDgCQgEgDgLgBQgMgCgFgJIgEgIIgEAUQgCALgDABQgDABAAAFQADAKgOgBQgPADgJALQgHAEgJgBIgGACQgFAAABgFgABWAzIAAAAIAAAAg");
	this.shape_12.setTransform(293.2,-103.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#31471B").ss(1,1,1).p("AgVAAQAVABAJALIgHgjQAAABAGAMQAFALABAJQAAAGAHgOQAIgMAMgFQgCABgIAIQgIAGgBANQABgIAbgFQgDAAgHADQgIAEgCAEQgBABgBACAAeALQAEgEAPACQgHAAgNAJIAHACIgNAAIABAEIgGgHIgOAHIAIgJIgUACIAIgHQAAgCgQgHQgCgBgDAAQgBAAgBAAQgUAAgGAAQAPgCANAC");
	this.shape_13.setTransform(293.1,-94.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3D8758").s().p("AAEARIgMAHIAIgJIgWACIAJgHQgBgCgQgHIgFgBQAWABAKALIgHgjIAGANQAEALAAAJQAAAGAHgOQAIgMAMgFIgKAJQgIAGgBANQABgIAbgFIgKADQgIAEgCAEIgCADIACgDQAEgEAPACQgHAAgNAJIAHACIgNAAIABAEg");
	this.shape_14.setTransform(294.5,-94.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#31471B").ss(1,1,1).p("AABgdQABABAGAUQAGASgFAZQAAgCgFgXQgEgUgHgPQgHgLAIACQAGADABAB");
	this.shape_15.setTransform(293.7,-98.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D8758").s().p("AAEAKQgEgUgHgPQgHgLAIACIAHAEIAAABQABABAGAUQAGASgFAZIgFgZg");
	this.shape_16.setTransform(293.7,-98.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#31471B").ss(1,1,1).p("AAmgEQAAgCgYgBQgVgCgpASQAHgEAagFQAegIAWAIQARAKgHgHQgGgFgDgCg");
	this.shape_17.setTransform(283.8,-95.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3D8758").s().p("AAOgHQAYABAAACIAJAHQAHAHgRgKQgWgIgeAIQgaAFgHAEQApgSAVACg");
	this.shape_18.setTransform(283.8,-95.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#31471B").ss(1,1,1).p("Ag7ALQAHgEAdgHQAjgMAhALQAaAJgLgIQgLgIgEgCQgBgCgfABQgcAAgsAWQgCABgBAA");
	this.shape_19.setTransform(283.3,-95.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3D8758").s().p("AALgKQAfgBABACIAPAJQAMAJgbgJQghgLgiALQgdAIgIAEQAsgWAcAAg");
	this.shape_20.setTransform(283.5,-95.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#31471B").ss(1,1,1).p("AAlgEQgCgBgbgFQgZgFgeAGQAFgBAdABQAeAAAVAOQAPAOgHgLQgHgJgCgDg");
	this.shape_21.setTransform(283.7,-97.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3D8758").s().p("AAmAFQgVgOgeAAQgdgBgFABQAegGAZAFIAdAGIAJAMQABACABAAQAAABAAABQAAAAAAABQAAAAAAAAQgBAAgJgIg");
	this.shape_22.setTransform(283.7,-97.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#31471B").ss(1,1,1).p("AAlgCQgBgBgZgGQgWgFgeAGQAEgBAgAEQAdADANAJQAHAKgDgKQgDgHgBgCg");
	this.shape_23.setTransform(284.5,-98.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D8758").s().p("AAlAHQgNgJgdgDQgggEgEABQAegGAWAFIAaAHIAEAJQAAACABABQAAAAAAABQAAABAAAAQAAAAgBAAQgBAAgDgFg");
	this.shape_24.setTransform(284.5,-98.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#31471B").ss(1,1,1).p("AAgARQgBgCgVgWQgTgXgfgMQAEACAUAPQAWARAXAfQASAdgIgNQgIgNgCgEg");
	this.shape_25.setTransform(282.2,-104.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3D8758").s().p("AAdAXQgXgfgWgRIgYgRQAfAMATAXQAVAWABACIgDAFIAKARIACAEIgMgUg");
	this.shape_26.setTransform(282.2,-104.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#31471B").ss(1,1,1).p("AAVAnQgBACgSgWQgQgUgbg/QAAAEAPAoQAQAmAgAgQAdAYgNgPQgNgQgEgEg");
	this.shape_27.setTransform(284.2,-107.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D8758").s().p("AAWAyQgggggQgmQgPgoAAgEQAbA/AQAUQASAWABgCIARAUQAFAGgBAAQgDAAgRgPg");
	this.shape_28.setTransform(284.2,-107.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#31471B").ss(1,1,1).p("AgBg3QABAAAFATQAHATgJAdQgIAdgEAHIgCAGIAJACQACgCAGgdQAJgagFgaQgGgXgDgDQgCgEAAACg");
	this.shape_29.setTransform(299.3,-113.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3D8758").s().p("AgLA2IACgGIAMgkQAJgdgHgTQgFgTgBAAQAAAAAAAAQAAgBABABQAAAAAAABQAAAAABABQADADAGAXQAFAagJAaQgGAdgCACg");
	this.shape_30.setTransform(299.3,-113.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#31471B").ss(1,1,1).p("AgfAUQADgDANgRQANgRAMgIQAegFAEAIQABgGgYgDQgVgFghAxQgPAaAHgIQAIgIACgDg");
	this.shape_31.setTransform(304.5,-108.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3D8758").s().p("AghANQAhgxAVAFQAYADgBAGQgEgIgeAFQgMAIgNARIgQAUIgKALIgCACQgCAAAMgUg");
	this.shape_32.setTransform(304.5,-108.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#31471B").ss(1,1,1).p("AAAAnQAAgBAJgaQAIgYgHglQAAAFgBAXQgBAZgMAcQgNAXAIgGQAHgHACgDg");
	this.shape_33.setTransform(301.1,-110.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3D8758").s().p("AgEAgQAMgcABgZIABgcQAHAlgIAYQgJAaAAABIgJAKIgDABQgCAAAKgSg");
	this.shape_34.setTransform(301.1,-110.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#31471B").ss(1,1,1).p("AgZgBQAHgJA/AAQgDABgeAGQgcAEgUAIQgOAFALgHQALgHADgBg");
	this.shape_35.setTransform(300.7,-102.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3D8758").s().p("AgnAHIAOgIQAHgJA/AAIghAHQgcAEgUAIIgHACQgCAAAGgEg");
	this.shape_36.setTransform(300.7,-102.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#31471B").ss(1,1,1).p("AgqAQQACgDAdgPQAcgRAnAAQgBgBgbAAQgaAAgiAVQgeAWAIgDQAJgCADgCg");
	this.shape_37.setTransform(303.1,-105);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3D8758").s().p("AggABQAigVAaAAQAbAAABABQgnAAgcARQgdAPgCADIgMAEIgBABQgEAAAbgUg");
	this.shape_38.setTransform(303.1,-105);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#31471B").ss(1,1,1).p("AgGggQABACAKAXQAMAWABAWQAAgCgJgXQgIgUgLgRQgLgNAGACQAHACACACg");
	this.shape_39.setTransform(297.8,-96.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#31471B").ss(1,1,1).p("AgYgdQACAAATAKQARAKAIAKQAGAbgEACQAEgFgPgZQgKgJgMgFQgOgGgBAAg");
	this.shape_40.setTransform(299.9,-96.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3D8758").s().p("AANAAQgKgJgMgGIgPgFIAAgJIAVAKQARAKAIAKQAGAbgEACQAEgGgPgYg");
	this.shape_41.setTransform(299.9,-96.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#31471B").ss(1,1,1).p("AAeAaQgCgEgHgKQgJgMgXgJQgYgIAIgGQAIgGANADQACAAAMAOQANAMAJAaQAAABAAAB");
	this.shape_42.setTransform(299.4,-99.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3D8758").s().p("AAVANQgJgNgXgIQgYgIAIgGQAIgGANADQACAAAMAOQANALAJAbIgJgOg");
	this.shape_43.setTransform(299.4,-99.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F4C6E0").s().p("AgHAXQgHAHgDgMQgCgOgGABQgFADADgIQAOgfABAYQgEAgAXggQAcgfgHAQQgFAEgSAbIgLAUQAEgMgFAGg");
	this.shape_44.setTransform(273,-121.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F4C6E0").s().p("AgeARQAtgVAQgNIgFAFQgSATgRAGQgQAFgEAAIgBgBg");
	this.shape_45.setTransform(280.8,-114.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F4C6E0").s().p("AgTARQgLgHgJgBQAHgBAEgGQAAgFgGgGQgGgHATgEQgBAAgDAJQgCAJAOAHQAQAIARACIAUACIgZADIgOABQgMAAgIgEg");
	this.shape_46.setTransform(277.9,-103.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4C6E0").s().p("AgHATIAAgSQAHgfAIAEQgGACgDAeIgFAVIgBgIg");
	this.shape_47.setTransform(261.8,-101.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4C6E0").s().p("AgWA4QgCgDAKgQQAOgcgBgkQABgWALgFQAKgEACABIgNAMQgKAGAAArQAAAYAAACQABACgIALIgMAPIgDgCg");
	this.shape_48.setTransform(259.5,-100.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4C6E0").s().p("AAAgJQASADAEAGQgCgBgKgEQgKgDgVASQACgIATgLg");
	this.shape_49.setTransform(257.6,-111.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4C6E0").s().p("AggAPQAKgCAEgJQAIgNASADQAbgFAIgFQgHAFgiAJQgQAFgGAJQgQAFgGAAIAKgCg");
	this.shape_50.setTransform(254.5,-108);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4C6E0").s().p("AgBAJQgDgdgGgJQACABAHAJQAGAJgDAMQABAbAIABIgBAAQgIAAgDgVg");
	this.shape_51.setTransform(260.4,-119.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4C6E0").s().p("AAPA9QgRgEgEgUQADglgLgVQgTgjgCgHQAEABASATQAQASABAZQgFA0AkAMIgBAAIgTgDg");
	this.shape_52.setTransform(258.9,-119.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F4C6E0").ss(0.1,1,1).p("AAAgFIAAAL");
	this.shape_53.setTransform(267.2,-119);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F4C6E0").ss(0.1,1,1).p("AgMAAQAGAAATAB");
	this.shape_54.setTransform(258.9,-112.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E4E217").s().p("AgXBXQABgYAEgOQAFgNgMASQgbAxAKgWQAHgYAAgEQgDgDgQAKQgQADAHgOQASgQgJgCQgGgCAEgDIgIAEIgdAOQgNAGADgJQAGgKAKgFQAKgFgGgEQgKgEgHAAQgHgBAKgBQAOAAANACQANABgOgFQgZgIAEAAQgEgJAaAEQAEABARAAQARAAgXgKQgagNgDgLQgEgLAJAGQAJAIAJAHQAIAGgJgRQgTglARAUQAJAMALAJQALAIgIgRQgTgiAEgEQAFgIALAXQAPAZAGgTQAAgHAEAEQAEAEAEgLQAFgPAEgIQAFgJgFARQgIAkAUgVQAWgWgVAgQgLAPAHAAQAHAAAHgFQAPgHgGAKQgQAKAfAAQAXgBAWgEQAWgEgaAIIgyAMQgRADAVAHQAnANgUAAQgFACAEAHQAEAJgCABQgRgGgVgDQgEACARAKQARAKACAPQgCAJgEACIADAFQgBAEgLgCQgGgBgFgDQALAMAAAFQgMACgSgYQgNgSgIAVIgJAgQgCAJgCAAQgCAAAAgKg");
	this.shape_55.setTransform(268.9,-111.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F4C6E0").ss(0.1,1,1).p("ABXASQAIgDAZgVQAOgTAFgJQAFgJALgMQAUgSAQgHQAOgSgQAIQgMARgPgIQgGgEgFAEQgEAEgLgEQgdgRgXgBQgOgBAIgWQAMgTgFgCQgIgBgWABQgXACgLgCQgKABgLATQgKAUgDAJQgEAEgOgRQgOgQgDgKQgCgHgFAFQgFAEgTgEQgngSgWgLQgQgCAUAYQARAcgCAwQgEAVAAAHQABAHAOAIQgIAAgPAPQgJAOgOABQgLABABAGQgJAFgWAaQAGgEAJAHQAEAEAPAAQAPABACAAQAHgBAUAFQAJAAADgCQADgBAAgDAhrA3QgDAJgBAaQACANAAAFQgBAEgDAKQgGAXABALQgDAOAUgHQAQACAMgJQAQgSAZgEQAYABgEgRQgBgJAFgCQAFgCAFgSQAHgbAAgIQACAEAFAKQAJAQAVADQATACAGAEQAFAEAYgDQAygGgCACQACgFgZgaQgcgMgCgLQgDgOgFgCQgBgBgCAAAAJA0QABgFgCAB");
	this.shape_56.setTransform(268.6,-110.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AE76A5").s().p("Ah2CcQgBgLAGgXIAEgOQAAgFgCgNQABgaADgJQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgDACgJAAQgUgFgHABIgRgBQgPAAgEgEQgJgHgGAEQAWgaAJgFQgBgGALgBQAOgBAJgOQAPgPAIAAQgOgIgBgHQAAgHAEgVQACgwgRgcQgUgYAQACIA9AdQATAEAFgEQAFgFACAHQADAKAOAQQAOARAEgEIANgdQALgTAKgBQALACAXgCQAWgBAIABQAFACgMATQgIAWAOABQAXABAdARQALAEAEgEQAFgEAGAEQAPAIAMgRQAQgIgOASQgQAHgUASQgLAMgFAJQgFAJgOATQgZAVgIADIgDgBIADABQAFACADAOQACALAcAMQAZAZgCAFQAAgBgwAGQgYADgFgEQgGgEgTgCQgVgDgJgQIgHgOIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIAAAAIgBAAIABAAIAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAABQAAAIgHAbQgFASgFACQgFACABAJQAEARgYgBQgZAEgQASQgMAJgQgCQgHACgDAAQgJAAACgJgACUBXIAAABIAAgBg");
	this.shape_57.setTransform(268.6,-110.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#31471B").ss(0.1,1,1).p("AgnAAQAnACAQAUIgNg/QABACAJAVQAJAUACAPQABAKAMgXQAMgWAWgIQgDABgOANQgOAMgCAWQAAgCANgKQAOgKAXAAQgCAAgRAHQgRAIgDAKQABgDAIgGQAJgHARAGQgBAAgNAFQgOADgFAJIAMADIgXAAIABAHIgKgMIgYAMIAOgPIglACIAQgMQgCgCgbgMQgFgDgFAAQgBAAgCAAQgogBgFABQAZgFAXAFg");
	this.shape_58.setTransform(268.5,-94.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3D8758").s().p("AAHAfIgWALIANgPIgmACIAQgMQgCgCgbgMIgKgDQAnABASAVIgNg/IAKAXQAJAUAAAPQAAAKANgXQAMgWAVgJQgCACgOANQgPAMgCAWIAAAAIAAAAQABgCANgKQAOgKAXAAIgTAGQgRAIgDAKQABgCAIgGQAJgHARAGIgPAFQgNADgGAIIAMADIgWAAIABAIg");
	this.shape_59.setTransform(270.9,-94.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#31471B").ss(0.1,1,1).p("AABgzQADACAKAiQALAggJAsQAAgEgIgnQgIgkgNgaQgMgTAMAEQANAEABAC");
	this.shape_60.setTransform(269.5,-101.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3D8758").s().p("AAIASQgIgkgNgaQgMgTAMAEQANAEABACIAAACQADACAKAiQALAggJAsIgIgrg");
	this.shape_61.setTransform(269.5,-101.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#31471B").ss(0.1,1,1).p("AhTAPQAKgFAvgKQA1gPAnAPQAdARgMgMQgLgKgFgDQAAgDgpgDQgmgDhHAgQgBAAgCAB");
	this.shape_62.setTransform(252.4,-96.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D8758").s().p("AAZgOQApAEAAADQAFADALAKQAMAMgdgRQgngPg1AOQgvALgKAEQBHggAmADg");
	this.shape_63.setTransform(252.5,-96.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#31471B").ss(0.1,1,1).p("AhmATQgDABgDACAhmATQAPgHAugNQA9gVA5ATQAuASgUgPQgTgOgHgEQgCgDg1ABQgxABhLAmg");
	this.shape_64.setTransform(251.7,-97);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3D8758").s().p("AATgTQA1gBACADIAaASQAUAQgugSQg5gTg9AUQguAOgPAGQBLglAxgCg");
	this.shape_65.setTransform(252,-97.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#31471B").ss(0.1,1,1).p("AhRgRQAMgBAuABQA2ABAkAZQAaAYgMgTQgLgRgEgEQgDgCgwgJQgsgIg0AJQgBAAgCAB");
	this.shape_66.setTransform(252.1,-100.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3D8758").s().p("ABBAJQgkgZg1gBQgvgBgLABQA0gJAsAIQAvAJADACQAEAEAMARQAFAJgCAAQgDAAgPgOg");
	this.shape_67.setTransform(252.2,-100.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#31471B").ss(0.1,1,1).p("ABAgEQgDgCgpgKQgogJg0AKQAHAAA2AFQA0AGAWARQANARgFgQQgFgOgCgEg");
	this.shape_68.setTransform(253.6,-102.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3D8758").s().p("AA/ANQgWgRg0gGQg2gFgHAAQA0gKAoAJQApAKADACIAHASQADAHgCAAQgCAAgHgIg");
	this.shape_69.setTransform(253.6,-102.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#31471B").ss(0.1,1,1).p("AA7AiQgCgFglgnQgjgog2gUQAFACAnAbQAnAeAnA3IARAbQgNgWgEgHg");
	this.shape_70.setTransform(249.5,-112.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3D8758").s().p("AA1AsQgng3gngeQgmgbgGgCQA2AUAjAoQAlAnABAFIgFAIIARAdg");
	this.shape_71.setTransform(249.5,-112.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#31471B").ss(0.1,1,1).p("AAkBEQgBADgggmQgdgjguhtQAAAGAbBGQAbBDA4A3QAzAqgXgbQgXgagHgIg");
	this.shape_72.setTransform(253.2,-116.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3D8758").s().p("AAmBXQg4g3gbhDQgbhGAAgGQAuBtAdAjQAgAmABgDIAeAiQAJAKgDAAQgDAAgfgZg");
	this.shape_73.setTransform(253.2,-116.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#31471B").ss(0.1,1,1).p("AAGAWQgQAygGAMQgEAIAAABIAPAFQADgEANgxQAPgvgIguQgKgngHgGQgEgFAAACQADABAKAhQAMAhgQAzg");
	this.shape_74.setTransform(279.1,-127.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3D8758").s().p("AgUBdIAEgJQAGgMAQgyQAQgzgMghQgKghgDgBQAAgCAEAFQAHAGAKAnQAIAugPAvQgNAxgDAEg");
	this.shape_75.setTransform(279.1,-127.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#31471B").ss(0.1,1,1).p("AAlg3QgUABgWAPQgXAQgeAuQgaAsANgNQANgOAEgFQAEgGAXgdQAXgeAVgPQAXgJASAHQASAHABABQAAgBgKgIQgJgIgVABg");
	this.shape_76.setTransform(288.2,-118.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3D8758").s().p("Ag6AXQAeguAXgQQAWgPAUgBQAVgBAJAIIAKAJQgBgBgSgHQgSgHgXAJQgVAPgXAeIgbAjIgRATIgEADQgDAAAUgig");
	this.shape_77.setTransform(288.2,-118.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#31471B").ss(0.1,1,1).p("AAABEQABgCAPgtQAOgrgNhAQABAIgCApQgCAsgWAxQgWAoANgMQAOgLADgFg");
	this.shape_78.setTransform(282.2,-122.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3D8758").s().p("AgIA4QAWgxACgsIABgxQANBAgOArQgPAtgBACQgDAFgOALIgEADQgEAAARgfg");
	this.shape_79.setTransform(282.2,-122.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#31471B").ss(0.1,1,1).p("AgtgCQACgCAjgJQAigKAzAGQgFABg0AKQgxAJgiAOQgYAJATgNQASgNAFgCg");
	this.shape_80.setTransform(281.6,-109.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3D8758").s().p("AhEANQASgNAFgCQACgCAjgJQAigKAzAGIg5ALQgxAJgiAOQgKADgDAAQgDAAALgHg");
	this.shape_81.setTransform(281.6,-109.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#31471B").ss(0.1,1,1).p("AhJAcQADgFAzgbQAwgdBFAAQgCgDguABQguABg8AkQg1AmAPgEQAPgFAGgDg");
	this.shape_82.setTransform(285.6,-113);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3D8758").s().p("Ag4ACQA8gkAugBQAugBACADQhFAAgwAdQgzAbgDAFQgGADgPAFIgCAAQgHAAAvgig");
	this.shape_83.setTransform(285.6,-113);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#31471B").ss(0.1,1,1).p("AgLg4QADADASApQAVAmABAmQgBgEgOgmQgOgkgVgeQgUgXAMAEQALAEAEADg");
	this.shape_84.setTransform(276.5,-98.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3D8758").s().p("AARAWQgOgkgVgeQgUgXAMAEQALAEAEADQADADASApQAVAmABAmQgBgEgOgmg");
	this.shape_85.setTransform(276.5,-98.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#31471B").ss(0.1,1,1).p("AgqgzQAEABAgAQQAfARANATQALAugHAEQABgBgCgRQgDgRgPgRQgSgRgWgJQgYgJgCAAg");
	this.shape_86.setTransform(280.2,-98.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3D8758").s().p("AApAiQgDgRgPgRQgSgSgWgJQgYgIgCgBIABgPQAEABAgAQQAfARANATQALAtgHAFQABgBgCgRg");
	this.shape_87.setTransform(280.2,-98.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#31471B").ss(0.1,1,1).p("AAzAsQgEgHgKgQQgRgXgpgPQgogOANgKQAOgKAXAFQADAAAVAYQAXAWAPAsQABACAAAD");
	this.shape_88.setTransform(279.4,-103.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3D8758").s().p("AAlAXQgQgXgqgPQgogOAOgKQANgKAYAFQACAAAWAYQAWAVAPAtIgOgXg");
	this.shape_89.setTransform(279.3,-104);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6B7F1A").s().p("AAZAbQgXAOgKAVQARgwguAQQgaAJgLgDQgLgFADgfQgHACgHAJQAAgRgQgGIBTAXIADhQQAAAeAJAcQADgOAKgKIABAIQAIgNARgKIAAAZQAXgUAYgRQgDAegKAdQAbgVAYgYQABAYgEAYIAJgPQgCALgFAHQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgKAggRAfQAHgTgGgRQgLAKgGALIgBgJIgRAdQgEgZgOgSg");
	this.shape_90.setTransform(287.8,49.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F4C6E0").s().p("AgEANQgEAEgBgHQgCgIgDABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBABAAQAIgSABAOQgDASANgSQAQgSgEAKQgDACgKAPIgGAMQADgHgEADg");
	this.shape_91.setTransform(-254,41.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F4C6E0").s().p("AgKAKQgHgFgGAAIAIgEQAAgCgDgEQgEgDALgDQgGADALALQAXAIAHgBIgPACIgIAAQgGAAgFgCg");
	this.shape_92.setTransform(-251.3,51.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F4C6E0").s().p("AgDALIgBgKQAEgSAFADQgEABgBARIgCAMIgBgFg");
	this.shape_93.setTransform(-260.5,53.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F4C6E0").s().p("AgIAVQAIgQAAgUQAGgWAHAFIgIAHQgFADAAAYQAAAOAAABQAAABgEAHQgHAIAAABIAAAAQgDAAAGgNg");
	this.shape_94.setTransform(-261.9,54);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F4C6E0").s().p("AAAgEQAKABADADIgHgCQgGgCgMAJQABgFALgEg");
	this.shape_95.setTransform(-262.9,47.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F4C6E0").s().p("AgMACQAEgGAKABQAQgCAEgDQgDADgTAFQgKACgDAFIgIACQADgBAGgGg");
	this.shape_96.setTransform(-264.5,49.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F4C6E0").s().p("AAAAFQgBgQgEgFQAFABACAQQAAAQAEAAIAAAAQgFAAgBgMg");
	this.shape_97.setTransform(-261.3,42.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F4C6E0").s().p("AAIAjQgJgCgCgMQACgVgGgMQgMgUgBgEIANAMQAIAKABAOQgCAeAUAHIAAAAIgMgCg");
	this.shape_98.setTransform(-262.2,43);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#F4C6E0").ss(1,1,1).p("AAAgCIAAAF");
	this.shape_99.setTransform(-257.4,43.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#F4C6E0").ss(1,1,1).p("AgGAAQADAAAKAA");
	this.shape_100.setTransform(-262.2,46.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E4E217").s().p("AgNAyQAHgjgIAPQgQAdAGgNIAEgQQgBgCgKAGQgJABAEgIQAKgJgFgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQABAAAAgBIgFACQgWAOAAgHQANgLgCgDQgPgDAHgBIAQABQAHABgIgDQgOgEACAAQgCgFAPADIAMAAQAKAAgOgGQgbgTANACQAQAQgFgNQgLgVAJALQARAUgDgNQgLgUACgCQADgFAGANQAJAPADgLQAAgEADACQACADACgHQAIgWgEANQgDAVALgMQAMgMgMASQgHAPANgJQAJgEgEAFQgJAGASAAIAagDQANgCgPAFQgtAHASAFQAXAIgMAAQgBAEABAHQgJgEgMgCQgCABAJAGQAKAGABAJQgBAFgCABIACADQgFAEgKgGIABABQAGAHAAADQgGABgLgOQgHgLgEANIgFASQgCAGgBAAQgBAAAAgGg");
	this.shape_101.setTransform(-256.4,47.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#F4C6E0").ss(1,1,1).p("Ag9AgQgCAFgBAPQADALgEAIQgDANAAAGQgCAIAMgEQAJACAHgGQAJgKAPgDQAOABgDgKQAAgFADgBQADgBACgLQAEgPAAgFQABACADAGQAFAJAMACQALABAEADQADACANgCQAegDgBABQABgDgPgPQgQgHgBgHQgCgIgCgBQAEgCAOgLQAMgSAJgKQALgLAJgEQAJgKgKAEQgHAKgJgEQgEAAgLgBQgQgJgNgBQgJAAAFgNQAHgLgDgCQgFAAgNABQgNABgGgBQgGAAgGALQgFAMgCAFQgDACgIgJQgHgKgDgGQACgCgTABQgXgKgNgGQgJgCALAOQALAQgCAcQgHAUAOAFQgFAAgJAJQgFAHgIABQgGAAAAAEQgFADgNAPQAEgCAFADQACADAJAAQAJABABgBQAEAAAMADQAFAAACgBQABgBAAgC");
	this.shape_102.setTransform(-256.5,48.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#AE76A5").s().p("AhEBaQAAgGADgNQAEgIgDgLQABgPACgFIABgDIgBADIgHABIgQgDIgKAAQgJAAgCgDQgFgDgEACQANgPAFgDQAAgEAGAAQAIgBAFgHQAJgJAFAAQgOgFAHgUQACgcgLgQQgLgOAJACIAkAQQATgBgCACQADAGAHAKQAIAJADgCIAHgRQAGgLAGAAQAGABANgBIASgBQADACgHALQgFANAJAAQANABAQAJIAPABQAJAEAHgKQAKgEgJAKQgJAEgLALQgJAKgMASQgOALgEACQACABACAIQABAHAQAHQAPAPgBADQAAgBgdADQgNACgDgCQgEgDgLgBQgMgCgFgJIgEgIIgEAUQgCALgDABQgDABAAAFQADAKgOgBQgPADgJAKQgHAGgJgCIgGACQgFAAABgGgABWAzIAAAAIAAAAg");
	this.shape_103.setTransform(-256.5,48.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#31471B").ss(1,1,1).p("AgVAAQAVABAJALIgHgjQAAABAGAMQAFALABAJQAAAGAHgOQAIgMAMgFQgCABgIAIQgIAGgBANQABgIAbgFQgDAAgHADQgIAEgCAEQAEgEAPACQgHAAgNAJIAHACIgNAAIABAEIgGgHIgOAHIAIgJIgUACIAIgHQAAgCgQgHQgCgBgDAAQgBAAgBAAQgUAAgGAAQAPgCANACgAAeALQgBABgBAC");
	this.shape_104.setTransform(-256.6,57.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3D8758").s().p("AAEARIgMAHIAIgJIgWACIAJgHQgBgCgQgHIgFgBQAWABAKALIgHgjIAGANQAEALAAAJQAAAGAHgOQAIgMAMgFIgKAJQgIAGgBANQABgIAbgFIgKADQgIAEgCAEIgCADIACgDQAEgEAPACQgHAAgNAJIAHACIgNAAIABAEg");
	this.shape_105.setTransform(-255.2,57.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#31471B").ss(1,1,1).p("AABgdQABABAGAUQAGASgFAZQAAgCgFgXQgEgUgHgPQgHgLAIACQAGADABAB");
	this.shape_106.setTransform(-256.1,53.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3D8758").s().p("AAEAKQgEgUgHgPQgHgLAIACIAHAEIAAABQABABAGAUQAGASgFAZIgFgZg");
	this.shape_107.setTransform(-256.1,53.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#31471B").ss(1,1,1).p("AAmgEQAAgCgYgBQgVgCgpASQAHgEAagFQAegIAWAIQARAKgHgHQgGgFgDgCg");
	this.shape_108.setTransform(-265.9,56.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3D8758").s().p("AAOgHQAYABAAACIAJAHQAHAHgRgKQgWgIgeAIQgaAFgHAEQApgSAVACg");
	this.shape_109.setTransform(-265.9,56.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#31471B").ss(1,1,1).p("Ag7ALQAHgEAdgHQAjgMAhALQAaAJgLgIQgLgIgEgCQgBgCgfABQgcAAgsAWQgCABgBAA");
	this.shape_110.setTransform(-266.4,55.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3D8758").s().p("AALgKQAfgBABACIAPAJQAMAJgbgJQghgLgiALQgdAIgIAEQAsgWAcAAg");
	this.shape_111.setTransform(-266.3,55.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#31471B").ss(1,1,1).p("AAlgEQgCgBgbgFQgZgFgeAGQAFgBAdABQAeAAAVAOQAPAOgHgLQgGgJgDgDg");
	this.shape_112.setTransform(-266.1,53.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3D8758").s().p("AAmAFQgVgOgeAAQgdgBgFABQAegGAZAFIAdAGIAJAMQABACABAAQAAABAAABQAAAAAAABQAAAAAAAAQgBAAgJgIg");
	this.shape_113.setTransform(-266.1,53.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#31471B").ss(1,1,1).p("AAlgCQgBgBgZgGQgWgFgeAGQAEgBAgAEQAdADANAJQAHAKgDgKQgDgHgBgCg");
	this.shape_114.setTransform(-265.3,53);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3D8758").s().p("AAlAHQgNgJgdgDQgggEgEABQAegGAWAFIAaAHIAEAJQAAACABABQAAAAAAABQAAABAAAAQAAAAgBAAQgBAAgDgFg");
	this.shape_115.setTransform(-265.3,53);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#31471B").ss(1,1,1).p("AAgARQgBgCgVgWQgTgXgfgMQAEACAUAPQAWARAXAfQASAdgIgNQgIgNgCgEg");
	this.shape_116.setTransform(-267.5,47);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3D8758").s().p("AAdAXQgXgfgWgRIgYgRQAfAMATAXQAVAWABACIgDAFIAKARIACAEIgMgUg");
	this.shape_117.setTransform(-267.5,47);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#31471B").ss(1,1,1).p("AAVAnQgBACgSgWQgQgUgbg/QAAAEAPAoQAQAmAgAgQAdAYgNgPQgNgQgEgEg");
	this.shape_118.setTransform(-265.5,44.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3D8758").s().p("AAWAyQgggggQgmQgPgoAAgEQAbA/AQAUQASAWABgCIARAUQAFAGgBAAQgDAAgRgPg");
	this.shape_119.setTransform(-265.5,44.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#31471B").ss(1,1,1).p("AgBg3QABAAAFATQAHATgJAdQgIAdgEAHIgCAGIAJACQACgCAGgdQAJgagFgaQgGgXgDgDQgCgEAAACg");
	this.shape_120.setTransform(-250.5,38.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3D8758").s().p("AgLA2IACgGIAMgkQAJgdgHgTQgFgTgBAAQAAAAAAAAQAAgBABABQAAAAAAABQAAAAABABQADADAGAXQAFAagJAaQgGAdgCACg");
	this.shape_121.setTransform(-250.5,38.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#31471B").ss(1,1,1).p("AgfAUQADgDANgRQANgRAMgIQAegFAEAIQABgGgYgDQgVgFghAxQgPAaAHgIQAIgIACgDg");
	this.shape_122.setTransform(-245.2,43.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3D8758").s().p("AghANQAhgxAVAFQAYADgBAGQgEgIgeAFQgMAIgNARIgQAUIgKALIgCACQgCAAAMgUg");
	this.shape_123.setTransform(-245.2,43.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#31471B").ss(1,1,1).p("AAAAnQAAgBAJgaQAIgYgHglQAAAFgBAXQgBAZgMAcQgNAXAIgGQAHgHACgDg");
	this.shape_124.setTransform(-248.7,40.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3D8758").s().p("AgEAgQAMgcABgZIABgcQAHAlgIAYQgJAaAAABIgJAKIgDABQgCAAAKgSg");
	this.shape_125.setTransform(-248.7,40.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#31471B").ss(1,1,1).p("AgZgBQAHgJA/AAQgDABgeAGQgcAEgUAIQgOAFALgHQALgHADgBg");
	this.shape_126.setTransform(-249,48.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3D8758").s().p("AgnAHIAOgIQAHgJA/AAIghAHQgcAEgUAIIgHACQgCAAAGgEg");
	this.shape_127.setTransform(-249,48.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#31471B").ss(1,1,1).p("AgqAQQACgDAdgPQAcgRAnAAQgBgBgbAAQgaAAgiAVQgeAWAIgDQAJgCADgCg");
	this.shape_128.setTransform(-246.7,46.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3D8758").s().p("AggABQAigVAaAAQAbAAABABQgnAAgcARQgdAPgCADIgMAEIgBABQgEAAAbgUg");
	this.shape_129.setTransform(-246.7,46.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#31471B").ss(1,1,1).p("AgGggQABACAKAXQAMAWABAWQAAgCgJgXQgIgUgLgRQgLgNAGACQAHACACACg");
	this.shape_130.setTransform(-252,55.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#31471B").ss(1,1,1).p("AgYgdQACAAATAKQARAJAHALQAHAagEADQADgFgOgZQgLgKgMgFQgOgFgBAAg");
	this.shape_131.setTransform(-249.8,55.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3D8758").s().p("AANAAQgLgJgMgGIgPgFIABgJIAVAKQARAKAHAKQAHAbgEACQADgGgOgYg");
	this.shape_132.setTransform(-249.8,55.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#31471B").ss(1,1,1).p("AAeAaQgCgEgHgKQgJgMgXgJQgYgIAIgGQAIgGANADQACAAAMAOQANAMAJAaQAAABAAAB");
	this.shape_133.setTransform(-250.3,51.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3D8758").s().p("AAVANQgJgNgXgIQgYgIAIgGQAIgGANADQACAAAMAOQANALAJAbIgJgOg");
	this.shape_134.setTransform(-250.3,51.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F4C6E0").s().p("AgHAXQgHAHgDgMQgCgOgGABQgFADADgIQAOgfABAYQgEAgAXggQAcgfgHAQQgFAEgSAbIgLAUQAEgMgFAGg");
	this.shape_135.setTransform(-276.8,29.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F4C6E0").s().p("AgdARQAsgVAQgNIgFAFQgSATgRAGQgQAFgEAAIAAgBg");
	this.shape_136.setTransform(-269,37.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F4C6E0").s().p("AgTARQgLgHgJgBQAHgBADgGQABgFgGgGQgGgHATgEQgBAAgDAJQgCAJAOAHQAQAIARACIAUACIgZADIgOABQgMAAgIgEg");
	this.shape_137.setTransform(-271.9,47.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F4C6E0").s().p("AgHATIAAgSQAHgfAIAEQgGACgDAeIgFAVIgBgIg");
	this.shape_138.setTransform(-288,49.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F4C6E0").s().p("AgVA4QgDgDAKgQQAOgcgBgkQABgWALgFQAKgEACABIgNAMQgKAGAAArQAAAYAAACQABACgJALIgLAPIgCgCg");
	this.shape_139.setTransform(-290.3,51.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F4C6E0").s().p("AAAgJQATADADAGQgBgBgLgEQgKgDgVASQACgIATgLg");
	this.shape_140.setTransform(-292.1,40.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F4C6E0").s().p("AggAPQAKgCAEgJQAIgNASADQAbgFAIgFQgHAFgiAJQgRAFgFAJQgQAFgGAAIAKgCg");
	this.shape_141.setTransform(-295.3,43.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F4C6E0").s().p("AgBAJQgDgdgGgJIAJAKQAGAJgDAMQABAbAIABIgBAAQgIAAgDgVg");
	this.shape_142.setTransform(-289.3,32.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F4C6E0").s().p("AAOA9QgQgEgEgUQADglgKgVQgUgjgCgHQAEABASATQARASAAAZQgFA0AkAMIgBAAIgUgDg");
	this.shape_143.setTransform(-290.8,32.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#F4C6E0").ss(0.1,1,1).p("AAAgFIAAAL");
	this.shape_144.setTransform(-282.5,32.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#F4C6E0").ss(0.1,1,1).p("AgMAAQAGAAATAB");
	this.shape_145.setTransform(-290.8,39);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E4E217").s().p("AgXBXQABgZAEgNQAFgNgMASQgbAxAKgWQAHgYAAgEQgDgDgQAJQgQAEAHgOQASgQgJgCQgGgCAEgDQAEgCgMAGIgdAOQgNAGADgJQAGgKAKgFQAKgFgGgEQgKgEgHAAQgHgBAKgBQAOAAANACQANABgOgFQgZgIAEgBQgEgIAaAEQAEABARAAQARAAgXgKQgagNgDgLQgEgLAJAGQAJAIAJAHQAIAGgJgRQgTglARAUQAJAMALAJQALAIgIgRQgTgiAEgEQAFgIALAXQAPAZAGgTQAAgHAEAEQAEAEAEgLQAFgPAEgIQAFgJgFARQgIAkAUgVQAWgWgVAgQgLAPAHAAQAHAAAHgFQAPgHgGAKQgQAKAfAAQAXgBAWgEQAWgEgaAIIgyALQgRAEAVAHQAnANgUAAQgFACAEAHQAEAJgCABQgRgGgVgDQgEACARAKQARAKACAPQgCAJgDACIACAEQgBAEgLgBQgGgBgFgDQALAMAAAFQgMACgSgYQgNgSgIAVIgJAgQgCAJgCAAQgCAAAAgKg");
	this.shape_146.setTransform(-280.9,39.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#F4C6E0").ss(0.1,1,1).p("ABXASQAIgDAZgVQAOgTAFgJQAFgJALgMQAUgSAQgHQAOgSgQAIQgMARgPgIQgGgEgFAEQgEAEgLgEQgdgRgXgBQgOgBAIgWQAMgTgFgCQgIgBgWABQgXACgLgCQgKABgLATQgKAUgDAJQgEAEgOgRQgOgQgDgKQgCgHgFAFQgFAEgTgEQgngSgWgLQgQgCAUAYQARAcgCAwQgEAVAAAHQABAHAOAIQgIAAgPAPQgJAOgOABQgLABABAGQgJAFgWAaQAGgEAJAHQAEAEAPAAQAPABACAAQAHgBAUAFQAJAAADgCQADgBAAgDAAJA0QABgFgCABAAJA0QACAEAFAKQAJAQAVADQATACAGAEQAFAEAYgDQAygGgCACQACgFgZgaQgcgMgCgLQgDgOgFgCQgBgBgCAAAhrA3QgDAJgBAaQACANAAAFQgBAEgDAKQgGAXABALQgDAOAUgHQAQACAMgJQAQgSAZgEQAYABgEgRQgBgJAFgCQAFgCAFgSQAHgbAAgI");
	this.shape_147.setTransform(-281.1,41.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#AE76A5").s().p("Ah2CcQgBgLAGgXIAEgOQAAgFgCgNQABgaADgJQgDACgJAAQgUgFgHABIgRgBQgPAAgEgEQgJgHgGAEQAWgaAJgFQgBgGALgBQAOgBAJgOQAPgPAIAAQgOgIgBgHQAAgHAEgVQACgwgRgcQgUgYAQACIA9AdQATAEAFgEQAFgFACAHQADAKAOAQQAOARAEgEIANgdQALgTAKgBQALACAXgCQAWgBAIABQAFACgMATQgIAWAOABQAXABAdARQALAEAEgEQAFgEAGAEQAPAIAMgRQAQgIgOASQgQAHgUASQgLAMgFAJQgFAJgOATQgZAVgIADQAFACADAOQACALAcAMQAZAZgCAFQAAgBgwAGQgYADgFgEQgGgEgTgCQgVgDgJgQIgHgOIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIAAAAIAAAAIgBAAIABAAIAAAAIAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAABQAAAIgHAbQgFASgFACQgFACABAJQAEARgYgBQgZAEgQASQgMAJgQgCQgHACgDAAQgJAAACgJgAhrA3QABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAgABXASIgDgBIADABgACUBXIAAABIAAgBg");
	this.shape_148.setTransform(-281.1,41.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#31471B").ss(0.1,1,1).p("AgnAAQAnABAQAUIgNg+QABACAJAWQAJASACAQQABALAMgYQAMgWAWgJQgDACgOANQgOANgCAVQAAgBANgLQAOgKAXAAQgCAAgSAGQgQAJgDAKQABgDAIgGQAJgHARAHQgBAAgNAEQgOADgFAIIAMAEIgXAAIABAHIgKgLIgYALIAOgPIglACIAQgMQgCgCgbgMQgFgCgFgBQgBAAgCAAQgogBgFABQAZgFAXAFg");
	this.shape_149.setTransform(-281.2,57.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3D8758").s().p("AAHAfIgWALIANgPIgmACIAQgMQgCgCgbgMIgKgDQAnABASAVIgNg/IAKAXQAJAUAAAPQABALAMgYQAMgWAVgJQgCACgOANQgPAMgCAWIAAAAIAAAAQABgCANgKQAOgKAXAAIgUAGQgQAIgDAKQABgCAIgGQAJgHARAGIgPAFQgNADgGAIIAMADIgWAAIABAIg");
	this.shape_150.setTransform(-278.8,57.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#31471B").ss(0.1,1,1).p("AABgzQADACAKAiQALAggJAsQAAgEgIgnQgIgkgNgaQgMgTAMAEQANAEABAC");
	this.shape_151.setTransform(-280.3,50.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3D8758").s().p("AAIASQgIgkgNgaQgMgTAMAEQANAEABACIAAACQADACAKAiQALAggJAsIgIgrg");
	this.shape_152.setTransform(-280.3,50.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#31471B").ss(0.1,1,1).p("AhTAPQAKgFAvgKQA1gPAnAPQAdARgMgMQgLgKgFgDQAAgDgpgDQgmgDhHAgQgBAAgCAB");
	this.shape_153.setTransform(-297.3,55.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3D8758").s().p("AAZgOQApAEAAADQAFADALAKQAMAMgdgRQgngPg1AOQgvALgKAEQBHggAmADg");
	this.shape_154.setTransform(-297.2,55.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#31471B").ss(0.1,1,1).p("AhmATQAPgHAugNQA9gVA5ATQAuASgUgPQgTgOgHgEQgCgDg1ABQgxABhLAmQgDABgDAC");
	this.shape_155.setTransform(-298,54.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3D8758").s().p("AATgTQA1gBACADIAaASQAUAQgugSQg5gTg9AUQguAOgPAGQBLglAxgCg");
	this.shape_156.setTransform(-297.7,54.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#31471B").ss(0.1,1,1).p("AhRgRQAMgBAuABQA2ABAkAZQAaAYgMgTQgLgRgEgEQgDgCgwgJQgsgIg0AJQgBAAgCAB");
	this.shape_157.setTransform(-297.7,51.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3D8758").s().p("ABBAJQgkgZg1gBQgvgBgLABQA0gJAsAIQAvAJADACQAEAEAMARQAFAJgCAAQgDAAgPgOg");
	this.shape_158.setTransform(-297.5,51.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#31471B").ss(0.1,1,1).p("ABAgEQgDgCgpgKQgogJg0AKQAHAAA2AFQA0AGAWARQANARgFgQQgFgOgCgEg");
	this.shape_159.setTransform(-296.1,49.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3D8758").s().p("AA/ANQgWgRg0gGQg2gFgHAAQA0gKAoAJQApAKADACIAHASQADAHgCAAQgCAAgHgIg");
	this.shape_160.setTransform(-296.1,49.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#31471B").ss(0.1,1,1).p("AA7AiQgCgFglgnQgjgog2gUQAFACAnAbQAnAeAnA3IARAbQgNgWgEgHg");
	this.shape_161.setTransform(-300.3,39);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3D8758").s().p("AA0AsQgmg3gogeQglgbgGgCQA2AUAjAoQAlAnACAFIgHAIIASAdg");
	this.shape_162.setTransform(-300.3,39);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#31471B").ss(0.1,1,1).p("AAkBEQgBADgggmQgdgjguhtQAAAGAbBGQAbBDA4A3QAzAqgXgbQgXgagHgIg");
	this.shape_163.setTransform(-296.5,34.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3D8758").s().p("AAmBXQg4g3gbhDQgbhGAAgGQAuBtAdAjQAgAmABgDIAeAiQAJAKgDAAQgDAAgfgZg");
	this.shape_164.setTransform(-296.5,34.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#31471B").ss(0.1,1,1).p("AAGAWQgQAygGAMQgEAIAAABIAPAFQADgEANgxQAPgvgIguQgKgngHgGQgEgFAAACQADABAKAhQAMAhgQAzg");
	this.shape_165.setTransform(-270.6,23.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3D8758").s().p("AgUBdIAEgJQAGgMAQgyQAQgzgMghQgKghgDgBQAAgCAEAFQAHAGAKAnQAIAugPAvQgNAxgDAEg");
	this.shape_166.setTransform(-270.6,23.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#31471B").ss(0.1,1,1).p("AAlg3QgUABgWAPQgXAQgeAuQgaAsANgNQANgOAEgFQAEgGAXgdQAXgeAVgPQAXgJASAHQASAHABABQAAgBgKgIQgJgIgVABg");
	this.shape_167.setTransform(-261.6,32.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3D8758").s().p("Ag6AXQAeguAXgQQAWgPAUgBQAVgBAJAIIAKAJQgBgBgSgHQgSgHgXAJQgVAPgXAeIgbAjIgRATIgEADQgDAAAUgig");
	this.shape_168.setTransform(-261.6,32.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#31471B").ss(0.1,1,1).p("AAABEQABgCAPgtQAOgrgNhAQABAIgCApQgCAsgWAxQgWAoANgMQAOgLADgFg");
	this.shape_169.setTransform(-267.6,28.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3D8758").s().p("AgIA4QAWgxACgsIABgxQANBAgOArQgPAtgBACQgDAFgOALIgEADQgEAAARgfg");
	this.shape_170.setTransform(-267.6,28.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#31471B").ss(0.1,1,1).p("AgtgCQACgCAjgJQAigKAzAGQgFABg0AKQgxAJgiANQgYAKATgNQASgNAFgCg");
	this.shape_171.setTransform(-268.2,42.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#3D8758").s().p("AhEANQASgNAFgCQACgCAjgJQAigKAzAGIg5ALQgxAJgiANQgKAEgDAAQgDAAALgHg");
	this.shape_172.setTransform(-268.2,42.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#31471B").ss(0.1,1,1).p("AhJAcQADgFAzgbQAwgdBFAAQgCgDguABQguABg8AkQg1AmAPgEQAPgFAGgDg");
	this.shape_173.setTransform(-264.1,38.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3D8758").s().p("Ag4ACQA8gkAugBQAugBACADQhFAAgwAdQgzAbgDAFQgGADgPAFIgCAAQgHAAAvgig");
	this.shape_174.setTransform(-264.1,38.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#31471B").ss(0.1,1,1).p("AgLg4QADADASApQAVAmABAmQgBgEgOgmQgOgkgVgeQgUgXAMAEQALAEAEADg");
	this.shape_175.setTransform(-273.2,53.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#3D8758").s().p("AARAWQgOgkgVgeQgUgXAMAEQALAEAEADQADADASApQAVAmABAmQgBgEgOgmg");
	this.shape_176.setTransform(-273.2,53.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#31471B").ss(0.1,1,1).p("AgqgzQAEAAAgARQAfARANATQALAtgHAFQABgBgCgRQgDgRgPgRQgSgRgWgJQgYgKgCAAg");
	this.shape_177.setTransform(-269.6,53.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#3D8758").s().p("AApAiQgDgRgPgRQgSgSgWgJQgYgIgCgBIABgPQAEABAgAQQAfARANATQALAtgHAFQABgBgCgRg");
	this.shape_178.setTransform(-269.6,53.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#31471B").ss(0.1,1,1).p("AAzAsQgEgHgKgQQgRgXgpgPQgogOANgKQAOgKAXAFQADAAAVAYQAXAWAPAsQABACAAAD");
	this.shape_179.setTransform(-270.4,47.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#3D8758").s().p("AAlAXQgQgXgqgPQgogOAOgKQANgKAYAFQACAAAWAYQAWAVAPAtIgOgXg");
	this.shape_180.setTransform(-270.4,47.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#1A779E").s().p("AG8BoQhigahbgmQhbglh1geQingljAANQjAANivgFQAtg/B5gMQB5gMCEAKQCFAKBRADQAjABBuAUQBwAUCFAeQCFAdBhAaQBiAcAGAQQAEAegDAgIgoAAQhwAAhTgVg");
	this.shape_181.setTransform(48.9,139.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#1A779E").s().p("AibApQhmghAigZQAjgaBlgJQBkgIBhAUQBiAUAZA6IjFAPQggACgcAAQhKAAg5gOg");
	this.shape_182.setTransform(-69.1,121.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#6B7F1A").s().p("AGzHSQgIgpgRgqQgegPgQgRQgPgRgTgSQgBgjgEgkQgSgCgTgBQgYgfgMgIQgNgJgvABIAygxQhtgFhuADQAYgOAagOQAEgSAFgcQAEgcAAgVQgvAKguAXQgxAWgwARQABgmAKgjQAKgiACgmIjBgDQAIgQAEgaQAEgbAJgPQhKAFg0giQg0ghhGgCQA0gIAsgRQAsgSAJgqIg1gFQAcgaAngXIAAgRQABgPgBgBQgvgYgggZIgCgBQClgNCkgbQCigaClgYQh8AtiFAqQAiATAiAYQAjAXAPAZQAjAtBKAIQBJAJAVAmQACAlgOAiQgOAhAkAlQAdAQAoABQAoAAAdAQQgvAOg3gFQg2gGgsAJQgrAIgPA1IglAAQAYAdArASQAqASALAjQAKARAtAGIBTAKQgWAggLAiQgLAjAaAgQAQAGAegGQgMAqARANQARAOAgADQgBCKgDAeQgzgIgIgqg");
	this.shape_183.setTransform(252.2,-58.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1.8,1,1).p("AH6oYQjsAPjnApQjlApjpAUQABAAABABQAgAZAwAYQABABgBAQQAAAPAAACQgoAXgbAcQAaABAbADQgJAsgtARQgsARg0AJQBGACA1AhQA1AjBKgFQgJAPgEAbQgEAbgIAPQBiACBhACQgCAngKAhQgKAkgCAnQAxgRAxgXQAwgWAvgLQAAAWgFAcQgEAcgFATQgaAOgYAPQBvgDBuAFQgXAXgbAaQAwgBAMAJQANAIAYAgQATABATACQADAlACAjQATASAPASQAQARAeAPQARArAIAqQAJArA0AHQADgiABijQAAikABjJQAAjKABiXQABiXACgHg");
	this.shape_184.setTransform(251.9,-59);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#79971C").s().p("AG0HnQgIgrgRgrQgegOgQgRQgPgSgTgSQgCgkgDgkQgTgDgTgBQgYgegNgJQgMgJgwABIAygyQhugEhvACQAYgOAagOQAFgTAEgcQAFgcAAgWQgvALgwAWQgxAXgxARQACgmAKglQAKghACgmIjDgFQAIgPAEgbQAEgbAJgPQhKAFg1giQg1gjhGgBQA0gJAsgRQAtgRAJgsIg1gEQAbgcAogXIAAgRQABgPgBgCQgwgYgggZIgCgBQDpgUDlgpQDngpDsgPQgCAIgBCWIgBFiIgBFrQgBCkgDAiQg0gIgJgqg");
	this.shape_185.setTransform(251.9,-59);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#6B7F1A").s().p("AjRlKIBUAeQBQAdBhAuQBiAvA8A1QgqgEgnACQgnADgeAdQgWAVAYAbQAYAbgHAaIgcAAQgLAPAQAQQAQAPgDABQgmAMguABQgvAAgRAaQgRA4gmAtQgoAugRAqIgSAyg");
	this.shape_186.setTransform(-274,-75.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(1.8,1,1).p("ABQk6Qg2g4hkgyQhmgyhWgfQhWgggFgBIAAQtQAZgYAVgcQAhg8gEhPQgBgJAAgIQgHh4ArhFQAshFCYAMQgEgDgMgKQgMgKgBgBQBegDBhgBQACgYACgXQB2gCB1gCQgEgDg+hIQg+hIhChMQhBhMgPgRg");
	this.shape_187.setTransform(-259.6,-54.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#79971C").s().p("AlhoWQAFABBWAgQBWAfBmAyQBkAyA2A4IBQBdICACUIBCBLIjrAEIgEAvIi/AEIANALIAQANQiYgMgsBFQgrBFAHB4IABARQAEBPghA8QgVAcgZAYg");
	this.shape_188.setTransform(-259.6,-54.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6B7F1A").s().p("Aj/muIAngBQAMAYATAEQATAEAQAPQAJANAMAaQANAaAIAJQgJAhAhAaQAiAZAAAhQgLAagVAZQgUAZAYANIBPApQAnAUAwgEQgHAfAHAQQBNAqBbgSQhbA3hNBCQgeArAgAkQAhAkAoAeQAFAIgEAOQgEAOAMANQhkgJhkAHQhmAGhPA1IguAkg");
	this.shape_189.setTransform(-269.4,65.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1.8,1,1).p("ABLjyQgcgEhHgYQgsgTgygrQgzgrghggQgIgKgMgbQgNgbgIgNQgQgQgUgEQgTgEgMgaQgTABgUAAIAAQsQBXgTBaAIQgEgkgcgSQgdgSgEgeQBUAABUAAQgdgHgQgZQgRgZAGgbQAkAVAmAVQAlAVAbgEQBTgHBOgvQBPguBhgBQgKgmgqgbQgpgagmgTQAigQgJgQQgKgPgPgRQgQgQAQgVQAPgJAWAHQAWAHAQgWQgcgCgYgLQgYgLgbgBQAtgJAdgeQAdgdAfgbQAAgCgBAAQgjglgugjQgugjgpghQg1gsgcgEg");
	this.shape_190.setTransform(-260,71.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#79971C").s().p("AldoVQAUAAATgBQAMAaATAEQAUAEAQAQQAIANANAbQAMAbAIAKQAhAgAzArQAyArAsATQBHAYAcAEQAcAEA1AsIBXBEQAuAjAjAlIABACQgfAbgdAdQgdAegtAJQAbABAYALQAYALAcACQgQAWgWgHQgWgHgPAJQgQAVAQAQQAPARAKAPQAJAQgiAQQAmATApAaQAqAbAKAmQhhABhPAuQhOAvhTAHQgbAEglgVIhKgqQgGAbARAZQAQAZAdAHIioAAQAEAeAdASQAcASAEAkQhagIhXATg");
	this.shape_191.setTransform(-260,71.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#633915").s().p("AmWmZQBtAmBxAcQBxAcBmAvQA9ASBLgOQBKgNAhAqQAmAsAqAmQApAmAKAxQAGAGgOACQgOACgPgBQgLA5g0AKQg1AKg1AOQgNACgKARQgKARgNAOQgRAHgegHQAlAjAtASQAsATAXAuQhbgjhYgdQhXgchNAiQghAVAOA0QANAzAYA1Qg+gZg3geQg2geg+AaQglAUgMAuQgMAtgcAjIgOACg");
	this.shape_192.setTransform(-254.4,104.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#633915").s().p("Al8nvIBaAdQBUAdBkAsQBkAtAyAyQA+A+BOA/QBOA+BJAzQASAMAcAMQgGAMgGABQhLAehHgEQhFgDhFAaQhJAZhpAEQhqAEhQAzQgvAsAEA8QAEA9AJA8QAHA9ggArQgYAcgWAdg");
	this.shape_193.setTransform(-257,-47.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(2.7,1,1).p("AAAgKQAAAEAAAEQAAADAAAGQABAIAAgKQgBgJAAgGg");
	this.shape_194.setTransform(-286.7,4.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(2.7,1,1).p("AoljHQgJAZgRAsQgTA0ABAPQALAbAUAEQATAEAQARQAJAMANAaQAMAbAIAKQAhAgAzArQAyArAsATQBJAYAcAEQAcAEA1AsQApAhAuAjQAsAjAjAlQAYAiACAzQADA0AUAeQAyAtBOAnQBPAnAmBIQBeAFBJAwQAiAfAYAsQAYAsAxAIQgHAzg7ABQg8ABhFgQQhFgRgkAAQgkAEgrARQgqARgkAKQgWADgagFQgagEgVAHQgRAKgEAWQgEAVgQAMQhQArhZAIQhaAIhZAJQiiAciiAYMAAAgl5QAGABBVAdQBWAcBmAsQBmAtA2AyQA/A/BPA+QBOA+BKAzQAvAbBKAYQBKAYAgAcQAtA5hEAFQhEAFhJgFQkRgTkJA6QiEAjgnBFQgnBGB5BHQgrAagZAiQgVAdAHAoQABgEABgEQAAAGAAAKQABALgBgJQgCgFAAgFg");
	this.shape_195.setTransform(-231.7,24.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#7E4A17").s().p("Ap4y8IBbAeQBWAcBmAsQBmAtA2AyQA/A/BPA+QBOA+BKAzQAvAbBKAYQBKAYAgAcQAtA5hEAFQhEAFhJgFQkRgTkJA6QiEAjgnBFQgnBGB5BHQgrAagZAiQgVAdAHAoIgaBFQgTA0ABAPQALAbAUAEQATAEAQARQAJAMANAaQAMAbAIAKQAhAgAzArQAyArAsATQBJAYAcAEQAcAEA1AsIBXBEQAsAjAjAlQAYAiACAzQADA0AUAeQAyAtBOAnQBPAnAmBIQBeAFBJAwQAiAfAYAsQAYAsAxAIQgHAzg7ABQg8ABhFgQQhFgRgkAAQgkAEgrARQgqARgkAKQgWADgagFQgagEgVAHQgRAKgEAWQgEAVgQAMQhQArhZAIIizARQiiAciiAYg");
	this.shape_196.setTransform(-231.7,24.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#673A12").s().p("AHLGzQgxgChPACQhQAChCgOQhDgNgKgzQhMADhHgLQgNgEgZgKQgYgKgKgHQgKgKgKgXIgLgaQgfgNg1ABQg0ABgpgJQgpgKAEgsIjbgDIgDgaIixgDQAnhFBmg8ICuhkQBOg3BShgQBRhgBOhDQAxgmBcgdQBegdBzgUQgvA1g+AmQg9Ang6AnIhWBAQguAhgdArQhbBth2BfQAdAVAjgGQAjgFAKAOQAMAoAPAYQAPAYAngWQBDgoA/g0QA9gzBQgcQgQAtgkAlQgjAngQAmQgTAlAfApQAXAXAyAjQAIAKAWgJIArgSQgFANAGAMQAHAMABANQA7gJAgARQASAUgJAuQBsgMBlAXQBlAYBsgTIAAAhQAQAFAXgFQAXgEACAEQAbBHgOA3QiKhAiagGg");
	this.shape_197.setTransform(219,-55.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#6B7F1A").s().p("AEUHkIhOgIQAFgaAlgpQAlgogRgWQgqgYhBANQhAAMg+gZQAqgCAegRQAfgRgFgOQgegthBAHQhAAGg/gBQBRg/AzhWQhOABhRAFQhRAHhRgGQBTghA6hDQA5hGBYgCIAAghQgogDgoAFQgpAGgVgQQgTgZAngUQAngUgFgTQgWgcgsAAQgsACgrACQAJgOALgNQAMgOgFAAQg5gUhDAJQBGhGBOg+QBOg+BYgdQApgLA/AEQA/ADAwgIQgpArhGASIiDAjIAVAAIAPAAQALA5A+AEIB6AGQhQAQg2ApQA2AmgEAsQgEAtAIA4QABAHAUAIQAUAJAVABQAXAPgFAbQAVABAYAGQAYAGAVgFQgDAXAWAIQAWAFAEALQAAAmhJAPQhIAOg9AAQAJAYAZAHQAZAIADALQAFAMgRAIQgRAKgPAMQAlAmA4ACQA4ACAeAgQAJAKgdAEQgdADgFARQAGAhAiANQAiANgCAoQgMgFgGAGQgFAGgNABQAGA2AtAdIAAAnQgHgVg4gGg");
	this.shape_198.setTransform(267,95.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(1.8,1,1).p("AE6quQAHA1gOAvQgNAugwAPQAXAtACBDQACBDgyAhQguAUhMgFQhMgFgzAMQhaAdhSA/QhSA/hIBIQBGgKA7AUQAFABgMAOQgMANgJAOQAsgCAugBQAugBAXAbQAFATgoAUQgoAVATAZQAWAQAqgGQAqgFAqADQAAARAAARQhcADg8BGQg8BGhWAiQBUAFBVgGQBUgGBSgBQg2BZhUA/QBCABBCgGQBEgHAfAuQAFAOggARQgfASgtABQBCAaBCgNQBDgNAsAZQASAWgmApQgnApgGAbQAYACA6AGQA7AHAHAVQAAgGAAiTQAAiTAAjaQAAjZAAjYQAAjaAAiTQAAiTAAgGQgSAZgVAXg");
	this.shape_199.setTransform(265.7,74.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#79971C").s().p("AEfLDQg6gGgYgCQAGgbAngpQAmgpgSgWQgsgZhDANQhCANhCgaQAtgBAfgSQAggRgFgOQgfguhEAHQhCAGhCgBQBUg/A2hZQhSABhUAGQhVAGhUgFQBWgiA8hGQA8hGBcgDIAAgiQgqgDgqAFQgqAGgWgQQgTgZAogVQAogUgFgTQgXgbguABQguABgsACQAJgOAMgNQAMgOgFgBQg7gUhGAKQBIhIBSg/QBSg/BagdQAzgMBMAFQBMAFAugUQAyghgChDQgChDgXgtQAwgPANguQAOgvgHg1QAVgXASgZIAACZIAAFtIAAGxIAAFtIAACZQgHgVg7gHg");
	this.shape_200.setTransform(265.7,74.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#1A779E").s().p("Au3zvIK0AAQARAuAZAvQAZAuAOAvQABACANAKQAMAKAVgFQBEB+B3AZQB4AaCLgBQCLAAB8AsIAAAhQiBgIiGAhQiGAhhsAkQiHAciSgQQiTgOiJAFQiJAGhtBcQgbAbAPAkQAPAkArAbIAAAiQhRAkgbBFQgbBHBQA9QAzAbA5AIQA5AJAfAoQAPATANAUQAMAUgMAZQAtgLAdAcIAAAgQAnAcALApQAKApAYAQQAuASA9ANQA9ANAmAYQA2AwAvA+QAuBABCAcQBpAvBABIQArA7A4A6QA4A5AzAcQBJApBqAdQBqAcBfAmQBhAnAuBGQjOAJjQgIQjPgJjOAKQjMAJjJBBQgsAJgrgEQgrgEgdAQQgvApghAuQggAvgvAKQi0AWitAqg");
	this.shape_201.setTransform(-200.6,41.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#1A779E").s().p("AEWBvIlqAAIltAAIilAAQg+gzARgbQARgcA1gIQA0gLAtgBQAhgBAUgEQATgEAagLQC5hDDJgGQBZgGA9ALQA9AKBOAhQBKAZBTgJIBsgLQBCgGAjAYIAGAFQAaAhgpAhQgpAhg9AWQg8AVghABIilAAg");
	this.shape_202.setTransform(-186.5,191.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#673A12").s().p("AIuIjIjiggQhJgIhBACQhCADhEgRIiFgfQhQgTgUguQhKgIg/AJQhAAJgkgWQglgXAFhmQhPgNhhAJQhhAJhEgmIBghJQCoiECyh4QBhhKBRhXQBRhXBYhYQBBg+BHhDQA/AFA9gFQA+gGApAVQAMANgXAVIgrApQgVAVAKANQAmAbA/ACQA/ACA6AbQAHAIgEAQIgDASQByAiBHA6QAQANgbAHIgtAOQiqBWirAwQhVAZhjACQhjABhZAXQhbAYg+BaQgOALgpAJQgqAKAOAdQAfAtBDgFQBDgFBCAHIAAAUIAAANQCcAQCXgdQCVgeCXgoQgfApg6AfQg5AfgmAcQgmAcAcAhQAfAYBAAAQA/ABBAgIQgBAUgCATQgCASAFACQBnAuBtAQIAABeQh1gBhtgPg");
	this.shape_203.setTransform(222.7,118.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(2.7,1,1).p("AGO18QirAVicAkQiaAkhLA3QhQBFhVBiQhUBihRA5QhLArhpA+QhqA9gpBHQBcABBcACQABANACANQByACBxABQgEAuAqAJQArAKA2gBQA2gBAhAOQAAADALAXQALAYAKAKQAKAHAZAKQAZALAOAEQBKALBPgDQAKA0BFAOQBFAOBTgCQBSgDAyADQCpAGCTBJQAWA4gDBPQgEBOhCAXQAXAtACBBQACBDgzAiQguAThMgFQhNgEg1ALQh1AohmBYQhmBZhYBVQhaBZhSBXQhTBYhjBLQi1B6isCGQgyAmgvAjQBFAmBjgJQBigJBRAOQgFBmAlAXQAmAXBAgJQBBgJBLAHQAUAvBSATQBRATA4AMQBFARBCgCQBDgDBKAIQB4ARBvAPQBvAQB3ABMAAAgtGQgGgBh4AJQh5AJirAVg");
	this.shape_204.setTransform(220.8,31.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#7E4A17").s().p("AJKWTIjnggQhKgIhDADQhCAChFgRIiJgfQhSgTgUgvQhLgHhBAJQhAAJgmgXQglgXAFhmQhRgOhiAJQhjAJhFgmIBhhJQCsiGC1h6QBjhLBThYQBShXBahZQBYhVBmhZQBmhYB1goQA1gLBNAEQBMAFAugTQAzgigChDQgChBgXgtQBCgXAEhOQADhPgWg4QiThJipgGQgygDhSADQhTAChFgOQhFgOgKg0QhPADhKgLQgOgEgZgLQgZgKgKgHQgKgKgLgYIgLgaQghgOg2ABQg2ABgrgKQgqgJAEguIjjgDIgDgaIi4gDQAphHBqg9IC0hpQBRg5BUhiQBVhiBQhFQBLg3CagkQCcgkCrgVQCrgVB5gJQB4gJAGABMAAAAtGQh3gBhvgQg");
	this.shape_205.setTransform(220.8,31.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#1A779E").s().p("AK+GZQgfgLAMgXQiagCiagPQibgPiagCQgOgBgOgMQgOgNgOgHQhngchjgQQhkgQhig7QhHgjh7AAQh6ABhegdQhdgdARh8QAXhTCHhmQCHhlCKg/QBLgiAwgIQBugNB2AGQB1AFBvACILqAAIAANOQhZgFhZgOg");
	this.shape_206.setTransform(215.1,-43.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#1A779E").s().p("AxDNWQBShJBnguQBnguBugNQgDgWAWACQAWACgDgQQC4AIDDAFQDCAFC2A6QBdAbBZgLQBZgMBagQQBZgRBaAOQAqAMAxAYQAyAZAwgMQA/gWgNgVQgNgVgtgOQgugOglgBQgnABgpAEQgrAFglgIQgngJgLgMQgLgMgbgPQgTgJg8gMQg7gNg2AEQg2AEgEAmQgEgXgWgQQgVgPAKgeIgmAAQgKgdgfgNQgegOgDgdQgEAJg2gCQg0gDg5gGQg6gGgOgDQg8gQgtgcQgtgcgygdQhSgmhYACQhXABhYgXQghgKgrgdQgpgcAagnQAVgTAwAFQAwAFAfgCQBRgRBOghQAZgJANgCQAMgCAYgOQAVgPASgYQAQgYAUgSQBbhNBbhYQBbhYBjhEQBBgfBMAFQBNAFBIgmQAVgUAagTQAZgSAVgCQBugPBEg0QB0hNBkhRQBkhRB7hSQAZgRAXgUIAAarg");
	this.shape_207.setTransform(194,117.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(2.7,1,1).p("EAuyAWgMhdjAAAMAAAgs/MBdjAAAg");
	this.shape_208.setTransform(3.7,58.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#2F8DBF").s().p("EguxAWgMAAAgs+MBdjAAAMAAAAs+g");
	this.shape_209.setTransform(3.7,58.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#635E63").s().p("AhcK7QhGgshUgiQhTgig+gTIhAgUIAA0HIMIAAIAKAMQhKA6h2ANQh2AMhYAuQgoAjAhBBQAgBCAqA8QArA/gkAJQghAKg7AAQg7AAgbAiQglBHAEBbQADBbAWBYQABAHAHASQAIARABAIQAQAxAgAnQAgAnAPAfQA1B/CGAqQCIAqB9AOQAsAMATAoQATAogKA1QghABgVAKQgqAUhaAWQhbAWhkABIgFABQhfAAhEgpg");
	this.shape_210.setTransform(-243.9,-126.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#706D6F").s().p("AhFK7QhIgshXgiQhXgihAgTIhDgUIAA0HIMnAAQAFACBRBnIieAIQhMADg8AqQgwApAoBBQApBCBCA1QAkAbANAoQANAogaAbQguAfhIgEQhHgEgbAsQgmBvBHBdQBIBgBLBiQAkAxAlAsQAmAsAPA3QAlCAgoCHQhgAeiCAKQgWACgVAAQhlAAhKgpg");
	this.shape_211.setTransform(-248.4,-126.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(0.9,1,1).p("AGOlMQB4DCBjD+QBjEBAaEoQAEADgLAWQgMAWhPAEQg7gChcgRQhcgQhYgKQhXgLgtASQgtAVhiAWQhgAWhsABQhsABhMgqQhLgshbgiQhagjhDgTQhCgUgDAAIAA0WINHAAQAEACBZBtQBYBuB4DCg");
	this.shape_212.setTransform(-222.5,-127.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#827E82").s().p("AleLDQhLgshbgiQhagjhDgTQhCgUgDAAIAA0WINHAAQAEACBZBtQBYBuB4DCQB4DCBjD+QBjEBAaEoQAEADgLAWQgMAWhPAEQg7gChcgRQhcgQhYgKQhXgLgtASQgtAVhiAWQhgAWhsABIgFAAQhoAAhLgpg");
	this.shape_213.setTransform(-222.5,-127.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#635E63").s().p("Ai5KLQhegXgIg7QgJg7AbhNQAahNAMhMQAIisABioQABiWAOiLQAOiMB1hqQBihNBwATQgIAGgHAIQhTBhAEB2QAFB1A4B0QAXBAgfBGQgfBDgxA6QgSAPADAiQACAiANAbIASgDQARgCAJAFQAiAcAlgBQAlAAAhAPQA4AhABA5QAAA5gEBAQARgIABARQABARARgJIADBQQACAqgQAiIg7AFQhgANhqAWQg8AOg6AAQgqAAgogHg");
	this.shape_214.setTransform(-118.7,-131.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#706D6F").s().p("AkKKKQhggWgJg8QgJg7AbhNQAbhNAMhLQAKitAAinQABiWAOiMQAPiLB4hqQBOg8BVgBQBWgBBRAlIgBAGQgOB5gMB7QgMB7BLByQACAGARAJQARAJAJATIAlAAQgFASAMAOQAMAOAIANQAQAOAKAaQALAbgTAPQgXAPgjgHQgjgGgQAPQgOAOAAAdQAAAdAOAVQBLBjAxBrQAxBrhEB2Ii6ARQhkAMhqAXQhAANg8AAQgrAAgqgHg");
	this.shape_215.setTransform(-112.2,-131.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(0.9,1,1).p("AHuEAQAmA1A0AzQA1AzAeA8QAoBlg1AXQg2AXhbgOQhcgNhKgGQj7gEjtAdQhmAMhwAXQhvAWhmgQQhjgWgKg8QgJg7AchNQAchNANhLQAJitABinQAAiWAPiMQAQiLB7hqQCDhcCOAsQCPAsBaBgQBJBTAeBnQAeBnAuBfQAeAzAkAlQAkAkAkArQAnAzAaAwQAaAwAlA8g");
	this.shape_216.setTransform(-83.1,-131.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#827E82").s().p("Ao8KLQhjgWgKg8QgJg7AchNQAchNANhLQAJitABinQAAiWAPiMQAQiLB7hqQCDhcCOAsQCPAsBaBgQBJBTAeBnQAeBnAuBfQAeAzAkAlQAkAkAkArQAnAzAaAwQAaAwAlA8QAmA1A0AzQA1AzAeA8QAoBlg1AXQg2AXhbgOQhcgNhKgGQj7gEjtAdQhmAMhwAXQhBANg+AAQgsAAgqgHg");
	this.shape_217.setTransform(-83.1,-131.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#635E63").s().p("ADtJaIiUAAIlGAAIlOAAQjPgJgrhEQgqhFBcgTQA/gLBNhJQBMhJA5hGQA5hHACgGICgjUIBOhgQBJhYBLhTQAyg2BShLQBUhNBEg8IBIg/IIUAAIAAAVQhOBDhSAmQhMAZhXgKQhXgKhFAlQhPA1g+BPQg9BNAiBOQARAcA3ACIBkAFQAtABgOAYQg4BShUBHQhTBEhGBPQhHBPgQBsQBDgEA2AnQA3AmAbA1QAQANAjALQAkAKAcABQB0gBBzgEQBzgDBYBLQAUAPAAAkQAAAigUAQQgOALgPAJg");
	this.shape_218.setTransform(219.6,-134.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#706D6F").s().p("AD1JoIiZAAIlRAAIlZAAQjWgJgshEQgrhEBfgTQBBgLBPhKQBPhIA6hHQA7hGADgGICljVIBQhfQBLhYBOhTQA0g2BVhMQBWhMBGg8IBLg/IIlAAIAABjQgWAJgPAJQhOA4hnAAQhmABhcAkQg1AbgqAxQgpAxAjA0QAqAxA7ASQA7ASBFAQQANAKgIAYQgIAZgPAJQikBvgmCfQglCeBTCQQBCBnBWBag");
	this.shape_219.setTransform(216.9,-136.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(0.9,1,1).p("ANxqqIoxAAQgFADhHA8QhIA7hZBMQhWBNg1A2QhPBThNBYQhNBYgFAHIipDVQgDAGg8BGQg7BHhRBJQhRBJhCALQhiATAtBEQAtBFDaAJQCbAADGAAQDFAACTAAQCVAAAHAAIJ3BYg");
	this.shape_220.setTransform(215,-134.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#827E82").s().p("AD6JTIicAAIlYAAIlhAAQjagJgthFQgthFBigSQBCgMBRhIQBRhKA7hGQA8hHADgFICpjVIBShfQBNhYBPhTQA1g2BWhMQBZhNBIg7IBMg/IIxAAIAAVVg");
	this.shape_221.setTransform(215,-134.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(0.9,1,1).p("EAhrACiQBiAqAEADIxVEMMgu1gCaImXrcQACgEA7gbQA7gbBagEQBZgEBeBCQBeBKB7BxQB7BxB0BeQB0BcBJASQBOAMC8AAQC7gBDFgCQDFgCBqAGQCXANCJAiQCKAiBNAHQA3ACCIgCQCHgBCAAAQCAABAgAIQAeADB8g9QB8g9Clg3QClg2CYAUQCXAaCTAyQCTAyBiAqg");
	this.shape_222.setTransform(15.8,-116.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#665F66").s().p("A85FBImXrcQACgEA7gbQA7gbBagEQBZgEBeBCQBeBKB7BxQB7BxB0BeQB0BcBJASQBOAMC8AAIGAgDQDFgCBqAGQCXANCJAiQCKAiBNAHQA3ACCIgCQCHgBCAAAQCAABAgAIQAeADB8g9QB8g9Clg3QClg2CYAUQCXAaCTAyQCTAyBiAqQBiAqAEADIxVEMg");
	this.shape_223.setTransform(15.8,-116.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#10393D").s().p("AxiFJQhrADgxgZQgygYA6hWQB1iVDVgUQDVgTDmASQDnATCpgiQBQgWBJghQBLgiBbgKQBpgHBRgMQBSgMBggjQBqgjBrgOQBrgNBlghICQg4QBAgYBXAAQgoAUgbAnQgRAVAIAhQAIAggRAPQhfBEiIgPQiHgPiCAEQAKARgTAAQgTABAJAQQhVAVhcgEQhcgEhWAVQhKAfg5A4Qg4A7hKAMQj8ALj+gBQj9gDjwBFQg2AWgmA0QglAzg6AcIgWAAg");
	this.shape_224.setTransform(-87.8,-126.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(0.9,1,1).p("EAlUgACQhSBohvBhQhvBgiCA+QiuBOioAPQinAPjAgEQrDgErAgIQlcgHlSg8QlTg9lSg9QlTg8ldgFQhqADgygYQgxgYA6hXQB0iSDVgUQDVgUDnATQDmATCpgiQBRgYBLgiQBLghBbgKQBogHBSgMQBSgMBggjQBqgkBqgNQBrgNBmghQBRghBCgZQBCgZBdADQB9AKBdA6QBeA6BhA4QBhA3CIAEQFcACFKBhQBxAhBxAeQBxAeB4AKQBfAEBggFQBhgGBcAXg");
	this.shape_225.setTransform(20.8,-113.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#194951").s().p("ATlHNQrDgErAgIQlcgHlSg8Iqlh6QlTg8ldgFQhqADgygYQgxgYA6hXQB0iSDVgUQDVgUDnATQDmATCpgiQBRgYBLgiQBLghBbgKQBogHBSgMQBSgMBggjQBqgkBqgNQBrgNBmghQBRghBCgZQBCgZBdADQB9AKBdA6QBeA6BhA4QBhA3CIAEQFcACFKBhQBxAhBxAeQBxAeB4AKQBfAEBggFQBhgGBcAXQhSBohvBhQhvBgiCA+QiuBOioAPQiEAMiTAAIhQgBg");
	this.shape_226.setTransform(20.8,-113.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#ABD8E8","#248FC0"],[0,1],0,32.2,0,-89.1).s().p("EgufAIGIAAwLMBc/AAAIAAQLg");
	this.shape_227.setTransform(4.5,-150.7);

	this.addChild(this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-310,-203.5,620,407.4);


(lib.dialogsbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ATKM4MgmTAAAIAA5vMAmTAAAg");
	this.shape.setTransform(122.7,82.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AzJM4IAA5vMAmTAAAIAAZvg");
	this.shape_1.setTransform(122.7,82.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,247.4,167);


(lib.dialogbutton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD3jTQBnBYAAB7QAAB8hnBYQhmBYiRAAQiQAAhmhYQhnhYAAh8QAAh7BnhYQBmhYCQAAQCRAABmBYg");
	this.shape.setTransform(35,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("Aj2DUQhmhYgBh8QABh7BmhYQBmhXCQAAQCRAABmBXQBnBYAAB7QAAB8hnBYQhmBXiRAAQiQAAhmhXg");
	this.shape_1.setTransform(35,30);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,72,62);


(lib.duck_walking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.duck3("synched",0);
	this.instance.setTransform(-12.6,1.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true},4).wait(4));

	// Layer 2
	this.instance_1 = new lib.duck2("synched",0);
	this.instance_1.setTransform(-11.2,3.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).wait(4));

	// Layer 1
	this.instance_2 = new lib.duck1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},4).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-109.9,125.4,219.6);


(lib.anim_water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.water4("synched",0);
	this.instance.setTransform(6,96.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleX:1.32,scaleY:1.32,x:-26.8,y:82.5,alpha:0},15).wait(1));

	// Layer 3
	this.instance_1 = new lib.water2("synched",0);
	this.instance_1.setTransform(-292.2,-17.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1.41,scaleY:1.41,x:-280,y:-17,alpha:0},15).to({_off:true},1).wait(5));

	// Layer 2
	this.instance_2 = new lib.water3("synched",0);
	this.instance_2.setTransform(-307.3,208.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.39,scaleY:1.81,alpha:0},12).to({_off:true},1).wait(14));

	// Layer 1
	this.instance_3 = new lib.water1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.23,scaleY:1.23,x:-17.8,y:8.2,alpha:0},12).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-426.5,-30.5,539.2,251.8);


(lib.anim_duck_win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.duck_win1("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.duck_win1("synched",0);

	this.instance_2 = new lib.duck_win2("synched",0);
	this.instance_2.setTransform(0.4,-5.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-58},4).to({y:-13},2).to({_off:true,x:0.4,y:-5.4},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},1).wait(2).to({startPosition:0},0).to({y:-48.9},4).to({y:-27.1},2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-111.8,125.7,223.4);


(lib.duck_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{walking:0,sad:5,happy:10,water:15});

	// Text
	this.text = new cjs.Text("", "18px 'ArialMT'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 64;
	this.text.setTransform(34,9);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},5).wait(15));

	// Layer 5
	this.instance = new lib.duck_walking();
	this.instance.setTransform(35.9,-6.1,0.699,0.699);

	this.instance_1 = new lib.duck_sad();
	this.instance_1.setTransform(-11.7,-9.8);

	this.instance_2 = new lib.anim_duck_win();
	this.instance_2.setTransform(12.6,-2);

	this.instance_3 = new lib.anim_water();
	this.instance_3.setTransform(173.4,-99.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-83,87.7,153.4);


(lib.GameOverscreenmc = function() {
	this.initialize();

	// Layer 1
	this.button_close = new lib.dialogbutton();
	this.button_close.setTransform(113,113,1,1,0,0,0,35,30);

	// Layer 2
	this.instance = new lib.dialogsbackground();
	this.instance.setTransform(123,82.5,1,1,0,0,0,122.7,82.5);

	this.addChild(this.instance,this.button_close);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.5,246.4,166);


// stage content:
(lib.final_graphicsCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gameObj = new RunGame(this);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 13
	this.instance = new lib.duck_sad();
	this.instance.setTransform(271.5,225.8,0.618,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 12
	this.instance_1 = new lib.anim_duck_win();
	this.instance_1.setTransform(133.8,218.6,0.611,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// for Question
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#290000").s().p("AAlBkIgygKIgCAAQhFANgBgCQgDgMAQgPQAUgTACgGQAKgbgLg6QgRgqAEgXQAUgCAEApQACAWgDAhQAIACABAFIAAAOQACANAGAIIAOAPQAFAIAGAUQAFAEAtAAQAnABgEAKQgEAJgWAAQgKAAgNgCg");
	this.shape.setTransform(548,391);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#290000").s().p("AgHBsQgFgGgMgCIgLAAQADAAAAgXIAQgaQAKgUAFgPQgBgXACgNIALgoIAVg+QgBABAFATIgEAxQgGAvgCAGIgJASQgDAJACATQgCAPAFAVQAKApgBAAQgUAAgNgPg");
	this.shape_1.setTransform(527.4,389.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#290000").s().p("AguDhQgqgCgNgHQgPgIgLgDQgVgEgMgEQgXgIAFgMQAWgNAHgGIAegbQAPgOAEgKQAHgTAFgGQAZgZAMgOQAUgYAEgTQADgUAWgRIAmgdQASgSAHgOQAFgZAFgLIAmgqIAYgiQASgXAWANQAIAEgBASQgFABgIgGQgHgFgFACIgTAZQgPARAAAOQABALgTAOQgPAMgGAbQgGAhgHAKQgGAJgRALQgRAKgGAIQgFAGgJAVQgHASgGAJQgKALgUASQgJAKgEAVQgFAMgRAVQgNATAHASQAIATAeABQAhABAFAIQAEAFABADQACAKglAAIgRgBg");
	this.shape_2.setTransform(520.4,378.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B1500").s().p("AgeDiQgwgagaAJQgYAIgEAAQgRABgSgBQgqgCgNgHQgPgIgLgDQgVgEgMgEQgXgIAFgMQAWgNAHgGIAegbQAPgOAEgKQAHgTAFgGQAZgZAMgOQAUgYAEgSQADgVAWgRIAogdQASgSAHgOQAFgZAFgLIAmgqIAWgiQAJgMASgBQAUgCgBARQgBANgWACQgMAKgCAUQgBANAAAUQgBAQgPAKQgNALgFALQgEAHgHAVQgCAFgiAxQgLAOgPAjIgaAsQgQAbgEASQgEAQAOAOQAPAPAQgHQATgJAPg1QAHggAEgQQAPgYAFgOQABgEABgRQASgRAAAzQAAASAGAgIABAaIANAkQAJAVAQAKQAvAaAKg/QAEhRAEgaQAVAQAQAfIAaA0QAiA+BHAAQASgGAMAMQgWgBgPAGQgnASgngCQgSgBgMgEQgTgGgHABIgbALQgOAFgSAAQgmAAgYAFQgIABgFAAQgOAAgMgGg");
	this.shape_3.setTransform(532.5,379.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2.7,1,1).p("AhShpQAFgaAFgKIAmgrQADgEAVgeQAQgWAWAMQAFADAGAKQADADAIAEQAGAEgBAFQATgBAfAdQAQAOADAMQADAJACATQAMAqARAYQASAXADACQAIAGATAKQAFAGAAASQAAAMAHAXQAHAZAfAnQAOAcAfARQAUAKADANQAFANgVAEQgtgEgXALQgnASgngCQgSgBgMgEQgTgHgHABQgSAIgJADQgOAFgSAAQgmAAgWAFQgXAFgSgKQgwgZgaAIQgYAJgEAAQgRABgSgBQgqgDgNgHQgPgIgLgDQgVgDgMgEQgXgIAFgMQAWgOAHgFQAGgFAYgXQAPgOAEgKQAHgTAFgFQAZgZAMgOQAUgYAEgTQADgUAWgRQANgKAbgUQASgSAHgNg");
	this.shape_4.setTransform(534.9,379);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#693400").s().p("Ag2DiQgwgZgaAIQgYAJgEAAQgRABgSgBQgqgDgNgHQgPgIgLgDQgVgDgMgEQgXgIAFgMQAWgOAHgFIAegcQAPgOAEgKQAHgTAFgFQAZgZAMgOQAUgYAEgTQADgUAWgRIAogeQASgSAHgNQAFgaAFgKIAmgrIAYgiQAQgWAWAMQAFADAGAKQADADAIAEQAGAEgBAFQATgBAfAdQAQAOADAMQADAJACATQAMAqARAYIAVAZQAIAGATAKQAFAGAAASQAAAMAHAXQAHAZAfAnQAOAcAfARQAUAKADANQAFANgVAEQgtgEgXALQgnASgngCQgSgBgMgEQgTgHgHABIgbALQgOAFgSAAQgmAAgWAFQgIACgHAAQgOAAgMgHg");
	this.shape_5.setTransform(534.9,379);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#290000").s().p("AAmBkIgzgKIgCAAQhFANgBgCQgDgMAQgPQAUgTACgGQALgcgMg5QgRgqAEgXQAVgCADApQACAWgCAhQAIACABAFIAAAOQABANAGAIIAOAPQAGAIAGAUQAFAEAtAAQAnABgFAKQgEAJgWAAQgJAAgNgCg");
	this.shape_6.setTransform(76.6,391);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#290000").s().p("AgGBsQgGgGgMgCIgKAAQADAAgBgXQAMgRAEgJQAKgTAEgQQAAgXACgNIALgoIAVg+QgBABAEATQAAAUgDAdQgGAwgCAFQgCAGgHAMQgDAJACATQgBAOADAWQALApgBAAQgTAAgNgPg");
	this.shape_7.setTransform(56,389.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#290000").s().p("AguDhQgpgCgOgHQgPgIgLgDQgUgEgNgEQgXgIAFgMQAWgNAHgGQALgIATgTQAOgNAFgLQAHgSAFgHQAZgZAMgOQAUgYAEgTQAEgUAWgRQAZgRAMgMQATgTAGgNQAGgZAFgLIAlgqIAZgiQAQgXAXANQAIAEgBASQgFABgHgGQgHgFgFACQgIADgMAWQgOARAAAOQAAALgTAOQgPAMgFAbQgGAhgHAKQgHAJgRALQgRAKgFAIQgFAGgJAVQgIASgGAJQgJALgVASQgIAKgEAVQgGAMgRAVQgNATAIASQAIATAdABQAhABAGAIQAEAFAAADQACAKgkAAIgSgBg");
	this.shape_8.setTransform(48.9,378.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4B1500").s().p("AgeDiQgxgagZAJIgbAIQgSABgSgBQgpgCgOgHQgPgIgLgDQgUgEgNgEQgXgIAFgMQAWgNAHgGQALgIATgTQAOgNAFgLQAHgSAFgHQAZgZAMgOQAUgYAEgSQAEgVAWgRQAbgRAMgMQATgTAGgNQAGgZAFgLIAlgqIAXgiQAIgMATgBQATgCgBARQgBANgWACQgMAKgCAUQgBANABAUQgCAQgOAKQgOALgFALQgDAHgHAVIglA2QgKAOgQAjIgZAsQgQAbgFASQgEAQAPAOQAOAPARgHQASgJAPg1QAHggAFgQQAPgYAEgOQgBgUAEgBQARgSAAA0QAAASAGAgIACAaIAMAkQAJAVAQAKQAvAaAKg/QAEhRAFgaQAUAQAQAfIAbA0QAhA+BIAAQARgGAMAMQgWgBgOAGQgnASgogCQgSgBgLgEQgUgGgHABIgbALQgNAFgTAAQgmAAgYAFQgHABgFAAQgPAAgMgGg");
	this.shape_9.setTransform(61,379.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2.7,1,1).p("AhShpQAGgZAFgLQAAgBAlgpQAQgXAJgLQAOgXAXANQAGADAFAJQADADAJAEQAGAEgBAGQATgBAfAdQAQAOADALQACAJADAUQALApASAYQAPAWAFAEQAIAGATAKQAFAFAAATQAAAIAHAbQAHAZAfAmQAPAdAfARQASAJAFANQAEANgUAEQgtgDgXAKQgnASgogCQgSgBgLgEQgUgGgHABQgSAHgJAEQgNAFgTAAQgmAAgWAFQgWAFgTgKQgxgagZAJQgZAIgCAAQgSABgSgBQgpgCgOgHQgPgIgLgDQgUgEgNgEQgXgIAFgMQAWgNAHgGQALgIATgTQAOgNAFgLQAHgSAFgHQAZgZAMgOQAUgYAEgSQAEgVAWgRQAbgRAMgMQATgTAGgNg");
	this.shape_10.setTransform(63.4,379);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#693400").s().p("Ag2DjQgxgagZAJIgbAIQgSABgSgBQgpgCgOgHQgPgIgLgDQgUgEgNgEQgXgIAFgMQAWgNAHgGQALgIATgTQAOgNAFgLQAHgSAFgHQAZgZAMgOQAUgYAEgSQAEgVAWgRQAbgRAMgMQATgTAGgNQAGgZAFgLIAlgqIAZgiQAOgXAXANQAGADAFAJQADADAJAEQAGAEgBAGQATgBAfAdQAQAOADALQACAJADAUQALApASAYQAPAWAFAEQAIAGATAKQAFAFAAATQAAAIAHAbQAHAZAfAmQAPAdAfARQASAJAFANQAEANgUAEQgtgDgXAKQgnASgogCQgSgBgLgEQgUgGgHABIgbALQgNAFgTAAQgmAAgWAFQgHABgIAAQgOAAgMgGg");
	this.shape_11.setTransform(63.4,379);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.8,1,1).p("EAkhACNMhJBAAAIAAkYMBJBAAAg");
	this.shape_12.setTransform(297.9,372.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BF8442").s().p("EgkgACMIAAkYMBJBAAAIAAEYg");
	this.shape_13.setTransform(297.9,372.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// flower
	this.instance_2 = new lib.duck_walking();
	this.instance_2.setTransform(261.6,68.9,0.668,0.667,0,0,180);

	this.instance_3 = new lib.duck_walking();
	this.instance_3.setTransform(481.6,229.4,0.667,0.667);

	this.instance_4 = new lib.flower("synched",0);
	this.instance_4.setTransform(300.6,233.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// bridge2
	this.instance_5 = new lib.bridge2("synched",0);
	this.instance_5.setTransform(298.9,129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bridge1
	this.instance_6 = new lib.bridge("synched",0);
	this.instance_6.setTransform(300.6,287.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// anim_water
	this.instance_7 = new lib.anim_water();
	this.instance_7.setTransform(441.1,182.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// BG
	this.instance_8 = new lib.background("synched",0);
	this.instance_8.setTransform(296.9,200.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286.9,195.6,620,408.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;