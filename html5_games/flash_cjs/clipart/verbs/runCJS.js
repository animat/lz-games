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



(lib.run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A76F").s().p("AgGgMIAHAJQAHAGgBAKIgNgZg");
	this.shape.setTransform(45.7,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhRAKQgrgKgDgCIgCgFQADACAqAHQAsAKA4gCQA7gBAzgeIAEAGQgzAkg7ABIgFAAQg2AAgqgMg");
	this.shape_1.setTransform(32.8,-7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOATIAAgDIAOgNQAKgLAFgLIgFAMQgFAJgJALQgIAHgBAAIgBgBg");
	this.shape_2.setTransform(44,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwACQgVgJACgFQAuATArgEQAlgDAJAAIgnALQgMACgNAAQgaAAgagLg");
	this.shape_3.setTransform(35,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIACIALgMQgagJgMAJQgMAJAAABQAAgBAFgMQAFgNAQgEQAeABATAXQAUAVAAADQgbgagRAQQgPASgBAEQgHgQALgMg");
	this.shape_4.setTransform(-19.2,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3AvQgRgMgBgbQgCg9BCgEQAdADAYAcQAXAbABAEQgBgEgZgXQgYgZgbgDQgVAAgSANQgSANABAgQABAXAOALQATAPApgKQAkgIAPADIANADQgGgBg4AKQgQAEgPAAQgWAAgOgLg");
	this.shape_5.setTransform(-19.5,-14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C9AA73").s().p("Ag4AvQgRgMgBgbQgCg9BCgEQAdACAZAaQAaAaADAEIACAvQgBgEhAAKQgQAEgOAAQgXAAgNgLg");
	this.shape_6.setTransform(-19.4,-14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#352B01").s().p("AgdAfIgjgTQAJgMAXgVQAXgXAVgFQAagCAMAIQAMAHADAGQgiAPgMAYQgOAbgBAOIghgTg");
	this.shape_7.setTransform(26.9,-54.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhKANIACgDQAEgGAagbQAbgcAbgHQAjgCAOANQANANAAADIABAEIgDABQgnAPgMAdQgLAgABAEIgBAFg");
	this.shape_8.setTransform(26.9,-54.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D5803").s().p("AlKEbQhCgEgYgSIAHgyQAJgvARg8QAQg9AcgpQgFgCgvAMQglALgdAuIAPgZQAbgsAlgxQAlgvAfgJQAwgGBagEQBagFBOgsQAEgDA0gjQA3gjBEgcQBFgdArARQB9A6A2CLQgCgEgegdQgfgcgngFQADABASAmQASAmAABLIhEAZQAAgFgRgnQgTgpg4gLQADAGgDA2QgDA0g0AjIjnA0QABgFgDgoQgDgngcgTQgDgBgVAUQgVATgPA2QgPA2AQBnIhAADIg4ABQgiAAglgBg");
	this.shape_9.setTransform(8.1,-52.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F4001").s().p("AieE+IgTgoIgCAAIhBgBQg9gChIgGQhIgHgpgPIAIgoIAHgkIgYgPIgbgSQAIgUAjhLQAihKAuhMQAuhLAogUQBAgVBQgDQBYgCBEgZQAXgMAfgSQA+gmBNgbQBNgbBPAeQBmAxAtBZQAuBYACBYQgUgDgbAEIgIgtQgFgggJgPIgFgJIgBAKQgDAIgCAwQAAAWAEASQgJAHgdAOQgdAMgdAAQgEgIgRgYQgSgZgbgQIgKgFIAFAKIAPAiQAMAdACAdIAAADQgCAKhQAjQhQAjjPAFIgGghIgKg3IgGgcIgGAAIgEBkQgCBXgBBUQAAA0ACAZIgYAFIgYAFIgVgsg");
	this.shape_10.setTransform(6.7,-45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiiFFIgVgrQgPAAg+gCQg+gBhFgHQhGgIgngPIgCgBIAHglIAHgnIgbgSIgZgPIABgDQAEgMAkhMQAjhLAxhPQAwhQAtgVQBBgWBTgDQBXgCBDgYQAXgMAfgRQBAgmBPgbQBQgcBSAgQBqAyAvBbQAvBbABBZIABAEIgFAAQgJgCgRgBQgQAAgKADIgEADIgBgGIgFgeQgFgbgHgXQgCARAAAZQAAAVAEATIABACIgDACQgEAEgiAQQghAQgjgCIgBAAIgBgCQgBgCgOgVQgPgXgYgSIAPAnQAIAWABAWIAAAEIAAABIgBABQADAIhRAlQhQAmjgAFIgDAAIgGgfIgLg5IgDBtIgCB+QAAA3ADAXIAAADIg9ANIgUgpg");
	this.shape_11.setTransform(6.1,-44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AihFJIgUgsQgPAAg9gCQg9gBhFgIQhFgHgngPIgCgBIAHglIAHgoIgbgSIgYgQIABgDQAEgLAjhNQAjhLAwhRQAwhRAsgVQBBgWBRgDQBXgCBCgZQAXgLAfgSQA+gnBPgbQBPgbBRAfQBqAzAuBcQAvBcABBaIAAAEIgEgBQgJgBgRgBQgQAAgKADIgEADIgBgFIgFgfQgEgcgHgXQgCARgBAZQAAAWAEATIABACIgCABQgEAEgiARQghAQgigBIgCgBIgBgCIgPgXQgOgXgZgTQAIAQAIAYQAIAWABAWIAAAEIgBACIAAABQADAIhQAmQhQAmjeAFIgDAAIgFggIgLg6IgDBvQgCBDAAA8QAAA3ACAYIABADIg9AMIgUgogAixEWIATAoIAVArIAYgEIAZgGQgCgYAAg1QAAhUADhXIADhjIAHgBIAGAdIAJA3IAHAgQDOgFBRgjQBQgiABgLIAAgDQgBgdgNgdIgOgiIgGgKIAKAFQAcAQASAZQARAZAEAHQAdABAdgNQAdgOAJgGQgFgTABgVQACgwACgIIACgKIAFAIQAIAQAGAfIAIAuQAagFAUAEQgChYgthZQguhYhmgxQhOgfhOAbQhNAbg+AmQgfASgXAMQhDAZhYADQhRADhAAUQgoAUgtBMQguBLgjBKIgqBfIAbASIAXAPIgGAkIgIAoQApAQBIAGQBIAHA8ACIBBABg");
	this.shape_12.setTransform(6.6,-45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_13.setTransform(39.9,-30.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAAQACgPANgCQAOACACAPQgCAQgOACQgNgCgCgQg");
	this.shape_14.setTransform(39.7,-30.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBF8FC").s().p("AhKBCQgegbgBgnQABgmAegbQAegaAsgBQAsABAeAaQAeAbACAmQgCAngeAbQgeAagsABQgsgBgegag");
	this.shape_15.setTransform(31.3,-30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhRBHQghgdgBgqQABgpAhgdQAhgdAwAAQAxAAAhAdQAhAdACApQgCAqghAdQghAdgxAAQgwAAghgdg");
	this.shape_16.setTransform(31,-30.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhzBlIAVABQAKgBAHgHIAIgIIACgCIACABQAfANAjgFQAkgFAdgVQASgNAOgaQAOgagEgoQgFgqgcgOQgsgQgyAQQg0ARgEADQAHgGAzgTQAxgTAuARQAgAQAFAuQAFArgPAbQgPAcgTAOQgeAVgmAGQgkAFgggMQgIALgVAGIgBAAQgLAAgJgJgAhLhKIAAAAIAAAAg");
	this.shape_17.setTransform(55.9,-23);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D8BA7D").s().p("AhzBlIALgsIAVhQIALgsIgDgHQAHgGAzgTQAxgTAuARQAgAQAFAuQAFArgPAbQgPAcgTAOQgeAVgmAGQgkAFgggMQgIALgVAGIgBAAQgLAAgJgJg");
	this.shape_18.setTransform(55.9,-23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C9AA73").s().p("AB7F3QgOgHgGgMIgHgQIAEgWIAEgUIgDgBQhrg4g6hIQg6hHgWg3QgWg1ABgFIgDglQgDghAAgyQgBg8AJg8QAJg8AagiQARgVAYgCQA9gEAzgCQhREfAsCgQAqCiCOBMIgJAlIgGAeQgLAFgJAAQgHAAgHgEg");
	this.shape_19.setTransform(-1,-17.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8BA7D").s().p("AhPF4QgNgHgHgMIgHgQIAEgWIAEgUIgCgBQhtg4g6hIQg7hIgWg2QgWg1ABgFIgDgkQgCgigBgyQAAg9AJg8QAJg7AagiQARgVAXgCQDlgPB8APQB/AOA1AWQA0AWAEAHIAAACQABAwASBNQARBOATBDIAXBOQhXBkg7AcQg8AcgCgDQgEAJgnAXQgnAXgiAQQg1AZgOAKQgNAOgIAYQgHAZgCAJQgKAEgJAAQgIAAgHgDg");
	this.shape_20.setTransform(19.4,-17.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhSGAQgRgJgHgPQgHgPAAgCIgBgBIAAgOQABgNADgKQhtg5g7hKQg6hJgVg4QgWg1ABgEIAAgBIgDgnQgCgigBgxQAAg9AJg9QAKg9AbgkQATgXAbgCQDzgQCAARQCCAQAwAXQAwAYAAAEIABABIAAACIAEABQgBBCASBRQASBRASA8IAVA/IABACIgBACQhPBdg1AgQg2AfgPABIglAZQgkAYg3AaQg0AZgNAKQgOAOgHAYIgIAaIAAACIgCABQgNAGgMAAQgIAAgIgEg");
	this.shape_21.setTransform(19.3,-17.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#352B01").s().p("AADA3QhFgvgsgvQgtgygLgTIBAABIBnACIA9ABIgBALQAFBFAnA3QAnA5AYAVQhegIhHgug");
	this.shape_22.setTransform(-20.9,-9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ACwB6QhtgGhOg6QhPg5gtg2Qgsg6gCgFIgEgGID8AGIAAAEQgDA3AbA0QAbAzAdAiQAdAiADACIAGAHg");
	this.shape_23.setTransform(-20.9,-9.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggBXQARhQATguQAUgvACgCIAHAEQgCABgVAwQgSAsgQBQg");
	this.shape_24.setTransform(-38.4,-36.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C5B06").s().p("AgeA1QgZgPgRghQgRggAEgXQACgLAHgCQAHgCAOAEIATAFQACAQAIAiQAIAfASAGQAPgCANgcQANgaAFgRIADgEIAMgPQAAgBAAAAQAAAAAAABQABAAAAAAQABABABABQAEgBALAGQALAGgEAiQgHA7gfANQgTAHgRAAQgVAAgVgMg");
	this.shape_25.setTransform(12.6,16.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiA5QgbgQgRgjQgQgiAEgaQACgOAJgEQAWgCAGAGIABACIAAABQACAMAQAjQARAhAPAGQAHAAALgVQALgUAJgbIABgBIADgFQARgZANAKQAWAGgDA7QgJA7gkAMQgQAGgPAAQgZgBgYgQg");
	this.shape_26.setTransform(12.7,17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BAC691").s().p("AgXAWIAAgCQgCgFAUgjQAJgCATgBIABADIgNAqQgMACgJAAQgJAAgEgCg");
	this.shape_27.setTransform(10.7,84.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAZQgCgBACgKQACgKARgcIABgCIABAAIAggEIACAAIABABQAGAHgBABIABABIgBACIgKAbIgEAQIgBACIgCABQgIACgOABIgCAAQgOAAgGgGg");
	this.shape_28.setTransform(10.8,84.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BAC691").s().p("AgRAUIgBgBQgBgGASgjIATABIABACQgIAZgDAPIgPACQgHAAgDgDg");
	this.shape_29.setTransform(15.3,84.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAXQgFgJAWgpIABgCIAbABIABABQAFAGgBACIAAAAIAAACIgIAZIgEAQIAAACIgCABQgHACgLABIgCAAQgMAAgEgHg");
	this.shape_30.setTransform(15.3,84.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8B9B45").s().p("AAaAPQgYgVgzggQADAAAmARQAiASAYAqIgYgYg");
	this.shape_31.setTransform(19.8,33.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnBfQgwgLgCgEIgCgBIAAgCQgEg2AVgqQAQgkATgVQATgUACgBQgFADgcAuQgeAugEA/IABANQAKAHAtAIQArAIBBgbQgIgQgCg5QACguAKgSQAKgSACABQgWA3AGAuQAHAxADAEQABACgGAEQg2AWgnAAQgPAAgNgDg");
	this.shape_32.setTransform(-3.8,29.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#95A84F").s().p("AgnBhQgwgKgCgFIgCgBIAAgCQgDhHAggyQAfg0AIgFIB0ARQgWA3AGAvQAHAwADAEQABACgGAEQg2AWgmAAQgQAAgNgDg");
	this.shape_33.setTransform(-3.8,29.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C9AA73").s().p("AAqCRQgHgFgBghIAAgEIgEAAQgDACgKgHQgKgIgCgkQAAgOADgUIAAgBIgBgBIgfg0QgdgwgFgbIAAgIQAAgYADgFIANABQgDAYAFAXIA/B0QAhA/ADBBIgFABIgFAAQgEAAgDgCg");
	this.shape_34.setTransform(-1.2,53.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D8BA7D").s().p("AgGCTQgHgGgBghIAAgEIgEAAQgDACgKgIQgKgHgCgkQAAgOADgUIAAgBIgBgCIghgzQgdgwgFgbIAAgIQAAgYADgFQAiADAMgFQgCAKgBAQQACAQATArQAUArANAPIAGACQAMAAAoAJQAoALAHANIAEAUIABABQAFADACAUQgBAIgKAGIgDABIABADQADAFgPAYQgPAOgggEIgEAAIAAADQABAJgSADQgHgBgFABIgEABQgEAAgCgBg");
	this.shape_35.setTransform(3.8,53.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgLCbQgJgHgCgiQgGAAgIgHQgOgOAAgjQAAgPADgTQgJgMgcgsQgbgugFgbIAAgIQADgkADABIABgDIACABQAzADABgGIAHgEIgCAIQgDAFgCAZQADASAUArQAUAsAJAIQAMgBArAKQAsAMAIARIABAJIACAKQAGAFAEATIgBAEQgCALgLAHQACAMgQAVQgRAQgigDQgDAOgVAAIgJAAIgFABQgGAAgFgDg");
	this.shape_36.setTransform(3.8,53);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgRAKQAJgKALgGIAPgHIgMAJQgJAIgIAKg");
	this.shape_37.setTransform(5.2,24.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8B9B45").s().p("AhVCRQgkiZA+iOIBAAHIAAAEQAABLAXBKQAXBMAwA8Qg0AEhDABIgFAAQgfAAgdgGg");
	this.shape_38.setTransform(0.7,40.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#95A84F").s().p("AiPDIQgtgNgLgFQgBgGgCgUQAAgNAEgPIgGgDIgKAUQgHARAAAQIgBABQgKAAghgZIgBgBQABgLAUg7QAUg8AjhGQAlhIA0gzQA1gwAwAFQAhAGASARQASAQAAADIABABIBOAcIABAAQACgBANAEQAMAFACASIAAAdIAAAKQgBAtANAHQAGAFASAlQATAnARAtQAQAuABAZQgEAGhFAQQhFAQilAEQg6gBgtgNg");
	this.shape_39.setTransform(2.8,34.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AiYDOQgwgPgDgDIgBAAIgBgCQgCgDgCgbIABgDQgGAMAAALIAAACIAAABQgBAFgCACQgJACgRgKQgRgKgKgIIAAAAIgEgGIAAgBQABgFATg8QATg8AmhKQAlhMA2g1QA4gzAzAGQAiAGASAQQATAQACAGIAnAOIAlANQAKAAAMAHQAMAHACATIAAAdIAAAKQgBAkAHAJQAJAGAUAmQATApARAvQARAvABAZIAAACIAAACIgBABQACAEhDASQhCASi3AFQg/gBgxgPg");
	this.shape_40.setTransform(2.7,34.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#416600").s().p("AgxBXQhdgOgxgzQgxgwgIgSIAVgWIATgUIBIAHICaAQICdAQIBKAIQgDAPgWAVQguAlhMAdQhEAYhAABIgTgBg");
	this.shape_41.setTransform(3.4,54.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgyBeQhDgIgvghQgtghgXgdQgXgfgBgDIgBgCIAugxIHUAxIAAADQAAATgcAYQguAohPAdQhEAZhAAAIgWgBg");
	this.shape_42.setTransform(3.3,54.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#416600").s().p("AAABaQgSgFgEgIIAGgoQAFgfAAgQQgBgOgLgZIgTgoQAZAKAWAAQAYABAOgCQgMAXgEAfIgBAgIABARIACAhQAAANgDAHQgNAOgNAAIAAAAg");
	this.shape_43.setTransform(1.9,71.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAABnQgNgCgIgHIgIgJIgBgBIAAgCIAFgkQAFghABgRQgCgPgMgcQgNgbgJgQIgGgMIAMAHQAfAQAfgCQAhgBADgCIANgCIgJAJQgNAOgEAeQgFAeABAOIABAQQAHAqgKAQQgPASgPAAIAAAAg");
	this.shape_44.setTransform(2,70.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BCCC79").s().p("AgTAzQgLgGgKgDQgRgEgWgSQgHgGAAgGIAAgBQAHgMANgFQABABABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgCgNgSIgCgFIABgCQAEgGATgEQATgDAQgBQBBAEATAFQATAGgCACQABACgHAFQgTAMgCAMIAAABQACAGADADQAIAGABAHIAAABQgEAJgQAFIgFADQgNAGgVAIQgLAEgIAAQgIAAgGgDg");
	this.shape_45.setTransform(2,80.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXA5QgJgFgKgEQgSgDgYgUQgJgIAAgJIABgDQAIgQAPgFIgJgMQgDgFAAgEIABgFQAJgMAYgDQAXgEAJABIABAAQBBADAWAHQAVAFAAAHQgCAMgIADQgQAKgBAIQABAFABAAQANAKgCAKQgFAOgTAGIgFACQgPAIgWAHQgLAEgHAAQgKAAgJgEg");
	this.shape_46.setTransform(1.9,80.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgUA2QgPgHgOgEQgNgEgTgQQgPgRAOgIQANgLAEAAIACABQABAAgNgSQgHgRAfgFQAfgFAGABQA3ACAfAHQAeAIgUANQgUAOACAIQABAGACAAQAQAPgJAIQgJAIgOAGQgMAGgXAIQgMAEgIAAQgJAAgHgDg");
	this.shape_47.setTransform(1.9,80.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2F3A01").s().p("AgzAhQgCgHgBgTQgBgUAMgUQAJgMARgEQAKBDA+AfIgOABQgzAAgpgRg");
	this.shape_48.setTransform(-1.6,89.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3E4F00").s().p("AiXAqQgCgHAAgTQgBgUAMgTQAMgQAYgCQBsgHAKgFQAJgDAZgBQAZgCAdACQAZACAQAVQAOATAAAYIgCAQQgNAFg2AMQg2AMhBAEIgWABQg1AAgrgRg");
	this.shape_49.setTransform(8.4,88.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AicAwIgBgBIAAgCQgCgDgCgYQgBgXAOgWQAOgTAbgCIBLgGQAggDAKgDQAJgDAZgCQAagCAfACQAbACASAYQAWAfgIAkIgBACIgCABQgHADg3ANQg3AOhFAEIgbACQg3AAgtgTg");
	this.shape_50.setTransform(8.4,88.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgOATIABgDIANgNQAKgLAFgLIgEAMQgGAJgJALQgHAHgCAAIgBgBg");
	this.shape_51.setTransform(49.9,-6.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIABIALgKQgagLgMAKQgMAJAAABQAAgBAFgNQAFgMAQgEQAeABATAXQAUAVAAADQgbgagRAQQgPASgBAEQgHgQALgNg");
	this.shape_52.setTransform(-13.3,-19.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6D5803").s().p("AlKEbQhCgEgYgSIAHgyQAJgvARg8QAQg9AcgpQgFgCgvAMQglALgdAuIAPgZQAbgsAlgxQAlgvAfgJQAwgGBagEQBagFBPgsQADgDA0gjQA3gjBEgcQBFgdArARQB9A6A2CLQgCgEgegdQgfgcgngFQADABASAmQASAmAABLIhEAZQAAgFgRgnQgTgpg4gLQADAGgDA2QgDA0g0AjIjnA0QABgFgDgoQgDgngcgTQgDgBgVAUQgVATgPA2QgPA2AQBnIhAADIg4ABQgiAAglgBg");
	this.shape_53.setTransform(14,-56.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGAAQABgGAFAAQAGAAABAGQAAAHgHAAQgFAAgBgHg");
	this.shape_54.setTransform(45.8,-35.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOAAQABgPANgCQAOACABAPQgBAQgOACQgNgCgBgQg");
	this.shape_55.setTransform(45.6,-35.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FBF8FC").s().p("AhKBCQgdgbgBgnQABgmAdgbQAegaAsgBQAsABAfAaQAdAbABAmQgBAngdAbQgfAagsABQgsgBgegag");
	this.shape_56.setTransform(37.2,-34.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhRBHQghgdgCgqQACgpAhgdQAhgcAwgCQAxACAhAcQAhAdABApQgBAqghAdQghAcgxABQgwgBghgcg");
	this.shape_57.setTransform(36.9,-34.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#352B01").s().p("AADA3QhFgugtgwQgsgygMgUIBAACIBoADIA9ABIAAAKQADBEAoA4QAoA5AWAWQhdgJhHgug");
	this.shape_58.setTransform(-15,-14.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("ACwB7QhtgIhOg4QhPg6gtg2Qgsg5gCgGIgEgGID8AGIAAAEQgDA3AbA0QAbAzAdAiQAdAiADACIAGAHg");
	this.shape_59.setTransform(-15,-13.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AggBXQARhQATgtQAUgwACgCIAHAEQgCACgVAuQgSAtgQBPg");
	this.shape_60.setTransform(-32.5,-40.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgjA5QgagQgRgjQgQgiAEgaQACgOAIgEQAXgCAGAGIABACIAAABQACAMAQAjQAQAhAQAGQAHAAALgVQALgUAJgbIABgBIADgFQARgZANAKQAWAGgDA7QgKA7gjAMQgQAFgPAAQgZAAgZgQg");
	this.shape_61.setTransform(18.6,12.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgjBCQgkgggVgfQgWgcgCgFIAUAXQATAWAdAcQAnAoA1AKQAKgMAXgqQAXgnAIgiQgVAEgtgVQgOgJgNgVIgPgXQAlA0AiAIQAkAHAFgEIAEAAIAAAFQgIAkgcAyQgcAygDAFQgxgIgjgfg");
	this.shape_62.setTransform(20.5,30.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#95A84F").s().p("AAuBnQgugHgkgfQgkgfgVgeQgUgcgDgEIB4hKQAbAxAmAJQAlAIAGgDIAEAAIAAAEQgIAkgbAvQgaAugFAHIgBACg");
	this.shape_63.setTransform(20.5,30.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgMALQAHgFALgWIAGADQgDAIgHAJQgGALgFADg");
	this.shape_64.setTransform(60.2,13.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C9AA73").s().p("AiJBBQglgHgkgJIAIgMIBAAMQAkAFAQgBIBAgfQA3gbAdgRQAGAFA4AAQA3ABAdg1IADABQgFAagNAUQgPAUgjABQgiABgagEIgKgBQgZAChWAvQglAVgMAEIgIABQgOAAgcgFg");
	this.shape_65.setTransform(50.2,25.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D8BA7D").s().p("AiJBxQgmgHgkgIIALgRIAJgOIAtAHQAfAFAMgBQAHgCAmgTQAmgUAjgVQAlgUAFgIQAFgNgBgiQACgNARgFQARgFALgBIADAAIABgCIAGgRQAFgLAHgFQAQABAkApIACABQARADAHAQQAHASgFAXQgGAWgLASQgQAUgjABQgiAAgZgEIgLgBQgZADhVAxQgmAVgMAEIgIABQgNAAgcgGg");
	this.shape_66.setTransform(50.3,20.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AiYB1QgxgKgOgEIgFgBIAcgrIACABIAwAHQAeAEAKAAQAJgDAkgSIBFgnQAjgTAFgGQAEgLAAgiQACgSAUgHQATgGALAAQABgGAGgLQAFgLAJgGQAMgEATARQAUARAJAMQAUAFAHARQAFAMAAANQgCAjgSAdQgRAXglABQglABgagEIgKgBQgMAAghARQgfAQgeARQgnAWgNAEIgIABQgUAAgogJg");
	this.shape_67.setTransform(50.1,20.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8B9B45").s().p("AgbAhQhEgigYhPQBnAjBigdQAOAwALApQALAqACAYQhSgMhBgkg");
	this.shape_68.setTransform(23.3,38.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#95A84F").s().p("AiFC2IAAgeIAAgaIgGAHQgUAXgJAFIgwgYIgrgUQADgQAVg7QAWg5AuhJQAvhIBOg3QAFgDAlgEQAkgFAwAWIACABQAuAXAXASQAXASALAkQAXBBAYBVQAZBXgBAgQgCALgdAOQg+AfhoAHIgbABQhYAAhRgqg");
	this.shape_69.setTransform(9.2,31.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AiKC8IgCgBIAAgQIAAgZQgLANgLAHIgCAFIgJgDIAAgBIg0gaIgqgUIABgDQAAgEAUg8QAUg7AwhOQAwhPBVg6IAAgBIAAAAQAEgDAogFQAlgFA0AXIACABQAwAXAXATQAYATAMAlIAVBCQASA3AQA/QARA/gCAaQgHATgbAMQhAAghrAHIgZAAQhbAAhUgrg");
	this.shape_70.setTransform(9.2,31.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#95A84F").s().p("AgxBBQgSgigHgjQgGglAAgLQAQgJAqgDQApgDAigBIAcgBQgYAmgmAvQgkAxgYAFQgFAAgDgFg");
	this.shape_71.setTransform(-3.4,18.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ag7BGQgVgmgGgmQgGgpABgFIAAgCIABgBQANgJAngFQAmgEAwAAIAigCIAKgEIgFAJIgeAuQgYAigdAhQgcAjgVABQgJAAgFgJg");
	this.shape_72.setTransform(-3,18.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#416600").s().p("AjCBkQgegJgZgKIgCAAIgSALQgIgNAAgMQADgcAKgMQALAOAWAGQAVAGAGABIACAAIABgBQAGgEAMgMQAGAEALAPIACACIBhgfIgJgEQg0gYgYgqQgYgpgDgOQARgOBMAHQBMAHBjATQBkATBZAVQgXAvhAAWQhAAVgxADQggADg4AOIhpAbQgiAJgHABIgBAAQgJAAgcgIg");
	this.shape_73.setTransform(5.3,53.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AjMBpIgvgQIgMAHIgKAHIgCgDQgRgfALgZQAKgZAEgCIAZANQAXAMAOAEQAKgHAGgHQACgDADAAQAKADAMARIAhgKIApgNQg2gdgXgtQgWgrgBgHIAAgCIABgCQAYgVBnANQBmANBqAXQBqAWAcAHIAEABIgBAEQgQAqgwAXQgwAWgsAHQgtAHgHAAQgfADg4AOQg5AOgvANIgqALQgNAAgjgLg");
	this.shape_74.setTransform(5.4,53.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3B5601").s().p("ABRBAIgZgkIgYghIgDABQgYAEgFgBIAAAAQgBgPgCgDIgBgBIgBAAIg5gRIgmgOQADAAAbgNQA5AVAsAbQAuAYAYA3QgFACgGAAIgJgBg");
	this.shape_75.setTransform(30.7,62.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#416600").s().p("AAGgCQgsgbg5gVIAvgaQAMABAkASQAlASAPARQALAQAOAcQAPAdAEAKQgEAHgQAJQgYg3gugYg");
	this.shape_76.setTransform(33.2,61);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#416600").s().p("ABIBNIgagkIgYgjIgCABQgWAGgHgDIAAAAQgCgOgCgCIAAgBIgCAAIg5gRQgbgJgLgGIABAAQgBACAOgGQAOgGAygcQAKAAAkATQAmASAPAQQALARAOAbIATAoQgDAFgLAHQgHAGgKAAIgIgBg");
	this.shape_77.setTransform(31.7,61.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("ABGBTIgBAAIgXghIgZgjQgTAGgNgFQgDgCAAgDQgBgKgCgCQhGgUgSgIQgSgJADgCIAAgBQACgGALABQACABBHgnQANgCAnAVQApAUAQARQAMASAPAfIATAmIAAABIgBACQgBADgOAMQgJAIgNAAQgGAAgHgCg");
	this.shape_78.setTransform(31.5,61.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BCCC79").s().p("AAEBKQgMgHgIgPIgJgRIgDgHIgEAHQgIAOgJgDQgQgFAOg4QAVg8ALACIAGgBIAIARQAFAKAJACQAFACAIgKQAKgQAHACQADgBAFAKQAFAJAFAdIABAQQgCAkgQAUQgRAUgEABQgEACgFAAIgGgBg");
	this.shape_79.setTransform(-24.7,58.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AACBRQgXgQgIgWQgLAOgMgEQgWgGARhBQAQg2AVgIQALgCABACIABAAIAAACQAHAUAKAGQADAAADgFQANgUAMACQARAEAHAyQADAxgVAZQgUAagEAAIAAABQgGACgGAAQgFAAgEgBg");
	this.shape_80.setTransform(-24.8,58.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BAC691").s().p("AgJAFIgGgRIAAgFQABgIAFgDQAIgEABADQAFAFAFAQQAEAOACAMQgHAIgLAFIgHgag");
	this.shape_81.setTransform(-36.1,64.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQAIIgGgUQgEgPAMgIQAMgHAHAGQAIAJAEASQAGARAAAFIABADIgDABQgIAEgLAMIgJAHIgJggg");
	this.shape_82.setTransform(-36.1,64.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BAC691").s().p("AgKAEIgFgOIAAgFQABgIAFgCQAIgEABACQAKANAGAbIgSAQIgIgZg");
	this.shape_83.setTransform(-33.2,62.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgQAHIgGgRQgEgPANgJQALgHAHAGQAHAIAFARIAGAXQgOANgRAMIgIgfg");
	this.shape_84.setTransform(-33.2,62.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2F3A01").s().p("AhaAyQgIgGAPgmIADgGQAwADAugNQAvgOAegjIAAACQABATACAGQgPAcgzAdQgyAegoAFIgGAAQgRAAgFgKg");
	this.shape_85.setTransform(-38.9,64.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3E4F00").s().p("AhkBoQgIgGAPgmQAag3Aug3QAsg4ARgHQAOgBATAQQATARAMAOQgZAkACAcQABARACAGQgPAcgzAeQgyAfgoAFIgEAAQgTAAgFgKg");
	this.shape_86.setTransform(-37.9,59.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhsBsQgJgPAQgkQAag3Awg4QAtg6ATgIQAVgBAXAWQAYAWAFAHIACADIgCACQgXAfABAbQABAYABACIABABIgBABQgPAfg1AgQg0AggrAFIgFAAQgWAAgIgNg");
	this.shape_87.setTransform(-38.1,59.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BAC691").s().p("AgUATQgBgHADgPIAogRIgDAaQgCAGgOAEQgMAFgLAAIAAgCg");
	this.shape_88.setTransform(51.2,69);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BCCC79").s().p("AgsAoIgDgCQABgFARgKIAJgFIgJgCQgIgBgLgFQgLgFAAgHQACgIALgIQALgHAIgDQA0gRARAGIALAAIABACQgBALgIAXIgDADIAGAAQAMAFAAAKQgOARglAGQgUAEgPAAQgLAAgHgCg");
	this.shape_89.setTransform(39.9,68.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AguAvQgIgCgBgGIAAgBQACgKANgHQgWgFgFgRIAAgCQADgNAPgJQAOgJAFgBQA2gSATAHIAKAAQADAAADACQABADAAAEQgBAPgGARQAIAEADAGIAEAKIAAACIgBABQgQAVgoAGQgVAEgQAAQgMAAgIgCg");
	this.shape_90.setTransform(39.9,68.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgYAeQgDAAgCgDQgEgKAJgYIA3gWIgEAmQgEAMgVAFQgQAEgIAAIgCAAg");
	this.shape_91.setTransform(51.1,68.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BAC691").s().p("AgTATIAAgCQAAgJANgTQAGAAAUgHQgEASACAFQgJAJgaAFg");
	this.shape_92.setTransform(46.4,70.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgaAXQgCgQARgYQAKABAcgKIgDAkIgBAAIgOAJQgKAHgRABQgHgBgBgDg");
	this.shape_93.setTransform(46.5,70.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2F3A01").s().p("AhGAvIAAgDQAAgLAFgbIAQg4IAIAAQAEAuAhAQQAeAUAuADQg4AQgnAAQgpAAgGgEg");
	this.shape_94.setTransform(43.4,76.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3E4F00").s().p("AiLBNIAAgDQAAgLAGgbQAGgbAJgdQAkABAQgRQAGgEADgBQAFAEAZgHQAYgIA4gYQAWgIAQAJQAsAcAFATQgyA8hAAYQg9AXgxABIgUABQgeAAgFgEg");
	this.shape_95.setTransform(50.2,73.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhyBYQgagEgEgFQgFgHAHghQAHghAKgiIABgEIADACQAjACAQgRQAJgJAHAEQAHACAhgMIBAgZQAZgKATALQAZAPAOARQAOASAAADIAAACIAAABQgsA3g4AeQg1AegsADIgZABQgWAAgRgDg");
	this.shape_96.setTransform(50.3,73.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C9AA73").s().p("AhRAiQgOghgDgBIBihiQBkAFgBACIgxABQgmABgMAEQgMAHgeAhIgmAqIgEADIAFABQAJAFAJAYQAKAYABATQgCANgdANQAPgggPghg");
	this.shape_97.setTransform(-19.5,27.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAAABQgFgDgIACQgJABgCAIIgHgCQAEgKANgEQALgDAGAIQAXALAGgDQgBABgLACIgDAAQgKAAgHgIg");
	this.shape_98.setTransform(-35.6,31.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgYAkQgbgSgDgEQgIgJABgLQAAgMACgFIgBgGIACgIQACgEAGgCIAEgBQAMgGANAGIACACIgBADQgBABgDAMQgDANAIANQAQAVA5gDIAHgBIABAHIgLAEQgEAAgaARQgGADgIAAQgMAAgTgMgAgrglIgFABQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAFABADIABACIgBABQgFAQAIAPQAMALAWAMQAUANALgGQAOgKAJgEQgwAAgQgXQgHgJAAgMQABgNADgGIgGgBQgEAAgFACg");
	this.shape_99.setTransform(-36.1,36.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgVASQABgUANgJQAXgJAGAFQgGAAgTAKQgKAFgBASg");
	this.shape_100.setTransform(-31.8,30.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D8BA7D").s().p("Ah7B7QgWgMgMgMQgJgRAGgQIABgCIgDgCQgJgHAAgHQABgJAKgIQAKgJAIgFIADgCQAQgHAAAFIADACIACgCQAXgTAKACQALACAAACIACABIAEgBIAVgYIAtgvQATgWAOgLQAagPAugGQAvgGAFABQAQAZABARIgQAAIAAgEIgyABQglABgOAEQgNAHgdAhIglAqIgDAEIAFAAQAHAFALAYQAIAYABATQgBALgTALQgWALgVAHQgEgBgcATQgEABgFAAQgJAAgPgIg");
	this.shape_101.setTransform(-25.2,27.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhzCBQgZgPgKgKQgJgJABgNQABgLABgFQgKgIgBgKIAAAAQABgMALgKQALgJAKgGIADgCQAQgJAGAFQATgRARABQAJAAAEADIAtgwQAfgjAWgTQAcgQAugGQAvgGAHAAIABAIQgGgBguAGQguAGgaAPQgZAVgiAnIgpAsIgCABIgDgBQAAgCgLgCQgKgCgXATIgDACIgDgCQAAgFgPAHIgDACIgSANQgKAJgBAJQAAAHAKAHIABABIAAADQgGAQAIARQAMALAWANQAWANAMgHQAcgSAEABQAVgHAVgLQAUgMABgLQgBgSgLgYQgHgYgJgFIgEAAIADgEIAkgqQAfghALgHQAOgEAngBIAwgBIAAAHIg6ACQggABgIACQgHAEgYAZIgqAxQAIAJAKAYQAJAYABAQIAAABQgEASgaANQgcANgKADQgDgBgbARQgGAEgHAAQgNAAgPgKg");
	this.shape_102.setTransform(-26.4,27.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgIABIALgKQgagLgMAKQgMAJAAABQAAgBAFgNQAFgMAQgEQAeABATAXQAUAUAAAEQgbgbgRARQgPASgBAEQgHgQALgNg");
	this.shape_103.setTransform(-7.5,-17.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AiiFFIgVgrQgPAAg+gCQg+gBhFgHQhGgIgngPIgCgBIAHglIAHgnIgbgSIgZgPIABgDQAEgMAkhMQAjhLAxhPQAwhQAtgWQBBgVBTgDQBXgCBDgYQAXgMAfgRQBAgmBPgbQBQgcBSAgQBqAyAvBbQAvBbABBZIABAEIgFAAQgJgCgRgBQgQAAgKADIgEADIgBgGIgFgeQgFgbgHgXQgCARAAAZQAAAVAEATIABACIgDACQgEAEgiAQQghAQgjgCIgBAAIgBgCQgBgCgOgVQgPgXgYgSIAPAnQAIAWABAWIAAAEIAAABIgBABQADAIhRAlQhQAmjgAFIgDAAIgGgfIgLg5IgDBtIgCB+QAAA3ADAXIAAADIg9ANIgUgpg");
	this.shape_104.setTransform(17.7,-47.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhRBHQghgdgBgqQABgpAhgdQAhgcAwgCQAxACAhAcQAhAdACApQgCAqghAdQghAcgxABQgwgBghgcg");
	this.shape_105.setTransform(42.7,-33.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#352B01").s().p("AADA3QhGgugsgwQgsgygMgTIBAABIBpACIA8ABIAAALQADBFAoA3QAoA5AWAVQhdgIhHgug");
	this.shape_106.setTransform(-9.3,-12.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("ACwB6QhtgGhNg6QhRg5gsg3Qgsg5gCgFIgDgGID8AGIAAAEQgDA3AaA1QAbAxAdAjQAdAiADACIAHAHg");
	this.shape_107.setTransform(-9.2,-12.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgRAAIAEgGQAbALABgFIADAGIgKABIgBAAQgIAAgQgHg");
	this.shape_108.setTransform(77.5,20.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgTACQAkgGgDgFIAGAEQACAFgoAKg");
	this.shape_109.setTransform(80.5,14);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAFA8QgEgGAAgIQAAgNAEgKQgHAGgPADQgHgBgJgHIgJgIQAPAMAOgEQANgEAGgGQAGgFADADQACACgCAEQgKASAHAQQADAFAKgCQAJAAAJgLQAMgTAFgWQAGgVgBgHQgEgIgVgLQgVgMgTgCQgOABgWAXQgXAXgMAPQADgEAYgfQAZggATgDQAUADAYANQAYAMAEAMQABAJgGAWQgFAYgNATQgLAQgNACIgHABQgJAAgEgHg");
	this.shape_110.setTransform(71.7,14.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgOAMQgcgJgHgDIANAAQAMACAMADQAkAGALgLQANgGABgHIgBAIQgCAGgHAGQgIAHgUAAQgLAAgOgCg");
	this.shape_111.setTransform(36.2,72.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgIgTQgagagDgBIAPAHQAOAJANARQAWAXALAjIgHACQgPgqgYgYg");
	this.shape_112.setTransform(36.6,32.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgQgfQgJgpAAgCQACADAWBEQAIAfATAsIgHADQgahCgJgog");
	this.shape_113.setTransform(36.5,26.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAKABQgLgEgTADIgBgHQAVgDAKAJQAMAHAAADQAAgBgMgHg");
	this.shape_114.setTransform(13.4,25.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgbBpQg1gQgVgrQgTgrAGgmQAGgnAEgFIABgDIADABQAWAGA4gLQA2gKAigJIACAHQgLADg8ANQg+ANghgEQgHAPgDAsQAAAcANAeQAUAoAxAQIAzgfQAogYASgFQAMgEALgIIAKgJQgBACgIALQgIALgPAEQgOAEglAUIg5AiIgBABg");
	this.shape_115.setTransform(5,19.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#95A84F").s().p("AgbBpQg1gQgVgrQgTgrAGgmQAGgnAEgFIABgDIADABQAWAGA4gLQA2gKAigJIAyB8QgBACgIALQgIALgPAEQgOAEglAUIg5AiIgBABg");
	this.shape_116.setTransform(5,19.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#8B9B45").s().p("AhYC/IgBgoIAAgkIgRAbIgSAfQgZgHgGgGQADgMAdg9QAcg+Atg1IAAgBIAAgBQABgEAOgoQANgpAbgqQAcgqAsgHQAngFATgFIAVgDQhKBggwBxQgvBvAbB3QgxgIg1gVg");
	this.shape_117.setTransform(4.1,30.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#95A84F").s().p("AjOC8IgBgoIgBgkIgQAcIgSAeQgagHgFgFQADgMAdg9QAdg+Asg2IAAgBIAAgBQABgEAOgoQANgpAdgqQAcgqAsgHQAngEARgFQAVgFAUABQAUACAwAQQAFAKAkAeQAlAeBGAQQgBARgLAwQgLAvgcAaIgCACIABACQAJAXAMAlQAMAmABAaQACAJgfAMQgNAHhAAVQhAAVhdAFIgXAAQhUAAhcgjg");
	this.shape_118.setTransform(15.9,30.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AjSC/IgCAAIgBgWIgBgiIgPAaIgJAPIgDgBIgVgFQgOgDgFgGIgBgFQADgKAghAQAhhBAtg4QACgJANgpQANgpAcgpQAcgpAugHQAngEAQgFQAWgGAVACQAVACAyARIABAAIABABQAAAEAkAhQAlAgBKAPIADABIAAADQABAJgLA0QgLA0gfAgQAGAOANAoQANAnACAfQAAAMgEAGIgBABIgBAAQgDAEhHAbQhGAbhrAKQgPABgRAAQhaAAhfgqg");
	this.shape_119.setTransform(15.8,30.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#416600").s().p("ADBCgQgCgQgGgTIgIgUIAAgDIgDAAQgCABgLgEIAIgBIANgBIhdgyIgCAAQggAGhPgMQhRgMhLgyQgegYgRgaQgRgZgCgGQADgOAJgVQAJgVAMgEQAIgCAIALIACACQAZAUBhANQBfAOBiAHIB/AJQgQAmgkAdQgkAcgFACIgFADIAFADQABAAAQANQAPALANATQALATANAiIATAvQgTAGgNAAQgKAAgHgEg");
	this.shape_120.setTransform(15.3,56.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("ADRCrQgTgEgCgBIgCgBIAAgDQgBgMgGgRIgIgYQgHABgKgGQgEgEABgCIAAgCQABgDAEgBIgngWIgegQQgjAHhPgKQhRgLhNgyQgigcgRgdQgSgeAAgDIgBgBIABgCQABgIAKgaQAKgaASgHQAMgCALAOIABABQATAQBPANQBPAMBfAIQBhAIBJAEIAFAAIgBAEQgLAlghAdQghAbgQALQASAKAYAgQANAXAPAmIARAsIABACIgDACQgQAIgPAAIgHAAg");
	this.shape_121.setTransform(15.4,56.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D8BA7D").s().p("AiIBZIg6gGIABgQIACgRIAsAGQAeADASgDQAWgJAmgRIArgVIABAAIABgBQAXgkAWgfQAWgfAHgDQAPABAnAIQAnAKALAJQAHAMADARQACARgBAGIgDAGIAAABQACADgEAYQgEAZgYALIgCABIAAACQAAACgFAFQgIAGgRgFIgGgCQgYgGgVAFQgdAIgZgWIgBgCIgDABIhEAcQglAOgIABIgsgEg");
	this.shape_122.setTransform(62.4,14.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AhdBlIgpgHQgigFgeABIgEAAIAFgwIAEABIAnAGQAjAGAVgEQATgHAkgSIArgXQARgaAZglQAagkAMgEQAOABApAIQAqAJANANQANAXAAAbIgBAIIgCAFIAAAEQABALgGAWQgGAWgWAKQgBAFgGAFQgLAIgVgGIgGgCQgWgFgUAEQgcAHgcgYQhrAugJAAIgBAAg");
	this.shape_123.setTransform(62.3,14.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3A5402").s().p("AhAA2QA1glAHhHIAEgFQAJAKA4AUIg7A5QgdAcgIAEIgCAAQgIAAgXgGg");
	this.shape_124.setTransform(-1.8,60.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#416600").s().p("AgKA2QgcgHgagJQgsgNgKgBIAAgIQgCgSATgKIA+AOQAdAIAFADIAFAGIAAgJQgBgJABgBIADAAQANAFAAgFQgBgCgDgCIAVgcIAUgbQAKAKA5AUIg7A5QgeAcgJAEIgCAAQgIAAgWgGg");
	this.shape_125.setTransform(-7.4,60.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AhFAtQgqgNgNgBIgDAAIgBgEQgCgMADgPQAEgPASgEIAAgBIABABIA2ANQAaAGAOAEIAAgBQgBgFAFgEQAEgDADACIAXgeIAWgeIADgDIACACQAAAFBJAdIAGABIgEAFIgyA1QgkAmgNAIQgSAAhOgag");
	this.shape_126.setTransform(-7,60.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BCCC79").s().p("AgIBVQgGgEgCgKQgBgLAAgFIABgMIgHAJQgRAVgKgDQgDAAgFgMQgFgNACgpQAEgwAKgTQAKgTAIgDQAIAEATAZIACAEIAPgWQAHgEAEACQANAFAKAYQAKAXAEAPIgFALIgEAMQgHAkglAdQgIAHgGAAIgEgBg");
	this.shape_127.setTransform(-19.3,62.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgLBdQgNgKAAgSQgPASgMgFQgTgHAEhEQADgxALgWQAKgWALgEQANgBASAcIAKgOQALgIAGADQASAJALAdQALAdABAJIAAABIgJAZQgGAmgnAgQgLAJgHAAQgEAAgDgCg");
	this.shape_128.setTransform(-19.4,62.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#2F3A01").s().p("AgvAjQgMgFgBgPQgDgPADgQQAugGAqgQIABAEIAFAFIAcAUQg/AwggAAQgIAAgGgEg");
	this.shape_129.setTransform(-42,76.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2F3A01").s().p("AgZAOQAVgQAMgYIAPgBQABARACAHQgEACgfAdIgQgOg");
	this.shape_130.setTransform(-27.6,66.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2F3A01").s().p("AgPgHIAJgFQAGAHAQAIIgHAHIgCACIgWgTg");
	this.shape_131.setTransform(-33.5,71.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3E4F00").s().p("AhnB+QgMgFgBgPQgGgxAeg2QAegzAjgmQAhgnAIgDQAJgCAhAHQAgAIAeAJQgIAnAAAWQABAUACAIQgEABghAeQgZgWgIgEQgIgFgBACQgFABgLAHQgMAHgBAIIAAACQgBABAGAIQAHAHAbATIgHAHIgCACQgZgYgIgEQgHgEgCACQgOAIgFAPIAAAEIAAAEIAGAFIAaAUQg/AyggAAQgIAAgGgEg");
	this.shape_132.setTransform(-36.4,67.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AhrCGQgQgHgBgSQgGgzAdg4QAdg2AjgoQAigoAJgFQAQgCAqAMIA7ARIAEABIgBADQgQBSAKAJIABADIgDACQAAgDgoAkIgDACIgCgCQghgcgFgBQgGABgIAFQgJAEgBAGIAAAAQgDAEArAeIADACIgUAUIgDgCQgigjgCAEQgNAKgCAKQAAABAhAZIAEADIgDACQhFA2gjAAQgKAAgHgEg");
	this.shape_133.setTransform(-36.2,67.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BAC691").s().p("AhmCAQgNgFgBgOQgGgyAdg2QAdg0AhgoQAggnAJgDQAJgCAiAJQAiAJAfAKQgIAnAAAWQAAAUADAHQgIAEhEBBQgyAygkAQQgYALgQAAQgIAAgFgDg");
	this.shape_134.setTransform(-36.4,67.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AhqCHQgRgHgBgTQgGgyAdg4QAdg2AjgoQAigpAJgEQAQgCAqALIA7ARIAEACIgBADQgKAoABAXQAAATACAGIABABIACADIgCAEQgCACgEgBQgEAChEBBQg0A0gmAQQgaALgRAAQgJAAgGgDg");
	this.shape_135.setTransform(-36.2,67.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#BCCC79").s().p("AghBFQgXgGgIgKIgGgEQgCgBAAgFQACgPAJgSIABgEIgDgBQgGgCgYgRIAAgBQACgIAWgPQAWgPAWgMQAtgHAUAFQAUAEAEAIQAEAVgGAFIgDAGIAGAAQAZABAEAPQAHAYhDAlQgiAQgWAAIgLgBg");
	this.shape_136.setTransform(36.8,73.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgjBMQgZgHgJgLIgEgEQgGgEAAgIQACgUAIgNQgLgFgSgOQgCgCAAgDIAAgCQAEgOAcgSQAcgSAMgFIABgBIABAAQBQgMARAZQADAHAAAHQAAAKgDAGQAZADAFASIAAAFQgBAgg/AgQglASgWAAQgHAAgGgCg");
	this.shape_137.setTransform(36.8,73.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#BAC691").s().p("AgMAUQgFAAAFgbIATgJIAJgEIgCAIQgCANAAAIIAAAFQgGAHgLAAIgHgBg");
	this.shape_138.setTransform(48.3,78.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgRAfQgDgBgDgFQgGgGAHgcIAWgKIAagLQgEAEgEATIgCAaIAAABIgBABQgHAKgQAAIgJAAg");
	this.shape_139.setTransform(48.6,78);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BAC691").s().p("AgRAYQACgbAFgOQANgGAPgEIAAACQgEAQgBAhQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgEACgGAAQgGAAgMgEg");
	this.shape_140.setTransform(53.1,77.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgFAkIgSgEIgDgBIAAgDQADgfAGgSQAVgKAWgFIgBANQgEAQgCAgQAAAGgEACQgGAEgIAAIgGgBg");
	this.shape_141.setTransform(53.2,77);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#2F3A01").s().p("AgkA1QgpgDgEgEQgHgMgGgfQgFgegCgXIAOgCQAMA9A4AOQA3APBDgHIgHACQhSAUgpAAIgJAAg");
	this.shape_142.setTransform(43.9,85.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3E4F00").s().p("AhYBTQgrgDgDgEQgHgMgGgfQgFgfgCgVQAfgEAdgLQAdgLAKgGIAKAQIADgBQAUgHAWgKQAkgTAkgIQAjgIAaAaQAbAdgFAXQgGAohqAhQhPAUgqAAIgKAAg");
	this.shape_143.setTransform(49.1,82.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AhaBeQgugDgCgDIgBgBIAAgBQgKgRgGgrQgGgpgBgMIAAgEIAEAAQAjgDAggNQAggOADgCIADgCIALARQATgHAUgJQAkgTAngIQAmgIAcAbQAfAhgHAaQgIAnhtAoQhRAcgtAAIgJAAg");
	this.shape_144.setTransform(49.1,82.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C9AA73").s().p("Ah5CeIgFgBQAjg+gFgfQgDgggDAAQAZg1AigoIAzg/QAJgIAmgKQAngLAdgEIAAAAQABANADAHQgUAAglAGQgkAGgRALQgSARgmA0IgtA7IgBACIABACQAIAaAAAYQgDA2gZAbQgJAJgIAAIAAAAg");
	this.shape_145.setTransform(-17.8,33.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D8BA7D").s().p("AiACwQgOgOgDgQIgBgFIgFADQgUAQgPgDQgKgCgGgLQgEgKABgTQACgTAHgPQAHgJAQADQAQADACACIAFACIAAgGIAAgDQAFgnAigNQAjgNAFAAIABAAIABgBIAqgqIA/hGQAfgjAFgJQAGgFAngIQAngIAygGQgJAOAAAOQABANADAHQgUAAglAGQglAGgRAKQgTASgmAzIgsA8IgBABIABACQAJAagBAYQgCA2gZAcQgJAJgJAAQgQgGgBgFIgCgCIgDABIgQAIQgPAIgRAGIgFAAIgFgBg");
	this.shape_146.setTransform(-25.2,32.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AiFC1QgPgPgDgSQgVAQgRgBQgOgDgHgOQgGgMACgVQACgVAHgPQAIgLAPABQAPACAKAEQAFgpAegQQAggQARABIBWheQAtgxAGgLQAJgKAzgHIBXgMIAFACQgQASACAQQADARACACIADAGIgHgBQgNgBgnAEQgpADgSAKQgSAQgkAzIgsBAQAHAaAAAYQgBA5gbAeQgMALgMAAQgPgFgEgJQgQAKghANIgGABQgFAAgDgCg");
	this.shape_147.setTransform(-24.9,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:12.6,y:16.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:19.3,y:-17.6}},{t:this.shape_20,p:{x:19.4,y:-17.7}},{t:this.shape_19,p:{x:-1,y:-17.6}},{t:this.shape_18,p:{x:55.9,y:-23}},{t:this.shape_17,p:{x:55.9,y:-23}},{t:this.shape_16},{t:this.shape_15,p:{x:31.3,y:-30.2}},{t:this.shape_14,p:{x:39.7,y:-30.6}},{t:this.shape_13,p:{x:39.9,y:-30.7}},{t:this.shape_12,p:{x:6.6,y:-45}},{t:this.shape_11,p:{x:6.1,y:-44.6}},{t:this.shape_10,p:{x:6.7,y:-45}},{t:this.shape_9,p:{x:8.1,y:-52.1}},{t:this.shape_8,p:{x:26.9,y:-54.1}},{t:this.shape_7,p:{x:26.9,y:-54.2}},{t:this.shape_6,p:{x:-19.4,y:-14.8}},{t:this.shape_5,p:{x:-19.5,y:-14.8}},{t:this.shape_4},{t:this.shape_3,p:{x:35,y:0.9}},{t:this.shape_2,p:{x:44,y:-2}},{t:this.shape_1,p:{x:32.8,y:-7.3}},{t:this.shape,p:{x:45.7,y:-9.4}}]}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:18.6,y:12.3}},{t:this.shape_25,p:{x:18.5,y:12}},{t:this.shape_60,p:{x:-32.5,y:-40.8}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_21,p:{x:25.2,y:-22.3}},{t:this.shape_20,p:{x:25.3,y:-22.4}},{t:this.shape_19,p:{x:4.9,y:-22.4}},{t:this.shape_18,p:{x:61.8,y:-27.8}},{t:this.shape_17,p:{x:61.8,y:-27.8}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_12,p:{x:12.5,y:-49.7}},{t:this.shape_11,p:{x:12,y:-49.3}},{t:this.shape_10,p:{x:12.6,y:-49.8}},{t:this.shape_53},{t:this.shape_8,p:{x:32.8,y:-58.8}},{t:this.shape_7,p:{x:32.8,y:-59}},{t:this.shape_6,p:{x:-13.5,y:-19.5}},{t:this.shape_5,p:{x:-13.6,y:-19.5}},{t:this.shape_52},{t:this.shape_3,p:{x:40.9,y:-3.9}},{t:this.shape_51},{t:this.shape_1,p:{x:38.7,y:-12}},{t:this.shape,p:{x:51.6,y:-14.1}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:12.6,y:16.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:19.3,y:-17.6}},{t:this.shape_20,p:{x:19.4,y:-17.7}},{t:this.shape_19,p:{x:-1,y:-17.6}},{t:this.shape_18,p:{x:55.9,y:-23}},{t:this.shape_17,p:{x:55.9,y:-23}},{t:this.shape_16},{t:this.shape_15,p:{x:31.3,y:-30.2}},{t:this.shape_14,p:{x:39.7,y:-30.6}},{t:this.shape_13,p:{x:39.9,y:-30.7}},{t:this.shape_12,p:{x:6.6,y:-45}},{t:this.shape_11,p:{x:6.1,y:-44.6}},{t:this.shape_10,p:{x:6.7,y:-45}},{t:this.shape_9,p:{x:8.1,y:-52.1}},{t:this.shape_8,p:{x:26.9,y:-54.1}},{t:this.shape_7,p:{x:26.9,y:-54.2}},{t:this.shape_6,p:{x:-19.4,y:-14.8}},{t:this.shape_5,p:{x:-19.5,y:-14.8}},{t:this.shape_4},{t:this.shape_3,p:{x:35,y:0.9}},{t:this.shape_2,p:{x:44,y:-2}},{t:this.shape_1,p:{x:32.8,y:-7.3}},{t:this.shape,p:{x:45.7,y:-9.4}}]},2).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_61,p:{x:24.3,y:14.1}},{t:this.shape_25,p:{x:24.2,y:13.9}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_60,p:{x:-26.7,y:-38.9}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_21,p:{x:31,y:-20.5}},{t:this.shape_20,p:{x:31.1,y:-20.6}},{t:this.shape_19,p:{x:10.7,y:-20.5}},{t:this.shape_18,p:{x:67.6,y:-25.9}},{t:this.shape_17,p:{x:67.6,y:-25.9}},{t:this.shape_105},{t:this.shape_15,p:{x:43,y:-33.1}},{t:this.shape_14,p:{x:51.4,y:-33.4}},{t:this.shape_13,p:{x:51.6,y:-33.6}},{t:this.shape_12,p:{x:18.3,y:-47.9}},{t:this.shape_104},{t:this.shape_10,p:{x:18.3,y:-47.9}},{t:this.shape_9,p:{x:19.8,y:-55}},{t:this.shape_8,p:{x:38.5,y:-57}},{t:this.shape_7,p:{x:38.6,y:-57.2}},{t:this.shape_6,p:{x:-7.7,y:-17.7}},{t:this.shape_5,p:{x:-7.8,y:-17.7}},{t:this.shape_103},{t:this.shape_3,p:{x:46.7,y:-2.1}},{t:this.shape_2,p:{x:55.7,y:-4.9}},{t:this.shape_1,p:{x:44.5,y:-10.2}},{t:this.shape,p:{x:57.4,y:-12.3}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-82,115.6,176.9);


// stage content:
(lib.runCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.run();
	this.instance.setTransform(81.4,100.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(133.3,118.9,115.6,176.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;