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



(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAAQAAgNANgBQANABABANQgBANgNACQgNgCAAgNg");
	this.shape.setTransform(-5.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAAQACgNAMgBQANABABANQgBANgNACQgMgCgCgNg");
	this.shape_1.setTransform(14.7,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-1.5,23.5,3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3E24F").ss(0.3,1,1).p("AgkAJIgDAAAgkAJIBJgRIADAIg");
	this.shape.setTransform(4.9,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E3E24F").ss(0.3,1,1).p("AgZAdIAsg8IAJAFIg1A3IgCAD");
	this.shape_1.setTransform(3,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E3E24F").ss(0.3,1,1).p("AAWAgIgtg7IAHgHIAmBCIACAD");
	this.shape_2.setTransform(-6.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E3E24F").ss(0.3,1,1).p("AgIAkIAIhLIAKAAIgSBLIgBAE");
	this.shape_3.setTransform(-1.4,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-5.9,19.9,11.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAAQACgMAMgBQANABACAMQgCANgNACQgMgCgCgNg");
	this.shape.setTransform(-12.5,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAAQABgNANAAQANAAACANQgCANgNABQgNgBgBgNg");
	this.shape_1.setTransform(18.8,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AhBB/QAKgBAKgFQAxgWAehCQAWgzgHgsQgHgsgggQQgHgDgGgBQAOgCAOAGQAgAQAHAsQAHAsgWAzQgeBCgxAWQgOAGgOAAIgHAAg");
	this.shape_2.setTransform(-5.4,-10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAEA").s().p("AgDB2QAFgBAHgDQAegOAGgpQAHgqgVgvQgcg+gugVQgJgDgIgBQAPgCARAGQAuAVAcA+QAVAvgHAqQgGApgfAOQgKAFgMAAIgEgBg");
	this.shape_3.setTransform(18.9,-10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0B7QgggQgHgsQgHgsAWgzQAehCAxgXQAcgKAWAJQAgAQAHAsQAHAsgWAzQgeBCgxAXQgPAFgNAAQgLAAgLgEg");
	this.shape_4.setTransform(-8.2,-10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBnQgigXgWgxQgUgvAGgpQAHgqAegOQAVgJAZAKQAuAUAcA/QAUAvgHApQgGApgeAPQgLAEgKAAQgWAAgVgQg");
	this.shape_5.setTransform(16.4,-10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRBuQglgZgYgzQgVgyAIgsQAHgtAhgPQAYgKAbALQAxAVAeBCQAVAxgHAtQgIAsghAPQgMAFgMAAQgXAAgWgQg");
	this.shape_6.setTransform(16.4,-10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag3CBQgjgQgIgvQgIgvAXg2QAfhGA0gXQAegLAZAKQAjARAJAvQAHAvgWA2QggBFg0AYQgPAGgOAAQgNAAgNgGg");
	this.shape_7.setTransform(-8.2,-10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDEDED").s().p("AgLADQALgDANgJQgMALgNAIIABgHg");
	this.shape_8.setTransform(7.9,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDEDED").s().p("AgOAAQAOgCAQgFIAAAHQgQAGgPACIABgIg");
	this.shape_9.setTransform(4.5,24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDEDED").s().p("AgOAEIAAgHIAdgBIAAAIIgMABIgRgBg");
	this.shape_10.setTransform(1.1,24.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDEDED").s().p("AgLABIgDgGIAdAEIAAAHQgOgCgMgDg");
	this.shape_11.setTransform(-2.4,24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EDEDED").s().p("AgGAHIgCgOIAQACIAAANIgOgBg");
	this.shape_12.setTransform(-3.6,21.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDEDED").s().p("AgNAHIAAgNIAbAAIAAANIgOAAIgNAAg");
	this.shape_13.setTransform(-1,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EDEDED").s().p("AgPgFIAegCIABAJQgQAFgPABIAAgNg");
	this.shape_14.setTransform(2.5,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDEDED").s().p("AgOAAQAOgDAPgFIAAAEQgOAIgOAFIgBgJg");
	this.shape_15.setTransform(6,20.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNgCQANgGAOgKQgCAMgDAGQgFAKgQAIIgBgUg");
	this.shape_16.setTransform(7.9,24);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPgIQAPgBAPgGQAAAKABAMIgKADQgGADgOADIgBgYg");
	this.shape_17.setTransform(4.5,25.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAKQgCgKABgLIAcAAQAAAJABAOIgJAAQgIAAgLgCg");
	this.shape_18.setTransform(1.1,25.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAEQgIgEgEgMIAeAFQgBAHACANQgLgDgIgGg");
	this.shape_19.setTransform(-2.4,25.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFALQgCgNgBgLIAQACQgBAKACAPIgOgDg");
	this.shape_20.setTransform(-3.6,21.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAMIAAgZIAaAAQgBAKACARQgPAAgMgCg");
	this.shape_21.setTransform(-0.9,22.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPgMIAdgCQACAPAAALQgQADgPAAIAAgbg");
	this.shape_22.setTransform(2.5,22);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOgIQAOgDAPgFQgBALABAMQgOAIgNADQAAgMgCgOg");
	this.shape_23.setTransform(6,21.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHgIIAOgHIABANIgBAIIAAAAIgNAKIgBgYg");
	this.shape_24.setTransform(8.7,20.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag4AlQgOgMgEgXQgDgWABgEIAAgEIAEAAQAFADAxABQAvABAqgWIAFgEIAAAGQABADAAAVQAAATgHARQgJAQggALQgMAFgWABIgFAAQgWAAgYgNg");
	this.shape_25.setTransform(2.5,22.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6B4226").s().p("AgEAXQgEglgBgDQgcAJgDgDQAJgTAFgXIAEgZQAGgIAMAFQAJAEAKgBQAHgDgCgHIgDgHQAOAOgBAEQAQA8gIAnQgIApgCABQgFghgGACQgCAYgMATQgKATgBABQAIgjgEgmg");
	this.shape_26.setTransform(38.7,-8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6B4226").s().p("AAFCdIgCgZQgDgXgKgNQgPgNgZgJQgZgKgXAEQAAgDARgdQAQgeAggVIgPAIQgOAHgNALQgBgEAYgjQAYglAxgfIgdgGQgbgGgZAAQACgEAvgXQAugXBAABIgOAbQgMAZgHAUIAKgLIATgUIgIAUIgQAqQAFgGANgJIgMAbQgLAYgCASQACAUAJAcIAMAfIgJgPIgOgbIADAcQADAZAIAZIgTAPQgSAOgKAOg");
	this.shape_27.setTransform(-31.7,-13.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAaQgBgBAEgUQAGgSAXgWQADgBANAGQAOAHgBATQgBgBgOAGQgOAIgHAaQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgGAAgPgKg");
	this.shape_28.setTransform(-11.2,-28.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAGAjQgIgagNgIQgOgGgBABQgBgTAOgHQANgGACABQAYAWAFASQAFAUgBABQgPAKgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_29.setTransform(20.3,-27.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DDB99E").s().p("AgcAqQAFgEANgIQALgIAKgLQAJgLAGgPQAFgPgLgTQACAAAGALQAHALgGAVQgIAUgTARQgQARgIACQgNAAAHgIg");
	this.shape_30.setTransform(3.2,9.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DDB99E").s().p("AiCFJQgCgdgCgEQCWgsAug5QAug6gHgwQgHgwgGgRQAAgYAKggQAKghAAgZQgDgVgTALQgSALgDADIAIgzQAJguAEgpQgCglglgWQglgVgGgBIAKANQgngMgogXQgpgWgdgVQAsAOAwARIAzATIADgGQgMgMgHgMIBOA/IBBAwQgIASgMAkIgOAuIgDAHIAHgCQAegFATAAQABAMgGAmQgFAogVAyIgBABIABACIAMAnQALAkABAsQAAAVgFASQgNAcgvAgQgwAeg3AYQg6AXgrAHQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIAAACQAAAAABABQAAABAAAAQABAAABABQAAAAABAAIADgBQABASgDAUQgIAPgZAFQAagOgDgcg");
	this.shape_31.setTransform(20.8,7.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAXANQgCgDgSgKQgOgEgFAGQgEAHABACQgDACgDgCQgCgCACgDQABgDASgHQgJgEgJACQgDABgBgEQgBgDADgBQATgDAQALQARAKACADQACACgCADIgCACIgDgCg");
	this.shape_32.setTransform(-29.8,10.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbAOQgCgDACgDQACgCARgKQAPgMAUADQADABgBAEQgBADgDgBQgJgCgJAEQASAHABADQACADgCACQgDADgDgDQABgBgEgIQgFgFgOADQgSALgCADIgDABIgCgBg");
	this.shape_33.setTransform(39.5,10.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAWAxIgsgCQgZgDgGgUQgFgTABgPIAAgCQABgUANgLQANgKAXAHQAZALATAcQATAaABAFQACAEgDABQgDACgCgDQgBgEgTgaQgSgbgWgKQgTgGgLAIQgKAIAAARIAAACQgGApAhAJQAXACAVAAIAWAAQAEABAAADQAAADgEABIgWgBg");
	this.shape_34.setTransform(-29.4,9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFCCAF").s().p("AAWAuIgsgCQgXgEgEgTQgFgTABgOQAAgPAKgLQAKgLAZAGQAYALATAcQATAbAAADIgJAUIgHAAIgQAAg");
	this.shape_35.setTransform(-29.4,9.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgvAuQAAgDAEgBIAWAAQAVAAAWgCQAigJgGgpIAAgCQAAgRgKgIQgLgIgTAGQgWAKgTAbIgTAeQgCADgDgCQgDgBABgEQACgFATgaQATgcAZgLQAWgHAOAKQANALAAAUIAAACQACAPgGATQgFAUgZADIgsACIgWABQgEgBAAgDg");
	this.shape_36.setTransform(39,9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DDB99E").s().p("AgrAuIgKgUQAAgDATgbQATgcAYgLQAZgGAKALQAKALAAAPQABAOgEATQgFATgXAEIgsACIgQAAIgGAAg");
	this.shape_37.setTransform(38.9,9.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6B4226").s().p("ADuBwIg5gwQgkgggdgMIAAANQgEgDg8gYQg7gXhEgIQgCACADAXQADAVAZAhQgEABgugJQgvgIgggdQgFACgxAeQgwAdgkAoIAKgXQAKgWAUgcQgCgCgXAWIAIgRQAIgQANgUIgdAQIAQgYQABgGBOgwQBPgwCYgOIgWAKIglARIAsgIQAugHA+AHQA9AGAzAlQgCgBgUgBQgWAAgbAMQAGgCA5AiQA4AgAhBeQgGgBgtgKQADAFAWANQgCACgPACIgFAAQgNAAgPgJg");
	this.shape_38.setTransform(9.8,-30);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAFBaQgBgDACgCQAJgGADgHQgEgGgHgBIgGgDIAFgDQBBgtgRglQgIgWgagBQgeAEgWAYQgXAXgBAEQgCADgDgCQgDgCACgDQACgFAWgWQAWgZAfgGIgCghQABgEADAAQADAAABADIACAiQAdADAJAZQADAGAAAIQgCAigvAmQAFAEACAHIAAACQAAAIgLAJIgDAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_39.setTransform(0.7,7.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFCCAF").s().p("AguFoQgKglAFgHIABAAQAEAAAAgEQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBABgpgIQgqgIhVgcQg9gXgTguQgUgtACgoQACgpACgDIACgsIADgrQALgYAfgbQAfgbAEgCIADgCIgCgDQgSgjgLghIgNgqQAmg2AuggQAughANgFQA3AbA4AGQA3AGAHgBIALAAIgIgGQgwgugDgXQATAEApAOIBMAaIAmAOIADgGQgOgMgHgMIBQA+IBBAyQgIARgMAkIgOAvIgDAGIAHgCQAegFATAAQABAMgGAnQgFAmgVAzIgBABIABACIAMAnQALAkABAsQABAVgGARQgNAdgvAfQgwAgg5AXQg6AYgrAGQAAABgBAAQgBAAAAABQAAAAgBABQAAABAAAAQAAABABABQAAABABAAQAAAAABAAQAAABABgBIADAAQABASgEATQgKAVgfACIgEAAQggAAgJgQg");
	this.shape_40.setTransform(4.5,7.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgyFqQgLglAFgMQgcABiFgqQhCgZgXgvQgXgvACgpQACgrACgDIAMhZIAAAAQAJgXAcgZQAcgZAMgJQgTgngLgiIgMglIAAgCIABgBQAqg8AygjQAzgiAFgBIACAAIACAAQAqAXAxAIQAuAIAYAAQgcgbgKgVQgKgVABgDIgCgFIAFABQATADA3ASQA3ATAkANQgTgZgBgFIAGgEQAKAJAnAdIBKA5IAnAeIADACIgCADQgFAJgKAfIgSA3QAQgDAQAAIARgBIADAAIABAEIAAABQAAAJgFApQgGAogVA2IARAqQAOAjACApQAAAXgGATQgMAdgwAfQgwAfg6AZQg7AYgtAJQABASgEAXQgOAdgkAEIAAAAQgiAAgQgZg");
	this.shape_41.setTransform(4.2,7.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.3,1,1,3,true).p("AC7kTQgLAMgBABIAKgBQAGgEA7AKQA6AKAxBBQgPgGghgBIgBAHQAFgCApAjQAqAiAdBkQASBNgGBIQgHBJgdArQgbAngpAGQgEAAhagCQhZgBh2gCQhzgBhagCQhagBgFAAQgOgGgPgJQgPgKgCgIIAAgJQgBgXgEgiQgEghgIgUIgBgBQgBgEgbgQQgbgRgygBQAFgTAXguQAXgsAngoIAEgEIgFgCQgCgCgUgIQgTgIgTgEQATgQA1gbQA1gaBFgDIABAAIABgBQACgDA2gfQA1gfBeggQBcghB6gJQgHAIgLALg");
	this.shape_42.setTransform(0.1,-16);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#563118").s().p("ADvElIjPgDIjNgDIhfgBQgOgGgPgJQgPgKgCgIIAAgJQgBgXgEgiQgEghgIgUIgBgBQgBgEgbgQQgbgRgygBQAFgTAXguQAXgsAngoIAEgEIgFgCIgWgKQgTgIgTgEQATgQA1gbQA1gaBFgDIABAAIABgBQACgDA2gfQA1gfBeggQBcghB6gJIgSATIgMANIAKgBQAGgEA7AKQA6AKAxBBQgPgGghgBIgBAHQAFgCApAjQAqAiAdBkQASBNgGBIQgHBJgdArQgbAngpAGIhegCg");
	this.shape_43.setTransform(0.1,-16);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AkLEmIAAgBQgJgCgTgLQgTgMgEgOIgBgJQgBgWgDggQgDghgJgUQgBgEgWgRQgYgSg5AEIgGAAIABgFQABgGAWg4QAVg2AvgmIgegLQgSgIgOgBIgLAAIAIgGQACgGA2glQA2glBfACQAGgHA5gkQA4gkBeghQBfghB7AEIAJgBIgMANIgSASQAcgCA7AQQA8ARAcBAIAGAJIgKgEQgCgCgkgGQAWAJAeAhQAeAiAUBLQAOA6AAA4QAAAygJAtQgIAugTAcQgcAqgtAFg");
	this.shape_44.setTransform(-0.2,-16);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgOAAQACgMAMgCQANACACAMQgCANgNABQgMgBgCgNg");
	this.shape_45.setTransform(-12.5,0.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgOAAQABgNANgBQANABACANQgCANgNACQgNgCgBgNg");
	this.shape_46.setTransform(18.8,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDEDED").s().p("AgLADQALgDANgJQgMAMgNAHIABgHg");
	this.shape_47.setTransform(7.9,22.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDEDED").s().p("AgPgEIAegDIABAJQgQAEgPACIAAgMg");
	this.shape_48.setTransform(2.5,20.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNgDQANgFAOgJQgCAKgDAIQgFAJgQAJIgBgWg");
	this.shape_49.setTransform(7.9,23.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPgIQAPgCAPgEQAAAJABAMIgKAEQgGACgOACIgBgXg");
	this.shape_50.setTransform(4.5,24.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgDAFQgIgFgEgMIAeAEQgBAIACANQgLgDgIgFg");
	this.shape_51.setTransform(-2.4,24.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgNAMIAAgZIAaABQgBAJACARQgPAAgMgCg");
	this.shape_52.setTransform(-0.9,21.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgOgJQAOgCAPgGQgBAMABAMQgOAHgNADQAAgLgCgPg");
	this.shape_53.setTransform(6,21.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgHgHIAOgIIABAMIgBAIIAAABIgNAKIgBgXg");
	this.shape_54.setTransform(8.7,20.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DDB99E").s().p("AiCFIQgCgcgCgDQCWguAug5QAug5gHgvQgHgwgGgTQAAgXAKggQAKggAAgaQgDgVgTALQgSALgDADIAIgzQAJgvAEgoQgCglglgWQglgVgGgBIAKANQgngMgogXQgpgWgdgVQAsAOAwASIAzATIADgIQgMgLgHgLIBOA9IBBAyQgIARgMAkIgOAuIgDAIIAHgCQAegHATABQABAMgGAnQgFAmgVAzIgBACIABABIAMAnQALAlABAqQAAAWgFASQgNAdgvAeQgwAgg3AXQg6AYgrAGQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIAAAAQAAABABABQAAABAAAAQABAAABAAQAAABABgBIADAAQABASgDAUQgIAQgZAEQAagPgDgcg");
	this.shape_55.setTransform(20.8,7.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EFCCAF").s().p("AguFoQgKglAFgHIABAAQAEAAAAgEQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBABgpgIQgqgIhVgcQg9gXgTguQgUgtACgoQACgpACgDIACgsIADgrQALgYAfgbQAfgbAEgCIADgCIgCgDQgSgjgLghIgNgqQAmg2AuggQAughANgFQA3AbA4AGQA3AGAHgBIALAAIgIgGQgwgugDgXQATAEApAOIBMAaIAmAOIADgGQgOgMgHgMIBQA+IBBAyQgIARgMAkIgOAvIgDAGIAHgCQAegFATAAQABAMgGAnQgFAmgVAzIgBABIABACIAMAnQALAkABAsQABAVgGARQgNAdgvAfQgwAgg5AXQg6AYgrAGQgDABAAADQAAABABABQAAABABAAQAAAAABAAQAAABABgBIADAAQABASgEATQgKAVgfACIgEAAQggAAgJgQg");
	this.shape_56.setTransform(4.5,6.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.3,1,1,3,true).p("ACvkGIAKgBQAGgEA7AKQA6AKAxBBQgPgGghgBIgBAHQAFgCApAjQAqAiAdBkQASBNgGBIQgHBJgdArQgbAngpAGQgEAAhagCQhZgBh2gCQhzgBhagCQhagBgFAAQgOgGgPgJQgPgKgCgIIAAgJQgBgXgEgiQgEghgIgUIgBgBQgBgEgbgQQgbgRgygBQAFgTAXguQAXgsAngoIAEgEIgFgCQgCgCgUgIQgTgIgTgEQATgQA1gbQA1gaBFgDIABAAIABgBQACgDA2gfQA1gfBeggQBcghB6gJQgHAIgLALQgLAMgBABg");
	this.shape_57.setTransform(0.1,-16.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AkLEmIAAAAQgJgDgTgMQgTgKgEgOIgBgKQgBgWgDghQgDghgJgSQgBgFgWgSQgYgRg5AEIgGABIABgGQABgHAWg4QAVg1AvglIgegMQgSgHgOgBIgLAAIAIgHQACgGA2gmQA2gkBfABQAGgGA5gkQA4gkBeggQBfgiB7AEIAJAAIgMAMIgSASQAcgCA7AQQA8ARAcA/IAGALIgKgFQgCgDgkgGQAWAKAeAiQAeAgAUBMQAOA6AAA5QAAAxgJAtQgIAugTAdQgcAogtAHg");
	this.shape_58.setTransform(-0.2,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43,p:{y:-16}},{t:this.shape_42},{t:this.shape_41,p:{y:7.6}},{t:this.shape_40},{t:this.shape_39,p:{y:7.8}},{t:this.shape_38,p:{y:-30}},{t:this.shape_37,p:{y:9.1}},{t:this.shape_36,p:{y:9}},{t:this.shape_35,p:{y:9.1}},{t:this.shape_34,p:{y:9}},{t:this.shape_33,p:{y:10.1}},{t:this.shape_32,p:{y:10.1}},{t:this.shape_31},{t:this.shape_30,p:{y:9.1}},{t:this.shape_29,p:{y:-27.9}},{t:this.shape_28,p:{y:-28.1}},{t:this.shape_27,p:{y:-13.8}},{t:this.shape_26,p:{y:-8}},{t:this.shape_25,p:{y:22.6}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{y:22}},{t:this.shape_21},{t:this.shape_20,p:{y:21.9}},{t:this.shape_19},{t:this.shape_18,p:{y:25.6}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{y:20.6}},{t:this.shape_14},{t:this.shape_13,p:{y:21.5}},{t:this.shape_12,p:{y:21.4}},{t:this.shape_11,p:{y:24.6}},{t:this.shape_10,p:{y:24.9}},{t:this.shape_9,p:{y:24.4}},{t:this.shape_8},{t:this.shape_7,p:{y:-10}},{t:this.shape_6,p:{y:-10}},{t:this.shape_5,p:{y:-10.1}},{t:this.shape_4,p:{y:-10.1}},{t:this.shape_3,p:{y:-10}},{t:this.shape_2,p:{y:-10}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_58},{t:this.shape_43,p:{y:-16.4}},{t:this.shape_57},{t:this.shape_41,p:{y:7.2}},{t:this.shape_56},{t:this.shape_39,p:{y:7.4}},{t:this.shape_38,p:{y:-30.4}},{t:this.shape_37,p:{y:8.7}},{t:this.shape_36,p:{y:8.6}},{t:this.shape_35,p:{y:8.7}},{t:this.shape_34,p:{y:8.6}},{t:this.shape_33,p:{y:9.7}},{t:this.shape_32,p:{y:9.7}},{t:this.shape_55},{t:this.shape_30,p:{y:8.7}},{t:this.shape_29,p:{y:-28.3}},{t:this.shape_28,p:{y:-28.5}},{t:this.shape_27,p:{y:-14.2}},{t:this.shape_26,p:{y:-8.4}},{t:this.shape_25,p:{y:22.2}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_22,p:{y:21.6}},{t:this.shape_52},{t:this.shape_20,p:{y:21.5}},{t:this.shape_51},{t:this.shape_18,p:{y:25.2}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_15,p:{y:20.2}},{t:this.shape_48},{t:this.shape_13,p:{y:21.1}},{t:this.shape_12,p:{y:21}},{t:this.shape_11,p:{y:24.2}},{t:this.shape_10,p:{y:24.5}},{t:this.shape_9,p:{y:24}},{t:this.shape_47},{t:this.shape_7,p:{y:-10.4}},{t:this.shape_6,p:{y:-10.4}},{t:this.shape_5,p:{y:-10.5}},{t:this.shape_4,p:{y:-10.5}},{t:this.shape_3,p:{y:-10.4}},{t:this.shape_2,p:{y:-10.4}},{t:this.shape_46},{t:this.shape_45}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-46.5,89.8,92.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDB99E").s().p("AARACIgYgJIgagQQARAKAMACQAJACAPAJQAOAHgBAIQAAAIgBABQgBgQgOgGg");
	this.shape.setTransform(-52.9,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDB99E").s().p("Ag3CYQgHgDgGgKQAWgIAJgpQAJgoABgoIABgoQAVgVACgXQACgYgCgCQARgGAWgSQAVgRALgLQACAGgDAJQgGAKgWAOQgWAOgNAHQgDACACADQAAABABAAQAAAAABABQAAAAABAAQAAAAABgBIADgBQABAOgDAJQgQAogDgDIgBABIAAACQABAHABA1QABA4gEAaQgHAZgNAHQgGADgGAAIgKgBg");
	this.shape_1.setTransform(-47,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDB99E").s().p("AAIgKQAXgBACACQgkADgPAIIgOAKQAUgWAUAAg");
	this.shape_2.setTransform(-54.1,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFCCAF").s().p("AAECvQgHgDgIgQQgKgWACgrQACgqAXg2IABgEIgDgBIgogZQglgWgVgYQgmgzAEgQQAAgCAGgBQAQACARATQATAVAZAGIAIACIgFgIQgHgIgJgRQgKgRABgMQAAgEADgCQAKgFAXASQAXASASAWIAGgEQgCgDgHgVQgHgVANgKQADgCAEACQALAGAJAWQAKAWAEANIgCACQgCADACACQADACADgCQABgCAOgMQAOgMAPgFQARgEAHAIQAGAHgFALQgGALgWANQgVAPgOAGQgDACABAEQACACAEgBIACgBQACAOgDAJQgTAngCgDIgCACIAAABIACA9QACA3gFAbQgHAYgNAIQgFADgGAAQgFAAgFgCg");
	this.shape_3.setTransform(-52.9,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AACC2QgLgEgIgSQgKgUAAgiQgBgvAchAQgOgHghgVQgigVgTgWQgMgPgLgUQgMgTgBgOIABgHQACgFALgCQAUACASAVQAOAPAQAIQgRgWgEgbIAAgDQABgHAGgEQAMgHAWAPQAVAPAPARQgCgLgBgMQAAgPALgIQAGgEAHADQAOAIAJAWQAKAWAEANQAQgRAYgJQAWgFAKAMQAIAKgGAPQgGAMgSAMQgTANgOAHIABAOQAAAJgCAGQgQAkgGACIABAfIABA1QAAApgEATQgIAcgPAJQgHADgIAAQgGAAgGgCg");
	this.shape_4.setTransform(-53,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6A6D47").s().p("AgVBsQgagUgSgdIgBgCQASgBARgJQAqgcAXgsQAXgvAIg0QABAWAAAYQAABLgJA8QgJA+gOAFIgJABQgZAAgVgRg");
	this.shape_5.setTransform(-56.2,40);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C8259").s().p("AgNCWQgbgUgRgdQgRgdAAgtQAAgrARg0QAYg1AmgWQApgXAHAAQACgBAFAJQAGAJAEAiQAEAjAAAsQAABJgJA+QgJA+gOAFIgJABQgZAAgVgRg");
	this.shape_6.setTransform(-57,35.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOCcQgcgVgTgeQgog/AfhpQAZg6AtgbQAwgaAGABIABAAQASgCAIA6QAFAvgCBDQgCBBgJA1QgKA1gRAGIgJAAQgcAAgXgSg");
	this.shape_7.setTransform(-57.2,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQBLIAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABgBQAZAAAcgGIAlgIQADgkgJgfQgKgjgEgJIhWgJIg3gIQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQABgDADgBIA5AIIBWAKIACAAIABACQADAFAMAmQALAjgFAqIAAACIgDAAIgiAIQgeAIgeABQgDAAgBgFg");
	this.shape_8.setTransform(-14.3,23);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6A6D47").s().p("AgwAVQgfgvgDgxIA4AIIBXAKQACACAMAmQALAkgEApIghAHQgfAIgeABQgFgEgfgzg");
	this.shape_9.setTransform(-14.4,23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFCCAF").s().p("AgLgGQAQAGAFACIACADIgCACIgVgNg");
	this.shape_10.setTransform(31.7,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DDB99E").s().p("AgegEQAfAJAJgFQALgDgEgHQAKAHADADQACACgDAFQgEAEgHAAQgQAAgggPg");
	this.shape_11.setTransform(30.9,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDB99E").s().p("AixAzQBLgLBDgkQBAgiAqghQAIAAAlAMQAkAKAUgUQAFACABADQABAHgIAIQgFAJgWgDIgZgHQgcgIgRgEIgCAAIgCABQgEAHhGAuQhJAxhdAPIgHgNg");
	this.shape_12.setTransform(11,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFCCAF").s().p("AjMBLQgJgXACgdQAXgGBQgWQBQgYA0gZQAYgRAdgRQAcgQALgBQARADAiAUQAiATAKAMQADADgEAEQgLAOg2gdIgBgCIgCABQgNACgPAFQgOAFAAAIQABAIAcAGQAVAEAJAHQABAIgIAHQgFAHgXgCIgZgFIgsgNIgCAAIgCABQgFAIhGAuQhIAxhdAPQgFgIgKgXg");
	this.shape_13.setTransform(12.8,16.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjCBwQgDgDgMgbQgMgaADglIAAgCIACgBIBQgVQBJgVBTgjQAKgGAigWQAigVATgDQAIACARAGIABABIAdAIQAXAGAJAIQAGAFgCAFQAAADgDABQAJAHAEAGQAFAJgHAIQgRARg5ggQgdAGgGAGQAHAEARADQAgAHADAKQABAEgBAEQgBAHgHAGQgOANgVgGIgZgGQgbgGgQgEQgIAGgnAfQgmAdg2AbQg2Abg0gCIgDABg");
	this.shape_14.setTransform(12.8,16.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNBLIAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQAZgBAbgHIAlgJQADgkgKggIgPgrQgngCgwgFIg3gGQgDAAAAgEQAAgDAEAAIA4AGIBXAIIADAAIAAACQADAEANAlQAMAjgDAqIgBACIgCABIgiAJQgeAIgeABQgDAAgBgDg");
	this.shape_15.setTransform(-14.6,23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6A6D47").s().p("AgvAVQgggvgFgwIA4AGQAxAFAnADQACACAMAmQANAjgDApIghAJQgfAHgeADQgEgEghgyg");
	this.shape_16.setTransform(-14.6,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DDB99E").s().p("AivAiQAsAIA7gaQA8gWArgeQAtgdADgCQANANAXAHQAXAIAQABQANgBAJgLQgBAIgGAGQgHAJgOgDIgIgCQgkgHgUgPIgCgDIgDACQgFAHhGAxQhFAyhdARQgGgHgLgbg");
	this.shape_17.setTransform(10.3,20.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DDB99E").s().p("AAJAMQgNgDgagVIgBgBQAHABAMAIQALAGAJADQAOABAHgGIACACQADAFgFAEQgCADgHAAIgLgCg");
	this.shape_18.setTransform(30.7,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFCCAF").s().p("AgUgLQAdAIAKADIABADQAAAFgGAEQgOgMgUgLg");
	this.shape_19.setTransform(30.9,7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFCCAF").s().p("AjIBQQgKgXABgeQAXgGBQgYQBPgaAzgaQAYgSAcgRQAcgSALgBQAQADAiAXQAiAWAJANQAEAFgEAEQgFAEgQgDQgPgDgagXIgCgBIgCAAQgNADgOAGQgOAFgBAIQADAJAWAFQASAFAGAHQADALgJAKQgIAIgOgEIgGgBQglgHgUgOIgDgCIgCACQgFAHhFAxQhHAyhdASQgFgHgKgXg");
	this.shape_20.setTransform(12.9,16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ai8B0QgDgDgOgdQgOgeACgmIABgCIACgBIBYgUQBPgUBEgiQAJgIAigXQAjgWARgDQAHABANAHIACgBIAgAIQAYAHAKAGQAFAFgBAEQgBAJgGAEQALAJAEAGQAGAKgJAIQgQARg2gpQgdAIgFAFQAGAEANAEQAXAHAGALQACAFgBAGQgCAIgHAJQgHAJgVgDIgHgCQgkgGgWgNQgaAUg5ArQg7AshjAQIgCABg");
	this.shape_21.setTransform(12.8,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,4.9,101.7,48.6);


(lib.listen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAAQACgNAMgBQANABABANQgBANgNACQgMgCgCgNg");
	this.shape.setTransform(-54.2,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAAQACgMAMgBQANABACAMQgCANgNABQgMgBgCgNg");
	this.shape_1.setTransform(-26.4,-17.9);

	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(-41.2,-17.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},10).to({state:[]},6).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:-35.1,y:-32.2},10).to({_off:true},6).wait(125));

	// eye
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AhEB9QANAAAOgGQAxgWAehCQAWgzgHgsQgHgsgggQIgIgCQAMAAAKAEQAhAPAHAtQAHAsgWAzQgeBCgyAWQgOAGgNAAQgHAAgHgCg");
	this.shape_2.setTransform(-46,-25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAEA").s().p("AgOB0QALABAIgEQAegPAGgpQAHgqgUgvQgcg+gugUIgLgEQANAAANAFQAuAVAcA+QAUAvgHAqQgGApgeAPQgKAEgKAAQgGAAgIgDg");
	this.shape_3.setTransform(-20.9,-25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0B7QgggQgHgsQgHgsAWgzQAehCAxgXQAcgKAWAJQAgAQAHAsQAHAsgWAzQgeBCgxAXQgPAFgNAAQgLAAgLgEg");
	this.shape_4.setTransform(-48.4,-25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBnQgigXgWgxQgUgvAGgpQAHgqAegOQAVgJAZAKQAuAUAcA/QAUAvgHApQgGApgeAPQgLAEgKAAQgWAAgVgQg");
	this.shape_5.setTransform(-23.8,-25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRBuQglgZgYgzQgVgyAIgsQAHgtAhgPQAYgKAbALQAxAVAeBCQAVAxgHAtQgIAsghAPQgMAFgMAAQgXAAgWgQg");
	this.shape_6.setTransform(-23.8,-25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag3CBQgjgQgIgvQgIgvAXg2QAfhGA0gXQAegLAZAKQAjARAJAvQAHAvgWA2QggBFg0AYQgPAGgOAAQgNAAgNgGg");
	this.shape_7.setTransform(-48.4,-25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhNAVQAAAAgBgBQAAAAgBgBQAAgBAAAAQAAgBAAgBQACgDADABQA9AbAngRQApgRAEgHQACgNgFgQQAAgEADgBQADAAABADIAEAOQACAMgDAGQgHAMguAPQgSAHgTAAQgeAAgjgOg");
	this.shape_8.setTransform(-21.2,-18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhUAXQgDgCABgDQACgDADABQBAAdAtgTQAugSAFgIQADgOgGgSQgBgEADgBQAEAAABADIAEAQQACAMgEAHQgHAOgyAQQgUAHgVAAQghAAgmgPg");
	this.shape_9.setTransform(-50.1,-16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAAQACgNAMgBQANABABANQgBANgNACQgMgCgCgNg");
	this.shape_10.setTransform(-44.8,-17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAAQACgNAMgBQANABACANQgCANgNACQgMgCgCgNg");
	this.shape_11.setTransform(-17,-18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAEAEA").s().p("AgeA9QAHgBAIgDQAWgMAJgeQAJgdgIgnIAJgHQAKApgIAfQgIAhgYAMQgKAEgMAAIgEAAg");
	this.shape_12.setTransform(-18.2,-19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAEAEA").s().p("Ag+ApIgDgCQARADATgIQAsgTAeg3IAVgFQgeA/gwAWQgOAGgNAAQgMAAgLgFg");
	this.shape_13.setTransform(-47.4,-17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAtQgigXgWgvIgBgEQBCAOAmgRQAogRAJgLQALApgJAfQgIAhgaAMQgKAEgLAAQgVAAgWgQg");
	this.shape_14.setTransform(-23.1,-19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrA5QgagMgKghQgJgfAJgqQArAoAxAAQAzgBAVgHQgeA/gzAWQgMAGgNAAQgLAAgLgFg");
	this.shape_15.setTransform(-49.2,-18.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DDB99E").s().p("AAGBOQATg0gHgqQgIgqgdgPQgHgDgIgCQAQgCAOAHQAdAPAHApQAIApgTAyIgTAFIAEgBg");
	this.shape_16.setTransform(-42.5,-30);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFCCAF").s().p("AhZApIAAAAQADgPAHgOQAehBAxgWQAbgLAWAKQAfAPAIAqQAHAogTAzQgKAFg3AEIgJABQgwAAgrgpg");
	this.shape_17.setTransform(-48.1,-29.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DDB99E").s().p("AAsAlQgchAgugWQgQgGgOABQATgFAUAIQAvAVAbA8QAFAJADAKIgBABIgJAHIgHgUg");
	this.shape_18.setTransform(-21.9,-31.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFCCAF").s().p("AhGBBIgCAAQgPgtAHgkQAIglAcgOQAVgJAXAKQAwAVAcA8IAHATIAAABQgCAFgoAVQgWALgfAAQgaAAgggHg");
	this.shape_19.setTransform(-24.2,-29.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DDB99E").s().p("AhBB0QAKgBAKgEQAxgUAeg9QAWgugHgoQgHgpgggOQgHgDgGAAQAOgCAOAFQAgAOAHApQAHAogWAuQgeA9gxAUQgPAFgNAAIgHAAg");
	this.shape_20.setTransform(-45.6,-25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DDB99E").s().p("AgDBrQAFAAAHgDQAegNAGgmQAHglgVgrQgcg5gugTQgJgDgIgBQAPgBARAFQAuATAcA5QAVArgHAlQgGAmgfANQgJAEgKAAIgHgBg");
	this.shape_21.setTransform(-21.2,-25.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFCCAF").s().p("Ag0BwQgggOgHgpQgHgoAWguQAeg8AxgVQAcgJAWAIQAgAPAHAoQAHAogWAuQgeA9gxAUQgPAFgNAAQgLAAgLgEg");
	this.shape_22.setTransform(-48.4,-25.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFCCAF").s().p("AgPBeQgigWgWgsQgUgrAGglQAHgmAegNQAVgIAZAJQAuASAcA5QAUArgHAmQgGAlgeAOQgKADgLAAQgVAAgWgOg");
	this.shape_23.setTransform(-23.7,-25.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRBkQglgWgYgvQgVguAIgoQAHgoAhgOQAYgJAbAKQAxATAeA8QAVAtgHAoQgIAoghAPQgMAEgMAAQgXAAgWgPg");
	this.shape_24.setTransform(-23.8,-25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag3B2QgjgQgIgqQgIgrAXgxQAfg/A0gVQAegLAZAKQAjAPAJArQAHArgWAwQggBAg0AVQgPAGgPAAQgNAAgMgFg");
	this.shape_25.setTransform(-48.3,-25.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNAAQABgMAMgCQANACACAMQgCANgNABQgMgBgBgNg");
	this.shape_26.setTransform(-51.5,-33.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAAQACgMAMgCQANACABAMQgBANgNACQgMgCgCgNg");
	this.shape_27.setTransform(-30.9,-32.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAEAEA").s().p("AhAB/QAKgBAKgEQAygXAehCQAVgzgHgsQgGgsghgQQgHgDgGgBQANgBANAFQAhAQAGAsQAHAsgVAzQgeBCgyAXQgNAFgNAAIgHAAg");
	this.shape_28.setTransform(-45.6,-25.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EAEAEA").s().p("AgDB2QAGgBAHgCQAegPAGgpQAGgqgUgvQgcg+gugUQgJgEgJgBQAPgCAQAHQAuAUAcA+QAVAvgHAqQgGApgeAPQgKAEgLAAIgFgBg");
	this.shape_29.setTransform(-21.2,-25.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgOAAQACgNAMAAQANAAABANQgBANgNABQgMgBgCgNg");
	this.shape_30.setTransform(-45.6,-16.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOAAQABgMANgCQANACACAMQgCANgNABQgNgBgBgNg");
	this.shape_31.setTransform(-18.1,-16.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgOAAQACgMAMgCQANACACAMQgCANgNABQgMgBgCgNg");
	this.shape_32.setTransform(-47.1,-26.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgNAAQABgMAMgCQANACABAMQgBANgNABQgMgBgBgNg");
	this.shape_33.setTransform(-25.1,-25.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAEAEA").s().p("AhGB8QAOABAOgGQAygWAehDQAVgygHgtQgGgsghgPIgFgCQAMAAAJAEQAhAPAHAtQAGAsgVAzQgeBCgyAWQgNAGgNAAQgJAAgJgDg");
	this.shape_34.setTransform(-46.3,-25.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAEAEA").s().p("AgRB0QAMAAAIgEQAegPAHgpQAGgpgUgvQgag+gwgVIgIgDQAMABAMAEQAuAVAcA+QAUAvgGAqQgHApgeAPQgKAEgJAAQgIAAgJgDg");
	this.shape_35.setTransform(-21.1,-25.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgPBnQgigYgWgwQgUgwAGgpQAHgpAegPQAVgIAZAJQAuAVAcA+QAUAvgHAqQgGApgeAOQgLAFgKAAQgWAAgVgQg");
	this.shape_36.setTransform(-24,-25.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgRBuQglgZgYgzQgVgyAIgsQAHgtAhgPQAYgKAbALQAxAVAeBCQAVAygHAsQgIAsghAPQgMAFgMAAQgXAAgWgQg");
	this.shape_37.setTransform(-24,-25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:-25.3,x:-48.4}},{t:this.shape_6,p:{y:-25.3,x:-23.8}},{t:this.shape_5,p:{y:-25.4,x:-23.8}},{t:this.shape_4,p:{x:-48.4,y:-25.3}},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},25).to({state:[{t:this.shape_7,p:{y:-25.3,x:-48.4}},{t:this.shape_6,p:{y:-25.3,x:-23.8}},{t:this.shape_5,p:{y:-25.4,x:-23.8}},{t:this.shape_4,p:{x:-48.4,y:-25.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.shape_7,p:{y:-25.2,x:-48.4}},{t:this.shape_6,p:{y:-25.2,x:-23.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},31).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_7,p:{y:-25.2,x:-48.5}},{t:this.shape_6,p:{y:-25.3,x:-23.9}},{t:this.shape_5,p:{y:-25.3,x:-23.8}},{t:this.shape_4,p:{x:-48.5,y:-25.3}},{t:this.shape_29,p:{x:-21.2,y:-25.3}},{t:this.shape_28,p:{x:-45.6}},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_7,p:{y:-25.2,x:-48.6}},{t:this.shape_6,p:{y:-25.3,x:-24}},{t:this.shape_5,p:{y:-25.3,x:-24}},{t:this.shape_4,p:{x:-48.6,y:-25.3}},{t:this.shape_29,p:{x:-21.3,y:-25.2}},{t:this.shape_28,p:{x:-45.8}},{t:this.shape_31},{t:this.shape_30}]},11).to({state:[]},15).to({state:[{t:this.shape_7,p:{y:-25.1,x:-48.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_4,p:{x:-48.6,y:-25.2}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},20).to({state:[{t:this.shape_7,p:{y:-25.2,x:-48.4}},{t:this.shape_6,p:{y:-25.2,x:-23.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},11).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_7,p:{y:-25.2,x:-48.4}},{t:this.shape_6,p:{y:-25.2,x:-23.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_7,p:{y:-25.1,x:-48.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_4,p:{x:-48.6,y:-25.2}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).wait(21));

	// mouth
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAEgLQAVgEABACIAKAGQgjgFgTANIgRAOQAWgXARgDg");
	this.shape_38.setTransform(-36.5,8.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B0202").s().p("AgIAAQAIgCAKgFQgEAHgFAIQgDgHgGgBg");
	this.shape_39.setTransform(-32.7,7.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B0202").s().p("AgOgJIAdAFQgKAHgDAHQgIgJgIgKg");
	this.shape_40.setTransform(-41.3,8.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#871212").s().p("AgjAEQADgJASgJIAAAAQAOAAAOgCIACABQAMgBAJALIAAABQgPATgYACQgSAAgPgNg");
	this.shape_41.setTransform(-36.7,9.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKATQgngDgIgDQgJgOgEgKQATAKAqADQAoAFAogaIgHAWIgCAAQgdARggAAIgLgBg");
	this.shape_42.setTransform(-37.6,5.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DDB99E").s().p("AgdgGQADACAQAEQARAFAXgLQgBADgSAIQgFACgGAAQgMAAgRgNg");
	this.shape_43.setTransform(-36.9,15.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag4ALQgXgigBgIIgDgJIAJAFQAEAFAyALQAvAMAxgmIAIgIIgCAMQAAAIgRAnQgQAqgqAGQgqgFgVgmg");
	this.shape_44.setTransform(-37.7,6.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DDB99E").s().p("AgRABQACABAKABQAKABANgKQAAACgLAHQgFAEgEAAQgHAAgIgGg");
	this.shape_45.setTransform(-37.2,10.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkAVQAEABAOgBQASgCAlgtQgBAHgaAcQgNASgPAAQgJAAgJgGg");
	this.shape_46.setTransform(-36.2,6.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#871212").s().p("AgJgFIAAgBQAAgGATgJIAAABQgCApgIACQgFgBgEgbg");
	this.shape_47.setTransform(-36.7,9.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B0202").s().p("AgKAUQADgpAHgCQAHABADAhQgNADgHAKIAAgEg");
	this.shape_48.setTransform(-36.7,5.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgRAAQAAgsARgHQAQAFACApIAAABIAAAEQAAAtgSAHQgRgHAAgtg");
	this.shape_49.setTransform(-36.7,7.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#871212").s().p("AgsgBQAGgFAWgHQAVgHAoAEQgPAfgfAEQgZgCgSgSg");
	this.shape_50.setTransform(-35.8,10.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2B0202").s().p("AhAgOQAPAJAkAEQAhACAtgTQgDALgFAKQgugDgWAGQgYAIgGAFQgPgQgIgRg");
	this.shape_51.setTransform(-36.6,7.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgZARQgngKgCgEIgBgBIgHgQQA1AZAngKQAogHARgNIgEATIgBAAQgqAUgfAAQgLAAgLgDg");
	this.shape_52.setTransform(-36.8,4.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag6AJQgYgrgBgJIgCgKIAIAFQBBAjArgQQAsgRAEgHIAHgGIgBAKQABAJgQAuQgQAvguAHQgsgGgWgtg");
	this.shape_53.setTransform(-36.9,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},39).to({state:[{t:this.shape_46},{t:this.shape_45}]},10).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},30).to({state:[]},15).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},20).wait(36));

	// head
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6B4226").s().p("AgEAXQgEglgBgDQgcAJgCgDQAIgTAEgXIAFgZQAGgIAMAFQAJAEAKgBQAIgDgDgHIgDgHQAOAOAAAEQAOA8gHAnQgIApgCABQgFghgGACQgDAYgLATQgKATgCABQAJgjgEgmg");
	this.shape_54.setTransform(-1.7,-23.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6B4226").s().p("AAFCdIgCgZQgDgXgKgNQgPgNgZgJQgZgKgXAEQAAgDARgdQAQgeAggVIgPAIQgOAHgNALQgBgEAYgjQAYglAxgfIgdgGQgbgGgZAAQACgEAvgXQAugXBAABIgOAbQgMAZgHAUIAKgLIATgUIgIAUIgQAqQAFgGANgJIgMAbQgLAYgCASQACAUAJAcIAMAfIgJgPIgOgbIADAcQADAZAIAZIgTAPQgSAOgKAOg");
	this.shape_55.setTransform(-72.1,-29);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgeAaQgBgBAEgUQAGgSAXgWQADgBANAGQAOAHgBATQgBgBgOAGQgOAIgHAaQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgGAAgPgKg");
	this.shape_56.setTransform(-51.6,-43.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAGAjQgIgagNgIQgOgGgBABQgBgTAOgHQANgGACABQAYAWAFASQAFAUgBABQgPAKgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_57.setTransform(-20.1,-43.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DDB99E").s().p("AgcAqQAFgEANgIQALgIAKgLQAJgLAGgPQAFgPgLgTQACAAAGALQAHALgGAVQgIAUgTARQgQARgIACQgNAAAHgIg");
	this.shape_58.setTransform(-37.2,-6.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DDB99E").s().p("AiCFJQgCgdgCgEQCWgsAug5QAug5gHgxQgHgvgGgSQAAgYAKggQAKghAAgZQgDgUgTAKQgSALgDADIAIgzQAJguAEgpQgCglglgVQglgWgGgBIAKANQgngMgogXQgpgWgdgVQAsAOAwARIAzATIADgGQgMgMgHgMIBOA+IBBAxQgIASgMAkIgOAvIgDAGIAHgCQAegGATACQABALgGAmQgFAogVAyIgBABIABACIAMAnQALAlABArQAAAVgFARQgNAdgvAgQgwAfg3AXQg6AXgrAHQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIAAABQAAAAABABQAAABAAAAQABAAABAAQAAABABAAIADgBQABASgDATQgIARgZAEQAagOgDgcg");
	this.shape_59.setTransform(-19.6,-7.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAXANQgCgDgSgKQgOgEgFAGQgEAHABACQgDACgDgCQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBQABgDASgHQgJgEgJACQgDABgBgEQgBgDADgBQATgDAQALQARAKACADQACACgCADIgCACIgDgCg");
	this.shape_60.setTransform(-70.2,-5.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgbAOQgCgDACgDQACgCARgKQAPgMAUADQADABgBAEQgBADgDgBQgJgCgJAEQASAHABADQAAABABABQAAAAAAABQAAAAAAABQgBABAAAAQgDADgDgDQABgBgEgIQgFgFgOADQgSALgCADIgDABIgCgBg");
	this.shape_61.setTransform(-0.9,-5.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAWAxIgsgCQgZgDgGgUQgFgTABgPIAAgCQABgUANgLQANgKAXAHQAZALATAcQATAaABAFQACAEgDABQgDACgCgDQgBgEgTgaQgSgbgWgKQgTgGgLAIQgKAIAAARIAAACQgGApAhAJQAXACAVAAIAWAAQAEABAAADQAAADgEABIgWgBg");
	this.shape_62.setTransform(-69.8,-6.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EFCCAF").s().p("AAWAuIgsgCQgXgEgEgTQgFgTABgOQAAgPAKgLQAKgLAZAGQAYALATAcQATAbAAADIgJAUIgHAAIgQAAg");
	this.shape_63.setTransform(-69.8,-6.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgvAuQAAgDAEgBIAWAAQAVAAAWgCQAigJgGgpIAAgCQAAgRgKgIQgLgIgTAGQgWAKgTAbIgTAeQgCADgDgCQgDgBABgEQACgFATgaQATgcAZgLQAWgHAOAKQANALAAAUIAAACQACAPgGATQgFAUgZADIgsACIgWABQgEgBAAgDg");
	this.shape_64.setTransform(-1.4,-6.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DDB99E").s().p("AgrAuIgKgUQAAgDATgbQATgcAYgLQAZgGAKALQAKALAAAPQABAOgEATQgFATgXAEIgsACIgQAAIgGAAg");
	this.shape_65.setTransform(-1.5,-6.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6B4226").s().p("ADuBwIg5gwQgkgggdgMIAAANQgEgDg8gYQg7gXhEgIQgCACADAXQADAVAZAhQgEABgugJQgvgIgggdQgFACgxAeQgwAdgkAoIAKgXQAKgWAUgcQgCgCgXAWIAIgRQAIgQANgUIgdAQIAQgYQABgGBOgwQBPgwCYgOIgWAKIglARIAsgIQAugHA+AHQA9AGAzAlQgCgBgUgBQgWAAgbAMQAGgCA5AiQA4AgAhBeQgGgBgtgKQADAFAWANQgCACgPACIgFAAQgNAAgPgJg");
	this.shape_66.setTransform(-30.6,-45.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAFBaQgBgDACgCQAJgGADgHQgEgGgHgBIgGgDIAFgDQBBgtgRglQgIgWgagBQgeAEgWAYQgXAXgBAEQgCADgDgCQgDgCACgDQACgFAWgWQAWgZAfgGIgCghQABgEADAAQADAAABADIACAiQAdADAJAZQADAGAAAIQgCAigvAmQAFAEACAHIAAACQAAAIgLAJIgDAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_67.setTransform(-39.7,-7.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EFCCAF").s().p("AguFoQgKglAFgHIABAAQAEAAAAgEQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBABgpgIQgqgIhVgcQg9gXgTguQgUgtACgoQACgpACgDIACgsIADgrQALgYAfgbQAfgbAEgCIADgCIgCgDQgSgjgLghIgNgqQAmg2AuggQAughANgFQA3AbA4AGQA3AGAHgBIALAAIgIgGQgwgugDgXQATAEApAOIBMAaIAmAOIADgGQgOgMgHgMIBQA+IBBAyQgIARgMAkIgOAvIgDAGIAHgCQAegFATAAQABAMgGAnQgFAmgVAzIgBABIABACIAMAnQALAkABAsQABAVgGARQgNAdgvAfQgwAgg5AXQg6AYgrAGQAAABgBAAQgBAAAAABQAAAAgBABQAAABAAAAQAAABABABQAAABABAAQAAAAABAAQAAABABgBIADAAQABASgEATQgKAVgfACIgEAAQggAAgJgQg");
	this.shape_68.setTransform(-35.9,-7.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgyFqQgLglAFgMQgcABiFgqQhCgZgXgvQgXgvACgpQACgrACgDIAMhZIAAAAQAJgXAcgZQAcgZAMgJQgTgngLgiIgMglIAAgCIABgBQAqg8AygjQAzgiAFgBIACAAIACAAQAqAXAxAIQAuAIAYAAQgcgbgKgVQgKgVABgDIgCgFIAFABQATADA3ASQA3ATAkANQgTgZgBgFIAGgEQAKAJAnAdIBKA5IAnAeIADACIgCADQgFAJgKAfIgSA3QAQgDAQAAIARgBIADAAIABAEIAAABQAAAJgFApQgGAogVA2IARAqQAOAjACApQAAAXgGATQgMAdgwAfQgwAfg6AZQg7AYgtAJQABASgEAXQgOAdgkAEIAAAAQgiAAgQgZg");
	this.shape_69.setTransform(-36.2,-7.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(0.3,1,1,3,true).p("AE0i2QAFgCApAjQAqAiAdBkQASBNgGBIQgHBJgdArQgbAngpAGQgEAAhagCQhZgBh2gCQhzgBhagCQhagBgFAAQgOgGgPgJQgPgKgCgIIAAgJQgBgXgEgiQgEghgIgUIgBgBQgBgEgbgQQgbgRgygBQAFgTAXguQAXgsAngoIAEgEIgFgCQgCgCgUgIQgTgIgTgEQATgQA1gbQA1gaBFgDIABAAIABgBQACgDA2gfQA1gfBeggQBcghB6gJQgHAIgLALQgLAMgBABIAKgBQAGgEA7AKQA6AKAxBBQgPgGghgBg");
	this.shape_70.setTransform(-40.3,-31.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#563118").s().p("ADvElIjPgDIjNgDIhfgBQgOgGgPgJQgPgKgCgIIAAgJQgBgXgEgiQgEghgIgUIgBgBQgBgEgbgQQgbgRgygBQAFgTAXguQAXgsAngoIAEgEIgFgCIgWgKQgTgIgTgEQATgQA1gbQA1gaBFgDIABAAIABgBQACgDA2gfQA1gfBeggQBcghB6gJIgSATIgMANIAKgBQAGgEA7AKQA6AKAxBBQgPgGghgBIgBAHQAFgCApAjQAqAiAdBkQASBNgGBIQgHBJgdArQgbAngpAGIhegCg");
	this.shape_71.setTransform(-40.3,-31.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AkLEmIgBgBQgIgCgTgLQgUgMgDgOIgBgJQAAgWgEghQgEgggHgUQgCgEgWgRQgYgSg5AEIgGAAIABgFQABgGAWg4QAWg2AugmIgegLQgSgIgOgBIgLAAIAIgFQACgHA3glQA2glBeACQAHgHA3gkQA5gkBeghQBfghB6AEIAJgBIgLANIgSATQAbgDA9AQQA7AQAcBAIAGAKIgKgEQgCgDgkgFQAWAJAeAhQAeAiAUBMQAOA5AAA4QAAAygIAtQgJAugTAcQgcApgtAGg");
	this.shape_72.setTransform(-40.6,-31.2);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(-40.4,-15.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.3,1,1,3,true).p("ACvkGIAKgBQAGgEA7AKQA6AKAxBBQgPgGghgBIgBAHQAFgCApAjQAqAiAdBkQASBNgGBIQgHBJgdArQgbAngpAGQgEAAhagCQhZgBh2gCQhzgBhagCQhagBgFAAQgOgGgPgJQgPgKgCgIIAAgJQgBgXgEgiQgEghgIgUIgBgBQgBgEgbgQQgbgRgygBQAFgTAXguQAXgsAngoIAEgEIgFgCQgCgCgUgIQgTgIgTgEQATgQA1gbQA1gaBFgDIABAAIABgBQACgDA2gfQA1gfBeggQBcghB6gJQgHAIgLALQgLAMgBABg");
	this.shape_73.setTransform(-40.3,-31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).to({state:[{t:this.instance_1}]},94).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_73},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},20).wait(36));

	// hand
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DDB99E").s().p("AgkCaQABgQgKgCQgJgEgBgnQgBgnABgnIADgnQAVgNAJgUQAJgVAIgVIAJgcQAEgLAQgNQASgPADgLIAMgEQgBAMgVASQgdAagCAlQgDAhguAqIgBABIAAABQgCAFgCAeQAAAQAEARIAAAbIABAgQAAABAAABQABAAAAABQABAAAAAAQABABABAAQADgBABgDIgCggIAAgbQADgHAEgBIADACQAFAJADAhQACAfgBAWQgDAbgXAJIgDAAQANgNAAgPg");
	this.shape_74.setTransform(-15.2,32.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EFCCAF").s().p("AgsCpQgKgPgFgfQgFgfABgiQAAgiACgXIAAgBIgBAAQgDgBgPgNQgRgOgCgYQACgTAbgRQAbgQASgGQAogbAlgVQAkgVAMgDQgBANgVARQgdAagCAmQgDAgguAqIgBABIgBABQgBAFgCAfQAAAQADAQIAAAbIACAgQAAAEACAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAgBIgBggIAAgbQADgGAEgCQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAGAKACAgQADAggBAVQgDAbgWAJQgGACgFAAQgRAAgMgOg");
	this.shape_75.setTransform(-19.4,32.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgyCuQgMgRgFggQgEggAAgiQAAgjADgVQgIgDgPgOQgOgOgCgYQAFgbAhgSQAhgTAHgBQB8hPAKAIQADAAgBAGIAAgBQABACgGAMQgFANgPALQgPAKgGASQgGARgBANQgHAogtAmQgCAHAAAaIAAAWQADgEAEgBQAEgBAGAGQAIANACAiQACAjgBARQgDAggbALQgHACgHAAQgTAAgPgQg");
	this.shape_76.setTransform(-19.4,32.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6A6D47").s().p("Ag4BDQA4gNAVgwQAPgfgFgoQgFgogageQAMAHAMAMQAPAQAJAdQAIAdABAgQAAAegLAXQgSAlgbAaQgYAagTAEQgFgQgJg1g");
	this.shape_77.setTransform(-13.9,36.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7C8259").s().p("AgyBOQgKgygBg6QgBhEAbgrQAHAAAUAHQASAGATASQAPARAJAcQAJAeAAAfQAAAegKAXQgTAlgaAaQgZAagTAFQgEgPgJgyg");
	this.shape_78.setTransform(-14.5,35.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgsCUQgDgIgLg3QgLg3gBhCQAAhDAdgtIABgBIACAAQADgBAXAHQAVAHAYAVQAfAiAFA2QAFAzgSAoQgTAlgdAYQgbAYgWABIgDABg");
	this.shape_79.setTransform(-14.4,35.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DDB99E").s().p("AgLBQQAGgrgCgmIgBgtQAFgFAKgGQANgGAHgYQAAgbgggZQAmATAGAbQgCAXgQAOQgRAOgCAAIgCABIAAADQADAXAAAgQAAAigDAfQgEAegKAPQgKAMgOABQAVgQAGgsg");
	this.shape_80.setTransform(-49.2,36.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EFCCAF").s().p("AAFC1QgXgJgCgbQgBgVACggQADggAGgKIACgCQAEACADAHIABACIgBA5QgBADACABQADAAABgDIABgpIAAgXIAAgCQACgNAAgOQgBgfgCgFIAAgBIgCgBQgtgqgDggQgCgmgegaQgVgRAAgNQAMADAkAVQAlAVAnAaQATAHAaAQQAbARADATQgDAYgQAOQgQANgCABIgCAAIAAABQADAXAAAiQABAigFAfQgEAfgMAPQgMAOgQAAQgFAAgGgCg");
	this.shape_81.setTransform(-55.2,32.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AADC8QgbgLgDggQgBgRACgjQACgiAIgNQAFgGAFABQAEABACAEIABgWQgBgaAAgHQgugmgHgoQgBgNgGgRQgGgSgPgKQgPgLgFgNIgFgNIAAgBQgBgFACAAQAMgIB7BPQAHABAhATQAhASAFAbQgCAYgOAOQgPAOgIADQADAVAAAjQAAAhgEAhQgFAggMARQgPAQgTAAQgHAAgHgCg");
	this.shape_82.setTransform(-55.4,32.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6A6D47").s().p("AgsAtQAsgIAUgpQAUgpAEg0IAAAYQgBA7gJAwQgIAygFAPQgbgIgmgug");
	this.shape_83.setTransform(-56.7,40.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7C8259").s().p("AgFBwQgbgagTgkQgKgYAAgdQAAggAJgdQAJgdAPgQQATgSASgHQAUgHAHAAQAbAsgBBEQgCA5gJAyQgJAygEAOQgTgDgYgbg");
	this.shape_84.setTransform(-58.4,36);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAqCWQgWgCgbgdQgdgcgTgmQgTgnAFguQAEgvAhgkQAYgVAVgHQAXgHADABIACAAIACABQAcAtAABDQgBBCgKA3QgMA3gCAIIgBADg");
	this.shape_85.setTransform(-58.6,36);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DDB99E").s().p("AARACIgYgJIgagQQARAKAMACQAJACAPAJQAOAHgBAIQAAAIgBABQgBgQgOgGg");
	this.shape_86.setTransform(-52.9,29.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DDB99E").s().p("Ag3CYQgHgDgGgKQAWgIAJgpQAJgoABgoIABgoQAVgVACgXQACgYgCgCQARgGAWgSQAVgRALgLQACAGgDAJQgGAKgWAOQgWAOgNAHQgDACACADQAAABABAAQAAAAABABQAAAAABAAQAAAAABgBIADgBQABAOgDAJQgQAogDgDIgBABIAAACQABAHABA1QABA4gEAaQgHAZgNAHQgGADgGAAIgKgBg");
	this.shape_87.setTransform(-47,37.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#DDB99E").s().p("AAIgKQAXgBACACQgkADgPAIIgOAKQAUgWAUAAg");
	this.shape_88.setTransform(-54.1,24.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EFCCAF").s().p("AAECvQgHgDgIgQQgKgWACgrQACgqAXg2IABgEIgDgBIgogZQglgWgVgYQgmgzAEgQQAAgCAGgBQAQACARATQATAVAZAGIAIACIgFgIQgHgIgJgRQgKgRABgMQAAgEADgCQAKgFAXASQAXASASAWIAGgEQgCgDgHgVQgHgVANgKQADgCAEACQALAGAJAWQAKAWAEANIgCACQgCADACACQADACADgCQABgCAOgMQAOgMAPgFQARgEAHAIQAGAHgFALQgGALgWANQgVAPgOAGQgDACABAEQACACAEgBIACgBQACAOgDAJQgTAngCgDIgCACIAAABIACA9QACA3gFAbQgHAYgNAIQgFADgGAAQgFAAgFgCg");
	this.shape_89.setTransform(-52.9,35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AACC2QgLgEgIgSQgKgUAAgiQgBgvAchAQgOgHghgVQgigVgTgWQgMgPgLgUQgMgTgBgOIABgHQACgFALgCQAUACASAVQAOAPAQAIQgRgWgEgbIAAgDQABgHAGgEQAMgHAWAPQAVAPAPARQgCgLgBgMQAAgPALgIQAGgEAHADQAOAIAJAWQAKAWAEANQAQgRAYgJQAWgFAKAMQAIAKgGAPQgGAMgSAMQgTANgOAHIABAOQAAAJgCAGQgQAkgGACIABAfIABA1QAAApgEATQgIAcgPAJQgHADgIAAQgGAAgGgCg");
	this.shape_90.setTransform(-53,35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6A6D47").s().p("AgVBsQgagUgSgdIgBgCQASgBARgJQAqgcAXgsQAXgvAIg0QABAWAAAYQAABLgJA8QgJA+gOAFIgJABQgZAAgVgRg");
	this.shape_91.setTransform(-56.2,40);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7C8259").s().p("AgNCWQgbgUgRgdQgRgdAAgtQAAgrARg0QAYg1AmgWQApgXAHAAQACgBAFAJQAGAJAEAiQAEAjAAAsQAABJgJA+QgJA+gOAFIgJABQgZAAgVgRg");
	this.shape_92.setTransform(-57,35.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgOCcQgcgVgTgeQgog/AfhpQAZg6AtgbQAwgaAGABIABAAQASgCAIA6QAFAvgCBDQgCBBgJA1QgKA1gRAGIgJAAQgcAAgXgSg");
	this.shape_93.setTransform(-57.2,35.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAgBiQgEABgdgHQgegFgegNQgEgCACgCIABgBQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABABQAZAKAbAGQAaAGAKABQASgfAFgjQAFgggBgLQgZgXgqgZQgtgZgFgBQgHgBACgEQACgCADAAQAEAAArAYQAqAXAiAdIADACIgBACQABAEgFAmQgFAngVAjIgBADg");
	this.shape_94.setTransform(-17,24);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6A6D47").s().p("AAGBaQgdgHgegMQgDgFgIg7QgJg4ARguQAEgCArAYQAqAXAjAeQABAEgFAlQgFAmgUAlIghgGg");
	this.shape_95.setTransform(-17.7,24);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EFCCAF").s().p("AACAMIgHgYQAIAOADAHIgBAEIgDgBg");
	this.shape_96.setTransform(25.5,40.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DDB99E").s().p("AgVgXQASAbAJADQALACACgIQADALAAAGQgBAEgEABIgDABQgOAAgVgvg");
	this.shape_97.setTransform(23.3,42);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DDB99E").s().p("ACGA9IgPgWQgRgYgLgNIgBgCIgCAAQgHADhVgGQhXgIhSgvIADgOQBBAmBKAOQBJAOA1ABQAGAFAWAeQAVAfAcgDQADAFgBACQgEAHgKABIgEAAQgJAAgNgMg");
	this.shape_98.setTransform(1.7,36.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EFCCAF").s().p("ACfA1IAAgCIgBAAQgMgHgOgFQgPgFgFAFQgEAIASAWQAOAQACALQgEAHgKABQgLAEgPgRIgPgVIgbgmIgBgBIgCAAQgJADhUgIQhXgIhSgtQAAgIAIgYQAGgYAVgWQAWAKBNAgQBMAgA4AOQAeACAhAFQAgAFAKAFQALAMAOAlQAPAkAAAQQAAAEgGABIgCAAQgQAAgXg1g");
	this.shape_99.setTransform(4.8,33.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ACWA5QgbgOgIABQADAHALAOQAVAYgFALIgEAGQgHAFgJABQgTABgNgRIgPgVQgQgXgKgMQgMABgvgCQgygBg7gOQg6gNgoggIgCgBIAAgCQgBgEAIgcQAHgdAagbIABgBIADABQAFADBGAdQBHAdBVAbQAMABAoAFQApAEAPALQAGAEAJAQIAAABIASAYQANAUAEALQAAAHgEADQgCACgDAAQADALgBAGQgCALgKABIgDAAQgXAAgWg5g");
	this.shape_100.setTransform(5.3,33.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgcBTQgBAAgBgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAABQAcADAagBIAmgDQAJgjgEgiQgEghgDgKQgfgQgvgNQgygMgFAAQgHABABgEQABgDAEgBQADgBAwAMQAvALAoAUIADAAIAAACQACAFAFAlQAFAngKAnIgBADIgCAAIgjADIgXABQgSAAgUgDg");
	this.shape_101.setTransform(-18.4,23.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6A6D47").s().p("AgbBQQgEgFgXg3QgXg0AEgwQADgDAwAMQAtAKArAVQACADAFAlQAFAmgKApIgiADIgTAAQgUAAgWgCg");
	this.shape_102.setTransform(-18.5,23.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EFCCAF").s().p("AgKgHQAOAHAFAEIACADIgDABIgSgPg");
	this.shape_103.setTransform(28.9,16.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DDB99E").s().p("AgdgLQAdAOAKgDQALgBgCgIQAIAIACADQACAEgDADQgEADgFAAQgQAAgggXg");
	this.shape_104.setTransform(27.7,19.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#DDB99E").s().p("Ai4AeQBNABBHgZQBFgXAvgaQAIABAiARQAjARAXgRIAEAFQAAAIgJAGQgHAGgVgEIgXgLQgbgNgQgGIgCAAIgBABQgGAGhNAiQhPAlheAAIgGgOg");
	this.shape_105.setTransform(6.6,24.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EFCCAF").s().p("AjMBQQgEgHgFgYQgHgZAHgbQAYgCBTgLQBTgLA2gQQAbgNAfgMQAegMALABQARAGAfAYQAeAYAIANQACAEgEAEQgNAKgxgkIgBgBIgCAAQgNAAgPADQgPADgBAHQgBAJAbAJQAVAGAGAIQABAIgJAHQgHAIgVgHIgYgLIgrgTIgBAAIgCABQgGAGhMAlQhOAkhdAAIgDAAg");
	this.shape_106.setTransform(9,21.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AjOBWIgCAAIgBgCQgDgDgHgcQgJgcAJgiIABgCIACgBIBSgKQBMgKBXgUQAKgFAmgQQAlgRASACQAJACAPAKIACAAIAbANQAVAKAIAIQAFAFgCAFQgBAEgDABQAIAIACAFQAEALgIAGQgUANgygmQgfABgGAFQAGAFAQAGQAfAJACAKIgCAIQgDAIgHAGQgQAKgUgIIgXgLIgpgSQgJAHgsAXQgpAYg7ASQglAMgiAAQgTAAgSgEg");
	this.shape_107.setTransform(9.1,21.4);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(-0.3,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#DDB99E").s().p("AAHgKQAYgBACACQgkADgPAIIgOAKQATgWAUAAg");
	this.shape_108.setTransform(-54.3,24.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6A6D47").s().p("AgVBsQgbgUgRgdIgBgCQATgBAQgJQAqgcAXgsQAXgvAIg0QACAWgBAYQAABLgJA8QgKA+gNAFIgJABQgZAAgVgRg");
	this.shape_109.setTransform(-56.4,40.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7C8259").s().p("AgNCWQgagUgSgdQgQgdAAgtQAAgrAQg0QAXg1AngWQApgXAHAAQADgBAFAJQAFAJAEAiQAFAjgBAsQAABJgJA+QgKA+gNAFIgJABQgZAAgVgRg");
	this.shape_110.setTransform(-57.2,35.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgQBMIAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAZgCAcgEIAlgJQADgkgJggQgKghgEgKIhWgKIg3gHQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQABgEADABIA5AHIBWALIACAAIABACQADAEAMAmQALAjgFApIAAADIgDABIgiAIQgeAGgeABQgDAAgBgDg");
	this.shape_111.setTransform(-14.6,23);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6A6D47").s().p("AgwAWQgfgwgDgwIA4AHIBXAKQACACAMAmQALAjgEAqIghAIQgfAGgeACQgFgFgfgxg");
	this.shape_112.setTransform(-14.6,23.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EFCCAF").s().p("AgLgGQAQAGAFACIACADIgCACIgVgNg");
	this.shape_113.setTransform(31.4,8.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#DDB99E").s().p("AgegEQAfAJAJgFQALgDgEgHQAKAHADADQACACgDAFQgEAEgHAAQgQAAgggPg");
	this.shape_114.setTransform(30.7,11.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#DDB99E").s().p("AixAzQBLgLBDgkQBAgiAqghQAIAAAlAMQAkAKAUgUQAFACABADQABAHgIAIQgFAJgWgDIgZgHQgcgIgRgEIgCAAIgCABQgEAHhGAuQhJAxhdAPIgHgNg");
	this.shape_115.setTransform(10.7,20.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EFCCAF").s().p("AjMBLQgJgXACgdQAXgGBQgWQBQgYA0gZQAYgRAdgRQAcgQALgBQARADAiAUQAiATAKAMQADADgEAEQgLAOg2gdIgBgCIgCABQgNACgPAFQgOAFAAAIQABAIAcAGQAVAEAJAHQABAIgIAHQgFAHgXgCIgZgFIgsgNIgCAAIgCABQgFAIhGAuQhIAxhdAPQgFgIgKgXg");
	this.shape_116.setTransform(12.6,16.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AjCBwQgDgDgMgaQgMgbADglIAAgCIACgBIBQgVQBJgWBTghQAKgIAigUQAigXATgCQAIABARAIIABAAIAdAIQAXAHAJAGQAGAGgCAEQAAAEgDABQAJAIAEAEQAFAKgHAHQgRASg5gfQgdAFgGAGQAHAEARAEQAgAFADALQABADgBAEQgBAIgHAGQgOANgVgGIgZgHQgbgFgQgEQgIAGgnAeQgmAeg2AbQg2Abg0gCIgDAAg");
	this.shape_117.setTransform(12.6,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:-57.2}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:-53}},{t:this.shape_89,p:{x:-52.9,y:35}},{t:this.shape_88},{t:this.shape_87,p:{x:-47,y:37.3}},{t:this.shape_86,p:{x:-52.9}}]},45).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_93,p:{x:-57.2}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:-53}},{t:this.shape_89,p:{x:-52.9,y:35}},{t:this.shape_88},{t:this.shape_87,p:{x:-47,y:37.3}},{t:this.shape_86,p:{x:-52.9}}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_93,p:{x:-57.5}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_90,p:{x:-53.3}},{t:this.shape_89,p:{x:-53.2,y:35.1}},{t:this.shape_108},{t:this.shape_87,p:{x:-47.2,y:37.4}},{t:this.shape_86,p:{x:-53.2}}]},30).wait(71));

	// Layer 9
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(55.3,33.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).wait(86));

	// Layer 3
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#440E1D").s().p("AALAFQgfgKgngLIABgFQAmALAeAKIAqAQQAEgHABgGIADABQgBAGgFAMIgrgRg");
	this.shape_118.setTransform(34.9,29.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7A233A").s().p("AgEgBIgwgPIgEAPIgDgBIAFgSQAOAEAjAMQAiAJAfANIgBADQgegNghgJg");
	this.shape_119.setTransform(34.9,28.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#601425").s().p("AALALQgfgLgngKIAFgRQAOADAjAMQAiAMAfALQgBAFgFAMIgrgRg");
	this.shape_120.setTransform(34.9,29);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#440E1D").s().p("AgBAgIgggHQAfAFAOgNQAXgSgQgeQAJAGAEAJQAGATgOASQgKALgMAAIgDAAg");
	this.shape_121.setTransform(35.5,44.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7A233A").s().p("AhBgEQADgMALgFQAQgGAQACQARACAEADIABABIAAAAQAEAAAZAKQAaAJAKASIABAEQgLgTgZgHQgZgKgDAAIgBAAQgEgDgRgCQgRgCgPAGQgLAEgDALQgEAQACAKQgGgKAGgUg");
	this.shape_122.setTransform(32,40.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#601425").s().p("AAgAvQgWgEgUgGQgXgGgLgGQgggJAKgpQADgMALgFQAQgFAQACQASACAEADIAAAAIAAAAQAEAAAZAKQAaAKAKATQAGATgOASQgKALgMAAIgFAAg");
	this.shape_123.setTransform(32,42.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAAAoIgBAAIgFgEIgCADIgDgBIACgDIgGgEIgDAEIgCgCIACgEIgGgEIgCAEIgDgDIACgDIgGgEIAAABIgDgGIACABIAFgIIgFgDIgEAEIAAgEIABgCIgCgBIAAgBIAAgBIAEABIAEgGIgGgEIABgDIAHAFIAGgIIgIgGIACgDIAHAGIAHgJIgFgEIACgCIAFADIAEgGIAAAAIAEgBIAFAEIABgFIAEABIgEAGIAGAEIAGgJIADACIgGAJIAGAEIAHgJIACACIgHAJIAHAFIAGgIIACACIgFAIIAEADIAEgGIABADIgDAFIAFADIAAgBIABAFIgBAAIgFAFIAFADIgBAEIgFgEIgGAIIAHAFIgCADIgGgFIgGAJIAGADIgDACIgFgDIgDAGIABABIgHADIAAgBIABgCIgEgDIgFAGIABABIgCAAgAgEAiIAEADIADgGIgDgEgAAHAeIAFADIAEgGIgFgDgAgNAcIAGAEIAEgGIgGgFgAAAAZIAFADIAEgGIgFgEgAgWAXIAGAEIAFgHIgHgFgAANAVIAFAEIAFgJIgEgDgAgHATIAGAEIACgGIgEgEgAggARIAHAEIAFgIIgGgEgAAGAQIAFAEIAFgJIgFgDgAgQANIAHAEIAEgGIgHgFgAgBAKIAEAEIAGgIIgGgEgAAVAKIAEAEIAFgJIgEgDgAgZAHIAHAEIAEgHIgGgEgAANAFIAFADIAGgIIgFgBgAgKAEIAHAEIADgIIgEgDgAggABIAFAEIAEgFIgFgEgAAFAAIAGAEIAGgHIgHgFgAAcAAIAEACIAFgFIgEgDgAgSgBIAGADIAFgGIgGgFgAAVgEIAFAEIAEgHIgEgDgAgDgGIAFAFIAGgJIgGgFgAgagHIAFAEIAFgIIgFgEgAAMgKIAGAEIAFgGIgGgFgAgLgMIAGAFIAFgJIgFgFgAADgRIAHAFIAEgHIgGgEgAgTgRIAFAEIAHgKIgGgDgAgDgXIAEAEIAEgGIgFgFgAgLgdIAFAEIAFgHIgGgDg");
	this.shape_124.setTransform(18.1,27.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#51111F").s().p("AgnAAQAEgjAjgEQAkAEAEAjQgEAkgkAEQgjgEgEgkg");
	this.shape_125.setTransform(18.1,27.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgtAAQAEgpApgEQAqAEAEApQgEAqgqAEQgpgEgEgqg");
	this.shape_126.setTransform(18.1,27.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAAAvIgCAAIgGgEIgCADIgDgBIACgDIgHgFIgDAFIgEgDIAEgEIgIgFIgDAEIgCgDIACgDIgIgFIgDgGIACABIAGgJIgGgFIgEAGIgBgFIACgDIgCgBIAAgBIAAgCIAEACIAFgHIgHgGIABgDIAJAGIAGgKIgJgHIACgCIAJAGIAIgLIgHgEIAEgDIAFAEIAFgHIAFgCIAAABIAGAEIABgFIAFAAIgFAHIAHAFIAHgKIAEACIgIALIAIAFIAIgMIADADIgIALIAIAGIAHgKIACADIgGAJIAFAEIAFgHIACAEIgEAFIAFADIAAgBIABAHIAAgBIgGAHIAFAEIgBAEIgGgFIgGAKIAIAGIgCADIgIgGIgHAKIAGAFIgDADIgFgEIgFAHIACABIgIADIABgDIgFgEIgFAHIABABIgDAAgAgGAoIAGAFIAEgIIgEgEgAAJAkIAFAEIAFgHIgFgEgAgQAiIAHAEIAGgIIgHgEgAAAAeIAGAEIAFgHIgGgFgAgbAbIAIAFIAGgJIgIgFgAAQAaIAFADIAHgKIgFgEgAgJAWIAIAFIADgHIgFgFgAgmAUIAIAFIAGgJIgHgFgAAHATIAGAEIAHgKIgGgEgAgTAPIAHAFIAGgIIgIgFgAgBAMIAFAFIAHgKIgHgFgAAZAMIAFAEIAGgKIgFgEgAgdAIIAHAFIAFgIIgHgFgAAQAGIAFAEIAHgKIgFgCgAgMAEIAIAFIAEgJIgFgEgAgnABIAHAFIAFgGIgHgFgAAFAAIAIAEIAHgIIgIgFgAAhAAIAFADIAGgGIgFgEgAgWgBIAHADIAHgIIgIgFgAAZgFIAFAEIAGgIIgFgEgAgDgHIAFAGIAHgLIgHgFgAgfgIIAGAFIAGgKIgGgFgAAPgNIAHAGIAGgIIgIgGgAgNgOIAHAFIAGgKIgGgGgAAEgVIAIAGIAFgIIgIgFgAgXgVIAHAFIAHgLIgGgFgAgEgcIAFAFIAFgHIgGgGgAgNgjIAGAFIAFgIIgGgEg");
	this.shape_127.setTransform(52.8,38.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#51111F").s().p("AguAAQAEgqAqgEQArAEAEAqQgEArgrAEQgqgEgEgrg");
	this.shape_128.setTransform(52.8,38.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("Ag2AAQAFgxAxgFQAyAFAFAxQgFAygyAFQgxgFgFgyg");
	this.shape_129.setTransform(52.8,38.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#440E1D").s().p("AghB8IAAgDIANAFQAFhTAOg9IAAgBQAVhYALgWIADABQgJARgZBfIAAABIAAABQgNA8gFBUIgPgGg");
	this.shape_130.setTransform(24.6,34);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#440E1D").s().p("AghCDIAAgEIAOAGQAFhkARhIQAShKAKgXIADABQgIATgUBLQgRBKgGBoIgQgGg");
	this.shape_131.setTransform(43.2,40.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7A233A").s().p("AghB/QAFhlAVhFQAThIAIgMIAOADIgBACIgLgCQgIAMgSBHQgVBEgGBlIgCgBg");
	this.shape_132.setTransform(24.6,33.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#7A233A").s().p("AghCHQAFhjAVhLQAThNAIgTIAOAFIAAABIgMgEQgIATgTBNQgVBKgFBjIgCgBg");
	this.shape_133.setTransform(43.2,40);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#631627").s().p("AghB9QAFhmAVhFQAThHAIgNIAOADQgJARgZBgIAAAAIAAABQgNA8gFBUIgPgGg");
	this.shape_134.setTransform(24.6,33.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#631627").s().p("AghCEQAFhjAVhLQAThNAIgTIAOAFQgIASgUBNQgRBJgGBoIgQgHg");
	this.shape_135.setTransform(43.2,40.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#840927").s().p("AgBgDIgBgTIAFAAIAAAWIAAAQIgEAHIAAgag");
	this.shape_136.setTransform(42.8,10.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#910A2B").s().p("ABgAeIgBgoQglgTg6gOQg5gOgGgBQgcgDgKAIIAAgCQAEgKAnABQAGAAA5APQA6ANAlAUIABAoQAAAWgCASIgFACQADgRgBgTg");
	this.shape_137.setTransform(49.2,12.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D1244D").s().p("AA2A5IABgmIABgfIgDgCIg1gUQgsgQgngFIgBAAIAAgCIAFABQAnAEArAQQAvARAHAEIACABIgBAgIAAAmQAQABAKgEQgGAFgQAAIgIgBg");
	this.shape_138.setTransform(50.7,13.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D1244D").s().p("AgNAhIAAghIAAgfQACgDAIgEIgGAFIAAAgIAAAgQAJADAOACIAAADQgOgCgNgEg");
	this.shape_139.setTransform(40.4,10);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BC1132").s().p("ABFBDIAAgnIABgfIgDgBIg1gVQgrgQgngFIgFAAIABAcIAAAfQgQgCgNgEIAAggIAAggQAEgKAnABQAGAAA5APQA6ANAlAUIABAoQAAAWgCASQgHAFgRAAIgGAAg");
	this.shape_140.setTransform(49.2,12.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("ABABJIgCAAIAAgjIAAgmQgKgDgjgNQghgNgjgHIAAAnIgNAQIAAADIgEAAIgRgDQgNgCgIgDIgCgBIAAhJIABgBQABgCAMgHQAMgGAZADQAJAAA4AMQA5AMApAaIABABIAAACQABAEABAbQABAdgEAZIAAACIgCAAQgBACgMAEQgGACgGAAQgHAAgIgCg");
	this.shape_141.setTransform(49.1,12.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAfA2IgqgKQgXgGgNgHQgkgKAKgwQAEgPAPgGQAQgHASACQASACAGAEQAFABAbAKQAbALALAVQACAGAAAIQAAARgLAOQgNANgPAAIgGAAg");
	this.shape_142.setTransform(32,42.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AA3AkIgngPQgigOgugLIgDgBIAAgDIAHgZIABgEIADABIAuAOQAoANAkANIACACIAAADQABACgJAXIgBAEg");
	this.shape_143.setTransform(34.9,29);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3F0D1A").s().p("AgcAFQAPgCAKgHQAaACAGACQgGAEgiABIgRAAg");
	this.shape_144.setTransform(32.5,13.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#631627").s().p("AgpAAQAGgDAjgBQAkABAGADQgGAEgkABQgjgBgGgEg");
	this.shape_145.setTransform(31.2,13.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3F0D1A").s().p("AAHgFQALgBAIgDIAAAMQgMAHgnAAQASgCAOgNg");
	this.shape_146.setTransform(33,14.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#51111F").s().p("AgrADIAAgMQAKAEAOABIATABIAUgBQAOgBAKgEIAAAMQgIADgYAEIgMAAQgTAAgYgHg");
	this.shape_147.setTransform(31.2,14.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgxAPIAAgBIgBAAIAAgBIAAgBIgBgBIAAgUIABgCQAEgJAUgBQATgDAHABQAJgBAUADQAUACADAJIAAABIAAAUIAAABIgBABIAAAAIgBABIAAABIgBAAQgDADgcAFIgQABQgVAAgegJg");
	this.shape_148.setTransform(31.2,14.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#661A2A").s().p("AgNAsIhKgcIABgHIBHAcIBNAfQAFhMAOhDIAHADQgQBFgEBPIhRggg");
	this.shape_149.setTransform(32.2,45.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#661A2A").s().p("AgcAXQgxgPgRgDIACgGQAXADAtAOQArAOAmATQAUhNALgdIAHADQgKAWgYBaQgpgUgwgPg");
	this.shape_150.setTransform(35,31.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#992E45").s().p("AhXBHQAFhQAOg+QARAEAzAPQAwAPAoAUIgBADQgpgTgugOIhAgSQgOA8gDBNIgGgBg");
	this.shape_151.setTransform(32.2,40.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#992E45").s().p("AheA2QAZhhAIgLQAlAKAsAOIBLAZIgBAFIhKgZQgqgNgjgJQgHAKgaBcIgEgBg");
	this.shape_152.setTransform(35,26.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#842335").s().p("AgNBGIhKgcQAFhRAOg9QARAEAzAPQAwAOAoAVQgQBCgEBRIhRgfg");
	this.shape_153.setTransform(32.2,43.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#842335").s().p("AgcAvQgxgPgRgEQAZhhAIgLQAlAKAsAOIBLAZQgKAWgYBaQgpgTgwgPg");
	this.shape_154.setTransform(35,29.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6B1A2C").s().p("AgFB8QgPgBgigaQAzgSAMhHQANhGAdhAIAEAAQgIARgVBGQgUBEgFBiIgGgDg");
	this.shape_155.setTransform(20.2,33.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#9B344A").s().p("AARB9QgQgBghgcQgjgdAChMQAEg5AlgeQAwgiAqAEQgqgCgsAgQglAegFA5QgBBNAjAcQAgAcARABIAEABIAAABIgIgCg");
	this.shape_156.setTransform(17.8,33.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#842335").s().p("AALB8QgOgBgjgcQgjgcAChMQAEg5AlgfQAcgVAbgFQAegFASACQgIARgVBGQgUBEgFBiIgIgDg");
	this.shape_157.setTransform(18.4,33.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6B1A2C").s().p("AgfCTIhAgZIAAgCIArARQAwAMAmgrQAcgfAKgqQAJgngNgkQgQgpgggaQgdgagbgNQAXAIAnAdQAqAcAVAyQANAjgKApQgJAqgcAfQggAhghAAQgKAAgLgCg");
	this.shape_158.setTransform(51.8,42.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#9B344A").s().p("AAUCUIg+gZQAFhoAUhKQAShMAIgTIADABQgJAVgRBLQgTBKgGBmIA/AZQAKACAJAAIgFABQgJAAgJgDg");
	this.shape_159.setTransform(46.5,42.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#842335").s().p("AgfCUIhAgZQAFhoAUhKQAUhMAIgTQASAFArAeQAuAdAYA2QANAjgKApQgJAqgcAfQgfAigiAAQgKAAgLgDg");
	this.shape_160.setTransform(51.8,42.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#89243E").s().p("AD5A5Qgdg9g0geQg0gegJgBIgUgHIgBAAIhgggQg8gTgjgFQgTgDgfAGQgfAGgdAWQghAbgJAvQAIgzAjgcQAcgWAggGQAfgFATACQAjAFA8ATQA6ATAmANIAAABIABAAIAUAHQAJABA0AdQA0AeAdA+QANAmgKAsQAIgpgMglg");
	this.shape_161.setTransform(36.5,32.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AB3C8IhrgqIh2gvIg9gXQgSgBglgeQglgdAChRQAFg8AnghQAdgWAfgGQAfgFATACQAkAFA7ATQA6ATAmANIABABIAVAHQAIABA0AdQA0AeAdBAQANAkgKAsQgKArgdAhQghAkgnAAQgMAAgMgDg");
	this.shape_162.setTransform(36.3,38.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#681829").s().p("ABuDIIhGgcIiBg1IhSggIgEgCQgdgHgjgfQgjgfAFhNQAIhNA3gmQBAgpBaAWIAdAIIA0AOIAdAIQADAAApAQQAoAQAvAgQAvAhAXAzQAMAcAAAiQgBBEgpAyQglApgyAAQgPAAgRgEg");
	this.shape_163.setTransform(36.5,38);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D1244D").s().p("ADACzQAhgmAIg0QAJg0gSguQgYg0gvgiQgvghgpgQQgpgQgGgBIhugeQhVgWhBAjQBCgnBaAWIBuAeQAGABApAQQApAQAwAhQAvAiAXA0QASAugIA0QgJA0ggAmQgQASgUALQAQgKANgPg");
	this.shape_164.setTransform(40.7,37);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("ABrDPIhGgcIiBg1IhSggIgEgCQgdgHglghQgmghAFhRQAJhQA6goQBCgsBeAYIBuAeQAGABApAQQApAQAvAhQAvAiAYA0QASAugIA0QgJA0ggAmQgoArg0AAQgRAAgTgEg");
	this.shape_165.setTransform(36.5,38);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#910A2B").s().p("AiNB3QBCAGA7gVQA5gUAmg4QA3hFAFhbQAIAtgKAnQgLAngNAWQgUAqgbAeQgbAegWAIQgOAGgpADIgRABQglAAgxgOg");
	this.shape_166.setTransform(64.5,48);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D1244D").s().p("AlgBUIABgIQgDg5AUhDQAUhFBUghQB8gqDLBHIABAAIA3AZQAzAXA8AqQA7ApAeA4Qggg2g7gnQg6gogxgXQgxgWgFgBIAAgBQjLhGh8ApQhUAigUBFQgUBDACA4IAAAJQgCAtAOAdQgRgeABg0g");
	this.shape_167.setTransform(42.1,24.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#BC1132").s().p("ABED9QgngNhOgfIiag+QhKgfgZgMQg9gdAEhaIAAgJQgCg4AUhFQAThFBVgiQB8gpDLBGIAAABQAFABA1AYQA1AZA9AsQA8AsAbA7QASAygLAvQgKAwgPAdQgVApgaAfQgcAegWAIQgOAFgsAEIgNAAQgoAAg3gPg");
	this.shape_168.setTransform(42.8,34.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("ABAEGQgmgNhHgcQhLgchMgeIh5gyQg9geAKhhIAAgIQgDg4AVhKQAVhKBYglQB+gnDNBKQAJACA3AZQA4AYA9AsQA/AsAaA8QASA0gNAzQgNAygQAeQgWArgbAfQgdAfgYAIQgPAGgtAEIgPAAQgoAAg3gPg");
	this.shape_169.setTransform(43,34.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#4C2922").s().p("AhPBPIACghIABg3QAAgrgEgeIA8AiQAqAYA7AbIAAAGQg5gbgogXQgqgXgQgJQAEAeAAAqQgBA6gBAaIgHgEg");
	this.shape_170.setTransform(10.6,61.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#381B14").s().p("AgKBbQAKhAABg0QACg2gBgRIAIAEIAABFQgCA2gIBCIgKgGg");
	this.shape_171.setTransform(19.7,71.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#5B3124").s().p("AgKBZQhogjiDg4QiDg5hfhEIARgBQBxBPCPAxQCPAxCRABQCUABB+hAQBHAaAlATIhRAUIiMAkQhOAVhCAUQgPgEhmgkg");
	this.shape_172.setTransform(44.8,55.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#6B3C2B").s().p("AgKBtQhogkiDg5QiDg3hfhEIBlgJQBJgGBRgIQBRgJA0gIIB+ApQBxAlCAAuQB/AsA9AeIhRAUIiMAlQhOAUhCAUQgPgEhmgjg");
	this.shape_173.setTransform(44.8,53.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#933C25").s().p("AgIAhIABghIACgjIAOAGIgDAfIgDAhIgLgCg");
	this.shape_174.setTransform(16.6,68.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAGAsQgJAAgMgFIgBgBIAEhSIAdAMIgHBMg");
	this.shape_175.setTransform(16.7,68.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#26110D").s().p("AhSgTIAAAAQAdATAhAHQAgAJAdgRQAmgjAAg6IADACQABAEgBA5QgBA2gMBIQhYgxg/hBg");
	this.shape_176.setTransform(10.8,71.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#26110D").s().p("AAZAwQhLgchegtIABgDQBLAkBIASQA5ALAlghQAmggAIgyQgBAegGAuQgEAsgLAlQgUgEhNgbg");
	this.shape_177.setTransform(34.8,84.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#4C2922").s().p("AiQBbQAKg9ACg0QABg1AAgUQBXAqBKAfQBMAdAnALIgBAJQgpgNhJgcQhHgehTgoQABATgCAzQgBAygJA8IgJgFg");
	this.shape_178.setTransform(34.8,72.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#26110D").s().p("Ah0BjQCwg0AziYIAIgCIgaBIQgSAwgMArQgRAEg6AQQg8AQguAQIACgJg");
	this.shape_179.setTransform(66.3,80.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#4C2922").s().p("AhiAkQAHgnADgkIBxgjIBZgbIgCAGIhaAbIhpAhQgBAigIAlQgHAogGAZIgIABQAGgYAJgqg");
	this.shape_180.setTransform(66,79.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#381B14").s().p("AhRAXIACgeIABg6QAAgrgEgeIA9AjQArAYA9AeQABAFgBA2QgBA5gMBHQhYgwg/hDg");
	this.shape_181.setTransform(10.8,66.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#933C25").s().p("AgIAhIABghIACgjIAOAGIgDAfIgDAiIgLgDg");
	this.shape_182.setTransform(24.1,71.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAGAsQgJAAgMgFIgBgBIAEhSIAdAMIgHBMg");
	this.shape_183.setTransform(24.1,71.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#381B14").s().p("AAYB0QhLgbhdgwQAKg8ACg2QABg3AAgTQBXApBKAfQBMAgAnALQAAARgGA3QgEA6gOAyQgTgFhOgbg");
	this.shape_184.setTransform(34.8,77.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#381B14").s().p("AhnAqQAJgrADgqIB6glIBYgbIgaBIQgSAwgMArQgRAEg6AQQg8AQguAQQAFgUAKgug");
	this.shape_185.setTransform(66.3,80.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#3D1E16").s().p("AgRBfQhtgriDg9QiEg+hYhAIABgIQBYBACDA/QCDA8BsAqQBpArASAGQAzgSBPgXQBPgXBCgSIBNgVIAOgaIAHgBIgMAVIgHAPIhOAVIiRApQhOAXg0ASQgRgGhqgrg");
	this.shape_186.setTransform(44.6,59.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#724133").s().p("ABtCFQgIgBhngkQhpgkiHg6QiHg5hihGIgBANIgBAAIACgVQBiBHCHA6QCHA5BpAkQBnAkAIABIACAAQBCgUBPgVICOglIBQgUIgFAJIhVAVIiKAkQhMAUg/ATIgBABg");
	this.shape_187.setTransform(44.6,56.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#512A1E").s().p("AgRBmQhtgriDg9QiEg+hYhAIACgVQBiBGCHA7QCHA5BpAjQBnAkAIACIACAAQBCgVBPgVICOgkIBQgUIgMAVIgHAPIhOAVIiRApQhPAXgzARQgRgFhqgrg");
	this.shape_188.setTransform(44.6,58.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("ADWDSQgGgBhSgcQhSgchng1IgBgBQhpg1hIhKIgBgBIAAgBIAChGQACg+gGgnIgCgIIAHAEIA5AgQA1AdBQAnQBYAsBQAgQBQAfAlALIADAAIAAADIgEBHQgGBAgPA4IgBADg");
	this.shape_189.setTransform(25.8,72.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AiABwIAOg6QAMg2ADgvIAAgCIACgBIBCgUIBigfIA5gQIAHgBIgDAGIgXBAQgVA5gPAyIgBADIgCAAIhJATQhEARgwATIgHACg");
	this.shape_190.setTransform(66.3,80.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#512A1E").s().p("ABzDIQhcgchpg4Qhrg3hIhUQACgRABhJQAAhDgIg0QBVA3BuA0QBsA0BfAmQBfAlAoAPQgBASgIBEQgJBEgRA+QgagFhbgcg");
	this.shape_191.setTransform(26.6,71.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#512A1E").s().p("AiFAUQAIhAACgWIAJADIABABIABgBQAygRBMgXICRgpQgMAXgcBCQgdA/gSBEIheAbQhMAWg8AUQARg7AIhCg");
	this.shape_192.setTransform(66.7,80.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgjEOQhVgVh0g5Qh0g5hhhsIAAgBIAAgBQABgIAEhFQADhIgPhCIgdgVIgCgBIACgjIAEAAIBQgHQBLgGBcgJQBdgKA6gJIABAAIABAAIB9AkQBuAfCBAuQCCAuBIAvIADACIgbAxIgBABIhJATQgCAAgaA0QgbA3ggB6IgBACIgCABIguAMIhjAbQg4AQgnANIgDAAIAAAAQgHAAhSgTg");
	this.shape_193.setTransform(44.8,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]}).wait(150));

	// Layer 1
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DDB99E").s().p("AADBXIgDgEIAFgMQARgqgUgzQgUgzglgOQARAAAPAIQAiAXAUAzQAWAxADAQQgOAXgSACIgQACIgFAAg");
	this.shape_194.setTransform(-47.5,66.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#DDB99E").s().p("Ag3BCQAvgJAXgrQAZgogGgzQAUAGACAfIAAACQgGAxgXArIgEAJIgFALQgGACgVACIgGAAQgTAAgVgMg");
	this.shape_195.setTransform(-17.6,64.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EFCCAF").s().p("AAhBXQgDgBgcgSQgZgTgkgoQgZgbAAgYQAAgNAIgLQANgQAXgDQAYgEAUAKQAkAXAVAzQAVAyADAPQgOAXgRADIgRACIgEgBg");
	this.shape_196.setTransform(-50.5,66.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#EFCCAF").s().p("Ag7A9QgBgLgBglQAAgpAJgaQAIgNAagJQAXgHAaAFQAaADAFAlIAAACQgGAxgYArIgEAJIgFALQgHADgYACIgCAAQgaAAgXgUg");
	this.shape_197.setTransform(-18.1,63.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAfBfIgBAAIAAgBQgDAAgbgTQgbgTgmgqQgqgwAZgjQAPgTAbgFQAagFAVANQA2AnAQAwQAQAyAAAIIAAACIgBABQgRAcgVADIgSACIgFgBg");
	this.shape_198.setTransform(-50.4,66.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AhBBBIgBAAIAAgCQgCgHAAgsQgBgqAKgbQAKgRAdgIQAagJAbAGQAlAKgBAnQgBAugTAkIgUAkIgCABQgEADgcACIgHAAQgbAAgagXg");
	this.shape_199.setTransform(-18.1,63.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("Ag+A6QgXgJgPgUQgPgUAGgXQAHgXAagPQANgIAZgGQAagGAlAMQA4AVAQAjQARAigCAEQAAAEgDAAQgDAAgBgDQABgFgOgeQgPgdg0gUQgkgMgYAFQgZADgMAIQgYANgGAUQgFAVAPARQAOASASAHQAdAKAqAAQAsAAAdgNQAEgBACADQABAEgDABQgfAOguAAQgsAAgdgLg");
	this.shape_200.setTransform(-50,58.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#563E29").s().p("AhPAtIgLgGQAwACAugQQAUgGAIgWQAIgYgLgbQAoAXALAcQAMAZgCADIgWARQgeANgrAAQguAAgcgKg");
	this.shape_201.setTransform(-48.2,59.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#6B5038").s().p("Ag9A1QgVgIgPgTQgOgTAFgWQAHgZAkgPQAjgPA2AQQA2AVAPAhQAPAegCADIgWARQgeAOgtAAQgrAAgdgLg");
	this.shape_202.setTransform(-50,58.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AhXA6QgCgCABgDQACgDADACQAdANAsAAQArAAAcgLQAVgJANgTQANgTgFgUQgGgWgZgPQgMgHgYgDQgZgEgjAMQg0AVgOAfQgPAhACAEQgBADgDAAQgEgBAAgDQgCgEAPgkQAOglA3gXQA7gRAtAZQAcAQAIAZQAFAYgOAVQgPAVgXAKQgeALgrAAQgvAAgfgOg");
	this.shape_203.setTransform(-20.3,57.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#563E29").s().p("AAXAPQAJgagPgQQgQgRgVgGQgYgGgbACIAJgDQA4gRAhAQQAkAQAHAbQAFAXgOAUQgPAUgVAIQgVAJgfACQAegRAUgjg");
	this.shape_204.setTransform(-16.5,57.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#6B5038").s().p("AhVA1IgWgSQgCgEAPggQAPgiA2gXQA2gQAjAQQAkAQAHAaQAFAXgOAUQgPAUgVAJQgdALgrAAQgtAAgegOg");
	this.shape_205.setTransform(-20.2,58);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#6A6D48").s().p("AjCBDQA+AAA3gUQA0gTAYgwQBHgMAygUQAxgVAPgJQAKA+ABAbQgKAIg3AZQg2AYhTAOQgeAFggAAQg7AAhCgQg");
	this.shape_206.setTransform(-29.4,50.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#6A6D48").s().p("AhWhdQAeADAmAKQAkAJAYAUQAaAbATBGQhKAkhAALQABhfgkhbg");
	this.shape_207.setTransform(-21.9,28);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#7C8259").s().p("Aj9ATQACgTAQhJQA3AdA1AOIAAAAQCMAeBmggQBmgfAZgTQALA+ABAbQgNALhJAeQhJAfhtAEIgNAAQhqAAh4hAg");
	this.shape_208.setTransform(-35.3,50.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#5A5E38").s().p("AhJAaQAKgqANgvQAXATBlAZQgQAMgSAaQgSAcgJARQgpgNgtgZg");
	this.shape_209.setTransform(-51.4,40);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#5A5E38").s().p("AglAVIAYgjQAMgRADgBQAFAGAKAWQAMAZAJAMQglgCgmgKg");
	this.shape_210.setTransform(-43.7,45.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#5A5E38").s().p("AgEAdQgUgygNgPQAkAFAmAAQgKALgMAUQgMATgEASIgDgIg");
	this.shape_211.setTransform(-38.5,42);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#5A5E38").s().p("AgzAjQAFgHAFgNIAHgPQARggAHgDQAEACARATIApAoQgtAKg0AAIgGgBg");
	this.shape_212.setTransform(-32.5,44.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#4B4C2C").s().p("AhTAeQAHgZgCgYQBFgLBLglQAKAqAIAoQgJAGgjAQQglARg1AOIghgmg");
	this.shape_213.setTransform(-19.6,40.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#5A5E38").s().p("AhCAYQgXgYgRgNQBZgEBqgyQAKAqAIAoQgJAGgkAQQgjARg2AOQgPgTgYgZg");
	this.shape_214.setTransform(-22,40.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#404224").s().p("AgXAiIgNgbQgPgegGAAQgIgBgOATQgOARgOAXIgKgDQASggASgXQARgZAHAAQAIADAKAZQAMAXAFAPQAJAaADgGIADAAIAAgDQAFgXAPgZQAQgbAJgDQAGABAYAZQAXAXAbAgIgHACIAAgBIgmgnQgYgXgKgEQgJAAgKARIgMAUIgIARQgEASgGAEQgFgBgIgOg");
	this.shape_215.setTransform(-37.5,43.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#7C8259").s().p("AiOBNQg7gVgNgKQAXhPAgggQAUgQAogHQAogHAigBIAjgBQAHgBA5AIQA5AIAnAdQAaAbATBGQhzA2hcAAQhbAAg7gVg");
	this.shape_216.setTransform(-34.8,28.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AkDCSIgCgCIABgCQAAgJAMg8QALg9AUhFIABgCIAAAAQAYhUAhgjQAkgYBBgFQA/gFALABQAJgBA6AJQA6AIAoAeQAXAWARA5QARA5ALA6IAAACQAMBFABAeIAAACIgCABQgDAGhKAgQhJAhh0AIIgTAAQhtAAh9hCg");
	this.shape_217.setTransform(-35.3,38.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#6B5038").s().p("AiIAwQhRgNgLgNQgHgKAAgMQADgfAGgQQBzAvBhgCQBfgDBBgUQBAgVAQgJQAHANADAaQABAQgNAGQhLArhnAGQggABgcAAQhCAAg4gIg");
	this.shape_218.setTransform(-35.9,58.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AiVA4QhKgRgMgPQgMgWAGgaQAHgcACgEIACgDIADABQB6AyBmgFQBkgFA/gWQA+gXADgDIADgCIACADQAEAFAIAbQAHAcgWAPQhjA1hnAFIgtABQhJAAg4gNg");
	this.shape_219.setTransform(-35.8,58.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#84A7C1").s().p("AgNAzQAagKAFgQQACgFgDgDQgGgEgFAAIgGABIACgGQACgBAFgOQAFgQAAgNIgDgDQgHgFgPABQgRAAgLACQAJgDAKgDQALgCAPAAQASgBAJAFQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQACANgGAQIgGAPIgDAGIAGgBQAFgBAHAFQACACgBAGQgMAWgpAKg");
	this.shape_220.setTransform(-42,75.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#A4C2DD").s().p("AgTAzQgTgCgHgIIgBgEQgBgDAFgHIADgEIgFgCQgPgBgHgPIAAgBQgBgJASgQQASgQAlgLQAKgCASAAQASgBAIAFQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABANgFAQIgHAPIgCAGIAGgBQAFgBAGAFQACACgBAGQgLAWgrAKQgKACgJAAIgNgBg");
	this.shape_221.setTransform(-44.7,75.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#84A7C1").s().p("AgoAmQApgCAJgHQACgDAAgDIAAgBQgEgJgGgCIgFgDIAFgEQAMgEAEgLIAAAAQgBgIgSgHQgTgHgWgEIAUgBQAWAEAUAHQAVAHACAJIAAAAQgEALgNAEIgGAEIAHADQAGACAEAJIAAABQAAADgCADQgEAFgXADQgNACgRAAIgSgBg");
	this.shape_222.setTransform(-17,73.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A4C2DD").s().p("AgTAzQgTgCgHgIIgBgEQgBgDAFgHIADgEIgFgCQgPgBgHgPIAAgBQgBgJASgQQASgQAlgLQAKgCASAAQASgBAIAFQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABANgFAQIgHAPIgCAGIAGgBQAFgBAGAFQACACgBAGQgLAWgrAKQgKACgJAAIgNgBg");
	this.shape_223.setTransform(-44.7,75.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#A4C2DD").s().p("AgbAmQgggFgBgGIgBgEQAGgQAHgDIAGgEIgGAAQgPgFgEgKIAAgCQAKgTA6gCQAWAEAWAHQAWAHACAJIAAAAQgFALgMAEIgGAEIAGADQAGACAEAJIAAABQABADgCADQgGAFgbADQgPACgOAAIgagBg");
	this.shape_224.setTransform(-19.6,73.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgTA7QgWgCgKgMQgDgDAAgFQAAgEADgGQgQgDgHgTIAAgBQAAgMATgSQAUgSAngLIAAAAIAbgDQAVgBANAHQAEADABAFIAAAFQgDAYgHAPQAGAAAGAFQADAEAAAGIgBAFQgEAOgSAJQgRAKgVAEQgJACgKAAIgOAAg");
	this.shape_225.setTransform(-44.6,75.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgcAtQghgEgGgLIgBgHQACgOAJgHQgPgDgDgOIAAgEQAHgOAXgGQAXgGAYAAIAAAAQANABAdAIQAdAJADAQIAAABQgEALgMAHQAHADADAJIAAADQAAAFgDAFQgJAJgeADQgRABgOAAIgZgBg");
	this.shape_226.setTransform(-19.6,73.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#003060").s().p("AgyAGQAsAAAjgLQAIAAAHgHIAHAKQgjANgXACQgYAAgTgHg");
	this.shape_227.setTransform(-46.2,88.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#3977B5").s().p("AgKAAIAKgLQAHAIAEAIIgOAHIgHgMg");
	this.shape_228.setTransform(-40,86.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#003060").s().p("AgUAWIAGgIQALgbgQgbIABAAQAGAFANARQAPASAFAZIgdARQgFgMgHgIg");
	this.shape_229.setTransform(-37.3,82.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#063E8E").s().p("Ag9AOQgDgFAAgFQAAgEAFgHQALgQAigPIAAAAQAEABAbAPQAeAQASAcQgiAPgaACQgxgCgRgXg");
	this.shape_230.setTransform(-47.6,85.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#4684CE").s().p("AgHgGQgYgPgOgGIARgHQADABAaAPQAcAQARAdIgQAIQgOgbgXgOg");
	this.shape_231.setTransform(-43.6,84.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#063E8E").s().p("AgNAAQgXgOgPgGQAwgRAOgDQAGAFAPARQAOASAGAZIgfARQgNgbgVgPg");
	this.shape_232.setTransform(-40.4,82.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AhDA5QgVgHgKgPQgIgJAKgVQAMgPAjgQQAjgQAegKIAlgLIACAAIABABQAEACASAVQATAUAGAeIAAADIgCABQgGAFgqAVQgrAUghADQgWAAgWgHg");
	this.shape_233.setTransform(-44.6,84);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#3977B5").s().p("AgMAGIAGgMIATAAIgHANIgSgBg");
	this.shape_234.setTransform(-18.4,82.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#003060").s().p("AgTACIgCgJQAVACAVACIgFALQgagDgJgDg");
	this.shape_235.setTransform(-22.1,82.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#003060").s().p("AgyAbIAHgRQAugEAbggQATAaACAKQguARgrAAIgMAAg");
	this.shape_236.setTransform(-11.7,80.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#4684CE").s().p("AglAnQAEgMARgbQAQgcAZgMIAAAAIANAFQgZAPgNAYQgOAagDALIgUgCg");
	this.shape_237.setTransform(-15.9,79.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#063E8E").s().p("AguAkQgCgGAAgHQAEglAGgSQAxgOAmAHQgbARgPAbQgOAdgCAIQgdgDgIgDg");
	this.shape_238.setTransform(-19.4,79);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#063E8E").s().p("AgyAkQAEgNAPgXQAOgYAWgLIADABQAWAOAKARQAKAPABAIQgtAQgqAAIgOAAg");
	this.shape_239.setTransform(-11.7,79.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgaAzQg6gGgHgDIgCgBIAAgCQgFgWAGgYIAHgfIABgCIACgBQBSgWAwAeQAcATAKATQAKAVAAACIAAADIgCACQg0ATguAAIgWgBg");
	this.shape_240.setTransform(-15.4,79.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#9DBFE0").s().p("Ah0AlQh1gHgwghQgRgOADgTQACALAMAJQAwAhB1AHQB0AHBvgJQBwgJAegNQAqgVAAgSQADAGgGAPQgGAQghAPQgeANhwAJQg+AFg/AAQgyAAg0gDg");
	this.shape_241.setTransform(-34.6,56.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#84A6CE").s().p("AhzA4Qh2gGgwgjQgTgPAGgUQAbgWBGgIQBFgHA/gBIBDAAIBBAAQA7AABFAHQBEAHAgAUIAAACQADACgEARQgDAPglAVQgfAMhwAJQg+AFg/AAQgyAAgzgDg");
	this.shape_242.setTransform(-34.7,55.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#346BAD").s().p("AhZCYIg2AAQA0gEA0gTQBNgeAqg9QApg8gchbQAVgXgDgPQATAZALA6QALA5gYA6QgvBpimAAIgEAAg");
	this.shape_243.setTransform(-15.3,68.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#6FA1DD").s().p("Akxg5QABARAQANQAxAiB4AHQB3AHBvgJQBxgJAfgLQAdgPAJgPQAKgQgBgKQAdAnAEBYQgIhMgZgiQABAKgKAPQgJAQgdANQgfANhxAIQhwAKh2gIQh4gHgxghQgQgOgBgRQgXAkgGBGQAChRAbgpg");
	this.shape_244.setTransform(-34.3,60);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#477CC9").s().p("ABkCYIjGAAQirABgxhqQgWg2AJg3QAIg2ATgcQAAARAQANQAxAkB3AHQB4AHBvgJQBxgJAfgNQAegPAJgPQAJgQgBgKQATAZALA6QALA5gXA6QgwBpioAAIgEAAg");
	this.shape_245.setTransform(-34.4,68.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AkJCSQg3gkgPgpQgYg/AQg8QAQg+AZgZIAAAAQAbgYBFgIQBFgJBBAAIBIAAIBJAAQBAAABFAJQBHAIAaAYQAXAZASA8QAQA7gXA/QgQAog4AkQg5AjhtABIjIAFQhuAAg2glg");
	this.shape_246.setTransform(-34.3,66.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#6A6D47").s().p("AihBEQA7gLA1gkQAcgRAVgZIAggGIACAAIAFgCQA6gOAegOIADAAIABgBIAXgLQAHAtABAVQgQALhYAjQhFAbhhAAQgaAAgbgCg");
	this.shape_247.setTransform(-26.3,52.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#4B4C2C").s().p("AAAgEIAIAGIgPAEIAHgKg");
	this.shape_248.setTransform(-24.8,48.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#4B4C2C").s().p("AgSAnQASgnAGgpIANgCQgHAOgMAmIgNAkIgFgGg");
	this.shape_249.setTransform(-21.6,41.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#6A6D47").s().p("Ag7hUIAMADQApALARASQAXAVAXBPIADAOQgNAGgsAMIgBAAIgTAFQANheg3hLg");
	this.shape_250.setTransform(-19,28);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#404224").s().p("AhSAuQgMgRgIgQQgOgagFADQgGACgMATQgMAUgNAYIgMgDQASghAQgZQARgaAGgDQADACAHANIAOAVQAZAwAJgBQAKAAAOgmQAHgPAJgRQAJgQAHgCQAJACARAVQARASALARQANARACABIACABIACgBQAEACAPgqIANgkQAHgUAEgDIABAAQAGACATAYQATAYAVAbIgNAGQgLgTgNgQQgOgTgKABQgHAAgQAmIgKAaQgHAOgFAFIgEABQgMgIgTgYQgcghgLgBQgLACgOAgQgIAQgIANQgJAPgIABQgKgBgLgRg");
	this.shape_251.setTransform(-29.8,43.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#7C8259").s().p("Aj9AHIANhIQBvAuBeAEQBcAEBEgRIABAAQADAAACgBQA6gOAfgOIACgBIACgBIAWgLQAHAuABAVQgNAIhJAfQhJAehtAFIgNAAQhqAAh4hAg");
	this.shape_252.setTransform(-35.5,52.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#4B4C2C").s().p("AgSgBQALgbAHgIQAJAEAcAtQgcAMgtAMQAIgOAKgYg");
	this.shape_253.setTransform(-17.8,44.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#5A5E38").s().p("AgagEQALgZAIgGQAFAAAJALIATAVQARATAKAJQgvAKg6ACQAOgQAMgZg");
	this.shape_254.setTransform(-29.3,46.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#5A5E38").s().p("AgmAZQAYgsALgNIAKAUQAPAbARASQgmAAgngIg");
	this.shape_255.setTransform(-41.6,46.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#5A5E38").s().p("AhSAYQAIgmALgtQBGAcBMAEQgLAMgPAXIgeA0Qg0gLg5gZg");
	this.shape_256.setTransform(-51.1,42.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#5A5E38").s().p("AgHAYIgQgYQgPgbgHgJQAuABAtgFQgNASgNAcQgKAbgHAHQgDgCgHgOg");
	this.shape_257.setTransform(-36.4,43.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#5A5E38").s().p("AADAeQgbgmgWgRQA1gIAogKQgHAOgOAmQgHAYgGAMIgKgPg");
	this.shape_258.setTransform(-24.4,41.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#4B4C2C").s().p("AAAAEQgSgWgOgMQAjgLAMgEQALAuAHArIgEACIgdgqg");
	this.shape_259.setTransform(-14.3,39.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#7C8259").s().p("AjcBEQAMguAQgkQAQgnASgRQAVgQAogGQAogHAhgBIAkgBIAgACQAfADAlAKQApALATARQAXAWAWBPIAEAOQgNAGgsALIgCABQhFAUhoAGIgfABQhbAAhXgig");
	this.shape_260.setTransform(-35.1,28.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AkDCQIgCgCIABgCIANhMQANhBAWhKQAXhKAegfQAkgYBBgFQA/gFALABIAhADQAfADAmAKQAqALAVATQAZAWAXBUIAEAQIABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAfB6gDAvIAAACIgCABQgEAGhQAjQhQAjh0AHIgVAAQhtAAhthGg");
	this.shape_261.setTransform(-35.5,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194}]}).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194}]},45).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,-61.7,178.9,157.8);


// stage content:



(lib.listenCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.listen();
	this.instance.setTransform(96.9,80.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(111.7,118.9,178.9,157.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;