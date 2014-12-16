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



(lib.bus = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF238").s().p("AgfAAQADggAcgDQAdADADAgQgDAggdAEQgcgEgDggg");
	this.shape.setTransform(-38.3,-62.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCF238").s().p("AgfAAQADgdAcgDQAeADACAdQgCAegeADQgcgDgDgeg");
	this.shape_1.setTransform(-9.6,-61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#998530").s().p("AAgCEQh6gGhsg1QAAguAJhCQAKhDAagPQAkgOBhABQBgABBpA0QAOAPAEBeQAAA1gNA1QgMABgcAAQgpAAhJgDgABChpQgLADgFARQgFAQAAAFIgGBSIgFBPIAAACQAPAhAZgFQAagGADgVQABgXgFg+QgEg7gHgeQgJgfgLAAIgCAAgACDhdQgLAEgDAOQgDAOAAAFIAGCcIABABQAHAaAUgBQAXgDAFgXQAHhEgLgyQgLgzgDgFIAAgBIAAgBQgNgSgLAAIgDABgAgOhXQgJAYgKBFIgMBbIAAACIAAABQAKAUAQADQAQABAJgHIANgJIABgCIAAgCIAEheQADhGgDgXQgEgWgQgFQgPAHgDAQgAhPhWQgIAUgPA8QgQA6gEAWQgBAVAZAKQAWAIATgdIAAAAIABgBIAIhJIAIhMQACgigSgJIgCAAQgLAAgKAXgAiXhYQgDADgOAnQgOAnABA8QADAXAUAGQALAFAOgZIABgBIAXiOQADgSgNgNIgDgBQgLAAgSAZg");
	this.shape_2.setTransform(-53.7,36.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AAAAsIgBgsIgCgsIAEABIABArIABAtIgDgBg");
	this.shape_3.setTransform(7.4,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#997C00").s().p("AATALQgBgigLgOQgUgKgLgBIAPgBQAUgCAKARQAGAWgDAcQgEAfgCAEIABgog");
	this.shape_4.setTransform(12.5,-6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC9906").s().p("AgkBEIAHABIgEhsIgEgBIACgjQAxgKAOANQAPAQgHAwIgCAcQgCArgRAJQgPAKgSgCIgNAAQgDgCgCgKg");
	this.shape_5.setTransform(11.8,-4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghBYQgFgGgCgQIgJgCIgEhsIALACIACglIAAgEIAEgBQA6gNASARQATAVgIA0IgCAbQgDAzgVAKQgVALgRgCIgMAAIgBAAQgEAAgDgCg");
	this.shape_6.setTransform(11.3,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AgGASQgkgJgLgHQgIgEgEgUQA4AOBLAMIgCAHQgCAGgIADQgLADgMAAQgSAAgTgFg");
	this.shape_7.setTransform(-62.6,65.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66550C").s().p("AAaCBQkTgqhfgqQhfgqgBgLQgQgUAAggQAAgSAFgRQALgiAXgKIgBAHQgBAQATAOIAIAGQAUAbCCAsQCBAqFPAFQADABA6gFQA5gGBMghQAFgEAUAJQAMAIAEASIAAAEQgCASAAAOIABAZQgHAQhiAiQg3AThiAAQhKAAhigLg");
	this.shape_8.setTransform(-46.3,53.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66550C").s().p("AgnA2QgJgNABgfQABgcADgSIAAAAIAAgBQAEgTBCgBQAKAAAGAMQAIATgDAaQgDAYgGAJQgWAXgyABIgBABQgDAAgCgEg");
	this.shape_9.setTransform(89.2,19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4E30B").s().p("AksBMIAAgLQAIAFASADQAUgBB7ghID8hGICzg0IABAOIj0BFIjeA7QheAZgOAAQgZgEgCgEg");
	this.shape_10.setTransform(58.9,-5.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8C223").s().p("AktCQIABhOIAChCQAIAEASADQAUgBB6gfQB6ghCCglICzgzIAAA3IAAAzIigA0Ij+BWQh/ApgXAGIgXACQgLAAgEgDg");
	this.shape_11.setTransform(58.8,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4E30B").s().p("AkwBjIAAgOQALAEAdgEQAZgGCDgrIEFhWICXgzIABANIiiA3IkBBVQiBAqgXAGIgWACQgNAAgDgDg");
	this.shape_12.setTransform(59.1,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9E103").s().p("AhuB5IAAjfQAEgnAmgDICGgSQAlAEAEAmIABA2IABBjIABA2QADAcguAOIhDARIhEARQgmgEgEgmgAg0h2QgkAEgEAkIAACpQAEAmAlADIABAAIBngaQAogLgBgeIgCibQgEgmglgDg");
	this.shape_13.setTransform(46.6,-28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9E103").s().p("AhWBoIgJjDQADgiAigDIBQgMQAagDAPAOQAYASAEBIIAFBXIAAAIQgGBBgsAAIhgAUQgggDgEgigAAQh2Ig+AJQgiADgDAjIAHCYQADAjAjADIBLgPQAtgCAChBIgEhEQAAgygZgbQgMgKgTAAIgIAAg");
	this.shape_14.setTransform(72.2,-33.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFDA81").s().p("AAyGWIg9gTIgvgNIAAhyIAAj0IAAjwIAAhtQAFhEA1gGQA2AGAFBEIAALlg");
	this.shape_15.setTransform(21.6,-4.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66550C").s().p("Ag6gFIAAgaIAAgjIAJADIA9ATIAvANIAAAaQgFBCg2AFQg1gFgFhCg");
	this.shape_16.setTransform(21.6,40.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFDA81").s().p("AklATQgWgPgGgDIgBgBIBzgWQBWgQBhgOQBggNA/ADIAbABQBGABBbAWIo9BmQgWgdgVgQg");
	this.shape_17.setTransform(29.9,-62.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAIQIgIwbIARgEIAAQfg");
	this.shape_18.setTransform(31.7,-2.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9D230").s().p("AAVAHQgJgPgogNQAFgDAcADQAeACgHArIgHgRg");
	this.shape_19.setTransform(-82.5,36.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9D230").s().p("AAVAHQgJgPgogNQAFgDAcADQAeACgHArIgHgRg");
	this.shape_20.setTransform(-19,43);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D6C26B").s().p("AlRAcIJIhnIgBgCQAvAOAtAgQg+gCiRAYQiOAXiHAcIiqAkQgHgdgOgVg");
	this.shape_21.setTransform(39.2,-58.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFDF3").s().p("AhDD1IFHnJQAWANAVAwIkJGSgAkuDVQgBgmAFhEQAUASAngdQAmgcA7iEQBBiRBBgoQA2gCA9AEIlkHjIgxACIAAgZg");
	this.shape_22.setTransform(-29.1,-31.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIAcQgFgCgDgEIgEgGIAKgEIAGAHQADABABABQAGAAABgCQADgDAAgDQAAgDgCgCQgCgCgGgCQgJgDgDgBQgGgFAAgHQAAgHAGgFQAFgFAHAAQAFAAADABIAHAFIAEAFIgKAEQgCgDgCgCQgCgBgDgBQgCAAgDACQgCADAAADIACAEQACACAFACQAIACADACQAEABACADQACAEAAAFQAAAEgDAFQgCAEgFADQgFACgGAAQgEAAgEgCg");
	this.shape_23.setTransform(-18.6,-61.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKAbIgFgCQgDgDgBgEQgCgEAAgHIAAgjIALAAIAAAiQAAAGADAEQADADAEAAQADAAACgCQADgBABgDQACgDAAgEIAAgiIALAAIAAAjQAAALgFAGQgGAFgLAAQgFAAgFgCg");
	this.shape_24.setTransform(-24,-61.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAdIAAg5IAWAAQAJAAAFADQAFAEAAAHQABAGgEAEQgDACgEABIAGACQADACABADQACADAAADQAAAFgCAEQgCADgEADQgFACgHAAgAgKAUIAKAAQAEgBAEgCQACgCAAgEQAAgEgCgDQgDgCgFAAIgKAAgAgKgFIAKAAQAEAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgCgBQgDgCgEAAIgKAAg");
	this.shape_25.setTransform(-29.2,-61.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFDF3").s().p("AAXAJQgGgQgNgIQgYgQgHAEQAIgIAgAPQAVALgIAnQAAgFgDgQg");
	this.shape_26.setTransform(-82.2,24);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFDF3").s().p("AALgKQglgSgJAFQACgCAQgEQAQgEAVANQAJAJAGAMQADAWgEAIQgEgdgTgMg");
	this.shape_27.setTransform(-21.4,28.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#66550C").s().p("AgZBFQAAg8ANgkQAMgmADgBQAUgagBAGQADACABAOIAAAEIgMBFIgLBIQgDAMgKABQgMgEgDgPg");
	this.shape_28.setTransform(-68.4,35.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66550C").s().p("AgPBTIgBgpIgEhJIgBgoQABgVAIgHQAEgCAKAPQACAEAIAkQAJAkABAxQAAAVgDAXQgEAPgOADQgKAAgGgSg");
	this.shape_29.setTransform(-39,38.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#66550C").s().p("AgNBhQgRgHAAgNQAFgWAOg5QAOg7AIgTQAJgUACADQAHABABAaIAAAFIgIBJIgIBKQgNARgIAAQgDAAgDgCg");
	this.shape_30.setTransform(-61.9,36.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1ECEF").s().p("Ag6AAQAFg0A1gFQA2AFAFA0QgFA1g2AFQg1gFgFg1g");
	this.shape_31.setTransform(-22.6,29.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E1ECEF").s().p("AguAAQADgsArgFQArAFAFAsQgFAtgrAFQgrgFgDgtg");
	this.shape_32.setTransform(-83,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FCF238").s().p("AAgAeQgFgDhEgOIgBgLIABgKIAAgVQAbgBAWABQAXABAFADQADgBADAWIAAAIQgGAagDAAIgBAAg");
	this.shape_33.setTransform(-82.7,36.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCF238").s().p("Ag4AbQgCgBgCgFQgCgGAAgIQACgaAGgLIAzgBQAjAAATAFQAOAIgCAWQgDAXgHABQgNADgjABIgIAAQgdAAgYgFg");
	this.shape_34.setTransform(-21.2,43.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag6AlQgIgBgFgQIgBgNQACghAKgNIABgBIACAAIAxgBQAoAAAWAGQAWAMgDAbQgCAbgQAHQgOADgkABIgIAAQgfAAgYgFg");
	this.shape_35.setTransform(-21.2,43.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAhAoIgBAAIgBAAQAFgBhSgSIgDAAIgBgDQgCgBABgbIAAgdIAFAAQARgBAeAAQAgABAKAGQAIgBABAnQgJAkgIAAIgCgBg");
	this.shape_36.setTransform(-82.8,36.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhEAAQAGg9A+gGQA/AGAGA9QgGA+g/AGQg+gGgGg+g");
	this.shape_37.setTransform(-22.6,29.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag4AAQAEg2A0gFQA0AFAGA2QgGA3g0AFQg0gFgEg3g");
	this.shape_38.setTransform(-83,25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#998530").s().p("AguGOIAAscQAHhFBCgGIAGAAQg1AOgFBFIAAMKQAGBMA+AIIAEgBQgJADgLAAQhCgGgHhGg");
	this.shape_39.setTransform(17.3,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#66550C").s().p("AgXBWIAFhQIAGhPQAGgeAGgCQAAgFAJAcQAHAeAEA6QAEA8AAAXQgCAOgTADIgDABQgLAAgMgVg");
	this.shape_40.setTransform(-46.8,37.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#66550C").s().p("AgZBbQAHg2AJg3QAIg5AEgNIAAgBIAAAAQAGgPAFgCQABgEAJAYQACAHAAAZIgCBHIgDBPQgIAKgUACQgLgDgHgOg");
	this.shape_41.setTransform(-54.7,37.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgvA9QgMgTACgkQACghACgKQADgSAagGQAagGAZABQARAAAIARQAJAWgDAbQgDAcgJAMQgYAag3ACQgIAAgGgHg");
	this.shape_42.setTransform(89.2,19.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8FEFF").s().p("AC0D/QhngTiFgQQiGgPh5AGIAAgZQgBgwAIhXQAJhVAdhZQAdhZA9g3QALgCBJgHQBJgGBcAEQBeADBLAbQADAAAXAXQAXAXAJAzQAGAuADBnQAEBlAABcQAAA/gDAaQgbgGhngTg");
	this.shape_43.setTransform(-28.2,-28.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ak6C3IgFgDIAFjnIAPATQgCADAbAGQAQgBBegYQBegYB9gmQCAgmB2gpIALADIAHC2IgGADIimA4QiTA0kIBRQgRACgLAAQgWAAAAgHg");
	this.shape_44.setTransform(59.1,2.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FCF8E6").s().p("AhCBRIgHiYQACgZAagDIA+gJQAUgCAMAKQASAOADA4IACAhIACAjIAAAHQgEAxgjAAIhKAQQgYgDgDgag");
	this.shape_45.setTransform(72.2,-33.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhgBoIgJjCQAEgsAqgEIBPgMQAggCASAPQAfAjAAA/IAFBXQAAAygUAQQgUAQgSACIhhATQgrgEgEgrg");
	this.shape_46.setTransform(72.2,-33.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FCF8E6").s().p("AhRBbIAAipQACgbAcgDIBlgNQAbACADAdIABAoIABBLIAAAoQAEAVgkALIgyAMIgzANQgcgDgCgcg");
	this.shape_47.setTransform(46.5,-28.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhECtQgvgEgFgwIAAjfQAFgxAvgDICFgSQAwAFAEAvIABA2IABBjIABA2QACAlg1APIiIAiIgBAAg");
	this.shape_48.setTransform(46.6,-28.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhfGOIAAscQAIhSBXgIQBYAIAIBSIAAMcQgIBThYAHQhXgHgIhTg");
	this.shape_49.setTransform(19.4,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgpAAQAEgpAlgEQAmAEAEApQgEAqgmAEQglgEgEgqg");
	this.shape_50.setTransform(-38.3,-62.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgpAAQADgmAmgEQAmADAEAnQgEAogmADQgmgDgDgog");
	this.shape_51.setTransform(-9.6,-61.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAAgRQADAHgDAc");
	this.shape_52.setTransform(-3.3,-61);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgoCFQhbgNhLgoIgCgCIAAgCQgBgNADguQADgtAMguQALgtAYgMQAlgOBkABQBhABBsA1QARAOAFBJQAFBHgSBIIgBADIgEAAQgEAChEAAIgFAAQhCAAhXgMg");
	this.shape_53.setTransform(-53.7,36.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAZCNQg7gIgzgJIgDAIQgDALgNAEQgcAIgmgKQgngJgNgIQgMgKgFgbQhwgfgugZQgtgZgGgKQgcglAPg7QAOgqAegKIAEgDIAMAAIgEAHQgCADgBALQgBALAOALIAJAGQAUAbCAArQB/ApFMAFQAEACA5gGQA4gGBKggIAAgBIABAAQAGgEAbAKQAQALAEAXIABAFIAAABQgDAzACAHIAAACIgBACQABALhiAnQg5AXhtAAQhMAAhlgLg");
	this.shape_54.setTransform(-46.3,53.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgHgEQAFgaACgJIAIAEQgBABgHAWQgFAUACAgQgDgFgBgng");
	this.shape_55.setTransform(-30.5,25.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DDC11D").s().p("AiGBcQhsgLhKAFQhKAEgDACQgcgZAvgvQAvgtA6gnQA6gnAGgDIBNgjQBbgHB6ASQB8ARBfAUIBkAWQjVBXg+A/Qg9A+AHADQhlgqhsgKg");
	this.shape_56.setTransform(-37.8,7.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AA9CdQhjgrhqgKQhrgLhKAFQhKAEgFACIgDAAIgDgCQgQgLABgSQAEgiAtgoQAtgrAwgiQAwgiAOgIIAAAAIBQgmIACAAQBbgHB4ARQB6ASBgAVQBgAVAMADIAdAIIgcALQjQBYg9A/Qg+A/AGADIgDAKg");
	this.shape_57.setTransform(-37.9,8.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AE6EiQgHgChogUQhngUiOgRQiRgSiAAHIgGAAIAAgFQgCgNAEheQADhdAehvQAdhwBMhFIACgBQAGgCBJgGQBJgHBhAEQBiADBPAcQAEAAAZAZQAYAYAKA4QAFAqAEBfQADBcABBaQAABbgDAdIgBAFg");
	this.shape_58.setTransform(-28.2,-28.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F9D230").s().p("AmmKdQkWgqhfgqQhfgqgBgNQgYgiAOg1QALgmAagIQAUgIgCgiQgDgLgIgRQgegxAChJQAEguBBg6QBAg7CZhfIACgCIAAgDQgBgHAEhfQAFhfAfhzQAehzBNhDIABgBIABgDQgCgFAMgRQAIgGALACIAHAAIgCgHQgCgEgCggQgBggAcgTQAUgIAbAMQAOAFAHAUIABAGIAGgCQADgEAzgJQAzgJBQAbIAEABIACgEQAAgDAOgOQAOgOAeADQAcAHAIATQAJASAAAEIAAAFIAFgBIABAFIACABQAFABAjAeQAmAeAQA9IABAEIAFgBIBhgVQBbgTB7gYQB7gYBngPQBngPAeAIIAGACQA7AvAnBdQAmBcACCaIAEBaQAEBSAABSQAAA2gDAcIAAAEQABAUgNA1QgNA1gmAgQgRhGg1gGQgjACgXAeQgXAegBAtQAAASAFASQh4AziZA8QiZA8hYAXQgXhFg+gEQgmABgZAfQgZAfgBAvIACAVIgBABQADAIheAnQg5AXhsAAQhLAAhigLg");
	this.shape_59.setTransform(-1.3,-0.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#424242").s().p("AAFA2QgXgEgGgEQgagVgDgVQACgVAFgCIAAAAQAQgbAXgJQAFBVA4AaIgNAAQgTAAgRgCg");
	this.shape_60.setTransform(65.7,37.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#707070").s().p("AgzBMQgVgfgBgtQABgtAVgeQAVgfAegBQAfABAVAfQAVAeABAtQgBAtgVAfQgVAfgfABQgegBgVgfgAgagCQADA9AmAGQAogGADg9QgDg/gogFQgmAFgDA/g");
	this.shape_61.setTransform(73.3,31.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DDDDDD").s().p("AggAAQADgzAdgGQAeAGADAzQgDA1geAFQgdgFgDg1g");
	this.shape_62.setTransform(74.8,31.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#424242").s().p("AgSAoQgbgUgCgTQACgTAEgCIAAAAQANgTARgKQAKBJAxAZQgzgBgPgIg");
	this.shape_63.setTransform(-3.1,64.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#707070").s().p("Ag3BQQgWgggBgwQABgvAWggQAXghAggBQAhABAXAhQAWAgABAvQgBAwgWAgQgXAgghACQgggCgXgggAghACQAEBAAtAGQAvgGAEhAQgEg+gvgGQgtAGgEA+g");
	this.shape_64.setTransform(4.5,57.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DDDDDD").s().p("AgoAAQAEg2AkgEQAlAEAEA2QgEA3glAFQgkgFgEg3g");
	this.shape_65.setTransform(6.2,57.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgiB8QghgDgKgHQgfgWgDgYIAAgFQAEgXAFgCQAQgXAVgKIAAgGQABg0AZgjQAZgjAkgCQAmACAaAjQAZAjABA0QgGBjhGAWIgKADQgRADgQAAIgbgCg");
	this.shape_66.setTransform(2.2,57.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BA9A13").s().p("AAIAxIhEhoIAHACIA1AMQArAPAKAmQAKAngCAFg");
	this.shape_67.setTransform(10.2,49.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAIA7IhTh/IBRAUQAyAQALAoQALAqgCAIIABALg");
	this.shape_68.setTransform(9.7,50.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AmvK7QkXgqhkgsQhkgrgGgSQgdgoAQg/QAOgsAggMQAHgBAEgRIgBgHQgDgKgIgQQgZgsgGhEIACgVQAFgyBBg9QBBg9CehjIgBgRQgBguAJheQAJhdAhhjQAghiBFg9QABgNAOgQQAIgGAJgBIgCgZQgEgqAogcQAagLAiAQQATAJAIAQQATgIAwgEQAvgEBCAVQARgeA2ABQAvAPAHAkQAegHBXgRQBYgRBigOQBjgOBCAEIAbABQBLAABnAcQBmAbBPBpQBPBpAHDoIAEBeQADBTABBSQAAA4gDAeIAAAFQACAagNA5QgMA6gvAhIgLAHIgDgOQgHgigUgTQAMAcAAAhQgFBghCAVQgGAEgKABQgbAFghgDQghgEgLgHIgPgNQiDA3h7AvQh7AvhGARIgJACIgCgJQgThBg2gEQhGAJgGBZQAAALACAMIABAHIgIAEQgHARhjAlQg6AVhoAAQhNAAhmgMg");
	this.shape_69.setTransform(-1.4,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BA9A13").s().p("AAIAxIhEhoIAHACIA1AMQArAPAKAmQAKAngCAFg");
	this.shape_70.setTransform(77,23.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BC9906").s().p("AAgBRIgCgBIgCgBIgDAAQgDAFgjgRQgMgIgGggQgGgaACgaQABgcAKgPQAOgRARAFQATAEAIAFIABA0IACBHQgCAegDAAIAAgBg");
	this.shape_71.setTransform(-63.4,-15.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAXBjQgLAEgkgTQgWgTgFgiQgGgdACgeQACgfANgUQATgXAYADQAaADARAKIAGAEIABAIIABAvIACBQQAAApgRAGIgHABQgEAAgFgCg");
	this.shape_72.setTransform(-63.3,-15.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAIA7IhTh/IBRAUQAyAQALAoQALAqgCAIIABALg");
	this.shape_73.setTransform(76.5,24.3);

	this.addChild(this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95,-71.1,190.1,142.3);


// stage content:
(lib.busCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bus();
	this.instance.setTransform(100,100,1.032,1.032);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;