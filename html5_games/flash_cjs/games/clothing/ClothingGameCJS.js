(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.upper = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.thumbPicture = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660066").ss(1,1,1).p("AGXGwIstAAIAAtfIMtAAg");
	this.shape.setTransform(40.8,43.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,83.5,88.6);


(lib.tabArea = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660066").ss(1,1,1).p("AVU4xMAAAAxjMgqnAAAMAAAgxjg");
	this.shape.setTransform(137.3,159.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A1TYyMAAAgxjMAqmAAAMAAAAxjg");
	this.shape_1.setTransform(137.3,159.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.4,274.8,319.2);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Finish", "bold 15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(35.3,2.8);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A88A7").s().p("AFXB6IgEgUIgGgaIgkixIpSAAIgpDLIABgBIgDAVIgWAAIAxjyIJyAAIAyDyg");
	this.shape.setTransform(37.4,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(234,234,234,0.498)").s().p("AACAMIgDgXIADAXg");
	this.shape_1.setTransform(71,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AlVBwIADgVIgBABIApjLIJRAAIAlCxIAFAaIABAAIAEAUg");
	this.shape_2.setTransform(37.5,13.6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.1,0.4,72.7,24.4);


(lib.scroller = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("drag me", "bold 10px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.lineWidth = 44;
	this.text.setTransform(12.8,24.7,0.999,0.999,92.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#01425C").ss(1,1,1).p("AAMkGIBBAQIgEH7Ig/ACIhXgvIAEmcg");
	this.shape.setTransform(7.8,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#02BDEC","#006699"],[0,1],3.8,-23.5,-4.7,28.6).s().p("AgekGIA/AQIgEH7Ig9ACg");
	this.shape_1.setTransform(12.2,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AgsDYIAEmcIBVhCIgDINg");
	this.shape_2.setTransform(4.6,26.4);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.7,-1,20.3,54.8);


(lib.scrollBar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("Ag1aCMAAZg0HIBRgwMgANA1rg");
	this.shape.setTransform(3.1,167.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,-4.6,10.8,343.7);


(lib.question_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Layer 1
	this.question = new cjs.Text("dsadd", "bold 14px 'Arial'", "#000066");
	this.question.name = "question";
	this.question.textAlign = "center";
	this.question.lineHeight = 16;
	this.question.lineWidth = 185;
	this.question.setTransform(115.8,5.3);
	this.question._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question).wait(17).to({_off:false},0).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#356AB9").ss(1,1,1).p("AgTgJQAJgEAKAAQALAAAIAEQAJAFAAAEQAAAFgJAEQgIAFgLAAQgKAAgJgFQgIgEAAgFQAAgEAIgFg");
	this.shape.setTransform(156.6,92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,0.1,0,-1.7).s().p("AgSAJQgJgEAAgFQAAgEAJgFQAIgEAKAAQALAAAIAEQAJAFAAAEQAAAFgJAEQgIAFgLAAQgKAAgIgFg");
	this.shape_1.setTransform(156.6,92.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#356AB9").ss(1,1,1).p("AhMAAQAAgPAWgLQAXgMAfAAQAgAAAWAMQAXALAAAPQAAAPgXAMQgWALggAAQgfAAgXgLQgWgMAAgPg");
	this.shape_2.setTransform(163.2,85.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,0.3,0,-4.6).s().p("Ag2AbQgWgLAAgQQAAgPAWgLQAXgLAfAAQAgAAAWALQAXALAAAPQAAAQgXALQgWALggABQgfgBgXgLg");
	this.shape_3.setTransform(163.2,85.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#356AB9").ss(1,1,1).p("Ah+AAQAAgZAlgTQAmgSAzAAQA0AAAlASQAmATAAAZQAAAagmASQglATg0AAQgzAAgmgTQglgSAAgag");
	this.shape_4.setTransform(169.7,79.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,0.6,0,-7.5).s().p("AhZAsQglgSAAgaQAAgZAlgTQAmgSAzAAQA0AAAlASQAmATAAAZQAAAagmASQglATg0AAQgzAAgmgTg");
	this.shape_5.setTransform(169.7,79.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#356AB9").ss(1,1,1).p("AivAAQAAgjAzgaQA0gaBIAAQBJAAA0AaQAzAaAAAjQAAAkgzAaQg0AahJAAQhIAAg0gaQgzgaAAgkg");
	this.shape_6.setTransform(176.3,73.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,0.8,0,-10.4).s().p("Ah8A+QgzgaAAgkQAAgjAzgaQA0gaBIAAQBJAAAzAaQA0AaAAAjQAAAkg0AaQgzAahJAAQhIAAg0gag");
	this.shape_7.setTransform(176.3,73.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#356AB9").ss(1,1,1).p("AifBQQhCghAAgvQAAgtBCgiQBCggBdAAQBdAABDAgQBCAiAAAtQAAAvhCAhQhDAghdAAQhdAAhCggg");
	this.shape_8.setTransform(182.8,66.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1,0,-13.4).s().p("AifBPQhCggAAgvQAAgtBCgiQBDggBcAAQBdAABDAgQBCAiAAAtQAAAvhCAgQhDAihdAAQhcAAhDgig");
	this.shape_9.setTransform(182.8,66.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#356AB9").ss(1,1,1).p("AkBAAQAAg0BLgmQBMgmBqABQBrgBBLAmQBMAmAAA0QAAA1hMAmQhLAlhrAAQhqAAhMglQhLgmAAg1g");
	this.shape_10.setTransform(180.3,59.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1.1,0,-15.3).s().p("Ai2BbQhLgmAAg1QAAg0BLgmQBMgmBqABQBrgBBLAmQBMAmAAA0QAAA1hMAmQhLAlhrAAQhqAAhMglg");
	this.shape_11.setTransform(180.3,59.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#356AB9").ss(1,1,1).p("AkhAAQAAg7BVgqQBVgqB3AAQB4AABUAqQBVAqABA7QgBA8hVAqQhUAqh4AAQh3AAhVgqQhVgqAAg8g");
	this.shape_12.setTransform(177.8,51.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1.3,0,-17.2).s().p("AjMBmQhVgqAAg8QAAg7BVgqQBVgqB3AAQB4AABUAqQBVAqABA7QgBA8hVAqQhUAqh4AAQh3AAhVgqg");
	this.shape_13.setTransform(177.8,51.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#356AB9").ss(1,1,1).p("AlBAAQAAhBBegvQBfgvCEAAQCFAABeAvQBeAvABBBQgBBCheAvQheAviFAAQiEAAhfgvQhegvAAhCg");
	this.shape_14.setTransform(175.2,44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1.4,0,-19.1).s().p("AjjBxQhegvAAhCQAAhCBeguQBfgwCEABQCFgBBeAwQBeAuABBCQgBBCheAvQheAviFAAQiEAAhfgvg");
	this.shape_15.setTransform(175.2,44.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#356AB9").ss(1,1,1).p("AD6h8QBnA0AABIQAABJhnA0QhoAziSAAQiRAAhogzQhng0gBhJQABhIBng0QBogzCRAAQCSAABoAzg");
	this.shape_16.setTransform(172.7,37);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1.5,0,-21).s().p("AAACwQiRAAhogzQhng0AAhJQAAhIBng0QBogzCRAAQCSAABoAzQBnA0AABIQAABJhnA0QhoAziSAAIAAAAg");
	this.shape_17.setTransform(172.7,37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#356AB9").ss(1,1,1).p("AmVAAQAAhIB3gzQB3g0CnAAQCoAAB2A0QB3AzABBIQgBBJh3A0Qh2AzioAAQinAAh3gzQh3g0AAhJg");
	this.shape_18.setTransform(167.5,33.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1.5,0,-21).s().p("AkeB9Qh3g0AAhJQAAhIB3g0QB3g0CnABQCogBB2A0QB3A0ABBIQgBBJh3A0Qh2AzioAAQinAAh3gzg");
	this.shape_19.setTransform(167.5,33.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#356AB9").ss(1,1,1).p("AnJAAQAAhICGgzQCGg0C9AAQC9AACGA0QCGAzABBIQgBBJiGA0QiGAzi9AAQi9AAiGgzQiGg0AAhJg");
	this.shape_20.setTransform(162.4,29.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1.5,0,-21).s().p("AlDB9QiGg0AAhJQAAhICGgzQCGg0C9AAQC9AACGA0QCGAzABBIQgBBJiGA0QiGAzi9AAQi9AAiGgzg");
	this.shape_21.setTransform(162.4,29.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#356AB9").ss(1,1,1).p("An9AAQAAhICVgzQCWg0DSAAQDTAACVA0QCVAzABBIQgBBJiVA0QiVAzjTAAQjSAAiWgzQiVg0AAhJg");
	this.shape_22.setTransform(157.2,26.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1.5,0,-21).s().p("AloB9QiVg0AAhJQAAhICVgzQCWg0DSAAQDTAACVA0QCVAzABBIQgBBJiVA0QiVAzjTAAQjSAAiWgzg");
	this.shape_23.setTransform(157.2,26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#356AB9").ss(1,1,1).p("AIyAAQAABJilA0QikAzjpAAQjoAAilgzQikg0AAhJQAAhICkgzQClg0DoAAQDpAACkA0QClAzAABIg");
	this.shape_24.setTransform(152,22.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],0,1.5,0,-21).s().p("AAACwQjoAAilg0QikgzAAhJQAAhICkgzQClg0DoAAQDpAACkA0QClAzAABIQAABJilAzQikA0jpAAIAAAAg");
	this.shape_25.setTransform(152,22.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#356AB9").ss(1,1,1).p("AqggcQAAhOCbgmQFYgnGJAAQDOAAB7A9QB7BEABBTQgBBNiaAnQlYAnmIAAQjPAAh8g9Qh7hFAAhSg");
	this.shape_26.setTransform(143.6,23);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],-4.4,3.1,-4.4,-23.4).s().p("AolB7Qh7hFAAhSQAAhOCbgmQFYgnGJAAQDOAAB7A9QB7BEABBTQgBBNiaAnQlYAnmIAAQjPAAh8g9g");
	this.shape_27.setTransform(143.6,23);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#356AB9").ss(1,1,1).p("AsOg5QAAhSCQgaQILgaIrAAQCzAABSBHQBSBVAABdQAABSiRAaQoKAaorAAQizAAhShHQhShVAAhdg");
	this.shape_28.setTransform(135.3,23.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],-9,4.8,-9,-25.8).s().p("Aq8B5QhShVAAhdQAAhSCQgaQILgaIrAAQCzAABSBHQBSBVAABdQAABSiRAaQoKAaorAAQizAAhShHg");
	this.shape_29.setTransform(135.3,23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#356AB9").ss(1,1,1).p("At9hXQAAhWCGgNQK+gNLNABQCXgBApBRQAqBlAABpQAABWiGANQq+AMrNAAQiYAAgphQQgphlAAhpg");
	this.shape_30.setTransform(126.9,23.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],-13.5,6.4,-13.5,-28.2).s().p("AtUB3QgphlAAhpQAAhWCHgNQK+gNLMABQCYgBApBRQApBlAABpQAABWiHANQq9AMrMAAQiZAAgphQg");
	this.shape_31.setTransform(126.9,23.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#356AB9").ss(1,1,1).p("APth0QAAhah9AAI7fAAQh9AAAABaIAADpQAABaB9AAIbfAAQB9AAAAhag");
	this.shape_32.setTransform(118.5,23.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FFFFFF","#FEF4AB"],[0,1],-18,8,-18,-30.7).s().p("AtvDPQh9AAAAhaIAAjpQAAhaB9AAIbfAAQB9AAAABaIAADpQAABah9AAg");
	this.shape_33.setTransform(118.5,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.playagain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play Again", "bold 17px 'Arial'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.setTransform(63.6,5.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],2.1,3.2,2.1,-11.4).s().p("Ap2BEIAAgFQAAg2AnglQAngnA2AAIPlAAQA2AAAnAnQAnAlAAA2IAAAFg");
	this.shape.setTransform(66.1,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(43,84,145,0.702)").ss(2,1,1).p("AJlhxQgvgwhDAAIvlAAQhDAAgvAwQgwAvAABCQAABDAwAvQAvAwBDAAIPlAAQBDAAAvgwQAwgvAAhDQAAhCgwgvg");
	this.shape_1.setTransform(66.1,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0066CC","#00CCCC"],[0,1],0,13.2,0,-11.9).s().p("AnyChQhDABgvgwQgwgvAAhDQAAhCAwgvQAvgwBDAAIPlAAQBDAAAvAwQAwAvAABCQAABDgwAvQgvAwhDgBg");
	this.shape_2.setTransform(66.1,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AnyCiQhDgBgvgvQgwgwAAhCQAAhBAwgwQAvgvBDAAIPlAAQBDAAAvAvQAwAwAABBQAABCgwAwQgvAvhDABg");
	this.shape_3.setTransform(66.1,20);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,134.3,37.2);


(lib.palmDress = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.middle = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.head = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.congratulation = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("You finished the game!", "bold 22px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 244;
	this.text.setTransform(152.2,97.7);

	this.text_1 = new cjs.Text("Congratulations!!", "bold 25px 'Arial-Black'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 258;
	this.text_1.setTransform(152.2,50);

	this.text_2 = new cjs.Text("You finished the game!", "bold 22px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 244;
	this.text_2.setTransform(154,100.5);

	this.text_3 = new cjs.Text("Congratulations!!", "bold 25px 'Arial-Black'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 27;
	this.text_3.lineWidth = 258;
	this.text_3.setTransform(154.1,52.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,1).p("A8kvGQhGAAAABGIAAcBQAABGBGAAMAwGAAAQBGAAAAhGIAAwzIJDkHIpDgiIAAmlQAAhGhGAAg");
	this.shape.setTransform(188.3,92.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFF00","#FF9900"],[0,1],-27.1,110.7,0,-27.1,110.7,340.9).s().p("A8kPHQhGAAAAhGIAA8BQAAhGBGAAMAwGAAAQBGAAAABGIAAGlIJDAiIpDEHIAAQzQAABGhGAAg");
	this.shape_1.setTransform(188.3,92.9);

	this.addChild(this.shape_1,this.shape,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,-6.4,384.9,198.6);


(lib.colorArea = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660066").ss(1,1,1).p("AlcBpIK5AAQAyAAAAgyIAAhtQAAgygyAAIq5AAQggAAgMAUQgGAMAAASIAABtQAAAyAyAAg");
	this.shape.setTransform(40,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AlcBoQgyAAAAgyIAAhsQAAgSAGgLQAMgVAgABIK5AAQAyAAAAAxIAABsQAAAygyAAg");
	this.shape_1.setTransform(40,10.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,82,23);


(lib.character = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.buttom = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93A6D2").s().p("AmmhkINNAOIgvC7Ir/AAg");
	this.shape.setTransform(42.9,10.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0,84.7,20.4);


(lib.thumbnail = function() {
	this.initialize();

	// Layer 1
	this.textArea = new cjs.Text("Dress Name", "bold 15px 'Arial'", "#003300");
	this.textArea.name = "textArea";
	this.textArea.textAlign = "center";
	this.textArea.lineHeight = 17;
	this.textArea.lineWidth = 91;
	this.textArea.setTransform(46.8,89.5);

	this.pictureArea = new lib.thumbPicture();
	this.pictureArea.setTransform(49.4,48.3,0.9,0.9,0,0,0,40.7,43.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9DADB7").ss(1,1,1).p("AnqjCIAAE4QAABNBKAAINAAAQBLAAAAhN");
	this.shape.setTransform(49.1,94.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9DADB7").ss(1,1,1).p("AHrISIAAvXQAAhMhLAAItAAAQhKAAAABMIAAKd");
	this.shape_1.setTransform(49.1,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#F5F8F8","#D3DCDE"],[0,0.8,1],0,-51.8,0,56.1).s().p("AmgImQg4AAAAg6IAAvXQAAg6A4AAINBAAQA4AAAAA6IAAPXQAAA6g4AAg");
	this.shape_2.setTransform(49.1,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmgI4QhJAAgBhMIAAk6IAAqdQABhMBJAAINBAAQBJAAAABMIAAPXQAABMhJAAgAnYnrIAAPXQAAA6A4AAINBAAQA4AAAAg6IAAvXQAAg6g4AAItBAAQg4AAAAA6g");
	this.shape_3.setTransform(49.1,56.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.pictureArea,this.textArea);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,100.2,115.7);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.scroller = new lib.scroller();
	this.scroller.setTransform(16.8,43.8,1,1,0,0,0,11.7,43.1);

	this.scrollBar = new lib.scrollBar();
	this.scrollBar.setTransform(26.1,170.9,1,1,0,0,0,21.1,165.9);
	this.scrollBar.alpha = 0;

	this.addChild(this.scrollBar,this.scroller);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,0.2,19.8,343.9);


(lib.girl = function() {
	this.initialize();

	// Layer 7
	this.upper = new lib.upper();
	this.upper.setTransform(17.3,88.4,1,1,0,0,0,16,9.5);

	// Layer 3
	this.top = new lib.head();
	this.top.setTransform(28.4,9.3,1,1,0,0,0,16,9.5);

	this.middle = new lib.middle();
	this.middle.setTransform(34.1,233.3,1,1,0,0,0,6.8,5.4);

	// Layer 6
	this.lower = new lib.middle();
	this.lower.setTransform(34.1,233.3,1,1,0,0,0,6.8,5.4);

	// Layer 2
	this.bottom = new lib.buttom();
	this.bottom.setTransform(30.4,431.5,1,1,0,0,0,8.2,11.2);

	// Layer 4
	this.bottomdown = new lib.buttom();
	this.bottomdown.setTransform(30.4,431.5,1,1,0,0,0,8.2,11.2);

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9984").ss(1,1,1).p("AgzAIQAIACAJACQAVAFATgDQATgBASgIQAEgCADgCIAIgCQgEgHgEgDQgEgDgGAAQgHgBgQAGQgRAGgJgDQgMgDgMgCQgNgCgLAQQAAABABABQACABADACg");
	this.shape.setTransform(69.2,64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC9B4").s().p("AgFARQgdgCgIgLQgHgJgBgFIARAFQAVAEATgCQATgBASgIIAHgEQABAJgGAHQgHAGgQAGQgNAFgKAAIgFAAg");
	this.shape_1.setTransform(69.1,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF9F7E").s().p("AgiAMIgRgEIgFgDIgBgCQALgQANACQAMACAMADQAJADARgGQAQgGAHABQAGAAAEADQAEADAEAHIgIACIgHAEQgSAIgTABIgNABQgOAAgNgDg");
	this.shape_2.setTransform(69.2,64.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(216,95,82,0.8)").ss(1,1,1).p("AgVg3QAAgBAAAAQAAAAAAABAAWA5QgGABgGgBQgKgBgIgG");
	this.shape_3.setTransform(53.4,42.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#0099FF","#01385C","#000033"],[0,0.494,1],0.2,-1.9,0,0.2,-1.9,5.4).s().p("AgHAgQgMgBgIgGIgGgIQgIgNgBgIQAAgLAFgNQApgLAnAeQgJAYgMAKQgIAFgLACIgGAAIgEAAg");
	this.shape_4.setTransform(55.3,45.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhGAeQAGgKAIgIIgagJQARAEATgFIADgBQgSgEgIgNQAQAMAYgDQgQgMgIgSQARAVAcAFIADAAQgOgQgCgVIAAgBIABABQANAaAYAMQAtAKAVAoQgKgLgLgIQgmgcgqAJQgTAFgWAYQADALAMAIIgBAAQgJAAgQgUgAgcgGIAAAAIgBgBg");
	this.shape_5.setTransform(53.3,42.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA9E80").s().p("AgtgBQgQAHgIALIAAgBQAFgQARgJQAPgIAUgCQAKgCAJAAQAXACATARQANAKAIAOQglg3hOAgg");
	this.shape_6.setTransform(53.8,41.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#0099FF","#01385C","#000033"],[0,0.431,1],-0.9,-2,0,-0.9,-2,7.4).s().p("AgVAYQgMgJgJgZQAngdApALQAFANAAALQgBAIgIANQgIANgSACIgFAAQgNAAgLgIg");
	this.shape_7.setTransform(81.6,45.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAtAyQALgIAEgLQgWgYgUgFQgpgJgnAcQgKAIgKAMQAVgpAtgKQAYgMAOgbQgCAWgOAQIACAAQAcgFASgVQgIASgQAMIgBABIAAAAIABgBQAXADARgLQgJAMgRAEIACABQATAFASgEIgaAJQAHAIAHAKQgRAUgIAAIgBAAg");
	this.shape_8.setTransform(83.6,41.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA9E80").s().p("AgwgCQATgRAXgBQAJgBAKACQAUACAPAIQAQAJAHAQIgBABQgJgLgPgHQhOggglA3QAIgOANgKg");
	this.shape_9.setTransform(83.1,40.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(216,95,82,0.8)").ss(1,1,1).p("EAEJghuQgqgcgOgyQgEgMgHgLQgTgegcgTIARATIgwgZIAAAKIAgAXIAAAAQAAABgBAAEACYgjpIgBABQgbgFgSgSQgCgDgCgDQABAEACADQALAXAeAMQACABABACQgzgIgVgqQgGgJACgJQgOABgYAPQgNAJgJANIAHgYQgLAagaAJQgIACgGAEEgCcgmeQBwg2B2AiQBjAdA0BXQA1BbgGBoIgCAMIAAABIAAADQAAAAAAgBEAENghnIgCANIAAgCQABgGABgFgEAEOghmIgBgBIAAAAIgEgHEAEOghrIgBAEEAELghcIgCgSADz//QAFgSAFgSQAHgcAHgdADs/pQAEgLADgLQAJgDAJgDQAmAGgHAqQgGAkgYAbIgGAHIgDACQgaAcgeALQgJADgIABIgJAOADs/pQAPgEAPAHQADABABACIAAAdAD8+5QAAgLgJgHQgHgFgIgBQAEgMAEgMADh/HQACgFABgFADh/HQAGAEAEAGQAFAJgEAJQgCACgBADQgEAFgIADQgHADgHAAQAJgVAJgXgADK+OIALAOIAdgeQgEgEgFgEAC39pQAFgJAEgKQACgDABgCQADgHAEgGQACgHADgGAC39pIgDAHACp9SIAAAAQABgBABgBIABgCQAFgKAGgJACr9UIAAAAQABgBAAgBACp9RIAAAAIAAgBACp9RQAAAAAAgBAEA+PQAYAdAAAjQAAAGgBAHQgBADgBACIAAACQgJAtAAAMQAAAWADAHQAEAHAGAIQAFAIAnAUQgYgEAAAJQAAAEAMAQQgMADgTgKQgYgNgJAAQgGAAgLAXQgGgCgPgRQgPgRgDAAQgFAAgEAPQAAAAgDAAQgFgKgDgFQgEgJACgKIgBAAQgMAHgDAAQgKAAAAgZQAAgdAXgiQAYgogXgDABt8HQAYgWAVgdQABgCABgCIAAAAQAHgJAGgKAGtFpQAZgFANgVQAIgMAIgNQAmg5gDhCQgGhfgEheQgEhUANhVQANhXAChZQAEh7ADh6QAChZAFhZQAGh4AFh3QADg+gCg/QgEiOgCiOQgBhXgyhGQgcgmgwgJIiGgKQg8gHg7gKQgYgEgJgWQgWgugGg0IgCgaEgDkgliQBRAdBTgSQALgEAMgDQgDgBgbgJQgxgRglgkIABgBIgBABQgcAPgTARIgEAEgEgAggjnIAdgmIhhAtIAYgZIhpAbIBVg5QhYAAgsBGQgPAZgIAdQgGAYgOATQgXAkALAvEgAggjnQAAABAAABIABAAgEgElghAIgEgTQgZh7BDhrQANgVAOgUEgEhgguIAAgBIAAgBIgCgKIgBgEIgBgCEgEkghAIgBAAEgEhgguIACAEEgEhgguQAAACABACQAFAVAGAUQADALAEAMAj++9QAFAMAGAMIgQgMgAkF/QQAEAKADAJAkF/QQgHACgGAEQgJAHAAAKAkP+bIAcAbQACAAAAgBQACgCABgDQAAgCAAgDIAFgDQAMAXANAVIAAABQAsBGA9ApQAWBQgNBPQgBAFgHACIAAAAIiAAwIgaAJIgIADIgBABIgFACIgCABIAAAAAjz+lQAFAMAFALAhn7yQAYAQAbAMQAqANAXgIQAZgJABAAQAmgPAggeAkQ4MIgxAWIgJAIIgBABIgBABIgBAAEgEVggBQgZgLgTAYQgKAOAFARQAbBaBbAZAku/GIAAgdQAPgMARAFQAEANAFANAkQzPQAQgvgWgqQgDgFgCgDIgBgBIgEgFIgBAAIgPgLAkQzPQA3gOA6gGQA0gHA1gBQA1gCAzAEQACAAACAAQC4APBKASQAAAAAAAAQAAAAABABQAbAFAcAXIgkjOAlB32IgOAKIghAiIAAAAQgfA0gEA7QgKCVgJCVQgHBigLBiQgLBugTBtQgMBMgLBLQgRB0gBB3QgCBagFBZQgGBogaBpQgYBgA2BVIAdAXIgMgUIggh6AkQzPIgjA9IgIBPIALA8IAQBFIAHAhQAQABALAAQBMgFA7gXQACAAABgBQBSgYBrAeIAGABQBaAcBGAKQAuAHAlAAQACgNADgMIACgJIAKguIAgiBIgDhNIAAgBIAAgDAkZuhIACAMIgwGtQAYhHARhIQAIgjAEgiQAKhsgPhtAGHlyQgIh4gMh6QgLhvAOhtIABjZIAAgQIgBgEIAAgEIgDgpAF3wpIgBgIAGHlyIgxhgIgPgcQg5huAWh9QAGgeAEgeQAJg7ALg5AGIlWIgBgcAFBFtQAEgJAGgJQAKgOAIgQQAYgwAEg3IAAAAQAAgRgKgOQgHAigFAjQgGAjgcAQQgHADgHgBQgLgLAGgaQAWhuAchtQARhBAZhCQAHgVACgWQACgjAAgjIAAgKIgNiJAlxk5IABAAIAAABIAdAPQBCAoBNAFQB5ADBzgcQB8gdB8gTIBogRAF3GIQANgLAKgNQAOgUAMgWIAohtAGtFpIAcgsIAjhiAFaGHIAigrIAAAAIAuiKAFaGdIAAAAIAGgDAF3GIIgXASIAegTIAvgeAFaGdIAdgVAFaGHIggAVQgEgYALgXAFaGdIAAgWAghGOQAhABAgABQCeADBOgTQAhgIAUgLAiIoqQAFAigJAgIAAAAIgCAHIgEALAlHnoIAAABQgHAdgHAdAlqlaIAGgWIAPg9IgNA6IgIAZIgGAXIglBwIgBAJIgCB4IAPh8IARhMIACgJIACgIIACgKIAAgCAlxk9IAAAAIAHgdAlxk9IAAAEAlyk1IABgEAl2kjIAEgUIABgGAl0AmIAAgFIgCgGIAAADIAAAGgAl1EYQgHgCgEgEQgWgUgBgeQgDghgDghQgEAJgCAHQgNBMAiBGQAEAKAFAKQALAWgKATIgcgYIgCAUIgFgDIgUgUIAZAXAl1EYIAJgBIgIjxAm7E4IAAABIAbAsIAAAAAm6E4IgBAAIgciHAmnF2IgWgRIguglAl1EYQAHAgAJAhQAAACABADQAAAEACAEQAEASAEARQABAEACAFQARBIATBJQAUBSAYBQQAZBTARBVQASBdANBcQAAB8AEB8QACBuAUBsQAWB8ARB7QASCAgMCAQgEAqgSAmQgXAygZAxQgpA6g5AuQgLAJgGAOQgQAkAUAkIA4gfAm7FiIgggwIggh/AghGOQgbAFgZAEQjrAmgXgrAghGOQADASACARQANBwAEByQAFB0AGB2QAEBWAJBUQAOB7ASB4QAJA7AJA7IAsETIAKD6QgOBqAHBuQAEBIAIBJQAIBNALBOQACAVAUAHQAjAMAZgcQBQALAyg+QAIgKACgMQAEgXgEgVQgPg1gbgxQgTgjgOgmQgOgmgLgmQgGgVAFgUQARhMgUhMQgEgOABgPQAHh6ASh6QARh9AHh/QAHh1gIh0QgEg5gOg5IgXhXAl2AbIgihtAEHOyQAHhyAPhyQARh2Aah0IAShHEgExAlyQAUASAWAHIAAAAQAjAKAngSQAEgCADgDQA1guArg6QAkgwAvglQAdgYAdgcIAKgRQAQhcgehZQgHgTgCgUQgMh5AIh5QAGhsAMhsQADgjAEgjEADfAmtIgEghIghg8");
	this.shape_10.setTransform(70,250.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF4EA").s().p("AAAgCIAAAAIAAAFg");
	this.shape_11.setTransform(55.8,202.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFAAD0").s().p("AkxFTIABABIgCADgAEylUIACgCIAAACIgCAAg");
	this.shape_12.setTransform(63.7,185.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFAED7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(94.4,151.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AA9FD7").s().p("AlVMiIgDgJIgIgjQAtAZBmgJQAnADAugJQAmgMAtgFQAhgEAjAAIAGAAIAIAAIAzAAQDUhbACnKQgDgogEgnQhMAMhIAaQhCAYhDARQhHAQhMgCQhOgEhJgbIgYgJQgEAtgkA9QgOAYgHAUQABARAKBAQAJA/AABEQAABEgGA7IgIBUIgQhBIAJgBIgIjxIAAgFIgCgGIgihvIAPh8IARhMIAEgRIACgKIACgDIAdAPQBCAoBNAFQB5ADBzgcQB8gdB8gTIBogRIANCJIAAAKQAAAjgCAjQgCAWgHAVQgZBCgRBDQgcBtgWBuQgGAaALALQAHABAHgDQAcgQAGgjQAFgjAHgiQAKAOAAARIAAAAQgEA3gYAwQgIAQgKAOQgGAJgEAJQgUALghAIQhOATiegDIhBgCQgbAFgZAEQhvASg/AAQhIAAgMgXgAD2pSIAAgCQAKhPAYhEIAVg0QAJgXAEgGIABABQAbAFAcAXIAAADIgDgBIADACIADBNIggCBIgVABQgkAAgmgKg");
	this.shape_14.setTransform(69.8,210.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5ACDB").s().p("ADbApQhGgKhbgcIgFgBQhrgchSAYIgDABQg7AVhMAFIgbgBIgHgfIAZgBIAJAAQBCgFA0gTIAJgEIADgBQBSgXB0AeIACABQAoAMAkAJQAuAJAnAGIABAAIADAAIAYAEQAfADAhAAIgCAJIgGAZIgEAAQgkAAgqgHg");
	this.shape_15.setTransform(72.1,155.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFDABF").s().p("AgDAHIAEgOIAAAFQAJABgMAIIgBABg");
	this.shape_16.setTransform(35.7,110.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DCD5EE").s().p("AEMAuQgngGgugLQgkgJgogMIgCAAQh0gdhSAWIgDABIgJADQg0AThCAFIgJAAIgZABIgQhDQAkAlBugdQBsgdBhAWQBiAXBiANIgBADIgEArIAAAAg");
	this.shape_17.setTransform(67,151.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C8BDE3").s().p("AlWMgIgCgIIgBgFIAJhTQAGg7AAhFQAAhEgKg/QgJg/gCgRQAHgVAPgXQAjg9AFgtIAYAIQBJAbBOAEQBMACBHgQQBDgQBBgYQBJgaBLgMQAFAnADAoQgDHKjUBaIgyABIgIAAIgGAAQgmAAgfADQgsAFgmANQgvAIgngDQgbACgXAAQg/AAgigSgAEVn0IgXgDIgEgBIAAAAIAFgrIABgEQhjgOhigXQhggWhtAdQhtAdgkglIgMg8IAIhOIAjg+QA3gNA7gHQA0gGA1gCQAzgBA0AEIAFAAQC3APBLARIgBABQgDAGgJAWIgWA0QgXBFgKBOIgCACIABABIABgBQAxAOAugEIgKAtQgiAAgfgDg");
	this.shape_18.setTransform(68.8,206.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE7D5").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_19.setTransform(60.2,89.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECFBC").s().p("Al3PUIACgDIAUAUgAnCOZIARACIAMAUgAG/NGIAAgBIAEABgAAOp8IAAgBIAtgDQAegDAfAIIAAABQg1gDg1ABgAjVrBIAHAFIgCADIgFgIgAkEt+IgBAAIABgBIAAABgAggvdQAHgBABgGIACADIgEAEIgCABIgEAAg");
	this.shape_20.setTransform(63,188.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE0CE").s().p("ADQTlIABgCIAAAEgAElKxIAhgrIAAAAIAVgQIAYgGIAggJIAbgHIgQAZQgOAVgYAFIAbgsIgbAsIgvAeIgGADIgCgCQANgLAKgNQAPgUAMgWQgMAWgPAUQgKANgNALIgcAVIgBAAgAmsFIIAAgDIACAGIgCgDgAmsFIIgBgCIABgBIAAADIAAAAgAmKiDIgOA6IgCADgAESjEIADAGIABAAIAKAWgAEHurIAAgIIACAIgAgCu/IAAgBIADABIgDAAgAlWwMIgBAAIABAAIgBABIAAgBIABgFIAEAKgAlWwMgAlnwXIACAAIAAABgAmAzDIgCABIAAAAIgCAAgAmAzDIAAAAIgCABgAk/zmIABAAIABAAIgCABIgEACg");
	this.shape_21.setTransform(75.4,221.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_22.setTransform(49.6,52.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FF7984","#FFD5D5"],[0,1],-1.5,2.8,0,-1.5,2.8,6.1).s().p("AhIAHIAAAAIAAAAgABIgGIABAAIAAAAg");
	this.shape_23.setTransform(69.4,64);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E79572").s().p("AAVgFIAHACIAAABIACAEIgIgCIgPAGgAgVAAIgHACIgBAAIAEgHIAGABIALAKg");
	this.shape_24.setTransform(69,58.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C79287").s().p("AAAACIAAgDIAAADg");
	this.shape_25.setTransform(40.9,41.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AE8A80").s().p("AhcAUIATgVIAEgEQAUgRAcgPIAAAAQAjAkAwAPIAfAKIgXAHQghAHggAAQgwAAgxgSg");
	this.shape_26.setTransform(56.5,8.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEC9B4").s().p("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");
	this.shape_27.setTransform(66.1,267.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFCACA","#FFF1E3"],[0,0.906],-32.7,-8.3,0,-32.7,-8.3,14.8).s().p("AhNAkIADgEIgDAFgABAgRIAOgTIAAAAIAAABIAAgBIAAABIgNASg");
	this.shape_28.setTransform(79.2,67.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFCACA","#FFF1E3"],[0,0.906],17.7,17.2,0,17.7,17.2,14.8).s().p("ACVDXIABgCIALgTIgDAHIgIAOIAAgCIAAACIgBAAIABAAIgCACIABgCgACWDXgAihhKIABgCIABADgABQjYIAFAGIgBABIgEgHg");
	this.shape_29.setTransform(72.2,41.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#AC7339","#31211C"],[0,1],4.2,0.3,0,4.2,0.3,17.8).s().p("AgXBlQgOgRgEAAQgEAAgFAPIgDAAIgHgPQgEgJABgKIgBAAQgMAIgDgBQgKAAAAgZQAAgdAYggQAXgogWgCIAAgBIAAgBIACgCIAIgNQAJgCAIgDQAegLAYgbIADgDQAYAeAAAiIgBANIgBAGIAAABQgJArAAAMQAAAWADAHIAJAPQAGAIAnAUQgYgEAAAKQAAADALAQQgMADgTgKQgYgMgIAAQgHgBgJAXQgGgBgPgSg");
	this.shape_30.setTransform(93.6,69.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#976F5E").s().p("AkZCtIABAAIAAACgAEYCTIACgMIAAAAIgCAPIAAgDgAEaCHgAEaCHIAAgBIAAgEIAAAFgAiRiuIABgBIgBABg");
	this.shape_31.setTransform(68.8,22.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8A5139").s().p("ACbgUQAtgFAiAXIAKAFQhbgZhaAsQAoggA0gKgAhoAFQhFgThGARIAVgKQAfgRAmAEIAbAIIACAAIAJAEQAgAIAWAWQgVgKgWgHg");
	this.shape_32.setTransform(68.8,35.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF1E3").s().p("EABjAiQIAAAaIgKASgAmZFnIABAAIgBAAgAlUBTIAAgGIACADIAAAEgAlPkJIABgFIAAADIgBAFgAlOkVIAGgWIgGAcgAlClBIACgEIgIAagAGYv/IABAEIABAQgAGYv/IAAgDIABAHgAGYv/gAkN0RIAAgBIAOAKIAAACgAlO2bIAAgBIADADgAkf3HIAxgXIAAAAIAAAAIADgBIgDABIg6AfgAjm3hIAIgDIgIADIgBAAIAJgDIAagKIABADIgbAKgAhE4eIAAAAIAAABgAEo9nIABAAIgHAGgAjg+DIAEgMIALAZgEAAAgi3IAAgBIABABgEAC6gi7IABABIgCAAg");
	this.shape_33.setTransform(66.6,246.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#AC7339","#31211C"],[0,1],-2.8,-13.6,0,-2.8,-13.6,42.5).s().p("AkPDEIgCgEIAAgBIAAgBIgCgKIAAAAIgBgEIAAgCIgBAAIgEgTQgZh7BDhpIAbgpQBRAdBTgSIAXgHIgegKQgxgRglgkIABgBQBwg2B2AiQBjAdA0BXQA1BZgGBoIgCAMIAAABIAAACIAAABIgBAEIgEgHQgqgcgOgyQgEgMgHgLQgTgcgcgTIARATIgwgZIAAAKIAgAVIgBABQgbgFgSgQIgEgGIADAHQALAVAeAMIADADQgzgIgVgoQgGgJACgJQgOABgYAPQgNAJgJANIAHgYQgLAagaAHQgIACgGAEIgBgCIAbgkIhfArIAYgXIhpAZIBVg3QhYAAgsBEQgPAZgIAdQgGAYgOATQgXAkALAvIgEgNgAEbCSIgCgSIAEAHIAAAAIgCALIACgLIgCANgAEZCAg");
	this.shape_34.setTransform(68.4,22.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE6CC").s().p("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");
	this.shape_35.setTransform(70,256.5);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.bottomdown,this.bottom,this.lower,this.middle,this.top,this.upper);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.2,0.3,113.8,501.4);


(lib.colorThumbnail = function() {
	this.initialize();

	// Layer 1
	this.textArea = new cjs.Text("t", "bold 14px 'Arial'");
	this.textArea.name = "textArea";
	this.textArea.textAlign = "center";
	this.textArea.lineHeight = 16;
	this.textArea.lineWidth = 76;
	this.textArea.setTransform(42.2,25.4,0.9,1);

	this.colorCell = new lib.colorArea();
	this.colorCell.setTransform(45,14.5,0.9,0.737,0,0,0,40,10.5);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9DADB7").ss(1,1,1).p("AG7DgQAAAag1AAIsLAAQg1AAAAgaIAAm/QAAgaA1AAIMLAAQA1AAAAAag");
	this.shape.setTransform(46.1,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#F5F8F8","#D3DCDE"],[0,0.8,1],0,-23.6,0,25.5).s().p("AmFD6Qg1AAAAgbIAAm+QAAgaA1AAIMLAAQA1AAAAAaIAAG+QAAAbg1AAg");
	this.shape_1.setTransform(46.1,26.9);

	this.addChild(this.shape_1,this.shape,this.colorCell,this.textArea);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0.8,90.7,52.2);


(lib.colorTab = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Colors", "bold 14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 59;
	this.text.setTransform(38.3,1);

	this.background = new lib.background();
	this.background.setTransform(57,13.9,1,1,0,0,0,57,13.9);

	this.addChild(this.background,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0,84.7,20.6);


(lib.cloths = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Clothes", "bold 14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 59;
	this.text.setTransform(38.3,1);

	this.background = new lib.background();
	this.background.setTransform(57,13.9,1,1,0,0,0,57,13.9);

	this.addChild(this.background,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0,84.7,20.6);


(lib.boy = function() {
	this.initialize();

	// Layer 7
	this.upper = new lib.upper();
	this.upper.setTransform(17.3,88.4,1,1,0,0,0,16,9.5);

	// palmDress
	this.palmDress = new lib.palmDress();
	this.palmDress.setTransform(70.7,265.2,1,1,0,0,0,72.9,43.5);

	// Layer 3
	this.top = new lib.head();
	this.top.setTransform(28.4,9.3,1,1,0,0,0,16,9.5);

	this.middle = new lib.middle();
	this.middle.setTransform(34.1,233.3,1,1,0,0,0,6.8,5.4);

	// Layer 6
	this.lower = new lib.middle();
	this.lower.setTransform(34.1,233.3,1,1,0,0,0,6.8,5.4);

	// Layer 2
	this.bottom = new lib.buttom();
	this.bottom.setTransform(30.4,431.5,1,1,0,0,0,8.2,11.2);

	// Layer 4
	this.bottomdown = new lib.buttom();
	this.bottomdown.setTransform(30.4,431.5,1,1,0,0,0,8.2,11.2);

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(216,95,82,0.8)").ss(1,1,1).p("AA2gHQADAKgGAJQgGAKgQAFQgWAHgUgCQgdAAgKgYQgCgFgBgDAA2gHIAJgFQgFgHgFgEQgFgFgFgCQgLgDgSAHQgPAHgKgCQgLgDgMgFQgNgEgPAbQABABABACQADABACACQAJAAAJACQAXAFAUgCQAVgCATgGQAEgCAEgCg");
	this.shape.setTransform(58.2,66.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9BAA7").s().p("AgNAUQgdAAgJgWIgDgKIASAEQAWAFAVgCQAVgBATgJIAHgEQADAMgFAHQgHAKgQAFQgQAFgPAAIgLAAg");
	this.shape_1.setTransform(58.2,68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA8A69").s().p("AglAPIgSgEIgFgDIgCgDQAPgZANAFQAMAEALADQAKACAPgHQASgHALADQAFACAFAFQAFAEAFAGIgJAEIgIAEQgTAJgVABIgMABQgQAAgPgEg");
	this.shape_2.setTransform(58.2,65.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87B6C").s().p("AARAEQAMgHAMgCIAFABQADACAAACQgRAAgUAGIAFgCgAgwAAQAPgMARASQgPgHgRABg");
	this.shape_3.setTransform(57.1,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4AA92").s().p("AgeBXIgBAAIACAAgAAbhOIAFgIIgDAJg");
	this.shape_4.setTransform(58.5,51.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9AF95").s().p("AgUBSIgCgBQgRgUgPANIAAABIgEgCIgEgFQgFgLAJgSQgEAQAJAJQAFgLASAHQAPAKAMgBQAKgCALgMQAMgMgFghQgFgZADgcQADgXAKgSIACABIgFARQgCALAAAIIAAAQIAAAOQABAGADAGIAFAKIAGAKIAGAKIAHAKQAFAGABAIQAAAHgEAGQgDAFgFADIgKAEIAAAAQAAgCgDgCIgFgCQgMACgMAJIgFADQgFADgFAAQgIAAgIgDg");
	this.shape_5.setTransform(57.7,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ABUAGQgCgGACgEQgLAJgIATQgDgpA0gPIAAgBQAugHAhAmQgGANgPAHQAJgIAHgKQgPgLgRgFQAKAlgiAOIgGAAQggAAgKgdgAiDAjQghgOAJglQgRAFgPALQAHAKAJAIQgPgHgGgNQAhgmAvAHIAAABQA0APgEApQgIgTgLgJQACAEgCAGQgJAdghAAIgGAAg");
	this.shape_6.setTransform(57.7,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBD9D").s().p("AgIAoIAGgDIACAAIACAAIAGABIAEADIABACIgGgDIgGAAIgKACIgDABIgBAAgAgCgkIgBgBIAAAAIgFgDIgDgCIABAAIAHACIAMgBIADgBIgHAFIgBAAIAAABg");
	this.shape_7.setTransform(57.4,67);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7A3D3A").s().p("ACjgXQAeAMADAMQgmgZhMAiQgMAGgJAIQArg0A7AFgAhQABQhDgagwASIAdgMQBMgSApA9QgOgPgRgIg");
	this.shape_8.setTransform(57,39.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA9E80").s().p("AhgACQgZgGgagDQgTgDgTACQAIgIATgEQATgDAXAKQAXAJAJAHQAIAIAIAKQgLgNgRgGgABXACIAJgGIAKgHQA4gQAYATQgfABgeAGQghAFgVAPIAQgRg");
	this.shape_9.setTransform(57.7,42.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF9984").ss(1,1,1).p("AJrFZQADgIABgKIADgoIAAgUQgBgdAFgbQADgOAAgPIADgTAIGCGIgFADQgFAGgFAOAonlYIAAABIgFAqAoGByQgFgNgFgFIgGgEAp7D5IAAAA");
	this.shape_10.setTransform(71.7,262.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(216,95,82,0.8)").ss(1,1,1).p("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");
	this.shape_11.setTransform(70.9,251);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3D3C7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_12.setTransform(31.3,303.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#95B4E1").s().p("AAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(30.2,247.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FED0B4").s().p("AD7LbIAXgYIgQAqgAkRrsIAFARIgEABg");
	this.shape_14.setTransform(83.3,285.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8E0CB").s().p("AGpPgIACgBIABABgAJzu6IAAAAIADABgAp2vfIAEAAIgEAAg");
	this.shape_15.setTransform(71.2,386.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#81A6DC").s().p("AB7GYIgagFIAAAAIgCgKQgEjkhKixIAAgBIgchDIgDgFIAAAAIAAgBIgHgNQgGgMgDgOQAAApAMAuQAOAzAHA8QAKA8hAD5QgGAHgaAIQgcAIgqACQgqAChEgXQhAgVgQgWIgCgCIAAAAQgOgigJhHQgKhOgGgUIAAgGQgCgxgChFIAOjKIAEhEIAAgBIAEgvIABgBIAAgEIAAAAIACgTQAihPBvAsQBwArBTgUQBRgUA0gUQA0gUBFgHQBogDAaBtIAHAtQASBgACBhQACB1gEB3QgFCGh2A4IgOAGQgvAXgbAFIgdAFIgOAHIgJgBgAljD4IABAAIgBAAgAgNhYIAAABIAAAAIAAABIACgCgAgyF9IgBABQAJgdgIAcgAlYFXIgBgCIAAAAIACACgAlYFXIgBgCIABACgAlZFVIAAAAg");
	this.shape_16.setTransform(66.9,278.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E4AA92").s().p("AjiFMIABAAIAAABgADYg7IAIgRIADABIgDARgABwlMIABAAIAAAEg");
	this.shape_17.setTransform(99.4,285.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8EDAEA").s().p("AllBOIAAgEIAAAEgAFmhNIAAABIgEAAg");
	this.shape_18.setTransform(66.1,239.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#608ED2").s().p("Al0G7IAAAAQgWgJAAgPIgCgqQgCgbgGgiQgHgigGg7QgCgZgDgmQAGAUAKBNQAKBHAOAiIAAACIAAAAIABAAQAQAWBAAWQBEAXAqgCQArgCAcgJQAZgIAGgGQBCj5gJg8QgKg8gOgzQgLgvAAgpQACAOAGANIAHANIAAAAIAAABIAEAEIAdBBIABABQBHCzAEDlIACAKIgCgBIAAgJIAAAJQgcgHAAgNQAAhwgDgfIgFgjIgBgFIgBgJIgCgHQgLg0gVgnQgNC3gBAxIgCA6QgEAJgHAHQgPAQgaAHIgNADQgPACgWACIgMABQgoACg/AAIgCAAQhkAAgWgKgAhZGTIABgBIAEgNIgFAOgABeGuIAOgHIAdgFQAbgEAvgXIAOgGQB2g4AFiGQAEh4gCh1QgChhgRhfIgIguQgahshoACQhFAIg0AUQg0AUhRAUQhTAUhwgsQhvgrgiBPQAFgyAHgyIACgUIABAAIAEADIAmAXIABAAIAKAGQAzAUBRADIBQAAQCHgHDHgpIBfgVIAEAAIAAgBIALgCIABAAIAHgCIAigHIACAJIAAAAIASBSIAOB1IAAAFIAAgFIAAAFIAAAAIABAEIAUCpQAIDzgPBkQgCAhgEAbQADAigBAFQgBAEgOAMIgUAQQgiAZicABIgEAAQg0AAgigEgAmFmWIAHgRIgHARg");
	this.shape_19.setTransform(70.7,276.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F5D9CD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_20.setTransform(26.7,155.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF1E3").s().p("AAAAAIAAgCIAGAFgAgFgCIAFAAIAAACgAAAgCIAAAAg");
	this.shape_21.setTransform(24.2,136.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE0CE").s().p("AAdAPIgCgBIAEACgAgegPIABAAIABABg");
	this.shape_22.setTransform(24.1,136.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAAD95").s().p("ADtNHIAAAAIAAAAgAjsFkIAAAAIAAABgAiVkuIgBgEIACACIgBADIAAgBgAiRs7IAxgLIBzAPIAFAFIAUgBIAIAHIAFAEIABAGIAAAHg");
	this.shape_23.setTransform(41.7,185.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D3A689").s().p("AhwMpIgBAAIAIgBIACAHgAicMNIABgIIAAAKgAknKVQgIgcAJgOIAGABIgHApgAD2AWQAbgDAagGIABAJIgbABIgbgBgABDAIIgBgEQgvh5Abh8IgCgEIgBgIQARAHgCAUIABAmQAIBnAPBhIgGACgAgzo1IACAIIghAGgAEJrjIgBgJIACAJgAgSsuIABAAIAGADIgFAIg");
	this.shape_24.setTransform(47.6,155.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9AF95").s().p("EADfAhaIgWgSQgMgOgHgYQAFABAFAFQAJAKANADIAgAAIAOgLQAGgEADgGIACgNIACAAIACgBIANAIQAIAGAMAAQAmAAAegXQAegWAUglIACAAQAPAUABAVQABAQgHARQgCAHgEABQhQAOhLAnQAEgIAAgNIgBgRIgBgGIgGgWIAGAWIABAGIABARQAAANgEAIQgPAMgQAAQgLAAgMgHgEAEVAhVIAAAAgEgEtAgzIgYgTIAHgWIABgBIAIgNIAFgFIAbAmIAngBQgSASgXAHgEgFVAgeQhDgUgYgUQBKARBBgfQgOALgIAQIgZAcgAiffSQAwguAFhFQAJh9gNh/QgOiBAQiEQAPh4AJh5QAIh3AGh1QgeiPAEiNIABgWQAAh7gFh2IAMgDQAbgHAPgRIgREoIAAAUQAIB7gCB6QgCB9gJB9IgSDyQgKB8AIB8QAHByAMBxIAJBLQhGBGhRA4gAC4bSQAHhbgIhjIgGhOQgGhlgEiIQgEiQgMiPIgjjXIgGhTQgBgjgFgiIgxkBIAAgCIAaAFIAtDHQBCEdASANIADACQBsAVh/BLQgLBLgFBTIAEAfQAQEfAbEdQgMAhgTAYIgBAAIgMAkgAI7CvIgBgEQgCgKABgLQAHgsgEgvIgCgYIALAIIAAAIQAGAFAAACQALAMADAKQAHgRgCgEQAOAJAHgSIAAAAIAEAAIgDApQgBAKgCAHIgUAmIgGAPQgEARgOANQgGgHgEgJgApRB6IgGgOIgWgmQgCgHgBgKIgFgoIAFAoQABAKACAHIgGABIgJgNIgBgBQgMgUgGgcIgDgKIADAKQAGAcAMAUIABABIgcgkIgLgdIARAGIAMACQADAOAOgCIAEgBIAAAAQAIASANgJQgCADAIARQADgJAKgNQAAgCAGgFIAAgIIAKgHIgBAWQgCAvAJAsQABALgBAJIgCAFQgDAJgGAHQgOgMgFgRgAJxBsQACgHABgKIADgpQAOACADgOIALgEIARgIIgJAgIgbAmQAMgVAFgdIACgMIgCAMQgFAdgMAVIgJANgAJxBsIAAAAgAHFgaQgBglAGgkIADgNQAEgXAAgZIAAgHQgCgbAIgPIAZgyQAMgbAGgdQAJgqAGgsIAGgvIgEgxQASAoAIAnQALA5gOA3QgFA0gUA1IgEAFQgVAzgLA0IAEAfIAAABIABgCIAIACIgKA7IABAqQACAZgCAFQgFASgVADgAptBGIAAAAgAnvAcQgBgGAAgXIAAgsIgQhMIADgBIAIARIABABIAAgBIADgfQgNgzgXgyIgEgGQgWg0gHgzQgQg3AJg5QAGgnARgpIgCAxIAIAvQAHAsALApQAHAdANAbIAaAxQAJAOgBAcIAAAGQABAZAGAXIACANQAIAjABAmIgOB2QgVgDgGgRgAmDoHIgDgEIAAgKQAWhAAIhEQAJhQgJhQQgJhegRhcIggi2QgOgxgLg8IABgEIgCgDQgOhRgLhkQAKAJAKAMQBJBbAVEFIAAABQAGAnAPCPIAED9IgKAKQAMAxgMAwQgJAmAJAmIgIACgADqt1QgPhCgeg+IBflIQhoAyhzAHIgBgIQBygZBUhSQAPgPALgTIANgaQAUgoAEguIAwCtQgdDGgXDHQgRCRATCRIAAAAIACAIIAkCAIgiAIIgJACIgKACIgEABIhfAVQBGi1gti9gAoRqvQgWhUANhiQAai4A8i0IgODAIgTCDIgOBUIgYCMgAke9RIAJgGIAOgRQATgiAAhQIAAgtQgCgcgFgbIAFgIQBPApAlAAQAzgBBFgvQALgHAOgMIAAAAIAOBZIABAIIgqACQhuCMiLAlIgXAEgEgCFggCIACAAIAQgEg");
	this.shape_25.setTransform(71.2,285.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFDABF").s().p("EAEOAg/IABgCIgBgCIABAAIABAEIgBgEIAEADIgDABgEAEPAg7IAAAAgEAENAg5IABACQgBgBgBgBQAAgBgBAAQAAAAABAAQAAABABAAgAJyBdIABAAIAAgBIAAABIAAABgApyA2IAAABIAAABgAH5gkIABAAIALgTQAEgFACgBIAAAEIgFADQgFAGgEANgAoLhgIgGgDIAAgDQADAAAEAFQAFAGAHAMIAAABIgDABQgFgNgFgGgAg4h2IABgBIAAABgAE+nwIAIgCIgHACgAH/oeIAAAAIAHAMIgBAJgAH6ovIABAAIgBACgAodo7IAHgNIAAABIgGAVgAoTpZIAAAAIABACIgBgCgAF10xIABAAIAEAggEgEKggoIANAKIAAAAIgBAAgEAAPgg0IALgKIgEAEIgHAGg");
	this.shape_26.setTransform(71.2,281.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFD7BF","#FFEAD5"],[0,1],3.7,16.3,0,3.7,16.3,14.4).s().p("AAAAAIABAAIgBABg");
	this.shape_27.setTransform(37.1,44.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#E7AF98","#EFCEBA"],[0,1],0.4,1.5,0,0.4,1.5,14.4).s().p("AA0CSIgNgKIgRgOIgWgZIgOgYIgBgBIgHgNIgBgEIgRg1IgDgIIgRg4IgCgHIgJgYIgBgDIATgLIACgRQACgIAGgGIAJgHIABAAIAAAIIgEAHIABAPIAAAAIAAABQAFBUAfBKQAGARAOAMQAEAOALANIAaAdIAMAFIgQAJIgFADg");
	this.shape_28.setTransform(40.5,58.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#AC7339","#52382E"],[0,1],-365.7,-63,0,-365.7,-63,696.3).s().p("AgCAAIAFAAIAAAAg");
	this.shape_29.setTransform(31.7,44.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AE8A80").s().p("AAAAAIAAAAIABAAg");
	this.shape_30.setTransform(73.3,6.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EFD3BA").s().p("AjoCiIAEAAIAAABgADZCCIAQgxIACgGIAJAVIAAABQADAEgBAEIgEAJIgDADIgOALIgGADgAjkCAIgNgLIgDgDIgEgJQgBgEACgEIABgBIAIgVIARA4gAD3AqIAAgCIACADgADKiiIABAAIAEADIgCACg");
	this.shape_31.setTransform(58.2,44.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#E7AF98","#EFCEBA"],[0,1],0.7,1,0,0.7,1,14.4).s().p("AhRByQAlgxAYg7IAghPIAFgKQAOgJAIgVIADgHIgBgBIAJgLIADgEQADAJAAALQAOAFAMAIIgBACIgBADIgIAXIgCAIIgDAFIgPAyIgBAAIACAAIgBABIgBACIgCAIIgOAnIgGAQIgNAXIgBABIgMARIgLAOIgLAKQgOALgNAHQgTgIgQgPg");
	this.shape_32.setTransform(74.8,59.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFEAD5").s().p("EgFHAkEIAGgGIgIANIgBABgAlfNbIABAAIgBAGgAG3phIgYiCIgMhuIA1FDIgRhTgAnHwWIABgDIgBAFIAAgCgAiS8AIATgEIgRAEgAmp/dIABAAIAGAHgABL/jIABAAIABAAgEABpgg8IACABIgDACgEgGIgg6IgBgBIACgCIABAEgEgFjghPIAAAAIAAAAgEAA8gkLIABABIAAAAg");
	this.shape_33.setTransform(72.4,260.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#976F5E").s().p("AkJC0IAHAAIgBAQgAEIDAIACABIgDADIABgEgACVjDIADABIgBABg");
	this.shape_34.setTransform(58,26.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#AC7339","#31211C"],[0,1],-11.3,-2.8,0,-11.3,-2.8,50.3).s().p("AD/DaQAFgcgCgbIgGgYQgKgfgNgWQgMgUgPgNIgFgEIgBgBIABABIACAFIASAjIg+g1IAGASQAFAXgFAFQgigHgXgQIgdgUIAPAlQg9AEgkg1QAAANAGAKQACAGADAHQgrATgugpQgbgYgZgHIgNgDIgIgBIgNABQgFgCgHADIgFACIgLAIIgOANIgHAHIgGAIIgBABIgGAGQgLAPgJAPIgLA7IgFgOQgEAVACAUIABAEIADAgIgGAAIgIgKQhhh7BdiJQBWiCCcgUQBkgNBTA6IADACIACABIAAgBQCjAZAVCqQAPBzhWBMg");
	this.shape_35.setTransform(58.8,23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E7CFBA").s().p("EADZAk2QgNgDgKgKQgEgFgFgBQgKgigCg3QgChfAMhuIABgGIAMgkIABAAQATgYAMghQgbkdgQkfIgEgfQAFhTALhLQB/hLhsgVIgDgCQgSgNhDkdIgtjHIAKABQAjAEA3gBQCbAAAigaIAUgPQgHBtAEBjIATDUQAQCMACBpQACB6gRB7IglEWQgUCbAEBbQAEBbAFAOQAYBBAWBEQAFAOAJALIADAEIgBABQgUAkgeAXQgeAXgnAAQgLAAgJgGIgMgIIgDgCIgIgTIAIATIgBgBIAAACIAAACIgCANQgDAGgGAEIgPALgEAESAkQIgBgBIgCgCIADADgAF3PZIAHASIAQgqgEgEtAj4IAUgWIgKAHQhBAfhJgRIgDgCQgWgUAYgUIAYgOIAAAAIAFgDQCKheALiuQANhUhAkqQgmi1gEjlQgBhTAEhaIAHiLIAAgGIgXiZIgQhlIABAAQAVAKBmAAQA/AAApgCIALgBQAXgCAPgCQAFB2AAB7IgBAWQgECMAdCQQgFB1gIB3QgJB4gPB5QgQCEAOCBQANB/gJB9QgGBFgvAuIg1AyIgWAUIgEAEIgoABgAJOE7QAAgCgGgFIAAgIIgLgIIgNhUIgEgKQgLgXgSgVIAAgDQgDAAgEAFIgLATIAAAAIgIARIgBACIAAgBIgEgfQALg0AVgzIAEgFQAUg1AFgyQAOg3gLg5QgIgngTgoIgGgqIAAAAIAAgBIgGgYIABgJIgIgNIgEgPIAAgCIAAAAIgmi0Ig1lDIgMhZIgKg6IgPhXIgEghIgCABIgwitQgEAugUAoIgOAaQgKATgQAPQhUBShyAZQgZAGgbACQAaADAcgDQBzgHBogyIhfFIQAdA+AQBCQAtC8hGC2QjHApiHAGIhRABQhRgDgzgUIgCgIQgJgmAJgmQAMgwgMgxIAKgKIgEj9QgPiPgGgnIAAgBQgVkFhJhbQgKgMgKgJIAHADIgHgGIgDgwIADAwIgGgBIAGAEQAKBkAPBRIABAEIgBADIABAAQgFAlgDAZIgBAHQg8C0gaC4QgOBiAXBUQgJAOAHAcIABACIgEAPIgHANIABAJIgFAZIAAABIAAAAIgFAqQgRApgGAnQgJA5AQA3QAGAzAXAyIAEAGQAXAyANAzIgDAfIAAABIgBgBIgIgRIgBAAQgHgMgFgGQgEgFgCgBIAAADQgSAWgKAXIgDALIgKBUIgKAJIAAAIQgGAFAAACQgKAMgDAKQgIgRACgDQgOAIgHgRIAAgBIgBABIgDAAIgBgTQAAgdgGgbQgEgOgBgPIgDgSIADASQABAPAEAOQAGAbAAAdIABATIAAABQgOABgDgNIgMgEQgGgcgCgaQgDgegHgZQAHAZADAeQACAaAGAcIgRgGQgWhMAAhPQgBgIACgIQAahjgDhoQgBgQgEgNQgUg/APhBIADgSIAAgzQgChagHhaQgFg2gBg2QgBgWADgcIAci/QAZijAMi2QANi1AZg/QAUhCBJgVIA5gQIDNAgIABgHIgCgGIgEgEIgIgHIgUABIgFgFIh2gPIA/gNIALgEIAggGIAYgEQCLglBuiMIApgCIACAAQAVBUBGAXQBFAXA1AGICFAKQA1AFApAfQAQALANAPQAVAWAIAaQAPAwAHAxIBlLKQAGAlADAmIABArQAAA2gDA3QgEBZADBaIACAzIADATQARBAgRA/QgDAOAAAQQAABmAeBkQACAIAAAIQACBPgTBMIgQAIQAFgcABgbQACgdAGgaQgGAagCAdQgBAbgFAcIgMAEQgCANgOgBIAAgUIAAgIQAAgYAEgYQADgOAAgPIADgSIgDASQAAAPgDAOQgEAYAAAYIAAAIIAAAUIgEgBIAAAAIAAAAIAAABQgHARgOgIQACAEgHARQgDgKgLgMgAiUndIAEAAIgFgRgAi60QIACAEQgcB9AvB6IACAEIAIAHIAHgDQgPhigJhnIAAgmQABgVgQgHgAm1zCIACABIgEgCgAnwzhIgBgBIgBAAgAKWEjIAAAAgApyENgAnSzUgAjz9FIgHgEIAFgDIAQgJIgMgFIgagdQgLgNgDgOQgPgMgHgRQgghNgFhTIAAgBIAAgPIADgHIAAgIIACgCIgCACIgKAHQgGAGgBAIIgDARIgSALIgLgeIALAeIgCACIgVgFIAAAAIgCAAIAAAAIgBAAQgFAAgFADIgBABIgBABQgEAEgCAHIAAAHQAAAKACALQgCgLAAgKIAAgHQACgHAEgEIABgBIABgBQAFgDAFAAIABAAIAAAAIACAAIAAAAIAVAFIAAAAIADABIAIAYIgOABQgSAFAAAVIAAABIAAgBQAAgVASgFIAOgBIACAHIgIAVIgBABQgCADABAFIADAIIADAEIAOALIAHADIADAKIgCABQgJAEAAALIAAAFIgEAAQgMgIgKgNIgFgKIAFAKQAKANAMAIIAFABIgBgBIAAgFQAAgLAJgEIACgBIASA1QgRAFgKgPIAAgBIgygnIgGgHQghgpADg0QABgZAKgMQAIgLALACQASAHAFAGIgCgDIABgQIAAgBIgEggIAAgDQgDgVAEgUIAGAOIALg7QAIgPAMgPIAFgHIABAAIAHgIIAGgHIAOgNIALgIIAFgDQAHgDAFADIANgBIAJABIAMACQAZAIAbAYQAuAoAugSQgDgHgFgGQgGgKABgNQAmA1A8gEIgPgmIAdAVQAWAQAhAHQAFgFgFgXIgFgSIA9A0IgRgiIACgCQAPAOAMATQAOAXAJAfIAHAYQABAbgEAbIgBAEIgEAJIgJAXQgMgJgNgFQgBgLgDgJIgDAEIgIALIABABIgEAHQgIAVgOAKIgFAJIghBSQgXA6glAyQARAOASAJQhFAvgzABQglAAhPgpgAhf/DIABAAIgBAAgAis/dIAAAAIAAgBgEgBogg5IAAAAIAAgDgEgBLghyIABgBIgBAAgEgAXgh4IACAAIgBAAgEgDAgh4IABAAIAAAAgABK+wIAOgpIACABQAKAEAAALIgBAGIAFgBQANgIAJgNIAFgKIgFAKQgJANgNAIIgFABIABgGQAAgLgKgEIgCgBIACgIIABgBIABgBIAHgDIAOgLIADgEIAEgIQABgFgDgDIgBgBIgIgVIACgHIAOABQATAFAAAUIAAACIAAgCQAAgUgTgFIgOgBIAJgYIADgBIgCgDIAJgXIAEgCQAKgGAIgJQALgMALAKQAFADADAGQAHASABAVQACAagJAYIgMAXIgPASIgSASIgEAEIgdAYIAAABQgMAIgHAAQgIAAgEgKgEACkggUQACgLAAgJIAAgIQgCgHgFgEIAAgBIgBAAQgFgEgGAAIgBAAIAAAAIgCAAIAAAAIgVAFIAVgFIAAAAIACAAIAAAAIABAAQAGAAAFAEIABAAIAAABQAFAEACAHIAAAIQAAAJgCALgEgF3gg9g");
	this.shape_36.setTransform(70.9,260.1);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.bottomdown,this.bottom,this.lower,this.middle,this.top,this.palmDress,this.upper);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0.8,141.2,500.6);


(lib.thumbnailPanel = function() {
	this.initialize();

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1SYxMAAAgxhMAqlAAAMAAAAxhg");
	mask.setTransform(125.6,188.3);

	// Layer 2
	this.clothTabArea = new lib.tabArea();
	this.clothTabArea.setTransform(149.7,195,1,1,0,0,0,161.4,165.8);

	this.clothTabArea.mask = mask;

	// Layer 10
	this.mtab = new lib.tabArea();
	this.mtab.setTransform(149.7,195,1,1,0,0,0,161.4,165.8);
	this.mtab.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.mtab.cache(-2,-2,279,323);

	this.mtab.mask = mask;

	// Layer 3
	this.colorTabArea = new lib.tabArea();
	this.colorTabArea.setTransform(149.7,195,1,1,0,0,0,161.4,165.8);

	this.colorTabArea.mask = mask;

	// Layer 6
	this.sc = new lib.Symbol2();
	this.sc.setTransform(275.5,8.1,1,1,-2.4);

	// Layer 5
	this.clothTabBtn = new lib.cloths();
	this.clothTabBtn.setTransform(49.1,12.7,1,1,0,0,0,57,13.9);

	this.colorTabBtn = new lib.colorTab();
	this.colorTabBtn.setTransform(140.4,13.4,1,1,0,0,0,57,13.9);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#878D9A").s().p("AAKamMgBzg1YIBQhHMACDA3zg");
	this.shape.setTransform(291.4,182.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69707C").s().p("AgR9BIBxBbMgBHA2zIh4B1g");
	this.shape_1.setTransform(-26.9,183);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BABDC5").s().p("A4igkMAxegAqIBgBSIxaAcMgjdAAvg");
	this.shape_2.setTransform(132.8,360.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,51,102,0.302)").s().p("A3n7ZIAnABIAfCiIABAAIAyAfMAnZgAGIACgGIAbiLIEzAGMAB1A1YMgxeAAqgARi4wIAAAAIAAAAg");
	this.shape_3.setTransform(134,181.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202224").s().p("A14BvMAoCAAGIAAAAIAAAAIAbjHIGOAJIhQBIIkzgGIgbCJIgCAGMgnZAAGgA2/gyIhzhbICKADIARBZg");
	this.shape_4.setTransform(130,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAEAEA").s().p("A6S92MAzwABDMAB8A5lIyMAZMgkmAAsgA6PdCMAjdgAwIRagbMgCEg3zImPgKIgaDKIgBAAMgoCgAHIgBAAIgeiiIgRhZIiKgDg");
	this.shape_5.setTransform(131.6,183);

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("A6n8YICqiNMAwzAB9MAD3A3xIlbBKMgz+ACTg");
	this.shape_6.setTransform(140.9,206.6,1,1,0,0,0,17.4,13.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.colorTabBtn,this.clothTabBtn,this.sc,this.colorTabArea,this.mtab,this.clothTabArea);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.2,-8.1,367.5,397.3);


// stage content:
(lib.ClothingGameCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:59,intro:2,game:54,win:59});

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
	this.frame_1 = function() {
		/* stop();
		var loader:LoadGame = new LoadGame(this, "clothing.xml"); // For local testing
		//var loader:LoadGame = new LoadGame(this, "../customizer/customVars.php?action=play&gameid="+_root.gameid); // For deployment*/
	}
	this.frame_53 = function() {
		/* //stop();
		//playGame.onRelease = function() {
			//gotoAndStop("game");
		//}*/
	}
	this.frame_54 = function() {
		/* trace("initating game");
		if(game != undefined) destroy(game);
		var game:RunGame = new RunGame(this);
		stop();
		*/
	}
	this.frame_74 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(52).call(this.frame_53).wait(1).call(this.frame_54).wait(20).call(this.frame_74).wait(13));

	// Layer 4
	this.question_mc = new lib.question_mc();
	this.question_mc.setTransform(476.9,19.6,1,1,0,0,0,115.8,20.9);
	this.question_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question_mc).wait(54).to({_off:false},0).wait(33));

	// Layer 8
	this.instance = new lib.congratulation();
	this.instance.setTransform(201,173,1,1,0,0,0,161,111);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).wait(19));

	// Layer 9
	this.playAgain = new lib.playagain();
	this.playAgain.setTransform(111.3,347.3);
	this.playAgain._off = true;
	new cjs.ButtonHelper(this.playAgain, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.playAgain).wait(74).to({_off:false},0).wait(13));

	// Panel
	this.thumbnailPanel = new lib.thumbnailPanel();
	this.thumbnailPanel.setTransform(161.1,148.8,1,1,0,0,0,98.8,136.1);

	this.timeline.addTween(cjs.Tween.get(this.thumbnailPanel).wait(60).to({x:-218.9},6).wait(21));

	// Character
	this.character = new lib.character();
	this.character.setTransform(491.7,213.5,0.686,0.677,0,0,0,69.6,249.3);

	this.timeline.addTween(cjs.Tween.get(this.character).wait(87));

	// Layer 11
	this.finishBtn = new lib.Symbol3();
	this.finishBtn.setTransform(420.9,389.5,1,1,0,0,0,41,11.4);

	this.timeline.addTween(cjs.Tween.get(this.finishBtn).to({_off:true},59).wait(28));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIAAAA");
	this.shape.setTransform(450.9,314.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F457A7","#B91169"],[0,1],-187.8,-108,0,-187.8,-108,524.5).s().p("EgjAgYtMBGBAAAMAAAAwTMhGBABIg");
	this.shape_1.setTransform(224,152.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#808CAA","#A8B1C6"],[0,0.541],-258.4,8.4,0,-258.4,8.4,693.5).s().p("AqUHaIAAuzIUpAGIAAOtg");
	this.shape_2.setTransform(533.5,355.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#808CAA","#A8B1C6"],[0,0.541],129.8,8.4,0,129.8,8.4,374.8).s().p("EgkgAHaIAAsIMBGEgAxIC7h6IACAAIAAOzg");
	this.shape_3.setTransform(233.6,355.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F457A7","#B91169"],[0,1],203.3,-124.7,0,203.3,-124.7,579.9).s().p("AqUXPMAAAgudIUpAAMAAAAudg");
	this.shape_4.setTransform(533.5,143.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F457A7","#B91169"],[0,1],146,-124.7,0,146,-124.7,313.5).s().p("AgBXPIAAAAMAAAgudIADAAMAAAAudg");
	this.shape_5.setTransform(467,143.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C14646").s().p("AhcgBIAAAAIAbgOIAAAAICdhoIAAAAIABB3IieBmIAAAAIgbASg");
	this.shape_6.setTransform(457.5,304);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#933131").s().p("Egu2AAsMBGBgBGIAAB4MhGBAAzgAaLgZIAAh3IUsAAIAAB9gAaHgZIgCh3IAGAAIAAB3g");
	this.shape_7.setTransform(299.8,306.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7DBE3").s().p("Egu2ABBMBGBgAyIAbgPIAAAAIChhoIAEAAIAAAoIgCAAIi7B4MhGEAAxgAaLhAIAAgoIUsAGIAAAog");
	this.shape_8.setTransform(299.8,314.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4569D").s().p("AhcYKMAAAgwTIC5AAMgABAudIidBoIAAAAIgaAOg");
	this.shape_9.setTransform(457.5,149.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.9,194.5,599.9,408.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;