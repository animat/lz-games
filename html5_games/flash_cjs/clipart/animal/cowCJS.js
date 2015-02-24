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



(lib.cow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#205B0A").s().p("AgNAZQACACAVgTIAAAAQgKAAgWAIIgEgFIAQgLIgmATIgEgFQAGgDAWghQgRANgeAbIgDgEQAjgiALgGQAKgGAAADIABADIgBAFQgJARgJAKQArgXgGAIIABACIgCAEIgKAJQAegGgEAEIABADIgDAGQgIAHgGAEIAsgDIAfgCIABAGIhYAGg");
	this.shape.setTransform(70,69.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAmQgCAAgCgDIAAgBIgBAAQgWgSgCgcQAAgRAHgHQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAGAHAHAXQAHAWAAAOQgBAIgBAAIAAAAg");
	this.shape_1.setTransform(-86.6,-31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7A997").s().p("AAGAhQgYgRgDgaIAAgCQABgQAIgHQAFgDAFACQAIAIAIAVQAIAUgBANQABAIgGAEQgHgBgDgEg");
	this.shape_2.setTransform(-87.3,-32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAIAoQgdgUgDggIAAgDQAAgTAKgJQAFgDAGADQALAJAJAaQAJAYgBAQQABAJgHAFQgIgBgDgFg");
	this.shape_3.setTransform(-87.1,-32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAbQgCAAADgHQAFgLASgOQAQgRAPgEQAGgBACADQAFAFgDALQgHAWgxAMIAAAAIgHABIgCAAg");
	this.shape_4.setTransform(-67.7,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7A997").s().p("AglAgQgEgHAEgGQAFgNAUgQQASgSAQgFQAKgBADAEQAEAGABAHQAAAFgCAFQgIAZg0ANQgDADgFAAIgHgCg");
	this.shape_5.setTransform(-67.1,-29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoAlQgEgIADgGQAHgPAVgTQATgVATgFQAKgBADAEQAGAGAAAJQAAAFgCAGQgIAdg6APQgEADgEAAIgIgCg");
	this.shape_6.setTransform(-67,-29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EADDCC").s().p("AAgBzQAQhKgXg+QgXg/hBgaQAvgOAuAjQAiAlgBBDQAABFgSAZQgFAGgHAAIgBAAg");
	this.shape_7.setTransform(-60.4,-31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0CFB8").s().p("AgcBiQgfgOgQgQQgEgFAAgKQACgaARglQASgmAOgXQAEgCASghQAJgKAdABIAaAGQgwAVgTAyQgVAwANAyQAJAcAbAIQAeAHAfADIgHACQgvALgHgEIgBABQgRgFgdgNg");
	this.shape_8.setTransform(-85.8,-32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0CFB8").s().p("AhEgbQAegNAmAWQAfAQAmgDQgeATgfATQgRgvg7gNg");
	this.shape_9.setTransform(-70.8,-18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3D6C2").s().p("AgGCVQgegEg0g6QARADAcgIQAhgRAmAYQAhAQAmgEIgkAZQgVAPgLAFQgGAFgOAAIgRgCgAAfBUQgngfgkAVQgvAKgHgEIgBACQgRgGgfgNQgfgNgQgRQgEgFAAgJQACgZARgmQASgnAOgWQAEgDASggQALgLAdABQAQADAUAHQAnAOAlgBIAbgEQAagHAdABQAcAAAcAXQAiAmgBBFQgBBDgRAYQgGAHgKAAIgMABQgNADgKAAIgHAAIgKgBIgCAAIgBAAIgBABIgUACQgeAAgbgNg");
	this.shape_10.setTransform(-73.9,-29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CEBA9F").s().p("AhZBeQgMgHgpgPQgogOgWgUQgFgHAAgMQADghAXgqQAXgqAIgLQAAgEARgYQAQgYAgABQARACAWAIQAiAPAhABIAogHQAbgHAcAAQAdABAeAZQAkAnABBHQACBFgVAdQgSALgIAAQgSAEgTABIgXAAIggAaQgYATgPAIQgMAGgOAAQgqAAg3hDg");
	this.shape_11.setTransform(-73.9,-28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhEAAQgCgDABgDQALgNA6gBQA1ABAPALIACADQgHATg+AHQg3gGgOgPgAg/gEQAIAMA4AIQA4gIAHgNQgIgHg4gCQg4ACgHAIg");
	this.shape_12.setTransform(-55.3,-11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8BB00").s().p("AgRgHIAAgDIARgCQADAOAPAJQgDACgFgBQgYgBgDgSg");
	this.shape_13.setTransform(-57.1,-11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9A200").s().p("AgcgHIABgGIAAgCIAXgDIACAAIABADQAEAQATAJIAHADIgHACQgIADgIAAQgegCgEgXg");
	this.shape_14.setTransform(-56.6,-11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8BB00").s().p("AAFAIQgMgGgGgKIAFAAIAVABIABAFQAAAFgHAGIgCgBg");
	this.shape_15.setTransform(-54.5,-12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C9A200").s().p("AAFANQgRgIgHgPIgBgDIADgBIAkABIABACIACAIQgBAJgJAIIgCABg");
	this.shape_16.setTransform(-54.7,-12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#848381").s().p("Ag/gEQAHgIA4gCQA4ACAIAIQgHAMg4AHQg3gHgJgMg");
	this.shape_17.setTransform(-55.3,-11.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAEAEA").s().p("AgjhDIADABQAIADAaAcQAdAcAFAuQgFAKglATQAGhHgjhAg");
	this.shape_18.setTransform(-50.7,-16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("Ag6ArQADgMAOghQAOgjATgTQAVgVAKAHIAGAAQAlBAgIBHQgPAIgSAAQgiAAgxgeg");
	this.shape_19.setTransform(-57.3,-16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhUAvIgCgBIABgCQACgHAPglQAPgmAVgWQAZgWALAGIAJABIABABQAGACAfAdQAfAeAEAyIAAABIAAABQgCAIguAXQgPAIgTAAQgkAAg0gfg");
	this.shape_20.setTransform(-55.2,-16.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9E5200").s().p("AhmCdQALgMAyhCQAwhCArhIQAbgqAFgfQAEgggBgCQAEAAAIAEQADABADAEQgHgDgEAAQABACgEAfQgFAfgbArQgqBIgxBCQgyBCgLAMIACACIgCACIgHgKg");
	this.shape_21.setTransform(-44,-37.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#894B00").s().p("AhnCdQALgMAyhCQAxhCAqhIQAbgqAFgfQAEgggBgCQAEAAAIAEQAIAFAAAHQACAKgkBVQgkBTiCCLIgHgKg");
	this.shape_22.setTransform(-43.9,-37.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5B2F00").s().p("AhtCdIACgCQAEgEAug8QAvg8ArhKQAthNAAg2QAAgDASAJQAOAMgBADIgBAGQAFAEglBYQgmBWiFCNIgDADg");
	this.shape_23.setTransform(-43.8,-37.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#492F0A").s().p("AAWBJQgNgFgJgOQgGgNAAgCIgEgIIgCAIQgJAWgPAHQAHgQACgXQAAgOgHgIQgPgYABgVQACgcAGgGQA4ADANATQAEAHAAAIQgBANgFAOQgEALgBALQAAAEABADQAIASAMAHQAGAEABAEQAAAEgKAJQgIAGgHAAIgDAAg");
	this.shape_24.setTransform(1.5,27.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2D1301").s().p("AgtBKQAFgMAFgUQAFgVgJgLQgVgkAGgZQAGgaADgBIABgCIABAAQA+ADAPAWQAKAUgNAVQgIATABAPQAKAPAMAFQAJAGABAHQABAHgNALQgLAKgMgDQgXgNgJgWQgVAkgKgBIgHADg");
	this.shape_25.setTransform(1.8,27.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#492F0A").s().p("AATBFQgogThRhwQARgIAvAZIAEADIABgFQgBgBAEgMQAEgMAMgIQAOgJAcAOQAoAZgBAkQAAAhgEAGIgBACIACABQAfAOAIAQQABABgFAFIgnATQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgIAAgfgPg");
	this.shape_26.setTransform(50.4,27.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2D1301").s().p("AAQBNQgqgUhVh2IgCgDIAEgCQAJgIA/AbQgBgTATgUQATgLAcAPQAwAggFAqQgCAYgEAKIAbAKQASAHADALQADAFgNAMIgqASQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgKAAgggOg");
	this.shape_27.setTransform(50.2,27.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F0F1F0").s().p("AgGAAQABgIAFgBQAHABAAAIQAAAJgHABQgFgBgBgJg");
	this.shape_28.setTransform(-61.2,-50.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgNAAQABgTAMgCQANACABATQgBAUgNACQgMgCgBgUg");
	this.shape_29.setTransform(-61.1,-51.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIgHQgRABgCACIgDgFQACgCAUgBQARgBAWAXIgFAEQgTgVgPAAg");
	this.shape_30.setTransform(-60.8,-52.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0F1F0").s().p("AgGAAQABgJAFgBQAGABABAJQgBAKgGABQgFgBgBgKg");
	this.shape_31.setTransform(-80,-51.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgLAAQAAgTALgBQAMABABATQgBAUgMACQgLgCAAgUg");
	this.shape_32.setTransform(-79.8,-52.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAFQAAgCAKgFQALgIAYAFIgBAFQgWgEgIAEQgJAGAAACg");
	this.shape_33.setTransform(-80.5,-53.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2DCC7").s().p("AAOAlQhCgHgvgbIgqgTQBhAXBJgFQApgEAYgOQAYgOAGgHIASATQg2A4g8AAIgOgBg");
	this.shape_34.setTransform(34.5,34.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C1A087").s().p("AAVArQhAgHgugcIhCghQAFADA/AMQA/ALA8gDQA4gJAUgPQATgPgBgCIAaAbQg+A8g8AAIgNgBg");
	this.shape_35.setTransform(33.7,34.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BCBAB8").s().p("AAHgMQgKgMgPgFIgRgEQAIgDAZAGQAqAYgEAhIgFAIQgIgjgQgMg");
	this.shape_36.setTransform(-84.3,-70.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgNAsQglgDgOgDIABgJQAGgdAFgLQAFgOAMgRQAGAIAYAEQAWAFAxgTQgCAMgHAHQgIAJgBAUIgCAgQgTAJgbAAIgNgBg");
	this.shape_37.setTransform(-13.7,71.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAyQgrgEgHgCIgDgBIADgOQAHgdAFgNQAFgOAOgUIACgDIADADQgBADAWAIQAVAJA2gVIADgBIABAAIAEgCIAAAEQAAATgLAIQgEAGgDARQgCAUAAAQIAAACIgBABQgVAKgdAAIgTgCg");
	this.shape_38.setTransform(-13.8,71.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#205B0A").s().p("AgOADIAAgEQAPAAANgBIABADIgYACIgFAAg");
	this.shape_39.setTransform(30.7,66.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#205B0A").s().p("AhXAdIABgGQArAFAMgBQACgHgHgXIgBgGIAFACQAFAAASARQATgeAGgHQAGgGABACQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAABIgDAXQAYgVgBAGQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgBAFQgHANgCAKQAWgHAeATIgEAEQgPgMgRABQgRAAgCABIgEABIABgEQAAgEAJgWIgTAOIgGAGIACgLIADgTQgLAOgOAYIgDAEIgCgEQgJgNgJgEQAEAMAAALQAAAFgCADQgGACgLAAQgQAAgbgEg");
	this.shape_40.setTransform(18.7,64.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AADAfQgigBgZgJIAXgzQAMAPBOgHQgGANgCATQAAAGACAGIAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQgKAGgdAAIgIAAg");
	this.shape_41.setTransform(55.6,69.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAAAnQgngCgXgKIgCgBIABgDIAIgUQAIgSAKgXIABAAIAAAAIAFACIAAABIABADQAAADATAEQAQADA3gEIAFgBIgCAFIgGARQgFANAEAOQABAFgFAEQgMAIgbAAIgNAAg");
	this.shape_42.setTransform(55.7,69.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BCBAB8").s().p("AgWDVQABhjAMhjQAKhjAMhEIAKg8IgJA7QgKBFgJBiQgLBlgBBig");
	this.shape_43.setTransform(84,-11.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#492F0A").s().p("AgGANQgZgHgOgJIAdgGIAVgFQAHgBAhAPQgTAPgUAAQgGAAgGgCg");
	this.shape_44.setTransform(75.8,-48.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D1301").s().p("AgLAUQghgPgHgIIgFgEIA+gRIABAAQAGgDApAXIADACIgDACQgYAZgXAAQgIAAgKgFg");
	this.shape_45.setTransform(75.6,-47.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#492F0A").s().p("AgaAeQgCgBAAgEQAAgFADgNQAHgRAQgJQAOgJAFgBQAKAEACADQABAAgKAEQgUAJAAAOQAAAMgKAIQgMAFgDAAIgBAAg");
	this.shape_46.setTransform(59.7,-1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2D1301").s().p("AggAlQgHgFAHgaQAJgWATgLQARgLAEAAIABAAIABAAQAMACAFAMQgCAIgLADQgRAGAAAOQAAAOgNALQgMAHgHAAQgEAAgCgCg");
	this.shape_47.setTransform(59.5,-0.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#492F0A").s().p("AhuDWQgDgBgBgDIgBgFQAEgZAcgvQAcgxAHgiIAAgHQgCgdgPgTQgPgUgDghIAAgCQAJhdBKgeQBKgeAmAAQAEAWAAAaQAAAcgFAhQgRBogLBnQgbApgLgFQgMgCguAgQgcASgbAPQgXAMgOAAIgFAAg");
	this.shape_48.setTransform(75.5,-16.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2D1301").s().p("AhzDhQgGgCgDgFQgEgZAkg8QAdgxAHghQAAghgRgUQgQgWgDgjQAChGAsgjQAsgkAwgMQAygNAVAAIADAAIAAACQAKAygKBDQgSBrgLBqIAAABIAAAAQgcAtgSgFQgQADgoAcQgeATgdAPQgXANgQAAIgGgBg");
	this.shape_49.setTransform(75.1,-16);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BCBAB8").s().p("AAMAfIgHgfQgGgagOgTQgOgTgFgKQACABARAUQAPAVAIAcIAGAaQACAaATAZIgEACQgTgWAAgWg");
	this.shape_50.setTransform(-45.9,22.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BCBAB8").s().p("AgTD0QgrgFgHgCIgDAAIAEgPQAGgdAFgOQAFgPAOgTIACgEQAFgJACgYQABgwgGhEQgGhGgIg6QgJg6gFgMQgRgUgtgSIAhANQAeAMAJAOQALAfAJBlQAIBjAABQQgFAmgEAEQgOATgFANQgFAOgGAdIgCAJQAOADAlADQAjADAZgKIACggQABgWAHgKQAJgGAAgOQABgKgIgSQgEgJAAgTQABg3ARhRQAQhTAUgrIARgGQgXAigQBAQgRBAgHA5QgHA6AGARQASAqgTAMQgEAGgCAUQgCATAAARIAAABIgCABQgVAKgdAAIgTgBg");
	this.shape_51.setTransform(-13.8,52.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2DCC7").s().p("AgPANQAAgNAGgRQAPAIAKADQgGALgWANIgCAAIgBgFg");
	this.shape_52.setTransform(28.9,38.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C1A087").s().p("AgUAEQACgQADgJIABgEIADACQAXAMAHABIACABIAAACQgCAHgQAMQgNANgHABQgFgDACgTg");
	this.shape_53.setTransform(29,38.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2DCC7").s().p("AgKATQgIgKAAgRIABgMQAVAHAPABQgIAUgLAMIgFABQgDAAgCgCg");
	this.shape_54.setTransform(33.6,40.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C1A087").s().p("AgNAZQgJgKgCgPQgBgSABgEIAAgEIAEABQANAGANACIAQACIAEAAIgCAEQgBAEgIAMQgIAOgHAGQgEACgDAAQgEAAgCgCg");
	this.shape_55.setTransform(33.7,39.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E8EAE8").s().p("AgPAmQAJhYAchTQAOgkASgjIAJAEQgQAhgOA+QgNA+gGA3QgHA4AGARQARApgTAOQgFAIgCAaIgCAdIhAABQAmhMAJhag");
	this.shape_56.setTransform(-8.8,55.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F0F1F0").s().p("Ag+DkQAIgfAMgYIAMgZQAIgcgFhPQgFhPgIhKIgLhVQgEgKgVgLQgWgMgUgIIACgFIBAAWIBvAnIA8AUQgQAhgNA+QgOA/gGA2QgGA4AFARQASApgUAOQgFAIgCAaIgCAdIg6ABIg+ACg");
	this.shape_57.setTransform(-14.4,51.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F2DCC7").s().p("AAFARQgMgJgIgSQATgDAHgEQAFAOAAAHQAAAJgHAEIgCABIgCgBg");
	this.shape_58.setTransform(42.8,39.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C1A087").s().p("AAJAYQgJgFgJgNQgJgLgCgEIgBgEIAEgBQAegFABgDIADgCIACAHQAHAdgMAMIgCABIgDgBg");
	this.shape_59.setTransform(42.5,39.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#492F0A").s().p("AAwAtQgbgFgUgIIgOgFIgUgBQgaAAgbgGQgcgHgIgaQgDgNAIgHQASgOAhADQAhACAEACIgBAAQAeAIA0gEQA1gEATgEIAAABQAAA7gcAUQgQAKgSAAIgOgBg");
	this.shape_60.setTransform(21.2,-25.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2D1301").s().p("AAxA0QgdgFgUgJIgOgFIgUgBQgaABgegIQgfgHgJgeQgEgQAKgKQAUgQAjADQAiACAGACIABAAQAgAJA7gGIBCgHIADAAIAAADQABBDggAXQgSALgUAAIgOgBg");
	this.shape_61.setTransform(21.5,-25.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#492F0A").s().p("AgYBUQg+gSgrAOQgEAAgSgFQgTgEgMgQQgGgIAAgKQAAgHADgIQAMgpATgbQATgbAxgOQBAgXA9AYQAdARALApQALAeAeANQAfANATACIAHACQAOAHgDAPQgKAmhaAHQg/gBgxgOg");
	this.shape_62.setTransform(-30.5,6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2D1301").s().p("AgZBdQg9gSgpANQgCABgXgDQgWgDgOgRQgKgWAIgcQALgmATgaQAUgbA1gPQAdgJAkgGQAhgGAeAPQAgATAMAsQAJAeAeANQAdAOASADIAJADQARAJgEATQgIAphhAJQhAgBgxgOg");
	this.shape_63.setTransform(-30.6,5.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#492F0A").s().p("AjLBpQghgLgKgXQgEgLAAgNQADgmASghQAKgVACgNIABgMQgCgegMgMQBIAOBkAMQBhANBPAIIBbAJQAqAdAAAbIgBAIQgHAWgYAPQgZAPgXADQgfACgjgJQgigKgpAAQgeADgoAYQglAVgpANQgTAGgUAAQgXAAgXgIg");
	this.shape_64.setTransform(-2.6,-38);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2D1301").s().p("AjRByQgjgNgLgZQgNgzAdgyQAKgUACgNQADgagKgOQgJgOgCgBIgJgHIALACQBKAPBqANQBnANBTAIIBaAJIAAAAIABABQA1AkgJAiQgIAbgcAPQgbAQgVACQghADgkgKQgjgKgpAAQgdADgnAYQgkAUgrAOQgUAGgWAAQgYAAgZgHg");
	this.shape_65.setTransform(-2.9,-38.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#331D03").s().p("Ag4AaQADgGAhgWQAfgZAmgCIAIABIgGAEQgSANgIASIgFAAQAEgQARgOQgjAHgbAUQgdAWgCAEg");
	this.shape_66.setTransform(-34.7,-66.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#492F0A").s().p("AhyB2QgIgKABgOIABgTIACgWIgBgKQgJgrgigQIgVgQQgIgHAAgMQAJgqASgUIAIAEIABAAQAGgDAugMQAugNAcAKQAwAdACAEIAEADIAAgGQgBgBAGgIQAHgOA8gDQArAFANAFQANAFAaABQgIAQgiAjQgiAjg9AMIgEAAIAGALIAHAQIgBABIABACIAAAEQABAGgFAlQgCAdgVARQgVARhGABIgGAAQgpAAgNgOg");
	this.shape_67.setTransform(-44.9,-60.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2D1301").s().p("Ah5B7QgOgVAHgcQACgPgBgPQgJgnghgQIgVgRQgSgUAOgeQAOgeAKgLIABgCIAKAFQALgFAugLQAtgLAdAKQAjAVAMAKQABgEAEgFQAIgPBAgDIABAAQAsAFANAFQAOAFAdAAIAFAAIgCAEQgBAGgjAqQgjAphHARIAHANIAFAMIgCABIAAADQABAIgFAkQgCAjgZARQgZARhFABIgFAAQgtAAgOgQg");
	this.shape_68.setTransform(-44.9,-60.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#492F0A").s().p("AAkhNQALAGADAUIgBAJQgIAYgVASQgUAQgOAIQgYATgLAjQAThtBCgug");
	this.shape_69.setTransform(-79.2,-64);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2D1301").s().p("Ag6BiQAPiOBRg1IABgBIACABQATAHgCAjQgIAagXATQgWASgNAIQgUAPgLAeQgMAegBAIg");
	this.shape_70.setTransform(-79.4,-62.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F0F1F0").s().p("AgsgVQgKgegKgHQAwgEAiATQAmATAKAKQg1A5ADARQgvgigNgvg");
	this.shape_71.setTransform(-82.6,-69.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E8EAE8").s().p("AAqD6QgXgRgOgRIgOgTIgBgBIgBAAQgHAHgugaQgygpgJhuQgMiRgBg/IgEhIQAOAtALAxQANBCAUBCQAUBAAkA0QA3BMAhAMQAhANAuAgQgKAHghARQgUAKgQAAQgLAAgJgFg");
	this.shape_72.setTransform(-42.1,9.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E8EAE8").s().p("ABlD5IgBgCIgBAAIgWgHQgUgHgUgRQgJgpghgIIgWgCQgRhDgchCQgchAgJhFQgBhpBKhNQggAyAGA/QAGBAAnAtQCKCYgMDBQgCgUgGgPg");
	this.shape_73.setTransform(47.1,12.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E8EAE8").s().p("AnECOQBCg5A1hJQAzhHAUhUQAcATBkAcQBjAcC+AJQCkAFCFgGQhoAvh4ABQh4ABh7gHQh+gHh4AWQglAJgYAoQgYAogdAhQgVAZgiAAQgKAAgMgCg");
	this.shape_74.setTransform(-7.8,-38);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E8EAE8").s().p("AhpBKQhcgKhLgNQAchFAxgeQBkgqBqAWQBtAXBtAOQAjAIAJAnQgHgFgEgHIgCgDIgCACQgCAHhcAlQhIAdh6AAQgjAAgogCg");
	this.shape_75.setTransform(23.5,32.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E8EAE8").s().p("AiTCBQAZhtBPhmQAlg1ATg9QAVg9AYg9QAIgPAEgRIgBAjQABAdACAbQgLDBBzCIIgDARQgRgIgogwQgogvgJhbQgJi5ABgHIgFAAQAAAJgIBHQgIBGgYAeQgTAWgrBTQgrBSgcBXQgcBXAXAhQABACgBAHQgBAFgSACIgCAAIgBACQgIAKABAoQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABQgEAEgQABQADhwAZhug");
	this.shape_76.setTransform(76.2,37.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F0F1F0").s().p("AIULRQANgjAOgcQAOgdAFgDQAEAAADgIQAJgUAKgzQAKgzABg1QAAgogKgaIgBgBIgBgBQgDAAgZgKQgagKgTgXIgBgCIgDACQgBAHhcAlQhdAliygLQi0gUhtgdQhugegDgDIgBgBIgCABQgEAEgkATQgjATgZgLQgXgRgPgRIgPgTIgBgCIgCABQgHAGgugaQgygpgJhtQgLiRgChAIgEhBQgCgjgBgEQgFgGgPADQgmAFgCgDIgCAAIgBABIghAXQgdAUgQAIQgJAIgegFQgfgEg2g7IAAgBIgBAAQgEgBgngPQgmgPgVgUQgEgFAAgKQACgaARgnQARgmAPgXIAQgXQAMgUAHgbIABgWQgBg1AZhRQAYhQBaglIgCAFIABACQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAEAAQAXgMBLAfIABAAIACAAQAGgDAtgMQAvgMAcAKQAxAcACAEIAFAEIAAgGQgCgCAHgIQAHgOA8gCQAqAEAOAFQANAFAaABQgIARgiAiQgjAjg8AMIgFABIACADIAPAhQANAcAJALQgDAFBhAnQBhAmDzANQDVAHCjgNQCjgMCTgiQAEgBAWAIQAXAIAZAbQAiArAABLQAAAcgFAhQgZCUgICOQgEARgIAQQgZA9gUA9QgWA9glA1QhPBngYBuQgZBtgDBxIgUABQgkAAgfgLg");
	this.shape_77.setTransform(-3.3,-0.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F0F1F0").s().p("AItLbQgkgBgZgJQAOgjAOgcQANgdAGgDQADgBAEgHQAJgUAKgzQAKgzABg1QAAgogKgaIgBgBIgBgBQgDAAgZgKQgagKgTgXIgCgCIgCACQgCAHhcAlQhcAlizgLQizgUhtgdQhugegEgDIgBgBIgBABQgEAEgkATQgjATgZgLQgXgRgPgRIgPgTIgBgCIgCABQgHAGgugaQgygpgJhtQgLiRgChAIgEhBQgCgjgBgEQgFgGgPADQgmAGgDgEIgBAAIgBABIghAXQgeAUgPAIQgKAIgegFQgegEg2g7IAAgBIgBAAQgFgBgmgPQgmgPgVgUQgEgFAAgKQABgaASgnQARgmAOgXIAQgXQANgUAGgbIACgWQgBg1AYhRQAZhQBaglIgCAFIABACQAAAAAAABQAAAAABAAQAAABABAAQABAAABAAIAEAAQAXgMBLAfIABAAIACAAQAFgDAugMQAugMAdAKQAxAcACAEIAFAEIAAgGQgCgCAHgIQAGgOA9gCQAqAEAOAFQANAFAaABQgIAQgiAjQgjAjg9AMIgEABIACADIAPAhQANAcAJALQgDAFBhAnQBhAmDyANQDVAHCkgNQCjgMCTgiQADgBAXAIQAXAIAZAbQAiArAABLQAAAcgFAhQgeCogECdQgDCBAxBTQAkA5AOAfQAOAggBAYQAAAVgFAcQgSgJgogwQgngwgKhcQgJi4ACgHIgGAAQAAAJgIBGQgIBGgYAfQgVAWgrBTQgqBTgdBXQgcBYAXAhQACACgCAGQgBAGgSACIgCAAIAAABQgJALABAnQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQgKAHgaAAIgLgBg");
	this.shape_78.setTransform(0.2,-0.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BCBAB8").s().p("AAVBHQg3gmgOg4QgTgtgFAEIgIgEIAIgCQA9gIAqAbQAtAaACAFIADADIgDACQgkAkgJAXQgJAXACABIgBAFg");
	this.shape_79.setTransform(-83,-69.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BCBAB8").s().p("AIoLmQgngCgXgKIgCgBIABgDQAFgQARgnQARgnAMgHQAHgHAMg3QAMg5ACg8QAAglgJgZQgIgBgXgKQgYgKgSgWQgNAPhZAjQhZAkiigOQh3gPhxgWQh0gYhDgXQgKAIgmASQgmATgagNQgqgmgGgSQgRAJgugWQgygrgHhwQgKiVABhDQgCg2gEgnIAAgBQACgDgCgFQgDgCgLACQgiAGgIgEIgkAZQgbATgPAIQg4AZhKhXQgJgDglgOQglgPgVgVQgFgGAAgMQACgiAVgqQAVgqAHgLIAAAAIAAAAIAPgWQANgUAGgbIACgVQgBg4AahUQAahUBjgkIAJgCIgGAHIgFAHIACgBQAXgLBNAfQALgFAtgLQAugMAcALQAlAVAMAKQABgEAEgFQAIgPA/gDIABAAQArAFAOAEQANAFAdABIAFAAIgCAEQgBAGgjApQgjAphGARIASAmQALAWAGAHQAKAPBoAjQBnAhDUALQDVAGCjgMQCjgMCTgiIAUgCQACgBATAGQATAIAZAdQAuA/gWB9QgaCZgJCTQgJCVA3BVQBFBngCA4QgCA4gGABQgHgBgxg2Qgyg4gMhpIgGiLQgEAmgJAmQgJAngPARQgeAeg2B0Qg2BzgGBeQgBAUAGAPQABABAAAGIgBAHQgFAIgRACQgGAJgCAZIABAKIAAACQAAAEgDADQgMAIgbAAIgPAAg");
	this.shape_80.setTransform(0.3,-1.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgKAhQgggHgLgEQAKgkAVgVQADAFANACIANACQAbAEATgCQgHAZAAAaIABAGQgOADgPAAQgPAAgNgDg");
	this.shape_81.setTransform(44.7,65.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgUAoQgkgIgFgDIgCgBIAAgCQADgZAPgTQAPgUAGgGIAEAEIgCAEQgBACAOACIANACQAeAGAUgEIAKgDIgHAIQgGAJgCATQgBAVABAMIAAACIgCABQgQAEgRAAQgQAAgSgFg");
	this.shape_82.setTransform(45.1,65.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E8EAE8").s().p("AggAvQANg4gEg8QgEg8gpguQASgLAWgCQAggCAdAJQAcAJAIAHQgTAdgXA8QgWA8gOAxIgQA2QAGAEAHAWQAAAFgDAEQgHAJgCASQgCATAAANIAAAGQgKADgLAAQAAhGAPhJg");
	this.shape_83.setTransform(52.1,50);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F0F1F0").s().p("Ag3C7QgggHgLgEQAEgZANgQQAMgRABAAIAIgKIAAgBQAEgKAAgXQgBg6gHhHIgJhbQAggmApgEQAhgCAdAJQAdAJAHAHQgTAdgWA8QgWA8gQAxIgRA2QAHAFAGAVQAAAFgDAEQgGAJgCASQgDATAAANIABAGQgMADgPAAQgPAAgPgDg");
	this.shape_84.setTransform(49.2,50);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BCBAB8").s().p("Ag6C/QgkgIgFgDIgCgBIAAgCQAEgaAPgVQAPgVAFgEQAFgLAAgRQgHh4gIgzQgJg0gBABQADgDAdgVQAdgUAXgFQAogBAcAPQAbAQADAEIACABIgCACQgRAcgTA2QgUA3gOAuIgRA7QARARgDAKQgEALgEACQgKAWABAhIABAJIAAACIgCABQgOADgRAAQgSAAgSgEg");
	this.shape_85.setTransform(48.9,50.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgPAqQgYgDgIgDQAGgaAOgWIAQgaIAAgBIAAgCQAZAKAigEQgNA9gFAIQgTAIgRAAIgJAAg");
	this.shape_86.setTransform(-20.7,70.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgVAwQgbgDgDgDIgDAAIAAgDQAFgaAOgXQAOgZAEgFIAAgFIABgDIADABQAbANAkgGIAFgCIgBAFQgQBJgEADIAAABIgBAAQgVAJgTAAIgOgBg");
	this.shape_87.setTransform(-20.6,70);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E8EAE8").s().p("AAhAFQgRhohEhQQgPgcgGgJQAfgGAkAOQAjANAIAEQAnCDgCBfQgCBOgLAvQgLAugEAIQgHADgIACQAUhrgShrg");
	this.shape_88.setTransform(-22.4,52.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F0F1F0").s().p("AAADbQgWgCgIgDQAFgaAOgYIAOgbIAAAAIABgBQACgeAAgdQgEh7gehOQgghNgNgQQAfgGAkANQAjANAIAFQAnCDgCBeQgCBOgLAvQgLAvgEAHQgSAIgSAAIgKgBg");
	this.shape_89.setTransform(-22.4,52.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BCBAB8").s().p("AgBDhQgcgEgDgCIgDgBIABgCQAEgbAOgZQAOgYACgFQADgeAAgcQgDiGgmhLQgmhLgGgCIACgLIADgCQAjgJAoAPQAnAPAGAEIABABIAAABQA0C3gSBvQgRBwgHAEIgBABIgBABQgVAJgUAAIgMgBg");
	this.shape_90.setTransform(-22.6,52.3);

	this.addChild(this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.9,-76.9,189.9,153.9);


// stage content:
(lib.cowCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cow();
	this.instance.setTransform(100.4,105.1,1.039,1.039);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;