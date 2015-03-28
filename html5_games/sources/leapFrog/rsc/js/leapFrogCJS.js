
var g = g || {};
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes


// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/boingmp3.mp3", id:"boingmp3"},
		{src:"sounds/slidemp3.mp3", id:"slidemp3"}
	]
};



// symbols:
(lib.water_splash = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAVACQgIgCgKgCQgRgFgFAHQgFAGAXgBQAKgBAMgCg");
	this.shape.setTransform(-13.6,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9F5FF").s().p("AgTAAQAFgHARAFQAKACAIACIgWADIgFAAQgSAAAFgFg");
	this.shape_1.setTransform(-13.6,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAdgEQgpgGgOAMQgJAJAggIQAOgDASgEg");
	this.shape_2.setTransform(-2.2,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9F5FF").s().p("AgaACQAOgMApAGIggAHQgOAEgGAAQgIAAAFgFg");
	this.shape_3.setTransform(-2.2,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgSgJQAvgEgNARQgMASgWgfg");
	this.shape_4.setTransform(13.9,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9F5FF").s().p("AgSgJQAvgEgNARQgEAGgGAAQgIAAgQgTg");
	this.shape_5.setTransform(13.9,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgTgPQA1AKgSAQQgMAMgLgTg");
	this.shape_6.setTransform(8.5,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9F5FF").s().p("AgHAEIgMgTQA1AKgSAQQgFAFgFAAQgGAAgHgMg");
	this.shape_7.setTransform(8.5,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgYANIASgRQARgQAKAOQAQAVg9gCg");
	this.shape_8.setTransform(11.2,-3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9F5FF").s().p("AgYANIASgRQARgQAKAOQAPATgyAAIgKAAg");
	this.shape_9.setTransform(11.2,-3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgRAJQAYADAegEQgrgcgYAQQgQAJAdAEg");
	this.shape_10.setTransform(-5,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E9F5FF").s().p("AgRAJQgdgEAQgJQAYgQArAcQgQACgPAAQgLAAgMgBg");
	this.shape_11.setTransform(-5,-0.1);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-5.5,33.6,11);


(lib._try = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(3,1,1).p("AiZAEIEbAAIAVAAIhNBNACaAEIhWhU");
	this.shape.setTransform(-2.2,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiZAEIEwAAIgHAHIhGBGACaAEIhWhU");
	this.shape_1.setTransform(-3.6,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(219,241,255,0.133)","#0485D0"],[0,1],-28,-4.5,0,-28,-4.5,31.3).s().p("AlpBfQgVgBgRgHQgQgHgNgNQgcgcAAgnQAAgmAcgcQANgNAPgHQASgHAVAAILTAAQAeAAAXAPQAHAFAHAHQAWAWAEAcQACAIAAAIQAAAJgCAIQgEAcgWAWQgHAHgIAFQgXAPgdABgAAxBVIBMhNIgUAAIAHgGIkwAAIEwAAIgHAGIkcAAIEcAAIhHBGIBHhGIAUAAgACBAIIhXhTgAByACIhVhVgABpAIg");
	this.shape_2.setTransform(0.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#47A7DE").ss(3,1,1).p("AGfhOQAHAFAHAHQAcAcAAAmQAAAngcAcQgHAHgIAFQgXAQgdAAIrTAAQgVAAgRgIQgQgHgOgNQgbgcAAgnQAAgmAbgcQAOgNAPgHQASgIAVAAILTAAQAeAAAXAQg");
	this.shape_3.setTransform(0.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#DAF1FE","#0485D0"],[0,1],-28,-4.5,0,-28,-4.5,31.3).s().p("AlpBfQgVgBgRgHQgQgHgNgNQgcgcAAgnQAAgmAcgcQANgNAPgHQASgHAVAAILTAAQAeAAAXAPQAHAFAHAHQAcAcAAAmQAAAngcAcQgHAHgIAFQgXAPgdABg");
	this.shape_4.setTransform(0.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3E4FD").s().p("Am2A/QgagaAAglQAAgkAagbQASgRAXgGQgPAHgNANQgcAcAAAmQAAAnAcAcQANANAQAHQgXgGgTgSgAGwBDQAcgcAAgnQAAgmgcgcQgHgHgHgFQALAGAJAJQAbAbAAAkQAAAlgbAaQgKAKgLAGQAIgFAHgHg");
	this.shape_5.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-8.6,91.5,20);


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


(lib.textBG = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EAdhgjkMAAABHJMg7BAAAMAAAhHJg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgdgAjlMAAAhHJMA7BAAAMAAABHJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-189.9,-228.7,380,457.5);


(lib.text_bg = function() {
	this.initialize();

	// Graphics
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DAF1FE").ss(1,1,1).p("AqKh0IUVAAIAADpI0VAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D0EDFD","#FFFFFF"],[0,1],0.2,18.2,0.2,-6.1).s().p("AqKB1IAAjpIUVAAIAADpg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.1,-12.7,132.3,25.5);


(lib.ripple = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhBmQh4gqAAg8QAAg6B4grQB4gqCpgBQCpABB5AqQB4ArgBA6QABA8h4AqQh5AqipAAQipAAh4gqgAj4hAQhmAaAAAmQAAAlBmAaQBlAbCRAAQCOAABngbQBlgaABglQgBglhlgbQhngbiOAAQiRAAhlAbg");
	this.shape.setTransform(41,14.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,29);


(lib.questionArrow_still = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#47A7DE").ss(3,1,1).p("AArArIhUhV");
	this.shape.setTransform(11.2,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#47A7DE").ss(3,1,1).p("AiYglIExAAIhNBL");
	this.shape_1.setTransform(-0.1,4.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-9.6,33.9,19.3);


(lib.playAgain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IDS_PLAY_AGAIN_BUTTON", "bold 18px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 183;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AtUCmIAAlMIapAAIAAFMg");
	this.shape.setTransform(86.2,17.9);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,187.5,36.3);


(lib.playgame = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IDS_PLAY_BUTTON", "28px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 290;
	this.text.setTransform(15.9,-20.8);

	this.text_1 = new cjs.Text("IDS_PLAY_BUTTON", "28px 'Arial'", "#0F0099");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 290;
	this.text_1.setTransform(16.7,-20);

	this.shape = new cjs.Shape();
        
        //ivanixcu:note:  opacity needs to be greater than 0 to trigger ButtonHelper's pointer cursor
	this.shape.graphics.f("rgba(255,255,255, 0.01)").s().p("A2ICLIAAkVMAqXAAAIAAAPIB5AAIAAD9Ih5AAIAAAJg");
	this.shape.setTransform(23.9,1.7);
        
	this.addChild(this.shape,this.text_1,this.text);
        this.playBtn = new cjs.ButtonHelper(this.shape, 0, 1, 2, false);
        g.playgame = this;
        
        
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-129,-20.8,294.7,39.9);


(lib.menuButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGBCbIsBAAIAAk1IMBAAg");
	this.shape.setTransform(39.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AmACbIAAk1IMBAAIAAE1g");
	this.shape_1.setTransform(39.5,16.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,33);


(lib.mask = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("EgkiAEhIAApBMBJFAAAIAAJBg");
	this.shape.setTransform(233.9,29);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,467.8,58);


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


(lib.land_left_flowers = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAbAAQAAAhgbAAQgaAAAAghQAAggAaAAQAbAAAAAgg");
	this.shape.setTransform(134.8,76.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD75F").s().p("AgaAAQAAggAaAAQAbAAAAAgQAAAhgbAAQgaAAAAghg");
	this.shape_1.setTransform(134.8,76.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgeAdQgJAGgIAFQgmATAAgwQAAgvAkAKQARAFASAOQgJgSgDgUQgJgoAVgJQAXgLAKAeQALAfgRAgIAegbQAfgUAKAhQAOAzhNgOQAsAdgdAsQgeArgEhXQgCA1gWAFQgSAEADgqQABgTAGgMQAHgOANgEQgKAKgKAIg");
	this.shape_2.setTransform(135.1,76.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2F9C2").s().p("AACAoQgCA1gWAFQgSAEADgqQABgTAGgMQAKgIAKgKQgNAEgHAOIgRALQgmATAAgwQAAgvAkAKQARAFASAOQgJgSgDgUQgJgoAVgJQAXgLAKAeQALAfgRAgIAegbQAfgUAKAhQAOAzhNgOQAsAdgdAsQgKAOgHAAQgPAAgCg6gAgKALQgKAKgKAIQAHgOANgEg");
	this.shape_3.setTransform(135.1,76.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAbAAQAAAhgbAAQgaAAAAghQAAggAaAAQAbAAAAAgg");
	this.shape_4.setTransform(145.1,53.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD75F").s().p("AgaAAQAAghAaAAQAbAAAAAhQAAAhgbABQgagBAAghg");
	this.shape_5.setTransform(145.1,53.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgeAcQgJAHgJAFQglATAAgxQAAguAjAKQASAFARAOQgIgSgEgUQgIgoAUgJQAXgLALAeQAKAfgQAgIAegbQAfgVAJAiQAPAzhOgPIATAUQAPAagTAcQgeArgDhXQgCA1gWAFQgSAEADgqQABgUAGgMQAGgOANgEQgKALgJAHg");
	this.shape_6.setTransform(145.4,53.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2F9C2").s().p("AACAoQgCA1gWAFQgSAEADgqQABgUAGgMQAJgHAKgLQgNAEgGAOIgSAMQglATAAgxQAAguAjAKQASAFARAOQgIgSgEgUQgIgoAUgJQAXgLALAeQAKAfgQAgIAegbQAfgVAJAiQAPAzhOgPIATAUQAPAagTAcQgKAOgHAAQgOAAgCg6gAgLAKQgKALgJAHQAGgOANgEg");
	this.shape_7.setTransform(145.4,53.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAbAAQAAAhgbAAQgaAAAAghQAAggAaAAQAbAAAAAgg");
	this.shape_8.setTransform(133.7,47.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD75F").s().p("AgaAAQAAggAaAAQAbAAAAAgQAAAhgbAAQgaAAAAghg");
	this.shape_9.setTransform(133.7,47.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgeAdQgJAGgJAFQglAUAAgxQAAgvAjAKQASAFARAOQgIgSgEgUQgIgoAUgJQAXgLALAeQALAfgRAhIAegcQAfgUAJAhQAPAzhOgOQAtAdgeAsQgdAsgEhYQgCA1gWAFQgSAEADgqQABgTAGgMQAGgOANgEQgKAKgJAIg");
	this.shape_10.setTransform(134,47);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2F9C2").s().p("AglA8QABgTAGgMIATgSQgNAEgGAOIgSALQglAUAAgxQAAgvAjAKQASAFARAOQgIgSgEgUQgIgoAUgJQAXgLALAeQALAfgRAhIAegcQAfgUAJAhQAPAzhOgOQAtAdgeAsQgdAsgEhYQgCA1gWAFIgDAAQgOAAACgmgAgLALIgTASQAGgOANgEg");
	this.shape_11.setTransform(134,47);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAbAAQAAAhgbAAQgaAAAAghQAAggAaAAQAbAAAAAgg");
	this.shape_12.setTransform(17.6,124.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFD75F").s().p("AgaAAQAAggAaAAQAbAAAAAgQAAAhgbAAQgaAAAAghg");
	this.shape_13.setTransform(17.6,124.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgeAdQgJAHgJAEQglAUAAgxQAAgvAjAKQASAFASAOQgJgSgEgUQgIgoAVgJQAWgLALAeQAKAfgQAgIAegbQAfgUAKAhQAOAzhOgOIATAUQAPAagTAbQgeArgDhXQgCA1gWAFQgSAEADgqQABgTAGgMQAGgPANgDQgJAKgKAIg");
	this.shape_14.setTransform(17.9,124.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B2F9C2").s().p("AACAoQgCA1gWAFQgSAEADgqQABgTAGgMQAKgIAJgKQgNADgGAPQgJAHgJAEQglAUAAgxQAAgvAjAKQASAFASAOQgJgSgEgUQgIgoAVgJQAWgLALAeQAKAfgQAgIAegbQAfgUAKAhQAOAzhOgOIATAUQAPAagTAbQgKAOgHAAQgOAAgCg6gAgLALQgJAKgKAIQAGgPANgDg");
	this.shape_15.setTransform(17.9,124.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAbAAQAAAhgbAAQgaAAAAghQAAggAaAAQAbAAAAAgg");
	this.shape_16.setTransform(8.4,113.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD75F").s().p("AgaAAQAAggAaAAQAbAAAAAgQAAAhgbAAQgaAAAAghg");
	this.shape_17.setTransform(8.4,113.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AgeAdQgJAGgJAFQglATAAgwQAAgvAjAKQASAFASAOQgJgSgEgUQgIgoAVgJQAXgLAKAeQAKAfgQAhIAegcQAfgUAKAhQAOAzhOgOIATAUQAPAagTAbQgeArgDhXQgCA1gWAFQgSAEADgqQABgTAGgMQAGgPANgDQgJAKgKAIg");
	this.shape_18.setTransform(8.7,113.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B2F9C2").s().p("AglA8QABgTAGgMQAKgIAJgKQgNADgGAPIgSALQglATAAgwQAAgvAjAKQASAFASAOQgJgSgEgUQgIgoAVgJQAXgLAKAeQAKAfgQAhIAegcQAfgUAKAhQAOAzhOgOIATAUQAPAagTAbQgeArgDhXQgCA1gWAFIgDAAQgOAAACgmgAgLALQgJAKgKAIQAGgPANgDg");
	this.shape_19.setTransform(8.7,113.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AAbAAQAAAigbAAQgbAAAAgiQAAghAbAAQAbAAAAAhg");
	this.shape_20.setTransform(34.4,10);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFD75F").s().p("AgbAAQAAggAbgBQAbABAAAgQAAAigbAAQgbAAAAgig");
	this.shape_21.setTransform(34.4,10);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AgeAcQgJAHgJAFQglATAAgwQAAgvAkAKQARAFASAOQgJgSgEgUQgIgoAVgJQAXgLAKAeQALAegRAhIAegbQAfgUAKAhQAOAzhNgOIASAUQAPAagSAaQgeAsgEhXQgCA1gWAFQgSAEADgqQACgUAFgMQAHgOANgDQgKAKgKAHg");
	this.shape_22.setTransform(34.7,9.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B2F9C2").s().p("AglA8QACgUAFgMQAKgHAKgKQgNADgHAOQgJAHgJAFQglATAAgwQAAgvAkAKQARAFASAOQgJgSgEgUQgIgoAVgJQAXgLAKAeQALAegRAhIAegbQAfgUAKAhQAOAzhNgOIASAUQAPAagSAaQgeAsgEhXQgCA1gWAFIgDAAQgPAAADgmgAgKALQgKAKgKAHQAHgOANgDg");
	this.shape_23.setTransform(34.7,9.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AAbAAQAAAhgbAAQgaAAAAghQAAggAaAAQAbAAAAAgg");
	this.shape_24.setTransform(46.5,13.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFD75F").s().p("AgaAAQAAggAaAAQAbAAAAAgQAAAhgbAAQgaAAAAghg");
	this.shape_25.setTransform(46.5,13.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AgeAcQgJAHgJAFQglATAAgwQAAgvAkAKQARAFARAOQgIgSgEgUQgIgoAUgJQAXgLALAeQALAegRAhIAegbQAfgUAJAhQAPAzhNgOIASAUQAPAZgTAbQgdAsgEhXQgCA1gWAFQgSAEADgqQABgUAGgMQAGgNANgEQgKAKgJAHg");
	this.shape_26.setTransform(46.8,13);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B2F9C2").s().p("AglA8QABgUAGgMQAJgHAKgKQgNAEgGANQgJAHgJAFQglATAAgwQAAgvAkAKQARAFARAOQgIgSgEgUQgIgoAUgJQAXgLALAeQALAegRAhIAegbQAfgUAJAhQAPAzhNgOIASAUQAPAZgTAbQgdAsgEhXQgCA1gWAFIgDAAQgPAAADgmgAgLALQgKAKgJAHQAGgNANgEg");
	this.shape_27.setTransform(46.8,13);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,156.1,136.6);


(lib.frogtongue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99CC").s().p("ACRD6IgBgCIgEgEQABgdAagRQAogaAUgoQAbg4gcgyQgEgIgIgDQhVgdhZgUIgCgEIgCgGIgBgGIAHgNQAagxgRgxQgHgSgRgDQiDgZhqBaQhCA3g3A9IgHgHQgCgaAGgZQAFgTAHgUQAqghAsggQBjhJB8gPIBtAFQATABAPALIAEALQADAIgDAJIgIARIAAAIIgGALQgDAHAAAIIgDADIgQAYIgNAUIAAAGIAAAHQAAADACADQAfASAlgHQBdgQA8BJQA+BHg5BTQg/BbhnAbIgCgBg");
	this.shape.setTransform(36.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACHEHQgJgDgEgIQAEhCA9gmQAcgRAHggQADgRgDgRQgKg7hFgCQhBgBg1gfQgIgFABgKQADgmAPglQAJgZgRgVIgCgBQgFgDgFgFQh0gIhfBJQgtAigkAtQgdAjgjAbQgIAGgCgKQgOg6ANg8IABgBQAIgUAHgUQADgKAJgFIADAAIAIACIABACQAFAGgDAIIgDAFQBehjCKggQAlgIAlgFIAQgCQAtABAtAEQAYACAVANQAOAYgIAZQgRA0gfAsQAuAKAzgFQAUgBATAGQByAlAFBuQABAagLAZQgtBfheA3QgYAOgWAAQgOAAgOgGgAAdi5QARADAHASQARAygaAxIgHAMIABAGIACAGIACAEQBZAUBVAdQAIADAEAIQAcAzgbA3QgUAogoAaQgaASgBAdIAEADIABACIACACQBngcA/hbQA5hTg+hHQg8hJhdARQglAGgfgRQgCgDAAgEIAAgHIAAgFIANgVIAQgYIADgDQAAgIADgGIAGgMIAAgHIAIgSQADgIgDgJIgEgKQgPgMgTgBIhtgEQh8APhjBIQgsAggqAiQgHATgFAUQgGAYACAbIAAALIAHgFQA3g9BCg3QBThGBkAAQAZAAAdAFg");
	this.shape_1.setTransform(35.9,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-26.9,71.8,53.8);


(lib.frogpupil = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAJQgDgEAAgFQAAgEADgEQACgEADAAQAEAAACAEQADAEAAAEQAAAFgDAEQgCAEgEAAQgDAAgCgEg");
	this.shape.setTransform(3,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAhQgMgOAAgTQAAgSAMgPQANgNAQAAQARAAANANQAMAOAAATQAAATgMAOQgNAOgRAAQgQAAgNgOgAgTgQQgCAEAAAGQAAAFACACQADAEAEAAQAEAAADgEQADgCAAgFQAAgGgDgEQgDgEgEAAQgEAAgDAEg");
	this.shape_1.setTransform(4.3,4.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,9.5);


(lib.frogmouthopen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAPKMQgDgLAIgIIAHgGIADgBIAHgBIAAgBIAKAEIAFADQAGAGABAJQABAGgDAFQgLAMgJAAQgMAAgKgRgAAxIuQgMgIgCgPIAAgHQADgNAOAAIAAgBIAJADIAFADQAGAKAEAKIAAAHQgGANgMAAQgEAAgFgCgADNINIABgHIADgIIANgFIABgBQAVAFgHAUIgCAEQgIAFgGAAQgKAAgGgNgAhJH7QgJgIgBgLQAAgGACgFIADgEIAGgIIAJgDIAHgCIAKADIAGAEIAGAIIAEAKQABAJgFAHQgEAGgHADQgGADgFAAQgJAAgIgGgAByH5QgageAigTIALgEQAYACAFAXIABADQgBANgJAJQgFAGgIACIgIABQgKAAgIgGgAhtHTQgKgQARgJIAGgCQANACADAMIAAAEQgFAOgKAAQgGAAgIgFgADcGbQgKgPARgJIAGgCQANACADAMIAAAEQgFAOgKAAQgGAAgIgGgAC5FQQgKgPARgJIAGgCQAMACADAMIABAEQgFAOgKAAQgGAAgIgGgAkwFQQgKgPARgJIAGgCQAMACADAMIABAEQgFAOgKAAQgGAAgIgGgAETEiIABgHIADgIIAOgGIAAAAQAVAFgHAUIgCADQgIAGgGAAQgKAAgGgNgADMD/QgSgVAPgTQACgDAFgBQATAHACAWIAAAEQgFANgLAAQgEAAgFgCgAD1AvQgEgJADgKQACgHAGgEIAQgGIAAAAIAKADIAGADIAFAHQAFAFgBAHIgCAHQgCAHgFAEQgJAGgIAAQgNAAgJgNgADBguQgIgXARgNIAGgCIAMAHIADADQADANgEANIgEAIQgGADgFAAQgIAAgGgJgAD/hZIABgHIADgIIAOgFIAAgBQAVAFgHAUIgCAEQgIAFgGAAQgKAAgGgNgACvjaQgJgHAAgMQAAgGACgFIACgEIAGgHIAJgEIAIgBIAJADIAHADIAFAIIAFALQAAAIgFAHQgEAGgGAEQgGACgGAAQgJAAgIgGgABal3QADgIAIgCIAGgCQAOABAEANIABADQAAAMgKAFIgJAEQgXgFAGgVgAhepTQADgIAJgDIAGgCQAOACAEAMIABAEQAAALgLAGIgIADQgXgEAFgVgAi5qDQgNgTAWgFIAAgBQAaAOgbALIgEABIgEgBg");
	this.shape.setTransform(52.8,75.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("ABXLEQgMAAgKgHQh2hbgTicQgBgPgNgCIAAgBQgDgKgIgFIgUgEQgEgEgFgCQg0gUg0gOQgWgggMgjQgKgbAKgaQAVAFATAQQAnAfAtATQAOASAUAKQA0AZAzAWIABADIACAEIACADQARAHARAAQCXABAeigQAUhvAChyQACiVgqiPQg2i1iyhEQgogPgqAFQhrAOhrAJQgOgKgQgHQgcgNgWgWIgCgIIgBgDIgBgEQAUgCARAFQBAATA/gRQAHAFAJgCIAGgCIADgJIABgBIAFgHIABgEIAAgDIgBgBIALgSQAfguAvgjIAJgCIAEgCIACgDIAEgHIAEgEQB4glBgBRIANAPQAHAIAKABIABACIAOAWIAMASIAAAEIAAAEIAAADQASAWAJAaQAIAYAPAUIABADIACAHIABAEQAkAtAUA5QARAzAYAwQCJEMg7EoQgVBqgaBnQgyDKjTAAIgBAAgAB6J/IgHABIgDABIgHAGQgIAIADALQATAfAXgaQADgFgBgGQgBgJgGgGIgFgDIgKgEgACJIRQgOAAgDANIAAAHQACAPAMAIQASAHAJgSIAAgHQgEgKgGgKIgFgDIgJgDgAEzIHIgNAFIgDAIIgBAHQAKAWAUgOIACgEQAHgUgVgFIgBABgAAUHcIgJADIgGAIIgDAEQgCAFAAAGQABALAJAIQANAKAPgHQAHgDAEgGQAFgHgBgJIgEgKIgGgIIgGgEIgKgDIgHACgADPHWQgiATAaAeQAMAJAOgEQAIgCAFgGQAJgJABgNIgBgDQgFgXgYgCIgLAEgAgRHIQgRAJAKAQQAVAOAGgXIAAgEQgDgMgLgCIgGACgAE4GRQgRAJAKAPQAVAPAIgXIAAgEQgDgMgNgCIgGACgAEVFGQgRAJAKAPQAVAPAIgXIgBgEQgDgMgMgCIgGACgAjUFGQgRAJAKAPQAVAPAIgXIgBgEQgDgMgMgCIgGACgAF6EbIgOAGIgDAIIgBAHQALAWATgPIACgDQAHgUgVgFgAEeDlQgPATASAVQASAHAHgSIAAgEQgCgWgTgHQgFABgCADgAFhAZIgQAGQgGAEgCAHQgDAKAEAJQAQAWAXgPQAFgEACgHIACgHQABgHgFgFIgFgHIgGgDIgKgDgAEfhEQgRANAIAXQAJAPAQgJIAEgIQAEgNgDgNIgDgDIgMgHIgGACgAFmhfIgOAFIgDAIIgBAHQALAWATgOIACgEQAHgUgVgFIAAABgAEOj5IgJAEIgGAHIgCAEQgCAFAAAGQAAAMAJAHQAOAKAPgGQAGgEAEgGQAFgHAAgIIgFgLIgFgIIgHgDIgJgDIgIABgAC6lzQgIACgDAIQgGAVAXAFIAJgEQAKgFAAgMIgBgDQgEgNgOgBIgGACgAABpQQgHADgDAIQgFAVAVAEIAIgDQALgGAAgLIgBgEQgEgMgOgCIgGACgAhbqNQgWAFANATQAEACAEgCQAbgLgagOg");
	this.shape_1.setTransform(44.3,74.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhdJ5Qgdg/gZhAQgUgzARgXQhDgUg4gmQgVgOgMgWQgyhaBGhAQAxAIApAgQASAOAQARQBKAyBTAiQADgQANgRQBGhZACh2QAEjhhQjNQgMgjgTgdQgmgigngaQgRgMgOgNQgcgGgXgOQgvgDgyAUQgaALgYgHQhagZgfhPQgCgHAAgHIAGgHIAHgHIADgDQAagIAaAFQAoAHAoAJIACACIAmgNQAKgEAJACQAcg6A0grQAXgTAYgRQAsgDAogIQA1AJA0AZIAHACQB7BPA8CJIANAdQBcDDA9DMQApCIgRCQQgQCIgVCKQgiDbjQA8QgtAMgmAAQh5AAg8iCgAkUEgQANAjAVAgQA0AOA0AUQAFACAEAEIAVAEQAHAFADAKIABABQAMACACAPQASCcB3BbQAJAHANAAQDUAAAyjKQAZhnAVhqQA8kmiJkOQgYgwgSgzQgTg5glgtIgBgEIgBgHIgBgDQgPgUgJgYQgJgagRgWIAAgDIAAgEIAAgEIgNgSIgOgWIgBgCQgKgBgHgIIgMgPQhhhRh4AlIgDAEIgEAHIgDADIgDACIgKACQguAjggAuIgKARIABACIgBADIgBAEIgEAHIgCABIgCAJIgGACQgKACgHgFQg/ARg/gTQgSgFgTACIAAAEIABADIADAIQAWAWAcANQAPAHAPAKQBrgJBrgOQApgFApAPQCxBEA2C1QAqCPgCCVQgBBygVBvQgdCgiXgBQgRAAgPgHIgEgDIgCgEIgCgDQgzgWg0gZQgUgKgOgSQgsgTgngfQgUgQgVgFQgKAaAKAbg");
	this.shape_2.setTransform(45.5,76.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91,152.7);


(lib.frogleg2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAAFmIgFgDIgCgCIgDgEQgCgKAIgJIAEgDIAAgBIAEgBIAFABIADACQAEAEABAFIABAGIgBAGIAAABIgDAFQgFADgGAAIgDAAgADcFOQABgGAGgCIADgBQAHABACAGIAAACQAAAGgFADIgEABQgKgBAAgJgAEYFMQAAgLALgDIAAAAQALAFgIALIgCACIgEABQgFAAgDgFgAk7EJQgHgKALgDIAAAAQAOAHgOAFIgDABIgBAAgAlnD3QABgEAEgBIADgBQAKADgFAKIgBABIgFABQgGAAgBgJgAkfDaIABgEIABgEIAHgDIAAAAQALACgDAKIgBACQgEADgEAAQgEAAgEgGgAiqDQQgBgGAEgDIADgEIACAAIADgBIAFACIADABQADADABAFIgBAGQgGAGgFAAQgGAAgFgJgAksCHQgBgJAJgCIAEgBQAPACACAPIAAACQgLANgHAAQgJAAgCgUgACnCKQABgFAFgCIAEgBQAHABABAGIABACQAAAGgFACIgEACQgKgBAAgKgAFbB0QgIgIAKgGIACgBQAHABABAGIABACQgCAHgGAAIgFgBgAlABkIgBgEQAAgDACgDIAFgCIADgCQAIACACAHIAAACQAAADgCADIgEADIgEABQgHAAgCgHgAE0BIQABgDAEgCIADgBQALADgGAKIgBABIgFABQgGAAgBgJgAjbA1QgLgLALgLQAEgFAGAAQAIAAAFAHIABABIAHACIAFACQgHAFgHAHQgEAEgFABIgEABQgFAAgEgDgADZAvQgCgHAFgGIADgEIACgBIAFgCIAFACQADACABADIACAEQgBAHgFAFIgDADIgFABQgHAAgDgHgAjFgMIAAAAQAMADgIAJIgEAAQgNgGANgGgAgngOQgIgIAKgGIADgBQAGAAACAHIAAABQgCAHgGAAIgFAAgAhDgbQABgFAGgCIADgBQAHAAACAHIAAACQAAAFgFADIgEACQgKgCAAgJgAixg0IAAgEQABgEACgCIAIgDIAFABQADACABAEIACAEIgCAEIgCADQgFADgDAAQgHAAgDgIgAARh8QgDgIAJgEIAHgCQAPACAFAPIABACQgJARgIAAQgJAAgIgWgAh1ikQABgGAFgCIADgBQAHABACAGIABACQAAAGgGADIgEABQgKgBABgJgAhHi3QgBgGAEgDIADgEIABAAIAEAAIAAgBIAFACIADABQADADAAAFQABADgCADQgFAGgFAAQgGAAgFgJgABgjJIAAgDQgBgEACgCIAFgDIAEgBQAIABABAIIABACQgBADgCACIgEAEIgEAAQgGAAgDgHgAA/jmQABgFAGgCIADgBQAHABACAGIAAACQAAAGgFACIgEACQgKgBAAgKgAgDjxIgBgDQAAgEACgCIADgDIADgBQAIABACAIIAAACQAAADgCACIgEAEIgEAAQgFAAgCgHgAC5lXQgBgGAEgEIAEgDIABAAIAEgBIAAAAIAFACIACABQADADABAFQAAADgBACQgGAGgFAAQgGAAgFgIg");
	this.shape.setTransform(42.5,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AC/FEIABgEIADgHIAFgMIAAgCIAIgHIAFgKIAAgCIAAgCIgBgCIgBgBIgBgCIgCgCQgjgXgYgkQgbgogqgKQgWANgVAPQgVAPgPASIgGADQgNAEgJAJIgCACIgBAEIAAACIAAADIABACIADAEIABACQAegDAWATQATAQAHAXQgCAOgMAHIgGAFIAAgCIABgFIgBgGQgBgFgEgFIgDgBIgFgCIgEABIgCABIgEAEQgIAIACALIADAEIACACIAGADQghALgcgeQgFgFABgFQAJgygdglQiOAGiHAmIghgBQgDAAgCgDQgBgNAMgLQA2gsBAggQAUgLATgNQBPg6AuhUQAdgyAWg4QA6iSCXg2IADgDIAGgDIADgBIABgBIACgEIABgCQgPgIgTAMQgXAPgYAMIgDADIgBACQhfAsgrBfIgXAuIg0BpQgaA1guAmQg0Arg9AaQgKgNgWAAIgCgDIgJgMQgDghAVgdQAOgUAPgSIAVgWQAOgOACgJQAFgDACgHIACgDQAMgGAGgKIAAAAIAEAAIAGgDIACgBIACgEIABgDIABgEIABgCIABgCQAEgDADgEIADgMIAAgCQAOgTAPgTIAXgaQASgUAQgVQBUhtB2g/QBagvBiANIABACIAEAEIADAEIABABQgDANgGAMQgjBRg7BGIgVAaQg4BKhHA6Qh0BdhqBuIABAHQAAADACADIACACQAEABAEAAIAngHQAtgGAlAXQAYAPAVgOQAygnA7gQQASAKAQANIAOAMIABAEIAAACIADAEIACACQAgAHARAdQANAXAJAZQAfAIAhgCQAYAOAJAYQAHAXgIATQgNAfgoAAIgBAAQg+AAgLg+gADzE7QgGACgBAFQAAAJAKACIAEgCQAFgCAAgGIAAgCQgCgHgHAAIgDABgAEzEzQgLACAAAMQAEAHAIgDIACgCQAIgLgLgGgAknDxQgLACAHAKQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAOgGgOgHgAlSDmQgEACgBAEQABALALgDIABgCQAFgJgKgDIgDAAgAkGDEIgHADIgBADIgBAEQAGALAKgHIABgCQADgKgLgDgAiXC7QgEAEABAGQAKAPAMgNIABgGQgBgEgDgDIgDgCIgFgBIgDABIgCAAIgDADgAkUBwQgJACABAJQAEAlAZgdIAAgCQgCgPgPgCIgEAAgAkqBMIgFADQgCACAAADIABAEQADAJAKgCIAEgEQACgCAAgDIAAgCQgCgIgIgBIgDABgAjLATQgLALALALQAGAFAHgCQAFgCAEgDQAHgIAHgFIgFgCIgHgBIgBgCQgFgGgIgBQgGAAgEAFgAi1gXQgNAGANAHIAEgCQAIgJgMgDgAgVgoQgKAGAIAIQAKAEADgKIAAgCQgCgGgGgBIgDABgAgsguQgGACgBAGQAAAJAKABIAEgBQAFgDAAgGIAAgCQgCgGgHgBIgDABgAiehJQgCACgBADIAAAEQAFAOANgIIACgEIACgEIgCgEQgBgDgDgCIgFgBIgIADgAAniUQgJAEADAIQAPAqATglIgBgCQgFgOgPgDIgHACgAhfi3QgFACgBAFQgBAJAKACIAEgCQAGgDAAgFIgBgCQgCgHgHAAIgDABgAg0jMQgEAEABAGQAJAPAMgNQACgDgBgCQAAgFgDgDIgDgCIgFgBIAAAAIgEABIgBAAIgDADgAB2jgIgFACQgCADABADIAAAEQADAJAKgDIAEgDQACgCABgEIgBgBQgBgIgIgBIgEABgABWj5QgGACgBAGQAAAJAKACIAEgCQAFgDAAgGIAAgCQgCgGgHAAIgDAAgAARkIIgFACQgCADAAADIABAEQADAJAKgDIAEgDQACgCAAgEIAAgBQgCgIgIgBIgDABgADVlwIgEAAIgBABIgEADQgEAEABAFQAKAQAMgNQABgDAAgDQgBgEgDgDIgCgCIgFgCgACqCgQgNgPgQgLQAgggARgrIAHgQQASghAggPQAYAxAyAEQAEgEgBgFQgCgYASgOIAPACQAZASAGAeQAEAYgMAXQgdA2g6gcIgCgPQgGgXgEgXQgOgJgSADQgRgXgTAQQgCAKACAKQALA6gnAmIgNgGgAC9B3QgFACgBAGQAAAJAKACIAEgCQAFgDAAgFIgBgCQgBgHgHAAIgEAAgAFtBbQgKAGAIAIQAKADADgKIgBgBQgBgHgHgBIgCACgAFJA4QgEABgBAEQABALALgDIABgCQAGgJgLgDIgDABgADxASIgCABIgDADQgFAHACAHQAFAJAKgEIADgDQAFgFABgGIgCgEQgBgEgDgCIgFgBIgFACg");
	this.shape_1.setTransform(40.9,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADTGPQhDgqAihEIg4hCQgQgSgSgPQgQAHgNALQgTANgQAQQA7AkgQA+QgGAYgYAJQg4AXgsgoQgHgPgBgQQgBgbAAgcQABgEgEgDQg1gEg6AIQhQALhMAYQgrAOgVgiQgFgJAFgKIACgHQAcgjAngXQgIgGgHgKQgkgwAogxIAigqQAQgVATgQIAFgCQAHgEAHgBQABADAAADQgBALgPAOIgUAWQgQASgOATQgVAdADAiIAJALIACADQAWABAKANQA9gaA0gsQAugmAag0IA0hpIAXgvQArheBfgtIABgCIADgDQAYgLAXgPQATgMAPAIIgBACIgCADIgBACIgDAAIgGADIgDAEQiXA1g6CSQgWA4gdAzQguBThPA6QgTAOgUAKQhAAgg2AtQgMAKABAOQACADADAAIAhAAQCHglCOgGQAdAkgJAyQgBAGAFAFQAcAeAhgMQAIACAHgFIADgFIAGgEQAMgIACgNQgHgYgTgQQgWgSgeADIgBgCIgDgEIgBgCIAAgEIAAgCIABgEIACgBQAJgKANgDIAGgDQAPgTAVgOQAVgPAWgNQAqAJAbApQAYAkAjAWIACACIABACIABACIABACIAAACIAAACIgFAJIgIAIIAAACIgFALIgDAIIgBADQALA/A/gBQAoAAANgfQAIgTgHgWQgJgYgYgPQghACgfgIQgJgZgNgXQgRgcgggIIgCgCIgDgEIAAgCIgBgDIgOgMQgQgOgSgKQg7ARgyAmQgVAPgYgPQglgYgtAHIgnAGQgEABgEgCIgCgCQgCgCAAgDIgBgIQBqhtB0heQBHg5A4hKIAVgaQA7hGAjhRQAGgNADgMIgBgCIgDgEIgEgEIgBgBQhigOhaAvQh2BAhUBtQgQAVgSATIgWAbQgQASgOAUIAAACIgDAMQgDAEgEADIgBACIgBABIgBAEIgBAEIgCAEIgCABIgGACIgEABIAAAAIAFgVQAMgrAhgkIAAAAIBmh1QB2iICwggQBIgOAaA5QAFAKgEALQgWBCgxA3QhTBfhWBbQgaAcgdAWQhPBDhLBIQA4AAA0AbQA0giA3gYQAQgHAPAIIATALQAkgxAZg4QAQgjAngMIAFAAIAEABQASAcAbAVQAAAAABAAQAAABABAAQABAAAAAAQABAAAAAAQARg9A0AjQAqAdgFAxQgKBXhbgEQgegBgRgZQgBgRgEgRIgCgLIgXgKQAOA7goAtQAKAIAHALQANASAGAVQBfgDANBeQAJA+g+APQgOAEgOAAQgfAAgagRgADFAvIgIAPQgRAsggAfQAQAMANAOIAOAHQAngngMg5QgCgLACgKQATgPARAWQASgDAOAJQAEAYAGAWIACAPQA6AdAdg3QAMgWgEgZQgGgdgZgTIgPgBQgSAOACAXQABAGgEAEQgygFgYgwQggAOgRAig");
	this.shape_2.setTransform(41,41.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,83.3);


(lib.frogleg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AArD2QgBgGAGgBIADgBQAKACABAJIAAABQgHAIgFAAQgFAAgCgMgAAeDUQgBgNALgCQAUALgXAJIgDAAQgDAAgBgFgAhvCcQgDgFACgGIAAgCIABAAIACABIABABQAFgBAEAEIABABIAAAEIgBAEIgEABIgCAAQgDAAgDgCgAiBCAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgDIABgBIADgCIABgBIACgBQAEAAACADIABACIAAAEIgBADIgCABIgCABIgBAAQgEAAgDgDgABHAvQgBgDACgDIACgBIABgBIACAAIADABIABABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABIAAADQgDADgDAAQgEAAgCgEgAitAvQgBgCAAgEQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAEgBIAEABIACAAIABADIABADIgBACIgBADQgDACgDAAQgDAAgDgEgAiyATQgBgDABgCIACgEIAFgBIAAgBIADABIABABIACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIgBADIgCADQgCACgCAAQgEAAgDgEgAAoADQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAIACAAQAEAAABADIABABQgBADgDACIgCABQgGgBABgGgABRAEIAAgCQABgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAFgCIACABQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAABIAAACIAAACIgBACIgFACQgEAAgCgFgABvhNIgCgCIgBgPQAAgGAEgFIACgBIADgBQAeAFgTAbIgBABQgDADgDAAQgFAAgFgGgAB7iDIgCgDIABgDIABgBIACgDIABAAIACgBQAEAAACADIABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgBADIgCABIgCABIgBAAQgEAAgCgDgACAjHQAAgDABgCIADgCIABAAIACgBIACABIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAAEQgEADgDAAQgDAAgDgFgACmj2IgBgDIABgEIAAgBIADgCIABgBIACAAQAEAAACADIABAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAIgBAEIgCAAIgCABIgCAAQgDAAgDgCg");
	this.shape.setTransform(22,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AANEdQghgsAkgqQAJAEAMgCQAEgCACgFIABgLQAAg6gFg3QgKgGgKAHIgbAUIgaAPQgmAYgXAhQADAIAJABIABACQADAFABAFIAAACIgHAPQgSAGgTgEQgPgKgMgOIAAgEIgFgXIABgCQAEgGgCgHIAGgHIAKgBQALAEAJAIQAGADADgHIgDgFQAdgIAZgUIANgJIASgPIAAACQAFAEAGgCQANgQgHgUQgVgSgfACIADgDQAggEAdgDQAfgWAigNIALgEIABgBQAHhSgKhRIgCgMIgCgFQAGgBADgDIAgggIAMgLIAHgEIAWgKQAHgDAIAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAIgKALgEIADgDIAHgFIAEgDIAEADIgTA1QgbBJgYBJQgWBBgMBAQgJANgDAPIgCAEQgMAlgLAlIgOAxIAAAAIABACIACAEIALAHIAHAGQADATgGAQQgIAUgVAOQgIADgIAAQgIAAgIgEgAAnEDQgGACABAFQADAYAPgTIAAgBQAAgKgKgBIgDAAgAAVDpQABAGAGgCQAXgIgUgMQgMADACANgAh5CmQgCAFADAFQADAEAFgBIADgCIACgDIgBgFIgBgBQgDgDgFAAIgCgBIgBgBIgBAAIAAADgAiGCKIgCABIgCACIgBABIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQADAEAFgBIACgBIABgBIACgEIgBgEIgBgBQgBgDgEAAIgCAAgABCA8IgBAAIgCACQgCACAAADQAGAJAHgHIAAgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBgBIgBgBIgDgBIgCABgAAiAUQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgCAGAHABIACgBQADgBAAgDIAAgCQgBgDgEgBIgCABgABKATQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAADQADAHAIgEIABgCIAAgDIAAgCQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAIgDgBIgEACgABphWIgCABQgEAFAAAGIABAQIACACQAIAKAIgIIABgBQASgagdgGIgDABgAB1h5IgBABIgDACIAAABIgBADIABAEQAEADAEgBIACgBIABgBIACgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAIAAgBQgCgDgEAAIgCAAgAB4i4QgCACABAEQAFAJAHgIIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIgCgBIgDAAIgCAAIAAAAIgDACgAChjsIgCAAIgCADIAAABIgBADIABADQAEAEAEgBIACgBIABgBIACgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBgBIAAgBQgCgCgEgBIgCABgAi9BYIgDgBIgJgGQgDgEgCgFQgHgRAGgTIACgCQAHgGAIgDQAZgEARASQAUACATgDQgTADgQAHIgCABQgDADABAEQAAAEgBAEIgZAZIgPgBgAi0A7QgBAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAADABADQAEAGAHgEIACgDIABgDIgBgDIgCgCIgCgBIgDgBIgEACgAi0AdIgFACIgCADQgBADABADQAFAGAGgEIACgEIABgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgCgCIgBgBIgDgBg");
	this.shape_1.setTransform(22.9,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSExQgGgGgCgJQgMgyAlgiQAHgGAMAFQABgrgCgqIgBgKIgEADQgqAdgtAhQAVAkgjAcQgFAEgIABQgSAFgSgGQhDgqAmhDQAbgHARATQAIgEAHgHQApgVAjgfIAAgBQg4gQgxAWQgNAXgXARIgCACQhBABADhAQACgeAegJQAfgFAYATQBRgCBGgaQAPgGANgIQAMgGAOgCIAFhcIAChAIAAgDQAAgFAGABIABAMQAKBRgHBQIAAABIgMAEQghANgdAYQggADgfAEIgDADQAegDAWATQAHAUgNAQQgGACgFgEIgBgCIgSAPIgNAJQgYAUgdAIIADAFQgDAHgHgDQgIgIgLgEIgLABIgFAHQABAHgEAGIAAACIAEAXIABAEQALAOAQAKQASAEATgGIAGgPIABgCQgBgFgDgFIgCgCQgJgBgDgIQAXghAngYIAZgPIAbgUQAKgHAKAGQAGA3gBA6IAAALQgCAFgEACQgMACgJgEQglAqAiAsQAOAHARgGQAWgOAHgUQAGgQgCgTIgIgGIgLgHIgBgEIgBgCIAAAAIANgxQALglANglIACgEQACgPAJgNQANhBAVhAQAZhJAahJIATg1IAEgIIACgFQANgdASgVIgJAaIgKAdIgTA3IguCKIAAABQgRAZgBAcIgFAIQgLBOgeBMIgJAYQgKAZgDAaQAaAdgKAgQgFANgMAOQgVAagXAAQgVAAgUgWgAjIAvQgIADgGAGIgDACQgGATAHARQACAFAEAEIAJAGIACABIAPABIAagZQABgEgBgEQAAgEADgDIABgBQARgHATgDQgUADgTgCQgPgPgUAAIgIABg");
	this.shape_2.setTransform(23.8,32.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.7,65.6);


(lib.froghead2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("ABHDuIgDgBQgBgIAIgBIAAAAQAMAKgNAAIgDAAgAA5C2QgCgHAFgFIAFgEIACgBIAEAAIABgBIAGACIADACQAEAEABAGQAAAEgBADQgHAIgHAAQgHAAgHgLgACUCtQgDgGACgGQABgFAEgCIALgEIAAgBIAGACIAEADIAEAEQADAEgBAEIgBAFQgCAEgDADQgGAEgFAAQgIAAgGgJgAD5CJQgDgGACgGQACgEADgDIALgEIAAAAIAGACIAEACIAEAEQADAEgBAEIgBAFQgBAEgEADQgGAEgFAAQgIAAgGgJgAhKB0IAAgFQABgEADgDIAKgEIAAAAIAGABQAFADABAFIACAFIgCAEIgCAFQgGAEgFAAQgJAAgEgLgAA9BxIAAgFQABgFADgCIAKgEIAAgBIAGACQAFACABAFIACAFIgCAFIgCAFQgGAEgFAAQgJAAgEgLgAjBApIACgCQASAAAIAPIAAACIgDAEIgGAFQgVgGACgSgADFgWQACgGAFgBIAEgBQAJAAADAJIABACQAAAHgHAEIgGACQgOgDADgNgAjigJIgBgCQgBgFAFgCIADgBQAKAMgHAAIgJgCgAgRgWQgLgLANgHIAEgCQAIABACAIIAAADQgCAJgHAAIgHgBgAhyhLIgBgCIACgEQADgFAEAAIAVADIADABQACAHgIACQgEABgCADQgFACgEAAQgHAAgEgIgAAvhUQgEgNAGgLQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQANAGAAAPIgBACQgEAHgEAAQgEAAgFgEgAkTh7QgKgLAMgHIAEgCQAIABACAIIABADQgDAJgHAAIgHgBgAjuiIQgGgKABgMQABgGADgEQADgEAFgBIAFgBIAGACIAEACQAGAHAEAIQACADAAAEIgBADIgCAFIgBACIgGAFIgEACIgFABQgJAAgGgGgAgkiVQgEgDACgGIABgDQAGgDAHAAIAAAAQALAKgSAGIgCAAIgDgBgABRirQAAgEACgDIADgGIAIgDIAAgBQAPAGgIANIgCADIgHACQgGAAgFgHgAgUjhIgCgBQAGgIAMgDIAEAAQABANgSAAIgDgBg");
	this.shape.setTransform(32.3,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjzChQh1hqAKiVQADgvAmggQARgPAUgEQA2AIAvAaQAlhMBOgsQANgIANgDQA2ACAYAsQAYgYAnALQB1AhAEBzQAwgCAhAyQBGBqg7BuQhHCFibABIgDAAQjDAAiPiBgAAuD/QgIAAABAIIADABQARABgNgLgAk4iSQg1BQAvBWQBKCKCTA5QClBACghEQA1gWAZgzQARgiADghQAJhJg/hDQgFgHgLAAQgogCgoAKIgFgCQgFgCgEgEIABgCQACgFADgFQASgKAQgFQAChPhGgmQgNgHgMgIIgsAAQgEAFgHACIgCACQgFAFgHgEQgxhHhDA4QgfAagZAhIgXAgIADACIABACIgHABIgCACIgJgCIgCgBQgfgCgkgSQgQgJgOAAQgaAAgSAcgAArB6QhQgPhMggQgtgTgogdQgrgegPgrQgEAHgEAKQgCAEgDADQgCAEgGABIgGACQgDgEABgEIABgHIAWgpQACgFAFAAQALAFAGAKIAAACQAAAEgFABIgIAAIgBACQCACTDIAKQB4AGBahJQgIgSgNgQIADAAQAxAQgHAyIgCACQgHAFgFgHIgEgPIgFAFQhMBEhnAAQgfAAgigGg");
	this.shape_1.setTransform(35.2,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AhaDhQiTg5hKiKQgvhWA1hQQAcgrAuAYQAjASAgACIACABIAJACIABgCIAIgBIgBgCIgDgCIAXggQAZghAfgaQBDg4AxBHQAHAEAFgFIACgCQAGgCAFgFIAsAAQAMAIANAHQBGAmgDBPQgQAFgRAKQgDAFgCAFIgBACQAEAEAFACIAFACQAogKAoACQALAAAFAHQA+BBgIBLQgDAhgRAiQgZAzg1AWQhSAjhUAAQhOAAhRgfgAAxDJIgEABIgCAAIgFAEQgFAFACAIQAMAUAQgRQABgEAAgDQgBgGgEgEIgDgCIgGgCIgBAAgACNC6IgLAEQgEADgBAEQgCAHADAGQAKAOAPgKQADgDACgEIABgFQABgEgDgDIgEgFIgEgCIgGgCgADyCXIgLADQgDADgCAEQgCAHADAGQAKAOAPgJQAEgEABgEIABgFQABgEgDgDIgEgFIgEgCIgGgCgAhSCJIgKADQgDADgBAFIAAAFQAHARARgKIACgFIACgFIgCgFQgBgFgFgCIgGgCgAA1CFIgKAEQgDADgBAEIAAAFQAHASARgKIACgFIACgFIgCgFQgBgFgFgCIgGgCgAi/AlQAoAdAtATQBMAgBQAPQCQAbBkhZIAJAKQAFAHAHgFIACgCQAHgygxgQIgDAAQAMAQAIASQhZBIh4gFQjJgKh/iUIABgBIAIAAQAFgBAAgEIAAgCQgGgKgLgFQgFAAgCAFIgWApIgBAHQgBAEADAEIAGgCQAGgBACgEQADgDACgEQADgKAFgHQAOAoAsAhgAjXBOQgCARAVAGIAGgFIADgEIAAgCQgIgOgSAAIgCACgAC2AFQgFACgCAFQgDAOAOADIAGgDQAHgDAAgHIgBgDQgDgIgJgBIgEABgAj1ARQgFABABAGIABABQAUAHgOgQIgDABgAglgEQgNAGALAKQANAFADgNIAAgCQgCgGgIgBIgEABgAiHgtIgCAFIABACQAGALAOgGQACgCAEgBQAIgDgCgGIgDgCIgVgCQgEAAgDAEgAAbhHQgGALAEAMQAKAJAHgLIABgDQAAgOgNgHQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABgAknhpQgMAIAKAKQANAFAEgNIgBgCQgCgIgIgBIgEABgAj9iIQgFABgDADQgDAFgBAFQgBAMAGAKQAIAIAMgCIAEgDIAGgEIABgDIACgFIABgCQAAgEgCgDQgEgIgGgHIgEgCIgGgCIgFABgAg7h8IgBACQgCAGAEAEIAFAAQASgFgLgLIAAABIgCAAQgGAAgFADgABIiXIgIAEIgDAFQgCADAAAEQAHAKALgFIACgDQAIgNgPgFgAgajIQgMACgGAIIACACQAXABgDgOIgEABg");
	this.shape_2.setTransform(34.5,28.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.4,58.2);


(lib.frogeyesopen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfCLQg2iWBciGQAUAVAPAfQAHArADArQgGAJABAMQANBthXAXIgEgHg");
	this.shape.setTransform(9.3,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhfAIQAShzBUhJQASgQAUAJQBBA/gMBZIgBAEQAJB9hhBOQgQAOgXAFQhUhDATh0gAgmCQIADAGQBYgWgNhtQgCgMAGgKQgDgrgGgqQgPgfgUgVQhdCGA3CWg");
	this.shape_1.setTransform(10,19.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,38.3);


(lib.frogbody = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("ADIHzQgGgGAAgIIAAgIQAGgPAPgCIAAgBIAHACQAIAIAEALIACAFQAAAGgFAFIgFAEQgGADgGAAQgHAAgHgEgAEcFFQgDgIAGgHQADgEAEAAQANABAEAMIABADQgBAEgDAEIgFAEIgGABQgKAAgDgKgACcC+QAAgFADgDQAEgGAGAAQAPABAHAMIABACIgBAGQgDAEgEADIgGAAQgQAAgGgOgAELCdQABgVAWgDQAIAAAEAHIABACQAAAMgJAJIgGAFIgFABQgLAAgFgMgAirAAQgCgGAIgFQAHgFAHAAQATABAFAPIABADQgMAbgLAAQgMAAgKgegAEgATQgMgRAPgMIAGgDQAKABAEAJIABADQgEATgTAAIgBAAgAAVguIABgFQAAgFAEgDIAKgEIABgBIAHACQAFADABAFIACAFIgCAGIgDAFQgHAEgFAAQgJAAgFgMgAkkg/QgGgFAAgIQgBgEACgEIACgDIAEgFIAHgDIAFgBIAHACIAEADIAEAFIAEAIQAAAGgEAFQgDAEgEADQgFACgEAAQgGAAgGgFgAhDjnQgCgMALgGIACAAIAMgCIAAAAQAPAGgHARIgBADQgIAGgHAAQgJAAgGgMgAAvjxQACgOAIgKIAGgGIAEgBIAFgCIAHADIAFACIADAFIADAGQgBAJgDAJIgEAIIgEADIgEACIgFAAQgPAAgHgOgAjrj0QgKgOAQgDIAAgBQASAKgTAIIgDAAIgCAAgAk2lEQACgGAHgCIAEgBQAKAAACAJIABADQAAAIgHAEIgGACQgQgCADgPgAh+lWQgDgEAAgEQAAgFACgDIABgDIAGgFIADgCIAGgBQAJAAAEAHIACADQADAFgCAGIgEAIIgEACIgDACIgGABQgIAAgGgHgAgvl+QgDgDAAgFIABgIIACgCIAFgGIAEgBIAFgBQAJAAAFAHIABACQADAGgBAFIgEAIIgEADIgDACIgFAAQgJAAgGgHgAB8mZQgCgIAGgFIAFgFIACgBIAFAAIAAgBIAHACIAEADQAEAEABAGQAAAEgCAEQgIAJgHAAQgIAAgHgMgAANnjIgBgGQgBgEADgEIAHgEIAFgBQALABAFAJIACACQAAAHgGAEIgHAFIgGABQgJAAgDgKg");
	this.shape.setTransform(42.9,58.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("ACgIvQg6haARhwQALhKAAhKQABhjglhWQBsguBChoIgBgDIgDgFIgDgDQgLgFgIAKQgHAHgGAKIgBACQgzA5hAApQgzAeg8AHQg+AHhCgHQidgPhbh0IAAgDQgBgEABgEIACgGQAEgPAJgOIAFgIQAtgKAwADQBDAjBJAUQBHATBAgbQBKgfA9gyQBnhTgkiCIgLgDIgGAAIgBABIgHAEQgFAgAAAhQgBAigQAdQgrBQhaAhQiQA3iKhQQgQgJgRgHQiAg0AYiCQAjg1BEAWQAuAPApATIAEgCIACgBIACgDIACgCQAAgHgHgEIgDgCIABgCIAGACIAEgBQBTjFDcAdQBZA3ArBhQBXDIAjDYQAQBcgEBfQgGAGABAUIABAqIgBAFIABABQgCCCg0B7QgeBIhKARQgIACgIAAQgeAAgTgegADiGtQgPADgGAPIAAAIQAAAIAGAFQAMAIAOgGIAFgFQAFgEAAgGIgCgFQgEgLgIgIIgHgCgAEqEXQgGAHADAJQAFAMAOgDIAFgFQADgDABgFIgBgCQgEgNgNgBQgEABgDADgACqCYQgDADAAAEQAHARAVgDQAEgCADgFIABgFIgBgDQgHgLgPgBQgGAAgEAGgAEWB+QAGAPAPgDIAGgFQAJgKAAgLIgBgDQgEgGgIgBQgWADgBAVgAiagqQgIAFACAJQAUA3AZg0IgBgDQgFgRgTgCQgHABgHAEgAEugoQgPAOAMARQAUABAEgXIgBgCQgEgJgKgBIgGADgAAvheIgKAEQgEADAAAFIgBAGQAIATASgLIADgGIACgFIgCgFQgBgGgFgCIgHgCIgBAAgAkRh9IgHACIgEAGIgCACQgCAEABAEQAAAIAGAGQAKAHALgFQAEgCADgFQAEgFAAgFIgEgIIgEgGIgEgCIgHgCIgFABgAghkZIgMABIgCABQgLAGACAMQALAVATgQIABgCQAHgRgPgHgABOkvIgEACIgGAFQgIALgCANQAIARATgDIAEgBIAEgDIAEgIQADgJABgKIgDgFIgDgGIgFgCIgHgCIgFABgAjakkQgQAEAKANQADABACgBQATgIgSgJgAkilrQgHACgCAGQgDAPAQADIAGgCQAHgEAAgIIgBgDQgCgJgKgBIgEABgAhqmOIgDABIgGAGIgBACQgCAEAAAEQAAAFADADQAIAJAMgDIADgBIAEgDIAEgIQACgFgDgGIgCgCQgEgHgJgBIgGACgAgbm2IgEACIgFAFIgCADIgBAIQAAAEADAEQAIAJAMgDIADgCIAEgCIAEgIQABgGgDgFIgBgDQgFgHgJAAIgFABgACXnLIgFABIgCAAIgFAFQgGAFACAIQANAXARgTQACgEAAgEQgBgHgEgEIgEgCIgHgCgAAgoTIgHAEQgDADABAFIABAFQAEANAOgEIAHgFQAGgDAAgHIgCgDQgFgIgLgCIgFACg");
	this.shape_1.setTransform(41.8,61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACCJTQhWhPAMh5QALhqAOhoQALhOgZhMIAAgBIgDgOIgBABQgfAMghAHQgfAGghgBQh5gGhtgxQhMgjgdhNQgHgRAHgSQARgzA1ABIAUgBIgNgJQgqgfgfgpQgggqAEg2QAEhGBEgMQBNgLA5AuIADACIAGABIAGABIABABIAEABQAGAEAAAHIgCADIgCADIgBABIgFABQgpgSgtgPQhFgXgjA2QgXCBB/A0QARAHARAKQCKBPCQg2QBaghArhQQAQgeAAgiQAAghAGgfIAGgFIACAAIAFgBIAMAEQAkCBhnBUQg+AyhJAeQhBAchGgUQhJgUhDgjQgwgCgtAKIgGAIQgJANgEAQIgBAFQgCAEABAEIABADQBbB3CdANQBBAGBBgHQA5gFAzggQBBgpAyg4IACgDQAFgJAHgIQAIgJAMAEIADADIADAGIABACQhCBphtAuQAlBWAABjQAABKgLBJQgSBxA7BaQAXAlAqgKQBKgRAehHQA0h7ABiDIAAgBIAAgFIgBgpQgBgVAHgGQADhfgPhcQgkjYhXjHQgqhihag3QjcgchSDFIgFAAIgGgCIgCgCIgCgFQAfhgBVgyQAygeA1gMQA0gBA0AFIAGABQCOBhA3CjQBFDNAaDTQAIA9gIA6QACAFABAGQAOBkgQBlQgWCOh0BQQglAZgiAAQgpAAglgjg");
	this.shape_2.setTransform(42.6,63.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.2,126.1);


(lib.fish_still = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F44719").s().p("AgBgLQgWgUgFgRQgGgSAUAAIgDAKQABANAQALQAgAXgBBMQgGg1gagZg");
	this.shape.setTransform(4.4,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F44719").s().p("AgWgLQATAAAaAXg");
	this.shape_1.setTransform(-1.5,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F44719").s().p("AAQAMQgMgVgtgUIAjAOQAkAPAMAUQgNAEgJAGQADgHgHgLg");
	this.shape_2.setTransform(2.5,-10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F44719").s().p("AATArQADgWg+g/IAcAQQAeAZAXAsg");
	this.shape_3.setTransform(8.4,-13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AgVgLIATAIQASAHAGAI");
	this.shape_4.setTransform(-2,-6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.3,1,1).p("AgbgbIAYAOQAXARAIAY");
	this.shape_5.setTransform(1.3,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AgggrIAeAhQAdAiAGAU");
	this.shape_6.setTransform(6.7,-13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("AgHAZQAAgKACgLQAFgVAIgH");
	this.shape_7.setTransform(9.5,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("AAThHIAQAlQANAugRA8QgPg5gSgVQgTgVgHgIQgLgMAAgL");
	this.shape_8.setTransform(4.4,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAAQAAgEAGAAQAHAAAAAEQAAAFgHAAQgGAAAAgFg");
	this.shape_9.setTransform(16.6,-1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.3,1,1).p("AAWgVQgJAAgLACQgUAFgIAOQgKAOAPAGQAMAFANgGQAPgFAIgMQAKgNgPgKg");
	this.shape_10.setTransform(16.2,-3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAUQgPgGAKgOQAIgOAUgFQALgCAJAAQAPAKgKANQgIAMgPAFQgGADgHAAQgGAAgGgCg");
	this.shape_11.setTransform(16.2,-3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.3,1,1).p("AhIBFQAKAQAQAGQAbAJAEA0QAPgtgTgiQgVgigDgIQgGgSAQgOQANgOAbgIQAwgNAQgHIAOABIAQASQAZARAwgJIACgMIARABQAEgngBgeQgBgcghgRQgogUg6AVQg0ATgjA0QghA6gOAPQhWAhgoBAIAogFQAtgLAhgfg");
	this.shape_12.setTransform(0,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE388").s().p("AguBbQgQgGgKgQIgGgPQghAfgtALIgoAFQAohABWghQAOgPAhg6QAjg0A0gTQA6gVAoAUQAhARABAcQABAegEAnIgRgBIgCAMQgwAJgZgRIgQgSIgOgBQgQAHgwANQgbAIgNAOQgQAOAGASQADAIAVAiQATAigPAtQgEg0gbgJg");
	this.shape_13.setTransform(0,5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("AhpCMQADgDAVgbQA5hHASgKQAigUBLgNQANhFgahDQgKArgogGIgvgOQAOAngnAFIgnAGIARAJQAJAQgjAmIAKAfQAEArgdAxQgQAaAGgFg");
	this.shape_14.setTransform(3.9,-6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE388").s().p("AhfB3QAdgxgEgrIgKgfQAjgmgJgQIgRgJIAngGQAngFgOgnIAvAOQAoAGAKgrQAaBDgNBFQhLANgiAUQgSAKg5BHIgYAeIgBABQgCAAANgWg");
	this.shape_15.setTransform(3.9,-6.9);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-22,41.4,44.2);


(lib.Symbol71 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAB8QAAgDAUgSQAUgSAHgLIgVgGQgrgLgHgOQgGgOgFgdQgFgaAAgmQAggkApgYQAmgZA3gPQAMAGAJAJQAKAHAMATQglAXgXASIgkAgQAkAPAYAUQAYARAAARQAAAfgrApQgpAqhJAgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-16.5,21.2,33.1);


(lib.Symbol60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbC3QgOgGgQg3IgCgGIgigCIgBgvIABgHIAAABQAAgGAUgbQATgbAXgUQATgRAbgPQAegPAKAAQAFAAAEAGIAOASIABAEIACAIIgEAVQgUBegJBnIgZARgAg3hxIAzg+QAJgNA5gOIAMgCIAVAwIg4A0QgRAOgVAPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-20.6,19.1,41.2);


(lib.Symbol59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaDZQgWgRgTgXQgMgYgHgcQgFgaAAgiQAAg0AWhNQAXhPAthnIAYAMIAIgIIA4AcIACBNQgqBlgWBAQgUBCAAAgQAAARAEARQADAQAHANIAKADIAOACQAGAAAKgEIAhgLIAAAWQgGAFgEAHIgFAUIgYAJIgaAFQgegNgXgRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-24.7,18.6,49.5);


(lib.Symbol58 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABOCIIgSACIgBAAQgLAAgNgTQgMgUgKgeQgMAOgQAKQgSALgUAGIgPAAQgPAAgOgDQgNgCgOgFQgGgQgCgPQgCgQAAgRQAAgkAGgmQAHgnAOgoQACgIADgDQADgDAEgBIBAgQQACgGAKgCIAXgCIABAAIADgBQADAAAEADQACADAAAEIgHAXQgfBUgRBbQAmgxAshDQANgUAFgDQAEgCAVgGQAVgFARAAQAGAAACADQACADAAAFIgCALQgFA4AAA9IAGB0IglAIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,-16,27.1,32.2);


(lib.Symbol57 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADOQgcgSgZgZQgMgLgFgdQgFgfAAgsIACgwIgEADIgNAJIgYgJIgChhIBTgRIAVgnIAXglIAhgRIAVgQIAYgEIAEAAQAGAAADAEQADAFABAGQAAAFgKAhIgPAzIASgBIAIAMIAKAGIAABNQgJAFgDAFQgDAFgDAMQgSAFgMABQgLADgIgBQgMAdgIAoQgIAnAAAkIABAIIAYgVQAOgNAPgVIAUAHIgIAdQgCAKAAAMIACASQgMAUgNALQgNAMgMAAQgLAAgbgTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.8,-22.5,23.6,45);


(lib.Symbol56 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABFCXQgPgDgGgNIgghLQgsAmghAVQghAXgHAAQgOAAgGgOQgGgNAAgYQAAgtAYgxQAYgzAug5IAAgBIgBgDIABgHIADgFIAlgiQAHAAAFADIAMAKQAAgBAHgDQALgGADAAQAMAAAVAYQAWAYAVAlQgKAXgEAbQgFAaAAAlQAAA1AKAvIADANQAAAFgEACIgIACgAgtgQQgPAbgIAXIA7g6IgKgng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.8,-16.3,25.7,32.6);


(lib.Symbol55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGCQQgLgGAAgQQAAgTAVglQAVglAhgkIgqgUQgvgZAAglQAAgXAFgUQAEgTAKgBQANAAAtANQArAMAjASQAUAJAIANQAIANAAAlIgDBDQgTARgTAPQgUAOgVAIIAiAYQgcAbgTAIQgRAKgVAAQgWAAgLgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-15.3,19.4,30.6);


(lib.Symbol54 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxDUQgUgNAAgQQAAgZAQgkQARgjAagcQAFgHAMgEQAOgEAMAAIADAAIgsgQQgfgKgnAAIgZAAIgSgSIgDglQAAgjAOgeQAMgeAbgRQAZgkAbgTQAYgUAGAAIAIACIAPAGQAEACAEADQACADABAGIAAACIgBAAQATAWAPAXQAOAXAAAIQAAAJgTAWQgTAVgGAAQgIAAgEgKQgCgLABgCIgPAVQgJALgGADQAzAIAjAZQAiAaAAAhQAAAUgPAhQgQAfgZAdQgqAxgRAPQgNAQgKAAQgPAAgVgNgAAACcIADAAQAAACAAgCIACgMIAHgQQAOgcAJgbIgQAfQgMAXgCARQgFAMAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-22.6,25.1,45.2);


(lib.Symbol53 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZCDQgMgbgKhaIhGBeIg8gCQgHAAgDgDQgDgEAAgFIAAgGIAUhvIACgFQAHgqAAgIQAAgFgFgFQgFgDAAgJQAAgFADgLIAMgcQAQgHAMgDQAMgDANAAQAYAAALAOQALAPAAAeIgCAlQARgKAZgFQAZgFAVAAQAhAAAOAKQAOALAAAcQAAAVgEArQgEAtAAAZIABAFIAIAEIgCATQgaAOgVAHQgUAHgMAAQgYAAgLgbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-15.8,28.4,31.7);


(lib.Symbol52 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmCEQgLgUAAgmQAAghAFgiQAEggAJgaQgDgCgEgHQgEgGAAgFQAAgIAOgSQAQgRAUgRQAQgMAJgFQAKgEALAAQAlAAAsAeQArAfAAAbQAAAJgJAZQgKAYgSAdQgMAZgTAdQgUAbgSAUQgIAMgYAIQgYAIgUABQgXAAgLgVgAgvAAQAAAQAEAFQADAGAGAAQANAAANgIQALgJAJgKIg3gig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,-15.3,22.9,30.6);


(lib.Symbol51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2DqQgXgCgIgFQgTgPgRg2QgRg3AAg8QAAgVACgLQACgLAGgIQAbgjAjgaQAigaAqgIIhMgCQBvhHBMgeQBNgeAxAAQANAAADAMQAEANAAAcQAAALgFARQgEARgQApQh6AahQAwQhRAugLAoQAOAFAaADQAaAEAwAAQBYAABYgSIASgDQAEAAADACQACACABAFIAAADIgGApQgMAPgRALQgRALgUAGIgCAzQgoATgvAJQgvAIg6AAQghAAgVgDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-23.8,40.8,47.6);


(lib.cloud = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8DCF4").s().p("ADtB6IgRgSQh8Ahg7gnQgqgegdgEQgdgEg9AOQg6APgmgNQgigLgIgbQgSg9g1AdQgjAUhHAGQhQAGgygWQgygVgegnQgbgiADgZQACgTAlgKQASgFASgCIAnAKIgjAOQgiAUAEAcQAEAdAsAIIBjAGQAUAAA5ASQAeAHAegXQAmgfAQAEQAPAEANAoQAMAkA0AOQAzAOAtgVQAwgVAWACQAbACAcAiQAfAkAzAAQAxACAkgcQAhgaAaADQAYAEAcAgQAZAeAggJQAcgIATghQATggAYgTQAagUAQALQAQAKAOgFQAMgDAAgPQAAgSAOgQQARgUAWAFQAgAGAhgwIAPAgQAMAmgOASQgXAbgKgVIgOAuQgWArgngTQgmgSgYgEIgQAAIglA0QgyA0g/AAQg/AAgfgSg");
	this.shape.setTransform(0,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEGD+IgggWQh5Arg+goQgvgigQgHQgYgLgjANQgqAQhFgIQhJgJgCgcQgFg8haAoQgyAWhZgLQhkgMgtgwQgugwASgjQASgfA1AFQACgUAPgZQAegyBAgWQA/gXBXASQAsAIAfANQgDgZAVgfQAqg+B0gdQB5geBiAeQBQAYADAgQADAdAVASQAbAYAsgQQAugQAyAKQAvAJAKAXQAHAPADAZQAGAUAXAMQAUAKBQAjQBGAjAAAnQAAAngTAHIgUAAQgdBVgugNIhPgXIglA3QguA4gvAAQgvAAgqgVg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-27.5,135.1,55.1);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fly
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAAQAAgHAFgBQAGABAAAHQAAAIgGAAQgFAAAAgIg");
	this.shape.setTransform(-11.7,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.8,1,1).p("AAVhTQgGAVgMAQQgMAUACATIAHgEQAKgBAHAKQAJAOAPgBQASgBADgZIAGAPQAFAPgGAHQgKAKgRAGIAFAfIAfAJIgjAAQgvAmgpgaQgagQgCgmIAEgiIAZgXQAKgRANgSQAZgjAMgHQANgHgGAWg");
	this.shape_1.setTransform(9.4,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AgvBaQgagQgCgmIAEgiIAZgXIAYgjQAYgjAMgHQANgHgGAWQgGAVgMAQQgMAUADATIAHgEQAJgBAHAKQAKAOAOgBQARgBAEgZIAGAPQAFAPgGAHQgJAKgSAGIAEAfIAgAJIgjAAQgdAXgYAAQgSAAgRgLg");
	this.shape_2.setTransform(9.4,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.8,1,1).p("AAAgoQgKAKgCAVQgDAZgIAZQANAMAQgPQANgLAEgbQADgcgHgLQgIgLgLAKg");
	this.shape_3.setTransform(-10.7,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXApQAIgZADgZQACgVAKgKQALgKAIALQAHALgDAcQgEAbgNALQgIAIgJAAQgGAAgGgFg");
	this.shape_4.setTransform(-10.7,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.8,1,1).p("AAHgOIgSAXIAKAAQAJABAEAFQgJgPAEgOg");
	this.shape_5.setTransform(-15.7,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F99D0B").s().p("AgBAJIgKAAIASgWQgEANAJAOQgEgEgJgBg");
	this.shape_6.setTransform(-15.7,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.8,1,1).p("ABmgiQAPAugQA1QgQA2ghAKQghALgogGQgsgHgZgYQgVgVADgUIAIgPQAOgOAIg2QANhXA6gYQAXgLAjAfQAkAeAPAwg");
	this.shape_7.setTransform(-4.2,-4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AgVCGQgsgHgZgYQgVgVADgUIAIgPQAOgOAIg2QANhXA6gYQAXgLAjAfQAkAeAPAwQAPAugQA1QgQA2ghAKQgVAHgYAAQgMAAgQgCg");
	this.shape_8.setTransform(-4.2,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.8,1,1).p("AgPgEIAiAJIglgCg");
	this.shape_9.setTransform(15.8,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.8,1,1).p("AgxgLIATASQAdATAzgFQgogdgEgN");
	this.shape_10.setTransform(8.5,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.8,1,1).p("AAMgKQgEAAgFACQgJAFgFAFIAIABQAIABAGAHg");
	this.shape_11.setTransform(-16.4,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F99D0B").s().p("AgCACIgJAAQAFgFAJgEIAJgEIgBAWQgGgHgHgCg");
	this.shape_12.setTransform(-16.4,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAAHgGAAQgFAAAAgHg");
	this.shape_13.setTransform(-13.4,-5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.8,1,1).p("AgUgJQAEgJAHgJQAKgSANAAQAPAAgEAeQgDAagMASQgNAWgNgFQgQgGAMgxg");
	this.shape_14.setTransform(-12,-5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAuQgQgGAMgxQAEgJAHgJQAKgSANAAQAPAAgEAeQgDAagMASQgKARgLAAIgFAAg");
	this.shape_15.setTransform(-12,-5.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.8,1,1).p("AAjhsQgYgxgWgRQgVgQgcAJQgfAJgeAnIgJAVQgLAagEAYQgGAlgCAZIgIAZQgDAeAUAQQAXARApAGQAkAEAagGIANgBQAKADgEAQQgDAXAHAWQAKAaAaADQAeAEAagIQAagIAIgSQAGgPgBgPIgCgNQAgAIgEgVIgNgiQgPAggOgGQgjgOgEgBQgVgGgUAJQgKAFgJgBQgLgBAEgJQAJgLAIgLQARgWAHgkQAIgqgcg6g");
	this.shape_16.setTransform(1,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF99").s().p("AApC4QgagDgKgaQgHgWADgXQAEgQgKgDIgNABQgaAGgkgEQgpgGgXgRQgUgQADgeIAIgZQACgZAGglQAEgYALgaIAJgVQAegnAfgJQAcgJAVAQQAWARAYAxQAcA6gIAqQgHAkgRAWIgRAWQgEAJALABQAJABAKgFQAUgJAVAGIAnAPQAOAGAPggIANAiQAEAVgggIIACANQABAPgGAPQgIASgaAIQgRAFgTAAIgUgBg");
	this.shape_17.setTransform(1,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.8,1,1).p("AgPgLIAOAGQANAGAIALQgUgQgTAE");
	this.shape_18.setTransform(15.2,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.8,1,1).p("AgmgmIADAjQAHAiAVAGQAgAKAOgfIgWgKQAAgigXAA");
	this.shape_19.setTransform(7.4,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.8,1,1).p("AgPgPQgJAZgBAfQAVAOATghQAPgWgGgXQgGgXgOABQgKABgJAdg");
	this.shape_20.setTransform(-11.6,-5.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZApQABgfAJgZQAJgdAKgBQAOgBAGAXQAGAXgPAWQgOAYgNAAQgGAAgHgFg");
	this.shape_21.setTransform(-11.6,-5.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.8,1,1).p("AAFifQgmgignAVQg1AdAABKQAAAYgYAqIgIAfQgBAkAhALQA1ASBIgCIAAAgQAFAjAWANQAaAQAkgKQAjgLACgUIAEghQAcAAAAgcIgEgdQgOAkgPAAQgFAAgLgLQgMgLgYAAQgZAAgRAFIgMAEIAAgMQAMgKALgVQAVgogIg3QgJhCgpgig");
	this.shape_22.setTransform(0.8,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF99").s().p("AAbCrQgWgNgFgjIAAggQhIACg1gSQghgLABgkIAIgfQAYgqAAgYQAAhKA1gdQAngVAmAiQApAiAJBCQAIA3gVAoQgLAVgMAKIAAAMIAMgEQARgFAZAAQAYAAAMALQALALAFAAQAPAAAOgkIAEAdQAAAcgcAAIgEAhQgCAUgjALQgOAEgNAAQgTAAgQgKg");
	this.shape_23.setTransform(0.8,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.8,1,1).p("AAJgLQgDgBgEACQgHADgIAHIANADQALAFADAFQgCgHgDgRg");
	this.shape_24.setTransform(-15.8,3.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F99D0B").s().p("AAAADIgNgDQAIgHAHgDQAEgCADABIAFAYQgDgFgLgFg");
	this.shape_25.setTransform(-15.8,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-13.4,y:-5.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_13,p:{x:-13,y:-5}},{t:this.shape_18}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-19.1,36,38.2);


(lib.audiospeakersoundwaves = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AgOhqQA7Bug7Bn");
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


(lib._slidemp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
            this.stop();
		/* stop();
		*/
	}
	this.frame_1 = function() {
		playSound("slidemp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._boingmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
            this.stop();
		/* stop();
		*/
	}
	this.frame_1 = function() {
		playSound("boingmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.scrollMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow2();
	this.instance.setTransform(11.1,17.3,1,1,0,0,0,7.8,15.7);

	this.instance_1 = new lib.arrow_bg();
	this.instance_1.setTransform(12.6,31,1.069,1.067,0,0,0,11.8,29);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,20);


(lib.questionArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
            this.stop();
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer 1
	this.instance = new lib.questionArrow_still();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-9.6,33.9,19.3);


(lib.pad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"pad stopped":0,"hit pad":12});

	// timeline functions:
	this.frame_0 = function() {
            this.stop();
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0D6422").ss(1,1,1).p("AgOgsQCKAsATAtQiegth/AY");
	this.shape.setTransform(-14.7,-7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0D6422").ss(1,1,1).p("ACJBdQglhFh5gYIhzgJIBHgpQBRgoA4gC");
	this.shape_1.setTransform(13.4,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0D6422").ss(1,1,1).p("AiKAYQAVgQApgUQBRgrBpgXIAQAqQARA0gFA/");
	this.shape_2.setTransform(-11.4,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0D6422").ss(1,1,1).p("AAziKQhKADhHAIQiOAPAcAbQgQgIgOAKQgWAMgQAMQgdAXgLAdQAcABAcACQgPAAgOAEQgbAFAFARQAHAYAxAhQA4AlBBAMIATgWIACAOQAGANAWAAQASAABDAGQBDACAygVIAHgWIAwADQA5gCAqgUQAxgZgDgiQgEgggugUIAmgDQgIgagkgXQhIguiKAMg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#15A039","#0C581E"],[0,1],21.6,18.4,-43.3,-65.2).s().p("AAACLQhDgGgSAAQgWAAgGgNIgCgOIgTAWQhBgMg4glQgxghgHgYQgFgRAbgFQAOgEAPAAIg4gDQALgdAdgXQAQgMAWgMQAOgKAQAIQgcgbCOgPQBHgIBKgDIAAAUQCKgMBIAuQAkAXAIAaIgmADQAuAUAEAgQADAigxAZQgqAUg5ACIgwgDIgHAWQgtATg9AAIgLAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#15A039","#0C581E"],[0,1],21.6,18.4,-43.3,-65.1).s().p("AAACLQhDgGgSAAQgWAAgGgNIgCgOIgTAWQhBgMg4glQgxghgHgYQgFgRAbgFQAOgEAPAAIg4gDQALgdAdgXQAQgMAWgMQAOgKAQAIQgcgbCOgPQBHgIBKgDIAAAUQCKgMBIAuQAkAXAIAaIgmADQAuAUAEAgQADAigxAZQgqAUg5ACIgwgDIgHAWQgtATg9AAIgLAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0D6422").ss(1,1,1).p("ACJBdQglhFh5gYIhzgJIBHgpQBQgpA5gB");
	this.shape_6.setTransform(13.4,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0D6422").ss(1,1,1).p("AiKAZQAUgRAqgUQBRgrBpgXIAQAqQARA1gFA+");
	this.shape_7.setTransform(-11.4,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0D6422").ss(1,1,1).p("AAyiKQhKADhGAIQiOAPAcAbQgQgIgOAKQgXAMgPAMQgdAXgLAcQAbACAcACQgOAAgOAEQgbAFAFARQAHAYAwAhQA5AlBBAMIATgWIACAOQAGANAWAAQASAABDAFQBDACAygUIAGgXIAwAEQA6gCAqgUQAxgZgDgiQgEgggugUIAmgDQgIgagkgXQhIgviLAMg");
	this.shape_8.setTransform(0,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#15A039","#0C581E"],[0,1],21.6,18.4,-43.3,-65.2).s().p("AAACKQhDgFgSAAQgWAAgGgNIgCgOIgTAWQhBgMg5glQgwghgHgYQgFgRAbgFQAOgEAOAAIg3gEQALgcAdgXQAPgMAXgMQAOgKAQAIQgcgbCOgPQBGgIBKgDIAAATQCLgMBIAvQAkAXAIAaIgmADQAuAUAEAgQADAigxAZQgqAUg6ACIgwgEIgGAXQguATg9AAIgKgBg");
	this.shape_9.setTransform(0,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0D6422").ss(1,1,1).p("AiKAYQAUgRAqgTQBRgsBpgWIAQAqQARA1gFA+");
	this.shape_10.setTransform(-11.4,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:-7.1}}]}).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:-7.1}}]},12).to({state:[{t:this.shape_9,p:{y:4.8}},{t:this.shape_8,p:{y:4.8}},{t:this.shape_7,p:{y:10.2}},{t:this.shape_6,p:{y:3.4}},{t:this.shape,p:{y:-2.3}}]},1).to({state:[{t:this.shape_9,p:{y:3.3}},{t:this.shape_8,p:{y:3.3}},{t:this.shape_7,p:{y:8.7}},{t:this.shape_6,p:{y:1.9}},{t:this.shape,p:{y:-3.8}}]},5).to({state:[{t:this.shape_9,p:{y:2}},{t:this.shape_8,p:{y:2}},{t:this.shape_10},{t:this.shape_6,p:{y:0.6}},{t:this.shape,p:{y:-5.1}}]},2).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:-7.1}}]},3).wait(1));

	// Ripple
	this.instance = new lib.ripple();
	this.instance.setTransform(-39.4,-10.4);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,86,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({scaleX:1.67,scaleY:2.14,rotation:-0.3,x:-70.9,y:-27.9,alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,-14.9,65.5,29.8);


(lib.land_left = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#134560").s().p("AAdBzQgYgSgcg5QhBh7gUgqQAjAuAxBnQAZAqAeAZQAQAMAXAFQAaAHANgNQgZAYgXAAQgQAAgQgLg");
	this.shape.setTransform(55.8,284.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#134560").s().p("AAwA/QgRhygJgbQgPgsgZgnQgigwghgFQAjAEAqAXQAoAYAWB6QATBiADAxQAAAJAHAoQAFAggCARQgEgDgFgBQgWgGgGAVQADh9gEgbg");
	this.shape_1.setTransform(29,276.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#134560").s().p("AgZDoQgGgfAGhsQACglAKhGQAKhKACgiQAFh8g6hQQAfANAWAvQAQAnAEAoQAGAzgOBsIgMBrQgHBAAEAwQAEAsAMAaQAFAKAPASQATAYAEAOQhCgRgOhOg");
	this.shape_2.setTransform(4.7,267.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F6693").s().p("AHEEyQgZgtgcgTQgbgSgugFQg6gHgQgFQgiA1AoA0QgygYgKg0QgggJgqg/Qgog6gxgHQgbArAFBjQgUgegKguQgHg1gEgZQgPhYhNgeQhngoguBZQgRAggNA4IgTBZQgCgrAKhzQAJhjgLg3QgHgkgdgiQgbggghgPQgjgQgYAOQgXAOgFAnQASi/gJgEQA8AZBMA0QAjAXAPAeQAKATATA0QAOAgAeAOQAJAEA0APQCbArBPBLQAVATASAfIAfA3QAYAjAjAQQAaALA1AJQB+ASAnAcQA9ApgHBuQgMgPgfg6g");
	this.shape_3.setTransform(34.5,264.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AlwkSQAiAYAQAeQAJATAUA0QAOAfAdAOQAKAFA0APQCbArBOBKQAVAUASAfQAfA2ABAAQAYAjAjARQAaALA1AJQB0AQAXAKQBAAXAhBFQAFAJAHAOIvzAAIAAq9QA8AZBNAzg");
	this.shape_4.setTransform(36.3,262);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4178AF").s().p("An5FfIAAq9QA8AYBNA1QAiAWAQAfQAJATAUAzQAOAhAeANQAJAFA0APQCbArBPBLQAUATASAfIAgA3QAXAjAkAQQAaALA1AIQB0ASAYAIQA/AYAhBFIAMAXg");
	this.shape_5.setTransform(36.3,262);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AiThNQgQARgFAdQgEAaAIARQAIAWAPgBQATgBAXggQgDAKgIAVQgFATAKAKQANANAWgIQASgHANgPQALAnApAAQAnAAAsgcQAtgdATgjQAWgpgage");
	this.shape_6.setTransform(38.2,-118.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#63310F").s().p("AgQABQAdgUANgMIAAgIQAEAAAGgEQAEgDAGABQgBAFABAPQgSAIgbAcQgXAcgXAIQAEgZAZgVg");
	this.shape_7.setTransform(79.8,257.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#63310F").s().p("AAAAAQAAgZADgNIgDgEIAEAAIgBAEQAOAOgIAXQgFAOgOAeQAHgPADgcg");
	this.shape_8.setTransform(59.4,243.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D19369").s().p("AgKA+QAYguADgLIAFgYQACgcAAgqQgDgQgEgOIAHAPIAAAPQAFAggHAmQgBAVgCAMQgJBGgiAkQgFgXATgjg");
	this.shape_9.setTransform(27.8,-82.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#844419").s().p("AAGgjIgGgeQgGgfAZgRIgNBOIAGAbQABAggfBag");
	this.shape_10.setTransform(-10.1,76.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#844419").s().p("AgGAKIALgGQAEgqgJghQAMAkgGAxQgEAhAAAZIgIg+g");
	this.shape_11.setTransform(5.8,-40.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#844419").s().p("AgUADQANhSAZgaIAHgUQAhAbgpBeIgiBHQgSApgEASIATh7g");
	this.shape_12.setTransform(-0.8,109.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#844419").s().p("AAXByQgQg9gBgIQgahrgEhGQAMA2AYBJQAYBDgEBtQAAgWgJgjgAggiqIAHAOIABAYQgFgUgDgSg");
	this.shape_13.setTransform(9,75.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AiDhmIBWC/ICxAO");
	this.shape_14.setTransform(57.7,257);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AhmhcIAqC5ICjgI");
	this.shape_15.setTransform(67,243.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AhGhDIAOCGIB/AA");
	this.shape_16.setTransform(76.6,230.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("Ag4g0IAABpIBxgr");
	this.shape_17.setTransform(87.3,219.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AkdF0QBaiTB0imQDmlLCGhj");
	this.shape_18.setTransform(73.1,240.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#204C1B").s().p("Aj5GLQhGgxgShnQgHgsAIglQAOg9A8hAQBNhFAlgmQBxh2BxhYQBlhOAugYQAMgGAxgPQAogNAPgLIjJChQiLB1hLBfQjiEUDeCzQgrATgmAAQgwAAgqgdg");
	this.shape_19.setTransform(63.9,248.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AA5DCQhhDSg6AWQgiANgxgSQgwgQgsgmQhphZAQhYQBNhvCBiDQECkKEHhwIi5FeQgYAvhjDjg");
	this.shape_20.setTransform(65.8,245.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#367033").s().p("Ai1GlQgwgQgsgmQhphZAQhYQBNhvCBiDQECkKEHhwIi5FeQgYAvhjDjQhhDSg6AWQgOAFgSAAQgXAAgcgKg");
	this.shape_21.setTransform(65.8,245.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("Ah4AVIDxgp");
	this.shape_22.setTransform(8.6,237.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AiggxIBPBjIDygs");
	this.shape_23.setTransform(6.9,218.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("Aing0IBsBpIDjgy");
	this.shape_24.setTransform(7.6,201.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("Ai1hGICWCNIDVhH");
	this.shape_25.setTransform(9,184.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("Ai5hmIC5DNIC6gq");
	this.shape_26.setTransform(9.4,166.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AiciDIByEHIDHgj");
	this.shape_27.setTransform(16.5,147.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("Ah1hjIBHDHICjgr");
	this.shape_28.setTransform(22.6,135);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AhUg0IAqBpIB/gW");
	this.shape_29.setTransform(28.7,124.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AkEJ4QBhliAoi2QAsjMAFgWQAchxAhhLQBNizDFiH");
	this.shape_30.setTransform(20.4,173.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#204C1B").s().p("Aj3FtQgHikAAhPIAAldQBniNCZhaQAjgUBfgdQBXgaAkgaQgWAShhA9QhKAvgnAsQh6CMg/CsQgzCIgRDHQgJBpgCDFQgBhLgFh4g");
	this.shape_31.setTransform(17.8,166.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("ABQr0QjYBfiGC3IAAUNIDlhBQBMlJAkmyQAZkuBBjrQA3jLA3g9QhSALhtAvg");
	this.shape_32.setTransform(19.4,191.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#367033").s().p("AkOneQCGi3DYhfQBtgvBSgLQg3A+g3DKQhBDrgZEvQgkGxhMFKIjlBAg");
	this.shape_33.setTransform(19.4,191.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AkPi1IDIFrIFXhk");
	this.shape_34.setTransform(34.4,235.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AjViRICWEjIEVgP");
	this.shape_35.setTransform(43,211.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("Aigh4IBQDxIDxgO");
	this.shape_36.setTransform(52.7,197.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AhuhUIAkCiIC5AH");
	this.shape_37.setTransform(62.7,183);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AhGgxIAHBbICGAI");
	this.shape_38.setTransform(71.6,173.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AlAIYQAqjRBnjvQDJncEniT");
	this.shape_39.setTransform(55.1,215.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#204C1B").s().p("AkyGQQgmgcgUgQQgjgdgTgkQgGgLgEgLQgahMA/hxQAVgnAlgxQAog3AOgWQCDi/DHhtQCBhFEAhNQl4B8jMGKQg8BvgVCgQgNBagNC4QADhTg6gxg");
	this.shape_40.setTransform(39.6,218);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AkoifQEDl8HuhZIgvBbQg5B2gvCFQiUGoANGkIgcBHQiIgtiNhLQkfiYgjidQAHgrAYhDQAwiDBRh2g");
	this.shape_41.setTransform(41.5,225.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#367033").s().p("AiGH8QkfiXgjidQAHgqAYhDQAwiDBRh3QEDl7HuhaIgvBbQg5B1gvCGQiUGoANGkIgcBHQiIgsiNhNg");
	this.shape_42.setTransform(41.5,225.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AiDiGIAHBZQAIBbAOASQAQAWBOAYQBNAZA/AA");
	this.shape_43.setTransform(84.1,282.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AgNgxIgcA4IBTAr");
	this.shape_44.setTransform(126.7,260.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AAKhfIgcAvQgeAwgEARIAiAoQAoAnAfAA");
	this.shape_45.setTransform(116.3,264.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AAAiHIgdAmQgfA1AFBBIApAxQAtA0AaAO");
	this.shape_46.setTransform(105.9,270.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AgziVIgeBYQgdBeAJAtIBQAnQBVAlAogE");
	this.shape_47.setTransform(94.7,275.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AloC2QBwhSCRhXQEiirCugX");
	this.shape_48.setTransform(102.7,275.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#204C1B").s().p("AARg3QB5hIBAgdQB4g3BTAFQgiAegsA3QgaAgg1BFQhjB7hMAgQgQAGgLADQgrAOhBADIh3ABQiXAChIArQEZizCMhTg");
	this.shape_49.setTransform(92.3,280.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("ADWjbQlCAbj/DQQj+DSEPgCQBSAACegWQCbgVAXAAQCziIBVhpQA2hDA2gtIArggQhvgciiANg");
	this.shape_50.setTransform(90.1,277.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#367033").s().p("AlrAQQD/jQFCgbQCigNBvAcIgrAgQg2Atg2BDQhVBpizCIQgXAAibAVQieAWhSAAIgFAAQkIAAD8jQg");
	this.shape_51.setTransform(90.1,277.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#844419").s().p("AhuYuIgckAQgRiZgEhnQgFhqAIkBQAHjigMiJQgXkFAUjWQAJhagXjCQgXi6ANhjQALhUgOilQgNinAKhUQAJhNAqhwQBAirAEgNQAmh6ACiQQAAgLALhzQAHhNgIgoQAKAtACA/IAAByQAABvgCANIgMBFQgGAzglCNQgkCKgHBAQgNBxgCAkQgEBNAFCvQAHDvAhGbQAoHqAvFEQBHHgBkOwIAdAyQgQgaiHARIifAaQAejCgekzg");
	this.shape_52.setTransform(34.4,88.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9B5729").s().p("AiNeaQAihWAGgxQAjkOg3lLQgIgwgUi2QgPiOgWhVQgThMAEhUQABgUgGhHQgIhSgKAIQgvAjgUgwQgQgnAHg0QAEghAZhBQAYhBAEgkQADhRAFgzQAKhkAcgIQADAQgLAnQgJAiAKATQANAYAQADQARAEAPgYQARgdgnhRQgthdAAgYQAAgrATgrQAagxANgfQAfhHgXhoIgSAIQgHAggRBlQgVBZgqATQg7AagOheQgMhGANhIQAQhWAYgYQATgSA1gSQAjgNATg0QAQgogBhFQgDhNAAgjQgrARgYBpQgOA9gGAUQgPAqgWATQALgJgGhHQgJh0AAgUQgBhIAUgeQg3gYgPi/QgHhTAFhLQAEhMANgWQALAJAcBLQAXA+AdgBQAcgCgMgzQgRhGACgIQAegWAZgcIAyg/QAUgYAVgJQAMgFAfgHQAXgHAVgEQANgGAQgfQAOgdAFhmIgFiPQgEh9AIgBQAwgJAFBhQADA1gHBYQAABvgCANIgMBFQgHAzgkCNQgkCKgHBAQgOBxAAAkQgDBNADCvQAGDvAiGbQAnHqAxFEQBIHgBkOwIAcAyQgrAAhQgHIiJgMQingMhUAiQAHgsAjhag");
	this.shape_53.setTransform(21.5,87.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#844419").s().p("AgtBoQALiEgDgtIgPhWQgLg8ATgTQA1g3AHBgQADAlgHBbQgMB6ABAfQADBvA1gQQgtAigMAtIAAABQgtgkAAh3g");
	this.shape_54.setTransform(16,-108.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9B5729").s().p("AiYEoQgHgFgDg3QAAg6gBgJQgQhYgFgxQgJhVAfgsQAWAFAKAWQAFAMAGAhQALA8AkACQAnhJgRhVQgPgvgFgZQgKgtARgbQAWgiA6ABQA+AAgDAwQgcGzAygrQAegbAfhzQAbhlABgyQACCBg9ClQglBkgjAUQgHAEgRACQgoADgkgNQgpgOAJgcQgLAdgRAaQgUAbgQAAQgGAAgGgDg");
	this.shape_55.setTransform(10.3,-103.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AA5/lQgeEXgvArQgyAsAcm1QAFhDiNAaQhHAOhHAbMAAABCJIKBAAIgcgyQhkuwhIngQgxlEgnnqQghmbgGjvQgEivADhNQACgkAMhxQAHhAAkiKQAkiNAHgzQAKg5ACgMQACgNAAhvQAAiygHgzg");
	this.shape_56.setTransform(22.2,81.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B16933").s().p("EgFAAhdMAAAhCJQBHgbBHgOQCNgagFBDQgcG1AygsQAvgrAekXIArAHQAHAzAACyQAABvgCANIgMBFQgHAzgkCNQgkCKgHBAQgMBxgCAkQgDBNAECvQAGDvAhGbQAnHqAxFEQBIHgBkOwIAcAyg");
	this.shape_57.setTransform(22.2,81.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#15A039").s().p("AqAEaQgvgcAAgqQAYAIA7AVQAzAJARgtQAfAfAbgpQAWgigBgmQAHAKAZARQAYgTAXgvIgBgBQABgFAAAFIAAABQAPAZAogDQAogDAKgeQARApAoABQApAAAPgnIAHANQArACAWgsQASgkgDgsQAaATAYgBQAdAAgBglQAHAPAYAQQAQgPAEgJQACAfAVAJQAUAGAXgPQAQgLAGgeQAHgoAEgJQAFAJAKAOQA3AOAlg5QADA8AkgLQAkgLADgzQAMAPAbAIQASglAFgVQBCAzAhAGQA0AJgGhWQATAJAmgEQAEgbgCgLQANADAggFQAIgtgUggQBRAfg1BBQgSAZgZANQgaAOgEgLQAEAMgBAXQgfADgRgJQgDBCg1gOQgvgMgbgtQAJAogQATQgRAVgggZQAKBEhEACQg+ACgngpQADAPgEAgQgYgMgIgIQADA2hGACQhAACgkgcQAIAggUAPQgWAPgbgXQAHBthSAUQhMAShPg7QgKAlgjADQgjACgMglQAHAggfAnQggAogjgRQA1AciJAzIgFAAQgqAAgngXg");
	this.shape_58.setTransform(99.7,-93.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#067F2B").s().p("AnAFBQgogUgKgnQgTANgSgLQgSgKgDgbQglAZg2AJQg6AJgpgQQihg8BFktQAFALAfBqQAjBVAehXQgEBzA+AZQAXAIAcgKQAPgHAhgQQgHAvAVAjQApAQApgYQArgZACgtQANApATAYQAvgBAmgzQAggtAHg0QAZAzAlg2QAjgwgDgpQA7AvAegFQAggFAcg+QgOAiAYAlQAZAjAggNQAqgQgEg5QgDgfgUg6QAcAQAXgFQAagHAAgiQAJAIAYALQAbgLAEgYQAEgYgTgXIBEBDQAxAmAUgwQACAbARAFQAQAGASgMQATgNAGgWQAJgYgMgYQBHAhAVAHQAxAQA2gDIAGgbQAEgQgDgNQBKBGAAhBQAcAQAUgHQASgGAHgUQAHgUgIgXQgJgZgWgPQB7AyAWAeQAgAsgZAqQgaAqg2gLQAFAMgBAXQggADgQgIQgEBCg0gOQgvgNgcgtQAKAogQAUQgSAVgfgZQAJBBhDACQg/ADgmgoQADAPgEAeQgZgMgIgGQAEA3hHACQg/ACglgeQAJAigWAPQgXAOgbgXQAHBthSAUQhJAThQg8QgJAmgjACQgkADgLglQAGAggeAmQghApgkgSQAPAhgYAWQgWAVgrADIgOAAQgjAAgdgOg");
	this.shape_59.setTransform(82.2,-96.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AnMD9QgUAMgRgKQgSgLgEgaQgkAZg3AIQg5AJgqgQQg0gTgUgoQgRgzgPgfQggg4gOgaQgYgpgGg3QgQiFARhCQCzgjEDgBQCUAAEoAHIHiAAQA5AACUAHQBfACA7gMQAPAGAKAHQAjAYACAtQACAqgZAWQgZAWgqgIQAEALgBAYQgfADgRgJQgDBCg1gOQgvgMgbgtQAJAogQATQgRAVgggZQAKBDhEABQg+ACgngnQADAPgEAeQgYgKgIgIQADA2hGACQhAACgkgeQAIAigWAPQgWAPgbgXQAHBthSAUQhMAShNg7QgKAlgjADQgjACgMglQAHAggfAnQghAogkgRQAQAggZAXQgWAVgqACQgrAEgkgSQgngTgKgnQgBAAAAgBQABgLAAALgANrk+QgRAHgXAFQgVgJgggK");
	this.shape_60.setTransform(78.4,-95.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#03601B").s().p("AmbEwQgngUgKgnIAAAAQAAgLgBALIABAAQgUANgRgLQgSgKgEgbQgkAZg3AJQg5AJgqgQQg0gUgUgnQgRgzgPggIguhRQgYgqgGg2QgQiFARhCQCzgkEDAAQCUgBEoAHIHiAAQA5AACUAIQBfACA7gNQAPAHAKAGQAjAYACAtQACArgZAWQgZAWgqgJQAEAMgBAXQgfADgRgIQgDBCg1gOQgvgNgbgtQAJAogQAUQgRAVgggZQAKBDhEACQg+ADgngqQADAPgEAeQgYgKgIgIQADA3hGACQhAACgkgeQAIAigWAPQgWAOgbgXQAHBthSAUQhMAThNg8QgKAmgjACQgjADgMglQAHAggfAmQghApgkgSQAQAhgZAWQgWAVgqADIgOAAQgjAAgegOgAnMD1IgBAAQABgLAAALIAAAAIAAAAg");
	this.shape_61.setTransform(78.4,-94.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#126D18").s().p("ABXGuQAQgCANgJQATgPgFgYQAUATAbgBQAfgBgFgiQAQAAAdgGQAIgTgCgPQARAEAHgOQAGgOgJgNQAlgNATgaQAWgfgXghQgdgGgMAMQAAANgKAJQACgOAIgIQgBgPgOgWQgZgEgdAIIg0AQQARgZAGgNQAKgYgPgPQgEAEgFAAQAOgjgYgPQgXgOgaAXQATgrADgfQAFg3gzAVQAggdgegYQgfgXgfAVQARgQAAgRQgBgRgOgMQgjgdgmAdQAEgfgQgeQgTghgfAGQgDgZgOgZQgngIgUASQAHgcgbgDQgWgCgaANQAIgHADgVQADgVgJgKQgNgPgTAHIgiATQAHgKgBgIIgEgWQgpgKgZAhQgNgighgCQgKAAgHADQgPAMgJAWQAGgbASgHQAUgSAggBQA5AaACgBQA1gaAZANQAtAjgiACQAzgBALADQAcAJgHAqQARggAjAMQAOAZgBAVQApgcANAcQAJAQAAAyQAQgRAEgKQAjgIAaAbQAbAdgZAeQAZgcAcAZQgBAHADATQA0gPAfAnQAfAngyAkQAfgMAIAYQAHAWgSAWQAkADgRAkQgMAZgZAYQANgGAkgVQAhgOAJAVQgHgQAhgLQAfgLANAHQAaAOgIATQgOAjAAAEQAIgZAdgBQAdgCADAdQgIAGgPARQATgMARAJQAOAIADASQACASgNAMQgQAOghgDQAFALAEAfQgSAKgHACQAPAegKAYQgNAagjgFQALA2hQgQQAYAFg4A3QgPAHgWgEQgWgFgLgLQgCAdghACIgsgDgAESEeQgEAAAEgBIABABIgBAAg");
	this.shape_62.setTransform(66.5,237.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0C5B14").s().p("AgKHAQgXgPgHABIAzgLIALgLQgDgSgZg5IA1AcQAkATAVgGQAagJgEgWQgDgLgJgGQAYAEAaABQA0ACASgPQAcgWgRgOQgSgOgdALQAYgKgDgZQgDgZgbALQAfgTgXgcQhJgKhhBVQAvguAWgbQApgwgHgpQgsgHgfAVQA3gsAAgiQABg3gtAfQAYgRgRgcQgHAFgWAHQANgggTgNQgRgMghAFQghADgeAPQgXAXgQAIQAHgQAggPIAAAAQAOgPAQgTQAtg4gBgWQgDgfgkgDQgHAAg0AGQAbgegCggQgCgjgxAVQAKgTgJgMQgIgKgUAEQgTAEglA/QATg4gigwQgjgzg0A0IgLgnQgeALgMAOQASgigXggQgYgEgiAYQgcAUgRAYQAWgmAMgRQAVgeAcgMQARgGAlANQAlANgHADQA1gZAZAMQAtAkgiACQAzgCALAEQAcAJgHApQARgfAjALQAOAagBAVQApgcANAbQAJARAAAxQAOgRAGgJQAjgJAaAcQAbAcgZAeQAZgbAcAZQgBAHADASQA0gPAfAnQAfAngyAlQAfgMAIAXQAHAWgSAXQAkADgRAjQgMAZgZAZQANgGAkgWQAhgNAJAVQgHgQAhgLQAfgJANAFQAaANgIAUQgOAjAAAEQAIgZAdgCQAdgCADAdQgIAGgPARQATgLARAJQAOAIADARQACATgNAMQgQAOghgDQAFALAEAfQgSAKgHACQAPAdgKAZQgNAagjgGQALA2hRgQQAHAuggAMQgbALgsgNIgEgGQADAHgKAJQgLAMgUAGQg0ARgTgnIgRApQgMAXgSAFIgHABQgNAAgRgMg");
	this.shape_63.setTransform(64.9,240.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("ADbGiQADAJgLALQgNANgXAIQg8AUgXguIAAAAQgEAIgIAZQgKAWgKAHQgKAGghABQgiACgCgLQAOBkjrgkQgcgEiVgdQhagSgSAHQABh6gQjxQgQjwAAh6QAAiJAHgoQAQhfBAg4QAdgaAkAAQAoAAAOAlQBAgeAcAPQAzApgmACQA7gBANAEQAgAKgIAxQAUglApANQARAegCAZQAwghAQAgQAJATAAA6QASgUAHgLQApgKAeAgQAgAigeAjQAdggAhAdQgCAIAEAVQAbgIAcAJQAaAIAPATQAlAvg6AqQAkgOAJAbQAJAagWAaQArAEgVArQgNAbgdAeQAPgIAqgYQAlgPALAWQgIgQAngNQAkgMAPAIQAeAPgJAVQgQAoABAFQAIgdAigCQAjgCADAiQgKAIgSATQAXgOATALQARAJADAVQAEAVgRAOQgSARgngEQAHAOAEAkQgUALgJACQASAjgNAcQgOAfgpgHQANA/hegSQAHA1glAPQgfAMg0gOIgFgJIgCgE");
	this.shape_64.setTransform(72.2,234.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#033D0A").s().p("AjwItQgcgEiVgdQhagSgSAHQABh6gQjxQgQjwAAh6QAAiJAHgoQAQhfBAg4QAdgaAkAAQAoAAAOAlQBAgeAcAPQAzApgmACQA7gBANAEQAgAKgIAxQAUglApANQARAegCAZQAwghAQAgQAJATAAA6QASgUAHgLQApgKAeAgQAgAigeAjQAdggAhAdQgCAIAEAVQAbgIAcAJQAaAIAPATQAlAvg6AqQAkgOAJAbQAJAagWAaQArAEgVArQgNAbgdAeIA5ggQAlgPALAWQgIgQAngNQAkgMAPAIQAeAPgJAVQgQAoABAFQAIgdAigCQAjgCADAiQgKAIgSATQAXgOATALQARAJADAVQAEAVgRAOQgSARgngEQAHAOAEAkQgUALgJACQASAjgNAcQgOAfgpgHQANA/hegSQAHA1glAPQgfAMg0gOIgFgJIgCgEIACAEQADAJgLALQgNANgXAIQg8AUgXguIAAAAIgMAhQgKAWgKAHQgKAGghABQgiACgCgLQAKBKh8AAQgtAAg+gKg");
	this.shape_65.setTransform(72.2,234.8);

	// flowers
	this.land_left_flowers = new lib.land_left_flowers();
	this.land_left_flowers.setTransform(132.5,68,1,1,0,0,0,77,67.3);

	// Layer 5
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#067F2B").s().p("AgjBHQgHhcgxhAQgPgTgSgPIgOgLIAUAIQAXAKAUARQBAA0AEBbIAGjXIAPDfQAAgJADgLQAGgWALgNQAignBHBAQglgEgmAQQhJAfgEBig");
	this.shape_66.setTransform(193.5,41.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#067F2B").s().p("AgvAlQAEgNgCgVQgEgnggglIAKADQALAFAKAKQAfAgAABDQAHgjAPgdQAhg+AuAYQgRgEgSAPQgkAegDBbg");
	this.shape_67.setTransform(198.1,73.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#15A039").s().p("Ag4AFQAIgagIgfQgRg/hSgKIAWgCQAZAAAWAJQBHAfAEB0IAdh5IAACCQAQgdAZgVQAzgtAuAfQghADgmAXQhKApgWBXg");
	this.shape_68.setTransform(82.1,17.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#15A039").s().p("AhNBaQAAiEhIgxQgWgQgbgEIgXgDIAXgFQAcgDAbAKQBTAhAbCYIAHiiIAjCCQAIgsAegtQA+haBxAAQgrASgyAsQhjBXgbCAg");
	this.shape_69.setTransform(98.6,3.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#15A039").s().p("AhQBSQAFg0gLg8QgUh+hKg4IAVAGQAaAMAXAZQBGBOAECtIAki7IAADDQAJgjAbghQA3g/BaAKQgJAAgOAEQgcAHgZATQhSA9gXCZg");
	this.shape_70.setTransform(73.9,103.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#03601B").s().p("AABRyQh9g7hshWQlZkUgXm6QgYm4AjonQAKitAPiiIANiAIR6AAIAKA2QAIBDgDA+QgLDIiBBOQgxAcg6AdQggAQgHAKQgFAJgIAnQgLA7gSBAQgYBSgRAeQgNAVgTAGQgZAJgMAMQgbAXggBBIgtBUQgGALAEAEQAZAZgKCZQgGBjAOAoQAFASAXAVQARAQAAAkQAAA0gcCBQgzDtAVEDQAKCCAUBSQgqgMg/geg");
	this.shape_71.setTransform(51.9,106);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#067F2B").s().p("AjnSFQiFglg2gHQg+gIhTAFQheAJgwADQgVi+gCj/QACkogBiWQAAkCg8mdQgqkkgHhEQgYjYAKiRIXbAAQA2AhA0BXQAzBWAbBnQAdBugLBaQgLBmg9A3QghAegyARQgYAIhDAOQh1AaguA5QgrA3gLBhQgJBSAQBZQiegBgcA2QgQAjAYBOQAcBagBAVQiBAKgYAJQhDAagfBnQgZBOAYArIAbAqQAUAdAMAeQArBsgoCaQgkCOhLBTQgrAwhOAAQgZAAgcgFg");
	this.shape_72.setTransform(80.2,104.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#15A039").s().p("ApMYKIn+gSMgBPgwBIePAAQD1gFBoCPQBXB4gUDKQgRCrhPCdQhLCWg+AHQg0AGggAeQgSARggA1QghA2ggAfQgxAyhPAiQhLAhgjgEIgkgQQgOgHghAXQgpAchqBiQhnBegPA5QgMApAmAoIAjAiQAVAUAKATQAeAygeBIQhGCsgHCSQgHCcA6EJQAxDiixC4QhYBdhgAvg");
	this.shape_73.setTransform(101.5,141.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#844419").s().p("An0GLQAChEAkhlQAph1BAhVQBNhlBcgeQEKhVGoj4IgDA3QgGBEgNA5QgmC7haAbQhbAagbAYQgqAzg+A7QhZBWg6AaQg0AXhJgHQhxgKjVDHQgLAKgIAAQgPAAACgug");
	this.shape_74.setTransform(162.7,95.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#844419").s().p("AixCfQjAhbCRhjQAtgfBKgdQAlgOAcgIIE2heIAQBSQAIBcglAuQgOAUgjA4QglA1gnAcQg2AmhIAAQhQAAhngxg");
	this.shape_75.setTransform(95.8,276.4);

	this.addChild(this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.land_left_flowers,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.2,-134.5,235.6,437.2);


(lib.frogeyesblinking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frogpupil("synched",0);
	this.instance.setTransform(16.5,14,0.765,0.765,0,0,0,4.3,4.8);

	this.instance_1 = new lib.frogpupil("synched",0);
	this.instance_1.setTransform(9.1,14.4,0.765,0.765,0,0,0,4.3,4.8);

	this.instance_2 = new lib.frogeyesopen("synched",0);
	this.instance_2.setTransform(7.6,12.4,0.609,0.609,0,8.1,-171.9,10.1,19.1);

	this.instance_3 = new lib.frogeyesopen("synched",0);
	this.instance_3.setTransform(18.1,12.8,0.609,0.609,0,6,-174,9.9,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},10).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0.6,22.1,24.2);


(lib.frog_air = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.frogeyesblinking();
	this.instance.setTransform(43.4,-45.2,1.136,1.136,37.6,0,0,12.6,12.6);

	this.instance_1 = new lib.frogbody();
	this.instance_1.setTransform(10.6,-8.2,0.77,0.77,0,40.6,-139.4,42.5,63.1);

	this.instance_2 = new lib.frogleg();
	this.instance_2.setTransform(40.8,5.2,0.587,0.807,-99.8);

	this.instance_3 = new lib.frogleg();
	this.instance_3.setTransform(40.5,-9.2,0.587,0.807,-106.3);

	this.instance_4 = new lib.frogleg();
	this.instance_4.setTransform(-46.5,-13.7,0.866,1.053,34.8);

	this.instance_5 = new lib.frogleg();
	this.instance_5.setTransform(-38.6,-23.2,0.865,1.028,53.6);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.8,-66.5,185.7,133);


(lib.frog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,jump:6,incorrect:33});
console.debug('instance frog');
	// timeline functions:
	this.frame_0 = function() {
            this.stop();
		/* stop();*/
	}
	this.frame_5 = function() {
            this.gotoAndStop(1);
		/* gotoAndStop(1);*/
	}
	this.frame_32 = function() {
            this.gotoAndStop(1);
		/* _parent.holder["lillypad_"+_parent.qNum].gotoAndPlay("hit pad");
		gotoAndStop(1);*/
	}
	this.frame_58 = function() {
            this.gotoAndStop(1);
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(27).call(this.frame_32).wait(26).call(this.frame_58).wait(1));

	// Tongue
	this.instance = new lib.frogtongue("synched",0);
	this.instance.setTransform(0.6,-12.4,0.321,0.321,0,0,0,3.1,-4.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,x:5.5,y:-7.3},7).to({scaleX:0.67,scaleY:0.67,x:3.9,y:-9.4},4).to({scaleX:0.9,scaleY:0.9,x:4.9,y:-8.4},4).to({scaleX:0.67,scaleY:0.67,x:4},4).to({regY:-4.6,scaleX:0.36,scaleY:0.36,x:2.9,y:-10.4},6).wait(1));

	// Head
	this.instance_1 = new lib.frogpupil("synched",0);
	this.instance_1.setTransform(5.1,-52.2,0.688,0.688,0,0,0,4.2,4.7);

	this.instance_2 = new lib.frogpupil("synched",0);
	this.instance_2.setTransform(0.7,-50,0.688,0.688,0,0,0,4.2,4.8);

	this.instance_3 = new lib.frogmouthopen("synched",0);
	this.instance_3.setTransform(10.1,-9.3,0.548,0.548,0,0,180,45.6,76.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{scaleX:0.548,scaleY:0.548,y:-9.3}},{t:this.instance_2,p:{scaleX:0.688,scaleY:0.688,x:0.7,y:-50}},{t:this.instance_1,p:{scaleX:0.688,scaleY:0.688,x:5.1,y:-52.2}}]},33).to({state:[{t:this.instance_3,p:{scaleX:0.576,scaleY:0.576,y:-9.2}},{t:this.instance_2,p:{scaleX:0.723,scaleY:0.723,x:0.2,y:-52}},{t:this.instance_1,p:{scaleX:0.723,scaleY:0.723,x:4.8,y:-54.2}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.548,scaleY:0.548,y:-9.3}},{t:this.instance_2,p:{scaleX:0.688,scaleY:0.688,x:0.7,y:-50}},{t:this.instance_1,p:{scaleX:0.688,scaleY:0.688,x:5.1,y:-52.2}}]},1).wait(24));

	// Body
	this.instance_4 = new lib.frogeyesblinking();
	this.instance_4.setTransform(6.7,-28.3,0.9,0.9,0,0,0,12.6,12.6);

	this.instance_5 = new lib.froghead2("synched",0);
	this.instance_5.setTransform(7.1,-7.3,0.9,0.9,0,8.6,-171.4,35.2,29.1);

	this.instance_6 = new lib.frogleg("synched",0);
	this.instance_6.setTransform(-2.8,14.9,0.548,0.423,0,17,-163,36.6,16.1);

	this.instance_7 = new lib.frogleg2("synched",0);
	this.instance_7.setTransform(-19.5,14.5,0.548,0.548,0,0,180,41,41.6);

	this.instance_8 = new lib.frogleg("synched",0);
	this.instance_8.setTransform(9.3,16.9,0.364,0.328,0,7,-173,37,11.5);

	this.instance_9 = new lib.frogleg2("synched",0);
	this.instance_9.setTransform(20.5,14.5,0.548,0.548,0,0,0,41,41.6);

	this.instance_10 = new lib.frog_air();
	this.instance_10.setTransform(2.9,1.5,0.9,0.9,-15);
	this.instance_10._off = true;

	this.instance_11 = new lib.frogeyesopen("synched",0);
	this.instance_11.setTransform(-1,-51.1,0.548,0.548,0,0,180,10.1,19.2);

	this.instance_12 = new lib.frogeyesopen("synched",0);
	this.instance_12.setTransform(5.4,-56.8,0.548,0.548,0,0,180,10,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8,p:{regX:37,scaleX:0.364,scaleY:0.328,skewX:7,skewY:-173,x:9.3,y:16.9}},{t:this.instance_7,p:{x:-19.5,y:14.5}},{t:this.instance_6,p:{regX:36.6,regY:16.1,scaleY:0.423,skewX:17,skewY:-163,x:-2.8,y:14.9}},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_10}]},6).to({state:[{t:this.instance_10}]},11).to({state:[{t:this.instance_10}]},15).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_8,p:{regX:36.9,scaleX:0.365,scaleY:0.365,skewX:-16.3,skewY:163.7,x:15,y:18.6}},{t:this.instance_7,p:{x:-17.1,y:15.9}},{t:this.instance_6,p:{regX:23.8,regY:32.8,scaleY:0.548,skewX:0,skewY:180,x:9.3,y:25.2}}]},1).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_8,p:{regX:36.9,scaleX:0.365,scaleY:0.365,skewX:-16.3,skewY:163.7,x:15,y:18.6}},{t:this.instance_7,p:{x:-17.1,y:15.9}},{t:this.instance_6,p:{regX:23.8,regY:32.8,scaleY:0.548,skewX:0,skewY:180,x:9.3,y:25.2}}]},1).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_8,p:{regX:36.9,scaleX:0.365,scaleY:0.365,skewX:-16.3,skewY:163.7,x:15,y:18.6}},{t:this.instance_7,p:{x:-17.1,y:15.9}},{t:this.instance_6,p:{regX:23.8,regY:32.8,scaleY:0.548,skewX:0,skewY:180,x:9.3,y:25.2}}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({rotation:7,y:-108.5},11,cjs.Ease.get(1)).to({rotation:30,y:1.6},15,cjs.Ease.get(-1)).to({_off:true},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-39.7,85,77);


(lib.fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AxAJWIAAyrMAiBAAAIAASrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:50,y:-50}).wait(15).to({graphics:null,x:0,y:0}).wait(365));

	// Fish
	this.instance = new lib.fish_still();
	this.instance.setTransform(-19.6,33.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:41.1,y:-42.7,mode:"synched",startPosition:0},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:73.4,x:134.9,y:12.3},9,cjs.Ease.get(-1)).to({_off:true},1).wait(365));

	// Splash
	this.instance_1 = new lib.water_splash("synched",0);
	this.instance_1.setTransform(110.3,8.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({startPosition:0},0).to({scaleX:2.47,scaleY:2.47,alpha:0},3).to({_off:true},1).wait(361));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.birds_flying = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bird();
	this.instance.setTransform(11.1,-16.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:-1254.5},250).wait(1));

	// Layer 1
	this.instance_1 = new lib.bird();
	this.instance_1.setTransform(-16.3,9.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-1281.8},250).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.audiospeaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,playing:6});

	// timeline functions:
	this.frame_44 = function() {
            this.gotoAndPlay("playing");
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
	this.shape.graphics.f().s("#666666").ss(4.3,1,1).p("AAkBNIAAiZIgwAbIgXANAAcBNIgeggIgcgc");
	this.shape.setTransform(15.9,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAxAvIgbgbIAbAbIhmAAQgVAAAAgUIAAg1QAAgUAVAAIBdAAIgXANIAXgNIAPAAQATAAABAUIAAA1QgBAUgTAAg");
	this.shape_1.setTransform(10.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(45));

	// Text
	this.text = new cjs.Text("Click\nto play", "10px 'Arial'", "#666666");
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


// stage content:



(lib.leapFrogCJS = function(mode,startPosition,loop, labels) {
     
    var thisObj;
    
    thisObj = this;
    
	this.initialize(mode,startPosition,loop,{intro:2,game:17,win:25,lose:62});
 
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
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "TranslationGame"); // For deployment
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/leapFrog.xml", "TranslationGame"); // For testing
		}*/
	}
	this.frame_16 = function() {
            this.stop();
		/* stop();
		dispatchEvent ({type:"ready", bubbles:true});
		
		playGame.onRelease = function() {
			gotoAndPlay("game");
		}*/
		/* stop();*/
	}
	this.frame_17 = function() {
            /*ivanixcu: added manually. moved to playset.js
            this.land_left = new lib.land_left();
            this.land_left.setTransform(0,120);
            this.addChild(this.land_left);
            
            this.frog = new lib.frog();
            this.frog.setTransform(130,170);
            this.addChild(this.frog);
            */
            
            this.stop();
		/* var gameid:Number;
		if (game != undefined) {
			game.destroy();
			delete game;
		}
		var game:RunGame = new RunGame(this);
		dispatchEvent ({type:"play", bubbles:true, game:game});
		stop();*/
	}
	this.frame_56 = function() {
            this.stop();
		/* stop();
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			game.destroy();
			delete game;
			gotoAndPlay(2);
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(1).call(this.frame_17).wait(39).call(this.frame_56).wait(13));

	// Actions
	this.text = new cjs.Text("", "16px 'ArialMT'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 91;
	this.text.setTransform(683.5,344.8);

	this.text_1 = new cjs.Text("v2.9", "8px 'Arial'", "#134560");
	this.text_1.lineHeight = 10;
	this.text_1.setTransform(577,385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},16).to({state:[]},1).wait(52));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EAuygfNMAAAA+bMhdjAAAMAAAg+bg");
	this.shape.setTransform(299.4,199.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(67));

	// Frog
	this.instance = new lib.frogeyesblinking();
	this.instance.setTransform(113.7,181.6,0.9,0.9,0,0,0,12.6,12.6);

	this.instance_1 = new lib.froghead2("synched",0);
	this.instance_1.setTransform(114.1,202.7,0.9,0.9,0,8.6,-171.4,35.2,29.1);

	this.instance_2 = new lib.frogleg("synched",0);
	this.instance_2.setTransform(104.2,224.8,0.548,0.423,0,17,-163,36.6,16.1);

	this.instance_3 = new lib.frogleg2("synched",0);
	this.instance_3.setTransform(87.5,224.4,0.548,0.548,0,0,180,41,41.6);

	this.instance_4 = new lib.frogleg("synched",0);
	this.instance_4.setTransform(116.3,226.9,0.364,0.328,0,7,-173,37,11.5);

	this.instance_5 = new lib.frogleg2("synched",0);
	this.instance_5.setTransform(127.5,224.4,0.548,0.548,0,0,0,41,41.6);

	this.instance_6 = new lib.frog_air();
	this.instance_6.setTransform(194.1,160.7,0.9,0.9,-15);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[]},15).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_6}]},8).to({state:[]},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},0).to({scaleX:0.78,scaleY:0.79,rotation:367,x:252.9,y:97.5},13,cjs.Ease.get(1)).to({scaleX:0.7,scaleY:0.7,rotation:390,x:276.5,y:116.8},8,cjs.Ease.get(-1)).to({_off:true},4).wait(13));

	// Birds
	this.fish = new lib.fish();
	this.fish.setTransform(240,119.6);

	this.birds = new lib.birds_flying();
	this.birds.setTransform(622.6,22.6,0.509,0.509);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.birds},{t:this.fish}]},17).to({state:[]},8).wait(44));

	// Play again
	this.playAgain = new lib.playAgain();
    this.playAgainBtn = new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false);
	this.playAgain.setTransform(255.1,332.6);
	this.playAgain._off = true;

	this.timeline.addTween(cjs.Tween.get(this.playAgain).wait(56).to({_off:false},0).to({_off:true},6).wait(7));

	// Text
	this.playGame = new lib.playgame();
	this.playGame.setTransform(324,339.2);
        //this.playGameBtn = new cjs.ButtonHelper(this.playGame, 0, 1, 2, false, new lib.playgame(), 0);


	this.text_2 = new cjs.Text("IDS_INTRO", "24px 'Arial'");
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 368;
	this.text_2.setTransform(160,172);

	this.instance_7 = new lib.Symbol51("synched",0);
	this.instance_7.setTransform(119,200.9,4.148,4.148,-76.7);
	this.instance_7.alpha = 0.211;

	this.instance_8 = new lib.Symbol52("synched",0);
	this.instance_8.setTransform(197.6,218.5,4.24,4.24,-68.4);
	this.instance_8.alpha = 0.191;

	this.instance_9 = new lib.Symbol53("synched",0);
	this.instance_9.setTransform(227.8,212.2,4.154,4.154,-76.2);
	this.instance_9.alpha = 0.211;

	this.instance_10 = new lib.Symbol55("synched",0);
	this.instance_10.setTransform(253.2,252.1,4.788,4.788,-19.1);
	this.instance_10.alpha = 0.051;

	this.instance_11 = new lib.Symbol54("synched",0);
	this.instance_11.setTransform(288.3,219,4.151,4.151,-76.5);
	this.instance_11.alpha = 0.211;

	this.instance_12 = new lib.Symbol56("synched",0);
	this.instance_12.setTransform(286.3,237.3,4.609,4.609,-35.2);
	this.instance_12.alpha = 0.102;

	this.instance_13 = new lib.Symbol57("synched",0);
	this.instance_13.setTransform(300.9,213.5,4.488,4.488,-46.1);
	this.instance_13.alpha = 0.129;

	this.instance_14 = new lib.Symbol58("synched",0);
	this.instance_14.setTransform(357.5,231.4,4.405,4.405,-53.6);
	this.instance_14.alpha = 0.148;

	this.instance_15 = new lib.Symbol59("synched",0);
	this.instance_15.setTransform(369.4,215,4.337,4.337,-59.7);
	this.instance_15.alpha = 0.16;

	this.instance_16 = new lib.Symbol56("synched",0);
	this.instance_16.setTransform(242.9,183.4,2.494,2.494,134.5);
	this.instance_16.alpha = 0.629;

	this.instance_17 = new lib.Symbol57("synched",0);
	this.instance_17.setTransform(279.2,194.3,2.416,2.416,127.5);
	this.instance_17.alpha = 0.641;

	this.instance_18 = new lib.Symbol60("synched",0);
	this.instance_18.setTransform(432.5,220.5,4.554,4.554,-40.2);
	this.instance_18.alpha = 0.109;

	this.instance_19 = new lib.Symbol52("synched",0);
	this.instance_19.setTransform(152.1,212);

	this.instance_20 = new lib.Symbol53("synched",0);
	this.instance_20.setTransform(180.2,212.3);

	this.instance_21 = new lib.Symbol71("synched",0);
	this.instance_21.setTransform(449.5,214.8,1.463,1.463,51.6);
	this.instance_21.alpha = 0.672;

	//this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2,p:{x:160,y:172,text:lgzStr.IDS_INTRO,font:"24px 'Arial'",color:"#000000",textAlign:"",lineHeight:26,lineWidth:368}},{t:this.playGame}]},16).to({state:[]},1).to({state:[{t:this.instance_7,p:{scaleX:4.148,scaleY:4.148,rotation:-76.7,x:119,y:200.9,alpha:0.211}}]},20).to({state:[{t:this.instance_7,p:{scaleX:3.397,scaleY:3.397,rotation:-144.2,x:118,y:199.1,alpha:0.398}},{t:this.instance_8,p:{scaleX:4.24,scaleY:4.24,rotation:-68.4,x:197.6,y:218.5,alpha:0.191}}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.749,scaleY:2.749,rotation:157.4,x:116.6,y:199.3,alpha:0.559}},{t:this.instance_8,p:{scaleX:3.478,scaleY:3.478,rotation:-137,x:179.5,y:171.1,alpha:0.379}},{t:this.instance_9,p:{scaleX:4.154,scaleY:4.154,rotation:-76.2,x:227.8,y:212.2,alpha:0.211}}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.203,scaleY:2.203,rotation:108.3,x:116.1,y:200.1,alpha:0.699}},{t:this.instance_8,p:{scaleX:2.818,scaleY:2.818,rotation:163.6,x:142.9,y:169.2,alpha:0.551}},{t:this.instance_9,p:{scaleX:3.403,scaleY:3.403,rotation:-143.8,x:203.9,y:168.1,alpha:0.398}},{t:this.instance_11,p:{scaleX:4.151,scaleY:4.151,rotation:-76.5,x:288.3,y:219,alpha:0.211}},{t:this.instance_10,p:{scaleX:4.788,scaleY:4.788,rotation:-19.1,x:253.2,y:252.1,alpha:0.051}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.759,scaleY:1.759,rotation:68.3,x:116.3,y:200.8,alpha:0.809}},{t:this.instance_8,p:{scaleX:2.26,scaleY:2.26,rotation:113.4,x:128.2,y:190.1,alpha:0.68}},{t:this.instance_9,p:{scaleX:2.754,scaleY:2.754,rotation:157.8,x:167.9,y:170.4,alpha:0.559}},{t:this.instance_11,p:{scaleX:3.4,scaleY:3.4,rotation:-144,x:249.5,y:148.1,alpha:0.398}},{t:this.instance_10,p:{scaleX:3.96,scaleY:3.96,rotation:-93.6,x:280.5,y:197.6,alpha:0.262}},{t:this.instance_12,p:{scaleX:4.609,scaleY:4.609,rotation:-35.2,x:286.3,y:237.3,alpha:0.102}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.416,scaleY:1.416,rotation:37.5,x:116.6,y:201,alpha:0.891}},{t:this.instance_8,p:{scaleX:1.804,scaleY:1.804,rotation:72.4,x:132.2,y:206.8,alpha:0.801}},{t:this.instance_9,p:{scaleX:2.207,scaleY:2.207,rotation:108.6,x:155.5,y:192.2,alpha:0.699}},{t:this.instance_11,p:{scaleX:2.751,scaleY:2.751,rotation:157.6,x:191.6,y:152,alpha:0.559}},{t:this.instance_10,p:{scaleX:3.234,scaleY:3.234,rotation:-158.9,x:248.6,y:166,alpha:0.441}},{t:this.instance_12,p:{scaleX:3.802,scaleY:3.802,rotation:-107.8,x:295.7,y:189.1,alpha:0.301}},{t:this.instance_13,p:{scaleX:4.488,scaleY:4.488,rotation:-46.1,x:300.9,y:213.5,alpha:0.129}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.176,scaleY:1.176,rotation:15.8,x:116.9,y:201,alpha:0.961}},{t:this.instance_8,p:{scaleX:1.45,scaleY:1.45,rotation:40.5,x:141.2,y:213.2,alpha:0.891}},{t:this.instance_9,p:{scaleX:1.761,scaleY:1.761,rotation:68.5,x:160.8,y:208.1,alpha:0.809}},{t:this.instance_11,p:{scaleX:2.205,scaleY:2.205,rotation:108.4,x:171.7,y:187.2,alpha:0.699}},{t:this.instance_10,p:{scaleX:2.61,scaleY:2.61,rotation:144.9,x:218.3,y:176.1,alpha:0.602}},{t:this.instance_12,p:{scaleX:3.097,scaleY:3.097,rotation:-171.3,x:264.9,y:170.5,alpha:0.48}},{t:this.instance_13,p:{scaleX:3.695,scaleY:3.695,rotation:-117.4,x:301.1,y:193.3,alpha:0.328}},{t:this.instance_14,p:{scaleX:4.405,scaleY:4.405,rotation:-53.6,x:357.5,y:231.4,alpha:0.148}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.037,scaleY:1.037,rotation:3.4,x:117,y:200.9,alpha:0.988}},{t:this.instance_8,p:{scaleX:1.198,scaleY:1.198,rotation:17.8,x:147.9,y:213.6,alpha:0.949}},{t:this.instance_9,p:{scaleX:1.418,scaleY:1.418,rotation:37.7,x:170,y:213.7,alpha:0.891}},{t:this.instance_11,p:{scaleX:1.76,scaleY:1.76,rotation:68.4,x:180.4,y:212.8,alpha:0.809}},{t:this.instance_10,p:{scaleX:2.088,scaleY:2.088,rotation:97.9,x:211.8,y:197.2,alpha:0.73}},{t:this.instance_16,p:{scaleX:2.494,scaleY:2.494,rotation:134.5,x:242.9,y:183.4,alpha:0.629}},{t:this.instance_13,p:{scaleX:3.005,scaleY:3.005,rotation:-179.6,x:287.4,y:187.8,alpha:0.5}},{t:this.instance_14,p:{scaleX:3.622,scaleY:3.622,rotation:-124,x:351.1,y:176.5,alpha:0.34}},{t:this.instance_15,p:{scaleX:4.337,scaleY:4.337,rotation:-59.7,x:369.4,y:215,alpha:0.16}},{t:this.instance_12,p:{scaleX:4.924,scaleY:4.924,rotation:-6.9,x:371.7,y:248.2,alpha:0.02}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_8,p:{scaleX:1.048,scaleY:1.048,rotation:4.3,x:151.2,y:212.5,alpha:0.988}},{t:this.instance_9,p:{scaleX:1.177,scaleY:1.177,rotation:16,x:176.4,y:213.8,alpha:0.961}},{t:this.instance_11,p:{scaleX:1.417,scaleY:1.417,rotation:37.5,x:195.1,y:221.8,alpha:0.891}},{t:this.instance_10,p:{scaleX:1.668,scaleY:1.668,rotation:60.1,x:218.9,y:209.9,alpha:0.828}},{t:this.instance_16,p:{scaleX:1.993,scaleY:1.993,rotation:89.4,x:240.8,y:200.7,alpha:0.75}},{t:this.instance_17,p:{scaleX:2.416,scaleY:2.416,rotation:127.5,y:194.3,alpha:0.641,x:279.2}},{t:this.instance_14,p:{scaleX:2.942,scaleY:2.942,rotation:174.8,x:312.5,y:165.8,alpha:0.52}},{t:this.instance_15,p:{scaleX:3.563,scaleY:3.563,rotation:-129.3,x:362.8,y:185.5,alpha:0.359}},{t:this.instance_12,p:{scaleX:4.08,scaleY:4.08,rotation:-82.8,x:405.5,y:205.5,alpha:0.23}},{t:this.instance_13,p:{scaleX:4.796,scaleY:4.796,rotation:-18.4,x:399.2,y:219.6,alpha:0.051}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:152.1,y:212,alpha:1}},{t:this.instance_9,p:{scaleX:1.038,scaleY:1.038,rotation:3.4,x:179.4,y:212.7,alpha:0.988}},{t:this.instance_11,p:{scaleX:1.177,scaleY:1.177,rotation:15.9,x:205.4,y:222,alpha:0.961}},{t:this.instance_10,p:{scaleX:1.35,scaleY:1.35,rotation:31.5,x:227.3,y:213.6,alpha:0.91}},{t:this.instance_16,p:{scaleX:1.594,scaleY:1.594,rotation:53.5,x:247.8,y:209.7,alpha:0.852}},{t:this.instance_17,p:{scaleX:1.93,scaleY:1.93,rotation:83.7,y:201.3,alpha:0.77,x:279.2}},{t:this.instance_14,p:{scaleX:2.364,scaleY:2.364,rotation:122.7,x:292.1,y:185.4,alpha:0.66}},{t:this.instance_15,p:{scaleX:2.891,scaleY:2.891,rotation:170.2,x:341.3,y:181.5,alpha:0.531}},{t:this.instance_12,p:{scaleX:3.339,scaleY:3.339,rotation:-149.5,x:382.5,y:172.3,alpha:0.41}},{t:this.instance_13,p:{scaleX:3.967,scaleY:3.967,rotation:-93,x:409.5,y:199.6,alpha:0.262}},{t:this.instance_18,p:{scaleX:4.554,scaleY:4.554,rotation:-40.2,x:432.5,y:220.5,alpha:0.109}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:180.2,y:212.3,alpha:1}},{t:this.instance_11,p:{scaleX:1.038,scaleY:1.038,rotation:3.4,x:210.3,y:220.2,alpha:0.988}},{t:this.instance_10,p:{scaleX:1.134,scaleY:1.134,rotation:12,x:232.7,y:213.1,alpha:0.961}},{t:this.instance_16,p:{scaleX:1.297,scaleY:1.297,rotation:26.7,x:254.6,y:211.8,alpha:0.93}},{t:this.instance_17,p:{scaleX:1.545,scaleY:1.545,rotation:49.1,y:204.7,alpha:0.859,x:282.4}},{t:this.instance_14,p:{scaleX:1.887,scaleY:1.887,rotation:79.9,x:293.7,y:204.4,alpha:0.781}},{t:this.instance_15,p:{scaleX:2.321,scaleY:2.321,rotation:118.9,x:331,y:193,alpha:0.672}},{t:this.instance_12,p:{scaleX:2.699,scaleY:2.699,rotation:152.9,x:354,y:177,alpha:0.57}},{t:this.instance_13,p:{scaleX:3.24,scaleY:3.24,rotation:-158.4,x:397.9,y:187.8,alpha:0.441}},{t:this.instance_18,p:{scaleX:3.753,scaleY:3.753,rotation:-112.2,x:435.6,y:192.3,alpha:0.309}},{t:this.instance_8,p:{scaleX:4.35,scaleY:4.35,rotation:-58.5,x:482.2,y:226.7,alpha:0.16}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1.02,scaleY:1.02,rotation:1.8,x:235,y:212.1,alpha:1}},{t:this.instance_16,p:{scaleX:1.102,scaleY:1.102,rotation:9.2,x:258.6,y:211.1,alpha:0.969}},{t:this.instance_17,p:{scaleX:1.263,scaleY:1.263,rotation:23.7,y:205.3,alpha:0.93,x:285.2}},{t:this.instance_14,p:{scaleX:1.513,scaleY:1.513,rotation:46.2,x:302.7,y:212.8,alpha:0.871}},{t:this.instance_15,p:{scaleX:1.853,scaleY:1.853,rotation:76.8,x:332.5,y:203.3,alpha:0.789}},{t:this.instance_12,p:{scaleX:2.161,scaleY:2.161,rotation:104.5,x:345.5,y:195.2,alpha:0.711}},{t:this.instance_13,p:{scaleX:2.615,scaleY:2.615,rotation:145.4,x:386.7,y:191.4,alpha:0.602}},{t:this.instance_18,p:{scaleX:3.055,scaleY:3.055,rotation:-175.1,x:417.1,y:182.9,alpha:0.48}},{t:this.instance_8,p:{scaleX:3.574,scaleY:3.574,rotation:-128.3,x:471.8,y:174.9,alpha:0.359}},{t:this.instance_9,p:{scaleX:4.263,scaleY:4.263,rotation:-66.3,x:513.5,y:220.7,alpha:0.18}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1.009,scaleY:1.009,rotation:0.8,x:260.2,y:210.3,alpha:1}},{t:this.instance_17,p:{scaleX:1.082,scaleY:1.082,rotation:7.4,y:205,alpha:0.98,x:286.7}},{t:this.instance_14,p:{scaleX:1.24,scaleY:1.24,rotation:21.6,x:310.2,y:214.1,alpha:0.941}},{t:this.instance_15,p:{scaleX:1.487,scaleY:1.487,rotation:43.8,x:337.7,y:207.6,alpha:0.879}},{t:this.instance_12,p:{scaleX:1.726,scaleY:1.726,rotation:65.3,x:350.7,y:207.5,alpha:0.82}},{t:this.instance_13,p:{scaleX:2.092,scaleY:2.092,rotation:98.3,x:384.2,y:199.2,alpha:0.73}},{t:this.instance_18,p:{scaleX:2.459,scaleY:2.459,rotation:131.3,x:404.9,y:191.1,alpha:0.641}},{t:this.instance_8,p:{scaleX:2.901,scaleY:2.901,rotation:171.1,x:434.2,y:167.4,alpha:0.52}},{t:this.instance_9,p:{scaleX:3.498,scaleY:3.498,rotation:-135.1,x:496.6,y:171.2,alpha:0.379}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1.004,scaleY:1.004,rotation:0.3,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1.07,scaleY:1.07,rotation:6.3,x:314.2,y:213,alpha:0.98}},{t:this.instance_15,p:{scaleX:1.223,scaleY:1.223,rotation:20,x:341.7,y:208.1,alpha:0.949}},{t:this.instance_12,p:{scaleX:1.392,scaleY:1.392,rotation:35.3,x:358.1,y:211.6,alpha:0.898}},{t:this.instance_13,p:{scaleX:1.671,scaleY:1.671,rotation:60.4,x:386.8,y:203.9,alpha:0.828}},{t:this.instance_18,p:{scaleX:1.964,scaleY:1.964,rotation:86.8,x:404.2,y:201.1,alpha:0.762}},{t:this.instance_8,p:{scaleX:2.329,scaleY:2.329,rotation:119.6,x:416,y:187.2,alpha:0.672}},{t:this.instance_9,p:{scaleX:2.836,scaleY:2.836,rotation:165.2,x:458.9,y:168.1,alpha:0.539}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1.002,scaleY:1.002,rotation:0.1,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1.061,scaleY:1.061,rotation:5.5,x:343.9,y:207.5,alpha:0.98}},{t:this.instance_12,p:{scaleX:1.16,scaleY:1.16,rotation:14.4,x:363.2,y:211.4,alpha:0.961}},{t:this.instance_13,p:{scaleX:1.352,scaleY:1.352,rotation:31.7,x:389.9,y:205.3,alpha:0.91}},{t:this.instance_18,p:{scaleX:1.572,scaleY:1.572,rotation:51.5,x:408.5,y:206.1,alpha:0.859}},{t:this.instance_8,p:{scaleX:1.86,scaleY:1.86,rotation:77.4,x:418.4,y:205.2,alpha:0.789}},{t:this.instance_9,p:{scaleX:2.275,scaleY:2.275,rotation:114.7,x:443.1,y:189.2,alpha:0.68}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1.03,scaleY:1.03,rotation:2.7,x:365.5,y:210.5,alpha:0.988}},{t:this.instance_13,p:{scaleX:1.135,scaleY:1.135,rotation:12.2,x:391.9,y:205.1,alpha:0.961}},{t:this.instance_18,p:{scaleX:1.281,scaleY:1.281,rotation:25.3,x:412.4,y:207.1,alpha:0.93}},{t:this.instance_8,p:{scaleX:1.492,scaleY:1.492,rotation:44.3,x:427.3,y:212.8,alpha:0.879}},{t:this.instance_9,p:{scaleX:1.816,scaleY:1.816,rotation:73.4,x:447,y:206.6,alpha:0.801}},{t:this.instance_21,p:{scaleX:1.463,scaleY:1.463,rotation:51.6,x:449.5,y:214.8,alpha:0.672}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,rotation:0,x:366,y:210.2,alpha:1}},{t:this.instance_13,p:{scaleX:1.02,scaleY:1.02,rotation:1.8,x:392.8,y:204.7,alpha:1}},{t:this.instance_18,p:{scaleX:1.093,scaleY:1.093,rotation:8.3,x:414.6,y:206.7,alpha:0.98}},{t:this.instance_8,p:{scaleX:1.226,scaleY:1.226,rotation:20.3,x:434.4,y:213.7,alpha:0.949}},{t:this.instance_9,p:{scaleX:1.459,scaleY:1.459,rotation:41.3,x:456.1,y:213.4,alpha:0.891}},{t:this.instance_21,p:{scaleX:1.462,scaleY:1.462,rotation:38.9,x:486.4,y:219.4,alpha:0.852}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,rotation:0,x:366,y:210.2,alpha:1}},{t:this.instance_13,p:{scaleX:1,scaleY:1,rotation:0,x:392.9,y:204.7,alpha:1}},{t:this.instance_18,p:{scaleX:1.006,scaleY:1.006,rotation:0.6,x:415.5,y:206.3,alpha:1}},{t:this.instance_8,p:{scaleX:1.062,scaleY:1.062,rotation:5.6,x:438.2,y:212.7,alpha:0.98}},{t:this.instance_9,p:{scaleX:1.204,scaleY:1.204,rotation:18.4,x:463,y:213.9,alpha:0.949}},{t:this.instance_21,p:{scaleX:1.461,scaleY:1.461,rotation:65,x:492.4,y:225.4,alpha:0.898}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,rotation:0,x:366,y:210.2,alpha:1}},{t:this.instance_13,p:{scaleX:1,scaleY:1,rotation:0,x:392.9,y:204.7,alpha:1}},{t:this.instance_18,p:{scaleX:1,scaleY:1,rotation:0,x:415.5,y:206.2,alpha:1}},{t:this.instance_8,p:{scaleX:1.001,scaleY:1.001,rotation:0.1,x:439.3,y:212,alpha:1}},{t:this.instance_9,p:{scaleX:1.051,scaleY:1.051,rotation:4.6,x:466.5,y:212.8,alpha:0.988}},{t:this.instance_21,p:{scaleX:1.46,scaleY:1.46,rotation:23.3,x:503,y:217,alpha:1}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,rotation:0,x:366,y:210.2,alpha:1}},{t:this.instance_13,p:{scaleX:1,scaleY:1,rotation:0,x:392.9,y:204.7,alpha:1}},{t:this.instance_18,p:{scaleX:1,scaleY:1,rotation:0,x:415.5,y:206.2,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:439.4,y:212,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:467.5,y:212.3,alpha:1}},{t:this.instance_21,p:{scaleX:1.46,scaleY:1.46,rotation:1.5,x:503,y:213.5,alpha:1}},{t:this.text_2,p:{x:304.7,y:240.2,text:lgzStr.IDS_CONGRATS,font:"22px 'Arial'",color:"#FFFFFF",textAlign:"center",lineHeight:24,lineWidth:356}}]},1).wait(13));
	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2,p:{x:160,y:172,font:"24px 'Arial'",color:"#000000",textAlign:"",lineHeight:26,lineWidth:368}},{t:this.playGame}]},16).to({state:[]},1).to({state:[{t:this.instance_7,p:{scaleX:4.148,scaleY:4.148,rotation:-76.7,x:119,y:200.9,alpha:0.211}}]},20).to({state:[{t:this.instance_7,p:{scaleX:3.397,scaleY:3.397,rotation:-144.2,x:118,y:199.1,alpha:0.398}},{t:this.instance_8,p:{scaleX:4.24,scaleY:4.24,rotation:-68.4,x:197.6,y:218.5,alpha:0.191}}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.749,scaleY:2.749,rotation:157.4,x:116.6,y:199.3,alpha:0.559}},{t:this.instance_8,p:{scaleX:3.478,scaleY:3.478,rotation:-137,x:179.5,y:171.1,alpha:0.379}},{t:this.instance_9,p:{scaleX:4.154,scaleY:4.154,rotation:-76.2,x:227.8,y:212.2,alpha:0.211}}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.203,scaleY:2.203,rotation:108.3,x:116.1,y:200.1,alpha:0.699}},{t:this.instance_8,p:{scaleX:2.818,scaleY:2.818,rotation:163.6,x:142.9,y:169.2,alpha:0.551}},{t:this.instance_9,p:{scaleX:3.403,scaleY:3.403,rotation:-143.8,x:203.9,y:168.1,alpha:0.398}},{t:this.instance_11,p:{scaleX:4.151,scaleY:4.151,rotation:-76.5,x:288.3,y:219,alpha:0.211}},{t:this.instance_10,p:{scaleX:4.788,scaleY:4.788,rotation:-19.1,x:253.2,y:252.1,alpha:0.051}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.759,scaleY:1.759,rotation:68.3,x:116.3,y:200.8,alpha:0.809}},{t:this.instance_8,p:{scaleX:2.26,scaleY:2.26,rotation:113.4,x:128.2,y:190.1,alpha:0.68}},{t:this.instance_9,p:{scaleX:2.754,scaleY:2.754,rotation:157.8,x:167.9,y:170.4,alpha:0.559}},{t:this.instance_11,p:{scaleX:3.4,scaleY:3.4,rotation:-144,x:249.5,y:148.1,alpha:0.398}},{t:this.instance_10,p:{scaleX:3.96,scaleY:3.96,rotation:-93.6,x:280.5,y:197.6,alpha:0.262}},{t:this.instance_12,p:{scaleX:4.609,scaleY:4.609,rotation:-35.2,x:286.3,y:237.3,alpha:0.102}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.416,scaleY:1.416,rotation:37.5,x:116.6,y:201,alpha:0.891}},{t:this.instance_8,p:{scaleX:1.804,scaleY:1.804,rotation:72.4,x:132.2,y:206.8,alpha:0.801}},{t:this.instance_9,p:{scaleX:2.207,scaleY:2.207,rotation:108.6,x:155.5,y:192.2,alpha:0.699}},{t:this.instance_11,p:{scaleX:2.751,scaleY:2.751,rotation:157.6,x:191.6,y:152,alpha:0.559}},{t:this.instance_10,p:{scaleX:3.234,scaleY:3.234,rotation:-158.9,x:248.6,y:166,alpha:0.441}},{t:this.instance_12,p:{scaleX:3.802,scaleY:3.802,rotation:-107.8,x:295.7,y:189.1,alpha:0.301}},{t:this.instance_13,p:{scaleX:4.488,scaleY:4.488,rotation:-46.1,x:300.9,y:213.5,alpha:0.129}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.176,scaleY:1.176,rotation:15.8,x:116.9,y:201,alpha:0.961}},{t:this.instance_8,p:{scaleX:1.45,scaleY:1.45,rotation:40.5,x:141.2,y:213.2,alpha:0.891}},{t:this.instance_9,p:{scaleX:1.761,scaleY:1.761,rotation:68.5,x:160.8,y:208.1,alpha:0.809}},{t:this.instance_11,p:{scaleX:2.205,scaleY:2.205,rotation:108.4,x:171.7,y:187.2,alpha:0.699}},{t:this.instance_10,p:{scaleX:2.61,scaleY:2.61,rotation:144.9,x:218.3,y:176.1,alpha:0.602}},{t:this.instance_12,p:{scaleX:3.097,scaleY:3.097,rotation:-171.3,x:264.9,y:170.5,alpha:0.48}},{t:this.instance_13,p:{scaleX:3.695,scaleY:3.695,rotation:-117.4,x:301.1,y:193.3,alpha:0.328}},{t:this.instance_14,p:{scaleX:4.405,scaleY:4.405,rotation:-53.6,x:357.5,y:231.4,alpha:0.148}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1.037,scaleY:1.037,rotation:3.4,x:117,y:200.9,alpha:0.988}},{t:this.instance_8,p:{scaleX:1.198,scaleY:1.198,rotation:17.8,x:147.9,y:213.6,alpha:0.949}},{t:this.instance_9,p:{scaleX:1.418,scaleY:1.418,rotation:37.7,x:170,y:213.7,alpha:0.891}},{t:this.instance_11,p:{scaleX:1.76,scaleY:1.76,rotation:68.4,x:180.4,y:212.8,alpha:0.809}},{t:this.instance_10,p:{scaleX:2.088,scaleY:2.088,rotation:97.9,x:211.8,y:197.2,alpha:0.73}},{t:this.instance_16,p:{scaleX:2.494,scaleY:2.494,rotation:134.5,x:242.9,y:183.4,alpha:0.629}},{t:this.instance_13,p:{scaleX:3.005,scaleY:3.005,rotation:-179.6,x:287.4,y:187.8,alpha:0.5}},{t:this.instance_14,p:{scaleX:3.622,scaleY:3.622,rotation:-124,x:351.1,y:176.5,alpha:0.34}},{t:this.instance_15,p:{scaleX:4.337,scaleY:4.337,rotation:-59.7,x:369.4,y:215,alpha:0.16}},{t:this.instance_12,p:{scaleX:4.924,scaleY:4.924,rotation:-6.9,x:371.7,y:248.2,alpha:0.02}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_8,p:{scaleX:1.048,scaleY:1.048,rotation:4.3,x:151.2,y:212.5,alpha:0.988}},{t:this.instance_9,p:{scaleX:1.177,scaleY:1.177,rotation:16,x:176.4,y:213.8,alpha:0.961}},{t:this.instance_11,p:{scaleX:1.417,scaleY:1.417,rotation:37.5,x:195.1,y:221.8,alpha:0.891}},{t:this.instance_10,p:{scaleX:1.668,scaleY:1.668,rotation:60.1,x:218.9,y:209.9,alpha:0.828}},{t:this.instance_16,p:{scaleX:1.993,scaleY:1.993,rotation:89.4,x:240.8,y:200.7,alpha:0.75}},{t:this.instance_17,p:{scaleX:2.416,scaleY:2.416,rotation:127.5,y:194.3,alpha:0.641,x:279.2}},{t:this.instance_14,p:{scaleX:2.942,scaleY:2.942,rotation:174.8,x:312.5,y:165.8,alpha:0.52}},{t:this.instance_15,p:{scaleX:3.563,scaleY:3.563,rotation:-129.3,x:362.8,y:185.5,alpha:0.359}},{t:this.instance_12,p:{scaleX:4.08,scaleY:4.08,rotation:-82.8,x:405.5,y:205.5,alpha:0.23}},{t:this.instance_13,p:{scaleX:4.796,scaleY:4.796,rotation:-18.4,x:399.2,y:219.6,alpha:0.051}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:152.1,y:212,alpha:1}},{t:this.instance_9,p:{scaleX:1.038,scaleY:1.038,rotation:3.4,x:179.4,y:212.7,alpha:0.988}},{t:this.instance_11,p:{scaleX:1.177,scaleY:1.177,rotation:15.9,x:205.4,y:222,alpha:0.961}},{t:this.instance_10,p:{scaleX:1.35,scaleY:1.35,rotation:31.5,x:227.3,y:213.6,alpha:0.91}},{t:this.instance_16,p:{scaleX:1.594,scaleY:1.594,rotation:53.5,x:247.8,y:209.7,alpha:0.852}},{t:this.instance_17,p:{scaleX:1.93,scaleY:1.93,rotation:83.7,y:201.3,alpha:0.77,x:279.2}},{t:this.instance_14,p:{scaleX:2.364,scaleY:2.364,rotation:122.7,x:292.1,y:185.4,alpha:0.66}},{t:this.instance_15,p:{scaleX:2.891,scaleY:2.891,rotation:170.2,x:341.3,y:181.5,alpha:0.531}},{t:this.instance_12,p:{scaleX:3.339,scaleY:3.339,rotation:-149.5,x:382.5,y:172.3,alpha:0.41}},{t:this.instance_13,p:{scaleX:3.967,scaleY:3.967,rotation:-93,x:409.5,y:199.6,alpha:0.262}},{t:this.instance_18,p:{scaleX:4.554,scaleY:4.554,rotation:-40.2,x:432.5,y:220.5,alpha:0.109}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:180.2,y:212.3,alpha:1}},{t:this.instance_11,p:{scaleX:1.038,scaleY:1.038,rotation:3.4,x:210.3,y:220.2,alpha:0.988}},{t:this.instance_10,p:{scaleX:1.134,scaleY:1.134,rotation:12,x:232.7,y:213.1,alpha:0.961}},{t:this.instance_16,p:{scaleX:1.297,scaleY:1.297,rotation:26.7,x:254.6,y:211.8,alpha:0.93}},{t:this.instance_17,p:{scaleX:1.545,scaleY:1.545,rotation:49.1,y:204.7,alpha:0.859,x:282.4}},{t:this.instance_14,p:{scaleX:1.887,scaleY:1.887,rotation:79.9,x:293.7,y:204.4,alpha:0.781}},{t:this.instance_15,p:{scaleX:2.321,scaleY:2.321,rotation:118.9,x:331,y:193,alpha:0.672}},{t:this.instance_12,p:{scaleX:2.699,scaleY:2.699,rotation:152.9,x:354,y:177,alpha:0.57}},{t:this.instance_13,p:{scaleX:3.24,scaleY:3.24,rotation:-158.4,x:397.9,y:187.8,alpha:0.441}},{t:this.instance_18,p:{scaleX:3.753,scaleY:3.753,rotation:-112.2,x:435.6,y:192.3,alpha:0.309}},{t:this.instance_8,p:{scaleX:4.35,scaleY:4.35,rotation:-58.5,x:482.2,y:226.7,alpha:0.16}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1.02,scaleY:1.02,rotation:1.8,x:235,y:212.1,alpha:1}},{t:this.instance_16,p:{scaleX:1.102,scaleY:1.102,rotation:9.2,x:258.6,y:211.1,alpha:0.969}},{t:this.instance_17,p:{scaleX:1.263,scaleY:1.263,rotation:23.7,y:205.3,alpha:0.93,x:285.2}},{t:this.instance_14,p:{scaleX:1.513,scaleY:1.513,rotation:46.2,x:302.7,y:212.8,alpha:0.871}},{t:this.instance_15,p:{scaleX:1.853,scaleY:1.853,rotation:76.8,x:332.5,y:203.3,alpha:0.789}},{t:this.instance_12,p:{scaleX:2.161,scaleY:2.161,rotation:104.5,x:345.5,y:195.2,alpha:0.711}},{t:this.instance_13,p:{scaleX:2.615,scaleY:2.615,rotation:145.4,x:386.7,y:191.4,alpha:0.602}},{t:this.instance_18,p:{scaleX:3.055,scaleY:3.055,rotation:-175.1,x:417.1,y:182.9,alpha:0.48}},{t:this.instance_8,p:{scaleX:3.574,scaleY:3.574,rotation:-128.3,x:471.8,y:174.9,alpha:0.359}},{t:this.instance_9,p:{scaleX:4.263,scaleY:4.263,rotation:-66.3,x:513.5,y:220.7,alpha:0.18}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1.009,scaleY:1.009,rotation:0.8,x:260.2,y:210.3,alpha:1}},{t:this.instance_17,p:{scaleX:1.082,scaleY:1.082,rotation:7.4,y:205,alpha:0.98,x:286.7}},{t:this.instance_14,p:{scaleX:1.24,scaleY:1.24,rotation:21.6,x:310.2,y:214.1,alpha:0.941}},{t:this.instance_15,p:{scaleX:1.487,scaleY:1.487,rotation:43.8,x:337.7,y:207.6,alpha:0.879}},{t:this.instance_12,p:{scaleX:1.726,scaleY:1.726,rotation:65.3,x:350.7,y:207.5,alpha:0.82}},{t:this.instance_13,p:{scaleX:2.092,scaleY:2.092,rotation:98.3,x:384.2,y:199.2,alpha:0.73}},{t:this.instance_18,p:{scaleX:2.459,scaleY:2.459,rotation:131.3,x:404.9,y:191.1,alpha:0.641}},{t:this.instance_8,p:{scaleX:2.901,scaleY:2.901,rotation:171.1,x:434.2,y:167.4,alpha:0.52}},{t:this.instance_9,p:{scaleX:3.498,scaleY:3.498,rotation:-135.1,x:496.6,y:171.2,alpha:0.379}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1.004,scaleY:1.004,rotation:0.3,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1.07,scaleY:1.07,rotation:6.3,x:314.2,y:213,alpha:0.98}},{t:this.instance_15,p:{scaleX:1.223,scaleY:1.223,rotation:20,x:341.7,y:208.1,alpha:0.949}},{t:this.instance_12,p:{scaleX:1.392,scaleY:1.392,rotation:35.3,x:358.1,y:211.6,alpha:0.898}},{t:this.instance_13,p:{scaleX:1.671,scaleY:1.671,rotation:60.4,x:386.8,y:203.9,alpha:0.828}},{t:this.instance_18,p:{scaleX:1.964,scaleY:1.964,rotation:86.8,x:404.2,y:201.1,alpha:0.762}},{t:this.instance_8,p:{scaleX:2.329,scaleY:2.329,rotation:119.6,x:416,y:187.2,alpha:0.672}},{t:this.instance_9,p:{scaleX:2.836,scaleY:2.836,rotation:165.2,x:458.9,y:168.1,alpha:0.539}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1.002,scaleY:1.002,rotation:0.1,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1.061,scaleY:1.061,rotation:5.5,x:343.9,y:207.5,alpha:0.98}},{t:this.instance_12,p:{scaleX:1.16,scaleY:1.16,rotation:14.4,x:363.2,y:211.4,alpha:0.961}},{t:this.instance_13,p:{scaleX:1.352,scaleY:1.352,rotation:31.7,x:389.9,y:205.3,alpha:0.91}},{t:this.instance_18,p:{scaleX:1.572,scaleY:1.572,rotation:51.5,x:408.5,y:206.1,alpha:0.859}},{t:this.instance_8,p:{scaleX:1.86,scaleY:1.86,rotation:77.4,x:418.4,y:205.2,alpha:0.789}},{t:this.instance_9,p:{scaleX:2.275,scaleY:2.275,rotation:114.7,x:443.1,y:189.2,alpha:0.68}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1.03,scaleY:1.03,rotation:2.7,x:365.5,y:210.5,alpha:0.988}},{t:this.instance_13,p:{scaleX:1.135,scaleY:1.135,rotation:12.2,x:391.9,y:205.1,alpha:0.961}},{t:this.instance_18,p:{scaleX:1.281,scaleY:1.281,rotation:25.3,x:412.4,y:207.1,alpha:0.93}},{t:this.instance_8,p:{scaleX:1.492,scaleY:1.492,rotation:44.3,x:427.3,y:212.8,alpha:0.879}},{t:this.instance_9,p:{scaleX:1.816,scaleY:1.816,rotation:73.4,x:447,y:206.6,alpha:0.801}},{t:this.instance_21,p:{scaleX:1.463,scaleY:1.463,rotation:51.6,x:449.5,y:214.8,alpha:0.672}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,rotation:0,x:366,y:210.2,alpha:1}},{t:this.instance_13,p:{scaleX:1.02,scaleY:1.02,rotation:1.8,x:392.8,y:204.7,alpha:1}},{t:this.instance_18,p:{scaleX:1.093,scaleY:1.093,rotation:8.3,x:414.6,y:206.7,alpha:0.98}},{t:this.instance_8,p:{scaleX:1.226,scaleY:1.226,rotation:20.3,x:434.4,y:213.7,alpha:0.949}},{t:this.instance_9,p:{scaleX:1.459,scaleY:1.459,rotation:41.3,x:456.1,y:213.4,alpha:0.891}},{t:this.instance_21,p:{scaleX:1.462,scaleY:1.462,rotation:38.9,x:486.4,y:219.4,alpha:0.852}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,rotation:0,x:366,y:210.2,alpha:1}},{t:this.instance_13,p:{scaleX:1,scaleY:1,rotation:0,x:392.9,y:204.7,alpha:1}},{t:this.instance_18,p:{scaleX:1.006,scaleY:1.006,rotation:0.6,x:415.5,y:206.3,alpha:1}},{t:this.instance_8,p:{scaleX:1.062,scaleY:1.062,rotation:5.6,x:438.2,y:212.7,alpha:0.98}},{t:this.instance_9,p:{scaleX:1.204,scaleY:1.204,rotation:18.4,x:463,y:213.9,alpha:0.949}},{t:this.instance_21,p:{scaleX:1.461,scaleY:1.461,rotation:65,x:492.4,y:225.4,alpha:0.898}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,rotation:0,x:366,y:210.2,alpha:1}},{t:this.instance_13,p:{scaleX:1,scaleY:1,rotation:0,x:392.9,y:204.7,alpha:1}},{t:this.instance_18,p:{scaleX:1,scaleY:1,rotation:0,x:415.5,y:206.2,alpha:1}},{t:this.instance_8,p:{scaleX:1.001,scaleY:1.001,rotation:0.1,x:439.3,y:212,alpha:1}},{t:this.instance_9,p:{scaleX:1.051,scaleY:1.051,rotation:4.6,x:466.5,y:212.8,alpha:0.988}},{t:this.instance_21,p:{scaleX:1.46,scaleY:1.46,rotation:23.3,x:503,y:217,alpha:1}}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:117.1,y:200.9,alpha:1}},{t:this.instance_19},{t:this.instance_20},{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:211.5,y:219.5,alpha:1}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:235.4,y:211.9,alpha:1}},{t:this.instance_16,p:{scaleX:1,scaleY:1,rotation:0,x:260.3,y:210.2,alpha:1}},{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:0,y:204.7,alpha:1,x:287.3}},{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:315.6,y:212.3,alpha:1}},{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:0,x:344.5,y:207.1,alpha:1}},{t:this.instance_12,p:{scaleX:1,scaleY:1,rotation:0,x:366,y:210.2,alpha:1}},{t:this.instance_13,p:{scaleX:1,scaleY:1,rotation:0,x:392.9,y:204.7,alpha:1}},{t:this.instance_18,p:{scaleX:1,scaleY:1,rotation:0,x:415.5,y:206.2,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:439.4,y:212,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:467.5,y:212.3,alpha:1}},{t:this.instance_21,p:{scaleX:1.46,scaleY:1.46,rotation:1.5,x:503,y:213.5,alpha:1}},{t:this.text_2,p:{x:304.7,y:240.2,font:"22px 'Arial'",color:"#FFFFFF",textAlign:"center",lineHeight:24,lineWidth:356}}]},1).wait(13));

	// Text bg
	this.instance_22 = new lib.textBG("synched",0);
	this.instance_22.setTransform(344,-230.2);
	this.instance_22.alpha = 0.301;
	this.instance_22._off = true;

	this.instance_23 = new lib.frogeyesblinking();
	this.instance_23.setTransform(137.7,181.6,0.9,0.9,0,0,0,12.6,12.6);

	this.instance_24 = new lib.froghead2("synched",0);
	this.instance_24.setTransform(138.1,202.7,0.9,0.9,0,8.6,-171.4,35.2,29.1);

	this.instance_25 = new lib.frogleg("synched",0);
	this.instance_25.setTransform(128.2,224.8,0.548,0.423,0,17,-163,36.6,16.1);

	this.instance_26 = new lib.frogleg2("synched",0);
	this.instance_26.setTransform(111.5,224.4,0.548,0.548,0,0,180,41,41.6);

	this.instance_27 = new lib.frogleg("synched",0);
	this.instance_27.setTransform(140.3,226.9,0.364,0.328,0,7,-173,37,11.5);

	this.instance_28 = new lib.frogleg2("synched",0);
	this.instance_28.setTransform(151.5,224.4,0.548,0.548,0,0,0,41,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_22}]},14).to({state:[]},1).to({state:[{t:this.instance_28,p:{x:151.5,y:224.4}},{t:this.instance_27,p:{x:140.3,y:226.9}},{t:this.instance_26,p:{x:111.5,y:224.4}},{t:this.instance_25,p:{x:128.2,y:224.8}},{t:this.instance_24,p:{x:138.1,y:202.7}},{t:this.instance_23,p:{x:137.7,y:181.6}}]},8).to({state:[]},6).to({state:[{t:this.instance_28,p:{x:327,y:146.4}},{t:this.instance_27,p:{x:315.8,y:148.9}},{t:this.instance_26,p:{x:287,y:146.4}},{t:this.instance_25,p:{x:303.7,y:146.8}},{t:this.instance_24,p:{x:313.6,y:124.7}},{t:this.instance_23,p:{x:313.2,y:103.6}}]},25).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({_off:false},0).to({y:196.1,alpha:0.66},14,cjs.Ease.get(1)).to({_off:true},1).wait(52));

	// Answer Bar
	this.questionArrow = new lib.questionArrow();
	this.questionArrow.setTransform(297.4,56.9);

	this.text_3 = new cjs.Text("", "14px 'ComicSansMS'", "#000066");
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 120;
	this.text_3.setTransform(119.4,45.4);

	this.lang_bg = new lib.text_bg();
	this.lang_bg.setTransform(387.8,56);

	this.tryBtn = new lib._try();
	this.tryBtn.setTransform(513.5,54.2,1.1,1.1);
	new cjs.ButtonHelper(this.tryBtn, 0, 1, 2, false, new lib._try(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DAF1FE").ss(3,1,1).p("EArvAAxIAAhhQAAgughggQgggggtAAMhUBAAAQgtAAghAgQggAgAAAuIAABhQAAAuAgAgQAhAgAtAAMBUBAAAQAtAAAgggQAhggAAgug");
	this.shape_1.setTransform(305.5,55.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DAF1FE","#82C9FD"],[0,1],0,16,0,-15.9).s().p("EgqAACfQgtAAghggQggghAAgtIAAhhQAAguAgggQAhggAtAAMBUBAAAQAtAAAgAgQAhAgAAAuIAABhQAAAtghAhQggAggtAAg");
	this.shape_2.setTransform(305.5,55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.tryBtn},{t:this.lang_bg},{t:this.text_3},{t:this.questionArrow}]},17).to({state:[]},8).wait(44));

	// BG
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBE9FF").s().p("AAAAZQAAgNgNgZIgNgZIAVAXQAVAXgCALQgBATAPgCQgJADgGAAQgNAAAAgOg");
	this.shape_3.setTransform(178.9,302.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgOiTIAUBBQATBbgUCL");
	this.shape_4.setTransform(183.5,321.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAqANQgIgXhMgjIALASQAKAVgCATQgEAaAUAFQARAGAZgUQALgFgEgMg");
	this.shape_5.setTransform(179.5,302.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B500DF").s().p("AgHAsQgUgFAEgaQACgTgKgVIgLgSQBMAjAIAXQAEAMgLAFQgTAQgQAAIgHgCg");
	this.shape_6.setTransform(179.5,302.8);

	this.instance_29 = new lib.pad();
	this.instance_29.setTransform(184.3,337.9,0.533,0.533);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBE9FF").s().p("AAAAZQAAgNgNgZIgNgZIAVAXQAUAXgBALQgBATAOgCQgJADgGAAQgMAAAAgOg");
	this.shape_7.setTransform(408.4,136.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgOiTIAUBBQATBbgVCL");
	this.shape_8.setTransform(413,155.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgqgsIALARQAKAVgCATQgDAaATAFQARAGAZgTQALgGgEgMQgIgXhMgig");
	this.shape_9.setTransform(408.9,136.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B500DF").s().p("AgHAsQgTgFADgaQACgTgKgVIgLgRQBMAiAIAXQAEAMgLAGQgTAOgPAAIgIgBg");
	this.shape_10.setTransform(408.9,136.8);

	this.instance_30 = new lib.pad();
	this.instance_30.setTransform(414.1,172.1,0.586,0.586);

	this.instance_31 = new lib.pad();
	this.instance_31.setTransform(285.7,158.5,1.432,1.432);

	this.instance_32 = new lib.pad();
	this.instance_32.setTransform(109.8,240.5,1.724,1.36);

	this.instance_33 = new lib.pad();
	this.instance_33.setTransform(69,141.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#134560").s().p("AAfB4QgagSgdg8Qg8hwgdg+QAlAxAzBsQAbAuAfAYQARANAXAGQAbAGAOgNQgaAZgYAAQgRABgQgNg");
	this.shape_11.setTransform(65.6,403.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#134560").s().p("AAyBDQgPhvgNgmQgPgugagoQgjg0gjgEQAkADAtAaQAoAXAZCBQATBkAEA2QABAhAKBHIgKgFQgZgGgEAVQACiDgEgbg");
	this.shape_12.setTransform(37.5,395);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#134560").s().p("AgaDzQgHgiAHhwQAViXAEhKQAFiCg9hUQAiAPAXAxQAQAoAFArQAFAxgOB0QgUC2AEAvQAEAwANAaQAGAMAPASQATAXAFARQhGgTgOhRg");
	this.shape_13.setTransform(12.1,386.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2F6693").s().p("AHZFAQgZgvgegUQgdgTgvgGQg+gGgQgGQgkA4ApA2QgzgZgKg2QghgKgthBQgqg9g0gJQgcAuAGBoQgVgggKgwIgNhRQgPhdhRgfQhrgogxBcQgOAcgkCdQgEgtALh6QAKhngLg5QgHglgfgkQgdgigigOQglgSgZAPQgYAPgFAtQATjNgKgDQA8AYBUA4QAkAYAQAfQAJAVAUA1QAPAiAgAPQAJAEA3AQQCfArBVBQQAWAUATAiIAhA5QAnA6BpAPQCDATAqAdQBAAsgIByQgNgQggg8g");
	this.shape_14.setTransform(43.3,382.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AjAhXQCfArBVBQQAWAUATAhQAKASAXAnQAnA7BpAPQB4ARAaAKQBDAZAiBIQAFAJAIAPIwjAAIAArfQA+AaBTA3QAkAZAQAfQAJAUAUA2QAPAhAgAQQAJADA3ARg");
	this.shape_15.setTransform(45.2,379.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4178AF").s().p("AoRFwIAArfQA+AaBTA3QAkAYAQAfQAJAVAUA2QAPAhAgAQQAJADA3AQQCfAsBVBPQAWAVATAhIAhA5QAnA6BpAQQB4ARAaAKQBDAZAiBHIANAZg");
	this.shape_16.setTransform(45.2,379.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#134560").s().p("AgGBWQAQiKAThEQAhh2AXgVQgdAvgNBYQgHAygJBdQgXCehYBTQAsgrAiiDg");
	this.shape_17.setTransform(510.1,381.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#134560").s().p("AiNFuQAgg0AKgYQA4h1AoiIQAahcANhXIAJhHQAGgpAQgaQAZgqA7hQQgDAZgTAlIggA6QgfBDgOB1QgRCLgMAtQgtCqhiByIgfAhQABgSAJgTg");
	this.shape_18.setTransform(531.1,372);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#134560").s().p("AgjF/QAAg0AShcQAKhgAHguQAhjSgJhYQgSiwgchMQgOghgqgsQBpgTAJgDQgpAdAKA/QAFAdAhBJQAWA0AJA1QAPBYgjDRQgFAfgZBgQgVBPgDAyQgPDpAbALQgagJgWATIABirg");
	this.shape_19.setTransform(576,353.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2F6693").s().p("AjDHYQALg4AChhQAFh+ADgbQgmgLgwAnQgoAhgiBqQgSA5gcBkQgKgggCgQQhfAdg+BDQhPBTAyBYQgPgTgFgKQgwASgyAJQAKhLBziMQAaggBBgiQBDgiAXgaQAdgfAUhIQAYhWAMgWQAgg5Bsg7QBsg5Adg2QAcg3A+iJQA/h0BQghQATgHAsgGQApgHAWgJQA6gaAvhHQBIhsAJgKQBAhFB0AVQgBA4gVBrQACgthWAdQhGAYgcAWQg4AwgcBfQgXBNgCB5QgCCsgDAaQgIBVguD+QglDLgBCEQgBgkgKh7QgHhgAJhDIAgjaQAPh/gIhcQgQi3gmgZQg0gjhCAsQgzAjgmA8QgqBFgbB3QgpCygHAVQgUA9g5DPQhBC3hcAiQBKhkAaiKg");
	this.shape_20.setTransform(547.1,341.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("Ak6CrQAgg5Bsg7QBsg4Adg2QAeg3A8iJQA/h1BQggQATgHAsgHQApgGAWgKQA6gZAvhHQBIhrAKgMQAjgnAtgIQASgEBQAAIAAVpI1cgHQAVgXAfg/QAghBAVgaQAaggBBgiQBDgjAXgZQAdgfAUhIQAYhXAMgWg");
	this.shape_21.setTransform(548.1,340);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4178AF").s().p("AquKuQAWgXAfg/QAghBAVgaQAaggBBgiQBCgjAYgZQAdgfAThIQAYhXAMgWQAhg5Bsg7QBsg4Adg2QAeg3A7iJQBAh1BQggQATgHArgHQAqgGAWgKQA6gZAvhHQBIhrAKgMQAjgnAtgIQASgEBQAAIAAVpg");
	this.shape_22.setTransform(548.1,340);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AiZhQQgmApAUA0QAUA1AwhCQgDAKgJAWQgFAUALALQAOAOAWgJQAUgHANgQQALApArAAQApAAAugeQAvgdAVglQAWgrgbgg");
	this.shape_23.setTransform(47.1,-18.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#63310F").s().p("AgRABQAfgVANgNIAAgIQAKgBAMgGQgBAGABAPQgUAJgcAeQgYAdgYAIQAEgaAagWg");
	this.shape_24.setTransform(90.8,375.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#63310F").s().p("AgBAAQABgbAEgMIgEgFIAEAAIAAAFQANAOgIAYQgFAOgPAfQAHgOADgeg");
	this.shape_25.setTransform(69.4,361);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D19369").s().p("AgKBBQAZgxACgMQAEgLACgNIgDAjQgKBJgkAmQgEgYAUglgAAZhfQgCgQgGgNIAIAOIAAAPQAFAigHApQACgeAAgtg");
	this.shape_26.setTransform(36.3,19.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#844419").s().p("AAGgkIgGggQgGggAagSIgOBSIAHAbQABAfghBhg");
	this.shape_27.setTransform(-3.3,186.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#844419").s().p("AgHAKIAMgHQAEgsgJgiQAMAngGAyQgFAkABAaIgJhCg");
	this.shape_28.setTransform(13.3,63.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#844419").s().p("AgoCEIAAAAIAAAAgAgVADQAOhVAbgdIAGgUQAjAcgsBjQg5CDAAAFQALhRAIgwg");
	this.shape_29.setTransform(6.3,220.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#844419").s().p("AAXB5IgShJQgahugEhIQAMA1AZBNQAaBGgEBwQgBgXgKgigAgiixIAHAOIACAdIgJgrg");
	this.shape_30.setTransform(16.6,185.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#68310D").s().p("AgRBYQAGhjgCgpIgKAKQgHhzAghAQgIAtAPBLQATBTgEAiQgCAXgOBNQgKA9AAAtQgRgrAChbg");
	this.shape_31.setTransform(612.2,172.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#68310D").s().p("AABAHQABgigLhCQgKg0gDggQADAMAFAMIAQApQAVA6AABXQAABYgXA5QAAhxABg6g");
	this.shape_32.setTransform(613.1,115);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#68310D").s().p("AAUBqQAEA+gKArIAGhpgAASBTQgJhgACgeIABgFQgLgsgVgfIAQAMQgTgwAUgzQAAAJAMA7QAFARgCBNQAIAnABAuIgBBFIgCgXg");
	this.shape_33.setTransform(582.8,131.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#68310D").s().p("AgGB1QAEg+gBggIAAiIQgDg6AAgYIADAAIAABSIAGBxQAJB4gIBMQgJgzgBgcg");
	this.shape_34.setTransform(596.4,146.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#68310D").s().p("AAABFQgLgqgBgPQgDhhAQgZIAIgEQgLAUAFAoIALA+QAAAkgIBHQABgPgHgfg");
	this.shape_35.setTransform(594.2,-12.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#68310D").s().p("AgZgFQgFhZAxggIAHgKIgEAIIgDACQgYApgEBQQgDAxAEBdQgOhdgDgxg");
	this.shape_36.setTransform(577.3,68.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#68310D").s().p("AgChLIgFgxIAFAEIAAAtIAHBLQAHBNgOAwIAAjIg");
	this.shape_37.setTransform(598.8,80.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#68310D").s().p("AgCACIgNiCQAQApANBZQALBHgjA4QAPgtgHhSg");
	this.shape_38.setTransform(562.3,61.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D19369").s().p("AgPhEQAAgPAFgOIADgHQgFASgDASQgEAiAOAnQAbBTACARQhBg5Aah0g");
	this.shape_39.setTransform(599.6,51.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D19369").s().p("AgFA/QgBhGABgPQANhMACgxIADCNQgFCLgUAPQAIgegBg3g");
	this.shape_40.setTransform(593,107.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D19369").s().p("AADBEQgUhJgDgdQgEgnAGg+IADggIgBAWQgDA5AMAjQAeBaAACDQgBglgTg/g");
	this.shape_41.setTransform(569.9,9.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#844419").s().p("AgHBBQgLgmgCgVQgDgeAShJIgNgbQAqAqgDBPQgDBAgfBAQALgbgFghg");
	this.shape_42.setTransform(560.7,206);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#844419").s().p("AgOBuIABANQAEA4gTAWQAPgmgBg1gAgXAmQgBgLAAgMIAJBSIABANIgJhIgAgagKQgPiGBGg4QgYA4gOAaIATgcQggBmgCA7IgCgZg");
	this.shape_43.setTransform(611.9,67.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#844419").s().p("AAJCzQAHgjAAgRQAAgegQgjQgbg2gBgEQgmhoBNhkQgGAngKA4QgIBHAcA7QAYA0ADA2QADBIgqAhQgBgVAHgkgAAQjrIAHAUIgMAPIAFgjg");
	this.shape_44.setTransform(576.9,118.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#844419").s().p("AgPDdQgChVAPgxIgRAoQAAk2AljDQAGBKgKCdQgKCVAIBOQAJBkgHDHQgagxgDhtg");
	this.shape_45.setTransform(597.5,127);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#844419").s().p("AADgsQgCgjgJgnIgWhIQgIgiAMg3QAGgeADgXIgMg/IANAbQACAOgDAWQAlDMAKB/QARDZgsC0QAFlUgFhkg");
	this.shape_46.setTransform(592.7,15.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AiJhrIBaDIIC5AP");
	this.shape_47.setTransform(67.5,374.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AhrhgIAtDAICqgG");
	this.shape_48.setTransform(77.2,360.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AhKhGIAQCNICFAA");
	this.shape_49.setTransform(87.4,347);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("Ag7g2IAABtIB3gs");
	this.shape_50.setTransform(98.6,335);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("AkqGFQBeiaB5itQDylaCMho");
	this.shape_51.setTransform(83.6,357.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#204C1B").s().p("AkEGdQhKgzgThsQgHgtAJgoQANg/BBhDQBQhJAmgoQByh3B6hgQBmhQA1gaQBdgaAcgWQg3AtiaB8QiSB6hPBkQjsEgDnC8QgtAUgoAAQgyAAgrgfg");
	this.shape_52.setTransform(74.1,365.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("Al7DGQBQh0CIiKQENkWEUh1IjCFuQgZAyhnDtQhmDcg8AXQhMAdhshbQhthcAQhdg");
	this.shape_53.setTransform(76,362.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#367033").s().p("AkeF/QhthcAQhdQBQh0CIiKQENkWEUh1IjCFuQgZAyhnDtQhmDcg8AXQgTAHgUAAQg/AAhShFg");
	this.shape_54.setTransform(76,362.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("Ah+AWID9gr");
	this.shape_55.setTransform(16.3,354.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AingzIBSBnID9gt");
	this.shape_56.setTransform(14.4,334.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("Aivg3IBxBuIDug0");
	this.shape_57.setTransform(15.1,316.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("Ai+hJICeCTIDfhK");
	this.shape_58.setTransform(16.6,298.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("AjChrIDCDXIDDgt");
	this.shape_59.setTransform(17,279.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AikiJIB4ETIDRgm");
	this.shape_60.setTransform(24.5,260.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("Ah6hnIBKDPICrgt");
	this.shape_61.setTransform(30.9,247.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AhYg2IAtBuICEgX");
	this.shape_62.setTransform(37.2,236.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("AkQKWQBllzAqi+QAujVAGgYQAch2AjhPQBRi7DOiN");
	this.shape_63.setTransform(28.6,287.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#204C1B").s().p("AkKBnIAAltQBsiSCghfQAkgWBkgdQBcgcAlgbQgYAThkBAQhOAxgpAtQiACUhBC0Qg1COgSDQQgKB4gDD0QgOlQABirg");
	this.shape_64.setTransform(25.8,282.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1).p("ACppAQA6jUA5hAQhWAMhyAwQjjBjiMDBIAAVJIDxhEQBPlYAmnHQAZk8BFj2g");
	this.shape_65.setTransform(27.5,306.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#367033").s().p("Akbn1QCMi/DjhjQBygyBWgLQg5BAg6DUQhED2gbE8QglHGhQFZIjwBEg");
	this.shape_66.setTransform(27.5,306.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1,1,1).p("Akbi9IDRF7IFmhp");
	this.shape_67.setTransform(43.2,352.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AjfiYICdExIEigP");
	this.shape_68.setTransform(52.2,326.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,1,1).p("Ainh+IBSD9ID9gP");
	this.shape_69.setTransform(62.3,312.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AhzhZIAmCrIDAAI");
	this.shape_70.setTransform(72.8,297.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("AhJgzIAHBfICMAI");
	this.shape_71.setTransform(82.1,287.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AlPIxQAtjbBqj6QDUnyE0ia");
	this.shape_72.setTransform(64.9,331.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#204C1B").s().p("AlAGiQgogcgVgSQgkgfgUglIgLgXQgbhQBCh2IB2isQCIjIDShyQCGhJEMhQQmKCDjVGbQg/B0gXCoQgNBegNDBQADhYg9gzg");
	this.shape_73.setTransform(48.6,333.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("Ak2inQEPmNIFhdIgxBfQg8B7gxCLQibG8APG4IgfBLQiOgviThPQksigglikQAfi0CIjEg");
	this.shape_74.setTransform(50.7,341.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#367033").s().p("AiMIVQksigglikQAfi0CIjEQEPmNIFheIgxBgQg8B6gxCMQibG8APG3IgfBMQiOgwiThOg");
	this.shape_75.setTransform(50.7,341.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AiJiNIAGBdQAKBgANATQATAXBQAZQBSAbBBAA");
	this.shape_76.setTransform(95.3,401.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AgOgzIgdA6IBXAt");
	this.shape_77.setTransform(139.8,378.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AALhjIgeAxQgfAygFATIAlApQApApAgAA");
	this.shape_78.setTransform(128.9,382.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1).p("AAAiMIgfAoQggA2AFBEIArAzQAuA3AdAN");
	this.shape_79.setTransform(118,388.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("Ag1icIggBcQgeBjAJAvIBTAoQBaAnAqgE");
	this.shape_80.setTransform(106.3,393.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1).p("Al5C+QB1hWCYhbQEwizC2gX");
	this.shape_81.setTransform(114.7,394.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#204C1B").s().p("AASg5QB/hLBDgfQB9g5BXAFQggAciECmQhpCBhPAiIgbAKQg1AQi5ACQifAChLAtQEmi7CThXg");
	this.shape_82.setTransform(103.8,399.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1,1).p("ADgjlQlRAckLDZQkKDcEcgBQBWgBClgXQCigWAYAAQC7iPBahuQA4hGA4gvIAtghQh0gdipAOg");
	this.shape_83.setTransform(101.5,396.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#367033").s().p("Al8AQQELjZFRgcQCpgOB0AdIgtAhQg4Avg4BGQhaBui7CPQgYAAiiAWQilAXhWABIgDAAQkXAAEIjbg");
	this.shape_84.setTransform(101.5,396.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#844419").s().p("Ah0ZtIgdkNQgRiggEhsQgFhuAIkNQAHjsgNiQQgXkSAVjgQAJhdgZjKQgXjDANhoQAMhYgPiuQgOiuALhYQAKhQArh1QBDiyAFgOQAniCACiUQAXifgJhMQAKBCAACSQAAB1gDANQgBANgMA7QgGA2gmCTQglCRgIBDQgOB1gCAnQgEBQAFC2QAHD7AjGuQAqIBAxFTQBLH2BoPcIAeA0QgQgaiNASIinAbQAfjLgglCg");
	this.shape_85.setTransform(43.2,199.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9B5729").s().p("AiTf0QAjhaAGgzQAlkZg5lcQgJg0gUi8QgQiVgXhZQgThRADhXQABgTgHhMQgHhVgLAHQgxAlgVgyQgQgoAGg3QAFgjAahDQAahFAEglQADhVAFg1QAKhoAdgJQADARgLAoQgKAjALAUQAgA9Ahg1QARgfgphUQgvhhAAgaQAAgtATgtQAcgzAOggQAghMgYhrIgUAIQgHAhgRBqQgWBegsATQg9AbgQhjQgMhJAOhKQAPhZAbgbQAUgTA3gTQAlgNAUg2QAQgrAAhHQgEhRAAgkQguARgYBuQgcB5gfAcQALgLgGhJQgKh4AAgWQgBhMAUgfQg4gZgRjIQgSjTAig5QAMAJAdBOQAZBBAdgBQAegCgNg1QgRhKABgIQAigXBNhfQAUgZAWgKQANgFAhgIQAYgHAVgEQAOgGARggQAOgeAGhrIgFiWQgEiDAHgBQA0gJAFBmQACA3gHBcQAAB1gDANQgBANgMA7QgGA2gmCTQglCRgIBDQgOB1gBAnQgDBQADC2QAHD7AjGuQAqIBAzFTQBLH2BoPcIAeA0IkQgUQivgMhYAkQAHgvAlheg");
	this.shape_86.setTransform(29.7,197.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#844419").s().p("AgvBtQALiKgDgvIgQhbQgKhAASgSQBUhUgZEFQgMCCAAAdQADB1A5gRQgwAlgMAvQgwglABh9g");
	this.shape_87.setTransform(24,-7.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9B5729").s().p("AifE2QgHgFgDg6QAAg+gBgIQgRhdgFgzQgJhaAggtQAhAIAMBEQAMA+AlACQAphMgThZQgOgxgGgaQgLgvASgcQAYgkA8AAQBBABgDAyQgeHIA1gtQAggdAgh4QAchoAAg1QADCFg/CtQgoBqgkAVQgGADgTACQgqAEglgOQgsgPAJgdQgLAegSAbQgUAegSAAQgGAAgGgEg");
	this.shape_88.setTransform(17.9,-2.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1,1,1).p("EgFPgiOMAAABFOIKfAAIgeg0QhovchLn2QgzlTgqoBQgimugGj7QgFi2AEhQQACgnAMh1QAIhDAliRQAmiTAGg2QAMg7ABgNQADgNAAh1IgIjvIgsgHQgfEjgyAuQg0AtAdnKQAFhGiUAdg");
	this.shape_89.setTransform(30.5,190.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B16933").s().p("EgFPAjAMAAAhFOICUgpQCUgdgFBGQgdHKA0gtQAyguAfkjIAsAHIAIDvQAAB1gDANQgBANgMA7QgGA2gmCTQglCRgIBDQgMB1gCAnQgEBQAFC2QAGD7AiGuQAqIBAzFTQBLH2BoPcIAeA0g");
	this.shape_90.setTransform(30.5,190.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#15A039").s().p("AqeEnQgxgcAAgsQAaAHA+AXQA0AKATgwQAhAgAbgqQAXglgBgnQAHALAbASQAagVAXgxIgBgBQAAgFABAFIAAABQAQAaAqgDQApgDALggQARArAqABQArABAQgpIAIANQAsADAXguQATglgDgvQAbATAZAAQAeAAgBgmQAIAOAZARQARgPAFgJQABAgAWAJQAVAHAYgQQARgMAGgfQAIgrAEgJQAFAKAKAPQA6AOAmg7QADA+AmgLQAmgLADg3QANARAcAIQATgnAFgWQBFA2AiAGQA3AKgGhbQATAKApgFQAEgcgCgLQANADAhgFQAJgwgVghQBUAgg3BGQgTAYgaAPQgaANgEgKQAEAMgCAYQghADgQgJQgEBGg3gPQgygNgcgvQAKApgSAVQgRAVghgZQAJBGhGACQhBACgpgqQAEAPgFAiQgagNgIgJQADA6hJACQhDABgmgdQAJAigVAQQgXAQgdgZQAIByhWAVQhPAUhTg/QgKAnglADQglADgMgnQAHAhggAoQgjAqgkgRQA4AciPA2IgHAAQgrAAgpgYg");
	this.shape_91.setTransform(111.5,7.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#067F2B").s().p("AnVFQQgpgVgLgpQgVANgSgLQgSgKgEgdQgmAbg5AJQg8AJgsgQQiog/BIk7QAFAMAhBvQAkBZAghbQgEB4BBAZQAYAJAdgLQARgGAhgSQgHAyAXAlQApAQAsgZQAtgaABguQAOApAVAaQAxgBAng2QAiguAIg3QAZA1Ang3QAlgzgDgrQA8AxAhgFQAigFAdhBQgPAjAZAmQAaAmAhgOQBDgXgyiTQAdARAYgGQAcgGgBgkQAJAIAZALQAdgLAEgZQAEgYgUgZQAQAOA3A5QAzAnAVgzQADAcASAGQAQAGATgNQAxghgag0QBLAiAVAHQA0AQA3gCQAKg0gCgHQBOBKAAhFQA7AiARg0QARg0gygjQB/A0AYAgQAiAugbAsQgaAsg5gLQAFALgCAaQggADgRgJQgDBFg4gPQgxgNgdgvQAKApgRAVQgRAWgigZQAKBEhGACQhCACgogpQADAQgFAfQgZgNgJgGQAEA5hKACQhCACgmgfQAJAkgYAQQgXAPgcgYQAHByhWAVQhMAThTg+QgLAngkACQgmADgLgnQAGAiggAnQgiArgmgSQAQAigZAYQgXAVgtAEIgNAAQglAAgggPg");
	this.shape_92.setTransform(93.2,4.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(1,1,1).p("AnhEIQgVANgSgLQgSgKgFgdQgmAbg5AJQg8AJgsgQQg2gVgVgpQgSg2gPggQgig7gOgbQgagrgGg5QgRiLAShGQC7glEQgBQCbAAE1AHIH4AAQA8AACaAIQBkACA+gNQAQAIAKAGQAlAZACAvQACAtgaAWQgaAYgsgJQAFALgCAaQghADgQgJQgEBFg3gPQgygNgcgvQAKApgSAVQgRAWghgZQAJBFhGABQhBACgpgpQAEAQgFAfQgagLgIgIQADA5hJACQhDACgmgfQAJAkgXAQQgXAPgdgYQAIByhWAVQhPAThRg+QgKAnglACQglADgMgnQAHAiggAnQgjArglgSQAPAigZAYQgXAVgtAEQgsADglgSQgpgVgLgpIABAAQgBgGgBAGQAAAAABAAgANqlBQAYgFASgHANqlBQgVgIghgL");
	this.shape_93.setTransform(89.2,5.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#03601B").s().p("AmtE+QgpgVgLgoIABgBQgBgGgBAGIABABIgBgBQABgGABAGIgBABQgVANgSgLQgSgLgFgcQgmAbg5AIQg8AKgsgRQg2gUgVgqQgSg1gPghIgwhVQgagsgGg5QgRiLAShFQC7gmEQAAQCbAAE1AHIH4AAQA8AACaAIQBkACA+gNQAQAHAKAHQAlAZACAuQACAugaAWQgaAXgsgJQAFAMgCAZQghADgQgJQgEBGg3gPQgygNgcgvQAKApgSAVQgRAVghgZQAJBGhGACQhBACgpgqQAEAPgFAgQgagLgIgJQADA6hJACQhDABgmgfQAJAkgXAQQgXAQgdgZQAIByhWAVQhPAUhRg/QgKAnglADQglADgMgnQAHAhggAoQgjAqglgSQAPAigZAYQgXAWgtADIgMAAQglAAgggPg");
	this.shape_94.setTransform(89.2,6.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#126D18").s().p("ABLHCQATgCAOgKQAVgPgGgZQAVATAcAAQAggBgFgkQARAAAegHQAJgUgCgOQASACAGgOQAHgOgKgOQAogNATgcQAXgggXgjQgfgGgNAMQgBgPgOgXQgggFhPAaQASgZAFgPQALgYgQgRQgEAFgEAAQAOglgZgPQgZgQgaAYQATgrAEgjQAFg4g1AVQAigfghgYQgfgYgiAVQAnghgkgfQgjgfgqAfQAFghgRgeQgUgjghAFQgEgbgOgYQgogJgVAUQAIgegdgDQgXgDgbANQAHgHAEgVQADgXgJgJQgOgRgTAHIgkAUQAHgJgCgJIgDgXQgsgLgaAjQgNgkgigBQgKgBgIADQAVgSAigBQA8AaABAAQA4gcAaAOQAuAlgiACQA1gBALADQAdAKgHArQASggAlALQAPAcgCAVQAqgdAPAdQAIAQABA0QARgRAGgLQAjgIAbAdQAcAegaAfQAagdAdAaQgBAIAEASQA2gPAgApQAhAog1AnQAhgNAIAZQAIAXgUAYQAmADgSAlQgMAZgaAbIA0gdQAhgOAJAWQgGgSAigLQAhgLANAIQAbANgIAVQgOAkAAAEQAHgZAfgCQAfgCADAeQgJAGgPASQAUgNARAKQAPAJADASQAHAxhGgFQAGALAEAhQgSAKgJACQARAfgMAaQgNAbglgGQAMA5hTgQQAYAFg6A6QgRAHgWgFQgWgFgMgMQgDAfgjACQgfgDgRAAgAESErQgEAAAEgBIAAABg");
	this.shape_95.setTransform(78.1,354.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0C5B14").s().p("AgKHVQgagRgGABIA2gKIAKgLQgDgYgag4IA4AeQAmAUAVgHQAcgJgFgXQgDgMgKgFQBeARAhgaQAdgYgTgPQgSgOgeALQAZgKgDgaQgDgagcALQAggTgYgdQhNgKhlBYQAxgxAXgcQAqgygGgrQgugHghAWQA6guAAgjQABg7gvAhQAZgSgSgdQgHAGgXAHQAbhChWALQglAEgZAKQgbAcgSAJQAMgXAhgOQANgNAPgSQAvg6gCgXQgDghglgCQgKgBgzAHQAcgggCghQgDglgzAWQAKgVgJgLQgJgLgVAEQgSAFgoBBQAUg6gjgyQglg1g2A2IgNgpQggAMgMAQQAUgmgZghQgZgEgjAZQgdAUgSAaQAXgnANgSQAWggAcgMQASgIAnAPQAnANgHAEQA3gbAaANQAuAmghABQA0gBAMADQAcAKgGArQARggAlALQAPAcgCAVQArgdAOAdQAJAQAAA1QAQgSAGgKQAkgJAcAdQAcAegbAfQAbgdAdAaQgCAIAEASQA2gPAhApQAgApg1AmQAigNAIAZQAHAXgTAYQAmADgTAlQgMAZgZAbIAzgcQAhgPAKAWQgHgRAigMQAhgJANAGQAbANgIAVQgOAkAAAFQAIgaAfgCQAfgCADAeQgJAHgQARQAUgMASAJQAPAJADATQAHAxhGgGQAGAMADAgQgSALgIABQAQAfgLAaQgNAcglgHQALA5hTgQQAGAvghANQgcALgugNIgFgHQADAHgKAKQgMANgUAGQg3ARgUgoIAAgBIgRArQgNAYgUAGIgIACQgNAAgQgNg");
	this.shape_96.setTransform(75.1,357.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(1,1,1).p("AluoqQBCgfAeAQQA2ArgpACQA/gCANAFQAiALgIAzQAUgnAqAOQASAhgCAYQAygiARAhQAKAUAAA9QATgVAHgLQArgKAgAhQAhAjggAkQAgghAhAeQgBAJAEAWQA/gSAmAvQAlAxg8AsQAmgPAJAdQAKAbgXAbQAsAEgVAtQgOAdgeAfQAPgIAtgaQAngPALAYQgIgSAogOQAmgNAPAJQAgAQgJAWQgRAqABAFQAIgeAkgCQAkgCADAjQgKAIgSAUQAXgOAUALQASAKADAVQADAXgQAPQgUARgogDQAHANAEAmQgVAMgKACQAUAkgOAfQgOAfgsgHQANBDhigUQAIA3gnAQQggAOg2gQQgDgIgEgEQAHAKgNANQgOAPgYAIQg/AUgYgwIgBAAQgZA7gIAFQgKAIgjABQgkACgCgNQAPBqj2glQkLg6gfALQAAiAgQj8QgQj8AAh/QAAiQAGgpQARhkBDg6QAegbAnAAQApAAAPAmg");
	this.shape_97.setTransform(82.8,351.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#033D0A").s().p("Aj7JIQkLg6gfALQAAiAgQj8QgQj8AAh/QAAiQAGgpQARhkBDg6QAegbAnAAQApAAAPAmQBCgfAeAQQA2ArgpACQA/gCANAFQAiALgIAzQAUgnAqAOQASAhgCAYQAygiARAhQAKAUAAA9QATgVAHgLQArgKAgAhQAhAjggAkQAgghAhAeQgBAJAEAWQA/gSAmAvQAlAxg8AsQAmgPAJAdQAKAbgXAbQAsAEgVAtQgOAdgeAfIA8giQAngPALAYQgIgSAogOQAmgNAPAJQAgAQgJAWQgRAqABAFQAIgeAkgCQAkgCADAjQgKAIgSAUQAXgOAUALQASAKADAVQADAXgQAPQgUARgogDQAHANAEAmQgVAMgKACQAUAkgOAfQgOAfgsgHQANBDhigUQAIA3gnAQQggAOg2gQQgDgIgEgEQAHAKgNANQgOAPgYAIQg/AUgYgwIgBAAQgZA7gIAFQgKAIgjABQgkACgCgNQALBOiEAAQguAAhAgJg");
	this.shape_98.setTransform(82.8,351.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,1,1).p("AhUg7IBJAcQBLAmAVA2");
	this.shape_99.setTransform(611.7,246.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("Ahvg2IBUASQBcAdAvA+");
	this.shape_100.setTransform(609.4,234.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(1,1,1).p("AiNgrIB6AAQCAAQAhBH");
	this.shape_101.setTransform(605.5,221);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AiqAFIB3gPQCHgKBXAh");
	this.shape_102.setTransform(598.6,203.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(1,1,1).p("AjKAbIAkgOQAvgQAxgKQCZggB4At");
	this.shape_103.setTransform(588.5,191.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("AjxBEIAhgYQAqgdAzgUQCkhJDAAN");
	this.shape_104.setTransform(571.2,179.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("AkFB+IAggkQArgqA2gmQCqh1DggR");
	this.shape_105.setTransform(547.6,169);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("AAxA/Ihgh9");
	this.shape_106.setTransform(524.6,150);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(1,1,1).p("ABjBVIjFip");
	this.shape_107.setTransform(504.4,157.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("AAJg3IgKAoQgKAsAFAb");
	this.shape_108.setTransform(499.2,176.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(1,1,1).p("AgVhSIArCl");
	this.shape_109.setTransform(486.1,187.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("Ah/BQICvifIBQCD");
	this.shape_110.setTransform(468.6,202.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1,1,1).p("AghhMIBDCZ");
	this.shape_111.setTransform(472.3,221.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("Ag3A5IAth4IBCB/");
	this.shape_112.setTransform(470.1,241.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1).p("Ah+HiQgyhUgYhrQg4j/BWjxQAohxBxhLQBlhECLgU");
	this.shape_113.setTransform(490.6,215.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#204C1B").s().p("AI0IuQgNgXgQg5QgniegjhZQihmOkqhiQkjhji/AiQhuATgjArQB7ijBYhIQCIhwCXgCQgoAJgvAlQg6AqAHAmQAFAhBNAdQAqARBHAUQDtBUDPDTQBKBLAoBzQAZBDAmCWQANAqAoBxQAfBlgNA0QgjgYgXgkg");
	this.shape_114.setTransform(556.4,216.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1,1,1).p("Anbm8QDJi8DvgDQD4gDDMD7QCQCyBFDXIAAJ3IhQg+QgXiphPi9Qiel5kihgQkkhji/AiQhxAUghAtIAng7QA0hHA/g6g");
	this.shape_115.setTransform(556.7,215.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#367033").s().p("AImI/QgXiphPi9Qifl5khhgQkkhji/AiQhxAUghAtIAng7QA0hHA/g6QDJi8DvgDQD5gDDLD7QCQCyBFDXIAAJ3g");
	this.shape_116.setTransform(556.7,215.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("AI4nGQg9g0hwgrQjhhUj/A1QiXAfh7CDQh3B/g2CwQg4C2AjCwQAlDDCOCLIAdAZQgkiEAPipQAdlRD8jCQD6jBDjgjQBxgRA/AVg");
	this.shape_117.setTransform(512.5,203.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5E9C5D").s().p("Al2JBQiOiLgljDQgjiwA4i2QA2iwB3h/QB7iDCXgfQD/g1DhBUQBwArA9A0Qg/gVhxARQjjAjj6DBQj8DCgdFRQgPCpAkCEg");
	this.shape_118.setTransform(512.5,203.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("AidAyIDSAFIBpht");
	this.shape_119.setTransform(601.9,287.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AidBlIDRAMIBqjh");
	this.shape_120.setTransform(599.8,271.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("AiTB0IDFgMIBija");
	this.shape_121.setTransform(595.6,262);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AiBByIC9gZIBGjK");
	this.shape_122.setTransform(590.1,253.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1,1,1).p("AhtB0ICtg1IAuix");
	this.shape_123.setTransform(584.8,247.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AhUBvICRhFIAYiY");
	this.shape_124.setTransform(578.3,242);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1,1,1).p("Ag+BlIB1hJIAIiA");
	this.shape_125.setTransform(572.4,237.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("Ag3BVIBwg5IgMhw");
	this.shape_126.setTransform(566.1,233.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("AgvBHIBfg2IgohX");
	this.shape_127.setTransform(560,229.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1,1,1).p("AgfA1IA/gtIg7g8");
	this.shape_128.setTransform(552.7,226.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1).p("AF6F+QgLirhki2QjJlom7gy");
	this.shape_129.setTransform(570.1,260.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#204C1B").s().p("AEGFcQgZgLg1gFQAEAAhUkXQhEiThqh1Qh1h+iMg+QBtAICBBVQBuBLBRBjQBiB4A+B/QBTCpgVB0QgagmgkgOgAC4FMIAAAAIAAAAIAAAAg");
	this.shape_130.setTransform(568.9,264.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(1,1,1).p("Ag9l1QGBBXBoFaIAAFTIkxgiQgKh/hKifQiSk7lAiaIBvgIQCHgCB4Abg");
	this.shape_131.setTransform(575.1,261.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#367033").s().p("AB6FtQgJh/hKifQiSk7lAiaIBugIQCHgCB5AbQGBBXBoFaIAAFTg");
	this.shape_132.setTransform(575.1,261.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(1,1,1).p("AhiBnIB8goIBJil");
	this.shape_133.setTransform(556.1,307.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("AhLBpIB8gTIAbi/");
	this.shape_134.setTransform(548.5,299.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1,1,1).p("AhBBgIBighIAhie");
	this.shape_135.setTransform(542.8,293.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("AA4hVIgGCQIhpAb");
	this.shape_136.setTransform(535.9,287.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(1,1,1).p("AAuhIIAHB8IhpAV");
	this.shape_137.setTransform(528.9,282.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("AArg7IgHBiIhOAV");
	this.shape_138.setTransform(521.2,277.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(1,1,1).p("AATgqIAOBHIhBAO");
	this.shape_139.setTransform(512.3,271.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1,1,1).p("AFjEhQhIhsh7h+Qj3j7kLhc");
	this.shape_140.setTransform(530.5,294);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#204C1B").s().p("ABPhOQiDhlhVgrQiJhHhuALQB0ggC5BQQCGA7CHBlIBvBSQBMA/ALAqQAIAhgcBAQgaA+AGAUQhKjji/iPg");
	this.shape_141.setTransform(535,293.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1,1,1).p("AilhzQDyDnBODIIAsgFQA0gIApgTQCCg6giiIQg+hXh8hcQj0i7krgmIg1AGIBEA1QBUBEBNBIg");
	this.shape_142.setTransform(534.5,296.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#367033").s().p("AilhzQhNhIhUhEIhEg1IA1gHQErAmD0C8QB8BcA+BWQAiCJiCA6QgpASg0AJIgsAFQhOjIjyjng");
	this.shape_143.setTransform(534.5,296.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1,1,1).p("AB7hRIhJCkIirAA");
	this.shape_144.setTransform(575.1,297.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1,1,1).p("ABthSIhJCYIiQAN");
	this.shape_145.setTransform(570.4,288.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1,1,1).p("AhpAxICXAVIA8iL");
	this.shape_146.setTransform(564.1,281.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(1,1,1).p("ABShBIgvCDIh1gH");
	this.shape_147.setTransform(559.2,273.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1,1,1).p("AhIAoIB2ANIAbhp");
	this.shape_148.setTransform(553.5,266.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(1,1,1).p("AAxgqIgNBVIhUgh");
	this.shape_149.setTransform(549.2,259.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1,1,1).p("ADaFfQkom7iMkC");
	this.shape_150.setTransform(559.5,272.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#204C1B").s().p("AAKFVQgSgEgqhmQgphrgGgOQgnhZgriWQgriWgWhCQChHJFHCZQgDgBhjAmQhZAkgiAAIgJgBgAD0ENIABAAIgBAAg");
	this.shape_151.setTransform(564.4,276.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1,1,1).p("AgBhoQBcBRBOBNQAvAuA0B4QgVAtgrApQhXBRhrgVQgwhag8iJQh3kPgyjtIBlBpQBvBzA2Atg");
	this.shape_152.setTransform(564.4,274.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#367033").s().p("AAJFuQgvhag8iJQh3kPgyjtIBkBpQBwBzA2AtQBcBRBOBNQAvAuA0B4QgWAtgqApQhFBAhSAAQgVAAgXgEg");
	this.shape_153.setTransform(564.4,274.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1,1,1).p("ABth9IAACyIjZBJ");
	this.shape_154.setTransform(533.2,329.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(1,1,1).p("ABghpIAACkIi/Au");
	this.shape_155.setTransform(523.2,323);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1,1,1).p("ABChpIAGCyIiQAh");
	this.shape_156.setTransform(516.3,317);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(1,1,1).p("AA8hOIgOCKIhpAT");
	this.shape_157.setTransform(507.6,311.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1,1,1).p("AAog7IgIB3IhHAA");
	this.shape_158.setTransform(501,307);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(1,1,1).p("AE7DbQhrgjiGhIQkHiOh9i7");
	this.shape_159.setTransform(516.6,314.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1,1,1).p("AgSA/IAlgoIgfhV");
	this.shape_160.setTransform(513.6,348.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(1,1,1).p("AgSgtIAsBBIgzAa");
	this.shape_161.setTransform(504.3,347.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1,1,1).p("AD1ApQgogdhRgWQihgxjPAd");
	this.shape_162.setTransform(505.6,352);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#204C1B").s().p("ADkBSQg4goihhMQhFgih5hUQh8hVhGgjQDeBfAvANQB8AkDWBtQBqA1AUA+QAJAaACAwIADBnQgfhthzhSg");
	this.shape_163.setTransform(518.8,317.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1,1,1).p("Ah/jNQA8ASChBJQDFBYAzAtQAdAbgDA4QgEA2gfA2QghA4gvAbQg2Afg4gTQhYg3hqhpQjYjPhkj5g");
	this.shape_164.setTransform(521.2,321.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#367033").s().p("ACPExQhYg3hqhpQjYjPhkj5IDwBqQA8ASChBJQDFBYAzAtQAdAbgDA4QgEA2gfA2QghA4gvAbQghATgiAAQgVAAgWgHg");
	this.shape_165.setTransform(521.2,321.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1,1,1).p("AhzAAQCxAeBLBCIBWgnQBQgwghgsQg1glhggPQi9ggjTBog");
	this.shape_166.setTransform(507.2,351.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#204C1B").s().p("AhzAAIikgPQDThoC9AgQBgAPA1AlQAhAshQAwIhWAnQhLhCixgeg");
	this.shape_167.setTransform(507.2,351.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#844419").s().p("Ag4fsQhKgMg8gIQh0gPgDAPQDHzNAilMQAHhGBDnCQAwlaAIkFIAVqfQAUlaAAifIgFhQQAAg3ARgSQAagcBIAIQAnAFBCANQg7gFglBnQgcBMgCBFQgFDOA5DkIAnCdQAUBlgSA4QgIgagMhYQgKhEgXgrQghg+gKghIgHgtQgEgXgQgQQgkAkAJBYQAFAwAPBUQAKCZgGCvQgECTAQBCQAsCpACBHQACA0gIB2QgEBqAWA5QgYgjgIgqQgGgzgJghQgGgbgUgsQgVgvgGgTQgEA3gEBuQgkFZgSD4QgHBhALCwQALC7gEBVQgICrA5CqQAMAiBJCMQA0BoAFBQQAODThcBpQg5BCh4AAQgcAAgigEgAk1fYIAAAAIAAAAg");
	this.shape_168.setTransform(544.6,174.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#9B5729").s().p("AAhfqQiCgNg7gDIlkgLQDHzNAilMQAHhGBDnDQAylaAIkFIAVqfQAUlZAAigIAAifQDmAFAfgBQgnACgjBIQgcA4gHAzQgHAzAbA4QAfA/AGBnQAEBCgKAYQgFAPgQAYQgMAXAHAWQAOArBAAFQA/AFAbgiQAggngFhXQgMhhgDgkQgCgagRhWQgPhHADgqQAGhQA7hJQgGAJADAtIAGA7QABBGAHArIAUBuQAMA/AAAwQABBpAMBJQASBrATAWQAcAgA0goQAtgiAKgmQgIAfgLA9QgXBCgBASQgCAnAGBNQgCAOgLApQgJAfAFAbQALBAgcAvQAFAQANAaQAPAfADAVQARBaAHBPIAKBaQgDAwgHBYQAFBbAABcQAAD2gIA0QgEAWgeA6QgZAyACAbIgZicQgVgIgPg7IgRhOQgUhKADg3IgHAbQgGAmANBBQgEBNhjB0QgVgZAWg9QAchSABgJQACgagJg+QgIg7ADggQABgIgIh5QgBgWAKguQALgsgCgXQgBgbgRhFQgQg7ADgnQACgZAeicQAOhJgOhRQgHgtgehoQgUhHgkgFQhVgMALCUQAKBwAiBOQAIAUANAVQAHAQgHAgQgfClAfBrQAYBSAVCeQASBTgJA8QgXC0hLA2Qg0gcAfiQQAnhigCg1QgOhQAAgsQAEiLhkhDQgSgMAKBAQAEAgAJAiQAFAjgFBPQAEB/gVDOQgHBCgmCpQgbCaApBMQBBAGAZhCQANglAHgRQAMgdAUgKQA0gbAOBUQAMBLgVA0QgKAagoAuQgoAvgKAaQgRAuACBOQABAsAFBUQgXgugJhNQgJhagMgjQg/B0AHDqQAFCCAXDrQAJDFAmB4QA0CqB3BfQg/ArhoAAIgQAAg");
	this.shape_169.setTransform(564.9,175.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1,1,1).p("Ahv/sIJ1AAMAAAA/ZIwLghQDHzNAilMQAHhGBDnDQAylaAIkFQAVqPAAgQQAUlZAAigg");
	this.shape_170.setTransform(565.4,175.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B16933").s().p("AoFfMQDHzNAilMQAHhGBDnDQAylaAIkFIAVqfQAUlZAAigIAAifIJ1AAMAAAA/Zg");
	this.shape_171.setTransform(565.4,175.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#126D18").s().p("AmqF/QBYgSABA1QAAguA1gTQA1gSAaAlQg1heCpgCQgBgtAog0QAsg3AgAzQgagtAVglQAYgkA3AIQgqgsASgwQASg1BAAMQgogIAOhGQAOhEAhgMQg5giAbg1QAag0BDASQgmgwAsgUQAkgQA2AIIACANQgCgSAagLQAbgNAmACQBiAIAABRQgngshEgGQhIgHAYBOQgcgMgVAQQgVAQAXAaQhIgIAGA0QAHA0A7ALQg5gIggAkQgkAlAoArQhHAagNAyQgHAVAHBfQgqgUgbAkQAHAFAJAQQhqA7A1AyQg3gHgaAbQgXAXAHAnQAIAmAgAaQAaAYAjADQgZgBgvgGIn8AaQAMgyBYgSgABnCWQAGAAgGABgACcByIAAgBIAAAAIACADIgCgCgADwhPQAGAAgGABg");
	this.shape_172.setTransform(451.3,369.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0C5B14").s().p("AooGAQBXgSACA1QAAguA0gTQA2gSAaAlQg1heCpgCQgBgtAog0QAsg3AiAzQgdgtAYglQAYgkA3AIQgqgsASgwQASg1A+AMQgmgIAMhGQAOhEAhgMQg3giAZg1QAag0BDASQgngwAsgUQAlgQA2AIIACAMQgFglBRgEQBVgDATAnQAFAMBGgQQBMgSAIABQApALAeAvQAbArACAwQgegugpgYQgzgdgxAVQADATgEArQg1gggnAVQgpAYAqA1QhJhIgqAvQgSATACAgQADAjAYAhQgkgPgiARQgBAOgEAQQgBANAKANQgdgFgJAcQgIAaARAaQgZgGggANQghALgPAWQgZAoAQAgQAJARApAmQgvgKg5AoQgWAQABAMQAAAOAiACQhLAZAMAzQAMAzBOARQCBAbCKgFIvWA3QAMgyBYgSgADAgKIgBAAIABAAIABACIgBgCg");
	this.shape_173.setTransform(463.9,369.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1,1,1).p("AARmWIgBgEAhQlaQAAABAAAAQAFADgDgDQgCgBAAAAgAtSHEQAMgyBYgSQBXgSACA1QAAguA0gTQA2gSAaAlQg1heCpgCQgBgtAog0QAsg3AiAzQgdgtAYglQAYgkA3AIQgqgsASgwQASg1BAAMQgogIAOhGQAOhEAhgMQg5giAbg1QAag0BDASQgngwAsgUQAlgQA0AIIACAMQgFglBRgEQBVgDATAnQADAIAigHQAUgEA1gMQBrgTATA0QAAACApgMQAygNAigBQB2gCgcCLQEshniMMr");
	this.shape_174.setTransform(483.7,369.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#033D0A").s().p("AAAAAIAAAAIAAAAIABABIgBgBg");
	this.shape_175.setTransform(475.7,334.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#D7FFD7").ss(1,1,1).p("EAvtghlMAAABDLMhfZAAAMAAAhDLg");
	this.shape_176.setTransform(306.7,194.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#3DADEF","#095885"],[0,1],-16.1,-304.8,16.2,304.9).s().p("EgvsAhmMAAAhDLMBfZAAAMAAABDLg");
	this.shape_177.setTransform(306.7,194.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FBE9FF").s().p("AAAAZQAAgNgNgZIgNgZIAVAXQAUAXgBALQgBATAPgCQgJADgGAAQgNAAAAgOg");
	this.shape_178.setTransform(197.3,302.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D19369").s().p("AgKBBQAZgxACgMQAEgLACgNQACgeAAgtQAFAigHApIgDAjQgKBJgkAmQgEgYAUglgAARh8IAIAOIAAAPQgCgQgGgNg");
	this.shape_179.setTransform(36.3,19.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#844419").s().p("AAJCzQAHgjAAgRQAAgegQgjQgbg2gBgEQgmhoBNhkIAFgjIAHAUIgMAPQgGAngKA4QgIBHAcA7QAYA0ADA2QADBIgqAhQgBgVAHgkg");
	this.shape_180.setTransform(576.9,118.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(1,1,1).p("AnhEIQgVANgSgLQgSgKgFgdQgmAbg5AJQg8AJgsgQQg2gVgVgpQgSg2gPggQgig7gOgbQgagrgGg5QgRiLAShGQC7glEQgBQCbAAE1AHIH4AAQA8AACaAIQBkACA+gNQAQAIAKAGQAlAZACAvQACAtgaAWQgaAYgsgJQAFALgCAaQghADgQgJQgEBFg3gPQgygNgcgvQAKApgSAVQgRAWghgZQAJBFhGABQhBACgpgpQAEAQgFAfQgagLgIgIQADA5hJACQhDACgmgfQAJAkgXAQQgXAPgdgYQAIByhWAVQhPAThRg+QgKAnglACQglADgMgnQAHAiggAnQgjArglgSQAPAigZAYQgXAVgtAEQgsADglgSQgpgVgLgpIABAAQgBgGgBAGQAAAAABAAgANqlBQAYgFASgHAM0lUQAhALAVAI");
	this.shape_181.setTransform(89.2,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_33,p:{x:69,y:141.4}},{t:this.instance_32,p:{x:109.8,y:240.5}},{t:this.instance_31,p:{x:285.7,y:158.5}},{t:this.instance_30,p:{x:414.1,y:172.1}},{t:this.shape_10,p:{x:408.9,y:136.8}},{t:this.shape_9,p:{x:408.9,y:136.8}},{t:this.shape_8,p:{x:413,y:155.4}},{t:this.shape_7,p:{x:408.4,y:136.9}},{t:this.instance_29,p:{x:184.3,y:337.9}},{t:this.shape_6,p:{x:179.5,y:302.8}},{t:this.shape_5,p:{x:179.5,y:302.8}},{t:this.shape_4,p:{x:183.5,y:321.4}},{t:this.shape_3}]},2).to({state:[]},15).to({state:[{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_181},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_180},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_179},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_33,p:{x:87.4,y:141.1}},{t:this.instance_32,p:{x:128.1,y:240.2}},{t:this.instance_31,p:{x:304.1,y:158.2}},{t:this.instance_30,p:{x:432.4,y:171.8}},{t:this.shape_10,p:{x:427.3,y:136.5}},{t:this.shape_9,p:{x:427.3,y:136.5}},{t:this.shape_8,p:{x:431.4,y:155.1}},{t:this.shape_7,p:{x:426.7,y:136.6}},{t:this.instance_29,p:{x:202.7,y:337.6}},{t:this.shape_6,p:{x:197.8,y:302.5}},{t:this.shape_5,p:{x:197.8,y:302.5}},{t:this.shape_4,p:{x:201.9,y:321.1}},{t:this.shape_178}]},8).wait(44));

	// Clouds
	this.instance_34 = new lib.cloud("synched",0);
	this.instance_34.setTransform(566.8,89.9,0.2,0.2);

	this.instance_35 = new lib.cloud("synched",0);
	this.instance_35.setTransform(239.8,84,0.2,0.2);

	this.instance_36 = new lib.cloud("synched",0);
	this.instance_36.setTransform(494.3,18.5,0.8,0.8);

	this.instance_37 = new lib.cloud("synched",0);
	this.instance_37.setTransform(67.3,17.3,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]},17).to({state:[]},8).wait(44));

	// Sky
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#44B7FB","#05527E"],[0,1],-1,-154.2,-1.2,144.2).s().p("Egu0AWsMAAAgtXMBdpAAAMAAAAtXg");
	this.shape_182.setTransform(299.7,254.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#E0F3FE","#82C9FD"],[0,1],0,-61.1,0,61.4).s().p("Egu0AJjIAAzFMA2+AAAMAisAAAICMAAIBQAAIAjAAIAATFg");
	this.shape_183.setTransform(299.7,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_183},{t:this.shape_182}]},17).to({state:[]},8).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
