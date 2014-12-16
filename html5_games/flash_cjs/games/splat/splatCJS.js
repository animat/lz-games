(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/correctmp3.mp3", id:"correctmp3"},
		{src:"sounds/incorrectmp3.mp3", id:"incorrectmp3"},
		{src:"sounds/nextQuestionmp3.mp3", id:"nextQuestionmp3"},
		{src:"sounds/pop.mp3", id:"pop"}
	]
};



// symbols:



(lib.whiteBG = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape.setTransform(0.5,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.string = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003B9F").ss(0.8,1,1).p("AA6sKQAtFGg5FEQgrDggpDiQgrDiAEDn");
	this.shape.setTransform(-5.7,42.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-36.3,17.7,157.8);


(lib.playagain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play again?", "30px 'Arial'", "#333333");
	this.text.lineHeight = 32;
	this.text.lineWidth = 257;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("AzSF2IAArrMAmkAAAIAALrg");
	this.shape.setTransform(123.5,38.6);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,261,80);


(lib.letterUnderline = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AiLAAIEXAA");
	this.shape.setTransform(14.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,32.1,4);


(lib.begron = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4CACC").s().p("AhSADIACgIICjALg");
	this.shape.setTransform(165.1,114.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4CACC").s().p("Ag3AGIAAgLIBwALg");
	this.shape_1.setTransform(162.2,117.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#592D09").s().p("AsdAEICsgFQCmgGD9gFQD8gEENAFQEOAFDVAVg");
	this.shape_2.setTransform(-148.7,-101.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F2116").s().p("EgqUAAxIAAhhIIzAAIFcASIH+gJIPpAJIJwAAIMtAJIFdASID6gSIOzASIAMA0g");
	this.shape_3.setTransform(11.3,179.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B5731").s().p("ACVAPIjcAAIhWgPIh5gJIjtABIESgRICaAQIENAFICPAJIC/AFIi1AQg");
	this.shape_4.setTransform(-174,97.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B5731").s().p("AhYAqIAAhTIA5AOQAzAOAqAOQArAQgZAJQgxALg4ADIg8ACIgDAAg");
	this.shape_5.setTransform(-249.4,101.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7B5731").s().p("AI1ASIiEgTIjFAAImXgbIilgFIlOAFIkfgKILXAAIFNAFIFUAQIBJAJIBmAKIBpAMICbARIBQAIg");
	this.shape_6.setTransform(-161.4,96.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7B5731").s().p("Aq7AXIgwgBIhbgDIg6gBIhTAAIhHAAIj/hIID/A1IFfgFIB/AYIBvAAIC1gLIDvAQICDgKIDaAAIDpAKIEkgFIHZAVInkAAIkJAGIjpgGIjlAAIiIALIkFgQIkEAVg");
	this.shape_7.setTransform(-127.6,100.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7B5731").s().p("AkTAaIi/gVIl5geIGJAGIC0AKIGyAAIFUgKIFUAEIquApg");
	this.shape_8.setTransform(-10.3,97.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7B5731").s().p("AhxAAIC4gJIDFgVIFOgGIiUAVIiVAAIl3AuIkkAAIjvAGg");
	this.shape_9.setTransform(73.3,99.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7B5731").s().p("AkbBKIhNgBIiUgDIhYgBIg0ABIhRADIgqABIk5AAIhQAAIhwAAQgkAAgzgDIg4gCIiVgWInoAGIHzggICfAaIJuAAICvgFIITAFIF8gQIEUAGICwgLIHDAAIE/guIDfgQIEuglIi/ArIiaAVIjfATIkJAgIjVAAImzAQIkfAAIlcAQg");
	this.shape_10.setTransform(-52.5,102.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7B5731").s().p("AgcAuIlogCIkVAIIk1gGIiKAGIiogDIizgOIh9gEIkZAAIiAAGIAAgPICEgFIGbAFICqAQICoADIDxgGIDMAGIClgIIGxACIBdAJICagNIL3gHIDcgIIBtAGIB+gKIDrACIA9gRIEygwIhaAbIjhAdIgrATImWALIoHAAIl/AGIkSALg");
	this.shape_11.setTransform(-58.7,107.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B5731").s().p("AnKAsIEsgyIB0gQICMgYIDcgEIAwAAIBMAAQAhABA2AEIA8AEInlAFIiCAWIiAAOIkOAvIikAEg");
	this.shape_12.setTransform(147.7,102.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7B5731").s().p("AlGgIIDxgDIDSAKIBKgBQBFAAA7ADIjHALg");
	this.shape_13.setTransform(235.5,97.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7B5731").s().p("AvqBDIh8AFIlkgJIhxgKIhGgDIhLgCIgyAAIgsAAIiKgGIhfAAICggLIC3AJIBAgCIBKgCQAOAAAnAGIAsAGIFrALICDgEIBsAIIH8gIIBfgHIBmAAICSALID2gJIEfAFICYgCIF/gRIBcAGIB6gNIE9gDIBLgXIDJgdIAugNIBHgQQBAgOAwgGIhJAWIhdAbQgXAGgcAEIgeAEIgqAGIguAGIgtAFIgoAIIhHASInDAWIhgAAIhYAGIgsAAIhYAAIg/AAQgbAAg6ADIhBADIqHAEIiBgIIhtAAIhRAIIoIAGg");
	this.shape_14.setTransform(-51.6,108.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7B5731").s().p("AjMgGIBwgKIF1gEIgqAMIlNAAIh3ALIhDASg");
	this.shape_15.setTransform(178.2,101.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7B5731").s().p("ABRAAIgoAAIgnAFIiUgFIBfgEIAzADIArgJIAsAAIA8AKIAAALg");
	this.shape_16.setTransform(266.6,99.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7B5731").s().p("ACcAGIgsgFIiQAAIglAJIirgKIhCADIBEgMIAqAHQAmAEAUgBQARgBAUAAIAVABIAsgIICSAAIBjAIIBiAFIguACIg2ACIgzgEg");
	this.shape_17.setTransform(234.6,100.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7B5731").s().p("Ag4gCIBxgCIAAAJg");
	this.shape_18.setTransform(275.7,101.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7B5731").s().p("AgBAGIgbgBIhVgJIBVgCICOAJIgiACIgtACIgkgBg");
	this.shape_19.setTransform(245.4,102.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#604834").s().p("AiJAGIhegCIiAgRICFAGIAnAAIAsAAIAtAEIAoADIA6ACIAkAGIDCgZICCAOIiggCIhkARIhVAGg");
	this.shape_20.setTransform(245.3,103.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#604834").s().p("AhMAAIgPgSQAdADAMAJQAMAHgBACICDAEIhPAIIgaACIgmACQgLgCgOgRg");
	this.shape_21.setTransform(211.6,117.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7B5731").s().p("AgQACIhDAJIgjgGIB2gPIAmAEIBRgCIAAATg");
	this.shape_22.setTransform(269.2,104.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7B5731").s().p("ADOARIi7AFIydAGIiOgRIlZgVIAAgRQAhABBvAHIDXANIBvAGIEmALIDGAAIODgPIEmAJINdAAIEbgPQgmALhqAGQhqAGh7ACQh8AChZAAIhdAAInRALg");
	this.shape_23.setTransform(-93,119.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7B5731").s().p("AiDA+I0SAFIlvgWIjmgIIgOgPIEhAMIEhARIJCAAICNAFIDogLIEhgGIEZAXIDdgLIJeAAICkgRIIlgRQADgDBBgQQA/gSBUgGQBVgHBFgSQBFgTAEgCQgmAdhUATQhVAVhIAJIhNALIh4AWIkEAAIjSARIvwARg");
	this.shape_24.setTransform(-55,112);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7B5731").s().p("AuhBRIhVgBQCMgCCLgQQDCgfC7gwQAlgLAdgPQAdgPAmgHQBjgGBkgCIiYAZQgmAGgoAAQglAAgNAIQgNAHgbAMQgwAPgwAJQgxAKguAXQhMAkhbAAQhVADhWAAIg6AAgAPxgFQhHgOhEgSIgtgEIAPAAQBZAABQAPIAHAEIAAARgAFjgqQhZgHhggQQhHgMhEABQCjgKCiARQCaASCfAJIAWAAQhPAChPAAQhZAAhZgCg");
	this.shape_25.setTransform(179.8,110.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#604834").s().p("AjSgLIC5AKIBqgcIBagLIBLALICUAAIiQAOIheAAIg9AIIh1AaIitgOIjGAkg");
	this.shape_26.setTransform(93.1,150);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#604834").s().p("AmJAOIBXgDIDRADIDWgOID1gfIBIgVIB2gEIhhASIhaAZIiXAfIk0AWIieAAIhsgLIi/Acg");
	this.shape_27.setTransform(170.5,146.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#604834").s().p("AhFAAICHgXIBpgLIhsAlIhKAAIgrAMIhzAVg");
	this.shape_28.setTransform(230.3,143.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#604834").s().p("AidAAIA/gQIAtAAIBLAAQAkgBAlgDIAngEIAdgBQAbgCAQAAIgDAeIgvgFIhTgEIhbALIhegFIhlAcg");
	this.shape_29.setTransform(260.6,143);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#604834").s().p("Ak/AFIDugNICZAAICQgSICeAIIBsgPIC0AEIkgAdIiUAAIiMAMIm5AHIkyAPg");
	this.shape_30.setTransform(-2.6,150.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#604834").s().p("AhdAEQBHgGBNgFQBQgGAiAFIlRAUIBLgIg");
	this.shape_31.setTransform(-175.8,144.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#604834").s().p("ApCAlIAAgOICIgEIFwgeIHhgZICtALIi5AAIiwASIh2AAIlHAeIjmAOg");
	this.shape_32.setTransform(-199.9,135.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#604834").s().p("AEIAgIltgdIgyAHIg6AHQgPgBgygIIg5gIIhUgYICKALIIIgEQAGgCBCgJQBAgIAlATQgDAAgUAIQgTAHgFANQgJAPgtADIgwADIgDAAg");
	this.shape_33.setTransform(-89.9,142.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#604834").s().p("AAAAJIiogIIjRgBIg2ABIAAgTIGyADIBaALIA6AAIASgOIA7ADIB2AFIBWADIiqAHIiIATg");
	this.shape_34.setTransform(-215.1,157.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#604834").s().p("AlzgNICbANIDUAHICLgEICegJIBPAQIrnAEg");
	this.shape_35.setTransform(-221,171.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7B5731").s().p("Aq9AMIFBgQIHdgLIBUgBQBNgCA6AAQAoAABbAKICqARIBVAKg");
	this.shape_36.setTransform(-112,171.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7B5731").s().p("ADvAFIlxAEIpWgUIAAgLIKeALID+AAICeALIAyAAIBQABIBRADIBtAFIA3ADIjZALg");
	this.shape_37.setTransform(-185.7,165.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A27D4B").s().p("AFdAeIhegSIjUgXIjEALIkrgIIjqAIIEcgdILSAHICFAOIDqAiIhLAEg");
	this.shape_38.setTransform(-54.4,165.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#604834").s().p("AGpAgIgSgHIh4gLIhOADIiDgDIkwgQIh+gEIhGgFIhNgGQgPAAg2gDIg9gEImFgSIHGAAIEZAWID4ADICyAPICGgPIDDAbIC3AAIBPAAIBeAAQAMABAuAIIBYAPIAtAJg");
	this.shape_39.setTransform(-8.7,170.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#604834").s().p("AOrArIiFgWIgsgIIhWgPIg2gLQgQgDgngCIgtgCIh7AHIijgHImRAEIhsgPIhsAWIh3AAIhogLIhhAHIhagOIoAgEIIVgHIA9AHIBIgHIBXAHIDYgDIA5gLIB3ALIDhADIC7gDICbADIBxgDIB2AHIC/AiIB3AOIDYAHICKASg");
	this.shape_40.setTransform(-66.2,163.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#604834").s().p("AgaARIgsAAIhRAAIhHAAIlTgRIFbADIA6gDIBIgCIAoAAIAcAAICcgPIEnAEIAhAIIAlgGQAigFAWgBIg9AXIldgDIiQAOIghAAg");
	this.shape_41.setTransform(-88.3,137.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("AMxAYIi7APIj5ALInAgIIkAAEIiQALIiigWIiFAAIhwALIhhgLIhhAAIiQAHIAAg7QAIABBGADQBGADAjAAQAeABAgABQAhACACAAQAFABAyAFQAzAGAqAAQAqAAAsAAQAsAAADAAIBTgDQAHgBA4gDQA4gGASgGQARgGA1gGQA1gGAOAAQAPgCA6gJQA7gJAXgCQAaAABLAAQBRgFASAFQAJAHAVALQAVAMARAGQARAHAQAKQAQAMACACIgWAKIBogDIA6gSQAEAAAjAAQAjAAAMAAQAKAAAYAAQAYAAASAAQApAAAYAAQAMAAAcAAQAdAAADAAIDxAAIBTAHIBhAAICtALg");
	this.shape_42.setTransform(-136.9,148.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#775A3F").s().p("Ap1AjIiFAAIhwALIhhgLIhhAAIiQAHIAAg7IBOAEIBpADIA+ACIAjACIA3AGQAzAGAqAAIBWAAIAvAAIBTgDIA/gEQA4gGASgGQARgGA1gGQA1gGAOAAIBJgLQA7gJAXgCIBlAAQBRgFASAFIAeASQAVAMARAGQARAHAQAKIASAOIgWAKIBogDIA6gSIAnAAIAvAAIAiAAIAqAAIBBAAIAoAAIAgAAIDxAAIBTAHIBhAAICtALImMADIi7APIj5ALInAgIIkAAEIiQALg");
	this.shape_43.setTransform(-136.9,148.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7D5E3A").s().p("EgqIAAXIAoABIBNABIAwABIBEAIQA3AGAgABQAgABAwAIIA1AJIFwgLIJSAAIA8AAIBvAAIBDAAIAwACIBQADIApACIDmAAIFXgOIDDAAIB4gLINggOIAygHIBhgKQAygGAQgBQAWgBAdgNIAggOIBCgWICAgpQBCgUARgEIBbgOIBIgLICwAEIDRAgID1gLIChAHIEkAkIAAAAIh3gGIiwgMQiNgJgHACIj8AEIhWgNQhOgMgpgEQgdgCgHAAIgkACIhEAAIg1AAIgtAAIhDAOQg7AMgVAKQgTAKgpASIgtATIiTA3IhDAJQg6AJgYAAIg/ACIgwACIhkAEIjcAHIjfAIIhpADIg5ABIgwACIg5APIg2ADIg7AEIhCADIg5AEIg6AEIhzASIhfgCIiygEIhmgCIgyABIhTACIgrABIj8AgIkWgVImeALIhvgGQhpgFhpAAQhjABg/AGQg+AGgDABIjfALIhvALg");
	this.shape_44.setTransform(11.9,119.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7D5E3A").s().p("AVbBiQhigJhQgNIhUgOIifgFIhaAQIhlgVIjagLIivgVIkPgUIgtgHIhXgPQgugJgRgGQgRgFg9gDIh4gGIg9gBIjbAAIhpAFIjAAAIiAgLIifgFIiKAQIjkgLIDFgKICKgQIE5gGIDfgKIFJAAIB/AKIB1AWIBAgGIDtAlIBgAbIB0AAIEfAOIDaAlICaAAIB6AQICPAbICwAKQgjAHgxAAQgiAAgogDg");
	this.shape_45.setTransform(22.7,163.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7D5E3A").s().p("ACmBeQhjgchxAEQi1AGiChvQBigOBsgMQA1gLA4geQA1gdA1AEQgsAQAEAxQA9ABAmAIQAmAJAxAhIAmAFIAnAFQgHADgqABQgqAAgmADQgmADADALQAkAuBOAKQBPALAqApIgLAAQhfAAhWgig");
	this.shape_46.setTransform(94.6,146.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7D5E3A").s().p("AioAFICBAAIAtgWIA0ABQAuAAANACIAdAKIAYAHQgJAGgVAAIgXAAIgygJIgaAAIgfABQgGAAgPAIIgRAIg");
	this.shape_47.setTransform(262.2,153.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7D5E3A").s().p("AjuASQACgCgFgLQgFgJgnAAIAzgRIA1AHIAtAAIA8AGIAXABIAgABIAfABIAYABIApAEIASgDIAWgDIAWgBIAXgBIAqAAIAkAAIADAAIAiAAQAYABgdADIgkAEIh1AFIhiALIhEgJIhbgEIg+AKQABACgIAEQgDADgGAAQgIAAgMgEg");
	this.shape_48.setTransform(248.9,127.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7D5E3A").s().p("AgMA5IgPgCIgPgCQgHgIgRgHQgNACghACQgmACgJACIg3AAIgcAFQgVABgFgBIgsAAIgPgaIgYgFQgUgFgBgFQASgQAhgCQAhgCADABIBkgTIAagLIAAALIAVANIDXgJIAvgEQApgDAMgDQAMgEAsgEIAygFIBagJIAABEIgLALQgJAFgTAGQgNAIgEAJIhsAAIgQAAIgUAAIgiAAQgUgBAJgBIgYAAIgsAAQghAAgOAGQgJACgJAAIgHAAg");
	this.shape_49.setTransform(244,135.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7D5E3A").s().p("AhSAeIgRgZQgDgFA2gQIBRgQQAIACAcAOIAgAPIgWgEQgTgCgPAHIgoAWIgtALg");
	this.shape_50.setTransform(197.6,142.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7D5E3A").s().p("AmFA/IgygTIgtgHQgpgHgWgSIAmgDQAigDAWAAQAVAAAfADIAiADIAoAAQAjgBAPgDIArgOIAfgOIAQgKQAOgIAGgDQAQgIAGgFIAggEIAsgNIAkAAIhmAaIgMAPIAtgJIAhgCIBFgVIAVgCIAeAAIhaAXIAXAGICNgEIAkgTIAVAAIAkgIIARAAIgZAIIhCAPIANACICAAAIAogLIArgGIBqAEIARAJIAOAAIAYgJIATAAIAABLIhBgNQg7gJgYAAQgUABgZAGQgaAGgGAAIgwACIgwADIggAEIgbAEIhpACIhBALIgnAAQgBgCgOACQgJACgVACIgXACIAogNIAXgCIAdgCQAJAAAVgFIAZgFIA6gJIhpAGIhAAJIg+APIgdANIhNAGIgrALIgsAEg");
	this.shape_51.setTransform(226.5,148.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7D5E3A").s().p("Ah+AEIF4gTIluAbIiGAFg");
	this.shape_52.setTransform(255.8,130.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7D5E3A").s().p("AhYAAIAdgBIAhgEIAkgFIAigGIA8AAIikAWIgrALg");
	this.shape_53.setTransform(227.3,131.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7D5E3A").s().p("AhrAhIAwgQQAqgOAKgCQAHgBAQgGIAUgIIBCgPIATgYIhAAAIBVgEIAvgGIgxANIgVAOIgRARIg+ALIgzATIixA1g");
	this.shape_54.setTransform(205.2,135.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7D5E3A").s().p("AhrAgQAQgPARgIIAhgNIASgJIAVgEIAagGIA2gNIAwgNIiIAtIg7AWIg4AfIASgRg");
	this.shape_55.setTransform(196.4,137.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7D5E3A").s().p("AhNAiQgLgHgPgaIgRgdQAHgBATAGQAKADAlgDQAWgBAcgGIAhgGQgFAYgPAHQgOAFgCAAIAAAAIAAAAIAVAGIAuAAIA2ANIgVgCIgegCIgIABQgjALgbAFIgaACIgRACIgHABQgKAAgRgDg");
	this.shape_56.setTransform(178.6,144.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7D5E3A").s().p("ACQCPIgqgBIg2gBQgSABhFgDQgcgCg2gHIhkgPIgvgIIglgGIgsgJIhBgOIg/gNIgigGIgdgFQgJgDgbgDQgOgBglgKQgkgJgNgGQgMgGgQgOIgRgOIgagPIgXAAIgNgIIBChPICEgTQAFgJAfAAQAPAFAXAAIAaAAQgaAMgUACIgXADIgkAKIgKAeIAPAoIgDAPIAMAaIBOAgIBEARIAfAJQAdAJAkAHQAcAFBjAMIC8AVIBfALICJgEICjgNID7gKIB5ARIAkgFIAAANIgdAGIgfAAIgZgEIgIgEIgWAAQgTgBgKgBQgLgBgRABIgTACIgeAAIgVAAIgcAAIgZAAIgSAAIgiADIguADQgMABgQAEIgRAEIgqAAIg0AAQgJAAgSAEIgTAEg");
	this.shape_57.setTransform(202.9,151.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7B5731").s().p("AM7E8IhRgEQgRgBgvgEIg1gFIjBgHIgogFIhMgJIgugFIgvgFIhPgJIgqgFIgcAAIgqAAIgkAAIggAAIgggGIgagFIgYgHQgWgIgPgCIg9gEIg/gEIhKgJIh3gOIg+gHIgygCIg8gCQgTgDhggXQg1gJg+gIQg9gGgNAAQgQgBg8gMQg8gNgRgEQgQgGg9gQQg+gQgmgCQgiABhWgDQhXgCh2gNQhIgKAYgGQAZgGAygDIA4gDICKgvIBDgWQA6gUANgDIB4gLIDXgVIB0gMIFJgaQAJgJEfAAQCJAFBAgIQBBgIATgLQARgKA0gTIBkgmIAygTIA5gWQA0gUAdgIQAbgHAogCIA3gCIA1ABIAqABIAkgCIApgDIAzAIIA1AIQANAAA2AJIBHALQASACA/ADIBNACIAuABIBRAEIArACIAxABQAtACAlAAQApABBDAGIBJAHIikgFIiwACIiigCIg2gEQgzgFhDgDQg8gDgigGQgjgHgvgMQgwgLgJADQgKACgMABIhQACIheADQgkABg/AVQg/AWgVAYQgTAXgZATIgdATQg0AahTALQhSANgOAAIgyADIg5ADQgNAAgsAGIhVALIgrAGIhXAVIhVAiIhkAAIiCATIgqAIIhQALIgwAHQgIABgQAJIgSAJIA1AWIAnAMQAmAMAwAMQAwAOAeAXQAeAYABADIBuAdIBkAFIBxgDIBKAHIBRAdIAiAAIArAAIAtAAIAqAAIBOAJICEARIBHAIIDBAWIEyACIBDAAIBQAAQAWgBA8gHIBDgJIAuAAIBXgBIA0gBIAxAEIAqAFICCAAIBRgFIAAATIibAHIgoAAIgvAAIg0AAIg3AAIg0AAIgpAAIk3AiIhGgFg");
	this.shape_58.setTransform(116,139.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7B5731").s().p("AkYBwQg/gKgsgJQgrgJg4gPIg8gQIhvg+IARgkQgDAAgRgIQgRgHAOgNQATgNAXgGIAYgGIAbgMQAYgKANgCQALACATAOQANAKAJAEIgYgGQgcgHgRALQgPAOgGAPQgHAOAAACIBRA7IgPAPQAHAEBYAcQBZAdBSALQCWAPAngCQAWgBAjgFIA2gJIBCgHIA5gFIArAAIAsAAIApgCIAqgBIAoAAIAnAAIAhABIAhACIAhgCIAagBIAUAAIAbAAIAYAAIATAAIAdgCIAAAYIgvABIg7ABIhKgIQg6gGgXgBIhPAAQg5AAgeAEQgUAEgxAFIhdAKIg1AFIg4ABIhmADIhBACQgVgBhAgKg");
	this.shape_59.setTransform(214.2,149.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7B5731").s().p("Ag5AQQApgCAjgOQAkgOADgCQgUAXgrAFQgnAFgKAAIgDgBg");
	this.shape_60.setTransform(149.8,126.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7B5731").s().p("AhOAKQAMgRAXgDQAZgBAYgGIAcgIIA5gGIh9AfQgBgBgQADQgQAFgXAZQAAgCAMgUg");
	this.shape_61.setTransform(198.8,131.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7B5731").s().p("AgRABIAOgHQAAgCAOgPQAQgOAYgBIgSAIQgRAIgHAMQgNAWgGABIgTAPIARAFIgmAGg");
	this.shape_62.setTransform(165.1,125.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7B5731").s().p("Ag4AAIAbACQAGAAAngFQAogKAFgFIAWACQAQABAHALIgFgFQgIgGgcAIQgeAHgYAFIgXAFIhdAJg");
	this.shape_63.setTransform(153.1,132.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7B5731").s().p("AARAZQg9gegJgGIhTgVIA8AAIAoAIQACAGARAJIAeAEIANAFQALABAGABQAHgCAfAAQAfgCAZAbQgEACgqAFIgYABQgbAAgXgIg");
	this.shape_64.setTransform(191.5,122.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7B5731").s().p("Aj7ACIBmgIIBCAAIAQABIAWABIAcAAIBZAAIBDgNIDUgCIgCARIjPACIgqALIiugJIiLAFIhGAMIhDABg");
	this.shape_65.setTransform(246.4,123.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#785133").s().p("ApyAuQgDgiAKgcQAPgbA0gQQA0gQAogEQAqgEA/ACIBVAEQAZABBAAJIBIALIA5AEIBYAHIBQAHIAwADID4AAIBBABIBSABIArAAIAZAAIAAALIgbAFQgYAEgLgBIhDgDIhxgFIg8gCIjQgCIgiAAIgrAAQgLAAgWgDQgUgDgJgFQgJgEgVABIgZABIgYAAQgWgBgJgBIgjgHQgbgFgKgBIg3gEIhagHIgvgEIguAIQgtAHg6APQg0ATgEApQgFArAEAGIgTAMIgFgkg");
	this.shape_66.setTransform(218.5,118.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#785133").s().p("ApPAiIALgeQgBgDAMgRQAMgTAngGQAqgDAogBIArAAIBAAIIAqAAIANAAIATAAQAKABAaAIIAeAIIAaAYQACAGAVAHIAiAAIApgFQAegDASgBQARgBAegGQAegFAVgBQAvADAVAEIAgAFIAaADIEjgGIBvAKIg/gBIhagBIg3AAIgaAAIioALIgtgJIgbgFQgZgFgHAAIgvAEIgrAEIhXAPIhTAEIgzgZIhCgTIiigCIgOAIIgDANQgBAAgGgGQgFgIAMgMIAAgMIgzAEIgfAGIgRAYIgYAZIBEgZIhGAqIgeACg");
	this.shape_67.setTransform(220.8,118.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#69401F").s().p("Ag+AcQgLgOAAgCIAKgQQAJgRAMgMQAegPAuAIQAUADAKAOQAKAOAAACIgMAHQgEADgJAMIgKANQgJAIg5AIQgZgCgKgOg");
	this.shape_68.setTransform(176.2,129.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6F4B2F").s().p("AggA+IgqgSIgPgmIAOgbIAZgdIAfgLIAtAAIAkAKIAbAqIgdAuIgvAZg");
	this.shape_69.setTransform(176.6,129.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AjBBDIgnhEIAjgrIAwgbIA9gMIAsARIAjAnQADABBHgBQBIABBggKIiDAXIg9ADIgWAJIg7BEIhYASg");
	this.shape_70.setTransform(187.9,129.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#987549").s().p("EgqTAHTIAAulMBUnAAAIAAOlg");
	this.shape_71.setTransform(11.5,137.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7B5731").s().p("AiGAMIgKgMIgYgSIAaAGIAxAFIAugDIBjgEQA3gDAegKQAdgKADgCQgWAYgmAEQgmAFgFgBIhdAPIgfAAQgbAAgOACQgMADgHAMQgHANAAACg");
	this.shape_72.setTransform(140.9,131.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7B5731").s().p("ACaApIgkgDQgSgEgdgSIgggSIgvABIgmAFIg8gDIgaAGQgaAGghADIhJAGIgqABIAHgKICQgJIAvgJIA8AAIBbgLIAPAOIA5AdIA2AHIAwgLIARgGQAQgGAOgKQAOgIAOgRIAPgRQgPAkgbANQgbAPgEAAIg5ATIgXgBg");
	this.shape_73.setTransform(158.3,136.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7B5731").s().p("AIgCfIhCgJIhXAAIiNgaIg7gFIhLgHQgWgDg5gNIg9gOIhBgLIh6gWIhJgMIgwgKQgcgHgcgEIgpAAIgqAAIg7ACIgVAAIgiggIgagIIgTgNIgcgcIAagPIAzgRIBCgCIAigGIA9gCIgigNIAWgFIAdgFQAZgLAJgGIApgBIAxgBIAygFQAmgDAUADQALAAAMgIQgJANgCALQgEAaADABIgzAGIhAARQgZAKgCAMQgCANABABIBHAkIA0AOQAvANAPAKQAJAFApAKQAoAKAkAHIAoAIIEQAvIA0ACIBuAZICxAYg");
	this.shape_74.setTransform(127.1,150);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7B5731").s().p("AjrAjIA1gHIAhgKIA1gBIBGgBQAWgBBUgPQBVgPBHgXQgIAEhaAcQhaAahQAEQiNAFAIAGIgiAEg");
	this.shape_75.setTransform(125.9,126.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1F2116").s().p("EgqRAAsIANgsIOzgRID7ARIFdgRIMtgIIJxAAIPpgJIH+AJIFcgSIIqAAIAABXg");
	this.shape_76.setTransform(11.3,-100.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7B5731").s().p("AoDAKIC/gFICPgJIENgFICagQIESARIjtgBIh5AJIhWAQIjcAAIi7AKg");
	this.shape_77.setTransform(197,-182);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7B5731").s().p("AAaAoQg4gDgxgLQgZgJArgQQAqgOAzgOIA5gOIAABTIgDAAIg8gCg");
	this.shape_78.setTransform(272.3,-178.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7B5731").s().p("AttAfICbgRIBpgMIBmgKIBJgJIFUgQIFMgFILYAAIkeAKIlPgFIilAFImXAbIjFAAIiEATImJAVIBQgIg");
	this.shape_79.setTransform(184.4,-183.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7B5731").s().p("AEuAiIkEAQIiIgLIjkAAIjqAGIkKgGInjAAIHYgVIElAFIDpgKIDaAAICDAKIDvgQIC0ALIBwAAICAgYIFeAFID/g1Ij/BIIhHAAIhTAAIg6ABIhbADIgvABIiLAgg");
	this.shape_80.setTransform(150.7,-179.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7B5731").s().p("AieAaIqtgoIFUgGIFUALIGxAAIC1gLIGJgFIl6AeIi/AVg");
	this.shape_81.setTransform(33.3,-182.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7B5731").s().p("AFrAfIkkAAIl3guIiVAAIiUgVIFOAGIDFAVIC4AJIHoAlg");
	this.shape_82.setTransform(-50.4,-180.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7B5731").s().p("ASNBKIhPAAIk6AAIgqgBIhQgDIg1gBIhYABIiUADIhNABIjfAAIldgQIkfAAImzgQIjUAAIkKggIjfgTIiagVIi/grIEuAlIDfAQIE/AuIHEAAICvALIEUgGIF8AQIITgFICwAFIJtAAICfgaIHzAgInogGIiVAWIg4ACQgyADglAAIhwAAg");
	this.shape_83.setTransform(75.5,-177.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7B5731").s().p("APPAvIk1AFIlsgIIkRADIhSAFIkSgLIuGgGImWgMIgrgSIjhgeIhagaIEyAwIA9ARIDrgCIB+AKIBtgGIDcAHIL3AIICaANIBcgJIGygCIClAIIDMgGIDxAGICogCICqgRIGbgFICEAFIAAAPIiAgGIkZAAIh9AEIizAOIioADg");
	this.shape_84.setTransform(81.7,-172);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7B5731").s().p("AGpAvIkOgvIiAgOIiCgWInlgFIA8gEQA2gEAhgBIBMAAIAwAAIDcAEICLAYIB1AQIEsAyICCAHg");
	this.shape_85.setTransform(-124.7,-177.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7B5731").s().p("AlGABQA7gDBFABIBKABIDSgLIDxADInGAUg");
	this.shape_86.setTransform(-212.5,-182.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7B5731").s().p("AFyBFIhRgIIhsAAIiBAIIqIgEIhBgDQg6gDgbAAIg+AAIhZAAIgsAAIhYgHIhfAAInEgUIhHgTIgogIIgtgFIgugGIgqgGIgegEQgcgEgXgHIhdgbIhJgUQAwAEBAAPIBHAQIAuAMIDKAeIBLAWIE8AFIB7AMIBbgGIBcAGIG7AMIEfgEID2AJICSgKIBmAAIBfAFIH8AJIBtgJICDAFIFqgKIAsgHQAngGAPAAIBJACIBAACIC3gIICgAKIhfAAIiKAHIgrAAIgyAAIhMABIhGACIhwALIlkAIIh9gEIhxAJg");
	this.shape_87.setTransform(74.6,-171.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7B5731").s().p("ADWADIh3gLIlNAAIgqgMIF1AEIBwAKIBMAbg");
	this.shape_88.setTransform(-155.2,-177.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7B5731").s().p("AiSAAIA8gKIAsAAIAqAJIA0gDIBfAEIiUAEIgngEIgoAAIhCALg");
	this.shape_89.setTransform(-243.7,-180.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7B5731").s().p("AAhABIiQAAIgsAFIgzAEIg2gDIgugBIBigFIBjgIICSAAIAsAIIAVgBQAUAAARABQAUABAmgEIAqgHIBEANIhCgEIiqAKg");
	this.shape_90.setTransform(-211.6,-179.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7B5731").s().p("Ag4gEIBxACIhxAHg");
	this.shape_91.setTransform(-252.7,-178.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7B5731").s().p("AhPAFIgigCICOgJIBVACIhVAJIgbABIgkABIgtgCg");
	this.shape_92.setTransform(-222.4,-177.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#604834").s().p("AhkAMIhjgRIihACICEgOIDBAZIAkgGIA6gCIApgDIAtgEIArAAIAoAAICFgGIiCARIj1AOg");
	this.shape_93.setTransform(-222.3,-176.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#604834").s().p("AAOARIgagCIhPgIICDgEQgBgCAMgHQAMgJAdgDIgPASQgNARgMACIgmgCg");
	this.shape_94.setTransform(-188.6,-162.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7B5731").s().p("AARADIiHAIIAAgTIBRACIAlgEIB3APIgjAGg");
	this.shape_95.setTransform(-246.3,-175.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7B5731").s().p("AgSAWIi7gFIksALInRgLIhdAAQhZAAh8gCQh7gChqgGQhqgGgmgLIEbAPINdAAIEmgJIRJAPIEmgLIBvgGIDXgNQBwgHAggBIAAARIlZAVIiOARg");
	this.shape_96.setTransform(115.9,-159.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7B5731").s().p("ApUA+IlDAAIivgGIjSgQIkEAAIh3gYIhNgKQhKgJhUgVQhUgTgmgdQAEADBFARQBFATBUAGQBVAHA/ASQBBARADABIIlASICkARIJeAAIDdALIEZgWIEhAFIDoALICOgFIJBAAIEhgRIEhgLIgOANIjmAJIlvAXIwHAAIkLgGIjaALg");
	this.shape_97.setTransform(78,-167.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7B5731").s().p("AK9BOQhcAAhKgkQgvgXgxgKQgwgJgwgPQgbgMgNgHQgOgIgkAAQgoAAgmgFQhMgOhMgMQBkACBjAGQAmAHAdAPQAeAPAkALQC7AwDCAfQCLAQCMACIhVABIg6AAQhWAAhVgDgAv3gFIAAgRIAHgEQBRgPBYAAIAQAAIguAEQhFAShGAOgAqxgqIAVAAQCegJCcgSQCigRCiAKQhFgBhGAMQhgAQhZAHQhZAChYAAQhPAAhPgCg");
	this.shape_98.setTransform(-156.8,-169.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#604834").s().p("ADEAFIitAOIh1gbIg9gHIheAAIiQgOICUAAIBLgLIBaALIBqAcIC4gKIC4A0g");
	this.shape_99.setTransform(-70.1,-129.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#604834").s().p("AFqAdIhsALIifAAIk0gWIiXgfIhagZIhigSIB3AEIBIAVID2AfIDWAOICBgDICmADICeArg");
	this.shape_100.setTransform(-147.5,-133.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#604834").s().p("AA3APIgrgMIhKAAIhsgmIBpAMICHAXIBkAjg");
	this.shape_101.setTransform(-207.3,-136);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#604834").s().p("ABtAAIheAFIhbgLIhTAEIgvAFIgDgeQAQAAAbACIAdABIAnAEQAlADAjABIBMAAIAtAAIA/AQIA0Acg");
	this.shape_102.setTransform(-237.6,-136.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#604834").s().p("AFkATIm5gHIiMgMIiUAAIkggdIC0gEIBsAPICegIICQASICZAAIDuANIFWAdg");
	this.shape_103.setTransform(25.5,-129);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#604834").s().p("AiogIQAigFBQAGQBOAFBGAGIBLAIg");
	this.shape_104.setTransform(198.8,-135.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#604834").s().p("AHJAlIlpgZIjEgTIh3AAIiwgSIi4AAICtgLIHhAZIFwAeICIAEIAAAOg");
	this.shape_105.setTransform(222.9,-144.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#604834").s().p("Ak6AdQgsgDgJgPQgGgOgUgGQgTgIgCAAQAkgTBBAIQBAAJAIACIIIAEICIgLIhSAYIg5AIQgzAIgPABIg6gHIgygHIltAdIgDAAIgwgDg");
	this.shape_106.setTransform(112.9,-137.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#604834").s().p("AkFAAIiqgHIBWgDIB2gFIA7gDIASAOIA6AAIBagLIGygDIAAATIg2gBIjRABIipAIIh9AKg");
	this.shape_107.setTransform(238,-122.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#604834").s().p("AlzAKIBPgQICeAJICLADIDVgGICagNIAAAbg");
	this.shape_108.setTransform(244,-108.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A27D4B").s().p("ApoAJICqgRQBbgKAnAAQA7AABNACIBUABIHdALIFBAQI17AHIBVgKg");
	this.shape_109.setTransform(135.1,-108.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A27D4B").s().p("ArYAMIA3gDIBtgFIBRgDIBQgBIAxgBICfgKID+AAIKegLIAAALIpWAUIlxgEIkSASg");
	this.shape_110.setTransform(208.7,-114.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A27D4B").s().p("ApjAeIhLgDIDqgiICFgPILSgHIEcAdIjqgHIkrAHIjEgLIjUAXIheASg");
	this.shape_111.setTransform(77.4,-114.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#604834").s().p("AvNAiIBYgPQAugIAMgBIBdAAIBQAAIC3AAIDDgbICGAPICygPID4gDIEZgWIHGAAImFASIg9AEQg2ADgPAAIhOAGIhFAFIkdAJIiSALIiCADIhPgDIh3ALIgSAHIpSALIAtgJg");
	this.shape_112.setTransform(31.7,-109);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#604834").s().p("AyNAcIDYgHIB3gOIC/giIB3gHIBvADICbgDIC7ADIDhgDIB3gLIA6ALIDYADIBWgHIBIAHIA+gHIIVAHIoAAEIhaAOIhhgHIhoALIh3AAIhsgWIhsAPImSgEIiiAHIh6gHIgtACQgpACgPADIg2ALIhWAPIgsAIIiFAWIltADg");
	this.shape_113.setTransform(89.2,-116.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#604834").s().p("ACYASIhRAAIgsAAIghAAIiQgPIleADIg8gWQAWAAAiAFIAlAGIAhgIIEngDICcAOIAcAAIAoAAIBIACIA6ADIFbgDIlTASIhHAAg");
	this.shape_114.setTransform(111.3,-142.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("AQFgKQgdABghABQggACgDAAQgEABgzAFQgyAGgqAAQgqAAgsAAQgsAAgEAAIhSgDQgIgBg4gDQg3gGgTgGQgQgGg1gGQg1gGgOAAQgPgCg7gJQg6gJgXgCQgaAAhLAAQhRgFgSAFQgJAHgVALQgVAMgRAGQgSAHgQAKQgQAMgBACIAWAKIhpgDIg5gSQgFAAgjAAQgiAAgNAAQgKAAgYAAQgYAAgRAAQgpAAgYAAQgMAAgcAAQgdAAgDAAIjyAAIhTAHIhhAAIitALIGNADIC7APID4ALIHBgIIEAAEICPALICjgWICFAAIBwALIBhgLIBhAAICRAHIAAg7QgIABhHADQhGADgkAAg");
	this.shape_115.setTransform(159.9,-131);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#775A3F").s().p("AFEAuIkAgEInBAIIj4gLIi7gPImMgDICsgLIBiAAIBSgHIDyAAIAgAAIAoAAIBBAAIAqAAIAhAAIAwAAIAnAAIA5ASIBpADIgVgKIARgOQAPgKASgHQARgGAVgMQAVgLAJgHQASgFBRAFIBlAAQAXACA6AJIBKALQAOAAA1AGQA0AGASAGQASAGA4AGIA/AEIBSADIAwAAIBWAAQAqAAAygGIA3gGIAjgCIA+gCIBqgDIBPgEIAAA7IiQgHIhiAAIhhALIhwgLIiFAAIiiAWg");
	this.shape_116.setTransform(159.9,-131);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#7D5E3A").s().p("EAoaACKIjfgKQgDgCg+gGQg/gGhjgBQhpAAhpAGIhvAFImfgLIkVAVIj8ggIgrgBIhTgCIgygBIhmADIiyADIhfACIhzgTIg6gDIg5gEIhCgDIg7gDIg2gFIg5gNIgwgDIg5gCIhpgCIjfgIIjcgIIhkgDIgwgBIg/gDQgYAAg6gJIhDgJIiTg3IgugTQgogSgTgKQgVgJg7gNIhDgOIgtAAIg1AAIhEAAIgkgBQgHgCgdADQgpAEhOAMIhWANIj8gEQgHgBiNAIIiwAMIh3AGIAAAAIEjgkICigHID1ALIDRghICwgDIBIALIBbAOQARADBCAVICAApIBCAVIAgAPQAdAMAWACQAQABAyAGIBhAKIAyAGIHtALIFzAEIB4ALIDDAAIFWAPIDnAAIApgDIBPgDIAxgCIBDAAIBvAAIA8AAILeADIDkAIIA1gJQAwgIAggBQAggBA3gHIBEgHIAwgBIBNgBIAogBIAAB+g");
	this.shape_117.setTransform(11.1,-160.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7D5E3A").s().p("A34BeICvgKICPgbIB7gQICaAAIDZglIEfgOIB1AAIBggbIDsglIBAAGIB1gWIB/gKIFKAAIDfAKIE6AGICJAQIDFAKIjlALIiKgQIifAFIiAALIi/AAIhqgFIjZAAIg+ABIh3AGQg/ADgRAFQgQAGgvAJIhWAPIgtAHIkPAUIivAVIjaALIhlAVIhagQIifAFIhVAPQhPAMhhAJQgpADgiAAQgxAAgjgHg");
	this.shape_118.setTransform(0.4,-116.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7D5E3A").s().p("AlUB6QAggRASgdQASgeAXgYIAGgFQAigTAmgEQAlgDAPgiQgngPgtgMQgtgNgagjIAAAAQBPgLBOAYQBOAZBIARQAhAEBFgBQBEgCA+AKQA+AKAOAmQgmAQgfAXQggAXgmANQguALgwgGQgvgGgtAJQgqANgbAMQgbANgwAEQhCABhCAAIhQAAg");
	this.shape_119.setTransform(-74.4,-134.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7D5E3A").s().p("AAMAJQgPgIgGgBIgfAAIgaAAIgyAJIgXAAQgUgBgKgFIAYgHIAdgLQANgBAuAAIA0gBIAtAWICBAAIiLAMIgSgIg");
	this.shape_120.setTransform(-239.2,-125.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7D5E3A").s().p("ADSATQgIgEABgCIg+gKIhbAEIhEAJIhigLIh1gFIgjgEQgegDAYgBIAiAAIADAAIAlAAIApAAIAXABIAWABIAXADIARADIApgEIAYgBIAfgBIAggBIAXgBIA8gGIAtAAIA1gHIAzARQgnAAgFAJQgFALACACQgMAEgIAAQgGAAgDgDg");
	this.shape_121.setTransform(-226,-152.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7D5E3A").s().p("AgMA3QgOgGghAAIgtAAIgXAAQAJABgUABIgiAAIgUAAIgQAAIhsAAQgEgJgNgIQgTgGgJgFIgLgLIAAhEIBaAJIAyAFQAsAEAMAEQAMADApADIAvAEIDXAJIAVgNIAAgLIAZALIBkATQAEgBAhACQAhACASAQQgBAFgUAFIgYAFIgPAaIgtAAQgEABgVgBIgcgFIg3AAQgJgCgmgCQghgCgOgCQgQAHgHAIIgPACIgQACIgHAAQgIAAgJgCg");
	this.shape_122.setTransform(-221,-144.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7D5E3A").s().p("AgEAWIgogWQgPgHgTACIgWAEIAggQQAcgMAIgDIBRAPQA2ARgDAFIgRAaIgqACg");
	this.shape_123.setTransform(-174.7,-137.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#7D5E3A").s().p("AEdBEIgrgLIhNgGIgegNIg9gPIhAgJIhogGIA6AJIAZAFQAUAFAJAAIAdACIAXACIAoANIgXgCQgVgCgJgCQgOgCgBACIgmAAIhCgLIhpgCIgbgEIgggEIgwgDIgwgCQgHAAgZgGQgYgGgUgBQgZAAg7AJIhBANIAAhLIATAAIAYAJIAOAAIARgJIBqgEIAsAGIAnALICAAAIANgCIhCgPIgZgJIARAAIAkAJIAVAAIAkATICNAEIAXgGIhagXIAfAAIAUACIBFAVIAiACIAsAJIgNgPIhlgaIAkAAIAtANIAfAEQAGAFAQAIQAGADAOAIIAQAKIAfAOIArAOQAPADAjABIAoAAIAigDQAggDAUAAQAWAAAiADIAmADQgWASgpAHQgpAHgEAAIgxATIg+AJg");
	this.shape_124.setTransform(-203.5,-130.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7D5E3A").s().p("AB0AMIlugcIF5AUIB7ANg");
	this.shape_125.setTransform(-232.8,-148.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7D5E3A").s().p("AA9AGIikgVIA8AAIAiAFIAkAFIAhADIAdACIAPARg");
	this.shape_126.setTransform(-204.3,-147.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7D5E3A").s().p("AAMALIgzgTIg+gLIgRgRIgVgOIgxgNIAvAGIBVAEIhAAAIATAYIBCAPIAUAIQAQAGAHABQAKACAqAOIAwAQIBRAfg");
	this.shape_127.setTransform(-182.2,-144.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7D5E3A").s().p("ABHARIg8gVIiIgsIAwALIA2AOIAaAGIAVAFIARAIIAiANQARAIAQAPIASARg");
	this.shape_128.setTransform(-173.4,-142.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7D5E3A").s().p("AAsAkIgRgCIgbgCQgagFgkgLIgHgBIgeACIgUACIA0gNIAvAAIAUgGQgCAAgOgFQgOgHgFgYIAhAGQAcAGAWABQAkADALgDQATgGAHABIgRAdQgPAagLAHQgSADgJAAIgHgBg");
	this.shape_129.setTransform(-155.6,-135);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7D5E3A").s().p("AjNCPIgTgEQgSgEgKAAIgyAAIgrAAIgQgEQgQgEgMgBIgugDIgjgDIgSAAIgZAAIgbAAIgWAAIgeAAIgTgCQgSgBgKABQgJABgUABIgWAAIgIAEIgZAEIgeAAIgegGIAAgNIAkAFIB5gRIInAbIBfgLIC9gVQBigMAcgFQAkgHAdgJIAfgJIBFgRIBOggIALgaIgDgPIAPgoIgKgeIgkgKIgXgDQgUgCgagNIAaABQAXAAAPgFQAfAAAFAJICEATIBCBPIgMAIIgYAAIgaAPIgRAOQgQAOgLAGQgOAGgkAJQgkAKgOABQgbADgJADIgeAEIgiAHIg+ANIhCAOIgsAJIglAGIgvAIIhkAPQg2AHgcACQhEADgTgBIg2ABIgqABg");
	this.shape_130.setTransform(-179.9,-128.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7B5731").s().p("Ay3EfIgpAAIg0AAIg3AAIg0AAIgvAAIgoAAIibgGIAAgUIBRAEICCAAIAqgEIAxgEIA0AAIBXABIAuABIBDAIQA8AIAWABIBQAAIBCAAIEzgCIDBgVIBHgJICEgRIBOgJIAqAAIAsAAIAsAAIAiAAIBRgdIBKgHIBxACIBkgDIBugfQABgCAegYQAegYAwgNQAwgMAlgMIAogNIA1gVIgSgJQgQgJgIgBIgwgHIhQgLIgqgHIiCgTIhkAAIhVgiIhXgWIgsgGIhUgLQgsgGgNAAIg5gDIgygEQgOABhTgMQhSgMg1gZIgcgUQgZgTgTgXQgVgYg/gVQg/gWgkgBIhegDIhQgBQgNgCgJgDQgJgDgwAMQgvANgjAFQgiAHg8ACQhDAEgzAEIg2AFIiiACIixgCIijAEIBJgGQBDgFAogBQAmAAAtgCIAxgDIArgBIBQgDIAvgCIBNgDQA/gCASgCIBGgLQA3gIANgBIA1gIIAzgIIApACIAkADIAqgCIA1gBIA3ACQAoADAbAGQAdAJA0AUIA5AWIAyATIBkAlQA0AVARAJQATALBBAIQBAAICJgFQEeAAAJAJIFKAaIB0ALIDXAWIB4AMQANACA6ATIBDAXICKAvIA4ADQAyADAZAGQAYAGhIAJQh2AOhXACQhWACgigBQgmADg+AQQg9ARgQAFQgRAFg8AMQg8ALgQACQgNAAg9AHQg+AGg1AKQhgAXgTACIg8ADIgyACIg+AHIh3AOIhLAIIg+AFIg9AEQgPADgWAGIgZAIIgZAGIggAFIggAAIgkAAIgqAAIgcAAIgqAFIhPAJIgvAFIguAFIhMAJIgoAFIjBAGIg1AGQgvAFgRAAIhRAFIhGADg");
	this.shape_131.setTransform(-93.1,-140.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7B5731").s().p("ACDB5IhmgDIg4gBIg1gFIhdgKQgxgFgUgEQgegEg5AAIhPAAQgXABg5AGIhLAIIg7gBIgvgBIAAgYIAeACIASAAIAYAAIAbAAIAUAAIAaABIAhACIAhgCIAhgBIAnAAIAoAAIAqABIApACIAsAAIArAAIA5AFIBCAHIA1AJQAkAFAWABQAnACCWgPQBTgLBYgdQBYgcAHgEIgPgPIBRg7IgHgQQgGgPgPgOQgRgLgcAHIgYAGQAJgEANgKQATgOALgCQANACAYAKIAbAMIAYAGQAXAGATANQAOANgRAHQgRAIgDAAIARAkIhvA+Ig8AQQg4APgrAJQgsAJg/AKQhAAKgVABIhBgCg");
	this.shape_132.setTransform(-191.3,-130.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#7B5731").s().p("AAGAMQgrgFgUgXQADACAkAOQAjAOApACIgDABQgKAAgngFg");
	this.shape_133.setTransform(-126.8,-153);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7B5731").s().p("AA0ACQgQgDgBABIh9gfIA5AGIAcAHQAYAHAZABQAWADANARQAMATAAADQgXgagQgEg");
	this.shape_134.setTransform(-175.8,-148.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#7B5731").s().p("AANAhIARgFIgSgPQgHgBgNgWQgHgMgQgIIgTgIQAYABAQAOQAPAPAAACIANAHIATATIAOATg");
	this.shape_135.setTransform(-142.1,-154);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#7B5731").s().p("AAMAKIgXgFQgXgFgegHQgcgIgIAGIgFAFQAGgKARgCIAWgCQAFAFAoAKIAsAFIAcgCIAxATg");
	this.shape_136.setTransform(-130.2,-147.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#7B5731").s().p("AhaAgQgqgFgEgCQAZgbAfACQAfAAAHACQAGgBALgBIANgFIAdgEQASgJACgGIAogIIA8AAIhTAVQgJAGg+AeQgWAIgbAAIgYgBg");
	this.shape_137.setTransform(-168.5,-157.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#7B5731").s().p("AEcATIhGgMIjLgCIhuAGIgqgLIjPgCIgCgRIDUACIBDANIBZAAIAcAAIAWgBIAQgBIBCAAIBmAIIBjASg");
	this.shape_138.setTransform(-223.4,-156);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#785133").s().p("AJbBGQADgGgEgrQgEgpg1gTQg6gPgsgHIgugIIgwAEIhZAHIg3AEQgKABgbAFIgjAHQgJABgWABIgYAAIgZgBQgWgBgJAEQgIAFgUADQgWADgLAAIgrAAIgiAAIjQACIg8ACIhyAFIhDADQgKABgYgEIgbgFIAAgLIAZAAIArAAIBSgBIBBgBID4AAIAvgDIBRgHIBYgHIA5gEIBIgLQBAgJAZgBIBVgEQA/gCApAEQApAEA0AQQA0AQAPAbQAKAcgDAiIgFAkg");
	this.shape_139.setTransform(-195.6,-160.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#785133").s().p("AJDAsIhGgqIBEAZIgYgZIgRgYIgggGIgzgEIAAAMQANAMgFAIQgGAGgCAAIgCgNIgPgIIihACIhCATIgzAZIhTgEIhXgPIgrgEIgvgEQgIAAgYAFIgbAFIgtAJIiogLIgaAAIg3AAIhbABIg+ABIBvgKIEjAGIAagDIAggFQAVgEAvgDQAVABAeAFQAdAGASABQASABAeADIApAFIAiAAQAVgHACgGIAagYIAegIQAagIAKgBIATAAIANAAIAqAAIBAgIIArAAQAoABAqADQAnAGAMATQAMARgBADIALAeIARAMg");
	this.shape_140.setTransform(-197.8,-161.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#69401F").s().p("AgmAcIgKgNQgJgMgEgDIgMgHQAAgCAKgOQAKgOAUgDQAugIAeAPQAMAMAJARIAKAQQAAACgLAOQgKAOgZACQg5gIgJgIg");
	this.shape_141.setTransform(-153.2,-150.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6F4B2F").s().p("AgNA+IgugZIgdguIAbgqIAkgKIAtAAIAfALIAZAdIAOAbIgPAmIgqASg");
	this.shape_142.setTransform(-153.6,-150.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AApBDIg7hDIgWgJIg9gFIiDgVQBgAJBIAAQBGAAAEgBIAjgnIAsgRIA9AMIAwAbIAjAsIgoBDIhBARg");
	this.shape_143.setTransform(-164.9,-150.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#987549").s().p("EgqTAHTIAAulMBUnAAAIAAOlg");
	this.shape_144.setTransform(11.5,-142.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7B5731").s().p("AB3AZQgHgMgMgDQgOgCgbAAIgfAAIhegPQgEABgmgFQgmgEgVgYQACACAdAKQAeAKA3ADIBjAEIAuADIAxgFIAZgGIgXASIgLAMIgIAcQAAgCgHgNg");
	this.shape_145.setTransform(-117.9,-148.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#7B5731").s().p("AjpAXQgEAAgbgOQgbgOgPgkIAPARQAOAQAOAJQAOALAQAFIARAGIAwALIA2gHIA5geIAPgNIBbALIA8AAIAvAJICQAIIAHALIgqgCIhJgEQghgEgagFIgagHIg8ADIgmgEIgvgDIggATQgdASgSAEIgkACIgXACg");
	this.shape_146.setTransform(-135.3,-143.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7B5731").s().p("AnhCKIBugaIAzgCIEQgvIApgIQAkgHAogKQAogJAJgGQAQgKAvgNIA0gNIBGglQACgBgCgNQgCgMgZgKIhAgRIgzgGQACgBgEgaQgCgLgIgNQALAIAMAAQATgCAnADIAyAEIAxABIAoABQAJAHAZAKIAeAGIAVAEIgiANIA+ACIAiAHIBCACIAzARIAaAOIgcAcIgTANIgaAJIgiAgIgVAAIg8gCIgpAAIgpAAQgcADgcAHQgdAHgUAEIhJALIh6AWIhAALIg9AOQg5ANgXADIhLAHIg7AGIiMAZIhXAAIhCAJIhzACg");
	this.shape_147.setTransform(-104.2,-129.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#7B5731").s().p("ACmAjQAIgGiNgFQhQgEhagaQhagcgIgEQBHAXBVAPQBUAPAWABIBGABIA1ABIAgAKIA2AHIgkAEg");
	this.shape_148.setTransform(-102.9,-153.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#7B5731").s().p("ABUAcIjZgVIjVAHIEjgiICoAHIDpgOIAAA3g");
	this.shape_149.setTransform(247.7,-14.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#7B5731").s().p("AhkAHIBbgYQADgEAzgSQA0gRBDAMIhwAVIhIAjIiPAmg");
	this.shape_150.setTransform(-16.1,-52.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#7B5731").s().p("AiQAlIg+gDIlZgLIKLgdQAEgCBDgMQBEgNBfgFQBegCA9ANQA9ANACACIkEAGIjPAYIgxALQgrAJgnABQgqAAg4gCg");
	this.shape_151.setTransform(-202.5,-45.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#604834").s().p("ACNAvQgdgjgCgGIh2AMIjIA1Ik9gJIFOgOIBXgkICTgaQADgGCBg1QA/gTAnAXQAnAXAQAHQAOAAAugGIBZgPIAtgHQgUATg3AKQg4AKgHAAIg1AiQgDAEgqAfQgqAfgnAKIgBAAQglAAgegjg");
	this.shape_152.setTransform(98.2,-50);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#1F2116").s().p("EgqNAAsIAAhXIIyAAIFbASIH9gJIPmAJIJuAAIMrAJIFcAQID5gQIOxAQIAMAsg");
	this.shape_153.setTransform(12.1,-7.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#7B5731").s().p("ACVAPIjcAAIhWgPIh5gJIjtABIESgRICaAQIENAFICPAJIC/AFIi1AQg");
	this.shape_154.setTransform(-174,-89.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#7B5731").s().p("AhYAqIAAhTIA5AOQAzAOAqAOQArAQgZAJQgxALg4ADIg8ACIgDAAg");
	this.shape_155.setTransform(-249.4,-85.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#7B5731").s().p("AI1ASIiEgTIjFAAImXgbIilgFIlOAFIkfgKILXAAIFNAFIFUAQIBJAJIBmAKIBpAMICbARIBQAIg");
	this.shape_156.setTransform(-161.4,-90.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#7B5731").s().p("Aq7AXIgwgBIhbgDIg6gBIhTAAIhHAAIj/hIID/A1IFfgFIB/AYIBvAAIC1gLIDvAQICDgKIDaAAIDpAKIEkgFIHZAVInkAAIkJAGIjpgGIjlAAIiIALIkFgQIkEAVg");
	this.shape_157.setTransform(-127.6,-86.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#7B5731").s().p("AkTAaIi/gVIl5geIGJAGIC0AKIGyAAIFUgKIFUAEIquApg");
	this.shape_158.setTransform(-10.3,-89.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#7B5731").s().p("AhxAAIC4gJIDFgVIFOgGIiUAVIiVAAIl3AuIkkAAIjvAGg");
	this.shape_159.setTransform(73.3,-87.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#7B5731").s().p("AkbBKIhNgBIiUgDIhYgBIg0ABIhRADIgqABIk5AAIhQAAIhwAAQgkAAgzgDIg4gCIiVgWInoAGIHzggICfAaIJuAAICvgFIITAFIF8gQIEUAGICwgLIHDAAIE/guIDfgQIEuglIi/ArIiaAVIjfATIkJAgIjVAAImzAQIkfAAIlcAQg");
	this.shape_160.setTransform(-52.5,-84.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7B5731").s().p("AgcAuIlogCIkVAIIk1gGIiKAGIiogEIizgNIh9gEIkZAAIiAAGIAAgQICEgEIGbAEICqARICoADIDxgGIDMAGIClgIIGxACIBdAJICagNIL3gHIDcgIIBtAFIB+gJIDrACIA9gRIEygwIhaAbIjhAdIgrATImWALIoHAAIl/AGIkSALg");
	this.shape_161.setTransform(-58.7,-79.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#7B5731").s().p("AnKAsIEsgyIB0gQICMgYIDcgEIAwAAIBMAAQAhAAA2AFIA8AEInlAEIiCAXIiAAOIkOAvIikAEg");
	this.shape_162.setTransform(147.7,-84.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#7B5731").s().p("AlGgIIDxgDIDSAKIBKgBQBFAAA7ADIjHALg");
	this.shape_163.setTransform(235.5,-89.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#7B5731").s().p("AjMgGIBwgKIF1gEIgqAMIlNAAIh3ALIhDASg");
	this.shape_164.setTransform(178.2,-84.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#7B5731").s().p("ABRAAIgoAAIgnAFIiUgFIBfgEIAzADIArgJIAsAAIA8AKIAAALg");
	this.shape_165.setTransform(266.6,-87.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#7B5731").s().p("ACcAGIgsgFIiQAAIglAJIirgKIhCADIBEgMIAqAHQAmAEAUgBQARgBAUAAIAVABIAsgIICSAAIBjAIIBiAFIguACIg2ACIgzgEg");
	this.shape_166.setTransform(234.6,-86.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#7B5731").s().p("Ag4gCIBxgCIAAAJg");
	this.shape_167.setTransform(275.7,-85.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#7B5731").s().p("AgBAGIgbgBIhVgJIBVgCICOAJIgiACIgtACIgkgBg");
	this.shape_168.setTransform(245.4,-84.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#604834").s().p("AhMAAIgPgSQAdADAMAJQAMAHgBACICDAEIhPAIIgaACIgmACQgLgCgOgRg");
	this.shape_169.setTransform(211.6,-69.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#7B5731").s().p("AgQADIhDAIIgjgHIB2gOIAmAEIBRgCIAAATg");
	this.shape_170.setTransform(269.2,-82.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#7B5731").s().p("AiDA+I0SAFIlvgWIjmgIIgOgPIEhAMIEhAQIJCAAICNAGIDogLIEhgGIEZAXIDdgMIJeAAICkgQIIlgRQADgCBBgRQA/gSBUgGQBVgHBFgSQBFgSAEgDQgmAdhUATQhVAVhIAIIhNAMIh4AWIkEAAIjSARIivAGIlDAAIn+ALg");
	this.shape_171.setTransform(-55,-74.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#7B5731").s().p("AuhBRIhVgBQCMgCCLgQQDCgfC7gwQAlgLAdgPQAdgPAmgHQBjgGBkgCIiYAZQgmAGgoAAQglAAgNAIQgNAHgbAMQgwAPgwAJQgxAKguAXQhMAkhbAAQhVADhWAAIg6AAgAPxgFQhHgOhEgSIgtgEIAPAAQBZAABQAPIAHAEIAAARgAFjgqQhZgHhggQQhHgMhEABQCjgKCiARQCaASCfAJIAWAAQhQAChOAAQhZAAhZgCg");
	this.shape_172.setTransform(179.8,-76.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#604834").s().p("AjSgLIC5AKIBqgcIBagLIBLALICUAAIiQAOIheAAIg9AIIh1AaIitgOIjGAkg");
	this.shape_173.setTransform(93.1,-36.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#604834").s().p("AmJAOIBXgDIDRADIDWgOID1gfIBIgVIB2gEIhhASIhaAZIiXAfIk0AWIieAAIhsgLIi/Acg");
	this.shape_174.setTransform(170.5,-40.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#604834").s().p("AhFAAICHgXIBpgLIhsAlIhKAAIgrAMIhzAVg");
	this.shape_175.setTransform(230.3,-43.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#604834").s().p("AidAAIA/gQIAtAAIBLAAQAkgBAlgDIAngEIAdgBQAbgCAQAAIgDAeIgvgFIhTgEIhbALIhegFIhlAcg");
	this.shape_176.setTransform(260.6,-43.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#604834").s().p("Ak/AFIDugNICZAAICQgSICeAIIBsgPIC0AEIkgAdIiUAAIiMAMIm5AHIkyAPg");
	this.shape_177.setTransform(-2.6,-36.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#604834").s().p("AhdAEQBHgGBNgFQBQgGAiAFIlRAUIBLgIg");
	this.shape_178.setTransform(-175.8,-42.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#604834").s().p("ApCAlIAAgOICIgEIFwgeIHhgZICtALIi5AAIiwASIh2AAIlHAeIjmAOg");
	this.shape_179.setTransform(-199.9,-51.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#604834").s().p("AAAAJIiogIIjRgBIg2ABIAAgTIGyADIBaALIA6AAIASgOIA7ADIB2AFIBWADIiqAHIiIATg");
	this.shape_180.setTransform(-215.1,-29.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#604834").s().p("AlzgNICbANIDUAHICLgEICegJIBPAQIrnAEg");
	this.shape_181.setTransform(-221,-15.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("AJpAJQhPgJhbgIQhbgKgoAAQg6AAhNABQhNACgHAAIneALIlAAQIV7AHQgGgBhPgJg");
	this.shape_182.setTransform(-112.1,-15.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#775A3F").s().p("Aq9AMIFAgQIHegLIBUgCICIgBQAnAABbAKICqARIBVAKg");
	this.shape_183.setTransform(-112.1,-15.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#7D5E3A").s().p("ADvAFIlxAEIpWgUIAAgLIKeALID+AAICeALIAyAAIBQABIBRADIBtAFIA3ADIjZALg");
	this.shape_184.setTransform(-185.7,-21.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#A27D4B").s().p("AFdAeIhegSIjUgXIjEALIkrgIIjqAIIEcgdILSAHICFAOIDqAiIhLAEg");
	this.shape_185.setTransform(-54.4,-21.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#604834").s().p("AGpAgIgSgHIh4gLIhOADIiDgDIkwgQIh+gEIhGgFIhNgGQgPAAg2gDIg9gEImFgSIHGAAIEZAWID4ADICyAPICGgPIDDAbIC3AAIBPAAIBeAAQAMABAuAIIBYAPIAtAJg");
	this.shape_186.setTransform(-8.7,-16.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#604834").s().p("AOrArIiFgWIgsgIIhWgPIg2gLQgQgDgngCIgtgCIh7AHIijgHImRAEIhsgPIhsAWIh3AAIhogLIhhAHIhagOIoAgEIIVgHIA9AHIBIgHIBXAHIDYgDIA5gLIB3ALIDhADIC7gDICbADIBxgDIB2AHIC/AiIB3AOIDYAHICKASg");
	this.shape_187.setTransform(-66.2,-23.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#604834").s().p("AgaARIgsAAIhRAAIhHAAIlTgRIFbADIA6gDIBIgCIAoAAIAcAAICcgPIEnAEIAhAIIAlgGQAigFAWgBIg9AXIldgDIiQAOIghAAg");
	this.shape_188.setTransform(-88.3,-49.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("AMxAYIi7APIj5ALInAgIIkAAEIiQALIiigWIiFAAIhwALIhhgLIhhAAIiQAHIAAg7QAIABBGADQBGADAjAAQAeABAgABQAhACACAAQAFABAyAFQAzAGAqAAQAqAAAsAAQAsAAADAAIBTgDQAHgBA4gDQA4gGASgGQARgGA1gGQA1gGAOAAQAPgCA6gJQA7gJAXgCQAaAABLAAQBRgFASAFQAJAHAVALQAVAMARAGQARAHAQAKQAQAMACACIgWAKIBogDIA6gSQAEAAAjAAQAjAAAMAAQAKAAAYAAQAYAAASAAQApAAAYAAQAMAAAcAAQAdAAADAAIDxAAIBTAHIBhAAICtALg");
	this.shape_189.setTransform(-136.9,-38.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#775A3F").s().p("Ap1AjIiFAAIhwALIhhgLIhhAAIiQAHIAAg7IBOAEIBpADIA+ACIAjACIA3AGQAzAGAqAAIBWAAIAvAAIBTgDIA/gEQA4gGASgGQARgGA1gGQA1gGAOAAIBJgLQA7gJAXgCIBlAAQBRgFASAFIAeASQAVAMARAGQARAHAQAKIASAOIgWAKIBogDIA6gSIAnAAIAvAAIAiAAIAqAAIBBAAIAoAAIAgAAIDxAAIBTAHIBhAAICtALImMADIi7APIj5ALInAgIIkAAEIiQALg");
	this.shape_190.setTransform(-136.9,-38.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#7D5E3A").s().p("EgqIAAXIAoABIBNACIAwAAIBEAIQA3AGAgABQAgABAwAIIA1AJIFwgLIJSAAIA8AAIBvAAIBDAAIAwACIBQADIApACIDmAAIFXgOIDDAAIB4gLINggOIAygHIBhgKQAygGAQgBQAWgBAdgNIAggOIBCgWICAgpQBCgUARgEIBbgOIBIgLICwAEIDRAgID1gLIChAHIEkAkIAAAAIh3gGIiwgMQiNgJgHACIj8AEIhWgNQhOgMgpgEQgdgCgHAAIgkACIhEAAIg1AAIgtAAIhDAOQg7AMgVAKQgTAKgpARIgtAUIiTA3IhDAJQg6AJgYAAIg/ACIgwACIhkAEIjcAHIjfAHIhpAEIg5ABIgwACIg5APIg2ADIg7AEIhCADIg5AEIg6AEIhzASIhfgCIiygEIhmgCIgyABIhTACIgrABIj8AgIkWgVImeALIhvgGQhpgEhpgBQhjABg/AGQg+AGgDABIjfALIhvALg");
	this.shape_191.setTransform(11.9,-67.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7D5E3A").s().p("AVbBiQhigJhQgMIhUgPIifgFIhaAQIhlgVIjagLIivgVIkPgUIgtgHIhXgPQgugJgRgGQgRgFg9gDIh4gGIg9gBIjbAAIhpAFIjAAAIiAgLIifgFIiKAQIjkgLIDFgKICKgQIE5gGIDfgKIFJAAIB/AKIB1AWIBAgGIDtAlIBgAbIB0AAIEfAOIDaAlICaAAIB6AQICPAbICwAKQgjAHgxAAQgiAAgogDg");
	this.shape_192.setTransform(22.7,-23.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#7D5E3A").s().p("ABKAgQghgDgEgCIhPAAIgkAAQgOgBgOgKIgPgMIANgFIAvgVIAogKIBCAtIBNAKQgLAKgXAAIgOgBg");
	this.shape_193.setTransform(111.1,-43.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#7D5E3A").s().p("AioAFICBAAIAtgWIA0ABQAuAAANACIAdAKIAYAHQgJAGgVAAIgXAAIgygJIgaAAIgfAAQgGACgPAHIgRAIg");
	this.shape_194.setTransform(262.2,-33);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#7D5E3A").s().p("AjuASQACgCgFgLQgFgJgnAAIAzgRIA1AHIAtAAIA8AGIAXABIAgABIAfABIAYABIApAEIASgDIAWgDIAWgBIAXgBIAqAAIAkAAIADAAIAiAAQAYABgdADIgkAEIh1AFIhiALIhEgJIhbgEIg+AKQABACgIAEQgDADgGAAQgIAAgMgEg");
	this.shape_195.setTransform(248.9,-59.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#7D5E3A").s().p("AgMA5IgPgCIgPgCQgHgIgRgHQgNACghACQgmACgJACIg3AAIgcAFQgVABgFgBIgsAAIgPgaIgYgFQgUgFgBgFQASgQAhgCQAhgCADABIBkgTIAagLIAAALIAVANIDXgJIAvgEQApgDAMgDQAMgEAsgEIAygFIBagJIAABEIgLALQgJAFgTAGQgNAIgEAJIhsAAIgQAAIgUAAIgiAAQgUgBAJgBIgYAAIgsAAQghAAgOAGQgJACgJAAIgHAAg");
	this.shape_196.setTransform(244,-51.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7D5E3A").s().p("AhSAeIgRgZQgDgFA2gQIBRgQQAIACAcAOIAgAOIgWgDQgTgCgPAHIgoAWIgtAKg");
	this.shape_197.setTransform(197.6,-44.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#7D5E3A").s().p("AmFA/IgygTIgtgHQgpgHgWgSIAmgDQAigDAWAAQAVAAAfADIAiADIAoAAQAjgBAPgDIArgOIAfgOIAQgKQAOgIAGgDQAQgIAGgFIAggEIAsgNIAkAAIhmAaIgMAPIAtgJIAhgCIBFgVIAVgCIAeAAIhaAXIAXAGICNgEIAkgTIAVAAIAkgIIARAAIgZAIIhCAPIANACICAAAIAogLIArgGIBqAEIARAJIAOAAIAYgJIATAAIAABLIhBgNQg7gJgYAAQgUABgZAGQgaAGgGAAIgwACIgwADIggAEIgbAEIhpACIhBALIgnAAQgBgCgOACQgJACgVACIgXACIAogNIAXgCIAdgCQAJAAAVgFIAZgFIA6gJIhpAGIhAAJIg+APIgdANIhNAGIgrALIgsAEg");
	this.shape_198.setTransform(226.5,-38);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#7D5E3A").s().p("Ah+AEIF4gTIluAbIiGAFg");
	this.shape_199.setTransform(255.8,-56.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#7D5E3A").s().p("AhYAAIAdgBIAhgEIAkgFIAigGIA8AAIikAWIgrALg");
	this.shape_200.setTransform(227.3,-55);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#7D5E3A").s().p("AhrAhIAwgQQAqgOAKgCQAHgBAQgGIAUgIIBCgPIATgYIhAAAIBVgEIAvgGIgxANIgVAOIgRARIg+ALIgzATIixA1g");
	this.shape_201.setTransform(205.2,-51.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#7D5E3A").s().p("AhrAgQAQgPARgIIAhgNIASgJIAVgEIAagGIA2gOIAwgMIiIAtIg7AWIg4AfIASgRg");
	this.shape_202.setTransform(196.4,-49.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#7D5E3A").s().p("AhNAiQgLgHgPgaIgRgdQAHgBATAGQAKADAlgDQAWgBAcgGIAhgGQgFAYgPAHQgOAFgCAAIAAAAIAAAAIAVAGIAuAAIA2ANIgVgCIgegCIgIABQgjALgbAFIgaACIgRACIgHABQgKAAgRgDg");
	this.shape_203.setTransform(178.6,-42.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#7D5E3A").s().p("ACQCPIgqgBIg2gBQgSABhFgDQgcgCg2gHIhkgPIgvgIIglgGIgsgJIhBgOIg/gNIgigHIgdgEQgJgDgbgDQgOgBglgKQgkgJgNgGQgMgGgQgOIgRgOIgagPIgXAAIgNgIIBChPICEgTQAFgJAfAAQAPAFAXAAIAagBQgaANgUACIgXADIgkAKIgKAeIAPAoIgDAPIAMAaIBOAgIBEARIAfAJQAdAJAkAHQAcAFBjAMIC8AVIBfALICJgEICjgNID7gKIB5ARIAkgFIAAANIgdAGIgfAAIgZgEIgIgEIgWAAQgTgBgKgBQgLgBgRABIgTACIgeAAIgVAAIgcAAIgZAAIgSAAIgiADIguADQgMABgQAEIgRAEIgqAAIg0AAQgJAAgSAEIgTAEg");
	this.shape_204.setTransform(202.9,-35.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#7B5731").s().p("ASFE8IhRgEQgRgBgvgEIg1gGIjBgGIgogFIhMgJIgugFIgvgFIhPgJIgqgFIgdAAIgpAAIgmAAIggAAIgggFIgagGIgYgIQgWgGgPgDIg9gEIg/gFIhIgIIh3gOIg+gHIgygCIg8gCQgUgEhfgWQg1gJg+gIQg+gGgMAAQgQgBg8gMQg9gMgRgFQgPgGg+gQQg9gQgmgDQhvgIhsgQQingGioAGQh3ACh9AFQh9AFh0gOIABgTQDSgLDTAIQDSAJDSgGQBegLBYgcQBQgNBNgYQBigmBpgIIDPgSQCDgNCDgIQAJgJEdAAQCJAFBBgIQBCgIATgLQARgKA0gTIBjgmIAzgTIA5gWQA0gUAdgIQAbgHAogCIA2gDIA2ACIAqABIAkgDIApgCIAzAIIA1AIQANABA2AIIBHALQASADA/ACIBMACIAvABIBRAEIAqACIAyACQAtABAlAAQApACBCAFIBKAHIikgFIiwACIiigCIg2gEQgzgFhDgDQg8gEgjgFQgigHgvgMQgwgMgJAEQgKACgMABIhQACIhfADQgjABg/AVQg/AWgVAYQgTAXgaATIgcATQg0AahTALQhSAMgOAAIgyAEIg7ADQgNAAgsAGIhVALIgrAGIhXAVIhTAjIhkAAIiCASIgqAIIhQALIgwAHQgIACgQAIIgSAJIA1AWIAnAMQAmAMAwAMQAvANAfAYQAeAYABADIBuAdIBkAEIBvgCIBKAHIBRAdIAiAAIAtAAIAtAAIAqAAIBNAJICFARIBHAIIDBAWIEyACIBDAAIBQAAQAWgBA8gHIBDgJIAuAAIBXgBIA0gBIAxAEIAqAEICCAAIBRgEIAAATIibAHIgoAAIgwAAIgzAAIg3AAIg0AAIgpAAIk3AiIhGgFg");
	this.shape_205.setTransform(83.1,-47.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#7B5731").s().p("AkYBwQg/gKgsgJQgrgJg4gPIg8gQIhvg+IARgkQgDAAgRgIQgRgHAOgNQATgNAXgGIAYgGIAbgMQAYgKANgCQALACATAOQANAKAJAEIgYgGQgcgHgRALQgPAOgGAPQgHAOAAACIBRA7IgPAPQAHAEBYAcQBZAdBSALQCWAPAngCQAWgBAjgFIA2gJIBCgHIA5gFIArAAIAsAAIApgCIAqgBIAoAAIAnAAIAhABIAhACIAhgCIAagBIAUAAIAbAAIAYAAIATAAIAdgCIAAAYIgvABIg7ABIhKgIQg6gGgXgBIhPAAQg5AAgeAEQgUAEgxAFIhdAKIg1AFIg4ABIhmADIhBACQgVgBhAgKg");
	this.shape_206.setTransform(214.2,-37.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#7B5731").s().p("Ag5AQQApgCAjgOQAkgOADgCQgUAXgrAFQgnAFgKAAIgDgBg");
	this.shape_207.setTransform(149.8,-60.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#7B5731").s().p("AhOAKQAMgRAXgDQAZgBAYgHIAcgHIA5gGIh9AfQgBgBgQADQgQAFgXAZQAAgCAMgUg");
	this.shape_208.setTransform(198.8,-55.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#7B5731").s().p("AgRABIAOgHQAAgCAOgPQAQgOAYgBIgSAIQgRAIgHAMQgNAWgGABIgTAPIARAFIgmAGg");
	this.shape_209.setTransform(165.1,-61.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#7B5731").s().p("Ag4AAIAbACIAtgFQAogKAFgFIAWACQAQABAHALIgFgFQgIgGgcAIQgeAHgYAFIgXAFIhdAJg");
	this.shape_210.setTransform(153.1,-54.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#7B5731").s().p("AARAZQg9gegJgGIhTgVIA8AAIAoAIQACAGARAJIAeAEIANAFQALABAGABQAHgCAfAAQAfgCAZAbQgEACgqAFIgYABQgbAAgXgIg");
	this.shape_211.setTransform(191.5,-64.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#7B5731").s().p("Aj7ADIBmgJIBCAAIAQABIAWABIAcAAIBZAAIBDgNIDUgCIgCARIjPACIgqALIiugIIiLADIhGAOIhDAAg");
	this.shape_212.setTransform(246.4,-63.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#785133").s().p("ApyAuQgDgiAKgcQAPgbA0gQQA0gQAogEQAqgEA/ACIBVAEQAZABBAAJIBIALIA5AEIBYAHIBQAHIAwADID4AAIBBABIBSABIArAAIAZAAIAAALIgbAFQgYAEgLgBIhDgDIhxgFIg8gCIjQgCIgiAAIgrAAQgLAAgWgDQgUgDgJgFQgJgEgVABIgZABIgYAAQgWgBgJgBIgjgHQgbgFgKgBIg3gEIhagHIgvgEIguAIQgtAHg6APQg0ATgEApQgFArAEAGIgTAMIgFgkg");
	this.shape_213.setTransform(218.5,-68);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#785133").s().p("ApPAiIALgeQgBgDAMgRQAMgTAngGQAqgDAogBIArAAIBAAIIAqAAIANAAIATAAQAKABAaAIIAeAIIAaAYQACAGAVAHIAiAAIApgFQAegDASgBQARgBAegGQAegFAVgBQAvADAVAEIAgAFIAaADIEjgGIBvAKIg/gBIhagBIg3AAIgaAAIioALIgtgJIgbgFQgZgFgHAAIgvAEIgrAEIhXAPIhTAEIgzgZIhCgTIiigCIgOAIIgDANQgBAAgGgGQgFgIAMgMIAAgMIgzAEIgfAGIgRAYIgYAZIBEgZIhGAqIgeACg");
	this.shape_214.setTransform(220.8,-68.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#69401F").s().p("AgaAtIgOgJIgRgJIgPgEQAAgCAEgRQAEgOASgKIAogSQATgJAOAFQAPAIAPAMIAQAOQABABgFAPQgGARgWALQgZAIgTABIgQAAIgHAAg");
	this.shape_215.setTransform(178.9,-58.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#6F4B2F").s().p("AgpA5IgtgiIALgvIAegWIAsgRIAfAAIAiASIAWAWIABAnIghAfIgtARg");
	this.shape_216.setTransform(178.3,-57.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgLApIgXgBIg7ASIiCAaQBdgZBDgaIBGgcIASgvIAjggIA+gJIA2AHIAwAcIgMBOIg3AnIhYAPg");
	this.shape_217.setTransform(167.1,-57.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#7B5731").s().p("AiGAMIgKgMIgYgSIAaAGIAxAFIAugDIBjgEQA3gDAegKQAdgKADgCQgWAYgmAEQgmAFgFgBIhdAPIgfAAQgbAAgOACQgMADgHAMQgHANAAACg");
	this.shape_218.setTransform(140.9,-55.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#7B5731").s().p("ACaApIgkgDQgSgEgdgSIgggSIgvACIgmAEIg8gDIgaAGQgaAGghADIhJAGIgqABIAHgKICQgJIAvgJIA8AAIBbgLIAPAOIA5AdIA2AHIAwgLIARgGQAQgGAOgKQAOgIAOgRIAPgRQgPAkgbANQgbAPgEAAIg5ATIgXgBg");
	this.shape_219.setTransform(158.3,-50.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#7B5731").s().p("AIgCfIhCgJIhXAAIiNgZIg7gGIhLgHQgWgDg5gNIg9gOIhBgLIh6gWIhJgMIgwgKQgcgHgcgDIgpAAIgqAAIg7ABIgVAAIgiggIgagIIgTgNIgcgcIAagPIAzgRIBCgCIAigGIA9gCIgigNIAWgFIAdgFQAZgLAJgGIApgBIAxgCIAygEQAmgCAUACQALAAAMgIQgJANgCALQgEAaADABIgzAGIhAARQgZAJgCANQgCANABABIBHAkIA0AOQAvANAPAKQAJAFApAKQAoAJAkAIIAoAIIEQAvIA0ACIBuAZICxAYg");
	this.shape_220.setTransform(127.1,-36.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#7B5731").s().p("AjrAjIA1gHIAhgKIA1gBIBGgBQAWgBBUgPQBVgPBHgXQgIAEhaAcQhaAahQAEQiNAFAIAGIgiAEg");
	this.shape_221.setTransform(125.9,-60.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#987549").s().p("EgqTAHTIAAulMBUnAAAIAAOlg");
	this.shape_222.setTransform(11.5,-49.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#604834").s().p("AjSgLIC5ALIBqgdIBagLIBLALICUAAIiQAOIheAAIg9AHIh1AbIitgOIjGAkg");
	this.shape_223.setTransform(8.2,41);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#604834").s().p("AmJAOIBXgDIDRADIDWgOID1gfIBIgVIB2gEIhhASIhaAZIiXAfIk0AWIieAAIhsgLIi/Acg");
	this.shape_224.setTransform(57.7,44.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#604834").s().p("AhFAAICHgYIBpgLIhsAmIhKAAIgrAMIhzAUg");
	this.shape_225.setTransform(5.3,44.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#7B5731").s().p("AmcAAIDIgKIDTAAIBJgIQBHgHBXgBQBUACAxAOQAxANABACImEAAIilAWg");
	this.shape_226.setTransform(176.2,84.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#7B5731").s().p("AZ/AUIj8gCIjYgCIipACIikACIhJACIk2gRIk8gFIkEAAIiAAWIl6ggInNAPIrSgaMA31AAAIgDArIh5gCg");
	this.shape_227.setTransform(103.6,-0.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#604834").s().p("AhdAEQBHgGBNgFQBQgGAiAFIlRAUIBLgIg");
	this.shape_228.setTransform(-175.8,50.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#7B5731").s().p("AgsA2IhnAAQgqgBhHgKQhHgKg6gKIg9gLID/gcIDsgRIBVgHICHgLQA3gEBBAFIBGAFQgyAKhqAYIjGArIhhAWIgsAAg");
	this.shape_229.setTransform(-194.3,48.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#604834").s().p("Ak/AFIDugNICZAAICQgSICeAIIBsgPIC0AEIkgAdIiUAAIiMAMIm5AHIkyAPg");
	this.shape_230.setTransform(-2.6,57.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#7B5731").s().p("AEFCNQg7gTg3gNQg0gGg3ADQg1ACg0gHQg4gLg0gOQgzgNg8gBQgaAAgwgEQgwgEgTgMQgUgMA6gXQAygOAvgGQAvgGAxgdQAtgeAqgLQAqgLA5gCQA1gFAzgOQAzgPA1gIQBzgHB0AHQg8AGg8ATQg7ASg7ARQgrAIguATQgvATA3AuQAtANAnAeQAWANBEAjQBEAkATgCQgfAQghAAQgXAAgZgIg");
	this.shape_231.setTransform(-3.8,49.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("AFtASQgGgDgGgTQgGgVBCgDIi5AAIjWgGIjCAMIiDAMIhlgYIBlA0IB3AFQAEAABFgDQBEgCBSgDQBTgDAxAAQA/AEAoAOQAoAOA7gag");
	this.shape_232.setTransform(-89.3,51.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#775A3F").s().p("AEKAeQgogOg/gEQgxAAhTADIiWAFIhJADIh3gFIhlg0IBlAYICDgMIDCgMIDWAGIC5AAQhCADAGAVQAGATAGADQgmARgfAAQgQAAgOgFg");
	this.shape_233.setTransform(-89.3,51.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#7B5731").s().p("ADlAfIjfgJQh9gGhjgGQhjgGgLgEQgCgDBfgGQBggGCAgGIDhgJIBogEIAMBFIhlgEg");
	this.shape_234.setTransform(250.2,81);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#7B5731").s().p("AGtA+IiTgPQhMgHgOAAQgVgBgwgOIg3gQIheANIhUgcQg6gRhLAGQhMAHhGgDQhHgDgugvQB4gKCFAJQCFAKBvAqIBpgYIAqAuIBxAAIEAA7IhOgHg");
	this.shape_235.setTransform(117.7,63.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#7B5731").s().p("AgdBBIiBAFIiFgdIGqg5ICdg8QgRBDgTAFQgTAEgBgEIhFA7IhEAWg");
	this.shape_236.setTransform(80,45.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#542F16").s().p("AhMgWIBMAMIBNAGIhvAbg");
	this.shape_237.setTransform(176.8,38.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#69401F").s().p("AheAGIhNAAIBZgiIBvgYIAqAjIBlAHQgPAYgrANQgrAOgGAAIhjAMg");
	this.shape_238.setTransform(174.4,37.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#785133").s().p("AhKAdIhaAAIhQAPIiIARIACgaIgggTICdAHIBxg4QAJgDBHgVQBFgUAbABIBZAYQBCARA1AGQA2AFA2ABIA7AAQikAXhEAbQhDAdACADIg8ALIhIAIg");
	this.shape_239.setTransform(171.9,37.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#1F2116").s().p("EgqRAAsIAAhXIIzAAIFcASIH8gJIPoAJIJwAAIMsAIIFbARID6gRIOyARIANAsg");
	this.shape_240.setTransform(11.7,85.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#7B5731").s().p("ACVAQIjcAAIhWgQIh5gJIjtABIESgRICaAQIENAFICPAJIC/AFIi1AQg");
	this.shape_241.setTransform(-174,4.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#7B5731").s().p("AhYAqIAAhTIA5AOQAzAOAqAOQArAQgZAJQgxALg4ADIg8ACIgDAAg");
	this.shape_242.setTransform(-249.4,8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#7B5731").s().p("AI1ASIiEgTIjFAAImXgbIilgFIlOAFIkfgKILXAAIFNAFIFUAQIBJAJIBmAKIBpAMICbARIBQAIg");
	this.shape_243.setTransform(-161.4,3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#7B5731").s().p("Aq7AXIgwgBIhbgDIg6gBIhTAAIhHAAIj/hIID/A1IFfgFIB/AYIBvAAIC1gLIDvAQICDgKIDaAAIDpAKIEkgFIHZAVInkAAIkJAGIjpgGIjlAAIiIALIkFgQIkEAVg");
	this.shape_244.setTransform(-127.6,6.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#7B5731").s().p("AkTAaIi/gVIl5geIGJAFIC0ALIGyAAIFUgLIFUAGIquAog");
	this.shape_245.setTransform(-10.3,3.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#7B5731").s().p("AhxAAIC4gJIDFgVIFOgGIiUAVIiVAAIl3AuIkkAAIjvAGg");
	this.shape_246.setTransform(73.3,5.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#7B5731").s().p("AkbBKIhNgBIiUgDIhYgBIg0ABIhRADIgqABIk5AAIhQAAIhwAAQgkAAgzgDIg4gCIiVgWInoAGIHzggICfAaIJuAAICvgFIITAFIF8gQIEUAGICwgLIHDAAIE/guIDfgQIEuglIi/ArIiaAVIjfATIkJAgIjVAAImzAQIkfAAIlcAQg");
	this.shape_247.setTransform(-52.5,9.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#7B5731").s().p("AgcAvIlogDIkVAIIk1gFIiKAFIiogDIizgOIh9gEIkZAAIiAAGIAAgPICEgFIGbAFICqARICoACIDxgGIDMAGIClgIIGxACIBdAJICagNIL3gIIDcgHIBtAGIB+gKIDrACIA9gRIEygwIhaAbIjhAdIgrASImWAMIoHAAIl/AGIkSALg");
	this.shape_248.setTransform(-58.7,14.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#7B5731").s().p("AnKAsIEsgyIB0gQICMgYIDcgEIAwAAIBMAAQAhABA2AEIA8AEInlAFIiCAWIiAAOIkOAvIikAEg");
	this.shape_249.setTransform(147.7,9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#7B5731").s().p("AlGgIIDxgDIDSALIBKgBQBFgBA7ADIjHALg");
	this.shape_250.setTransform(235.5,4.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#7B5731").s().p("AvqBDIh8AEIlkgIIhxgLIhGgBIhLgCIgyAAIgsAAIiKgHIhfAAICggKIC3AIIBAgCIBKgCQAOAAAnAGIAsAHIFrAKICDgFIBsAJIH8gJIBfgFIBmAAICSAKID2gIIEfADICYgCIF/gQIBcAGIB6gMIE9gFIBLgWIDJgeIAugMIBHgQQBAgPAwgEIhJAUIhdAbQgXAHgcAEIgeAEIgqAGIguAGIgtAFIgoAIIhHATInDAUIhgAAIhYAHIgsAAIhYAAIg/AAQgbAAg6ADIhBADIqHAEIiBgIIhtAAIhRAIIoIAHg");
	this.shape_251.setTransform(-51.6,15.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#7B5731").s().p("AjMgGIBwgKIF1gEIgqAMIlNAAIh3ALIhDASg");
	this.shape_252.setTransform(178.2,8.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#7B5731").s().p("ABRAAIgoAAIgnAEIiUgEIBfgEIAzADIArgJIAsAAIA8AKIAAALg");
	this.shape_253.setTransform(266.6,6.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#7B5731").s().p("ACcAGIgsgFIiQAAIglAJIirgKIhCAEIBEgNIAqAHQAmAEAUgBQARgBAUAAIAVABIAsgIICSAAIBjAIIBiAFIguABIg2ADIgzgEg");
	this.shape_254.setTransform(234.6,7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#7B5731").s().p("Ag4gCIBxgCIAAAJg");
	this.shape_255.setTransform(275.7,7.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#7B5731").s().p("AgBAGIgbgBIhVgJIBVgCICOAJIgiACIgtACIgkgBg");
	this.shape_256.setTransform(245.4,8.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#604834").s().p("AiJAGIhegCIiAgRICFAGIAnAAIAsAAIAtAEIAoADIA6ACIAkAGIDCgZICCAOIiggCIhkARIhVAGg");
	this.shape_257.setTransform(245.3,9.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#604834").s().p("AhMAAIgPgSQAdADAMAJQAMAHgBACICDAEIhPAIIgaACIgmACQgLgCgOgRg");
	this.shape_258.setTransform(211.6,24.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#7B5731").s().p("AgQADIhDAIIgjgGIB2gPIAmAEIBRgCIAAATg");
	this.shape_259.setTransform(269.2,11);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#7B5731").s().p("ADOARIi7AFIydAGIiOgRIlZgVIAAgRQAhABBvAHIDXANIBvAGIEmALIDGAAIODgPIEmAJINdAAIEbgPQgmALhqAGQhqAGh7ACQh8AChZAAIhdAAInRALg");
	this.shape_260.setTransform(-93,26.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#7B5731").s().p("AiDA+I0SAGIlvgXIjmgJIgOgNIEhALIEhARIJCAAICNAFIDogLIEhgFIEZAWIDdgLIJeAAICkgRIIlgRQADgCBBgRQA/gSBUgGQBVgHBFgTQBFgRAEgDQgmAdhUATQhVAVhIAJIhNALIh4AXIkEAAIjSAQIivAGIlDAAIn+ALg");
	this.shape_261.setTransform(-55,18.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#7B5731").s().p("AuhBRIhVgBQCMgCCLgQQDCgfC7gwQAlgLAdgPQAdgPAmgHQBjgGBkgCQhMAMhMAOQgmAFgoAAQglAAgNAIQgNAHgbAMQgwAPgwAJQgxAKguAXQhMAkhbAAQhVADhWAAIg6AAgAPxgFQhHgOhEgSIgtgEIAPAAQBZAABQAPIAHAEIAAARgAFjgqQhZgHhggQQhHgMhEABQCjgKCiARQCaASCfAJIAWAAQhQAChOAAQhZAAhZgCg");
	this.shape_262.setTransform(179.8,17.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#604834").s().p("AidAAIA/gQIAtAAIBLAAQAkgBAlgDIAngEIAdgBQAbgCAQAAIgDAeIgvgFIhTgEIhbALIhegFIhlAcg");
	this.shape_263.setTransform(260.6,49.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#604834").s().p("ApCAlIAAgOICIgEIFwgeIHhgZICtALIi5AAIiwASIh2AAIlHAeIjmAOg");
	this.shape_264.setTransform(-199.9,41.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#604834").s().p("AAAAJIiogIIjRgBIg2ABIAAgTIGyADIBaALIA6AAIASgOIA7ADIB2AFIBWADIiqAHIiIATg");
	this.shape_265.setTransform(-215.1,63.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#604834").s().p("AlzgNICbANIDUAGICLgDICegJIBPAQIrnAEg");
	this.shape_266.setTransform(-221,78);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#7B5731").s().p("Aq9AMIFBgQIHdgLIBUgBQBNgCA6AAQAoAABbAKICqARIBVAKg");
	this.shape_267.setTransform(-112,77.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("ALZAMQgEAAgzgDQgzgCg6gDQg6gDgXAAQgiAAgugBQgtAAgFAAIiegLIj+AAIqegLIAAALIJWATIFxgDIESASg");
	this.shape_268.setTransform(-185.7,72.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#775A3F").s().p("ADvAFIlxADIpWgTIAAgLIKeALID+AAICeALIAyAAQAuABAiAAQAXAAA6ADIBtAFIA3ADIjYALg");
	this.shape_269.setTransform(-185.7,72.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#7B5731").s().p("AFdAeIhegSIjUgXIjEALIkrgHIjqAHIEcgdILSAHICFAPIDqAiIhLADg");
	this.shape_270.setTransform(-54.4,71.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#604834").s().p("AGpAgIgSgHIh4gLIhOADIiDgDIkwgQIh+gEIhGgFIhNgGQgPAAg2gDIg9gEImFgSIHGAAIEZAWID4ADICyAPICGgPIDDAbIC3AAIBPAAIBeAAQAMABAuAIIBYAPIAtAJg");
	this.shape_271.setTransform(-8.7,77.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#604834").s().p("AOrArIiFgWIgsgIIhWgPIg2gLQgQgDgngCIgtgCIh7AHIijgHImRAEIhsgPIhsAWIh3AAIhogLIhhAHIhagOIoAgEIIVgHIA9AHIBIgHIBXAHIDYgDIA5gLIB3ALIDhADIC7gDICbADIBxgDIB2AHIC/AiIB3AOIDYAHICKASg");
	this.shape_272.setTransform(-66.2,69.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#604834").s().p("AgaARIgsAAIhRAAIhHAAIlTgRIFbADIA6gDIBIgCIAoAAIAcAAICcgPIEnAEIAhAHIAlgFQAigFAWgBIg9AYIldgEIiQAOIghAAg");
	this.shape_273.setTransform(-88.3,43.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("AMxAYIi7APIj5ALInAgIIkAAEIiQALIiigWIiFAAIhwALIhhgLIhhAAIiQAHIAAg7QAIABBGADQBGADAjAAQAeABAgABQAhACACAAQAFABAyAFQAzAGAqAAQAqAAAsAAQAsAAADAAIBTgDQAHgBA4gDQA4gGASgGQARgGA1gGQA1gGAOAAQAPgCA6gJQA7gJAXgCQAaAABLAAQBRgFASAFQAJAHAVALQAVAMARAGQARAHAQAKQAQAMACACIgWAKIBogDIA6gSQAEAAAjAAQAjAAAMAAQAKAAAYAAQAYAAASAAQApAAAYAAQAMAAAcAAQAdAAADAAIDxAAIBTAHIBhAAICtALg");
	this.shape_274.setTransform(-136.9,55.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#775A3F").s().p("Ap1AjIiFAAIhwALIhhgLIhhAAIiQAHIAAg7IBOAEIBpADIA+ACIAjACIA3AGQAzAGAqAAIBWAAIAvAAIBTgDIA/gEQA4gGASgGQARgGA1gGQA1gGAOAAIBJgLQA7gJAXgCIBlAAQBRgFASAFIAeASQAVAMARAGQARAHAQAKIASAOIgWAKIBogDIA6gSIAnAAIAvAAIAiAAIAqAAIBBAAIAoAAIAgAAIDxAAIBTAHIBhAAICtALImMADIi7APIj5ALInAgIIkAAEIiQALg");
	this.shape_275.setTransform(-136.9,55.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#7D5E3A").s().p("EgqIAAXIAoABIBNABIAwABIBEAHQA3AHAgABQAgABAwAIIA1AJIFwgLIJSAAIA8AAIBvAAIBDAAIAwACIBQADIApADIDmAAIFXgPIDDAAIB4gLINggPIAygGIBhgKQAygGAQgBQAWgCAdgMIAggPIBCgVICAgpQBCgVARgDIBbgOIBIgLICwADIDRAhID1gLIChAHIEkAkIAAAAIh3gGIiwgMQiNgIgHABIj8AEIhWgNQhOgMgpgEQgdgDgHACIgkABIhEAAIg1AAIgtAAIhDAOQg7ANgVAJQgTAKgpASIgtATIiTA3IhDAJQg6AJgYAAIg/ADIgwABIhkADIjcAIIjfAIIhpACIg5ACIgwADIg5ANIg2AFIg7ADIhCADIg5AEIg6ADIhzATIhfgCIiygDIhmgDIgyABIhTACIgrABIj8AgIkWgVImeALIhvgFQhpgGhpAAQhjABg/AGQg+AGgDACIjfAKIhvALg");
	this.shape_276.setTransform(11.9,26);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#7D5E3A").s().p("AVbBiQhigJhQgMIhUgPIifgFIhaAQIhlgVIjagLIivgVIkPgUIgtgHIhXgPQgugJgRgGQgRgFg9gDIh4gGIg9gBIjbAAIhpAFIjAAAIiAgLIifgFIiKAQIjkgLIDFgKICKgQIE5gGIDfgKIFJAAIB/AKIB1AWIBAgGIDtAlIBgAbIB0AAIEfAOIDaAlICaAAIB6AQICPAbICwAKQgjAHgxAAQgiAAgogDg");
	this.shape_277.setTransform(22.7,70.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#7D5E3A").s().p("ABKAgQghgDgEgCIhPAAIgkAAQgOgBgOgKIgPgMIANgFIAvgVIAogKIBCAtIBNAKQgLAKgXAAIgOgBg");
	this.shape_278.setTransform(111.1,50.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#7D5E3A").s().p("AioAFICBAAIAtgWIA0ABQAuAAANABIAdALIAYAHQgJAGgVAAIgXAAIgygJIgaAAIgfAAQgGABgPAIIgRAIg");
	this.shape_279.setTransform(262.2,60.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#7D5E3A").s().p("AjuASQACgCgFgLQgFgJgnAAIAzgRIA1AHIAtAAIA8AGIAXABIAgABIAfABIAYABIApAEIASgDIAWgDIAWgBIAXgBIAqAAIAkAAIADAAIAiAAQAYABgdADIgkAEIh1AFIhiALIhEgJIhbgEIg+AKQABACgIAEQgDADgGAAQgIAAgMgEg");
	this.shape_280.setTransform(248.9,34);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#7D5E3A").s().p("AgMA5IgPgCIgPgCQgHgIgRgHQgNACghACQgmACgJACIg3AAIgcAFQgVABgFgBIgsAAIgPgaIgYgFQgUgFgBgFQASgQAhgCQAhgCADABIBkgTIAagLIAAALIAVANIDXgJIAvgEQApgDAMgDQAMgEAsgEIAygFIBagJIAABEIgLALQgJAFgTAGQgNAIgEAJIhsAAIgQAAIgUAAIgiAAQgUgBAJgBIgYAAIgsAAQghAAgOAGQgJACgJAAIgHAAg");
	this.shape_281.setTransform(244,42.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#7D5E3A").s().p("AhSAfIgRgaQgDgFA2gRIBRgPQAIADAcAMIAgAQIgWgEQgTgCgPAHIgoAWIgtALg");
	this.shape_282.setTransform(197.6,49.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#7D5E3A").s().p("AmFA/IgygTIgtgHQgpgHgWgSIAmgDQAigDAWAAQAVAAAfADIAiADIAoAAQAjgBAPgDIArgOIAfgOIAQgKQAOgIAGgDQAQgIAGgFIAggEIAsgNIAkAAIhmAaIgMAPIAtgJIAhgCIBFgVIAVgCIAeAAIhaAXIAXAGICNgEIAkgTIAVAAIAkgIIARAAIgZAIIhCAPIANACICAAAIAogLIArgGIBqAEIARAJIAOAAIAYgJIATAAIAABLIhBgNQg7gJgYAAQgUABgZAGQgaAGgGAAIgwACIgwADIggAEIgbAEIhpACIhBALIgnAAQgBgCgOACQgJACgVACIgXACIAogNIAXgCIAdgCQAJAAAVgFIAZgFIA6gJIhpAGIhAAJIg+APIgdANIhNAGIgrALIgsAEg");
	this.shape_283.setTransform(226.5,55.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#7D5E3A").s().p("Ah+AEIF4gUIluAcIiGAFg");
	this.shape_284.setTransform(255.8,37.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#7D5E3A").s().p("AhYAAIAdgCIAhgDIAkgFIAigFIA8AAIikAVIgrALg");
	this.shape_285.setTransform(227.3,38.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#7D5E3A").s().p("AhrAhIAwgQQAqgOAKgCQAHgBAQgGIAUgIIBCgPIATgYIhAAAIBVgEIAvgGIgxANIgVAOIgRARIg+ALIgzATIixA1g");
	this.shape_286.setTransform(205.2,41.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#7D5E3A").s().p("AhrAgQAQgPARgIIAhgNIASgIIAVgFIAagGIA2gOIAwgLIiIAsIg7AVIg4AgIASgRg");
	this.shape_287.setTransform(196.4,43.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#7D5E3A").s().p("AhNAiQgLgHgPgaIgRgdQAHgBATAGQAKADAlgDQAWgBAcgGIAhgGQgFAYgPAHQgOAFgCAAIAAAAIAAAAIAVAGIAuAAIA2ANIgVgCIgegCIgIABQgjALgbAFIgaACIgRACIgHABQgKAAgRgDg");
	this.shape_288.setTransform(178.6,51.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#7D5E3A").s().p("ACQCPIgqgBIg2gBQgSABhFgDQgcgCg2gHIhkgPIgvgIIglgGIgsgJIhBgOIg/gNIgigGIgdgFQgJgDgbgDQgOgBglgKQgkgJgNgGQgMgGgQgOIgRgOIgagPIgXAAIgNgIIBChPICEgTQAFgJAfAAQAPAFAXAAIAaAAQgaAMgUACIgXADIgkAKIgKAeIAPAoIgDAPIAMAaIBOAgIBEARIAfAJQAdAJAkAHQAcAFBjAMIC8AVIBfALICJgEICjgNID7gKIB5ARIAkgFIAAANIgdAGIgfAAIgZgEIgIgEIgWAAQgTgBgKgBQgLgBgRABIgTACIgeAAIgVAAIgcAAIgZAAIgSAAIgiADIguADQgMABgQAEIgRAEIgqAAIg0AAQgJAAgSAEIgTAEg");
	this.shape_289.setTransform(202.9,58);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#7B5731").s().p("AIXE9IhRgFQgSAAgugFIg1gGIjCgGIgogFIhMgJIgsgFIgvgFIhPgJIgpgFIgdAAIgqAAIgmAAIggAAIgggFIgZgGIgZgIQgWgGgPgDIg9gEIg/gFIhKgIIh2gOIg+gHIgzgCIg8gDQhEgCg8gjIhyhDQhcgnhegmQAlgMAtgEQAugDAogNQBIggBLgZQBRgPBRgIQAegHAdgPQAbgPAfgFQAnAAApAEQBzgEB0ABQCIAFBCgIQBBgIATgLQASgJAzgVIBkglIAxgTIA4gWQA0gUAdgJQAcgGAogDIA2gCIA1ABIAqACIAkgDIApgCIAzAIIA1AIQANABA3AIIBHALQARACBAACIBMADIAuACIBRADIArABIAxADQAtACAmAAQApABBCAFIBKAGIikgEIixACIihgCIg3gFQgzgEhCgEQg9gCgigHQgjgFgvgNQgwgMgJADQgJADgNACIhPABIhfADQgkABg/AWQg+AVgWAYQgTAXgZATIgcAUQgzAZhSAMQhSAMgPgBIgxAEIg8ADQgNAAgsAGIhVALIgrAGIhWAWIhWAiIhkAAIiBATIgrAHIhQALIgvAHQgJACgQAIIgSAJIA1AVIAnANQAmAMAwAMQAwANAeAYQAeAYABACIBuAfIBkADIBxgCIBKAHIBRAdIAiAAIAtAAIAtAAIArAAIBNAJICDARIBGAJIDBAVIEyACIBDAAIBRAAQAVgBA8gIIBDgIIAugBIBXgBIA1AAIAwAEIArAEICBAAIBRgEIAAAUIibAGIgnAAIgwAAIg0AAIg2AAIg1AAIgpAAIk2AhIhGgDg");
	this.shape_290.setTransform(145.3,46.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#7B5731").s().p("AkYBwQg/gKgsgJQgrgJg4gPIg8gQIhvg+IARgkQgDAAgRgIQgRgHAOgNQATgNAXgGIAYgGIAbgMQAYgKANgCQALACATAOQANAKAJAEIgYgGQgcgHgRALQgPAOgGAPQgHAOAAACIBRA7IgPAPQAHAEBYAcQBZAdBSALQCWAPAngCQAWgBAjgFIA2gJIBCgHIA5gFIArAAIAsAAIApgCIAqgBIAoAAIAnAAIAhABIAhACIAhgCIAagBIAUAAIAbAAIAYAAIATAAIAdgCIAAAYIgvABIg7ABIhKgIQg6gGgXgBIhPAAQg5AAgeAEQgUAEgxAFIhdAKIg1AFIg4ABIhmADIhBACQgVgBhAgKg");
	this.shape_291.setTransform(214.2,55.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#7B5731").s().p("Ag5AQQApgCAjgOQAkgOADgCQgUAXgrAFQgnAFgKAAIgDgBg");
	this.shape_292.setTransform(149.8,33.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#7B5731").s().p("AARAZQg9gegJgGIhTgVIA8AAIAoAIQACAGARAJIAeAEIANAFQALABAGABQAHgCAfAAQAfgCAZAbQgEACgqAFIgYABQgbAAgXgIg");
	this.shape_293.setTransform(191.5,28.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#7B5731").s().p("Aj7ACIBmgIIBCAAIAQABIAWABIAcAAIBZAAIBDgNIDUgCIgCARIjPACIgqALIiugJIiLAFIhGAMIhDABg");
	this.shape_294.setTransform(246.4,30.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#785133").s().p("ApyAuQgDgiAKgcQAPgbA0gQQA0gQAogEQAqgEA/ACIBVAEQAZABBAAJIBIALIA5AEIBYAHIBQAHIAwADID4AAIBBABIBSABIArAAIAZAAIAAALIgbAFQgYAEgLgBIhDgDIhxgFIg8gCIjQgCIgiAAIgrAAQgLAAgWgDQgUgDgJgFQgJgEgVABIgZABIgYAAQgWgBgJgBIgjgHQgbgFgKgBIg3gEIhagHIgvgEIguAIQgtAHg6APQg0ATgEApQgFArAEAGIgTAMIgFgkg");
	this.shape_295.setTransform(218.5,25.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#785133").s().p("ApPAiIALgeQgBgDAMgRQAMgTAngGQAqgDAogBIArAAIBAAIIAqAAIANAAIATAAQAKABAaAIIAeAIIAaAYQACAGAVAHIAiAAIApgFQAegDASgBQARgBAegGQAegFAVgBQAvADAVAEIAgAFIAaADIEjgGIBvAKIg/gBIhagBIg3AAIgaAAIioALIgtgJIgbgFQgZgFgHAAIgvAEIgrAEIhXAPIhTAEIgzgZIhCgTIiigCIgOAIIgDANQgBAAgGgGQgFgIAMgMIAAgMIgzAEIgfAGIgRAYIgYAZIBEgZIhGAqIgeACg");
	this.shape_296.setTransform(220.8,25);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#987549").s().p("EgqTAHTIAAulMBUnAAAIAAOlg");
	this.shape_297.setTransform(11.5,44);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#7B5731").s().p("AiGAMIgKgMIgYgSIAaAGIAxAFIAugDIBjgEQA3gDAegKQAdgKADgCQgWAYgmAEQgmAFgFgBIhdAPIgfAAQgbAAgOACQgMADgHAMQgHANAAACg");
	this.shape_298.setTransform(140.9,38.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#7B5731").s().p("ACaAoIgkgCQgSgEgdgSIgggTIgvADIgmAEIg8gDIgaAHQgaAFghAEIhJAEIgqACIAHgLICQgIIAvgJIA8AAIBbgKIAPAMIA5AeIA2AHIAwgLIARgGQAQgFAOgLQAOgJAOgQIAPgRQgPAkgbAOQgbAOgEAAIg5ATIgXgCg");
	this.shape_299.setTransform(158.3,42.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#7B5731").s().p("AIgCeIhCgIIhXAAIiNgZIg7gGIhLgHQgWgDg5gNIg9gOIhBgLIh6gWIhJgMIgwgKQgcgHgcgDIgpAAIgqAAIg7ACIgVAAIgighIgagIIgTgNIgcgcIAagPIAzgRIBCgBIAigHIA9gCIgigNIAWgFIAdgGQAZgJAJgIIApgBIAxgBIAygDQAmgDAUACQALAAAMgIQgJANgCALQgEAZADABIgzAHIhAARQgZAJgCANQgCANABABIBHAkIA0AOQAvANAPAJQAJAHApAJQAoAJAkAIIAoAIIEQAvIA0ACIBuAZICxAYg");
	this.shape_300.setTransform(127.1,56.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#7B5731").s().p("AjrAjIA1gHIAhgKIA1gBIBGgBQAWgBBUgPQBVgPBHgXQgIAEhaAcQhaAahQAEQiNAFAIAGIgiAEg");
	this.shape_301.setTransform(125.9,33.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("EgrnAeIMAAAg8PMBXPAAAMAAAA8Pg");
	this.shape_302.setTransform(11.8,-6.5);

	this.addChild(this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-267.5,-199.3,558.5,385.7);


(lib.background = function() {
	this.initialize();

	// sofa
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBgJQAXgOAEAAQgkAUgIANIgHAOQAAgWAYgLg");
	this.shape.setTransform(-124.6,116.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8CCCE").s().p("AhZAPQgBgCASgSQASgTAugHIBjALQgJAAguAKQgtAKgHAgg");
	this.shape_1.setTransform(-115.6,117.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8CCCE").s().p("AhjAfQgGgIAEgUIAGgUQAHgDBJgHQBHgIAvAPIgwAEQgtADgsAHQguAGgIALQADAPA8gMIBCgNIhAARQgyANgTAAIgHAAg");
	this.shape_2.setTransform(-100,120.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2.6,1,1).p("AEPgMIlUg2QgCgBgrgCQgqgDgwAIQgwAIgWAgIFHBfQADAAAzgEQAygEA0gIQA1gIAJgMQAIgpgIgGg");
	this.shape_3.setTransform(-115.8,117.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkSgYQAWggAwgIQAwgIAqADQArACACABIFUA2QAIAGgIApQgJAMg1AIQg0AIgyAEIg2AEg");
	this.shape_4.setTransform(-115.8,117.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B22904").s().p("AmSDBQgMh7AehMQAehPAiglQAjglADABQAJgDCBgRQCCgRCUAEQCXAEBHA8QA6BCgJBIQgIBKgeA0QgeA1gEADg");
	this.shape_5.setTransform(-158.9,147.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2.2,1,1).p("AGHiNQhOhDimgFQijgEiPATQiOATgJADQgEgBgmAqQgmApghBXQghBUANCJIMpAAQAEgDAhg6QAhg7AKhSQAJhQhAhJg");
	this.shape_6.setTransform(-156,146.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF3800").s().p("Am7DWQgNiJAhhUQAhhXAmgpQAmgqAEABQAJgDCOgTQCPgTCjAEQCmAFBOBDQBABJgJBQQgKBSghA7QghA6gEADg");
	this.shape_7.setTransform(-156,146.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B22904").s().p("AmfKzIADzBIBegnQBaglB8gnQB5gnBqgIQBqgJAkA1QAhBBAbDPQAcDPAUD0QAVD1ALCzIALC8g");
	this.shape_8.setTransform(-242.1,97.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2.2,1,1).p("AGRh2QAWDOAPDGQAPDGAICCQAJCDAAAFIurAAIAE0pQAFgDBlgoQBlgoCLgqQCKgqB3gKQB4gJAqA6QAdA1AaCgQAZCgAVDQg");
	this.shape_9.setTransform(-236.7,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DF3800").s().p("AnVLuIAE0pQAFgDBlgoQBlgoCMgqQCJgqB3gKQB4gJApA6QAeA1AZCgQAaCgAWDQQAVDOAPDGQAQDGAHCCIAJCIg");
	this.shape_10.setTransform(-236.7,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2.5,1,1).p("AEhg8QB0ASAFAfQgEAehzAZQh0AYiuAGQisAFh1gSQh0gSgFgfQAEgeB0gZQBzgYCugGQCtgFB0ASg");
	this.shape_11.setTransform(-114.2,121);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A8753D").s().p("AkgA9Qh0gSgFgfQAEgeB0gZQBzgYCugGQCtgFB0ASQB0ASAFAfQgEAehzAZQh0AYiuAGIhDABQiBAAhdgOg");
	this.shape_12.setTransform(-114.2,121);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2.6,1,1).p("AEhhEQB0AVAFAkQgEAjhzAbQh0AciuAGQisAEh1gUQh0gVgFgkQAEgjB0gbQBzgcCugGQCtgEB0AUg");
	this.shape_13.setTransform(-114.2,124.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#845424").s().p("AkgBEQh0gUgFgkQAEgiB0gcQBzgcCugFQCtgFB0AVQB0AUAFAkQgEAjhzAbQh0AbiuAHIg7AAQiGAAhggRg");
	this.shape_14.setTransform(-114.2,124.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2.6,1,1).p("AA0CyIhnAAIAAlkIBnAAg");
	this.shape_15.setTransform(-112.4,148.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#845424").s().p("AgzCzIAAllIBnAAIAAFlg");
	this.shape_16.setTransform(-112.4,148.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AvxCiIfjlDI5FFDg");
	this.shape_17.setTransform(-172.7,148.2);

	// rak_buku
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2.5,1,1).p("AgikDIgCIFIBJApIAApVg");
	this.shape_18.setTransform(-165.6,-96.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5B2F0A").s().p("AgkEBIACoDIBHgoIAAJVg");
	this.shape_19.setTransform(-165.6,-96.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2.3,1,1).p("ABfkqIAAJVIi9AAIAApVg");
	this.shape_20.setTransform(-152.3,-96.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#703D0F").s().p("AheErIAApVIC9AAIAAJVg");
	this.shape_21.setTransform(-152.3,-96.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2.5,1,1).p("AO+BKI97AAIAEiTId3ABg");
	this.shape_22.setTransform(-188,-133.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#703D0F").s().p("Au9BKIAEiTId3ABIAACSg");
	this.shape_23.setTransform(-188,-133.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4CACC").s().p("AhSgFIClADIgCAIg");
	this.shape_24.setTransform(-167.3,-148.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C4CACC").s().p("Ag4gFIBxAAIAAALg");
	this.shape_25.setTransform(-164.4,-152.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C4CACC").s().p("AkkAqIAAhTIAoAwIIhAjg");
	this.shape_26.setTransform(-189,-148.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1C85BA").s().p("AgcE4IAApvIAYJXIAhAYg");
	this.shape_27.setTransform(-225.1,-175.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C4CACC").s().p("AhHErIADpVIAZI0IBzAhg");
	this.shape_28.setTransform(-238.1,-173.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B72B06").s().p("AhKE4IAApvIAlJJIBwAmg");
	this.shape_29.setTransform(-256.6,-175.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C4CACC").s().p("AgrAPIAAgdIBXAAIAAAdg");
	this.shape_30.setTransform(-238.3,-194.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C4CACC").s().p("AgrAPIAAgdIBXAAIAAAdg");
	this.shape_31.setTransform(-238.3,-198.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B72B06").s().p("AgrAPIAAgdIBXAAIAAAdg");
	this.shape_32.setTransform(-256.7,-198.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B72B06").s().p("AgrAPIAAgdIBXAAIAAAdg");
	this.shape_33.setTransform(-256.7,-202.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2CF1E").s().p("AgrAPIAAgdIBXAAIAAAdg");
	this.shape_34.setTransform(-274.6,-200.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2CF1E").s().p("AgrAPIAAgdIBXAAIAAAdg");
	this.shape_35.setTransform(-274.6,-205.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2CF1E").s().p("AhIFUIAAqnIAqJ4IBnAvg");
	this.shape_36.setTransform(-274.7,-178.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("AEyA7IpjAAIAAh1IJjAAg");
	this.shape_37.setTransform(-188.6,-148.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AkxA7IAAh1IJjAAIAAB1g");
	this.shape_38.setTransform(-188.6,-148.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2,1,1).p("AAolFIAAKKIhPAAIAAqKg");
	this.shape_39.setTransform(-225.1,-175.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2D9BE0").s().p("AgnFFIAAqJIBPAAIAAKJg");
	this.shape_40.setTransform(-225.1,-175.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2,1,1).p("ABXlFIAAKKIitAAIAAqKg");
	this.shape_41.setTransform(-256.5,-175.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DF3800").s().p("AhWFFIAAqJICtAAIAAKJg");
	this.shape_42.setTransform(-256.5,-175.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2,1,1).p("ABXlgIAALBIitAAIAArBg");
	this.shape_43.setTransform(-274.6,-178.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFF01F").s().p("AhWFhIAArBICtAAIAALBg");
	this.shape_44.setTransform(-274.6,-178.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("ABSk0IAAJpIijAAIAAppg");
	this.shape_45.setTransform(-238.4,-174.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhRE1IAAppICjAAIAAJpg");
	this.shape_46.setTransform(-238.4,-174.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2.5,1,1).p("AO9gRIkDAuI53AEIAAhBId7AA");
	this.shape_47.setTransform(-188,-124.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5B2F0A").s().p("Au9ggId7AAIgBAPIkDAuI53AEg");
	this.shape_48.setTransform(-188,-124.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(96,71,47,0.6)").s().p("AsMk5IYjAAIjwJLI09Apg");
	this.shape_49.setTransform(-204.8,-92.3);

	// begron
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C9CAC1").s().p("AAHAHIgSgDQgNgCAHgJIARAAQARAAADAGQAAAJgIAAIgFgBg");
	this.shape_50.setTransform(-108.7,-11.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#868A83").s().p("AgOACQgBgKAFgEQACALAIgEQAJgDAFAAQACAIgIAIIgKAEQgCAAgKgKg");
	this.shape_51.setTransform(-110,-8.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#868A83").s().p("AgKAZIAIgHIAJgWQgDACgOgCQgQgBAJgWQAHgHAKACQANANAJAGIAAAYIgLAMQgKAKgJAAQgJgCAHgGg");
	this.shape_52.setTransform(-107.8,-9.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#747675").s().p("AgTAAQAEghAjgEQgQANgJAYQADgIgIAAQgEADACAHQAJASAHANIAJAFQgegIgCgeg");
	this.shape_53.setTransform(-111.3,-9.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A8AAA5").s().p("AgoAAQAEgiAkgDQAlADAEAiQgEAjglADQgkgDgEgjg");
	this.shape_54.setTransform(-109.2,-9.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2A261F").s().p("AgvAAQAEgoArgEQAtAEAEAoQgFApgsAEQgrgEgEgpg");
	this.shape_55.setTransform(-109.1,-9.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C9CAC1").s().p("AAHAHIgSgDQgNgCAHgJIARAAQARAAADAGQAAAJgIAAIgFgBg");
	this.shape_56.setTransform(-108.7,-68.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#868A83").s().p("AgOACQgBgLAFgCQACAKAIgDQAJgEAFAAQACAIgIAHIgKAGQgCgBgKgKg");
	this.shape_57.setTransform(-110,-65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#868A83").s().p("AgKAZIAIgHIAJgWQgDACgOgCQgQgBAJgWQAHgHAKACQANANAJAGIAAAYIgLAMQgKAKgJAAQgJgCAHgGg");
	this.shape_58.setTransform(-107.8,-66.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#747675").s().p("AgTAAQAEghAjgEQgQANgJAYQADgIgIAAQgEADACAHQAJASAHANIAJAFQgegIgCgeg");
	this.shape_59.setTransform(-111.3,-66.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A8AAA5").s().p("AgoAAQAEgiAkgDQAlADAEAiQgEAjglADQgkgDgEgjg");
	this.shape_60.setTransform(-109.2,-66.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2A261F").s().p("AgvAAQAEgoArgEQAtAEAEAoQgFApgsAEQgrgEgEgpg");
	this.shape_61.setTransform(-109.1,-66.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C9CAC1").s().p("AAHAHIgSgDQgNgCAHgJIARAAQARAAADAGQAAAJgIAAIgFgBg");
	this.shape_62.setTransform(-109.5,91);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#868A83").s().p("AgOACQgBgKAFgDQACAKAIgEQAJgDAFAAQACAIgIAIIgKAEQgCAAgKgKg");
	this.shape_63.setTransform(-110.8,94.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#868A83").s().p("AgKAZIAIgHIAJgWQgDACgOgCQgQgBAJgWQAHgHAKACQANANAJAGIAAAYIgLAMQgKAKgJAAQgJgCAHgGg");
	this.shape_64.setTransform(-108.6,93.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#747675").s().p("AgTAAQAEghAjgEQgQANgJAYQADgIgIAAQgEADACAHQAJASAHANIAJAFQgegIgCgeg");
	this.shape_65.setTransform(-112,93.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A8AAA5").s().p("AgoAAQADgiAlgDQAmADADAiQgDAjgmADQglgDgDgjg");
	this.shape_66.setTransform(-109.9,93.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2A261F").s().p("AgwAAQAFgoArgEQAsAEAEAoQgEApgsAEQgrgEgFgpg");
	this.shape_67.setTransform(-109.9,93.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C9CAC1").s().p("AAHAHIgSgDQgNgCAHgJIARAAQARAAADAGQAAAJgIAAIgFgBg");
	this.shape_68.setTransform(-108.7,40.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#868A83").s().p("AgOACQgBgKAFgDQACAKAIgEQAJgDAFAAQACAIgIAIIgKAEQgCAAgKgKg");
	this.shape_69.setTransform(-110,44.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#868A83").s().p("AgKAZIAIgHIAJgWQgDACgOgCQgQgBAJgWQAHgHAKACQANANAJAGIAAAYIgLAMQgKAKgJAAQgJgCAHgGg");
	this.shape_70.setTransform(-107.8,43.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#747675").s().p("AgTAAQAEghAjgEQgQANgJAYQADgIgIAAQgEADACAHQAJASAHANIAJAFQgegIgCgeg");
	this.shape_71.setTransform(-111.3,43.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A8AAA5").s().p("AgoAAQAEgiAkgDQAlADAEAiQgEAjglADQgkgDgEgjg");
	this.shape_72.setTransform(-109.2,43.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2A261F").s().p("AgvAAQAEgoArgEQAtAEAEAoQgFApgsAEQgrgEgEgpg");
	this.shape_73.setTransform(-109.1,43.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C9CAC1").s().p("AAHAHIgSgDQgNgCAHgJIARAAQARAAADAGQAAAJgIAAIgFgBg");
	this.shape_74.setTransform(-108.7,-172);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#868A83").s().p("AgOACQgBgKAFgEQACALAIgEQAJgDAFAAQACAIgIAIIgKAEQgCAAgKgKg");
	this.shape_75.setTransform(-110,-168.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#868A83").s().p("AgKAZIAIgHIAJgWQgDACgOgCQgQgBAJgWQAHgHAKACQANANAJAGIAAAYIgLAMQgKAKgJAAQgJgCAHgGg");
	this.shape_76.setTransform(-107.8,-169.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#747675").s().p("AgTAAQAEghAjgEQgQANgJAYQADgIgIAAQgEADACAHQAJASAHANIAJAFQgegIgCgeg");
	this.shape_77.setTransform(-111.3,-169.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A8AAA5").s().p("AgoAAQAEgiAkgDQAlADAEAiQgEAjglADQgkgDgEgjg");
	this.shape_78.setTransform(-109.2,-169.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2A261F").s().p("AgvAAQAEgoArgEQAtAEAEAoQgFApgsAEQgrgEgEgpg");
	this.shape_79.setTransform(-109.1,-169.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9E744A").s().p("AhTAAQAIgtBLgFQBMAFAHAtQgHAuhMAFQhLgFgIgug");
	this.shape_80.setTransform(-109.1,-169.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#AD8355").s().p("AhIA0QgRgRgPgSQgmgMgrAHQAwgNAngeQAqgkA4AAQA9gCAoAsQAJAKAJAIQAaAQApAOQgQABgPgGQgOgGgQACQgaANgXAVQgjAUgpAAIgFAAQgkAAgfgQg");
	this.shape_81.setTransform(-109,-169.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9E744A").s().p("AhSAAQAHgtBLgFQBMAFAHAtQgHAvhMAEQhLgEgHgvg");
	this.shape_82.setTransform(-109.8,-65.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AD8355").s().p("AhIA0QgRgRgPgSQgmgMgrAHQAwgNAngeQAqgkA4AAQA9gCAoAsQAJAKAJAIQAaAQApAOQgQABgPgGQgOgGgQACQgaANgXAVQgjAUgpAAIgFAAQgkAAgfgQg");
	this.shape_83.setTransform(-109.7,-65.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C9CAC1").s().p("AAHAHIgSgDQgNgCAHgJIARAAQARAAADAGQAAAJgIAAIgFgBg");
	this.shape_84.setTransform(-108.7,-109.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#868A83").s().p("AgOACQgBgKAFgEQACALAIgEQAJgDAFAAQACAIgIAIIgKAEQgCAAgKgKg");
	this.shape_85.setTransform(-110,-105.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#868A83").s().p("AgKAZIAIgHIAJgWQgDACgOgCQgQgBAJgWQAHgHAKACQANANAJAGIAAAYIgLAMQgKAKgJAAQgJgCAHgGg");
	this.shape_86.setTransform(-107.8,-106.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#747675").s().p("AgTAAQAEghAjgEQgQANgJAYQADgIgIAAQgEADACAHQAJASAHANIAJAFQgegIgCgeg");
	this.shape_87.setTransform(-111.3,-107);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A8AAA5").s().p("AgoAAQAEgiAkgDQAlADAEAiQgEAjglADQgkgDgEgjg");
	this.shape_88.setTransform(-109.2,-106.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2A261F").s().p("AgvAAQAEgoArgEQAtAEAEAoQgFApgsAEQgrgEgEgpg");
	this.shape_89.setTransform(-109.1,-106.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9E744A").s().p("AhSAAQAHguBLgEQBMAEAHAuQgHAuhMAFQhLgFgHgug");
	this.shape_90.setTransform(-108.3,-107);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#AD8355").s().p("AhIA0QgRgRgPgSQgmgMgrAHQAwgNAngeQAqgkA4AAQA9gCAoAsQAJAKAJAIQAaAQApAOQgQABgPgGQgOgGgQACQgaANgXAVQgjAUgpAAIgFAAQgkAAgfgQg");
	this.shape_91.setTransform(-108.3,-107);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#A3794F").s().p("AhTAAQAIgtBLgFQBMAFAHAtQgHAuhMAFQhLgFgIgug");
	this.shape_92.setTransform(-109.1,-8.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AD8355").s().p("AhIA0QgRgRgPgSQgmgMgrAHQAwgNAngeQAqgkA4AAQA9gCAoAsQAJAKAJAIQAaAQApAOQgQABgPgGQgOgGgQACQgaANgXAVQgjAUgpAAIgFAAQgkAAgfgQg");
	this.shape_93.setTransform(-109,-9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9E744A").s().p("AhTAAQAIguBLgEQBMAEAHAuQgHAuhMAFQhLgFgIgug");
	this.shape_94.setTransform(-108.3,42.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#AD8355").s().p("AhIA0QgRgRgPgSQgmgMgrAHQAwgNAngeQAqgkA4AAQA9gCAoAsQAJAKAJAIQAaAQApAOQgQABgPgGQgOgGgQACQgaANgXAVQgjAUgpAAIgFAAQgkAAgfgQg");
	this.shape_95.setTransform(-109,42.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AD8355").s().p("AlOAMQkdgFjigVIabALIi2AFQiwAHkNAEQh5ACh7AAQiXAAiegDg");
	this.shape_96.setTransform(174.5,76.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1F2116").s().p("EAjkAAOIlygFIocACMgoagAFIlxgFIkJAFIvtgFIgNgOMBZxAAAIAAAbg");
	this.shape_97.setTransform(5.4,-37.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#AD8355").s().p("ABqAGIqAgLIDAgJIDFAGIDqAAIBaAIICCAGIDiAAIkJAJg");
	this.shape_98.setTransform(200.7,8.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#AD8355").s().p("AAiAQQg2gIgtgIQgtgJAagFQA0gGA8gCIBDgBIAAAvIg9gIg");
	this.shape_99.setTransform(281.8,6.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#AD8355").s().p("AhGAUIlpgJIhOgFIhrgGIhwgHIikgJIhVgFIGhAMICNALIDQAAIJeASIFjgDIDkAFg");
	this.shape_100.setTransform(184.7,9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#AD8355").s().p("ARbABIl0ADIiHgNIk2AGIj9gJIiLAGIjoAAIj3gGIk2ADIn1gMIMagEIHqAEICRgHIETAJIEVgLICSASIAyABIBhABIA9ABIBYAAIBMAAIEOApg");
	this.shape_101.setTransform(152.8,7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#AD8355").s().p("AHeAMIi/gGInMAAIloAGIlpgDILWgXIHMAAIJbAdg");
	this.shape_102.setTransform(28.4,8.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#AD8355").s().p("AngAJICeAAIGNgaII0gDIrKAaIjQAMIljADg");
	this.shape_103.setTransform(-60.3,7.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#AD8355").s().p("A+6ASIKqgpIDgAAIEVgGIHpgDIFygJIDtAAIBSABICcABIBfABIA3gBIBVgBIAtgBIFMAAIBVAAIB2AAIBdABIA7ACICdAMIIHgDIoRASIiqgPItNADIoygDImUAKIklgEIi6AGIneAAIlSAaIjtAJIlAAVg");
	this.shape_104.setTransform(73.1,5.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#A3794F").s().p("A/iAOIDvgPIAtgMIaOgQIBXADIR9gDIH1AMIGxgDIAAAIIo/AAIi1gJImxACIjZgDIiuAEInNgBIhhgFIikAHIskAEIjqAFIhzgEIiGAGIj5gBIhBAJIlEAcg");
	this.shape_105.setTransform(79.7,2.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A3794F").s().p("AmFAdIhRAAQgjAAg5gCIg8gEIH/gCIIwgvICugCIiKAEIpOAzIjpACIgzAAg");
	this.shape_106.setTransform(-139.1,5.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#AD8355").s().p("AiEABIhOAAQhJAAg/gBIDTgFIHiAJIiHADg");
	this.shape_107.setTransform(-232.3,8.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A3794F").s().p("EghDAAfIBjgPIA2gGIAhgDIArgDIAxgEIAwgCIArgEIBKgLIKigPIAvAAIBeAAIBCAAIBagCIBGgCIIlgCIGEAEIBXgEIIngEIB3AFICFgCIHwAKIBKABIBRACIA1AAIAuAAID3AEIipAFIjDgEIhDABIhPABIg4gDIgvgEImAgGIiLACIhzgFIqAAJIkGgGIkGAEIkvgCIo4ALIhhgDIiDAHIlPACIhPANIkHAXIhKAJQhEAIg0ADIBNgMg");
	this.shape_108.setTransform(72.1,2.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A3794F").s().p("Aj8AEIFgAAIB/gFIBGgKIhPAOIh4AHImKACg");
	this.shape_109.setTransform(-171.4,6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AD8355").s().p("AibAAIAAgFIBGAFIBUgBICdABIicABIhbAFg");
	this.shape_110.setTransform(-265.3,7.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A3794F").s().p("ADRABQgpgBgUAAQgTAAgUAAIgYAAIgtAEIicAAIjRgGIAxgBIA5gBIA2ACIAvACICZAAIAogEIC1AEIBGgBIhIAGIgtgEg");
	this.shape_111.setTransform(-231.3,6.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A3794F").s().p("Ag7gCIB3ADIh3ACg");
	this.shape_112.setTransform(-274.9,6.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#AD8355").s().p("Ah4AAIAkgBIAwgBIAmAAIAcABIBbADIhbABg");
	this.shape_113.setTransform(-242.7,5.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#AD8355").s().p("Al9ACICqABIBpgJIBbgDIEFAIICIAJIiNgEIgqAAIguAAIgvgCIgrgCIhkgDIjNANg");
	this.shape_114.setTransform(-242.7,5.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A3794F").s().p("AAqgBIiKgCIBTgFIAcgBIApgBQALACAPAIIAPALQg6gIADgEg");
	this.shape_115.setTransform(-206.9,-2.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AD8355").s().p("Ah9AEIAAgJICQAEIBGgEIAmADIh/AIg");
	this.shape_116.setTransform(-268,4.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#A3794F").s().p("AY9AMIjkgIIh1gEIk5gFIyKAIIk5gFIuRAAIksAIQApgGBwgDQBxgDCDgCIDhgBIBjABIHsgHIE+AHIWsgHICWAKIFuALIAAAKIiZgEg");
	this.shape_117.setTransform(115.9,-4.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A3794F").s().p("A/xAOQBZgMBNgEIBSgGIB+gNIEUAAIDegKIQugKIFgAHITngEIJ5ATIAPAHIpkgQIplAAIiWgDIopAKIkqgNIjqAGIqCAAIiuALIpHAJIhHAKQhEALhZADQhaADhJALQhJAKgEABQApgPBZgMg");
	this.shape_118.setTransform(75.7,0.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A3794F").s().p("AltAoQilgLiogEQCngDCmADQBfAEBlAJQBJAHBGAAIhtABQhzAAhzgGgADEAcQApgEAqABQAnAAAOgFQAOgEAcgGQBogMBjgVQBQgUBhAAQB4gDB7ABIBFABQiKACiIAIQjPASjHAaQgmAGgeAJQggAJgnADQhuAEhuACICpgPgAtvAYQheAAhVgIIgHgDIAAgKIAHAAQBKAIBJAKIAxADIgRAAg");
	this.shape_119.setTransform(-174.3,1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#AD8355").s().p("AkEARIidAAIE9gMIB8gPIC4AJIDSgVIjDAdIjDgGIhwAQIhgAGg");
	this.shape_120.setTransform(-81.3,-21.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#AD8355").s().p("AjigJIFHgNICoAAIByAHIDLgQIioAYIk5AAInnAZIhNAMIh+ACg");
	this.shape_121.setTransform(-163.3,-19.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A3794F").s().p("AhBAAIBOAAICogTIhrATIj+AUg");
	this.shape_122.setTransform(-226.8,-17.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A3794F").s().p("AjbgBICLAFIBggGIBkACIBrgPIg4APIhDAKIgvAAIhQAAQgmAAgnACIgqACIgfABIgtABg");
	this.shape_123.setTransform(-258.9,-17.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#AD8355").s().p("AqVAQIEygQICdAAICVgHILHgKIoWAVIijAAIiYAKIiogEIhzAIg");
	this.shape_124.setTransform(16.1,-22);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A3794F").s().p("AiyAFIFlgKIhPAEIidAFQguACggAAQgbAAgQgBg");
	this.shape_125.setTransform(203.8,-18.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A3794F").s().p("ApmAPIDDAAIC7gKIB/AAIDQgLIF9gOICDAAIAAAIIiSACImGARIn9AOg");
	this.shape_126.setTransform(229.5,-13.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#AD8355").s().p("Am4AKIAYgEQAUgEAHgHQAJgJAvgBIA2gCIGDAQIA1gEIA+gEIBGAFQA1AEAHAAIBXAOIiRgGIonACQgHAChFAFIglABQgrAAgcgIg");
	this.shape_127.setTransform(112.7,-17.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#AD8355").s().p("ABfALIj+gJIgTAJIg/gCIh9gCIhbgDIC0gEICRgKICEAGIHKAEIAAALg");
	this.shape_128.setTransform(245.4,-25.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#A3794F").s().p("ADnAAIjigDIk7AGIhUgIIMVgCIAAAPg");
	this.shape_129.setTransform(251.7,-33.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A3794F").s().p("AnZAEIi1gIIhagGIXRAEIpcANIjzACIhZABIiPABQgrAAhggHg");
	this.shape_130.setTransform(136.3,-33.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#AD8355").s().p("AjPAHIiogHIg1AAIhUAAIhWgBIh0gDIg6gCIDlgGIEjAKIGHgCIJ6ALIAAAGg");
	this.shape_131.setTransform(214.3,-30.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A27D4B").s().p("AlTANImFgbIFngCIFFAXIDQgGIE9AEID4gEIktAQg");
	this.shape_132.setTransform(75.2,-30.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#AD8355").s().p("AJXAYIkqgMIkHgCIi9gIIiNAIIjPgOIjDAAIhUAAIhjAAIg9gGIhdgJIgxgEIJ3AGIATAEIB+AGIBUgCIJSANIBJADIBTADIBKACIBAACIGdAKg");
	this.shape_133.setTransform(26.6,-33.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#AD8355").s().p("ACqAUIrQAAIh+gEIjKgTIh+gIIjmgEIiVgKIGGABICNANIAvAFIBbAHIA6AGIA6ADIAwABICDgEICrAEIGqgCIByAJIBzgNIB+AAIBvAGIBngEIBfAJIIfACIo1AEIhCgEIhMAEIjlgEIhcACIg9AGg");
	this.shape_134.setTransform(87.5,-29.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#AD8355").s().p("AnNAIIgigFIgoADQgkAEgXAAIBAgNIE6ACIDRgIIAjAAIAwAAIBVAAIBLAAIFnAJIlvgBIg+ABIhMABIgrAAIgdAAIjXAJg");
	this.shape_135.setTransform(111.1,-14.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#AD8355").s().p("AhAAfIgggLQgWgHgSgDQgsgKgJgGIAWgGIhuACIg9AKIgqAAIgyAAIgkAAIgtAAIhEAAIgqAAIgiAAIkAAAIl3gKIGkgCIFogNINRAAICZgGICsAMICNAAIB2gGIBoAGIEAgEIAAAhIhTgCIhwgCIhCgBIglgBIg7gEQg1gCgtAAIhbAAIgyAAIhYACIhDABQg7AEgTADQgSADg4ADIhHAEQgQABg+AGIhXAGIhrAAIhFABQgaAAgKgBg");
	this.shape_136.setTransform(162.6,-20.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#AD8355").s().p("A9pBTIjdgSIkEAFIisgDIk1gVIB+ADIC7AHQCWAGAGgCIELgCIBcAIIB/AJQAeACAIgCIAlAAIBJAAIA4AAIAwAAIBHgIQA/gHAWgGIA/gQIAwgLICdgfIBFgFQA/gEAYgBIBEgBIAygBIBqgCIDqgEIDrgEIBxgCIA7gBIA0gCIA9gIIA4gCIBAgCIBFgCIA9gCIC3gMIBlABIC8ACIBsABIA2gBIBYgBIAtAAIEMgTIEmANIG3gHIB2ADQBvAEBvAAQBqgBBCgDIBFgFIFjgMIAABIIgrgBIhSAAIgygBIhIgEQg7gEgiAAQghgBg0gEIg4gFIo5AGInDAAIg/AAIh3AAIhGAAIgzgBIhVgCIgsgCIstAJIiAAGIuUAIIg1AEIhmAFIhHAEQgXABgfAHIgiAIIhGAMIiIAYQhGALgSACIhfAJIhNAGg");
	this.shape_137.setTransform(4.8,-4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#AD8355").s().p("ADWA0Ih8gMIhEADIj8gWIhlgPIh7AAIkxgHIjmgVIikAAIkagZIi5gGQBAgGBoAEQBnAFBUAHIBaAJICpADIBfgKIBrANIDnAGIHZAWIAwAEIBcAJQAxAFASADQASADBBACIB/ADIBBABIIigDIExAKICSgKIDyAHIjQAGIiSAJIuXAJg");
	this.shape_138.setTransform(-6.6,-29.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#AD8355").s().p("AhDBJQAvgJgEgcQhBgBgogEQgogFg0gTIgpgDIgogDQAGgBAsAAIBWgCQApgCgEgGQgmgahTgGQhUgGgsgYQBrgBBgAVQBpAQB4gDQDAgDCJA/QhnAIhyAHQg5AGg6ARQgyAOgxAAIgPAAg");
	this.shape_139.setTransform(-83,-19.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#A3794F").s().p("Ag9AKQgwAAgOgBIgfgHIgZgDQAKgDAWAAIAYAAIA0AEIAdAAIAgAAQAHAAAPgEIATgFICVAHIiKAAIgvAMIg4AAg");
	this.shape_140.setTransform(-260.6,-23.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A3794F").s().p("ABSAEIgZgBIgiAAIghgBIgagBIgrgBIgSABIgYACIgYAAIgYABIgsAAIgnAAIgDAAIgkAAQgZAAAfgDIAlgBIDkgJICqAIIBBgGQgEgGAqADQgCABAFAGQAFAEAqAAIg2ALg");
	this.shape_141.setTransform(-246.5,-8.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#AD8355").s().p("AmKgGIALgGQAJgDAVgDQANgFAFgFIByAAIARAAIAWAAIAkAAQAVABgKAAIAZAAIAvAAQAjAAAPgDQANgCANABIARABIAQABQAHAEARAEIAygCQAogBAJgCIA7AAIAdgCQAXgBAEABIAwAAIAQAOIAZAEQAWADAAACQgTAJgjABIgmAAIhrALIgbAHIAAgHIgWgHIjkAFIgxACQgsACgNACQgNACguADIg1ACIhfAFg");
	this.shape_142.setTransform(-241.3,-13.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A3794F").s().p("AhIAKIgigIIAXABQAUABAQgEIArgLIAvgGIAtABIASAOQAEADg6AJIhWAIQgJgBgdgHg");
	this.shape_143.setTransform(-192.1,-17.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#AD8355").s().p("AAjApIBtgPIAOgIIhUAGIhJAMIgVABIghAAIBggNIgagEIiVADIgmALIgXAAIgmAEIgSAAIBhgNIgOgBIiHAAIhXAKIhxgDIgSgFIgQAAIgZAFIgUAAIAAgpIBFAHQA+AEAbAAIAvgDIAigEIAzgBIAygBIAigCIAdgDIDdgHQACABAPgBIAfgDIAZgBIgrAIIgXABIggABIgeADIgbADIg9AFICygJIBhgQICtgMIBBAFIA0ALIAwAEQAsAFAXAJIgoACIg7ACIg3gCIglgCIgpABQglAAgRACQgPACgeAFIgiAIIgRAGIgVAGIgXAHIhRAKg");
	this.shape_144.setTransform(-222.7,-21);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#A3794F").s().p("AhtAJIDbgRIgQAIIgeABIgjACIgnADIgkADg");
	this.shape_145.setTransform(-223.5,-11.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#A3794F").s().p("AiTAeIAWgJIASgKIBCgGIDxgpIhWATIgyAJQgtAIgLAAQgHAAgRAEIgVAEIhGAJIgUAOIBEAAIiMAFg");
	this.shape_146.setTransform(-200.2,-13.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A3794F").s().p("ABKgJIA7gSIgTAJQgSAJgSAFIgjAGIgTAFIgWADIgcADIg5AIIgxAHg");
	this.shape_147.setTransform(-190.7,-14.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#A3794F").s().p("AgQAEQAQgEAAABIgVgEIgyAAIg4gHIAVABIAhACIAIgBQAlgGAcgDIAdgBIASgBQAIgCAcADQAMAEAPAOIASAQQgHABgUgDQgLgCgmACQgYAAgeADIgjAEQAFgOAQgDg");
	this.shape_148.setTransform(-171.9,-18.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#A3794F").s().p("AIfBPIgbAAQAagHAXgCIAXgBIAmgGIAMgRIgQgXIACgIIgLgPIhTgRIhIgKIgigGQgegFgmgEQgegDhogGIjJgNIhlgGIpHAQIiBgKIgmADIAAgIIAggDIA6ACIAJACIAXABIAfABIAdgBIAVgBIAfAAIAXAAIAdAAIAaAAIATAAIAlgBIAxgCQANAAARgDIARgCIAuAAIA1AAIAdgCIAVgDIBBAAIAsABIA6AAIBdACIBWAFIBqAIIAzAFIAnAEIAvAFIBFAHIBCAIIAlAEIAfACIAmAEQAOABAnAFQAnAFAOAEQAMADARAIIASAHIAbAJIAZAAIANAFIhFAtIiMAKQgGAGggAAQgRgDgYAAg");
	this.shape_149.setTransform(-197.7,-22.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AD8355").s().p("AtoCzIg4gEIhHgGIhLgHIhWgCIhRgBIgygBIhVgCIgtgBIg0gBIhYgCQgrAAhHgDIhOgEIIVADIA5ACIB9AFQBAACAkADQAlAEAyAHQAyAGALgBIAWgCIBVgCIBkgBQAnAABCgMQBDgNAWgOQAUgNAbgLIAegLQA4gPBXgGQBXgHAQAAIA0gCIA9gBIA9gEIBZgHIAugDIBcgMIBagTIBqAAICKgMIAtgEIBVgGIAygDQAJgBARgFIAUgFIg5gNIgqgHQgogGgzgHQgygIgggOQgggNgBgBIh1gSIkwgFIhWgRIgkAAIgvAAIgvAAIgsAAIhSgFIiNgJIhLgFIjNgMIlFgBIhGAAIhVAAIhXAEIhHAGIgxAAIhcAAIg3ABIg0gDIgtgDIjfADIAAgLICkgEIAqAAIAzAAIA2AAIA7AAIA3AAIAsAAIFJgTIBKACIBWADQASAAAyADIA4ADIDNADIArADIBQAGIAxADIAyACIBUAGIAsADIAeAAIAsAAIAnAAIAiAAIAhACIAbAEIAaAEIAoAFIBAADIBCACIBQAFIB9AIIBCAEIA2ABIA/ABIB6APQA4AGBCADIBPAEIBQAIIBSAJIBSANQBBAKAoABICAAAQBcABB9AIQBMAFgZAEQgaAEg1ACIg8ACIiSAaIhHAMIhMANIh/AGIjkANIh7AHIleANQgJAHkwgBQiRgDhEAFQhFAFgUAGQgSAFg3ALIhqAWIg1ALIg9ANQg2ALggAFQgcAEgrAAIg6ACIg4gBIgtgBIgmACIgrABIg3gEg");
	this.shape_150.setTransform(-105.7,-15.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#A3794F").s().p("AIWA9IgXgIIAZAEQAfADASgGQAegUgBgFIhWgiIAQgIQgIgChdgRQhdgQhYgGQifgJgpABQgYAAgmAEIg4AFIhHAEIg7AEIguAAIgvAAIgrAAIgtABIgrAAIgoAAIgjgBIgjAAIgjAAIgdABIgVAAIgcAAIgaAAIgTAAIggAAIAAgNIAzgBIA+AAIBPAEQA9AEAZAAIBTABQA8AAAhgDIBIgFIBjgGIA4gCIA8gCIBsgBIBFgBQAWABBEAFIBxALIBpAOIBAAJIB1AjIgSAUIAWAEQASAFgPAHQgUAHgYAEIgaAEIgcAGQgaAHgNAAQgMgBgVgIg");
	this.shape_151.setTransform(-209.8,-21.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A3794F").s().p("AAHgGQAwgDAGABQgrABglAHIgqAJQAVgMAvgDg");
	this.shape_152.setTransform(-141.4,-8.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#A3794F").s().p("AAlAAQAHAGA1gXQgBABgNALQgNAKgYABQgaABgZAEIgeAEIg9ADg");
	this.shape_153.setTransform(-193.4,-10.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A3794F").s().p("AgiARQASgEAHgHQAPgMAGAAIAUgJIgSgDIApgDIgQALIgVAKIgNAEIgQAJQgRAJgaAAIAUgFg");
	this.shape_154.setTransform(-157.7,-7.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#A3794F").s().p("AhZAKQgOgBgHgEQALABAdgCQAggEAZgCIAYgDIBkgFIg0AKIgeAAIgvABQgrAHgEACIgEABIgUgBg");
	this.shape_155.setTransform(-144.8,-11.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A3794F").s().p("ABSATIgrgFQgCgDgTgFIgfgDIgOgCQgMgBgGAAQgHAAghABQggABgbgPIAxgEQAsgCAhAGQBCAQAJAEIBYAMg");
	this.shape_156.setTransform(-185.5,-5.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A3794F").s().p("AlxABIDbgBIAtgFIB1AEIDWgCIBLgHIBHAAIhpAKIiyAEIgRgBIgYgBIgdAAIhfAAIhGAIIjhABg");
	this.shape_157.setTransform(-243.9,-6.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A3794F").s().p("AF6AuIhagCQgcAAhDgGIhNgGIg8gCIhegEIhVgEIgygCIkHAAIhFgBIhXAAIgtAAIgbAAIAAgGIAcgDQAagDALABIBHACIB4ADIBAABIDdABIAkAAIAtAAIAkACQAUABAKADQAJADAXgBIAagBIAaAAIAhACIAlAEIAoADIA5ACIBfAEIAzACIAxgEQAvgFA9gIQA4gLAFgWQAEgZgEgDIAVgHIAEAVQAEATgLAPQgQAPg3AJQg3AKgrADIg6ABIg0gBg");
	this.shape_158.setTransform(-214.3,-3.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#A3794F").s().p("AExAVIgOAAIgUAAQgKAAgcgFIgggEIgbgNQgCgDgXgEIgkAAIgqACQghADgTAAQgTAAgfADQggADgWAAQgygBgXgCIghgCIgbgCIk1ADIh1gGIBBABIBhAAIA6AAIAbAAICzgGIAvAFIAdADIAiADIAygCIAtgDIBdgIIBXgDIA2APIBGAKICrABIARgFIABgGQADAAAFADQAGAEgOAHIAAAHIBZgGIASgNIAZgOIhIAOIBKgYIAfgBIgSAHIgLARQACABgNAKQgNAKgpAEIhYACIguAAg");
	this.shape_159.setTransform(-216.7,-3.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#A3794F").s().p("AgkAXQgqgKAAgIIANgFIAZgOQAJgFA8gFQAzAJgCAKQgFAFgcAUQgUAFgaAAIgjgCg");
	this.shape_160.setTransform(-169.4,-9.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A3794F").s().p("AgbAjIgmgGIgdgYIAggZIAwgOIAxAAIAtAKIAPAWIgOAOIgbARIghAGg");
	this.shape_161.setTransform(-169.8,-9.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAwAmIglgWIhPgBQhMAAhmAGIDLgPIAYgGIA/glIBcgKIBGAKIApAlIglAaIgzAPIhAAHg");
	this.shape_162.setTransform(-181.8,-9.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C19867").s().p("Egs2AELIAAoVMBZtAAAIAAIVg");
	this.shape_163.setTransform(5.2,-14.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#A3794F").s().p("AhzAHIAsgCIBkgIIAhAAIAsgBQAZgKACgHIAJAQIALAGIAZAKIhPgGIgxABIhpADQhqAHgQAGQAXgNAngCg");
	this.shape_164.setTransform(-131.9,-11.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#A3794F").s().p("AkYgDQAdgJAEAAIA8gLIAYABIAnACQATACAfAKIAiAKIB+gDIAbABIAcgDQAbgDAjgCIBOgDIAsgBIgHAGIiZAFIgxAEIihAGIgPgHIg9gQIg5gEIgzAGIgSADQgRAEgPAFQgkARgJAHQAPgVAdgGg");
	this.shape_165.setTransform(-150.5,-13.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#A3794F").s().p("ACpBOQAEgPgCgBIA2gDIBEgJQAbgGACgHQABgIgBgBIhKgUIg5gIQgxgHgRgFQgJgDgrgFIhQgKIgrgFIkhgbIg2gBIh2gPIi7gNIEcAGICWAPIA9ADIBQAEIBVAJIBAAIIBFAHICBAMIBOAHIAzAFQAeAFAdABIAsAAIAsAAIA/AAIAWAAIAkARIAbAFIAVAHIAeAQIgbAIIg2AKIisAGIAkAIIgXACIgfAEQgbAFgJAEIgrABIg0ABIg2ACQgoABgVgBQgMAAgMAFQAJgIACgGg");
	this.shape_166.setTransform(-117.3,-21.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A3794F").s().p("AiSAEQBggPBWgCQCVgDgJgCIAjgDIAmADIg4ADIgiAGIg5ABIhJAAQgZABhYAHQhaAJhKANQAIgDBegPg");
	this.shape_167.setTransform(-116,-8.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#1F2116").s().p("Egs0gAJMBZpAAAIgNAJIvtADIkKgDMguMAAHIodgCIu8AEg");
	this.shape_168.setTransform(5.8,118.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A3794F").s().p("AoVAGIDhAAICBgGIBagIIDrAAIDFgGIC/AJIqAALIijAJg");
	this.shape_169.setTransform(-189.8,163);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#A3794F").s().p("AhdgXIBDABQA7ABA0AHQAaAFgtAJQgtAJg2AHIg8AJg");
	this.shape_170.setTransform(-271,160.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#A3794F").s().p("ArGARIFiADIJegTIDRAAICMgKIGhgNIhVAFIikAJIhwAIIhrAGIhOAEIlpAKIxkADg");
	this.shape_171.setTransform(-177.7,163.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A3794F").s().p("AxZgKIBLAAIBYAAIA9AAIBhgCIAyAAICTgTIETAMIEVgKICQAHIHqgEIMaAEIn2AMIk1gCIj4AGIjnAAIiKgGIj+AJIk2gHIiHAOIlzgDIkPAfg");
	this.shape_172.setTransform(-141.9,161.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#9E744A").s().p("AkjgOIHLAAILXAXIloADIlpgGInMAAIi/AGImhADg");
	this.shape_173.setTransform(-17.4,163.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#9E744A").s().p("AEcASIjRgMIrJgbIIzADIGOAbICeAAICeAMg");
	this.shape_174.setTransform(71.3,162.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#9E744A").s().p("AdEAWIltgTIjRgRInfAAIi6gGIkkADImTgKIo0AEItNgEIioAQIoRgTIIFADICegMIA8gCIBcgBIB2AAIBVAAIFMAAIAsABIBXABIA3ABIBdgBICdgBIBSgBIDtAAIFxAJIHrADIETAHIDiAAIKpAqIDLAYg");
	this.shape_175.setTransform(-62.2,160.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#9E744A").s().p("Ab+ACIhBgJIj5ABIiGgFIhzADIwOgJIikgIIhiAFInLABIivgEIjZADImxgCIi0ALIpAAAIAAgKII1ABIC/gIIUvACIBXgEIEiAHIO9ADIGvAHIAtAMIDvAPIBfARg");
	this.shape_176.setTransform(-68.8,157.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#9E744A").s().p("AGEAeIgzAAIjpgCIpOg0IiKgFICvACIIvAxIIDACIhAAEQg5ACgjAAIhRAAg");
	this.shape_177.setTransform(150,160.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#9E744A").s().p("AlaAFIHigLIDTAGQg/ABhJAAIhOAAIlYAGg");
	this.shape_178.setTransform(243.1,163.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#9E744A").s().p("EAgaAAhIhLgJIkHgYIhPgOIlQgCIiBgIIhiAEIo3gMIkxADIkEgFIiaAHIrtgJIhzAEIiKgCImAAHIgvADIg5AEIhOgBIhEgCIjCAGIiqgHID3gDIAuAAIA1AAIBRgCIBKgBIHxgLICEADIB3gGIIoAEIBWAFID7gFIKvADIBFACIBaABIBDAAIBdAAIAvAAIKhARIBMAKIAqAFIAwACIAxADIAsAEIAgADQAeADAYADIBjAQIBNAMQgygDhFgIg");
	this.shape_179.setTransform(-61.2,156.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#A3794F").s().p("AhhAKIh4gHIhPgPIBGAMIB9AFIFjAAIAsAHg");
	this.shape_180.setTransform(182.4,160.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#A3794F").s().p("AAAABIibgBICdgCIAqACIBwgFIAAAFIhAAGg");
	this.shape_181.setTransform(276.1,161.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A3794F").s().p("AlFgBIBGABIC2gFIAnAFICZAAIAugCIA3gDIA5ABIAxACIjRAGIibAAIgugEIgXAAIgoAAQgUAAgpACIgtADg");
	this.shape_182.setTransform(242.2,161.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#A3794F").s().p("Ag7ACIB3gEIAAAEg");
	this.shape_183.setTransform(285.9,160.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A3794F").s().p("Ah4ADIBbgFIAcAAIAmgBIAwABIAkACIiWAEg");
	this.shape_184.setTransform(253.7,160.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#9E744A").s().p("AAmgEIhjAEIgrACIgwACIguAAIgqAAIiNAEICJgJIEEgJIBbAEIBqAJICpgBIiLAJg");
	this.shape_185.setTransform(253.5,159.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#A3794F").s().p("AhQAAQAOgJAMgBIAnABIAdABIBUAFIiMACQAFAEg8AIIARgLg");
	this.shape_186.setTransform(217.8,151.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#A3794F").s().p("Ah9gCIAlgDIBHAFICPgFIAAAKIh+ABg");
	this.shape_187.setTransform(279,158.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#9E744A").s().p("A7VAGIFvgLICWgKIWrAGIE+gGIHsAGIBkAAIDhABQCCABBxAEQBxADAoAGIksgIIuRAAIk4AFIyLgIIk4AFIh2AEIjkAIIiZAEg");
	this.shape_188.setTransform(-105.1,149.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#9E744A").s().p("EAgnAAfQhJgLhagEQhZgEhEgKQhEgJgDgCIpHgKIiugKIqCAAIjqgHIkrAPIoogLIr7ADIpkARIAPgIIJ5gSITnACIFhgGIQtAKIDeALIEUAAIB+AMIBSAHQBNAEBZAMQBZAMApARQgEgBhJgLg");
	this.shape_189.setTransform(-64.9,154.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#9E744A").s().p("AAKAuQBJAABLgHQBlgKBfgEQCzgCCzACIgZAAQioAFikALQh0AHh1AAQg4AAg4gCgAkCAnQgngEgfgJQgfgJgmgGQjGgcjPgSQh9gIh+gDIAuAAQB6gBB4ACQBiAABQAWQBiAVBoAMIArALQANAEAnAAQAqAAAqAEIChAPQhrgBhqgEgANTAZIAxgDQBJgKBKgJIAHAAIAAAKIgHADQhUAJheAAIgSAAg");
	this.shape_190.setTransform(186.3,155.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#C9CAC1").s().p("AAPAJIgogEQgbgCAQgLIAlgBQAiABAIAHQAAALgRAAIgLgBg");
	this.shape_191.setTransform(-108.4,137);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#868A83").s().p("AgeADQgGgFAGgGIAIgGQADANATgFQATgEALAAQAIADgJAHIgMAJIgWAGQgGgBgTgLg");
	this.shape_192.setTransform(-111,141.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#868A83").s().p("AgXAfIARgIIAVgbQgHACgfgCQghgCAUgbIAQgFQAOgDAGADQAHAGASAHIAUAJIAAAfQgCACgUAMQgWALgUABQgRgDANgHg");
	this.shape_193.setTransform(-106.5,139.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#747675").s().p("AgoAAQAHgoBKgFQghAQgTAdQgBgCABgGQABgFgMACQgIAFAEAIQAPAKADAKQAEALANAGQAJAEAIADQg9gKgFgkg");
	this.shape_194.setTransform(-113.6,139.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A8AAA5").s().p("AhUAAQAIgpBMgEQBOAEAHApQgHAqhOAEQhMgEgIgqg");
	this.shape_195.setTransform(-109.2,139.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#2A261F").s().p("AhbAAQAIgtBTgEQBUAFAIAsQgIAuhUAEQhTgEgIgug");
	this.shape_196.setTransform(-109.2,139.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#9E744A").s().p("ABVASIhwgRIjDAGIjDgeIDSAVIC4gJIB8AQIE9ANIidAAIhQAGg");
	this.shape_197.setTransform(92.1,132.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9E744A").s().p("AHMAfIhNgNIkDgSIjjgHIjeACIhcgCIiogZIDLAQIBygGICoAAIFHANIFnAqg");
	this.shape_198.setTransform(174.2,134.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#9E744A").s().p("AhJAAIhrgUICoAUIBOAAIBzAVg");
	this.shape_199.setTransform(237.7,135.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#9E744A").s().p("ACyAPIgggBIgqgBQgmgCgmAAIhQAAIgvAAIhEgLIg3gQIBrAQIBkgCIBhAGICJgFIAEARIgtgBg");
	this.shape_200.setTransform(269.8,136.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#9E744A").s().p("AFkAKIioAEIiYgLIijAAIoWgUILHAJICVAIICdAAIEyAQIi/ACg");
	this.shape_201.setTransform(-5.2,131.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A3794F").s().p("AA7AFQhTgDhKgDIhQgEIFlAKQgQABgbAAQggAAgtgBg");
	this.shape_202.setTransform(-193,135.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#A3794F").s().p("AhPAHImFgRIiRgCIAAgJICBAAID1AJIFZARIB+AAIC8ALIDCAAIi3AGg");
	this.shape_203.setTransform(-218.6,140.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#9E744A").s().p("AFOARQhFgFgIgBIongCIiRAGIBYgPIA8gEIBFgFIA+AEIA1AFIGDgRIA2ABQAwACAJAJQAGAHAUAEIAYAFQgbAIgqAAIgmgCg");
	this.shape_204.setTransform(-101.9,136.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#A3794F").s().p("ACgACIj+AJIlrAAIAAgLIEXAAIE3gKICRAKIC0AFIhbACIh9ADIg/ABg");
	this.shape_205.setTransform(-234.6,127.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#A3794F").s().p("AmKgHIMVACIhUAJIk7gHIjhADIilAIg");
	this.shape_206.setTransform(-240.9,119.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#A27D4B").s().p("ADAAKIhagBIn6gHIlUgIIXQgEIhaAGIi0AJQhgAGgqAAIiQgBg");
	this.shape_207.setTransform(-125.3,119.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#A27D4B").s().p("AsEAHIJ6gLIGHACIEigLIDmAHIg7ACIhzACIhWACIhUAAIg1AAIioAHIvUAGg");
	this.shape_208.setTransform(-203.5,122.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#A27D4B").s().p("ArYABID4AEIE9gEIDQAGIDigNIBjgKIFnACImFAbIr+AFg");
	this.shape_209.setTransform(-64.2,123.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#A3794F").s().p("Aw4AZIGdgKIBAgCIBKgDIBSgDIBKgDIJSgOIBUADIB+gGIATgFIJ3gGIgxAFIhdAJIg9AGIhjAAIhUAAIjDAAIjOAOIiOgIIi9AIIkHADIkqAMg");
	this.shape_210.setTransform(-15.7,119.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#9E744A").s().p("Am/AVIjlgDIhcAFIhMgFIhCAFIl7gEIFlgDIBfgJIBnAFIBvgGIB+AAIByAMIBzgIIGqACICsgFICCAFIAwgCQAqgBARgCIA5gGIBagIIAwgEICNgOIGDgBIiTAKIjlAFIh+AIIjKATIh+AFIh3gDIikADIjEgDIjxADIh+AGg");
	this.shape_211.setTransform(-67.5,124.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#9E744A").s().p("AIYAHIgpgEIghAFIk5ACIingJIgdAAIgqAAIhMgBIg+gBIlwABIFogJIBKAAIBWAAIAvAAIAjAAICYAIIFzgCIBBANIg7gDg");
	this.shape_212.setTransform(-100.1,139.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#A3794F").s().p("AgoAgIhrAAQgZgBg+gFIhOgHIhHgEQg4gDgSgEQgTgDg7gEIhDgBIhYgCIgzAAIhaAAQgtAAg1ACIg7AEIglABIhCABIhwACIhTACIAAgiIEAAEIBngGIB3AGICNAAICsgMICYAGIEQACIHcgEIHNAPIGlACIl3ALIkAAAIgiAAIgqAAIhFAAIgsAAIgkAAIgyAAIgqAAIg9gLIhugCIAWAGQgJAHgsAKQgTAEgVAHIghALQgJABgbAAIhEgBg");
	this.shape_213.setTransform(-151.7,132.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#AD8355").s().p("AZjBRIhggIIhYgOIiIgZIhGgMIghgIQgggIgXgBIhGgEIhmgFIg1gEIuVgIIiAgHIsugIIgsABIhTACIg0ABIhGAAIh3AAIg/AAIv7gHIg6AGQgyAFgiAAQgiABg6ADIhIAFIgzAAIhSABIgrABIAAhLIFjANIBFAEQBCAEBqABQBvgBBugCIB3gEIG3AHIEmgNIELATIAvABIBXABIA2AAIBrgBIC9gCIBlgBIC4ANIA8ACIBFACIA/ACIA6ACIA8AJIAzABIA8ABIBwACIDtAEIDoAFIBqACIAzABIBEABQAZAAA+AFIBGAFICcAgIAxAMIA+AQQAXAFA/AIIBHAIIAvAAIA4AAIBIAAIAnABIAmgBQAsgCBSgHIBbgIIEMACQAHABCVgFIC7gHIB+gDIk1AVIisAEIkDgHIjeAUIi7ACIhMgHg");
	this.shape_214.setTransform(6,150.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#AD8355").s().p("AzyAzIiSgKIjQgGIDygHICSAKIEwgKIIjAEIBBgBIB/gEQBBgCASgDQARgDAygFIBcgJIAwgEIEfgLIC6gNIDngGIBrgNIBfAKICqgDIBZgJQBTgHBogFQBogFBAAHIi6AGIkZAZIikAAIjmAWIkwAIIh8AAIhmAPIj7AWIhEgDIh8ANIiHAGg");
	this.shape_215.setTransform(17.4,124);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#AD8355").s().p("AB+A+QhUgOhMgKQgjgDhJABQhIABhCgGQhBgGgQgXQApgIAhgOQAhgNApgIQAwgGAzADQAzAEAvgFQAsgIAdgIQAdgHAzgCQBwgCBxABQgiAKgUARQgSASgZAOIgHADQgkAKgnADQgoACgQAUQApAJAwAHQAwAHAbAVQgaACgaAAQg5AAg4gKg");
	this.shape_216.setTransform(96.6,135.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#9E744A").s().p("AAGAKIgvgMIiKAAICVgHIATAFQAPAEAHAAIAhAAIAcAAIA0gEIAYAAQAXAAAJADIgZAEIgfAGQgOABgwAAIg4AAg");
	this.shape_217.setTransform(271.4,129.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#9E744A").s().p("AkuACQApAAAFgEQAGgHgCgBQAqgDgEAGIBBAGICpgHIDkAIIAmACQAfACgaAAIgjAAIgEAAIgmAAIgtAAIgYAAIgXgBIgYgCIgTgBIgrACIgaABIghAAIghABIgZAAIinAIg");
	this.shape_218.setTransform(257.4,145.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#AD8355").s().p("AEsAcIg1gCQgugDgOgCQgMgDgsgCIgxgCIjkgFIgXAIIAAAGIgbgGIhqgLIgngBQgigBgTgJQAAgCAWgDIAZgDIAQgQIAvAAQAFgBAWABIAeADIA6AAIAyACQAjABAOACQASgFAHgEIAQgBIAQgBQAOgBANACQAPADAjAAIAvAAIAZAAQgKAAAVgBIAkAAIAWAAIAQAAIBzAAQAFAFANAFQAUADAKAEIALAGIAAAng");
	this.shape_219.setTransform(252.2,140.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#AD8355").s().p("AgzAKQg5gJADgDIASgPIAtgBIAwAGIAqAMQAQAFAUgBIAXgDIghAJQgeAIgJABIhWgJg");
	this.shape_220.setTransform(202.9,136.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#AD8355").s().p("AhJAqIhRgKQgGgDgQgEIgXgHIgQgGIghgIIgtgIQgRgBgkgBIgrAAIgkACIg4ACIg7gCIgogCQAYgKArgEIAwgFIA0gLIBBgFICuAMIAfAIIBCAJICzAIIg+gFIgbgDIgggDIgegBIgYgBIgrgIIAZABIAgADIAPAAIDdAIIAeACIAiACIAzACIAzABIAhAEIAwADQAZAAA+gFIBGgHIAAArIgUAAIgZgFIgPAAIgTAFIhwADIhYgKIiIAAIgNABIBhAOIgSAAIgngFIgWAAIgngMIiVgCIgYAEIBeANIgeAAIgYgBIhIgMIhTgHIANAJIBsAPg");
	this.shape_221.setTransform(233.5,132.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#A3794F").s().p("AhVAAIiDgHICOADIEjAMg");
	this.shape_222.setTransform(259.8,143.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A3794F").s().p("AAvAKIgkgEIgngDIgjgCIgegBIgQgJIDbATg");
	this.shape_223.setTransform(234.5,142.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#A3794F").s().p("AA8AgIBEAAIgUgOIhGgJIgVgFQgRgEgIAAIg3gIIgygKIhWgTIDxAqIBCAGIASALIAWAIIA0AIg");
	this.shape_224.setTransform(211.1,140.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#A3794F").s().p("ABTAWIg6gIIgbgEIgXgCIgSgGIgkgGQgSgFgRgJIgTgKIA7ATIDQAmIgzgHg");
	this.shape_225.setTransform(201.7,139.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#AD8355").s().p("AAEASQgegDgXgBQgngBgLABQgUAEgHgBIARgRQARgPALgEQAcgCAIABIASABIAcACQAdADAlAGIAIAAIAggBIAUgBIg2AHIgyAAIgWAEQACgBAPAEQAPAEAGAOIgjgEg");
	this.shape_226.setTransform(182.8,135.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#AD8355").s().p("ApsBQIiMgNIhGguIAOgEIAYAAIAbgJIATgIQAQgIANgEQAOgDAngGQAmgFAPAAQAdgCAJgDIAfgCIAkgEIBCgIIBGgIIAvgFIAmgEIAzgFIBqgJQA5gEAegBIBdgBIA5gBIAsgBIBCAAIAUADIAdADIA2AAIAtAAIASACIAeACIAwADIAlABIATAAIAaAAIAeAAIAWAAIAgAAIAVABIAcAAIAfAAIAXgBIAJgCIA7gDIAfAEIAAAIIhFgCIhhAJIpIgQIhlAGIjIANIiHAKIhEAJIghAGIhIAKIhTASIgMAPIADAJIgQAYIALARIAmAHIAXABQAXABAaAIIgbAAQgYAAgQACQghAAgFgEg");
	this.shape_227.setTransform(208.5,131.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#AD8355").s().p("AMHC8QgigBgEgBIgtACIg4AAIg6gCQgqgBgdgDIhWgRIg8gNIg2gMIhpgWQg4gMgSgFQgUgHhFgEQhEgFiRADQkwAAgKgFIldgQIh7gGIjkgNIh/gHQgOgCg+gLIhHgNIiSgbIg7gCQg1gCgagDQgagEBMgGQB9gIBcgBQBcgBAkAAQAogBBCgKIBRgMQASgEBAgGIBQgIIBPgEQBCgEA4gGIB6gPIA/gBIA2gCIBCgEIB9gIIBPgFIBDgDIBAgCIAogGIAagEIAbgDIAhgEIAiAAIAnAAIAsAAIAeAAIAsgDIBUgFIAzgDIAwgDIBQgFIArgDIDNgEIA4gDIBEgDIBWgDIBKgCIFJAUIAsAAIA4AAIA5AAIA4AAIAyAAIAqAAICkAEIAAALIjfgDIgtADIg0ACIg3AAIhcgBIgxAAIhHgFQg/gEgYgBIhVAAIhHAAIlEACIjNAMIhLAFIiNAKIhSAFIgsAAIgwAAIguAAIgkAAIhWASIkwAFIh1ARQgBACggAOQggAOgyAIIhbAOIgqAHIg4ANIATAGQARAEAJABIAzAEIBUAGIAtAFICKALIBqAAIBaAUIBcANIAuADIBZAHQAvADAOAAIA9ACIA0ACQAQAABXAHQBXAHA4APIAeALQAbAMAUANQAXAOBCANQBDANAmABIBjABIBVABQAOABAKACQAKABAygGQAygIAlgDQAkgEBAgCIB9gEIA6gDIIUgDIhOAEQhHAEgrAAIhYABIgzABIguABIhVACIgyABIhRACIhWACIhLAHIhIAFIg3AFIg3AEIgrgBg");
	this.shape_228.setTransform(116.5,138.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#AD8355").s().p("ApdBCIgcgHIgagEQgYgEgUgIQgPgHASgEQASgFAEAAIgSgVIB1gkIBAgJIBpgPQAugFBDgGQBEgGAWAAIBFABIBsABIA8ABIA4ADIBjAGIBIAFQAhADA8AAIBTAAQAZAAA9gFIBPgEIA+ABIAzAAIAAAOIgggBIgTAAIgaAAIgcAAIgVAAIgdgBIgjAAIgjAAIgjABIgoAAIgrAAIgtgBIgrAAIgvAAIguAAIg7gDIhHgFIg5gFQglgDgYgBQgpgBifAJQhXAHheARIhlATIAQAIIhWAjQgBAFAeAVQASAHAfgEIAcgEIgaAIQgVAIgMABQgNAAgagGg");
	this.shape_229.setTransform(220.6,132.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#A3794F").s().p("AAUAAQglgIgrgBQAGAAAwADQAvADAVANQgDgCgngIg");
	this.shape_230.setTransform(152.3,145.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#9E744A").s().p("AAjAPIgdgEQgZgEgbgBQgYgBgNgKQgMgLAAgCQA1AYAFgFICFASg");
	this.shape_231.setTransform(204.3,143.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#9E744A").s().p("AAMAOIgQgKIgOgEIgkgWIApAEIgSACIAUAJQAHABANAMQAIAHASAFIAUAFQgagBgRgIg");
	this.shape_232.setTransform(168.5,146.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#9E744A").s().p("ABCALQgFgDgqgHIgwgBIgdAAIg0gKIBjAFIAZACIA5AHQAdACALgBQgHAEgOABIgVABIgDAAg");
	this.shape_233.setTransform(155.7,142.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#9E744A").s().p("AiQATIBYgMIBKgVQAigHAsADIAxAEQgbAQgggBQgggBgJAAQgGAAgMABIgNACIggADQgSAFgCADIgrAFg");
	this.shape_234.setTransform(196.5,148.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#A3794F").s().p("ACTAKIhGgIIhfAAIgdAAIgYABIgRABIiygEIhpgLIBHABIBLAHIFLgCIAtAFIDbABIACALg");
	this.shape_235.setTransform(254.7,147.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#AD8355").s().p("AnnAvQgrgDg3gJQg3gKgQgQQgLgQAEgTQADgUACgCIAUAIQgEADAFAZQAEAYA4ALQA9AJAvAEIAyAFIAxgDIBggEIA6gCIAngDIAlgFIAhgBIAaAAIAaABQAXAAAJgCQAJgDAWgCIAjgBIAuAAIAjAAIDdgCIBAgBIB4gDIBHgCQALAAAaACIAcADIAAAGIgbAAIgtAAIhXABIhEABIkIAAIgyACIhWAEIhdAEIg8ACIhMAGQhEAGgbABIhaACIg3ABQggAAgYgCg");
	this.shape_236.setTransform(225.2,150.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#AD8355").s().p("AnOAbQgqAAgtgDQgqgDgMgLQgNgKAAgBIgLgSIgSgHIAhABIBKAZIhIgPIAZAPIASANIBXAGIAAgHQgOgHAHgEQAGgDABAAIADAGIAPAFICrgBIBGgKIA2gQIBYADIBdAJIAtADIAyACIAigDIAdgDIAvgGICyAHIAcAAIA7AAIBfgBIBDAAIh1AGIk2gEIgbACIghADQgXACgyABQgWAAghgDQgfgDgSAAIgzgDQgggDgLAAIglAAQgWAEgCAEIgbANIggAFQgcAEgKABIgVAAIgNAAIhxAFIgtAAg");
	this.shape_237.setTransform(227.6,150.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#8E6642").s().p("AgtAUQgcgUgEgGQgBgBAMgIQAMgJAagBQA8AFAJAFQAKAHAPAIIAMAFIgKAJQgKAIgWACQgTACgRAAQgZAAgUgGg");
	this.shape_238.setTransform(180.3,144.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#9E744A").s().p("AgVAkIgggGIgbgRIgOgPIAQgXIAsgKIAvAAIAyAPIAgAaIgeAZIglAFg");
	this.shape_239.setTransform(180.7,144.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#A3794F").s().p("AieAqIgzgPIglgaIAqgoIBFgKIBdAKIA/AoIAWAFIDMAPQhlgFhNAAIhPAAIglAYIgvAKg");
	this.shape_240.setTransform(192.7,144.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C19867").s().p("Egs2AETIAAolMBZtAAAIAAIlg");
	this.shape_241.setTransform(5.6,139.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#A3794F").s().p("AA4AJIhogCIgxgCIhPAGIAZgKIALgGIAJgRQABAIAaAKQAPACAdgBIAhAAIBjAIIAtADQAmACAWAMQgQgFhpgIg");
	this.shape_242.setTransform(142.7,142.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#A3794F").s().p("AEYAAQgPgFgRgEIgSgDIgzgHIg5AEIg9ASIgPAHIiggGIgygFIiZgFIgHgGIAsABIBOACQAjACAbAEIAcADIAbgBIB+AEIAigLQAfgKATgDIAngBIAYgBIA8ALQAEgBAdAKQAdAHAPAUQgJgHgkgRg");
	this.shape_243.setTransform(161.3,140.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#A3794F").s().p("Ai1BaQgVABgpgBIg1gCIg0gBIgrgBQgKgEgagGIgfgDIgXgDIAkgIIisgGIg2gKIgbgIIAegSIAVgHIAbgEIAkgTIAVAAIBAACIAsAAIAsAAIA7gHIAzgGIBNgHICCgNIBEgHIBBgIIBVgJIBPgEIA/gDICUgQIBcAAIBGgFIB7gBIh4AIIi5AVIg2ABIkhAcIgrAEIhQAKQgrAGgKADQgRAGgwAHIg5AJIhKAVQgBABABAHQACAIAbAFIBEAKIA2ADQgCACADAPQADAGAIAIQgMgFgLAAg");
	this.shape_244.setTransform(128.3,132.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#A3794F").s().p("ABZABQhZgIgXAAIhKgBIg5AAIgigHIg4gDIAmgDIAkADQgKADCWADQBVACBgAPIBeARQhHgMhVgJg");
	this.shape_245.setTransform(126.5,145.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#A3794F").s().p("AoXAHIDhAAICCgHIBbgIIDrAAIDGgHIDAAKIqCAMIikAJg");
	this.shape_246.setTransform(-191.8,-206.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#A3794F").s().p("AhegZIBEABQA7ACA0AHQAaAGgtAJQguAJg1AIIg9AJg");
	this.shape_247.setTransform(-273.2,-208.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#A3794F").s().p("ArJASIFjADICwgDIGxgRIDSAAICMgLIGjgNIhVAFIilAKIhwAIIhsAGIhOAFIlqAKIxpADg");
	this.shape_248.setTransform(-179.7,-205.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#A3794F").s().p("AxegKIBLAAIBZAAIA+gBIBhgBIAygBICTgUIEWANIEUgKICRAHIHsgEIMdAEIn3ANIk3gDIj4AGIjpAAIiLgGIj/AKIk2gHIiIAOIl1gDIkPAhg");
	this.shape_249.setTransform(-143.7,-208);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#A3794F").s().p("AkkgPIHNAAILZAYIlqAEIlqgGInNAAIjAAGImiADg");
	this.shape_250.setTransform(-18.8,-206.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#A3794F").s().p("AEdATIjRgMIrMgdII1AEIGPAbICfAAICeANg");
	this.shape_251.setTransform(70.2,-207.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#A3794F").s().p("AdLAWIjtgKIlTgbIngAAIi7gHIkmAEImVgLIo1AEItQgEIiqARIoTgUIIIADICegNIA8gBIBdgCIB3AAIBVAAIFNAAIAtABIBWACIA4AAIBeAAICcgCIBTgBIDtAAIFzAKIHsADIEVAHIDiAAIKsAsIDMAbg");
	this.shape_252.setTransform(-63.7,-209.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#A3794F").s().p("AGGAgIg0AAIjqgDIpQg3IiKgFICvADIIyAzIIEADIhAADIhcADIhRAAg");
	this.shape_253.setTransform(149.3,-209.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#A3794F").s().p("AlbAFIHkgLIDTAGQhAABhIAAIhOgBIlaAHg");
	this.shape_254.setTransform(242.7,-206.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#A3794F").s().p("AhiALIh4gHIhQgQIBHALIB+AGIFkAAIAsAIg");
	this.shape_255.setTransform(181.8,-209.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#A3794F").s().p("AAAACIicgCIBkgBIBkABIBxgFIAAAFIhBAGg");
	this.shape_256.setTransform(275.9,-207.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#A3794F").s().p("AlHgBIBIABIC1gFIAoAFICZAAIAugCIA4gDIA5ACIAyABIjTAHIicAAIgugFIgXAAQgVAAgSAAQgWAAgoABIgtAFg");
	this.shape_257.setTransform(241.7,-208.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#A3794F").s().p("Ag8ABIB5gDIAAAFg");
	this.shape_258.setTransform(285.5,-208.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#A3794F").s().p("Ah5ADIBbgFIAdgBIAmAAIAwABIAkABIiXAFg");
	this.shape_259.setTransform(253.3,-209.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#A3794F").s().p("Ah+gBIAmgFIBHAGICQgGIAAAMIh+ABg");
	this.shape_260.setTransform(278.7,-210.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C19867").s().p("EgtBAA5IAAhxMBaDAAAIAABxg");
	this.shape_261.setTransform(4.3,-207.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#A3794F").s().p("AB4AIIizAFIk1gVIDiAFIDogNIEXAAIAAAhg");
	this.shape_262.setTransform(255.6,-195.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#A3794F").s().p("AAvAZQg2gMgDgCIhggOIhEgbICZAYIBNAUIB3AOQgeADgbAAQgmAAghgGg");
	this.shape_263.setTransform(-25,-171.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#A3794F").s().p("AFjAYQhkgDhIgIIhMgIIq1gSIFvgHIBCgCIBogBQAqABAtAFIA0AHIDcAPIEVADQgCABhBAIQg5AHhWAAIgWAAg");
	this.shape_264.setTransform(-223.4,-175.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#A3794F").s().p("AC6AuQiKghgCgEIidgQIhcgWIlkgJIFSgFIDUAhIB+AHQABgEAggVQAggXAoABQAqAGAsATQAtATADADIA5AVIBCAGQA8AGAVAMIgxgFIhegJQgwgEgQABQgRAEgqAOQgWAIgfAAQgZAAgegFg");
	this.shape_265.setTransform(96.6,-172.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#1F2116").s().p("Egs7AANIAAgZMBZ2AAAIgMAMIvtAFIkKgFIlzAFMgobAAFIodgDIlyAGg");
	this.shape_266.setTransform(5,-200);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#AD8355").s().p("AoXAGIDhAAICCgGIBbgJIDrAAIDGgGIDAAKIqCALIikAKg");
	this.shape_267.setTransform(-191.8,-148.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#A3794F").s().p("AhegZIBEABQA7ACA0AHQAaAGgtAJQguAJg1AIIg9AJg");
	this.shape_268.setTransform(-273.2,-150.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#AD8355").s().p("ArJASIFjADICwgDIGxgRIDSAAICMgLIGjgNIhVAFIilAKIhwAIIhsAGIhOAFIlqAKIxpADg");
	this.shape_269.setTransform(-179.7,-147.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#AD8355").s().p("AxegKIBLAAIBZAAIA+gBIBhgBIAygBICTgUIEWANIEUgKICRAHIHsgEIMdAEIn3ANIk3gDIj4AGIjpAAIiLgGIj/AKIk2gHIiIAOIl1gDIkPAhg");
	this.shape_270.setTransform(-143.7,-149.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#AD8355").s().p("AkkgPIHNAAILZAZIlqADIlqgHInNAAIjAAHImiADg");
	this.shape_271.setTransform(-18.8,-148.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#A3794F").s().p("AEdATIjRgMIrMgdII1AEIGPAbICfAAICeAOg");
	this.shape_272.setTransform(70.2,-149.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#AD8355").s().p("AdLAXIjtgKIlTgcIngAAIi7gGIkmACImVgKIo1AEItQgEIiqARIoTgUIIIADICegMIA8gDIBdgBIB3AAIBVAAIFNAAIAtABIBWABIA4ACIBegCICcgBIBTgBIDtAAIFzAKIHsADIEVAHIDiAAIKsAsIDMAbg");
	this.shape_273.setTransform(-63.7,-151.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#AD8355").s().p("AcEACIhAgJIj7ABIiGgGIh0AEIwSgKIikgJIhiAGInNABIivgEIjaADImzgCIi1ALIpCAAIAAgKII4ABIC/gIICzgCISBADIBYgDIEiAHIPBADIGxAHIAtANIDwAQIBfARg");
	this.shape_274.setTransform(-70.3,-154.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#A3794F").s().p("AGGAgIg0AAIjqgDIpQg3IiKgFICvADIIyAzIIEADIhAADIhcADIhRAAg");
	this.shape_275.setTransform(149.3,-151.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A3794F").s().p("AlbAFIHkgLIDTAGQhAABhIAAIhOgBIlaAHg");
	this.shape_276.setTransform(242.7,-148.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#A3794F").s().p("AhiALIh4gHIhQgQIBHALIB+AGIFkAAIAsAIg");
	this.shape_277.setTransform(181.8,-151);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#A3794F").s().p("AAAACIicgCIBkgBIBkABIBxgFIAAAFIhBAGg");
	this.shape_278.setTransform(275.9,-149.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#A3794F").s().p("AlHgBIBIABIC1gFIAoAFICZAAIAugDIA4gCIA5ABIAyABIjTAHIicAAIgugEIgXAAQgVAAgSAAQgWAAgoABIgtAFg");
	this.shape_279.setTransform(241.7,-150);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#A3794F").s().p("Ag8ABIB5gDIAAAFg");
	this.shape_280.setTransform(285.5,-150.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#A3794F").s().p("Ah5ADIBbgFIAdgBIAmAAIAwABIAkABIiXAFg");
	this.shape_281.setTransform(253.3,-151.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#A3794F").s().p("AhRAAQAPgJALgCIAoABIAdABIBUAGIiMACQAFAFg8AIIAQgMg");
	this.shape_282.setTransform(217.3,-160.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#A3794F").s().p("Ah+gBIAmgFIBHAGICQgGIAAAMIh+ABg");
	this.shape_283.setTransform(278.7,-152.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#AD8355").s().p("EAgvAAgQhKgLhagEQhZgEhEgLIhIgLIpIgLIivgKIqFAAIjrgIIksAPIoqgLIiXAEIpmAAIpnASIAPgJIJ8gUITrADIFigHIQxALIDeALIEWAAIB+AOIBTAHQBNAEBaANQBZAMApASIhNgNg");
	this.shape_284.setTransform(-66.5,-157.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#A3794F").s().p("AAZAwQBLAABOgHQBlgKBggFQCygCCxACIgVAAQioAFilAMQhvAHhuAAQhBAAhBgCgAjvApQgogFgfgJQgfgKgmgGQjIgdjPgUQiQgJiTgBIBVgBQB8gBB4ACQBhABBQAWQBkAXBoAMQAdAHAOAFQAOAEAmAAQArAAApAEICjAQQhsgBhqgEgAN7AZIgNAAIAtgCQBIgLBMgIIAHAAIAAAKIgHADQhRAIhZAAIgKAAg");
	this.shape_285.setTransform(183.8,-156.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#A3794F").s().p("ABWASIhxgRIjEAGIjDgfIDSAWIC5gJIB8AQIBBAFIBkAAICZAIIidAAIhRAHg");
	this.shape_286.setTransform(91.2,-180.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#A3794F").s().p("AHNAhIhMgOIkFgTIjkgHIk7AAIiogbIDLARIBzgHICpAAIFHAPIFpAsg");
	this.shape_287.setTransform(173.6,-178.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#A3794F").s().p("AhKAAIhrgVICpAVIBOAAIB0AWg");
	this.shape_288.setTransform(237.2,-177);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#A3794F").s().p("ACyAQIgfgBIgqgCIhNgCIhQAAIgwAAIhDgLIg4gRIBrARIBlgCIBhAGICKgFIAEASIgugBg");
	this.shape_289.setTransform(269.4,-176.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#A3794F").s().p("AFmAKIiqAFIiZgLIijAAIoXgWILKAKICVAIICeAAIEyARIjAACg");
	this.shape_290.setTransform(-6.6,-181.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#A3794F").s().p("AA7AFIiegGIhQgFIFnAMIgrABIhOgCg");
	this.shape_291.setTransform(-195,-177.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#A3794F").s().p("AhPAHImHgSIiSgCIAAgJICDAAID1AJIFbASIB/AAIC8ALIDCAAIi3AHg");
	this.shape_292.setTransform(-220.7,-171.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#A3794F").s().p("ACgACIj+AKIltAAIAAgMIA6AAIDeAAIE5gLICSALIC0AFIhcACIh9ADIg/ACg");
	this.shape_293.setTransform(-236.7,-185.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#A3794F").s().p("AmLgHIMXACIhUAJIk8gHIjiADIilAIg");
	this.shape_294.setTransform(-243.1,-194.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#A3794F").s().p("ADBAKIhaAAIn8gIIlVgIIXVgFIhaAGIi2AKQhgAHgqAAIiQgCg");
	this.shape_295.setTransform(-127.2,-194.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#A3794F").s().p("AsHAHIJ8gLIGJACIEkgLIDmAGIg6ADIh0ADIhXABIhVAAIg1AAIipAHIvXAHg");
	this.shape_296.setTransform(-205.5,-190.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#A27D4B").s().p("ArbABID5AFIE/gFIDRAHIDhgPIBlgKIFoABIj6AWIjtALIqhABg");
	this.shape_297.setTransform(-65.8,-190.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#A3794F").s().p("Aw7AaIGegLIBAgCIBJgCIBTgDIBLgEIHKgMIDeAAIB/gGIATgFIJ4gGIgwAFIheAJQgwAGgNAAIhjAAIhVAAIjDAAIjQAQIiNgJIi+AJIkIACIkrANg");
	this.shape_298.setTransform(-17.1,-193.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#A3794F").s().p("AncAWIjngCIhbAEIhNgEIhBAEIlJgDIEygEIBggJIBoAFIBugHIB/AAIBzAOIBzgJIGrACICtgFICCAFIAwgBIA7gEIA6gGIBagJIAwgFICOgOIGHgCIiWAMIjlAEIh/AJIjLAUIh/AFIrSAAIh/AHg");
	this.shape_299.setTransform(-66.3,-189.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#A3794F").s().p("AIZAIIgngEIgiAFIk7ACIingJIgdAAIgqAAIhMgCIg/gBIlwABIFogKIBLAAIBWAAIAvAAIAjAAICZAJIF1gCIBBAOIg9gDg");
	this.shape_300.setTransform(-101.8,-172.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("AKTAAIEBAAIF3gLImlgDInQgQIndAFIkQgCIiagHIisANIiOAAIh3gGIhoAGIkAgEIAAAkQAIAABLgCQBLgCAlAAQAggBAigBQAjgBADAAQAFAAA1gEQA2gCAtgBQAsAAAvAAQAvAAAEAAIBYADQAHAAA8ACQA8ADATAEQASADA4AEQA4AEAPAAQAQABA+AGQA/AGAYABQAcAABPAAQBXADATgDQAKgEAWgHQAWgIATgEQAsgLAJgHIgWgHIBuADIA+ALQAFAAAlAAQAkAAAOAAQAKAAAaAAQAZAAATAAQAsAAAZAAQANAAAeAAQAeAAAEAAg");
	this.shape_301.setTransform(-153.6,-180.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#AD8355").s().p("AgpAiIhrAAQgYgCg/gFIhOgHQgPAAg4gEQg4gEgSgDQgTgEg8gEIhDgBIhYgDIgzAAIhbAAQgtABg2ACIg6AEIgmABIhCACIhwACIhTABIAAgjIEAAEIBogGIB3AGICOAAICsgNICaAHIEQACIHdgFIHQAQIGlACIl3AMIkBAAIgiAAIgrAAIhFAAIgsAAIgkAAIgyAAIgqAAIg+gMIhugCIAWAHQgJAHgsAKQgTAEgWAIIggAMQgKABgbAAIhFgBg");
	this.shape_302.setTransform(-153.6,-180.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#AD8355").s().p("AZpBVIhggIQgSgChHgNIiIgZIhHgOIgigJQgegIgYgBIhGgDIhngHIg1gDIuYgJIiAgHIjPAAIlsgJIj2AAIgsABIhUACIg0ABIhHAAIh3AAIg/AAIwAgGIg4AFQgzAFgiABQgjABg6ADIhIAFIgzAAIhTABIgrABIAAhPIFlAOIBFAEQBDAEBpABQBwgBBugCIB4gEIG4AHIEogOIEMAVIAuABIBYABIA2AAIBsgBIC+gDIBkgBIC4AOIA9ACIBGACIA/ADIA6ACIA9AJIAzABIA8ABIBxACIDsAFIDrAEIBqADIAzABIBEABIBXAFIBGAFICdAiIAxANQArAKATAHQAXAGA/AIIBIAJIAvAAIA4AAIBJAAQAeAAAIABIAngBQAsgDBSgHIBcgJIEMACQAHABCXgFIC7gHIB/gEIk3AXIisAEIkFgGIjeAUIi8ABIhMgHg");
	this.shape_303.setTransform(4.7,-161.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#A3794F").s().p("Az2A0IiTgJIjRgHIDzgGICTAKIExgKIIkADIBCgBIB+gEQBDgCASgDQARgDAygGIBcgJIAwgFIEhgLIC6gOIDogGIBrgOIBgAKICqgCIBZgKQBVgHBogGQBogFBAAIIi6AGIkbAaIikAAIjoAYIkxAIIh8AAIhmAQIj8AXIhEgDIh8ANIiIAHg");
	this.shape_304.setTransform(16.2,-189.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#AD8355").s().p("AhBAOIhAgQQAJgHAkgHIAnAAIBUAAIAogDQAkgCAPAHIhSAHIhGAbg");
	this.shape_305.setTransform(110.3,-177);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#A3794F").s().p("AAGALIgwgNIiKAAICWgIIATAFQAOAFAIAAIAhAAIAcAAIA0gFIAZAAQAWABAJADIgYAEIggAHQgOABgwAAIg4AAg");
	this.shape_306.setTransform(271.1,-183.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#A3794F").s().p("AkvACQAqAAAFgFQAFgHgCgBQArgDgFAGIBCAHICqgIIDkAJIAmACQAfADgaAAIgjAAIgDAAIgoAAIgsAAIgYgBIgXgBIgZgCIgSgBIgrACIgbAAIghABIghABIgaABIinAIg");
	this.shape_307.setTransform(257,-166.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#AD8355").s().p("AEuAeIg1gDQgvgCgNgDQgNgCgsgCIgygDIjkgFIgXAIIAAAHIgbgHIhrgMIgnAAQgigCgUgJQABgCAWgEIAZgDIAQgQIAvAAQAGgBAVABIAeACIA7AAQAJACApABQAiABAPACQASgFAHgEIAQgCIARgBQANAAAOABQAPAEAiAAIAwAAIAYAAQgJgBAVAAIAkAAIAWAAIARAAIBzAAQAEAFAOAFQAUAEAJADIALAHIAAApg");
	this.shape_308.setTransform(251.8,-172);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#AD8355").s().p("Ag0ALQg5gKADgDIASgQIAtgBIAwAHIArAMQAQAFAUgBIAXgDIgiAKQgeAIgJABIhWgJg");
	this.shape_309.setTransform(202.5,-176.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#AD8355").s().p("AhKAsIhRgKIgWgIIgWgHIgRgGIghgJIgugIQgRgCgkAAIgqgBIglADIg4ACIg7gCIgogDQAXgKArgEIAxgGIA0gLIBCgGICuAOIAfAIIBCAJICzAJIg9gFIgbgDIgggEIgegBIgZgBIgrgJIAZACIAhADQAOABABgBIBvAGIBvACIAdADIAiACIAzABIA0ABIAhAFIAwACQAaABA/gFIBFgHIAAAtIgUAAIgZgFIgQAAIgSAFIhxACIhZgKIiHAAIgNABIBgAOIgSAAIgmgFIgWAAIgngMIiWgCIgYAEIBfAPIggAAIgXgCIhJgNIhTgGIANAJIBtAPg");
	this.shape_310.setTransform(233.2,-180.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#A3794F").s().p("AhVAAIiEgHICPACIEkANg");
	this.shape_311.setTransform(259.4,-169.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#A3794F").s().p("AAvAKIgkgEIgngDIgjgCIgegBIgQgJIDbATg");
	this.shape_312.setTransform(234,-169.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#A3794F").s().p("AA9AhIBDAAIgUgOIhHgKIgUgFIgYgEQgLAAgtgJIgzgKIhWgUIDzAsIBBAHIASALIAXAJIA0AIg");
	this.shape_313.setTransform(210.5,-171.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#A3794F").s().p("ABTAXIg6gJIgbgDIgXgDIgSgFIgkgHQgSgFgSgKIgSgLIA7AUIDQApIgzgIg");
	this.shape_314.setTransform(201.1,-172.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#AD8355").s().p("AADATQgfgEgWAAQgngCgMACQgTADgIAAIASgSQAQgQALgEQAdgDAIACIARABIAdABQAeADAkAHIAIABIAggCIAXgBIg5AIIgyAAIgWAEQACgBAPAEQAQAEAFAPIgjgEg");
	this.shape_315.setTransform(182.2,-177.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#AD8355").s().p("ApvBUIiMgNIhGgwIANgGIAZAAIAbgJIATgIQARgIALgEQAOgEAogGQAngFAOgBQAegCAIgCIAggDIAlgEIBCgIIBFgJIAvgFIAngEIAzgFIBqgJQA6gFAegBIBcgBIA7gBIAsgBIBBAAIAUADQATACALAAIA2AAIAuAAIARADIAeADIAxACIAlACIATAAIAaAAIAeAAIAWAAIAgAAIAUABQATABALgBIAfgBIAXAAIAJgDIA7gDIAfAEIAAAJIhFgCIhiAJIpKgRIhlAHIjJANQhoAHgfAEQglAEggAFIggAHIhJAKIhUATIgLAQIACAJIgQAaIALASIAnAHIAXABQAXACAaAHIgbAAQgYAAgRADIgFAAQgcAAgFgFg");
	this.shape_316.setTransform(208,-181.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#AD8355").s().p("ARpDGIgmgBIgtAAIg5ABIg5gBQgrgCgdgDQgfgGg3gNIg9gNIg2gMIhqgXQg3gNgSgFQgUgIhGgFQhGgEiSACQkuAAgKgFQiMgFiLgIIjdgLQhvgGhpgWQhRgQhVgIQhfgRhkgGQjfgEjgAFQjfAFjggHIgCgLQB8gJCFADIEDAFQCzADCzgDQBygLB2gFQAogBBCgKIBSgOIBTgKIBQgJIBQgEQBBgEA5gGQBlgOAVgCIBAgBIA1gCIBCgEIB+gJIBOgFIBDgDIBAgCQAQgCAXgEIAbgFIAbgDIAigEIAiAAIApAAIAsAAIAeAAIAsgDIBVgFIAygDIAwgDIBRgGIArgEIDOgEIA4gDIBEgDIBXgDIBKgCIFLAVIArAAIA4AAIA6AAIA3AAIAzAAIAqAAIClAEIAAAMIjggDIgtADIg0ACIg4AAIhcgBIgxAAIhIgFQg/gFgYAAIhVAAIhGAAIlHABIjNANIhMAFIiNALIhSAFIgtAAIgwAAIgwAAIgkAAIhWATIhPAEIjgABIh2ATQgBABggAPQggAPgyAIIhcAPIgqAIIg4ANIATAGQARAFAJABIAzAFIBVAGIAtAEICKAMIBqAAIBZAVIBdANIAuAEIBZAHIA9AEIA/ACIA1ACQAPAABYAHQBYAIA3AQIAfAMQAbALAUAPQAXAPBCANQBDANAmABIBlACIBVABIAXACQAKACAzgHIBXgMQAkgDBAgCQBHgCA3gDIA6gDIIWgDIhPAEQhGAEgsAAIhYACIg0ABIgtABIhWACIgyABIhRABQhEACgTABIhLAHIhHAGIg5AFIg2AEIgsgBg");
	this.shape_317.setTransform(80.5,-174.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#AD8355").s().p("ApfBFIgcgHIgagEQgYgEgVgIQgOgIARgFQASgEAEAAIgSgXIB2gmIBAgKQA7gJAugFQAvgGBDgHQBEgGAWAAIBGABIBsACIA8ABIA4ADIBkAGIBJAGQAgACA8AAIBUAAQAZAAA9gFIBQgEIA+AAIAzABIAAAPIgggCIgTAAIgaAAIgcAAIgWAAIgcAAIgkgBIgjABIgjAAIgpAAIgrAAIgtAAIgrgBIgvAAIgtAAIg9gDIhHgFIg5gFQglgEgYAAQgpgBigAIQhYAIhdASIhmAUIAQAJIhWAkQgBAGAeAWQATAHAegEIAZgEQgJACgOAGQgVAJgMABQgNgBgagGg");
	this.shape_318.setTransform(220.1,-180.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#A3794F").s().p("AANAAQgfgHgkgCIApACQAvADAVAOQgCgBgogJg");
	this.shape_319.setTransform(152.2,-166.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#A3794F").s().p("AAkAQIgegEQgagEgagBQgYgCgMgKQgOgMAAgCQA1AZAGgFICGATg");
	this.shape_320.setTransform(203.7,-169.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#A3794F").s().p("AAMAPQgPgKgBgBIgOgEIgkgXIApAEIgSACIAUAJQAHABANAOQAIAHASAFIAUAFQgaAAgRgJg");
	this.shape_321.setTransform(167.9,-165.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#A3794F").s().p("ABDALQgFgCgqgHIgxgCIgdAAIg0gLIBjAFIAZADQAZADAhAEQAcADALgBQgHAEgOAAIgVACIgCgBg");
	this.shape_322.setTransform(154.9,-170);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#A3794F").s().p("AiQAUIBYgNQAJgEBCgSQAhgHAtADIAwAEQgaARghgBQghgBgHAAQgHAAgMABIgNACIggADQgTAFgBAEIgrAFg");
	this.shape_323.setTransform(195.9,-163.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#A3794F").s().p("ACTALIhGgIIhgAAIgdAAIgYAAIgQABIhGAAIjXgPIBIAAIBLAIICTADIC5gGIAuAGIDcABIABALg");
	this.shape_324.setTransform(254.3,-164.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#A3794F").s().p("AnpAyQgrgDg3gKQg3gKgRgRQgKgRADgUQAEgWABgBIAUAIQgDADAEAbQAEAYA5AMQA+AJAuAFIAyAFIAzgCIBfgFIA6gCIAngEIAmgEIAhgBIAagBIAZABQAYABAJgDQAJgDAWgCIAjgBIAuAAIAjAAIDegCIBAgBIB5gDIBHgCQAMgBAZADIAdADIAAAHIgbAAIguAAIhXAAIhFABIkJAAIgyACIhWAEIheAFIg7ACIhNAHQhFAGgbAAIhaADIgvAAQgkAAgcgBg");
	this.shape_325.setTransform(224.6,-161.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#A3794F").s().p("AnQAcIhYgCQgpgEgNgMQgNgKABgBIgLgTIgSgIIAgACIBLAaIhJgQIAZAQIASAOIBYAGIAAgIQgNgHAFgEQAHgDABAAIACAHIAQAFICsgBIBGgLIA3gRIBYADIBdAKIAtACIAyADIAigDIAdgEIAwgFICyAHIAcAAIA7AAIBhgBIBCgBIh2AHIk2gEIgbACIgiADQgXACgxABQgXAAghgDQgfgDgRgBIg0gCIgsgDIgkAAQgXAEgCAEIgbANIggAGQgcAEgKABIgVAAIgNAAIhyAGIgtgBg");
	this.shape_326.setTransform(227.2,-161.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#A3794F").s().p("AgyANQghgQAGgKIAQgCIASgGIAPgFIAYAAQAVAAAaAFQAqAUgIAHQgJAHgnAOIgIAAQgfAAgogOg");
	this.shape_327.setTransform(182.5,-167.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#A3794F").s().p("AgBAnIgvgKIgggOIgLgcIAvgVIA2gFIAvALIAjATIAAAYIgYAOIgkALg");
	this.shape_328.setTransform(181.9,-167.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AA/AuIgkgUIgUgcQgDgChGgPQhJgRhigPICKAQIA/ALIAZAAIBVgbIBeAJIA6AZIAMAvIgzASIg5AEg");
	this.shape_329.setTransform(170,-168.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#A3794F").s().p("AA4AKIhpgDIgxgCIg0ADIgbAEIAZgLIALgHIAJgRQABAIAaALIAsABIAhAAIBkAIIAtACQAmADAYAOQgQgHhrgHg");
	this.shape_330.setTransform(141.9,-169.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#A3794F").s().p("AEZAAQgPgFgRgEIgSgEIg0gHIg5AEIg9ASIgPAIIhigGIg/AAIgygFIiZgFIgIgHIAtABIBOADIA+AGIAcADIAbgBIB/ADIAjgLQAegLATgCIAogCIAXgBIA9AMQAEAAAdAJQAeAIAPAWQgKgIgkgSg");
	this.shape_331.setTransform(160.6,-172.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#AD8355").s().p("Ai2BeQgVACgpgCIg1gCIg0gBIgrgBQgKgEgagGIgggEIgWgDIAkgHIisgHIg3gLIgbgIIAdgSIAVgIIAbgFIAkgUIAXAAIBAACIAsAAIAsAAQAdgDAdgEIA0gHIBOgHICCgNIBFgHIBAgJQA8gIAZgCIBPgEIA/gEICWgQIBdAAIBGgFIB6gBIh4AJIi5AVIg2ACIkjAdIgqAFIhSAKQgqAGgLAEQgPAGgzAHIg3AJIhLAWQgBABABAIQACAIAbAFIBEALIA2AEQgCABAEAQQACAHAKAIQgNgGgMAAg");
	this.shape_332.setTransform(127.4,-180.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#A3794F").s().p("ABaABQhagIgXgBIhKAAIg6gBIgigHIg4gDIAmgDIAkADQgKADCXADQBWADBfAPQBJANAWAFQhIgNhUgJg");
	this.shape_333.setTransform(125.6,-166.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#C19867").s().p("EgtBAEiIAApDMBaDAAAIAAJDg");
	this.shape_334.setTransform(4.3,-173.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#A3794F").s().p("AlwgPIEXAAIDoAMIDigEIk1ATIizgEIj5AIg");
	this.shape_335.setTransform(-247,-137.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#AD8355").s().p("AiuAaIB3gNIAvgTIC3gWIhEAZIhgANQgDACg3AKQghAHgnAAQgaAAgdgDg");
	this.shape_336.setTransform(33.8,-115.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#AD8355").s().p("AoHAQIhDgJID1gDID8gOIAzgGQAugFArgBIBnACIBCABIFvAGIq1ARIhLAIQhJAHhlADIgXABQhUAAg5gHg");
	this.shape_337.setTransform(232.1,-119.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#C9CAC1").s().p("AAPAJIgogEQgbgCAQgLIAlAAQAiAAAIAHQAAAKgRAAIgLAAg");
	this.shape_338.setTransform(-110,-119.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#AD8355").s().p("AkmAoQgpgNgSgEQgPgBgxAEIheAIIgwAFQAVgLA7gGIBDgGIA4gTQAEgCAtgSQAsgSAqgGQAoAAAgAVQAfAUACADIB+gGIDUgfIFSAEIlkAJIhcAVIidAOQgDAEiKAfQgdAFgYAAQgfAAgYgIg");
	this.shape_339.setTransform(-87.9,-116.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#1F2116").s().p("EAjmAAMIlygFMgw5gADIlygEIkJAEIvugEIgMgLMBZ2AAAIAAAXg");
	this.shape_340.setTransform(3.7,-142.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#AD8355").s().p("ABrAGIqCgLIDAgJIDGAGIDrAAIDcAOIDiAAIkJAJg");
	this.shape_341.setTransform(200.5,-94.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#AD8355").s().p("AAiAQQg1gIgugIQgtgJAagFQA0gGA8gCIBDgBIAAAvIg9gIg");
	this.shape_342.setTransform(282,-96.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#AD8355").s().p("AhGAUIlqgJIhPgFIhsgGIhvgHIimgJIhUgFIGiAMICNALIDRAAIJgASIFlgDIDkAFg");
	this.shape_343.setTransform(184.5,-93.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#AD8355").s().p("AReABIl0ADIiIgNIk4AGIj9gJIiMAGIjoAAIj4gGIk3ADIn3gNIMdgDIHMADICRgGIE1AJIEUgMICUATIAyAAIBhACIA9ABIBZAAIBLAAIEQApg");
	this.shape_344.setTransform(152.5,-95.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#AD8355").s().p("AHwAMIjAgGInNAAIlrAGImJgDIL5gXIHNAAIJdAdg");
	this.shape_345.setTransform(26,-93.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#AD8355").s().p("AniAJICeAAIFwgaIJVgDIrMAaIjQAMIllADg");
	this.shape_346.setTransform(-61.4,-95);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#AD8355").s().p("A/BASIKsgpIDiAAIEUgGIHsgDIFzgJIDuAAIBSABICdABIBeABIA4gBIBWgBIAtgBIFNAAIBVAAIB3AAIBdABIA7ACICeALIIJgCIoUASIipgQItQAEIo1gEImVAKIkmgDIi7AHIngAAIjRAQIqyAng");
	this.shape_347.setTransform(72.6,-96.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#AD8355").s().p("A/qAPIDwgQIAtgMIPYgGIK9gKIBXADIU1gBIC/AIII3gBIAAAJIpBAAIi1gLIm0ADIjZgEIivAFInOgBIhhgGIimAIIwSAJIhzgDIiGAFIj6gBIhBAJIlGAcg");
	this.shape_348.setTransform(79.1,-99.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#AD8355").s().p("AmFAdIhRAAIhcgCIhAgDIIFgDIIxgvICvgCIiKAEIpQAzIjqACIg0AAg");
	this.shape_349.setTransform(-140.5,-96.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#AD8355").s().p("AiEABIhPAAQhIABhAgCIDTgFIHkAJIiIACg");
	this.shape_350.setTransform(-233.9,-94);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#A3794F").s().p("Aj9AFIFiAAIB+gGIBHgKIhPAOIh4AHImMACg");
	this.shape_351.setTransform(-173,-96.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#AD8355").s().p("AicAAIAAgFIBxAFIAqgCICeACIj5AGg");
	this.shape_352.setTransform(-267.1,-95.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#AD8355").s().p("ADRABQgogBgWAAIgmAAIgYAAIguAEIibAAIjTgGIAygCIA5gBIA3ADIAvACICYAAIApgFIC1AFIBHgBIhJAGIgtgEg");
	this.shape_353.setTransform(-233,-95.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#A3794F").s().p("Ag8gBIB5ACIh5ABg");
	this.shape_354.setTransform(-276.7,-96.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#A3794F").s().p("Ah5AAIAkgCIAxgBIAmABIAcAAIBbAEIhbACg");
	this.shape_355.setTransform(-244.5,-96.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#A3794F").s().p("AAqgBIiLgCIBVgEIAbgCIApgBQALABAPAJIAQALQg7gIADgEg");
	this.shape_356.setTransform(-208.6,-105.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#A3794F").s().p("AhlADIgZACIAAgKICRAFIBGgFIAmADIh/AIg");
	this.shape_357.setTransform(-269.9,-97.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#AD8355").s().p("A/5AOQBagLBNgFIBSgGIB/gNIEVAAIDfgLIQxgJIFiAHITsgEIJ7ASIAPAIIpmgQIpnAAIiXgEIorALIkrgNIjrAGIqFAAIivAKIpIAKIhIAJQhDALhaAFQhaADhKAKIhNAMQApgQBZgMg");
	this.shape_358.setTransform(75.2,-102.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#A3794F").s().p("AlvAoQilgLiogEIgCAAQCngCCoACQBgAEBlAJQBOAHBLAAQg8ACg9AAQhyAAhzgHgADEAcQAqgEArABQAmAAAOgFQAOgEAdgHQBogLBjgVQBQgVBiAAQB4gDB8ABIBFABQiLACiJAIQjPASjHAbQgmAGggAJQgfAJgoADQhqAEhqACIChgPgAtzAYQheAAhVgIIgHgDIAAgKIAHAAQBLAIBJAKIAxADIgSAAg");
	this.shape_359.setTransform(-175.8,-101.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#AD8355").s().p("AkFARIieAAIE/gMIB9gPIC3AJIDUgVIjEAdIjEgHIhxARIhgAHg");
	this.shape_360.setTransform(-82.4,-124.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#A3794F").s().p("AjjgJIFIgNICpAAIBzAGIDLgQIipAZIiwACIiKgCInpAZIhNANIh+ACg");
	this.shape_361.setTransform(-164.9,-122.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#A3794F").s().p("AhBAAIBOAAICogTIhrATIj+AUg");
	this.shape_362.setTransform(-228.6,-120.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#A3794F").s().p("AjbgBICKAFIBhgGIBlACIBrgPIg4APIhDAKIgwAAIhQAAQgmAAgnACIgqACIgfABIguABg");
	this.shape_363.setTransform(-260.7,-120.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#AD8355").s().p("ArAARIEygQICeAAICVgHIMcgMIpqAXIh9AAIi+AKIiqgEIhyAIg");
	this.shape_364.setTransform(19.3,-124.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#A3794F").s().p("AizAFIFngKIhQAEQhLADhTADIhOABIgrgBg");
	this.shape_365.setTransform(203.7,-121.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#AD8355").s().p("ApoAPIClAAIC7gKICeAAIDRgLIGAgPICBAAIAAAIImGANIiSAHIn/AOg");
	this.shape_366.setTransform(229.4,-115.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#AD8355").s().p("ABfALIj/gJIgTAJIg/gBIh+gEIhbgCIC1gDIBygLIFYAKIEXAAIAAALg");
	this.shape_367.setTransform(245.5,-128.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#AD8355").s().p("ADoAAIjjgDIlcAHIg0gJIMXgCIAAAPg");
	this.shape_368.setTransform(251.8,-136.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#AD8355").s().p("AnyAFIingJIhRgGIXVAEIpdANIj0ACIg1ABIhvABIhmAAQgpAAhZgGg");
	this.shape_369.setTransform(135.9,-136.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#AD8355").s().p("AjPAHIipgHIg1AAIhVAAIhWgBIh0gEIg7gBIDmgGIEjAKIFqgCIKcALIAAAGg");
	this.shape_370.setTransform(214.2,-133.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#AD8355").s().p("AlTANImIgbIFpgCIBjAKIDiANIDRgGIE+AEID6gEIkvAQg");
	this.shape_371.setTransform(74.5,-133.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#AD8355").s().p("AJZAZIkqgNIkJgCIi+gIIiOAIIjPgPIjDAAIhWAAIhjAAIg9gFIhegIIgvgGIJ4AHIATAEIB/AGIDeAAIHKALIBKADIBTADIBKACIBBACIGeALg");
	this.shape_372.setTransform(25.9,-136.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#AD8355").s().p("ACqAUIrTAAIh+gEIjLgTIh+gIIjngFIiWgKIGIACICOANIAvAFIBbAHIA5AGQARACArABIAvACICDgFICtAFIGrgCIBzAIIBzgNIB+AAIBwAHIBngFIBgAJIIhACIo4AEIhBgEIhNAEIjmgEIhcACIg9AHg");
	this.shape_373.setTransform(87,-132);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#AD8355").s().p("AnOAIIgjgFIgnAEQgkADgZAAIBBgNIE7ACIDTgIIAjAAIAvAAIBXAAIBKAAIFpAJIlxgBIg/ABIhMABIgqAAIgdAAIjZAJg");
	this.shape_374.setTransform(110.7,-117);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#AD8355").s().p("AhAAfIgggKQgWgHgTgEQgsgKgKgHIAYgGIhwACIg9ALIgpAAIgzAAIgkAAIgsAAIhFAAIgrAAIgiAAIkAAAIl4gLIGlgCIFpgNINVAAICZgGICsANICPAAIB2gHIBnAHIECgFIAAAiIhUgCIhwgCIhCgBIglgBIg8gEQg1gCgtAAIhbAAIgzAAIhYACIhDABQg7AEgUADQgRADg5AEIhHADIhOAHQg/AFgYABIhsAAIhEACQgbAAgKgCg");
	this.shape_375.setTransform(162.3,-123.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#AD8355").s().p("A9wBUIjegTIkFAGIitgEIk2gUIB/ADIC7AHQCXAFAGgBIENgCIBcAHQBSAHAsADIAmABIAngBIBJAAIA4AAIAvAAIBIgJQA/gHAWgFIA/gQIAwgLICeggIBGgFQA+gFAZAAIBEgBIAzgBIBqgCIDrgEIDsgFIBxgCIA8gBIAzgBIA9gIIA5gCIBAgDIBGgCIA8gCIC5gMIBkABIC+ACIBsABIA2AAIBYgBIAugBIEMgTIEoANIG4gHIB3ADQBvADBwABQBpgBBDgEIBFgEIFlgMIAABJIgrgBIhTgBIgzAAIhIgEQg6gEgjAAQgigBgzgFIg4gFIo8AGInEAAIg/AAIh4AAIhGAAIg0gBIhUgCIgsgBIsxAJIiAAGIuYAIIg1AEIhnAFQg1AEgRAAQgYABgfAHIghAIIhHANIiIAYIhZANIhgAJIhMAGg");
	this.shape_376.setTransform(4,-106.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#AD8355").s().p("ADWA1Ih8gNIhEAEIj8gWIhmgPIh8AAIkygIIjngVIikAAIkbgZIi6gGQBAgHBoAFQBoAFBVAHIBZAJICqADIBggKIBrANIDoAGIHbAWIAwAFIBcAJQAyAEARAEQATADBBACIB/ADIBCABIIkgDIExAJICTgJIDzAGIjRAGIiTAKIuZAJg");
	this.shape_377.setTransform(-7.5,-132.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#A3794F").s().p("AgvgGIhSgGQAPgIAkACIAoADIBUAAIAmAAQAlAHAJAHIhAAOIgrAGg");
	this.shape_378.setTransform(-101.6,-120.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#A3794F").s().p("Ag8AKQgyAAgNgBIgggHIgZgCQAKgEAXAAIAYAAIA0AEIAdAAIAgAAQAHAAAPgEIATgFICWAHIiKAAIgwAMIg3AAg");
	this.shape_379.setTransform(-262.4,-126.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#A3794F").s().p("ABSAEIgZAAIgigBIghgBIgaAAIgqgCIgUABIgXACIgYAAIgYABIgtAAIgnAAIgDAAIgjAAQgaAAAfgCIAmgCIDkgIICqAHIBCgGQgFgGArADQgCABAFAGQAGAFApAAIg2AKg");
	this.shape_380.setTransform(-248.3,-111.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#A3794F").s().p("AmMgGIAMgGQAJgEAVgDQAOgFAEgEIBzAAIARAAIAVAAIAkAAQAVAAgJABIAYAAIAwAAQAjAAAPgEQANgBANAAIASABIAQABQAGAFASAEIAygDIAxgCIA7AAIAegCQAVgBAGABIAwAAIAPAPIAZADQAXADAAACQgUAJgiABIgnAAIhqALIgcAHIAAgHIgWgHIjlAFIgyACQgrACgNACQgNADgvACIg1ADIhgAFg");
	this.shape_381.setTransform(-243,-116.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#A3794F").s().p("AhIAKIgigJIAXADQAVABAPgFIArgLIAwgHIAtABIASAQQAEABg6AKIhWAIQgJgBgegHg");
	this.shape_382.setTransform(-193.8,-119.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#A3794F").s().p("AAkApIBsgOIAOgJIhUAGIhIANIgXABIggAAIBfgOIgZgDIiVACIgmALIgXAAIgmAFIgTAAIBigNIgOgCIiIAAIhYAKIhxgCIgSgFIgQAAIgZAFIgUAAIAAgrIBGAIQA+AEAaAAIAvgDIAigEIAzgBIA0gBIAigDIAdgCIDegHQABABAOgBIAggDIAZgBIgrAHIgYACIgeABIggADIgbADIg9AFIBvgEICFgNIAggIICugMIBCAFIA0ALQAFgBArAFQAsAEAXAKIgoACIg7ACIg4gCIglgCIgqABQglAAgQACIguAHIghAIIgRAGIgWAGIgWAIIhSAJg");
	this.shape_383.setTransform(-224.4,-123.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#A3794F").s().p("ABLgEICPgCIiEAGIkvAHg");
	this.shape_384.setTransform(-250.7,-113.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#A3794F").s().p("AhtAJIDbgRIgQAIIgeABIgjACIgnADIgkADg");
	this.shape_385.setTransform(-225.3,-113.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#A3794F").s().p("AiUAeIAXgIIASgLIBCgGIDygpIhWATIgzAJQgsAIgMAAQgHAAgRAEIgVAEIhGAJIgVAOIBFAAIiNAGg");
	this.shape_386.setTransform(-201.6,-115.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#A3794F").s().p("ABLgJIA7gSIgSAJQgSAKgTAEIgjAGIgTAFIgWADIgcAEIg5AIIgzAGg");
	this.shape_387.setTransform(-192.3,-116.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#A3794F").s().p("AgQADQAPgDABAAIgVgDIgyAAIg5gHIAXABIAfABIAIAAIBCgKIAdgBIASgBQAIgBAcACQAMAEAQAPIARAQQgGABgVgDQgLgCgmACQgYAAgeADIgjAEQAFgOAQgEg");
	this.shape_388.setTransform(-173.4,-121.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#A3794F").s().p("AJKBTQgQgDgZAAIgbABQAbgIAWgBIAXgCIAngGIALgRIgQgXIACgJIgLgPIhUgRIhIgKIghgGQgfgFgmgEQgegDhpgHIjIgNIhmgGIpKARIiBgLIgnADIAAgIIAhgDIA6ACIAJADIAXAAIAfABQALABATgBIAUgBIAgAAIAWAAIAeAAIAaAAIATAAIAlgCIAygCQAMAAARgCIARgDIAuAAIA2AAIAdgCIAVgDIBCAAIAsABIA5AAIBeACIBXAFIBpAIIA0AFIAmAEIAwAFIBGAIIBCAIIAkADIAfADQAKACAdACIA1AGQAnAFAOAEQAMADASAIIASAIIAbAIIAZAAIAOAFIhHAuIiMALQgFAFgbAAIgGAAg");
	this.shape_389.setTransform(-199.2,-125.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#A3794F").s().p("AzKC1Ig5gEIhHgGIhLgGIhXgCIhRgCIgygBIhWgBIgtgBIg0gCIhYgBQgsAAhGgEIhPgEIIWADIA6ADQA3ADBHACQBAABAkAEQAkADAzAHQAzAHAKgCIAXgCIBVgBIBlgCQAmAABDgNQBCgMAXgOQAUgNAbgMIAegLQA4gOBYgIQBYgGAPAAIA1gCIA+gCIA+gDIBZgHIAugDIBdgNIBZgTIBqAAICKgMIAtgEIBVgGIAzgEQAJAAARgFIATgGIg4gMIgrgHQgngHg0gHQgygIgggOQgggNgBgCIh2gRIkvgFIhWgRIgkAAIgwAAIgwAAIgtAAIhTgFIiNgKIhLgFIjOgMIlGgCIhGAAIhVAAQgYABg/AEIhIAFIgxAAIhdABIg3AAIg0gCIgtgDIjgADIAAgLIClgEIAqAAIAzAAIA3AAIA6AAIA4AAIArAAIFLgUIBKADIBXACIBEADIA4ADIDOAEIAqADIBRAFIAxADIAyADIBUAFIAtADIAeAAIAsAAIApAAIAiAAIAiADIAbADIAaAFIAoAFQASACAuABIBDACIBOAFIB+AIIBCAEIA1ACIBAABIB6APQA4AGBCADIBQAEIBQAIIBTAJQAQAEBCAJQBBAKApABQB2AFByAJQCzAECygEIEEgEQCFgDB8AJIgCAKQjgAHjfgFQjggFjfAEQhlAGheAPQhVAIhRAOQhpAWhvAFIjdAKQiLAHiMAFQgKAFkuAAQiSgChGAEQhGAFgUAGQgSAFg4AMIhpAWIg2ALIg9ANQg3ALggAFQgcAEgrABIg5ABIg5AAIgtgBIgmABIgsACIg2gFg");
	this.shape_390.setTransform(-71.7,-118.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#A3794F").s().p("AIYA+QgOgFgJgCIAaACQAdAFATgHQAegVgBgFIhVgiIAPgIIhlgTQhegRhYgHQiggHgpABQgXAAgnADIg4AFIhHAEIg8ADIguAAIgvAAIgrABIgtABIgrAAIgpAAIgjgBIgjgBIgjABIgdABIgVAAIgcAAIgaAAIgTAAIggABIAAgOIAzgBIA+AAIBPAEQA9AEAZABIBUAAQA8AAAhgDIBIgFIBkgFIA4gEIA8gBIBsgBIBGgBQAXABBDAFIByALIBpAOIBBAJIB1AjIgSAWIAWAEQARAEgOAIQgVAHgXAEIgaADIgdAHQgaAGgNABQgMgBgVgIg");
	this.shape_391.setTransform(-211.4,-123.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#A3794F").s().p("AAHgGQAxgDAGABQgsABglAHIgqAKQAVgNAvgDg");
	this.shape_392.setTransform(-142.8,-111);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#A3794F").s().p("AAmAAQAGAGA1gXQAAABgNALQgNAKgYACQgaAAgaAEIgeAEIg9ADg");
	this.shape_393.setTransform(-195,-113.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#A3794F").s().p("AhZAKQgOgBgHgEQALACAcgDIA6gGIAYgDIBkgFIg0AKIgeAAIgvACQgrAGgFADIgCAAIgVgBg");
	this.shape_394.setTransform(-146.1,-114.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#A3794F").s().p("ABSATIgrgFQgCgDgSgFIgggDIgOgCIgSgBQgIAAggABQghABgbgQIAygDQAsgDAhAGIBLAVIBZAMg");
	this.shape_395.setTransform(-187.2,-108.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#A3794F").s().p("AlzABIDcgBIAugGIB1AFIDXgCIBLgHIBHAAIhpAJIiyAFIgRgBIgZAAIgcAAIhgAAIhGAHIjjACg");
	this.shape_396.setTransform(-245.5,-109.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#A3794F").s().p("AF7AvIhagCQgcgBhEgFIhNgGIg7gDIhegEIhWgEIgygCIkJAAIhFAAIhXgBIguAAIgbAAIAAgGIAdgDQAZgCAMAAIBHACIB5ADIBAABIDdACIAkAAIAuAAIAjABQAWACAJADQAJACAYAAIAagBIAZAAIAhABIAmAEIAnADIA6ADIBfAEIAzACIAygFQAugEA+gIQA4gLAFgXQAEgZgEgDIAVgIQABACAEAUQADATgKAPQgRAQg3AJQg3AKgrACQgcACgkAAIgvgBg");
	this.shape_397.setTransform(-215.9,-106.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#AD8355").s().p("AEyAVIgOAAIgUAAIgmgEIgggFIgbgNQgDgEgWgEIgkAAIgrADIg1ADQgSAAgfADQghADgWAAQgxgBgXgCIgigDIgbgCIk2AEIh2gGIBCABIBhAAIA6AAIAcAAICzgGIAvAFIAdADIAjADIAxgCIAtgDIBegJIBYgCIA2APIBGAKICtABIAPgFIADgGIAHADQAGAEgNAHIAAAHIBYgGIASgNIAZgPIhJAPIBLgZIAggBIgSAIIgMARQABABgNAKQgNALgoADQgtACgrAAIgtABg");
	this.shape_398.setTransform(-218.3,-106.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#A3794F").s().p("AgbAZQgogNgJgGQgIgGAqgTQAagFAUAAIAZAAIAPAFQANAEAFABIAQACQAGAJghAPQgnANgfAAIgIAAg");
	this.shape_399.setTransform(-173.8,-112);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#A3794F").s().p("AhDAbIgYgNIAAgWIAjgTIAvgJIA2AEIAvAUIgLAaIggANIgvAJIghABg");
	this.shape_400.setTransform(-173.2,-112.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("Ai6AsIgzgQIANgsIA6gXIBegJIBVAaIAZAAIDIgaQhiAPhIAPIhKAQIgTAaIglATIhDAGg");
	this.shape_401.setTransform(-161.3,-112.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#A3794F").s().p("Ah0AHIAtgCIBkgHIAggBQAdAAAQgBQAZgKACgHIAJAQIALAFIAZALIhPgGIgyACIhoACQhrAHgPAGQAXgMAmgDg");
	this.shape_402.setTransform(-133.2,-113.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#A3794F").s().p("AkZgDQAdgJADAAIA+gLIAXABIAoACQATACAeAKIAiALIB/gEIAbABIAdgCQAagFAlgCIBNgCIAsgBIgGAGIiaAFIgxAFIiiAFIgQgGIg9gSIg4gDIg1AGIgSADQgQAEgQAFQgjARgKAHQAQgUAdgHg");
	this.shape_403.setTransform(-151.8,-116.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#A3794F").s().p("ACpBPQAGgPgDgBIA2gDIBDgKQAcgFACgIQACgHgBgBIhMgVIg4gIQgygHgQgFQgKgDgqgGIhRgKIgrgEIkigcIg2gBIh3gPIi7gNIEdAGICWAPIA/ADIBPAEIBUAJIBCAIIBEAHICDANIBMAGIA0AGQAeAEAeACIAsAAIAsAAIA/gBIAXAAIAkASIAbAFIAUAHIAeARIgbAIIg3AKIisAGIAlAIIgXACIggAEQgaAGgKAEIgrAAIgzABIg2ACQgpACgVgCQgMAAgNAFQAKgHABgHg");
	this.shape_404.setTransform(-118.7,-124.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#A3794F").s().p("AihAHQBggOBVgDQCWgDgJgDIAkgDIAmADIg4ADIgiAHIg6ABIhKAAQgWABhaAHQhJAHg+AKIBJgNg");
	this.shape_405.setTransform(-115.8,-111.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#C19867").s().p("EgtBAEPIAAodMBaDAAAIAAIdg");
	this.shape_406.setTransform(4.3,-117);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#A3794F").s().p("AlwgPIEXAAIDoAMIDigEIk1ATIizgEIj5AIg");
	this.shape_407.setTransform(-247,72);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#AD8355").s().p("AiuAaIB3gNIBNgTICZgWIhEAZIhgANQgDACg3AKQghAHgnAAQgaAAgdgDg");
	this.shape_408.setTransform(33.8,94.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#AD8355").s().p("AoHAQIhDgJIEVgDIDcgOIAzgGQAugFArgBIBnACIBCABIFvAGIq1ARIhLAIQhJAHhlADIgXABQhUAAg5gHg");
	this.shape_409.setTransform(232.1,90.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#916843").s().p("AkmAoQgpgNgSgEQgPgBgxAEIheAIIgwAFQAVgLA7gGIBDgGIA4gTQAEgCAtgSQAsgSAqgGQAoAAAgAVQAfAUACADIB+gGIDUgfIFSAEIlkAJIhcAVIidAOQgDAEiKAfQgdAFgYAAQgfAAgYgIg");
	this.shape_410.setTransform(-87.9,92.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#1F2116").s().p("EAjmAAMIlygFMgw5gADIlygEIkJAEIvugEIgMgLMBZ2AAAIAAAXg");
	this.shape_411.setTransform(3.7,67.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#A3794F").s().p("ABrAGIqCgLIDAgJIDGAGIDrAAIDcAOIDiAAIkJAJg");
	this.shape_412.setTransform(200.5,115.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#A3794F").s().p("AAiAQQg1gIgugIQgtgJAagFQA0gGA8gCIBDgBIAAAvIg9gIg");
	this.shape_413.setTransform(282,113.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#A3794F").s().p("AhGAUIlqgJIhPgFIhsgGIhvgHIimgJIhUgFIGiAMICNALIDRAAIJgASIFlgDIDkAFg");
	this.shape_414.setTransform(184.5,116.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#A3794F").s().p("AReABIl0ADIiIgNIk4AGIj9gJIiMAGIjoAAIj4gGIk3ADIn3gNIMdgDIHsADICRgGIEVAJIEUgMICUATIAyABIBhABIA9ABIBZAAIBLAAIEQApg");
	this.shape_415.setTransform(152.5,114.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#A3794F").s().p("AHgAMIjAgGInOAAIlqAGIlpgDILZgXIHNAAIJdAdg");
	this.shape_416.setTransform(27.6,115.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#A3794F").s().p("AniAJICeAAIGQgaII1gDIrMAaIjQAMIllADg");
	this.shape_417.setTransform(-61.4,114.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#AD8355").s().p("A/BASIKsgpIDiAAIEUgGIHsgEIFzgJIDuAAIBSACICdABIBeABIA4gBIBWgBIAtgCIFNAAIBVAAIB3AAIBdACIA7ACICeALIIJgCIoUATIipgRItQAEIo1gEImVAKIkmgCIi7AGIngAAIjRAQIqyAng");
	this.shape_418.setTransform(72.6,112.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#AD8355").s().p("A/qAOIDwgPIAtgLIPYgHIK9gKIBXADIKlgDIKQACIC/AIII3gCIAAAJIpBAAIi1gJIm0ACIjZgDIivAEInOgBIhhgFIimAHIwSAJIhzgEIiGAHIj6gBIhBAJIlGAbg");
	this.shape_419.setTransform(79.1,109.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#A3794F").s().p("AmFAeIhRAAIhcgDIhAgDIIFgCIIxgxICvgCIiKAFIpQAzIjqADIg0AAg");
	this.shape_420.setTransform(-140.5,112.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#A3794F").s().p("AiEABIhPAAQhIABhAgCIDTgFIHkAJIiIACg");
	this.shape_421.setTransform(-233.9,115.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#A3794F").s().p("Aj9AFIFiAAIB+gGIBHgKIhPAOIh4AHImMACg");
	this.shape_422.setTransform(-173,113.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#A3794F").s().p("AicAAIAAgFIBxAFIAqgBICeABIj5AGg");
	this.shape_423.setTransform(-267.1,114.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#A3794F").s().p("ADRACQgogCgWAAIgmAAIgYAAIguAEIibAAIjTgGIAygCIA5AAIA3ACIAvACICYAAIApgEIC1AEIBHgBIhJAGIgtgDg");
	this.shape_424.setTransform(-233,114);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#A3794F").s().p("Ag8gBIB5ACIh5ABg");
	this.shape_425.setTransform(-276.7,113.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#A3794F").s().p("Ah5AAIAkgCIAxgBIAmABIAcAAIBbAEIhbACg");
	this.shape_426.setTransform(-244.5,112.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#A3794F").s().p("AAqAAIiLgDIBVgFIAbgBIApgBQALABAPAJIAQALQg7gIADgDg");
	this.shape_427.setTransform(-208.6,104.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#A3794F").s().p("AhlADIgZACIAAgKICRAFIBGgFIAmAEIh/AHg");
	this.shape_428.setTransform(-269.9,111.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#AD8355").s().p("A/5AOQBagMBNgEIBSgGIB/gNIEVAAIDfgLIQxgJIFiAHITsgEIJ7ASIAPAIIpmgQIpnAAIiXgEIorALIkrgNIjrAGIqFAAIivAKIpIAKIhIAKQhDAKhaAFQhaADhKAKIhNAMQApgQBZgMg");
	this.shape_429.setTransform(75.2,107.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#AD8355").s().p("AlvAoQilgLiogEIgCAAQCngCCoACQBgAEBlAJQBOAHBLAAQg8ACg9AAQhyAAhzgHgADEAcQAqgEArABQAmAAAOgFQAOgEAdgHQBogLBjgVQBQgVBiAAQB4gDB8ABIBFABQiLACiJAIQjPASjHAbQgmAGggAJQgfAJgoADQhqAEhqACIChgPgAtzAYQheAAhVgIIgHgDIAAgKIAHAAQBLAIBJAKIAxADIgSAAg");
	this.shape_430.setTransform(-175.8,108.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#916843").s().p("AkFARIieAAIE/gMIB9gPIC3AIIDUgVIjEAeIjEgGIhxAQIhgAGg");
	this.shape_431.setTransform(-82.4,85.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#916843").s().p("AjjgJIFIgNICpAAIBzAGIDLgQIipAZIiwACIiKgCInpAZIhNANIh+ACg");
	this.shape_432.setTransform(-164.9,87.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#A3794F").s().p("AhBAAIBOAAICogTIhrATIj+AUg");
	this.shape_433.setTransform(-228.6,88.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#A3794F").s().p("AjbgBICKAFIBhgGIBlACIBrgPIg4APIhDAKIgwAAIhQAAQgmAAgnACIgqACIgfABIguABg");
	this.shape_434.setTransform(-260.7,89.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#AD8355").s().p("ArAARIEygQICeAAICVgHIMcgMIpqAXIiiAAIiZAKIiqgEIhyAIg");
	this.shape_435.setTransform(19.3,84.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#AD8355").s().p("AizAFIFngKIhQAEQhLADhTADIhOABIgrgBg");
	this.shape_436.setTransform(203.7,88.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#AD8355").s().p("ApoAPIDEAAIC8gKIB+AAIDRgLIGAgOICBAAIAAAIImGAMIiSAHIn/APg");
	this.shape_437.setTransform(229.4,93.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#AD8355").s().p("ABfALIj/gJIgTAJIg/gCIh+gCIhbgCIC1gFICRgKIE5AKIEXAAIAAALg");
	this.shape_438.setTransform(245.5,81);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#A3794F").s().p("ADoAAIjjgDIk8AHIhUgJIMXgCIAAAPg");
	this.shape_439.setTransform(251.8,72.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#AD8355").s().p("AnbAFIi1gJIhagGIXVAEIpdANIj0ACIhZABIiQABQgrAAhhgGg");
	this.shape_440.setTransform(135.9,72.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#A3794F").s().p("AjPAHIipgHIg1AAIhVAAIhWgBIh0gEIg7gBIDmgGIEjAKIGJgCIJ9ALIAAAGg");
	this.shape_441.setTransform(214.2,76.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#AD8355").s().p("AlTANImIgbIFpgCIBjAKIDiANIDRgGIE+AEID6gEIkvAQg");
	this.shape_442.setTransform(74.5,76.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#916843").s().p("AJZAYIkqgMIkJgCIi+gIIiOAIIjPgOIjDAAIhWAAIhjAAIg9gGIhegJIgvgEIJ4AFIATAFIB/AGIDeAAIHKALIBKADIBTADIBKACIBBACIGeAKg");
	this.shape_443.setTransform(25.9,73.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#AD8355").s().p("ACqAUIrTAAIh+gEIjLgTIh+gIIjngFIiWgKIGIACICOANIAvAFIBbAHIA5AGQARACArABIAvACICDgFICtAFIGrgCIBzAIIBzgNIB+AAIBwAHIBngFIBgAJIIhACIo4AEIhBgEIhNAEIjmgEIhcACIg9AHg");
	this.shape_444.setTransform(87,77.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#AD8355").s().p("AnOAIIgjgEIgnACQgkADgZABIBBgNIE7ACIDTgIIAjAAIAvAAIBXAAIBKAAIFpAJIlxgBIg/ABIhMACIgqAAIgdAAIjZAIg");
	this.shape_445.setTransform(110.7,92.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#AD8355").s().p("AhAAfIgggKQgWgHgTgEQgsgKgKgHIAYgGIhwACIg9ALIgpAAIgzAAIgkAAIgsAAIhFAAIgrAAIgiAAIkAAAIl4gLIGlgCIFpgNINVAAICZgGICsANICPAAIB2gHIBnAHIECgFIAAAiIhUgCIhwgCIhCgBIglgBIg8gEQg1gCgtAAIhbAAIgzAAIhYACIhDABQg7AEgUADQgRADg5AEIhHADIhOAHQg/AFgYABIhsAAIhEACQgbAAgKgCg");
	this.shape_446.setTransform(162.3,85.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#AD8355").s().p("A9wBUIjegTIkFAGIitgEIk2gUIB/ADIC7AHQCXAFAGgBIENgCIBcAHQBSAHAsADIAmABIAngBIBJAAIA4AAIAvAAIBIgJQA/gHAWgFIA/gQIAwgLICeggIBGgFQA+gFAZAAIBEgBIAzgBIBqgCIDrgEIDsgFIBxgCIA8gBIAzgBIA9gIIA5gCIBAgDIBGgCIA8gCIC5gMIBkABIC+ACIBsABIA2AAIBYgBIAugBIEMgTIEoANIG4gHIB3ADQBvADBwABQBpgBBDgEIBFgEIFlgMIAABJIgrgBIhTgBIgzAAIhIgEQg6gEgjAAQgigBgzgFIg4gFIo8AGInEAAIg/AAIh4AAIhGAAIg0gBIhUgCIgsgBIsxAJIiAAGIuYAIIg1AEIhnAFQg1AEgRAAQgYABgfAHIghAIIhHANIiIAYIhZANIhgAJIhMAGg");
	this.shape_447.setTransform(4,102.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#AD8355").s().p("ADWA1Ih8gNIhEAEIj8gWIhmgPIh8AAIkygIIjngVIikAAIkbgZIi6gGQBAgHBoAFQBoAFBVAHIBZAJICqADIBggKIBrANIDoAGIHbAWIAwAFIBcAJQAyAEARAEQATADBBACIB/ADIBCABIIkgDIExAJICTgJIDzAGIjRAGIiTAKIuZAJg");
	this.shape_448.setTransform(-7.5,77.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#A3794F").s().p("AgvgGIhSgGQAPgIAkACIAoADIBUAAIAmAAQAlAHAJAHIhAAOIgrAGg");
	this.shape_449.setTransform(-101.6,88.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#A3794F").s().p("Ag8AKQgyAAgNgBIgggHIgZgDQAKgDAXAAIAYAAIA0AEIAdAAIAgAAQAHAAAPgEIATgFICWAHIiKAAIgwAMIg3AAg");
	this.shape_450.setTransform(-262.4,83);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#A3794F").s().p("ABSAEIgZAAIgigBIghgBIgaAAIgqgCIgUABIgXACIgYAAIgYABIgtAAIgnAAIgDAAIgjAAQgaAAAfgCIAmgCIDkgIICqAHIBCgGQgFgGArADQgCABAFAGQAGAFApAAIg2AKg");
	this.shape_451.setTransform(-248.3,98.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#A3794F").s().p("AmMgGIAMgGQAJgEAVgDQAOgFAEgEIBzAAIARAAIAVAAIAkAAQAVAAgJABIAYAAIAwAAQAjAAAPgEQANgBANAAIASABIAQABQAGAFASAEIAygDIAxgCIA7AAIAegCQAVgBAGABIAwAAIAPAPIAZADQAXADAAACQgUAJgiABIgnAAIhqALIgcAHIAAgHIgWgHIjlAFIgyACQgrACgNACQgNADgvACIg1ADIhgAFg");
	this.shape_452.setTransform(-243,93.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#A3794F").s().p("AhIAKIgigIIAXACQAVAAAPgDIArgNIAwgGIAtABIASAPQAEACg6AKIhWAJQgJgCgegHg");
	this.shape_453.setTransform(-193.8,89.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#A3794F").s().p("AAkApIBsgOIAOgJIhUAGIhIANIgXABIggAAIBfgOIgZgDIiVACIgmALIgXAAIgmAFIgTAAIBigNIgOgCIiIAAIhYAKIhxgCIgSgFIgQAAIgZAFIgUAAIAAgrIBGAIQA+AEAaAAIAvgDIAigEIAzgBIA0gBIAigDIAdgCIDegHQABABAOgBIAggDIAZgBIgrAHIgYACIgeABIggADIgbADIg9AFIBvgEICFgNIAggIICugMIBCAFIA0ALQAFgBArAFQAsAEAXAKIgoACIg7ACIg4gCIglgCIgqABQglAAgQACIguAHIghAIIgRAGIgWAGIgWAIIhSAJg");
	this.shape_454.setTransform(-224.4,85.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#A3794F").s().p("ABLgEICPgDIiEAHIkvAHg");
	this.shape_455.setTransform(-250.7,96.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#A3794F").s().p("AhtAKIDbgSIgQAIIgeABIgjACIgnADIgkAEg");
	this.shape_456.setTransform(-225.3,95.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#A3794F").s().p("AiUAeIAXgIIASgLIBCgGIDygpIhWATIgzAJQgsAIgMAAQgHAAgRAEIgVAEIhGAJIgVAOIBFAAIiNAGg");
	this.shape_457.setTransform(-201.6,93.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#A3794F").s().p("ABLgJIA7gSIgSAJQgSAKgTAEIgjAGIgTAFIgWADIgcAEIg5AIIgzAGg");
	this.shape_458.setTransform(-192.3,92.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#9E744A").s().p("AgQADQAPgDABAAIgVgDIgyAAIg5gHIAXABIAfABIAIAAIBCgKIAdgBIASgBQAIgBAcACQAMAEAQAPIARAQQgGABgVgDQgLgCgmACQgYAAgeADIgjAEQAFgOAQgEg");
	this.shape_459.setTransform(-173.4,88.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#9E744A").s().p("AJKBTQgQgDgZAAIgbABQAbgIAWgBIAXgCIAngGIALgRIgQgXIACgJIgLgPIhUgRIhIgKIghgGQgfgFgmgEQgegDhpgHIjIgNIhmgGIpKARIiBgLIgnADIAAgIIAhgDIA6ACIAJADIAXAAIAfABQALABATgBIAUgBIAgAAIAWAAIAeAAIAaAAIATAAIAlgCIAygCQAMAAARgCIARgDIAuAAIA2AAIAdgCIAVgDIBCAAIAsABIA5AAIBeACIBXAFIBpAIIA0AFIAmAEIAwAFIBGAIIBCAIIAkADIAfADQAKACAdACIA1AGQAnAFAOAEQAMADASAIIASAIIAbAIIAZAAIAOAFIhHAuIiMALQgFAFgbAAIgGAAg");
	this.shape_460.setTransform(-199.2,84.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#AD8355").s().p("AzKC1Ig5gEIhHgGIhLgGIhXgCIhRgCIgygBIhWgBIgtgBIg0gCIhYgBQgsAAhGgEIhPgEIIWADIA6ADQA3ADBHACQBAABAkAEQAkADAzAHQAzAHAKgCIAXgCIBVgBIBlgCQAmAABDgNQBCgMAXgOQAUgNAbgMIAegLQA4gOBYgIQBYgGAPAAIA1gCIA+gCIA+gDIBZgHIAugDIBdgNIBZgTIBqAAICKgMIAtgEIBVgGIAzgEQAJAAARgFIATgGIg4gMIgrgHQgngHg0gHQgygIgggOQgggNgBgCIh2gRIkvgFIhWgRIgkAAIgwAAIgwAAIgtAAIhTgFIiNgKIhLgFIjOgMIlGgCIhGAAIhVAAQgYABg/AEIhIAFIgxAAIhdABIg3AAIg0gCIgtgDIjgADIAAgLIClgEIAqAAIAzAAIA3AAIA6AAIA4AAIArAAIFLgUIBKADIBXACIBEADIA4ADIDOAEIAqADIBRAFIAxADIAyADIBUAFIAtADIAeAAIAsAAIApAAIAiAAIAiADIAbADIAaAFIAoAFQASACAuABIBDACIBOAFIB+AIIBCAEIA1ACIBAABIB6APQA4AGBCADIBQAEIBQAIIBTAJQAQAEBCAJQBBAKApABQB2AFByAJQCzAECygEIEEgEQCFgDB8AJIgCAKQjgAHjfgFQjggFjfAEQhlAGheAPQhVAIhRAOQhpAWhvAFIjdAKQiLAHiMAFQgKAFkuAAQiSgChGAEQhGAFgUAGQgSAFg4AMIhpAWIg2ALIg9ANQg3ALggAFQgcAEgrABIg5ABIg5AAIgtgBIgmABIgsACIg2gFg");
	this.shape_461.setTransform(-71.7,91.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#9E744A").s().p("AIYA+QgOgFgJgCIAaACQAdAEATgFQAegWgBgEIhVgjIAPgIIhlgTQhegQhYgIQiggIgpACQgXAAgnADIg4AFIhHAEIg8ADIguAAIgvAAIgrABIgtABIgrAAIgpAAIgjgBIgjgBIgjABIgdABIgVAAIgcAAIgaAAIgTAAIggABIAAgOIAzAAIA+gBIBPAEQA9AEAZABIBUAAQA8AAAhgDIBIgFIBkgGIA4gDIA8gBIBsgBIBGgBQAXAABDAGIByALIBpAOIBBAJIB1AjIgSAWIAWAEQARAEgOAHQgVAIgXAEIgaADIgdAIQgaAFgNABQgMgBgVgIg");
	this.shape_462.setTransform(-211.4,85.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#A3794F").s().p("AAHgGQAxgDAGABQgsABglAHIgqAKQAVgNAvgDg");
	this.shape_463.setTransform(-142.8,98.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#A3794F").s().p("AAmABQAGAFA1gXQAAABgNALQgNAKgYACQgaAAgaAEIgeAEIg9AEg");
	this.shape_464.setTransform(-195,96.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#A3794F").s().p("AhZAKQgOgBgHgEQALACAcgDIA6gGIAYgDIBkgFIg0AKIgeAAIgvACQgrAGgFADIgCAAIgVgBg");
	this.shape_465.setTransform(-146.1,95.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#A3794F").s().p("ABSATIgrgFQgCgDgSgFIgggDIgOgCIgSgBQgIAAggABQghABgbgQIAygDQAsgDAhAGIBLAVIBZAMg");
	this.shape_466.setTransform(-187.2,101.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#A3794F").s().p("AlzABIDcgBIAugFIB1ADIDXgBIBLgHIBHgBIhpAKIiyAEIgRAAIgZAAIgcAAIhgAAIhGAIIjjABg");
	this.shape_467.setTransform(-245.5,100.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#AD8355").s().p("AF7AvIhagCQgcgBhEgFIhNgGIg7gDIhegEIhWgEIgygCIkJAAIhFAAIhXgBIguAAIgbAAIAAgGIAdgDQAZgCAMAAIBHACIB5ADIBAABIDdACIAkAAIAuAAIAjABQAWACAJADQAJACAYAAIAagBIAZAAIAhABIAmAEIAnADIA6ADIBfAEIAzACIAygFQAugEA+gIQA4gLAFgXQAEgZgEgDIAVgIQABACAEAUQADATgKAPQgRAQg3AJQg3AKgrACQgcACgkAAIgvgBg");
	this.shape_468.setTransform(-215.9,103.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#AD8355").s().p("AEyAVIgOAAIgUAAIgmgEIgggFIgbgNQgDgEgWgEIgkAAIgrADIg1ADQgSAAgfADQghADgWAAQgxgBgXgCIgigDIgbgCIk2AEIh2gGIBCABIBhAAIA6AAIAcAAICzgGIAvAFIAdADIAjADIAxgCIAtgDIBegJIBYgCIA2APIBGAKICtABIAPgFIADgGIAHADQAGAEgNAHIAAAHIBYgGIASgNIAZgPIhJAPIBLgZIAggBIgSAIIgMARQABABgNAKQgNALgoADQgtACgrAAIgtABg");
	this.shape_469.setTransform(-218.3,103.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#8E6642").s().p("AgbAZQgogNgJgGQgIgGAqgTQAagFAUAAIAZAAIAPAFQANAEAFABIAQACQAGAJghAPQgnANgfAAIgIAAg");
	this.shape_470.setTransform(-173.8,97.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#A3794F").s().p("AhDAbIgYgOIAAgVIAjgSIAvgKIA2AEIAvAUIgLAaIggANIgvAKIghAAg");
	this.shape_471.setTransform(-173.2,97.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#9E744A").s().p("Ai6AsIgzgQIANgsIA6gXIBegJIBVAaIAZAAIDIgaQhiAPhIAPIhKAQIgTAaIglATIhDAGg");
	this.shape_472.setTransform(-161.3,97);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#A3794F").s().p("Ah0AHIAtgCIBkgHIAggBQAdAAAQgBQAZgKACgHIAJAQIALAFIAZALIhPgGIgyACIhoACQhrAHgPAGQAXgMAmgDg");
	this.shape_473.setTransform(-133.2,95.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#A3794F").s().p("AkZgDQAdgKADABIA+gLIAXABIAoACQATACAeAKIAiAKIB/gCIAbAAIAdgCQAagFAlgCIBNgCIAsgBIgGAGIiaAGIgxAEIiiAFIgQgHIg9gRIg4gDIg1AGIgSADQgQAEgQAFQgjARgKAHQAQgUAdgHg");
	this.shape_474.setTransform(-151.8,93.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#9E744A").s().p("ACpBPQAGgPgDgBIA2gDIBDgKQAcgFACgIQACgHgBgBIhMgVIg4gIQgygHgQgFQgKgDgqgGIhRgKIgrgEIkigcIg2gBIh3gPIi7gNIEdAGICWAPIA/ADIBPAEIBUAJIBCAIIBEAHICDANIBMAGIA0AGQAeAEAeACIAsAAIAsAAIA/gBIAXAAIAkASIAbAFIAUAHIAeARIgbAIIg3AKIisAGIAlAIIgXACIggAEQgaAGgKAEIgrAAIgzABIg2ACQgpACgVgCQgMAAgNAFQAKgHABgHg");
	this.shape_475.setTransform(-118.7,85.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#A3794F").s().p("AihAHQBggOBVgDQCWgDgJgDIAkgDIAmADIg4AEIgiAGIg6ABIhKAAQgWABhaAHQhJAHg+AKIBJgNg");
	this.shape_476.setTransform(-115.8,98.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#C19867").s().p("EgtBAEOIAAocMBaDAAAIAAIcg");
	this.shape_477.setTransform(4.3,92.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#A3794F").s().p("ABVATIhwgSIjDAHIjDghIDSAXIC4gJIB8AQIBBAFIBjAAICZAJIidAAIhQAHg");
	this.shape_478.setTransform(1.1,-59.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#A3794F").s().p("AHMAiIhNgOIkDgUIjjgIIjeADIhcgDIiogbIDLASIBygHICoAAIFHAOICgASIBgARIBnALg");
	this.shape_479.setTransform(53.6,-61.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#A3794F").s().p("AhJAAIhrgVICoAVIBOAAIBzAWg");
	this.shape_480.setTransform(-1.9,-61.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#AD8355").s().p("ABMAMIhNgFIjgAAIjUgHIEggQICvAOIGcAAQgBABg0AIQg0AJhZABQhdgBhLgEg");
	this.shape_481.setTransform(179.3,-87);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#A3794F").s().p("A9mAOIL+gQIHpAJIGQgUICIANIJjgCIFJgLIBOABICtACICzABIDmgBIELgCIB/gBIAEAbg");
	this.shape_482.setTransform(102.2,-33.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#A3794F").s().p("AA6AFIidgGIhPgFIFlAMQgQABgbAAQggAAgugCg");
	this.shape_483.setTransform(-194,-65.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#AD8355").s().p("AEVAhIiPgHIhagEIj7gMIkPgRIBBgGQA+gHBLgGQBLgHAtAAIBtAAIAvAAIBnAOIDRAaICnAWIhLADQglACgjAAIg3gBg");
	this.shape_484.setTransform(-213.5,-64.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#A3794F").s().p("AFkALIioAEIiYgLIijAAIoWgXILHALICVAIICdAAIEyARIi/ADg");
	this.shape_485.setTransform(-6.2,-69.8);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#AD8355").s().p("ADUBdQhtgQhvgLQg9gCgsgHQgtgHgwgTQgzgTgygDQgygEg1gIQg9gPAUgHQAVgHAzgEQAygCAcAAQB5gGBvgTQBvgDBzgCQA6gIA/gMQA+gNA4ASQgUgBhIAXQhJAVgXAJQgpATgwAJQg6AcAyAMQAxAMAtAFQB9AZB/ANQhBAChBAAQg6AAg5gBg");
	this.shape_486.setTransform(-11.6,-64.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#A3794F").s().p("AlKAHIhrAPIBrggIB/gEIBMACICgAEICMACQBDgDAqgJQArgJA+ARQgGACgGAMQgHANBGABImnAEg");
	this.shape_487.setTransform(-102.2,-66.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#9E744A").s().p("ADjAUIjvgGQiIgDhlgEQhlgEACgDQAMgBBpgFIDugHIDsgFIBrgDIgNArIhugCg");
	this.shape_488.setTransform(257.7,-85);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#AD8355").s().p("AoYApQBMgpB8AIQB7AKBhgOIBYgQIBlAIIA5gKQA0gJAVgBQAQAABQgFICcgJIBSgFIkOAmIh4AAIgtAcIhvgPQh2AbiNAGQhHADhDAAQhDAAg/gDg");
	this.shape_489.setTransform(117.3,-74.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#AD8355").s().p("ACPALInEgkICNgSICJADICIgIIBJAOIBIAlQACgDATADQAUADATArg");
	this.shape_490.setTransform(77.3,-62.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#8E6642").s().p("AgkgOIB1ARIihAMg");
	this.shape_491.setTransform(179.9,-58.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#9E744A").s().p("AhXASIhegUIBSAAIA/geIBpAHQAGAAAuAJQAuAIAPAPIhrAEIgsAWg");
	this.shape_492.setTransform(177.4,-57.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#AD8355").s().p("Ag/AkIhVgPIh4giIimAEIAhgMIgCgRIDmAVIBeAAIA8gfICMAMQgDACBIASQBJAQCtAPIg+ABQg6AAg5ADQg4AEhGALIheAPIgCAAQgdAAhHgNg");
	this.shape_493.setTransform(174.7,-57.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#1F2116").s().p("AY0AIIlxALItdgOMgyaAALIAAgiMBZpAAAIgNAaIvrALg");
	this.shape_494.setTransform(4.9,-89);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#A3794F").s().p("AocAGIDuAAICCgGIBagJIDqAAIDGgGIC/AKIqAALIijALg");
	this.shape_495.setTransform(-191.3,-36.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#A3794F").s().p("AhdgZIBDABQA7ACA0AHQAaAFgtAKQgtAJg2AIIg8AJg");
	this.shape_496.setTransform(-272,-38.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#A3794F").s().p("ArGASIFiADIJegUIDRAAICMgLIGhgOIhVAGIikAKIhwAIIhrAGIhOAFIlpAKIxkAEg");
	this.shape_497.setTransform(-178.7,-35.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#A3794F").s().p("AxZgKIBLAAIBYAAIA9gBIBhgBIAygBICTgVIETANIEVgJICQAGIHqgEIMaAEIn2AOIk1gDIj4AGIjnAAIiKgGIj+AKIk2gHIiHAOIlzgDIkPAig");
	this.shape_498.setTransform(-142.9,-37.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#A3794F").s().p("AkkgQIHMAAILXAZIlpAEIlogGInMAAIjAAGImgADg");
	this.shape_499.setTransform(-18.4,-35.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#A3794F").s().p("AEcATIjRgMIrJgdIIzAEIGOAcICeAAICeANg");
	this.shape_500.setTransform(70.3,-37.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#AD8355").s().p("AdEAXIjsgKIlSgcInfAAIi6gHIkkADImTgKIo0AEItNgEIioARIoRgUIIFADICfgNIA6gCIBdgCIB3AAIBUAAIFMAAIAsABIBXACIA3ABIBdgBICdgCIBSgBIDtAAIFxAKIHrAEIETAHIDhAAIIGAfICkAOIDLAbg");
	this.shape_501.setTransform(-63.2,-39.3);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#AD8355").s().p("Ab+ADIhBgKIj5ABIiGgHIhzAEIwOgKIikgIIhiAGInLABIivgFIjZAEIj/gEIiyACIi0AKIm0ADIiMgDIAAgJII1ABIC/gJICygCIMAAFIF9gCIBXgDIEiAHIO9AEIGvAIIAtALIDvARIBfASg");
	this.shape_502.setTransform(-69.8,-42.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#A3794F").s().p("AGEAgIgzAAIjpgCIpOg4IiKgFICvACIIvA1IIDACIhAADQg5ADgjAAIhRAAg");
	this.shape_503.setTransform(149.1,-39.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#A3794F").s().p("AlaAFIHigLIDTAGQg/AChJgBIhOAAIlYAGg");
	this.shape_504.setTransform(242.1,-36.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#AD8355").s().p("EAgaAAjIhLgKIkGgaIhQgOIlPgDIiDgHIhhAEIo3gNIkwADIkFgFIibAGIrsgJIhzAFIiKgCImBAGIguAFIg5AEIhOgCIhEgBIjCAFIiqgGID3gFIAvAAIA1AAIBQgBIBKgBIHxgMICEACIB3gFIIoAEIBWAFID8gFIKuADIBFACIBaACIBCAAIBeAAIAvAAIKiARIBKAMIAsAEIAvADIAxAEIAsAEIAgADQAeACAYAEIBjARIBNAOQgzgDhEgKg");
	this.shape_505.setTransform(-62.3,-43.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#A3794F").s().p("AhiALIh3gHIhQgRIBHAMIB+AGIFhAAIAsAIg");
	this.shape_506.setTransform(181.5,-39.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#A3794F").s().p("AAuAHIgugGIibgBICdgCIAqACIBwgGIAAAGIhAAHg");
	this.shape_507.setTransform(275.2,-37.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#A3794F").s().p("AlFgBIBHABIC1gFIAnAFICZAAIAvgCIA2gDIA5ACIAxABIjRAHIibAAIgugFIgXAAQgVAAgTAAQgVAAgoABIgtAFg");
	this.shape_508.setTransform(241.2,-38);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#A3794F").s().p("Ag7ABIB3gDIAAAFg");
	this.shape_509.setTransform(284.8,-38.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#A3794F").s().p("Ah4ADIBagEIAdgBIAmgBIAwACIAkABIiXAEg");
	this.shape_510.setTransform(252.7,-39.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#A3794F").s().p("AAmgEIhjAEIgrACIgwACIguAAIgqAAIiNAFICJgLIEEgJIBbAFIBqAJICpgBIiLAJg");
	this.shape_511.setTransform(252.6,-39.8);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#9E744A").s().p("AhRAAQAPgKALgBIApABIAcABIBTAGIiKACQAEAEg8AJIAQgMg");
	this.shape_512.setTransform(216.8,-48.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#A3794F").s().p("Ah+gCIAmgEIBGAFICQgFIAAALIhWgBIgoADg");
	this.shape_513.setTransform(278,-40.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#AD8355").s().p("A7VAHIFvgNICWgLIWrAIIE+gIIHsAIIBkAAQBegBCDACQCCAABxAEQBxAEAoAHIksgJIuRAAIk4AFIyLgJIk4AGIh2AFIjkAIIiZAEg");
	this.shape_514.setTransform(-106.2,-50.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#AD8355").s().p("EAgnAAhQhJgLhagEQhZgEhEgMQhEgKgDgBIpHgLIiugLIqCAAIjqgHIkrAPIoogMIiWAEIplAAIpkASIAPgJIJ5gUITnAEIFhgHIQtAKIDeAMIEUAAIB+AOIBSAHQBNAEBZAOQBZAMApASIhNgNg");
	this.shape_515.setTransform(-65.8,-45.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#9E744A").s().p("AAZAxQBLABBOgIQBkgKBggFQC0gCCzACIgbAAQinAGilAMQhtAGhuAAQhBAAhBgCgAjuAqQgngFgggJQgegKgngGQjGgejOgUQiQgKiTgBIBVgBQB7gBB3ADQBiAABQAXQBjAXBnANQAeAHAOAFQANAEAnAAQAqAAApAEQBRAJBSAIQhrgChrgEgANfAbIA4gDQBJgLBLgJIAHAAIAAALIgHACQhVAKheAAIgZAAg");
	this.shape_516.setTransform(183.4,-44.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#9E744A").s().p("ACyARIgggBIgpgDQgngCgmAAIhQAAIgvAAIhEgLIg3gRIBrARIBkgCIBgAGICKgFIAEATIgtgBg");
	this.shape_517.setTransform(268.8,-65.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#A3794F").s().p("AhPAHImFgSIiRgDIAAgJICBAAID1AJIFaAUIB9AAIC8AKIDCAAIi3AIg");
	this.shape_518.setTransform(-219.6,-60.2);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#AD8355").s().p("ACgADIj+AJIlrAAIAAgMIEXAAIE3gLICRALIC0AFIhbACIh9ADIg/ACg");
	this.shape_519.setTransform(-235.6,-74.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#7D5E3A").ss(0.4,1,1).p("AE3AEIk7gHIjiADIikAJIAAgRIMVACg");
	this.shape_520.setTransform(-241.9,-83.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#AD8355").s().p("AmKgIIMVACIhUAKIk7gHIjiADIikAJg");
	this.shape_521.setTransform(-241.9,-83.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#AD8355").s().p("ADAALIhagBIn5gHIlUgKIXPgEIhaAGIi0ALQhgAGgrAAIiPgBg");
	this.shape_522.setTransform(-126.3,-83);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#AD8355").s().p("AsEAHIJ6gLIGIACIEigLIDlAGIg6ACIh0ADIhWACIhVAAIg1AAIioAHIvTAHg");
	this.shape_523.setTransform(-204.4,-79.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#AD8355").s().p("ArYABID4AEIE9gEIDQAGIDigNIBjgMIFnADImGAdIr+AFg");
	this.shape_524.setTransform(-65.2,-79.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#A3794F").s().p("Aw4AbIGdgMIBAgCIBJgCIBTgDIBKgEIHJgLIDdAAIB+gHIATgFIJ3gHIgxAFIhdAKIg9AGIhjAAIhUAAIjDAAIjOAQIiOgJIi9AJIkHACIkqAOg");
	this.shape_525.setTransform(-16.7,-82.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#AD8355").s().p("AnaAWIjlgCIhcAFIhMgFIhCAFIlIgEIEygDIBfgKIBnAFIBvgHIB+AAIByAOIBzgKIGqADICsgFICCAFIAwgCQAqgBARgCIA5gHIBagIIAwgFICNgOIGGgCIiWALIjlAFIh+AJIjKAVIh+AEIrQAAIh+AHg");
	this.shape_526.setTransform(-65.8,-77.8);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#A3794F").s().p("AIYAHIgpgDIgiAFIk4ACIingKIgdAAIgqAAIhMgBIg+gBIlvABIFngKIBKAAIBWAAIAwAAIAiAAICZAJIFygCIBBAOQgXgBgkgDg");
	this.shape_527.setTransform(-101.1,-61.4);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#AD8355").s().p("AgoAiIhrAAQgZgBg+gGIhOgGIhHgFQg4gDgSgEQgTgEg7gDIhDgCIhYgDIgzAAIhaAAQgtABg1ACIg7AEIglACIhCABIhwACIhTACIAAglIEAAFIBngHIB3AHICNAAICsgOICYAHIEQACIHcgEIHNAQIGlACIi4AHIm/AFIgiAAIgqAAIhFAAIgsAAIgkAAIgyAAIgqAAIg9gMIhugCIAWAHQgJAHgsALQgTAEgVAIIghALQgJACgbAAIhEgCg");
	this.shape_528.setTransform(-152.7,-68.8);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#AD8355").s().p("AZjBXIhggIQgSgChGgOIiIgaIhGgNIghgJQgggIgXgBIhGgFIhngGIg0gEIuVgJIiAgHIjOAAIlrgJIj0AAIgtABIhTACIg0ABIhGAAIh3AAIg/AAIsLgCIjwgEIg6AFQgyAGgiAAIhcAEIhIAFIgzABIhSABIgrAAIAAhQIB2AHIDtAHIBFAFQBDAEBpABQBvgBBugDIB3gEIG3AIIEmgPIELAWIAuAAIBYABIA2ABIBrgBIC9gDIBlgBIB6AMIA+ACIA8ACIBFACIA/ADIA6ACIA8AJIAzABIA8ABIBwACIDsAFIDpAFIBqACIAzABIBEABIBXAGIBGAFICcAjIAwANQAsAKATAHQAXAHA/AHIBHAJIAvAAIA4AAIBIAAQAfAAAIABIAmgBQAsgDBSgHIBbgJIEMADQAHACCVgHIC7gHIB+gEIk1AXIisAFIkDgHIjeAUIi7ACIhMgHg");
	this.shape_529.setTransform(5,-50);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#AD8355").s().p("AzyA2IiSgKIjQgHIDygHICSAKICpgDICHgHIIjAEIBBgBIB/gEQBBgCASgEQARgDAygGIBcgJIAwgFIEfgMIC6gNIDngHIBqgOIBgALICqgDIBZgKQBTgIBogFQBogFBAAHIi6AHIkZAbIikAAIjmAYIkwAIIh8AAIhmAQIj7AYIhEgDIh8ANIiHAHg");
	this.shape_530.setTransform(16.5,-78.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#AD8355").s().p("AhBAOIg/gPQAJgIAkgIIAmAAIBUAAIAogDQAkgCAOAIIhRAHIhGAcg");
	this.shape_531.setTransform(110.3,-65.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#9E744A").s().p("AAGALIgvgNIiKAAICVgIIATAGQAPAEAHAAIAhAAIAcAAIA0gEIAYAAQAXAAAJADIgZAEIgfAHQgOABgwAAIg4AAg");
	this.shape_532.setTransform(270.5,-71.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#AD8355").s().p("AkuACQApAAAFgFQAGgHgCgBQAqgDgEAGIBBAHICpgIIDkAJIAmACQAfADgaAAIgjAAIgEAAIgmAAIgtAAIgYAAIgXgCIgYgCIgTgBIgrACIgaABIghAAIghACIgZAAIinAIg");
	this.shape_533.setTransform(256.4,-55.2);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#AD8355").s().p("AEsAfIg1gDQgugDgOgCQgMgDgsgCIgxgDIjkgFIgXAJIAAAGIgbgGIhqgNIgngBQgigBgTgJQAAgDAWgDIAZgEIAQgQIAvAAQAFgBAWABIAeADIA6AAIAyACIAxADQASgFAHgEIAQgCIAQgBQAOAAANABQAPAEAjAAIAvAAIAZAAQgKAAAVgBIAkAAIAWAAIAQAAIBzAAQAFAFANAGQAUADAKAEIALAGIAAArg");
	this.shape_534.setTransform(251.2,-60.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#AD8355").s().p("AgzALQg5gLADgCIASgQIAtgBIAwAGIAqANQAQAFAUgCIAXgCIghAKIgnAJIhWgJg");
	this.shape_535.setTransform(202,-64.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#AD8355").s().p("AhIAtIhRgLIgYgIIgVgHIgQgGIgigIIgugJQgQgCglgBIgpAAIglACIg4ADIg6gDIgpgCQAYgLArgEQArgFAFAAIA0gMIBBgGICtAOIAhAIIBAAJICzAKIg9gFIgbgDIgfgEIgfgCIgXAAIgrgJIAZACIAeACQAPACACgCIDdAIIAdADIAiADIAyABIA0ABIAhAFIAvACQAaAAA/gEIBFgIIAAAuIgUAAIgZgFIgPAAIgSAFIhxADIhYgLIiIAAIgNACIBhAPIgSAAIgngGIgWAAIgmgMIiVgCIgaADIBgAPIggAAIgWgBIhIgOIhUgGIAOAJIBsAQg");
	this.shape_536.setTransform(232.6,-68.7);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#AD8355").s().p("AhVAAIiDgHICOACIEjANg");
	this.shape_537.setTransform(258.8,-57.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#AD8355").s().p("AAvALIgkgEIgngEIgjgCIgegBIgQgKIDbAVg");
	this.shape_538.setTransform(233.5,-58);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#AD8355").s().p("AA8AiIBEAAIgUgPIhGgKIgVgFQgRgEgIAAIg3gJIgygKIhWgVIDxAtIBCAIIASAKIAWAKIA0AIg");
	this.shape_539.setTransform(210.1,-60.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#AD8355").s().p("ABTAYIg6gJIgbgEIgXgDIgSgFIgkgHQgSgGgRgKIgTgKIA7AUIDQApIgzgHg");
	this.shape_540.setTransform(200.7,-61.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#AD8355").s().p("AADATQgegDgXgBQgngCgLACQgUAEgHgBIARgSQAQgQAMgFQAcgCAIABIASABIAcACQAdADAlAHIAIAAIAggBIAWgBIg4AIIgyAAIgWAEQACgBAPAEQAQAEAFAPIgjgEg");
	this.shape_541.setTransform(181.9,-66.1);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#AD8355").s().p("ApsBVIiMgMIhGgyIAOgFIAYAAIAbgKIATgIQAQgJANgEQAOgDAngGQAmgGAPgBQAdgCAJgCIAfgDIAkgEIBCgJIBGgIIAvgFIAmgFIAzgFIBqgJQA5gFAegBIBdgBIA5gBIAsgBIBCAAIAUADIAdADIA2AAIAtAAIASACQAQADAOAAIAwACIAlACIATAAIAaAAIAeAAIAWAAIAgAAIAVABQASABAKgBIAfgBIAXAAIAJgDIA7gCIAfAEIAAAIIgmgDIiAALIpIgSIhlAHIjIAOIiHAKQglAFgfAFIghAHIhIALIhTATIgMAQIADAKIgQAZIALAUIAmAGIAXACQAXABAaAIIgbAAQgYAAgQADQghAAgFgGg");
	this.shape_542.setTransform(207.5,-70.4);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#AD8355").s().p("AHRDKIgmgBIgtABIg4AAIg6gBQgrgCgcgEQgggFg2gNIg9gOIgzgMIhqgYQg3gNgSgFQgUgIhFgFQhGgEiRACQh7AAh6gCQgrACgpABQg/gMg9gOQhXgGhVgKQhQgPhMgVQgrgHgwgDQgwgBgngIQBjgXBhgaIB6gqQA/gXBJgCIA/gBIA2gBIBBgFIB+gJIBPgFIBCgDIBBgCQAQgCAYgFIAZgEIAbgEIAigDIAiAAIApAAIAsAAIAeAAIAsgDIBUgGIAygDIAvgDIBQgGIArgEIDNgDIA4gEQAygDASAAIBWgDIBKgCIFJAVIAsAAIA3AAIA6AAIA3AAIAzAAIAqAAICkAEIAAANIjfgEIgtAEIg0ACIg3gBIhcAAIgxAAIhIgGQg/gFgXAAIhVAAIhHAAIlEACIjNAMIhLAGIiLALIhSAGIgsAAIgxAAIgvAAIgkAAIhWASIhOAEIjiABIh1AUQgBABggAPQggAPgyAJQgzAHgoAJIgqAHIg5ANIATAHQASAEAIABIAzAFIBVAHIAtAEICKANIBqAAIBaAVIBcAOIAuADIBZAIQAvAEAOgBIA/ADIA0ACQAQAABWAHQBYAIA2APIAeANQAbAMAUAPQAWAPBDAOQBCANAnABIBjACIBVABIAXACQAKACAzgHQAygIAlgEQAkgDBAgDQBGgCA3gDIA5gDIIVgDIhOAFQhHADgrAAIhYACIg0ABIgtACIhWACIgxABIhRABIhWACIhLAIIhIAGIg4AEIg2AGIgrgCg");
	this.shape_543.setTransform(146.6,-62.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#AD8355").s().p("ApdBGIgcgHIgagEQgYgEgUgIQgPgIASgFQASgFAEAAIgSgXIB1gmIBAgKQA7gKAugGQAugGBDgGQBEgGAWgBIBFABIBsACIA8ABIA4ADIBjAGQA0AEAUACQAhADA8AAIBTAAIBWgFIBPgFIA+ABIAzABIAAAPIgggCIgTAAIgaAAIgcAAIgVAAIgdAAIgjgBIgjABIgjAAIgoAAIgrAAIgtAAIgrgBIgvAAIguAAIg7gDIhHgFIg5gGQglgDgYgBQgpgBifAJQhXAIheASQhdASgIADIAQAJIhWAlQgBAGAeAWQATAHAegEIAbgEQgJACgQAHQgVAJgMABQgNgBgagHg");
	this.shape_544.setTransform(219.6,-69.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#A3794F").s().p("AANAAQgfgHgkgCIApACQAvADAVAOQgDgBgngJg");
	this.shape_545.setTransform(152,-54.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#AD8355").s().p("AiQAVIBYgOQAJgEBCgSQAhgHAsADIAxAEQgaARgigBQgggBgHAAIgSABIgOACIggADQgSAGgCADIgrAGg");
	this.shape_546.setTransform(195.5,-51.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#AD8355").s().p("ACTAMIhGgJIhfAAIgdAAIgYABIgRAAIhGAAIjVgPIBHAAIBLAIICSACIC5gFIAtAGIDbACIACALg");
	this.shape_547.setTransform(253.7,-52.8);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#AD8355").s().p("AnnAzQgrgDg3gKQg3gLgQgRQgLgRAEgVQADgVACgCIAUAIQgEADAFAbQAEAaA4AMQA9AJAvAFIAyAFIAxgCIBggFIA6gDIAngDIAlgFIAhgBIAaAAIAaABQAXAAAJgCQAJgDAWgCIAjgCIAuAAIAjAAIDdgBIBAgCIB4gDIBHgCQALAAAaACIAcADIAAAHIgbAAIgtAAIhXABIhEAAIkIAAIgyADIhWAEIhdAEIg8ADIhMAHQhEAGgbAAIhaADIgvAAQgkAAgcgBg");
	this.shape_548.setTransform(224.2,-49.7);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#AD8355").s().p("AnOAdIhXgCQgqgEgMgMQgNgLAAgBIgKgTIgTgIIAhABIBKAbIhIgQIAZAQIASAOIBXAHIAAgIQgNgHAFgFQAHgDABAAIADAHIAPAFICrgBIBGgLIA2gRIBYADIBdAKIAtACIAyADIAigDIAdgEIAvgGICyAIIAcAAIA7AAIBfgBIBDgBIh1AHIk2gEIgbACIgiADQgWACgyACQgWgBghgDQgfgDgSgBIgzgCIgrgDIglAAQgWAEgCAEIgbAOIggAFIgmAGIgVAAIgNAAIhxAFIgtAAg");
	this.shape_549.setTransform(226.6,-49.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#C19867").s().p("Egs2AEpIAApQMBZtAAAIAAJQg");
	this.shape_550.setTransform(4.7,-61.6);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#A3794F").s().p("AA4AKIhogDIgxgBIhPAHIAZgMIALgHIAJgRQABAIAaALIAsABIAhAAIBjAJIAtACQAmADAWANQgQgGhpgIg");
	this.shape_551.setTransform(141.7,-58);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#A3794F").s().p("AEYAAQgPgGgRgEIgSgEIgzgGIg5AEIg9ASIgPAIIhhgHIhAAAIgxgEIiZgGIgHgHIAsABIBOADIA+AGIAcAEIAbgBIB+ADIAigLQAfgMATgCIAngCIAYgBIA8AMQAEAAAdAKQAdAHAPAYQgJgJgkgSg");
	this.shape_552.setTransform(160.3,-60.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#A3794F").s().p("Ai1BhQgWACgogCIg1gDIgzAAIgsgBQgJgFgbgGIgggEIgWgCIAkgIIirgIIg2gKIgbgJIAcgSIAVgJIAbgFIAkgUIAXAAIA/ACIAsAAIAsAAQAdgCAdgFIA0gGIBNgIICCgOIBEgHIBCgJQA7gIAYgCIBQgEIA+gEICWgQIBcAAIBGgGIB5gBIi7APIh1AQIg3ACIkgAeIgrAEIhRALQgqAGgKAEQgQAGgyAHIg3AJIhLAXQgBABACAIQABAIAbAGIBEALIA2AEQgDABAFAQQABAHAJAIQgMgFgLAAg");
	this.shape_553.setTransform(127.3,-69.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#A3794F").s().p("ABZABQhZgIgXgBIhKgBIg5AAIgigHIg4gEIAmgDIAjADQgIADCVAEQBWACBfARIBeASQhHgOhVgJg");
	this.shape_554.setTransform(125.5,-54.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#A3794F").s().p("AmAAHQg0gIgBgBIGcAAICvgOIEgAQIjUAHIjgAAIhNAFQhLAEhdABQhZgBg0gJg");
	this.shape_555.setTransform(-168.9,14.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#A3794F").s().p("A9mAOIADgbICAABIELACIDmABIC0gBICtgCIBNgBIFKALIJiACICIgNIGQAUIHpgJIL+AQg");
	this.shape_556.setTransform(-92,68.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#A3794F").s().p("AiyAGIFlgMIhPAFIidAGQguACggAAQgbAAgQgBg");
	this.shape_557.setTransform(204.3,35.5);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#AD8355").s().p("AmTAgIhLgDICngWIDRgaIBmgOIAwAAIBtAAQAtAABLAHQBLAGA+AHIBBAGIkQARIj5AMIhbAEIiPAHIg3ABQgiAAgmgCg");
	this.shape_558.setTransform(223.8,37.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#AD8355").s().p("AnIBcQB/gMB9gaQAugFAxgMQAxgMg5gcQgxgJgpgTQgXgJhIgWQhIgWgVABQA4gSA/AMQA/ANA6AIQByACBvADQBwASB5AIQAbgBAyACQAzADAUAIQAVAHg9APQg1AJgyADQgxAEg0ASQgwATgsAHQgtAHg9ACQhvAKhtARQg5ABg6AAQhBAAhBgCg");
	this.shape_559.setTransform(21.8,36.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#AD8355").s().p("AFLAHIlZAPImngEQBGgBgHgNQgGgMgGgCQA+gRArAJQAqAJBDADICMgCICfgEIBNgCIB/AEIBrAgg");
	this.shape_560.setTransform(112.5,35.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#A3794F").s().p("AldgVIBrACIDsAHIDuAGQBpAFAMABQACADhlAEQhlADiJAEIjuAGIhuACg");
	this.shape_561.setTransform(-247.5,16.4);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#AD8355").s().p("AENApQiMgGh3gbIhvAPIgtgcIh3AAIkPgmIBSAFICcAJQBQAFAQAAQAVABA0AJIA6AKIBkgIIBZAQQBhAOB7gKQB7gIBMApQg/ADhDAAQhDAAhHgDg");
	this.shape_562.setTransform(-107,27.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#AD8355").s().p("AkPADQAUgDACADIBJglIBHgOICJAIICJgDICNASInEAkIinAmQATgrATgDg");
	this.shape_563.setTransform(-67,38.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#A3794F").s().p("AhRADIB2gRIAsAdg");
	this.shape_564.setTransform(-169.5,43.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#9E744A").s().p("AhKAKIhsgDQAQgPAugIQAugJAGAAIBpgIIA/AfIBTAAIhgAUIh1AQg");
	this.shape_565.setTransform(-167.1,44);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#AD8355").s().p("AgmAxIhegPQhGgLg5gEQg4gDg6AAIg9gBQCsgPBIgQQBIgSgCgCICMgMIA8AfIBfAAIDlgVIgDARIAiAMIimgEIh4AiIhVAPQhHANgdAAIgCAAg");
	this.shape_566.setTransform(-164.4,43.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#1F2116").s().p("EAjgAAMIlxgFIobACMgoWgAFIlxgEIkJAEIvrgEIgNgLMBZpAAAIAAAXg");
	this.shape_567.setTransform(5.4,16.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#AD8355").s().p("ABkAGIkdgDIljgIIDAgLIDFAHIDqAAIBaAJICCAGIDuAAIkVAKg");
	this.shape_568.setTransform(201.6,65.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#A3794F").s().p("AAiARQg2gIgtgJQgtgKAagFQA0gHA8gCIBDgBIAAAzIg9gJg");
	this.shape_569.setTransform(282.3,62.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#AD8355").s().p("AhsAVIlpgKIhOgFIhrgGIhwgIIikgKIhVgGIGhAOICNALIDQAAIJeAUIFjgDIEwAHg");
	this.shape_570.setTransform(188.9,65.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#A3794F").s().p("ARbABIl0AEIiHgPIk2AHIj9gLIiLAHIjoAAIj3gHIk2AEIn1gOIMagDIHqADICRgGIETAKIEVgOICSAUIAyACIBhABIA9ABIBYAAIBMAAIEOAtg");
	this.shape_571.setTransform(153.1,63.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#AD8355").s().p("AHeANIjAgGInLAAIlpAGIlogDILXgZIHLAAIJbAgg");
	this.shape_572.setTransform(28.8,65.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#A3794F").s().p("AngAKICeAAIGNgdII0gDIrKAcIjQAOIljADg");
	this.shape_573.setTransform(-60,64.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#AD8355").s().p("A+6AUIKqgtIDhAAIEUgHIHqgEIFxgKIDtAAIBSABICcACIBfABIA3gBIBVgCIAtgBIFMAAIBUAAIB3AAIBdACIA7ACICdANIIHgDIoRAUIiqgRItNAEIoygEImUAKIkkgDIi7AHIneAAIlSAcIjtAKIlAAYg");
	this.shape_574.setTransform(73.5,62);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#AD8355").s().p("A/iAQIDvgSIAtgMIVsgLIEigHIF5AFIGBgFIKMACIC/AJII1gCIAAAKIo/AAIi1gLIiygBIj/AEIjZgEIiuAFInNgBIhhgGIikAIIwOAKIhzgEIiGAHIj5gBIhBAJIlEAfg");
	this.shape_575.setTransform(80,58.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#A3794F").s().p("AmDAgIhRAAQgjAAg5gDIhAgDIIDgCIIwg1ICugCIiKAFIpOA4IjpACIgzAAg");
	this.shape_576.setTransform(-138.7,62.1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#A3794F").s().p("AiEABIhOAAQhJABg/gCIDTgGIHiALIiHACg");
	this.shape_577.setTransform(-231.8,65.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#AD8355").s().p("EghDAAiIBjgRQAZgEAdgCIAggDIAtgEIAwgEIAwgDIArgEIBLgMIKhgRIAvAAIBeAAIBDAAIBagCIBEgCIImgDIGFAFIBVgFIIogEIB4AFICEgCIHwAMIBLABIBQABIA1AAIAuAAID3AFIiqAGIjBgFIhFABIhNACIg5gEIgvgFImAgGIiLACIhzgFIrsAJIibgGIkEAFIkxgDIo3ANIhhgEIiCAHIlQADIhPAOIjWASIgxAIIhLAKQhEAKgzADIBNgOg");
	this.shape_578.setTransform(72.5,58.1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#A3794F").s().p("Aj8AFIFgAAIB/gGIBGgMIhPARIh3AHImLACg");
	this.shape_579.setTransform(-171.1,62.4);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#A3794F").s().p("AhbAHIhAgHIAAgGIBwAGIAqgCICdACIicABIgtAGg");
	this.shape_580.setTransform(-264.9,63.9);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#A3794F").s().p("ADRACQgogCgWAAQgSAAgVAAIgXAAIguAFIiaAAIjSgHIAxgBIA5gCIA2ADIAwACICYAAIAogFIC0AFIBHgBIhJAHIgsgEg");
	this.shape_581.setTransform(-230.9,63.4);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#A3794F").s().p("Ag7gCIB3ADIh3ACg");
	this.shape_582.setTransform(-274.5,62.8);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#A3794F").s().p("Ah4gBIAkgBIAwgBIAmAAIAcABIBbAFIhbABg");
	this.shape_583.setTransform(-242.3,62.3);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#A3794F").s().p("Al9ACICqABIBpgJIBbgEIEFAJICIAKIiNgFIgqAAIguAAIgvgCIgrgCIhkgEIjNAPg");
	this.shape_584.setTransform(-242.3,61.6);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#A3794F").s().p("AAqgBIiKgCIBUgGIAbgBIApgBQALABAPAKIAPAMQg6gJADgEg");
	this.shape_585.setTransform(-206.6,52.5);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#A3794F").s().p("AhlAEIgZABIAAgLICQAFIBHgFIAlAEIh+AJg");
	this.shape_586.setTransform(-267.6,60.8);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#AD8355").s().p("AY9ANIjkgIIh1gFIk5gGIyKAKIk5gGIuRAAIksAJQApgHBwgDQBxgFCDgBQCCgBBfABIBjAAIHsgIIE+AIIWsgIICWALIFuANIAAAKIiZgEg");
	this.shape_587.setTransform(116.3,51.1);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#AD8355").s().p("A/xAQQBZgOBNgEIBSgHIB+gOIEUAAIDegMIQugKIFgAHITngEIJ5AUIAPAJIpkgSIplAAIiWgEIopAMIkqgPIjqAHIqCAAIiuALIpHALQgDABhEAKQhEAMhZAEQhaAEhJALQhJAMgEABQApgSBZgMg");
	this.shape_588.setTransform(76.1,56);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#AD8355").s().p("Al1AtQilgMiogGIgIAAQCrgCCqACQBfAFBmAKQBNAIBLgBQhBAChBAAQhtAAhugGgAC8AfQApgEArAAQAmAAAOgEQAOgFAcgHQBogNBjgXQBQgXBiAAQB3gDB7ABIBVABQiSABiQAKQjPAUjGAeQgnAGgeAKQggAJgnAFQhqAEhrACQBQgIBSgJgAt3AbQhdAAhWgKIgHgCIAAgLIAHAAQBKAJBJALIA6ADIgaAAg");
	this.shape_589.setTransform(-173.1,56.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#A3794F").s().p("AjbgBICLAFIBggGIBkACIBrgRIg4ARIhDALIgvAAIhQAAQglAAgoACIgqADIgfABIgtABg");
	this.shape_590.setTransform(-258.5,36.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#AD8355").s().p("AplAQIDCAAIC7gLIB+AAIDRgMIF9gPICDAAIAAAJIiSACImGASIn9AQg");
	this.shape_591.setTransform(229.8,41.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#AD8355").s().p("ABfAMIj+gJIgTAJIg/gCIh9gDIhbgCIC0gFICRgLIE3ALIEXAAIAAAMg");
	this.shape_592.setTransform(245.8,27.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#A3794F").s().p("ADnAAIjigDIk7AHIhUgJIMVgDIAAARg");
	this.shape_593.setTransform(252.2,18.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#9E744A").s().p("AnZAGIi1gLIhagGIXRAEIpdAPIjyACIhZABIiQABQgqAAhggGg");
	this.shape_594.setTransform(136.6,18.4);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#AD8355").s().p("AjPAIIiogIIg1AAIhUAAIhWgBIh0gEIg6gCIDlgHIEjAMIGHgDIJ6ANIAAAHg");
	this.shape_595.setTransform(214.8,22.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#AD8355").s().p("AlTAPImFgfIFngCIBkALIDhAOIDQgGIE9AFID4gFIkuASg");
	this.shape_596.setTransform(75.5,22.3);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#9E744A").s().p("AJXAbIkqgOIkHgCIi9gJIiNAJIjPgQIjDAAIhUAAIhjAAIg9gGIhdgJIgxgGIJ3AHIATAFIB+AGIDdAAIHJAMIBJADIBTAEIBKACIBAACIGdAMg");
	this.shape_597.setTransform(27.1,18.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#AD8355").s().p("ACqAWIrQAAIh+gEIjLgVIh+gJIjlgFIiVgLIGGACICNAOIAvAFIBbAIIA5AHQARACAqABIAwACICCgFICsAFIGqgDIByAKIBzgOIB+AAIBvAHIBngFIBfAKIIeACIo1AFIhBgFIhMAFIhcgFIjlACIg9AHg");
	this.shape_598.setTransform(87.9,23.6);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#AD8355").s().p("AnNAJIgjgFIgmADQglAEgYAAIBBgOIE5ACIDSgJIAkAAIAvAAIBVAAIBMAAIFnAKIlvgBIg/ABIhMACIgqAAIgeAAIjYAJg");
	this.shape_599.setTransform(111.5,40);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#AD8355").s().p("AhAAiIgggLQgWgIgSgEQgsgLgJgHIAWgHIhuACIg9AMIgqAAIgyAAIgkAAIgtAAIhEAAIgqAAIgiAAIkAAAIl3gMIGkgCIHOgQILrACICZgHICsAOICNAAIB2gHIBoAHIEAgFIAAAlIhTgCIhwgCIhCgBIglgCIg7gEQg1gCgtgBIhbAAIgyAAIhYADIhDACQg7ADgTAEQgSAEg4ADIhHAFIhOAGQg/AGgYABIhrAAIhFACQgaAAgKgCg");
	this.shape_600.setTransform(162.9,32.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#AD8355").s().p("A9pBcIjdgUIkEAGIisgEIk1gXIB+AEIC7AHQCWAGAGgBIELgCIBcAIQBTAIAsACIAmABQAHgBAeAAIBJAAIA4AAIAwAAIBHgIQA/gJAWgGQAUgHArgLIAwgLICdgjIBFgGIBXgGIBEgBIAygBIBqgCIDqgFIDrgFIBxgBIA7gBIA0gCIA9gJIA5gDIA/gCIBFgCIA9gCIA9gDIB6gLIBlABIC8ACIBsACIA2gBIBYgBIAugBIELgVIEmAPIG3gHIB2ADQBvADBvABQBqgBBCgEIBFgFIDtgGIB2gIIAABRIgrgBIhSgBIgygBIhIgFIhdgEQghgBg0gFIg4gFIo5AGInDAAIg/AAIh3AAIhGAAIgzgBIhVgBIgsgCIstAJIiAAHIuUAJIg1AEIhmAGIhHAEQgXACgfAHIgiAJIhGAPIiIAZQhGANgSACIhfAJIhNAHg");
	this.shape_601.setTransform(5.3,51.4);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#AD8355").s().p("ADWA5Ih8gNIhEADIj8gYIhlgQIh7AAIkxgIIjmgYIikAAIkagbIi5gHQBAgHBoAFQBnAFBUAIIBaAKICpADIBfgLIBrAOIDnAHIC6ANIEfAMIAwAFIBcAJQAxAGASADQASAEBBACIB/AEIBBABIIigEICIAHICpADICSgKIDyAHIjQAHIiSAKIuXAKg");
	this.shape_602.setTransform(-6.2,23.2);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#9E744A").s().p("AgvgHIhRgHQAOgIAkACIAoADIBUAAIAmAAQAkAIAJAIIgNACIhdAUg");
	this.shape_603.setTransform(-100.1,36);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#A3794F").s().p("Ag9ALQgwAAgOgBIgfgHIgZgEQAKgEAWAAIAYAAIA0AFIAdAAIAgAAQAHAAAPgFIATgFICVAIIiKAAIgvANIg4AAg");
	this.shape_604.setTransform(-260.2,29.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#A3794F").s().p("ABSAFIgZAAIgigCIghAAIgagBIgrgCIgSABIgYACIgYACIgYAAIgsAAIgnAAIgDAAIgkAAQgZAAAfgDIAlgCIDkgJICqAIIBBgHQgEgGAqADQgCABAFAHQAFAFAqAAIg2ALg");
	this.shape_605.setTransform(-246.1,46.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#A3794F").s().p("AmKgHIALgGQAJgEAVgDQANgGAFgFIByAAIARAAIAWAAIAkAAQAVABgKAAIAZAAIAvAAQAjAAAPgEQANgBANAAIARABIAQACQAHAEARAFIAygDIAxgCIA7AAIAdgDQAXgBAEABIAwAAIAQAQIAZAEQAWADAAADQgTAJgjABIgmABIhrANIgbAGIAAgGIgWgJIjkAFIgxADQgsACgNADQgNACguADIg1ADIhfAFg");
	this.shape_606.setTransform(-240.9,41);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#A3794F").s().p("AhIALIgigJIAXABQAUACAQgEIArgOIAvgHIAtACIASAQQAEADg6AKIhWAKIgmgKg");
	this.shape_607.setTransform(-191.8,36.6);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#AD8355").s().p("AAjAtIBtgQIAOgJIhUAGIhJAOIgVABIghAAIBggPIgagDIiVACIgmAMIgXAAIgmAFIgSAAIBhgOIgOgCIiHAAIhXALIhxgDIgSgFIgQAAIgZAFIgUAAIAAguIBFAIQA/AFAagBIAvgCIAigFIAzgBIAygCIAigCIAdgDIDdgHQACABAPgBQAJgCAWgBIAZgCIgrAJIgXAAIggACIgeAEIgbACIg9AGIBtgEICGgOIAggJICtgOIBBAGIA0AMQAGAAAqAFQAsAFAXAKIgoADIg7ACIg3gCIglgDIgpAAQglABgRACIgtAJIgiAIIgRAGIgVAHQgQAGgHACIhRALg");
	this.shape_608.setTransform(-222.3,32.6);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#A3794F").s().p("ABLgFICOgCIiDAHIkuAIg");
	this.shape_609.setTransform(-248.5,43.9);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#A3794F").s().p("AhtAKIDbgTIgQAJIgeABIgjACIgnAEIgkADg");
	this.shape_610.setTransform(-223.2,43.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#A3794F").s().p("AiTAhIAogUIBCgIIDxgtIhWAVIgyAKIg4AJQgHAAgRAEIgVAFIhGAKIgUAPIBEAAIiMAHg");
	this.shape_611.setTransform(-199.7,41.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#AD8355").s().p("ABLgKIA7gUIgTAKQgSAKgSAGIgjAHIgTAFIgWADIgcAEIg5AJIgzAHg");
	this.shape_612.setTransform(-190.4,40.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#A3794F").s().p("AgQAEQAPgEABABIgVgEIgyAAIg4gIIAVABIAhABIAIAAQAlgHAcgDIAdgCIASgBQAIgBAcACQALAFARAQIARASQgHABgUgEQgLgCgnACQgXABgeADIgjAEQAGgPAPgEg");
	this.shape_613.setTransform(-171.6,35.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#A3794F").s().p("AIfBYIgbAAQAagIAXgBIAXgCIAmgGIAMgUIgQgZIACgKIgLgQIhTgTIhIgLIgigHQgegFgmgFQgegDhogHIjJgOIhlgHIpHASIiBgLIgmADIAAgIIAggEIA6ACIAJADIAXAAIAfABQALABASgBIAVgBIAfAAIAXAAIAdAAIAaAAIATAAIAlgCIAxgCQANAAARgDIARgCIAuAAIA1AAIAdgDIAVgDIBBAAIAsABIA6ABIBdABQAeABA4AFIBqAJIAzAFIAnAFIAvAFIBFAIIBCAJIAlAEIAfADQAJACAdACQAOABAnAGQAnAGAOADQAMAEARAJIASAIIAbAKIAZAAIANAFIhFAyIiMAMQgGAGggAAQgRgDgYAAg");
	this.shape_614.setTransform(-197.3,30.9);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#AD8355").s().p("AoyDHIg4gFIhHgGIhLgHIhWgDIhRgCIgygBIhVgCIgtgBIg0gBIhYgBQgrgBhHgEIhOgDIIVACIA5ADQA2ADBHACQBAADAkAEQAlADAyAIQAyAHALgBIAWgEIBVgBIBkgBQAngBBCgOQBDgNAWgPQAUgPAbgMIAegMQA2gRBXgHQBXgIAQAAIA0gCIA/gBQAOgBAvgDIBZgIIAugEIBcgNIBagWIBqAAICKgMIAtgEIBVgGIAygGQAJAAARgGIAUgFIg5gOIgqgIQgogHgzgIQgygIgggQQgggPgBgCIh1gTIjigBIhOgEIhWgTIgkAAIgvAAIgxAAIgsAAIhSgFIiLgLIhLgFIjNgOIlFgBIhGAAIhVAAQgXABhAAFIhHAEIgxABIhcABIg3AAIg0gDIgtgCIjfACIAAgMICkgDIAqAAIAzAAIA2AAIA7AAIA3AAIAsAAIFJgXIBKADIBWADQASAAAyADIA4ADIDNAFIArADIBQAGIAvADIAyADIBUAGIAsADIAeAAIAsAAIApAAIAiAAIAhADIAbADIAaAGQAYAEAQACIBAADIBCACIBQAGIB9AJIBCAEIA2ABIA/ACQBIABBAAWIB5ArQBhAZBkAYQgoAIgvACQgxABgqAJQhMAUhQAQQhWAJhWAFQg+APg+ALQgpAAgsgCQh5ADh7gBQiRgChGAEQhFAFgUAIQgSAGg3AMIhqAYIgzAMIg9APQg2AMggAGQgcADgrABIg6ACIg4gBIgtgBIgmACIgrABIg3gEg");
	this.shape_615.setTransform(-136.3,38.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#A3794F").s().p("AIWBEQgQgHgJgCIAbAEQAfAEASgHQAegWgBgGIhWglIAQgJQgIgDhdgSQhdgShYgIQifgJgpABQgYABgmADIg4AGIhHAFIg7ADIguAAIgvAAIgrABIgtAAIgrAAIgoAAIgjAAIgjgBIgjABIgdAAIgVAAIgcAAIgaAAIgTAAIggACIAAgPIAzgBIA+gBIBPAFIBWAFIBTAAQA8AAAhgDQAUgCA0gEIBjgGIA4gDIA8gBIBsgCIBFgBQAWABBEAGQBDAGAuAGQAuAGA7AKIBAAKIB1AmIgSAXQAEAAASAFQASAFgPAIQgUAIgYAEIgaAEIgcAHQgaAHgNABQgMgBgVgJg");
	this.shape_616.setTransform(-209.3,32.3);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#A3794F").s().p("AANgHIAqgCQglACgeAHQgnAJgDABQAVgOAugDg");
	this.shape_617.setTransform(-141.7,46.7);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#AD8355").s().p("ABSAVIgrgGQgCgDgTgGIgfgDIgOgCIgSgBQgHAAghABQggABgbgRIAxgEQAsgDAhAHQBBASAKAEIBYAOg");
	this.shape_618.setTransform(-185.2,49.6);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#A3794F").s().p("AlxABIDbgBIAtgGIB1AEIDWgBIBLgIIBHAAIjVAPIhGAAIgRgBIgYAAIgdAAIhfAAIhGAIIjhABg");
	this.shape_619.setTransform(-243.4,48.6);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#AD8355").s().p("AF6A0IhagDQgcAAhDgGIhNgHIg8gDIhegEIhVgEIgygDIkHAAIhFAAIhXgBIgtAAIgbAAIAAgHIAcgDQAagCALAAIBHACIB4ADIBAACIDdABIAkAAIAtAAIAkACQAUACAKADQAJACAXAAIAagBIAaAAIAhABIAlAFIAoADIA5ADIBfAFIAzACIAxgFQAvgFA9gJQA4gMAFgaQAEgbgEgDIAVgIIAEAXQAEAVgLARQgQARg3ALQg3AKgrADQgcABgkAAIguAAg");
	this.shape_620.setTransform(-213.9,51.6);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#C19867").s().p("Egs2AEoIAApQMBZtAAAIAAJQg");
	this.shape_621.setTransform(5.6,39.9);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#AD8355").s().p("AGiAdIhxgFIgNAAIgVAAIgmgGIgggFIgbgOQgCgEgWgEIglAAIgrADIgzACQgTABgeADQghADgWABQgygCgXgCIghgDIgbgCIk2AEIh1gHIBCABIBgABIA7AAIAcAAICygIIAvAGIAdAEIAiADIAygDIAtgCIBcgKIBZgDIA2ARIBGALICrABIAPgFIADgHQACAAAFADQAGAFgNAHIAAAIIBXgHIASgOIAZgQIhIAQIBKgbIAhgBIgSAIIgMATQABABgNALQgMAMgqAEIhXACIgtAAg");
	this.shape_622.setTransform(-216.3,51.9);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#A3794F").s().p("AhzAIIAsgCIBjgJIAiAAIAsgBQAZgLACgIIAJARIALAHIAZAMIhPgHIgyABIhoADQhqAIgQAGQAXgNAngDg");
	this.shape_623.setTransform(-131.5,43.5);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#A3794F").s().p("AkYgEQAdgKAEAAIA8gMIAYABIAnACQATACAfAMIAiALIB+gDIAbABIAcgEIA+gGIBOgDIAsgBIgHAHIiZAGIgxAEIihAHIgPgIIg9gSIg5gEIgzAGIgSAEQgRAEgPAGQgkASgJAJQAPgYAdgHg");
	this.shape_624.setTransform(-150.1,40.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#A3794F").s().p("ACpBXQAEgQgCgBIA2gEIBEgLQAbgGACgIQABgIgBgBIhKgXIg5gJQgxgHgRgHQgJgDgrgGIhQgLIgrgFIkhgeIg2gBIh2gRIi7gOIEdAGICUARIA+ADIBQAFQAYACA9AIIBAAJIBFAHICBAOIBOAHIAzAHQAdAFAfACIArAAIAsAAIA/gCIAWAAIAkAUIAbAFIAVAJIAeASIgbAIIg2ALIisAHIAkAIIgXADIgfAEQgbAGgJAEIgrABIg0ABIg2ADQgoABgVgBQgMAAgLAFQAJgIABgHg");
	this.shape_625.setTransform(-117,32);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#A3794F").s().p("AiWAFQBggPBVgDQCWgEgJgDIAjgDIAmADIg4AEIgiAHIg5ABIhKAAQgYABhZAIQhUAJhHANIBegSg");
	this.shape_626.setTransform(-115.2,46.6);

	this.addChild(this.shape_626,this.shape_625,this.shape_624,this.shape_623,this.shape_622,this.shape_621,this.shape_620,this.shape_619,this.shape_618,this.shape_617,this.shape_616,this.shape_615,this.shape_614,this.shape_613,this.shape_612,this.shape_611,this.shape_610,this.shape_609,this.shape_608,this.shape_607,this.shape_606,this.shape_605,this.shape_604,this.shape_603,this.shape_602,this.shape_601,this.shape_600,this.shape_599,this.shape_598,this.shape_597,this.shape_596,this.shape_595,this.shape_594,this.shape_593,this.shape_592,this.shape_591,this.shape_590,this.shape_589,this.shape_588,this.shape_587,this.shape_586,this.shape_585,this.shape_584,this.shape_583,this.shape_582,this.shape_581,this.shape_580,this.shape_579,this.shape_578,this.shape_577,this.shape_576,this.shape_575,this.shape_574,this.shape_573,this.shape_572,this.shape_571,this.shape_570,this.shape_569,this.shape_568,this.shape_567,this.shape_566,this.shape_565,this.shape_564,this.shape_563,this.shape_562,this.shape_561,this.shape_560,this.shape_559,this.shape_558,this.shape_557,this.shape_556,this.shape_555,this.shape_554,this.shape_553,this.shape_552,this.shape_551,this.shape_550,this.shape_549,this.shape_548,this.shape_547,this.shape_546,this.shape_545,this.shape_544,this.shape_543,this.shape_542,this.shape_541,this.shape_540,this.shape_539,this.shape_538,this.shape_537,this.shape_536,this.shape_535,this.shape_534,this.shape_533,this.shape_532,this.shape_531,this.shape_530,this.shape_529,this.shape_528,this.shape_527,this.shape_526,this.shape_525,this.shape_524,this.shape_523,this.shape_522,this.shape_521,this.shape_520,this.shape_519,this.shape_518,this.shape_517,this.shape_516,this.shape_515,this.shape_514,this.shape_513,this.shape_512,this.shape_511,this.shape_510,this.shape_509,this.shape_508,this.shape_507,this.shape_506,this.shape_505,this.shape_504,this.shape_503,this.shape_502,this.shape_501,this.shape_500,this.shape_499,this.shape_498,this.shape_497,this.shape_496,this.shape_495,this.shape_494,this.shape_493,this.shape_492,this.shape_491,this.shape_490,this.shape_489,this.shape_488,this.shape_487,this.shape_486,this.shape_485,this.shape_484,this.shape_483,this.shape_482,this.shape_481,this.shape_480,this.shape_479,this.shape_478,this.shape_477,this.shape_476,this.shape_475,this.shape_474,this.shape_473,this.shape_472,this.shape_471,this.shape_470,this.shape_469,this.shape_468,this.shape_467,this.shape_466,this.shape_465,this.shape_464,this.shape_463,this.shape_462,this.shape_461,this.shape_460,this.shape_459,this.shape_458,this.shape_457,this.shape_456,this.shape_455,this.shape_454,this.shape_453,this.shape_452,this.shape_451,this.shape_450,this.shape_449,this.shape_448,this.shape_447,this.shape_446,this.shape_445,this.shape_444,this.shape_443,this.shape_442,this.shape_441,this.shape_440,this.shape_439,this.shape_438,this.shape_437,this.shape_436,this.shape_435,this.shape_434,this.shape_433,this.shape_432,this.shape_431,this.shape_430,this.shape_429,this.shape_428,this.shape_427,this.shape_426,this.shape_425,this.shape_424,this.shape_423,this.shape_422,this.shape_421,this.shape_420,this.shape_419,this.shape_418,this.shape_417,this.shape_416,this.shape_415,this.shape_414,this.shape_413,this.shape_412,this.shape_411,this.shape_410,this.shape_409,this.shape_408,this.shape_407,this.shape_406,this.shape_405,this.shape_404,this.shape_403,this.shape_402,this.shape_401,this.shape_400,this.shape_399,this.shape_398,this.shape_397,this.shape_396,this.shape_395,this.shape_394,this.shape_393,this.shape_392,this.shape_391,this.shape_390,this.shape_389,this.shape_388,this.shape_387,this.shape_386,this.shape_385,this.shape_384,this.shape_383,this.shape_382,this.shape_381,this.shape_380,this.shape_379,this.shape_378,this.shape_377,this.shape_376,this.shape_375,this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-285,-214.8,577.9,383.7);


(lib._nextQuestionmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("nextQuestionmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._incorrectmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("incorrectmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._correctmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("correctmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.balloon_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{balloon:0,pop:14});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		playSound("pop");
	}
	this.frame_25 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(11).call(this.frame_25).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80A4D6").s().p("AA5AnQgZghgUgMQgMgHgdgMQgdgLgRgNQgRgOAXgLQAFgFA0AWQAzAWAsBvIgaglg");
	this.shape.setTransform(28.5,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C3E7C").s().p("AgwDBQg4hNgCh0QAChyA4hNQA3hOBUgDIANABQg0AIgpAjQgnAhgSAuQgwCAAwCEQAuBxBrAvIgQACQhUgEg3hMg");
	this.shape_1.setTransform(10.8,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B256B0").s().p("AiLDBQg4hNgCh0QAChyA4hNQA4hOBTgDQBUADA4BOQA4BNACByQgCB0g4BNQg4BMhUAEQhTgEg4hMg");
	this.shape_2.setTransform(19.9,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C3E7C").s().p("AAEAEIgFgCQAAAAAAAAQABAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgLAAIANgDQAOgCAAAFQgCAEgFAAIgDAAg");
	this.shape_3.setTransform(20.7,57.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#082344").s().p("AgMgBIAZgCQAAACgHADQgDACgDAAQgEAAgIgFg");
	this.shape_4.setTransform(21,54.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C3E7C").s().p("AgEgDQAJgQACgCIAEAEQgQARABAVQgLgKALgOg");
	this.shape_5.setTransform(19.9,56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B256B0").s().p("AgNAUQgLgLALgOQALgQACgCQAeAegOALQgIAGgIAAQgFAAgIgEg");
	this.shape_6.setTransform(20.8,56.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C3E7C").s().p("AA+ClQg9gegcgEQg0ABglAoQAKgxACg0QgEgigSgTQgRgSgZgUQAXADAGgZQAGgYAAgTQADgmgHglQgMgegLgdQAbAvA2ArQA2AsA5AFQA6AFAnhCQgLA0gVASQgVASg2ABQhFADAAARQAAAQAmAPQAlANAuAAQgIAiADAlQA0ANAwASQg6gDgFAPQgFANANAYQAMAZAIAgQgLgZg9geg");
	this.shape_7.setTransform(18.5,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B256B0").s().p("AAeDcQgPgpgpgYQg0gXg0AJQg0AKgpAmQAEgfAHgeQAGgegCghQgEgpgXgYQgWgXgegZQAdADAHgdQAHgfAAgXQAEgvgIguQgFgTgKgRQgKgRgEgTQAZAtAvAuQAuAtAyAGQA1ACAgghQAeghAGgxQAnBcBHAKQBFALBhgGQhYARgqA2Qg4BLAfBLQAeBIBxALQgfgCgugFQg8gGgfAOQggAWAAAtQAAAsACAjQghghgPgpg");
	this.shape_8.setTransform(26.5,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7C3E7C").s().p("AAGAFQgGgBgBgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgCAAgNgBIAQgDQAQgCABAGQgDAFgGAAIgCAAg");
	this.shape_9.setTransform(19.3,44.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#082344").s().p("AgPgBIAfgDQAAACgJAEQgDADgEAAQgFAAgKgGg");
	this.shape_10.setTransform(19.7,40.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C3E7C").s().p("AgGgEQAMgTADgCIAEAEQgUAUABAbQgNgNANgRg");
	this.shape_11.setTransform(18.5,42.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B256B0").s().p("AgQAYQgOgNANgRQAOgUADgCQAjAkgQANQgJAIgKAAQgHAAgJgFg");
	this.shape_12.setTransform(19.6,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C3E7C").s().p("ACvDeQgVgegTgNQgVgJgXABQgXABgWgEQgVgGgTgKQgSgLgWgCQg9ACgqAtQADgeAGgbQAGgdgCgfQgEgmgVgYQgUgVgcgWQAbACAGgcQAHgcAAgWQADgsgHgrQgFgSgJgQQgJgRgEgSQARAdAcAdQAdAdAZAXQAZAYAaAEQAGATAIAWQgSgFgVgCQgWgDgGAFQgNBAAYAdQAZAcBFgRQgOAUACAVQBGgHA2gnQgRAbgfAQQgfAQAAAgQAGALAXAHQAYAIAOAIQA1AeAeA2QABAbAAAbQgCgRgVgdg");
	this.shape_13.setTransform(17.1,27.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B256B0").s().p("ACEFNQgZgkgZgQQgZgLgcAAQgdACgagEQgagHgYgNQgZgOgbgDQglgCghARQgiARgZAaQAEgkAIgjQAIgigCgnQgGgvgagcQgZgdgkgcQAiADAIghQAJgiAAgcQAEg2gJg1QgGgWgMgUQgLgUgEgWQAUAkAkAjQAjAkAgAcQAWAUATAIQASAHAdABQADgkgRggQgThEgIhGQAIAYAkAyQAkAxAbADQARgEARgcQARgbAGgVQAFAeANAbQAOgBAGgJIANgUQAhgrAvgfQAtgfArgXQAqgXA4gHQgtAOgyAuQgzAvgjA6QghA7AFAzQAjgCA0AMQA0ANATAWQghAAgfAEQgfACgIAdQgBAHgBAKQADAoAZAsQAZAtAWAsQAWAtgJApQgegZgZgeQgbgeghgUQgMAxANAyQANBNgCBPQgCgVgbglg");
	this.shape_14.setTransform(26,21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7C3E7C").s().p("AAFAEIgGgCQAAAAABAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBAAgMgBIAPgCQAOgCAAAFQgCAFgFAAIgDgBg");
	this.shape_15.setTransform(22.9,52);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#082344").s().p("AgOgBIAdgCQgBACgHADQgDACgEAAQgEAAgKgFg");
	this.shape_16.setTransform(23.3,48.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7C3E7C").s().p("AgFgDQAKgSADgBIADADQgRASABAYQgLgLALgPg");
	this.shape_17.setTransform(22.2,50.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B256B0").s().p("AgPAWQgMgMAMgPQAMgSADgCQAgAggPANQgIAGgJAAQgGAAgJgEg");
	this.shape_18.setTransform(23.2,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).wait(9));

	// anim_plembungan
	this.instance = new lib.string();
	this.instance.setTransform(20.9,78.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(4).to({_off:false},0).wait(3).to({y:98.6},2).to({y:128.6,alpha:0},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.8,155.4);


(lib.balloon_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"balloon":0,"pop":14});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		playSound("pop");
	}
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(10).call(this.frame_24).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80A4D6").s().p("AA8AqQgagkgVgNQgNgHgfgMQgfgNgSgOQgSgOAYgMQAFgGA4AYQA2AYAwB3Igdgog");
	this.shape.setTransform(30.5,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#113972").s().p("AgzDOQg8hSgDh8QADh7A8hSQA6hTBbgDIANABQg3AJgsAkQgqAlgUAxQgyCIAyCOQAyB4BzA0IgRABQhbgDg6hTg");
	this.shape_1.setTransform(11.5,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E4C96").s().p("AiVDOQg8hSgCh8QACh7A8hSQA9hTBYgDQBaADA8BTQA8BSACB7QgCB8g8BSQg8BThaADQhYgDg9hTg");
	this.shape_2.setTransform(21.3,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#113972").s().p("AAFAEIgHgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQgBAAgLAAIAOgDQAPgCAAAFQgCAEgGAAIgCAAg");
	this.shape_3.setTransform(22.1,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#082344").s().p("AgNAAIAbgDQAAACgHADQgDACgEAAQgEAAgJgEg");
	this.shape_4.setTransform(22.4,58.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#113972").s().p("AgFgEQAKgQADgCIADAEQgRARABAYQgLgMALgPg");
	this.shape_5.setTransform(21.3,60.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E4C96").s().p("AgOAVQgNgLAMgPQANgSACgBQAgAfgPAMQgIAGgJAAQgGAAgIgEg");
	this.shape_6.setTransform(22.3,60.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#113972").s().p("ABDCwQhBgfgfgFQg4ACgnApQALg0ACg3QgFgkgTgVQgSgTgbgWQAaADAFgZQAHgbgBgUQAEgpgHgnQgNgggLgfQAcAzA6AtQA5AvA9AFQA/AGAphHQgMA4gWATQgXATg6ABQhJAEAAASQAAAQApAQQAmAPAyAAQgJAkADAoQA4ANAzAUQg9gDgFAQQgGAOAOAZQANAbAIAiQgMgchAgfg");
	this.shape_7.setTransform(19.9,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E4C96").s().p("AAgDrQgQgrgsgaQg4gZg3AKQg4AKgrApQAEgiAHggQAHgfgCgkQgFgsgYgZQgYgZgfgaQAeADAIggQAHggAAgZQAFgygJgxQgFgUgLgTQgLgSgEgUQAbAwAyAxQAyAwA1AHQA4ACAigjQAhgjAGg1QAqBiBLALQBKAMBngHQheASgsA6Qg9BQAjBRQAgBMB4AMIhTgHQg/gHgiAPQgiAYgBAwQABAvACAlQgjgjgQgsg");
	this.shape_8.setTransform(28.5,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#113972").s().p("AAHAFIgIgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAgPgBIARgDQARgCABAGQgDAFgGAAIgCAAg");
	this.shape_9.setTransform(20.8,45.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#082344").s().p("AgQgBIAhgDQAAACgKAFQgDACgEAAQgGAAgKgGg");
	this.shape_10.setTransform(21.3,41.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#113972").s().p("AgGgEQANgVADgCIAEAEQgVAWABAdQgOgOAOgSg");
	this.shape_11.setTransform(19.9,43.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E4C96").s().p("AgRAZQgPgNAOgTQAPgVADgCQAmAmgSAPQgJAIgLAAQgHAAgKgGg");
	this.shape_12.setTransform(21.1,43.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#113972").s().p("ACrDXQgVgcgTgMQgTgKgXACQgWAAgWgDQgUgGgTgKQgSgLgVgDQg7ACgqAsQADgcAGgbQAHgcgCgeQgFgmgUgWQgUgUgbgXQAaADAHgcQAGgbAAgVQADgrgHgqQgEgRgJgQQgKgRgDgRQARAcAbAcIA1AzQAYAYAZADQAGASAIAWQgSgFgVgCQgVgDgGAFQgMA+AXAdQAYAaBDgPQgNAUACATQBEgGA0gmQgQAageAPQgeAQAAAeQAGAMAXAIQAWAGAPAIQAzAeAdA0QABAaAAAbQgCgRgUgdg");
	this.shape_13.setTransform(15.3,23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E4C96").s().p("ACBFEQgagjgXgPQgZgLgcAAQgbABgZgDQgagIgXgNQgYgNgbgCQgkgCghAQQgfASgaAYQAEgkAIghQAHghgCgmQgFgugZgcQgZgbgigcQAhADAIgfQAIgjgBgaQAFg1gJg0QgGgVgLgTQgLgUgFgVQAVAiAiAjQAjAiAfAcQAVAUASAHQATAHAcACQACgjgQggQgThBgHhFQAHAXAkAxQAiAwAbADQARgFAQgbQAQgbAHgTQADAdAOAaQAOgCAGgHIAMgUQAggqAugeQAsgfApgWQArgXA2gGQgsANgxAuQgzAsggA5QgiA5AHAyQAggBAzAMQAzAMATAWQghAAgdADQgeACgJAdQgCAHAAAIQADAnAYAsQAZAsAWArQAVArgJApQgdgYgZgeQgagdghgUQgKAwAMAwQAMBMgBBNQgDgVgZgkg");
	this.shape_14.setTransform(24,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#113972").s().p("AAFAEIgGgBQAAgBAAAAQABAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgMAAIAOgDQAOgCABAFQgCAEgGAAIgCAAg");
	this.shape_15.setTransform(21,47.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#082344").s().p("AgNAAIAbgDQAAACgIADQgCACgEAAQgEAAgJgEg");
	this.shape_16.setTransform(21.4,44.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#113972").s().p("AgFgEQAKgQADgCIADADQgRATABAXQgLgMALgPg");
	this.shape_17.setTransform(20.2,45.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E4C96").s().p("AgOAVQgMgLALgPQAMgSADgBQAfAfgOAMQgIAGgJAAQgGAAgIgEg");
	this.shape_18.setTransform(21.2,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).wait(8));

	// anim_plembungan
	this.instance = new lib.string();
	this.instance.setTransform(22.3,84.1,0.681,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(4).to({_off:false},0).wait(3).to({y:104.1},2).to({y:144.1,alpha:0},4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.5,166.3);


(lib.balloon_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"balloon":0,"pop":14});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		playSound("pop");
	}
	this.frame_25 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(11).call(this.frame_25).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98DB79").s().p("AA8AqQgagkgVgNQgNgHgfgMQgfgNgSgOQgSgOAYgMQAFgGA4AYQA2AYAwB3Igdgog");
	this.shape.setTransform(30.5,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E6D29").s().p("AgzDOQg8hSgDh8QADh7A8hSQA6hTBbgDIANABQg3AJgsAkQgqAlgUAxQgyCIAyCOQAyB4BzA0IgRABQhbgDg6hTg");
	this.shape_1.setTransform(11.5,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58993C").s().p("AiVDOQg8hSgCh8QACh7A8hSQA9hTBYgDQBaADA8BTQA8BSACB7QgCB8g8BSQg8BThaADQhYgDg9hTg");
	this.shape_2.setTransform(21.3,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E6D29").s().p("AAFAEIgHgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQgBAAgLAAIAOgDQAPgCAAAFQgCAEgGAAIgCAAg");
	this.shape_3.setTransform(22.1,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#254215").s().p("AgNAAIAbgDQAAACgHADQgDACgEAAQgEAAgJgEg");
	this.shape_4.setTransform(22.4,58.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3E6D29").s().p("AgFgEQAKgQADgCIADAEQgRARABAYQgLgMALgPg");
	this.shape_5.setTransform(21.3,60.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58993C").s().p("AgOAVQgNgLAMgPQANgSACgBQAgAfgPAMQgIAGgJAAQgGAAgIgEg");
	this.shape_6.setTransform(22.3,60.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E6D29").s().p("AA5CYQg4gbgagEQgwABgiAlQAJguACgvQgEgfgQgSQgQgRgXgSQAVADAGgXQAFgXAAgSQADgigGgjQgMgcgJgbQAYAtAyAoQAyAoA0AEQA2AFAkg+QgKAxgTARQgUAQgyAAQg/AEAAAQQAAAPAjANQAhAMArAAQgHAgACAiQAxAMAsARQg1gDgFAOQgFAMAMAWQALAWAIAfQgKgZg5gbg");
	this.shape_7.setTransform(20.1,28.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58993C").s().p("AAcDLQgOgmgmgWQgvgVgxAJQgxAIglAkQADgeAHgbQAGgbgBgfQgFgngUgVQgVgWgcgWQAbADAGgcQAHgcAAgVQADgrgHgrQgEgSgKgPQgJgRgEgRQAXAqAsAqQAqAqAvAGQAxABAdgeQAcgeAFguQAkBVBCAJQBAALBZgGQhRAPgnAyQg0BGAeBFQAbBCBoAKIhIgGQg3gFgcAMQgeAVAAApQAAApACAhQgfgfgNgmg");
	this.shape_8.setTransform(27.5,30.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3E6D29").s().p("AAFAEIgGgBQAAAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAgBQgBAAgMAAIAPgDQAOgCAAAFQgCAFgFAAIgDgBg");
	this.shape_9.setTransform(20.9,46.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#254215").s().p("AgOgBIAdgCQAAACgIADQgDACgEAAQgFAAgJgFg");
	this.shape_10.setTransform(21.2,43.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E6D29").s().p("AgFgDQAKgSAEgCIADAEQgSASABAZQgMgMAMgPg");
	this.shape_11.setTransform(20.1,45.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58993C").s().p("AgPAWQgMgLAMgRQAMgSADgBQAhAggPANQgJAGgJAAQgGAAgJgEg");
	this.shape_12.setTransform(21.1,45.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3E6D29").s().p("ACvDeQgVgegTgMQgVgKgXABQgXABgWgDQgVgHgTgKQgSgLgWgDQg9ACgqAuQADgeAGgcQAGgcgCgfQgEgngVgWQgUgWgcgWQAbACAGgcQAHgcAAgWQADgsgHgrQgFgRgJgRQgJgRgEgSQARAeAcAcQAdAdAZAXQAZAYAaADQAGAUAIAWQgSgEgVgDQgWgDgGAEQgNBBAYAdQAZAbBFgQQgOAVACAUQBGgHA2gnQgRAcgfAPQgfAQAAAgQAGALAXAIQAYAHAOAHQA1AgAeA2QABAaAAAcQgCgSgVgdg");
	this.shape_13.setTransform(15.1,33.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58993C").s().p("ACFFNQgagkgZgQQgZgMgdACQgcABgagEQgagHgYgOQgZgNgbgEQglgBghARQghASgaAZQAFgkAHgjQAHgigCgnQgFgwgZgbQgagdgkgdQAjAEAIggQAIgkAAgaQADg3gIg1QgGgWgMgUQgLgUgFgWQAWAjAjAkQAjAjAgAdQAWAUATAIQASAHAeABQACgkgSggQgThEgHhFQAJAYAjAxQAkAyAbADQARgFARgcQAQgcAHgTQAFAdANAbQAOgBAGgJIANgTQAhgsAugeQAuggArgXQArgXA3gHQgsAOg0AuQgyAugjA7QgiA7AHAzQAhgCA1ANQA0ALATAYQgiAAgeACQgeADgJAdQgCAHABAKQABAnAaAtQAZAsAWAtQAWAtgJAqQgdgagbgeQgageghgUQgLAxANAyQAMBNgCBPQgCgWgagkg");
	this.shape_14.setTransform(24,27.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3E6D29").s().p("AAFAEIgGgCQAAAAABAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBAAgMgBIAPgCQAOgCAAAFQgCAFgFAAIgDgBg");
	this.shape_15.setTransform(20.9,58);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#254215").s().p("AgOgBIAcgCQAAACgIADQgCACgEAAQgEAAgKgFg");
	this.shape_16.setTransform(21.3,54.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3E6D29").s().p("AgFgDQALgSADgCIACAEQgRATABAYQgMgMAMgPg");
	this.shape_17.setTransform(20.2,56.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58993C").s().p("AgPAWQgMgMAMgPQAMgSADgCQAgAggPANQgIAGgJAAQgGAAgJgEg");
	this.shape_18.setTransform(21.2,56.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).wait(9));

	// anim_plembungan
	this.instance = new lib.string();
	this.instance.setTransform(22.3,84.1,0.681,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(4).to({_off:false},0).wait(3).to({y:104.1},2).to({y:144.1,alpha:0},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.5,166.3);


(lib.balloon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"balloon":0,"pop":14});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		playSound("pop");
	}
	this.frame_24 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(10).call(this.frame_24).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28383").s().p("AA3AmQgYgggTgMIgogSQgcgLgQgNQgRgNAWgLQAFgFAzAWQAxAWArBrIgagkg");
	this.shape.setTransform(27.6,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA1111").s().p("AguC6Qg2hKgDhwQADhvA2hKQA0hLBSgDIANABQgzAIgnAhQgmAggSAtQguB7AuCBQAtBtBoAuIgQABQhSgDg0hLg");
	this.shape_1.setTransform(10.4,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC1B1B").s().p("AiGC6Qg3hKgChwQAChvA3hKQA2hLBQgDQBRADA2BLQA3BKACBvQgCBwg3BKQg2BLhRADQhQgDg2hLg");
	this.shape_2.setTransform(19.3,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA1111").s().p("AAFAEIgGgCQAAAAAAAAQABAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgKAAIAMgDQANgCABAFQgDAEgFAAIgBAAg");
	this.shape_3.setTransform(20,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#680B0B").s().p("AgMAAIAZgCQAAABgHADQgDABgDAAQgDAAgJgDg");
	this.shape_4.setTransform(20.3,53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA1111").s().p("AgEgDQAJgPACgCIADADQgPARABAVQgLgKALgOg");
	this.shape_5.setTransform(19.3,54.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC1B1B").s().p("AgMATQgMgKALgNQALgQACgCQAdAdgOAKQgHAGgIAAQgFAAgHgEg");
	this.shape_6.setTransform(20.2,54.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA1111").s().p("AA8CfQg7gdgbgDQgzABgjAlQAKguABgzQgDgggRgTQgRgRgYgTQAXACAFgYQAGgXgBgSQADglgGgkQgMgdgKgcQAaAuA0AqQA0AqA3AFQA4AEAmhAQgLAzgUARQgVASg0AAQhCAEAAAQQAAAQAlAOQAjAMAsAAQgHAiACAjQAzAMAuASQg4gDgEAPQgFAMAMAYQAMAXAHAfQgKgYg7gdg");
	this.shape_7.setTransform(18.3,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC1B1B").s().p("AAdDUQgOgngogXQgygWgyAJQgzAJgnAkQAEgeAGgdQAHgcgDggQgEgogVgXQgWgWgdgYQAcADAHgdQAHgdAAgXQADgtgIgsQgEgSgKgRQgKgRgDgSQAYArAtAtQAtArAwAGQAzACAfggQAdgfAFgwQAnBZBDAKQBEAKBdgGQhVAQgoA1Qg2BJAeBIQAdBFBtALIhLgHQg5gFgeANQggAVAAAsQAAArACAhQgfgggPgog");
	this.shape_8.setTransform(26,33.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AA1111").s().p("AAGAFIgHgCQAAAAAAgBQABAAAAAAQAAAAgBgBQAAAAAAgBQgCAAgNAAIAQgDQAQgDAAAGQgCAFgGAAIgCAAg");
	this.shape_9.setTransform(19.1,50.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#680B0B").s().p("AgOgBIAdgCQABACgJAEQgDABgDAAQgGAAgJgFg");
	this.shape_10.setTransform(19.5,47.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AA1111").s().p("AgFgDQALgTADgCIADAEQgTAUACAZQgNgMANgQg");
	this.shape_11.setTransform(18.3,48.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC1B1B").s().p("AgPAXQgOgMANgRQANgTADgCQAiAjgPANQgJAHgKAAQgGAAgJgFg");
	this.shape_12.setTransform(19.3,49.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AA1111").s().p("ACmDSQgUgcgSgLQgTgKgWABQgWABgVgDQgUgGgTgKQgQgKgVgDQg6ACgoArQADgcAGgaQAGgbgCgeQgEgkgUgWQgTgUgbgVQAaADAGgcQAGgbAAgUQADgqgHgpQgEgRgJgQQgJgPgDgRQAQAbAbAcIAzAxQAYAXAYADIAOAnQgSgEgUgDQgVgBgFADQgNA+AXAbQAYAaBBgPQgNATACASQBDgFAygmQgPAbgeAPQgdAPAAAeQAGALAWAHQAWAGAOAIQAxAdAdAzQABAaAAAZQgCgQgUgcg");
	this.shape_13.setTransform(14.3,26.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC1B1B").s().p("AB+E8QgZgjgXgOQgYgMgbACQgbABgYgEQgZgHgXgNQgYgMgagEQgiAAggAPQggARgXAYQAEgjAHggQAHgggDglQgEgtgZgbQgYgbghgbQAgADAHgfQAIghAAgZQAEg0gJgzQgFgUgLgTQgLgUgEgUQAUAhAiAiQAhAiAeAbQAVATASAHQASAHAbABQACgigQgeQgShBgHhCQAHAXAjAvQAhAvAaACQAQgDARgbQAPgbAGgSQAEAbANAaQAPgBAEgIIANgTQAfgpAsgdQArgeApgWQApgVA1gHQgrAOgwArQgxAsggA3QghA4AHAxQAggCAxAMQAyALASAWQggAAgdADQgcADgJAbQgCAGAAAKQADAlAYAqQAYArAVAqQAUAqgIAoQgcgYgZgcQgagdgfgTQgLAvANAvQAMBJgCBLQgCgVgZgig");
	this.shape_14.setTransform(22.8,20.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AA1111").s().p("AAFAEIgGgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAgMAAIAOgDQAOgCABAFQgDAEgFAAIgCAAg");
	this.shape_15.setTransform(19.9,49.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#680B0B").s().p("AgNgBIAbgCQAAACgIADQgCACgEAAQgEAAgJgFg");
	this.shape_16.setTransform(20.3,46.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AA1111").s().p("AgFgDQAKgRADgBIADADQgRARABAXQgLgLALgOg");
	this.shape_17.setTransform(19.2,47.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC1B1B").s().p("AgOAUQgMgKAMgPQALgRADgCQAfAfgPALQgHAHgJAAQgGAAgIgFg");
	this.shape_18.setTransform(20.1,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).wait(8));

	// anim_plembungan
	this.instance = new lib.string();
	this.instance.setTransform(20.2,76.2,0.616,0.616);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(4).to({_off:false},0).wait(3).to({y:116.2},2).to({y:156.2,alpha:0},4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.5,150.6);


(lib.balloon_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"balloon":0,"pop":14});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_14 = function() {
		playSound("pop");
	}
	this.frame_25 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(11).call(this.frame_25).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7D694").s().p("AA+ArQgbgkgWgOQgNgHgggNQgggMgSgPQgTgOAZgNQAFgGA6AZQA3AYAxB6Igdgpg");
	this.shape.setTransform(31.2,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAAE2A").s().p("Ag1DTQg9hVgCh+QACh+A9hUQA8hVBcgDIAPABQg5AJgtAlQgqAmgVAyQg0CMA0CRQAzB7B1A0IgSABQhcgDg8hUg");
	this.shape_1.setTransform(11.8,29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC93F").s().p("AiZDTQg8hVgDh+QADh+A8hUQA+hVBbgDQBcADA9BVQA9BUADB+QgDB+g9BVQg9BUhcADQhbgDg+hUg");
	this.shape_2.setTransform(21.8,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAAE2A").s().p("AAFAEIgGgCQAAAAAAAAQABAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgMAAIAOgDQAPgCAAAFQgCAFgFAAIgDgBg");
	this.shape_3.setTransform(22.6,63.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7831A").s().p("AgOgBIAdgCQgBABgHAEQgDACgEAAQgEAAgKgFg");
	this.shape_4.setTransform(23,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAAE2A").s().p("AgFgDQAKgSADgBIAEADQgSASABAZQgMgMAMgPg");
	this.shape_5.setTransform(21.8,61.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC93F").s().p("AgOAWQgNgMAMgPQAMgSADgCQAgAggPANQgIAGgJAAQgGAAgIgEg");
	this.shape_6.setTransform(22.8,61.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7D694").s().p("AA7ApQgagjgVgNQgMgHgfgMQgegMgRgOQgSgNAYgNQAFgFA2AXQA1AYAvB0Igcgng");
	this.shape_7.setTransform(29.8,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAAE2A").s().p("AgyDJQg6hQgDh5QADh4A6hQQA5hRBYgDIAOABQg3AJgqAjQgpAkgTAvQgyCGAyCKQAwB2BwAxIgRACQhYgEg5hQg");
	this.shape_8.setTransform(11.2,28.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC93F").s().p("AiRDJQg7hQgCh5QACh4A7hQQA6hRBXgDQBYADA6BRQA6BQADB4QgDB5g6BQQg6BQhYAEQhXgEg6hQg");
	this.shape_9.setTransform(20.8,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAAE2A").s().p("AAFAEIgGgBQAAgBAAAAQABAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgLAAIAOgDQAOgCgBAFQgCAEgFAAIgCAAg");
	this.shape_10.setTransform(21.6,60.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7831A").s().p("AgNAAIAbgDQAAACgIADQgCACgEAAQgEAAgJgEg");
	this.shape_11.setTransform(21.9,57.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAAE2A").s().p("AgFgDQAKgRADgCIADAEQgRARABAXQgLgLALgOg");
	this.shape_12.setTransform(20.8,58.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC93F").s().p("AgOAUQgMgKAMgPQAMgRACgCQAfAfgPALQgHAHgJAAQgFAAgJgFg");
	this.shape_13.setTransform(21.8,58.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAAE2A").s().p("AAxCBQgwgXgWgDQgpABgdAfQAIgnABgoQgDgbgOgPQgNgOgTgPQASACAEgTQAFgUAAgOQACgegFgdQgKgYgIgXQAVAlArAiQAqAiArAEQAvAEAfg0QgKAqgQANQgRAOgqABQg1ADAAANQgBANAfALQAbAKAlAAQgGAbACAdQApAKAlAOQgtgCgDAMQgEAKAKATQAJATAGAaQgJgUgvgYg");
	this.shape_14.setTransform(17.2,30.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC93F").s().p("AAXCtQgMghgfgSQgpgSgpAHQgpAIggAdQADgYAGgYQAFgXgCgbQgDgfgSgTQgRgSgYgTQAXACAGgXQAFgYgBgSQADglgFgkQgEgPgJgNQgHgOgDgPQATAkAmAkQAkAjAnAFQAqACAYgbQAYgZAFgnQAeBIA3AIQA3AIBMgEQhFANghArQgsA7AZA6QAXA5BZAIIg9gFQgvgFgYAKQgZATgBAiQABAkABAbQgagagMggg");
	this.shape_15.setTransform(23.5,31.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAAE2A").s().p("AAEAEIgFgCQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQgBAAgKAAIAMgCQANgCAAAEQgCAEgEAAIgDAAg");
	this.shape_16.setTransform(17.8,45.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B7831A").s().p("AgMAAIAYgCQABABgIADQgCACgDAAQgEAAgIgEg");
	this.shape_17.setTransform(18.2,42.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAAE2A").s().p("AgEgDQAJgPACgBIADADQgPAQABAUQgKgKAKgNg");
	this.shape_18.setTransform(17.2,44.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC93F").s().p("AgMATQgLgKAKgNQALgQACgBQAcAbgNALQgHAFgIAAQgFAAgHgDg");
	this.shape_19.setTransform(18,44.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAAE2A").s().p("ACHCrQgQgXgPgJQgQgIgRABQgSABgRgDQgRgFgPgIQgNgIgRgCQgvABghAkQADgXAEgWQAFgWgBgXQgEgfgQgSQgPgPgWgSQAVADAFgXQAFgVAAgRQACgjgFghQgEgOgHgMQgHgNgDgNQANAVAWAXIAqAoQATATAUACIALAhQgOgEgRgCQgQgCgFADQgKAyATAWQATAVA0gMQgKAPACAQQA2gFApgfQgNAWgYAMQgYAMAAAZQAFAJASAGQASAFALAGQApAYAXApQABAVAAAWQgBgOgRgXg");
	this.shape_20.setTransform(19.1,33);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC93F").s().p("ABnEBQgVgcgTgMQgTgJgWABQgWABgTgDQgVgGgSgKQgUgKgVgDQgcgBgaANQgZAOgVATQAEgcAGgaQAGgbgCgeQgEglgUgWQgUgVgbgWQAaACAGgZQAHgbgBgUQAEgrgHgpQgEgRgKgPQgJgQgDgQQAQAbAcAbQAbAcAZAWQAQAPAPAGQAPAGAWABQACgcgNgZQgPg0gGg2QAGASAcAnQAcAmAVACQANgDAOgWQALgVAGgQQADAXAKAVQAMgBAEgGIAKgQQAZgiAlgXQAigZAhgRQAigSArgFQgjALgnAjQgoAkgaAtQgaAuAEAnQAbgBAoAJQAoAKAQARQgbABgYACQgXACgGAWQgCAGAAAHQACAeAUAjQAUAiARAjQAQAigHAgQgXgTgUgXQgVgYgagPQgHAmAJAnQAKA7gCA9QgCgRgTgcg");
	this.shape_21.setTransform(26,28.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAAE2A").s().p("AAEADIgFgBQAAAAABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgKAAIALgCQAMgCAAAEQgCAEgEAAIgCgBg");
	this.shape_22.setTransform(23.6,51.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B7831A").s().p("AgKAAIAVgCQAAABgGACQgCACgDAAQgDAAgHgDg");
	this.shape_23.setTransform(23.9,49.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EAAE2A").s().p("AgEgCIAKgPIADACQgNAPAAASQgJgJAJgLg");
	this.shape_24.setTransform(23,50.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC93F").s().p("AgLARQgKgJAKgMIALgPQAZAZgMAJQgGAFgHAAQgEAAgHgDg");
	this.shape_25.setTransform(23.8,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},10).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},4).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).wait(9));

	// anim_plembungan
	this.instance = new lib.string();
	this.instance.setTransform(22.9,86.1,0.697,0.696);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(4).to({_off:false,scaleX:0.67,scaleY:0.66,x:21.8,y:82.1},0).wait(3).to({y:108.1},3).to({y:142.1,alpha:0},4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.6,170.2);


(lib.plembunganterbang = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.balloon_0();
	this.instance.setTransform(32.6,124,1.46,1.46,0,0,0,21.8,85);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,-0.1,63.6,248.4);


(lib.playGame = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Play the Game!", "bold 30px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 191;
	this.text.setTransform(125,-56.4);

	// Layer 1
	this.instance = new lib.plembunganterbang();
	this.instance.setTransform(-34.7,-63.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A1UPZIAA+yMAqpAAAIAAeyg");
	this.shape.setTransform(95.9,6.2);

	this.addChild(this.shape,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-92.4,273.1,277.2);


// stage content:
(lib.splatCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:9,win:15});

	// timeline functions:
	this.frame_0 = function() {
		/* #include "../../gameAssets/expressinstall.as"
		
		if (_root.MMplayerType == undefined) {
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
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "TranslationGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/splat.xml", "TranslationGame");
		}*/
		//this.stop();
	}
	this.frame_2 = function() {
		/* stop();
		dispatchEvent ({type:"ready", bubbles:true});
		playGame_btn.onRelease = function() {
			gotoAndStop("game");
		}*/
		this.stop();
	}
	this.frame_9 = function() {
		/* stop();
		
		if (game != undefined) delete (game);
		var game:RunGame = new RunGame(this);
		
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
		
		this.stop();
	}
	this.frame_15 = function() {
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(7).call(this.frame_9).wait(6).call(this.frame_15).wait(6));

	// Play Game btn
	this.text = new cjs.Text("v2.0", "bold 10px 'Arial Black'");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.lineWidth = 23;
	this.text.setTransform(19.5,5);

	this.playGame_btn = new lib.playGame();
	this.playGame_btn.setTransform(224.5,272.8,0.7,0.7);
	new cjs.ButtonHelper(this.playGame_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playGame_btn},{t:this.text}]},2).to({state:[]},7).to({state:[]},6).wait(6));

	// Intro text
	this.text_1 = new cjs.Text("Pop each of the balloons on the screen to free the pieces inside, then drag the pieces onto the spaces to unscramble the correct answer.", "20px 'Verdana'", "#FFFFFF");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 423;
	this.text_1.setTransform(92,87);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(2).to({_off:false},0).to({_off:true},7).wait(12));

	// Intro BG
	this.instance = new lib.begron("synched",0);
	this.instance.setTransform(313.4,206.8,1.074,1.047,0,0,180);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.578125, 0.73828125, 1, 1, 0, 0, 0, 0)];
	this.instance.cache(-269,-201,563,390);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},7).wait(12));

	// end
	this.text_2 = new cjs.Text("You finished the game. \nGreat job!", "25px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 364;
	this.text_2.setTransform(339,208);

	this.playAgain = new lib.playagain();
	this.playAgain.setTransform(341.5,328,1,1,0,0,0,89.5,21);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 1);

	this.text_3 = new cjs.Text("Congratulations!", "50px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 52;
	this.text_3.lineWidth = 450;
	this.text_3.setTransform(348,129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3},{t:this.playAgain},{t:this.text_2}]},15).wait(6));

	// BG
	this.instance_1 = new lib.background();
	this.instance_1.setTransform(296.6,224.6,1.051,1.051);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;