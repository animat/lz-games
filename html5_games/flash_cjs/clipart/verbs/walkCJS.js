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



(lib.walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBaQgngHgVgcIgBgBIAAgCQACgJAVgzQAVg1AcghIgQAeQgOAcgKAZQgUAvgFAQQAhAdAvAEQAwAEAUgDQgQgxAGg5QAIg1AGgFQgDAGgGA4QgGA3AVA0QgCABghADIgRAAQgaAAgagFg");
	this.shape.setTransform(-8.9,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7E7BA").s().p("AAQBbQg3gCgngjQABgGAVg0QAUg1AdgiIBPAaQgCAFgFA2QgEA0ASAsQgEACgWAAIglgBg");
	this.shape_1.setTransform(-8.8,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4C095").s().p("AgSCnQgMgMAAgTQgBgSADgLIgIABQgIABgDgCQgDgDABgGIABgKIAKgkIAAgBIgIghIgNhCQgHgkgCgSIAAgIQACgUAIgPQAIgPAFgGIAZAMQgMAKgFAjIAAAPQAFAgAMAqIAOArIABABQAvAdAWAWQAGALgBATQgBAKgFAIIgLACIgJACQgBACgMAOQgNANgOgGIgHAKQgHAHgFAAIgCAAg");
	this.shape_2.setTransform(-8.8,43.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfCeQgGgQACgUIAAgHQgIAEgIgFQgFgGABgKIABgLIAGgRIAHgTIgRhDQgNg2gDgfIAAgJQADgYAKgSQAKgSADgBIABgCIAoARIgEAEQgBAAgIALQgIAMgCAVIAAAOQAEAdAKAnIANAwIAoAaQAbARAGAIQAGANAAAUQgBASgIAFIgVADQgCAIgMALQgNAMgRgHIgHAMQgGAGgIABQgGgCgGgPg");
	this.shape_3.setTransform(-8.9,43.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD524").s().p("AgWAGQgagQAAgCIAXgUQAKAXAdAUQAfAVAFABQgwgJgYgSg");
	this.shape_4.setTransform(-24.6,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7C903").s().p("AgxA9QgsgfgJgNQACgOAUgmQAUgoAlgJQAXgCAnAKQAnAKAVAYQAFAIgBANQgDAYgRAgQgQAfgOASIgXABQgrAAgkgYg");
	this.shape_5.setTransform(-23.3,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag8BAQgsgjgDgHIAJgaQAIgbASgbQATgbAdgGQAYgDAnALQApAKAXAaQAPAhgfAxQgfAygGAGQgNABgNAAQgwAAgkgcg");
	this.shape_6.setTransform(-23.2,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0B500").s().p("AhvBTQgGgDgBgIQBMAMBEgsQBFgpAXhSQABAMgBAOQgGBAhGAqQgwAbgwAGQgaACgPAAQgMAAgEgBg");
	this.shape_7.setTransform(-8.7,29.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7C903").s().p("AhuCZQgKgGADgUQgBgMALgCQB8gOAoguQApgtgEgjQgEhDgmgWQgZgNgbAEQgaADgOAEIgGABQgIABABgBQABgFAKgJQAlghAwAOQAZAGAbAtQAaAsgCBCQgGBChGAqQgxAbgvAGQgbADgOAAQgMAAgEgCg");
	this.shape_8.setTransform(-8.7,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhuChQgQgMAEgYQAFgRAFgDQBYgDApgeQArgeANgeQAOgcgBgFQAAgogJgQQgJgRgOgLQgTgNgdABQgbAAgRADIgHABQgHADgGgHQAAgNANgJQAWgUAbgCQAegDAaAOQAWAMAWAqQAWAqgDA+QgEBFhGArQgxAcgxAJQggAFgQAAQgJAAgEgBg");
	this.shape_9.setTransform(-8.9,22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5C645").s().p("AggAkQAygbgGg/QALAGgCADIAFAOQAEAUACAVQADAZgIANQgFAHgJAAQgqAAgDgTg");
	this.shape_10.setTransform(-24.1,30.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFD04D").s().p("AgPA0QgKgKgCgJQgDgOgFgeIgFgkQgBgDABgDIABgGIABAAIAFAAQAqACALAHQALAHgBADIAEAOQAEAUADAVQACAYgIAOQgFAHgJAAIgFAAQgXAAgIgIg");
	this.shape_11.setTransform(-25.1,30);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTA3QgLgMgCgKQgDgNgFgcIgFgkQgCgGAFgLQADgDAEAAIAEABQBFACgBASQAAAFADAMQAEAUACAWQADAYgJAPQgHAJgLABIgGAAQgaAAgJgKg");
	this.shape_12.setTransform(-25.1,30.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0B500").s().p("AgEAmQgbgFgVgZQAGgZAIgXQARAYAVATQAWAWAfAIIgBAFQgPADgPAAQgOAAgMgDg");
	this.shape_13.setTransform(-26.4,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0B500").s().p("AgICaQgQgEgSgCQgbACgOgLQBEgvAfhSQAihPAOhXIAGADIAFACQAQANgOBIQgOBFgQA9QgPA6gBATQgBAJgEAEQgFADgJAAQgJAAgLgDg");
	this.shape_14.setTransform(-21.9,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7C903").s().p("AACCpQgOgEgSgBQgcABgOgMQgOgNgIhGQgCgNABgZIACgkQAGg8ASgvQARgvAGgKQATgIAmANQAoAMAfANIAFABQAQANgOBJQgOBGgQA8QgPA7gCASQAAAKgEADQgFADgIAAQgKAAgNgDg");
	this.shape_15.setTransform(-23.1,22.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7C903").s().p("AACCpQgOgEgSgBQgcABgOgMQgOgNgIhGQgCgNABgZIACgkQAGg8ASgvQARgvAGgKQATgIAmANQAoAMAfANIAFABQAQANgOBJQgOBGgQA8QgPA7gCASQAAAKgEADQgFADgIAAQgKAAgNgDg");
	this.shape_16.setTransform(-23.1,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAACvQgbgLgOAEQghgBgMgUQgLgUgEg5QgDhYAYhLQAYhMAFgFIAAgBIABAAQAVgKAnAMQApANAiAOIAEACQAUAKgKA/QgKA/gXBXQgPA6gCASQAAANgHAGQgHAGgMAAQgKAAgNgFg");
	this.shape_17.setTransform(-23.2,23);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#603D05").s().p("AAGAWQgPgKgPgeIAPgMQAAADAJAZQALAYAOAJIgBAAQgDAAgPgJg");
	this.shape_18.setTransform(-45,-73.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#603D05").s().p("AgsBpQgLgQgCAVQgEAXAAAcIABAfQgbgwACg/QACg+ACgGQgOAcgFAlIgFApQgQgXAFgwQAIgwACgEQgvAWgCAFQAKg9AkgyQAkgyAjgeIAkgfIACgJQgHBkAhAxQAiAyAnANQAoAPACgBQgbATgZAGQgZAHgCgBQALBFAoAHQAiAFAJgCQgRAIgJAbQgKAcAAADQglgkgeAFQgdAGgSATQgQASAAADQgXhXgLgRg");
	this.shape_19.setTransform(-39.4,-47.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#603D05").s().p("AjACmQhkg4gYg6QgXg4AEgFQgCAAASgUQASgUA7gfQA7geB7gjQgJADgqAWQguAYgPAlQABgCAjgUQAigUA1gPQBBgPBEgMQBEgLAkgcQADABgDARQgCAQgqAWQACAEA4AMQA4ANBPgiQgCAGgzAhQg0AihYgLQADAEAkATQAkATArADIgoAQQgmANgzAKQg0AJgpgMQADADAdAYQAdAYAdAFQgCADgzAlQgzAlhJAaQgiAMghAAQgoAAgmgRg");
	this.shape_20.setTransform(-5,-68.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAhAdQgQgQgYgCQgagCgDABQgJgDAEgNQAEgOAIgHQAIgGARAEIAfAIQAPAHABAaQACAUgGAAQgDAAgDgDg");
	this.shape_21.setTransform(25,-64.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAAhQgxgHgfgTQgegRgCgDIgDgDIAVgSQgCAGgIAMQAPANBAAPQA9ARBQgfIgLAJQgvAcgqAAIgQgCg");
	this.shape_22.setTransform(8.1,-18.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhNBhIAWgDIAigEQBBgHARgtQALghgLggQgMgigTgPQgcgRgcANIgrAQQAEgGAkgSQAigSAjAUQAUAPAMAkQAMAigMAiQgIAZgjAWQgcASg1AAIgZgBg");
	this.shape_23.setTransform(33.6,-31.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4C095").s().p("AhLBfIADgqIAGhKIADgpIgEgFQAEgFAhgQQAggQAiAVQAVAPAMAkQAMAigLAkQgIAYghATQgaAPgyAAIgcgBg");
	this.shape_24.setTransform(33.4,-31.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAAQABgFADAAQAFABgBAEQgBAGgDAAQgDgBgBgFg");
	this.shape_25.setTransform(30.8,-48.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMAAQADgRAKAAQAMACAAAQQgCAQgLABQgMgDAAgPg");
	this.shape_26.setTransform(30.6,-47.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAAQACgJAFAAQAIABAAAIQgCAKgGAAQgHgBAAgJg");
	this.shape_27.setTransform(13.7,-39.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAAQADgVASAAQASADAAATQgEAVgQAAQgSgDgBgTg");
	this.shape_28.setTransform(12.9,-39);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDF6F9").s().p("AAoCJQgtgFgdgqQgcgpADg5QAEgwAZgjQAZgiAigLQg1BXAcBnQATAwAlAiIgPABIgFAAg");
	this.shape_29.setTransform(0.3,-42.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDF6F9").s().p("AggAQQgDgeAIgdQAIgcASgNQgSBNAiBMQAJAKAKAFIgFAAIgGABQgrAAgMhFg");
	this.shape_30.setTransform(25.3,-51.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgICKQgvgFgcgpQgdgpADg5QAGg7AhglQAiglAtACQAvAEAcAqQAdApgDA5QgFA7giAlQggAjgrAAIgEAAg");
	this.shape_31.setTransform(5.3,-42.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgJCRQgygFgggsQgfgrADg8QAGg9AlgnQAkgnAyACQAzAFAfAsQAfArgDA8QgGA+gkAmQgjAlgvAAIgFAAg");
	this.shape_32.setTransform(5.3,-42.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgDABIAGgDQgTgIgPAFIgNAFQAlgeAZASQAaASABAFQgbgKgNAIQgLAJAAACQgDgOAGgFg");
	this.shape_33.setTransform(-32.8,-18.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhIAdQgXglAhgfQAagYAfAEQAkAKAZAeQAYAaACAHQgCgFgZgYQgbgcgigJQgbgEgZAWQgTATACAPQACARAGAIQAZAkAmgIQAcgMAMgBIAKAAIgwATQgIACgJAAQggAAgVggg");
	this.shape_34.setTransform(-33,-19.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E8B187").s().p("AhIAdQgXglAhgfQAagYAfAEQAkAKAZAeQAZAcACAGIgkAaQAEgEg1AWQgJACgIAAQggAAgVggg");
	this.shape_35.setTransform(-33,-19.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIA4IgKgPQgKgNgGgMQgFgJANgTQALgQAOgQQANgPAJAAQAGgBAGANQADAMAAAOQAAAOgFAGQgFACgKATIgSAkIgCAFg");
	this.shape_36.setTransform(-8.5,-59.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#422C01").s().p("AjrFgQgygOgegUQgggVgYACQgJgOgBgrQABgPAHgOIAGgMIgLAHQgDABgSAQQgRAQgKAbQgBgTACgbQADgzAPgwIACgHIgHACIgdAOQgZANgSAQQAFgoAkhbQAjhZBShKIACgCIgCgCQgBgEgYgNQgYgOgqAGQABgKANgUQANgUAkgOQAEAPAMAYQAMAZANABQAHgBAWgPQAegVA/ggQA/ghBkgaQB+gdBhgKQBkgLAhgRQgDAegsAxIgFAGIAHAAIAqAAQAlgBAugLQAtgLAggcQAAATgaAnQgaAnhQAoIgEACIADAEIAJAFQAIAEANgBQgVAVg4AkQg3AlhYAeIACAGIAYgDQAUgEAYgHQgnAjhjA6QhhA8hzALIgDAAIAAAEQAAAGAIAiQAIAjAWAUIgZAdIgWAaIAAABIAGApQAEAaAIAOQgMAFghAFQgNACgOAAQgYAAgbgFg");
	this.shape_37.setTransform(-10.1,-54.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AjtF5Qg1gOgfgVQgdgSgOADIgOADIgGgMIgIgaQgFgWAHgVQgNALgLAcIgMAfIgHggQgHgcABgbQADgkAGgfQgTALgXASIgaAUQgFgGAXhhQAYhhBwh8QgMgOgigBQgjgBgEABQgCgGAMgiQANghA0gXIAPAeQAMAaAIAJQAHAFAIgHIAMgLQAcgVA2ghQA1ggBjgaQA/gPBCgKQBCgJAxgDQBegJAjgaQAhgZAAgEQABAFgFAoQgEApgdAhQA/AFApgUQAqgTAVgWQAVgXAAgBQAFADgNA4QgNA5hhBCQACACAMABIANADIgIAIQgFAFgzAjQgzAjg6AaQAEADAIAAIAIAAQgDAEg0AnQg0AqhQAsQhOAshZALQgEAXAJAdQAJAcALAIIgWAcIgZAiQAEAZAIAZIAJAbQgDADgnAIQgRAEgVAAQgaAAgfgGg");
	this.shape_38.setTransform(-10,-56.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag2ATQgDgkAMggQAMghAXgEQAWgBATAdQATAdAFAkQAEBKgzAGIgHAAQgrAAgMhEg");
	this.shape_39.setTransform(27.4,-51.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgiBOQgVgRgGgpQgEgmAOgjQANgiAbgFQAZgBAVAfQAVAfAGAmQADApgQAVQgQAWgYACIgHAAQgTAAgRgPg");
	this.shape_40.setTransform(27.4,-51.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4C095").s().p("AjoBXQgjioAJixQA+guBigiQBigiCKABQAKATAdBUQAdBTABBSIAAABIAPAZIABAAQAEgBARAUQASAUgBA3IgBAEQgFA9g4AyQg5AxhwA8Qg3AlgTAaQgTAaABANQgBAIACACQgBAGgMANQh8hygiirg");
	this.shape_41.setTransform(8.3,-31.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E8B187").s().p("ABLErIAHgLIABgDIgDgCIg9gqQg1gng4g2Qg3g1gDgtQgCgFgGg0QgGg3ADhAQADhDAcghQAhgnBKg3QgJCwAhCpQAiCrB8ByQgGAGgJADQgHACgHAAQgYAAghgWg");
	this.shape_42.setTransform(-15.4,-25.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4C095").s().p("AhbFkIAGgMIABgDIgCgCQgGgCg3gnQg4gog3g1Qg3g2gEgtQgBgEgGg3QgHg1ADhAQADhCAcgiQAfgiA+gxQA9gxBmgmQBjgmCVABQAKATAdBUQAdBTABBSIAAABIAOAZIABAAQAEgBASAUQASAUgCA3IAAAEQgFA9g5AyQg4AxhwA8Qg6AlgTAaQgSAaAAANQAAAIABACQgBAEgEAKQgGAJgPAGQgGACgIAAQgYAAgggWg");
	this.shape_43.setTransform(1.5,-31.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhlFsIgCgBIABgLQABgKACgEQgQgJg4gmQg3glgzgyQg0gxgDgtQgBgHgEg2QgEg1ADhAQADhFAfglQAegiA/gyQA/gyBmgmQBlgnCXABIACAAIABACQACACARAtQASAsARA/QARA/gBA5IAGAKIAHALQAIABARAWQASAXgCA2IAIAKQgGA/g9AxQg9AxhyA9QhEApgNAWQgNAXADALQAAAFgDAOQgDANgPAHQgMAEgMAAQgdAAgjgVg");
	this.shape_44.setTransform(1.7,-31.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EAD7A7").s().p("AgGAEIgNgDQAlgBAAgDIACADQgMAEgJAAIgFAAg");
	this.shape_45.setTransform(0.6,9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EAD7A7").s().p("AhDCUQAGgyAagmQgdh2Akh2IA6ACQgWBcAFBZQAFBaAyBQIgDAAQhQAAg0gdg");
	this.shape_46.setTransform(-9.8,36.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F7E7BA").s().p("AAGD8Qg/gIgpgXQgqgWgIgIQAAgSACgSQAQiUArhjQAshlAKgKQAEgDAWgKIgEgBQgUgGAAgKQABgQA4gDQBeAAgBAUIAAADQgCAKgIAGIgKAGIgBAAQAOAmAMBgQALBeAHBbIAHBvQhAAeg3AAIgYgBg");
	this.shape_47.setTransform(-7.2,29);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAJEDQhGgJgvgZQgvgZgBgDQADhvAdhaQAdhcAdg4QAdg3ACgDIAKgFQgOgIABgMQgBgWBAgDQBggCAEAcQABANgJAIQgIAIgGADQAQAzANBlQANBiAHBVQAGBVgBAHQg/Akg7AAQgNAAgNgCg");
	this.shape_48.setTransform(-7.1,29);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D3BA7D").s().p("AgXAyQgZgZgLgdQgMgfgTgbQBqAUBDADQARAogWAUQgeAWgXAOQgJAGgJAAQgNAAgRgNg");
	this.shape_49.setTransform(-8.3,53.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E5CE8C").s().p("AggBlQgqgHgNgGQADgNACgfQgbgzgIgoQgIgoAEgPQC1AjBAgMQgHANgUAfQgdApgPAfQgGARgBAOQAAATACAHQgbAJgaAAQgNAAgOgCg");
	this.shape_50.setTransform(-6.1,57.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AghBtQgvgKgGgDIgDgBIABgDIAFgVQAEgUgIgQQgjg+gDglQgEgmACgBIgKgJIAMADQDCAlA+gNQAEgCACACQACAEgCACIgBACQgFANgXAiQgeAqgQAfQgJAYAEAOQADAOABABIABADIgDACQgfAMgdAAQgQAAgQgEg");
	this.shape_51.setTransform(-6.6,57.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4C095").s().p("AgFAtQABgEABgHQADgUgSgzIASgHIAQgHIACAwIABAuQgFAJgIAAQgGAAgFgHg");
	this.shape_52.setTransform(-7.1,71.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJA4IgCgIQACABACgSQACgSgSgwIgCgFIAygVIABBsQAAACgLAJQgEAEgGAAQgFAAgJgGg");
	this.shape_53.setTransform(-7.3,71.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7EBCD").s().p("AgRAqQgUgEgJgJIgGgEIgDgDQAEgGAPgHIAHgCIgGgEQgOgGgHgRQAAgEACgDQAMgLAlgDQAjgDAYASQADADAAAFQgGAOgLAEIgCABIAFANIAHASQgmALgSAAIgLgBg");
	this.shape_54.setTransform(-7.1,78.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgSAxQgVgEgJgKIgGgEQgHgFABgEIAAgBQAEgKANgGQgMgHgGgRIAAgDQABgFADgEQAOgOAngDQAkgDAZAUQAFAGAAAHIAAABQgGARgLAEIAHASIAGAOIgEABQgqAMgUAAIgKAAg");
	this.shape_55.setTransform(-7.3,78.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3D2B03").s().p("Ah6AnIgCgMQAtAPAlgEQAlgEAEgCIABgBIAAgDIAAgOQAGguAUgTIAHgBQATgDAZACQAZABAOARQALATgCATQgDAWgDAHQgLADgsAJQgtAJgzACIgLAAQgvAAgggQg");
	this.shape_56.setTransform(-2.3,88);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ah+AsIgCgBIgDgcIAFADQAoAPAjgCQAkgDAKgDIABgMQAFgyAWgUIABgBIACAAIAHgBQAVgDAaABQAaACAQATQANAYgEAXQgDAZgDAEIAAABIgCABIg0AMQgtAKg3ACIgMAAQgyAAgjgSg");
	this.shape_57.setTransform(-2.4,88);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#75653E").s().p("Ah6AuQgDgLABgiQAAgjAagbQAJAGAaAHQAaAHAegOQAGAKAbABIAIgBQASgDAZACQAZABAOARQALATgCAUQgDAVgDAHIg3ANQgtAIgzACIgLAAQguAAghgQg");
	this.shape_58.setTransform(-2.4,87.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ah/A0IgBgBIAAgCQgDgGAAgpQAAgnAegfIACgBIACABQACADAcAJQAbAJAggPIACgBIACACQAAABAGAFQAIAFAQgBIAHAAQAVgEAaACQAaACAPATQAOAYgEAXQgEAZgCADIgBACIgBABQgGACguAKQguAJg3ADIgKAAQgzAAgkgSg");
	this.shape_59.setTransform(-2.4,87.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgXA4QgogWgPgLIgDgBIAAgDQAIgSAWgTQAXgWAXgQQAXgRADAAIglAgQgkAegVAeQAdASAfAPQAfAPALgEQAIgJAGgdQANgoANgPQAMgPABABQgaAfgGAoQgGAigLAMIgIABQgSAAgegSg");
	this.shape_60.setTransform(-18.4,29.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F7E7BA").s().p("AgeAxQgrgXgFgEQAOgcAmgdQAlgeAFgCIA/AWQgXAbgHAkQgHAmgMAMIgHAAQgTAAgigTg");
	this.shape_61.setTransform(-18.4,29);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4C095").s().p("AgCCjIAAgBIgBAAQgHgBgMgGQgNgGgDgKIgQg+QgKgjgKguQgLgwgBgbIABgIQAFgTAOgaQAOgaAHgKIAQAOIAQAPIgTAbQgMARgDAJIAAAEQAAAYAIAzQAIAyAOANQAMAFATADQARADAQAEQAQAFAEAIQAFAMgBAJQgBAPgBABIgBACIACABQAOAMADAPIAAAAQAAACgDADQgNAHgOABQgPACgEgFIgEgDIgCADQgBACgJAEQgDACgEAAQgIAAgJgGg");
	this.shape_62.setTransform(-18.1,47.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEClQgEAAgQgGQgPgFgGgPIgMg+IgShCQgQg3gCglIABgJQAHgXARgbIATgfIAEACIAqAaIgDADIgVAfQgMAQgCAHIAAADQAAAXAHAxQAGAwALALQAPAGAXAEQAnADANATQAFANAAALQgBALgDAFIAMAMQAHAIABAJIAAABQgBAGgFAEQgNAGgPACQgQABgJgGQgEAFgLADIgGABQgJAAgJgHg");
	this.shape_63.setTransform(-18.2,47.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFD524").s().p("AgVACQgYgSgBgCIAZgRQAIAYAbAVQAdAYAEACQgugOgWgUg");
	this.shape_64.setTransform(-30,16.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F7C903").s().p("Ag2AzQgqgigIgNQAEgLAXgkQAYgkAlgFQAXAAAmAOQAmAOASAZQAGAIgDANQgFAWgTAdQgUAbgPAQIgDABQg4AAgogig");
	this.shape_65.setTransform(-29,21);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhCA1QgpgmgCgHIALgYQALgYAUgYQAVgYAdgCQAXAAAoAOQAnAOAVAbQAKAUgQAcQgQAegUAXIgWAZIgEAAQg/AAgpgmg");
	this.shape_66.setTransform(-28.8,20.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E0B500").s().p("Ah2BBQgGgDAAgIQBLAUBHgjQBIgiAfhKQgBANgCAMQgLA9hKAgQgyAVgwAAIgIAAQgpAAgIgFg");
	this.shape_67.setTransform(-15.9,39.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7C903").s().p("Ah2CKQgJgHAFgSQAAgLALgBQB9gBAsgnQAsgngBgiQAChAgkgZQgXgPgcABQgaAAgOADIgHAAQgHAAAAgBQACgEALgJQAmgbAwATQAZAJAWAtQAXAsgIA/QgMA/hJAgQgzAVgvAAIgJAAQgoAAgJgFg");
	this.shape_68.setTransform(-16,32.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Ah2CSQgPgNAGgXQAHgOAFgDQBXAGAsgYQAtgYAQgbQAQgZAAgFQADgmgHgRQgIgQgNgMQgRgQgdgCQgbgCgSABIgGAAQgIACgGgHQACgNANgHQAYgQAbAAQAeABAYAQQAVAOATAqQASArgIA6QgKBBhKAiQgyAVgyADIgfACQgXAAgHgEg");
	this.shape_69.setTransform(-16.1,32.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E5C645").s().p("AALA0QgqgEgCgTQA0gTABg+QAJAIgBACIADAOQACATABAVQAAAXgJAMQgFAGgHAAIgCgBg");
	this.shape_70.setTransform(-31.8,39.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EFD04D").s().p("AgVAwQgIgKgBgJQgDgOgCgdIgCgiIABgGQAAgEACgBIABgBIAFABQApAHALAIQAKAHgCADIADAOQADATAAAVQAAAXgJAMQgFAGgJAAQgbgCgJgLg");
	this.shape_71.setTransform(-32.2,38.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgZAzQgKgMgBgKQgCgNgCgbIgCgjQgCgGAGgKQADgCAEAAIAEABQBFAKgDARIACAQQACAUAAAVQAAAXgKANQgHAIgMAAQgegDgJgLg");
	this.shape_72.setTransform(-32.3,38.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E0B500").s().p("AgFAkQgbgHgSgbQAHgXALgVQAPAZATAUQAUAXAdALIgBAFIgJABQgaAAgUgHg");
	this.shape_73.setTransform(-32.8,25.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E0B500").s().p("AgVCNQgPgFgSgDQgbgCgNgMQBIglAmhKQAohKAWhQIAFADIAFACQAPAOgUBDQgUBCgVA4QgUA2gDASQgCAIgEAEQgDABgGAAQgIAAgRgGg");
	this.shape_74.setTransform(-28.7,33.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7C903").s().p("AgNCiQgPgFgSgEQgcgBgNgOQgNgNgChEQAAgMADgYIAFgiQALg5AVgrQAWgrAGgJQAUgFAlAQQAnAQAeAPIAEADQAPAOgUBDQgUBBgVA4QgUA2gDASQgBAJgFADQgEABgFAAQgLAAgOgFg");
	this.shape_75.setTransform(-29.5,31.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F7C903").s().p("AgNCiQgPgFgSgEQgcgBgNgOQgNgNgChEQAAgMADgYIAFgiQALg5AVgrQAWgrAGgJQAUgFAlAQQAnAQAeAPIAEADQAPAOgUBDQgUBBgVA4QgUA2gDASQgBAJgFADQgEABgFAAQgLAAgOgFg");
	this.shape_76.setTransform(-29.6,31.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgPCnQgcgNgPACQgggFgKgUQgJgUABg3QAEhUAfhFQAehFAFgFIAAgBIABAAQAWgHAmAQQAoAQAgARIAEACQATAMgPA7QgPA5gfBTQgUA1gEARQgBAMgHAGQgGAEgJAAQgKAAgPgIg");
	this.shape_77.setTransform(-29.7,31.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EAD7A7").s().p("AgPCfQgpgLgOgHQgJgxgBg+QAEgvALgpQAEgMAFgKQAig5AigjQAIAHAOACQgZA2gVA0QgWAzgCAOQgBACAAAmQABAmAdAwQAEgCAiAAQAiABAOAkIABAEQg5gDgmgLg");
	this.shape_78.setTransform(-15.9,40.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#603D05").s().p("AgsBpQgLgQgCAWQgEAWAAAcIABAfQgbgwACg/QACg/ACgFQgOAbgFAmIgFApQgQgXAFgwQAHgwADgEQgvAWgCAFQAKg9AkgyQAkgzAjgdIAkgfIACgJQgHBkAhAyQAiAwAnAOQAoAQADgCQgcASgZAHQgZAHgCgBQALBGAoAFQAiAGAJgCQgRAIgJAbQgLAcAAADQgkglgeAGQgdAGgSASQgQAUAAACQgXhXgLgRg");
	this.shape_79.setTransform(-46.7,-36.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgEAAQABgEADgBQAFABgBAEQAAAFgEABQgEgBAAgFg");
	this.shape_80.setTransform(23.3,-37.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgMAAQACgQAKgBQANACAAAPQgDARgKABQgMgDAAgPg");
	this.shape_81.setTransform(23.2,-37);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHAAQACgJAFAAQAIABAAAIQgCAKgGAAQgHAAAAgKg");
	this.shape_82.setTransform(6.3,-29);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTAAQADgVARAAQATADgBATQgDAVgQAAQgSgDgBgTg");
	this.shape_83.setTransform(5.6,-28.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgJCRQgygFgggsQgfgrADg8QAGg+AlgmQAkgnAyACQAzAFAfAsQAfArgDA8QgGA9gkAnQgjAlgvAAIgFAAg");
	this.shape_84.setTransform(-2,-31.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AjtF5Qg1gOgfgVQgdgSgOADIgOADIgGgMIgIgaQgFgWAHgVQgNALgLAcQgLAbgBAEIgHggQgHgcABgbQADgkAGgfQgTALgXASIgaAUQgFgGAXhhQAYhhBwh8QgMgOgigBQgjgBgEABQgCgGAMgiQANghA0gXIAPAeQAMAaAIAJQAHAFAIgHIAMgLQAcgVA2ghQA1ggBjgaQA/gPBCgKQBCgJAxgDQBegJAjgaQAhgZAAgEQABAFgFAoQgEApgdAhQA/AFApgUQAqgTAVgWQAVgXAAgBQAFADgNA4QgNA5hhBCQACACAMABIANADIgIAIQgFAFgzAjQgzAjg6AaQAEADAIAAIAIAAQgDAEg0AnQg0AqhQAsQhOAshZALQgEAXAJAdQAJAcALAIIgWAcIgZAiQAEAZAIAZIAJAbQgDADgnAIQgRAEgVAAQgaAAgfgGg");
	this.shape_85.setTransform(-17.3,-45.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7E7BA").s().p("AgoDVQhSgSgQgKQgHgsAAgoQAEh5AihPQAhhPAMgLQACgCgGgCQgRgKAFgIQABgFAGgBQASgEAuAGQAtAGATAPQAEAFAAAEIAAABQgIANgPADIgJgCQAaANAUAYQArA4APBMQAOBJgBA9QgCA2gCALQhDAWg5AAQgeAAgcgHg");
	this.shape_86.setTransform(-9.4,36.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAJDkQhAgGgrgQQgrgPgCgDIgCAAIAAgCQgViTAkhkQAkhmAWgcQgRgJADgNQgCgGAPgHQASgEAwAGQAvAGAVARQAIAJgCAIQgGANgOAFQASANAOASQAvA7AOBMQAPBPgBA8QgCA9gBAEIAAADIgCAAQg7AWg4AAIgZgBg");
	this.shape_87.setTransform(-9.3,36.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAHADQgZgFAAADIgCgCQAAgCAMgDQALgCATAPIgPgEg");
	this.shape_88.setTransform(14.1,52.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F7E7BA").s().p("AgHAUQgNgjgegZQgEgLAAgMQgBgEACgCIACgCQAoAiAeAfQAgAcAEAKQgFAHgOANQgNAPgPAFQgCgPgNglg");
	this.shape_89.setTransform(1.5,28.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AACBMQAAgFgLgpQgOgnghgbIgBgBIAAgBIgEgOQgDgMAEgJQACgFAGAAIABAAIACABIA9A3QAsAlAHAQIAAACIgBABQgCAEgRARQgSASgTAFIgDABg");
	this.shape_90.setTransform(1.6,28.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgRAUQgHgCABgEQAAgJASgNQAOgPAMACIADADQABADgJACQgZAJgDAGQgHALAJACQAJACAKgBIAOgBIgCAGIgIABQgKAAgUgCg");
	this.shape_91.setTransform(18.1,51.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgVAaQgIgRAJgaQAFgMADABIACADIgDAOQgEAJgDALQgDANALAAQATgEAGgOQAGgMgBgCIAFgCQAEAAgCAKQgHASgaAMIgFABQgFAAgDgDg");
	this.shape_92.setTransform(16.1,48.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F4C095").s().p("AAeBuQgmgGgCgMIAAgBQABgHAHgEIAEgFIgGgBQgBABgGgIQgGgHgCgdQgGgfgegZQgfgZgKgEQgEgGgDgVQAAgGABgFQAEgLAPgGQAOAVAgApQAgAoAOAFIAMgBIAcABQAPAAAGACIAFADQAJAGAKAKQAKAJAAAMIgBAGQABAlgaACIgCAAIgBACQAAADgKALQgJAJgUAAIgGAAg");
	this.shape_93.setTransform(12.7,44.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAdB2QgogGgGgRIAAgEQABgFAJgIQgMgDgGgrQgIgmgfgVQgfgVgFAAIgBgBIgBAAQgEgFgEgbQAAgGACgGQAFgQATgHIACgBIACACIAxBEQAZAhAHACIATADQAngBANAIIAFACQALAGALAKQALAJABAOIAAACIgBAGQgBAPgGANQgGAOgTACQgCAHgLALQgJAJgUAAIgHAAg");
	this.shape_94.setTransform(12.8,44.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D3BA7D").s().p("AgSA+QgXgRgUgbQgTgYgCghQAAgLADgMQALAHAnALQAmAMA7AFQACAaANAVIgFAQQgSAUgdAGQgLgEgOADQgGACgIAAIgKgBg");
	this.shape_95.setTransform(-15.3,60.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E5CE8C").s().p("AgYBKIgIgWIgBgCIgBAAQgCgBgZgQQgZgQgYgbQgZgcgCgmQAAgLADgMQASALBJARQBGAQBqgTIgOAbQgJAQgJAHIgCACIABADQAOAVALAUIANAZQgJAJgwATQgwATgwAGIgJgag");
	this.shape_96.setTransform(-9.9,63.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgcBTIgJgcQgOgFgrgjQgsgggGg6QAAgOAFgOIABgEIADABQAEAGBMAVQBKAVB3gWIAHgCIgDAGIgMAYQgKAUgNANIAYApQANAZgCAGQgJAIg0AUQg0AVguAGIgDAAIgIgZg");
	this.shape_97.setTransform(-9.8,63.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E5CE8C").s().p("AANBFQgfgLglgQQAcgzgCgtIgCgaIAdA1IAlBFIAVAnQgMgBgfgLg");
	this.shape_98.setTransform(-17.7,63.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AATBUQgpgIgngUIgEgCIADgDQAdgvgCgrQgCgugDgEIAFgDIBlC4IgBABQgFAAgpgJg");
	this.shape_99.setTransform(-17.7,62.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F4C095").s().p("AgPAhQgKgEgEgFIAVgbIATgdIATAHIgSAcIgOAbQgFADgFAAIgDAAg");
	this.shape_100.setTransform(-18.4,73);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgRAoQgRgJgBgGIgBgCIAsg/IAdAMIglA/IAAAAQgFAGgHAAIgFgBg");
	this.shape_101.setTransform(-18.2,72.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F7EBCD").s().p("AgCAiQgYgBgSgHQgJgFgCgGQgCgGACgDQAJgGAKABIAFABIgCgDQgKgaACgHIAAABQAdAAAdAEQAgAFAIAIIAAADQgOAVgEAAQAIAEADAJQgBAEgKAEQgPAGgTAAIgHgBg");
	this.shape_102.setTransform(-20.1,78.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgCApQgZgCgSgIQgMgGgDgIIgBgHQAAgFADgDQAIgGAKAAQgFgNgBgOQAAgEABgDQABgCAFAAIAAAAQAMAAAkAEQAmAEANANQACACAAADIgBAEQgHAOgHADQAGAFABAIIAAABQAAAIgOAGQgQAGgVAAIgFAAg");
	this.shape_103.setTransform(-20.2,78.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#75653E").s().p("AABAnQgOgEgJgOQgOgZgKgPIAIgMIAIgLQArALANgLIAMAPIAJANQgQAagHAfIgCAAQgHAAgOgEg");
	this.shape_104.setTransform(-20.5,85.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AABAwQgTgEgMgTQgPgbgKgOIgBgCIAWgfIADABQAZAJANgEQAQgEABgBIACgCIALAOIAMAQIAIgBIgDAGQgSAcgIAjIAAADIgDAAIgDAAIgVgDg");
	this.shape_105.setTransform(-20.3,85.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3D2B03").s().p("AAcA6QgpgDgigIQgcgJgLgZQgLgXgBgHIAOgUIAOgUQAtALANgLIAMAQIAHANIACAAQAygJAZAaQAUAZgGAbQgBAFgGAEQgQAIgfAAIgQAAg");
	this.shape_106.setTransform(-16.5,86.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAYBBQgrgDgegIQghgLgMgcQgMgbABgFIAAgCIAgguIADABQAZAKAQgEQAPgEABgCIADgBIAKAOIAKAQQA/gFAPAZQAYAegIAcQgCAIgIAFQgTAKghAAIgSgBg");
	this.shape_107.setTransform(-16.5,86.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F4C095").s().p("AAAAsQAAgKgGgYQgGgWgSgRIAXgPIAQAcIARAcQAGAOgBAJIAAAEQgHAGgNAAIgLgBg");
	this.shape_108.setTransform(0.9,74.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgDAyIgCgBIAAgCQABgEgFgbQgGgZgTgQIgFgDIAlgaIABAEIAOAZIAVAiQAIAcgDAFIgBACIgBABQgBACgNAFQgFADgGAAQgIAAgHgFg");
	this.shape_109.setTransform(0.4,74);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F7EBCD").s().p("AgZAyQgUAAgMgOQgHgMAEgHQAKgKAGABIAJAAIgHgGQgVgRgCgOQAAAAAAAAQABgBAAAAQABAAAAgBQABAAABAAIAIgCQAXgGAngIQApgHAOAJQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIgGAgIABABIAEANQADANgJAMQgJAJgZAHQgUAFgRAAIgNgBg");
	this.shape_110.setTransform(2,79.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgYA6QgbgDgIgPQgGgKAAgIQAAgFACgEQAGgJAIgCQgQgMgEgSIABgDQAAgFAJgDIAIgCQAogLAfgEQAigFAMAKQAEADAAAGIAAADIgDAOIgCAPQADAGACAPQAAANgIALQgKALgbAHQgUAGgSAAIgLgBg");
	this.shape_111.setTransform(1.9,79.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3D2B03").s().p("Ah8AwIgBgOIAAAAQAHABAtABQAtAAAbgRIABgCIAAgCIgBgNQAAgNABgSQADgRAKgJIABgBQAngCAiALQAhALAFAoIABAGQAAAHgGAKQgMATgmADQg1AEhCACIhKACIgBgJg");
	this.shape_112.setTransform(10.4,88.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AiABBIgFgkIADgBIAGgCQAFACArAAQArABAagPIgBgMQAAgOAEgTQAEgUAKgLIADgBIABAAQAbgEAqAKQApAKAJAyQAEAFgKAYQgPAWgpADQg1AFhCABIhKACg");
	this.shape_113.setTransform(10.3,88.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#75653E").s().p("Ah+AHQAAgXAHgSIA2gJQApgGAfgCQAhgEAnAIQAoAJAHArIAAAFQABAGgGAJQgMASgkADQgyAEg+ACIhTACQgDgOgBghg");
	this.shape_114.setTransform(10.2,88.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AiAA9IgBgDQgBgFgDgjQgCggAKgaIABgBIACgBIAygIQAsgHAjgCQAhgEArAJQAqAJAJAxQADAEgJAWQgOAUgoADQgjADgsACIhSACIgmABgAAHg0QgeACgqAHIg2AJQgHARABAYQABAhACANIBUgCQA9gBAygEQAkgEANgRQAFgJAAgGIgBgFQgHgrgogJQgcgGgaAAIgSABg");
	this.shape_115.setTransform(10.1,88.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("Ag+A6QgFgcgDgfIgCgkIACAXIAKA2QAFAdAHAFQAigJAkgOQAlgOAHgOQgKgQgYguQgPgegBgRIA5BxQgKAUgvASQgtASgTAEQgJgBgFgcg");
	this.shape_116.setTransform(-14.4,32.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F7E7BA").s().p("AgwBTQgOgKgFgwIgFhDIBegoQADAWAWApIAZAsIABABIAAABQgLAVgwAQQguAQgPADg");
	this.shape_117.setTransform(-14.5,32.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgSgIQgCgCACgDQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAABQAXARAIAFQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgLgEgYgTg");
	this.shape_118.setTransform(11,54.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AALATQAAgLgKgJQgIgKgHgFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABIAPANQAOALgBARQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_119.setTransform(13.5,51.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F4C095").s().p("AAvBZIgTgQIgBgBIgCAAQgDACgPgIQgPgHgFgnIAAgBIgggZIg+g0IgoggIAXgFIARgFQARAPA0AmQAzAmAWAGQASABAVgDQAYgDAMACQALADANAIQAMALABAEIgBADQgBAIgGANQgFANgKACIgDAAIAAACQgDAKgMAKQgDACgEgCIgDgBIgCACQgIAPgQAEQgKgCgNgKg");
	this.shape_120.setTransform(2.5,46.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("ABIBsQgKgDgPgKIgTgQQgIACgRgLQgQgRgDgiIglgcIhEg3IgkgdIA3gOIACABQAcAXAuAjQAsAiASAFQATAAAXgCQAYgEAOACQALADAMAKQAOAJAEAHIABAGIgBADQgCAJgGAOQgGAOgNADQgCALgPALQgFACgGgBQgDAFgIAHQgIAIgKAAIgBAAg");
	this.shape_121.setTransform(2.2,46.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgDAJQADgUAEAEQgCgBgCARg");
	this.shape_122.setTransform(-11.2,26.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFD524").s().p("AgWAIQgbgOgBgBIAXgUQAKAUAfAQQAgASAFABQgwgFgZgPg");
	this.shape_123.setTransform(-33.9,20.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F7C903").s().p("AgsA8QgvgagKgLQACgOARgkQARgmAlgLQAYgEAmAHQAnAHAXAVQAGAHAAAMQgCAZgOAcQgPAegMASQgRADgRAAQglAAgggSg");
	this.shape_124.setTransform(-32.4,24.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ag3BAQgvgfgDgGQAAgGAQgsQAQguArgNQAYgFAoAHQApAHAZAYQAQAdgbAvQgbAxgFAGQgTADgSAAQgpAAgigVg");
	this.shape_125.setTransform(-32.3,24.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E0B500").s().p("AhpBVQgHgDgBgHQBNAHBAguQBCgrAShNIACAYQgCA8hDArQguAdgvAIQgiAFgPAAIgIAAg");
	this.shape_126.setTransform(-16.5,40.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F7C903").s().p("AhpCTQgKgGACgSQgCgLALgCQB7gWAlgtQAlgrgGghQgJg/gogSQgZgKgZAFQgbAFgOAFIgGABQgIABAAgBQABgEAKgKQAjggAwAKQAaAEAeAnQAdAnACA/QgBA9hDArQgvAdguAIQghAGgPAAIgKgBg");
	this.shape_127.setTransform(-16.6,34.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AhnCaQgQgKABgXQAFgPAEgDQBYgJAngfQAogeAMgdQALgbgBgFQgCglgLgOQgKgPgPgJQgUgMgaADQgdACgRAEIgHACQgHACgHgGQAAgMAMgJQAUgTAdgFQAcgEAbALQAXAKAZAmQAZAlABA8QAAA+hCAtQgxAdguALQgkAJgQAAIgJgBg");
	this.shape_128.setTransform(-16.7,34.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E5C645").s().p("AgfAkQAwgcgKg6QALAFgCADIAGANQAFARAEAUQAEAXgHANQgEAGgJABIgKAAQghAAgDgPg");
	this.shape_129.setTransform(-31.8,42.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EFD04D").s().p("AgLAxQgKgJgDgJQgEgMgHgbIgIgiIAAgGIABgFIABAAIAFAAQAqgBALAGQAMAFgCADIAGANQAGASAEAUQAEAWgHANQgFAHgJABIgOAAQgQAAgHgFg");
	this.shape_130.setTransform(-32.8,42.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgPAzQgLgJgCgJQgFgNgHgZIgHghQgDgGAEgKQADgDAEAAIAEAAQBFgDABARQAAAFAEALQAFASAEAUQAEAXgIAOQgGAJgMABIgNABQgTAAgJgIg");
	this.shape_131.setTransform(-32.9,42.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E0B500").s().p("AgCAjQgcgCgXgXQAEgXAGgWQAUAVAXAQQAXATAfAFIgBAFQgWAFgUAAIgNgBg");
	this.shape_132.setTransform(-35,29.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E0B500").s().p("AAACRQgOgCgTAAQgaADgPgJQBBgxAZhOQAchMAIhRIAHACIAEACQARALgIBDQgJBCgMA5QgLA4gBARQABAJgEADQgGAFgLAAQgJAAgKgDg");
	this.shape_133.setTransform(-30,35.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F7C903").s().p("AAQCcQgPgCgRAAQgcADgPgLQgOgKgNhBQgCgMgBgXIgBgjQABg3AOgtQAPgtAFgJQATgJAnAJQAoAJAgAKIAFACQARALgJBDQgJBCgLA5QgMA4AAARQAAAJgEAEQgFADgLAAQgJAAgLgCg");
	this.shape_134.setTransform(-31.7,34.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F7C903").s().p("AAQCcQgPgCgRAAQgcADgPgLQgOgKgNhBQgCgMgBgXIgBgjQABg3AOgtQAPgtAFgJQATgJAnAJQAoAJAgAKIAFACQARALgJBDQgJBCgLA5QgMA4AAARQAAAJgEAEQgFADgLAAQgJAAgLgCg");
	this.shape_135.setTransform(-31.7,35.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAPCiQgcgIgOAFQghABgNgSQgMgRgIg2QgKhRAThHQAThIAEgFIABgBQAVgKAnAIQAqAJAjALIAEABQAVAJgFA7QgGA7gRBTQgLA2gBARQABAMgGAGQgIAHgNAAQgKAAgLgEg");
	this.shape_136.setTransform(-31.6,35.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EAD7A7").s().p("AgEAIQAQgIAMgRQABABgHAOQgHALgiAJIATgKg");
	this.shape_137.setTransform(-7.8,18);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#603D05").s().p("AAHAWQgQgJgQgcIANgOQABADALAZQAMAXAOAIIAAAAQgDAAgQgIg");
	this.shape_138.setTransform(-60.5,-59.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#603D05").s().p("AgpBrQgMgPgCAXQgBAVACAcIADAgQgfgvgCg+QgDg/ACgGQgMAdgCAlIgCApQgSgUADgyQADgwACgGQgtAbgCAGQAGg+Agg0QAhg1AgghQAgggACAAIADgKQgBBlAkAuQAmAvAoANQAoALADgCQgbATgYAJQgYAJgCgBQAPBFAoADQAjADAIgDQgQAKgHAbQgIAcAAAFQgngjgdAIQgeAHgQAVQgOATgBADQgchWgMgQg");
	this.shape_139.setTransform(-52.7,-32.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#603D05").s().p("AiwC2Qhogxgbg4Qgbg5AEgFQgCAAAQgTQAQgVA6gjQA4gjB4gqQgJADgoAYQgsAbgNAnQACgCAhgXQAhgWA0gTQBAgUBCgQQBDgQAigeQADABgBARQgBAQgpAYQADAFA4AIQA5AJBMgoQgBAGgxAlQgyAmhXgEQACACAmARQAmARAqgBQgGAFhJAeQhJAchDgLQADADAfAVQAfAWAdADQgCAEgwAoQgxAohGAfQgoARgoAAQghAAghgLg");
	this.shape_140.setTransform(-20.7,-56.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAhAbQgQgOgYAAQgagBgDABQgKgDAEgMQADgPAHgIQAIgGARADIAfAGQAQAGADAZQADAVgHAAQgCAAgEgDg");
	this.shape_141.setTransform(10,-55.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AABAfQgvgEgggRQgggPgCgDIgDgCIATgUIgCAIIgHALQARALBAALQA+AMBOgjIgKALQgyAgguAAIgJAAg");
	this.shape_142.setTransform(-3.8,-7.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgyBgIAigGQBAgNAOgtQAJgggOghQgOghgTgNQgcgQgdAPIgqATQAEgGAigVQAjgUAiARQAVAPAOAiQAPAigJAiQgHAaghAXQghAZhHAAIAVgEg");
	this.shape_143.setTransform(20.9,-22);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F4C095").s().p("AhFA5IAAhLIAAgoIgEgGQAEgFAggTQAggRAiARQAVAPAPAjQAPAjgKAiQgFAZgfAVQggAUhHAAIAAgog");
	this.shape_144.setTransform(20.7,-21.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgEAAQABgFADAAQAEAAAAAFQAAAFgEABQgDgBgBgFg");
	this.shape_145.setTransform(16.7,-39);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgMAAQABgQALgBQAMABABAQQgBAQgMACQgLgCgBgQg");
	this.shape_146.setTransform(16.6,-38.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgHAAQABgJAGgBQAHABABAJQgBAKgHAAQgGAAgBgKg");
	this.shape_147.setTransform(0.3,-29);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgSAAQABgTARgCQASACABATQgBAVgSACQgRgCgBgVg");
	this.shape_148.setTransform(-0.4,-28.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EDF6F9").s().p("AggBfQgfgngBg5QAAgxAXgkQAWgkAigNQgvBaAjBlQAXAvAnAfQgKACgLAAQgtgBgfgog");
	this.shape_149.setTransform(-12.7,-30.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EDF6F9").s().p("AgiATQgFgdAGgeQAHgdAQgOQgMBOAnBKQAKAJAKAEIgEABIgLABQgoAAgQhBg");
	this.shape_150.setTransform(11.4,-41.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AhNBiQgfgogBg6QABg5AfgoQAggnAtgCQAuACAgAnQAfAoABA5QgBA6gfAoQggAnguABQgtgBgggng");
	this.shape_151.setTransform(-8.2,-31.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AhUBmQghgpgCg9QACg8AhgpQAjgqAxgBQAzABAhAqQAjApABA8QgBA9gjApQghAqgzABQgxgBgjgqg");
	this.shape_152.setTransform(-8.2,-31.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgDABQAEgEABAAQgTgHgPAHIgNAFQAjggAaARQAcAPACAGQgcgIgMAJQgLAJAAACQgEgNAGgGg");
	this.shape_153.setTransform(-44.5,-5.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AhGAgQgagjAfghQAZgaAfACQAkAHAbAcQAaAaADAGQgCgEgbgXQgdgagjgHQgcgCgXAXQgRAUADAQQADAQAHAIQAbAiAlgLQAcgOAMgBIAKAAQgGABgrAVQgIADgKAAQgeAAgWgdg");
	this.shape_154.setTransform(-44.9,-6.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E8B187").s().p("AhGAgQgagjAfghQAZgaAfACQAkAHAbAcQAbAbACAFIghAdQAEgEg2AaQgIADgKAAQgeAAgWgdg");
	this.shape_155.setTransform(-44.9,-6.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgDA5IgLgOIgSgYQgGgJAMgUQAJgRAOgQQALgQAKgBQAGgCAGANQAFAMAAAOQABAOgFAGQgEADgJATIgRAlIgBAFg");
	this.shape_156.setTransform(-23.3,-47.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#422C01").s().p("AjNF0QgzgKgfgSQghgTgYAEQgJgOgFgrQAAgPAGgOIAFgMIgKAIQgDABgQARQgRARgIAcQgCgTAAgcQgBgyAMgyIACgHIgHADIgcAQQgYAOgRASQACgpAehdQAdhbBMhPIACgCIgCgDQgCgDgYgMQgYgLgrAIQAAgKAMgVQALgUAkgRQAFAOAOAYQANAYAOAAQAGgCAVgQQAcgXA9glQA9glBighQB8glBfgRQBjgRAggUQgBAegoA1IgFAFIAIAAQAFABAkgEQAlgEAtgOQAtgOAdgeQABATgXApQgXAphNAtIgEACIAEADQAAABAIAEQAJAEANgDQgUAXg0AoQg1AphWAjIACAHIAXgFQAVgFAXgJQgXAXg0ApQg0AohFAlQhDAlhKAKIgDAAIAAAEQAAAGAKAiQAKAiAYASIgXAfIgUAbIAAACQACAOAHAaQAGAZAJANQgMAHghAHQgTAEgXAAQgRAAgTgCg");
	this.shape_157.setTransform(-24.9,-42.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AjOGOQg2gLgggSQgegQgOAEIgNAEIgHgMQgDgEgHgVQgHgWAGgUQgNALgJAcQgJAdAAADIgKgfQgIgcgBgaQAAgkAFggQgTAMgXAUIgYAVQgFgFARhiQAQhjBoiEQgNgNgjABQgiACgFABQgCgFAKgjQAKgiA0gaIAQAcQAOAZAJAJQAHAFAHgIIALgMQAbgXAzgkQAzgkBighQA/gTA/gOQBBgOAxgHQBegPAggdQAfgbAAgEQABAFgBAoQgCAqgbAjQBAABAogXQAogXATgXQATgXAAgCQAGADgJA5QgKA5hcBJQADABALABIAOACIgIAJQgEAFgxAmQgwAng4AeQAEACAHAAIAJgBQgDAEgxAtQgxArhNAxQhNAyhVARQgDAXALAcQALAcALAHIgTAeIgXAjQAFAZAKAYIAMAaQgDAEgnALQgYAHggAAQgSAAgVgDg");
	this.shape_158.setTransform(-24.8,-44.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("Ag1AWQgGgkAKghQAKghAXgGQAWgCAVAbQAVAcAHAjQAJBKgyAKIgLABQgoAAgQhBg");
	this.shape_159.setTransform(13.3,-41.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgdBQQgWgQgJgpQgGglAKgjQALgkAbgGQAZgDAXAdQAXAdAIAmQAHAogPAXQgPAWgXAEIgLABQgQAAgRgMg");
	this.shape_160.setTransform(13.3,-41.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F4C095").s().p("AjaBpQgvilgDixQA7gzBfgoQBggpCKgJQALATAiBRQAjBSAHBRIAAABIAQAYIABAAQAEgBATASQATATADA3IAAAEQgBA+g1A1Qg1A1hrBDQg3ApgPAbQgSAcACANQABAIABACQgBAGgLAOQiDhpguipg");
	this.shape_161.setTransform(-5.2,-21.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E8B187").s().p("ABZEpIAGgMIABgDIgDgCQgFgCg7gjQg4gkg6gxQg7gxgHgtIgMg7QgKg0gBhAQgChDAagjQAfgpBFg8QAECwAuCnQAsCoCEBpQgGAGgJAEQgIADgKAAQgXAAgfgSg");
	this.shape_162.setTransform(-27.1,-13.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F4C095").s().p("AhBFvIAGgMIABgDIgDgBIhAgmQg6gjg6gyQg7gygHgsIgMg7QgKg2gBg+QgChCAagkQAcgkA6g1QA6g2BjgsQBggtCVgKQALATAjBRQAiBSAHBRIAAABIAQAYIACAAQAEgBASASQATATADA5IAAAEQgBA8g1A1Qg1A1hsBDQg3ApgRAbQgQAcABANIACAKQgBAEgFAKQgGAJgOAHQgGAEgKAAQgXAAgfgTg");
	this.shape_163.setTransform(-11.5,-20.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AhKF4IgDgBIABgLQAAgKACgEQgRgIg6giQg6ghg3guQg2gugGgsQgCgHgIg2QgIg2gBg+QgBhFAbgnQAdglA6g2QA7g2BkgtQBiguCXgKIACAAIABACIAWAuQAVArAVA9QAWA9ADA6IAHAKIAHAKQAIABATAVQATAVACA5IAIAGQgBBAg6A1Qg5A1htBEQhBAugLAXQgMAYAEALQAAAFgCANQgDAOgQAIQgMAGgQAAQgaAAgggRg");
	this.shape_164.setTransform(-11.1,-20.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F7E7BA").s().p("AgGgBIAGgVQACAWAFAXIgNgYg");
	this.shape_165.setTransform(-20.7,24.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EAD7A7").s().p("AgsATQg9hEgXhgQAvBIBDAxQBAAvBOAoIABApIAAAMQgIATgXALQhTg5g7hGg");
	this.shape_166.setTransform(-7.2,43.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F7E7BA").s().p("Ag7DiQhTgLgUgMIAIhSQAGhFARhTQAQhVAcg+IACgDIgDgBQgFgBgGgNIgBgBQAAgGAGgFQAPgLAzgIQAygHAdAJQAJAEgBADIgHANIABACQACACAYAuQAZAvAaBOQAeBXADBxIAAANQgOAdgzAMQgqAHgsAAQgiAAglgFg");
	this.shape_167.setTransform(-10.6,36.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgLDuQg7gEgtgKQgugJgKgIQgBgEAHhGQAGhFAQhYQAQhaAdhBQgIgEgEgNIAAgCQAAgIAHgIQASgNA1gIQA0gHAeAJQANAIgBAHIAAABIgGALQAHAJAbA4QAcA3AaBUQAbBUACBjQAAAFgTASQgSASgrALQgiAGgmAAIgggBg");
	this.shape_168.setTransform(-10.2,36.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgYALQAZgIAMgIIAMgLQAAACgKAMQgLALgaAIg");
	this.shape_169.setTransform(-5.5,64.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#D3BA7D").s().p("AggAbIACgTIADgTQASgFAKgNQAHAkAZAWIgOABQgkAAgPgDg");
	this.shape_170.setTransform(-4.6,67.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E5CE8C").s().p("AhyBIQgsgPgLgGIALgxIAKgqIABgCIgCgCQgHgGAAgJQADgSAHgJQBsAeBJgKQBLgKARgJIAWA4IAVA0QgbAbg0ABQg1ACgUgDIADgXIACgTIgGgCIgKAmIgIAqIgMABQg9AAgogPg");
	this.shape_171.setTransform(-9.8,65);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("Ah4BOQg1gTgDgEIALgvIAMgwQgKgIgBgKQAGgbAHgFIABgCIACABQB2AgBLgOQBOgNADgFIADgCIAvB3IgBABQgSAXglAGQglAGghgCIglgDIgHAkIgXABQg7AAgsgQg");
	this.shape_172.setTransform(-9.6,64.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F4C095").s().p("AgaAYIAJgaIALgdQAUAIANABIgJAbIgIAaIgLABQgRAAgIgIg");
	this.shape_173.setTransform(-19.7,75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgQAlQgPgHgBgCIgCgCIAXhBIAEABQAMAGANACIANACIAFAAIgVBAIgBABQgJADgGAAQgIAAgHgDg");
	this.shape_174.setTransform(-19.6,74.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F4C095").s().p("AgIAfIgJgaIgJgaQAGAAAUgKIAOAcIANAZQgIAKgSAAIgJgBg");
	this.shape_175.setTransform(4,72.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgLAlIgCgBIgWg+IAFgBQgBADAfgOIADgBIAhA/IgCACQgCACgNAIQgIAEgIAAQgGAAgIgDg");
	this.shape_176.setTransform(4,72.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F7EBCD").s().p("AgYApQgdgGgBgCQgDgBgDgHQgBgHAMgIIADgEIAAgBQgBgFgIgGQgFgGgCgFQAGgIAogQQA1AAADAPQACAEAAAFQgCALgBACIgDAEIAFAAQARABAEAIIABAGQAAAEgCAGIgBAAQgtARgaAAIgNgBg");
	this.shape_177.setTransform(5.1,76.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgYAvQgegGgBgDQgFgBgFgMIAAgBQAAgKAOgJIgHgIQgGgGgCgGIAAgFQAFgIASgIIAZgLIABgBIAAAAQAxgCALAUQAEAHAAAGQAAAHgDAEQARAEAFAIQABADAAAFQAAAGgDAIIAAABIgEABQgtATgaAAIgNgCg");
	this.shape_178.setTransform(4.9,76.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F7EBCD").s().p("AgCAqQgkgGgTgUQgNgQADgCQAIgIAaAAIAGAAIgDgFQgHgOABgLQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAOgCAlAHQAoAIAMAUQgEAJgWAHIgIABIAHAFQAJAFAEALQAAAEgGAEQgMAHgSAAQgLAAgKgCg");
	this.shape_179.setTransform(-22.4,80.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgDAwQglgFgVgXQgMgOAAgGIABgFQAHgLAbAAQgEgJgBgMIABgGQACgEAFgBQAQgDAnAIQAqAIALAaIABABIgBACQgBAGgWALQAIAGACALIAAABQAAAIgJAGQgNAHgUAAQgLAAgKgCg");
	this.shape_180.setTransform(-22.6,80.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#3D2B03").s().p("AgWA7IAAgZQABgHAOgiQALglAegOQAmgDAZAQQAZARAIAYQAKAggeAQQgWALgkADQgWABgYAAIgcAAgAhdA1IgkgEQgDgIAAgKIAAgCQANAEAcAFQAdAEAigEIAAAUQglgCgcgDg");
	this.shape_181.setTransform(12.4,85.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AhOA9Ig2gGIgCAAIgBgCQgEgMABgQIABgFIAEACQAHADAfAFQAfAGAlgFQACgOAPghQAMgjAfgNQApgEAbARQAcASAIAbQALAlgiATQghAPg5ABIgKAAQgxAAgrgFg");
	this.shape_182.setTransform(12.4,85.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#75653E").s().p("AhGA4Ig7gHQgDgIAAgKQABgaAJgWQAIgZAEgJQAbAFAegFQAegFAHgCIAOADIALADIABAAQAsgNAfAOQAgAPALAbQAQAegiAYQgeAOg1AAIgVAAQgnAAglgDg");
	this.shape_183.setTransform(12.4,85.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AhOA+Ig2gGIgCgBIgBgCQgIggANgjQAMglADgGIACgCIACABQAbAGAggGIAkgHIAAAAIANADIAMADQAugNAiAQQAhAPAMAdQAQApgkAWQgiAPg4AAIgLAAQgxAAgqgEg");
	this.shape_184.setTransform(12.4,85.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#3D2B03").s().p("AgDAuQhogGgJg0IAAgFIAAgCQARARAZANQAYAOAXgEIACAAIABgCQAAgCANgUQAMgWAZgSIADgBIADAAQAOgEAZACQAYADAQAaQANAegMAQQgNAQgjACIgbABQgVAAgTgCg");
	this.shape_185.setTransform(-21.1,89.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgDA0QhtgGgKg6QgCgHACgIIACgGIAEAEQAQAQAYAOQAYAQAWgDQADgHAOgTQANgVAXgRIABgBIACAAIACAAIADAAQAOgEAbACQAcADARAeQAOAhgNATQgWAXg4AAQgUAAgXgDg");
	this.shape_186.setTransform(-21,89.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#75653E").s().p("AgDA8QhogGgJg2IAAgEQACgVASgQQASgQAIgEQAJAHAeANQAeAOAegDIADgBQAOgDAZACQAYACAQAbQANAegMAPQgNARgjACIgZABQgWAAgUgCg");
	this.shape_187.setTransform(-21.1,87.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgDBCQhtgGgLg7QgBgbAXgTQAYgVAFgBIACgBIACABQACADAgAPQAfAPAfgCIACgBQAOgEAcADQAbADARAeQAPAhgOATQgWAWg3AAQgUAAgXgDg");
	this.shape_188.setTransform(-20.9,87.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:1.7,y:-31.2}},{t:this.shape_43,p:{x:1.5,y:-31.2}},{t:this.shape_42,p:{x:-15.4,y:-25.6}},{t:this.shape_41,p:{x:8.3,y:-31.8}},{t:this.shape_40,p:{x:27.4,y:-51.6}},{t:this.shape_39,p:{x:27.4,y:-51.5}},{t:this.shape_38},{t:this.shape_37,p:{x:-10.1,y:-54.2}},{t:this.shape_36,p:{x:-8.5,y:-59.9}},{t:this.shape_35,p:{x:-33,y:-19.9}},{t:this.shape_34,p:{x:-33,y:-19.9}},{t:this.shape_33,p:{x:-32.8,y:-18.9}},{t:this.shape_32},{t:this.shape_31,p:{x:5.3,y:-42.3}},{t:this.shape_30,p:{x:25.3,y:-51.2}},{t:this.shape_29,p:{x:0.3,y:-42.1}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:33.4,y:-31.1}},{t:this.shape_23,p:{x:33.6,y:-31.3}},{t:this.shape_22,p:{x:8.1,y:-18.4}},{t:this.shape_21,p:{x:25,y:-64.8}},{t:this.shape_20,p:{x:-5,y:-68.3}},{t:this.shape_19},{t:this.shape_18,p:{x:-45,y:-73.7}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_44,p:{x:-5.6,y:-20.6}},{t:this.shape_43,p:{x:-5.9,y:-20.7}},{t:this.shape_42,p:{x:-22.8,y:-15}},{t:this.shape_41,p:{x:0.9,y:-21.3}},{t:this.shape_40,p:{x:20,y:-41}},{t:this.shape_39,p:{x:20.1,y:-40.9}},{t:this.shape_85},{t:this.shape_37,p:{x:-17.4,y:-43.7}},{t:this.shape_36,p:{x:-15.8,y:-49.3}},{t:this.shape_35,p:{x:-40.4,y:-9.5}},{t:this.shape_34,p:{x:-40.4,y:-9.5}},{t:this.shape_33,p:{x:-40.1,y:-8.3}},{t:this.shape_84},{t:this.shape_31,p:{x:-2.1,y:-31.7}},{t:this.shape_30,p:{x:17.9,y:-40.7}},{t:this.shape_29,p:{x:-7,y:-31.6}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_24,p:{x:26.1,y:-20.5}},{t:this.shape_23,p:{x:26.3,y:-20.7}},{t:this.shape_22,p:{x:0.7,y:-7.8}},{t:this.shape_21,p:{x:17.6,y:-54.3}},{t:this.shape_20,p:{x:-12.3,y:-57.8}},{t:this.shape_79},{t:this.shape_18,p:{x:-52.4,y:-63.1}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},3).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:1.7,y:-31.2}},{t:this.shape_43,p:{x:1.5,y:-31.2}},{t:this.shape_42,p:{x:-15.4,y:-25.6}},{t:this.shape_41,p:{x:8.3,y:-31.8}},{t:this.shape_40,p:{x:27.4,y:-51.6}},{t:this.shape_39,p:{x:27.4,y:-51.5}},{t:this.shape_38},{t:this.shape_37,p:{x:-10.1,y:-54.2}},{t:this.shape_36,p:{x:-8.5,y:-59.9}},{t:this.shape_35,p:{x:-33,y:-19.9}},{t:this.shape_34,p:{x:-33,y:-19.9}},{t:this.shape_33,p:{x:-32.8,y:-18.9}},{t:this.shape_32},{t:this.shape_31,p:{x:5.3,y:-42.3}},{t:this.shape_30,p:{x:25.3,y:-51.2}},{t:this.shape_29,p:{x:0.3,y:-42.1}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:33.4,y:-31.1}},{t:this.shape_23,p:{x:33.6,y:-31.3}},{t:this.shape_22,p:{x:8.1,y:-18.4}},{t:this.shape_21,p:{x:25,y:-64.8}},{t:this.shape_20,p:{x:-5,y:-68.3}},{t:this.shape_19},{t:this.shape_18,p:{x:-45,y:-73.7}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-94.7,101.5,189.1);


// stage content:
(lib.walkCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.walk();
	this.instance.setTransform(111.9,96.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(151.8,101.4,101.5,189);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;