(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/Swirl01wav.mp3", id:"Swirl01wav"},
		{src:"sounds/swish.mp3", id:"swish"}
	]
};



// symbols:



(lib.try_again_text = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Try again!", "55px 'Arial'", "#B5DFFD");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 322;
	this.text.setTransform(-2,-31.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.9,-31.9,326,65.5);


(lib.sentencebackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B78F55").ss(0.5,1,1).p("AXrhPIAACfMgvVAAAIAAifg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F4F1E").s().p("A3qBQIAAifMAvVAAAIAACfg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152.6,-9,305.2,18.1);


(lib.leafpointer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAktIAAJb");
	this.shape.setTransform(0,30.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,62.5);


(lib.Leafpic = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAPgYIgdAx");
	this.shape.setTransform(3.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AgUgGIApAN");
	this.shape_1.setTransform(7,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AgThkIgFBIQADBPAuAy");
	this.shape_2.setTransform(7.5,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("ABbgTQAWhAhLgjQgUgIgZAFQg2ALgiBEIACAcQAFAeALAbQAkBWBSgGQAEg0AFgUQAegnALgfg");
	this.shape_3.setTransform(7.1,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006162").s().p("AhNArQgLgbgFgeIgCgcQAihEA2gLQAZgFAUAIQBLAjgWBAQgLAfgeAnQgFAUgEA0IgKABQhKAAgihRg");
	this.shape_4.setTransform(7.1,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AAZgNIgxAb");
	this.shape_5.setTransform(-12.7,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AgNgQIAbAg");
	this.shape_6.setTransform(-6.2,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,1,1).p("AAghiQgWAXgQAkQglBIASBC");
	this.shape_7.setTransform(-8,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AgkB5IAqg6QACgCAbgNQAbgOAPgOQAygrgwhDQgOgRgagJQgygRg/ArIgLAZQgMAfgDAdQgLBaBLAkg");
	this.shape_8.setTransform(-6.4,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006162").s().p("AhkgFQADgdAMgfIALgZQA/grAyARQAaAJAOARQAwBDgyArQgPAOgbAOQgbANgCACIgqA6QhLgkALhag");
	this.shape_9.setTransform(-6.4,1.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-14.4,35.6,28.9);


(lib._twistmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("Swirl01wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._swishmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("swish");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.try_again = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59));

	// Text
	this.instance = new lib.try_again_text();
	this.instance.setTransform(0,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-12},11,cjs.Ease.get(1)).to({y:8.4},6).to({y:-2.4},4).to({y:0},5).wait(13).to({y:-60,alpha:0.191},19,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,40.1,326,65.5);


(lib.leaf = function() {
	this.initialize();

	// Layer 3
	this.pointer = new lib.leafpointer();
	this.pointer.setTransform(0.5,-31,1,1,0,0,0,0,30.2);
	this.pointer.alpha = 0;

	// Layer 2
	this.instance = new lib.Leafpic("synched",0);
	this.instance.setTransform(1.9,0.1);

	this.addChild(this.instance,this.pointer);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-61.7,35.6,76.3);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_29 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Text bg
	this.instance = new lib.sentencebackground();
	this.instance.setTransform(-16.3,-43.4,0.994,1.825);
	this.instance.alpha = 0.75;

	this.text = new cjs.Text("Good job! You finished the game. Come back soon and play again!", "bold 16px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 280;
	this.text.setTransform(-13.2,-74.3);
	this.text.shadow = new cjs.Shadow("rgba(80,34,37,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},9).to({state:[{t:this.text}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({scaleY:2.09},3).to({scaleY:0.06},9,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Pic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B78F55").s().p("AiTBTQgKgDgHgGQgGgHgLgIQgLgHgZgGQgYgGgugCQhGgCgMgJQgMgIAkgLQAkgIBLgHQBKgHBngBIAbgOQAZgOAmgQQAogPAtgHQAtgHAoANIBDAXQAjANAcALQAcAMAJAKQAKAIgUAGQgTAGg7AAIhSAAQgfABgVACQgVACgQAEIgkAKIgwAPIhHAUQgtAMgYADIgUACQgIAAgGgCg");
	this.shape.setTransform(38.6,-49.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B78F55").ss(0.5,1,1).p("AlABAQAAAAAUACQASACAcgDQAbgDAbgOQAcgOARggQARgfAFgRQAGgRAGgDQAFgDAOAKQAOAJAgAUQAaAQAKAIQALAHAHACQADADAJgDQAJgDAVgGQAVgHApgLQA0gOAigGQAhgFAWgBQAWAAASADQASACAUAE");
	this.shape_1.setTransform(-60.1,-43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B78F55").ss(0.5,1,1).p("AjKAgQABABAPAGQAPAGAaAJQAZAJAfAHQAeAIAfACQAcACAWACQAWABAUgBQATgCAXgGQAXgGAggMQAggNAHgNQAGgOgKgKQgKgIgRgDQgRgDgQAGQgTAJgVAFQgWAGgegCQgfgDgrgNQgcgGgMgFQgNgEgFgEQgFgEgEgHQgEgHgKgNQgKgNgWgX");
	this.shape_2.setTransform(-97.8,-49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B78F55").s().p("AB8A3QgkgEgkgKQgkgKgdgOQgYgLgLgGIgSgOQgGgFgGgCQgGgCgMADQgNACgYAHQgrAKggABQggAAgPgEQgOgGAJgHQAKgGAJgBIAWgDQANgCAWgLQAWgKANgCQANgCAGABIAFACQAsgHAZABQAZAAAOALQANALAJAYQAIAPAGAIQAHAIALADQALACAWACQAWABAnAEQApADAegBQAegCARgCQAQgCAAACQAAACgVALQgWALgfADIgaABQgUAAgVgDg");
	this.shape_3.setTransform(-113.3,-50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B78F55").ss(0.5,1,1).p("AkbAWQAZgNAngTQAngUAxgRQAygRA6gEQA3gDA/AWQAzASAsASQAsAQAaAQQAaAQgCAMQgCAMgpAGQgqAGhbgC");
	this.shape_4.setTransform(56.6,-53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B78F55").ss(0.5,1,1).p("ApPBJQABABAgAJQAgAKA0AGQA0AHA+gHQA+gHA8ggQApgVA7AAQA7AABGAOQBEAOBLATQBKATBJASQBIARBAAIQA/AIAvgJQAugKANgHQAMgGgMgFQgNgGgcgGQgdgHgkgKQglgJgjgQQgjgPgagXQgdgbAAgMQgBgNAUgEQAUgFAegDQAfgDAggHQAggHAZgRQAVgPARgMQARgMAHgJQAHgJgKgGQgKgGghgEQgigEhAgBQg/gChmAA");
	this.shape_5.setTransform(59.4,-42.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B78F55").ss(0.5,1,1).p("AMQinQAAAAgJALQgJALgKASQgLASgHAUQgHAUAEASQADASAUAMQAZAQAYAQQAXASAMASQALARgKAMQgKAMgqADQgcABgEADQgFACAHADQAIADAKAEQAKADACAFQADAFgQAFQgQAGgsAGQgtAHgdAHQgdAGgVAFQgVAFgUABQgTACgagEQgagDgngLQgngKg8gSQh3gkhngPQhngOhdAHQheAIhcAeQg4ASguACQgvADgugHQgvgHg2gMQg2gLhHgLQhHgKhfgF");
	this.shape_6.setTransform(54.3,-36.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B78F55").ss(0.5,1,1).p("AAIhmQAAABgKAMQgMAOgXAQQgXAQggAMQggALgogCQgfgCgEALQgEALARANQAQAQAeAOQAeAOAkAFQAkAGAigKQAagIAIgEIAHgCQAAABABAEQAAAFANAIQANAIAjALQAiALBEAN");
	this.shape_7.setTransform(-130,-51.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B78F55").ss(0.5,1,1).p("AiXiRQAAABgNAIQgMAJgWAKQgXAKgcAEQgdAFghgHQgVgFgCAFQgDAEAIALQAJAKAMAOQALAOAIAPQAIAOgEANQgDAKgXAHQgjAJgjgBQgigCgagCQgagDgJAFQgJAFAOAWQAQAWAcADQAcAEAkgHQAkgHAngJQAngKAmgDQAdgBAMAJQAMAJAGAOQAGAOAKAMQAKANAZAGQAaAFAzgHQAogHAbADQAbACAWAHQAVAHAbAIQAaAJApAFQApAGBCgBQBCgBBkgM");
	this.shape_8.setTransform(-126,-47.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B78F55").ss(0.5,1,1).p("Al2AIQAAgBAagHQAagFAsgGQAtgGA3ABQA4ACA9APQBNAYA+ALQA+ALA4gDQA3gDA7gUQA8gUAFgKQAFgMgpgGQgqgHhQgDQgogBgTAGQgTAGgIAIQgIAJgEAGQgEAFgIAAQgIAAgVgJQgUgKgpgb");
	this.shape_9.setTransform(73.1,-69.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B78F55").ss(0.5,1,1).p("AlMBjQABAAAYgCQAZgCAmgGQAmgFApgLQApgKAigRQAjgQAQgYQAUgcAKgQQAJgQgCgHQgBgHgLgDQgLgDgUgFQgTgFARgFQASgFAygDQAzgCBOAEQBQAEBnAM");
	this.shape_10.setTransform(23.5,-65.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B78F55").ss(0.5,1,1).p("AsFhBQABgBAYgDQAZgDApgDQAqgEAzABQA0AAA4AIQA4AHA0ASQBAAWAvADQAvAEAngHQAngGAqgIQApgHA2gBQAqAAAZADQAaAEAQAFQAQAEAOAFQANAFAUAEQAUADAhAAQAiAAAVAFQAWAEASADQARAEAUACQAUACAfgEQAegEAvgMQAxgOAzgGQAygHArAAQArgBAaAFQAaAEABAIQAAAIgkAKQgjAIgaAIQgaAJgXAIQgYAHgbAIQgbAHgmAHQgmAIg4AIQguAGgdABQgdAAgVgEQgUgEgTgGQgTgGgZgGQgZgGgogEQgngEg9gBQhaAAg5ABQg5ABggACQggABgPABQgPABgHAA");
	this.shape_11.setTransform(-63.8,-66);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AgUAGQAAAAAHACQAIABAIgDQAKgCAIgL");
	this.shape_12.setTransform(121,-70.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#916C2A").s().p("AgNAHIgHgCIApgMQgIALgKACQgFACgFAAIgGgBg");
	this.shape_13.setTransform(121,-70.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,1,1).p("AgUAAQAAABAIAEQAHAEAIgBQAKgBAIgO");
	this.shape_14.setTransform(122.4,-74.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#916C2A").s().p("AgMAFIgIgFIApgHQgIAOgKABIgDAAQgGAAgGgDg");
	this.shape_15.setTransform(122.4,-74.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("AgUACQABABAIADQAHACAJgBQAJgCAHgM");
	this.shape_16.setTransform(124.1,-79.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#916C2A").s().p("AgMAGIgIgEIApgJQgHAMgKACIgFABQgFAAgGgCg");
	this.shape_17.setTransform(124.1,-79.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5,1,1).p("AgWAAQAAAAAHACQAHAEAJgBQALAAALgJ");
	this.shape_18.setTransform(126.1,-85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#916C2A").s().p("AgOACIgIgCIAtgEQgLAJgKAAIgCAAQgIAAgGgDg");
	this.shape_19.setTransform(126.1,-85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5,1,1).p("AgVADQAAAAAJADQAJACAIgCQALgCAGgK");
	this.shape_20.setTransform(127.9,-90.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#916C2A").s().p("AgLAGIgKgDIArgJQgGAKgKACIgHABIgKgBg");
	this.shape_21.setTransform(127.9,-90.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5,1,1).p("AgVAGQAAAAAHADQAIADAIgDQAKgDAKgP");
	this.shape_22.setTransform(129.9,-96.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#916C2A").s().p("AgOAJIgHgEIArgPQgKAQgKADIgIABQgEAAgEgBg");
	this.shape_23.setTransform(129.9,-96.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5,1,1).p("AgUAHQABABALgBQALgCASgL");
	this.shape_24.setTransform(131.4,-102.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#916C2A").s().p("AgUAHIApgNQgSALgLACIgJAAIgDAAg");
	this.shape_25.setTransform(131.4,-102.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.5,1,1).p("AgTALQAAABAJgBQAIAAAHgFQAKgFAFgL");
	this.shape_26.setTransform(132.6,-107.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#916C2A").s().p("AgTALIAngVQgFALgKAFQgHAFgIAAIgGAAIgDAAg");
	this.shape_27.setTransform(132.6,-107.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.5,1,1).p("AgRAMQABAAAGABQAGABAHgFQAIgGAHgP");
	this.shape_28.setTransform(134.1,-113.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#916C2A").s().p("AgKANIgHgBIAjgYQgHAPgIAGQgGAEgGAAIgBAAg");
	this.shape_29.setTransform(134.1,-113.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AgPAMQABABAIgBQAGAAAHgGQAIgFABgN");
	this.shape_30.setTransform(134.1,-119.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#916C2A").s().p("AgPAMIAfgYQgBANgIAFQgHAGgGAAIgGABIgDgBg");
	this.shape_31.setTransform(134.1,-119.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.5,1,1).p("AgKARQAAAAAHgEQAFgDAGgHQAFgGgEgN");
	this.shape_32.setTransform(130.9,-122.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#916C2A").s().p("AAJgQQAEANgFAGQgGAHgFADIgHAEg");
	this.shape_33.setTransform(130.9,-122.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("AgDkdQABAAALgDQAOgDATACQASADAPAPQAPAPACAkQABAZgJAsQgJArgPA1QgPA1gRAzQgQA2gOAsQgPAtgJAbQgKAcAAAAQAAABgEALQgFAKgMALQgMAKgWABQAAgBALgeQAKgeARgxQARgxATg7QASg6ARg4QARg6ALgvQALgvABgbg");
	this.shape_34.setTransform(126.9,-95.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#916C2A").s().p("AhQEEIAbhPIAkhsQASg6ARg4QARg6ALgvQALgvABgbIg9hBIAMgDQAOgDATACQASADAPAPQAPAPACAkQABAZgJAsQgJArgPA1QgPA1gRAzQgQA2gOAsIgYBIIgKAcIgEAMQgFAKgMALQgMAKgWABIALgfg");
	this.shape_35.setTransform(126.9,-95.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.5,1,1).p("AgNACQABAAAFACQAGABAFgBQAHgBADgG");
	this.shape_36.setTransform(-187.8,-110.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#916C2A").s().p("AgHAEIgGgCIAbgFQgDAGgHABIgFAAIgGAAg");
	this.shape_37.setTransform(-187.8,-110.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.5,1,1).p("AgLAIQAAAAADgFQAEgDAEgEQAFgEAHAC");
	this.shape_38.setTransform(-188.3,-112.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#916C2A").s().p("AgIADQADgDAFgEQAFgEAHACIgXAOIADgFg");
	this.shape_39.setTransform(-188.3,-112.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.5,1,1).p("AgLAOQAAAAADgJQADgHAFgHQAEgHAIAE");
	this.shape_40.setTransform(-188.5,-116.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#916C2A").s().p("AgIAFQACgHAGgHQAEgHAIAEIgXAaIADgJg");
	this.shape_41.setTransform(-188.5,-116.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AgNALQAAAAACgHQACgFAGgGQAEgFANAE");
	this.shape_42.setTransform(-189.1,-120.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#916C2A").s().p("AgLAEQACgFAGgGQAEgFANAEIgbATIACgHg");
	this.shape_43.setTransform(-189.1,-120.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.5,1,1).p("AgLAJQAAAAAAgFQABgEAFgDQAFgFAMAA");
	this.shape_44.setTransform(-188.9,-124.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#916C2A").s().p("AgLAEQABgEAFgDQAFgFAMAAIgXARIAAgFg");
	this.shape_45.setTransform(-188.9,-124.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.5,1,1).p("AgOAJQAAgBAEgFQADgEAHgEQAFgEAKAE");
	this.shape_46.setTransform(-188.4,-129.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#916C2A").s().p("AgKADQADgFAHgDQAFgFAKAFIgdANIAEgFg");
	this.shape_47.setTransform(-188.4,-129.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.5,1,1).p("AgLAAQAAAAADAAQAEgDAEABQAFAAAHAG");
	this.shape_48.setTransform(-187.2,-133);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#916C2A").s().p("AgLAAIADAAQADgDAFABQAEAAAIAGg");
	this.shape_49.setTransform(-187.2,-133);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.5,1,1).p("AgJgLQAAAAAAAHQABAEAFAGQADAGAKAA");
	this.shape_50.setTransform(-158.9,-74.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#916C2A").s().p("AgDAGQgFgGgBgEIAAgHIATAXIgCAAQgIAAgDgGg");
	this.shape_51.setTransform(-158.9,-74.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.5,1,1).p("AgNgDQAAABAGACQAFACAEACQAHABAFgF");
	this.shape_52.setTransform(-157.8,-76.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#916C2A").s().p("AACAEQgEgCgFgCIgGgDIAbADQgFAEgFAAIgCAAg");
	this.shape_53.setTransform(-157.8,-76.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.5,1,1).p("AgJAHQAAABAFgBQAEAAAEgEQAFgDABgH");
	this.shape_54.setTransform(-158.5,-80.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.5,1,1).p("AAJgNQAAABAAAFQAAAGgEAFQgEAGgJAE");
	this.shape_55.setTransform(-160.1,-84.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#916C2A").s().p("AAJgNIAAAGQgBAFgEAGQgDAGgIAEg");
	this.shape_56.setTransform(-160.1,-84.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.5,1,1).p("AAHgMQABABgDAIQgDAGgJAK");
	this.shape_57.setTransform(-161.6,-88.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#916C2A").s().p("AAHgMIgCAJQgDAGgJAKg");
	this.shape_58.setTransform(-161.6,-88.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.5,1,1).p("AAIgOQAAABgBAHQgBAGgDAGQgDAIgHAB");
	this.shape_59.setTransform(-163.3,-93);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#916C2A").s().p("AAIgOIgBAIQgBAGgDAGQgDAIgHABg");
	this.shape_60.setTransform(-163.3,-93);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(0.5,1,1).p("AAGgPQABAAABAGQABAIgDAGQgDAIgLAE");
	this.shape_61.setTransform(-165.3,-98.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#916C2A").s().p("AAGgPIACAGQABAHgDAGQgDAJgLADg");
	this.shape_62.setTransform(-165.3,-98.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(0.5,1,1).p("AAIgQQAAAAABAIQACAIgEAHQgDAJgMAB");
	this.shape_63.setTransform(-167.3,-103.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#916C2A").s().p("AAIgQIABAIQACAIgEAHQgDAJgMABg");
	this.shape_64.setTransform(-167.3,-103.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(0.5,1,1).p("AAHgQQAAAAABAEQABADgDAIQgDAHgKAL");
	this.shape_65.setTransform(-169,-107.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#916C2A").s().p("AAHgQIABADQABAFgDAHQgDAHgKAMg");
	this.shape_66.setTransform(-169,-107.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(0.5,1,1).p("AgIAOQABAAAEgCQADgCAEgGQAFgEAAgN");
	this.shape_67.setTransform(-171.1,-113.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#916C2A").s().p("AgIAOIAQgbQABANgFAEQgEAGgCACIgFACIgBAAg");
	this.shape_68.setTransform(-171.1,-113.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(0.5,1,1).p("AgHASQAAABAEgDQADgCAEgIQAEgGAAgR");
	this.shape_69.setTransform(-172.9,-117.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#916C2A").s().p("AgHASIAPgjQAAARgEAGQgEAIgDACIgEACIAAAAg");
	this.shape_70.setTransform(-172.9,-117.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(0.5,1,1).p("AAIgTQAAAAABAIQACAHgEAIQgDAKgMAG");
	this.shape_71.setTransform(-174.8,-122.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#916C2A").s().p("AAIgTIABAIQACAHgEAIQgDAJgMAHg");
	this.shape_72.setTransform(-174.8,-122.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.5,1,1).p("AARhsIAZgdQgBAAgHgDQgHgDgKACQgKACgIAPQgKAOgGAiQgIAvACAnQADAqAEAaQAFAaABABIgfAmQABAAAKgBQAKAAANgGQAKgGAIgOQAIgPgEgaQgKg3gBgtQAAgwANgjg");
	this.shape_73.setTransform(-188.1,-120.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#916C2A").s().p("AgpCPIAfgmIgGgbQgEgagDgqQgCgnAIgvQAGgiAKgOQAIgPAKgCQAKgCAHADIAIADIgZAdQgNAjAAAwQABAtAKA3QAEAagIAPQgIAOgKAGQgNAGgKAAIgJABIgCAAg");
	this.shape_74.setTransform(-188.1,-120.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.5,1,1).p("AhNkNICvHPQABABACAOQACAOgCARQgDAQgPAJQgOAJghgJQgBgBAGgKQAGgKAUgJQAAAAADgEQADgEABgKQAAgKgGgSQgEgKgOgjQgNgjgUgxQgRgxgVg0QgVg1gSgvQgSgugMgdQgLgdAAgBg");
	this.shape_75.setTransform(-166.7,-99.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#916C2A").s().p("AAkEJQgBgBAGgKQAGgKAUgJIADgEQADgEABgKQAAgKgGgSIgSgtIghhUIgmhlIgnhkIgehLIgLgeIAYgXICvHPIADAPQACAOgCARQgDAQgPAJQgHAFgMAAQgMAAgQgFg");
	this.shape_76.setTransform(-166.7,-99.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(0.5,1,1).p("AOlkiQA1AEAqAEQAqADAZACQAZACAAABIDRgcIDZAAQAAAAAIAOQAHAOAHAUQAIAVgBATQAAATgPALQgQALgFATQgGASABAVQAAAVACARQADASAAAIQAAAIAAARQAAASAAASQAAAUAAARQAAASAAAIQABAIAOAKQAPAKAUAMQATAMAQAMQAQANAEAOQACAMgGALQgGAKgJAHQgJAHgHAEQgHAEAAAAQAAABgCALQgCALgCAOQgBAPAAALQgBAHgPAEQgQADgWADQgXACgXAAQgXACgPAAQgPAAgBAAIi1AqQgBAAgigKQgigJg5gNQg5gOhGgNQhHgOhKgIQhLgKhFAAQhEAAg1AOQg1AOg/AEQg/AEhCgCQhDgDg/gGQg/gGg0gIQg1gHglgGQgigFgNAAQgTAAglgDQglgDgvgFQgvgEgxgDQgxgDgrAAQgiAAg1AAQg1AAg9ABQg9AAg9ABQg8ABgxABQgxABgcADQgjABg4gGQg5gGhFgHQhGgHhJgBQhKgBhFAMQhaARg2AEQg1AEgYgCQgXgBAAgBQAAAAgIgLQgHgKgHgPQgIgOABgLQAAgNAPgCQAWgFAUgJQATgJAKgLQAJgMgKgLQgIgHgLgPQgKgNgKgOQgKgOgHgKQgHgJAAgBQABAAANgHQAMgGATgLQASgJARgPQAQgQAJgSQAHgTABgYQAAgXgEgWQgDgWgEgPQgEgOAAgBQgBAAgCgPQgCgPAAgVQAAgWAIgWQAHgVATgPQATgPAkAAQABAAAhAAQAhAAA3ACQA4ABBEADQBEADBGAFQBHAGA/AIQBAAIAuANQA2AOAmAGQAnAGAcAAQAdAAAYgDQAYgDAagDQAagDAhAAQAiAAA1AGQA0AGA8AJQA7AJA4AHQA4AIApAEQApADAPgEQALgDAjgFQAkgFA2gIQA2gHBBgHQBBgIBFgGQBFgHBCgFQBCgFA3gCQA3gDAmACQA1ACA4ADQA5AEA0ADgAWkjbQgQgQgXgBQgYABgPAQQgQAPAAAXQAAAYAQAPQAPAQAYAAQAXAAAQgQQAPgPABgYQgBgXgPgPgA2hkQQgSARgBAYQABAZASAPQATAQAcABQAcAAATgRQASgPABgZQgBgYgSgRQgTgQgcAAQgcAAgTAQg");
	this.shape_77.setTransform(-17.4,-47.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#916C2A").s().p("ATJFQQgigKg5gOQg5gNhGgOQhHgNhKgIQhLgKhFABQhEAAg1ANQg1AOg/AEQg/AEhCgDQhDgCg/gHQg/gFg0gIIhagMQgigGgNAAQgTAAglgDIhUgHIhggIQgxgCgrAAIhXAAIhyAAIh6ABIhtACQgxABgcACQgjADg4gHIh+gNQhGgIhJAAQhKgBhFANQhaAQg2AEQg1AFgYgDIgXgCIgIgLQgHgKgHgPQgIgOABgMQAAgMAPgCQAWgFAUgJQATgIAKgMQAJgLgKgMQgIgHgLgPIgUgbIgRgYIgHgKIAOgHQAMgGATgKQASgKARgPQAQgPAJgTQAHgTABgYQAAgXgEgWQgDgWgEgPIgEgPIgDgOQgCgPAAgWQAAgVAIgWQAHgWATgPQATgOAkgBIAiAAIBYACQA4ABBEADQBEADBGAGQBHAFA/AIQBAAJAuAMQA2APAmAFQAnAGAcAAQAdAAAYgDIAygGQAagDAhAAQAiAAA1AHQA0AFA8AJIBzAQQA4AJApADQApAEAPgFQALgDAjgFIBagNIB3gOICGgOICHgMQBCgFA3gCQA3gDAmACIBtAFIBtAHIBfAIIBDAGIAZACIDRgcIDZAAIAIAOQAHAPAHATQAIAVgBATQAAATgPAMQgQAKgFATQgGASABAWQAAAUACASQADARAAAIIAAAZIAAAkIAAAlIAAAaQABAIAOAKIAjAWQATALAQAOQAQANAEANQACANgGAKQgGALgJAGIgQALIgHAFIgCALIgEAZIgBAaQgBAHgPADQgQAFgWACQgXACgXAAIgmACIgQAAIi1AqIgjgJgAVWjbQgQAQAAAWQAAAYAQAQQAPAPAYAAQAXAAAQgPQAPgQABgYQgBgWgPgQQgQgQgXgBQgYABgPAQgA2hkQQgSARgBAYQABAZASAPQATAQAcABQAcAAATgRQASgPABgZQgBgYgSgRQgTgPgcgBQgcABgTAPg");
	this.shape_78.setTransform(-17.4,-47.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.5,1,1).p("AgHAEIADgEQAEgFAIAD");
	this.shape_79.setTransform(128,-17.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.5,1,1).p("AgHAGIACgGQAFgHAIAD");
	this.shape_80.setTransform(127.9,-14.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(0.5,1,1).p("AgIAGIAEgGQAEgGAJAC");
	this.shape_81.setTransform(128,-10.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(0.5,1,1).p("AgHAEIAEgEQADgEAIAB");
	this.shape_82.setTransform(127.9,-6.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.5,1,1).p("AAIBEQgEATgLgLIAAiXIAPgEg");
	this.shape_83.setTransform(127.9,-10.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#926C2A").s().p("AgHBMIAAiXIAPgEIAACTQgDAMgFAAQgCAAgFgEg");
	this.shape_84.setTransform(127.9,-10.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(0.5,1,1).p("AgHAEIADgEQAEgFAIAD");
	this.shape_85.setTransform(36.7,-20.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(0.5,1,1).p("AgHAGIACgGQAFgHAIAD");
	this.shape_86.setTransform(36.6,-17.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(0.5,1,1).p("AgIAGIAEgGQAEgHAJAD");
	this.shape_87.setTransform(36.6,-12.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(0.5,1,1).p("AgHAFIAEgFQADgEAIAB");
	this.shape_88.setTransform(36.6,-8.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(0.5,1,1).p("AAIBLQgEAUgLgMIAAilIAPgEg");
	this.shape_89.setTransform(36.6,-13.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#926C2A").s().p("AgHBTIAAilIAPgEIAAChQgDAMgFAAQgCAAgFgEg");
	this.shape_90.setTransform(36.6,-13.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(0.5,1,1).p("AnFhyQgVAAAAAXQAAAWAVAAQAWAAAAgWQAAgXgWAAgAGwh4IBHAAQASAkgOAMQgIAHAAAUQAAAMACAOIAAAwQAAAEAQAMQAQANACAHQACAOgQAJIgCAZQAAAIgyAAIg7ARQiUg1hEAWQgqAOhQgKQhJgMgIAAQhGgIgkAAQiJAAgdACQgHABhAgIQg6gGgjAIQglAJgZAAIgRgBQgFgHgDgHQgFgPAIgCQALgCAIgGQAJgIgFgGIgVghQAcgMAGgUQAHgTgJglQgDgOACgPQAEgeAYAAIBQADQBYAFAlAMQAkAMAZgCQAOAAAdgEQARAABDAMQA8AKAJgCQANgGBagMQBhgNAmACQA5ADBLAIgAHJhdQgSAAAAAWQAAAWASAAQASAAAAgWQAAgWgSAAg");
	this.shape_91.setTransform(82.7,5.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#926C2A").s().p("ADCBrQgqAOhQgKQhJgMgIAAQhGgJgkABQiJgBgdADQgHAAhAgHQg6gHgjAJQglAIgZABIgRgBQgFgHgDgHQgFgPAIgCQALgCAIgHQAJgHgFgGIgVghQAcgNAGgTQAHgUgJgkQgDgPACgOQAEgeAYAAIBQADQBYAFAlAMQAkAMAZgBIArgFQARAABDAMQA8ALAJgEQANgFBagMQBhgNAmACQA5ADBLAJIBEgMIBHAAQASAkgOAMQgIAHAAAVIACAZIAAAwQAAAEAQAMQAQANACAHQACAOgQAJIgCAYQAAAJgyAAIg7AQQiUg0hEAWgAG3hHQAAAWASAAQASAAAAgWQAAgWgSAAQgSAAAAAWgAnahbQAAAXAVgBQAWABAAgXQAAgXgWAAQgVAAAAAXg");
	this.shape_92.setTransform(82.7,5.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(0.5,1,1).p("AgJgcQAWAcggATQgMAIAFACQAFADAOgDQAkgJAAgUQAAgSgPgIQgLgGgMAEg");
	this.shape_93.setTransform(38.3,-2.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6F4F1E").s().p("AgaAdQgFgCAMgIQAggTgWgcQAMgEALAGQAPAIAAASQAAAUgkAJIgNABIgGgBg");
	this.shape_94.setTransform(38.3,-2.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(0.5,1,1).p("AgRgeQAZAGgQAoQgMAdAQgJQAQgKAEgTQAFgRgLgRQgLgSgQAPg");
	this.shape_95.setTransform(129.4,-1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6F4F1E").s().p("AgIAQQAQgogZgGQAQgPALASQALARgFARQgEATgQAKQgEACgCAAQgHAAAJgWg");
	this.shape_96.setTransform(129.4,-1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(0.5,1,1).p("AgMggQgFgBgHAHIgFAHIANAPQAMAPAAAOQAAAXAiglQgNglgdgGg");
	this.shape_97.setTransform(31.2,10);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6F4F1E").s().p("AgEAZQAAgOgMgPIgNgPIAFgHQAHgHAFABQAdAGANAlQgWAWgIAAQgEAAAAgIg");
	this.shape_98.setTransform(31.2,10);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(0.5,1,1).p("AgkBIQAkgOgLgwQgLgtACgNQACgZAfAAQAxAAgzASIgBARQgBAUAFARQAIAXgPAcQgPAegcgIg");
	this.shape_99.setTransform(33.6,-0.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6F4F1E").s().p("AgkBIQAkgOgLgwQgLgsACgOQACgYAfgBQAxAAgzASIgBARQgBAUAFARQAIAXgPAcQgMAXgUAAIgLgBg");
	this.shape_100.setTransform(33.6,-0.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(0.5,1,1).p("AAshCQgTgIgVgBQgTgBgRAEQAAAAAHAIQAGAHAGANQAHANAAAQQgBAPgMAQQgNARgfAQQgZANAAAHQAAAHASAAQASABAbgEQAZgFAagKQAagKASgOQASgPABgSQAAgagNgRQgNgQgTgIg");
	this.shape_101.setTransform(-153.6,-68.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6F4F1E").s().p("AhGBMQgSAAAAgHQAAgHAZgNQAfgQANgRQAMgQABgPQAAgQgHgNQgGgNgGgHIgHgIQARgEATABQAVABATAIQATAIANAQQANARAAAaQgBASgSAPQgSAOgaAKQgaAKgZAFQgWADgQAAIgHAAg");
	this.shape_102.setTransform(-153.6,-68.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(0.5,1,1).p("AA2gbQgGgZgPgTQgQgTgVgDQgXgEgcAVQABgBALAEQALAEAMAMQALANABAXQABAWgUAnQgQAgACAMQACANAMgCQANgCAPgMQARgLAOgRQAPgRAGgSQAGgUgFgZg");
	this.shape_103.setTransform(125.9,-64.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6F4F1E").s().p("AgpBUQgCgMAQggQAUgngBgWQgBgXgLgNQgMgMgLgEQgLgEgBABQAcgVAXAEQAVADAQATQAPATAGAZQAFAZgGAUQgGASgPARQgOARgRALQgPAMgNACIgDAAQgJAAgCgLg");
	this.shape_104.setTransform(125.9,-64.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(0.5,1,1).p("AAUg6QgXgSgkgGQgOgBgNAIQgMAIgIAJQgHAJAAABQAAAAAMAKQAMAJAPARQAQAOAMAUQALAVABAVQAAARALACQAJABARgHQAQgIAQgLQAQgLALgJQALgIABgBQAAgBgIgOQgIgOgQgUQgQgUgagSg");
	this.shape_105.setTransform(-175.6,-36.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6F4F1E").s().p("AgCBTQgMgCAAgRQAAgVgMgVQgMgUgQgOQgPgRgMgJIgMgKIAIgKQAHgJANgIQAMgIAPABQAjAGAYASQAZASAQAUQARAUAHAOIAIAPIgLAJIgbAUQgRALgQAIQgOAGgJAAIgCAAg");
	this.shape_106.setTransform(-175.6,-36.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(0.5,1,1).p("ABVibQgQAGgNAFQgOAEgBAAQgBABgDATQgDATACAfQABAfANAkQAIATgDAcQgCAbgNAcQgMAbgVAWQgTAVgeAKQgeAKglgIQAAAAALgFQALgFAPgKQAPgLANgSQANgSAEgbQAFgagKgkQgOgqgKgnQgJgmADgdQAEgcAZgQQAZgQA1gBQAsAAANAFQANAEgHAHQgHAGgQAHg");
	this.shape_107.setTransform(-168.6,-63);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6F4F1E").s().p("AhtC1IALgFQALgFAPgKQAPgLANgSQANgSAEgbQAFgagKgkQgOgqgKgnQgJgmADgdQAEgcAZgQQAZgQA1gBQAsAAANAFQANAEgHAHQgHAGgQAHIgdALIgPAEIgEAUQgDATACAfQABAfANAkQAIATgDAcQgCAbgNAcQgMAbgVAWQgTAVgeAKQgRAGgTAAQgPAAgQgEg");
	this.shape_108.setTransform(-168.6,-63);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#99C81E").s().p("Ag9ADQAYgPAdgLQAZgKAagEQAZgFAQgCIAQgBQgvAIgkAPQghAPgXANQgXAPgLALIgLALIgPADQAOgaAYgRg");
	this.shape_109.setTransform(-31.9,132.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#99C81E").s().p("AgOAcIABgKQABgKAHgOQAFgQAPgTIgcBTg");
	this.shape_110.setTransform(-47.5,130.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#99C81E").s().p("AAIAZQgDgNgJgPQgLgQgKgMIgLgNQAjAcAOASQAQAVAEALIAEALg");
	this.shape_111.setTransform(-60,129.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#99C81E").s().p("AgFA8QgDgFAAgIQAAgIAGgLQAIgQgDgUQgCgVgTgiIAKAMQAIANAIAUQAKASABAZQABASgDAFQgDAEgFgBIgIgEQgBgCgBAFIgBANIAAABIgDgEg");
	this.shape_112.setTransform(-55.1,126.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#99C81E").s().p("AhCAmQgCgEABgGIABgHQAmgiAdgMQAegNATAAQASgBAAABQgoAKgcASQgZAPgOAPIgPAQQgFAEgEAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_113.setTransform(16.4,108.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3C181C").s().p("AgIAlQAGgmAEgqIAMglQgEAQAAAPIAAAfQAAAPgCAOQgEATgGARQgHAQgEASQACgXADgVg");
	this.shape_114.setTransform(190.7,67.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3C181C").s().p("AAAAeIgChsIADgcQAEAOACAQQAEAigCAnIgEBJQgDAlAAAgIgChtgAgFh6QgEgGAAgKQAGAMADAOIgFgKg");
	this.shape_115.setTransform(195.5,-44);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3C181C").s().p("AAEANQgHgYgRgYIAGgfQACAXAIAWIAOArQAIAWADAXQgHgdgKgZg");
	this.shape_116.setTransform(197.9,2.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3C181C").s().p("AAOA9IgJg/QgEghgGgfQgJgegSgcIATAAIAYBTQANAoAGAnQAGApgIAuQgJgfgFghg");
	this.shape_117.setTransform(163.3,-81.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3C181C").s().p("AgFgXIAFglQAIAbgDAdQgDAbgEAdIgCAJIgBhUg");
	this.shape_118.setTransform(199.5,-130.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3C181C").s().p("AAABGIgMhKQgGgmACglIANgTQAQAmADAdQADAegFAZIgKA4IgCASIgCgcg");
	this.shape_119.setTransform(181.4,-127.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3C181C").s().p("AgIA/IAIhYQAEgtgEgvIAFASQAKAhgCAhQgCAfgIAeIgMA9QgCAOgBAPQAAgcAEgbg");
	this.shape_120.setTransform(185.3,-91.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3C181C").s().p("AAFARQABhAgMg9IAGggQAIAuAEAwQAEAugFAwQgGAwgSAtQARg8ABhAg");
	this.shape_121.setTransform(181.8,-54);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3C181C").s().p("AgSAyQgBg0AJg1QAJg0AUgqIAABAQgBAfABAgQAAAYgJAgIgOBAQgIAfADAVQgIgugBg2g");
	this.shape_122.setTransform(192.6,18.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3C181C").s().p("AgIAXQADgqAFgtIADgtQAEAPACAVQACAigBAlQgCAkgEAfQgEAfgFAOQgHgqAEgtg");
	this.shape_123.setTransform(181,38.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#502225").s().p("AgKBRQANgxAFgvQAFg0gNg4QAKAqAAAmQABAmgFAiQgFAlgCAmIgBAUIgIgrg");
	this.shape_124.setTransform(179.9,30.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#502225").s().p("AAVAsIgDgwQgBgagLgVQgIgWgagPIAiAAQAKAXADAfQACAgABAfQABAgAGAcQgIgVAAgYg");
	this.shape_125.setTransform(199.5,3.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#502225").s().p("AgGAYQgDgYgHgWIAWgwQAMAUgCAWQgBAXgHAXQgHAZgEAaIAAACQAAgXgDgYg");
	this.shape_126.setTransform(181.5,-86.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#502225").s().p("AgDAYQgDgUgBgUQAAgWACgVIAIAGQADAWABAYQACAhgHAiQgDgQgCgUg");
	this.shape_127.setTransform(180.4,-12.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#502225").s().p("AgGBnQgDgtgBgyQgBgwAEgvQAEgvAKgkIAAAMQAGA1gDA5QgDA3gGA6QgEA2gBA0IgChEg");
	this.shape_128.setTransform(197.1,-118.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#502225").s().p("AAJAjQgSgegTgYIAAAWQgCgRABgSIABglIASAuIAZA9IAPAgQgKgSgLgRg");
	this.shape_129.setTransform(128.5,-108.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#502225").s().p("AgYBMQgBgQABgPIATASIgCAEQgJAYgIAPIAAgegAAAAeQgEgiAEgkQAGglARgcQAEAagEAeQgEAfgJAdIgJAcIgBgJg");
	this.shape_130.setTransform(185.9,74.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#502225").s().p("AAABbQgKghgGgjQgHghADgoQAFgkAKghIALgqQANArACA2QACA6gEA5QgDA7gBA0QgHglgIgig");
	this.shape_131.setTransform(189,35.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#502225").s().p("AAZBpQgBgsgFguQgFgsgMgoQgJgpgWgaIAMgwQAbA6AKA7QAKA7AAA9IgBCDIgEhPg");
	this.shape_132.setTransform(163.5,-80.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#502225").s().p("AgQCtQACg+gEhAQgDg+ABg/QABg/AQg7QAPARAFAkQAGAkgCAvQgDAwgIAyQgHA0gIAzIgNBAIACgcg");
	this.shape_133.setTransform(192.2,-37);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#502225").s().p("AAAB/IgMhlQgGgyAAgzQABg0AOgwQgFAiAGAiQADAiAIAiQAIAiACAgQABAigFAgIgJA/IgBAUQgCgYgDgZg");
	this.shape_134.setTransform(177.8,-126.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#4B7118").ss(0.5,1,1).p("AhaAzQgcgggfgQQgggOgqgFQApgEApAKQAoAKAfAbQgDgZgJgRQgKgTgPgQQAcAQAUASQAUARAJAXQAHgYASgSQARgUAWgJQgJAQgDAUQgDASAAATQANgVAOgLQAOgNATgPQgCANgBAOQgCALACAOQAQgSAZgNQAagNAcgGQAdgFAYACQgWALgTAYQgSAXgLAc");
	this.shape_135.setTransform(2.3,107.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#84A816").s().p("AhaAzQgcgggfgQQgggOgqgFQApgEApAKQAoAKAfAbQgDgZgJgRQgJgTgQgQQAcAQAUASQAUARAJAXQAIgYARgSQARgUAWgJQgJAQgEAUQgCASAAATQANgVANgLQAOgNAUgPIgEAbQgBALACAOQAQgSAZgNQAZgNAdgGQAdgFAYACQgXALgSAYQgSAXgMAcg");
	this.shape_136.setTransform(2.3,107.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#4B7118").ss(0.5,1,1).p("AAUgsQANARAKAXQAJAUABAbQgBAZgHAIQgIAHgKgDQgKgDgHgFQgIgGAAAAQAAgBAAgKQAAgKgCgPQgEgOgMgPQgMgMgYgJQABgBALAAQALgBAPAEQAOAFALAOQAAgBAAgNQAAgOgFgUQgFgTgLgOQAAAAAKAJQAIAKAMARg");
	this.shape_137.setTransform(-162.2,74.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#84A816").s().p("AAbBQQgKgDgHgFIgIgGIAAgLQAAgKgCgPQgEgOgMgPQgMgMgYgJIAMgBQALgBAPAEQAOAFALAOIAAgOQAAgOgFgUQgFgTgLgOIAKAJQAIAKAMARQANARAKAXQAJAUABAbQgBAZgHAIQgGAFgHAAIgFgBg");
	this.shape_138.setTransform(-162.2,74.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#99C81E").ss(0.5,1,1).p("AAzgOIhFAdIgggT");
	this.shape_139.setTransform(-147.2,136.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#99C81E").ss(0.5,1,1).p("AhfBpQAAgBAEgTQAFgUAMgcQAMgdAXgdQAVgeAggXQAigXAwgH");
	this.shape_140.setTransform(-141,135.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#99C81E").ss(0.5,1,1).p("AAPACIgdgD");
	this.shape_141.setTransform(-170.1,137.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#99C81E").ss(0.5,1,1).p("AgOAFIAdgJ");
	this.shape_142.setTransform(-164.7,134.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#99C81E").ss(0.5,1,1).p("AgahyQABAAAJAJQAKAKAJATQAMATAHAbQAHAcgEAjQgEAlgVAt");
	this.shape_143.setTransform(-169,133.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#99C81E").ss(0.5,1,1).p("AgOACIAdgD");
	this.shape_144.setTransform(-180.9,129.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#99C81E").ss(0.5,1,1).p("AANANIgZgZ");
	this.shape_145.setTransform(-187.1,131.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#99C81E").ss(0.5,1,1).p("ABGibQgBAAgQAOQgQAPgXAjQgWAigWA7QgYA9gPBd");
	this.shape_146.setTransform(-182,133.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#99C81E").s().p("AgJBqQihgCifgIQgCgjADgjIAHgsQAFgbAKgYQALgYATgMQABAigBAiIALgMIAQgOQAIgHAFAAQAKABADAHQACAGAAAJQAAAJAEAJQALgGAJgIQAJgJALgGQAIARgCAYIgDAuQgCAYAFAUQANgIAHgPIAMgTQgHALAEAEQAFAFANgDQANgDAJgIQANgMAGgMQAFgNACgLIACgdQASACAKAOQAJAOAEARIAHAnQADATAFANQAJgNAMgMQAOgLALgOIADAmQAWgUAUgaQAVgZAXgXQAWgXAdgJQgEAYgHAWQgIATgFAXQgFAWADAaIAMgRQAHgJAGgKQACAOAEAMQAFANABAOQAAgKALgJQALgKAPgIIAegQQAOgHAHgGIgCAXQgBALADALQAUgLAQgUQAQgUAHgWQAHAIgDATQgDAUgHAUIgLAhQiGAHiIAAIgwAAg");
	this.shape_147.setTransform(-163.9,145.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#4B7118").ss(0.5,1,1).p("ACCgkQAngeAwgSQAwgSA2AEQgBAAgNAPQgNAOgTAeQgSAdgQAoQgQAqgHA2QABAAANgGQANgFATgKQATgKAUgNQAUgNAOgQQAOgQACgSQABAAAFAYQAGAWABAmQACAkgKApIrQAAIALgwQAAgBABgXQACgYAKglQALgmAagoQAbgrAxgoQAxgmBOgbQAAABgLAbQgLAbgOAqQgNAqgIAsQgJAuAFAoQABAFABAFQABgBANgVQANgVAQgiQAPggAIgoQAIgngJglQAAAAAOAIQAOAIASARQATARAQAaQAOAaAGAiQAGAkgMAvQABgCAPgUQAQgUAcgfQAdgdAogcg");
	this.shape_148.setTransform(-162.2,134.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#84A816").s().p("AlsC0IALgxIABgXQACgYAKglQALgmAagoQAbgrAxgnQAxgnBOgbIgLAcQgLAbgOAqQgNAqgIAsQgJAuAFAoIACAKIAOgXQANgUAQgjQAPgfAIgoQAIgngJglIAOAIQAOAIASARQATARAQAaQAOAaAGAiQAGAkgMAvIAQgWQAQgUAcgfQAdgdAogdQAngdAwgSQAwgSA2AEIgOAPQgNAPgTAdQgSAdgQAoQgQApgHA3IAOgGIAggPQATgJAUgOQAUgNAOgRQAOgQACgRQABAAAFAXQAGAXABAlQACAlgKApg");
	this.shape_149.setTransform(-162.2,134.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(0.5,1,1).p("AAZgNIgxAb");
	this.shape_150.setTransform(95.8,-145.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(0.5,1,1).p("AgNgPIAbAg");
	this.shape_151.setTransform(102.3,-149.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(0.5,1,1).p("AAghiQgBAAgMAQQgNAQgMAbQgPAcgHAiQgHAkALAo");
	this.shape_152.setTransform(100.5,-144.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#146262").s().p("AgcAXQAHgiAPgcQAMgbANgQIANgQIg4DFQgLgpAHgjg");
	this.shape_153.setTransform(100.5,-144.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(0.5,1,1).p("AAnh0QgTgHgbAEQgdAEgmAZQgBAAgHAQQgHARgHAZQgGAaAAAbQABAdAPAbQAPAaAjASQABAAAHgMQAIgLAKgNQAKgOAGgIQAFgEAQgHQAPgIASgLQASgMANgRQAMgPgBgXQgBgYgWggQAAgBgKgJQgKgIgUgIg");
	this.shape_154.setTransform(102.1,-145.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#146262").s().p("AhWBNQgPgbgBgdQAAgbAGgaQAHgZAHgRIAIgQQAmgZAdgEQAbgEATAHQAUAIAKAIIAKAKQAWAgABAYQABAXgMAPQgNARgSAMQgSALgPAIQgQAHgFAEQgGAIgKAOIgSAYIgIAMQgjgSgPgag");
	this.shape_155.setTransform(102.1,-145.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(0.5,1,1).p("AAOgDIgbAH");
	this.shape_156.setTransform(124.1,-147.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(0.5,1,1).p("AgNgKIAbAW");
	this.shape_157.setTransform(128.5,-141.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(0.5,1,1).p("AAThHQAAAAgHAQQgGAQgGAYQgIAWgGAYQgFAYABAR");
	this.shape_158.setTransform(127,-145.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(0.5,1,1).p("AgdhYQAAAAgKATQgKASgLAcQgKAagCAeQgCAdAQAWQAWAdAJAMQAJANACACIACADQAAgBANgOQALgNAPgQQAQgQALgIQAHgGAHgTQAHgTAAgbQAAgagMgeQgNgfgegeQgXgWgMgFQgMgEgEAGQgEAHACAMQABALACAKQADAJAAABg");
	this.shape_159.setTransform(127.6,-145.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#146262").s().p("AgQCMIgLgPIgfgpQgQgWACgdQACgeAKgaQALgcAKgSIAKgTIgDgKQgCgKgBgLQgCgMAEgHQAEgGAMAEQAMAFAXAWQAeAeANAfQAMAeAAAaQAAAbgHATQgHATgHAGQgLAIgQAQIgaAdIgNAPg");
	this.shape_160.setTransform(127.6,-145.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(0.5,1,1).p("Ag7grQgBABAAASQgBASAIAYQAIAaAZAYQAWAYAwAOQABAAAEgMQAFgLABgWQACgWgJgfQgIgegZgoQgUgfgMgIQgPgIgJAIQgKAHgFAOQgFAOgCALQgCAMAAAAg");
	this.shape_161.setTransform(113.2,-148.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#146262").s().p("AgUBEQgZgYgIgaQgIgYABgSIABgTIACgMQACgLAFgOQAFgOAKgHQAJgIAPAIQAMAIAUAfQAZAoAIAeQAJAfgCAWQgBAWgFALIgFAMQgwgOgWgYg");
	this.shape_162.setTransform(113.2,-148.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(0.5,1,1).p("AgtgPQABAAALACQAMABAQAEQAOADAPAFQAPAGAHAK");
	this.shape_163.setTransform(50.8,-135.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(0.5,1,1).p("AAagVQAAAAgJAGQgJAGgKAJQgNAJgKAM");
	this.shape_164.setTransform(40.4,-138.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(0.5,1,1).p("AAdgXQgBAAgIAFQgIAFgLAHQgJAGgJAIQgIAJgDAH");
	this.shape_165.setTransform(47.9,-131.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(0.5,1,1).p("AhHhKQABABARAPQASAQAaAXQAXAWAXAaQAYAZALAV");
	this.shape_166.setTransform(46.5,-136);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#103F3C").s().p("Ag2BDQgZgLgQgZQgQgZADgfQgPAWgVAMQgWANgYACQgYADgVgKQgVgKgOgWQgJAHgUAKQgTANgUAJQgUAJgLgEQgLgEAIgZQgOANgRADQgRADgPgGQgOgGgIgMQgIgOADgVIg0AKQgaAFgdgDQAAgMAXgHQAXgIAngEQAngEAygCQAwgCAzgBIBgABIBPABIAuAAQBpAABsACQBtADBtAAQBsAABqgJQgEANgKAMQgKAMgPAHQgPAHgTgDQgEgGgDgDIgIgIQgHAVgRAEQgRAEgSgIQgSgIgLgQIgIALIgIAIQgDAFgCAKQgRAFgQgCQgPgCgLgKQgKgKgBgTQgPAcgZAIQgZAIgcgHQgbgHgVgQQARAVgBASQgBAUgPAPQgOAPgVAFQgVAFgYgJQgCgKgFgJQgFgJgDgKQgGALgMAJQgLAJgKAJQABgKgCgMQgBgLABgMQgMApgVALQgNAGgNAAQgLAAgLgEg");
	this.shape_167.setTransform(29.2,-146.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(0.5,1,1).p("AF/gqQAEADAGAEQALAIALABQAMACAKgKQAJgKAFgbQAAABAAAOQAAAOADAQQADARAIAIQAIAGARgIQAVgPAIgPQAIgQABgLQABgJgBgBQABABADAGQADAIAHAJQAGAJAJAFQAJAFALgFQALgGAGgOQAHgOADgSQACgSgBgQQAAgQgEgJQgCgEgqgDQgpgChHgBQhHgBhaAAQhbAAhkABQhiAAhjACQhkABhaABQhaAChGABQhFABgpABQgoABgBAAIAFAhQAAABAKALQAJALASALQASALAZADQAZACAfgQQgBABgKARQgKARgKAWQgKAVgCATQgCASAQAFQAQADALgHQALgGAHgLQAHgKADgJQADgGAAgBQAAABAFALQAGANAMAQQAMARASAMQATAMAZgBQAZgDAPgQQAPgQAHgUQAHgVACgNQACgPAAgBQAAAAACALQADALAHALQAHAOANAKQAOAJAVAAQAWgBAggTQAAABAGADQAGAEAKACQALABAOgEQAJgDAKgIQgKAKgPAPQgOAQgLATQgMATgCASQgBATAOAPQAOAOASgGQARgGASgRQARgRAOgUQAPgUAJgPQAHgPAAAAQAAAAACANQACAMAHAPQAHAQAMALQANAMAUgCQATgCAFgQQAGgPgDgTQgDgUgFgOQgDgMgBgDQABACAFAKQAHANAOASQAOASAWASQAWASAgALQAfAKAogCQABAAAKgFQALgFAMgLQANgMAHgSQAGgTgGgbQgLgkgQgRQAAgBgBAAQADABACACQATALAUACQATADANgMQANgOACgKQABgGgBgEQgBgDgBgBQgEgGgEgCQgEgCgBAAQAAAAAHAHQAEADAEAEgAhOAPQAGgFAGgFAEkgPQgPgSgMgHQgMgHgBABQAAAAANALQAMAJAPALg");
	this.shape_168.setTransform(26.6,-137.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#146262").s().p("AiBCSQgOgPABgTQACgSAMgTQALgTAOgQIAZgZQgKAIgJADQgOAEgLgBQgKgCgGgEIgGgEQggATgWABQgVAAgOgJQgNgKgHgOQgHgLgDgLIgCgLIgCAQQgCANgHAVQgHAUgPAQQgPAQgZADQgZABgTgMQgSgMgMgRQgMgQgGgNIgFgMIgDAHQgDAJgHAKQgHALgLAGQgLAHgQgDQgQgFACgSQACgTAKgVQAKgWAKgRIALgSQgfAQgZgCQgZgDgSgLQgSgLgJgLIgKgMIgFghIApgBIBugCICggDIC+gCIDFgCIC/gBIChABQBHABApACQAqADACAEQAEAJAAAQQABAQgCASQgDASgHAOQgGAOgLAGQgLAFgJgFQgJgFgGgJQgHgJgDgIIgEgHIAAAKQgBALgIAQQgIAPgVAPQgRAIgIgGQgIgIgDgRQgDgQAAgOIAAgPQgFAbgJAKQgKAKgMgCQgLgBgLgIIgKgHIgCgEQgEgGgEgCIgFgCIAHAHIAIAHQABAEgBAGQgCAKgNAOQgNAMgTgDQgUgCgTgLIgFgDIABABQAQARALAkQAGAbgGATQgHASgNAMQgMALgLAFIgLAFQgoACgfgKQgggLgWgSQgWgSgOgSQgOgSgHgNIgGgMIAEAPQAFAOADAUQADATgGAPQgFAQgTACQgUACgNgMQgMgLgHgQQgHgPgCgMIgCgNIgHAPQgJAPgPAUQgOAUgRARQgSARgRAGQgFABgFAAQgMAAgKgJgAhOAPIAMgKIgMAKgAEkgPQgPgSgMgHIgBAAIAAgBIgMgFIAAAAIAAAAIANALIAbAUIAAAAgAEkgPIAAAAgAEJgjIgNgLIAAAAIAAAAIAMAFIAAABIABAAQAMAHAPASIgbgUgAF3gxIgHgHIAFACQAEACAEAGIACAEIgIgHg");
	this.shape_169.setTransform(26.6,-137.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#7C5759").s().p("AKCYsQgbgJgtgHQgtgGg0gDQgzgCgvABQgwACggAGQghAIgHAMIAVgvQAVguAhhSQAhhSAnhtQAnhtAlh+QAlh+AciHQAdiHAMiFQAMiGgLh8QgNiOgWh5QgXh9gkhvQgjhvg1hqQg0hqhJhrQhJhrhhhzQhhhyh6iCQh9iBhbhPQhchQg/gqQg/gpgogPQgogPgVACQgWABgIAIIgGAFQAHgLAUgCQAWgEAeAEQAeADAeAGQAeAHAZAGQAYAIALAFQAoAUAfAdQAgAdAeAgQAeAeAkAZQArAfAkAlQAjAlAiAnQAiAnAoAmQAjAkAdAoIA6BTQAcApAiAlIBMBOQAlAmAiApQAhAqAdAvQAfA0AbA1QAbA2AgAyQAPAZAKAaIAUA1QAKAaANAZQANAYAPAWQAOAUAMAWQAMAXAIAbQAOA1AEA3QAEA2ABA1QAAA3AEA2IAQCtQAIBWAEBXQAEBXgDBWIgKDXQgGBrgNBqQgIA9AHBBQAHBBALBBQAMBAAGA8QADAjgFAkIgLBJQAAgMgbgKg");
	this.shape_170.setTransform(107.2,-5.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#7C5759").s().p("AhXDTQAigPAPglQAOgkABgyQACgxgGgyIgMhiQgHguAAgeQABgGASgCQATgCAXAAIAuACIAbADQgeAUgOAaQgPAagEAeQgEAfAAAgQAAAggDAdQgCAXgFAfQgFAggIAeQgKAfgTAVQgSAUgeACIgEAAIgEAAg");
	this.shape_171.setTransform(147.8,-136.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(0.5,1,1).p("ArU4mQAoAAAuAAQA0AAA0AAQA1AAArAAQAsAAAaAAQAbAAAAAAQAGAAAMARQANAQAQAZQAQAZAPAZQAQAaAMAUQAMATAFAGQAeAlAnAiQAnAjAqAfQApAfAmAcQAOAKAVATQAWASAYATQAYASAYANQAWAMASgBQAUgDALgbQAKgbAEgqQACgqgBgwQgBgxgEguQgEgtgDgiQgDgigBgNQABgFAigDQAigCA3gBQA3AABCABQBCAABCACQBDACA3ABQA3ACAhABQAiACAAAAMAAAAwQIrSAFQABgBAUguQAUguAihSQAhhSAmhtQAnhtAlh+QAmh/AbiGQAdiHAMiGQANiFgLh8QgOiOgWh6QgXh8gjhvQgkhvg0hqQg0hqhKhrQhJhrhfhzQhghzh9iBQh9iBhbhPQhbhQhAgqQg5gmgmgPQgFAAgFAAQgrAAgbAAQgaAAgBAAQAAgBAIgHQAIgGAWgCQAVgCAoAPQAEABAEACg");
	this.shape_172.setTransform(121.9,-6.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#623031").s().p("ABNYBQAUguAhhTQAihSAmhtQAnhsAlh/QAlh+AciHQAdiGAMiGQAMiGgLh7QgNiOgWh6QgXh8gjhvQgkhwg0hpQg1hrhJhrQhJhqhfhzQhghzh9iBQh9iBhbhQQhbhQhAgpQg5gmgmgPIBWAAIBoAAIBgAAIBGAAIAbAAQAGAAAMARQANAQAQAYIAfAzIAcAtIARAaQAeAlAnAiQAnAjAqAeIBRA8QAOAKAVATIAsAlQAYASAXAMQAXANASgBQAUgDALgbQAKgbADgqQADgrgBgvQgCgxgDguIgHhQIgEgvQABgEAigDQAhgDA3AAIB6ABICEACIB5ADIBZADIAiABMAAAAwQIrSAGIAVgvg");
	this.shape_173.setTransform(127.2,-5.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(0.5,1,1).p("AAQgLQgGAHgKAFQgHAGgIAE");
	this.shape_174.setTransform(-151.2,-117.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(0.5,1,1).p("AApgZQgWAMgTANQgVAKgTAQ");
	this.shape_175.setTransform(-154.1,-134.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(0.5,1,1).p("Ag5gXQASABAWAIQAUAHAVAJQAVALAMAL");
	this.shape_176.setTransform(-143.2,-128.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(0.5,1,1).p("AAtgbQgFAMgQANQgPALgSAJQgUAKgPAB");
	this.shape_177.setTransform(-153.1,-123.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(0.5,1,1).p("AgjiaQAbAUAPAnQAQAmAIAvQAHAtgDAsQgCAtgLAf");
	this.shape_178.setTransform(-151.7,-129.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0D302E").s().p("AB0BiQgUgTgJgcQgJgcABgYQgGAWgJAFQgJAEgKgJQgJgKgIgMQgIgPgEgOQgQAWgRABQgUABgRgNQgQgOgHgYQgRAJgOgDQgOgDgKgRIgSAMIglAXQgVANgPAGQgQAHgBgHIgCgSQAAAHgLABQgLABgQgDQgPgEgNgHQgNgHgEgLQgEgKAMgMQALgMAhgOQAggMAmACQAmACAmAHQAmAGAhADQA8ACBCgDQBDgDBBABQBCABA7AMQgBATgLAQQgMAPgSAJQgOAIgQADQgRADgPgDIgEgMIgEgMQgUAhgngIQAPAOARAUQAQAWAIAXQAIAWgJAQQgJAQgjABQgfAAgUgTg");
	this.shape_179.setTransform(-168.5,-146.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(0.5,1,1).p("Ak7jBQgSASADANQADAMAQAGQAPAGAUgCQATgCANgMQABAJABAJQAQADAQgEQAQgFAPgHQAOgIANgIQgKAHgRARQgSARgRAWQgRAVgJAUQgJAVAHAMQAIAKAXgGQAYgHAcgPQAdgPAYgQQAYgRAIgKQgDAKgBAMQgBAMACAMQAPADAMgFQANgGADgHQgDAIAAAJQAAAKgBAHQAMAAAKgCQALgCAHgJQgIAQACAMQADAMAIAEQAKAFAMgFQALgFAHgSQgEARAGAOQAGALAKABQAJABAJgMQgHALgCAKQgEAOALAPQgTAJgBAOQgCAOAJAQQAJAQAMAOQAMAOAJAIQAlAhAkAFQAkAFApggQApggAJgkQAKglgNgkQgMgigZghQgZgigbgbQAQAEATACQAUACAMgHQAMgIgGgZQAQAEALgJQAKgIADgOQACgPgFgMABTABQACgBADgF");
	this.shape_180.setTransform(-168.3,-134.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#104442").s().p("AC3DCQgkgFglghQgJgIgMgOQgMgOgJgQQgJgQACgOQABgOATgJQgLgPAEgOQACgKAHgLQgJAMgJgBQgKgBgGgLQgGgOAEgRQgHASgLAFQgMAFgKgFQgIgEgDgMQgCgMAIgQQgHAJgLACQgKACgMAAQABgHAAgKQAAgJADgIQgDAHgNAGQgMAFgPgDQgCgMABgMQABgMADgKQgIAKgYARQgYAQgdAPQgcAPgYAHQgXAGgIgKQgHgMAJgVQAJgUARgVQARgWASgRQARgRAKgHIgbAQQgPAHgQAFQgQAEgQgDIgCgSQgNAMgTACQgUACgPgGQgQgGgDgMQgDgNASgSIKDAFQAFAMgCAPQgDAOgKAIQgLAJgQgEQAGAZgMAIQgMAHgUgCQgTgCgQgEQAbAbAZAiQAZAhAMAiQANAkgKAlQgJAkgpAgQgjAbgfAAIgLAAgABTABIAFgGIgFAGg");
	this.shape_181.setTransform(-168.3,-134.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#65393E").s().p("AjxDYQAfgkAhggIBChAQAighAfglIBBhNQAjgnAogiQAKgIAPgTIAigoQASgVASgPQASgPAOgBQAOAAAHAXQh9BrhxB7QhvB5hbCJg");
	this.shape_182.setTransform(-181,-120.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(0.5,1,1).p("AjqAvQABAAAWgSQAWgTAkgbQAkgeApgjQApgjAlgiQAngjAdgcQAcgbALgQQAMgRAQAAQAQgBARAJQARAJAPAMQAOAMAKAKQAJAKAAAAQgBABgdAaQgeAagwAvQgxAvg6A+Qg4A8g7BHQg7BIgzBM");
	this.shape_183.setTransform(-180.3,-122.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#441B1E").s().p("AjqAvIAXgSIA6guIBNhBIBOhFQAngjAdgcQAcgbALgQQAMgRAQAAQAQgBARAJQARAJAPAMIAYAWIAJAKIgeAbQgeAagwAvQgxAvg6A+Qg4A8g7BHQg7BIgzBMg");
	this.shape_184.setTransform(-180.3,-122.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(0.5,1,1).p("ASyimQgPgDgkgKQglgLg0gQQgzgQg6gTQg6gSg6gTQg5gSgxgQQg8gTg/gYQhAgYhCgXQhEgYhIgSQhIgRhOgIQhAgFhaAIQhZAHhtALQhsAKhzAGQh0AGhwgIQhwgIhkgeQh8gmhtgUQhtgUhTgIQhUgIgvAAQgwgBgBAAQgjgGgrgEQgqgFgrgCQgqgCgkgBQgkgBgVgBQgWAAAAAAQgBAAgRAFQgRAFgYAHQgYAHgWAHQgWAHgMAGQgFADgCAoQgDAngCBDQgBBDAABVQAABVABBeQABBcACBeQABBdACBUQABBVACBBQABBCABAlQABAmAAABMA7UAAA");
	this.shape_185.setTransform(-13.1,94.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#99C81E").s().p("A9jJOIgBgnIgChnIgDiWIgDixIgCi6IgBizIABiYQABhDADgnQADgoAEgDQAMgGAWgHIAugOIAqgMIARgFIAWAAIA5ACIBOADQArACArAFQAqAEAjAGIAxABQAvAABUAIQBTAIBuAUQBtAUB7AmQBkAeBwAIQBxAIBzgGQBzgGBsgKQBtgLBZgHQBagIBAAFQBOAIBIARQBIASBEAYQBDAXA/AYQA/AYA8ATIBqAiIBzAlIBuAjIBYAbQAlAKAPADIK+L0g");
	this.shape_186.setTransform(-13.1,94.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(0.5,1,1).p("ApjltIjEh8QAAAAAegEQAfgFA7gBQA6gCBWAGQBVAHBtAVQBKAPBUAMQBSAMBXAKQBUAKBSAIQBSAIBHAFQBHAGA1AEQA0ADAcACQAgACAogEQApgFAqgIQApgIAigIQAjgIAVgGQAVgGAAAAIAAOc");
	this.shape_187.setTransform(87.1,101.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CAE616").s().p("ApjltIjFh8IAfgEQAfgFA7gBQA7gCBVAGQBVAHBtAVQBKAPBUAMQBTAMBWAKQBUAKBSAIQBSAIBHAFIB7AKIBRAFQAgACAogEQApgFApgIIBMgQIA4gOIAVgGIAAOcg");
	this.shape_188.setTransform(87.1,101.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(0.5,1,1).p("AEwBgIBXCZIsYlNQABgBAkgSQAlgSA9gaQA9gaBMgZQBLgZBOgOQBPgPBJAFQBIAFA4AiQA2AjAWAkQAWAkgBAiQgBAigOAeQgOAcgTAXQgTAWgPANQgOANgBAAg");
	this.shape_189.setTransform(139.7,75.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#0D1C30").s().p("AmRhUIAlgTQAlgSA9gaQA9gaBMgZQBLgZBOgOQBPgPBJAFQBIAFA4AiQA2AjAWAkQAWAkgBAiQgBAigOAeQgOAcgTAXQgTAWgPANIgPANIBXCZg");
	this.shape_190.setTransform(139.7,75.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(0.5,1,1).p("AFyBhQgoAHgrADQgsAEglACQgmABgXABQgXAAgBAAQgBAAgggEQgggEg1gIQgygIg/gMQhAgNg/gQQg/gRg2gVQg1gTghgaQghgagCgfQABAAApgFQApgGBGgFQBHgGBZgCQBYgCBfAHQBgAGBeATQBdATBPAkQA6AcAVASQAVAVgJAQQgIAPgcAKQgcALgoAHg");
	this.shape_191.setTransform(90.9,66);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0A121A").s().p("ABYBvIhVgMQgygIg/gMQhAgNg/gQQg/gRg2gVQg1gTghgaQghgagCgfIAqgFQApgGBGgFQBHgGBZgCQBYgCBfAHQBgAGBeATQBdATBPAkQA6AcAVASQAVAVgJAQQgIAPgcAKQgcALgoAHQgoAHgrADQgsAEglACIg9ACIgYAAIghgEg");
	this.shape_192.setTransform(90.9,66);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#104340").s().p("AgtDxQAKgOAJgRIAOgcIAGgNIhCAlQAJgKANgXQANgXANgdIAYg3IAUgrIAHgSIgqAZQAZgtAPg1QAPg0ALg0IAWhYQgBARgCATQgHAngLAoIgVBQQADgHADgFIAHgLQABAXgJAVIAEgFIAEgFIAFATQABAKgCALQADgKADgFIAIgMIADAPQABAIgBAIIAEgKIAEgJQABARgDANQgDAOACAQIgDgLIgDgOIgEALQgCAGgCAHQgDADgEABIgCgMIgDgKIgEALIgEALIgCgHIgCgHQAAAWgKAXQgKAXgMAWQgKAWgHAUIARgSIAAAHIADAHQACgGAEgFIAGgMIAAAKIgBALIABAEIACgGIADgHIACAPQACAJgBAIIAKgRIAGgKQgHASgKARQgLARgIATQgFASACAVIgVABIgXACQgMACgHAEQAIgFAKgPg");
	this.shape_193.setTransform(-199.9,13);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(0.5,1,1).p("AAjlpQAAAAgEAcQgEAbgHAuQgHAtgLA3QgIA3gNA3QgOA2gPAwQgQAvgSAgIAsgZQAAABgIARQgHARgMAbQgMAagOAdQgOAcgNAXQgMAXgJAKIBCglQAAABgGAMQgGAMgJARQgJAQgKAPQgKAOgIAFIBKgKQAAAAAQgCQAPgCAYgDQAWgDAbgEQAagDAXgDQAYgEANgBIg8hDIBDATIhUjDIAtANQgBgBgKghQgKghgOg7QgNg9gJhVQgKhUABhmg");
	this.shape_194.setTransform(-193.7,3.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#146262").s().p("AhxFXQAKgPAJgQIAPgdIAGgNIhCAlQAJgKAMgXQANgXAOgcIAag3IATgsIAIgSIgsAZQASggAQgvQAPgwAOg2QANg3AIg3QALg3AHgtIALhJIAEgcQgBBmAKBUQAJBVANA9QAOA7AKAhIALAiIgtgNIBUDDIhDgTIA8BDIglAFIgxAGIgxAHIgnAFIgQACIhKAKQAIgFAKgOg");
	this.shape_195.setTransform(-193.7,3.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#104340").s().p("AgWBMIgTgDQAFgFAGgIIAMgQQAGgHAFgCIgJAEIgRAFIgKAEQAHgFAKgNIAVgcIAQgYIAIgLIgXAIQATgYAMgcQgGASgCAPIAMgKIAAAMQABAFgBAHIAHgHIAGgEIgEAJIgFAKIAFgGIAEgFQgBAGgDAEIgFALQgOgFgIALQgIAIgEASQgCASgBARIAAAXIgUgCg");
	this.shape_196.setTransform(-161.2,34.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(0.5,1,1).p("AA2iaQAAAAgFARQgFARgJAaQgIAagMAdQgLAegLAXQgNAagNAQIAYgJQAAAAgHALQgHALgLAPQgLAPgKANQgKANgHAFIAkgNQAAABgGAIQgGAIgIAJQgIAJgHADIAngBQABAAAMAAQAMAAAPgBQARAAAQAAQARgBAJAAIgcggIAiALIghhZIAWAHQAAAAgGgaQgFgYgDgvQgCguAIg8g");
	this.shape_197.setTransform(-158.3,26.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#146262").s().p("Ag4CPIAOgRIAGgJIgkANQAHgFAKgNIAVgcIASgaIAHgLIgYAJQANgQANgaQALgXALgeQAMgdAIgaIAOgrIAFgRQgIA8ACAuQADAvAFAYIAGAaIgWgHIAhBZIgigLIAcAgIgaABIghAAIgbABIgNAAIgnABQAHgDAIgJgAA2iaIAAAAIAAAAg");
	this.shape_198.setTransform(-158.3,26.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(0.5,1,1).p("AA2iaQAAAAgFARQgFARgJAaQgIAagMAdQgLAegLAXQgNAagNAQIAYgJQAAAAgHALQgHALgLAPQgLAPgKANQgKANgHAFIAkgNQAAABgGAIQgGAIgIAJQgIAJgHADIAngBQABAAAMAAQAMAAAPgBQARAAAQAAQARgBAJAAIgcggIAiALIghhZIAWAHQAAAAgGgaQgFgYgDgvQgCguAIg8g");
	this.shape_199.setTransform(-158.3,26.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#146262").s().p("Ag4CPIAOgRIAGgJIgkANQAHgFAKgNIAVgcIASgaIAHgLIgYAJQANgQANgaQALgXALgeQAMgdAIgaIAOgrIAFgRQgIA8ACAuQADAvAFAYIAGAaIgWgHIAhBZIgigLIAcAgIgaABIghAAIgbABIgNAAIgnABQAHgDAIgJgAA2iaIAAAAIAAAAg");
	this.shape_200.setTransform(-158.3,26.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(0.5,1,1).p("AA1iZQAAABgFAQQgFARgHAaQgJAagKAdQgKAdgJAXQgMAagMAPIAVgIQgBAAgGALQgGALgJAOQgKAPgJANQgKANgFAFIAfgMQgBAAgFAJQgFAIgHAJQgIAIgFADIAiAAQAAAAAKAAQAKAAANAAQAPAAAOAAQANAAAIAAIgXghIAdAMIgZhaIASAIQAAAAgEgbQgEgYgBguQgBguAIg9g");
	this.shape_201.setTransform(56,44.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#104442").s().p("AAiCaIgcAAIgXAAIgLAAIghAAQAGgDAHgIIAMgRIAGgJIgfAMQAGgFAJgNIASgcIAQgZIAHgLIgVAIQAMgPAMgaQAJgXAKgdIASg3IAOgrIAEgRQgIA9ABAuQABAuAEAYIAEAbIgTgIIAaBaIgdgMIAXAhIgWAAgAA1iZIAAAAIAAAAg");
	this.shape_202.setTransform(56,44.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(0.5,1,1).p("AANhIQgDAOgGAUQgEAUgIASQgHATgKAMIAPgGQgBABgGAKQgGAKgIAMQgIALgFAFIAVgJQAAAAgDAFQgDAFgFAFQgEAFgEACIAYgDQABAAAMgBQAKgCAPgCQAPgBAHgBIgTgQIAWAEIgaguIAOADQAAgBgFgNQgFgMgEgZQgEgZABghQAAABgDAOg");
	this.shape_203.setTransform(86.7,49.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#0B2826").s().p("AghBQIAHgKIADgFIgVAKQAFgGAIgLIAPgWIAGgLIgOAGQAJgMAIgTQAHgRAEgVIAJgiIADgOQgBAhAEAYQAFAZAEAMIAGAOIgPgDIAaAvIgWgFIATAQIgWACIgZAEIgNACIgYACQAEgBAFgGgAAQhWIAAAAIAAAAg");
	this.shape_204.setTransform(86.7,49.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AghBQIAHgKIAEgFIgWAKQAFgGAIgLIAPgWIAGgLIgOAGQAJgMAIgTQAHgRAEgVIAJgiIADgOQgBAgAEAZQAFAZAEALIAGAPIgPgDIAaAvIgVgFIASAQIgWACIgZAEIgNACIgYACQAEgBAFgGg");
	this.shape_205.setTransform(76.4,49.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(0.5,1,1).p("AAqiCQAAACgGATQgFAWgKAeQgJAfgMAbQgKAdgNARIASgHQAAABgFAJQgGAJgIANQgIAMgHALQgIALgFAFIAbgLQgBABgEAHQgFAHgGAHQgGAIgEACIAcAAQABAAAOgBQANAAARAAQARAAAJAAIgTgcIAYAKIgXhNIAQAHQAAgBgEgWQgDgUgCgoQgBgnAGgzg");
	this.shape_206.setTransform(162.5,40.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0B2826").s().p("Ag0CDQAFgBAGgIIAKgPIAGgHIgbALQAFgFAHgLIAQgYIAOgVIAFgKIgSAHQANgRAKgdQALgbAKgfIAPg0IAGgVQgGAyABAoQACAnADAVIAEAWIgQgGIAXBNIgZgKIAUAcIgbAAIgdAAIgPAAg");
	this.shape_207.setTransform(162.5,40.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(0.5,1,1).p("AAKh2QAAAAgDATQgCATgFAcQgEAcgGAYQgIAbgIAQIAOgJQAAABgEAIQgDAJgGAMQgFAMgFAKQgGALgEAEIAWgMQAAAAgDAHQgDAGgFAHQgFAIgDACIAYgDQABAAANgCQAKgCAPgCQAOgCAJgBIgUgWIAWAGIgchAIAPAEQgBAAgFgTQgHgRgFgiQgFgiAAgtg");
	this.shape_208.setTransform(150.6,40.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#104442").s().p("AgiBtIAHgNIAEgHIgWAMQAEgEAFgLIALgWIAJgVIAEgJIgPAJQAJgQAHgbQAIgYADgcIAHgvIACgTQAAAtAGAiQAGAiAFARIAGATIgPgEIAdBAIgWgGIATAWIgWADIgZAEIgOACIgYADQAEgCAEgIgAAgAfIAAAAIAAAAg");
	this.shape_209.setTransform(150.6,40.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgfBjIAHgMIADgHIgUALQAFgFAHgOIANgbIAGgNIgOAHQAIgOAHgZQAGgWADgZIAGgqIADgSQAAApAFAfQAFAeAFAPIAFASIgNgDIAaA5IgVgFIASAUIgUADIgXAEIgMABIgWADQADgCAEgHgAAdAcIAAAAIAAAAg");
	this.shape_210.setTransform(135.8,49.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgfBlIAHgMIACgHIgTALQAFgFAGgPIAOgbIAFgOIgNAIQAIgPAHgZQAGgWAEgaIAGgrIADgSQAAAqAFAfQAFAgAFAPIAFASIgOgEIAaA8IgUgGIASAUIgVADIgXAEIgMABIgXADQAEgCAEgHg");
	this.shape_211.setTransform(-170,26.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAHA/IgNgBIgIgBIgOgBQAEgBAFgHIAFgGIgNAEQADgDAHgHIALgPIAFgIIgJADQAHgHAFgNQAHgNAGgPIAKgZIAEgKQgIAlABAZQAAAVABABIgIgEIAIAnIgLgGIAIAOIgNgBg");
	this.shape_212.setTransform(-16.6,43.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAJA2IgMgBIgGAAIgMAAQAEgBADgGIAFgGIgMAFQADgDAFgHIAIgNIAFgGIgIADQAHgKAFgPIALggIAEgPQgEAgACAUIACASIgGgDIAIAgIgKgEIAIAMIgKAAg");
	this.shape_213.setTransform(-140.5,33.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgSBYIAFgKIACgGIgMAIIAJgRIAJgXIAFgMIgIAGQAGgNAEgVIALgqIAIglIADgPQgEAkAAAdQgBAcABAOIABAQIgHgEIAIA3IgLgHIAIAUIgLABIgMAAIgHABIgMAAQACgBADgGg");
	this.shape_214.setTransform(46.5,48.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(0.5,1,1).p("AAmicQAAACgDAPQgDARgGAaQgFAagHAeQgHAegHAXQgGAbgHAPIALgIQAAABgEAKQgEALgGAPQgGAOgFAOQgGANgDAFIARgMQAAAAgDAJQgDAIgFAJQgEAJgDADIASAAQAAAAAJAAQAKABAIAAQALAAAGAAIgKgiIAOANIgJhdIAKAJQgBAAAAgbQgBgZABgwQACgvAHg9g");
	this.shape_215.setTransform(40.7,41.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#104442").s().p("AAICdIgSgBIgJAAIgSAAQADgEAEgIIAIgRIADgJIgRAMQADgFAGgNIALgcIAKgaIAEgLIgLAIQAHgPAGgaIAOg2IAMg4IAJgrIADgRQgHA9gCAvQgBAwABAYIABAcIgKgJIAJBdIgOgNIAKAiIgRAAg");
	this.shape_216.setTransform(40.7,41.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#104340").s().p("AgTDAQgRgUgBgkIAJAXQgBgIACgFIAEgLIAHAEIAEABQADAKAGAIQgBgNgIgRIAAAAIgEgNIAAAEIgLgZQgIgSgDgQQgDgPAHgLIABATIABgMQAGgHACgJQABgIgCgMIAJAXIAAgtIAAgDIAAgBIABg8QAAgkAGgiQAFgjAMgWQgCAvABAvQAAAvAFAvIABAPIADAWQABAOADAKQACAKAEACIgIgDIgOgHIgGgEIAqCJIgLgGIgVgKIgKgFQAFADAHALQAHAKAGALIAHASIgJABQgZAAgPgRgAgdAdIgBAGIgBACIACgIg");
	this.shape_217.setTransform(116.1,40.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(0.5,1,1).p("ABDjjQgBACgGAXQgGAYgLAlQgLAmgOApQgOAqgPAjQgQAkgSAVIAggKQgBABgJAPQgJAPgOAVQgOAVgNASQgNASgJAHIAvgPQAAABgIALQgIAMgKAMQgLAMgIADIAzAEQAAAAAQABQAQABAVACQAWACAWABQAVACAMABIgkgzIAsAVIgsiJIAdAPQgBgBgHgoQgIglgEhFQgEhEAKhYg");
	this.shape_218.setTransform(110.6,38.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#146262").s().p("AA3DhIgsgDIglgDIgQgBIgzgEQAIgDALgMQAKgMAIgMIAIgMIgvAPQAJgHANgSIAbgnIAXgkIAKgQIggAKQASgVAQgkQAPgjAOgqQAOgpALgmIARg9IAHgZQgKBYAEBEQAEBFAIAlQAHAoABABIgdgPIAsCJIgsgVIAkAzIghgDg");
	this.shape_219.setTransform(110.6,38.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#104340").s().p("AgMCKIgogEIgBAAQAGgCAIgHQAIgIAFgHIAGgIIgjAJQAHgEAJgLIAUgZIAPgWIAFgKIgVAGQANgOAJgWQAMgVAKgbQAJgaAIgYIALgmIAEgNQgLAngMApIgZBSIAEgIIAEgGIgEAKIgDANIAOgPIAIgLIgZArQgNAagIAYIAHgIIAFgHQgCAGAAAIIgBAOQAEgCABgDIABgGIAAALIgBAJIABgGIAGgJIACgCQAAALAGAKQAEAKAJAHQgVAAgSgDg");
	this.shape_220.setTransform(25.7,37.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(0.5,1,1).p("AApiPQAAABgEAPQgFAPgHAYQgHAYgKAaQgIAagLAVQgMAXgMANIAXgGQAAABgHAJQgHAKgJANQgKANgKALQgJAMgHAEIAjgJQAAAAgGAIQgFAHgIAHQgHAIgGACIAmADQAAAAAMABQAMAAAPABQARACAQABQAQABAJAAIgdggIAiAOIgkhXIAWAJQAAAAgHgZQgGgXgFgsQgEgrAFg4g");
	this.shape_221.setTransform(27.2,37.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#146262").s().p("AAqCPIghgDIgbgCIgMgBIgmgCQAGgCAHgIIANgPIAGgIIgjAJQAHgDAJgMIAUgYIAQgXIAHgKIgXAGQAMgOAMgWQALgVAIgbQAKgZAHgYIAMgoIAEgPQgFA4AEArQAFArAGAXIAHAaIgWgKIAkBYIgigPIAdAhIgZgBgAApiPIAAAAIAAAAg");
	this.shape_222.setTransform(27.2,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-166.5,414.9,322.4);


// stage content:



(lib.sentenceSwiperCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		
		qNum = 0; //................Question number
		questions = ["Find the subject of the sentence", "Find the transitive verb in the sentence", "Find the intransitive verb in the sentence"];
		expectedParts = ["sub", "trans_verb", "intrans_verb"];
		
		sNum = 0; //................Sentence number
		wNum = 0; //................Word number
		wXPos = 0; //...............X Position of words (grows with each new word)
		wYPos = 0; //...............Y Position of words
		wXLimit = 300; //...........X Limit to start a new line
		wGray = "0x999999"; //......Gray, regular color of words
		wRed = "0x82C9FD"; //.......Red, rollover color of words
		formatting = new TextFormat("Book Antiqua", 18, wGray, true); //...Format text
		
		Sentences = new XML(); //...Create + prepare new XML object
		Sentences.ignoreWhite = true;
		Sentences.onLoad = function (success){
			if (success) {
				newSentence(this, sNum);
			}
		}
		Sentences.load('sentences.xml'); //...Load new XML object
		//*******************************************************************
		//                         ~~Functions~~
		//*******************************************************************
		function newSentence (xml_file, sNum){
			totalNum = xml_file.firstChild.childNodes.length;
			secondLayer = xml_file.firstChild.childNodes[sNum].childNodes;
			for (i=0; i<secondLayer.length; i++) {
				str = secondLayer[i].firstChild.nodeValue;
				part = secondLayer[i].attributes.part;
				displayWord (str, part);
			}
			nextQ(true);
		}
		function displayWord(str, part) {
			newMC = ["mc"+wNum];
			newMC = sentenceLoad.createEmptyMovieClip("mc"+wNum, 500+wNum);
			newMC.part = part;
			newMC.createTextField("textfield", 0, 0, 0, 0, 0);
			newMC.textfield.autoSize = true;
			newMC.textfield.setNewTextFormat(formatting);
			newMC.textfield.text = str;
			newMC._x = wXPos;
			newMC._y = wYPos;
			wXPos += newMC._width;
			if (wXPos > wXLimit) {
				wYPos += 25;
				wXPos = 0;
			}
			wNum++;
		}
		function changeSentence(dir) {
			if (!arrow.counting) {
				for (i=0; i<wNum; i++) {
					removeMovieClip(sentenceLoad["mc"+i]);
				}
				wNum=wXPos=wYPos=0;
				if (dir) {
					sNum++;
				} else {
					sNum--;
				}
				newSentence(Sentences, sNum);
				arrow._x = arrow.leftBound - 1;
			}
		}
		function arrowHighlight() {
			if (arrow.hitTest(sentenceLoad)) {
				for (q=0; q<wNum; q++) {
					tempMC = sentenceLoad["mc"+q];
					if (arrow.hitTest(tempMC)) {
						tempMC.shade = new Color(tempMC);
						tempMC.shade.setRGB(wRed);
					} else {
						tempMC.shade = new Color(tempMC);
						tempMC.shade.setRGB(wGray);
					}
				}
			} else {
				for (w=0; w<wNum; w++) {
					tempMC = sentenceLoad["mc"+w];
					tempMC.shade = new Color(tempMC);
					tempMC.shade.setRGB(wGray);
				}
			}
		}
		function arrowMovement() {
			arrowHighlight();
			if (arrow.moveRight) {
				arrow._x += arrow.speed;
			}
			if (arrow.moveLeft) {
				arrow._x -= arrow.speed;
			}
			if (arrow._x <= arrow.leftBound) {
				arrow.moveLeft = false;
				arrow.moveRight = true;
			}
			if (arrow._x>=arrow.rightBound) {
				arrow.moveRight = false;
				arrow.moveLeft = true;
			}
		}
		function spaceStop() {
			if (!arrow.counting) {
				if (arrow.moveRight) {
					arrow.lastDir = "Right";
				} else {
					arrow.lastDir = "Left";
				}
				arrow.moveRight = false;
				arrow.moveLeft = false;
				checkAnswer();
				countDown(3);
			}
		}
		function countDown(countAmount) {
			arrow.counting = true;
			var startTime = getTimer();
			var elapsed = 0;
			this.createTextField("counterOutput_txt", 1, -50, 200, 200, 20);
			this.onEnterFrame = function() {
				elapsed = getTimer()-startTime;
				if (elapsed<countAmount*1000) {
					this.counterOutput_txt.text = countAmount-Math.floor(elapsed/1000);
				} else if (counterOutput_txt.text == 1) {
					arrow.counting = false;
					counterOutput_txt.text = "";
					arrow["move"+arrow.lastDir] = true;
				}
			}
		}
		function checkAnswer() {
			//trace("Checking for the "+expectedParts[qNum]+"..."); //Debug only
			if (arrow.hitTest(sentenceLoad)) {
				for (q=0; q<wNum; q++) {
					tempMC = sentenceLoad["mc"+q];
					if (arrow.hitTest(tempMC)) {
						if (tempMC.part == expectedParts[qNum]) {
							character.gotoAndPlay("correct");
							nextQ(false);
							//trace("Good job!");
						} else {
							//trace("Wrong!"); //Debug only
							character.gotoAndPlay("incorrect");
							tryAgain.play();
						}
					}
				}
			} else {
				//trace("Wrong!"); //Debug only
			}
		}
		function nextQ(fresh) {
			//goto next question
			if(fresh) {
				qNum = 0;
			} else {
				qNum++;
			}
			instructionsScroll.nextQuestion = questions[qNum];
			instructionsScroll.play();
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Congrat
	this.text = new cjs.Text("Congratulations!", "48px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 50;
	this.text.setTransform(249.3,279.8);

	this.text_1 = new cjs.Text("Congratulations!", "48px 'Arial'", "#623031");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 50;
	this.text_1.setTransform(250.6,282.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egq7gfRMBV3AAAMAAAA+jMhV3AAAg");
	this.shape.setTransform(274.9,200.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Arrow
	this.instance = new lib.Leafpic("synched",0);
	this.instance.setTransform(437,314.9,1.469,2.189,-78.9);
	this.instance.alpha = 0.441;

	this.instance_1 = new lib.Leafpic("synched",0);
	this.instance_1.setTransform(403.4,331.3,1.469,2.189,-78.9);
	this.instance_1.alpha = 0.441;

	this.instance_2 = new lib.Leafpic("synched",0);
	this.instance_2.setTransform(388.5,303.4,1.47,2.191,172.1);
	this.instance_2.alpha = 0.441;

	this.instance_3 = new lib.Leafpic("synched",0);
	this.instance_3.setTransform(365.5,338.7,1.472,2.194,-70.3);
	this.instance_3.alpha = 0.441;

	this.instance_4 = new lib.Leafpic("synched",0);
	this.instance_4.setTransform(363.8,310.8,1.472,2.194,-70.3);
	this.instance_4.alpha = 0.441;

	this.instance_5 = new lib.Leafpic("synched",0);
	this.instance_5.setTransform(323.6,342.1,1.472,2.194,-70.3);
	this.instance_5.alpha = 0.441;

	this.instance_6 = new lib.Leafpic("synched",0);
	this.instance_6.setTransform(335.8,320.6,1.472,2.194,-162.6);
	this.instance_6.alpha = 0.441;

	this.instance_7 = new lib.Leafpic("synched",0);
	this.instance_7.setTransform(305.4,309.9,1.474,2.197,-42.5);
	this.instance_7.alpha = 0.441;

	this.instance_8 = new lib.Leafpic("synched",0);
	this.instance_8.setTransform(289,345.3,1.474,2.197,-42.5);
	this.instance_8.alpha = 0.441;

	this.instance_9 = new lib.Leafpic("synched",0);
	this.instance_9.setTransform(275,314.9,1.474,2.197,-133.3);
	this.instance_9.alpha = 0.441;

	this.instance_10 = new lib.Leafpic("synched",0);
	this.instance_10.setTransform(248.8,337.1,1.477,2.201,-83.4);
	this.instance_10.alpha = 0.441;

	this.instance_11 = new lib.Leafpic("synched",0);
	this.instance_11.setTransform(220.8,308.2,1.477,2.201,-178.2);
	this.instance_11.alpha = 0.441;

	this.instance_12 = new lib.Leafpic("synched",0);
	this.instance_12.setTransform(194.5,335.3,1.479,2.204,70);
	this.instance_12.alpha = 0.441;

	this.instance_13 = new lib.Leafpic("synched",0);
	this.instance_13.setTransform(170.6,310.8,1.478,2.203,171.5);
	this.instance_13.alpha = 0.441;

	this.instance_14 = new lib.Leafpic("synched",0);
	this.instance_14.setTransform(148.3,343.7,1.478,2.203,-101.7);
	this.instance_14.alpha = 0.441;

	this.instance_15 = new lib.Leafpic("synched",0);
	this.instance_15.setTransform(140.2,311.6,1.478,2.203,-101.7);
	this.instance_15.alpha = 0.441;

	this.instance_16 = new lib.Leafpic("synched",0);
	this.instance_16.setTransform(100.7,297.5,1.479,2.204,162);
	this.instance_16.alpha = 0.441;

	this.instance_17 = new lib.Leafpic("synched",0);
	this.instance_17.setTransform(93.3,335.4,1.479,2.204,70);
	this.instance_17.alpha = 0.441;

	this.instance_18 = new lib.Leafpic("synched",0);
	this.instance_18.setTransform(60.4,296.9,1.481,2.207,103.3);
	this.instance_18.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Table
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99C81E").s().p("AAVAHQgSgJgRgIIghgNIgOgFQAsAIAaAOQAbALANAKIANANIgPABQgIgMgSgKg");
	this.shape_1.setTransform(218.5,328.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99C81E").s().p("AgaAgIADgNQAEgNAMgQQAKgRAZgNIgLAJQgMAJgKATQgLARgBAbg");
	this.shape_2.setTransform(230.4,326.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E4C07C").ss(1,1,1).p("ADCjDQgBAAgbAOQgaANgsAYQgrAYgyAgQgxAfgxAmQgxAjglAqIgMCK");
	this.shape_3.setTransform(198.7,286);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E4C07C").ss(1,1,1).p("ACdiuIk5DWIAECH");
	this.shape_4.setTransform(171.2,275.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E4C07C").ss(1,1,1).p("ACWiVIkrDDIAABo");
	this.shape_5.setTransform(143.9,267.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E4C07C").ss(1,1,1).p("ACliBIlJCjIAABg");
	this.shape_6.setTransform(118.9,263.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,1,1).p("AMcgbQgvgUhWgfQhWgfh4giQh4giiUgeQiUgdipgRQiqgRi6ADIllCMQABAAAtAEQAuAEBQAKQBPAKBnATQBnATBzAdQBzAeB2AoQBzAqBsA5QBsA6BZBKQAAgBAUgUQAUgVAmggQAmghA3gmQA4glBIgkQBIgjBXgXQAAAAgugUg");
	this.shape_7.setTransform(158.9,276.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C18C1B").s().p("AC7CJQhsg5hzgqQh1goh0geQhzgdhngTQhmgThQgKQhQgKgtgEIgvgEIFliMQC6gDCrARQCoARCUAdQCUAeB4AiQB4AiBWAfQBWAfAuAUIAvAUQhXAXhIAjQhIAkg4AlQg4AmgmAhQglAggUAVIgUAVQhYhKhtg6g");
	this.shape_8.setTransform(158.9,276.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.5,1,1).p("ACsi+QggAGglAIQglAHgjAIQghAIgaAHQgaAHgKAEQgLAHgSAWQgSAXgVAeQgUAegSAbQgSAdgMATQgLATgBABIggCGQABgBAegXQAegXAzgkQAygjA9gmQA6gmA+gdQA9geA0gOIAhiPQgBAAgUAEQgUADggAHg");
	this.shape_9.setTransform(218.6,296.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#794D1F").s().p("AjUBHIANgTIAdgwQASgbAUgfQAVgeASgWQASgXAMgGQAJgFAbgGQAagIAggHIBIgQIBFgNIA1gKIAUgFIggCQQg1ANg9AfQg+Acg6AnQg9AmgyAjQgzAkgeAWIgfAYg");
	this.shape_10.setTransform(218.6,296.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.5,1,1).p("AJqBxQgBgKgsggQgsgghSgrQhRgshxgwQhxgviJgoQiIgoidgWQidgXipADIAABiQAAgBAnACQAmACBFAIQBFAIBcASQBcARBrAfQBsAeBzAvQB0AtB2BEQB1BDBwBbQAAgBAHgSQAGgSAIgaQAIgaAGgYQAGgZABgPg");
	this.shape_11.setTransform(136.5,290.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A77833").s().p("AFbBsQh3hEhzgtQhzgvhsgeQhsgfhbgRQhcgShFgIQhFgIgmgCIgogBIAAhiQCqgDCdAXQCcAWCIAoQCKAoBxAvQBwAwBSAsQBRArAtAgQAsAgABAKQgBAPgGAZQgGAYgJAaIgNAsIgHATQhwhbh1hDg");
	this.shape_12.setTransform(136.5,290.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#4B7118").ss(0.5,1,1).p("AjMAmQgCgrgUgmQAdASAUAXQATAUARAdQgFgYABgXQABgUgCgXQgBgWgKgXQAaAOASAZQARAYAJAbQAJAdgBAcQAGgbAJgSQAJgRAOgOQANgPAUgPQgNARgHASQgGAQgEATQgFARgIASQAJgTATgNQATgNATgDQgIAOgGARQgDAPACAQQAAACAAABQAAgBAAgBQATghAlgTQAmgUAugGQAtgIArACQgqAIgkAZQgkAcgTAn");
	this.shape_13.setTransform(186.4,347.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#84A816").s().p("AAABJQATghAlgTQAmgUAugGQAtgIAqACQgqAIgjAZQgkAcgTAngAhQA7QAHgbAJgSQAJgRANgOQAOgPATgPQgMARgHASIgKAjQgGARgHASQAJgTASgNQAUgNATgDQgJAOgFARQgDAPACAQgAhQA7Ih9gVQgCgrgTgmQAdASATAXQAUAUAQAdQgEgYABgXQAAgUgBgXQgBgWgLgXQAaAOASAZQASAYAJAbQAIAdgBAcg");
	this.shape_14.setTransform(186.4,347.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.5,1,1).p("AgEgWQgNA3gPBAQgQBAgQA/IBcAAQAAgBABgaQABgbACgqQACgrADgxQAEgwAEgwQAEgvAFgkQAFglAGgQIgYgbQAAAAgGAaQgGAbgKAtQgLAtgMA6g");
	this.shape_15.setTransform(186.2,329.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#794D1F").s().p("Ag/DgIAeh/IAdh3IAWhnIARhIIAGgaIAXAbQgFARgFAkQgFAkgEAvIgIBgIgFBcIgEBFIAAAbg");
	this.shape_16.setTransform(186.2,329.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.5,1,1).p("AgoBFIBRgzIggg1Igxghg");
	this.shape_17.setTransform(123.7,281.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#794D1F").s().p("AgohEIAxAhIAgA1IhRAzg");
	this.shape_18.setTransform(123.7,281.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.5,1,1).p("AgGhEIgbBIIA6BBIAJhtg");
	this.shape_19.setTransform(117,281.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C18C1B").s().p("AghAEIAbhIIAoAcIgJBtg");
	this.shape_20.setTransform(117,281.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(0.5,1,1).p("AACjvQAAAAgCAXQgFAXgHAmQgIAmgJAtQgJAugIAtQgJAugIAoQgHAogFAaQgEAbAAAFIAAAOIAuAXQAAgBAHgbQAHgcAKgsQAKgsANg0QANgxANgxQAOgxAKgkQALgkAGgNg");
	this.shape_21.setTransform(183.2,328);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C18C1B").s().p("AhPDZIAAgOQgBgFAFgbIAMhCIAQhWIAShbIARhTIALg9IADgXIBPAzQgHANgKAkIgYBVIgaBiIgXBgIgRBIIgHAcg");
	this.shape_22.setTransform(183.2,328);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.5,1,1).p("AHFDfQAQAQgBAGQgBAHgLABQgKABgKgBQgKgCgBAAQgBAAghgTQgigSg5gfQg6gghJgnQhJgnhPgrQhNgohMgpQhNgphBgiQhBgigtgWQgsgWgQgGQgBAAgGgIQgHgHgEgJQgEgJAJgGQAIgFAcADQABAAAjASQAjATA8AfQA8AgBLAnQBMAoBRArQBPApBNAqQBOAqBAAjQBAAkAqAYQApAYAKAIg");
	this.shape_23.setTransform(133.9,312.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C18C1B").s().p("AG0D9IgLgCIgigTIhbgxIiDhHIiYhSIiZhRIiOhLQhBgigtgWQgsgWgQgGIgHgIQgHgHgEgJQgEgJAJgGQAIgFAcADIAkASIBfAyICHBHICdBTICcBTICOBNIBqA8QApAYAKAIQAQAQgBAGQgBAHgLABIgKAAIgKAAg");
	this.shape_24.setTransform(133.9,312.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.5,1,1).p("ABYA1QgBABgSAPQgSAOgbAVQgaAUgdATQgeATgYAKQgXAKgLgIICcleQAAAAANAAQAMAAAQABQARACAMAFQAMAFABAKQAAAJgEAYQgDAXgEAeQgFAdgFAcQgFAagDASQgDATAAAAg");
	this.shape_25.setTransform(88,288.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#794D1F").s().p("Ah3CuICcleIANAAIAcABQARACAMAFQAMAFABAKQAAAJgEAYIgHA1IgKA5IgIAsIgDATIgTAQIgtAjQgaAUgdATQgeATgYAKQgNAFgJAAQgHAAgFgDg");
	this.shape_26.setTransform(88,288.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.5,1,1).p("ABaitQgTACgOACQgOADgBAAQAAABgQAZQgPAYgWAmQgXAmgZAoQgYAngTAgQgTAfgGAMQgFALAIAKQAIAJAPAHQAPAIARAFQAQAFALADQAMACAAAAQABAAALgXQALgXAPgkQASglAUgpQAUgnASgnQASgmANgbQAMgaADgHQADgIgNgCQgMgCgSABg");
	this.shape_27.setTransform(79.2,288.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C18C1B").s().p("AgqCsIgbgIQgRgFgPgIQgPgHgIgJQgJgKAGgLIAYgrIAshHIAwhOIAlg+IAQgaIAPgDQAOgCATgCQASgBAMACQANACgDAIIgPAhIgfBBIgmBOIgmBOIgaA7IgMAXIgMgCg");
	this.shape_28.setTransform(79.2,288.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.5,1,1).p("ABLgJQgoAVgqAYQgrAYgmAVQgnAUgXANQgYANgBAAQAAAAgFgBQgFgCgEgFQgFgFACgKQABgKAMgSQAAAAAYgOQAYgOAngWQAmgXAsgXQApgZAogXQAogXAbgQQAbgPAFgDQAKgEAHAHQAHAHAAANQgBANgNAPQgIAHgcARQgdASgoAXg");
	this.shape_29.setTransform(204.7,322.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C18C1B").s().p("Ai0B+QgFgCgEgFQgFgFACgKQABgKAMgSIAYgOIA/gkIBSguIBRgwIBDgnIAggSQAKgEAHAHQAHAHAAANQgBANgNAPQgIAHgcARIhFApIhSAtIhRAtIg+AhIgZANIgFgBg");
	this.shape_30.setTransform(204.7,322.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.5,1,1).p("AhGivQAAAAADAYQACAYAFAmQAEAmAFAtQAFArAFArQAEAqAEAhQADAhACAPIBjgFQAAgBgEgZQgDgagHgpQgGgogIgwQgIgtgIgsQgJgsgHgfQgIgggEgKQgJgNgLAAQgMAAgLAGQgLAHgIAHQgHAGAAABg");
	this.shape_31.setTransform(232.2,308.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#794D1F").s().p("AghCbIgIhLIgKhWIgJhTIgHg+IgDgYIAHgHQAIgHALgHQALgGAMAAQALAAAJAOQAEAKAIAfQAHAgAJAsQAIArAIAuIAOBYIAKBCIAEAaIhjAFIgFgwg");
	this.shape_32.setTransform(232.2,308.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.5,1,1).p("Ag5h3QAAAAADAWQADAWADAjQADAjACAmQACAoAAAmQgBAlgFAbQAAABAMAHQAMAHAXAEQAWAEAjgJQAAAAAAgXQAAgXAAgmQgBglgCgrQgCgqgEgqQgEgpgHggQgHghgKgOQgNgQgJABQgMABgKALQgKALgHAPQgHAOgFALQgEALAAABg");
	this.shape_33.setTransform(224.9,310);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C18C1B").s().p("AAADCQgXgEgMgHQgMgHAAgBQAFgbABglQABgmgDgoQgBgmgEgjIgGg5IgCgWIADgMIAMgZQAIgPAKgLQAKgLALgBQAJgBANAQQAKAOAIAhQAGAgAFApQADAqACAqIADBQIABA9IAAAXQgYAGgTAAIgPgBg");
	this.shape_34.setTransform(224.9,310);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#87AB17").s().p("AjrHKQgqgCgqgHQgpgIgigRQgigRgSgeQgRgeAFguQAEgaAMgbQANgcARgYQASgZASgTQALgKASgLQASgMAOgMQAOgMgBgNQgBgNgbgNQgPgHgXABQgXABgZAFIgyAJQgYAEgRAAIhfAEQgxACgugFQgogFgygKQgxgLgzgPQgzgPgtgTQgtgVgegbQgYgUgPgVQgPgWAAgXQAAgXAUgZQARgUAWgKQAWgKAYgFQAYgEAXgHQAYgGAUgNIgRgTQgJgKgNgGQAegrArgSQArgSAxgCQAxgDAvAEIBOADQAjABAegEQAfgEAggMQAggLAlgVQAcgPAlgJQAmgIAoAAQApgBAlAJQAlAIAbASQAbATASAaQASAbAQAeQAPAeARAcQARAcAWAVQArAjA4AWQA5AWA8AJQA8AKA3gDQA7gEBBgHQBAgIBAAAQBBABA7ASQAaAJAaAOIAzAZQAaANAbAHQAbAHAbABQAbABAbAAQAbABAcAEQAfAFAUAQQAUAQAAAVQgBAWgdAZQgVAPgeAEQgeAEgfgBIg6AAIg9ACQgjAAgoADQgnACgmAHQglAGgeANQgeAMgQAVQAWADAQALQAQAMgBAWQgXANgLAWIgXAsQgKAVgVALQgNAFgRgCIgigGQgRgFgOABQgRABgMADIgWAIQgKAEgOAEQg/ARgvgGQgwgGgogYQgogYgqgmQgWALgRAXQgSAXgQAaQgPAagQAVQgZAcgVARQgVASgaAIQgaAIgnABIgrABIggAAg");
	this.shape_35.setTransform(150.5,324);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAHA/IgNgBIgIgBIgOgBQAEgBAFgHIAFgGIgNAEQADgDAHgHIALgPIAFgIIgJADQAHgHAFgNQAHgOAGgOIAKgZIAEgKQgIAmABAXQAAAWABABIgIgEIAIAnIgLgHIAIAPIgNgBg");
	this.shape_36.setTransform(232.7,261.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Fence
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJA9QgMgDgEgTQgFgSAEgYQAFgaAKgQQALgQAKACQALACAGATQAEATgEAXQgFAagKAQQgLAPgJAAIgBAAg");
	this.shape_37.setTransform(449.6,396.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.5,1,1).p("ABjjxQgTAKgaAaQgaAagXAuIgYhAQAAABABAFQABAIgBAJQgBAJgFAGQgFAGgMgCQgMgCgGgKQgHgKgDgMQgEgMgFgJQgEgJgIgBQAAABABAZQAAAZAAAqQgBAqgBA0QgBAxgDA2QgDA1gFAwQgGAvgIAjICbAAQAAgBADgdQADgdAFgwQAFgvAIg5QAHg3AJg5QAJg5ALgwQAKgwAKgdQgBAAgSALg");
	this.shape_38.setTransform(433.8,382.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C18C1B").s().p("Ah1D9QAIgjAFgvQAGgwACg1IAFhnIACheIAAhDIgBgaQAIABAEAJQAFAJADAMQAEAMAGAKQAHAKALACQANACAEgGQAFgGACgJQABgJgBgIIgBgGIAYBAQAXguAZgaQAbgaASgKQATgLABAAQgKAdgKAwQgLAwgJA5IgQBwIgNBoIgIBNIgEAeg");
	this.shape_39.setTransform(433.8,382.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.5,1,1).p("ABdg0QgOA+gFBPQgEBQAKBcIjwAAIArmCQABgBALgNQALgNASgUQAQgTAQgSQAPgSAJgLQAAAAgCAKQgDAKgBAOQgCAOADALQABAIAGgHQAFgHAGgNQAGgNACgKQAEgLAAgBIAbArIAbhGIAVAxQAAgBAHgHQAGgIAMgKQALgJAOgGQAPgGAQAEQAAAAgMAYQgLAYgQAtQgQAugNA/g");
	this.shape_40.setTransform(452.2,385.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A77833").s().p("AigEFIArmCIAMgOIAcghIAhglIAYgdIgDAKQgCAKgBAOQgCAOADALQACAIAFgHQAFgHAGgNIAIgXIAEgMIAaArIAbhGIAWAxIAHgIQAGgIAMgKQAKgJAPgGQAPgGAQAEIgMAYQgLAYgRAtQgPAugOA/QgNA+gFBPQgEBQAKBcgAgUjuIAAAAIAAAAg");
	this.shape_41.setTransform(452.2,385.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AhtDUIDbhmIillBg");
	this.shape_42.setTransform(451.4,353.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C59B2C").s().p("Ag3jTIClFBIjbBmg");
	this.shape_43.setTransform(451.4,353.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgOAkQgGgOAAgWQAAgUAGgPQAGgPAIAAQAIAAAGAPQAGAPABAUQgBAWgGAOQgGAPgIAAQgIAAgGgPg");
	this.shape_44.setTransform(492.3,383.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgOAkQgGgOAAgWQAAgUAGgPQAGgPAIAAQAIAAAGAPQAGAPABAUQgBAWgGAOQgGAPgIAAQgIAAgGgPg");
	this.shape_45.setTransform(523,370.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.5,1,1).p("AAyiJQgXAhgZAlQgYAmgXAgQgYAigPAXQgPAYgCAEQgBAHAQATQAPASAWAWQAWAVAQAQQAPAPABABIArAFIA2mnQgBAAgOAVQgOAVgXAgg");
	this.shape_46.setTransform(435.4,353.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#794D1F").s().p("AAFDPIgQgQIgmglQgWgWgPgSQgQgTABgHQACgEAPgYIAng5IAvhGIAwhGIAlg1IAPgVIg2Gng");
	this.shape_47.setTransform(435.4,353.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.5,1,1).p("ABqkCQgWgHgigJQghgKgggKQghgKgZgJQgYgJgEgFQAAAAAAAcQAAAcgBAwQAAAvgBA8QgCA7gCA/QgCBAgEA+QgDA9gFAzQgFAzgHAhIELAAQAAgBAAgcQAAgcgBguQAAgvgBg5QAAg5gBg8QgBg5AAg1QgBg1AAgnQAAgmAAgQQgBAAgWgGg");
	this.shape_48.setTransform(491.5,379);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A77833").s().p("AiFFIQAHghAFgzQAFgzADg9IAGh+IAEh6IABhrIABhMIAAgcQAEAFAYAJIA6AUIBBATIA4AQIAXAGIAAA2IABBcIABBuIABB1IABBoIABBLIAAAcg");
	this.shape_49.setTransform(491.5,379);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.5,1,1).p("Ag8iLQACAxABA6QABA4gBA6QgBA5gFAwQgEAwgKAbQgKAgAKAMQAKANAVgBQAWAAAYgHQAVgHARgHQARgHABgBQAAAAADgdQAEgdAFgwQAFgxAEg7QAEg7ABg8QACg+gDg4QgDg3gKgpQgKgqgSgSIhqBGQAAABACAeQACAdACAxg");
	this.shape_50.setTransform(477.2,378);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C18C1B").s().p("AhNEyQgKgMAKggQAKgbAEgwQAFgwABg5QABg6gBg4IgDhrIgEhOIgCgfIBqhGQASASAKAqQAKApADA3QADA4gCA+QgBA8gEA7QgEA7gFAxIgJBNIgDAdIgSAIQgRAHgVAHQgYAHgWAAIgBABQgUAAgKgNg");
	this.shape_51.setTransform(477.2,378);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.5,1,1).p("ABmkDQgcACgugDQgtgDg2gQIg7gKQAAAAAGAfQAGAfAHA4QAHA3AEBKQAEBHgEBVQgEBWgQBbIDQAAQAAgBACgcQABgcACgtQACgtADgzQACgzAEguQADgvADghQAFg3AFgoQAFgoADgVQADgWABAAQgBAAgdADg");
	this.shape_52.setTransform(520.9,375.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A77833").s().p("Ah4EjQAQhcAEhVQADhVgDhIQgEhJgHg4QgHg3gHgfIgFggIA6ALQA3AQAsADQAvADAcgDIAegCIgEAVIgIA+IgLBfIgFBQIgHBhIgEBgIgEBIIgBAeg");
	this.shape_53.setTransform(520.9,375.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.5,1,1).p("AAVlAIhqBWQAAABABAdQABAdABAvQACAwACA6QABA3ACA6QACA6ABAxQACAxABAfQAAAgAAAEQABAFAQABQAPACAXgBQAWgBAXgBQAXgCAPgCQAQgBABAAIAAliQAAAAgBgTQgBgSgDgdQgDgegEgiQgFgigHgfQgHgggKgXQgLgXgNgHg");
	this.shape_54.setTransform(505.5,378.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C18C1B").s().p("Ag0FAQgQgBgBgFIAAgkIgDhQIgDhrIgDhxIgEhqIgChMIgBgeIBqhWQANAHALAXQAKAXAHAgQAHAfAFAiIAHBAIAEAvIABATIAAFiIgRABIgmAEIgtACIgRAAIgVgBg");
	this.shape_55.setTransform(505.5,378.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgSAkQgIgOgBgWQABgUAIgPQAIgPAKAAQAMAAAIAPQAIAPAAAUQAAAWgIAOQgIAPgMAAQgKAAgIgPg");
	this.shape_56.setTransform(551.3,360.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.5,1,1).p("ABuksIhLhsQgBAAgLASQgLARgOAcQgRAagRAdQgQAcgOAWQgNAWgDAJQgDAJACAoQACAmADA+QACA8gBBOQgCBNgJBVQgJBVgXBUIDxAAQAAgBgBggQgBgfgCg2QgBg1gChBQgChBgChCQgChBgCg7QgCg6gCgpQgBgpgCgNQgCgeADgOQACgOAEgEQAEgDAAAAg");
	this.shape_57.setTransform(547.8,370.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A77833").s().p("Ah3GZQAVhVAKhVQAJhUAChOQABhNgCg7IgFhmQgCgnADgJQAEgJANgVIAdgzIAig3IAZgtIAMgSIBLBsIgEADQgEAFgDANQgDAOADAdQACAOABApIAEBjIAEB8IAECDIADB2IACBVIACAhg");
	this.shape_58.setTransform(547.8,370.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.5,1,1).p("AgvkCQAAABACAcQABAbACAvQACAvABA6QACA4gCA9QgBA9gEA5QgFA5gJArIBJAAQABAAAFgeQAGgeAIgxQAIgyAHg9QAGg+ACg+QAChAgFg7QgGg6gSgsg");
	this.shape_59.setTransform(537.3,377.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C18C1B").s().p("Ag6EdQAJgrAFg5QAEg5ABg9QACg9gCg4IgDhpIgDhKIgCgdIBOgaQASAsAGA6QAFA7gCBAQgCA+gGA+QgHA9gIAyIgOBPIgGAeg");
	this.shape_60.setTransform(537.3,377.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(0.5,1,1).p("AAbBHQAUgJANgWQAQgaAMgWQANgYACgaQACgagPgeIiPBuIgxB3QAWgKAVgIQAVgIAXgFQAWgEAUgJg");
	this.shape_61.setTransform(542.2,340.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C18C1B").s().p("Ag1gEICPhuQAPAegCAaQgCAagNAYQgMAWgQAaQgNAWgUAJQgUAJgWAEQgXAFgVAIQgVAIgWAKg");
	this.shape_62.setTransform(542.2,340.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(0.5,1,1).p("AAohKIAACqIhPAAIAAi/g");
	this.shape_63.setTransform(417.4,396.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C18C1B").s().p("AgnBgIAAi/IBPAVIAACqg");
	this.shape_64.setTransform(417.4,396.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(0.5,1,1).p("AJdi+QgOgUgRgPQgRgQgTgDQgBABgnANQgoAOhEAYQhFAXhZAdQhZAdhjAgQhhAfhlAdQhkAbhcAYQhcAXhLAOQhKAOgvAAIAACiIFDAAQABgBAjgNQAkgOA8gYQA9gYBNgeQBLgeBVgiQBUgiBTghQBSggBHgdQBIgeAzgXQAzgXAWgMQAAgBgIgPQgIgOgOgTg");
	this.shape_65.setTransform(485,380.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A77833").s().p("Ap6D1IAAiiQAvAABKgOQBLgOBcgXQBcgYBkgbQBlgdBhgfIC8g9ICeg0IBsgmIAogOQATADARAQQARAPAOAUQAOATAIAOIAIAQQgWAMgzAXIh7A1IiZA9IinBDIigBAIiKA2IhgAmIgkAOg");
	this.shape_66.setTransform(485,380.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(0.5,1,1).p("AJzi4QgBAAgzAQQgzAQhcAaQhbAbh5AiQh5AiiLAiQiMAkiVAjQiVAiiUAdICBAwIHVgwQAAAAAcgKQAZgKAvgSQAugRA6gXQA7gXA+gaQA+gZA6gbQA6gbAvgaQAvgaAcgXQAdgXABgRg");
	this.shape_67.setTransform(477.2,372.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#794D1F").s().p("ApyCJQCUgdCVgiQCVgjCMgkQCLgiB5giQB5giBbgbICPgqIA0gQQgBARgdAXQgcAXgvAaQgvAag6AbQg6Abg+AZIh5AxIhoAoIhIAcIgcAKInVAwg");
	this.shape_68.setTransform(477.2,372.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#4B7118").ss(0.5,1,1).p("AgUhgQAJAiAHAmQAGAkAAAhQAAAAAHgJQAHgJAJgQQAJgNAHgTQAGgTgCgVQAAABADAXQADAXAEAfQAEAiACAiQACAigCAXQgDAWgSAGQgTAHgWgCQgXgCgSgFQgSgEgBgBQABAAAFgYQAFgXAGgmQAGgmAEgrQAEgugCgsQgCgtgLgkQABABAHAWQAHAVAKAig");
	this.shape_69.setTransform(487.9,359.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#84A816").s().p("AgBCvQgXgCgSgFIgTgFIAGgYQAFgXAGgmQAGgmAEgrQAEgugCgsQgCgtgLgkIAIAXQAHAVAKAiQAJAiAHAmQAGAkAAAhIAHgJQAHgJAJgQQAJgNAHgTQAGgTgCgVIADAYIAHA2IAGBEQACAigCAXQgDAWgSAGQgPAFgRAAIgJAAg");
	this.shape_70.setTransform(487.9,359.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(0.5,1,1).p("AgZgXQAGAOAJAMQAJAPAHAIQAHAGgHgDQgGgDgNgIQgPgIgQgJQgQgIgMgGQgLgHAAAAQAAAAANAKQANAKARAOQAQAQANAUQALAUABAVQAAAbAIAOQAHAPASgDQASgCAegYQAAgBACgaQABgagGgpQgGgngXgtQgXgtgtgnQABABAGAKQAIAMAIAUQAKAVAIAdQAIAcAAAhQgBgBgLgLQgLgMgPgQQgRgRgQgLQAAAAAEAKQAEAKAHAPg");
	this.shape_71.setTransform(444.4,362.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#14516A").s().p("AAJCEQgIgOAAgbQgBgVgLgUQgNgUgQgQQgRgOgNgKIgNgKIALAHIAcAOIAfARIATALQAHADgHgGQgHgIgJgPQgJgMgGgOIgLgZIgEgKQAQALARARIAaAcIAMAMQAAghgIgcQgIgdgKgVQgIgUgIgMIgHgLQAtAnAXAtQAXAtAGAnQAGApgBAaIgCAbQgeAYgSACIgFABQgOAAgGgNg");
	this.shape_72.setTransform(444.4,362.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.5,1,1).p("ADPAgQgNAggfAjQgaAcgrASQgqASgxAFQgvAFgvgMQgvgMgiggQgjgggNg4QAAgBAAgQQAAgOADgYQADgYAIgZQAJgaAQgTQARgUAbgHQAigIAWgGQAVgFAOgCQAOgCANAEQAMAEAOAKQAQAKAaAIQAaAIAbAHQAcAHAYAHQAXAGANAGQAMAGAJASQAJASAAAbQABAYgOAgg");
	this.shape_73.setTransform(469.7,366.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D3B480").s().p("AhbChQgvgMgiggQgjgggNg4IAAgRQAAgOADgYQADgYAIgZQAJgaAQgTQARgUAbgHIA4gOQAVgFAOgCQAOgCANAEQAMAEAOAKQAQAKAaAIQAaAIAbAHIA0AOQAXAGANAGQAMAGAJASQAJASAAAbQABAYgOAgQgNAggfAjQgaAcgrASQgqASgxAFIgbACQgiAAghgJg");
	this.shape_74.setTransform(469.7,366.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#4B7118").ss(0.5,1,1).p("AA7hpQgOANgTAnQgUAmgRBJQgKAlgIANQgIANgHgDQgGgEgFgNQgFgNgEgRQgDgQgCgMQgCgLAAgBQAAgBAIgSQAIgQARgaQARgaAagZQAbgXAogNQgDABgKALg");
	this.shape_75.setTransform(473.3,352.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#84A816").s().p("AgsB2QgGgEgFgNQgFgNgEgRIgFgcIgCgMIAIgTQAIgQARgaQARgaAagZQAbgXAogNIgNAMQgOANgTAnQgUAmgRBJQgKAlgIANQgGAKgGAAIgDAAg");
	this.shape_76.setTransform(473.3,352.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgJA8QgMgCgEgTQgGgTAFgXQAFgZAKgRQALgQAKACQALACAGATQAFATgFAXQgEAZgLARQgLAPgHAAIgDgBg");
	this.shape_77.setTransform(20.4,392.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(0.5,1,1).p("AhGi9QgLgegJAAIgCC6QgFDJgUBVICaAAQAmmIArhxIgpAZQgtAlgbA5IgZhBQAKAxgggGQgRgDgLgfg");
	this.shape_78.setTransform(4.7,378.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C18C1C").s().p("Ah1D9QAUhVAFjJIACi6QAJAAALAeQALAfASADQAgAGgLgxIAZBBQAbg5AtglIApgZQgrBxgmGIg");
	this.shape_79.setTransform(4.7,378.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.5,1,1).p("ABojtQAegYAbAHIgSAlQgVAxgPA5QgyC0AXDAIjwAAIArmCQBLhWAWgbIgFAVQgEAZADANQAGAWAZhMIAbArIAbhGIAVAxQAKgOAOgMg");
	this.shape_80.setTransform(23,381.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A87834").s().p("AigEFIArmCQBLhWAWgbIgFAVQgEAZADANQAGAWAZhMIAbArIAbhGIAVAxQAKgOAOgMQAegYAbAHIgSAlQgVAxgPA5QgyC0AXDAg");
	this.shape_81.setTransform(23,381.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(0.5,1,1).p("Ag3jUIg2GpIDbhng");
	this.shape_82.setTransform(22.2,349.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C69B2E").s().p("Ag3jUIClFCIjbBng");
	this.shape_83.setTransform(22.2,349.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(0.5,1,1).p("AAwDVIA2mpQjGEcgFAQQgDAKA3A4QAcAbAaAag");
	this.shape_84.setTransform(6.3,349.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#794D20").s().p("AAFDPIg2g1Qg3g4ADgJQAFgRDGkcIg2Gpg");
	this.shape_85.setTransform(6.3,349.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// background
	this.instance_19 = new lib.background("synched",0);
	this.instance_19.setTransform(277.8,197.9,1.432,1.347);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Try again
	this.tryAgain = new lib.try_again();
	this.tryAgain.setTransform(257.3,55.6);

	this.timeline.addTween(cjs.Tween.get(this.tryAgain).wait(1));

	// Sky
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#FFFFFF","#82C9FD"],[0,1],0,-274.8,0,274.8).s().p("Egq7AfQMAAAg+fMBV3AAAMAAAA+fg");
	this.shape_86.setTransform(274.8,200.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(279.3,173.9,593.3,438.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;