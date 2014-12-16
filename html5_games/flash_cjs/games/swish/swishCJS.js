(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/applausewav.mp3", id:"applausewav"},
		{src:"sounds/beepwav.mp3", id:"beepwav"},
		{src:"sounds/buzzerwav.mp3", id:"buzzerwav"},
		{src:"sounds/swishwav.mp3", id:"swishwav"}
	]
};



// symbols:



(lib.wrongtryagain = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Try again", "bold 36px 'Comic Sans MS'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 202;
	this.text.setTransform(94,-12);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-15,216,82);


(lib.wrongsorry = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("SORRY!", "bold 36px 'Comic Sans MS'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 183;
	this.text.setTransform(78.5,-6);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-9,197,64);


(lib.userInput = function() {
	this.initialize();

	// Layer 1
	this.qTxt = new cjs.Text("", "bold 14px 'Arial'", "#CCCCCC");
	this.qTxt.name = "qTxt";
	this.qTxt.textAlign = "center";
	this.qTxt.lineHeight = 16;
	this.qTxt.lineWidth = 204;
	this.qTxt.setTransform(125.4,3.1,1.184,1.463);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzyC3MAnlAAAIAAltMgnlAAAg");
	this.shape.setTransform(126.8,89.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("AzyC3IAAltMAnlAAAIAAFtg");
	this.shape_1.setTransform(126.8,89.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ATzi2MgnlAAAIAAFtMAnlAAAg");
	this.shape_2.setTransform(128.8,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#575757").s().p("AzyC3IAAltMAnlAAAIAAFtg");
	this.shape_3.setTransform(128.8,18.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.qTxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,257.5,110.1);


(lib.scoreTextstatic = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.141)","rgba(255,255,255,0.082)"],[0,1],0,6.8,0,-6.7).s().p("AiCBDIAAiFIEFAAIAACFg");
	this.shape.setTransform(20.4,13.7);

	// Layer 1
	this.timerText = new cjs.Text("", "26px 'Arial'", "#BB4444");
	this.timerText.name = "timerText";
	this.timerText.textAlign = "center";
	this.timerText.lineHeight = 28;
	this.timerText.lineWidth = 33;
	this.timerText.setTransform(17.7,8.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADIiSIg5AAIAAhVIgwAAIAABVIi/AAIAAhVIgwAAIAABVIg3AAIAAAaIAAFgIFxAAIAeAAgAhshdIA8AAIDCAAIAAEaIjCAAIg8AAIgkAAIAAkag");
	this.shape_1.setTransform(20.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#373737","#5E5E5E","#000000"],[0,1,1],-40.4,-15,-40.4,15.2).s().p("AhgCOIAAkbIDBAAIAAEbg");
	this.shape_2.setTransform(25.2,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#373737","#5E5E5E","#000000"],[0,1,1],2.3,-15,2.3,15.2).s().p("AgdCOIAAkbIA7AAIAAEbg");
	this.shape_3.setTransform(12.5,19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#373737","#5E5E5E","#000000"],[0,1,1],56.1,-15,56.1,15.2).s().p("AgRCOIAAkbIAiAAIAAEbg");
	this.shape_4.setTransform(7.7,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.161)").s().p("Ai3DNIgfgeIFwAAIAdAAIAAl7IAhA7IAAFdIiYAAIAAABg");
	this.shape_5.setTransform(22,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262626").s().p("AgsCnIAAgBIg9gBIAAgCIhFAAIADlJIBCABIAAABIEYAAIgCFLgAiNCPIAkAAIA9AAIDAAAIAAkaIjAAAIg9AAIgkAAg");
	this.shape_6.setTransform(20.1,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F2F2F").s().p("ACqDoIAAgTIAClKIkYgBIAAgBIhCgBIgYAAIAAgaIA2AAIAAhVIAwAAIAABVIDAAAIAAhVIAvAAIAABVIA4AAIAAF6g");
	this.shape_7.setTransform(20.4,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("Ai4CxIAAlhIAZAAIgDFJIBFAAIAAACIA8ABIAAABIDaABIAAATg");
	this.shape_8.setTransform(18.9,20.3);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.timerText,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,-9.6,44.2,51.1);


(lib.scorebg = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.141)","rgba(255,255,255,0.082)"],[0,1],0.1,6.8,0.1,-6.7).s().p("AoMBDIAAiFIQZAAIAACFg");
	this.shape.setTransform(59.6,13.7);

	// Layer 1
	this.pointCounter = new cjs.Text("", "26px 'Arial'", "#8EACD7");
	this.pointCounter.name = "pointCounter";
	this.pointCounter.lineHeight = 28;
	this.pointCounter.lineWidth = 98;
	this.pointCounter.setTransform(8.3,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AnriRIAAhWIgwAAIAABWAIaiSIAAhWIgwAAIAABWAIdC+Iw4AAIAAkaIQ4AAgAoeiRIg0AAIAAAaIAAFgISHAAIAeAAIAAl6Ig3AAAHoiRIvQAA");
	this.shape_1.setTransform(59.5,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#373737","#5E5E5E","#000000"],[0,1,1],3.9,-15,3.9,15.2).s().p("AobCNIAAkZIQ3AAIAAEZg");
	this.shape_2.setTransform(59.6,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.161)").s().p("ApiDWISHAAIAdAAIAAl6IAhA7IAAFdIykAAgAAtjyIAAgBIAAABg");
	this.shape_3.setTransform(61.1,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("ApDCwIAAlfIAZAAIgDFIIRxAEIAAATg");
	this.shape_4.setTransform(58,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F2F2F").s().p("AI1DpIAAgTIAClLIxwgCIgZAAIAAgaIA0AAIADAAIAAhWIAwAAIAABWIADAAIPQAAIgBgBIAEAAIAAhWIAvAAIAABWIACAAIAAABIA2AAIAAF6g");
	this.shape_5.setTransform(59.5,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262626").s().p("Ao5CiIADlIIRwADIgCFKgAoYCPIQ3AAIAAkaIw3AAg");
	this.shape_6.setTransform(59.2,19.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.pointCounter,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-9.6,123.2,50.7);


(lib.submit_btn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D7A1C").s().p("AhtAVIAzgnIAqA8IBZiXIAlAYIiHDDg");
	this.shape.setTransform(0.6,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkBhQgqgoAAg5QAAg3AqgpQAqgoA6AAQA7AAAqAoQAqApAAA3QAAA5gqAoQgqAog7AAQg6AAgqgog");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah4h0QAygxBGAAQBHAAAyAxQAzAwAABEQAABFgzAxQgyAwhHAAQhGAAgygwQgzgxAAhFQAAhEAzgwg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AAA7A2").s().p("Ah4B1QgzgxABhEQgBhDAzgxQAzgxBFAAQBHAAAyAxQAzAxgBBDQABBEgzAxQgyAxhHAAQhFAAgzgxg");

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,204,102,0)").s().p("AoaDcIAAm3IQ2AAIAAG3g");
	this.shape_4.setTransform(34,0.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-21.1,108,44);


(lib.shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.69)").s().p("AiBA7Qg2gZAAgiQAAghA2gZQA2gYBLAAQBMAAA2AYQA2AZAAAhQAAAig2AZQg2AYhMAAQhLAAg2gYg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-8.3,36.9,16.7);


(lib.playagain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play again?", "bold 20px 'Comic Sans MS'", "#A05B29");
	this.text.lineHeight = 22;
	this.text.lineWidth = 269;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A1dCvIAAlcMAq7AAAIAAFcg");
	this.shape.setTransform(136.4,16.3);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.2,275,35);


(lib.playgame = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play the Game", "28px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 380;
	this.text.setTransform(-186.9,-18.8);

	this.text_1 = new cjs.Text("Play the Game", "28px 'Arial'", "#834A21");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 380;
	this.text_1.setTransform(-185,-17.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A+IC5IAAlwMA8RAAAIAAFwg");
	this.shape.setTransform(-186.9,-0.1);

	this.addChild(this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-379.8,-18.8,388.9,40.1);


(lib.overlay = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Egu3AfQMAAAg+fMBdvAAAMAAAA+fg");
	this.shape.setTransform(300,200);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,400.2);


(lib.mascotarm = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("AAZA6QABgIAEgCIAAAGQAIgLASgBQgLgCACgJQAIABAFgCQgLgEADgHQABgEAIgJQgGAAgEgFQgEgDAFgFQgHAAgDgDQgDgEAEgFQgEAAgFgFQAGgJAGgEQgJADgFABQgJABADgIIAAAAQgGgFANgMQgOAFgCAAQAAgEACgDQgGAEgDgGQgBgDAAgDQABgEADgCAAAA8QAGADAJAFQgLgHACgJQADgIAOAAQgCADACAFQABAEABACQAAACgBABAgcg2QADAGgWAGQABAAAEAEQgHADgHgDQAJAEgBADQgBACgEAJQACAAAGgCQAFgBADACQgDAEgFAFQgEAEAAAHIABgDQABAJgFACQAEgCAFACIgEADQAFgCAEAEQAEADgCAFQAHgFgCALQgCAOADADQgCgGAJgEQgCANABAGQADgHAGgBQABAFgCALQABgGAFgDQABAFgDAJQAGgFADgDQAEgEAAgFQABAGgCAGQAAAAAAABIAAAAQAAgBAAgCQAAABAAABAgcg2QgDgBgDgEAAJhDQAAAAgBABQgFAEgCgDQAEAGgLABQgLAAgDgFQACAHgFACQgCABgDgB");
	this.shape.setTransform(-2.2,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAA8QAAgGAAgGQAAAFgFAEIgJAIQADgJgBgFQgFADgBAGQACgLgBgFQgGABgDAHQgBgGACgNQgJAEACAGQgDgDACgOQACgLgHAFQACgFgEgDQgEgEgFACIAEgDQgFgCgEACQAFgCgBgJIgBADQAAgHAEgEIAIgJQgDgCgFABIgIACIAFgLQABgDgJgEQAHADAHgDIgFgEQAWgGgDgGQADABACgBQAFgCgCgHQADAFALAAQALgBgDgGQABADAFgEIABgBQAAADABADQADAGAGgEQgCADAAAEIAQgFQgNAMAGAFIAAAAQgDAIAJgBIAOgEQgGAEgGAJQAFAFAEAAQgEAFADAEQADADAHAAQgFAFAEADQAEAFAGAAQgIAJgBAEQgDAHALAEQgFACgIgBQgCAJALACQgSABgIALIAAgGQgEACgBAIIgCgGQgCgFACgDQgOAAgDAIQgCAJALAHIgNgIgAgCA9QAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIACACIAAABgAAAA8IAAAAg");
	this.shape_1.setTransform(-2,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,3).p("ADFh/QgCgYgMgTQgXglgxAbQgOAQgHAbQgNAqgrA2QhTBqiRBAIAdA+QDJhRCHi9");
	this.shape_2.setTransform(18,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C5635").s().p("AjDCBQCRg/BThrQArg2ANgpQAHgbAOgQQAxgbAXAlQAMATACAXIgaAxQiHC8jJBRg");
	this.shape_3.setTransform(18.1,-15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,0,0,3).p("AhvABQAhg1AugSQAXgKAOACQAqAIAzgIIAUA+QgLATgfAGIgdACQgHAsgOAGQgHADgGgGQgFgRAHgZIAIgUIgEAFQgQgGgKASQgGAKgDAMQgQAngRAEQgJADgFgGQgGgPAagxIAbgsIgLAQQgCgIgMAEIgKAFQgTAUgUATQgcAMABgQg");
	this.shape_4.setTransform(-15.4,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6C5AB").s().p("Ag/BLQgGgPAagxIAbgsIgLAQQgCgIgMAEIgKAFQgTAUgUATQgcAMABgQIAGgSQAhg1AugSQAXgKAOACQAqAIAzgIIAUA+QgLATgfAGIgdACQgHAsgOAGQgHADgGgGQgFgRAHgZIAIgUIgEAFQgQgGgKASQgGAKgDAMQgQAngRAEIgFABQgFAAgEgEg");
	this.shape_5.setTransform(-15.4,7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,0,0,3).p("AAagIQgNgDgNAAQgZABAFAMIAAAEQADADAJAD");
	this.shape_6.setTransform(-21,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6C5AB").s().p("AgWAFIAAgDQgFgMAbgBQALABANACIgiAUQgJgDgDgEg");
	this.shape_7.setTransform(-20.8,1.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.2,-35.2,67,51.8);


(lib.mascot_pic = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("Ag/AQQAWgfAsABQAwAAANAk");
	this.shape.setTransform(-16.5,-72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,0,0,3).p("Ag4APQAZgfAhABQAjABAVAj");
	this.shape_1.setTransform(-35.8,-73.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,3).p("AAziCQA6AVAZBNIAEASQAEAUgDAWQgJBEhIAiQgdAJgjgCQhJgCgpgxQgCgEgBgGQgDgMAGgKIAJgLQAMgJAQAIIASAJQAUAJATAFQA5AOANgmQAHgcgEgYQgIg1g2AHQgoACgrAiQgPAMgLgGQgJgFgEgQQgEgPADgOQADgQAJgEIAmgYQAugZAqgBIAPgCQATABARAGg");
	this.shape_2.setTransform(19.5,-52.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6C5AB").s().p("AgGCJQhJgCgpgxIgDgKQgDgMAGgKIAJgLQAMgJAQAIIASAJQAUAJATAFQA5AOANgmQAHgcgEgYQgIg1g2AHQgoACgrAiQgPAMgLgGQgJgFgEgQQgEgPADgOQADgQAJgEIAmgYQAugZAqgBIAPgCQATABARAGQA6AVAZBNIAEASQAEAUgDAWQgJBEhIAiQgZAIgeAAIgJgBg");
	this.shape_3.setTransform(19.5,-52.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,0,0,3).p("ACvBCQgFAKADANQAEgFAKgKQgBACgBAXQABABACAAQAIgMACgFQgBAEgBALQAKgNADgHQgBAIACARQAIgNACgHQAAAHACAPQAIgNACgGQgBAHAEAUQAEgOABgEQABAIAFAKIAEgJQACAEAIAOQAGgJABgFIACAKQAIAAAKgHQAFgEAKgIQABADAFAIQAIgDARgSQgDghACgKIgFADQADgIgCgRIgDAGQgDgOgBgGQgIAFgDADQgBgKABgFQgKAEgDADIgRgKIATgGQgIAAgUgDQACgCAHgKQgOAEgGgRQgQAPgBADQgDgMgBgGQgLAFgEAFQgEgKgBgGQgFAGgBABQgCgKgTgIQgWgIgIgDQAAAGgBAIQgOgYgFgHQgBgEgCgHQgNAUgCAMQAAgDABgLQgUAMgKAFQABgBABgGQgDAFgCACQgBgNAAgFQAAAAgKAFQACgFABgGQABgJAAgCQgLAEgFADQAEgFABgKIgWgCQgEAGgCAFQgHgIgCgDQAAASAAADQgCgOgJgCQgKgBgHANQgYgTgEgCQABAGABAJQgMgMgDgGQgFAIgRAIQABgLACgDQgEACgWAKIADgIQAAABgFAAQAIgOgHgDQgGgDgMAKQABgIABgCQgCAAghAJQgSAGgIgGQgCgBgBAAABoAgQAAAFADAEQABADAEAHQALgIAHgPQABAHAHALQAHgKACgFQAAABACAXQAEgFAHgJQgBAHADAQQAGgMABgEQAAAOgFAPQAIgHADgEACxA+QgBACgBACACOhPIABAHIgDgJQABABABABgAiehxQgJAGgEAFQgLgDgNAJQgBgLABgFQgCAAgHAGIABgMQgOAOgSAIQgXAMgMgKQACADAFAKQgNgBgFgBQAGAGABANQgJgCgFgCQALAFABAHQACAIgKAFQAAABACAGQgGABgEABQgFAGgDABQgEABgJgDQACADAEAIIgNgFQACACALAMIgQAJQAGgBAKAAQgBABgIAGQABAAADgBQADgBAAACIAEgFQgIALgDAFQAOgOALgDQgHAKgEAFQAPgQANgHQgBAFgEALQACgCADgFQAAAHACAOQAFgQASgIQgBACgBAKQAPgPABgDQgBAFAAALQADgDAVgHQAEAPAngMQAUAAAIgFQgCAIgBAEQAEgEAMgFQgCAEAAALQAEgEAMgKQgCAIACARQANgFAFgRQgBAHAAANQADgEANgOQAAAJAEATQAMgHACgLQABADABADQAHgOABgHQAAAGAJARQAEgPAAgCQACALAIAEQAEgLABgDQAAAFAEAJQAFgJACgFQgBAHABAOQAFgGAKgPQgBACgGAMQAVgPABgBQgJARgEAFQAVgPAGgDQACAOALAEQAGACACgEQAAABABABQAEAGAJABQgBgJgCgFQAGAQAMALQAHgQAAgHQABAYAMAFQAEgOAAgHAiehxQAAgBgBgBQAGABAAgBQAAACgCACQgDADgEAEQAFgGgBgCgAg/APQABgHgCgIAipABQgCAAgBAAQAGgBAMgDQgIADgHABgABoAdQAAACAAABAAzAZQgCgGACgG");
	this.shape_4.setTransform(-14.5,-73.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AD2BoIgEAIQgFgKgBgIIgGATQgDgUAAgIQgCAHgHANQgDgPAAgIQgBAIgIANQgDgSABgHQgCAGgLANIACgPIgJASQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgWABgDIgNAPQgEgNAFgKIgKAMQAFgQAAgOIgHARQgDgQABgIIgLAPIgDgYQgCAFgHAJQgHgLAAgHQgHAPgMAJIgFgKQgCgFAAgEQgBAHgDAOQgNgFAAgYQgBAHgGAQQgNgMgFgPIACAOQgJgBgEgHIgBgCQgCAEgGgCQgLgDgCgPIgZASQADgFAJgQIgWAQIAJgOIgRAVQgCgPACgGIgHANQgEgIgBgGIgFAPQgHgEgCgLIgEARQgJgRgBgGQgBAHgGAOIgDgHQgCAMgLAGQgEgTAAgIIgRASQAAgNACgHQgGAQgNAFQgCgRACgHIgPAOQgBgLACgEQgLAEgFAEIADgMQgHAGgVgBQgnANgEgQQgVAIgCACIABgQQgBADgPAQIABgNQgRAIgFAQQgDgNAAgHIgEAHIAFgRQgNAIgQAQIAMgPQgMADgOAOIALgRIgEAGQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBABIgEABIAJgHQgLgBgGACIAQgJIgNgOIANAFIgFgMQAJADADgBQAEgBAFgGIAKgBIgDgIQAKgEgCgIQgBgIgKgFIAOAEQgCgMgFgHIASACIgHgNQALALAYgMQARgJAPgOIgBAMQAGgFADgBQgBAFABALQAMgIALACQAEgEAKgGIgCgCIAHAAIgDAEIgCgCQAAADgEAFIAGgGQAJAFASgFIAjgKIgCALQALgKAHADQAHACgIAOIAFAAIgDAIIAZgNQgBAEgCALQARgJAFgHQAEAGALALIgBgOQADABAYAUQAIgNAJABQAKABABAPIABgVIAIALIAGgLIAXACQgCAJgDAGQAEgEAMgEIgCALQAAAHgDAEIALgFIAAASQADgCACgEIgBAGIAdgQIgBANQADgLANgVIACALIAUAgIABgPIAeALQATAJACAJIAFgGQABAFAFALQADgFAMgGIADASQABgDAQgPQAGARAOgDIgJAMIAdACIgTAHIARAKQADgDAJgEIABAOIALgHIAEAUIADgHQACARgDAJIAFgDQgCAKADAgQgSASgHADQgFgHgBgEIgQAMQgJAHgIABIgCgKQgBAEgHAKIgJgSgAidhzIAAAAIAAAAg");
	this.shape_5.setTransform(-14.1,-73.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,0,0,3).p("AAZAAQAAALgHAIQgIAJgKAAQgJAAgHgJQgIgIAAgLQAAgKAIgIQAHgJAJAAQAKAAAIAJQAHAIAAAKg");
	this.shape_6.setTransform(-37.3,-58.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQATQgIgIAAgLQAAgKAIgIQAHgJAJAAQAKAAAIAJQAHAIAAAKQAAALgHAIQgIAJgKAAQgJAAgHgJg");
	this.shape_7.setTransform(-37.3,-58.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,0,0,3).p("AAZAAQAAALgHAIQgIAJgKAAQgJAAgHgJQgIgIAAgLQAAgKAIgIQAHgJAJAAQAKAAAIAJQAHAIAAAKg");
	this.shape_8.setTransform(-19,-57.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQATQgIgIAAgLQAAgKAIgIQAHgJAJAAQAKAAAIAJQAHAIAAAKQAAALgHAIQgIAJgKAAQgJAAgHgJg");
	this.shape_9.setTransform(-19,-57.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,0,0,3).p("AAsglQgJgWgTgFQgSgEgSAQQgRAPgHAbQgGAZAJAWQAJAWATAFQAQAEASgHQAUgIAGgT");
	this.shape_10.setTransform(-36.7,-61.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,0,0,3).p("AgfgtQAOgUASAAQATAAAOAUQAOATAAAaQAAAbgOAUQgOATgTAAQgpAAgHgp");
	this.shape_11.setTransform(-17.5,-60.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,0,0,3).p("AE7g7QgEgmgTgtQgnhYhNgdQhRgmhggBQjDgEhSCxQgeA5AGBDQACAggJAiQgHAdAEAXQAMA6A0AyQBYBUCggLIAVgDQAbgGAdgLQBbgkBEhN");
	this.shape_12.setTransform(-15.4,-59.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhAgZIAEAEIAKAEQANAFAMABQAmAGAXgdIAHALQAIALAOAEQgSABgTAHQgjAKgGAZQgvgjgEgZg");
	this.shape_13.setTransform(-34.3,-43.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjAxQgOgSAAgaQAAgZAOgWQAQgXATAAQAyAAAABFQAAAagQASQgQASgTAAQgUAAgOgRg");
	this.shape_14.setTransform(-17.7,-60.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,0,0,3).p("AAAhBQAyAAAABFQAAAagQATQgQARgTAAQgVAAgOgRQgOgRAAgaQAAgZAPgXQAPgXAUAAg");
	this.shape_15.setTransform(-36.4,-61.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkAxQgOgRABgaQgBgZAQgXQAPgXATAAQAyAAAABFQAAAagQATQgQARgTAAQgVAAgOgRg");
	this.shape_16.setTransform(-36.4,-61.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,0,0,3).p("AgEgFIAJAL");
	this.shape_17.setTransform(-9.5,-23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,0,0,3).p("AALgyQgBgFgCgEQgIAHAAABQgDgFgGgDQABAHgCAFQgFgEgJABQACACADAEQgFACgIAHQACABADACQgEACgBABQADABAEAGQgGACgNAGQACAAADADQgEACgDAFQADAAAHACQgGADgFAJQAFAAABgBQgCAFgEAPQAEgCACAFQAEAGACABQADACAJADQAHACAEAFQAFgGABgDQABAFADALQACgGABgCQADACAFAEIAEgBQAAgQACgEQAFgBgCgGQADgBANgFQgMgPAOgBQgCgGgBgCQADgBAFgCQgBgFgCgCQACABAGABIgDgEQACAAgBgBIgFgKQACAAAFgDQgMgFgEgGQADAAADgCQgBgDgRgGIACgCQgGgEgDAGQAAABAAABIAAAAQAAgBAAgBg");
	this.shape_18.setTransform(-51,-6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgFAsIgGAIQgEgFgHgCIgMgFQgCgBgEgGQgCgFgEACQAEgPACgFIgGABQAFgJAGgDIgKgCQADgEAEgDIgFgDIATgIQgEgGgDgBIAFgDIgFgCQAIgIAFgBIgFgHQAJgBAFAEQACgFgBgHQAGAEACAEIAJgIIADAJQADgFAGAEIgCABQARAGABADIgGACQAEAGAMAGIgHADIAFAJQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIADAFIgIgDQACACABAFIgIADIADAIQgOABAMAPIgQAGQACAGgFABQgCAFAAAPIgEABIgIgGIgDAIIgEgPg");
	this.shape_19.setTransform(-51.1,-6.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,0,0,3).p("AAAAEIABgH");
	this.shape_20.setTransform(-65.5,-9.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,0,0,3).p("AAOAAQgSAIgGgN");
	this.shape_21.setTransform(-60.4,-4.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,0,0,3).p("AgMgEQAKAQARgP");
	this.shape_22.setTransform(-64,-4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,0,0,3).p("AgCAHQAGgHgEgJ");
	this.shape_23.setTransform(12.2,85.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,0,0,3).p("AgNgXQABAGACARQACANAFAFQAHAIAGgDQAGgDgDgN");
	this.shape_24.setTransform(21.3,81.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,0,0,3).p("AgFgpQgBATAEAWQACAcAHAJ");
	this.shape_25.setTransform(19.6,82.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,0,0,3).p("AgDgpQACAcAFA2");
	this.shape_26.setTransform(12.9,83.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,0,0,3).p("AhEgxQAHAFASAEQASADAIAFQALAJARAYQALAMAPAWQAOAQAWgD");
	this.shape_27.setTransform(22.1,84);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,0,0,3).p("AA1g8QgUALgKAcQgFAQgHAfQgHAZgRAEQgZACgPAE");
	this.shape_28.setTransform(10,84.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,0,0,3).p("AgngGQANgKAiACQAmADgHARQgFAOgggHQgdgHgHgK");
	this.shape_29.setTransform(18.5,78.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,0,0,3).p("AAagcQABABAAABQACAOgVAYQgVAbgKgNQgKgMAZgYQAVgYANAGg");
	this.shape_30.setTransform(11.9,80.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,0,0,3).p("Agtg7QAgAMAKBJQADAcAJAEQADABAkAC");
	this.shape_31.setTransform(-15.3,84.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,0,0,3).p("AgRAFQAGgFALgCQAMgCAGAC");
	this.shape_32.setTransform(15.6,78.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,0,0,3).p("AgQAEQAFgBALgEQANgFAEAG");
	this.shape_33.setTransform(15.8,80.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,0,0,3).p("AgKAEQALgHAPAC");
	this.shape_34.setTransform(15.8,82.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,0,0,3).p("AgKAFQAJgGAQgC");
	this.shape_35.setTransform(15.8,83.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,0,0,3).p("Ag8ARQAXgYAjgGQAhgHAfAS");
	this.shape_36.setTransform(17.6,86.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,0,0,3).p("AAAADQACgBgCgH");
	this.shape_37.setTransform(11.5,88.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,0,0,3).p("AAAAKQAAgKACgJ");
	this.shape_38.setTransform(23.9,86.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,0,0,3).p("AgGgjQACALACAaQACAYAIAK");
	this.shape_39.setTransform(18,82.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,0,0,3).p("AgIgkQAIAKADAaQACAPADAb");
	this.shape_40.setTransform(14,82.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,0,0,3).p("AAAgDQAAADACAC");
	this.shape_41.setTransform(12.2,79.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,0,0,3).p("AAFg9QAFAUgJApQgIAvABAP");
	this.shape_42.setTransform(11.8,85.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,0,0,3).p("ABKAQQgRAZg0ATQg5AVgUgcIAQAcIAJAFQANAGAPAAQAuABA0gxIgFgcIAAgEQgEgXgWgiQgXghgVgNABNAMQgCACgBAC");
	this.shape_43.setTransform(18.4,87.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,0,0,3).p("AhGAjQgGgLANgVQAKgQANgIQAbgRAgAGQAeAGAZAX");
	this.shape_44.setTransform(18.3,89.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,0,0,3).p("AADgRQAEgCgFgBQgFALAAAj");
	this.shape_45.setTransform(18.8,75.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,0,0,3).p("AgMgKQAGADAUAT");
	this.shape_46.setTransform(10.3,77.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,0,0,3).p("AgIASQADgqAGgEQASgJgSBG");
	this.shape_47.setTransform(18.6,74.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,0,0,3).p("AgLgLIAWAX");
	this.shape_48.setTransform(10.3,75.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,0,0,3).p("AAXAPQgQgUgXgOQgBADgCAAQAOAVAcAS");
	this.shape_49.setTransform(9.8,76.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,0,0,3).p("AgUgIQABAKAIATQAKgDAWgJQABgKgKgX");
	this.shape_50.setTransform(13.2,73.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,0,0,3).p("AgEAnQgRgRgHgKQgMgPAJgOQALgQAVgDQAXgEAIASQAEAJAAASQgBAMAAAT");
	this.shape_51.setTransform(13.7,74.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,0,0,3).p("AgQhTIADAuQAJA5AVA/");
	this.shape_52.setTransform(15.6,65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,0,0,3).p("AgVhaIAGAyQALA+AbBE");
	this.shape_53.setTransform(7.6,65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,0,0,3).p("AABgIQgDAFACADQAAAFAEAD");
	this.shape_54.setTransform(-22.9,73);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,0,0,3).p("AgLgOQADADAPANQAMAOgRgB");
	this.shape_55.setTransform(-21.2,75.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,0,0,3).p("AgFgKQADACAIAW");
	this.shape_56.setTransform(-20.3,84.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,0,0,3).p("AgZABQAGAAAUgCQATgBAGAG");
	this.shape_57.setTransform(-17.8,86.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,0,0,3).p("AAWgjQgVACgLAdQgMAbAMAP");
	this.shape_58.setTransform(-10.8,82.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,0,0,3).p("AAAAAIABAA");
	this.shape_59.setTransform(-12.6,69.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,0,0,3).p("AgXAOQAGgJARgJQARgKAHAB");
	this.shape_60.setTransform(-15.2,71.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,0,0,3).p("AAIAaQgBgGgIgUQgJgNAFgL");
	this.shape_61.setTransform(-16.9,75.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,0,0,3).p("AgYAkQAagUAJgKQASgUgJgX");
	this.shape_62.setTransform(-18.1,81.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,0,0,3).p("AiAgTQAmAeBGgGQAngDBIgSQAMgDAZgHIgBAZQg4AQg8AJQh2ARgVgpg");
	this.shape_63.setTransform(-20.5,87.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,0,0,3).p("AgLgVQgBABgBABQgHAIgCAJQgBAJAHAIQAGAJAKABQAIABAIgKQAOgQgNgOQgMgOgOAGQgBABgBAAg");
	this.shape_64.setTransform(-12.7,77.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,0,0,3).p("AgZgkQAEAJACAbQADAWAIAJQAIAKANgGQAMgFAEgOQAGgYgYgQQgQgNgUABQgEAAgEAA");
	this.shape_65.setTransform(-17.6,81.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,0,0,3).p("AAggMQgPgIgVALQgWAJgGAPQANAFAXgLQAYgJAGgI");
	this.shape_66.setTransform(-23.2,79.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1,0,0,3).p("AgTgDQASAAASAH");
	this.shape_67.setTransform(-18.1,78.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,0,0,3).p("AgQgHQAWAHAIAK");
	this.shape_68.setTransform(-19,80);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,0,0,3).p("AgQgKQAPAFAUAR");
	this.shape_69.setTransform(-20.7,81.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,0,0,3).p("AgPgLQACgCANALQAOAIACAG");
	this.shape_70.setTransform(-22.5,82.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,0,0,3).p("AAVgeQAEASgRAQQgLAOgVAJ");
	this.shape_71.setTransform(-19,81);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,0,0,3).p("AgZggQAZANAJAMQAPAQgBAc");
	this.shape_72.setTransform(-23,84.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,0,0,3).p("ABBgmQgSAbgmAEQhKAHACAq");
	this.shape_73.setTransform(-26.8,81.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,0,0,3).p("AgMgrQANARAHAaQAIAbgGAS");
	this.shape_74.setTransform(-8.6,80.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,0,0,3).p("AgFABQgBgGAEgCQACgBAEAEQAEAEgCACQgBAFgIAB");
	this.shape_75.setTransform(-11.5,68.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,0,0,3).p("AgYAuQgBgEgNgbQgIgPAJgLQAQgVApgLQAJAjAOAj");
	this.shape_76.setTransform(-14.4,73.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,0,0,3).p("AAhASQgHgRgNgJQgOgOgQAFQgoANBAAY");
	this.shape_77.setTransform(-20.6,75.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,0,0,3).p("AgYhdIgEARQgDAWABAWQAGBGA5A1");
	this.shape_78.setTransform(-17.6,60.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,0,0,3).p("AgWiAIgIAVQgHAaAAAdQACBcBKBX");
	this.shape_79.setTransform(-24.7,61.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,0,0,3).p("AiXgjIAKAGQAMAIAJAOQAbAqgTBTIAVAGQAcAIAdAEQBcAPBRgWQATjSgRg/");
	this.shape_80.setTransform(7.8,42.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,0,0,3).p("AAoipIhLBoQhOBwgPAyIAMAJQAQAMAWAKQBGAgBiAHIAphl");
	this.shape_81.setTransform(-16.9,36.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,0,0,3).p("AhMA9QCChOAVgt");
	this.shape_82.setTransform(-0.8,7.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,0,0,3).p("Aiuj4IAAA9QADBGAOArIAJAjQAJAngDAZIgJAsQgOAzgWAgIAVAKQAeANAmAMQB5AnCnASQgNhhgUhrQgojUgegy");
	this.shape_83.setTransform(4.9,3.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,0,0,3).p("AA1hNQgHAEgIAOQgQAdgGA2QgCAmgVANQgJAEgKgBQgUgCgEgaQgGgyAKgn");
	this.shape_84.setTransform(-5.2,-19.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,0,0,3).p("AhoiSIAwAyIAPABQARACAQAGQACABACABQA5AXAdA8IARAvQAMA1gXAVQgNASgbAHQg4ANgmhgQgIgdAAggQABhAAtgX");
	this.shape_85.setTransform(5.7,-18.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,0,0,3).p("AjCg6QgHgBgIAAQgRgBgJAFQgbAPgYAMIgEAKQAAAKAYgCQAZgHAUgEQAfAVApgFIAMACQAOACALAHQA+AnBPAMQCiAYBliI");
	this.shape_86.setTransform(-41.5,-3.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1,0,0,3).p("AjPBMQgQgJgTAEQgJACgGAEQgVAPgUAMQgUgIAUgXIAZgVQAQgMAcgEQA3gHA6AmQAjAiBTAPQArAHAjAAQBGgGAyguQAZgXALgVQASgmAdggQAOgQAKgIIg1g5");
	this.shape_87.setTransform(-40.8,-17.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,0,0,3).p("AAAAfQgDgMAAgOQgBgaALgJ");
	this.shape_88.setTransform(-46.6,-54.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1,0,0,3).p("AAhheQgRAEgQAOQgfAcAEAxIAAAKQACANAEAMQANAnAiAU");
	this.shape_89.setTransform(-48.9,-55.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,0,0,3).p("AjoiVQAGgLAKgOQATgaAUgMQA+gnAnB4IAEAVQAHgmAWghQArhABIAfIAKAFQANAHANANQArAoAdBOQAMAiASAlQAPAhAEAMQALAlgPBDQgGAggkAt");
	this.shape_90.setTransform(-19.7,-57.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1,0,0,3).p("AAngVQgwAMgRAQQgJAJABAG");
	this.shape_91.setTransform(-32.1,-42.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,0,0,3).p("AhAgMIAKAHQANAFAPAFQAsAQAwgU");
	this.shape_92.setTransform(-29.5,-36.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(1,0,0,3).p("AiYgpIAPAaQAWAbAdAOQBeAuCShv");
	this.shape_93.setTransform(-25.6,-41.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,0,0,3).p("AA0gNQgFANgQAGQgfAQg2gc");
	this.shape_94.setTransform(-36,-45.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(1,0,0,3).p("AhpgqIAAAqQABAHAEAHQANAUAqAEQBtAEAtgf");
	this.shape_95.setTransform(-20.1,-47.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,0,0,3).p("AAaAAQAAAGgIAFQgIAFgKAAQgJAAgIgFQgIgFAAgGQAAgEAIgFQAIgFAJAAQAKAAAIAFQAIAFAAAEg");
	this.shape_96.setTransform(-30.4,-53.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F3F3F").s().p("AgRALQgIgFAAgGQAAgFAIgFQAIgEAJAAQAKAAAIAEQAIAFAAAFQAAAGgIAFQgIAEgKAAQgJAAgIgEg");
	this.shape_97.setTransform(-30.4,-53.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,0,0,3).p("AgvACIAKgDQANgGANgCQAlgGAUAc");
	this.shape_98.setTransform(17.5,-48);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,0,0,3).p("AgpAbIAEgIQAGgKAJgIQAZgYArAA");
	this.shape_99.setTransform(14.8,-51.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E6C5AB").s().p("AhCA0QgLgMgFgkIgCgfIBig7IBGAaIABBDIgSBQg");
	this.shape_100.setTransform(16.4,-52.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BF0000").s().p("AhTAmQgSgDgPgHIgMgHQAJgWAigNQATgHAPgCQA2APBFgOQAigIAXgKQgJAJhQAvQgxAZgtAAQgPAAgOgDg");
	this.shape_101.setTransform(-22.7,-41.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E6C5AB").s().p("Ai+CsQggghgSgrIgMgkIAMiTQANhYAugtQAWgXAVgFQAggKAeA3QAPAcAJAeQAWhTAxgSQAagIAVAHQA5AIAsBJQAWAkAKAjIAlBZQAUAdgEAyQgCAagGATQgGAggWAcQgKAZg0AWIgyASQgvAIgqAAQiBAAhMhPg");
	this.shape_102.setTransform(-21.6,-55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E6C5AB").s().p("AgBBMQgdgdgEgkQgDgVAIgaQAPgyAygLIgLDDQgOgIgMgOg");
	this.shape_103.setTransform(-48.3,-55.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AAAARIgLgOIgBgTIAHABIASAUIgCAMg");
	this.shape_104.setTransform(21.6,82.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AAIgQIgogpQgJgNAWANIAVARQAXANAHAqQAEAWgBATIgQAJg");
	this.shape_105.setTransform(11.4,81.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AAABBQgIgMgCgnIgCgjQACgYAFgOIAFgIQAFgFABAIQABAEgBAFQgFgCgBARQgDAIAAAJIAFASQgCAFAFAjIAHAjg");
	this.shape_106.setTransform(18.7,78.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgVgKQAJgIAMgCQAHgBAFABQAHAJACAXIgiAKg");
	this.shape_107.setTransform(13.3,73.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AgWAGQAFggAegLIAIAbQAHAagIAJIgoANQgEgPACgRg");
	this.shape_108.setTransform(-9.7,82.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AgVgEIAKgRIAGgDIAKABIAOALIAEAMIgMAUIgMAFQgZgMAFgRg");
	this.shape_109.setTransform(-12.6,77.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AguBFIAjgbIAMgfIgEgQQgNgNAAgQQAAggA9gPIABAIIgdAKQgbAOACASQAlBFgXADIgrApg");
	this.shape_110.setTransform(-16.9,77.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AgNAEQgSgMAcgIQAqAcgeAFQgNgGgJgHg");
	this.shape_111.setTransform(-22,75.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgjB8IgKgFIgJgTIgEgOQgFgQAJgtIAKgoIgBgSIgDgLIglgfIgFgPIATAJIAEgFQgEgdAXgJQALgEANABQAVgEAGAaIAEgBIAKgOQAMgCgGAfQgDAQgFAQIASAeQAiAXAUA5IAEAeQg0AwguAAQgPgBgNgEg");
	this.shape_112.setTransform(17.2,84);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AiABQQgDgOAGgPQALgeAngGQA+gJANgSIgEgKQgMgGgJgHQgQgOAUgJIgDgHQgDgIAGgEIAQATIANAGIAMAKIgCgFQgJgcAigRIAOgHQARgIAHAAIAXBGIAQAYQAOAegGAjIABAZQg5AQg8AJQgkAGgcAAQg+AAgOgcg");
	this.shape_113.setTransform(-20.5,79.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#007FFF").s().p("ABSC1QgegFgcgHIgWgHQALgxgFglIgHgbIgpBlQhUgChOgiQgYgLgVgMIgQgLQAohOBHhkIA+hXQBaAmCHAaQBFANAzAGQALAGgDCFQgDCGgGADQguAMg1AAQgjAAgmgFg");
	this.shape_114.setTransform(-3.7,37.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(4,0,0,3).p("AgWiXQArCbABBdQAAAHgCANQAAAMACAI");
	this.shape_115.setTransform(16.6,11.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(4,0,0,3).p("AgPiPQASBEAJBrQAAAHAAAqQAAAfAEAS");
	this.shape_116.setTransform(13,12);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(4,0,0,3).p("AgSgCQARgBAjAH");
	this.shape_117.setTransform(-4.9,7.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(4,0,0,3).p("AgTgfQAEgEAKgRQAFAYAHArQAIAyAFAS");
	this.shape_118.setTransform(-6.1,-0.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(1,0,0,3).p("AABgOQgBAEAAAe");
	this.shape_119.setTransform(-12,-11.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("Ag+glQgUB3A5ACQAgABARgoQAJgUAJguQAGgdAVgn");
	this.shape_120.setTransform(-5.3,-18.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("Ag2h/QgcAggGAtQgHArAPAnQARAvATAVQAbAgAlgKQApgKAggr");
	this.shape_121.setTransform(8.2,-14.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(4,0,0,3).p("Ai1grQAtAXBkAZQBVAXA+AHQA0AGATAD");
	this.shape_122.setTransform(5.5,21.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("ABeEJIhSgPIiBghIhHgeIAbg6QAYg5gIg8QgCgRgEgRIgGgNIgJgoIgKhSIgBg3IAcgYIgGA8QgBAhALAQQAHAIAGACQAiAGALgpQADgNABgQIAAgOQAKgvAOgWQAGgKAFgBIAxAJIgNAIQgvAnASBPQAIAoATAgQAVAjAgABQAPAAAMgHQAmgNAGgnQACgMgBgNIgBgLQAsCSAjEBg");
	this.shape_123.setTransform(5,-0.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6C5635").s().p("Ag6g0IgDgpIBUAFQgBBXAoBYIhKAHQgkhagKg4g");
	this.shape_124.setTransform(11.6,65.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6C5635").s().p("AAKB4IgMgbQhNhfAFhbQACgdAKgYQAIgSADgBIA+AiQgLAvAGAkQAEAlAhAnQAQAVAQAMIgTBpg");
	this.shape_125.setTransform(-21,63.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E6C5AB").s().p("AgrACIAAgYIAHgBQAIAAAIAGQAHAFANgDIAVgFQAQAAAHARQgQANgUAIQgLAGgKAAQgVAAgJgWg");
	this.shape_126.setTransform(-7,-11.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6C5635").s().p("AlaGZIAZg9QBgAwBggMQAZgEAegQQA9gfAZg5IAVgiQAagkAQgKIg5g+IkZmPQAPgzAsgzQBZhjCSAHIAuAEQA4AIAvATQCWA/AHCcIgiCBQgEAagXAjQguBFheAyQgFAAgCACQgEAEAMALIAmAnIAWADQAbAFAXAOQBNAuAXB3IgnBMIiBAAIh8hOQghA1hBAkQg7AfhBAAQhUAAhfg0g");
	this.shape_127.setTransform(-17.6,-43.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E6C5AB").s().p("AA7AqIgiABQgQANgJgVIgJgDQgCAFgGADQgLAFgNgOQgsAPgFgPIADgMIAtgUIADgJIgHACQgMAGgZAQQgUAJAGgXQAOgYAegPQA5gdBOAwIASALIgZA8g");
	this.shape_128.setTransform(-61.5,-8.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,0,0,3).p("AjHhNQgDA3AYAyQAWAxAqAkQAqAkA0AOQA0AQA2gLQA6gLAfgyQAbgugCg8QgDg7gggvQgjgzg5gPQgPgEgBAKQgCALAMACQAyAMAfAsQAcAqADA1QADA0gZApQgbAsg0AKQgwAKgugOQgvgNglggQgmghgUgrQgVgsADgy");
	this.shape_129.setTransform(39.7,34.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6C5635").s().p("AgUCjQg0gOgqgkQgqgkgWgxQgYgyADg3IAXAEQgDAyAVAsQAUArAmAhQAlAgAvANQAuAOAwgKQA0gKAbgsQAZgpgDg0QgDg1gcgqQgfgsgygMQgMgCACgLQABgKAPAEQA5APAjAzQAgAvADA7QACA8gbAuQgfAyg6ALQgWAFgWAAQggAAgegKg");
	this.shape_130.setTransform(39.7,34.9);

	this.addChild(this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-90.8,133.5,189.3);


(lib.hooptarget = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.631)").ss(1,1,1).p("ADahCQBbAcAAAmQAAAnhbAcQhaAciAAAQh+AAhcgcQhagcAAgnQAAgmBagcQBcgcB+AAQCAAABaAcg");
	this.shape.setTransform(31,9.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.9,21.1);


(lib.hoopbasket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,swoosh:6});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(3,1,1).p("AE0hBQANAOABAQQgBAUgWAQQgBABgCABQgZASgsAPQgsAOg6AIQg6AIhDAAQhCAAg6gIQg6gIgtgOQgsgPgZgSQgBgBgBgBQgXgQAAgUQABgQAMgO");
	this.shape.setTransform(-0.4,-16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AizgVQAAABAaAJQAbAKAwAIQAwAKBAAEQBDADBPgL");
	this.shape_1.setTransform(-4.1,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AipAPQABABAZADQAYADAoACQAoADAsgDQAugDArgLQAsgKAggY");
	this.shape_2.setTransform(6.7,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkIgaQABAAAiALQAjAKA5AKQA6ANBGAGQBEAGBIgHQBHgHA/gb");
	this.shape_3.setTransform(-0.8,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AApiZQgBAAgJAXQgKAYgOAqQgMAqgNA2QgOA4gIBC");
	this.shape_4.setTransform(9.2,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgJicQAAABAEAdQADAeADAvQAFAwACA0QADA3gCAz");
	this.shape_5.setTransform(-7.7,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgciuQABABAKAfQALAeAKAzQANAzAIA8QAHA+gFA/");
	this.shape_6.setTransform(-17.3,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AA1iXQAAABgQAkQgQAkgXBEQgZBCgaBg");
	this.shape_7.setTransform(18.3,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEijGQgYALgsAOQgsANg7ALQg7AKhFgBQhGAAhOgSQhNgShPgqQAAAAALAWQALAVAOAkQAPAjAOAsQAOAsAFArQAGAtgIAoQABgBAHgEQAIgFALgCQALgDALAEQAMAEAHAQQABABAHAOQAHANAGAUQAFAUgEASQABgBADgIQAEgJAHgKQAFgKAHgEQAHgEAGAIQAHAMAJAJQAJAJAGAGIAHAFQABgBAIgKQAJgLAMgKQALgLAKgCQAJgBABARIAKAmQAAAAAAgLQgBgLACgMQACgNAHgHQAGgHANAGIARAiQAAgBAFgLQAFgLAIgOQAHgOAJgJQAJgIAIADIANAdQAAAAAHgEQAIgEAKgEQALgEAKgBQAHABAEAHQADAIACALQABAKAAAIQAAAHAAABQAAgBAGgZQAHgYALgpQALgoANgvQAOguAPguQAPguAPgkQAOglAMgSQAAABgYAKg");
	this.shape_8.setTransform(-0.3,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AizgRQAAABAaAIQAbAIAwAGQAwAJBAACQBDADBPgJ");
	this.shape_9.setTransform(-4.1,5.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AipAMQABABAZACQAYADAoACQAoACAsgDQAugCArgJQAsgIAggU");
	this.shape_10.setTransform(6.7,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkIgVQABAAAiAJQAjAIA5AIQA6ALBGAFQBEAFBIgGQBHgGA/gW");
	this.shape_11.setTransform(-0.8,-6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgFh/QgBABAIAXQAKAXA5AvQA5AvhoAdQhmAegIA3");
	this.shape_12.setTransform(14,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAriBQAAABAEAYQAEAZhGAPQhHAPAtA5QAtA6A/BA");
	this.shape_13.setTransform(-13.1,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAgiPQAAAAhDA7QhGA6AXAkQAWAmBMAWQBOAWgGA0");
	this.shape_14.setTransform(-23.4,2.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmh9QgBABAPAiQAOAjADA6QADA9iMA+");
	this.shape_15.setTransform(19.8,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AE7iAQAPgeAMgPQgBABgYAIQgYAJgsAMQgsALg7AJQg7AIhGgBQhEAAhOgPQhNgPhPgiQAAAAALASQALARAOAeQAPAdhWAoQhVAoAFAjQAGAlBgANQBgANAHgEQAIgEALgCQALgCALADQAMADAHAOQABABAHALQAHALAGARQAFAQgEAPQAAgBAEgGQAEgIAGgIQAGgIAHgDQAGgEAGAHQAIAKAJAHQAJAIAGAEIAHAEQAAAAAJgJQAJgIALgJQAKgJAJgBQAJgBACAOIAMAfQAAAAgBgJQAAgJACgKQACgLAGgGQAGgGAOAGIARAbQAAAAAFgJQAFgKAHgLQAIgLAJgIQAJgHAIADIAMAYQABAAAHgEQAHgDALgDQAKgEAKAAQAHAAAEAHQAEAGABAJQABAIAAAHQAAAGAAAAQAAAAAHgVQAGgUBtgyQBugyg8gZQg8gagKgjQgJgiAOgeg");
	this.shape_16.setTransform(-3.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},9).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-24.4,67.5,51.1);


(lib.hoopbackboard = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C4B88").s().p("AgNANQgGgGAAgHQAAgGAGgGQAGgFAHAAQAHAAAGAFQAHAGAAAGQAAAHgHAGQgGAFgHAAQgHAAgGgFgAgGgEQgDACAAACQAAADADACQADADADAAQADAAAEgDQADgCAAgDQAAgCgDgCQgEgDgDAAQgDAAgDADg");
	this.shape.setTransform(79.2,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4B88").s().p("AgNAMQgGgFAAgHQAAgGAGgGQAGgFAHAAQAIAAAFAFQAHAGAAAGQAAAHgHAFQgFAGgIAAQgHAAgGgGgAgGgFQgDAEAAABQAAADADACQAEADACAAQADAAAEgDQADgCAAgDQAAgCgDgDQgEgCgDAAQgDAAgDACg");
	this.shape_1.setTransform(17.5,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AkZCwIAAlfIIzAAIAAFfgAkPCmIIfAAIAAlLIofAAg");
	this.shape_2.setTransform(48.3,35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8D97B").s().p("AgCEnQiuAAjGg0QgKgBgKgIQgUgRgBghIAAl0IAAgBQAJgXAngXQBOgwCcgKIAAgBIEMAAIAAABQCcAKBNAwQAnAXAJAXIAAF1QgBAhgUARIgUAJQjGA0iuAAgAlojkQgmAXgHAUIAAFxQABAcAQANQAHAHAIABIABAAQDHA0CrAAIAFAAQCrAADHg0IABAAIABAAIADgBQAHgCAEgEQAQgOABgcIAAlyIgBgCQgBgEgFgFQgNgQgXgOQhLgtiagMIAAABIkLAAIAAgBQiWALhNAtg");
	this.shape_3.setTransform(48,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404040").s().p("AgDFUQjHgBjng7QgMgDgKgIQgXgTgBgmIAAmuQAKgbAugbQBYg2C1gNIE1AAQCzANBaA2QAuAbAKAbIAAGuQgBAmgXATQgKAIgMADQjmA7jJABgAmhkJQgoAYgMAaIAAGrQABAgATARQAIAHAKACIABAAQDnA8DEAAIAGAAQDFAADog8IAAAAIAAAAIABAAIAEgBQAIgEAFgEQATgPABgiIAAmrIgCgDQgBgDgGgIQgOgRgbgRQhZg2iwgMIAAAAIk1AAIAAAAQiuAMhZA0g");
	this.shape_4.setTransform(48.1,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#899CE1").s().p("AgDFKQjEAAjng8IgBAAQgKgCgIgIQgTgQgBggIAAmrQAMgaAogXQBZg0CugNIAAABIE1AAIAAgBQCwANBZA1QAbARAOASQAGAHABADIACADIAAGrQgBAigTAPQgFAEgIADIgEABIgBAAIAAABIAAAAQjoA8jFAAgAiFklQicAKhOAwQgnAXgJAXIAAABIAAF0QABAgAUARQAKAIAKACQDGAzCuAAIAEAAQCuAADHgzIAUgKQAUgRABggIAAl1QgJgXgngXQhOgwibgKIAAgBIkMAAgAgCEdQirAAjHg0IgBAAQgIgCgHgGQgQgNgBgdIAAlxQANgXAggTQBMgsCXgMIAAABIELAAIAAgBQCaAMBKAtQAXAOANAQQAGAFABAEIABACIAAFxQgBAdgQANQgFAEgGACIgDABIgBABIgBAAQjHA0isAAgAFyCDIABACIAAADIAAABIAAACIACABIABAAIABgCIABAAIABgBIAAABIAAgBIABABIAAAAIABAAIABgCIAAgCIgBAAIAAgBIABgCQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgCAAQgDgEgEAAIgBAAIAAgBQAAgIgIgDIgEgFIgEgCQgKgIAAgJIACgHQACgCAAgDIgCgFQgCgCgDAAIgEAAIgCAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBAAQgDAAgCACIgBABIgDACIAEgBIAAAAIABgBIAAgBIAAABQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIgBgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIACAAIABAAIABAAIACAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBABAAABQABADADAAQAEAAAAgDIgBgCIABABIABABIAAADIgBAFIAAABIgDAAIAAAEIgBAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIAAAAIACABQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIABACIgCACIAAAAIACACQACAEAEAEIgBAAIAAADIABAAIABAAIAAAAIABADIAAABIABAAIAAAAIACACIAAAAIABgBIABABIAAAAIABgCQABABAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAAIABAAIABABQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIACABIABAAIADgCQACADAAAEIAAADIABAAIAAgBIABAAQADAAADAEIAAAAIACAAIABAAIABACIgBAAIgBAAIgBAAIgBABIAAABQAAAAAAABQAAAAAAAAQABABAAAAQABABAAAAIAAAAIAAAAIAAABIAAABIgBAAIAAgBIgBgCQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgBAAIgCACIAAACIABABIgBABIAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgBAAIgBgCIgBABIgFgBQgEgDAAgGIAAgBIgBAAIAAABIAAAEQgCACgEAAIAAAAIAAABIAAAAIAAACIABgBIAAAAIABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIABABIABgBIABAAIAAABIAAABIAAgBIgCAAIgBABIABABIABABIABABIAAABIAAABIgBgBIgCgCIAAgBIAAAAIgBABIgBABIAAAAIABABIgCABIAAgBIAAgCIgCgDIAAAAIgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAIgEgCQgCgBgBgDIADAAIABAAIABABQAIAAAAgHIgBgCQAAgCgLgGIgHgFIABAAIADgBIAAgBIgDABQgCAAgEgDIgBgBIgBgBQgCgCgCAAIgBAAIAAAAIgBACIgEgCIgBgBIgBAAIgBABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIABgBIABAAIgBgBIgBABIgBgBIgBAAIAAgBIABgBIACAAIACgBIgBgBIAAAAIgDgBIgBAAIAAgBIABgBIABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIACABIAGADIABACIAAAAIAQAIIACABIAAABIABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgQgHQgBgEgHgBIgEgEIAAgBIABgFQAHAHAKAAIAFAAIAAAAIABAAIgBgCIgBAAIABABIgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAgBAAIgCgBIgEABIgBACIAAABQgDgBgGgDIgDgEIACgCIgDACIgBAAIABABIgBAFIgDAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAABIACABIgCAAIAAACIAAABIACABIgBACIABABIACABIAAAAIABABQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIACgBQABACAEABQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBABAAQABABABADIABAEIADAGQAFAKAFADQABAGAHACIACAAIACgBIABABIABABIAAACIAAABIABABIADgCIAAAAIABABIAAAAIACABQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIgBgBIAAgBIABgCIgBgBIAAgBIgBAAIgBABQgDgDgCAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAACAEADIAFABIABgBgAFvB0IgCABIgBAAIACACIABAAIABgCIgBgBgAFJBMIABAAIAAgBIgBAAgAk/jZQgFAFAAAIQAAAIAFAFQAGAFAJAAQAIAAAFgFQAHgFAAgIQAAgIgHgFQgFgGgIAAQgJAAgGAGgAEpjbQgGAGAAAHQAAAHAGAGQAGAFAIAAQAIAAAGgFQAGgFABgIQgBgIgGgFQgGgFgIAAQgIAAgGAFgAF3CIIgBgBIABgBIAAAAIABAAIABACIAAAAIgCABgAFlCGIAAgBIABAAIAAABgAF6CEIAAAAIAAgBIABAAIgBACgAFYB8QgGAAgHgNIgEgKIACgBQACADADAAQADAEAFADQAJADABAEIABACQAAAGgHAAgAFqB0QABgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIABAAIABAAIAAAAIgDACgAFgBrIAAgDIAAAAIABAAIAAABIABAAIAAABIgBABgAFFBhIACABIABABIgBABgAE1BZIAAgBIABgBIAAAAIAEACIgCAAIgBABgAFUBZQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAAABIAAABIgBABgAFXBXIgBgCIACAAIgBACgAE2BVIgBAAIAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIADAAIAAABIgCAAIgBABgAFXBUIAAgCIABAAIAAACgAFNBUIAAgBIgBAAIAAABIgEAAIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAABAAIACABIABACIAAAAgAFTBIIAAgBIABABIACgBIAAAAIgBgCIAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAgAFJBEIAAAAIABAAIAAABIACgBIAAgBIAAAAIgBgBIAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBgAk4jHQgDgCABgDQgBgDADgDQAEgDAEAAQADAAAEADQADADAAADQAAADgDACQgEADgDAAQgEAAgEgDgAEwjIQgDgCAAgEQAAgEADgCQADgCAEAAQAEAAADACQAEADAAADQAAAEgEACQgDACgEAAQgEAAgDgCg");
	this.shape_5.setTransform(48.1,33.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.1,68);


(lib.foreigntoolbatbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3C65AA").ss(2.5,1,1).p("AnLiGQg+ABgsAnQgsAoAAA2QAAA3AsAoQAsAnA+ABIOXAAQA+gBAsgnQAsgoAAg3QAAg2gsgoQgsgng+gBg");
	this.shape.setTransform(61,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A4BEFD","#B5E8FD"],[0.173,1],0,-21.5,0,21.5).s().p("AnKCGQg/AAgrgnQgsgogBg3QABg2AsgoQArgnA/gBIOWAAQA9ABAtAnQAsAoAAA2QAAA3gsAoQgtAng9AAg");
	this.shape_1.setTransform(61,13.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,124.5,29.5);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C65AA").s().p("AgehaIA9BaIg9Bbg");
	this.shape.setTransform(6.8,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGh2IADAAIAAAAIASAAIAAABQAsAHAgAbQAsAjAAAwQAAAxgsAjQggAbgsAHIgSABIgDAAgAgiBYIA+hZIg+hbg");
	this.shape_1.setTransform(7.2,13.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.5,14.3,24);


(lib.toolbarstartbuttonbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3C65AA").ss(2.5,1,1).p("ACMhpQgOgdgWAAIjQAAQgVAAgPAdQgPAeAAApIAABFQAAApAPAdQAPAeAVAAIDQAAQAWAAAOgeQAQgdgBgpIAAhFQABgpgQgeg");
	this.shape.setTransform(15.6,13.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#FFFFFF"],[0.173,1],0,-15.6,0,15.6).s().p("AhnCHQgWgBgPgdQgPgdAAgpIAAhFQAAgpAPgeQAPgdAWAAIDPAAQAWAAAOAdQAQAeAAApIAABFQAAApgQAdQgOAdgWABg");
	this.shape_1.setTransform(15.6,13.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,33.7,29.5);


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
	this.text = new cjs.Text("", "14px 'TimesNewRomanPSMT'", "#000066");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 13;
	this.text.setTransform(8.1,3.4);

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABlgsQAAgrgugBQgCAAgBAAIhmAAQgGAAgEAAQgoAEAAAoIAABZQAAAoAoAEQAEAAAGAAIBmAAQABAAACAAQAugBAAgrg");
	this.shape.setTransform(10.2,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.502)").s().p("AAzBZIhlAAIgKAAQgogEAAgoIAAhZQAAgoAogEIAKAAIBlAAIAEAAQAuABAAArIAABZQAAArguABIgEAAg");
	this.shape_1.setTransform(10.2,13.2);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,3.3,22.4,20);


(lib.flashbulb = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA5IiAAOIBlg/IjHhLIDlAbIgDkvIBAEkIBvgmIhTBNIDdBQIjdgbIAFB+IgxhdIgZEOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-34.4,54,68.9);


(lib.Symbol37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAB8QAAgDAUgSQAUgSAHgLIgVgGQgrgLgHgOQgGgOgFgdQgFgaAAgmQAggkApgYQAmgZA3gPQAMAGAJAJQAKAHAMATQglAXgXASIgkAgQAkAPAYAUQAYARAAARQAAAfgrApQgpAqhJAgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-16.5,21.2,33.1);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbC3QgOgGgQg3IgCgGIgigCIgBgvIABgHIAAABQAAgGAUgbQATgbAXgUQATgRAbgPQAegPAKAAQAFAAAEAGIAOASIABAEIACAIIgEAVQgUBegJBnIgZARgAg3hxIAzg+QAJgNA5gOIAMgCIAVAwIg4A0QgRAOgVAPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-20.6,19.1,41.2);


(lib.Symbol35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaDZQgWgRgTgXQgMgYgHgcQgFgaAAgiQAAg0AWhNQAXhPAthnIAYAMIAIgIIA4AcIACBNQgqBlgWBAQgUBCAAAgQAAARAEARQADAQAHANIAKADIAOACQAGAAAKgEIAhgLIAAAWQgGAFgEAHIgFAUIgYAJIgaAFQgegNgXgRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-24.7,18.6,49.5);


(lib.Symbol34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABOCIIgSACIgBAAQgLAAgNgTQgMgUgKgeQgMAOgQAKQgSALgUAGIgPAAQgPAAgOgDQgNgCgOgFQgGgQgCgPQgCgQAAgRQAAgkAGgmQAHgnAOgoQACgIADgDQADgDAEgBIBAgQQACgGAKgCIAXgCIABAAIADgBQADAAAEADQACADAAAEIgHAXQgfBUgRBbQAmgxAshDQANgUAFgDQAEgCAVgGQAVgFARAAQAGAAACADQACADAAAFIgCALQgFA4AAA9IAGB0IglAIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,-16,27.1,32.2);


(lib.Symbol33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADOQgcgSgZgZQgMgLgFgdQgFgfAAgsIACgwIgEADIgNAJIgYgJIgChhIBTgRIAVgnIAXglIAhgRIAVgQIAYgEIAEAAQAGAAADAEQADAFABAGQAAAFgKAhIgPAzIASgBIAIAMIAKAGIAABNQgJAFgDAFQgDAFgDAMQgSAFgMABQgLADgIgBQgMAdgIAoQgIAnAAAkIABAIIAYgVQAOgNAPgVIAUAHIgIAdQgCAKAAAMIACASQgMAUgNALQgNAMgMAAQgLAAgbgTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.8,-22.5,23.6,45);


(lib.Symbol32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABFCXQgPgDgGgNIgghLQgsAmghAVQghAXgHAAQgOAAgGgOQgGgNAAgYQAAgtAYgxQAYgzAug5IAAgBIgBgDIABgHIADgFIAlgiQAHAAAFADIAMAKQAAgBAHgDQALgGADAAQAMAAAVAYQAWAYAVAlQgKAXgEAbQgFAaAAAlQAAA1AKAvIADANQAAAFgEACIgIACgAgtgQQgPAbgIAXIA7g6IgKgng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.8,-16.3,25.7,32.6);


(lib.Symbol31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGCQQgLgGAAgQQAAgTAVglQAVglAhgkIgqgUQgvgZAAglQAAgXAFgUQAEgTAKgBQANAAAtANQArAMAjASQAUAJAIANQAIANAAAlIgDBDQgTARgTAPQgUAOgVAIIAiAYQgcAbgTAIQgRAKgVAAQgWAAgLgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-15.3,19.4,30.6);


(lib.Symbol30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxDUQgUgNAAgQQAAgZAQgkQARgjAagcQAFgHAMgEQAOgEAMAAIADAAIgsgQQgfgKgnAAIgZAAIgSgSIgDglQAAgjAOgeQAMgeAbgRQAZgkAbgTQAYgUAGAAIAIACIAPAGQAEACAEADQACADABAGIAAACIgBAAQATAWAPAXQAOAXAAAIQAAAJgTAWQgTAVgGAAQgIAAgEgKQgCgLABgCIgPAVQgJALgGADQAzAIAjAZQAiAaAAAhQAAAUgPAhQgQAfgZAdQgqAxgRAPQgNAQgKAAQgPAAgVgNgAAACcIADAAQAAACAAgCIACgMIAHgQQAOgcAJgbIgQAfQgMAXgCARQgFAMAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-22.6,25.1,45.2);


(lib.Symbol29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZCDQgMgbgKhaIhGBeIg8gCQgHAAgDgDQgDgEAAgFIAAgGIAUhvIACgFQAHgqAAgIQAAgFgFgFQgFgDAAgJQAAgFADgLIAMgcQAQgHAMgDQAMgDANAAQAYAAALAOQALAPAAAeIgCAlQARgKAZgFQAZgFAVAAQAhAAAOAKQAOALAAAcQAAAVgEArQgEAtAAAZIABAFIAIAEIgCATQgaAOgVAHQgUAHgMAAQgYAAgLgbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-15.8,28.4,31.7);


(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmCEQgLgUAAgmQAAghAFgiQAEggAJgaQgDgCgEgHQgEgGAAgFQAAgIAOgSQAQgRAUgRQAQgMAJgFQAKgEALAAQAlAAAsAeQArAfAAAbQAAAJgJAZQgKAYgSAdQgMAZgTAdQgUAbgSAUQgIAMgYAIQgYAIgUABQgXAAgLgVgAgvAAQAAAQAEAFQADAGAGAAQANAAANgIQALgJAJgKIg3gig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,-15.3,22.9,30.6);


(lib.Symbol27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2DqQgXgCgIgFQgTgPgRg2QgRg3AAg8QAAgVACgLQACgLAGgIQAbgjAjgaQAigaAqgIIhMgCQBvhHBMgeQBNgeAxAAQANAAADAMQAEANAAAcQAAALgFARQgEARgQApQh6AahQAwQhRAugLAoQAOAFAaADQAaAEAwAAQBYAABYgSIASgDQAEAAADACQACACABAFIAAADIgGApQgMAPgRALQgRALgUAGIgCAzQgoATgvAJQgvAIg6AAQghAAgVgDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-23.8,40.8,47.6);


(lib.blackbox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("Egu3gfPMBdvAAAMAAAA+fMhdvAAAg");
	this.shape.setTransform(73.3,47.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.702)").s().p("Egu3AfPMAAAg+dMBduAAAMAAAA+dg");
	this.shape_1.setTransform(73.3,47.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-227.7,-153.7,602,402);


(lib.basketball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AiSAQQABgLAEgMQAIgbAQgIQAQgJAZAMQAHADAqAbQAwAeAXAKQA2AWAxgJ");
	this.shape.setTransform(20.7,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AjagKIAdASQApAWBBADQDLALBjhO");
	this.shape_1.setTransform(21.9,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AiqgYIAIArQAQAtAlAHQAlAGAugfQAxgmAWgNQAegUAtgYQAsgWAHAA");
	this.shape_2.setTransform(20.2,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("ABJjiIgXAKQgbAOgWAVQhHBFgCB2IABAaQADAgALAeQAjBfBcAm");
	this.shape_3.setTransform(16.1,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA3300").s().p("AgIDjIgYgCQgegPgbghQgXgbgHgUQgJgXgJAXQgHAQABAZIgggjQAMgcAKgPQAOgIAAgLQAAgNgcgIIgxgUIgBgoQAEALAbAPQAbAOAIgFQAJgHgEgPQgEgRgWgVQgUgTgEgaIABgXIAWgmQgCA/AYAWQAEAFAFgOQAOgpAKgYQARgpApggIAkgZQAngEAeAHQhLAXgvBIQgnA8AJAYQAFAOARgIQAMgHA0gnQAngdA/gjIA3gcQAQALATAYQgFABgOAGQgbAMgsAeQiBBZgrACQgqABASAYQAPAVBUgKQCHgLBdhFQAKAlgGAgQgtAuh7ACIiGgIQgUgBgBAIQAAAHARAGQAWAHBsA7QBKAgAmgUQgSARgYAPQg6AHhBgoQg8grgKgEQgMgFAFALQACAGAFAGQA7BWBEAEQgSAEgWAAIgMAAg");
	this.shape_4.setTransform(22.1,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF542B").s().p("AjBBtQBmAUBUgXQBYgbAkhYQAihUgWhlQBBBDABBgQAABchABDQhBBDhZAAQhpAAhBhWg");
	this.shape_5.setTransform(24.5,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6634").s().p("AAADkQhaAAhAhDQhAhDAAheQAAhdBAhDQBAhDBaAAQBbAABABDQBABDAABdQAABehABDQhABDhbAAIAAAAg");
	this.shape_6.setTransform(22.1,22.8);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,45.8,47.5);


(lib.banner1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("As3htIZuAAIAADbI5uAAg");
	this.shape.setTransform(215.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#294087").s().p("As2BuIAAjbIZtAAIAADbg");
	this.shape_1.setTransform(215.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AyghtMAlBAAAIAADbMglBAAAg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#294087").s().p("AygBuIAAjbMAlBAAAIAADbg");
	this.shape_3.setTransform(-1.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("As2htIZuAAIAADbI5uAAg");
	this.shape_4.setTransform(-215.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#294087").s().p("As3BuIAAjbIZuAAIAADbg");
	this.shape_5.setTransform(-215.5,0);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-298.9,-12,597.8,24.1);


(lib._swooshmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("swishwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._buzzermp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("buzzerwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._beepmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("beepwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._applausemp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("applausewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.wronganswer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,wrong:8});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_66 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(66).call(this.frame_66).wait(1));

	// Sorry
	this.instance = new lib.wrongsorry();
	this.instance.setTransform(153.2,-36.1,1,1,0,0,0,63.9,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({y:14.9},11,cjs.Ease.get(1)).to({y:3.9},5,cjs.Ease.get(-1)).wait(10).to({alpha:0},10).to({_off:true},1).wait(22));

	// Try again
	this.instance_1 = new lib.wrongtryagain();
	this.instance_1.setTransform(148,-41.1,1,1,0,0,0,83,19.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).to({y:18.4},10,cjs.Ease.get(1)).to({y:6.5},5,cjs.Ease.get(-1)).wait(7).to({alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.scoreTextup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		/* _parent.gotoAndStop("empty");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.scoreTextstatic();
	this.instance.setTransform(21.7,15.9,1,1,0,0,0,21.7,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-44.1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-9.1,43.7,50.6);


(lib.scoreTextdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		/* _parent.gotoAndStop("static");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 2
	this.timerAnim = new lib.scoreTextstatic();
	this.timerAnim.setTransform(21.7,-44.1,1,1,0,0,0,21.7,15.9);

	this.timeline.addTween(cjs.Tween.get(this.timerAnim).to({y:15.9},7).to({y:13.9},2,cjs.Ease.get(-1)).to({y:15.9},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-69.1,43.7,50.6);


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,up:9,down:19,empty:29});

	// Layer 3
	this.timerMC = new lib.scoreTextstatic();
	this.timerMC.setTransform(21.7,15.9,1,0.999,0,0,0,21.7,15.9);

	this.timerMC_1 = new lib.scoreTextup();
	this.timerMC_1.setTransform(21.7,15.9,1,0.999,0,0,0,21.7,15.9);

	this.timerMC_2 = new lib.scoreTextdown();
	this.timerMC_2.setTransform(21.7,15.9,1,0.999,0,0,0,21.7,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.timerMC}]}).to({state:[{t:this.timerMC_1}]},9).to({state:[{t:this.timerMC_2}]},10).to({state:[]},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-9.1,43.7,50.6);


(lib.mascot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mascotarm("synched",0);
	this.instance.setTransform(-27.4,5.5,1,1,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0,x:-23.1,y:9.2},0).wait(5).to({rotation:6.7,x:-27.1,y:5.4},0).wait(5));

	// Layer 3
	this.instance_1 = new lib.basketball("synched",0);
	this.instance_1.setTransform(-61.7,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:17.7},0).to({x:-60.2,y:45.8},4).to({x:-61.7,y:9.7},5).wait(1));

	// Layer 1
	this.instance_2 = new lib.mascot_pic("synched",0);
	this.instance_2.setTransform(3,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-92.8,133.5,189.3);


(lib.hoopmain = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(3,1,1).p("AkzAkQABgBABgBQAEgEAFgEQAZgTAsgMQAtgOA6gIQA6gIBCAAQBCAAA7AIQA6AIAsAOQAsAMAZATQAGAEAEAEQABABABAB");
	this.shape.setTransform(50.2,121);

	this.instance = new lib.hoopbackboard();
	this.instance.setTransform(48.1,83.9,1,1,0,0,0,48.1,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("AmuFKIEhqTAGvFKIlLpx");
	this.shape_1.setTransform(49.6,33);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,96.1,127.2);


(lib.hoop = function() {
	this.initialize();

	// Text
	this.text = new cjs.Text("", "14px 'ArialMT'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 55;
	this.text.setTransform(46.5,71);

	// Net
	this.hoop = new lib.hoopbasket();
	this.hoop.setTransform(50.2,148.5,1,1,0,0,0,-0.4,0.8);

	// Target
	this.hoop_target = new lib.hooptarget();
	this.hoop_target.setTransform(49.9,127.5,1,0.56,0,0,0,30.9,9.6);
	this.hoop_target.alpha = 0;

	// Backboard
	this.instance = new lib.hoopmain();
	this.instance.setTransform(48.1,62.8,1,1,0,0,0,48.1,62.8);

	this.addChild(this.instance,this.hoop_target,this.hoop,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,96.1,174.3);


(lib.foreignbackground = function() {
	this.initialize();

	// bar
	this.instance = new lib.foreigntoolbatbackground("synched",0);
	this.instance.setTransform(61,15,1,1,0,0,0,61,15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,124.5,29.5);


(lib.arrowmc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(7.1,11.2,1,1,0,0,0,7.1,11.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.5,14.3,24);


(lib.startbutton = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("é", "bold 19px 'Comic Sans MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 18;
	this.text.setTransform(13.4,-2);

	// background
	this.instance = new lib.toolbarstartbuttonbackground("synched",0);
	this.instance.setTransform(15.6,13.5,1,1,0,0,0,15.6,13.5);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-2,33.7,31);


(lib.scrollMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrowmc();
	this.instance.setTransform(7.2,11.2,1.004,1,0,0,180,7.1,11.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.5,14.4,24);


(lib.flashbulbs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.flashbulb("synched",0);
	this.instance.setTransform(90.4,26.2,0.434,0.298);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1));

	// Layer 5
	this.instance_1 = new lib.flashbulb("synched",0);
	this.instance_1.setTransform(370.9,8.3,0.434,0.298);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.flashbulb("synched",0);
	this.instance_2.setTransform(124.2,92.2,0.434,0.298);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 3
	this.instance_3 = new lib.flashbulb("synched",0);
	this.instance_3.setTransform(378,-48.4,0.434,0.298);

	this.instance_4 = new lib.flashbulb("synched",0);
	this.instance_4.setTransform(-18,50.6,0.434,0.298);

	this.instance_5 = new lib.flashbulb("synched",0);
	this.instance_5.setTransform(15,50.6,0.434,0.298);

	this.instance_6 = new lib.flashbulb("synched",0);
	this.instance_6.setTransform(262.5,-31.9,0.434,0.298);

	this.instance_7 = new lib.flashbulb("synched",0);
	this.instance_7.setTransform(528.8,-14.7,0.434,0.298);

	this.instance_8 = new lib.flashbulb("synched",0);
	this.instance_8.setTransform(248.3,67.8,0.434,0.298);

	this.instance_9 = new lib.flashbulb("synched",0);
	this.instance_9.setTransform(489.2,54.6,0.434,0.298);

	this.instance_10 = new lib.flashbulb("synched",0);
	this.instance_10.setTransform(95.3,-32.6,0.434,0.298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},2).to({state:[]},1).wait(3));

	// Layer 2
	this.instance_11 = new lib.flashbulb("synched",0);
	this.instance_11.setTransform(370.9,-6.8,0.434,0.298);

	this.instance_12 = new lib.flashbulb("synched",0);
	this.instance_12.setTransform(-25.1,92.2,0.434,0.298);

	this.instance_13 = new lib.flashbulb("synched",0);
	this.instance_13.setTransform(7.9,92.2,0.434,0.298);

	this.instance_14 = new lib.flashbulb("synched",0);
	this.instance_14.setTransform(255.4,9.7,0.434,0.298);

	this.instance_15 = new lib.flashbulb("synched",0);
	this.instance_15.setTransform(521.6,26.9,0.434,0.298);

	this.instance_16 = new lib.flashbulb("synched",0);
	this.instance_16.setTransform(241.1,109.4,0.434,0.298);

	this.instance_17 = new lib.flashbulb("synched",0);
	this.instance_17.setTransform(482,96.2,0.434,0.298);

	this.instance_18 = new lib.flashbulb("synched",0);
	this.instance_18.setTransform(88.1,9,0.434,0.298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[]},1).wait(4));

	// Layer 1
	this.instance_19 = new lib.flashbulb("synched",0);
	this.instance_19.setTransform(420.4,9.7,0.434,0.298);

	this.instance_20 = new lib.flashbulb("synched",0);
	this.instance_20.setTransform(139.9,92.2,0.434,0.298);

	this.instance_21 = new lib.flashbulb("synched",0);
	this.instance_21.setTransform(380.8,79,0.434,0.298);

	this.instance_22 = new lib.flashbulb("synched",0);
	this.instance_22.setTransform(-13.1,-8.2,0.434,0.298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-18.4,456.9,120.9);


// stage content:



(lib.swishCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:14,congrats:28});

	// timeline functions:
	this.frame_0 = function() {
		/* if (_root.MMplayerType == undefined) {
			// --- upgrade not needed
			play();
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
	this.frame_1 = function() {
		/* stop();
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "MatchingGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/swish.xml", "MatchingGame");
		}*/
	}
	this.frame_2 = function() {
		/* stop();
		dispatchEvent ({type:"ready", bubbles:true});
		
		playGame.onRelease = function() {
			gotoAndPlay("game");
		}*/
	}
	this.frame_14 = function() {
		/* stop();
		if (game != undefined) delete (game);
		var game:RunGame = new RunGame(this);
		
		dispatchEvent ({type:"play", bubbles:true, game:game});
		
		submit_btn.onRelease = function() {
			runGame.evaluate();
		}*/
	}
	this.frame_28 = function() {
		/* 
		*/
	}
	this.frame_47 = function() {
		/* stop();
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(12).call(this.frame_14).wait(14).call(this.frame_28).wait(19).call(this.frame_47).wait(1));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAu2gfJMAAAA+TMhdrAAAMAAAg+Tg");
	this.shape.setTransform(299.9,199.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(46));

	// Congrats
	this.instance = new lib.Symbol37("synched",0);
	this.instance.setTransform(506.9,144.3,0.214,0.214,180);
	this.instance.alpha = 0.879;

	this.instance_1 = new lib.Symbol29("synched",0);
	this.instance_1.setTransform(457.1,162.3,0.962,0.962);

	this.instance_2 = new lib.Symbol28("synched",0);
	this.instance_2.setTransform(446.3,172.1,2.134,2.134);
	this.instance_2.alpha = 0.891;

	this.instance_3 = new lib.Symbol36("synched",0);
	this.instance_3.setTransform(456.9,155,2.499,2.499);
	this.instance_3.alpha = 0.691;

	this.instance_4 = new lib.Symbol33("synched",0);
	this.instance_4.setTransform(466.5,142.9,2.1,2.1);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Symbol32("synched",0);
	this.instance_5.setTransform(455.6,140.4,0.967,0.967);
	this.instance_5.alpha = 0.398;

	this.instance_6 = new lib.Symbol35("synched",0);
	this.instance_6.setTransform(422.5,133.5,0.038,0.038);
	this.instance_6.alpha = 0.469;

	this.instance_7 = new lib.Symbol34("synched",0);
	this.instance_7.setTransform(353.6,135.3,0.499,0.499,180);
	this.instance_7.alpha = 0.711;

	this.instance_8 = new lib.Symbol33("synched",0);
	this.instance_8.setTransform(287,149.3,0.095,0.095);
	this.instance_8.alpha = 0.941;

	this.instance_9 = new lib.Symbol32("synched",0);
	this.instance_9.setTransform(250.9,163.4,1.297,1.297);
	this.instance_9.alpha = 0.988;

	this.instance_10 = new lib.Symbol31("synched",0);
	this.instance_10.setTransform(247.3,172.1,2.249,2.249);
	this.instance_10.alpha = 0.871;

	this.instance_11 = new lib.Symbol30("synched",0);
	this.instance_11.setTransform(259.2,186.5,2.48,2.48);
	this.instance_11.alpha = 0.648;

	this.instance_12 = new lib.Symbol29("synched",0);
	this.instance_12.setTransform(265.3,150.9,1.617,1.617);
	this.instance_12.alpha = 0.43;

	this.instance_13 = new lib.Symbol28("synched",0);
	this.instance_13.setTransform(236.5,135.8,0.337,0.337);
	this.instance_13.alpha = 0.43;

	this.instance_14 = new lib.Symbol27("synched",0);
	this.instance_14.setTransform(157.2,140.6,0.5,0.5,180);
	this.instance_14.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14,p:{scaleX:0.5,scaleY:0.5,rotation:180,x:157.2,y:140.6,alpha:0.699}},{t:this.instance_13,p:{scaleX:0.337,scaleY:0.337,x:236.5,y:135.8,alpha:0.43,rotation:0}},{t:this.instance_12,p:{scaleX:1.617,scaleY:1.617,x:265.3,y:150.9,alpha:0.43,rotation:0}},{t:this.instance_11,p:{scaleX:2.48,scaleY:2.48,x:259.2,y:186.5,alpha:0.648,rotation:0}},{t:this.instance_10,p:{scaleX:2.249,scaleY:2.249,x:247.3,y:172.1,alpha:0.871,rotation:0}},{t:this.instance_9,p:{scaleX:1.297,scaleY:1.297,rotation:0,x:250.9,y:163.4,alpha:0.988}},{t:this.instance_8,p:{scaleX:0.095,scaleY:0.095,rotation:0,x:287,y:149.3,alpha:0.941}},{t:this.instance_7,p:{scaleX:0.499,scaleY:0.499,rotation:180,x:353.6,y:135.3,alpha:0.711}},{t:this.instance_6,p:{scaleX:0.038,scaleY:0.038,x:422.5,y:133.5,alpha:0.469,rotation:0}},{t:this.instance_5,p:{scaleX:0.967,scaleY:0.967,x:455.6,y:140.4,alpha:0.398,rotation:0}},{t:this.instance_4,p:{scaleX:2.1,scaleY:2.1,x:466.5,y:142.9,alpha:0.5,rotation:0}},{t:this.instance_3,p:{scaleX:2.499,scaleY:2.499,x:456.9,y:155,alpha:0.691,rotation:0}},{t:this.instance_2,p:{scaleX:2.134,scaleY:2.134,x:446.3,y:172.1,alpha:0.891,rotation:0}},{t:this.instance_1,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:457.1,y:162.3,alpha:1}},{t:this.instance,p:{scaleX:0.214,scaleY:0.214,x:506.9,y:144.3,alpha:0.879,rotation:180}}]},28).to({state:[{t:this.instance_14,p:{scaleX:0.133,scaleY:0.133,rotation:0,x:197.4,y:132.8,alpha:0.461}},{t:this.instance_13,p:{scaleX:1.699,scaleY:1.699,x:235.9,y:151.7,alpha:0.43,rotation:0}},{t:this.instance_12,p:{scaleX:2.469,scaleY:2.469,x:229.9,y:168,alpha:0.641,rotation:0}},{t:this.instance_11,p:{scaleX:2.066,scaleY:2.066,x:215.9,y:187.3,alpha:0.91,rotation:0}},{t:this.instance_10,p:{scaleX:1.061,scaleY:1.061,x:225,y:163,alpha:1,rotation:0}},{t:this.instance_9,p:{scaleX:0.015,scaleY:0.015,rotation:180,x:263.1,y:148.1,alpha:0.922}},{t:this.instance_8,p:{scaleX:0.5,scaleY:0.5,rotation:180,x:327.9,y:138.6,alpha:0.699}},{t:this.instance_7,p:{scaleX:0.079,scaleY:0.079,rotation:0,x:394.7,y:133.9,alpha:0.461}},{t:this.instance_6,p:{scaleX:1.366,scaleY:1.366,x:432.6,y:140.3,alpha:0.41,rotation:0}},{t:this.instance_5,p:{scaleX:2.194,scaleY:2.194,x:435.8,y:156.3,alpha:0.52,rotation:0}},{t:this.instance_4,p:{scaleX:2.471,scaleY:2.471,x:422.8,y:153.2,alpha:0.762,rotation:0}},{t:this.instance_3,p:{scaleX:1.924,scaleY:1.924,x:415.8,y:159.9,alpha:0.941,rotation:0}},{t:this.instance_2,p:{scaleX:0.872,scaleY:0.872,x:429.2,y:160.9,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:0.235,scaleY:0.235,rotation:180,x:478.7,y:143.8,alpha:0.871}},{t:this.instance,p:{scaleX:0.427,scaleY:0.427,x:551.7,y:132.9,alpha:0.609,rotation:180}}]},1).to({state:[{t:this.instance_14,p:{scaleX:1.48,scaleY:1.48,rotation:0,x:204,y:132.1,alpha:0.41}},{t:this.instance_13,p:{scaleX:2.485,scaleY:2.485,x:198.9,y:168.2,alpha:0.66,rotation:0}},{t:this.instance_12,p:{scaleX:2.109,scaleY:2.109,x:186.1,y:172.5,alpha:0.898,rotation:0}},{t:this.instance_11,p:{scaleX:0.773,scaleY:0.773,x:201.7,y:165.5,alpha:1,rotation:0}},{t:this.instance_10,p:{scaleX:0.176,scaleY:0.176,x:243.9,y:145.1,alpha:0.891,rotation:180}},{t:this.instance_9,p:{scaleX:0.49,scaleY:0.49,rotation:180,x:305.6,y:135,alpha:0.66}},{t:this.instance_8,p:{scaleX:0.142,scaleY:0.142,rotation:0,x:367.9,y:133.3,alpha:0.449}},{t:this.instance_7,p:{scaleX:1.417,scaleY:1.417,rotation:0,x:403.3,y:148,alpha:0.41}},{t:this.instance_6,p:{scaleX:2.392,scaleY:2.392,x:402.7,y:153.1,alpha:0.59,rotation:0}},{t:this.instance_5,p:{scaleX:2.436,scaleY:2.436,x:391.2,y:167.6,alpha:0.789,rotation:0}},{t:this.instance_4,p:{scaleX:1.629,scaleY:1.629,x:387.1,y:156.8,alpha:0.969,rotation:0}},{t:this.instance_3,p:{scaleX:0.588,scaleY:0.588,x:407.1,y:153.9,alpha:0.988,rotation:0}},{t:this.instance_2,p:{scaleX:0.285,scaleY:0.285,x:453.2,y:142.8,alpha:0.859,rotation:180}},{t:this.instance_1,p:{scaleX:0.414,scaleY:0.414,rotation:180,x:523.7,y:132.7,alpha:0.602}},{t:this.instance,p:{scaleX:0.536,scaleY:0.536,x:583.8,y:137.6,alpha:0.41,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:2.432,scaleY:2.432,rotation:0,x:171.5,y:139.1,alpha:0.609}},{t:this.instance_13,p:{scaleX:2.046,scaleY:2.046,x:155.9,y:171.7,alpha:0.91,rotation:0}},{t:this.instance_12,p:{scaleX:0.835,scaleY:0.835,x:170.1,y:160.7,alpha:1,rotation:0}},{t:this.instance_11,p:{scaleX:0.333,scaleY:0.333,x:228.2,y:139.2,alpha:0.84,rotation:180}},{t:this.instance_10,p:{scaleX:0.444,scaleY:0.444,x:288.5,y:133.1,alpha:0.621,rotation:180}},{t:this.instance_9,p:{scaleX:0.263,scaleY:0.263,rotation:0,x:343.5,y:134.8,alpha:0.441}},{t:this.instance_8,p:{scaleX:1.491,scaleY:1.491,rotation:0,x:374.1,y:137.7,alpha:0.422}},{t:this.instance_7,p:{scaleX:2.411,scaleY:2.411,rotation:0,x:372.2,y:166,alpha:0.602}},{t:this.instance_6,p:{scaleX:2.27,scaleY:2.27,x:357.5,y:161.3,alpha:0.859,rotation:0}},{t:this.instance_5,p:{scaleX:1.495,scaleY:1.495,x:358.4,y:165,alpha:0.98,rotation:0}},{t:this.instance_4,p:{scaleX:0.268,scaleY:0.268,x:388.8,y:150.8,alpha:0.961,rotation:0}},{t:this.instance_3,p:{scaleX:0.409,scaleY:0.409,x:438,y:142,alpha:0.801,rotation:180}},{t:this.instance_2,p:{scaleX:0.382,scaleY:0.382,x:498.5,y:132.6,alpha:0.578,rotation:180}},{t:this.instance_1,p:{scaleX:0.573,scaleY:0.573,rotation:0,x:555,y:138.1,alpha:0.41}},{t:this.instance,p:{scaleX:1.882,scaleY:1.882,x:576.7,y:154.7,alpha:0.461,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:2.203,scaleY:2.203,rotation:0,x:126.8,y:147.9,alpha:0.879}},{t:this.instance_13,p:{scaleX:0.745,scaleY:0.745,x:142.4,y:159.4,alpha:1,rotation:0}},{t:this.instance_12,p:{scaleX:0.303,scaleY:0.303,x:195,y:142.3,alpha:0.852,rotation:180}},{t:this.instance_11,p:{scaleX:0.34,scaleY:0.34,x:273.6,y:129.9,alpha:0.57,rotation:180}},{t:this.instance_10,p:{scaleX:0.478,scaleY:0.478,x:321.8,y:137,alpha:0.422,rotation:0}},{t:this.instance_9,p:{scaleX:1.624,scaleY:1.624,rotation:0,x:345.4,y:147.7,alpha:0.43}},{t:this.instance_8,p:{scaleX:2.435,scaleY:2.435,rotation:0,x:341.4,y:148.2,alpha:0.609}},{t:this.instance_7,p:{scaleX:2.242,scaleY:2.242,rotation:0,x:327.2,y:173,alpha:0.871}},{t:this.instance_6,p:{scaleX:1.102,scaleY:1.102,x:334.2,y:158.2,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:0.145,scaleY:0.145,x:364.5,y:150.5,alpha:0.949,rotation:0}},{t:this.instance_4,p:{scaleX:0.489,scaleY:0.489,x:426.6,y:140,alpha:0.73,rotation:180}},{t:this.instance_3,p:{scaleX:0.244,scaleY:0.244,x:483.1,y:133.9,alpha:0.531,rotation:180}},{t:this.instance_2,p:{scaleX:0.66,scaleY:0.66,x:527.7,y:138.8,alpha:0.41,rotation:0}},{t:this.instance_1,p:{scaleX:1.912,scaleY:1.912,rotation:0,x:546.8,y:155.5,alpha:0.461}},{t:this.instance,p:{scaleX:2.5,scaleY:2.5,x:536.3,y:170,alpha:0.699,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.982,scaleY:0.982,rotation:0,x:106.6,y:151.4,alpha:1}},{t:this.instance_13,p:{scaleX:0.346,scaleY:0.346,x:169.6,y:141.3,alpha:0.828,rotation:180}},{t:this.instance_12,p:{scaleX:0.367,scaleY:0.367,x:240.3,y:132.5,alpha:0.578,rotation:180}},{t:this.instance_11,p:{scaleX:0.757,scaleY:0.757,x:300.4,y:145.5,alpha:0.398,rotation:0}},{t:this.instance_10,p:{scaleX:1.831,scaleY:1.831,x:316.6,y:153.5,alpha:0.449,rotation:0}},{t:this.instance_9,p:{scaleX:2.47,scaleY:2.47,rotation:0,x:309.8,y:163.1,alpha:0.641}},{t:this.instance_8,p:{scaleX:2.196,scaleY:2.196,rotation:0,x:296.7,y:156.2,alpha:0.879}},{t:this.instance_7,p:{scaleX:1.049,scaleY:1.049,rotation:0,x:305.3,y:163.3,alpha:1}},{t:this.instance_6,p:{scaleX:0.151,scaleY:0.151,x:352.1,y:146.3,alpha:0.891,rotation:180}},{t:this.instance_5,p:{scaleX:0.5,scaleY:0.5,x:404.5,y:136.2,alpha:0.711,rotation:180}},{t:this.instance_4,p:{scaleX:0.019,scaleY:0.019,x:469.2,y:133.5,alpha:0.48,rotation:180}},{t:this.instance_3,p:{scaleX:0.946,scaleY:0.946,x:505.1,y:136.4,alpha:0.398,rotation:0}},{t:this.instance_2,p:{scaleX:1.982,scaleY:1.982,x:516.8,y:156.2,alpha:0.469,rotation:0}},{t:this.instance_1,p:{scaleX:2.5,scaleY:2.5,rotation:0,x:505.8,y:170.6,alpha:0.711}},{t:this.instance,p:{scaleX:1.882,scaleY:1.882,x:495.8,y:170.9,alpha:0.941,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.224,scaleY:0.224,rotation:180,x:127.7,y:146.6,alpha:0.879}},{t:this.instance_13,p:{scaleX:0.327,scaleY:0.327,x:215,y:132.5,alpha:0.559,rotation:180}},{t:this.instance_12,p:{scaleX:0.696,scaleY:0.696,x:268.7,y:139.3,alpha:0.41,rotation:0}},{t:this.instance_11,p:{scaleX:2.055,scaleY:2.055,x:286.6,y:172.9,alpha:0.488,rotation:0}},{t:this.instance_10,p:{scaleX:2.499,scaleY:2.499,x:277,y:169,alpha:0.691,rotation:0}},{t:this.instance_9,p:{scaleX:2.105,scaleY:2.105,rotation:0,x:266.1,y:168.2,alpha:0.898}},{t:this.instance_8,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:276.9,y:155,alpha:1}},{t:this.instance_7,p:{scaleX:0.184,scaleY:0.184,rotation:180,x:324.5,y:144.9,alpha:0.879}},{t:this.instance_6,p:{scaleX:0.455,scaleY:0.455,x:396.3,y:135.4,alpha:0.629,rotation:180}},{t:this.instance_5,p:{scaleX:0.092,scaleY:0.092,x:445.4,y:133.8,alpha:0.461,rotation:0}},{t:this.instance_4,p:{scaleX:1.291,scaleY:1.291,x:481.5,y:136.5,alpha:0.41,rotation:0}},{t:this.instance_3,p:{scaleX:2.181,scaleY:2.181,x:485.9,y:147.3,alpha:0.52,rotation:0}},{t:this.instance_2,p:{scaleX:2.494,scaleY:2.494,x:474.7,y:170.6,alpha:0.73,rotation:0}},{t:this.instance_1,p:{scaleX:1.851,scaleY:1.851,rotation:0,x:465.9,y:171,alpha:0.949}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.421,scaleY:0.421,rotation:180,x:172.7,y:137.5,alpha:0.609}},{t:this.instance_13,p:{scaleX:0.785,scaleY:0.785,x:241.2,y:140.1,alpha:0.398,rotation:0}},{t:this.instance_12,p:{scaleX:2.01,scaleY:2.01,x:256.8,y:157.2,alpha:0.48,rotation:0}},{t:this.instance_11,p:{scaleX:2.483,scaleY:2.483,x:243.5,y:189.7,alpha:0.75,rotation:0}},{t:this.instance_10,p:{scaleX:1.931,scaleY:1.931,x:235.8,y:170.8,alpha:0.93,rotation:0}},{t:this.instance_9,p:{scaleX:0.829,scaleY:0.829,rotation:0,x:250.2,y:158.9,alpha:1}},{t:this.instance_8,p:{scaleX:0.23,scaleY:0.23,rotation:180,x:298.3,y:145.7,alpha:0.871}},{t:this.instance_7,p:{scaleX:0.441,scaleY:0.441,rotation:180,x:369.1,y:132.9,alpha:0.621}},{t:this.instance_6,p:{scaleX:0.441,scaleY:0.441,x:430.5,y:134.6,alpha:0.422,rotation:0}},{t:this.instance_5,p:{scaleX:1.432,scaleY:1.432,x:453.4,y:145.3,alpha:0.41,rotation:0}},{t:this.instance_4,p:{scaleX:2.362,scaleY:2.362,x:453.5,y:146.6,alpha:0.57,rotation:0}},{t:this.instance_3,p:{scaleX:2.442,scaleY:2.442,x:441.4,y:157.7,alpha:0.781,rotation:0}},{t:this.instance_2,p:{scaleX:1.775,scaleY:1.775,x:436.2,y:170,alpha:0.961,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.553,scaleY:0.553,rotation:0,x:204.4,y:131.6,alpha:0.41}},{t:this.instance_13,p:{scaleX:2.075,scaleY:2.075,x:226.6,y:157.9,alpha:0.488,rotation:0}},{t:this.instance_12,p:{scaleX:2.491,scaleY:2.491,x:214.3,y:171.4,alpha:0.73,rotation:0}},{t:this.instance_11,p:{scaleX:1.688,scaleY:1.688,x:206.7,y:181.9,alpha:0.961,rotation:0}},{t:this.instance_10,p:{scaleX:0.595,scaleY:0.595,x:226.8,y:157.3,alpha:0.988,rotation:0}},{t:this.instance_9,p:{scaleX:0.306,scaleY:0.306,rotation:180,x:275.3,y:142.8,alpha:0.852}},{t:this.instance_8,p:{scaleX:0.417,scaleY:0.417,rotation:180,x:343.3,y:135.9,alpha:0.602}},{t:this.instance_7,p:{scaleX:0.49,scaleY:0.49,rotation:0,x:402.2,y:137.3,alpha:0.422}},{t:this.instance_6,p:{scaleX:1.797,scaleY:1.797,x:426.5,y:144.4,alpha:0.449,rotation:0}},{t:this.instance_5,p:{scaleX:2.416,scaleY:2.416,x:422.1,y:161.2,alpha:0.602,rotation:0}},{t:this.instance_4,p:{scaleX:2.31,scaleY:2.31,x:408.1,y:155.5,alpha:0.852,rotation:0}},{t:this.instance_3,p:{scaleX:1.514,scaleY:1.514,x:408.2,y:159,alpha:0.98,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:1.896,scaleY:1.896,rotation:0,x:196.7,y:133.8,alpha:0.461}},{t:this.instance_13,p:{scaleX:2.478,scaleY:2.478,x:183.2,y:171.2,alpha:0.75,rotation:0}},{t:this.instance_12,p:{scaleX:1.743,scaleY:1.743,x:176.3,y:170.2,alpha:0.961,rotation:0}},{t:this.instance_11,p:{scaleX:0.326,scaleY:0.326,x:206.4,y:156.1,alpha:0.969,rotation:0}},{t:this.instance_10,p:{scaleX:0.406,scaleY:0.406,x:257.6,y:139.7,alpha:0.801,rotation:180}},{t:this.instance_9,p:{scaleX:0.364,scaleY:0.364,rotation:180,x:320.7,y:133.2,alpha:0.57}},{t:this.instance_8,p:{scaleX:0.564,scaleY:0.564,rotation:0,x:374.7,y:133.7,alpha:0.41}},{t:this.instance_7,p:{scaleX:1.841,scaleY:1.841,rotation:0,x:396.6,y:154.4,alpha:0.449}},{t:this.instance_6,p:{scaleX:2.497,scaleY:2.497,x:387.5,y:156.8,alpha:0.68,rotation:0}},{t:this.instance_5,p:{scaleX:2.233,scaleY:2.233,x:377.1,y:168.4,alpha:0.871,rotation:0}},{t:this.instance_4,p:{scaleX:1.178,scaleY:1.178,x:382.8,y:155.8,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:2.5,scaleY:2.5,rotation:0,x:156.1,y:142.2,alpha:0.699}},{t:this.instance_13,p:{scaleX:1.663,scaleY:1.663,x:146.8,y:169.1,alpha:0.969,rotation:0}},{t:this.instance_12,p:{scaleX:0.383,scaleY:0.383,x:174.2,y:154.5,alpha:0.969,rotation:0}},{t:this.instance_11,p:{scaleX:0.48,scaleY:0.48,x:243,y:133.4,alpha:0.75,rotation:180}},{t:this.instance_10,p:{scaleX:0.249,scaleY:0.249,x:302.7,y:132.5,alpha:0.539,rotation:180}},{t:this.instance_9,p:{scaleX:0.703,scaleY:0.703,rotation:0,x:348.9,y:138,alpha:0.41}},{t:this.instance_8,p:{scaleX:1.905,scaleY:1.905,rotation:0,x:366.8,y:140.9,alpha:0.461}},{t:this.instance_7,p:{scaleX:2.499,scaleY:2.499,rotation:0,x:356.9,y:170.1,alpha:0.691}},{t:this.instance_6,p:{scaleX:1.962,scaleY:1.962,x:345.7,y:161.6,alpha:0.93,rotation:0}},{t:this.instance_5,p:{scaleX:1.033,scaleY:1.033,x:355.6,y:161,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:1.867,scaleY:1.867,rotation:0,x:115.9,y:150,alpha:0.949}},{t:this.instance_13,p:{scaleX:0.301,scaleY:0.301,x:147.5,y:153.2,alpha:0.961,rotation:0}},{t:this.instance_12,p:{scaleX:0.469,scaleY:0.469,x:209.6,y:137.4,alpha:0.762,rotation:180}},{t:this.instance_11,p:{scaleX:0.066,scaleY:0.066,x:286.3,y:132.6,alpha:0.488,rotation:180}},{t:this.instance_10,p:{scaleX:0.939,scaleY:0.939,x:324.9,y:141.6,alpha:0.398,rotation:0}},{t:this.instance_9,p:{scaleX:2.015,scaleY:2.015,rotation:0,x:336.7,y:153.2,alpha:0.48}},{t:this.instance_8,p:{scaleX:2.5,scaleY:2.5,rotation:0,x:325.9,y:151.6,alpha:0.711}},{t:this.instance_7,p:{scaleX:1.921,scaleY:1.921,rotation:0,x:315.8,y:171.5,alpha:0.941}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.52,scaleY:0.52,rotation:0,x:109.3,y:150.6,alpha:0.98}},{t:this.instance_13,p:{scaleX:0.485,scaleY:0.485,x:184.5,y:136.7,alpha:0.738,rotation:180}},{t:this.instance_12,p:{scaleX:0.109,scaleY:0.109,x:253.4,y:132.9,alpha:0.5,rotation:180}},{t:this.instance_11,p:{scaleX:1.227,scaleY:1.227,x:300.5,y:154.4,alpha:0.398,rotation:0}},{t:this.instance_10,p:{scaleX:2.176,scaleY:2.176,x:306,y:159.5,alpha:0.52,rotation:0}},{t:this.instance_9,p:{scaleX:2.49,scaleY:2.49,rotation:0,x:294.2,y:166.4,alpha:0.73}},{t:this.instance_8,p:{scaleX:1.858,scaleY:1.858,rotation:0,x:285.9,y:156.9,alpha:0.949}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:305.2,y:162.7,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.432,scaleY:0.432,rotation:180,x:141.8,y:143.7,alpha:0.789}},{t:this.instance_13,p:{scaleX:0.046,scaleY:0.046,x:227.5,y:133.2,alpha:0.48,rotation:180}},{t:this.instance_12,p:{scaleX:1.165,scaleY:1.165,x:269.5,y:144.7,alpha:0.398,rotation:0}},{t:this.instance_11,p:{scaleX:2.333,scaleY:2.333,x:274,y:180.7,alpha:0.559,rotation:0}},{t:this.instance_10,p:{scaleX:2.444,scaleY:2.444,x:261.5,y:171.5,alpha:0.781,rotation:0}},{t:this.instance_9,p:{scaleX:1.737,scaleY:1.737,rotation:0,x:256.4,y:166.6,alpha:0.961}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:276.9,y:155.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:305.2,y:162.7,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.203,scaleY:0.203,rotation:180,x:186.5,y:134.8,alpha:0.52}},{t:this.instance_13,p:{scaleX:1.255,scaleY:1.255,x:241,y:145.5,alpha:0.41,rotation:0}},{t:this.instance_12,p:{scaleX:2.303,scaleY:2.303,x:244.5,y:163.1,alpha:0.551,rotation:0}},{t:this.instance_11,p:{scaleX:2.34,scaleY:2.34,x:228.6,y:189.9,alpha:0.84,rotation:0}},{t:this.instance_10,p:{scaleX:1.522,scaleY:1.522,x:228.1,y:167.6,alpha:0.98,rotation:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:249.9,y:160.7,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:276.9,y:155.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:305.2,y:162.7,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:1.018,scaleY:1.018,rotation:0,x:206.6,y:131.4,alpha:0.398}},{t:this.instance_13,p:{scaleX:2.346,scaleY:2.346,x:213.8,y:163.6,alpha:0.57,rotation:0}},{t:this.instance_12,p:{scaleX:2.367,scaleY:2.367,x:199.2,y:172.9,alpha:0.82,rotation:0}},{t:this.instance_11,p:{scaleX:1.243,scaleY:1.243,x:201.8,y:174.4,alpha:1,rotation:0}},{t:this.instance_10,p:{scaleX:1,scaleY:1,x:225,y:162.3,alpha:1,rotation:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:249.9,y:160.7,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:276.9,y:155.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:305.2,y:162.7,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:2.224,scaleY:2.224,rotation:0,x:185.6,y:136.2,alpha:0.531}},{t:this.instance_13,p:{scaleX:2.327,scaleY:2.327,x:168.4,y:172.4,alpha:0.84,rotation:0}},{t:this.instance_12,p:{scaleX:1.304,scaleY:1.304,x:170.8,y:166.1,alpha:0.988,rotation:0}},{t:this.instance_11,p:{scaleX:1,scaleY:1,x:201.1,y:169.9,alpha:1,rotation:0}},{t:this.instance_10,p:{scaleX:1,scaleY:1,x:225,y:162.3,alpha:1,rotation:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:249.9,y:160.7,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:276.9,y:155.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:305.2,y:162.7,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:2.421,scaleY:2.421,rotation:0,x:140.6,y:145.3,alpha:0.801}},{t:this.instance_13,p:{scaleX:1.215,scaleY:1.215,x:142.2,y:164.8,alpha:1,rotation:0}},{t:this.instance_12,p:{scaleX:1,scaleY:1,x:169.8,y:162.7,alpha:1,rotation:0}},{t:this.instance_11,p:{scaleX:1,scaleY:1,x:201.1,y:169.9,alpha:1,rotation:0}},{t:this.instance_10,p:{scaleX:1,scaleY:1,x:225,y:162.3,alpha:1,rotation:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:249.9,y:160.7,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:276.9,y:155.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:305.2,y:162.7,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:1.447,scaleY:1.447,rotation:0,x:108.9,y:151.1,alpha:0.988}},{t:this.instance_13,p:{scaleX:1,scaleY:1,x:141.7,y:162.5,alpha:1,rotation:0}},{t:this.instance_12,p:{scaleX:1,scaleY:1,x:169.8,y:162.7,alpha:1,rotation:0}},{t:this.instance_11,p:{scaleX:1,scaleY:1,x:201.1,y:169.9,alpha:1,rotation:0}},{t:this.instance_10,p:{scaleX:1,scaleY:1,x:225,y:162.3,alpha:1,rotation:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:249.9,y:160.7,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:276.9,y:155.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:305.2,y:162.7,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:1,scaleY:1,rotation:0,x:106.6,y:151.4,alpha:1}},{t:this.instance_13,p:{scaleX:1,scaleY:1,x:141.7,y:162.5,alpha:1,rotation:0}},{t:this.instance_12,p:{scaleX:1,scaleY:1,x:169.8,y:162.7,alpha:1,rotation:0}},{t:this.instance_11,p:{scaleX:1,scaleY:1,x:201.1,y:169.9,alpha:1,rotation:0}},{t:this.instance_10,p:{scaleX:1,scaleY:1,x:225,y:162.3,alpha:1,rotation:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:249.9,y:160.7,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:276.9,y:155.1,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:305.2,y:162.7,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:334.1,y:157.6,alpha:1,rotation:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,x:355.6,y:160.7,alpha:1,rotation:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:382.5,y:155.1,alpha:1,rotation:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:405.1,y:156.7,alpha:1,rotation:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:429,y:162.5,alpha:1,rotation:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:457.1,y:162.7,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:486.3,y:162.5,alpha:1,rotation:0}}]},1).wait(1));

	// Text
	this.text = new cjs.Text("Type in the correct answer to respond to the prompt, then shoot the ball into the  hoop to match your answer.\n\nGood luck!", "bold 20px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 426;
	this.text.setTransform(241.8,108.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(12).to({scaleX:1.18,scaleY:1.46,x:297.6,y:0.2,text:"",font:NaN,lineHeight:16,lineWidth:204},0).to({_off:true},14).wait(19).to({_off:false,scaleX:1,scaleY:1,x:301,y:229.3,text:"You beat Swish!\n Good job!",font:NaN,lineHeight:27,lineWidth:271},0).wait(1));

	// Button
	this.playGame = new lib.playgame();
	this.playGame.setTransform(491.9,370.7);

	this.playAgain = new lib.playagain();
	this.playAgain.setTransform(312.1,377.2,1,1,0,0,0,67,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playGame}]},2).to({state:[]},12).to({state:[{t:this.playAgain}]},14).wait(20));

	// Flashbulbs
	this.instance_15 = new lib.flashbulbs();
	this.instance_15.setTransform(51.9,34);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(28).to({_off:false},0).wait(20));

	// BG
	this.instance_16 = new lib.blackbox();
	this.instance_16.setTransform(191,161.4,0.759,0.549);

	this.instance_17 = new lib.mascot();
	this.instance_17.setTransform(537.4,212.4);

	this.instance_18 = new lib.banner1("synched",0);
	this.instance_18.setTransform(301,172);
	this.instance_18.alpha = 0.34;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeA8QgdgGAHggQAJgvAIgKIAcgYIAPgEIAVAMQAVAMABAIQAIA9gLASQgHANgeACIgLABQgQAAgOgEg");
	this.shape_1.setTransform(579.6,146.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeA9QgdgHAHgfQAJgvAIgKIAcgYIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_2.setTransform(565.8,147.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_3.setTransform(601.3,148.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAhQAGADAAAzQAABKglAGIgFAAQgKAAgNgHg");
	this.shape_4.setTransform(601.4,158.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAABAbQgBAcgYAAQgYAAAAgcg");
	this.shape_5.setTransform(587,150.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_6.setTransform(570.7,149.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_7.setTransform(570.8,159.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghA9QACgngIgEQgHgCAAgjQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgggNg");
	this.shape_8.setTransform(586.7,159.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_9.setTransform(556.6,149.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAWAMAAAIQAIA9gKASQgIANgeACIgLABQgQAAgOgEg");
	this.shape_10.setTransform(556,157.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgjQAAgZAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_11.setTransform(593.4,145.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAA0QAABJglAGIgFAAQgKAAgNgHg");
	this.shape_12.setTransform(595.9,140.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAZACIAeAgQAFADAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_13.setTransform(565.2,141.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAFgCAGgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_14.setTransform(581.2,140.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_15.setTransform(594.2,135.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_16.setTransform(593.9,144.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_17.setTransform(588.6,116.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAGgCAFgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_18.setTransform(588.3,125.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_19.setTransform(581.4,139.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAAQABgbAXAAQAZAAAAAbQAAAcgZAAQgXAAgBgcg");
	this.shape_20.setTransform(602.4,102.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAAzQAABKglAGIgFAAQgKAAgNgHg");
	this.shape_21.setTransform(602.5,112.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_22.setTransform(587.2,104.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAGgCAFgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_23.setTransform(586.9,113.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_24.setTransform(599.9,124.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_25.setTransform(599.9,134.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_26.setTransform(526.4,135.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAWANAAAIQAIA8gKASQgIANgeACIgLABQgQAAgOgEg");
	this.shape_27.setTransform(525.8,143.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAAAAbQAAAcgYAAQgYAAAAgcg");
	this.shape_28.setTransform(555.1,132.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_29.setTransform(555.2,142.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_30.setTransform(570.2,132.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgjQAAgZAbgJQAGgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_31.setTransform(569.9,141.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_32.setTransform(562.9,145.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAeAgQAFADAAA0QAABKgkAFIgGABQgJAAgOgHg");
	this.shape_33.setTransform(563,155.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_34.setTransform(547.6,146.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_35.setTransform(547.7,156.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_36.setTransform(533.3,147.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgbAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_37.setTransform(533,156.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_38.setTransform(540,134.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgbAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_39.setTransform(539.6,143.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_40.setTransform(520.8,116.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA9QgdgHAGgfQALgxAGgJIAcgXIAPgFIAWAMQAVANABAIQAFA/gIAPQgHANgeACIgNABQgPAAgNgDg");
	this.shape_41.setTransform(520.2,125.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_42.setTransform(549.5,114.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAZACIAeAgQAFADAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_43.setTransform(549.6,124.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_44.setTransform(564.6,114.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_45.setTransform(564.3,123.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAAAAbQAAAcgYAAQgYAAAAgcg");
	this.shape_46.setTransform(557.3,127.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_47.setTransform(557.4,137.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAABAbQgBAcgYAAQgYAAAAgcg");
	this.shape_48.setTransform(542,127.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_49.setTransform(542.1,137.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_50.setTransform(527.8,129.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AggA9QACgogJgDQgHgDAAgjQAAgYAcgKQAFgCAFgMIATgFIAOAKQAQAMAEAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_51.setTransform(527.4,138.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_52.setTransform(534.4,115.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgbAcgIQAFgBAFgNIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_53.setTransform(534.1,124.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_54.setTransform(549.7,103.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQAJgvAIgLIAcgXIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_55.setTransform(549.1,111.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_56.setTransform(535.9,104.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgeA8QgcgGAGggQAJgvAIgKIAcgYIAPgEIAVAMQAVAMABAIQAIA9gLASQgHANgeACIgLABQgQAAgOgEg");
	this.shape_57.setTransform(535.4,113.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_58.setTransform(578.4,100.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAhQAGACAAA0QAABKglAGIgFAAQgJAAgOgHg");
	this.shape_59.setTransform(578.5,110.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_60.setTransform(593.5,100.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghA9QACgngIgEQgHgCAAgjQAAgaAbgJQAFgBAGgNIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgggNg");
	this.shape_61.setTransform(593.2,109.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAZAAAAAbQAAAcgZAAQgYAAABgcg");
	this.shape_62.setTransform(563.2,102.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgBAFgNIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_63.setTransform(562.9,111.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_64.setTransform(575.9,122.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_65.setTransform(575.9,132);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_66.setTransform(591,122.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AggA9QACgogJgDQgHgDAAgjQAAgYAcgKQAFgCAFgMIATgFIAOAKQAQAMAEAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_67.setTransform(590.6,131.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_68.setTransform(532.2,41.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_69.setTransform(519.8,42.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgDAAgcQAAgUAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_70.setTransform(519.5,50.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_71.setTransform(519.7,41.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgaAyQACgggIgDQgFgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_72.setTransform(519.4,49.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_73.setTransform(530.9,30.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_74.setTransform(531,38.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_75.setTransform(518.5,31.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgaAyQACghgIgCQgFgDAAgcQAAgWAWgGQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_76.setTransform(518.2,39.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_77.setTransform(528.8,48.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_78.setTransform(510.8,39.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_79.setTransform(510.5,47.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_80.setTransform(513.3,74.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_81.setTransform(513.4,82.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_82.setTransform(525.7,74.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_83.setTransform(525.4,82.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_84.setTransform(501,75.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgUAWgIQAFgBAEgKIAPgFIAcAaQAGALgNAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_85.setTransform(500.7,83.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_86.setTransform(513.4,65.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgYAxQgXgEAFgbQAIgnAGgHIAXgUIALgDIASAJQASALAAAGQAFAzgHANQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_87.setTransform(513,72.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_88.setTransform(502.2,66.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgYAxQgXgGAFgaQAIgmAGgIIAXgTIALgDIASAJQARALABAGQAGAzgIANQgIANgbAAQgLAAgSgDg");
	this.shape_89.setTransform(501.7,73.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_90.setTransform(524.6,64.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_91.setTransform(524.3,72.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_92.setTransform(501,54.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_93.setTransform(500.7,61.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_94.setTransform(512.1,63.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_95.setTransform(512.2,71.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_96.setTransform(524.4,63.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_97.setTransform(524.2,71.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTAAQAAgYATABQAUgBAAAYQAAAYgUAAQgTAAAAgYg");
	this.shape_98.setTransform(512.2,54.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgnAGgIIAXgTIALgEIASAKQARAKABAHQAFAygHANQgIAPgaAAQgLAAgTgEg");
	this.shape_99.setTransform(511.7,61.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_100.setTransform(523.3,53.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgXAWgFQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_101.setTransform(523,61.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_102.setTransform(554.4,73);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_103.setTransform(554.1,80.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_104.setTransform(537.3,69.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_105.setTransform(537.4,77.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_106.setTransform(528.2,69.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_107.setTransform(528.3,77.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_108.setTransform(573.3,76.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgYAxQgXgEAFgbQAIgnAGgHIAXgUIALgDIASAJQARALABAGQAFAzgHANQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_109.setTransform(572.9,83.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_110.setTransform(533.6,55.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_111.setTransform(533.7,63.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_112.setTransform(584.4,75.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_113.setTransform(584.2,83);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_114.setTransform(543.8,60.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgYAyQgXgGAFgaQAIgnAFgHIAYgTIALgEIASAKQARAKABAHQAFAygHANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_115.setTransform(543.4,67.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_116.setTransform(567.3,58.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8geAFIgEAAQgHAAgMgFg");
	this.shape_117.setTransform(567.4,66.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_118.setTransform(579.7,58.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_119.setTransform(579.4,66);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_120.setTransform(573.7,69.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_121.setTransform(573.8,77.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_122.setTransform(561.2,69.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_123.setTransform(561.3,77.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_124.setTransform(549.5,70.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_125.setTransform(549.2,78.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_126.setTransform(554.9,59.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_127.setTransform(554.7,67);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_128.setTransform(539.3,45.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgnAGgIIAXgTIALgEIASAKQARAKABAHQAFAzgHAMQgIAPgaAAQgLAAgTgEg");
	this.shape_129.setTransform(538.8,52.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_130.setTransform(562.8,43.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_131.setTransform(562.9,51.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_132.setTransform(575.1,43.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgaAyQABghgHgDQgFgCAAgcQAAgVAWgHQAEgCAFgJIAPgFIAcAaQAFALgMAXIAFATQADAXgHALQgFAIgNAAQgNAAgagLg");
	this.shape_133.setTransform(574.9,50.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_134.setTransform(569.2,54);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_135.setTransform(569.2,62.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_136.setTransform(556.6,54.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_137.setTransform(556.7,62.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_138.setTransform(545,55.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgWAWgGQAFgBAEgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_139.setTransform(544.7,63);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_140.setTransform(550.4,44.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgWAWgGQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_141.setTransform(550.1,51.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_142.setTransform(562.9,34.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgYAyQgXgGAFgaQAIgnAGgHIAXgTIALgEIASAKQARAKABAHQAFAygHANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_143.setTransform(562.4,41.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_144.setTransform(551.6,35.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgYAyQgXgGAFgZQAIgoAFgHIAYgTIALgEIASAKQARAKABAHQAFAygHANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_145.setTransform(551.2,42.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_146.setTransform(586.4,32.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8geAFIgEAAQgHAAgMgFg");
	this.shape_147.setTransform(586.5,40.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_148.setTransform(598.7,32.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXQAMAkgLARQgFAHgNAAQgNAAgagKg");
	this.shape_149.setTransform(598.5,39.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_150.setTransform(574,33.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_151.setTransform(573.7,40.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_152.setTransform(584.3,49.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8geAFIgEAAQgHAAgMgFg");
	this.shape_153.setTransform(584.4,57.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_154.setTransform(596.7,50);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgDAAgcQAAgUAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_155.setTransform(596.4,57.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_156.setTransform(592,64);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_157.setTransform(592.1,72.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_158.setTransform(538.1,30.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_159.setTransform(550.4,23);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgaAyQABghgHgDQgFgCAAgcQAAgUAWgIQAEgCAFgJIAPgFIAcAaQAFALgMAXIAFATQADAXgHALQgFAIgNAAQgNAAgagLg");
	this.shape_160.setTransform(550.1,30.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_161.setTransform(548.3,40.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgVAWgHQAEgBAFgKIAPgFIAcAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_162.setTransform(548.1,48);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_163.setTransform(561.5,32.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8geAFIgEAAQgHAAgMgFg");
	this.shape_164.setTransform(561.6,40.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_165.setTransform(573.9,32.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgOAAQgNAAgZgKg");
	this.shape_166.setTransform(573.6,39.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_167.setTransform(561.6,23.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgYAxQgYgFAFgaQAJgnAFgHIAXgUIAMgDIARAJQASALAAAGQAHAwgJAQQgGALgZACIgIAAQgMAAgMgDg");
	this.shape_168.setTransform(561.2,30.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_169.setTransform(585.1,21.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AKgdQAGgUAKgFQAFgDAEABIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgHAAgLgFg");
	this.shape_170.setTransform(585.2,29.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_171.setTransform(572.7,22.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgDAAgcQAAgUAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_172.setTransform(572.5,29.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_173.setTransform(583.1,38.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQAKgxAHgJIAcgYIAPgEIAVAMQAVANABAIQAIA8gKASQgIANgeACIgMABQgPAAgOgDg");
	this.shape_174.setTransform(453.1,142.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAVAMABAIQAIA9gKASQgIANgeACIgMABQgPAAgOgEg");
	this.shape_175.setTransform(439.3,143.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAgQAGADAAA0QAABKglAFIgFABQgJAAgOgHg");
	this.shape_176.setTransform(482.4,141.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_177.setTransform(474.8,144.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_178.setTransform(474.9,154.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_179.setTransform(460.5,146.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_180.setTransform(444.2,145.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAaACIAdAgQAFADAAA0QAABKgkAFIgGABQgKAAgNgHg");
	this.shape_181.setTransform(444.3,155.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAGgCAFgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_182.setTransform(460.2,155.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_183.setTransform(430.1,145.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgeA8QgdgGAHggQAJgvAHgKIAdgYIAPgEIAVAMQAVANABAIQAIA8gLASQgHANgeACIgLABQgQAAgOgEg");
	this.shape_184.setTransform(429.6,153.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgCAFgMIASgFIAPALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_185.setTransform(466.9,141.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_186.setTransform(469.4,136.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_187.setTransform(438.7,137.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgjQAAgZAbgJQAGgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_188.setTransform(454.7,136.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAZAAgBAbQABAcgZAAQgXAAAAgcg");
	this.shape_189.setTransform(467.7,131.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgZAcgKQAFgBAFgMIATgGIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_190.setTransform(467.4,140.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_191.setTransform(462.2,112.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AggA9QACgogJgDQgHgCAAgkQAAgYAcgKQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_192.setTransform(461.8,121.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_193.setTransform(454.9,135.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_194.setTransform(475.9,98.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_195.setTransform(476,108.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_196.setTransform(491,99.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgZAbgJQAGgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_197.setTransform(490.7,108.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_198.setTransform(460.7,100.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgjQAAgaAcgIQAFgCAFgMIASgFIAPALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_199.setTransform(460.4,109.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_200.setTransform(473.4,120.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAgQAGADAAA0QAABKglAGIgFAAQgJAAgOgHg");
	this.shape_201.setTransform(473.5,130.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAAAAbQAAAcgYAAQgYAAAAgcg");
	this.shape_202.setTransform(488.5,120.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AghA9QACgngIgEQgHgCAAgjQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgggNg");
	this.shape_203.setTransform(488.2,129.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_204.setTransform(399.9,131.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgeA9QgdgHAHgfQAJgwAHgKIAdgXIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_205.setTransform(399.4,139.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_206.setTransform(428.6,128.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAZACIAeAgQAFADAAA0QAABKgkAFIgGABQgKAAgNgHg");
	this.shape_207.setTransform(428.7,138.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_208.setTransform(443.7,128.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgbAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_209.setTransform(443.4,137.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_210.setTransform(436.4,141.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_211.setTransform(436.5,151.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_212.setTransform(421.1,142.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_213.setTransform(421.2,152.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_214.setTransform(406.8,143.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AghA9QACgogIgDQgHgDAAgjQAAgXAbgLQAFgCAGgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAEAbgIANQgHAKgPAAQgRAAgggNg");
	this.shape_215.setTransform(406.5,152.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_216.setTransform(413.5,130.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AghA9QACgngIgEQgHgCAAgjQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgggNg");
	this.shape_217.setTransform(413.2,139.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_218.setTransform(394.4,112.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgeA9QgdgHAHgfQAJgvAIgKIAcgYIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_219.setTransform(393.8,121.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_220.setTransform(423.1,110.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_221.setTransform(423.1,120.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_222.setTransform(438.2,110.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AggA9QACgogJgDQgHgDAAgjQAAgYAcgKQAFgCAFgMIATgFIAOAKQAQAMAEAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_223.setTransform(437.8,119.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_224.setTransform(430.8,123.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_225.setTransform(430.9,133.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAAAAbQAAAcgYAAQgYAAAAgcg");
	this.shape_226.setTransform(415.6,123.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_227.setTransform(415.6,133.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_228.setTransform(401.3,125.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AghA9QACgngIgEQgHgCAAgkQAAgZAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgHAJgPAAQgRAAgggNg");
	this.shape_229.setTransform(401,134.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAAAAbQAAAcgYAAQgYAAAAgcg");
	this.shape_230.setTransform(407.9,111.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AghA9QACgogIgDQgHgDAAgjQAAgXAbgLQAFgCAGgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgggNg");
	this.shape_231.setTransform(407.6,120.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_232.setTransform(423.2,99.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAWAMAAAIQAIA9gKASQgIANgeACIgMABQgPAAgOgEg");
	this.shape_233.setTransform(422.6,107.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_234.setTransform(409.4,100.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAWANAAAIQAIA8gKASQgIANgeACIgLABQgQAAgOgEg");
	this.shape_235.setTransform(408.9,109.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_236.setTransform(451.9,96.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_237.setTransform(452,106.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_238.setTransform(467,96.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAGgCAFgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_239.setTransform(466.7,105.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgYAAQABgbAXAAQAZAAAAAbQAAAcgZAAQgXAAgBgcg");
	this.shape_240.setTransform(436.8,98.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgYAcgKQAFgCAFgMIATgFIAOAKQAQAMAEAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_241.setTransform(436.4,107.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAZAAAAAbQAAAcgZAAQgXAAAAgcg");
	this.shape_242.setTransform(449.4,118.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAA0QAABJglAGIgFAAQgJAAgOgHg");
	this.shape_243.setTransform(449.5,128.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_244.setTransform(464.5,118.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_245.setTransform(464.2,127.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_246.setTransform(412.6,38.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_247.setTransform(400.2,40);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgCAAgcQAAgUAXgJQAEgBAEgKIAPgEIAdAZQAFALgNAXIAFAUQAEAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_248.setTransform(400,47.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_249.setTransform(400.1,39.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgaAyQACgggIgDQgFgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_250.setTransform(399.8,46.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_251.setTransform(411.3,27.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_252.setTransform(411.4,36);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_253.setTransform(399,29.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgaAyQACgggIgDQgFgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_254.setTransform(398.7,36.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_255.setTransform(409.3,45.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_256.setTransform(391.2,37);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_257.setTransform(391,44.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_258.setTransform(364.6,83.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_259.setTransform(370.3,74.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgYAxQgXgFAFgaQAIgnAGgHIAXgUIAMgDIARAJQASALAAAGQAFAzgHANQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_260.setTransform(369.8,80.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_261.setTransform(393.8,71.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_262.setTransform(393.9,80);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_263.setTransform(406.2,72.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgFIAcAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_264.setTransform(405.9,79.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_265.setTransform(400.2,82.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_266.setTransform(387.7,83.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_267.setTransform(376,84.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_268.setTransform(381.4,73.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_269.setTransform(381.1,80.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_270.setTransform(393.9,63);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgYAyQgXgGAFgZQAIgnAGgIIAXgTIALgEIASAKQASAKAAAHQAGAygIANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_271.setTransform(393.4,69.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_272.setTransform(382.6,64.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgYAyQgXgGAFgZQAIgnAGgIIAXgTIALgEIASAKQARAKABAHQAFAzgHAMQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_273.setTransform(382.2,71);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_274.setTransform(405,62);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgcQAAgUAWgJQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_275.setTransform(404.7,69.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_276.setTransform(381.4,51.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgUAWgIQAFgBAEgKIAPgFIAcAaQAGALgNAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_277.setTransform(381.1,59);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_278.setTransform(379.4,69.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgWAWgGQAFgBAEgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_279.setTransform(379.1,76.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_280.setTransform(392.5,61);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgQBAIgLgHQgQg1AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgLgFg");
	this.shape_281.setTransform(392.6,69.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_282.setTransform(404.9,61.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_283.setTransform(404.6,68.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_284.setTransform(392.6,52.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgYAxQgXgEAFgbQAIgnAFgHIAYgUIALgDIASAJQARALABAGQAFAzgHANQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_285.setTransform(392.2,58.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_286.setTransform(403.7,51.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_287.setTransform(403.5,58.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_288.setTransform(434.8,70.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_289.setTransform(434.5,77.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_290.setTransform(417.8,67.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_291.setTransform(417.9,75.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_292.setTransform(408.7,66.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_293.setTransform(408.8,74.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_294.setTransform(500.5,31.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_295.setTransform(488.8,47.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_296.setTransform(488.5,54.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_297.setTransform(488.2,32.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgcQAAgUAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_298.setTransform(487.9,40);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_299.setTransform(488,31.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_300.setTransform(487.8,39.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_301.setTransform(499.3,20.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_302.setTransform(499.4,28.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_303.setTransform(486.9,21.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_304.setTransform(486.6,29.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_305.setTransform(497.2,38.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_306.setTransform(453.8,73.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgYAyQgXgGAFgZQAIgoAFgHIAYgTIALgEIASAKQARAKABAHQAFAygHANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_307.setTransform(453.3,80.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_308.setTransform(414,52.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgQBAIgLgHQgQg1AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgLgFg");
	this.shape_309.setTransform(414.1,60.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_310.setTransform(464.9,73);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgcQAAgVAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_311.setTransform(464.6,80.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_312.setTransform(424.3,57.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgYAyQgXgGAFgZQAIgnAFgIIAYgTIALgEIASAKQARAKABAHQAFAygHANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_313.setTransform(423.8,64.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_314.setTransform(447.8,55.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgQBAIgLgHQgQg1AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8geAFIgFAAQgHAAgLgFg");
	this.shape_315.setTransform(447.9,63.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_316.setTransform(460.1,55.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgOAAQgNAAgZgKg");
	this.shape_317.setTransform(459.9,63.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_318.setTransform(454.1,66.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AJgdQAHgTAKgGIAJgCIgEgQIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_319.setTransform(454.2,74.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_320.setTransform(441.6,66.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_321.setTransform(441.7,75.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_322.setTransform(429.9,68.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgVAWgHQAEgBAFgKIAPgFIAcAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_323.setTransform(429.7,75.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_324.setTransform(435.4,57);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgVAWgHQAEgBAFgKIAOgFIAdAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_325.setTransform(435.1,64.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_326.setTransform(419.7,42.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgYAxQgXgEAFgbQAIgnAGgHIAXgUIALgDIASAJQARALABAGQAFA0gHAMQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_327.setTransform(419.3,49.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_328.setTransform(443.2,40.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA9gdAEIgFAAQgIAAgLgFg");
	this.shape_329.setTransform(443.3,48.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_330.setTransform(455.6,40.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgXAWgFQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_331.setTransform(455.3,48.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_332.setTransform(449.6,51.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AKgeQAGgTAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA7gdAFIgFAAQgIAAgKgFg");
	this.shape_333.setTransform(449.7,59.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_334.setTransform(437.1,51.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_335.setTransform(437.2,59.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_336.setTransform(425.4,53);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_337.setTransform(425.1,60.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_338.setTransform(430.8,41.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_339.setTransform(430.6,49.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_340.setTransform(443.3,31.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgYAyQgXgGAFgZQAIgnAFgIIAYgTIALgEIASAKQARAKABAHQAFAygHANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_341.setTransform(442.9,38.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_342.setTransform(432.1,32.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgnAFgIIAXgTIAMgEIASAKQARAKABAHQAFAygHANQgJAPgZAAQgMAAgSgEg");
	this.shape_343.setTransform(431.6,39.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_344.setTransform(466.8,29.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgQBAIgLgHQgQg1AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8geAFIgFAAQgHAAgLgFg");
	this.shape_345.setTransform(466.9,37.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_346.setTransform(479.2,29.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgOAAQgNAAgZgKg");
	this.shape_347.setTransform(478.9,37);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_348.setTransform(454.4,30.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgVAWgHQAEgBAFgKIAPgFIAcAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_349.setTransform(454.2,38.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_350.setTransform(464.8,47.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgHAAgLgFg");
	this.shape_351.setTransform(464.8,55.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_352.setTransform(477.1,47.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgCAAgcQAAgVAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_353.setTransform(476.9,54.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_354.setTransform(472.4,61.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_355.setTransform(472.5,69.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_356.setTransform(418.6,28.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_357.setTransform(430.8,20.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgXAWgFQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_358.setTransform(430.6,27.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_359.setTransform(428.8,37.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_360.setTransform(428.5,45.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_361.setTransform(442,29.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA7geAFIgFAAQgHAAgLgFg");
	this.shape_362.setTransform(442.1,37.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_363.setTransform(454.3,29.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgCAAgcQAAgVAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_364.setTransform(454.1,37.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_365.setTransform(442.1,20.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgZAxQgXgFAFgbQAJgnAFgGIAXgUIAMgEIARAKQASAKAAAHQAIAvgKARQgIANgbAAQgLAAgSgDg");
	this.shape_366.setTransform(441.7,27.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_367.setTransform(465.6,18.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgCIgEgQIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_368.setTransform(465.6,26.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_369.setTransform(453.2,19.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgCAAgdQAAgUAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_370.setTransform(452.9,27.2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_371.setTransform(463.5,36.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgeA9QgdgHAHgfQAJgvAIgKIAcgYIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_372.setTransform(321.1,140.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgdA8QgegGAHggQAKgvAHgKIAcgYIAPgEIAVAMQAVAMABAIQAIA9gLASQgHANgeACIgLABQgQAAgNgEg");
	this.shape_373.setTransform(307.4,142.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAaACIAdAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_374.setTransform(350.4,139.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_375.setTransform(342.9,143.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_376.setTransform(342.9,153.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_377.setTransform(328.6,144.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_378.setTransform(312.2,144.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_379.setTransform(312.3,154.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AghA9QACgogIgDQgHgDAAgjQAAgXAbgLQAFgCAGgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgRAAQgQAAgggNg");
	this.shape_380.setTransform(328.3,153.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_381.setTransform(298.2,144.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQAKgxAHgJIAcgXIAPgFIAVAMQAWANAAAIQAIA8gKASQgIANgeACIgMABQgPAAgOgDg");
	this.shape_382.setTransform(297.6,152.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgYAbgLQAFgBAGgMIASgGIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_383.setTransform(334.9,140.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAgQAGADAAA0QAABKglAFIgFABQgKAAgNgHg");
	this.shape_384.setTransform(337.4,134.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_385.setTransform(306.8,135.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AghA9QACgngIgEQgHgCAAgjQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgggNg");
	this.shape_386.setTransform(322.7,135.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_387.setTransform(335.7,129.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAGgCAFgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_388.setTransform(335.4,138.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_389.setTransform(330.2,111.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_390.setTransform(329.9,120.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAgQAGADAAA0QAABKglAGIgFAAQgJAAgOgHg");
	this.shape_391.setTransform(323,134.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_392.setTransform(343.9,97.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_393.setTransform(344,107.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_394.setTransform(359,97.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgaAcgJQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_395.setTransform(358.7,106.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgYAAQABgbAXAAQAZAAAAAbQAAAcgZAAQgXAAgBgcg");
	this.shape_396.setTransform(328.8,99.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_397.setTransform(328.5,108.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_398.setTransform(341.4,119);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_399.setTransform(341.5,129);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_400.setTransform(356.5,119.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgZAcgKQAFgBAFgMIATgGIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_401.setTransform(356.2,128.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_402.setTransform(268,130);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQALgxAGgIIAcgYIAPgFIAVAMQAWANAAAIQAIA8gKASQgIANgeACIgMABQgPAAgOgDg");
	this.shape_403.setTransform(267.4,138.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_404.setTransform(296.7,127.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_405.setTransform(296.8,137.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_406.setTransform(311.7,127.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgBAFgNIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_407.setTransform(311.4,136.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_408.setTransform(304.4,140.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_409.setTransform(304.5,150.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgYAAQABgbAXAAQAZAAAAAbQAAAcgZAAQgXAAgBgcg");
	this.shape_410.setTransform(289.2,141);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_411.setTransform(289.3,150.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_412.setTransform(274.9,142.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAhQAGACAAA0QAABKglAGIgFAAQgKAAgNgHg");
	this.shape_413.setTransform(258.7,151.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgYAcgKQAFgCAFgMIATgFIAOAKQAQAMAEAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_414.setTransform(274.6,151.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_415.setTransform(281.6,128.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgZAcgKQAFgBAFgMIATgGIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_416.setTransform(281.2,137.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_417.setTransform(262.4,111.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAWAMAAAIQAIA9gKASQgIANgeACIgLABQgQAAgOgEg");
	this.shape_418.setTransform(261.9,119.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_419.setTransform(291.1,108.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_420.setTransform(291.2,118.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_421.setTransform(306.2,109.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AggA9QACgogJgDQgHgDAAgjQAAgXAcgLQAFgCAFgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgHAKgQAAQgQAAgfgNg");
	this.shape_422.setTransform(305.9,118.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_423.setTransform(298.9,121.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_424.setTransform(299,131.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_425.setTransform(283.6,122.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAZACIAeAgQAFADAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_426.setTransform(283.7,132.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_427.setTransform(269.3,123.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgbAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_428.setTransform(269,132.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_429.setTransform(276,110.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AggA9QACgogJgDQgHgCAAgkQAAgYAcgKQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_430.setTransform(275.7,119.4);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_431.setTransform(291.3,97.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgeA8QgcgGAGggQAJgvAIgKIAcgYIAPgEIAVAMQAVAMABAIQAIA9gLASQgHANgeACIgLABQgQAAgOgEg");
	this.shape_432.setTransform(290.7,106.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_433.setTransform(277.5,99.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgeA9QgdgHAHgfQAJgvAIgLIAcgXIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_434.setTransform(277,107.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_435.setTransform(319.9,95.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAA0QAABJglAGIgFAAQgKAAgNgHg");
	this.shape_436.setTransform(320,105.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_437.setTransform(335,95.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AghA9QACgogIgDQgHgDAAgjQAAgXAbgLQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAbgJANQgHAKgQAAQgQAAgggNg");
	this.shape_438.setTransform(334.7,104.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_439.setTransform(304.8,96.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AggA9QACgogJgDQgHgDAAgjQAAgZAcgJQAFgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgHAJgPAAQgRAAgfgNg");
	this.shape_440.setTransform(304.5,105.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQABAcgZAAQgXAAAAgcg");
	this.shape_441.setTransform(317.4,116.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABKgkAFIgGAAQgKAAgNgHg");
	this.shape_442.setTransform(317.5,126.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_443.setTransform(332.5,117);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgbAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_444.setTransform(332.2,126);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_445.setTransform(300.3,75.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_446.setTransform(300,82.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_447.setTransform(283.3,71.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgQBAIgLgHQgQg1AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgLgFg");
	this.shape_448.setTransform(283.4,80);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_449.setTransform(274.2,71.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8geAEIgFAAQgHAAgLgFg");
	this.shape_450.setTransform(274.3,79.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_451.setTransform(366,36.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_452.setTransform(354.2,51.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgWAWgGQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_453.setTransform(353.9,59.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_454.setTransform(353.6,37.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_455.setTransform(353.3,44.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_456.setTransform(353.5,36.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_457.setTransform(353.2,44);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_458.setTransform(364.7,25.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8geAEIgFAAQgHAAgLgFg");
	this.shape_459.setTransform(364.8,33.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_460.setTransform(352.3,26.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgXAWgFQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_461.setTransform(352.1,33.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_462.setTransform(362.7,42.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_463.setTransform(319.2,78.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgYAxQgYgGAFgaQAJgnAFgHIAXgUIAMgDIARAKQASAKAAAGQAHAwgJAQQgIAPgaAAQgLAAgSgEg");
	this.shape_464.setTransform(318.8,85.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_465.setTransform(279.5,57.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8geAFIgEAAQgHAAgMgFg");
	this.shape_466.setTransform(279.6,65.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_467.setTransform(330.3,77.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgOAAQgNAAgZgKg");
	this.shape_468.setTransform(330.1,85.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_469.setTransform(289.8,62.7);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgYAyQgYgGAFgZQAJgoAFgHIAXgTIAMgEIARAKQASAKAAAHQAIAvgKAQQgGALgZACIgJAAQgNAAgKgCg");
	this.shape_470.setTransform(289.4,69.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_471.setTransform(313.2,60.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_472.setTransform(313.3,68.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_473.setTransform(325.6,60.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgDAAgcQAAgTAXgJQAEgBAEgKIAPgEIAdAZQAFALgNAXIAFAUQAEAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_474.setTransform(325.3,68.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_475.setTransform(319.6,71.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_476.setTransform(319.7,79.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_477.setTransform(307.1,71.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgQBAIgLgIQgPg0AKgdQAGgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_478.setTransform(307.2,79.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_479.setTransform(295.4,72.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgcQAAgVAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgOAAQgNAAgZgKg");
	this.shape_480.setTransform(295.2,80.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_481.setTransform(300.9,61.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgcQAAgVAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgOAAQgNAAgZgKg");
	this.shape_482.setTransform(300.6,69.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_483.setTransform(285.2,47.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgYAxQgXgFAFgaQAIgmAGgIIAXgUIALgDIASAJQARALABAGQAFAygHAOQgGALgZACIgIAAQgMAAgNgDg");
	this.shape_484.setTransform(284.8,54.4);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_485.setTransform(308.7,45.4);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgQBAIgLgHQgPg0AJgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8geAEIgFAAQgHAAgLgFg");
	this.shape_486.setTransform(308.8,53.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_487.setTransform(321,45.6);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgaAyQABghgHgDQgFgCAAgcQAAgVAWgHQAEgCAFgJIAOgFIAdAaQAFALgMAXIAFATQADAXgHALQgFAIgNAAQgNAAgagLg");
	this.shape_488.setTransform(320.8,53);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_489.setTransform(315.1,56.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_490.setTransform(315.1,64.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_491.setTransform(302.6,56.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAVABIAXAbQAEACAAAqQAAA8gdAFIgFAAQgHAAgLgFg");
	this.shape_492.setTransform(302.6,64.7);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_493.setTransform(290.9,57.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgXAWgFQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_494.setTransform(290.6,65.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_495.setTransform(296.3,46.6);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgXAWgFQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_496.setTransform(296.1,54);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_497.setTransform(308.8,36.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgYAyQgXgGAFgaQAIgnAFgHIAXgTIAMgEIARAKQASAKAAAHQAIAvgKAQQgGALgYACIgKAAQgNAAgKgCg");
	this.shape_498.setTransform(308.4,43.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_499.setTransform(297.6,37.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgYAyQgYgGAFgZQAJgoAFgHIAXgTIAMgEIARAKQASAKAAAHQAIAvgKAQQgGALgZACIgJAAQgNAAgKgCg");
	this.shape_500.setTransform(297.2,44.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_501.setTransform(332.3,34.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgCIgEgQIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_502.setTransform(332.3,42.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_503.setTransform(344.6,34.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgDAAgcQAAgTAXgJQAEgBAEgKIAPgEIAdAZQAFALgNAXIAFAUQAEAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_504.setTransform(344.4,41.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_505.setTransform(319.9,35.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgOAAQgNAAgZgKg");
	this.shape_506.setTransform(319.6,42.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_507.setTransform(330.2,51.8);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_508.setTransform(330.3,60);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_509.setTransform(342.6,52.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_510.setTransform(342.3,59.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_511.setTransform(337.9,66.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgQBAIgLgHQgQg1AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgLgFg");
	this.shape_512.setTransform(338,74.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_513.setTransform(284.1,33);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_514.setTransform(296.3,25.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgaAyQABghgHgDQgFgCAAgcQAAgVAWgHQAEgCAFgJIAPgFIAcAaQAFALgMAXIAFATQADAXgHALQgFAIgNAAQgNAAgagLg");
	this.shape_515.setTransform(296.1,32.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_516.setTransform(294.3,42.7);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgVAWgHQAEgBAFgKIAOgFIAdAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_517.setTransform(294,50.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_518.setTransform(307.4,34.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_519.setTransform(307.5,42.6);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_520.setTransform(319.8,34.7);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgCAAgdQAAgTAXgJQAEgBAEgKIAPgEIAdAZQAFALgNAXIAFAUQAEAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_521.setTransform(319.5,42);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_522.setTransform(307.5,25.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgYAxQgXgFAEgaQAJgnAFgHIAXgUIAMgDIARAJQASALAAAGQAHAwgJAQQgGALgZACIgIAAQgMAAgMgDg");
	this.shape_523.setTransform(307.1,32.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_524.setTransform(331,23.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_525.setTransform(331.1,31.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_526.setTransform(318.6,24.6);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgDAAgcQAAgTAXgJQAEgBAEgKIAPgEIAdAZQAFALgNAXIAFAUQAEAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_527.setTransform(318.4,32);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_528.setTransform(328.9,40.9);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_529.setTransform(251.6,51);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_530.setTransform(251.4,58.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_531.setTransform(254.9,36.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_532.setTransform(255,44.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_533.setTransform(243.2,52.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgWAWgGQAFgBAEgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_534.setTransform(242.9,59.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_535.setTransform(242.5,37.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_536.setTransform(242.3,45.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_537.setTransform(242.4,36.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_538.setTransform(242.2,44.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_539.setTransform(253.7,25.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8geAEIgFAAQgHAAgLgFg");
	this.shape_540.setTransform(253.8,33.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_541.setTransform(241.3,26.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_542.setTransform(241,34.2);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_543.setTransform(251.6,43.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_544.setTransform(208.2,79);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgZAyQgXgGAFgaQAJgnAFgHIAXgTIAMgEIARAKQASAKAAAHQAIAvgKAQQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_545.setTransform(207.8,85.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_546.setTransform(231.7,76.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_547.setTransform(231.7,85);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_548.setTransform(244,77);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_549.setTransform(243.7,84.4);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_550.setTransform(219.3,78.1);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgCAAgdQAAgUAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_551.setTransform(219,85.4);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_552.setTransform(178.7,63);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgZAyQgXgGAFgZQAHgmAHgJIAXgTIAMgEIARAKQASAKAAAHQAHAvgJAQQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_553.setTransform(178.3,69.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_554.setTransform(202.2,60.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgHAAgLgFg");
	this.shape_555.setTransform(202.2,69);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_556.setTransform(214.5,61);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_557.setTransform(214.2,68.4);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_558.setTransform(208.5,71.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_559.setTransform(208.6,79.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_560.setTransform(196,72);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8geAFIgEAAQgHAAgMgFg");
	this.shape_561.setTransform(196.1,80.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_562.setTransform(184.3,73.2);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgVAWgHQAEgBAEgKIAPgFIAdAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_563.setTransform(184.1,80.6);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_564.setTransform(189.8,62.1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgaAyQABghgHgCQgGgDAAgcQAAgVAXgHQAEgCAEgJIAPgFIAdAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_565.setTransform(189.5,69.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_566.setTransform(174.1,47.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgoAFgHIAXgTIAMgEIASAKQARALABAGQAFAygHAOQgJAOgZAAQgLAAgTgEg");
	this.shape_567.setTransform(173.7,54.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_568.setTransform(197.6,45.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8geAEIgFAAQgHAAgLgFg");
	this.shape_569.setTransform(197.7,53.8);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_570.setTransform(210,45.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgaAyQABghgHgCQgGgDAAgcQAAgVAXgHQAEgBAEgKIAPgFIAdAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_571.setTransform(209.7,53.3);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_572.setTransform(204,56.4);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_573.setTransform(204.1,64.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_574.setTransform(191.5,56.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_575.setTransform(191.6,65);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_576.setTransform(179.8,58.1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_577.setTransform(179.5,65.4);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_578.setTransform(185.2,47);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_579.setTransform(185,54.3);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_580.setTransform(197.7,36.8);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgZAyQgXgGAFgZQAIgnAGgIIAXgTIAMgEIARAKQASAKAAAHQAHAvgJAQQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_581.setTransform(197.3,43.6);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_582.setTransform(186.5,38);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AgZAyQgXgGAFgZQAHgmAHgJIAXgTIAMgEIARAKQASAKAAAHQAHAvgJAQQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_583.setTransform(186.1,44.8);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_584.setTransform(221.2,34.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_585.setTransform(221.3,42.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_586.setTransform(233.6,34.8);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_587.setTransform(233.3,42.1);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_588.setTransform(208.8,35.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgaAyQABghgHgDQgGgCAAgcQAAgVAXgHQAEgCAEgJIAPgFIAdAaQAFALgMAXIAFATQADAXgHALQgFAIgNAAQgNAAgagLg");
	this.shape_589.setTransform(208.6,43.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_590.setTransform(219.2,52.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_591.setTransform(219.2,60.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_592.setTransform(231.5,52.4);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_593.setTransform(231.2,59.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_594.setTransform(226.8,66.4);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA7gdAFIgFAAQgIAAgLgFg");
	this.shape_595.setTransform(226.9,74.6);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_596.setTransform(239.2,66.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgcQAAgVAWgIQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_597.setTransform(238.9,74);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8geAEIgFAAQgHAAgLgFg");
	this.shape_598.setTransform(173,33.3);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_599.setTransform(185.2,25.4);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgVAWgHQAEgBAFgKIAOgFIAdAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_600.setTransform(185,32.8);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_601.setTransform(183.2,43);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgXAWgFQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_602.setTransform(182.9,50.4);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_603.setTransform(196.4,34.8);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgGAAQgHAAgKgFg");
	this.shape_604.setTransform(196.4,42.9);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_605.setTransform(208.7,35);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_606.setTransform(208.4,42.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_607.setTransform(196.5,25.9);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AgYAxQgXgEAFgbQAIgnAGgHIAXgUIAMgDIARAJQASALAAAGQAFA0gHAMQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_608.setTransform(196,32.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_609.setTransform(219.9,23.6);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_610.setTransform(220,31.8);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_611.setTransform(207.6,24.9);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_612.setTransform(207.3,32.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_613.setTransform(217.9,41.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_614.setTransform(108.5,133.1);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AgdA8QgegGAHggQAKgvAHgKIAcgYIAPgEIAVAMQAWAMABAIQAFBBgIAOQgIANgeACIgLABQgPAAgOgEg");
	this.shape_615.setTransform(107.9,141.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_616.setTransform(98.7,143.4);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQAKgxAHgJIAcgXIAPgFIAVAMQAVANABAIQAIA8gKASQgIANgeACIgMABQgPAAgOgDg");
	this.shape_617.setTransform(98.2,151.7);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAWANAAAIQAIA8gKASQgIANgeACIgLABQgQAAgOgEg");
	this.shape_618.setTransform(202.7,139.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQALgxAGgIIAcgYIAPgFIAVAMQAWANAAAIQAIA8gKASQgIANgeACIgMABQgPAAgOgDg");
	this.shape_619.setTransform(188.9,140.9);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_620.setTransform(232,138.4);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_621.setTransform(224.4,142.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_622.setTransform(224.5,152.1);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_623.setTransform(210.1,143.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_624.setTransform(193.8,143);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_625.setTransform(193.9,152.9);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgBAFgNIASgFIAPALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_626.setTransform(209.8,152.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_627.setTransform(179.7,142.8);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgeA8QgdgGAHggQAJgvAIgKIAcgYIAPgEIAVAMQAVAMABAIQAIA9gLASQgHANgeACIgLABQgQAAgOgEg");
	this.shape_628.setTransform(179.2,151.2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgbAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_629.setTransform(216.5,139);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_630.setTransform(219,133.6);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAhQAGACAAA0QAABKglAGIgFAAQgKAAgNgHg");
	this.shape_631.setTransform(188.4,134.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAGgCAFgMIASgFIAPAKQAQAMAEAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_632.setTransform(204.3,134.1);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_633.setTransform(217.3,128.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgbAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_634.setTransform(217,137.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgYAAQABgbAXAAQAZAAAAAbQAAAcgZAAQgXAAgBgcg");
	this.shape_635.setTransform(211.8,110.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AggA9QACgogJgDQgHgDAAgjQAAgYAcgKQAFgCAFgMIATgFIAOAKQAQAMAEAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_636.setTransform(211.4,119.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_637.setTransform(204.5,132.9);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_638.setTransform(225.5,96.2);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_639.setTransform(225.6,106.2);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAZAAAAAbQAAAcgZAAQgYAAABgcg");
	this.shape_640.setTransform(240.6,96.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAGgCAFgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_641.setTransform(240.3,105.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAAAAbQAAAcgYAAQgYAAAAgcg");
	this.shape_642.setTransform(210.4,97.8);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgYAcgKQAFgCAFgMIATgFIAOAKQAQAMAEAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_643.setTransform(210,106.8);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAYAAAAAbQAAAcgYAAQgYAAAAgcg");
	this.shape_644.setTransform(223,117.7);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAA0QAABJglAGIgFAAQgJAAgOgHg");
	this.shape_645.setTransform(223.1,127.7);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_646.setTransform(238.1,118);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_647.setTransform(237.8,127);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_648.setTransform(149.5,128.7);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AgeA8QgdgGAHggQAJgvAIgKIAcgYIAPgEIAVAMQAVANABAIQAIA8gLASQgHANgeACIgLABQgQAAgOgEg");
	this.shape_649.setTransform(149,137);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_650.setTransform(135.8,130.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AgeA9QgdgHAHgfQAJgwAIgJIAcgYIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_651.setTransform(135.2,138.5);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_652.setTransform(178.2,126);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_653.setTransform(178.3,135.9);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAZAAAAAbQAAAcgZAAQgYAAABgcg");
	this.shape_654.setTransform(193.3,126.2);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgkQAAgaAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_655.setTransform(193,135.2);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAZAAgBAbQABAcgZAAQgXAAAAgcg");
	this.shape_656.setTransform(186,139.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAZACIAeAgQAFADAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_657.setTransform(186.1,149.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAZAAgBAbQABAcgZAAQgXAAAAgcg");
	this.shape_658.setTransform(170.7,139.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_659.setTransform(170.8,149.6);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_660.setTransform(156.4,141.1);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_661.setTransform(140.1,140.5);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgJAAgOgHg");
	this.shape_662.setTransform(140.2,150.5);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AghA9QACgngIgEQgHgCAAgjQAAgaAbgJQAFgBAGgNIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgHAJgPAAQgRAAgggNg");
	this.shape_663.setTransform(156.1,150.1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_664.setTransform(126,140.4);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAWAMAAAIQAIA9gKASQgIANgeACIgLABQgQAAgOgEg");
	this.shape_665.setTransform(125.4,148.7);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAZAAgBAbQABAcgZAAQgXAAAAgcg");
	this.shape_666.setTransform(163.1,127.5);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_667.setTransform(162.8,136.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_668.setTransform(144,110.2);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AgeA9QgdgHAHgfQAJgwAIgJIAcgYIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_669.setTransform(143.4,118.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_670.setTransform(130.2,111.7);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AgeA8QgdgGAHggQAJgvAIgKIAcgYIAPgEIAVAMQAVAMABAIQAIA9gLASQgHANgeACIgLABQgQAAgOgEg");
	this.shape_671.setTransform(129.7,120);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_672.setTransform(172.7,107.5);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAaACIAdAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_673.setTransform(172.7,117.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_674.setTransform(187.8,107.8);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgbAcgIQAFgBAFgNIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_675.setTransform(187.4,116.7);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_676.setTransform(180.5,120.6);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_677.setTransform(180.5,130.6);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_678.setTransform(165.2,121.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAA0QAABJglAGIgFAAQgKAAgNgHg");
	this.shape_679.setTransform(165.3,131.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_680.setTransform(150.9,122.6);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_681.setTransform(134.5,122);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAIgXAMgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_682.setTransform(134.6,132);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AghA9QACgogIgDQgHgDAAgjQAAgXAbgLQAFgCAGgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgRAAQgQAAgggNg");
	this.shape_683.setTransform(150.6,131.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_684.setTransform(120.4,121.9);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQAKgxAHgJIAcgXIAPgFIAVAMQAWANAAAIQAIA8gKASQgIANgeACIgMABQgPAAgOgDg");
	this.shape_685.setTransform(119.9,130.2);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_686.setTransform(157.5,109.1);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgYAbgLQAFgBAGgMIASgGIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_687.setTransform(157.2,118);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_688.setTransform(172.8,96.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQALgxAGgIIAcgYIAPgFIAVAMQAWANAAAIQAIA8gKASQgIANgeACIgMABQgPAAgOgDg");
	this.shape_689.setTransform(172.2,104.9);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_690.setTransform(159,98.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AgeA8QgcgGAGggQALgwAGgJIAcgYIAPgEIAVAMQAWAMAAAIQAIA9gKASQgIANgeACIgLABQgQAAgOgEg");
	this.shape_691.setTransform(158.5,106.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_692.setTransform(201.5,93.9);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgJAAgOgHg");
	this.shape_693.setTransform(201.6,103.9);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_694.setTransform(216.6,94.2);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgBAFgNIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_695.setTransform(216.3,103.1);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_696.setTransform(186.4,95.5);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgjQAAgZAcgKQAFgBAFgMIATgGIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_697.setTransform(186,104.4);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_698.setTransform(199,115.4);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAA0QAABJglAGIgFAAQgJAAgOgHg");
	this.shape_699.setTransform(199.1,125.4);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_700.setTransform(214.1,115.7);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAFgCAGgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_701.setTransform(213.8,124.7);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_702.setTransform(28.7,25.8);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgHAAgLgFg");
	this.shape_703.setTransform(28.7,33.9);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_704.setTransform(28.8,16.9);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#000000").s().p("AgYAxQgXgEAEgbQAJgnAFgHIAXgUIAMgDIASAJQARALABAGQAHAwgJAQQgHALgYACIgJAAQgMAAgMgDg");
	this.shape_705.setTransform(28.3,23.7);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#000000").s().p("AgTAAQAAgYATAAQAUAAAAAYQAAAZgUAAQgTAAAAgZg");
	this.shape_706.setTransform(52.9,41.1);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgnAFgIIAXgTIAMgEIASAKQARAKABAHQAFAygHANQgJAPgZAAQgMAAgSgEg");
	this.shape_707.setTransform(52.5,47.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_708.setTransform(43.9,43.4);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#000000").s().p("AgQBAIgLgHQgQg1AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8geAFIgFAAQgHAAgLgFg");
	this.shape_709.setTransform(44,51.5);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_710.setTransform(56.2,43.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgUAWgIQAEgBAFgKIAOgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_711.setTransform(56,50.9);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_712.setTransform(39.3,28.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgCIgFgQIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_713.setTransform(39.4,36.4);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_714.setTransform(51.7,28.4);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgXAWgFQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_715.setTransform(51.4,35.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_716.setTransform(45.7,39);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AKgdQAGgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgHAAgLgFg");
	this.shape_717.setTransform(45.8,47.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_718.setTransform(39.4,19.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#000000").s().p("AgYAyQgXgGAFgZQAIgnAGgIIAXgTIALgEIASAKQARAKABAHQAFAzgHAMQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_719.setTransform(39,26.1);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_720.setTransform(50.5,18.4);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgVAWgHQAEgBAFgKIAPgFIAcAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_721.setTransform(50.3,25.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_722.setTransform(119.6,73.3);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#000000").s().p("AgYAxQgXgFAFgaQAIgnAGgHIAXgUIAMgDIARAJQASALAAAGQAFAzgHANQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_723.setTransform(119.1,80.1);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_724.setTransform(143,71);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_725.setTransform(143.1,79.2);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_726.setTransform(155.4,71.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgUAWgIQAFgBAEgKIAPgFIAcAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_727.setTransform(155.1,78.6);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_728.setTransform(130.7,72.3);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_729.setTransform(130.4,79.7);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_730.setTransform(90.1,57.3);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgnAGgIIAXgUIAMgCIARAJQASALAAAGQAGAygIANQgIAPgbAAQgLAAgSgEg");
	this.shape_731.setTransform(89.6,64.2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_732.setTransform(78.8,58.5);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#000000").s().p("AgYAyQgXgGAFgaQAIgnAGgHIAXgTIAMgEIARAKQASAKAAAHQAGAygIANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_733.setTransform(78.3,65.3);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_734.setTransform(113.5,55);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AJgdQAHgTAKgGIAJgCIgEgQIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_735.setTransform(113.6,63.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_736.setTransform(125.9,55.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgWAWgGQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_737.setTransform(125.6,62.6);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_738.setTransform(119.9,65.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8geAEIgFAAQgHAAgLgFg");
	this.shape_739.setTransform(120,73.9);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_740.setTransform(107.4,66.2);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AKgdQAGgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_741.setTransform(107.5,74.4);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_742.setTransform(95.7,67.4);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_743.setTransform(82.3,66.9);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_744.setTransform(82.4,75.1);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#000000").s().p("AgaAyQACgggIgDQgFgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_745.setTransform(95.4,74.8);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_746.setTransform(70.8,66.8);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#000000").s().p("AgYAyQgXgGAFgZQAIgnAGgIIAXgTIAMgEIARAKQASAKAAAHQAFAzgHAMQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_747.setTransform(70.3,73.6);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_748.setTransform(101.2,56.3);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_749.setTransform(100.9,63.7);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_750.setTransform(85.5,42.1);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgnAGgIIAXgTIAMgEIARAKQASAKAAAHQAFAzgHAMQgIAPgaAAQgLAAgTgEg");
	this.shape_751.setTransform(85,49);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_752.setTransform(74.3,43.4);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgnAGgIIAXgTIAMgEIARAKQASAKAAAHQAFAzgHAMQgIAPgZAAQgMAAgTgEg");
	this.shape_753.setTransform(73.8,50.2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_754.setTransform(109,39.9);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AJgdQAHgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_755.setTransform(109.1,48.1);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_756.setTransform(121.4,40.1);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#000000").s().p("AgaAyQACgggIgDQgFgCAAgcQAAgUAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_757.setTransform(121.1,47.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_758.setTransform(115.4,50.6);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_759.setTransform(115.5,58.8);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_760.setTransform(102.9,51.1);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgHAAgLgFg");
	this.shape_761.setTransform(102.9,59.3);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_762.setTransform(91.2,52.3);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_763.setTransform(77.8,51.8);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AKgdQAGgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_764.setTransform(77.9,60);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#000000").s().p("AgaAyQABghgHgCQgGgDAAgcQAAgUAXgIQAEgBAEgKIAPgEIAdAZQAFALgNAXIAFAUQAEAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_765.setTransform(90.9,59.7);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_766.setTransform(66.3,51.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#000000").s().p("AgYAxQgXgEAFgbQAIgnAGgHIAXgUIAMgDIARAJQASALAAAGQAFAzgHANQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_767.setTransform(65.8,58.5);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_768.setTransform(96.6,41.2);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#000000").s().p("AgaAyQACghgHgCQgGgDAAgcQAAgUAWgIQAFgBAEgKIAPgFIAcAaQAGALgNAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_769.setTransform(96.3,48.6);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_770.setTransform(109.1,31);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#000000").s().p("AgYAxQgXgEAFgbQAIgnAGgHIAXgUIAMgDIARAKQASAKAAAGQAFA0gHAMQgGALgZACIgIAAQgNAAgMgDg");
	this.shape_771.setTransform(108.6,37.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_772.setTransform(97.8,32.2);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#000000").s().p("AgYAyQgXgGAFgaQAIgnAGgHIAXgTIAMgEIARAKQASAKAAAHQAGAygIANQgGALgZACIgJAAQgNAAgLgCg");
	this.shape_773.setTransform(97.4,39);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_774.setTransform(132.6,28.8);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AJgdQAHgTAKgGIAJgCIgEgQIAUABIAYAbQAEACAAAqQAAA9gdAEIgFAAQgIAAgKgFg");
	this.shape_775.setTransform(132.7,37);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_776.setTransform(145,29);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgWAWgGQAFgBAEgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_777.setTransform(144.7,36.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_778.setTransform(120.2,30.1);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgOAAgZgKg");
	this.shape_779.setTransform(119.9,37.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_780.setTransform(130.5,46.4);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#000000").s().p("AgQBAIgLgIQgQg0AKgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgMgFg");
	this.shape_781.setTransform(130.6,54.6);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_782.setTransform(142.9,46.6);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_783.setTransform(142.6,54);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_784.setTransform(31.2,127);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#000000").s().p("AgeA9QgdgHAHgfQAJgwAIgJIAcgYIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_785.setTransform(30.6,135.3);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_786.setTransform(17.4,128.4);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#000000").s().p("AgeA8QgdgGAHggQAJgvAIgKIAcgYIAPgEIAVAMQAVANABAIQAIA8gLASQgHANgeACIgLABQgPAAgPgEg");
	this.shape_787.setTransform(16.9,136.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_788.setTransform(59.9,124.2);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAAzQAABKglAGIgFAAQgKAAgNgHg");
	this.shape_789.setTransform(60,134.2);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#000000").s().p("AgYAAQABgbAXAAQAZAAAAAbQAAAcgZAAQgXAAgBgcg");
	this.shape_790.setTransform(75,124.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#000000").s().p("AghA9QACgngIgEQgHgCAAgjQAAgYAbgLQAFgBAGgMIASgGIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgHAJgPAAQgRAAgggNg");
	this.shape_791.setTransform(74.7,133.5);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAZAAgBAbQABAcgZAAQgXAAAAgcg");
	this.shape_792.setTransform(67.7,137.4);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_793.setTransform(67.7,147.3);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAZAAgBAbQABAcgZAAQgXAAAAgcg");
	this.shape_794.setTransform(52.4,137.9);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAA0QAABJglAGIgFAAQgJAAgOgHg");
	this.shape_795.setTransform(52.5,147.9);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#000000").s().p("AgYAAQABgbAXAAQAZAAAAAbQAAAcgZAAQgXAAgBgcg");
	this.shape_796.setTransform(38.1,139.4);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_797.setTransform(21.7,138.8);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgjQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA0QAABKgkAGIgGAAQgKAAgNgHg");
	this.shape_798.setTransform(21.8,148.8);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_799.setTransform(37.8,148.4);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_800.setTransform(7.6,138.7);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#000000").s().p("AgdA9QgdgHAGgfQALgxAGgIIAdgYIAOgFIAWAMQAVANABAIQAFA/gIAPQgHANgeACIgMABQgPAAgOgDg");
	this.shape_801.setTransform(7,147);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAZAAgBAbQABAcgZAAQgXAAAAgcg");
	this.shape_802.setTransform(44.7,125.8);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgXAbgLQAGgCAFgMIASgFIAPAKQAPAMAFAJQAHAOgQAcIAGAYQAFAbgJANQgGAKgQAAQgRAAgfgNg");
	this.shape_803.setTransform(44.4,134.8);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_804.setTransform(25.6,108.5);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#000000").s().p("AgeA8QgcgGAGggQAJgvAIgKIAcgYIAPgEIAVAMQAVAMABAIQAIA9gLASQgHANgeACIgLABQgQAAgOgEg");
	this.shape_805.setTransform(25.1,116.8);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_806.setTransform(11.9,110);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#000000").s().p("AgeA9QgcgHAGgfQAJgvAIgLIAcgXIAPgFIAVAMQAVANABAIQAIA8gLASQgHANgeACIgMABQgPAAgOgDg");
	this.shape_807.setTransform(11.3,118.3);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_808.setTransform(54.3,105.8);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAHgYANgHIALgCIgFgVIAZACIAdAhQAGADAAA0QAABJglAGIgFAAQgJAAgOgHg");
	this.shape_809.setTransform(54.4,115.7);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_810.setTransform(69.4,106);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#000000").s().p("AghA9QACgogIgDQgHgCAAgkQAAgXAbgLQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgHAJgPAAQgRAAgggNg");
	this.shape_811.setTransform(69.1,115);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_812.setTransform(62.1,118.9);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAaACIAdAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_813.setTransform(62.2,128.8);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_814.setTransform(46.8,119.4);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAdAhQAGACAAA0QAABKglAGIgFAAQgJAAgOgHg");
	this.shape_815.setTransform(46.9,129.4);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_816.setTransform(32.5,120.9);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_817.setTransform(16.2,120.3);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_818.setTransform(16.3,130.3);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAFgCAGgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_819.setTransform(32.2,129.9);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_820.setTransform(2.1,120.2);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#000000").s().p("AgdA8QgegGAHggQAKgvAHgKIAcgYIAPgEIAVAMQAWAMABAIQAFBAgIAPQgIANgeACIgLABQgPAAgOgEg");
	this.shape_821.setTransform(1.5,128.5);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#000000").s().p("AgYAAQAAgbAYAAQAZAAAAAbQAAAcgZAAQgYAAAAgcg");
	this.shape_822.setTransform(39.2,107.3);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgjQAAgZAbgJQAGgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_823.setTransform(38.9,116.3);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_824.setTransform(54.4,94.9);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#000000").s().p("AgdA8QgegGAHggQAKgvAHgKIAcgYIAPgEIAVAMQAWAMABAIQAFBBgIAOQgIANgeACIgLABQgPAAgOgEg");
	this.shape_825.setTransform(53.9,103.2);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#000000").s().p("AgYAAQAAgdAYAAQAZAAAAAdQAAAegZAAQgYAAAAgeg");
	this.shape_826.setTransform(40.7,96.4);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#000000").s().p("AgdA9QgdgHAGgfQAKgwAHgJIAcgYIAPgFIAVAMQAWANABAIQAFBAgIAOQgIANgeACIgMABQgPAAgNgDg");
	this.shape_827.setTransform(40.1,104.7);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_828.setTransform(83.1,92.2);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#000000").s().p("AgTBOIgOgJQgTg/AMgkQAIgYAMgHIALgCIgFgVIAZACIAeAhQAFACAAA1QAABJgkAGIgGAAQgKAAgNgHg");
	this.shape_829.setTransform(83.2,102.1);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_830.setTransform(98.2,92.4);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#000000").s().p("AggA9QABgogIgDQgHgDAAgjQAAgaAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_831.setTransform(97.9,101.4);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_832.setTransform(68,93.7);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#000000").s().p("AggA9QACgngJgEQgHgCAAgkQAAgaAcgIQAFgCAFgMIATgFIAOALQAQAMAEAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_833.setTransform(67.7,102.7);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#000000").s().p("AgXAAQAAgbAXAAQAYAAAAAbQAAAcgYAAQgXAAAAgcg");
	this.shape_834.setTransform(80.6,113.7);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#000000").s().p("AgTBOIgOgJQgThAAMgkQAHgXANgHIALgCIgFgVIAZACIAeAgQAFADAAA0QAABKgkAFIgGABQgJAAgOgHg");
	this.shape_835.setTransform(80.7,123.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#000000").s().p("AgXAAQgBgbAYAAQAYAAAAAbQAAAcgYAAQgYAAABgcg");
	this.shape_836.setTransform(95.7,113.9);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#000000").s().p("AggA9QABgngIgEQgHgDAAgiQAAgaAbgJQAGgCAFgMIASgFIAPALQAPAMAFAIQAHAOgQAcIAGAYQAFAcgJANQgGAJgQAAQgRAAgfgNg");
	this.shape_837.setTransform(95.4,122.9);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_838.setTransform(138.2,60.6);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_839.setTransform(138.3,68.8);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_840.setTransform(150.6,60.9);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#000000").s().p("AgaAyQABgggHgDQgGgDAAgcQAAgUAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_841.setTransform(150.3,68.2);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_842.setTransform(65.2,45.7);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgIAAgKgFg");
	this.shape_843.setTransform(65.3,53.8);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_844.setTransform(77.6,45.9);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgCAAgcQAAgUAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_845.setTransform(77.3,53.2);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_846.setTransform(60.7,30.5);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AKgdQAGgTAKgGIAJgCIgEgQIAUABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_847.setTransform(60.7,38.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_848.setTransform(73,30.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#000000").s().p("AgaAyQABghgHgCQgGgDAAgcQAAgUAXgIQAEgBAEgKIAPgEIAdAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_849.setTransform(72.8,38.1);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_850.setTransform(67,41.3);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AJgdQAHgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgKgFg");
	this.shape_851.setTransform(67.1,49.4);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_852.setTransform(60.8,21.6);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#000000").s().p("AgZAxQgXgGAFgZQAHgmAHgJIAXgTIAMgEIARAKQASAKAAAHQAHAvgJAQQgIAPgZAAQgMAAgTgEg");
	this.shape_853.setTransform(60.4,28.5);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_854.setTransform(84.3,19.4);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#000000").s().p("AgPBAIgMgHQgPg1AKgdQAGgTAKgGIAJgBIgEgRIAUABIAYAbQAEACAAAqQAAA8gdAFIgFAAQgHAAgLgFg");
	this.shape_855.setTransform(84.3,27.6);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_856.setTransform(96.6,19.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#000000").s().p("AgaAyQACgggHgDQgGgCAAgdQAAgTAWgJQAFgBAEgKIAPgEIAcAZQAGALgNAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_857.setTransform(96.3,27);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_858.setTransform(71.9,20.7);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#000000").s().p("AgaAyQABghgHgCQgGgDAAgcQAAgVAXgHQAEgBAEgKIAPgFIAdAaQAFALgMAXIAFAUQADAWgHALQgFAIgNAAQgNAAgagLg");
	this.shape_859.setTransform(71.6,28.1);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_860.setTransform(82.2,37);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#000000").s().p("AgPBAIgMgHQgPg0AKgdQAGgUAKgFIAJgCIgEgRIAUABIAYAbQAEACAAArQAAA8gdAEIgGAAQgHAAgKgFg");
	this.shape_861.setTransform(82.3,45.2);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_862.setTransform(94.6,37.2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#000000").s().p("AgaAyQACghgIgDQgFgCAAgcQAAgUAWgIQAFgCAEgJIAPgFIAcAaQAGALgNAXIAFATQADAXgHALQgFAIgNAAQgNAAgagLg");
	this.shape_863.setTransform(94.3,44.6);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_864.setTransform(107.7,29);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#000000").s().p("AgPBAIgMgIQgPg0AJgdQAHgTAKgGIAJgBIgFgRIAVABIAYAbQAEACAAAqQAAA8gdAFIgEAAQgIAAgLgFg");
	this.shape_865.setTransform(107.8,37.2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_866.setTransform(120.1,29.2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#000000").s().p("AgaAyQABgggHgDQgFgDAAgcQAAgTAWgJQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_867.setTransform(119.8,36.6);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#000000").s().p("AgTAAQAAgXATAAQAUAAAAAXQAAAYgUAAQgTAAAAgYg");
	this.shape_868.setTransform(107.8,20.1);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#000000").s().p("AgYAxQgXgGAFgZQAIgnAGgIIAXgTIALgEIASAKQARAKABAHQAFAzgHAMQgIAPgaAAQgLAAgTgEg");
	this.shape_869.setTransform(107.4,27);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_870.setTransform(131.3,17.9);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#000000").s().p("AgQBAIgLgHQgQg0AKgdQAHgUAKgFIAJgCIgFgRIAVABIAYAbQAEACAAArQAAA8gdAEIgFAAQgIAAgLgFg");
	this.shape_871.setTransform(131.4,26);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_872.setTransform(118.9,19.1);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#000000").s().p("AgaAyQABghgHgCQgFgDAAgcQAAgWAWgGQAEgBAFgKIAPgEIAcAZQAFALgMAXIAFAUQADAWgHALQgFAHgNAAQgNAAgagKg");
	this.shape_873.setTransform(118.7,26.5);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#000000").s().p("AgTAAQAAgWATAAQAUAAAAAWQAAAXgUAAQgTAAAAgXg");
	this.shape_874.setTransform(129.3,35.5);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#6E6791").ss(3,1,1).p("AmsyBMANZAkD");
	this.shape_875.setTransform(432.1,336.8);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#6E6791").ss(3,1,1).p("AHwyBMgPfAkD");
	this.shape_876.setTransform(163.3,336.8);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#6E6791").ss(3,1,1).p("Ak9nkIJ6PJ");
	this.shape_877.setTransform(568.2,269.8);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#6E6791").ss(3,1,1).p("AFmn6IrLP1");
	this.shape_878.setTransform(30.9,273.2);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#6E6791").ss(3,1,1).p("AmIhCIASASQAZAWAlAUQB3A7C+AMQC7AMB8g+QA+gcAXgi");
	this.shape_879.setTransform(301.4,237.1);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#6E6791").ss(3,1,1).p("AA4FlIhvrJ");
	this.shape_880.setTransform(364.4,259.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#6E6791").ss(3,1,1).p("AiOFzIEcrl");
	this.shape_881.setTransform(236.3,258);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#6E6791").ss(3,1,1).p("ALkAAQAABYjZA+QjZA/kyAAQkxAAjZg/QjZg+AAhYQAAhXDZg/QDZg+ExAAQEyAADZA+QDZA/AABXg");
	this.shape_882.setTransform(296,295.2);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().s("#6E6791").ss(3,1,1).p("AB2AAIjrAA");
	this.shape_883.setTransform(548.7,356.8);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#6E6791").ss(2,1,1).p("AiiEAIFFn/");
	this.shape_884.setTransform(73.6,245.5);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("#6E6791").ss(3,1,1).p("Ayzm4IAGAhQAKArAYAuQBOCUC+CCQJdGcXWBF");
	this.shape_885.setTransform(178.4,315);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#6E6791").ss(2,1,1).p("ACAD1Ij/np");
	this.shape_886.setTransform(527.2,245.5);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f().s("#6E6791").ss(3,1,1).p("ASzm4IgFAhQgKArgYAuQhOCUi9CCQpeGc3VBF");
	this.shape_887.setTransform(420.3,315);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#6E6791").ss(3,1,1).p("EgvHAAAMBePAAA");
	this.shape_888.setTransform(299.4,221.4);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#E0AE86").s().p("EgvZASAMAAAgkAMBezAAAMgAXAkAg");
	this.shape_889.setTransform(298.4,336.7);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#664420").s().p("EgvDAU2MAAAgprMBeHAAAMAAAAprg");
	this.shape_890.setTransform(299.4,318.6);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#232E4F").s().p("EgvAAPKIAA+TMBeBAAAIAAeTg");
	this.shape_891.setTransform(300,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_18},{t:this.instance_17,p:{x:537.4,y:212.4}},{t:this.instance_16}]},2).to({state:[{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_18}]},12).to({state:[{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_18},{t:this.instance_17,p:{x:544.2,y:303.4}}]},14).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;