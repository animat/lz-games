(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/_drip.mp3", id:"_drip"},
		{src:"sounds/_spring.mp3", id:"_spring"}
	]
};



// symbols:



(lib.splash = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D80E6").s().p("AicDEQgDgBgDACIgEgDQgEgBgEACIgHADIgXgNQgLgvArgSQARgHATADQAQgwAjglIABgLQACgQAJgJIAGgHQgNgRAIgWQAMgeAUgcIAPgXQARgdAbAJIArARQAsASAwALIA2gVIADAEIAAAAQAVAUALAdIAEANQADAZgWAVQg4AphGANIABAAIgWADQgDAAgCACQgCACgBADQgXBPhCAuIAAAAIgRALIgPAHQgbgBgbAJIgFACQgXAAgagGgAjvhaQgIgKABgNQAAgMAFgJIAJAAIAAAAQBKgGATgjIAAABQAGgJABgLIABgGIAJgBQApAAADAsQAAAVgWAdQgeAmgtAAQgxAAgPgVg");
	this.shape.setTransform(4.3,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("AjMERQgSgLACgnQBFhIgZhIIgCgEQhqhfgLgnQgCgLAJgDQASgEAoAJIACAAIAdgBQgEAJAAAMQgCANAIAKQAQAVAwAAQAtAAAegmQAXgdAAgVQgEgsgpAAIgIABQABgNgEgQQAOhTAggWQAggSAwAnQAmB6AvgLQAvgLA4gpQBCAOAHAXQADAYg7AnQgDACgBADQgBACABADQAAADADACIAMAMIg3AVQgvgLgsgSIgrgRQgegJgRAdIgPAXQgSAcgLAcQgIAWANARIgHAHQgIALgCAQIgBALQgkAlgPAwQgTgDgSAHQgrASAMAvIAXANQgeAMgTAAQgKAAgHgCgAhAELIAEgCQAbgJAcABQgbAKgfAAIgBAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AjUEjQgggOAEg7QABgDACgDQA9g+gSg+QhuhjgKgqQgIgeAdgIQAUgHAuAKIAkgBQA9gFARgaIAAAAQADgFACgHQACgMgFgQIAAgEQAQhhAogYQApgcA/AyIACAEQAiBLApAOQAnALAvgvIAEgDIAFAAQBZARAFAkQAKAhhAAsIAHAHIAAAAQAYAXAMAiIAAAAIAFAPIAAAAQAFAjgeAcIgBABQg7AvhLANIgBAAIgPACQgaBShHAwIgSAMIgBABQg5AdhOgRQgDgBgCgCQgnASgaAAQgOAAgKgFgAkghIQgJADACAKQALAnBqBfIACAFQAZBIhFBHQgCAnASALQAWAJAsgTIAHgDQAEgCAEACIADACQADgBAEAAQAZAGAYAAQAfAAAcgKIANgGIARgLIAAgBQBEgtAXhQQABgCACgCQACgCADgBIAWgDIgBAAQBGgMA4gsQAVgUgDgaIgDgKQgLgdgVgVIAAAAIgDgDIgMgMQgDgCAAgDQgBgDABgDQABgDADgCQA7gmgDgZQgHgXhCgOQg4ApgvALQgvAMgmh7QgwgmggASQggAVgOBTQAEAQgBAOIgBAGQgCAKgFAJIAAAAQgTAihKAGIgBAAIgJABIgdAAIgCAAQgagGgRAAQgIAAgHACg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-29.7,63.4,59.4);


(lib.droplet = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D80E6").s().p("Ag2CMQifgahrhHQhPgvgTgrIgHgCIAHABQgKgWADgUQACgWAOgQQALgPATgKQAFgEAJgCQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAEgCIACgBQAIgCAKgBQDLDyC4gjQAvgLgHAlQgeAXA2AFQBXAOBBg2QBKgpAZgrIACAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAQBQAzgZAsIAAABQgbBOiSAVIgpAAQh9AAiIgbg");
	this.shape.setTransform(32.8,11.8,1.385,0.965,0,0,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("Ag5CfQiugdh3hMQiAhKANhFQALhTCMgSQCBAIC2AmQCygCCSBEQCkBWgUBKIAAABQgfBXiiAVIgTAAQiWAAiggggAmRgpQATApBPAxQBqBHCgAbQCeAfCPgFQCTgVAbhOIAAAAQAZgthRgyQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCABQgggagpgUQiEg/ikABQimgbh1gKQgoAAgbALIgCAAIgEACQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQgJACgEAEQgTAKgMAQQgNAPgCAWQgEAVAKAVIgGgBIAHACg");
	this.shape_1.setTransform(30.5,11.1,1.385,0.965,0,0,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABIAVQgRgGgCgFQgCgHAQgDQANgEAYABQAVgCASAEQAQABADAHQABAHgOAGQgQAEgVACQgXgBgRgEgAhoAGQgYgGgQgEQgRgIAAgEQgCgGARABQAPAAAXAGQAWADAQAHQARAFABAEQABAFgQAAQgRAAgUgDgAgdgJQgMgCgHgDQgKgEABgCQgCgEAIAAQAGgBANABQALACAIADQAKADgBADQABACgHACIgKABIgJgBg");
	this.shape_2.setTransform(25.3,0.8,1.385,0.965,0,0,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699FF").s().p("ABtCFQg1gFAdgXQAIglgvALQi5AjjLjyQgJABgIACQAbgKAnAAQB2AKCnAaQCjgBCEA/QApAUAgAYQgYAthLApQgzArhBAAQgSAAgSgDgAAJhHQgOAEADAHQABAFAPAGQARADAXABQAVgCAQgEQAPgGgCgGQgDgIgQgDQgSgDgVABIgCAAQgWAAgNAFgAjahZQgBAFASAHQAPAGAYAGQAVADARABQAPgBAAgEQgBgGgRgFQgRgIgWgDQgXgGgPABIgEgBQgMAAACAFgAhzhdQAAACAJAFQAHADANACQAKABAIgCQAHgBgBgDQABgDgKgDQgIgDgLgBQgNgCgGACIAAAAQgIAAACADg");
	this.shape_3.setTransform(33.3,8.1,1.385,0.965,0,0,2.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.2,-8.9,129.6,39.9);


(lib.drip = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D80E6").s().p("AgfBQIAAAAQgPgfAaguQAbgxABgkQABgbAFgBQAGABABAbQABAjALAwQAKAvgLAiIAAgBQgKAdgUABQgSgBgPgeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AADB+QgHAAgJgDQgRgJgOgbIAAAAQgUgmAfgzQAbgwABghQABgTAEgLQADgNAMABQAKgBAGANQAEALABATQABAiAKAxQAMAygNAkIAAABQgJAbgRAJQgIADgIAAIgBAAgAAIhSQgBAkgbAxQgaAuAPAfIAAAAQAPAeATABQATgBAKgcIAAAAQALgigKgvQgLgwgBgjQgBgbgFgBQgGABgBAbg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-12.6,10.7,25.3);


(lib.vine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50FF64").s().p("AglA8IgDgCIAAAAQgGgZAGgbIAAgBQAHghAYgTQALgLASgGIAUAIIAAAAIAEACQgWARgJAKQgQAXgMAWQgCAFgKAqIgKgFg");
	this.shape.setTransform(-61.8,80.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B514").s().p("Ao6HzQAWgPAtgTQBmgrAVgUQA7g1AUgVQAggfAfgpQAqg4AfhcIAxiQQAUguAIhoQAHheAfgyQAyhWB0g1QCKhADDAAQAeAAAYACQA9AXAHAiQhEghhLAIQgqADgpAHQhpAShiAtQgyAWgqAkQgMAKgLALQgaAagOAjQgUAtgDAyIAAAFQgEBZgZBWQgtCbhcCIQg8BahYBAQhgBGh2AeIgGgjgAn3CuIAWgKIA7gcQAQgbAAgdQAAgDgJgOQgIgMgCgLIBDAeIAEACIAAABIAAgBIAlARQgIAJgIAIQgPAOgQAMIhdA4IgHADIAAAAQgWAKgYAIg");
	this.shape_1.setTransform(8.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B514").s().p("AgRN+QAZgsACgrIAmAEIAOACQAxAHAxAJQAVAEATABIAAAHQgDAcgaANQgPAHgQADIgQACgAhuL/QA+goAOgLQAdgXBIhkQBRhvBIiKQAuhXAbiZQAUhrAEhiIABAHIAMByIAAAGIAAADQAAAbgEAdQgEAZgGAXQgDANgEAKIgxCEQhACphlCWQhGBnhqA9IgdgEgAivgWIgbgPIgBgBQgZgOgTgUQASAGAIAAQArAAAKgZIADgYIgEgMIB0AnIgpBcQgrgIgmgSgAg3n+IgHgBQhVgGhUgNQgxgHgxgKQAEgSAWAAQAGAAA2ATQA1ATA2AAQA0AAAIhBQAAgNgLgLQgIgHgCgIIAoAAIAZgBQAngBArgIQBhgTgBBrQgUATgbAIQg6ASg5AAQgTAAgUgCgAATtgQAAgLgGgSIA3AIICNAVIgBALQgDAcgaANQgPAHgQADQgmAFgnACIgOgEIgBAEIgGABIg9ABQAegiAAglg");
	this.shape_2.setTransform(-12.9,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008133").s().p("ACZMNIgDgBIhNgHIAOgGQAQgIAOgQIAYgZQAogiAehAQAihIAnh9QAZhPAOh6IASgsIAEAqIAAAAQAJCHgjCFIgQA+IgDAIIgQAlIAGAEQgMAtgKAtQgJApgOAnQgFAQgJANQgkgMgqgFgAk2K0IgQgHIgUgJIAIgEIBXgmQBKgnAsglQAmghAngtIA8hMQA6hDAwhWIBNibQA9h5Ani5IAOhlIAAAPIgBAaIgDAZQgDAegBAfQgCAvgKApQgWBagjBRQhUDNiCCxQh1Chi1BUIgWgKgAgoh5Qg+gHgxgjIgTgQIgJgIIgBgBIgHgHIgGgGIAIgEQATgMAMgcQAHgRAAgYIgBgZQAcAJAcAHQA1AOA1AEIgmCdIgQgBgAhXk4Ig/gZIAAAAIgIgEIhzgzQAGgDAKAAIAwAKQBaAAAHhpIAAgZIDfAJIhbDRIgUABQgtAAgqgQgAiEqYIhCgBQApgOAYgCQAZgCAagLQA9gmAJgNQAJgMAIgoIA9AAIgGAAIBvACIAAAYIgCAIQgEAVgLATQgUAhgoAIQghAGgiAEIgnAFQgsAEg4AAIgUgBg");
	this.shape_3.setTransform(-15.1,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4FD082").s().p("ABdM2IgIgBQBAgoAyg6QAtg1Akg8QAthJAkhOIAzh6QgLAtguB/QgqBzhpB6QgsAygkAeIgjgEgAk0J+IAGgNQAmhIBKgfIAkgJQAbgIAagLQAugUArgeQAmgaAhghIAOgOQAkgkAggrQAyhEAlhMQBKiWALinQABgWAEgVQALg5AdgxIgJAbQgYBWABAzQACA6gaBQIg1CIQgjBZgdAyQgvBQhEA5IgdAWQgbAjgOAKQgqAbiyBPQgQAKg9A3IgPANIAEgJgAiajUQgogkgpgiIgCgEIAFhEIAdARIAEADIAAACQAAAzBBBOIAdAkIgxgtgAj0l2QgQgIgNgLQgQgOgMgSIgBgBQgegwADg3IAOADIAJAZQAbBPAFAJIAlAqIgHgDgAlTqAIgTgHIgGgEIgCAAIgBgBIgCgBQgPgZgMgbIgEgIIgFgNQgEgKgBgJQgDgWAKgWQAIgSAKgSQAVAKAWAJIgKAWQgUArAAALIAoBcIgHgCg");
	this.shape_4.setTransform(-26.4,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#199A4C").s().p("ABhMuQAjgeAsgzQBph5AqhzQAuh/ALgtIAYg6QgOB7gZBPQgmB9giBIQgeA/gpAiIgXAaQgOAQgQAHIgPAHIg5gFgAllKuQADgaALgZIAPgOQA9g3APgJQCyhQAqgaQARgKAYgkIAdgWQBFg5AuhQQAdgxAjhaIA1iIQAahPgBg7QgBgzAXhWIAKgaQAKgRAMgPIAFAFQAMASAHAXQAJAZABAaIgOBlQgnC3g9B7IhOCbQgwBWg6BDIg+BLQgkAugnAgQgsAlhJAoIhXAmIgIAEQgugVgvgPgAFuKBIAQglIADgJIgOAxgAiJi0IgdgkQhBhNAAg0IABgCQBOA1BVAdIACAZQAAAXgHARQgMAcgTAMIgJAFIAHAGIgggfgAivleQgKAAgGAEIhNglIglgrQgGgJgahPIgJgYID4BCIBDADIAAAZQgGBohbAAgAjCpwQhLgGhHgOQgPgDgPgFIAGACIgnhcQAAgMAUgqIAJgWQA8AYA9ANQBDAOBDAKIAVADIC5ACQgKAogJAMQgKAOg7AmQgZAKgZADQgZACgoANIgLABQgXAAgsgFg");
	this.shape_5.setTransform(-23.2,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19CE2D").s().p("AkZO7QiwgRidhJQAKgqACgFQAMgYASgXQAJgKAWgRIAsARIBZAlQAUAJAVAHQBCAZBGAJQBIAMBKAJQgDArgbAsgAjSM9IiMgiQBsg5CQiUQApgyArhVQAwhjAXghQA+haAuioQAbheALhRQALAnAHAnIgCgHQgDBggUBtQgcCZguBXQhHCKhPBvQhLBkgdAXQgNALg/AoIgCAAgAnNHbQgMhSAYhPQAPgwAfgeIgDADQBcgQBchUQCJh8AYi/QAPhyA6hvQAfg5BzhGIAWgMQBggoByADQAiABAhAEQBEAIBBAUIAZAIQgYgCgeAAQjDAAiKBAQh0A1g0BWQgfAygHBeQgIBogSAuIgxCQQgfBcgqA4QgfApggAfQgUAVg7A1QgVAUhmArQgtATgWAPIgDgTgAl9B/QAEgIABgIQAGgjAYgRQANgKAFgPIgFAFIAJgJIAMAGQABAKAIAMQAJAOAAADQAAAdgQAbIg7AcIgWALgAjyBDIgEgCIAEACIAAABgAlYgKQgagZgQgiIAEAIQAGgqAQgrIBUBOIAKADIADAMIgCAYQgLAZgrAAQgHAAgSgGgAlVnkQg1gTgGAAQgWAAgEASIgpgKIgFgEIg9g7IgTglQBeAVBjADQBRACBTAAQADAIAHAHQALALAAANQgIBBgzAAQg3AAg1gTgAjTrfQjRgIi4hVIANAFQgFgVAAgMQAAgqApgnIASgSIAUAJIAZALIBcAnQBFAdBKAKICvAaQAFASAAALQAAAlgfAiQgzgBg0gDgAgmrhIANAEIgPAAIACgEg");
	this.shape_6.setTransform(-3.1,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#50FF64").s().p("AijNqIgGgCQBKghA/gyQAZgVAVgUQApgnAjgqQAqgzAmg3QAigzAdg3QBTiXA6igQAjheABhjIAHAYQgLBOgaBhQguCog/BaQgWAhgyBjQgrBVgqAyQiOCUhsA5gAi8FBIA2giIAEgCIABAAQBIgUA2gzQAXgZARgaQAVgfANgnQAchPAQhRQAEgYAFgUIAHgWQAlh2A+hoQAMgEAHgGIARgNQASgPASgNIBZgxIADgBIgWANQhyBGggA5Qg8BugPBzQgYC+iGB9QhdBThbARIADgDgAibCeIAkgiIAFgFQgEAOgOALQgXARgGAiQgCAIgEAJgAisANIgEgJQgVguASgzIAiAgQgRAqgFApIgFgJgAkVmhQhTgXghhOQACgFAEAAIAxANIAUAlIA9A6IAEAFIgYgHgAmGroIgVgKIgBgFQgNg3AhgkQAPgRAagMIABAAIAbAJIgSASQgpAnAAAqQAAAMAFAVIgNgGg");
	this.shape_7.setTransform(-24.6,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAmPfIl5gBIgCAAIgVgDQhDgKhDgOQhQgRhgg2QgEABgEgBQgFgBgCgFQgWgeAFgqQADgeAQgZQAHgLAKgKQAVgVAagJQAQhbBHg/IABAAIAQgNQgWhbAPhdQALhFAsg5IAAAAIAKgMQgKhPAmhLQALgVARgSQgLgfgigqIAAAAQgTgXgBgiQgCgnAMgkQg3gcgRg4QgLgiAJghQhFglgXhQIAAABQgKgjAJghQgogmgEgyQgCgGADgGQgIgegOgfIAAgBIgDgHIAAAAIgFgLIAAAAQgGgMgCgMQgGgdANgeIAAAAIAQghQgSgfAFgnQADgeAQgZQAHgLAKgKQAYgYAdgIIAHgCIAFAAIAHACIgBAAQBAATA+AdIgBAAIARAIIAAAAQBKAjBRAQIgBAAQBCALBDAIQBVAJBTAHIABAAQA4AHAvATQAEACADAEQACAFgBAEQgFAggTAhQgMAUgTAKIgBAAIgFACIgCAWIAAAAIgCAIIAAAAQgLAxgnAjQAjAbAJAoQCnhXDNARIAGABQBIAEBHAUIAAAAQAyAPAmAhQAqAkAIA1IAAABQADAQgJANIAAABQgKAQgSgKIAAAAQgIgEgCgGIgBgBIgDgLIAAgBQg+g1hXALIgBAAQgpADgpAHIAAAAQg5AKg4ASQhGAXg+AmIAAAAQgRAMgRANQAuBDADBTIAAABIAAAIQAAAzANAyQAKAoAHAnQAMBIgGBHQgEAsgQApQAdBtgRBzQgLBPgUBOIgaBlQgRBCgZBDIAAgBQgMAgAFAZQABAEgCADQgBAEgDADQgEACgDAAIgCABQgHATgLATIAAAAQgMAUgTAKIgBAAIgFACIAAAAIgEACQgEADgFAAIAAAAgApzL2QgYAUgIAiIAAACQgFAaAFAZIABABIACABIALAFQCdBKCwAQICmABICPAAIAOgCQAQgCAPgHQAagNADgdIABgHQgUgBgVgDQgvgKgxgHIgOgBIgmgFQhJgJhJgLQhGgKhCgZQgVgHgUgIIhYgmIgtgRIgDgCIgBAAIgUgHQgRAGgNAKgACsEwIgYA5IgzB6QgkBOgtBJQgiA8gtA1QgxA6hBAoIAIABIAjAEIA6AFIBMAHIADABQApAFAlAMQAIgNAFgQQAOgnAJgpQAKgtAMgtIANgxIAQg+QAjiFgJiHIAAAAIgEgqgACABCQg6ChhRCXQgdA3giAzQgmA3gqAzQgjAqgpAmQgXAVgZAVQg/AyhJAgIAFACIAbAHICMAhIADAAIAeAFQBrg+BGhmQBjiWBAiqIAxiEQAEgKADgMQAGgYAEgZQAEgcAAgcIAAgCIAAgHIgMhyQgHgngLgnIgHgXQgBBlgjBbgABfkmQgeAxgLA5QgEAVgBAWQgLClhICYQglBMgyBEQgfArglAkIgOAOQghAhgoAaQgrAeguAUQgaALgbAIIgkAJQhJAfgmBIIgHANIgEAJQgKAagEAaQAvAPAuAUIAUAJIAQAHIAWAKQC1hUB3ihQCCixBSjNQAjhTAWhYQAKgpACgvQABgfADgeIADgZIABgaIAAgPQgBgagIgZQgHgWgNgSIgFgGQgMAQgJAQgACUoVIgDABIhZAxQgSANgSAPIgRANQgFAGgMAEQg+BnglB2IgGAXQgGAUgEAYQgQBTgcBNQgNAmgVAgQgRAagZAZQg2AzhIAUIgBAAIgDABIg3AjQggAegPAwQgYBOANBSIADAUIAFAjQB2gfBghFQBZhBA7hZQBciJAribQAZhWAEhZIABgEQADgzAUgtQAPgiAagbQALgLANgKQAqgjAxgWQBjgtBogTQApgHAqgDQBMgHBDAgQgHghg9gYIgYgIQhCgUhEgIQghgDghgBIgRgBQhpAAhZAlgAltAuIgkAjIgMA2IgJAqIgIAiQAYgIAXgKIAAAAIAHgDIBdg4QAQgMAOgNQAJgIAHgKIgkgQIgFgCIhCgeIgMgFgAmmhHIAEAJQARAiAZAaQAUARAYAPIABAAIAcAPQAmATAqAJIAphbIh0goIgJgDIhUhOIgigfQgSAzAVAwgAn0kGIABAEQAqAiAoAkIAwAtIAfAeIAHAHIACABIAIAIIAUAQQAwAjA+AHIAQABIAoidQg3gEg1gOQgcgHgcgJQhVgdhPg0IgEgDIgdgRgAo2mSIABABQAMATARANQANALAPAIIAHADIBNAlIBzAzIAIAEIAAAAIA/AZQA0AUA5gFIBbjRIjhgJIhEgDIj4hCIgOgDQgDA3AeAwgAp/pTQAhBOBTAXIAYAGIAqAKQAwALAxAHQBUAMBVAHIAHAAQBQAIBMgXQAbgIASgUQABhrhfAUQgrAHgpACIgZAAIgoAAQhTAAhSgCQhigDhegVIgygMIAAAAQgEAAgCAFgAkbpGQBEABA0gFIAqgEQAhgEAhgGQAogIASghQALgTAEgVIACgIQACgMgBgMIgBAAIhsgCIAGAAIg+AAIi7gDIgVgDQhDgKhCgOQg+gNg7gYQgVgIgWgLQgKASgIASQgKAWADAWQABAKAEAJIAFANIAEAIQAMAbAPAZIACABIACABIABAAIAGAEIAUAHQAOAGAPACQBIAPBKAFQA5AGAVgBIBCABgAp+ufQghAkANA3IABAFIAWAKQC3BWDSAIQAzADA0AAIA/gBIAFAAIAPgBQAngBAkgGQAQgCAPgHQAagNADgdIABgKIiLgWIg2gIIivgaQhLgJhFgdIhcgnIgZgLIgUgJIgbgJIgBAAQgaAMgPARg");

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.9,-99.2,141.9,198.4);


(lib.leaf02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#199A4C").s().p("AA9A9IAAAAQgcgfgfgZIgUgOQgogdhfgkIAAAAIAlgJIAIgBIADgBQARgCASgBIAPgBIADgBIA0AEIACAAIAEABQAgAFAhAKIAAAAQAWAHAUAMQAXAPASAVIhCBqIgbgeg");
	this.shape.setTransform(43.8,-27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C7B3E").s().p("ADzJzQgbgEgagHQhugZhdg9Qhag5hYg9QhNgzhPguIAAAAIgZgQQgEgaAAglQAAh6A9hUQA1hJA1AFIACgCQBmAaBKgXQADBAAGAjQARBmAhBiQAkBnA5BbQAyBPBRBcIgBAAIgDABIgBAAIgEgBgADFJPIAAAAIAEABIgDgCIAAAAgAC4j3QgYgoAAgVQAGgiAAgQQAAgugNgaQgWgpgMgKQgLgEgGgGIAAgBQgVgEgbgJQgTgHgaAAQgXAAgEABIgFgGQkABDiDBqQCJkbFJAAQCAAADdCIIAGAAIAAACIAAABQgCAPgGALQgEAIgFAGIgKAJQgIALgQALQgQAKgEABIgOAAIgeADIgDAAIgHABIghAIIAAACIAHAXIAAAAQABAWgEAUQgCANgDANQgNApgfAkQgUgRgEgGg");
	this.shape_1.setTransform(-1.7,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E8D50").s().p("AFEK8IADAAIgDABgAm5EHIgPgRIANgBQgUjwEAi2QBwhbBBguQBXhBBFgYIgJgYQAbAJAVAEIAAABQAHAGAKAEQANAKAVApQAOAaAAAuQAAAQgGAiQAAAVAYAoQADAGAUARIgDADIgGAHQgiAjgsAaIABAAQhIArhPAiQgDAKivAYIgBACQg2gFg1BLQg8BUAAB6QAAAlAEAaQhKgwg7hCgAmvjyQAMghAOggIAHgQIARAIQAthdB+iIQCUh5AZgcQAagEAZAAQBegJBbAWQBwAcBVBNQAkAgAYArIAAgBQAQAeADAgQABAPgCAPIgGAAQjciIiBAAQlJAAiJEbIgDACQgsAkgeAqQgjAwgPA3QAQhRAbhOgAAmm3IAGAGIgDABIgfALIAcgSg");
	this.shape_2.setTransform(-8,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#709F62").s().p("AkaHVIAAABQghgoAfiwQAKg3AghAQAmhcCdhwQBqgyB9hOIAfgKIADgBQADgCAaAAQAZAAATAHIAJAYQhFAYhZBBQhBAvhuBYQkAC5AVDvIgNABgAjghjQAphdAyhYQA0hdBXg2QAZgPAagIQAngNAngGQgZAciSB5Qh+CIgsBdg");
	this.shape_3.setTransform(-25.4,-26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AFeLzQgfgEgegHQiAgZhxhAQhpg8hqhAQhbg2hegwIgBAAQh0g+hbheIAAAAQgqgqgQg7IAAABQgih8Ash4QARiDAvh6QAqhuA2hoQA0hlBig8QAbgQAegKQBIgYBLgCQBqgLBpAWQCCAcBnBRQAsAiAeAuIAAAAQAVAfAGAjQACARgBASIAAAAQgCAagOARQgFAGgGAEIgFAHIAYAGQA0ALARAFIAAAAQAaAIAXAPQAfAUAWAdIABABIAAAAIAHALQAEAFgCAFQgBAGgFADQgFADgFgBIgCgBIhDBtIAAACQAAAGgEAEQgEAEgGAAIAAAAIgDABQgGABgEgEQgFgDgBgGIAAgEIgggkIAAAAQgTgVgUgSIgdgXQgigZhTgfQABASgCARQgBAOgDANQgMAvgkApQgmAsg0AeIAAAAQhOAwhYAYQgCBSATBQQAbBuAvBpQAxBvBJBhQAYAhAcAdIADADIBrB0IAAAAIgBABIgEABIgBAAIgEgBgAEnLNIAAAAIAEABIgDgCIAAgBgAoYDLIAPASQA7BCBJAwIAZAPIAAAAQBPAuBNA0QBYA8BaA6QBdA9BuAYQAaAHAbAFIAFAAIADgBIABAAQhRhcgyhPQg5hbgkhmQghhjgRhmQgGgjgDhAQhKAWhmgZQCxgYACgKQBOgjBHgsIAAAAQArgZAjgkIAGgGIADgEQAfgjANgqQADgMACgNQAEgVgBgWIAAAAIgHgXIAAgBIAhgIIAHgBIADgBIAegCIAOgBQAEAAAQgLQAQgKAIgMIAKgJQAFgGAEgHQAGgMACgPIAAAAIAAgDQACgPgCgOQgCghgQgdIAAAAQgYgrgkggQhVhNhxgbQhagWhdAIQgaABgbAEQgnAFgmANQgbAIgYAPQhaA2g0BdQgxBZgpBdIgHAPQgOAhgMAgQgcBOgPBSQAPg3AjgxQAegpAsglIADgCQCDhqEAhDIgcASQh+BOhsAyQicBzgnBbQggBAgJA4QggCuAiAnIAAAAgADzKSIAAAAIADgBgAFAljIglAKIAAAAQBfAjAoAdIAWARQAfAZAcAeIAAAAIAbAeIBChrQgSgVgXgPQgUgNgWgGIAAgBQghgKgggFIgEAAIgDAAIg1gEIgDAAIgPABQgRABgRADIgEAAIgIABgAC0JzIAAAAIABgCIAAAAIADACIgEAAg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-75.6,126,151.3);


(lib.leaf_half = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28571A").s().p("AADgBIADACIgLABIAIgDg");
	this.shape.setTransform(-19.5,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94C386").s().p("AolAmIAJgYIgIAYIgBAAgAIkglIAAAAIACAIg");
	this.shape_1.setTransform(-43.2,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E8D50").s().p("AYwG8IAEABIgBACIgDgDgAlFEKQicgBiVgtQj+hNjyhvQhcgphYgzIgugcQgxgegrgiQgsghgjgqQgTgYgRgZQgKgQgGgRQgHgSgEgSQgCgLACgLQACgLAGgKQAEgHAGgHIAPgTIgNgZQAeACAsAIQA2AKAmAAQAKgFAGAAQgBADANAFQAkAQgEAIQgCAGAAADIACADIgUgDQgIADgFAFQgJAHAAAUQAAAmBfA9QBoBEB8AXQAIACBMAXIABAAICnAyQD3BIBDAAQC0AADSg2QDug+gLhLIgCgIQBUgYAYgEQBtgUB1AAQCtAABJATQBJASAhAmIAZAdIAhAWIgQAPQhzBjiPAPQhJAIiHAXQiNAbgsAPQg8AVhZAwIiZBVQgrAYgmASIgJAFQg6ACg6AAIgQAAgAvPiMIAIgZIABABIgJAYIAAAAg");
	this.shape_2.setTransform(-0.6,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C7B3E").s().p("ApbDGQAmgSArgYICahVQBagwA7gVQAsgNCOgbQCFgaBJgHQCPgPByhkIARgPQAoAaAfAXQAmAcAKAEIABAEQAAADgQAHQAXADAPAiQAMAbADAeIgkgHQgogHgogGQg2gGg4AIQiLATiDAqQirA3iuAyQizAyi5APg");
	this.shape_3.setTransform(41.4,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AidF9Qh9gNh4gjIm1iiQhGgihEgmQhKgqhCgwQg5gogzgxQg8g5glhLQgNgbgCghQgDgnAdgXQAUgQgIgSIgHgPIgEgGIAvADIAOAZIgPATQgGAHgEAHQgGAKgCALQgCALACALQAEASAHASQAGARAKAQQARAZATAYQAjAqAsAhQArAiAxAeIAuAcQBYAxBcArQDyBvD+BNQCVAtCcABQBAABBBgDIANgBQC4gQC0gyQCugxCsg4QCDgrCLgUQA5gHA2AGQAoAFAnAHIAlAIIALAwIgfgIQgigKgjgBIgvgCIgvAFIhYASQhTAThOAaQhmAihmAfQhBAUhCATQhCAShDAQIhCAOIhEALIhEAJIhEAHIhAAGQgqACgqAAQhTAAhUgJgAqXhoIAAgBQi8g4i6imIgBgDQAAgDACgGQADgIgjgQQgNgFABgDQABgEAuAFQAwAGA0ApQAZAUAbAcQBRBWCkAuQClAuDwAAQEtAAEKg/IDjg3QBIgRCJgKIAFAAIADAAQCOgKBcAsQBcAtAcAkQAWAcgCABIgDgCQgLgIgDACQgBABAAAAQAAABAAAAQAAABAAABQAAAAAAABIgYgdQghgmhJgSQhKgTisAAQh1AAhuAUQgYAEhTAYIgBAAIiOAqQjSA+kRACIgUAAQkFAAi2g1g");
	this.shape_4.setTransform(-31,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#709F62").s().p("AixByIingzIAHgYQC8A4ERgCQESgCDSg/ICPgnIACAIQAMBIjwA/QjTA2i0AAQhCAAj1hIgAmuAnQh7gXhphCQhfg+AAgmQAAgTAJgIQAFgEAIgDIAUADQC5CmC8A2IgHAYQhNgXgIgBg");
	this.shape_5.setTransform(-63.5,-6.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-164.8,-30.6,323.1,89.8);


(lib.leaf = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28571A").s().p("AADgBIADACIgLABIAIgDg");
	this.shape.setTransform(-19.5,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94C386").s().p("AolAmIAJgYIgIAYIgBAAgAIkglIAAAAIACAIg");
	this.shape_1.setTransform(-43.2,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E8D50").s().p("AYwIsIAEAAIgBACIgDgCgAlFF6QicgCiVgsQj+hNjyhwQhcgrhYgzIgugbQgxgcgrgiQgsghgjgrQgTgYgRgZQgKgQgGgRQgHgRgEgTQgCgLACgLQACgLAGgJQAEgIAGgGIAPgTIgQgfQgHgMgCgOIAkgTQCGhCByAAQA6AAB8AJQB9AJAvAAQBPAAAcgUQAOgKAJggQAJgeAagNQAngTBlAAQBrAAN6BhQA6AAASgNQANgJAAgbQAAgJgCgBQgDgCgFgHIAKADQCgAyCJBcQBkBCBfBJIAFAEIgDACIABADQAJAYAAAXQAABMhYBTIgRAQQhzBiiPAOQhJAIiHAaQiNAagsAQQg8AVhZAvIiZBWQgrAXgmASIgJAFQg6ADg6AAIgQAAgAvGg1IgJAYIABAAICnAxQD3BHBDAAQC0AADSg2QDug8gLhLIgCgHQBUgYAYgFQBtgTB1AAQCtAABJASQBJASAhAnIAZAdQgBgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQADgDALAJIADABQACgBgWgcQgcgkhcgsQhcgsiOAJIgDAAIgFABQh7hkmrghQnNgxjLAAQi+AAi3A5QhLAYgrATQg0gogwgGQhHgJAkAQQAkAPgEAJQgCAFAAADIACADIgUgDQgIAEgFAEQgJAIAAATQAAAmBfA+QBoBEB8AXQAIABBMAXIAIgYIABAAg");
	this.shape_2.setTransform(-0.6,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C7B3E").s().p("AWBHQIhoh2Qgxg2g4guQhMg9hRgvQgpgXgqgPQglgNgmgJQgkgLglgHQgogHgogGQg2gGg4AIQiLATiDAsQitA3iuAyQixAyi5APIgCgDQAmgSArgYICahVQBagwA5gVQAsgPCOgbQCHgaBJgHQCPgNByhkIASgQQBYhTAAhMQAAgXgJgYIgCgDIADgBQA5ArA2AuQBaBNBRBRQA2A3AxA5QAvA4AtA7QAiAvAgAwQAXAjAVAkQARAdAOAfQAKAXAIAYQAFASABAUQAAAFgCAGgAxbi4QilgthQhWQgbgdgagUQAsgTBLgXQC2g6C/AAQDKABHNAwQGsAhB7BkQiJAKhIARIjiA2QkJA/kwAAQjwAAikgug");
	this.shape_3.setTransform(17,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AXoIlQhOhbhdhNQgygog2ghQgtgcg1gNQgSgFgTgDIhogaQgigKgjgCIgvgCIgvAFIhYASQhTAUhOAZQhmAjhmAfQhBAUhCASQhCAShDAQIhCAOIhCALIhEAKIhEAHIhAAFQh+AHh/gNQh9gOh4giIm1ijQhGghhEgnQhKgphCgxQg5gqgzgwQg8g4glhLQgNgbgCggQgDgoAdgXQAUgPgIgTIgHgPIgHgMQgWgvAeguQAmg5A9gfQBDgiBIgYQBGgXBHgTQBIgRBJgPQBCgQBDgMICGgWICUgQQBTgIBUAGICCAHICtAVIBrAQIBpASIBqAUIBoAUIBpAUQBLAPBIAXQBJAVBEAgQATAIASAKQAkASAiAVQA0AfAyAjQA0AjAzAlQA2AnAxArQBYBLBPBUQA5A7A3A+QAcAgAaAiQAbAiAaAkIAzBHIAqBAIAnBBIAUAiQAlBCAaBGQAUA0ADA3IgQAFQg7hLg9hIgAOGCsQAoAFAnAIQAlAGAlALQAmAKAlANQApAPApAXQBSAvBLA9QA5AuAwA2IBoB2IADACIABgCQABgFAAgFQgBgUgFgSQgHgZgLgXQgOgegRgdQgUgkgXgjQgggxgjguQgsg7gvg4Qgxg7g3g3QhRhPhahNQg2gvg4grIgFgEQhfhJhkhCQiJhciggyIgKgDIgBgBQg0gOg1gNIhHgPQhXgShXgOQhVgRhXgOIiwgYIicgSQhDgDhDABQhNABhOAEIiPAMQhSAHhRARQhZAQhVAWIh+AjQhKAThHAfQgxAVgpAkQgiAfgBAtIABAPQACAOAHAMIAQAfIgPATQgGAGgEAIQgGAJgCALQgCALACALQAEATAHARQAGARAKAQQARAZATAYQAjArAsAhQArAgAxAeIAuAbQBYAzBcArQDyBwD+BNQCVAsCcACQBCAABCgDIAMgBQC4gQCygyQCugxCsg3QCDgsCLgTQAggEAeAAQAZAAAYACgAvMgUIgBAAQi8g4i5inIgCgDQAAgDACgFQAEgJgkgPQgkgQBHAJQAwAGA0AoQAaAUAaAdQBRBVCkAuQClAuDwAAQEwAAEHg/IDkg2QBHgSCJgJIAFAAIADgBQCOgJBcAsQBcAsAcAkQAWAcgCABIgDgBQgLgJgDADQAAAAgBABQAAAAAAABQAAAAAAABQAAABABABIgZgdQghgnhJgSQhJgSitAAQh1AAhtAUQgYAEhUAYIAAAAIiNApQjSA9kSACIgVAAQkFAAi1g0g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#709F62").s().p("AjyE6IingzIAHgYQC8A4ERgCQETgCDSg/ICOgpIACAHQAMBLjwA+QjTA2i0AAQhCAAj1hHgAnvDvQh7gXhphEQhfg+AAgmQAAgTAJgIQAFgEAIgEIAUADQC5CnC9A4IgIAYQhNgXgIgBgAv2hXQAAgtAigfQApgkAygVQBGgfBKgTIB/gjQBVgWBYgQQBSgRBSgHICPgMQBNgEBMgBQBDgBBDADICbASICwAYQBXAOBXARQBXAOBXASIBHAPQA1ANA1AOIABABQAFAHADACQABABAAAJQAAAbgNAJQgSANg5AAQt8hhhpAAQhlAAgoATQgaANgIAeQgJAggPAKQgbAUhQAAQgvAAh8gJQh9gJg6AAQhyAAiGBCIgjATIgBgPg");
	this.shape_5.setTransform(-57,-26.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-164.8,-69.6,329.8,139.3);


(lib.try_btn = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Try!", "10px 'Comic Sans MS'", "#000033");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.setTransform(15.7,0.5);

	// Layer 3
	this.text_1 = new cjs.Text("Try!", "10px 'Comic Sans MS'", "#041762");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 12;
	this.text_1.setTransform(16.3,0.9);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#254A9E").ss(2,1,1).p("ACIA4QAagXAAghIAAAAQAAgggagXQgagXglAAIiRAAQglAAgaAXQgaAXAAAgIAAAAQAAAhAaAXQAaAXAlAAICRAAQAlAAAagXg");
	this.shape.setTransform(17.2,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E5AC0").s().p("AhIBPQglAAgagXQgagXAAghIAAAAQAAggAagXQAagXAlAAICRAAQAlAAAaAXQAaAXAAAgIAAAAQAAAhgaAXQgaAXglAAg");
	this.shape_1.setTransform(17.2,10.5);

	this.addChild(this.shape_1,this.shape,this.text_1,this.text);

    this.helper = new cjs.ButtonHelper(this, 0, 1, 2, false);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.5,34.6,19);


(lib.timer = function() {
	this.initialize();

	// Text
	this.text = new cjs.Text("0:00", "20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 46;
	this.text.setTransform(-1,-13);

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAqQAdheBDgsIACAAQACACgBAEQgDAMgZAdIgOAQQgPAWgOATQghAxgHAoQADgaAJgdg");
	this.shape.setTransform(-24.1,-15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbgaQALgUABgLQgEAtglAmQgTAUgSAMQAsgtAWgng");
	this.shape_1.setTransform(25.7,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,3).p("AivivQhJBJAABmQAABnBJBJQBJBJBmAAQBnAABJhJQBJhJAAhnQAAhmhJhJQhJhJhnAAQhmAAhJBJg");
	this.shape_2.setTransform(0.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DAF582").s().p("AhEDiIg6goIgng0IgdhMIAAhCIAMhIIAcg1IAtgxIAwggIA4gWIAtgDIA1ABIA1ARIAxAdQiEhEhoAwQg1AYgaAmQhiChBRCDQAaApAoAhQAUAQAPAIg");
	this.shape_3.setTransform(-4.2,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,0,0,3).p("AArBMQAogZAAguQAAghgYgYQgZgYgiAAQghAAgYAYQgZAYAAAhQAAAxAsAY");
	this.shape_4.setTransform(0,-45.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAghIAABD");
	this.shape_5.setTransform(6.7,-44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgRIgTAj");
	this.shape_6.setTransform(23.5,-33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgRIgTAj");
	this.shape_7.setTransform(22.9,-33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgRIgTAj");
	this.shape_8.setTransform(22.4,-33.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgSIgTAl");
	this.shape_9.setTransform(21.9,-33.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgSIgUAl");
	this.shape_10.setTransform(21.5,-33.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgSIgTAl");
	this.shape_11.setTransform(20.9,-34.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,0,0,3).p("AALgSIgVAl");
	this.shape_12.setTransform(20.5,-34.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.5,0,0,3).p("AALgTIgVAn");
	this.shape_13.setTransform(20,-34.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgTIgUAn");
	this.shape_14.setTransform(19.6,-34.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.5,0,0,3).p("AALgTIgUAn");
	this.shape_15.setTransform(19.2,-35.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,0,0,3).p("AALgTIgVAn");
	this.shape_16.setTransform(18.7,-35.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.5,0,0,3).p("AALgSIgUAl");
	this.shape_17.setTransform(18.3,-35.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgRIgTAi");
	this.shape_18.setTransform(17.9,-36.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgRIgTAj");
	this.shape_19.setTransform(17.5,-36.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAKgRIgTAj");
	this.shape_20.setTransform(17.3,-37.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,0,0,3).p("AAlAVQgEAGgjgVQglgUADgGQAEgGAjAWQAlATgDAGg");
	this.shape_21.setTransform(21.5,-37.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B3B3").s().p("AgCAGQglgUADgGQAEgGAjAWQAlATgDAGQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgIAAgbgQg");
	this.shape_22.setTransform(21.5,-37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,0,0,3).p("AgagoIgSAhQgEAHAJAIQAIALAQAIQAPAJAMACQANACADgGIATgi");
	this.shape_23.setTransform(20.6,-35.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3B3B3").s().p("AALAoQgLgCgQgJQgPgJgJgLQgIgJADgFIATgiIBJApIgTAhQgDAFgIAAIgGAAg");
	this.shape_24.setTransform(20.6,-35.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3A5D8F").s().p("AgFgHIgNgNIACgEIAcARIAHAFIgRAbQAFgSgMgOg");
	this.shape_25.setTransform(18.9,-31.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,0,0,3).p("AgoADQANADADgDIAVglQADgGAEADQAEADAKAHQAGADAKAEQAGADgDAGIgVAlIgBAEQABAFAHAE");
	this.shape_26.setTransform(17.9,-31.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#89A9C2").s().p("AgmADQAMADAEgDIAVglQABgGAGADIAOAKIAPAHQAHADgDAGIgWAlIAAAEQAAAFAIAEg");
	this.shape_27.setTransform(17.8,-31.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAghIAABD");
	this.shape_28.setTransform(6,-43.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAghIAABD");
	this.shape_29.setTransform(5.1,-43.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgiIAABF");
	this.shape_30.setTransform(4.3,-43.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgjIAABH");
	this.shape_31.setTransform(3.5,-43.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgjIAABI");
	this.shape_32.setTransform(2.6,-43.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgiIAABG");
	this.shape_33.setTransform(1.8,-42.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgjIAABH");
	this.shape_34.setTransform(0.9,-43.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgkIAABJ");
	this.shape_35.setTransform(0.1,-43);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgkIAABJ");
	this.shape_36.setTransform(-0.8,-43.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgkIAABJ");
	this.shape_37.setTransform(-1.7,-43.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgkIAABJ");
	this.shape_38.setTransform(-2.5,-43.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAgjIAABH");
	this.shape_39.setTransform(-3.4,-43.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAghIAABD");
	this.shape_40.setTransform(-4.2,-43.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAghIAABD");
	this.shape_41.setTransform(-5.1,-43.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAghIAABD");
	this.shape_42.setTransform(-6.5,-44.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.5,0,0,3).p("AAAghIAABD");
	this.shape_43.setTransform(-5.9,-44);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,0,0,3).p("AAAgKQBHAAAAAKQAAALhHAAQhGAAAAgLQAAgKBGAAg");
	this.shape_44.setTransform(0.1,-47.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B3B3B3").s().p("AhFAAQAAgKBFAAQBGAAAAAKQAAALhGAAQhFAAAAgLg");
	this.shape_45.setTransform(0.1,-47.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,0,0,3).p("AhGguIAAA8QAAAMAVAIQAVAIAcAAQAdAAAVgIQAVgIAAgMIAAg8");
	this.shape_46.setTransform(0.1,-43.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B3B3B3").s().p("AgxAlQgVgIABgMIAAg9ICLAAIAAA9QAAAMgUAIQgVAIgdAAQgbAAgWgIg");
	this.shape_47.setTransform(0.1,-43.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3A5D8F").s().p("AgEgNQgKgEgMgDIgJgBIgBgJIA7ABIAOACIAAA6QgJgfgggNg");
	this.shape_48.setTransform(0.2,-36.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,0,0,3).p("Ag7AwQAVgFABgIIgBhHQAAgKAMAAQAHAAAUABQAKAAARgCQALAAAAAKIABBGIADAHQAFAGANAB");
	this.shape_49.setTransform(0.1,-37.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#89A9C2").s().p("AglAjIgBhHQgBgKANAAIAaABQALAAAQgCQAMAAAAAKIABBGIACAHQAFAGAOABIh5ABQAWgFABgIg");
	this.shape_50.setTransform(0.2,-37.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,0,0,3).p("AjujuQhjBjAACLQAACMBjBjQBjBjCLAAQCMAABjhjQBjhjAAiMQAAiLhjhjQhjhjiMAAQiLAAhjBjg");
	this.shape_51.setTransform(0.5,-0.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,0,0,3).p("AitivQhJBJAABmQAABnBJBJQBIBJBlAAQBmAABJhJQBIhJAAhnQAAhmhIhJQhJhJhmAAQhlAAhIBJg");
	this.shape_52.setTransform(0.8,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EBFEB1").s().p("AitCwQhJhJAAhnQAAhmBJhJQBIhJBlAAQBmAABJBJQBIBJAABmQAABnhIBJQhJBJhmAAQhlAAhIhJg");
	this.shape_53.setTransform(0.8,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3A5D8F").s().p("AhYDAQgrgJgpgXIgggVIFjlQQBJBlgZBvQgMA4gcAkQhYBbhoAAQgbAAgcgGg");
	this.shape_54.setTransform(7.3,6.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3A5D8F").s().p("Ah1DqQgjgIgfgNIgZgMIgzgnIglgrQgRggA4AlQAcASAfAaQBAAgBNABQAnAAAYgGQBmgigWgDIgqAEICpk/QAsBWAAg8QgBgTgEgfIgEgbQABguANANQAGAGAGAPQAhA9gHBZQgEAtgKAfQggBdhWBGQgrAjglAQQg7AZg9AAQgqAAgrgLg");
	this.shape_55.setTransform(4.6,9.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3A5D8F").s().p("Ai2ByQg8iKBoh+QAsgqBBgXQCAgtBpBmIkxGDQgzgtgehGg");
	this.shape_56.setTransform(-4.5,-3.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,0,0,3).p("AjujuQhjBjAACLQAACMBjBjQBjBjCLAAQCMAABjhjQBjhjAAiMQAAiLhjhjQhjhjiMAAQiLAAhjBjg");
	this.shape_57.setTransform(0.8,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#89A9C2").s().p("AjuDvQhjhjAAiMQAAiLBjhjQBjhjCLAAQCMAABjBjQBjBjAACLQAACMhjBjQhjBjiMAAQiLAAhjhjg");
	this.shape_58.setTransform(0.8,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,0,0,3).p("ABrAAQAAgqggggQgfgfgsAAQgrAAgfAfQggAgAAAqQAAAsAgAfQAfAgArAAQAsAAAfggQAggfAAgsg");
	this.shape_59.setTransform(0,-44.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#89A9C2").s().p("Ag5BfIgbgWIgOgcIgGgcIAAgZIAHgZIAKgXIAMgQIAygdIAkgCIAcAKIAdAQIAcAfIAJAgIgCAvIgWArIgdAVIgLABIABgaIAPgKIAQgUIAKgbIgBgYIgLgcIgUgWIgZgPIgXgGIgTAFIgbAKIgUATIgNAYIgGAeIANAjIAUAbIAPAHIgCAbg");
	this.shape_60.setTransform(0,-45);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-56.4,70,91.3);


(lib.playBtn = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IDS_PLAY", "36px 'Arial'", "#003300");
	this.text.lineHeight = 38;
	this.text.lineWidth = 333;
	this.text.setTransform(-184,56);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(110,110,210,0.5)").s().p("A7uI6IAAxyMA3cAAAIAARyg");
	//this.shape.setTransform(-11.5,92);
	this.shape.setTransform(-80,70);

    this.playBtnHelper = new cjs.ButtonHelper(this, 0, 1, 2, false);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-189,35,355,137);


(lib.playAgain_btn = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IDS_PLAY_AGAIN", "bold 20px 'Comic Sans MS'", "#003300");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 180;
	this.text.setTransform(90,0);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(110,110,220,0.1)").s().p("AHUCeIumAAQg3AAgngnQgmgmgBg3IAAgzQABg3AmgnQAngmA3AAIOmAAQA2AAAnAmQAnAngBA3IAAAzQABA3gnAmQgmAng3AAIAAAAg");
	// this.shape.setTransform(80,14.8);
	this.shape.setTransform(80,15,2,2);

	this.addChild(this.shape,this.text);
    this.helper = new cjs.ButtonHelper(this, 0, 1, 2, false);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,185,52);


(lib.mask = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("EgkiAEhIAApBMBJFAAAIAAJBg");
	this.shape.setTransform(233.9,29);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,467.8,58);


(lib.mantis_wing = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A000").s().p("AgEgNIAAAAIALARIgMAKQgBgWACgFg");
	this.shape.setTransform(-50.5,-60.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008E00").s().p("AgIANIgBAAIAAAAIATgaIAAABIAAABIAAAUQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgMAAIAAAAIgCgBg");
	this.shape_1.setTransform(48.8,60.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008E00").s().p("AEJGpIAAgBIACgCIgUgTIAAgBIgwgtIgDAEQiCh4h7iFQhfhkhEhOIgpg0QgagggUgdIgBAAQgXgigWgiQhQiBguiLIgMgcQgNggAAgSIAOgJIDPE2QCKC2CUClQCNCdCYCPQBgBfAShfQAuBWAaBHQAOAmAJAiIgVAbQhhhJh6htg");
	this.shape_2.setTransform(-0.7,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B200").s().p("ADyHTIAEgDIAvAtIABAAIAUATIgDADIhFhAgAFWHKQiXiQiNidQiUiliLi2IjOk2IgNgSIAAAAIAAgBIABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAIANAAQA9gZCeCMQCcCJCkDNQCjDJB6DJQAoBCAfA7QgJAvgdAAQgdAAgwgvg");
	this.shape_3.setTransform(-5.3,-9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AIDKUIgDgBIgpggIgBgBQh0hciTiIIgYgXQh8h1h4iAIgIgJIgBAAQhehkhDhPIAAAAIgqgzIAAgBQgagggVgdIAAAAIgFgIQh4ipg+i7Qgag3AAgbQgBgVACgHIAAgCIAAAAIABgDQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIANAAQBBgaCnCUIAQAPQCcCMCkDMIACADQCiDIB7DIIAAAAIARAaQB0DAAtCGIAAABQAIAYAGAXIAAABIAAAAIAAABIAAAYQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAn7pvQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIAAADIAAAAQgCAFAAAYQAAASANAgIAMAbQAuCLBRCBQAVAjAYAhIAAAAQAUAdAaAhIAqAzQBDBOBfBkQB8CFCBB4IBFBAIAAAAQB6BtBhBJIAAABIABAAIADABIANAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAAgWIgBgBIAAgBQgJgigOgmQgahGguhXQgfg6gohCQh5jJikjJQikjNiciJQidiMg+AZIgMAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.4,-66,107,132.1);


(lib.mantis_pupil = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAoQgHgQAAgYQAAgXAHgQQAHgRAIAAQAJAAAHARQAHAQAAAXQAAAYgHAQQgHARgJAAQgIAAgHgRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,-5.7,4.7,11.5);


(lib.mantis_legUpper01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFFF60").s().p("AgcAaIAcgoQALgQALgKQAMgKAEADIABACQACAEgFALQgEAKgHAFQgIAEgIALQgHAJgNATQgPASgJACIgCABQgGAAAPgXg");
	this.shape.setTransform(-11.1,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9E42A").s().p("Ag6BTQgKAAgOAKIgKAGQgOgCgIgNIgBgDIAAgJQABgIADgIIAAgBIAIgRIAAAAQAHgLAJgLQAPgRARgRIAAAAQASgTAVgRQAcgYAegWIAAAAIAWgPQBDAQgTAwIAAAAQg1A2gsBKQgZAdggAKQgBghgPAAgAggggQgMAKgMAQIgdAoQgQAZAJgDQAJgCAPgSQAPgSAIgLQAHgKAIgEQAIgFAEgKQAEgLgBgEIgBgCIgDAAQgEAAgJAHg");
	this.shape_1.setTransform(-5.5,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFCqIgBAAQgggFgQgWQgMgQgSABIAAAAQgaACgNgVIgBgDIAAgKQABgJAEgKIAAAAQAEgLAFgJIAAAAQAIgNAKgMQASgWAUgSIAAAAQAUgWAYgTQAigcAjgZIAAAAIAZgSIAPgLIAAAAIAdgRIAAAAQAPgIAQgGIAAAAQATgHATAAIAAAAQARAAARAFIAAAAQAGACAFAEIABAAIADAEQADADABAEIADAKIAAAAQABAFgCAHIABgBQgCAJgDAJIAAAAQgDAIgHAHIAAAAQgXAXgaANIAAAAQgpAWgdAjQggAlgXAsIAAAAIgPAfIgKARIAAAAIgLAOIAAAAIgKALIgBABIgQANIgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAAAgAhrB6IAEAFIAHAGQANAKAUADIAAAAQADAAACgCIAAAAIAPgMIAAAAIAJgKIAAAAIAJgMIABAAIAIgPIAPgbIAAAAQASgmAbggQANgPAQgNQAPgNASgJQAXgMAUgTIAAgBIAPgOQAhg+g8ADQgcACgXAIIgCAAIAAABIgTAJIAFgDIgFADIgHADIgGAEIgBgBIgTAKIgHAEIgBABIgNAJIgBAAIAAABIgBAAIgUAOIAAABQgeAWgeAYQgVAQgSATIAAAAQgRAQgPATQgJALgHALIAAAAIgIARIAAABQgDAIgBAIIAAAJIABADQAIANAOACQAGACAHgBIAAAAIADAAQAOAAAKANg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85C006").s().p("AhNCYIAAAAQgUgDgNgKIgHgGIgEgFQgLgOgQABIAAAAQgHABgGgCIAKgGQAOgKAKAAQAPAAABAhQAggKAbgdQAshKAzg2IAAAAQATgwhBgQIABAAIAAgBIABAAIALgJIABgBIAHgEIATgKIABABIAGgEIAHgDIAFgDIgFADIATgJIAAgBIACAAQAXgIAcgCQA8gDghA+IgPAOIAAABQgUATgXAMQgSAJgPANQgQANgNANQgbAigSAmIAAAAIgPAbIgIAPIgBAAIgJAMIAAAAIgJAKIAAAAIgPAMIAAAAIgEACIgBAAg");
	this.shape_3.setTransform(1.4,-0.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.9,-17,38,34.2);


(lib.mantis_legMiddle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9E42A").s().p("ABgC6IAAAAIABAAIAAAAgAgfBbQg2hDgJh0QgDguADgSQACgNAFgJQAWgHAKAAQATAAASARQASASAAATQAAATgGARQgIASAAAOQAAAYAiBOQAkBQAAAgQAAAUgOABQgegagrg3gAhXg4QABADAFAEQACAVANAiQASAwAOgJQAAgGgZg9QgBgEgEgfQgCgTgOgGIgHAAg");
	this.shape.setTransform(-0.7,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFFF60").s().p("AgEAYQgNgigCgVQgFgEgBgDIAAgaIAHAAQAOAGACATQACAfABAEQAZA9AAAGIgEACQgNAAgNgpg");
	this.shape_1.setTransform(-6.9,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85C006").s().p("ABMDIQgPABgagWQANAAAAgVQAAgggkhPQgihOAAgZQAAgOAIgRQAHgSAAgTQAAgSgTgSQgSgRgTAAQgKAAgWAGQAJgSATgKIACgBQAaACAYAQQAeAWABAdQACAIgLAYIAAAAQgHAVAAAVQABAZAKAbIAfBXIAAAAQAOAlAOAQQAZAaABAQQABAIgIAIIAAAAQgHAIgFAAIgBgBg");
	this.shape_2.setTransform(0.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABWDWQgqABhehuQg+hHAAh8QAAgxAGgUQAKglAmgQIAEgBQAfACAbARQAnAXgBAfQABAIgQAaIAAABQgNAWAAAWQAAAaAJAeIAfBcIAAABQAOAnARARQAdAbgBASQABAIgMAJIABAAQgJAIgHAAIgBAAgABZDFIAAAAIAAAAIAAAAQAIgJgBgHQgBgRgYgaQgPgPgOgmIAAAAIgfhWQgJgcgCgZQAAgUAHgVIAAAAQALgZgBgIQgCgdgegWQgYgPgZgCIgDAAQgTALgJASQgEAKgCAMQgEASAEAuQAJB0A2BDQArA3AeAaQAaAWAPgBQAGABAHgIg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.3,-21.4,22.7,42.8);


(lib.mantis_legLower01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhLDsQBajaAwj5QAPgUgDAcQgwDrheDkQAFgTgNAPg");
	this.shape.setTransform(0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhUD1QBljiArkDQAYgVABAeQgzD0hhDtQgEgOgRAJgAhADwQBdjkAxjrQADgcgPAUQgwD5haDZQAFgGADAAQADAAgDALg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-25,17.2,50.1);


(lib.mantis_legFoot01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AA5gyQAJgEAEABQACABABAEQhMAjguBCIgXABQAtg5BUgvg");
	this.shape.setTransform(0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhQA9IAAAAIgBgCIAAgBIABgCIAAAAQAtg/BagxQANgHAHADQAHACAAAMIAAAAIAAABIgBACIgBABQhOAigsBCIgBABIAAABIgBAAIgBAAIAAAAIgfACIgBAAIAAAAIgDgBgAA7gyQhUAugtA6IAXgBQAuhCBMgjQgBgEgCgBIgCAAQgEAAgHADg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.2,-6.2,16.5,12.5);


(lib.mantis_headmouth = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDCCC4").s().p("AgZAFQgPgKgMgNIATgIQAOgHAgAAQAeABAKAlQgOATgTAKQgXgMgWgRg");
	this.shape.setTransform(-10.3,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgGAyQggAAgUAIQAagSALgRQARgXAAgsIAAgCIgHgnQAMAIAOAMQArAnABAmQAAAfgMAhIgDAKQgRgkghAAg");
	this.shape_1.setTransform(-8.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjICkIAAgBQghg2AAgxQAAgTAJgNIAAAAQAMgUATAFQADAAACACQADADAAADQACAPAHAPIAAAAQAygTAQgWQAQgUgFgkQgMgjgEgTIgDAAQgOgFgNAAQgjAAgPAJQgMAPgJAEQgDABgDAAQgDgBgCgDQgCgCgBgDIgBgaIAAgJIAAgCQANhJAGgHQAIgMAbgKIAAAAQAagKASAAQAZgBBgA3IBZAyIAEACIACABIARAIIAAAAQCHAsgBBkQAABIgqAhQggAchNAQIgSADIhOAnIgBAAQgJAGgeAHIAAAAQgcAGgHAAIgBAAQhEAAgrhHgAiBDPIAKADQAOAFARAAQAGAAAYgFQAbgHAIgEIABgBIBPgnIADgBIAXgEQBDgPAdgYQAjgdAAg9QgBhWhjgnIgagNIgagMQAPALhgg4Qhig5gSAEQgSAEgRAOIAAAAQgUAHgGAIIAAAAQgDAFgMBBIAAAHIAAABIAAAFIACgCIACgCQARgOAtAAQAQAAASAGQADABABACIAGABQAYAKAnAiQAmAhAIAmQAKAmgYAxQgbAxgtAUQgCABgIgDIgSgIQgJgFgZgSQgZgTgQgWQgBgDAAgDIAAgCIgCgBQgEgBgCgEIAAgFQgCgBgCgDQgGgMgDgNIgEAEIAAABQgGAIAAANQAAAsAeAxIAAAAQAXAnAfAPgAiIBKIgTAIQALANAQAMQAWAQAYANQAUgLANgTQgKgmgdgBIgEAAQgfAAgNAHgAgkBTIAEgKQAMghAAgfQgBgngsgmQgOgMgNgIIAGAnIABABQAAAtgSAXQgLARgZASQAUgJAfABIABAAQAjAAAQAkg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B200").s().p("AimCgQA5gDApgfQAcgXAhgxQAegwANguQAKgiAAgiQAAglgDgLIgCgIIAaAOQBjAmABBYQAAA7gjAdQgdAZhDAOIgXAEIgCABIhQAnIAAABQgJAEgaAHQgZAFgGAAQgQAAgPgEg");
	this.shape_3.setTransform(4.7,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#10C406").s().p("AhEDVQgggOgXgnIAAAAQgdgxAAgsQAAgNAFgJIAAAAIAFgFQADAOAGAMQABADACABIABAFQACAEAEABIACABIgBACQAAADACADQAPAWAZATQAZASAKAFIASAIQAIADACgBQArgUAagxQAbgxgKgnQgKglgmgiQglghgZgLIgFAAQgCgCgCgBQgSgGgRAAQgsAAgSAOIgCACIgBABIAAgEIAAgBIgBgHQAMhBADgFIABAAQAGgIAUgIIAAAAQAQgNASgEQASgEBgA4QBiA5gOgMIAZANIADAIQACALAAAkQAAAjgJAgQgOAwggAwQghAxgcAWQgnAgg5ACIgJgEg");
	this.shape_4.setTransform(-6,-0.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-23.5,46.8,47.2);


(lib.mantis_headbackr = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B200").s().p("AAeB6QhgAAhEhdQAlAlBDAAQBEAAAPhLQAFgZgBghIgCgnIAAgPQAYASAOAOIAAABQAqAtAAA6QAAAggbAjQggAogtAAIgBAAgABQhMIAAAAIAAAAg");
	this.shape.setTransform(7.1,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#46FA3C").s().p("AgXAHQgKgDAAgEQAAgDAKgDQAKgCANAAQAOAAAKACQAKADAAADQAAAEgKADQgKACgOAAQgNAAgKgCg");
	this.shape_1.setTransform(-10.6,-15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#10C406").s().p("AgaBzIgHgKIgFgIQgTgegRgnIAAAAIgSgtQgNgSgWgcQgmgwABgOIAAAAIABgQQABgEACgCQADgDADAAIANAAIACAAQAWAEA4AAIABAAQA6AEAtAbQBNAuArAhIAAAPIACAlQABAhgFAZQgPBNhGAAQhDAAgjgkgAg5AVIAAAAIAAAAIAAAAgAhMgaIAAAAIgBgBgAhciCQgKADAAAEQAAAEAKADQAKADAOAAQAPAAAKgDQAKgDAAgEQAAgEgKgDQgKgDgPAAQgOAAgKADg");
	this.shape_2.setTransform(-3.7,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABtDFQhvAAhNhxQgYgkgUgwIAAAAIgVgyQgOgUgYgfQgqg0ABgQIAAAAIABgSQABgDADgDQACgDAEAAIAOAAIACAAQAZAFA+gBIABAAQA/AEAxAeQCDBOArAtIAAAAQAuAwAABDQABAigeAmQgkAtgxAAIgBAAgACzCGQAbgiAAggQAAg9gqgqIAAgBQgOgOgYgSQgrghhNguQgtgcg6gEIAAAAQg5ABgWgEIgCAAIgNAAQgDAAgDACQgCADgBADIgBAQIAAABQgBAOAmAvQAWAcANASIATAvIAAABQAQAlATAeIAFAHIAHAKQBCBdBiAAQAtAAAhgpgAhegJIABAAIAAAAIgBAAgAhxg7IAAAAIAAAAg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.4,-19.7,45,39.5);


(lib.mantis_head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46FA3C").s().p("AgWA8QgDgCAAgEQAAgDADgDQACgCAEAAQADAAADACQACADAAADQAAAEgCACQgDADgDAAQgEAAgCgDgAgQAdQgIgBADgTQACgQAJgSQAJgRAIgLQAKgLAGADQAFACgFAOQgFAOgMARQgLAQgBAOQgBANgHAAIgCAAg");
	this.shape.setTransform(6.9,37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#10C406").s().p("AgJAhQgFgNAAgUQAAgSAFgOQAFgOAEgBQAFABAFAOQAEAOABASQgBAUgEANQgFAPgFAAQgEAAgFgPg");
	this.shape_1.setTransform(22.4,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B200").s().p("Ai1DbQFWj0hvjCIABgBIABACQAuALAtAzQA6BBgVBXQgVBVgbAaIAAABQgcAag/AJQg7AJgiANIg8AYIgDADIg3AWIgOAHIADgCg");
	this.shape_2.setTransform(44.5,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Aj1EhQgUACggg0Qgig2ABgqQgBg3A8hCQAagcBghTQBOhEBXhYIABAAQBCgsBBAAQBCAABCBHQBCBGgSBfQgSBcgdAcIAAABQgcAchEAKQhCAKgkAOQgkANiLA+QhCAdgqgHIgBAAQgpA/gDAAIAAgBgAjUDYIAAAAIAAgBIABgBIAAAAIABgBIACgBIAAAAIACgBIAFgEIAAAAQA1gkAmgJQA5gYATgSQATgRABgDQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgkApg8AaIgBAAQgjAIgkAeQAXACAygWIAmgQIgDACIAOgHIA3gWIACgCIA7gZQAigMA9gKQA/gJAcgaIAAAAQAbgaAVhWQAVhXg6hBQgtgygugMIgBgCIgBACQgNgDgNAAQg8AAg/AoIgBAAQhUBRhLA/QhcBNgaAaQg6A9gCAzQgCAnAdAxQAcAwASgBQACABAlg1g");
	this.shape_3.setTransform(33.2,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#10C406").s().p("Ai4EMQgSABgcgwQgcgyACgnQACgyA6g+QAZgZBdhOQBLg+BUhRIAAgBQBAgoA7AAQANAAAOADQBuDClVDzIgnARQgxAVgYgBQAlgfAigHIABgBQA6gZAkgpQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAABAAAAQAAABgBAAQgBAEgTARQgTARg3AZQgmAIg1AlIAAAAIgEADIgCABIgBAAIgCACIAAAAIgBABIAAAAIAAABIAAABQglA0gDAAIAAAAgAjaCEQgCACAAAEQAAADACADQADACADAAQAEAAACgCQADgDAAgDQAAgEgDgCQgCgDgEAAQgDAAgDADgAi7AdQgKALgJARQgJASgCASQgCASAIABQAIACABgOQACgOAMgSQANgSAFgOQAFgNgGgDIgCAAQgFAAgJAJgAgyhEQgEAOAAAUQAAAUAEAOQAFAMAGAAQAGAAAEgMQAFgOAAgUQAAgUgFgOQgEgOgGAAQgGAAgFAOg");
	this.shape_4.setTransform(26.4,29.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.4,58);


(lib.mantis_eyeclosedBack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFBEIgEgQIAAgPIgBABIgBgJQABgPADgOIgBAAQADgMAFgLQAKgaAdgWIAEgCIAAADIABAIQACAFAEAFQAIAHAKAAQAFAAAFgBQAEgCAEgEQAHgIAAgJQAAgKgHgIIAAgCIgEgBQgFgDgFAAIAGgEQAsgYBAgBQApAAApALQgIAGgSAqQgTArgTAOQgTANgWAXQgXAWgMAKQgJAGgrAZIg0AeQgUgbgJgcg");
	this.shape.setTransform(-5.8,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007C00").s().p("AgWCBQhMABhBgvIgBgBIgKgIQAQgDAggSIAUgMIAJAAQDGAAATiOIAEgbQAWASAGAJIAJARIAHAPIAAAAQAHAVAAAXIgBAPIgBAHQgCAJgDAJIgDALIABABIgCAEIgBAAQgeAogQANQg6AthQAAIgBAAg");
	this.shape_1.setTransform(2.4,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008E00").s().p("AilB8IgBgBIABABIAAAAgAhsBSQAhgUAfgaQBmhUAFhMQAUAIAPALIAYASIgEAbQgTCPjGAAIgJgBgACjBEIAEgDIgDADgACmgbIABgBIAAACIgBgBg");
	this.shape_2.setTransform(2.6,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABCrQhUABg+gyIgBgCQgugngKgzIgBgGIgCgSIgDABIADgBIAAgGQAAgRAEgRIAFgRQAPgmAkgfQA+gyBUgBQAnABAxAOIABACQAfAMAbAWIABABQAcAXAPAbQARAgAAAlQAAAMgCAMQgCAMgDAKQgOArgoAhQg8AxhWAAIgBAAgACNBoQAQgNAegoIABAAIACgEIADgDIgEACIADgLQADgJACgLIABgHIABgNQAAgXgHgUIABAAIAAgBIgIgPIgJgRQgGgJgWgSIgYgTQgPgLgUgHQgFBMhmBUQgfAaghAUIgUAMQggASgQADIAKAIIABABIAAAAIAAAAQBBAvBKAAQBTAAA6gugAjDAPIAEARQAJAcAUAaIA0geQArgYAJgGQAOgKAXgVQAVgXASgOQATgPATgqQASgrAIgGQgpgLgpABQg/AAgtAYIgGAEQAGABAEADIAEADQAHAHAAAKQAAAKgHAHQgEAEgEACQgFACgFAAQgKAAgIgIQgEgEgCgFIgBgIIAAgEIgDADQgdAVgLAaQgFAMgDAMIAAABIABAAIAAgBQgDAQgBAPIABAGIABAAIAAAOg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-17.2,41.9,34.4);


(lib.mantis_eyeclosed = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46FA3C").s().p("AgTANIgBgCIABgCIACgBIADABIABACIgBACIgDABIgCgBgAgDAGIgDgBIgBgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAIABgCIAGgFIAAgBIAAAAIACgBQAGgDAFgBIABAAQAEAAACACIABABIAAADIgCAEIgFADIAAAAIgBABIgEACIgHADIgBAAIgBAAIgCAAIgBAAg");
	this.shape.setTransform(-11.6,-11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008E00").s().p("AAACaQhLABhBgvIAAAAIgBgBQguglgIgyIgCgMQDOhIC8BMQjDhgjHBaIAAgGQAAgPADgQIgBAAQADgMAFgMQALgaAdgVQAdgWAKgFQAsgYBAAAQBQgBAsAgQArAhAIANIAKARIAIAQIgCgBQAHAVAAAXIAAANIgBAHQgCALgEAJIgDALIAEgCIgFAHIAAAAQgeAogRANQg6AthSAAIAAAAgAiIhgIgBACIABACIADABIACgBIABgCIgBgCIgCgBIgDABgAhxh0IgBABIgBAAIgBABIgGAFIgCADQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABIACABIACABIADAAIADAAIABAAIAIgDIADgDIABAAIAAAAIAFgFIADgEIgBgDIgBgBQgCgCgDAAIgBAAQgFAAgHAEg");
	this.shape_1.setTransform(0,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABCrQhUABg+gyIgBgCQgwgpgJg3IgCgSIgDABIADgBIAAgGQAAgRAEgRIAFgRQAPgmAkgfQA+gyBUgBQBWABA9AyQAcAXAQAcQARAgAAAlQAAAMgCAMQgCAMgDAKQgOArgoAhQg8AxhWAAIgBAAgACNBoQAQgNAegoIABAAIAFgHIgEACIADgLQADgJACgLIABgHIABgNQAAgXgHgUIABAAIgIgQIgJgRQgJgNgrghQgrgghRABQg/AAgtAYQgKAFgcAWQgdAVgLAaQgFAMgDAMIAAABIABgBQgDAQgBAPIABAGQDGhaDEBgQi8hMjOBIIABAMQAJAyAuAlIAAABIABAAIAAAAQBBAvBKAAQBTAAA6gug");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-17.2,41.9,34.4);


(lib.mantis_bodylower = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGMJmQgZgHgYgJQgtgSgqgYQgpgWgqgTQg9gZg6gcIg3gcQhVgrhRg2QhGgug1hEQg2hGgphMQgphNgWhUQgYhfgVhgQgVhcAQhgQAJg5ASg4QANglAkgDQAegCAWAUQBLBCA+BMQA+BNBABMIBxCJQA4BBA3BDQA0A9AxBCQAxBCAwBDIAzBJQAyBIAtBRIAFAKQAVAqAKAxQAIArgmAOQgXAHgXAAQgOAAgPgDgAmgpGQgEAAgDACIgKAJQgIAIgGALQgJAQgDAUIgGAqIgBAHIAAAAIgCAOQgQBoATBqQALA5AOA2QAYBgAqBWQAqBWBCBGQA/BCBQAuIBQAtQBGApBKAlIApAVIAxAXQBDAlBFAYQAkAOAlALQAVAFARgGQAGgSgEgTQgHgkgSggIgCgDQhujHiEi4IAAAAIgCgDQhIhhhNhfIgBAAIiTi3IiOirQgigqgmgmQgOgOgQgKQgJgFgKgBQgHgDgIgBIgKACg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#10C406").s().p("ACmB8IAEgDIAAAAQBOBfBHBjQhRhphIhWgAk8jkIAGAFIgIAJIACgOgAk1kVQADgVAKgQIgEAOIgCgBIgNBCIAGgqg");
	this.shape_1.setTransform(-15,-23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B200").s().p("AGiJBQgmgLgkgOQhFgYhDglIgxgXIgogVQhLglhGgpIhQgtQhPgug/hCQhDhGgphWQgqhWgZhgQgOg2gKg5QgUhqAQhoIAIgJIgGgFIAAAAIABgHIANhCIACABIAEgNQAFgLAJgIIAKgJQADgCAEAAIAJgCQAIABAIADQAJABAJAFQARAKAOAOQAlAmAjAqICNCrICUC3IgEADQBJBXBQBmIADADIAAAAQCEC4BtDHIACADQASAgAIAkQAEATgHASQgKADgKAAQgIAAgJgCg");
	this.shape_2.setTransform(-1.8,-0.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.2,-61.7,100.5,123.5);


(lib.mantis_body = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#10C406").s().p("AAuF1IgBAAIgJgUQgTgsgRgtIAAAAIAAAAQgSgxgTgzIgUg6IgTg5IAAAAQgOgqgMgoQgLgmgIgkQgHgcgEgaQgCgMAAgNIAAgKIABAAQAshlBTAlQBrDyAcDiQAWCyhAAAQgRAAgYgNgABpglIABgBIAAAAIAGAVIgHgUgAh2mBIAAAAIgBAAIABAAg");
	this.shape.setTransform(-1.4,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B200").s().p("AB6HKIgBgBQgYgGgQgYQgdgtgXgxIABAAQBvA/gcjkQgcjihrjxQhTgmgsBmIgBAAQADhMAFhKQABgNADgLIADgPIABgBIAAAAQAEgPAJgIQANgMAXAFIAAAAQAPADAKAPQAwBGAcBRIAfBUIALAfIAgBdIgBACIAHATIANAuIAAgBIAFARIAAABIADAWIAAAGIABACIAAAAIAFAsIACASIACASIALBzIAFAyIAEApQACAUABAVIAAAUIAAABIAAATIABAfQgBALgIAHQgIAGgJAAIgDAAg");
	this.shape_1.setTransform(0.2,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACGHkIgBAAQgcgHgRgaQgng5gdhAQgUgvgSgvIAAAAQgWg0gUg2IgWg+IgVg9IAAgBQgPgqgNgtQgMgogJgmQgHgegFgcQgCgNAAgNQAEhVAHhVQABgNAEgNQAFgdAPgIQAOgIAhABQANAEAIAKQA1BLAgBWIAuB7IAiBjIAAAAQAMAiAKAlIAAgBQADAKABAJIAAAAIADAYQAGAuAFAvIALB7IAFA1IAEAsQAEAfgBAiIAAAAIAAAVIAAAhQAAAMgKAHQgJAGgKAAIgDAAgAgNDYQAQAsATAsIAKAVQAWAxAeAsQAPAYAZAHIAAAAQALABAJgHQAJgHAAgLIAAgfIgBgTIAAAAIAAgVQAAgVgDgTIgEgqIgFgyIgLhzIgCgSIgCgRIgFgtIAAAAIAAgBIgBgHIgDgUIAAAAIgEgTIAAAAIgNguIgHgVIAAAAIgghdIgLgfIgehUQgdhRgwhGQgKgOgPgEIAAAAQgWgFgNAMQgJAIgFAPIAAABIgEAPQgDAMgBAMQgFBLgCBLIgBAKQAAAMACAMQAEAbAHAbQAIAkALAmQAMAqAOAoIAAAAIATA6IAVA6QASAzAUAxIgBAAgAhcneIAAAAIAAAAg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.7,-48.4,33.4,96.9);


(lib.mantis_armupper = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85C006").s().p("AguFKIgIgMQgFgIgEgIIADgBQAjAGAPgmQAdhyAQhpQAMhFgShFQgKhiguhiQgJgdgVAJIgCgBQgFgOAAgFQgEgYAVABQAHgBAGAHQAFAFAFAJQAEAIAGAUIACAKQAHAVAVApIAGAMIAIATQAOAhALAoQAQA/gIBlQgIBngWBgIgDANQgWBegUABQgUgCgOgQg");
	this.shape.setTransform(1.5,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9E42A").s().p("AgBAFQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQACgCAAgEIAAADQAAABgBADQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBAAg");
	this.shape_1.setTransform(-3.5,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFFF60").s().p("AAFBEQgDAAgCgDQAAgEgBgEQABgFAAgDQACgEADAAQADAAACAEQACADAAAFQAAAEgCAEQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgCAAIAAAAgAgIAPQgLgdANgjIADgIQAEgOAIAGIAFAFQgGASgDATQgDAXADAXQgBAJgCACIgCAAQgCgCgGgRg");
	this.shape_2.setTransform(-4.5,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9E42A").s().p("AglExQgHgSAAgSIAAgBQADgmgCgVQgCgPgJgOQgKgQAAgcQgCgXAahSQAZhPABhCQABg4gHgxQgIgygDgaIgDgHIAAAAIACAAQAVgIAKAcQAuBiAKBiQARBGgLBEQgRBpgfBzQgNAmgigGIgDABgAgaDIIABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQACgDAAgDIAAgDQAAgFgDgDQgCgDgDAAQgDAAgDADQgBADAAAFQAAAFABADQADADADAAIACAAgAglBJIgEAJQgNAiALAfQAGARAEACIACABIABgBQACgCAAgJQgDgZADgXQADgTAGgSIgEgFQgDgCgDAAQgFAAgDAKg");
	this.shape_3.setTransform(-1,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#46FA3C").s().p("AAAAAIABAAIgBAAIAAAAIAAAAg");
	this.shape_4.setTransform(-4.3,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAFuQgeAAgUgfQgSgaAAgdIAAAAQAEgngCgXQgBgQgLgPQgMgPAAggQAAgXAchYQAbhTAAhGQAAg7gGgzQgHg0gCgcQgHgUAAgHQAAgYAbAAQATAAAIAVQADAKAFAcIAAAAQAGAYARAZQAUAfAEAKIgBgBQAZA6AKA1QAGAegBBgQAABzghB2QggBxgaAAIAAAAgAgxlMQAAAGAFAOIAAABIACAGQADAbAJAyQAGAxAAA3QgBBCgaBPQgZBSABAXQABAcAKAQQAJAOABAQQADAVgDAlIAAABQgBASAHASIAAAAQAEAIAFAIIAIALQAOARASACQAWgBAWheIADgNQAXhgAHhnQAIhlgQg/QgLgpgOggIgIgTIgGgMQgXgqgHgVIgBgJQgFgUgEgIQgEgJgGgGQgGgGgHABIgCAAQgSAAADAWg");

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,-36.6,18.3,73.3);


(lib.mantis_armmiddle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFFF60").s().p("AArCPIgBgDIABgEIAEgBIADABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgQAkIgBgEIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAALg/IgQgTIgMgNIgGgJQgDgHgNgPQgNgOACgDQADgCANAKIAEAEIAFAEIAUAVQANASAIAOQAKAPgDADIgCAAQgDAAgHgHg");
	this.shape.setTransform(-8.1,-6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9E42A").s().p("ABaDQQgVgLgDgHQgEgKgCgJQgCgKgJgLIgFgFIgJgJIAKAJQAPgDgPgaQgHgRgegKQATAVgTgBIgTgVQgFgGgCgKIgEgTQgCgHgMgOQAUACgFgHQgCgUgdgTQAIAVgOAAIgFgFIAAAAQgNgMgEgUIAAAAQgDgagEgSIAAAAQgHgfgcglQgSgZgGgOIADgTQACgTArAPQA/AuB6CqQAZAiAWAiIAAAAQAlCAhBAAIgQgCgAgGBTIgBAEIABADQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgDgBIgDABgAhEgXIgBAEIABAEQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAABgAhljEQgDADANAOQANAPAEAHIAFAJIAMANIATATQAIAJADgCQADgDgJgOQgJgOgPgSIgUgVQgBgGgCAAIgBABIgFgEQgKgIgEAAIgBAAg");
	this.shape_1.setTransform(-3,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85C006").s().p("ABYDSIgWgLIgDgBIABgBQBVAQgpiNIAAAAIAgA0QAmA/ABARQACAagaAAIgBAAQgWAAgsgUgAAJB9IgZgaIAAAAIAAgBQARACgRgWQAcAKAHARQAPAagPADgAg+AVIgGgGIgQgPIAAAAIAAAAQAOAAgIgXQAdAWACARQAEAGgLAAIgIgBgAisi+QgDgHgBgFIAAgBQgBgDgBgGQAAgHACgEIABgBQADgFAJAAQAJAAANAGIALAGIAHAEIgBABQgrgQgCATIgDATIAAAAg");
	this.shape_2.setTransform(-0.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABUDeQg5gZgFgSIgBgCQADgRgJgMQg4g1gMgNQgHgGgBgLIgCgUQgCgIgUgVQgNgOgLgHIAAAAQgPgOgCgWIAAAAQgBgcgEgTIAAAAQgGghgdgnQgdgnAAgPIAAgBQgCgEAAgGQAAgSAUAAQBFgBC2D4QAvA/AlBAQAoBDAAASQAAAcggAAIAAAAQgcAAg2gWgAinjpQgJAAgDAFIgBABQgCAEAAAHQABAGABADIAAABQABAFADAHQAHAPARAYQAcAlAHAfIAAAAQAEASADAaIAAAAQAEAVANANIAAAAIAFAFIAAAAIABAAIAPAPIAGAGQANAPABAGIAEATQACALAFAGIAVAUIAAABIAAAAIAZAaIAJAJIAGAFQAIAMACAJQACAKAEAJQADAHAVALIgBABIADABIAXALQArAUAXAAQAaAAgCgaQgBgRgmg/Iggg0QgWgigZgiQh5irhAgtIABgBIgHgEIgLgGQgMgGgJAAIgBAAg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-24.4,39.7,49);


(lib.mantis_armlower = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFFF60").s().p("AAnB8QAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAIAFgBIAEABQABAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBgAAVA5QgCgCAAgDQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACAAADQAAADgCACQgCADgCAAQgDAAgCgDgAgwgnQgDgfADgPIAGgbQACgNACAAQACAAAAARQAAAQgDAXQgDAXABATQAAATgDAAIAAAAQgCAAgCgfgAAEgpQgCgCAAgEQAAgEACgDQACgDACAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQACADAAAEQAAAEgCACQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgCAAgCgDg");
	this.shape.setTransform(-4.7,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9E42A").s().p("AAKDPIAAAAIgRgjIgSglIgTgpQgKgWgHgYQgHgYgCgWIgFgtQgDgZAAgbIAAgxIAAgiIAEgpQACgeAGgMIALgUQAigTANA4QgFAOgJAOIgDAIQgEASABASQABAMAKARIAAAAQALAUAAAJIAAAGQgJAJgJgJQgHAMAHARQADAOALgFQABARAVAtIAAABIAAABIAAABQgIAHgJgJQgIAJAFAMQAGANAJgGQABAHAKALIAAAAQAOAPAAALIAAABQgIAIgMgIIgBAfQAMAIAFgHQADAOAkBKIAFALIAAAAQASBVgaAFQgUgbgig1gAAPA0QgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgFgBIgEABgAAOAuIAAAAIAAgBgAgBgSQgCADAAADQAAADACACQABACABAAQADAAACgCQACgCAAgDQAAgDgCgDQgBAAAAgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAgAhDizIgFAcQgDAOACAgQACAfADAAQACgBAAgSQAAgTADgXQACgXABgRQAAgQgCAAIAAAAQgCAAgDAMgAgTh5QgBADAAAEQAAAEABADQACADADAAQAAAAABgBQAAAAABAAQAAgBABAAQAAgBABAAQACgDAAgEQAAgEgCgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgDAAgCACg");
	this.shape_1.setTransform(-2.3,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABLFDQgZgDhBhtIAAAAIgXglQgMgTgJgUIgRgqIgSgwQgIgYgDgZIgCgcQgCgaAAgbIAAgrIAAgzQABgfAGgeQAGgfAIgMIAOgYIAAAAQAIgQAXAAQAJAAALAKQANANAAAYQABAQgSAbIAAAAQgPAZAAASQAAANAMASIAAAAQAPAVgBAKQAAAKgJAkQABASAZAwIABACIgHAcQABAHAKAMIABAAQARAQgBAMQAAAPgHATQACAPAsBPQAwBVAAAeQAAAMgKAFQgGADgJAAIgKgBgAApEYIAAABIAAAAQASAYAFABIACABQAKABAEgEQAFgEgBgLIgBgJIABAAIgBgBQgFgcgdg8IAAgBIgFgLQgkhKgDgOIAAAAQAFgSgBgNIAAgBIAAAAIAAAAQAAgMgMgPIAAAAQgJgLgCgHIAAAAIABgBIAFgZIgBAAIAAAAIAAgCIAAAAQgWgtgCgRIAAgBIABgBIADgjIABgCIgBAAIAAgFQAAgKgLgTIAAgBQgKgQgBgNQgBgRAEgSIADgIQAJgPAFgOIABABIABgGIADgJIAAAAIAAgBQAFgVgKgLIgEgDQgJgHgKgBQgLgBgJAQIgEAHIgLAUQgGALgCAeIgEApIAAAjIAAAxQAAAbADAYIAFAvQACAVAHAYQAHAXAKAWIATApIASAmIATAiIAAAAQAgA2AUAagAgHAnIAAAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85C006").s().p("AA/E0IgBAAQgGgBgRgZIgBAAIAAAAQAbgFgThWIAAABIABAAQAcA8AFAcIABABIAAABIABAIQAAALgFAFQgDADgFAAIgGgBgAgMBbIABgfQALAJAGgJIABAAIgBABQABANgEASIAAAAQgCAEgCAAQgFAAgGgFgAgiAJQgEgKAIgMQALAMAIgJIAAgBIgFAZIAAABIAAAAQgEADgDAAQgGAAgFgJgAgyhVQgGgQAHgNQAJAKAJgKIAAAAIAAACIgEAkIAAABIAAAAIgGABQgGAAgDgLgAghj5QgNg4gjATIAEgHQAKgPALAAQAKABAJAHIADADQALALgFAVIAAABIgBAAIgCAJIgCAGg");
	this.shape_3.setTransform(0.3,-0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11,-32.4,22.1,64.9);


(lib.mantis_antenae = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46FA3C").s().p("AjiDVIgCgCIAAgCIAAgBIAJgWIACgCIAAAAIADAAIACACIAAADIgJAWIgCACIgCABIgBgBgAinBnIgCgDIABgCIACgDIACgCIADABIACACIgBADIgCADIgCACIgBAAIgCgBgAieBZIgBgDIAAgDIAhgrIACgCIADABIACADIgBACIghAsIgCABIgBABIgCgBgAgygiIgBgCIAAgDIAEgEIACgCIADABIACADIgBADIgEADIgCACIgBAAIgCgBgAgigsIgCgBIgBgDIABgDIAxgrIADgBIACACIABADIgBACIgxArIgDABIAAAAgABLiBIgCgCIAAgDIABgCIAYgOIADAAIADABIAAADIgCACIgYAPIgCAAIgBAAgAB6ieIgCgCIAAgDIACgCQA6ggAsgPIADAAIACACIAAADIgCACQgsAPg6AfIgBABIgCAAg");
	this.shape.setTransform(-0.1,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkKEgIgOgCIAAgBIACgJIAAAAQAUhJAfhBQCIkbFciQQgLAeAjAjQl+BcieGhIgBAFIAAAAIAAAAgAjcCQIgJAXIAAABQgXA0gQA6IABAAQAbhIAig+QgFgCgFgBIgBAAIgBACIAAAAIgCABgAh5gJQg3BBgmBOQAGABAFADQAqhLAyg9IgBgBQgDgHgEgDgAh0gQQAGAEAFAKQBChOBQg1IAAgCQAAgNgJgCIAAgBIgDAAQhSA9g/BKgAAlidQALAEABAPQBgg9B2gdQgPgOgDgNQgCgIACgHQh0AwhcBBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008E00").s().p("AkJETQAQg6AXg1IAAACIACACIADAAIACgCIAJgWIAAgDIgCgCIgDAAIABgBIABAAQAFAAAFADQgiA+gbBIgAjTCDQAmhOA3hBIACAAQAEADADAJIABAAQgyA8gqBKQgFgCgGgBgAiiAwIgCACIgCADIgBACIACADIADABIACgCIACgDIABgDIgCgCIgCgBIgBAAgAh6gFIgCACIghApIAAADIABADIADAAIADgBIAggrIABgBIgCgDIgCgBIgBAAgAhxgTQA/hLBSg8IADAAIAAABQAJACAAAMIAAADQhQA1hCBOQgFgKgGgEgAgqhaIgDACIgEAEIAAADIABACIADABIADgCIADgDIABgDIgCgDIgCgBIAAAAgAAPiLIgxArIgBADIABADIACABIADgBIAxgrIABgCIgBgDIgCgCIgBAAIgCABgAAoigQBchBB0gxQgCAIACAIQADAMAPAPQh2AchgA+QgBgPgLgEgABljDIgZAOIgBACIAAADIACACIAEAAIAXgPIACgCIAAgDIgDgBIgBAAIgBAAgADikBQgsAPg6AgIgCACIAAADIADACIACgBQA6gfAsgPIACgCIAAgDIgCgCIgBgBIgCABg");
	this.shape_2.setTransform(-0.3,0.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.1,-29.1,56.3,58.2);


(lib.letter_btn = function() {
	this.initialize();

	// Text
	this.text = new cjs.Text("", "16px 'ArialMT'", "#000066");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 16;
	this.text.setTransform(8.2,0.4);

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA0BmQAyAAAAgyIAAhnQAAgygyAAIhnAAQgyAAAAAyIAABnQAAAyAyAAg");
	this.shape.setTransform(10.2,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.502)").s().p("AgzBmQgyAAAAgyIAAhnQAAgyAyAAIBnAAQAyAAAAAyIAABnQAAAygyAAg");
	this.shape_1.setTransform(10.2,10.2);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.5,23.3);


(lib.grass03 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606C2B").s().p("AJJTNQAMh7gBh6QgCiPgjiJQgdhzgphvIhPjcQgohvgvhtQgxhug4htIhwjZQg8hzhNhqQhShuhuhUQhqhThyhHQgRgKh4gQQBzhLCUgUQjrgThbBoQhbBoghBKQg2B6gRCEQgNBogKBpQgGA0gCA0QgDBogCBnQgCBmAABnIACDPIAFDPQg4ifgtijQgvirgciqQgOhYgDhbQgCg6ADg5QADg6AGg6QADgdAFgdIAXhzIANg4IAQg4IARg3QATg4ASg5QBZklEOhtQCphECaBsQA0AlAvAqQBbBTBIBhQBKBiBDBnQA+BfA1BkQA8BwA5ByQAsBYAqBbQAvBkAtBmQAyBwAwBzIBNC7IA7CUIAZBBIBWDZQAxB/A8B7QA6B3gGB2QgCApguATQhsArh0AJIgZACIgXAAQivAAARieg");
	this.shape.setTransform(-1.1,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AIqVdQgQgMgHgUQgFgOAAgPQAEhpAHhmQAJh0gRhzQgViTguiNQgkhugphsQgmhjgqhiIhZjKIiNlHQhXjPiuifQitifhmgmQhmgnhHAUQhTA2gcBlQiEHSAcHnQAQETAAETQAAANgLADQgwAFgTg8QgniBgkiDQgih4gfh7QgbhsgShsQgVh6gFh9QgFh8ATh7QAShzAfhxQAghyAthwQA0iDBRh1QBTh6CIgzQCCgxCEAxQB9AwBiBZQBfBXBLBjQBxCRBcCeQBhCkBUCqQBrDaBeDeICnGMQB7EnB4EpQA6CNAoCOQALAngbAfQgSAUgSANQgaARgcAJIgzAQIgzANIgpAFQgqABgoAGIgKABIghACQhrAAhVg+gAlJw0QiTAUhzBLQB3AQARAKQBzBHBqBTQBtBUBSBuQBNBqA8BzIBwDZQA4BtAxBuQAvBtAoBvIBQDcQApBvAdBzQAiCJACCPQACB6gNB7QgRCoDGgKIAZgCQB1gJBsgrQAugTACgpQAGh2g6h3Qg8h7gyh/IhVjZIgahBIg7iUIhNi7QgwhzgxhwQgthmgvhkQgqhbgthYQg5hyg7hwQg2hkg9hfQhDhnhJhiQhKhhhahTQgvgqg0glQiahsiqBEQkNBthaElQgRA5gTA4IgSA3IgQA4IgNA4IgWBzQgFAdgDAdQgHA6gDA6QgCA5ABA6QADBbAOBYQAcCqAwCrQAtCjA4CfIgFjPIgCjPQAAhnAChmQABhnAEhoQACg0AFg0QALhpANhoQARiEA2h6QAghKBbhoQBNhYCzAAQAhAAAlADg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-143.5,224.8,287);


(lib.grass02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#296D46").s().p("AHOc0IgSABQgDAAgDgDQgDgDgBgEIgFgUQgHgUgKgRIAAAAQgKgTgeguIgBAAQhhiQhjiuQgyhXkWpMQkapLg4j/Qg5kBgujrQgvjqggkUQggkUBTi0QAihMBAhIQBAhIARgEQAQgFAOgJQAOgIA5gdQA5gegPAmQgOAlhXD1QhXD1AhEhQAgEgBxGIQBpFtCYGMQCSGFCcFBQBfDFBVCMQA5BgA1BGIACACIAMAXQAYAwAIACQADAAADADIAKAIQAHAFAaAaQAbAaAWAfIgnAyQhFAWgtAAQgwAAgUgZg");
	this.shape.setTransform(-0.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AHjdyIgdAAQgFAAgEgDQgEgDgBgFQgFgZgLgXIgIgNIAAAAQgMgUgogyIgBAAQiAich8i8Qg+hfkIpXQkUpygjiTQhom6gdiYQhGlpAAj4QAAk7Cui6QBJhNBcgqQBWgnBUAAQAFAAAEAEQAFAEgBAGQABAFgFAEQg8A8gvByQhbDcAAFTQAAElBkGiQBeGHCjGnQCdGgC5FaQBEB/BCBpQB3C/ByB4IACADIAPAZQAdAzANADQAFAAAEADQAEADABAFQABAFgDAEQgXAtgmAiIAAAAQg6A0hSAAQgVAAgXgEgAJ/c1IAngyQgWgfgbgaQgagbgHgFIgKgIQgDgCgDAAQgIgCgYgwIgMgXIgCgDQg1hFg5hgQhViMhfjGQiclAiSmFQiYmNhplsQhxmIggkhQghkgBXj1QBXj1AOgmQAPglg5AdQg5AegOAIQgOAJgQAEQgRAFhABIQhABIgiBLQhTC1AgEUQAhEUAuDqQAuDrA5EBQA5D/EZJLQEXJLAxBYQBjCuBhCQIABAAQAeAuAKASIAAABQAKARAHAUIAFAUQACAEACADQADADADAAIASgBQAoAwCOgtg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73,-191,146.1,382.1);


(lib.grass01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669966").s().p("ADLd8IABAAIAAABgAkYc/IAJgNQAng5Abg+QAZg5ATg9IASg2QAUg8APg9QAwi6Aki+QBUnGAanPQAanLg1nKQgmlGgilFQgPiDg0h1QgKgIgMADQh5AiieEeQgCj7BqiIQBqiICZgdQAeACAaAVQBNA+ApBZQAvBlAcBtQALAqAEAuQAEArABAqIADBdQADBlAMBkQA7HuAkH0QATEHgCEHQgDGggsGbQglFSh8Eig");
	this.shape.setTransform(-0.9,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACWevIoagxQgCgCAAgDQgCgHABgHIACgQQAEgQAFgOQANgfAUgaQCFirAyjaQCbqvAglaQAjlbgUmXQgSl0hhrjIgzh2QhVA8goBUQgoBThWBKQhXBKA0kaQA0kaBXhKQBYhKCBggIAwABQAgAGAeAOQAOAIANAJQAOAIAMAKQANALALAMIAWAaIAKAOQAcAuAVAwQArBhAcBmQASBEAIBEQAEAhACAjIACAiIABAjIABA4QACA4AGA4QAWDSAYDRQBcMUgqMYQgaHvhrHhQgDAPgGAOQgiBOhOAWgADCd/IABABIADABIgDgCIgBAAgAha6MQA1B1AOCDQAiFGAmFFQA1HLgZHKQgaHPhUHGQgkC+gwC6QgQA+gTA7IgSA3QgUA8gZA5QgbA/gmA4IgJANIHEA3QB9khAklTQAsmbAEmfQACkIgTkHQglnzg6nvQgMhjgDhmIgDhdQgCgqgDgqQgEgvgLgqQgdhtguhlQgphZhNg9QgbgWgdgCQiZAehrCHQhqCIADD7QCekdB5gjIAGgBQAIAAAHAGg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-197.9,87,395.9);


(lib.flower02_petal04 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjjC2QgogwAAh2QAAhRA0hKQBBhdByAAQA0AAApAhQALAJAwA2QArA2AVAYQAjApAiAOQATAAAAAjQAAAliBBSQiCBShQAAQhxAAgrgzgAjCiJQgvBBAABKQAABsAkAsQAnAwBnAFQBJADB2hGQB2hGAAghQAAgigSgBQgegMghgmIg6hKQgsgzgJgIQglgggwgBIgKgBQhhAAg4BOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#771782","#D926D9"],[0,1],18.5,5.8,0,18.5,5.8,26.7).s().p("AhADTQhogEgngwQgkgtAAhrQAAhKAvhBQA7hSBoAEQAwACAlAgQAKAIAsAzIA6BJQAgAnAeAMQASABAAAhQAAAih2BGQhxBChHAAIgGAAg");
	this.shape_1.setTransform(0.1,-0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-23.3,53.8,46.7);


(lib.flower02_petal03 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah/DdQg3grgVg+QgLgegMhfQgKhTAAgWQAAhEAfgoQAjgrBEAAQAZgBAvAwQA5A7ARALQAkAWAtALQAsAJAUABIAJAFQAnAaAAA/QAAAigSAQQgcAYgWA6IgUA+QgKAfgMAPQgfAmhngBQg+AAg6gtgAhYjyQg+ABggApQgdAmAABAQAAAVAKBNQALBZAKAcQATA5AzAoQA0AqA6gBQBdgCAdglQALgNAJgdIASg7QAUg3AbgXQAQgPAAggQAAg7gkgXIgIgFQgSgBgpgHQgpgKghgUQgPgJg1g4QgqgqgXAAIgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#771782","#D926D9"],[0,1],11.6,-4.1,0,11.6,-4.1,30.2).s().p("Ah0DRQgzgpgTg4QgKgdgLhYQgJhOAAgVQAAhAAdglQAfgqA/gBQAXAAAqArQA1A3APAJQAiAVAoAJQApAHASACIAIAEQAkAYAAA7QAAAfgQAPQgaAYgUA2IgTA7QgJAdgLAOQgcAkheACIgDAAQg3AAg0gog");
	this.shape_1.setTransform(0.5,0.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.8,-26.7,47.6,53.4);


(lib.flower02_petal02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EFA8F0","#AC1FAD"],[0,1],6.8,-9.7,-6.4,7.5).s().p("AivEWQgjgkAAhAQAAgtAXgrIAAAAQANgaBAheIAAAAQBbiTAlg1QA+hRA8gBQA1ABARA+IABAIQgCApgFAeQgJA9gdBIIgBABQggBzgmBSQhGCXhiABIAAAAQhCAAgkgjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJFNQhLAAgpgqQgpgoAAhJQAAgyAZgwIAAABQANgaBBhgIAAABQBciVAlg1QBFhbBFABQBFgBAUBQIABABIABAHIAAADIAAABIAAABQgCAqgFAeQgJBBgfBJIABgBQghB2gnBTQhMCjhtAAIgBAAgAASjmQglA1hbCTIAAAAQhABegNAaIAAAAQgXArAAAtQAABAAjAkQAkAjBCAAQBigBBGiXQAmhSAghzIABgBQAdhIAJg9QAFgeACgpIgBgIQgRg+g1gBQg8ABg+BRg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.2,-33.3,46.3,66.7);


(lib.flower02_petal01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtGJQgUgDgxgpIgsgkIgGgGIgZgWIgsglQg5gzAAg0QAAgcByjhQBxikAYgdQBNhdBIAAQC1AAAAEGQAABfgXBeQgbBzgvA5QhTBkgbAYQgwAqg0AAIgdgCgAglkQQgXAbhnCXQhpDOAAAaQAAAvA1AwIAnAhIAXAVIAHAFIAoAhQAsAmATADIAaABQAxAAArgmQAZgWBMhcQArg0AZhqQAVhWAAhXQAAjximAAQhCAAhGBVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EFA8F0","#AC1FAD"],[0,1],28.9,9.7,4.1,32.7).s().p("AgpFpQgTgDgsglIgogiIgHgFIgXgUIgngiQg1gvAAgwQAAgaBpjOQBniWAXgbQBGhVBCgBQCmABAADwQAABXgVBXQgZBpgrA0QhMBcgZAXQgrAmgxgBIAAAAIgagBg");
	this.shape_1.setTransform(-0.2,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.1,-39.5,58.3,79.1);


(lib.flower01_petals03 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#919191","#FFFFFF"],[0,1],-4.7,-7,0,-4.7,-7,14.5).s().p("AhjCaQgpgbgBg/QgChAArhAIAAAAQAphBA7gaQA6gZAqAbIAAAAQApAbABA/QABBAgqBBQgqBAg7AaIAAAAQgbAMgZAAQgZAAgWgOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhuCrQgygggBhLQgChGAuhFIAAAAQAthHBCgcQBDgdAyAhIAAAAQAyAgABBKQABBGgtBHQguBGhCAbIAAAAQgeAOgcAAQggAAgagRgAiNBAQABA/ApAbQAqAbA5gZIAAAAQA7gaAqhAQAqhBgBhAQgBg/gpgbIAAAAQgqgbg6AZQg7AagpBBIAAAAQgrBAACBAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.3,-18.9,32.6,37.8);


(lib.flower01_petals01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EFA8F0","#AC1FAD"],[0,1],-5.4,9.5,17.1,39.4).s().p("AhpGrQhXAAhIhiQhEheAAhnQAAhhAchbQAfhnA6hCQBdhqBFgtQBDgtBJgFQBIgEBEAQQA9AKAtAtIAAK5IgKgBQhDABijAlQg/AIgbAKIg5AYQgdAKgWAAIAAAAg");
	this.shape.setTransform(-34.4,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEqG3IgsgXIgUgIIgagNQgYgLgggIQhzgcg2AAQhGAAioApQhBAJgcAKIg9AaQgeAMgWAAQhaAAhLhrQhHhmAAhwQABhpAdhjQAfhwA9hHQBghzBEgtQBNgyBdgBQBCAAA6AMQBjAVAQAvQAqg0CGAAQDIAACWCNQCuChAAEKQAACKhqBuQhiBnhjAAQgfAAhCgjgAAtmTQgYACgTAVQAHFegSFeQA0ACBlAXQAfAIAXAKIAaAMIATAIIArAUQA/AgAfAAQBfAABeheQBnhmAAh/QAAj1idiIQiciJhygIQgigCgfAAQhKAAg9ANgAkAm8QhIAFhFAtQhFAtheBqQg6BBgfBoQgcBaAABiQAABnBFBeQBHBiBYAAQAWAAAdgKIA6gYQAcgKA+gIQCkgmBDAAIAKABIAAq5Qgtgtg+gKQg0gNg4AAIggABg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EFA8F0","#AC1FAD"],[0,1],7.4,-0.9,-15.8,35.7).s().p("AAxGqQgfAAg+ggIgqgUIgTgIIgagMQgXgKgfgIQhlgXg2gCQAUldgHlfQATgVAYgBQBWgUBxAIQBwAICdCJQCdCIAAD1QAAB/hnBmQheBehfAAIAAAAg");
	this.shape_2.setTransform(33.1,0.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.8,-47.4,139.6,94.8);


(lib.flower01_petal02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#771782","#D926D9"],[0,1],-4,12.2,0,-4,12.2,28.4).s().p("AhsBRQAAgeAQhVIAAABQALgxAyg4QAvg5AagJIAdgJQgDAMAAAJQAAAfAOAWQAGAJAVAWQgxAHgyAnIgCACIgCACIAAAAQg3A1gIAnQgFAZgEAIIABAAQAEgCACgEQAVg3AvgoIAFAhQAHAqAAALQAAAvghA5QgiA5ghABQgdgCAAiDg");
	this.shape.setTransform(-11.9,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#771782","#D926D9"],[0,1],9.5,19.1,0,9.5,19.1,37.3).s().p("AAZDeIAAAAQgTgWgEgjQgEg4gXhpQgLhDgngwIgBAAIAAgBIgBgCIgKgLIgBAAQgWgXgGgJQgLgSAAgZQAAgLAFgSIACgDIAAgCQARgIALAAQBcAAA/BZIAAAAQBCBcgBCZQAACUgnADIgDAAQgpAAgUgVg");
	this.shape_1.setTransform(9.9,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABxD1IgLgOQgQgegFgqIADAPQgJhHgWhnIAAAAQgLg9gjgsQgvABgyAnIAHAtQAHAsAAAMQABAzgjBFQgjBEg1ABQgxgFAAicQAAgfARhXIAAAAQAMg1A2g9QA2g+AegJIAmgMQAEgFADgBIACgBQAXgNAPABQBmgBBHBiIAAAAQBGBgAAClQAACng1ANQgOADgMAAQgjAAgVgagAC9DrQAmgDAAiUQABiahChbIAAAAQhAhZhdAAQgJAAgQAIIgBACIgCADQgFASAAALQAAAYALASQAGAJAVAYIAAAAIAKALIABACIAAAAIABABQAnAwAMBFQAWBmAGA5QAEAiATAWIAAAAQAVAWAsAAgAjjBAQAACEAdACQAigCAig5QAig4AAgvQAAgLgHgqIgFgiQgwArgWA1QgBAEgEABIgBABQAEgIAFgaQAHgnA5g1IAAAAIADgBIACgCQAygnAxgHQgWgWgFgJQgOgWAAgfQAAgJACgNIgcAKQgaAJgxA4QgyA5gMAwIAAAAQgQBUAAAeg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-27.2,49.7,54.4);


(lib.circle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E76161").s().p("AAAGKQi1ABiBh1QiAhzgBijQABiiCAh0QCBh0C1AAQC2AACBB0QCAB0ABCiQgBCjiABzQiBB0i2AAIAAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlEElQiHh5AAisQAAirCHh5QCHh5C9gBQC+ABCGB5QCIB5gBCrQABCsiIB5QiGB5i+AAQi9AAiHh5gAk2kWQiAB0gBCiQABCjCABzQCBB1C1gBQC2ABCBh1QCAhzABijQgBiiiAh0QiBh0i2AAIAAAAQi1AAiBB0g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46,-41.5,92,83);


(lib.boxlrg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(101,124,218,0.922)","#5E78E3"],[0,1],-19.2,147.8,-19.5,167.8).s().p("EgntAZ2IgJgBIAAgEMAAAgzgIAAgFQAEgBAGAAMBPaAAAIAEABQAEACACAFMAAAAzcQgBAHgJAAg");
	this.shape.setTransform(18.8,-153.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Egn2AbOQgpgCgUgVIAAgBQgZgUgDgoIAAgBMAAAgzxIAAgCQADgnAZgTIAAgBQAUgWAogCIABgBMBPtAAAIABABQBTAFAFBQMAAAAzyQgFBQhUAEgEgpJgZ3IgBABMAAAAzuIABABQABAmAYATIAAABQAUAUAmADMBPtAAAQBPgFAFhLMAAAgzxQgGhNhOgEIgCAAMhPqAAAIAAAAQgnACgUAVIAAAAQgXATgCAng");
	this.shape_1.setTransform(18.8,-153.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#10121B").s().p("Egn2AaBIAAAAIgHgCIANgIIgFgIIgBgDIAJABMBPbAAAQAJAAABgHMAAAgzcIAAAKIAUgBMAAAAzKIAAAAIAAATIgCAAQgEANgPADIAAABgEgoLAZ3IACgEIADAGIABACgEAoLgZ/IgBgBIACAAIAAAGg");
	this.shape_2.setTransform(18.7,-152.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(16,18,27,0.651)").s().p("AgGAAQgBgDgEgCQACgEAJAAQAHAAAEACIABAFIABALIgBAAIgSABg");
	this.shape_3.setTransform(274.7,-318.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Egn2AbKQgmgDgUgUIAAgBQgYgTgBgmIgBgBMAAAgzuIABgBQACgnAXgTIAAAAQAUgVAngCIAAAAMBPqAAAIACAAQBOAEAGBNMAAAAzxQgFBLhPAFgEgodgaqIgOANQgNAQgBAaMAAAAziIAAADIAAACQABAaANAQIAOANQARAMAeABMBPfAAAQBHgCABhEMAAAgzjQgBhEhHgCMhPfAAAQgfABgQAMg");
	this.shape_4.setTransform(18.8,-153.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444B7D").s().p("EgnuAa4QgegBgRgMIgOgNQgNgQgBgaIAAgCIAAgDMAAAgziQABgaAOgQIANgNQAQgMAfgBMBPgAAAQBGACACBEMAAAAzjQgCBEhGACgEgoKAZ6IABAAIAAACIgCAEIAGAEIAEAGIAEgCIAHACIAAAAMBPtAAAIAAgBQAPgDAEgNIACAAIAAgTIAAAAMAAAgzKIAAAAIAAgNIAAgGIgCAAQgDgOgQgDIAAgBMhPtAAAIAAABQgEAAgDACIgEgDIgDAGIgHAEIADAEIgBADIgBAAg");
	this.shape_5.setTransform(18.7,-153.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6CADD").s().p("EgoEAaEIgBgCIgDgGIgBgDIgBAAMAAAgzxIABAAIABgDIgCgEIAGgEIAEgGIAEACQADgBAEAAIAAgBMBPsAAAIAAABQAQADAEANIAAACQgDgCgIAAQgKAAgDAEIgFgBMhPaAAAQgFAAgEABIgBAFMAAAAzfIABAFIABACIAFAJIgNAIIgEACg");
	this.shape_6.setTransform(18.7,-153.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245.3,-328,528.1,348.6);


(lib.box = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egk7ADNQgogDgUgVIgBAAQgYgUgDgoIgBgCIAAjjIAAgFIAAgFIABgCQACgoAZgTIABAAQAUgWAngDIABAAIAJAAIABAAMBJsAAAIACAAQBSAFAGBQIAADvQgGBQhUAFgEgk6gDGQgnABgTAVIAAAAQgYATgCAnIgBABIAAAEIAAAFIAADiIABABQACAnAYATIAAAAQATAUAmADMBJ2AAAQBPgEAGhMIAAjuQgFhNhQgDIgCgBMhJqAAAIgBAAIgHAAIgBABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(101,124,218,0.831)","#5E78E3"],[0,1],-0.5,-6,-0.8,14.1).s().p("EgkyAB0IgJgBIAAgEIAAjdIAAgEIAKgCMBJjAAAIAEABQAFACABAGIAADYQgBAHgJAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#10121B").s().p("Egk6ACAIAAgBIgHgCIANgHIgFgJIgBgDIAIACMBJkAAAQAJAAABgIIAAjYIABAKIATgBIAADGIABAAIgBAUIgBAAQgFANgPADIAAABgEglQAB2IADgEIADAGIABACgEAlQgB4IgBgGIAAAAIAAgBIABAAIAAAJg");
	this.shape_2.setTransform(0,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(16,18,27,0.651)").s().p("AgGAAQgBgEgFgBQAEgEAIAAQAHAAAEACIAAAAIABAFIAAACIAAAAIABAJIgBAAIgRABg");
	this.shape_3.setTransform(237.2,-10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Egk7ADIQgmgDgTgUIAAAAQgYgTgCgnIgBgBIAAjiIAAgFIAAgEIABgBQACgnAYgTIAAAAQATgVAngBIABgBIAHAAIABAAMBJqAAAIACABQBQADAFBNIAADuQgGBMhPAEgEgligCpIgNANQgNAQgBAbIAADeIAAAEIAAABQABAbANAQIANANQASAMAdAAMBJpAAAQBGgCAChDIAAjgQgChEhGgCMhJpAAAQgdAAgSAMg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444B7D").s().p("EgkzAC2QgdAAgRgMIgOgNQgNgQgBgbIAAgBIAAgEIAAjeQABgbANgQIAOgNQARgMAdAAMBJpAAAQBHACABBEIAADgQgCBDhGACgEglPAB4IABAAIABACIgDAEIAHAFIAEAGIAEgDIAHACIAAAAMBJ1AAAIAAgBQAPgCAFgOIABAAIABgTIgBAAIAAjGIABAAIgBgKIAAgBIAAgJIgBAAQgFgOgPgCIAAgBMhJsAAAIAAAAIgJAAIAAAAIgHACIgEgDIgEAGIgHAFIADAEIgBADIgBAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6CADD").s().p("EglIACDIgBgDIgDgGIgBgCIgBAAIAAjuIABAAIABgDIgDgEIAHgFIADgGIAFADIAGgCIAAAAIAKAAIAAAAMBJsAAAIAAABQAPACAFAOIAAABQgEgCgHABQgKAAgEADIgEgBMhJjAAAIgKACIAAAEIAADdIAAAEIABADIAGAIIgNAIIgFADg");
	this.shape_6.setTransform(-0.1,0);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245.3,-20.5,490.6,41.1);


(lib.back_drop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#007C2E").ss(2.8,1,1).p("EA92Ap6Mh7rAAAMAAAhTzMB7rAAAg");
	this.shape.setTransform(395.9,268.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B0E3F9","#274224"],[0,1],-24.8,-230.8,-24,-52.3).s().p("Eg91Ap6MAAAhTzMB7rAAAMAAABTzg");
	this.shape_1.setTransform(395.9,268.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,794.5,539.2);


(lib.audiospeakersoundwaves = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgOhqQA7Bug7Bn");
	this.shape.setTransform(1.5,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,5.1,23.5);


(lib.arrow2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AgmAmIBNhL");
	this.shape.setTransform(3.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAnhNIAACbIhNhO");
	this.shape_1.setTransform(3.9,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgmAAIBNhNIAACbg");
	this.shape_2.setTransform(3.9,7.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.8,17.7);


(lib.arrow_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.502)").s().p("AhLBdIAAi5ICXAAIAAC5g");
	this.shape.setTransform(7.6,9.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,18.8);


(lib.answerfield = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AwdBqQg6AAAAg6IAAhfQAAg6A6AAMAg7AAAQA6AAAAA6IAABfQAAA6g6AAgAxIgvIAABfQAAArArAAMAg7AAAQArAAAAgrIAAhfQAAgrgrAAMgg7AAAQgrAAAAArg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AwdBbQgrAAAAgrIAAhfQAAgrArAAMAg7AAAQArAAAAArIAABfQAAArgrAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.2,-10.6,222.5,21.3);


(lib._springmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_16 = function() {
		playSound("_spring");
	}
	this.frame_42 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(26).call(this.frame_42).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._dripmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_20 = function() {
		playSound("_drip");
	}
	this.frame_30 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(10).call(this.frame_30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.vine_leaf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.vine("synched",0);
	this.instance.setTransform(53.5,10.6);

	this.instance_1 = new lib.leaf02("synched",0);
	this.instance_1.setTransform(-61.3,-34.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.3,-109.7,248.8,219.5);


(lib.vine_3leafs = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.leaf_half("synched",0);
	this.instance.setTransform(-43.6,-368.5,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance.cache(-167,-33,327,94);

	this.instance_1 = new lib.droplet("synched",0);
	this.instance_1.setTransform(17.5,-365.3,0.999,0.999,-8.8);

	this.instance_2 = new lib.leaf("synched",0);
	this.instance_2.setTransform(-43.6,-368.5,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_2.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_2.cache(-167,-72,334,143);

	this.instance_3 = new lib.vine_leaf("synched",0);
	this.instance_3.setTransform(-164.6,-331.6);
	this.instance_3.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_3.cache(-126,-112,253,224);

	this.instance_4 = new lib.leaf_half("synched",0);
	this.instance_4.setTransform(-43.6,-197.5,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_4.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_4.cache(-167,-33,327,94);

	this.instance_5 = new lib.droplet("synched",0);
	this.instance_5.setTransform(17.5,-194.3,0.999,0.999,-8.8);

	this.instance_6 = new lib.leaf("synched",0);
	this.instance_6.setTransform(-43.6,-197.5,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_6.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_6.cache(-167,-72,334,143);

	this.instance_7 = new lib.vine_leaf("synched",0);
	this.instance_7.setTransform(-164.6,-160.6);
	this.instance_7.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_7.cache(-126,-112,253,224);

	this.instance_8 = new lib.leaf_half("synched",0);
	this.instance_8.setTransform(-44.6,-26.8,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_8.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_8.cache(-167,-33,327,94);

	this.instance_9 = new lib.leaf_half("synched",0);
	this.instance_9.setTransform(-44.5,143.7,1,1,0,0,0,-158.8,-27.4);
	this.instance_9.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_9.cache(-167,-33,327,94);

	this.instance_10 = new lib.droplet("synched",0);
	this.instance_10.setTransform(16.5,-23.6,0.999,0.999,-8.8);

	this.instance_11 = new lib.droplet("synched",0);
	this.instance_11.setTransform(15.4,156.1);

	this.instance_12 = new lib.leaf("synched",0);
	this.instance_12.setTransform(-44.6,-26.8,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_12.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_12.cache(-167,-72,334,143);

	this.instance_13 = new lib.leaf("synched",0);
	this.instance_13.setTransform(-44.5,143.7,1,1,0,0,0,-158.8,-27.4);
	this.instance_13.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_13.cache(-167,-72,334,143);

	this.instance_14 = new lib.vine_leaf("synched",0);
	this.instance_14.setTransform(-165.6,10.1);
	this.instance_14.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_14.cache(-126,-112,253,224);

	this.instance_15 = new lib.vine_leaf("synched",0);
	this.instance_15.setTransform(-164.5,179);
	this.instance_15.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_15.cache(-126,-112,253,224);

	this.addChild(this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-290,-441.3,580.9,730.1);


(lib.scrollMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow2();
	this.instance.setTransform(7.6,10.1,1,1,0,0,0,3.9,7.9);

	this.instance_1 = new lib.arrow_bg();
	this.instance_1.setTransform(12.6,31,1.069,1.067,0,0,0,11.8,29);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,20);


(lib.mantis_happy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mantis_eyeclosed();
	this.instance.setTransform(0.9,-58.4,0.621,0.621,8.5);

	this.instance_1 = new lib.mantis_antenae("synched",0);
	this.instance_1.setTransform(-6.9,-70.5,0.571,0.59,0,-7.5,168.3,-26,27.2);

	this.instance_2 = new lib.mantis_antenae("synched",0);
	this.instance_2.setTransform(-3.8,-69.6,0.62,0.62,20.3,0,0,-26.9,27.5);

	this.instance_3 = new lib.mantis_head("synched",0);
	this.instance_3.setTransform(-14.6,-54.9,0.621,0.621,8.5,0,0,33.3,29);

	this.instance_4 = new lib.mantis_eyeclosed();
	this.instance_4.setTransform(-19.7,-62.2,0.483,0.521,8.5);

	this.instance_5 = new lib.mantis_armlower("synched",0);
	this.instance_5.setTransform(-27.7,-35.9,0.621,0.621,22.1,0,0,-2.2,-29.6);

	this.instance_6 = new lib.mantis_armmiddle("synched",0);
	this.instance_6.setTransform(-15.9,-2.9,0.621,0.621,22.1,0,0,17.4,19.7);

	this.instance_7 = new lib.mantis_armupper("synched",0);
	this.instance_7.setTransform(1.9,-42.9,0.621,0.621,22.1,0,0,-2.6,-34.1);

	this.instance_8 = new lib.mantis_body("synched",0);
	this.instance_8.setTransform(-7.8,7.1,0.621,0.621,22.1,0,0,12.8,44.9);

	this.instance_9 = new lib.mantis_armlower("synched",0);
	this.instance_9.setTransform(-30.3,-34.3,0.544,0.575,42.9,0,0,-2.3,-29.6);
	this.instance_9.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-13,-34,26,69);

	this.instance_10 = new lib.mantis_armmiddle("synched",0);
	this.instance_10.setTransform(-21.1,-5.7,0.556,0.547,20.3,0,0,17.4,19.8);
	this.instance_10.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-22,-26,44,53);

	this.instance_11 = new lib.mantis_armupper("synched",0);
	this.instance_11.setTransform(2,-42.8,0.621,0.621,29.8,0,0,-2.6,-34);
	this.instance_11.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-11,-39,22,77);

	this.instance_12 = new lib.mantis_wing("synched",0);
	this.instance_12.setTransform(-7.3,9,0.622,0.622,0,0,0,-51.7,-64.8);

	this.instance_13 = new lib.mantis_wing("synched",0);
	this.instance_13.setTransform(-8.4,8.4,0.622,0.622,1.3,0,0,-51.7,-64.8);
	this.instance_13.filters = [new cjs.ColorFilter(1, 1, 1, 1, -148, -87, 0, 0)];
	this.instance_13.cache(-55,-68,111,136);

	this.instance_14 = new lib.mantis_legUpper01("synched",0);
	this.instance_14.setTransform(33,69.8,0.363,0.298,0,-11,-7);

	this.instance_15 = new lib.mantis_legLower01("synched",0);
	this.instance_15.setTransform(33.6,92.3,0.363,0.298,0,-11,-7);

	this.instance_16 = new lib.mantis_legFoot01("synched",0);
	this.instance_16.setTransform(30.1,101.5,0.363,0.298,0,-11,-7);

	this.instance_17 = new lib.mantis_legMiddle("synched",0);
	this.instance_17.setTransform(30.8,79.5,0.363,0.298,0,-11,-7);

	this.instance_18 = new lib.mantis_legUpper01("synched",0);
	this.instance_18.setTransform(13.2,52.2,0.399,0.458,0,-2.8,0);

	this.instance_19 = new lib.mantis_legLower01("synched",0);
	this.instance_19.setTransform(10.8,86.6,0.399,0.458,0,-2.8,0);

	this.instance_20 = new lib.mantis_legFoot01("synched",0);
	this.instance_20.setTransform(5.8,100.1,0.399,0.458,0,-2.8,0,0.1,0);

	this.instance_21 = new lib.mantis_legMiddle("synched",0);
	this.instance_21.setTransform(9.5,66.5,0.399,0.458,0,-2.8,0);

	this.instance_22 = new lib.mantis_legUpper01("synched",0);
	this.instance_22.setTransform(-4.8,33.8,0.622,0.622);

	this.instance_23 = new lib.mantis_legLower01("synched",0);
	this.instance_23.setTransform(-11.3,80.4,0.622,0.622);

	this.instance_24 = new lib.mantis_legFoot01("synched",0);
	this.instance_24.setTransform(-20.1,98.7,0.622,0.622,0,0,0,0.1,0);

	this.instance_25 = new lib.mantis_legMiddle("synched",0);
	this.instance_25.setTransform(-11.8,53.2,0.622,0.622);

	this.instance_26 = new lib.mantis_bodylower("synched",0);
	this.instance_26.setTransform(19.3,46,0.622,0.622);

	this.instance_27 = new lib.mantis_legUpper01("synched",0);
	this.instance_27.setTransform(29.1,69.8,0.368,0.294,0,-4.8,-6.9);
	this.instance_27.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_27.cache(-21,-19,42,38);

	this.instance_28 = new lib.mantis_legLower01("synched",0);
	this.instance_28.setTransform(27.1,92.3,0.368,0.294,0,-4.8,-6.9);
	this.instance_28.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_28.cache(-10,-27,21,54);

	this.instance_29 = new lib.mantis_legFoot01("synched",0);
	this.instance_29.setTransform(22.6,101.5,0.368,0.294,0,-4.8,-6.9);
	this.instance_29.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_29.cache(-10,-8,21,17);

	this.instance_30 = new lib.mantis_legMiddle("synched",0);
	this.instance_30.setTransform(25.8,79.5,0.368,0.294,0,-4.8,-6.9);
	this.instance_30.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_30.cache(-13,-23,27,47);

	this.instance_31 = new lib.mantis_legUpper01("synched",0);
	this.instance_31.setTransform(11.2,52.2,0.399,0.459,0,3.5,0);
	this.instance_31.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_31.cache(-21,-19,42,38);

	this.instance_32 = new lib.mantis_legLower01("synched",0);
	this.instance_32.setTransform(4.9,86.6,0.399,0.459,0,3.5,0);
	this.instance_32.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_32.cache(-10,-27,21,54);

	this.instance_33 = new lib.mantis_legFoot01("synched",0);
	this.instance_33.setTransform(-1.5,100.1,0.399,0.459,0,3.5,0,0.1,0);
	this.instance_33.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_33.cache(-10,-8,21,17);

	this.instance_34 = new lib.mantis_legMiddle("synched",0);
	this.instance_34.setTransform(5.9,66.5,0.399,0.459,0,3.5,0);
	this.instance_34.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_34.cache(-13,-23,27,47);

	this.instance_35 = new lib.mantis_legUpper01("synched",0);
	this.instance_35.setTransform(-4.8,33.8,0.622,0.626,0,6.3,0);
	this.instance_35.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_35.cache(-21,-19,42,38);

	this.instance_36 = new lib.mantis_legLower01("synched",0);
	this.instance_36.setTransform(-16.5,80.4,0.622,0.626,0,6.3,0);
	this.instance_36.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_36.cache(-10,-27,21,54);

	this.instance_37 = new lib.mantis_legFoot01("synched",0);
	this.instance_37.setTransform(-27.3,98.7,0.622,0.626,0,6.3,0,0.1,0);
	this.instance_37.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_37.cache(-10,-8,21,17);

	this.instance_38 = new lib.mantis_legMiddle("synched",0);
	this.instance_38.setTransform(-14,53.2,0.622,0.626,0,6.3,0);
	this.instance_38.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_38.cache(-13,-23,27,47);

	this.addChild(this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.9,-97.4,109.1,201.2);


(lib.mantis_headwholeMouth = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mantis_eyeclosed("synched",0);
	this.instance.setTransform(-3,12.6,0.642,0.642,23.1);

	this.instance_1 = new lib.mantis_headmouth("synched",0);
	this.instance_1.setTransform(-23.1,15.3);

	this.instance_2 = new lib.mantis_eyeclosed("synched",0);
	this.instance_2.setTransform(-16.4,9.1,0.642,0.642,23.1);

	this.instance_3 = new lib.mantis_antenae("synched",0);
	this.instance_3.setTransform(-5.5,7.3,0.688,0.914,0,27.1,41.4,-27.2,27.2);

	this.instance_4 = new lib.mantis_antenae("synched",0);
	this.instance_4.setTransform(-3.2,4.5,0.508,0.681,0,47.3,-147,-27.3,27.2);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-36.2,91.8,75.1);


(lib.mantis_headwholeFront01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mantis_eyeclosed();
	this.instance.setTransform(10,17.4);

	this.instance_1 = new lib.mantis_antenae("synched",0);
	this.instance_1.setTransform(-5.2,0.2,0.921,0.952,0,0,175.8,-26,27.3);

	this.instance_2 = new lib.mantis_antenae("synched",0);
	this.instance_2.setTransform(26.8,-26.7);

	this.instance_3 = new lib.mantis_head("synched",0);
	this.instance_3.setTransform(-13.9,26.8,1,1,0,0,0,33.2,29);

	this.instance_4 = new lib.mantis_eyeclosed();
	this.instance_4.setTransform(-23.6,16.4,0.778,0.839);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-55.8,109.9,111.7);


(lib.mantis_headwholeBacK = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mantis_antenae("synched",0);
	this.instance.setTransform(2,-13.5,0.842,0.578,0,76.4,82.4,-27.4,28);

	this.instance_1 = new lib.mantis_antenae("synched",0);
	this.instance_1.setTransform(-0.3,-12.3,0.779,0.555,0,144.1,156.3,-27.4,28.1);

	this.instance_2 = new lib.mantis_eyeclosedBack("synched",0);
	this.instance_2.setTransform(-14.8,-8.7,0.613,0.613);

	this.instance_3 = new lib.mantis_headbackr("synched",0);
	this.instance_3.setTransform(-17.1,-13.2);

	this.instance_4 = new lib.mantis_eyeclosedBack("synched",0);
	this.instance_4.setTransform(-4.5,-13.8,0.613,0.613);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(-2,-15.7);

	this.addChild(this.shape,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-32.9,79.7,63.1);


(lib.mantis_eyebblinkcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mantis_pupil("synched",0);
	this.instance.setTransform(-2.4,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46FA3C").s().p("AgTANIgBgCIABgCIACgBIADABIABACIgBACIgDABIgCgBgAgDAGIgDgBIgBgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAIABgCIAGgFIAAgBIAAAAIACgBQAGgDAFgBIABAAQAEAAACACIABABIAAADIgCAEIgFADIAAAAIgBABIgEACIgHADIgBAAIgBAAIgCAAIgBAAg");
	this.shape.setTransform(-11.7,-11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008E00").s().p("Ai6AyQANglAxghQAIgGAKgGQAtgXBAgBQBQAAArAgQAsAeAIAOIAJAQIACAEQjGhmizB3IACgHgAiFAAIgBABIABACIACABIADgBIABgCIgBgBIgDAAIgCAAgAh5gJQAAABAAABQgBAAAAABQAAABAAAAQABABAAAAIABACIADABQACABAEgCIABAAIAIgDIADgCIABgBIAAAAIAFgFIACgEIAAgDIgBgBQgCgCgDAAIgBAAQgGABgGADIgCABIAAABIgBAAIgGAGIgBAAIgBACgAhkgaIAAAAIAAgBg");
	this.shape_1.setTransform(-0.3,-10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiKBiIgBgBIgCgCQguglgIgxQgCgJAAgMQAAgQAEgPQDBhsC9BaQAJAXAAAaQAAAMgBAJQgCAKgEAKIgCAIQiBBCiCAAQgiAAgigFg");
	this.shape_2.setTransform(-0.1,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008E00").s().p("AgZAwQhNAAg3gnQCiAfCZhXQgbAlgSANQg5AthRAAIAAAAg");
	this.shape_3.setTransform(2.6,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAACrQhVABg9gyIgCgCQgwgpgJg3QgCgMAAgMQABgRAEgRIAFgRQAOgmAlgfQA9gyBVgBQBWABA9AyQAcAXAPAcQASAgAAAlQAAAMgCAMQgCAMgEAKQgNArgoAhQg9AxhWAAIAAAAgACLBoQATgOAagmQiZBaiigfQA4AnBLAAQBRAAA6gugAjCgkQgEAPAAAQQAAAJACALQAJAyAtAlIACACIABABQCmAVChhTIADgIQADgJACgLQACgLgBgJQABgbgKgXQhWgohXAAQhnAAhqA7gAAAieQhBAAgsAYQgKAFgJAHQgwAjgOAkIgCAHQC0h4DGBoIgCgEIgKgRQgIgNgrghQgrgfhOAAIgCAAg");

	this.instance_1 = new lib.mantis_eyeclosed("synched",0);
	this.instance_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-17.2,41.7,34.4);


(lib.mantis_eyebblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mantis_pupil("synched",0);
	this.instance.setTransform(-2.4,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46FA3C").s().p("AgTANIgBgCIABgCIACgBIADABIABACIgBACIgDABIgCgBgAgDAGIgDgBIgBgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAIABgCIAGgFIAAgBIAAAAIACgBQAGgDAFgBIABAAQAEAAACACIABABIAAADIgCAEIgFADIAAAAIgBABIgEACIgHADIgBAAIgBAAIgCAAIgBAAg");
	this.shape.setTransform(-11.7,-11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008E00").s().p("Ai6AyQANglAxghQAIgGAKgGQAtgXBAgBQBQAAArAgQAsAeAIAOIAJAQIACAEQjGhmizB3IACgHgAiFAAIgBABIABACIACABIADgBIABgCIgBgBIgDAAIgCAAgAh5gJQAAABAAABQgBAAAAABQAAABAAAAQABABAAAAIABACIADABQACABAEgCIABAAIAIgDIADgCIABgBIAAAAIAFgFIACgEIAAgDIgBgBQgCgCgDAAIgBAAQgGABgGADIgCABIAAABIgBAAIgGAGIgBAAIgBACgAhkgaIAAAAIAAgBg");
	this.shape_1.setTransform(-0.3,-10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiKBiIgBgBIgCgCQguglgIgxQgCgJAAgMQAAgQAEgPQDBhsC9BaQAJAXAAAaQAAAMgBAJQgCAKgEAKIgCAIQiBBCiCAAQgiAAgigFg");
	this.shape_2.setTransform(-0.1,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008E00").s().p("AgZAwQhNAAg3gnQCiAfCZhXQgbAlgSANQg5AthRAAIAAAAg");
	this.shape_3.setTransform(2.6,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAACrQhVABg9gyIgCgCQgwgpgJg3QgCgMAAgMQABgRAEgRIAFgRQAOgmAlgfQA9gyBVgBQBWABA9AyQAcAXAPAcQASAgAAAlQAAAMgCAMQgCAMgEAKQgNArgoAhQg9AxhWAAIAAAAgACLBoQATgOAagmQiZBaiigfQA4AnBLAAQBRAAA6gugAjCgkQgEAPAAAQQAAAJACALQAJAyAtAlIACACIABABQCmAVChhTIADgIQADgJACgLQACgLgBgJQABgbgKgXQhWgohXAAQhnAAhqA7gAAAieQhBAAgsAYQgKAFgJAHQgwAjgOAkIgCAHQC0h4DGBoIgCgEIgKgRQgIgNgrghQgrgfhOAAIgCAAg");

	this.instance_1 = new lib.mantis_eyeclosed("synched",0);
	this.instance_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-17.2,41.7,34.4);


(lib.input_fields = function() {
	this.initialize();

	// Layer 5
	this.tryBtn = new lib.try_btn();
	this.tryBtn.setTransform(458.8,20.5,1,1,0,0,0,13.7,9.5);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2444C1").ss(2,1,1).p("AAnAAIACAAIAEAAIgDgBIgDABIgWAAIABgXIAYAWAARAAIAAASAATAYIAWgYAgsAAIA9AA");
	this.shape.setTransform(211.6,21.6);

	// Layer 3
	this.instance = new lib.answerfield("synched",0);
	this.instance.setTransform(330.3,20.3,1,0.917);

	// box
	this.instance_1 = new lib.box("synched",0);
	this.instance_1.setTransform(245.3,20.6);

	this.addChild(this.instance_1,this.instance,this.shape,this.tryBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,490.6,41.1);


(lib.grass_whole = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grass02("synched",0);
	this.instance.setTransform(-271.7,-111.5,0.913,0.913,0,0,180);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance.cache(-75,-193,150,386);

	this.instance_1 = new lib.grass01("synched",0);
	this.instance_1.setTransform(21.2,-32.8,1,1,0,0,180);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_1.cache(-45,-200,91,400);

	this.instance_2 = new lib.grass02("synched",0);
	this.instance_2.setTransform(250.4,21.3,1,1,0,0,180);
	this.instance_2.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_2.cache(-75,-193,150,386);

	this.instance_3 = new lib.grass02("synched",0);
	this.instance_3.setTransform(172.1,-54.8,1.209,1.209,0,0,180);
	this.instance_3.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_3.cache(-75,-193,150,386);

	this.instance_4 = new lib.grass01("synched",0);
	this.instance_4.setTransform(-216.7,-79.2,1.209,1.209);
	this.instance_4.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_4.cache(-45,-200,91,400);

	this.instance_5 = new lib.grass02("synched",0);
	this.instance_5.setTransform(-271.7,-9.2,0.913,0.913,0,0,180);
	this.instance_5.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_5.cache(-75,-193,150,386);

	this.instance_6 = new lib.grass01("synched",0);
	this.instance_6.setTransform(112.2,158.5,1,1,0,0,180);
	this.instance_6.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_6.cache(-45,-200,91,400);

	this.instance_7 = new lib.grass01("synched",0);
	this.instance_7.setTransform(-85,-19.1);
	this.instance_7.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_7.cache(-45,-200,91,400);

	this.instance_8 = new lib.grass03("synched",0);
	this.instance_8.setTransform(-213.9,36.2,0.913,0.913,0,0,180);
	this.instance_8.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_8.cache(-114,-145,229,291);

	this.instance_9 = new lib.grass03("synched",0);
	this.instance_9.setTransform(258.2,36.2,0.913,0.913,0,0,180);
	this.instance_9.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_9.cache(-114,-145,229,291);

	this.instance_10 = new lib.grass02("synched",0);
	this.instance_10.setTransform(-61.9,-111.5,0.913,0.913,0,0,180);
	this.instance_10.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_10.cache(-75,-193,150,386);

	this.instance_11 = new lib.grass03("synched",0);
	this.instance_11.setTransform(46.9,16.7);
	this.instance_11.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_11.cache(-114,-145,229,291);

	this.instance_12 = new lib.grass01("synched",0);
	this.instance_12.setTransform(218.5,-67,1.209,1.209,0,0,180);
	this.instance_12.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_12.cache(-45,-200,91,400);

	this.instance_13 = new lib.grass01("synched",0);
	this.instance_13.setTransform(-148,27.3);
	this.instance_13.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_13.cache(-45,-200,91,400);

	this.instance_14 = new lib.grass01("synched",0);
	this.instance_14.setTransform(60.6,21.6);
	this.instance_14.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_14.cache(-45,-200,91,400);

	this.instance_15 = new lib.grass03("synched",0);
	this.instance_15.setTransform(61.3,25.2,0.913,0.913,0,0,180);
	this.instance_15.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_15.cache(-114,-145,229,291);

	this.instance_16 = new lib.grass01("synched",0);
	this.instance_16.setTransform(127.3,-120.7);
	this.instance_16.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_16.cache(-45,-200,91,400);

	this.instance_17 = new lib.grass03("synched",0);
	this.instance_17.setTransform(124.8,-19.5,1.209,1.209,0,0,180);
	this.instance_17.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_17.cache(-114,-145,229,291);

	this.instance_18 = new lib.grass03("synched",0);
	this.instance_18.setTransform(-31.8,-96.3,1.209,1.209);
	this.instance_18.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_18.cache(-114,-145,229,291);

	this.instance_19 = new lib.grass02("synched",0);
	this.instance_19.setTransform(-223.8,7.5);
	this.instance_19.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_19.cache(-75,-193,150,386);

	this.instance_20 = new lib.grass02("synched",0);
	this.instance_20.setTransform(-49.5,-75.4,1.209,1.209);
	this.instance_20.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_20.cache(-75,-193,150,386);

	this.instance_21 = new lib.grass01("synched",0);
	this.instance_21.setTransform(308.2,-92,1.209,1.209,0,0,180);
	this.instance_21.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_21.cache(-45,-200,91,400);

	this.instance_22 = new lib.grass02("synched",0);
	this.instance_22.setTransform(44.3,-128.2,0.913,0.913);
	this.instance_22.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_22.cache(-75,-193,150,386);

	this.instance_23 = new lib.grass01("synched",0);
	this.instance_23.setTransform(-112.6,145.7);
	this.instance_23.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_23.cache(-45,-200,91,400);

	this.instance_24 = new lib.grass03("synched",0);
	this.instance_24.setTransform(213.5,23.3,0.913,0.913);
	this.instance_24.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_24.cache(-114,-145,229,291);

	this.instance_25 = new lib.grass03("synched",0);
	this.instance_25.setTransform(-216.1,23.3,0.913,0.913);
	this.instance_25.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_25.cache(-114,-145,229,291);

	this.instance_26 = new lib.grass02("synched",0);
	this.instance_26.setTransform(150.4,-111.5,0.913,0.913);
	this.instance_26.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_26.cache(-75,-193,150,386);

	this.instance_27 = new lib.grass01("synched",0);
	this.instance_27.setTransform(88.5,-50.6,1,1,0,0,180);
	this.instance_27.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_27.cache(-45,-200,91,400);

	this.instance_28 = new lib.grass03("synched",0);
	this.instance_28.setTransform(-47.3,3.9,1,1,0,0,180);
	this.instance_28.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_28.cache(-114,-145,229,291);

	this.instance_29 = new lib.grass02("synched",0);
	this.instance_29.setTransform(-198.7,-22.5,1.209,1.209);
	this.instance_29.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_29.cache(-75,-193,150,386);

	this.instance_30 = new lib.grass01("synched",0);
	this.instance_30.setTransform(-308.1,-63.1,1.209,1.209);
	this.instance_30.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_30.cache(-45,-200,91,400);

	this.instance_31 = new lib.grass01("synched",0);
	this.instance_31.setTransform(147.6,14.4,1,1,0,0,180);
	this.instance_31.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_31.cache(-45,-200,91,400);

	this.instance_32 = new lib.grass03("synched",0);
	this.instance_32.setTransform(-63.7,-0.9,0.913,0.913);
	this.instance_32.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_32.cache(-114,-145,229,291);

	this.instance_33 = new lib.grass02("synched",0);
	this.instance_33.setTransform(-2,-84.9,1,1,0,0,180);
	this.instance_33.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_33.cache(-75,-193,150,386);

	this.instance_34 = new lib.grass01("synched",0);
	this.instance_34.setTransform(-161.6,-67.9,1,1,0,0,180);
	this.instance_34.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_34.cache(-45,-200,91,400);

	this.instance_35 = new lib.grass02("synched",0);
	this.instance_35.setTransform(-4.4,-94.8);
	this.instance_35.filters = [new cjs.ColorFilter(1, 1, 1, 1, -36, 0, -41, 0)];
	this.instance_35.cache(-75,-193,150,386);

	this.addChild(this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-360.7,-331.4,721.6,687.9);


(lib.flower02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.flower02_petal03("synched",0);
	this.instance.setTransform(6.1,14.2,1.042,1.031,-8.8,0,0,19.7,-5.8);

	this.instance_1 = new lib.flower01_petals03("synched",0);
	this.instance_1.setTransform(8.1,14.8,1.36,1.289,0,50.1,41.3,7.5,-17.9);

	this.instance_2 = new lib.flower02_petal01("synched",0);
	this.instance_2.setTransform(24.9,-14.7);

	this.instance_3 = new lib.flower02_petal04("synched",0);
	this.instance_3.setTransform(-27.1,8.9);

	this.instance_4 = new lib.flower02_petal02("synched",0);
	this.instance_4.setTransform(3.9,-18.2);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54,-54.2,108,105);


(lib.flower01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.flower01_petal02("synched",0);
	this.instance.setTransform(-2.4,34.2);

	this.instance_1 = new lib.flower01_petals01("synched",0);
	this.instance_1.setTransform(0,-14);

	this.instance_2 = new lib.flower01_petals03("synched",0);
	this.instance_2.setTransform(-1.6,33.6);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.8,-61.4,139.6,122.9);


(lib.flower_bunch = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.flower02("synched",0);
	this.instance.setTransform(85.3,41.2,1,1,0,0,180);

	this.instance_1 = new lib.flower01("synched",0);
	this.instance_1.setTransform(70.2,77,0.87,0.897,0,-14.2,0);

	this.instance_2 = new lib.flower01("synched",0);
	this.instance_2.setTransform(1.5,-0.4);

	this.instance_3 = new lib.flower02("synched",0);
	this.instance_3.setTransform(-81.6,-62.3,1,1,0,0,180);

	this.instance_4 = new lib.flower01("synched",0);
	this.instance_4.setTransform(-15.2,-78.8,1,0.87);
	this.instance_4.filters = [new cjs.ColorFilter(1, 1, 1, 1, -21, 0, 0, 0)];
	this.instance_4.cache(-72,-63,144,127);

	this.instance_5 = new lib.flower02("synched",0);
	this.instance_5.setTransform(62.6,-99.6,0.998,0.998,0,52.6,-127.4);
	this.instance_5.filters = [new cjs.ColorFilter(1, 1, 1, 1, -21, 0, 0, 0)];
	this.instance_5.cache(-56,-56,112,109);

	this.instance_6 = new lib.flower01("synched",0);
	this.instance_6.setTransform(-48.6,-15.2,0.779,0.779,31.4,0,0,-0.1,0);

	this.instance_7 = new lib.flower02("synched",0);
	this.instance_7.setTransform(84.6,-26.9,1,1,0,0,180);
	this.instance_7.filters = [new cjs.ColorFilter(1, 1, 1, 1, -26, 0, 0, 0)];
	this.instance_7.cache(-56,-56,112,109);

	this.instance_8 = new lib.flower01("synched",0);
	this.instance_8.setTransform(-15.9,91.7,0.923,0.923,20.8);

	this.instance_9 = new lib.flower02("synched",0);
	this.instance_9.setTransform(-68.2,99.2,0.998,0.998,-40.1);

	this.instance_10 = new lib.flower02("synched",0);
	this.instance_10.setTransform(-88.9,31.1);
	this.instance_10.filters = [new cjs.ColorFilter(1, 1, 1, 1, -41, -67, -11, 0)];
	this.instance_10.cache(-56,-56,112,109);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-142.9,-167.8,282.2,320);


(lib.directions = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mantis_eyebblinkcopy();
	this.instance.setTransform(202.6,-77.3);

	this.instance_1 = new lib.mantis_antenae("synched",0);
	this.instance_1.setTransform(187.4,-94.5,0.921,0.952,0,0,175.8,-26,27.3);

	this.instance_2 = new lib.mantis_antenae("synched",0);
	this.instance_2.setTransform(219.4,-121.4);

	this.instance_3 = new lib.mantis_head("synched",0);
	this.instance_3.setTransform(178.6,-67.9,1,1,0,0,0,33.2,29);

	this.instance_4 = new lib.mantis_eyebblinkcopy();
	this.instance_4.setTransform(168.9,-78.3,0.778,0.839);

	this.instance_5 = new lib.circle("synched",0);
	this.instance_5.setTransform(184.1,-77.2);

	this.instance_6 = new lib.boxlrg("synched",0);
	this.instance_6.setTransform(-18.7,153.8);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-264,-174.3,528.1,348.6);


(lib.congratulation = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mantis_eyebblinkcopy();
	this.instance.setTransform(-179.4,-111,0.525,0.525,0,0,180);

	this.instance_1 = new lib.mantis_antenae("synched",0);
	this.instance_1.setTransform(-171.4,-120.1,0.484,0.5,0,0,4.2,-26,27.4);

	this.instance_2 = new lib.mantis_antenae("synched",0);
	this.instance_2.setTransform(-188.1,-134.2,0.525,0.525,0,0,180);

	this.instance_3 = new lib.mantis_head("synched",0);
	this.instance_3.setTransform(-166.8,-106,0.525,0.525,0,0,180,33.2,29.1);

	this.instance_4 = new lib.mantis_eyebblinkcopy();
	this.instance_4.setTransform(-161.7,-111.6,0.409,0.44,0,0,180);

	this.instance_5 = new lib.mantis_eyebblinkcopy();
	this.instance_5.setTransform(206.1,-108.3,0.754,0.754);

	this.instance_6 = new lib.mantis_antenae("synched",0);
	this.instance_6.setTransform(194.7,-121.4,0.695,0.718,0,0,175.8,-26.1,27.3);

	this.instance_7 = new lib.mantis_antenae("synched",0);
	this.instance_7.setTransform(218.8,-141.6,0.754,0.754);

	this.instance_8 = new lib.mantis_head("synched",0);
	this.instance_8.setTransform(188,-101.3,0.754,0.754,0,0,0,33.2,28.9);

	this.instance_9 = new lib.mantis_eyebblinkcopy();
	this.instance_9.setTransform(180.7,-109.1,0.587,0.633);

	this.instance_10 = new lib.boxlrg("synched",0);
	this.instance_10.setTransform(-18.7,153.8);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-264,-174.3,528.1,348.6);


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
	this.shape.graphics.f().s("#FFFFFF").ss(4.3,1,1).p("AAkBNIAAiZIgwAbIgXANAAcBNIgeggIgcgc");
	this.shape.setTransform(15.9,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxAvIgbgbIAbAbIhmAAQgVAAAAgUIAAg1QAAgUAVAAIBdAAIgXANIAXgNIAPAAQATAAABAUIAAA1QgBAUgTAAgAAogug");
	this.shape_1.setTransform(10.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(45));

	// Text
	this.text = new cjs.Text("Click\nto play", "10px 'Arial'", "#FFFFFF");
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


(lib.win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
        this.stop();
		/* stop();
		
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			_parent.gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// text
	this.playAgain = new lib.playAgain_btn();
	this.playAgain.setTransform(58,61.5,1,1,0,0,0,97,11.5);

	this.text = new cjs.Text("IDS_CONGRATS", "20px 'Arial'", "#003300");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 394;
	this.text.setTransform(2,-61);

	this.text_1 = new cjs.Text("IDS_CONGRATULATIONS", "22px 'Comic Sans MS'", "#000066");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 298;
	this.text_1.setTransform(3,-139);
	this.text_1.shadow = new cjs.Shadow("rgba(16,196,6,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text},{t:this.playAgain}]},4).wait(1));

	// Layer 1
	this.instance = new lib.congratulation("synched",0);
	this.instance.setTransform(0,-6.3,0.023,0.023);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},3).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-10.3,12.1,8);


(lib.mantis_babycrying = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.drip();
	this.instance.setTransform(3.6,-97.3,1.623,1.249,-83.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:0.36,scaleY:0.36,rotation:-6.2,guide:{path:[3.7,-97.1,59.5,-96.4,78.1,-41.1]},alpha:0.238},6).wait(1).to({rotation:-6.2},0).wait(16));

	// Layer 18
	this.instance_1 = new lib.drip();
	this.instance_1.setTransform(7.7,-83.9,1.622,1.249,-63.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:0.36,scaleY:0.36,rotation:13.6,guide:{path:[7.9,-83.8,60.1,-64.2,58.8,-5.9]},alpha:0.238},6).to({_off:true},1).wait(10));

	// Layer 16
	this.instance_2 = new lib.drip();
	this.instance_2.setTransform(3.9,-116.6,1.623,1.249,-142.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:0.36,scaleY:0.36,rotation:-65.1,guide:{path:[4,-116.5,33.5,-164,90.4,-151.3]},alpha:0.238},6).to({_off:true},1).wait(19));

	// Layer 2
	this.instance_3 = new lib.drip();
	this.instance_3.setTransform(4.7,-105.6,1.625,1.251,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.36,scaleY:0.36,rotation:-35.3,guide:{path:[4.8,-105.4,53.9,-132,97.2,-92.6]},alpha:0.238},6).to({_off:true},1).wait(20));

	// Layer 1
	this.instance_4 = new lib.mantis_headwholeMouth();
	this.instance_4.setTransform(-20,-120.9,1.516,1.516);

	this.instance_5 = new lib.mantis_armlower("synched",0);
	this.instance_5.setTransform(-64.3,-41.4,1,1,0,0,0,-2.3,-29.6);

	this.instance_6 = new lib.mantis_armmiddle("synched",0);
	this.instance_6.setTransform(-26.7,0.7,1,1,0,0,0,17.4,19.7);

	this.instance_7 = new lib.mantis_armupper("synched",0);
	this.instance_7.setTransform(-24.3,-69.7,1,1,0,0,0,-2.6,-34.1);

	this.instance_8 = new lib.mantis_body("synched",0);
	this.instance_8.setTransform(-8.5,10.8,1,1,0,0,0,12.9,44.9);

	this.instance_9 = new lib.mantis_armlower("synched",0);
	this.instance_9.setTransform(-67.2,-37.6,0.876,0.925,20.8,0,0,-2.2,-29.7);
	this.instance_9.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-13,-34,26,69);

	this.instance_10 = new lib.mantis_armmiddle("synched",0);
	this.instance_10.setTransform(-36.1,-0.3,0.896,0.881,-1.7,0,0,17.4,19.7);
	this.instance_10.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-22,-26,44,53);

	this.instance_11 = new lib.mantis_armupper("synched",0);
	this.instance_11.setTransform(-24.3,-69.6,1,1,7.8,0,0,-2.7,-34);
	this.instance_11.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-11,-39,22,77);

	this.instance_12 = new lib.mantis_wing("synched",0);
	this.instance_12.setTransform(-7.4,13.6,1,1,0,0,0,-51.7,-64.8);

	this.instance_13 = new lib.mantis_wing("synched",0);
	this.instance_13.setTransform(-9.1,12.5,1,1,1.3,0,0,-51.7,-64.8);
	this.instance_13.filters = [new cjs.ColorFilter(1, 1, 1, 1, -148, -87, 0, 0)];
	this.instance_13.cache(-55,-68,111,136);

	this.instance_14 = new lib.mantis_legUpper01("synched",0);
	this.instance_14.setTransform(57.5,111.3,0.584,0.48,0,-11,-7);

	this.instance_15 = new lib.mantis_legLower01("synched",0);
	this.instance_15.setTransform(58.3,147.4,0.584,0.48,0,-11,-7);

	this.instance_16 = new lib.mantis_legFoot01("synched",0);
	this.instance_16.setTransform(52.7,162.3,0.584,0.48,0,-11,-7);

	this.instance_17 = new lib.mantis_legMiddle("synched",0);
	this.instance_17.setTransform(53.9,126.9,0.584,0.48,0,-11,-7);

	this.instance_18 = new lib.mantis_legUpper01("synched",0);
	this.instance_18.setTransform(25.6,83,0.641,0.737,0,-2.8,0);

	this.instance_19 = new lib.mantis_legLower01("synched",0);
	this.instance_19.setTransform(21.6,138.3,0.641,0.737,0,-2.8,0);

	this.instance_20 = new lib.mantis_legFoot01("synched",0);
	this.instance_20.setTransform(13.6,159.9,0.641,0.737,0,-2.8,0,0.1,0);

	this.instance_21 = new lib.mantis_legMiddle("synched",0);
	this.instance_21.setTransform(19.6,106,0.641,0.737,0,-2.8,0);

	this.instance_22 = new lib.mantis_legUpper01("synched",0);
	this.instance_22.setTransform(-3.3,53.3);

	this.instance_23 = new lib.mantis_legLower01("synched",0);
	this.instance_23.setTransform(-13.9,128.3);

	this.instance_24 = new lib.mantis_legFoot01("synched",0);
	this.instance_24.setTransform(-28.1,157.8);

	this.instance_25 = new lib.mantis_legMiddle("synched",0);
	this.instance_25.setTransform(-14.7,84.5);

	this.instance_26 = new lib.mantis_bodylower("synched",0);
	this.instance_26.setTransform(35.4,73);

	this.instance_27 = new lib.mantis_legUpper01("synched",0);
	this.instance_27.setTransform(51.1,111.3,0.592,0.473,0,-4.8,-6.9);
	this.instance_27.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_27.cache(-21,-19,42,38);

	this.instance_28 = new lib.mantis_legLower01("synched",0);
	this.instance_28.setTransform(48,147.4,0.592,0.473,0,-4.8,-6.9);
	this.instance_28.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_28.cache(-10,-27,21,54);

	this.instance_29 = new lib.mantis_legFoot01("synched",0);
	this.instance_29.setTransform(40.7,162.3,0.592,0.473,0,-4.8,-6.9);
	this.instance_29.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_29.cache(-10,-8,21,17);

	this.instance_30 = new lib.mantis_legMiddle("synched",0);
	this.instance_30.setTransform(45.8,126.9,0.592,0.473,0,-4.8,-6.9);
	this.instance_30.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_30.cache(-13,-23,27,47);

	this.instance_31 = new lib.mantis_legUpper01("synched",0);
	this.instance_31.setTransform(22.3,83,0.641,0.737,0,3.5,0);
	this.instance_31.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_31.cache(-21,-19,42,38);

	this.instance_32 = new lib.mantis_legLower01("synched",0);
	this.instance_32.setTransform(12.3,138.3,0.641,0.737,0,3.5,0);
	this.instance_32.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_32.cache(-10,-27,21,54);

	this.instance_33 = new lib.mantis_legFoot01("synched",0);
	this.instance_33.setTransform(1.9,159.9,0.641,0.737,0,3.5,0,0.1,0);
	this.instance_33.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_33.cache(-10,-8,21,17);

	this.instance_34 = new lib.mantis_legMiddle("synched",0);
	this.instance_34.setTransform(13.8,106,0.641,0.737,0,3.5,0);
	this.instance_34.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_34.cache(-13,-23,27,47);

	this.instance_35 = new lib.mantis_legUpper01("synched",0);
	this.instance_35.setTransform(-3.4,53.3,1,1.006,0,6.3,0);
	this.instance_35.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_35.cache(-21,-19,42,38);

	this.instance_36 = new lib.mantis_legLower01("synched",0);
	this.instance_36.setTransform(-22.2,128.3,1,1.006,0,6.3,0);
	this.instance_36.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_36.cache(-10,-27,21,54);

	this.instance_37 = new lib.mantis_legFoot01("synched",0);
	this.instance_37.setTransform(-39.7,157.8,1,1.006,0,6.3,0);
	this.instance_37.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_37.cache(-10,-8,21,17);

	this.instance_38 = new lib.mantis_legMiddle("synched",0);
	this.instance_38.setTransform(-18.1,84.5,1,1.006,0,6.3,0);
	this.instance_38.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_38.cache(-13,-23,27,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-69.6}},{t:this.instance_10,p:{y:-0.3,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-37.6,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-69.7}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,y:0.7,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:-64.3,y:-41.4,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.516,scaleY:1.516,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-70.4}},{t:this.instance_10,p:{y:-1,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-38.3,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-70.5}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:10,y:0,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:10,x:-56.4,y:-48,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.541,scaleY:1.515,skewX:-3.6,skewY:6.9}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-71.1}},{t:this.instance_10,p:{y:-1.8,scaleX:0.895,rotation:8.1,scaleY:0.881}},{t:this.instance_9,p:{y:-41.2,x:-62.4,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-71.2}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:15.8,y:-0.7,x:-26.5,regX:17.4}},{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:4.5,x:-51.2,y:-51.4,regX:-2.2}},{t:this.instance_4,p:{scaleX:1.562,scaleY:1.489,skewX:1.3,skewY:10.5}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-69.6}},{t:this.instance_10,p:{y:-2.5,scaleX:0.895,rotation:24.1,scaleY:0.88}},{t:this.instance_9,p:{y:-45.8,x:-47.8,regY:-29.6,scaleX:0.875,rotation:10.5,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-72}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:22.3,y:-1.5,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1.028,scaleY:1.004,rotation:5,x:-44.5,y:-53,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.565,scaleY:1.474,skewX:1.3,skewY:17.6}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-71.1}},{t:this.instance_10,p:{y:-1.8,scaleX:0.895,rotation:8.1,scaleY:0.881}},{t:this.instance_9,p:{y:-41.2,x:-61.8,regY:-29.6,scaleX:0.874,rotation:17.1,regX:-2.1,scaleY:0.924}},{t:this.instance_8},{t:this.instance_7,p:{y:-71.2}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:1.8,y:-0.8,x:-26.7,regX:17.5}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-4.8,x:-62.1,y:-43.1,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.562,scaleY:1.489,skewX:1.3,skewY:10.5}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-70.4}},{t:this.instance_10,p:{y:-1,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-38.3,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-70.5}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,y:0,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:-64.3,y:-42.1,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.541,scaleY:1.515,skewX:-3.6,skewY:6.9}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-69.6}},{t:this.instance_10,p:{y:-0.3,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-37.6,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-69.7}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,y:0.7,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:-64.3,y:-41.4,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.516,scaleY:1.516,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-70.4}},{t:this.instance_10,p:{y:-1,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-38.3,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-70.5}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:10,y:0,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:10,x:-56.4,y:-48,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.541,scaleY:1.515,skewX:-3.6,skewY:6.9}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-71.1}},{t:this.instance_10,p:{y:-1.8,scaleX:0.895,rotation:8.1,scaleY:0.881}},{t:this.instance_9,p:{y:-41.2,x:-62.4,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-71.2}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:15.8,y:-0.7,x:-26.5,regX:17.4}},{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:4.5,x:-51.2,y:-51.4,regX:-2.2}},{t:this.instance_4,p:{scaleX:1.562,scaleY:1.489,skewX:1.3,skewY:10.5}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-69.6}},{t:this.instance_10,p:{y:-2.5,scaleX:0.895,rotation:24.1,scaleY:0.88}},{t:this.instance_9,p:{y:-45.8,x:-47.8,regY:-29.6,scaleX:0.875,rotation:10.5,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-72}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:22.3,y:-1.5,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1.028,scaleY:1.004,rotation:5,x:-44.5,y:-53,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.565,scaleY:1.474,skewX:1.3,skewY:17.6}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-71.1}},{t:this.instance_10,p:{y:-1.8,scaleX:0.895,rotation:8.1,scaleY:0.881}},{t:this.instance_9,p:{y:-41.2,x:-61.8,regY:-29.6,scaleX:0.874,rotation:17.1,regX:-2.1,scaleY:0.924}},{t:this.instance_8},{t:this.instance_7,p:{y:-71.2}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:1.8,y:-0.8,x:-26.7,regX:17.5}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-4.8,x:-62.1,y:-43.1,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.562,scaleY:1.489,skewX:1.3,skewY:10.5}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-70.4}},{t:this.instance_10,p:{y:-1,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-38.3,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-70.5}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,y:0,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:-64.3,y:-42.1,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.541,scaleY:1.515,skewX:-3.6,skewY:6.9}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-69.6}},{t:this.instance_10,p:{y:-0.3,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-37.6,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-69.7}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,y:0.7,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:-64.3,y:-41.4,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.516,scaleY:1.516,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-70.4}},{t:this.instance_10,p:{y:-1,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-38.3,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-70.5}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:10,y:0,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:10,x:-56.4,y:-48,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.541,scaleY:1.515,skewX:-3.6,skewY:6.9}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-71.1}},{t:this.instance_10,p:{y:-1.8,scaleX:0.895,rotation:8.1,scaleY:0.881}},{t:this.instance_9,p:{y:-41.2,x:-62.4,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-71.2}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:15.8,y:-0.7,x:-26.5,regX:17.4}},{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:4.5,x:-51.2,y:-51.4,regX:-2.2}},{t:this.instance_4,p:{scaleX:1.562,scaleY:1.489,skewX:1.3,skewY:10.5}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-69.6}},{t:this.instance_10,p:{y:-2.5,scaleX:0.895,rotation:24.1,scaleY:0.88}},{t:this.instance_9,p:{y:-45.8,x:-47.8,regY:-29.6,scaleX:0.875,rotation:10.5,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-72}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:22.3,y:-1.5,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1.028,scaleY:1.004,rotation:5,x:-44.5,y:-53,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.565,scaleY:1.474,skewX:1.3,skewY:17.6}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-71.1}},{t:this.instance_10,p:{y:-1.8,scaleX:0.895,rotation:8.1,scaleY:0.881}},{t:this.instance_9,p:{y:-41.2,x:-61.8,regY:-29.6,scaleX:0.874,rotation:17.1,regX:-2.1,scaleY:0.924}},{t:this.instance_8},{t:this.instance_7,p:{y:-71.2}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:1.8,y:-0.8,x:-26.7,regX:17.5}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-4.8,x:-62.1,y:-43.1,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.562,scaleY:1.489,skewX:1.3,skewY:10.5}}]},1).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{y:-70.4}},{t:this.instance_10,p:{y:-1,scaleX:0.896,rotation:-1.7,scaleY:0.881}},{t:this.instance_9,p:{y:-38.3,x:-67.2,regY:-29.7,scaleX:0.876,rotation:20.8,regX:-2.2,scaleY:0.925}},{t:this.instance_8},{t:this.instance_7,p:{y:-70.5}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,y:0,x:-26.7,regX:17.4}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:-64.3,y:-42.1,regX:-2.3}},{t:this.instance_4,p:{scaleX:1.541,scaleY:1.515,skewX:-3.6,skewY:6.9}}]},1).wait(10));

	// Layer 12
	this.instance_39 = new lib.drip();
	this.instance_39.setTransform(-86.9,-136,1.621,1.248,0,103.2,-76.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({scaleX:0.36,scaleY:0.36,skewX:26.1,skewY:-153.9,x:-162.6,y:-94.3,alpha:0.238},6).to({_off:true},1).wait(20));

	// Layer 10
	this.instance_40 = new lib.drip();
	this.instance_40.setTransform(-73.7,-121.9,1.621,1.248,0,103.2,-76.8);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(7).to({_off:false},0).to({scaleX:0.36,scaleY:0.36,skewX:26.1,skewY:-153.9,guide:{path:[-73.8,-121.8,-126.4,-140,-162.6,-94.3]},alpha:0.238},6).to({_off:true},1).wait(13));

	// Layer 14
	this.instance_41 = new lib.drip();
	this.instance_41.setTransform(-76.3,-117.8,1.621,1.248,0,80.4,-99.6);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(3).to({_off:false},0).to({scaleX:0.36,scaleY:0.36,skewX:3.2,skewY:-176.8,guide:{path:[-76.1,-117.7,-131.9,-114.1,-147.6,-58.1]},alpha:0.238},6).to({_off:true},1).wait(17));

	// Layer 8
	this.instance_42 = new lib.drip();
	this.instance_42.setTransform(-83.3,-124.4,1.623,1.25,0,139.1,-40.9);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(2).to({_off:false},0).to({scaleX:0.36,scaleY:0.36,skewX:61.9,skewY:-118.1,guide:{path:[-83.3,-124.3,-115.3,-170.1,-171.6,-154.2]},alpha:0.238},6).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,-179.9,202,345.8);


(lib.mantis_headwholeFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mantis_eyebblink();
	this.instance.setTransform(10,17.4);

	this.instance_1 = new lib.mantis_antenae("synched",0);
	this.instance_1.setTransform(-5.2,0.2,0.921,0.952,0,0,175.8,-26,27.3);

	this.instance_2 = new lib.mantis_antenae("synched",0);
	this.instance_2.setTransform(26.8,-26.7);

	this.instance_3 = new lib.mantis_head("synched",0);
	this.instance_3.setTransform(-13.9,26.8,1,1,0,0,0,33.2,29);

	this.instance_4 = new lib.mantis_eyebblink();
	this.instance_4.setTransform(-23.6,16.4,0.778,0.839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-55.8,109.9,111.7);


(lib.mantis_standing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mantis_headwholeFront();
	this.instance.setTransform(-42.8,-110);

	this.instance_1 = new lib.mantis_armlower("synched",0);
	this.instance_1.setTransform(-64.3,-41.4,1,1,0,0,0,-2.3,-29.6);

	this.instance_2 = new lib.mantis_armmiddle("synched",0);
	this.instance_2.setTransform(-26.7,0.7,1,1,0,0,0,17.4,19.7);

	this.instance_3 = new lib.mantis_armupper("synched",0);
	this.instance_3.setTransform(-24.3,-69.7,1,1,0,0,0,-2.6,-34.1);

	this.instance_4 = new lib.mantis_body("synched",0);
	this.instance_4.setTransform(-8.5,10.8,1,1,0,0,0,12.9,44.9);

	this.instance_5 = new lib.mantis_armlower("synched",0);
	this.instance_5.setTransform(-67.2,-37.6,0.876,0.925,20.8,0,0,-2.2,-29.7);
	this.instance_5.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-13,-34,26,69);

	this.instance_6 = new lib.mantis_armmiddle("synched",0);
	this.instance_6.setTransform(-36.1,-0.3,0.896,0.881,-1.7,0,0,17.4,19.7);
	this.instance_6.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-22,-26,44,53);

	this.instance_7 = new lib.mantis_armupper("synched",0);
	this.instance_7.setTransform(-24.3,-69.6,1,1,7.8,0,0,-2.7,-34);
	this.instance_7.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_7.cache(-11,-39,22,77);

	this.instance_8 = new lib.mantis_wing("synched",0);
	this.instance_8.setTransform(-7.4,13.6,1,1,0,0,0,-51.7,-64.8);

	this.instance_9 = new lib.mantis_wing("synched",0);
	this.instance_9.setTransform(-9.1,12.5,1,1,1.3,0,0,-51.7,-64.8);
	this.instance_9.filters = [new cjs.ColorFilter(1, 1, 1, 1, -148, -87, 0, 0)];
	this.instance_9.cache(-55,-68,111,136);

	this.instance_10 = new lib.mantis_legUpper01("synched",0);
	this.instance_10.setTransform(57.5,111.3,0.584,0.48,0,-11,-7);

	this.instance_11 = new lib.mantis_legLower01("synched",0);
	this.instance_11.setTransform(58.3,147.4,0.584,0.48,0,-11,-7);

	this.instance_12 = new lib.mantis_legFoot01("synched",0);
	this.instance_12.setTransform(52.7,162.3,0.584,0.48,0,-11,-7);

	this.instance_13 = new lib.mantis_legMiddle("synched",0);
	this.instance_13.setTransform(53.9,126.9,0.584,0.48,0,-11,-7);

	this.instance_14 = new lib.mantis_legUpper01("synched",0);
	this.instance_14.setTransform(25.6,83,0.641,0.737,0,-2.8,0);

	this.instance_15 = new lib.mantis_legLower01("synched",0);
	this.instance_15.setTransform(21.6,138.3,0.641,0.737,0,-2.8,0);

	this.instance_16 = new lib.mantis_legFoot01("synched",0);
	this.instance_16.setTransform(13.6,159.9,0.641,0.737,0,-2.8,0,0.1,0);

	this.instance_17 = new lib.mantis_legMiddle("synched",0);
	this.instance_17.setTransform(19.6,106,0.641,0.737,0,-2.8,0);

	this.instance_18 = new lib.mantis_legUpper01("synched",0);
	this.instance_18.setTransform(-3.3,53.3);

	this.instance_19 = new lib.mantis_legLower01("synched",0);
	this.instance_19.setTransform(-13.9,128.3);

	this.instance_20 = new lib.mantis_legFoot01("synched",0);
	this.instance_20.setTransform(-28.1,157.8);

	this.instance_21 = new lib.mantis_legMiddle("synched",0);
	this.instance_21.setTransform(-14.7,84.5);

	this.instance_22 = new lib.mantis_bodylower("synched",0);
	this.instance_22.setTransform(35.4,73);

	this.instance_23 = new lib.mantis_legUpper01("synched",0);
	this.instance_23.setTransform(51.1,111.3,0.592,0.473,0,-4.8,-6.9);
	this.instance_23.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_23.cache(-21,-19,42,38);

	this.instance_24 = new lib.mantis_legLower01("synched",0);
	this.instance_24.setTransform(48,147.4,0.592,0.473,0,-4.8,-6.9);
	this.instance_24.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_24.cache(-10,-27,21,54);

	this.instance_25 = new lib.mantis_legFoot01("synched",0);
	this.instance_25.setTransform(40.7,162.3,0.592,0.473,0,-4.8,-6.9);
	this.instance_25.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_25.cache(-10,-8,21,17);

	this.instance_26 = new lib.mantis_legMiddle("synched",0);
	this.instance_26.setTransform(45.8,126.9,0.592,0.473,0,-4.8,-6.9);
	this.instance_26.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_26.cache(-13,-23,27,47);

	this.instance_27 = new lib.mantis_legUpper01("synched",0);
	this.instance_27.setTransform(22.3,83,0.641,0.737,0,3.5,0);
	this.instance_27.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_27.cache(-21,-19,42,38);

	this.instance_28 = new lib.mantis_legLower01("synched",0);
	this.instance_28.setTransform(12.3,138.3,0.641,0.737,0,3.5,0);
	this.instance_28.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_28.cache(-10,-27,21,54);

	this.instance_29 = new lib.mantis_legFoot01("synched",0);
	this.instance_29.setTransform(1.9,159.9,0.641,0.737,0,3.5,0,0.1,0);
	this.instance_29.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_29.cache(-10,-8,21,17);

	this.instance_30 = new lib.mantis_legMiddle("synched",0);
	this.instance_30.setTransform(13.8,106,0.641,0.737,0,3.5,0);
	this.instance_30.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_30.cache(-13,-23,27,47);

	this.instance_31 = new lib.mantis_legUpper01("synched",0);
	this.instance_31.setTransform(-3.4,53.3,1,1.006,0,6.3,0);
	this.instance_31.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_31.cache(-21,-19,42,38);

	this.instance_32 = new lib.mantis_legLower01("synched",0);
	this.instance_32.setTransform(-22.2,128.3,1,1.006,0,6.3,0);
	this.instance_32.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_32.cache(-10,-27,21,54);

	this.instance_33 = new lib.mantis_legFoot01("synched",0);
	this.instance_33.setTransform(-39.7,157.8,1,1.006,0,6.3,0);
	this.instance_33.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_33.cache(-10,-8,21,17);

	this.instance_34 = new lib.mantis_legMiddle("synched",0);
	this.instance_34.setTransform(-18.1,84.5,1,1.006,0,6.3,0);
	this.instance_34.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_34.cache(-13,-23,27,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.7,-165.8,195.5,331.7);


(lib.incorrect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
        this.stop();
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAu+AfUMhd7AAAMAAAg+nMBd7AAAg");
	this.shape.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

	// droplet
	this.instance = new lib.droplet("synched",0);
	this.instance.setTransform(51.5,-112.8,1.076,0.885,-25.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:0.63,scaleY:2.03,rotation:0,skewX:-10.1,skewY:-33.7,x:68.3,y:-143.4},2,cjs.Ease.get(1)).wait(1).to({scaleX:0.59,scaleY:1.67,rotation:-25.8,skewX:0,skewY:0,y:-92.6},0).to({_off:true},1).wait(21));

	// mantis
	this.instance_1 = new lib.mantis_standing("synched",0);
	this.instance_1.setTransform(123.2,-2.8,0.622,0.622);

	this.instance_2 = new lib.mantis_eyeclosed();
	this.instance_2.setTransform(126.7,-61.9,0.621,0.621,8.5);

	this.instance_3 = new lib.mantis_antenae("synched",0);
	this.instance_3.setTransform(119,-73.9,0.571,0.59,0,-7.5,168.3,-26,27.2);

	this.instance_4 = new lib.mantis_antenae("synched",0);
	this.instance_4.setTransform(122.1,-73.1,0.62,0.62,20.3,0,0,-26.9,27.5);

	this.instance_5 = new lib.mantis_head("synched",0);
	this.instance_5.setTransform(111.2,-58.3,0.621,0.621,8.5,0,0,33.3,29);

	this.instance_6 = new lib.mantis_eyeclosed();
	this.instance_6.setTransform(106.2,-65.6,0.483,0.521,8.5);

	this.instance_7 = new lib.mantis_armlower("synched",0);
	this.instance_7.setTransform(98.2,-39.4,0.621,0.621,22.1,0,0,-2.2,-29.6);

	this.instance_8 = new lib.mantis_armmiddle("synched",0);
	this.instance_8.setTransform(109.9,-6.3,0.621,0.621,22.1,0,0,17.4,19.7);

	this.instance_9 = new lib.mantis_armupper("synched",0);
	this.instance_9.setTransform(127.8,-46.3,0.621,0.621,22.1,0,0,-2.6,-34.1);

	this.instance_10 = new lib.mantis_body("synched",0);
	this.instance_10.setTransform(118.1,3.7,0.621,0.621,22.1,0,0,12.8,44.9);

	this.instance_11 = new lib.mantis_armlower("synched",0);
	this.instance_11.setTransform(95.6,-37.8,0.544,0.575,42.9,0,0,-2.3,-29.6);
	this.instance_11.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-13,-34,26,69);

	this.instance_12 = new lib.mantis_armmiddle("synched",0);
	this.instance_12.setTransform(104.8,-9.1,0.556,0.547,20.3,0,0,17.4,19.8);
	this.instance_12.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-22,-26,44,53);

	this.instance_13 = new lib.mantis_armupper("synched",0);
	this.instance_13.setTransform(127.8,-46.2,0.621,0.621,29.8,0,0,-2.6,-34);
	this.instance_13.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_13.cache(-11,-39,22,77);

	this.instance_14 = new lib.mantis_wing("synched",0);
	this.instance_14.setTransform(118.5,5.6,0.622,0.622,0,0,0,-51.7,-64.8);

	this.instance_15 = new lib.mantis_wing("synched",0);
	this.instance_15.setTransform(117.5,5,0.622,0.622,1.3,0,0,-51.7,-64.8);
	this.instance_15.filters = [new cjs.ColorFilter(1, 1, 1, 1, -148, -87, 0, 0)];
	this.instance_15.cache(-55,-68,111,136);

	this.instance_16 = new lib.mantis_legUpper01("synched",0);
	this.instance_16.setTransform(158.9,66.4,0.363,0.298,0,-11,-7);

	this.instance_17 = new lib.mantis_legLower01("synched",0);
	this.instance_17.setTransform(159.4,88.8,0.363,0.298,0,-11,-7);

	this.instance_18 = new lib.mantis_legFoot01("synched",0);
	this.instance_18.setTransform(155.9,98.1,0.363,0.298,0,-11,-7);

	this.instance_19 = new lib.mantis_legMiddle("synched",0);
	this.instance_19.setTransform(156.7,76.1,0.363,0.298,0,-11,-7);

	this.instance_20 = new lib.mantis_legUpper01("synched",0);
	this.instance_20.setTransform(139.1,48.8,0.399,0.458,0,-2.8,0);

	this.instance_21 = new lib.mantis_legLower01("synched",0);
	this.instance_21.setTransform(136.6,83.1,0.399,0.458,0,-2.8,0);

	this.instance_22 = new lib.mantis_legFoot01("synched",0);
	this.instance_22.setTransform(131.6,96.6,0.399,0.458,0,-2.8,0,0.1,0);

	this.instance_23 = new lib.mantis_legMiddle("synched",0);
	this.instance_23.setTransform(135.3,63.1,0.399,0.458,0,-2.8,0);

	this.instance_24 = new lib.mantis_legUpper01("synched",0);
	this.instance_24.setTransform(121.1,30.3,0.622,0.622);

	this.instance_25 = new lib.mantis_legLower01("synched",0);
	this.instance_25.setTransform(114.5,77,0.622,0.622);

	this.instance_26 = new lib.mantis_legFoot01("synched",0);
	this.instance_26.setTransform(105.7,95.3,0.622,0.622,0,0,0,0.1,0);

	this.instance_27 = new lib.mantis_legMiddle("synched",0);
	this.instance_27.setTransform(114,49.7,0.622,0.622);

	this.instance_28 = new lib.mantis_bodylower("synched",0);
	this.instance_28.setTransform(145.2,42.6,0.622,0.622);

	this.instance_29 = new lib.mantis_legUpper01("synched",0);
	this.instance_29.setTransform(155,66.4,0.368,0.294,0,-4.8,-6.9);
	this.instance_29.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_29.cache(-21,-19,42,38);

	this.instance_30 = new lib.mantis_legLower01("synched",0);
	this.instance_30.setTransform(153,88.8,0.368,0.294,0,-4.8,-6.9);
	this.instance_30.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_30.cache(-10,-27,21,54);

	this.instance_31 = new lib.mantis_legFoot01("synched",0);
	this.instance_31.setTransform(148.5,98.1,0.368,0.294,0,-4.8,-6.9);
	this.instance_31.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_31.cache(-10,-8,21,17);

	this.instance_32 = new lib.mantis_legMiddle("synched",0);
	this.instance_32.setTransform(151.6,76.1,0.368,0.294,0,-4.8,-6.9);
	this.instance_32.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_32.cache(-13,-23,27,47);

	this.instance_33 = new lib.mantis_legUpper01("synched",0);
	this.instance_33.setTransform(137,48.8,0.399,0.459,0,3.5,0);
	this.instance_33.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_33.cache(-21,-19,42,38);

	this.instance_34 = new lib.mantis_legLower01("synched",0);
	this.instance_34.setTransform(130.8,83.1,0.399,0.459,0,3.5,0);
	this.instance_34.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_34.cache(-10,-27,21,54);

	this.instance_35 = new lib.mantis_legFoot01("synched",0);
	this.instance_35.setTransform(124.3,96.6,0.399,0.459,0,3.5,0,0.1,0);
	this.instance_35.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_35.cache(-10,-8,21,17);

	this.instance_36 = new lib.mantis_legMiddle("synched",0);
	this.instance_36.setTransform(131.7,63.1,0.399,0.459,0,3.5,0);
	this.instance_36.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_36.cache(-13,-23,27,47);

	this.instance_37 = new lib.mantis_legUpper01("synched",0);
	this.instance_37.setTransform(121.1,30.3,0.622,0.626,0,6.3,0);
	this.instance_37.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_37.cache(-21,-19,42,38);

	this.instance_38 = new lib.mantis_legLower01("synched",0);
	this.instance_38.setTransform(109.3,77,0.622,0.626,0,6.3,0);
	this.instance_38.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_38.cache(-10,-27,21,54);

	this.instance_39 = new lib.mantis_legFoot01("synched",0);
	this.instance_39.setTransform(98.5,95.3,0.622,0.626,0,6.3,0,0.1,0);
	this.instance_39.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_39.cache(-10,-8,21,17);

	this.instance_40 = new lib.mantis_legMiddle("synched",0);
	this.instance_40.setTransform(111.9,49.7,0.622,0.626,0,6.3,0);
	this.instance_40.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_40.cache(-13,-23,27,47);

	this.instance_41 = new lib.mantis_headwholeBacK();
	this.instance_41.setTransform(118.1,-54.2,0.998,0.998,-6.5,0,0,-11.2,1.3);

	this.instance_42 = new lib.drip();
	this.instance_42.setTransform(43.4,-79.1,1.335,1.111,0,93.5,-86.5);

	this.instance_43 = new lib.drip();
	this.instance_43.setTransform(130,-90.9,0.922,0.754,-107.8);

	this.instance_44 = new lib.drip();
	this.instance_44.setTransform(59.5,-35.6,1.457,1.243,30.6);

	this.instance_45 = new lib.drip();
	this.instance_45.setTransform(109.7,-55,0.998,0.998,-37.1);

	this.instance_46 = new lib.mantis_headwholeMouth();
	this.instance_46.setTransform(109.1,-47.7,0.883,0.883,-30.6,0,0,-5.8,28.5);

	this.instance_47 = new lib.splash();
	this.instance_47.setTransform(86.5,-62.4,1.273,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_40,p:{scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3,regX:0.1}},{t:this.instance_25,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2,skewX:0,skewY:0}},{t:this.instance_12,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4,skewX:0,skewY:0}},{t:this.instance_11,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8,skewX:0,skewY:0}},{t:this.instance_10,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_8,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_7,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},4).to({state:[{t:this.instance_40,p:{scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3,regX:0.1}},{t:this.instance_25,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2,skewX:0,skewY:0}},{t:this.instance_12,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4,skewX:0,skewY:0}},{t:this.instance_11,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8,skewX:0,skewY:0}},{t:this.instance_10,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_8,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_7,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_40,p:{scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3,regX:0.1}},{t:this.instance_25,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.8,regY:-34.1,scaleX:0.618,scaleY:0.618,rotation:157.8,x:118.4,y:-46.7,skewX:0,skewY:0}},{t:this.instance_12,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:103.2,x:103.2,y:-80.2,regX:17.4,skewX:0,skewY:0}},{t:this.instance_11,p:{regX:-2.4,regY:-29.7,scaleX:0.541,scaleY:0.571,rotation:118.6,x:131.3,y:-94.2,skewX:0,skewY:0}},{t:this.instance_10,p:{regX:12.9,rotation:13.8,x:117.9,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_41,p:{regX:-11.2,regY:1.3,scaleX:0.998,scaleY:0.998,rotation:-6.5,x:118.1,y:-54.2}},{t:this.instance_9,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:76.7,x:113.5,y:-45,regX:-2.6}},{t:this.instance_8,p:{regX:17.6,regY:19.9,scaleX:0.617,scaleY:0.617,rotation:78.5,x:71.1,y:-36.5}},{t:this.instance_7,p:{regX:-2.5,regY:-29.3,scaleX:0.618,scaleY:0.618,rotation:103.8,x:92.1,y:-62.9}}]},1).to({state:[{t:this.instance_40,p:{scaleY:0.625,skewX:15.5,skewY:9.3,x:107.8,y:46.2,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.625,skewX:15.5,skewY:9.3,x:87.3,y:88.9,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.625,skewX:15.5,skewY:9.3,x:100.9,y:72.6,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.625,skewX:15.5,skewY:9.3,x:120,y:28.5,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:19,x:106.9,y:43.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:-0.1,scaleX:0.621,scaleY:0.621,rotation:19,x:84.2,y:84,regX:0.1}},{t:this.instance_25,p:{scaleX:0.621,scaleY:0.621,rotation:19,x:98.6,y:69.6,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.621,scaleY:0.621,rotation:19,x:119.9,y:27.7,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.7,regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:-172,x:112.1,y:-46.3,skewX:0,skewY:0}},{t:this.instance_12,p:{regY:19.7,scaleX:0.555,scaleY:0.546,rotation:96.1,x:118,y:-83.1,regX:17.3,skewX:0,skewY:0}},{t:this.instance_11,p:{regX:-2.3,regY:-29.8,scaleX:0.542,scaleY:0.573,rotation:157.2,x:144.2,y:-100.4,skewX:0,skewY:0}},{t:this.instance_10,p:{regX:12.9,rotation:6.8,x:117.9,regY:44.8,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_41,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:6.8,x:122.2,y:-53.7}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:111.5,x:107.6,y:-44,regX:-2.7}},{t:this.instance_8,p:{regX:17.6,regY:19.9,scaleX:0.62,scaleY:0.62,rotation:68.9,x:67.8,y:-61.1}},{t:this.instance_7,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:148.9,x:83.7,y:-92.4}}]},1).to({state:[{t:this.instance_40,p:{scaleY:0.624,skewX:31.6,skewY:25.3,x:99.6,y:31.7,scaleX:0.62}},{t:this.instance_39,p:{scaleY:0.625,skewX:47.9,skewY:41.6,x:65.5,y:57.7,regX:0,scaleX:0.621,regY:0}},{t:this.instance_38,p:{scaleY:0.625,skewX:47.9,skewY:41.6,x:84.3,y:50.3,scaleX:0.621,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.625,skewX:47.9,skewY:41.6,x:117.3,y:21.2,scaleX:0.621}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.62,scaleY:0.62,rotation:1.3,x:107.9,y:38.3,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.621,scaleY:0.621,rotation:32.9,x:82.2,y:70.4,regX:0}},{t:this.instance_25,p:{scaleX:0.621,scaleY:0.621,rotation:32.9,x:99.8,y:60.5,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.621,scaleY:0.621,rotation:32.9,x:118.9,y:24.2,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3,skewX:0,skewY:0}},{t:this.instance_12,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4,skewX:0,skewY:0}},{t:this.instance_11,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7,skewX:0,skewY:0}},{t:this.instance_10,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_41,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_9,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_8,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_7,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}}]},1).to({state:[{t:this.instance_13,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3,skewX:0,skewY:0}},{t:this.instance_12,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4,skewX:0,skewY:0}},{t:this.instance_11,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7,skewX:0,skewY:0}},{t:this.instance_10,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_41,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_9,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_8,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_7,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_40,p:{scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3,regX:0.1}},{t:this.instance_25,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}}]},5).to({state:[{t:this.instance_13,p:{regX:-2.7,regY:-34,scaleX:0.62,scaleY:0.62,rotation:-178.7,x:106.2,y:-45.3,skewX:0,skewY:0}},{t:this.instance_12,p:{regY:19.6,scaleX:0.556,scaleY:0.547,rotation:89.3,x:107.7,y:-82.5,regX:17.3,skewX:0,skewY:0}},{t:this.instance_11,p:{regX:-2.3,regY:-29.7,scaleX:0.542,scaleY:0.573,rotation:150.4,x:131.7,y:-102.8,skewX:0,skewY:0}},{t:this.instance_10,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_41,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:115.4,y:-53.8}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:104.7,x:102,y:-42.4,regX:-2.7}},{t:this.instance_8,p:{regX:17.6,regY:19.8,scaleX:0.62,scaleY:0.62,rotation:62.1,x:60.5,y:-54.7}},{t:this.instance_7,p:{regX:-2.5,regY:-29.6,scaleX:0.62,scaleY:0.62,rotation:142.1,x:72.5,y:-87.7}},{t:this.instance_40,p:{scaleY:0.625,skewX:-18.3,skewY:-24.5,x:130.2,y:48.4,scaleX:0.621}},{t:this.instance_39,p:{scaleY:0.624,skewX:-83.7,skewY:-90,x:158.6,y:80.7,regX:5.9,scaleX:0.62,regY:-5.8}},{t:this.instance_38,p:{scaleY:0.624,skewX:-59.1,skewY:-65.4,x:139.8,y:59.3,scaleX:0.62,regX:8.5,regY:-21.3}},{t:this.instance_37,p:{scaleY:0.625,skewX:-18.3,skewY:-24.5,x:130.6,y:27,scaleX:0.621}},{t:this.instance_36,p:{scaleX:0.398,scaleY:0.458,skewX:-21.1,skewY:-24.5,x:153.8,y:52.3}},{t:this.instance_35,p:{regX:5.7,regY:-3.3,scaleX:0.398,scaleY:0.457,skewX:-98,skewY:-101.5,x:170.3,y:79}},{t:this.instance_34,p:{regX:7.4,regY:-24,scaleX:0.398,scaleY:0.457,skewX:-42.6,skewY:-46.1,x:159.9,y:59.5}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-21.1,skewY:-24.5,x:152.7,y:37.2}},{t:this.instance_32,p:{skewX:-29.4,skewY:-31.5,x:177.3,y:55.9}},{t:this.instance_31,p:{skewX:-29.4,skewY:-31.5,x:193.2,y:68.9}},{t:this.instance_30,p:{scaleX:0.367,scaleY:0.293,skewX:-59,skewY:-61.1,x:187.3,y:64.1}},{t:this.instance_29,p:{skewX:-29.4,skewY:-31.5,x:176.2,y:45.7}},{t:this.instance_28,p:{scaleX:0.621,scaleY:0.621,rotation:-24.5,x:157.5,y:28.1}},{t:this.instance_26,p:{regY:-6.4,scaleX:0.62,scaleY:0.62,rotation:-78.2,x:164.7,y:77.2,regX:7.5}},{t:this.instance_27,p:{scaleX:0.398,scaleY:0.458,rotation:0,x:157,y:50.8,skewX:-27.4,skewY:-24.5}},{t:this.instance_23,p:{scaleX:0.62,scaleY:0.62,rotation:-45.1,skewX:0,x:143.4,y:45.9}},{t:this.instance_25,p:{scaleX:0.62,scaleY:0.62,rotation:-38.8,x:155.6,y:51.7,regX:6.7,regY:-20.1}},{t:this.instance_22,p:{regX:6,regY:-6.1,scaleX:0.397,scaleY:0.391,skewX:-88.3,skewY:-85.5,x:178.4,y:72.5}},{t:this.instance_21,p:{scaleX:0.397,scaleY:0.457,skewX:-59.7,skewY:-56.9,x:170.5,y:65}},{t:this.instance_24,p:{scaleX:0.398,scaleY:0.458,rotation:0,x:154.6,y:36.3,skewX:-27.4,skewY:-24.5}},{t:this.instance_20,p:{scaleX:0.62,scaleY:0.62,rotation:-45.1,skewX:0,x:134.6,y:27.2}},{t:this.instance_19,p:{skewX:-35.5,skewY:-31.6,x:181.8,y:53.7}},{t:this.instance_18,p:{regX:6.1,regY:-6.7,scaleX:0.362,skewX:-105.2,skewY:-101.2,x:191.1,y:71.3}},{t:this.instance_17,p:{skewX:-35.5,skewY:-31.6,x:189.7,y:64.2}},{t:this.instance_16,p:{skewX:-35.5,skewY:-31.6,x:179.8,y:44.1}},{t:this.instance_15,p:{scaleX:0.621,scaleY:0.621,rotation:-23.3,x:116.8,y:5.5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-24.5,x:118}}]},1).to({state:[{t:this.instance_40,p:{scaleY:0.625,skewX:-21.6,skewY:-27.8,x:132.7,y:47.7,scaleX:0.621}},{t:this.instance_39,p:{scaleY:0.624,skewX:-87,skewY:-93.3,x:162.9,y:78.3,regX:5.9,scaleX:0.62,regY:-5.8}},{t:this.instance_38,p:{scaleY:0.624,skewX:-62.4,skewY:-68.7,x:142.8,y:58.1,scaleX:0.62,regX:8.4,regY:-21.4}},{t:this.instance_37,p:{scaleY:0.625,skewX:-21.6,skewY:-27.8,x:131.8,y:26.3,scaleX:0.621}},{t:this.instance_36,p:{scaleX:0.398,scaleY:0.458,skewX:-24.4,skewY:-27.8,x:156.5,y:50.2}},{t:this.instance_35,p:{regX:5.8,regY:-3.5,scaleX:0.398,scaleY:0.458,skewX:-101.3,skewY:-104.8,x:174.4,y:75.9}},{t:this.instance_34,p:{regX:7.4,regY:-23.9,scaleX:0.398,scaleY:0.457,skewX:-45.9,skewY:-49.4,x:163,y:57}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-24.4,skewY:-27.8,x:154.5,y:35.1}},{t:this.instance_32,p:{skewX:-32.7,skewY:-34.8,x:180.1,y:52.4}},{t:this.instance_31,p:{skewX:-32.7,skewY:-34.8,x:196.7,y:64.5}},{t:this.instance_30,p:{scaleX:0.367,scaleY:0.293,skewX:-62.3,skewY:-64.4,x:190.6,y:60}},{t:this.instance_29,p:{skewX:-32.7,skewY:-34.8,x:178.5,y:42.3}},{t:this.instance_28,p:{scaleX:0.621,scaleY:0.621,rotation:-27.8,x:158.8,y:25.8}},{t:this.instance_26,p:{regY:-6.4,scaleX:0.62,scaleY:0.62,rotation:-81.5,x:168.8,y:74.4,regX:7.5}},{t:this.instance_27,p:{scaleX:0.398,scaleY:0.458,rotation:0,x:159.6,y:48.5,skewX:-30.7,skewY:-27.8}},{t:this.instance_23,p:{scaleX:0.62,scaleY:0.62,rotation:-48.4,skewX:0,x:145.7,y:44.4}},{t:this.instance_25,p:{scaleX:0.62,scaleY:0.62,rotation:-42.1,x:158.2,y:49.5,regX:6.7,regY:-20}},{t:this.instance_22,p:{regX:6.1,regY:-6.2,scaleX:0.398,scaleY:0.391,skewX:-91.6,skewY:-88.8,x:182.2,y:69}},{t:this.instance_21,p:{scaleX:0.397,scaleY:0.457,skewX:-63,skewY:-60.2,x:173.9,y:61.9}},{t:this.instance_24,p:{scaleX:0.398,scaleY:0.458,rotation:0,x:156.3,y:34.2,skewX:-30.7,skewY:-27.8}},{t:this.instance_20,p:{scaleX:0.62,scaleY:0.62,rotation:-48.4,skewX:0,x:135.8,y:26.2}},{t:this.instance_19,p:{skewX:-38.8,skewY:-34.9,x:184.6,y:50}},{t:this.instance_18,p:{regX:6.2,regY:-6.7,scaleX:0.362,skewX:-108.5,skewY:-104.5,x:194.8,y:67}},{t:this.instance_17,p:{skewX:-38.8,skewY:-34.9,x:193,y:60}},{t:this.instance_16,p:{skewX:-38.8,skewY:-34.9,x:182,y:40.5}},{t:this.instance_15,p:{scaleX:0.621,scaleY:0.621,rotation:-26.6,x:116.8,y:5.6,regX:-51.8}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.621,scaleY:0.621,rotation:-27.8,x:118}},{t:this.instance_13,p:{regX:-2.6,regY:-34,scaleX:0.601,scaleY:0.474,rotation:0,x:107.8,y:-46.8,skewX:128.4,skewY:127.8}},{t:this.instance_12,p:{regY:19.6,scaleX:0.425,scaleY:0.53,rotation:0,x:86,y:-51.4,regX:17.3,skewX:36.3,skewY:36}},{t:this.instance_11,p:{regX:-2.2,regY:-29.7,scaleX:0.501,scaleY:0.469,rotation:0,x:87.5,y:-79.4,skewX:101.4,skewY:113.1}},{t:this.instance_10,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_41,p:{regX:-9.7,regY:2.6,scaleX:0.999,scaleY:0.999,rotation:-30.6,x:105.7,y:-51.1}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:80.7,x:102.2,y:-42.5,regX:-2.8}},{t:this.instance_8,p:{regX:17.5,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:38,x:59.4,y:-36.7}},{t:this.instance_7,p:{regX:-2.5,regY:-29.5,scaleX:0.618,scaleY:0.618,rotation:118,x:57,y:-71.7}}]},1).to({state:[{t:this.instance_40,p:{scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3,regX:0.1}},{t:this.instance_25,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.6,regY:-34,scaleX:0.601,scaleY:0.474,rotation:0,x:107.8,y:-46.8,skewX:128.4,skewY:127.8}},{t:this.instance_12,p:{regY:19.6,scaleX:0.425,scaleY:0.53,rotation:0,x:86,y:-51.4,regX:17.3,skewX:36.3,skewY:36}},{t:this.instance_11,p:{regX:-2.2,regY:-29.7,scaleX:0.501,scaleY:0.469,rotation:0,x:87.5,y:-79.4,skewX:101.4,skewY:113.1}},{t:this.instance_10,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:80.7,x:102.2,y:-42.5,regX:-2.8}},{t:this.instance_47,p:{scaleX:1.273,scaleY:1.037,y:-62.4,alpha:1}},{t:this.instance_46,p:{rotation:-30.6,x:109.1,regY:28.5,scaleX:0.883,scaleY:0.883,y:-47.7}},{t:this.instance_8,p:{regX:17.5,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:38,x:59.4,y:-36.7}},{t:this.instance_7,p:{regX:-2.5,regY:-29.5,scaleX:0.618,scaleY:0.618,rotation:118,x:57,y:-71.7}},{t:this.instance_45,p:{scaleX:0.998,scaleY:0.998,x:109.7,y:-55,alpha:1}},{t:this.instance_44,p:{scaleX:1.457,scaleY:1.243,x:59.5,y:-35.6,alpha:1}},{t:this.instance_43,p:{rotation:-107.8,x:130,y:-90.9,alpha:1,scaleX:0.922,scaleY:0.754}},{t:this.instance_42,p:{scaleX:1.335,scaleY:1.111,x:43.4,y:-79.1,alpha:1}}]},4).to({state:[{t:this.instance_40,p:{scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3,regX:0.1}},{t:this.instance_25,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.6,regY:-34,scaleX:0.601,scaleY:0.474,rotation:0,x:107.8,y:-46.8,skewX:128.4,skewY:127.8}},{t:this.instance_12,p:{regY:19.6,scaleX:0.425,scaleY:0.53,rotation:0,x:86,y:-51.4,regX:17.3,skewX:36.3,skewY:36}},{t:this.instance_11,p:{regX:-2.2,regY:-29.7,scaleX:0.501,scaleY:0.469,rotation:0,x:87.5,y:-79.4,skewX:101.4,skewY:113.1}},{t:this.instance_10,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:80.7,x:102.2,y:-42.5,regX:-2.8}},{t:this.instance_47,p:{scaleX:0.781,scaleY:0.781,y:-56.7,alpha:0.609}},{t:this.instance_46,p:{rotation:-36.1,x:109,regY:28.5,scaleX:0.883,scaleY:0.883,y:-47.7}},{t:this.instance_8,p:{regX:17.5,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:38,x:59.4,y:-36.7}},{t:this.instance_7,p:{regX:-2.5,regY:-29.5,scaleX:0.618,scaleY:0.618,rotation:118,x:57,y:-71.7}},{t:this.instance_45,p:{scaleX:0.737,scaleY:0.734,x:121.1,y:-41.3,alpha:0.609}},{t:this.instance_44,p:{scaleX:1.035,scaleY:0.826,x:41.7,y:-22.9,alpha:0.609}},{t:this.instance_43,p:{rotation:-106,x:142,y:-94.7,alpha:0.609,scaleX:0.922,scaleY:0.754}},{t:this.instance_42,p:{scaleX:0.636,scaleY:0.744,x:31.5,y:-86.3,alpha:0.609}}]},1).to({state:[{t:this.instance_40,p:{scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3,regX:0.1}},{t:this.instance_25,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.6,regY:-34,scaleX:0.601,scaleY:0.474,rotation:0,x:107.8,y:-46.8,skewX:128.4,skewY:127.8}},{t:this.instance_12,p:{regY:19.6,scaleX:0.425,scaleY:0.53,rotation:0,x:86,y:-51.4,regX:17.3,skewX:36.3,skewY:36}},{t:this.instance_11,p:{regX:-2.2,regY:-29.7,scaleX:0.501,scaleY:0.469,rotation:0,x:87.5,y:-79.4,skewX:101.4,skewY:113.1}},{t:this.instance_10,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:80.7,x:102.2,y:-42.5,regX:-2.8}},{t:this.instance_47,p:{scaleX:0.553,scaleY:0.469,y:-56.7,alpha:0.301}},{t:this.instance_46,p:{rotation:-37.7,x:109.1,regY:28.6,scaleX:0.882,scaleY:0.882,y:-47.6}},{t:this.instance_8,p:{regX:17.5,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:38,x:59.4,y:-36.7}},{t:this.instance_7,p:{regX:-2.5,regY:-29.5,scaleX:0.618,scaleY:0.618,rotation:118,x:57,y:-71.7}},{t:this.instance_45,p:{scaleX:0.457,scaleY:0.535,x:131.9,y:-24.9,alpha:0.379}},{t:this.instance_44,p:{scaleX:0.822,scaleY:0.675,x:24.5,y:-9.7,alpha:0.289}},{t:this.instance_43,p:{rotation:-106,x:161.6,y:-97.7,alpha:0.289,scaleX:0.5,scaleY:0.655}},{t:this.instance_42,p:{scaleX:0.636,scaleY:0.505,x:9.7,y:-85.2,alpha:0.289}}]},1).to({state:[{t:this.instance_40,p:{scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7,scaleX:0.622}},{t:this.instance_39,p:{scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3,regX:0.1,scaleX:0.622,regY:0}},{t:this.instance_38,p:{scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77,scaleX:0.622,regX:0,regY:0}},{t:this.instance_37,p:{scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3,scaleX:0.622}},{t:this.instance_36,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_35,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_32,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_30,p:{scaleX:0.368,scaleY:0.294,skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_28,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7,skewX:0,skewY:0}},{t:this.instance_26,p:{regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3,regX:0.1}},{t:this.instance_25,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77,regX:0,regY:0}},{t:this.instance_24,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3,skewX:0,skewY:0}},{t:this.instance_23,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:135.3,y:63.1}},{t:this.instance_22,p:{regX:0.1,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_21,p:{scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_20,p:{scaleX:0.399,scaleY:0.458,rotation:0,skewX:-2.8,x:139.1,y:48.8}},{t:this.instance_19,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_18,p:{regX:0,regY:0,scaleX:0.363,skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_15,p:{scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5,regX:-51.7}},{t:this.instance_14,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5}},{t:this.instance_13,p:{regX:-2.6,regY:-34,scaleX:0.601,scaleY:0.474,rotation:0,x:107.8,y:-46.8,skewX:128.4,skewY:127.8}},{t:this.instance_12,p:{regY:19.6,scaleX:0.425,scaleY:0.53,rotation:0,x:86,y:-51.4,regX:17.3,skewX:36.3,skewY:36}},{t:this.instance_11,p:{regX:-2.2,regY:-29.7,scaleX:0.501,scaleY:0.469,rotation:0,x:87.5,y:-79.4,skewX:101.4,skewY:113.1}},{t:this.instance_10,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_9,p:{regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:80.7,x:102.2,y:-42.5,regX:-2.8}},{t:this.instance_46,p:{rotation:-46.9,x:109,regY:28.5,scaleX:0.882,scaleY:0.882,y:-47.7}},{t:this.instance_8,p:{regX:17.5,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:38,x:59.4,y:-36.7}},{t:this.instance_7,p:{regX:-2.5,regY:-29.5,scaleX:0.618,scaleY:0.618,rotation:118,x:57,y:-71.7}}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},1).wait(14));

	// leaf half
	this.instance_48 = new lib.leaf_half("synched",0);
	this.instance_48.setTransform(-48,-103.4,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_48.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_48.cache(-167,-33,327,94);

	this.instance_49 = new lib.leaf_half("synched",0);
	this.instance_49.setTransform(-48,67.1,1,1,0,0,0,-158.8,-27.4);
	this.instance_49.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_49.cache(-167,-33,327,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.instance_48,p:{scaleX:0.999,scaleY:0.999,rotation:-8.8,skewX:0,skewY:0,x:-48,y:-103.4,regX:-158.8}}]}).to({state:[{t:this.instance_49},{t:this.instance_48,p:{scaleX:0.982,scaleY:0.984,rotation:0,skewX:-8.9,skewY:-3.1,x:-48.1,y:-102.5,regX:-158.8}}]},15).to({state:[{t:this.instance_49},{t:this.instance_48,p:{scaleX:1.01,scaleY:0.908,rotation:0,skewX:-11.4,skewY:-9.4,x:-48.1,y:-107.7,regX:-158.7}}]},10).to({state:[{t:this.instance_49},{t:this.instance_48,p:{scaleX:0.999,scaleY:0.999,rotation:-8.8,skewX:0,skewY:0,x:-48,y:-103.4,regX:-158.8}}]},1).wait(14));

	// Layer 16
	this.instance_50 = new lib.drip();
	this.instance_50.setTransform(-44,-153.1,0.997,0.997,0,123.1,-56.9);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(36).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:87.3,skewY:-92.7,x:-88.5,y:-155.8,alpha:0.27},2).to({_off:true},1).wait(1));

	// Layer 15
	this.instance_51 = new lib.drip();
	this.instance_51.setTransform(-33.7,-166.8,0.999,0.999,0,151.5,-28.5);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(35).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:115.6,skewY:-64.4,x:-71.6,y:-190.4,alpha:0.27},2).to({_off:true},1).wait(2));

	// droplet
	this.instance_52 = new lib.drip();
	this.instance_52.setTransform(192.4,-149.8,0.997,0.997,-98.5);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(34).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-85.7,x:230.8,y:-145.2,alpha:0.238},2).to({_off:true},1).wait(3));

	// droplet
	this.instance_53 = new lib.drip();
	this.instance_53.setTransform(181.2,-160.6,0.998,0.998,-121.8);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(33).to({_off:false},0).to({rotation:-109,x:218.3,y:-171.6,alpha:0.238},2).to({_off:true},1).wait(4));

	// droplet
	this.instance_54 = new lib.droplet("synched",0);
	this.instance_54.setTransform(13.1,-100.2,0.999,0.999,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AtdFrQgOhPDvhdQDmgqFVghQFMh2EHj9QEXjeAyB0IAAABQAmCglLERQkrDBlPAnQlFAzjdAfQhdAPg5AAQhfAAgCgngAoZFjQDKgREugvQE3goEMi3QEnj2gYiUQgBABABgBQgKhaiRBfQgBAAgBAAQAAAAAAAAQgBABAAgBQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAABAAQhBAlhKA6Qj6DfkuB1Qk2AujTAaQhCAPgrAVIgGAEIgDABIgHAEQgGABAAACQgQAHgFAFQgeATgOATQgSAVAEASQACASAZAIIgLAEIANgDQAtASCYgQg");
	this.shape_1.setTransform(89.4,-111.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D80E6").s().p("Ar6FlIgNAEIALgEQgZgJgBgSQgEgSARgVQAOgTAegSQAGgGAPgHQABgBAFgBIAHgEIAEgCIAGgDIAXgJQG5BTFGhpQBPgnADAYQgtAiBjgoQCqhEBwikQCAivgQhVQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAABQAAAAABAAQAAAAAAgBQABAAAAAAQCSheAJBZQAAABABAAQAYCUknD2QkNC2k3AoQkuAvjKARQhHAIgwAAQg1AAgZgKg");
	this.shape_2.setTransform(92.1,-111.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AknBKQgHgCAfgGQAbgEAsgDQAmgCAhAAQAggBAEADQABADgZADQgfAGglACIhLADIgJAAQgaAAAAgCgAhfAuQgSAAAAgCQgFgBAPgDQAJgDAYgDIAjgDQASgBABABQABADgLADQgOAEgSACQgUADgNAAIgEAAgABhAVQgIgDAdgMQAWgKAtgUIBIglQAegQAKACQAEAEgZAVQgcAVgmAUQgsATgfAHQgWAFgJAAQgFAAgCgBg");
	this.shape_3.setTransform(78.4,-99.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699FF").s().p("Ap+D6IgXAIQArgVBCgPQDTgaE2guQEuh2D6jeQBKg6BBglQAQBViACvQhwCjiqBFQhjAoAsgiQgCgZhPAoQi2A6jaAAQitAAjDgkgAjuDSQggAAgnADQgsACgaAFQgfAFAGACQABADAiAAIBLgEQAlgCAfgFQAagEgBgDQgDgCgTAAIgPAAgAiQC4IgiAEQgZACgJADQgPADAFACQAAABASAAQAPABAWgDQATgDAOgEQALgDgCgCQAAgBgHAAIgMAAgACVBbIhJAkQgsAUgXAMQgbANAJACQAEAEAfgHQAfgHAtgVQAmgVAcgUQAYgWgEgDIgCgBQgKAAgbAPg");
	this.shape_4.setTransform(89.3,-114.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AEhGjQjSgljXhQQjUhlh6i8QiJjfAjiHQAtieCeCcQCCDWDmB/QD9ALC4BVQC/CWgxBlIAAABQg1BTiOAAQgoAAgugGgAn5jMQALBrBRCIQBsCsDFBXQDIBGC/AdQDEAUA5hgQAtg1hXhdQgBAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIgDAAQgjgpgxgfQinhPjogIQjWhVh5jEQgsgyghgVIgCgBQgDAAgCgDIgEgCQgLgIgGAAQgYgGgSAMQgUANgJAmQgKAlAHA0IgIgIIAJAKg");
	this.shape_5.setTransform(24.4,-102.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D80E6").s().p("AEJF2QjAgcjIhHQjEhWhsisQhSiJgLhqIgIgLIAHAIQgGgzAJglQAKgnAUgMQASgMAYAGQAGAAAKAIIAEACQADACACABIADABIAVARQCqJ2EDhTQBAgFgQAlQgtATBHANQBxAgBlg4QBuglAvg5IADAAQgBAAAAABQgBAAAAAAQAAAAAAABQABAAAAABQBYBcgtA1QgwBPiOAAQgdAAgigDg");
	this.shape_6.setTransform(26.3,-100.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABOBgQgWgJgBgHQgBgJAVgEQATgDAiABQAcAAAaADQAVAEADAKQAAAJgWAIQgYAGgcAAQghgBgVgIgAgaAhQgKgBgNgIQgQgJgIgKQgKgJABgDQgEgHAMAGQAHACARAIIAWAQQANAIgCAEQABADgGAAIgEAAgAhkAZQgUgNgZgUQgagegRgaQgSgdABgGQgCgMATAVQARARAaAdQAZAaATAUQAUAVABAHQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgFAAgMgHg");
	this.shape_7.setTransform(19.7,-103.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6699FF").s().p("ABNE1QhHgNAtgTQARglhAAFQkEBTiqp2IgVgRQAhAUArAzQB5DEDZBUQDlAJCoBPQAxAeAjApQgvA5htAlQhBAjhFAAQgnAAgqgLgAgOBIQgVAEABAIQABAHAWAKQAUAIAgAAQAcAAAZgGQAWgHgBgJQgDgKgVgEQgagDgcgBIgOAAQgXAAgOADgAitgDQgBADAKAKQAJAKAQAIQAMAJAKAAQAKACgBgFQACgEgNgIIgWgPQgQgIgIgCIgHgDQgBAAAAAAQgBAAAAABQAAAAAAABQABAAAAABgAkohfQgBAHASAcQARAaAaAeQAZAVAUANQAUALAAgHQgBgHgUgVQgSgUgagZQgagegRgRQgMgNgDAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABg");
	this.shape_8.setTransform(28.8,-104.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_54}]}).to({state:[]},15).to({state:[{t:this.instance_54}]},11).to({state:[{t:this.instance_54}]},5).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_54}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({_off:true},15).wait(11).to({_off:false,scaleX:0.35,scaleY:2.53,rotation:0,skewX:13.6,skewY:0.2,y:-281.1},0).to({scaleX:0.35,scaleY:1.67,skewX:27.6,skewY:51.2,y:-122.2},5,cjs.Ease.get(-1)).wait(1).to({scaleX:0.82,scaleY:1.27,rotation:-8.8,skewX:0,skewY:0,y:-102},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1.04,scaleY:1.32,rotation:-16.9,x:39.3,y:-97.2},0).to({_off:true},1).wait(1).to({_off:false,regX:84.7,regY:11.2,scaleX:1,scaleY:1,rotation:-26.8,x:116.1,y:-120.2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-8.8,x:13.1,y:-100.2},0).wait(3));

	// droplet
	this.instance_55 = new lib.droplet("synched",0);
	this.instance_55.setTransform(12,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(40));

	// leaf
	this.instance_56 = new lib.leaf("synched",0);
	this.instance_56.setTransform(-48,-103.4,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_56.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_56.cache(-167,-72,334,143);

	this.instance_57 = new lib.leaf("synched",0);
	this.instance_57.setTransform(-48,67.1,1,1,0,0,0,-158.8,-27.4);
	this.instance_57.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_57.cache(-167,-72,334,143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_57},{t:this.instance_56,p:{scaleX:0.999,scaleY:0.999,rotation:-8.8,skewX:0,skewY:0,x:-48,y:-103.4,regX:-158.8}}]}).to({state:[{t:this.instance_57},{t:this.instance_56,p:{scaleX:0.982,scaleY:0.984,rotation:0,skewX:-8.9,skewY:-3.1,x:-48.1,y:-102.5,regX:-158.8}}]},15).to({state:[{t:this.instance_57},{t:this.instance_56,p:{scaleX:1.01,scaleY:0.908,rotation:0,skewX:-11.4,skewY:-9.4,x:-48.1,y:-107.7,regX:-158.7}}]},10).to({state:[{t:this.instance_57},{t:this.instance_56,p:{scaleX:0.999,scaleY:0.999,rotation:-8.8,skewX:0,skewY:0,x:-48,y:-103.4,regX:-158.8}}]},1).wait(14));

	// vine
	this.instance_58 = new lib.vine_leaf("synched",0);
	this.instance_58.setTransform(-168,-237.6);
	this.instance_58.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_58.cache(-126,-112,253,224);

	this.instance_59 = new lib.vine_leaf("synched",0);
	this.instance_59.setTransform(-169.1,-66.5);
	this.instance_59.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_59.cache(-126,-112,253,224);

	this.instance_60 = new lib.vine_leaf("synched",0);
	this.instance_60.setTransform(-168,102.4);
	this.instance_60.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_60.cache(-126,-112,253,224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_60},{t:this.instance_59},{t:this.instance_58}]}).wait(40));

	// grass
	this.instance_61 = new lib.grass_whole("synched",0);
	this.instance_61.setTransform(-15.7,59.7);
	this.instance_61.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 10, -11, 20, 0)];
	this.instance_61.cache(-363,-333,726,692);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(40));

	// bkgd
	this.instance_62 = new lib.back_drop("synched",0);
	this.instance_62.setTransform(6.5,8.7,1,1,0,0,0,395.9,268.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.8,-347.3,794.5,763.4);


(lib.correct = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{done:24});

	// timeline functions:
	this.frame_24 = function() {
        this.stop();
        this.gotoAndStop(1);
		/* stop();
		//gotoAndStop(1);*/
        console.log('lib.correct: frame_24: ');
        /*
        if (this.visible) {
            console.log('lib.correct: frame_24: dispatching done ');
            this.dispatchEvent('done');
        }
        */
        this.dispatchEvent('done');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(8));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAu+gfTMAAAA+nMhd7AAAMAAAg+ng");
	this.shape.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(32));

	// mantis
	this.instance = new lib.mantis_standing("synched",0);
	this.instance.setTransform(123.2,-2.8,0.622,0.622);

	this.instance_1 = new lib.mantis_eyeclosed();
	this.instance_1.setTransform(126.7,-61.9,0.621,0.621,8.5);

	this.instance_2 = new lib.mantis_antenae("synched",0);
	this.instance_2.setTransform(119,-73.9,0.571,0.59,0,-7.5,168.3,-26,27.2);

	this.instance_3 = new lib.mantis_antenae("synched",0);
	this.instance_3.setTransform(122.1,-73.1,0.62,0.62,20.3,0,0,-26.9,27.5);

	this.instance_4 = new lib.mantis_head("synched",0);
	this.instance_4.setTransform(111.2,-58.3,0.621,0.621,8.5,0,0,33.3,29);

	this.instance_5 = new lib.mantis_eyeclosed();
	this.instance_5.setTransform(106.2,-65.6,0.483,0.521,8.5);

	this.instance_6 = new lib.mantis_armlower("synched",0);
	this.instance_6.setTransform(98.2,-39.4,0.621,0.621,22.1,0,0,-2.2,-29.6);

	this.instance_7 = new lib.mantis_armmiddle("synched",0);
	this.instance_7.setTransform(109.9,-6.3,0.621,0.621,22.1,0,0,17.4,19.7);

	this.instance_8 = new lib.mantis_armupper("synched",0);
	this.instance_8.setTransform(127.8,-46.3,0.621,0.621,22.1,0,0,-2.6,-34.1);

	this.instance_9 = new lib.mantis_body("synched",0);
	this.instance_9.setTransform(118.1,3.7,0.621,0.621,22.1,0,0,12.8,44.9);

	this.instance_10 = new lib.mantis_armlower("synched",0);
	this.instance_10.setTransform(95.6,-37.8,0.544,0.575,42.9,0,0,-2.3,-29.6);
	this.instance_10.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-13,-34,26,69);

	this.instance_11 = new lib.mantis_armmiddle("synched",0);
	this.instance_11.setTransform(104.8,-9.1,0.556,0.547,20.3,0,0,17.4,19.8);
	this.instance_11.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-22,-26,44,53);

	this.instance_12 = new lib.mantis_armupper("synched",0);
	this.instance_12.setTransform(127.8,-46.2,0.621,0.621,29.8,0,0,-2.6,-34);
	this.instance_12.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-11,-39,22,77);

	this.instance_13 = new lib.mantis_wing("synched",0);
	this.instance_13.setTransform(118.5,5.6,0.622,0.622,0,0,0,-51.7,-64.8);

	this.instance_14 = new lib.mantis_wing("synched",0);
	this.instance_14.setTransform(117.5,5,0.622,0.622,1.3,0,0,-51.7,-64.8);
	this.instance_14.filters = [new cjs.ColorFilter(1, 1, 1, 1, -148, -87, 0, 0)];
	this.instance_14.cache(-55,-68,111,136);

	this.instance_15 = new lib.mantis_legUpper01("synched",0);
	this.instance_15.setTransform(158.9,66.4,0.363,0.298,0,-11,-7);

	this.instance_16 = new lib.mantis_legLower01("synched",0);
	this.instance_16.setTransform(159.4,88.8,0.363,0.298,0,-11,-7);

	this.instance_17 = new lib.mantis_legFoot01("synched",0);
	this.instance_17.setTransform(155.9,98.1,0.363,0.298,0,-11,-7);

	this.instance_18 = new lib.mantis_legMiddle("synched",0);
	this.instance_18.setTransform(156.7,76.1,0.363,0.298,0,-11,-7);

	this.instance_19 = new lib.mantis_legUpper01("synched",0);
	this.instance_19.setTransform(139.1,48.8,0.399,0.458,0,-2.8,0);

	this.instance_20 = new lib.mantis_legLower01("synched",0);
	this.instance_20.setTransform(136.6,83.1,0.399,0.458,0,-2.8,0);

	this.instance_21 = new lib.mantis_legFoot01("synched",0);
	this.instance_21.setTransform(131.6,96.6,0.399,0.458,0,-2.8,0,0.1,0);

	this.instance_22 = new lib.mantis_legMiddle("synched",0);
	this.instance_22.setTransform(135.3,63.1,0.399,0.458,0,-2.8,0);

	this.instance_23 = new lib.mantis_legUpper01("synched",0);
	this.instance_23.setTransform(121.1,30.3,0.622,0.622);

	this.instance_24 = new lib.mantis_legLower01("synched",0);
	this.instance_24.setTransform(114.5,77,0.622,0.622);

	this.instance_25 = new lib.mantis_legFoot01("synched",0);
	this.instance_25.setTransform(105.7,95.3,0.622,0.622,0,0,0,0.1,0);

	this.instance_26 = new lib.mantis_legMiddle("synched",0);
	this.instance_26.setTransform(114,49.7,0.622,0.622);

	this.instance_27 = new lib.mantis_bodylower("synched",0);
	this.instance_27.setTransform(145.2,42.6,0.622,0.622);

	this.instance_28 = new lib.mantis_legUpper01("synched",0);
	this.instance_28.setTransform(155,66.4,0.368,0.294,0,-4.8,-6.9);
	this.instance_28.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_28.cache(-21,-19,42,38);

	this.instance_29 = new lib.mantis_legLower01("synched",0);
	this.instance_29.setTransform(153,88.8,0.368,0.294,0,-4.8,-6.9);
	this.instance_29.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_29.cache(-10,-27,21,54);

	this.instance_30 = new lib.mantis_legFoot01("synched",0);
	this.instance_30.setTransform(148.5,98.1,0.368,0.294,0,-4.8,-6.9);
	this.instance_30.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_30.cache(-10,-8,21,17);

	this.instance_31 = new lib.mantis_legMiddle("synched",0);
	this.instance_31.setTransform(151.6,76.1,0.368,0.294,0,-4.8,-6.9);
	this.instance_31.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_31.cache(-13,-23,27,47);

	this.instance_32 = new lib.mantis_legUpper01("synched",0);
	this.instance_32.setTransform(137,48.8,0.399,0.459,0,3.5,0);
	this.instance_32.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_32.cache(-21,-19,42,38);

	this.instance_33 = new lib.mantis_legLower01("synched",0);
	this.instance_33.setTransform(130.8,83.1,0.399,0.459,0,3.5,0);
	this.instance_33.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_33.cache(-10,-27,21,54);

	this.instance_34 = new lib.mantis_legFoot01("synched",0);
	this.instance_34.setTransform(124.3,96.6,0.399,0.459,0,3.5,0,0.1,0);
	this.instance_34.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_34.cache(-10,-8,21,17);

	this.instance_35 = new lib.mantis_legMiddle("synched",0);
	this.instance_35.setTransform(131.7,63.1,0.399,0.459,0,3.5,0);
	this.instance_35.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_35.cache(-13,-23,27,47);

	this.instance_36 = new lib.mantis_legUpper01("synched",0);
	this.instance_36.setTransform(121.1,30.3,0.622,0.626,0,6.3,0);
	this.instance_36.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_36.cache(-21,-19,42,38);

	this.instance_37 = new lib.mantis_legLower01("synched",0);
	this.instance_37.setTransform(109.3,77,0.622,0.626,0,6.3,0);
	this.instance_37.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_37.cache(-10,-27,21,54);

	this.instance_38 = new lib.mantis_legFoot01("synched",0);
	this.instance_38.setTransform(98.5,95.3,0.622,0.626,0,6.3,0,0.1,0);
	this.instance_38.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_38.cache(-10,-8,21,17);

	this.instance_39 = new lib.mantis_legMiddle("synched",0);
	this.instance_39.setTransform(111.9,49.7,0.622,0.626,0,6.3,0);
	this.instance_39.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_39.cache(-13,-23,27,47);

	this.instance_40 = new lib.mantis_headwholeBacK();
	this.instance_40.setTransform(118.1,-54.2,0.998,0.998,-6.5,0,0,-11.2,1.3);

	this.instance_41 = new lib.mantis_headwholeFront01();
	this.instance_41.setTransform(83.5,-85.2,0.582,0.643,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},4).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.618,scaleY:0.618,rotation:157.8,x:118.4,y:-46.7}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:103.2,x:103.2,y:-80.2,regX:17.4}},{t:this.instance_10,p:{regX:-2.4,regY:-29.7,scaleX:0.541,scaleY:0.571,rotation:118.6,x:131.3,y:-94.2}},{t:this.instance_9,p:{regX:12.9,rotation:13.8,x:117.9,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_40,p:{regX:-11.2,regY:1.3,scaleX:0.998,scaleY:0.998,rotation:-6.5,x:118.1,y:-54.2}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:76.7,x:113.5,y:-45,regX:-2.6}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.617,scaleY:0.617,rotation:78.5,x:71.1,y:-36.5}},{t:this.instance_6,p:{regX:-2.5,regY:-29.3,scaleX:0.618,scaleY:0.618,rotation:103.8,x:92.1,y:-62.9}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.7,regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:-172,x:112.1,y:-46.3}},{t:this.instance_11,p:{regY:19.7,scaleX:0.555,scaleY:0.546,rotation:96.1,x:118,y:-83.1,regX:17.3}},{t:this.instance_10,p:{regX:-2.3,regY:-29.8,scaleX:0.542,scaleY:0.573,rotation:157.2,x:144.2,y:-100.4}},{t:this.instance_9,p:{regX:12.9,rotation:6.8,x:117.9,regY:44.8,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:6.8,x:122.2,y:-53.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:111.5,x:107.6,y:-44,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.62,scaleY:0.62,rotation:68.9,x:67.8,y:-61.1}},{t:this.instance_6,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:148.9,x:83.7,y:-92.4}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7}},{t:this.instance_9,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7}},{t:this.instance_9,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},5).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:154.7,x:107.8,y:-45.5}},{t:this.instance_11,p:{regY:19.4,scaleX:0.553,scaleY:0.544,rotation:49,x:96.8,y:-59.9,regX:17.3}},{t:this.instance_10,p:{regX:-2,regY:-29.7,scaleX:0.539,scaleY:0.57,rotation:110.2,x:101.8,y:-90.6}},{t:this.instance_9,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:115.4,y:-53.8}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:88,x:102,y:-42.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.6,regY:19.8,scaleX:0.619,scaleY:0.619,rotation:45.3,x:58.7,y:-42.1}},{t:this.instance_6,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:125.3,x:60.8,y:-77.1}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-59.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-28.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-42.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-16}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-54.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-12.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-24.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:27.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:64.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:36.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:5.9}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:28.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:61.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:46.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:13.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:29.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:50}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:39.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:19.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:4.1}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:17.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:53.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:26.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-3.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:26.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:50.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:34.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:12.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:26.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:46.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:36.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:17.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-14}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-14}},{t:this.instance_41,p:{y:-85.2}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-69.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-38.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-52.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-26}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-64.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-22.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-34.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:17.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:54.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:26.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:-4.1}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:18.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:51.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:36.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:3.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:19.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:40}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:29.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:9.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:-5.9}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:7.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:43.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:16.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-13.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:16.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:40.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:24.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:2.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:16.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:36.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:26.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:7.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-24}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-24}},{t:this.instance_41,p:{y:-95.2}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-64.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-33.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-47.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-21}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-59.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-17.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-29.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:22.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:59.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:31.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:0.9}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:23.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:56.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:41.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:8.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:24.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:45}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:34.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:14.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:-0.9}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:12.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:48.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:21.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-8.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:21.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:45.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:29.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:7.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:21.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:41.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:31.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:12.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-19}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-19}},{t:this.instance_41,p:{y:-90.2}}]},1).to({state:[{t:this.instance}]},1).wait(14));

	// Layer 14
	this.instance_42 = new lib.vine_3leafs();
	this.instance_42.setTransform(-3.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(15).to({y:23.4},0).wait(1).to({y:68.4},0).wait(1).to({y:98.4},0).wait(1).to({y:-76.6},0).wait(14));

	// grass
	this.instance_43 = new lib.grass_whole("synched",0);
	this.instance_43.setTransform(-15.7,59.7);
	this.instance_43.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 10, -11, 20, 0)];
	this.instance_43.cache(-363,-333,726,692);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(32));

	// bkgd
	this.instance_44 = new lib.back_drop("synched",0);
	this.instance_44.setTransform(6.5,8.7,1,1,0,0,0,395.9,268.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.8,-536.3,794.5,952.5);


(lib.congrats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lastQuestion:24,finished:55,incorrect:66});

	// timeline functions:
	this.frame_24 = function() {
        console.log('lib.congrats: frame_24: lastQuestion ');
        this.stop();
        this.dispatchEvent('done');
		/* stop();*/
	}
	this.frame_55 = function() {
        console.log('lib.congrats: frame_55: finished');
        this.stop();
        this.dispatchEvent('done');
		/* stop();*/
	}
    //ivnaixcu: debug labels
	this.frame_66 = function() {
        console.log('lib.congrats: frame_66: correct');
        this.stop();
		/* stop();*/
	}
	this.frame_82 = function() {
        console.log('lib.congrats: frame_82: loopback');
        this.gotoAndStop('lastQuestion');
		/* gotoAndStop("lastQuestion");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(31).call(this.frame_55).wait(27).call(this.frame_82).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAu+AfUMhd7AAAMAAAg+nMBd7AAAg");
	this.shape.setTransform(-0.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("EAu+gfTMAAAA+nMhd7AAAMAAAg+ng");
	this.shape_1.setTransform(-0.3,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Egu9gfTMBd7AAAMAAAA+nMhd7AAAg");
	this.shape_2.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},24).to({state:[{t:this.shape_2}]},31).to({state:[{t:this.shape}]},11).wait(17));

	// mantis
	this.instance = new lib.mantis_standing("synched",0);
	this.instance.setTransform(123.2,-2.8,0.622,0.622);

	this.instance_1 = new lib.mantis_eyeclosed();
	this.instance_1.setTransform(126.7,-61.9,0.621,0.621,8.5);

	this.instance_2 = new lib.mantis_antenae("synched",0);
	this.instance_2.setTransform(119,-73.9,0.571,0.59,0,-7.5,168.3,-26,27.2);

	this.instance_3 = new lib.mantis_antenae("synched",0);
	this.instance_3.setTransform(122.1,-73.1,0.62,0.62,20.3,0,0,-26.9,27.5);

	this.instance_4 = new lib.mantis_head("synched",0);
	this.instance_4.setTransform(111.2,-58.3,0.621,0.621,8.5,0,0,33.3,29);

	this.instance_5 = new lib.mantis_eyeclosed();
	this.instance_5.setTransform(106.2,-65.6,0.483,0.521,8.5);

	this.instance_6 = new lib.mantis_armlower("synched",0);
	this.instance_6.setTransform(98.2,-39.4,0.621,0.621,22.1,0,0,-2.2,-29.6);

	this.instance_7 = new lib.mantis_armmiddle("synched",0);
	this.instance_7.setTransform(109.9,-6.3,0.621,0.621,22.1,0,0,17.4,19.7);

	this.instance_8 = new lib.mantis_armupper("synched",0);
	this.instance_8.setTransform(127.8,-46.3,0.621,0.621,22.1,0,0,-2.6,-34.1);

	this.instance_9 = new lib.mantis_body("synched",0);
	this.instance_9.setTransform(118.1,3.7,0.621,0.621,22.1,0,0,12.8,44.9);

	this.instance_10 = new lib.mantis_armlower("synched",0);
	this.instance_10.setTransform(95.6,-37.8,0.544,0.575,42.9,0,0,-2.3,-29.6);
	this.instance_10.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-13,-34,26,69);

	this.instance_11 = new lib.mantis_armmiddle("synched",0);
	this.instance_11.setTransform(104.8,-9.1,0.556,0.547,20.3,0,0,17.4,19.8);
	this.instance_11.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-22,-26,44,53);

	this.instance_12 = new lib.mantis_armupper("synched",0);
	this.instance_12.setTransform(127.8,-46.2,0.621,0.621,29.8,0,0,-2.6,-34);
	this.instance_12.filters = [new cjs.ColorFilter(0.76, 0.76, 0.76, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-11,-39,22,77);

	this.instance_13 = new lib.mantis_wing("synched",0);
	this.instance_13.setTransform(118.5,5.6,0.622,0.622,0,0,0,-51.7,-64.8);

	this.instance_14 = new lib.mantis_wing("synched",0);
	this.instance_14.setTransform(117.5,5,0.622,0.622,1.3,0,0,-51.7,-64.8);
	this.instance_14.filters = [new cjs.ColorFilter(1, 1, 1, 1, -148, -87, 0, 0)];
	this.instance_14.cache(-55,-68,111,136);

	this.instance_15 = new lib.mantis_legUpper01("synched",0);
	this.instance_15.setTransform(158.9,66.4,0.363,0.298,0,-11,-7);

	this.instance_16 = new lib.mantis_legLower01("synched",0);
	this.instance_16.setTransform(159.4,88.8,0.363,0.298,0,-11,-7);

	this.instance_17 = new lib.mantis_legFoot01("synched",0);
	this.instance_17.setTransform(155.9,98.1,0.363,0.298,0,-11,-7);

	this.instance_18 = new lib.mantis_legMiddle("synched",0);
	this.instance_18.setTransform(156.7,76.1,0.363,0.298,0,-11,-7);

	this.instance_19 = new lib.mantis_legUpper01("synched",0);
	this.instance_19.setTransform(139.1,48.8,0.399,0.458,0,-2.8,0);

	this.instance_20 = new lib.mantis_legLower01("synched",0);
	this.instance_20.setTransform(136.6,83.1,0.399,0.458,0,-2.8,0);

	this.instance_21 = new lib.mantis_legFoot01("synched",0);
	this.instance_21.setTransform(131.6,96.6,0.399,0.458,0,-2.8,0,0.1,0);

	this.instance_22 = new lib.mantis_legMiddle("synched",0);
	this.instance_22.setTransform(135.3,63.1,0.399,0.458,0,-2.8,0);

	this.instance_23 = new lib.mantis_legUpper01("synched",0);
	this.instance_23.setTransform(121.1,30.3,0.622,0.622);

	this.instance_24 = new lib.mantis_legLower01("synched",0);
	this.instance_24.setTransform(114.5,77,0.622,0.622);

	this.instance_25 = new lib.mantis_legFoot01("synched",0);
	this.instance_25.setTransform(105.7,95.3,0.622,0.622,0,0,0,0.1,0);

	this.instance_26 = new lib.mantis_legMiddle("synched",0);
	this.instance_26.setTransform(114,49.7,0.622,0.622);

	this.instance_27 = new lib.mantis_bodylower("synched",0);
	this.instance_27.setTransform(145.2,42.6,0.622,0.622);

	this.instance_28 = new lib.mantis_legUpper01("synched",0);
	this.instance_28.setTransform(155,66.4,0.368,0.294,0,-4.8,-6.9);
	this.instance_28.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_28.cache(-21,-19,42,38);

	this.instance_29 = new lib.mantis_legLower01("synched",0);
	this.instance_29.setTransform(153,88.8,0.368,0.294,0,-4.8,-6.9);
	this.instance_29.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_29.cache(-10,-27,21,54);

	this.instance_30 = new lib.mantis_legFoot01("synched",0);
	this.instance_30.setTransform(148.5,98.1,0.368,0.294,0,-4.8,-6.9);
	this.instance_30.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_30.cache(-10,-8,21,17);

	this.instance_31 = new lib.mantis_legMiddle("synched",0);
	this.instance_31.setTransform(151.6,76.1,0.368,0.294,0,-4.8,-6.9);
	this.instance_31.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_31.cache(-13,-23,27,47);

	this.instance_32 = new lib.mantis_legUpper01("synched",0);
	this.instance_32.setTransform(137,48.8,0.399,0.459,0,3.5,0);
	this.instance_32.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_32.cache(-21,-19,42,38);

	this.instance_33 = new lib.mantis_legLower01("synched",0);
	this.instance_33.setTransform(130.8,83.1,0.399,0.459,0,3.5,0);
	this.instance_33.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_33.cache(-10,-27,21,54);

	this.instance_34 = new lib.mantis_legFoot01("synched",0);
	this.instance_34.setTransform(124.3,96.6,0.399,0.459,0,3.5,0,0.1,0);
	this.instance_34.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_34.cache(-10,-8,21,17);

	this.instance_35 = new lib.mantis_legMiddle("synched",0);
	this.instance_35.setTransform(131.7,63.1,0.399,0.459,0,3.5,0);
	this.instance_35.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_35.cache(-13,-23,27,47);

	this.instance_36 = new lib.mantis_legUpper01("synched",0);
	this.instance_36.setTransform(121.1,30.3,0.622,0.626,0,6.3,0);
	this.instance_36.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_36.cache(-21,-19,42,38);

	this.instance_37 = new lib.mantis_legLower01("synched",0);
	this.instance_37.setTransform(109.3,77,0.622,0.626,0,6.3,0);
	this.instance_37.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_37.cache(-10,-27,21,54);

	this.instance_38 = new lib.mantis_legFoot01("synched",0);
	this.instance_38.setTransform(98.5,95.3,0.622,0.626,0,6.3,0,0.1,0);
	this.instance_38.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_38.cache(-10,-8,21,17);

	this.instance_39 = new lib.mantis_legMiddle("synched",0);
	this.instance_39.setTransform(111.9,49.7,0.622,0.626,0,6.3,0);
	this.instance_39.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_39.cache(-13,-23,27,47);

	this.instance_40 = new lib.mantis_headwholeBacK();
	this.instance_40.setTransform(118.1,-54.2,0.998,0.998,-6.5,0,0,-11.2,1.3);

	this.instance_41 = new lib.mantis_headwholeFront01();
	this.instance_41.setTransform(83.5,-85.2,0.582,0.643,0,0,0,0,-0.1);

	this.instance_42 = new lib.mantis_happy("synched",0);
	this.instance_42.setTransform(125.9,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},4).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.618,scaleY:0.618,rotation:157.8,x:118.4,y:-46.7}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:103.2,x:103.2,y:-80.2,regX:17.4}},{t:this.instance_10,p:{regX:-2.4,regY:-29.7,scaleX:0.541,scaleY:0.571,rotation:118.6,x:131.3,y:-94.2}},{t:this.instance_9,p:{regX:12.9,rotation:13.8,x:117.9,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_40,p:{regX:-11.2,regY:1.3,scaleX:0.998,scaleY:0.998,rotation:-6.5,x:118.1,y:-54.2}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:76.7,x:113.5,y:-45,regX:-2.6}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.617,scaleY:0.617,rotation:78.5,x:71.1,y:-36.5}},{t:this.instance_6,p:{regX:-2.5,regY:-29.3,scaleX:0.618,scaleY:0.618,rotation:103.8,x:92.1,y:-62.9}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.7,regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:-172,x:112.1,y:-46.3}},{t:this.instance_11,p:{regY:19.7,scaleX:0.555,scaleY:0.546,rotation:96.1,x:118,y:-83.1,regX:17.3}},{t:this.instance_10,p:{regX:-2.3,regY:-29.8,scaleX:0.542,scaleY:0.573,rotation:157.2,x:144.2,y:-100.4}},{t:this.instance_9,p:{regX:12.9,rotation:6.8,x:117.9,regY:44.8,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:6.8,x:122.2,y:-53.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:111.5,x:107.6,y:-44,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.62,scaleY:0.62,rotation:68.9,x:67.8,y:-61.1}},{t:this.instance_6,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:148.9,x:83.7,y:-92.4}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7}},{t:this.instance_9,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7}},{t:this.instance_9,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},5).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:154.7,x:107.8,y:-45.5}},{t:this.instance_11,p:{regY:19.4,scaleX:0.553,scaleY:0.544,rotation:49,x:96.8,y:-59.9,regX:17.3}},{t:this.instance_10,p:{regX:-2,regY:-29.7,scaleX:0.539,scaleY:0.57,rotation:110.2,x:101.8,y:-90.6}},{t:this.instance_9,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:115.4,y:-53.8}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:88,x:102,y:-42.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.6,regY:19.8,scaleX:0.619,scaleY:0.619,rotation:45.3,x:58.7,y:-42.1}},{t:this.instance_6,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:125.3,x:60.8,y:-77.1}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-59.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-28.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-42.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-16}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-54.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-12.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-24.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:27.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:64.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:36.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:5.9}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:28.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:61.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:46.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:13.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:29.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:50}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:39.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:19.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:4.1}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:17.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:53.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:26.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-3.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:26.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:50.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:34.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:12.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:26.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:46.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:36.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:17.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-14}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-14}},{t:this.instance_41,p:{y:-85.2}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-69.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-38.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-52.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-26}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-64.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-22.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-34.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:17.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:54.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:26.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:-4.1}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:18.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:51.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:36.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:3.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:19.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:40}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:29.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:9.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:-5.9}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:7.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:43.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:16.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-13.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:16.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:40.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:24.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:2.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:16.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:36.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:26.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:7.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-24}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-24}},{t:this.instance_41,p:{y:-95.2}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-64.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-33.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-47.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-21}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-59.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-17.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-29.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:22.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:59.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:31.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:0.9}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:23.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:56.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:41.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:8.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:24.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:45}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:34.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:14.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:-0.9}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:12.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:48.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:21.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-8.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:21.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:45.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:29.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:7.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:21.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:41.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:31.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:12.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-19}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-19}},{t:this.instance_41,p:{y:-90.2}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},5).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.618,scaleY:0.618,rotation:157.8,x:118.4,y:-46.7}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:103.2,x:103.2,y:-80.2,regX:17.4}},{t:this.instance_10,p:{regX:-2.4,regY:-29.7,scaleX:0.541,scaleY:0.571,rotation:118.6,x:131.3,y:-94.2}},{t:this.instance_9,p:{regX:12.9,rotation:13.8,x:117.9,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_40,p:{regX:-11.2,regY:1.3,scaleX:0.998,scaleY:0.998,rotation:-6.5,x:118.1,y:-54.2}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:76.7,x:113.5,y:-45,regX:-2.6}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.617,scaleY:0.617,rotation:78.5,x:71.1,y:-36.5}},{t:this.instance_6,p:{regX:-2.5,regY:-29.3,scaleX:0.618,scaleY:0.618,rotation:103.8,x:92.1,y:-62.9}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.7,regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:-172,x:112.1,y:-46.3}},{t:this.instance_11,p:{regY:19.7,scaleX:0.555,scaleY:0.546,rotation:96.1,x:118,y:-83.1,regX:17.3}},{t:this.instance_10,p:{regX:-2.3,regY:-29.8,scaleX:0.542,scaleY:0.573,rotation:157.2,x:144.2,y:-100.4}},{t:this.instance_9,p:{regX:12.9,rotation:6.8,x:117.9,regY:44.8,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:6.8,x:122.2,y:-53.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:111.5,x:107.6,y:-44,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.62,scaleY:0.62,rotation:68.9,x:67.8,y:-61.1}},{t:this.instance_6,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:148.9,x:83.7,y:-92.4}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7}},{t:this.instance_9,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7}},{t:this.instance_9,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},5).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:154.7,x:107.8,y:-45.5}},{t:this.instance_11,p:{regY:19.4,scaleX:0.553,scaleY:0.544,rotation:49,x:96.8,y:-59.9,regX:17.3}},{t:this.instance_10,p:{regX:-2,regY:-29.7,scaleX:0.539,scaleY:0.57,rotation:110.2,x:101.8,y:-90.6}},{t:this.instance_9,p:{regX:12.9,rotation:0,x:117.9,regY:44.9,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:115.4,y:-53.8}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:88,x:102,y:-42.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.6,regY:19.8,scaleX:0.619,scaleY:0.619,rotation:45.3,x:58.7,y:-42.1}},{t:this.instance_6,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:125.3,x:60.8,y:-77.1}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-59.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-28.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-42.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-16}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-54.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-12.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-24.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:27.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:64.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:36.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:5.9}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:28.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:61.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:46.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:13.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:29.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:50}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:39.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:19.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:4.1}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:17.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:53.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:26.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-3.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:26.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:50.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:34.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:12.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:26.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:46.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:36.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:17.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-14}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-14}},{t:this.instance_41,p:{y:-85.2}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-69.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-38.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-52.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-26}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-64.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-22.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-34.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:17.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:54.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:26.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:-4.1}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:18.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:51.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:36.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:3.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:19.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:40}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:29.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:9.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:-5.9}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:7.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:43.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:16.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-13.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:16.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:40.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:24.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:2.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:16.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:36.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:26.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:7.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-24}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-24}},{t:this.instance_41,p:{y:-95.2}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34,scaleX:0.617,scaleY:0.617,rotation:34.8,x:88.8,y:-64.4}},{t:this.instance_11,p:{regY:19.3,scaleX:0.55,scaleY:0.541,rotation:-22.8,x:66.9,y:-33.4,regX:17.3}},{t:this.instance_10,p:{regX:-1.7,regY:-29.7,scaleX:0.537,scaleY:0.567,rotation:38.3,x:39.6,y:-47.6}},{t:this.instance_9,p:{regX:13,rotation:-18.4,x:117.6,regY:45.1,scaleX:0.621,scaleY:0.621,y:-21}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:14.2,x:87.5,y:-59.2,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.618,scaleY:0.618,rotation:-28.4,x:75.6,y:-17.7}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.617,scaleY:0.617,rotation:51.5,x:42.7,y:-29.3}},{t:this.instance_39,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:134.9,y:22.3}},{t:this.instance_38,p:{regY:-0.1,scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:162.5,y:59.2}},{t:this.instance_37,p:{regX:8.8,regY:-22.1,scaleX:0.62,scaleY:0.624,skewX:-56.7,skewY:-62.9,x:145.6,y:31.6}},{t:this.instance_36,p:{scaleX:0.621,scaleY:0.625,skewX:-24.6,skewY:-30.9,x:132.8,y:0.9}},{t:this.instance_35,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:158.7,y:23.5}},{t:this.instance_34,p:{regY:-0.1,scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:169.5,y:56.1}},{t:this.instance_33,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:168.2,y:41.2}},{t:this.instance_32,p:{scaleX:0.398,scaleY:0.458,skewX:-27.4,skewY:-30.9,x:155.9,y:8.6}},{t:this.instance_31,p:{skewX:-35.7,skewY:-37.8,x:182.4,y:24.5}},{t:this.instance_30,p:{skewX:-35.7,skewY:-37.8,x:191,y:45}},{t:this.instance_29,p:{skewX:-35.7,skewY:-37.8,x:190.1,y:34.8}},{t:this.instance_28,p:{skewX:-35.7,skewY:-37.8,x:180.4,y:14.5}},{t:this.instance_27,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:159.8,y:-0.9}},{t:this.instance_26,p:{scaleX:0.621,scaleY:0.621,rotation:-30.9,x:122.7,y:12.1}},{t:this.instance_25,p:{regX:0,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:150,y:48.2}},{t:this.instance_24,p:{regX:2.4,regY:-23.4,scaleX:0.62,scaleY:0.62,rotation:-54.9,x:130.9,y:21.9}},{t:this.instance_23,p:{regX:10.1,regY:-12.2,scaleX:0.62,scaleY:0.62,rotation:11.5,x:134.3,y:-8.8}},{t:this.instance_22,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:161.8,y:21.7}},{t:this.instance_21,p:{regY:-0.1,scaleX:0.398,skewX:-33.7,skewY:-30.9,x:183.1,y:45.6}},{t:this.instance_20,p:{regX:2,regY:-22.8,scaleX:0.398,scaleY:0.457,skewX:-54.8,skewY:-51.9,x:168.1,y:29.1}},{t:this.instance_19,p:{scaleX:0.398,skewX:-33.7,skewY:-30.9,x:157.7,y:7.5}},{t:this.instance_18,p:{skewX:-41.8,skewY:-37.9,x:186.8,y:21.9}},{t:this.instance_17,p:{skewX:-41.8,skewY:-37.9,x:197.4,y:41.1}},{t:this.instance_16,p:{skewX:-41.8,skewY:-37.9,x:195.7,y:31.5}},{t:this.instance_15,p:{skewX:-41.8,skewY:-37.9,x:183.7,y:12.5}},{t:this.instance_14,p:{regX:-51.8,scaleX:0.621,scaleY:0.621,rotation:-29.6,x:116.8,y:-19}},{t:this.instance_13,p:{regX:-51.6,regY:-64.7,scaleX:0.621,scaleY:0.621,rotation:-30.9,x:118.1,y:-19}},{t:this.instance_41,p:{y:-90.2}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_42}]},4).to({state:[{t:this.instance_42}]},8).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.618,scaleY:0.618,rotation:157.8,x:118.4,y:-46.7}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:103.2,x:103.2,y:-80.2,regX:17.4}},{t:this.instance_10,p:{regX:-2.4,regY:-29.7,scaleX:0.541,scaleY:0.571,rotation:118.6,x:131.3,y:-94.2}},{t:this.instance_9,p:{regX:12.9,rotation:13.8,x:117.9,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_40,p:{regX:-11.2,regY:1.3,scaleX:0.998,scaleY:0.998,rotation:-6.5,x:118.1,y:-54.2}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:76.7,x:113.5,y:-45,regX:-2.6}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.617,scaleY:0.617,rotation:78.5,x:71.1,y:-36.5}},{t:this.instance_6,p:{regX:-2.5,regY:-29.3,scaleX:0.618,scaleY:0.618,rotation:103.8,x:92.1,y:-62.9}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.7,regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:-172,x:112.1,y:-46.3}},{t:this.instance_11,p:{regY:19.7,scaleX:0.555,scaleY:0.546,rotation:96.1,x:118,y:-83.1,regX:17.3}},{t:this.instance_10,p:{regX:-2.3,regY:-29.8,scaleX:0.542,scaleY:0.573,rotation:157.2,x:144.2,y:-100.4}},{t:this.instance_9,p:{regX:12.9,rotation:6.8,x:117.9,regY:44.8,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:6.8,x:122.2,y:-53.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:111.5,x:107.6,y:-44,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.62,scaleY:0.62,rotation:68.9,x:67.8,y:-61.1}},{t:this.instance_6,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:148.9,x:83.7,y:-92.4}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7}},{t:this.instance_9,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.619,scaleY:0.619,rotation:-160.2,x:122.7,y:-46.3}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:107.9,x:135.9,y:-81.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.9,scaleX:0.541,scaleY:0.572,rotation:169,x:165.1,y:-92.7}},{t:this.instance_9,p:{regX:12.9,rotation:18.6,x:118.1,regY:44.8,scaleX:0.621,scaleY:0.621,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,rotation:18.6,x:134.1,y:-51.5}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:123.3,x:117.8,y:-45.1,regX:-2.8}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.619,scaleY:0.619,rotation:80.7,x:82.3,y:-69.9}},{t:this.instance_6,p:{regX:-2.5,regY:-29.4,scaleX:0.619,scaleY:0.619,rotation:160.6,x:104.2,y:-97.3}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},3).to({state:[{t:this.instance_12,p:{regX:-2.7,regY:-34.1,scaleX:0.62,scaleY:0.62,rotation:-172,x:112.1,y:-46.3}},{t:this.instance_11,p:{regY:19.7,scaleX:0.555,scaleY:0.546,rotation:96.1,x:118,y:-83.1,regX:17.3}},{t:this.instance_10,p:{regX:-2.3,regY:-29.8,scaleX:0.542,scaleY:0.573,rotation:157.2,x:144.2,y:-100.4}},{t:this.instance_9,p:{regX:12.9,rotation:6.8,x:117.9,regY:44.8,scaleX:0.622,scaleY:0.622,y:3.8}},{t:this.instance_40,p:{regX:0,regY:0,scaleX:1,scaleY:1,rotation:6.8,x:122.2,y:-53.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:111.5,x:107.6,y:-44,regX:-2.7}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.62,scaleY:0.62,rotation:68.9,x:67.8,y:-61.1}},{t:this.instance_6,p:{regX:-2.5,regY:-29.5,scaleX:0.619,scaleY:0.619,rotation:148.9,x:83.7,y:-92.4}},{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}}]},1).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.8,regY:-34.1,scaleX:0.618,scaleY:0.618,rotation:157.8,x:118.4,y:-46.7}},{t:this.instance_11,p:{regY:19.6,scaleX:0.555,scaleY:0.546,rotation:103.2,x:103.2,y:-80.2,regX:17.4}},{t:this.instance_10,p:{regX:-2.4,regY:-29.7,scaleX:0.541,scaleY:0.571,rotation:118.6,x:131.3,y:-94.2}},{t:this.instance_9,p:{regX:12.9,rotation:13.8,x:117.9,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_40,p:{regX:-11.2,regY:1.3,scaleX:0.998,scaleY:0.998,rotation:-6.5,x:118.1,y:-54.2}},{t:this.instance_8,p:{regY:-34,scaleX:0.62,scaleY:0.62,rotation:76.7,x:113.5,y:-45,regX:-2.6}},{t:this.instance_7,p:{regX:17.6,regY:19.9,scaleX:0.617,scaleY:0.617,rotation:78.5,x:71.1,y:-36.5}},{t:this.instance_6,p:{regX:-2.5,regY:-29.3,scaleX:0.618,scaleY:0.618,rotation:103.8,x:92.1,y:-62.9}}]},1).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_39,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:111.9,y:49.7}},{t:this.instance_38,p:{regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:98.5,y:95.3}},{t:this.instance_37,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:109.3,y:77}},{t:this.instance_36,p:{scaleX:0.622,scaleY:0.626,skewX:6.3,skewY:0,x:121.1,y:30.3}},{t:this.instance_35,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:131.7,y:63.1}},{t:this.instance_34,p:{regY:0,scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:124.3,y:96.6}},{t:this.instance_33,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:130.8,y:83.1}},{t:this.instance_32,p:{scaleX:0.399,scaleY:0.459,skewX:3.5,skewY:0,x:137,y:48.8}},{t:this.instance_31,p:{skewX:-4.8,skewY:-6.9,x:151.6,y:76.1}},{t:this.instance_30,p:{skewX:-4.8,skewY:-6.9,x:148.5,y:98.1}},{t:this.instance_29,p:{skewX:-4.8,skewY:-6.9,x:153,y:88.8}},{t:this.instance_28,p:{skewX:-4.8,skewY:-6.9,x:155,y:66.4}},{t:this.instance_27,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:145.2,y:42.6}},{t:this.instance_26,p:{scaleX:0.622,scaleY:0.622,rotation:0,x:114,y:49.7}},{t:this.instance_25,p:{regX:0.1,scaleX:0.622,scaleY:0.622,rotation:0,x:105.7,y:95.3}},{t:this.instance_24,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:114.5,y:77}},{t:this.instance_23,p:{regX:0,regY:0,scaleX:0.622,scaleY:0.622,rotation:0,x:121.1,y:30.3}},{t:this.instance_22,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:135.3,y:63.1}},{t:this.instance_21,p:{regY:0,scaleX:0.399,skewX:-2.8,skewY:0,x:131.6,y:96.6}},{t:this.instance_20,p:{regX:0,regY:0,scaleX:0.399,scaleY:0.458,skewX:-2.8,skewY:0,x:136.6,y:83.1}},{t:this.instance_19,p:{scaleX:0.399,skewX:-2.8,skewY:0,x:139.1,y:48.8}},{t:this.instance_18,p:{skewX:-11,skewY:-7,x:156.7,y:76.1}},{t:this.instance_17,p:{skewX:-11,skewY:-7,x:155.9,y:98.1}},{t:this.instance_16,p:{skewX:-11,skewY:-7,x:159.4,y:88.8}},{t:this.instance_15,p:{skewX:-11,skewY:-7,x:158.9,y:66.4}},{t:this.instance_14,p:{regX:-51.7,scaleX:0.622,scaleY:0.622,rotation:1.3,x:117.5,y:5}},{t:this.instance_13,p:{regX:-51.7,regY:-64.8,scaleX:0.622,scaleY:0.622,rotation:0,x:118.5,y:5.6}},{t:this.instance_12,p:{regX:-2.6,regY:-34,scaleX:0.621,scaleY:0.621,rotation:29.8,x:127.8,y:-46.2}},{t:this.instance_11,p:{regY:19.8,scaleX:0.556,scaleY:0.547,rotation:20.3,x:104.8,y:-9.1,regX:17.4}},{t:this.instance_10,p:{regX:-2.3,regY:-29.6,scaleX:0.544,scaleY:0.575,rotation:42.9,x:95.6,y:-37.8}},{t:this.instance_9,p:{regX:12.8,rotation:22.1,x:118.1,regY:44.9,scaleX:0.621,scaleY:0.621,y:3.7}},{t:this.instance_8,p:{regY:-34.1,scaleX:0.621,scaleY:0.621,rotation:22.1,x:127.8,y:-46.3,regX:-2.6}},{t:this.instance_7,p:{regX:17.4,regY:19.7,scaleX:0.621,scaleY:0.621,rotation:22.1,x:109.9,y:-6.3}},{t:this.instance_6,p:{regX:-2.2,regY:-29.6,scaleX:0.621,scaleY:0.621,rotation:22.1,x:98.2,y:-39.4}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(14).to({_off:false},0).wait(6).to({startPosition:0},0).to({_off:true},5).wait(14).to({_off:false},0).to({_off:true},4).wait(19).to({_off:false,startPosition:2},0).to({_off:true},2).wait(15));

	// mantis
	this.instance_43 = new lib.mantis_standing("synched",0);
	this.instance_43.setTransform(14.2,-305.8,0.368,0.355,0,4.2,-175.8);

	this.instance_44 = new lib.mantis_babycrying("synched",11);
	this.instance_44.setTransform(14.2,-206.8,0.368,0.355,0,4.2,-175.8);
	this.instance_44._off = true;

	this.instance_45 = new lib.mantis_happy("synched",0);
	this.instance_45.setTransform(27.3,102.4,0.589,0.589,0,2.5,-177.5,-32,102.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_43}]},4).to({state:[{t:this.instance_44}]},11).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},6).to({state:[{t:this.instance_44}]},16).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},4).to({state:[{t:this.instance_45}]},8).to({state:[{t:this.instance_44}]},11).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(15).to({_off:false},0).wait(1).to({y:-160.8,startPosition:12},0).wait(1).to({y:-130.8,startPosition:13},0).wait(1).to({y:-132.8,mode:"independent"},0).wait(22).to({y:-34.8,mode:"synched",startPosition:7},0).wait(1).to({y:6.2,startPosition:8},0).wait(1).to({y:36.2,startPosition:9},0).wait(1).to({y:44.2,startPosition:10},0).to({_off:true},4).wait(19).to({_off:false,y:-132.8,startPosition:16},0).wait(17));

	// flower bunch
	this.instance_46 = new lib.flower_bunch("synched",0);
	this.instance_46.setTransform(-155.4,-364.8);
	this.instance_46._off = true;

	this.instance_47 = new lib.flower02("synched",0);
	this.instance_47.setTransform(-78.9,-272.4,1.028,1,0,0,-166.7,8.7,-2.6);

	this.instance_48 = new lib.flower01("synched",0);
	this.instance_48.setTransform(-85.1,-233.9,0.85,0.927,0,-14.2,-6.8,0.1,0);

	this.instance_49 = new lib.flower01("synched",0);
	this.instance_49.setTransform(-154,-311.4,1.047,1,0,0,-17.3);

	this.instance_50 = new lib.flower02("synched",0);
	this.instance_50.setTransform(-237,-373.2,1.029,1,0,0,-166.4);

	this.instance_51 = new lib.flower01("synched",0);
	this.instance_51.setTransform(-170.6,-389.7,1,0.87);
	this.instance_51.filters = [new cjs.ColorFilter(1, 1, 1, 1, -21, 0, 0, 0)];
	this.instance_51.cache(-72,-63,144,127);

	this.instance_52 = new lib.flower02("synched",0);
	this.instance_52.setTransform(-92.9,-410.6,0.998,0.998,0,52.6,-127.4);
	this.instance_52.filters = [new cjs.ColorFilter(1, 1, 1, 1, -21, 0, 0, 0)];
	this.instance_52.cache(-56,-56,112,109);

	this.instance_53 = new lib.flower01("synched",0);
	this.instance_53.setTransform(-204.1,-326.1,0.779,0.779,31.4,0,0,-0.1,0);

	this.instance_54 = new lib.flower02("synched",0);
	this.instance_54.setTransform(-70.8,-337.9,1.041,1,0,0,-163.8);
	this.instance_54.filters = [new cjs.ColorFilter(1, 1, 1, 1, -26, 0, 0, 0)];
	this.instance_54.cache(-56,-56,112,109);

	this.instance_55 = new lib.flower01("synched",0);
	this.instance_55.setTransform(-171.3,-219.3,0.954,0.923,0,20.8,35.4);

	this.instance_56 = new lib.flower02("synched",0);
	this.instance_56.setTransform(-223.6,-211.8,1.029,0.998,0,-40.1,-54.1);

	this.instance_57 = new lib.flower02("synched",0);
	this.instance_57.setTransform(-244.3,-279.9,1.038,1,0,0,-15.5);
	this.instance_57.filters = [new cjs.ColorFilter(1, 1, 1, 1, -41, -67, -11, 0)];
	this.instance_57.cache(-56,-56,112,109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},15).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_57,p:{y:-279.9}},{t:this.instance_56,p:{y:-211.8}},{t:this.instance_55,p:{y:-219.3}},{t:this.instance_54,p:{y:-337.9}},{t:this.instance_53,p:{y:-326.1}},{t:this.instance_52,p:{y:-410.6}},{t:this.instance_51,p:{y:-389.7}},{t:this.instance_50,p:{y:-373.2}},{t:this.instance_49,p:{y:-311.4}},{t:this.instance_48,p:{y:-233.9}},{t:this.instance_47,p:{y:-272.4}}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},6).to({state:[{t:this.instance_46}]},15).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_57,p:{y:-106.5}},{t:this.instance_56,p:{y:-38.4}},{t:this.instance_55,p:{y:-45.9}},{t:this.instance_54,p:{y:-164.5}},{t:this.instance_53,p:{y:-152.7}},{t:this.instance_52,p:{y:-237.2}},{t:this.instance_51,p:{y:-216.3}},{t:this.instance_50,p:{y:-199.8}},{t:this.instance_49,p:{y:-138}},{t:this.instance_48,p:{y:-60.5}},{t:this.instance_47,p:{y:-99}}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},12).to({state:[{t:this.instance_46}]},11).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(15).to({_off:false},0).wait(1).to({y:-338.5},0).to({_off:true},1).wait(1).to({_off:false,y:-313.8},0).wait(6).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(1).to({y:-212.7},0).wait(1).to({y:-168.5},0).to({_off:true},1).wait(1).to({_off:false,y:-146.1},0).wait(12).to({startPosition:0},0).wait(11).to({y:-313.8},0).wait(17));

	// vine
	this.instance_58 = new lib.vine_3leafs();
	this.instance_58.setTransform(-3.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(15).to({y:23.4},0).wait(1).to({y:68.4},0).wait(1).to({y:98.4},0).wait(1).to({y:-76.6},0).wait(22).to({y:23.4},0).wait(1).to({y:68.4},0).wait(1).to({y:98.4},0).wait(1).to({y:-76.6},0).wait(40));

	// grass
	this.instance_59 = new lib.grass_whole("synched",0);
	this.instance_59.setTransform(-15.7,59.7);
	this.instance_59.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 10, -11, 20, 0)];
	this.instance_59.cache(-363,-333,726,692);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(24).to({startPosition:0},0).wait(31).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(17));

	// bkgd
	this.instance_60 = new lib.back_drop("synched",0);
	this.instance_60.setTransform(6.5,8.7,1,1,0,0,0,395.9,268.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(24).to({startPosition:0},0).wait(31).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.8,-536.3,794.5,952.5);


(lib._static = function() {
	this.initialize();

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAu+AfUMhd7AAAMAAAg+nMBd7AAAg");
	this.shape.setTransform(-0.3,-0.5);

	// mantis
	this.instance = new lib.mantis_standing();
	this.instance.setTransform(123.2,-2.8,0.622,0.622);

	// leaf half
	this.instance_1 = new lib.leaf_half("synched",0);
	this.instance_1.setTransform(-48,-103.4,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_1.cache(-167,-33,327,94);

	this.instance_2 = new lib.leaf_half("synched",0);
	this.instance_2.setTransform(-48,67.1,1,1,0,0,0,-158.8,-27.4);
	this.instance_2.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_2.cache(-167,-33,327,94);

	// droplet
	this.instance_3 = new lib.droplet("synched",0);
	this.instance_3.setTransform(13.1,-100.2,0.999,0.999,-8.8);

	this.instance_4 = new lib.droplet("synched",0);
	this.instance_4.setTransform(12,79.5);

	// leaf
	this.instance_5 = new lib.leaf("synched",0);
	this.instance_5.setTransform(-48,-103.4,0.999,0.999,-8.8,0,0,-158.8,-27.4);
	this.instance_5.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_5.cache(-167,-72,334,143);

	this.instance_6 = new lib.leaf("synched",0);
	this.instance_6.setTransform(-48,67.1,1,1,0,0,0,-158.8,-27.4);
	this.instance_6.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_6.cache(-167,-72,334,143);

	// vine
	this.instance_7 = new lib.vine_leaf("synched",0);
	this.instance_7.setTransform(-168,-237.6);
	this.instance_7.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_7.cache(-126,-112,253,224);

	this.instance_8 = new lib.vine_leaf("synched",0);
	this.instance_8.setTransform(-169.1,-66.5);
	this.instance_8.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_8.cache(-126,-112,253,224);

	this.instance_9 = new lib.vine_leaf("synched",0);
	this.instance_9.setTransform(-168,102.4);
	this.instance_9.filters = [new cjs.ColorFilter(1, 1, 1, 1, -6, 0, -46, 0)];
	this.instance_9.cache(-126,-112,253,224);

	// grass
	this.instance_10 = new lib.grass_whole("synched",0);
	this.instance_10.setTransform(-15.7,59.7);
	this.instance_10.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 10, -11, 20, 0)];
	this.instance_10.cache(-363,-333,726,692);

	// bkgd
	this.instance_11 = new lib.back_drop("synched",0);
	this.instance_11.setTransform(5.9,8.3,1,1,0,0,0,395.9,268.3);

	this.addChild(this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-391.3,-347.3,794.5,763.4);


// stage content:
(lib.mantisCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:13,win:21});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* #include "../../gameAssets/expressinstall.as"
		
		if (_root.MMplayerType == undefined) {
			// --- upgrade not needed
			nextFrame();
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
					
					getURL("javascript:alert('There was an error in downloading the Flash Player update. Please try again later, or visit adobe.com to download the latest version of the Flash plugin.')");
				}
			}
			
			// --- Start upgrade
			loadUpdater();
		}*/
	}
	this.frame_1 = function() {
        this.stop();
		/* stop();
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "TranslationGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/mantis.xml", "TranslationGame");
		}*/
	}
	this.frame_7 = function() {
        this.stop();
		/* stop();
		dispatchEvent ({type:"ready", bubbles:true});*/
	}
	this.frame_13 = function() {
        // this.stop();
		/* stop();
		if (game != undefined) delete (game);
		var game:RunGame = new RunGame(this);
		
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
	this.frame_21 = function() {
        // this.stop();
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(6).call(this.frame_13).wait(8).call(this.frame_21).wait(8));

	// Text
	this.instance = new lib.playBtn();
	this.instance.setTransform(464.5,251.5,1,1,0,0,0,78.5,21.5);

	this.text = new cjs.Text("IDS_INSTRUCTIONS", "20px 'Arial'", "#000066");
	this.text.lineHeight = 22;
	this.text.lineWidth = 308;
	this.text.setTransform(68,138);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance}]},7).to({state:[]},1).wait(21));

	// Text box
	this.instance_1 = new lib.directions();
	this.instance_1.setTransform(301,203,0.076,0.076);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({scaleX:0.05,scaleY:0.05},5,cjs.Ease.get(1)).to({_off:true},1).wait(16));

	// BG
	this.instance_2 = new lib.grass_whole("synched",0);
	this.instance_2.setTransform(286.3,251.7);
	this.instance_2.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 10, -11, 20, 0)];
	this.instance_2.cache(-363,-333,726,692);

	this.instance_3 = new lib.back_drop("synched",0);
	this.instance_3.setTransform(308.4,200.7,1,1,0,0,0,395.9,268.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).to({state:[]},11).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
