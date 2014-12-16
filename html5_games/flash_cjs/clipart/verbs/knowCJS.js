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
	this.shape.graphics.f("#FFF2BB").s().p("AgCACIACgSQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAGAHgOAeIACgSg");
	this.shape.setTransform(7.4,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF2BB").s().p("AAlAmQgLg4gfgLQgfgLgFACQAGgDAhAJQAgAKAMA7QAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_1.setTransform(3.3,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF2BB").s().p("ABFBKQADgyglgwQgjgphLAFIAXgZQAEgBAZACQAXABAaAQQAuAcAFBIQAAAYgJAeIABgNg");
	this.shape_2.setTransform(4.3,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDC48").s().p("AhbBfQgmgsgBg7QABg6AkgjQAlgkA4gCQA5ACAkAkQAlAjABA6QgCA7glAsQgmAqg2ADQg1gDgmgqg");
	this.shape_3.setTransform(0.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4A939").s().p("AhlBlQgqgtgChAQABg+ApgmQAognA/gCQA/ACApAnQApAmABA+QgCBAgqAtQgqAvg8ACQg7gCgqgvg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,-15,29.4,30);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AgIAAQACgJAGAAQAIABABAIQgCAKgHAAQgIgCAAgIg");
	this.shape.setTransform(-16.5,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAAQADgTAQgBQASADAAASQgCATgRABQgSgEAAgRg");
	this.shape_1.setTransform(-16.5,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AgBAJQgJgCACgIQADgIAHABQAIACgBAHQgDAIgGAAIgBAAg");
	this.shape_2.setTransform(16.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDATQgSgFACgRQAGgRARACQASAGgCAPQgGAQgOAAIgDAAg");
	this.shape_3.setTransform(16.4,-1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-2.9,37,6);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("Am5CqIgEjFIgChnIElgNIJSgaQAQBMgRBPQgRBMgqA4QgRAbgUAZg");
	this.shape.setTransform(44.8,17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89.7,34.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},3).to({startPosition:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-15,29.4,30);


(lib.toknow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AgVAAQACgUATgCQAUACACAUQgCAVgUACQgTgCgCgVg");
	this.shape.setTransform(33.3,-23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AgbAAQACgZAZgCQAaACACAZQgCAagaACQgZgCgCgag");
	this.shape_1.setTransform(42.9,-29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AgqAAQADgnAngFQAnAFAEAnQgEAognAEQgmgEgEgog");
	this.shape_2.setTransform(52.7,-37);

	this.instance = new lib.Symbol2();
	this.instance.setTransform(74.6,-71.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAMQgYgBgCgDQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQABACAXAAQAVABAngSQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgnASgWAAIgCAAg");
	this.shape_3.setTransform(77.5,-55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAMQgagBgBgDQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABACAZAAQAWABAqgSQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgpASgXAAIgCAAg");
	this.shape_4.setTransform(77.6,-53.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAMQgYgBgCgDQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQABACAXAAQAVABAngSQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgnASgWAAIgCAAg");
	this.shape_5.setTransform(77,-56.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgeAiQgLgJgFgtQA1ACAdgRQAJAWACATQAAAHgCAEQgJALgcAFQgOADgLAAQgIAAgFgCg");
	this.shape_6.setTransform(77.3,-55.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AghAtQgMgHgFgaQgGgXAAgOQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABABAAAAQAbAGAcgJQAdgKADgCIAEAAIADACQADAGAHAXQAGAUgGAQQgMAQgfAFQgQADgMAAQgJAAgHgBg");
	this.shape_7.setTransform(77.3,-55.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEEA").s().p("AgWFNQhVAdgZAsQAFgcAAgYQAAhIgogwQg1g3hHgPQhHgPgoACQBhg6AShaQAEgRAAgUQgCg4gUgtQgTgugSgZQB2BKBVgmQBFgmAghNQAfhNAHg4QAVCXBaAsQBPAeBUgdQBTgcArgdQhdCCAABeQAAAbAIAZQAQApAbAXQAbAWASAIQiJA3gcBiQgIAaAAAZQAHBSAdApQinhzh5Aeg");
	this.shape_8.setTransform(76.2,-73.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AEiHSQitiOh4AYQhBAUgkAqQgjAqgBAFQgCAEgEgBQgEgCAAgEQAfh8g8hHQhDhChZgJQhYgKgKAEQgEAAgBgEQgBgEADgCQB0hEAXhkQAKhagog+Qgpg+gHgDQgDgEADgDQADgDAEACQCIBdBfgqQA9ggAdhDQAdhEAIg6QAJg6gBgFQABgEACAAQAFAAAAAFQAPC5BjAvQBBAaBHgSQBHgTAzgcQAygdADgDQAEgCADACQADADgCAEQiRCzAfBuQAWA1AoAZQApAZAFAAQADABAAAEQAAAEgDABQhKAbgwAcQgwAdgPAwQgQBNAeBEQAdBEAHAFQACADgDADQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_9.setTransform(76,-74.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},64).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape},{t:this.instance}]},2).wait(30));

	// hair
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAyQgNgFgDgTQgFgoAdgeQAKgJAGAEQANAGAGAPQAGAPAAAFIABAFIgEAAQgOADgMARQgJASgFAMIgCAEg");
	this.shape_10.setTransform(-21.6,-49.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAgAgQgIgLgYgGQgXgGgPgCIgGAAIATguIADAAQAvAFAPAaQAJAigIAGIgEAIg");
	this.shape_11.setTransform(16.4,-55.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#422200").s().p("AlZEOQgcgpgzgvQgzgwhGgTQALgZAsg+QAsg9BAgdIAGgDIgYgYIgcgcQAngvANgDQAIAEARAUQASAUAOASIAEAGIADgGQABgIA7hIQA7hHByg1QgZATgHAgIgBAGIAHgBQAIgEBqgVQBsgUCEAGQCEAHBRBNIgngDIgbgCIAGAIQAnAyAvBCQAwBCAKAXQgcBYglBfQglBegYAZIAFg3IAIhWIAFgtIgHACQgyAPgMgFQACgIAKgVQAOgcAMgfQALgfgEgSQgGgThjgXQg7gPg6gVQg6gUgegfIgHAGQAEAHAnAmQAmAmAzAYQg6AEh4gJQh1gIhrgqIgEAIQAFAFAmAdQAnAdAoAQQgqAHhMAAQhMAAgygZIgJgGIACALQABAIASBDQATBEAkAvQgUAGgdAMQgcANgHAOIgBADQAAAEACADIAPASIAQAVQgEACgbAeIAAAAQgDAAgbgog");
	this.shape_12.setTransform(-2,-39.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AlJE1QAAgCgZgmQgZglgygrQgxgrhIgSIgHgBIADgFQADgMAuhEQAshDBIglIgbgbIgWgWIADgDQAMgQATgVQAUgUANABQALAFASAVIAcAiQAOgcBDhIQBEhIB3gqIACAIQgCABgXASQgVATgJAaQAigLBtgTQBwgUB8ALQB9AKBKBRIAGAIIghgFIgtgGIBTBrQA3BKAMAaIAAACIAAABQgJAegZBJQgaBIgdBBQgdBBgWAHIgGABIAEguIAJhWIAGg2QgRAGgUADQgVAEgHgGQgEgDAAgEIABgCQADgKAKgVQAKgWALgbQALgbACgUIAAgKQgEgIgegHIhDgRQhbgVhMglQAXAYAfAWQAfAWAgAHIAAAJQgFABhBABQhCABhdgJQhagJhXgeQAYATAiAVQAgAUAbAGIAAAJQgOAEhZAGQhZAFhHgdQAGAdATA7QATA8AfAjIAFAGIgHACQgbAJgaAMQgbALgFAJIAAABIABABIAhArIgBACIgPAOQgMANgJAOIAAAAQgDAAgRgQg");
	this.shape_13.setTransform(-2.1,-39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(100));

	// Layer 3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AgIAAQACgJAGAAQAIABABAIQgCAKgHAAQgIgCAAgIg");
	this.shape_14.setTransform(-11.8,-14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAAQADgTAQgBQASADAAASQgDATgQABQgRgEgBgRg");
	this.shape_15.setTransform(-11.9,-15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AgBAJQgJgCACgIQADgIAHABQAIACgBAHQgDAIgGAAIgBAAg");
	this.shape_16.setTransform(21,-16.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDATQgSgFACgQQAGgSARACQASAGgCAPQgGAQgOAAIgDAAg");
	this.shape_17.setTransform(21.1,-17.7);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(4.7,-16.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_1}]},5).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:0.7,y:-34.7},5).wait(20).to({startPosition:0},0).to({x:4.7,y:-16.7},5).wait(20).to({startPosition:0},0).to({y:-24},5).wait(36));

	// eye
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6ECED").s().p("AAbCNQgwgqgKhaQgHhxA6gpQgbA9AGBgQAFBPAdA4IgGgGg");
	this.shape_18.setTransform(-19.2,-27.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgfCMQgygrgKhZQgFhBAWguQAWgvAngFQAWgCAXASQAxArALBZQAFBBgWAvQgWAugnAFIgFAAQgTAAgVgQg");
	this.shape_19.setTransform(-13.3,-27.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkCTQgygtgLhdQgFhFAXgxQAYgyApgFQAZgDAaAVQAzAuAKBdQAFBEgYAyQgXAxgqAGIgEAAQgWAAgYgTg");
	this.shape_20.setTransform(-13.3,-27.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6ECED").s().p("AggACQAKhiA3gjQglAxgJBXQgFBLAWA0QgngvADhTg");
	this.shape_21.setTransform(15.7,-29.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgHCTQgWgBgTgSQgrguADhVQAEg+AcgpQAbgoAlAAQAWABASASQAsAugCBWQgFA+gcAoQgcAogjAAIgBAAg");
	this.shape_22.setTransform(21.4,-28.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgICbQgZgBgVgUQgsgwADhZQAFhCAegrQAegrAnAAQAZACAVAVQAtAvgEBZQgFBDgeAqQgeArgmAAIgBgBg");
	this.shape_23.setTransform(21.4,-28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(100));

	// mouth
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgggJQA4gaBEAcQAEADgCADQgCACgEgBQhBgag2AXQg5AVgFAEQACgIA7gXg");
	this.shape_24.setTransform(3.5,0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D6AE8A").s().p("AgPAMQgKgEgBgHIAKgBQAAACAKAFQAIAFATgYIAGAIQgXARgNAAIgGgBg");
	this.shape_25.setTransform(5.2,16.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D0000").s().p("AgTgUQAIgIALgBQAKABAJAPIABAAIgEAhQgIALgMgBIgBAAQgKAAgEgyg");
	this.shape_26.setTransform(4.9,9.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6B4A00").s().p("AAAAcQgLAAgJAGQABgrAGgOQAFgOADAAQAFgBAAACIAAAAQAWAYgCAsIAAAHQgJgKgLgBg");
	this.shape_27.setTransform(4.9,2.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIBOQgWgIAAg/QAAhLAVgJQAKgDAFAGQAbAcgDAwQgCAzgDAJIAAABIgBABIgLAKQgHAFgGAAIgIgBg");
	this.shape_28.setTransform(4.9,5.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AgiAlQgqgMgJgOQgHgggCgRQATAOAzALQAzALBEgjQgCAPgGAbIgCAAQg9AigmAAQgLAAgJgCg");
	this.shape_29.setTransform(5.3,4.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D0000").s().p("Ag/gUQAKgHAlgJQAjgIAtAUQgWA7grAEQgqgHgUg0g");
	this.shape_30.setTransform(5.3,14.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6B4A00").s().p("AhTgSQASAPAqAEQAnAGBEgiQgHAagKAZQgvgVglAIQglAIgNAJQgKgYgGgWg");
	this.shape_31.setTransform(5.4,8.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgOARQgDgCACgEQAXghAFAHQADAAABAEQgBADgDABQgCgFgTAbQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_32.setTransform(-4.9,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AALAPQAAgRgJgGQgLgEgDADQgEABgBgDQgBgEADgCQAFgEARAGQAMAIAAAWQAAAEgEAAQgEAAAAgEg");
	this.shape_33.setTransform(16.3,-0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhAAxQgWgugJgsQgIguAAgIQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQADAGA4ATQA2ATBSgrQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAIgKAvQgKAugYAtQgXAtgnACQgogGgWgtg");
	this.shape_34.setTransform(5.3,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},19).to({state:[{t:this.shape_24}]},10).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},40).wait(31));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#514841").s().p("AgeAAQgwAJgKAFQBNgoAwASQAyARACAGQhBgYg2AJg");
	this.shape_35.setTransform(7.2,41.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAHADQgHgPgNAAQgEABgBgEQgBgEAEgCQARgBAJAWQAKATgCADIgMgTg");
	this.shape_36.setTransform(47.8,-8.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AguARQgCgDACgDQADgJApgSQALgCATACQASACACACQgDACgNgBQgOgBgKACQgSAGgOAJIgPAMIgEABIgDgBg");
	this.shape_37.setTransform(47.2,-9.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAGQAEgNANgMQAJgHAPADIgCAJQgLgDgIAGQgJAJgHAMIgIAPQAAgDAEgQg");
	this.shape_38.setTransform(-42.3,-5.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AANgEQgfgJgWAEQgVADgBABQABgEAlgIQAigHA2AkIgGAHQgZgTgUgEg");
	this.shape_39.setTransform(-41.1,-6.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJBLIATgEQAVgEASgTQAlgwgOgtQgKgXgdAAQhAAFgcAiQgaAeAAAEQAAgFAYgjQAZglBFgFQAqAEAGAYQAJAXgHAcQgHAegVAXQgWAXgZAAQgIAAgJgDg");
	this.shape_40.setTransform(3.1,-12.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAAdQgHgKAAgWQABgXACgDQACADACAVQABAUAFAHQADADgCADQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_41.setTransform(1.9,-22.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D6AE8A").s().p("AjhFkQChgwA1hHQA0hGAThGQAKgfgWATQgVATgKgaQgKgZAuijQgeAIgXgBQgagCASggQAWgyAYg3QAYg3AGg6QAFAFAEAGQAqBHABBQQABBQgOA6QgOA4gDADIAIAFIARgRQAQgRAVgLQAkgRAXAUQAYAXgNAlQgSAfgxgGQgwgGgHgDIgKgEIAFAKQAvBagnBGQgzBMhiAiQhkAjg+ACIgRAAg");
	this.shape_42.setTransform(31.4,-10.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EAC49B").s().p("Ag0GbQhOgIhLgUQhKgUgogeQgyg0AHhCQAHhCAGgHIgIgFQABADgZAJQgZAJg9gIQgegFgKgUQgFgLAAgMQAGgqAKgPQBCgQAfAcQAfAcABAIIAFAKIADgLIABgKQgCgsgUhMQgVhNgHgYQAdiHBRg7QBRg8BVgOQCYgaCTApQCTApAxBFQAqBHABBQQABBQgOA4QgOA6gDADIAIAFQABgCAQgRQAQgRAWgLQAkgRAWAUQAYAXgNAnQgSAfgxgGQgwgGgHgDIgKgEIAFAKQAwBagoBGQgyBMhkAiQhkAjg/ACIgYAAQgtAAg7gHg");
	this.shape_43.setTransform(2.8,-16.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgzGlQhPgJhMgUQhNgUgqggQgzgzAEhAQACgxAIgZQgUAQhWgIQgjgGgMgYQgLgdAKgdQAKgdADgEIAAgBIACgBQA5gQAgATQAhASAMATQgDglgRhDQgShEgMgqIgBgBIAAgBQAfiLBTg9QBTg+BXgOQCbgaCVAqQCWArAzBGQAwBTgEBbQgFBvgTAzQASgTAagPQApgRAbAWQAcAcgOAsQgQAggqgBQgpAAgZgHQAXAuAAAqQAAAmgTAiQg0BOhmAjQhnAkhAACIgYAAQgsAAg7gGg");
	this.shape_44.setTransform(2.8,-16.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgCAhQgDgQACgVIADgbQAAgEAEAAIAAAEQgEAYAFAlQABAEgEACIgBAAQgBAAgCgDg");
	this.shape_45.setTransform(10.1,33);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgIAXQgCgDADgDQACgFAFgQQAEgRADgCQADABAAAEIgFAWQgDAPgEAFIgDAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_46.setTransform(-1.6,32.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAIQgHgEgMgDIgQgEQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAQAFIAUAFQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_47.setTransform(-9.8,58.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgSgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQgBAHAhAIQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgkgKABgGg");
	this.shape_48.setTransform(-9.1,57);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgKAMQgCgEADgDIAVgRIgIAMIgHAMIgEABIgDgBg");
	this.shape_49.setTransform(17.3,56.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgOABQAAgCAEgBIAZgDIgMAFIgMAGQgEAAgBgFg");
	this.shape_50.setTransform(20,58.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D6AE8A").s().p("Ag6BrQgWgEgNgPIALADQAIABAlgLQAkgLALgmQAFgZABgVQACg5gCgFIgBgGIAHABQAEACAWgHIADgDIADADIANAKQALgIAPgUIAAAAIABABQgBAIgKAMQgKAMgEADQgDgBgJgHIgDgDIgDACQgUAKgEgDIgGAAIABAGQACAEADA5QAAAVgEAZQgJAmgfANQggANgIAAIgBAAgAgthoIAAgCIABACg");
	this.shape_51.setTransform(-7.6,41.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EAC49B").s().p("AgyCNQgagFgMgTQgNgVABgYQACgeACgEQATgjAWgZIAZgdIADgDIgDgDQgHgFgHgnQAAgLAGgLQANgSAbABQAdACAWAFIAIABQASAKAJAdQAHARAGAGIAAABQAAAIgKAMIgOAPQgDgBgJgHIgDgDIgDADQgUAJgEgDIgGgBIABAGQACAFACA3QABAWgEAZQgJAngfANQggANgIAAIgBAAg");
	this.shape_52.setTransform(-8.4,38.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgyCWIgBAAQgfgFgPgXQgNgZABgaQACggACgEIAAgBQARgfAUgYIAcgiQgKgNgEghQAAgOAHgNQAQgWAfABQAeABAYAGIAIABQAZALAJAhQAFAOAFAFQAEACABAHQgCAMgMAOQgLAOgEACQgKAEgLgLQgNAHgJAAQADAQABAoQAAAWgDAaQgLAtgjAOQgiAOgJAAIgBAAg");
	this.shape_53.setTransform(-8.3,38.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D6AE8A").s().p("AAkBYIgHgFQgPgHgNgZQgMgZgChIQgMgGgKgJQgLgKgFgLIgBgLQACAGAUATQANAIAMAFQAIBKAQAYQARAYARAGIAIAFQARAKAZgJQgYARgTAAQgNAAgLgIgAg/gyIgIgCQgPADABgbIAAgCIgDgCQgEAAgKgPQALAMAEAAIACABIAAADQADAbAPgEIAIABQgBAEgBABIgBAAIgBAAg");
	this.shape_54.setTransform(19.2,42.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EAC49B").s().p("AAcCJIgGgFQgQgHgMgZQgNgZgChKQgLgEgMgJQgQgTgCgHQABAZgIAMIgCAAIgIgCQgPACAAgaIAAgDIgCgBQgJgBgIgbQAAgLAIgVQAIgWASgQQAXgTAeAGQAcAFAOAaQAMAYAAAaQgBAVgEALIgCAFIAFABQACgFA0AnIAMARIAMARQAFAGAFAlQABAQgLAPQgbAagYAAQgNAAgMgIg");
	this.shape_55.setTransform(19.9,36.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EAC49B").s().p("AAcCJIgGgFQgQgHgMgZQgNgZgChKQgLgEgMgJQgQgTgCgHQABAZgIAMIgCAAIgIgCQgPACAAgaIAAgDIgCgBQgJgBgIgbQAAgLAIgVQAIgWASgQQAXgTAeAGQAcAFAOAaQAMAYAAAaQgBAVgEALIgCAFIAFABQACgFA0AnIAMARIAMARQAFAGAFAlQABAQgLAPQgbAagYAAQgNAAgMgIg");
	this.shape_56.setTransform(19.9,37.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAXCQIgHgEQgQgIgNgaQgPgagChMQgKgEgPgQQgCAPgHAFQgFADgFgCIgHgBQgUABgCgdQgOgGgGgdQAAgNAJgXQAJgXAUgSQAZgVAjAGQAhAGAQAeQANAaAAAcQgBATgEAMQANACAqAgIAYAkIABABQAGAHAFAoQABATgNARQgfAegbAAQgQAAgOgKg");
	this.shape_57.setTransform(20,37.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#968F89").s().p("AgCBKQgKgOgig0QgigzgKghIAKgDQAXBJAsAdQApAeA+ADIABAEQgBAIgtAKQgJACgJAAQgQAAgNgGg");
	this.shape_58.setTransform(27.5,29.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AAA5A0").s().p("AgCBTQgKgOgig0QgigzgKghIA3gOQAcgGAIgBQAIACAfAmQAeAmAVBPQgBAIgtAKQgJACgIAAQgRAAgNgGg");
	this.shape_59.setTransform(27.5,28.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgGBbIgBAAIgBgBQgIgKglg6Qgmg5gJgjIAAgDIADgCIAygMQAmgJAMgBIABAAIABABQAGAAAiAnQAhAnAXBXIAAACIAAACQAFAIg7APQgKACgKAAQgSAAgPgHg");
	this.shape_60.setTransform(27.5,28.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EAC49B").s().p("AgUAGIgRgyIADgLQASADAxgIQAEAPABAjQABAggQAYQgJANgOACIgUg3g");
	this.shape_61.setTransform(30.7,42.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgGBHIgohzIAIgWIAEACIAOABQAOAAArgGIAEgBIABAEQACAHADApQADAngTAfQgMARgWACg");
	this.shape_62.setTransform(30.6,42.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#968F89").s().p("AghAcQgagOgLgHQABgHADgFQBKARA+gxIgDAGQgBAEgPAaQgPAZgVAMIgDABIgKABQgPAAgUgKg");
	this.shape_63.setTransform(-19.2,35.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#AAA5A0").s().p("AgrBPQgagOgKgIQAHgnAnguQAkgwANgMQAwAAAMAXQAKAZgNAdQgNAagDADQgBAEgPAaQgPAbgVAMIgDABIgIABQgRAAgUgKg");
	this.shape_64.setTransform(-18.3,30.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgzBVQgfgRgFgFIgCgBIAAgCQAHgtArgzQApg0AJgIIABgBIACAAQA3gBAPAcQAMAegOAeQgNAcgEAEQgBAFgQAbQgQAcgYAOIgDABIgKABQgWAAgYgNg");
	this.shape_65.setTransform(-18.3,30.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EAC49B").s().p("AgbAGQgPgxADgZIAAgBIAbACIAYACIAJATIAJASIAFAtIAFA1Qg1gOgOgyg");
	this.shape_66.setTransform(-18.7,44.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAsBQQgvgIgVglQgUgjgDgkQgDgkABgDIABgEIBBAFIAVAqIAMBwg");
	this.shape_67.setTransform(-18.6,44.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7F7974").s().p("Ai8BjQgKgdgBgzQgBg1AahRIBOgFICMgJIBOgFQAMARAfBGQAfBDAEBKQAAAMgCAMQgcgEhrgDQhogDiEAcQgGgIgJgdg");
	this.shape_68.setTransform(5.4,33.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#726C65").s().p("Ai8BjQgKgdgBgzQgBg1AahRIBOgFICMgJIBOgFQAMARAfBGQAfBDAEBKQAAAMgCAMQgcgEhrgDQhogDiEAcQgGgIgJgdg");
	this.shape_69.setTransform(5.4,33.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AiyCOQgHgCgShDQgRhDAnh/IABgCIEygWIADAAIABADQAJALAmBVQAmBUgHBUIgBAFIgEAAIhDgGQg/gDhVADQhWADhLAVIgDABg");
	this.shape_70.setTransform(5.3,33.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#726C65").s().p("AhwAAIACgCQAPgTATgBIALACQAXAGAtADQAuAEA6gRQAGAPAAAIIAAACQgEAHgaAGQgaAHgfAEIgPAAQhWAAglgZg");
	this.shape_71.setTransform(33.9,76.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ah4ADIgEgDIAKgIQARgWAZgBIALADQAYAGAsADQAuADA6gRIAEgBIACADQALAYgEALQgIAOgiAIQgiAHgTACIAAAAIgPAAQheAAgoggg");
	this.shape_72.setTransform(33.6,76.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#726C65").s().p("AgrAkQg6gHgbgeQABgIAQgcQAIAdBWAIQBPgBASgKQALgEAIAAQARAEANATQgaAOgeAHQgoAJgmAAQgTAAgTgCg");
	this.shape_73.setTransform(-22.5,77.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgqAyQhAgFgggnIgCgCIABgCQgCgEAYgpIAGgHIADAHQABAJATAOQAUAOAyACQBMgBASgKQAMgEAKAAQAdALALAUIADAEIgFADQgeAQghAIQglAIgqAAIgkgBg");
	this.shape_74.setTransform(-22.3,76.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#383028").s().p("Ag4BJQg6gGgcggQACgSAjgqQAjgsBZgFQBEAAAgAjQAcAngFAZIAAAEQgMAPhHAWQgoAJglAAQgTAAgTgCg");
	this.shape_75.setTransform(-21.1,73.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ag1BTQhAgFghgnIgBgBIAAgDQgCgIAkgyQAjg0BmgIQBHAAAjAmQAVAbADAXQADAYgBAEIgBABIgBABQgBADgXANQgXAOgpALQglAIgpAAIglgBg");
	this.shape_76.setTransform(-21.2,73.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#383028").s().p("AhHA4QgigPgOgUQgMgQABgNQACgWAEgFQA6gtBAAPQA/APAFAGQAoAcAOAZQAOAbgEAKQgEAHgZAHQgbAGgfAEIgFAAQhLAAgigOg");
	this.shape_77.setTransform(32.1,71.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AhLBAQgkgQgPgWQgQgXAEgTQAEgVACgDIAAgBIABAAQA+gxBEAQQBCAPAHAHQAoAdAQAcQAQAegFAOQgIAOgiAHQgiAHgTACIgKAAQhLAAgigPg");
	this.shape_78.setTransform(32.1,71.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#635F5B").s().p("AANADQgBgpgtg5QBKBDgIA8QgDAxgHAJQgGAEgHACQAFgxgCgsg");
	this.shape_79.setTransform(35.2,57.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#635F5B").s().p("AgyBPQAWhpAhgnQAignAMgBQguAngWBAQgXA+AQAuQgcgVACgGg");
	this.shape_80.setTransform(-23.4,56.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3F3A35").s().p("AgfgcQABgLAKAEQAJAEAIgGQgPgHgIgOQgHgNASAAQASAQAcAQIgRABIAHAIQAIAIgCAAIgJgBIgGAAIAEAqIAEAyIghACQAAgvgSg0g");
	this.shape_81.setTransform(-10,61.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3F3A35").s().p("AAGBFIAIgyIAGgrIgGACQgIADgFgEQgEgGAAgDIAAgDIgDAAQgTgDgVgBIABgBQAkgHAVgdIAAAbQAHAFAHgGQAHgHAHgBQANAfgLAhQgLAjgDAkQgQgFgGgDg");
	this.shape_82.setTransform(17.3,61);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4C4742").s().p("ADECGQg2gHgMgJIAHgxIAGgtIgGACQgIACgFgDQgGgHAAgCIAAgEIgDAAQhMgIhNAFQhPAEgIABIgJACIAHAGQAIAJgCAAIgJgBIgGgBIAEAsIAEAzQiHAKgmgWQgkgXADgIQAYhyAmglQAmglAFADQAkgNBcgKQBcgLBjAFQBkAGA+AlQAyAhARAmQARAjgBAgQgEAxgHAJQg/AdgvABIgSgCg");
	this.shape_83.setTransform(5,56.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AC8COQg7gMgDgFIgDgBIAIgpIAJgxQgKABgHgEQgIgGgBgGQhAgGhDACQhGADgcADQADAEAAAEIAAAEQgIAFgMgBIAHAzIAHAsIgFAAQheAJgvgJQgwgKgQgPQgVgXADgEIAAgBQAZh3AogjQApgjAHACQAlgMBegOQBfgMBmADQBnAEBAAmIgEAAQBbBFgCBDQgBBFgIAGIAAACIgCABQhFAfgzAAQgPAAgNgCg");
	this.shape_84.setTransform(4.7,56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(100));

	// Layer 7
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5B3B03").s().p("AgDBfIAcgHIAAgIQgCg9gRgvQgOgygIgOIgWAAIgBgDIAmAAQAGAOAQAxQARAxACA9IAAAGIgrAMg");
	this.shape_85.setTransform(90.8,68.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#473002").s().p("AgUgNIgThSIAmAAQAGAOAQAxQARAxACA9IAAAGIgrAMQgEg0gNg5g");
	this.shape_86.setTransform(90.8,68.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#352200").s().p("AgIBRQACgKABgfQACgvgchXIAdAAQAEATANA8QANA6AEA0IgogOg");
	this.shape_87.setTransform(85.8,68.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2D1E01").s().p("AAJBrIg1gSQgFgCABgEQACgCACgyQAAgugchTIAAgFQACgCADAAIBagBQAFAAABADQAFAGAUA6QAUA3AABIQAAAEgFACIg4ANIgCAAIgCAAg");
	this.shape_88.setTransform(88.6,68.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8C5D00").s().p("AtUAiIDlgSQC9gOEMgPQEKgPERgKQESgKDOAGIgBANQjHgFkDAJQkCAIkAAPQkBAMjGAPIkUAUIgBgLg");
	this.shape_89.setTransform(7.4,58.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6B4A00").s().p("AtUAWIDlgSQC9gMEMgRQEKgPERgKQESgKDOAGIgEAoIjsACQjEADkRAIQkPAFkNAPQkMAOi5AYIgDgjg");
	this.shape_90.setTransform(7.4,59.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8C5D00").s().p("AsGC4IAbgZQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIAAgBIgLhCQgIg1gKg2QgMg4gKgYQApgODbgrQDcgrFcgTQFfgSGzA6IgBAGQmwg3lbASQlaAUjZAqQjYArgoAOQAPApAPBWQAQBXADAaIgVAbQgTAZgTATIgaACIArgng");
	this.shape_91.setTransform(4.8,38.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#563701").s().p("Am8BpQDVgQDigGQEQgIDNACQDOADAMACQAFAAABgFIAhjbIAJABQAFABAAAEIghDdQAAAFgGABQgNgCjMgDQjOgCkSAIQiWAEitANQisAMh9AKIiBANQBUgXDWgQg");
	this.shape_92.setTransform(8.6,38.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6B4A00").s().p("AsdC4IAbgZQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgBIgLhCQgHg1gLg2QgLg4gKgYQAogODcgrQDbgrFdgTQFegSGzA6IgLBLIgVCAIgLBFIAAABQAAADADABIAfASIA2AcQjOgLkHAIQkHAIj/ARQkBASi9AQIj3AWIArgngAAAixQlVAWjQAlQjSAngJAEQgFACABAEIAgDPQABADACABQACABADgBQBQgXDYgQQDZgQDkgHQESgHDMACQDNADANABQAGAAABgFIAgjdQAAgFgFgBQkSgej1AAQhyAAhqAGg");
	this.shape_93.setTransform(7,38.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2D1E01").s().p("AtaEDQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIgCgYIgCgXQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAmgjIApglQgKhNgQhOQgOhQgLgRIgBgDIAAgBQABgDADgBQAIgGDXgxQDYgwFugXQFugYHNBEQAFABAAAEIAAACIgMBGIgUCDIgMBJIA1AcIAwAaQADACAAADIgBAZIgDAZQAAAEgGABIjKAFQi/AEkaAKQkWAJkZAOQkaAOjBASIgEgBgAAWi2QlEARjVAiQjUAigkALIAIA0IAOBZIAJA3QBVgWDUgQQDSgQDmgHQD+gHDGACQDHACApACIAIg4IAOhiIAIg5Qj+gZjnAAQhxAAhrAGg");
	this.shape_94.setTransform(7.4,40.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6B4A00").s().p("AghAgQAEglALggQAoADAMAGQgJANgFATQgEAUgCAOQgPgKggAEg");
	this.shape_95.setTransform(76.2,16.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3A2401").s().p("AAOAxIgOgHQgPgFgPAHQgDABgCgBQgDgCAAgDIAEglQAEgeAIgSQACgDADAAQApACAOAOQACAEgDAFQgGALgFAVQgEAYgBANQAAADgDACIgCAAIgCgBg");
	this.shape_96.setTransform(76.2,16.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6B4A00").s().p("AghgYQAQgLATgBQAHABADAFQARAaAFAeQgMAAgfALQgDgbgVgig");
	this.shape_97.setTransform(-65.4,23.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2D1E01").s().p("AgOAwQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgFgbQgEgXgNgRIgBgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAIgKAggGQAKABAGAIQARAiADAfIABABQACADAAADQAAAEgDADQgCADgDgBQgDgBgBgEIAAgDQgFgBgiAOIgCAAIgCAAg");
	this.shape_98.setTransform(-65.3,23.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#5B3B03").s().p("AgCBVIgKhVIgJhWIArgGIAAAEIgfAEIAJBWIAIBWIAOAEIAAABIgYgIg");
	this.shape_99.setTransform(-71.2,74.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#473002").s().p("AgCBVIgKhVIgJhWIArgGQgBAXgBA6QgCA5AEAvIgYgIg");
	this.shape_100.setTransform(-71.2,74.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#352200").s().p("AgYgKIADhPIAugEIgKAfIgHAVQgHAZgEAqIgIA6IgLAKQgDgvABg5g");
	this.shape_101.setTransform(-65.4,74.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2D1E01").s().p("AAABrIgpgKQgEgBAAgDIgUi1QAAgEAFgCIBIgIIAvgEQADAAADACQACACgBADIgVA8QgGAZgGAtIgIA2QAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIgUASIgEABIAAAAg");
	this.shape_102.setTransform(-68.1,74.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#473002").s().p("AAAAYQgGgcgJgZIALgBQAKAjAKAaIgQgHg");
	this.shape_103.setTransform(-56,65.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#473002").s().p("AgQgeIAagBIADAcIAEAYIgMALQgIgYgNgmg");
	this.shape_104.setTransform(-53.6,65.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2D1E01").s().p("AAMAsIgggNQgCgBgBgEQgDgPgHgUIgIgZQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQACgCADAAIA9gDQAGAAABAFIAJA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgVATQgCACgDAAIgCgBg");
	this.shape_105.setTransform(-54.8,66);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#473002").s().p("AgLgCIAFgwIAWAAIgEAxIgEArIgXAJQABgXADgeg");
	this.shape_106.setTransform(70.7,63.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#473002").s().p("AgNAtIADguIACgxIAWAAIgFAwIgDA1IgTgGg");
	this.shape_107.setTransform(67.2,63.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2D1E01").s().p("AgHA/IghgLQgEgBAAgEIAGhoQABgFAFAAIBHAAIAEABQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgJBlQgBADgDABIgiAOIgCAAIgDAAg");
	this.shape_108.setTransform(69.1,63.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6B4A00").s().p("AgDBUQAAgzgFg4IgGhPIASgCQAHAaACAvQACAuAAApIgBAuIgRADIAAgVg");
	this.shape_109.setTransform(-49.6,38.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3A2401").s().p("AgKBzQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABg4gEhLIgGhVQAAgFAEgBIAWgFQAEgBACAEQAIArABBQIAABgQgBAFgDABIgXAFIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_110.setTransform(-49.7,38.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6B4A00").s().p("AgSAxQgBhRAOhSIAYABIgHBeQgEA+gBAvQAAAQABAJIgZAAIgBhCg");
	this.shape_111.setTransform(58.4,33.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3A2401").s().p("AgXB5QgBgIAAhRQAAhPALhKQABgEAEAAIAcACQAFABAAAFQgFBFgDBLQgEBMADAPQAAAAABABQAAABAAAAQAAABgBAAQAAABAAAAQgCADgCAAIgeABQgEAAgBgFg");
	this.shape_112.setTransform(58.5,33.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAcAMQgog5hKgbIAOgsQAaADA4AwQA7AvASCGQgRgugqg6g");
	this.shape_113.setTransform(-78.9,-121.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgaAAQADgXAXgDQAYADADAXQgDAYgYADQgXgDgDgYg");
	this.shape_114.setTransform(-94.8,-131.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C1C1C1").s().p("AhfAHIgCgKQBBAFA0gMQA3gPAXgMQABAggMAbQgpAQgmAAQg1AAgygfg");
	this.shape_115.setTransform(-91.2,-79.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#767777").s().p("AhHAJQgPgVgFgVQBUAyBigjQgJANgjASQgjATgoACQgdgBgOgYg");
	this.shape_116.setTransform(-91.6,-75.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AhfAVQgQglABgIQgBgDADgCQACgCADABQBOAIA9gTQA/gUAEgEQADgBADACQADACAAADIgDAfQgDAagGALQgIALgnAWQgmAVgvADQgvgGgQgng");
	this.shape_117.setTransform(-91.2,-78.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#DEF6FC").s().p("Ai3DUQhJhVgDh/QADh+BJhUQBKhVBtgDQBuADBJBVQBKBUADB+QgDB/hKBVQhJBUhuADQhtgDhKhUg");
	this.shape_118.setTransform(-93.1,-109.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6CA4AD").s().p("Ai/DcQhNhYgDiEQADiDBNhYQBNhYBygEQBzAEBNBYQBNBYADCDQgDCEhNBYQhNBXhzAFQhygFhNhXg");
	this.shape_119.setTransform(-93.1,-109.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BFC1C1").s().p("Ag3HTQgagDgJgCQAWgyBCkGQBAkFAPloQAUDxgIDyQgJDzhjDZQgJgCgbgDg");
	this.shape_120.setTransform(-93.7,26.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EFEFEF").s().p("AAxA/QgGlAgsjGQgujHgLgRQgDgDgDgBIgFgWQAEgXAOgJQAFgBAIAGQALASAsDGQAuDGAHFBQAACdgWC1QgWC1g1C8IgJAMQBalrgFkwg");
	this.shape_121.setTransform(-84.4,-3.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D3D3D3").s().p("Ah+LhQAXgzBFkWQBDkWAIl2QADjug4jqQAEgXAMgKQAFgBAIAHQALARAuDHQAuDHAHFBQAACbgWC1QgXC1g2C9QADAIg1AjQgTAIgXAAQgcAAgigNg");
	this.shape_122.setTransform(-90.1,-1.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AiHLqQgFgDABgFQAJgMA/jZQA/jaAelHQAglKhSlbQAAgDAGgSQAHgSAMgHQAJgFAJALQAHAFAzDKQAyDKAMFLQAMFHhsGJQACAIg9AkQgXALgbAAQggAAglgQg");
	this.shape_123.setTransform(-90.2,-1.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4D4F4F").s().p("AgUB/IACAAQBrgYAagpQARgfgdgaQgcgXgHgCQgDgCABgEQALgpgWgWQgXgTgbgCIAQgPQAXgFAmAbQATAYgKArQgBAEAEACQAFACAZAbQAZAZgPAhQgXArheAZQgNACgOAAIgKAAgAiKg/QAOADAegDQgYAIgVACIABgKg");
	this.shape_124.setTransform(-92.2,78.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#777777").s().p("AiQBKIAFhEIAGhHQATAFAvgIQAugIAvgzQAXgFAmAcQATAXgKAsQgBAEADACQAGACAZAaQAZAZgPAiQgWAqhfAaQgOAEgPAAQg5AAhQg2g");
	this.shape_125.setTransform(-92.7,78.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AiaBSQgCgCgBgDIAMiWQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQACgCADABQAGAFAwgEQAxgDA1g5QAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAEgBAZAEQAZADAUAWQAPASAAAcQAAAMgCAPQAnAZAJAwQAAANgIAOQggA0hdAVQgQAFgQAAQg9AAhVg6g");
	this.shape_126.setTransform(-92.6,78.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#075407").s().p("AhSA7QABgCgJgdQgJgcglgdIAFgLIAfAPQAbAPAWAhQAEgXAWgeQAVgdAygFIACAMQgDgBgUALQgSAMgJAhQAQghBLgOIACAAIACAMQgDAAgUALQgUALgKAWQAXgYBKAKIAAABIgCAJQgEgCgbAFQgbAFgSAnQgDAFgFgBQgEgCAAgEIAAgCQAQgjAYgLQgxARAAAKIgKAOIgCgRIAAgFQADgdAVgQQgmARgKAUQgJAUACADIgNAAIAAgIQADg0AWgUQggAVgJAcQgJAeABAFIgMACQgQglgagPQAfA3gFALIAAAAQgBAFgFABQgGAAAAgGg");
	this.shape_127.setTransform(156.8,64.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#1D891D").s().p("AhTAaQgJgegogeQADgBAfATQAfAQAUAqQgCgFAQgqQAPgrA+gKQgIADgUAOQgZARgCA7QADgIALgYQASgcBGgNQgFABgZAOQgaAQgBAkQABgEAXgQQAXgPA0AIQgIgBgVADQgdAGgVArIiBAGQABgCgJgfg");
	this.shape_128.setTransform(156.7,65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAAABIgGARIAGgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIABAXIAIgOIgIAOIAaAAIgaAAIAFATIgFgRIAAAWg");
	this.shape_129.setTransform(177.9,-123);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAFATIgGgRIAAAWg");
	this.shape_130.setTransform(52.5,-116.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAAABIgGARIAGgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIABAXIAIgOIgIAOIAaAAIgaAAIAFATIgFgRIAAAWg");
	this.shape_131.setTransform(44.1,-130.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAGATIgHgRIAAAWg");
	this.shape_132.setTransform(147.6,-116.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAAABIgGARIAGgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIABAXIAIgOIgIAOIAaAAIgaAAIAFATIgFgRIAAAWg");
	this.shape_133.setTransform(102.2,-93.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAGATIgHgRIAAAWg");
	this.shape_134.setTransform(131.9,-93.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAFATIgGgRIAAAWg");
	this.shape_135.setTransform(104.6,-123.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAGATIgHgRIAAAWg");
	this.shape_136.setTransform(28.9,-93.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAFATIgGgRIAAAWg");
	this.shape_137.setTransform(-15.9,-79.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAGATIgHgRIAAAWg");
	this.shape_138.setTransform(-127.7,-82.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAGATIgHgRIAAAWg");
	this.shape_139.setTransform(-114.6,-128.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAAABIgGARIAGgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIABAXIAIgOIgIAOIAaAAIgaAAIAGATIgGgRIAAAWg");
	this.shape_140.setTransform(-42.5,-123.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAFATIgGgRIAAAWg");
	this.shape_141.setTransform(-23.5,-127);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAAABIgHARIAHgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIAAAXIAJgOIgIAOIAaAAIgaAAIAFATIgGgRIAAAWg");
	this.shape_142.setTransform(-4.7,-114.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAAABIgGARIAGgSIgaAAIAaAAIAAAAIgDgPIADAOIAAgWIABAXIAIgOIgIAOIAaAAIgaAAIAFATIgFgRIAAAWg");
	this.shape_143.setTransform(-46.4,-92.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAAACIgJATIAJgVIggAAIAgAAIAAAAIgDgTIADARIAAgvIABAxIAKgSIgKASIAgAAIggAAIAHAYIgHgVIgBAwg");
	this.shape_144.setTransform(-69.2,-110);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAAACIgIATIAIgVIggAAIAgAAIAAAAIgEgSIAEAPIABgvIAAAyIAKgRIgJARIAfAAIggAAIAIAYIgIgWIAAAxg");
	this.shape_145.setTransform(-99.7,-93.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#473924").s().p("AhJAxQgbgYACgiQAAgTAYgQQAhgNA0ACQA3ADAXALIAFADIACAWQAKAogTANIAAAAQgsALgwAFQgUADgOAAQgXAAgLgHg");
	this.shape_146.setTransform(15,-8.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#382711").s().p("AhXBAQgigfACgtQAEggAdgPQAlgQA9ACQBAACAdAPQAKAGAAAIIACAXQAEAVgBAXQgCAXgUAFQgTAFhEALQgaAFgVAAQghAAgSgKg");
	this.shape_147.setTransform(14.1,-9.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#473924").s().p("AgpAdQgLgRgCgXQAAgGADgFQACgHAKgBQAcgDAZAFQAcAFANAEIgDAXIgCAZQgNACgcAAIgMABQgUAAgSgDg");
	this.shape_148.setTransform(97.3,-30.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#382711").s().p("Ag2AxQgDgBgBgDQgEgGgJgZQgJgYAIgWQAEgMAWgGQAngEAkAIQAmAIAFADQAFACgBAGIgGBFQgBAGgFABQgGABgoACIgUAAQgbAAgZgDg");
	this.shape_149.setTransform(98.2,-29.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#473924").s().p("AhDA4QgYgegIgrQAAgGACgFQAEgNASgFQAogKAtABQAvABAbAQQALAIACAJQADAVAAAPQgBAZgBAJIhiAGIgzACIgQgBg");
	this.shape_150.setTransform(82.2,-19.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#382711").s().p("AhPBMQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQgFgFgTgkQgTgiAHgjQAIgWAZgHQAugNAzACQA2ACAgAUQARAMADARQAFBPgFALQgCAEgEABIhfAHQgjACgYAAQgZAAgMgCg");
	this.shape_151.setTransform(81.3,-18.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#473924").s().p("AhOApQgGgZgBggQgBgVAHgKQAFgFAHABQAhAEApgBIA4gDQALAGAMAaIABAGQAAAIgGAGQgRAbgwAQQgUAIgWAAQgaAAgagLg");
	this.shape_152.setTransform(-107.9,58.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#382711").s().p("AhhA1QgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgEgKgFgmQgFgkAPgWQAJgLAPACQAoAEAygBIA6gDIADABIAQAMQAMALAGATQADARgLAPQgWAeg7AUQgYAIgaAAQgiAAgigOg");
	this.shape_153.setTransform(-106.7,58.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#635A4B").s().p("AgXgKQAAgGADgDQADgDAJADIAgAJQgRAZgVAHQgIgSgBgOg");
	this.shape_154.setTransform(-84.9,-14.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#4F422F").s().p("AgVAhQgDAAgCgDQgDgHgGgTQgFgSAIgNQAIgJASAFIAoAMQABAAAAABQABAAAAAAQABABAAAAQAAABABABQABADgBACQgEAHgSATQgQASgRAAIgEgBg");
	this.shape_155.setTransform(-84.8,-14.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#075407").s().p("AhSA7QABgCgJgdQgJgcglgdIAFgLIAfAPQAbAPAWAhQAEgXAWgeQAVgdAygFIACAMQgDgBgUALQgSAMgJAhQAQghBLgOIACAAIACAMQgDAAgUALQgUALgKAWQAXgYBKAKIAAABIgCAJQgEgCgbAFQgbAFgSAnQgDAFgFgBQgEgCAAgEIAAgCQAQgjAYgLQgxARAAAKIgKAOIgCgRIAAgFQADgdAVgQQgmARgKAUQgJAUACADIgNAAIAAgIQADg0AWgUQggAVgJAcQgJAeABAFIgMACQgQglgagPQAfA3gFALIAAAAQgBAFgFABQgGAAAAgGg");
	this.shape_156.setTransform(78.2,67.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1D891D").s().p("AhTAZQgJgcgoggQADAAAfASQAfARAUAqQgCgFAQgqQAPgrA+gKQgIADgUAOQgZASgCA5QADgIALgWQASgdBGgNQgFACgZANQgaAQgBAkQABgEAXgRQAXgOA0AIQgIgCgVAFQgdAFgVArIiBAGQABgCgJggg");
	this.shape_157.setTransform(78.1,67.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4F4E4F").s().p("AAsAVIgLggIgpgBIgugCQACgFABgBIApABIA1ACIAMAmIgLAAg");
	this.shape_158.setTransform(99,23);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#686768").s().p("AABAVIg7AAQAGghAGgIIAoABIA1ACQAIAVAEARIg6AAg");
	this.shape_159.setTransform(98.6,23);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAGAgIhHABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgCgCAAgDQADgwAVgKIBiADQAEAAABAFIAJAYQAHASAAAJQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgEACIg8gBg");
	this.shape_160.setTransform(98.6,23);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7F7F7F").s().p("AjVgOQAYgHBxgJQBvgJCyASIABACQitgQhrAJQhtAKgYAGQAEAiALAIIgFACIgCAAQgMAAgKgwg");
	this.shape_161.setTransform(97.6,29.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#686768").s().p("AjVgOQAYgHBxgJQBvgJCyASIABAMQABARgOAQQgbgKh6gMQh3gKh6AqIgCAAQgMAAgKgwg");
	this.shape_162.setTransform(97.6,29.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AjOAkQgQgLgDgrQAAgFAFgBQADgEB3gNQB1gMDJAUQAEABABAEQABAEAAAWQAAAVgSARQgDABgDAAQgLgGh+gPQh8gQh+AuIgDABIgBAAQgDAAgOgLg");
	this.shape_163.setTransform(97.5,29.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#4C4C4C").s().p("AgEBjQgFg0AAhGQABhQAFgdQADgdADABQADAAADAOQgGAZgCBgQABBlAIA4QgDAYgEAFQgDgKgEg0g");
	this.shape_164.setTransform(92.9,48.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#353535").s().p("AgIBjQgFg0AAhGQABhQAFgdQAFgdACABQADgBAFAdQAFAdABBQQgBBGgEA0QgEA0gFAKQgEgKgEg0g");
	this.shape_165.setTransform(93.3,48.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgMB2QgFgugBgvIgBgxQAAgsAEgwQAEgvALgEQAMAEAEAvQAEAwAAAsIgBAxQgCAvgEAuQgEAugJAEQgIgEgEgug");
	this.shape_166.setTransform(93.3,48.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#4C4C4C").s().p("AgFBbQgDgwAAg/QACiBAIABQAEABAEAaQgGAcgBBPQABBJAFA0QgDAfgEAIQgCgLgFgwg");
	this.shape_167.setTransform(87.7,48.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#353535").s().p("AgLBCQgChLAAgMQAAgoADgsQACgsAIgDQAIADADAsQADAsAAAoIgDBXQgCBNgJAKQgJgKgChNg");
	this.shape_168.setTransform(87.9,48.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgPBDQgDhMABgMQgBgqAEgsQADgtALgDQALADAEAtQADAsAAAqQABAMgDBMQgEBPgMAKQgMgKgDhPg");
	this.shape_169.setTransform(87.9,48.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#4C4C4C").s().p("AgHB/QAHg1AAhdQgBhcgGgXQADgNACgBQAIgBACCBQAAA/gDAwQgFAwgCAKQgDgFgCgRg");
	this.shape_170.setTransform(107,47.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#353535").s().p("AgHBbQgEgwAAg/QACiBAJABQAJgBADCBQAAA/gEAwQgEAwgEAKQgDgKgEgwg");
	this.shape_171.setTransform(106.7,47.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgPBDQgDhMABgMQgBgqAEgsQADgtALgDQALADAEAtQADAsAAAqQABAMgDBMQgEBPgMAKQgMgKgDhPg");
	this.shape_172.setTransform(106.7,48);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#4C4C4C").s().p("AgICNQAIg2AAhsQAAhsgIgTQADgMACAAQADgBAEAdQAFAdAABQQAABGgEA0QgFA0gDAKQgCgEgDgQg");
	this.shape_173.setTransform(101.2,48.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#353535").s().p("AgIBjQgFg0AAhGQABhQAFgdQAFgdACABQADgBAFAdQAFAdABBQQgBBGgEA0QgEA0gFAKQgEgKgEg0g");
	this.shape_174.setTransform(100.8,48.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgMB2QgFgugBgvIgBgxQAAgsAEgwQAEgvALgEQAMAEAEAvQAEAwAAAsIgBAxQgCAvgEAuQgEAugJAEQgIgEgEgug");
	this.shape_175.setTransform(100.8,48.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4C4C4C").s().p("AAAB9IgChNQgChDAAg9IABguIACgIQABADACARIAAAiIABBbIACBWQgDAegCAIIAAgKg");
	this.shape_176.setTransform(83,48.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#353535").s().p("AgCB9IgChNQgChDAAg9IABguIACgIQADADADAiQADAgABBOQgBBogGASIgCgKg");
	this.shape_177.setTransform(83.2,48.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgIB7IgCg/IgChvQgBg7ACgSQABgMAIgCQAJAGADA3QADA2AAAmQAAAmgDAtQgDAtgHAEIgBAAQgGAAgBgUg");
	this.shape_178.setTransform(83.1,48.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#4C4C4C").s().p("AgGBtIAEhRQACg5AAgyQAAgVgBgMQABgNADgDIACAGQABAKABAhQgBA5gCA/IgEBIIgBAQQgCgEgDgQg");
	this.shape_179.setTransform(111.8,47.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#353535").s().p("AgIAcQAEibAJgBIACAGQABALABAgQgBA5gCA/IgEBIQgBAOgBACQgFgDgDhig");
	this.shape_180.setTransform(111.6,47.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAACHQgIgFgDgoQgDgoABgXQgBg5AFgyQAFgzAJgEQAIADAAAIQADASgCA3QAAA1gDAzIgCA8QgEAXgEAAIgBgBg");
	this.shape_181.setTransform(111.6,47.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#494849").s().p("Ah+AWQgngWgCgGIADgYQAaAWBZAPQBWASCDhCIgBAcQAEACgcAWQgcAYhoAHIgLAAQhaAAgkgUg");
	this.shape_182.setTransform(97,66.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#BFC1C1").s().p("AgmCHQhcgxgphlQgIhZgEgZQCIgsBlAPQBoAOAbAOQgLAjgGBWQgGBVgCBHQgvAQgrAAQg7AAgxgcg");
	this.shape_183.setTransform(97.8,44.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A4A5A5").s().p("Ag8BxQhagXgPgRQADgsAAgpQAAg5gDgwQAqBmBaAvQBZAxBugkIAAARQhqA4hMAAQgXAAgVgFg");
	this.shape_184.setTransform(97.1,54.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AiUDJQgogbABgGIgBgEQAOh/gKhpQgKhrgDgIQAAgFAEgCQCdgxBvAVQBxAUAGAIQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQACADgCACQgLAXgHBsQgGBpgCBmQADAGgdAbQgfAchvAIIgKAAQhnAAgmgZg");
	this.shape_185.setTransform(97.8,49.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5F7A3C").s().p("AhlBDIgGgvIgFgrQAag+AQgKIAAABQAKAbANApIANAtQACADADAAQADABACgBQA1goAUgFQgLAdgjAeQgBABAAAAQAAABgBABQAAAAAAABQAAAAAAABIABAEQADADAEgCQAugXAOABIgCACIgMAfIAAACIABADQACADADAAIAUACIAgADQgPAQg0AJQgKABgLAAQgvAAhPgdg");
	this.shape_186.setTransform(-141.3,72.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#3F6B05").s().p("AhxBMQgDgBgBgEIgMheIABgDQAKgZAPgcQAPgbAOgCQAFgBAGAKQAJAVAKAiIAPAyQAygoAeAAQAGADAAAHQgDAWgWAWQAcgMANAHQADACAAAGIgBAIIgKAWIAiAEIAZACQAEAAABADIABADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAKg4AXQgSAIgaAAQg0AAhZghg");
	this.shape_187.setTransform(-140.8,72.2);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(-173.3,65,1.211,1.211);
	this.instance_2.alpha = 0.48;

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#635A4B").s().p("AgFAzIgjAAIgEgrIgCgmQADgLAYgJQAUgDAZAgQAVAYAAATIgBAIQgNAVgKAAIgcAAg");
	this.shape_188.setTransform(-100.4,-8.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#514636").s().p("AAaBAIgBAAIhHAAQgGgBAAgFIgGhZIAAgDQABgCAJgMQAKgLASgDQAagDAdAkQAfAkgIAbQgUAegLAAIgBAAg");
	this.shape_189.setTransform(-100.4,-8.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F7EEDF").s().p("AhzB2Ij0gCIAAg+IAAhpIAAg+ICrgBIFugDQBTB5BjByIkAABIjbgBg");
	this.shape_190.setTransform(-138.1,-56);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E5DDCC").s().p("A4OhGQF+gCIDgBQENgBEugQQEsgQEggTQFpgZEWgLQEXgMB7AXIACBlIACBkIhLAAQzYgIqIBYQiPASkIAIQkIAIkcABQhjhzhUh5g");
	this.shape_191.setTransform(34.8,-60.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E5DDCC").s().p("A4gClIj7gCIAAg+IAAhoIAAg+IDrgDIIAgDQE4gCF4AAQEOgCErgPQEvgQEfgTQFqgZEWgMQEWgLB7AWIACBlIADBkIhMAAQzYgIqIBZQiMASkCAHQkCAIkYACIjVAAIkUgBg");
	this.shape_192.setTransform(7.9,-60.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#897E6B").s().p("A8oC9IAAkJQABgHAFAAQALgCFQgLQFQgMJRgBQC1AADsgFQDqgEDwgJQDwgJDBgOQFvgcEYgMQEZgMB6AaQAEABABAFIADDrQADAEgOACIhMAAQphgDm/AbQm/Acl/AlQiUAMkOAHQkOAHkgAEQkhADjLABIjZABQgFAAgBgGg");
	this.shape_193.setTransform(7.8,-61);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFAF3").s().p("AomEJIAAm/IAAlkIAAiUIChgCIFdgDIAOAOQDgDuCQFXQCSFVA/GRQoOAUo/AaIAAmrg");
	this.shape_194.setTransform(-117.4,0.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E2DDD5").s().p("A8YE1IAAm+IAAlkIAAiVIDsgCIIAgEQE5gCF4AAQEBAAEegPQEhgPETgRQF9gaEjgKQEkgKB+AbIgCCWIgDFqIgEHJIgEG9Qkzg1lEgNQlEgMk1ATQpWAao3AWQo3AWpxAcIAAmsg");
	this.shape_195.setTransform(9.2,-3.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#323333").s().p("AgcBcICSirIkJAHIAAgMIEngIIicC4g");
	this.shape_196.setTransform(-159,96.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#323333").s().p("ACaBjIBDi7InRAMIAIgJIHhgNIhHDFg");
	this.shape_197.setTransform(-118.3,96.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#323333").s().p("ADvBrIgXjJInYAOIAFgMIHkgOIAYDVg");
	this.shape_198.setTransform(-67,95.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#717272").s().p("AlABjICfi4IHhgNIgCAGInLANIiZCyg");
	this.shape_199.setTransform(-125.8,96.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#4D4F4F").s().p("AiNBcQgGAAAAgGIAAiqIEngIIicC4g");
	this.shape_200.setTransform(-159,96.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#323333").s().p("AHZCMIlLkJQkLAMllANIgOgOQFxgNETgMIFdEXg");
	this.shape_201.setTransform(136.8,92.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#717272").s().p("Ag0CMIkOj+QFvgNEVgMIABABQkMALlbANIEOD+g");
	this.shape_202.setTransform(119.5,92.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#717272").s().p("ACjCXIlbkZQD4gLB5gJIAAALQh5AIjWAKIFOEOQgBACgEAAg");
	this.shape_203.setTransform(172.6,91);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#717272").s().p("AkVBrIBHjHIHkgOIAAABInSANIhHDHg");
	this.shape_204.setTransform(-71.6,95.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#323333").s().p("AFuB/Ij/jvInvARIgEgOIH7gRIEOD9g");
	this.shape_205.setTransform(73.1,93.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#323333").s().p("AGHB2IhFjeIrcAYIgCgPILwgWIBJDrg");
	this.shape_206.setTransform(-1.2,94.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#4D4F4F").s().p("AkhBrIBHjHIHjgOIAZDVg");
	this.shape_207.setTransform(-70.4,95.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#717272").s().p("Ai1B/IhKjsIH7gRIADACInsARIBKDqg");
	this.shape_208.setTransform(59.8,93.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#717272").s().p("AABBrIgXjVIAWAAIAWDVg");
	this.shape_209.setTransform(-40.2,95.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#4D4F4F").s().p("AjiCMIkOj+QFxgNETgMIFdEXg");
	this.shape_210.setTransform(136.8,92.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#4D4F4F").s().p("ACjCXIlbkZQD4gLB5gJIAAEnQgBAGgFAAg");
	this.shape_211.setTransform(172.6,91);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#4D4F4F").s().p("AkhBrIBHjHIHjgOIAZDVg");
	this.shape_212.setTransform(-70.4,95.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#4D4F4F").s().p("Ak6B/IhKjsIH7gRIEOD9g");
	this.shape_213.setTransform(73.1,93.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4D4F4F").s().p("AlABjICfi4IHhgNIhGDFg");
	this.shape_214.setTransform(-125.8,96.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#4D4F4F").s().p("AmEB2IgYjVILwgWIBJDrg");
	this.shape_215.setTransform(-1.2,94.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("A8aCdQgFAAgBgGIAAi2IGigLIMvgXIPLgeQHvgQGIgQQGHgRCngMIAAEzQgBAGgFAAg");
	this.shape_216.setTransform(8.7,90.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#7F7361").s().p("A8ZD2IgFjwIgDh8IFggOILUgeINTgjILlgfIGBgRQAKAAB9AIQB9AJCNAVQCMAWA5AnQgGAegCBbIgBCqIABBYIjiANg");
	this.shape_217.setTransform(9.3,81.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#1A3D7A").s().p("A8UH4IAAnwIAAltIAAiSIEQAAIKgAAINkAAINlAAIKgAAIEQAAIAACSIAAFtIAAHwg");
	this.shape_218.setTransform(8.1,-90.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F4F0EA").s().p("AX9D/IqcgCItigBItjgDIqcgBIkPgBIAAhlIAAj5QJWhOJYgXIS0guQEygPEuAhQEvAiEuA5IgDEaIAAByIkQAAg");
	this.shape_219.setTransform(8.2,80.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.instance_2},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-140.9,367.5,247.2);


// stage content:



(lib.knowCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.toknow();
	this.instance.setTransform(99.5,99);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24,58.1,367.5,247.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;