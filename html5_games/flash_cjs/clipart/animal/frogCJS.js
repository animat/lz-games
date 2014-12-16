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



(lib.frog1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69932C").s().p("Ag1AYQAEgFApgXQAmgZAZgEIgcAMQgbAOg2Apg");
	this.shape.setTransform(-66.4,-61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#376803").s().p("AgDhLQghg/gNgVQBSBuAKBiQALBogGAHQgGiSgthZg");
	this.shape_1.setTransform(-12.5,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B7C23").s().p("AkuEsQgOgBgCgOQAAgFADgEIAAACQABAOAOABQAMABAEgMQABAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIBfADQBYACBegCQBdgCAZgNQgUgPAGgPQAWAbAKgHQA7hFAvhoQAvhmgKg9QgQg4gchPIgfhXQAOAVAcBHQAbBGAUA3QAMAjANABQAEAGAAAGIgBAFQgEANgMAJIgOAIQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQgvCLgxBEQgwBDgFABQgSANgzADQg0ADgegCIkLgHQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgFAMgKAAIgCgBgAhlDqIhhgUIgygKQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgGAGgHgBIgDAAQgPgCgBgOQAAgEACgDQABAOAOACIADAAQAHABAGgGQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAzALIBhAUQAxAKAHADQADACAAADIgBABIg8gNgAhaCwIghgXQgCgCgDABQgDADgGAAQgLgBgBgLIAAAAQADAFAGAAQAGAAAEgDQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIAiAZIAqAgQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgpgeg");
	this.shape_2.setTransform(-32.9,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BA03A").s().p("AkFExQABgPAOgBQAJAAAEAEIADADIADABIDzgVQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAgBIAHADQACACAAADQgBADgDAAIj4AWIgDgBIgDgDQgFgEgIAAQgOABgCAOQgCgDAAgEgACaDyIi8hCQgigLAGAAIgBgCIA0ATICaA2QADAAACgCQArhLAbhKQAahKABgHQAEgJgBgKQgFgngJgEQhFh6gVg3QgVg2ACgOIACgIQgBACAZA8QAZBABIB+QAIAFAGAnQABALgEAJQgBAIgbBLQgbBMgtBMQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAgAAPDyIizgYQgggEAFAAIgDgGIAaAEICuAYQADAAACgDQABgDgDgCIgBgBIAKAIQACABgBADQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAgAjjDWQABgPAOgBQALgCAGAMQgGgGgIABQgOACgCAOIABAEQgDgEAAgFgAhdCjQABgLALgBQAHAAADAFIgEgBQgKACgCAKIACAGQgHgCgBgIgAB/k3IAAAAIAAAAg");
	this.shape_3.setTransform(-38.5,28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#376803").ss(1,1,1,3,true).p("ABFk/QgHgHAHAtQAGAtBjCxQACAAAIARQAHAQgGAaQgBAFgaBKQgbBKgrBLQgEgCgzgRQgwgRgzgSQgzgRgEgCQgEgMgMAAQgPACgBAOQABAPAPABQAHAAAFgDQAmAbAoAdQgEgBgwgGQgwgGgxgGQgwgHgDAAQgIgNgNABQgSACgCASQACASASACQAKACAJgIQAwAKBJAOQBIAOARAGIj0AVQgHgIgMAAQgSACgCASQACASASACQAOAAAHgOQA2ACBZACQBYACAkABQAIABA8gBQA+gCAZgRQAEABAwhEQAxhDAxiOQADgBASgQQASgNgMgXQgIAEgPgmQgBgDgTgxQgSgwgVg0QgVg1gLgP");
	this.shape_4.setTransform(-32.9,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#69932C").s().p("AkuFBQgSgCgCgSQACgSASgCQAMAAAHAIID0gVQgRgGhIgOIh5gYQgJAIgKgCQgSgCgCgSQACgSASgCQANgBAIANIAzAHIBhAMIA0AHIhOg4QgFADgHAAQgPgBgBgPQABgOAPgCQAMAAAEAMIA3ATIBjAjIA3ATQArhLAbhKQAahKABgFQAGgagHgQQgIgRgCAAQhjixgGgtQgHgtAHAHICHAfQALAPAVA1QAVA0ASAwIAUA0QAPAmAIgEQAMAXgSANQgSAQgDABQgxCOgxBDQgwBEgEgBQgZARg+ACQg8ABgIgBIh8gDIiPgEQgHAOgNAAIgBAAg");
	this.shape_5.setTransform(-32.9,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E7F01").s().p("AgFAUQgOgGAEgRQAHgTANADQAPAGgEARQgGARgLAAIgEgBg");
	this.shape_6.setTransform(-54,-47.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOACQAAgEAOgDQANgBACAFQAAAEgPADIgDAAQgKAAgBgEg");
	this.shape_7.setTransform(-47.5,-44.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAOQADgSgPgeIARAXQANASAGAaIgcACQABgBADgUg");
	this.shape_8.setTransform(-48,-48.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAAQAAgEACAAQADAAABAEQgBAFgDAAQgCAAAAgFg");
	this.shape_9.setTransform(-52.8,-50.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#274401").s().p("AgOArQgOgIANgnQAPgoAPACQANAIgMAnQgPAngNAAIgCgBg");
	this.shape_10.setTransform(-53.9,-48.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#416814").s().p("AgFAuQAAgLgCgKQAHgTAAgTQAAgdgOgXQAcAdABAnQAAAkgWAaIACgTg");
	this.shape_11.setTransform(-43.3,-48.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#376803").ss(1,1,1,3,true).p("AgGhZQhBADggAxQA1giA8AdQAnAUAQAjQAQAmgNAnQAjgeABgvQgBgqgggdQgfgdgugCg");
	this.shape_12.setTransform(-51.7,-49.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#50821C").s().p("ABBAOQgQgkgngVQg8gcg1AiQAggxBBgDQAuABAfAeQAgAeABAqQgCAugiAdQANgmgQglg");
	this.shape_13.setTransform(-51.7,-49.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4E28F").s().p("AhYBEQAXAMAdABQAsgBAfgdQAegcABgoQgBgugjgdQA0AdADA6QgBAogfAdQgeAcgsABQgqgBgdgYg");
	this.shape_14.setTransform(-50.6,-47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#376803").ss(1,1,1,3,true).p("ABwAAQgBAsggAdQggAdgvABQgugBgggdQgggdgBgsQABgqAggeQAggdAugBQAvABAgAdQAgAdABArg");
	this.shape_15.setTransform(-52.5,-48.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DFFCBB").s().p("AhOBJQgggdgBgsQABgqAggeQAggdAugBQAvABAgAdQAgAdABArQgBAsggAdQggAdgvABQgugBgggdg");
	this.shape_16.setTransform(-52.5,-48.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#88AF4A").s().p("AiVA+QAVgSAIgSQAQANA0gCQAzgCAkgGQhQgNhGgNQAAgLgEgHQBBAAAggPQAaAFAvAFQgbgTgSgIQAKgJAEgFIBAAqIBCApQghAahjAIQhRAGg+AAIgYAAg");
	this.shape_17.setTransform(-47.2,51.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#376803").ss(1,1,1,3,true).p("AAVhCQABADgdAWQgeAWhYABQAEAAAEAWQAFAXguAoQAFAABHgBQBGgBBJgJQBMgJAWgZg");
	this.shape_18.setTransform(-47.4,51.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#93C152").s().p("AidBDQAtgogFgXQgEgWgEAAQBXgBAfgWQAegWgCgDICJBYQgVAZhMAJQhKAJhGABIhAABIgKAAg");
	this.shape_19.setTransform(-47.4,51.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#376803").s().p("AheApQBUgvBWguQBZguATAGIhVAoQhPAmhIAoIg3AcQgxAYgbAQIBZg1g");
	this.shape_20.setTransform(67.3,42.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#79B236").s().p("AjbCyQg+gBgLgVQgHgLAAgMQABgSAHgQQAKAyBBgEQBBgEBPgeQBOgdA2gZQgRATgSANQgRANghAMQBxgDBihiQBihhgIhdIABABQASANAEAWQADAmgRAkQgSAjgEADQhPBxhbAbQhcAbgHgFIgBABQiQAshAAAIgEAAg");
	this.shape_21.setTransform(64.1,42.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A4E05F").s().p("AkqCVQABgXALgTIAMgUQBIhHBjgoQBlgqBLgSQBNgSAGAAQAjgHATgWQAUgVADgGQALgMAMAAQATAFADAFQAQAMAFATQgGgKgKgHQgCgFgTgFQgMAAgMAMQgCAGgTAVQgVAWgiAHQgGAAhOASQhNAShhAqQhlAohIBHIgMAUQgKATgCAXIABAIQgGgKAAgMg");
	this.shape_22.setTransform(64.1,41.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#376803").ss(1,1,1,3,true).p("ADlitQgBADgTAWQgTAWgjAIQgFAAhNASQhMARhlArQhlAohJBIQgHAFgQAqQgPArA1AUQA2AVDLg9QAGAFBdgbQBdgaBRh1QAGgFAYg2QAXg2gpgnQAAgCgPgHQgOgHgVASg");
	this.shape_23.setTransform(64.1,42.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#85C640").s().p("AkHC2Qg1gUAPgrQAQgqAHgFQBJhIBlgoQBlgrBMgRQBNgSAFAAQAjgIATgWQATgWABgDQAVgSAOAHQAPAHAAACQApAngXA2QgYA2gGAFQhRB1hdAaQhdAbgGgFQiYAthEAAQgXAAgOgFg");
	this.shape_24.setTransform(64.1,42.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#376803").s().p("AgOgLQgYACgHADQAwgaAWAYQAWAXgBAGQgdgkgfAEg");
	this.shape_25.setTransform(-18.6,-5.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#376803").s().p("AAPAJQgIgagUgMIgHgFQgGgFALAAQADgDARAOQATANgBA3QAAgFgIgag");
	this.shape_26.setTransform(-13.4,-4.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2E5403").s().p("AC7AfIAAAAIAAAAgAC0AVQgHgJgIgCQAAAChTAAQhSgBiggaIgagPQBWARBjAJQBiAHBEgGQADADARgWQgEAHAGAuIgHgKg");
	this.shape_27.setTransform(-61.7,-22);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5B7C23").s().p("ADoEyQiihAhUhXQhehdgqhKQgqhLABgFQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQjRg7hihKQhjhKAAgIQgXgXgggTIAgAFQBXBHCIBJQCJBJCnAWQgMANgOAAQgNABgjAGQA7BdBuBqQBsBqCkA9QCkA8DdgqQgCAagNAaQhBAFg6AAQinAAh3gvg");
	this.shape_28.setTransform(-12.3,11.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7BA03A").s().p("AJrELQgxhpiRhhQiShfishOQiqhNiBgvQiAgugNgDQimAFhDgOQhEgOgFgGQBLAMBTAGQBTAHBJgHQAOAECAAuQCAAuCqBOQCsBNCSBfQCSBhAwBpQAMAcABAbQgJgUgMgYg");
	this.shape_29.setTransform(-10.7,8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#376803").ss(1,1,1,3,true).p("AJrCcQhPhiiVhWQiUhXifhFQichEhvgnQhvgngEgBQhaAIhlgKQhlgLhPgPQAnATAkAiQgBAHBiBLQBjBMDUA7QgBAFAqBLQApBKBgBfQBeBeCjA+QCiA9DygYQAuhjhQhig");
	this.shape_30.setTransform(-13.3,11.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#69932C").s().p("AD5E8Qijg+heheQhghfgphKQgqhLABgFQjUg7hjhMQhihLABgHQgkgigngTQBPAPBlALQBlAKBagIQAEABBvAnQBvAnCcBEQCfBFCUBXQCVBWBPBiQBQBiguBjQhEAHg9AAQieAAh1gsg");
	this.shape_31.setTransform(-13.3,11.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#79B236").s().p("ADuF8QjNgyhrhfQh2hlg0hZQgzhXABgHQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAQjRg7hjhKQhihLgBgIQgrgogsgUQgsgTgFgBQg0gRgMgOQgMgOgBgFQAnAWBcAUQBbAVBmAPQBlAPBDAGQATALAPBTQAOBSA7AvQDdCJDtBfQDxBfEPgZQBugSA+hHQA+hIARhgQAdBugcBdQgiBcg2ApQg1ApgGAAQjEAziaAAQhdAAhMgSg");
	this.shape_32.setTransform(-2,7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A4E05F").s().p("AKkBCQithyjygrQkGg0iFhNQiGhOhDgQQgBgGhKgIQhKgJiBA/QiBA/imDRIgBgDQgFgUAIgOQAHgPACgBQAVgeAwguQAxguArglIAvgoIABgDQABhGAigTQAegNAdALQAeAKACADQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAngQAugIIA0gHIAAAAQAvgFBDAgQBDAgAHAGQB9BJB+ApQB/AqBXAQQBXARAFAAQETBLBwBbQBwBdgDAKQBDBuAZBgIgBAFQg/i6ish0g");
	this.shape_33.setTransform(-2.9,-32.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#376803").ss(1,1,1,3,true).p("AMwg5QAFgIhwhfQhwhekXhMQgEABhWgRQhXgQh/gpQh+gqh+hKQgGgFhEggQhEghgxAGQgEgBgvAIQgvAHgoAQQgDgCgfgLQgfgLggAPQggAPgEBMQgDACgrAmQgrAlgxAuQgxAvgVAeQgIAEgHAlQgHAmBaAfQADAAAsATQAsAUAsAoQgBAHBiBLQBjBJDUA8QgBAGAzBZQAzBZB4BnQB2BnDOAuQDNAtEzhRQAIABBDg4QBCg4AViCQAViCh/jbg");
	this.shape_34.setTransform(-2.2,-10.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#85C640").s().p("AD4I5QjOguh2hnQh4hngzhZQgzhZABgGQjUg8hjhJQhihLABgHQgsgogsgUQgsgTgDAAQhagfAHgmQAHglAIgEQAVgeAxgvQAxguArglIAugoQAEhMAggPQAggPAfALQAfALADACQAogQAvgHQAvgIAEABQAxgGBEAhQBEAgAGAFQB+BKB+AqQB/ApBXAQQBWARAEgBQEXBMBwBeQBwBfgFAIQB/DbgVCCQgVCChCA4QhDA4gIgBQjGA0ibAAQhWAAhJgQg");
	this.shape_35.setTransform(-2.2,-10.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7BA03A").s().p("AihCDQABgNAOgBQAPgBBGgNIBZgQIACgBQADABAAAEQgBACgDABIhZARQhFAMgQABQgNACgBAMQgCgDAAgEgAiYAMIgKgCQACgGgVgFQgNABgBAMQgCgDAAgEQACgLANgBQAUAGgBAEQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIClAZQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIABABQACACgBADQgBACgDABgABtAkIhjgvIgvgXQgGgMgJgDQgNABgBAMQgCgCAAgDQABgOAOgBQANABABAOQgEAAAWALIB8A6IADAAQAqgSAWg7QAUg0AIgkQgTBoggAjQgfAigGAAIgBAAg");
	this.shape_36.setTransform(-49.2,14.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5B7C23").s().p("Ai3CFQAEAEAGAAQAIAAAJgHQANgEA0gIIBngOQA1gHATgBQADABAQgGQARgGgJgXQAMAFAPgMQAQgLA+hFIgQgwIgXhHIAAgCIAYBJIATA6Qg0ApgPAYQgQAYABAEQgKAQgOAEQgPAFgBAAIhQAHIhxANQg3AHgEACQgBAOgNABQgNgBgCgNgAABBOIi1g9QAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAQgKAFgHgCIgEAAQgNgBgCgNQAEAEAHAAIAEABQAHABAKgFIADAAIC6A/QABAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgBAAAAAAgAhLgaQgNgBgCgNQAEAEAGAAQAAgCAMAIQALAIApAkQAFAFACAGIgBABQhHg9AGAJg");
	this.shape_37.setTransform(-47,14.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#376803").ss(1,1,1,3,true).p("ACwidQAAADgKAqQgJApgVAuQgUArghANQgJgEg+gbQg8gdgJgFQgBgRgSgCQgRACgBARQABARARACQAHADAaAUQAZAWAEADIingYQABgIgYgFQgSABgBAPQABASASABQAJACAOgGIC6A/QgDABgnAHQgoAHgqAIQgqAHgIAAQgRACgBARQABARARACQASgCABgRQADgBAvgFQAugGA3gGQA4gGAggBQACAAAUgFQATgFAMgSQgCAAANgYQAOgXA5gug");
	this.shape_38.setTransform(-47,14.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#69932C").s().p("Ai7CLQABgRARgCIAygHIBSgPIAqgIIi6g/QgOAGgJgCQgSgBgBgSQABgPASgBQAYAFgBAIICnAYIgdgZQgagUgHgDQgRgCgBgRQABgRARgCQASACABARIBFAiIBHAfQAhgNAUgrQAVguAJgpIAKgtIAwCWQg5AugOAXQgNAYACAAQgMASgTAFQgUAFgCAAQggABg4AGIhlAMIgyAGQgBARgSACQgRgCgBgRg");
	this.shape_39.setTransform(-47,14.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#88AF4A").s().p("AhYAyQA0gEAsgMQgWgHghgIQghgHgRABQgJgTgZgZQAZgCApgMQAoAEAhALQgagWgTgFQANgIAHgKIBKApIBHAlQACAAACAHIgBACQACAIgsATQgrASiLAUQAEgKABgRg");
	this.shape_40.setTransform(-52.6,19.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#376803").ss(1,1,1,3,true).p("AhhBSQAEgBAEghQAEghg0gxQAGABAwgKQAxgJASgdICWBRQAEABAAAMQAAANgwATQgwASiLATg");
	this.shape_41.setTransform(-52.9,19.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93C152").s().p("AhZAwQAEghg0gxQAGABAwgKQAwgJATgdICWBRQAEABAAAMQAAANgwATQgwASiLATQAEgBAEghg");
	this.shape_42.setTransform(-52.9,19.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5B7C23").s().p("AhdBUQgJgBgGgGQgDgFAAgFIABgCIACAFQAGAHAJABQAQABAFgNQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAlgJBCgWQBDgWAkgPIADAFQgiAPhGAXQhDAWgmAKQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABQgFALgPAAIgBAAgAhqgCQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAQgFADgIgBQgIgBgFgDQgCgCAAgGIAAgCIACAEQAFAFAIABQAIABAFgFQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAdARCIgRQAEAAABADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQhCAHgpAAQgrAAgPgIgAhJhGQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgFADgGgBQgOgCgBgLIAAgBIAAgCQADAIAMACQAGABAFgEQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAbASB1gKQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAIgBABIgDgBQgqAEgdAAQg3AAgSgMg");
	this.shape_43.setTransform(18.5,41.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7BA03A").s().p("AhvBPQADgOASAAQAHABAFAEQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQA0gTAngRIArgSIADgDIAAABQABADgEACIgrASQgnARg0ATQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgFgFgHgBQgRAAgEAOIAAgDgAB0gbIgSghIhHADQg0ABgqgEQgEgBAAgDQgBgLgOgCQgOgBgDALIAAgBIAAgBQADgMAOABQANACACALQAAADAEABQAqAEA0gCQA2gBARgBIAUAkIAWAlIgBAAIgXglgAhpABIgEgBQgEgGgJgBQgIgBgFAFQgDACgBADIAAgCQABgEADgDQAFgEAIABQAJABAEAHQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQBpAGAmgVQAngXgCgGIAAAAQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABQACAFgnAXQgcAPhBAAQgXAAgbgCg");
	this.shape_44.setTransform(18.5,40.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#376803").ss(1,1,1,3,true).p("ABjhLQgFABg6ACQg4ACgwgFQgBgOgRgDQgTAAgDAPQAAAQASADQAJABAGgEQAYASB6gKQACAEglAXQgkAWhqgIQgFgIgLgCQgTAAgDAPQAAAOASADQALABAGgGQAdATCLgTQgCABgpARQgnARg1AUQgFgFgJgBQgWgBgEASQAAASAWAEQATABAGgPQAngKBGgYQBIgXAhgSg");
	this.shape_45.setTransform(18.6,40.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#69932C").s().p("AheBdQgWgEAAgSQAEgSAWABQAJABAFAFQA1gUAngRIArgSQiLATgdgTQgGAGgLgBQgSgDAAgOQADgPATAAQALACAFAIQBqAIAkgWQAlgXgCgEQh6AKgYgSQgGAEgJgBQgSgDAAgQQADgPATAAQARADABAOQAwAFA4gCIA/gDIAuBPQghAShIAXQhGAYgnAKQgFAOgSAAIgCAAg");
	this.shape_46.setTransform(18.6,40.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5B7C23").s().p("AhmBMQAGAFAJABQAQgBADgNQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQAlgOBBgeQBCgbAhgWIAEAGQghAUhDAcQhAAeglANQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABQgDAMgQABQgOgBgFgJgAiLAAQAFACAHABQAIgBAGgDQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAQAfAOCFgfQAEAAABACIAAADIgBAAQiFAfgggPQAAgBgBAAQgBAAAAABQgBAAAAAAQAAAAgBABQgFAFgIAAQgMAAgEgHgAhQhEQAAgBgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgFAEgHAAQgLAAgEgKQAEAFAIAAQAGAAAFgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAdAPBzgWQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgCAAQhEANgnAAQgZAAgMgFgAhShUIgBgBQADACABADQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_47.setTransform(35.9,60.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7BA03A").s().p("AhmBQQABgPASgBQAHAAAGAEQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAxgYAmgWIApgWIADgBIABABQABABgEADIgpAWIhXAuQgBABAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgFgEgIAAQgRABgCAOIAAACIgBgFgAiLADQABgKAPgBQAJABAFAGQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQBqgCAkgbQAkgbgDgGIABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBABQADAFgkAbQgkAZhpADQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgEgEgKAAQgPABgBAJIgBgEgABwgyIgVgeIhGAKQg0AIgqAAQgEAAAAgDQgDgLgNgBQgPABgCAMIAAgFQABgLAPgBQANAAADALQAAAEAEAAQArgBAzgGIBGgKIAYAhIAaAkIgBABIgbglg");
	this.shape_48.setTransform(35.9,59.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#376803").ss(1,1,1,3,true).p("ABbhdQgFABg6AIQg3AIgwAAQgDgNgRgCQgTACgCAPQACAQATACQAIgBAGgEQAZAPB5gXQADAEgjAaQghAbhqADQgGgIgMAAQgTABgBAQQACAOASABQALAAAGgHQAeAQCIgfQgCABgnATQglAVgyAZQgGgEgJAAQgVABgCASQABASAWACQAUgBAEgQQAlgOBEgfQBFgfAfgTg");
	this.shape_49.setTransform(35.9,60);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#69932C").s().p("AhrBKQACgSAVgBQAKAAAFAEIBXguIAqgUQiIAfgfgQQgGAHgLAAQgSgBgCgOQACgQASgBQAMAAAGAIQBqgDAhgbQAjgagDgEQh4AXgagPQgGAEgIABQgTgCgBgQQABgPATgCQARACADANQAwAAA3gIIA/gJIA2BLQgeAThGAfQhEAfglAOQgEAQgUABQgWgCgBgSg");
	this.shape_50.setTransform(35.9,60);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#88AF4A").s().p("AhKAzQADAAAkgRQAjgRATgdQg4AGg5AUIgOgQQAqgogBgZQAfAMA5AAQA7AAAagCIABAeIACAbQg3Agg2AQQg0ARgUADQAAgIgCgJg");
	this.shape_51.setTransform(17.2,40.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#376803").ss(1,1,1,3,true).p("ABug8QgJAChJAAQhHABgagQQABACgHAXQgIAYgfAXQADABASAXQASAYAAAbQAEABA9gRQA7gRBCgng");
	this.shape_52.setTransform(17.1,40.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#93C152").s().p("AhLBKQAAgbgSgYQgSgXgDgBQAfgXAIgYQAHgXgBgCQAaAQBHgBQBJAAAJgCIAFA+QhCAng7ARQg7AQgFAAIgBAAg");
	this.shape_53.setTransform(17.1,40.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#88AF4A").s().p("AhIAwQAlABAqgcQg0ANgwgOQgJgLgGgFQAQgNAIgQQAAABAWADQAVAEAsgKQgPgMgYgEIgogGQACgIABgGQAfAJA6gGQA7gGAYgFIAFAeIAFAbQg0Alg1AWQgxAWgTAFQgCgMgGgMg");
	this.shape_54.setTransform(34.6,59.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#376803").ss(1,1,1,3,true).p("ABnhMQgJAChIAJQhHAIgcgNQACABgFAYQgFAZgdAYQADABAVAXQAUAWADAbQAFAAA6gXQA5gXA+gsg");
	this.shape_55.setTransform(34.5,59.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#93C152").s().p("AhaAcQgVgWgCgCQAcgYAFgZQAFgXgBgCQAbANBHgIQBIgIAJgDIALA/Qg9Asg4AXQg8AXgDAAQgDgbgVgWg");
	this.shape_56.setTransform(34.5,59.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#376803").ss(1,1,1,3,true).p("AgPg5QAJgFAiAQQAlAPgoBaIhGgqg");
	this.shape_57.setTransform(90,25.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#69932C").s().p("AgtARIAehKQAJgFAiAQQAlAPgoBag");
	this.shape_58.setTransform(90,25.3);

	this.addChild(this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.6,-70.4,191.4,140.9);


// stage content:
(lib.frogCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.frog1();
	this.instance.setTransform(100.5,100);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvmPnIAA/OIfNAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100.1,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;