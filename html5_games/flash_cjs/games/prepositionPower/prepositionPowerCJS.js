(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/effect_glow1.png", id:"effect_glow1"},
		{src:"images/effect_glow2.png", id:"effect_glow2"},
		{src:"images/effect_glow3.png", id:"effect_glow3"},
		{src:"images/effect_glow4.png", id:"effect_glow4"}
	]
};



// symbols:



(lib.effect_glow1 = function() {
	this.initialize(img.effect_glow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,88);


(lib.effect_glow2 = function() {
	this.initialize(img.effect_glow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,127);


(lib.effect_glow3 = function() {
	this.initialize(img.effect_glow3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,105);


(lib.effect_glow4 = function() {
	this.initialize(img.effect_glow4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,90);


(lib.wood_box = function() {
	this.initialize();

	// Text
	this.text = new cjs.Text("Try!", "23px 'Arial'", "#FED37A");
	this.text.lineHeight = 25;
	this.text.setTransform(-19.3,-5.5);

	this.text_1 = new cjs.Text("Try!", "23px 'Arial'", "#9E7010");
	this.text_1.lineHeight = 25;
	this.text_1.setTransform(-17.9,-4.6);

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AA7B29").ss(0.5,1,1).p("AEEhfIAPAiQAHAigoACQgWABgDAGQgCAEAHALQAWAbgLAQQgXAjnlAV");
	this.shape.setTransform(4.5,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AA7B29").ss(0.5,1,1).p("Ak7gNIBtgIQB0gFAmAQQB0AxAigiQAIgGgDgLQgEgNAAgHQAAgWBHgOQBXgRAsAhQASANgFAOQgFAPgfAJQgbAFACARQAAAHAOAWQALAQgIAFQgLAIgzgGQiUgSiKAA");
	this.shape_1.setTransform(-9.1,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AA7B29").ss(0.5,1,1).p("AHdgEQjHguiaAUQhQALg0AiQgWAPgMAEQgTAGgegFQg1gIgnAAQgoABgcgBIjhAF");
	this.shape_2.setTransform(0,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AnbiSIO3AAIAAElIu3AAg");
	this.shape_3.setTransform(0.1,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C650E").s().p("AnbCTIAAklIO3AAIAAElg");
	this.shape_4.setTransform(0.1,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIANgDQALgEAFAE");
	this.shape_5.setTransform(32.7,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgNAKIAIgKQAIgLALAD");
	this.shape_6.setTransform(32.8,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAIIAKgJQAJgKAKAG");
	this.shape_7.setTransform(32.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgHAIAF");
	this.shape_8.setTransform(32.7,-2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIANgDQAMgEAFAE");
	this.shape_9.setTransform(32.6,-5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgNAFIAJgGQAKgGAJAG");
	this.shape_10.setTransform(32.6,-7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAHIAIgIQAJgIAPAF");
	this.shape_11.setTransform(32.8,-10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAHIALgHQAMgIAIAD");
	this.shape_12.setTransform(32.7,-12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgGAIAC");
	this.shape_13.setTransform(32.7,-15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHAKAD");
	this.shape_14.setTransform(32.7,-17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHALAC");
	this.shape_15.setTransform(32.7,-19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAFIAKgFQAKgGALAC");
	this.shape_16.setTransform(32.8,-22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AAPCYQAAANgPAAQgOAAAAgNIAAkvQAAgNAOAAQAPAAAAANg");
	this.shape_17.setTransform(32.7,-8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8C650E").s().p("AgOCYIAAkvQAAgNAOAAQAPAAAAANIAAEvQAAANgPAAQgOAAAAgNg");
	this.shape_18.setTransform(32.7,-8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIAMgDQAMgEAFAE");
	this.shape_19.setTransform(-32.9,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgNAKIAIgKQAIgLALAD");
	this.shape_20.setTransform(-32.7,2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAJIAKgKQAJgKAJAG");
	this.shape_21.setTransform(-32.8,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQALgHAHAF");
	this.shape_22.setTransform(-32.8,-3.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPADIAOgDQAMgEAFAE");
	this.shape_23.setTransform(-33,-6.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAKgGQAKgHAJAG");
	this.shape_24.setTransform(-33,-8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgQAHIAIgHQAJgJAPAF");
	this.shape_25.setTransform(-32.8,-11.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAHIALgHQAMgIAIAD");
	this.shape_26.setTransform(-32.8,-14);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQALgGAHAC");
	this.shape_27.setTransform(-32.8,-16.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHAKAD");
	this.shape_28.setTransform(-32.8,-18.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAGIAKgGQAKgHAKAC");
	this.shape_29.setTransform(-32.9,-21.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAFIAKgFQAKgGAKAC");
	this.shape_30.setTransform(-32.8,-23.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AAPCZQAAAMgPAAQgOAAAAgMIAAkwQAAgNAOAAQAPAAAAANg");
	this.shape_31.setTransform(-32.9,-9.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8C650E").s().p("AgOCZIAAkwQAAgNAOAAQAPAAAAANIAAEwQAAALgPABQgOgBAAgLg");
	this.shape_32.setTransform(-32.9,-9.4);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.7,-26.9,97.5,53.9);


(lib.electrical4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_10 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

	// Glow
	this.instance = new lib.effect_glow4();
	this.instance.setTransform(-60.7,-43.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).wait(1));

	// Wire
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AJgG2QjJAEhkgDQhSgCgbgCQgogCgRgLQgSgLgJgfQgGgUgKhEQgLhQgGgfQgJgygSgYQgog2ibAJQgDgfAZh0QAVhggagrQgthKi7gRQingPhUAhQAsgdADgqQADgtgvgbQAFAWAYAh");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-45.1,123.7,90.2);


(lib.electrical3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_10 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

	// Glow
	this.instance = new lib.effect_glow3();
	this.instance.setTransform(-44.2,-52.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Wire
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmyINQAGmRFRgGQgFhNgmhEQAzgCBNARQB7AaACAAQgbhhhjhmQg1g2iFhoQArAGA9gEQBCgEAjgNQAZgJAmggQAmgfAJgEQALgEAXgUQAXgSAMgEQAWgHAkAOQAkAOAPgEQAWgGAugKQApgNAagg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-53.5,89,107);


(lib.electrical2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_11 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// Glow
	this.instance = new lib.effect_glow2();
	this.instance.setTransform(-43.7,-63.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},3).wait(1));

	// Wire
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGzp1QiBAaiICFQiMCJgQB9QgCAWAcAmQAbAkgFAUQgPA8h7A3QhEAdgfAOQg1AagXAXQg+A8gKAxQgDATgBAlQAAA4gBAYQgEBMghBDQgsBMgZAz");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-64,89,128);


(lib.electrical1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_9 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Glow
	this.instance = new lib.effect_glow1();
	this.instance.setTransform(-58.9,-43.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},2).wait(1));

	// Wire
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApFmyQgVBbA9AyQAwAnBuAVQA/ALCCAPQBsAPAnAaQhHBnggA3Qg6BhABBKQCaAEC3gEQgKASgCAKQB1AICMAuQgnBrgFAyQCTAGArgRQgFAHgBANQgBAPgCAGQAlAGAigE");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-44.6,119.6,89.2);


(lib.windows = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#977753").s().p("AiGCXQgCgZAIgpQAIgpAaguQAbgvA3guQA2guBdgjIgXAWQgWAVghAlQggAkgeAtQggArgUAvQgUAvACAsIg5ALIgCgag");
	this.shape.setTransform(237.7,-132.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#977753").s().p("Ah/DZIAQgFQAPgGAXgTQAWgTAUgmQAUgmAJhAQAIg+AVgyQAVgzAXgiQAXgjARgRIARgSIgGAXIgRA/QgKAogKAyQgLAygJA1QgJA1gTAmQgUAngTAYQgVAYgPALIgPALg");
	this.shape_1.setTransform(259.6,-130.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0C987").ss(1,1,1).p("ABuDeQgbAJgeAMQgdALgcAIQgeAHgSgIQgSgIgPgPQgOgPgVgOQgVgPgjgIQgvgJgbAAQgbABgLAEQgMADABABQgBgBgCgYQgCgYAFgnQAEgoASgvQASguAmgvQAngwBEgoQBDgpBlgZQBngZCSgDIgJHoQAAAAgEAFQgEAFgKAEQgJAEgQgCQgPgCgXgOQgYgOgZABQgaABgcAKg");
	this.shape_2.setTransform(252.5,-130.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#866854").s().p("Ag0EFQgSgIgPgPQgOgPgVgOQgVgPgjgIQgvgJgbAAQgbABgLAEIgLAEIgDgZQgCgYAFgnQAEgoASgvQASguAmgvQAngwBEgoQBDgpBlgZQBngZCSgDIgJHoIgEAFQgEAFgKAEQgJAEgQgCQgPgCgXgOQgYgOgZABQgaABgcAKIg5AVQgdALgcAIQgNADgLAAQgOAAgKgEgAkrC6IAAAAIAAAAgAkrC6IAAAAIAAAAg");
	this.shape_3.setTransform(252.5,-130.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D0A61").s().p("AgiEjIgBpFIBFAAIACJFg");
	this.shape_4.setTransform(-301.3,112.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D0A61").s().p("Ah7EfIgBgdQgBgcACgxQACgvAJg9QAJg7ASg/QAThAAgg+QAgg8AvgzIBRAAIgQAZQgPAXgXApQgXAqgYA4QgYA3gRA+QgSBAgGBFQgGBEANBEg");
	this.shape_5.setTransform(-247.7,112.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D0A61").s().p("AjDEfQgGhaAQhNQAQhMAeg9QAdg/AjgwQAjgxAfggQAegiAVgQIAVgSIgJgJICPAAQhrAuhDA8QhBA6gkBBQgkA+gOA+QgOA9AAAyQAAAxAFAeQAEAdABABg");
	this.shape_6.setTransform(-197.4,112.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5356A1").s().p("AqEBQIAJifIUAAAIAACfg");
	this.shape_7.setTransform(-248.4,149.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A49BC9").s().p("Ar0B5IgShaIRnAAIjyiEIBjgSII1Dwg");
	this.shape_8.setTransform(-235.4,56.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#977753").s().p("AgYDUIAXmsIAaGxg");
	this.shape_9.setTransform(291.1,-130.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#977753").s().p("AABDmQgEgTgIgiQgHghgDgtQgEgtAGg0QAGgygGgtQgHgtgMgjQgMgjgKgUIgKgUIAPAaQAOAZATAqQAUArAMA1QAOA1ABA2QABBKALArQALArALASQALARABAAIg/AGgABHDzIAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(301.4,-131.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5B73B3").ss(1,1,1).p("ApLhVQAAABAKALQALAMAdASQAdASA2AVQA2ATBWAUQBWATB9AOQB8ANCrAEQCrADDhgL");
	this.shape_11.setTransform(247.6,162.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5B73B3").ss(1,1,1).p("AkoRoIAP50QgBgBgCgdQgCgdAEgxQAEgxARg7QAQg8Amg+QAlg9BBg3QBAg3BigoQBjgnCOgP");
	this.shape_12.setTransform(234.9,-58.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F0C987").ss(1,1,1).p("Ahzj+IgKHoQAAABANAGQAOAFAcAHQAcAGAsABQAtACBAgJIAPnVQgBAAgYgJQgYgJglgKQgmgKgngEQgqgEgkAIg");
	this.shape_13.setTransform(299.3,-131.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#866854").s().p("AACEEQgsgBgcgGQgcgHgOgFIgNgHIAKnoQAkgIAqAEQAnAEAmAKQAlAKAYAJIAZAJIgPHVQg2AHgpAAIgOAAg");
	this.shape_14.setTransform(299.3,-131.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5356A1").s().p("AACEgQgJgFgPgLQgQgLgNgTQgOgSgFgcQgFgcAKglQAOgwAZgrQAZgpAZgnQAbgoAUgkQAUgkAEgiQADgjgRgVQgSgWgcgHQgcgHgaAKQgcALgSAeQgQAfgFAdQgFAeACAYQACAYADAOIAEAPIgjAuIgCgTIgBguQAAgdADggQACghAIgdQAIgcAUgVQAUgUAbgKQAbgLAbABQAdAAAbAOQAjASADAnQADAngVAyQgWAygmA0QgXAdgRAmQgOAlgIAnQgHAmADAhQADAgARAUQAOAUAgAAIgaAkIgMgFg");
	this.shape_15.setTransform(264,119.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5356A1").s().p("AEAC8QisgBiLgQQiOgQhsgXQhtgWhKgXQhLgWgmgQIgmgPIAAjdQB6AqCAAcQB/AcB9ARQB9ARBxAIQBzAJBiACQBiACBJgBQBJgBApgCIApgCIgLDSQi6ASiiAAIgZAAg");
	this.shape_16.setTransform(239.4,70.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A49BC9").s().p("AEBBrQhegEhlgHQhjgIhhgJQhjgKhXgKIiagTIhqgNIgngGIgZhtIBHgUQDTA5C6AbQC3AaCYAHQCXAGBsgEQBtgFA6gGIA8gHIgFBKQgWATg2AKQg3AKhPACIg8ABQg1AAg8gCg");
	this.shape_17.setTransform(239.4,59.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5356A1").s().p("ABrFJQgvgLg0gUQgygUgxgXQgjgSgIgfQgIggANgnQAOgmAegkQAeglAogZQAmgbAcgiQAcgiAQgjQAPgkABggQACgggNgXQgLgSgagJQgZgJgfABQgdABgeALQgdAKgVAUQgUATgEAdQgDAkAIAUQAJAUANAJQANAIAKACIALACIgaAyIgQAAQgQAAgTgKQgUgKgOgbQgOgbADg0QAEgrAcgiQAdgiAqgVQApgVArgFQAtgFAkAOQAlAPARAmQAUAvgDAqQgEArgSAkQgTAkgXAdQgYAdgUATQgQARgVATQgTASgTAUQgUAUgNAUQgMAVACATQACAUAWASQAXATAdAOQAfAPAgALQAhAMAbAHIAtAMIASADIAAAuIgKABQgfAAgogKg");
	this.shape_18.setTransform(185.1,107.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2D0A61").s().p("Ag8CDQgLgFgOgKQgOgLgMgQQgLgQgDgXQgBgTAKgcQAJgaAVgcQAVgdAfgWQAfgWAmgIQApgIAyAPIgQAGQgQAFgYALQgYALgaAPQgXAPgUASQgTATgHAVQgJAiAAAgQABAhAEAUIAEAVIgLgFg");
	this.shape_19.setTransform(175.3,86.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2D0A61").s().p("AiIDbQgSgeAIgkQAJgkAcgmQAcglAnglQAogkApghQAqgiARgfQARgeABgaQABgagIgUQgIgTgIgLIgJgLQAxAFANAuQAMAugXBQQgMAogZAdQgYAbgeAXIg3AqQgbATgSAVQgQAVgEAdQgFAcADAaQADAbAEASIAFASQg0gXgSgfg");
	this.shape_20.setTransform(182.6,105.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D0A61").s().p("AAoEFQgPgDgYgIQgWgHgagPQgZgPgTgZQgUgYgHglQgIgkAMgzQAUhJAZgzQAagzAbggQAaggAZgUIAqggQARgNAJACQAKABAEAJQAEAJABAIIAAAJIgUAUQgTATgcAgQgcAhgbAoQgaApgRAqQgRArACAqQAFAyASAbQARAaAUAJQAWAJAQABQAQAAABgBIAAA4IgRgCg");
	this.shape_21.setTransform(192.9,100.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D0A61").s().p("AiHB+IAAgVQABgVAFggQAFggAMgiQAMgkAWghQAXggAkgUQAjgTAagBQAbgBASAKQASAKALAOQALAPAEALIAFALIgQgHQgPgGgYgEQgYgEgaAGQgZAGgUAYQgQAVgKAcQgJAbgFAfQgEAfgBAbIgBAsIABARg");
	this.shape_22.setTransform(258.4,102.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D0A61").s().p("AhKEPQgcgTgJgiQgKgiAFgpQAEgpAPgrQAOgrAVgjQAVglAXgaQAfgnAOgkQAOglABgeQABgegDgSIgEgSQAqASATARQASAQACAOQADAOgEAJQgEAIgBAAIgMAbIggBCQgUAqgZAvQgXAtgbAtQgVAjgDAgQgEAfAIAbQAHAbAMATQAMAUAJAKIAIALIgCABQguAAgagUg");
	this.shape_23.setTransform(263.9,120.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A49EC9").s().p("ABiBmQhXgChWgHQhYgHhQgOQhRgOhAgXQg/gXgnggQgngjgGgvIQvAuIAACRIgkACQgjADg9ADQg9ADhOACIhRABIhWgBg");
	this.shape_24.setTransform(247.2,135.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5356A1").s().p("ACKC7QirgJh4gRQh4gShNgUQhNgVgqgTQgqgTgQgMIgQgNIAPjnQAoAiBCAaQBCAaBUATQBTATBcAMQBcANBaAIQBcAIBSAEQBSAFBAABIBlACIAmAAIAADOQhUAChLAAQiIAAhvgGg");
	this.shape_25.setTransform(246.5,144.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5356A1").s().p("AhuEtQgUh1AGhgQAGhdAUhIQAVhIAYgxQAZgyASgYQAQgZABAAIB4gDQg0AvglA9QglA+gWBDQgZBCgOBBQgOBAgHA1QgHA1gCAfIgCAgg");
	this.shape_26.setTransform(-249.6,110.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5356A1").s().p("Ar4BnIAAiWIFdg2IAoAAIBsgBICdgBIC6ACQBkACBjAEQBlAEBcAGQBcAGBLAKQBLAJAvANIAACWg");
	this.shape_27.setTransform(-234.1,73.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5356A1").s().p("AihEtIgEgdQgEgcgBgwQAAgwAIg9QAJg9AXhAQAYhCAthBQAthABGg3IB1gMIgLAOQgLAMgTASQgTASgZAQQgQAKgaAdQgbAdgcAqQgeApgbAvQgbAtgRAsQgSAtAAAjQAAA6gDAiQgDAjgDAOIgDAPg");
	this.shape_28.setTransform(-201.9,111.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A49BC9").s().p("AqEA2IASigIN+AbIF5BqIlnBQg");
	this.shape_29.setTransform(-248.4,138.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2D0A61").s().p("AiuhtIChAvIC8CGIlaAmg");
	this.shape_30.setTransform(-206.7,57.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#977753").s().p("AAQjtIAGHWIgrAFg");
	this.shape_31.setTransform(-288.4,-126.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#977753").s().p("AhEEIIAKgSQALgUAKgvQAMgvADhRQACg7APg6QAMg6ARgvQASgtAOgcIANgbIgJAWQgKAUgLAmQgLAngHAxQgIAyADA3QAFBMgJA9QgIA9gIAkQgKAkAAAAgAhEEIIAAAAIAAAAIAAAAg");
	this.shape_32.setTransform(-296.5,-128.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#977753").s().p("AA7C4QAEgwgQg0QgQg1gagwQgYgygbgpQgbgogSgYIgUgZQBQApAsA0QAuAzAWA1QAVA0AFAtQAGAtgCAcQgCAbgBABg");
	this.shape_33.setTransform(-241.4,-127.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#977753").s().p("AAZD+QgMgNgQgbQgRgbgQgrQgPgqgGg7QgGg6gIg3IgOhjIgMhGIgFgaIAOAUQAOAUATAmQATAnAQA3QARA4AEBFQAGBHAQAqQAQAqASAWQATAVANAHIAOAGIhBAXIgNgMgABnDzIAAAAg");
	this.shape_34.setTransform(-260.4,-125.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5B73B3").ss(1,1,1).p("ADETfIAp8XQABgBADggQACgfgBg3QgCg1gNhCQgMhCgehFQgehFg2g+Qg2g9hTgvQhUguh6gU");
	this.shape_35.setTransform(-239.2,-46.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#EBC07D").ss(1,1,1).p("ACPnfQgsgCg1gCQgzgCg2AAQg1gBgrACQgtACgbAFQgaAFAAAJIgGNiQABABAfANQAeANA1ARQA2ARBCAMQBBAMBKgCQBJgCBIgXIgSunQAAAAgbgCQgbgBgtgCg");
	this.shape_36.setTransform(-253.2,-36.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CDAA66").s().p("AgXHcQhEgMg0gRQg1gRgfgNIgfgOIAFtiQAAgJAagFQAbgFAsgCQAsgCA1ABIBpACIBiAEIBHADIAcACIAROnQhIAXhKACIgUAAQg+AAg3gKg");
	this.shape_37.setTransform(-253.2,-36.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#EBC07D").ss(1,1,1).p("Ahrm5IACNzIDMgPIAJtdg");
	this.shape_38.setTransform(-294.5,-38.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CDAA66").s().p("Ahrm5IDXAHIgJNdIjMAPg");
	this.shape_39.setTransform(-294.5,-38.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F0C987").ss(1,1,1).p("ABqkUIgHIYQAAABgMAGQgLAGgZAGQgZAGgmAAQgmABg3gLIADoEQAAAAAWgJQAUgJAhgKQAegKAkgEQAlgEAeALg");
	this.shape_40.setTransform(-294.5,-128.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#866854").s().p("AhqETIAEoEIAVgJQAVgJAggKQAfgKAkgEQAlgEAeALIgIIYIgLAHQgLAGgZAGQgZAGglAAIgEAAQgmAAg1gKg");
	this.shape_41.setTransform(-294.5,-128.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F0C987").ss(1,1,1).p("ADEhRQggg2g5guQg5guhWgeQhYgfh+gHIgIIZQAAABADAFQAEAGAIAEQAIAFANgCQAOgCAUgPQAVgOAWABQAWACAXALQAYALAZAOQAZANAaAKQAXAIAQgIQAPgIAOgQQANgQASgQQATgQAegIQApgIAYABQAXABAKAFQAJAEAAABQAAgBADgaQACgagCgsQgDgrgNg1QgOgzggg1g");
	this.shape_42.setTransform(-254.6,-126.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#866854").s().p("AAAEkQgagKgZgNQgZgOgYgLQgXgLgWgCQgWgBgVAOQgUAPgOACQgNACgIgFQgIgEgEgGIgDgGIAIoZQB+AHBYAfQBWAeA5AuQA5AuAgA2QAgA1AOAzQANA1ADArQACAsgCAaIgDAbIgJgFQgKgFgXgBQgYgBgpAIQgeAIgTAQQgSAQgNAQQgOAQgPAIQgIAEgKAAQgLAAgKgEgAD/DYIAAAAIAAAAg");
	this.shape_43.setTransform(-254.6,-126.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#EBC07D").ss(1,1,1).p("AD7gvIgFCbInrgPIgFhmQABgBAegNQAegNAxgRQAxgSA5gPQA4gPA5gFQA5gEAtANQAuAMAYAmg");
	this.shape_44.setTransform(-254.6,-102);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CDAA66").s().p("Aj1BdIgFhmIAfgOQAegNAxgRQAxgSA5gPQA4gPA5gFQA5gEAtANQAuAMAYAmIgFCbg");
	this.shape_45.setTransform(-254.6,-102);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#EBC07D").ss(1,1,1).p("ABkgrIAECLIjPAKIAJi6QABgBARgGQARgGAagGQAagGAaABQAbABAXANQAWAOAJAhg");
	this.shape_46.setTransform(-295.1,-99.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CDAA66").s().p("AhehQIASgHQARgGAagGQAagGAaABQAbABAXANQAWAOAJAhIAECLIjPAKg");
	this.shape_47.setTransform(-295.1,-99.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#EBC07D").ss(1,1,1).p("Ah7osIATRzICmAFIA+gTIgWx+QgBAAgTgDQgTgCghgBQgeAAgoAGQgpAHgqASg");
	this.shape_48.setTransform(-293.7,68);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CDAA66").s().p("AhoJHIgTxzQAqgSApgHQAogGAeAAQAhABATACIAUADIAWR+Ig+ATg");
	this.shape_49.setTransform(-293.7,68);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#776377").s().p("AoGUMMABMgjFIAFgXQAFgXAOglQAPglAcgrQAcgqAugpQAugpBFgeQBEgeBegMQC7gWB4gFQB5gFA6ADQA6ACgBABIgaKBIgEiVIgUgHQgUgGgegGQgdgGghAAQggAAgaAMQgaAMgMAdIgKCBIDxAOIglORQgsgPgogGQgvgHgmgBQgmAAgVABIgYADIhCQXIBIATIDCAAIAfoGIgYJGgAnbTPII1AdIBGwOIgbAIQgbAIgvAMQgvALg6AMQg9ALhDAHQhCAIhEgBQhDgBg+gNgAkXqSIhTABIggABIg0NSQBSAXBUAEQBWADBNgJQBOgJA8gOQA+gOAkgLIAlgLIAYsUQAAgIgfgGQgegFgzgDQgzgDg8gBIh7gBIhxABgADaClIDuATIAhsiIj8AAgAk3uGQgrAMgaAdIAACPII6AAIAJhfIgagKIhGgYQgrgOg2gOQg0gPg5gKQg6gKg1gCIgNAAQguAAgmAKg");
	this.shape_50.setTransform(261.1,-27.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#EBC07D").ss(1,1,1).p("AB6nbQBHAEA/gOIACQPInoAQIgbxzQABAAAgANQAhANA2ASQA3ARBEAPQBBAOBHAEg");
	this.shape_51.setTransform(-254,68.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CDAA66").s().p("AkBo5IAiANQAgAOA2ARQA4ARBDAPQBCAOBGAEQBHAEA/gOIACQPInoAQg");
	this.shape_52.setTransform(-254,68.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#977753").s().p("AhLIdQAIgHANgYQAMgXANgvQAMguAJhPQAIhOAAh2QAAh2gLijQgMilgcjcIARApQAQApAVBKQAXBJAVBlQAWBlAKB2QAKB5gJCHQgJCHgmCNIh1AOIAJgHg");
	this.shape_53.setTransform(235.2,39.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#776377").s().p("AmY3AQAAgBAygBQAygCBoAJQBoAICgAdQBRAQA6AjQA6AjAmAuQAmAtAXAwQAXAwALApQAMApADAZIADAaMgAHAmjIsjAgg");
	this.shape_54.setTransform(-264.7,-14.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#866854").s().p("AilCOIANlKIA1tZIBvg8IASAhQARAfAYA3QAYA3AWBGQAWBGALBNQALBOgJBMQgNBegWBAQgWA/gWAlQgXAlgPAPIgQAQIANACQANADARAKQARAJANAVQANAUAAAiQAAAjgNATQgNATgRAJQgRAIgNACIgNABIAAAAIAAAAIAQAZQARAXAYAxQAYAwAZBIQAZBIATBdQASBeAFByQAEBzgQCGQgRCHgsCaIk3AUg");
	this.shape_55.setTransform(231.3,-12.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D0AA64").s().p("AnqTfIAUveIACglIAFhmIAHiQIAKivIAKi4IAKiwIAJiWQAIhyAOhRQAOhRAPgzQAOgzALgYIAKgXQBygrBjggQBiggBLgVQBNgVAvgKQAvgKAhgBQAigBATADIASADIAcEjICFB+MgAhAiJIg1AGg");
	this.shape_56.setTransform(261.2,-26.3);

	this.addChild(this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-313,-172.3,626.1,344.7);


(lib.yellow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF00").s().p("AnOHPQi/jAgBkPQABkOC/jAQDAjAEOAAQEPAAC/DAQDADAABEOQgBEPjADAQi/DAkPAAQkOAAjAjAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,-65.5,131,131);


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjfDgQhdhdAAiDQAAiCBdheQBdhcCCAAQCDAABdBcQBdBeAACCQAACDhdBdQhdBdiDAAQiCAAhdhdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.8,-31.8,63.6,63.6);


(lib.red_circle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(6.8,1,1).p("AJ1AAQAAEFi4C4Qi4C4kFAAQkEAAi4i4Qi4i4AAkFQAAkEC4i4QC4i4EEAAQEFAAC4C4QC4C4AAEEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.3,-66.3,132.6,132.6);


(lib.red = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AjxDzQhlhlAAiOQAAiNBlhkQBkhlCNAAQCOAABlBlQBkBkAACNQAACOhkBlQhlBkiOAAQiNAAhkhkg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-34.3,68.7,68.7);


(lib.scrollRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().p("Ag3g9IBvA9IhvA9g");
	this.shape.setTransform(0.5,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3g9IBvA9IhvA+g");
	this.shape_1.setTransform(0.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,9.9).s().p("AhBAkQgcgPAAgVQAAgUAcgPQAcgQAlAAQAmAAAcAQQAcAPAAAUQAAAVgcAPQgcAQgmAAQglAAgcgQg");
	this.shape_2.setTransform(-0.6,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AB2AAQAAAwgjAjQgjAjgwAAQgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvg");
	this.shape_3.setTransform(-0.6,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape_4.setTransform(-0.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(2));

	// Layer: button
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.6,0,0,-0.6,0,16.8).s().p("Ah0BvQguguAAhBQAAhAAuguQAuguBCAAQA/AAAsAgQAtAhAOByQAOB0i0ASQhCAAgugug");
	this.shape_5.setTransform(0.2,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#626AAD","rgba(111,118,179,0)"],[0,1],0.2,393.3,-21.1,393.3).s().p("AklDCIAAmDIJLAAIAAGDg");
	this.shape_6.setTransform(-2.4,0,1.112,1.227);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-23.8,65.5,47.8);


(lib.scrollLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer: button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().p("Ag3AAIBvg9IAAB6g");
	this.shape.setTransform(-2,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3AAIBvg9IAAB7g");
	this.shape_1.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,9.9).s().p("AhBAkQgcgPAAgVQAAgUAcgPQAcgQAlAAQAmAAAcAQQAcAPAAAUQAAAVgcAPQgcAQgmAAQglAAgcgQg");
	this.shape_2.setTransform(-0.6,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AB2AAQAAAwgjAjQgjAjgwAAQgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvg");
	this.shape_3.setTransform(-0.6,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape_4.setTransform(-0.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(2));

	// Layer: button
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.5,0,0,-0.5,0,16.6).s().p("AhyBtQgugtAAhAQAAg/AugtQAtguBBAAQA+AAAsAgQAsAgAOBwQAOBziyASQhBAAgtgug");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

	// Layer 7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#626AAD","rgba(111,118,179,0)"],[0,1],-2.4,535.6,20.3,535.6).s().p("AkXEIIAAoPIIvAAIAAIPg");
	this.shape_6.setTransform(9.9,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-28.9,56.1,52.9);


(lib.playagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Play again?", "bold 22px 'Comic Sans MS'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 121;
	this.text.setTransform(60.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApcB8IAAj3IS4AAIAAD3g");
	this.shape.setTransform(60.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,34.7);


(lib.Play_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACsDZIgXgJIgVgLIgDgHIgSgFIgDgIIADgGIAHABIAGAFIAHAFIAAABIAMAEIADgEIADABIgCgDIgHAAIgGgDIgCABIgSgKIgBgIIACgDIAGgCIAJAEIAFAFIAQAEIAHAFIAGADIADAFIAGABIADgDIAHAGIABAEIAGACIAPAEIAGgFIAMAAIAIgDIAFgOIAAgDIABgGIAFgFIACgIIgBgHIADgEIABgPIgEgGIACgNIAFAAIABABIAAgCIgDgBIAAgFIABgGIAFgEIgDgFIADgPIAAgFIgDgDIACgIIAGAAIgCgEIAFgFIgFgBIACgHIAAAAIgEgDIABgCIgBAAIACgJIgBgBIAGgRIgFADIgCADIgDAGIgHACIgIAJIgBAAIgBAEIgLAEIgTAQIgPAHIgOAEIgHgHIACgIIADgCIACgNIgBgGIAEgCIAAgIIAEgGIABAAIgBgDIACgIIgDADIgEACIgHAKIgGAFIgmAeIgOAFIgRACIgKgDIgEgJIgHgJIAEgDIgFgGIAAgLIABgDIgCgFIABgCIgEgDIgBgCIgSAQIgJANIgGAHIAAABIgHAFIgFAHIgJAEIgIAIIgEAEIgBAEIgNABIgEgHIATg4IADgIIACAAIABgIIAKgUIAEgGIAAgBIACgEIANgTIACgDIAagYIAIgBIAJACIAEAMIAAAJIgDALIgKAFIgBAAIgDAFIgIAAIgDgHIABgDIAAgBIgKAJIgBAAIgCAIIgIAGIgCAFIAAAEIgHAHIgCALIgGAKIAAAHIgEAFIgBAFIgGANIAAAAIABgBIBQhWIAHAAIAHAHIAAASIgDAPIAAAKIgCACIAJASIgBAFIAFADIAHABIAYgPIApglIAGgCIABgBIAFgEIALgNIAIAAIAGADIAFAGIgCANIAAAFIgEAHIgCAFIgEAEIABAHIgGAOIgCADIAEgCIAGgEIAFgDIAHgHIAUgNIANgPIADgKIgBgIIABgIIAGgIIAKgKIACgBIAJgLIAGAAIAJAEIAFAJIgDASIgDACIgGAMIgCALIgBABIgCAFIAAAHIgFAMIgFACIACAKIAAAGIgDABIAAALIgFAEIAAAMIgCAAIACACIAAAMIgFANIACAFIgFAGIADAEIgFAZIACAGIgDAKIgCABIgCAFIAFACIgBARIgFADIABAEIgCAIIgCAGIgKAHIgCAHIAAACIgQAKIgMAJIgGAAIgDACIgOAAIgBgBIgKACgAkJBbIgCgSIgBAAIgDgDIABgKIgBgEIACgCIgEgIIAAgCIADgDIgCgBIgCgJIADgCIgCgJIAHgEIgEgEIABgGIgBgEIABgGIgBgBIgFAAIgBABIgEAAIgGgKIAJgJIAMgJIACgEIgFABIgFgGIACgMIAEgCIAFACIAAACIAAgOIACgDIAAgVIACgCIgDAAIgEgNIAFgEIAAgGIgCgDIgHgEIADAHIgEAJIgLAAIgBABIgJADIgTgJIAAgQIAGgIIAFgFIAEgGIAKgHIAVAAIAEACIACgGIAJgFIAIAAIAIAOIAVAFIAbACIAMAEIAMAGIATADIAQAHIATAUIAAAMIgOAIIgKAIIgKAFIgBACIgzAZIgEAAIgJAHIgMAEIgIAFIgLADIgEAEIgGACIgBAHIgCA9IgDADIADAEIgBAIIAGAHIAAALIgHAHgAjqh8IACAAIAAAHIgCACIAAAHIgBANIgCABIgFAyIAAAAIATgGIADgBIAAgBIANgGIAQgFIAWgNIACAAIAEgEIADAAIABgBIAJgFIACgCIgEAAIAAgFIAAgBIgCgBIgCgDIgFgDIgGgBIgMgHIgJAAIgOgDIgBgBIgJAAIgDgGIgJAAIAAgDIgIgCIAAgBIgBgBIgDAAgAiUhYIABAAIgBgBgAhbBBIgEgKIAAgCIAEgHIgCgGIADgGIABAAIAAgFIgBgGIADgLIABgBIAAgBIAEgEIgCgGIgEAAIgBgJIAIAAIABgHIgBgDIAFgNIgEgCIADgPIAHgKIgDgDIAEgLIgBgMIAEgCIgDgCIgCgJIADgHIABgDIACgCIgBgGIABgLIADAAIAEgIIgEgIIAFgFIgEgPIADgEIACAAIAAAAIADgEIgDgFIADgJIAAgIIAEgFIAAgIIAOgKIAGgBIAEACIADAJIgBAKIADACIgDAJIgCALIgGAFIABABIADADIgFAIIgBALIgEAQIgDACIABAFIgCAQIgCAIIgEADIABAGIgDACIADAMIgGAGIABAKIgCASIgGACIAEAFIgEAJIAAAWIgEAEIABAHIgDAJIgDATIAAABIAGgBIAAAAIAJgNIADgHIAOgIIgBAAIADgHIAGgCIADABIgBgDIABgHIAJgHIALAEIgBALIgLAGIgDgBIACAFIgLAGIAAADIgEACIABADIgEAHIgKAKIgKAGIgGAIIgCAAIgIALIgGAAIgBgBIgBAAIgHADg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADMEIIgcgKIgXgPIgEgHIgVgGIgFgLIAEgGIAIABIARALIAAACIANAFIADgGIAFABIgDgCIgIAAIgHgFIgCACIgVgNIgDgJIAEgDIAHgDIAKAEIAFAIIAUADIAIAHIAHADIAEAGIAGABIAFgCIAIAHIACAFIAFACIAKABIAJADIAIgFIANgBIAKgDIAGgRIAAgDIACgIIAFgHIADgKIgCgHIADgFIABgSIgEgHIACgRIAHAAIAAABIAAgCIgDgCIAAgFIACgHIAFgFIgEgGIAEgTIAAgGIgEgEIADgJIAHAAIgCgGIAFgEIgFgDIACgHIgFgFIACgBIgCAAIADgMIgBgBIAGgVIgIAIIgEAHIgIADIgJAKIgCAAIgBAFIgNAFIgMAJIgJAKIgTAJIgRAFIgHgIIACgLIADgBIADgRIgCgIIAFgBIAAgJIAEgIIACAAIgCgFIADgIIgDADIgFACIgJANIg0AqIgRAGIgSADIgMgEIgGgKIgIgMIAFgEIgHgHIAAgNIACgEIgDgHIABgCIgEgDIgBgCIgVASIgLAQIgIAJIAAACIgIAFIgFAJIgMAFIgJAKIgFAEIgCAFIgPABIgFgIIATg7IAEgJIAGgLIABgKIAMgYIAFgGIAAgCIAKgQIAJgLIABgEIARgRIAPgLIAIgCIALACIAGANIAAAMIgEANIgNAHIgBgBIgDAHIgKAAIgDgJIACgEIgBAAIgLALIgBAAIgEAIIgJAIIgDAHIAAAEIgIAIIgDAPIgGALIAAAJIgFAGIgBAHIgGAPIAAABIABgCIBehpIAIAAIAJAJIAAAWIgDASIAAALIgDAEIAKAWIgBAFIAHAFIAIAAIAcgSIAxgtIAIgCIATgXIAJABIAHAEIAIAHIgEAPIAAAHIgEAHIgDAIIgFAEIABAIIgHARIgEAFIAOgIIAGgDIAIgJIAXgQIAPgTIAFgMIgBgKIABgKIAHgKIAMgLIADgCIAKgMIAIAAIAKAEIAFALIgDAVIgDAEIgHAPIgDALIgBACIgDAGIAAAJIgGAOIgFADIACANIAAAHIgEACIAAALIgGAHIAAAOIgDAAIADACIAAAPIgFAQIACAGIgGAGIAEAHIgGAeIABAGIgDANIgCACIgCAFIAGADIgCAVIgGAEIACAEIgCAJIgEAJIgLAIIgDAHIAAAEIgSALIgOAMIgIAAIgDADIgSAAIgBgBIgLABgAk7BwIgCgXIgBAAIgFgEIACgMIgCgFIADgCIgBABIgDgKIAAgEIADgDIgDgBIgCgLIADgCIgBgMIAIgEIgFgFIABgJIgBgDIABgIIgCgBIgFAAIgBACIgFAAIgHgOIALgKIAOgLIACgGIgFACIgGgGIACgPIAFgEIAFADIABADIAAgSIACgEIAAgZIADgDIgFAAIgEgPIAGgFIAAgHIgDgFIgIgDIAEAJIgFAKIgNAAIgBABIgLAEIgWgLIAAgVIAHgJIAGgEIAFgJIALgHIAaAAIADABIAEgHIAKgGIAJAAIAKARIAaAGIAfADIAOAEIAPAIIAXADIASAIIAXAZIgBAPIgQAJIgLAKIgNAHIgBABIg8AgIgEAAIgLAIIgQAEIgJAHIgNADIgEAFIgHACIgFBTIgDAEIAEAFIgCAKIAIAJIAAAMIgJAJgAkTiQIgDAEIgCAYIgCACIgBAeIgFAeIAAABIAXgJIAEAAIAAgBIA8gdIACAAIAFgFIAEAAIABgDIALgEIACgDIABAAIAAgBIgBABIgFAAIAAgGIABgBIgEgCIgBgDIgHgEIgHgCIgNgIIgLAAIgRgDIgBgCIgKAAIgFgIIgKAAIAAgCIgJgCIAAgCIgCgCIgEAAIADADIADABgAhsBPIgEgMIAAgDIAEgHIgDgIIAEgIIABAAIABgFIgDgIIAFgNIACgBIAAgBIADgGIgCgGIgEgBIgBgMIAIAAIACgHIgCgFIAHgPIgFgCIADgSIAJgNIgDgEIAFgNIgCgOIAEgCIgDgDIgCgMIAEgIIAAgEIACgDIgBgFIABgPIAEAAIAFgKIgFgJIAGgGIgFgUIAFgDIABAAIAAABIAEgGIgEgFIADgNIABgJIAGgHIgBgJIAQgMIAHgBIAGABIADAMIgBANIADABIgFAZIgIAGIACACIADADIgGAKIgBANIgGAUIgCACIABAHIgCATIgDAJIgFAEIABAHIgDADIADAPIgGAIIABAKIgDAXIgHADIAFAFIgEAMIgBAOIABAMIgGAFIABAIIgEALIgCAXIgBACIAHgBIAAgBIALgOIAEgKIAQgKIgBAAIAEgIIAGgDIAEABIgBgCIABgJIALgJIANAEIgBAPIgNAHIgEgBIADAFIgOAIIABADIgGADIADAEIgGAJIgNAMIgLAGIgHAKIgCABIgKANIgHAAIgBgCIgJAEgAkTiWg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#98D7FC").ss(1,1,1).p("ACTDwIptAAIAAnfIO1AAIAAHfIi1AAIgYAAIg0AAg");
	this.shape_2.setTransform(-0.5,-6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AEmDvIgYAAIg0AAIhHAAIptAAIAAndIO1AAIAAHdg");
	this.shape_3.setTransform(-0.5,-6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAPIgZgJIgWgLIgDgHIgNgEIBHAAIABAEIAEACIAIABIAJADIAHgFIAMAAIAJgEIAAgBIAYAAIgDAHIAAAEIgRAIIgMAKIgHAAIgDADIgQAAIgBgBIgLACg");
	this.shape_4.setTransform(21.5,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-21.8,62.3,43.7);


(lib.invisibleStop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(208,208,208,0)").s().p("Eg/FAAyIAAhjMB+LAAAIAABjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-403.8,-5,807.7,10.1);


(lib.instructionsbg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A1h4IMArDAAAMAAAAwRMgrDAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A1hYJMAAAgwRMArDAAAMAAAAwRg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-138.8,-155.5,277.7,311.1);


(lib.frog7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAACQAAgCAAgEIgBgDQAJAGgCACQgCADgEACIgGACQAGgCAAgEg");
	this.shape.setTransform(-1,-29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAIQgIgDgFgOIAEAGQAEAEAIAEQAGAFALgDIgHADIgFAAQgFAAgDgCg");
	this.shape_1.setTransform(-2.4,-30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeARQgCgNADgNQADgOAOgGQANgFAeAOIgJgDQgKgCgMACQgKACgJAMQgJALABAdIgDgOg");
	this.shape_2.setTransform(-4.6,-27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDADQgDgBADgFIABADQAAACAHAAIgEABIgBABIgDgBgAgDgDIAAAAIAAAAg");
	this.shape_3.setTransform(2.2,-31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQALQgDgHAKgVIAAAIQABAHAGAFQAEAGAQgCIgJAFQgIAEgGACIgDAAQgGAAgCgHg");
	this.shape_4.setTransform(6.8,-12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXgFQAZgYAYgLQAYgMAKABQAJACAAALQgBAKgDAKIgFALQAEgcgMgDQgMgCgUANQgUANgSARQgVATgOAPIgPAPQATgjAagWg");
	this.shape_5.setTransform(15.5,-19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAGAHQgEgBgDgCQgFgDgCgBQgDgDABgCQABgCAEABQAEABADACQAFADACABQADADgBACQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCAAg");
	this.shape_6.setTransform(13.7,-26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAJQgCgCgCgEQgCgDgBgEQAAgEACgBQADgCACADQACACAEAEQACADAAAEQAAAEgCABIgCABIgEgCg");
	this.shape_7.setTransform(11.7,-25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF02F1").s().p("AhGBxIABgJIABgTQABgLgCgIQgBgIgGAAIgGABQgBABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIACABQAAAKgEAAQgFABgHgJQgFgJACgDQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAAAAAIAIgDIARgHIARgFQAKgBALADIAMAEIBShBQgDgEAAgCQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIACgBIg0heIAfABIA5BhIhxBZQABALgCADIgCACIARADIAEgEIAAAAIgEgFQgBgDADABIAHAEIAFACIgIAQIgcgCIgJAGIAgANIACABIgCgDQgCgEADgDQAFgDAGAFQACAEgCAFIgGAIIgFADIgogTIgMAGIAFALIANgDQAEgGACADQAEACACAEIACAFIgeALg");
	this.shape_8.setTransform(10.8,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAMIA1ggIgEAWIAOATg");
	this.shape_9.setTransform(-31.6,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguAIIAJgVIBKgSIgIAeIASAPIhLASg");
	this.shape_10.setTransform(12.4,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Ai9AqIF7hU");
	this.shape_11.setTransform(-11,22.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag4CGIgLgJIgEgDIgCgEQgBgFABgFIACgUQACgKgHgHQADADgFADQgEADgDAAQgEAAgDgDIgGgGQgDgFAAgGQAAgHAEgEQAFgEAGgCIANgGIAMgEQALgBAMABQAEABAFACIAHABQAIgBAGgGIAIgJIAOgMIAMgJIAMgIIASgSQAAAAgBABQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgEIADgDQAAAAAAAAQABgBAAAAQAAgBgBAAQAAgBAAgBQgCgFgDgFIgGgJIgLgSIgKgTIgJgRQgEgJgGgGIAMAEQAGACAHAAIAGAAQAEgBACgCIACgHQABgFgBgCQADADADAGIAFAKQAMASAKAUQAIASAKARQAEAHACAHQACAHgFAFIgdAVIhOA+IAAAIQAAADAEACIAFAAIACAAIgCgGQAAgEADgBQAFAAAEAEQAFAEAAAFIgEAKQgCAFgFABQgFABgHgBQgHgBgEADIAKAEIAEADQAAAAABAAQABABAAAAQABAAAAAAQAAAAAAAAQABgHAFAAQAFgBAFAEQADAEgEAIIgFAHQgCAEgFABQgDABgCgCIgHgEIgHgDIADADIAAACIgBACQgCADgEACIgJADIgHADIgIADIgBAAQgGAAgFgEgAgqBvQgEACADADIAHAAIAEgBQgBgEAEAAIgHgEIgGAEg");
	this.shape_12.setTransform(10.8,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAFAYQgQgFgRgQQgOgKgIgWQADAIAJAKQALALAVAMQAUALAlAGIgOABQgNAAgTgGg");
	this.shape_13.setTransform(9.1,23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABlCGQgVgEgggNQgggOgcgeQgggegUg0IgIgTQgGgTgOgdQgNgdgRgfIALAPQAMAOAQAZQARAZAQAiQAPAhAbAjQAaAjAiAZQAjAZAkAGIAAABIgWgDg");
	this.shape_14.setTransform(-5,13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_15.setTransform(-1.8,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhDBPIAHgQQAIgQAQgXQAPgXAVgVQAYgYAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAJQABAJAOAIIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_16.setTransform(27,18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAAGIABgNIgBAHIAAAIIAAgCg");
	this.shape_17.setTransform(-12.8,-31.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAgCIAAACIABADQAAgDgBgCg");
	this.shape_18.setTransform(-13.1,-32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAAQAAgDAEgBIgEADQgBABgCAFQABgEACgBg");
	this.shape_19.setTransform(-12.3,-31.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AACAAQgCgDgEgBIAEACQACABADAGIgDgFg");
	this.shape_20.setTransform(-13.6,-29.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAAAQAAgCADAAIgDACQAAAAgCADIACgDg");
	this.shape_21.setTransform(-12.6,-29.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAAQAAgFAEgCIgDADQgBAEgBAIIABgIg");
	this.shape_22.setTransform(-12.7,-27.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAHIgDgKQgCgGgEgDQABAAADAFQAGAFgBAPIAAgGg");
	this.shape_23.setTransform(-13.7,-27.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTAoQgCgGADgCIAEgDQgEgHABgCQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIADAAQgGgIADgEIAEgEQgFgIABgDQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAIADABIAAAAIAAAAQgCgNAEgBQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAQgBgLADgGQABgHAIgDQAFgBABADQABADgBAEIgCAEQAIACgBAGQgBAGgEAFIgEAFQAFACgBADQgBACgCACIgDADQAEABgBACQAAABgDADIgDADQAHgCgBADQAAADgEACIgDAEQAHgCABAEQABADgCADIgCAEQAHADgDAGQgDAFgGAFIgFAFQgQgIgDgFg");
	this.shape_24.setTransform(-12.9,-30.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWApQgCgFADgDIAFgDQgEgHABgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIADAAQgFgGABgEQAAgDADgCIACgCQgFgIABgDQABgDADAAIADABQgDgOAFAAQAEgBABABQgBgMADgGQACgHAJgDQAGgCAAAEQABADgBAEIgBAEQAIACgBAGQgBAGgFAGIgFAFQAGACgBACQgBADgDADIgDACQAFABgBACIgEAEIgCADIgBAAIABAAQAHgBgBACQgBADgDADIgEADIAAAAIAAAAQAIgBABADQABADgCAEIgDAEQAIADgDAGQgEAFgGAFIgGAGQgTgIgDgGg");
	this.shape_25.setTransform(-13,-30.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_26.setTransform(-1.7,13.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_27.setTransform(32.4,20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF02F1").s().p("AAED0QgdgFgdgJQgXgJgSgOQgTgOgQgTQgKgLgJgNIgRgZQgOgPgGgOQgGgOAJgUQADgHAGgIQAFgIAFgFIAAAAQgCgDgGgFIgKgHQgPgPgGgTQgHgcANgaQAJgSAOgPIAMgKIASgPQAJgHAAgDIABgOQABgNAEgRQAEgSAKgNQAJgNASgBQASgBAcAUQgDgDAGgJQAGgIAJgJQAIgIADgBQAMgEAJAGQAKAGAIAJQAIAIAGAMIANAVQAHALALAEIAkAMQAVAGAWAKQAVAJAQANQAQANADARQACAVgIATQgJASgNARIgZAfQgKANgCAOQgBAOAFARQAFAQAIAPQAJAPAKANQAKALAFAPQAGAOgGAPQgGAMgJAHIgUAPQgTAOgYAGQgZAGgYABIgPAAQgWAAgYgDg");
	this.shape_28.setTransform(1.7,-11.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgcD2QgsgHgmgVQglgWgZgnQgMgTgGgWQgHgXAFgWIAIgRQAFgKgCgIQgDgFgGgEQgHgEgEgFQgOgPgDgSQgEgaAMgXQAMgXATgSQATgTATgOIABgPQABgNAEgSQAEgSAKgOQALgOASgBQATgBAeAUQgBgBAEgGIAIgNIAGgHQANgMANABQANABAOALQAMAKAGAOQAHANAIALQAIAMAPAHQAWAJAaAGQAZAHAWALQAXALANAZQAKAVgGAUQgFAVgOARIgVAZQgKANgHAPQgGAPACASQABAMAEALQAFAOAJALIAQAYQAHAMAEAMQADANgCANQgGAVgRAKQgRAKgTAGQgpANgtAEQgRACgRAAQgaAAgbgFg");
	this.shape_29.setTransform(1.6,-12.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAHIAQgZIABgCIgGAKIgKATQgHAJgEADIAKgOg");
	this.shape_30.setTransform(3.4,-31.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAADQACgHgBgHIABAJQAAAHgDAHIABgJg");
	this.shape_31.setTransform(5.9,-36.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBAAQADgDAFABIgEABQgDABgGAEIAFgEg");
	this.shape_32.setTransform(5.6,-33.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAABQABgCgBgFIAAAEQACACgCAHIAAgGg");
	this.shape_33.setTransform(4.5,-33.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAADQACgFgCgHQAAgBABAGQACAEgEAKIABgHg");
	this.shape_34.setTransform(2.4,-30.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHACQAEgCADgEQAGgCAGACIgIAAQgFABgKAJIAEgEg");
	this.shape_35.setTransform(3.2,-30);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAvIgDgIQgCgHABgGQAAgHAIACIAAgEQABgEACgCQADgCAFAFIgBgFQgBgEABgDQABgCAFAFIgBgEQgBgCABgCQABgDAEACIgBgEQAAgDABgDQAAgDADACIAAgHQgBgGADgGQACgFAIACIABgEIAEgGQACgCAEAEQAJANgOARIACABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgGAGIACABQABAAAAAAQAAAAAAAAQABABgBAAQAAABAAABQgBADgJAFQABAAAAAGQAAAFgJADIACABQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBACgGADIABAFQABAEgDADQgCACgGAAIgPgCg");
	this.shape_36.setTransform(4.5,-34.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAwIgDgIQgDgIAAgGQABgHAIACIAAgFQABgEACgCQADgCAGAGIgCgFQgBgFABgCQABgCAFAEIgBgEIAAgFQABgCAFACIgBgEIgBgGQABgDAEACIgBgIQgBgGACgGQACgGAJADIABgEQACgEACgCQADgCADAEQAGAIgBAHQgBAIgHAIIACABQADACAAADQAAADgHAHIADAAQABAAAAAAQAAABABAAQAAABAAAAQAAABgBABQgBADgKAFQABAAABAGQAAAFgKADIADACQAAAAABABQAAAAAAABQABAAAAABQAAAAgBABQgBACgHADIACAFQACAFgFADQgBABgEAAQgHAAgMgDg");
	this.shape_37.setTransform(4.5,-34.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AArC8QgGgCgCgGQgCgHAKgPIABgJQAAgJgEgLQgFgLgNgGQgLgDgUABIgvADQgZACgUgCQgUgBgHgJQgGgIgHgVQgGgVgFgcQgEgaAAgdQAAgeAHgZQAIgZASgPIASgLQARgKAbgNQAbgOAfgJQAbgJAaACQAaACAOATQACAAAFAMQAEAMAAAWQABAWgNAfQgOAfgjAmQgkAlhCAtIANAAIAdgCIAegDQAQgCAIgDQAKgEARABQAQABAUAGQAUAGAQAOQARANAHAWIgBAIQgBAIgEAKQgEAKgHAGQgJAGgNgCIgCgDQgCgDACgIQAAgJAHgQIgDgJQgDgIgIgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgPAGIgHAAQgFgBgEgHQgDgGAEgQIACgHQABgGgFgKQgEgJgQgIIAFALQAEALADAPQADAPgFAMQgEAMgRACIgGgCg");
	this.shape_38.setTransform(33.4,20.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAXAnQgQgfgRgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgEgHQANALgBAJQAAAIgFAEIgGAFQAdAUARAbQAUAYAMAaQAMAZAFARIAFARIgLAQQgHgjgQgfg");
	this.shape_39.setTransform(-20.7,14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgNQgEgMAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAQgEAHQgEAGgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_40.setTransform(-27,15.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgWAHgKQAHgLABAAQARgSAaACQAYACAcAOQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_41.setTransform(-27.8,15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.3,1,1).p("AjuhmIHdDN");
	this.shape_42.setTransform(-25.1,0.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.8,1,1).p("AgUgVQAAABAAAIQAAAJAFAIQAFAJAMAFQAOAEAEgDQADgEgFgIQgEgHgJgH");
	this.shape_43.setTransform(-30.2,9.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF02F1").s().p("AACATQgMgFgFgJQgFgIAAgJIAAgJIAZAPQAJAHAEAHQAFAIgDAEQgCACgEAAQgEAAgIgDg");
	this.shape_44.setTransform(-30.2,9.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.8,1,1).p("AgaAQQAAgBAFgKQAFgHAGgLQAHgLADgDQAGgDACAMQABAKgDAZQAAAFgBAHQAAgBACgHQABgCABgCQACgGACgHQAEgHADgFQAEgEACAFQACAFgBAT");
	this.shape_45.setTransform(-27.3,14.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF02F1").s().p("AAJAWIAEgMQAEgJADgDQAEgFACAFQACAEgBAVgAgaAVIAFgKIALgTQAHgKADgDQAGgEACANQABAKgDAYg");
	this.shape_46.setTransform(-27.3,13.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.8,1,1).p("AgTAFQABgBAGgFQAGgIAGgIQAJgHAGgCQAFgBAAAMQgBAMgLAe");
	this.shape_47.setTransform(-31.1,13.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF02F1").s().p("AgTAFIAHgGIAMgQQAJgHAGgCQAFgBAAAMQgBAMgLAeg");
	this.shape_48.setTransform(-31.1,13.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DB0505").s().p("AAnB5QgegCgQgDIgTgEQg4gRgmgdQgngcgXghQgYgegMgeQgNgdgEgSIgEgTQAiBPAwAtQAwAvA2AWQA2AXAzAFQA0AFArgEQAsgEAZgGIAagHQgcATgjAJQgkAJgkABIgXAAIgrgBgADxBUIgBAAIABAAg");
	this.shape_49.setTransform(-25.1,2.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AA9hpQAAABgEAMQgEAMgHARQgHASgLASQgKASgNAKQgLAMgQABQgBgBgMgGQgMgHgOgBQgOgDgFAIQgFAKANAhQAAABgGAJQgGAJgEAMQgEALAGAHQAFAHAWgEQAAABAFAGQAFAGAIADQAIADAIgKQAAABABAEQACAEADAAQAEAAAHgJQAHgMgBgQQgBgQgEgMQgDgNgBgBQABAAALgHQAMgGASgNQASgMAQgSQAQgTAHgZQAGgZgJgdg");
	this.shape_50.setTransform(-24.2,6.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF02F1").s().p("AgYBxIgBgFQgIAKgIgDQgIgDgFgGIgFgHQgWAEgFgHQgGgHAEgLQAEgMAGgJIAGgKQgNghAFgKQAFgIAOADQAOABAMAHIANAHQAQgBALgMQANgKAKgSQALgSAHgSIALgdIAEgNIAYgLQAJAdgGAZQgHAZgQATQgQASgSAMQgSANgMAGIgMAHIAEAOQAEAMABAQQABAQgHAMQgHAJgEAAQgDAAgCgEg");
	this.shape_51.setTransform(-24.2,6.2);

	this.addChild(this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.1,-39.2,99.3,78.6);


(lib.frog6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAGQgEgCgBgEQgCgBAJgGIgCADQAAADAAACQAAAFAGACIgGgCg");
	this.shape.setTransform(0.4,-28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAKIgHgDQALADAGgFQAIgEAEgEIAEgGQgFAOgIADQgEACgEAAIgFAAg");
	this.shape_1.setTransform(1.7,-29.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATgJQgJgMgKgCQgMgCgKACIgIACQAegNAMAFQAOAGADAOQADANgCANIgDAOQABgdgJgLg");
	this.shape_2.setTransform(4,-25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGASQgHgCgHgEIgJgFQAQACAEgGQAGgFAAgHIABgIQAKAVgDAHQgCAHgHAAIgCAAgAAKgRIAAAAIAAAAg");
	this.shape_3.setTransform(-7.4,-11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA2AlIgjgiQgTgRgTgNQgUgNgMACQgLADADAcIgEgLQgEgKgBgKQAAgLAJgCQAKgBAYAMQAYALAZAYQAbAWASAjIgPgPg");
	this.shape_4.setTransform(-16.2,-18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAGQgBgCADgDQACgBAFgCQADgDAEgBQAEgBABACQABACgDADIgHAEQgDADgEAAIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_5.setTransform(-14.4,-25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAKQgDgBAAgEQABgEACgDQADgEABgCQADgDADACQACABAAAEQAAAEgCADQgEAEgCACIgCACIgCgBg");
	this.shape_6.setTransform(-12.4,-24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF02F1").s().p("AhGBxIABgJIABgTQABgLgCgIQgBgIgGAAIgGABQgBAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIACABQAAAKgEAAQgFABgHgJQgFgJACgDQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAAAAAIAIgDIARgHIARgFQAKgBALADIAMAEIBShBQgDgEAAgCQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIACgBIg0heIAfABIA5BhIhxBZQABALgCADIgCACIARADIAEgEIAAAAIgEgFQgBgDADABIAHAEIAFACIgIAQIgcgCIgJAGIAgANIACABIgCgDQgCgEADgDQAFgDAGAFQACAEgCAFIgGAIIgFADIgogTIgMAGIAFALIANgDQAEgGACADQAEACACAEIACAFIgeALg");
	this.shape_7.setTransform(10.8,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfAMIA1ggIgEAVIAOAUg");
	this.shape_8.setTransform(-31.6,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AguAIIAJgVIBKgSIgIAeIASAPIhLASg");
	this.shape_9.setTransform(12.4,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Ai9ArIF7hU");
	this.shape_10.setTransform(-11,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4CGIgLgJIgEgDIgCgEQgBgFABgFIACgUQACgKgHgHQADADgFADQgEADgDAAQgEAAgDgDIgGgGQgDgFAAgGQAAgHAEgEQAFgEAGgCIANgGIAMgEQALgBAMABQAEABAFACIAHABQAIgBAGgGIAIgJIAOgMIAMgJIAMgIIASgSQAAAAgBABQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgEIADgDQAAAAAAAAQABgBAAAAQAAgBgBAAQAAgBAAgBQgCgFgDgFIgGgJIgLgSIgKgTIgJgRQgEgJgGgGIAMAEQAGACAHAAIAGAAQAEgBACgCIACgHQABgFgBgCQADADADAGIAFAKQAMASAKAUQAIASAKARQAEAHACAHQACAHgFAFIgdAVIhOA+IAAAIQAAADAEACIAFAAIACAAIgCgGQAAgEADgBQAFAAAEAEQAFAEAAAFIgEAKQgCAFgFABQgFABgHgBQgHgBgEADIAKAEIAEADQAAAAABAAQABABAAAAQABAAAAAAQAAAAAAAAQABgHAFAAQAFgBAFAEQADAEgEAIIgFAHQgCAEgFABQgDABgCgCIgHgEIgHgDIADADIAAACIgBACQgCADgEACIgJADIgHADIgIADIgBAAQgGAAgFgEgAgqBvQgEACADADIAHAAIAEgBQgBgEAEAAIgHgEIgGAEg");
	this.shape_11.setTransform(10.8,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAFAYQgQgFgRgQQgOgKgIgWQADAIAJAKQALALAVAMQAUALAlAGIgOABQgNAAgTgGg");
	this.shape_12.setTransform(9.1,21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABlCGQgVgEgggNQgggOgcgeQgggegUg0IgIgTQgGgTgOgdQgNgdgRgfIALAPQAMAOAQAZQARAZAQAiQAPAhAbAjQAaAjAiAZQAjAZAkAGIAAABIgWgDg");
	this.shape_13.setTransform(-5,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_14.setTransform(-1.8,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhDBPIAHgQQAIgQAQgXQAPgXAVgWQAYgXAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAJQABAJAOAIIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_15.setTransform(27,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAARIAAgVIAAgWIAAAOIABAXQAAALgBAFIAAgKg");
	this.shape_16.setTransform(12.4,-26.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAAQABgEAEgCIgDADQgBADgDAHIACgHg");
	this.shape_17.setTransform(12.7,-29.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AACAAQgCgDgDgBIADABQADACABAGIgCgFg");
	this.shape_18.setTransform(11.8,-29);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAGQABgGADgEQABgFAGgBIgFAEQgEAEgCANIAAgFg");
	this.shape_19.setTransform(13,-25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAwQgGgFgDgFQgDgGAHgDIgCgEQgCgDABgDQABgEAHACIgDgEQgDgCgBgDQgBgDAHACIgDgDQgDgDAAgBQgBgCAEgBIgDgDQgCgCgBgCQAAgDAEgCIgEgFQgEgFgBgGQgBgGAIgCIgCgEQgBgEABgDQABgDAFABQAIADABAHQADAGgBALQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAEABgCANIAAAAIAAAAIADgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQABADgFAIIAEAEQADAEgGAIIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAQABACgEAHIAEADQADACgCAGQgDAFgRAIIgEgFg");
	this.shape_20.setTransform(12.2,-29.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAxQgHgFgDgFQgEgGAIgDIgCgEQgCgEABgDQABgDAIABIAAAAIAAAAIgEgDQgDgDgBgDQgBgCAIABIAAAAIAAAAIgEgDIgDgEQgBgCAFgBIgDgCQgDgDgBgDQgBgCAGgCIgFgFQgFgGgBgGQgCgGAJgCIgBgEIgBgHQABgEAGACQAJADABAHQAEAGgCAMQABgBAFABQAEAAgCAOIADgBQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQABADgGAIIADACQACACABADQABAEgFAGIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgFAHIAFADQAEADgDAFQgCAGgUAIIgFgGg");
	this.shape_21.setTransform(12.3,-29.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_22.setTransform(-1.7,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_23.setTransform(32.4,19);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF02F1").s().p("AAmDbQglgJgfgTQgggSgdgYQgXgSgTgVQgGgHgBgIIgEgRQgGgYgOgUIgYggQgNgPgIgSQgJgSADgVQADgRAPgNQAQgNAWgJQAWgKAVgGIAkgMQALgEAHgLQAHgKAFgLQAGgMAIgIQAIgJALgGQAKgGAKAEQAEABAIAIQAIAJAHAIQAGAJgDADQAcgUASABQARABAKANQAKANAEASQAEARABANIAAAOQAqAgAPAbQAQAbgCAVQgBATgKAPQgKAPgKAHIgLAIQAWARANAVQAMAVAGATQAGAUACAMIACANQgBAEgJAGIgUALIgPAHQgWAKgYAFQgTAEgSAAQgaAAgZgHg");
	this.shape_24.setTransform(-1.4,-12.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABIDgQgugJgngSQgogRgagPIgbgPQgLgIgLgLQgKgLgJgLQgJgNgEgPIgKgeQgGgQgKgMIgUgYQgOgRgFgVQgGgUAKgVQAOgZAWgLQAWgLAagHQAZgGAWgJQAPgHAIgMIAPgYQAHgOAMgKQANgLAOgBQAMgBANAMIAGAHIAIANQAEAGgBABQAegUATABQATABAKAOQAKAOAEASQAFASABANIAAAPQAsAiASAcQARAcgBAWQAAATgKAPQgKAPgJAHIgLAIQAOARALAUQAKAUAHASQAHASADAMIAEAMQgbAngqAJQgUAEgVAAQgWAAgYgFg");
	this.shape_25.setTransform(-1.5,-13.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCgGIACAGIADAHQgEgIgBgFg");
	this.shape_26.setTransform(-6,-33.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AACABQgCgCgDgBIADABQABABADADIgCgCg");
	this.shape_27.setTransform(-6.8,-34.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AABgDIgBADQAAABAAADQgCgEADgDg");
	this.shape_28.setTransform(-5.7,-33.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAAQAAgBABgCIgBACQAAABAAAEIAAgEg");
	this.shape_29.setTransform(-4.8,-31.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAAACQgDgEADgFIAAAEQAAADACAIIgCgGg");
	this.shape_30.setTransform(-4,-30.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAJAEQgEgEgFgCQgDgEgHABIADAAQAEgBADAEQAFACAGAGIgCgCg");
	this.shape_31.setTransform(-4.5,-29.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACAvQgEgDACgEIAAgFQgGgDAAgCQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBIACgBQgJgDAAgFIABgGQgJgFgBgDQAAgBgBgBQAAAAAAgBQABAAAAAAQAAAAABAAIACgBQgGgGAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACgBQgPgRAKgNQADgEADACQACACABAEIACAEQAIgCACAFQACAGAAAGIgBAHQADgCABADQABADgBADIgBAEQAFgCABADIAAAEIgBAEQAFgFABACQABADgBAEIgBAFQAFgFACACQADACABAEIAAAEQAIgCAAAHQABAGgCAHIgDAIIgPACQgGAAgCgCg");
	this.shape_32.setTransform(-5.1,-32.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAAyQgEgDACgFIACgFQgIgDAAgCQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIADgCQgKgDAAgFIABgGQgJgFgBgDQgBgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIADAAQgHgHAAgDQAAgDADgCIACgBQgHgIgBgIQgBgHAGgIQADgEADACQACACABAEIACAEQAIgDADAGQACAGgBAGIgBAIQAEgCAAADQABACgBAEIgBAEQAFgCABACIgBAFIgBAEQAGgEABACQABACgCAFIgBAFQAGgGADACQACACABAEIAAAFQAIgCABAHQAAAGgDAIIgDAIQgMADgHAAQgFAAgBgBg");
	this.shape_33.setTransform(-5.2,-32.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AArC8QgGgCgCgGQgCgHAKgPIABgJQAAgJgEgLQgFgLgNgGQgLgDgUABIgvADQgZACgUgCQgUgBgHgJQgGgIgHgVQgGgVgFgcQgEgaAAgdQAAgeAHgZQAIgZASgPIASgLQARgKAbgNQAbgOAfgJQAbgJAaACQAaACAOATQACAAAFAMQAEAMAAAWQABAWgNAfQgOAfgjAmQgkAlhCAtIANAAIAdgCIAegDQAQgCAIgDQAKgEARABQAQABAUAGQAUAGAQAOQARANAHAWIgBAIQgBAIgEAKQgEAKgHAGQgJAGgNgCIgCgDQgCgDACgIQAAgJAHgQIgDgJQgDgIgIgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgPAGIgHAAQgFgBgEgHQgDgGAEgQIACgHQABgGgFgKQgEgJgQgIIAFALQAEALADAPQADAPgFAMQgEAMgRACIgGgCg");
	this.shape_34.setTransform(33.4,18.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAXAnQgQgfgRgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgEgHQANALgBAJQAAAIgFAEIgGAFQAdAUARAbQAUAYAMAaQAMAZAFARIAFARIgLAQQgHgjgQgfg");
	this.shape_35.setTransform(-20.7,13);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgNQgEgMAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAPgEAHQgEAHgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_36.setTransform(-27,13.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgWAHgKQAHgLABAAQARgSAaACQAYACAcAOQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_37.setTransform(-27.8,13.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.3,1,1).p("AjuhmIHdDN");
	this.shape_38.setTransform(-25.1,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.8,1,1).p("AgUgVQAAABAAAIQAAAJAFAIQAFAJAMAFQAOAEAEgDQADgEgFgIQgEgHgJgH");
	this.shape_39.setTransform(-30.2,7.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF02F1").s().p("AACATQgMgFgFgJQgFgIAAgJIAAgJIAZAPQAJAHAEAHQAFAIgDAEQgCACgEAAQgEAAgIgDg");
	this.shape_40.setTransform(-30.2,7.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.8,1,1).p("AgaAQQAAgBAFgKQAFgHAGgLQAHgLADgDQAGgDACAMQABAKgDAZQAAAFgBAHQAAgBACgHQABgCABgCQACgGACgHQAEgHADgFQAEgEACAFQACAFgBAT");
	this.shape_41.setTransform(-27.3,12.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF02F1").s().p("AAJAWIAEgMQAEgJADgDQAEgFACAFQACAEgBAVgAgaAVIAFgKIALgTQAHgKADgDQAGgEACANQABAKgDAYg");
	this.shape_42.setTransform(-27.3,12.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.8,1,1).p("AgTAFQABgBAGgFQAGgIAGgIQAJgHAGgCQAFgBAAAMQgBAMgLAe");
	this.shape_43.setTransform(-31.1,12);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF02F1").s().p("AgTAFIAHgGIAMgQQAJgHAGgCQAFgBAAAMQgBAMgLAeg");
	this.shape_44.setTransform(-31.1,12);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DB0505").s().p("AAnB5QgegCgQgDIgTgEQg4gRgmgdQgngcgXghQgYgegMgeQgNgdgEgSIgEgTQAiBPAwAtQAwAvA2AWQA2AXAzAFQA0AFArgEQAsgEAZgGIAagHQgcATgjAJQgkAJgkABIgXAAIgrgBgADxBUIgBAAIABAAg");
	this.shape_45.setTransform(-25.1,1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AA9hpQAAABgEAMQgEAMgHARQgHASgLASQgKASgNAKQgLAMgQABQgBgBgMgGQgMgHgOgBQgOgDgFAIQgFAKANAhQAAABgGAJQgGAJgEAMQgEALAGAHQAFAHAWgEQAAABAFAGQAFAGAIADQAIADAIgKQAAABABAEQACAEADAAQAEAAAHgJQAHgMgBgQQgBgQgEgMQgDgNgBgBQABAAALgHQAMgGASgNQASgMAQgSQAQgTAHgZQAGgZgJgdg");
	this.shape_46.setTransform(-24.2,4.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF02F1").s().p("AgYBxIgBgFQgIAKgIgDQgIgDgFgGIgFgHQgWAEgFgHQgGgHAEgLQAEgMAGgJIAGgKQgNghAFgKQAFgIAOADQAOABAMAHIANAHQAQgBALgMQANgKAKgSQALgSAHgSIALgdIAEgNIAYgLQAJAdgGAZQgHAZgQATQgQASgSAMQgSANgMAGIgMAHIAEAOQAEAMABAQQABAQgHAMQgHAJgEAAQgDAAgCgEg");
	this.shape_47.setTransform(-24.2,4.8);

	this.addChild(this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.1,-37.9,99.3,75.9);


(lib.frog5copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AATkDIglIH");
	this.shape.setTransform(-1.9,-9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB0505").s().p("Ag9BxIgOheQgFh4BOhaQAXgdAegVIAZgQQifCQAlDHQASBlAxBHQg4gqgahng");
	this.shape_1.setTransform(-7.6,-9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF02F1").s().p("AArA7IgngrQgEgFgHgFQgIgGgJAAQgJgBgGAEQgGAIACAKQABAEADADQAEADAAAFQgBAJgFgBQgFgCgFgGQgFgGgBgFQgBgJAFgJIAJgOQgFgGgGACQgHACgGAEQgGACgEADIgEAFIgDAGQgKAHgEgFQgEgGACgIQABgJAHgFQAGgCAJgCQAKgCAHgEQAGgFgDgKQgFgKgMACIgWADQgLACgCgHQgBgIAIgFQAIgFALgDQAKgCAGABQAKADAGAIQAGAHALACQAKABAJgDQAJgDAGgIQADgIgBgKQAAgKABgKQAAgKAJgGQAHgFADACQADACgBAFQAAAFgBAEIgCAFQgCACAAAEIABAHQACAEgBACQgBAHgDAHQgDAGgBAHIAAARQABAIgBAJIgFAPIBFBQQAEgDACABIADADIAAACIgEhNIAeAAIgJB7Ig7hAg");
	this.shape_2.setTransform(26.4,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABgB9IgHgIIgCgCIgUgYIgUgUQgQgVgSgTQgHgIgGgEQgFgDgKgCQgJgBgEAAQgEABAGAKQAHANgEAJQgDAIgKABQgJABgKgJQgEgEgEgJQgFgJAAgJQAAgGAEgCQgFACgIAFQgKAHgKADQgJADgFgLQgDgKAGgKQAGgLAJgEQAIgDAHAAQAHAAADgEQACgDgDgMQgMgBgKADQgKAEgLgBQgGgSAHgJQAIgKAQgEQAOgDAKAEIAUAJQAJAFANAAQANgCABgMQABgLgCgLQAAgJAGgJQAEgJAJgDQAKgEAJAIQAEAFgBAIIgFAPQgDAJABAGIACAIQABAEAAAFIgDALIgDAKIgDAPIgCATQgBAIACAEQAEAGAIAIIAOANIAJAMIAKAMIAJAKQAEAFAGABQgBAAgBgLIAAgaIAAgaIAAgJQABACAEADQAGAFAGAAQAHABAEgDQAEgEADgDQgBABAAAHIABAMIgCAYIgDAfIABAYQAAALgDAMQgDAHgDAAQgDAAgEgEg");
	this.shape_3.setTransform(26.1,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAgBIgWgOIAWADIAGANIAOgBIADAGIgXAKg");
	this.shape_4.setTransform(20.7,-14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AB2ATQgCAQgHAKQgGAJgGAFQgGAEgBAAQAAgBgIgMQgJgMgRgSQgRgSgZgQQgYgSghgMQghgMgpAAQABgBAVgBQAWgCAggBQAggBAgADQAhADAZAKQAZAJAHATQAHAVgCAQg");
	this.shape_5.setTransform(11.1,-15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABSAyQgJgMgRgSQgRgSgZgQQgYgSghgMQghgMgpAAIAWgCQAWgCAggBQAggBAgADQAhADAZAKQAZAJAHATQAHAVgCAQQgCAQgHAKQgGAJgGAFIgHAEIgIgNg");
	this.shape_6.setTransform(11.1,-15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAFAYQgQgFgRgQQgOgKgIgWQADAIAJAKQAKALAWAMQAUALAlAGIgOABQgNAAgTgGg");
	this.shape_7.setTransform(31.4,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABlCGQgWgEgfgNQgfgOgdgeQgggegUg0IgIgTQgGgTgNgdQgNgdgTgfIANAPQALAOARAZQAQAZAPAiQAQAhAbAjQAaAjAiAZQAjAZAkAGIAAABIgWgDg");
	this.shape_8.setTransform(17.3,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_9.setTransform(20.5,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhDBPIAHgQQAIgPAQgYQAPgXAVgWQAYgXAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAIQABAJAOAJIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_10.setTransform(49.4,16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.8,1,1).p("AAQgZQAAAAgJACQgHADgHAIQgIAIAAANQABAPAFACQAFACAEgHQAGgHAFgL");
	this.shape_11.setTransform(-12,-12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF02F1").s().p("AgJAaQgFgCgBgPQAAgNAIgIQAHgIAHgDIAJgCIgFAcQgGALgFAHQgDAFgEAAIgCAAg");
	this.shape_12.setTransform(-12,-12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.8,1,1).p("AAWgMQgMADghAAQABAAALACQALADALAEQALADABAGQAAAFgHAEQgHADgJABQgIACgIAAQABAAAJAAQAIABAKABQAKABABACQAAAFgJAEQgIAEgMgCQgNgCgFgDQgFgDAKgIQAAAAgEgDQgEgEgCgIQgCgHAGgLQAAgBgBgHQgBgHACgHQACgIAJgBQABAAAKADQAHADALAFQALAFAEAEQADAFgLADg");
	this.shape_13.setTransform(-16.1,-9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF02F1").s().p("AgGAoQgNgCgFgDQgFgDAKgIIgEgDQgEgEgCgIQgCgHAGgLIgBgIQgBgHACgHQACgIAJgBIALADIASAIQALAFAEAEQADAFgLADQgMADghAAIAMACIAWAHQALADABAGQAAAFgHAEQgHADgJABIgQACIAKAAIASACQAKABABACQAAAFgJAEQgGADgIAAIgGgBg");
	this.shape_14.setTransform(-16.1,-9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAARIAAgVIAAgWIAAAOIABAXQAAALgBAFIAAgKg");
	this.shape_15.setTransform(34.7,-26.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAAQABgEAEgCIgDACQgBAEgDAHIACgHg");
	this.shape_16.setTransform(35.1,-29.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AACAAQgCgDgDgBIADABQADACABAGIgCgFg");
	this.shape_17.setTransform(34.1,-28.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAGQABgGADgEQABgFAGgBIgFAEQgEAFgCAMIAAgFg");
	this.shape_18.setTransform(35.3,-24.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAwQgGgFgDgFQgDgGAHgDIgCgEQgCgDABgDQABgEAHACIgDgEQgDgCgBgDQgBgDAHACIgDgDQgDgDAAgBQgBgCAEgBIgDgDQgCgCgBgCQAAgDAEgCIgEgFQgEgFgBgGQgBgGAIgCIgCgEQgBgEABgDQABgDAFABQAIADABAHQADAGgBALQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAEABgCANIAAAAIAAAAIADgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQABADgFAIIAEAEQADAEgGAIIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAQABACgEAHIAEADQADACgCAGQgDAFgRAIIgEgFg");
	this.shape_19.setTransform(34.6,-29);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAxQgHgFgDgFQgEgGAIgDIgCgEQgCgEABgDQABgDAIABIAAAAIAAAAIgEgDQgDgDgBgDQgBgCAIABIAAAAIAAAAIgEgDIgDgEQgBgCAFgBIgDgCQgDgDgBgDQgBgCAGgCIgFgFQgFgGgBgGQgCgGAJgCIgBgEIgBgHQABgEAGACQAJADABAHQAEAGgCAMQABgBAFABQAEAAgCAOIADgBQADAAABADQABADgGAIIADACQACACABADQABAEgFAGIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgFAHIAFADQAEADgDAFQgCAGgUAIIgFgGg");
	this.shape_20.setTransform(34.6,-29.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADgBQADAAABAEQAAAEgEABQgCAAgBgFg");
	this.shape_21.setTransform(25.8,-28.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADgBQADAAABAEQAAAEgEABQgCAAgBgFg");
	this.shape_22.setTransform(18.6,-31.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIATQgGgGgDgGIAKgWIAEgCIAGgDQAEgBAEABQAHADAAAIQABAIgDAEIgFAKQgDAFgFADIgDABQgFAAgDgDg");
	this.shape_23.setTransform(25.9,-27.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAVQgEgCgFgFQgBgBgDgKQgCgIAFgOIACAAQAFgCADABQAFAAAEAEQAGAHgBAJQAAAIgFAHQgEAGgEAAIgBAAg");
	this.shape_24.setTransform(19,-30.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAIQgBgCACgDQACgDAEgCIAHgFQADgBACABQABACgCADQgCACgFADIgGAFIgCABIgDgBg");
	this.shape_25.setTransform(11.5,-24.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAIQgBgBACgEIAHgGIAHgFQAEgBACACQABACgCADQgCACgFAEIgHAFIgDAAIgDgBg");
	this.shape_26.setTransform(14.2,-23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AAWABQgBAPgHAJQgHAKgIgBQgJgBgGgKQgGgKABgNQACgPAHgJQAHgKAHABQAKABAFAKQAGAKgBANg");
	this.shape_27.setTransform(19.7,-30.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgBAiQgJgBgGgKQgGgKABgNQACgPAHgJQAHgKAHABQAKABAFAKQAGAKgBANQgBAPgHAJQgHAJgHAAIgBAAg");
	this.shape_28.setTransform(19.7,-30.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_29.setTransform(20.6,12.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AAXANQgJAQgNAIQgLAHgKgFQgKgFAAgPQgBgPAJgPQAJgQANgIQALgIAKAFQAKAGAAAPQABAPgJAPg");
	this.shape_30.setTransform(27,-27.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAnQgKgFAAgQQgBgOAJgPQAJgQANgJQALgHAKAFQAKAGAAAOQABAQgJAPQgJAQgNAHQgGAFgGAAQgFAAgEgCg");
	this.shape_31.setTransform(27,-27.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_32.setTransform(54.7,19.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF02F1").s().p("AAuDgQglgHgdgSQgfgRgWgUQgWgUgNgOIgMgOQgUgdgSgiQgRgigNgdIgUgzIgHgUQARgPAagSQAagRAbgQIAtgaIATgKQASgcAPgIQAPgJAIAEQALADAHAKQAGAJAEAIIADAJQAcgUASABQARABAKANQAKANAEARQAEASABANIAAANQAqAgAPAbQAQAbgCAVQgBAUgKAOQgKAPgKAIIgKAIQAVARANAVQAMAVAGATQAGATACANIACANQguAjgrAKQgYAGgWAAQgSAAgRgEg");
	this.shape_33.setTransform(21,-12.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ABHDhQgugKgmgRQgpgSgagOIgbgQQgVgPgTgbQgTgbgOggQgPgfgKgbQgLgcgEgSIgGgTQAFgKASgPQARgOAYgPQAZgPAWgMIAngVIAQgJQATgcAPgJQAQgJAKADQAMAEAHAJQAIAJAFAIIADAJQAegUATABQATABAKAOQAKAOAEASQAFARABAOIAAAOQAsAjASAcQARAcAAAVQgBAUgKAPQgKAOgKAIIgKAHQAPARAKAUQAKAUAHASQAIATACALIAEAMQgbAngpAJQgVAFgVAAQgWAAgYgFg");
	this.shape_34.setTransform(20.9,-13.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAAAGIAAgNIAAAHIABAIIgBgCg");
	this.shape_35.setTransform(16.7,-33.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AACABQgCgDgCgCIACABQACACABAHIgBgFg");
	this.shape_36.setTransform(16.2,-34.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCADQABgEAEgDIgDAEQgBAAgBAEIAAgBg");
	this.shape_37.setTransform(17.1,-33.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AACAAQgCgCgFAAIAEAAQADABAEAEIgEgDg");
	this.shape_38.setTransform(16.4,-31.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAABQgBgFACgDIgBADQAAAEAAAIIAAgHg");
	this.shape_39.setTransform(17.6,-29.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AABAAQgBgGgHgBQABgBAGAEQAFADACAJQgBgFgFgDg");
	this.shape_40.setTransform(16.8,-29.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAtQgEgEADgEIADgEQgFgFAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQgIgGACgFQACgFABAAQgHgGAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBQgEgIABgDQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAQgEgLABgHQABgHAHgFQAFgDABADQAAADAAAEIAAAEQAIABAAAGQABAFgDAGIgDAHQAFAAAAADQAAADgCACIgCADQAHAAgDAEIgDAGQAGgCAAACQAAADgCADIgDAEQAHgDACADQABADAAAEIgBAEQAHABgCAGQgBAHgEAGIgFAGQgRgDgEgFg");
	this.shape_41.setTransform(17.1,-32.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNAvQgEgEADgEIAEgEQgGgFAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIACgBQgGgEAAgEQAAgDABgDIACgCQgHgHAAgCQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAIADgBQgEgIABgDQABgDADgBIADAAQgFgKACgIQACgHAIgFQAEgDAAACQACADAAAEIAAAFQAJAAAAAGQAAAGgDAGIgDAHQAFAAAAADQAAADgCADIgCADQAFAAAAADIgDAEIgCADQAHgDAAADQAAADgDAEIgDAEQAIgEABADQACADgBAEIgBAFQAIAAgCAHQgCAGgFAHIgFAHQgTgDgEgFg");
	this.shape_42.setTransform(17,-32.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AArC8QgGgCgCgGQgCgHALgPIAAgJQAAgJgFgLQgDgLgOgGQgLgDgUABIgvADQgZACgUgCQgVgBgHgJQgFgIgHgVQgGgVgEgcQgFgaAAgdQAAgeAHgZQAIgZASgPIASgLQARgKAbgNQAbgOAegJQAcgJAaACQAaACAOATQABAAAGAMQAEAMAAAWQABAWgNAfQgOAfgkAmQgjAlhBAtIAMAAIAcgCIAfgDQAQgCAJgDQAIgEASABQARABATAGQAUAGAQAOQAQANAIAWIgBAIQgBAIgEAKQgDAKgJAGQgHAGgOgCIgCgDQgBgDABgIQAAgJAHgQIgDgJQgDgIgIgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgPAGIgHAAQgFgBgDgHQgEgGAEgQIACgHQABgGgEgKQgFgJgQgIIAFALQAEALADAPQADAPgFAMQgEAMgRACIgGgCg");
	this.shape_43.setTransform(55.7,19);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAnQgRgfgQgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgEgHQAMALAAAJQgBAIgEAEIgGAFQAdAUASAbQATAYAMAaQALAZAGARIAFARIgLAQQgHgjgQgfg");
	this.shape_44.setTransform(1.7,13.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgNQgEgMAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAQgEAHQgEAGgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_45.setTransform(-4.7,13.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgWAHgKQAHgLABAAQARgSAaACQAYACAcAOQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_46.setTransform(-5.5,13.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("ABwAdQgBAAgSAAQgTABgagDQgagDgWgJQgUgJgIgQQAAAAACgKQACgJAAgMQAAgMgEgIQgEgIgLACQgLACgWATQAAAAgLgDQgLgCgMAAQgMAAgFAIQgEAHALATQgBABgEAGQgEAHgBAGQAAAJAMAFQgBAAgDACQgDADABADQABAEALADQANADAPgGQAPgHALgHQAKgHABgBQAAAAALAKQAKAKASANQARAMAXAJQAXAJAZgCQAagBAZgTg");
	this.shape_47.setTransform(-6.1,-8.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF02F1").s().p("AAgA9QgXgJgRgMQgSgNgKgKIgLgKIgLAIQgLAHgPAHQgPAGgNgDQgLgDgBgEQgBgDADgDIAEgCQgMgFAAgJQABgGAEgHIAFgHQgLgTAEgHQAFgIAMAAQAMAAALACIALADQAWgTALgCQALgCAEAIQAEAIAAAMQAAAMgCAJIgCAKQAIAQAUAJQAWAJAaADQAaADATgBIATAAIATATQgZATgaABIgHAAQgWAAgTgHg");
	this.shape_48.setTransform(-6.1,-8.6);

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.4,-38,93.9,76.1);


(lib.frog5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgegEIA8gRIgJAVIAHAWg");
	this.shape.setTransform(-68.3,-22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAVIgKgbIAPgTIBMAFIgQAYIALAWg");
	this.shape_1.setTransform(-23.4,-18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AjBgMIGDAa");
	this.shape_2.setTransform(-47.1,-20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF02F1").s().p("AArA7IgngrQgEgFgHgFQgIgGgJAAQgJgBgGAEQgGAIACAKQABAEADADQAEADAAAFQgBAJgFgBQgFgCgFgGQgFgGgBgFQgBgJAFgJIAJgOQgFgGgGACQgHACgGAEQgGACgEADIgEAFIgDAGQgKAHgEgFQgEgGACgIQABgJAHgFQAGgCAJgCQAKgCAHgEQAGgFgDgKQgFgKgMACIgWADQgLACgCgHQgBgIAIgFQAIgFALgDQAKgCAGABQAKADAGAIQAGAHALACQAKABAJgDQAJgDAGgIQADgIgBgKQAAgKABgKQAAgKAJgGQAHgFADACQADACgBAFQAAAFgBAEIgCAFQgCACAAAEIABAHQACAEgBACQgBAHgDAHQgDAGgBAHIAAARQABAIgBAJIgFAPIBFBQQAEgDACABIADADIAAACIgEhNIAeAAIgJB7Ig7hAg");
	this.shape_3.setTransform(26.4,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABgB9IgHgIIgCgCIgUgYIgUgUQgQgVgSgTQgHgIgGgEQgFgDgKgCQgJgBgEAAQgEABAGAKQAHANgEAJQgDAIgKABQgJABgKgJQgEgEgEgJQgFgJAAgJQAAgGAEgCQgFACgIAFQgKAHgKADQgJADgFgLQgDgKAGgKQAGgLAJgEQAIgDAHAAQAHAAADgEQACgDgDgMQgMgBgKADQgKAEgLgBQgGgSAHgJQAIgKAQgEQAOgDAKAEIAUAJQAJAFANAAQANgCABgMQABgLgCgLQAAgJAGgJQAEgJAJgDQAKgEAJAIQAEAFgBAIIgFAPQgDAJABAGIACAIQABAEAAAFIgDALIgDAKIgDAPIgCATQgBAIACAEQAEAGAIAIIAOANIAJAMIAKAMIAJAKQAEAFAGABQgBAAgBgLIAAgaIAAgaIAAgJQABACAEADQAGAFAGAAQAHABAEgDQAEgEADgDQgBABAAAHIABAMIgCAYIgDAfIABAYQAAALgDAMQgDAHgDAAQgDAAgEgEg");
	this.shape_4.setTransform(26.1,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAgBIgWgOIAWADIAGANIAOgBIADAGIgXAKg");
	this.shape_5.setTransform(20.7,-14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AB2ATQgCAQgHAKQgGAJgGAFQgGAEgBAAQAAgBgIgMQgJgMgRgSQgRgSgZgQQgYgSghgMQghgMgpAAQABgBAVgBQAWgCAggBQAggBAgADQAhADAZAKQAZAJAHATQAHAVgCAQg");
	this.shape_6.setTransform(11.1,-15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABSAyQgJgMgRgSQgRgSgZgQQgYgSghgMQghgMgpAAIAWgCQAWgCAggBQAggBAgADQAhADAZAKQAZAJAHATQAHAVgCAQQgCAQgHAKQgGAJgGAFIgHAEIgIgNg");
	this.shape_7.setTransform(11.1,-15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAFAYQgQgFgRgQQgOgKgIgWQADAIAJAKQAKALAWAMQAUALAlAGIgOABQgNAAgTgGg");
	this.shape_8.setTransform(31.4,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABlCGQgWgEgfgNQgfgOgdgeQgggegUg0IgIgTQgGgTgNgdQgNgdgTgfIANAPQALAOARAZQAQAZAPAiQAQAhAbAjQAaAjAiAZQAjAZAkAGIAAABIgWgDg");
	this.shape_9.setTransform(17.3,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_10.setTransform(20.5,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhDBPIAHgQQAIgPAQgYQAPgXAVgWQAYgXAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAIQABAJAOAJIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_11.setTransform(49.4,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.8,1,1).p("AAQgZQAAAAgJACQgHADgHAIQgIAIAAANQABAPAFACQAFACAEgHQAGgHAFgL");
	this.shape_12.setTransform(-12,-12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF02F1").s().p("AgJAaQgFgCgBgPQAAgNAIgIQAHgIAHgDIAJgCIgFAcQgGALgFAHQgDAFgEAAIgCAAg");
	this.shape_13.setTransform(-12,-12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("AATkDIglIH");
	this.shape_14.setTransform(-1.9,-9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DB0505").s().p("Ag9BxIgOheQgFh4BOhaQAXgdAegVIAZgQQifCQAlDHQASBlAxBHQg4gqgahng");
	this.shape_15.setTransform(-7.6,-9.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.8,1,1).p("AAWgMQgMADghAAQABAAALACQALADALAEQALADABAGQAAAFgHAEQgHADgJABQgIACgIAAQABAAAJAAQAIABAKABQAKABABACQAAAFgJAEQgIAEgMgCQgNgCgFgDQgFgDAKgIQAAAAgEgDQgEgEgCgIQgCgHAGgLQAAgBgBgHQgBgHACgHQACgIAJgBQABAAAKADQAHADALAFQALAFAEAEQADAFgLADg");
	this.shape_16.setTransform(-16.1,-9.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF02F1").s().p("AgGAoQgNgCgFgDQgFgDAKgIIgEgDQgEgEgCgIQgCgHAGgLIgBgIQgBgHACgHQACgIAJgBIALADIASAIQALAFAEAEQADAFgLADQgMADghAAIAMACIAWAHQALADABAGQAAAFgHAEQgHADgJABIgQACIAKAAIASACQAKABABACQAAAFgJAEQgGADgIAAIgGgBg");
	this.shape_17.setTransform(-16.1,-9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAARIAAgVIAAgWIAAAOIABAXQAAALgBAFIAAgKg");
	this.shape_18.setTransform(34.7,-26.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAAQABgEAEgCIgDACQgBAEgDAHIACgHg");
	this.shape_19.setTransform(35.1,-29.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AACAAQgCgDgDgBIADABQADACABAGIgCgFg");
	this.shape_20.setTransform(34.1,-28.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAGQABgGADgEQABgFAGgBIgFAEQgEAFgCAMIAAgFg");
	this.shape_21.setTransform(35.3,-24.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAwQgGgFgDgFQgDgGAHgDIgCgEQgCgDABgDQABgEAHACIgDgEQgDgCgBgDQgBgDAHACIgDgDQgDgDAAgBQgBgCAEgBIgDgDQgCgCgBgCQAAgDAEgCIgEgFQgEgFgBgGQgBgGAIgCIgCgEQgBgEABgDQABgDAFABQAIADABAHQADAGgBALQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAEABgCANIAAAAIAAAAIADgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQABADgFAIIAEAEQADAEgGAIIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAQABACgEAHIAEADQADACgCAGQgDAFgRAIIgEgFg");
	this.shape_22.setTransform(34.6,-29);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAxQgHgFgDgFQgEgGAIgDIgCgEQgCgEABgDQABgDAIABIAAAAIAAAAIgEgDQgDgDgBgDQgBgCAIABIAAAAIAAAAIgEgDIgDgEQgBgCAFgBIgDgCQgDgDgBgDQgBgCAGgCIgFgFQgFgGgBgGQgCgGAJgCIgBgEIgBgHQABgEAGACQAJADABAHQAEAGgCAMQABgBAFABQAEAAgCAOIADgBQADAAABADQABADgGAIIADACQACACABADQABAEgFAGIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgFAHIAFADQAEADgDAFQgCAGgUAIIgFgGg");
	this.shape_23.setTransform(34.6,-29.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADgBQADAAABAEQAAAEgEABQgCAAgBgFg");
	this.shape_24.setTransform(25.8,-28.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADgBQADAAABAEQAAAEgEABQgCAAgBgFg");
	this.shape_25.setTransform(18.6,-31.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIATQgGgGgDgGIAKgWIAEgCIAGgDQAEgBAEABQAHADAAAIQABAIgDAEIgFAKQgDAFgFADIgDABQgFAAgDgDg");
	this.shape_26.setTransform(25.9,-27.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAAAVQgEgCgFgFQgBgBgDgKQgCgIAFgOIACAAQAFgCADABQAFAAAEAEQAGAHgBAJQAAAIgFAHQgEAGgEAAIgBAAg");
	this.shape_27.setTransform(19,-30.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJAIQgBgCACgDQACgDAEgCIAHgFQADgBACABQABACgCADQgCACgFADIgGAFIgCABIgDgBg");
	this.shape_28.setTransform(11.5,-24.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgKAIQgBgBACgEIAHgGIAHgFQAEgBACACQABACgCADQgCACgFAEIgHAFIgDAAIgDgBg");
	this.shape_29.setTransform(14.2,-23.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AAWABQgBAPgHAJQgHAKgIgBQgJgBgGgKQgGgKABgNQACgPAHgJQAHgKAHABQAKABAFAKQAGAKgBANg");
	this.shape_30.setTransform(19.7,-30.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBAiQgJgBgGgKQgGgKABgNQACgPAHgJQAHgKAHABQAKABAFAKQAGAKgBANQgBAPgHAJQgHAJgHAAIgBAAg");
	this.shape_31.setTransform(19.7,-30.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_32.setTransform(20.6,12.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AAXANQgJAQgNAIQgLAHgKgFQgKgFAAgPQgBgPAJgPQAJgQANgIQALgIAKAFQAKAGAAAPQABAPgJAPg");
	this.shape_33.setTransform(27,-27.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUAnQgKgFAAgQQgBgOAJgPQAJgQANgJQALgHAKAFQAKAGAAAOQABAQgJAPQgJAQgNAHQgGAFgGAAQgFAAgEgCg");
	this.shape_34.setTransform(27,-27.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_35.setTransform(54.7,19.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF02F1").s().p("AAuDgQglgHgdgSQgfgRgWgUQgWgUgNgOIgMgOQgUgdgSgiQgRgigNgdIgUgzIgHgUQARgPAagSQAagRAbgQIAtgaIATgKQASgcAPgIQAPgJAIAEQALADAHAKQAGAJAEAIIADAJQAcgUASABQARABAKANQAKANAEARQAEASABANIAAANQAqAgAPAbQAQAbgCAVQgBAUgKAOQgKAPgKAIIgKAIQAVARANAVQAMAVAGATQAGATACANIACANQguAjgrAKQgYAGgWAAQgSAAgRgEg");
	this.shape_36.setTransform(21,-12.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("ABHDhQgugKgmgRQgpgSgagOIgbgQQgVgPgTgbQgTgbgOggQgPgfgKgbQgLgcgEgSIgGgTQAFgKASgPQARgOAYgPQAZgPAWgMIAngVIAQgJQATgcAPgJQAQgJAKADQAMAEAHAJQAIAJAFAIIADAJQAegUATABQATABAKAOQAKAOAEASQAFARABAOIAAAOQAsAjASAcQARAcAAAVQgBAUgKAPQgKAOgKAIIgKAHQAPARAKAUQAKAUAHASQAIATACALIAEAMQgbAngpAJQgVAFgVAAQgWAAgYgFg");
	this.shape_37.setTransform(20.9,-13.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAAGIAAgNIAAAHIABAIIgBgCg");
	this.shape_38.setTransform(16.7,-33.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AACABQgCgDgCgCIACABQACACABAHIgBgFg");
	this.shape_39.setTransform(16.2,-34.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCADQABgEAEgDIgDAEQgBAAgBAEIAAgBg");
	this.shape_40.setTransform(17.1,-33.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AACAAQgCgCgFAAIAEAAQADABAEAEIgEgDg");
	this.shape_41.setTransform(16.4,-31.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAAABQgBgFACgDIgBADQAAAEAAAIIAAgHg");
	this.shape_42.setTransform(17.6,-29.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AABAAQgBgGgHgBQABgBAGAEQAFADACAJQgBgFgFgDg");
	this.shape_43.setTransform(16.8,-29.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgLAtQgEgEADgEIADgEQgFgFAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQgIgGACgFQACgFABAAQgHgGAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBQgEgIABgDQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAQgEgLABgHQABgHAHgFQAFgDABADQAAADAAAEIAAAEQAIABAAAGQABAFgDAGIgDAHQAFAAAAADQAAADgCACIgCADQAHAAgDAEIgDAGQAGgCAAACQAAADgCADIgDAEQAHgDACADQABADAAAEIgBAEQAHABgCAGQgBAHgEAGIgFAGQgRgDgEgFg");
	this.shape_44.setTransform(17.1,-32.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAvQgEgEADgEIAEgEQgGgFAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIACgBQgGgEAAgEQAAgDABgDIACgCQgHgHAAgCQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAIADgBQgEgIABgDQABgDADgBIADAAQgFgKACgIQACgHAIgFQAEgDAAACQACADAAAEIAAAFQAJAAAAAGQAAAGgDAGIgDAHQAFAAAAADQAAADgCADIgCADQAFAAAAADIgDAEIgCADQAHgDAAADQAAADgDAEIgDAEQAIgEABADQACADgBAEIgBAFQAIAAgCAHQgCAGgFAHIgFAHQgTgDgEgFg");
	this.shape_45.setTransform(17,-32.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AArC8QgGgCgCgGQgCgHALgPIAAgJQAAgJgFgLQgDgLgOgGQgLgDgUABIgvADQgZACgUgCQgVgBgHgJQgFgIgHgVQgGgVgEgcQgFgaAAgdQAAgeAHgZQAIgZASgPIASgLQARgKAbgNQAbgOAegJQAcgJAaACQAaACAOATQABAAAGAMQAEAMAAAWQABAWgNAfQgOAfgkAmQgjAlhBAtIAMAAIAcgCIAfgDQAQgCAJgDQAIgEASABQARABATAGQAUAGAQAOQAQANAIAWIgBAIQgBAIgEAKQgDAKgJAGQgHAGgOgCIgCgDQgBgDABgIQAAgJAHgQIgDgJQgDgIgIgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgPAGIgHAAQgFgBgDgHQgEgGAEgQIACgHQABgGgEgKQgFgJgQgIIAFALQAEALADAPQADAPgFAMQgEAMgRACIgGgCg");
	this.shape_46.setTransform(55.7,19);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAXAnQgRgfgQgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgEgHQAMALAAAJQgBAIgEAEIgGAFQAdAUASAbQATAYAMAaQALAZAGARIAFARIgLAQQgHgjgQgfg");
	this.shape_47.setTransform(1.7,13.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgNQgEgMAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAQgEAHQgEAGgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_48.setTransform(-4.7,13.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgWAHgKQAHgLABAAQARgSAaACQAYACAcAOQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_49.setTransform(-5.5,13.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("ABwAdQgBAAgSAAQgTABgagDQgagDgWgJQgUgJgIgQQAAAAACgKQACgJAAgMQAAgMgEgIQgEgIgLACQgLACgWATQAAAAgLgDQgLgCgMAAQgMAAgFAIQgEAHALATQgBABgEAGQgEAHgBAGQAAAJAMAFQgBAAgDACQgDADABADQABAEALADQANADAPgGQAPgHALgHQAKgHABgBQAAAAALAKQAKAKASANQARAMAXAJQAXAJAZgCQAagBAZgTg");
	this.shape_50.setTransform(-6.1,-8.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF02F1").s().p("AAgA9QgXgJgRgMQgSgNgKgKIgLgKIgLAIQgLAHgPAHQgPAGgNgDQgLgDgBgEQgBgDADgDIAEgCQgMgFAAgJQABgGAEgHIAFgHQgLgTAEgHQAFgIAMAAQAMAAALACIALADQAWgTALgCQALgCAEAIQAEAIAAAMQAAAMgCAJIgCAKQAIAQAUAJQAWAJAaADQAaADATgBIATAAIATATQgZATgaABIgHAAQgWAAgTgHg");
	this.shape_51.setTransform(-6.1,-8.6);

	this.addChild(this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.4,-38,142.9,76.1);


(lib.frog4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgYALIAxgW");
	this.shape.setTransform(4.5,-28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF02F1").s().p("AgRgCQAEgKAGgFIAGgEQAIgBAGAFQAGAGACAFIADAGIgvAWQAAgRAGgHg");
	this.shape_1.setTransform(4.5,-30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAIQgBgFAAgEQABgGACgDIAAACIgCAIQgBAFABAGIAAgDg");
	this.shape_2.setTransform(-3.5,-31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGgEQgJgDgKAEIgJADQAPgMAHAAQAJAAAGAHQAEAFACAFIACAIQgHgQgKgBg");
	this.shape_3.setTransform(-5.8,-31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAgBIgWgOIAWADIAGANIAOgBIADAGIgXAKg");
	this.shape_4.setTransform(-2.5,-14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.3,1,1).p("AhRh4ICjDw");
	this.shape_5.setTransform(-11.7,-19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AhkBXIDJit");
	this.shape_6.setTransform(-13.1,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF02F1").s().p("AgWgRQgLACgCgCIgCgCIgDATIADABIABAAIAFgBQABgBAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIgEAHIgCAEIgRgIIACgbIgGgJIgNAhIgBABIADgBQAEgCADACQADAFgFAFQgDADgFgCIgIgHIgEgEIAUgpIgIgLIgKAGIADAMQAFADgBADQgCAEgFACIgFACIgLgfIARgWIAWACIAGAAIALgBQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBQgDgDgGABIgKAAQgGgBgFgDQgFgEgCgFQgCgDABgFQAAgEAFgBQAFAAACAEQACADADACIAEAAIAFAAIALAAQAGAAAFAEIAKAHIAJAIQAFAFACAFQACAMgCANQgBAIgEAHIBEBRQAEgEACABQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAIABACIgFhLIAegCIgIB7g");
	this.shape_7.setTransform(4.5,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AB2ATQgCAQgHAKQgGAJgGAFQgGAEgBAAQAAgBgIgMQgJgMgRgSQgRgSgZgQQgYgSghgMQghgMgpAAQABgBAVgBQAWgCAggBQAggBAgADQAhADAZAKQAZAJAHATQAHAVgCAQg");
	this.shape_8.setTransform(-12.1,-15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABSAyQgJgMgRgSQgRgSgZgQQgYgSghgMQghgMgpAAIAWgCQAWgCAggBQAggBAgADQAhADAZAKQAZAJAHATQAHAVgCAQQgCAQgHAKQgGAJgGAFIgHAEIgIgNg");
	this.shape_9.setTransform(-12.1,-15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABQBoIgHgJIgCgBQgJgNgLgLIgUgUQgQgVgQgTIgNgMIgFgHQgDgEgDAAIgIABQgDAAgCAEIAAAFQAAABAAABQAAAAAAABQAAAAAAAAQABAAAAAAIAGgCQADgBABADQABAEgEAFQgFAFgFgBIgJgDQgFgDgCgEQgBgDABgIQACgIgEgDIgEAJIgDAEQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAHABABADQABAGgFADQgEAEgIgEIgHgEQgDgDgCgEQAAgCACgEIAEgHIADgHIgEADIgCABIgCgCQgDgCgCgEIgDgIIgDgIIgDgIQgBgGAFgGIAJgLIADgDIADgDQAEgCAEABIAHABQgGgDgEgGQgCgDgBgFQgBgEABgEQADgGAFAAQAGgBAEAEIACADIADADQADACAFgBIAIAAQAHAAAGADIANAJIAHAGIAGAIQADAEABAGQABAKgCAJIgCAIQgBAFAAAEQABAHAGAGIAKALIAMALIAJAMIAKALIAJAKQAEAGAGABQgBgBgBgLIAAgZIAAgZIAAgKQABAEAEADQAGAEAGABQAHABAEgEQAEgDADgGQgBAEAAAHIABALIgCAXIgDAfIABAXQAAAMgDALQgDAIgDAAQgDAAgEgEgAhHghIACgGIgDgGQgDgDgCADQgBABABAFIABAEIABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAg");
	this.shape_10.setTransform(4.5,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkgJIBJgMIgNAVIAJAWg");
	this.shape_11.setTransform(-44.4,-11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAMIgHgSIANgNIBAAIIgOAPIAJAQg");
	this.shape_12.setTransform(-5.9,-6.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AiigTIFFAn");
	this.shape_13.setTransform(-26,-9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAFAYQgQgFgRgQQgOgKgIgWQADAIAJAKQALALAVAMQAUALAlAGIgOABQgNAAgTgGg");
	this.shape_14.setTransform(8.2,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABlCGQgVgEgggNQgggOgcgeQgggegUg0IgIgTQgGgTgOgdQgNgdgRgfIALAPQAMAOAQAZQARAZAQAiQAPAhAbAjQAaAjAiAZQAjAZAkAGIAAABIgWgDg");
	this.shape_15.setTransform(-5.9,12.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_16.setTransform(-2.7,12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBPIAHgQQAIgPAQgYQAPgXAVgWQAYgXAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAIQABAJAOAJIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_17.setTransform(26.1,16.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.8,1,1).p("AAQgZQAAAAgJACQgHADgHAIQgIAIAAANQABAPAEACQAFACAFgHQAGgHAFgL");
	this.shape_18.setTransform(-35.2,-12.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF02F1").s().p("AgKAaQgEgCgBgPQAAgNAIgIQAHgIAHgDIAJgCIgFAcQgFALgGAHQgDAFgEAAIgDAAg");
	this.shape_19.setTransform(-35.2,-12.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.8,1,1).p("AAWgMQgMADghAAQABAAALACQALADALAEQALADABAGQAAAFgHAEQgHADgJABQgIACgIAAQABAAAJAAQAIABAKABQAKABABACQAAAFgJAEQgIAEgMgCQgNgCgFgDQgFgDAKgIQAAAAgEgDQgEgEgCgIQgCgHAGgLQAAgBgBgHQgBgHACgHQACgIAJgBQABAAAKADQAHADALAFQALAFAEAEQADAFgLADg");
	this.shape_20.setTransform(-39.3,-9.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF02F1").s().p("AgGAoQgNgCgFgDQgFgDAKgIIgEgDQgEgEgCgIQgCgHAGgLIgBgIQgBgHACgHQACgIAJgBIALADIASAIQALAFAEAEQADAFgLADQgMADghAAIAMACIAWAHQALADABAGQAAAFgHAEQgHADgJABIgQACIAKAAIASACQAKABABACQAAAFgJAEQgGADgIAAIgGgBg");
	this.shape_21.setTransform(-39.3,-9.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAARIAAgVIAAgWIAAAOIABAXQAAALgBAFIAAgKg");
	this.shape_22.setTransform(11.5,-26.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBAAQABgEAEgCIgDACQgBAEgDAHIACgHg");
	this.shape_23.setTransform(11.8,-29.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AACAAQgCgDgDgBIADABQADACABAGIgCgFg");
	this.shape_24.setTransform(10.9,-28.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAGQABgGADgEQABgFAGgBIgFAEQgEAFgCAMIAAgFg");
	this.shape_25.setTransform(12.1,-24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAwQgGgFgDgFQgDgGAHgDIgCgEQgCgDABgDQABgEAHACIgDgEQgDgCgBgDQgBgDAHACIgDgDQgDgDAAgBQgBgCAEgBIgDgDQgCgCgBgCQAAgDAEgCIgEgFQgEgFgBgGQgBgGAIgCIgCgEQgBgEABgDQABgDAFABQAIADABAHQADAGgBALQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAEABgCANIAAAAIAAAAIADgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQABADgFAIIAEAEQADAEgGAIIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAQABACgEAHIAEADQADACgCAGQgDAFgRAIIgEgFg");
	this.shape_26.setTransform(11.3,-29);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAxQgHgFgDgFQgEgGAIgDIgCgEQgCgEABgDQABgDAIABIAAAAIAAAAIgEgDQgDgDgBgDQgBgCAIABIAAAAIAAAAIgEgDIgDgEQgBgCAFgBIgDgCQgDgDgBgDQgBgCAGgCIgFgFQgFgGgBgGQgCgGAJgCIgBgEIgBgHQABgEAGACQAJADABAHQAEAGgCAMQABgBAFABQAEAAgCAOIADgBQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQABADgGAIIADACQACACABADQABAEgFAGIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgFAHIAFADQAEADgDAFQgCAGgUAIIgFgGg");
	this.shape_27.setTransform(11.4,-29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCACQgDgDAEgCQABgCADAEQACACgDADIgCABQAAAAAAgBQAAAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_28.setTransform(3.1,-27.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAWQgHgCgGgFIgBgYIACgDIAGgGQADgDADgBQAHAAAEAHQAEAHAAAGIAAAJQgBAGgCAFQgEAFgFAAIgDgBg");
	this.shape_29.setTransform(3.8,-27.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DB0505").s().p("AAwDXQgRgIgZgRQgXgRgZgaQgZgagRgjQgRgjAAgtIAAgVQACgVAIggQAJghAVghQAWghAngZQAmgYBAgGQgOACgUAJQgUALgVAPQgVAPgOAQQgRAPgIANQgWAigIArQgIAqAGAmQAHAnAUAjQAVAiAZAeQAcAdAeAZIgSgIg");
	this.shape_30.setTransform(-29.9,-10.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAIQgBgCACgDQACgDAEgCIAHgFQAEgBABABQABACgCADQgCACgEADIgHAFIgCABIgDgBg");
	this.shape_31.setTransform(-11.7,-24.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKAIQgBgBACgEIAHgGIAHgFQAEgBACACQABACgCADQgCACgFAEIgHAFIgDAAIgDgBg");
	this.shape_32.setTransform(-9,-23.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_33.setTransform(-2.6,12.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AAaAAQgBATgIANQgIAMgJAAQgLAAgHgNQgIgNABgSQABgSAHgNQAIgMAKAAQALAAAHANQAHANAAARg");
	this.shape_34.setTransform(4.6,-27.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSAfQgIgNABgSQABgSAHgNQAIgMAKAAQALAAAHANQAHANAAARQgBATgIANQgIAMgJAAQgLAAgHgNg");
	this.shape_35.setTransform(4.6,-27.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_36.setTransform(31.5,19.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF02F1").s().p("AAuDgQglgHgdgSQgfgRgWgUQgWgUgNgOIgMgOQgUgdgSgiQgRgigNgdIgUgzIgHgUQARgPAagSQAagRAbgQIAtgaIATgKQASgcAPgIQAPgJAIAEQALADAHAKQAGAJAEAIIADAJQAcgUASABQARABAKANQAKANAEARQAEASABANIAAANQAqAgAPAbQAQAbgCAVQgBAUgKAOQgKAPgKAIIgKAIQAVARANAVQAMAVAGATQAGATACANIACANQguAjgrAKQgYAGgWAAQgSAAgRgEg");
	this.shape_37.setTransform(-2.2,-12.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ABHDhQgugKgmgRQgpgSgagOIgbgQQgVgPgTgbQgTgbgPggQgOgfgKgbQgLgcgEgSIgGgTQAFgKASgPQASgOAXgPQAYgPAYgMIAmgVIAQgJQATgcAPgJQAQgJAKADQALAEAJAJQAHAJAEAIIAEAJQAegUATABQATABAKAOQAKAOAFASQAEARAAAOIABAOQAsAjASAcQARAcgBAVQAAAUgKAPQgKAOgJAIIgLAHQAOARALAUQALAUAGASQAIATACALIAEAMQgbAngqAJQgUAFgVAAQgWAAgYgFg");
	this.shape_38.setTransform(-2.3,-13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAGIAAgNIAAAHIABAIIgBgCg");
	this.shape_39.setTransform(-6.6,-33.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AACABQgCgDgCgCIACABQACACABAHIgBgFg");
	this.shape_40.setTransform(-7,-34.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgCADQABgEAEgDIgDAEQgBAAgBAEIAAgBg");
	this.shape_41.setTransform(-6.1,-33.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AABAAQgBgCgFAAIAFAAQACABAEAEIgFgDg");
	this.shape_42.setTransform(-6.8,-31.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAAABQgBgFACgDIgBADQAAAEAAAIIAAgHg");
	this.shape_43.setTransform(-5.7,-29.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AACAAQgCgGgHgBQABgBAGAEQAEADADAJIgFgIg");
	this.shape_44.setTransform(-6.4,-29.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAtQgEgEADgEIADgEQgFgFAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQgIgGACgFQACgFABAAQgHgGAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBQgEgIABgDQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAQgEgLABgHQABgHAHgFQAFgDABADQAAADAAAEIAAAEQAIABAAAGQABAFgDAGIgDAHQAFAAAAADQAAADgCACIgCADQAHAAgDAEIgDAGQAGgCAAACQAAADgCADIgDAEQAHgDACADQABADAAAEIgBAEQAHABgCAGQgBAHgEAGIgFAGQgRgDgEgFg");
	this.shape_45.setTransform(-6.1,-32.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgNAvQgEgEADgEIAEgEQgGgFAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIACgBQgGgEAAgEQAAgDABgDIACgCQgHgHAAgCQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAIADgBQgEgIABgDQABgDADgBIADAAQgFgKACgIQACgHAIgFQAEgDAAACQACADAAAEIAAAFQAJAAAAAGQAAAGgDAGIgDAHQAFAAAAADQAAADgCADIgCADQAFAAAAADIgDAEIgCADQAHgDAAADQAAADgDAEIgDAEQAIgEABADQACADgBAEIgBAFQAIAAgCAHQgCAGgFAHIgFAHQgTgDgEgFg");
	this.shape_46.setTransform(-6.2,-32.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AArC8QgGgCgCgGQgCgHAKgPIABgJQAAgJgEgLQgFgLgNgGQgLgDgUABIgvADQgZACgUgCQgUgBgHgJQgGgIgHgVQgGgVgFgcQgEgaAAgdQAAgeAHgZQAIgZASgPIASgLQARgKAbgNQAbgOAfgJQAbgJAaACQAaACAOATQACAAAFAMQAEAMAAAWQABAWgNAfQgOAfgjAmQgkAlhCAtIANAAIAdgCIAegDQAQgCAJgDQAJgEARABQAQABAUAGQAUAGAQAOQARANAHAWIgBAIQgBAIgEAKQgEAKgHAGQgJAGgNgCIgCgDQgCgDABgIQABgJAHgQIgDgJQgDgIgIgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgPAGIgHAAQgFgBgEgHQgDgGAEgQIACgHQABgGgFgKQgEgJgQgIIAFALQAEALADAPQADAPgFAMQgEAMgRACIgGgCg");
	this.shape_47.setTransform(32.5,19);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAXAnQgQgfgRgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgEgHQANALgBAJQAAAIgFAEIgGAFQAdAUARAbQAUAYAMAaQAMAZAFARIAFARIgLAQQgHgjgQgfg");
	this.shape_48.setTransform(-21.6,13.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgNQgEgMAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAQgEAHQgEAGgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_49.setTransform(-27.9,13.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgWAHgKQAHgLABAAQARgSAaACQAYACAcAOQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_50.setTransform(-28.7,13.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("ABwAdQgBAAgSAAQgTABgagDQgagDgWgJQgUgJgIgQQAAAAACgKQACgJAAgMQAAgMgEgIQgEgIgLACQgLACgWATQAAAAgLgDQgLgCgMAAQgMAAgFAIQgEAHALATQgBABgEAGQgEAHgBAGQAAAJAMAFQgBAAgDACQgDADABADQABAEALADQANADAPgGQAPgHALgHQAKgHABgBQAAAAALAKQAKAKASANQARAMAXAJQAXAJAZgCQAagBAZgTg");
	this.shape_51.setTransform(-29.3,-8.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF02F1").s().p("AAgA9QgXgJgRgMQgSgNgKgKIgLgKIgLAIQgLAHgPAHQgPAGgNgDQgLgDgBgEQgBgDADgDIAEgCQgMgFAAgJQABgGAEgHIAFgHQgLgTAEgHQAFgIAMAAQAMAAALACIALADQAWgTALgCQALgCAEAIQAEAIAAAMQAAAMgCAJIgCAKQAIAQAUAJQAWAJAaADQAaADATgBIATAAIATATQgZATgaABIgHAAQgWAAgTgHg");
	this.shape_52.setTransform(-29.3,-8.6);

	this.addChild(this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.2,-38,96.5,76.1);


(lib.frog3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF02F1").s().p("Ag4gMQgLABgDgCIgCgCIgCARIADADIAAAAIAGgDQAAgBABAAQAAAAAAABQABAAAAAAQAAABgBABIgDAHIgDAEIgQgHIACgcIgGgJIgNAhIgBABIADgCQAEgCADAEQADAEgFAFQgEADgEgCQgFgDgDgEIgEgEIATgoIgHgMIgKAGIADAMQAFADgCAEQgCADgEACIgFACIgLgeIARgXIAJABIATABQALAAAIgBQAIgCAAgFQgBgHgBAAIgBABIAAACQgKABAAgFQgBgEAJgHQAIgGADACIAEADIADAIIAHARQAEAJABAHQACALgEAKIgEAMIBDBRQAGgFACADIACAFIBdg1IAAAfIhgA6g");
	this.shape.setTransform(7,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgegEIA8gRIgKAVIAIAWg");
	this.shape_1.setTransform(-51.6,-12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAVIgKgbIAPgTIBMAFIgQAYIALAWg");
	this.shape_2.setTransform(-6.7,-8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AjBgNIGDAb");
	this.shape_3.setTransform(-30.4,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAYQgRgFgRgQQgNgKgIgWQADAIAJAKQAKALAXAMQATALAlAGIgOABQgNAAgTgGg");
	this.shape_4.setTransform(14.7,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.3,1,1).p("ABBCDIiBkF");
	this.shape_5.setTransform(-10.8,-22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AhdBzIC6jl");
	this.shape_6.setTransform(-12.8,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DB0505").s().p("Ag9BxIgOheQgFh4BOhaQAmgtAogVQifCQAlDHQASBlAxBHQg4gqgahng");
	this.shape_7.setTransform(-24.3,-10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABlCGQgVgEgggNQgggOgdgeQgfgegUg0IgHgTQgIgTgNgdQgNgdgRgfIALAPQAMAOAQAZQARAZAQAiQAPAhAcAjQAZAjAjAZQAiAZAkAGIAAABIgWgDg");
	this.shape_8.setTransform(0.6,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_9.setTransform(3.8,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhDBPIAHgQQAIgPAQgYQAPgXAVgWQAYgXAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAIQABAJAOAJIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_10.setTransform(32.7,16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAJQAOgCACgFQABgCgEgEIgDgEQAMAIABACQABAEgHACQgGABgEAAIgHAAg");
	this.shape_11.setTransform(3,-15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.8,1,1).p("AAPgZQAAAAgIACQgHADgHAIQgIAIAAANQABAPAFACQAEACAFgHQAFgHAFgL");
	this.shape_12.setTransform(-28.6,-12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF02F1").s().p("AgJAaQgEgCgBgPQgBgNAJgIQAGgIAHgDIAIgCIgEAcQgGALgFAHQgDAFgEAAIgCAAg");
	this.shape_13.setTransform(-28.6,-12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.8,1,1).p("AgYgZQABAAALACQALABAKADQAMACAFAEQAEAFgLAFQgJADgXAGQgGABgHACQABAAAIgBQACAAACAAQAGAAAHABQAIAAAGACQAGABgFAEQgEADgSAH");
	this.shape_14.setTransform(-32,-7.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF02F1").s().p("AgOAIIANABQAIAAAGACQAGABgFAEQgEADgSAHgAgZgZIAMACQALABAKADQAMACAFAEQAEAFgLAFQgJADgXAGg");
	this.shape_15.setTransform(-31.9,-7.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.8,1,1).p("AgOgQQAAAAAJAEQAIADAKAGQAKADADAFQADAFgMADQgLAEggAA");
	this.shape_16.setTransform(-32.2,-12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF02F1").s().p("AgOgQIAJAEQAIADAKAGQAKADADAFQADAFgMADQgLAEggAAg");
	this.shape_17.setTransform(-32.2,-12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAARIAAgVIAAgWIAAAOIABAXQAAALgBAFIAAgKg");
	this.shape_18.setTransform(18,-26.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAAQABgEAEgCIgDACQgBAEgDAHIACgHg");
	this.shape_19.setTransform(18.4,-29.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AACAAQgCgDgDgBIADABQADACABAGIgCgFg");
	this.shape_20.setTransform(17.4,-28.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAGQABgGADgEQABgFAGgBIgFAEQgEAFgCAMIAAgFg");
	this.shape_21.setTransform(18.6,-24.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAwQgGgFgDgFQgDgGAHgDIgCgEQgCgDABgDQABgEAHACIgDgEQgDgCgBgDQgBgDAHACIgDgDQgDgDAAgBQgBgCAEgBIgDgDQgCgCgBgCQAAgDAEgCIgEgFQgEgFgBgGQgBgGAIgCIgCgEQgBgEABgDQABgDAFABQAIADABAHQADAGgBALQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAEABgCANIAAAAIAAAAIADgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQABADgFAIIAEAEQADAEgGAIIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAQABACgEAHIAEADQADACgCAGQgDAFgRAIIgEgFg");
	this.shape_22.setTransform(17.9,-29);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAxQgHgFgDgFQgEgGAIgDIgCgEQgCgEABgDQABgDAIABIAAAAIAAAAIgEgDQgDgDgBgDQgBgCAIABIAAAAIAAAAIgEgDIgDgEQgBgCAFgBIgDgCQgDgDgBgDQgBgCAGgCIgFgFQgFgGgBgGQgCgGAJgCIgBgEIgBgHQABgEAGACQAJADABAHQAEAGgCAMQABgBAFABQAEAAgCAOIADgBQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQABADgGAIIADACQACACABADQABAEgFAGIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgFAHIAFADQAEADgDAFQgCAGgUAIIgFgGg");
	this.shape_23.setTransform(17.9,-29.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWBhIgWgdIg/hNIgIABQgDAAgCAEIAAAEQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAIAGgDQADAAABAEQABAFgEAEQgFAFgFgBIgJgDQgFgDgCgEQgBgFABgGQACgIgEgDIgEAJIgDAEQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQAHABABAFQABAGgFAEQgEADgIgEIgHgEQgDgDgCgEQAAgEACgBIAEgIIADgHIgEADIgCABIgCgBQgDgDgCgEIgDgIIgDgIIgDgHQgBgGAFgHIAJgLIADgDIADgDQAFgBAFABIAUACQALACAHgHQgEADgDgFQgDgEAAgDQABgEACgDIAGgGQAFgDAGAAQAHgBAEAFQAEAFACAGIAGAMQADAGABAHQACALgCALIgCAJQgBAEAAAEQABAHAGAGIAKAJIAMANIAHAMIAKALIASASQgBAAAAAAQAAAAABgBQAAAAAAAAQABAAAAgBIAEAAIADACQAAABAAAAQAAAAABAAQAAAAABAAQABAAABgBQAFgBAFgEIAJgHIASgKIATgLIAQgJQAJgEAHgGIgEAMQgCAGgBAHIABAGQABAEACACIAHACQAFABACgCQgDAEgGADIgKAFQgSAMgUAKIgiATQgIAFgHACIgDAAQgEAAgEgEgAhtgcIACgHIgDgGQgDgDgCADQgBACABAEIABAEIABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAABABg");
	this.shape_24.setTransform(7.4,-3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADgBQADAAABAEQAAAEgEABQgCAAgBgFg");
	this.shape_25.setTransform(9.2,-28.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADgBQADAAABAEQAAAEgEABQgCAAgBgFg");
	this.shape_26.setTransform(2,-31.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIATQgGgGgDgGIAKgWIAEgCIAGgDQAEgBAEABQAHADAAAIQABAIgDAEIgFAKQgDAFgFADIgDABQgFAAgDgDg");
	this.shape_27.setTransform(9.2,-27.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAVQgEgCgFgFQgBgBgDgKQgCgIAFgOIACAAQAFgCADABQAFAAAEAEQAGAHgBAJQAAAIgFAHQgEAGgEAAIgBAAg");
	this.shape_28.setTransform(2.3,-30.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJAIQgBgCACgDQACgDAFgCIAGgFQADgBACABQABACgCADQgCACgFADIgGAFIgCABIgDgBg");
	this.shape_29.setTransform(-8.2,-23.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKAIQgBgBACgEIAHgGIAHgFQAEgBACACQABACgCADQgCACgFAEIgHAFIgDAAIgDgBg");
	this.shape_30.setTransform(-6,-22.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AAWABQgBAPgHAJQgHAKgIgBQgJgBgGgKQgGgKABgNQACgPAHgJQAHgKAHABQAKABAFAKQAGAKgBANg");
	this.shape_31.setTransform(3,-30.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAiQgJgBgGgKQgGgKABgNQACgPAHgJQAHgKAHABQAKABAFAKQAGAKgBANQgBAPgHAJQgHAJgHAAIgBAAg");
	this.shape_32.setTransform(3,-30.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_33.setTransform(3.9,12.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AAXANQgJAQgNAIQgLAHgKgFQgKgFAAgPQgBgPAJgPQAJgQANgIQALgIAKAFQAKAGAAAPQABAPgJAPg");
	this.shape_34.setTransform(10.3,-27.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAnQgKgFAAgQQgBgOAJgPQAJgQANgJQALgHAKAFQAKAGAAAOQABAQgJAPQgJAQgNAHQgGAFgGAAQgFAAgEgCg");
	this.shape_35.setTransform(10.3,-27.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_36.setTransform(38,19.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF02F1").s().p("AAuDgQglgHgdgSQgfgRgWgUQgWgUgNgOIgMgOQgUgdgSgiQgRgigNgdIgUgzIgHgUQARgPAagSQAagRAbgQIAtgaIATgKQASgcAPgIQAPgJAIAEQALADAHAKQAGAJAEAIIADAJQAcgUASABQARABAKANQAKANAEARQAEASABANIAAANQAqAgAPAbQAQAbgCAVQgBAUgKAOQgKAPgKAIIgKAIQAVARANAVQAMAVAGATQAGATACANIACANQguAjgrAKQgYAGgWAAQgSAAgRgEg");
	this.shape_37.setTransform(4.3,-12.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ABHDhQgugKgmgRQgpgSgagOIgbgQQgVgPgTgbQgTgbgPggQgOgfgKgbQgLgcgEgSIgGgTQAFgKASgPQARgOAYgPQAZgPAWgMIAngVIAQgJQATgcAPgJQAQgJAKADQAMAEAHAJQAIAJAFAIIADAJQAegUATABQATABAKAOQAKAOAEASQAFARAAAOIABAOQAsAjASAcQARAcAAAVQgBAUgKAPQgKAOgKAIIgKAHQAPARAKAUQAKAUAHASQAIATACALIAEAMQgbAngpAJQgVAFgVAAQgWAAgYgFg");
	this.shape_38.setTransform(4.3,-13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAGIAAgNIAAAHIABAIIgBgCg");
	this.shape_39.setTransform(0,-33.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AABABQgBgDgCgCIACABQACACABAHIgCgFg");
	this.shape_40.setTransform(-0.5,-34.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgCADQABgEAEgDIgDAEQgBAAgBAEIAAgBg");
	this.shape_41.setTransform(0.4,-33.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AABAAQgCgCgEAAIAFAAQABABAFAEIgFgDg");
	this.shape_42.setTransform(-0.3,-31.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAAABQgBgFACgDIgBADQAAAEAAAIIAAgHg");
	this.shape_43.setTransform(0.9,-29.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AACAAQgCgGgGgBQAAgBAGAEQAEADADAJIgFgIg");
	this.shape_44.setTransform(0.1,-29.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAtQgEgEADgEIADgEQgFgFAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQgIgGACgFQACgFABAAQgHgGAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBQgEgIABgDQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAQgEgLABgHQABgHAHgFQAFgDABADQAAADAAAEIAAAEQAIABAAAGQABAFgDAGIgDAHQAFAAAAADQAAADgCACIgCADQAHAAgDAEIgDAGQAGgCAAACQAAADgCADIgDAEQAHgDACADQABADAAAEIgBAEQAHABgCAGQgBAHgEAGIgFAGQgRgDgEgFg");
	this.shape_45.setTransform(0.4,-32.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgNAvQgEgEADgEIAEgEQgGgFAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIACgBQgGgEAAgEQAAgDABgDIACgCQgHgHAAgCQAAgEADAAIADgBQgEgIABgDQABgDADgBIADAAQgFgKACgIQACgHAIgFQAEgDAAACQACADAAAEIAAAFQAJAAAAAGQAAAGgDAGIgDAHQAFAAAAADQAAADgCADIgCADQAFAAAAADIgDAEIgCADQAHgDAAADQAAADgDAEIgDAEQAIgEABADQACADgBAEIgBAFQAIAAgCAHQgCAGgFAHIgFAHQgTgDgEgFg");
	this.shape_46.setTransform(0.3,-32.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAqC8QgFgCgCgGQgCgHAKgPIABgJQAAgJgEgLQgFgLgNgGQgLgDgUABIgvADQgZACgUgCQgVgBgGgJQgGgIgGgVQgHgVgFgcQgEgaAAgdQAAgeAIgZQAHgZASgPIASgLQARgKAbgNQAcgOAegJQAbgJAaACQAaACAOATQACAAAEAMQAFAMABAWQAAAWgNAfQgOAfgjAmQgkAlhCAtIANAAIAdgCIAegDQAQgCAIgDQAKgEAQABQARABAUAGQATAGARAOQARANAHAWIgBAIQgBAIgEAKQgEAKgHAGQgJAGgNgCIgCgDQgBgDAAgIQABgJAGgQIgCgJQgDgIgIgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgQAGIgGAAQgFgBgEgHQgEgGAGgQIABgHQABgGgFgKQgEgJgQgIIAFALQAEALADAPQACAPgEAMQgEAMgRACIgHgCg");
	this.shape_47.setTransform(39,19);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAXAnQgRgfgQgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgDgHQAMALgBAJQgBAIgEAEIgFAFQAcAUARAbQAUAYAMAaQAMAZAFARIAFARIgLAQQgHgjgQgfg");
	this.shape_48.setTransform(-15,13.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgNQgEgMAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAQgEAHQgEAGgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_49.setTransform(-21.4,13.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgWAHgKQAHgLABAAQARgSAaACQAYACAcAOQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_50.setTransform(-22.1,13.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("ABwAdQgBAAgSAAQgTABgagDQgagDgWgJQgUgJgIgQQAAAAACgKQACgJAAgMQAAgMgEgIQgEgIgLACQgLACgWATQAAAAgLgDQgLgCgMAAQgMAAgFAIQgEAHALATQgBABgEAGQgEAHgBAGQAAAJAMAFQgBAAgDACQgDADABADQABAEALADQANADAPgGQAPgHALgHQAKgHABgBQAAAAALAKQAKAKASANQARAMAXAJQAXAJAZgCQAagBAZgTg");
	this.shape_51.setTransform(-22.8,-8.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF02F1").s().p("AAgA9QgXgJgRgMQgSgNgKgKIgLgKIgLAIQgLAHgPAHQgPAGgNgDQgLgDgBgEQgBgDADgDIAEgCQgMgFAAgJQABgGAEgHIAFgHQgLgTAEgHQAFgIAMAAQAMAAALACIALADQAWgTALgCQALgCAEAIQAEAIAAAMQAAAMgCAJIgCAKQAIAQAUAJQAWAJAaADQAaADATgBIATAAIATATQgZATgaABIgHAAQgWAAgTgHg");
	this.shape_52.setTransform(-22.8,-8.6);

	this.addChild(this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.7,-38,109.5,76.1);


(lib.frog2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF02F1").s().p("AhVgMQgQABgEgCIgDgCIgDAPIAFABIABAAIAIgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAgBAAIgFAGIgDADIgZgHIACgWIgKgHIgRAbIgBAAIAEAAQAGgCAEACQAFADgHAEQgFACgHgCIgNgGIgFgBIAaghIgLgJIgPADIAFALQAJACgEADQgDACgGABIgHACIgSgZIAZgRIANACIAcABQAQABAMgBQALgBAAgEQgCgHgBABIgBADQgPAAgBgDQgBgEANgFQAMgEAFABIAFADIAFAGIALAOIAJANQADAGgCAGIgFAKIgDAEIBpBDQAJgDACADIADADICIglIABAZIiLApg");
	this.shape.setTransform(5,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgegEIA8gRIgKAVIAIAWg");
	this.shape_1.setTransform(-56.8,-10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAVIgKgbIAPgTIBMAFIgRAYIAMAWg");
	this.shape_2.setTransform(-11.9,-6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AjBgNIGDAa");
	this.shape_3.setTransform(-35.6,-8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.8,1,1).p("AAQgZQgBAAgIACQgHADgHAIQgIAIAAANQABAPAFACQAEACAFgHQAFgHAGgL");
	this.shape_4.setTransform(-23.5,-12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF02F1").s().p("AgJAaQgEgCgCgPQAAgNAIgIQAHgIAHgDIAJgCIgGAcQgFALgFAHQgDAFgEAAIgCAAg");
	this.shape_5.setTransform(-23.5,-12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AAJCJIgRkR");
	this.shape_6.setTransform(-10.8,-21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("AgjBsIBIjX");
	this.shape_7.setTransform(-13.6,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB0505").s().p("Ag9ByIgOhfQgFh4BOhbQAmgsAogWQifCRAlDHQASBlAxBIQg4grgahmg");
	this.shape_8.setTransform(-19.4,-9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.8,1,1).p("AgYgZQABAAALACQALABAKADQAMACAFAEQAEAFgLAFQgJADgXAGQgGABgHACQABAAAIgBQACAAACAAQAGAAAHABQAIAAAGACQAGABgFAEQgEADgSAH");
	this.shape_9.setTransform(-26.8,-7.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF02F1").s().p("AgOAIIANABQAIAAAGACQAGABgFAEQgEADgSAHgAgZgZIAMACQALABAKADQAMACAFAEQAEAFgLAFQgJADgXAGg");
	this.shape_10.setTransform(-26.7,-7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.8,1,1).p("AgOgQQAAAAAJAEQAIADAKAGQAKADADAFQADAFgMADQgLAEggAA");
	this.shape_11.setTransform(-27,-12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF02F1").s().p("AgOgQIAJAEQAIADAKAGQAKADADAFQADAFgMADQgLAEggAAg");
	this.shape_12.setTransform(-27,-12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAmBPIgkgYIhihAIgLAAQgEAAgDADIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAJgBQAGAAABABQABAEgGAEQgGADgHgBIgPgDQgHgCgDgEQgCgCABgGQACgGgFgDIgDAEIgDADIgEADQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAKABACADQABAEgGADQgGACgMgDIgLgEQgFgCgCgCQgCgDADgDIAFgFIAFgFIgFACIgDAAIgDgBQgGgCgCgEIgFgGIgGgGIgEgHQgBgEAGgFIANgIIAJgFIAHAAIAIAAIAdADQARACAJgFQgEACgFgEQgFgDAAgCQAAgEAEgCIAJgEQAHgDAJAAQAJABAHAEQAGAEAEAEIAJAKQAEAFADAGQACAEAAAFIgBAJIgCAGQgCADAAAEQADAFAIAFIAQAHQAHAGALAFIANAKIAPAKIAbAPQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGAAIAEACIAGAAQAIgBAGgDIAOgFIAZgHIAcgIIAYgGQANgDAKgEIgGAJQgCAFAAAFQgBAGAGAEIAGABIAJABQAFABABgBQgEADgIABIgPAEQgaAJgdAGIgyAOQgLADgKACIgDAAQgIAAgGgEgAilgbIAEgFIgGgFQgEgDgEADQAAAAAAAAQAAABAAAAQAAABAAABQAAAAABABIACAEIABAAQAFAAABACg");
	this.shape_13.setTransform(5.6,-3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAFAYQgRgFgRgQQgNgKgIgWQADAIAJAKQAKALAXAMQATALAlAGIgOABQgNAAgTgGg");
	this.shape_14.setTransform(19.9,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABlCGQgWgEgfgNQgggOgdgeQgfgegUg0IgHgTQgIgTgMgdQgOgdgSgfIAMAPQAMAOARAZQAQAZAPAiQAQAhAcAjQAZAjAjAZQAiAZAlAGIgBABIgWgDg");
	this.shape_15.setTransform(5.8,12.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_16.setTransform(8.9,12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBPIAHgQQAIgPAQgYQAPgXAVgWQAYgXAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAIQABAJAOAJIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_17.setTransform(37.8,16.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLAJQAOgCACgFQABgCgEgEIgDgEQAMAIABACQABAEgHACQgGABgEAAIgHAAg");
	this.shape_18.setTransform(8.1,-15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAARIAAgVIAAgWIAAAOIABAXQAAALgBAFIAAgKg");
	this.shape_19.setTransform(23.1,-26.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAAQABgEAEgCIgDACQgBAEgDAHIACgHg");
	this.shape_20.setTransform(23.5,-29.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AACAAQgCgDgDgBIADABQADACABAGIgCgFg");
	this.shape_21.setTransform(22.6,-28.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAGQABgGADgEQABgFAGgBIgFAEQgEAFgCAMIAAgFg");
	this.shape_22.setTransform(23.8,-24.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAwQgGgFgDgFQgDgGAHgDIgCgEQgCgDABgDQABgEAHACIgDgEQgDgCgBgDQgBgDAHACIgDgDQgDgDAAgBQgBgCAEgBIgDgDQgCgCgBgCQAAgDAEgCIgEgFQgEgFgBgGQgBgGAIgCIgCgEQgBgEABgDQABgDAFABQAIADABAHQADAGgBALQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAEABgCANIAAAAIAAAAIADgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQABADgFAIIAEAEQADAEgGAIIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAQABACgEAHIAEADQADACgCAGQgDAFgRAIIgEgFg");
	this.shape_23.setTransform(23,-29);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAxQgHgFgDgFQgEgGAIgDIgCgEQgCgEABgDQABgDAIABIAAAAIAAAAIgEgDQgDgDgBgDQgBgCAIABIAAAAIAAAAIgEgDIgDgEQgBgCAFgBIgDgCQgDgDgBgDQgBgCAGgCIgFgFQgFgGgBgGQgCgGAJgCIgBgEIgBgHQABgEAGACQAJADABAHQAEAGgCAMQABgBAFABQAEAAgCAOIADgBQADAAABADQABADgGAIIADACQACACABADQABAEgFAGIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgFAHIAFADQAEADgDAFQgCAGgUAIIgFgGg");
	this.shape_24.setTransform(23.1,-29.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADgBQADAAABAEQAAAEgEABQgCAAgBgFg");
	this.shape_25.setTransform(14.3,-28.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADgBQADAAABAEQAAAEgEABQgCAAgBgFg");
	this.shape_26.setTransform(7.1,-31.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIATQgGgGgDgGIAKgWIAEgCIAGgDQAEgBAEABQAHADAAAIQABAIgDAEIgFAKQgDAFgFADIgDABQgFAAgDgDg");
	this.shape_27.setTransform(14.4,-27.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAVQgEgCgFgFQgBgBgDgKQgCgIAFgOIACAAQAFgCADABQAFAAAEAEQAGAHgBAJQAAAIgFAHQgEAGgEAAIgBAAg");
	this.shape_28.setTransform(7.4,-30.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJAIQgBgCACgDQACgDAEgCIAHgFQADgBACABQABACgCADQgCACgEADIgHAFIgCABIgDgBg");
	this.shape_29.setTransform(-3.1,-23.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKAIQgBgBACgEIAHgGIAHgFQAEgBACACQABACgCADQgCACgFAEIgHAFIgDAAIgDgBg");
	this.shape_30.setTransform(-0.9,-22.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AAWABQgBAPgHAJQgHAKgIgBQgJgBgGgKQgGgKABgNQACgPAHgJQAHgKAHABQAKABAFAKQAGAKgBANg");
	this.shape_31.setTransform(8.1,-30.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAiQgJgBgGgKQgGgKABgNQACgPAHgJQAHgKAHABQAKABAFAKQAGAKgBANQgBAPgHAJQgHAJgHAAIgBAAg");
	this.shape_32.setTransform(8.1,-30.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_33.setTransform(9.1,12.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AAXANQgJAQgNAIQgLAHgKgFQgKgFAAgPQgBgPAJgPQAJgQANgIQALgIAKAFQAKAGAAAPQABAPgJAPg");
	this.shape_34.setTransform(15.4,-27.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAnQgKgFAAgQQgBgOAJgPQAJgQANgJQALgHAKAFQAKAGAAAOQABAQgJAPQgJAQgNAHQgGAFgGAAQgFAAgEgCg");
	this.shape_35.setTransform(15.4,-27.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_36.setTransform(43.1,19.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF02F1").s().p("AAuDgQglgHgdgSQgfgRgWgUQgWgUgNgOIgMgOQgUgdgSgiQgRgigNgdIgUgzIgHgUQARgPAagSQAagRAbgQIAtgaIATgKQASgcAPgIQAPgJAIAEQALADAHAKQAGAJAEAIIADAJQAcgUASABQARABAKANQAKANAEARQAEASABANIAAANQAqAgAPAbQAQAbgCAVQgBAUgKAOQgKAPgKAIIgKAIQAVARANAVQAMAVAGATQAGATACANIACANQguAjgrAKQgYAGgWAAQgSAAgRgEg");
	this.shape_37.setTransform(9.5,-12.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ABHDhQgugKgngRQgpgSgZgOIgagQQgXgPgSgbQgTgbgOggQgPgfgKgbQgKgcgGgSIgFgTQAFgKASgPQARgOAZgPQAYgPAWgMIAngVIAQgJQATgcAQgJQAPgJAKADQAMAEAHAJQAJAJADAIIAFAJQAdgUATABQASABALAOQALAOADASQAFARABAOIAAAOQAtAjARAcQARAcgBAVQAAAUgKAPQgJAOgLAIIgKAHQAPARAKAUQAKAUAIASQAHATADALIADAMQgbAngpAJQgVAFgVAAQgWAAgYgFg");
	this.shape_38.setTransform(9.4,-13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAGIAAgNIAAAHIABAIIgBgCg");
	this.shape_39.setTransform(5.1,-33.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AABABQgBgDgCgCIACABQACACABAHIgCgFg");
	this.shape_40.setTransform(4.6,-34.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgCADQABgEAEgDIgDAEQgBAAgBAEIAAgBg");
	this.shape_41.setTransform(5.6,-33.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AACAAQgDgCgEAAIAEAAQACABAFAEIgEgDg");
	this.shape_42.setTransform(4.8,-31.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgBAAQABgCACAAIgCACQAAAAgBADIAAgDgAACgCIAAAAIAAAAg");
	this.shape_43.setTransform(5.8,-31.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAAABQgBgFACgDIgBADQAAAEAAAIIAAgHg");
	this.shape_44.setTransform(6,-29.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AACAAQgCgGgGgBQAAgBAGAEQAEADAEAJIgGgIg");
	this.shape_45.setTransform(5.2,-29.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAtQgEgEADgEIADgEQgFgFAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQgIgGACgFQACgFABAAQgHgGAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBQgEgIABgDQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAQgEgLABgHQABgHAHgFQAFgDABADQAAADAAAEIAAAEQAIABAAAGQABAFgDAGIgDAHQAFAAAAADQAAADgCACIgCADQAHAAgDAEIgDAGQAGgCAAACQAAADgCADIgDAEQAHgDACADQABADAAAEIgBAEQAHABgCAGQgBAHgEAGIgFAGQgRgDgEgFg");
	this.shape_46.setTransform(5.5,-32.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgNAvQgEgEADgEIAEgEQgGgFAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIACgBQgGgEAAgEQAAgDABgDIACgCQgHgHAAgCQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAIADgBQgEgIABgDQABgDADgBIADAAQgFgKACgIQACgHAIgFQAEgDAAACQACADAAAEIAAAFQAJAAAAAGQAAAGgDAGIgDAHQAFAAAAADQAAADgCADIgCADQAFAAAAADIgDAEIgCADQAHgDAAADQAAADgDAEIgDAEQAIgEABADQACADgBAEIgBAFQAIAAgCAHQgCAGgFAHIgFAHQgTgDgEgFg");
	this.shape_47.setTransform(5.5,-32.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAqC8QgFgCgCgGQgCgHAKgPIABgJQAAgJgFgLQgDgLgOgGQgLgDgUABIgvADQgZACgUgCQgUgBgIgJQgFgIgGgVQgHgVgEgcQgFgaAAgdQAAgeAIgZQAHgZASgPIASgLQARgKAcgNQAbgOAdgJQAcgJAaACQAaACAPATQABAAAEAMQAGAMAAAWQAAAWgNAfQgNAfglAmQgjAlhBAtIAMAAIAcgCIAfgDQAQgCAIgDQAKgEAQABQASABATAGQATAGARAOQAQANAIAWIgBAIQgBAIgEAKQgDAKgJAGQgHAGgOgCIgCgDQgCgDABgIQABgJAGgQIgCgJQgCgIgJgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgQAGIgFAAQgGgBgDgHQgFgGAGgQIABgHQABgGgEgKQgFgJgQgIIAFALQAEALADAPQACAPgEAMQgEAMgRACIgHgCg");
	this.shape_48.setTransform(44.2,19);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAXAnQgQgfgRgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgEgHQANALgBAJQAAAIgFAEIgGAFQAdAUARAbQAUAYAMAaQAMAZAFARIAFARIgLAQQgHgjgQgfg");
	this.shape_49.setTransform(-9.9,13.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgNQgEgMAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAQgEAHQgEAGgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_50.setTransform(-16.2,13.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgWAHgKQAHgLABAAQARgSAaACQAYACAcAOQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_51.setTransform(-17,13.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("ABwAdQgBAAgSAAQgTABgagDQgagDgWgJQgUgJgIgQQAAAAACgKQACgJAAgMQAAgMgEgIQgEgIgLACQgLACgWATQAAAAgLgDQgLgCgMAAQgMAAgFAIQgEAHALATQgBABgEAGQgEAHgBAGQAAAJAMAFQgBAAgDACQgDADABADQABAEALADQANADAPgGQAPgHALgHQAKgHABgBQAAAAALAKQAKAKASANQARAMAXAJQAXAJAZgCQAagBAZgTg");
	this.shape_52.setTransform(-17.6,-8.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF02F1").s().p("AAgA9QgXgJgRgMQgSgNgKgKIgLgKIgLAIQgLAHgPAHQgPAGgNgDQgLgDgBgEQgBgDADgDIAEgCQgMgFAAgJQABgGAEgHIAFgHQgLgTAEgHQAFgIAMAAQAMAAALACIALADQAWgTALgCQALgCAEAIQAEAIAAAMQAAAMgCAJIgCAKQAIAQAUAJQAWAJAaADQAaADATgBIATAAIATATQgZATgaABIgHAAQgWAAgTgHg");
	this.shape_53.setTransform(-17.6,-8.6);

	this.addChild(this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-38,119.8,76.1);


(lib.frog1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF02F1").s().p("AhGBxIABgJIABgTQABgLgCgIQgBgIgGAAIgGABQgBABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIACABQAAAKgEAAQgFABgHgJQgFgJACgDQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAAAAAIAIgDIARgHIARgFQAKgBALADIAMAEIBShBQgDgEAAgCQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIACgBIg0heIAfABIA5BhIhxBZQABALgCADIgCACIARADIAEgEIAAAAIgEgFQgBgDADABIAHAEIAFACIgIAQIgcgCIgJAGIAgANIACABIgCgDQgCgEADgDQAFgDAGAFQACAEgCAFIgGAIIgFADIgogTIgMAGIAFALIANgDQAEgGACADQAEACACAEIACAFIgeALg");
	this.shape.setTransform(10.8,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4CGIgLgJIgEgDIgCgEQgBgFABgFIACgUQACgKgHgHQADADgFADQgEADgDAAQgEAAgDgDIgGgGQgDgFAAgGQAAgHAEgEQAFgEAGgCIANgGIAMgEQALgBAMABQAEABAFACIAHABQAIgBAGgGIAIgJIAOgMIAMgJIAMgIIASgSQAAAAgBABQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgEIADgDQAAAAAAAAQABgBAAAAQAAgBgBAAQAAgBAAgBQgCgFgDgFIgGgJIgLgSIgKgTIgJgRQgEgJgGgGIAMAEQAGACAHAAIAGAAQAEgBACgCIACgHQABgFgBgCQADADADAGIAFAKQAMASAKAUQAIASAKARQAEAHACAHQACAHgFAFIgdAVIhOA+IAAAIQAAADAEACIAFAAIACAAIgCgGQAAgEADgBQAFAAAEAEQAFAEAAAFIgEAKQgCAFgFABQgFABgHgBQgHgBgEADIAKAEIAEADQAAAAABAAQABABAAAAQABAAAAAAQAAAAAAAAQABgHAFAAQAFgBAFAEQADAEgEAIIgFAHQgCAEgFABQgDABgCgCIgHgEIgHgDIADADIAAACIgBACQgCADgEACIgJADIgHADIgIADIgBAAQgGAAgFgEgAgqBvQgEACADADIAHAAIAEgBQgBgEAEAAIgHgEIgGAEg");
	this.shape_1.setTransform(10.8,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAMIA1ggIgEAWIAOATg");
	this.shape_2.setTransform(-31.6,24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguAIIAJgVIBKgSIgIAeIASAPIhLASg");
	this.shape_3.setTransform(12.3,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ai8AqIF5hU");
	this.shape_4.setTransform(-11.1,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQARQAPgFABgIQABgHgBgHIgCgHQARAQABAGQABAIgIACQgIADgHAAIgKgBg");
	this.shape_5.setTransform(12.2,-10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABxAXIg2gQQghgHghgJQgjgIgcgDQgcgDgMAGQgLAGAOAQIgHgFIgNgJQgHgGgBgFQAAgGALgCQAMgCAeACQAeADAmAHQAlAGAoAMQAoALAhATIgXgHg");
	this.shape_6.setTransform(-3.1,-13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAAQABgDABAAQADAAAAADQAAAEgDAAQgBAAgBgEg");
	this.shape_7.setTransform(-1.9,-29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAMQgEgFAAgHQAAgGAEgFQAEgFAEAAQAFAAAEAFQAEAFAAAGQAAAHgEAFQgEAFgFAAQgEAAgEgFg");
	this.shape_8.setTransform(-2.5,-29.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAAQAAgDACAAQADAAAAADQAAAEgDAAQgCAAAAgEg");
	this.shape_9.setTransform(5.7,-28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIALQgEgEAAgHQAAgGAEgFQAEgFAEAAQAFAAAEAFQAEAFAAAGQAAAHgEAEQgEAGgFAAQgEAAgEgGg");
	this.shape_10.setTransform(5.1,-28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTANQgOgEgKgVIABACQACAEAJAEQAJACASAAQARgCAfgMIgKAKQgKAHgPAHQgJAFgIAAQgFAAgGgCg");
	this.shape_11.setTransform(-3.4,-7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAMQgCgBAAgEIACgHQADgMAEABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgCAIIgEAIQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_12.setTransform(-5.6,-19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAIQgCgEAAgEQAAgEACgDQACgEABAAQACAAADAEQABADAAAEQAAAEgBAEQgDAEgCAAQgBAAgCgEg");
	this.shape_13.setTransform(-0.4,-18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAFAYQgQgFgRgQQgOgKgIgWQADAIAJAKQALALAVAMQAUALAlAGIgOABQgNAAgTgGg");
	this.shape_14.setTransform(9.1,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABlCGQgVgEgggNQgggOgcgeQgggegUg0IgIgTQgGgTgOgdQgNgdgRgfIALAPQAMAOAQAZQARAZAQAiQAPAhAbAjQAaAjAiAZQAjAZAkAGIAAABIgWgDg");
	this.shape_15.setTransform(-5,12.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_16.setTransform(-1.8,12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBPIAHgQQAIgPAQgYQAPgXAVgWQAYgXAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAIQABAJAOAJIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_17.setTransform(27,16.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAARIAAgVIAAgWIAAAOIABAXQAAALgBAFIAAgKg");
	this.shape_18.setTransform(12.4,-26.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAAQABgEAEgCIgDACQgBAEgDAHIACgHg");
	this.shape_19.setTransform(12.7,-29.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AACAAQgCgDgDgBIADABQADACABAGIgCgFg");
	this.shape_20.setTransform(11.8,-28.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAGQABgGADgEQABgFAGgBIgFAEQgEAFgCAMIAAgFg");
	this.shape_21.setTransform(13,-24.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAwQgGgFgDgFQgDgGAHgDIgCgEQgCgDABgDQABgEAHACIgDgEQgDgCgBgDQgBgDAHACIgDgDQgDgDAAgBQgBgCAEgBIgDgDQgCgCgBgCQAAgDAEgCIgEgFQgEgFgBgGQgBgGAIgCIgCgEQgBgEABgDQABgDAFABQAIADABAHQADAGgBALQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAEABgCANIAAAAIAAAAIADgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQABADgFAIIAEAEQADAEgGAIIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAQABACgEAHIAEADQADACgCAGQgDAFgRAIIgEgFg");
	this.shape_22.setTransform(12.2,-29);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAxQgHgFgDgFQgEgGAIgDIgCgEQgCgEABgDQABgDAIABIAAAAIAAAAIgEgDQgDgDgBgDQgBgCAIABIAAAAIAAAAIgEgDIgDgEQgBgCAFgBIgDgCQgDgDgBgDQgBgCAGgCIgFgFQgFgGgBgGQgCgGAJgCIgBgEIgBgHQABgEAGACQAJADABAHQAEAGgCAMQABgBAFABQAEAAgCAOIADgBQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQABADgGAIIADACQACACABADQABAEgFAGIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgFAHIAFADQAEADgDAFQgCAGgUAIIgFgGg");
	this.shape_23.setTransform(12.3,-29.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AAWADQgDAOgHAJQgIAJgHgBQgKgCgFgKQgFgLACgNQADgOAHgJQAIgJAIABQAJACAFAKQAFALgCANg");
	this.shape_24.setTransform(-2.8,-29.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAiQgKgCgFgKQgFgLACgNQADgOAHgJQAIgJAIABQAJACAFAKQAFALgCANQgDAOgHAJQgHAIgGAAIgCAAg");
	this.shape_25.setTransform(-2.8,-29.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_26.setTransform(-1.7,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AAXABQAAARgHAKQgHALgJABQgKgBgGgMQgGgLAAgQQABgQAHgLQAHgLAIgBQAKACAGALQAHAMgBAPg");
	this.shape_27.setTransform(5.2,-28.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAbQgGgMAAgPQABgQAHgLQAHgLAIgBQAKABAGAMQAHAMgBAPQgBARgGAKQgIALgIAAQgKgBgGgLg");
	this.shape_28.setTransform(5.2,-28.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_29.setTransform(32.4,19.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF02F1").s().p("AAmDbQgogLgjgVQgjgWgbgXQgagXgPgQIgOgRQgHgKAFgIQAEgIAIgGQAJgGACgGQADgGgLgGQgSgJgSgPQgSgNgMgUQgLgUADgXQADgRAPgNQAQgNAWgJQAWgKAVgGIAkgMQALgEAHgLQAHgKAFgLQAGgMAIgIQAIgJALgGQAKgGAKAEQAEABAIAIQAIAJAHAIQAGAJgDADQAcgUASABQARABAKANQAKANAEASQAEARABANIAAAOQAqAgAPAbQAQAbgCAVQgBATgKAPQgKAPgKAHIgLAIQAWARANAVQAMAVAGATQAGAUACAMIACANQgvAkgtAHQgTAEgTAAQgZAAgYgHg");
	this.shape_30.setTransform(-1.4,-12.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABIDgQgugJgngSQgogRgagPIgbgPQgIgGgNgNQgOgOgMgQQgLgRgBgNQgBgOASgFQgEgJgIgEIgQgKIgQgPIgOgPQgOgRgFgVQgGgUAKgVQAOgZAWgLQAWgLAagHQAZgGAWgJQAPgHAIgMIAPgYQAHgOAMgKQANgLAOgBQAMgBANAMIAGAHIAIANQAEAGgBABQAegUATABQATABAKAOQAKAOAEASQAFASABANIAAAPQAsAiASAcQARAcgBAWQAAATgKAPQgKAPgJAHIgLAIQAOARALAUQAKAUAHASQAHASADAMIAEAMQgbAngqAJQgUAEgVAAQgWAAgYgFg");
	this.shape_31.setTransform(-1.5,-13.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAGIAAgNIAAAHIABAIIgBgCg");
	this.shape_32.setTransform(-5.7,-33.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AACABQgCgDgCgCIACABQACACABAHIgBgFg");
	this.shape_33.setTransform(-6.1,-34.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCADQABgEAEgDIgDAEQgBAAgBAEIAAgBg");
	this.shape_34.setTransform(-5.2,-33.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AACAAQgDgCgEAAIAEAAQACABAFAEIgEgDg");
	this.shape_35.setTransform(-6,-31.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgBABQABgCACgBIgCACIgBADIAAgCgAACgCIAAAAIAAAAg");
	this.shape_36.setTransform(-4.9,-31.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAABQgBgFACgDIgBADQAAAEAAAIIAAgHg");
	this.shape_37.setTransform(-4.8,-29.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AACAAQgCgGgHgBQABgBAGAEQAEADADAJIgFgIg");
	this.shape_38.setTransform(-5.5,-29.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAtQgEgEADgEIADgEQgFgFAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQgIgGACgFQACgFABAAQgHgGAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBQgEgIABgDQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAQgEgLABgHQABgHAHgFQAFgDABADQAAADAAAEIAAAEQAIABAAAGQABAFgDAGIgDAHQAFAAAAADQAAADgCACIgCADQAHAAgDAEIgDAGQAGgCAAACQAAADgCADIgDAEQAHgDACADQABADAAAEIgBAEQAHABgCAGQgBAHgEAGIgFAGQgRgDgEgFg");
	this.shape_39.setTransform(-5.2,-32.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgNAvQgEgEADgEIAEgEQgGgFAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIACgBQgGgEAAgEQAAgDABgDIACgCQgHgHAAgCQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAIADgBQgEgIABgDQABgDADgBIADAAQgFgKACgIQACgHAIgFQAEgDAAACQACADAAAEIAAAFQAJAAAAAGQAAAGgDAGIgDAHQAFAAAAADQAAADgCADIgCADQAFAAAAADIgDAEIgCADQAHgDAAADQAAADgDAEIgDAEQAIgEABADQACADgBAEIgBAFQAIAAgCAHQgCAGgFAHIgFAHQgTgDgEgFg");
	this.shape_40.setTransform(-5.3,-32.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AArC8QgGgCgCgGQgCgHAKgPIABgJQAAgJgEgLQgFgLgNgGQgLgDgUABIgvADQgZACgUgCQgUgBgHgJQgGgIgHgVQgGgVgFgcQgEgaAAgdQAAgeAHgZQAIgZASgPIASgLQARgKAbgNQAbgOAfgJQAbgJAaACQAaACAOATQACAAAFAMQAEAMAAAWQABAWgNAfQgOAfgjAmQgkAlhCAtIANAAIAdgCIAegDQAQgCAIgDQAKgEARABQAQABAUAGQAUAGAQAOQARANAHAWIgBAIQgBAIgEAKQgEAKgHAGQgJAGgNgCIgCgDQgCgDACgIQAAgJAHgQIgDgJQgDgIgIgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgPAGIgHAAQgFgBgEgHQgDgGAEgQIACgHQABgGgFgKQgEgJgQgIIAFALQAEALADAPQADAPgFAMQgEAMgRACIgGgCg");
	this.shape_41.setTransform(33.4,19);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAXAnQgQgfgRgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgEgHQANALgBAJQAAAIgFAEIgGAFQAdAUARAbQAUAYAMAaQAMAZAFARIAFARIgLAQQgHgjgQgfg");
	this.shape_42.setTransform(-20.7,13.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgMQgEgNAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAPgEAHQgEAHgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_43.setTransform(-27,13.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgVAHgLQAHgLABAAQARgSAaACQAYADAcANQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_44.setTransform(-27.8,13.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.3,1,1).p("AjuhmIHdDN");
	this.shape_45.setTransform(-25.1,-0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.8,1,1).p("AgUgVQAAABAAAIQAAAJAFAIQAFAJAMAFQAOAEAEgDQADgEgFgIQgEgHgJgH");
	this.shape_46.setTransform(-30.2,8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF02F1").s().p("AACATQgMgFgFgJQgFgIAAgJIAAgJIAZAPQAJAHAEAHQAFAIgDAEQgCACgEAAQgEAAgIgDg");
	this.shape_47.setTransform(-30.2,8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.8,1,1).p("AgaAQQAAgBAFgKQAFgHAGgLQAHgLADgDQAGgDACAMQABAKgDAZQAAAFgBAHQAAgBACgHQABgCABgCQACgGACgHQAEgHADgFQAEgEACAFQACAFgBAT");
	this.shape_48.setTransform(-27.3,12.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF02F1").s().p("AAJAWIAEgMQAEgJADgDQAEgFACAFQACAEgBAVgAgaAVIAFgKIALgTQAHgKADgDQAGgEACANQABAKgDAYg");
	this.shape_49.setTransform(-27.3,12.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.8,1,1).p("AgTAFQABgBAGgFQAGgIAGgIQAJgHAGgCQAFgBAAAMQgBAMgLAe");
	this.shape_50.setTransform(-31.1,12.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF02F1").s().p("AgTAFIAHgGIAMgQQAJgHAGgCQAFgBAAAMQgBAMgLAeg");
	this.shape_51.setTransform(-31.1,12.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DB0505").s().p("AAnB5QgegCgQgDIgTgEQg4gRgmgdQgngcgXghQgYgegMgeQgNgdgEgSIgEgTQAiBPAwAtQAwAvA2AWQA2AXAzAFQA0AFArgEQAsgEAZgGIAagHQgcATgjAJQgkAJgkABIgXAAIgrgBgADxBUIgBAAIABAAg");
	this.shape_52.setTransform(-25.1,1.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("AA9hpQAAABgEAMQgEAMgHARQgHASgLASQgKASgNAKQgLAMgQABQgBgBgMgGQgMgHgOgBQgOgDgFAIQgFAKANAhQAAABgGAJQgGAJgEAMQgEALAGAHQAFAHAWgEQAAABAFAGQAFAGAIADQAIADAIgKQAAABABAEQACAEADAAQAEAAAHgJQAHgMgBgQQgBgQgEgMQgDgNgBgBQABAAALgHQAMgGASgNQASgMAQgSQAQgTAHgZQAGgZgJgdg");
	this.shape_53.setTransform(-24.2,5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF02F1").s().p("AgYBxIgBgFQgIAKgIgDQgIgDgFgGIgFgHQgWAEgFgHQgGgHAEgLQAEgMAGgJIAGgKQgNghAFgKQAFgIAOADQAOABAMAHIANAHQAQgBALgMQANgKAKgSQALgSAHgSIALgdIAEgNIAYgLQAJAdgGAZQgHAZgQATQgQASgSAMQgSANgMAGIgMAHIAEAOQAEAMABAQQABAQgHAMQgHAJgEAAQgDAAgCgEg");
	this.shape_54.setTransform(-24.2,5);

	this.addChild(this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.1,-38,99.3,76.1);


(lib.frog_blink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIgBgKIgBgCQAEADAAAIQABAFgBAGIgCADQACgHgCgGg");
	this.shape.setTransform(2.4,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAHQACgHAFgHQAGgHALgBQAKAAARAPIgLgEQgLgFgLADQgNACgHAUIACgJg");
	this.shape_1.setTransform(5.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAJQgBgFABgFQAAgHADgDIgBACIgBAJQgBAFABAHIgBgDg");
	this.shape_2.setTransform(-1.6,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGgFQgKgDgKAEIgKAEQAQgNAJAAQAJAAAGAHQAFAGACAGIACAIQgHgRgMgCg");
	this.shape_3.setTransform(-4.2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},101).wait(3));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF02F1").s().p("AgEAvQgFgCgDgDQgFgEgEgGQgDgFgBgGIAAgHQgEgEAAgGIAAgCQgCgNAHgNIAHgKQAIgJAJgDQAPgBAHANIAAAAQAFAHABAJQACAHAAAHIgBAcIAAACQgEAPgNAFIgFABIgFAAIgGAAg");
	this.shape_4.setTransform(4.2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF02F1").s().p("AgIAoQgIgDgEgHIgEgGQgEgJAAgJIACgQQACgKAGgHIADgDIANgJIABgBQAFAAAIACQALADADAMQACALABALQAAAIgCAKQgCAHgEAFQgHAJgMACIgDABIgHgBg");
	this.shape_5.setTransform(-3.7,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},101).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.flightbarrier = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA0yAA8MhpjAAAIAAh3MBpjAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg0xAA7IAAh1MBpjAAAIAAB1g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-338.8,-7,677.8,14);


(lib.empty = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.droptarget = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqHO3IAA9tIUPAAIAAdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.8,-95.1,129.6,190.3);


(lib.balloon_tiedup = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AA9gzQAGAAAGACIAXAKQAdANAXARQBKAxgEA7QgIBniEjkIgKgQQgDgFgEgEgAg3iPIArAWQArAcAeAqQg8gGgcBfQgYBLgyAXQg1AYg/gr");
	this.shape.setTransform(-14.2,-135.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAAAKIAAgDIgCgCIgCgEIgBgBIgBgCIgCgCIgBgCIACAAQAGAAABgFQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAEACgBADQADACAAABQAIAEgGAFIgCABIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_1.setTransform(-36.8,-124.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF2222").s().p("AghArQAOgyALgUQAIgTARAEQARAEAAAYQAAARgZAVQgUAUgRAAIgFgBg");
	this.shape_2.setTransform(2.2,-202.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0F1616").ss(1,1,1).p("AgGAAIAAAAQABAAALAAQABAAgBAAQgGAAgGAAg");
	this.shape_3.setTransform(-8.3,-191.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19A3A9").s().p("AgGAAIAAAAIAMAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgGAAgGAAg");
	this.shape_4.setTransform(-8.3,-191.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0F1616").ss(1,1,1).p("AgFAAIAAAAQAFgCAGACQAAAAAAABQgGgBgFAAg");
	this.shape_5.setTransform(-8.3,-191.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19A3A9").s().p("AgFAAIAAAAQAFgCAGACIAAABQgGgBgFAAg");
	this.shape_6.setTransform(-8.3,-191.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0F1616").ss(1,1,1).p("AgHgIIgEARIAXgDIgLgO");
	this.shape_7.setTransform(-8,-191);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAdhEIgEBEQgMBDgpAC");
	this.shape_8.setTransform(-11.3,-133.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApAMQgxhNhEgTIASABQAXAFAVANQBBAqAaBtQgLgkgZgmg");
	this.shape_9.setTransform(0.9,-227.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C40202").s().p("AgjCmQg2hCAAhiQAAg7AXg1QAbg7AugdQAcgRAWgCQAfgDACAiQACAeg1AxQhaBTAoB8QALAkAKAaQAZA6ANgDIgJABQghAAgpg0g");
	this.shape_10.setTransform(-15.3,-214.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EF2222").s().p("AgqDYQgWgEgNgTIgVgnQgUglgThIQgYhbAthRQAdg0ALgMQAagbAuAAQBSAAA0BaQAbAwgRAbQgHAKgIAGQgSAOgdgIQgygOgmAPQguASgFAwQgDAkAUAsQAcA+ADAMQAFAUgGAFQgDAEgIAAQgHAAgKgDg");
	this.shape_11.setTransform(-6.8,-214.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB0505").s().p("Ah3CfQgxhCAAhdQAAhbAxhCQAzhCBEAAQBGAAAyBCQAxBBABBcQgBBdgxBCQgyBBhGAAQhEAAgzhBg");
	this.shape_12.setTransform(-7.4,-214.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUDaQhqgYgihxQgKgjgCgoIAAgeQAFiDBTg2QApgaApgBQBiACAwBiQAYAzAEAwQAKCdhYBCQgcAVgiAJIgdAFIAIAOIggACg");
	this.shape_13.setTransform(-7.3,-213.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAj1IAAHr");
	this.shape_14.setTransform(-8.1,-165.8);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.9,-237,48,117.1);


(lib.balloons_hit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB0505").s().p("AgdBLQg0AIAFgnQADgYgjAVIgHAEQAQgSgNgTQgNgSgygLQgZgFgWgBIBggQIgUg5QAKAIAMADQAXAEAHgfIAnBAQAuA9AfgJQBCgZAngKQBGgUAaAeIiKAzIAAA/IhXgJIAFAgIgyAFg");
	this.shape.setTransform(-15.2,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB0505").s().p("AAcApQhSg3gsALQgcAEAFBLQACAlAIAkQhCg0gahnQgQhCgpgUQgMgHgOgCIgLAAQApglA7APQAeAIAWAOIAFgfIAyggIgTAgIAPAWQAWAUAngCQA9gGgCAGQgTAFgMAHQgeANASADQAHACA0AnQAuAgAYgJQAqgOASgGIgOAUQgQAYgMAJQgLALAUAqQAKAUANATICIALIiLAdg");
	this.shape_1.setTransform(49.1,-7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB0505").s().p("AgkBIQANgigcAKIgXANQAPgOgNgvQgKgjgegIIgcAAQAugnAtAQQAHACAcAOQASAKANACQAwAFBMg3IhuBcIBEgCQhrBXgYAAQgKAAAGgRg");
	this.shape_2.setTransform(36.3,-47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DB0505").s().p("AgEAWQgigfgHAfQgEAQADAXQgnhUAAgvQAAgegJgPIgJgKQAuAAAZAbQAMAOADAOIAzgGQgwAWANAPIAwANIA5CZg");
	this.shape_3.setTransform(-1.2,-48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DB0505").s().p("AiFBxQgzgQguAAQAKgbBVgzIBlg1QAPgIgCgdIgFgaQALAOA8goQAogZgRgrIgZgnQBiANA3A9QAbAfAIAcQgIgPhGAAQgnAAAJAnQAMA3gLASQgdAqAaBNQhqAHgXA7QgLAYAEAWQgXhVhfghg");
	this.shape_4.setTransform(-39.3,-37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DED80C").s().p("AFPEkQjckokzCmQhcAyhaBYQDukbiPirQgkgrg6ggQg/gUhNgiQAmAIAwAUQAdAMAZAOQEpBdADjHQABhMgqhuIgEgJQB2DeDJhLQBygqBdhmQi4DXBcDVQAvBqBWBBQi1AIATBtQAJA2AuA0QCtDsgBAAQgBAAiyjvgAl9EzIAHgHQglArgtAuQAcgkAvgug");
	this.shape_5.setTransform(-18,7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB0505").s().p("AjzCOIAAhJQAng/AogFIAAhFQAkgaADgYQABgOAVgeIAUgbIANA3IBBg+IABAjQgEAngXAUIAlAFQgGAvAegNQAUgIAVgXIARgVQASAKAagdQAWgXAfgPQAkgSAdAEIgTAMQgVAPgQAUQgwBAAkBTIgdgDQgjgDgcAFQhZARANBXIgoAxQgIgJgMgKQgYgUgVAAQgiAAAagyIgvAQQg1AZgYAvIgCAEQgQAigFAAQgHAAAKg3g");
	this.shape_6.setTransform(-54,12.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-60.7,158,121.4);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdgEIA7gRIgKAVIAIAWg");
	this.shape.setTransform(-23.3,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAVIgKgaIAPgUIBMAFIgQAYIAMAWg");
	this.shape_1.setTransform(21.7,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AjBgNIGDAb");
	this.shape_2.setTransform(-2.1,-0.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-4.2,52.7,8.5);


(lib.answerdisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,assim:6,single:146});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		prep_txt = "";*/
	}
	this.frame_27 = function() {
		/* _parent.electric.gotoAndPlay(2);*/
	}
	this.frame_61 = function() {
		/* _parent.electric.gotoAndPlay(3);
		word = _parent.words[_global.qNum];
		trace(word);*/
	}
	this.frame_145 = function() {
		/* _global.qNum++;
		if (_global.qNum == _parent.correct.length) {
			trace("finished the game!");
			_parent.gotoAndPlay("congrats");
		}
		gotoAndStop("static");
		*/
	}
	this.frame_146 = function() {
		/* _parent.electric.gotoAndPlay(2);*/
	}
	this.frame_192 = function() {
		/* _parent.electric.gotoAndPlay(1);
		word = _parent.words[_global.qNum];*/
	}
	this.frame_267 = function() {
		/* _global.qNum ++;
		if (_global.qNum == _parent.correct.length) {
			trace("finished the game!");
			_root.gotoAndPlay("congrats");
		}
		gotoAndStop("static");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(34).call(this.frame_61).wait(84).call(this.frame_145).wait(1).call(this.frame_146).wait(46).call(this.frame_192).wait(75).call(this.frame_267).wait(1));

	// Prep box
	this.text = new cjs.Text("prep", "bold 24px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 130;
	this.text.setTransform(-7.4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},71).wait(75).to({_off:false,x:-8,text:"prep-"},0).to({_off:true},46).wait(76));

	// Stem box
	this.text_1 = new cjs.Text("stem", "bold 24px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 185;
	this.text_1.setTransform(-2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.text_1).to({_off:true},71).wait(75).to({_off:false,lineWidth:190},0).to({_off:true},46).wait(76));

	// Correct word
	this.text_2 = new cjs.Text("", "24px 'Arial-BoldMT'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 293;
	this.text_2.setTransform(11,6.5);
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(71).to({_off:false},0).to({_off:true},75).wait(46).to({_off:false,y:7.2},0).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,6.5,324.2,48);


(lib.white_flare = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.white("synched",0);
	this.instance.setTransform(110,105,2.241,2.241);
	this.instance.alpha = 0.422;

	this.instance_1 = new lib.white("synched",0);
	this.instance_1.setTransform(49,4.1);
	this.instance_1.alpha = 0.422;

	// Layer 2
	this.instance_2 = new lib.yellow("synched",0);
	this.instance_2.setTransform(131,49.3);
	this.instance_2.alpha = 0.238;

	this.instance_3 = new lib.red("synched",0);
	this.instance_3.setTransform(85.8,50.3,1.629,1.629);
	this.instance_3.alpha = 0.238;

	this.instance_4 = new lib.red_circle("synched",0);
	this.instance_4.setTransform(8.9,-22);
	this.instance_4.alpha = 0.422;

	this.instance_5 = new lib.red("synched",0);
	this.instance_5.setTransform(-47.5,-58.2);
	this.instance_5.alpha = 0.238;

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFQHCIqfuD");
	this.shape.setTransform(-22,-73);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AHUIMIunwX");
	this.shape_1.setTransform(-35.1,-80.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AKaI+I0zx7");
	this.shape_2.setTransform(-57.8,-88.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFeJXIq8yt");
	this.shape_3.setTransform(-23.4,-87.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADfLMIm92X");
	this.shape_4.setTransform(-12.7,-94.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AB1JwIjpzf");
	this.shape_5.setTransform(-2.8,-93.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AADKTIgF0l");
	this.shape_6.setTransform(12.8,-96.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnWlMIOtKZ");
	this.shape_7.setTransform(61.7,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AujmMIdHMZ");
	this.shape_8.setTransform(109.2,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiXvKIEveV");
	this.shape_9.setTransform(29.8,72.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhJtVICTar");
	this.shape_10.setTransform(22,61);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiMqEIEZUJ");
	this.shape_11.setTransform(28.7,37.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlPqvIKfVf");
	this.shape_12.setTransform(46.8,47.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("Alzq2ILnVt");
	this.shape_13.setTransform(51.8,45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AtnsHIbPYP");
	this.shape_14.setTransform(103.2,53.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("Awtj+MAhbAH9");
	this.shape_15.setTransform(121.6,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AuYAVIcxgp");
	this.shape_16.setTransform(108.9,-29.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnoCVIPRkp");
	this.shape_17.setTransform(65.6,-42.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AvmG3IfNtt");
	this.shape_18.setTransform(122.3,-70.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aw4IQMAhxgQf");
	this.shape_19.setTransform(122.7,-79.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqnIJIVPwR");
	this.shape_20.setTransform(82.6,-78.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AscLEIY52I");
	this.shape_21.setTransform(97.2,-100.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnrLoIPX3P");
	this.shape_22.setTransform(66.7,-103.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlzLPILn2d");
	this.shape_23.setTransform(50.4,-104.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AisIQIFZwf");
	this.shape_24.setTransform(30.5,-83);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai3LMIFv2X");
	this.shape_25.setTransform(31.6,-101.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABOv/Iibf/");
	this.shape_26.setTransform(6.8,75.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFNpIIqZSR");
	this.shape_27.setTransform(-22.3,38.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGpp9ItRT7");
	this.shape_28.setTransform(-32.9,40.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AJCpSIyDSl");
	this.shape_29.setTransform(-46.8,39.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AL9p5I35Tz");
	this.shape_30.setTransform(-65.6,43.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("AKhmhI1BND");
	this.shape_31.setTransform(-56.4,21.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGbjMIs1GZ");
	this.shape_32.setTransform(-33,-0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("ATAoBMgl/AQD");
	this.shape_33.setTransform(-109.2,26.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("AQSkaMggjAI1");
	this.shape_34.setTransform(-103.1,5.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,1,1).p("ARyjbMgjjAG3");
	this.shape_35.setTransform(-113.4,-3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("ARrCfMgjVgE9");
	this.shape_36.setTransform(-117,-45.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1,1,1).p("AROEYMgibgIv");
	this.shape_37.setTransform(-105.6,-58.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("ARALaMgh/gWz");
	this.shape_38.setTransform(-94.3,-99.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFFF","#4A439D","#B674B3"],[0,0.714,1],0,0,0,0,0,111).s().p("AsFMHQlClCAAnFQAAnFFClAQFAlCHFAAQHGAAFAFCQFCFAAAHFQAAHFlCFCQlAFBnGAAQnFAAlAlBg");
	this.shape_39.setTransform(9.5,-21.8);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-231.8,-179.3,463.7,358.7);


(lib.frog1_Smile = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.frog_blink();
	this.instance.setTransform(1,-30);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXgFIgCAFQgKAGghAAQAWgBAXgKg");
	this.shape.setTransform(6.5,-12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVgHIAAgFIArAZQglgMgGgIg");
	this.shape_1.setTransform(-12.9,-14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6gQIAbAPQAjAKA2gNQgUANgaAGQgKACgHAAQgjAAgSghg");
	this.shape_2.setTransform(-3.4,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBgMQAEAAAHAHQgOgIgDANQgCAGABAIQgFgbAMABg");
	this.shape_3.setTransform(-17.6,-19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAgHIgJAAQAegRgRAlQADgQgHgEg");
	this.shape_4.setTransform(11.9,-15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAvA1QhzArhRidIAWARQAdAUAhAMQBpAnBuguQgrAzg8AVg");
	this.shape_5.setTransform(-2.9,-13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiVg9IAXARQAdAUAgAMQBpAnBtguQgrAzg7AVQgYAJgXAAQhVAAhAh7g");
	this.shape_6.setTransform(-2.9,-13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF02F1").s().p("AhGBxIABgJIABgTQABgLgCgIQgBgIgGAAIgGABQgBABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIACABQAAAKgEAAQgFABgHgJQgFgJACgDQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAAAAAIAIgDIARgHIARgFQAKgBALADIAMAEIBShBQgDgEAAgCQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIACgBIg0heIAfABIA5BhIhxBZQABALgCADIgCACIARADIAEgEIAAAAIgEgFQgBgDADABIAHAEIAFACIgIAQIgcgCIgJAGIAgANIACABIgCgDQgCgEADgDQAFgDAGAFQACAEgCAFIgGAIIgFADIgogTIgMAGIAFALIANgDQAEgGACADQAEACACAEIACAFIgeALg");
	this.shape_7.setTransform(10.8,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag4CGIgLgJIgEgDIgCgEQgBgFABgFIACgUQACgKgHgHQADADgFADQgEADgDAAQgEAAgDgDIgGgGQgDgFAAgGQAAgHAEgEQAFgEAGgCIANgGIAMgEQALgBAMABQAEABAFACIAHABQAIgBAGgGIAIgJIAOgMIAMgJIAMgIIASgSQAAAAgBABQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgEIADgDQAAAAAAAAQABgBAAAAQAAgBgBAAQAAgBAAgBQgCgFgDgFIgGgJIgLgSIgKgTIgJgRQgEgJgGgGIAMAEQAGACAHAAIAGAAQAEgBACgCIACgHQABgFgBgCQADADADAGIAFAKQAMASAKAUQAIASAKARQAEAHACAHQACAHgFAFIgdAVIhOA+IAAAIQAAADAEACIAFAAIACAAIgCgGQAAgEADgBQAFAAAEAEQAFAEAAAFIgEAKQgCAFgFABQgFABgHgBQgHgBgEADIAKAEIAEADQAAAAABAAQABABAAAAQABAAAAAAQAAAAAAAAQABgHAFAAQAFgBAFAEQADAEgEAIIgFAHQgCAEgFABQgDABgCgCIgHgEIgHgDIADADIAAACIgBACQgCADgEACIgJADIgHADIgIADIgBAAQgGAAgFgEgAgqBvQgEACADADIAHAAIAEgBQgBgEAEAAIgHgEIgGAEg");
	this.shape_8.setTransform(10.8,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAMIA1ggIgEAWIAOATg");
	this.shape_9.setTransform(-31.6,24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguAIIAJgVIBKgSIgIAeIASAPIhLASg");
	this.shape_10.setTransform(12.3,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Ai8AqIF5hU");
	this.shape_11.setTransform(-11.1,20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAAQABgDABAAQADAAAAADQAAAEgDAAQgBAAgBgEg");
	this.shape_12.setTransform(-1.9,-29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAMQgEgFAAgHQAAgGAEgFQAEgFAEAAQAFAAAEAFQAEAFAAAGQAAAHgEAFQgEAFgFAAQgEAAgEgFg");
	this.shape_13.setTransform(-2.5,-29.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAAQAAgDACAAQADAAAAADQAAAEgDAAQgCAAAAgEg");
	this.shape_14.setTransform(5.7,-28.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIALQgEgEAAgHQAAgGAEgFQAEgFAEAAQAFAAAEAFQAEAFAAAGQAAAHgEAEQgEAGgFAAQgEAAgEgGg");
	this.shape_15.setTransform(5.1,-28);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAMQgCgBAAgEIACgHQADgMAEABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgCAIIgEAIQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_16.setTransform(-5.6,-19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDAIQgCgEAAgEQAAgEACgDQACgEABAAQACAAADAEQABADAAAEQAAAEgBAEQgDAEgCAAQgBAAgCgEg");
	this.shape_17.setTransform(-0.4,-18.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAFAYQgQgFgRgQQgOgKgIgWQADAIAJAKQALALAVAMQAUALAlAGIgOABQgNAAgTgGg");
	this.shape_18.setTransform(9.1,21.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABlCGQgVgEgggNQgggOgcgeQgggegUg0IgIgTQgGgTgOgdQgNgdgRgfIALAPQAMAOAQAZQARAZAQAiQAPAhAbAjQAaAjAiAZQAjAZAkAGIAAABIgWgDg");
	this.shape_19.setTransform(-5,12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMCqQgTgHgfgZQAAgBgIgEQgIgEgTADIgIABQgHABgKgCQgLgBgIgGQgJgHgOgFIgagJIgMgDIgHAAIgNgCQgHgBgDgFQgEgEAFgJQAIgLAIgHQAIgIAFgJQAGgIAAgNIgCgXQgBgJAEgHQAEgIANgDIACgDQABgDABgKQABgMAFgKQAEgLAIgEQAFgCgBgKIgCgVQgBgMADgIQACgIgEgFQgEgFgDgGQgCgGAHgLIALAPQALAOAWAVQAWAVAhAUQAgAVAoAMQArANA0gCQA0gDA9gYIAFADQAEADACAGQACAHgHAKQgFAJgBAXQgCAVAAAfIACBAIADA6IgEADQgEACgHgCQgIgCgMgNQgMgMgLABQgLAAgHAGQgIAGgCADQgEAFgMAAQgMAAgNgIQgIgFgGgDQgGgCgJACQgJACgOAHQgPAIgNAEQgFACgGAAQgIAAgMgEg");
	this.shape_20.setTransform(-1.8,12.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhDBPIAHgQQAIgPAQgYQAPgXAVgWQAYgXAfgPIgFgGQgEgGABgHQABgJANgJIgFAGQgEAGABAIQABAJAOAJIgQALQgPANgWAVQgUAUgVAcQgVAcgMAig");
	this.shape_21.setTransform(27,16.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAARIAAgVIAAgWIAAAOIABAXQAAALgBAFIAAgKg");
	this.shape_22.setTransform(12.4,-26.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBAAQABgEAEgCIgDACQgBAEgDAHIACgHg");
	this.shape_23.setTransform(12.7,-29.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AACAAQgCgDgDgBIADABQADACABAGIgCgFg");
	this.shape_24.setTransform(11.8,-28.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAGQABgGADgEQABgFAGgBIgFAEQgEAFgCAMIAAgFg");
	this.shape_25.setTransform(13,-24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAwQgGgFgDgFQgDgGAHgDIgCgEQgCgDABgDQABgEAHACIgDgEQgDgCgBgDQgBgDAHACIgDgDQgDgDAAgBQgBgCAEgBIgDgDQgCgCgBgCQAAgDAEgCIgEgFQgEgFgBgGQgBgGAIgCIgCgEQgBgEABgDQABgDAFABQAIADABAHQADAGgBALQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAEABgCANIAAAAIAAAAIADgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQABADgFAIIAEAEQADAEgGAIIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABABAAQABACgEAHIAEADQADACgCAGQgDAFgRAIIgEgFg");
	this.shape_26.setTransform(12.2,-29);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAxQgHgFgDgFQgEgGAIgDIgCgEQgCgEABgDQABgDAIABIAAAAIAAAAIgEgDQgDgDgBgDQgBgCAIABIAAAAIAAAAIgEgDIgDgEQgBgCAFgBIgDgCQgDgDgBgDQgBgCAGgCIgFgFQgFgGgBgGQgCgGAJgCIgBgEIgBgHQABgEAGACQAJADABAHQAEAGgCAMQABgBAFABQAEAAgCAOIADgBQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQABADgGAIIADACQACACABADQABAEgFAGIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgFAHIAFADQAEADgDAFQgCAGgUAIIgFgGg");
	this.shape_27.setTransform(12.3,-29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AAWADQgDAOgHAJQgIAJgHgBQgKgCgFgKQgFgLACgNQADgOAHgJQAIgJAIABQAJACAFAKQAFALgCANg");
	this.shape_28.setTransform(-2.8,-29.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAiQgKgCgFgKQgFgLACgNQADgOAHgJQAIgJAIABQAJACAFAKQAFALgCANQgDAOgHAJQgHAIgGAAIgCAAg");
	this.shape_29.setTransform(-2.8,-29.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ADOC/QgJgBgJgNQgMgQgHgDQgHgDgCACIgDADQgGAJgMAHQgMAHgLABQgMABgFgKQgFgKgHgEQgIgDgGAAIgGABQgPAPgWAHQgWAHgTgDQgVgDgNgPQgMgPgJgGQgIgFgEgBIgEAAIgKAFQgKAEgQgBQgPgBgQgPQgQgPgWgFQgWgFgQAAIgSABQgFgUAHgOQAIgOAPgHQAJgGADgMQACgMAAgKIgBgMQgBgQAGgJQAGgIAGgCIAHgBQgCgbAGgMQAGgLAHgDIAHgCQgFgZADgNQADgNABAAQgLgQgBgLQAAgLADgGIAEgFQAjBAAxAgQAwAfAxAIQA0AJAsgFQAtgFAbgHIAdgJQALgIAHAEQAGADACAGIACAHQgKANgFAbQgEAZgBAhQAAAhABAfIAEAyIACAVIgEAFQgDAFgGAFQgFADgHAAIgCAAg");
	this.shape_30.setTransform(-1.7,12.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AAXABQAAARgHAKQgHALgJABQgKgBgGgMQgGgLAAgQQABgQAHgLQAHgLAIgBQAKACAGALQAHAMgBAPg");
	this.shape_31.setTransform(5.2,-28.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAbQgGgMAAgPQABgQAHgLQAHgLAIgBQAKABAGAMQAHAMgBAPQgBARgGAKQgIALgIAAQgKgBgGgLg");
	this.shape_32.setTransform(5.2,-28.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF02F1").s().p("AA3C4QgFgDAAgHQABgHAFgHQAGgHgCgKQgCgKgGgKQgHgJgJgGQgGgDgRAAIglAAIgsABQgVAAgOgCQgPgCgCgGQgDgHgMgRQgLgSgJgaQgJgbAEggQADgiAbgpIAXgOQAWgNAhgQQAhgRAfgKQAigLAZAFQAZAEAGAcQAGAkgRAiQgQAjgdAfQgcAdgcAZIg0ArIANAAIAegBIAjgCQATgCAOgEQAUgFAXAIQAWAHARAMQAJAGAIAJQAJAIAEALQADALgGAMQgFANgLAFQgKADgDgDQgDgEAEgKQAGgSgFgNQgFgOgMgIQgMgIgPgBIAHAKQAHAJAIAOQAHAOADAMQADANgHAGQgKAIgGgFQgFgEgBgIQgBgIADgDIACgJQABgIgGgLQgGgLgUgJIADAKQAEAKADANQADAOgBAMQAAALgHAGQgHAEgEAAIgFgBg");
	this.shape_33.setTransform(32.4,19.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF02F1").s().p("AAmDbQgogLgjgVQgjgWgbgXQgagXgPgQIgOgRQgHgKAFgIQAEgIAIgGQAJgGACgGQADgGgLgGQgSgJgSgPQgSgNgMgUQgLgUADgXQADgRAPgNQAQgNAWgJQAWgKAVgGIAkgMQALgEAHgLQAHgKAFgLQAGgMAIgIQAIgJALgGQAKgGAKAEQAEABAIAIQAIAJAHAIQAGAJgDADQAcgUASABQARABAKANQAKANAEASQAEARABANIAAAOQAqAgAPAbQAQAbgCAVQgBATgKAPQgKAPgKAHIgLAIQAWARANAVQAMAVAGATQAGAUACAMIACANQgvAkgtAHQgTAEgTAAQgZAAgYgHg");
	this.shape_34.setTransform(-1.4,-12.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ABIDgQgugJgngSQgogRgagPIgbgPQgIgGgNgNQgOgOgMgQQgLgRgBgNQgBgOASgFQgEgJgIgEIgQgKIgQgPIgOgPQgOgRgFgVQgGgUAKgVQAOgZAWgLQAWgLAagHQAZgGAWgJQAPgHAIgMIAPgYQAHgOAMgKQANgLAOgBQAMgBANAMIAGAHIAIANQAEAGgBABQAegUATABQATABAKAOQAKAOAEASQAFASABANIAAAPQAsAiASAcQARAcgBAWQAAATgKAPQgKAPgJAHIgLAIQAOARALAUQAKAUAHASQAHASADAMIAEAMQgbAngqAJQgUAEgVAAQgWAAgYgFg");
	this.shape_35.setTransform(-1.5,-13.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAAAGIAAgNIAAAHIABAIIgBgCg");
	this.shape_36.setTransform(-5.7,-33.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AACABQgCgDgCgCIACABQACACABAHIgBgFg");
	this.shape_37.setTransform(-6.1,-34.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgCADQABgEAEgDIgDAEQgBAAgBAEIAAgBg");
	this.shape_38.setTransform(-5.2,-33.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AACAAQgDgCgEAAIAEAAQACABAFAEIgEgDg");
	this.shape_39.setTransform(-6,-31.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgBABQABgCACgBIgCACIgBADIAAgCgAACgCIAAAAIAAAAg");
	this.shape_40.setTransform(-4.9,-31.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAABQgBgFACgDIgBADQAAAEAAAIIAAgHg");
	this.shape_41.setTransform(-4.8,-29.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AACAAQgCgGgHgBQABgBAGAEQAEADADAJIgFgIg");
	this.shape_42.setTransform(-5.5,-29.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgLAtQgEgEADgEIADgEQgFgFAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQgIgGACgFQACgFABAAQgHgGAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBQgEgIABgDQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIADAAQgEgLABgHQABgHAHgFQAFgDABADQAAADAAAEIAAAEQAIABAAAGQABAFgDAGIgDAHQAFAAAAADQAAADgCACIgCADQAHAAgDAEIgDAGQAGgCAAACQAAADgCADIgDAEQAHgDACADQABADAAAEIgBAEQAHABgCAGQgBAHgEAGIgFAGQgRgDgEgFg");
	this.shape_43.setTransform(-5.2,-32.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgNAvQgEgEADgEIAEgEQgGgFAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIACgBQgGgEAAgEQAAgDABgDIACgCQgHgHAAgCQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAIADgBQgEgIABgDQABgDADgBIADAAQgFgKACgIQACgHAIgFQAEgDAAACQACADAAAEIAAAFQAJAAAAAGQAAAGgDAGIgDAHQAFAAAAADQAAADgCADIgCADQAFAAAAADIgDAEIgCADQAHgDAAADQAAADgDAEIgDAEQAIgEABADQACADgBAEIgBAFQAIAAgCAHQgCAGgFAHIgFAHQgTgDgEgFg");
	this.shape_44.setTransform(-5.3,-32.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AArC8QgGgCgCgGQgCgHAKgPIABgJQAAgJgEgLQgFgLgNgGQgLgDgUABIgvADQgZACgUgCQgUgBgHgJQgGgIgHgVQgGgVgFgcQgEgaAAgdQAAgeAHgZQAIgZASgPIASgLQARgKAbgNQAbgOAfgJQAbgJAaACQAaACAOATQACAAAFAMQAEAMAAAWQABAWgNAfQgOAfgjAmQgkAlhCAtIANAAIAdgCIAegDQAQgCAIgDQAKgEARABQAQABAUAGQAUAGAQAOQARANAHAWIgBAIQgBAIgEAKQgEAKgHAGQgJAGgNgCIgCgDQgCgDACgIQAAgJAHgQIgDgJQgDgIgIgJQgIgJgQgDIAIALQAHAKAHAOQAHAPgBANQgBANgPAGIgHAAQgFgBgEgHQgDgGAEgQIACgHQABgGgFgKQgEgJgQgIIAFALQAEALADAPQADAPgFAMQgEAMgRACIgGgCg");
	this.shape_45.setTransform(33.4,19);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAXAnQgQgfgRgXQgTgYgNgOIgOgPQAPgGACgIQACgIgDgHIgEgHQANALgBAJQAAAIgFAEIgGAFQAdAUARAbQAUAYAMAaQAMAZAFARIAFARIgLAQQgHgjgQgfg");
	this.shape_46.setTransform(-20.7,13.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF02F1").s().p("AhXCxQgHgGACgMQABgMAFgMIAKgWIAFgKQgWAGgHAKQgIAKAAAIIABAJQACAEgCAHQgCAIgGAEQgGADgJgIQgGgIAFgMQAEgMAKgMIARgVIAJgJQgPgBgNAGQgNAGgHANQgHANAEASQACAKgEAEQgDADgJgFQgKgHgEgMQgEgNAFgLQAFgKAKgHQAKgIAKgEQASgJAXgEQAXgEAUAHQANAGATAFIAiAIIAdAFIANACIgsgyQgYgegYghQgYgjgLgkQgLglALgjQAKgaAZgBQAZAAAeAPQAgAPAeAVQAeAVAUAQIAUARQAVAtgBAgQgCAjgNAZQgNAYgNAQQgOAPgEAHQgEAHgVgCQgWgBgcgFIgxgJQgYgEgIADQgKAEgIAIQgIAJgDAKQgEAKAFAHQAFAIgBAHQgBAHgGACIgCAAQgFAAgHgGg");
	this.shape_47.setTransform(-27,13.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhFC8QgRgEgCgNQgDgMAFgOQAFgPAGgKIAGgLQgQAGgGAJQgGAIAAAHIAAAHQADAQgFAGQgEAGgGAAIgGAAQgPgJABgNQACgNAJgNQAIgOAJgIIAKgKQgRAAgJAIQgKAIgEAIIgEAIQAGAZgDAIQgDAHgBgBQgNABgHgIQgHgHgCgKQgDgLAAgHIABgJQAKgUATgLQASgLAUgEQAUgDARACQARACAIAEQAJAFAPAEIAeAIIAcAGIAMACQg6g2gegrQgegqgIggQgJghAEgWQADgVAHgLQAHgLABAAQARgSAaACQAYADAcANQAcANAZARIApAeIAQANQATAXABAiQACAigJAjQgJAkgMAcQgMAbgJAKQgIAHgUgBQgVgCgYgFIgugKQgTgFgMACQgOAEgGAKQgGAKgBAJIgBAKQAIAQgDAGQgDAHgGAAIgFABIgBAAg");
	this.shape_48.setTransform(-27.8,13.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.3,1,1).p("AjuhmIHdDN");
	this.shape_49.setTransform(-25.1,-0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.8,1,1).p("AgUgVQAAABAAAIQAAAJAFAIQAFAJAMAFQAOAEAEgDQADgEgFgIQgEgHgJgH");
	this.shape_50.setTransform(-30.2,8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF02F1").s().p("AACATQgMgFgFgJQgFgIAAgJIAAgJIAZAPQAJAHAEAHQAFAIgDAEQgCACgEAAQgEAAgIgDg");
	this.shape_51.setTransform(-30.2,8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.8,1,1).p("AgaAQQAAgBAFgKQAFgHAGgLQAHgLADgDQAGgDACAMQABAKgDAZQAAAFgBAHQAAgBACgHQABgCABgCQACgGACgHQAEgHADgFQAEgEACAFQACAFgBAT");
	this.shape_52.setTransform(-27.3,12.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF02F1").s().p("AAJAWIAEgMQAEgJADgDQAEgFACAFQACAEgBAVgAgaAVIAFgKIALgTQAHgKADgDQAGgEACANQABAKgDAYg");
	this.shape_53.setTransform(-27.3,12.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.8,1,1).p("AgTAFQABgBAGgFQAGgIAGgIQAJgHAGgCQAFgBAAAMQgBAMgLAe");
	this.shape_54.setTransform(-31.1,12.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF02F1").s().p("AgTAFIAHgGIAMgQQAJgHAGgCQAFgBAAAMQgBAMgLAeg");
	this.shape_55.setTransform(-31.1,12.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DB0505").s().p("AAnB5QgegCgQgDIgTgEQg4gRgmgdQgngcgXghQgYgegMgeQgNgdgEgSIgEgTQAiBPAwAtQAwAvA2AWQA2AXAzAFQA0AFArgEQAsgEAZgGIAagHQgcATgjAJQgkAJgkABIgXAAIgrgBgADxBUIgBAAIABAAg");
	this.shape_56.setTransform(-25.1,1.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AA9hpQAAABgEAMQgEAMgHARQgHASgLASQgKASgNAKQgLAMgQABQgBgBgMgGQgMgHgOgBQgOgDgFAIQgFAKANAhQAAABgGAJQgGAJgEAMQgEALAGAHQAFAHAWgEQAAABAFAGQAFAGAIADQAIADAIgKQAAABABAEQACAEADAAQAEAAAHgJQAHgMgBgQQgBgQgEgMQgDgNgBgBQABAAALgHQAMgGASgNQASgMAQgSQAQgTAHgZQAGgZgJgdg");
	this.shape_57.setTransform(-24.2,5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF02F1").s().p("AgYBxIgBgFQgIAKgIgDQgIgDgFgGIgFgHQgWAEgFgHQgGgHAEgLQAEgMAGgJIAGgKQgNghAFgKQAFgIAOADQAOABAMAHIANAHQAQgBALgMQANgKAKgSQALgSAHgSIALgdIAEgNIAYgLQAJAdgGAZQgHAZgQATQgQASgSAMQgSANgMAGIgMAHIAEAOQAEAMABAQQABAQgHAMQgHAJgEAAQgDAAgCgEg");
	this.shape_58.setTransform(-24.2,5);

	this.addChild(this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.1,-38,99.3,76.1);


(lib.frog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,correct:6,incorrect:149});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_42 = function() {
		/* _global.attempt.gotoAndPlay("pop");
		_global.main.answer_display.prep_txt = _global.attemptText
		_global.assim = true*/
	}
	this.frame_148 = function() {
		/* gotoAndStop("static");*/
	}
	this.frame_166 = function() {
		/* gotoAndStop("static");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(106).call(this.frame_148).wait(18).call(this.frame_166).wait(1));

	// Arrow
	this.instance = new lib.arrow("synched",0);
	this.instance.setTransform(-66.7,-20.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({rotation:-11.7,x:-435.8,y:-16.1},21).to({_off:true},1).wait(125));

	// Frog frames
	this.instance_1 = new lib.frog1("synched",0);

	this.instance_2 = new lib.frog2("synched",0);
	this.instance_2.setTransform(-10.8,0);

	this.instance_3 = new lib.frog3("synched",0);
	this.instance_3.setTransform(-5.6,0.2);

	this.instance_4 = new lib.frog4("synched",0);
	this.instance_4.setTransform(1.6,-0.3);

	this.instance_5 = new lib.frog5("synched",0);
	this.instance_5.setTransform(-21.3,-0.3);

	this.instance_6 = new lib.frog5copy("synched",0);
	this.instance_6.setTransform(-21.2,-0.3);

	this.instance_7 = new lib.frog1_Smile("synched",0);
	this.instance_7.setTransform(0.3,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIgBgKIgBgCQAEADAAAIQABAFgBAGIgCADQACgHgCgGg");
	this.shape.setTransform(3.5,-27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAHQACgHAFgHQAGgIALAAQAKAAARAPIgLgEQgLgEgLACQgNACgHAUIACgJg");
	this.shape_1.setTransform(6.3,-27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF02F1").s().p("AgEAvQgFgCgDgDQgFgEgEgGQgDgFgBgGIAAgHQgEgEAAgGIAAgCQgCgNAHgNIAHgKQAIgJAJgDQAPgBAHANIAAAAQAFAHABAJQACAHAAAHIgBAcIAAACQgEAPgNAFIgFABIgFAAIgGAAg");
	this.shape_2.setTransform(5.3,-28.3);

	this.instance_8 = new lib.frog6("synched",0);

	this.instance_9 = new lib.frog7("synched",0);
	this.instance_9.setTransform(0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},22).to({state:[{t:this.instance_7},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},30).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},70).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-38,99.3,76.1);


(lib.electircalwires = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		electrical1.gotoAndStop(1);
		electrical2.gotoAndStop(1);
		electrical3.gotoAndStop(1);
		electrical4.gotoAndStop(1);*/
	}
	this.frame_1 = function() {
		/* stop();
		electrical1.gotoAndPlay(2);
		electrical2.gotoAndPlay(2);
		electrical3.gotoAndPlay(2);
		electrical4.gotoAndPlay(2);*/
	}
	this.frame_2 = function() {
		/* electrical1.gotoAndPlay(2);
		electrical2.gotoAndPlay(2);
		electrical3.gotoAndPlay(2);
		electrical4.gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(18));

	// Flash
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(74,67,157,0)"],[0,1],0,0,0,0,0,122.9).s().p("AtZNaQljlkAAn2QAAn1FjlkQFkljH1AAQH2AAFjFjQFkFkAAH1QAAH2lkFkQljFjn2AAQn1AAlkljg");
	this.shape.setTransform(3,19.7);

	this.instance = new lib.white_flare("synched",0);
	this.instance.setTransform(1.8,48.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:3,y:19.7}}]},2).to({state:[]},1).to({state:[{t:this.shape,p:{scaleX:1.1,scaleY:1.1,x:2.9,y:19.7}}]},2).to({state:[]},2).to({state:[{t:this.shape,p:{scaleX:1.2,scaleY:1.2,x:2.9,y:19.6}}]},2).to({state:[]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:30,x:-11.3,y:45.9},7,cjs.Ease.get(1)).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(74,67,157,0)"],[0,1],0,0,0,0,0,122.9).s().p("AtZNZQljljAAn2QAAn1FjlkQFkljH1AAQH2AAFkFjQFjFkAAH1QAAH2ljFjQlkFkn2AAQn1AAlklkg");
	this.shape_1.setTransform(9.5,19.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12).to({_off:false},0).wait(8));

	// Wires
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCF6D2").s().p("AjEBQIA6gpQA/gnAagFIBBgOQAlgLAVgVQAegiAIgLIBVAAQgjBAhQATQgkAKgqACQgXABgTALIiZBWg");
	this.shape_2.setTransform(192.4,-157.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#968311").ss(1,1,1).p("AATgIIglAR");
	this.shape_3.setTransform(158.7,-141.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#968311").ss(1,1,1).p("AAPgEIgdAJ");
	this.shape_4.setTransform(157.1,-144.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#968311").ss(1,1,1).p("AALAAIgWAA");
	this.shape_5.setTransform(157.1,-147.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#968311").ss(1,1,1).p("AgHgaQAXASgLAj");
	this.shape_6.setTransform(168.9,-147.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#968311").ss(1,1,1).p("AgNgWQAbgCAAAw");
	this.shape_7.setTransform(171.4,-148.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#968311").ss(1,1,1).p("AjMBmQAdgVAbgEQADgBAqgEQAmgDAbgHQBTgVAgg8IAVgBQAcgDAagJQBWgbAzhHIjAgCQgpATgDAbQADAVgBAEQgCAEgjgDQgqgDgSAGQgVAHgjAfQgoAhgMAIQgRALgWABIheAEQgKAAAKAsQAEARAMAEQALADABAJQABAOAKADQAJADAEgHQAEgJAXgRg");
	this.shape_8.setTransform(187.1,-153.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9DC0B").s().p("Aj0CEQgKgDgBgOQgBgJgLgDQgMgEgEgRQgKgsAKAAIBegEQAWgBASgLQALgIAoghQAjgfAVgHQASgGAqADQAkADABgEQABgEgDgVQADgbApgTIDAACQgyBHhXAbQgaAJgcADIgVABQgfA8hUAVQgbAHglADIguAFQgbAEgcAVQgYARgEAJQgCAFgGAAIgFgBg");
	this.shape_9.setTransform(187.1,-153.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFAE3").s().p("AgNgBIANgIIANAJIgOAKg");
	this.shape_10.setTransform(-189.2,-150.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFAE3").s().p("AALAyQhahIgihVIA7ABIAvBTQA5BXBAAjIgSAJQgngVguglg");
	this.shape_11.setTransform(-201.6,-162.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#968311").ss(1,1,1).p("AgHgJIAPAT");
	this.shape_12.setTransform(-177.3,-144.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#968311").ss(1,1,1).p("AgIgHIARAP");
	this.shape_13.setTransform(-180.1,-142.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#968311").ss(1,1,1).p("AgJgJIATAT");
	this.shape_14.setTransform(-182.8,-140.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#968311").ss(1,1,1).p("AAYgdQAAAsgvAP");
	this.shape_15.setTransform(-187.7,-151.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#968311").ss(1,1,1).p("AAbgbQAEAJgGALQgKAVgqAO");
	this.shape_16.setTransform(-190.2,-153.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#968311").ss(1,1,1).p("AjIilIA6BWQBGBaBCAfQAwAZAOAYQAOAZAkAxIAQgHQAWgKAWgSQAjgcAAgRQgcgLgggSQhAgkgYgkQgZgmgcg7QgNgegKgWg");
	this.shape_17.setTransform(-195.9,-157.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9DC0B").s().p("AA4BbQgOgYgwgZQhCgfhGhaIg6hWICxAAIAXA0QAcA8AZAlQAYAjBAAlQAgASAcAKQAAASgjAcQgWASgWAKIgQAHQgkgwgOgag");
	this.shape_18.setTransform(-195.9,-157.7);

	this.electrical4 = new lib.electrical4();
	this.electrical4.setTransform(128.2,119);

	this.electrical3 = new lib.electrical3();
	this.electrical3.setTransform(-94,121.9);

	this.electrical2 = new lib.electrical2();
	this.electrical2.setTransform(116.1,-79.8);

	this.electrical1 = new lib.electrical1();
	this.electrical1.setTransform(-120.8,-100.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.electrical1},{t:this.electrical2},{t:this.electrical3},{t:this.electrical4},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-175.3,434,350.2);


(lib.balloon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:0,tied:8});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_8 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(10));

	// Labels
	this.text = new cjs.Text("", "16px 'TimesNewRomanPSMT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 73;
	this.text.setTransform(-1.9,-41.4,0.999,1.007);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(8).to({_off:false},0).wait(10));

	// Balloons
	this.text_1 = new cjs.Text("", "16px 'TimesNewRomanPSMT'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 66;
	this.text_1.setTransform(-4.2,-42.1,0.999,1.006);

	this.text_2 = new cjs.Text("", "16px 'TimesNewRomanPSMT'", "#6A0F0F");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 66;
	this.text_2.setTransform(-3.4,-41.4,0.999,1.006);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#19A3A9").s().p("AgGAAIAAAAQAGgCAHACIAAABQgHgBgGAAg");
	this.shape.setTransform(-0.7,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19A3A9").s().p("AgFAAIAAAAQAFgBAGABIAAABQgGgBgFAAg");
	this.shape_1.setTransform(-0.7,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF1438").s().p("AgIgIIAJAAIAMAPIgZACg");
	this.shape_2.setTransform(-0.4,-5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(0.3,1,1).p("AAAkWIAAIt");
	this.shape_3.setTransform(-0.6,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF2222").s().p("AgfApQANgvAKgTQAIgTAQAEQAQAEAAAXQAAAPgYAVQgTASgQAAIgEAAg");
	this.shape_4.setTransform(9.2,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmALQguhIhAgTIARACQAVAEAUAMQA+AoAZBnQgLghgYglg");
	this.shape_5.setTransform(8,-40.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C40202").s().p("AghCdQg0g+AAhdQAAg4AXgyQAYg4AsgbQAbgRAVgBQAdgDACAgQABAcgyAuQhVBPAnB2QAKAfAKAcQAXA2AMgCIgJABQgeAAgngyg");
	this.shape_6.setTransform(-7.4,-28.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF2222").s().p("AgpDNQgVgFgNgSIgTgkQgTgmgRhCQgXhWAqhNQAbgxALgLQAZgZArAAQAnAAAjAZQAfAWAWAmQANAXADAMQAFASgLARQgHAKgHAGQgSANgbgHQgvgOgkAOQgrARgFAuQgDAiASApQAbA7ADAMQAEATgFAFQgDADgIAAQgGAAgKgCg");
	this.shape_7.setTransform(0.7,-28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB0505").s().p("AhwCWQgwg/AAhXQAAhXAwg/QAvg9BBgBQBCABAvA9QAwA/AABXQAABXgwA/QgvA/hCAAQhBAAgvg/g");
	this.shape_8.setTransform(0.6,-28);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTDOQhlgXgfhqQgLghgBgmIAAgdQAFh8BOgzQAngZAngBQBdACAtBeQAXAvAEAuQAJCVhUA/QgqAfgrABIAHANIgeADg");
	this.shape_9.setTransform(0.4,-27.2);

	this.instance = new lib.balloon_tiedup("synched",0);
	this.instance.setTransform(8.2,187.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.text_1}]}).to({state:[{t:this.instance}]},8).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-49.7,71.1,100.5);


(lib.prep_button_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{floating:0,pause:50,"static":56,pop:62,flyaway:80});

	// timeline functions:
	this.frame_0 = function() {
		/* clip = this._name;
		lineRet = false;
		flightDone = true;
		dragging = false
		this.onPress = function() {
			if (dragging != true) {
				dragging = true;
				startX = this._x;
				startY = 0;
				trace(startX+", "+startY);
				this.gotoAndStop("floating");
				this.startDrag();
			}
		};
		this.onRelease = function() {
			this.stopDrag();
			_global.scrollAgain -= 1;
			dragging = false
			if (this.hitTest(_global.main.dropTarget)) {
				this.enabled = false;
				_global.attemptReady = true;
				_global.attempt = this;
				_global.attemptText = balloon.prep_txt;
				trace(_global.attempt);
				trace("_global.attemptReady = true");
				trace(_global.attemptText);
				this._x = _global.tiedX;
				this._y = _global.tiedY;
				balloon.gotoAndStop("tied");
				this.gotoAndStop("floating");
			} else {
				flyaway = true;
			}
		};
		this.onEnterFrame = function() {
			if (attemptReady == true && _global.attemptText != balloon.prep_txt && _global.balloonPop != true && flightDone == true || this._x<_global.leftPause && dragging != true|| this._x>_global.rightPause && dragging != true) {
				gotoAndStop("pause");
			} else {
				if (this._currentFrame>50 && _global.attemptReady != true) {
					this.gotoAndPlay(random(50));
					this.enabled = true;
				}
			}
			if (flyaway == true) {
				flightDone = false;
				balloon.gotoAndStop("normal");
				this.gotoAndStop("floating");
				this.enabled = false;
				this._y -= 10;
			}
			if (this.hitTest(_global.main.flyStop)) {
				//flyStop above main stage, for some reason checking _y did not work
				flyaway = false;
				this._x = startX;
				this._y = 100;
				lineRet = true;
			}
			if (lineRet == true) {
				this._y -= 5;
			}
			if (_global.lastPop == this) {
				balloon.prep_txt = _global.attemptText;
				this._y -= 5;
				flightDone = false;
			}
			if (this.hitTest(_global.main.ballTop) && flightDone != true && _global.attemptText == balloon.prep_txt) {
				lineRet = false;
				_global.lastPop = blank;
				this.enabled = true;
				this.gotoAndPlay(random(50));
				_global.scrollAgain += 1;
				flightDone = true;
				//_global.noScroll = false;
			}
			if (this.hitTest(_global.main.ballTop) && flightDone != true && lineRet == true) {
				lineRet = false;
				_global.lastPop = blank;
				popRet = false;
				this.enabled = true;
				this.gotoAndPlay(random(50));
				flightDone = true;
				_global.scrollAgain += 1;
				trace(_global.scrollAgain);
			}
		};
		*/
	}
	this.frame_49 = function() {
		/* gotoAndPlay("floating");*/
	}
	this.frame_50 = function() {
		/* stop();
		this.enabled = false;*/
	}
	this.frame_56 = function() {
		/* stop();
		this.enabled = false*/
	}
	this.frame_62 = function() {
		/* this.enabled = false
		_global.balloonPop = true*/
	}
	this.frame_79 = function() {
		/* stop();
		_global.attempt = blank;
		_global.attemptReady = false;
		_global.balloonPop = false;
		_global.noScroll = false
		this._x = startX;
		this._y = 100;
		_global.lastPop = this;
		_global.noScroll = true
		this.gotoAndStop("floating")*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1).call(this.frame_50).wait(6).call(this.frame_56).wait(6).call(this.frame_62).wait(17).call(this.frame_79).wait(32));

	// Ballon
	this.balloon = new lib.balloon_mc();
	this.balloon.setTransform(17.9,50.9);

	this.timeline.addTween(cjs.Tween.get(this.balloon).to({y:44.9},14,cjs.Ease.get(0.75)).to({y:55.9},22).to({y:50.9},13,cjs.Ease.get(-0.35)).wait(1).to({x:17.4,y:50.4},0).wait(6).to({_off:true},6).wait(18).to({_off:false},0).to({y:-335.3},30,cjs.Ease.get(0.5)).wait(1));

	// Explode
	this.instance = new lib.balloons_hit("synched",0);
	this.instance.setTransform(21.9,24.4,0.28,0.384);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62).to({_off:false},0).wait(4).to({scaleX:0.51,scaleY:0.51,x:25.9,y:25.4},0).wait(2).to({startPosition:0},0).to({scaleX:0.77,scaleY:1.05,x:26.9,y:26.4,alpha:0},10,cjs.Ease.get(0.63)).to({_off:true},1).wait(32));

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF2222").s().p("AggApQAOgvAKgTQAJgTAPAEQAQAEAAAXQAAAPgYAVQgTASgQAAIgFAAg");
	this.shape.setTransform(26.7,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19A3A9").s().p("AgFAAIAAAAQAFgBAGABIAAABQgGgBgFAAg");
	this.shape_1.setTransform(16.8,43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#19A3A9").s().p("AgFAAIAAAAQAFgBAGABIAAABQgGgBgFAAg");
	this.shape_2.setTransform(16.8,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF1438").s().p("AgHgHIAIAAIAKANIgVACg");
	this.shape_3.setTransform(17,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAjxIAAHj");
	this.shape_4.setTransform(16.8,68);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnALQgvhIhBgTIASACQAVAEAVAMQA9AoAaBnQgMghgXglg");
	this.shape_5.setTransform(25.5,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C40202").s().p("AghCdQg0g+AAhdQAAg4AXgyQAYg4AsgbQAbgRAVgBQAdgDACAgQABAcgyAuQhVBPAnB2QAKAfAKAcQAXA2AMgCIgJABQgeAAgngyg");
	this.shape_6.setTransform(10.2,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF2222").s().p("AgpDNQgVgFgNgSIgTgkQgUgmgRhCQgXhWArhNQAbgxALgLQAYgZAsAAQAmAAAkAZQAfAWAWAmQANAXADAMQAFASgLARQgHAKgHAGQgSANgbgHQgwgOgkAOQgrARgEAuQgEAiATApQAaA7ADAMQAFATgFAFQgDADgIAAQgGAAgKgCg");
	this.shape_7.setTransform(18.3,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB0505").s().p("AhxCWQgvg+AAhYQAAhXAvg+QAwg+BBAAQBCAAAwA+QAvA+AABXQAABYgvA+QgwA+hCAAQhBAAgwg+g");
	this.shape_8.setTransform(17.7,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTDOQhlgXgfhqQgLghgBgmIAAgdQAFh8BOgzQAngZAngBQBdACAtBeQAXAvAEAuQAKCVhVA/QgqAfgrABIAHANIgeADg");
	this.shape_9.setTransform(17.8,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},62).to({state:[]},7).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,1.1,71.1,99.6);


// stage content:



(lib.prepositionPowerCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:7,congrats:13});

	// timeline functions:
	this.frame_0 = function() {
		/* if (_root.MMplayerType == undefined) {
			// --- upgrade not needed
			gotoAndPlay(2);
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
					
					getURL("javascript:alert('There was an error in downloading the Flash Player update. Please try again later, or visit macrmedia.com to download the latest version of the Flash plugin.')");
				}
			}
			
			// --- Start upgrade
			loadUpdater();
		}*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_7 = function() {
		/* stop();
		_global.main = this;
		_global.attempt = blank;
		_global.attemptText = blank;
		_global.attemptReady = false;
		_global.qNum = 0;
		_global.noScroll = false;
		_global.balloonPop = false;
		_global.assim = false;
		_global.lastPop = blank;
		_global.noSelect = false;
		_global.scrollAgain = 1;
		_global.tiedX = -9;
		_global.tiedY = -201.8;
		_global.rightPause = 500;
		_global.leftPause = -50;
		meanings = [];
		stems = [];
		correct = [];
		words = [];
		prepositions = [];
		//---------XML---------
		GameVars = new XML();
		GameVars.ignoreWhite = true;
		GameVars.onLoad = function(success) {
			if (success) {
				loadQuestions(this);
			}
		};
		//GameVars.load("prepositionPower.xml");
		GameVars.load("../customizer/customVars.php?action=play&gameid="+_root.gameid);
		function loadQuestions(xml_file) {
			//trace(xml_file.firstChild.childNodes[0].childNodes.length);
			for (a=0; a<xml_file.firstChild.childNodes[2].childNodes.length; a++) {
				node = xml_file.firstChild.childNodes[2].childNodes[a].attributes;
				meanings.push(node.value);
				stems.push(node.stems);
				correct.push(node.correct);
				words.push(node.words);
			}
			for (b=0; b<xml_file.firstChild.childNodes[3].childNodes[0].childNodes.length; b++) {
				node = xml_file.firstChild.childNodes[3].firstChild.childNodes[b];
				trace(node);
				trace(node.firstChild.nodeValue);
				prepositions.push(node.firstChild.nodeValue);
			}
			loadBalloons();
		}
		//----------------------
		prep_all.swapDepths(500);
		scroll_left.swapDepths(601);
		scroll_right.swapDepths(600);
		dropTarget.swapDepths(499);
		function loadBalloons() {
			if (prepositions.length<=6) {
				removeScrollers();
			}
			for (i=0; i<prepositions.length; i++) {
				prep_all.attachMovie("prep_button_mc", "prep_"+i, 100+i);
				clipName = prep_all["prep_"+i];
				setProperty(clipName, _x, 85*i);
				setProperty(clipName, _y, 0);
				clipName.balloon.prep_txt = prepositions[i];
				rndm = random(50);
				clipName.gotoAndPlay(rndm);
			}
			this.onEnterFrame = function() {
				meaning_txt = meanings[qNum];
				answer_display.stem_txt = stems[qNum];
				if (_global.scrollAgain>=1 && prepositions.length>8) {
					_global.noScroll = false;
				} else {
					if (prepositions.length>8) {
						_global.noScroll = true;
					}
				}
			};
		}
		function removeScrollers() {
			_global.noScroll = true;
			scroll_left.enabled = false;
			scroll_right.enabled = false;
			scroll_left._visible = false;
			scroll_right._visible = false;
			//xNum = (300)-(prep_all._xscale/2);
			//prep_all._x = 600-(600-xNum);
		}
		*/
	}
	this.frame_13 = function() {
		/* stop();
		prep_all.removeMovieClip();
		scroll_left.removeMovieClip();
		scroll_right.removeMovieClip();
		electric.gotoAndStop(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(5).call(this.frame_7).wait(6).call(this.frame_13).wait(8));

	// Congrats
	this.instance = new lib.playagain();
	this.instance.setTransform(299.5,387,1,1,0,0,0,62.5,17);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.playagain(), 3);

	this.text = new cjs.Text("Great job! You beat the game.", "bold 22px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 490;
	this.text.setTransform(308.5,341.8);

	this.text_1 = new cjs.Text("Congratulations!", "45px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 272;
	this.text_1.setTransform(297,174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text},{t:this.instance}]},13).wait(8));

	// invisibleStop
	this.ballTop = new lib.invisibleStop();
	this.ballTop.setTransform(333.9,350,1.347,1.005);

	this.electric = new lib.electircalwires();
	this.electric.setTransform(288.1,164.1,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ballTop}]},7).to({state:[{t:this.electric}]},6).wait(8));

	// FlyStop
	this.flyStop = new lib.flightbarrier();
	this.flyStop.setTransform(297.9,-112);

	this.instance_1 = new lib.frog1_Smile("synched",0);
	this.instance_1.setTransform(533,207.5,1,1,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.flyStop}]},7).to({state:[{t:this.instance_1}]},6).wait(8));

	// Meaning
	this.text_2 = new cjs.Text("", "bold 18px 'TimesNewRomanPSMT'", "#F9DC0B");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 271;
	this.text_2.setTransform(284.3,17.5,0.999,1);

	this.instance_2 = new lib.windows("synched",0);
	this.instance_2.setTransform(296.7,176.9,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2}]},7).to({state:[{t:this.instance_2}]},6).wait(8));

	// Answer display
	this.answer_display = new lib.answerdisplay();
	this.answer_display.setTransform(286.8,177.3,0.999,0.999);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A439D").s().p("Ag2AQQADgPAEgOQAKgfAMAAIAYADQAaAGAPAPQAXAWgOArg");
	this.shape.setTransform(194,215.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A439D").s().p("AiFA+QgTgQAYgGQAKgDAUgPQAMgJAnADQAmACgCgSQgEgjALgOQAagmAwBDIAlglQAmgggDAVQgCANgNAjQgIAUAIgBQAGgCADAGQACAHgCAJQgIAZgigJQgrgMgHABQgLACAEAXQADAYghgFQgegFAAgTQAAgPgrAXIgrAaQgOgHgKgJg");
	this.shape_1.setTransform(181,197.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A439D").s().p("AiyAUQAOgUA2AAQA5AAAPgDQAPgEA6gVQA5gSAiAJQASAFAGAIQBBAog+AOQg8AOgwgWQghgPhjAQIhfASg");
	this.shape_2.setTransform(407.4,215.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#312F7F").ss(1,1,1).p("AgchXIABAYQAFAcASATQAUAUAIAfQAJAegJAX");
	this.shape_3.setTransform(447,207.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#312F7F").ss(1,1,1).p("AhFBWIAQgxQAVgqAWAUQAUAWAAgkQgEgwAAgSQAAgWAgACQARACAQAG");
	this.shape_4.setTransform(445.3,197.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#312F7F").ss(1,1,1).p("AgiAZQgKAFgOACAgiAZQA1gMAnATAgQgfIABAfQgDAQgQAJ");
	this.shape_5.setTransform(438.2,218.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#312F7F").ss(1,1,1).p("ABMgrQAAAYhiAAQg+AAAKATQABAAAOATQAMAOABAL");
	this.shape_6.setTransform(258.8,220.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#312F7F").ss(1,1,1).p("AhdgTIAvACQAvAFALAKQAFADAogEQAhgGAEAd");
	this.shape_7.setTransform(374.5,231.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#312F7F").ss(1,1,1).p("ADdhLQgWAlgoAlQhSBIhaAAQgzAAhagPQgngGgbAa");
	this.shape_8.setTransform(361.2,222.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#312F7F").ss(1,1,1).p("AiGBCIAggZQAlgUAZAWQAjAdAegDQAigEgNguQgKgmAwgdQAYgOAbgG");
	this.shape_9.setTransform(433.5,159.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#312F7F").ss(1,1,1).p("AEVCEQAqgRAHgYQAPgviqgdQjDghg/gRQg4gOgggXQgNgKglABQgsADgTAAQggABgFgKQgGgMAggh");
	this.shape_10.setTransform(408.1,166.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#312F7F").ss(1,1,1).p("AAdgZQAJAEgEAJQgHARg9AV");
	this.shape_11.setTransform(193.9,230.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#312F7F").ss(1,1,1).p("AibgTIA7gUQA8gNALAhQAJAZA/AGQBNAGAgAa");
	this.shape_12.setTransform(195.4,227.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#312F7F").ss(1,1,1).p("ACZg0QgQgBgRAFQgiAKgEAiQgDAYABAVQgFAIg6AEQgaACgSgHQgRgKgHgFQgcgQhJAY");
	this.shape_13.setTransform(170.9,220.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#312F7F").ss(1,1,1).p("ABtAvQgGgYgPgXQgegugsAAQgaAAgdAWQgVAQgugU");
	this.shape_14.setTransform(184.7,174.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#312F7F").ss(1,1,1).p("AiYAhIAiASQAvAQBCgLQA0gJAWgaQAFgHAEACQAEACASAUQA1A9AAif");
	this.shape_15.setTransform(273,165.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#312F7F").ss(1,1,1).p("ABeBPIAPAHQAOAAAAglQAAhMh2gKQgjABgIgDQgXgNg+gh");
	this.shape_16.setTransform(250.6,171.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#312F7F").ss(1,1,1).p("ABPgkQgKgKgOgCQgcgEgTAoQgXA1gGAFQgMAKgtgR");
	this.shape_17.setTransform(152.3,205.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#312F7F").ss(1,1,1).p("AhmCWIAGgWQAPgYAsgHQA6gKAigcQAngfgVgjQgdg2A7hY");
	this.shape_18.setTransform(156.4,155.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#312F7F").ss(1,1,1).p("Aihh4QBqAEABAdQgDAUgCANQgCAWAMASQAeAqAQAFQAKAFBOAAQA/AAAMApQAGAVgHAV");
	this.shape_19.setTransform(143.4,167.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#312F7F").s().p("A1uCxIAAlhMArdAAAIAAFhg");
	this.shape_20.setTransform(298.6,197.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D0361").s().p("Ah0AuIAAhbIDpAAIAABbg");
	this.shape_21.setTransform(539.4,292.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D0361").s().p("AhTArIAAhVICnAAIAABVg");
	this.shape_22.setTransform(511.1,282.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#312F7F").s().p("AlGBLIAAiVIKNAAIAACVg");
	this.shape_23.setTransform(318.4,5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#312F7F").s().p("AlGBuIAAjbIKNAAIAADbg");
	this.shape_24.setTransform(114,322.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#312F7F").s().p("AkVBhIAAjBIIrAAIAADBg");
	this.shape_25.setTransform(181.6,75.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#626AAD").s().p("EgvZAEaIAAo0MBezAAAIAAI0g");
	this.shape_26.setTransform(301,376);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A439D").s().p("EgvZAbeMAAAg28MBezAAAMAAAA28g");
	this.shape_27.setTransform(301,174.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.answer_display}]},7).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(8));

	// Drop
	this.dropTarget = new lib.droptarget();
	this.dropTarget.setTransform(70.2,169.2,0.93,0.724);
	this.dropTarget.alpha = 0;
	this.dropTarget._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dropTarget).wait(7).to({_off:false},0).to({_off:true},6).wait(8));

	// Electric
	this.scroll_right = new lib.scrollRight();
	this.scroll_right.setTransform(564.7,374.7,1.383,1.385);

	this.scroll_left = new lib.scrollLeft();
	this.scroll_left.setTransform(21.4,374,1.342,1.345);

	this.electric_1 = new lib.electircalwires();
	this.electric_1.setTransform(288.1,164.1,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.electric_1},{t:this.scroll_left},{t:this.scroll_right}]},7).to({state:[]},6).wait(8));

	// Loadball
	this.prep_all = new lib.empty();
	this.prep_all.setTransform(50.5,349.3,0.999,0.999);
	this.prep_all._off = true;

	this.timeline.addTween(cjs.Tween.get(this.prep_all).wait(7).to({_off:false},0).to({_off:true},6).wait(8));

	// Woodbox
	this.instance_3 = new lib.wood_box();
	this.instance_3.setTransform(60.1,285.4,1,0.999);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({_off:true},6).wait(8));

	// Frog
	this.frog = new lib.frog();
	this.frog.setTransform(532.3,207.6,0.999,0.999,2);
	this.frog._off = true;

	this.timeline.addTween(cjs.Tween.get(this.frog).wait(7).to({_off:false},0).to({_off:true},6).wait(8));

	// Instructions
	this.instance_4 = new lib.Play_button();
	this.instance_4.setTransform(298.1,328.5);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Play_button(), 3);

	this.text_3 = new cjs.Text("At the top of the screen there is an English phrase. Starting from the partial phrase in the middle of the screen, your job is to drag the appropriate balloon onto the balcony and hit 'Try!' to attempt to make the foreign language phrase match the English phrase above.\n\nGood luck!", "16px 'Comic Sans MS'");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 258;
	this.text_3.setTransform(162,7);

	this.instance_5 = new lib.frog1_Smile("synched",0);
	this.instance_5.setTransform(395.9,269.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DBC3B6").s().p("Ag/AJIAJgJQAMgLAOgFQAqgRAyAvQgQgLgVgDQgogKgbAgQgKgVgNAIg");
	this.shape_28.setTransform(447.2,294.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DBC3B6").s().p("AgWgBIglAJQAdgmAvAJQAZAEASAMIgSAdQgYgegoAFg");
	this.shape_29.setTransform(138.5,295.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#684D3E").s().p("A5ag6IAaAmQAiAiAmgKQA+gNAUgNMAt2AAAIAOAMQASAMARAFQA4ASAihBQgDAngWAaQgrA5hbg3MgtuAAAQgnAdgoADIgIAAQhJAAgIh1g");
	this.shape_30.setTransform(292.1,302.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#866854").s().p("AhFBCQgegcAAgmQAAglAegcQAdgbAoAAQApAAAdAbQAeAcAAAlQAAAmgeAcQgdAbgpAAQgoAAgdgbg");
	this.shape_31.setTransform(138.2,299.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#866854").s().p("AhFBCQgegcAAgmQAAglAegcQAdgbAoAAQApAAAdAbQAeAcAAAlQAAAmgeAcQgdAbgpAAQgoAAgdgbg");
	this.shape_32.setTransform(446.2,299.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#866854").s().p("A3VA3IAAhtMAusAAAIAABtg");
	this.shape_33.setTransform(294.1,300.2);

	this.instance_6 = new lib.instructionsbg("synched",0);
	this.instance_6.setTransform(292.1,145.8);
	this.instance_6.alpha = 0.859;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_5},{t:this.text_3},{t:this.instance_4}]},2).to({state:[]},5).wait(14));

	// Windows
	this.instance_7 = new lib.windows("synched",0);
	this.instance_7.setTransform(296.7,176.9,0.999,0.999);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true},11).wait(8));

	// Background
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4A439D").s().p("Ag2AQQADgPAEgOQAKgfAMAAIAYADQAaAGAPAPQAXAWgOArg");
	this.shape_34.setTransform(194,215.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A439D").s().p("AiFA+QgTgQAYgGQAKgDAUgPQAMgJAnADQAmACgCgSQgEgjALgOQAagmAwBDIAlglQAmgggDAVQgCANgNAjQgIAUAIgBQAGgCADAGQACAHgCAJQgIAZgigJQgrgMgHABQgLACAEAXQADAYghgFQgegFAAgTQAAgPgrAXIgrAaQgOgHgKgJg");
	this.shape_35.setTransform(181,197.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4A439D").s().p("AiyAUQAOgUA2AAQA5AAAPgDQAPgEA6gVQA5gSAiAJQASAFAGAIQBBAog+AOQg8AOgwgWQghgPhjAQIhfASg");
	this.shape_36.setTransform(407.4,215.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#312F7F").ss(1,1,1).p("AgchXIABAYQAFAcASATQAUAUAIAfQAJAegJAX");
	this.shape_37.setTransform(447,207.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#312F7F").ss(1,1,1).p("AhFBWIAQgxQAVgqAWAUQAUAWAAgkQgEgwAAgSQAAgWAgACQARACAQAG");
	this.shape_38.setTransform(445.3,197.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#312F7F").ss(1,1,1).p("AgiAZQgKAFgOACAgiAZQA1gMAnATAgQgfIABAfQgDAQgQAJ");
	this.shape_39.setTransform(438.2,218.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#312F7F").ss(1,1,1).p("ABMgrQAAAYhiAAQg+AAAKATQABAAAOATQAMAOABAL");
	this.shape_40.setTransform(258.8,220.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#312F7F").ss(1,1,1).p("AhdgTIAvACQAvAFALAKQAFADAogEQAhgGAEAd");
	this.shape_41.setTransform(374.5,231.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#312F7F").ss(1,1,1).p("ADdhLQgWAlgoAlQhSBIhaAAQgzAAhagPQgngGgbAa");
	this.shape_42.setTransform(361.2,222.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#312F7F").ss(1,1,1).p("AiGBCIAggZQAlgUAZAWQAjAdAegDQAigEgNguQgKgmAwgdQAYgOAbgG");
	this.shape_43.setTransform(433.5,159.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#312F7F").ss(1,1,1).p("AEVCEQAqgRAHgYQAPgviqgdQjDghg/gRQg4gOgggXQgNgKglABQgsADgTAAQggABgFgKQgGgMAggh");
	this.shape_44.setTransform(408.1,166.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#312F7F").ss(1,1,1).p("AAdgZQAJAEgEAJQgHARg9AV");
	this.shape_45.setTransform(193.9,230.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#312F7F").ss(1,1,1).p("AibgTIA7gUQA8gNALAhQAJAZA/AGQBNAGAgAa");
	this.shape_46.setTransform(195.4,227.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#312F7F").ss(1,1,1).p("ACZg0QgQgBgRAFQgiAKgEAiQgDAYABAVQgFAIg6AEQgaACgSgHQgRgKgHgFQgcgQhJAY");
	this.shape_47.setTransform(170.9,220.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#312F7F").ss(1,1,1).p("ABtAvQgGgYgPgXQgegugsAAQgaAAgdAWQgVAQgugU");
	this.shape_48.setTransform(184.7,174.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#312F7F").ss(1,1,1).p("AiYAhIAiASQAvAQBCgLQA0gJAWgaQAFgHAEACQAEACASAUQA1A9AAif");
	this.shape_49.setTransform(273,165.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#312F7F").ss(1,1,1).p("ABeBPIAPAHQAOAAAAglQAAhMh2gKQgjABgIgDQgXgNg+gh");
	this.shape_50.setTransform(250.6,171.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#312F7F").ss(1,1,1).p("ABPgkQgKgKgOgCQgcgEgTAoQgXA1gGAFQgMAKgtgR");
	this.shape_51.setTransform(152.3,205.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#312F7F").ss(1,1,1).p("AhmCWIAGgWQAPgYAsgHQA6gKAigcQAngfgVgjQgdg2A7hY");
	this.shape_52.setTransform(156.4,155.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#312F7F").ss(1,1,1).p("Aihh4QBqAEABAdQgDAUgCANQgCAWAMASQAeAqAQAFQAKAFBOAAQA/AAAMApQAGAVgHAV");
	this.shape_53.setTransform(143.4,167.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#312F7F").s().p("A1uCxIAAlhMArdAAAIAAFhg");
	this.shape_54.setTransform(298.6,197.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2D0361").s().p("Ah0AuIAAhbIDpAAIAABbg");
	this.shape_55.setTransform(539.4,292.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2D0361").s().p("AhTArIAAhVICnAAIAABVg");
	this.shape_56.setTransform(511.1,282.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#312F7F").s().p("AlGBLIAAiVIKNAAIAACVg");
	this.shape_57.setTransform(318.4,5.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#312F7F").s().p("AlGBuIAAjbIKNAAIAADbg");
	this.shape_58.setTransform(114,322.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#312F7F").s().p("AkVBhIAAjBIIrAAIAADBg");
	this.shape_59.setTransform(181.6,75.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#626AAD").s().p("EgvZAEaIAAo0MBezAAAIAAI0g");
	this.shape_60.setTransform(301,376);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4A439D").s().p("EgvZAbeMAAAg28MBezAAAMAAAA28g");
	this.shape_61.setTransform(301,174.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},2).to({state:[]},11).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;