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



(lib.boat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("AjFBXIgXAAIgMgSIgLgQIgJAPIgLASIgRgCIgRgBIgJgSIgIgPIgLANIgNAQIgXgDIgXgDIgIgTIgHgRIgMAOIgOAOQgkgIgLgFIAFgbIAFgZIAEgBQAGACBiARQBjAQCegIQCbgJC3hGQAPACBNgEQBOgEA+gcQgJAvgEAKQggANgfAIIgJgOIgIgLIgKAQIgLASIgoAEIgMgPIgKgPIgJAQIgKAPQgigCgBgCIgBAAIgSAIIgWAJIgJgNIgIgJIgLARIgNAVIgSAGIgUAGIgKgOIgIgMIgLARIgLATIgUAFIgVAFIgMgRIgKgOIgLASIgKAUIgXAEIgYADIgLgRIgKgOIgKAQIgMATIgUABIgUACIgNgSIgKgQIgKARIgKASIgXgBg");
	this.shape.setTransform(-39.4,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243151").s().p("AAEAdIgNgVQgMgNgMgIQABgEAKgHQAOgHAIAFIAAAAQACAAANAJQANAJAGAXQAAAOgcAAIgCAAg");
	this.shape_1.setTransform(-49,-16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243151").s().p("AAIAfQgdgugRACQAGgNANgDQANgCAEAAQAZAMAIAPQAIANAAAEQgCAJgHAFQgKAFgHAAIgFgBg");
	this.shape_2.setTransform(-38.7,-21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243151").s().p("AAPAbQgggpgRAGQANgSALgBQAcAHAIANQAJALAAACIAAAEQAAAMgGAEIgJACQgDAAgCgBg");
	this.shape_3.setTransform(-30.5,-27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243151").s().p("AgcALQgDgFgBgLQAAgGAEgEIAXAAIAdgBQAEgBAEAHQADAQgGAIQgIADgLAAQgPAAgXgGg");
	this.shape_4.setTransform(-29.2,-38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243151").s().p("AgcAQQgHgIgBgLIAAgCQABgDACgDIAagCIAggEQAHgBADAIQAFAQgFAHQgPAFgUAAQgNAAgPgCg");
	this.shape_5.setTransform(-29.7,-47.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243151").s().p("AgeAQQgHgIgCgLIAAgCQABgDADgCIAbgDIAigDQAIgBAEAIQAEAQgFAGQgPAFgWAAQgNAAgRgCg");
	this.shape_6.setTransform(-30.7,-55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243151").s().p("AgBApIgzgBQgGgRAAgXQABgdACgLIA3ABIA1AAQAGAOAAAPQgEAlgHAPIgxgBg");
	this.shape_7.setTransform(-3.9,-65.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjgBhIgTgdIgPAZIgBACIgrgDIgOgbIgSAXIgBACIg3gIIgEgLIgIgSIgUAXIgDAAQgwgNgEgEIgDgBIALg9IALgCIABAAIABAAQAFAEBhAOQBiASCdgJQCbgIC2hGIABgBIABAAQAJACBTgEQBSgEA9geIAGgDIgBAHQgLA9gEAEIgBABIgBABQghAOgiAIIgCAAIgPgSIgQAZIgCABQgWADgWACIgCAAIgSgXIgQAYIgCAAQgggBgEgCIgXAJIgVAKIgOgUIgMASIgIANIAAACIguAOIgOgVIgLARIgGALIgBABIgxALIgSgaIgLASIgIAOIAAABIg0AHIgSgaIgSAcIAAABIgwAEIgTgbIgQAZIgBACg");
	this.shape_8.setTransform(-39.3,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B6589").s().p("AhBA+QAYg+AtgkQAvgmATgIQAOBZgQA2QgpANgwAEIg3AFg");
	this.shape_9.setTransform(1,-11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#243151").s().p("AgPAtQgFgRAAgSQACgmAEgNQAfgGAEAGQgKAbABAhIAAAag");
	this.shape_10.setTransform(-18.2,-36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAzIgBgCQgKggAFgcQAEgfACgDIABgCIACgBQAvgGgDAJIACACIgCACQgIAUgBAgQAAAhACAEIAAADg");
	this.shape_11.setTransform(-18.1,-36.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424F75").s().p("Ah0AjQgIgHANg1IA1AAQAxgBAwgDQAygCAHgIQAHgHAQAOQAEANgMAZQgLAbgSAGQgXAEhAAAIgHAAQg9AAgrgIg");
	this.shape_12.setTransform(-7.5,-37.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah2ApIgCgBIgCgCQgKgLAPg4IABgEIAFAAQBIABA6gDQA9gDALgGIABgBIACgBQAQgJAPATQAGAVgQAcQgIAWgYAKQgYAEhAAAQhDAAgugIg");
	this.shape_13.setTransform(-7.5,-37.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag4AuIgBgCQgJgZACgcQACgfABgFIABgCIB2ABIABACQALAegHAcQgHAcgCAEIgBADg");
	this.shape_14.setTransform(-3.9,-65.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424F75").s().p("AhWBcQgZgFgJgEQgFgJAIgtQAJgrAHgVQAHgQATgCQATgCADABQA1gCA1gRQA4gSAEgDQANAegEARQgEARgCAAQgdAJhHgBQhFAAgJgBQgNAPAJAsIAJA5QgCACgGAAQgHAAgOgDg");
	this.shape_15.setTransform(-3.5,-61.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhbBjQgYgFgJgEQgKgPAMg1QALgzADgIQAJgTAUgDQAVgDAFACQA0gCA0gRQA2gRAFgDIAGgDIADAGQAOAggEATQgFASgCABIgBACIgBABQgbAJhAAAQg/AAgZgCQgEAFAAALQADAqAHAdIADAWIAAADQAAADgFADIgJABQgLAAgQgEg");
	this.shape_16.setTransform(-3.5,-61.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAAiIAAAAIAAgBIgNgTQgMgOgNgJQgCgBAAgEQACgJALgGQASgKAKAGQADgBAPALQAPAKAHAbIAAABIAAABQAAACgJALQgGAHgMAAQgGAAgIgCg");
	this.shape_17.setTransform(-49,-16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAGAlIgCAAIAAgBQgPgfgPgGQgPgHgBACIgEAAIABgEQAPggAeAFIAAAAQAfAOAIASQAJAPgBADIAAABQgDANgKAGQgPAGgHAAQgEAAgCgCg");
	this.shape_18.setTransform(-38.8,-21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAMAhIgBgBIAAgBQgRgcgPgDQgOgDgCACIgFABIABgFQADgPANgHQANgHACAAIABAAQAgAHAKAQQALANgBADQABAUgKAHQgJADgGAAQgFAAgCgCg");
	this.shape_19.setTransform(-30.6,-27.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfASIgBAAIgBgCQgCgCgDgOQgEgMALgJIABAAIABAAIAVAAIAggBQANgBADARQACATgKAIQgJACgMAAQgQAAgagFg");
	this.shape_20.setTransform(-29.2,-38.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfAWIgCAAIgBgBQgGgFgDgWQABgHAFgDIABgBIABAAIAXgCIAkgEQAPgCAEASQAEASgKAIQgNAFgXAAQgNAAgTgCg");
	this.shape_21.setTransform(-29.7,-47.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghAWIgCAAIAAgBQgHgFgEgWQABgHAGgEIABAAIABAAIAYgCIAmgEQAQgCAFATQADASgKAHQgOAFgZAAQgNAAgUgCg");
	this.shape_22.setTransform(-30.6,-55.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#243151").s().p("AgiATQgIgHgDgMIAAAAQAAgEADgCIAegFIAogHQALgCAFALQAEAPgEAEQgbAJgqAAIgJAAg");
	this.shape_23.setTransform(-31.8,-65.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgjAaIgBAAIgBgBQgCAAgHgGQgHgGABgOQABgHAGgFIABAAIABAAIAbgEIArgIQATgDAGAVQAEARgJAHQgYAJg0AAIgGAAg");
	this.shape_24.setTransform(-31.8,-65.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424F75").s().p("AiGFLIgPgRQgQgQgYgRQAygBBEgjQBEgjAygjIA3gnQAMhfgVh6QgVh8gYhaQAIgHAkgSQAjgSATALQALASALBxQALBwAHBwQAGBxgDAVQgIATg5AsQg5ArhHAjQg8AdgxAAIgVgBg");
	this.shape_25.setTransform(-42.3,-43.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AiGFOIgBAAIgBgBIgQgRQgPgQgXgQIgLgHIANABQBLgGBig9QBgg9ASgQQAFgdAAgjQgChagThlQgThlgThIIgBgCIACgCQAOgKAjgRQAjgRATANQALATAOBzQANBzAJByQAIB0gDAVQgIATg7AqQg8ArhKAhQg+AcgyAAQgLAAgLgCg");
	this.shape_26.setTransform(-42.3,-43.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000F56").s().p("AjgHuIgVgfIgSAeIgmgDIgQgeIgVAbIgygHIgOggIgXAZQgygNgDgCIALg7IANgDQAThhAzghQAzghAuABQAuAAADADQAtALBIgjQBJgjA5goQA6goAEgDQALhcgTh2QgUh4gYhaIgYhgQADgIAmgpQAogoAwAbQApAfBFAXQBGAWA5ANIA8AMQARDEgSB6QgSB5gEADQBaBqgKBkQgJBlgJAHQgjAPgfAIIgQgXIgTAfQgYAEgUACIgUgcIgRAdQglgCgBgCQgUAKgVAJIgQgXIgWAlIgqANIgQgYIgUAiIgtAKIgUgdIgTAkIgyAGIgUgcIgUAgIgsADIgVgeIgTAfIgRAAIgggBg");
	this.shape_27.setTransform(-39.2,-39.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AjoH9IgSgZIgMAUIgCAEIgwgDIgNgZIgOATIgDADIg7gIIgLgaIgUAVIgDgBQgzgNgEgEIgFgCIAMhFIAOgEQAQhcA+gqQA0ggAuABQAuAAAFADIABAAIAAAAQApAKBEgfQBEgfA6gnQA5gmAPgMQAFgdAAgiQgChcgUhoQgUhpgUhKIgUhPIgBgDIACgDQACgGAZgfQAcgeAngKQAagEAVARQApAeBGAXQBGAWA6ANIA+ANIAFABIABAFQAIBTAABJQgBB5gNBOQgMBLgFARQBYBpgHBlQgKBrgJAJIgBADIgDABQgiAPgjAJIgEABIgNgSIgPAZIgDAAQgYAFgWABIgEABIgQgYIgPAZIgEAAQgegCgHgCIgZALIgVAJIgNgTIgRAcIgBACIgyAQIgOgTIgPAZIgBACIg2AMIgQgYIgRAbIgBADIg5AIIgRgYIgOAXIgCAEIg1ADIgRgZIgOAWIgCADg");
	this.shape_28.setTransform(-38.9,-39.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#840000").s().p("AAABJIgSiSIAlAGIgJCMg");
	this.shape_29.setTransform(44.9,-1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C60000").s().p("ACVHIQhQAAgpglQgcgogLgeQgLgfgegHIhOgRIAAgDIgsgGIAAABQgKgGgJgfQgIgfAZhBQACAAgFgzQgFg0gkhiQgZhFgGhUQgHhUACg+QACg+ABgDQAEgHBKgaQBKgaBeAsIgJB4QgJBwgEB5QgEB3AMAhIAsBeQArBVArA5QBKBhBHAOQAJAGgOASQgTAHhIAAIgJAAg");
	this.shape_30.setTransform(60.2,-38.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbG4QgbgkgLgcQgNgmgcgGIhKgPIgFBQIgFBIIgfAAIgFgqIgKhPIgGgsQgTgJgHg5QAAgkAUgsIAAgIQACgSgGg2QgGg2gghLQgbg9gJhLQgIhKAAhBQAChXABgIIABgEIACgCQAFgJBUgcQBTgdBoAvIAGAEIgBAGIgOC+QgJBugDBaQgDBZAKAXIAXA0QAZAwAhA7QAhA6AcAjQAsA0AeAUQAfAUAiAFIAFABIACAEQAGAFgCAUQgBAIgNAHQgXAKhUAFIgUABQhGAAgqgkg");
	this.shape_31.setTransform(60.5,-38.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AiKA9QhxgHhrgsIgBgBIgBgCQgBgCAAgOQAAgQANgOIABgCIACABQAjAQCGAUQCHATDMgdIADgFIAAAFQBagPBjghIAEgBIAAAEQAFAvgFAWIAAACIgCAAIhWAUQhIAQgdgBIgDgBIgCgSIgDgcIgRAdIgMATIgBABQgFAChOAIQgqAFgzAAQgsAAgygDgAligEIAAAIQBnAqBrAIQBrAHBLgHQBOgIANgDIAOgYIAQgZQjIAbiFgUQiGgSglgQQgKAOABAPgACngIIADAWIADAaQAeAABBgOIBVgUQACgIAAgRQAAgPgCgVQhiAghYAPg");
	this.shape_32.setTransform(-7,83.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#601B03").s().p("AiJA6QhwgHhsgtQAAgBAAgNQAAgQALgNQAuAWC9ASQC7AUEYhSQAFApgFAbIhTASQhIARgegBIgHg0IghA2QgDAChNAJQgsAEg1AAQgqAAgxgCg");
	this.shape_33.setTransform(-6.9,83.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHAoQgQgXgUgSIgDgDIA9glIACACQAPAXAOAZIABADIg0AegAgKgSIgaAPQASARAOAUIAVgMIAVgNQgMgVgNgVIgXAPg");
	this.shape_34.setTransform(10.7,76.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgpgDIA2giQAPAVAOAaIgvAcQgOgUgWgVg");
	this.shape_35.setTransform(10.8,76.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AglAMIA+gmIAOATIg9AigAAAgBIgbAOIAGAGIAYgOIAagOIgGgIIgXAQg");
	this.shape_36.setTransform(8.8,73.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AghAMIA5giIAJAOIg2AfIgMgLg");
	this.shape_37.setTransform(8.8,73.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#513200").s().p("AigF0QhwgHhsgsQgCgDACgWQABgWAdgJQAfgEBogYQBogYBchBIACABQBUAzAzA5QAyA4ACAGIABACIA2gLIgBgDQgziOhAgpQhBgpgHAFIgBgBQAMgTAIgVQACgEgChnQgDhpgjifIAAAAQA5gbBqgSQBqgTBdA1IACACQACBcgLCNQgMCLgsB6QACAGAKA5QAJA6gGApIhSATQhJAQgegBIgHg2IggA5QgDABhOAJQgqAFg2AAQgqAAgxgDg");
	this.shape_38.setTransform(-4.6,52.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#601B03").s().p("AASAlQgrg2hYgpQAZgUAQgWIAJgIQAOAAA2AqQA5ArA0B8IgWAEIgVAEQgGgQgvg4g");
	this.shape_39.setTransform(5.7,72.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABFByQgCgGgzg4Qgwg3hWgzIgGgCIAFgDQAagWATgXIAKgKIABgCIABABQAHgEA+AoQBBApAzCMIACADIg3ALgAhGhlQgRAXgYAVQBXApAsA1QAuA4AHAQIAVgEIAWgEQg1h8g4gqQg3grgOgBIgIAIg");
	this.shape_40.setTransform(5.5,72.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#601B03").s().p("Ai6AAQARgPBmgeQBjgdCZA5IACA+QhegxhlAQQhoARg6AbIgQg4g");
	this.shape_41.setTransform(14.6,13.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AiiGbQhwgHhrgsIgCgBIAAgBQgBgCAAgMQgBgOAIgPQAJgNASgEIASgDQAsgGBRgVQBQgUBMgsQBKgsAehOIABgvQABg3gLhmQgLhngih/IgBgCIACgCQAAgDAzgXQAygXBWgHQBWgIBsAtIACABIAAABQABAHACBeQABBggNCDQgNCCgoBxQACAJAHApQAHAoABApQAAASgCANIgBACIgCAAQgNAEhIAQQhIAQgegBIgCAAIgCgTIgEgcIgQAdIgMAUIgBAAQgFAChOAJQgpAEg1AAQgrAAgzgDgAB7mOQhnAegQARQAkB+ALBnQALBmgBA3IgBAwIgBABIAAAAQgkBniWA9Qg+AYg3AMQg4AMgfAFIgSADQgPADgHAMQgHANAAAMIABALQBmAqBrAHQBrAIBMgIQBOgHANgEIATghIARgeIAEAcIAEAhQAdgBBBgOIBWgTQACgMAAgPQgBgrgIgqIgJgvIAAgBIAAgBQAphwAMiBQANiDgBhfQgBhTgBgQQhlgmhPAAQgoAAgiAKg");
	this.shape_42.setTransform(-4.6,48.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AirGiQhzgHhvgtIgDgBIgBgEQgBgBAAgOQgBgOAJgQQAKgPAUgEIATgDQFWg4A3icIABguQABg3gLhoQgMhngjiAIgCgDIADgDQACgEAygXQA1gYBagIQBbgHByAtQADgBABALIACA3IAAAsQAAAtgCA6QgDBSgPBiQgOBkghBYIAKA0QAHApABAoQAAASgDAOIgBADIgEABQgUAGhIAPQhJAPgegBIgFAAIgFgoIgZAqIgDAAQgJADhRAJQgpAEg0AAQgvAAg2gDg");
	this.shape_43.setTransform(-5.4,48.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeATQAcgfALgGQAKgCALAKIABAIIgBADQgCAEgGABIgYAHIgaAGIgCAAg");
	this.shape_44.setTransform(30.7,68.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgnAXIADgEQAZgeAUgNQAMgEAQANIABABIAAABQAEAMgEAFQgDAHgJACIgyANg");
	this.shape_45.setTransform(30.4,68.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#601B03").s().p("AgkAXIgBgDQgCgHAXgWIAAAAQANgPARgGQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAQARAEATIgBAEQgBAFgIABIgZAHIgYAGQgJAAgGgIg");
	this.shape_46.setTransform(30,67.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgqAZQgGgOAbgYIAOgNQAKgKALgBQAGAAADAEQAFAFAJAPQAJANgDAOQgCAIgLADIgyANIgBAAIgCAAQgHAAgMgNg");
	this.shape_47.setTransform(30,67.5);

	this.addChild(this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.5,-90.4,177.1,181);


// stage content:
(lib.bootsCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boat();
	this.instance.setTransform(100,100,1.077,1.077);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;