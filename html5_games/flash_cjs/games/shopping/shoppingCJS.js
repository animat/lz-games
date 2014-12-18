(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/snapmp3.mp3", id:"snapmp3"},
		{src:"sounds/whishmp3.mp3", id:"whishmp3"}
	]
};



// symbols:



(lib.timermeter = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEC9E9").s().p("Aq7BVIAAipIV3AAIAACpg");
	this.shape.setTransform(70,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,17);


(lib.shelfbottom = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("EgupAAAMBdTAAA");
	this.shape.setTransform(298.6,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,599.3,2);


(lib.shelf_4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Save!", "4px 'Comic Sans MS'", "#BF0030");
	this.text.textAlign = "center";
	this.text.lineHeight = 6;
	this.text.setTransform(534.7,41.2,1.016,1,0,-23.5,-22.6);

	this.text_1 = new cjs.Text("$", "8px 'Comic Sans MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 10;
	this.text_1.setTransform(519.6,35,1.022,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF4FD").s().p("AhaA7IC0h1IABAAIAAB1g");
	this.shape.setTransform(535.7,43.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFF5C5","#F9D500"],[0,1],0,-6.9,0,7.3).s().p("AiOA7IAAh1IEdAAIAAB1g");
	this.shape_1.setTransform(530.5,43.1);

	this.text_2 = new cjs.Text("Save!", "4px 'Comic Sans MS'", "#BF0030");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 6;
	this.text_2.setTransform(311.3,41.2,1.016,1,0,-23.5,-22.6);

	this.text_3 = new cjs.Text("$", "8px 'Comic Sans MS'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 10;
	this.text_3.setTransform(296.2,35,1.022,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFF4FD").s().p("AhaA7IC0h1IABAAIAAB1g");
	this.shape_2.setTransform(312.3,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFF5C5","#F9D500"],[0,1],0,-6.9,0,7.3).s().p("AiOA7IAAh1IEcAAIAAB1g");
	this.shape_3.setTransform(307.1,43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AEMhQIoXCh");
	this.shape_4.setTransform(43.5,27.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AEMhQIoXCh");
	this.shape_5.setTransform(41.5,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AE2h5IprDz");
	this.shape_6.setTransform(109.7,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AE2h5IprDz");
	this.shape_7.setTransform(108.6,31.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AC1h4IlpDx");
	this.shape_8.setTransform(182.6,31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AC1h4IlpDx");
	this.shape_9.setTransform(181.7,31.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AB5h5IjxDz");
	this.shape_10.setTransform(242.1,31.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AB5h5IjxDz");
	this.shape_11.setTransform(241.5,31.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#6D96BC").ss(0.4,1,1).p("ABBh6IiCD1");
	this.shape_12.setTransform(294,31.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("ABCh6IiCD1");
	this.shape_13.setTransform(293.4,31.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AlDh6IKHD1");
	this.shape_14.setTransform(555.1,31.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AlDh6IKHD1");
	this.shape_15.setTransform(554.1,31.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AjRh6IGjD1");
	this.shape_16.setTransform(491.3,31.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AjRh6IGjD1");
	this.shape_17.setTransform(490.5,31.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#6D96BC").ss(0.4,1,1).p("Ahrh6IDXD1");
	this.shape_18.setTransform(434.2,31.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("Ahrh6IDXD1");
	this.shape_19.setTransform(433.6,31.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#6D96BC").ss(0.4,1,1).p("Ag2h6IBuD1");
	this.shape_20.setTransform(387.1,31.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("Ag2h6IBuD1");
	this.shape_21.setTransform(386.7,31.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AAAB7IAAj2");
	this.shape_22.setTransform(339.2,32.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DEF1FF").ss(0.4,1,1).p("AAAB7IAAj2");
	this.shape_23.setTransform(338.9,32.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#AFD2EF").ss(1,1,1).p("EAusAAmMhdXAAAIAAhLMBdXAAAg");
	this.shape_24.setTransform(298.8,44.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#94B4D3").s().p("EgurAAnIAAhMMBdXAAAIAABMg");
	this.shape_25.setTransform(298.8,44.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#81A4C1").s().p("EgupADfIAAm9MBdTAAAIAAG9g");
	this.shape_26.setTransform(298.9,22.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#720300").s().p("EgurAA/IAAh9MBdXAAAIAAB9g");
	this.shape_27.setTransform(298.8,45.9);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.text_3,this.text_2,this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,599.7,52.3);


(lib.shelf_3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Save!", "4px 'Comic Sans MS'", "#BF0030");
	this.text.textAlign = "center";
	this.text.lineHeight = 6;
	this.text.setTransform(489.8,45,1.016,1,0,-23.5,-22.6);

	this.text_1 = new cjs.Text("$", "8px 'Comic Sans MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 10;
	this.text_1.setTransform(474.7,38.9,1.022,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF4FD").s().p("AhaA7IC0h1IABAAIAAB1g");
	this.shape.setTransform(490.7,46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFF5C5","#F9D500"],[0,1],0,-6.9,0,7.3).s().p("AiOA7IAAh1IEdAAIAAB1g");
	this.shape_1.setTransform(485.6,46.9);

	this.text_2 = new cjs.Text("Save!", "4px 'Comic Sans MS'", "#BF0030");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 6;
	this.text_2.setTransform(232.9,45,1.016,1,0,-23.5,-22.6);

	this.text_3 = new cjs.Text("$", "8px 'Comic Sans MS'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 10;
	this.text_3.setTransform(217.9,38.9,1.022,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFF4FD").s().p("AhaA7IC0h1IABAAIAAB1g");
	this.shape_2.setTransform(233.9,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFF5C5","#F9D500"],[0,1],0,-6.9,0,7.3).s().p("AiOA7IAAh1IEdAAIAAB1g");
	this.shape_3.setTransform(228.7,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AEMhQIoXCh");
	this.shape_4.setTransform(43.5,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AEMhQIoXCh");
	this.shape_5.setTransform(41.5,28.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AE2h5IprDz");
	this.shape_6.setTransform(109.7,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AE2h5IprDz");
	this.shape_7.setTransform(108.6,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AC1h4IlpDx");
	this.shape_8.setTransform(182.6,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AC1h4IlpDx");
	this.shape_9.setTransform(181.7,32.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AB5h5IjxDz");
	this.shape_10.setTransform(242.1,32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AB5h5IjxDz");
	this.shape_11.setTransform(241.5,32.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#6D96BC").ss(0.4,1,1).p("ABBh6IiCD1");
	this.shape_12.setTransform(294,32.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("ABCh6IiCD1");
	this.shape_13.setTransform(293.4,32.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AlDh6IKHD1");
	this.shape_14.setTransform(555.1,32.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AlDh6IKHD1");
	this.shape_15.setTransform(554.1,32.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AjRh6IGjD1");
	this.shape_16.setTransform(491.3,32.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AjRh6IGjD1");
	this.shape_17.setTransform(490.5,32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#6D96BC").ss(0.4,1,1).p("Ahrh6IDXD1");
	this.shape_18.setTransform(434.2,32.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("Ahrh6IDXD1");
	this.shape_19.setTransform(433.6,32.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#6D96BC").ss(0.4,1,1).p("Ag2h6IBuD1");
	this.shape_20.setTransform(387.1,32.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("Ag2h6IBuD1");
	this.shape_21.setTransform(386.7,32.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AAAB7IAAj2");
	this.shape_22.setTransform(339.2,32.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DEF1FF").ss(0.4,1,1).p("AAAB7IAAj2");
	this.shape_23.setTransform(338.9,32.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#AFD2EF").ss(1,1,1).p("EAusAAmMhdXAAAIAAhLMBdXAAAg");
	this.shape_24.setTransform(298.8,48.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#94B4D3").s().p("EgurAAnIAAhMMBdXAAAIAABMg");
	this.shape_25.setTransform(298.8,48.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AEC9E9").s().p("EgupADfIAAm9MBdTAAAIAAG9g");
	this.shape_26.setTransform(298.9,22.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#720300").s().p("EgurABJIAAiRMBdXAAAIAACRg");
	this.shape_27.setTransform(298.8,46.9);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.text_3,this.text_2,this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,599.7,55.8);


(lib.playGame = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play the game", "bold 20px 'Arial'", "#333333");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 200;
	this.text.setTransform(200,0);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0)").s().p("Av7CQIAAkgIf3AAIAAEgg");
	this.shape.setTransform(102,14.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,204,29);


(lib.playAgain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play again?", "bold 18px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 148;
	this.text.setTransform(148,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Ar8ExIAApgIX4AAIAAJgg");
	this.shape.setTransform(77.5,28.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,154,61);


(lib.pen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD47D").s().p("AgGAAIAKgXIAGgKQACAFACABIADABIghA8QADgSAHgQg");
	this.shape.setTransform(2.3,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#78A54E").s().p("Ah+C0QAPgiAjg6QAhg7A1hMQA2hNBOhZIgSAZIgwBCIhDBiQgjA0goA+QgnA9gkA/IAPgigACOjVIAAAAIAAAAg");
	this.shape_1.setTransform(22.6,-39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B27E14").s().p("AgiAmQAeglARgqIACABQAMAFAIgBQgMAUgPAQQgMAPgMALIgSAQIAAgEg");
	this.shape_2.setTransform(3.8,-4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5E4107").ss(0.8,1,1).p("AANghQgJgEgFgRQgBABgKARQgKASgJAYQgJAZACAYQABAAANgLQANgLAQgUQASgSAQgaQgBAAgHABQgIABgKgEg");
	this.shape_3.setTransform(4,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D89F21").s().p("AgfAGQAJgXAKgTIALgSQAFARAJAEQAKAEAIAAIAIgCQgQAagSATQgQATgNALIgOALQgCgYAJgZg");
	this.shape_4.setTransform(4,-5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#436622").s().p("AjAEqQgHgCgGgEQAPgVASgWIAhgsIAHgOQAEgJAGgHIBUhxQAng3Ajg9QAIgOAMgLIAYgXQAMgMAGgPIAZg2IAZg1QAMgTAQgPQAPgOAPgQQgPAkgeA8QgfA9gvBPQgvBPhBBcQhDBdhXBlIgJgDg");
	this.shape_5.setTransform(25.4,-38.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2B4710").ss(0.8,1,1).p("ADPkfQgOAigeA8QgeA8gwBRQgvBQhCBfQhEBghaBnQAAAAgHgCQgGgCgIgEQgIgEgEgGQAAAAAQgmQAPgmAihBQAhhBA0hRQA0hPBHhYQBIhXBehUQAAAAgNAig");
	this.shape_6.setTransform(25.8,-40.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#507A2B").s().p("AjBFAIgOgGQgIgEgEgGIAQgnQAPglAihBQAhhBA0hRQA0hPBHhXQBIhYBehUIgNAiQgOAigeA9QgeA7gwBSQgvBPhCBfQhEBfhaBoIgHgCg");
	this.shape_7.setTransform(25.8,-40.5);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-73.8,49.9,74.8);


(lib.paper = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape.setTransform(128.2,353.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_1.setTransform(128.2,339);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_2.setTransform(128.2,324);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_3.setTransform(128.2,309.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_4.setTransform(128.2,294.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_5.setTransform(128.2,279.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_6.setTransform(128.2,264.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_7.setTransform(128.2,249.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_8.setTransform(128.2,234.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_9.setTransform(128.2,219.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_10.setTransform(128.2,204.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_11.setTransform(128.2,189.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_12.setTransform(128.2,174.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_13.setTransform(128.2,159.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_14.setTransform(128.2,144.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_15.setTransform(128.2,129.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_16.setTransform(128.2,115);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_17.setTransform(128.2,100);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_18.setTransform(128.2,85.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_19.setTransform(128.2,70.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2461EA").ss(0.5,1,1).p("AT4AAMgnvAAA");
	this.shape_20.setTransform(128.2,55.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF740D").ss(0.5,1,1).p("AAA80MAAAA5p");
	this.shape_21.setTransform(36.9,184.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF740D").ss(0.5,1,1).p("AAA80MAAAA5p");
	this.shape_22.setTransform(32.4,184.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4E851").s().p("Az/cxMAAAg5hMAn+AAAMAAAA5hg");
	this.shape_23.setTransform(128,184.2);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.9,256.6,371);


(lib.Handandlist = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A0B0B").s().p("AAHANIgDgGIgIgHQgGgCgGAAIAAgGIAAgGQABADAHAEIANAHIALAEQACACgCAEQgBADgCACIgCAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape.setTransform(75.1,60.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A0B0B").s().p("AARAMIgLgGQgRgGgUgDIACgMQATAFAPAIIAUAGQAEABACAFQACAEgFACQgDAAgIgEg");
	this.shape_1.setTransform(69.3,71.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A0B0B").s().p("AAsAKIgHgDQgLgEgMgCIgWgBQgSgBgMABIgNABIgBgLQAUAAAUACQAPACARAFQAHABAGABIAIgBQAEAAAEAAQADAAABADQABAEgDACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgCgBg");
	this.shape_2.setTransform(69.2,65.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A0B0B").s().p("AABAMIgBgGQAAgGgEgFIgDgDQAAAAgBAAQAAgBAAAAQAAgBABgBQAAAAABgBQACgCADAAIAEACQAFADgBAEQgCAFABADIACAGQACAEgEABIgCABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_3.setTransform(69.6,75.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B3516").s().p("AAIAmQgGgEgFgIIgNgRIgKgNIgIgLIgEAIQgFAKgMAEQgEABgGgBQgHAAgFgCQgGgCgBgDQgBgGAEgCQADgBAFABQAGAAACgBQAFgDACgEIADgKIACgKQABgGAEgCQADgBAFAAQAJACAFAFQAJAJAJALQAIAMAJAGQALAIANADQAMADAMgJQALgGAGgLIADgHQACgEADAAQAGACgFANQgEALgHANIgKARQgKALgPACIgEAAQgNAAgMgIg");
	this.shape_4.setTransform(73.6,77.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ABhgKQgEgWgHgZQgGgZgHgXQgIgXgHgRQgIgRgHgGQAAAAgGgDQgGgEgJgBQgJgCgKAFQgGAFAAASQAAASADAXQABAWADARQADAQABABQgBAAgJgBQgLgBgPgBQgQgCgOABQgPABgHADQgJAFgGAJQgFAJABALQABALANAIQgBAAgHACQgGACgEAGQgEAFAHAKQAHAKAJAFQAJAGAGACQAEACABAAQgHgCgGABQgGABgFAHQgHAJADAHQADAIAHAGQAGAHACAIQAAAHgCAFQgDAFAAAFQAAAFAHAFQANAIAPgDQAOgEAHgPQAEAFAGAKQAHAKAGAJQAIAKAIAFQAPAKAQgBQARgCAMgNQAPgTAHgZQAGgZABgYQACgTgCgTQAAgGgDgLQgCgMgDgNg");
	this.shape_5.setTransform(72.6,65.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72461E").s().p("AAQCpQgIgFgIgKIgNgTIgKgPQgHAPgOAEQgPADgNgIQgHgFAAgFQAAgFADgFQACgFAAgHQgCgIgGgHQgHgGgDgIQgDgHAHgJQAFgHAGgBQAGgBAHACIgFgCIgPgIQgJgFgHgKQgHgKAEgFQAEgGAGgCIAIgCQgNgIgBgLQgBgLAFgJQAGgJAJgFQAHgDAPgBQAOgBAQACIAaACIAKABIgEgRIgEgnQgDgXAAgSQAAgSAGgFQAKgFAJACQAJABAGAEIAGADQAHAGAIARQAHARAIAXIANAwIALAvIAFAZIADARQACATgCATQgBAYgGAZQgHAZgPATQgMANgRACIgEAAQgOAAgNgJg");
	this.shape_6.setTransform(72.6,65.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0066CC").ss(0.3,1,1).p("Ah1j9QABABAWAHQAYAHAmALQAjAKAuAKQAuALAuAGQAwAGAogBQAogBAZgDQAYgEABAAAihi1QABABAcAJQAcAKAvANQAuANA0ALQA2ALA0ADQA1ADApgLAi6hwQABABAaAKQAbAKAsAOQAsAOAzALQA0ALA0ACQA0ADArgNAjQgbQABAAAdAJQAdAJAwAKQAvALA2AJQA4AJA2gBQA2AAAqgOAjWArQAAAAAcAHQAaAHAtAJQAtAJA0AIQAzAHAzABQA0ACAqgJAjlB2QAAAAAVAFQAWAEAkAGQAkAHAsAGQAsAGArADQAuADAogDQAogCAdgKAkJC3QABAAAXAEQAWAEAlAEQAlAFAtAEQAsAEAtABQAsABAmgEQAngFAYgLAk+DqQAAAAAYAEQAZAEApAFQAqAFA0ABQA2ACA6gFQA3gFA5gP");
	this.shape_7.setTransform(54.7,62.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5D64A").s().p("AlPDbQAPgHAWgMQA5ABA1gLQA2gLAwgZQAvgYAlgoQAmgwAlguQAlgxAogsQAogrAxgiQAxghA+gRQgiAhgYAjQgSAcgGAcQgGAcAAAdQgBAcgDAbQgDAdgNAeQgMAdgdAeQgdAdg1AfInUAjIAOgGg");
	this.shape_8.setTransform(46.8,69.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4E851").s().p("AmjEzQAmgTAhgXQBnhLAGhaQAbl5DQgsIAhAQQAtATAzALQCjAkCkgxQi6B1hMBwQgWAigGAwQgCA5gEAdQgMBqh/BHInTAkg");
	this.shape_9.setTransform(57,59.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#725107").s().p("AAAAGIgRguIgJgVIAMAVQAKASAMAZQAMAcAHAcIgNADQgGgcgIgcg");
	this.shape_10.setTransform(69.1,42.2);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.7,27.6,90.5,64.8);


(lib.foodItemClick = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape.setTransform(30,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.checkListItem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unchecked:0,checked:9});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(2));

	// Text
	this.text = new cjs.Text("", "14px 'Arial-ItalicMT'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 135;
	this.text.setTransform(29,-1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(16));

	// Check mark
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AgbAUQAAgrAwAAIACAAIACACIABADIACACIAAACIAAACIgBADIgBADIgBABIgDADIgCACIgBABIgDACIgDACIgEADIgDACIgFABIgEACIgGABIgEACIgCAAIgDACIgDACIgCACIgCACIgCgEg");
	this.shape.setTransform(2.5,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("AAJAiQhAgyAAgIQAAgtAxAAQAiAAALAPQAEAFAGADIAAABIgBADIAAACIgBACIgBADIAAACIgBACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIAAACIAAADIAAACIABACIAAADIAAACIACACIAAADIAAACIABACIABACIABADIABACIABACIACADIABACIAAABIgvgkg");
	this.shape_1.setTransform(5.3,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s().p("AgVAbQhCgyAAgIQAAgtAyAAQAjAAAKAPQALAOAZAAIAJgPIABADIAAABIABADIACADIAAACIAAACIABACIACADIABACIADACIAAACIACADIAAACIAAACIAAADIABACIAAADIABABIABADIABADIAAABIABADIABADIAAACIAAACIAAACIAAACIABABIABACIAAACIABADIAAACIAAACIAAACIABADIABADIAAABIACADIABADIABACIACACIACACIACADIABAAIgnApQgHAAg/gyg");
	this.shape_2.setTransform(8.5,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000CC").s().p("Ag3AwQhCgxAAgIQAAgtAyAAQAjAAAMAOQALAPAXAAQAVgjAbgjIACgDIABACIACACIACACIACACIABADIABACIABACIAAADIABACIACACIACADIACACIADACIABADIACACIABACIACADIACACIABACIABACIACADIABACIABACIACADIABACIAAACIABADIACACIABACIADADIACACIAEACIAEADIACACIAFACIABABQgqAuhBBGQgHAAg/gzg");
	this.shape_3.setTransform(11.9,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000CC").s().p("AhRBKQhBgzgBgIQAAgrAyAAQAjAAAMAOQAMAOAYAAQAUgiAagjQAcglAYgSIABACIADACIACACIAFADIAFABIADACIABACIACACIADADIACACIACACIACADIAAACIAAACIACADIACACIACACIABADIABACIACACIABADIABACIACACIACADIACACIADACIACACIACADIACACIAFACIABAAQgpA5h0B9QgHAAhBgzg");
	this.shape_4.setTransform(14.5,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000CC").s().p("AhbBSQhCg0AAgHQAAgsAxABQAkAAALAOQAMANAYAAQAWghAYgkQA1hFAmgBQAbAAAMATQAHALAAAKQAAAkiyC9QgHgBhAgyg");
	this.shape_5.setTransform(15.5,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(2));

	// Checkbox BG
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ABkhjIAADHIjHAAIAAjHg");
	this.shape_6.setTransform(12,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EAEAEA","#BBBBBB"],[0,1],-7.8,-3.9,15.5,13.1).s().p("AhjBkIAAjGIDGAAIAADGg");
	this.shape_7.setTransform(12,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-1,167,40);


(lib.cart = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCgVIAFAAIgEArg");
	this.shape.setTransform(-14.4,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5A5A").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_1.setTransform(52.3,-34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E5A5A").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_2.setTransform(50.9,-34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E5A5A").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_3.setTransform(49.4,-34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E5A5A").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_4.setTransform(47.9,-34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E5A5A").s().p("AgDAHIAAgNIAHAAIAAANg");
	this.shape_5.setTransform(46.6,-34.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AA7AIIgFgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgEACIgEgCIgEgDQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgFADIgFADIgFABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgEgDIgCgDIgCgCIgDAAIgDAAIgJAAIgLgBIgNAAIgNAAIgFAAIgJAAIgJAAIgDAAIAAgDIAAgDIAAgCIAGAAIANAAIARAAIAPAAIAHAAIBOAAIAGAAIAAAIIgBAHQgDAEgEAAQgDAAgCgCg");
	this.shape_6.setTransform(53,-34.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhHATQgDgBgBgEIABgIIAAgGIAAgMQAAgFACgBIAHgBIALAAIBPAAIAaAAIAJAAIAKAAQAEABABADQABAEAAAFIgBAGIABAIQAAAEgBADIgCACQgCACgEABIgHAAIgbAAIg1AAIgmAAIgHAAIgCAAIgEgBg");
	this.shape_7.setTransform(52.9,-33.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7F7C0E").s().p("Al5h7ILihnIARACIgpGyIqRARgAFQjTIgvAHIhEAKIhTANIhdANIhdAPIhcANIhTAMIhDALIguAGIgTADIACANIAEAdIAGApIAIAtIAHAyIAIAwIAGAoIAEAeIACAMIARAAIApgBIA8AAIBJgBIBSgBIBSgBIBSgCIBJgBIA8gBIApgBIARAAIACgQIADgmIAFg1IAFg+IAGg/IAFg/IAFg2IADgmIABgRIgTACg");
	this.shape_8.setTransform(1.4,-1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CECE29").ss(2,1,1).p("AlkA3ILJht");
	this.shape_9.setTransform(1.8,-16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CECE29").ss(1,1,1).p("AD6jCIAACcIg4AAIAAiNIgGAAIAACNIg3AAIAAiKIgGAAIAACKIg4AAIAAiBIgGAAIAACBIg3AAIAAh1IgHAAIAAB1Ig1AAIAAhpIgGAAIAABpIg4AAIAAhkIgGAAIAABkIg3AAIAAhbIgGAAIAABbIg4AAIAAhPIgGAAIAABPIg3AAIAAhGIgGAAIAABGIgtAAIAAAGIAtAAIAABXIgnAAIAAAGIAnAAIAABRIggAAIAAAGIAgAAIAAA6IAGAAIAAg6IA3AAIAAA6IAGAAIAAg6IA4AAIAAA6IAGAAIAAg6IA3AAIAAA6IAGAAIAAg6IA4AAIAAA6IAGAAIAAg6IA1AAIAAA6IAHAAIAAg6IA3AAIAAA6IAGAAIAAg6IA4AAIAAA6IAGAAIAAg6IA3AAIAAA6IAGAAIAAg6IA4AAIAAA6IAGAAIAAg6IA3AAIAAA6IAGAAIAAg6IANAAIAAgGIgNAAIAAhRIAUAAIAAgGIgUAAIAAhXIAfAAIAAgGIgfAAIAAinIgGAAIAACnIg3AAIAAicgABBA3Ig3AAIAAhXIA3AAgAB/A3Ig4AAIAAhXIA4AAgADCggIA4AAIAABXIg4AAgAE3A3Ig3AAIAAhXIA3AAgAC8A3Ig3AAIAAhXIA3AAgAE3A9IAABRIg3AAIAAhRgAD6A9IAABRIg4AAIAAhRgAC8A9IAABRIg3AAIAAhRgAB/COIg4AAIAAhRIA4AAgAADA9IAABRIg1AAIAAhRgABBA9IAABRIg3AAIAAhRgAADA3Ig1AAIAAhXIA1AAgAjxA3Ig3AAIAAhXIA3AAgAh2A3Ig3AAIAAhXIA3AAgAg4A3Ig4AAIAAhXIA4AAgAjrggIA4AAIAABXIg4AAgAg4COIg4AAIAAhRIA4AAgAh2A9IAABRIg3AAIAAhRgAizA9IAABRIg4AAIAAhRgAjxA9IAABRIg3AAIAAhRg");
	this.shape_10.setTransform(1.8,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CECE29").s().p("AE3DOIAAg6Ig3AAIAAA6IgHAAIAAg6Ig3AAIAAA6IgGAAIAAg6Ig4AAIAAA6IgFAAIAAg6Ig4AAIAAA6IgGAAIAAg6Ig3AAIAAA6IgGAAIAAg6Ig2AAIAAA6IgGAAIAAg6Ig3AAIAAA6IgHAAIAAg6Ig3AAIAAA6IgGAAIAAg6Ig4AAIAAA6IgFAAIAAg6Ig4AAIAAA6IgGAAIAAg6IggAAIAAgGIAgAAIAAhRIgnAAIAAgGIAnAAIAAhXIgsAAIAAgGIAsAAIAAhGIAGAAIAABGIA4AAIAAhPIAFAAIAABPIA4AAIAAhbIAGAAIAABbIA3AAIAAhkIAHAAIAABkIA3AAIAAhpIAGAAIAABpIA2AAIAAh2IAGAAIAAB2IA3AAIAAiBIAGAAIAACBIA4AAIAAiKIAFAAIAACKIA4AAIAAiMIAGAAIAACMIA3AAIAAicIAHAAIAACcIA3AAIAAinIAGAAIAACnIAeAAIAAAGIgeAAIAABXIAUAAIAAAGIgUAAIAABRIAMAAIAAAGIgMAAIAAA6gAEACOIA3AAIAAhRIg3AAgADCCOIA3AAIAAhRIg3AAgACECOIA4AAIAAhRIg4AAgABHCOIA4AAIAAhRIg4AAgAAKCOIA3AAIAAhRIg3AAgAgyCOIA2AAIAAhRIg2AAgAhvCOIA3AAIAAhRIg3AAgAitCOIA3AAIAAhRIg3AAgAjrCOIA4AAIAAhRIg4AAgAkoCOIA4AAIAAhRIg4AAgAEAA3IA3AAIAAhXIg3AAgADCA3IA3AAIAAhXIg3AAgACEA3IA4AAIAAhXIg4AAgABHA3IA4AAIAAhXIg4AAgAAKA3IA3AAIAAhXIg3AAgAgyA3IA2AAIAAhXIg2AAgAhvA3IA3AAIAAhXIg3AAgAitA3IA3AAIAAhXIg3AAgAjrA3IA4AAIAAhXIg4AAgAkoA3IA4AAIAAhXIg4AAg");
	this.shape_11.setTransform(1.8,-2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#56520D").s().p("AkrBoIA4gbIADgBIHYAAIABAAQAZADAOgLQAGgFADgGIAEgKIABgHIgBgIIgFgUIgFgYIgGgdIgGgaIgEgUIgCgHIABgCIACgEIADgDQADAAACABQADACABADIAdCHIAAACIAAAFIgDAJQgCAGgEAHQgEAGgHAGQgSAPgfgEIgNAAIgjAAIg1AAIhAAAIhEAAIhGAAIhAAAIg1AAIgkAAIgOAAIgIACIgPAEIgSAEIgPADIgGABIABAAg");
	this.shape_12.setTransform(7.8,28.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7F7C0E").s().p("AAyCsQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBIiDlOIAAgDQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIA3CKIBmgcIACAGIhmAcIBKC+IAAAEQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgCAAIgCAAg");
	this.shape_13.setTransform(28.2,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgDAEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQABAAAAABQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_14.setTransform(-12.2,44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7A846E").s().p("AgKAsIgJgCIgGgCIAAgCIAKACIAKABQAHAAAHgCIAKgDIAAgIIAAgRIAAgUIAAgUIAAgPIAHAAIAAAHIAAAQIAAAUIAAASIAAAQIAAAHIgKACQgHADgIAAIgLgBg");
	this.shape_15.setTransform(-12.2,41.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B2B7AC").s().p("AgKAsIgJgCIgGgCIAAgHIAAgQIAAgSIAAgUIAAgQIAAgHIADAAIAGAAIAAAOIAAAVIAAAUIAAASIAAAHIAGADIAJACIAKABIAJgBIAIgBIgKACQgHADgIAAIgLgBg");
	this.shape_16.setTransform(-12.2,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#56520D").ss(1,1,1).p("AAbgtIAABWQAAAAgDABQgEACgGABQgHABgGAAQgGAAgGgBQgHgBgEgCQgEgBAAAAIAAhWg");
	this.shape_17.setTransform(-12.2,41.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#969E8D").s().p("AgLAtIgLgDIgEgBIAAhWIA1AAIAABWIgDABIgKADIgNABQgGAAgGgBg");
	this.shape_18.setTransform(-12.2,41.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAeQgJgEgFgJQgEgIAAgJQAAgIAEgIQAFgJAJgEQAHgGAJABQAJgBAJAGQAIAEAEAJQAGAIAAAIQAAAJgGAIQgEAJgIAEQgJAGgJgBQgJABgHgGg");
	this.shape_19.setTransform(-12.2,44.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1C1919").ss(1,1,1).p("AArAAQAAAMgGAJQgGAKgKAGQgJAGgMAAQgLAAgJgGQgKgGgGgKQgGgJAAgMQAAgLAGgJQAGgKAKgGQAJgGALAAQAMAAAJAGQAKAGAGAKQAGAJAAALg");
	this.shape_20.setTransform(-12.2,44.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F3D3D").s().p("AgUAlQgKgGgGgKQgGgJAAgMQAAgLAGgJQAGgKAKgGQAJgGALAAQAMAAAJAGQAKAGAGAKQAGAJAAALQAAAMgGAJQgGAKgKAGQgJAGgMAAQgLAAgJgGg");
	this.shape_21.setTransform(-12.2,44.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7F7C0E").s().p("AhDBcQgGAAgEgCIgEgBIgCgBIgDAAIgJgBIhdirIAHgCIAEgCIACgCQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAABIADACIAFAJIANAZIASAhIAUAiIASAhIANAZIAGAKIAIACQAEABAGgDIDRhtIACgBIAgAAIAEABIABAEIgBADIgEABIgEAAIgKAAIgLAAIgGAAIgJAFIgZANIghAQIgnAUIgmAUIggASIgXAMIgJAFQgGADgFAAIgCAAg");
	this.shape_22.setTransform(18.6,27.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7F7C0E").s().p("Ag5A2IAshWIADgEIAGgHQAEgFAFgDQAGgDAIgBIAmAAIAAARIgkAAIgDABQgDAAgFAEQgFAFgFALIgnBJg");
	this.shape_23.setTransform(42.1,-28.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C4646").s().p("AgjAoIADgGIAIgOIAKgTIAKgQIAGgOIAEgHIADgDQACgCAEgCIAIgDIAKgBIACAAIABADIgNAAIgCABIgGAEQgEACgDAGIgIANIgJASIgMAXIgKASIgEAHg");
	this.shape_24.setTransform(41.8,-28.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMABIAGgBIAGgCIANAAIAAACIgNAAIgCAAQgEAAgFADIgBgCg");
	this.shape_25.setTransform(43.8,-33.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANgfIADgEIAGgHIACACQgEAEgFAHIgiBHIgEABg");
	this.shape_26.setTransform(39.7,-28.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCgVIAFAAIgEArg");
	this.shape_27.setTransform(26.5,40);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgDAEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQABAAAAABQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_28.setTransform(28.6,44.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7A846E").s().p("AgJAsIgKgCIgGgCIAAgCIAKACIAKABQAHAAAHgCIAKgDIAAgIIAAgRIAAgUIAAgUIAAgPIAHAAIAAAHIAAAQIAAAUIAAASIAAAQIAAAHIgKACQgHADgIAAIgKgBg");
	this.shape_29.setTransform(28.6,41.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B2B7AC").s().p("AgJAsIgKgCIgGgCIAAgHIAAgQIAAgSIAAgUIAAgQIAAgHIADAAIAGAAIAAAOIAAAVIAAAUIAAASIAAAHIAGADIAKACIAJABIAJgBIAIgBIgKACQgHADgIAAIgKgBg");
	this.shape_30.setTransform(28.6,41.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#56520D").ss(1,1,1).p("AAbgtIAABWQAAAAgDABQgEACgGABQgHABgGAAQgGAAgGgBQgHgBgEgCQgEgBAAAAIAAhWg");
	this.shape_31.setTransform(28.6,41.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#969E8D").s().p("AgLAtIgLgDIgEgBIAAhWIA1AAIAABWIgDABIgKADIgNABQgGAAgGgBg");
	this.shape_32.setTransform(28.6,41.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAeQgJgEgFgJQgEgIAAgJQAAgIAEgIQAFgJAJgEQAHgGAJABQAKgBAIAGQAIAEAEAJQAGAIAAAIQAAAJgGAIQgEAJgIAEQgIAGgKgBQgJABgHgGg");
	this.shape_33.setTransform(28.6,44.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1C1919").ss(1,1,1).p("AArAAQAAAMgGAJQgGAKgKAGQgJAGgMAAQgLAAgJgGQgKgGgGgKQgGgJAAgMQAAgLAGgJQAGgKAKgGQAJgGALAAQAMAAAJAGQAKAGAGAKQAGAJAAALg");
	this.shape_34.setTransform(28.6,44.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3F3D3D").s().p("AgUAlQgKgGgGgKQgGgJAAgMQAAgLAGgJQAGgKAKgGQAJgGALAAQAMAAAJAGQAKAGAGAKQAGAJAAALQAAAMgGAJQgGAKgKAGQgJAGgMAAQgLAAgJgGg");
	this.shape_35.setTransform(28.6,44.6);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.5,-35.7,97.1,85.6);


(lib.Symbol125 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol124 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol123 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol122 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol121 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol120 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol119 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol118 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol117 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol116 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+E8QhTgNg2gUQg1gVgegUQgegVgMgOIgLgOIHToIIHMIqIgJAKQgKAKgbAOQgbAPgzAOQgyAPhRALQhSAKh2ACIgOAAQhsAAhNgMg");
	this.shape.setTransform(46.5,32.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,65.8);


(lib.Symbol81 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183551").s().p("AAEAUIg9gpIgegWIAkgDIAtgFQAVgDAUgEQATgEALgFQAJgFAHgGIAHAIQgCBJACBMIhUg7g");
	this.shape.setTransform(8.9,7.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.8,15.9);


(lib.Symbol80 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183551").s().p("ACXCsIhFgwIhchBIhnhGIhghDIhLg0IgkgZIAkgDIAtgFQAYgDATgEQAUgEAKgFQAJgFAHgGQBDBJBLBEQBJBBBSA1QBTA1BbAgQgNALgJACIgeAGIglAIIgiAHIgUADIgbgTg");
	this.shape.setTransform(32.1,19.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.3,38.3);


(lib.Symbol79 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183551").s().p("AhXhGIAHgIQAHAGAJAFQALAFATAEQAUAEAVADIAtAFIAkADIgeAWIg9ApIhUA7QAChMgChJg");
	this.shape.setTransform(8.9,7.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.8,15.9);


(lib.Symbol78 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183551").s().p("AjFC8IgigHIglgIIgegGQgJgCgNgLQBbggBTg1QBSg1BJhBQBLhEBDhJQAHAGAJAFQAKAFAUAEQATAEAYADIAtAFIAkADIgkAZIhKA0IhhBDIhnBGIhcBBIhFAwIgbATIgUgDg");
	this.shape.setTransform(32.1,19.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.3,38.3);


(lib._whishmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("whishmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._snapmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("snapmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.winscreen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C69422").s().p("AjFGfQhugOh6glIAgAFQAfAFA3AGQA3AHBHAFQBGAGBPABQBNABBPgGQBOgGBIgRQBHgQA5geIACgmIAChlQABhAgChPQgDhNgHhUQgIhVgPhPQgPhPgZhAIAOAgQAMAhASA/QASBAAQBcQAPBdAGB2QAGB5gKCSIgeANQgdAMg2AQQg3ARhMANQhNAOhfADIgmABQhOAAhYgLg");
	this.shape.setTransform(335,316.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6DA829").s().p("AiUFLQAAggAGg3QAGg2ARhIQAShHAhhQQAhhRA0hUQA1hTBQhQIgSAVQgTAXgfAqQgeAsgkA/QgiA/giBRQgiBOgaBiQgaBhgKBxIAAgfg");
	this.shape_1.setTransform(432.8,440.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A200C").s().p("AgkAUQAIgLANgMQAOgOANgJQAQgIARAFIgJACQgHACgLAIQgMAHgIANIAHABQAJABAIAGQAIAGgBANIgHgHQgGgGgQgBQgPAAgdAQIAIgMg");
	this.shape_2.setTransform(383.9,212.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A200C").s().p("AAKAIQgLgGgKADQgLACgHAFIgGAEQAAgKAGgGQAFgEAGgDIAHgDIgWgVQAaADAMALQAPALAGAJQAHAMACAIIABAJQgNgSgNgGg");
	this.shape_3.setTransform(253.9,216.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.3,1,1).p("ABmgQQgHAOgNAQQgNASgSAOQgSANgWAAQgfgCgXgLQgWgLgPgOQgOgNgHgIQgHgKABgBQAAAAAMgJQANgIAVgKQAWgKAcgGQAagGAfAFQAfAEAgAVQAAAAgHAOg");
	this.shape_4.setTransform(326.5,244.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF0014").s().p("AALA7QgfgCgXgLQgWgLgPgOQgOgNgHgIIgGgLIAMgJQANgIAVgKQAWgLAcgFQAagGAfAFQAfAEAgAVIgHAOQgHAOgNAQQgNASgSAOQgRANgWAAIgBAAg");
	this.shape_5.setTransform(326.5,244.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B3516").s().p("AgKARQgQgEgFgIQgGgHABgHIAAgIQAEAOAMAFQALAHAMACQAOADAKAAIAKAAQgVAEgPAAIgLgBg");
	this.shape_6.setTransform(344.1,228.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B3516").s().p("AgQAVQgLgGgHgHIgHgGQAXAFAQgDQAOgEAKgFQALgIAEgGIAFgHQgFAcgKAMQgKAMgMABQgKAAgLgGgAAqgaIAAAAIAAAAg");
	this.shape_7.setTransform(305.8,229.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.3,1,1).p("ABHBUQgZAUgggBQgegEgcgSQgcgTgWgbQgWgagQgYQgPgagIgRQgJgRAAgBQABABAQAIQAQAJAbAKQAbALAiAHQAiAHAhgCQAigDAXgGQAXgHATgQQATgPAXgeQAAABgGAWQgFAVgLAfQgLAegSAfQgSAfgZATg");
	this.shape_8.setTransform(325.2,239.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOBnQgegEgcgSQgcgTgWgbQgWgagQgYQgPgagIgRIgJgSIARAJQAQAJAbAKQAbALAiAHQAiAHAhgCQAigDAXgGQAXgHATgQQATgPAXgeIgGAXQgFAVgLAfQgLAegSAfQgSAfgZATQgXATgdAAIgFAAg");
	this.shape_9.setTransform(325.2,239.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A0B0B").s().p("Ag6CWQANgKATgRQATgQARgVQATgUAOgWQAOgVACgTQACgXgOgZQgOgYgUgVQgSgVgPgNIgRgOIgEgDIAJgTIAEAGQADAFgBAEIAYAVQAOAOASAUQASAVAMAYQAMAYAAAWIAAADQgDAVgPAWQgOAVgVAUQgTATgUAQQgUAQgOAJIgRALIANgKg");
	this.shape_10.setTransform(332.8,215.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5B3516").s().p("Ag3BLQgIgKgKgSQgJgSgEgaQgEgYAJgiIAOAEQAPAEAWAEQAWAEAWgBQAYgBAUgKQAUgKAKgWIABAKQAAALgKAVQgKAVgdAeQgeAgg4AqIgJgJg");
	this.shape_11.setTransform(330.3,222.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A0B0B").s().p("AgLAMQgLgGgGgGIgHgEIAJgJIAKAIQAIAGANAFQAOAFARgFIgKADIgUAFIgGAAQgGAAgFgCg");
	this.shape_12.setTransform(348.1,212.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A0B0B").s().p("AgmAWIAHAAQAGAAAKgDQAJgCAHgFQAJgGAGgGQAGgIADgGIADgHIALAFIgIAMQgIAJgSAKQgMAHgWAAIgJAAg");
	this.shape_13.setTransform(310,212);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1.3,1,1).p("ABLgFIhpBGQgBAAgLgHQgKgHgLgKQgLgLAAgLQABgLAQgNQAQgPAZgPQAWgPAdgOQAAABAKAJQAJAIAJANQAKAOACAOg");
	this.shape_14.setTransform(296.9,175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#490F0E").s().p("AgpA5QgLgGgLgLQgKgKAAgLQABgLAQgNQAPgPAZgPQAXgPAbgNIAKAJQAKAIAJANQAKAOACANIhoBGIgMgHg");
	this.shape_15.setTransform(296.9,175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1.3,1,1).p("AA3AEQgFgJgOgMQgOgMgQgLQgOgKgMgHQgMgHgBAAQAAABgHALQgHALgGARQgFARADASQAAAAAMADQALADAQAHQAQAGAOALQAQAKAJAOQAAAAAGgJQAGgJAEgOQAFgOgFgPg");
	this.shape_16.setTransform(348.3,177.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#490F0E").s().p("AAOApQgOgLgQgGQgQgIgLgCIgMgEQgDgRAFgRQAGgSAHgLIAHgLIANAHIAaARQAQALAOAMQAOAMAFAJQAFAPgFAOQgEAOgGAIIgGAKQgJgPgQgJg");
	this.shape_17.setTransform(348.3,177.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAPQgGgHAAgIQABgJAHgHQAFgGAHAAQAJABAFAHQAFAHAAAIQgBAJgGAHQgGAGgHAAQgIgBgFgHg");
	this.shape_18.setTransform(347.3,199);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAPQgFgHABgIQAAgJAGgHQAHgGAGAAQAIABAGAHQAFAHgBAIQAAAJgGAHQgGAGgHAAQgIgBgGgHg");
	this.shape_19.setTransform(308.2,198.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4EBE4").s().p("AgmCBIgNgCQAbgNASggQAQgfADgrQABgfgIgcQgHgcgQgTQgRgTgVgGQAOgGAQAAQAZACASASQATATAKAeQALAegCAiQgCAkgNAdQgOAdgVAQQgSAQgYAAIgCgBg");
	this.shape_20.setTransform(311.3,198.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ABfAFQgCAmgOAeQgPAegWARQgXARgZgBQgbgCgUgTQgVgUgLgfQgLggABgkQADgmAOgeQAPgeAWgRQAXgRAZABQAaACAVATQAVAUALAfQALAggCAkg");
	this.shape_21.setTransform(308,198.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGCIQgbgCgUgTQgVgUgLgfQgLggABgkQADgmAOgeQAPgeAWgRQAXgRAZABQAaACAVATQAVAUALAfQALAggCAkQgCAmgOAeQgPAegWARQgWAQgXAAIgDAAg");
	this.shape_22.setTransform(308,198.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4EBE4").s().p("AgjB6IgLgCQATgEAQgQQAOgQAKgZQAKgaACgfQACgdgIgaQgHgagMgSQgOgRgTgGIALgBQAVACAPARQARARAIAcQAJAdgBAgQgCAigMAbQgMAbgSAPQgPAPgUAAIgDAAg");
	this.shape_23.setTransform(351.3,199.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ABLg7QAKAdgCAiQgCAkgNAcQgMAdgUAQQgUAQgVgBQgYgBgSgTQgRgSgKgdQgKgeACgiQACgkANgcQAMgcAUgQQAUgRAVABQAYACASASQARASAKAeg");
	this.shape_24.setTransform(348.3,199.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFCAQgYgBgSgTQgRgSgKgdQgKgeACgiQACgkANgcQAMgcAUgQQAUgRAVABQAYACASASQARASAKAeQAKAdgCAiQgCAkgNAcQgMAdgUAQQgTAPgVAAIgBAAg");
	this.shape_25.setTransform(348.3,199.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5B3516").s().p("AE5HKIhPgFQg8gGgxgNQgxgNgugWQgrgWgxgeQglgYgXgiQgWgjgLgiQgLgigDgXIgDgYIgMgCQgGAOgQAJQgPAJgVACQgWADgYgGQgVgEgUgMQgTgMgMgUQgMgUABgcQAjhIArAAQAUAAARAIQARAKAOANQANAOAIALIAIALIAKARIACggQAAgNgDgHQgEgHgEgEQAPgMACgQQAAgPgGgOQgGgNgGgIQAKgGAEgHQADgIABgGQAAgKgDgIIgFgNQAjgbABgaQAAgRgJgKQgIgLgKgFQAhgWAMgYQAMgYABgVQAAgSgCgNQgDgOgDgHQAQgGAHgJQAGgIAAgIQAAgKgFgKQgFgJgFgGQASgIAHgLQAHgLAAgJIAAgBQADACgEAjIgNBdQgHA6gHBIQgHBJAABNQgBBMAJBKQAKBJAYA9QAbA7AwAmQAyAlBAAYQA/AXBDAPIB/AfQgcgCgfgBg");
	this.shape_26.setTransform(280.6,208.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AHAm8QgRgJgMgRQgLgSAAgdQAAABgMAHQgMAIgUAIQgUAIgYACQgYACgXgKQgXgKgTgdQAAAAgLAIQgKAHgRAEQgRAFgTgHQgTgIgSgcQAAABgMAFQgMAFgPgBQgOgBgIgQQAAAAgFAIQgFAIgJAJQgJAKgOAFQgNAFgPgFQgRgFgUgUQAAAAgIAFQgIAEgLAEQgLAEgKgCQgJgCgFgMQABACgBAFQgCAHgHAHQgHAGgSAAQgBAAgIAGQgJAGgNAFQgMAFgMgEQgNgEgHgSQAAAAgHAIQgGAIgMAHQgMAHgPAAQgPAAgQgNQABAAABAEQADAFgBAIQgBAIgJAJQgIAJgWAIQgeALgRAAQgRAAgIgDQgGgDgBAAQAAAAgBAGQgCAHgFAHQgFAHgLABQgLAAgUgLQABABAAAJQABAKgIALQgHALgWAGQAAAAAHAIQAGAHAEALQAFALgGALQgFALgXAGQABABAEAPQAFAPAAAXQAAAXgOAYQgNAZgkAVQAAAAAHAEQAHADAIAIQAHAIADALQADAMgIAPQgIAPgYATQABAAAEALQAFALgCAOQgBANgTAIQABAAAGAJQAGAHAFANQAFAOgDANQgDAOgRALIAEACQAEACAEAHQADAGAAAMQAAAMgBADQAAgCAAAAQAAgBgIgLQgIgLgNgOQgOgOgSgLQgTgLgVABQgUAAgWASQgWASgVAqQgBAjAQAXQARAYAbAMQAbANAdABQAdABAXgKQAXgJAJgVQAAAAACAQQACAPAGAaQAGAZAMAcQAMAdAVAbQAVAbAfAUQAzAfAvAWQAuAWAxANQAwAOA8AFQA8AEA0ACQAzACAjAKQAjAKAKAaQAAAAAPgMQAQgLAdgQQAegQAqgMQAVgGAjgJQAjgJApgOQApgOAogWQAogVAhggQAhgfASgrQARgrgDg5QAAAAASAAQASgBAbgEQAagEAbgKQAbgKATgSQATgRADgcQADgcgVgoQgPgagWgDQgVgBgXAKQgXALgUARQgUARgMAOQgMANgBABQAAgBgIgMQgIgNgHgUQgGgVAEgWQAFgXAXgXQAAAAgFgJQgFgKgDgRQgEgQAEgWQADgVARgYQgBAAgJgFQgJgFgJgJQgJgKgBgPQgBgPAOgVQgBAAgLgJQgMgKgOgRQgNgSgIgaQgHgaAHgiQAAAAgGgDQgFgEgDgIQgDgJAHgOQgBAAgNgCQgMgDgRgJg");
	this.shape_27.setTransform(318.9,203.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#72461E").s().p("AAyIJQgjgKgzgCQg0gCg8gEQg8gFgwgOQgxgNgugWQgvgWgzgfQgfgUgVgbQgVgbgMgdQgMgcgGgZQgGgagCgPIgCgQQgJAVgXAJQgXAKgdgBQgdgBgbgNQgbgMgRgYQgQgXABgjQAVgqAWgSQAWgSAUAAQAVgBATALQASALAOAOQANAOAIALIAIAMIAAACIABgPQAAgMgDgGQgEgHgEgCIgEgCQARgLADgOQADgNgFgOQgFgNgGgHIgHgJQATgIABgNQACgOgFgLIgFgLQAYgTAIgPQAIgPgDgMQgDgLgHgIQgIgIgHgDIgHgEQAkgVANgZQAOgYAAgXQAAgXgFgPQgEgPgBgBQAXgGAFgLQAGgLgFgLQgEgLgGgHIgHgIQAWgGAHgLQAIgLgBgKIgBgKQAUALALAAQALgBAFgHQAFgHACgHIABgGIAHADQAIADARAAQARAAAegLQAWgIAIgJQAJgJABgIQABgIgDgFIgCgEQAQANAPAAQAPAAAMgHQAMgHAGgIIAHgIQAHASANAEQAMAEAMgFQANgFAJgGIAJgGQASAAAHgGQAHgHACgHIAAgGQAFALAJACQAKACALgEQALgEAIgEIAIgFQAUAUARAFQAPAFANgFQAOgFAJgKQAJgJAFgIIAFgIQAIAQAOABQAPABAMgFIAMgGQASAcATAIQATAHARgFQARgEAKgHIALgIQATAdAXAKQAXAKAYgCQAYgCAUgIQAUgIAMgIIAMgIQAAAdALASQAMARARAJQARAJAMADIAOACQgHAOADAJQADAIAFAEIAGADQgHAiAHAaQAIAaANASQAOARAMAKIAMAJQgOAVABAPQABAPAJAKQAJAJAJAFIAKAFQgRAYgDAVQgEAWAEAQQADARAFAKIAFAJQgXAXgFAXQgEAWAGAVQAHAUAIANIAIANIANgOQAMgOAUgRQAUgRAXgLQAXgKAVABQAWADAPAaQAVAogDAcQgDAcgTARQgTASgbAKQgbAKgaAEQgbAEgSABIgSAAQADA5gRArQgSArghAfQghAggoAVQgoAWgpAOQgpAOgjAJIg4APQgqAMgeAQQgdAQgQALIgPAMQgKgagjgKg");
	this.shape_28.setTransform(318.9,203.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A0B0B").s().p("AgWIPQgsgCgkgLQgkgLgZgNQgagNgOgKIgOgLIgBAAIgBgBIgFgDIgMgJQgGgHgEgJQgGgTALgYIADgGIgGgDIgNgGQgLgGgNgLQgNgLgGgRQgHgZAWgcIAEgFIgFgEIgPgNQgNgMgOgVQgNgUgEgbQgFgrAhgnIAEgFIgFgEIgPgNQgNgMgOgWQgOgVgEgbQgGgyApgwIADgDIgDgEIgHgPQgGgPgEgVQgEgWAHgXQAMghApgRIAFgDIgCgFIgDgLQgCgJACgOQABgNALgOQAKgOAYgKIAEgCIAAgEIACgNQACgLAHgLQAHgKAPAAQAVAAAPgMQAPgNAIgRQAJgRAAgOQABgHAGgMQAHgMANgNQgBAnAMAjQAMAjAaAZQAbAZAqAIQgbARgaAMQgaANgSARQgSARgCAeQgIAZAFAZQAGAZAUAQQAVAQAlgEQgYAJgaAQQgaAQgUAVQgVAVgIAYQgHAYAMAWQALAYAXAKQAWALAegCQAdgCAfgNQgTAMgMATQgLATgDAUQgDAVAHAQQAHAQAQAFQAkAUAgACQAiABAggNQAggNAggXQgmAjgOAsQgNAsAHAvQALAZATAFQAUAFAXgFIAygLQgXAJgGAQQgGAQAHASQAGASANAPQAOAPAOAGQAgAJAigCQAhgCAhgGIgLAIQgFAEgFgFQADAxAUAhQhvAGhoACIhUACQg4AAgvgDg");
	this.shape_29.setTransform(271.8,164.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1.3,1,1).p("AgHADQAHgCAIgBQgEgDgEACQgCABgFADg");
	this.shape_30.setTransform(310.5,207.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1.3,1,1).p("AgGADQAGgDAHgC");
	this.shape_31.setTransform(270.6,167.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#682525").s().p("AG2JlIAIgOQAEgGAGgEQAMgIACgJQAAgGgCgEIgDgEIgHgIIAKgDQAhgIAMgXQAIgPAAgQQAAgQgDgLIgDgMIgCgFIAGgCQAkgOAIgZQAFgQgDgPQgEgPgFgKIgFgKIgDgFIAFgEIAIgHQAIgHAIgMQAIgMABgRQABgZgGgKQgGgLgBAAIgGgFIAHgEIAIgIQAHgIAEgQQAFgRgGgaQgGgagJgMQgKgMgHgDQgIgEgBABIgGgBIABgGIABgNQAAgMgCgRQgCgRgJgRQgNgTgKgGIgLgFIgHAAIABgHIACgRQACgQABgXQABgYgEgYQgEgYgKgRQgNgUgPgCQgKAAgHAFIgHAGIgIAKIgGgZQgDgNgLgYQgEgKgDgCIgEgCIgEABIgCAEIgMgEIAAgOQAAgMgGgQQgHgQgRgMQgTgMgOAAQgPgBgKAEIgKAFIgJAGIAAgLQAAgJgDgOQgCgNgGgMQgHgMgLgCQgXgEgOACIgOADIgHACIgBgHIgDgRQgEgPgIgTQgJgTgOgLQgLgHgMADQgMADgLAIQgMAHgHAHIgHAHIgJAJIgCgMIgCgKQgDgIgGgKQgFgKgLgFQgJgDgLACQgLACgJAFQgKAEgFADIgJAGIAAgLQAAgCgDgMQgEgMgOgNQgOgMgfgFQgZgCgVAHQgWAHgPAKQgQAKgJAJIgKAJIgHAIIgDgLIgFgIQgEgHgMgIQgMgHgWgCQgUgBgLALQgHAIgCAJIgBAKIgMACIgDgEQgCgFgGgEQgFgEgKgBQgLAAgKAGQgJAGgGAGIgGAGIgGAHIgEgHIgJgLQgJgKgSgJQgRgJgbAAQgTABgOAIQgOAIgIALQgJALgEAJIgEAKIgBAEIgFAAIgEAAQAHgRAPgSQAQgSAdgMQAcgMAuABIAEABIACgFIAEgKQAEgIAIgLQAJgLANgJQAOgIAUgBQAbABARAJQARAJAJAJIAJALIAFAIIAFgHIAGgHQAGgGAKgGQAJgFALAAQAKAAAGAFQAFAEADAEIACAFIAMgCIACgKQABgJAIgJQAKgKAVABQAWACALAHQAMAHAFAIIAEAIIAEAKIAHgIIAJgJQAJgIAQgLQAQgKAVgHQATgHAZADQAfAEAOANQAOANAEAMQADAMAAABIAAALIAJgFQAGgEAKgEQAKgEALgCQAMgCAJADQAKAEAGAKQAGAKACAJIACAJIACANIAJgKIAIgHQAHgGALgIQALgHANgDQAMgDAKAGQAPAMAIASQAJATADAQIAEAQIABAHIAHgCIAOgCQANgCAXADQAMADAGALQAGAMACAOQADAOAAAIIAAALIAKgGIAKgFQAJgDAPAAQAPABASALQASANAGAQQAGAQABAMIAAANIALAEIADgDIADgCQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQADADAEAJQALAZAEAMIAGAZIAIgJIAHgGQAGgFAKAAQAPABANAUQALASAEAYQADAYgBAXQAAAYgCAQIgDARIgBAGIAHABQABgBAKAGQAKAFANAWQAJAQACARQADASgBAMIgBAKIgBAHIAHAAQABAAAHADQAIADAJAMQAJAMAHAaQAFAbgEAQQgFAQgHAIIgIAIIgGAFIAGAFQABAAAFAKQAGALAAAYQgCARgIANQgIAMgHAHIgJAHIgFADIADAFIAGALQAFAJADAPQADAPgEAQQgJAagkANIgFACIACAGIADAMQACAKAAAQQAAAQgHAPQgNAYggAIIgKACIAHAIIACAEQADAEgBAGQgBAKgNAHQgFAEgEAGIgJAPQgHAPgOARQgNASgdAPQgdAPgzAIIAHgNgArXlmIgFgBIAAgCQABgGAGgMQAHgMANgNQgIAQgDALIgDANIgBAHg");
	this.shape_32.setTransform(329.7,152.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1.3,1,1).p("AMigKQABAAAIADQAJADALALQALANAHAcQAGAegGASQgFASgIAIQgHAIgBAAIAEAFQAEAFADALQAEALgBASQgCATgIAOQgJANgIAHQgJAIAAAAQAAAAAHANQAGANACASQADATgLATQgKATggANQAAAAADAOQAEANgCAUQgBATgMARQgNARgfAJQABAAADAGQAEAGgCAJQgCAKgOAKQgJAGgGAPQgHAOgOASQgOASgcAQQgdAQgzAJQg0AIhSgDQg6gDhUACQhUADhjAEQhiAFhoAFQhnAFhiACQhhAChQgDQgugDgkgLQglgLgagNQgagOgOgKQgOgKAAgBQgBAAgHgEQgHgFgIgKQgIgJgCgPQgCgQAKgVQAAAAgKgEQgKgFgMgJQgMgJgJgOQgJgOABgSQABgSAQgXQAAAAgLgJQgLgKgNgRQgNgRgIgXQgJgXAFgbQAEgcAZgdQgBAAgLgLQgMgKgOgSQgNgTgIgZQgIgaAGgeQAGgfAcghQgBAAgHgSQgIgRgDgaQgDgZANgaQAMgZAngSQgBAAgCgKQgDgKACgPQABgPALgQQALgPAbgLQAAgBABgIQABgIAEgKQAEgKAIgIQAIgHAOAAQASAAAOgLQAOgMAHgPQAIgQAAgNQABgKAKgQQAKgQATgPQATgPAcgHQAbgIAjAIQAAgBADgLQADgMAIgQQAJgRARgQQARgQAcgLQAcgKAqACQAAAAAEgJQAEgKAJgMQAJgMAPgJQAPgJAWgBQAdAAATAKQASAKAJALQAKAKgBABQABgBAGgGQAHgHAKgHQALgGAMAAQANABAHAGQAHAFADAFQACAEAAACQAAgCACgKQACgLAKgKQAKgLAYABQAZACALAIQANAJAFAIQAFAIgBABQAAgBAKgIQAJgJAQgLQARgLAWgHQAXgHAaACQAaAEAPAJQAOAKAHALQAGALACAJQACAIgBAAQABAAAKgFQAKgFAPgEQAOgDANAEQAMAFAHALQAGALADAKQADAJAAABQAAAAAIgIQAHgHANgIQAMgIAOgDQAOgDAMAIQAMAJAIAOQAIAOAEAOQAFAOACAKQACAKAAAAQAAAAAOgDQAPgCAZAEQAMACAHALQAHAKADANQADANABAJQAAAJAAABQABgBAKgEQAKgEARAAQAQAAAVANQATAOAHARQAHASAAANQAAAMAAACQAAgBAEgEQAEgEAGABQAHACAHAQQALAZAEANQADALAAABQABgBAFgEQAFgEAJgDQAIgCALAEQALAFAMARQALASAEAZQADAZAAAYQgBAZgCAQQgCAQAAABQAAgBAGACQAFACAJAHQAJAIAKARQAJARADASQACATgBAMQAAANgBAAg");
	this.shape_33.setTransform(318.4,153.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#490F0E").s().p("AnoKEQgugDgkgLQglgLgagNQgagOgOgKIgOgLIgIgEQgHgFgIgKQgIgJgCgPQgCgQAKgVIgKgEQgKgFgMgJQgMgJgJgOQgJgOABgSQABgSAQgXIgLgJQgLgKgNgRQgNgRgIgXQgJgXAFgbQAEgcAZgdIgMgLQgMgKgOgSQgNgTgIgZQgIgaAGgeQAGgfAcghIgIgSQgIgRgDgaQgDgZANgaQAMgZAngSIgDgKQgDgKACgPQABgPALgQQALgPAbgLIABgJIAFgSQAEgKAIgIQAIgHAOAAQASAAAOgLQAOgMAHgPQAIgQAAgNQABgKAKgQQAKgQATgPQATgPAcgHQAbgIAjAIIADgMQADgMAIgQQAJgRARgQQARgQAcgLQAcgKAqACIAEgJQAEgKAJgMQAJgMAPgJQAPgJAWgBQAdAAATAKQASAKAJALQAKAKgBABIAHgHQAHgHAKgHQALgGAMAAQANABAHAGQAHAFADAFIACAGIACgMQACgLAKgKQAKgLAYABQAZACALAIQANAJAFAIIAEAJIAAAAIAAAAIAKgJQAJgJAQgLQARgLAWgHQAXgHAaACQAaAEAPAJQAOAKAHALQAGALACAJIABAIIALgFQAKgFAPgEQAOgDANAEQAMAFAHALQAGALADAKIADAKIAIgIQAHgHANgIQAMgIAOgDQAOgDAMAIQAMAJAIAOQAIAOAEAOIAHAYIACAKIAOgDQAPgCAZAEQAMACAHALQAHAKADANIAEAWIAAAKIALgFQAKgEARAAQAQAAAVANQATAOAHARQAHASAAANIAAAOIAEgFQAEgEAGABQAHACAHAQQALAZAEANIADAMIAGgFQAFgEAJgDQAIgCALAEQALAFAMARQALASAEAZQADAZAAAYQgBAZgCAQIgCARIAGABQAFACAJAHQAJAIAKARQAJARADASQACATgBAMIgBANIAJADQAJADALALQALANAHAcQAGAegGASQgFASgIAIIgIAIIAEAFQAEAFADALQAEALgBASQgCATgIAOQgJANgIAHIgJAIIAHANQAGANACASQADATgLATQgKATggANIADAOQAEANgCAUQgBATgMARQgNARgfAJIAEAGQAEAGgCAJQgCAKgOAKQgJAGgGAPQgHAOgOASQgOASgcAQQgdAQgzAJQg0AIhSgDQg6gDhUACIi3AHIjKAKQhnAFhiACIhEABQg6AAgzgCg");
	this.shape_34.setTransform(318.4,153.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#725107").ss(1.3,1,1).p("ABpiLQgwgYgrgEQgpgEgiAHQghAHgTAJQgUAIAAABQgBAAgKATQgKASgLAkQgLAjgDAwQgDAyAOA/ICyhXICVB+QAAgBAGgZQAHgZAFgnQAFgngDgpQgCgrgRglQgRglgmgVg");
	this.shape_35.setTransform(328.4,255.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AF800B").s().p("AAKArIiyBXQgOg/ADgyQADgwALgjQALgkAKgSQAKgTABAAQAAgBAUgIQATgJAhgHQAigHApAEQArAEAwAYQAmAVARAlQARAlACArQADApgFAnQgFAngHAZIgGAag");
	this.shape_36.setTransform(328.4,255.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#365B0A").s().p("AgagOIA1ATIgHAKg");
	this.shape_37.setTransform(320.8,368.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#725107").s().p("AAAAGIgSguIgIgVIAMAVQAKASALAZQANAcAHAcIgNADQgGgcgIgcg");
	this.shape_38.setTransform(370.7,280.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#725107").s().p("AggBFQAUg3ANgdQAOgfAJgNIAJgNIgNAhQgOAigaBOg");
	this.shape_39.setTransform(289.8,281.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#37560F").s().p("AANAUQgWgCgRgKQgSgIgKgJIgKgKIAKAHQAKAHASAFQARAIAUAAQAVABAQgBIARgBQgaANgWAAIgEAAg");
	this.shape_40.setTransform(348.5,417.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#37560F").s().p("AAEAUQgYgCgQgKQgQgIgHgJIgIgLIAKAHQAKAGAOAHQAOAFAOADQALADARAAIAfgBIAOgBQghAMgYAAIgHgBg");
	this.shape_41.setTransform(296.1,414.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A37308").s().p("AnHDNQgYgTgJgRQgIgQgBgFQABgHAMgdQAMgeAbgrQAbgpAwgvQAwgvBJgqQBJgpBngaQBmgbCLgBQBMgBA6ALQA6AKAvAWQAwAVArAhQgeAigbAcQgbAcgfAUQgfATgoAIIAAAAIgCAcIgEAoIgEAkIgCAQIgMgJIgdgVQgRgNgQgOIgggdIgcgaQgkgBgkgEQgaAKgeAOQgXAMgTANIghAXIgOAJQgJgVgFgdQgEgdgCgaQgrgkgagPQgbgPgSAAQgRABgRAJIgnAWQgXgEgUARQgTARgRAbQgRAegPAhQgPAhgPAcQgHAPAAAUQAAATAGAUQAGAUALAPQgwgMgYgSg");
	this.shape_42.setTransform(315.8,263.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C69422").s().p("AAqhLQiRhmjLgbIAqgBQBlAABQAZQBQAXA8ApQA9AnAtAuQAtAtAeAsQAeAtARAhQARAiAFAOQgNANgPAJQhaiziThmg");
	this.shape_43.setTransform(359.2,261.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A37308").s().p("Ag8GKQgmgRgKgFIAAgXQABg0AIg9QAIg9ANg+QAMg/ANg3IAahoIAThIIAIgdIAAgIIgGAAIgNAAQATg7Acg1QAfg2AygtQgPBRgXBYQgXBXgUBaQgVBXgJBZQgKBaAJBUQAGBVAlBOQg9gUgngQg");
	this.shape_44.setTransform(287.8,310.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#725107").ss(1.3,1,1).p("AJ2jAQgfAgghANQghAMgcABQgdAAgSgEQgSgEAAgBQAVA5AMBGQANBEAHBKQAGBLADBFQACBGgBA4QAAA4gBAgQgCAhAAABQiRAyiEASQiDARhwgFQhygFhcgSQhcgThCgWQhCgWgjgQQgjgQAAgBQgBg0AHg/QAHg/ANhCQAMhCAOg9QAOg+ANgvQANgxAIgcQAIgdAAgBQhKABgsgPQgrgOgWgVQgVgUgHgQQgGgQABgBQgBgBAKgbQAKgcAZgsQAagrAvgyQAvgxBKgsQBKgsBsgcQBrgdCPgCQBgAABNAWQBNAWA9AkQA9AkAuArQAuAsAhArQAgAsAUAkQAUAkAJAWQAKAXAAAAg");
	this.shape_45.setTransform(328.4,299.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AF800B").s().p("AgUJWQhygFhcgSQhcgThCgWQhCgWgjgQIgjgRQgBg0AHg/QAHg/ANhCQAMhCAOg9QAOg+ANgvIAVhNIAIgeQhKABgsgPQgrgOgWgVQgVgUgHgQQgGgQABgBQgBgBAKgbQAKgcAZgsQAagrAvgyQAvgxBKgsQBKgsBsgcQBrgdCPgCQBgAABNAWQBNAWA9AkQA9AkAuArQAuAsAhArQAgAsAUAkQAUAkAJAWIAKAXQgfAgghANQghAMgcABQgdAAgSgEIgSgFQAVA5AMBGQANBEAHBKQAGBLADBFQACBGgBA4IgBBYIgCAiQiRAyiEASQhmAOhcAAIgxgCg");
	this.shape_46.setTransform(328.4,299.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#53821C").s().p("AmAGAIACgmIAAgOIgFgCQgFgCgKgKQgJgKgLgWQgKgWAEgJQAFgJAIgCIAJgBQgTgzgHhBQgHhBAAhDQAAhFAEhBQAFhBAGg0IALhSIAFggIAhgCIBYgEIB8gGICOgHICOgFICBgEQA5gCAlABQAkAAAHADQAJAFAIAXQAIAYAHAgIAMA/IAHA0IADAWIgBAJQhzAch3AAQh4gBh1gXQh2gYhugpQgPApgXAmQgXAmgVAmQgVAlgMAnQgLAoAIAvQAGAUAKAQIASAhQAHARAEAWQABAPgCARQgEARACAPQABAQAOALQAZATAgAJQAfAIAkADQAlACAlABQgdAVgjAJQgiAJgjAHQgiAHgbAPIhEgQg");
	this.shape_47.setTransform(326.2,380.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#53821C").s().p("AggEJIACgMIAAgCIgYgiQgEgHAAgFIABgEQACgGAHgFQAGgEAHgDIAMgEIAEgBIAAgDIAAgCIgBgRQgCgOgJggQgIgggUg1QgNgigGgmQgGgmgCgjQgBgjAAgbIACglIABgOIAAgDQAggmAtgOQArgOAxAWQgHgCgNAPQgMAPgMAWQgNAXgKATIgLAaQgMAkgFAnQgFAmADAnQACARAKAcIAUA5QALAdADAYQAEAZgNAMQgMAMgjgGQAbASAaANQAaAOAfAJQgEAJgMAFQgNAFgOAAQgOABgKgDQgKgDABgGQgEATgBAVIgqAEIADgdg");
	this.shape_48.setTransform(340.9,394.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6DA829").s().p("AgMElIAAgMQgSAAgNgIIgegSQANgMAPgGQAPgHANgIQAMgJAFgSIgKAMQAFgUgDgSQgCgSgFgTQgEgSgCgTQgBgLACgLQAEgUAKgRIAUgiQAKgOAFgUQAEgWgGgQIgLgfQgFgQADgVQAEgSAEgIIAJgNQADgEAAgIQgBgJgHgSQgHgVgNgSQgLgUgLgTQATANAQAFQAQAGALAHQALAFAHANQAGAMADAZQACAagEAeIgIA4QgHBSgJBPQgKBRgMBQQgFAigCAjIgegCg");
	this.shape_49.setTransform(314.9,394.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6DA829").s().p("AgxFAQAZABANgLQALgKADgRQADgRgGgTQgHgJgRAGQgRAEgTAKQA5hiAOhuQARhrgQhyQgOhwgphqIAmAAQANABADABQAHAEAHAWQAIAVAGAhQAHAgAGAkQAFAjAEAgIgqGoIAAAEIAEACIAIAHQAHAIAEATIAAAGQgBAKgFAGQgGAHgFADIgHADIgFACIADAOIAJAlIgiALQgSgkgWgjg");
	this.shape_50.setTransform(363.5,380.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#365B0A").ss(1.3,1,1).p("AGDmdQgGgCglgBQgkAAg6ABQg6AChGACQhHADhIADQhKADhFAEQhFADg3ADQg3ACggACQggACgBAAQAAAAgFAfQgFAfgGA0QgGA0gFBBQgEBBAABFQAABDAHBBQAHBAATA0QgBgBgIACQgIABgFAJQgEAJAKAWQALAWAJAKQAJAKAGADQAFACABAAIgBAOQAAAOgBAYQCRAnCYAKQACgjAFghQAKhAAIhCQAIhCAGg+QAGg9AEgvQAEgxADgdQACgdAAAAQAAAAAJAGQAKAFAMAGQAOAFAOAAQAPAAAKgKQAAABgCAYQgCAYABAnQABAlAGAuQAGAuAPAsQAVA5AIAfQAJAgABANQACANgBgBQAAAAgIADQgIADgJAGQgJAFgEAJQgEAJAIANQALAQAFAHQAFAGABACIABABIgCALQgBALgCAUQCZgLCSgvIgLgtQABAAAHgEQAIgEAHgJQAGgJgBgQQgCgPgFgJQgGgIgEgDQgFgEAAAAIApmnQAAgBgCgVQgDgVgFgfQgFgfgGggQgHghgIgXQgIgXgJgGg");
	this.shape_51.setTransform(326.1,382.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#589319").s().p("Al/FwIABgmIABgOIgGgCQgGgDgJgKQgJgKgLgWQgKgWAEgJQAFgJAIgBIAJgBQgTg0gHhAQgHhBAAhDQAAhFAEhBQAFhBAGg0QAGg0AFgfIAFgfIAhgCIBXgEIB8gGICPgHICPgGICAgEQA6gBAkAAQAlABAGACQAJAGAIAXQAIAXAHAhIALA/IAIA0IACAWIgpGnIAFAEQAEADAGAIQAFAJACAPQABAQgGAJQgHAJgIAEIgIAEIALAtQiSAviZALIADgfIACgLIgBgBIgGgIIgQgXQgIgNAEgJQAEgJAJgFQAJgGAIgDIAIgDIgBgMQgBgNgJggQgIgfgVg5QgPgsgGguQgGgugBglQgBgnACgYIACgZQgKAKgPAAQgOAAgOgFQgMgGgKgFIgJgGIgCAdIgHBOIgKBsIgOCAQgIBCgKBAQgFAhgCAjQiYgKiRgng");
	this.shape_52.setTransform(326.1,382.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#254C7A").ss(1.3,1,1).p("AiEiBQAAAAAJACQAKACATAMQAUALAdAdQAeAcAmAzQAoA0AzBTQAAABADAFQAEAEAFAAQAEgBAFgQQAAgBgMgTQgLgUgTgeQgTgfgaghQgZgjgbggQgcgggegWQgegWgcgEQAAgBgFgBQgEgBgDADQgEAEAEAOg");
	this.shape_53.setTransform(453.9,355);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#426BA8").s().p("AB1CTIgDgGQgzhTgog0QgmgzgegcQgdgdgUgLQgTgMgKgCIgJgCQgEgOAEgEQADgDAEABIAFACQAcAEAeAWQAeAWAcAgQAbAgAZAjQAaAhATAfIAeAyIAMAUQgFAQgEABIgBAAQgEAAgEgEg");
	this.shape_54.setTransform(453.9,355);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AhWiQQAAAAATAHQASAIAdAPQAaAPAdAXQAeAXAXAgQAXAeAIApQAAAAACALQACAMgDARQgDAQgOAPQgOAPggAJQAAgBgCgJQgBgJgDgNQgDgMgDgKQgEgKgFgCQgGgCgKAGQgKAFgKAFQgLADgNgFQgNgHgMgOQgMgOgDgNQgDgNAOgFQAVgGAEgBIAEgCQAAAAgMgBQgMgBgRgFQgRgFgPgJQgPgKgGgRQgHgRAIga");
	this.shape_55.setTransform(436.1,336);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#72461E").s().p("AA3CHIgEgWIgGgWQgEgLgFgBQgGgCgKAGQgKAFgKAEQgLAEgNgFQgNgHgMgOQgMgOgDgNQgDgOAOgEIAZgHIAEgBIgMgCQgMgCgRgEQgRgGgPgIQgPgKgGgSQgHgQAIgbIAfhDIATAGQASAIAdAPQAaAPAdAXQAeAXAXAgQAXAdAIApIACANQACALgDARQgDAQgOAPQgOAPggAJIgCgKg");
	this.shape_56.setTransform(436.1,336);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#235418").ss(1.3,1,1).p("AgmkRQAAAAADgFQAEgEAHgDQAHgEAMAEQABAAAKAaQANAaANAxQANAxAFBGQAEBDgPBWQgOBWgqBlQAAABgGAFQgFAGgIABQgIABgGgOQABgBAMghQANghAOg4QANg5AHhHQAHhFgKhNQgIhNglhKg");
	this.shape_57.setTransform(438.7,369.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#39722E").s().p("AgyETIANgiQANghAOg4QANg5AHhHQAHhFgKhNQgIhNglhKIADgFQAEgEAHgDQAHgEAMAEIALAaQANAaANAxQANAxAFBGQAEBDgPBWQgOBWgqBlIgGAGQgFAGgIABIgBAAQgHAAgGgNg");
	this.shape_58.setTransform(438.7,369.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#254C7A").s().p("AAkFeIgShZQgKg4gJhGQgMhHgIhJQgIhFgEhDIgGh3QgCg1AAggIgBghIANAAQgBACADBaQADBbAQCrQAOCpAlDyIgHghg");
	this.shape_59.setTransform(469.9,425.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#235418").ss(1.1,1,1).p("ABviCQAAgBgMAEQgNADgVAOQgVAOgaAeQgYAegbAzQgcA1gZBSQgBABgJAAQgIAAgGgIQAAgBAHgYQAHgYAPglQAPglAYgnQAYgpAggjQAjgjAtgTg");
	this.shape_60.setTransform(407.1,358.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#39722E").s().p("AhuCPIAHgZQAHgYAPgmQAPglAYgmQAYgpAggkQAjgiAtgUIARATIgMAEQgNADgVAOQgVAOgaAeQgYAegbAzQgcA1gZBSIgKABQgIgBgGgHg");
	this.shape_61.setTransform(407.1,358.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#306026").s().p("AhyFAIADggQAEgeAJg0QAKg0AQhDQARhDAZhIQAahLAihMQAkhLAxhFIgNAWQgPAYgVAqQgWArgYA0QgVA2gUA5QgSA1gMA5QgMA4gHA0QgIA0gEApIgFBBIgCAZg");
	this.shape_62.setTransform(437.6,439.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#306026").s().p("AhiAnIAVgiQANgSAOgQQAOgRAMgGQANgEAUANQAWANAWAUQAWASAQAQIAQAQIgPgCIghgFIgogFIgagFQgKgBgQAFIggAKIgdAMIgMAFIAIgPg");
	this.shape_63.setTransform(429,476.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#28541E").ss(1.3,1,1).p("AAuADQgKgIgOgMQgPgNgMgKQgOgKgIgCQgBAAgJAIQgIAJgHAMQgGANAFALQAAABAMAMQANAMASAMQAPANASACIAhgoQAAgBgKgJg");
	this.shape_64.setTransform(435.3,398.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#39722E").s().p("AgKAmQgSgMgNgMIgMgNQgFgLAGgNQAHgMAIgJIAKgIQAIACAOAKQAMAKAPANIAYAUIAKAKIghAoQgSgCgPgNg");
	this.shape_65.setTransform(435.3,398.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#28541E").ss(1.3,1,1).p("AAggKQgKgJgOgJQgMgJgPgBQAAAAgFADQgFADgFAKQgFAKgBASQABABAIAIQAIAJAMAIQALAIAMgBIAdgnQAAgBgJgJg");
	this.shape_66.setTransform(397.6,373);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#39722E").s().p("AgLAgQgNgIgHgJIgJgJQABgSAEgKQAGgKAEgDIAGgDQAPABAMAJQAOAJAKAJIAJAKIgdAnIgEAAQgJAAgKgHg");
	this.shape_67.setTransform(397.6,373);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#28541E").ss(1.3,1,1).p("ACMmLIAAASQAAAAgUAYQgTAYgfAuQgfAugkBCQgiBDghBWQgjBVgYBoQgYBogIB5QABAAAQgJQAQgJAXgJQAXgJATgBQAPAAAUADQASADASAEQASAEANADQAMADABABQAAgBAFgjQAFgkAIg7QAJg7AJhIQAJhJAHhJQAIhLADhEQAFhDgCgyIAghbg");
	this.shape_68.setTransform(434,442.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#39722E").s().p("Ah7CrQAZhoAhhVQAihWAihDQAjhCAfguQAgguATgYIAUgYIAAgSIAQAQIghBbQADAygFBDQgDBEgIBLQgHBJgKBJIgRCDIgNBfIgGAkIgMgEIgggHIgkgHQgTgDgPAAQgTABgWAJQgXAJgRAJIgSAJQAJh5AYhog");
	this.shape_69.setTransform(434,442.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#397C2C").s().p("ACoH2QghgrgugvQgtgvgvgsQgygtgtglIhLg+IgmgfIgBgbQAAhwAPhdQAPhfAVhNQAXhLAVg2QAWg2APgcIAQgdIABgCIAAgCQABgTAFgQQAGgPAGgKIAKgPQgoBtgRB1QgSB1AJB0QAJB0AqBrQARApAcAtQAaAuAhAvQAhAwAgAwQAgAxAZAyQAZAyAMAxQgMgighgqg");
	this.shape_70.setTransform(397.2,423.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#37772A").s().p("ACQC1QhXg1hPhAQhSg/hMhBQhMhEhGhBIAAgmQgBgSABgSQBJBBBNBJQBNBJBRBDQBQBFBWA4QBXA3BcAfIgHA2QhagkhWg3g");
	this.shape_71.setTransform(408.4,447.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#37772A").s().p("AgCAeIlGjfQAFgeAHgcIDQCeQBoBPBrBGQBtBJB1A8IgHA/Qiihtiihxg");
	this.shape_72.setTransform(410.7,428);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#37772A").s().p("ABeBxQhog6hmhDQhmhFhjhIQAKgfAKgZQBfBMBjBHQBiBFBmA+QBoA+BtAxIgCAeQhwgohqg5g");
	this.shape_73.setTransform(414.3,404.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#24561A").ss(1.3,1,1).p("ABJm3Qg/gshBgnQhDgmhCgZQgBAAgIAKQgIALgIASQgIATAAAZQgBAAgQAeQgPAdgXA4QgXA4gWBQQgXBQgOBlQgOBjACB4QABAAAcAWQAdAYAuAmQAuAmA0AvQA1AvAxAxQAwAxAgAtQAjAtAJAhQAAAAANgGQANgGAUgIQAUgGAVgFQAVgEAQADQAVAEAVADQAUAEAOADQAOACABAAQAAgBAFgmQAFglAIhDQAIhCAJhWQAJhVAJhgQAIheAFhhIAhhcQgBAAgWgWQgXgWgpgkQgpglg2grQg2gtg/gtg");
	this.shape_74.setTransform(412.4,423.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#458C38").s().p("AAOH8QgggtgwgxQgxgxg1gvQg0gvgugnIhLg9IgdgWQgCh4AOhjQAOhlAXhQQAWhQAXg4QAXg4APgdIARgfQAAgZAIgSQAIgTAIgKIAJgKQBCAZBDAmQBBAnA/AsQA/AuA2ArQA2AsApAkIBAA7IAXAWIghBbQgFBigIBeIgSC1IgRCYIgNBoIgFAnIgPgDIgigFIgqgIQgQgDgVAEQgVAFgUAGIghAOIgNAGQgJghgjgtg");
	this.shape_75.setTransform(412.4,423.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#235418").ss(1.3,1,1).p("AgckkQABAAALAQQALARANAhQAPAhAMAxQAMAxACBBQACA/gPBRQgPBSgkBhQgBAAgGAAQgHAAgHgEQgIgFgFgMQABAAAOgeQAOgeAQg1QAOg1AGhGQAHhDgNhPQgLhPgrhSg");
	this.shape_76.setTransform(443.2,372.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#39722E").s().p("AgWElQgHAAgHgEQgIgFgFgMIAPgeQAOgeAQg1QAOg1AGhGQAHhDgNhPQgLhPgrhSIAQgVIAMAQQALARANAhQAPAhAMAxQAMAxACBBQACA/gPBRQgPBSgkBhIgCAAIgFAAg");
	this.shape_77.setTransform(443.2,372.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ABqAiQgJAIgOAFQgOAFgPADQgOADgLACQgQAEgTAEQgVADgQgFQgIgEgMgQQgNgPgLgVQgLgSgFgSQgFgSAIgIQAPgQAUAAQAUAAATAYQAMAQAFAHQAGAHABACIABABQAAAAAIgCQAKgCAOABQAOABANAI");
	this.shape_78.setTransform(435.4,345.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#72461E").s().p("AgrBCQgIgEgMgQQgNgPgLgVQgLgSgFgSQgFgSAIgIQAPgQAUAAQAUAAATAYIARAXIAHAJIABABIAIgCQAKgCAOABQAOABANAIIAwAnQgJAIgOAFQgOAFgPADIgZAFIgjAIIgPABQgMAAgKgDg");
	this.shape_79.setTransform(435.4,345.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AA+AnQADAMgEAFQAAAAgHADQgHACgMACQgMABgQgEQgLgEgQgPQgQgQgMgUQgMgTgCgSQgCgRAPgJQAQgHAPAFQAPAFALAKQAMAKAIAJQAIAJAAABQAAAAAFAJQAGAIAGANQAGANADAMg");
	this.shape_80.setTransform(425.3,343.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#72461E").s().p("AAHA8QgLgEgQgPQgQgQgMgUQgMgTgCgSQgCgRAPgJQAQgHAPAFQAPAFALAKQAMAKAIAJIAIAKIAFAJIAMAVQAGANADAMQADAMgEAFIgHADQgHACgMACIgFAAQgKAAgNgDg");
	this.shape_81.setTransform(425.3,343.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AA5A0QAAAAgGADQgHACgLABQgLABgPgDQgKgEgPgOQgPgPgLgTQgMgRgCgQQgBgRAOgIQAOgHAPAFQAOAFAKAJQALAKAHAIQAHAIABABQAAAAAFAJQAFAHAFAMQAGAMADALQADALgEAFg");
	this.shape_82.setTransform(420.4,341.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#72461E").s().p("AAHA4QgKgEgPgOQgPgPgLgTQgMgRgCgQQgBgRAOgIQAOgHAPAFQAOAFAKAJQALAKAHAIIAIAJIAFAJIAKATQAGAMADALQADALgEAFIgGADQgHACgLABIgFABQgKAAgLgDg");
	this.shape_83.setTransform(420.4,341.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#235418").ss(1.3,1,1).p("ABviOQAAAAgSAIQgSAJgcAUQgbAVgaAjQgdAjgWAyQgVA1gHBJQAAAAgFADQgEADgGgBQgGgCgEgMQgBAAABgUQACgVAIgiQAIgiAVgqQAVgoAngsQAlgsA+gog");
	this.shape_84.setTransform(416.6,360.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#39722E").s().p("AhkCnQgGgCgEgMIAAgUQACgVAIgiQAIgiAVgqQAVgoAngsQAlgsA+goIAXAYIgSAIQgSAJgcAUQgbAVgaAjQgdAjgWAyQgVA1gHBJIgFADQgDACgEAAIgDAAg");
	this.shape_85.setTransform(416.6,360.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#254C7A").ss(1.3,1,1).p("AkapzQAAABAFAjQAFAjAIA8QAIA7AJBJQAJBKAIBNQAIBOAFBIQAFBFACA4QAAA4gGAeQgLAzgGAcQgGAcgDANQgCAMgBADIAAACIG4FXQABgBAJgiQAIgiAOg7QANg7ANhMQANhMAJhWQAIhVAAhXQAAhVgOhQQgNhQgghBQhFg/hIg1QhHg2hAgqQhBgrg0geQg0gegfgQQgegQAAgBg");
	this.shape_86.setTransform(430.5,416.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#426BA8").s().p("Aj1EdIAAgCIADgPIAJgpIARhPQAGgeAAg4QgCg4gFhFQgFhIgIhOIgRiXIgRiEIgNhfIgFgkIAeARQAfAQA0AeQA0AeBBArQBAAqBIA2QBHA1BFA/QAfBBAOBQQAOBQABBVQAABXgJBVQgIBWgNBMQgOBMgNA7QgNA7gKAiIgJAjg");
	this.shape_87.setTransform(430.5,416.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#315D93").s().p("Ai8GMIANhfIAPh5QAIhBAGhDQAHhBAEg+QAEg+AAgyQAAgvgFgfIgOhZIgIgyIgEgXIAYgEIApgHIAogHIARgDIgKAOIgWAdIgSAbQgHAJAHgFIAAAnIACBIIADBYIACBVIABBDQAAAfgCArIgFBXIgGBSIgFA+IgDAXIADAIQADAHAJAGQAJAGAUgBQAigUArgJQAsgJAugEIBZgGIgYADIgrAGIgwAHIgnAGIgQACIgCABIgUAVQgSATggAaQghAagnAYQgnAXgoAKIAIg5g");
	this.shape_88.setTransform(470.6,432.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#254C7A").ss(1.3,1,1).p("ABMnjQgDAhgBA6QgCA6ABBLQACBKAGBSQAHBSAPBPQAPBSAaBIQAZBJAnA4IixAYQgBABgNANQgOAOgVAUQgYAVgeAVQgeAWgiARQghASgiAGQAAAAAFggQAEggAIg1QAHg2AIhDQAIhDAIhIQAHhIAFhFQAGhCAAg3QABg4gFgiQgJg7gGgiQgFgigDgQQgDgRAAgEIgBgFIB+gVIB6h0QAAAAgCAig");
	this.shape_89.setTransform(470.7,427.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#426BA8").s().p("AjIHmIAMhVIAPh5IAQiLQAHhIAFhFQAGhCAAg3QABg4gFgiIgPhdIgIgyIgDgVIgBgFIB+gVIB6h0IgCAiQgDAhgBA6QgCA6ABBLQACBKAGBSQAHBSAPBPQAPBSAaBIQAZBJAnA4IixAYIgOAOQgOAOgVAUQgYAVgeAVQgeAWgiARQghASgiAGIAFggg");
	this.shape_90.setTransform(470.7,427.1);

	this.instance = new lib.Symbol81("synched",0);
	this.instance.setTransform(403.9,350.4);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.Symbol80("synched",0);
	this.instance_1.setTransform(403.9,350.4);
	this.instance_1.alpha = 0.77;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#254C7A").ss(1.3,1,1).p("ACFDdIoDlmQABAAAOgBQAOgBAWgCQAVgCAYgDQAYgDAUgEQATgEALgFQAQgJAJgNQAJgOAEgKQADgLAAgBIIqElQgBABgOARQgPARgVAXQgVAXgUATQgVATgNAEQgNADgUAEQgVAEgUAEQgVAEgOADQgOADgBAAg");
	this.shape_91.setTransform(440.4,367.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#214D82").s().p("Al+iJIAPgBIAkgDIAtgFQAYgDAUgEQATgEALgFQAQgJAJgNQAJgOAEgKIADgMIIqElIgPASIgkAoQgVAXgUATQgVATgNAEIghAHIgpAIIgjAHIgPADg");
	this.shape_92.setTransform(440.4,367.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5B3516").s().p("ADnFbQgVgCgJgHQgPgLgHgNQgIgNgEgQIgMgiIACADQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCgBQhNgehOgxQhNgwhHg/QhHg9g4hIQg4hJgfhOIClh8IAPAUIApA1IA7BLQgPAfgWAYQgWAYgeALQgfALgogJQAhAtAqAwQApAtAwAtQAvAtAyAkQAzAkA2AWQA1AVA2ACQgMAMgCAHQgCAHAFAFIALAKQAOAOAZAKQAYAKAZAIQAaAIASAIIglAGQgXADgZABIgVABIgagBg");
	this.shape_93.setTransform(401.5,305.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AAAABQAAgBAAAA");
	this.shape_94.setTransform(416.9,330.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ACXD1QhMgehLgwQhPgwhIg/QhHg9g4hJQg4hJgghOICmh8QAAABAXAeQAXAeAmAwQAmAxAtA4QArA4AtA1QAsAzAlAoQAlAoAVAPQAZAQAeANQAdAOAbAQQAbAQAQAZQAPAYADAbQADAagMAWQgMAWgdALQgSAGgWAAQgXgBgVgGQgVgGgOgJQgPgLgHgOQgHgOgFgQQgFgPgHgRIAAgBIABABQABAAABABQAAADgCgDQAAAAAAgBgACWDxQAAACABAB");
	this.shape_95.setTransform(401.8,306.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#72461E").s().p("AEUFiQgXgBgVgGQgVgGgOgJQgPgLgHgOQgHgOgFgQQgFgPgHgRIABAAIAAABQABABAAABQAAAAAAAAQABAAAAgBQAAAAAAgBIgCgBIgBgBIgBgDIABADIAAABQhMgehLgwQhPgwhIg/QhHg9g4hJQg4hJgghOICmh8IAXAfIA9BOIBTBpIBYBtQAsAzAlAoQAlAoAVAPQAZAQAeANQAdAOAbAQQAbAQAQAZQAPAYADAbQADAagMAWQgMAWgdALQgQAGgVAAIgDAAgACXD1IAAgBIABABgACXD0IAAAAg");
	this.shape_96.setTransform(401.8,306.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#254C7A").ss(1.3,1,1).p("ABehxQgTALgeAdQgdAcgmAzQgoA0gzBTQAAABgEAFQgDAEgFAAQgEgBgFgQQAAgBAMgTQALgUATgeQATgfAaghQAZgjAbggQAcggAegWQAdgWAdgEQAAgBAFgBQAEgBADADQAEAEgEAOQAAAAgKACQgJACgUAMg");
	this.shape_97.setTransform(201.8,355);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#426BA8").s().p("Ah9CXQgEgBgFgQIAMgUIAegyQATgfAaghQAZgjAbggQAcggAegWQAdgWAdgEIAFgCQAEgBADADQAEAEgEAOIgKACQgJACgUAMQgTALgeAdQgdAcgmAzQgoA0gzBTIgEAGQgDAEgEAAIgBAAg");
	this.shape_98.setTransform(201.8,355);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ABXiQQgBAAgSAHQgTAIgcAPQgaAPgeAXQgdAXgXAgQgXAegIApQgBAAgCALQgCAMADARQADAQAPAPQAOAPAgAJQAAgBABgJQACgJACgNQADgMAEgKQAEgKAEgCQAHgCAJAGQAKAFAKAFQAMADAMgFQANgHAMgOQAMgOADgNQADgNgOgFQgUgGgFgBQgCgCgBAAQACAAAKgBQAMgBARgFQAQgFAPgJQAPgKAHgRQAHgRgIga");
	this.shape_99.setTransform(219.6,336);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#72461E").s().p("AhmB5QgPgPgDgQQgDgRACgLIADgNQAIgpAXgdQAXggAdgXQAegXAagPQAcgPATgIIATgGIAfBDQAIAbgHAQQgHASgPAKQgPAIgQAGQgRAEgMACIgMACIADABIAZAHQAOAEgDAOQgDANgMAOQgMAOgNAHQgMAFgMgEQgKgEgKgFQgJgGgHACQgEABgEALQgEAKgDAMIgEAWIgBAKQgggJgOgPg");
	this.shape_100.setTransform(219.6,336);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#895C13").ss(1.3,1,1).p("AAmkRQAAAAgDgFQgDgEgHgDQgHgEgNAEQgBAAgKAaQgMAagNAxQgOAxgEBGQgEBDAOBWQAPBWAqBlQAAABAGAFQAFAGAIABQAHABAHgOQgBgBgMghQgNghgOg4QgNg5gHhHQgHhFAKhNQAIhNAkhKg");
	this.shape_101.setTransform(217,369.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BA811C").s().p("AAlEgQgIgBgFgGIgGgGQgqhlgPhWQgOhWAEhDQAEhGAOgxQANgxAMgaIALgaQANgEAHAEQAHADADAEIADAFQgkBKgIBNQgKBNAHBFQAHBHANA5QAOA4ANAhQAMAhABABQgGANgHAAIgBAAg");
	this.shape_102.setTransform(217,369.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#254C7A").s().p("AAJgcQAQirADhbIADhcIAMAAIAAAhIgDBVQgBA1gFBCQgEBCgIBGQgIBJgLBHIgUB+IgSBZIgHAhQAljyAOipg");
	this.shape_103.setTransform(185.8,425.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#895C13").ss(1.1,1,1).p("AhuiCQAAgBAMAEQANADAVAOQAUAOAaAeQAZAeAbAzQAcA1AZBSQABABAJAAQAIAAAGgIQAAgBgHgYQgHgYgPglQgPglgYgnQgYgpghgjQgigjgugTg");
	this.shape_104.setTransform(248.6,358.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BA811C").s().p("ABXCWQgZhSgcg1QgbgzgZgeQgagegUgOQgVgOgNgDIgMgEIARgTQAtAUAjAiQAgAkAYApQAYAmAPAlQAPAmAHAYIAHAZQgGAHgJABIgJgBgAhuiDIAAAAIAAAAg");
	this.shape_105.setTransform(248.6,358.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9E3B1D").s().p("ABYFEIgFhCQgEgpgIg0QgHgzgNg5QgMg5gSg0QgTg6gWg1QgXg1gWgqIgkhCIgNgYQAwBGAkBLQAjBMAZBMQAaBIARBDQAQBDAKA0QAJA0AEAeIADAfIgZAdIgCgZg");
	this.shape_106.setTransform(218.1,439);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#9E3B1D").s().p("ABfAxIgcgMIgigKQgPgFgLABIgaAFIgmAFIgjAFIgOACIAQgQQAQgQAVgSQAXgUAVgNQAUgNANAEQANAGAOARQAPAQAMASIAUAiIAJAPIgMgFg");
	this.shape_107.setTransform(226.7,476.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#895C13").ss(1.3,1,1).p("AApAOQgMAMgSAMQgQANgRACIghgoQAAgBAKgJQAKgIAOgMQAOgNAMgKQAOgKAJgCQABAAAIAIQAJAJAGAMQAHANgFALQAAABgNAMg");
	this.shape_108.setTransform(220.4,398.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#966311").s().p("Ag3ANIAKgKIAYgUQAOgNAMgKQAOgKAJgCIAJAIQAJAJAGAMQAHANgFALIgNANQgMAMgSAMQgQANgRACg");
	this.shape_109.setTransform(220.4,398.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#895C13").ss(1.3,1,1).p("AAagjQAEADAFAKQAFAKABASQgBABgIAIQgIAJgMAIQgMAIgLgBIgdgnQABgBAJgJQAJgJAOgJQAMgJAPgBQABAAAFADg");
	this.shape_110.setTransform(258.1,373);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#966311").s().p("AgLAnIgdgnIAKgKQAJgJAOgJQAMgJAPgBIAGADQAEADAFAKQAFAKABASIgJAJQgIAJgMAIQgKAHgJAAIgEAAg");
	this.shape_111.setTransform(258.1,373);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#9E3B1D").ss(1.3,1,1).p("Aicl7IARgQIAAASQAAAAAUAYQATAYAfAuQAfAuAkBCQAiBDAiBWQAhBVAZBoQAYBoAJB5QgBAAgRgJQgRgJgWgJQgXgJgUgBQgOAAgTADQgUADgQAEQgTAEgNADQgMADAAABQAAgBgGgjQgFgkgIg7QgJg7gJhIQgJhJgHhJQgIhLgDhEQgEhDABgyg");
	this.shape_112.setTransform(221.7,442.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C14F23").s().p("ACLGDQgRgJgWgJQgXgJgUgBQgOAAgTADIgkAHIggAHIgMAEIgGgkIgNhfIgSiDQgJhJgHhJQgIhLgDhEQgEhDABgyIghhbIARgQIAAASIAUAYQATAYAfAuQAfAuAkBCQAiBDAiBWQAhBVAZBoQAYBoAJB5IgSgJg");
	this.shape_113.setTransform(221.7,442.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#9E3B1D").ss(1.3,1,1).p("AE6isQgPgggJgQIgJgRQgBgZgIgSQgIgTgIgKQgIgKgBgBQhCAahDAmQhDAng9AsQg/Atg2AsQg2AsgpAkQgoAjgXAWQgXAWgBAAIAhBbQAFBNAGBNQBPhnBahbQBZhaBlhKQBnhMB5g6g");
	this.shape_114.setTransform(237.4,396.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C14F23").s().p("AkYCmIghhbIAYgWIA/g5QApgkA2gsQA2gsA/gtQA9gsBDgnQBDgmBCgaIAJALQAIAKAIATQAIASABAZIAJARIAYAwQh5A7hnBLQhlBKhZBbQhaBbhPBmQgGhMgFhOg");
	this.shape_115.setTransform(237.4,396.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AA7117").s().p("AivHfQAZgyAggxIBBhgQAhgvAaguQAcgtARgpQAqhrAJh0QAJh0gSh1QgRh1gphtIABAAIAKAPQAGAKAGAPQAFAQABATIAAACIABACIAQAdQAOAcAXA2QAVA2AWBLQAWBNAPBfQAPBdAABwIgBAbIgmAfIhLA+QgtAlgyAtQgvAsgtAvQguAvghArQghAqgMAiQAMgxAZgyg");
	this.shape_116.setTransform(258.5,423.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#895C13").ss(1.3,1,1).p("AFCj7QAXBQAOBlQAOBjgCB4QgBAAgcAWQgdAYguAmQguAmg0AvQg1AvgwAxQgxAxggAtQgiAtgJAhQgBAAgNgGQgNgGgUgIQgUgGgVgFQgUgEgQADQgWAEgUADQgVAEgOADQgOACAAAAQAAgBgGgmQgFglgIhDQgIhCgJhWQgJhVgIhgQgIhegGhhIghhcQABAAAXgWQAXgWAogkQApglA2grQA2gtA/gtQA/gsBBgnQBDgmBCgZQABAAAIAKQAIALAIASQAIATABAZQAAAAAQAeQAPAdAXA4QAXA4AWBQg");
	this.shape_117.setTransform(243.2,423.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BA811C").s().p("AhGJEIghgOQgUgGgVgFQgUgEgQADIgqAIIgjAFIgOADIgGgnIgNhoIgRiYQgJhVgIhgQgIhegGhiIghhbIAYgWIA/g7QApgkA2gsQA2grA/guQA/gsBBgnQBDgmBCgZIAJAKQAIAKAIATQAIASABAZIAQAfQAPAdAXA4QAXA4AWBQQAXBQAOBlQAOBjgCB4IgdAWIhLA9QguAng0AvQg1AvgwAxQgxAxggAtQgiAtgJAhIgOgGg");
	this.shape_118.setTransform(243.2,423.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#895C13").ss(1.3,1,1).p("AAdkkQgBAAgLAQQgLARgNAhQgPAhgMAxQgMAxgCBBQgCA/APBRQAPBSAkBhQABAAAGAAQAHAAAHgEQAIgFAFgMQgBAAgOgeQgOgegQg1QgOg1gGhGQgHhDANhPQALhPArhSg");
	this.shape_119.setTransform(212.5,372.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BA811C").s().p("AAQElQgkhhgPhSQgPhRACg/QAChBAMgxQAMgxAPghQANghALgRIAMgQIAQAVQgrBSgLBPQgNBPAHBDQAGBGAOA1QAQA1AOAeIAPAeQgFAMgIAFQgHAEgHAAIgFAAIgCAAg");
	this.shape_120.setTransform(212.5,372.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AhpAiQAJAIAOAFQAOAFAPADQAOADALACQAQAEATAEQAVADAQgFQAIgEAMgQQANgPALgVQALgSAFgSQAFgSgIgIQgPgQgUAAQgUAAgTAYQgMAQgFAHQgGAHgBACIgBABQAAAAgIgCQgKgCgOABQgOABgNAI");
	this.shape_121.setTransform(220.2,345.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#72461E").s().p("AAHBEIgjgIIgZgFQgPgDgOgFQgOgFgJgIIAwgnQANgIAOgBQAOgBAKACIAIACIABgBIAHgJIARgXQATgYAUAAQAUAAAPAQQAIAIgFASQgFASgLASQgLAVgNAPQgMAQgIAEQgKADgMAAIgPgBg");
	this.shape_122.setTransform(220.2,345.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AAyg6QgQgHgPAFQgPAFgLAKQgNAKgHAJQgIAJAAABQAAAAgFAJQgGAIgGANQgGANgDAMQgDAMAEAFQAAAAAHADQAGACAMACQAMABARgEQALgEAQgPQAQgQAMgUQAMgTACgSQACgRgPgJg");
	this.shape_123.setTransform(230.3,343.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#72461E").s().p("AgjA/QgMgCgGgCIgHgDQgEgFADgMQADgMAGgNIAMgVIAFgJIAIgKQAHgJANgKQALgKAPgFQAPgFAQAHQAPAJgCARQgCASgMATQgMAUgQAQQgQAPgLAEQgNADgKAAIgGAAg");
	this.shape_124.setTransform(230.3,343.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AAvg2QgPgHgOAFQgOAFgKAJQgMAKgHAIQgHAIAAABQgBAAgEAJQgFAHgGAMQgGAMgDALQgCALAEAFQAAAAAGADQAGACALABQALABAQgDQAKgEAPgOQAOgPAMgTQALgRACgQQACgRgOgIg");
	this.shape_125.setTransform(235.2,341.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#72461E").s().p("AggA6QgLgBgGgCIgGgDQgEgFACgLQADgLAGgMIALgTIAFgJIAHgJQAHgIAMgKQAKgJAOgFQAOgFAPAHQAOAIgCARQgCAQgLARQgMATgOAPQgPAOgKAEQgMADgKAAIgFgBg");
	this.shape_126.setTransform(235.2,341.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#895C13").ss(1.3,1,1).p("AhuiOQAAAAASAIQASAJAcAUQAbAVAbAjQAcAjAWAyQAVA1AHBJQABAAAEADQAEADAGgBQAGgCAEgMQABAAgBgUQgCgVgIgiQgIgigVgqQgUgogngsQglgsg/gog");
	this.shape_127.setTransform(239.1,360.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#BA811C").s().p("ABbClIgFgDQgHhJgVg1QgWgygcgjQgbgjgbgVQgcgUgSgJIgSgIIAXgYQA/AoAlAsQAnAsAUAoQAVAqAIAiQAIAiACAVIAAAUQgEAMgGACIgDAAQgEAAgDgCg");
	this.shape_128.setTransform(239.1,360.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#254C7A").ss(1.3,1,1).p("AEbpzQAAABgFAjQgFAjgIA8QgIA7gJBJQgJBKgIBNQgIBOgFBIQgFBFgBA4QgBA4AGAeQALAzAGAcQAGAcADANQACAMABADIAAACIm4FXQAAgBgJgiQgJgigOg7QgNg7gNhMQgNhMgJhWQgIhVAAhXQAAhVAOhQQAOhQAfhBQBFg/BIg1QBHg2BAgqQBBgrA0geQA0geAfgQQAegQAAgBg");
	this.shape_129.setTransform(225.1,416.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#426BA8").s().p("AjLJRQgJgigOg7QgNg7gNhMQgNhMgJhWQgIhVAAhXQAAhVAOhQQAOhQAfhBQBFg/BIg1QBHg2BAgqQBBgrA0geQA0geAfgQIAegRIgFAkIgNBfIgRCEIgRCXQgIBOgFBIQgFBFgBA4QgBA4AGAeIARBPIAJApIADAPIAAACIm4FXIgJgjg");
	this.shape_130.setTransform(225.1,416.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#315D93").s().p("AB2GkQgogYgggaQgggagSgTIgUgVIgCgBIgQgCIgngGIgwgHIgrgGIgYgDIBYAGQAvAEAsAJQAqAJAjAUQATABAKgGQAJgGADgHIACgIIgCgXIgFg+IgGhSIgFhXQgCgrAAgfIABhDIAChVIADhYIAChIIAAgnQAHAFgHgJIgSgbIgWgdIgKgOIARADIAnAHIAqAHIAXAEIgDAXIgIAyIgPBZQgEAfAAAvQAAAyAEA+QAEA+AHBBIAOCEIAPB5IANBfIAIA5QgogKgngXg");
	this.shape_131.setTransform(185.1,432.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#254C7A").ss(1.3,1,1).p("AAtmRIh6h0QAAAAADAiQACAhACA6QABA6gBBLQgBBKgHBSQgHBSgPBPQgPBSgaBIQgZBJgnA4ICyAYQAAABANANQAOAOAVAUQAYAVAeAVQAeAWAiARQAhASAiAGQAAAAgFggQgEgggHg1QgIg2gIhDQgIhDgIhIQgHhIgFhFQgFhCgBg3QgBg4AFgiQAJg7AGgiQAFgiADgQQADgRAAgEIABgFg");
	this.shape_132.setTransform(184.9,427.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#426BA8").s().p("ACLHuQgigRgegWQgegVgYgVQgVgUgOgOIgNgOIiygYQAng4AZhJQAahIAPhSQAPhPAHhSQAHhSABhKQABhLgBg6IgEhbIgDgiIB6B0IB+AVIgBAFIgDAVIgIAyIgPBdQgFAiABA4QABA3AFBCQAFBFAHBIQAIBIAIBDIAQB5IALBVIAFAgQgigGghgSg");
	this.shape_133.setTransform(184.9,427.1);

	this.instance_2 = new lib.Symbol79("synched",0);
	this.instance_2.setTransform(234,350.4);
	this.instance_2.alpha = 0.75;

	this.instance_3 = new lib.Symbol78("synched",0);
	this.instance_3.setTransform(187.5,350.4);
	this.instance_3.alpha = 0.77;

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#254C7A").ss(1.3,1,1).p("ACsjcIoqElQABABAOARQAPARAVAXQAVAXAVATQAUATANAEQANADAVAEQAUAEAVAEQAUAEAPADQAOADAAAAIIDlmQgBAAgOgBQgOgBgVgCQgWgCgYgDQgXgDgUgEQgUgEgLgFQgQgJgJgNQgJgOgEgKQgDgLAAgBg");
	this.shape_134.setTransform(215.2,367.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#214D82").s().p("AiSDaIgjgHIgpgIIgigHQgNgEgUgTQgVgTgVgXIgkgoIgPgSIIqklIADAMQAEAKAJAOQAJANAQAJQALAFAUAEQAUAEAXADIAuAFIAjADIAPABIoDFmIgOgDg");
	this.shape_135.setTransform(215.2,367.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#5B3516").s().p("AkVFbQgZgBgXgDQgYgDgNgDQASgIAagIQAZgIAYgKQAYgKAPgOIALgKQAEgFgBgHQgCgHgMgMQA1gCA2gVQA1gWA0gkQAxgkAwgtQAvgtAqgtQAqgwAhgtQgpAJgegLQgfgLgVgYQgWgYgPgfIA7hLIAog1IAQgUIClB8QggBOg3BJQg4BIhHA9QhHA/hOAwQhNAxhNAeIgCABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACgDQgHASgFAQQgFAQgHANQgHANgPALQgJAHgVACIgaABIgVgBg");
	this.shape_136.setTransform(254.2,305.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AAAABQAAgBAAAA");
	this.shape_137.setTransform(238.7,330.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AiWD1QBMgeBLgwQBPgwBIg/QBHg9A4hJQA4hJAghOIimh8QAAABgXAeQgXAegmAwQgmAxgtA4QgrA4gtA1QgsAzglAoQglAogVAPQgZAQgeANQgdAOgbAQQgbAQgRAZQgPAYgCAbQgDAaAMAWQAMAWAdALQASAGAWAAQAXgBAVgGQAVgGAOgJQAPgLAHgOQAHgOAFgQQAFgPAHgRQAAgBAAAAQABgBAAgCAiWD1QgBABAAAAQgCADAAgDQABgBACAAg");
	this.shape_138.setTransform(253.8,306.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#72461E").s().p("Ak7FcQgdgLgMgWQgMgWADgaQACgbAPgYQARgZAbgQQAbgQAdgOQAegNAZgQQAVgPAlgoQAlgoAsgzIBYhtIBThpIA9hOIAXgfICmB8QggBOg4BJQg4BJhHA9QhIA/hPAwQhLAwhMAeIAAgBIABgDIgBADIAAABIgDABQAAABAAAAQAAABABAAQAAAAAAAAQAAgBABgBIABgBQgHARgFAPQgFAQgHAOQgHAOgPALQgOAJgVAGQgVAGgXABIgDAAQgVAAgQgGg");
	this.shape_139.setTransform(253.8,306.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#5C0301").s().p("AmoQBQjOg5i0hqQi0hqiTiTQiTiShpi0Qhqi0g5jMQg5jOgBjfQAAiRAZiLQAZiKAviCQgHBJAABKQABDfA5DOQA5DOBqC0QBpCyCTCSQCTCTC0BqQC0BqDOA5QDNA5DeABQDSgBDCgzQDCgyCtheQCsheCQiEQCQiDBtigQBuiiBEi6QgTDNhEC7QhDC8htCkQhtCjiQCFQiQCFitBfQiuBfjDAzQjDAzjTABQjegBjNg5g");
	this.shape_140.setTransform(325.3,314.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#720300","#3F0202"],[0.29,1],0,132.9,0,-283.4).s().p("AmrYUQjPg5izhqQi1hpiSiTQiTiThqizQhpi0g6jPQg5jNAAjfQAAjeA5jNQA6jPBpizQBqi1CTiSQCSiTC1hqQCzhpDPg6QDNg5DeAAQDfAADNA5QDPA6C0BpQCzBqCTCTQCTCSBpC1QBrCzA4DPQA6DNAADeQAADfg6DNQg4DPhrC0QhpCziTCTQiTCTizBpQi0BqjPA5QjNA6jfAAQjeAAjNg6g");
	this.shape_141.setTransform(325.7,261.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#8E8E8E","#FFFFFF","#000000"],[0,0.522,1],-138.1,0,346.6,0).s().p("AnOaRQjeg9jChyQjDhzifieQieifhyjCQhyjDg+jeQg+jeAAjxQAAjwA+jeQA+jeByjCQByjDCeifQCfieDDhzQDChxDeg+QDeg+DwAAQDxAADeA+QDeA+DDBxQDCBzCfCeQCeCfBzDDQByDCA9DeQA+DeAADwQAADxg+DeQg9DehyDDQhzDCieCfQifCejCBzQjDByjeA9QjeA+jxAAQjwAAjeg+g");
	this.shape_142.setTransform(325.7,261.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#919191").s().p("AHGX9IKjiWIEODhIFnDhIhZAeIhpA8IhqAeIhaBLIgZAAIg9AAIhOAAIhLAAQgjAAgkAHQglAGggAJQgfAJgUAHIgUAHgA2pe/Ii0g8Igti0IIck7ILQBLIlLH+IkOgPImFAegAndWvQjdg/jDh2QjCh2ifijQifijhyjIQhyjJg9jlQg/jiAAj5QAAj5A/jlQA9jlByjIQByjICfikQCfijDCh1QDCh2DehAQDeg/DygBQDwABDdA/QDfBADCB2QDDB1CfCjQCeCkByDIQByDIA+DlQA9DlABD5QgBD5g9DiQg+DlhyDJQhyDIieCjQifCjjDB2QjCB2jfA/QjdBAjwAAQjyAAjehAg");
	this.shape_143.setTransform(324.1,288.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#8E8E8E","#FFFFFF","#000000"],[0,0.522,1],340.4,-54.4,-597,95.6).s().p("Egu2AD/IAAn9MBdtAAAIAAH9g");
	this.shape_144.setTransform(320,206.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#8E8E8E","#FFFFFF","#000000"],[0,0.522,1],340.4,-54.4,-597,95.6).s().p("Egu2AD+IAAn8MBdtAAAIAAH8g");
	this.shape_145.setTransform(320,353.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#919191").s().p("Egu2AD/IAAn9MBdtAAAIAAH9g");
	this.shape_146.setTransform(320,210.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#919191").s().p("Egu2AD/IAAn9MBdtAAAIAAH9g");
	this.shape_147.setTransform(320,359.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B5B5B5").s().p("Egu2AjJMAAAhGSMBdtAAAMAAABGSg");
	this.shape_148.setTransform(318.5,273.6);

	this.addChild(this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.instance_3,this.instance_2,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.instance_1,this.instance,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.5,48.6,601.5,450);


(lib.timer = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("30", "20px 'Arial'", "#8E5A20");
	this.text.lineHeight = 22;
	this.text.lineWidth = 60;

	// Layer 1
	this.meter = new lib.timermeter();
	this.meter.setTransform(36,22.5,1,1,0,0,0,36,18.5);
	this.meter.alpha = 0.762;

	this.addChild(this.meter,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,28);


(lib.shelf_2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Save!", "4px 'Comic Sans MS'", "#BF0030");
	this.text.textAlign = "center";
	this.text.lineHeight = 6;
	this.text.setTransform(253,70.9,1.016,1,0,-23.5,-22.6);

	this.text_1 = new cjs.Text("$", "8px 'Comic Sans MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 10;
	this.text_1.setTransform(237.9,64.8,1.022,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF4FD").s().p("AhaA7IC0h1IABAAIAAB1g");
	this.shape.setTransform(254,72.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFF5C5","#F9D500"],[0,1],0,-6.9,0,7.3).s().p("AiOA7IAAh1IEdAAIAAB1g");
	this.shape_1.setTransform(248.8,72.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AEMhQIoXCh");
	this.shape_2.setTransform(43.5,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AEMhQIoXCh");
	this.shape_3.setTransform(41.5,54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AE2h5IprDz");
	this.shape_4.setTransform(109.7,58.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AE2h5IprDz");
	this.shape_5.setTransform(108.6,58.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AC1h4IlpDw");
	this.shape_6.setTransform(182.6,58.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AC1h4IlpDw");
	this.shape_7.setTransform(181.7,58.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AB5h5IjxDz");
	this.shape_8.setTransform(242.1,58.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AB5h4IjxDy");
	this.shape_9.setTransform(241.5,58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#6D96BC").ss(0.4,1,1).p("ABBh6IiCD1");
	this.shape_10.setTransform(294,58.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("ABCh6IiCD1");
	this.shape_11.setTransform(293.4,58.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AlDh6IKHD1");
	this.shape_12.setTransform(555.1,58.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AlDh6IKHD1");
	this.shape_13.setTransform(554.1,58.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AjRh6IGjD1");
	this.shape_14.setTransform(491.3,58.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AjRh6IGjD1");
	this.shape_15.setTransform(490.5,58.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#6D96BC").ss(0.4,1,1).p("Ahrh6IDXD1");
	this.shape_16.setTransform(434.2,58.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("Ahrh6IDXD1");
	this.shape_17.setTransform(433.6,58.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#6D96BC").ss(0.4,1,1).p("Ag2h6IBuD1");
	this.shape_18.setTransform(387.1,58.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("Ag2h6IBuD1");
	this.shape_19.setTransform(386.7,58.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AAAB8IAAj2");
	this.shape_20.setTransform(339.2,58.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DEF1FF").ss(0.4,1,1).p("AAAB8IAAj2");
	this.shape_21.setTransform(338.9,58.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#AFD2EF").ss(1,1,1).p("EAusAAmMhdXAAAIAAhMMBdXAAAg");
	this.shape_22.setTransform(298.8,74.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#94B4D3").s().p("EgurAAmIAAhLMBdXAAAIAABLg");
	this.shape_23.setTransform(298.8,74.8);

	this.instance = new lib.Symbol121("synched",0);
	this.instance.setTransform(495.7,0);
	this.instance.alpha = 0.172;

	this.instance_1 = new lib.Symbol120("synched",0);
	this.instance_1.setTransform(43.1,2);
	this.instance_1.alpha = 0.172;

	this.instance_2 = new lib.Symbol119("synched",0);
	this.instance_2.setTransform(250.8,2);
	this.instance_2.alpha = 0.172;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AEC9E9").s().p("EgukADfIAAm9MBdJAAAIAAG9g");
	this.shape_24.setTransform(298.4,48.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#720300").s().p("EgumABHIAAiNMBdNAAAIAACNg");
	this.shape_25.setTransform(298.3,72.8);

	this.addChild(this.shape_25,this.shape_24,this.instance_2,this.instance_1,this.instance,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,599.7,81.7);


(lib.shelf_1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Save!", "4px 'Comic Sans MS'", "#BF0030");
	this.text.textAlign = "center";
	this.text.lineHeight = 6;
	this.text.setTransform(372.6,73.2,1.016,1,0,-23.5,-22.6);

	this.text_1 = new cjs.Text("$", "8px 'Comic Sans MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 10;
	this.text_1.setTransform(357.6,67,1.022,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF4FD").s().p("AhaA7IC0h1IABAAIAAB1g");
	this.shape.setTransform(373.6,75.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFF5C5","#F9D500"],[0,1],0,-6.9,0,7.3).s().p("AiOA7IAAh1IEcAAIAAB1g");
	this.shape_1.setTransform(368.4,75.1);

	this.text_2 = new cjs.Text("Save!", "4px 'Comic Sans MS'", "#BF0030");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 6;
	this.text_2.setTransform(230,73.6,1.016,1,0,-23.5,-22.6);

	this.text_3 = new cjs.Text("$", "8px 'Comic Sans MS'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 10;
	this.text_3.setTransform(214.9,67.5,1.022,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFF4FD").s().p("AhaA7IC0h1IABAAIAAB1g");
	this.shape_2.setTransform(231,75.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFF5C5","#F9D500"],[0,1],0,-6.9,0,7.3).s().p("AiOA7IAAh1IEdAAIAAB1g");
	this.shape_3.setTransform(225.8,75.6);

	this.instance = new lib.Symbol125("synched",0);
	this.instance.setTransform(487,5.8);
	this.instance.alpha = 0.172;

	this.instance_1 = new lib.Symbol124("synched",0);
	this.instance_1.setTransform(13,0.5);
	this.instance_1.alpha = 0.172;

	this.instance_2 = new lib.Symbol123("synched",0);
	this.instance_2.setTransform(256.7,0);
	this.instance_2.alpha = 0.172;

	this.instance_3 = new lib.Symbol122("synched",0);
	this.instance_3.setTransform(202.9,2.2);
	this.instance_3.alpha = 0.172;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AEMhQIoXCh");
	this.shape_4.setTransform(43.5,56.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AEMhQIoXCh");
	this.shape_5.setTransform(41.5,56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AE2h5IprDz");
	this.shape_6.setTransform(109.7,60.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AE2h5IprDz");
	this.shape_7.setTransform(108.6,60.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AC1h4IlpDw");
	this.shape_8.setTransform(182.6,60.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AC1h4IlpDw");
	this.shape_9.setTransform(181.7,60.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AB5h4IjxDx");
	this.shape_10.setTransform(242.1,60.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AB5h5IjxDz");
	this.shape_11.setTransform(241.5,60.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#6D96BC").ss(0.4,1,1).p("ABBh6IiCD1");
	this.shape_12.setTransform(294,60.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("ABCh6IiCD1");
	this.shape_13.setTransform(293.4,60.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AlDh6IKHD1");
	this.shape_14.setTransform(555.1,60.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AlDh6IKHD1");
	this.shape_15.setTransform(554.1,60.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AjRh6IGjD1");
	this.shape_16.setTransform(491.3,60.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("AjRh6IGjD1");
	this.shape_17.setTransform(490.5,60.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#6D96BC").ss(0.4,1,1).p("Ahrh6IDXD1");
	this.shape_18.setTransform(434.2,60.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("Ahrh6IDXD1");
	this.shape_19.setTransform(433.6,60.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#6D96BC").ss(0.4,1,1).p("Ag2h6IBuD1");
	this.shape_20.setTransform(387.1,60.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E3ECFB").ss(0.4,1,1).p("Ag2h6IBuD1");
	this.shape_21.setTransform(386.7,60.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#6D96BC").ss(0.4,1,1).p("AAAB7IAAj1");
	this.shape_22.setTransform(339.2,60.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DEF1FF").ss(0.4,1,1).p("AAAB7IAAj1");
	this.shape_23.setTransform(338.9,60.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AEC9E9").s().p("EgupADfIAAm9MBdTAAAIAAG9g");
	this.shape_24.setTransform(298.9,50.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#AFD2EF").ss(1,1,1).p("EAusAAmMhdXAAAIAAhMMBdXAAAg");
	this.shape_25.setTransform(298.8,77.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#94B4D3").s().p("EgurAAmIAAhLMBdXAAAIAABLg");
	this.shape_26.setTransform(298.8,77.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#720300").s().p("EgurABIIAAiPMBdXAAAIAACPg");
	this.shape_27.setTransform(298.8,75);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_3,this.shape_2,this.text_3,this.text_2,this.shape_1,this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,599.7,84.4);


(lib.cover = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Handandlist("synched",0);
	this.instance.setTransform(301.8,238.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C69422").s().p("AjFGfQhugOh6glIAgAFQAfAFA3AGQA3AHBHAFQBGAGBPABQBNABBPgGQBOgGBIgRQBHgQA5geIACgmIAChlQABhAgChPQgDhNgHhUQgIhVgPhPQgPhPgZhAIAOAgQAMAhASA/QASBAAQBcQAPBdAGB2QAGB5gKCSIgeANQgdAMg2AQQg3ARhMANQhNAOhfADIgmABQhOAAhYgLg");
	this.shape.setTransform(335,316.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A200C").s().p("AgkAUQAIgLANgMQAOgOANgJQAQgIARAFIgJACQgHACgLAIQgMAHgIANIAHABQAJABAIAGQAIAGgBANIgHgHQgGgGgQgBQgPAAgdAQIAIgMg");
	this.shape_1.setTransform(383.9,212.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A200C").s().p("AAKAIQgLgGgKADQgLACgHAFIgGAEQAAgKAGgGQAFgEAGgDIAHgDIgWgVQAaADAMALQAPALAGAJQAHAMACAIIABAJQgNgSgNgGg");
	this.shape_2.setTransform(253.9,216.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.3,1,1).p("ABmgQQgHAOgNAQQgNASgSAOQgSANgWAAQgfgCgXgLQgWgLgPgOQgOgNgHgIQgHgKABgBQAAAAAMgJQANgIAVgKQAWgKAcgGQAagGAfAFQAfAEAgAVQAAAAgHAOg");
	this.shape_3.setTransform(326.5,244.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF0014").s().p("AALA7QgfgCgXgLQgWgLgPgOQgOgNgHgIIgGgLIAMgJQANgIAVgKQAWgLAcgFQAagGAfAFQAfAEAgAVIgHAOQgHAOgNAQQgNASgSAOQgRANgWAAIgBAAg");
	this.shape_4.setTransform(326.5,244.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5B3516").s().p("AgKARQgQgEgFgIQgGgHABgHIAAgIQAEAOAMAFQALAHAMACQAOADAKAAIAKAAQgVAEgPAAIgLgBg");
	this.shape_5.setTransform(344.1,228.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B3516").s().p("AgQAVQgLgGgHgHIgHgGQAXAFAQgDQAOgEAKgFQALgIAEgGIAFgHQgFAcgKAMQgKAMgMABQgKAAgLgGgAAqgaIAAAAIAAAAg");
	this.shape_6.setTransform(305.8,229.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.3,1,1).p("ABHBUQgZAUgggBQgegEgcgSQgcgTgWgbQgWgagQgYQgPgagIgRQgJgRAAgBQABABAQAIQAQAJAbAKQAbALAiAHQAiAHAhgCQAigDAXgGQAXgHATgQQATgPAXgeQAAABgGAWQgFAVgLAfQgLAegSAfQgSAfgZATg");
	this.shape_7.setTransform(325.2,239.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOBnQgegEgcgSQgcgTgWgbQgWgagQgYQgPgagIgRIgJgSIARAJQAQAJAbAKQAbALAiAHQAiAHAhgCQAigDAXgGQAXgHATgQQATgPAXgeIgGAXQgFAVgLAfQgLAegSAfQgSAfgZATQgXATgdAAIgFAAg");
	this.shape_8.setTransform(325.2,239.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A0B0B").s().p("Ag6CWQANgKATgRQATgQARgVQATgUAOgWQAOgVACgTQACgXgOgZQgOgYgUgVQgSgVgPgNIgRgOIgEgDIAJgTIAEAGQADAFgBAEIAYAVQAOAOASAUQASAVAMAYQAMAYAAAWIAAADQgDAVgPAWQgOAVgVAUQgTATgUAQQgUAQgOAJIgRALIANgKg");
	this.shape_9.setTransform(332.8,215.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B3516").s().p("Ag3BLQgIgKgKgSQgJgSgEgaQgEgYAJgiIAOAEQAPAEAWAEQAWAEAWgBQAYgBAUgKQAUgKAKgWIABAKQAAALgKAVQgKAVgdAeQgeAgg4AqIgJgJg");
	this.shape_10.setTransform(330.3,222.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A0B0B").s().p("AgLAMQgLgGgGgGIgHgEIAJgJIAKAIQAIAGANAFQAOAFARgFIgKADIgUAFIgGAAQgGAAgFgCg");
	this.shape_11.setTransform(348.1,212.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A0B0B").s().p("AgmAWIAHAAQAGAAAKgDQAJgCAHgFQAJgGAGgGQAGgIADgGIADgHIALAFIgIAMQgIAJgSAKQgMAHgWAAIgJAAg");
	this.shape_12.setTransform(310,212);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1.3,1,1).p("ABLgFIhpBGQgBAAgLgHQgKgHgLgKQgLgLAAgLQABgLAQgNQAQgPAZgPQAWgPAdgOQAAABAKAJQAJAIAJANQAKAOACAOg");
	this.shape_13.setTransform(296.9,175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#490F0E").s().p("AgpA5QgLgGgLgLQgKgKAAgLQABgLAQgNQAPgPAZgPQAXgPAbgNIAKAJQAKAIAJANQAKAOACANIhoBGIgMgHg");
	this.shape_14.setTransform(296.9,175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1.3,1,1).p("AA3AEQgFgJgOgMQgOgMgQgLQgOgKgMgHQgMgHgBAAQAAABgHALQgHALgGARQgFARADASQAAAAAMADQALADAQAHQAQAGAOALQAQAKAJAOQAAAAAGgJQAGgJAEgOQAFgOgFgPg");
	this.shape_15.setTransform(348.3,177.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#490F0E").s().p("AAOApQgOgLgQgGQgQgIgLgCIgMgEQgDgRAFgRQAGgSAHgLIAHgLIANAHIAaARQAQALAOAMQAOAMAFAJQAFAPgFAOQgEAOgGAIIgGAKQgJgPgQgJg");
	this.shape_16.setTransform(348.3,177.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAPQgGgHAAgIQABgJAHgHQAFgGAHAAQAJABAEAHQAGAHAAAIQgBAJgGAHQgGAGgHAAQgIgBgFgHg");
	this.shape_17.setTransform(348.2,208.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAPQgGgHAAgIQABgJAHgHQAFgGAHAAQAJABAFAHQAFAHAAAIQgBAJgGAHQgGAGgHAAQgIgBgFgHg");
	this.shape_18.setTransform(310.4,208.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4EBE4").s().p("AgmCBIgNgCQAbgNASggQAQgfADgrQABgfgIgcQgHgcgQgTQgRgTgVgGQAOgGAQAAQAZACASASQATATAKAeQALAegCAiQgCAkgNAdQgOAdgVAQQgSAQgYAAIgCgBg");
	this.shape_19.setTransform(311.3,198.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ABfAFQgCAmgOAeQgPAegWARQgXARgZgBQgbgCgUgTQgVgUgLgfQgLggABgkQADgmAOgeQAPgeAWgRQAXgRAZABQAaACAVATQAVAUALAfQALAggCAkg");
	this.shape_20.setTransform(308,198.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGCIQgbgCgUgTQgVgUgLgfQgLggABgkQADgmAOgeQAPgeAWgRQAXgRAZABQAaACAVATQAVAUALAfQALAggCAkQgCAmgOAeQgPAegWARQgWAQgXAAIgDAAg");
	this.shape_21.setTransform(308,198.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4EBE4").s().p("AgjB6IgLgCQATgEAQgQQAOgQAKgZQAKgaACgfQACgdgIgaQgHgagMgSQgOgRgTgGIALgBQAVACAPARQARARAIAcQAJAdgBAgQgCAigMAbQgMAbgSAPQgPAPgUAAIgDAAg");
	this.shape_22.setTransform(351.3,199.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ABLg7QAKAdgCAiQgCAkgNAcQgMAdgUAQQgUAQgVgBQgYgBgSgTQgRgSgKgdQgKgeACgiQACgkANgcQAMgcAUgQQAUgRAVABQAYACASASQARASAKAeg");
	this.shape_23.setTransform(348.3,199.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFCAQgYgBgSgTQgRgSgKgdQgKgeACgiQACgkANgcQAMgcAUgQQAUgRAVABQAYACASASQARASAKAeQAKAdgCAiQgCAkgNAcQgMAdgUAQQgTAPgVAAIgBAAg");
	this.shape_24.setTransform(348.3,199.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5B3516").s().p("AE5HKIhPgFQg8gGgxgNQgxgNgugWQgrgWgxgeQglgYgXgiQgWgjgLgiQgLgigDgXIgDgYIgMgCQgGAOgQAJQgPAJgVACQgWADgYgGQgVgEgUgMQgTgMgMgUQgMgUABgcQAjhIArAAQAUAAARAIQARAKAOANQANAOAIALIAIALIAKARIACggQAAgNgDgHQgEgHgEgEQAPgMACgQQAAgPgGgOQgGgNgGgIQAKgGAEgHQADgIABgGQAAgKgDgIIgFgNQAjgbABgaQAAgRgJgKQgIgLgKgFQAhgWAMgYQAMgYABgVQAAgSgCgNQgDgOgDgHQAQgGAHgJQAGgIAAgIQAAgKgFgKQgFgJgFgGQASgIAHgLQAHgLAAgJIAAgBQADACgEAjIgNBdQgHA6gHBIQgHBJAABNQgBBMAJBKQAKBJAYA9QAbA7AwAmQAyAlBAAYQA/AXBDAPIB/AfQgcgCgfgBg");
	this.shape_25.setTransform(280.6,208.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AHAm8QgRgJgMgRQgLgSAAgdQAAABgMAHQgMAIgUAIQgUAIgYACQgYACgXgKQgXgKgTgdQAAAAgLAIQgKAHgRAEQgRAFgTgHQgTgIgSgcQAAABgMAFQgMAFgPgBQgOgBgIgQQAAAAgFAIQgFAIgJAJQgJAKgOAFQgNAFgPgFQgRgFgUgUQAAAAgIAFQgIAEgLAEQgLAEgKgCQgJgCgFgMQABACgBAFQgCAHgHAHQgHAGgSAAQgBAAgIAGQgJAGgNAFQgMAFgMgEQgNgEgHgSQAAAAgHAIQgGAIgMAHQgMAHgPAAQgPAAgQgNQABAAABAEQADAFgBAIQgBAIgJAJQgIAJgWAIQgeALgRAAQgRAAgIgDQgGgDgBAAQAAAAgBAGQgCAHgFAHQgFAHgLABQgLAAgUgLQABABAAAJQABAKgIALQgHALgWAGQAAAAAHAIQAGAHAEALQAFALgGALQgFALgXAGQABABAEAPQAFAPAAAXQAAAXgOAYQgNAZgkAVQAAAAAHAEQAHADAIAIQAHAIADALQADAMgIAPQgIAPgYATQABAAAEALQAFALgCAOQgBANgTAIQABAAAGAJQAGAHAFANQAFAOgDANQgDAOgRALIAEACQAEACAEAHQADAGAAAMQAAAMgBADQAAgCAAAAQAAgBgIgLQgIgLgNgOQgOgOgSgLQgTgLgVABQgUAAgWASQgWASgVAqQgBAjAQAXQARAYAbAMQAbANAdABQAdABAXgKQAXgJAJgVQAAAAACAQQACAPAGAaQAGAZAMAcQAMAdAVAbQAVAbAfAUQAzAfAvAWQAuAWAxANQAwAOA8AFQA8AEA0ACQAzACAjAKQAjAKAKAaQAAAAAPgMQAQgLAdgQQAegQAqgMQAVgGAjgJQAjgJApgOQApgOAogWQAogVAhggQAhgfASgrQARgrgDg5QAAAAASAAQASgBAbgEQAagEAbgKQAbgKATgSQATgRADgcQADgcgVgoQgPgagWgDQgVgBgXAKQgXALgUARQgUARgMAOQgMANgBABQAAgBgIgMQgIgNgHgUQgGgVAEgWQAFgXAXgXQAAAAgFgJQgFgKgDgRQgEgQAEgWQADgVARgYQgBAAgJgFQgJgFgJgJQgJgKgBgPQgBgPAOgVQgBAAgLgJQgMgKgOgRQgNgSgIgaQgHgaAHgiQAAAAgGgDQgFgEgDgIQgDgJAHgOQgBAAgNgCQgMgDgRgJg");
	this.shape_26.setTransform(318.9,203.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#72461E").s().p("AAyIJQgjgKgzgCQg0gCg8gEQg8gFgwgOQgxgNgugWQgvgWgzgfQgfgUgVgbQgVgbgMgdQgMgcgGgZQgGgagCgPIgCgQQgJAVgXAJQgXAKgdgBQgdgBgbgNQgbgMgRgYQgQgXABgjQAVgqAWgSQAWgSAUAAQAVgBATALQASALAOAOQANAOAIALIAIAMIAAACIABgPQAAgMgDgGQgEgHgEgCIgEgCQARgLADgOQADgNgFgOQgFgNgGgHIgHgJQATgIABgNQACgOgFgLIgFgLQAYgTAIgPQAIgPgDgMQgDgLgHgIQgIgIgHgDIgHgEQAkgVANgZQAOgYAAgXQAAgXgFgPQgEgPgBgBQAXgGAFgLQAGgLgFgLQgEgLgGgHIgHgIQAWgGAHgLQAIgLgBgKIgBgKQAUALALAAQALgBAFgHQAFgHACgHIABgGIAHADQAIADARAAQARAAAegLQAWgIAIgJQAJgJABgIQABgIgDgFIgCgEQAQANAPAAQAPAAAMgHQAMgHAGgIIAHgIQAHASANAEQAMAEAMgFQANgFAJgGIAJgGQASAAAHgGQAHgHACgHIAAgGQAFALAJACQAKACALgEQALgEAIgEIAIgFQAUAUARAFQAPAFANgFQAOgFAJgKQAJgJAFgIIAFgIQAIAQAOABQAPABAMgFIAMgGQASAcATAIQATAHARgFQARgEAKgHIALgIQATAdAXAKQAXAKAYgCQAYgCAUgIQAUgIAMgIIAMgIQAAAdALASQAMARARAJQARAJAMADIAOACQgHAOADAJQADAIAFAEIAGADQgHAiAHAaQAIAaANASQAOARAMAKIAMAJQgOAVABAPQABAPAJAKQAJAJAJAFIAKAFQgRAYgDAVQgEAWAEAQQADARAFAKIAFAJQgXAXgFAXQgEAWAGAVQAHAUAIANIAIANIANgOQAMgOAUgRQAUgRAXgLQAXgKAVABQAWADAPAaQAVAogDAcQgDAcgTARQgTASgbAKQgbAKgaAEQgbAEgSABIgSAAQADA5gRArQgSArghAfQghAggoAVQgoAWgpAOQgpAOgjAJIg4APQgqAMgeAQQgdAQgQALIgPAMQgKgagjgKg");
	this.shape_27.setTransform(318.9,203.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A0B0B").s().p("AgWIPQgsgCgkgLQgkgLgZgNQgagNgOgKIgOgLIgBAAIgBgBIgFgDIgMgJQgGgHgEgJQgGgTALgYIADgGIgGgDIgNgGQgLgGgNgLQgNgLgGgRQgHgZAWgcIAEgFIgFgEIgPgNQgNgMgOgVQgNgUgEgbQgFgrAhgnIAEgFIgFgEIgPgNQgNgMgOgWQgOgVgEgbQgGgyApgwIADgDIgDgEIgHgPQgGgPgEgVQgEgWAHgXQAMghApgRIAFgDIgCgFIgDgLQgCgJACgOQABgNALgOQAKgOAYgKIAEgCIAAgEIACgNQACgLAHgLQAHgKAPAAQAVAAAPgMQAPgNAIgRQAJgRAAgOQABgHAGgMQAHgMANgNQgBAnAMAjQAMAjAaAZQAbAZAqAIQgbARgaAMQgaANgSARQgSARgCAeQgIAZAFAZQAGAZAUAQQAVAQAlgEQgYAJgaAQQgaAQgUAVQgVAVgIAYQgHAYAMAWQALAYAXAKQAWALAegCQAdgCAfgNQgTAMgMATQgLATgDAUQgDAVAHAQQAHAQAQAFQAkAUAgACQAiABAggNQAggNAggXQgmAjgOAsQgNAsAHAvQALAZATAFQAUAFAXgFIAygLQgXAJgGAQQgGAQAHASQAGASANAPQAOAPAOAGQAgAJAigCQAhgCAhgGIgLAIQgFAEgFgFQADAxAUAhQhvAGhoACIhUACQg4AAgvgDg");
	this.shape_28.setTransform(271.8,164.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1.3,1,1).p("AgHADQAHgCAIgBQgEgDgEACQgCABgFADg");
	this.shape_29.setTransform(310.5,207.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1.3,1,1).p("AgGADQAGgDAHgC");
	this.shape_30.setTransform(270.6,167.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#682525").s().p("AG2JlIAIgOQAEgGAGgEQAMgIACgJQAAgGgCgEIgDgEIgHgIIAKgDQAhgIAMgXQAIgPAAgQQAAgQgDgLIgDgMIgCgFIAGgCQAkgOAIgZQAFgQgDgPQgEgPgFgKIgFgKIgDgFIAFgEIAIgHQAIgHAIgMQAIgMABgRQABgZgGgKQgGgLgBAAIgGgFIAHgEIAIgIQAHgIAEgQQAFgRgGgaQgGgagJgMQgKgMgHgDQgIgEgBABIgGgBIABgGIABgNQAAgMgCgRQgCgRgJgRQgNgTgKgGIgLgFIgHAAIABgHIACgRQACgQABgXQABgYgEgYQgEgYgKgRQgNgUgPgCQgKAAgHAFIgHAGIgIAKIgGgZQgDgNgLgYQgEgKgDgCIgEgCIgEABIgCAEIgMgEIAAgOQAAgMgGgQQgHgQgRgMQgTgMgOAAQgPgBgKAEIgKAFIgJAGIAAgLQAAgJgDgOQgCgNgGgMQgHgMgLgCQgXgEgOACIgOADIgHACIgBgHIgDgRQgEgPgIgTQgJgTgOgLQgLgHgMADQgMADgLAIQgMAHgHAHIgHAHIgJAJIgCgMIgCgKQgDgIgGgKQgFgKgLgFQgJgDgLACQgLACgJAFQgKAEgFADIgJAGIAAgLQAAgCgDgMQgEgMgOgNQgOgMgfgFQgZgCgVAHQgWAHgPAKQgQAKgJAJIgKAJIgHAIIgDgLIgFgIQgEgHgMgIQgMgHgWgCQgUgBgLALQgHAIgCAJIgBAKIgMACIgDgEQgCgFgGgEQgFgEgKgBQgLAAgKAGQgJAGgGAGIgGAGIgGAHIgEgHIgJgLQgJgKgSgJQgRgJgbAAQgTABgOAIQgOAIgIALQgJALgEAJIgEAKIgBAEIgFAAIgEAAQAHgRAPgSQAQgSAdgMQAcgMAuABIAEABIACgFIAEgKQAEgIAIgLQAJgLANgJQAOgIAUgBQAbABARAJQARAJAJAJIAJALIAFAIIAFgHIAGgHQAGgGAKgGQAJgFALAAQAKAAAGAFQAFAEADAEIACAFIAMgCIACgKQABgJAIgJQAKgKAVABQAWACALAHQAMAHAFAIIAEAIIAEAKIAHgIIAJgJQAJgIAQgLQAQgKAVgHQATgHAZADQAfAEAOANQAOANAEAMQADAMAAABIAAALIAJgFQAGgEAKgEQAKgEALgCQAMgCAJADQAKAEAGAKQAGAKACAJIACAJIACANIAJgKIAIgHQAHgGALgIQALgHANgDQAMgDAKAGQAPAMAIASQAJATADAQIAEAQIABAHIAHgCIAOgCQANgCAXADQAMADAGALQAGAMACAOQADAOAAAIIAAALIAKgGIAKgFQAJgDAPAAQAPABASALQASANAGAQQAGAQABAMIAAANIALAEIADgDIADgCQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQADADAEAJQALAZAEAMIAGAZIAIgJIAHgGQAGgFAKAAQAPABANAUQALASAEAYQADAYgBAXQAAAYgCAQIgDARIgBAGIAHABQABgBAKAGQAKAFANAWQAJAQACARQADASgBAMIgBAKIgBAHIAHAAQABAAAHADQAIADAJAMQAJAMAHAaQAFAbgEAQQgFAQgHAIIgIAIIgGAFIAGAFQABAAAFAKQAGALAAAYQgCARgIANQgIAMgHAHIgJAHIgFADIADAFIAGALQAFAJADAPQADAPgEAQQgJAagkANIgFACIACAGIADAMQACAKAAAQQAAAQgHAPQgNAYggAIIgKACIAHAIIACAEQADAEgBAGQgBAKgNAHQgFAEgEAGIgJAPQgHAPgOARQgNASgdAPQgdAPgzAIIAHgNgArXlmIgFgBIAAgCQABgGAGgMQAHgMANgNQgIAQgDALIgDANIgBAHg");
	this.shape_31.setTransform(329.7,152.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1.3,1,1).p("AMigKQABAAAIADQAJADALALQALANAHAcQAGAegGASQgFASgIAIQgHAIgBAAIAEAFQAEAFADALQAEALgBASQgCATgIAOQgJANgIAHQgJAIAAAAQAAAAAHANQAGANACASQADATgLATQgKATggANQAAAAADAOQAEANgCAUQgBATgMARQgNARgfAJQABAAADAGQAEAGgCAJQgCAKgOAKQgJAGgGAPQgHAOgOASQgOASgcAQQgdAQgzAJQg0AIhSgDQg6gDhUACQhUADhjAEQhiAFhoAFQhnAFhiACQhhAChQgDQgugDgkgLQglgLgagNQgagOgOgKQgOgKAAgBQgBAAgHgEQgHgFgIgKQgIgJgCgPQgCgQAKgVQAAAAgKgEQgKgFgMgJQgMgJgJgOQgJgOABgSQABgSAQgXQAAAAgLgJQgLgKgNgRQgNgRgIgXQgJgXAFgbQAEgcAZgdQgBAAgLgLQgMgKgOgSQgNgTgIgZQgIgaAGgeQAGgfAcghQgBAAgHgSQgIgRgDgaQgDgZANgaQAMgZAngSQgBAAgCgKQgDgKACgPQABgPALgQQALgPAbgLQAAgBABgIQABgIAEgKQAEgKAIgIQAIgHAOAAQASAAAOgLQAOgMAHgPQAIgQAAgNQABgKAKgQQAKgQATgPQATgPAcgHQAbgIAjAIQAAgBADgLQADgMAIgQQAJgRARgQQARgQAcgLQAcgKAqACQAAAAAEgJQAEgKAJgMQAJgMAPgJQAPgJAWgBQAdAAATAKQASAKAJALQAKAKgBABQABgBAGgGQAHgHAKgHQALgGAMAAQANABAHAGQAHAFADAFQACAEAAACQAAgCACgKQACgLAKgKQAKgLAYABQAZACALAIQANAJAFAIQAFAIgBABQAAgBAKgIQAJgJAQgLQARgLAWgHQAXgHAaACQAaAEAPAJQAOAKAHALQAGALACAJQACAIgBAAQABAAAKgFQAKgFAPgEQAOgDANAEQAMAFAHALQAGALADAKQADAJAAABQAAAAAIgIQAHgHANgIQAMgIAOgDQAOgDAMAIQAMAJAIAOQAIAOAEAOQAFAOACAKQACAKAAAAQAAAAAOgDQAPgCAZAEQAMACAHALQAHAKADANQADANABAJQAAAJAAABQABgBAKgEQAKgEARAAQAQAAAVANQATAOAHARQAHASAAANQAAAMAAACQAAgBAEgEQAEgEAGABQAHACAHAQQALAZAEANQADALAAABQABgBAFgEQAFgEAJgDQAIgCALAEQALAFAMARQALASAEAZQADAZAAAYQgBAZgCAQQgCAQAAABQAAgBAGACQAFACAJAHQAJAIAKARQAJARADASQACATgBAMQAAANgBAAg");
	this.shape_32.setTransform(318.4,153.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#490F0E").s().p("AnoKEQgugDgkgLQglgLgagNQgagOgOgKIgOgLIgIgEQgHgFgIgKQgIgJgCgPQgCgQAKgVIgKgEQgKgFgMgJQgMgJgJgOQgJgOABgSQABgSAQgXIgLgJQgLgKgNgRQgNgRgIgXQgJgXAFgbQAEgcAZgdIgMgLQgMgKgOgSQgNgTgIgZQgIgaAGgeQAGgfAcghIgIgSQgIgRgDgaQgDgZANgaQAMgZAngSIgDgKQgDgKACgPQABgPALgQQALgPAbgLIABgJIAFgSQAEgKAIgIQAIgHAOAAQASAAAOgLQAOgMAHgPQAIgQAAgNQABgKAKgQQAKgQATgPQATgPAcgHQAbgIAjAIIADgMQADgMAIgQQAJgRARgQQARgQAcgLQAcgKAqACIAEgJQAEgKAJgMQAJgMAPgJQAPgJAWgBQAdAAATAKQASAKAJALQAKAKgBABIAHgHQAHgHAKgHQALgGAMAAQANABAHAGQAHAFADAFIACAGIACgMQACgLAKgKQAKgLAYABQAZACALAIQANAJAFAIIAEAJIAAAAIAAAAIAKgJQAJgJAQgLQARgLAWgHQAXgHAaACQAaAEAPAJQAOAKAHALQAGALACAJIABAIIALgFQAKgFAPgEQAOgDANAEQAMAFAHALQAGALADAKIADAKIAIgIQAHgHANgIQAMgIAOgDQAOgDAMAIQAMAJAIAOQAIAOAEAOIAHAYIACAKIAOgDQAPgCAZAEQAMACAHALQAHAKADANIAEAWIAAAKIALgFQAKgEARAAQAQAAAVANQATAOAHARQAHASAAANIAAAOIAEgFQAEgEAGABQAHACAHAQQALAZAEANIADAMIAGgFQAFgEAJgDQAIgCALAEQALAFAMARQALASAEAZQADAZAAAYQgBAZgCAQIgCARIAGABQAFACAJAHQAJAIAKARQAJARADASQACATgBAMIgBANIAJADQAJADALALQALANAHAcQAGAegGASQgFASgIAIIgIAIIAEAFQAEAFADALQAEALgBASQgCATgIAOQgJANgIAHIgJAIIAHANQAGANACASQADATgLATQgKATggANIADAOQAEANgCAUQgBATgMARQgNARgfAJIAEAGQAEAGgCAJQgCAKgOAKQgJAGgGAPQgHAOgOASQgOASgcAQQgdAQgzAJQg0AIhSgDQg6gDhUACIi3AHIjKAKQhnAFhiACIhEABQg6AAgzgCg");
	this.shape_33.setTransform(318.4,153.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#725107").ss(1.3,1,1).p("ABpiLQgwgYgrgEQgpgEgiAHQghAHgTAJQgUAIAAABQgBAAgKATQgKASgLAkQgLAjgDAwQgDAyAOA/ICyhXICVB+QAAgBAGgZQAHgZAFgnQAFgngDgpQgCgrgRglQgRglgmgVg");
	this.shape_34.setTransform(328.4,255.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AF800B").s().p("AAKArIiyBXQgOg/ADgyQADgwALgjQALgkAKgSQAKgTABAAQAAgBAUgIQATgJAhgHQAigHApAEQArAEAwAYQAmAVARAlQARAlACArQADApgFAnQgFAngHAZIgGAag");
	this.shape_35.setTransform(328.4,255.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#365B0A").s().p("AgagOIA1ATIgHAKg");
	this.shape_36.setTransform(320.8,368.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#725107").s().p("AAAAGIgSguIgIgVIAMAVQAKASALAZQANAcAHAcIgNADQgGgcgIgcg");
	this.shape_37.setTransform(370.7,280.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#725107").s().p("AggBFQAUg3ANgdQAOgfAJgNIAJgNIgNAhQgOAigaBOg");
	this.shape_38.setTransform(289.8,281.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#37560F").s().p("AANAUQgWgCgRgKQgSgIgKgJIgKgKIAKAHQAKAHASAFQARAIAUAAQAVABAQgBIARgBQgaANgWAAIgEAAg");
	this.shape_39.setTransform(348.5,417.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#37560F").s().p("AAEAUQgYgCgQgKQgQgIgHgJIgIgLIAKAHQAKAGAOAHQAOAFAOADQALADARAAIAfgBIAOgBQghAMgYAAIgHgBg");
	this.shape_40.setTransform(296.1,414.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A37308").s().p("AnHDNQgYgTgJgRQgIgQgBgFQABgHAMgdQAMgeAbgrQAbgpAwgvQAwgvBJgqQBJgpBngaQBmgbCLgBQBMgBA6ALQA6AKAvAWQAwAVArAhQgeAigbAcQgbAcgfAUQgfATgoAIIAAAAIgCAcIgEAoIgEAkIgCAQIgMgJIgdgVQgRgNgQgOIgggdIgcgaQgkgBgkgEQgaAKgeAOQgXAMgTANIghAXIgOAJQgJgVgFgdQgEgdgCgaQgrgkgagPQgbgPgSAAQgRABgRAJIgnAWQgXgEgUARQgTARgRAbQgRAegPAhQgPAhgPAcQgHAPAAAUQAAATAGAUQAGAUALAPQgwgMgYgSg");
	this.shape_41.setTransform(315.8,263.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C69422").s().p("AAqhLQiRhmjLgbIAqgBQBlAABQAZQBQAXA8ApQA9AnAtAuQAtAtAeAsQAeAtARAhQARAiAFAOQgNANgPAJQhaiziThmg");
	this.shape_42.setTransform(359.2,261.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A37308").s().p("Ag8GKQgmgRgKgFIAAgXQABg0AIg9QAIg9ANg+QAMg/ANg3IAahoIAThIIAIgdIAAgIIgGAAIgNAAQATg7Acg1QAfg2AygtQgPBRgXBYQgXBXgUBaQgVBXgJBZQgKBaAJBUQAGBVAlBOQg9gUgngQg");
	this.shape_43.setTransform(287.8,310.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#725107").ss(1.3,1,1).p("ADXpBQBNAWA9AkQA9AkAuArQAuAsAhArQAgAsAUAkQAUAkAJAWQAKAXAAAAQgfAgghANQghAMgcABQgdAAgSgEQgSgEAAgBQAVA5AMBGQANBEAHBKQAGBLADBFQACBGgBA4QAAA4gBAgQgCAhAAABQiRAyiEASQiDARhwgFQhygFhcgSQhcgThCgWQhCgWgjgQQgjgQAAgBQgBg0AHg/QAHg/ANhCQAMhCAOg9QAOg+ANgvQANgxAIgcQAIgdAAgBQhKABgsgPQgrgOgWgVQgVgUgHgQQgGgQABgBQgBgBAKgbQAKgcAZgsQAagrAvgyQAvgxBKgsQBKgsBsgcQBrgdCPgCQBgAABNAWg");
	this.shape_44.setTransform(328.4,299.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#AF800B").s().p("AgUJWQhygFhcgSQhcgThCgWQhCgWgjgQIgjgRQgBg0AHg/QAHg/ANhCQAMhCAOg9QAOg+ANgvIAVhNIAIgeQhKABgsgPQgrgOgWgVQgVgUgHgQQgGgQABgBQgBgBAKgbQAKgcAZgsQAagrAvgyQAvgxBKgsQBKgsBsgcQBrgdCPgCQBgAABNAWQBNAWA9AkQA9AkAuArQAuAsAhArQAgAsAUAkQAUAkAJAWIAKAXQgfAgghANQghAMgcABQgdAAgSgEIgSgFQAVA5AMBGQANBEAHBKQAGBLADBFQACBGgBA4IgBBYIgCAiQiRAyiEASQhmAOhcAAIgxgCg");
	this.shape_45.setTransform(328.4,299.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#53821C").s().p("AmAGAIACgmIAAgOIgFgCQgFgCgKgKQgJgKgLgWQgKgWAEgJQAFgJAIgCIAJgBQgTgzgHhBQgHhBAAhDQAAhFAEhBQAFhBAGg0IALhSIAFggIAhgCIBYgEIB8gGICOgHICOgFICBgEQA5gCAlABQAkAAAHADQAJAFAIAXQAIAYAHAgIAMA/IAHA0IADAWIgBAJQhzAch3AAQh4gBh1gXQh2gYhugpQgPApgXAmQgXAmgVAmQgVAlgMAnQgLAoAIAvQAGAUAKAQIASAhQAHARAEAWQABAPgCARQgEARACAPQABAQAOALQAZATAgAJQAfAIAkADQAlACAlABQgdAVgjAJQgiAJgjAHQgiAHgbAPIhEgQg");
	this.shape_46.setTransform(326.2,380.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#53821C").s().p("AggEJIACgMIAAgCIgYgiQgEgHAAgFIABgEQACgGAHgFQAGgEAHgDIAMgEIAEgBIAAgDIAAgCIgBgRQgCgOgJggQgIgggUg1QgNgigGgmQgGgmgCgjQgBgjAAgbIACglIABgOIAAgDQAggmAtgOQArgOAxAWQgHgCgNAPQgMAPgMAWQgNAXgKATIgLAaQgMAkgFAnQgFAmADAnQACARAKAcIAUA5QALAdADAYQAEAZgNAMQgMAMgjgGQAbASAaANQAaAOAfAJQgEAJgMAFQgNAFgOAAQgOABgKgDQgKgDABgGQgEATgBAVIgqAEIADgdg");
	this.shape_47.setTransform(340.9,394.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6DA829").s().p("AgMElIAAgMQgSAAgNgIIgegSQANgMAPgGQAPgHANgIQAMgJAFgSIgKAMQAFgUgDgSQgCgSgFgTQgEgSgCgTQgBgLACgLQAEgUAKgRIAUgiQAKgOAFgUQAEgWgGgQIgLgfQgFgQADgVQAEgSAEgIIAJgNQADgEAAgIQgBgJgHgSQgHgVgNgSQgLgUgLgTQATANAQAFQAQAGALAHQALAFAHANQAGAMADAZQACAagEAeIgIA4QgHBSgJBPQgKBRgMBQQgFAigCAjIgegCg");
	this.shape_48.setTransform(314.9,394.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6DA829").s().p("AgxFAQAZABANgLQALgKADgRQADgRgGgTQgHgJgRAGQgRAEgTAKQA5hiAOhuQARhrgQhyQgOhwgphqIAmAAQANABADABQAHAEAHAWQAIAVAGAhQAHAgAGAkQAFAjAEAgIgqGoIAAAEIAEACIAIAHQAHAIAEATIAAAGQgBAKgFAGQgGAHgFADIgHADIgFACIADAOIAJAlIgiALQgSgkgWgjg");
	this.shape_49.setTransform(363.5,380.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#365B0A").ss(1.3,1,1).p("AGDmdQgGgCglgBQgkAAg6ABQg6AChGACQhHADhIADQhKADhFAEQhFADg3ADQg3ACggACQggACgBAAQAAAAgFAfQgFAfgGA0QgGA0gFBBQgEBBAABFQAABDAHBBQAHBAATA0QgBgBgIACQgIABgFAJQgEAJAKAWQALAWAJAKQAJAKAGADQAFACABAAIgBAOQAAAOgBAYQCRAnCYAKQACgjAFghQAKhAAIhCQAIhCAGg+QAGg9AEgvQAEgxADgdQACgdAAAAQAAAAAJAGQAKAFAMAGQAOAFAOAAQAPAAAKgKQAAABgCAYQgCAYABAnQABAlAGAuQAGAuAPAsQAVA5AIAfQAJAgABANQACANgBgBQAAAAgIADQgIADgJAGQgJAFgEAJQgEAJAIANQALAQAFAHQAFAGABACIABABIgCALQgBALgCAUQCZgLCSgvIgLgtQABAAAHgEQAIgEAHgJQAGgJgBgQQgCgPgFgJQgGgIgEgDQgFgEAAAAIApmnQAAgBgCgVQgDgVgFgfQgFgfgGggQgHghgIgXQgIgXgJgGg");
	this.shape_50.setTransform(326.1,382.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#589319").s().p("Al/FwIABgmIABgOIgGgCQgGgDgJgKQgJgKgLgWQgKgWAEgJQAFgJAIgBIAJgBQgTg0gHhAQgHhBAAhDQAAhFAEhBQAFhBAGg0QAGg0AFgfIAFgfIAhgCIBXgEIB8gGICPgHICPgGICAgEQA6gBAkAAQAlABAGACQAJAGAIAXQAIAXAHAhIALA/IAIA0IACAWIgpGnIAFAEQAEADAGAIQAFAJACAPQABAQgGAJQgHAJgIAEIgIAEIALAtQiSAviZALIADgfIACgLIgBgBIgGgIIgQgXQgIgNAEgJQAEgJAJgFQAJgGAIgDIAIgDIgBgMQgBgNgJggQgIgfgVg5QgPgsgGguQgGgugBglQgBgnACgYIACgZQgKAKgPAAQgOAAgOgFQgMgGgKgFIgJgGIgCAdIgHBOIgKBsIgOCAQgIBCgKBAQgFAhgCAjQiYgKiRgng");
	this.shape_51.setTransform(326.1,382.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#254C7A").ss(1.3,1,1).p("ABehxQgTALgeAdQgdAcgmAzQgoA0gzBTQAAABgEAFQgDAEgFAAQgEgBgFgQQAAgBAMgTQALgUATgeQATgfAaghQAZgjAbggQAcggAegWQAdgWAdgEQAAgBAFgBQAEgBADADQAEAEgEAOQAAAAgKACQgJACgUAMg");
	this.shape_52.setTransform(201.8,355);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#426BA8").s().p("Ah9CXQgEgBgFgQIAMgUIAegyQATgfAaghQAZgjAbggQAcggAegWQAdgWAdgEIAFgCQAEgBADADQAEAEgEAOIgKACQgJACgUAMQgTALgeAdQgdAcgmAzQgoA0gzBTIgEAGQgDAEgEAAIgBAAg");
	this.shape_53.setTransform(201.8,355);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("ABXiQQgBAAgSAHQgTAIgcAPQgaAPgeAXQgdAXgXAgQgXAegIApQgBAAgCALQgCAMADARQADAQAPAPQAOAPAgAJQAAgBABgJQACgJACgNQADgMAEgKQAEgKAEgCQAHgCAJAGQAKAFAKAFQAMADAMgFQANgHAMgOQAMgOADgNQADgNgOgFQgUgGgFgBQgCgCgBAAQACAAAKgBQAMgBARgFQAQgFAPgJQAPgKAHgRQAHgRgIga");
	this.shape_54.setTransform(219.6,336);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#72461E").s().p("AhmB5QgPgPgDgQQgDgRACgLIADgNQAIgpAXgdQAXggAdgXQAegXAagPQAcgPATgIIATgGIAfBDQAIAbgHAQQgHASgPAKQgPAIgQAGQgRAEgMACIgMACIADABIAZAHQAOAEgDAOQgDANgMAOQgMAOgNAHQgMAFgMgEQgKgEgKgFQgJgGgHACQgEABgEALQgEAKgDAMIgEAWIgBAKQgggJgOgPg");
	this.shape_55.setTransform(219.6,336);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#895C13").ss(1.3,1,1).p("AAmkRQAAAAgDgFQgDgEgHgDQgHgEgNAEQgBAAgKAaQgMAagNAxQgOAxgEBGQgEBDAOBWQAPBWAqBlQAAABAGAFQAFAGAIABQAHABAHgOQgBgBgMghQgNghgOg4QgNg5gHhHQgHhFAKhNQAIhNAkhKg");
	this.shape_56.setTransform(217,369.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BA811C").s().p("AAlEgQgIgBgFgGIgGgGQgqhlgPhWQgOhWAEhDQAEhGAOgxQANgxAMgaIALgaQANgEAHAEQAHADADAEIADAFQgkBKgIBNQgKBNAHBFQAHBHANA5QAOA4ANAhQAMAhABABQgGANgHAAIgBAAg");
	this.shape_57.setTransform(217,369.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#254C7A").s().p("AAJgcQAQirADhbIADhcIAMAAIAAAhIgDBVQgBA1gFBCQgEBCgIBGQgIBJgLBHIgUB+IgSBZIgHAhQAljyAOipg");
	this.shape_58.setTransform(185.8,425.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#895C13").ss(1.1,1,1).p("AhuiCQAAgBAMAEQANADAVAOQAUAOAaAeQAZAeAbAzQAcA1AZBSQABABAJAAQAIAAAGgIQAAgBgHgYQgHgYgPglQgPglgYgnQgYgpghgjQgigjgugTg");
	this.shape_59.setTransform(248.6,358.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BA811C").s().p("ABXCWQgZhSgcg1QgbgzgZgeQgagegUgOQgVgOgNgDIgMgEIARgTQAtAUAjAiQAgAkAYApQAYAmAPAlQAPAmAHAYIAHAZQgGAHgJABIgJgBgAhuiDIAAAAIAAAAg");
	this.shape_60.setTransform(248.6,358.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9E3B1D").s().p("ABYFEIgFhCQgEgpgIg0QgHgzgNg5QgMg5gSg0QgTg6gWg1QgXg1gWgqIgkhCIgNgYQAwBGAkBLQAjBMAZBMQAaBIARBDQAQBDAKA0QAJA0AEAeIADAfIgZAdIgCgZg");
	this.shape_61.setTransform(218.1,439);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9E3B1D").s().p("ABfAxIgcgMIgigKQgPgFgLABIgaAFIgmAFIgjAFIgOACIAQgQQAQgQAVgSQAXgUAVgNQAUgNANAEQANAGAOARQAPAQAMASIAUAiIAJAPIgMgFg");
	this.shape_62.setTransform(226.7,476.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#895C13").ss(1.3,1,1).p("AApAOQgMAMgSAMQgQANgRACIghgoQAAgBAKgJQAKgIAOgMQAOgNAMgKQAOgKAJgCQABAAAIAIQAJAJAGAMQAHANgFALQAAABgNAMg");
	this.shape_63.setTransform(220.4,398.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#966311").s().p("Ag3ANIAKgKIAYgUQAOgNAMgKQAOgKAJgCIAJAIQAJAJAGAMQAHANgFALIgNANQgMAMgSAMQgQANgRACg");
	this.shape_64.setTransform(220.4,398.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#895C13").ss(1.3,1,1).p("AAagjQAEADAFAKQAFAKABASQgBABgIAIQgIAJgMAIQgMAIgLgBIgdgnQABgBAJgJQAJgJAOgJQAMgJAPgBQABAAAFADg");
	this.shape_65.setTransform(258.1,373);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#966311").s().p("AgLAnIgdgnIAKgKQAJgJAOgJQAMgJAPgBIAGADQAEADAFAKQAFAKABASIgJAJQgIAJgMAIQgKAHgJAAIgEAAg");
	this.shape_66.setTransform(258.1,373);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#9E3B1D").ss(1.3,1,1).p("Aicl7IARgQIAAASQAAAAAUAYQATAYAfAuQAfAuAkBCQAiBDAiBWQAhBVAZBoQAYBoAJB5QgBAAgRgJQgRgJgWgJQgXgJgUgBQgOAAgTADQgUADgQAEQgTAEgNADQgMADAAABQAAgBgGgjQgFgkgIg7QgJg7gJhIQgJhJgHhJQgIhLgDhEQgEhDABgyg");
	this.shape_67.setTransform(221.7,442.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C14F23").s().p("ACLGDQgRgJgWgJQgXgJgUgBQgOAAgTADIgkAHIggAHIgMAEIgGgkIgNhfIgSiDQgJhJgHhJQgIhLgDhEQgEhDABgyIghhbIARgQIAAASIAUAYQATAYAfAuQAfAuAkBCQAiBDAiBWQAhBVAZBoQAYBoAJB5IgSgJg");
	this.shape_68.setTransform(221.7,442.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#9E3B1D").ss(1.3,1,1).p("AE6isQgPgggJgQIgJgRQgBgZgIgSQgIgTgIgKQgIgKgBgBQhCAahDAmQhDAng9AsQg/Atg2AsQg2AsgpAkQgoAjgXAWQgXAWgBAAIAhBbQAFBNAGBNQBPhnBahbQBZhaBlhKQBnhMB5g6g");
	this.shape_69.setTransform(237.4,396.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C14F23").s().p("AkYCmIghhbIAYgWIA/g5QApgkA2gsQA2gsA/gtQA9gsBDgnQBDgmBCgaIAJALQAIAKAIATQAIASABAZIAJARIAYAwQh5A7hnBLQhlBKhZBbQhaBbhPBmQgGhMgFhOg");
	this.shape_70.setTransform(237.4,396.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AA7117").s().p("AivHfQAZgyAggxIBBhgQAhgvAaguQAcgtARgpQAqhrAJh0QAJh0gSh1QgRh1gphtIABAAIAKAPQAGAKAGAPQAFAQABATIAAACIABACIAQAdQAOAcAXA2QAVA2AWBLQAWBNAPBfQAPBdAABwIgBAbIgmAfIhLA+QgtAlgyAtQgvAsgtAvQguAvghArQghAqgMAiQAMgxAZgyg");
	this.shape_71.setTransform(258.5,423.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#895C13").ss(1.3,1,1).p("AFCj7QAXBQAOBlQAOBjgCB4QgBAAgcAWQgdAYguAmQguAmg0AvQg1AvgwAxQgxAxggAtQgiAtgJAhQgBAAgNgGQgNgGgUgIQgUgGgVgFQgUgEgQADQgWAEgUADQgVAEgOADQgOACAAAAQAAgBgGgmQgFglgIhDQgIhCgJhWQgJhVgIhgQgIhegGhhIghhcQABAAAXgWQAXgWAogkQApglA2grQA2gtA/gtQA/gsBBgnQBDgmBCgZQABAAAIAKQAIALAIASQAIATABAZQAAAAAQAeQAPAdAXA4QAXA4AWBQg");
	this.shape_72.setTransform(243.2,423.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BA811C").s().p("AhGJEIghgOQgUgGgVgFQgUgEgQADIgqAIIgjAFIgOADIgGgnIgNhoIgRiYQgJhVgIhgQgIhegGhiIghhbIAYgWIA/g7QApgkA2gsQA2grA/guQA/gsBBgnQBDgmBCgZIAJAKQAIAKAIATQAIASABAZIAQAfQAPAdAXA4QAXA4AWBQQAXBQAOBlQAOBjgCB4IgdAWIhLA9QguAng0AvQg1AvgwAxQgxAxggAtQgiAtgJAhIgOgGg");
	this.shape_73.setTransform(243.2,423.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#895C13").ss(1.3,1,1).p("AAdkkQgBAAgLAQQgLARgNAhQgPAhgMAxQgMAxgCBBQgCA/APBRQAPBSAkBhQABAAAGAAQAHAAAHgEQAIgFAFgMQgBAAgOgeQgOgegQg1QgOg1gGhGQgHhDANhPQALhPArhSg");
	this.shape_74.setTransform(212.5,372.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BA811C").s().p("AAQElQgkhhgPhSQgPhRACg/QAChBAMgxQAMgxAPghQANghALgRIAMgQIAQAVQgrBSgLBPQgNBPAHBDQAGBGAOA1QAQA1AOAeIAPAeQgFAMgIAFQgHAEgHAAIgFAAIgCAAg");
	this.shape_75.setTransform(212.5,372.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AhpAiQAJAIAOAFQAOAFAPADQAOADALACQAQAEATAEQAVADAQgFQAIgEAMgQQANgPALgVQALgSAFgSQAFgSgIgIQgPgQgUAAQgUAAgTAYQgMAQgFAHQgGAHgBACIgBABQAAAAgIgCQgKgCgOABQgOABgNAI");
	this.shape_76.setTransform(220.2,345.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#72461E").s().p("AAHBEIgjgIIgZgFQgPgDgOgFQgOgFgJgIIAwgnQANgIAOgBQAOgBAKACIAIACIABgBIAHgJIARgXQATgYAUAAQAUAAAPAQQAIAIgFASQgFASgLASQgLAVgNAPQgMAQgIAEQgKADgMAAIgPgBg");
	this.shape_77.setTransform(220.2,345.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AAyg6QgQgHgPAFQgPAFgLAKQgNAKgHAJQgIAJAAABQAAAAgFAJQgGAIgGANQgGANgDAMQgDAMAEAFQAAAAAHADQAGACAMACQAMABARgEQALgEAQgPQAQgQAMgUQAMgTACgSQACgRgPgJg");
	this.shape_78.setTransform(230.3,343.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#72461E").s().p("AgjA/QgMgCgGgCIgHgDQgEgFADgMQADgMAGgNIAMgVIAFgJIAIgKQAHgJANgKQALgKAPgFQAPgFAQAHQAPAJgCARQgCASgMATQgMAUgQAQQgQAPgLAEQgNADgKAAIgGAAg");
	this.shape_79.setTransform(230.3,343.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AAvg2QgPgHgOAFQgOAFgKAJQgMAKgHAIQgHAIAAABQgBAAgEAJQgFAHgGAMQgGAMgDALQgCALAEAFQAAAAAGADQAGACALABQALABAQgDQAKgEAPgOQAOgPAMgTQALgRACgQQACgRgOgIg");
	this.shape_80.setTransform(235.2,341.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#72461E").s().p("AggA6QgLgBgGgCIgGgDQgEgFACgLQADgLAGgMIALgTIAFgJIAHgJQAHgIAMgKQAKgJAOgFQAOgFAPAHQAOAIgCARQgCAQgLARQgMATgOAPQgPAOgKAEQgMADgKAAIgFgBg");
	this.shape_81.setTransform(235.2,341.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#895C13").ss(1.3,1,1).p("AhuiOQAAAAASAIQASAJAcAUQAbAVAbAjQAcAjAWAyQAVA1AHBJQABAAAEADQAEADAGgBQAGgCAEgMQABAAgBgUQgCgVgIgiQgIgigVgqQgUgogngsQglgsg/gog");
	this.shape_82.setTransform(239.1,360.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BA811C").s().p("ABbClIgFgDQgHhJgVg1QgWgygcgjQgbgjgbgVQgcgUgSgJIgSgIIAXgYQA/AoAlAsQAnAsAUAoQAVAqAIAiQAIAiACAVIAAAUQgEAMgGACIgDAAQgEAAgDgCg");
	this.shape_83.setTransform(239.1,360.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#254C7A").ss(1.3,1,1).p("AEbpzQAAABgFAjQgFAjgIA8QgIA7gJBJQgJBKgIBNQgIBOgFBIQgFBFgBA4QgBA4AGAeQALAzAGAcQAGAcADANQACAMABADIAAACIm4FXQAAgBgJgiQgJgigOg7QgNg7gNhMQgNhMgJhWQgIhVAAhXQAAhVAOhQQAOhQAfhBQBFg/BIg1QBHg2BAgqQBBgrA0geQA0geAfgQQAegQAAgBg");
	this.shape_84.setTransform(225.1,416.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#426BA8").s().p("AjLJRQgJgigOg7QgNg7gNhMQgNhMgJhWQgIhVAAhXQAAhVAOhQQAOhQAfhBQBFg/BIg1QBHg2BAgqQBBgrA0geQA0geAfgQIAegRIgFAkIgNBfIgRCEIgRCXQgIBOgFBIQgFBFgBA4QgBA4AGAeIARBPIAJApIADAPIAAACIm4FXIgJgjg");
	this.shape_85.setTransform(225.1,416.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#315D93").s().p("AB2GkQgogYgggaQgggagSgTIgUgVIgCgBIgQgCIgngGIgwgHIgrgGIgYgDIBYAGQAvAEAsAJQAqAJAjAUQATABAKgGQAJgGADgHIACgIIgCgXIgFg+IgGhSIgFhXQgCgrAAgfIABhDIAChVIADhYIAChIIAAgnQAHAFgHgJIgSgbIgWgdIgKgOIARADIAnAHIAqAHIAXAEIgDAXIgIAyIgPBZQgEAfAAAvQAAAyAEA+QAEA+AHBBIAOCEIAPB5IANBfIAIA5QgogKgngXg");
	this.shape_86.setTransform(185.1,432.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#254C7A").ss(1.3,1,1).p("AAtmRIh6h0QAAAAADAiQACAhACA6QABA6gBBLQgBBKgHBSQgHBSgPBPQgPBSgaBIQgZBJgnA4ICyAYQAAABANANQAOAOAVAUQAYAVAeAVQAeAWAiARQAhASAiAGQAAAAgFggQgEgggHg1QgIg2gIhDQgIhDgIhIQgHhIgFhFQgFhCgBg3QgBg4AFgiQAJg7AGgiQAFgiADgQQADgRAAgEIABgFg");
	this.shape_87.setTransform(184.9,427.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#426BA8").s().p("ACLHuQgigRgegWQgegVgYgVQgVgUgOgOIgNgOIiygYQAng4AZhJQAahIAPhSQAPhPAHhSQAHhSABhKQABhLgBg6IgEhbIgDgiIB6B0IB+AVIgBAFIgDAVIgIAyIgPBdQgFAiABA4QABA3AFBCQAFBFAHBIQAIBIAIBDIAQB5IALBVIAFAgQgigGghgSg");
	this.shape_88.setTransform(184.9,427.1);

	this.instance_1 = new lib.Symbol79("synched",0);
	this.instance_1.setTransform(234,350.4);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.Symbol78("synched",0);
	this.instance_2.setTransform(187.5,350.4);
	this.instance_2.alpha = 0.77;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#254C7A").ss(1.3,1,1).p("ACsjcIoqElQABABAOARQAPARAVAXQAVAXAVATQAUATANAEQANADAVAEQAUAEAVAEQAUAEAPADQAOADAAAAIIDlmQgBAAgOgBQgOgBgVgCQgWgCgYgDQgXgDgUgEQgUgEgLgFQgQgJgJgNQgJgOgEgKQgDgLAAgBg");
	this.shape_89.setTransform(215.2,367.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#214D82").s().p("AiSDaIgjgHIgpgIIgigHQgNgEgUgTQgVgTgVgXIgkgoIgPgSIIqklIADAMQAEAKAJAOQAJANAQAJQALAFAUAEQAUAEAXADIAuAFIAjADIAPABIoDFmIgOgDg");
	this.shape_90.setTransform(215.2,367.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5B3516").s().p("AkVFbQgZgBgXgDQgYgDgNgDQASgIAagIQAZgIAYgKQAYgKAPgOIALgKQAEgFgBgHQgCgHgMgMQA1gCA2gVQA1gWA0gkQAxgkAwgtQAvgtAqgtQAqgwAhgtQgpAJgegLQgfgLgVgYQgWgYgPgfIA7hLIAog1IAQgUIClB8QggBOg3BJQg4BIhHA9QhHA/hOAwQhNAxhNAeIgCABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACgDQgHASgFAQQgFAQgHANQgHANgPALQgJAHgVACIgaABIgVgBg");
	this.shape_91.setTransform(254.2,305.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AAAABQAAgBAAAA");
	this.shape_92.setTransform(238.7,330.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AiWD1QBMgeBLgwQBPgwBIg/QBHg9A4hJQA4hJAghOIimh8QAAABgXAeQgXAegmAwQgmAxgtA4QgrA4gtA1QgsAzglAoQglAogVAPQgZAQgeANQgdAOgbAQQgbAQgRAZQgPAYgCAbQgDAaAMAWQAMAWAdALQASAGAWAAQAXgBAVgGQAVgGAOgJQAPgLAHgOQAHgOAFgQQAFgPAHgRQgBABAAAAQgCADAAgDQABgBACAAgAiVDxQAAACgBABQAAAAAAAB");
	this.shape_93.setTransform(253.8,306.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#72461E").s().p("Ak7FcQgdgLgMgWQgMgWADgaQACgbAPgYQARgZAbgQQAbgQAdgOQAegNAZgQQAVgPAlgoQAlgoAsgzIBYhtIBThpIA9hOIAXgfICmB8QggBOg4BJQg4BJhHA9QhIA/hPAwQhLAwhMAeIAAgBIABgDIgBADIAAABIgDABQAAABAAAAQAAABABAAQAAAAAAAAQAAgBABgBIABgBQgHARgFAPQgFAQgHAOQgHAOgPALQgOAJgVAGQgVAGgXABIgDAAQgVAAgQgGg");
	this.shape_94.setTransform(253.8,306.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5C0301").s().p("AmoQBQjOg5i0hqQi0hqiTiTQiTiShpi0Qhqi0g5jMQg5jOgBjfQAAiRAZiLQAZiKAviCQgHBJAABKQABDfA5DOQA5DOBqC0QBpCyCTCSQCTCTC0BqQC0BqDOA5QDNA5DeABQDSgBDCgzQDCgyCtheQCsheCQiEQCQiDBtigQBuiiBEi6QgTDNhEC7QhDC8htCkQhtCjiQCFQiQCFitBfQiuBfjDAzQjDAzjTABQjegBjNg5g");
	this.shape_95.setTransform(325.3,314.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3A0B0B").s().p("AA8AmIgigYQgWgOgXgLQgagMgbgFIADgTIATAHQARAIAZANQAYANAWAQQAXASALAUIgMgKg");
	this.shape_96.setTransform(392.5,310.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5B3516").s().p("AhNAwIgCgqIgBgRIAWgGIAsgNIApgMIAXgHIALAVIAUAkQgjAcgoAIQgYAGgaAAQgRAAgQgCg");
	this.shape_97.setTransform(382.2,284.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5B3516").s().p("ABBCVQgdgIgdgUQgcgVgcgcQgbgbgXgaIgkgsIgRgXIgBgPIgCglIgDgyQAQAUARARQARASAVANQAWAMAcAEQgSAXgDAVQgCAWAKASQAKAUARAQQARAQARAMQAWAJAYAHQAYAHAaACQAaACAZgIQgKAZgeARQgPAIgSAAQgKAAgKgCg");
	this.shape_98.setTransform(390.9,315.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#3A0B0B").ss(1.3,1,1).p("AgekHQAAAAAMAXQANAXASAmQATAmAXAsQAXAtAWAsQAVAqAQAkQAPAjAGAUQAAAAAGANQAGANABAVQACAUgKAWQgKAWgeATQgbAOgegIQgfgIgggWQgdgXgdgcQgcgdgXgcQgXgbgNgSQgNgSAAAAIgPkbg");
	this.shape_99.setTransform(390.7,305);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#72461E").s().p("ABCEFQgfgIgggWQgdgXgdgcQgcgdgXgcQgXgbgNgSIgNgSIgPkbICMgoIAMAXIAfA9IAqBSIAtBZQAVAqAQAkQAPAjAGAUIAGANQAGANABAVQACAUgKAWQgKAWgeATQgRAJgTAAQgLAAgKgDg");
	this.shape_100.setTransform(390.7,305);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#720300","#3F0202"],[0.29,1],0,132.9,0,-283.4).s().p("AmrYUQjPg5izhqQi1hpiSiTQiTiThqizQhpi0g6jPQg5jNAAjfQAAjeA5jNQA6jPBpizQBqi1CTiSQCSiTC1hqQCzhpDPg6QDNg5DeAAQDfAADNA5QDPA6C0BpQCzBqCTCTQCTCSBpC1QBrCzA4DPQA6DNAADeQAADfg6DNQg4DPhrC0QhpCziTCTQiTCTizBpQi0BqjPA5QjNA6jfAAQjeAAjNg6g");
	this.shape_101.setTransform(325.7,261.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#8E8E8E","#FFFFFF","#000000"],[0,0.522,1],-138.1,0,346.6,0).s().p("AnOaRQjeg9jChyQjDhzifieQieifhyjCQhyjDg+jeQg+jeAAjxQAAjwA+jeQA+jeByjCQByjDCeifQCfieDDhzQDChxDeg+QDeg+DwAAQDxAADeA+QDeA+DDBxQDCBzCfCeQCeCfBzDDQByDCA9DeQA+DeAADwQAADxg+DeQg9DehyDDQhzDCieCfQifCejCBzQjDByjeA9QjeA+jxAAQjwAAjeg+g");
	this.shape_102.setTransform(325.7,261.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#919191").s().p("A2bfVIi0g8Igti0IIck7ILQBLIlKH+IkOgPImGAegAnOXGQjehAjDh1QjCh2ifijQieikhyjIQhzjIg9jlQg+jjgBj5QABj4A+jlQA9jlBzjIQByjJCeijQCfijDCh2QDDh2Deg/QDehADwAAQDxAADeBAQDeA/DDB2QDDB2CeCjQCeCjByDJQByDIA/DlQA9DkABD5QgBD5g9DjQg/DlhyDIQhyDIieCkQieCjjDB2QjDB1jeBAQjeA/jxABQjwgBjeg/g");
	this.shape_103.setTransform(322.7,286);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#8E8E8E","#FFFFFF","#000000"],[0,0.522,1],340.4,-54.4,-597,95.6).s().p("Egu2AD/IAAn9MBdtAAAIAAH9g");
	this.shape_104.setTransform(320,206.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#8E8E8E","#FFFFFF","#000000"],[0,0.522,1],340.4,-54.4,-597,95.6).s().p("Egu2AD+IAAn8MBdtAAAIAAH8g");
	this.shape_105.setTransform(320,353.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#919191").s().p("Egu2AD/IAAn9MBdtAAAIAAH9g");
	this.shape_106.setTransform(320,210.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#919191").s().p("Egu2AD/IAAn9MBdtAAAIAAH9g");
	this.shape_107.setTransform(320,359.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B5B5B5").s().p("Egu2AjJMAAAhGSMBdtAAAMAAABGSg");
	this.shape_108.setTransform(318.5,273.6);

	this.addChild(this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.instance_2,this.instance_1,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.5,48.6,601.5,450);


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,walk:7,grab:15,"thumbs-up":21,"head-down":65});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* gotoAndPlay("walk");*/
	}
	this.frame_64 = function() {
		/* gotoAndStop("static");*/
	}
	this.frame_119 = function() {
		/* gotoAndStop("static");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(50).call(this.frame_64).wait(55).call(this.frame_119).wait(1));

	// Boy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B3516").s().p("AiPB4QgHgGgsgYQjFhpgyhVQAFgSAIgRIAPAZQAaAhA3AmQC/CEAHAJQAFAFAgAGQAjAGAdgCIEDgXIAaAPQAfAMAZgLQApgUAUgWIA7gNIADAMQAGAMAEgBIAAATIABAFQgGAMgRgBIAFgiIg8AQIgCABQgeAfg5gCIg1gHIgBAAIi/AQQgoACghAAQhQAAgUgQg");
	this.shape.setTransform(12.2,-29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3A0B0B").ss(1,1,1).p("AEMCoQA8ABAgggIA0gPIgFAhIANAAQAOgCAGgMQAKgTAEgqQg9hhgcAJIiXBdIk+hhIiXilQhSgGg4ApQgfAXgZApIgEAQQAoBDB8BNQA/AnBJAoQAdAYCTgJIC/gQg");
	this.shape_1.setTransform(12.8,-32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#72461E").s().p("AiZChQhIgohAgnQh8hNgohDIAEgQQAZgpAfgXQA5gpBSAGICWClIE+BhICXhdQAcgJA9BhQgFAqgJATQgGAMgOACIgNAAIAFghIg0APQghAgg7gBIg2gIIi+AQQgmADgfAAQhXAAgVgSg");
	this.shape_2.setTransform(12.8,-32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A0B0B").s().p("AACFfQgIgLgCgMQgCgMACgIIABgKIgOgGIgEADQgFADgLAAQgKgBgTgLQgTgMgFgQQgEgQABgMIADgOIgNgIIgIAHQgIAHgNAGQgNAGgRABQgQACgSgJQgOgIgJgOQgIgPAAgTQAAgOAGgPQAGgPAOgMQANgMAXgEIANgDIgJgKIgFgJQgFgIgBgLQAAgJAIgHQALgKAXgEIgBgQQghABgUgFQgVgGgHgJQgGgJACgEQAFgHALgDQALgDAIAAIABgQIgIgDQgGgDgIgIQgHgIgEgOQgFgOAFgWQABgGADgGQADgGAFgBQAFgBAKAHQAJAHAJAKQAJAKAHAKIAOgIIgDgMQgDgLAHgLQALgPAlACIAWACIgQgPIgLgNQgKgKgMgSQgMgSgJgVQgJgWAAgXQABgXAPgVQAKgPALgKQgPAkABAmQAAAlAVAmQAeApAoAZQAlAaAyABQgVAUgNAXQgOAXgCAXQgBAXALASQAFAJALAAQAMAAAOgEQANgFAOgCQAOgDAJAFQAUAHACAJQABAIgIAJQgJAJgMALQgNAKgKANQgKANAAAQQAngVAggEQAegDAYALQAZALASAVQgMgKgHgHIgNAJQAIALAIASQAJASAAAUIgBAQQgHAWgEAGIgFAGIgKgDIgIgBIAKAPQAFAIAGAPQAHAQgBAOQAAAFgEADQgGAEgIAAIgLAAQgBABgIgHQgIgHgFgYQgDgSgKgOQgKgOgMgJQgMgIgIABQgLABgBALIAAACIgFAAIgDAAIgRgBQgLAAgHAHQgHAHgEAJQgDAKgCAJQgGABgFAGQgHAIAAANQABAUAOAcIgIAFQgFADgGAAQgJAAgHgIg");
	this.shape_3.setTransform(-35.2,-149.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Am7CNQgJAAgLgBQgUAAgSgGQgTgFgJgNQgIgNAEgIQAFgIAJgDQAKgEAIgBQAJgBABAAQgBAAgIgEQgHgDgKgJQgJgJgFgQQgFgRAFgWQAFgUAJgEQAJgEAKAGQALAGAKAKQAJAIAGAIQAGAIABABQgBgBgCgJQgDgHADgMQACgMANgJQAOgIAfACQgBAAgKgLQgKgLgNgSQgNgTgJgXQgKgXABgZQAAgaARgYQAVgdATgJQASgJAOADQAOACAIAGQAIAFAAABQAAgBADgNQAEgOALgTQALgTAWgQQAXgOAQABQAQACAJAGQAIAHABABQgBgBADgQQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAGAGQAFAEACABQgBgBAAgDQAAgEAIgHQAJgHAagIQAbgGAMAFQAJAGADAIQADAGAAACQAAgCAGgKQAHgMAQgQQAQgQAdgNQAVgJAMAFQANAEAFAKQAGALACAJQABAJAAAAQgBABAHABQAHACAUAAQAUgBAogGQAYgDAMAJQANAJADAPQAEAQgBAQQgBAQgDALQgCALgBABQABgBALgIQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMQgCAKAAABQABgBAGgGQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAEAOgDAKQgDAJgFAFQgEAEgBAAQABAAALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgNgGQgMgGgBAAQAAAAgKAGQgKAHgQAGQgQAGgTAAQgTABgSgLQgBAAgLAJQgKAIgQAIQgQAIgQAAQgPAAgKgEQgKgFgFgEQgFgEAAgBQAAABgJAMQgJAMgPARQgPAQgTANQgTANgTABQgZABgMgGQgLgGgDgHQgCgGAAgBQgBACgEAPQgFAQgMATQgLAVgUAOQgTANgKADQgMADgFgBQgEgBgBgBQAAABADAGQADAIADALQACALgDALQgDALgFADQgFADgEgBQgBAAgBAAQADACAJAEQAMAGAOAKQAQALALANQAKANgEANQgEAOAAASQAAARAIAPQAIAQARAIQASAIAdgEQAAAAgFAJQgEAJgKAJQgKAJgQAAQgRgBgKgLQgKgLgEgLQgDgGgBgCQABACABADQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgCgKQAAABAAAFQAAAGgCAHQgCAGgFACQgFACgKgIQgQgNgHgHQgBgCgBgBQgGgHABAAQABAAAGAKQACACABADQAKAPAIAWQAHAWgFAXQgGAXgFAIQgGAIgDABQgEAAAAAAQAAAAAFAJQAFAKAFANQAEANgBANQgCAMgJADQgJAEgJAAQgJAAgBgBQAAABgFgDQgGgDgGgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgIAAQgIAAgRgBQgMAAgGAKQgGAJgCAKQgCAKAAAAQAAAAgFACQgFACgEAHQgEAGACAPQACAPAOAaQAAABgIAFQgHAGgMABQgLACgNgMQgLgMgDgOQgCgOACgKQABgIABgCQgBABgEAEQgGAEgNAAQgOAAgWgNQgWgOgFgSQgFgTACgNQACgNABgBQgBAAgIAGQgIAHgOAHQgOAHgTACQgSABgVgJQgUgLgJgVQgIgVADgXQAEgYAQgSQARgTAfgGQgBgBgFgJQgGgJgBgNQgCgMAMgLQAMgLAQgDQAEgBAEgBQAKgCAIAAQALgBABABQgBAAgOABQgHABgIAAgAATEgIgBgD");
	this.shape_4.setTransform(-4.6,-161.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#490F0E").s().p("Ak0HcQgLgMgDgOQgCgOACgKIADgKIgGAFQgGAEgNAAQgOAAgWgNQgVgOgGgSQgFgTACgNIADgOIgJAGQgIAHgOAHQgOAHgSACQgTABgUgJQgVgLgJgVQgIgVAEgXQADgYAQgSQASgTAegGIgGgKQgGgJgBgNQgBgMALgLQAMgLAQgDIAIgCIAPgBIAPgBIgMAAQgIAAgKACIgTgBQgVAAgSgGQgSgFgKgNQgHgNADgIQAFgIAKgDQAJgEAJgBIAJgBIgIgEQgIgDgJgJQgJgJgGgQQgEgRAEgWQAGgUAIgEQAJgEALAGQAKAGAKAKIAQAQIAGAJIgDgKQgCgHACgMQACgMANgJQAOgIAfACIgKgLQgLgLgNgSQgNgTgJgXQgJgXAAgZQAAgaARgYQAVgdATgJQATgJAOADQAOACAHAGIAIAGIADgOQAEgOALgTQALgTAXgQQAWgOAQABQARACAIAGIAJAIIACgRQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAHAGIAGAFIgBgEQAAgEAIgHQAJgHAagIQAbgGAMAFQAKAGACAIIADAIIAGgMQAHgMARgQQAQgQAcgNQAVgJAMAFQANAEAFAKQAGALACAJIABAJIAGACQAHACAUAAQAVgBAogGQAXgDANAJQAMAJADAPQAFAQgCAQQgBAQgDALIgCAMIAAAAIAAAAIALgJQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMIgCALIAHgHQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAFAOgEAKQgCAJgGAFIgEAEIALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgMgGIgOgGIgKAGQgKAHgQAGQgQAGgTAAQgSABgTgLIgMAJQgKAIgQAIQgQAIgPAAQgQAAgJgEQgLgFgFgEIgEgFIgKANQgJAMgPARQgPAQgTANQgTANgTABQgZABgLgGQgMgGgDgHIgCgHIgFARQgFAQgLATQgMAVgUAOQgTANgKADQgLADgGgBIgFgCIADAHQADAIADALQACALgDALQgCALgGADQgEADgFgBIgCAAIAMAGQANAGANAKQARALAKANQAKANgEANQgEAOABASQAAARAIAPQAHAQARAIQASAIAdgEIgFAJQgEAJgKAJQgJAJgRAAQgRgBgJgLQgKgLgFgLIgDgIIABAFQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgBgKIAAAGQAAAGgCAHQgDAGgEACQgGACgKgIIgWgUIgIgKIAAAAIAFAHIADADIADAFQAKAPAHAWQAHAWgFAXQgFAXgGAIQgFAIgEABIgEAAIAFAJQAFAKAFANQAFANgCANQgCAMgJADQgJAEgJAAIgKgBIgFgCQgFgDgHgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgHAAIgagBQgMAAgGAKQgGAJgBAKIgCAKIgGACQgFACgEAHQgEAGACAPQADAPAOAaIgIAGQgIAGgLABIgDABQgKAAgMgLgAAUEgIgCgDgAhiDwIgFgHIAAAAIAIAKIgDgDgAmpCLIAMAAIgPABIgPABQAKgCAIAAg");
	this.shape_5.setTransform(-4.6,-161.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAAQAAgDABgDQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAEABABAIQgBAJgEABQgDgBAAgJg");
	this.shape_6.setTransform(39.3,-146.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAAQABgHAEgBQAFABAAAHQAAAIgFABQgEgBgBgIg");
	this.shape_7.setTransform(29.9,-145.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGANQgCgGAAgHQAAgHADgFQADgGACAAQAEAAADAGQACAGAAAGQAAAIgDAGQgDAFgDAAQgDAAgDgGg");
	this.shape_8.setTransform(29.8,-144.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEANQgCgGAAgHQAAgHACgFQACgFACAAQADAAACAFQACAGAAAGQAAAHgCAGQgCAFgDAAQgCAAgCgFg");
	this.shape_9.setTransform(39.3,-145.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#222266").s().p("AgLAVQgFgIAAgNQAAgMAFgJQAFgJAGAAQAHAAAFAJQAFAJAAAMQAAANgFAIQgFAKgHAAQgGAAgFgKg");
	this.shape_10.setTransform(38.4,-146);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#222266").s().p("AgMAaQgGgLAAgPQAAgOAGgLQAGgKAGAAQAIAAAGAKQAFALAAAOQAAAPgFALQgGAKgIAAQgHAAgFgKg");
	this.shape_11.setTransform(28.9,-144.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAYAsQgQAIgOABQgUAAgOgIQgOgIgJgWQgJgUgHgpQAAgDAPgCQAQgCAZACQAXADAcALQAcAMAYAYQAAABgIAGQgHAIgNALQgNALgPAIg");
	this.shape_12.setTransform(23.6,-97.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BF0014").s().p("AgoAtQgOgIgJgWQgJgUgHgpQAAgDAPgCQAQgCAZACQAXADAcALQAcAMAYAYIgIAHQgHAIgNALQgNALgPAIQgQAIgOABIgCAAQgTAAgNgIg");
	this.shape_13.setTransform(23.6,-97.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("ACCgtQgLARgSAaQgSAYgXAbQgXAagZATQgXATgYADQgeACgQgOQgQgPgIgfQgJgegHgqQgGgtgMg4QAAAAANANQANANAYAQQAZAQAjALQAgALArgCQAsgCAygYQAAAAgKASg");
	this.shape_14.setTransform(27.1,-103.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhRBoQgQgPgIgfQgJgegHgqQgGgtgMg4IANANQANANAYAQQAZAQAjALQAgALArgCQAsgCAygYIgKASQgLARgSAaQgSAYgXAbQgXAagZATQgXATgYADIgJAAQgXAAgOgMgAiLhzIAAAAIAAAAg");
	this.shape_15.setTransform(27.1,-103.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5B3516").s().p("AgrBPIgQgdIgPgbIgJgQQB2gZAlhQQAKAMACAPIAAAEQAAARgKARQgKARgPAQIgfAgQgSASgMARQgOARgFAPIgMgUg");
	this.shape_16.setTransform(41.4,-124.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3A0B0B").ss(1,1,1).p("Ah4hUQAAAAAJgLQAIgLAPgLQAQgLAWgBQASAAAbADQAaACAcAGQAdAIAUAPQAUAPACAZQABAVgLAUQgMATgTATQgSAUgSATQgTASgMARQgMARAAAP");
	this.shape_17.setTransform(38.2,-126.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#72461E").s().p("Ah4hUIAJgLQAIgLAPgLQAQgLAWgBQASAAAbACQAaACAcAHQAdAIAUAPQAUAOACAaQABAUgLAVQgMASgTAUIgkAnQgTASgMARQgMARAAAOg");
	this.shape_18.setTransform(38.2,-126.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#3A0B0B").ss(1,1,1).p("AAsgoQAGAUgBAWQgDAlgPAXQgPAYgTgBQgOgBgKgMQgLgMgFgTQgGgUABgWQADglAPgXQAPgYATABQAOABAKAMQALAMAFATg");
	this.shape_19.setTransform(36.2,-148.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDBVQgOgBgKgMQgLgMgFgTQgGgUABgWQADglAPgXQAPgYATABQAOABAKAMQALAMAFATQAGAUgBAWQgDAlgPAXQgPAXgSAAIgBAAg");
	this.shape_20.setTransform(36.2,-148.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3A0B0B").ss(1,1,1).p("AAYhEQATAXAHAmQAEAXgDAVQgDAVgKAOQgIAOgOADQgUADgTgXQgTgWgHgmQgEgXADgWQADgVAKgOQAIgOAOgCQAUgDATAWg");
	this.shape_21.setTransform(26,-146.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBFQgTgXgHglQgEgXADgWQADgVAKgOQAIgOAOgDQAUgCATAWQASAWAIAnQAEAWgDAVQgDAWgKAOQgIAOgOADIgGAAQgQAAgRgUg");
	this.shape_22.setTransform(26,-146.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AAegWQgOgJgSgEQgVgDgVAEQAAAAAAAJQgBAKAAAKQAAAJADAFQABAAALAEQALAEAPAGQAMAGAMAEQAMAEADAAQAEAAAEgOQAEgNgBgOQgCgKgOgIg");
	this.shape_23.setTransform(36.4,-163.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C270E").s().p("AAUAhIgYgKIgagKIgMgEQgDgFAAgJQAAgKABgKIAAgJQAVgEAVADQASAEAOAJQAOAIACAKQABAOgEANQgEAOgEAAIgPgEg");
	this.shape_24.setTransform(36.4,-163.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AAfg+QAAAAgMAFQgLAGgPANQgRAMgSAVQgRATgMAfQAAABAEAEQAEAFAKAEQAKAFARgBQAAAAAGgMQAGgMANgPQAKgQATgLQATgNAZgDQAAgBgEgKQgFgLgJgKQgJgKgOgBg");
	this.shape_25.setTransform(16.2,-159.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C270E").s().p("Ag1A7QgKgEgEgFIgEgFQAMgfARgTQARgVARgMQAQgNALgGIAMgFQAOABAIAKQAKAKAEALIAFALQgaADgSANQgTALgLAQQgMAPgGAMIgGAMIgDAAQgPAAgJgEg");
	this.shape_26.setTransform(16.2,-159.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AgigfQABAAANAEQANAEAOAOQAQAMAMAdQgBgBgIgFQgIgEgMgEQgKgEgKAD");
	this.shape_27.setTransform(-23.1,-115.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5B3516").s().p("AAyGdQg4g3gnhGQgmhGgThPIgBgDIgCgBIgRgLQgPgLgUgYQgVgZgRgoQgQgmgFg6QgBgiAZgvQAZgvAvg1QAwg1BAg0QAvgoA5gkQA5gkA+gbQgPAHgOAVQgPAWgMAbQgMAbgJAZQgIAZgDAOQgFAgABAfIABA+QABAfgEAfQgEAfgOAfQgNAbgUAZQgUAYgRAYQgSAZgHAeQgIAuANAlQAMAlAbAfQAaAfAfAdIAkAjQAUAUASAXQASAXAKAXQAJAYgFAWQgFAXgaATQhMgfg6g2g");
	this.shape_28.setTransform(-13.4,-123);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#3A0B0B").ss(1,1,1).p("AGlClQgPA4gvAtQgwArgyAeQgyAfgyAaQgxAbgvAfQguAfgnAsQAAABgYgJQgXgJgkgXQglgXgogpQgpgpglhAQgkhAgXhbQgBABgPgMQgQgLgVgYQgVgZgRgpQgSgpgEg6QgCgpAhg3QAgg4A7g7QA6g8BLg3QBLg2BTgoQBRgoBSgPQBRgPBIATQAAAAABAWQABAWAEAlQADAlAHAsQAIAtALAtQALAuARAnQAWAyAUA7QATA7AHA7QAGA9gPA5g");
	this.shape_29.setTransform(7.5,-125.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#72461E").s().p("AgsIJQgXgJgkgXQglgXgogpQgpgpglhAQgkhAgXhbQgBABgPgMQgQgLgVgYQgVgZgRgpQgSgpgEg6QgCgpAhg3QAgg4A7g7QA6g8BLg3QBLg2BTgoQBRgoBSgPQBRgPBIATIABAWIAFA7QADAlAHAsQAIAtALAtQALAuARAnQAWAyAUA7QATA7AHA7QAGA9gPA5QgPA4gvAtQgwArgyAeQgyAfgyAaQgxAbgvAfQguAfgnAsIAAAAIgYgIg");
	this.shape_30.setTransform(7.5,-125.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#725107").s().p("AAFAlIgGgkIgIgiIgDgQIAKgDQABABADAbQAGAZAFA0IgEAAIgEgQg");
	this.shape_31.setTransform(1.1,-69.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#725107").ss(1,1,1).p("AANjcQgBAAgRAKQgUAKgbAUQgcAVgaAfQgaAggOArQgOArAIA2QAAABAHAaQAHAZASAoQASApAhAsQABgBAOgPQANgPAYgWQAWgVAfgSQAegSAggGQAagEANAFQALAEAEAFQgCgDgCgFQgHgOgLgYQgLgXgLgaQgLgYgIgWQgIgXgCgOACYBzQAAABABAAQADAGAAABQgBgBgDgHg");
	this.shape_32.setTransform(-26.5,-61.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AF800B").s().p("Ah2CIQgSgogHgZIgHgbQgIg2AOgrQAOgrAaggQAagfAcgVQAbgUAUgKIASgKIBCCdQACAOAIAXQAIAWALAYIAWAxIASAmIAEAIQgEgFgLgEQgNgFgaAEQggAGgeASQgfASgWAVQgYAWgNAPIgPAQQghgsgSgpg");
	this.shape_33.setTransform(-26.7,-61.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#725107").ss(1,1,1).p("ABQhUQgegEglAAQgkgBgjABQgjABgXABQgXABgBAAQAAABAFARQAFASALAbQALAaATAeQASAeAbAaIBTg/IBbAkQABAAADgRQAEgRACgXQADgWgEgWQgDgWgOgLQgMgJgegEg");
	this.shape_34.setTransform(-3.7,-77.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AF800B").s().p("AhZAiQgTgegLgaQgLgbgFgSIgFgSIAYgBIA6gCQAjgBAkABQAlAAAeAEQAeAEAMAJQAOALADAWQAEAWgDAWQgCAXgEARIgEARIhbgkIhTA/QgbgagSgeg");
	this.shape_35.setTransform(-3.7,-77.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A37308").s().p("AgqG+QgxgNgagMQgagMAAgBQgNg0AChIQAChHALhSQAMhRARhRQARhSAShJQAShKAPg3IAOgzIAKgkQAGgVAYgNQAagMAmgGQAmgGArgBQg6BMgtBXQgtBXgZBdQgbBcgHBaQgGBcASBWQASBWArBKQAYAlAgAXQhHgDgwgNg");
	this.shape_36.setTransform(-26.2,-40.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#725107").ss(1,1,1).p("AjYk7QgPA3gSBJQgTBKgRBSQgRBQgLBSQgMBRgBBIQgCBHAMA1QAAAAAZAMQAZAMAvANQAwANBEAEQBEAEBWgPQBWgQA0gJQA1gJAagDQAbgEAJgBIAIgBQABgBADgdQADgdADgyQAEgyABhBQAChBgEhIQgDhHgKhJQgKhJgUhCQAAgBgDgTQgDgTgHgdQgHgdgMgeQgMgegTgXQgTgXgagHQgbgGgrgFQgqgEgxgBQgvgBgtAFQgsAGgfANQgfANgHAYQgEANgGAWQgGAWgIAeQAOgDAPgCQAOgCAHAGQAFAKAAAMQgBAMgGAKQgGALgKAF");
	this.shape_37.setTransform(-8.9,-40.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AF800B").s().p("AhnHOQhEgEgwgNQgvgNgZgMIgZgMQgMg1AChHQABhIAMhRQALhSARhQQARhSAThKQAShJAPg3IAdgFIABAAIAGAAIAAAAIABAAQAIAAAFADIAAABQAFAJAAALIAAACQgBAMgGAKQgGALgKAFQAKgFAGgLQAGgKABgMIAAgCQAAgLgFgJIAAgBQgFgDgIAAIgBAAIAAAAIgGAAIgBAAIgdAFIAOg0IAKgjQAHgYAfgNQAfgNAsgGQAtgFAvABQAxABAqAEQArAFAbAGQAaAHATAXQATAXAMAeQAMAeAHAdQAHAdADATIADAUQAUBCAKBJQAKBJADBHQAEBIgCBBQgBBBgEAyIgGBPIgEAeIgIABIgkAFIhPAMIiKAZQhDAMg5AAIgegBg");
	this.shape_38.setTransform(-8.9,-40.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#725107").ss(1,1,1).p("ABonJQgqgEgxgBQgvgBgsAFQgtAGgfANQgfANgHAYQgHAZgPA2QgPA3gSBJQgTBKgRBTQgRBRgMBTQgMBTgCBJQgCBJAMA1QAAAAAZAMQAZAMAvANQAwANBEAEQBFAEBVgPQBWgQA0gJQA1gJAbgDQAagEAJgBIAJgBQAAgBADgdQADgdADgyQAEgyABhBQAChBgDhIQgEhHgKhJQgKhJgUhCQAAgBgDgTQgCgTgIgdQgHgdgMgeQgMgegTgXQgSgXgbgHQgbgGgrgFg");
	this.shape_39.setTransform(-9,-40.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AF800B").s().p("AhnHOQhEgEgwgNQgvgNgZgMIgZgMQgMg1AChJQAChJAMhTQAMhTARhRQARhTAThKIAhiAIAWhPQAHgYAfgNQAfgNAtgGQAsgFAvABQAxABAqAEQArAFAbAGQAbAHASAXQATAXAMAeQAMAeAHAdQAIAdACATIADAUQAUBCAKBJQAKBJAEBHQADBIgCBBQgBBBgEAyQgDAygDAdIgDAeIgJABIgjAFIhQAMIiKAZQhDAMg5AAIgegBg");
	this.shape_40.setTransform(-9,-40.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#725107").ss(1,1,1).p("AhZiNQAAgBAPAGQAPAFAYAQQAYAQAYAhQAaAgAWA0IAdA0IiHBIg");
	this.shape_41.setTransform(20.8,-66.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AF800B").s().p("AhZiNIAPAFQAPAFAYAQQAYAQAYAhQAaAgAWA0IAdA0IiHBIg");
	this.shape_42.setTransform(20.8,-66.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#365B0A").ss(1,1,1).p("ABAhZQABAAgFATQgEATgNAdQgNAbgaAfQgYAegrAY");
	this.shape_43.setTransform(-31.9,12.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#497715").s().p("Ag3IKIgBgMQAAgWAFgxIAOh8IAcjwQAGg7ADguQABgvAAgoQAAg7gEgrQgFgrgJgjQgIghgKggIgIgaQgOgyABggQAAgaAEgOQAEgNADgFIBTgHQgMApABAtIAVDuQAKB2AAB0QAAB1gTBzQgTBzgtBxQgMAagIAcQgIgGgCgJg");
	this.shape_44.setTransform(-35.7,51.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#365B0A").ss(1,1,1).p("ADSopQgagDgqABQgqAAgxADQgyACgvAEQgxADgpAEQgpADgZADQgZACAAAAQgBAAgGAPQgGAPgBAhQgBAgAPA0QALAmALAnQALAmAGAxQAHAygBBIQAABHgMBnQgXDSgNBuQgOBuAEATQAEAOANAHQANAGANACQAMACAAAAQAAAAANgNQAMgNAZgUQAYgTAkgVQAkgUAugPQAvgPA7gFQABAAADgCQAEgCABgFQABgFgGgIQgGgHgTgKIgPjmQAAAAAGgFQAHgFAGgMQAHgLACgRQACgRgJgZQgJgZgCgfQgCgiACghQACggADgWQADgWAAAAQgBgBAEgVQAFgUAQggQAQgfAkghQAcgZAPgmQAQgmAGgpQAGgoAAggQAAgggDgOQgDgHgagDg");
	this.shape_45.setTransform(-17.8,51.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#589319").s().p("AjFIqQgNgCgNgGQgNgHgEgOQgEgTAOhuIAklAQAMhnAAhHQABhIgHgyQgGgxgLgmIgWhNQgPg0ABggQABghAGgPQAGgPABAAIAZgCIBCgGIBagHIBhgGQAxgDAqAAQAqgBAaADQAaADADAHQADAOAAAgQAAAggGAoQgGApgQAmQgPAmgcAZQgkAhgQAfQgQAggFAUIgDAWIgDAWIgFA2QgCAhACAiQACAfAJAZQAJAZgCARQgCARgHALQgGAMgHAFIgGAFIAPDmQATAKAGAHQAGAIgBAFQgBAFgEACIgEACQg7AFgvAPQguAPgkAUQgkAVgYATQgZAUgMANIgNANIgMgCg");
	this.shape_46.setTransform(-17.8,51.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AB3AdQAAAAgMAIQgMAIgcAKQgcALgtAHQguAIhEgBQAAAAAFgOQAEgOAJgVQAJgWAOgUQANgWASgRQARgRAWgFQAkgJAfACQAfADASAZQARAYgFA4g");
	this.shape_47.setTransform(-3.7,99.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1F3263").s().p("Ah4BQIAFgOQAEgOAJgVQAJgWAOgUQANgWASgRQARgRAWgFQAkgJAfACQAfADASAZQARAYgFA4IgMAIQgMAIgcAKQgcALgtAHQgrAHg+AAIgJAAg");
	this.shape_48.setTransform(-3.7,99.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#3A0B0B").ss(1,1,1).p("ACTARIhfBEQgBAAgPAAQgQAAgXAAQgaAAgdgBQgdgBgbgDQgbgCgTgEQgSgFAFgQQAGgRAVgXQAVgUAfgWQAegWAggPQAggQAZgCQAhgCAiAFQAhAGAYAMQAXANACAUQACAVgdAag");
	this.shape_49.setTransform(-21.1,99.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#72461E").s().p("AgDBVIg3gBQgdgBgbgDQgbgCgTgEQgSgFAFgQQAGgRAVgXQAVgUAfgWQAegWAggPQAggQAZgCQAhgCAiAFQAhAGAYAMQAXANACAUQACAVgdAaIhfBEIgQAAIgSAAIgVAAg");
	this.shape_50.setTransform(-21.1,99.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("ADMgwQgMgBgjABQgiAAgwABQgwACgxABQgyACgtABQgsACgbABQgcABgBAAQAAAAgEALQgEALgEAPQgDANgBANQABAAAcAGQAdAGAwAGQAxAFA8ABQA7AABBgLQBAgLA9gbQABgBACgJQABgMgFgNQgFgMgVgCg");
	this.shape_51.setTransform(-14.6,106.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111E3D").s().p("Ah/AsQgwgGgdgGIgdgGQABgNADgNIAIgaIAEgLIAdgBIBHgDIBfgDIBhgDIBSgBIAvAAQAVACAFAMQAFANgBAMQgCAJgBABQg9AbhAALQhBALg7AAQg8gBgxgFg");
	this.shape_52.setTransform(-14.6,106.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#497715").s().p("AhhHMQgQgNAAgLQAAgFAEgOIAJghIAVhOQALguAJg0QAJg0ABg2IAAgIQAAg0gKgsQgKgsgOgjQgOgjgLgUIgOgYIgFgZQgDgVgDggQgEggAAgiQAAgiAFgeQAFggANgUQANgVAXgGIBVgQIBPgMIA0gHQglBJgVBJIglBqQgTA0gNAyQgLAzAAAxQAAEBgpD+QgngLgRgMg");
	this.shape_53.setTransform(1.6,46.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#365B0A").ss(1,1,1).p("AB1noQANAEAKAJQALAIACAPQADAUgFAMQgEAMgGAGQgFAFgBAAIgPGhQABABAIAIQAIAJAFANQAGANgHAOQgIAOgFAZQgFAaAAArQAAAqAJBAQAAABAGAHQAGAGALAIQALAHAPACQAPACAFAKQAFAJAAAJQAAAJgBABQAAgBgMgCQgLgCgTAHQgSAIgWAaQgQAVgOATQgOATgRAOQgRAOgZAGQgXAHglgFQhLgKgigRQghgSABgTQAAgKAJgfQAKggAMgvQAMguAKg4QAKg3ABg4QABg5gLguQgLgwgOgjQgPgkgLgTQgMgUAAAAQAAgBgEgUQgDgTgEggQgDgfgBgkQAAgkAFghQAFgiAOgXQAOgXAagGQAngIAogHQApgHAfgEQAigFAVgDQAUgDABAAQABAAAJABQAJACAMAEg");
	this.shape_54.setTransform(7.8,47.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#589319").s().p("AgoHuQhLgKgigRQghgSABgTQAAgKAJgfIAWhPQAMguAKg4QAKg3ABg4QABg5gLguQgLgwgOgjQgPgkgLgTIgMgUIgEgVQgDgTgEggQgDgfgBgkQAAgkAFghQAFgiAOgXQAOgXAagGQAngIAogHIBIgLIA3gIIAVgDIAKABQAJACAMAEQANAEAKAJQALAIACAPQADAUgFAMQgEAMgGAGIgGAFIgPGhIAJAJQAIAJAFANQAGANgHAOQgIAOgFAZQgFAaAAArQAAAqAJBAIAGAIQAGAGALAIQALAHAPACQAPACAFAKQAFAJAAAJIgBAKQAAgBgMgCQgLgCgTAHQgSAIgWAaIgeAoQgOATgRAOQgRAOgZAGQgPAEgRAAQgNAAgPgCg");
	this.shape_55.setTransform(7.8,47.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("ABOA9QgaALgxAKQgwAJhOAEQAAgBABgQQACgQAGgYQAFgZALgYQAKgaARgVQARgVAZgIQApgNAjANQAjANAUAhQAVAgABAqQAAAAgJAIQgKAIgbAMg");
	this.shape_56.setTransform(31.8,90.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1F3263").s().p("Ah6BOQACgQAGgYQAFgZALgYQAKgaARgVQARgVAZgIQApgNAjANQAjANAUAhQAVAgABAqIgJAIQgKAIgbAMQgaALgxAKQgwAJhOAEIABgRg");
	this.shape_57.setTransform(31.8,90.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#3A0B0B").ss(1,1,1).p("AC/AKIh1BUQgBAAgdACQgdACgvAAQgwAAg6gEQgqgEgJgUQgKgVAOgcQANgZAbgYQAcgZAfgLQAZgIAmgKQAlgJApgEQAqgFAiAIQAjAHARAYQARAZgJAug");
	this.shape_58.setTransform(11.9,90.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#72461E").s().p("AiKBeQgqgEgJgUQgKgVAOgcQANgZAbgYQAcgZAfgLQAZgIAmgKQAlgJApgEQAqgFAiAIQAjAHARAYQARAZgJAuIh1BUIgeACQgdACgvAAQgwAAg6gEg");
	this.shape_59.setTransform(11.9,90.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("ADGAOQgiALg8AMQg8ANhPAFQhRAFhegMQgBAAgGgHQgHgGgFgLQgEgLAEgNQAFgMAWgNQAPgJAigGQAhgFAsgEQArgDArgCQAtgBAnAAQAmgBAYABQAXAAABAAIA0ANIAAAsQgBABghALg");
	this.shape_60.setTransform(21.1,98.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111E3D").s().p("AjSAwIgHgHQgHgGgFgLQgEgLAEgNQAFgMAWgNQAPgJAigGQAhgFAsgEQArgDArgCIBUgBIA+AAIAYAAIA0ANIAAAsQgBABghALQgiALg8AMQg8ANhPAFQgYABgaAAQg7AAhCgIg");
	this.shape_61.setTransform(21.1,98.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5B3516").s().p("ACeDeQgGAAgBgEIgZhfIgBgCIgCgBQi7hNgZgrQgeg1hEhsIAig8QALAgAUBDQAUA7ASAgQBTBTBgAmQAnAQAOALQAXATAPAmQAGASgMAaQgKAEgIAAIgEAAg");
	this.shape_62.setTransform(32.8,-41.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#3A0B0B").ss(1,1,1).p("AgogmIAsAdQA0AhAdAYIBTBIQA+A/gPAgQgNAZglARQgkAQgFgSIgZheQi9hNgagvIhkiiIBSiLg");
	this.shape_63.setTransform(35.1,-44.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#72461E").s().p("AB8D/IgZheQi9hNgagvIhkiiIBSiLIBeDiIAsAdQA0AhAdAYIBTBIQA+A/gPAgQgNAZglARQgRAIgKAAQgMAAgCgKg");
	this.shape_64.setTransform(35.1,-44.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3A0B0B").s().p("AACFfQgIgLgCgMQgCgMACgIIABgKIgNgGIgGADQgEADgLAAQgLgBgSgLQgTgMgFgQQgEgQABgMIADgOIgNgIIgJAHQgHAHgNAGQgNAGgRABQgQACgSgJQgOgIgJgOQgIgPAAgTQAAgOAGgPQAGgPANgMQAOgMAXgEIANgDIgIgKIgGgJQgFgIgBgLQAAgJAIgHQAMgKAWgEIgBgQQghABgUgFQgVgGgHgJQgGgJACgEQAFgHALgDQALgDAIAAIABgQIgHgDQgHgDgIgIQgHgIgEgOQgFgOAFgWQABgGADgGQADgGAEgBQAHgBAJAHQAJAHAJAKQAKAKAGAKIAOgIQgBgBgCgLQgDgLAHgLQALgPAlACIAWACIgQgPIgLgNQgKgKgMgSQgMgSgJgVQgJgWAAgXQABgXAPgVQALgPAKgKQgPAkABAmQABAlAUAmQAeApAoAZQAlAaAyABQgVAUgNAXQgOAXgCAXQgBAXALASQAFAJALAAQAMAAAOgEQANgFAOgCQANgDALAFQATAHACAJQABAIgIAJQgJAJgMALQgNAKgKANQgJANgBAQQAogVAegEQAfgDAYALQAZALASAVQgMgKgHgHIgNAJQAIALAIASQAJASAAAUIgBAQQgHAWgEAGIgFAGIgLgDIgHgBIAKAPQAFAIAHAPQAGAQgBAOQAAAFgEADQgGAEgIAAIgLAAQgCABgHgHQgIgHgEgYQgEgSgKgOQgKgOgMgJQgMgIgIABQgLABgBALIAAACIgEAAIgEAAIgRgBQgKAAgIAHQgHAHgEAJQgDAKgBAJQgHABgFAGQgHAIAAANQAAAUAPAcIgIAFQgEADgHAAQgJAAgHgIg");
	this.shape_65.setTransform(-39.1,-145.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("Am7CNQgJAAgLgBQgUAAgSgGQgTgFgJgNQgIgNAEgIQAFgIAJgDQAKgEAIgBQAJgBABAAQgBAAgIgEQgHgDgKgJQgJgJgFgQQgFgRAFgWQAFgUAJgEQAJgEAKAGQALAGAKAKQAJAIAGAIQAGAIABABQgBgBgCgJQgDgHADgMQACgMANgJQAOgIAfACQgBAAgKgLQgKgLgNgSQgNgTgJgXQgKgXABgZQAAgaARgYQAVgdATgJQASgJAOADQAOACAIAGQAIAFAAABQAAgBADgNQAEgOALgTQALgTAWgQQAXgOAQABQAQACAJAGQAIAHABABQgBgBADgQQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAGAGQAFAEACABQgBgBAAgDQAAgEAIgHQAJgHAagIQAbgGAMAFQAJAGADAIQADAGAAACQAAgCAGgKQAHgMAQgQQAQgQAdgNQAVgJAMAFQANAEAFAKQAGALACAJQABAJAAAAQgBABAHABQAHACAUAAQAUgBAogGQAYgDAMAJQANAJADAPQAEAQgBAQQgBAQgDALQgCALgBABQABgBALgIQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMQgCAKAAABQABgBAGgGQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAEAOgDAKQgDAJgFAFQgEAEgBAAQABAAALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgNgGQgMgGgBAAQAAAAgKAGQgKAHgQAGQgQAGgTAAQgTABgSgLQgBAAgLAJQgKAIgQAIQgQAIgQAAQgPAAgKgEQgKgFgFgEQgFgEAAgBQAAABgJAMQgJAMgPARQgPAQgTANQgTANgTABQgZABgMgGQgLgGgDgHQgCgGAAgBQgBACgEAPQgFAQgMATQgLAVgUAOQgTANgKADQgMADgFgBQgEgBgBgBQAAABADAGQADAIADALQACALgDALQgDALgFADQgFADgEgBQgBAAgBAAQADACAJAEQAMAGAOAKQAQALALANQAKANgEANQgEAOAAASQAAARAIAPQAIAQARAIQASAIAdgEQAAAAgFAJQgEAJgKAJQgKAJgQAAQgRgBgKgLQgKgLgEgLQgDgGgBgCQABACABADQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgCgKQAAABAAAFQAAAGgCAHQgCAGgFACQgFACgKgIQgQgNgHgHQgBgCgBgBQgGgHABAAQABAAAGAKQACACABADQAKAPAIAWQAHAWgFAXQgGAXgFAIQgGAIgDABQgEAAAAAAQAAAAAFAJQAFAKAFANQAEANgBANQgCAMgJADQgJAEgJAAQgJAAgBgBQAAABgFgDQgGgDgGgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgIAAQgIAAgRgBQgMAAgGAKQgGAJgCAKQgCAKAAAAQAAAAgFACQgFACgEAHQgEAGACAPQACAPAOAaQAAABgIAFQgHAGgMABQgLACgNgMQgLgMgDgOQgCgOACgKQABgIABgCQgBABgEAEQgGAEgNAAQgOAAgWgNQgWgOgFgSQgFgTACgNQACgNABgBQgBAAgIAGQgIAHgOAHQgOAHgTACQgSABgVgJQgUgLgJgVQgIgVADgXQAEgYAQgSQARgTAfgGQgBgBgFgJQgGgJgBgNQgCgMAMgLQAMgLAQgDQAEgBAEgBQAIAAAHgBQAOgBABAAQgBgBgLABQgIAAgKACgAATEgIgBgD");
	this.shape_66.setTransform(-8.6,-157.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#490F0E").s().p("Ak0HcQgLgMgCgOQgDgOACgKIADgKIgGAFQgGAEgNAAQgOAAgWgNQgWgOgFgSQgFgTACgNIADgOIgJAGQgHAHgPAHQgOAHgTACQgSABgUgJQgVgLgJgVQgIgVAEgXQADgYAQgSQARgTAfgGIgGgKQgFgJgCgNQgCgMAMgLQAMgLAQgDIAIgCIAPgBIAPgBIgMAAQgHAAgLACIgTgBQgVAAgSgGQgTgFgIgNQgIgNADgIQAFgIAKgDQAJgEAJgBIAJgBIgIgEQgIgDgJgJQgJgJgGgQQgEgRAEgWQAGgUAIgEQAJgEAKAGQALAGAKAKIAPAQIAHAJIgDgKQgCgHACgMQACgMANgJQAOgIAfACIgKgLQgLgLgNgSQgNgTgJgXQgJgXAAgZQAAgaARgYQAVgdATgJQASgJAPADQAOACAHAGIAIAGIADgOQAEgOALgTQALgTAXgQQAWgOAQABQARACAIAGIAJAIIACgRQADgQALgUQAKgVAWgOQARgKAPABQAPAAAMAGQAMAGAHAGIAGAFIgBgEQAAgEAIgHQAJgHAagIQAbgGAMAFQAKAGACAIIADAIIAGgMQAHgMARgQQAQgQAcgNQAVgJAMAFQANAEAFAKQAGALACAJIABAJIAGACQAHACAUAAQAVgBAogGQAXgDANAJQAMAJADAPQAFAQgCAQQgBAQgDALIgCAMIgBAAIABAAIALgJQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMIgCALIAHgHQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAEAOgDAKQgCAJgGAFIgEAEIALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgMgGIgOgGIgKAGQgKAHgQAGQgQAGgTAAQgSABgTgLIgMAJQgKAIgQAIQgQAIgPAAQgPAAgKgEQgKgFgGgEIgEgFIgKANQgJAMgPARQgPAQgTANQgTANgTABQgZABgLgGQgMgGgDgHIgCgHIgFARQgFAQgLATQgMAVgUAOQgTANgKADQgLADgGgBIgFgCIADAHQADAIADALQACALgDALQgCALgGADQgEADgFgBIgCAAIAMAGQAMAGAPAKQAPALALANQALANgFANQgEAOABASQgBARAJAPQAHAQARAIQASAIAdgEIgFAJQgEAJgJAJQgLAJgQAAQgRgBgJgLQgLgLgEgLIgDgIIgBgDIABADIABAFQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgJgNQgKgOgFgOQgGgOgCgKIgBgKIAAAGQAAAGgCAHQgCAGgFACQgFACgLgIIgWgUIgIgKIAAAAIAFAHIADADIACAFQALAPAHAWQAIAWgGAXQgFAXgGAIQgFAIgEABIgEAAIAFAJQAFAKAFANQAFANgBANQgDAMgJADQgJAEgJAAIgKgBIgFgCQgGgDgGgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgHAAIgagBQgMAAgGAKQgGAJgCAKIgBAKIgGACQgFACgEAHQgEAGACAPQADAPAOAaIgIAGQgIAGgLABIgDABQgKAAgMgLgAhiDwIgFgHIAAAAIAIAKIgDgDgAm7CNIAAAAgAmpCLIAMAAIgPABIgPABQALgCAHAAg");
	this.shape_67.setTransform(-8.6,-157.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgDAAQAAgDABgDQAAAAABgBQAAgBABAAQAAAAAAgBQAAAAAAAAQAFABAAAIQAAAJgFABQgDgBAAgJg");
	this.shape_68.setTransform(35.3,-143);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGANQgCgFAAgIQAAgHADgFQADgGACAAQAEABADAFQACAFAAAHQAAAIgDAFQgDAGgDAAQgDAAgDgGg");
	this.shape_69.setTransform(25.8,-140.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgEANQgCgGAAgHQAAgHACgFQADgFABAAQADAAACAFQACAGAAAGQAAAHgCAGQgCAFgDAAQgBAAgDgFg");
	this.shape_70.setTransform(35.4,-141.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#222266").s().p("AgLAWQgFgJAAgNQAAgMAFgJQAFgJAGAAQAHAAAFAJQAFAJAAAMQAAANgFAJQgFAIgHABQgGgBgFgIg");
	this.shape_71.setTransform(34.5,-142.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#222266").s().p("AgMAZQgGgKAAgPQAAgOAGgLQAGgJAGgBQAIABAGAJQAFALAAAOQAAAPgFAKQgGALgIAAQgHAAgFgLg");
	this.shape_72.setTransform(25,-140.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#3A0B0B").ss(1,1,1).p("Ah4hUQAAAAAJgLQAIgLAPgLQAQgLAWgBQASAAAbACQAaADAcAGQAdAIAUAPQAUAPACAZQABAVgLAUQgMATgTATQgSAUgSASQgTATgMARQgMARAAAP");
	this.shape_73.setTransform(34.3,-122.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#72461E").s().p("Ah4hUIAJgLQAIgLAPgLQAQgKAWgCQASABAbACQAaABAcAIQAdAHAUAPQAUAOACAaQABAVgLAUQgMATgTATIgkAnQgTASgMARQgMARAAAOg");
	this.shape_74.setTransform(34.3,-122.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#3A0B0B").ss(1,1,1).p("AAYhEQATAXAHAlQAEAXgDAWQgDAVgKAOQgIAOgPADQgTADgTgXQgTgWgHgmQgEgXADgWQADgVAJgOQAJgOAOgDQAUgCATAWg");
	this.shape_75.setTransform(22.1,-142.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgXBFQgTgWgHgnQgEgXADgVQADgVAKgOQAIgOAOgDQAUgDATAXQATAWAHAmQAEAYgDAUQgDAWgKAOQgIAOgOACIgGABQgQAAgRgUg");
	this.shape_76.setTransform(22.1,-142.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AAfg+QAAAAgMAFQgLAGgPANQgRAMgSAVQgRATgMAfQAAABAEAEQAEAFAKAEQAKAFARgBQAAAAAGgMQAGgMANgPQAKgQATgLQASgNAagDQAAgBgEgKQgFgLgJgKQgJgKgOgBg");
	this.shape_77.setTransform(12.2,-155.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4C270E").s().p("Ag1A7QgKgEgEgFIgEgFQAMgfARgTQASgVARgMQAOgNAMgGIAMgFQAOABAJAKQAJAKAEALIAFALQgZADgTANQgTALgLAQQgMAPgGAMIgGAMIgDAAQgPAAgJgEg");
	this.shape_78.setTransform(12.2,-155.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B28222").s().p("Ag0AiQAWgVAUgPQATgQARgLIAZgQQACARABARQgmAZggAgQgWgLgOgBg");
	this.shape_79.setTransform(8.1,-73.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgdAQIA7gf");
	this.shape_80.setTransform(1.7,-15.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgZARQABAAALgIQAKgIALgGQANgJAFgC");
	this.shape_81.setTransform(9,-4.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgcAZQABgBALgLQAMgLAMgKQAOgMAIgE");
	this.shape_82.setTransform(5.4,-5.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgeAZQABAAALgMQAMgMAMgKQAOgNAKgC");
	this.shape_83.setTransform(0.8,-8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("ADSh1QgigDgnALQgmAMgsAQQgCABgBABQgWAFgUgBQgRgDgagBQgagCgaAJQgQAGgQAHQgQAHgQAFQgMAFgOAAQgHgBgJgEQgKgDgFABQgGABAGAOQAEAJAMAIQAMAJAKADQAMADANgEQgRAHgOALQgOAKgIANQgKAOADALQAEAMALAFQALAGAPgEQAAABgDAGQgEAGAAAHQAAAHAHADQAJADALgCQALgDAIgEQAGgCACgBQgBAAgCACQgCADABADQABADAKACQAKABAHgCQAIgDAEgDQAEgDAAAAQAAAAADAEQACAEAGAEQAGAEAKAAQAOAAAPgKQAPgJAMgMQANgNAKgJQAKgJANgHQANgHAOgDQAYACARADQARACAPACQAPACAUAA");
	this.shape_84.setTransform(14,-13.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#72461E").s().p("AhABzQgGgEgCgEIgDgEIgEADQgEADgIADQgHACgKgBQgKgCgBgDQgBgDACgDIADgCIgIADQgIAEgLADQgLACgJgDQgHgDAAgHQAAgHAEgGIADgHQgPAEgLgGQgLgFgEgMQgDgLAKgOQAIgNAOgKQAOgLARgHQgNAEgMgDQgKgDgMgJQgMgIgEgJQgGgOAGgBQAFgBAKADQAJAEAHABQAOAAAMgFIAggMIAggNQAagJAaACQAaABARADQAUABAWgFIADgCQAsgQAmgMQAngLAiADIgVCoQgUAAgPgCIgggEIgpgFQgOADgNAHQgNAHgKAJIgXAWQgMAMgPAJQgPAKgOAAQgKAAgGgEg");
	this.shape_85.setTransform(14,-13.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#725107").s().p("AAHA1IgDgQIgEgkIgHgjIgDgQIAKgDQAAABADAcQAFAZADA0g");
	this.shape_86.setTransform(-2.2,-60.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5B3516").s().p("AgkCoIgBgBIgCABIgLACQgLABgOgCQgOgDgLgOQgKgLghgcIg3gxQgegbgdgfQgdgegYgiQgXgigMghQABgFAIgMQAIgMAPgQQAZA2AnA2QAnA1AtAqQAtArAsAZQArAaAhgCQA3gFA/gMQBAgNA8gZQA7gYAtgoIgDAHQgMAfgVATQgWATgUAIQgVAKgKABIAAgDIgGADQgNAGghANQghAOgqANQgpAOgoAHQgUADgPAAQgQAAgOgDg");
	this.shape_87.setTransform(-1.8,-20.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#3A0B0B").ss(1,1,1).p("AEBiTQgNgLgJADQgJAEgFAMQgEAMACANQABANAJAJQgGAMgDAOQgCAOABAOQABARgGAKQgFAKgGACQgGAEAAAAQgQAHgXgBQgXgBgcgEQgbgFgegBQgggDgRAAQgPAAgHABIgHACIiJjSQg5AJglATQglAUgVAUQgVAVgJAPQgIAPAAABQANAlAaAlQAaAiAhAiQAgAiAgAcQAfAcAXAUQAXAUAIAJQAMAPAQADQAPADALgCQAMgCABAAQAbAHAmgHQAngGAqgNQAqgOAhgNQAigOAPgHIAAACQABAAANgEQAOgEATgJQAUgKATgTQASgSALgdQABAAAEgOQAEgOACgUQACgRgFgPQgGgOgCgFQgCgEgBgBQAAgDgCgJQgCgJgFgJQgFgKgIgEQgJgDgIACQgJACgGADQgEACgBABQAEgGgFgLQgEgMgIgLQgIgMgEgEg");
	this.shape_88.setTransform(-1.4,-23.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#72461E").s().p("AgpDQIgNACQgLACgPgDQgQgDgMgPQgIgJgXgUQgXgUgfgcQgggcgggiQghgigagiQgaglgNglIAIgQQAJgPAVgVQAVgUAlgUQAlgTA5gJICJDSIAHgCQAHgBAPAAQARAAAgADIA5AGQAcAEAXABQAXABAQgHIAGgEQAGgCAFgKQAGgKgBgRQgBgOACgOQADgOAGgMQgJgJgBgNQgCgNAEgMQAFgMAJgEQAJgDANALQAEAEAIAMQAIALAEAMQAFAMgEAFIAFgDQAGgDAJgCQAIgCAJADQAIAEAFAKQAFAJACAJIACAMIADAFIAIATQAFAPgCARQgCAUgEAOIgFAOQgLAdgSASQgTATgUAKQgTAJgOAEIgOAEIAAgCIgxAVQghANgqAOQgqANgnAGQgTADgPAAQgRAAgOgDg");
	this.shape_89.setTransform(-1.4,-23.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#725107").ss(1,1,1).p("ACWB5QgBgDgCgEQgHgPgKgYQgKgYgKgaQgKgZgIgWQgHgXgBgOAAYjbQgBAAgUAJQgSAKgcATQgdAUgbAeQgbAfgPArQgQAqAGA3QAAAAAGAaQAGAaARApQARApAfAtQAAAAAPgPQAOgPAZgUQAXgUAegSQAfgQAhgFQAagDANAFQAKAEAEAFQAEAIAAABQAAgBgDgGQAAgBgBgB");
	this.shape_90.setTransform(-30.5,-53.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#AF800B").s().p("Ah5CFQgQgpgGgaIgGgbQgGg2APgqQAQgrAbgfQAbgeAcgTQAdgUASgKIAUgJIA8CgQACAOAHAXIARAvIAVAyIAQAnIAEAHQgEgFgLgEQgMgFgaACQghAFgfARQgfASgXAUQgYAUgPAPIgPAPQgfgtgRgpg");
	this.shape_91.setTransform(-30.6,-53.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#725107").ss(1,1,1).p("ABRhPQgdgFgmgCQgjgCgkgBQgjAAgXAAQgXABgBAAQAAAAAEASQAFASAKAcQAKAZASAfQARAfAaAbIBVg8IBaAoQAAgBAEgQQAFgRADgXQADgWgCgWQgDgWgNgMQgMgJgegFg");
	this.shape_92.setTransform(-6.6,-68.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AF800B").s().p("AhcAgQgSgfgKgZQgKgcgFgSIgEgSIAYgBIA6AAQAkABAjACQAmACAdAFQAeAFAMAJQANAMADAWQACAWgDAWQgDAXgFARIgEARIhagoIhVA8QgagbgRgfg");
	this.shape_93.setTransform(-6.6,-68.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A37308").s().p("Ag9G4QgxgPgagNQgZgNAAgBQgKg1AEhHQAEhIAPhRQAOhRAUhPQAUhSAVhIIAmiAIAQgzIALgjQAHgVAYgLQAbgMAmgFQAmgFArABQhNBdg3BuQg1BtgaB0QgaByAKBuQAKBvA0BfQAWAmAgAZQhGgGgxgPg");
	this.shape_94.setTransform(-30.3,-31.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#725107").ss(1,1,1).p("AjFlBQgRA2gVBJQgVBJgUBRQgUBQgOBRQgPBRgEBIQgEBHAKA1QAAAAAYANQAZANAvAOQAvAPBEAGQBEAHBVgMQBXgMA1gHQA1gHAbgDQAagDAJgBIAJAAQAAgBAEgdQAEgcAGgzQAFgyAEhAQAEhBgBhJQgBhGgHhJQgIhKgRhDQAAAAgCgUQgCgTgGgdQgGgdgLgfQgLgfgSgXQgSgXgagIQgbgHgqgHQgrgGgxgCQgugDgtAEQgtADgfAMQggANgIAXQgEANgHAWQgHAWgJAdQAPgCAOgCQAPgBAGAGQAFAKgBAMQAAAAAAABIAAAAIgCALIgCAEQgBADgCADQgCADgCADAiTkaQgBADgCADQgCADgCADQgFAGgIAE");
	this.shape_95.setTransform(-14.1,-31.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AF800B").s().p("AhwHLQhEgGgvgPQgvgOgZgNIgYgNQgKg1AEhHQAEhIAPhRQAOhRAUhQQAUhRAVhJIAmh/IAdgEIABAAIAFAAIAAAAIAAAAQAKAAAFAFQAFAIAAAKIgBAEIAAABIAAAAIgCALIgCAEIgDAGIgEAGQgFAGgIAEQAIgEAFgGIAEgGIADgGIACgEIACgLIAAAAIAAgBIABgEQAAgKgFgIQgFgFgKAAIAAAAIAAAAIgFAAIgBAAIgdAEIAQgzIALgjQAIgXAggNQAfgMAtgDQAtgEAuADQAxACArAGQAqAHAbAHQAaAIASAXQASAXALAfQALAfAGAdQAGAdACATIACAUQARBDAIBKQAHBJABBGQABBJgEBBQgEBAgFAyIgKBPIgEAeIgJAAIgjAEIhQAKIiMATQg1AHgwAAQgbAAgZgCgAiWkUIADgGIgDAGIgEAGIAEgGg");
	this.shape_96.setTransform(-14.1,-31.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#725107").ss(1,1,1).p("ACBnDQgqgGgxgCQgvgDgtAEQgsADggAMQgfANgIAXQgIAZgRA2QgRA1gVBJQgVBJgVBTQgUBQgPBTQgPBSgEBJQgFBIAKA2QAAAAAZANQAYANAvAOQAvAPBEAGQBEAHBWgMQBXgMA0gHQA1gHAbgDQAbgDAJgBIAIAAQAAgBAFgdQAEgcAFgzQAFgyAEhAQAEhBgBhJQAAhGgIhJQgHhKgRhDQAAAAgCgUQgDgTgGgdQgGgdgLgfQgLgfgSgXQgRgXgagIQgbgHgrgHg");
	this.shape_97.setTransform(-14.2,-31.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#AF800B").s().p("AhwHLQhEgGgvgPQgvgOgYgNIgZgNQgKg2AFhIQAEhJAPhSQAPhTAUhQQAVhTAVhJIAmh+IAZhPQAIgXAfgNQAggMAsgDQAtgEAvADQAxACAqAGQArAHAbAHQAaAIARAXQASAXALAfQALAfAGAdQAGAdADATIACAUQARBDAHBKQAIBJAABGQABBJgEBBQgEBAgFAyIgJBPIgFAeIgIAAIgkAEIhQAKIiLATQg2AHgwAAQgbAAgZgCg");
	this.shape_98.setTransform(-14.2,-31.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#365B0A").s().p("AgcAEIAHgEIAQgGIAJgFQAKgDAFAFQAGAFAEAFIgJgBQgFgCgFABQgKABgGADIgRAKg");
	this.shape_99.setTransform(31.4,92.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3B5E0D").s().p("AhHBLQAKgHAPgNQAPgMAQgRQAPgQAKgSQAQgcAQgQQAQgQAMgGIANgHIgLAJQgJAIgPARQgPARgOAaQgMATgPAQQgQAQgRALQgQALgMAGIgNAHIALgHg");
	this.shape_100.setTransform(-5.9,23.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#53821C").s().p("ADTH/QgLgGgFgKIgGgNIAEgJIAFgPIACgHIAAgBIgEgkIgLhNIgOhgQgIgzgJgrQgJgsgJgaQgJgagXgmQgXgkgcgqIg2hPIgvg+IgVgcIgBAAIgNgHIgcgQIgcgPIgNgHQgqgdgXgjQgYgkgKgjQgKgjgCgbQgDgbABgLQABADAPACIAnAFIAvAFIAqAHQASADAFAFQAUAXALAeIAWA8QAKAeAPASQAPASAYgDQAZgCArggQgWASgSAXQgSAYgIAWQgIAWAIAMQAoAhAWAlQAWAlAPAoQAOAoASAnQASApAfAmQAaAjAJAmQAKAmABAqQABApgCArQgBArADArQAEArAOArQgPAOgNAFQgHADgGAAQgIAAgGgEg");
	this.shape_101.setTransform(-15.6,56.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6DA829").s().p("AhAGEQAjgmAkglQAmgkAegqIg1gWQgWgJgdgEIANgIIAOgIQAEgFABgFQAXgfAAgsQgBgsgRg2QgPg0gZg7Igyh5QgZg+gSg9QgRg8gCg4IAnAHIAQACIgCARIgDAVIgBALIAAABIAFAaQAFAZAKAnQAKAnAPAsQAPArAUAnQAPAeAOAvQAPAvANAzIAWBiIAPBMIAGAfIAAABIABABIAJALIASAWQALAMAJAJQAJAKACAOQACAPgBAIIgQgBIgagBIgYgCIgLAAIgBAAQgeALgaASQgXARgWAUIgpAnIgYAZQgLALgKAHQAVgvAjgkg");
	this.shape_102.setTransform(21.7,60.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#365B0A").ss(1,1,1).p("AAVorQgcAAggAMQgfAMgfAQQgfAQgcAKQg8ATg5gBQg5gBg+gLQgCAuALAvQAMAwAaAoQAbAoApAXQABABAMAGQAMAHAQAJQAQAJAMAGQAMAHAAAAQABABASAXQASAYAcAlQAbAmAeAqQAdAoAYAnQAXAnAHAaQAHAWAIAjQAHAjAHAqQAIAqAGAqQAGApAFAjQAEAjADAVQADAVAAABIgLAgQAAABADAHQACAGAHAJQAGAIALAEQALAEAQgEQAQgGATgUQAUgTAZgZQAYgZAfgXQAegXAlgOIBQAFQABgBAAgKQABgLgDgMQgCgNgJgJQgKgIgKgNQgLgMgIgKQgHgKgBAAQAAgBgEgVQgDgVgHgiQgHgjgKgqQgKgqgLgsQgLgrgNgkQgNglgNgaQgmhJgYhOQgXhOgPhQQgGgjgLgkQgKgjgXgZQgXgZgpgDg");
	this.shape_103.setTransform(-3,53.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#589319").s().p("ABXIqQgLgEgGgIQgHgJgCgGIgDgIIALggIgDgWIgHg4IgLhMIgOhUQgHgqgHgjQgIgjgHgWQgHgagXgnQgYgngdgoIg5hQIgug9IgTgYIgMgHIgcgPIgcgQIgNgHQgpgXgbgoQgagogMgwQgLgvACguQA+ALA5ABQA5ABA8gTQAcgKAfgQQAfgQAfgMQAggMAcAAQApADAXAZQAXAZAKAjQALAkAGAjQAPBQAXBOQAYBOAmBJQANAaANAlQANAkALArIAVBWIARBNIAKA3IAEAWIAIAKIATAWQAKANAKAIQAJAJACANQADAMgBALIgBALIhQgFQglAOgeAXQgfAXgYAZIgtAsQgTAUgQAGQgJACgHAAQgGAAgFgCg");
	this.shape_104.setTransform(-3,53.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("ACCAUQABgOgDgRQgEgTgPgTQgPgTgigMQghgMg3ACIgQgCQguAigXAxQgXAuAKA4QA8gDBCgOQA/gOBBgdQAAAAACgNg");
	this.shape_105.setTransform(43.2,103.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1F3263").s().p("AhxgJQAXgxAugiIAQACQA3gCAhAMQAiAMAPATQAPATAEATQADARgBAOIgCANQhBAdg/AOQhCAOg8ADQgKg4AXgug");
	this.shape_106.setTransform(43.2,103.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#3A0B0B").ss(1,1,1).p("AC0hKQghgMg5ACIiTgRQgBABgRAKQgQALgaAQQgZARgaATQgbATgUAOQgUARgGALQAAAAgDAGQgEAHgBAMQgBAMAFAQQABABAcAEQAdAFAxADQAyAEA/gDQA+gDBGgOQBGgOBHgeQAAgBACgNQABgNgDgSQgEgTgPgTQgQgTghgMg");
	this.shape_107.setTransform(31.2,103.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#72461E").s().p("AiKBkQgxgDgdgFIgdgFQgFgQABgMQABgMAEgHIADgGQAGgLAUgRQAUgOAbgTIAzgkIAqgbIASgLICTARQA5gCAhAMQAhAMAQATQAPATAEATQADASgBANIgCAOQhHAehGAOQhGAOg+ADIg3ABQgfAAgbgCg");
	this.shape_108.setTransform(31.2,103.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(1,1,1).p("ADUg4InPA4IgDAuQAAABAgADQAfAEA1ACQA1ADBCgDQBAgDBIgOQBHgNBDgaQAAgBAAgLQgBgMgJgNQgJgNgYgGg");
	this.shape_109.setTransform(32.1,110.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1F3263").s().p("AiKA4Qg1gCgfgEIgggEIADguIHPg4QAYAGAJANQAJANABAMIAAAMQhDAahHANQhIAOhAADQgkABggAAIgzgBg");
	this.shape_110.setTransform(32.1,110.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#487013").s().p("AgJAIQgZgCgXgHIAFgJIAQACIAlAEIAmAEIASAAIAAAKIgVABIgGAAQgSAAgVgDg");
	this.shape_111.setTransform(-53.9,69.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#487013").s().p("Al0EXIghgVIBbhIQAugkAygdQAygdA6gQIABgBIAYgbQANgPAHgCQAHgCAAABIADACIACgCQAqgcAkgkQAmgnAigpQAigqAbgmQAagmASgbIAWgmIAfAUQAUAOAaAXQAaAWAYAdQAYAdAQAjQAPAjAAAnQAAAogWAoIgEAGQgNAWgPATQgEAFgOgMQgOgMgRgVIglgqIgignQgOgRgFgDQgbgLgbAKQgZAJgWAUQgWAVgOATQgRAagOASQgOASgRALQgNAKgRAGQgRAHgaAEIg9ALQgfAGgcAKQgcAJgaATQgYASgRAYQgRAXgPAaQgPAZgSAYQgQgIgRgLg");
	this.shape_112.setTransform(-46.1,39.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#53821C").s().p("AlXEyQgRgIgVgjQgPgZAOgaQAOgZAggZQAggYAogVQAngUAlgPQAlgNAYgGIACAAIAXgbQAOgPAHgCQAHgCAAABIADABIACgBQApgbAlgmQAngnAhgpQAigqAbglQAagmARgcIAXgmIAeAUQAVAOAaAXQAaAWAYAdQAYAeAPAiQAQAkAAAnQAAAngXApIgDAFQgWAnggAgQgigagWgmQgWgjgQgsQgFAYgMAbQgMAcgSAYQgTAYgYALQgXAJgZgDQgZgDgZgHQgZgGgVAAQALAQAMAPQANAOAIARQgTgCgVgHQgYgFgVAAQgWAAgMAPIASAaQAJAMANALQgWALgUgDQgUgDgUgKQgTgIgUgFQgTgFgUAIQgSAJgUAbQgIAMgJAUQgJATgLASQgLASgOAIQgHAEgHAAQgIAAgIgEg");
	this.shape_113.setTransform(-44.6,40.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6DA829").s().p("AinDHQgKgWgUgSQgVgTgdgOQgcgOgfgLQBcATBbgQQBagRBRgtQBTgtBChDQBChDAshRQgBAlgVAoIgEAGQgbAvgnAlQgoAlgtAcQguAdgsAWQgrAVgkAOQglAOgWAIIgYAGIgEABIAAALIABATIAAAMIgGAKIgMAVIgKARQgEgIgKgMg");
	this.shape_114.setTransform(-36.3,56.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#365B0A").ss(1,1,1).p("ADqlVQgTgLgBAAQAAAAgPAZQgOAYgbAnQgaAmgjAtQgjAtgqAqQgnAqgtAfQAAAAgEgBQgEAAgHAEQgIAEgLAMQgQARgDAEQgEAEABgBQgBAAgUAFQgUAGghANQghANgmAWQglAVglAfQgkAggbAqQAAAAAKALQAKAKASAOQASAOAbALQAaALAiACQABAAATACQATACAbADQAbADAYAFQAZAFAMAGQAOAJAKALQAJALAEAIQAFAIAAAAIAhg6IgBgnQAAAAAXgGQAVgHAmgPQAlgOAugWQAugWAugeQAugfAognQApgnAaguQAZgwgCgrQgBgrgTgmQgTglgcgfQgcgegbgWQgcgWgSgMg");
	this.shape_115.setTransform(-45.3,44.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#589319").s().p("AhEFZQgEgIgJgLQgKgLgOgJQgMgGgZgFQgYgFgbgDIgugFIgUgCQgigCgagLQgbgLgSgOQgSgOgKgKIgKgLQAbgqAkggQAlgfAlgVQAmgWAhgNQAhgNAUgGIAVgFIADgDIATgVQALgMAIgEQAHgEAEAAIAEABQAtgfAngqQAqgqAjgtQAjgtAagmQAbgnAOgYIAPgZIAUALQASAMAcAWQAbAWAcAeQAcAfATAlQATAmABArQACArgZAwQgaAugpAnQgoAnguAfQguAeguAWQguAWglAOQgmAPgVAHIgXAGIABAnIghA6IgFgIg");
	this.shape_116.setTransform(-45.3,44.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("ABegxQgbgag0gaIgBgDQgwAFgoAbQgnAcgWAsQAzAhA7AcQA5AdBBAPQABAAAIgJQAIgIAJgOQAIgPAEgTQADgUgIgVQgJgXgbgZg");
	this.shape_117.setTransform(-54.5,89.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1F3263").s().p("AgZA9Qg7gdgzggQAWgtAngbQAogcAwgEIABADQA0AaAbAZQAbAZAJAYQAIAVgDATQgEAUgIAPQgJAOgIAIIgJAIQhBgPg5gcg");
	this.shape_118.setTransform(-54.5,89.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#3A0B0B").ss(1,1,1).p("ADHAPQgbgXgzgaQgBgBgIgKQgIgLgKgPQgLgPgHgMQAAAAgTgIQgSgIgegMQgcgLgkgLQgjgLgigHQgigGgaACQgBAAgMAHQgMAGgOAMQgNAMgEAQQAAABAWAYQAXAYApAlQAoAkA4AoQA3ApBBAiQBCAiBKARQABAAAIgIQAIgIAJgOQAIgPAEgUQADgTgIgXQgJgXgbgag");
	this.shape_119.setTransform(-65,82.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#72461E").s().p("AA+B4QhBgig3gpQg4gogogkQgpglgXgYIgWgZQAEgQANgMQAOgMAMgGIANgHQAagCAiAGQAiAHAjALQAkALAcALIAwAUIATAIIASAbIASAaIAJALQAzAaAbAXQAbAaAJAXQAIAXgDATQgEAUgIAPQgJAOgIAIIgJAIQhKgRhCgig");
	this.shape_120.setTransform(-65,82.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("AD1B7Im8keQgBAAgIADQgJAEgLAHQgLAHgIAJQAAABAXAbQAYAbA0AsQA0AqBUA0QBIAtAwAXQAvAXAaAIQAaAHANgDQANgCAGgHQAIgJABgHQABgHgCgEQgCgEAAAAg");
	this.shape_121.setTransform(-67.6,86.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1F3263").s().p("AC1CfQgagIgvgXQgwgXhIgtQhUg0g0gqQg0gsgYgbIgXgcQAIgJALgHIAUgLIAJgDIG8EeIACAEQACAEgBAHQgBAHgIAJQgGAHgNACIgIABQgMAAgTgFg");
	this.shape_122.setTransform(-67.6,86.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#725107").ss(1,1,1).p("AhViOQABAAAPAGQAOAFAXARQAXASAXAhQAZAhAVA1IAaA1IiKBDg");
	this.shape_123.setTransform(17.4,-56.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#AF800B").s().p("AhViOIAPAGQAPAFAXARQAXASAXAhQAZAhAUA1IAbA1IiKBDg");
	this.shape_124.setTransform(17.4,-56.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#3A0B0B").ss(1,1,1).p("AgejTQABABAMASQALATARAeQATAdAUAjQAVAjASAiQASAfALAaQABABAHATQAIATAGAbQAFAcgFAZQgGAZgZANQgjAPgegMQgfgMgXgeQgagegVgpQgVgpgQgrQgQgpgKglQgLgmgFgXQgGgXAAAAg");
	this.shape_125.setTransform(25.5,-29.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#72461E").s().p("AAsDPQgfgMgXgeQgagegVgpQgVgpgQgrQgQgpgKglIgQg9IgGgXIBwg7IANATIAcAxQATAdAUAjIAnBFQASAfALAaIAIAUQAIATAGAbQAFAcgFAZQgGAZgZANQgTAIgTAAQgOAAgNgFg");
	this.shape_126.setTransform(25.5,-29.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("Am7CNQgJAAgLgBQgUAAgSgGQgTgFgJgNQgIgNAEgIQAFgIAJgDQAKgEAIgBQAJgBABAAQgBAAgIgEQgHgDgKgJQgJgJgFgQQgFgRAFgWQAFgUAJgEQAJgEAKAGQALAGAKAKQAJAIAGAIQAGAIABABQgBgBgCgJQgDgHADgMQACgMANgJQAOgIAfACQgBAAgKgLQgKgLgNgSQgNgTgJgXQgKgXABgZQAAgaARgYQAVgdATgJQASgJAOADQAOACAIAGQAIAFAAABQAAgBADgNQAEgOALgTQALgTAWgQQAXgOAQABQAQACAJAGQAIAHABABQgBgBADgQQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAGAGQAFAEACABQgBgBAAgDQAAgEAIgHQAJgHAagIQAbgGAMAFQAJAGADAIQADAGAAACQAAgCAGgKQAHgMAQgQQAQgQAdgNQAVgJAMAFQANAEAFAKQAGALACAJQABAJAAAAQgBABAHABQAHACAUAAQAUgBAogGQAYgDAMAJQANAJADAPQAEAQgBAQQgBAQgDALQgCALgBABQABgBALgIQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMQgCAKAAABQABgBAGgGQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAEAOgDAKQgDAJgFAFQgEAEgBAAQABAAALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgNgGQgMgGgBAAQAAAAgKAGQgKAHgQAGQgQAGgTAAQgTABgSgLQgBAAgLAJQgKAIgQAIQgQAIgQAAQgPAAgKgEQgKgFgFgEQgFgEAAgBQAAABgJAMQgJAMgPARQgPAQgTANQgTANgTABQgZABgMgGQgLgGgDgHQgCgGAAgBQgBACgEAPQgFAQgMATQgLAVgUAOQgTANgKADQgMADgFgBQgEgBgBgBQAAABADAGQADAIADALQACALgDALQgDALgFADQgFADgEgBQgBAAgBAAQADACAJAEQAMAGAOAKQAQALALANQAKANgEANQgEAOAAASQAAARAIAPQAIAQARAIQASAIAdgEQAAAAgFAJQgEAJgKAJQgKAJgQAAQgRgBgKgLQgKgLgEgLQgDgGgBgCIgBgDAhgDzQACACABADQAKAPAIAWQAHAWgFAXQgGAXgFAIQgGAIgDABQgEAAAAAAQAAAAAFAJQAFAKAFANQAEANgBANQgCAMgJADQgJAEgJAAQgJAAgBgBQAAABgFgDQgGgDgGgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgIAAQgIAAgRgBQgMAAgGAKQgGAJgCAKQgCAKAAAAQAAAAgFACQgFACgEAHQgEAGACAPQACAPAOAaQAAABgIAFQgHAGgMABQgLACgNgMQgLgMgDgOQgCgOACgKQABgIABgCQgBABgEAEQgGAEgNAAQgOAAgWgNQgWgOgFgSQgFgTACgNQACgNABgBQgBAAgIAGQgIAHgOAHQgOAHgTACQgSABgVgJQgUgLgJgVQgIgVADgXQAEgYAQgSQARgTAfgGQgBgBgFgJQgGgJgBgNQgCgMAMgLQAMgLAQgDQAEgBAEgBQAIAAAHgBQAOgBABAAQgBgBgLABQgIAAgKACAATEgQABACABADQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgCgKQAAABAAAFQAAAGgCAHQgCAGgFACQgFACgKgIQgQgNgHgHQgGgKgBAAQgBAAAGAHQABABABAC");
	this.shape_127.setTransform(-12.3,-159.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#490F0E").s().p("Ak0HcQgLgMgDgOQgCgOACgKIADgKIgGAFQgGAEgNAAQgOAAgWgNQgVgOgGgSQgFgTACgNIADgOIgJAGQgIAHgOAHQgOAHgSACQgTABgUgJQgVgLgJgVQgIgVAEgXQADgYAQgSQASgTAegGIgGgKQgGgJgBgNQgBgMALgLQAMgLAQgDIAIgCIAPgBIAPgBIgMAAQgIAAgKACIgTgBQgVAAgSgGQgSgFgKgNQgHgNADgIQAFgIAKgDQAJgEAJgBIAJgBIgIgEQgIgDgJgJQgJgJgGgQQgEgRAEgWQAGgUAIgEQAJgEALAGQAKAGAKAKIAQAQIAGAJIgDgKQgCgHACgMQACgMANgJQAOgIAfACIgKgLQgLgLgNgSQgNgTgJgXQgJgXAAgZQAAgaARgYQAVgdATgJQATgJAOADQAOACAHAGIAIAGIADgOQAEgOALgTQALgTAXgQQAWgOAQABQARACAIAGIAJAIIACgRQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAHAGIAGAFIgBgEQAAgEAIgHQAJgHAagIQAbgGAMAFQAKAGACAIIADAIIAGgMQAHgMARgQQAQgQAcgNQAVgJAMAFQANAEAFAKQAGALACAJIABAJIAGACQAHACAUAAQAVgBAogGQAXgDANAJQAMAJADAPQAFAQgCAQQgBAQgDALIgCAMIAAAAIAAAAIALgJQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMIgCALIAHgHQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAFAOgEAKQgCAJgGAFIgEAEIALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgMgGIgOgGIgKAGQgKAHgQAGQgQAGgTAAQgSABgTgLIgMAJQgKAIgQAIQgQAIgPAAQgQAAgJgEQgLgFgFgEIgEgFIgKANQgJAMgPARQgPAQgTANQgTANgTABQgZABgLgGQgMgGgDgHIgCgHIgFARQgFAQgLATQgMAVgUAOQgTANgKADQgLADgGgBIgFgCIADAHQADAIADALQACALgDALQgCALgGADQgEADgFgBIgCAAIAMAGQANAGANAKQARALAKANQAKANgEANQgEAOABASQAAARAIAPQAHAQARAIQASAIAdgEIgFAJQgEAJgKAJQgJAJgRAAQgRgBgJgLQgKgLgFgLIgDgIIgCgDIACADIABAFQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgBgKIAAAGQAAAGgCAHQgDAGgEACQgGACgKgIIgWgUIgIgKIAAAAIAFAHIADADIADAFQAKAPAHAWQAHAWgFAXQgFAXgGAIQgFAIgEABIgEAAIAFAJQAFAKAFANQAFANgCANQgCAMgJADQgJAEgJAAIgKgBIgFgCQgFgDgHgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgHAAIgagBQgMAAgGAKQgGAJgBAKIgCAKIgGACQgFACgEAHQgEAGACAPQADAPAOAaIgIAGQgIAGgLABIgDABQgKAAgMgLgAhiDwIgFgHIAAAAIAIAKIgDgDgAm7CNIAAAAgAmpCLIAMAAIgPABIgPABQAKgCAIAAg");
	this.shape_128.setTransform(-12.3,-159.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgEAAQAAgHAEgBQAFABAAAHQAAAIgFABQgEgBAAgIg");
	this.shape_129.setTransform(22.2,-143.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgGANQgCgGAAgHQAAgHADgGQADgFACAAQAEAAADAGQACAFAAAHQAAAIgDAFQgDAGgDAAQgDgBgDgFg");
	this.shape_130.setTransform(22.1,-142.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#222266").s().p("AgLAVQgFgIAAgNQAAgMAFgJQAFgIAGgBQAHABAFAIQAFAJAAAMQAAANgFAIQgFAKgHAAQgGAAgFgKg");
	this.shape_131.setTransform(30.8,-143.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#222266").s().p("AgMAaQgGgLAAgPQAAgOAGgKQAGgLAGAAQAIAAAGALQAFAKAAAOQAAAPgFALQgGAKgIAAQgHgBgFgJg");
	this.shape_132.setTransform(21.3,-142.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#3A0B0B").ss(1,1,1).p("Ah4hUQAAAAAJgLQAIgLAPgLQAQgLAWgBQASAAAbACQAaADAcAGQAdAIAUAPQAUAOACAaQABAUgLAVQgMATgTATQgSAUgSASQgTATgMARQgMARAAAP");
	this.shape_133.setTransform(30.6,-124.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#72461E").s().p("Ah4hTIAJgMQAIgLAPgLQAQgLAWAAQASAAAbABQAaADAcAGQAdAIAUAPQAUAPACAZQABAVgLAUQgMATgTATIgkAmQgTATgMARQgMARAAAPg");
	this.shape_134.setTransform(30.6,-124.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#3A0B0B").ss(1,1,1).p("AAYhEQASAXAIAlQAEAXgDAVQgDAWgKAOQgIAOgPADQgTACgTgWQgTgXgHglQgEgXADgWQADgVAJgOQAJgOAOgDQAUgCATAWg");
	this.shape_135.setTransform(18.4,-144.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgXBFQgTgXgHglQgEgXADgWQADgVAKgOQAIgOAOgCQAUgDATAWQASAXAIAmQAEAXgDAVQgDAVgKAOQgIAOgOADIgGAAQgQAAgRgUg");
	this.shape_136.setTransform(18.4,-144.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(1,1,1).p("AAfg+QgBAAgLAFQgLAGgQANQgQAMgSAVQgRATgMAfQAAABAEAEQAEAFAKAEQAKAFARgBQAAAAAGgMQAGgMAMgPQALgQATgLQASgNAagDQAAgBgEgKQgFgLgJgKQgJgKgOgBg");
	this.shape_137.setTransform(8.5,-157.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4C270E").s().p("Ag1A7QgKgEgEgFIgEgFQAMgfARgTQARgVARgMQAQgNALgGIAMgFQAOABAIAKQAKAKAFALIAEALQgaADgSANQgTALgLAQQgMAPgGAMIgGAMIgDAAQgPAAgJgEg");
	this.shape_138.setTransform(8.5,-157.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B28222").s().p("Ag0AiQAWgVAUgOQATgRARgLIAZgRQACASABASQgmAYggAgQgVgLgPgBg");
	this.shape_139.setTransform(4.4,-74.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgcASIA5gj");
	this.shape_140.setTransform(-0.9,-22.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgZASQABAAALgIQAKgJALgGQAMgJAGgD");
	this.shape_141.setTransform(6.8,-12.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgcAaQABgBALgMQALgLAMgLQAOgMAIgE");
	this.shape_142.setTransform(3.1,-13.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgdAbQABgBALgMQALgMAMgLQAOgNAKgD");
	this.shape_143.setTransform(-1.5,-15.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("ADQh6QgigCgmANQgmANgrASQgBABgCABQgWAFgUAAQgRgCgagBQgaAAgZAKQgQAHgQAHQgQAIgQAGQgMAFgNAAQgHgBgJgDQgKgDgGABQgFACAGANQAFAJAMAIQAMAHAKACQAMADANgFQgQAJgOAMQgOALgIAMQgIAPADALQADAMAMAFQALAFAQgEQgBAAgDAGQgDAGAAAHQAAAHAIAEQAJACAKgDQALgCAIgEQAFgDACgBQgBABgBABQgCADABADQABADAKABQAKABAIgDQAHgCAEgDQAEgEAAAAIADAEQACAEAGAEQAGAEAKAAQAPgBAOgKQANgKANgNQANgNAKgKQAJgJANgHQAMgHAPgEQAYABAQACQARACAQABQAPABAUAA");
	this.shape_144.setTransform(11.2,-21.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#72461E").s().p("Ag5B4QgGgEgCgEIgDgEIgEAEQgEADgHACQgIADgKgBQgKgBgBgDQgBgDACgDIACgCIgHAEQgIAEgLACQgKADgJgCQgIgEAAgHQAAgHADgGIAEgGQgQAEgLgFQgMgFgDgMQgDgLAIgPQAIgMAOgLQAOgMAQgJQgNAFgMgDQgKgCgMgHQgMgIgFgJQgGgNAFgCQAGgBAKADIAQAEQANAAAMgFIAggOIAggOQAZgKAaAAIArADQAUAAAWgFIADgCQArgSAmgNQAmgNAiACIgOCpQgUAAgPgBIghgDIgogDQgPAEgMAHQgNAHgJAJIgXAXQgNANgNAKQgOAKgPABQgKAAgGgEg");
	this.shape_145.setTransform(11.2,-21.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5B3516").s().p("AhCClQgOgDgMgMQgKgMgjgbIg4guQgfgagegeQgfgdgYghQgZghgNghQABgFAIgMQAHgMAPgRQAaA2ApA0QApA0AvAoQAvApAsAYQAsAXAfgDQAqgEAvgKQAugJAvgQQAugQAqgXQApgWAggeIgCAIQgLAegVAUQgUATgVAJQgUAKgKACIgBgCIgFACIgtAVQghAPgpAPQgpAPgoAIQglAIgbgGIgCAAIgBAAQgBABgLACIgKABIgOgBg");
	this.shape_146.setTransform(-4.9,-26.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#3A0B0B").ss(1,1,1).p("AD9igQgOgLgIAEQgJAEgEAMQgEAMACANQACAOAJAIQgGAMgCAOQgBAPABAOQACAQgGAKQgFAKgFAFQgGAEgBAAQgPAGgXgBQgXAAgcgBQgcgDgegDQgfgCgSABQgPABgHABQgHACAAAAIiQjNQg5AMgkAUQgkAVgVAWQgUAVgIAPQgIAPABABQAOAlAbAkQAcAhAhAhQAiAgAgAbQAhAbAYATQAYATAIAJQAMAOAQADQAPACAMgCQALgCABgBQAbAGAmgHQAngIAqgPQApgPAhgPQAhgPAOgHIABABQAAABAOgFQANgEATgKQAUgLASgTQASgTAJgdQABgBADgOQAEgOACgRQABgTgGgQQgGgNgDgFQgCgFAAAAQgBgDgCgJQgDgJgFgJQgFgKgIgDQgJgDgJACQgIACgGAEQgEADgBABQAEgGgFgMQgFgLgIgMQgIgLgFgEg");
	this.shape_147.setTransform(-4.5,-30.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#72461E").s().p("AhHDQQgQgDgMgOQgIgJgYgTIg5guQgggbgiggQghghgcghQgbgkgOglQgBgBAIgPQAIgPAUgVQAVgWAkgVQAkgUA5gMICQDNIAHgCQAHgBAPgBQASgBAfACIA6AGQAcABAXAAQAXABAPgGIAHgEQAFgFAFgKQAGgKgCgQQgBgOABgPQACgOAGgMQgJgIgCgOQgCgNAEgMQAEgMAJgEQAIgEAOALQAFAEAIALQAIAMAFALQAFALgEAGIAAABIAAgBIAFgDQAGgEAIgCQAJgCAJADQAIADAFAKQAFAJADAJIADAMIACAFIAJASQAGAQgBATQgCARgEAOIgEAPQgJAdgSATQgSATgUALQgTAKgNAEIgOAEIgBgBIgvAWQghAPgpAPQgqAPgnAIQgmAHgbgGIgMADIgLABIgQgBg");
	this.shape_148.setTransform(-4.5,-30.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#725107").ss(1,1,1).p("ACYBzQgCgDgCgFQgHgOgLgYQgLgXgLgaQgLgYgIgWQgIgXgCgOAANjcQgBAAgRAKQgUAKgbAUQgcAVgaAfQgaAggOArQgOArAIA2QAAABAHAaQAHAZASAoQASApAhAsQABgBAOgPQANgPAYgWQAWgVAfgSQAegSAggGQAagEANAFQALAEAEAFQADAHABABQAAgBgDgGQgBAAAAgB");
	this.shape_149.setTransform(-34.2,-59.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AF800B").s().p("AhnHOQhEgEgwgNQgvgNgZgMIgZgMQgMg1AChHQABhIAMhRQALhSARhQQARhSAThKQAShJAPg3IAdgFIACAAIAFAAIAAAAIABAAQAIAAAFAEQAFAJAAALIAAACQgBAMgGAKQgGALgKAFQAKgFAGgLQAGgKABgMIAAgCQAAgLgFgJQgFgEgIAAIgBAAIAAAAIgFAAIgCAAIgdAFIAOg0IAKgjQAHgYAfgNQAfgNAsgGQAtgFAvABQAxABAqAEQArAFAbAGQAaAHATAXQATAXAMAeQAMAeAHAdQAHAdADATIADAUQAUBCAKBJQAKBJADBHQAEBIgCBBQgBBBgEAyIgGBPIgEAeIgIABIgkAFIhPAMIiKAZQhDAMg5AAIgegBg");
	this.shape_150.setTransform(-16.6,-38.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#3A0B0B").ss(1,1,1).p("AgljRQABAAAMASQANASARAdQAUAeAWAiQAWAiATAhQATAeAMAaQABABAIATQAJASAGAcQAHAbgFAZQgEAZgZAOQgiAQgfgKQgfgLgZgdQgbgegWgoQgWgogSgqQgRgpgMglQgMgkgGgXQgHgXAAgBg");
	this.shape_151.setTransform(22.3,-37.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#72461E").s().p("AA0DOQgfgLgZgdQgbgegWgoQgWgogSgqQgRgpgMglQgMgkgGgXIgHgYIBug+IANASIAeAvIAqBAQAWAiATAhQATAeAMAaIAJAUQAJASAGAcQAHAbgFAZQgEAZgZAOQgVAKgUAAQgMAAgMgEg");
	this.shape_152.setTransform(22.3,-37.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#365B0A").ss(1,1,1).p("ABAhZQABAAgFATQgEAUgNAcQgNAbgaAfQgYAegrAY");
	this.shape_153.setTransform(-39.5,14.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#497715").s().p("Ag3IKIgBgMQAAgXAFgwIAOh8IAcjxQAGg6ADguQABgwAAgmQAAg7gEgsQgFgsgJghQgIgjgKgfIgIgZQgOg0ABgfQAAgaAEgOQAEgNADgFIBTgIQgMAqABAtIAVDtQAKB3AAB0QAAB1gTBzQgTBzgtBxQgMAagIAcQgIgGgCgJg");
	this.shape_154.setTransform(-43.4,53.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#497715").s().p("AhhHMQgQgNAAgLQAAgFAEgOIAJghIAVhPQALgsAJg1QAJg0ABg1IAAgJQAAg0gKgsQgKgtgOgiQgOgjgLgUIgOgZIgFgYQgDgVgDgfQgEggAAgkQAAghAFgfQAFgfANgUQANgVAXgGIBVgQIBPgMIA0gHQglBJgVBJIglBrQgTAzgNAyQgLAzAAAxQAAEAgpD/QgngLgRgMg");
	this.shape_155.setTransform(-6.1,48.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3A0B0B").s().p("AACFfQgIgLgCgMQgCgMABgIIACgKIgNgGIgGADQgEADgLAAQgLgBgSgLQgTgMgEgQQgGgQACgMIAEgOIgOgIIgJAHQgHAHgNAGQgNAGgQABQgRACgSgJQgOgIgJgOQgIgPAAgTQAAgOAGgPQAGgPANgMQAOgMAXgEIANgDIgIgKIgGgJQgFgIgBgLQAAgJAIgHQAMgKAWgEIgBgQQggABgWgFQgUgGgHgJQgGgJADgEQADgHAMgDQALgDAIAAIACgQIgIgDQgHgDgIgIQgIgIgDgOQgFgOAFgWQABgGADgGQADgGAEgBQAHgBAJAHQAJAHAJAKQAKAKAGAKIAOgIIgDgMQgDgLAHgLQALgPAlACIAWACIgQgPIgLgNQgKgKgMgSQgMgSgJgVQgJgWAAgXQABgXAPgVQALgPAKgKQgPAkABAmQABAlAUAmQAeApAoAZQAlAaAyABQgVAUgNAXQgNAXgDAXQgBAXALASQAFAJALAAQAMAAANgEQAPgFANgCQAOgDAKAFQATAHABAJQACAIgIAJQgJAJgMALQgMAKgLANQgJANgBAQQAogVAegEQAfgDAYALQAZALASAVQgMgKgHgHIgNAJQAIALAIASQAJASAAAUIgCAQQgGAWgEAGIgFAGIgLgDIgHgBIAKAPQAFAIAHAPQAGAQgBAOQAAAFgEADQgGAEgIAAIgLAAQgCABgHgHQgIgHgEgYQgEgSgKgOQgKgOgMgJQgMgIgIABQgLABgBALIAAACIgEAAIgEAAIgRgBQgKAAgIAHQgHAHgEAJQgDAKgBAJQgHABgFAGQgHAIAAANQAAAUAPAcIgIAFQgEADgHAAQgIAAgIgIg");
	this.shape_156.setTransform(-57.5,-143.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(1,1,1).p("Am7CNQgJAAgLgBQgUAAgSgGQgTgFgJgNQgIgNAEgIQAFgIAJgDQAKgEAIgBQAJgBABAAQgBAAgIgEQgHgDgKgJQgJgJgFgQQgFgRAFgWQAFgUAJgEQAJgEAKAGQALAGAKAKQAJAIAGAIQAGAIABABQgBgBgCgJQgDgHADgMQACgMANgJQAOgIAfACQgBAAgKgLQgKgLgNgSQgNgTgJgXQgKgXABgZQAAgaARgYQAVgdATgJQASgJAOADQAOACAIAGQAIAFAAABQAAgBADgNQAEgOALgTQALgTAWgQQAXgOAQABQAQACAJAGQAIAHABABQgBgBADgQQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAGAGQAFAEACABQgBgBAAgDQAAgEAIgHQAJgHAagIQAbgGAMAFQAJAGADAIQADAGAAACQAAgCAGgKQAHgMAQgQQAQgQAdgNQAVgJAMAFQANAEAFAKQAGALACAJQABAJAAAAQgBABAHABQAHACAUAAQAUgBAogGQAYgDAMAJQANAJADAPQAEAQgBAQQgBAQgDALQgCALgBABQABgBALgIQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMQgCAKAAABQABgBAGgGQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAEAOgDAKQgDAJgFAFQgEAEgBAAQABAAALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgNgGQgMgGgBAAQAAAAgKAGQgKAHgQAGQgQAGgTAAQgTABgSgLQgBAAgLAJQgKAIgQAIQgQAIgQAAQgPAAgKgEQgKgFgFgEQgFgEAAgBQAAABgJAMQgJAMgPARQgPAQgTANQgTANgTABQgZABgMgGQgLgGgDgHQgCgGAAgBQgBACgEAPQgFAQgMATQgLAVgUAOQgTANgKADQgMADgFgBQgEgBgBgBQAAABADAGQADAIADALQACALgDALQgDALgFADQgFADgEgBQgBAAgBAAQADACAJAEQAMAGAOAKQAQALALANQAKANgEANQgEAOAAASQAAARAIAPQAIAQARAIQASAIAdgEQAAAAgFAJQgEAJgKAJQgKAJgQAAQgRgBgKgLQgKgLgEgLQgDgGgBgCQABACABADQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgCgKQAAABAAAFQAAAGgCAHQgCAGgFACQgFACgKgIQgQgNgHgHQgGgKgBAAQgBAAAGAHQABABABACQACACABADQAKAPAIAWQAHAWgFAXQgGAXgFAIQgGAIgDABQgEAAAAAAQAAAAAFAJQAFAKAFANQAEANgBANQgCAMgJADQgJAEgJAAQgJAAgBgBQAAABgFgDQgGgDgGgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgIAAQgIAAgRgBQgMAAgGAKQgGAJgCAKQgCAKAAAAQAAAAgFACQgFACgEAHQgEAGACAPQACAPAOAaQAAABgIAFQgHAGgMABQgLACgNgMQgLgMgDgOQgCgOACgKQABgIABgCQgBABgEAEQgGAEgNAAQgOAAgWgNQgWgOgFgSQgFgTACgNQACgNABgBQgBAAgIAGQgIAHgOAHQgOAHgTACQgSABgVgJQgUgLgJgVQgIgVADgXQAEgYAQgSQARgTAfgGQgBgBgFgJQgGgJgBgNQgCgMAMgLQAMgLAQgDQAEgBAEgBQAIAAAHgBQAOgBABAAQgBgBgLABQgIAAgKACgAATEgIgBgD");
	this.shape_157.setTransform(-26.9,-155.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#490F0E").s().p("Ak0HcQgLgMgCgOQgCgOABgKIADgKIgGAFQgGAEgNAAQgOAAgWgNQgWgOgFgSQgFgTACgNIADgOIgJAGQgHAHgPAHQgOAHgTACQgSABgUgJQgVgLgIgVQgJgVADgXQAEgYAQgSQARgTAfgGIgGgKQgFgJgCgNQgCgMAMgLQANgLAPgDIAIgCIAPgBIAPgBIgMAAQgHAAgLACIgUgBQgTAAgTgGQgTgFgIgNQgJgNAEgIQAFgIAKgDQAKgEAIgBIAJgBIgIgEQgIgDgKgJQgJgJgFgQQgEgRAEgWQAGgUAIgEQAJgEAKAGQALAGAKAKIAPAQIAHAJIgDgKQgCgHACgMQACgMANgJQAOgIAfACIgLgLQgKgLgNgSQgNgTgJgXQgJgXAAgZQAAgaARgYQAVgdATgJQASgJAPADQAOACAHAGIAIAGIAEgOQADgOALgTQALgTAXgQQAWgOAQABQAQACAJAGIAJAIIACgRQADgQALgUQAKgVAWgOQARgKAPABQAPAAAMAGQAMAGAHAGIAGAFIgBgEQAAgEAIgHQAJgHAagIQAbgGAMAFQAKAGACAIIADAIIAGgMQAHgMARgQQAPgQAdgNQAVgJAMAFQANAEAFAKQAGALACAJIABAJIAGACQAHACAUAAQAUgBApgGQAYgDAMAJQAMAJAEAPQADAQgBAQQgBAQgDALIgCAMIgBAAIABAAIALgJQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMIgCALIAHgHQAGgHANgFQAMgGARAEQAQADAUASQASAUAFAOQAFAOgEAKQgCAJgGAFIgEAEIALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgNAEQgNAFgRgEQgRgEgNgGIgMgGIgLAGQgKAHgQAGQgQAGgTAAQgTABgSgLIgMAJQgKAIgQAIQgQAIgPAAQgPAAgLgEQgJgFgGgEIgEgFIgKANQgJAMgPARQgPAQgTANQgTANgTABQgZABgMgGQgLgGgDgHIgCgHIgFARQgFAQgLATQgMAVgUAOQgTANgKADQgMADgFgBIgFgCIADAHQADAIADALQACALgDALQgCALgGADQgEADgFgBIgCAAIAMAGQAMAGAPAKQAPALALANQALANgFANQgEAOABASQgBARAJAPQAHAQASAIQARAIAdgEIgFAJQgEAJgJAJQgLAJgQAAQgQgBgKgLQgLgLgEgLIgDgIIgBgDIABADIABAFQACAJAAAJQAAAKgFAFQgGAEgNgGQgOgHgJgNQgKgOgFgOQgGgOgCgKIgCgKIAAAGQAAAGgBAHQgDAGgFACQgEACgLgIIgWgUIgIgKIAAAAIAFAHIADADIACAFQAKAPAIAWQAIAWgGAXQgFAXgGAIQgGAIgDABIgEAAIAFAJQAFAKAFANQAEANAAANQgCAMgKADQgJAEgJAAIgKgBIgFgCQgGgDgGgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgLgFgBAIQAAAKgHAAIgagBQgMAAgGAKQgGAJgCAKIgBAKIgGACQgFACgEAHQgEAGACAPQADAPAOAaIgJAGQgHAGgLABIgDABQgKAAgMgLgAhiDwIgFgHIAAAAIAIAKIgDgDgAm7CNIAAAAgAmpCLIAMAAIgPABIgPABQALgCAHAAg");
	this.shape_158.setTransform(-26.9,-155.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgDAAQgBgDACgDQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAFABAAAIQAAAJgFABQgDgBAAgJg");
	this.shape_159.setTransform(17,-141.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgFAAQABgHAEgBQAFABABAHQgBAIgFABQgEgBgBgIg");
	this.shape_160.setTransform(7.6,-140.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgGANQgCgFAAgIQAAgHADgGQADgFACAAQAEABADAFQACAFAAAHQAAAIgDAGQgDAFgDAAQgDgBgDgFg");
	this.shape_161.setTransform(7.5,-138.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#72461E").s().p("Ah4hUIAJgLQAIgLAPgLQAQgLAWgBQASAAAbACQAaADAcAGQAdAIAUAPQAUAOACAaQABAVgLAUQgMASgTAUIgkAmQgTATgMARQgMARAAAPg");
	this.shape_162.setTransform(15.9,-120.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#3A0B0B").ss(1,1,1).p("AAYhEQATAXAHAmQAEAXgDAVQgDAVgJAOQgJAOgOADQgUADgTgXQgTgWgHgmQgEgXADgWQADgVAJgOQAJgOAPgCQATgDATAWg");
	this.shape_163.setTransform(3.7,-141);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgXBFQgSgXgIglQgEgXADgWQADgVAKgOQAIgOAOgCQAUgDATAWQATAWAHAnQAEAWgDAWQgDAVgKAOQgIAOgOADIgGAAQgQAAgRgUg");
	this.shape_164.setTransform(3.7,-141);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#4C270E").s().p("Ag1A7QgKgEgEgFIgEgFQAMgfARgTQARgVASgMQAOgNAMgGIAMgFQAOABAJAKQAJAKAEALIAFALQgZADgTANQgTALgLAQQgMAPgGAMIgGAMIgDAAQgPAAgJgEg");
	this.shape_165.setTransform(-6.1,-153.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1,1,1).p("AgigfQABAAANAEQANAEAOAOQAQAMAMAdQgBgBgIgFQgJgEgLgEQgKgEgKAD");
	this.shape_166.setTransform(-45.4,-109.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B28222").s().p("Ag1AiQAXgVAUgPQATgQAQgLIAagRQACASAAARQglAZggAhQgWgMgPgBg");
	this.shape_167.setTransform(-10.2,-71.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#3A0B0B").ss(0.9,1,1).p("AgdAZQABgBAMgLQALgLAMgKQAOgMAIgE");
	this.shape_168.setTransform(-3.8,-5.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#725107").s().p("AAHA1IgDgQIgFgkIgGgjIgDgQIAJgDQABABAEAcQAEAZADA0g");
	this.shape_169.setTransform(-11.5,-60.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#AF800B").s().p("AhwHLQhEgGgvgPQgvgOgZgNIgYgNQgKg1AEhHQAEhIAPhRQAOhRAUhQQAUhRAVhJIAmh/IAdgEIABAAIAFAAIAAAAIAAAAQAJAAAGAEIAAAAIAAABQAFAIAAAKIgBAEIAAABIAAAAIgCALIgCAEIgDAGIgEAGQgFAGgIAEQAIgEAFgGIAEgGIADgGIACgEIACgLIAAAAIAAgBIABgEQAAgKgFgIIAAgBIAAAAQgGgEgJAAIAAAAIAAAAIgFAAIgBAAIgdAEIAQgzIALgjQAIgXAggNQAfgMAtgDQAtgEAuADQAxACArAGQAqAHAbAHQAaAIASAXQASAXALAfQALAfAGAdQAGAdACATIACAUQARBDAIBKQAHBJABBGQABBJgEBBQgEBAgFAyIgKBPIgEAeIgJAAIgjAEIhQAKIiMATQg1AHgwAAQgbAAgZgCgAiWkUIADgGIgDAGIgEAGIAEgGg");
	this.shape_170.setTransform(-23.4,-31.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#365B0A").s().p("AgcAHIAHgFIAPgJIAIgGQAJgDAGAEQAGAEAGAGIgKgCQgEgBgGACQgJACgGAEIgQAMg");
	this.shape_171.setTransform(33.1,84.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#53821C").s().p("AEXHbQgLgFgHgIQgGgJgBgDIACgKIADgPIACgIIgBgBIgJgiIgUhLIgcheIgehbQgPgqgMgZQgMgZgbggQgcgjgjglQghgmgfghIg2g3IgZgYIgBgBIgOgFIgdgMIgegLIgOgGQgugWgbggQgdgggPgiQgOghgGgaQgGgbgBgLQABADAQAAIAmAAIAwgCIAqABQATABAGAEQAWAUAQAdIAdA5QAOAbASAQQAQAQAagGQAXgGAmglQgUAVgOAZQgNAagFAXQgEAXAJALQAqAaAbAiQAbAiATAmQAVAmAWAmQAXAkAlAiQAeAeAPAlQAPAlAGAoQAGApAEArQAFArAJAqQAJArAVAoQgOAQgMAHQgIAEgIAAQgGAAgFgCg");
	this.shape_172.setTransform(-18.4,55.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#6DA829").s().p("AgQGMQASggAYgfIAwg+QAYggASgiIg3gPQgagFgdAAIAMgLIAMgKQAFgEABgGQATghgHgsQgGgsgYgxQgWgzghg4IhChxQghg5gag6QgZg6gJg3IAnABIAQABIAAAQIAAAWIAAALIABABIAIAZIAYA9QAPAlAVApQAVAqAZAjQATAcAUAtQAVAtATAxQAUAwAQAtIAZBJIAKAeIABACIABABIAKAKIAVATIAXASQAGAFAEAIQAEAJABAIIACAPIgPAAIgaADIgYABIgLACIgBAAQgcAPgYAVQgXAVgTAWIghAtIgUAbQgKAMgJAJQALglATggg");
	this.shape_173.setTransform(18.2,55.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#365B0A").ss(1,1,1).p("AFyChQgJgcgQgtQgQgtgUgwQgUgygVgtQgVgugVgcQgZgkgUgpQgVgpgPglQgPglgJgYQgIgYAAAAIAAg2Io1gNQAAAAACARQACARAIAaQAHAbAQAfQAPAfAcAcQAbAdAqAVIBWAhQABAAAWAVQAUAVAhAhQAgAiAjAmQAjAmAcAjQAbAhAMAZQAKAUANAiQAMAiANApQAMAoAMApQAMAoAJAiQAKAiAFAVQAGAUAAABIgHAhQAAABAEAGQAEAHAHAHQAIAHALADQALADAPgHQAPgIARgWQARgWAVgcQAVgcAbgbQAbgbAjgSIBQgHQAAAAgBgLQgBgKgEgMQgEgNgKgHQgKgHgNgLQgMgLgJgJQgJgIAAgBQAAgBgKgcg");
	this.shape_174.setTransform(-6.8,55.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#589319").s().p("ACmHhQgKgDgIgHQgIgHgEgHIgDgHIAGghIgFgVIgPg3IgVhKIgZhRIgZhLQgMgigKgUQgNgZgaghQgcgjgjgmQgigmghgiIg1g2IgXgVIhWghQgqgVgbgdQgbgcgQgfQgQgfgHgbQgIgagCgRIgCgRII1ANIAAA2IAIAYIAYA9QAOAlAWApQAUApAZAkQAVAcAVAuQAVAtAUAyQAUAwAQAtIAZBJIAJAdIAKAJIAVAUQANALAKAHQAJAHAFANQAEAMABAKIABALIhQAHQgjASgbAbQgbAbgVAcIgmAyQgRAWgPAIQgLAFgJAAIgHgBg");
	this.shape_175.setTransform(-6.8,55.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1,1,1).p("AB/gFQAAgNgHgTQgGgTgRgQQgSgRgjgHQgigIg3AKIgPAAQgqAogQAzQgQAyASA2QA7gMA8gXQA/gWA9glQAAAAAAgMg");
	this.shape_176.setTransform(46.8,95.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#1F3263").s().p("Ah2gDQAQgzAqgoIAPAAQA3gKAiAIQAjAHASARQARAQAGATQAHATAAANIAAAMQg9Alg/AWQg8AXg7AMQgSg2AQgyg");
	this.shape_177.setTransform(46.8,95.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#3A0B0B").ss(1,1,1).p("ACjhrQgjgHg4AJIiUAEQgBAAgPANQgPANgXATQgXAUgXAXQgYAUgSATQgRATgFAMQAAAAgDAHQgCAHAAAMQABAMAIAPQAAABAdAAQAdABAxgDQAygEA+gLQA9gLBEgXQBDgYBCglQABgBgBgNQAAgOgGgSQgHgTgRgRQgSgQgigIg");
	this.shape_178.setTransform(34.9,96.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#72461E").s().p("AjPBvIgdgBQgIgPgBgMQAAgMACgHIADgHQAFgMARgTQASgTAYgUQAXgXAXgUIAmggIAQgNICUgEQA4gJAjAHQAiAIASAQQARARAHATQAGASAAAOIAAAOQhCAlhDAYQhEAXg9ALQg+ALgyAEQgqACgbAAIgJAAg");
	this.shape_179.setTransform(34.9,96.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1,1,1).p("ADJhSInDB2IADAvQABAAAfAAQAfgBA1gFQA1gEBCgMQA/gMBFgXQBEgXA/gjQAAgBgCgLQgCgLgLgMQgLgMgYgDg");
	this.shape_180.setTransform(36.4,102.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#1F3263").s().p("Aj3BTIgDgvIHDh2QAYADALAMQALAMACALIACAMQg/AjhEAXQhFAXg/AMQhCAMg1AEQg1AFgfABIgYAAIgIAAg");
	this.shape_181.setTransform(36.4,102.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#487013").s().p("Ag1ARIAQgHIAjgOIAigOIAQgIIAGAJIgTALQgRAIgWALQgYALgYADg");
	this.shape_182.setTransform(-42.3,85.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#487013").s().p("Aj2GOIgogCIAshsQAWg1AdgyQAdgyAqgrIACgBIAHgjQAEgUAFgFIAGgEIADgBIABgCQAWgrAPg0QAOg1AJg0QAJg1AEguQAFguABghIACgsIAhACQAZADAiAGQAhAHAkAOQAjANAfAXQAeAWAUAjQATAiACAwIAAAHQAAAZgEAYQgCAGgSgDQgRgEgbgJIg1gUIgwgSQgVgHgGAAQgdAEgSAVQgSAVgJAcQgJAcgBAaQgCAfgEAWQgBAVgJASQgHAPgNAPQgNAOgTARQgmAdghAfQghAfgUAqQgMAcgEAdQgDAdAAAdQgBAegDAdIgXABIgPgBg");
	this.shape_183.setTransform(-44.4,58);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#53821C").s().p("Aj7GDQgZgPgBgeQgBgdAQglQAQglAYgmQAZglAZgfQAZgeASgRIABgBIAHgjQAFgUAFgFIAGgEIADgBIABgCQAWgrAPg0QAOg1AJg0QAJg1AEguQAEguACghIABgsIAiACQAZADAiAGQAhAHAkAOQAjANAeAXQAfAWATAjQAUAiABAwIAAAHQAAAsgLAsQgrgGgmgWQglgWgkgeQAIAYADAeQAEAfgEAeQgEAegQAWQgQARgXAJQgXAJgZAHQgXAHgUAMQASAIARAGQASAGAQAMQgSAGgXAHQgWAGgSALQgTAKgDAUIAdANQANAHAQACQgNAVgTAHQgTAHgWACQgVACgTAFQgTAGgNARQgMAQgEAhQAAAPABAVQACAVgBAVQgBAVgHAPQgIAOgTABIgCAAQgTAAghgSg");
	this.shape_184.setTransform(-43.5,58.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#6DA829").s().p("AgbEmQgdgWgugCQgsgCgyAJQBZgcBIg8QBEg7AxhQQAyhPAYhbQAYhbgChdQARAhACAtIAAAIQgBBAgWA+QgWA+ghA1QggA2ghAqQggAqgWAYIgXAaIgCACIAEAJIAKARIAGAKIAAAMIAAAYIAAAUQgIgGgOgFg");
	this.shape_185.setTransform(-35.4,61.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#365B0A").ss(1,1,1).p("ACAl5QgogMgigGQgjgFgUgBQgWgBgBAAQAAABAAAcQgBAcgEAvQgDAvgJA5QgIA4gQA5QgPA5gYAvIgDABQgEACgEAHQgFAHgEAQQgDARgBAHQgCAHAAABIAAACQgBAAgPAPQgOAPgWAbQgWAcgXAlQgWAlgQAtQgQAtgDAzQABAAANAEQAOAEAWADQAXADAdgDQAcgEAegOQABgBASgIQARgHAZgLQAZgKAYgIQAWgIANAAQARAAANAFQAOAFAIAEQAIAFAAABIAAhDIgUghQABgBAQgRQAQgRAagfQAagfAdgqQAcgpAagyQAZgvAQg2QAPg2gBg3QgCg2gWglQgXgkgjgYQgjgXgngNg");
	this.shape_186.setTransform(-43.7,57.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#589319").s().p("AjqGRQgWgDgOgEIgOgEQADgzAQgtQAQgtAWglQAXglAWgcQAWgbAOgPIAQgPIAAgCIACgIIAEgYQAEgQAFgHQAEgHAEgCIADgBQAYgvAPg5QAQg5AIg4QAJg5ADgvIAFhLIAAgdIAXABQAUABAjAFQAiAGAoAMQAnANAjAXQAjAYAXAkQAWAlACA2QABA3gPA2QgQA2gZAvQgaAygcApQgdAqgaAfQgaAfgQARIgRASIAUAhIAABDIgIgGQgIgEgOgFQgNgFgRAAQgNAAgWAIQgYAIgZAKIgqASIgTAJQgeAOgcAEQgPACgOAAIgXgCg");
	this.shape_187.setTransform(-43.7,57.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1,1,1).p("ACBApQAEgPgCgWQgCgUgQgVQgQgWgmgNQgmgMhEADQAAAAgCgBQgqAcgVArQgUAqACAxQA+AFBCgEQA/gFBAgTQAAAAAEgQg");
	this.shape_188.setTransform(-32,101.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#1F3263").s().p("AiCBQQgCgxAUgqQAVgrAqgcIACABQBEgDAmAMQAmANAQAWQAQAVACAUQACAWgEAPIgEAQQhAATg/AFQggACgeAAQghAAghgDg");
	this.shape_189.setTransform(-32,101.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#3A0B0B").ss(1,1,1).p("ADEg3QgmgNhGADQAAAAgNgGQgMgFgQgIQgQgHgNgHQAAAAgSACQgUACggAFQggAFgkAHQgkAIghALQggALgWAPQgBABgHAMQgIAMgGAOQgFARAEAQQAAAAAgAKQAfAKA2ANQA2AMBFAIQBCAIBLgDQBKgDBJgWQAAAAAEgQQAEgPgCgWQgCgUgQgVQgQgWgmgMg");
	this.shape_190.setTransform(-45.7,99.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#72461E").s().p("AgaBdQhFgIg2gMQg2gNgfgKIgggKQgEgQAFgRQAGgOAIgMIAIgNQAWgPAggLQAhgLAkgIQAkgHAggFIA0gHIASgCIAdAOIAcANIANAGQBGgDAmANQAmAMAQAWQAQAVACAUQACAWgEAPIgEAQQhJAWhKADIgtABQgzAAgtgGg");
	this.shape_191.setTransform(-45.7,99.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1,1,1).p("AEQgVIoQgeQgBABgFAHQgGAIgGALQgHALgCAMQAAABAiAKQAiAMBDAMQBDANBgAEQBYACA0gDQA1gDAagHQAbgGAJgJQAKgJACgJQADgJgDgHQgCgGgEgDQgEgDAAAAg");
	this.shape_192.setTransform(-45.7,107.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#1F3263").s().p("AAPAzQhggEhDgNQhDgMgigMQgigKAAgBQACgMAHgLQAGgLAGgIIAGgIIIQAeIAEADQAEADACAGQADAHgDAJQgCAJgKAJQgJAJgbAGQgaAHg1ADQgcACgnAAIhJgBg");
	this.shape_193.setTransform(-45.7,107.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#725107").ss(1,1,1).p("AhViOQAAAAAPAGQAPAFAXARQAXASAXAhQAZAhAVA1IAaA1IiKBDg");
	this.shape_194.setTransform(8.2,-56.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#AF800B").s().p("AhViOIAQAGQAOAFAXARQAXASAXAhQAZAhAUA1IAbA1IiKBDg");
	this.shape_195.setTransform(8.2,-56.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1,1,1).p("Am7CNQgJAAgLgBQgUAAgSgGQgTgFgJgNQgIgNAEgIQAFgIAJgDQAKgEAIgBQAJgBABAAQgBAAgIgEQgHgDgKgJQgJgJgFgQQgFgRAFgWQAFgUAJgEQAJgEAKAGQALAGAKAKQAJAIAGAIQAGAIABABQgBgBgCgJQgDgHADgMQACgMANgJQAOgIAfACQgBAAgKgLQgKgLgNgSQgNgTgJgXQgKgXABgZQAAgaARgYQAVgdATgJQASgJAOADQAOACAIAGQAIAFAAABQAAgBADgNQAEgOALgTQALgTAWgQQAXgOAQABQAQACAJAGQAIAHABABQgBgBADgQQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAGAGQAFAEACABQgBgBAAgDQAAgEAIgHQAJgHAagIQAbgGAMAFQAJAGADAIQADAGAAACQAAgCAGgKQAHgMAQgQQAQgQAdgNQAVgJAMAFQANAEAFAKQAGALACAJQABAJAAAAQgBABAHABQAHACAUAAQAUgBAogGQAYgDAMAJQANAJADAPQAEAQgBAQQgBAQgDALQgCALgBABQABgBALgIQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMQgCAKAAABQABgBAGgGQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAEAOgDAKQgDAJgFAFQgEAEgBAAQABAAALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgNgGQgMgGgBAAQAAAAgKAGQgKAHgQAGQgQAGgTAAQgTABgSgLQgBAAgLAJQgKAIgQAIQgQAIgQAAQgPAAgKgEQgKgFgFgEQgFgEAAgBQAAABgJAMQgJAMgPARQgPAQgTANQgTANgTABQgZABgMgGQgLgGgDgHQgCgGAAgBQgBACgEAPQgFAQgMATQgLAVgUAOQgTANgKADQgMADgFgBQgEgBgBgBQAAABADAGQADAIADALQACALgDALQgDALgFADQgFADgEgBQgBAAgBAAQADACAJAEQAMAGAOAKQAQALALANQAKANgEANQgEAOAAASQAAARAIAPQAIAQARAIQASAIAdgEQAAAAgFAJQgEAJgKAJQgKAJgQAAQgRgBgKgLQgKgLgEgLQgDgGgBgCIgBgDAhgDzQACACABADQAKAPAIAWQAHAWgFAXQgGAXgFAIQgGAIgDABQgEAAAAAAQAAAAAFAJQAFAKAFANQAEANgBANQgCAMgJADQgJAEgJAAQgJAAgBgBQAAABgFgDQgGgDgGgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgIAAQgIAAgRgBQgMAAgGAKQgGAJgCAKQgCAKAAAAQAAAAgFACQgFACgEAHQgEAGACAPQACAPAOAaQAAABgIAFQgHAGgMABQgLACgNgMQgLgMgDgOQgCgOACgKQABgIABgCQgBABgEAEQgGAEgNAAQgOAAgWgNQgWgOgFgSQgFgTACgNQACgNABgBQgBAAgIAGQgIAHgOAHQgOAHgTACQgSABgVgJQgUgLgJgVQgIgVADgXQAEgYAQgSQARgTAfgGQgBgBgFgJQgGgJgBgNQgCgMAMgLQAMgLAQgDQAEgBAEgBQAKgCAIAAQALgBABABQgBAAgOABQgHABgIAAAATEgQABACABADQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgCgKQAAABAAAFQAAAGgCAHQgCAGgFACQgFACgKgIQgQgNgHgHQgGgKgBAAQgBAAAGAHQABABABAC");
	this.shape_196.setTransform(-12.3,-159.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#490F0E").s().p("Ak0HcQgLgMgDgOQgCgOACgKIADgKIgGAFQgGAEgNAAQgOAAgWgNQgVgOgGgSQgFgTACgNIADgOIgJAGQgIAHgOAHQgOAHgSACQgTABgUgJQgVgLgJgVQgIgVAEgXQADgYAQgSQASgTAegGIgGgKQgGgJgBgNQgBgMALgLQAMgLAQgDIAIgCIAPgBIAPgBIgMAAQgIAAgKACIgTgBQgVAAgSgGQgSgFgKgNQgHgNADgIQAFgIAKgDQAJgEAJgBIAJgBIgIgEQgIgDgJgJQgJgJgGgQQgEgRAEgWQAGgUAIgEQAJgEALAGQAKAGAKAKIAQAQIAGAJIgDgKQgCgHACgMQACgMANgJQAOgIAfACIgKgLQgLgLgNgSQgNgTgJgXQgJgXAAgZQAAgaARgYQAVgdATgJQATgJAOADQAOACAHAGIAIAGIADgOQAEgOALgTQALgTAXgQQAWgOAQABQARACAIAGIAJAIIACgRQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAHAGIAGAFIgBgEQAAgEAIgHQAJgHAagIQAbgGAMAFQAKAGACAIIADAIIAGgMQAHgMARgQQAQgQAcgNQAVgJAMAFQANAEAFAKQAGALACAJIABAJIAGACQAHACAUAAQAVgBAogGQAXgDANAJQAMAJADAPQAFAQgCAQQgBAQgDALIgCAMIAAAAIAAAAIALgJQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMIgCALIAHgHQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAFAOgEAKQgCAJgGAFIgEAEIALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgMgGIgOgGIgKAGQgKAHgQAGQgQAGgTAAQgSABgTgLIgMAJQgKAIgQAIQgQAIgPAAQgQAAgJgEQgLgFgFgEIgEgFIgKANQgJAMgPARQgPAQgTANQgTANgTABQgZABgLgGQgMgGgDgHIgCgHIgFARQgFAQgLATQgMAVgUAOQgTANgKADQgLADgGgBIgFgCIADAHQADAIADALQACALgDALQgCALgGADQgEADgFgBIgCAAIAMAGQANAGANAKQARALAKANQAKANgEANQgEAOABASQAAARAIAPQAHAQARAIQASAIAdgEIgFAJQgEAJgKAJQgJAJgRAAQgRgBgJgLQgKgLgFgLIgDgIIgCgDIACADIABAFQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgBgKIAAAGQAAAGgCAHQgDAGgEACQgGACgKgIIgWgUIgIgKIAAAAIAFAHIADADIADAFQAKAPAHAWQAHAWgFAXQgFAXgGAIQgFAIgEABIgEAAIAFAJQAFAKAFANQAFANgCANQgCAMgJADQgJAEgJAAIgKgBIgFgCQgFgDgHgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgHAAIgagBQgMAAgGAKQgGAJgBAKIgCAKIgGACQgFACgEAHQgEAGACAPQADAPAOAaIgIAGQgIAGgLABIgDABQgKAAgMgLgAhiDwIgFgHIAAAAIAIAKIgDgDgAmpCLIAMAAIgPABIgPABQAKgCAIAAg");
	this.shape_197.setTransform(-12.3,-159.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#725107").ss(1,1,1).p("ACYBzQgCgDgCgFQgHgOgLgYQgLgXgLgaQgLgYgIgWQgIgXgCgOAANjcQgBAAgRAKQgUAKgbAUQgcAVgaAfQgaAggOArQgOArAIA2QAAABAHAaQAHAZASAoQASApAhAsQABgBAOgPQANgPAYgWQAWgVAfgSQAegSAggGQAagEANAFQALAEAEAFQAAABABAAQADAGAAABQgBgBgDgH");
	this.shape_198.setTransform(-34.2,-59.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#365B0A").ss(1,1,1).p("ACHmNIgPGhQABABAIAIQAIAJAFANQAGANgHAOQgIAOgFAZQgFAaAAArQAAAqAJBAQAAABAGAHQAGAGALAIQALAHAPACQAPACAFAKQAFAJAAAJQAAAJgBABQAAgBgMgCQgLgCgTAHQgSAIgWAaQgQAVgOATQgOATgRAOQgRAOgZAGQgXAHglgFQhLgKgigRQghgSABgTQAAgKAJgfQAKggAMgvQAMguAKg4QAKg3ABg4QABg5gLguQgLgwgOgjQgPgkgLgTQgMgUAAAAQAAgBgEgUQgDgTgEggQgDgfgBgkQAAgkAFghQAFgiAOgXQAOgXAagGQAngIAogHQApgHAfgEQAigFAVgDQAUgDABAAQABAAAJABQAJACAMAEQANAEAKAJQALAIACAPQADAUgFAMQgEAMgGAGQgFAFgBAAg");
	this.shape_199.setTransform(0.2,49.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#3A0B0B").s().p("AACFfQgIgLgCgMQgCgMACgIIACgKIgPgGIgEADQgFADgLAAQgKgBgTgLQgTgMgFgQQgEgQACgMIACgOIgNgIIgIAHQgIAHgNAGQgNAGgRABQgQACgSgJQgPgIgHgOQgJgPAAgTQAAgOAGgPQAGgPAOgMQANgMAXgEIANgDIgJgKIgFgJQgFgIgBgLQABgJAHgHQALgKAXgEIgCgQQggABgUgFQgVgGgIgJQgFgJACgEQAEgHAMgDQALgDAIAAIABgQIgIgDQgGgDgIgIQgHgIgFgOQgDgOAEgWQABgGADgGQADgGAFgBQAFgBAKAHQAJAHAJAKQAKAKAGAKIAOgIIgDgMQgCgLAGgLQALgPAlACIAWACIgPgPIgMgNQgKgKgMgSQgMgSgJgVQgIgWAAgXQAAgXAPgVQAKgPALgKQgOAkAAAmQAAAlAWAmQAdApAnAZQAmAaAxABQgTAUgOAXQgNAXgDAXQgBAXALASQAGAJALAAQALAAAOgEQAOgFANgCQANgDAKAFQAUAHACAJQACAIgJAJQgIAJgNALQgMAKgLANQgKANAAAQQAngVAggEQAegDAZALQAYALASAVQgMgKgHgHIgNAJQAIALAJASQAHASACAUIgCAQQgHAWgFAGIgEAGIgKgDIgHgBIAJAPQAFAIAGAPQAHAQgBAOQAAAFgFADQgFAEgHAAIgMAAQgBABgIgHQgIgHgFgYQgCgSgLgOQgKgOgMgJQgMgIgIABQgLABAAALIAAACIgGAAIgDAAIgRgBQgLAAgHAHQgHAHgDAJQgFAKgBAJQgFABgGAGQgHAIAAANQABAUAPAcIgJAFQgEADgGAAQgKAAgHgIg");
	this.shape_200.setTransform(-38.1,-146.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#490F0E").s().p("AkzHcQgMgMgDgOQgBgOABgKIACgKIgFAFQgGAEgNAAQgOAAgWgNQgVgOgGgSQgFgTACgNIADgOIgIAGQgJAHgOAHQgOAHgSACQgTABgVgJQgUgLgJgVQgIgVAEgXQADgYARgSQAQgTAfgGIgGgKQgGgJgBgNQgCgMAMgLQAMgLAQgDIAJgCIAOgBIAPgBIgLAAQgIAAgKACIgUgBQgVAAgSgGQgTgFgJgNQgIgNAFgIQAEgIAJgDQALgEAHgBIAKgBIgJgEQgHgDgJgJQgKgJgFgQQgEgRAEgWQAFgUAJgEQAJgEALAGQAKAGAKAKIAQAQIAGAJIgDgKQgDgHADgMQACgMAOgJQANgIAfACIgKgLQgKgLgOgSQgMgTgKgXQgKgXABgZQABgaAQgYQAVgdATgJQATgJANADQAOACAJAGIAIAGIACgOQAEgOALgTQALgTAWgQQAXgOARABQAPACAJAGIAJAIIADgRQACgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAGAGIAHAFIgBgEQAAgEAIgHQAJgHAbgIQAagGAMAFQAKAGADAIIACAIIAHgMQAGgMAQgQQARgQAcgNQAVgJAMAFQANAEAFAKQAGALACAJIABAJIAGACQAHACAUAAQAVgBAngGQAYgDAMAJQANAJADAPQAEAQgBAQQgBAQgDALIgCAMIAAAAIAAAAIALgJQAMgIAQgFQAQgFAOAIQANAKADAOQADAOgCAMIgCALIAHgHQAHgHAMgFQAMgGAQAEQARADATASQATAUAFAOQAFAOgDAKQgEAJgFAFIgFAEIANAGQALAGAPAMQAPALALARQALAQAAAVQgCAUgOAEQgMAFgRgEQgRgEgMgGIgOgGIgKAGQgJAHgRAGQgQAGgTAAQgTABgSgLIgLAJQgLAIgQAIQgQAIgQAAQgPAAgJgEQgLgFgEgEIgGgFIgJANQgJAMgPARQgPAQgTANQgSANgUABQgZABgLgGQgMgGgDgHIgCgHIgFARQgFAQgMATQgLAVgTAOQgUANgKADQgMADgFgBIgFgCIADAHQADAIADALQACALgCALQgEALgFADQgEADgFgBIgCAAIAMAGQAMAGAOAKQAQALALANQAKANgDANQgFAOAAASQABARAHAPQAIAQARAIQASAIAdgEIgEAJQgFAJgKAJQgKAJgQAAQgQgBgLgLQgJgLgFgLIgEgIIgBgDIABADIACAFQACAJAAAJQAAAKgGAFQgFAEgMgGQgPgHgKgNQgJgOgFgOQgFgOgCgKIgCgKIAAAGQgBAGgCAHQgCAGgEACQgGACgJgIIgYgUIgHgKIAAAAIAFAHIACADIAEAFQAJAPAIAWQAIAWgFAXQgHAXgFAIQgGAIgDABIgEAAIAGAJQAEAKAFANQAFANgCANQgCAMgJADQgJAEgJAAIgJgBIgGgCQgGgDgGgJQgGgJgEgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgIAAIgZgBQgMAAgGAKQgGAJgBAKIgDAKIgFACQgFACgEAHQgEAGACAPQACAPAOAaIgHAGQgIAGgMABIgCABQgKAAgLgLgAhiDwIgFgHIAAAAIAHAKIgCgDgAm6CNIAAAAgAmoCLIALAAIgPABIgOABQAKgCAIAAg");
	this.shape_201.setTransform(-7.5,-158);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgEAAQAAgDACgDQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAEABAAAIQAAAJgEABQgDgBgBgJg");
	this.shape_202.setTransform(36.4,-143.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgEANQgCgGAAgHQAAgHACgFQADgFABAAQACAAADAFQACAGAAAGQAAAHgCAGQgDAFgCAAQgBAAgDgFg");
	this.shape_203.setTransform(36.4,-142.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#222266").s().p("AgNAaQgFgLAAgPQAAgOAFgLQAHgKAGAAQAIAAAFAKQAGALAAAOQAAAPgGALQgFAKgIAAQgHAAgGgKg");
	this.shape_204.setTransform(26,-140.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#3A0B0B").ss(1,1,1).p("AAYhEQASAXAIAmQAEAXgDAVQgDAVgKAOQgIAOgPADQgTADgTgXQgTgWgHgmQgEgXADgWQADgVAJgOQAJgOAOgCQAUgDATAWg");
	this.shape_205.setTransform(23.1,-143.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgXBFQgTgXgHglQgEgXADgWQADgVAJgOQAKgOAOgCQATgDATAWQASAWAIAnQAEAWgDAWQgDAVgKAOQgJAOgOADIgFAAQgQAAgRgUg");
	this.shape_206.setTransform(23.1,-143.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(1,1,1).p("AAfg+QAAAAgMAFQgLAGgQANQgQAMgSAVQgRATgMAfQAAABAEAEQAEAFAKAEQAKAFARgBQAAAAAGgMQAGgMAMgPQALgQATgLQASgNAagDQAAgBgEgKQgFgLgKgKQgIgKgOgBg");
	this.shape_207.setTransform(13.3,-155.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#4C270E").s().p("Ag1A7QgKgEgEgFIgEgFQAMgfARgTQARgVARgMQAPgNAMgGIAMgFQAOABAIAKQAKAKAFALIAEALQgaADgSANQgTALgKAQQgNAPgGAMIgGAMIgDAAQgPAAgJgEg");
	this.shape_208.setTransform(13.3,-155.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#B28222").s().p("Ag0AiQAVgVAVgPQATgQARgLIAYgRQADASABARQgmAZggAhQgVgMgPgBg");
	this.shape_209.setTransform(9.2,-73.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#725107").ss(1,1,1).p("AAji/QAAAAgRAIQgRAIgWAVQgYAWgZAoQgZAogQA9QgRA/gBBcQABAAAWAHQAWAIAlAGQAlAHArAAQAtgBAtgOIAHiZ");
	this.shape_210.setTransform(-26.2,-55.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#AF800B").s().p("AgvC5QgkgGgXgIIgWgHQAAhcARg/QAQg9AZgoQAZgoAYgWQAXgVAQgIIARgIIBfDXIgHCZQguAOgtABIgFAAQgnAAgjgHg");
	this.shape_211.setTransform(-26.2,-55.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#3A0B0B").ss(1.1,1,1).p("AAql7Ii9gOQAAABgBAXQgBAXgBAjQAAAjAAAkQABAkACAbQACASALAhQAMAhARApQARApASAnQATAqARAjQAQAjAKAVQAJAWAAAAQgBABgDAMQgGAMgHASQgHASgDATQgDASAFAOQAHARANALQALALAKAEQALAFAAAAQgBABgFAJQgFAJABALQABAMAQAHQANAFASgJQARgJARgQQARgPAMgQQAMgPADgIQADgJABgOQABgPABgQQABgPAAgLQAAgKAAgBIg3hvQAAgBgEgWQgEgVgGgjQgHgggIgoQgHgngIgkQgIglgGgZQgGgZgEgGQgEgHAAgSQABgTACgXQADgYADgXQAEgWACgPQADgPAAgBg");
	this.shape_212.setTransform(-21,-2.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#72461E").s().p("AAjGIQgQgHgBgMQgBgLAFgJIAGgKIgLgFQgKgEgLgLQgNgLgHgRQgFgOADgSQADgTAHgSQAHgSAGgMIAEgNIgJgWIgag4IgkhNIgjhQQgRgpgMghQgLghgCgSQgCgbgBgkIAAhHIACg6IABgYIC9AOIgDAQIgGAlIgGAvQgCAXgBATQAAASAEAHQAEAGAGAZQAGAZAIAlIAPBLIAPBIIAKA4IAEAXIA3BvIAAALIgBAaIgCAfQgBAOgDAJQgDAIgMAPQgMAQgRAPQgRAQgRAJQgMAGgJAAQgFAAgFgCg");
	this.shape_213.setTransform(-21,-2.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#B28222").s().p("AhbhFIAQgFIAKgCIAbATIAqAeQAYAQAYALQAYANAQAEIgLAXIgTAlQhDhShWhAg");
	this.shape_214.setTransform(-7.1,-70.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#725107").ss(1,1,1).p("AAjBkQgOgIgWgVQgXgVgcgoQgcgmgchAIA1gPQAAABAUAPQAVAOAaAUQAdATAbAOQAbAOAOABIg7B1QgBAAgOgIg");
	this.shape_215.setTransform(-7.9,-67.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D6A22D").s().p("AAjBkQgOgIgWgVQgYgVgbgoQgcgmgbhAIAzgPIAWAQIAuAiQAdATAaAOQAcAOAOABIg8B1IAAAAIgOgIg");
	this.shape_216.setTransform(-7.9,-67.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#725107").ss(1,1,1).p("AAog+QgTAMgaAVQgcAWgdAbQABAAAKABQAKAAAQAGQAPAGANAQQAPAPALAFQAKAGAGgBQAFAAAAAAQABgBAEgUQAFgUACghQADgggGgpQgBAAgSALg");
	this.shape_217.setTransform(8.8,-71.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D6A22D").s().p("AAdBFQgLgFgPgPQgNgQgPgGQgQgGgKAAIgLgBQAdgbAcgWQAagVATgMIATgLQAGApgDAgQgCAhgFAUIgFAVIgFAAIgBAAQgGAAgJgFg");
	this.shape_218.setTransform(8.8,-71.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#C18D17").s().p("AAvDPQAFhwADhtQAEhNgUhHQgUhJghhCQgkhCgug+QAVAIAaAYQAbAWAYAuQAaAvAWBMQATBIAKBRQAKBPAEBPQAEBPgBBCQAAA9gBApIgDA1QgfANgfAMQALhvAGhwg");
	this.shape_219.setTransform(20.6,-37.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#845E09").s().p("AADGdQg2gKgigLQgjgLgKgFIAFhhIAFhuIAFiLIAHiFQAEhBAGg3QAGg2AIglQAJgnAZgcQAZgbAegSQgpBHgQBOQgRBPADBRQADBRARBNQARBPAaBHQAWBAAiA7QAjA7ArA2QhJgDg3gLg");
	this.shape_220.setTransform(-23.2,-31.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#725107").ss(1,1,1).p("ABinSIiUAWQAAAAgWADQgVAEghAJQggAKgjASQgiASgbAdQgbAdgKAqQgJArgHBAQgGBBgEBNQgEBLgDBQQgEBRgDBLQgCBLgEA8QAAABAjAMQAiAMA+ANQA+ANBUADQBTADBkgSQBkgSBvgwQAAgBABgcQACgcABgwQABgxgBg+QgBg/gFhFQgFhDgJhFQgKhGgRg+QgUhKgaguQgZgugagYQgagZgVgJQgWgKgNgBQgNgBgBAAg");
	this.shape_221.setTransform(-3,-35.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#AF800B").s().p("Ag8HTQhUgDg+gNQg+gNgigMQgjgMAAgBQAEg8AChLIAHicIAHibQAEhNAGhBQAHhAAJgrQAKgqAbgdQAbgdAigSQAjgSAggKQAhgJAVgEIAWgDICUgWIAOABQANABAWAKQAVAJAaAZQAaAYAZAuQAaAuAUBKQARA+AKBGQAJBFAFBDQAFBFABA/QABA+gBAxIgDBMIgBAdQhvAwhkASQhWAPhIAAIgZAAg");
	this.shape_222.setTransform(-3,-35.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#365B0A").ss(1,1,1).p("ABAhZQABAAgFATQgEATgNAdQgNAbgaAeQgYAfgrAY");
	this.shape_223.setTransform(-14.5,24.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#497715").s().p("Ag3IKIgBgMQAAgWAFgxIAOh8IAcjxQAGg6ADguQABgvAAgnQAAg7gEgsQgFgrgJgjQgIghgKggIgIgZQgOgzABggQAAgaAEgOQAEgNADgFIBTgIQgMArABAsIAVDtQAKB3AAB0QAAB1gTBzQgTBzgtBxQgMAagIAcQgIgGgCgJg");
	this.shape_224.setTransform(-27.3,55);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111E3D").s().p("Ah/AsQgwgGgdgGIgdgGQABgNADgNIAIgaIAEgLIAdgBIBHgDIBfgDIBhgDIBSgBIAvAAQAVACAFAMQAFANgBAMIgDAKQg9AbhAALQhBALg7AAQg8gBgxgFg");
	this.shape_225.setTransform(-6.2,109.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#497715").s().p("AhhHMQgQgNAAgLQAAgFAEgOIAJghIAVhOQALguAJg0QAJg0ABg2IAAgIQAAg0gKgsQgKgtgOgiQgOgjgLgUIgOgYIgFgZQgDgVgDgfQgEggAAgjQAAgiAFgfQAFgfANgUQANgVAXgGIBVgQIBPgMIA0gHQglBJgVBJIglBrQgTAzgNAyQgLAzAAAxQAAEAgpD/QgngLgRgMg");
	this.shape_226.setTransform(10,50);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#5B3516").s().p("AgkCnIgBAAIgCAAIgLADQgLABgOgDQgOgCgLgNQgKgNghgcIg3gwQgegbgdggQgdgdgYgiQgXghgMgiQABgFAIgMQAIgMAPgQQAZA2AnA2QAnA2AtApQAtArAsAZQArAZAhgBQA3gEA/gNQBAgNA8gZQA7gZAtgoIgDAIQgMAfgVAUQgWASgUAJQgVAIgKACIAAgCIgGACQgNAHghAMQghAOgqANQgpAOgoAGQgUAEgPAAQgQAAgOgEg");
	this.shape_227.setTransform(5.7,-20.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#72461E").s().p("AgpDQIgNACQgLACgPgDQgQgDgMgPQgIgJgXgUQgXgUgfgcQgggcgggiQghgigagiQgaglgNglIAIgQQAJgPAVgVQAVgUAlgUQAlgTA5gJICJDSIAHgCQAHgBAPAAQARAAAgADIA5AGQAcAEAXABQAXABAQgHIAGgEQAGgCAFgKQAGgKgBgRQgBgOACgOQADgOAGgMQgJgJgBgNQgCgNAEgMQAFgMAJgEQAJgDANALQAEAEAIAMQAIALAEAMQAFALgEAGIAFgDQAGgDAJgCQAIgCAJADQAIAEAFAKQAFAJACAJIACAMIADAFIAIATQAFAPgCARQgCAUgEAOIgFAOQgLAdgSASQgTATgUAKQgTAJgOAEIgOAEIAAgCIgxAVQghANgqAOQgqANgnAGQgTADgPAAQgRAAgOgDg");
	this.shape_228.setTransform(6.1,-24.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#725107").ss(1,1,1).p("ACWB5QgBgDgCgEQgHgPgKgYQgKgYgKgaQgKgZgIgWQgHgXgBgOAAYjbQgBAAgUAJQgSAKgcATQgdAUgbAeQgbAfgPArQgQAqAGA2QAAABAGAaQAGAaARApQARApAfAtQAAAAAPgPQAOgPAZgVQAXgUAegRQAfgRAhgFQAagCANAFQAKAEAEAFQABABAAABQADAGAAAAQAAAAgEgI");
	this.shape_229.setTransform(-23,-53.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#AF800B").s().p("Ah5CFQgQgpgGgZIgGgbQgGg2APgrQAQgrAbgeQAbgfAcgUQAdgTASgKIAUgJIA8ChQACANAHAXIARAvIAVAyIAQAnIAEAHQgEgEgLgFQgMgFgaADQghAFgfAQQgfARgXAUQgYAVgPAPIgPAQQgfgugRgpg");
	this.shape_230.setTransform(-23.1,-53.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(1,1,1).p("Am7CNQgJAAgLgBQgUAAgSgGQgTgFgJgNQgIgNAEgIQAFgIAJgDQAKgEAIgBQAJgBABAAQgBAAgIgEQgHgDgKgJQgJgJgFgQQgFgRAFgWQAFgUAJgEQAJgEAKAGQALAGAKAKQAJAIAGAIQAGAIABABQgBgBgCgJQgDgHADgMQACgMANgJQAOgIAfACQgBAAgKgLQgKgLgNgSQgNgTgJgXQgKgXABgZQAAgaARgYQAVgdATgJQASgJAOADQAOACAIAGQAIAFAAABQAAgBADgNQAEgOALgTQALgTAWgQQAXgOAQABQAQACAJAGQAIAHABABQgBgBADgQQADgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAGAGQAFAEACABQgBgBAAgDQAAgEAIgHQAJgHAagIQAbgGAMAFQAJAGADAIQADAGAAACQAAgCAGgKQAHgMAQgQQAQgQAdgNQAVgJAMAFQANAEAFAKQAGALACAJQABAJAAAAQgBABAHABQAHACAUAAQAUgBAogGQAYgDAMAJQANAJADAPQAEAQgBAQQgBAQgDALQgCALgBABQABgBALgIQAMgIAQgFQAQgFAOAIQANAKADAOQACAOgBAMQgCAKAAABQABgBAGgGQAGgHANgFQAMgGAQAEQARADATASQATAUAFAOQAEAOgDAKQgDAJgFAFQgEAEgBAAQABAAALAGQAMAGAPAMQAPALALARQALAQgBAVQgBAUgOAEQgNAFgQgEQgRgEgNgGQgMgGgBAAQAAAAgKAGQgKAHgQAGQgQAGgTAAQgTABgSgLQgBAAgLAJQgKAIgQAIQgQAIgQAAQgPAAgKgEQgKgFgFgEQgFgEAAgBQAAABgJAMQgJAMgPARQgPAQgTANQgTANgTABQgZABgMgGQgLgGgDgHQgCgGAAgBQgBACgEAPQgFAQgMATQgLAVgUAOQgTANgKADQgMADgFgBQgEgBgBgBQAAABADAGQADAIADALQACALgDALQgDALgFADQgFADgEgBQgBAAgBAAQADACAJAEQAMAGAOAKQAQALALANQAKANgEANQgEAOAAASQAAARAIAPQAIAQARAIQASAIAdgEQAAAAgFAJQgEAJgKAJQgKAJgQAAQgRgBgKgLQgKgLgEgLQgDgGgBgCQABACABADQACAJAAAJQAAAKgGAFQgFAEgNgGQgOgHgKgNQgJgOgFgOQgGgOgCgKIgCgKQAAABAAAFQAAAGgCAHQgCAGgFACQgFACgKgIQgQgNgHgHQgGgKgBAAQgBAAAGAHQABABABACQACACABADQAKAPAIAWQAHAWgFAXQgGAXgFAIQgGAIgDABQgEAAAAAAQAAAAAFAJQAFAKAFANQAEANgBANQgCAMgJADQgJAEgJAAQgJAAgBgBQAAABgFgDQgGgDgGgJQgHgJgDgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgIAAQgIAAgRgBQgMAAgGAKQgGAJgCAKQgCAKAAAAQAAAAgFACQgFACgEAHQgEAGACAPQACAPAOAaQAAABgIAFQgHAGgMABQgLACgNgMQgLgMgDgOQgCgOACgKQABgIABgCQgBABgEAEQgGAEgNAAQgOAAgWgNQgWgOgFgSQgFgTACgNQACgNABgBQgBAAgIAGQgIAHgOAHQgOAHgTACQgSABgVgJQgUgLgJgVQgIgVADgXQAEgYAQgSQARgTAfgGQgBgBgFgJQgGgJgBgNQgCgMAMgLQAMgLAQgDQAEgBAEgBQAKgCAIAAQALgBABABQgBAAgOABQgHABgIAAgAATEgIgBgD");
	this.shape_231.setTransform(-7.5,-158);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#490F0E").s().p("AkzHcQgMgMgDgOQgBgOABgKIACgKIgFAFQgGAEgNAAQgOAAgWgNQgVgOgGgSQgFgTACgNIADgOIgIAGQgJAHgOAHQgOAHgSACQgTABgVgJQgUgLgJgVQgIgVAEgXQADgYARgSQAQgTAfgGIgGgKQgGgJgBgNQgCgMAMgLQAMgLAQgDIAJgCIAOgBIAPgBIgLAAQgIAAgKACIgUgBQgVAAgSgGQgTgFgJgNQgIgNAFgIQAEgIAJgDQALgEAHgBIAKgBIgJgEQgHgDgJgJQgKgJgFgQQgEgRAEgWQAFgUAJgEQAJgEALAGQAKAGAKAKIAQAQIAGAJIgDgKQgDgHADgMQACgMAOgJQANgIAfACIgKgLQgKgLgOgSQgMgTgKgXQgKgXABgZQABgaAQgYQAVgdATgJQATgJANADQAOACAJAGIAIAGIACgOQAEgOALgTQALgTAWgQQAXgOARABQAPACAJAGIAJAIIADgRQACgQAKgUQALgVAWgOQARgKAPABQAPAAAMAGQAMAGAGAGIAHAFIgBgEQAAgEAIgHQAJgHAbgIQAagGAMAFQAKAGADAIIACAIIAHgMQAGgMAQgQQARgQAcgNQAVgJAMAFQANAEAFAKQAGALACAJIABAJIAGACQAHACAUAAQAVgBAngGQAYgDAMAJQANAJADAPQAEAQgBAQQgBAQgDALIgCAMIAAAAIAAAAIALgJQAMgIAQgFQAQgFAOAIQANAKADAOQADAOgCAMIgCALIAHgHQAHgHAMgFQAMgGAQAEQARADATASQATAUAFAOQAFAOgDAKQgEAJgFAFIgFAEIANAGQALAGAPAMQAPALALARQALAQAAAVQgCAUgOAEQgMAFgRgEQgRgEgMgGIgOgGIgKAGQgJAHgRAGQgQAGgTAAQgTABgSgLIgLAJQgLAIgQAIQgQAIgQAAQgPAAgJgEQgLgFgEgEIgGgFIgJANQgJAMgPARQgPAQgTANQgSANgUABQgZABgLgGQgMgGgDgHIgCgHIgFARQgFAQgMATQgLAVgTAOQgUANgKADQgMADgFgBIgFgCIADAHQADAIADALQACALgCALQgEALgFADQgEADgFgBIgCAAIAMAGQAMAGAOAKQAQALALANQAKANgDANQgFAOAAASQABARAHAPQAIAQARAIQASAIAdgEIgEAJQgFAJgKAJQgKAJgQAAQgQgBgLgLQgJgLgFgLIgEgIIgBgDIABADIACAFQACAJAAAJQAAAKgGAFQgFAEgMgGQgPgHgKgNQgJgOgFgOQgFgOgCgKIgCgKIAAAGQgBAGgCAHQgCAGgEACQgGACgJgIIgYgUIgHgKIAAAAIAFAHIACADIAEAFQAJAPAIAWQAIAWgFAXQgHAXgFAIQgGAIgDABIgEAAIAGAJQAEAKAFANQAFANgCANQgCAMgJADQgJAEgJAAIgJgBIgGgCQgGgDgGgJQgGgJgEgUQgEgUgMgOQgMgOgLgGQgMgFAAAIQAAAKgIAAIgZgBQgMAAgGAKQgGAJgBAKIgDAKIgFACQgFACgEAHQgEAGACAPQACAPAOAaIgHAGQgIAGgMABIgCABQgKAAgLgLgAhiDwIgFgHIAAAAIAHAKIgCgDgAmoCLIALAAIgPABIgOABQAKgCAIAAg");
	this.shape_232.setTransform(-7.5,-158);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#3A0B0B").s().p("AAFAsIAEgbQACgPgCgJQgEgNgFgIQgHgKgGgEIgGgFIAFgIIAIAFQAGAFAGAKQAIALAEAPQAIAegYAjIADgMg");
	this.shape_233.setTransform(82.7,-100.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#725107").ss(1,1,1).p("AhSh9QABAAAOAIQANAIAYAKQAXAKAaAGQAcAFAdgEQABAAADAVQADAUgBAhQgBAegNAkQgNAkggAgQABABgLgCQgLgBgbgL");
	this.shape_234.setTransform(22.9,-65.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#AF800B").s().p("AANB9QgLgBgbgLIg5juIAPAIQANAIAYAKQAXAKAaAGQAcAFAdgEIAEAVQADAUgBAhQgBAegNAkQgNAkggAgIgBAAIgJgBg");
	this.shape_235.setTransform(22.9,-65.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#3A0B0B").ss(1,1,1).p("AgoArIAmgjQABAAAIADQAKADAPgDQAPgDAQgNQAAgBACgIQACgJgBgJQgBgIgJgCQgNgBgOACQgOACgPgBQgMAAgPAHQgPAHgMAIQgLAHAAAB");
	this.shape_236.setTransform(96.4,-97.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#72461E").s().p("AhBgKIALgIQAMgIAPgHQAPgHAMAAQAPABAOgCQAOgCANABQAJACABAIQABAJgCAJIgCAJQgQANgPADQgPADgKgDIgJgDIgmAjg");
	this.shape_237.setTransform(96.4,-97.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#3A0B0B").ss(1,1,1).p("AhMArQAAAAAGgNQAFgNALgQQALgOAPgMQABAAAKgEQAJgEAMgGQAOgHANgHQAMgIAGgGQAAgBAIgBQAIgBAHAEQAHAEgCAPQgCAOgFAKQgFAKgLAIQgMAHgWAKQAAABgJAJQgJAKgIANQgJAOgBAL");
	this.shape_238.setTransform(88.5,-110);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#72461E").s().p("AhMArIAGgNQAFgNALgQQALgOAPgMIALgEIAVgKQAOgHANgHQAMgIAGgGIAIgCQAIgBAHAEQAHAEgCAPQgCAOgFAKQgFAKgLAIQgMAHgWAKIgJAKIgRAXQgJAOgBALg");
	this.shape_239.setTransform(88.5,-110);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#3A0B0B").ss(1,1,1).p("AA5hMQgRAGgVAGQgTAHgPAEQgPAEgBAAIg7BKIA2A3QAAAAAEgKQAFgJAGgOQAHgNAHgLQAGgLADgDQAAAAANgCQANgDARgEQARgFANgIQAOgIABgMQABgVAAgGQgBgHAAABQAAAAgCgFQgCgFgHgCQgHgDgPAFg");
	this.shape_240.setTransform(94.7,-105.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#72461E").s().p("AhaAZIA7hKIAQgEIAigLIAmgMQAPgFAHADQAHACACAFIACAFIAAAAIAAAAIABAGIgBAbQgBAMgOAIQgNAIgRAFQgRAEgNADIgNACQgDADgGALIgOAYIgLAXIgEAKg");
	this.shape_241.setTransform(94.7,-105.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#663D1B").s().p("AlODHIABgQIADgVIACgPQAgACAjAEQAhAEAiADQAiACAigGQAjgFAigRQASgNAgggIBIhLIBWhWQAOgOAVgRQAUgQAUgGQARgFARgIQAQgIANgLIAZgWIAVgTIgBAFIgCALIgCAHQgHAOgLALQgJAMgMAKQgMAJgNAHQgaALgNADIgMACIgCAAIgCABIgYAbIg6A/IhKBLQgmAngfAdQghAdgSAJQgRAHgcAFQgdADgiADIhDADIg6ACIgkAAg");
	this.shape_242.setTransform(58.4,-74.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#3A0B0B").ss(1,1,1).p("AFPhLQgGAKgLAOQgKAOgNANQgNANgOAGQgcAKgNADQgNACAAAAQAAAAgQASQgQASgbAdQgaAdggAhQggAhgfAfQggAegYAXQgaAWgQAHQgSAIghAFQgiAFgmACQgmACgjABQgjABgWAAQgXAAAAAAIAUixICCgKQAAAAAQgIQARgJAjgXQAjgWA5gpQA3gnAsgjQAtgjAcglQAbgkAFguQAFguACgUQADgUAAgEQABgDAAgBQABAAALgBQALgBAMAGQAMAFACASQABASgFAOQgGAOgEAKQgDALAHAGQAHAFAOAFQAOAEARALQASALARAWQARAXANAnQAAABgGAJg");
	this.shape_243.setTransform(58.4,-85);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#72461E").s().p("AlUEzIAUixICCgKIAQgIQARgJAjgXQAjgWA5gpQA3gnAsgjQAtgjAcglQAbgkAFguIAHhCIADgYIABgEIAMgBQALgBAMAGQAMAFACASQABASgFAOIgKAYQgDALAHAGQAHAFAOAFQAOAEARALQASALARAWQARAXANAnIgGAKQgGAKgLAOQgKAOgNANQgNANgOAGQgcAKgNADIgNACIgQASIgrAvIg6A+Ig/BAQggAegYAXQgaAWgQAHQgSAIghAFQgiAFgmACIhJADIg5ABIgXAAg");
	this.shape_244.setTransform(58.4,-85);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#3A0B0B").s().p("AgWArQgEgBAAgFIADgKQACgKAFgLQAEgKAIgHIAOgRQAIgKAJgFQgEALgHALQgHAKgIAIQgEADgDAIQgEAJgDAJIgDANQgBAFgEAAIgBgBg");
	this.shape_245.setTransform(34.8,-40.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#3A0B0B").s().p("AgWArQgEgBAAgFIADgKQACgKAFgLQAEgKAIgHIAOgRQAIgKAJgFQgEALgHALQgHAKgIAIQgEADgDAIQgEAJgDAJIgDANQgBAFgEAAIgBgBg");
	this.shape_246.setTransform(32.1,-41.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#3A0B0B").s().p("AgWArQgEgBAAgFIADgKQACgKAFgLQAEgKAIgHIAOgRQAIgKAJgFQgEALgHALQgHAKgIAIQgEADgDAIQgEAJgDAJIgDANQgBAFgEAAIgBgBg");
	this.shape_247.setTransform(29.7,-43.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#3A0B0B").ss(1,1,1).p("ABeACQgDgCgBAAQgBgBgBgGQgBgEABgEQABgFgCgEQgDgGgEAAQgFgBgEAAQgFAAgFgCQgCgIgBgJQgBgIgEgGQgEgGgKgDQgGgBgFABQgGABgFgDQgBgBgBgBQgDgDgBgFQAAgEgDgCQgLgIgNAEQgOAEgNALQgNALgLAMQgLAMgHAIQgIAJgCAMQgCAMgCAJQgBAFgCAHQgBAIAAAGQABAHAGACQAHABAFgDQAFgEAFgDQgCAHgCALQgBAKAFAHQAFAFAGgDQAHgDAFgFQgGALAGAGQAFAGAJgBQAKgBAGgIQgCAGAEAEQAEAFAHACQAHADACAAQAKABAJgFQAJgFAFgJQgEAJAFAFQAFAGAIACQAJACAHgDQANgGAHgPQAIgOAFgNQAHgPAAgJQAAgJgKgNg");
	this.shape_248.setTransform(34.7,-42.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#72461E").s().p("AAwBhQgIgCgFgGQgFgFAEgJQgFAJgJAFQgJAFgKgBIgJgDQgHgCgEgFQgEgEACgGQgGAIgKABQgJABgFgGQgGgGAGgLQgFAFgHADQgGADgFgFQgFgHABgKIAEgSIgKAHQgFADgHgBQgGgCgBgHQAAgGABgIIADgMIAEgVQACgMAIgJIASgUQALgMANgLQANgLAOgEQANgEALAIQADACAAAEQABAFADADIACACQAFADAGgBQAFgBAGABQAKADAEAGQAEAGABAIIADARQAFACAFAAIAJABQAEAAADAGQACAEgBAFIAAAIIACAHIAEACQAKANAAAJQAAAJgHAPQgFANgIAOQgHAPgNAGQgEACgFAAIgHgBg");
	this.shape_249.setTransform(34.7,-42.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#725107").ss(1,1,1).p("AAQjjQgBAAgRAJQgUAKgdATQgcAUgbAeQgbAfgQArQgPAqAGA2QAAABAEARQAFASAKAdQAKAdARAiQAQAjAYAiQAAgBAIgMQAJgNAQgSQARgTAXgRQAZgSAhgLQAbgHAXAAQAXgBAOADQAPACAAAAQAAAAgIgPQgIgOgNgXQgMgXgMgaQgNgXgIgXQgJgWgCgO");
	this.shape_250.setTransform(-22.2,-52.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#AF800B").s().p("AhwCfQgRgigKgdIgPgvIgEgSQgGg2APgqQAQgrAbgfQAbgeAcgUQAdgTAUgKIASgJIA8CgQACAOAJAWQAIAXANAXIAYAxIAVAlIAIAPIgPgCQgOgDgXABQgXAAgbAHQghALgZASQgXARgRATQgQASgJANIgIANQgYgigQgjg");
	this.shape_251.setTransform(-22.2,-52.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#222266").s().p("AgNAZQgFgKAAgPQAAgOAFgLQAHgJAGgBQAIABAFAJQAGALAAAOQAAAPgGAKQgFALgIAAQgHAAgGgLg");
	this.shape_252.setTransform(26,-141);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#3A0B0B").ss(1,1,1).p("AAYhEQASAWAIAmQAEAXgDAVQgDAWgKAOQgIAOgPADQgTACgTgWQgTgXgHglQgEgXADgWQADgVAJgOQAJgOAOgDQAUgDATAXg");
	this.shape_253.setTransform(23.1,-143.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgXBFQgTgWgHgnQgEgXADgVQADgVAJgOQAKgOAOgDQATgDATAXQASAWAIAmQAEAYgDAUQgDAWgKAOQgJAOgOACIgFABQgQAAgRgUg");
	this.shape_254.setTransform(23.1,-143.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#B28222").s().p("AhbhFIAQgFIAKgDIAbAUIAqAfQAYAQAYALQAYAMAQAFIgLAWIgTAlQhDhShWhAg");
	this.shape_255.setTransform(-7.1,-70.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#725107").ss(1,1,1).p("AAjBkQgOgIgWgVQgXgVgdgoQgcgmgbhAIA1gPQAAABAUAPQAVAOAaAUQAdATAbAOQAbAOAOABIg7B1QgBAAgOgIg");
	this.shape_256.setTransform(-7.9,-68);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D6A22D").s().p("AAjBkQgOgIgWgVQgXgVgdgoQgcgmgbhAIA1gPIAUAQIAvAiQAdATAbAOQAaAOAOABIg6B1IgBAAIgOgIg");
	this.shape_257.setTransform(-7.9,-68);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B28222").s().p("Ag0AiQAVgVAVgPQATgQARgLIAYgQQADARABARQgmAZggAgQgVgLgPgBg");
	this.shape_258.setTransform(9.2,-73.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C18D17").s().p("AAvDPQAFhwADhtQAEhNgUhIQgUhHghhDQgkhCgug+QAVAIAaAXQAbAXAYAvQAaAtAWBNQATBIAKBRQAKBPAEBPQAEBOgBBCQAAA+gBApIgDA0QgfAOgfAMQALhvAGhwg");
	this.shape_259.setTransform(20.6,-37.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#497715").s().p("AhhHMQgQgNAAgLQAAgFAEgOIAJghIAVhPQALgsAJg1QAJg0ABg2IAAgIQAAg1gKgqQgKgugOgiQgOgigLgVIgOgYIgFgZQgDgVgDggQgEgfAAgjQAAgiAFgeQAFgfANgWQANgUAXgGIBVgQIBPgMIA0gHQglBJgVBKIglBpQgTA0gNAzQgLAxAAAzQAAD/gpD/QgngLgRgMg");
	this.shape_260.setTransform(10,50);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#5B3516").s().p("AgCAKIgTgGQgJgDgKACQgFABgFADQgEADgFgCQgDgIAFAAQAGgCAIAAIAMAAIANACQAGAAAHgCIAGgCIAJAAIASAAIAKgBIAOgDQAHgBACgEQgJANgLAEQgKAHgIACIgIABQgKAAgHgEg");
	this.shape_261.setTransform(-4.8,25.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#44240C").s().p("AgGAOQgMgCgIgFQgGgFgCgEQgCgIAMgDQAHgCAFAFIAIAKQAEAEAFACIAJgBIANgCIAHAAIABAFIAAAFIgWACIgHAAIgMgBg");
	this.shape_262.setTransform(-3.4,15.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#5B3516").s().p("AA6GDQgVgEgSgUQgOgRgLgYQgNgYgLgXIgQgmIgHgRIgQgfQgRgdgUgxQgVgxgPg+QgPg9gBhEIABgjQAGhGAGguQAHguAFgaQAFgaAEgLQAEAGALAHQAMAHAUAGQgMAygJAtQgIAsgGAsQgHA5gBAxQABBHAQA4QAIAcAMAYQANAZAPAYQAOAVARAWQAPAVAJAXQAMAjAOAhQAGAPAIAQQAHAQAPAIQAVAMAbAEQAZAFAYgBQgHADgLABQgKABgNgDIgBgBIgCABIgSADIgNABQgMAAgOgDg");
	this.shape_263.setTransform(-21.6,-9.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#3A0B0B").ss(1,1,1).p("AgHlfQAAABgDAcQgDAdgDAvQgDAwAAA5QAAA6AFA6QAGA5AMAyQANAzAZAhQAAABAPAMQAPALAgANQAVAHAPAFQAOAGAJAKQAJAKAGAWQAAAAAFAHQAFAGAGAMQAFANADAQQACANgIAKQgHAKgLAHQgLAHgJAEQgIAEgBAAQAAAAgHAIQgIAJgPAFQgQAGgZgFQgBABgRADQgRACgYgEQgVgFgUgWQgPgRgNgYQgNgYgKgXQgKgYgGgPQgGgQAAAAQgBgBgMgVQgMgVgRgmQgRglgQgxQgRgygJg2QgJg5AEg7QAGhJAHgvQAGgvAGgaQAGgaADgKQAEgKAAABQAAAAACAHQADAHAOAJQAOAJAgAHQAhAHA6ABg");
	this.shape_264.setTransform(-17.8,-10);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#72461E").s().p("AATGNQgVgFgUgWQgPgRgNgYQgNgYgKgXIgQgnIgGgQIgNgWQgMgVgRgmQgRglgQgxQgRgygJg2QgJg5AEg7QAGhJAHgvQAGgvAGgaQAGgaADgKIAEgJIACAHQADAHAOAJQAOAJAgAHQAhAHA6ABIgDAdIgGBMQgDAwAAA5QAAA6AFA6QAGA5AMAyQANAzAZAhQAAABAPAMQAPALAgANIAkAMQAOAGAJAKQAJAKAGAWIAFAHQAFAGAGAMQAFANADAQQACANgIAKQgHAKgLAHQgLAHgJAEIgJAEIgHAIQgIAJgPAFQgQAGgZgFIgSAEIgNAAQgMAAgQgCg");
	this.shape_265.setTransform(-17.8,-10);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#3A200C").s().p("AgcAQIARgSQAKgLALgHQANgHANAEIgGACQgHABgJAGQgJAGgGAKIAFABQAHABAGAFQAHAFgBAKQAAgBgFgEQgGgFgMgBQgMAAgXANIAHgKg");
	this.shape_266.setTransform(59.6,-106);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#3A200C").s().p("AABAEQgLgCgJAFIgJAGQAAgIAEgFQAFgDAFgCIAFgDIgRgRQAaAEALANQAMALADALIADAMQgOgUgOgCg");
	this.shape_267.setTransform(-45.3,-103.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(1,1,1).p("AAJAvQgYgCgTgIQgTgJgLgLQgMgLgFgGQgGgIABAAQAAgBAPgKQAPgKAagJQAZgJAdABQAfABAhAVQAAAAgGAMQgGALgKAMQgKAPgPALQgPALgRgBg");
	this.shape_268.setTransform(13.3,-80.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#BF0014").s().p("AAJAvQgYgCgTgIQgTgJgLgLQgMgLgFgGIgFgIIAPgLQAPgKAagJQAZgJAdABQAfABAhAVIgGAMQgGALgKAMQgKAPgPALQgOAKgRAAIgBAAg");
	this.shape_269.setTransform(13.3,-80.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#5B3516").s().p("AgIAOQgNgDgEgHQgEgFAAgGIABgHQACAMAKADQAJAGAJACQAMACAHAAIAJAAQgSAEgLAAIgJgBg");
	this.shape_270.setTransform(27.5,-93);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#5B3516").s().p("AgEAUQgMgEgIgHIgJgIQAZAGANgGQAPgFAHgIIAHgIQgGAbgKAJQgIAFgIAAIgGgBg");
	this.shape_271.setTransform(-3.4,-92.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(1,1,1).p("ABcAbQgPAZgUAQQgUAQgagBQgYgDgWgPQgXgPgRgWQgSgVgNgTQgMgUgHgOQgHgOAAgBQABABANAHQANAGAWAJQAVAJAcAFQAbAGAagCQAbgCATgFQASgGAQgMQAPgNATgYQAAABgFARQgEASgJAZQgJAXgOAZg");
	this.shape_272.setTransform(12.2,-84.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AALBTQgYgDgWgPQgXgPgRgWQgSgVgNgTQgMgUgHgOIgHgPIAOAIIAjAPQAVAJAcAFQAbAGAagCQAbgCATgFQASgGAQgMQAPgNATgYIgFASQgEASgJAZQgJAXgOAZQgPAZgUAQQgSAPgXAAIgFAAg");
	this.shape_273.setTransform(12.2,-84.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#3A0B0B").s().p("AgqB1QAPgMAUgTQASgTAQgWQARgWACgTQABgSgLgUQgLgUgQgRQgOgRgNgKIgNgLIgDgDIABgEIAGgMIADAFQADAFgBADQAGAEANAMQALAMAPAQQAOARAKATQAKAUgBARIAAADQgDAVgRAWQgRAVgTASQgWATgRALIgRAMIAOgMg");
	this.shape_274.setTransform(18.5,-104.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#5B3516").s().p("AgsA8QgHgHgIgPQgIgOgDgWQgDgTAHgcIASAGQARAFAYACQAXACAWgIQAWgGAKgXIABAJQAAAIgIASQgIAQgYAYQgXAZgtAjIgHgIg");
	this.shape_275.setTransform(16.4,-98);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#3A0B0B").s().p("AgJAJQgIgFgFgEIgGgEIAIgGIAHAGQAHAEAKAEQALAFAOgFIgIADIgRAEIgEAAQgEAAgFgCg");
	this.shape_276.setTransform(30.7,-106.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#3A0B0B").s().p("AgeASIAKgBQAKgBAKgHQAKgIAFgHIAHgLIAIAEIgGAKQgGAHgPAHQgKAHgSAAIgFAAg");
	this.shape_277.setTransform(0.1,-106.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(1,1,1).p("AA8gEIhUA4QAAAAgJgGQgJgFgIgJQgJgIAAgJQABgJANgKQAMgMAUgMQASgNAXgKQAAAAAIAHQAHAHAIALQAIAKABAMg");
	this.shape_278.setTransform(-10.7,-136.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#490F0E").s().p("AghAuQgJgFgIgJQgJgIAAgJQABgJANgKQAMgMAUgMQASgNAXgKIAIAHQAHAHAIALQAIAKABAMIhUA4IgJgGg");
	this.shape_279.setTransform(-10.7,-136.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(1,1,1).p("AAFggQgMgIgJgGQgKgFAAAAQgBAAgFAJQgGAJgEAOQgFAOADANQAAAAAJADQAJACAOAGQAMAFALAIQANAJAHALQABAAAFgHQAEgIAEgLQADgLgEgMQgEgHgLgJQgLgKgNgJg");
	this.shape_280.setTransform(30.9,-134.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#490F0E").s().p("AALAgQgLgIgMgFIgXgIIgJgDQgDgNAFgOQAEgOAGgJIAGgJIAKAFIAVAOQANAJALAKQALAJAEAHQAEAMgDALQgEALgEAIIgGAHQgHgLgNgJg");
	this.shape_281.setTransform(30.9,-134.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQABgHAFgFQAFgFAEAAQAHAAAFAGQAEAFAAAGQgBAIgFAFQgFAFgFAAQgGAAgFgGg");
	this.shape_282.setTransform(30,-117.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQABgHAFgFQAFgFAEAAQAHAAAFAGQAEAFAAAGQgBAIgFAFQgFAFgFAAQgGAAgFgGg");
	this.shape_283.setTransform(-1.5,-117.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#F4EBE4").s().p("AgfBoQgFAAgFgBQAWgLAOgZQANgaACgiQACgngOgdQgQgdgagIQAMgGAMABQAUABAOAPQAQAPAIAYQAJAYgCAbQgBAegLAXQgLAXgRANQgOAMgTAAIgDAAg");
	this.shape_284.setTransform(1,-117.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#3A0B0B").ss(1,1,1).p("ABNAEQgCAegLAZQgMAYgSANQgTAOgTgBQgWgBgQgQQgRgPgJgaQgJgZABgdQACgeAMgZQALgYATgNQASgOATABQAWABARAQQAQAPAJAaQAJAZgBAdg");
	this.shape_285.setTransform(-1.7,-117.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgEBtQgWgBgQgQQgRgPgJgaQgJgZABgdQACgeAMgZQALgYATgNQASgOATABQAWABARAQQAQAPAJAaQAJAZgBAdQgCAegLAZQgMAYgSANQgSANgSAAIgCAAg");
	this.shape_286.setTransform(-1.7,-117.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#F4EBE4").s().p("AgcBiQgFAAgEgCQAYgEAOgaQARgaACgmQACgkgOgcQgLgcgXgHIAIAAQASABALAOQAOAOAHAXQAHAWgBAaQgCAbgKAWQgJAWgPAMQgMAMgRAAIgBAAg");
	this.shape_287.setTransform(33.3,-116.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#3A0B0B").ss(1,1,1).p("ABDADQgCAdgKAXQgKAXgQANQgQANgRgBQgTgBgOgPQgPgOgHgYQgIgYABgbQACgdAKgXQAKgXAQgNQAQgNARABQATABAOAPQAPAPAIAXQAHAYgBAbg");
	this.shape_288.setTransform(30.9,-116.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgEBnQgTgBgOgPQgPgOgHgYQgIgYABgbQACgdAKgXQAKgXAQgNQAQgNARABQATABAOAPQAPAPAIAXQAHAYgBAbQgCAdgKAXQgKAXgQANQgQAMgQAAIgBAAg");
	this.shape_289.setTransform(30.9,-116.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#5B3516").s().p("AD9F5IhAgEQgxgFgngKQgogLgkgRQgjgSgngZQgfgTgRgcQgSgbgJgbQgJgcgDgSIgCgUIgKgCQgIASgXAGQgXAIgdgHQgSgDgPgKQgQgJgKgQQgJgQAAgXQAcg6AkgCQAPAAAOAIQAOAIALALQALALAGAIIAGAKIAJAOIABgaQABgLgDgGQgDgFgEgEQANgJABgPQAAgKgFgLQgFgLgEgGQAHgFAEgFQADgHAAgFQAAgIgCgGIgEgKQAcgXABgUQAAgOgHgJQgHgIgIgFQAbgRAJgTQAKgUABgQQAAgOgCgMIgFgRQANgFAGgGQAFgHAAgGQAAgJgEgHQgEgIgFgFQAPgGAGgJQAFgJAAgHIAAgBQASAIAMgGQAGgDACgFQADgFABgFQAGADAKAAQAIABAPgEIgwCQQgZBIgRBIQgRBIACBGQABBIAdBJQAWAwAmAfQApAeAzASQAzATA2ANIBmAYIgvgCg");
	this.shape_290.setTransform(-23.8,-110.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#3A0B0B").ss(1,1,1).p("AnPBXQAAgBgJgMQgJgMgQgOQgPgNgUgFQgTgFgVANQgVANgVApQgBAcAOATQANATAWAKQAWAKAXABQAXABATgIQASgIAIgRQAAABACATQADATAJAcQAJAcASAdQATAcAfAUQApAZAmASQAlASAnAKQAoALAvAEQAxAEAqACQAoABAdAIQAdAIAHAVQAAAAANgKQAMgJAYgMQAYgNAigKQAVgGAjgJQAkgKApgQQAogQAkgaQAjgaAVgnQAVgngDg3QAAAAAPgBQAOgBAVgDQAWgDAWgIQAVgIAQgOQAPgPADgWQACgXgRggQgMgVgSgCQgRgBgSAIQgTAJgQAOQgQAOgKAKQgKALAAABQgBgBgGgKQgHgKgFgRQgFgQAEgRQADgTATgSQgBgBgFgNQgGgNAAgWQAAgWARgaQAAAAgHgEQgIgDgHgIQgHgIgBgMQgBgMALgRQAAAAgKgIQgJgHgLgOQgLgPgGgVQgGgVAGgbQgBAAgEgDQgEgDgCgGQgDgHAGgLQgBAAgKgCQgLgDgNgHQgNgHgKgOQgKgOABgYQAAABgPAJQgPAIgXAHQgXAGgYgGQgYgHgTgdQAAABgJAGQgIAGgOADQgNAEgQgGQgPgGgOgWQgBAAgJAEQgKAEgMgBQgLAAgHgNQAAAAgGAJQgGAJgLAJQgMAIgOgBQgQgCgUgUQgBAAgKAGQgLAFgMABQgLABgFgNQAAABgBAFQgBAGgGAFQgGAGgOgBQgBABgHAFQgHAEgKAEQgKAEgKgDQgJgDgGgPQAAABgGAGQgFAGgKAGQgJAGgMAAQgMAAgNgLQABABABAFQADAHgGAJQgGAKgXAJQgXAJgOAAQgOAAgGgDQgGgCAAgBQAAABgBAFQgBAGgFAFQgEAGgJAAQgJABgPgJQAAAAAAAIQABAIgGAJQgGAJgSAEQAAABAGAGQAFAGADAIQAEAJgFAJQgEAJgTAFQABABAEAMQAEAMAAASQAAATgLAUQgLAUgeAQQABAAAIAFQAIAFAGAKQAGAJgEAPQgFAOgYATQABAAAEAJQAEAJgCALQgBALgPAGQABAAAFAHQAEAFAEALQAEALgCALQgCALgOAJQABgBAGAFQAFAFAAAPQAAAHAAADg");
	this.shape_291.setTransform(7.2,-113.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#72461E").s().p("AAoGkQgdgIgogBIhbgGQgvgEgogLQgngKglgSQgmgSgpgZQgfgUgTgcQgSgdgJgcQgJgcgDgTIgCgUQgIARgSAIQgTAIgXgBQgXgBgWgKQgWgKgNgTQgOgTABgcQAVgpAVgNQAVgNATAFQAUAFAPANQAQAOAJAMIAJANIAAgKQAAgPgFgFQgGgFgBABQAOgJACgLQACgLgEgLQgEgLgEgFIgGgHQAPgGABgLQACgLgEgJIgFgJQAYgTAFgOQAEgPgGgJQgGgKgIgFIgJgFQAegQALgUQALgUAAgTQAAgSgEgMIgFgNQATgFAEgJQAFgJgEgJQgDgIgFgGIgGgHQASgEAGgJQAGgJgBgIIAAgIQAPAJAJgBQAJAAAEgGQAFgFABgGIABgGIAGADQAGADAOAAQAOAAAXgJQAXgJAGgKQAGgJgDgHIgCgGQANALAMAAQAMAAAJgGQAKgGAFgGIAGgHQAGAPAJADQAKADAKgEQAKgEAHgEIAIgGQAOABAGgGQAGgFABgGIABgGQAFANALgBQAMgBALgFIALgGQAUAUAQACQAOABAMgIQALgJAGgJIAGgJQAHANALAAQAMABAKgEIAKgEQAOAWAPAGQAQAGANgEQAOgDAIgGIAJgHQATAdAYAHQAYAGAXgGQAXgHAPgIIAPgKQgBAYAKAOQAKAOANAHQANAHALADIALACQgGALADAHQACAGAEADIAFADQgGAbAGAVQAGAVALAPQALAOAJAHIAKAIQgLARABAMQABAMAHAIQAHAIAIADIAHAEQgRAaAAAWQAAAWAGANIAGAOQgTASgDATQgEARAFAQQAFARAHAKIAHALIAKgMQAKgKAQgOQAQgOATgJQASgIARABQASACAMAVQARAggCAXQgDAWgPAPQgQAOgVAIQgWAIgWADIgjAEIgPABQADA3gVAnQgVAngjAaQgkAagoAQQgpAQgkAKIg4APQgiAKgYANQgYAMgMAJIgNAKQgHgVgdgIg");
	this.shape_292.setTransform(7.2,-113.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#3A0B0B").s().p("AgSGqQgjgCgdgJQgdgJgUgKQgVgLgMgIIgLgJIgBAAIAAAAIgJgGQgIgGgFgMQgFgPAJgTIADgFIgFgCIgLgFQgJgFgKgJQgLgJgEgNQgGgUASgXIADgEIgEgDIgMgLQgLgKgLgQQgLgRgDgWQgEgiAbgfIADgEIgEgEIgMgKQgLgKgLgSQgLgRgEgVQgEgoAhgnIACgDIgCgDIgGgMQgFgMgDgRQgDgSAFgSQAKgbAhgOIAEgCIgBgEQgCgCgBgMQgCgMAHgQQAHgPAZgMIADgBIAAgDIACgKQACgKAFgIQAGgJAMAAQARABAMgLQAMgKAHgOQAHgNAAgMQAAgFAGgKQAFgJALgLQgBAfAKAdQAJAcAWAUQAVAUAiAHQgWANgVAKQgVAKgOAOQgPAOgCAYQgGAUAEAVQAFAUAQANQARAMAegCQgUAGgVANQgVANgQARQgQASgGATQgHATAKASQAJATASAIQATAIAXgBQAYgBAZgLQgQAKgJAPQgJAPgCARQgDAQAGANQAFANAOAEQAcARAaABQAbABAagLQAagKAagTQgfAdgLAjQgLAjAGAnQAJATAPAEQAQAFATgFIAogIQgZAJAAATQgBAUANASQANASAPAHQAaAHAbgBQAbgCAbgFIgJAHQgEACgEgEQACAoARAbQhaAEhUACIhIABIhPgBg");
	this.shape_293.setTransform(-30.8,-145);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(1,1,1).p("AgFACQAFgCAGAAQgDgCgDABQgCABgDACg");
	this.shape_294.setTransform(0.4,-110.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(1,1,1).p("AgFACQAFgCAFgB");
	this.shape_295.setTransform(-31.8,-142.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#682525").s().p("AFhHvQAHgOAIgGQAKgGABgIQAAgFgCgDIgCgDIgFgHIAIgCQAagGAKgTQAGgMAAgNQAAgNgCgJIgCgJIgCgFIAFgBQAdgLAGgVQAEgNgCgMQgDgMgEgHIgFgJIgCgEIAEgDIAHgFQAGgGAGgKQAHgKABgNQAAgUgEgJQgFgIgBAAIgEgEIAFgEIAGgGQAGgHADgNQAEgNgEgWQgGgUgHgKQgHgKgGgCQgGgDgBABIgGgBIABgFIABgKQAAgKgCgOQgBgOgHgNQgLgPgIgFIgJgEIgGAAIABgGIACgNIACggQABgTgDgTQgDgUgIgOQgLgQgMgBQgIAAgFAEIgGAFIgHAHIgCgKIgCgKQgDgKgJgUQgDgHgDgCIgDgCIgDABIgCADIgJgDIAAgLQAAgKgFgNQgGgMgOgLQgOgJgMAAQgNgBgHADIgIAEIgIAFIAAgJIgCgSQgCgLgFgKQgFgJgJgCQgTgDgLACIgLACIgGACIAAgGIgDgOQgDgMgHgPQgHgPgLgJQgMgHgNAGQgNAFgKAJIgLAJIgGAIIgCgKIgCgIQgCgHgFgIQgEgIgJgEQgLgDgOAFQgMAEgHAFIgHAEIgBgIQABgCgDgJQgDgKgLgKQgMgLgZgDQgagCgWAJQgVAKgMALIgNAMIgGAGIgDgIIgDgHQgEgGgKgGQgJgGgSgBQgQgBgJAIQgGAHgBAIIgBAHIgKACIgEgHQgFgGgMgBQgJgBgHAFQgIAFgFAFIgFAFIgEAGIgEgGIgHgJQgHgIgOgHQgOgIgWAAQgVABgNALQgMALgGALIgGANIgBAEIgEgBIgDAAQAFgNANgPQAMgPAXgJQAYgKAkABIAEABIABgEIAGgNQAGgLAMgLQANgLAVgBQAWABAOAHQAOAHAHAIIAHAJIAEAGIAEgGIAFgFQAFgFAIgFQAHgEAJAAQAMABAFAGIAEAHIAKgBIABgIQABgIAGgHQAJgIAQABQASABAJAGQAKAGAEAGIADAHIADAIIAGgGQAAgCANgKQAMgLAVgKQAUgJAaACQAaADALALQALAKADAKQADAJAAACIAAAIIAHgEQAHgEAOgFQAOgFALAEQAJADAEAIQAFAIACAHIACAIIACAKIAGgIIALgJQAKgJANgFQANgGAMAHQALAJAHAPQAHAPADAMIADAOIABAGIAFgCIALgCQALgCATADQAJACAFAKQAFAJACALQACALAAAHIAAAJIAIgFIAIgEQAIgDAMABQAMAAAOAJQAPALAFAMQAFANAAAKIAAALIAJADIACgDIADgBIADACQADACADAHQAJAUADAKIACAKIACAKIAHgHIAGgFQAFgEAIAAQAMABALAQQAIAOADAUQADATgBATIgCAgIgCANIgBAGIAGAAIAJAEQAIAFALARQAHANACAOQABAOAAAKIgBAIIgBAFIAGABQABgBAGADQAGACAHAKQAIAJAFAVQAEAWgEANQgDANgGAHIgGAGIgFAEIAEAEQABAAAFAIQAEAJAAAUQgBANgHAKQgGAKgGAGIgHAFIgEADIACAEIAFAJQAEAHADAMQACANgEAMQgGAVgdALIgFABIACAFIACAJQACAJAAANQAAANgGAMQgKATgaAGIgIACIAFAHIACADQACADAAAFQgBAIgKAGQgIAGgHAOQgFAMgMAOQgLAOgXAMQgXAMgpAHIAFgKgApKkhIgEgBIAAgBQABgFAFgKQAGgJAKgLQgHANgCAJIgDALIAAAFg");
	this.shape_296.setTransform(15.9,-155);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(1,1,1).p("AJfi6QADAUgBAUQAAATgCANQgBANgBABQABgBAKAFQAJAEAMAUQAIAOACAPQACAPgBAKQgBAKAAAAQABAAAGACQAHADAJAIQAJALAGAXQAFAXgFAPQgEAOgGAHQgHAHAAAAQABgBAFAKQAFAJAAAWQgBAPgHALQgHALgHAGQgHAGAAAAQAAAAAFAKQAFALACAPQACAPgIAPQgIAQgaAKQAAAAADALQACALgBAQQgBAPgKAOQgKAOgZAHQABAAACAFQADAFgBAHQgCAIgLAIQgHAFgGAMQgFALgLAPQgLAPgXAMQgXANgqAHQgpAHhDgDQgugChEACQhEAChQAEQhOAEhUADQhUAEhOACQhPAChBgDQgkgCgegJQgdgJgVgLQgVgLgMgIQgLgIAAAAQgBAAgFgEQgGgEgGgIQgHgHgBgNQgCgMAIgRQgBAAgLgGQgLgFgMgMQgMgMgCgRQgDgRARgXQgBAAgIgIQgJgHgLgOQgKgOgHgSQgHgTAEgWQAEgWATgYQAAAAgJgIQgKgJgLgOQgLgPgGgVQgHgUAFgZQAFgZAXgaQgBAAgGgOQgGgOgCgVQgDgVAKgUQAKgVAfgOQAAAAgCgIQgCgIABgMQABgNAJgMQAJgNAWgJQgBgBACgKQACgKAHgKQAHgKAPAAQAPAAALgJQALgJAGgNQAGgNAAgLQABgIAIgMQAIgNAPgMQAQgNAWgFQAWgGAdAGQgBgBAEgOQAEgNANgSQAMgSAZgMQAZgNAqACQAAgBAGgMQAGgMAOgMQAOgMAXgBQAYAAAPAIQAPAIAHAJQAHAIAAAAQAAAAAGgFQAFgGAJgFQAIgFAKAAQAKABAGAEQAGAFACAEQACADAAABQAAgCABgHQACgJAIgIQAIgJAUAAQATACAJAHQALAHADAHQAEAGAAABQAAgBAIgHQAHgHANgIQAOgJASgGQASgGAVACQAcAEAMAMQAMAMADALQADAKAAABQAAAAAIgEQAJgFALgCQAMgDAKADQAKAFAFAJQAGAJACAHQACAIAAAAQAAAAAGgGQAHgGAKgGQAJgHAMgCQALgCAKAGQAMAKAIAQQAHAQADANQADANAAABQAAgBALgCQAMgCAUAEQANADAGANQAGANABAMQABAMAAABQAAAAAJgEQAIgDANAAQAOAAAQALQAQALAFAOQAGAOAAALQAAAJAAACQAAgBADgDQADgDAGABQAFABAGANQAJAUADALQADAKgBAAQABgBAHgFQAHgFALABQALABANASQAJAPADAUg");
	this.shape_297.setTransform(6.7,-153.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#490F0E").s().p("AmKIHQgkgCgegJQgdgJgVgLQgVgLgMgIIgLgIIgGgEQgGgEgGgIQgHgHgBgNQgCgMAIgRIgMgGQgLgFgMgMQgMgMgCgRQgDgRARgXIgJgIQgJgHgLgOQgKgOgHgSQgHgTAEgWQAEgWATgYIgJgIQgKgJgLgOQgLgPgGgVQgHgUAFgZQAFgZAXgaIgHgOQgGgOgCgVQgDgVAKgUQAKgVAfgOIgCgIQgCgIABgMQABgNAJgMQAJgNAWgJIABgLQACgKAHgKQAHgKAPAAQAPAAALgJQALgJAGgNQAGgNAAgLQABgIAIgMQAIgNAPgMQAQgNAWgFQAWgGAdAGIADgPQAEgNANgSQAMgSAZgMQAZgNAqACIAGgNQAGgMAOgMQAOgMAXgBQAYAAAPAIQAPAIAHAJIAHAIIAGgFQAFgGAJgFQAIgFAKAAQAKABAGAEQAGAFACAEIACAEIABgJQACgJAIgIQAIgJAUAAQATACAJAHQALAHADAHIAEAHIAIgIQAHgHANgIQAOgJASgGQASgGAVACQAcAEAMAMQAMAMADALIADALIAIgEQAJgFALgCQAMgDAKADQAKAFAFAJQAGAJACAHIACAIIAGgGQAHgGAKgGQAJgHAMgCQALgCAKAGQAMAKAIAQQAHAQADANIADAOIALgDQAMgCAUAEQANADAGANQAGANABAMIABANIAJgEQAIgDANAAQAOAAAQALQAQALAFAOQAGAOAAALIAAALIADgEQADgDAGABQAFABAGANQAJAUADALIACAKIAAAAIAAAAIAIgGQAHgFALABQALABANASQAJAPADAUQADAUgBAUIgCAgIgCAOIAAAAIAAAAQABgBAKAFQAJAEAMAUQAIAOACAPQACAPgBAKIgBAKIAHACQAHADAJAIQAJALAGAXQAFAXgFAPQgEAOgGAHIgHAHIAAAAIAAAAQABAAAFAJQAFAJAAAWQgBAPgHALQgHALgHAGIgHAGIAFAKQAFALACAPQACAPgIAPQgIAQgaAKIADALQACALgBAQQgBAPgKAOQgKAOgZAHIADAFQADAFgBAHQgCAIgLAIQgHAFgGAMQgFALgLAPQgLAPgXAMQgXANgqAHQgpAHhDgDQgugChEACIiUAGIiiAHQhUAEhOACIg6ABQgtAAgpgCg");
	this.shape_298.setTransform(6.7,-153.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#725107").ss(1,1,1).p("ABVhwQgngTgjgDQghgEgbAGQgbAGgPAHQgQAHAAAAQAAAAgJAPQgIAPgJAdQgIAcgDAnQgCAoALAzICPhGIB4BlQAAAAAFgVQAFgUAEgfQAFgggCggQgCgjgOgeQgOgegegRg");
	this.shape_299.setTransform(14.8,-71.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#AF800B").s().p("AAIAjIiPBGQgLgzACgoQADgnAIgcQAJgdAIgPIAJgPIAQgHQAPgHAbgGQAbgGAhAEQAjADAnATQAeARAOAeQAOAeACAjQACAggFAgQgEAfgFAUIgFAVg");
	this.shape_300.setTransform(14.8,-71.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#365B0A").s().p("AgUgLIAqAPIgGAIg");
	this.shape_301.setTransform(8.7,19.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#725107").s().p("AAAAFIgOglIgHgQIAKAQQAJAPAIAUQAKAVAFAXIgJADQgGgWgGgXg");
	this.shape_302.setTransform(48.9,-51.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#725107").s().p("AgZA3QAPgsAKgXQAMgZAHgKIAIgLIgLAbIggBag");
	this.shape_303.setTransform(-16.3,-50.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#37560F").s().p("AAKAQQgRgCgOgIQgOgGgIgHIgIgIIAIAFQAIAGAOAEQAOAGAQAAQAQABANgBIAOgBQgUALgRAAIgFAAg");
	this.shape_304.setTransform(31,59.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#37560F").s().p("AADAQQgSgCgNgIQgNgGgGgHIgGgJIAIAGIATAKQALAEALACQAJACAOAAIAZAAIAKgBQgaAKgTAAIgGgBg");
	this.shape_305.setTransform(-11.2,56.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#A37308").s().p("AlvClQgUgQgGgNQgHgNAAgEQABgGAJgXQAKgYAVgjQAWghAngmQAmgmA7ghQA7ghBUgWQBRgVBwgBQA9gBAvAJQAwAIAmASQAlARAkAaQgZAcgVAXQgXAWgYAQQgZAQghAGIAAAAIgBAWIgDAhIgEAdIgBAMIgKgHIgYgRIgagWIgZgXIgYgVQgcgBgdgDQgWAIgXAMQgTAJgPALIgbASIgKAHQgIgQgEgYQgEgXgBgVQgigdgWgMQgWgMgOAAQgOAAgOAIIgfASQgTgEgQAOQgPANgOAWQgOAYgMAbIgYAxQgFAMAAAQQAAAQAEAQQAGAQAIAMQgmgJgUgPg");
	this.shape_306.setTransform(4.7,-64.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#C69422").s().p("AAhg8Qh0hTikgVIAjgBQBRAABAAUQBAATAxAgQAxAhAkAlQAlAjAYAkQAZAkANAbQAOAbADAMQgKAJgMAIQhIiRh4hRg");
	this.shape_307.setTransform(39.7,-66.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#A37308").s().p("AgwE9QgfgNgIgEIAAgSQABgzAKg8QAJg8AMg8QANg6AMgxIAVhQIAJghIABgHIgFAAIgLABQAPgwAXgrQAYgrApglQgMBCgTBHQgSBGgRBIQgRBGgGBIQgIBIAGBEQAGBFAdA/QgxgRgfgNg");
	this.shape_308.setTransform(-17.9,-27.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#725107").ss(1,1,1).p("AGWk/QAkAqAXAlQAWAmALAXQAKAYAAABQgZAagbAKQgaAKgXAAQgXAAgPgDQgOgDAAgBQARAuAKA4QAKA3AFA8QAGA8ABA4QACA4AAAtQgBAtgBAbQgBAaAAABQh1AohqAOQhqAPhagFQhcgEhKgOQhKgPg1gSQg1gSgdgNQgcgNAAAAQgBgzAIg+QAJg/ANg/QANg/ANg2QAOgzAJghQAJghAAAAQg8ABgjgMQgjgMgRgRQgSgQgFgNQgFgNAAgBQAAAAAIgXQAIgWAUgjQAVgkAmgnQAmgoA8gkQA8gjBWgXQBXgXBzgBQBZAABHAXQBGAYA0AlQA1AlAlAqg");
	this.shape_309.setTransform(14.8,-35.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#AF800B").s().p("AgQHiQhcgEhKgOQhKgPg1gSQg1gSgdgNIgcgNQgBgzAIg+QAJg/ANg/QANg/ANg2IAXhUIAJghQg8ABgjgMQgjgMgRgRQgSgQgFgNQgFgNAAgBIAIgXQAIgWAUgjQAVgkAmgnQAmgoA8gkQA8gjBWgXQBXgXBzgBQBZAABHAXQBGAYA0AlQA1AlAlAqQAkAqAXAlQAWAmALAXIAKAZQgZAagbAKQgaAKgXAAQgXAAgPgDIgOgEQARAuAKA4QAKA3AFA8QAGA8ABA4QACA4AAAtIgCBIIgBAbQh1AohqAOQhRALhJAAIgqgBg");
	this.shape_310.setTransform(14.8,-35.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#53821C").s().p("AhtHNQgUgQgUgNQgUgOgRgEQgVgGgeABQgeABgdAFIgzAHIgUAEQAVghAOgpQAOgqAHgsQAJgsADgmIAEg8IAAgYIgEgBQgFgCgHgIQgHgIgJgSQgIgSADgHQAEgHAGgCIAHAAQgPgogFg1QgHgzABg4QAAg4ADg0QAEg1AFgpIAJhDIAEgZIAjgCIBYgFIB6gGICFgFIB9gFIBegCQAmABAGACQAHAEAHATQAGATAFAaIAKAzIAGAqIACARIgBAHQhbAYhhgBQhhAAhdgUQhggShZghQgNAhgRAfIgkA8QgSAfgIAgQgKAhAGAlQAGARAIANIANAaQAIANACATQABAKgCAOQgCANABANQABAMAMAJQATAQAaAHQAaAGAdADQAcABAeABQgTAOgXAHQgXAIgYAEQgYAFgVAHQgWAHgPAOQgeAZAAAbQgCAbAUAaQASAZAfAVQgYAAgYAQQgYAQgQAXQAVAAAZgCQAZgDAXABQAWABALAJQAmANATATQATAUAJAVQAKAVAMASIgjgdg");
	this.shape_311.setTransform(11.7,46.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#53821C").s().p("AhPFwIAAgdIAAgPIAAgIQABgZACghIAGhFIAHhDIAFgzIADgUIAAgCIgTgcQgEgFAAgEIABgDQADgIAKgCQAJgFAGgBIADgBIAAgCIAAgCIgBgOQgCgLgHgaQgHgZgPgrQgKgdgGgfQgFgfgBgcQgBgcAAgWIACgeIABgLIAAgDQAageAkgLQAkgLAmARQgHgCgJAMQgKAMgKATIgQAhIgKAVQgLAdgEAfQgEAgACAfQACAPAJAWIARAuQAJAYADAUQABATgJAKQgKAIgdgDQAXAMAVALQATALAZAIQgDAHgKAEQgKAEgMAAQgJABgIgCQgIgDAAgFQgHApAEAsQADArAPAoQANAnAbAdQAbAeAoAMQgqAGglANQgjANgbANIgoAUIAAgXg");
	this.shape_312.setTransform(28,55.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#6DA829").s().p("AAhGOQgYg0gJg4QgJg3gBg6QgBg5ACg5QgPAAgKgGIgZgPQALgJAMgFQAMgGAKgHQALgHADgMIgIAHQAEgNgCgPQgCgPgEgPQgDgPgCgPQAAgIABgJQADgRAJgNIAPgbQAJgOADgQQADgSgEgNIgJgZQgEgMACgRQADgPAEgGIAHgKQACgEAAgHQAAgGgGgQQgGgQgKgPQgJgQgIgPQAOAKANAFQANAEAJAFQAJAFAFAKQAGAKACAUQACAWgEAXIgGAuQgLCDgUCAQgGApgBArQgBAxAEAwQAEAvAGApQAGApAGAeIAJAqIgOgDg");
	this.shape_313.setTransform(3.9,56.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#6DA829").s().p("AA1HFQgOhbgahWQgYhWgwhNQAUAAALgJQAKgIACgOQADgNgFgQQgHgHgOAEQgOAFgPAHQAthMAOhZQALhZgLhbQgMhbghhWQAnAAAGACQAGAEADARQAGASAFAaIALA2IAHA3IggFZIADABIAFAGQAFAGAEAQIAAAEQgBAJgFAFQgEAFgEACIgDADIgFABIAGAYIALA7IASBOIATBQIAPBCIAIAjQgGgEgKgEg");
	this.shape_314.setTransform(45.1,43.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#365B0A").ss(1,1,1).p("AEEn2QglAAg6ACQg5AChEACQhBADhDADQhDADg3ADQg4ADghABQgiACgBAAQAAABgEAZQgDAYgFAqQgFAqgEA1QgEA0AAA4QAAA3AGA0QAGA1APAoQgBgBgGABQgHABgDAIQgEAHAIASQAJARAIAJQAHAIAEACQAFABAAAAQAAAAgBAYQgBAXgDAlQgDAmgIAsQgIAsgNAqQgOAqgWAgQABAAAUgEQAUgDAegEQAdgEAfgBQAegBAVAFQAUAFARAPQARAOASARQASARAWAPQAWANAdAFQAAgBgFgXQgGgYgHgoQgGgogGgzQgFgygBg2QAAg2AIgzQAIgzAGg1QAHg0AFgyQAFgyADgnQADgoACgXQACgXAAgBQAAABANAHQAMAHAPADQAQADALgLQAAABgBATQgCAUABAfQAAAgAFAlQAFAlANAjQAQAtAHAZQAHAaABAKQABAKAAAAQgBAAgGACQgGADgIAEQgHAFgDAHQgDAHAGAKQANATADAEIADAEQAAAAgDAVQgCAUgEAhQgDAhgEAlQgDAmgDAiQgCAiAAAYQAAAlAAAQQAAAQAAADIAAADQAAgBASgJQARgKAegNQAegNAlgLQAmgLAogDQA0gEAbAGQAbAGAJAIQAIAFABACIhSlfQABAAAGgDQAGgDAFgIQAGgHgBgNQgEgSgGgHQgHgGgBAAIAhlWQAAAAgCgRQgCgRgEgZQgEgZgFgaQgFgagHgTQgGgTgIgEQgGgDglAAg");
	this.shape_315.setTransform(13.9,47.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#589319").s().p("AhfHlQgWgPgSgRQgSgRgRgOQgRgPgUgFQgVgGgeABQgfABgdAFIgyAHIgVAEQAWghAOgpQANgqAIgsQAIgsADgmIAEg8IABgYIgFgBQgEgCgHgIQgIgIgJgSQgIgSAEgHQADgHAHgCIAHAAQgPgogGg1QgGgzAAg4QAAg4AEg0QAEg1AFgpIAIhDIAEgZIAjgCIBZgFIB6gGICEgFIB9gFIBfgCQAlABAGACQAIAEAGATQAHATAFAaIAJAzIAGAqIACARIghFWQABgBAHAHQAGAHAEATQABAMgGAHQgFAIgGADIgHADIBSFfIgJgHQgJgIgbgGQgbgGg0AEQgoADgmALQglALgeANQgeANgRAKIgSAKIAAgDIAAgUIAAg0QAAgYACgiIAGhIIAHhGIAGg2IADgVIgDgDIgQgXQgGgKADgHQADgHAHgFIAOgHIAHgCIgBgKQgBgKgHgaQgHgZgQgsQgNgkgFglQgFgkAAghQgBgfACgTIABgVQgLALgQgDQgPgCgMgIIgNgIIgCAZIgFA+IgIBZIgMBlQgGA2gIAzQgIAzAAA2QABA2AFAyQAGAyAGAoQAHApAGAXIAFAZQgdgFgWgNg");
	this.shape_316.setTransform(13.9,47.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#152644").s().p("ABDAvQgFgVgQgVQgXgagggRQgigQgmgEQgmgEgkALIATgQIAKgGQAugSAoACQAoACAhAOQAhANAZASQAZARAOAOIAQAOQAFAFACAKQACAKABAKIAAAUIAAAEQgvASgpAKQAEgVgFgWg");
	this.shape_317.setTransform(-7.5,94.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(1,1,1).p("AA0hZQgigNgmgBQgogBgtARQgBAAgNAKQgOAJgRAUQgQATgLAdQgKAeAGApQAAABANAHQAOAIAcAHQAcAIArACQAsACA6gKQA8gLBNgdQAAAAAAgNQAAgNgCgPQgCgPgHgHQgEgGgQgOQgQgPgZgRQgagSgigMg");
	this.shape_318.setTransform(-9.8,95.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#1F3263").s().p("Ag3BoQgrgCgcgIQgcgHgOgIIgNgIQgGgpAKgeQALgdAQgTQARgUAOgJIAOgKQAtgRAoABQAmABAiANQAiAMAaASQAZARAQAPIAUAUQAHAHACAPQACAPAAANIAAANQhNAdg8ALQgwAIgnAAIgPAAg");
	this.shape_319.setTransform(-9.8,95.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(1,1,1).p("AC5gtIltAPQAAAAgFAFQgEAEgCAJQgDAJAGALQABABAOAGQAPAHAYAIQAYAIAeAFQAeAFAegDQAcgEATgEQAUgDANgEQANgEALgEQAMgEAPgFQAVgGASgFQATgEAMgDQALgEABAAg");
	this.shape_320.setTransform(-10,105.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#111E3D").s().p("AhQArQgegFgYgIQgYgIgPgHIgPgHQgGgLADgJQACgJAEgEIAFgFIFtgPIAIAkIgMAEIgfAHIgnALIgbAJIgYAIIghAHQgTAEgcAEIgWABQgTAAgTgDg");
	this.shape_321.setTransform(-10,105.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#152644").s().p("AgyBVQgogGgagLQgagLgOgLQgOgKgDgEIABgLIABgVIABgTIABgMQAngcAlgNQAmgNAhgCQgYAMgRARQgSASgFATQgFATAMAPQAhAfAqAIQAnAIAugKQAugJAvgWIAAABQAAAPgEAKIgFAOQhFAWg2AFQgZACgTAAQgaAAgWgDg");
	this.shape_322.setTransform(38.1,97.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(1,1,1).p("AA5hYQgcgGgjABQglAAgrAOQgrANgsAhQAAAAgBAKQgBAKgBAOQgBAQgBASQAAAAAMALQAMAKAaANQAaAMApAIQApAIA4gFQA5gEBMgZQAAAAAFgNQAFgNAAgVQABgTgOgXQgNgWgjgUQgBgBgQgGQgQgHgcgGg");
	this.shape_323.setTransform(38.1,97.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#1F3263").s().p("Ag9BZQgpgIgagMQgagNgMgKIgMgLIACgiIACgYIABgKQAsghArgNQArgOAlAAQAjgBAcAGQAcAGAQAHIARAHQAjAUANAWQAOAXgBATQAAAVgFANIgFANQhMAZg5AEQgWACgRAAQggAAgagFg");
	this.shape_324.setTransform(38.1,97.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(1,1,1).p("ACmgmIlWgNQgBAAgCAIQgDAJgBAMQgBANAEALQAAAAAVAKQAUAJAjALQAjALAtAGQAqAGAxgHQAwgGAwgbIAVgVg");
	this.shape_325.setTransform(37.9,106.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#111E3D").s().p("AgYAxQgtgGgjgLQgjgLgUgJIgVgKQgEgLABgNQABgMADgJIADgIIFWANIASAgIgVAVQgwAbgwAGQgbAEgZAAQgTAAgUgDg");
	this.shape_326.setTransform(37.9,106.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#5B3516").s().p("AACA4QgsgDgwgLIACglICfg9IACAKIAHAkIALA5QgiAKgkAAIgTgBg");
	this.shape_327.setTransform(53.2,-45.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#3A0B0B").ss(1,1,1).p("ABBlvQAAAAACAJQAEAQAGAiQAGAiAIAwQAHAvAGA4QAFA3ACA6QACA3gFA2QAAAAgHASQgGASgNAcQgMAdgSAgQgRAhgWAfQgTAegZAWQgYAWgbAGIgdjjIARm9g");
	this.shape_328.setTransform(53.8,-14.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#72461E").s().p("AhvCMIARm8ICfg/IACAKIAKAxIAOBSQAHAwAGA3QAFA4ACA4QACA4gFA2IgHASIgTAuQgMAdgSAgQgRAhgWAfQgTAegZAWQgYAVgbAHg");
	this.shape_329.setTransform(53.8,-14.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#3A0B0B").s().p("AgJAAQACgFAEgEIADgDIALAMQgIgCgDACQgEAEgCAEIgCAGQgEgJADgFg");
	this.shape_330.setTransform(4.5,1.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#5B3516").s().p("ACMC+QgWgPgRgUQgSgUgKgQIgKgRIgRgGQgRgHgagOQgZgOgdgUQgegVgbgaQgbgcgRgjIgTgmQgLgWgEgXQgEgWANgSQALgMAIAFQAJAFAFANQAEAJgBAKIgCATQgBAKACAJQAFAZAPAXQAOAYATAVQASAVATAPQAZAWAYANQAXAMAbAGQAbAHAgAEQgIAKgBALQgCARAKAQQAKAQAQAPQAQAOAPAMIAaAVIgDAAIgHABQgUAAgSgMg");
	this.shape_331.setTransform(-19.5,-1.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#3A0B0B").ss(1,1,1).p("AikjWQAAgBAQACQAQACAZAJQAaAIAeATQAfATAcAhQAlApAjApQAJAKAOADQANADANgEQAMgEAJgLQAHgLAFgLQAGgLAIgCQAIgDAOANQAQAPgCAUQgCAUgNAPQgDADgGAFQgFAFgFAFQgEAFABAEQABAEAHADQAHAEAIACQAIACAEACQATAIAEAKQADAKgHALQgGALgNAMQAMAFABALQABALgFAKQgFALgFAFQgOANgRADQgRADgRgBQAKABgCAIQgDAJgIAIQgIAJgHACQgYACgWgOQgWgPgSgUQgRgVgLgQQgKgQAAgBQgBAAgPgHQgRgHgagOQgbgOgegVQgfgVgbgcQgbgagRgkQgJgPgFgOQgGgNAGgSQACgEADgFQADgEABgE");
	this.shape_332.setTransform(-13.1,-2.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#72461E").s().p("ABQDLQgWgPgSgUQgRgVgLgQIgKgRIgQgHQgRgHgagOQgbgOgegVQgfgVgbgcQgbgagRgkQgJgPgFgOQgGgNAGgSIAFgJIAEgIIA5hNIAQABQAQACAZAJQAaAIAeATQAfATAcAhIBIBSQAJAKAOADQANADANgEQAMgEAJgLQAHgLAFgLQAGgLAIgCQAIgDAOANQAQAPgCAUQgCAUgNAPIgJAIIgKAKQgEAFABAEQABAEAHADQAHAEAIACIAMAEQATAIAEAKQADAKgHALQgGALgNAMQAMAFABALQABALgFAKQgFALgFAFQgOANgRADQgRADgRgBQAKABgCAIQgDAJgIAIQgIAJgHACIgHAAQgUAAgTgMg");
	this.shape_333.setTransform(-13.1,-2.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#5B3516").s().p("AAHCuQgPgFgRgPQgTgQgHgRQgGgQABgSIACgoIAAgBQADg2AJg5QAJg6ARg1QAEAHALAHQAJAHAUAHQgcAZgIAgQgLAhgCAjIgGA+IABARQABANAEASQAEARAGAQQAGAQAGAIQAIAJALgEQAIgEAMgCQAMgCAGgDQgIAagOAIQgIAFgJAAQgGAAgGgDg");
	this.shape_334.setTransform(-32.3,-30.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#3A0B0B").ss(1,1,1).p("ABgh1QgCAXgDAjQgDAjgEAjQgEAkgEAcQgEAcgEAKQgJAQgUATQgTATgVANQgXAMgUgBQgYgDgMgQQgNgPgDgXQgEgWABgYQABgYACgUQAHhHAIguQAIgvAGgaQAGgaAEgKIAEgJQAAABACAGQADAHANAJQAOAKAeAIQAgAHA7ACQgBABgDAXg");
	this.shape_335.setTransform(-28.6,-30.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#72461E").s().p("AgsC/QgYgDgMgQQgNgPgDgXQgEgWABgYIADgsQAHhHAIguQAIgvAGgaQAGgaAEgKIAEgJIACAHQADAHANAJQAOAKAeAIQAgAHA7ACQgBABgDAXIgFA6IgHBGIgIBAQgEAcgEAKQgJAQgUATQgTATgVANQgVAMgTAAIgDgBg");
	this.shape_336.setTransform(-28.6,-30.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#3A200C").s().p("AgdAQIARgSQALgLALgHQAMgHAOAEIgHACQgGABgJAGQgJAGgHAKIAGABQAHABAHAFQAGAFgBAKQAAgBgFgEQgFgFgNgBQgMAAgXANIAGgKg");
	this.shape_337.setTransform(59.6,-106);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#5B3516").s().p("AgIAOQgNgDgEgHQgEgFAAgGIAAgHQADAMAKADQAJAGAJACQALACAJAAIAIAAQgSAEgLAAIgJgBg");
	this.shape_338.setTransform(27.4,-93);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#3A0B0B").s().p("AgdASIAJgBQALgBAJgHQAKgIAGgHIAFgLIAJAEIgGAKQgGAHgPAHQgKAHgSAAIgEAAg");
	this.shape_339.setTransform(0,-106.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(1,1,1).p("AgFACQAFgCAGgB");
	this.shape_340.setTransform(-31.8,-142.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#5B3516").s().p("AibA3IgUgFIgZgHIgRgGQgMgGgOgKQgPgKgJgOQgJgQABgYIALgSQgCAXALANQALAOARAIIAjAPQAWALAcAFQAcAEAcgBQAdgBAZgEQAggFAZgLQAagKAXgRQAWgRAYgWQADANAIAIQAQAQAcAAQAcAAAbgGIAugJIgBACQgOAUgZAIQgZAGgbAAQgbABgTgDIgUAAIgZALQgYANgpAOQgmAPgxAHQgRACgSAAQgfAAgegHg");
	this.shape_341.setTransform(-11.2,-14.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#3A0B0B").ss(1,1,1).p("Aj2AVQAAAAALgLQAMgKAXgNQAWgPAigLQAigMAtgCQA3gCA0gBQAOAAALgJQAKgIAFgNQAFgNgDgNQgEgMgFgLQgFgLADgIQADgIAUgDQAVgCAPAOQAOAPAEAUQABAFAAAHQAAAHACAHQABAGADACQAFACAGgEQAHgDAHgFQAHgEAEgDQASgJAKAEQAKAEAFAMQAEAMAAARQAMgGAJAGQAJAGAFALQAFALABAHQABATgJANQgIAPgNANQAIgHAFAHQAFAHACAMQABAMgDAGQgOAUgZAIQgZAIgbAAQgbAAgTgCQgTgCgBgBQAAABgZANQgYANgpAOQgmAPgxAGQgwAHgwgLQgKgCgKgDQgLgCgOgFQgEgCgNgFQgMgFgOgKQgPgKgJgQQgJgQABgY");
	this.shape_342.setTransform(-10.7,-25);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#72461E").s().p("AigCgIgUgFQgLgCgOgFIgRgHQgMgFgOgKQgPgKgJgQQgJgQABgYIAignIALgLQAMgKAXgNQAWgPAigLQAigMAtgCIBrgDQAOAAALgJQAKgIAFgNQAFgNgDgNIgJgXQgFgLADgIQADgIAUgDQAVgCAPAOQAOAPAEAUIABAMQAAAHACAHQABAGADACQAFACAGgEQAHgDAHgFIALgHQASgJAKAEQAKAEAFAMQAEAMAAARQAMgGAJAGQAJAGAFALQAFALABAHQABATgJANQgIAPgNANQAIgHAFAHQAFAHACAMQABAMgDAGQgOAUgZAIQgZAIgbAAQgbAAgTgCIgUgDIgZAOQgYANgpAOQgmAPgxAGQgTADgSAAQgeAAgdgHg");
	this.shape_343.setTransform(-10.7,-25);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#725107").s().p("AAAAFIgOglIgGgQIAJAQQAJAPAIAUQAKAVAGAXIgKADQgFgWgHgXg");
	this.shape_344.setTransform(48.8,-51.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#725107").s().p("AgaA3QARgsAJgXQAMgZAHgKIAHgLIgLAbIgfBag");
	this.shape_345.setTransform(-16.3,-50.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#37560F").s().p("AAEAQQgUgCgNgIQgNgGgGgHIgGgJIAIAGIAUAKQAMAEAKACQAJACAOAAIAYAAIAMgBQgbAKgTAAIgFgBg");
	this.shape_346.setTransform(-11.3,56.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#A37308").s().p("AluClQgVgQgGgNQgHgNgBgEQABgGAKgXQAJgYAXgjQAVghAmgmQAngmA7ghQA7ghBTgWQBSgVBwgBQA9gBAwAJQAuAIAmASQAnARAiAaQgXAcgXAXQgVAWgaAQQgZAQgfAGIAAAAIgCAWIgEAhIgCAdIgCAMIgKgHIgXgRIgbgWIgagXIgWgVQgegBgdgDQgVAIgXAMQgTAJgPALIgbASIgLAHQgHgQgEgYQgEgXgBgVQgjgdgVgMQgVgMgPAAQgOAAgNAIIghASQgSgEgPAOQgQANgOAWQgOAYgMAbIgXAxQgHAMAAAQQAAAQAGAQQAEAQAJAMQgmgJgTgPg");
	this.shape_347.setTransform(4.7,-64.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#C69422").s().p("AAig8Qh1hTikgVIAigBQBRAABBAUQBAATAwAgQAyAhAlAlQAkAjAYAkQAZAkANAbQANAbAFAMQgLAJgMAIQhJiRh2hRg");
	this.shape_348.setTransform(39.6,-66.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#A37308").s().p("AgwE9QgfgNgIgEIAAgSQACgzAIg8QAJg8ANg8QANg6ANgxIAVhQIAIghIAAgHIgFAAIgKABQAPgwAXgrQAYgrApglQgNBCgSBHQgSBGgRBIQgQBGgHBIQgIBIAHBEQAEBFAfA/QgygRgfgNg");
	this.shape_349.setTransform(-18,-27.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#53821C").s().p("AhuHNQgTgQgUgNQgUgOgQgEQgWgGgeABQgeABgeAFIgxAHIgVAEQAWghANgpQAOgqAIgsQAHgsAEgmIAEg8IABgYIgFgBQgFgCgHgIQgHgIgJgSQgIgSADgHQAEgHAGgCIAHAAQgPgogGg1QgFgzgBg4QABg4AEg0QADg1AFgpIAJhDIAEgZIAigCIBZgFIB6gGICEgFIB+gFIBfgCQAlABAGACQAHAEAGATQAHATAFAaIAKAzIAGAqIACARIgBAHQhbAYhigBQhgAAhegUQhfgShYghQgOAhgSAfIgjA8QgSAfgJAgQgIAhAGAlQAFARAHANIAPAaQAGANADATQABAKgCAOQgDANACANQABAMALAJQAUAQAZAHQAaAGAdADQAeABAeABQgUAOgXAHQgXAIgYAEQgYAFgVAHQgVAHgQAOQgeAZgBAbQAAAbASAaQAUAZAeAVQgXAAgYAQQgZAQgQAXQAUAAAagCQAZgDAXABQAWABAKAJQAoANASATQATAUAKAVQAJAVAMASIgkgdg");
	this.shape_350.setTransform(11.7,46.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#6DA829").s().p("AA1HFQgOhbgahWQgXhWgxhNQAUAAAKgJQALgIADgOQACgNgFgQQgIgHgNAEQgOAFgPAHQAuhMANhZQALhZgLhbQgMhbgihWQAnAAAHACQAFAEAFARQAFASAGAaIAKA2IAHA3IggFZIADABIAFAGQAFAGADAQIAAAEQAAAJgEAFQgFAFgEACIgEADIgEABIAFAYIAMA7IATBOIASBQIAPBCIAIAjQgGgEgKgEg");
	this.shape_351.setTransform(45.1,43.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgGAUQgagCgXgHQgTgGgPgFIBcAIQAJAAAygQIAcgLIgSAQQgOAJgUAHQgTAHgWAAIgDAAg");
	this.shape_352.setTransform(14.2,-86.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#5B3516").s().p("AAJAJQgCgJgHgIQgFgJgGgGIgGgGQAWAOAHALQAHAKgCAIQgCAIgEAEIgFAEQAGgKgDgLg");
	this.shape_353.setTransform(23,-87.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#5B3516").s().p("AgEARQgEgKACgKQABgMADgJIACgJQgBAZABANQABAPADAHIADAHQgJgGgCgLgAAAghIAAAAIAAAAg");
	this.shape_354.setTransform(3.5,-86.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#5B3516").s().p("AD9F5IhAgEQgxgFgngKQgogLgkgSQgjgRgngZQgfgTgRgcQgSgbgJgcQgJgbgDgTIgCgUIgKgBQgIARgXAHQgXAIgdgHQgSgEgPgJQgQgKgKgQQgJgQAAgWQAcg6AkgCQAPAAAOAIQAOAIALALQALALAGAIIAGAKIAJANIABgaQABgKgDgGQgDgFgEgDQANgKABgOQAAgLgFgLQgFgLgEgGQAHgEAEgGQADgGAAgGQAAgHgCgHIgEgKQAcgWABgVQAAgOgHgIQgHgJgIgEQAbgRAJgUQAKgUABgQQAAgOgCgLIgFgRQANgFAGgHQAFgHAAgGQAAgJgEgHQgEgIgFgFQAPgGAGgJQAFgJAAgHIAAgBQASAIAMgFQAGgEACgFQADgFABgEQAGACAKABQAIAAAPgDIgwCPQgZBIgRBIQgRBIACBGQABBIAdBJQAWAwAmAeQApAeAzATQAzATA2ANIBmAYIgvgCg");
	this.shape_355.setTransform(-23.8,-110.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#3A0B0B").ss(1,1,1).p("AnPBXQAAgCgJgMQgJgLgQgOQgPgNgUgFQgTgFgVAMQgVANgVAqQgBAcAOATQANASAWAKQAWAKAXABQAXACATgIQASgJAIgQQAAAAACAUQADASAJAcQAJAdASAcQATAdAfATQApAaAmASQAlASAnAKQAoALAvAEQAxADAqACQAoACAdAIQAdAIAHAVQAAgBANgJQAMgJAYgMQAYgNAigKQAVgGAjgJQAkgKApgRQAogPAkgaQAjgbAVgmQAVgogDg3QAAAAAPAAQAOgBAVgDQAWgDAWgIQAVgJAQgNQAPgPADgXQACgWgRghQgMgUgSgCQgRgBgSAIQgTAJgQAOQgQANgKALQgKALAAAAQgBAAgGgKQgHgKgFgRQgFgQAEgSQADgTATgSQgBAAgFgNQgGgNAAgWQAAgWARgaQAAAAgHgEQgIgDgHgIQgHgIgBgMQgBgMALgRQAAAAgKgIQgJgHgLgOQgLgOgGgVQgGgWAGgbQgBAAgEgDQgEgDgCgGQgDgHAGgLQgBAAgKgCQgLgDgNgGQgNgIgKgOQgKgOABgYQAAABgPAJQgPAIgXAHQgXAGgYgGQgYgHgTgcQAAAAgJAGQgIAGgOADQgNAEgQgGQgPgGgOgWQgBAAgJAFQgKADgMgBQgLAAgHgNQAAABgGAIQgGAJgLAJQgMAJgOgCQgQgCgUgUQgBAAgKAGQgLAFgMABQgLACgFgOQAAABgBAFQgBAGgGAFQgGAGgOgBQgBABgHAFQgHAEgKAEQgKAEgKgDQgJgDgGgPQAAABgGAGQgFAGgKAGQgJAGgMAAQgMAAgNgLQABABABAFQADAHgGAJQgGAKgXAJQgXAJgOAAQgOABgGgEQgGgCAAgBQAAABgBAGQgBAFgFAFQgEAGgJAAQgJABgPgJQAAAAAAAIQABAIgGAJQgGAJgSAEQAAABAGAGQAFAGADAIQAEAJgFAJQgEAJgTAGQABAAAEAMQAEAMAAASQAAATgLAUQgLAUgeAQQABAAAIAFQAIAFAGAKQAGAJgEAPQgFAOgYATQABAAAEAJQAEAIgCALQgBALgPAGQABABAFAHQAEAFAEALQAEALgCALQgCALgOAIQABAAAGAFQAFAFAAAPQAAAGAAAEg");
	this.shape_356.setTransform(7.2,-113.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#72461E").s().p("AAoGkQgdgIgogBIhbgGQgvgEgogLQgngLglgRQgmgSgpgZQgfgUgTgdQgSgcgJgcQgJgdgDgSIgCgUQgIARgSAHQgTAJgXgCQgXAAgWgKQgWgLgNgSQgOgTABgcQAVgqAVgNQAVgNATAFQAUAGAPANQAQANAJAMIAJAOIAAgKQAAgPgFgFQgGgFgBAAQAOgIACgLQACgLgEgLQgEgLgEgFIgGgHQAPgHABgKQACgLgEgJIgFgJQAYgTAFgOQAEgPgGgJQgGgKgIgEIgJgGQAegQALgUQALgUAAgSQAAgTgEgMIgFgMQATgGAEgJQAFgIgEgKQgDgIgFgGIgGgHQASgEAGgJQAGgJgBgIIAAgIQAPAJAJAAQAJgBAEgGQAFgFABgFIABgHIAGADQAGAEAOgBQAOAAAXgIQAXgKAGgJQAGgKgDgGIgCgHQANALAMAAQAMAAAJgGQAKgGAFgGIAGgGQAGAOAJADQAKADAKgEQAKgEAHgEIAIgGQAOABAGgGQAGgFABgGIABgFQAFANALgBQAMgCALgFIALgGQAUAVAQABQAOACAMgJQALgIAGgKIAGgJQAHANALABQAMABAKgFIAKgEQAOAXAPAFQAQAGANgEQAOgDAIgGIAJgHQATAeAYAGQAYAGAXgGQAXgHAPgIIAPgJQgBAXAKAOQAKAPANAGQANAIALACIALACQgGALADAHQACAGAEAEIAFACQgGAcAGAUQAGAWALAOQALAOAJAIIAKAHQgLARABAMQABAMAHAIQAHAIAIADIAHAFQgRAZAAAXQAAAVAGAOIAGAMQgTATgDASQgEASAFAQQAFAQAHALIAHAKIAKgLQAKgLAQgOQAQgNATgJQASgIARABQASABAMAWQARAggCAXQgDAWgPAPQgQAOgVAHQgWAJgWADIgjAEIgPAAQADA4gVAnQgVAmgjAbQgkAagoAPQgpARgkAJIg4APQgiALgYANQgYAMgMAJIgNAKQgHgWgdgHg");
	this.shape_357.setTransform(7.2,-113.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#3A0B0B").s().p("AgSGpQgjgCgdgIQgdgJgUgLQgVgLgMgIIgLgIIgBgBIAAAAIgJgGQgIgFgFgMQgFgPAJgUIADgFIgFgCIgLgEQgJgFgKgJQgLgJgEgOQgGgUASgXIADgEIgEgDIgMgKQgLgKgLgRQgLgQgDgWQgEgiAbggIADgEIgEgDIgMgLQgLgKgLgRQgLgRgEgWQgEgnAhgnIACgDIgCgDIgGgMQgFgMgDgRQgDgSAFgSQAKgbAhgOIAEgCIgBgEQgCgCgBgMQgCgMAHgQQAHgPAZgMIADgBIAAgDIACgKQACgKAFgIQAGgJAMAAQARABAMgLQAMgKAHgOQAHgNAAgMQAAgFAGgKQAFgJALgLQgBAfAKAdQAJAcAWAUQAVAUAiAHQgWANgVAKQgVAKgOAOQgPAOgCAYQgGAUAEAVQAFAUAQANQARAMAegCQgUAGgVANQgVANgQARQgQASgGATQgHATAKARQAJATASAJQATAIAXgBQAYgCAZgKQgQAJgJAPQgJAQgCAQQgDARAGAMQAFANAOAFQAcAQAaABQAbABAagKQAagLAagTQgfAdgLAjQgLAkAGAmQAJAUAPAEQAQAEATgEIAogJQgZAKAAATQgBATANASQANATAPAGQAaAIAbgCQAbgBAbgGIgJAHQgEADgEgEQACAnARAcQhaAEhUACIhIABIhPgCg");
	this.shape_358.setTransform(-30.8,-145);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#682525").s().p("AFhHuQAHgNAIgHQAKgGABgHQAAgFgCgDIgCgEIgFgGIAIgCQAagHAKgSQAGgNAAgNQAAgMgCgJIgCgJIgCgFIAFgCQAdgLAGgUQAEgNgCgMQgDgMgEgIIgFgIIgCgFIAEgCIAHgGQAGgFAGgKQAHgKABgOQAAgUgEgIQgFgJgBAAIgEgEIAFgDIAGgHQAGgGADgNQAEgOgEgVQgGgVgHgKQgHgJgGgDQgGgCgBAAIgGAAIABgGIABgKQAAgJgCgOQgBgOgHgNQgLgQgIgEIgJgEIgGgBIABgFIACgOIACgfQABgTgDgTQgDgUgIgOQgLgQgMgBQgIAAgFAEIgGAFIgHAHIgCgKIgCgKQgDgKgJgUQgDgHgDgCIgDgCIgDABIgCADIgJgDIAAgLQAAgKgFgNQgGgMgOgLQgOgJgMAAQgNgBgHADIgIAEIgIAFIAAgJIgCgSQgCgLgFgKQgFgJgJgCQgTgDgLACIgLACIgGACIAAgGIgDgOQgDgMgHgPQgHgPgLgJQgMgHgNAGQgNAFgKAJIgLAJIgGAIIgCgKIgCgIQgCgHgFgIQgEgIgJgEQgLgDgOAFQgMAEgHAFIgHAEIgBgIQABgCgDgJQgDgKgLgKQgMgLgZgDQgagCgWAJQgVAKgMALIgNAMIgGAGIgDgIIgDgHQgEgGgKgGQgJgGgSgBQgQgBgJAIQgGAHgBAIIgBAHIgKACIgEgHQgFgGgMgBQgJgBgHAFQgIAFgFAFIgFAFIgEAGIgEgGIgHgJQgHgIgOgHQgOgIgWAAQgVABgNALQgMALgGALIgGANIgBAEIgEgBIgDAAQAFgNANgPQAMgPAXgJQAYgKAkABIAEABIABgEIAGgNQAGgLAMgLQANgLAVgBQAWABAOAHQAOAHAHAIIAHAJIAEAGIAEgGIAFgFQAFgFAIgFQAHgEAJAAQAMABAFAGIAEAHIAKgBIABgIQABgIAGgHQAJgIAQABQASABAJAGQAKAGAEAGIADAHIADAIIAGgGQAAgCANgKQAMgLAVgKQAUgJAaACQAaADALALQALAKADAKQADAJAAACIAAAIIAHgEQAHgEAOgFQAOgFALAEQAJADAEAIQAFAIACAHIACAIIACAKIAGgIIALgJQAKgJANgFQANgGAMAHQALAJAHAPQAHAPADAMIADAOIABAGIAFgCIALgCQALgCATADQAJACAFAKQAFAJACALQACALAAAHIAAAJIAIgFIAIgEQAIgDAMABQAMAAAOAJQAPALAFAMQAFANAAAKIAAALIAJADIACgDIADgBIADACQADACADAHQAJAUADAKIACAKIACAKIAHgHIAGgFQAFgEAIAAQAMABALAQQAIAOADAUQADATgBATIgCAgIgCANIgBAFIAGABIAJAEQAIAEALASQAHANACAOQABAOAAAJIgBAIIgBAGIAGAAQABAAAGACQAGADAHAJQAIAKAFAVQAEAVgEAOQgDANgGAGIgGAHIgFADIAEAFQABgBAFAJQAEAIAAAUQgBAOgHAKQgGAKgGAFIgHAGIgEADIACAEIAFAIQAEAIADAMQACAMgEANQgGAVgdAKIgFACIACAFIACAJQACAJAAANQAAAMgGANQgKATgaAGIgIACIAFAGIACAEQACADAAAFQgBAHgKAHQgIAGgHANQgFAMgMAOQgLAPgXAMQgXAMgpAGIAFgKgApKkhIgEgBIAAgBQABgFAFgKQAGgJAKgLQgHANgCAJIgDALIAAAFg");
	this.shape_359.setTransform(15.9,-155);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(1,1,1).p("AJfi5QADAUgBATQAAAUgCAMQgBANgBABQABgBAKAFQAJAEAMAUQAIAOACAPQACAPgBAKQgBAKAAAAQABAAAGACQAHADAJAIQAJALAGAXQAFAXgFAPQgEAOgGAHQgHAHAAAAQABgBAFAKQAFAJAAAWQgBAPgHALQgHALgHAGQgHAGAAAAQAAAAAFAKQAFALACAPQACAPgIAPQgIAQgaAKQAAAAADALQACALgBAQQgBAPgKAOQgKAOgZAHQABAAACAFQADAFgBAHQgCAIgLAIQgHAFgGAMQgFALgLAPQgLAPgXAMQgXANgqAHQgpAHhDgDQgugChEACQhEAChQAEQhOAEhUADQhUAEhOACQhPAChBgDQgkgCgegJQgdgJgVgLQgVgLgMgIQgLgIAAAAQgBAAgFgEQgGgEgGgIQgHgHgBgNQgCgMAIgRQgBAAgLgGQgLgFgMgMQgMgMgCgRQgDgRARgXQgBAAgIgIQgJgHgLgOQgKgOgHgSQgHgTAEgWQAEgWATgYQAAAAgJgIQgKgJgLgOQgLgPgGgVQgHgUAFgZQAFgZAXgaQgBAAgGgOQgGgOgCgVQgDgVAKgUQAKgVAfgNQAAgBgCgIQgCgIABgMQABgMAJgNQAJgMAWgJQgBgBACgKQACgLAHgKQAHgKAPAAQAPAAALgJQALgJAGgNQAGgNAAgKQABgIAIgNQAIgNAPgMQAQgMAWgGQAWgGAdAGQgBgBAEgNQAEgOANgRQAMgSAZgNQAZgMAqABQAAgBAGgLQAGgMAOgMQAOgMAXgCQAYAAAPAJQAPAIAHAIQAHAIAAABQAAgBAGgFQAFgFAJgFQAIgGAKABQAKABAGAEQAGAEACAEQACAEAAABQAAgCABgIQACgJAIgIQAIgIAUAAQATABAJAHQALAHADAHQAEAHAAAAQAAAAAIgHQAHgHANgJQAOgJASgFQASgGAVACQAcAEAMALQAMAMADALQADALAAABQAAgBAIgEQAJgEALgDQAMgDAKAEQAKAEAFAJQAGAJACAIQACAHAAABQAAgBAGgFQAHgGAKgHQAJgGAMgCQALgDAKAHQAMAJAIAQQAHAQADANQADANAAABQAAAAALgCQAMgCAUADQANADAGANQAGANABANQABAMAAABQAAgBAJgDQAIgEANABQAOAAAQAKQAQAMAFAOQAGAOAAAKQAAAKAAACQAAgBADgDQADgEAGABQAFABAGANQAJAVADAKQADAKgBAAQABgBAHgFQAHgFALABQALABANATQAJAOADAVg");
	this.shape_360.setTransform(6.7,-153.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#490F0E").s().p("AmKIHQgkgCgegJQgdgJgVgLQgVgLgMgIIgLgIIgGgEQgGgEgGgIQgHgHgBgNQgCgMAIgRIgMgGQgLgFgMgMQgMgMgCgRQgDgRARgXIgJgIQgJgHgLgOQgKgOgHgSQgHgTAEgWQAEgWATgYIgJgIQgKgJgLgOQgLgPgGgVQgHgUAFgZQAFgZAXgaIgHgOQgGgOgCgVQgDgVAKgUQAKgVAfgNIgCgJQgCgIABgMQABgMAJgNQAJgMAWgJIABgLQACgLAHgKQAHgKAPAAQAPAAALgJQALgJAGgNQAGgNAAgKQABgIAIgNQAIgNAPgMQAQgMAWgGQAWgGAdAGIADgOQAEgOANgRQAMgSAZgNQAZgMAqABIAGgMQAGgMAOgMQAOgMAXgCQAYAAAPAJQAPAIAHAIIAHAJIAGgGQAFgFAJgFQAIgGAKABQAKABAGAEQAGAEACAEIACAFIABgKQACgJAIgIQAIgIAUAAQATABAJAHQALAHADAHIAEAHIAIgHQAHgHANgJQAOgJASgFQASgGAVACQAcAEAMALQAMAMADALIADAMIAIgFQAJgEALgDQAMgDAKAEQAKAEAFAJQAGAJACAIIACAIIAGgGQAHgGAKgHQAJgGAMgCQALgDAKAHQAMAJAIAQQAHAQADANIADAOIALgCQAMgCAUADQANADAGANQAGANABANIABANIAJgEQAIgEANABQAOAAAQAKQAQAMAFAOQAGAOAAAKIAAAMIADgEQADgEAGABQAFABAGANQAJAVADAKIACAKIAAAAIAAAAIAIgGQAHgFALABQALABANATQAJAOADAVQADAUgBATIgCAgIgCAOIAAAAIAAAAQABgBAKAFQAJAEAMAUQAIAOACAPQACAPgBAKIgBAKIAHACQAHADAJAIQAJALAGAXQAFAXgFAPQgEAOgGAHIgHAHIAAAAIAAAAQABAAAFAJQAFAJAAAWQgBAPgHALQgHALgHAGIgHAGIAFAKQAFALACAPQACAPgIAPQgIAQgaAKIADALQACALgBAQQgBAPgKAOQgKAOgZAHIADAFQADAFgBAHQgCAIgLAIQgHAFgGAMQgFALgLAPQgLAPgXAMQgXANgqAHQgpAHhDgDQgugChEACIiUAGIiiAHQhUAEhOACIg5ABQguAAgpgCg");
	this.shape_361.setTransform(6.7,-153.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#633B1B").s().p("AgQAOIgGgDQgCgLAEgGQADgHABAAQACAMAJAAQAIAAAKgEIAKgFQgOAQgJAFQgHADgFAAIgEAAg");
	this.shape_362.setTransform(38.3,12.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#633B1B").s().p("AghAMQgMgIgCgVIADAHQAEAHAOACQALAAALgCIAUgFIAPgFQAHgCAFABIAFADIgBACQgBADgGADIgWAHIgZALQgFADgGAAQgIAAgHgGg");
	this.shape_363.setTransform(37.5,20.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#3A0B0B").s().p("AgLAAQAKgDAFgCIAIgCIgEAGQgEADgKAGg");
	this.shape_364.setTransform(39.1,21.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#3A0B0B").s().p("AgZAQIACgKQAUAEAJgJIANgKIAHgHIgCAKQgDAGgJAJQgKAIgOAAIgNgBg");
	this.shape_365.setTransform(38.1,12.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#965A29").s().p("AhHFdQACgIAFgGQAEgFALACIAHAGQAFAEAEgGQAOgRAKgUQAJgUACgWQACgQgDgPQgBgPAAgQQAEgcAMgaQAFgNAHgXIAOg4IANg7IALg4QAFgZABgNQAFg/gJg/QgJg/gYg6IAWgJIAJAqQAFAeAFAuQAEAuABA4QAABGgMBNQgMBPggBPIAAACIAAACIAFARQAEAPAAAXQABAXgJAYQgHAUgLASQgKASgQAOQgOAKgQAAQgKAAgGACQgHACgJAGQAGgFADgHg");
	this.shape_366.setTransform(55,-12.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#3A0B0B").ss(1,1,1).p("ACGlzQAAAAAGAfQAHAeAGA1QAGA2AABEQAABFgNBLQgMBMgfBOQAAAAAEAQQAEAQABAYQABAYgJAaQgKAZgOAVQgPAVgSAKQgSAKgTgHQgBABgJAIQgJAHgQAFQgQAFgRgGQgYgMgGgIQgGgHAAgBQgBABgFADQgGADgJACQgIACgKgEQgJgFgIgQQgKgXACgPQACgQALgIQAKgHAOACQAAAAAAgJQAAgJAEgMQADgMAJgLQAIgLARgGQAigJAMgFQANgEgBAAQABAAANgaQAMgaARgvQAQgwALhAQALhCgEhRQgFhRgehdQAAABASADQARACAagCQAagCAbgNg");
	this.shape_367.setTransform(47.7,-12.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#72461E").s().p("Ag6FxQgXgMgHgIIgGgIIgGAEQgFADgKACQgIACgKgEQgJgFgIgQQgKgXACgPQACgQALgIQAKgHAOACIAAgJQAAgJAEgMQADgMAJgLQAIgLARgGQAjgJALgFIAMgEIAOgaQAMgaARgvQARgwAKhAQALhCgFhRQgEhRgehdIASAEQARACAagCQAagCAbgNIAHAfQAGAeAGA1QAGA2AABEQAABFgNBLQgMBMgfBOIAEAQQAEAQABAYQABAYgJAaQgKAZgOAVQgPAVgSAKQgSAKgUgHIgJAJQgJAHgQAFQgHACgHAAQgJAAgKgDg");
	this.shape_368.setTransform(47.7,-12.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#5B3516").s().p("AgCAKIgTgHQgJgCgKACQgFABgFAEQgEACgFgCQgDgHAFgBQAGgDAIAAIAMABIANACQAGAAAHgCIAGgCIAJgBIASAAIAKgBIAOgCQAHgCACgDQgJANgLAEQgKAHgIABIgIACQgKAAgHgEg");
	this.shape_369.setTransform(-5.3,26.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#725107").ss(1,1,1).p("ABShwQgogTgjgCQghgDgaAGQgbAHgQAHQgPAHAAABQgBAAgIAPQgHAPgJAdQgIAcgBAnQgCAoAMAzICOhJIB6BjQABgBAEgUQAFgUADggQAEgggDggQgDgjgOgeQgPgdgegQg");
	this.shape_370.setTransform(13.7,-71.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#AF800B").s().p("AAIAkIiOBJQgMgzACgoQABgnAIgcQAJgdAHgPIAJgPIAPgIQAQgHAbgHQAagGAhADQAjACAoATQAeAQAPAdQAOAeADAjQADAggEAgQgDAggFAUIgFAVg");
	this.shape_371.setTransform(13.7,-71.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#365B0A").s().p("AgUgLIApAOIgEAJg");
	this.shape_372.setTransform(9.5,19.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#5B3516").s().p("AA7GDQgWgFgTgUQgOgRgLgYQgNgXgJgXIgRgnIgHgRIgRgeQgQgdgUgxQgVgygPg9QgPg9gBhEIABgjQAGhGAGguQAGguAGgaQAFgaAEgLQAEAGALAHQAMAHAUAGQgMAygJAtQgIAsgGAsQgHA5AAAxQgBBHARA3QAIAcAMAZQANAYAPAZQAOAUAQAWQARAWAIAXQAMAiAOAhQAGAQAIAPQAHAQAPAJQAVALAbAFQAZAEAYgBQgHAEgLABQgKAAgNgDIgBAAIgCAAIgSAEIgNABQgMAAgNgDg");
	this.shape_373.setTransform(-22.2,-8.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#3A0B0B").ss(1,1,1).p("AgHlfQAAABgDAcQgDAdgDAvQgDAwAAA5QAAA6AFA6QAGA4AMAzQANAyAZAiQAAABAPALQAPAMAgAMQAVAHAPAGQAOAFAJALQAJAKAGAVQAAAAAFAHQAFAHAGAMQAFAMADARQACAMgIAKQgHALgLAHQgLAHgJADQgIAEgBAAQAAABgHAIQgIAIgPAGQgQAGgZgFQgBAAgRADQgRADgYgFQgVgEgUgWQgPgSgNgYQgNgYgKgXQgKgXgGgQQgGgPAAgBQgBAAgMgVQgMgWgRglQgRgmgQgxQgRgxgJg2QgJg5AEg7QAGhJAHgvQAGgvAGgaQAGgaADgKQAEgKAAABQAAAAACAHQADAHAOAJQAOAJAgAHQAhAHA6ABg");
	this.shape_374.setTransform(-18.3,-8.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#72461E").s().p("AATGMQgVgEgUgWQgPgSgNgYQgNgYgKgXIgQgnIgGgQIgNgVQgMgWgRglQgRgmgQgxQgRgxgJg2QgJg5AEg7QAGhJAHgvQAGgvAGgaQAGgaADgKIAEgJIACAHQADAHAOAJQAOAJAgAHQAhAHA6ABIgDAdQgDAdgDAvQgDAwAAA5QAAA6AFA6QAGA4AMAzQANAyAZAiQAAABAPALQAPAMAgAMIAkANQAOAFAJALQAJAKAGAVIAFAHQAFAHAGAMQAFAMADARQACAMgIAKQgHALgLAHQgLAHgJADIgJAEIgHAJQgIAIgPAGQgQAGgZgFIgSADIgNABQgMAAgQgDg");
	this.shape_375.setTransform(-18.3,-8.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#725107").s().p("AAABRIgDhXIgGhPIgEg5IgCgWIAfAVIgCAYIgCA6IgEBIIgDBKIgDA6IgBAWIgBhUg");
	this.shape_376.setTransform(14.7,-66.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#725107").s().p("AAAAFIgPglIgHgQIAKAQQAJAOAJAUQAKAWAHAWIgKADQgGgWgHgWg");
	this.shape_377.setTransform(48.1,-52.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#725107").s().p("AgYA4QAPgtAJgWQALgaAHgKIAHgLIgKAbIgeBag");
	this.shape_378.setTransform(-17,-49.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#37560F").s().p("AALAPQgRgBgPgHQgOgHgIgGIgIgIIAIAFQAIAGAOADQAOAGAQAAQARABANgBIANgCQgVALgRAAIgDAAg");
	this.shape_379.setTransform(32.6,58.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#37560F").s().p("AAEAQQgTgBgNgIQgNgHgHgGIgGgJIAJAFIATAKQAMAEAKACQAJACAOAAIAZgCIALgBQgbALgTAAIgFAAg");
	this.shape_380.setTransform(-9.7,57);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#A37308").s().p("AlrCrQgUgPgHgNQgHgNgBgEIAKgeQAJgYAVgjQAVgjAmglQAmgnA6giQA6gjBTgXQBRgXBwgEQA+gBAvAHQAvAIAmAQQAmARAkAZQgXAcgWAXQgVAYgZAQQgZAQggAHIAAABQABAGgCAPIgCAhIgDAdIgBAMIgKgGIgYgRQgOgKgNgLIgagXIgXgUQgdgBgegBQgUAHgYAMQgSAKgPALIgbATIgKAIQgIgRgEgXQgFgYgBgUQgkgdgVgLQgWgMgOABQgPAAgNAIIgfATQgTgDgPAOQgQANgNAXQgNAYgLAbIgXAyQgGAMABAQQAAAPAFAQQAGAQAIAMQgmgIgUgPg");
	this.shape_381.setTransform(3.6,-64.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#C69422").s().p("AAgg8Qh2hRikgRIAigCQBRgCBBASQBBATAxAfQAyAeAlAlQAlAjAZAjQAZAjAOAbQAOAbAFALQgKAKgMAIQhMiPh5hOg");
	this.shape_382.setTransform(38.5,-67.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#A37308").s().p("ACrEWQgYAAgogDQgpgCgygHQgwgGgzgMQg0gLgvgSIgEggQgDghgDg1QgEg1ABhAQAAhBAHhEQAIhEASg9IAAAaQAAAZACApQABAqAFAxQAFAxAKAuQAJAwAQAnQAQAnAXATQAcAYAkAVQAiAVAkAQQAlAQAfAMIAyASIATAGIgZgBg");
	this.shape_383.setTransform(-2.8,-16.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#725107").ss(1,1,1).p("AHPj5QAXAlALAXQALAYAAAAQgYAbgbALQgaAKgXABQgXABgOgDQgPgDAAgBQASAtALA4QAMA3AGA8QAHA7ADA5QADA4AAAtQABAtgBAaQAAAbAAAAQh0ArhqARQhqAQhagCQhcgChLgNQhKgNg1gRQg2gRgcgMQgdgNAAAAQgCgzAHg+QAHg/AMhAQALg/ANg2QAMg0AIggQAJghAAgBQg8ACgjgLQgkgLgSgQQgRgQgGgNQgFgMAAgBQAAAAAHgXQAIgWAUgkQATgkAmgpQAlgoA7glQA7glBWgZQBWgYBzgEQBagCBGAWQBHAWA1AkQA2AkAlApQAmApAXAlg");
	this.shape_384.setTransform(14,-36.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#AF800B").s().p("AgCHjQhcgChLgNQhKgNg1gRQg2gRgcgMIgdgNQgCgzAHg+QAHg/AMhAQALg/ANg2QAMg0AIggIAJgiQg8ACgjgLQgkgLgSgQQgRgQgGgNIgFgNIAHgXQAIgWAUgkQATgkAmgpQAlgoA7glQA7glBWgZQBWgYBzgEQBagCBGAWQBHAWA1AkQA2AkAlApQAmApAXAlQAXAlALAXIALAYQgYAbgbALQgaAKgXABQgXABgOgDIgPgEQASAtALA4QAMA3AGA8QAHA7ADA5QADA4AAAtIAABHIAAAbQh0ArhqARQhcAOhSAAIgWAAg");
	this.shape_385.setTransform(14,-36.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#53821C").s().p("AhlHRQgUgQgUgNQgVgMgQgFQgVgEgfACQgdABgeAFIgxAIIgVAFQAVghAMgqQANgrAIgrQAGgsADgmIADg9IAAgXIgGgCQgEgCgHgIQgIgIgJgRQgIgSADgHQADgHAHgCIAGgBQgPgngHg0QgHgzgCg4QgBg4ADg0QADg1AEgqIAHhDIADgZIAjgDIBZgGIB6gIICEgJIB9gHQA5gDAmgBQAlgBAGADQAIAEAGASQAHATAGAaIALAzIAGAqIADARIAAAHQhcAZhhACQhhAChegRQhggRhYggQgNAigRAfIgiA+QgRAegIAhQgJAhAIAlQAFAQAIANQAIANAHANQAGANADARQACAMgCANQgCAOACAMQABANALAJQAVAPAZAGQAaAGAdACQAdABAeAAQgSAPgYAHQgWAIgZAFQgXAFgVAIQgWAHgPAPQgdAZAAAbQgBAbAUAZQATAaAgAUQgYABgYAQQgXAQgQAYQAUgBAagDQAagDAVAAQAXAAAKAKQAnAMAUATQATATAKAVQAKAVAMASIgkgdg");
	this.shape_386.setTransform(13.2,45.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#53821C").s().p("AhHFwIgBgdIAAgOIAAgJIACg6IAEhFIAFhDIAEgyIADgVIAAgCIgUgbQgDgFgBgEIABgDQADgIAKgDIAOgGIAEgBIAAgCIAAgCIgCgNQgCgMgIgZQgHgZgQgrQgLgdgGgfQgFgegDgcQgBgdAAgVIAAgeIABgLIAAgDQAZgfAlgMQAjgMAmARQgGgCgKAMQgJANgIASIgSAiIgJAVQgJAdgEAgQgDAfADAfQABAPAKAWIASAuQAJAYADATQADAUgJAKQgKAIgegDQAXAMAWAKQAUALAYAHQgCAHgLAEQgKAEgLABQgKABgIgCQgHgDAAgFQgGAqAEArQAEArARAoQAOAnAbAcQAbAdAoAMQgoAHgmANQgiAOgcANIgnAVIAAgXg");
	this.shape_387.setTransform(29.6,55.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#6DA829").s().p("AArGNQgZgzgLg4QgJg3gCg6QgDg5ABg4QgPgBgKgGIgZgNQAKgKAMgFQAMgGAKgHQAKgIAEgMIgIAIQADgOgCgOQgCgPgEgPQgEgPgCgPQgBgIACgJQACgRAJgOIAOgbQAIgOAEgQQACgSgEgMIgKgaQgEgMACgRQACgPAEgGIAHgKQACgEAAgHQgBgGgFgQQgHgPgJgQQgLgPgJgPQASAJAKAFIAWAJQAJAFAGAKQAGAJACAUQADAWgEAYIgFAuQgICDgRCAQgFApAAArQAAAxAFAwQAFAvAHApQAHAoAGAeIAKAqIgOgDg");
	this.shape_388.setTransform(5.4,56.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#6DA829").s().p("AA5HEQgQhagbhWQgahVgyhNQAUAAAKgJQALgIACgOQACgOgFgPQgIgHgNAFQgOAEgPAIQAshOALhYQALhZgOhbQgPhbgjhVQAngBAGACQAGADAGASQAGARAHAaIAJA3IAIA2IgYFZIADABIAFAGQAGAGADAQIAAAEQAAAIgFAGQgEAFgCADIgGACIgEACIAGAXIANA7IAUBOIAUBQIARBBIAIAiQgGgDgKgEg");
	this.shape_389.setTransform(47,42.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#365B0A").ss(1,1,1).p("ADwn4QglAAg6ADQg5ADhEAEQhBAFhDAEQhDAFg3ADQg3AEgiADQghACgBAAQAAABgEAZQgDAZgEAqQgEAqgDA0QgCA1ABA3QABA4AHA0QAHA0AQAnQgBAAgGABQgHABgDAIQgDAHAIARQAKASAHAIQAIAIAEACQAEABABAAQAAABAAAXQgBAXgCAmQgDAlgGAsQgHAsgNAqQgNArgVAgQABAAAUgEQAUgEAdgFQAegEAegCQAegCAVAFQAUAFASAOQARAOATARQASARAWANQAWAOAeAEQgBgBgFgXQgGgYgIgoQgIgogGgyQgGgygCg2QgCg2AHg0QAHgzAFg2QAFgzAEgyQAEgxADgoQACgnACgXQABgXAAgBQAAABANAHQANAGAQADQAOADALgMQAAABgBATQgBAUACAgQABAfAGAlQAFAkAOAjQARAsAIAZQAHAaABAKQACAKgBAAQAAAAgHACQgGADgHAFQgHAEgDAIQgDAHAGAKQAOASADAEIACAEQAAAAgCAVQgCAVgCAhQgDAhgDAlQgDAmgBAiQgCAiAAAXQABAlAAAQQABAQAAADIAAADQAAAAASgKQARgKAegOQAdgNAlgMQAmgMAogEQA0gFAbAGQAbAFAJAHQAIAGABACIhZleQAAAAAGgDQAGgDAGgIQAFgHgBgNQgEgSgHgHQgHgGgBAAIAalVQAAgBgCgRQgDgQgEgaQgFgZgGgZQgGgagGgTQgHgTgIgEQgGgCglABg");
	this.shape_390.setTransform(16.2,46.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#589319").s().p("AheHoQgWgNgSgRQgTgRgRgOQgSgOgUgFQgVgFgeACQgeACgeAEIgxAJIgVAEQAVggANgrQANgqAHgsQAGgsADglIADg9IAAgYIgFgBQgEgCgIgIQgHgIgKgSQgIgRADgHQADgIAHgBIAHgBQgQgngHg0QgHg0gBg4QgBg3ACg1QADg0AEgqIAHhDIAEgaIAigCIBZgHIB6gIICEgJIB9gHQA6gDAlAAQAlgBAGACQAIAEAHATQAGATAGAaIALAyIAHAqIACASIgaFVIAIAGQAHAHAEASQABANgFAHQgGAIgGADIgGADIBZFeIgJgIQgJgHgbgFQgbgGg0AFQgoAEgmAMQglAMgdANIgvAYIgSAKIAAgDIgBgTIgBg1IACg5IAEhIIAGhGIAEg2IACgVIgCgEIgRgWQgGgKADgHQADgIAHgEQAHgFAGgDIAHgCIgBgKQgBgKgHgaQgIgZgRgsQgOgjgFgkQgGglgBgfQgCggABgUIABgUQgLAMgOgDQgQgDgNgGIgNgIIgBAYIgEA+IgHBZIgJBlQgFA2gHAzQgHA0ACA2QACA2AGAyQAGAyAIAoIAOBAIAGAYQgegEgWgOg");
	this.shape_391.setTransform(16.2,46.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#152644").s().p("ABEAuQgGgVgPgUQgYgaghgQQgigQgmgDQgngDgjAMQALgLAIgFIAKgHQAtgSAoABQApABAgAMQAiANAZARQAaARAOANIARAOQAEAFACAKQADAKABAKIAAAUIAAAEQguATgpALQADgVgFgWg");
	this.shape_392.setTransform(-5.1,94.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(1,1,1).p("AAxhbQgigMgmgBQgoAAgtATQgBAAgNAJQgNAKgQAUQgRAUgJAcQgKAfAHApQAAABANAHQAOAHAcAHQAdAHArABQAsABA5gMQA8gLBMgfQAAAAAAgNQAAgNgCgPQgDgOgHgIQgEgGgQgOQgQgOgagRQgagRgjgLg");
	this.shape_393.setTransform(-7.3,95.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#1F3263").s().p("Ag1BoQgrgBgdgHQgcgHgOgHIgNgIQgHgpAKgfQAJgcARgUQAQgUANgKIAOgJQAtgTAoAAQAmABAiAMQAjALAaARQAaARAQAOQAQAOAEAGQAHAIADAOQACAPAAANIAAANQhMAfg8ALQg1AMgpAAIgHgBg");
	this.shape_394.setTransform(-7.3,95.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(1,1,1).p("AC4gvIlsAWQgBAAgEAFQgEAFgCAIQgDAHAHANQAAABAPAGQAPAGAYAIQAYAHAeAFQAeAEAfgEQAcgEASgEQATgEANgEQANgEAMgFQALgEAPgFQAVgGASgGQATgEAMgEQALgEABAAg");
	this.shape_395.setTransform(-7.3,105.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#111E3D").s().p("AhPAuQgegFgYgHQgYgIgPgGIgPgHQgHgNADgHQACgIAEgFIAFgFIFsgWIAJAjIgMAEIgfAIIgnAMIgaAJIgZAJIggAIQgSAEgcAEQgPACgOAAQgQAAgQgCg");
	this.shape_396.setTransform(-7.3,105.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#152644").s().p("AgxBWQgogFgagLQgbgLgOgKQgOgKgDgDIAAgMIABgVIACgTIAAgMQAmgcAlgOQAlgOAigDQgYAMgRASQgRASgFATQgFATANAPQAiAfApAHQAoAHAugLQAugLAugWIAAAAQAAAQgDAKIgGAOQhEAYg2AGQgdADgYAAQgVAAgSgCg");
	this.shape_397.setTransform(40.7,96.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(1,1,1).p("AA2hZQgcgFgjABQglACgrAOQgqAOgsAiQAAAAAAAKQgBAKgBAOQAAAQgBASQAAAAAMAKQANALAaAMQAaAMApAHQAqAHA3gGQA6gGBKgaQABAAAFgOQAEgNAAgVQAAgSgOgXQgOgWgkgUQAAAAgQgGQgQgGgdgGg");
	this.shape_398.setTransform(40.6,96.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#1F3263").s().p("Ag8BbQgpgHgagMQgagMgNgLIgMgKIABgiIACgYIAAgKQAsgiAqgOQArgOAlgCQAjgBAcAFQAdAGAQAGIAQAGQAkAUAOAWQAOAXAAASQAAAVgEANIgGAOQhKAag6AGQgaACgVAAQgbAAgXgDg");
	this.shape_399.setTransform(40.6,96.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(1,1,1).p("ACmgrIlXgGQgBABgCAIQgCAIgBANQgBAMAEALQABABAUAJQAVAJAjAKQAjALAtAEQArAFAwgIQAwgHAvgcIAVgWg");
	this.shape_400.setTransform(40.5,105.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#111E3D").s().p("AgXAwQgtgEgjgLQgjgKgVgJIgVgKQgEgLABgMQABgNACgIIADgJIFXAGIASAfIgVAWQgvAcgwAHQgeAFgcAAQgQAAgRgCg");
	this.shape_401.setTransform(40.5,105.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgEAAQAAgHAEAAQAFAAABAHQgBAHgFABQgEgBAAgHg");
	this.shape_402.setTransform(-4.3,-83.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgEAAQAAgHAEAAQAFAAAAAHQAAAHgFABQgEgBAAgHg");
	this.shape_403.setTransform(31.9,-81.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgEAJQgCgEAAgFQAAgEACgDQACgFACAAQADAAACAFQACADAAAEQAAAFgCAEQgCADgDAAQgCAAgCgDg");
	this.shape_404.setTransform(-4.9,-84.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgEAIQgCgDAAgFQAAgEACgEQACgDACAAQADAAACADQACAEAAAEQAAAFgCADQgCAEgDABQgCgBgCgEg");
	this.shape_405.setTransform(31.5,-83.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#3A0B0B").s().p("AgGAJQgXgDgdgQIARAHQAQAEAaACQAbACAegMIgHAHQgHAEgPAEQgIADgLAAIgQgCg");
	this.shape_406.setTransform(13.1,-68.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#5B3516").s().p("AgHgLQANgKANgBIANgBIgMAEQgLAEgMAIQgGAEgGAFIgLAPIgFAHQAJgZAPgKg");
	this.shape_407.setTransform(-8,-102.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#5B3516").s().p("AAaATIgKgPQgGgGgFgFQgMgJgKgFIgMgFIAOACQAMACAMAMQAOAKAHAbIgEgIg");
	this.shape_408.setTransform(35.8,-100.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#3A0B0B").s().p("AggB1IgKgBIAOgCQAOgBARgMQARgMALgeQAFgPgGgRQgGgTgKgQIgVgkIgMgUQgNgVgEgPIgDgQIAIANIAUAjIALASIAXAmQAMATAFATQAGAUgGARQgIAZgPANQgOALgMAEQgJABgIAAIgGAAg");
	this.shape_409.setTransform(15.7,-84.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#5B3516").s().p("AgcAPQgOgJgGgJIgGgMQAcASAVACQATACANgHQAOgFAHgIIAGgJQABAUgMAKQgLAMgcADIgEAAQgRAAgLgIg");
	this.shape_410.setTransform(13.2,-75.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#222266").s().p("AgMAVQgFgIAAgNQABgNAGgJQAFgIAGgBQAIABAFAJQAEAKAAAMQgBANgGAJQgFAJgGgBQgIAAgEgKg");
	this.shape_411.setTransform(-4.7,-85.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#222266").s().p("AgMAVQgFgKAAgLQABgNAGgHQAFgJAGAAQAIAAAEAJQAFAJAAALQgBANgFAJQgGAIgGAAQgIgBgEgIg");
	this.shape_412.setTransform(31.7,-83.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#F4EBE4").s().p("AgYBkQgHAAgGgDQATgJANgaQALgZACgjQABgZgHgXQgFgXgNgPQgHgIgJgEQAIgEAJABQAPABAMAOQANAPAHAXQAHAXgBAZQgCAcgJAXQgJAWgOANQgLAMgQAAIgBAAg");
	this.shape_413.setTransform(34.2,-90.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#3A0B0B").ss(1,1,1).p("AA/ACQgBAegKAXQgJAYgQANQgPANgQAAQgSgBgNgPQgOgPgIgYQgHgYABgcQACgdAJgYQAKgXAPgOQAPgNAQABQASABAOAPQAOAOAHAZQAIAYgCAbg");
	this.shape_414.setTransform(32.1,-90.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgjBZQgOgPgIgYQgHgYABgcQACgdAJgYQAKgXAPgOQAPgNAQABQASABAOAPQAOAOAHAZQAIAYgCAbQgBAegKAXQgJAYgQANQgPANgQAAQgSgBgNgPg");
	this.shape_415.setTransform(32.1,-90.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#F4EBE4").s().p("AgYBkQgHAAgGgDQAUgJANgZQALgaACgjQABgZgHgXQgEgXgNgPQgIgIgJgEQAIgEAIABQAPABAMAOQANAPAHAXQAGAXgBAZQgBAcgJAXQgJAWgOANQgLAMgQAAIgBAAg");
	this.shape_416.setTransform(-2.1,-92.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#3A0B0B").ss(1,1,1).p("AA/ACQgBAegKAXQgJAYgQANQgPANgQAAQgSgBgNgPQgOgPgIgYQgHgYABgcQACgdAJgYQAKgXAPgOQAPgNAQABQASABAOAPQAOAOAHAZQAIAYgCAbg");
	this.shape_417.setTransform(-4.2,-92.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AgjBZQgOgPgIgYQgHgYABgcQACgdAJgYQAKgXAPgOQAPgNAQABQASABAOAPQAOAOAHAZQAIAYgCAbQgBAegKAXQgJAYgQANQgPANgQAAQgSgBgNgPg");
	this.shape_418.setTransform(-4.2,-92.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(1,1,1).p("AAkgIQAHANgBAaQgBABgGAFQgHAFgJADQAAAAgDgIQgEgIgIgLQgFgLgMgHQgMgHgQgBQAAAAAEgJQAEgJAJgJQAIgJAMAAQAAAAAGACQAIACAJAIQAKAIAHAQg");
	this.shape_419.setTransform(37.4,-107.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#490F0E").s().p("AAQAlIgMgTQgFgLgMgHQgMgHgQgBIAEgJQAEgJAJgJQAIgJAMAAIAGACQAIACAJAIQAKAIAHAQQAHANgBAaIgHAGQgHAFgJADIgDgIg");
	this.shape_420.setTransform(37.4,-107.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(1,1,1).p("AAsgDQAAAAgEgKQgDgJgIgKQgHgJgMgCQAAAAgIACQgGABgLAHQgKAHgIAPQgJANgBAaQABAAAFAGQAGAGAJAEQAAgBAFgHQAEgIAJgKQAGgKANgHQAMgFARABg");
	this.shape_421.setTransform(-12.6,-109.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#490F0E").s().p("AglAiIgGgGQABgaAJgNQAIgPAKgHQALgHAGgBIAIgCQAMACAHAJQAIAKADAJIAEAKQgRgBgMAFQgNAHgGAKQgJAKgEAIIgFAIQgJgEgGgGg");
	this.shape_422.setTransform(-12.6,-109.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#4C2C12").s().p("AgOAWQgLgFgEgEQgEgDABgCIAAgCIAFgGQAFgFAIgHQAJgHALgDQAMgDAPAFIgJABQgJAAgLAFQgJAFgHAKIAFgBQAFgDAFAAQAGgBAFAEQAEAFgDAHQgCAHgIAEQgEABgCAAQgGAAgHgCg");
	this.shape_423.setTransform(63.4,-101.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3A200C").s().p("AgEAXQgIgEgDgHQgCgHAEgFQAEgEAHABQAEAAAFADIAFABQgHgKgJgFQgLgFgIAAIgJgBQAPgFAMADQAKADAJAHQAJAHAFAFIAEAGIABACQAAACgDADQgEAEgMAFQgHACgFAAQgDAAgDgBg");
	this.shape_424.setTransform(-41.2,-101.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#3A0B0B").ss(1,1,1).p("AhOgKQABgBAMgKQAMgLATgNQATgNATgIQAVgHATAFQASAFALAZQAKAagJATQgIAVgVAOQgUAPgXAHQgWAHgTAAQgTgBgHgK");
	this.shape_425.setTransform(64.2,-101.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#72461E").s().p("AgnBHQgTgBgHgKIgNhGIANgLQAMgLATgNQATgNATgIQAVgHATAFQASAFALAZQAKAagJATQgIAVgVAOQgUAPgXAHQgUAHgSAAIgDAAg");
	this.shape_426.setTransform(64.2,-101.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#5B3516").s().p("ADKDrIgggMIgsgPIgmgNIgTgGQhCgVgpgdQgrgegYggQgYgggKgdQgKgbgDgSIgCgTIAAgNIgJAKQgLAMgQAFQgRAEgTgEQgXgFgQgPQgQgPgHgVQgKgjAPgTQATgWAyAFQAZACAGANQAEAHgCAJQgBAIgCAGIgDAGIgFAHIAjACIABgCIAEgDIAFgJIACgHIgCgIIgBgKIAAgEQAAgDADgBIAHgFIAMgGQAGgFAHgHQAIgMAAgNIgCgPIgDgNIgCgHIgBgBIAAgBIARgNQAJgJAAgJIABAFIABAEIABAFQAEAGAHAAQAHAAAJgDIAOgCQAJgBAJAFQgbAxgQA5QgQA4ABA4QABA2AWAuQAXAuAvAbQAmATAkAMIBIAXQAjAKAiAPQAiAPAiAZQgpgIgygWg");
	this.shape_427.setTransform(-19.2,-92.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#5B3516").s().p("AgpAwQgRgTgBgdQABgbARgUQARgTAYgBQAZABARATQARAUABAbQgBAdgRATQgRATgZABQgYgBgRgTg");
	this.shape_428.setTransform(31,-85.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#5B3516").s().p("AgpAwQgRgTAAgdQAAgbARgUQARgTAYgBQAZABARATQARAUABAbQgBAdgRATQgRATgZABQgYgBgRgTg");
	this.shape_429.setTransform(-4.7,-86.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#3A0B0B").ss(1,1,1).p("AHVjZQAAAAgIABQgIABgJgBQgKgBgGgFQgFgFgCgIQgCgHgBgGIAAgGIgFAEQgFADgIAEQgIADgJgBQgIgCgGgEQgFgFgDgEIgDgFIgDAFQgDAFgGAFQgGAGgHAEQgLAEgIgEQgIgEAAgBQAAABgFADQgGADgJABQgKAAgFgEQgFgDAAgBQAAABgFAFQgFAGgIAFQgHAFgHgCQgLgEgGgFIgFgFQAAABgDAFQgCAFgIAFQgHAFgQgBQgQgCgIgFQgJgFgDgEQgDgEAAgBQgBABgLAHQgMAHgPAHQgPAGgKgBQgKgBgIgGQgHgFgEgFIgFgFIgGAEQgFADgJADQgIACgIgDQgJgFgEgGQgEgGAAgBQAAAAgGABQgGACgGADQgHADgDAGQgDAGgMAEQgNAFgQgEQgQgEgMgTQgBAAgHAEQgHADgJADQgKACgGgDQgKgFgJgIQgIgJgBAAQAAgBgIAAQgHABgLAIQgHAGgDAFQgEAEgEABQgEAAgKgEQgPgIgKgHQgKgHgNABQgNACgKACQgJACgDgFQgCgDAAgFQgBgEgCgEQgDgFgIgFIACAEQACAFgBAHQgBAGgHAHQgLAKgEACQgEACABAGQABAEADAKQADAJABALQAAALgHAKQgIAKgIAEQgIAEgFADQgGADgBAGQgBAKACAGQACAGgCAFQgCAGgDACQgCADAAAAIgYgBQAAAAAEgIQADgIAAgLQABgLgIgJQgIgJgXgCQgugFgXATQgWATAMAsQAHAXAQAPQAQAOAVAGQAUAGAUgEQAUgEAOgPQgBAAADATQACASAKAbQAKAdAZAhQAYAiArAeQAsAeBFAVQAAAAAQAGQAQAFAXAIQAWAHAWAIQAVAIAMAFQAPAGAXAJQAVAIAbAGQAcAGAbgCQAagCAUgFQATgGARgGQAQgGAPgEQAIgBAZgKQAZgKAigQQAjgRAmgXQAmgXAigbQAigcAYggQAXggAGggQABgBACgRQADgRAAgYQgBgZgHgXQgIgYgUgNQgagSgHgPQgIgQACgKQABgKABAAg");
	this.shape_430.setTransform(5.2,-92.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#72461E").s().p("AAsEQQgbgGgVgIIgmgPIghgNIgsgPIgngNIgQgGQhFgVgsgeQgrgegYgiQgZghgKgdQgKgbgCgSIgCgTQgOAPgUAEQgUAEgUgGQgVgGgQgOQgQgPgHgXQgMgsAWgTQAXgTAuAFQAXACAIAJQAIAJgBALQAAALgDAIIgEAIIAYABIACgDQADgCACgGQACgFgCgGQgCgGABgKQABgGAGgDIANgHQAIgEAIgKQAHgKAAgLQgBgLgDgJIgEgOQgBgGAEgCQAEgCALgKQAHgHABgGQABgHgCgFIgCgEQAIAFADAFQACAEABAEQAAAFACADQADAFAJgCIAXgEQANgBAKAHQAKAHAPAIQAKAEAEAAQAEgBAEgEQADgFAHgGQALgIAHgBQAIAAAAABIAJAJQAJAIAKAFQAGADAKgCIAQgGIAIgEQAMATAQAEQAQAEANgFQAMgEADgGQADgGAHgDIAMgFIAGgBIAEAHQAEAGAJAFQAIADAIgCQAJgDAFgDIAGgEIAFAFQAEAFAHAFQAIAGAKABQAKABAPgGIAbgOIAMgIIADAFQADAEAJAFQAIAFAQACQAQABAHgFQAIgFACgFIADgGIAFAFQAGAFALAEQAHACAHgFQAIgFAFgGIAFgGIAFAEQAFAEAKAAQAJgBAGgDIAFgEQAAABAIAEQAIAEALgEQAHgEAGgGIAJgKIADgFIADAFQADAEAFAFQAGAEAIACQAJABAIgDIANgHIAFgEIAAAGIADANQACAIAFAFQAGAFAKABQAJABAIgBIAIgBQgBAAgBAKQgCAKAIAQQAHAPAaASQAUANAIAYQAHAXABAZQAAAYgDARIgDASQgGAggXAgQgYAggiAcQgiAbgmAXQgmAXgjARQgiAQgZAKQgZAKgIABQgPAEgQAGIgkAMQgUAFgaACIgLABQgWAAgWgFg");
	this.shape_431.setTransform(5.2,-92.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#3A0B0B").s().p("AkDHpIApg3IgMgEQgMgEgQgKQgQgKgOgQQgOgRgGgXQgFgYAKghIgJgEQgIgFgKgPQgJgPgDgdQgEgdAKgwIgIgJQgIgKgHgRQgHgRABgYQAAgYAPgeQgBAAgEgOQgDgMAAgVQABgWANgYQAMgYAggWIgCgMQgCgMADgRQACgSAMgSQAMgSAagNIgCgJQgCgJAFgOQAEgOATgQQATgQAqgOIAGgNQAGgLAPgPQAPgOAZgLQAagKAlADIAEgKQAEgKALgNQAMgOAUgLQAWgKAPABQAOAAAIAEIAHAFIAAAAIAAAAIACgLQACgKAJgLQAIgKASAAQASACAHAIQAIAJABAIIABAIIAIgLQAIgKANgNQANgOARgJQARgKARACIADAAQgaAQgUAaQgUAZgOAdQgHAPAFAUQAEATAIAPQgFgJgHgFIgPgHQgIgEgFgEQgegFgcANQgbANgRAbQgRAagBAkQgcgJgaAJQgbAKgXATQgYAUgUAVQgHAPAGAPQAGAPAPAPQgUAAgOALQgNAKgJAOIgOAZQgPAUABATQABASAOAOQAOANAZAEQgZABgTAQQgTAQgGAXQgFAXAOAVQAKAKAQAGQAPAGARABQARACAPgFIgfAVQgPAKgGAPQgHAOAJAUQAKATATAMQATAMAYADQAYAEAYgHQgJAHgBAKQATAZAXAEQAWAEAYgJQAZgKAXgNQAXgNATgIQgPAKgHARQgHARAFAPQAFAPATAGIAnABQAUAAAPgGQAOgFAJgOIgIAOQgGAKgBAKQgBAKAJAKQALAFAOgCQAOgCANgIQANgIAFgPQgBAPgFAOQgGAPgBANQgBANAOAKQASALATgBQAUgBARgMQgKALgHAKQgHALgBAIQAAAJAMAEIAEACIh7gIIhkgBIg2AEIigAqIgwAcIhKAHg");
	this.shape_432.setTransform(-18.8,-152.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").ss(1,1,1).p("AgJABQAAABAFABQAEABAKgFQgGgCgFADQgHABgBAAg");
	this.shape_433.setTransform(76.9,-123.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(1,1,1).p("AADAAQgFAAAAAA");
	this.shape_434.setTransform(76.6,-136.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(1,1,1).p("AAIgHQgHAHgIAI");
	this.shape_435.setTransform(18.8,-113.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(1,1,1).p("AgCgFQAEAKAAAB");
	this.shape_436.setTransform(31.7,-197.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").ss(1,1,1).p("AgEACQAEgCAFAA");
	this.shape_437.setTransform(-22,-128.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#682525").s().p("AB+IJIgagFIAlgSQATgKARgMQAcgVABgSIABgBQgBgGgBgDIgDgDQgOgFgEgDQgFgDABgCIAAgCQABgEAFgBQAFAAAMABQA2AIAbhEQAGgOgBgEQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgHgEIAGgEQAHgFAGgIQAHgJAAgJQgBgJgGgGIgGgGIgFgDIASgTQAJgMAAgJQAAgIgIgFQgHgFgJgDIgNgDIABgJQALACALgHQALgIADgXQACgQgIgGQgGgEgKABQgJAAgJADIgOAFIgEgJIALgKQAJgJAIgPQAIgOgGgPQgHgOgNgGQgMgFgLAAIgMgBIgRACIAOgKIAHgGQAGgGAEgJQAEgIgEgLQgFgKgFgDQgGgDgEAAIgFABIgFgIIAGgHQAEgGAFgNQAEgNgCgUQgBgMgGgCQgHgCgJAFQgKAGgHAGIgGgHIAFgFQAEgFADgJQADgIgCgNQgDgNgGgHQgGgHgFgDIgHgDIgFgBIACgFIADgMQACgMgDgLQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQgGgCgKACQgLACgFADIgNAFIAHgMIAEgIQADgHgCgIQgCgGgIgDQgIgEgEAAIgHABQgEADAAACIgJgDIACgKQABgJgDgLQgCgLgMgFQgLgEgIABQgIACgEAEIgFAGIgJgEQABgBABgKQABgKgGgLQgFgJgMgCQgXgFgNACIgNADIgQAHIAKgOIACgEQABgDgBgGQgCgLgOgJQgPgJgTgIQgTgIgSgFIgcgJQgYgKgTgFQgTgGgRAGQgRAGgSAYIgDAFIgEAFIgCgMIgEgTQgDgLgGgKQgGgKgJgCQgJgBgJAGQgIAGgHAJIgJAOIgIAQIgBgSIgCgKQgCgJgJgJQgJgJgUgDQgFAAgFABQAHgKANgNQANgOAPgJQAQgJARABQAUADAKAJQAJAKACAJIACAKIABATIAJgRIAJgPQAHgIAJgHQAJgGAJABQAJACAHAKQAGAKAEAMIAEAUIACAMIAHgKIAKgMQAKgLAOgKQAPgKAPACQALACAJAIQAJAIAHALIAMATIAJgEQgFgLgFgPQgGgPAAgOQAAgIACgDQADgDABAAQAEgCACACQAGAEADAMQAEAMACAPIACAbIABATIAJgRQAIgQALgSQAMgRAKgNQAKgMAFAAQAAgBAAABQABAAAAAAQABAAAAABQAAABABABQAFALgHARQgGAQgJAPQgKAPgIAIIAGAIIAIgCQAIgCAKABQALABAMAIQAMAIACAJQAAAGgBADIgCAEIgLAPIARgHQAAgBAOgDQAOgCAaAFQAMADAFAJQAGALgBALIgCALIAJAEIAGgGQAEgEAIgCQAIgBAMAEQAMAFADAMQADALgCAKIgBAKIAJADIABgCIADgDIAHgBQAFAAAIAEQAIADACAHQACAIgDAHIgDAIIgIANIAOgGQAFgCAKgCQALgDAHADQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAEAMgDAMIgDANIgBAFIAFABIAGADQAGADAHAIQAGAHADAOQACANgDAJQgEAJgEAFIgFAFIAHAHQAHgGAKgGQAKgFAHACQAGACACANQABAUgEANQgEAOgFAHIgGAHIAFAIIAFgBQAFAAAFADQAGAEAFAKQAEAMgEAJQgEAKgGAGIgHAGIgQAJIATgCIAMAAQALABANAFQANAGAIAPQAFALgEAMQgEALgIAKQgHAKgHAGIgHAGIAFAIIAOgFQAKgCAJgBQAKAAAGAEQAIAGgBAQQgEAZgLAHQgLAHgMgBIgBAJIAOAEQAJACAHAGQAIAFAAAIQAAAJgJANIgSAUIAFADIAGAGQAGAGABAKQAAAJgHAJQgGAJgHAFIgHAEIAIAEQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABQABADgGAPQgOAjgVAQQgVAPgdgDQgMgCgGABQgFAAgBAEIAAACQgBACAFAEQAFADAOAFIADAEQABADABAFIgBACQgBATgdAVQgZASgdANQgdAOgVAIIgaAKIgLgCg");
	this.shape_438.setTransform(39.4,-153.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").ss(1,1,1).p("AKLEqQABAAABABQAFAEgJAWQgOAjgWASQgVARghgEQgPgCgCACQgCABAFACQAFADAGACQAGACAAAAQABAAACAFQADAEABAIQAAAJgHALQgHALgTAPQgUAOgXAMQgWALgVAJQgUAIgOAFQgNAEAAAAIipgfIiiglIiXgLIhkgBIg2AEIiiArIgwAbIhKAHIg6gkIApg3QAAAAgMgEQgMgEgQgKQgQgKgOgQQgOgRgGgXQgFgYAKghQgBABgIgFQgIgFgKgPQgJgPgDgdQgEgdAJgwQAAAAgHgJQgIgKgHgRQgHgRABgYQAAgYAPgeQgBAAgEgOQgDgMAAgVQABgWAMgYQANgYAfgWQAAAAgCgMQgBgMACgRQADgSAMgSQAMgRAagNQAAgBgCgJQgCgIAEgPQAFgOATgQQATgQAqgOQAAgBAGgLQAGgMAPgPQAPgOAZgKQAZgKAmACQgBAAAFgKQAEgKALgNQAMgNAVgMQAXgKAOABQAPAAAIAFQAHAEAAAAQAAgBACgKQACgKAJgKQAIgKASAAQASABAHAIQAIAJABAIQABAIAAABQAAgBAIgKQAIgLANgNQANgOARgJQAQgKASACQAXADAKALQAKALADAKQACAKAAAAQAAAAAHgKQAGgKAJgKQALgJAOACQAKACAHAJQAGAJAEALQAEAKABAJQACAHAAABQAAgBAGgGQAGgIAKgJQAKgJAMgGQAMgGANACQAMACALAJQAKAKAIAMQAGAJAEAIQgFgLgGgQQgFgQAAgNQgBgOAKgFQAKgEAGAKQAGALADAQQADAQABAMQABANAAABQAAgBAGgKQAGgKAJgOQAIgOAKgMQAKgMAIgFQAJgFAEAJQAGAMgFAPQgFAPgJAOQgJAOgHAJQgIAJAAABQAAgBAJgCQAIgCANABQANABANAJQANAJACAIQACAJgCAFQgCAFgBABQACgCANgCQAOgCAcAFQARAFAFAMQAFAMgBALQgBAIgBADQABgCAEgDQAFgFAJgDQAKgDAPAFQAOAGADANQAEANgCALQgBAHAAADQAAgBABgCQADgDAGgCQAHgBANAFQAMAGABAJQACAKgDAHQgEAIAAAAQAAAAAKgDQAJgDAKAAQAKAAAEAIQAEAOgDANQgCAMgBABQABAAAGADQAHAEAHAIQAIAIADAPQACAQgEAKQgEAKgFAFQgCADgBABQABgBAEgDQAHgGAKgEQAJgEAHADQAIADACAQQACAWgFAOQgFAPgFAHIgGAIQABgBAEgBQAGgBAHAEQAIAEAGANQAFAOgEALQgFALgHAGQgHAGgBAAQABAAAMAAQAMAAAOAGQAPAGAIARQAFANgEAMQgEANgIAKQgIALgHAGQgFAFgCABQACgBAIgDQAKgDANgBQANgBAJAGQAJAHgCATQgEAagLAJQgMAIgKAAQgCAAgCAAQACAAACAAQAKACAMAGQALAGADALQAEALgOASIgOAQQAAAAAHAFQAGAGACALQADAKgKAPQgIAKgGAFQgDABgCABQgHAEgFgBQgEgBAAgBQABgBAIgDQAHgCAFADgAC5m/QAFALABABQgBgBgDgIQgBgBgBgCgAKBCmIAAAAQgHgBgBgB");
	this.shape_439.setTransform(12.8,-153.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#490F0E").s().p("Ao/HsIApg3IgMgEQgMgEgQgKQgQgKgOgQQgOgRgGgXQgFgYAKghIgJgEQgIgFgKgPQgJgPgDgdQgEgdAJgwIgHgJQgIgKgHgRQgHgRABgYQAAgYAPgeIgFgOQgDgMAAgVQABgWAMgYQANgYAfgWIgCgMQgBgMACgRQADgSAMgSQAMgRAagNIgCgKQgCgIAEgPQAFgOATgQQATgQAqgOIAGgMQAGgMAPgPQAPgOAZgKQAZgKAmACIAEgKQAEgKALgNQAMgNAVgMQAXgKAOABQAPAAAIAFIAHAEIAAAAIAAAAIACgLQACgKAJgKQAIgKASAAQASABAHAIQAIAJABAIIABAJIAIgLQAIgLANgNQANgOARgJQAQgKASACQAXADAKALQAKALADAKIACAKIAHgKQAGgKAJgKQALgJAOACQAKACAHAJQAGAJAEALQAEAKABAJIACAIIAGgHQAGgIAKgJQAKgJAMgGQAMgGANACQAMACALAJQAKAKAIAMIAKARQgFgLgGgQQgFgQAAgNQgBgOAKgFQAKgEAGAKQAGALADAQIAEAcIABAOIAGgLIAPgYQAIgOAKgMQAKgMAIgFQAJgFAEAJQAGAMgFAPQgFAPgJAOIgQAXIgIAKIAJgDQAIgCANABQANABANAJQANAJACAIQACAJgCAFIgDAGQACgCANgCQAOgCAcAFQARAFAFAMQAFAMgBALIgCALIAFgFQAFgFAJgDQAKgDAPAFQAOAGADANQAEANgCALIgBAKIABgDQADgDAGgCQAHgBANAFQAMAGABAJQACAKgDAHIgEAIIAKgDQAJgDAKAAQAKAAAEAIQAEAOgDANIgDANIAHADQAHAEAHAIQAIAIADAPQACAQgEAKQgEAKgFAFIgDAEIAFgEQAHgGAKgEQAJgEAHADQAIADACAQQACAWgFAOQgFAPgFAHIgGAIIAFgCQAGgBAHAEQAIAEAGANQAFAOgEALQgFALgHAGIgIAGIANAAQAMAAAOAGQAPAGAIARQAFANgEAMQgEANgIAKIgPARIgHAGIAKgEQAKgDANgBQANgBAJAGQAJAHgCATQgEAagLAJQgMAIgKAAIgEAAIAAAAQgHgBgBgBQABABAHABIAAAAIAEAAQAKACAMAGQALAGADALQAEALgOASIgOAQIAHAFQAGAGACALQADAKgKAPQgIAKgGAFIACABQAFAEgJAWQgOAjgWASQgVARghgEQgPgCgCACQgBAAAAAAQAAABAAAAQABAAABABQAAABACAAIALAFIAGACIADAFQADAEABAIQAAAJgHALQgHALgTAPQgUAOgXAMQgWALgVAJIgiANIgNAEIipgfIiiglIiXgLIhkgBIg2AEIiiArIgwAbIhKAHgAJ/EvIADgBIABAAIABgBIABAAIAAAAIAAgBIABAAIAFgCIgBgBIgFgBIAAAAIgBAAIgFABIgJAEIAEACIABAAIACAAIAAAAIACAAgAC/mzIgEgJIgCgDIAGAMIAAAAgAJ9EvIgCAAIgBAAIgEgCIAJgEIAFgBIABAAIAAAAIAFABIABABIgFACIgBAAIAAABIAAAAIgBAAIgBABIgBAAIgDABIgCAAIAAAAgAKLEqIAAAAgAC5m/IACADIAEAJIgGgMgAC5m/IAAAAg");
	this.shape_440.setTransform(12.8,-153.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#3A200C").s().p("AABAEQgLgCgJAFIgJAGQAAgJAEgEQAFgDAFgDIAFgCIgRgRQAaAEALANQAMALADALIADAMQgOgUgOgCg");
	this.shape_441.setTransform(-45.3,-102);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#5B3516").s().p("AAJAJQgCgJgHgIIgLgPIgGgGQAWAOAHALQAHAKgCAIQgCAIgEAEIgFAEQAGgKgDgLg");
	this.shape_442.setTransform(23.1,-86.5);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#5B3516").s().p("AgFARQgDgLACgJQACgMACgJIACgJQgBAZABANQABAPADAHIAEAHQgKgGgDgLgAAAghIAAAAIAAAAg");
	this.shape_443.setTransform(3.5,-85.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#5B3516").s().p("AgsA8QgHgHgIgPQgIgOgDgWQgDgTAHgcIASAGQARAEAYADQAXACAWgIQAWgHAKgWIABAJQAAAIgIASQgIARgYAXQgXAagtAiIgHgIg");
	this.shape_444.setTransform(16.4,-96.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#5B3516").s().p("AD9F5IhAgEQgxgEgngLQgogLgkgRQgjgSgngZQgfgTgRgbQgSgcgJgbQgJgcgDgSIgCgVIgKgBQgIARgXAIQgXAHgdgHQgSgDgPgKQgQgKgKgPQgJgRAAgWQAcg6AkgCQAPgBAOAJQAOAIALALQALALAGAJIAGAJIAJANIABgZQABgLgDgFQgDgHgEgCQANgKABgPQAAgKgFgLQgFgLgEgGQAHgEAEgHQADgGAAgFQAAgHgCgHIgEgLQAcgWABgUQAAgOgHgJQgHgIgIgEQAbgRAJgUQAKgUABgQQAAgOgCgLIgFgSQANgEAGgHQAFgHAAgGQAAgJgEgIQgEgHgFgFQAPgGAGgJQAFgJAAgHIAAgBQASAIAMgFQAGgEACgFQADgFABgEQAGACAKAAQAIABAPgDIgwCPQgZBIgRBIQgRBIACBHQABBHAdBJQAWAwAmAfQApAeAzASQAzATA2ANIBmAYIgvgCg");
	this.shape_445.setTransform(-23.8,-109.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#3A0B0B").ss(1,1,1).p("AnQBXQAAgBgJgMQgJgMgPgOQgQgNgTgFQgUgFgVANQgVANgUApQgBAcANATQAOATAWAKQAVAKAXABQAYABASgIQATgIAHgRQAAABADATQACATAJAcQAJAcATAdQASAcAfAUQAqAZAlASQAlASAoAKQAnALAwAEQAxAEAqACQAoABAdAIQAcAIAIAVQAAAAAMgKQANgJAYgMQAYgNAigKQAVgGAjgJQAkgKApgQQAogQAkgaQAjgaAVgnQAVgngDg3QAAAAAPgBQAOgBAVgDQAWgDAWgIQAVgIAQgOQAPgPADgWQACgXgRggQgMgVgSgCQgRgBgSAIQgTAJgQAOQgQAOgKAKQgKALAAABQgBgBgGgKQgHgKgFgRQgFgQAEgRQADgTATgSQgBgBgFgNQgGgNAAgWQAAgWARgaQAAAAgHgEQgIgDgHgIQgHgIgBgMQgBgMALgRQAAAAgKgIQgJgHgLgOQgLgPgGgVQgGgVAGgbQgBAAgEgDQgEgDgCgGQgDgHAGgLQgBAAgKgCQgLgDgNgHQgNgHgKgOQgKgOABgYQAAABgPAJQgPAIgXAHQgXAGgYgGQgYgHgTgdQAAABgJAGQgIAGgOADQgNAEgQgGQgPgGgOgWQgBAAgKAEQgKAEgLgBQgMAAgGgNQAAAAgGAJQgHAJgLAJQgLAIgOgBQgRgCgUgUQAAAAgLAGQgKAFgMABQgMABgFgNQAAABAAAFQgBAGgGAFQgGAGgPgBQAAABgHAFQgHAEgKAEQgKAEgKgDQgKgDgGgPQAAABgFAGQgGAGgJAGQgKAGgMAAQgMAAgNgLQABABACAFQACAHgFAJQgGAKgXAJQgYAJgOAAQgOAAgGgDQgGgCAAgBQAAABgBAFQgBAGgEAFQgEAGgJAAQgJABgQgJQABAAAAAIQAAAIgGAJQgGAJgSAEQABABAFAGQAFAGAEAIQADAJgEAJQgFAJgSAFQAAABAEAMQAEAMAAASQAAATgLAUQgLAUgdAQQABAAAIAFQAIAFAGAKQAGAJgFAPQgEAOgYATQABAAADAJQAEAJgBALQgCALgOAGQAAAAAFAHQAFAFAEALQAEALgCALQgDALgNAJQABgBAFAFQAGAFAAAPQgBAHAAADg");
	this.shape_446.setTransform(7.2,-112.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#72461E").s().p("AAoGkQgdgIgogBIhbgGQgwgEgngLQgogKglgSQglgSgqgZQgfgUgSgcQgTgdgJgcQgJgcgCgTIgDgUQgHARgTAIQgSAIgYgBQgXgBgVgKQgWgKgOgTQgNgTABgcQAUgpAVgNQAVgNAUAFQATAFAQANQAPAOAJAMIAJANIABgKQAAgPgGgFQgFgFgBABQANgJADgLQACgLgEgLQgEgLgFgFIgFgHQAOgGACgLQABgLgEgJIgEgJQAYgTAEgOQAFgPgGgJQgGgKgIgFIgJgFQAdgQALgUQALgUAAgTQAAgSgEgMIgEgNQASgFAFgJQAEgJgDgJQgEgIgFgGIgGgHQASgEAGgJQAGgJAAgIIgBgIQAQAJAJgBQAJAAAEgGQAEgFABgGIABgGIAGADQAGADAOAAQAOAAAYgJQAXgJAGgKQAFgJgCgHIgDgGQANALAMAAQAMAAAKgGQAJgGAGgGIAFgHQAGAPAKADQAKADAKgEQAKgEAHgEIAHgGQAPABAGgGQAGgFABgGIAAgGQAFANAMgBQAMgBAKgFIALgGQAUAUARACQAOABALgIQALgJAHgJIAGgJQAGANAMAAQALABAKgEIALgEQAOAWAPAGQAQAGANgEQAOgDAIgGIAJgHQATAdAYAHQAYAGAXgGQAXgHAPgIIAPgKQgBAYAKAOQAKAOANAHQANAHALADIALACQgGALADAHQACAGAEADIAFADQgGAbAGAVQAGAVALAPQALAOAJAHIAKAIQgLARABAMQABAMAHAIQAHAIAIADIAHAEQgRAaAAAWQAAAWAGANIAGAOQgTASgDATQgEARAFAQQAFARAHAKIAHALIAKgMQAKgKAQgOQAQgOATgJQASgIARABQASACAMAVQARAggCAXQgDAWgPAPQgQAOgVAIQgWAIgWADIgjAEIgPABQADA3gVAnQgVAngjAaQgkAagoAQQgpAQgkAKIg4APQgiAKgYANQgYAMgNAJIgMAKQgIgVgcgIg");
	this.shape_447.setTransform(7.2,-112.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#682525").s().p("AFhHvQAHgOAIgGQAKgGABgIQAAgFgCgDIgCgDIgFgHIAIgCQAagGAKgTQAGgMAAgNQAAgNgCgJIgCgJIgCgFIAFgBQAdgLAGgVQAEgNgCgMQgDgMgEgHIgFgJIgCgEIAEgDIAHgFQAGgGAGgKQAHgKABgNQAAgUgEgJQgFgIgBAAIgEgEIAFgEIAGgGQAGgHADgNQAEgNgEgWQgGgUgHgKQgHgKgGgCQgGgDgBABIgGgBIABgFIABgKQAAgKgCgOQgBgOgHgNQgLgPgIgFIgJgEIgGAAIABgGIACgNIACggQABgTgDgTQgDgUgIgOQgLgQgMgBQgIAAgFAEIgGAFIgHAHIgCgKIgCgKQgDgKgJgUQgDgHgDgCIgDgCIgDABIgCADIgJgDIAAgLQAAgKgFgNQgGgMgOgLQgOgJgMAAQgNgBgHADIgIAEIgIAFIAAgJIgCgSQgCgLgFgKQgFgJgJgCQgTgDgLACIgLACIgGACIAAgGIgDgOQgDgMgHgPQgHgPgMgJQgLgHgOAGQgNAFgKAJIgKAJIgHAIIgCgKIgCgIQgBgHgFgIQgFgIgIgEQgMgDgNAFQgNAEgGAFIgIAEIAAgIQAAgCgCgJQgDgKgMgKQgLgLgZgDQgbgCgVAJQgVAKgNALIgNAMIgGAGIgCgIIgEgHQgEgGgJgGQgKgGgRgBQgRgBgIAIQgGAHgCAIIgBAHIgJACIgFgHQgFgGgMgBQgIgBgIAFQgHAFgFAFIgFAFIgFAGIgDgGIgIgJQgHgIgOgHQgOgIgVAAQgWABgMALQgNALgGALIgFANIgCAEIgDgBIgEAAQAFgNANgPQANgPAXgJQAXgKAlABIADABIACgEIAFgNQAGgLANgLQANgLAVgBQAVABAOAHQAOAHAHAIIAIAJIADAGIAFgGIAFgFQAFgFAHgFQAIgEAIAAQAMABAFAGIAFAHIAJgBIABgIQACgIAGgHQAIgIARABQARABAKAGQAKAGADAGIAEAHIADAIIAFgGQABgCAMgKQANgLAVgKQATgJAbACQAZADALALQAMAKADAKQADAJgBACIAAAIIAIgEQAGgEAOgFQAPgFALAEQAJADAEAIQAFAIACAHIACAIIACAKIAGgIIALgJQAKgJANgFQANgGAMAHQALAJAHAPQAHAPADAMIADAOIABAGIAFgCIALgCQALgCATADQAJACAFAKQAFAJACALQACALAAAHIAAAJIAIgFIAIgEQAIgDAMABQAMAAAOAJQAPALAFAMQAFANAAAKIAAALIAJADIACgDIADgBIADACQADACADAHQAJAUADAKIACAKIACAKIAHgHIAGgFQAFgEAIAAQAMABALAQQAIAOADAUQADATgBATIgCAgIgCANIgBAGIAGAAIAJAEQAIAFALARQAHANACAOQABAOAAAKIgBAIIgBAFIAGABQABgBAGADQAGACAHAKQAIAJAFAVQAEAWgEANQgDANgGAHIgGAGIgFAEIAEAEQABAAAFAIQAEAJAAAUQgBANgHAKQgGAKgGAGIgHAFIgEADIACAEIAFAJQAEAHADAMQACANgEAMQgGAVgdALIgFABIACAFIACAJQACAJAAANQAAANgGAMQgKATgaAGIgIACIAFAHIACADQACADAAAFQgBAIgKAGQgIAGgHAOQgFAMgMAOQgLAOgXAMQgXAMgpAHIAFgKgApKkhIgEgBIAAgBQAAgFAGgKQAFgJALgLQgHANgDAJIgCALIgBAFg");
	this.shape_448.setTransform(15.9,-153.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").ss(1,1,1).p("AJfi6QADAUgBAUQAAATgCANQgBANgBABQABgBAKAFQAJAEAMAUQAIAOACAPQACAPgBAKQgBAKAAAAQABAAAGACQAHADAJAIQAJALAGAXQAFAXgFAPQgEAOgGAHQgHAHAAAAQABgBAFAKQAFAJAAAWQgBAPgHALQgHALgHAGQgHAGAAAAQAAAAAFAKQAFALACAPQACAPgIAPQgIAQgaAKQAAAAADALQACALgBAQQgBAPgKAOQgKAOgZAHQABAAACAFQADAFgBAHQgCAIgLAIQgHAFgGAMQgFALgLAPQgLAPgXAMQgXANgqAHQgpAHhDgDQgugChEACQhEAChQAEQhPAEhUADQhTAEhPACQhOAChBgDQglgCgdgJQgegJgVgLQgVgLgLgIQgLgIgBAAQAAAAgGgEQgGgEgGgIQgGgHgCgNQgBgMAIgRQgBAAgLgGQgMgFgMgMQgLgMgDgRQgCgRAQgXQAAAAgJgIQgIgHgLgOQgLgOgGgSQgHgTADgWQAEgWAUgYQgBAAgJgIQgJgJgLgOQgLgPgHgVQgGgUAFgZQAFgZAWgaQAAAAgGgOQgGgOgDgVQgCgVAKgUQAKgVAfgOQgBAAgCgIQgBgIABgMQABgNAJgMQAJgNAVgJQAAgBACgKQACgKAHgKQAHgKAOAAQAPAAALgJQALgJAGgNQAGgNABgLQAAgIAIgMQAJgNAPgMQAPgNAXgFQAWgGAcAGQAAgBAEgOQAEgNAMgSQANgSAZgMQAZgNAqACQAAgBAGgMQAGgMAOgMQANgMAYgBQAXAAAPAIQAPAIAIAJQAHAIAAAAQAAAAAFgFQAGgGAIgFQAJgFAKAAQAKABAFAEQAGAFACAEQACADABABQgBgCACgHQABgJAIgIQAJgJATAAQAUACAIAHQALAHAEAHQAEAGAAABQAAgBAIgHQAHgHANgIQAOgJASgGQASgGAVACQAcAEAMAMQAMAMADALQADAKAAABQAAAAAIgEQAJgFALgCQAMgDAKADQAKAFAFAJQAGAJACAHQACAIAAAAQAAAAAGgGQAHgGAKgGQAJgHAMgCQALgCAKAGQAMAKAIAQQAHAQADANQADANAAABQAAgBALgCQAMgCAUAEQANADAGANQAGANABAMQABAMAAABQAAAAAJgEQAIgDANAAQAOAAAQALQAQALAFAOQAGAOAAALQAAAJAAACQAAgBADgDQADgDAGABQAFABAGANQAJAUADALQADAKgBAAQABgBAHgFQAHgFALABQALABANASQAJAPADAUg");
	this.shape_449.setTransform(6.8,-152.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#490F0E").s().p("AmKIHQglgCgdgJQgegJgVgLQgVgLgLgIIgMgIIgGgEQgGgEgGgIQgGgHgCgNQgBgMAIgRIgMgGQgMgFgMgMQgLgMgDgRQgCgRAQgXIgJgIQgIgHgLgOQgLgOgGgSQgHgTADgWQAEgWAUgYIgKgIQgJgJgLgOQgLgPgHgVQgGgUAFgZQAFgZAWgaIgGgOQgGgOgDgVQgCgVAKgUQAKgVAfgOIgDgIQgBgIABgMQABgNAJgMQAJgNAVgJIACgLQACgKAHgKQAHgKAOAAQAPAAALgJQALgJAGgNQAGgNABgLQAAgIAIgMQAJgNAPgMQAPgNAXgFQAWgGAcAGIAEgPQAEgNAMgSQANgSAZgMQAZgNAqACIAGgNQAGgMAOgMQANgMAYgBQAXAAAPAIQAPAIAIAJIAHAIIAFgFQAGgGAIgFQAJgFAKAAQAKABAFAEQAGAFACAEIADAEIABgJQABgJAIgIQAJgJATAAQAUACAIAHQALAHAEAHIAEAHIAIgIQAHgHANgIQAOgJASgGQASgGAVACQAcAEAMAMQAMAMADALIADALIAIgEQAJgFALgCQAMgDAKADQAKAFAFAJQAGAJACAHIACAIIAGgGQAHgGAKgGQAJgHAMgCQALgCAKAGQAMAKAIAQQAHAQADANIADAOIALgDQAMgCAUAEQANADAGANQAGANABAMIABANIAJgEQAIgDANAAQAOAAAQALQAQALAFAOQAGAOAAALIAAALIADgEQADgDAGABQAFABAGANQAJAUADALIACAKIAAAAIAAAAIAIgGQAHgFALABQALABANASQAJAPADAUQADAUgBAUIgCAgIgCAOIAAAAIAAAAQABgBAKAFQAJAEAMAUQAIAOACAPQACAPgBAKIgBAKIAHACQAHADAJAIQAJALAGAXQAFAXgFAPQgEAOgGAHIgHAHIAAAAIAAAAQABAAAFAJQAFAJAAAWQgBAPgHALQgHALgHAGIgHAGIAFAKQAFALACAPQACAPgIAPQgIAQgaAKIADALQACALgBAQQgBAPgKAOQgKAOgZAHIADAFQADAFgBAHQgCAIgLAIQgHAFgGAMQgFALgLAPQgLAPgXAMQgXANgqAHQgpAHhDgDQgugChEACIiUAGIijAHQhTAEhPACIg5ABQguAAgogCg");
	this.shape_450.setTransform(6.8,-152.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#633B1B").s().p("AghAMQgMgIgCgVIAEAHQADAHAPACQAJAAAMgCIAUgFIAPgFQAHgCAEABIAGADIgBACQgBADgGADIgVAHIgaALQgGADgFAAQgIAAgHgGg");
	this.shape_451.setTransform(37.5,21.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#965A29").s().p("AhHFdQACgIAFgFQAEgGALADIAHAFQAFAEAEgFQAOgSAKgUQAJgUACgWQACgQgDgPQgBgPAAgQQAEgcAMgaQAFgMAHgYIAOg4IANg7IALg4QAFgZABgNQAFg/gJg/QgJg/gYg7IAWgIIAJAqQAFAeAFAuQAEAtABA5QAABGgMBNQgMBPggBQIAAABIAAACIAFARQAEAPAAAYQABAXgJAYQgHATgLASQgKATgQANQgOAKgQAAQgKAAgGACQgHADgJAFQAGgEADgIg");
	this.shape_452.setTransform(55,-11.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#3A0B0B").ss(1,1,1).p("ACGl0QAAABAHAeQAGAfAGA1QAGA1AABFQAABEgMBLQgNBNgfBOQAAAAAEAQQAFAQAAAYQABAYgJAaQgKAZgOAVQgPAVgSAKQgSAKgTgHQgBABgJAIQgJAHgQAFQgQAFgQgGQgYgMgHgIQgGgHAAgBQgBABgFADQgGADgJACQgIACgKgEQgJgFgIgQQgKgXACgPQACgQALgIQAKgHAOACQAAAAAAgJQAAgJAEgMQADgMAJgLQAJgLAQgGQAigJAMgFQANgEgBAAQABAAAOgaQALgaARgvQAQgwALhAQALhCgEhSQgFhRgehcQABAAARADQARADAagCQAagCAbgOg");
	this.shape_453.setTransform(47.8,-11);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#72461E").s().p("Ag6FxQgXgMgHgIIgGgIIgGAEQgGADgIACQgJACgJgEQgKgFgIgQQgKgXADgPQABgQALgIQAKgHAOACIAAgJQABgJADgMQADgMAJgLQAIgLASgGQAhgJANgFIALgEIAPgaQALgaARgvQARgwAKhAQALhCgEhSQgFhRgehcIASADQARADAagCQAagCAagOIAHAfQAHAfAGA1QAGA1AABFQAABEgMBLQgNBNgfBOIAFAQQAEAQAAAYQABAYgJAaQgKAZgPAVQgOAVgSAKQgSAKgTgHIgKAJQgJAHgQAFQgHADgHAAQgJAAgKgEg");
	this.shape_454.setTransform(47.8,-11);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#5B3516").s().p("AgCAKIgTgHQgJgCgKACQgFACgFACQgEADgFgCQgDgIAFAAQAGgCAIgBIAMABIANACQAGAAAHgCIAGgCIAJAAIASAAIAKgBIAOgDQAHgBACgEQgJANgLAEQgKAHgIABIgIACQgKAAgHgEg");
	this.shape_455.setTransform(-5.3,27.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#365B0A").s().p("AgVgLIAqAOIgFAJg");
	this.shape_456.setTransform(9.5,20.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#5B3516").s().p("AA7GDQgWgEgTgUQgOgRgLgYQgNgYgJgXIgRgmIgHgRIgRgfQgQgdgUgxQgVgxgPg+QgPg9gBhEIABgjQAGhGAGguQAGguAGgaQAFgaAEgLQAEAGALAHQAMAHAUAGQgMAygJAtQgIAsgGAsQgHA5AAAxQgBBHARA4QAIAcAMAYQANAZAPAYQAOAVAQAWQARAVAIAXQAMAjAOAhQAGAPAIAQQAHAQAPAIQAVAMAbAEQAZAFAYgBQgHADgLABQgKABgNgDIgBgBIgCABIgSADIgNABQgMAAgNgDg");
	this.shape_457.setTransform(-22.2,-7.3);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#72461E").s().p("AATGNQgVgFgUgWQgPgRgNgYQgNgYgKgXIgQgnIgGgQIgNgWQgMgVgRgmQgRglgQgxQgRgygJg2QgJg5AEg7QAGhJAHgvQAGgvAGgaQAGgaADgKIAEgJIACAHQADAHAOAJQAOAJAgAHQAhAHA6ABIgDAdQgDAdgDAvQgDAwAAA5QAAA6AFA6QAGA5AMAyQANAzAZAhQAAABAPAMQAPALAgANIAkAMQAOAGAJAKQAJAKAGAWIAFAHQAFAGAGAMQAFANADAQQACANgIAKQgHAKgLAHQgLAHgJAEIgJAEIgHAIQgIAJgPAFQgQAGgZgFIgSAEIgNAAQgMAAgQgCg");
	this.shape_458.setTransform(-18.3,-7.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#725107").s().p("AAABRIgEhXIgEhPIgFg5IgCgWIAfAVIgBAYIgDA6IgDBIIgEBKIgDA6IgBAWIgBhUg");
	this.shape_459.setTransform(14.8,-65.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#725107").s().p("AgYA4QAPgtAJgXQALgZAHgLIAHgKIgKAbIgeBag");
	this.shape_460.setTransform(-17,-48.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#A37308").s().p("AlrCrQgUgPgIgNQgHgNAAgEIAJgeQAKgYAVgjQAVgjAlglQAmgnA7giQA6gjBTgXQBRgXBvgEQA/gBAuAHQAwAIAnAQQAmARAjAZQgXAcgWAXQgVAYgZAQQgZAQggAHIAAABQAAAGgBAPIgDAhIgCAdIgBAMIgKgGIgYgRQgOgKgNgLIgagXIgYgUQgcgBgegBQgVAHgXAMQgTAKgOALIgbATIgLAIQgIgRgDgXQgFgYgCgUQgjgdgVgLQgWgMgOABQgPAAgNAIIggATQgSgDgQAOQgPANgNAXQgNAYgMAbIgWAyQgGAMAAAQQABAPAFAQQAFAQAJAMQgngIgTgPg");
	this.shape_461.setTransform(3.7,-63.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#A37308").s().p("ACrEXQgYgBgogDQgpgCgygHQgwgGgzgMQg0gLgvgSIgEggQgDgggDg2QgEg1ABhAQAAhBAHhEQAIhEASg9IAAAaQAAAZACApQABAqAFAxQAFAxAKAuQAJAwAQAnQAQAmAXAVQAcAYAkAUQAiAVAkAQQAlARAfALIAyASIATAGIgZAAg");
	this.shape_462.setTransform(-2.8,-15);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#725107").ss(1,1,1).p("AGTlHQAlApAXAlQAYAlALAXQAKAYAAAAQgYAbgaALQgbAKgXABQgXABgOgDQgOgDgBgBQASAuAMA4QALA2AHA8QAGA8ADA4QADA4ABAtQAAAtAAAbQgBAaAAABQh0ArhqAQQhqARhagDQhcgChLgNQhKgNg1gRQg2gQgcgNQgdgMAAgBQgCgyAHg/QAHg+AMhAQALhAANg1QAMg0AIghQAJghAAgBQg8ACgjgLQgkgLgSgQQgRgQgGgNQgFgMAAgBQAAAAAHgXQAIgWAUgkQATgkAmgpQAlgoA7glQA7glBWgZQBWgYBzgEQBagCBGAWQBIAWA1AkQA1AkAmApg");
	this.shape_463.setTransform(14,-35);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#AF800B").s().p("AgCHjQhcgChLgNQhKgNg1gRQg2gQgcgNIgdgNQgCgyAHg/QAHg+AMhAQALhAANg1QAMg0AIghIAJgiQg8ACgjgLQgkgLgSgQQgRgQgGgNIgFgNIAHgXQAIgWAUgkQATgkAmgpQAlgoA7glQA7glBWgZQBWgYBzgEQBagCBGAWQBIAWA1AkQA1AkAmApQAlApAXAlQAYAlALAXIAKAYQgYAbgaALQgbAKgXABQgXABgOgDIgPgEQASAuAMA4QALA2AHA8QAGA8ADA4QADA4ABAtIAABIIgBAbQh0ArhqAQQhdAOhRAAIgWAAg");
	this.shape_464.setTransform(14,-35);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#53821C").s().p("AhlHSQgUgQgUgNQgVgNgQgEQgVgFgfACQgeACgdAEIgyAJIgUAEQAVggAMgrQANgqAHgsQAHgsACglIADg9IAAgYIgFgBQgEgCgHgIQgIgIgJgSQgJgRAEgHQADgIAGgBIAHgBQgPgngHg0QgHg0gCg4QgBg4ADg0QADg1AEgqIAHhDIADgZIAjgDIBYgGIB7gIICEgJIB9gHQA5gDAlgBQAmgBAGADQAHAEAHASQAHATAGAaIAKAzIAIAqIACARIAAAHQhcAZhhACQhhAChegRQhggRhZggQgMAigRAfIgjA+QgQAegIAhQgJAhAHAlQAGARAIANQAIAMAGAOQAHANADAQQACAMgCAOQgCANABANQACAMALAJQAUAPAaAHQAaAGAdABQAdACAegBQgTAPgXAIQgXAHgYAFQgXAGgVAHQgWAIgPAOQgdAaAAAbQgBAbAUAZQATAZAfAUQgXABgYARQgYAQgPAXQAUAAAagDQAZgEAWABQAXAAAKAJQAnANATASQAUATAKAVQAKAVAMASIgkgcg");
	this.shape_465.setTransform(13.2,46.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#53821C").s().p("AhIFwIAAgdIAAgOIAAgJIABg6IAFhFIAFhDIAFgyIABgVIABgCIgUgbQgEgFABgFIAAgDQADgHAJgDIAPgGIADgBIAAgCIAAgCIgBgOQgCgLgHgaQgIgZgRgrQgKgdgGgeQgGgfgBgcQgDgcAAgWIABgdIABgMIAAgDQAZgfAkgMQAkgLAmAQQgGgCgKANQgJAMgIATIgRAiIgJAUQgLAegDAfQgDAgACAfQACAPAKAWIASAuQAKAXADAUQACATgJAKQgKAIgdgCQAXAMAVAKQAUALAZAHQgEAHgJAEQgKAEgMABQgJABgIgCQgJgDABgFQgGAqAEArQAEArAQAoQAPAnAbAcQAcAdAoAMQgpAHglANQgkAOgaANIgoAVIgBgXg");
	this.shape_466.setTransform(29.7,56.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#6DA829").s().p("AArGNQgZgygLg5QgJg3gCg5QgDg5ABg5QgPAAgKgHIgZgNQAKgJAMgGQAMgGAKgHQAKgHAEgNIgIAIQADgOgCgOQgCgPgEgPQgEgPgCgPQgBgJACgJQACgQAJgOIAOgbQAIgOAEgQQACgSgEgNIgKgZQgEgNACgRQACgOAEgGIAHgKQACgEAAgHQgBgGgFgQQgHgQgJgPQgLgPgJgQQASAKAKAFIAWAJQAJAFAGAJQAGAKACAUQADAWgEAYIgFAuQgICDgRCAQgFApAAArQAAAxAFAwQAFAvAHApQAHAoAGAeIAKAqIgOgDg");
	this.shape_467.setTransform(5.4,57.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#6DA829").s().p("AA5HEQgQhagbhWQgahVgyhNQAUAAAKgJQALgIACgOQACgOgFgPQgIgHgNAFQgOAEgPAIQAshOALhZQALhZgOhaQgPhbgjhVQAngBAGACQAGADAGARQAGASAHAaIAJA2IAIA2IgYFaIADABIAFAGQAGAGADAQIAAAEQAAAIgFAGQgEAFgCADIgGACIgEACIAGAXIANA7IAUBOIAUBQIARBBIAIAiQgGgDgKgEg");
	this.shape_468.setTransform(47,43.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#365B0A").ss(1,1,1).p("ADwn5QglABg6ADQg5ADhEAEQhBAEhDAFQhDAEg3AEQg4AEghACQgiADgBAAQAAAAgDAZQgDAZgEAqQgEAqgDA1QgDA0ABA4QACA4AHA0QAHA0APAnQAAAAgHABQgGABgDAIQgEAHAJARQAJASAIAIQAHAIAFACQAEABAAAAQAAABAAAXQAAAXgDAmQgCAlgHAsQgHAsgNAqQgMArgVAgQABAAATgEQAUgEAegFQAdgEAegCQAfgCAVAFQAUAFARAOQASAOASARQATARAWANQAWAOAeAEQgBgBgGgXQgFgYgIgoQgIgogGgyQgGgygDg2QgBg2AGg0QAIgzAFg2QAFgzAEgyQAEgxADgoQACgoACgXQABgXAAAAQAAAAANAHQANAHAQACQAOADALgLQAAAAgBAUQgBATACAgQAAAgAHAkQAFAlANAjQASAsAIAZQAHAaABAKQACAKgBAAQAAAAgHACQgGADgHAFQgHAEgDAIQgDAHAGAKQAOASADAEIACAEQAAAAgCAVQgCAVgCAhQgDAhgDAlQgDAmgCAiQgBAiAAAXQABAlAAAQQAAAQAAADIAAADQABAAASgKQARgKAegOQAdgNAlgMQAlgMApgEQA0gFAbAGQAbAFAKAHQAHAGABACIhZleQAAAAAGgDQAHgDAFgIQAGgHgCgNQgEgSgHgHQgHgGgBAAIAalWQAAAAgCgRQgDgRgEgZQgEgZgHgaQgGgagGgTQgHgSgIgEQgGgDglABg");
	this.shape_469.setTransform(16.2,48);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#589319").s().p("AheHoQgXgNgRgRQgTgRgRgOQgSgOgUgFQgVgFgfACQgdACgeAEIgxAJIgVAEQAVggAMgrQANgqAIgsQAGgsADglIADg9IAAgYIgFgBQgEgCgIgIQgIgIgJgSQgIgRADgHQADgIAHgBIAGgBQgPgngHg0QgHg0gCg4QgBg4ADg0QADg1AEgqIAHhDIADgZIAjgDIBZgGIB6gIICEgJIB9gHQA5gDAmgBQAlgBAGADQAIAEAGASQAHATAGAaQAGAaAFAZIAHAqIADARIgbFWIAIAGQAHAHAEASQACANgGAHQgFAIgHADIgHADIBaFeIgJgIQgJgHgbgFQgbgGg0AFQgoAEgmAMQglAMgdANIgwAYIgSAKIAAgDIAAgTIgBg1IABg5IAFhIIAFhGIAFg2IACgVIgCgEIgRgWQgHgKAEgHQACgIAIgEQAGgFAHgDIAHgCIgBgKQgBgKgIgaQgHgZgSgsQgNgjgGglQgFgkgCggQgBggABgTIABgUQgLALgPgDQgPgCgNgHIgNgHIgBAXIgFA/IgGBZIgJBlQgGA2gHAzQgGA0ABA2QADA2AFAyQAHAyAIAoIANBAIAGAYQgdgEgWgOg");
	this.shape_470.setTransform(16.2,48);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#111E3D").s().p("AhPAuQgegFgYgHQgYgIgPgGIgPgHQgHgNADgHQACgIAEgFIAFgFIFsgWIAJAjIgMAEIgfAIIgnAMIgaAJIgZAJIggAIIguAIQgPACgOAAQgQAAgQgCg");
	this.shape_471.setTransform(-7.3,107);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#152644").s().p("AgwBWQgogFgbgLQgbgLgOgKQgOgKgDgDIABgMIAAgVIABgTIABgMQAmgcAlgOQAlgOAhgDQgXAMgRASQgRASgFATQgEATAMAPQAiAfAqAHQAnAHAugLQAugLAugWIAAAAQAAAQgEAKIgEAOQhFAYg2AGQgdADgYAAQgVAAgRgCg");
	this.shape_472.setTransform(40.7,97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:21.1,y:98.2}},{t:this.shape_60,p:{x:21.1,y:98.2}},{t:this.shape_59,p:{x:11.9,y:90.6}},{t:this.shape_58,p:{x:11.9,y:90.6}},{t:this.shape_57,p:{x:31.8,y:90.6}},{t:this.shape_56,p:{x:31.8,y:90.6}},{t:this.shape_55,p:{x:7.8,y:47.1}},{t:this.shape_54,p:{x:7.8,y:47.1}},{t:this.shape_53},{t:this.shape_52,p:{x:-14.6,y:106.1}},{t:this.shape_51,p:{x:-14.6,y:106.1}},{t:this.shape_50,p:{x:-21.1,y:99.4}},{t:this.shape_49,p:{x:-21.1,y:99.4}},{t:this.shape_48,p:{x:-3.7,y:99.9}},{t:this.shape_47,p:{x:-3.7,y:99.9}},{t:this.shape_46,p:{x:-17.8,y:51.3}},{t:this.shape_45,p:{x:-17.8,y:51.3}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:20.8,y:-66.1}},{t:this.shape_41,p:{x:20.8,y:-66.1}},{t:this.shape_40,p:{x:-9,y:-40.2}},{t:this.shape_39,p:{x:-9,y:-40.2}},{t:this.shape_38},{t:this.shape_37,p:{x:-8.9,y:-40.2}},{t:this.shape_36,p:{x:-26.2,y:-40.2}},{t:this.shape_35,p:{x:-3.7,y:-77.7}},{t:this.shape_34,p:{x:-3.7,y:-77.7}},{t:this.shape_33,p:{x:-26.7,y:-61.4}},{t:this.shape_32},{t:this.shape_31,p:{x:1.1,y:-69.7}},{t:this.shape_30,p:{x:7.5,y:-125.5}},{t:this.shape_29,p:{x:7.5,y:-125.5}},{t:this.shape_28,p:{x:-13.4,y:-123}},{t:this.shape_27,p:{x:-23.1,y:-115.3}},{t:this.shape_26},{t:this.shape_25,p:{x:16.2,y:-159.2}},{t:this.shape_24,p:{x:36.4,y:-163.6}},{t:this.shape_23,p:{x:36.4,y:-163.6}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:36.2,y:-148.5}},{t:this.shape_19,p:{x:36.2,y:-148.5}},{t:this.shape_18},{t:this.shape_17,p:{x:38.2,y:-126.4}},{t:this.shape_16,p:{x:41.4,y:-124.7}},{t:this.shape_15,p:{x:27.1,y:-103.7}},{t:this.shape_14,p:{x:27.1,y:-103.7}},{t:this.shape_13,p:{x:23.6,y:-97.4}},{t:this.shape_12,p:{x:23.6,y:-97.4}},{t:this.shape_11,p:{x:28.9,y:-144.4}},{t:this.shape_10},{t:this.shape_9,p:{x:39.3,y:-145.7}},{t:this.shape_8},{t:this.shape_7,p:{x:29.9,y:-145.9}},{t:this.shape_6,p:{x:39.3,y:-146.9}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:-35.2,y:-149.6}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_126,p:{x:25.5}},{t:this.shape_125,p:{x:25.5}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:-5.9}},{t:this.shape_99},{t:this.shape_98,p:{x:-14.2}},{t:this.shape_97,p:{x:-14.2}},{t:this.shape_96},{t:this.shape_95,p:{x:-14.1}},{t:this.shape_94,p:{x:-30.3}},{t:this.shape_93,p:{x:-6.6}},{t:this.shape_92,p:{x:-6.6}},{t:this.shape_91,p:{x:-30.6}},{t:this.shape_90,p:{x:-30.5}},{t:this.shape_89,p:{x:-1.4,y:-23.8}},{t:this.shape_88,p:{x:-1.4,y:-23.8}},{t:this.shape_87,p:{x:-1.8}},{t:this.shape_86},{t:this.shape_85,p:{x:14}},{t:this.shape_84,p:{x:14}},{t:this.shape_83,p:{x:0.8}},{t:this.shape_82},{t:this.shape_81,p:{x:9}},{t:this.shape_80,p:{x:1.7}},{t:this.shape_79},{t:this.shape_30,p:{x:3.5,y:-121.6}},{t:this.shape_29,p:{x:3.5,y:-121.6}},{t:this.shape_28,p:{x:-17.4,y:-119.1}},{t:this.shape_27,p:{x:-27,y:-111.4}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_24,p:{x:32.4,y:-159.7}},{t:this.shape_23,p:{x:32.4,y:-159.7}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_20,p:{x:32.3,y:-144.6}},{t:this.shape_19,p:{x:32.3,y:-144.6}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_16,p:{x:37.4,y:-120.8}},{t:this.shape_15,p:{x:23.1,y:-99.8}},{t:this.shape_14,p:{x:23.1,y:-99.8}},{t:this.shape_13,p:{x:19.6,y:-93.5}},{t:this.shape_12,p:{x:19.6,y:-93.5}},{t:this.shape_72},{t:this.shape_71,p:{x:34.5,y:-142.1}},{t:this.shape_70,p:{x:35.4,y:-141.8}},{t:this.shape_69},{t:this.shape_7,p:{x:25.9,y:-142}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:-8.6,y:-157.6}},{t:this.shape_65}]},7).to({state:[{t:this.shape_61,p:{x:13.4,y:100.2}},{t:this.shape_60,p:{x:13.4,y:100.2}},{t:this.shape_59,p:{x:4.2,y:92.7}},{t:this.shape_58,p:{x:4.2,y:92.7}},{t:this.shape_57,p:{x:24.2,y:92.6}},{t:this.shape_56,p:{x:24.2,y:92.6}},{t:this.shape_55,p:{x:0.2,y:49.1}},{t:this.shape_54,p:{x:0.2,y:49.1}},{t:this.shape_155},{t:this.shape_52,p:{x:-22.3,y:108.2}},{t:this.shape_51,p:{x:-22.3,y:108.2}},{t:this.shape_50,p:{x:-28.7,y:101.5}},{t:this.shape_49,p:{x:-28.7,y:101.5}},{t:this.shape_48,p:{x:-11.4,y:101.9}},{t:this.shape_47,p:{x:-11.4,y:101.9}},{t:this.shape_46,p:{x:-25.5,y:53.4}},{t:this.shape_45,p:{x:-25.5,y:53.4}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_42,p:{x:13.1,y:-64.1}},{t:this.shape_41,p:{x:13.1,y:-64.1}},{t:this.shape_40,p:{x:-16.6,y:-38.1}},{t:this.shape_39,p:{x:-16.6,y:-38.1}},{t:this.shape_150},{t:this.shape_37,p:{x:-16.6,y:-38.1}},{t:this.shape_36,p:{x:-33.8,y:-38.2}},{t:this.shape_35,p:{x:-11.4,y:-75.6}},{t:this.shape_34,p:{x:-11.4,y:-75.6}},{t:this.shape_33,p:{x:-34.4,y:-59.4}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_31,p:{x:-6.5,y:-67.7}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_30,p:{x:-0.2,y:-123.5}},{t:this.shape_29,p:{x:-0.2,y:-123.5}},{t:this.shape_28,p:{x:-21.1,y:-120.9}},{t:this.shape_27,p:{x:-30.7,y:-113.3}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_24,p:{x:28.7,y:-161.6}},{t:this.shape_23,p:{x:28.7,y:-161.6}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_20,p:{x:28.6,y:-146.5}},{t:this.shape_19,p:{x:28.6,y:-146.5}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_16,p:{x:33.7,y:-122.7}},{t:this.shape_15,p:{x:19.4,y:-101.6}},{t:this.shape_14,p:{x:19.4,y:-101.6}},{t:this.shape_13,p:{x:15.9,y:-95.3}},{t:this.shape_12,p:{x:15.9,y:-95.3}},{t:this.shape_132},{t:this.shape_131,p:{x:30.8,y:-143.9}},{t:this.shape_9,p:{x:31.7,y:-143.6}},{t:this.shape_130},{t:this.shape_129,p:{x:22.2,y:-143.8}},{t:this.shape_6,p:{x:31.6,y:-144.9}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_3,p:{x:-42.8,y:-147.5}}]},2).to({state:[{t:this.shape_126,p:{x:16.3}},{t:this.shape_125,p:{x:16.3}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_100,p:{x:-15.2}},{t:this.shape_171},{t:this.shape_98,p:{x:-23.4}},{t:this.shape_97,p:{x:-23.4}},{t:this.shape_170},{t:this.shape_95,p:{x:-23.4}},{t:this.shape_94,p:{x:-39.6}},{t:this.shape_93,p:{x:-15.8}},{t:this.shape_92,p:{x:-15.8}},{t:this.shape_91,p:{x:-39.8}},{t:this.shape_90,p:{x:-39.7}},{t:this.shape_89,p:{x:-10.6,y:-23.8}},{t:this.shape_88,p:{x:-10.6,y:-23.8}},{t:this.shape_87,p:{x:-11}},{t:this.shape_169},{t:this.shape_85,p:{x:4.8}},{t:this.shape_84,p:{x:4.8}},{t:this.shape_83,p:{x:-8.4}},{t:this.shape_168},{t:this.shape_81,p:{x:-0.2}},{t:this.shape_80,p:{x:-7.5}},{t:this.shape_167,p:{x:-10.2,y:-71.2}},{t:this.shape_30,p:{x:-14.8,y:-119.8}},{t:this.shape_29,p:{x:-14.8,y:-119.8}},{t:this.shape_28,p:{x:-35.7,y:-117.2}},{t:this.shape_166},{t:this.shape_165},{t:this.shape_25,p:{x:-6.1,y:-153.4}},{t:this.shape_24,p:{x:14.1,y:-157.9}},{t:this.shape_23,p:{x:14.1,y:-157.9}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_20,p:{x:13.9,y:-142.8}},{t:this.shape_19,p:{x:13.9,y:-142.8}},{t:this.shape_162,p:{x:15.9,y:-120.6}},{t:this.shape_17,p:{x:15.9,y:-120.6}},{t:this.shape_16,p:{x:19.1,y:-119}},{t:this.shape_15,p:{x:4.8,y:-97.9}},{t:this.shape_14,p:{x:4.8,y:-97.9}},{t:this.shape_13,p:{x:1.3,y:-91.6}},{t:this.shape_12,p:{x:1.3,y:-91.6}},{t:this.shape_11,p:{x:6.6,y:-138.7}},{t:this.shape_131,p:{x:16.1,y:-140.2}},{t:this.shape_70,p:{x:17,y:-139.9}},{t:this.shape_161,p:{x:7.5,y:-138.6}},{t:this.shape_160},{t:this.shape_159,p:{x:17,y:-141.2}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:-57.5,y:-143.8}}]},2).to({state:[{t:this.shape_61,p:{x:13.4,y:100.2}},{t:this.shape_60,p:{x:13.4,y:100.2}},{t:this.shape_59,p:{x:4.2,y:92.7}},{t:this.shape_58,p:{x:4.2,y:92.7}},{t:this.shape_57,p:{x:24.2,y:92.6}},{t:this.shape_56,p:{x:24.2,y:92.6}},{t:this.shape_55,p:{x:0.2,y:49.1}},{t:this.shape_199,p:{x:0.2,y:49.1}},{t:this.shape_155},{t:this.shape_52,p:{x:-22.3,y:108.2}},{t:this.shape_51,p:{x:-22.3,y:108.2}},{t:this.shape_50,p:{x:-28.7,y:101.5}},{t:this.shape_49,p:{x:-28.7,y:101.5}},{t:this.shape_48,p:{x:-11.4,y:101.9}},{t:this.shape_47,p:{x:-11.4,y:101.9}},{t:this.shape_46,p:{x:-25.5,y:53.4}},{t:this.shape_45,p:{x:-25.5,y:53.4}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_42,p:{x:13.1,y:-64.1}},{t:this.shape_41,p:{x:13.1,y:-64.1}},{t:this.shape_40,p:{x:-16.6,y:-38.1}},{t:this.shape_39,p:{x:-16.6,y:-38.1}},{t:this.shape_150},{t:this.shape_37,p:{x:-16.6,y:-38.1}},{t:this.shape_36,p:{x:-33.8,y:-38.2}},{t:this.shape_35,p:{x:-11.4,y:-75.6}},{t:this.shape_34,p:{x:-11.4,y:-75.6}},{t:this.shape_33,p:{x:-34.4,y:-59.4}},{t:this.shape_198},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_31,p:{x:-6.5,y:-67.7}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_30,p:{x:-0.2,y:-123.5}},{t:this.shape_29,p:{x:-0.2,y:-123.5}},{t:this.shape_28,p:{x:-21.1,y:-120.9}},{t:this.shape_27,p:{x:-30.7,y:-113.3}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_24,p:{x:28.7,y:-161.6}},{t:this.shape_23,p:{x:28.7,y:-161.6}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_20,p:{x:28.6,y:-146.5}},{t:this.shape_19,p:{x:28.6,y:-146.5}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_16,p:{x:33.7,y:-122.7}},{t:this.shape_15,p:{x:19.4,y:-101.6}},{t:this.shape_14,p:{x:19.4,y:-101.6}},{t:this.shape_13,p:{x:15.9,y:-95.3}},{t:this.shape_12,p:{x:15.9,y:-95.3}},{t:this.shape_132},{t:this.shape_131,p:{x:30.8,y:-143.9}},{t:this.shape_9,p:{x:31.7,y:-143.6}},{t:this.shape_130},{t:this.shape_129,p:{x:22.2,y:-143.8}},{t:this.shape_6,p:{x:31.6,y:-144.9}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_3,p:{x:-42.8,y:-147.5}}]},2).to({state:[{t:this.shape_61,p:{x:29.5,y:101.7}},{t:this.shape_60,p:{x:29.5,y:101.7}},{t:this.shape_59,p:{x:20.3,y:94.1}},{t:this.shape_58,p:{x:20.3,y:94.1}},{t:this.shape_57,p:{x:40.3,y:94.1}},{t:this.shape_56,p:{x:40.3,y:94.1}},{t:this.shape_55,p:{x:16.3,y:50.6}},{t:this.shape_199,p:{x:16.3,y:50.6}},{t:this.shape_226},{t:this.shape_225},{t:this.shape_51,p:{x:-6.2,y:109.6}},{t:this.shape_50,p:{x:-12.7,y:102.9}},{t:this.shape_49,p:{x:-12.7,y:102.9}},{t:this.shape_48,p:{x:4.7,y:103.4}},{t:this.shape_47,p:{x:4.7,y:103.4}},{t:this.shape_46,p:{x:-9.4,y:54.8}},{t:this.shape_45,p:{x:-9.4,y:54.8}},{t:this.shape_224},{t:this.shape_223,p:{x:-14.5}},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220,p:{y:-31.8}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_30,p:{x:4.6,y:-122}},{t:this.shape_29,p:{x:4.6,y:-122}},{t:this.shape_28,p:{x:-16.3,y:-119.5}},{t:this.shape_27,p:{x:-26,y:-111.8}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_24,p:{x:33.5,y:-160.1}},{t:this.shape_23,p:{x:33.5,y:-160.1}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_20,p:{x:33.3,y:-145}},{t:this.shape_19,p:{x:33.3,y:-145}},{t:this.shape_162,p:{x:35.3,y:-122.9}},{t:this.shape_17,p:{x:35.3,y:-122.9}},{t:this.shape_16,p:{x:38.5,y:-121.2}},{t:this.shape_15,p:{x:24.2,y:-100.2}},{t:this.shape_14,p:{x:24.2,y:-100.2}},{t:this.shape_13,p:{x:20.7,y:-93.9}},{t:this.shape_12,p:{x:20.7,y:-93.9}},{t:this.shape_204},{t:this.shape_131,p:{x:35.5,y:-142.5}},{t:this.shape_203,p:{x:36.4}},{t:this.shape_161,p:{x:26.9,y:-140.8}},{t:this.shape_129,p:{x:27,y:-142.4}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_66,p:{x:-7.5,y:-158}},{t:this.shape_200}]},2).to({state:[{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_61,p:{x:29.5,y:101.7}},{t:this.shape_60,p:{x:29.5,y:101.7}},{t:this.shape_59,p:{x:20.3,y:94.1}},{t:this.shape_58,p:{x:20.3,y:94.1}},{t:this.shape_57,p:{x:40.3,y:94.1}},{t:this.shape_56,p:{x:40.3,y:94.1}},{t:this.shape_55,p:{x:16.2,y:50.6}},{t:this.shape_54,p:{x:16.2,y:50.6}},{t:this.shape_226},{t:this.shape_225},{t:this.shape_51,p:{x:-6.2,y:109.6}},{t:this.shape_50,p:{x:-12.7,y:102.9}},{t:this.shape_49,p:{x:-12.7,y:102.9}},{t:this.shape_48,p:{x:4.7,y:103.4}},{t:this.shape_47,p:{x:4.7,y:103.4}},{t:this.shape_46,p:{x:-9.4,y:54.8}},{t:this.shape_45,p:{x:-9.4,y:54.8}},{t:this.shape_224},{t:this.shape_223,p:{x:-14.5}},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220,p:{y:-31.8}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_167,p:{x:9.1,y:-73.5}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_30,p:{x:4.6,y:-122}},{t:this.shape_29,p:{x:4.6,y:-122}},{t:this.shape_28,p:{x:-16.4,y:-119.5}},{t:this.shape_27,p:{x:-26,y:-111.8}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_24,p:{x:33.5,y:-160.1}},{t:this.shape_23,p:{x:33.5,y:-160.1}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_20,p:{x:33.3,y:-145}},{t:this.shape_19,p:{x:33.3,y:-145}},{t:this.shape_162,p:{x:35.3,y:-122.9}},{t:this.shape_17,p:{x:35.3,y:-122.9}},{t:this.shape_16,p:{x:38.4,y:-121.2}},{t:this.shape_15,p:{x:24.2,y:-100.2}},{t:this.shape_14,p:{x:24.2,y:-100.2}},{t:this.shape_13,p:{x:20.7,y:-93.9}},{t:this.shape_12,p:{x:20.7,y:-93.9}},{t:this.shape_11,p:{x:26,y:-140.9}},{t:this.shape_131,p:{x:35.5,y:-142.5}},{t:this.shape_203,p:{x:36.4}},{t:this.shape_161,p:{x:26.9,y:-140.8}},{t:this.shape_129,p:{x:27,y:-142.4}},{t:this.shape_159,p:{x:36.3,y:-143.4}},{t:this.shape_232,p:{y:-158}},{t:this.shape_231,p:{y:-158}},{t:this.shape_156,p:{x:-38.1,y:-146.1}},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_88,p:{x:6.1,y:-24.1}},{t:this.shape_227}]},2).to({state:[{t:this.shape_61,p:{x:29.5,y:101.7}},{t:this.shape_60,p:{x:29.5,y:101.7}},{t:this.shape_59,p:{x:20.3,y:94.1}},{t:this.shape_58,p:{x:20.3,y:94.1}},{t:this.shape_57,p:{x:40.3,y:94}},{t:this.shape_56,p:{x:40.3,y:94}},{t:this.shape_55,p:{x:16.3,y:50.6}},{t:this.shape_199,p:{x:16.3,y:50.6}},{t:this.shape_260},{t:this.shape_225},{t:this.shape_51,p:{x:-6.2,y:109.6}},{t:this.shape_50,p:{x:-12.6,y:102.9}},{t:this.shape_49,p:{x:-12.6,y:102.9}},{t:this.shape_48,p:{x:4.7,y:103.3}},{t:this.shape_47,p:{x:4.7,y:103.3}},{t:this.shape_46,p:{x:-9.4,y:54.8}},{t:this.shape_45,p:{x:-9.4,y:54.8}},{t:this.shape_224},{t:this.shape_223,p:{x:-14.4}},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220,p:{y:-31.9}},{t:this.shape_259},{t:this.shape_218},{t:this.shape_217},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_30,p:{x:4.6,y:-122}},{t:this.shape_29,p:{x:4.6,y:-122}},{t:this.shape_28,p:{x:-16.3,y:-119.5}},{t:this.shape_27,p:{x:-26,y:-111.9}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_24,p:{x:33.5,y:-160.1}},{t:this.shape_23,p:{x:33.5,y:-160.1}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_20,p:{x:33.4,y:-145.1}},{t:this.shape_19,p:{x:33.4,y:-145.1}},{t:this.shape_162,p:{x:35.3,y:-122.9}},{t:this.shape_17,p:{x:35.3,y:-122.9}},{t:this.shape_16,p:{x:38.5,y:-121.3}},{t:this.shape_15,p:{x:24.2,y:-100.2}},{t:this.shape_14,p:{x:24.2,y:-100.2}},{t:this.shape_13,p:{x:20.7,y:-93.9}},{t:this.shape_12,p:{x:20.7,y:-93.9}},{t:this.shape_252},{t:this.shape_71,p:{x:35.5,y:-142.5}},{t:this.shape_203,p:{x:36.5}},{t:this.shape_161,p:{x:26.9,y:-140.8}},{t:this.shape_129,p:{x:27,y:-142.4}},{t:this.shape_202},{t:this.shape_232,p:{y:-158.1}},{t:this.shape_231,p:{y:-158.1}},{t:this.shape_200},{t:this.shape_89,p:{x:6.1,y:-24.1}},{t:this.shape_88,p:{x:6.1,y:-24.1}},{t:this.shape_227},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245}]},2).to({state:[{t:this.shape_329,p:{x:53.8}},{t:this.shape_328,p:{x:53.8}},{t:this.shape_327,p:{x:53.2}},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319,p:{x:-9.8}},{t:this.shape_318,p:{x:-9.8}},{t:this.shape_317,p:{x:-7.5}},{t:this.shape_316,p:{x:13.9}},{t:this.shape_315,p:{x:13.9}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310,p:{x:14.8}},{t:this.shape_309,p:{x:14.8}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300,p:{x:14.8}},{t:this.shape_299,p:{x:14.8}},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296,p:{x:15.9}},{t:this.shape_295,p:{y:-142.9}},{t:this.shape_294,p:{y:-110.4}},{t:this.shape_293,p:{x:-30.8,y:-145}},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290,p:{x:-23.8}},{t:this.shape_289,p:{x:30.9,y:-116.8}},{t:this.shape_288,p:{x:30.9,y:-116.8}},{t:this.shape_287,p:{x:33.3,y:-116.8}},{t:this.shape_286,p:{y:-117.4}},{t:this.shape_285,p:{y:-117.4}},{t:this.shape_284,p:{y:-117.4}},{t:this.shape_283,p:{y:-117.5}},{t:this.shape_282,p:{x:30,y:-117.1}},{t:this.shape_281,p:{x:30.9,y:-134.6}},{t:this.shape_280,p:{x:30.9,y:-134.6}},{t:this.shape_279,p:{y:-136.5}},{t:this.shape_278,p:{y:-136.5}},{t:this.shape_277,p:{y:-106.6}},{t:this.shape_276,p:{x:30.7,y:-106.2}},{t:this.shape_275,p:{x:16.4}},{t:this.shape_274,p:{y:-104.3}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269,p:{x:13.3}},{t:this.shape_268,p:{x:13.3}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264,p:{x:-17.8,y:-10}},{t:this.shape_263},{t:this.shape_262,p:{x:-3.4,y:15.5}},{t:this.shape_261}]},2).to({state:[{t:this.shape_329,p:{x:53.8}},{t:this.shape_328,p:{x:53.8}},{t:this.shape_327,p:{x:53.2}},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319,p:{x:-9.8}},{t:this.shape_318,p:{x:-9.8}},{t:this.shape_317,p:{x:-7.5}},{t:this.shape_316,p:{x:13.9}},{t:this.shape_315,p:{x:13.9}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310,p:{x:14.8}},{t:this.shape_309,p:{x:14.8}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_336,p:{x:-28.6}},{t:this.shape_335,p:{x:-28.6}},{t:this.shape_334,p:{x:-32.3}},{t:this.shape_301},{t:this.shape_300,p:{x:14.8}},{t:this.shape_299,p:{x:14.8}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296,p:{x:15.9}},{t:this.shape_295,p:{y:-142.9}},{t:this.shape_294,p:{y:-110.4}},{t:this.shape_293,p:{x:-30.8,y:-145}},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290,p:{x:-23.8}},{t:this.shape_289,p:{x:30.9,y:-116.8}},{t:this.shape_288,p:{x:30.9,y:-116.8}},{t:this.shape_287,p:{x:33.3,y:-116.8}},{t:this.shape_286,p:{y:-117.4}},{t:this.shape_285,p:{y:-117.4}},{t:this.shape_284,p:{y:-117.4}},{t:this.shape_283,p:{y:-117.5}},{t:this.shape_282,p:{x:30,y:-117.1}},{t:this.shape_281,p:{x:30.9,y:-134.6}},{t:this.shape_280,p:{x:30.9,y:-134.6}},{t:this.shape_279,p:{y:-136.5}},{t:this.shape_278,p:{y:-136.5}},{t:this.shape_277,p:{y:-106.6}},{t:this.shape_276,p:{x:30.7,y:-106.2}},{t:this.shape_275,p:{x:16.4}},{t:this.shape_274,p:{y:-104.3}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269,p:{x:13.3}},{t:this.shape_268,p:{x:13.3}},{t:this.shape_267},{t:this.shape_266}]},3).to({state:[{t:this.shape_329,p:{x:53.7}},{t:this.shape_328,p:{x:53.7}},{t:this.shape_327,p:{x:53.1}},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319,p:{x:-9.9}},{t:this.shape_318,p:{x:-9.9}},{t:this.shape_317,p:{x:-7.6}},{t:this.shape_316,p:{x:13.8}},{t:this.shape_315,p:{x:13.8}},{t:this.shape_351},{t:this.shape_313},{t:this.shape_312},{t:this.shape_350},{t:this.shape_310,p:{x:14.7}},{t:this.shape_309,p:{x:14.7}},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_304},{t:this.shape_345},{t:this.shape_344},{t:this.shape_336,p:{x:-28.7}},{t:this.shape_335,p:{x:-28.7}},{t:this.shape_334,p:{x:-32.4}},{t:this.shape_301},{t:this.shape_300,p:{x:14.7}},{t:this.shape_299,p:{x:14.7}},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296,p:{x:15.8}},{t:this.shape_340},{t:this.shape_294,p:{y:-110.4}},{t:this.shape_293,p:{x:-30.9,y:-145}},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290,p:{x:-23.9}},{t:this.shape_289,p:{x:30.8,y:-116.8}},{t:this.shape_288,p:{x:30.8,y:-116.8}},{t:this.shape_287,p:{x:33.3,y:-116.8}},{t:this.shape_286,p:{y:-117.4}},{t:this.shape_285,p:{y:-117.4}},{t:this.shape_284,p:{y:-117.4}},{t:this.shape_283,p:{y:-117.5}},{t:this.shape_282,p:{x:30,y:-117.1}},{t:this.shape_281,p:{x:30.8,y:-134.6}},{t:this.shape_280,p:{x:30.8,y:-134.6}},{t:this.shape_279,p:{y:-136.5}},{t:this.shape_278,p:{y:-136.5}},{t:this.shape_339},{t:this.shape_276,p:{x:30.6,y:-106.2}},{t:this.shape_275,p:{x:16.3}},{t:this.shape_274,p:{y:-104.3}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_338},{t:this.shape_269,p:{x:13.2}},{t:this.shape_268,p:{x:13.2}},{t:this.shape_267},{t:this.shape_337,p:{x:59.6,y:-106}}]},3).to({state:[{t:this.shape_401,p:{x:40.5,y:105.5}},{t:this.shape_400,p:{x:40.5,y:105.5}},{t:this.shape_399,p:{x:40.6,y:96.5}},{t:this.shape_398,p:{x:40.6,y:96.5}},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395,p:{y:105.8}},{t:this.shape_394,p:{y:95.7}},{t:this.shape_393,p:{y:95.7}},{t:this.shape_392,p:{y:94.6}},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382,p:{x:38.5,y:-67.3}},{t:this.shape_381},{t:this.shape_380,p:{y:57}},{t:this.shape_379,p:{x:32.6,y:58.6}},{t:this.shape_378},{t:this.shape_377,p:{x:48.1,y:-52.4}},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_262,p:{x:-4,y:16.7}},{t:this.shape_372},{t:this.shape_371,p:{y:-71.6}},{t:this.shape_370,p:{y:-71.6}},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365,p:{y:12.8}},{t:this.shape_364,p:{y:21.6}},{t:this.shape_363},{t:this.shape_362,p:{x:38.3,y:12.2}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_295,p:{y:-142.9}},{t:this.shape_294,p:{y:-110.4}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_289,p:{x:30.9,y:-116.8}},{t:this.shape_288,p:{x:30.9,y:-116.8}},{t:this.shape_287,p:{x:33.3,y:-116.8}},{t:this.shape_286,p:{y:-117.4}},{t:this.shape_285,p:{y:-117.4}},{t:this.shape_284,p:{y:-117.4}},{t:this.shape_283,p:{y:-117.5}},{t:this.shape_282,p:{x:30,y:-117.1}},{t:this.shape_281,p:{x:30.9,y:-134.6}},{t:this.shape_280,p:{x:30.9,y:-134.6}},{t:this.shape_279,p:{y:-136.5}},{t:this.shape_278,p:{y:-136.5}},{t:this.shape_277,p:{y:-106.6}},{t:this.shape_276,p:{x:30.7,y:-106.2}},{t:this.shape_275,p:{x:16.4}},{t:this.shape_274,p:{y:-104.3}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_267},{t:this.shape_266},{t:this.shape_352,p:{y:-86.5}}]},38).to({state:[{t:this.shape_401,p:{x:40.6,y:106.6}},{t:this.shape_400,p:{x:40.6,y:106.6}},{t:this.shape_399,p:{x:40.7,y:97.7}},{t:this.shape_398,p:{x:40.7,y:97.7}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_395,p:{y:107}},{t:this.shape_394,p:{y:96.9}},{t:this.shape_393,p:{y:96.9}},{t:this.shape_392,p:{y:95.8}},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_382,p:{x:38.6,y:-66.2}},{t:this.shape_461},{t:this.shape_380,p:{y:58.2}},{t:this.shape_379,p:{x:32.7,y:59.7}},{t:this.shape_460},{t:this.shape_377,p:{x:48.2,y:-51.3}},{t:this.shape_459},{t:this.shape_458},{t:this.shape_264,p:{x:-18.3,y:-7.7}},{t:this.shape_457},{t:this.shape_262,p:{x:-4,y:17.9}},{t:this.shape_456},{t:this.shape_371,p:{y:-70.4}},{t:this.shape_370,p:{y:-70.4}},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_365,p:{y:14}},{t:this.shape_364,p:{y:22.7}},{t:this.shape_451},{t:this.shape_362,p:{x:38.4,y:13.3}},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_295,p:{y:-141.7}},{t:this.shape_294,p:{y:-109.2}},{t:this.shape_293,p:{x:-30.8,y:-143.8}},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_289,p:{x:30.9,y:-115.7}},{t:this.shape_288,p:{x:30.9,y:-115.7}},{t:this.shape_287,p:{x:33.4,y:-115.6}},{t:this.shape_286,p:{y:-116.3}},{t:this.shape_285,p:{y:-116.3}},{t:this.shape_284,p:{y:-116.3}},{t:this.shape_283,p:{y:-116.4}},{t:this.shape_282,p:{x:30.1,y:-116}},{t:this.shape_281,p:{x:30.9,y:-133.4}},{t:this.shape_280,p:{x:30.9,y:-133.4}},{t:this.shape_279,p:{y:-135.4}},{t:this.shape_278,p:{y:-135.4}},{t:this.shape_277,p:{y:-105.5}},{t:this.shape_276,p:{x:30.7,y:-105.1}},{t:this.shape_444},{t:this.shape_274,p:{y:-103.1}},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_337,p:{x:59.7,y:-104.8}},{t:this.shape_352,p:{y:-85.3}},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402}]},17).wait(38));

	// Cart
	this.instance = new lib.cart("synched",0);
	this.instance.setTransform(133,30.4,1.588,1.588,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-211.2,251.2,323.4);


(lib.BG = function() {
	this.initialize();

	// Shelves-bottom
	this.shelfBottom_4 = new lib.shelfbottom();
	this.shelfBottom_4.setTransform(298.8,316.4,1,1,0,0,0,298.7,0);

	this.shelfBottom_3 = new lib.shelfbottom();
	this.shelfBottom_3.setTransform(300.1,250.2,1,1,0,0,0,298.7,0);

	this.shelfBottom_2 = new lib.shelfbottom();
	this.shelfBottom_2.setTransform(300.1,181.3,1,1,0,0,0,298.7,0);

	this.shelfBottom_1 = new lib.shelfbottom();
	this.shelfBottom_1.setTransform(300.8,105.2,1,1,0,0,0,298.7,0);

	// Shelves
	this.shelf_4 = new lib.shelf_4();
	this.shelf_4.setTransform(298.8,310.6,1,1,0,0,0,298.8,26.1);

	this.shelf_3 = new lib.shelf_3();
	this.shelf_3.setTransform(298.8,241.9,1,1,0,0,0,298.8,27.6);

	this.shelf_2 = new lib.shelf_2();
	this.shelf_2.setTransform(298.8,158,1,1,0,0,0,298.8,40.6);

	this.shelf_1 = new lib.shelf_1();
	this.shelf_1.setTransform(298.8,80.6,1,1,0,0,0,298.8,41.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(602.3,90.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1.setTransform(602.3,79.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(602.3,69.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_3.setTransform(602.3,58.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_4.setTransform(602.3,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_5.setTransform(594.6,90.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_6.setTransform(594.6,79.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_7.setTransform(594.6,69.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_8.setTransform(594.6,58.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_9.setTransform(594.6,47.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_10.setTransform(587,90.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_11.setTransform(587,79.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_12.setTransform(587,69.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_13.setTransform(587,58.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_14.setTransform(587,47.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_15.setTransform(579.4,90.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_16.setTransform(579.4,79.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_17.setTransform(579.4,69.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_18.setTransform(579.4,58.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_19.setTransform(579.4,47.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_20.setTransform(571.8,90.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_21.setTransform(571.8,79.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_22.setTransform(571.8,69.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_23.setTransform(571.8,58.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_24.setTransform(571.8,47.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_25.setTransform(564.2,90.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_26.setTransform(564.2,79.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_27.setTransform(564.2,69.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_28.setTransform(564.2,58.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_29.setTransform(564.2,47.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_30.setTransform(556.6,90.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_31.setTransform(556.6,79.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_32.setTransform(556.6,69.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_33.setTransform(556.6,58.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_34.setTransform(556.6,47.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_35.setTransform(547.9,90.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_36.setTransform(547.9,79.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_37.setTransform(547.9,69.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_38.setTransform(547.9,58.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_39.setTransform(547.9,47.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_40.setTransform(540.7,90.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_41.setTransform(540.7,79.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_42.setTransform(540.7,69.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_43.setTransform(540.7,58.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_44.setTransform(540.7,47.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_45.setTransform(533.1,90.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_46.setTransform(533.1,79.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_47.setTransform(533.1,69.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_48.setTransform(533.1,58.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_49.setTransform(533.1,47.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_50.setTransform(525.5,90.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_51.setTransform(525.5,79.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_52.setTransform(525.5,69.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_53.setTransform(525.5,58.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_54.setTransform(525.5,47.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_55.setTransform(517.9,90.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_56.setTransform(517.9,79.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_57.setTransform(517.9,69.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_58.setTransform(517.9,58.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_59.setTransform(517.9,47.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_60.setTransform(510.3,90.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_61.setTransform(510.3,79.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_62.setTransform(510.3,69.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_63.setTransform(510.3,58.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_64.setTransform(510.3,47.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_65.setTransform(502.6,90.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_66.setTransform(502.6,79.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_67.setTransform(502.6,69.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_68.setTransform(502.6,58.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_69.setTransform(502.6,47.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_70.setTransform(495,90.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_71.setTransform(495,79.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_72.setTransform(495,69.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_73.setTransform(495,58.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_74.setTransform(495,47.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_75.setTransform(486.3,90.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_76.setTransform(486.3,79.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_77.setTransform(486.3,69.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_78.setTransform(486.3,58.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_79.setTransform(486.3,47.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_80.setTransform(478.7,90.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_81.setTransform(478.7,79.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_82.setTransform(478.7,69.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_83.setTransform(478.7,58.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_84.setTransform(478.7,47.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_85.setTransform(471.1,90.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_86.setTransform(471.1,79.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_87.setTransform(471.1,69.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_88.setTransform(471.1,58.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_89.setTransform(471.1,47.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_90.setTransform(463.5,90.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_91.setTransform(463.5,79.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_92.setTransform(463.5,69.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_93.setTransform(463.5,58.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_94.setTransform(463.5,47.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_95.setTransform(455.9,90.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_96.setTransform(455.9,79.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_97.setTransform(455.9,69.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_98.setTransform(455.9,58.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_99.setTransform(455.9,47.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_100.setTransform(448.3,90.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_101.setTransform(448.3,79.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_102.setTransform(448.3,69.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_103.setTransform(448.3,58.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_104.setTransform(448.3,47.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_105.setTransform(440.6,90.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_106.setTransform(440.6,79.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_107.setTransform(440.6,69.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_108.setTransform(440.6,58.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_109.setTransform(440.6,47.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_110.setTransform(433,90.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_111.setTransform(433,79.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_112.setTransform(433,69.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_113.setTransform(433,58.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_114.setTransform(433,47.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_115.setTransform(425.4,90.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_116.setTransform(425.4,79.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_117.setTransform(425.4,69.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_118.setTransform(425.4,58.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_119.setTransform(425.4,47.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_120.setTransform(417.8,90.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_121.setTransform(417.8,79.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_122.setTransform(417.8,69.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_123.setTransform(417.8,58.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_124.setTransform(417.8,47.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_125.setTransform(410.2,90.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_126.setTransform(410.2,79.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_127.setTransform(410.2,69.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_128.setTransform(410.2,58.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_129.setTransform(410.2,47.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_130.setTransform(402.6,90.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_131.setTransform(402.6,79.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_132.setTransform(402.6,69.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_133.setTransform(402.6,58.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_134.setTransform(402.6,47.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_135.setTransform(395,90.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_136.setTransform(395,79.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_137.setTransform(395,69.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_138.setTransform(395,58.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_139.setTransform(395,47.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_140.setTransform(387.3,90.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_141.setTransform(387.3,79.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_142.setTransform(387.3,69.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_143.setTransform(387.3,58.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_144.setTransform(387.3,47.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_145.setTransform(379.7,90.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_146.setTransform(379.7,79.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_147.setTransform(379.7,69.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_148.setTransform(379.7,58.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_149.setTransform(379.7,47.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_150.setTransform(372.1,90.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_151.setTransform(372.1,79.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_152.setTransform(372.1,69.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_153.setTransform(372.1,58.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_154.setTransform(372.1,47.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_155.setTransform(364.5,90.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_156.setTransform(364.5,79.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_157.setTransform(364.5,69.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_158.setTransform(364.5,58.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_159.setTransform(364.5,47.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_160.setTransform(356.9,90.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_161.setTransform(356.9,79.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_162.setTransform(356.9,69.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_163.setTransform(356.9,58.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_164.setTransform(356.9,47.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_165.setTransform(349.3,90.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_166.setTransform(349.3,79.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_167.setTransform(349.3,69.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_168.setTransform(349.3,58.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_169.setTransform(349.3,47.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_170.setTransform(341.7,90.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_171.setTransform(341.7,79.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_172.setTransform(341.7,69.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_173.setTransform(341.7,58.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_174.setTransform(341.7,47.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_175.setTransform(334.1,90.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_176.setTransform(334.1,79.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_177.setTransform(334.1,69.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_178.setTransform(334.1,58.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_179.setTransform(334.1,47.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_180.setTransform(326.4,90.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_181.setTransform(326.4,79.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_182.setTransform(326.4,69.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_183.setTransform(326.4,58.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_184.setTransform(326.4,47.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_185.setTransform(318.9,90.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_186.setTransform(318.9,79.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_187.setTransform(318.9,69.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_188.setTransform(318.9,58.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_189.setTransform(318.9,47.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_190.setTransform(311.3,90.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_191.setTransform(311.3,79.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_192.setTransform(311.3,69.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_193.setTransform(311.3,58.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_194.setTransform(311.3,47.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_195.setTransform(303.6,90.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_196.setTransform(303.6,79.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_197.setTransform(303.6,69.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_198.setTransform(303.6,58.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_199.setTransform(303.6,47.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_200.setTransform(296,90.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_201.setTransform(296,79.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_202.setTransform(296,69.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_203.setTransform(296,58.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_204.setTransform(296,47.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_205.setTransform(288.4,90.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_206.setTransform(288.4,79.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_207.setTransform(288.4,69.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_208.setTransform(288.4,58.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_209.setTransform(288.4,47.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_210.setTransform(280.8,90.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_211.setTransform(280.8,79.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_212.setTransform(280.8,69.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_213.setTransform(280.8,58.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_214.setTransform(280.8,47.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_215.setTransform(273.2,90.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_216.setTransform(273.2,79.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_217.setTransform(273.2,69.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_218.setTransform(273.2,58.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_219.setTransform(273.2,47.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_220.setTransform(265.6,90.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_221.setTransform(265.6,79.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_222.setTransform(265.6,69.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_223.setTransform(265.6,58.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_224.setTransform(265.6,47.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_225.setTransform(258,90.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_226.setTransform(258,79.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_227.setTransform(258,69.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_228.setTransform(258,58.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_229.setTransform(258,47.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_230.setTransform(250.3,90.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_231.setTransform(250.3,79.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_232.setTransform(250.3,69.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_233.setTransform(250.3,58.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_234.setTransform(250.3,47.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_235.setTransform(242.7,90.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_236.setTransform(242.7,79.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_237.setTransform(242.7,69.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_238.setTransform(242.7,58.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_239.setTransform(242.7,47.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_240.setTransform(235.1,90.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_241.setTransform(235.1,79.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_242.setTransform(235.1,69.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_243.setTransform(235.1,58.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_244.setTransform(235.1,47.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_245.setTransform(227.5,90.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_246.setTransform(227.5,79.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_247.setTransform(227.5,69.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_248.setTransform(227.5,58.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_249.setTransform(227.5,47.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_250.setTransform(219.9,90.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_251.setTransform(219.9,79.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_252.setTransform(219.9,69.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_253.setTransform(219.9,58.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_254.setTransform(219.9,47.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_255.setTransform(212.3,90.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_256.setTransform(212.3,79.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_257.setTransform(212.3,69.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_258.setTransform(212.3,58.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_259.setTransform(212.3,47.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_260.setTransform(204.7,90.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_261.setTransform(204.7,79.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_262.setTransform(204.7,69.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_263.setTransform(204.7,58.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_264.setTransform(204.7,47.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_265.setTransform(197,90.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_266.setTransform(197,79.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_267.setTransform(197,69.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_268.setTransform(197,58.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_269.setTransform(197,47.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_270.setTransform(189.4,90.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_271.setTransform(189.4,79.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_272.setTransform(189.4,69.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_273.setTransform(189.4,58.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_274.setTransform(189.4,47.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_275.setTransform(181.8,90.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_276.setTransform(181.8,79.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_277.setTransform(181.8,69.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_278.setTransform(181.8,58.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_279.setTransform(181.8,47.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_280.setTransform(174.2,90.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_281.setTransform(174.2,79.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_282.setTransform(174.2,69.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_283.setTransform(174.2,58.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_284.setTransform(174.2,47.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_285.setTransform(166.6,90.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_286.setTransform(166.6,79.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_287.setTransform(166.6,69.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_288.setTransform(166.6,58.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_289.setTransform(166.6,47.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_290.setTransform(159,90.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_291.setTransform(159,79.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_292.setTransform(159,69.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_293.setTransform(159,58.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_294.setTransform(159,47.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_295.setTransform(151.4,90.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_296.setTransform(151.4,79.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_297.setTransform(151.4,69.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_298.setTransform(151.4,58.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_299.setTransform(151.4,47.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_300.setTransform(143.7,90.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_301.setTransform(143.7,79.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_302.setTransform(143.7,69.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_303.setTransform(143.7,58.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_304.setTransform(143.7,47.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_305.setTransform(136.1,90.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_306.setTransform(136.1,79.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_307.setTransform(136.1,69.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_308.setTransform(136.1,58.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_309.setTransform(136.1,47.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_310.setTransform(128.5,90.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_311.setTransform(128.5,79.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_312.setTransform(128.5,69.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_313.setTransform(128.5,58.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_314.setTransform(128.5,47.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_315.setTransform(120.9,90.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_316.setTransform(120.9,79.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_317.setTransform(120.9,69.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_318.setTransform(120.9,58.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_319.setTransform(120.9,47.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_320.setTransform(113.3,90.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_321.setTransform(113.3,79.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_322.setTransform(113.3,69.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_323.setTransform(113.3,58.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_324.setTransform(113.3,47.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_325.setTransform(105.7,90.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_326.setTransform(105.7,79.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_327.setTransform(105.7,69.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_328.setTransform(105.7,58.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_329.setTransform(105.7,47.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_330.setTransform(98.1,90.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_331.setTransform(98.1,79.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_332.setTransform(98.1,69.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_333.setTransform(98.1,58.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_334.setTransform(98.1,47.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_335.setTransform(90.4,90.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_336.setTransform(90.4,79.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_337.setTransform(90.4,69.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_338.setTransform(90.4,58.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_339.setTransform(90.4,47.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_340.setTransform(82.8,90.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_341.setTransform(82.8,79.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_342.setTransform(82.8,69.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_343.setTransform(82.8,58.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_344.setTransform(82.8,47.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_345.setTransform(75.2,90.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_346.setTransform(75.2,79.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_347.setTransform(75.2,69.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_348.setTransform(75.2,58.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_349.setTransform(75.2,47.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_350.setTransform(67.6,90.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_351.setTransform(67.6,79.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_352.setTransform(67.6,69.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_353.setTransform(67.6,58.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_354.setTransform(67.6,47.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_355.setTransform(60,90.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_356.setTransform(60,79.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_357.setTransform(60,69.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_358.setTransform(60,58.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_359.setTransform(60,47.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_360.setTransform(52.4,90.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_361.setTransform(52.4,79.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_362.setTransform(52.4,69.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_363.setTransform(52.4,58.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_364.setTransform(52.4,47.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_365.setTransform(44.8,90.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_366.setTransform(44.8,79.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_367.setTransform(44.8,69.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_368.setTransform(44.8,58.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_369.setTransform(44.8,47.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_370.setTransform(37.1,90.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_371.setTransform(37.1,79.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_372.setTransform(37.1,69.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_373.setTransform(37.1,58.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_374.setTransform(37.1,47.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_375.setTransform(29.5,90.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_376.setTransform(29.5,79.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_377.setTransform(29.5,69.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_378.setTransform(29.5,58.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_379.setTransform(29.5,47.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_380.setTransform(21.9,90.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_381.setTransform(21.9,79.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_382.setTransform(21.9,69.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_383.setTransform(21.9,58.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_384.setTransform(21.9,47.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_385.setTransform(14.3,90.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_386.setTransform(14.3,79.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_387.setTransform(14.3,69.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_388.setTransform(14.3,58.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_389.setTransform(14.3,47.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_390.setTransform(6.7,90.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_391.setTransform(6.7,79.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_392.setTransform(6.7,69.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_393.setTransform(6.7,58.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_394.setTransform(6.7,47.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_395.setTransform(602.3,178.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_396.setTransform(602.3,167.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_397.setTransform(602.3,157.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_398.setTransform(602.3,146.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_399.setTransform(602.3,136);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_400.setTransform(594.6,178.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_401.setTransform(594.6,167.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_402.setTransform(594.6,157.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_403.setTransform(594.6,146.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_404.setTransform(594.6,136);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_405.setTransform(587,178.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_406.setTransform(587,167.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_407.setTransform(587,157.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_408.setTransform(587,146.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_409.setTransform(587,136);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_410.setTransform(579.4,178.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_411.setTransform(579.4,167.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_412.setTransform(579.4,157.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_413.setTransform(579.4,146.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_414.setTransform(579.4,136);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_415.setTransform(571.8,178.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_416.setTransform(571.8,167.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_417.setTransform(571.8,157.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_418.setTransform(571.8,146.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_419.setTransform(571.8,136);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_420.setTransform(564.2,178.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_421.setTransform(564.2,167.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_422.setTransform(564.2,157.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_423.setTransform(564.2,146.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_424.setTransform(564.2,136);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_425.setTransform(556.6,178.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_426.setTransform(556.6,167.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_427.setTransform(556.6,157.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_428.setTransform(556.6,146.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_429.setTransform(556.6,136);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_430.setTransform(547.9,178.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_431.setTransform(547.9,167.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_432.setTransform(547.9,157.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_433.setTransform(547.9,146.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_434.setTransform(547.9,136);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_435.setTransform(540.7,178.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_436.setTransform(540.7,167.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_437.setTransform(540.7,157.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_438.setTransform(540.7,146.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_439.setTransform(540.7,136);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_440.setTransform(533.1,178.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_441.setTransform(533.1,167.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_442.setTransform(533.1,157.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_443.setTransform(533.1,146.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_444.setTransform(533.1,136);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_445.setTransform(525.5,178.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_446.setTransform(525.5,167.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_447.setTransform(525.5,157.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_448.setTransform(525.5,146.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_449.setTransform(525.5,136);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_450.setTransform(517.9,178.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_451.setTransform(517.9,167.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_452.setTransform(517.9,157.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_453.setTransform(517.9,146.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_454.setTransform(517.9,136);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_455.setTransform(510.3,178.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_456.setTransform(510.3,167.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_457.setTransform(510.3,157.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_458.setTransform(510.3,146.6);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_459.setTransform(510.3,136);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_460.setTransform(502.6,178.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_461.setTransform(502.6,167.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_462.setTransform(502.6,157.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_463.setTransform(502.6,146.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_464.setTransform(502.6,136);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_465.setTransform(495,178.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_466.setTransform(495,167.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_467.setTransform(495,157.2);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_468.setTransform(495,146.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_469.setTransform(495,136);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_470.setTransform(486.3,178.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_471.setTransform(486.3,167.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_472.setTransform(486.3,157.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_473.setTransform(486.3,146.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_474.setTransform(486.3,136);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_475.setTransform(478.7,178.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_476.setTransform(478.7,167.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_477.setTransform(478.7,157.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_478.setTransform(478.7,146.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_479.setTransform(478.7,136);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_480.setTransform(471.1,178.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_481.setTransform(471.1,167.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_482.setTransform(471.1,157.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_483.setTransform(471.1,146.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_484.setTransform(471.1,136);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_485.setTransform(463.5,178.5);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_486.setTransform(463.5,167.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_487.setTransform(463.5,157.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_488.setTransform(463.5,146.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_489.setTransform(463.5,136);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_490.setTransform(455.9,178.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_491.setTransform(455.9,167.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_492.setTransform(455.9,157.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_493.setTransform(455.9,146.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_494.setTransform(455.9,136);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_495.setTransform(448.3,178.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_496.setTransform(448.3,167.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_497.setTransform(448.3,157.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_498.setTransform(448.3,146.6);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_499.setTransform(448.3,136);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_500.setTransform(440.6,178.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_501.setTransform(440.6,167.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_502.setTransform(440.6,157.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_503.setTransform(440.6,146.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_504.setTransform(440.6,136);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_505.setTransform(433,178.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_506.setTransform(433,167.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_507.setTransform(433,157.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_508.setTransform(433,146.6);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_509.setTransform(433,136);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_510.setTransform(425.4,178.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_511.setTransform(425.4,167.9);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_512.setTransform(425.4,157.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_513.setTransform(425.4,146.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_514.setTransform(425.4,136);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_515.setTransform(417.8,178.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_516.setTransform(417.8,167.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_517.setTransform(417.8,157.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_518.setTransform(417.8,146.6);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_519.setTransform(417.8,136);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_520.setTransform(410.2,178.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_521.setTransform(410.2,167.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_522.setTransform(410.2,157.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_523.setTransform(410.2,146.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_524.setTransform(410.2,136);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_525.setTransform(402.6,178.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_526.setTransform(402.6,167.9);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_527.setTransform(402.6,157.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_528.setTransform(402.6,146.6);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_529.setTransform(402.6,136);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_530.setTransform(395,178.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_531.setTransform(395,167.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_532.setTransform(395,157.2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_533.setTransform(395,146.6);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_534.setTransform(395,136);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_535.setTransform(387.3,178.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_536.setTransform(387.3,167.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_537.setTransform(387.3,157.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_538.setTransform(387.3,146.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_539.setTransform(387.3,136);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_540.setTransform(379.7,178.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_541.setTransform(379.7,167.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_542.setTransform(379.7,157.2);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_543.setTransform(379.7,146.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_544.setTransform(379.7,136);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_545.setTransform(372.1,178.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_546.setTransform(372.1,167.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_547.setTransform(372.1,157.2);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_548.setTransform(372.1,146.6);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_549.setTransform(372.1,136);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_550.setTransform(364.5,178.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_551.setTransform(364.5,167.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_552.setTransform(364.5,157.2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_553.setTransform(364.5,146.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_554.setTransform(364.5,136);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_555.setTransform(356.9,178.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_556.setTransform(356.9,167.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_557.setTransform(356.9,157.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_558.setTransform(356.9,146.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_559.setTransform(356.9,136);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_560.setTransform(349.3,178.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_561.setTransform(349.3,167.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_562.setTransform(349.3,157.2);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_563.setTransform(349.3,146.6);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_564.setTransform(349.3,136);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_565.setTransform(341.7,178.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_566.setTransform(341.7,167.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_567.setTransform(341.7,157.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_568.setTransform(341.7,146.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_569.setTransform(341.7,136);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_570.setTransform(334.1,178.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_571.setTransform(334.1,167.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_572.setTransform(334.1,157.2);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_573.setTransform(334.1,146.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_574.setTransform(334.1,136);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_575.setTransform(326.4,178.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_576.setTransform(326.4,167.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_577.setTransform(326.4,157.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_578.setTransform(326.4,146.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_579.setTransform(326.4,136);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_580.setTransform(318.9,178.5);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_581.setTransform(318.9,167.9);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_582.setTransform(318.9,157.2);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_583.setTransform(318.9,146.6);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_584.setTransform(318.9,136);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_585.setTransform(311.3,178.5);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_586.setTransform(311.3,167.9);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_587.setTransform(311.3,157.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_588.setTransform(311.3,146.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_589.setTransform(311.3,136);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_590.setTransform(303.6,178.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_591.setTransform(303.6,167.9);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_592.setTransform(303.6,157.2);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_593.setTransform(303.6,146.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_594.setTransform(303.6,136);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_595.setTransform(296,178.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_596.setTransform(296,167.9);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_597.setTransform(296,157.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_598.setTransform(296,146.6);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_599.setTransform(296,136);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_600.setTransform(288.4,178.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_601.setTransform(288.4,167.9);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_602.setTransform(288.4,157.2);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_603.setTransform(288.4,146.6);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_604.setTransform(288.4,136);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_605.setTransform(280.8,178.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_606.setTransform(280.8,167.9);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_607.setTransform(280.8,157.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_608.setTransform(280.8,146.6);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_609.setTransform(280.8,136);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_610.setTransform(273.2,178.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_611.setTransform(273.2,167.9);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_612.setTransform(273.2,157.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_613.setTransform(273.2,146.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_614.setTransform(273.2,136);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_615.setTransform(265.6,178.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_616.setTransform(265.6,167.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_617.setTransform(265.6,157.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_618.setTransform(265.6,146.6);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_619.setTransform(265.6,136);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_620.setTransform(258,178.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_621.setTransform(258,167.9);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_622.setTransform(258,157.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_623.setTransform(258,146.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_624.setTransform(258,136);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_625.setTransform(250.3,178.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_626.setTransform(250.3,167.9);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_627.setTransform(250.3,157.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_628.setTransform(250.3,146.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_629.setTransform(250.3,136);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_630.setTransform(242.7,178.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_631.setTransform(242.7,167.9);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_632.setTransform(242.7,157.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_633.setTransform(242.7,146.6);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_634.setTransform(242.7,136);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_635.setTransform(235.1,178.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_636.setTransform(235.1,167.9);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_637.setTransform(235.1,157.2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_638.setTransform(235.1,146.6);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_639.setTransform(235.1,136);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_640.setTransform(227.5,178.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_641.setTransform(227.5,167.9);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_642.setTransform(227.5,157.2);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_643.setTransform(227.5,146.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_644.setTransform(227.5,136);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_645.setTransform(219.9,178.5);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_646.setTransform(219.9,167.9);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_647.setTransform(219.9,157.2);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_648.setTransform(219.9,146.6);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_649.setTransform(219.9,136);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_650.setTransform(212.3,178.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_651.setTransform(212.3,167.9);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_652.setTransform(212.3,157.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_653.setTransform(212.3,146.6);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_654.setTransform(212.3,136);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_655.setTransform(204.7,178.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_656.setTransform(204.7,167.9);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_657.setTransform(204.7,157.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_658.setTransform(204.7,146.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_659.setTransform(204.7,136);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_660.setTransform(197,178.5);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_661.setTransform(197,167.9);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_662.setTransform(197,157.2);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_663.setTransform(197,146.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_664.setTransform(197,136);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_665.setTransform(189.4,178.5);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_666.setTransform(189.4,167.9);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_667.setTransform(189.4,157.2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_668.setTransform(189.4,146.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_669.setTransform(189.4,136);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_670.setTransform(181.8,178.5);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_671.setTransform(181.8,167.9);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_672.setTransform(181.8,157.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_673.setTransform(181.8,146.6);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_674.setTransform(181.8,136);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_675.setTransform(174.2,178.5);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_676.setTransform(174.2,167.9);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_677.setTransform(174.2,157.2);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_678.setTransform(174.2,146.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_679.setTransform(174.2,136);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_680.setTransform(166.6,178.5);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_681.setTransform(166.6,167.9);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_682.setTransform(166.6,157.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_683.setTransform(166.6,146.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_684.setTransform(166.6,136);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_685.setTransform(159,178.5);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_686.setTransform(159,167.9);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_687.setTransform(159,157.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_688.setTransform(159,146.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_689.setTransform(159,136);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_690.setTransform(151.4,178.5);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_691.setTransform(151.4,167.9);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_692.setTransform(151.4,157.2);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_693.setTransform(151.4,146.6);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_694.setTransform(151.4,136);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_695.setTransform(143.7,178.5);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_696.setTransform(143.7,167.9);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_697.setTransform(143.7,157.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_698.setTransform(143.7,146.6);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_699.setTransform(143.7,136);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_700.setTransform(136.1,178.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_701.setTransform(136.1,167.9);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_702.setTransform(136.1,157.2);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_703.setTransform(136.1,146.6);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_704.setTransform(136.1,136);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_705.setTransform(128.5,178.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_706.setTransform(128.5,167.9);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_707.setTransform(128.5,157.2);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_708.setTransform(128.5,146.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_709.setTransform(128.5,136);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_710.setTransform(120.9,178.5);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_711.setTransform(120.9,167.9);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_712.setTransform(120.9,157.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_713.setTransform(120.9,146.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_714.setTransform(120.9,136);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_715.setTransform(113.3,178.5);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_716.setTransform(113.3,167.9);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_717.setTransform(113.3,157.2);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_718.setTransform(113.3,146.6);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_719.setTransform(113.3,136);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_720.setTransform(105.7,178.5);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_721.setTransform(105.7,167.9);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_722.setTransform(105.7,157.2);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_723.setTransform(105.7,146.6);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_724.setTransform(105.7,136);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_725.setTransform(98.1,178.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_726.setTransform(98.1,167.9);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_727.setTransform(98.1,157.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_728.setTransform(98.1,146.6);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_729.setTransform(98.1,136);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_730.setTransform(90.4,178.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_731.setTransform(90.4,167.9);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_732.setTransform(90.4,157.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_733.setTransform(90.4,146.6);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_734.setTransform(90.4,136);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_735.setTransform(82.8,178.5);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_736.setTransform(82.8,167.9);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_737.setTransform(82.8,157.2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_738.setTransform(82.8,146.6);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_739.setTransform(82.8,136);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_740.setTransform(75.2,178.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_741.setTransform(75.2,167.9);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_742.setTransform(75.2,157.2);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_743.setTransform(75.2,146.6);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_744.setTransform(75.2,136);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_745.setTransform(67.6,178.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_746.setTransform(67.6,167.9);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_747.setTransform(67.6,157.2);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_748.setTransform(67.6,146.6);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_749.setTransform(67.6,136);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_750.setTransform(60,178.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_751.setTransform(60,167.9);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_752.setTransform(60,157.2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_753.setTransform(60,146.6);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_754.setTransform(60,136);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_755.setTransform(52.4,178.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_756.setTransform(52.4,167.9);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_757.setTransform(52.4,157.2);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_758.setTransform(52.4,146.6);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_759.setTransform(52.4,136);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_760.setTransform(44.8,178.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_761.setTransform(44.8,167.9);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_762.setTransform(44.8,157.2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_763.setTransform(44.8,146.6);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_764.setTransform(44.8,136);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_765.setTransform(37.1,178.5);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_766.setTransform(37.1,167.9);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_767.setTransform(37.1,157.2);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_768.setTransform(37.1,146.6);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_769.setTransform(37.1,136);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_770.setTransform(29.5,178.5);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_771.setTransform(29.5,167.9);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_772.setTransform(29.5,157.2);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_773.setTransform(29.5,146.6);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_774.setTransform(29.5,136);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_775.setTransform(21.9,178.5);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_776.setTransform(21.9,167.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_777.setTransform(21.9,157.2);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_778.setTransform(21.9,146.6);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_779.setTransform(21.9,136);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_780.setTransform(14.3,178.5);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_781.setTransform(14.3,167.9);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_782.setTransform(14.3,157.2);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_783.setTransform(14.3,146.6);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_784.setTransform(14.3,136);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_785.setTransform(6.7,178.5);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_786.setTransform(6.7,167.9);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_787.setTransform(6.7,157.2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_788.setTransform(6.7,146.6);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_789.setTransform(6.7,136);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_790.setTransform(602.3,240.2);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_791.setTransform(602.3,229.6);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_792.setTransform(602.3,218.9);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_793.setTransform(602.3,208.3);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_794.setTransform(602.3,197.7);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_795.setTransform(594.6,240.2);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_796.setTransform(594.6,229.6);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_797.setTransform(594.6,218.9);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_798.setTransform(594.6,208.3);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_799.setTransform(594.6,197.7);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_800.setTransform(587,240.2);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_801.setTransform(587,229.6);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_802.setTransform(587,218.9);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_803.setTransform(587,208.3);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_804.setTransform(587,197.7);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_805.setTransform(579.4,240.2);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_806.setTransform(579.4,229.6);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_807.setTransform(579.4,218.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_808.setTransform(579.4,208.3);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_809.setTransform(579.4,197.7);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_810.setTransform(571.8,240.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_811.setTransform(571.8,229.6);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_812.setTransform(571.8,218.9);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_813.setTransform(571.8,208.3);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_814.setTransform(571.8,197.7);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_815.setTransform(564.2,240.2);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_816.setTransform(564.2,229.6);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_817.setTransform(564.2,218.9);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_818.setTransform(564.2,208.3);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_819.setTransform(564.2,197.7);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_820.setTransform(556.6,240.2);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_821.setTransform(556.6,229.6);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_822.setTransform(556.6,218.9);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_823.setTransform(556.6,208.3);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_824.setTransform(556.6,197.7);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_825.setTransform(547.9,240.2);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_826.setTransform(547.9,229.6);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_827.setTransform(547.9,218.9);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_828.setTransform(547.9,208.3);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_829.setTransform(547.9,197.7);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_830.setTransform(540.7,240.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_831.setTransform(540.7,229.6);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_832.setTransform(540.7,218.9);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_833.setTransform(540.7,208.3);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_834.setTransform(540.7,197.7);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_835.setTransform(533.1,240.2);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_836.setTransform(533.1,229.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_837.setTransform(533.1,218.9);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_838.setTransform(533.1,208.3);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_839.setTransform(533.1,197.7);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_840.setTransform(525.5,240.2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_841.setTransform(525.5,229.6);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_842.setTransform(525.5,218.9);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_843.setTransform(525.5,208.3);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_844.setTransform(525.5,197.7);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_845.setTransform(517.9,240.2);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_846.setTransform(517.9,229.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_847.setTransform(517.9,218.9);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_848.setTransform(517.9,208.3);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_849.setTransform(517.9,197.7);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_850.setTransform(510.3,240.2);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_851.setTransform(510.3,229.6);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_852.setTransform(510.3,218.9);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_853.setTransform(510.3,208.3);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_854.setTransform(510.3,197.7);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_855.setTransform(502.6,240.2);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_856.setTransform(502.6,229.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_857.setTransform(502.6,218.9);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_858.setTransform(502.6,208.3);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_859.setTransform(502.6,197.7);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_860.setTransform(495,240.2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_861.setTransform(495,229.6);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_862.setTransform(495,218.9);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_863.setTransform(495,208.3);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_864.setTransform(495,197.7);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_865.setTransform(486.3,240.2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_866.setTransform(486.3,229.6);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_867.setTransform(486.3,218.9);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_868.setTransform(486.3,208.3);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_869.setTransform(486.3,197.7);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_870.setTransform(478.7,240.2);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_871.setTransform(478.7,229.6);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_872.setTransform(478.7,218.9);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_873.setTransform(478.7,208.3);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_874.setTransform(478.7,197.7);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_875.setTransform(471.1,240.2);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_876.setTransform(471.1,229.6);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_877.setTransform(471.1,218.9);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_878.setTransform(471.1,208.3);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_879.setTransform(471.1,197.7);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_880.setTransform(463.5,240.2);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_881.setTransform(463.5,229.6);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_882.setTransform(463.5,218.9);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_883.setTransform(463.5,208.3);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_884.setTransform(463.5,197.7);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_885.setTransform(455.9,240.2);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_886.setTransform(455.9,229.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_887.setTransform(455.9,218.9);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_888.setTransform(455.9,208.3);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_889.setTransform(455.9,197.7);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_890.setTransform(448.3,240.2);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_891.setTransform(448.3,229.6);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_892.setTransform(448.3,218.9);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_893.setTransform(448.3,208.3);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_894.setTransform(448.3,197.7);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_895.setTransform(440.6,240.2);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_896.setTransform(440.6,229.6);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_897.setTransform(440.6,218.9);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_898.setTransform(440.6,208.3);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_899.setTransform(440.6,197.7);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_900.setTransform(433,240.2);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_901.setTransform(433,229.6);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_902.setTransform(433,218.9);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_903.setTransform(433,208.3);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_904.setTransform(433,197.7);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_905.setTransform(425.4,240.2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_906.setTransform(425.4,229.6);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_907.setTransform(425.4,218.9);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_908.setTransform(425.4,208.3);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_909.setTransform(425.4,197.7);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_910.setTransform(417.8,240.2);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_911.setTransform(417.8,229.6);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_912.setTransform(417.8,218.9);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_913.setTransform(417.8,208.3);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_914.setTransform(417.8,197.7);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_915.setTransform(410.2,240.2);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_916.setTransform(410.2,229.6);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_917.setTransform(410.2,218.9);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_918.setTransform(410.2,208.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_919.setTransform(410.2,197.7);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_920.setTransform(402.6,240.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_921.setTransform(402.6,229.6);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_922.setTransform(402.6,218.9);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_923.setTransform(402.6,208.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_924.setTransform(402.6,197.7);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_925.setTransform(395,240.2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_926.setTransform(395,229.6);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_927.setTransform(395,218.9);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_928.setTransform(395,208.3);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_929.setTransform(395,197.7);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_930.setTransform(387.3,240.2);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_931.setTransform(387.3,229.6);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_932.setTransform(387.3,218.9);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_933.setTransform(387.3,208.3);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_934.setTransform(387.3,197.7);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_935.setTransform(379.7,240.2);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_936.setTransform(379.7,229.6);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_937.setTransform(379.7,218.9);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_938.setTransform(379.7,208.3);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_939.setTransform(379.7,197.7);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_940.setTransform(372.1,240.2);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_941.setTransform(372.1,229.6);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_942.setTransform(372.1,218.9);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_943.setTransform(372.1,208.3);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_944.setTransform(372.1,197.7);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_945.setTransform(364.5,240.2);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_946.setTransform(364.5,229.6);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_947.setTransform(364.5,218.9);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_948.setTransform(364.5,208.3);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_949.setTransform(364.5,197.7);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_950.setTransform(356.9,240.2);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_951.setTransform(356.9,229.6);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_952.setTransform(356.9,218.9);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_953.setTransform(356.9,208.3);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_954.setTransform(356.9,197.7);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_955.setTransform(349.3,240.2);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_956.setTransform(349.3,229.6);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_957.setTransform(349.3,218.9);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_958.setTransform(349.3,208.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_959.setTransform(349.3,197.7);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_960.setTransform(341.7,240.2);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_961.setTransform(341.7,229.6);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_962.setTransform(341.7,218.9);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_963.setTransform(341.7,208.3);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_964.setTransform(341.7,197.7);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_965.setTransform(334.1,240.2);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_966.setTransform(334.1,229.6);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_967.setTransform(334.1,218.9);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_968.setTransform(334.1,208.3);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_969.setTransform(334.1,197.7);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_970.setTransform(326.4,240.2);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_971.setTransform(326.4,229.6);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_972.setTransform(326.4,218.9);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_973.setTransform(326.4,208.3);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_974.setTransform(326.4,197.7);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_975.setTransform(318.9,240.2);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_976.setTransform(318.9,229.6);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_977.setTransform(318.9,218.9);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_978.setTransform(318.9,208.3);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_979.setTransform(318.9,197.7);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_980.setTransform(311.3,240.2);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_981.setTransform(311.3,229.6);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_982.setTransform(311.3,218.9);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_983.setTransform(311.3,208.3);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_984.setTransform(311.3,197.7);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_985.setTransform(303.6,240.2);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_986.setTransform(303.6,229.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_987.setTransform(303.6,218.9);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_988.setTransform(303.6,208.3);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_989.setTransform(303.6,197.7);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_990.setTransform(296,240.2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_991.setTransform(296,229.6);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_992.setTransform(296,218.9);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_993.setTransform(296,208.3);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_994.setTransform(296,197.7);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_995.setTransform(288.4,240.2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_996.setTransform(288.4,229.6);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_997.setTransform(288.4,218.9);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_998.setTransform(288.4,208.3);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_999.setTransform(288.4,197.7);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1000.setTransform(280.8,240.2);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1001.setTransform(280.8,229.6);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1002.setTransform(280.8,218.9);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1003.setTransform(280.8,208.3);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1004.setTransform(280.8,197.7);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1005.setTransform(273.2,240.2);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1006.setTransform(273.2,229.6);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1007.setTransform(273.2,218.9);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1008.setTransform(273.2,208.3);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1009.setTransform(273.2,197.7);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1010.setTransform(265.6,240.2);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1011.setTransform(265.6,229.6);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1012.setTransform(265.6,218.9);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1013.setTransform(265.6,208.3);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1014.setTransform(265.6,197.7);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1015.setTransform(258,240.2);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1016.setTransform(258,229.6);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1017.setTransform(258,218.9);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1018.setTransform(258,208.3);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1019.setTransform(258,197.7);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1020.setTransform(250.3,240.2);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1021.setTransform(250.3,229.6);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1022.setTransform(250.3,218.9);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1023.setTransform(250.3,208.3);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1024.setTransform(250.3,197.7);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1025.setTransform(242.7,240.2);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1026.setTransform(242.7,229.6);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1027.setTransform(242.7,218.9);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1028.setTransform(242.7,208.3);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1029.setTransform(242.7,197.7);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1030.setTransform(235.1,240.2);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1031.setTransform(235.1,229.6);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1032.setTransform(235.1,218.9);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1033.setTransform(235.1,208.3);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1034.setTransform(235.1,197.7);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1035.setTransform(227.5,240.2);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1036.setTransform(227.5,229.6);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1037.setTransform(227.5,218.9);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1038.setTransform(227.5,208.3);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1039.setTransform(227.5,197.7);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1040.setTransform(219.9,240.2);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1041.setTransform(219.9,229.6);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1042.setTransform(219.9,218.9);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1043.setTransform(219.9,208.3);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1044.setTransform(219.9,197.7);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1045.setTransform(212.3,240.2);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1046.setTransform(212.3,229.6);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1047.setTransform(212.3,218.9);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1048.setTransform(212.3,208.3);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1049.setTransform(212.3,197.7);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1050.setTransform(204.7,240.2);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1051.setTransform(204.7,229.6);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1052.setTransform(204.7,218.9);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1053.setTransform(204.7,208.3);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1054.setTransform(204.7,197.7);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1055.setTransform(197,240.2);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1056.setTransform(197,229.6);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1057.setTransform(197,218.9);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1058.setTransform(197,208.3);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1059.setTransform(197,197.7);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1060.setTransform(189.4,240.2);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1061.setTransform(189.4,229.6);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1062.setTransform(189.4,218.9);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1063.setTransform(189.4,208.3);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1064.setTransform(189.4,197.7);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1065.setTransform(181.8,240.2);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1066.setTransform(181.8,229.6);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1067.setTransform(181.8,218.9);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1068.setTransform(181.8,208.3);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1069.setTransform(181.8,197.7);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1070.setTransform(174.2,240.2);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1071.setTransform(174.2,229.6);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1072.setTransform(174.2,218.9);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1073.setTransform(174.2,208.3);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1074.setTransform(174.2,197.7);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1075.setTransform(166.6,240.2);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1076.setTransform(166.6,229.6);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1077.setTransform(166.6,218.9);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1078.setTransform(166.6,208.3);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1079.setTransform(166.6,197.7);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1080.setTransform(159,240.2);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1081.setTransform(159,229.6);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1082.setTransform(159,218.9);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1083.setTransform(159,208.3);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1084.setTransform(159,197.7);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1085.setTransform(151.4,240.2);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1086.setTransform(151.4,229.6);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1087.setTransform(151.4,218.9);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1088.setTransform(151.4,208.3);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1089.setTransform(151.4,197.7);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1090.setTransform(143.7,240.2);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1091.setTransform(143.7,229.6);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1092.setTransform(143.7,218.9);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1093.setTransform(143.7,208.3);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1094.setTransform(143.7,197.7);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1095.setTransform(136.1,240.2);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1096.setTransform(136.1,229.6);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1097.setTransform(136.1,218.9);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1098.setTransform(136.1,208.3);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1099.setTransform(136.1,197.7);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1100.setTransform(128.5,240.2);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1101.setTransform(128.5,229.6);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1102.setTransform(128.5,218.9);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1103.setTransform(128.5,208.3);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1104.setTransform(128.5,197.7);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1105.setTransform(120.9,240.2);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1106.setTransform(120.9,229.6);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1107.setTransform(120.9,218.9);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1108.setTransform(120.9,208.3);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1109.setTransform(120.9,197.7);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1110.setTransform(113.3,240.2);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1111.setTransform(113.3,229.6);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1112.setTransform(113.3,218.9);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1113.setTransform(113.3,208.3);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1114.setTransform(113.3,197.7);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1115.setTransform(105.7,240.2);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1116.setTransform(105.7,229.6);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1117.setTransform(105.7,218.9);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1118.setTransform(105.7,208.3);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1119.setTransform(105.7,197.7);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1120.setTransform(98.1,240.2);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1121.setTransform(98.1,229.6);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1122.setTransform(98.1,218.9);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1123.setTransform(98.1,208.3);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1124.setTransform(98.1,197.7);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1125.setTransform(90.4,240.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1126.setTransform(90.4,229.6);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1127.setTransform(90.4,218.9);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1128.setTransform(90.4,208.3);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1129.setTransform(90.4,197.7);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1130.setTransform(82.8,240.2);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1131.setTransform(82.8,229.6);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1132.setTransform(82.8,218.9);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1133.setTransform(82.8,208.3);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1134.setTransform(82.8,197.7);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1135.setTransform(75.2,240.2);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1136.setTransform(75.2,229.6);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1137.setTransform(75.2,218.9);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1138.setTransform(75.2,208.3);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1139.setTransform(75.2,197.7);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1140.setTransform(67.6,240.2);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1141.setTransform(67.6,229.6);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1142.setTransform(67.6,218.9);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1143.setTransform(67.6,208.3);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1144.setTransform(67.6,197.7);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1145.setTransform(60,240.2);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1146.setTransform(60,229.6);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1147.setTransform(60,218.9);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1148.setTransform(60,208.3);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1149.setTransform(60,197.7);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1150.setTransform(52.4,240.2);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1151.setTransform(52.4,229.6);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1152.setTransform(52.4,218.9);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1153.setTransform(52.4,208.3);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1154.setTransform(52.4,197.7);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1155.setTransform(44.8,240.2);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1156.setTransform(44.8,229.6);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1157.setTransform(44.8,218.9);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1158.setTransform(44.8,208.3);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1159.setTransform(44.8,197.7);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1160.setTransform(37.1,240.2);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1161.setTransform(37.1,229.6);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1162.setTransform(37.1,218.9);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1163.setTransform(37.1,208.3);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1164.setTransform(37.1,197.7);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1165.setTransform(29.5,240.2);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1166.setTransform(29.5,229.6);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1167.setTransform(29.5,218.9);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1168.setTransform(29.5,208.3);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1169.setTransform(29.5,197.7);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1170.setTransform(21.9,240.2);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1171.setTransform(21.9,229.6);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1172.setTransform(21.9,218.9);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1173.setTransform(21.9,208.3);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1174.setTransform(21.9,197.7);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1175.setTransform(14.3,240.2);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1176.setTransform(14.3,229.6);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1177.setTransform(14.3,218.9);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1178.setTransform(14.3,208.3);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1179.setTransform(14.3,197.7);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1180.setTransform(6.7,240.2);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1181.setTransform(6.7,229.6);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1182.setTransform(6.7,218.9);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1183.setTransform(6.7,208.3);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1184.setTransform(6.7,197.7);

	this.instance = new lib.Symbol118("synched",0);
	this.instance.setTransform(151.8,203.3);
	this.instance.alpha = 0.172;

	this.instance_1 = new lib.Symbol117("synched",0);
	this.instance_1.setTransform(389.7,201.7);
	this.instance_1.alpha = 0.172;

	this.instance_2 = new lib.Symbol116("synched",0);
	this.instance_2.setTransform(290.9,138.8);
	this.instance_2.alpha = 0.172;

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1185.setTransform(602.3,297.6);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1186.setTransform(602.3,287);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1187.setTransform(602.3,276.4);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1188.setTransform(594.6,297.6);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1189.setTransform(594.6,287);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1190.setTransform(594.6,276.4);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1191.setTransform(587,297.6);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1192.setTransform(587,287);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1193.setTransform(587,276.4);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1194.setTransform(579.4,297.6);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1195.setTransform(579.4,287);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1196.setTransform(579.4,276.4);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1197.setTransform(571.8,297.6);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1198.setTransform(571.8,287);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1199.setTransform(571.8,276.4);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1200.setTransform(564.2,297.6);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1201.setTransform(564.2,287);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1202.setTransform(564.2,276.4);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1203.setTransform(556.6,297.6);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1204.setTransform(556.6,287);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1205.setTransform(556.6,276.4);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1206.setTransform(547.9,297.6);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1207.setTransform(547.9,287);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1208.setTransform(547.9,276.4);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1209.setTransform(540.7,297.6);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1210.setTransform(540.7,287);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1211.setTransform(540.7,276.4);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1212.setTransform(533.1,297.6);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1213.setTransform(533.1,287);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1214.setTransform(533.1,276.4);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1215.setTransform(533.1,265.7);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1216.setTransform(533.1,255.1);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1217.setTransform(525.5,297.6);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1218.setTransform(525.5,287);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1219.setTransform(525.5,276.4);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1220.setTransform(525.5,265.7);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1221.setTransform(525.5,255.1);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1222.setTransform(517.9,297.6);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1223.setTransform(517.9,287);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1224.setTransform(517.9,276.4);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1225.setTransform(517.9,265.7);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1226.setTransform(517.9,255.1);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1227.setTransform(510.3,297.6);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1228.setTransform(510.3,287);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1229.setTransform(510.3,276.4);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1230.setTransform(510.3,265.7);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1231.setTransform(510.3,255.1);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1232.setTransform(502.6,297.6);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1233.setTransform(502.6,287);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1234.setTransform(502.6,276.4);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1235.setTransform(502.6,265.7);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1236.setTransform(502.6,255.1);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1237.setTransform(495,297.6);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1238.setTransform(495,287);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1239.setTransform(495,276.4);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1240.setTransform(495,265.7);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1241.setTransform(495,255.1);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1242.setTransform(486.3,297.6);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1243.setTransform(486.3,287);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1244.setTransform(486.3,276.4);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1245.setTransform(486.3,265.7);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1246.setTransform(486.3,255.1);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1247.setTransform(478.7,297.6);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1248.setTransform(478.7,287);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1249.setTransform(478.7,276.4);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1250.setTransform(478.7,265.7);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1251.setTransform(478.7,255.1);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1252.setTransform(471.1,297.6);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1253.setTransform(471.1,287);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1254.setTransform(471.1,276.4);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1255.setTransform(471.1,265.7);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1256.setTransform(471.1,255.1);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1257.setTransform(463.5,297.6);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1258.setTransform(463.5,287);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1259.setTransform(463.5,276.4);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1260.setTransform(463.5,265.7);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1261.setTransform(463.5,255.1);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1262.setTransform(455.9,297.6);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1263.setTransform(455.9,287);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1264.setTransform(455.9,276.4);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1265.setTransform(455.9,265.7);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1266.setTransform(455.9,255.1);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1267.setTransform(448.3,297.6);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1268.setTransform(448.3,287);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1269.setTransform(448.3,276.4);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1270.setTransform(448.3,265.7);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1271.setTransform(448.3,255.1);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1272.setTransform(440.6,297.6);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1273.setTransform(440.6,287);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1274.setTransform(440.6,276.4);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1275.setTransform(440.6,265.7);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1276.setTransform(440.6,255.1);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1277.setTransform(433,297.6);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1278.setTransform(433,287);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1279.setTransform(433,276.4);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1280.setTransform(433,265.7);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1281.setTransform(433,255.1);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1282.setTransform(425.4,297.6);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1283.setTransform(425.4,287);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1284.setTransform(425.4,276.4);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1285.setTransform(425.4,265.7);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1286.setTransform(425.4,255.1);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1287.setTransform(417.8,297.6);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1288.setTransform(417.8,287);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1289.setTransform(417.8,276.4);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1290.setTransform(417.8,265.7);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1291.setTransform(417.8,255.1);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1292.setTransform(410.2,297.6);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1293.setTransform(410.2,287);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1294.setTransform(410.2,276.4);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1295.setTransform(410.2,265.7);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1296.setTransform(410.2,255.1);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1297.setTransform(402.6,297.6);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1298.setTransform(402.6,287);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1299.setTransform(402.6,276.4);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1300.setTransform(402.6,265.7);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1301.setTransform(402.6,255.1);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1302.setTransform(395,297.6);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1303.setTransform(395,287);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1304.setTransform(395,276.4);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1305.setTransform(395,265.7);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1306.setTransform(395,255.1);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1307.setTransform(387.3,297.6);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1308.setTransform(387.3,287);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1309.setTransform(387.3,276.4);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1310.setTransform(387.3,265.7);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1311.setTransform(387.3,255.1);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1312.setTransform(379.7,297.6);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1313.setTransform(379.7,287);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1314.setTransform(379.7,276.4);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1315.setTransform(379.7,265.7);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1316.setTransform(379.7,255.1);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1317.setTransform(372.1,297.6);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1318.setTransform(372.1,287);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1319.setTransform(372.1,276.4);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1320.setTransform(372.1,265.7);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1321.setTransform(372.1,255.1);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1322.setTransform(364.5,297.6);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1323.setTransform(364.5,287);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1324.setTransform(364.5,276.4);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1325.setTransform(364.5,265.7);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1326.setTransform(364.5,255.1);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1327.setTransform(356.9,297.6);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1328.setTransform(356.9,287);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1329.setTransform(356.9,276.4);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1330.setTransform(356.9,265.7);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1331.setTransform(356.9,255.1);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1332.setTransform(349.3,297.6);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1333.setTransform(349.3,287);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1334.setTransform(349.3,276.4);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1335.setTransform(349.3,265.7);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1336.setTransform(349.3,255.1);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1337.setTransform(341.7,297.6);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1338.setTransform(341.7,287);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1339.setTransform(341.7,276.4);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1340.setTransform(341.7,265.7);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1341.setTransform(341.7,255.1);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1342.setTransform(334.1,297.6);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1343.setTransform(334.1,287);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1344.setTransform(334.1,276.4);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1345.setTransform(334.1,265.7);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1346.setTransform(334.1,255.1);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1347.setTransform(326.4,297.6);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1348.setTransform(326.4,287);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1349.setTransform(326.4,276.4);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1350.setTransform(326.4,265.7);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1351.setTransform(326.4,255.1);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1352.setTransform(318.9,297.6);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1353.setTransform(318.9,287);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1354.setTransform(318.9,276.4);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1355.setTransform(318.9,265.7);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1356.setTransform(318.9,255.1);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1357.setTransform(311.3,297.6);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1358.setTransform(311.3,287);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1359.setTransform(311.3,276.4);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1360.setTransform(311.3,265.7);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1361.setTransform(311.3,255.1);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1362.setTransform(303.6,297.6);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1363.setTransform(303.6,287);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1364.setTransform(303.6,276.4);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1365.setTransform(303.6,265.7);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1366.setTransform(303.6,255.1);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1367.setTransform(296,297.6);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1368.setTransform(296,287);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1369.setTransform(296,276.4);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1370.setTransform(296,265.7);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1371.setTransform(296,255.1);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1372.setTransform(288.4,297.6);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1373.setTransform(288.4,287);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1374.setTransform(288.4,276.4);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1375.setTransform(288.4,265.7);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1376.setTransform(288.4,255.1);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1377.setTransform(280.8,297.6);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1378.setTransform(280.8,287);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1379.setTransform(280.8,276.4);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1380.setTransform(280.8,265.7);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1381.setTransform(280.8,255.1);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1382.setTransform(273.2,297.6);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1383.setTransform(273.2,287);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1384.setTransform(273.2,276.4);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1385.setTransform(273.2,265.7);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1386.setTransform(273.2,255.1);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1387.setTransform(265.6,297.6);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1388.setTransform(265.6,287);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1389.setTransform(265.6,276.4);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1390.setTransform(265.6,265.7);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1391.setTransform(265.6,255.1);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1392.setTransform(258,297.6);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1393.setTransform(258,287);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1394.setTransform(258,276.4);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1395.setTransform(258,265.7);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1396.setTransform(258,255.1);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1397.setTransform(250.3,297.6);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1398.setTransform(250.3,287);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1399.setTransform(250.3,276.4);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1400.setTransform(250.3,265.7);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1401.setTransform(250.3,255.1);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1402.setTransform(242.7,297.6);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1403.setTransform(242.7,287);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1404.setTransform(242.7,276.4);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1405.setTransform(242.7,265.7);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1406.setTransform(242.7,255.1);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1407.setTransform(235.1,297.6);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1408.setTransform(235.1,287);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1409.setTransform(235.1,276.4);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1410.setTransform(235.1,265.7);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1411.setTransform(235.1,255.1);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1412.setTransform(227.5,297.6);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1413.setTransform(227.5,287);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1414.setTransform(227.5,276.4);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1415.setTransform(227.5,265.7);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1416.setTransform(227.5,255.1);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1417.setTransform(219.9,297.6);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1418.setTransform(219.9,287);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1419.setTransform(219.9,276.4);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1420.setTransform(219.9,265.7);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1421.setTransform(219.9,255.1);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1422.setTransform(212.3,297.6);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1423.setTransform(212.3,287);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1424.setTransform(212.3,276.4);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1425.setTransform(212.3,265.7);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1426.setTransform(212.3,255.1);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1427.setTransform(204.7,297.6);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1428.setTransform(204.7,287);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1429.setTransform(204.7,276.4);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1430.setTransform(204.7,265.7);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1431.setTransform(204.7,255.1);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1432.setTransform(197,297.6);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1433.setTransform(197,287);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1434.setTransform(197,276.4);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1435.setTransform(197,265.7);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1436.setTransform(197,255.1);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1437.setTransform(189.4,297.6);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1438.setTransform(189.4,287);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1439.setTransform(189.4,276.4);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1440.setTransform(189.4,265.7);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1441.setTransform(189.4,255.1);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1442.setTransform(181.8,297.6);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1443.setTransform(181.8,287);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1444.setTransform(181.8,276.4);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1445.setTransform(181.8,265.7);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1446.setTransform(181.8,255.1);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1447.setTransform(174.2,297.6);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1448.setTransform(174.2,287);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1449.setTransform(174.2,276.4);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1450.setTransform(174.2,265.7);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1451.setTransform(174.2,255.1);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1452.setTransform(166.6,297.6);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1453.setTransform(166.6,287);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1454.setTransform(166.6,276.4);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1455.setTransform(166.6,265.7);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1456.setTransform(166.6,255.1);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1457.setTransform(159,297.6);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1458.setTransform(159,287);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1459.setTransform(159,276.4);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1460.setTransform(159,265.7);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1461.setTransform(159,255.1);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1462.setTransform(151.4,297.6);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1463.setTransform(151.4,287);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1464.setTransform(151.4,276.4);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1465.setTransform(151.4,265.7);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1466.setTransform(151.4,255.1);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1467.setTransform(143.7,297.6);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1468.setTransform(143.7,287);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1469.setTransform(143.7,276.4);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1470.setTransform(143.7,265.7);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1471.setTransform(143.7,255.1);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1472.setTransform(136.1,297.6);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1473.setTransform(136.1,287);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1474.setTransform(136.1,276.4);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1475.setTransform(136.1,265.7);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1476.setTransform(136.1,255.1);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1477.setTransform(128.5,297.6);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1478.setTransform(128.5,287);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1479.setTransform(128.5,276.4);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1480.setTransform(128.5,265.7);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1481.setTransform(128.5,255.1);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1482.setTransform(120.9,297.6);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1483.setTransform(120.9,287);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1484.setTransform(120.9,276.4);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1485.setTransform(120.9,265.7);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1486.setTransform(120.9,255.1);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1487.setTransform(113.3,297.6);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1488.setTransform(113.3,287);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1489.setTransform(113.3,276.4);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1490.setTransform(113.3,265.7);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1491.setTransform(113.3,255.1);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1492.setTransform(105.7,297.6);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1493.setTransform(105.7,287);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1494.setTransform(105.7,276.4);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1495.setTransform(105.7,265.7);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1496.setTransform(105.7,255.1);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1497.setTransform(98.1,297.6);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1498.setTransform(98.1,287);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1499.setTransform(98.1,276.4);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1500.setTransform(98.1,265.7);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1501.setTransform(98.1,255.1);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1502.setTransform(90.4,297.6);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1503.setTransform(90.4,287);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1504.setTransform(90.4,276.4);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1505.setTransform(90.4,265.7);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1506.setTransform(90.4,255.1);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1507.setTransform(82.8,297.6);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1508.setTransform(82.8,287);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1509.setTransform(82.8,276.4);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1510.setTransform(82.8,265.7);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1511.setTransform(82.8,255.1);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1512.setTransform(75.2,297.6);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1513.setTransform(75.2,287);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1514.setTransform(75.2,276.4);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1515.setTransform(75.2,265.7);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1516.setTransform(75.2,255.1);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1517.setTransform(67.6,297.6);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1518.setTransform(67.6,287);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1519.setTransform(67.6,276.4);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1520.setTransform(67.6,265.7);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1521.setTransform(67.6,255.1);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1522.setTransform(60,297.6);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1523.setTransform(60,287);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1524.setTransform(60,276.4);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1525.setTransform(60,265.7);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1526.setTransform(60,255.1);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1527.setTransform(52.4,297.6);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1528.setTransform(52.4,287);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1529.setTransform(52.4,276.4);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1530.setTransform(52.4,265.7);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1531.setTransform(52.4,255.1);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1532.setTransform(44.8,297.6);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1533.setTransform(44.8,287);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1534.setTransform(44.8,276.4);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1535.setTransform(44.8,265.7);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1536.setTransform(44.8,255.1);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1537.setTransform(37.1,297.6);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1538.setTransform(37.1,287);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1539.setTransform(37.1,276.4);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1540.setTransform(37.1,265.7);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1541.setTransform(37.1,255.1);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1542.setTransform(29.5,297.6);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1543.setTransform(29.5,287);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1544.setTransform(29.5,276.4);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1545.setTransform(29.5,265.7);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1546.setTransform(29.5,255.1);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1547.setTransform(21.9,297.6);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1548.setTransform(21.9,287);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1549.setTransform(21.9,276.4);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1550.setTransform(21.9,265.7);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1551.setTransform(21.9,255.1);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1552.setTransform(14.3,297.6);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1553.setTransform(14.3,287);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1554.setTransform(14.3,276.4);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1555.setTransform(14.3,265.7);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1556.setTransform(14.3,255.1);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1557.setTransform(6.7,297.6);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1558.setTransform(6.7,287);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1559.setTransform(6.7,276.4);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1560.setTransform(6.7,265.7);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#89ABCE").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_1561.setTransform(6.7,255.1);

	// Floor
	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.rf(["#888888","#D5D5D5"],[0,1],14,156.5,0,14,156.5,398).s().p("Egu2AFYIAAqvMBdtAAAIAAKvg");
	this.shape_1562.setTransform(299.3,365.5);

	// Ceiling
	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#EDEBC0").s().p("ASzDtIB3hQIQDAAIj1BQgAj5DtIgohQIOVAAIgsBQgA/oDtIizhQIQnAAIBdBQgAVgB4ICjhuIToAAIlOBugAkzB4Ig2huIQsAAIg7BugEgjtAB4Ij1huITFAAIB/BugAZkg2IENi2ISdAAIAACZIhaAdgAmKg2Ihbi2IUwAAIhjC2gEgp1gA2ImYi2IXRAAIDTC2g");
	this.shape_1563.setTransform(302.5,10.8);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#8E5A20").s().p("Egv1AEDIAAoFMBfrAAAIAAIFg");
	this.shape_1564.setTransform(298.5,13.5);

	// White BG
	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#FFFFFF").s().p("Egu3AfQMAAAg+fMBdvAAAMAAAA+fg");
	this.shape_1565.setTransform(300,200);

	this.addChild(this.shape_1565,this.shape_1564,this.shape_1563,this.shape_1562,this.shape_1561,this.shape_1560,this.shape_1559,this.shape_1558,this.shape_1557,this.shape_1556,this.shape_1555,this.shape_1554,this.shape_1553,this.shape_1552,this.shape_1551,this.shape_1550,this.shape_1549,this.shape_1548,this.shape_1547,this.shape_1546,this.shape_1545,this.shape_1544,this.shape_1543,this.shape_1542,this.shape_1541,this.shape_1540,this.shape_1539,this.shape_1538,this.shape_1537,this.shape_1536,this.shape_1535,this.shape_1534,this.shape_1533,this.shape_1532,this.shape_1531,this.shape_1530,this.shape_1529,this.shape_1528,this.shape_1527,this.shape_1526,this.shape_1525,this.shape_1524,this.shape_1523,this.shape_1522,this.shape_1521,this.shape_1520,this.shape_1519,this.shape_1518,this.shape_1517,this.shape_1516,this.shape_1515,this.shape_1514,this.shape_1513,this.shape_1512,this.shape_1511,this.shape_1510,this.shape_1509,this.shape_1508,this.shape_1507,this.shape_1506,this.shape_1505,this.shape_1504,this.shape_1503,this.shape_1502,this.shape_1501,this.shape_1500,this.shape_1499,this.shape_1498,this.shape_1497,this.shape_1496,this.shape_1495,this.shape_1494,this.shape_1493,this.shape_1492,this.shape_1491,this.shape_1490,this.shape_1489,this.shape_1488,this.shape_1487,this.shape_1486,this.shape_1485,this.shape_1484,this.shape_1483,this.shape_1482,this.shape_1481,this.shape_1480,this.shape_1479,this.shape_1478,this.shape_1477,this.shape_1476,this.shape_1475,this.shape_1474,this.shape_1473,this.shape_1472,this.shape_1471,this.shape_1470,this.shape_1469,this.shape_1468,this.shape_1467,this.shape_1466,this.shape_1465,this.shape_1464,this.shape_1463,this.shape_1462,this.shape_1461,this.shape_1460,this.shape_1459,this.shape_1458,this.shape_1457,this.shape_1456,this.shape_1455,this.shape_1454,this.shape_1453,this.shape_1452,this.shape_1451,this.shape_1450,this.shape_1449,this.shape_1448,this.shape_1447,this.shape_1446,this.shape_1445,this.shape_1444,this.shape_1443,this.shape_1442,this.shape_1441,this.shape_1440,this.shape_1439,this.shape_1438,this.shape_1437,this.shape_1436,this.shape_1435,this.shape_1434,this.shape_1433,this.shape_1432,this.shape_1431,this.shape_1430,this.shape_1429,this.shape_1428,this.shape_1427,this.shape_1426,this.shape_1425,this.shape_1424,this.shape_1423,this.shape_1422,this.shape_1421,this.shape_1420,this.shape_1419,this.shape_1418,this.shape_1417,this.shape_1416,this.shape_1415,this.shape_1414,this.shape_1413,this.shape_1412,this.shape_1411,this.shape_1410,this.shape_1409,this.shape_1408,this.shape_1407,this.shape_1406,this.shape_1405,this.shape_1404,this.shape_1403,this.shape_1402,this.shape_1401,this.shape_1400,this.shape_1399,this.shape_1398,this.shape_1397,this.shape_1396,this.shape_1395,this.shape_1394,this.shape_1393,this.shape_1392,this.shape_1391,this.shape_1390,this.shape_1389,this.shape_1388,this.shape_1387,this.shape_1386,this.shape_1385,this.shape_1384,this.shape_1383,this.shape_1382,this.shape_1381,this.shape_1380,this.shape_1379,this.shape_1378,this.shape_1377,this.shape_1376,this.shape_1375,this.shape_1374,this.shape_1373,this.shape_1372,this.shape_1371,this.shape_1370,this.shape_1369,this.shape_1368,this.shape_1367,this.shape_1366,this.shape_1365,this.shape_1364,this.shape_1363,this.shape_1362,this.shape_1361,this.shape_1360,this.shape_1359,this.shape_1358,this.shape_1357,this.shape_1356,this.shape_1355,this.shape_1354,this.shape_1353,this.shape_1352,this.shape_1351,this.shape_1350,this.shape_1349,this.shape_1348,this.shape_1347,this.shape_1346,this.shape_1345,this.shape_1344,this.shape_1343,this.shape_1342,this.shape_1341,this.shape_1340,this.shape_1339,this.shape_1338,this.shape_1337,this.shape_1336,this.shape_1335,this.shape_1334,this.shape_1333,this.shape_1332,this.shape_1331,this.shape_1330,this.shape_1329,this.shape_1328,this.shape_1327,this.shape_1326,this.shape_1325,this.shape_1324,this.shape_1323,this.shape_1322,this.shape_1321,this.shape_1320,this.shape_1319,this.shape_1318,this.shape_1317,this.shape_1316,this.shape_1315,this.shape_1314,this.shape_1313,this.shape_1312,this.shape_1311,this.shape_1310,this.shape_1309,this.shape_1308,this.shape_1307,this.shape_1306,this.shape_1305,this.shape_1304,this.shape_1303,this.shape_1302,this.shape_1301,this.shape_1300,this.shape_1299,this.shape_1298,this.shape_1297,this.shape_1296,this.shape_1295,this.shape_1294,this.shape_1293,this.shape_1292,this.shape_1291,this.shape_1290,this.shape_1289,this.shape_1288,this.shape_1287,this.shape_1286,this.shape_1285,this.shape_1284,this.shape_1283,this.shape_1282,this.shape_1281,this.shape_1280,this.shape_1279,this.shape_1278,this.shape_1277,this.shape_1276,this.shape_1275,this.shape_1274,this.shape_1273,this.shape_1272,this.shape_1271,this.shape_1270,this.shape_1269,this.shape_1268,this.shape_1267,this.shape_1266,this.shape_1265,this.shape_1264,this.shape_1263,this.shape_1262,this.shape_1261,this.shape_1260,this.shape_1259,this.shape_1258,this.shape_1257,this.shape_1256,this.shape_1255,this.shape_1254,this.shape_1253,this.shape_1252,this.shape_1251,this.shape_1250,this.shape_1249,this.shape_1248,this.shape_1247,this.shape_1246,this.shape_1245,this.shape_1244,this.shape_1243,this.shape_1242,this.shape_1241,this.shape_1240,this.shape_1239,this.shape_1238,this.shape_1237,this.shape_1236,this.shape_1235,this.shape_1234,this.shape_1233,this.shape_1232,this.shape_1231,this.shape_1230,this.shape_1229,this.shape_1228,this.shape_1227,this.shape_1226,this.shape_1225,this.shape_1224,this.shape_1223,this.shape_1222,this.shape_1221,this.shape_1220,this.shape_1219,this.shape_1218,this.shape_1217,this.shape_1216,this.shape_1215,this.shape_1214,this.shape_1213,this.shape_1212,this.shape_1211,this.shape_1210,this.shape_1209,this.shape_1208,this.shape_1207,this.shape_1206,this.shape_1205,this.shape_1204,this.shape_1203,this.shape_1202,this.shape_1201,this.shape_1200,this.shape_1199,this.shape_1198,this.shape_1197,this.shape_1196,this.shape_1195,this.shape_1194,this.shape_1193,this.shape_1192,this.shape_1191,this.shape_1190,this.shape_1189,this.shape_1188,this.shape_1187,this.shape_1186,this.shape_1185,this.instance_2,this.instance_1,this.instance,this.shape_1184,this.shape_1183,this.shape_1182,this.shape_1181,this.shape_1180,this.shape_1179,this.shape_1178,this.shape_1177,this.shape_1176,this.shape_1175,this.shape_1174,this.shape_1173,this.shape_1172,this.shape_1171,this.shape_1170,this.shape_1169,this.shape_1168,this.shape_1167,this.shape_1166,this.shape_1165,this.shape_1164,this.shape_1163,this.shape_1162,this.shape_1161,this.shape_1160,this.shape_1159,this.shape_1158,this.shape_1157,this.shape_1156,this.shape_1155,this.shape_1154,this.shape_1153,this.shape_1152,this.shape_1151,this.shape_1150,this.shape_1149,this.shape_1148,this.shape_1147,this.shape_1146,this.shape_1145,this.shape_1144,this.shape_1143,this.shape_1142,this.shape_1141,this.shape_1140,this.shape_1139,this.shape_1138,this.shape_1137,this.shape_1136,this.shape_1135,this.shape_1134,this.shape_1133,this.shape_1132,this.shape_1131,this.shape_1130,this.shape_1129,this.shape_1128,this.shape_1127,this.shape_1126,this.shape_1125,this.shape_1124,this.shape_1123,this.shape_1122,this.shape_1121,this.shape_1120,this.shape_1119,this.shape_1118,this.shape_1117,this.shape_1116,this.shape_1115,this.shape_1114,this.shape_1113,this.shape_1112,this.shape_1111,this.shape_1110,this.shape_1109,this.shape_1108,this.shape_1107,this.shape_1106,this.shape_1105,this.shape_1104,this.shape_1103,this.shape_1102,this.shape_1101,this.shape_1100,this.shape_1099,this.shape_1098,this.shape_1097,this.shape_1096,this.shape_1095,this.shape_1094,this.shape_1093,this.shape_1092,this.shape_1091,this.shape_1090,this.shape_1089,this.shape_1088,this.shape_1087,this.shape_1086,this.shape_1085,this.shape_1084,this.shape_1083,this.shape_1082,this.shape_1081,this.shape_1080,this.shape_1079,this.shape_1078,this.shape_1077,this.shape_1076,this.shape_1075,this.shape_1074,this.shape_1073,this.shape_1072,this.shape_1071,this.shape_1070,this.shape_1069,this.shape_1068,this.shape_1067,this.shape_1066,this.shape_1065,this.shape_1064,this.shape_1063,this.shape_1062,this.shape_1061,this.shape_1060,this.shape_1059,this.shape_1058,this.shape_1057,this.shape_1056,this.shape_1055,this.shape_1054,this.shape_1053,this.shape_1052,this.shape_1051,this.shape_1050,this.shape_1049,this.shape_1048,this.shape_1047,this.shape_1046,this.shape_1045,this.shape_1044,this.shape_1043,this.shape_1042,this.shape_1041,this.shape_1040,this.shape_1039,this.shape_1038,this.shape_1037,this.shape_1036,this.shape_1035,this.shape_1034,this.shape_1033,this.shape_1032,this.shape_1031,this.shape_1030,this.shape_1029,this.shape_1028,this.shape_1027,this.shape_1026,this.shape_1025,this.shape_1024,this.shape_1023,this.shape_1022,this.shape_1021,this.shape_1020,this.shape_1019,this.shape_1018,this.shape_1017,this.shape_1016,this.shape_1015,this.shape_1014,this.shape_1013,this.shape_1012,this.shape_1011,this.shape_1010,this.shape_1009,this.shape_1008,this.shape_1007,this.shape_1006,this.shape_1005,this.shape_1004,this.shape_1003,this.shape_1002,this.shape_1001,this.shape_1000,this.shape_999,this.shape_998,this.shape_997,this.shape_996,this.shape_995,this.shape_994,this.shape_993,this.shape_992,this.shape_991,this.shape_990,this.shape_989,this.shape_988,this.shape_987,this.shape_986,this.shape_985,this.shape_984,this.shape_983,this.shape_982,this.shape_981,this.shape_980,this.shape_979,this.shape_978,this.shape_977,this.shape_976,this.shape_975,this.shape_974,this.shape_973,this.shape_972,this.shape_971,this.shape_970,this.shape_969,this.shape_968,this.shape_967,this.shape_966,this.shape_965,this.shape_964,this.shape_963,this.shape_962,this.shape_961,this.shape_960,this.shape_959,this.shape_958,this.shape_957,this.shape_956,this.shape_955,this.shape_954,this.shape_953,this.shape_952,this.shape_951,this.shape_950,this.shape_949,this.shape_948,this.shape_947,this.shape_946,this.shape_945,this.shape_944,this.shape_943,this.shape_942,this.shape_941,this.shape_940,this.shape_939,this.shape_938,this.shape_937,this.shape_936,this.shape_935,this.shape_934,this.shape_933,this.shape_932,this.shape_931,this.shape_930,this.shape_929,this.shape_928,this.shape_927,this.shape_926,this.shape_925,this.shape_924,this.shape_923,this.shape_922,this.shape_921,this.shape_920,this.shape_919,this.shape_918,this.shape_917,this.shape_916,this.shape_915,this.shape_914,this.shape_913,this.shape_912,this.shape_911,this.shape_910,this.shape_909,this.shape_908,this.shape_907,this.shape_906,this.shape_905,this.shape_904,this.shape_903,this.shape_902,this.shape_901,this.shape_900,this.shape_899,this.shape_898,this.shape_897,this.shape_896,this.shape_895,this.shape_894,this.shape_893,this.shape_892,this.shape_891,this.shape_890,this.shape_889,this.shape_888,this.shape_887,this.shape_886,this.shape_885,this.shape_884,this.shape_883,this.shape_882,this.shape_881,this.shape_880,this.shape_879,this.shape_878,this.shape_877,this.shape_876,this.shape_875,this.shape_874,this.shape_873,this.shape_872,this.shape_871,this.shape_870,this.shape_869,this.shape_868,this.shape_867,this.shape_866,this.shape_865,this.shape_864,this.shape_863,this.shape_862,this.shape_861,this.shape_860,this.shape_859,this.shape_858,this.shape_857,this.shape_856,this.shape_855,this.shape_854,this.shape_853,this.shape_852,this.shape_851,this.shape_850,this.shape_849,this.shape_848,this.shape_847,this.shape_846,this.shape_845,this.shape_844,this.shape_843,this.shape_842,this.shape_841,this.shape_840,this.shape_839,this.shape_838,this.shape_837,this.shape_836,this.shape_835,this.shape_834,this.shape_833,this.shape_832,this.shape_831,this.shape_830,this.shape_829,this.shape_828,this.shape_827,this.shape_826,this.shape_825,this.shape_824,this.shape_823,this.shape_822,this.shape_821,this.shape_820,this.shape_819,this.shape_818,this.shape_817,this.shape_816,this.shape_815,this.shape_814,this.shape_813,this.shape_812,this.shape_811,this.shape_810,this.shape_809,this.shape_808,this.shape_807,this.shape_806,this.shape_805,this.shape_804,this.shape_803,this.shape_802,this.shape_801,this.shape_800,this.shape_799,this.shape_798,this.shape_797,this.shape_796,this.shape_795,this.shape_794,this.shape_793,this.shape_792,this.shape_791,this.shape_790,this.shape_789,this.shape_788,this.shape_787,this.shape_786,this.shape_785,this.shape_784,this.shape_783,this.shape_782,this.shape_781,this.shape_780,this.shape_779,this.shape_778,this.shape_777,this.shape_776,this.shape_775,this.shape_774,this.shape_773,this.shape_772,this.shape_771,this.shape_770,this.shape_769,this.shape_768,this.shape_767,this.shape_766,this.shape_765,this.shape_764,this.shape_763,this.shape_762,this.shape_761,this.shape_760,this.shape_759,this.shape_758,this.shape_757,this.shape_756,this.shape_755,this.shape_754,this.shape_753,this.shape_752,this.shape_751,this.shape_750,this.shape_749,this.shape_748,this.shape_747,this.shape_746,this.shape_745,this.shape_744,this.shape_743,this.shape_742,this.shape_741,this.shape_740,this.shape_739,this.shape_738,this.shape_737,this.shape_736,this.shape_735,this.shape_734,this.shape_733,this.shape_732,this.shape_731,this.shape_730,this.shape_729,this.shape_728,this.shape_727,this.shape_726,this.shape_725,this.shape_724,this.shape_723,this.shape_722,this.shape_721,this.shape_720,this.shape_719,this.shape_718,this.shape_717,this.shape_716,this.shape_715,this.shape_714,this.shape_713,this.shape_712,this.shape_711,this.shape_710,this.shape_709,this.shape_708,this.shape_707,this.shape_706,this.shape_705,this.shape_704,this.shape_703,this.shape_702,this.shape_701,this.shape_700,this.shape_699,this.shape_698,this.shape_697,this.shape_696,this.shape_695,this.shape_694,this.shape_693,this.shape_692,this.shape_691,this.shape_690,this.shape_689,this.shape_688,this.shape_687,this.shape_686,this.shape_685,this.shape_684,this.shape_683,this.shape_682,this.shape_681,this.shape_680,this.shape_679,this.shape_678,this.shape_677,this.shape_676,this.shape_675,this.shape_674,this.shape_673,this.shape_672,this.shape_671,this.shape_670,this.shape_669,this.shape_668,this.shape_667,this.shape_666,this.shape_665,this.shape_664,this.shape_663,this.shape_662,this.shape_661,this.shape_660,this.shape_659,this.shape_658,this.shape_657,this.shape_656,this.shape_655,this.shape_654,this.shape_653,this.shape_652,this.shape_651,this.shape_650,this.shape_649,this.shape_648,this.shape_647,this.shape_646,this.shape_645,this.shape_644,this.shape_643,this.shape_642,this.shape_641,this.shape_640,this.shape_639,this.shape_638,this.shape_637,this.shape_636,this.shape_635,this.shape_634,this.shape_633,this.shape_632,this.shape_631,this.shape_630,this.shape_629,this.shape_628,this.shape_627,this.shape_626,this.shape_625,this.shape_624,this.shape_623,this.shape_622,this.shape_621,this.shape_620,this.shape_619,this.shape_618,this.shape_617,this.shape_616,this.shape_615,this.shape_614,this.shape_613,this.shape_612,this.shape_611,this.shape_610,this.shape_609,this.shape_608,this.shape_607,this.shape_606,this.shape_605,this.shape_604,this.shape_603,this.shape_602,this.shape_601,this.shape_600,this.shape_599,this.shape_598,this.shape_597,this.shape_596,this.shape_595,this.shape_594,this.shape_593,this.shape_592,this.shape_591,this.shape_590,this.shape_589,this.shape_588,this.shape_587,this.shape_586,this.shape_585,this.shape_584,this.shape_583,this.shape_582,this.shape_581,this.shape_580,this.shape_579,this.shape_578,this.shape_577,this.shape_576,this.shape_575,this.shape_574,this.shape_573,this.shape_572,this.shape_571,this.shape_570,this.shape_569,this.shape_568,this.shape_567,this.shape_566,this.shape_565,this.shape_564,this.shape_563,this.shape_562,this.shape_561,this.shape_560,this.shape_559,this.shape_558,this.shape_557,this.shape_556,this.shape_555,this.shape_554,this.shape_553,this.shape_552,this.shape_551,this.shape_550,this.shape_549,this.shape_548,this.shape_547,this.shape_546,this.shape_545,this.shape_544,this.shape_543,this.shape_542,this.shape_541,this.shape_540,this.shape_539,this.shape_538,this.shape_537,this.shape_536,this.shape_535,this.shape_534,this.shape_533,this.shape_532,this.shape_531,this.shape_530,this.shape_529,this.shape_528,this.shape_527,this.shape_526,this.shape_525,this.shape_524,this.shape_523,this.shape_522,this.shape_521,this.shape_520,this.shape_519,this.shape_518,this.shape_517,this.shape_516,this.shape_515,this.shape_514,this.shape_513,this.shape_512,this.shape_511,this.shape_510,this.shape_509,this.shape_508,this.shape_507,this.shape_506,this.shape_505,this.shape_504,this.shape_503,this.shape_502,this.shape_501,this.shape_500,this.shape_499,this.shape_498,this.shape_497,this.shape_496,this.shape_495,this.shape_494,this.shape_493,this.shape_492,this.shape_491,this.shape_490,this.shape_489,this.shape_488,this.shape_487,this.shape_486,this.shape_485,this.shape_484,this.shape_483,this.shape_482,this.shape_481,this.shape_480,this.shape_479,this.shape_478,this.shape_477,this.shape_476,this.shape_475,this.shape_474,this.shape_473,this.shape_472,this.shape_471,this.shape_470,this.shape_469,this.shape_468,this.shape_467,this.shape_466,this.shape_465,this.shape_464,this.shape_463,this.shape_462,this.shape_461,this.shape_460,this.shape_459,this.shape_458,this.shape_457,this.shape_456,this.shape_455,this.shape_454,this.shape_453,this.shape_452,this.shape_451,this.shape_450,this.shape_449,this.shape_448,this.shape_447,this.shape_446,this.shape_445,this.shape_444,this.shape_443,this.shape_442,this.shape_441,this.shape_440,this.shape_439,this.shape_438,this.shape_437,this.shape_436,this.shape_435,this.shape_434,this.shape_433,this.shape_432,this.shape_431,this.shape_430,this.shape_429,this.shape_428,this.shape_427,this.shape_426,this.shape_425,this.shape_424,this.shape_423,this.shape_422,this.shape_421,this.shape_420,this.shape_419,this.shape_418,this.shape_417,this.shape_416,this.shape_415,this.shape_414,this.shape_413,this.shape_412,this.shape_411,this.shape_410,this.shape_409,this.shape_408,this.shape_407,this.shape_406,this.shape_405,this.shape_404,this.shape_403,this.shape_402,this.shape_401,this.shape_400,this.shape_399,this.shape_398,this.shape_397,this.shape_396,this.shape_395,this.shape_394,this.shape_393,this.shape_392,this.shape_391,this.shape_390,this.shape_389,this.shape_388,this.shape_387,this.shape_386,this.shape_385,this.shape_384,this.shape_383,this.shape_382,this.shape_381,this.shape_380,this.shape_379,this.shape_378,this.shape_377,this.shape_376,this.shape_375,this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.shelf_1,this.shelf_2,this.shelf_3,this.shelf_4,this.shelfBottom_1,this.shelfBottom_2,this.shelfBottom_3,this.shelfBottom_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.8,-13,618.9,413);


// stage content:
(lib.shoppingCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:8,win:15});

	// timeline functions:
	this.frame_0 = function() {
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
		/* stop();
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "TranslationGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/shopping.xml", "TranslationGame");
		}*/
	}
	this.frame_2 = function() {
		/* stop();
		
		dispatchEvent ({type:"ready", bubbles:true});
		
		playGame.onRelease = function() {
			gotoAndStop("game");
		}*/
	}
	this.frame_8 = function() {
		/* stop();
		var gameid:Number;
		if (game != undefined) delete (game);
		var game:RunGame = new RunGame(this);
		
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
	this.frame_15 = function() {
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(6).call(this.frame_8).wait(7).call(this.frame_15).wait(6));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAu4AfQMhdvAAAMAAAg+fMBdvAAAg");
	this.shape.setTransform(300,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// Version
	this.text = new cjs.Text("v2.2", "bold 8px 'Verdana'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 10;
	this.text.lineWidth = 31;
	this.text.setTransform(14.5,387.9);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).to({_off:true},6).wait(13));

	// Text
	this.text_1 = new cjs.Text("Help find everything on the shopping list", "bold 18px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 171;
	this.text_1.setTransform(89.5,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#720300","#3F0202"],[0.29,1],0,33.1,0,-70.5).s().p("AhpGDQgzgOgtgbQgtgagkgkQglglgagtQgbgsgOg0QgOgzAAg3QAAg2AOgzQAOg0AbgsQAagtAlglQAkgkAtgaQAtgbAzgOQAzgOA2AAQA3AAAzAOQA0AOAsAbQAtAaAlAkQAkAlAbAtQAaAsAOA0QAOAzAAA2QAAA3gOAzQgOA0gaAsQgbAtgkAlQglAkgtAaQgsAbg0AOQgzAOg3AAQg2AAgzgOg");
	this.shape_1.setTransform(50.4,45.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#8E8E8E","#FFFFFF","#000000"],[0,0.522,1],-34.3,0,86.3,0).s().p("AhyGiQg3gQgwgcQgxgcgngnQgogogdgwQgcgxgPg3QgPg3AAg8QAAg7APg3QAPg3AcgxQAdgwAogoQAngnAxgcQAwgcA3gQQA4gQA6AAQA7AAA4AQQA3AQAwAcQAxAcAnAnQAoAoAdAwQAcAxAPA3QAPA3AAA7QAAA8gPA3QgPA3gcAxQgdAwgoAoQgnAngxAcQgwAcg3AQQg4AQg7AAQg6AAg4gQg");
	this.shape_2.setTransform(50.4,46);

	this.text_2 = new cjs.Text("Thanks for all the help shopping!", "bold 16px 'Arial'", "#404040");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 184;
	this.text_2.setTransform(583,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{x:89.5,y:28,text:"Help find everything on the shopping list",font:"bold 18px 'Arial'",color:"#333333",lineHeight:20,lineWidth:171}}]},2).to({state:[]},6).to({state:[{t:this.text_2},{t:this.shape_2},{t:this.shape_1},{t:this.text_1,p:{x:48.5,y:27.4,text:"30",font:"32px 'Arial'",color:"#F0F0F0",lineHeight:34,lineWidth:55}}]},7).wait(6));

	// Buttons
	this.playGame = new lib.playGame();
	this.playGame.setTransform(460.5,373,1,1,0,0,0,69.5,14);

	this.playAgain = new lib.playAgain();
	this.playAgain.setTransform(524,351.5,1,1,0,0,0,76,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playGame}]},2).to({state:[]},6).to({state:[{t:this.playAgain}]},7).wait(6));

	// BG
	this.instance = new lib.cover("synched",0);
	this.instance.setTransform(-18.5,-48.5);

	this.shelves = new lib.BG();
	this.shelves.setTransform(11.2,0,1,1,0,0,0,11.2,0);

	this.instance_1 = new lib.winscreen("synched",0);
	this.instance_1.setTransform(300.7,200.1,1,1,0,0,0,319.2,273.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.shelves}]},6).to({state:[{t:this.instance_1}]},7).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,199,602,402);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;