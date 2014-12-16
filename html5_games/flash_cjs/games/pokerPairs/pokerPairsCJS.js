(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/swishmp3.mp3", id:"swishmp3"},
		{src:"sounds/whooshmp3.mp3", id:"whooshmp3"}
	]
};



// symbols:



(lib.timerbg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ACrCpQhHBGhkAAQhjAAhHhGQhHhGAAhjQAAhiBHhGQBHhGBjAAQBkAABHBGQBHBGAABiQAABjhHBGg");
	this.shape.setTransform(24.2,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAADvQhjAAhHhGQhHhGAAhjQAAhiBHhGQBHhGBjAAQBkAABHBGQBHBGAABiQAABjhHBGQhHBGhkAAIAAAAg");
	this.shape_1.setTransform(24.2,23.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,50.5,49.9);


(lib.Symbol19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzbDEQANABDMgIQDVgJFngnQFmgnG3haQG4hYHNihQgDAGi5BbQi6BclQBpQlQBrnEA0Qi9AWjMAAQkcAAk4gqg");
	this.shape.setTransform(124.5,23.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,248.9,47.8);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALVEjQjAgGklg5Qkjg6k0hTQk0hSjuhSQjuhUhSg8QhTg8CggLIDPBDQDJA/E0BWQE0BUFIBIQFKBHEKAUQFVAYBTAfQBSAeiHAVQhpAQjSAAIiDgCg");
	this.shape.setTransform(125.4,29.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,251,58.7);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#331909").s().p("EgDyAgxQjSggjMAAQjNAAjLgGQjLgFjNgvQjBgwi2hKQi2hLjBg/QkmhTkXhyQkXhxkVhzMAAAg2zMBovAAAMAAAA8PIhMAbQl2CKl8BxQl7BymNA3Qn1BAnuAFIg2AAQnTAAnYhZg");
	this.shape.setTransform(335.2,218.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,670.5,437.3);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#331909").s().p("ApfD0QtAiMrQkAIAAjoQFhCOFuBoQCiAtCUBLQAXAFAbgFQAbgGAXAGQBiAgBmAOQBmAOBiAcQARAHAcAGQAcAGARABQEYBXEWArQFiAzFZAGQFaAGFZADQFZACFjAqIA0AHQn3AwoOAAQuNgBs9iMg");
	this.shape.setTransform(216.1,38.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432.2,77.2);


(lib.playAgain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play again?", "26px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 211;
	this.text.setTransform(105.5,0);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AwyFjIAArFMAhlAAAIAALFg");
	this.shape.setTransform(107.5,35.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,215,71);


(lib.pileofcards = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgXAng");
	this.shape.setTransform(-40.5,-100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgXAng");
	this.shape_1.setTransform(-45.2,-98.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAfIgXAog");
	this.shape_2.setTransform(-49.8,-97.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8F44A").s().p("AgPAEIAXgnIAIAfIgYAog");
	this.shape_3.setTransform(-38.2,-109.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8F44A").s().p("AgOAFIAWgoIAHAgIgWAng");
	this.shape_4.setTransform(-42.9,-107.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8F44A").s().p("AgPAEIAYgnIAHAgIgXAmg");
	this.shape_5.setTransform(-47.5,-106.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAfIgWAog");
	this.shape_6.setTransform(-35.8,-118.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAgIgWAng");
	this.shape_7.setTransform(-40.5,-117.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8F44A").s().p("AgPAFIAYgoIAHAgIgXAng");
	this.shape_8.setTransform(-45.1,-116);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8F44A").s().p("AgPAEIAYgnIAGAfIgXAog");
	this.shape_9.setTransform(-39.4,-96.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8F44A").s().p("AgPAEIAYgnIAHAfIgXAog");
	this.shape_10.setTransform(-43.7,-95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAfIgWAog");
	this.shape_11.setTransform(-48.4,-93.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAgIgWAng");
	this.shape_12.setTransform(-53,-92.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8F44A").s().p("AgPAEIAXgnIAIAgIgXAng");
	this.shape_13.setTransform(-37.1,-105.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8F44A").s().p("AgPAEIAYgnIAHAgIgXAng");
	this.shape_14.setTransform(-41.5,-104);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8F44A").s().p("AgPAEIAXgnIAHAfIgXAog");
	this.shape_15.setTransform(-46.1,-102.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8F44A").s().p("AgPAFIAXgoIAIAgIgYAng");
	this.shape_16.setTransform(-50.7,-101.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8F44A").s().p("AgPAEIAYgnIAHAgIgXAng");
	this.shape_17.setTransform(-34.8,-114.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgXAng");
	this.shape_18.setTransform(-39.2,-113.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E8F44A").s().p("AgPAEIAYgnIAGAgIgXAmg");
	this.shape_19.setTransform(-43.9,-111.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAfIgXAog");
	this.shape_20.setTransform(-48.5,-110.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgWAng");
	this.shape_21.setTransform(-32.2,-124.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E8F44A").s().p("AgPAEIAYgmIAHAfIgYAng");
	this.shape_22.setTransform(-36.5,-123.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAfIgWAog");
	this.shape_23.setTransform(-41.2,-122.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgWAng");
	this.shape_24.setTransform(-45.8,-120.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#B5C04D","#B7E949","#F6FB4B"],[0,0.663,1],41,-14,6.3,-43.9).s().p("AgsipIC8g7IhjGOIi9A7g");
	this.shape_25.setTransform(-42.9,-108.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9DA936").s().p("AguiuIDFg+IhnGdIjGA9g");
	this.shape_26.setTransform(-42.9,-108.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AisEKQgDgFACgIIBrmvQAGgUARgGIDNg/QAHgDADAFQAEAFgCAIIhrGvQgFAUgRAFIjOBAIgEABQgEAAgDgDg");
	this.shape_27.setTransform(-43,-108.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_28.setTransform(-43.2,-33.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E8F44A").s().p("AgjgCIAegLIAqARIgfAKg");
	this.shape_29.setTransform(-45.3,-37.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_30.setTransform(-47.3,-41.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_31.setTransform(-33.7,-32.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_32.setTransform(-35.8,-36.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E8F44A").s().p("AgkgCIAfgMIAqARIgeAMg");
	this.shape_33.setTransform(-37.9,-40.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E8F44A").s().p("AgkgCIAfgLIAqAQIgeALg");
	this.shape_34.setTransform(-24,-31.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_35.setTransform(-26.1,-35.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_36.setTransform(-28.1,-39.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E8F44A").s().p("AgkgCIAegMIArASIgfALg");
	this.shape_37.setTransform(-46.7,-31.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_38.setTransform(-48.7,-35.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_39.setTransform(-50.8,-39.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeALg");
	this.shape_40.setTransform(-52.8,-44.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E8F44A").s().p("AgjgCIAdgMIAqARIgdALg");
	this.shape_41.setTransform(-37.4,-30.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E8F44A").s().p("AgkgCIAfgMIAqARIgeAMg");
	this.shape_42.setTransform(-39.4,-34.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E8F44A").s().p("AgkgDIAegLIArARIgfALg");
	this.shape_43.setTransform(-41.5,-39);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E8F44A").s().p("AgkgCIAegLIArARIgfAKg");
	this.shape_44.setTransform(-43.5,-43.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E8F44A").s().p("AgkgCIAegLIArARIgeALg");
	this.shape_45.setTransform(-28.2,-29.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_46.setTransform(-30.1,-33.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_47.setTransform(-32.2,-38.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E8F44A").s().p("AgkgDIAfgLIAqARIgeAMg");
	this.shape_48.setTransform(-34.3,-42.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E8F44A").s().p("AgkgCIAegLIArARIgfAKg");
	this.shape_49.setTransform(-17.4,-28.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_50.setTransform(-19.3,-32.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E8F44A").s().p("AgkgCIAfgMIAqARIgeAMg");
	this.shape_51.setTransform(-21.4,-37);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_52.setTransform(-23.5,-41.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#B5C04D","#B7E949","#F6FB4B"],[0,0.663,1],19.8,38.6,44.5,-0.1).s().p("AihBFIhWiyIGZApIBWCyg");
	this.shape_53.setTransform(-35.4,-36.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9DA936").s().p("AimBJIhai7IGnArIBaC6g");
	this.shape_54.setTransform(-35.4,-36.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AEUCIIm6gtQgVgCgIgQIhdjCQgDgHADgEQAFgEAIABIG6AsQAVADAIAPIBdDDQADAGgEAEQgDAEgHAAIgCAAg");
	this.shape_55.setTransform(-35.6,-36.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_56.setTransform(-125.9,51.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_57.setTransform(-136,40);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E8F44A").s().p("AghgnIBdgMIgaBaIhdAOg");
	this.shape_58.setTransform(-146,28.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E8F44A").s().p("AghgmIBdgOIgaBbIhdAOg");
	this.shape_59.setTransform(-110.5,38.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E8F44A").s().p("AgigmIBegOIgZBbIheAOg");
	this.shape_60.setTransform(-120.7,26.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_61.setTransform(-130.7,15.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBaIhdANg");
	this.shape_62.setTransform(-94.8,24.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_63.setTransform(-105,12.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBbIhdAMg");
	this.shape_64.setTransform(-115,1.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E8F44A").s().p("AghgmIBcgOIgZBcIhcAMg");
	this.shape_65.setTransform(-128.3,63.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E8F44A").s().p("AghgnIBdgMIgaBaIhdANg");
	this.shape_66.setTransform(-137.8,52.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_67.setTransform(-147.9,41.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E8F44A").s().p("AghgmIBdgOIgZBbIheANg");
	this.shape_68.setTransform(-157.9,29.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBaIhdANg");
	this.shape_69.setTransform(-113.3,50.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBbIhdAMg");
	this.shape_70.setTransform(-122.7,39.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E8F44A").s().p("AghgmIBcgNIgYBaIheAOg");
	this.shape_71.setTransform(-132.9,28.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E8F44A").s().p("AghgnIBcgMIgYBaIheANg");
	this.shape_72.setTransform(-142.9,16.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E8F44A").s().p("AghgnIBdgMIgZBaIheANg");
	this.shape_73.setTransform(-98.3,37.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E8F44A").s().p("AghgmIBdgOIgZBbIheAOg");
	this.shape_74.setTransform(-107.7,26.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E8F44A").s().p("AghgmIBcgNIgZBaIhcANg");
	this.shape_75.setTransform(-117.9,14.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBaIhdANg");
	this.shape_76.setTransform(-127.9,3.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBbIhdAMg");
	this.shape_77.setTransform(-80.8,22.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E8F44A").s().p("AghgmIBcgNIgYBbIheAMg");
	this.shape_78.setTransform(-90.3,11.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E8F44A").s().p("AghgmIBdgOIgaBbIhdANg");
	this.shape_79.setTransform(-100.5,-0.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_80.setTransform(-110.5,-11.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#B5C04D","#B7E949","#F6FB4B"],[0,0.663,1],69.3,-11.3,77.5,-160.1).s().p("AoaA5IKVpHIGfHWIqUJHg");
	this.shape_81.setTransform(-120.3,25.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9DA936").s().p("AovA4IKtpbIGyHsIqsJcg");
	this.shape_82.setTransform(-120.2,25.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ah/JvQgVgEgQgRInEoBQgQgSgBgVQgBgVAOgMILKp2QAOgMAVADQAVAEAQARIHEIBQAPASABAVQABAWgOAMIrKJ1QgKAKgPAAIgJgBg");
	this.shape_83.setTransform(-120.6,25.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAfIgXAog");
	this.shape_84.setTransform(54.8,-119);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgXAng");
	this.shape_85.setTransform(50.1,-117.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAgIgXAng");
	this.shape_86.setTransform(45.5,-116.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E8F44A").s().p("AgPAEIAXgnIAIAfIgYAog");
	this.shape_87.setTransform(57.1,-128.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E8F44A").s().p("AgPAFIAXgoIAIAgIgXAng");
	this.shape_88.setTransform(52.4,-126.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E8F44A").s().p("AgPAEIAYgmIAHAeIgXAog");
	this.shape_89.setTransform(47.8,-125.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAfIgWAog");
	this.shape_90.setTransform(59.5,-137.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAgIgWAng");
	this.shape_91.setTransform(54.8,-136.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E8F44A").s().p("AgPAFIAYgoIAHAgIgXAng");
	this.shape_92.setTransform(50.2,-134.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E8F44A").s().p("AgPAEIAYgnIAHAgIgYAng");
	this.shape_93.setTransform(55.9,-115.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAHAfIgXAog");
	this.shape_94.setTransform(51.6,-113.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAfIgWAog");
	this.shape_95.setTransform(46.9,-112.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAfIgWAog");
	this.shape_96.setTransform(42.3,-111.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E8F44A").s().p("AgOAEIAWgnIAHAgIgWAng");
	this.shape_97.setTransform(58.2,-124.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAHAgIgXAng");
	this.shape_98.setTransform(53.8,-123);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E8F44A").s().p("AgPAEIAXgnIAIAgIgYAng");
	this.shape_99.setTransform(49.2,-121.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E8F44A").s().p("AgPAFIAYgoIAHAgIgYAng");
	this.shape_100.setTransform(44.6,-120.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgWAng");
	this.shape_101.setTransform(60.5,-133.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgXAng");
	this.shape_102.setTransform(56.1,-132);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E8F44A").s().p("AgPAEIAYgmIAHAfIgYAng");
	this.shape_103.setTransform(51.4,-130.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAfIgXAog");
	this.shape_104.setTransform(46.8,-129.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAhIgWAmg");
	this.shape_105.setTransform(63.1,-143.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E8F44A").s().p("AgPAFIAYgoIAHAgIgYAmg");
	this.shape_106.setTransform(58.8,-142.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E8F44A").s().p("AgOAEIAXgnIAGAgIgWAng");
	this.shape_107.setTransform(54.1,-141.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E8F44A").s().p("AgOAFIAXgoIAGAgIgXAng");
	this.shape_108.setTransform(49.5,-139.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#B5C04D","#B7E949","#F6FB4B"],[0,0.663,1],41,-14,6.3,-43.9).s().p("AgsipIC8g7IhjGOIi9A7g");
	this.shape_109.setTransform(52.4,-127.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#9DA936").s().p("AguivIDFg+IhnGdIjGA9g");
	this.shape_110.setTransform(52.4,-127.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AisEKQgDgEACgJIBrmvQAGgUARgFIDNhAQAHgCADAEQAEAFgCAIIhrGuQgFAVgRAFIjOBAIgEABQgEAAgDgDg");
	this.shape_111.setTransform(52.3,-127);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_112.setTransform(52.1,-52);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E8F44A").s().p("AgkgCIAfgMIAqARIgfALg");
	this.shape_113.setTransform(50,-56.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_114.setTransform(48,-60.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_115.setTransform(61.6,-51);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_116.setTransform(59.5,-55.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E8F44A").s().p("AgkgCIAfgMIAqARIgeAMg");
	this.shape_117.setTransform(57.4,-59.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E8F44A").s().p("AgkgCIAfgMIAqARIgeAMg");
	this.shape_118.setTransform(71.3,-50);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_119.setTransform(69.2,-54.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_120.setTransform(67.2,-58.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E8F44A").s().p("AgkgDIAegKIArAQIgfALg");
	this.shape_121.setTransform(48.6,-50.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_122.setTransform(46.6,-54.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E8F44A").s().p("AgkgDIAegKIArAQIgeALg");
	this.shape_123.setTransform(44.5,-58.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E8F44A").s().p("AgkgCIAegLIArARIgeALg");
	this.shape_124.setTransform(42.5,-63.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E8F44A").s().p("AgjgCIAdgMIArARIgeAMg");
	this.shape_125.setTransform(57.9,-49.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E8F44A").s().p("AgkgCIAfgMIAqARIgeAMg");
	this.shape_126.setTransform(55.9,-53.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E8F44A").s().p("AgkgCIAegMIArASIgfALg");
	this.shape_127.setTransform(53.8,-57.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E8F44A").s().p("AgkgDIAegLIArARIgfALg");
	this.shape_128.setTransform(51.8,-62.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E8F44A").s().p("AgkgDIAegLIArARIgeALg");
	this.shape_129.setTransform(67.1,-48.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_130.setTransform(65.2,-52.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_131.setTransform(63.1,-57);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E8F44A").s().p("AgkgCIAfgLIAqAQIgeALg");
	this.shape_132.setTransform(61,-61.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgfAMg");
	this.shape_133.setTransform(77.9,-47.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_134.setTransform(76,-51.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E8F44A").s().p("AgkgCIAfgMIAqARIgeAMg");
	this.shape_135.setTransform(73.9,-55.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E8F44A").s().p("AgkgCIAegMIArARIgeAMg");
	this.shape_136.setTransform(71.8,-60.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#B5C04D","#B7E949","#F6FB4B"],[0,0.663,1],19.8,38.6,44.5,-0.1).s().p("AihBFIhWiyIGZApIBWCyg");
	this.shape_137.setTransform(59.9,-55.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#9DA936").s().p("AimBJIhai7IGnArIBaC6g");
	this.shape_138.setTransform(59.9,-55.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AEUCIIm6gtQgVgCgIgQIhdjCQgDgHADgEQAFgEAIABIG6AsQAVADAIAPIBdDDQADAGgEAEQgDAEgHAAIgCAAg");
	this.shape_139.setTransform(59.7,-55.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_140.setTransform(-30.6,32.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_141.setTransform(-40.7,21.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E8F44A").s().p("AghgmIBdgOIgaBcIhdAMg");
	this.shape_142.setTransform(-50.7,9.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_143.setTransform(-15.2,19.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E8F44A").s().p("AghgmIBcgNIgYBbIheAMg");
	this.shape_144.setTransform(-25.4,7.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_145.setTransform(-35.4,-3.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBaIhdANg");
	this.shape_146.setTransform(0.5,5.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_147.setTransform(-9.7,-6.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_148.setTransform(-19.7,-17.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E8F44A").s().p("AgigmIBdgNIgZBaIhcAOg");
	this.shape_149.setTransform(-33,44.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E8F44A").s().p("AghgnIBdgMIgaBaIhdANg");
	this.shape_150.setTransform(-42.5,33.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBbIhdAMg");
	this.shape_151.setTransform(-52.6,22.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E8F44A").s().p("AghgnIBdgMIgZBaIheANg");
	this.shape_152.setTransform(-62.6,10.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBaIhdANg");
	this.shape_153.setTransform(-18,31.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBbIhdAMg");
	this.shape_154.setTransform(-27.4,20.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E8F44A").s().p("AghgmIBcgOIgYBcIheAMg");
	this.shape_155.setTransform(-37.6,9.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E8F44A").s().p("AghgnIBcgMIgZBaIhcANg");
	this.shape_156.setTransform(-47.6,-2.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E8F44A").s().p("AghgmIBdgOIgZBbIheAOg");
	this.shape_157.setTransform(-3,18.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E8F44A").s().p("AghgmIBdgNIgZBbIheAMg");
	this.shape_158.setTransform(-12.4,7.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E8F44A").s().p("AgigmIBdgNIgZBaIhcANg");
	this.shape_159.setTransform(-22.6,-4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBbIhdAMg");
	this.shape_160.setTransform(-32.6,-15.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E8F44A").s().p("AgigmIBegNIgaBaIhdANg");
	this.shape_161.setTransform(14.5,3.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E8F44A").s().p("AghgmIBcgNIgZBbIhcAMg");
	this.shape_162.setTransform(5,-7.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E8F44A").s().p("AghgnIBdgMIgaBaIhdANg");
	this.shape_163.setTransform(-5.2,-19.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E8F44A").s().p("AghgmIBdgNIgaBaIhdANg");
	this.shape_164.setTransform(-15.2,-30.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#B5C04D","#B7E949","#F6FB4B"],[0,0.663,1],69.3,-11.3,77.5,-160.1).s().p("AoaA4IKVpGIGfHXIqVJGg");
	this.shape_165.setTransform(-25,6.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#9DA936").s().p("AovA4IKtpcIGyHtIqsJbg");
	this.shape_166.setTransform(-24.9,6.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("Ah/JvQgVgEgQgRInEoBQgQgSgBgVQgBgVAOgMILKp2QAOgMAVADQAVAEAQARIHEIBQAPASABAVQABAWgOAMIrKJ1QgKAKgPAAIgJgBg");
	this.shape_167.setTransform(-25.3,6.8);

	this.addChild(this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184,-154,272.9,242.2);


(lib.btnHelp = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnzjHIPnAAIAAGPIvnAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#992356").s().p("AnzDHIAAmNIPnAAIAAGNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-21,102,42);


(lib.btnFS = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnzjHIPnAAIAAGPIvnAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9999FF").s().p("AnzDHIAAmNIPnAAIAAGNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-21,102,42);


(lib.bgbar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/gDHMBj/AAAIAAGPMhj/AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Egx/ADHIAAmNMBj/AAAIAAGNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-321,-21,642,42);


(lib.help_plz_btn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(128,27,27,0.851)").s().p("AhKBKIAAiUICVAAIAACUg");
	this.shape.setTransform(7.5,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.dice = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAKQgGgBgBgEQgBgEAFgCQAFgEAIgCQAGgDAHABQAGACABADQABAEgFACQgFAEgIADIgIABIgFAAg");
	this.shape.setTransform(0.7,-17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAMQgIgBgBgFQgBgFAFgDQAGgFAKgDQAJgCAHABQAIABABAFQABAEgFAEQgGAEgKADQgGACgGAAIgEAAg");
	this.shape_1.setTransform(1.9,-14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAMQgHgCgCgEQgBgFAHgDQAGgFAJgCQAJgDAHABQAIABABAFQACAFgGACQgGAGgLACQgFACgGAAIgFAAg");
	this.shape_2.setTransform(-4.7,-14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AAAAQQgDgFgEgHQgEgHAAgGQAAgGAEgCQADgBAEADQAEAFAEAIQAEAFAAAGQAAAHgEACIgCAAQgDAAgDgCg");
	this.shape_3.setTransform(-12.3,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AAAATQgEgFgFgKQgEgHAAgIQAAgIAEgCQAEgCAFAFQAFAFAFAJQAEAIAAAIQABAHgFADIgCABQgEAAgEgEg");
	this.shape_4.setTransform(-9.6,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#950F06","#F3472D"],[0,1],5.6,-7.2,0,5.6,-7.2,13.7).s().p("AgFBKQgTgCgQgLQgQgLgKgTQgIgTABgRQACgTALgQQALgQATgKQATgIARABQATACAQALQARALAJATQAIATgBARQgCATgLAQQgLARgTAJQgQAHgPAAIgFAAg");
	this.shape_5.setTransform(13.5,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#6D6D6D"],[0,1],45.9,22.9,-40.1,-20.1).s().p("AhMDHQgRgHgJgRIhijMQgIgSAGgSQAHgRARgJIDbhpQASgIARAGQASAHAJARIBiDMQAIASgHASQgGARgSAJIjaBpQgKAEgKAAQgIAAgIgCg");
	this.shape_6.setTransform(11.6,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#6D6D6D"],[0,1],35,13,-33.6,-21.3).s().p("AhKCaIgJgGQgJgGgGgOIhXi1QgHgQAGgQQAFgPAQgIIDChdQANgHANgDQANgDAPAHIASAEIAkAGIAkAGIAQADQACAFgIAdQgIAdgPArQgOArgSAtIgmBhQgTAugOAeQgOAegGAEg");
	this.shape_7.setTransform(-0.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#6D6D6D"],[0,1],35.1,13.1,-33.5,-21.2).s().p("AhKCaIgJgGQgIgGgGgOIhXi1QgHgQAFgQQAGgPAQgIIDBhdQAOgHANgDQANgDAOAHIASAEIAlAGIAjAGIAQADQACAGgIAeQgJAegPAtIgiBcQgSAygSArQgSAsgOAdQgOAcgFAEg");
	this.shape_8.setTransform(-0.6,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#540D0E").s().p("AjvAhIB5hbIFmBHIh5Avg");
	this.shape_9.setTransform(-8.1,15.6);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.1,-21.6,64.3,43.2);


(lib.congrats = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Great job! \nYou finished the game.", "26px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 305;
	this.text.setTransform(152.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,309,72);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,reveal:6,showing:16,hide:23});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_16 = function() {
		/* stop();*/
	}
	this.frame_32 = function() {
		/* gotoAndStop("static");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(16).call(this.frame_32).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape.setTransform(-5.2,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_1.setTransform(0.4,69.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_2.setTransform(6,69.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_3.setTransform(11.6,69.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_4.setTransform(17.2,69.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_5.setTransform(22.7,69.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_6.setTransform(28.3,69.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_7.setTransform(33.9,69.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_8.setTransform(39.5,69.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_9.setTransform(45.1,69.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_10.setTransform(50.7,69.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_11.setTransform(56.2,69.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_12.setTransform(61.8,69.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_13.setTransform(67.4,69.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_14.setTransform(73,69.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_15.setTransform(-5.2,59.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_16.setTransform(0.4,59.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_17.setTransform(6,59.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_18.setTransform(11.6,59.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_19.setTransform(17.2,59.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_20.setTransform(22.7,59.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_21.setTransform(28.3,59.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_22.setTransform(33.9,59.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_23.setTransform(39.5,59.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_24.setTransform(45.1,59.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_25.setTransform(50.7,59.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_26.setTransform(56.2,59.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_27.setTransform(61.8,59.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_28.setTransform(67.4,59.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_29.setTransform(73,59.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_30.setTransform(-5.2,50);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_31.setTransform(0.4,50);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_32.setTransform(6,50);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_33.setTransform(11.6,50);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_34.setTransform(17.2,50);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_35.setTransform(22.7,50);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_36.setTransform(28.3,50);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_37.setTransform(33.9,50);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_38.setTransform(39.5,50);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_39.setTransform(45.1,50);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_40.setTransform(50.7,50);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_41.setTransform(56.2,50);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_42.setTransform(61.8,50);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_43.setTransform(67.4,50);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_44.setTransform(73,50);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_45.setTransform(-5.2,40.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_46.setTransform(0.4,40.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_47.setTransform(6,40.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_48.setTransform(11.6,40.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_49.setTransform(17.2,40.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_50.setTransform(22.7,40.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_51.setTransform(28.3,40.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_52.setTransform(33.9,40.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_53.setTransform(39.5,40.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_54.setTransform(45.1,40.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_55.setTransform(50.7,40.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_56.setTransform(56.2,40.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_57.setTransform(61.8,40.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_58.setTransform(67.4,40.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_59.setTransform(73,40.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_60.setTransform(-5.2,30.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_61.setTransform(0.4,30.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_62.setTransform(6,30.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_63.setTransform(11.6,30.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_64.setTransform(17.2,30.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_65.setTransform(22.7,30.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_66.setTransform(28.3,30.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_67.setTransform(33.9,30.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_68.setTransform(39.5,30.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_69.setTransform(45.1,30.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_70.setTransform(50.7,30.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_71.setTransform(56.2,30.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_72.setTransform(61.8,30.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_73.setTransform(67.4,30.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_74.setTransform(73,30.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_75.setTransform(-5.2,20.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_76.setTransform(0.4,20.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_77.setTransform(6,20.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_78.setTransform(11.6,20.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_79.setTransform(17.2,20.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_80.setTransform(22.7,20.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_81.setTransform(28.3,20.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_82.setTransform(33.9,20.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_83.setTransform(39.5,20.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_84.setTransform(45.1,20.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_85.setTransform(50.7,20.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_86.setTransform(56.2,20.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAQAWIAHALIgJAHg");
	this.shape_87.setTransform(61.8,20.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_88.setTransform(67.4,20.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgWAAIAkg0IAJAHIgIAKIgPAVIgIAOIAIANIAPAWIAIALIgJAHg");
	this.shape_89.setTransform(73,20.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#4C682B","#2B4412"],[0,1],0,-28.9,0,29).s().p("AFPEhIhvAAIiSAAIibAAIiSAAIhwAAIg2AAIAAgqIAAhTIAAhrIAAhxIAAhrIAAhSIAAgrIA2AAIBwAAICSAAICbAAICSAAIBvAAIA3AAIAAArIAABSIAABrIAABxIAABrIAABSIAAArIg3AAg");
	this.shape_90.setTransform(35,45.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AmcFdQgPAAgMgLQgKgKAAgQIAApvQAAgQAKgKQAMgLAPAAIM5AAQAPAAALALQAKAKABAQIAAJvQgBAQgKAKQgLALgPAAg");
	this.shape_91.setTransform(35,45.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgPAUIgMgUIAZgSIAWgVIAIAFIgKAIIgSAQIgOAKIAHAKIAHARIAFAHIgFADIgFADIgKgUg");
	this.shape_92.setTransform(-7.9,65.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgPAUIgMgUIAZgSIAWgUIAIAFIgKAIIgSAQIgNAJIAGAKIAHAQIAEAIIgEACIgFADIgKgTg");
	this.shape_93.setTransform(-2.2,64.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgQATIgLgTIAZgRIAWgUIAHAFIgJAIIgSAPIgNAJIAGAKIAHAPIAEAIIgEACIgGADIgKgTg");
	this.shape_94.setTransform(3.4,64.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgQATIgKgTIAYgRIAWgTIAHAFIgJAHIgSAQIgNAIIAGAKIAHAPIADAHIgJAFIgKgSg");
	this.shape_95.setTransform(8.8,64.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgQASIgKgSIAYgRIAWgSIAHAEIgJAIIgSAPIgNAIIAGAJIAHAPIACAIIgEACIgFACIgJgSg");
	this.shape_96.setTransform(14.1,64.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgQARIgKgRIAYgRIAWgSIAHAFIgJAHIgSAOIgNAJIAFAJIAIAPIACAHIgEACIgFADIgJgTg");
	this.shape_97.setTransform(19.4,64.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgQARIgKgRIAYgRIAWgRIAHAEIgJAHIgSAOIgNAJIAFAJIAIAOIABAIIgDACIgGADIgIgTg");
	this.shape_98.setTransform(24.7,64.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgQARIgKgRIAYgQIAWgSIAHAEIgJAIIgSAOIgNAIIAFAJIAHAPIABAHIgDACIgFACIgIgSg");
	this.shape_99.setTransform(30,64.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgRARIgKgRIAagRQAIgGANgLIAHAFIgJAHIgSANIgNAJIAFAJIAHAPIABAHIgDACIgFACIgJgSg");
	this.shape_100.setTransform(35.2,64.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgSARIgJgRIAZgRIAXgRIAHAFIgLAHIgRANIgOAJIAFAJIAHAPIACAHIgEACIgFACIgJgSg");
	this.shape_101.setTransform(40.5,64.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgSARIgJgRIAZgRIAXgRIAHAFIgLAHIgRANIgOAJQACABACAIIAIAPIACAIIgEABIgGACIgIgSg");
	this.shape_102.setTransform(45.9,64.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgSARIgJgRIAZgRIAXgRIAHAFIgKAHIgSANIgPAJIAGAJIAHAPIACAIIgFACIgFABIgIgSg");
	this.shape_103.setTransform(51.3,65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgSAQIgKgRIAagQIAYgSIAHAGIgLAGIgSAOIgOAJIAFAIIAHAQIACAIIgEACIgGABIgIgTg");
	this.shape_104.setTransform(56.8,65.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgTARIgKgSIAbgRQAKgGAOgLIAIAFIgLAHIgTAOIgPAJIAFAIIAIARIACAIIgEABIgGACIgJgTg");
	this.shape_105.setTransform(62.4,65.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgTARIgKgSIAbgRIAZgRIAIAEIgLAIIgVANIgPAKIAGAJIAIAQIADAIIgEACIgHACIgJgUg");
	this.shape_106.setTransform(68.3,66.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgJAUIgQgUIAXgUIATgTIAJAFIgJAIIgRAQIgKAKIAIAKIAKARIAGAIIgKAFIgNgUg");
	this.shape_107.setTransform(-6.4,57.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgJATIgQgTIAXgSIATgUIAIAFIgIAIIgRAPIgKAKIAIAKIAJAQIAGAJIgFACIgFACIgMgUg");
	this.shape_108.setTransform(-0.7,57.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgKATIgOgTIAWgSIASgTIAJAFIgJAHIgQAQIgLAJIAIAKIAKAQIAFAIIgKAEIgMgTg");
	this.shape_109.setTransform(5,57.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgKASIgOgSIAWgSIATgTIAIAFIgJAIIgQAPIgKAJIAHAKIAJAPIAGAIIgLAFIgLgUg");
	this.shape_110.setTransform(10.4,57.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgKASIgOgSIAWgSIASgSIAJAEIgJAIIgQAPIgKAJIAHAJIAIAQIAGAIIgLAEIgKgTg");
	this.shape_111.setTransform(15.9,57.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgKASIgNgSIAVgSIASgSIAIAFIgIAHIgQAPIgLAJIAIAKIAIAOIAGAIIgLAFIgKgTg");
	this.shape_112.setTransform(21.2,57.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgKASIgOgSIAWgRIATgSIAIAEIgJAIIgQANIgKAKIAGAJIAJAPIAEAIIgJAFIgKgTg");
	this.shape_113.setTransform(26.6,57.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgLASIgMgSIAVgRIASgSIAIAEIgIAHIgQAPIgLAJIAHAJIAIAQIAFAHIgJAFIgLgTg");
	this.shape_114.setTransform(31.9,57.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgLASIgNgSIAWgSIATgSIAIAFIgJAIIgQANIgLAKIAHAJIAIAPIAFAJIgJADIgLgSg");
	this.shape_115.setTransform(37.2,57.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgMASIgMgSIAWgSIATgSIAIAFIgJAIIgQANIgLAKIAHAJIAIAPIAFAIIgJAFIgMgTg");
	this.shape_116.setTransform(42.5,58);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgMASIgNgSIAXgSIAUgSIAIAFIgJAHIgRAPIgMAJIAIAKIAIAPIAFAIIgFACIgEACIgMgTg");
	this.shape_117.setTransform(47.9,58.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgMARIgNgSIAXgSIAUgSIAIAGIgJAHIgRAOIgMAKIAHAJIAIAQIAFAIIgFACIgEADIgLgVg");
	this.shape_118.setTransform(53.4,58.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgNASIgMgSIAWgTQAJgHAMgLIAJAFIgJAIIgSAOIgMAKIAHAJIAIARIAGAIIgGACIgEACIgMgUg");
	this.shape_119.setTransform(59,58.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgNASIgNgTIAYgRIAVgTIAIAFIgJAHIgSAPIgMAKIAHAKIAIAQIAGAIIgGADIgDABIgNgUg");
	this.shape_120.setTransform(64.7,58.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgNASIgOgTIAZgSIAWgTIAIAFIgKAIIgSAPIgMAKIAHAKIAJARIAFAIIgFACIgEACIgNgVg");
	this.shape_121.setTransform(70.5,59.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgEATIgTgUIAUgTIARgTIAKAFIgIAIIgQAPIgIALIAIAJIAPASIAHAJIgKAEIgQgVg");
	this.shape_122.setTransform(-5.9,50.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgEASIgSgSIATgUIARgSIAJAFIgHAHIgQAQIgIAKIAIAJIAOARIAIAJIgKAEIgQgVg");
	this.shape_123.setTransform(-0.2,50.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgEASIgSgSIATgTIAQgSIAJAFIgHAHIgOAPIgJAKIAIAJIANARIAHAIIgJAEIgPgUg");
	this.shape_124.setTransform(5.5,50.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgEASIgSgSIATgTIAQgSIAJAFIgHAIIgOAOIgJAKIAIAJIANAQIAHAJIgJAEIgPgUg");
	this.shape_125.setTransform(11,50.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgEASIgRgSIASgTIAQgSIAJAFIgHAIIgPAOIgIAKIAIAJIANAQIAGAHIgJAGIgOgUg");
	this.shape_126.setTransform(16.5,50.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgEASIgRgSIASgSIAQgSIAJAEIgHAIIgPAPIgIAJIAIAJIAMAQIAHAIIgKAEIgNgTg");
	this.shape_127.setTransform(21.8,50.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgFASIgQgSIASgSIARgSIAIAEIgHAIIgPAPIgIAJIAIAJIAMAQIAGAIIgJAEIgOgTg");
	this.shape_128.setTransform(27.2,51);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgFASIgQgSIASgSIARgSIAIAFIgHAHIgPAPIgIAJIAIAKIALAOIAHAIIgKAFIgNgTg");
	this.shape_129.setTransform(32.6,51);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgFARIgQgRIATgTIAQgRIAJAEIgIAHIgPAQIgJAJIAJAJIALAQIAGAIIgJAEIgNgUg");
	this.shape_130.setTransform(38,51.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgFASIgRgSIATgTIARgSIAJAFIgIAIIgPAOIgIAKIAIAJIALAQIAGAIIgJAFIgNgUg");
	this.shape_131.setTransform(43.4,51.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgGASIgQgSIATgSIARgTIAJAFIgIAIIgPAOIgIAKIAIAKIALAPIAHAIIgKAFIgOgUg");
	this.shape_132.setTransform(48.8,51.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgGASIgRgSIAUgSIASgTIAJAEIgIAIIgQAPIgIAKIAIAJIALARIAGAIIgJAEIgOgUg");
	this.shape_133.setTransform(54.4,51.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgHASIgQgSIAVgSIARgUIAJAFIgIAIIgQAPIgJAKIAJAJIALARIAGAIIgKAFIgOgVg");
	this.shape_134.setTransform(60,51.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgHATIgRgTIAWgTIASgUIAJAFIgJAIIgQAQIgJAKIAJAKIALARIAGAJIgJAEIgPgVg");
	this.shape_135.setTransform(65.7,51.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgHATIgRgTIAVgTIATgVIAJAGIgIAIIgRAQIgKAKIAKAKIAMASIAGAIIgFACIgFACIgPgVg");
	this.shape_136.setTransform(71.5,51.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgCARIgWgTIASgSIAOgSIAKAFIgHAHIgLAPIgKAKIAKAJIARASIAIAIIgJAFIgSgWg");
	this.shape_137.setTransform(-6.1,43);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgCARIgWgTIARgSIAOgRIAKAFIgGAHIgLAPIgJAJIAJAKIAQAQIAJAJIgJAEIgSgVg");
	this.shape_138.setTransform(-0.3,43.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgCARIgVgSIARgSIANgSIAKAFIgGAHIgMAOIgIAKIAJAKIAQAQIAIAIIgJAFIgRgVg");
	this.shape_139.setTransform(5.3,43.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgCASIgVgTIAQgSIAOgRIAKAFIgHAHIgKAOIgJAKIAJAJIAQAPIAIAJIgJAEIgRgTg");
	this.shape_140.setTransform(10.8,43.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgDASIgUgSIARgSIANgSIAKAFIgGAHIgLAOIgKAKIAKAJIAPAQIAIAIIgIAEIgSgTg");
	this.shape_141.setTransform(16.4,43.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgCASIgUgSIAQgSIANgSIAJAFIgGAHIgKAOIgJAKIAJAJIAPAPIAIAIIgIAFIgRgTg");
	this.shape_142.setTransform(21.7,44);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgCASIgUgSIAQgSIANgSIAKAFIgGAHIgLAOIgIAKIAIAJIAPAPIAIAIIgIAFIgRgTg");
	this.shape_143.setTransform(27.1,44.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgDASIgTgSIAQgSIANgSIAJAFIgGAHIgKAOIgJAKIAJAJIAPAQIAIAIIgJAEIgRgTg");
	this.shape_144.setTransform(32.5,44.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgDASIgTgSIAQgSIANgSIAKAEIgHAIIgKAPIgJAJIAJAJIAPAQIAIAIIgJAEIgRgTg");
	this.shape_145.setTransform(38,44.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgCASIgUgSIAQgSIAOgTIAKAFIgHAHIgLAPIgIAKIAIAJIAPAQIAIAIIgJAFIgQgUg");
	this.shape_146.setTransform(43.3,44.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgDASIgTgSIAQgSIAOgTIAKAFIgHAIIgLAOIgJAKIAJAKIAPAPIAIAIIgJAFIgRgUg");
	this.shape_147.setTransform(48.8,44.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgDASIgUgSIARgSIAOgUIAFADIAFACIgHAIIgLAPIgIAKIAIAKIAQAQIAIAIIgJAFIgSgVg");
	this.shape_148.setTransform(54.4,44.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgDATIgUgTIARgTIAOgUIAFADIAGACIgHAIIgMAQIgJAKIAJAKIAQAQIAIAIIgKAFIgRgUg");
	this.shape_149.setTransform(60,44.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgDATIgUgTIARgTIAPgUIAFACIAFADIgHAIIgMAQIgJAKIAJAKIAQARIAIAJIgJAEIgSgVg");
	this.shape_150.setTransform(65.7,44.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgDATIgVgTIASgTIAPgVIAFADIAGACIgIAIIgMARIgKAKIAKAKIAQARIAJAJIgKAFIgSgWg");
	this.shape_151.setTransform(71.6,44.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgCAQIgYgUIAPgQIANgRIAFADIAFADIgGAGIgJAOIgJAJIAMAJIASASIAJAJIgIAEIgVgWg");
	this.shape_152.setTransform(-7.1,35.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgDAQIgWgTIAOgQIAMgRIAKAFIgGAHIgJANIgIAJIAMAKIASAQIAJAJIgJAEIgVgVg");
	this.shape_153.setTransform(-1.3,36.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgDAQIgWgSIAOgRIALgQIAGACIAFADIgGAHIgJANIgIAJIAMAJIARAQIAJAIIgIAEIgVgUg");
	this.shape_154.setTransform(4.3,36.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgCAQIgXgSIAOgRIALgQIAKAEIgFAIIgJANIgIAJIAMAJIARAQIAJAIIgJAEIgTgUg");
	this.shape_155.setTransform(9.9,37);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgCAQIgXgRQAJgKAEgHIAMgRIAKAFIgGAHIgIANIgIAJIAMAJIARAQIAJAIIgIAEIgUgUg");
	this.shape_156.setTransform(15.4,37.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgCAQIgXgRIAOgRIALgRIAFADIAFACIgGAHIgIANIgIAKIAMAIIARAQIAJAIIgIAEIgUgUg");
	this.shape_157.setTransform(20.8,37.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgCARIgXgRIANgSIAMgRIAJAFIgFAHIgIANIgIAKIAMAIIARAQIAJAIIgIAEIgUgTg");
	this.shape_158.setTransform(26.2,37.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgCARIgXgRIANgRQAGgIAGgKIAJAEIgFAHIgIAPIgIAJIAMAIIARAQIAJAIIgIAEIgUgTg");
	this.shape_159.setTransform(31.6,37.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgCARIgXgRIANgSQAGgHAGgKIAEACIAFACIgFAHIgIAPIgIAJIAMAJIARAPIAJAIIgIAEIgUgTg");
	this.shape_160.setTransform(37,37.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgCASIgXgSIANgSIAMgSIAEADIAGACIgGAHIgJAOIgHAKIAMAJIARAPIAJAIIgIAFIgUgTg");
	this.shape_161.setTransform(42.5,37.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgCASIgXgSIANgRIAMgTIAJAEIgFAIIgIAPIgIAJIAMAKIARAOIAJAIIgIAGIgUgUg");
	this.shape_162.setTransform(47.9,37.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgDATIgXgTIAOgRIAMgUIAEADIAGACIgGAHIgIAPIgIAKIAMAKIARAQIAJAHIgIAFIgVgTg");
	this.shape_163.setTransform(53.5,37.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgDATIgXgTIAOgSIAMgUIAEADIAFACIgFAIIgJAPIgHAKIAMAKIARAQIAKAIIgJAFIgVgUg");
	this.shape_164.setTransform(59.2,36.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgDATIgYgTIAPgTIAMgUIAEADIAGACIgGAIIgIAQIgIAKIAMAKIASARIAKAHIgJAGIgWgVg");
	this.shape_165.setTransform(64.9,36.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgCAUIgZgUIAOgTIANgVIAEADIAGACIgGAIIgJAQIgIALIANALIASAQIAKAJIgJAEIgVgUg");
	this.shape_166.setTransform(70.7,36.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgCAOIgagTIAOgPIANgOIACACIAGADIgGAGIgHAMIgHAIIANAKIASAQIAKAJIgHAEIgXgWg");
	this.shape_167.setTransform(-8.8,29.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgCAPIgZgTIAMgPIAMgPIAEADIAFACIgFAHIgIAMIgHAIIAOAJIASAQIAKAJIgIADIgWgUg");
	this.shape_168.setTransform(-3.1,29.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgCAPIgZgSIAMgPIALgPIAEACIAFADIgFAGIgHAMIgHAJIAOAIIASAQIAKAIIgIADIgWgTg");
	this.shape_169.setTransform(2.5,30.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgCAPIgZgRIAMgQIALgPIAIAEIgEAHIgHAMIgHAJIAOAIIASAQIAKAIIgIADIgWgTg");
	this.shape_170.setTransform(8,30.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgCAPIgZgQIAMgRIAKgPIAFADIAEACIgEAGIgIANIgFAIIANAIIARAPIALAIIgHAEIgXgTg");
	this.shape_171.setTransform(13.5,30.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgCAPIgZgQIALgQIAKgQIAFADIAEABIgDAHIgIANIgGAJIAOAIIARAOIALAIIgHAEIgXgTg");
	this.shape_172.setTransform(18.9,30.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgCAPIgZgQIALgQIAKgQIAEADIAFABIgDAHIgIANIgGAJIAOAHIARAPIALAIIgHAEIgXgTg");
	this.shape_173.setTransform(24.3,30.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgCAQIgZgQIALgRIAJgQIAIAEIgCAHIgHANIgGAJIAOAIIASAOIAKAIIgIAEQgNgLgJgHg");
	this.shape_174.setTransform(29.6,30.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgCARIgZgRIAKgQIAJgRIAGABIADACIgCAIIgIANIgFAJIANAJIATANIAKAIIgHAFIgXgSg");
	this.shape_175.setTransform(35,30.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgCARIgagRIAKgRIAJgRIAGABIAEADIgDAHIgHAOIgFAJIANAJIATAPIALAGIgIAFIgXgSg");
	this.shape_176.setTransform(40.5,30.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgCARIgagRIAKgRIAJgSIAGACIADACIgCAIIgHAOIgGAJIAOAJIATAPIALAHIgIAFIgXgTg");
	this.shape_177.setTransform(45.9,30.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgCASIgbgSIALgQIAIgTIAGABIAEADIgCAHIgIAPIgEAJIANAJIAUAPIALAIIgIAEIgYgSg");
	this.shape_178.setTransform(51.4,30.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgCASIgbgSIALgRIAJgTIAFABIAEADIgCAIIgHAPIgGAJIAPAKIATAPIALAIIgIAEIgYgTg");
	this.shape_179.setTransform(57,29.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgCATIgbgTIAKgRIAJgUIAFABIAFADIgCAIIgIAQIgGAJIAQAKIATAPIAMAIIgIAFIgZgTg");
	this.shape_180.setTransform(62.7,29.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgCAUIgcgUIAKgSIAJgUIAGACIAFACIgDAIIgIAQIgFAKIAQAKIAUAQIALAIIgIAFIgZgTg");
	this.shape_181.setTransform(68.4,29.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#4C682B","#2B4412"],[0,1],0,-21.7,0,21.8).s().p("AgXDJQi9gBi9AMQAchFAHhJQAHhHgLhIQgLhJgbhFQB/AQB/ADQB/ADB9gHQB/gFB/gLQAmBDAMBLQANBKgNBLQgMBLgmBDQi8gPi7gBg");
	this.shape_182.setTransform(31.7,47.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AFlEEQjJgQjEAAQjHABjJAPQgQACgHgHQgHgIAFgMQAZhTAJhNQAKhLgJhNQgIhNgghSQgDgLAIgFQAIgFAQACQDJAYDFgEQDDgEDJgVQARgBAQAGQARAHAIAMQAdBEAQA6QAPA6AAA0QABA3gOA6QgPA6gdBFQgHAKgQAGQgNAFgOAAIgHgBg");
	this.shape_183.setTransform(31.2,47.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CCCCCC").s().p("AgtChQAagQAcgcQAdgbAWgpQAPggABglQABgogGglQgFglgHgYIgIgYQAgBIACA5QADA1gQApQgQApgaAbQgZAcgZAQQgbAQgSAIIgUAGQAOgGAagQgAAzi2IAAAAIAAAAg");
	this.shape_184.setTransform(-10.7,50.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgjAJIgBgKIAjgJIAhgJIAFAEIgOADIgaAIIgTAEIAAAFIAAAKIAAAEIgHABIgGAAIAAgLg");
	this.shape_185.setTransform(-8.4,67);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgjAJIAAgKIAigJIAhgKIAFAEIgPAEIgZAHIgTAFIAAAFIgBAKIAAAFIgHAAIgFABIAAgMg");
	this.shape_186.setTransform(-3,67.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgjAKIABgLIAigJIAggLIAFAEIgOAEIgaAIIgSAFIAAAFIgBAKIAAAGIgHAAIgHABIABgMg");
	this.shape_187.setTransform(2.2,68.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgiAKIABgMIAhgJIAggKIAEAEIgNAEIgZAIIgSAFIgBAFIgBAKIAAAGIgGAAIgHABIABgMg");
	this.shape_188.setTransform(7.4,68.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgiAJIABgKIAhgJIAfgLIAEAEIgNAEIgYAIIgSAFIgBAFIAAAKIAAAGIgHABIgGAAIAAgNg");
	this.shape_189.setTransform(12.5,69.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AghAKIAAgLIAhgJIAegLIAEAEIgNAEIgYAIIgSAFIAAAFIAAAKIAAAFIgGABIgGABIAAgMg");
	this.shape_190.setTransform(17.5,70);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AggAKIAAgLIAggJIAegKIADADIgMAFIgYAIIgSAEIAAAFIABAKIAAAFIgGABIgGABIAAgMg");
	this.shape_191.setTransform(22.5,70.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgfAKIgBgKIAggJIAdgLIAEADIgMAEIgXAIIgRAFIAAAKIABAJIgGABIgGABIgBgLg");
	this.shape_192.setTransform(27.4,70.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgeALIgCgLIAfgJIAdgLIAFADIgNAFIgWAIIgRAEIABAKIACAJIgGABIgHABIgBgKg");
	this.shape_193.setTransform(32.4,70.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgdALIgCgLIAegIIAcgMIAGAEIgNADIgWAJIgRAEIADAKIACAIIgGABIgGABIgDgJg");
	this.shape_194.setTransform(37.6,70.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgbALIgFgJIAfgJIAcgMIAGACIgNAFIgWAJIgQAFIADAIIAEAIIgGABIgHABIgDgJg");
	this.shape_195.setTransform(42.8,70.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgbAMIgEgJIAegKIAcgMIAFABIgMAGIgWAJIgRAFIAGAIIAEAHIgGACIgGABIgGgIg");
	this.shape_196.setTransform(48.1,70.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgaANIgGgHIAfgMIAbgNIAHABIgNAGIgWAKIgQAFIAGAIIAGAFIgHADIgGABIgHgHg");
	this.shape_197.setTransform(53.6,69.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgZAPIgHgHIAegNIAcgOIAHAAIgMAGIgWAMIgRAFIAIAHIAGAGIgGABIgHACIgIgFg");
	this.shape_198.setTransform(59.3,68.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgYAPIgJgGIAggNIAbgQIAIAAIgNAHIgWAMIgRAHIAJAGIAIAEIgHACIgGAEIgKgHg");
	this.shape_199.setTransform(65.3,66.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgfANIgDgNIAigMIAdgOIAGAFIgNAFIgYAKIgSAGIACAHIABAMIABAGIgGABIgGABIgDgOg");
	this.shape_200.setTransform(-2.7,62.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgeANIgDgOQATgGAOgHIAdgNIAFAFIgNAFIgXAKIgSAHIABAHIACAMIAAAGIgGABIgGABIgBgOg");
	this.shape_201.setTransform(2.8,63.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgeAMIgCgOIAfgMIAegNIAEAFIgMAFIgXAKIgSAHIABAHIABAMIAAAGIgFACIgHABIAAgQg");
	this.shape_202.setTransform(8.1,63.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgfAMIgBgOIAfgMIAdgMIAEAEIgMAFIgXAKIgRAHIABAHIABAMIAAAHIgFABIgHAAIgBgPg");
	this.shape_203.setTransform(13.2,64.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgeAMIgBgOIAfgMIAbgMIAFAEIgMAFIgWAKIgRAGIABAIIAAAMIAAAGIgFABIgGABIgBgPg");
	this.shape_204.setTransform(18.1,64.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgdANIgBgOIAegMIAbgNIAEAFIgMAFIgVAJIgRAHIABAGIABAMIABAHIgHABIgFAAIgBgNg");
	this.shape_205.setTransform(23,65.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgcAMIgCgNIAegMIAagMIAFAEIgMAFIgVAKIgQAGIABAGIABAMIABAGIgGABIgGABIgBgOg");
	this.shape_206.setTransform(27.8,66.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgbAMIgCgNIAdgLIAagNIAEAFIgLAEIgVAJIgPAHIABAGIACALIAAAGIgGABIgFABIgCgNg");
	this.shape_207.setTransform(32.6,66.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgaAMIgDgMIAdgLIAZgNIAFAEIgMAFIgTAJIgQAGIABAHIADAKIABAGIgFABIgHABIgCgNg");
	this.shape_208.setTransform(37.4,66.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgZAMIgEgMIAcgLIAagMIAFADIgMAGIgTAJIgQAFIADAHIACAJIACAFIgGABIgFACIgEgMg");
	this.shape_209.setTransform(42.2,66.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgYAMIgFgLIAcgKIAZgOIAGAEIgMAEIgTAKIgQAGIAFAKIAEAJIgFABIgHADIgEgMg");
	this.shape_210.setTransform(47.2,66.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgXAOIgGgKIAcgMIAZgOIAGADIgMAFIgTALIgQAFIAHAKIAFAIIgGABIgGACIgGgJg");
	this.shape_211.setTransform(52.2,66.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgWAOQgDgDgEgGIAcgMIAYgPIAHACIgLAGIgUAMIgPAGIAHAIIAGAGIgGADIgFACQgFgFgDgEg");
	this.shape_212.setTransform(57.5,65.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgVAQIgJgIIAcgOIAagQIAHABIgMAHIgUAMIgPAHIAIAHIAIAGIgHADIgFACIgJgHg");
	this.shape_213.setTransform(63.1,64.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgUARQgFgCgGgFIAdgPIAagRIAIAAIgMAHIgUAOIgQAIIAKAGIAGAEIgEADIgGADIgKgGg");
	this.shape_214.setTransform(68.8,62.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgXAQIgIgQIAegPIAagQIAHAEIgMAHIgVANIgQAHIAEAJIAFAOIADAGIgGACIgHABIgFgQg");
	this.shape_215.setTransform(1.7,57.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgYAPIgGgQIAdgPIAagQIAGAFIgLAHIgVAMIgPAIIADAIIAEAPIACAHIgGABIgGACIgFgSg");
	this.shape_216.setTransform(7.3,57.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgYAPIgFgRIAcgOIAZgQIAGAFIgLAHIgUAMIgPAIIACAIIAEAPIACAHIgGABIgGACIgEgSg");
	this.shape_217.setTransform(12.6,58);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgYAPQgBgJgEgIIAcgPIAZgOIAFAFIgKAGIgUALIgPAIIACAIIADAQIACAHIgFABIgHACIgDgSg");
	this.shape_218.setTransform(17.7,58.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgXAOIgFgRIAbgOIAYgOIAGAGIgLAGIgTAKIgOAIIABAIIADAOIABAIIgEACIgGABIgDgSg");
	this.shape_219.setTransform(22.7,59.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgXAOIgEgRIAbgOIAXgNIAFAFIgLAGIgSAKIgOAIIABAIIADAOIACAIIgGABIgFABIgDgRg");
	this.shape_220.setTransform(27.4,60.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgWAOIgEgQIAagOIAWgNIAFAFIgKAGIgSAKIgOAHIACAIIADAOIACAHIgFABIgGABIgDgQg");
	this.shape_221.setTransform(32.1,60.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgVAOIgFgPIAagOIAWgNIAFAEIgLAGIgRAKIgOAIIADAHIADANIACAGIgFACIgGABIgDgPg");
	this.shape_222.setTransform(36.7,61.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgVAOIgEgOIAZgOIAVgNIAGAEIgKAFIgRALIgOAHIACAHIAFAMIABAHIgFABIgFABIgFgOg");
	this.shape_223.setTransform(41.3,61.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgUANIgFgNIAYgNIAWgOIAGAEIgKAGIgSALIgMAGIACAHIAFAMIACAFIgKAEIgGgPg");
	this.shape_224.setTransform(46,61.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgTAOIgHgNIAZgNIAVgOIAGAEIgJAFIgSAMIgMAGIACAHIAHAKIACAGIgKADIgHgNg");
	this.shape_225.setTransform(50.7,61.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgSAPIgIgNIAZgMIAVgPIAHADIgKAFIgRANIgOAGIAIALIAGAJIgLAEIgHgLg");
	this.shape_226.setTransform(55.6,61.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgRAQIgJgLIAZgNIAVgRIAIACIgLAHIgRAMIgOAHIAJAKIAFAIIgDACIgFADQgGgFgDgFg");
	this.shape_227.setTransform(60.7,60.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgQARIgLgKIAZgOIAWgSIAIABIgKAIIgSANIgOAIIAKAIQAGAGAAACIgDACIgGADIgJgJg");
	this.shape_228.setTransform(66.1,59.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgRATIgLgIIAagQIAXgUIAIABIgKAHIgTAQIgOAIIAGAEIAIAGIAFADIgFADIgFADIgMgHg");
	this.shape_229.setTransform(71.6,58.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgOASIgOgSIAagRIAWgTIAJAFIgKAIIgTAOIgNAJQACACAFAIIAIAQIAFAHIgGACIgDACIgMgTg");
	this.shape_230.setTransform(4.4,50.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgOASQgFgKgHgJIAYgSQAJgGAMgLIAJAFIgKAIIgSAOIgMAJIAGAKIAGAQIAEAIIgEACIgFABIgJgTg");
	this.shape_231.setTransform(10.2,51);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgPAQIgKgSIAYgRIAUgRIAHAGIgJAHIgRANIgMAJIAFAJIAHARIACAJIgJADIgIgVg");
	this.shape_232.setTransform(15.7,51.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgOAQIgKgTIAXgQIAUgRIAGAHIgJAGIgQANIgMAIIAFAKIAGARIACAIIgDADIgGABIgGgVg");
	this.shape_233.setTransform(20.8,52.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgPAPIgIgSIAWgQIATgQIAGAGIgIAHIgQALIgMAJIAFAKIAFAQIACAJIgJADIgGgVg");
	this.shape_234.setTransform(25.7,53.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgPAQIgIgUIAWgOIASgQIAHAHIgJAFIgPAMIgLAJIAEAJIAFARIACAIIgIACIgHgTg");
	this.shape_235.setTransform(30.4,53.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgPAPIgHgTIAVgOIASgPIAGAFIgIAHIgPAMIgLAIIAEAIIAGAQIABAIIgIADIgHgTg");
	this.shape_236.setTransform(35,54.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgOAOIgIgSIAVgNIARgPIAHAFIgIAGIgPAMIgLAIIAEAIIAGAPIABAIIgIADIgGgTg");
	this.shape_237.setTransform(39.5,55.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgNAPIgIgRIAUgOIARgPIAHAFIgIAGIgPAMIgLAIIAEAIIAHAOIABAHIgIADIgGgRg");
	this.shape_238.setTransform(44,56.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgNAPIgIgQIAUgOIARgPIAHAEIgIAHIgPALIgLAIIAEAIIAHANIACAHIgHAEIgIgRg");
	this.shape_239.setTransform(48.5,56.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgNAQIgJgQIAVgOIARgQIAHAFIgIAGIgPANIgLAGIAGAJIAFALIADAHIgHADIgJgOg");
	this.shape_240.setTransform(53.1,56.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgMARIgKgPIAVgOIARgRIAIAEIgJAHIgPAMIgKAHIAGAIIAFALIAFAGIgIAEIgKgNg");
	this.shape_241.setTransform(57.8,56.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgMASIgLgNIAVgQIATgRIAHACIgIAHIgQAPIgLAHIAGAHIAIAJIAEAFIgIAFIgLgLg");
	this.shape_242.setTransform(62.8,55.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgMATIgMgMIAWgQIATgTIAIABIgJAIIgQAPIgLAJIAHAGIAIAIIAFAEIgJAGIgMgKg");
	this.shape_243.setTransform(68,54.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgMAUIgNgJIAWgSIAVgVIAJAAIgJAJIgSARIgMAJIAIAFIAJAHIAGAEIgFADIgFADIgNgJg");
	this.shape_244.setTransform(73.5,53);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgCAUIgVgUIAUgTIAQgUIAGADIAEACIgHAIIgPAQIgJAKIAJALIAPARIAIAIIgLAEIgPgUg");
	this.shape_245.setTransform(4.9,43.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgDATIgTgUIATgTQAGgIAJgMIALAGIgIAIIgOAPIgIALIAIAKIANASIAGAJIgJADIgOgVg");
	this.shape_246.setTransform(10.9,43.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgEATIgRgWIATgTQAGgGAJgMIAJAHIgHAHIgOAPIgIAJIAHALIALATIAHAJIgKADIgMgVg");
	this.shape_247.setTransform(16.6,44.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgEARIgPgVIARgSQAFgHAJgKIAJAHIgHAGIgOAOIgHAKIAHALIAJASIAGAKIgIADIgLgXg");
	this.shape_248.setTransform(21.8,45.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgFARIgOgWIARgRIAOgRIAIAHIgHAHIgMAOIgHAJIAGAKIAJATIAFAKIgJADIgKgXg");
	this.shape_249.setTransform(26.8,46);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgFARIgNgWIAQgQIANgRIAIAHIgGAHIgNAMIgHAKIAHAKIAIATIAFAJIgJADIgJgWg");
	this.shape_250.setTransform(31.6,47);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgFARIgNgWIARgQIAMgQIAIAHIgGAGIgNAMIgHAKIAHAKIAHASIAGAJIgJADIgJgVg");
	this.shape_251.setTransform(36.1,48.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgFAQIgMgUIAQgQIAMgQIAHAHIgGAGIgMANIgHAIIAHAKIAHARIAFAJIgIADIgJgVg");
	this.shape_252.setTransform(40.6,48.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgFAQIgNgTIARgQIAMgQIAIAFIgHAHIgMANIgHAIIAHAKIAHAQIAFAJIgIADIgJgUg");
	this.shape_253.setTransform(45.1,49.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgFARIgNgTIAQgPIANgRIAIAFIgHAHIgMANIgHAJIAHAJIAHAPIAGAIIgJADIgJgSg");
	this.shape_254.setTransform(49.6,50.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgFARIgNgRIAQgQQAFgHAIgKIAIAEIgGAIIgNANIgHAIIAHAJIAJAOIAFAIIgIADIgLgRg");
	this.shape_255.setTransform(54,50.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgFASIgOgRIARgQIAOgSIAIAEIgHAIIgNAOIgHAIIAHAJIAJANIAGAGIgJAFIgLgQg");
	this.shape_256.setTransform(58.7,50.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgFATIgPgPIASgQIAOgUIAJADIgHAIIgOAQIgHAIIAHAIIAKALIAGAGIgJAFIgMgOg");
	this.shape_257.setTransform(63.6,49.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgFAVIgQgOIASgSIAQgVIAJACIgIAJIgOARIgJAJIAJAHIALAKIAGAFIgJAGIgNgMg");
	this.shape_258.setTransform(68.8,48.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgGAXIgRgMIAUgUIARgXIAKABIgIAKIgQASIgJAKIAJAHIAMAIIAHAEIgKAHIgPgKg");
	this.shape_259.setTransform(74.3,47.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgBAVIgegVIANgUIAMgWIAGAEIAFACIgFAIIgHASIgIAKIAPAMIAVARIALAJIgJAEIgYgVg");
	this.shape_260.setTransform(3.9,35.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgBAUQgKgKgSgLIAOgVIALgUIAEADIAGAEIgFAHIgHARIgHALIANAKIATATIALAKIgJAEIgWgXg");
	this.shape_261.setTransform(10.2,36);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgBATIgZgWIANgUIAJgTIAFADIAFAEIgEAHIgHAPIgHALIAMAMIASATIAJAKIgJAFIgTgZg");
	this.shape_262.setTransform(16,36.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgBASIgXgXIALgSIAKgTIAEAEIAGADIgFAIIgHAOIgGALIALALIAQAUIAJALIgIADIgSgZg");
	this.shape_263.setTransform(21.4,37.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AAAASIgWgYIALgSIAJgSIAJAIIgEAHIgHAOIgGAKIAKAMIAPAUIAIAKIgHAEIgQgZg");
	this.shape_264.setTransform(26.4,38.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgBARIgUgXIALgSQAFgHAEgKIAIAHIgFAHIgFAOIgGAJIAJANIAOAUIAIAKIgIADIgPgZg");
	this.shape_265.setTransform(31.3,39.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgBASIgTgYIALgRIAIgRIAIAHIgEAHIgGANIgGAJIAJAMIANAUIAIAKIgIADQgIgOgGgJg");
	this.shape_266.setTransform(35.9,40.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgBARIgSgXIAKgRIAJgRIAHAHIgEAHIgGAOIgGAJIAJALIANAUIAHAJIgHAEIgOgYg");
	this.shape_267.setTransform(40.4,41.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgBARIgSgWIALgRIAIgRIAIAHIgFAHIgGANIgFAKIAIALIANASIAHAJIgIAEIgNgXg");
	this.shape_268.setTransform(44.9,42.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgBASIgSgUIALgSIAIgSIAJAGIgFAHIgGAPIgGAJIAIAKIANARIAHAKIgHADIgOgVg");
	this.shape_269.setTransform(49.3,43.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgBATIgSgUIAMgSIAIgTIAIAGIgEAIIgHAOIgGAKIAIAKIANAQIAHAIIgHAFIgOgUg");
	this.shape_270.setTransform(53.9,43.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgCAUIgSgTIAMgSQAFgIAEgMIAKAFIgFAIIgIAPIgHAKIAJAKIAOAPIAHAHIgIAFIgPgSg");
	this.shape_271.setTransform(58.6,43.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgCAWIgTgTIANgSQAGgJAFgNIAJAEIgFAJIgJARIgHAJQACADAHAHIAOANIAIAHIgJAGIgPgQg");
	this.shape_272.setTransform(63.5,43.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgDAXIgUgQIAQgUIALgYIALADIgGAKIgLATIgHAKIAJAIIAQAMIAHAGIgJAHIgRgPg");
	this.shape_273.setTransform(68.7,42.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgDAaIgVgOIAQgXIAPgaIAEABIAGAAIgHAMIgLAUIgJALIAKAIIAQAKIAJAFIgKAIIgSgMg");
	this.shape_274.setTransform(74.3,40.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#4C682B","#2B4412"],[0,1],0,-20.1,0,20.2).s().p("Ai2DCQh+gMh+gRQA0gYApgoQAogoAYgyQAXgvgBg3QAAg3geg2QBJAABIAMQBHANBFAQQBHARBHALQBHAMBHgBQBIgDBIgYQATBcgeBOQgeBShFA9Qh+Aeh9AEIhHABQhZAAhZgHg");
	this.shape_275.setTransform(31.7,52.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AjSDkQiHgLiMgWQgfgFAUgJQBHgcAognQAogoANgxQANgwgJg5QgIg5gYg9QgJgOAHgKQAHgKAVgBQBTADBPALQBPAMBNAOQBLANBNAJQBNAJBPgDQBPgDBSgUQASgHAPAEQAPADADANQADBJgFA8QgFA6gYA1QgZA1g5AzQgHAHgRAIQgSAIgTAEQiMAaiGAGQgyACgxAAQhTAAhUgGg");
	this.shape_276.setTransform(30.5,50.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#CCCCCC").s().p("AgSBfQgtgBgmgIQgmgGgYgHIgYgGQBdASBFABQBEABAvgOQAugOAXgYQARgSAEgUQAEgXgEgVQgDgUgFgOIgFgOIAIAQQAHAQAEAYQAFAYgIAYQgIAagcAWQgiAYgsAIQgjAHgiAAIgSgBg");
	this.shape_277.setTransform(-9.1,48.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAqAKIgYgGIgZgEIgQgFIgIADIgFACIgIgDIgIgCIAHgCIAGgEIAhAJIAaAFIAeAGIAEADIgMgCg");
	this.shape_278.setTransform(-13,60.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AApAIIgYgFIgZgDIgQgDIgFACIgGABIgIgBIgIgCIAGgCIAHgEIAfAHIAZAEIAfAFIADADIgLgCg");
	this.shape_279.setTransform(-7,62.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AAnAGIgXgEIgXgCIgQgCIgGACIgEABIgIgBIgIgBIAGgCIAFgEIAfAGIAZACIAdAEIADADIgLgCg");
	this.shape_280.setTransform(-1.2,64.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AAlAFIgWgDIgXgCIgPgBIgEABIgFABIgHgBIgHAAQAEgBAFgEIAeAFIAXABIAcADIADACIgKgBg");
	this.shape_281.setTransform(4.6,65.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAjAEIgWgDIgVgBIgPAAIgDAAIgDACIgIgBIgHgBIAIgDIAmADIAnACIAEACIgKAAg");
	this.shape_282.setTransform(10.2,67.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AAaACIgbgCIgVAAIgDABIgCABIgHgBIgHgBIAGgCIAlACIAkABIAEACIgQgBg");
	this.shape_283.setTransform(15.6,68.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgfABIgHgBIADgBIAjABIAjAAIAEABIgPAAIgagBIgTAAIgCABIgBABIgHgBg");
	this.shape_284.setTransform(20.9,68.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgcAAIgHAAIACAAIAYAAIgMAAIgBABIgGgBgAAWAAIgWAAIAgAAIAEAAIgOAAg");
	this.shape_285.setTransform(26.1,69.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgZABIgGAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAeAAIgSAAIABACIgGgBgAAUAAIAJgBIAEABIgMAAIgBAAg");
	this.shape_286.setTransform(31.1,69.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgFAAIALAAIgJAAIgCAAg");
	this.shape_287.setTransform(40.5,69.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AABAAIAHAAIgFAAIgLABIAJgBg");
	this.shape_288.setTransform(44.1,69);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AAAAAIAFAAIgFAAIgDAAIADAAg");
	this.shape_289.setTransform(48.5,68.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgoAGIgIgCQAEgDACgBIAFgHIAeAFIAYACIAcACIAEADIgKgBIgXgCIgYgCIgPgCIgFAFIgEAEIgIgBg");
	this.shape_290.setTransform(-3.9,60.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgnAGIgIgCIAHgEIAEgGIAeADIAWACIAdABIADACIgKgBIgXgBIgVgBIgQgBIgFAEIgEAFIgIgBg");
	this.shape_291.setTransform(1.9,62.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgmAFIgHgBIAFgEQADgCADgEIAmADIAnABIADACIgJAAIgWgBIgVgBIgPAAIgFAEIgEAFIgIgCg");
	this.shape_292.setTransform(7.4,64.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgkAGIgHgBIAFgFIAFgFIAlABIAkAAIAEADIgQAAIgcAAIgUgBIgFAEIgDAEIgIAAg");
	this.shape_293.setTransform(12.7,65.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgiAGIgGgBIAEgFIAEgEIAjAAIAjgBIADACIgOABIgbABIgTAAIgEADIgEAEIgHAAg");
	this.shape_294.setTransform(17.8,66.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgfAHIgHgBIAEgEIADgEIAhgBIAhgDIADACIgNACIgZABIgTABIgDADIgCAEIgHAAg");
	this.shape_295.setTransform(22.8,67.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgcAHIgHAAIAFgHIAggDIAegDIAEACIgNABIgYADIgRAAIgDADIgBAEIgGAAg");
	this.shape_296.setTransform(27.5,68.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AggAHIADgHIAdgCIAdgEIAEABIgMACIgWADIgQAAIgCAEIgBADIgGAAIgGAAg");
	this.shape_297.setTransform(32.1,68.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgcAAIAcgBQALgCAPgEIAEACIgMACIgTADIgQABIgBADIAAADIgGAAIgFAAIABgHg");
	this.shape_298.setTransform(36.6,68.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgaACIAagDIAYgGIAEABIgLADIgTADIgOACIAAACIABADIgFAAIgGABQgBgCABgEg");
	this.shape_299.setTransform(40.8,68.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgZADQAPgCAKgBIAXgHIADAAIgKADIgRAEIgOADIABACIABACIgFAAIgFABIgCgFg");
	this.shape_300.setTransform(44.8,68.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgYAFIAYgFIAVgIIAEAAIgKAEIgQAEIgNADIACADIABABIgKACIgDgEg");
	this.shape_301.setTransform(48.7,67.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgXAHIAXgHIATgJIAFAAIgJAEIgQAFIgNAFIACABIADABIgJADIgFgDg");
	this.shape_302.setTransform(52.6,66.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgVAIIAVgIIAUgKIACAAIgIAEIgPAGIgLAFIACABIABACIgIADIgEgDg");
	this.shape_303.setTransform(56.2,65.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgVAKIAVgKIATgLIADAAIgJAFIgOAGIgMAHIACABIABABIgIAEIgDgDg");
	this.shape_304.setTransform(59.8,64.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgiALIgHgBIADgKIABgJIAlAAIAlgCIAFAFIgQAAIgbABIgVABIgCAIIgDAIIgHgBg");
	this.shape_305.setTransform(4.3,59.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AghAMIgHgBIAEgJIACgJIAjgBIAjgEIAFAFIgPABIgaABIgVABIgDAJIgBAIIgIgBg");
	this.shape_306.setTransform(9.8,61.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AggANIgGAAIADgKIADgJIAigCIAhgEIAEAEIgNABIgaADIgTACIgEAIIgCAIIgHgBg");
	this.shape_307.setTransform(15,62.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgeAOIgGgBIADgJIADgJQAUgBAMgCIAggFIADAEIgMACIgZAEIgSACIgDAHIgCAIIgHAAg");
	this.shape_308.setTransform(19.9,63.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgcAOIgGAAIADgIIADgJIAegEIAegGIADAEIgMACIgXAEIgRADIgCAHIgDAHIgGAAg");
	this.shape_309.setTransform(24.6,64.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgaAOIgGAAIADgIIACgHIAcgGIAcgGIAEAEIgMABIgVAGIgQACIgCAHIgCAHIgGAAg");
	this.shape_310.setTransform(29.1,65.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgcAGIADgHIAagFIAagHIADACQgBABgKADIgUAFIgPACIgBAHIgBAGIgFAAIgGABIABgIg");
	this.shape_311.setTransform(33.4,66.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgZAHIAAgHIAZgFQALgDANgFIAEACIgLADIgSAGIgOACIAAAHIgBAGIgFAAIgGABIACgHg");
	this.shape_312.setTransform(37.4,66.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgYAIIAAgHIAYgGIAVgIIAEACIgJAEIgRAGIgOACIABAGIAAAGIgKABIAAgGg");
	this.shape_313.setTransform(41.4,66.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgWAJIgBgHIAXgFIAUgKIAEACIgJADIgQAHIgMADIABAGIAAAEIgJACIgBgFg");
	this.shape_314.setTransform(45.1,66.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgUAJIgCgFIAWgHIATgKIADABIgIAEIgPAIIgMADIACAFIABAEIgJACIgBgFg");
	this.shape_315.setTransform(48.8,66.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgVAFIAVgHIASgLIADAAIgIAFIgOAIIgLADIACAFIACADIgIADQgDgDgCgGg");
	this.shape_316.setTransform(52.4,65.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgUAHIAUgIIARgMIAEAAIgHAFIgOAIIgLAFIACADIADADIgJADIgFgHg");
	this.shape_317.setTransform(55.9,64.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgUAJIAUgKIARgNIAEAAIgIAFIgNAJIgLAGIACADIAEACIgJAEIgGgGg");
	this.shape_318.setTransform(59.4,63.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgUALIAUgLIARgPIAEAAIgIAGIgNAJIgLAHIACADIADACIgIAEIgGgFg");
	this.shape_319.setTransform(63,61.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgVAVIgHAAQAAgIgCgGIgEgNIAhgGIAdgIIAHAFIgNADIgYAFIgRAEIABAHIADALIABAGIgHAAg");
	this.shape_320.setTransform(10.4,56.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgWAWIgGAAIgBgOIgDgNIAggHIAbgJIAGAGIgMADIgXAGIgRAEIACAGIABAMIAAAGIgGAAg");
	this.shape_321.setTransform(15.9,58.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgWAWIgGAAIAAgNIgCgOIAegHIAagJIAFAFIgMAEIgUAGIgQAFIAAAGIABALIAAAGIgGAAg");
	this.shape_322.setTransform(21,59.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgaAJIgCgNIAcgIIAYgKIAFAGIgLADIgTAIIgPAEIAAAGIABALIAAAGIgGAAIgGAAIABgNg");
	this.shape_323.setTransform(25.7,60.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgZAJIgBgMQAQgEAKgEIAXgKIAEAEIgKAFIgSAHIgOAEIAAAGIAAALIAAAGIgFAAIgFABIAAgOg");
	this.shape_324.setTransform(30,61.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgXAKIgBgMIAYgJIAVgKIAEAEIgKAEIgQAIIgNAFIABAFIAAALIAAAFIgFABIgFAAIAAgMg");
	this.shape_325.setTransform(34.1,62.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgVALIgBgLIAWgKIATgLIAEAEIgJAEIgPAJIgMAEIAAAGIABAKIAAAFIgJABIAAgLg");
	this.shape_326.setTransform(37.8,62.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgTALIgCgLIAVgJIASgLIADAEIgIAEIgNAIIgMAEIACALIABAJIgJABIgBgKg");
	this.shape_327.setTransform(41.5,63.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgRALIgCgLQAMgDAHgGQAHgEAJgHIAEADIgIAFIgMAJIgKAEIACAKIABAIIgIACIgCgKg");
	this.shape_328.setTransform(44.9,63.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgQAMIgCgKIASgKIAPgLIAEACIgHAFIgMAJIgKAFIADAJIACAGIgHAEIgEgJg");
	this.shape_329.setTransform(48.3,63.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgOANIgDgJIARgKIAOgNIAEACIgGAFIgMAKIgJAFIADAIIADAGIgIADIgDgHg");
	this.shape_330.setTransform(51.6,62.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgNAOIgEgIIARgLIAOgNIAEABIgHAGIgLAKIgIAFIADAHIAEAGIgHACIgFgFg");
	this.shape_331.setTransform(54.9,62.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgMAPIgFgHIARgMQAFgGAJgIIAEABIgGAFIgMAMIgIAGIAEAFIAEAFIgHADIgFgEg");
	this.shape_332.setTransform(58.3,61.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgMAQIgGgGIARgNIAPgQIAFABIgHAGIgMAMIgJAHIAFAFIAEAEIgHAEIgFgEg");
	this.shape_333.setTransform(61.8,59.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgNARIgFgFIARgOIAQgSIAEAAIgGAHIgNANIgKAIIAFAEIAEADIgHAGIgFgEg");
	this.shape_334.setTransform(65.5,58.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgPANIgNgSIAbgMIAWgOIAIAHIgKAFIgTALIgNAGIAGAJIAHAPIACAIIgEAAIgFABIgIgSg");
	this.shape_335.setTransform(13.8,51.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgQANIgKgSIAZgMIAUgOIAHAGIgJAGIgRALIgMAHIAEAIIAHAQIABAIIgEABIgGAAIgGgTg");
	this.shape_336.setTransform(19.3,53.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgQANIgHgRIAXgNIASgOIAGAGIgJAGIgPAKIgLAHIADAJIAGAQIACAIIgKABIgGgTg");
	this.shape_337.setTransform(24.4,54.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgOAOIgHgSIAVgNIAQgOIAGAGIgHAGIgPALIgKAHIADAIIAEAQIADAHIgKACIgEgSg");
	this.shape_338.setTransform(29,55.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgNANIgGgRIATgMIAOgPIAGAHIgHAFIgNALIgJAHIADAJIADAOIADAHIgJACIgEgSg");
	this.shape_339.setTransform(33.1,56.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgMAOIgGgQQAMgHAGgGIANgPIAGAGIgHAGIgMAKIgIAIIADAIIADAOIACAHIgIACIgEgRg");
	this.shape_340.setTransform(36.9,57.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgKAOIgGgQIAQgMQAFgGAHgJIAFAGIgGAFIgLALIgHAHIADAHIAEAOIAAAHIgHACIgDgQg");
	this.shape_341.setTransform(40.3,58);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgJAOIgGgOIAPgNIAKgPIAGAFIgGAFIgKALIgHAHIADAIIAEAMIAAAGIgFADIgEgPg");
	this.shape_342.setTransform(43.7,58.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgIAPIgGgPIAOgMIAJgPIAGAEIgGAHIgJAKIgGAGIAEAJIACALIACAGIgEACIgGgNg");
	this.shape_343.setTransform(46.8,58.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgGAPIgHgOIANgMIAJgPIAFAEIgFAGIgJALIgFAGIADAIIADAKIADAFQgDACgCABIgFgMg");
	this.shape_344.setTransform(49.9,58.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgFAQIgIgNIANgNIAJgPIAFADIgFAGIgJAMIgFAGIAEAHIAEAJIADAFIgGAEIgFgLg");
	this.shape_345.setTransform(52.9,58.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgFARIgIgMIAMgNIAJgRIAGACIgFAHIgJANIgFAHIAFAJIAGAJIgGAEIgFgJg");
	this.shape_346.setTransform(56.1,58);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgGARIgIgKIANgOIAKgSIAGACIgGAHIgJAOIgGAHIAGAJIAHAHIgHAEIgGgIg");
	this.shape_347.setTransform(59.5,57);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgGASIgJgIIAOgQIALgSIAGABIgGAHIgKAPIgGAIIAGAHIAHAGIgHAFIgGgHg");
	this.shape_348.setTransform(63,55.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgHATIgKgHIAPgQIANgVIAHAAIgHAJIgLAQIgHAIQABADAGAEIAHAEIgHAHIgHgHg");
	this.shape_349.setTransform(66.9,53.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgBASQgIgKgOgMIATgSIANgUIAGAFIAFADIgHAIIgNAPIgHAKIAIALIAQATIAHAKIgFACIgGACQgIgOgGgLg");
	this.shape_350.setTransform(14.3,45);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgBATIgTgYQALgKAGgIQAFgHAHgMIAJAIIgFAIIgNAOIgGAKIAIAMIAMAUIAHAKIgKADIgMgYg");
	this.shape_351.setTransform(20,46.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgBATIgQgXQAJgKAGgIIAKgTIAJAIIgGAIIgKANIgGAKIAGANIAMATIAFAKIgIACIgLgXg");
	this.shape_352.setTransform(25.1,47.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgBASIgOgWQAIgKAFgIQADgIAFgLIAIAIIgEAIIgKANIgEALIAFALIAKATIAFAKIgIADIgJgYg");
	this.shape_353.setTransform(29.7,48.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgBASIgMgWQAHgKAEgIIAHgSIAHAIIgFAHIgHAOQgCAIgCACIAFALIAJATIAEAJIgHADIgIgXg");
	this.shape_354.setTransform(33.7,49.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AAAASIgNgWQAHgJAEgIIAEgSIAHAHIgDAHIgGAOIgEAKIAEAKIAJASIAFAJIgHAEIgHgWg");
	this.shape_355.setTransform(37.4,50.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AAAASIgMgVQAGgJADgIIAEgSIAHAHIgEAHIgEAPIgEAJIAFAKIAIARIAEAJIgGACIgHgUg");
	this.shape_356.setTransform(40.8,51.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AAAASIgMgUQAGgJADgHIADgSIAGAGIgDAGIgDAPIgEAJIAEAJIAIARIAFAIIgGADIgHgTg");
	this.shape_357.setTransform(43.9,52.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AAAASIgMgSIAIgRIAEgSIAFAFIgDAHIgDAPIgDAIIAEAKIAIAPIAFAIIgFADIgIgSg");
	this.shape_358.setTransform(47,52.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AAAATIgMgTQAEgIACgIQADgHADgLIADAFIgCAHIgCAOIgEAJIAFAJIAIAOIAFAHIgFAEIgIgQg");
	this.shape_359.setTransform(50,53.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgBATIgLgRQAEgIACgIIAFgSIAFAEIgCAHIgEAPIgDAIIAFAJIAIAMIAGAHIgGAEIgJgPg");
	this.shape_360.setTransform(53,52.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AAAAUIgNgQQAFgIACgJIAGgTIAFAEIgDAIIgDAPIgEAIIAFAIIAJALIAFAGIgFAFIgJgNg");
	this.shape_361.setTransform(56.1,52.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AAAAUIgOgNIAJgRIAFgVIAHADIgDAIIgFAQIgEAIIAFAHIAKAKIAFAGIgGAFIgJgMg");
	this.shape_362.setTransform(59.4,51.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AAAAVIgPgMIAKgSIAIgWIAHACIgEAJIgGARIgGAKIAGAFIAKAJIAGAEIgHAHIgJgLg");
	this.shape_363.setTransform(63,50.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgCAXIgOgLIAMgTIALgXIAIABIgFAKIgKASIgGAJIAGAGIALAHIAGAEIgHAGIgMgIg");
	this.shape_364.setTransform(67,48.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#4C682B","#2B4412"],[0,1],0,-14.3,0,14.3).s().p("AAxCPQh6gBh5gcQh6gchvgwQAnALAyACQAyADAygJQAwgIAngWQAmgUAQgnQAQgngQg7QBEANA/AUQBBATBAAPQA/AOBCgCQBBgCBEgdQAIAqgKAiQgJAggTAYQgTAZgWARQgWAQgSAJQgRAJgFABQhuAchyAAIgTAAg");
	this.shape_365.setTransform(24.9,55.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AAlCsQiFgIiDgjQiDgiiAg1QgjgSAgAKQAdAGArAGQAsAGAwABQAxABArgIQAsgJAdgVQAdgTAGgnQAFgngcg8QgFgPAJgKQAIgIATACQBSAUBFAUQBGAUBEAOQBCANBHgBQBGgBBUgYQAPgGAMACQAMADACALQAGA6gSAtQgTAwgmAjQgmAkg0AUIgQAHIgTAFQhsAVhqAAQgeAAgdgCg");
	this.shape_366.setTransform(22.2,52.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#4C682B","#2B4412"],[0,1],0,-5.1,0,5.3).s().p("AgUAZQgwgSgegUIAPgGQATgKAOgKQANgMAMAAQAMAAANAWQAOAZAXASQAWATAbANIAMAGQhIgIgugTg");
	this.shape_367.setTransform(0.4,63.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AAcBTQhggFg8gYQg8gXgfgbQgfgagKgVQgLgUABgCQAQAUAWACQAWACAXgKQARgKAOgLQAOgLALAAQANgBAOAXQAPAZAWATQAXARAaAOQAyAZA6AMQA6AMA6ADQAgACAhgCQhxAShVAAIgtgBg");
	this.shape_368.setTransform(11.4,60.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#F5F4F4").s().p("AgXCpQgqAAgqgFQgogFgmgNQgQgGgQgJQgQgJgQgGIgNgGQgNgHgUgRQgVgRgYgfQgLgVgKgZQgLgbgHggQgHghABgoIADgHQADgIAGgGQAGgGAKABQAlAHAiAKIBHAUQAkAJAlAFQA3AGAxgCQAugBAzgGQBBgHAugLQAugMAZgJIAdgLQAEgBgBAKIgEAfQgDAUgBAZQAAAqAKAfQAKAeANAUQANATAIAIQAIAKASAOQARAPAVAGQABAAABABQAAAAAAABQABAAAAAAQAAABAAABQgCADgEADIgfAFIhFALIhUAMIhQAKIg3AHQghACggAAIgTAAg");
	this.shape_369.setTransform(21.4,47.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#CCCCCC").s().p("AhWDoQgogDgpgIQgjgHgjgNQgPgHgOgKQgPgKgPgGQgBABgSgJQgSgKgZgWQgagXgYgnQgYgngMg7QgOg8AIhWIAEgIQAEgIAHgHQAIgHAMACIAvARQApAOBDAPQBEAOBYAEQBYAEBlgRQBogRBvgzIAJgGQAIgFAIACQAJABAAATIgKARQgKAQgKAdQgLAcgEAkQgFAjAKAnQAJAeAQAdQARAdAYAXQAXAUAcAMIAVAGQANADAGAEQAGAEgLAJQgHAEgMADIgWAEQg4APg5AMQhJAQhLAKQhLALhJACIgXAAQgdAAgegCg");
	this.shape_370.setTransform(23.7,45.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#F5F4F4").s().p("AFPEgIhwAAIiRAAIibAAIiSAAIhvAAIg2AAIAAgqIAAhTIAAhqIAAhxIAAhqIAAhTIAAgqIA2AAIBvAAICSAAICbAAICRAAIBwAAIA2AAIAAAqIAABTIAABqIAABxIAABqIAABSIAAArIg2AAg");
	this.shape_371.setTransform(34.9,45);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#CCCCCC").s().p("AmbFcQgPAAgLgKQgLgLAAgQIAAptQAAgQALgKQALgLAPAAIM3AAQAPAAALALQALAKAAAQIAAJtQAAAQgLALQgLAKgPAAg");
	this.shape_372.setTransform(34.9,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},2).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},2).to({state:[{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_372},{t:this.shape_371}]},2).to({state:[{t:this.shape_372},{t:this.shape_371}]},2).to({state:[{t:this.shape_372},{t:this.shape_371}]},7).to({state:[{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367}]},2).to({state:[{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277}]},2).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,10.1,90.1,70);


(lib._whooshmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("whooshmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._swishmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("swishmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("", "14px 'ArialMT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 40;
	this.text.setTransform(23,12.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(37));

	// Layer 1
	this.instance = new lib.timerbg();
	this.instance.setTransform(24.3,23.9,1,1,0,0,0,24.3,23.9);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.352},19).to({alpha:0.102},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,49.5,48.9);


(lib.playGame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.dice();
	this.instance.setTransform(-34,12);

	this.text = new cjs.Text("Play the game", "bold 24px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 173;
	this.text.setTransform(86.5,0);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("At0C9IAAl5IbpAAIAAF5g");
	this.shape.setTransform(88.5,18);

	this.addChild(this.shape,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.1,-9.6,243.1,87.6);


(lib.lzMenuBar = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("LingaZone.com", "bold 14px 'Arial Black'", "#F7FFEC");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 164;
	this.text.setTransform(-2,-12.3);

	this.text_1 = new cjs.Text("Help", "bold 14px 'Arial Black'", "#F7FFEC");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 96;
	this.text_1.setTransform(268,-12.3);

	this.text_2 = new cjs.Text("Full Screen", "bold 14px 'Arial Black'", "#F7FFEC");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 96;
	this.text_2.setTransform(-272,-12.3);

	this.instance = new lib.btnHelp();
	this.instance.setTransform(270,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.btnFS();
	this.instance_1.setTransform(-270,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.bgbar("synched",0);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-321,-21,642,42);


(lib.cardtable = function() {
	this.initialize();

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape.setTransform(569.7,237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape_1.setTransform(569.7,246.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape_2.setTransform(569.7,256.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape_3.setTransform(569.7,266.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape_4.setTransform(569.7,276.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape_5.setTransform(569.7,286.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape_6.setTransform(569.7,296.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape_7.setTransform(569.7,306.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B03E3E").ss(1,1,1).p("AhnAVIDPgp");
	this.shape_8.setTransform(569.7,316.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B03E3E").ss(1,1,1).p("AAAPAIAA9/");
	this.shape_9.setTransform(567.7,68.1);

	this.text = new cjs.Text("CORRECT", "12px 'Arial'", "#B03E3E");
	this.text.lineHeight = 14;
	this.text.setTransform(559.5,231.5,0.992,0.989,-90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B03E3E").ss(1,1,1).p("AD8AAQgCBqhIBGQhHBIhrACQhqgChHhIQhIhGgChqQAChpBIhGQBHhIBqgCQBrACBHBIQBIBGACBpg");
	this.shape_10.setTransform(315,366.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E2322").s().p("AixCxQhIhHgChqQAChpBIhGQBHhIBqgCQBrACBHBIQBIBGACBpQgCBqhIBHQhHBGhrADQhqgDhHhGg");
	this.shape_11.setTransform(315,366.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B03E3E").ss(1,1,1).p("Eg2sgFUQACAGDzBxQDzBxHFCRQHFCUJ5BtQJ3BtMNAAQMLgBODi3QOCi4Pam1");
	this.shape_12.setTransform(322.4,330.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B03E3E").ss(1,1,1).p("Eg2sgFUQACAGDzBxQDzBxHFCRQHFCUJ5BtQJ3BtMNAAQMLgBODi3QOCi4Pam1");
	this.shape_13.setTransform(322.4,350.2);

	this.instance = new lib.Symbol19("synched",0);
	this.instance.setTransform(364.9,386.5,0.989,0.992);
	this.instance.alpha = 0.121;

	this.instance_1 = new lib.Symbol18("synched",0);
	this.instance_1.setTransform(-1.3,380.6,0.989,0.992);
	this.instance_1.alpha = 0.121;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#B24040","#6B0C0C"],[0,1],-23.8,-86,0,-23.8,-86,448.4).s().p("A8NeDQsxiiqzknMAAAg3gMBnjAAAMAAAA2QQrMFMtfC3QtfC4u/ACQuGgDswihg");
	this.shape_14.setTransform(319.6,202.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B17C46").s().p("A8IekQsyieq3kiMAAAg4oMBnjAAAMAAAA3iQrOFCtdCxQtcCxu7ADQuGgDsyieg");
	this.shape_15.setTransform(319.6,205.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("A8JfAQswicq4kfMAAAg5hMBnjAAAMAAAA4VQrSFCteCwQtfCwu6ADQuCgDswibg");
	this.shape_16.setTransform(319.6,208);

	this.instance_2 = new lib.Symbol17("synched",0);
	this.instance_2.setTransform(-11.8,-6.2,0.989,0.992);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Symbol16("synched",0);
	this.instance_3.setTransform(-11.8,381.3,0.989,0.992);
	this.instance_3.alpha = 0.391;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#895A2F","#51300F"],[0,1],-167,134.9,0,-167,134.9,106.6).s().p("EgbyAiEQs2iLrJkAMAAAhAIMBnjAAAMAAAA/cQrbEVtVCWQtVCWumACQuDgCs2iKg");
	this.shape_17.setTransform(319.6,225.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#757676").s().p("Egy9AjtMAAAhHZMBl6AAAMAAABHZg");
	this.shape_18.setTransform(315.8,225.5);

	this.addChild(this.shape_18,this.shape_17,this.instance_3,this.instance_2,this.shape_16,this.shape_15,this.shape_14,this.instance_1,this.instance,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.text,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.7,-29,702.4,486.9);


// stage content:
(lib.pokerPairsCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:8,win:14});

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
			var loader:LoadGame = new LoadGame(this, "../games/pokerPairs.xml", "TranslationGame");
		}*/
	}
	this.frame_2 = function() {
		/* stop();
		
		dispatchEvent ({type:"ready", bubbles:true});
		
		playBtn.onRelease = function () {
			gotoAndStop("game");
		}*/
		this.stop();
	}
	this.frame_8 = function() {
		/* stop();
		
		var gameid:Number;
		if (game != undefined) delete (game);
		var game:RunGame = new RunGame(this);
		
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
		
		this.stop();
	}
	this.frame_33 = function() {
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(6).call(this.frame_8).wait(25).call(this.frame_33).wait(1));

	// LzHud
	this.instance = new lib.lzMenuBar();
	this.instance.setTransform(320,460);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(32));

	// Text
	this.text = new cjs.Text("Find all of the cards that match to win the game", "16px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 227;
	this.text.setTransform(140.5,15);

	this.instance_1 = new lib.congrats();
	this.instance_1.setTransform(252.5,172,1,1,0,0,0,154.5,36);
	this.instance_1.alpha = 0.109;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},2).to({state:[]},6).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(1)).wait(1));

	// Buttons
	this.playBtn = new lib.playGame();
	this.playBtn.setTransform(522.5,51.6,1,1,0,0,0,117.5,24);
	new cjs.ButtonHelper(this.playBtn, 0, 1, 1);

	this.help_plz_btn = new lib.help_plz_btn();
	this.help_plz_btn.setTransform(7.5,7.5,1,1,0,0,0,7.5,7.5);

	this.instance_2 = new lib.playAgain();
	this.instance_2.setTransform(386,-20,1,1,0,0,0,42,11);
	this.instance_2.alpha = 0.289;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playBtn}]},2).to({state:[{t:this.help_plz_btn}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},9).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:299,alpha:1},9,cjs.Ease.get(1)).wait(11));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8EB4B").s().p("Ah8g4IDah0IAfDwIjaBog");
	this.shape.setTransform(48.4,274.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0C147").s().p("AjEAnICDhNIEGgJIitBfg");
	this.shape_1.setTransform(286.4,426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0C147").s().p("AhIgeIDvgKIiEBPIjJACg");
	this.shape_2.setTransform(274.5,417.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0C147").s().p("Ag3gmIDgALIh0A2IjdAMg");
	this.shape_3.setTransform(321.8,416.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D0C147").s().p("AirAnIBshNIDrARIiLA8g");
	this.shape_4.setTransform(311.2,408.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0C147").s().p("AiuAkIBehIID/AHIibBBg");
	this.shape_5.setTransform(335.7,423.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0C147").s().p("Ag/gaIDwgLIhUBIIkNACg");
	this.shape_6.setTransform(378.5,416.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D0C147").s().p("AhIgeIDvgLIhUBIIj5AKg");
	this.shape_7.setTransform(362.7,409.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D0C147").s().p("AhIgeIDvgKIhUBHIj5AKg");
	this.shape_8.setTransform(346.5,403.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_9.setTransform(205.2,381.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_10.setTransform(166,351.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_11.setTransform(158.1,431.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_12.setTransform(75.7,438.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_13.setTransform(33.8,404.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_14.setTransform(76.3,362.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_15.setTransform(116.7,398.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_16.setTransform(158.1,393.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_17.setTransform(117.7,435.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_18.setTransform(71.5,402.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_19.setTransform(119.8,358.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E8EB4B").s().p("AhchaID7hIIhCD9Ij7BIg");
	this.shape_20.setTransform(123.5,318.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AFAF43").s().p("AwwiJIAagcQAiAOAiAHQAkALAlANIBHAXQAiALAfAFQDqAoDvATQDvATDqgNQDtgMDig2QDhg3DQhpInQHgI6RAFg");
	this.shape_21.setTransform(105.5,432.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#B7AD4E","#B8CD4D","#F6F74B"],[0,0.663,1],0,139.7,0,-71).s().p("AzhITIVW2kIRsPNIsxNRI6RAFg");
	this.shape_22.setTransform(123.2,365.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A39741").s().p("A0QOvIAAnIIVW2kITLQqIsyNSg");
	this.shape_23.setTransform(127.9,360.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DCD9CE").s().p("A2pGSIAAmuQDJAeDVARQDVAQDfABQExAAEgggQEcgdEGg7QEFg6DlhTQDmhTC+hoQgQAyg2A2IrELRg");
	this.shape_24.setTransform(143.1,416.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("A2vRMIABu0IQ9x5QAAgCASgQQARgRAhgWQAhgWAugSQAvgRA6gDQA5gCBCAWQBDAXBLA6IR8P8IAVAMQAUANAcAYQAcAYAYAhQAZAiAKAqQAJAqgQAxQgRAxg2A3IrDLTg");
	this.shape_25.setTransform(143.7,346.6);

	this.instance_3 = new lib.pileofcards("synched",0);
	this.instance_3.setTransform(253.3,265,1.045,1.045,15.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E8EB4B").s().p("Ah8g4IDahzIAfDvIjaBog");
	this.shape_26.setTransform(3.3,354.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AFA348").s().p("Aq1BqIAMgXQAZADAYgBIBNADQAmACAhgDQChgRCgggQCggfCXgyQCZg0CKhNQCKhMB1hsIjYGQIxNE5g");
	this.shape_27.setTransform(43.6,347.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E8EB4B").s().p("Ah8g4IDah0IAfDvIjaBqg");
	this.shape_28.setTransform(25.3,314.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AFAF43").s().p("AsHFLIDgmoQALgFAagDQAbgBAtgJQAtgHBEgVQBEgVBegsQBfgrB6hKQB8hJCehxQBGgeBBgsIE1CRIl8LBIxNE4g");
	this.shape_29.setTransform(51.8,325.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#B7AD4E","#B8CD4D","#F6F74B"],[0,0.663,1],-7.5,42,17.6,-68).s().p("AsHHaIJ3yuIOYGvIl8LBIxNE5g");
	this.shape_30.setTransform(51.8,310.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A39741").s().p("AsuHCIJ3yuIPmHcIl8LBIyNE8g");
	this.shape_31.setTransform(54.1,307);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F0EB").s().p("AuSD6QCKgPCOgdQCPgbCRgpQEMhMDphmQDqhpDAh9QDBh9CNiKQgCAjgZAuIlKJaI1xGAg");
	this.shape_32.setTransform(64.9,329.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AvCDnIH0u3IAJgOQAIgPASgUQARgVAbgUQAcgUAlgMQAmgMAwACQAwACA8AZIOrHLIAQAEQAPAEAXALQAXAKAWASQAWASAOAZQAOAagCAjQgBAkgZAuIlMJaI1wGAg");
	this.shape_33.setTransform(60.1,298);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E6E379").s().p("A0QOvIAAnIIVW2kITLQqIsyNSg");
	this.shape_34.setTransform(127.9,360.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AB9D3C").s().p("AgWi0IBTgPQAeA6AyArQAzArA/AaQA/AZBHAHQBNAJBNAIIw9Crg");
	this.shape_35.setTransform(245.3,431.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B7AD4E").s().p("AqiheIR1i7ILXC8MglTAF3g");
	this.shape_36.setTransform(310.5,423.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A39741").s().p("ArHhoIR/jDIMxDSMgnRAGFg");
	this.shape_37.setTransform(316,422.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("A2ZHSQgugCgbgIQgcgIgNgGIgMgIIq5kvQgNgPAFgNQAGgMAQgKQARgJASgGIAhgKIAPgDMAwqgHzQBSgSA4gBQA4gBAdAGQAdAFAAABIAyALICDAaIC3AmIDOArIDGApICkAiIA8AMIAaAGQAMAEAMAGQAIAFAEAGQAFAGAAAKQAAASgNAOQgOAPgTAJQgUAIgTAGQgUAGgWADMg2GAJJQg2AIgoAAIgQAAg");
	this.shape_38.setTransform(247.6,432.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E5E4E4").s().p("A2aHCQgtgCgbgIQgcgHgMgHIgMgHIq6kkQgRgSgCgPQgCgQAFgMQAFgLAGgGIAHgHMAyIgHQQA8gVAugEQAvgEAgAEQAhAEARAHIARAHIQiC2QAQAYgEATQgDAUgRAPQgSAPgVALQgWALgSAHQgiALgkAFIg5AJIhRANIhqASIh9AUIiQAXIifAZIisAaIi3AeIjAAeIjFAgIjJAhIjKAgIjIAhIjCAfIi/AfIi1AdIiqAcIidAZIiNAWIh6AUIhlARQgnAFgmAHIg0AIIgYAEIgBAAQg4AIgpAAIgOAAg");
	this.shape_39.setTransform(247.5,434.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#7F1818").ss(0.7,1,1).p("AGooJQgOgngagdQgZgdgogKQgngLg5ARIqhEnIBTPBIE0h6IH8sYQAAAAABgXQABgXAAgkQgBgkgGgqQgGgqgOgng");
	this.shape_40.setTransform(119,270.4);

	this.instance_4 = new lib.pileofcards("synched",0);
	this.instance_4.setTransform(383.4,290.8,1.047,1.047,-30.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6D0D0D").s().p("AFKlEIQZD8QAaAMADAMQACANgJAMQgKALgLAHIgMAFMgiNAE6IpLALg");
	this.shape_41.setTransform(354.9,426.4);

	this.instance_5 = new lib.pileofcards("synched",0);
	this.instance_5.setTransform(386.6,303.6,1.047,1.047,-30.1);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-186,-156,277,246);

	this.instance_6 = new lib.pileofcards("synched",0);
	this.instance_6.setTransform(254.9,271.5,1.045,1.045,15.8);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-186,-156,277,246);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#B24040","#6B0C0C"],[0,1],-332.4,0,337.2,0).s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
	this.shape_42.setTransform(320,240);

	this.instance_7 = new lib.cardtable();
	this.instance_7.setTransform(331.1,221,1,1,0,0,0,329.1,219.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42},{t:this.instance_6},{t:this.instance_5},{t:this.shape_41},{t:this.instance_4},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_3},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_7}]},6).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;