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



(lib.wood_box = function() {
	this.initialize();

	// Graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIANgDQALgEAFAE");
	this.shape.setTransform(-125.4,-45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgNAKIAIgKQAIgLALAD");
	this.shape_1.setTransform(-125.2,-46.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAIIAKgJQAJgKAKAG");
	this.shape_2.setTransform(-125.3,-50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgHAIAF");
	this.shape_3.setTransform(-125.3,-53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIANgDQAMgEAEAE");
	this.shape_4.setTransform(-125.5,-56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAKgGQAKgGAJAG");
	this.shape_5.setTransform(-125.5,-58.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgQAHIAIgIQAKgIAPAF");
	this.shape_6.setTransform(-125.3,-61);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAHIALgHQAMgIAIAD");
	this.shape_7.setTransform(-125.3,-63.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgGAIAC");
	this.shape_8.setTransform(-125.3,-66.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHAKAD");
	this.shape_9.setTransform(-125.3,-68.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHALAC");
	this.shape_10.setTransform(-125.4,-70.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAJgFQAKgGALAC");
	this.shape_11.setTransform(-125.3,-73.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AAPCYQAAANgPAAQgOAAAAgNIAAkvQAAgNAOAAQAPAAAAANg");
	this.shape_12.setTransform(-125.3,-59);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C650E").s().p("AgOCYIAAkvQAAgNAOAAQAPAAAAANIAAEvQAAANgPAAQgOAAAAgNg");
	this.shape_13.setTransform(-125.3,-59);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIAMgDQAMgEAFAE");
	this.shape_14.setTransform(116.7,-45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgNAKIAIgKQAIgLALAD");
	this.shape_15.setTransform(116.8,-46.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAIIAKgJQAJgKAKAG");
	this.shape_16.setTransform(116.8,-50.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgHAIAF");
	this.shape_17.setTransform(116.7,-53);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPADIAOgDQAMgEAEAE");
	this.shape_18.setTransform(116.6,-56);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAKgGQAKgGAJAG");
	this.shape_19.setTransform(116.6,-58.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgQAHIAIgIQAKgIAPAF");
	this.shape_20.setTransform(116.8,-61);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAHIAMgHQALgIAIAD");
	this.shape_21.setTransform(116.7,-63.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgGAIAC");
	this.shape_22.setTransform(116.7,-66.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHAKAD");
	this.shape_23.setTransform(116.7,-68.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAGIAKgGQAKgHAKAC");
	this.shape_24.setTransform(116.7,-70.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAJgFQAKgGAKAC");
	this.shape_25.setTransform(116.8,-73.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AAPCYQAAANgPAAQgOAAAAgNIAAkvQAAgNAOAAQAPAAAAANg");
	this.shape_26.setTransform(116.7,-59);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8C650E").s().p("AgOCYIAAkvQAAgNAOAAQAPAAAAANIAAEvQAAANgPAAQgOAAAAgNg");
	this.shape_27.setTransform(116.7,-59);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#AA7B29").ss(0.5,1,1).p("AM6hfIAyAiQAWAih/ACQhGABgLAGQgGAEAXALQBFAbgiAQQhJAj4LAV");
	this.shape_28.setTransform(17.7,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#AA7B29").ss(0.5,1,1).p("AvqgNIFYgIQFxgFB4AQQF3AxBqgiQAagGgIgLQgOgNAAgHQAAgWDjgOQESgRCOAhQA5ANgQAOQgRAPhhAJQhYAFAHARQABAHAtAWQAhAQgYAFQgjAIiigGQnXgSm7AA");
	this.shape_29.setTransform(-25.4,-2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#AA7B29").ss(0.5,1,1).p("AXrgEQp3gunrAUQj8ALioAiQhIAPgkAEQg+AGhegFQiogIh8AAQiBABhZgBIrJAF");
	this.shape_30.setTransform(3.5,-11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("A3oiSMAvRAAAIAAElMgvRAAAg");
	this.shape_31.setTransform(3.9,-2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8C650E").s().p("A3oCTIAAklMAvRAAAIAAElg");
	this.shape_32.setTransform(3.9,-2.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIAMgDQAMgEAFAE");
	this.shape_33.setTransform(116.7,-14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgNAKIAIgKQAIgLALAD");
	this.shape_34.setTransform(116.8,-16.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAIIAKgJQAJgKAKAG");
	this.shape_35.setTransform(116.8,-19.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgHAIAF");
	this.shape_36.setTransform(116.7,-22.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPADIAOgDQAMgEAEAE");
	this.shape_37.setTransform(116.6,-25.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAKgGQAKgGAJAG");
	this.shape_38.setTransform(116.6,-28);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgQAHIAIgIQAKgIAPAF");
	this.shape_39.setTransform(116.8,-30.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAHIAMgHQALgIAIAD");
	this.shape_40.setTransform(116.7,-33);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgGAIAC");
	this.shape_41.setTransform(116.7,-35.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHAKAD");
	this.shape_42.setTransform(116.7,-37.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAGIAKgGQAKgHAKAC");
	this.shape_43.setTransform(116.7,-40.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAJgFQAKgGAKAC");
	this.shape_44.setTransform(116.8,-42.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AAPCYQAAANgPAAQgOAAAAgNIAAkvQAAgNAOAAQAPAAAAANg");
	this.shape_45.setTransform(116.7,-28.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8C650E").s().p("AgOCYIAAkvQAAgNAOAAQAPAAAAANIAAEvQAAANgPAAQgOAAAAgNg");
	this.shape_46.setTransform(116.7,-28.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIANgDQALgEAFAE");
	this.shape_47.setTransform(-125.4,-14.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgNAKIAIgKQAIgLALAD");
	this.shape_48.setTransform(-125.2,-16.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAJIAKgKQAJgKAKAG");
	this.shape_49.setTransform(-125.3,-19.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgHAIAF");
	this.shape_50.setTransform(-125.3,-22.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOADIANgDQAMgEAEAE");
	this.shape_51.setTransform(-125.5,-25.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAKgGQAKgHAJAG");
	this.shape_52.setTransform(-125.5,-27.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgQAHIAIgHQAKgJAPAF");
	this.shape_53.setTransform(-125.3,-30.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgPAHIALgHQAMgIAIAD");
	this.shape_54.setTransform(-125.3,-33);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIALgFQAKgGAIAC");
	this.shape_55.setTransform(-125.3,-35.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHAKAD");
	this.shape_56.setTransform(-125.3,-37.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAGIAJgGQAKgHALAC");
	this.shape_57.setTransform(-125.4,-40.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AgOAFIAJgFQAKgGALAC");
	this.shape_58.setTransform(-125.3,-42.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFE3A4").ss(0.5,1,1).p("AAPCZQAAAMgPAAQgOAAAAgMIAAkwQAAgNAOAAQAPAAAAANg");
	this.shape_59.setTransform(-125.4,-28.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8C650E").s().p("AgOCYIAAkvQAAgNAOAAQAPAAAAANIAAEvQAAAMgPABQgOgBAAgMg");
	this.shape_60.setTransform(-125.4,-28.4);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149,-76.5,305.3,90.1);


(lib.playAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Play again?", "bold 16px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 163;
	this.text.setTransform(81.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6500").ss(1,1,1).p("AM0B9I5nAAIAAj5IZnAAg");
	this.shape.setTransform(84,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD0000").s().p("AszB9IAAj5IZmAAIAAD5g");
	this.shape_1.setTransform(84,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,36);


(lib.Play_button = function() {
	this.initialize();

	// Layer 3
	this.text = new cjs.Text("Play", "bold 24px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 230;
	this.text.setTransform(-1,-16);
	this.text.shadow = new cjs.Shadow("rgba(250,233,127,1)",0,0,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119,-19,244,47);


(lib.logo_SS = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZDpQhLgoADhNQADhVA2iDIAEgJIghgBIgrgBIAHglIAIgiIAwgDIAqgEIAGAAIAHgjIAJgrIA1ADIA9ADIgUAlIgNAaIBAgFIBRgGIgbA3IgXAuIhHgEIg+gDIgCAFIgbBIQgWA6gGAWQgHAPAQAeQAcAiBmgBIARBEIARBGQgRAIg1ACIgGAAQgxAAhKgjg");
	this.shape.setTransform(211.6,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AigCwQhNhAgEhoQAEhiBJhJQBKhJBigDQBiADBCBEQBDBEADBkQAABcg4BIQg6BJh4ADQhcgBhMg/gAhQh6QgfAqgBA/QABA9AfAqQAfAqAtACQAsgCAfgqQAfgqABg9QgBg/gfgqQgfgqgsgBQgtABgfAqg");
	this.shape_1.setTransform(167.9,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABoEuQABgwgLhTQgMhSgogyQgYgZgegCQghAAgZAZQguA1gMBWQgMBXABAkIg0gEIgzgCIAFidIAIjwIAFipIA+gTIBHgWIgOBZIgWCNIgLBLIAOADQAAgEARgnQAQgnAggoQAggoAvgGQBMgDA8ByQA7BxAcDKIhCAeIhJAhIAAgNg");
	this.shape_2.setTransform(116.7,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPE0QgygTgVhDIgCgJIgZAPIgfAUQgWgcgdgzIA3gPIBZgZIA3gPIACATQgDAHgCATQAAANAHANQAQAZAsACQBMgGAEg5QAGgxg6gQQg+gJgggIQgfgIgpgSQg3gVgpgyQgpg0AchqQAVhAAzgeQA0gfA3gBQApgBAlASQAoASARAsIADAJIAZgQIAkgWIAGA5IAFAzIhTAWIhWAYQAEgigeglQgXgTgkAJQgpALgBAjQAFAxA1AQIBGAQQBWARBFAXQBFAWAlApQAaAggGAoQgHAogeAiQgeAigjAWQglAbhGAdQgrASgnAAQgYAAgXgHg");
	this.shape_3.setTransform(63,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak9FCIAWg8IAXg9QAYAJA8ARQA8ARA4AFQCgAGAaiOIABgMIgLADQgFAFhFAFQhDAGhYgtQhOgvgHhhQgDg4AVgzQAWgyAngfQBHgyBQgMQBRgMApAaIAKAHIACgMIADgZIAGghIBNAHIBOAGQgCAjgNBxQgMBxgWB6QgXB7gfBDQg6BmiXAlQgxAMg2AAQhpAAhzgvgAg0jGQgfAkgBA1QABA1AfAjQAfAiAtABQAugBAfgiQAfgjACg1QgCg1gfgkQgfgjgugBQgtABgfAjg");
	this.shape_4.setTransform(-12.8,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABwDeIhIgCQAEgVAGgrQAGgrABgvQADhUgpgZQgpgQgaAVQgfAZAABNQAAAyANBIIglAIIgmAJQgEgmgKhNQgKhLgOhJQgPhKgQggIBPgVIBNgUIAFAzIAEApIAPABQAAgLAegvQAcgwBIgEQAnADAbAkQAtBAAAB5QAABlgfB7IhEgCg");
	this.shape_5.setTransform(-61.8,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZGRIhMgKIAFh7IALkDIALkBIAGh6IBOgKICIgSIBUgLIgeCHIg+EUIg9EVIgbCDIhLgJg");
	this.shape_6.setTransform(-123.4,-6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiDIAQhWggghhxIgDgKIgpAaIgxAfQgNgRgcgpQgdgpgUgoIBbgZICdgrIBbgaIAEAnQgFAJgDAgQgBAUAMAVQAYAnBIADQA8AAAfgeQAggeADgnQADgigTgeQgTgegugJQhpgPg0gMQg0gNhDgeQhcgjhEhUQhEhXAuiyQAjhqBWgzQBVgzBdgCQCvACA0CEIAEAJIAsgdIA6gkIAKBjIAJBbIhMAVIiGAjIhPAWQABgUgIgkQgHglgcgaQgjgdg6AOQg/AQgBA2QAHBNBUAaIBzAaQCPAcByAmQByAlA+BFQAtA3gLBDQgMBDgyA5QgyA5g6AlQg+AshzAwQhHAehCAAQgoAAgngLg");
	this.shape_7.setTransform(-186.8,-5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMDGIg8gEIgKhjIgRisIgJhkIBUgMIBVgNIgCBuIgFC7IgDBsIg/gFg");
	this.shape_8.setTransform(-97.2,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhWAMIgLhJIA1gGIBXgLIA3gHIgDBQIgDBMIhVAHIhTAIIgKhKg");
	this.shape_9.setTransform(-98.2,-18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E8284").s().p("AhjD2QhVgwAEhUQAGhfAxhyIgqgBIgfgBIAUhjIAtgDIA0gFIAIgoIAHggIABgHICXAIIgNAYIgTAkIBRgHIBAgFIhCCGIg/gDIhGgEIgeBTQgSAugEAQIgBALQgBALAIAKQAJAZBzACIAGAAIAoCiIgFADQgFAGg8AHIgTACQg1AAhRgmg");
	this.shape_10.setTransform(212.9,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E8284").s().p("AiqC6QhRhDgFhvQAEhoBOhNQBNhNBpgEQBoADBHBIQBHBJADBqQgCBzhDBFQhDBGhxABQhigBhQhEgAhGhvQgaAmgBA4QABA3AaAmQAbAlAoACQAlgCAbglQAagmABg3QgBg4gagmQgbgmglgBQgoABgbAmg");
	this.shape_11.setTransform(168.9,7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E8284").s().p("ABYFGQABgFgBg1QgCg1gMhBQgMhAgfgmQgUgVgYAAQgagBgVAUQggAjgNA8QgOA9gDAyIgCA2IABAIIiHgIIAAgHIAFiKIAJkGIAEiyIAAgFICng1IgQBmIgZCjQATgoAhglQAigkAvgFQBUgDA/B1QA/B1AeDVIAAAGIirBNg");
	this.shape_12.setTransform(117.7,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E8284").s().p("AhRFCQg1gUgXhDIgeATIgWAOIgEgGIgZgiQgVgfgPgeIgDgIIDphAIAFAoIgBACQgIAIAIAgQAMASAkACQA9gEAEgtQAEgmgsgMQg/gJghgIQgggIgqgTQgngLg2g1Qg2g3AeiAQAXhEA3giQA3ghA8gBQBsABAmBQIAlgYIAdgSIAPCRIjJA3IABgLQABgDgDgYQgDgYgRgSQgQgNgeAHQgdAHgBAYQACAjAtAQIBGAPQBXASBHAXQBHAYAoAsQAeAlgHAuQgOBOheA/QgvAghHAcQgqAQglAAQgbAAgagIg");
	this.shape_13.setTransform(63.7,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E8284").s().p("AlIFOIgHgDIA3iUIAHACQAGADBDAUQBCAVBAAGQAmAFA1gTQA4gUAVhOQgbAIhAgBQg+gBhMgoQhVgzgIhpQgDg8AXg2QAXg3ArggQBIgzBPgNQBRgNAwAXIAFghIADgWIABgHIC5ARIgBAHIgMCDQgMBygXCFQgYCGgjBKQg8BsifAmQg0ANg4AAQhuAAh4gzgAg3i7QggAkgBA1QABA1AgAjQAgAhAuACQAvgCAgghQAggjABg1QgBg1gggkQgggjgvgBQguABggAjg");
	this.shape_14.setTransform(-11.9,18.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E8284").s().p("AAdDqIACgIQAQhLAChSQAChQgegSQghgNgTAPQgRAMgHAuQgHAxAUBvIABAGIhpAYIgBgIQgIhIgMhUQgNhSgNhBQgOhAgMgLIgNgJIDHg0IADAdIAFAyQANgdAfggQAhgeA5AAQAtACAfAqQAsA9AEBxQAEBwglCOIgBAFg");
	this.shape_15.setTransform(-61.5,10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E8284").s().p("Ai2GUIAhsTIFMgrIi8NVg");
	this.shape_16.setTransform(-122.2,-6.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E8284").s().p("AiFIOQhZghgkhxIgwAeIgmAYIgEgGIgpg4QgjgygYgxIgDgIIF1hnIAHA8IgBACQgCACgFAWQgEAWAMAYQAUAgA/ADQA1AAAcgZQAbgZADgjQADgdgQgZQgRgagmgHQhqgPg1gNQg1gNhEgfQhggkhHhYQhIhbAxi6QAlhvBZg2QBag2BggCQC0ACA7CFIA6glIAxgeIAYDiIlBBXIAAgLQACgEgFgpQgEgpgegfQgdgYgyAMQg0ANgBArQAAAbAVAaQAVAaAmAKIBzAZQCQAdB0AmQB0AmBBBJQAwA8gLBJQgXB+iZBnQhMA0hzAtQhFAbg+AAQgsAAgpgMg");
	this.shape_17.setTransform(-186.1,-5.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E8284").s().p("Ag+DRIgmmOIDJgeIgLG2g");
	this.shape_18.setTransform(-96.3,13.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#96CC7F").s().p("AsdGQQgpgLgng6IgGAEQgmATgcggQgYgeggg3QgFgLAAgMQAAgLAEgJQAKgWAWgGIA4gQIBBgSIgCgBQiXhDAAiFQAAgqAOgvQAbhRBBgoQBAgnBGgBQBcgFBEBIIAPgKQAYgOAZALQAYANAEAbIALBsIAAAGQgCAkgjAMIgXAGIguANQBhAWA/AvIAHjOIADiIQADgjAggNICFgpQAagHAWARQARAPAAAXIAAAHIgGAlIgMBLQAigZAsgEQCJgEBPDfQAhhaBOg7QBNg6BhgCQB+AEBTBbIAIgoQAJgjAkgFIAUgBIAngDIAIgpQALgnApgBIB0AGQAbACAOAXQAHAMAAANIgBAGIA7gEQAcgCARAYQAPAYgMAaIgxBlQgQAcggAAIgjgCIhAgDIgaBIQgNAhgCAKIgBAEQgCAKBeAEQAlABAMAkIAiCLQAHAqgnARQgVAKhBADQhAAChagrQg0gbgZgrQhCB1itAIQiDgDhhhjQgGAYgWAKIiJA/QgZAKgXgOQgWgPgBgbIAAgMQAAhSgNg9QgNg+gWgYQgMgMgJABQgIgCgOAMQgaAdgNBAQgNBBgBBFQAAAVgQAPQgQAOgVgBIhngGQgcgCgNgWQgqApgXANQgyAjhPAeQgtAQgrAAQghAAgggJg");
	this.shape_19.setTransform(133.1,4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A512E").s().p("AsdGQQgpgLgng6IgGAEQgmATgcggQgYgeggg3QgFgLAAgMQAAgLAEgJQAKgWAWgGIA4gQIBBgSIgCgBQiXhDAAiFQAAgqAOgvQAbhRBBgoQBAgnBGgBQBcgFBEBIIAPgKQAYgOAZALQAYANAEAbIALBsIAAAGQgCAkgjAMIgXAGIguANQBhAWA/AvIAHjOIADiIQADgjAggNICFgpQAagHAWARQARAPAAAXIAAAHIgGAlIgMBLQAigZAsgEQCJgEBPDfQAhhaBOg7QBNg6BhgCQB+AEBTBbIAIgoQAJgjAkgFIAUgBIAngDIAIgpQALgnApgBIB0AGQAbACAOAXQAHAMAAANIgBAGIA7gEQAcgCARAYQAPAYgMAaIgxBlQgQAcggAAIgjgCIhAgDIgaBIQgNAhgCAKIgBAEQgCAKBeAEQAlABAMAkIAiCLQAHAqgnARQgVAKhBADQhAAChagrQg0gbgZgrQhCB1itAIQiDgDhhhjQgGAYgWAKIiJA/QgZAKgXgOQgWgPgBgbIAAgMQAAhSgNg9QgNg+gWgYQgMgMgJABQgIgCgOAMQgaAdgNBAQgNBBgBBFQAAAVgQAPQgQAOgVgBIhngGQgcgCgNgWQgqApgXANQgyAjhPAeQgtAQgrAAQghAAgggJg");
	this.shape_20.setTransform(134.1,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#F4FF00","#FF2D00"],[0,1],66.5,-33.5,0,66.5,-33.5,234.5).s().p("AJNIxQgngVAMgqIAmhmIh7gEQgXgBgPgSQgKgOgBgRIABgKIAKg8QAGgoAAgsQgCg+gHgDQgOgEgCACQgGgIgGBJQAAAtAMBFQAEAsgqANIhLARQgWAEgSgMQgSgNgDgWQgPiDgRhfIgFD3QgBAWgQAOQgQAOgVgBIh+gJQglgFgHgoIgjlzQgCgRAJgOIgEgHIhhGzQgMAogrgCIiWgSQgqgJgCgrIACg3QgkAtglAeQgkAegUAMQhRA4h7AvQh6AvhzgiQhFgRg9htIgmAYQgmATgcggIgsg8QgdgrgWgrQgFgLAAgLQAAgLAEgKQAKgVAWgHIA4gPIB3ghIBsgeQgigLgsgUQjnhlAAjQQAAg+AVhJQAph8Bjg8QBjg8BrgBQCwAABOB4IA3gjQAXgOAZAMQAZAMADAbIAUC+IAAAGQgBAkgkAMIhQAWIiOAlQCAAbBmAmQBmAmA+BGIASmYQAEgnAngIIEsgnQAXgCASASQARAUgFAZIgjCgICkgUQAXgDARAPQARAQgBAXIgGCeIAAAEICbgoQAWgFATANQAJAGAFAJQArgpBJAAQAwgEA4A/QAbAlAOA4QAbhBA0goQA+guBLgSQBLgTA/ALIABgHQAKgrAsABICcANQAtAJAAAtQgEA6gOByQgNBzgWB2QgXB3ghBEQhBB1ioAtQg8AQhBAAQhyAAh+gzg");
	this.shape_21.setTransform(-105.6,-1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AA470F").s().p("AJNIxQgngVAMgqIAmhmIh7gEQgXgBgPgSQgKgOgBgRIABgKIAKg8QAGgoAAgsQgCg+gHgDQgOgEgCACQgGgIgGBJQAAAtAMBFQAEAsgqANIhLARQgWAEgSgMQgSgNgDgWQgPiDgRhfIgFD3QgBAWgQAOQgQAOgVgBIh+gJQglgFgHgoIgjlzQgCgRAJgOIgEgHIhhGzQgMAogrgCIiWgSQgqgJgCgrIACg3QgkAtglAeQgkAegUAMQhRA4h7AvQh6AvhzgiQhFgRg9htIgmAYQgmATgcggIgsg8QgdgrgWgrQgFgLAAgLQAAgLAEgKQAKgVAWgHIA4gPIB3ghIBsgeQgigLgsgUQjnhlAAjQQAAg+AVhJQAph8Bjg8QBjg8BrgBQCwAABOB4IA3gjQAXgOAZAMQAZAMADAbIAUC+IAAAGQgBAkgkAMIhQAWIiOAlQCAAbBmAmQBmAmA+BGIASmYQAEgnAngIIEsgnQAXgCASASQARAUgFAZIgjCgICkgUQAXgDARAPQARAQgBAXIgGCeIAAAEICbgoQAWgFATANQAJAGAFAJQArgpBJAAQAwgEA4A/QAbAlAOA4QAbhBA0goQA+guBLgSQBLgTA/ALIABgHQAKgrAsABICcANQAtAJAAAtQgEA6gOByQgNBzgWB2QgXB3ghBEQhBB1ioAtQg8AQhBAAQhyAAh+gzg");
	this.shape_22.setTransform(-103.6,1.5);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-235.3,-62.7,470.7,125.5);


(lib.flower_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D5A9").s().p("AALALQgGgKgFgFQgMgDgCAFIAAgCQAEgGAGAAQAPAEAEARQgFgJABAJg");
	this.shape.setTransform(9.1,-11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D5A9").s().p("AAQADQgEgJgMADQgNACgDABQAQgKANAIQAFACgCAGIAAgDg");
	this.shape_1.setTransform(14.1,-9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D5A9").s().p("AgJAPQAKAAAEgKQABgLgJgGQABAAAAAAQAAAAAAgBQAAAAgBgBQAAgBgBAAQAOAIAAAPQgEAIgGAAQgEAAgFgBg");
	this.shape_2.setTransform(12.8,-6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#493E3B").s().p("AAHAHQgMgRgPgNIgDgEIAUAUQAQAPALANIgCAHIgPgVg");
	this.shape_3.setTransform(-5.9,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3230").s().p("AgUgcIAnAwQACABAAAIQgQgYgZghg");
	this.shape_4.setTransform(-7.1,-2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F774D").s().p("AhvgFQBCg+BZgOQBTgOA9ArQgrgcg1gBQg9AAg1AYQgyAYgvAnQguApgWAnQgDgPBPhMg");
	this.shape_5.setTransform(18.1,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22773C").s().p("AgGgHQABAAAGADQAHACgBAKIgBAAQgGAAgGgPg");
	this.shape_6.setTransform(-2.3,-28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#22773C").s().p("AgGAIQgBgKAHgCQAGgDABAAQgHAPgFAAIgBAAg");
	this.shape_7.setTransform(-8,-26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22773C").s().p("AgKAAQAGgJAPALQgCADgDAAQgGAAgKgFg");
	this.shape_8.setTransform(-10.4,-23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#22773C").s().p("AgRgBQACgBANgEQAKgDAJAOQgBABgKABIgDAAQgIAAgMgIg");
	this.shape_9.setTransform(-11.8,-26.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161106").s().p("AghALQgDgEAIgCQgDgGAIgHIAOgJIAQAGQAHABACgDQADgDAGAIQARASgMACIgbAFIgIABQgOAAgOgHg");
	this.shape_10.setTransform(-2.5,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005F2D").s().p("AihBGQAPhTBWg8QAuggBMgFQA8gEAoAhQgbgUgogEQg0gGgwARQhSAegiBBQgkA0gBA6g");
	this.shape_11.setTransform(13.7,11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02441F").s().p("AABgFQgQgjgKgPQAwA0ADA2IgDAFQgDgdgTggg");
	this.shape_12.setTransform(-6,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_13.setTransform(-10.1,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_14.setTransform(-12.8,-9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAEA7A").s().p("AAJAJQgJABgHgFQgGgKALgFQAKADACALQgEgGAFANg");
	this.shape_15.setTransform(-14.2,-10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAEA7A").s().p("AgLAAQAFgJAMABQgIACAOgBIgCABQgCAIgGAHIgDAAQgJAAgBgJg");
	this.shape_16.setTransform(-14.3,-8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAEA7A").s().p("AgGAHQgFgKAJgIQAKgCABANQgFAHgGAEIgBACQgDgNAAAHg");
	this.shape_17.setTransform(-11.9,-11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAEA7A").s().p("AgKAAIgCAAQAMgGgHADQAIgIALAGQAFAKgNAEQgIgCgGgHg");
	this.shape_18.setTransform(-11.1,-9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAEA7A").s().p("AgHAHQgCgHADgJIgBgCQALAIgFgGQAKAFAAAKQgEAGgEAAQgDAAgFgFg");
	this.shape_19.setTransform(-12,-8.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAEA7A").s().p("AgCAAIABAAIADAAIABAAg");
	this.shape_20.setTransform(-12.8,-9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_21.setTransform(11.2,-9.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFDBF").s().p("AAOAPQgOAAgMgHQgKgQATgHQAPAEAEARQgIgKAIAUg");
	this.shape_22.setTransform(9,-11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFDBF").s().p("AgRAAQAIgPASACQgLAEATgCIABAAIgBACQgDAMgLALIgFABQgNAAgCgPg");
	this.shape_23.setTransform(8.8,-8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFDBF").s().p("AgKALQgIgRANgMQARgEACAVQgHALgMAHIgBADQgFgWABANg");
	this.shape_24.setTransform(12.5,-11.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFDBF").s().p("AgQAAIgDAAQATgKgMAEQAOgMAPAJQAJAQgUAGQgMgDgKgKg");
	this.shape_25.setTransform(13.7,-9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFDBF").s().p("AgLAMQgEgNAFgOIgBgDQARAOgIgLQAQAJAAAQQgGAJgIAAQgEAAgHgHg");
	this.shape_26.setTransform(12.4,-7.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#772029").s().p("AlhAPQgHgPgJgNIB6AAID4gCID5gBIB4gBIgOAjg");
	this.shape_27.setTransform(-0.3,25.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#772029").s().p("AlJALQgHgegNglIK8AEQgTA0gFA2IhoAAIjdABIjaABIhpABQgCgNgGghg");
	this.shape_28.setTransform(-0.2,34.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFDBF").s().p("AgEABIABgBIAGAAIACABg");
	this.shape_29.setTransform(11.1,-9.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1EEDB").s().p("AgPACIAFgDIAVAAIAFADg");
	this.shape_30.setTransform(-29.7,41.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F1EEDB").s().p("AgPACIAEgDIAXAAIAEADg");
	this.shape_31.setTransform(29.2,41.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F1EEDB").s().p("AgMACIADgDIATAAIADADg");
	this.shape_32.setTransform(-29.9,38.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#51A569").s().p("AjLBUQAagrAxgyQAwgzA8gbQA6gXBEAMQA7ALAnAoQgsgqg+gDQhCgEg5AcQg/Adg0AzQg1AzgJAog");
	this.shape_33.setTransform(18.5,12.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFDBF").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_34.setTransform(-2.7,-21);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_35.setTransform(-7.2,-18.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFDBF").s().p("AAGAGQgGAAgFgDQgEgFAJgEQAGACABAHQgBgCAAAAQAAgBAAABQAAABAAABQAAABABADg");
	this.shape_36.setTransform(-8.2,-19.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFDBF").s().p("AgHAAQAEgGAHABQgCAAAAABQgBAAABAAQAAAAACAAQACAAACAAIgBABQgBAEgFAFIgBAAQgGAAgBgGg");
	this.shape_37.setTransform(-8.3,-18.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFDBF").s().p("AgEAFQgDgHAGgFQAHgCAAAJQgDAEgEADIgBABQAAgCgBgCQAAgBAAgBQgBAAAAABQAAAAAAACg");
	this.shape_38.setTransform(-6.6,-19.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFDBF").s().p("AgHAAIgBAAQACAAACAAQABgBABgBQAAAAgBAAQAAAAgCABQAGgGAHAEQAEAGgJADQgFgCgFgEg");
	this.shape_39.setTransform(-6,-18.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFDBF").s().p("AgEAFQgCgFACgGIAAgBQACABABABQABABAAAAQAAAAAAAAQAAgBAAgBQAGAEAAAGQgDAEgDAAQgBAAgDgDg");
	this.shape_40.setTransform(-6.7,-17.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_41.setTransform(3.6,-1.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D8D488").s().p("AAFAGQgFABgEgEQgEgGAIgCQAFABABAGQgBgBAAAAQAAgBAAABQAAAAAAACQABABABACg");
	this.shape_42.setTransform(-0.5,-33.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D8D488").s().p("AgGAAQADgGAHABQgCABAAAAQgBAAABAAQAAAAABAAQACAAACAAIAAABQgBAEgFAFIgBAAQgFAAgBgGg");
	this.shape_43.setTransform(-0.6,-32.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D8D488").s().p("AgDAEQgEgGAGgFQAGgBABAIQgDAEgEADIAAABQgBgDAAgBQgBgBAAgBQAAAAAAAAQAAABAAABg");
	this.shape_44.setTransform(0.9,-33.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D8D488").s().p("AgGAAIgBAAQACAAABgBQACAAAAgBQAAAAAAAAQgBAAgBABQAEgGAHAEQADAGgIACQgEgBgEgEg");
	this.shape_45.setTransform(1.4,-32.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D8D488").s().p("AgEAFQgBgFACgGIgBgBQACACABABQABAAAAABQAAAAAAgBQAAAAAAgBQAGADAAAGQgDAEgDAAQgBAAgDgDg");
	this.shape_46.setTransform(0.9,-31.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFDBF").s().p("AAGAHQgGAAgFgDQgFgHAJgDQAHACABAHQgDgEADAIg");
	this.shape_47.setTransform(2.6,-2.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFDBF").s().p("AgHAAQADgHAIABQgCABAAAAQgBABABAAQAAAAACAAQACAAADgBIgBABQgCAFgFAFIgBABQgHAAAAgHg");
	this.shape_48.setTransform(2.5,-1.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFDBF").s().p("AgEAFQgEgHAHgGQAHgBAAAJQgDAEgEAEIgBABQgCgJAAAFg");
	this.shape_49.setTransform(4.2,-2.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFDBF").s().p("AgHAAIgBAAQACAAACgBQABgBABAAQAAAAgBAAQAAAAgCAAQAGgGAHAFQAEAGgJADQgFgBgFgFg");
	this.shape_50.setTransform(4.7,-1.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFDBF").s().p("AgFAFQgCgFADgGIgBgCQADACABABQABABAAAAQAAAAAAAAQAAgBAAgBQAGADAAAHQgCAFgEAAQgBAAgEgEg");
	this.shape_51.setTransform(4.2,-0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#22773C").s().p("AgEgKQABAAAFAGQAHAEgGALQgFAAgCgVg");
	this.shape_52.setTransform(2.2,2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#493E3B").s().p("AgnCcIAAgBQADgEAQhCQARhDAnizIAEAGIgRBKQgQBGgNBJQgRBKgBAXQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgDAAgJgGg");
	this.shape_53.setTransform(1.8,6.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E8E6BC").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_54.setTransform(12.4,-14.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E8E6BC").s().p("AAGAHQgGAAgFgDQgFgHAKgDQAGACABAHQgDgEADAIg");
	this.shape_55.setTransform(11.5,-15.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E8E6BC").s().p("AgIAAQAEgHAIABQgCABAAAAQgBABABAAQAAAAACAAQACAAACgBIgBABQgBAFgFAFIgBABQgHAAgBgHg");
	this.shape_56.setTransform(11.4,-13.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E8E6BC").s().p("AgEAFQgEgHAHgGQAHgBAAAJQgDAEgEAEIgBABQgCgJAAAFg");
	this.shape_57.setTransform(13,-15.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E8E6BC").s().p("AgHAAIgBAAQACAAACgBQABgBABAAQAAAAgBAAQAAAAgCAAQAGgGAHAFQAEAGgJADQgFgBgFgFg");
	this.shape_58.setTransform(13.6,-14.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E8E6BC").s().p("AgFAFQgCgFADgGIgBgCQADACABABQABABAAAAQAAAAAAAAQAAgBAAgBQAGADAAAHQgCAFgEAAQgBAAgEgEg");
	this.shape_59.setTransform(13,-13.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#493E3B").s().p("Ag4A6IB3igIACAGIg5BMQgxBCgPAhQgHAYgBAAQgBAAAJgtg");
	this.shape_60.setTransform(9.5,-7.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#22773C").s().p("AgGAGQgCgIAIgOQACABAEAMQAEAKgMAKQgBgBgDgKg");
	this.shape_61.setTransform(10.8,-12.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#22773C").s().p("AgZAAQAAAAAPgHQAMgIAYAKQgBADgQAJQgGAEgEAAQgLAAgNgLg");
	this.shape_62.setTransform(10.1,-6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#22773C").s().p("AgDAKQgIgKADgSQADAAAJAKQALAIgKATQgBAAgHgJg");
	this.shape_63.setTransform(-12.2,-11.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CEC738").s().p("AAFAEQgFABgDgDQgDgEAGgCQAEABABAFQgBgBAAgBQAAAAAAABQAAAAAAABQAAABABACg");
	this.shape_64.setTransform(-10.8,-8.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CEC738").s().p("AgFAAQADgEAEAAQgBABAAAAQAAAAAAAAQABAAABAAQABAAACAAIgBABQgBACgEAEIAAABQgEAAgBgFg");
	this.shape_65.setTransform(-10.8,-7.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CEC738").s().p("AgCADQgDgEAFgEQAEgBAAAGQgCADgCACIgBABQAAgCAAgBQgBgBAAAAQAAgBAAABQAAAAAAABg");
	this.shape_66.setTransform(-9.6,-8.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CEC738").s().p("AgEAAIgBAAQABAAABAAQABgBABAAQAAAAAAAAQgBAAgBAAQAEgEAFADQACAEgGACQgDgBgDgDg");
	this.shape_67.setTransform(-9.2,-7.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CEC738").s().p("AgDAEQgBgEACgEIgBgBQACABABABQAAABAAAAQAAAAAAgBQAAAAAAgBQAEADAAAEQgCADgCAAQAAAAAAAAQAAAAAAgBQgBAAgBAAQAAgBgBAAg");
	this.shape_68.setTransform(-9.6,-6.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#22773C").s().p("AgTAAQABgBAOgFQAMgFAMAPQgBABgMADIgFAAQgJAAgMgIg");
	this.shape_69.setTransform(-12.4,-7.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EAEA7A").s().p("AAFAEQgFABgDgDQgDgEAGgCQAEABABAFQgBgBAAgBQAAAAAAABQAAAAAAABQAAABABACg");
	this.shape_70.setTransform(-18.5,-38.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EAEA7A").s().p("AgFAAQADgEAFAAQgCABAAAAQAAAAAAAAQABAAABAAQABAAACAAIgBABQgBACgDAEIgBABQgEAAgBgFg");
	this.shape_71.setTransform(-18.5,-37.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EAEA7A").s().p("AgCADQgDgEAFgEQAEgBAAAGQgCADgCACIgBABQAAgCAAgBQgBgBAAAAQAAgBAAABQAAAAAAABg");
	this.shape_72.setTransform(-17.3,-38.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EAEA7A").s().p("AgEAAIgBAAQABAAABAAQABgBABAAQAAAAAAAAQgBAAgBAAQAEgEAFADQACAEgGACQgDgBgDgDg");
	this.shape_73.setTransform(-16.9,-37.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EAEA7A").s().p("AgDAEQgBgEACgEIgBgBQACABABABQAAABAAAAQAAAAAAgBQAAAAAAgBQAEADAAAEQgCADgCAAQAAAAAAAAQAAAAAAgBQgBAAgBAAQAAgBgBAAg");
	this.shape_74.setTransform(-17.3,-36.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_75.setTransform(-15.6,-35.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFDBF").s().p("AAJAJQgJAAgHgEQgGgKALgEQAKADACAKQgEgGAFAMg");
	this.shape_76.setTransform(-17.1,-36.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFDBF").s().p("AgLAAQAFgJAMABQgHADANgBIgCABQgBAHgIAGIgCABQgJAAgBgJg");
	this.shape_77.setTransform(-17.2,-34.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFDBF").s().p("AgGAHQgFgKAJgIQAKgCABANQgFAGgGAEIgBACQgDgMAAAHg");
	this.shape_78.setTransform(-14.8,-36.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFDBF").s().p("AgKAAIgCAAQAMgGgHADQAIgHAKAFQAGAJgNAEQgIgCgGgGg");
	this.shape_79.setTransform(-14,-35.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFDBF").s().p("AgGAHQgDgHADgIIgBgCQALAIgFgGQAKAFAAAJQgEAFgFAAQgCAAgEgEg");
	this.shape_80.setTransform(-15.2,-34.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1D6331").s().p("AgCAKQgFgKAHgEQAEgFABAAQgDATgEAAIAAAAg");
	this.shape_81.setTransform(-16,-36.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#22773C").s().p("AgCAKQgFgKAHgEQAEgFABAAQgDATgEAAIAAAAg");
	this.shape_82.setTransform(-17.6,-39.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#22773C").s().p("AgMgCIALgDQAIgCAGALQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAQgGAAgOgIg");
	this.shape_83.setTransform(-16,-33.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#22773C").s().p("AgHAFQgKgFgBAAQAQgMAJAIQALAGABACQgKAEgHAAQgEAAgFgDg");
	this.shape_84.setTransform(-13.6,-34.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#22773C").s().p("AgSgBQACgCAOgDQAKgEAKAPQAAABgLACIgEAAQgIAAgNgJg");
	this.shape_85.setTransform(-18.3,-36);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#493E3B").s().p("AAGAnQgPh3gQhYIgRhbIAFgGQA6E3AMBwQAMBvgDgHIgRAFQgDhrgQh5g");
	this.shape_86.setTransform(-6.1,-6.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#493E3B").s().p("AA6BiQgHgWgdgwQgbgugcgpIgegsIACgHIB3C4IAFAbQABAKgBAAQgBAAgEgNg");
	this.shape_87.setTransform(-14.5,-31.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#005F2D").s().p("AhcBrQgXhNArhQQAXgrA5gfQAvgaAuAQQgegKgjAMQgqAOggAfQg0A2ACBDQgIA5AXAyg");
	this.shape_88.setTransform(6.5,7.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#005F2D").s().p("AAtASQgDgagcgZQgPgOgWgIQgQgGgMACQAUgDAWAMQAcAPANATQAZAigHAeIgHANQAIgTgGgYg");
	this.shape_89.setTransform(-9.1,15.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#005F2D").s().p("ABlAiQABhDg0g2QgggfgpgOQgigLgdAJQAtgPAsAZQA7AfAXArQAqBQgXBNIgTAiQAXgygHg5gAhuh8IAEgCIgFADg");
	this.shape_90.setTransform(-13.2,8.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#51A569").s().p("AgTA9QADhDAbgpIAKgNQgVAfgEAhQgKAzACAGg");
	this.shape_91.setTransform(1.6,14.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#51A569").s().p("AgXB4QAFiNAkhWIAGgMQgJAZgHAcQgOBHgDA4IgEA7g");
	this.shape_92.setTransform(1,8.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#51A569").s().p("AgXCcQAEi4AlhuIAFgRQgIAggGAkQgPBdgDBJIgEBNg");
	this.shape_93.setTransform(-0.2,4.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#377747").s().p("AACAeQgFhUgPhYIgCgQIAAAAQAeB6ALDDIgCAAg");
	this.shape_94.setTransform(-4.5,-5.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#51A569").s().p("AAODTIgDhnQgEhigOh/QgHgxgJgtIAGAXQAlCXAED4g");
	this.shape_95.setTransform(-4.6,-1.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_96.setTransform(3.6,-24.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_97.setTransform(-2.2,-31.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFDBF").s().p("AAMAMQgMABgLgGQgIgOAQgGQAOAEADAOQgHgIAHARg");
	this.shape_98.setTransform(1.7,-25.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFDBF").s().p("AgQAAQAHgNARACQgKADASgCIgBACQgDAKgKAJIgEABQgMAAgCgMg");
	this.shape_99.setTransform(1.6,-23.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFDBF").s().p("AgJAJQgHgOAMgKQAPgDABARQgHAJgJAGIgBACQgEgRAAAKg");
	this.shape_100.setTransform(4.7,-25.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFDBF").s().p("AgOAAIgDAAQARgIgLADQANgKAOAIQAHANgRAFQgLgDgJgIg");
	this.shape_101.setTransform(5.7,-24.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFDBF").s().p("AgJAKQgEgLAEgLIgBgDQAPAMgHgJQAPAHgBANQgFAIgHAAQgDAAgGgGg");
	this.shape_102.setTransform(4.2,-22.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFDBF").s().p("AAJAJQgJAAgHgFQgGgJALgEQAKACACALQgEgGAFAMg");
	this.shape_103.setTransform(-3.7,-32.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFDBF").s().p("AgLAAQAFgJALABQgHADAOgBIgBABQgDAHgGAGIgDABQgJAAgBgJg");
	this.shape_104.setTransform(-3.7,-30.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFDBF").s().p("AgGAHQgFgKAJgIQAKgCABANQgFAGgGAEIgBACQgDgMAAAHg");
	this.shape_105.setTransform(-1.4,-32.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFDBF").s().p("AgKAAIgCAAQAMgGgHADQAIgHAKAFQAGAJgNAEQgIgCgGgGg");
	this.shape_106.setTransform(-0.6,-31.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFDBF").s().p("AgHAHQgCgHADgIIgBgCQALAIgFgGQAKAFAAAJQgEAFgFAAQgCAAgFgEg");
	this.shape_107.setTransform(-1.5,-29.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5A4C47").s().p("AABAJQgBgUgIgSIAAgEIAIAZQAGAVADAQIgEAFIgEgZg");
	this.shape_108.setTransform(-1.9,-30.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#493E3B").s().p("AgLAWIAMgcIALgUIgBAEQgJAOgEAPIgFAUg");
	this.shape_109.setTransform(-6.1,-19.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3A3230").s().p("AggAnIAOgVQANgSAIgIIAHgHQgeAkgLATIgBgBgAAXgdIAKgKIgDAFIgRAPIAKgKg");
	this.shape_110.setTransform(-5.9,-33.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#493E3B").s().p("AgjAgQAQgTAZgZIAegdIgEAGQgXATgSAbIgWAfg");
	this.shape_111.setTransform(-6.2,-32.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3A3230").s().p("AggAnIAPgVQAMgSAIgIIAHgHQgeAkgMATIAAgBgAAXgdIAKgKIgDAFIgRAPIAKgKg");
	this.shape_112.setTransform(2,-21.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#493E3B").s().p("AgjAgQAQgUAZgYIAegdIgEAGQgXATgSAbIgWAfg");
	this.shape_113.setTransform(1.7,-21.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_114.setTransform(-1.8,3.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFDBF").s().p("AAHAHQgHAAgFgDQgFgHAJgEQAHACACAIQgEgFAEAKg");
	this.shape_115.setTransform(-3,2.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFDBF").s().p("AgIAAQAEgHAJABQgCABgBAAQAAAAAAAAQABAAABAAQACAAADAAIgBABQgCAGgFAFIgBAAQgHAAgBgHg");
	this.shape_116.setTransform(-3,3.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFDBF").s().p("AgFAFQgEgHAHgGQAIgCABAKQgEAFgFAEIAAABQgDgKAAAFg");
	this.shape_117.setTransform(-1.2,2.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFDBF").s().p("AgHAAIgCAAQAJgEgFACQAGgGAIAEQAEAHgKAEQgFgCgFgFg");
	this.shape_118.setTransform(-0.6,3.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFDBF").s().p("AgFAFQgCgFACgHIAAgBQAIAGgDgFQAHAEAAAHQgDAFgEAAQgBAAgEgEg");
	this.shape_119.setTransform(-1.2,4.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#493E3B").s().p("AAXAYQgqg7gygqIgIgNIBBA+QA4A3AhAqIgHAWQgDgGgsg9g");
	this.shape_120.setTransform(-10.5,-6.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#22773C").s().p("AgQAEQABgBAHgFQAIgIARADQgBACgIAIQgFAFgFAAQgGAAgIgEg");
	this.shape_121.setTransform(5.1,0.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#22773C").s().p("AAJgKQABABgCAJQgCAKgOABQgFgHAWgOg");
	this.shape_122.setTransform(0.6,-29.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#22773C").s().p("AgLgDQABgBAJgBQAIgBAFAKQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQgHAAgMgJg");
	this.shape_123.setTransform(-9.9,-5.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#22773C").s().p("AgLgDQABgBAJgBQAIgBAFAKQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQgHAAgMgJg");
	this.shape_124.setTransform(-7.6,7.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#22773C").s().p("AgDgMQACABADAHQAGAGgIAKQgGgBADgXg");
	this.shape_125.setTransform(-5.4,7.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#22773C").s().p("AgGACQgBgDAPgBQgBAFgHAAIgGgBg");
	this.shape_126.setTransform(1.2,-20.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#22773C").s().p("AgHACQADgIAPgHQABADgDAKQgDAMgQACQgBgCAEgKg");
	this.shape_127.setTransform(-1.5,-11.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#22773C").s().p("AgPAFQAHgSAdgMQACAEgGAVQgFAYggACQgCgCAHgTg");
	this.shape_128.setTransform(0.2,2.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#51A569").s().p("AAOCeIgDhOQgEhJgOheQgHglgJghIAGARQAlBxAEC5g");
	this.shape_129.setTransform(-5,5.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#22773C").s().p("AgEAJQgDgJAHgEIAGgEQgFARgEAAIgBAAg");
	this.shape_130.setTransform(-1.3,-31.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3A3230").s().p("AgECPIgBgWIgBgjIAEg3IACg3IADhDIACg4IACgBIgDB6IgECoIAAAHg");
	this.shape_131.setTransform(-1.9,-3.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#493E3B").s().p("AgbEUIAGi5QAFh2AGhnQAIhRAMgkQAOgjABABIAEAHIgLAoQgLAmgDA7QgCAsgCB8IgED2QgEAFgFAAQgHAAgHgGg");
	this.shape_132.setTransform(-1.5,-5.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3F774D").s().p("AgCgWQgngTgagDIAFgCQBMAMAiAmQALATAJAWIgFACQgcgyglgTg");
	this.shape_133.setTransform(-14.8,5.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#51A569").s().p("AB3BsQgTgygYguQgWgsgfgYQgigcgogFQgpgFgfAqQAbgpAqgKQAtgLAhAaQAiAdAUAzIApBkIAFAQg");
	this.shape_134.setTransform(-15.6,10.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#161106").s().p("AhxAKQhiAAgagHQgPgDAdgDQAdgDArgDIC1ACICsABQA1AJgPAAIgVAAIgzADIhhADIiIABIgwAAg");
	this.shape_135.setTransform(-0.7,22);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1E1809").s().p("AkSgCIAggJIBPABICtACICtABIBPABIBHAOIqZAEIA6gOg");
	this.shape_136.setTransform(-0.7,22.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#772029").s().p("AEFByIANgRIofADIALAOIhDAAIAKgOIgOAAIgBgFQAAgGgMg5QgMg2gdguIAEgJICDgkIH8AEIB3AcIAFAIQgDAFgTA2QgTA0gDA2IAAAFIgYAAIANARg");
	this.shape_137.setTransform(-0.4,31.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#22773C").s().p("AgLACQAAgNACgCQASADACAKQACAMgCABIgIABQgNAAgBgMg");
	this.shape_138.setTransform(-3.8,-21.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F1EEDB").s().p("AgMACIADgDIATAAIADADg");
	this.shape_139.setTransform(-29.3,38.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#22773C").s().p("AgGAAQgCgIABgBQATAMgEAHQgMgBgCgJg");
	this.shape_140.setTransform(-3.5,-14.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7F7F7F").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_141.setTransform(-31.6,-21.9);

	this.addChild(this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.8,-42.6,77.8,85.3);


(lib.flower = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20B2F").s().p("AgCALIAAgDIAAAAIABAAQABACABABIAEgBIAEgDIgIADQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAAgBQgEADgGgBQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgCIABgBIADgCIAAABIABACQAFACADgDQAGgCgBgDIgBAAIAAAAIAAACQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgBAAIAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIgCACQgDACgEgBIgBgCQAAAAAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAQADgDAEAAIAAABIAAAAIAAACIAAAAIgEAAIgBAAIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIACAAQADgBABgCQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAAgCQgEABgDADQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgDACQgBgDACgCQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAIAAAAIABAAIABAAQAEAAACgCQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAABAAAAIAAAAQgCACgEAAIgBAAIgBAAQAHgJAFAAIABACIABACIACACIADADQAAAEgCABQgEgHgCABQAGAGgBAAIAAAAQgCAEgGACIAAAAIABABIAHgFIABABIgBgBIABgCIAAAAIACgBIADABQABAAgCAEIAAABIgBACIAAADIgBACIgDABIgBAAIgBABQgBABgFAAQgCgCAAgCg");
	this.shape.setTransform(159,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20B2F").s().p("AACAEIgCAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgDgDIAAgDIAEABIAAAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQADAAADAAQgBACgCABIgCACIAAgBg");
	this.shape_1.setTransform(157.8,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20B2F").s().p("AgEAGQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgEIAAgBQAAgDADgBQADAAACACIgBACIgDABQgBABAAAFIAAABIAAABIgEgBg");
	this.shape_2.setTransform(157.5,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9F004A","#000000"],[0,1],1.5,0.1,-3.8,-0.1).s().p("AAAAQQgEgCAAgCIAAgBIABAAIAAgCIAAAAIgFAAIgCAAQgDgBgBgBIAAgEIABgBIgBAAQAAgDACgCQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAIgKAFAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABABAAIACACQACABABACIAAADIADACQABABgCADIAAABIgBACIAAADIAAADQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABgBAAIgBAAIgBAAQgBABgEAAIgBAAgAgFABIAAABIABAAIADgBIgDgBIgBABg");
	this.shape_3.setTransform(159,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9F004A","#000000"],[0,1],-0.5,0,-2.2,0.3).s().p("AABAFIgBAAIgCAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIgDgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAAgBIABAAIABABIABAAIABAAIABABQAAAAAAABQAAAAABABQAAAAAAAAQAAAAAAAAIABAAIAAAAIABAAIAEAAIACgBIAAACQgBADgDABIgCACIgBgBg");
	this.shape_4.setTransform(157.9,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9F004A","#000000"],[0,1],-0.4,0.1,-2,0.4).s().p("AAAAIQgEAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQACgCAAgBIAAgBQAAgEAEgBQADgBADADIABAAIgBABIgBACIAAABIgBAAIgCABQgCAAABAFIAAAAIgBABIAAABIAAABg");
	this.shape_5.setTransform(157.5,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A0303").s().p("AgBAJQACgEAGAAIgFAFIgCgBIAAAAIAAABIAAABIgDABIACgDgAgIAJIgDgCIABgDQACgCAEAAIAAAAIADAAIABAAQAFAAAFgCIAAAAIACgBIgEAEQgIAAgDAFIgCADIgDgCgAgBABIgCAAQADgIALgEQgKAIgBADQABAAAGAAQgEABgDAAg");
	this.shape_6.setTransform(157.5,-3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A0303").s().p("AgGALQADgDgBgMQADgJAIADIgBADQgDAAgDACQgCAFACAIIgCABIgBADIgDgBg");
	this.shape_7.setTransform(156.2,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20B2F").s().p("AABAbQgHgDAAgCIABgGIAAgBIACAAQACAEAEACIAHgCQAGgEAAgBQgBACgNAEQgCgBgCgFIACgBIAAgBIgBAAQgIAFgKgCQgFgBgCgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIABgBIAAAAIAGgDIAAACQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAHAEAJgFQAKgFgCgGQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBABIAAAEQgCgEgBgBIgCAAIAAABQAEABgCAGIgEACQgIAFgGgDQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgDAEgDQAFgEAHAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgHgCgCABIgBgBIAAACQABAAAAAAQAAAAAAAAQAAAAgBAAQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAFgCAEgFQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQgBgCgBgBQgIAAgGAFIgDAEIgGADQgBgHAEgDQACgDADABIAAAAIACAAIACAAQAHgBAFgDIAAgBIAEgBQAAgCgFACIAAABQgFADgGABIgCgBIgBAAQADgIAJgEQAIgEADAAIABACIACAFQABACADABIAGAGQAAAHgGACQgFgMgEACQAKAJgCACIAAAAQgEAIgKADIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAEAAAJgHIAEACQgBgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgBIAFgEQAEABABACQACACgDAGIgBACIgBADIgBAIIgBADQgBABgFAAIgDABIgBAAQgCACgGAAIgCAAg");
	this.shape_8.setTransform(158.7,-1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20B2F").s().p("AAAAIIgEAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgFgIQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAFABIAAABQACADAEACQAAADAAAAQAAgCACgBQAGABAFgCQgCAHgEACIgEACIgDgBg");
	this.shape_9.setTransform(156.5,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20B2F").s().p("AgIAMQgCgDABgEQADgFAAgEIAAAAQAAgHAGgCQAHAAAEADIgCAFQgDgBgDADQgDADAAAKIAAABIAAADQgFAAgDgCg");
	this.shape_10.setTransform(155.9,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#9F004A","#000000"],[0,1],2.6,0.1,-7.1,-0.2).s().p("AABAdQgJgEAAgEIAAgBIACgEIgBAAIgIABIgFAAQgGgCgBgEQgBgCABgDIABgBIAAgBQgBgHAEgFQADgDADABQADgJAKgFQAJgEADAAQAEAAgBAEIACAEIADADQAEACADAFIAAAFQAEAAABADQACADgDAGIgBACIgBADIgBAHIgBAEQgBADgHAAIgCAAIgBABQgCACgHAAIgCAAgAgKACIAAACIABAAIAGgDIgFgBIgCACg");
	this.shape_11.setTransform(158.6,-1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#9F004A","#000000"],[0,1],-0.9,0.1,-4.1,0.6).s().p("AACAKIgCAAIgEAAQgEgBAAgEIgGgHQgCgGADgBIABgBIACABIACAAIACAAIACAAIAAACQACADACABIABAAIABAAIADAAQAEABADgCIAEgBIgBADQgCAIgEACIgGADIgBgBg");
	this.shape_12.setTransform(156.5,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#9F004A","#000000"],[0,1],-0.7,0.1,-3.7,0.6).s().p("AgBAQQgHAAgCgDQgDgEACgEQACgFAAgDIAAgBQAAgIAIgCQAIgBAEAEIACABIgBABIgCAEIAAACIgCAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgEABABAJIABABIgBABIgBABIAAACIAAACg");
	this.shape_13.setTransform(156,-2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BF2850").s().p("AAAAGIAFgDIgEAEIgBAAIAAgBIAAABIAAABIgCABIACgDgAgFAHIgDgDIACgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABgBIABAAIABAAIABABQADAAAEgCIAAAAIABAAIgCACQgGAAgBADIgCADIgCgBgAgBABIgBAAQACgGAIgCQgHAEgBADQAAAAAFAAQgDABgCAAg");
	this.shape_14.setTransform(159,-11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BF2850").s().p("AgKAAIACgBIgBAAIACgBQgFADAPABIABAAIgBABIgBAAQgCACgDAAQgHgCAAgDgAAJAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIgBAEIAAABIgFABQACAAACgCg");
	this.shape_15.setTransform(160.4,-9.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BF2850").s().p("AgEAIQADgDgBgHQACgHAFACIgBACQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBADABAFIgBABIgBACIgCAAg");
	this.shape_16.setTransform(158,-11.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF3F62").s().p("AABATQgFgCAAgCIABgDIAAgBIABAAQACACACACIAFgCQAEgBAAgCQgBACgIACIgDgEIABgBIAAgBIAAAAQgGAEgHgBQgEgBAAgCQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAIABgBIAEgCIAAABIACADQAFACAGgEQAHgDgCgEIgBAAIAAAAIAAADIgCgDIgBAAIAAABQACABgBADIAAAAIgDACQgFADgEgCIgCgCQAAgDACgBQAEgDAFAAIAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIAAAAQgFgBgBABIgBgBIAAABIgBABQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAEgBACgDIAAgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgGAAgEAEIgCACIgEACQgBgEACgDQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAAAAIACAAIABAAQAFAAADgDIAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAAgCgDACQgEADgEAAIgCAAQAJgMAHAAIAAABIABADIAEADQACACABADQABAEgEACQgEgJgDACQAIAGgCABIAAAAQgDAFgGADIgBAAIABABIAJgGIACACIgCgCIACgDIgBAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQABABgCAEIgBABIgBADIAAAFIgBACIgEABIgCABIgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_17.setTransform(159.8,-11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF3F62").s().p("AAAAGIgCAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgEgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIAEAAIAAABQABADADAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIAIAAQgBAEgDACIgDABIgCAAg");
	this.shape_18.setTransform(158.3,-9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF3F62").s().p("AgFAIQgCgCABgDQACgDgBgCIAAgBQABgEAEgCQAFAAACADIgBADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgCACAAAHIAAABIAAACIgBAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_19.setTransform(157.9,-11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#9F004A","#000000"],[0,1],1.9,0.1,-5,-0.1).s().p("AAAAVQgFgDAAgDIAAgBIABgCIgBAAIgGAAIgDAAQgEgBgBgDQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAIABgBIAAgBQgBgFADgDIAEgCQAJgNAIAAQABABABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAADIADADQADABACADIgBAEQAEABABABQABACgCAEIgBABIgBADIAAAFIgBADQgBABgFAAIgBABIgBAAIgGACIgCAAgAgHACIAAABIABAAIAEgCIgEgBQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABg");
	this.shape_20.setTransform(159.8,-10.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#9F004A","#000000"],[0,1],-0.6,0.1,-2.8,0.5).s().p("AACAHIgCAAIgCAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgEgFQgBgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIABAAIABAAIACAAIABAAIACAAIAAACQABACABAAIABABIABAAIABAAIAGgBIACAAIAAABQgCAGgDABIgEABIAAAAg");
	this.shape_21.setTransform(158.2,-9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#9F004A","#000000"],[0,1],-0.5,0.1,-2.6,0.4).s().p("AAAALQgFAAgCgCQgCgDABgDQACgDAAgCIAAAAQAAgGAGgCQAEAAAEADIABAAIgBABIgBADIAAABIgCAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgDABABAHIAAAAIgBACIAAABIAAABg");
	this.shape_22.setTransform(157.9,-11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BF2850").s().p("AgBAHQABgDAFgBIgEAEIgBAAIAAAAIAAABIgCABIABgCgAgGAHIgCgCIABgCQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAAAIACAAIABAAQAEAAADgCIACgBIgDADQgGABgCADIgCADIgCgCgAgBABIgBAAQACgGAIgDQgHAFgBADQAAAAAFAAQgDABgCAAg");
	this.shape_23.setTransform(166.6,-28.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BF2850").s().p("AgDAFQgHgCgBgCIABgCIAAgBIACAAQgFADARABQADADADgFQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIgBAEIAAACIgFABIgCAAIgCABQgBABgCAAIgCAAg");
	this.shape_24.setTransform(168.2,-25.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BF2850").s().p("AgEAJQACgDgBgJQADgHAFADIAAACQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAABQgDADACAGIgBABIgBACIgCAAg");
	this.shape_25.setTransform(165.7,-27.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF3F62").s().p("AABAVQgFgCAAgCIABgFIgBAAIACgBQACAEACABIAFgBQAFgDABgCQgBADgKACQgCgBgBgDIABgBIAAgBIAAAAQgHAEgHgBQgEgBgBgCIAAgDIABgBIAAgBIAEgCIAAACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAFACAHgEQAHgEgBgEIgBgBIgBABIAAADIgCgDIgBAAIAAABQADABgCADIgDACQgFAEgGgCIgBgDQgBgCADgCQAEgDAFgBIABACIAAADIgBAAQgFgBgBABIgBgBIAAABIgBABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAEgCADgDIAAgEIgCgCQgGAAgEAFIgDACIgEACQgBgEADgEIAEgBIAAAAIACAAIABAAQAFAAAEgDIADgBQAAgCgDACIgBAAQgDADgFAAIgBAAIgBAAQAJgNAIAAQAAAAAAAAQAAAAAAAAQAAABABAAQAAABAAAAIABADIADADQADACACADQAAAFgEACQgFgJgCABQAIAIgCAAIAAABQgDAFgHADQgBAAAAAAIABABIAKgGIADABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAIABgCIAAgBIAEgDIAEADQACABgDAEIgBACIAAADIgBAFIgBADQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgDAAIgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgCAAg");
	this.shape_26.setTransform(167.5,-27.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF3F62").s().p("AAAAGIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgEgEgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAEAAIAAAAQABADADABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAgBAAgBQAAAAAAAAQABAAAAAAQAAAAABgBIAIAAQgBAFgEABIgDABIgCAAg");
	this.shape_27.setTransform(165.9,-25.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF3F62").s().p("AgGAJQgCgDACgCIABgGIAAgBQAAgFAFgCQAFAAADADIgCADQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgCACAAAHIAAABIAAADQgEAAgCgCg");
	this.shape_28.setTransform(165.5,-27.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#9F004A","#000000"],[0,1],2,0.1,-5.5,-0.1).s().p("AAAAWQgGgDABgCIgBgBIABAAIAAgDIAAgBIgGABIgEAAQgFgBgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBIAAgBQgBgFAEgEQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQALgOAIAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIABADIADACQAEACABAEIAAADQADABACACQABACgCAFIgBABIgBACIgBAGIAAADQgBACgFAAIgCAAIgBAAQgBACgFAAIgDAAgAgHACIgBABIABABIAAgBQACAAADgCIgEgBIgBACg");
	this.shape_29.setTransform(167.5,-27.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#9F004A","#000000"],[0,1],-0.7,0.1,-3.1,0.5).s().p("AAAAHIgCAAQgEAAAAgDIgEgFQgCgEACgCIABAAIABAAIADAAIABAAIABAAIABADQABABABABIABABIABAAIACAAIAGgBIACgBIAAACQgCAGgDABIgFACIgCgBg");
	this.shape_30.setTransform(165.9,-25.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#9F004A","#000000"],[0,1],-0.5,0.1,-2.8,0.5).s().p("AAAAMQgGAAgBgCQgDgDACgEQACgDgBgCIAAgBQABgGAGgCQAFAAAEADIABABIgBABIgBADIAAABIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQgDABABAHIAAABIgBABIAAABIAAACg");
	this.shape_31.setTransform(165.5,-27.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BF2850").s().p("AgEAOIACgEQADgEAIgBIgHAGIgCAAIAAAAIAAABIAAABIgCABIgCAAgAgKALIgDgDIACgDQACgDAEABIAAAAIADAAIACAAQAGgBAFgCIABAAIACgBIgEAEQgKABgDAFIgDAEQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAgAgCABIgCAAQAEgKANgEQgMAIgBAFQABAAAHAAQgFABgDAAg");
	this.shape_32.setTransform(160,-23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BF2850").s().p("AgCgBQgBgFACgBQABABADAAIABABIAAAAQgBAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABIACAKIgEgJg");
	this.shape_33.setTransform(157.6,-19.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BF2850").s().p("AgGAIQgLgDABgEQABgBAAgDIAAAAIACgBQgGAGAYACIACABIgCAAIgBABQgCACgGAAIgCAAgAAPgBQAAgEADgCIgBAHIgBAEIgHABQADgBADgFg");
	this.shape_34.setTransform(162.3,-19.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BF2850").s().p("AgHANQADgEgBgOQAEgLAKAEIgCAEQgEgBgCADQgEAGACAJIgCACIgBADIgBAAIgCgBg");
	this.shape_35.setTransform(158.5,-22.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF3F62").s().p("AgHAZIACgGIgBgBIACAAQADAFAFACIAHgCQAIgFAAgCQgBADgPAEQgDgBgCgFIACgCIAAgBIgBAAQgKAGgMgCQgGgBgBgEQAAgBAAAAQgBgBAAAAQABgBAAAAQAAgBAAAAIACgCIAAAAQADgDAEgBIAAADQAAADADABQAJAEAKgGQAMgGgDgIIgBAAIgBABQABADgBACIgDgGIgCAAIAAABQAEACgCAGIgFAEQgJAFgIgDQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgEAEgDQAGgGAIAAQABAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgCABQgIgCgCAAIgBAAIAAACQABAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAABQgCADACACQAAAAAAAAQAAABABAAQAAAAABAAQABAAABAAQAGgCAFgHQACgDgBgCQgCgDgCAAQgJAAgGAGQgDADgBABIgHAEQgCgIAFgFQACgCAEAAIABAAIACABIACAAQAIgBAFgFIABAAIAFgCQAAgBgHABIAAABQgFAEgHABIgCAAIgCAAQAEgKAKgFQAKgFADAAQABAAAAAAQAAAAAAAAQAAABABAAQAAABAAABIABAFIAFAFQAFACACAFQAAAHgGADQgHgOgEACQAMALgDACIABAAQgFAJgLAEIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAEgBAKgHIAEACIAAABIAAgBQAAAAgBgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIACgEIgBgBQADAAAEgFQAEACACACQACADgEAHIgBABIgBAEIgBAJIgBAEQgCACgGAAIgDAAIgBABQgDACgJAAQgIgEAAgDg");
	this.shape_36.setTransform(161.4,-21.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF3F62").s().p("AADAKIgDAAIgEAAQgEAAAAgEQgBgFgFgFQgCgEADgBQACABAEgBIAAABQACAFAFABQAAAEAAABQAAgDADgBQAHAAAGgCIAAABQgDAIgEACIgFACIgBAAg");
	this.shape_37.setTransform(158.8,-19.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF3F62").s().p("AgKAOQgCgEABgEQADgGAAgEIAAgBQAAgIAIgCQAIAAAEAEQgCACAAADQgEgBgDAEQgDADAAALIAAACIgBADQgGAAgDgCg");
	this.shape_38.setTransform(158.2,-22.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#9F004A","#000000"],[0,1],3,0.1,-8.3,-0.3).s().p("AABAiQgLgFAAgEIAAgBIACgFIgBAAQgEACgFAAIgFgBQgIgCgCgEQgBgEACgDIABgBIAAgBQgCgIAGgHQADgCAEAAQADgKAMgGQAKgFAEAAIAAAAQAEABAAADIABAFIAEAEQAFACADAGQABADgBACQAFACACADQACAEgEAGIgBADIgBADIgBAJIAAAEQgDAEgIAAIgCAAIgBABQgCACgIAAIgDAAgAgMADIAAACIAAABIABgBIAHgDIgGgCQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABg");
	this.shape_39.setTransform(161.4,-21.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#9F004A","#000000"],[0,1],-1,0.1,-4.7,0.8).s().p("AADAMIgEAAIgEAAQgFgBgBgEQgBgFgEgEQgDgHADgBIACgBIABAAIAEABIACAAIABAAIABACQACADADACIACAAIABAAIACAAQAFAAAEgBIAEgBIAAADQgDAKgFACQgEACgCAAIgBAAg");
	this.shape_40.setTransform(158.9,-19.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#9F004A","#000000"],[0,1],-0.9,0.1,-4.3,0.7).s().p("AgMAPQgEgEADgGQACgFAAgEIAAgBQAAgJAKgDQAJgBAFAFIACABIgBABIgCAFIAAACIgCAAQgEAAgCABQgEADABALIABABIgCACIAAACIAAACIgBAAQgJAAgCgDg");
	this.shape_41.setTransform(158.3,-22.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#22773C").s().p("AgNAEQAHgMAJADQAKADABACQgOAGgIAAQgEAAgBgCg");
	this.shape_42.setTransform(173.4,-34.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#22773C").s().p("AgJANQgUgDAAgBQAPgaAVAGQAVAFACADQgUAQgPAAIgEAAg");
	this.shape_43.setTransform(176.4,-38.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#161106").s().p("AgYAHQgJgBANgKQAHgEAIADIAOgEIALAFQAGAEgCADQAHABgDACQgUAEgMAAQgMAAgIgDg");
	this.shape_44.setTransform(153.4,23.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#005F2D").s().p("AiBA9QAGg+BCgzQAkgbA+gJQA1gIAkAZQgYgQgmAAQgrgBgmAQQhCAdgWAxQgaAqAEArg");
	this.shape_45.setTransform(166.6,15.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#51A569").s().p("AhkBZIADgNIAihSQARgrAcgYQAbgVAlAIQAhAIAWAgQgYggggAFQgiAEgcAWQgaAUgTAkQgSAmgRAqg");
	this.shape_46.setTransform(163.8,14.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#005F2D").s().p("ABNgBQgRgrgvgQQgagJgeAGQgYAEgRAOQAagXAiAAQArAAAaAUQAvAkAFA2IgDAbQACgngTgfgAhggdQACgEACgDIgEAHg");
	this.shape_47.setTransform(143.6,17.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#005F2D").s().p("ABVgCQgVgzg4gVQghgLglAHQgcAFgUARQAegbApAAQA2gBAfAYQA7AtAFBBIgDAjQACgwgYgng");
	this.shape_48.setTransform(143.8,16.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#565347").s().p("Ai5gOIBjABICsACIBkABQgEAKgEAMIlkADIgHgdg");
	this.shape_49.setTransform(153.6,27.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D3CDB6").s().p("ABLAuIiYgBIhXgBQgCgsgJgrIFfgDQgNBAgBAdIhXgBg");
	this.shape_50.setTransform(153.5,34.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AFAEAA").s().p("AgGACIACgDIAIAAIADADg");
	this.shape_51.setTransform(168.5,40.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D562A").s().p("AgKAIQAKgFgFgHQgEgNAFgDQAUAjgIADIAAADQgLgGgHgHg");
	this.shape_52.setTransform(153.5,11.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#22773C").s().p("AgOgGQAAgTADgCQAYAXACAMQACAQgCABIgBACQgdgQABgRg");
	this.shape_53.setTransform(152.8,11);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1F6633").s().p("AAFAMQgGADgHgbQACAAAIAFQAKAHgFANg");
	this.shape_54.setTransform(171.8,-36.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1F6633").s().p("AAFAMQgGADgHgbQACAAAIAFQAKAHgFANg");
	this.shape_55.setTransform(168.7,-32.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1F6633").s().p("AgCAOQgJgEALgYIAFALQAFAKgLAIg");
	this.shape_56.setTransform(145.7,-9.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1F6633").s().p("AgPADQABgCAKgEQAIgGAMAJIgCABQgBAFgJAAQgGAAgNgDg");
	this.shape_57.setTransform(144.9,-4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1F6633").s().p("AAFAMQgGADgHgbQACAAAIAFQAKAHgFANg");
	this.shape_58.setTransform(158.5,-15.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#22773C").s().p("AADAPQgQgFgNgbQADgCAXADQAXAEAFAfIgFAAIgBAAQgEAAgPgEg");
	this.shape_59.setTransform(154.3,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#22773C").s().p("AgWATIgEAAQAEgfAWgEQAYgDADACQgNAbgQAFQgPAEgEAAIgBAAg");
	this.shape_60.setTransform(159.8,0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#22773C").s().p("AgWATIgFAAQAFgfAWgEQAYgDADACQgNAbgQAFQgPAEgEAAIgBAAg");
	this.shape_61.setTransform(158.5,8.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#51A569").s().p("AgcCtQAOjMAlh7IAGgTQgKAkgHApQgRBogHBRQgIBRAAAEg");
	this.shape_62.setTransform(157,6.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#493E3B").s().p("AhKFGQAEgmANhbQAAACgDgPQgFgWgZgxQgagxgYgqIgZgrIADgHIBwDGQAViFA3kDIAFAIIgTBaICXjKIADAHIgmAxQgjAugmA1QgmA2gJAZIgFANQgPBVgSBtQgQBtgHBmQAAABgFAAIgQgBg");
	this.shape_63.setTransform(160,-8.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#161106").s().p("AioAGIAlgLIBCgBIB5gCIBDgBIAuATg");
	this.shape_64.setTransform(153.8,24.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#493E3B").s().p("AgOAiIAbhWIACACIgOApQgKAjgBAQIABALQgBAAgEgTg");
	this.shape_65.setTransform(154.2,1.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#493E3B").s().p("AAHAKQgHgNgHgIIAAgBIAOATIABAGIgBgDg");
	this.shape_66.setTransform(161.2,-27.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1F6633").s().p("AASAFQgVgKgTADIgBAAIgEgIQABgCAQgBQAagDAMAfIgKgKg");
	this.shape_67.setTransform(155.2,-9.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#22773C").s().p("AAFAOQgQgCgRgYQADgCAYAAQAVAAAJAdIgEAAIgDAAIgRgBg");
	this.shape_68.setTransform(155.1,-8.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#493E3B").s().p("AAWANQgHgGgSgKIgXgNIAAgBIAuAZIAHAKIgFgFg");
	this.shape_69.setTransform(145.2,-4.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#493E3B").s().p("AAVAdQgGgMgQgXIgWgdIABgCIArA6IADARIgDgJg");
	this.shape_70.setTransform(156.1,-10.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#51A569").s().p("AAQCPQABgEgFhCQgDhCgQhTQgIgjgKgeIAIATQAnBjAFCmg");
	this.shape_71.setTransform(150.9,10.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#77705E").s().p("ACCBeIAGgLIkRgDIAGAOIgkAAIAGgOIgNAAIAAgFQgBgsgKgrIgLgxIADgGIA+gWIECgEIBDAeIADAHQgPAmgGAtIgGAzIAAAFIgJAAIAGALgAicBXIAOAAIgDgGIADgBIgLAAIgDAHg");
	this.shape_72.setTransform(153.6,31.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#005F2D").s().p("AjqC+QATjdCHhuQCFhvC2ADQkDATheCHQhdCFgUDUg");
	this.shape_73.setTransform(177.1,-0.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7F7F7F").s().p("AgYgFQAMg0AlgVQgTAUgEAWQgCAWAGgIIAMgKQAGgNACgNIACAoQACASgPASIgXAYQgNAMANAZQgcgjAMgxg");
	this.shape_74.setTransform(158.4,6.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B20B2F").s().p("AgFAOIgBgBIgBAAIgDgBIgBgCIAAgDIgBgCIAAgBQgCgEABAAIADgBIACABIAAAAIABACIgBABIABgBIAHAFIAAgBIAAAAQgFgCgCgEIAAAAQgBAAAGgGQgCgBgEAHQgCgBAAgEIADgDIACgCIABgCIABgCQAFAAAHAJIgBAAIgBAAQgEAAgCgCIAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQADACAEAAIABAAIABAAIAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQACACgBADIgDgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgDgDgEgBIgBACQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQACACADABIACAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIgBAAIgEAAIgBAAIAAgCIAAAAIABgBQAEAAADADQAAAAABAAQAAAAAAAAQAAAAAAABQAAABAAAAIgBACQgEABgEgCIgBgCQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAAgBIgBAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIAAgCIAAAAIgBAAQgBADAFACQAEADAFgCIABgCIAAgBIADACIABABIAAACQAAAAAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgGABgFgDIAAABIABAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAAAIgIgDIAEADIAEABQAAgBACgCIABAAIAAAAIAAADQAAACgDACQgEAAgBgBg");
	this.shape_75.setTransform(-137.9,2.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B20B2F").s().p("AgDADQgCgBgBgCQADAAADAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIAAAAIAEgBIAAADIgDADQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgCAAIgBAAIAAABIgCgCg");
	this.shape_76.setTransform(-136.8,3.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B20B2F").s().p("AAAAGIAAgBQAAgFAAgBIgDgBIgBgCQACgCACAAQAEABAAADIAAABIABAEQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgEABIgBgBg");
	this.shape_77.setTransform(-136.5,2.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#9F004A","#000000"],[0,1],-1.4,0.1,3.9,-0.1).s().p("AAAAQQgEAAgBgBIgBAAIgBAAQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAgDIAAgDIgBgCIAAgBQgCgDABgBIADgCIAAgDQABgCACgBIACgCQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABgBQAFAAAIAKQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQACACAAADIgBAAIABABIAAAEQgBABgDABIgCAAIgFAAIAAAAIAAACIABAAIAAABQAAACgFACIAAAAgAAGACIAAgBIgBgBIgDABIADABIABAAIAAAAg");
	this.shape_78.setTransform(-138,2.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#9F004A","#000000"],[0,1],0.5,0,2.2,0.3).s().p("AgDAEQgDgBgBgDIAAgCIACABIAEAAIABAAIAAAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIABgBIABAAIABAAIABgBIABAAIAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIgDACQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCAAIgBAAIgBABIgCgCg");
	this.shape_79.setTransform(-136.8,3.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#9F004A","#000000"],[0,1],0.4,0.1,2,0.4).s().p("AAAAIIAAgBIAAgBIAAgBIAAAAQAAgFgBAAIgCgBIgBAAIAAgBIgBgCIgBgBIABAAQADgDADABQAEABAAAEIAAABQAAABACACQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBABgFAAg");
	this.shape_80.setTransform(-136.5,2.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7A0303").s().p("AAAALIAAgBIAAgBIAAAAIgBABIgFgFQAGAAACAEIACADIgEgBgAAEAIQgEgFgHAAIgEgEIACABIAAAAQAFACAFAAIABAAIADAAIAAAAQAEAAACACIABADIgDACIgDACIgCgDgAACABIgBAAQgDAAgEgBQAGAAAAAAQAAgDgKgIQAKAEAEAIIgCAAg");
	this.shape_81.setTransform(-136.4,-3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7A0303").s().p("AADAJIgCgBQACgIgDgFQgCgCgDAAIgBgDQAIgDADAJQgBAMADADIgDABIgBgDg");
	this.shape_82.setTransform(-135.1,-2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B20B2F").s().p("AgKAZIgBAAIgDgBQgFAAgBgBIgBgDIgBgIIgBgDIgBgCQgDgGACgCQABgCAEgBIAFAEIAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABgBABIAEgCQAJAHAEAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBQgJgDgEgIIAAAAQgCgCAKgJQgEgCgFAMQgGgCAAgHIAGgGQADgBABgCIACgFIABgCQADAAAIAEQAJAEADAIIgBAAIgCABQgGgBgFgDIAAgBQgFgCAAACIAEABIAAABQAFADAHABIACAAIACAAIAAAAQADgBACADQAEADgBAHIgGgDIgDgEQgGgFgIAAQgCABAAACQgBAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAEAFAFACQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQgBAAAAAAQAAAAAAAAQAAAAABAAIAAgCIgBABQgCgBgHACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAgEQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAHAAAFAEQAEADAAADQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQgGADgJgFIgDgCQgCgGAEgBIAAgBIgCAAQgBABgCAEIAAgEIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQgCAGAKAFQAJAFAHgEQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgCIAGADIAAAAIABABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgCADgFABQgKACgIgFIgBAAIAAABIACABQgDAFgBABQgNgEgBgCQAAABAGAEIAHACQAEgCACgEIACAAIAAABIABAGQAAACgHADIgCAAQgGAAgCgCg");
	this.shape_83.setTransform(-137.6,-1.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B20B2F").s().p("AgGAHQgEgCgCgHQAFACAGgBQABABAAACQABAAgBgDQAFgCACgDIAAgBIAFgBQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABIgFAIQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgEAAIgDABIgEgCg");
	this.shape_84.setTransform(-135.5,0.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B20B2F").s().p("AAAALIAAgBQABgKgDgDQgDgDgDABIgCgFQAEgDAHAAQAGACAAAHIAAAAQAAAEADAFQABAEgCADQgDACgFAAIgBgDg");
	this.shape_85.setTransform(-134.9,-2.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#9F004A","#000000"],[0,1],-2.5,0.1,7.2,-0.2).s().p("AgLAbIgBgBIgCAAQgHAAgBgDIgBgEIgBgHIgBgDIgBgCQgDgGACgDQABgDAEAAIAAgFQADgFAEgCIADgDIACgEQgBgEAEAAQADAAAJAEQAKAFADAJQADgBADADQAEAFgBAHIAAABIABABQABADgBACQgBAEgGACIgFAAIgIgBIgBAAIACAEIAAABQAAAEgJAEIgCAAQgHAAgCgCgAAEABIAGADIABAAIAAgCIgCgCIgFABg");
	this.shape_86.setTransform(-137.6,-1.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#9F004A","#000000"],[0,1],0.9,0.1,4.1,0.6).s().p("AgIAIQgEgCgCgIIgBgDIAEABQADACAEgBIADAAIABAAIAAAAQADgBACgDIAAgCIACAAIACAAIACAAIACgBIABABQADABgCAGIgGAHQAAAEgEABIgEAAIgCAAIgBABIgGgDg");
	this.shape_87.setTransform(-135.4,0.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#9F004A","#000000"],[0,1],0.8,0.1,3.8,0.6).s().p("AAAAQIAAgCIAAgCIAAgBIgBgBIABgBQAAgJgDgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgCAAIAAgCIgCgEIgBgBIACgBQAEgEAIABQAIACAAAIIAAABQAAADACAFQACAEgDAEQgCADgHAAg");
	this.shape_88.setTransform(-134.9,-2.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BF2850").s().p("AAAAIIAAgBIAAgBIAAABIAAAAIgEgEIAFADIACADIgDgBgAACAFQgCgDgFAAIgCgCIABAAIAAAAQAEACADAAIABgBIABAAIABAAQABABAAAAQAAAAABAAQAAAAAAAAQABABAAAAIACABIgDADIgCABIgCgDgAACABIgBAAQgCAAgDgBQAEAAAAAAQAAgDgGgEQAGACADAGIgBAAg");
	this.shape_89.setTransform(-137.9,-11.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BF2850").s().p("AgBADIgBAAIgBgBIABAAQAPgBgFgDIACABIgBAAIABABQABADgHACQgEAAgBgCgAgJABIAAgBIgBgEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQACACACAAIgFgBg");
	this.shape_90.setTransform(-139.3,-9.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BF2850").s().p("AACAGIgCgBQACgFgCgDQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAIgBgCQAFgCACAHQgBAHADADIgCAAIgBgCg");
	this.shape_91.setTransform(-136.9,-11.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF3F62").s().p("AgHASIgBAAIgCgBIgEgBIgBgCIAAgFIgBgDIgBgBQgCgEABgBQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAAAABAAIgBAAIACADIgCACIACgCIAJAGIAAgBIAAAAQgGgDgDgFIAAAAQgCgBAIgGQgDgCgEAJQgEgCABgEQABgDACgCIAEgDIABgDIAAgBQAHAAAJAMIgCAAQgEAAgEgDQgDgCAAACQAAgBABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABABQADADAFAAIABAAIACAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQACADgBAEIgEgCIgCgCQgEgEgGAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAADQACADAEABQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgBIAAgBIgBABQgBgBgFABIgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIABgBQAFAAAEADQACABAAADIgCACQgEACgGgDIgCgCIAAAAQgBgDACgBIAAgBIgBAAIgCADIAAgDIAAAAIgBAAQgCAEAHADQAGAEAFgCIACgDIAAgBIAEACIABABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAACgEABQgHABgGgEIgBAAIAAABIACABIgDAEQgIgCgBgCQAAACAEABIAFACQACgCACgCIABAAIAAABIABADQAAACgFACIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBg");
	this.shape_92.setTransform(-138.7,-11);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF3F62").s().p("AgEAFQgDgCgBgEIAIAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAEAAABgDIAAgBIAEAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIgEAFQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCAAIgCAAIgDgBg");
	this.shape_93.setTransform(-137.2,-9.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF3F62").s().p("AABAKIgBgCIAAgBQAAgHgBgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBgDQACgDAEAAQAFACABAEIAAABQgBACACADQABADgCACQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgBAAg");
	this.shape_94.setTransform(-136.8,-11.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#9F004A","#000000"],[0,1],-1.8,0.1,5.1,-0.1).s().p("AgBAVIgGgCIgBAAIgBgBQgFAAgBgBIgBgDIAAgFIgBgDIgBgBQgCgEABgCQABgBAEgBQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQACgDADgBIADgDIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABgBQAIAAAJANIAEACQADADgBAFIAAABIABABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBADgEABIgDAAIgGAAIgBAAIABACIAAABQAAADgGADIgBAAgAAIADIAAgBQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAABAAIgEABIAEACIABAAg");
	this.shape_95.setTransform(-138.8,-10.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#9F004A","#000000"],[0,1],0.7,0.1,2.9,0.5).s().p("AgFAGQgDgBgCgGIAAgBIACAAIAGABIABAAIABAAIAAgBQACAAABgCIAAgCIACAAIABAAIACAAIABAAIABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABgBABIgEAFQAAAAAAABQAAAAAAABQgBAAAAABQgBAAgBAAIgCAAIgCAAIAAAAIgEgBg");
	this.shape_96.setTransform(-137.2,-9.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#9F004A","#000000"],[0,1],0.6,0.1,2.7,0.4).s().p("AAAALIAAgBIAAgBIAAgCIAAAAQAAgHgCgBQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCAAIAAgBIgBgDIgBgBIABAAQAEgDAEAAQAGACAAAGIAAAAQAAACACADQABADgCADQgCACgFAAg");
	this.shape_97.setTransform(-136.9,-11.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BF2850").s().p("AAAAIIAAgBIAAAAIAAAAIgEgEQAEABACADIABACIgDgBgAADAGQgDgDgFgBIgDgDIACABQADACAEAAIABAAIACAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABACIgCACIgCACIgCgDgAACABIgBAAQgCAAgDgBQAEAAAAAAQAAgDgHgFQAHADADAGIgBAAg");
	this.shape_98.setTransform(-145.6,-28.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BF2850").s().p("AgBAEIgCgBIgBAAIgGgBIAAgCIgBgEQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQADAFADgDQAQgBgEgDIACAAIAAABIABACQgBACgHACIgCAAQgCAAgBgBg");
	this.shape_99.setTransform(-147.1,-25.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BF2850").s().p("AACAHIgBgBQACgGgDgDQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIAAgCQAFgDADAHQgBAJACADIgCAAIgBgCg");
	this.shape_100.setTransform(-144.6,-27.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF3F62").s().p("AgHAUIgBgBIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDIgBgFIAAgDIgBgCQgDgEACgBIAEgDIAEADIAAABIABACQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABgBAAIADgBIAKAGIAAgBQAAAAAAAAQgHgDgDgFIAAgBQgCAAAIgIQgCgBgFAJQgEgCAAgFQACgDADgCIADgDIABgDQAAAAAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAQAIAAAJANIgBAAIgBAAQgFAAgDgDIgBAAQgDgCAAACIADABQAEADAFAAIABAAIACAAIAAAAIAEABQADAEgBAEIgEgCIgDgCQgEgFgGAAIgCACIAAAEQADADAEACQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgBgBIAAgBIgBABQgBgBgFABIgCAAIAAgDIACgCQAFABAEADQADACgBACIgBADQgGACgGgEIgCgCQgCgDADgBIAAgBIgBAAIgCADIAAgDIgBgBIgBABQgBAEAHAEQAHAEAFgCQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAgCIAEACIAAABIABABIAAADQgBACgEABQgHABgHgEIgBAAIAAABIACABQgCADgBABQgKgCgBgDQABACAFADIAFABQACgBACgEIACABIgBAAIABAFQAAACgFACIgCAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_101.setTransform(-146.5,-27.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF3F62").s().p("AABAGIgCAAIgDgBQgEgBgBgFIAIAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAABAAABQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAEgBABgDIAAAAIAEAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQgEACAAAEQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgDAAg");
	this.shape_102.setTransform(-144.8,-25.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF3F62").s().p("AAAAIIAAgBQABgHgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCgDQADgDAFAAQAFACAAAFIAAABIABAGQACACgCADQgCACgEAAIgBgDg");
	this.shape_103.setTransform(-144.4,-27.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#9F004A","#000000"],[0,1],-2,0.1,5.5,-0.1).s().p("AgCAWQgFAAgBgCIgBAAIgCAAQgFAAgBgCIAAgDIgBgGIgBgCIgBgBQgCgFABgCQACgCADgBIAAgDQABgEAEgCIADgCIABgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAIAAALAOQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAEAEgBAFIAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBADgFABIgEAAIgGgBIAAABIAAADIABAAIgBABQABACgHADIgCAAgAADABQADACACAAIAAABIABgBIgBgBIgBgCIgEABg");
	this.shape_104.setTransform(-146.5,-27.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#9F004A","#000000"],[0,1],0.7,0.1,3.1,0.5).s().p("AgGAGQgDgBgCgGIAAgCIACABIAGABIACAAIABAAIAAgBQACgBABgBIABgDIABAAIABAAIADAAIABAAIABAAQACACgCAEIgEAFQAAADgEAAIgCAAIgCABIgFgCg");
	this.shape_105.setTransform(-144.8,-25.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#9F004A","#000000"],[0,1],0.6,0.1,2.9,0.5).s().p("AAAAMIAAgCIAAgBIAAgBIAAgBQAAgHgCgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgCAAIAAgBIgBgDIgBgBIABgBQAEgDAFAAQAGACABAGIAAABQgBACACADQACAEgDADQgBACgGAAg");
	this.shape_106.setTransform(-144.4,-27.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BF2850").s().p("AAAANIAAgBIAAgBIAAAAIgBAAIgHgGQAIABADAEIACAEIgCAAIgDgBgAAEAJQgEgFgJgBIgEgEIACABIABAAQAFACAGABIACAAIADAAIAAAAQAEgBACADIACADIgDADQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgEgAADABIgCAAQgDAAgFgBQAHAAAAAAQAAgFgMgIQAMAEAFAKIgCAAg");
	this.shape_107.setTransform(-138.9,-23.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#BF2850").s().p("AAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQgBAAgBAAIAAAAIABgBQACAAACgBQACABgBAFIgEAJIABgKg");
	this.shape_108.setTransform(-136.6,-19.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BF2850").s().p("AgDAGIgBgBIgCAAIACgBQAYgCgGgGIACABIAAAAQAAADABABQABAEgLADIgCAAQgGAAgCgCgAgPAEIgBgEIgBgHQADACAAAEQADAFADABIgHgBg");
	this.shape_109.setTransform(-141.2,-19.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BF2850").s().p("AAFAOIgBgDIgCgCQACgJgEgGQgCgDgFABIgBgEQAKgEAEALQgCAOAEAEIgCABIgBAAg");
	this.shape_110.setTransform(-137.4,-22.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF3F62").s().p("AgMAeIgBgBIgDAAQgGAAgCgCIgBgEIgBgJIgBgEIgBgBQgEgHACgDQACgCAEgCQAEAFADAAIgBABIACAEQAAAAgBAAQAAAAAAABQgBAAAAABQgBABAAAAIAAABIAAgBIAEgCQAKAHAEABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBQgLgEgFgJIABAAQgDgCAMgLQgEgCgHAOQgGgDAAgHQACgFAFgCIAFgFIABgFQAAgBAAgBQABAAAAgBQAAAAAAAAQAAAAABAAQADAAAKAFQAKAFAEAKIgCAAIgCAAQgHgBgFgEIAAgBQgHgBAAABIAFACIABAAQAFAFAIABIACAAIACgBIABAAQAEAAACACQAFAFgCAIIgHgEQgBgBgDgDQgGgGgJAAQgDAAgBADQgBACACADQAFAHAGACQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAQACgCgCgDQAAgBgBgBQAAAAAAAAQgBAAAAAAQAAAAABAAIAAgCIgBAAQgCAAgIACIgDgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAIAAAGAGQAEADgBAEQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgIADgKgFIgEgEQgCgGAEgCIAAgBIgCAAIgDAGQgBgCABgDIgBgBIgBAAQgDAIAMAGQAKAGAJgEQADgBAAgDIAAgDQAEABADADIAAAAIACACQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABQgBAEgGABQgMACgKgGIgBAAIAAABIACACQgDAFgCABQgPgEgBgDQAAACAIAFIAHACQAFgCADgFIACAAIgBABIACAGQAAADgIAEQgJAAgDgCg");
	this.shape_111.setTransform(-140.4,-21.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF3F62").s().p("AgIAIQgEgCgDgIIAAgBQAGACAHAAQACABAAADQABgBgBgEQAGgBACgFIAAgBQAEABACgBQADABgCAEQgFAFgBAFQAAAEgEAAIgEAAIgDAAIgBAAIgFgCg");
	this.shape_112.setTransform(-137.8,-19.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF3F62").s().p("AABANIgBgCQABgLgDgDQgDgEgEABQAAgDgCgCQAEgEAIAAQAIACAAAIIAAABQAAAEADAGQABAEgCAEQgDACgGAAIgBgDg");
	this.shape_113.setTransform(-137.1,-22.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#9F004A","#000000"],[0,1],-2.9,0.1,8.4,-0.3).s().p("AgDAiQgIAAgCgCIgBgBIgCAAQgIAAgDgEIAAgEIgBgJIgBgDIgBgDQgEgGACgEQACgDAFgCQgBgCABgDQADgGAFgCIAEgEIABgFQAAgDAEgBIAAAAQAEAAAKAFQAMAGADAKQAEAAADACQAGAHgCAIIAAABIABABQACADgBAEQgCAEgIACIgFABQgFAAgEgCIgBAAIACAFIAAABQAAAEgLAFIgDAAgAAFACIAHADIABABIAAgBIAAgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAAAIgGACg");
	this.shape_114.setTransform(-140.3,-21.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#9F004A","#000000"],[0,1],1.1,0.1,4.8,0.8).s().p("AgJAKQgFgCgDgKIAAgDIAEABQAEABAFAAIACAAIABAAIABAAQAEgCACgDIABgCIABAAIACAAIAEgBIABAAIACABQADABgDAHQgEAEgBAFQgBAEgFABIgEAAIgEAAIgBAAQgCAAgEgCg");
	this.shape_115.setTransform(-137.8,-19.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#9F004A","#000000"],[0,1],1,0.1,4.4,0.7).s().p("AAAASIAAgCIAAgCIgBgCIABgBQAAgLgDgDQgCgBgEAAIgCAAIAAgCIgCgFIgBgBIACgBQAFgFAJABQAKADAAAJIAAABQAAAEACAFQADAGgEAEQgCADgJAAg");
	this.shape_116.setTransform(-137.2,-22.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#22773C").s().p("AgNAAQABgCAKgDQAJgDAHAMQgBACgEAAQgIAAgOgGg");
	this.shape_117.setTransform(-152.3,-34.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#22773C").s().p("AgegDQADgDAVgFQAVgGAPAaQAAABgUADIgEAAQgPAAgVgQg");
	this.shape_118.setTransform(-155.3,-38.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#161106").s().p("AgbAGQgDgCAHgBQgCgDAGgEIALgFIAOAEQAIgDAHAEQANAKgJABQgIADgMAAQgMAAgUgEg");
	this.shape_119.setTransform(-132.3,23.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#005F2D").s().p("ABmAGQgWgxhCgdQgmgQgrABQgmAAgYAQQAkgZA1AIQA+AJAkAbQBCAzAGA+IgGAeQAEgrgagqg");
	this.shape_120.setTransform(-145.6,15.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#51A569").s().p("ABiBZQgRgqgSgmQgTgkgagUQgcgWgigEQgggFgYAgQAWggAhgIQAlgIAbAVQAcAYARArIAiBSIADANg");
	this.shape_121.setTransform(-142.8,14.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#005F2D").s().p("AhhAqQAGg2AvgkQAagUArAAQAiAAAaAXQgRgOgYgEQgegGgaAJQgvAQgRArQgTAfACAngABdgkQACADACAEIAAAAIgEgHg");
	this.shape_122.setTransform(-122.5,17.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#005F2D").s().p("AhtAyQAFhBA7gtQAggYA1ABQApAAAdAbQgTgRgcgFQglgHghALQg4AVgVAzQgYAnACAwg");
	this.shape_123.setTransform(-122.7,16.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#565347").s().p("AixAMQgEgMgEgKIBkgBICsgCIBjgBIgHAdg");
	this.shape_124.setTransform(-132.5,27.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D3CDB6").s().p("AivguIFfADQgJArgCAsIhXABIiYABIhXABQgBgdgNhAg");
	this.shape_125.setTransform(-132.4,34.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#AFAEAA").s().p("AgGACIADgDIAIAAIACADg");
	this.shape_126.setTransform(-147.5,40.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1D562A").s().p("AgHASQgIgDAUgjQAFADgEANQgFAHAKAFQgHAHgLAGg");
	this.shape_127.setTransform(-132.5,11.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#22773C").s().p("AgOAZQgCgBACgQQACgMAYgXQADACAAATQABARgdAQg");
	this.shape_128.setTransform(-131.8,11);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#1F6633").s().p("AgBgHQAIgFACAAQgHAbgGgDIgCABQgFgNAKgHg");
	this.shape_129.setTransform(-150.8,-36.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1F6633").s().p("AgBgHQAIgFACAAQgHAbgGgDIgCABQgFgNAKgHg");
	this.shape_130.setTransform(-147.7,-32.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1F6633").s().p("AgEgDIAEgLQAMAYgJAEIgBABQgLgIAFgKg");
	this.shape_131.setTransform(-124.6,-9.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1F6633").s().p("AgNABIgCgBQAMgJAIAGQAKAEABACQgNADgGAAQgJAAgBgFg");
	this.shape_132.setTransform(-123.9,-4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#1F6633").s().p("AgBgHQAIgFACAAQgHAbgGgDIgCABQgFgNAKgHg");
	this.shape_133.setTransform(-137.5,-15.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#22773C").s().p("AgWATIgEAAQAEgfAWgEQAYgDADACQgNAbgQAFQgPAEgEAAIgBAAg");
	this.shape_134.setTransform(-133.2,1.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#22773C").s().p("AADAPQgQgFgNgbQADgCAXADQAXAEAEAfIgEAAIgBAAQgEAAgPgEg");
	this.shape_135.setTransform(-138.7,0.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#22773C").s().p("AADAPQgQgFgNgbQADgCAXADQAXAEAFAfIgFAAIgBAAQgEAAgPgEg");
	this.shape_136.setTransform(-137.4,8.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#51A569").s().p("AAOBbQgHhSgRhnQgIgrgKgmIAHAXQAkB7AODMIgIABQABgEgIhRg");
	this.shape_137.setTransform(-136,6.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#493E3B").s().p("AA2FGQgHhmgQhtQgRhtgQhVIgFgNQgJgZgmg2Qgmg1gjguIgmgxIADgHICXDKIgThaIAFgIQA3EDAVCFIBwjGIADAHIgZArQgYAqgaAxQgZAxgFAWQgDAPAAgCQAOBbACAmIgPABQgFAAAAgBg");
	this.shape_138.setTransform(-138.9,-8.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#161106").s().p("Ah6gJIBDABIB5ACIBCABIAlALIlRAEIAugTg");
	this.shape_139.setTransform(-132.7,24.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#493E3B").s().p("AALAqQgBgQgKgjIgOgpIACgCIAbBWQgEATgBAAIABgLg");
	this.shape_140.setTransform(-133.1,1.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#493E3B").s().p("AgGAHIAOgTIAAABQgHAIgHANIgBADIABgGg");
	this.shape_141.setTransform(-140.1,-27.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#1F6633").s().p("AALgNQAQABABACIgEAIIgBAAQgTgDgVAKIgKAKQAMgfAaADg");
	this.shape_142.setTransform(-134.1,-9.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#22773C").s().p("AgYAPIgEAAQAJgdAVAAQAYAAADACQgRAYgQACIgRABIgDAAg");
	this.shape_143.setTransform(-134.1,-8.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#493E3B").s().p("AgTAIIAugZIAAABIgXANQgSAKgHAGIgFAFIAHgKg");
	this.shape_144.setTransform(-124.2,-4.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#493E3B").s().p("AgUAVIArg6IABACIgWAdQgQAXgGAMIgDAJIADgRg");
	this.shape_145.setTransform(-135.1,-10.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#51A569").s().p("AgaCPQAFimAnhjIAIgTQgLAegHAjQgQBTgDBCQgFBCABAEg");
	this.shape_146.setTransform(-129.8,10.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#77705E").s().p("ACEBeIAGgOIkRADIAGALIglAAIAGgLIgJAAIAAgFIgGgzQgGgtgPgmIADgHIBDgeIECAEIA+AWIADAGIgLAxQgKArgBAsIAAAFIgNAAIAGAOgACdBXIgDgHIgLAAIADABIgDAGIAOAAIAAAAg");
	this.shape_147.setTransform(-132.6,31.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#005F2D").s().p("AB3hfQheiHkDgTQC2gDCFBvQCHBuATDdIgDA8QgUjUhdiFg");
	this.shape_148.setTransform(-156.1,-0.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#7F7F7F").s().p("AAJAqIgXgYQgPgSACgSIACgoQACANAGANIAMAKQAFAIgBgWQgEgWgTgUQAlAVAMA0QAMAxgcAjQANgZgNgMg");
	this.shape_149.setTransform(-137.4,6.8);

	this.addChild(this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-179.6,-41,380.3,82.1);


(lib.congrat = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Congratulations", "bold 75px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 77;
	this.text.lineWidth = 724;
	this.text.setTransform(3.3,-56.1);

	this.text_1 = new cjs.Text("Congratulations", "bold 75px 'Comic Sans MS'", "#DD0000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 77;
	this.text_1.lineWidth = 724;
	this.text_1.setTransform(6.3,-51.9);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-358.8,-56.1,731.2,113.2);


(lib.brick = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F6233").s().p("AhgBtIAAjZIDBAAIAADZg");
	this.shape.setTransform(228,-96.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F6233").s().p("AiSAoIAAhPIElAAIAABPg");
	this.shape_1.setTransform(281,116.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F6233").s().p("AjhAoIAAhPIHDAAIAABPg");
	this.shape_2.setTransform(241,116.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7F6233").s().p("Aj8BtIAAjZIH5AAIAADZg");
	this.shape_3.setTransform(267.9,98.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7F6233").s().p("AhqBtIAAjZIDVAAIAADZg");
	this.shape_4.setTransform(229.1,98.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F6233").s().p("AgiBtIAAjZIBEAAIAADZg");
	this.shape_5.setTransform(292.3,49.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7F6233").s().p("AiPBtIAAjZIEfAAIAADZg");
	this.shape_6.setTransform(281.3,74.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7F6233").s().p("AjjBtIAAjZIHHAAIAADZg");
	this.shape_7.setTransform(241.2,74.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH7AAIAADZg");
	this.shape_8.setTransform(260.7,49.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7F6233").s().p("AhGBtIAAjZICNAAIAADZg");
	this.shape_9.setTransform(225.5,49.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7F6233").s().p("Ah/BtIAAjZID/AAIAADZg");
	this.shape_10.setTransform(282.9,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7F6233").s().p("Aj0BtIAAjZIHpAAIAADZg");
	this.shape_11.setTransform(242.9,26);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7F6233").s().p("Aj8BtIAAjZIH5AAIAADZg");
	this.shape_12.setTransform(267.4,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7F6233").s().p("AhnBtIAAjZIDPAAIAADZg");
	this.shape_13.setTransform(228.8,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7F6233").s().p("AhpBtIAAjZIDTAAIAADZg");
	this.shape_14.setTransform(285.1,-22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH6AAIAADZg");
	this.shape_15.setTransform(246.4,-22.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH7AAIAADZg");
	this.shape_16.setTransform(265.9,-47);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7F6233").s().p("AhgBtIAAjZIDBAAIAADZg");
	this.shape_17.setTransform(228.1,-47);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7F6233").s().p("AgrBtIAAjZIBXAAIAADZg");
	this.shape_18.setTransform(222.8,-71.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH7AAIAADZg");
	this.shape_19.setTransform(255.5,-71.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7F6233").s().p("Aj8BtIAAjZIH5AAIAADZg");
	this.shape_20.setTransform(266.9,-96.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7F6233").s().p("Ag6BtIAAjZIB1AAIAADZg");
	this.shape_21.setTransform(289.6,-72.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7F6233").s().p("Ah1BtIAAjZIDrAAIAADZg");
	this.shape_22.setTransform(283.7,-120.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7F6233").s().p("Aj8BtIAAjZIH5AAIAADZg");
	this.shape_23.setTransform(243.8,-120.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#654C20").s().p("AmBTvMAAAgndIMDAAMAAAAndg");
	this.shape_24.setTransform(257,-5.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FBF7FF").s().p("AnlUTMAAAgolIPLAAMAAAAolg");
	this.shape_25.setTransform(257.2,-1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7F6233").s().p("AhgBtIAAjZIDBAAIAADZg");
	this.shape_26.setTransform(-308.2,-96.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7F6233").s().p("AgFBtIAAjZIALAAIAADZg");
	this.shape_27.setTransform(-241.1,-47);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7F6233").s().p("AiSAoIAAhPIElAAIAABPg");
	this.shape_28.setTransform(-255.3,116.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7F6233").s().p("AjhAoIAAhPIHDAAIAABPg");
	this.shape_29.setTransform(-295.3,116.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH6AAIAADZg");
	this.shape_30.setTransform(-268.4,98.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7F6233").s().p("AhpBtIAAjZIDUAAIAADZg");
	this.shape_31.setTransform(-307.2,98.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7F6233").s().p("AghBtIAAjZIBEAAIAADZg");
	this.shape_32.setTransform(-244.1,49.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7F6233").s().p("AiPBtIAAjZIEfAAIAADZg");
	this.shape_33.setTransform(-255,74.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7F6233").s().p("AjjBtIAAjZIHHAAIAADZg");
	this.shape_34.setTransform(-295,74.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH6AAIAADZg");
	this.shape_35.setTransform(-275.6,49.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7F6233").s().p("AhFBtIAAjZICMAAIAADZg");
	this.shape_36.setTransform(-310.8,49.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7F6233").s().p("Ah/BtIAAjZID/AAIAADZg");
	this.shape_37.setTransform(-253.4,26);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7F6233").s().p("Aj0BtIAAjZIHpAAIAADZg");
	this.shape_38.setTransform(-293.4,26);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH6AAIAADZg");
	this.shape_39.setTransform(-268.9,1.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7F6233").s().p("AhnBtIAAjZIDPAAIAADZg");
	this.shape_40.setTransform(-307.4,1.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7F6233").s().p("AhpBtIAAjZIDTAAIAADZg");
	this.shape_41.setTransform(-251.2,-22.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7F6233").s().p("Aj8BtIAAjZIH5AAIAADZg");
	this.shape_42.setTransform(-289.9,-22.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7F6233").s().p("Aj8BtIAAjZIH5AAIAADZg");
	this.shape_43.setTransform(-270.3,-47);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7F6233").s().p("AhgBtIAAjZIDBAAIAADZg");
	this.shape_44.setTransform(-308.2,-47);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7F6233").s().p("AgrBtIAAjZIBXAAIAADZg");
	this.shape_45.setTransform(-313.4,-71.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH7AAIAADZg");
	this.shape_46.setTransform(-280.8,-71.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH7AAIAADZg");
	this.shape_47.setTransform(-269.4,-96.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7F6233").s().p("Ag6BtIAAjZIB1AAIAADZg");
	this.shape_48.setTransform(-246.6,-72.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7F6233").s().p("Ah1BtIAAjZIDrAAIAADZg");
	this.shape_49.setTransform(-252.6,-120.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7F6233").s().p("Aj9BtIAAjZIH7AAIAADZg");
	this.shape_50.setTransform(-292.4,-120.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#654C20").s().p("AmBTvMAAAgndIMDAAMAAAAndg");
	this.shape_51.setTransform(-279.2,-5.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FBF7FF").s().p("AnlUTMAAAgolIPLAAMAAAAolg");
	this.shape_52.setTransform(-279.1,-1.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7F7F7F").s().p("Ag2AUQgDgQgJAjQABgnAOggQANgiAmgMQAhgFAWAkQAWAkgSAcQgXAcgdAIQgaAHgfALIgJAJQAHgsgCgQg");
	this.shape_53.setTransform(212.3,76.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7F7F7F").s().p("AATA8QghgIgTgWQgTgWgXgUIgMgDQAqgNANgKQANgJgjAIQAjgQAigEQAlgDAbAcQATAdgWAgQgUAhggAAIgFAAg");
	this.shape_54.setTransform(215.6,87.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7F7F7F").s().p("AgGBTQgogIgLghQgGgiANgYQAOgaALgdIgBgNQAaAhAOAJQAOAJgVgdQAcAaARAgQARAegRAkQgPAXgdAAIgOgCg");
	this.shape_55.setTransform(208,93);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7F7F7F").s().p("AgPAHQgTgSAAgEQAigHAQAOQARAMgBACIADAEQgPAIgNAAQgMAAgKgLg");
	this.shape_56.setTransform(250.5,128.2);

	this.addChild(this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-327.8,-132.2,633.7,262.3);


(lib.bowPull = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D1A02").s().p("AgJAAQgBgXAVgGIgKAIQgJALACAoQgCgEgBgag");
	this.shape.setTransform(13.8,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#281601").s().p("AAAARQAHgNgCgfQACACADAWQACATgVAMIAJgLg");
	this.shape_1.setTransform(17.3,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#281601").s().p("AAVAcQgcgIgug2QAHAIAYAVQAfAbAtAMIgDABQgGAAgYgHg");
	this.shape_2.setTransform(-10.9,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#281601").s().p("AgigCQgEgOAAgCQAXATAcAEIAaAEQgmgBgNgGQgOgCgBgCQAEAQAEAFQgLgJgEgMg");
	this.shape_3.setTransform(-15.1,-8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#281601").s().p("AgCAYQg2gGgegPQgagLgJgIQgKgHgFgCIAOAEQAOAFALAJQAKAKAsALQArAKBZgaIAQgKQAOgJASgCIgaAOQgZAMgQAPQgNAIgcAAQgOAAgRgCg");
	this.shape_4.setTransform(0.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#281601").s().p("AgMAAQgCgqAMgBQAJgBAGAsQACArgMACIAAAAQgKAAgFgtg");
	this.shape_5.setTransform(15.3,-2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#281601").s().p("AgMAAQABgrALAAQALgBABAsQAAAsgLABQgMAAgBgtg");
	this.shape_6.setTransform(-13.7,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E0101").s().p("ABBB1QAogTgBgdQgBgdgHglQgHgiAVgoQAFgNgkAAQgkAAgnADIgoAGIgbAAQgZAAgagEQgagCgEgJQB1AVCpgvIADDOQgoARgmAKg");
	this.shape_7.setTransform(6.8,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#760101").s().p("AgTBtIgEhJIAEg+IgHhSIABABIAAAAQAHADAtANQghgDgIAMQgHAdASAPQAGAIgCAjQgBAlgFANQgEAJAAAPQgBAQABAOIgKAAg");
	this.shape_8.setTransform(-18.4,-1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AALB9QhUAAg6gUQgmgMgKAAIgZAAIgDhJIADg+IgGhSQABACA4AQQA4APBeADQBeADB1giIAEDOQhtAmhVAAIgHAAg");
	this.shape_9.setTransform(0.1,0);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.1,-12.5,42.4,25.2);


(lib.bow = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E7A52").s().p("AgsAIQgDgkAogLQApgFALAkQADAlgpAMIgHAAQgiAAgKghg");
	this.shape.setTransform(111.3,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E7A52").s().p("AgsAIQgDgkAogLQApgFALAkQADAlgoAMIgIAAQgiAAgKghg");
	this.shape_1.setTransform(10.7,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F351D").s().p("AprAwIgBgJQADgVAmgSQAngSAugGQAugGAaASIgGAEQgdgOgsAIQgsAHgjARQgjASgCAUIgCAAgAGLgPQAQgQA6gLQA9gHAsAEQArAEADAbQgLgUgpgDQgqgCg3AFQgtAHgUAPIgLgDg");
	this.shape_2.setTransform(62.1,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#261705").s().p("AhiAcQADgUAmgSQAngTAsgGQAugGAaATQgoAXhBAUQgyANgoADIgBgJg");
	this.shape_3.setTransform(9.9,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#261705").s().p("AhvAIQAQgOA5gLQA7gHAsAEQAsAEADAZQgnANhJAAQhIgBgngNg");
	this.shape_4.setTransform(113,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F512E").s().p("AA8C7Igrg7Qglg1grhIQgshHgVhCQgFgPgCgQQgBgQALgGQAUgHAoAmQAqAlArA4QAtA4AfAuQAwBIgKAVQgDAHgJAAQgUAAgpgnQgogngphCQgCgFAEgEQAFgCAEAEQAnA/AlAkQAkAkARADIADAAQACACgEgRQgEgQgfgxQhFhkg7g/Qg+g/gQAFQgBgBgBAHQgBAHAHAYQAVBBAsBJQAsBHAkA0IApA4QAEAFgFAEIgEACQgDAAgCgDg");
	this.shape_5.setTransform(26,37.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B4022").s().p("ACFCSQgogigQABQgJAEACAZIAAADQgCAJgPAFQgiAFg+hqQhBhogkhCQgkhDABgDQADABAoBAIBoCoQAmBAAUARQAUARAFgDQAGgCAAgDIAAgIQAAgaAOgGQARgFAaAUQAZATAVAXQAUAWAAADQgHgEgoghg");
	this.shape_6.setTransform(28.3,44.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B4022").s().p("ACXDfQgXgEgdgdIhBhEQgjgigTgVQgQgXgIgDIgEgCQgOgQgug6Qgug9gGgnQgDgfgUgbQgUgbgDgCQACgBAbAbQAaAaAEAjQAEAdAmA1QAnA1AbAeQANAFARAYQANAWAhAjQAjAkAeAbQAeAbAVAEQAHAAAHgGQAagbABhGQgCgegcg9Qgbg7geg3IglhEIAGgDQAPAZAgBAQAgBAAaA4QAbA7gBAIQgFAMgGAnQgGAngOARQgKAJgLAAIgEAAg");
	this.shape_7.setTransform(49.5,86.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7F512E").s().p("AAaCAQgPgTgOgbQgegwgdg3Qgdg5gGgmQgBgGACgLIACgMQABgCAjAjQAjAjA9BUIAgAuQAbAoACAHQgHgDgegmIgigsQgegrgigtQgjgtgOgIIAAACIABAGQAGAoAgA9QAfA8AcAyIAeA2IAAAAQgDAAgOgTg");
	this.shape_8.setTransform(48.4,74.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7F512E").s().p("Ag4BsQAJgNAlgHQAvgVAMgyQAMgvgDgsIgFgvQAEACAEAnQAFAngGAqQgEAlgRAcQgQAdgfAGQgkACgIAJIgJAKQgEgCAJgMg");
	this.shape_9.setTransform(70.7,193.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B4022").s().p("AhTD5QgKgEgFgLQgLggAUhAQAUhAAYg2QAXgxADgFQgOAfgTA0QgTA2gMA0QgMAyAIAYQADAGAFABQAFACAIgGQAbgWAhhJQAfhJAchZQAThBAJhCQAIhCgVgCQgLAKgRBBQgSBAgNBCQgMA/ADAMQADAJgBALQAAANgEAPIgJAXQgTA4gTAGQgIABgIgJQAAgCAFACIAHACQAKgCAOgkIAJgWQAFgNADgUQADgTgDgJQgOgRgFAFQgEgDAAgFQAiiEAXg9QAYg9AOgQQAPgRAFgBQASgJAEAdQADAdgDAXQgOBPgcBZQgcBXggBGQgfBFgcAXQgKAGgIAAIgGAAg");
	this.shape_10.setTransform(95.6,37.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7F512E").s().p("AiuFMQgQgOAGg/QAFg+ALg8QAMg7ADgEQABAGgJBEQgIBEgEA9QgEA9ANgRQAagmA1hZQA1haAhhgIABgEQAWg9AihNQAihOAig5QAig5AUgDQADAAACADQACADgBADIgcBMIg9CoIg+CmQgbBIgDAEQgCgCAIgbQAHgbAPgoIAziMIAwiFIAZhHQgcAdgpBLQgqBKggBcIgCAFQgfBigoBaQgpBagxAyQgKAJgIAAQgEAAgDgCg");
	this.shape_11.setTransform(99.9,45.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7F512E").s().p("AABCjQgNgZgIgxQgGgwAJhEQAIhFAhhZIgGAfQgHAegFASQgZBgAEA/QAFBCAMAhQAOAhACABIAAAAQgCAAgPgXg");
	this.shape_12.setTransform(76.6,76.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B4022").s().p("AghDiQgLgNACgEQACABAKALQAKALAMgGQAKgHAGgJQAGgIAIghQANgxAAgdQABgcgJggIgMgrQgIgbgCgVQgCg8ALg3QAKg4ADgHIgGA8QgFA6ACA7QADAlAJAgQAJAhAEAiQADAigMA0QgPBDgYALIgDAAQgPAAgKgNg");
	this.shape_13.setTransform(70.7,90.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7F512E").s().p("AAqBNQgOgKgog6Qgpg5gEgQQgFgQAGAAQABgFAOAKQANAJAoA6QAJAKATAeQAUAeAAANQAAAEgDACQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgEAAgJgGgAA1BJQgHgNgSgaIgfgsQgegqgTgVQAJAYAaAqQAQAVAUAcQAWAcAMADIAAAAg");
	this.shape_14.setTransform(56,86.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B4022").s().p("AAACTQgDAEgGgXQgGgXgBhpQABhoAGgXQAGgXADAEQAEgEAGAXQAGAXABBoQgBBpgGAXQgFATgEAAIgBAAgAgIhZQgCArAAAuQABBYAJAqQAIgqABhYQAAgsgCgmQgCgmgFgJIgBgBQgGAAgBApg");
	this.shape_15.setTransform(59.6,156);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7F512E").s().p("AAHFuQgfgXgOhMQgPhOgChpQgDhnABhqIAAgeQAAgbAEgbQAFgbANgBQASgBASAnQBECJghCpQgRBgADAkQADAlACgCQACAFgFAEQgGACgCgFQgDABgBgiQgBgiAShkQAdiohCiKQgMgWgGgFQgGgFgCABQgCACgCAYIgEAwIgCAZQgBAZgEAmQgFAmAAAYQgBCDAPBeQAQBfAjAaQASALAIgFQAKgHADgeQADgeAAgsQAAhFAJheQAPiPgdh3Qgeh2gvg0QgTgTgJAEQgHAFgDAZQgEAYgBAYIgDg+QAGgOAKgGQASgIAZAaQA3A9AXB0QAXB1gPCFQgHBhADBIQAAA1gDAiQgCAjgPAJQgFAEgHAAQgLAAgQgKg");
	this.shape_16.setTransform(61.5,155.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B4022").s().p("AA9H0QgeABgcgSQgagSgNgSIAkAXQAkAWAbACQAQAAAHgPQAOgbAMhkQAMhjAFiAQAEh9gKhtQgGhKgchPQgchOg3gtIh2hlQgEgCgBABQgGAGgIAOIgFgIQADgSAMgHQAIAEAOANIA9AzIAbASIAaATQBcBHAWDWQAKBugDB/QgDCAgLBlQgKBlgOAdQgLAPgVAAIgFgBg");
	this.shape_17.setTransform(60.9,151.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7F512E").s().p("ABRCoQgvgqhAhWQg3hJgWgwQgPgcgRgcQgSgcgeghIAkAnQAjAnAUAhQAZA2A3BOQA8BRApAkQApAkAfgLQANgFAFgMQAFgcgWgqQgVgqgbggQgWgagWgmQgWgngPggQgPggABgCQAFAEAhA7QAiA6AhAoQAbAfAXAuQAXAugGAgQgEASgSAFQgIADgKAAQgeAAgkgfg");
	this.shape_18.setTransform(47,80);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8C5933").s().p("ACPNIQg7AAg5grIAAh2IgBkKQAAiZgCiDQgCiBgEgpIgLgXQgHgWgBgZIgqhOIhli/Ih+jvQhAh7gxhiQBHByBTCTICUEIQBBB1AVAZQAVAYgBAPIgCAcQgBANAVARQAgAVgLAQQgKAQgTBEQgLA3AEBmQAEBnALBhQAKBiAMAqQAIAmgLAoQgKAoANAnQANAoBKAjQA6AUAVhhQAUhggCiRQgCiRgKh+IgNiiQgGg7gOgoQgPgoAVgpQANgbgKgMIgQgSQgEgGAbgKQAdgNAvg5QAug5Aqg8QggBHgeA+QgdA+gOARQACABAAAXQAAAXgVAiIAFBcIAJDcIALEOQAECIABBiQABBjgFATQgCACgpAPQgnAOg5AAIgEgBg");
	this.shape_19.setTransform(52,123.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C321E").s().p("AApQOQg5gBg4gqIgBh2IgBkKQAAiZgCiDQgCiCgDgqIgLgXQgJgXgCgYIgthUIhsjKIiDj5QhBh/gwhfQgvhfgIgZIgRggQgQgfgPglQgPglgCgVQADgVAmgTQAngTAugHQAugGAaATIAdA5QAbA1AfA5IBMCVQA3BtA6BpQA6BqAhAgQABgCAZgJQAZgJAhAHQAyAKAVgRQAUgRAIgQQAHgKAmhWIBYjGQAxhxAmhcQAmhcAFgYQAAgCAVgMQAVgMAkgFQBDgHAtAGQAuAGgIAjIgvB/IgfBIIhHCjIhPC1QgmBVgSAkQgZAwgfBGIg8CCQgcA6gNAQQABABAAAWQAAAXgVAiIAFBcIAJDeIAKEOQAFCIABBiQABBjgFATQgCACgoAPQgoANg4AAIgFAAg");
	this.shape_20.setTransform(62.1,103.9);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124.3,207.8);


(lib.bground_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#656566").s().p("Ak0BrQgRhMBRhFQBRhGCgACQCOANBKBEQBKBCAZBCg");
	this.shape.setTransform(-161.2,123.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6C2B0").s().p("AjBAMQhlgIgFgDIACgIQAFADBkAGQBkAICQgKQCNgOA2AAQA1gBAAACIgBAKQAAgBg0AAQg1AAiNAMQhYAHhIAAQgvAAgngDg");
	this.shape_1.setTransform(-99.3,142.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C2B0").s().p("AhDCcQhngBhGgQQhggegBhIQgBhHBRg+QBQg+CUADQCPAMBKBFQBKBFAZBAQAaBDgCAFIAcgBIggAQIgRgGQg6AFhjAGQhVAFhWAAIgdAAg");
	this.shape_2.setTransform(-158.6,128.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#656566").s().p("Ak3BrQAZhCBKhCQBKhECOgNQCggCBRBGQBRBFgQBMg");
	this.shape_3.setTransform(200.1,127.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6C2B0").s().p("ABwAIQhkgIiEgCQiGgDhmABIhuABIAAgKIBugBQBmgBCHADQCDACBlAKQCTAKBkgIQBkgGAFgDIACAIQgFADhmAIQgnADguAAQhJAAhagHg");
	this.shape_4.setTransform(121.6,146.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6C2B0").s().p("AiECXQhjgGg6gFIgRAGIgggQIAdABQgCgFAZhDQAZhABKhFQBKhFCPgMQCUgDBRA+QBQA+gBBHQgBBIhgAeQhGAQhnABIgdAAQhWAAhVgFg");
	this.shape_5.setTransform(197.5,132.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBD4BD").s().p("AgsABQALgKAjgBQAdAAAPAKQgNAKghABQgegBgOgJg");
	this.shape_6.setTransform(4.3,-108.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5532C6").s().p("AgxAAQAEgQAtgCQAuACAEAQQgEARguACQgtgCgEgRg");
	this.shape_7.setTransform(4.5,-108);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5A4C47").s().p("AhOCIQhIgBiCgFQjLgNh2glQh3glgDgFIgEijQAyBBCYAkQCZAhEYAOQDJAJCzgZQCygWB3goQB2gpAagoIgICbQgEAGh7AuQh8AtjMAOQiBAFhIABIhHABIhIgBg");
	this.shape_8.setTransform(5.9,79.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#736A58").s().p("AhOCJQhIgCiCgFQjLgMh2glQh3glgDgFIgEisIBjAAQCKA2CPATQCOATBigBQBhAAAFgBQAEABBkAAQBlAACTgTQCTgTCLg2IBggDIgICdQgEAGh7AtQh8AujMANQiBAFhIACIhGABIhJgBg");
	this.shape_9.setTransform(5.9,79.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AAA599").s().p("AgBDGIgMgDQgLgEgHgKQA0gfgFg1QgFg0gbgyIgthUQgYg5AigoQATgRAlAJQAoAOAOArQANAqAAAoQAAAngBADIgTgRQAJiAg5gWQgVgLgUAPQgTAPgDAWQABAsAjA3QAhA1AYA8QALAqgNAgQgOAhgQASIgCAAIgBAAg");
	this.shape_10.setTransform(21.2,112.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DBD4BD").s().p("AgUDKIgMgDQgLgEgHgKQA0gfgDg1QgFg0gdgyIgthTQgVgvAVgnQAVgnBAAJQBHAbAJBHQAJBGgEAJIgmAOIgUgRQAKiAg4gWQgagHgFALQgFALACAWQAGAvAqA/QAsA+AGBSQgDBAggANQgZALgHAAIgDgBg");
	this.shape_11.setTransform(23.1,112.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DBD4BD").s().p("AhIDRIAMgqQBtgYgTgsQgTgrg5g6Qg0g9gDg4QgDg4AugYQASgIAVgCQAXACAfAKQAeALASAaQAvBPhGAzIgVAIIgNgnQAIAFAcgcQAJg1gigXQgjgWgOgBQgOgDgbAPQgfAQAMA8QAOAvAnAkIBAA7QAgAlgFAeQgEAegTAUQgoAZgmAKQgmALgEAAIgBgBg");
	this.shape_12.setTransform(69,106.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#757167").s().p("AAMBvIgdglQhAhQAKhFIArgbQgJAKAEAQIAKAmQAJAmAdAcQAfAfAbAWQgOAlgXACQgNgCgLgHgAgBh3IABADQgGABgHADg");
	this.shape_13.setTransform(66.2,96.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AAA599").s().p("AhQDgIAMgtQBtgagTgvQgTgug5g9Qg0hBgDg8QgDg8AugZQAygXA2AWQA3AVAQA9QAGA9gmAXQgnAYgHgBIgNgqQAIAFAcgeQAJg2gjgSQghgSgQAAQgPgEgcALQgcALAYA+QAlBCAsAeQAvAcAVA6QALA2goAfQgoAfgrANQgrANgFAAIgBAAg");
	this.shape_14.setTransform(71,104.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DBD4BD").s().p("AAdDHQgmgKgogZQgSgUgFgeQgEgeAfglIBBg7QAmgkAOgvQAMg8gegQQgcgPgOADQgNABgjAWQgjAXAKA1QAcAcAIgFIgOAnIgVgIQhFgzAvhPQASgaAegLQAegKAYgCQAVACASAIQAuAYgDA4QgDA4g0A9Qg6A6gTArQgTAsBtAYIAMAqIAAABQgEAAgngLg");
	this.shape_15.setTransform(-59.1,106.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#757167").s().p("AhIBRQAbgWAfgfQAdgcAJgmIAKgmQAEgQgJgKIArAbQALBFhABQIgeAlQgLAHgNACQgXgCgOglgAACh0IAAgDIAMAHQgHgDgFgBg");
	this.shape_16.setTransform(-56.3,96.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AAA599").s().p("AAgDTQgrgNgogfQgogfALg2QAVg6AvgcQAsgeAlhCQAYg+gcgLQgcgLgPAEQgQAAghASQgjASAJA2QAdAeAHgFIgNAqQgHABgmgYQgngXAGg9QAQg9A4gVQA1gWAyAXQAuAZgDA8QgDA8g0BBQg5A9gTAuQgTAvBtAaIAMAtIgBAAQgFAAgrgNg");
	this.shape_17.setTransform(-61.1,104.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DBD4BD").s().p("AAADGQgRgSgNghQgOggAMgqQAXg8Ahg1QAjg3ACgsQgDgWgUgPQgUgPgUALQg6AWAKCAIgUARQgBgDAAgnQAAgoANgqQAOgrAogOQAlgJAUARQAiAogZA5IgtBUQgbAygFA0QgFA1A0AfQgHAKgLAEIgMADIgBAAIgBAAg");
	this.shape_18.setTransform(-10.9,112.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#757167").s().p("Ag0BhIArhLQATghABgcQAHgogbABQgFgOgIgJQA0ABAQAkQAQAlgTApIguBYg");
	this.shape_19.setTransform(-8.9,102.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AAA599").s().p("AgODAQgggNgEhAQAGhSAsg+QArg/AGgvQABgWgFgLQgFgLgaAHQg4AWAKCAQgNAMgGAFIgmgOQgEgJAJhGQAJhHBGgbQBBgJAUAnQAVAngUAvIguBTQgcAygGA0QgDA1A1AfQgHAKgLAEIgNADIgCABQgHAAgZgLg");
	this.shape_20.setTransform(-12.7,112.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DBD4BD").s().p("AgXCfIgCgqQBBgJAGguQAFgvgYgwQgXgygRgUQgZgZgUAAQgUABgBACIgGgSQBRgKAFgGIAWAnQAUAmAYA9QAhBKgZAoQgYAngkAOQggAOgFAAIgBgBgAgXCfIAAAAIAAAAIAAAAg");
	this.shape_21.setTransform(63.5,102.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DBD4BD").s().p("AgOCSQgkgOgZgnQgYgoAhhKQAYg9AUgmQAUgmACgBQAEAGBSAKIgGASQgBgCgUgBQgUAAgZAZQgRAUgYAyQgXAwAFAvQAFAuBCAJIgCAqIgBABQgFAAgggOgAAYCfIAAAAIAAAAIAAAAg");
	this.shape_22.setTransform(-52.2,102.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5A4C47").s().p("AmCCSQjFgnhcguQhcgvABgEIAAipQAlAeBmAvQBmAwCpAfQCpAdDugTQDtgPC5ghQC6giBrhgIABC3QADACg0AfQgzAeiMAkQiLAlkFATQhiAFhVAAQjBAAiJgag");
	this.shape_23.setTransform(6,136.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4BEAD").s().p("Ag8AgQARhAAwgBQAyAAAGAFQhXAAgMAcQgNAeAFAEg");
	this.shape_24.setTransform(0.4,-79.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0E1D3F").s().p("AkXAlQAcgtBEgqIBNBYQgGALAAAOQAAAMAFALIjNAJQAFgLAcgvgABUA/QAAgTgMgQIBXhdQBZAqAhAxQAhAzgBAFIjpAAQAEgJAAgKgAiIhIQAugRBBgEQBKgEA6APIhMBSQgVgHgXAAQggABgZAKg");
	this.shape_25.setTransform(4.6,-84.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#772029").s().p("AhPgIIAGgPICZAgIgGAPg");
	this.shape_26.setTransform(49.5,-17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#772029").s().p("Ah8CDICSiEIgBgBIBdiLIALAJIhXCCIgCACIABADIiTCLIgOgLg");
	this.shape_27.setTransform(40.6,-107);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8C2F3C").s().p("AgYAEIgKi6IATAmIAECRIAuCwIgNAFg");
	this.shape_28.setTransform(-0.7,-117.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#772029").s().p("AhCgVIAAgRICFA+IgFAOg");
	this.shape_29.setTransform(48.1,29);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#772029").s().p("AhIAbICQhGIAAARIiQBGg");
	this.shape_30.setTransform(-37.6,27);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8C2F3C").s().p("AhygFIDkgDIABAOIjlADIAAgOg");
	this.shape_31.setTransform(-56.3,30.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#772029").s().p("AhCAqICEhhIABATIh8Bcg");
	this.shape_32.setTransform(-36,73.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#772029").s().p("AhHADICOgUIABATIiNARg");
	this.shape_33.setTransform(-38.3,-16);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8C2F3C").s().p("AhHAOICKgtIAFANIiPAyIAAgSg");
	this.shape_34.setTransform(48.9,-54.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8C2F3C").s().p("Ah3AHIABgNIDuAAIgBANg");
	this.shape_35.setTransform(68.3,-56.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#772029").s().p("AhLgSIAFgNICSAtIAAASg");
	this.shape_36.setTransform(-39.3,-55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#772029").s().p("AhPgbIAAgYICfBSIgBAGIgHAPg");
	this.shape_37.setTransform(48.8,70.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8C2F3C").s().p("Ah5gDIDzgHIgBANIjxAIg");
	this.shape_38.setTransform(67.3,31.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8C2F3C").s().p("Ah8gCID5gIIAAANIj4AIg");
	this.shape_39.setTransform(68.1,-17);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8C2F3C").s().p("AhxgCIDigIIABANIjiAIg");
	this.shape_40.setTransform(-56.7,-14.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8C2F3C").s().p("Ah0gDIDogHIAAAOIjnAHg");
	this.shape_41.setTransform(-57.9,-56.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8C2F3C").s().p("AgLASQgtgfgrgvQgrgvgFgHIAKgLIAvA1QArAuAsAeICNBtIAKAFIgRAIg");
	this.shape_42.setTransform(-37.2,-101.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8C2F3C").s().p("AFtg+QiKh2jkAAQjQgBiHBkQiGBigfCVQAUifCIhtQCJhuDZABQDnAACJB2QCKB0ADCeIgEAfQgEieiJh0g");
	this.shape_43.setTransform(5.4,-100.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#772029").s().p("ArhDEIgNofQgEisgCg8IgFhpQgEhFBSh8QBSh9CphsQCohtEBgTQD9AGCrBpQCqBpBXCCQBWCBACBQIABBqIgEDoIgMIZIgYQIIjxAGIACiWIAFlzIAHoxIAHoFIADkgQgEieiJh2QiKh2jkAAQjnAAiKB4QiLB4gHCqQgBA6ADDLIAIHWIALISIAJGvIAECzIjnAJIgYwTg");
	this.shape_44.setTransform(5.4,-15.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8C2F3C").s().p("ArhDFIgNogQgEirgCg+IgFhoQgEhFBSh9QBSh8CphtQCohsEBgTQD9AGCrBpQCqBpBXCCQBWCBACBQIABBrIgEDmIgMIaIgYQIIjxAGIACiWIAFlyIAHoyIAHoFIADkgQgEieiJh2QiKh2jkAAQjnAAiKB4QiLB5gHCoQgBA7ADDKIAIHXIALISIAJGwIAECyIjnAJIgYwSg");
	this.shape_45.setTransform(5.4,-13.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3A1313").s().p("AErPMIAEk3IAAgDIAAgbIAAgGIABgWIAAgRIABgNIAAgPIAAgcIAAgBIAAgaIABgMIAAgOIAAgUIAAgdIAAgDIABgiIAAg8IAAgIIABgXIAAgMIAAgWIAAgMIAAgYIAAgMIAAgXIAAgMIABgWIAAgQIAAgUIAAgHIABhOIAAgUIAAgNIAAgTIAAgTIAAgOIAAgVIAAgOIABgVIAAgLIAAgWIAAgMIAAgVIAAgOIAAgSIAAgNIAAgiIAAgQIAAgKIAAgVIAAgOIAAgQIAAgPIAAgOIAAgOIAAgQIAAgMIAAgQIAAgMIAAgOIAAgMIAAgPIAAgKIAAgQIAAgJIgBgXIAAgEIAAgRIAAgIIAAgNIAAgIIgBgLIAAgIIAAgKIAAgHIgBgKIAAgGIAAgJIAAgGIAAgHIAAgFIgBgIIAAgDIgBgKQgLhihAg3QhAg3hUgXQhTgXhEgBIgQAAIgDAAQg7AEhAAaQhAAbg1AqIgbgWQACgFBAgqQBAgqBsgWIANgjIAfAeQBNgHBZAfQBbAfBgBYQAEABAfA8QAfA9gCBuIgCA/QgBA3AMAMIgJA0IAAEnIgCB0QgDBtACBtQABBuALALQAAAAgXAvQgHAVAABXQgBBWABBSIACBXIgSD0g");
	this.shape_46.setTransform(10.5,-6.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3A1313").s().p("AhrPUQgBgVgIgFIgGgNIgGjCQAxg8AaifQAaieAKjPQAJjNABjOIgJgFIAJgCQAAi8gDiTIg0g4IA0AHQgDioAFgjQAPhRAggYQAZgjATgNQAUgNABAAIAYARQhdBGgIBYQgBAhABB6IAEEpIAHFxIACBPIAHF9IAHEgIACByIiMCfg");
	this.shape_47.setTransform(-34.5,9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3A1313").s().p("AhMMgIADidIAEl+IAFnWQACjxgBi6QgBi6gEg+QgDgjgLgeQAhALAPAuQAHArgDDYQgDDYADEYQACEXAaDsQAWDtA/BTIgGDBIgFANQgJAHAAARQAAARgKAFg");
	this.shape_48.setTransform(48.2,14.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#541E1D").s().p("AFmQAIACidIAFl9QADjmACjyQACjvgBi6QgBi6gEg+QgLhihAg3QhAg4hUgXQhUgWhEgCQhuABhzBLQh0BKgMBlQgBAtADC0IAHGpIAJHeIAIGJIAECjIiOCeIgvg5IgGieIgNmFQgIjsgGj+QgHj9gDjQQgDjQAEhhQAKiZBIhlQBIhlBcg2QBcg2BHgKQBqgWCRAAQCTAACYBpQBgBSAjB/QAkB/ACBlQADBmgDAGIg0ZrIgXA+g");
	this.shape_49.setTransform(4.5,-8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C4BEAD").s().p("AnfCTQgOgyAOgoQAOgpAFgGQAFgJBAg3QBAg6BBg5QBAg4AIgFICFADQB2ADB8AIQB9AJAYAQQARAXAkBZQAkBXAfBTIAhBaIiKAlQgFichhhAQhghChigNQhggMgHADQizAhhHBKQhGBNgKBCQgKBCAEAFQhPgigOgyg");
	this.shape_50.setTransform(6.5,-89.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DBD4BD").s().p("AmXBbQAAhgBlhSQBmhSDHgHQBrgEBtAeQBuAeA5BgQAuBhgYAsQgYAtgHgBQi/gWilADQiiADhlAMQhmALgDACQgDAGgXABIgBAAQgWAAgDhWg");
	this.shape_51.setTransform(4.2,-85.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DBD4BD").s().p("AmXBbQAAhgBlhSQBmhSDHgHQBrgEBtAeQBuAeA5BgQAuBhgYAsQgYAtgHgBQi/gWilADQiiADhlAMQhmALgDACQgDAGgXABIgBAAQgWAAgDhWg");
	this.shape_52.setTransform(4.2,-85.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#890404").s().p("AALMzQhAgBgdgaQgdgaABgDQAzAbAQgNQAPgMgBgEQARgWAOhhQARhiANh4QANh3AHhaIAIhcIAUgHQAPgGgjAFQglAEgFgLQgGgLADgBQAPgGAJgTQAIgRADgSQAAAAAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAIACgCIgFgHIgDgVQgDgcAAh+IAAkaIACkPIABh4IACgCIACgCIA+APIACG3IgvSsQgIgDgtgDg");
	this.shape_53.setTransform(36,13.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#890202").s().p("AAFgSQAGgzgBgEQARBxgWAXQgIADgOAIQARgrAFgxg");
	this.shape_54.setTransform(8.6,-63.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#890202").s().p("AADBAIgLgKIADh6IADA/QACA3AHAQIACADIgGgFg");
	this.shape_55.setTransform(-4.6,-64);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A00505").s().p("AgRA+QAWh/AXhnIAXhsQgPBlgYCBQgWB9gUBhIgUBlQAIhWAZiBg");
	this.shape_56.setTransform(35.7,59.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A00505").s().p("AAsCpQgbh4ggiLQgiiLgWhEIAiBiQAgBeAhCHQAjCJAJCDIgciBg");
	this.shape_57.setTransform(-23.4,53.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A00505").s().p("AgNAAQgEivAGhyIAEhHIABBZQACB1AECSIAKD+IAGBzQgai7gDiug");
	this.shape_58.setTransform(38.4,-24.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A00505").s().p("AgfAmQgZikAAhvQgBhuACgFQAKFMAzDBQAlCIAPAsQhBifgYicg");
	this.shape_59.setTransform(31.5,-30.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#890404").s().p("AgJMTIABgCIgHiaQgHiUgJjfQgIjfgFjjQgFjmADiqQADipAQgqQAXAUAPACQANAogXCoQgDAkACBjIACDMQACBpgEA3IgDAFIADAEQgDASgFADQAFAFAKAgQAMAegmAFIASBuQAOBpAQCOQAQCOADB2QADB2gaAgIgFAFQgRgFgMgKg");
	this.shape_60.setTransform(-29.3,14);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A00505").s().p("AgEC0QAhiUAHlVQABAGABByQAABygRCRQgPCLgrBlQAJgeAYhkg");
	this.shape_61.setTransform(-25.1,-31.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#BF3000","#890404"],[0,1],1,-15.1,18.2,-94).s().p("AAzM8QhAgBgdgaQgdgaABgEQAXg2AkiVQAiiVAdiGIAfiPQgEABgYgCQgYgCgEgSQAEgWAcgbQAcgbAEgCQh1ikg0jKQgzjLgLiWQgLiWACgHQAAAEAdAMQAdAMAxgcQACAEAnATQAlASAzgYIA+APIACG3IgvSsQgIgEgtgCg");
	this.shape_62.setTransform(32.1,10.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#BF3000","#890404"],[0,1],4,-15.6,21.5,-95.8).s().p("AhsLDQghhwgDiQQgDiRAIhtQAIhuACgGIAht6IAhAeQA0ApATggQAVgfgBgIQA+A4AcggQAbggAAgJQACAIgECQQgECQgnC1QgnC3hlB6IAPATQANATAEAWQABAXgPARQgPAQgDABQAEAIAmCEQAoCDAmClQAnClgDBrQAAAEgdAVQgdAUg3ABQhOgJghhvg");
	this.shape_63.setTransform(-25.7,11.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0E1D3F").s().p("AAIBOIguhFIgDh/IBMBsIAHCBQgMgJgWggg");
	this.shape_64.setTransform(36.5,8.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1A2D5E").s().p("AheHdIAUj1IgEoBIgGjSICzCoIguMvg");
	this.shape_65.setTransform(40.4,31.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AAA599").s().p("AgeANIgFiUIBGCHIgBCIQgihAgeg7g");
	this.shape_66.setTransform(30.1,-4.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DBD4BD").s().p("AhKHJIgjwkIDFGEIAWMvIi2AEg");
	this.shape_67.setTransform(36.8,20.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0E1D3F").s().p("AhRi4ICthmIAFCAIgUBzQgbCUg5BXQg7BWgeAJg");
	this.shape_68.setTransform(-21.7,-12.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0E1D3F").s().p("AhPjuQAAgDAVAcQAVAcAkBnQAjBkAuDcIgzABg");
	this.shape_69.setTransform(-21.3,48.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1A2D5E").s().p("AiiFIIAZroIENi2IAjSoIlNAFg");
	this.shape_70.setTransform(-25.8,12.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#BF3000","#890404"],[0,1],1.1,-5.5,4.8,-22.6).s().p("AgQBhQgcgQgXgHQgYgCgOAJQgNAJgBACIkbgbQgHgGgfg2QgggzAcgTQAYgGCJgGQCJgHCpgGIEsgKICHgEIgDCaIjigUQgMBHgdACQgeADgEgFQgjgbgUgEQgUgEghAaQgVANgRAAQgMAAgMgIg");
	this.shape_71.setTransform(0.9,-64.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6B5415").s().p("AnXAXICOg7QAGgCAsgBQAtgBAGAUQAEATAjgGQAjgGAXgDIBMgCIB+gEIBpgCQAvgBADgFQADgEAoACQA1AHBIAdQBHAfAHAFg");
	this.shape_72.setTransform(6.7,91.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#AAA599").s().p("Ag2AbIBWjkIAXFsIhcAng");
	this.shape_73.setTransform(-15.9,-45.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DBD4BD").s().p("AiDH3Ig0o4ICrh8ICXoGIAtWCIk0AFg");
	this.shape_74.setTransform(-22.3,6.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0E1D3F").s().p("ACiLfQAhg4ALibQAMibAAiSQAAiRgBgcQABgTgJhbQgJhegZhuQgYhvguhGQgthGhHAbQg8AagKgCIgWgEQgMgBg9AaQgyAag7BnQg7Bog1B+Qg2B8giBdIgkBhQgVmjBNjVQBMjUByhMQBzhMBbgLQBbgKCLBOQCLBOBuBUQBuBUAGAHIgBCxIgEGHQgDDggECwQgDCwgGAXQgPAVhfAXQhfAXhSABIgDAAQhOAAAZgsg");
	this.shape_75.setTransform(7.8,12.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1A2D5E").s().p("AoDPZIAA+xIQHAAIAAexg");
	this.shape_76.setTransform(6.7,-4.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6B5415").s().p("AnqAzQgRgzgjAVQgVANgKAJIBJhKIB+gwIMhAHIAfALQAtAJADACIBEBuQg/AhghgWQgggWgUglQgUgjgYgMQgtgNg0gBQg0gCguABQhRAAh5ADQh7ADhaAKQhOANg3AkQg2AnggAUQgKAGgIAAQgRAAgIgdg");
	this.shape_77.setTransform(2.5,102.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6B5415").s().p("AgjC+QjagDjEgVQjEgWh5gnIAAiwIC0hrIA/ASIAfAJIA5glQgQAMgnAoQgnApAIApQAXApB9ASQB9AUB4AHQB4AGAIgBIBmgJQBggJB1gTQB1gSBDgfQBVgxgMgqQgMgpgcgDICsAIIAOAFIAxBbIAACKQgoAhhJAdQhlAni6ARQieAPi1AAIg/gBg");
	this.shape_78.setTransform(6,125.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8E7520").s().p("AmCEYQjGgphcgwQhbgwAAgFIAAi7IGykCIKrAJIFvCVIAyBbIAADGQAJAHiHA8QiGA9l8AiQhjAGhVAAQjBAAiIgcg");
	this.shape_79.setTransform(6,123.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#656566").s().p("ADABHQhagLhygVQh0gUhTgdQhTgeAJgoICnADIGVCeIhfgKg");
	this.shape_80.setTransform(-45.1,144.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#656566").s().p("AB3hNICngDQAIAohTAeQhSAdh0AUQhyAVhaALIhfAKg");
	this.shape_81.setTransform(56.7,144.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF2D00").s().p("ApDUuIjiAHMgAUgiPQgEgJAshwQAthwCPh2QCOh2EigZIG8AoQAFgCBTAZQBTAaBsBMQBsBNBQCZQBRCYgBD9IgNJEIgPJpIgNHpIgGDHIkEAUg");
	this.shape_82.setTransform(7.3,3.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F1EEDB").s().p("EgvUABKIAAi2MBepAAkIAAC1g");
	this.shape_83.setTransform(-0.7,146.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8F7521").s().p("EgvUAFUIAAqnMBepAAkIAAKDg");
	this.shape_84.setTransform(-0.7,169.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#F4FF00","#FF2D00"],[0,1],0,0,0,0,0,365.3).s().p("EgvUAf4MAAAg/vMBepAAAMAAAA/vg");
	this.shape_85.setTransform(0.7,0);

	this.addChild(this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.7,-204,607.4,408.1);


(lib.baloon_cvr = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2082D").s().p("ACIDYQAFiBgBiTQgKhdhWg5QhVg6hVgaQhVgagHAAIAGgLQCEg/CTBqQB/BtASCWQASCUgaBzQgaB0gGAGQgpgKAFiCg");
	this.shape.setTransform(-126.4,-48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDCE2").s().p("AgzgBQgBhBAYgmQAYgmAEgBIA0ACQgwAigEBDQgEBCAKA5QAMA6ACADQhGhRgBhAg");
	this.shape_1.setTransform(-157.9,-54.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0024").s().p("ADmFeQhCgMhrghQhqghhkg7Qhjg7gphaQgyiHA8h8QA9h8B7gtQB5guCHBiQB/BtASCWQARCTgZB0QgaBzgGAGIAdAOIg6Aig");
	this.shape_2.setTransform(-135.8,-46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADzGkQgkgyhggzQjYhmguiSQgohxgBhEQgBhEAMg2IAFgfQADhGgyhBQgyhBgIgGIADgEQALAIAyBCQAxBBgDBIIgFAfQgMA2ABBDQABBDAoBxQAtCPDWBlQBhA1AlAxQAkAygBAGIgEACQABgFgkgxg");
	this.shape_3.setTransform(-81.6,35.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2082D").s().p("AkvEqIAcgNIgBgFIAZALIAKgIIBZgMQBOgKBlgtQBoguBchuQBWh4gZhqQgahpgyg9QBBBEAWBeQAXBeglBeQgpBahkA6QhjA7hqAiQhsAghBANIgHAdg");
	this.shape_4.setTransform(136.7,-24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDCE2").s().p("AgFBTQAKg5gFhCQgDhDgwgiIA0gCQAEABAYAmQAYAmgBBBQgBBAhGBRQACgDAMg6g");
	this.shape_5.setTransform(157.9,-37.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0024").s().p("AkmFZIAcgOQgFgGgahzQgah0ASiTQASiWB+htQCIhiB5AuQB7AtA8B8QA9B8gyCHQgpBahkA7QhjA7hqAhQhsAhhBAMIgHAdg");
	this.shape_6.setTransform(135.8,-29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AkZHXQgBgEAkgzQAlgyBhgzQDWhmAtiPQAohxABhDQABhDgMg2IgFgfQgDhIAxhBQAyhBALgJIADAEQgIAGgyBAQgyBCADBGIAFAgQAMA2gBBDQgBBEgoBxQguCRjYBnQhgAzgkAyQgkAyABADg");
	this.shape_7.setTransform(91.4,37.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-167.1,-84.5,334.4,169.1);


(lib.balloon_head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(121,0,0,0.353)").s().p("Ai3GRIASgaQA/gcBChLQBVhmAYglQBHhvAJhZQAOiLhNhWQhJhShIgbQBZAbBCBFQBDBGAQBmQAJBjg5BiQg5BlhMBSQhMBTgyArIAJAdg");
	this.shape.setTransform(12,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,202,202,0.353)").s().p("ABCA7QgbhPgVgcQgpg7g+gFQA1gOAtAUQAgAOAWAwQAZA0gHBuIgTg7g");
	this.shape_1.setTransform(13.9,-19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],11,-24.2,0,11,-24.2,57.6).s().p("Ag/GXIASgaQgIgChQhYQhQhXg7iKQgMgcgHgcQgehwAsh+QBFiZCBgWQB/gWBzBNQByBNAaCQQAGBFgaBEQgLAegRAeQg5BlhMBSQhOBTgwArIAHAdg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(250,207,207,0.753)","rgba(88,1,1,0.502)"],[0,1],-20.8,0,18,0).s().p("AgKCDQhKhAh7jWQBMB+BaA2QBYA3A+gfQA+ggAZgUQAZgTgeAlQgdAmg/A4QgjAfgfAAQgYAAgTgRg");
	this.shape_3.setTransform(-6.6,21.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-40.9,60.9,81.9);


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


(lib.arrowhead = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAaIAAgzIAbAAIAAAzg");
	this.shape.setTransform(1.4,2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.9,5.3);


(lib.woodBoxDisplay = function() {
	this.initialize();

	// Layer 1
	this.promptDisplay = new lib.wood_box();
	this.promptDisplay.setTransform(151.7,56.2,1,1,0,0,0,3.6,11.2);

	this.beforeAndAfter = new lib.wood_box();
	this.beforeAndAfter.setTransform(148.1,92.1);

	this.addChild(this.beforeAndAfter,this.promptDisplay);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-30.7,303.8,135.7);


(lib.scorePanel = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("", "bold 16px 'TimesNewRomanPSMT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 62;
	this.text.setTransform(53,16);

	// Layer 3
	this.instance = new lib.flower_2();
	this.instance.setTransform(56.9,-5.5);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18,-48.1,77.8,89.2);


(lib.bground_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F7F7F").s().p("AgOANQgVgIgBgCQAZgaAWAMQAYALACACQgWAOgQAAQgHAAgGgDg");
	this.shape.setTransform(-138.6,101.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F7F7F").s().p("AgkAKIAEgEQgBgDASgMQAPgNAlAHQgBAEgUATQgKALgMAAQgNAAgRgJg");
	this.shape_1.setTransform(-161.6,88.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D5A9").s().p("AAKAJQgFgIgFgEQgJgDgCAEIAAgBQADgFAFAAQANADACAOQgEgHACAHg");
	this.shape_2.setTransform(198.9,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8D5A9").s().p("AgHAMQAIAAAEgIQABgJgIgFQABAAAAAAQAAAAAAAAQgBgBAAAAQgBgBAAgBIAAAAQALAHAAAMQgDAIgFAAIgHgCg");
	this.shape_3.setTransform(201.9,95.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3230").s().p("AgQgXIAgAnQABABAAAHQgNgUgUgbg");
	this.shape_4.setTransform(185.5,98.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F774D").s().p("AhcgEQA4gzBJgMQBEgMAzAlQgjgYgtgBQgzAAgrAVQgpATgnAgQgmAigTAgQgCgMBBg/g");
	this.shape_5.setTransform(206.4,110.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22773C").s().p("AgFgFQAGgDAFAPIgBAAQgFAAgFgMg");
	this.shape_6.setTransform(189.6,77.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#22773C").s().p("AgFAHQAFgPAGADQgGAMgEAAIgBAAg");
	this.shape_7.setTransform(184.8,79.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22773C").s().p("AgIAAQAFgHAMAJQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQgFAAgIgEg");
	this.shape_8.setTransform(182.8,81.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#22773C").s().p("AgNAAQABgCAKgDQAJgDAHAMQgBACgEAAQgIAAgOgGg");
	this.shape_9.setTransform(181.6,79.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161106").s().p("AgbAJQgDgDAHgCQgCgEAGgGIALgIIAOAFQAIgEAHAHQANAOgJACQgIAFgNAAQgMAAgTgGg");
	this.shape_10.setTransform(189.2,118.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005F2D").s().p("AiEA6QAMhEBHgyQAmgbA/gEQAxgDAgAaQgWgQgfgCQgsgGgnAPQhEAYgcA1QgeArgBAxg");
	this.shape_11.setTransform(202.6,110.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02441F").s().p("AABgEQgNgcgIgNQAnArADAsIgDAEQgDgYgPgag");
	this.shape_12.setTransform(186.4,112.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_13.setTransform(183,94.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_14.setTransform(180.8,93.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAEA7A").s().p("AAIAIQgIAAgGgDQgFgIAKgFQAIADABAJQgDgGAEAKg");
	this.shape_15.setTransform(179.6,92.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAEA7A").s().p("AgJAAQAFgIAJABQgGADALgCIgBABQgCAGgGAGIgCABQgHAAgBgIg");
	this.shape_16.setTransform(179.6,94);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAEA7A").s().p("AgFAGQgEgJAHgGQAIgCABALQgEAFgFAEIgBACQgCgLAAAGg");
	this.shape_17.setTransform(181.5,92.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAEA7A").s().p("AgIAAIgCAAQAKgFgGACQAHgGAIAFQAFAHgKAEQgHgCgFgFg");
	this.shape_18.setTransform(182.2,93.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAEA7A").s().p("AgGAGQgCgGADgHIgBgCQAJAHgEgFQAIAEAAAIQgDAFgEAAQgCAAgEgEg");
	this.shape_19.setTransform(181.5,94.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAEA7A").s().p("AgCAAIABAAIADAAIABAAg");
	this.shape_20.setTransform(180.8,93.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_21.setTransform(200.6,93.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFDBF").s().p("AALAMQgLABgKgGQgHgNAOgGQANADADAOQgGgIAHAQg");
	this.shape_22.setTransform(198.8,91.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFDBF").s().p("AgOAAQAGgMAPABQgJADAPgBIACAAIgCACQgCAJgJAJIgEABQgLAAgBgMg");
	this.shape_23.setTransform(198.7,94.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFDBF").s().p("AgIAJQgGgOALgKQANgDABARQgGAJgIAGIgBACQgEgRAAAKg");
	this.shape_24.setTransform(201.7,91.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFDBF").s().p("AgNAAIgCAAQAPgIgKAEQAMgKANAHQAGANgPAFQgKgDgJgIg");
	this.shape_25.setTransform(202.7,93.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFDBF").s().p("AgJAJQgDgJAEgMIgBgCQAOALgHgJQANAHAAANQgFAHgGAAQgDAAgGgGg");
	this.shape_26.setTransform(201.7,95.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77705E").s().p("AkkAMQgGgMgHgKIBkgBIDNgBIDOgCIBkAAIgMAdg");
	this.shape_27.setTransform(191.1,122.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BCB5A4").s().p("AkhguIJDADQgQArgDAsIhXAAIi3ABIi0ABIhWABQgCgcgWhBg");
	this.shape_28.setTransform(191.3,129.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFDBF").s().p("AgDABIABgBIAEAAIACABg");
	this.shape_29.setTransform(200.5,93.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1EEDB").s().p("AgMACIADgDIATAAIADADg");
	this.shape_30.setTransform(215.5,135.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#51A569").s().p("AipBFQAWgkAogoQApgrAxgWQAvgTA5AKQAyAJAgAiQglgkg0gCQg3gDguAXQg0AYgsApQgsArgHAhg");
	this.shape_31.setTransform(206.8,111.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFDBF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_32.setTransform(189.1,83.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_33.setTransform(185.4,85.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFDBF").s().p("AAFAFQgFAAgEgDQgEgEAIgDQAEACACAFQgBgBAAgBQgBAAAAABQAAAAABACQAAABABACg");
	this.shape_34.setTransform(184.6,85.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFDBF").s().p("AgGAAQADgEAGAAQgBAAgBABQAAAAAAAAQABAAABAAQACAAACAAIgBABQgBADgEAEIgBAAQgFAAgBgFg");
	this.shape_35.setTransform(184.6,86.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFDBF").s().p("AgDAEQgDgFAFgFQAGgBAAAHQgDADgCADIgBABQAAgCgBgBQAAgCAAAAQgBAAAAAAQAAABAAABg");
	this.shape_36.setTransform(185.9,85.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFDBF").s().p("AgFAAIgBAAQACAAABAAQABgBAAAAQABgBgBAAQAAAAgBABQAEgFAGAEQADAEgIADQgDgCgEgDg");
	this.shape_37.setTransform(186.3,85.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFDBF").s().p("AgDAEQgCgEACgEIAAgBQABABACAAQAAABAAAAQAAAAAAAAQAAgBAAAAQAFADAAAEQgCADgDAAQgBAAgCgCg");
	this.shape_38.setTransform(185.8,86.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_39.setTransform(194.4,99.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFDBF").s().p("AAFAFQgFABgEgDQgEgFAIgDQAFABABAGQgBgBAAAAQgBgBAAABQAAAAABACQAAABABACg");
	this.shape_40.setTransform(193.5,99);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFDBF").s().p("AgGAAQAEgFAFABQgBAAgBAAQAAAAAAABQABAAABAAQACAAACAAIgBAAQgBAEgEAEIgBAAQgFAAgBgFg");
	this.shape_41.setTransform(193.5,100.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFDBF").s().p("AgDAEQgDgGAFgEQAFgCABAIQgDAEgDACIAAABQgCgHAAAEg");
	this.shape_42.setTransform(194.9,98.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFDBF").s().p("AgGAAIgBAAQACAAACAAQABgBAAAAQAAgBAAAAQAAAAgCABQAEgFAHAEQADAFgIACQgEgBgEgEg");
	this.shape_43.setTransform(195.3,99.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFDBF").s().p("AgDAEQgCgEACgFIAAgBQABABACABQAAABAAAAQAAAAAAgBQAAAAAAgBQAFADAAAFQgCAEgDAAQgBAAgCgDg");
	this.shape_44.setTransform(194.8,100.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#22773C").s().p("AgDgIQABAAADAEQAGAEgEAJIgBAAQgEAAgBgRg");
	this.shape_45.setTransform(193.2,102.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#493E3B").s().p("AggCCIAAgBQACgEAOg3IAtjLIAEAFIgOA+IgZB1QgMA+gCATQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgDAAgHgEg");
	this.shape_46.setTransform(192.9,106.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E8E6BC").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_47.setTransform(201.7,89.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E8E6BC").s().p("AAFAFQgFABgEgDQgEgFAIgDQAFABABAGQgBgBAAAAQgBgBAAABQAAAAABACQAAABABACg");
	this.shape_48.setTransform(200.8,88.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E8E6BC").s().p("AgGAAQADgFAGABQgBAAgBAAQAAAAAAABQABAAABAAQACAAACAAIgBAAQgBAEgEAEIgBAAQgFAAgBgFg");
	this.shape_49.setTransform(200.8,89.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E8E6BC").s().p("AgDAEQgDgGAFgEQAFgCABAIQgDAEgDACIAAABQgCgHAAAEg");
	this.shape_50.setTransform(202.2,88.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E8E6BC").s().p("AgGAAIgBAAQACAAACAAQABgBAAAAQAAgBAAAAQAAAAgCABQAEgFAHAEQADAFgIACQgEgBgEgEg");
	this.shape_51.setTransform(202.7,89.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E8E6BC").s().p("AgDAEQgCgEACgFIAAgBQABABACABQAAABAAAAQAAAAAAgBQAAAAAAgBQAFADAAAFQgCAEgDAAQgBAAgCgDg");
	this.shape_52.setTransform(202.1,90.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#493E3B").s().p("AguAwIBjiEIABAEIgwA/QgpA3gLAbQgGAUgBAAQgBAAAIglg");
	this.shape_53.setTransform(199.3,95.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#22773C").s().p("AAAgNQABABAEAJQAEAIgLAJQgIgEAKgXg");
	this.shape_54.setTransform(200.3,90.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#22773C").s().p("AgUABQAAgBALgFQAKgHAVAJQgBACgOAHQgEADgEAAQgJAAgKgIg");
	this.shape_55.setTransform(199.8,96.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#22773C").s().p("AgCAHQgHgHADgOQACgBAHAJQAJAGgIAPQgBAAgFgIg");
	this.shape_56.setTransform(181.3,91.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#22773C").s().p("AgQAAQABAAAMgFQAJgEALAMQgBABgKADIgEAAQgHAAgLgHg");
	this.shape_57.setTransform(181.1,94.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_58.setTransform(178.4,71.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFDBF").s().p("AAIAHQgIABgGgEQgFgHAKgEQAIACABAJQgBgCAAgBQAAAAAAAAQAAABAAABQAAACABADg");
	this.shape_59.setTransform(177.3,70.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFDBF").s().p("AgJAAQAFgHAJABQgGACALgBIgBABQgCAFgGAGIgBAAQgIAAgBgHg");
	this.shape_60.setTransform(177.1,72.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFDBF").s().p("AgFAFQgEgIAHgGQAIgBABAKQgEAFgFADIgBACQgCgKAAAFg");
	this.shape_61.setTransform(179.2,70.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFDBF").s().p("AgIAAIgCAAQADgBACAAQACgBAAgBQABAAgBAAQgBAAgCABQAHgGAIAEQAFAHgKAEQgHgCgFgFg");
	this.shape_62.setTransform(179.8,71.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFDBF").s().p("AgGAGQgCgGADgHIgBgBQAJAGgEgFQAIAEAAAIQgDAEgEAAQgCAAgEgDg");
	this.shape_63.setTransform(178.9,72.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1D6331").s().p("AgBAIQgEgIAFgDIAEgEQgCAPgDAAIAAAAg");
	this.shape_64.setTransform(178.2,71);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#22773C").s().p("AgKgBQAHgIAOAMQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgGAAgLgGg");
	this.shape_65.setTransform(178.1,73.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#22773C").s().p("AgGAEQgJgEAAAAQANgKAIAHQAJAEABACQgJAEgGAAQgDAAgEgDg");
	this.shape_66.setTransform(180.2,72.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#22773C").s().p("AgOgBQABgBALgDQAJgDAIAMQgBADgFAAQgIAAgPgIg");
	this.shape_67.setTransform(176.2,71.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#493E3B").s().p("AAFAgQgMhigNhJIgOhLIADgGQAwECAKBcQAKBcgCgGIgOAEQgChYgOhkg");
	this.shape_68.setTransform(186.3,95.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#493E3B").s().p("AAwBRQgMgfgog/IgwhJIACgFIBiCYIAEAWIAAAJQAAAAgEgLg");
	this.shape_69.setTransform(179.4,75.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#005F2D").s().p("ABHAbQABg2grgtQgagagigLQgagJgXAGQAjgKAlATQAvAaATAkQAjBCgTA/IgQAcQATgpgGgwg");
	this.shape_70.setTransform(181.7,107.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#51A569").s().p("AgQAyQADg2AWgjIAIgJQgRAYgDAbQgIArABAEg");
	this.shape_71.setTransform(192.6,113.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#51A569").s().p("AgTCCQADiYAfhcIAFgPQgIAcgGAeQgLBNgDA8IgDBAg");
	this.shape_72.setTransform(191.3,105);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#377747").s().p("AACAZQgEhFgNhJIgCgOIABAAQAXBlALChIgCABg");
	this.shape_73.setTransform(187.6,96.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#51A569").s().p("AALCvIgChWQgEhSgLhoQgFgogHglIAEATQAeB9ADDNg");
	this.shape_74.setTransform(187.7,99.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_75.setTransform(194.4,80.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_76.setTransform(189.5,75.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFDBF").s().p("AAKALQgKAAgJgGQgHgKAOgFQALADACALQgFgGAGANg");
	this.shape_77.setTransform(192.8,79.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFDBF").s().p("AgNAAQAGgKANABQgIADAPgBIgBABQgCAIgIAIIgDAAQgKAAgCgKg");
	this.shape_78.setTransform(192.7,81.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFDBF").s().p("AgHAIQgGgMAKgIQAMgDABAPQgFAHgIAFIgBACQgDgOAAAIg");
	this.shape_79.setTransform(195.3,79.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFDBF").s().p("AgLAAIgDAAQAOgHgJADQAKgIAMAGQAGALgOAEQgJgCgHgHg");
	this.shape_80.setTransform(196.1,81);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFDBF").s().p("AgHAIQgEgIAEgKIgBgCQANAKgGgIQALAGAAALQgEAGgGAAQgCAAgFgFg");
	this.shape_81.setTransform(194.9,82.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFDBF").s().p("AAIAHQgIABgGgEQgFgHAKgEQAIACABAIQgBgBAAgBQAAAAAAAAQAAABAAABQAAACABADg");
	this.shape_82.setTransform(188.4,74.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFDBF").s().p("AgJAAQAFgHAJABQgGACALgBIgBABQgCAFgGAGIgBAAQgIAAgBgHg");
	this.shape_83.setTransform(188.2,75.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFDBF").s().p("AgFAFQgEgIAHgGQAIgBABAKQgEAFgFADIgBACQgCgKAAAFg");
	this.shape_84.setTransform(190.3,74.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFDBF").s().p("AgIAAIgCAAQAKgEgGACQAHgGAIAEQAFAHgKAEQgHgCgFgFg");
	this.shape_85.setTransform(190.9,75.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFDBF").s().p("AgGAGQgCgGADgHIgBgBQAJAGgEgFQAIAEAAAIQgDAEgEAAQgCAAgEgDg");
	this.shape_86.setTransform(190.2,76.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5A4C47").s().p("AABAIQgBgQgGgPIgBgEIAHAVQAFARADAMIgEAFIgDgUg");
	this.shape_87.setTransform(189.8,75.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#493E3B").s().p("AgJATIAKgYIAJgQIgCADQgGALgDANIgEAQg");
	this.shape_88.setTransform(186.3,84.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3A3230").s().p("AgbAgIAMgSQALgOAGgGIAGgGQgYAdgKAQgAATgYIAJgIIgDAEIgNAMIAHgIg");
	this.shape_89.setTransform(193,83);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#493E3B").s().p("AgcAaQANgQAUgUIAZgYIgDAFQgUARgPAVIgSAag");
	this.shape_90.setTransform(192.8,83.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABIAAgBg");
	this.shape_91.setTransform(189.9,103.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFDBF").s().p("AAFAGQgFABgEgEQgEgFAIgDQAFABABAHQgBgCAAAAQAAgBAAABQAAAAAAACQABABABACg");
	this.shape_92.setTransform(188.9,103);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFDBF").s().p("AgGAAQADgGAHABQgCABAAAAQgBAAABAAQAAAAABAAQACAAACAAIAAABQgBAEgFAFIgBAAQgFAAgBgGg");
	this.shape_93.setTransform(188.8,104.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFDBF").s().p("AgDAFQgEgHAGgFQAGgBABAIQgDAEgEADIAAABQgCgIAAAFg");
	this.shape_94.setTransform(190.4,102.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFDBF").s().p("AgGAAIgBAAQACAAACgBQABAAAAgBQABAAgBAAQgBAAgBABQAFgGAGAEQADAGgIACQgEgBgEgEg");
	this.shape_95.setTransform(190.9,103.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFDBF").s().p("AgEAFQgBgFACgFIgBgCQACACABABQABAAAAABQAAAAAAgBQAAAAAAgBQAGADAAAGQgDAEgDAAQgBAAgDgDg");
	this.shape_96.setTransform(190.3,104.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#493E3B").s().p("AATAUQgigxgqgjIgGgKIA1AzQAuAtAcAjIgHASQgCgFgkgyg");
	this.shape_97.setTransform(182.6,95.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#22773C").s().p("AgNADIAHgFQAGgGANADQAAACgGAFQgFAFgDAAQgFAAgHgEg");
	this.shape_98.setTransform(195.6,101.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#22773C").s().p("AAJgKIgBAKQgCAKgOABQgFgHAWgOg");
	this.shape_99.setTransform(190.1,91.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#22773C").s().p("AgMADQAFgNAYgKQABADgEARQgEATgaACQgBgCAFgQg");
	this.shape_100.setTransform(191.5,103.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#51A569").s().p("AALCBIgChAQgEg9gLhNQgFgdgHgaIAEALQAdBdAECZg");
	this.shape_101.setTransform(187.4,106.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#22773C").s().p("AgDAHQABgPAHACQgFANgCAAIgBAAg");
	this.shape_102.setTransform(190.3,74.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3A3230").s().p("AgDB3IgBgSIgBgdIADgvIACgsQABgPABgpIACgvIACAAIgDBkIgDCMIAAAFg");
	this.shape_103.setTransform(189.8,98.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#493E3B").s().p("AgWDlIAEiZQAEhiAGhVQAHhDAJgdQALgeACABIADAGIgJAhQgJAfgDAxIgDCLIgCDLQgEAEgFAAQgFAAgGgEg");
	this.shape_104.setTransform(190.1,96.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3F774D").s().p("AgCgSQgggQgVgCIAEgBQA/AJAcAgQAJAPAHARIgDACQgYgogfgQg");
	this.shape_105.setTransform(179.1,105.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#51A569").s().p("ABiBZQgRgqgSgmQgTgkgagUQgcgWgigEQgggFgYAgQAWggAhgIQAlgIAbAVQAcAYARArIAiBSIADANg");
	this.shape_106.setTransform(178.5,110.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#161106").s().p("AheAIQhQgBgWgEQgMgDAYgDIA7gEICWABICOABQAsAHgMAAQgNABgFgBIgqADIhQACIhxABIgoAAg");
	this.shape_107.setTransform(190.7,119.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1E1809").s().p("AjigCIAagHIBtABIDHACIBtABIA7ALIonAEIAxgMg");
	this.shape_108.setTransform(190.8,119.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#281A04").s().p("ADYBeIALgOInBADIAJALIg4AAIAKgLIgNAAIgBgFQABgEgKgvQgKgtgZglIAEgIIBsgeIGkAEIBjAWIAEAHIgSAxQgQArgCArIAAAFIgVAAIALAOg");
	this.shape_109.setTransform(191.1,127);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#22773C").s().p("AgJACQAAgKABgCQAPADACAHQABAKgBABIgHAAQgKAAgBgJg");
	this.shape_110.setTransform(188.2,83.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D8D5A9").s().p("AAKAJQgFgIgFgEQgJgDgCAEIAAgBQADgFAFAAQANADACAOQgEgHACAHg");
	this.shape_111.setTransform(-201.4,91.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D8D5A9").s().p("AgHAMQAIAAAEgIQABgJgIgFQABAAAAAAQAAAAAAAAQgBgBAAAAQgBgBAAgBIAAAAQALAHAAAMQgDAIgFAAIgHgCg");
	this.shape_112.setTransform(-198.3,95.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3A3230").s().p("AgQgXIAgAnQABABAAAHQgNgUgUgbg");
	this.shape_113.setTransform(-214.8,98.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3F774D").s().p("AhcgEQA4gzBJgMQBEgMAzAlQgjgYgtgBQgzAAgrAVQgpATgnAgQgmAigTAgQgCgMBBg/g");
	this.shape_114.setTransform(-193.9,110.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#22773C").s().p("AgFgFQAGgDAFAPIgBAAQgFAAgFgMg");
	this.shape_115.setTransform(-210.7,77.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#22773C").s().p("AgFAHQAFgPAGADQgGAMgEAAIgBAAg");
	this.shape_116.setTransform(-215.5,79.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#22773C").s().p("AgIAAQAFgHAMAJQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQgFAAgIgEg");
	this.shape_117.setTransform(-217.5,81.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#22773C").s().p("AgNAAQABgCAKgDQAJgDAHAMQgBACgEAAQgIAAgOgGg");
	this.shape_118.setTransform(-218.7,79.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#161106").s().p("AgbAJQgDgDAHgCQgCgEAGgGIALgIIAOAFQAIgEAHAHQANAOgJACQgIAFgNAAQgMAAgTgGg");
	this.shape_119.setTransform(-211,118.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#005F2D").s().p("AiEA6QAMhEBHgyQAmgbA/gEQAxgDAgAaQgWgQgfgCQgsgGgnAPQhEAYgcA1QgeArgBAxg");
	this.shape_120.setTransform(-197.6,110.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#02441F").s().p("AACgEQgOgcgIgNQAnArADAsIgDAEQgCgYgPgag");
	this.shape_121.setTransform(-213.9,112.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_122.setTransform(-217.3,94.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_123.setTransform(-219.4,93.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EAEA7A").s().p("AAIAIQgIAAgGgDQgFgIAKgFQAIADABAJQgDgGAEAKg");
	this.shape_124.setTransform(-220.6,92.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EAEA7A").s().p("AgJAAQAFgIAJABQgGADALgCIgBABQgCAGgGAGIgCABQgHAAgBgIg");
	this.shape_125.setTransform(-220.7,94);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EAEA7A").s().p("AgFAGQgEgJAHgGQAIgCABALQgEAFgFAEIgBACQgCgLAAAGg");
	this.shape_126.setTransform(-218.7,92.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EAEA7A").s().p("AgIAAIgCAAQAKgFgGACQAHgGAIAFQAFAHgKAEQgHgCgFgFg");
	this.shape_127.setTransform(-218.1,93.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EAEA7A").s().p("AgGAGQgCgGADgHIgBgCQAJAHgEgFQAIAEAAAIQgDAFgEAAQgCAAgEgEg");
	this.shape_128.setTransform(-218.7,94.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EAEA7A").s().p("AgBAAIABAAIABAAIABAAg");
	this.shape_129.setTransform(-219.5,93.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_130.setTransform(-199.6,93.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFDBF").s().p("AALAMQgLABgKgGQgHgNAOgGQANADADAOQgGgIAHAQg");
	this.shape_131.setTransform(-201.4,91.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFDBF").s().p("AgOAAQAGgMAPABQgJADAPgBIACAAIgCACQgCAJgJAJIgEABQgLAAgBgMg");
	this.shape_132.setTransform(-201.6,94.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFDBF").s().p("AgIAJQgGgOALgKQANgDABARQgGAJgIAGIgBACQgEgRAAAKg");
	this.shape_133.setTransform(-198.6,91.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFDBF").s().p("AgNAAIgCAAQAPgIgKAEQAMgKANAHQAGANgPAFQgKgDgJgIg");
	this.shape_134.setTransform(-197.6,93.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFDBF").s().p("AgJAJQgDgJAEgMIgBgCQAOALgHgJQANAHAAANQgFAHgGAAQgDAAgGgGg");
	this.shape_135.setTransform(-198.6,95.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#77705E").s().p("AkkAMQgGgMgHgKIBlgBIDNgBIDOgCIBjAAIgMAdg");
	this.shape_136.setTransform(-209.1,122.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#BCB5A4").s().p("AkhguIJDADQgQArgDAsIhXAAIi3ABIi0ABIhWABQgCgcgWhBg");
	this.shape_137.setTransform(-209,129.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFDBF").s().p("AgDABIACgBIADAAIACABg");
	this.shape_138.setTransform(-199.7,93.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F1EEDB").s().p("AgMACIAEgDIASAAIADADg");
	this.shape_139.setTransform(-184.7,135.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F1EEDB").s().p("AgMACIAEgDIASAAIADADg");
	this.shape_140.setTransform(-233.4,135.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#51A569").s().p("AipBFQAWgkAogoQApgrAxgWQAvgTA5AKQAxAJAiAiQgmgkg0gCQg2gDgwAXQgyAYgsApQgtArgHAhg");
	this.shape_141.setTransform(-193.5,111.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFDBF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_142.setTransform(-211.1,83.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_143.setTransform(-214.8,85.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFDBF").s().p("AAFAFQgFAAgEgDQgEgEAIgDQAEACACAFQgBgBAAgBQgBAAAAABQAAAAABACQAAABABACg");
	this.shape_144.setTransform(-215.7,85.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFDBF").s().p("AgGAAQAEgEAFAAQgBAAgBABQAAAAAAAAQABAAABAAQACAAACAAIgBABQgCADgDAEIgBAAQgFAAgBgFg");
	this.shape_145.setTransform(-215.7,86.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFDBF").s().p("AgDAEQgDgFAFgFQAGgBAAAHQgDADgCADIgBABQAAgCgBgBQAAgCAAAAQgBAAAAAAQAAABAAABg");
	this.shape_146.setTransform(-214.4,85.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFDBF").s().p("AgFAAIgBAAQACAAABAAQABgBAAAAQABgBgBAAQAAAAgBABQAEgFAGAEQADAEgIADQgDgCgEgDg");
	this.shape_147.setTransform(-213.9,85.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFDBF").s().p("AgDAEQgCgEACgEIAAgBQABABACAAQAAABAAAAQAAAAAAAAQAAgBAAAAQAFADAAAEQgCADgDAAQgBAAgCgCg");
	this.shape_148.setTransform(-214.4,86.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_149.setTransform(-205.9,99.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFDBF").s().p("AAFAFQgFABgEgDQgEgFAIgDQAFABABAGQgBgBAAAAQgBgBAAABQAAAAABACQAAABABACg");
	this.shape_150.setTransform(-206.7,99);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFDBF").s().p("AgGAAQAEgFAFABQgBAAgBAAQAAAAAAABQABAAABAAQACAAACAAIgBAAQgBAEgEAEIgBAAQgFAAgBgFg");
	this.shape_151.setTransform(-206.7,100.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFDBF").s().p("AgDAEQgDgGAFgEQAFgCABAIQgDAEgDACIAAABQgCgHAAAEg");
	this.shape_152.setTransform(-205.4,98.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFDBF").s().p("AgGAAIgBAAQACAAACAAQABgBAAAAQAAgBAAAAQAAAAgCABQAEgFAHAEQADAFgIACQgEgBgEgEg");
	this.shape_153.setTransform(-204.9,99.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFDBF").s().p("AgDAEQgCgEACgFIAAgBQABABACABQAAABAAAAQAAAAAAgBQAAAAAAgBQAFADAAAFQgCAEgDAAQgBAAgCgDg");
	this.shape_154.setTransform(-205.4,100.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#22773C").s().p("AgDgIQABAAADAEQAGAEgEAJIgBAAQgEAAgBgRg");
	this.shape_155.setTransform(-207,102.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#493E3B").s().p("AggCCIABgBQACgEANg3IAujLIADAFIgOA+IgYB1QgNA+gCATQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgDAAgHgEg");
	this.shape_156.setTransform(-207.4,106.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E8E6BC").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_157.setTransform(-198.6,89.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E8E6BC").s().p("AAFAFQgFABgEgDQgEgFAIgDQAFABABAGQgBgBAAAAQgBgBAAABQAAAAABACQAAABABACg");
	this.shape_158.setTransform(-199.5,88.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E8E6BC").s().p("AgGAAQAEgFAFABQgBAAgBAAQAAAAAAABQABAAABAAQACAAACAAIgBAAQgBAEgFAEIAAAAQgFAAgBgFg");
	this.shape_159.setTransform(-199.5,89.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E8E6BC").s().p("AgDAEQgDgGAFgEQAFgCABAIQgDAEgDACIAAABQgCgHAAAEg");
	this.shape_160.setTransform(-198.1,88.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E8E6BC").s().p("AgGAAIgBAAQACAAACAAQABgBAAAAQAAgBAAAAQAAAAgCABQAEgFAHAEQADAFgIACQgEgBgEgEg");
	this.shape_161.setTransform(-197.6,89.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E8E6BC").s().p("AgDAEQgCgEACgFIAAgBQABABACABQAAABAAAAQAAAAAAgBQAAAAAAgBQAFADAAAFQgCAEgDAAQgBAAgCgDg");
	this.shape_162.setTransform(-198.2,90.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#493E3B").s().p("AgvAwIBkiEIABAEIgwA/QgoA3gNAbQgFAUgBAAQgBAAAHglg");
	this.shape_163.setTransform(-201,95.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#22773C").s().p("AAAgNQABABAEAJQAEAIgLAJQgIgEAKgXg");
	this.shape_164.setTransform(-199.9,90.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#22773C").s().p("AgVABQABgBAMgFQAJgHAUAJQAAACgNAHQgFADgEAAQgJAAgLgIg");
	this.shape_165.setTransform(-200.5,96.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#22773C").s().p("AgCAHQgHgHADgOQACgBAHAJQAJAGgIAPQgBAAgFgIg");
	this.shape_166.setTransform(-219,91.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#22773C").s().p("AgQAAQABAAAMgFQAJgEALAMQgBABgKADIgEAAQgHAAgLgHg");
	this.shape_167.setTransform(-219.2,94.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_168.setTransform(-221.8,71.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFDBF").s().p("AAIAHQgIABgGgEQgFgHAKgEQAIACABAJQgBgCAAgBQAAAAAAAAQAAABAAABQAAACABADg");
	this.shape_169.setTransform(-223,70.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFDBF").s().p("AgJAAQAFgHAJABQgGACALgBIgBABQgCAFgGAGIgBAAQgIAAgBgHg");
	this.shape_170.setTransform(-223.1,72.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFDBF").s().p("AgFAFQgEgIAHgGQAIgBABAKQgEAFgFADIgBACQgCgKAAAFg");
	this.shape_171.setTransform(-221.1,70.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFDBF").s().p("AgIAAIgCAAQADgBACAAQACgBAAgBQABAAgBAAQgBAAgCABQAHgGAIAEQAFAHgKAEQgHgCgFgFg");
	this.shape_172.setTransform(-220.5,71.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFDBF").s().p("AgGAGQgCgGADgHIgBgBQAJAGgEgFQAIAEAAAIQgDAEgEAAQgCAAgEgDg");
	this.shape_173.setTransform(-221.4,72.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#1D6331").s().p("AgBAIQgEgIAFgDIAEgEQgCAPgDAAIAAAAg");
	this.shape_174.setTransform(-222.1,71);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#22773C").s().p("AgBAIQgEgIAFgDIAEgEQgCAPgDAAIAAAAg");
	this.shape_175.setTransform(-223.5,68.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#22773C").s().p("AgKgBQAHgIAOAMQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgGAAgLgGg");
	this.shape_176.setTransform(-222.1,73.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#22773C").s().p("AgGAEQgJgEABAAQAMgKAHAHQAKAEAAACQgIAEgGAAQgDAAgEgDg");
	this.shape_177.setTransform(-220.1,72.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#22773C").s().p("AgOgBQABgBALgDQAJgDAIAMQgBADgFAAQgIAAgPgIg");
	this.shape_178.setTransform(-224,71.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#493E3B").s().p("AAFAgQgMhigNhJIgOhLIADgGQAwECAKBcQAKBcgCgGIgOAEQgChYgOhkg");
	this.shape_179.setTransform(-213.9,95.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#493E3B").s().p("AAwBRQgMgfgog/IgwhJIACgFIBiCYIAEAWIAAAJQAAAAgEgLg");
	this.shape_180.setTransform(-220.8,75.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#005F2D").s().p("ABHAbQABg2grgtQgagagigLQgagJgXAGQAjgKAlATQAvAaATAkQAjBCgTA/IgQAcQATgpgGgwg");
	this.shape_181.setTransform(-218.5,107.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#51A569").s().p("AgQAyQADg2AWgjIAIgJQgRAYgDAbQgIArABAEg");
	this.shape_182.setTransform(-207.6,113.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#51A569").s().p("AgTCCQADiYAfhcIAFgPQgIAcgGAeQgLBNgDA8IgDBAg");
	this.shape_183.setTransform(-209,105);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#377747").s().p("AACAZQgEhFgNhJIgCgOIABAAQAXBlALChIgCABg");
	this.shape_184.setTransform(-212.6,96.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#51A569").s().p("AALCvIgChWQgDhSgMhoQgFgogHglIAEATQAeB9ADDNg");
	this.shape_185.setTransform(-212.6,99.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFDBF").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_186.setTransform(-205.9,80.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_187.setTransform(-210.7,75.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFDBF").s().p("AAKALQgKAAgJgGQgHgKAOgFQALADACALQgFgGAGANg");
	this.shape_188.setTransform(-207.4,79.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFDBF").s().p("AgMAAQAFgKANABQgIADAQgBIgCABQgCAIgIAIIgDAAQgKAAgBgKg");
	this.shape_189.setTransform(-207.6,81.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFDBF").s().p("AgHAIQgGgMAKgIQAMgDABAPQgFAHgIAFIgBACQgDgOAAAIg");
	this.shape_190.setTransform(-204.9,79.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFDBF").s().p("AgLAAIgDAAQAOgHgJADQAKgIAMAGQAGALgOAEQgJgCgHgHg");
	this.shape_191.setTransform(-204.1,81);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFDBF").s().p("AgHAIQgEgIAEgKIgBgCQANAKgGgIQALAGAAALQgEAGgGAAQgCAAgFgFg");
	this.shape_192.setTransform(-205.4,82.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFDBF").s().p("AAIAHQgIABgGgEQgFgHAKgEQAIACABAIQgBgBAAgBQAAAAAAAAQAAABAAABQAAACABADg");
	this.shape_193.setTransform(-211.9,74.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFDBF").s().p("AgJAAQAFgHAJABQgGACALgBIgBABQgCAFgGAGIgBAAQgIAAgBgHg");
	this.shape_194.setTransform(-212,75.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFDBF").s().p("AgFAFQgEgIAHgGQAIgBABAKQgEAFgFADIgBACQgCgKAAAFg");
	this.shape_195.setTransform(-210,74.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFDBF").s().p("AgIAAIgCAAQAKgEgGACQAHgGAIAEQAFAHgKAEQgHgCgFgFg");
	this.shape_196.setTransform(-209.4,75.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFDBF").s().p("AgGAGQgCgGADgHIgBgBQAJAGgEgFQAIAEAAAIQgDAEgEAAQgCAAgEgDg");
	this.shape_197.setTransform(-210,76.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#5A4C47").s().p("AABAIQgBgQgGgPIgBgEIAHAVQAFARADAMIgEAFIgDgUg");
	this.shape_198.setTransform(-210.4,75.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#493E3B").s().p("AgJATIAKgYIAIgQIgBADQgGALgDANIgEAQg");
	this.shape_199.setTransform(-213.9,84.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#3A3230").s().p("AgbAgIAMgSQALgOAGgGIAGgGQgYAdgKAQgAATgYIAJgIIgDAEIgNAMIAHgIg");
	this.shape_200.setTransform(-207.2,83);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#493E3B").s().p("AgdAaQANgQAVgUIAZgYIgDAFQgUARgOAVIgSAag");
	this.shape_201.setTransform(-207.4,83.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFDBF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABIAAgBg");
	this.shape_202.setTransform(-210.3,103.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFDBF").s().p("AAFAGQgFABgEgEQgEgFAIgDQAFABABAHQgBgCAAAAQAAgBAAABQAAAAAAACQABABABACg");
	this.shape_203.setTransform(-211.3,103);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFDBF").s().p("AgGAAQADgGAHABQgCABAAAAQgBAAABAAQAAAAABAAQACAAACAAIAAABQgBAEgFAFIgBAAQgFAAgBgGg");
	this.shape_204.setTransform(-211.4,104.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFDBF").s().p("AgDAFQgEgHAGgFQAGgBABAIQgDAEgEADIAAABQgCgIAAAFg");
	this.shape_205.setTransform(-209.9,102.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFDBF").s().p("AgGAAIgBAAQACAAACgBQABAAAAgBQABAAgBAAQgBAAgBABQAFgGAGAEQADAGgIACQgEgBgEgEg");
	this.shape_206.setTransform(-209.3,103.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFDBF").s().p("AgEAFQgBgFACgFIgBgCQACACABABQABAAAAABQAAAAAAgBQAAAAAAgBQAGADAAAGQgDAEgDAAQgBAAgDgDg");
	this.shape_207.setTransform(-209.9,104.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#493E3B").s().p("AATAUQgigxgqgjIgGgKIA1AzQAuAtAcAjIgHASQgCgFgkgyg");
	this.shape_208.setTransform(-217.6,95.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#22773C").s().p("AgNADIAHgFQAGgGANADQABACgIAFQgEAFgDAAQgFAAgHgEg");
	this.shape_209.setTransform(-204.7,101.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#22773C").s().p("AAJgKIgBAKQgCAKgOABQgFgHAWgOg");
	this.shape_210.setTransform(-210.1,91.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#22773C").s().p("AgMADQAFgNAYgKQABADgEARQgEATgaACQgBgCAFgQg");
	this.shape_211.setTransform(-208.7,103.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#51A569").s().p("AALCBIgChAQgEg9gLhNQgFgdgHgaIADALQAeBdAECZg");
	this.shape_212.setTransform(-212.9,106.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#22773C").s().p("AgEAHQACgPAGACQgEANgCAAIgCAAg");
	this.shape_213.setTransform(-209.9,74.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#3A3230").s().p("AgDB3IgBgSIgBgdIADgvIACgsQABgPABgpIACgvIACAAIgDBkIgDCMIAAAFg");
	this.shape_214.setTransform(-210.5,98.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#493E3B").s().p("AgWDlIAEiZQAFhiAFhVQAHhDAJgdQAMgeABABIACAGIgJAhQgHAfgEAxIgDCLIgDDLQgDAEgFAAQgFAAgGgEg");
	this.shape_215.setTransform(-210.2,96.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#3F774D").s().p("AgCgSQgggQgVgCIAEgBQA/AJAcAgQAJAPAHARIgDACQgYgogfgQg");
	this.shape_216.setTransform(-221.1,105.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#51A569").s().p("ABiBZQgRgqgSgmQgTgkgagUQgcgWgigEQgggFgYAgQAWggAhgIQAlgIAbAVQAcAYARArIAiBSIADANg");
	this.shape_217.setTransform(-221.7,110.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#161106").s().p("AheAIQhQgBgWgEQgMgDAYgDIA7gEICWABICOABQAsAHgMAAQgNABgFgBIgqADIhQACIhxABIgoAAg");
	this.shape_218.setTransform(-209.5,119.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#1E1809").s().p("AjigCIAagHIBtABIDIACIBsABIA6ALIomAEIAxgMg");
	this.shape_219.setTransform(-209.4,119.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#281A04").s().p("ADYBeIALgOInBADIAJALIg4AAIAKgLIgNAAIgBgFQABgEgKgvQgKgtgZglIAEgIIBsgeIGkAEIBjAWIAEAHIgSAxQgQArgCArIAAAFIgVAAIALAOg");
	this.shape_220.setTransform(-209.1,127);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#22773C").s().p("AgJACQAAgKABgCQAPADACAHQABAKgBABIgHAAQgKAAgBgJg");
	this.shape_221.setTransform(-212,83.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#DBD4BD").s().p("AgvABQANgKAjgCQAfABAQAKQgNAKgjABQggAAgPgKg");
	this.shape_222.setTransform(287.5,-134.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#5532C6").s().p("Ag0AAQAGgRAugCQAwACAEARQgEASgwACQgugCgGgSg");
	this.shape_223.setTransform(287.7,-133.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#772029").s().p("AhSCOIjTgHQjVgNh8gmQh8gngDgFIgFiqQA1BDCgAlQCfAjEmAPQDTAJC6gZQC7gXB8gqQB9grAagqIgICiQgDAGiBAvQiCAwjWAOQiHAFhMACIhVABIhBgBg");
	this.shape_224.setTransform(289.1,61.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#3A1313").s().p("AhSCPIjTgHQjUgNh9gnQh9gngCgEIgFizIBnAAQCSA4CVATQCWAUBlAAQBnAAAEgCQAFACBogBQBrAACZgTQCbgUCRg4IBkgDIgICjQgDAGiCAvQiBAvjWAPIjTAHIhKAAIhMAAg");
	this.shape_225.setTransform(289.2,61.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#3D3DC4").s().p("AgODKQgLgEgHgKQA3ghgGg2QgFg3gdg0IgvhXQgag7AkgqQAVgRAmAJQAqAOAPAtQAOAsAAApQAAApgBACQgHgEgOgNQAKiEg9gYQgVgLgVAQQgUAPgDAXQABAuAlA5QAjA4AYA9QAMAsgOAiQgOAigRASIgDABIgNgEg");
	this.shape_226.setTransform(305.2,96);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#460DA0").s().p("AgUDSIgNgEQgMgDgHgKQA3ghgEg3QgFg3geg0IgvhWQgWgxAWgpQAWgnBDAJQAyAPATArQASAsACAoQABAngCADIgnAOQgHgFgNgNQAKiEg7gYQgbgHgGAMQgFALACAXQAGAxAtBCQAtBAAHBWQgEBCghANQgaAMgIAAIgCgBg");
	this.shape_227.setTransform(307.2,95.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#DBD4BD").s().p("AAfDQQgogLgqgaQgTgUgFggQgEgfAggnIBEg+QAogkAPgyQANg+ghgRQgcgPgPACQgOACgkAXQglAYAKA3QAeAdAHgGIgNAqQgCAAgVgJQhIg2AxhRQATgcAfgKQAggMAZgBQAWACASAIQAxAYgDA8QgDA6g3A/Qg8A8gUAtQgUAvBzAYIAMAsQgDAAgqgKg");
	this.shape_228.setTransform(221,89.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#757167").s().p("Ag7ByIgRgeQAdgXAggfQAegeAKgnIAKgoQAFgRgKgLIAuAdQAKBIhCBTIggAnQgMAHgNACQgPAAgHgLgAABh5IABgDIAMAHQgGgDgHgBg");
	this.shape_229.setTransform(224,79.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#AAA599").s().p("AAiDcQgugOgqggQgqghAMg4QAWg7AxgeQAugfAnhFQAZhAgdgMQgdgMgQAFQgRgBgiATQglATAJA5QAeAfAJgFIgPArQgGABgpgYQgpgZAGg/QARhAA7gWQA4gWA0AXQAxAagEA/QgDA+g3BEQg8A/gUAxQgUAwBzAbIANAvIgBAAQgFAAgtgNg");
	this.shape_230.setTransform(219,87.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#DBD4BD").s().p("AAADNQgSgSgOgiQgOgiAMgsQAYg9Ajg4QAlg5ACguQgEgXgUgPQgVgQgWALQg8AYAKCEQgOANgGAEQgCgCAAgpQAAgpAPgsQAOgtAqgOQAmgJAVARQAkAqgaA7IgvBXQgdA0gFA3QgFA2A2AhQgHAKgLAEIgNAEg");
	this.shape_231.setTransform(271.6,96);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#757167").s().p("Ag3BlIAuhOQAUgiABgeQAHgqgdABQgFgPgIgIQA3ABAQAmQARAmgUAqIgwBcg");
	this.shape_232.setTransform(273.6,85.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#AAA599").s().p("AgPDHQgigNgDhCQAGhWAuhAQAthCAGgxQACgXgGgLQgFgMgbAHQg7AYAKCEQgNANgHAFIgngOQgCgDABgnQABgoATgsQASgrAzgPQBDgJAWAnQAWApgWAxIgvBWQgeA0gFA3QgEA3A3AhQgIAKgLADIgNAEIgCABQgJAAgZgMg");
	this.shape_233.setTransform(269.7,95.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#DBD4BD").s().p("AgPCYQgmgOgZgqQgZgpAhhNQAZhAAWgnQAVgnACgBQAFAGBVAKIgGASQgBgCgVAAQgVAAgbAaQgRAVgZA0QgYAyAFAwQAGAwBEAKIgCAsIgBAAQgGAAghgOgAAZCmIAAAAIAAAAIAAAAg");
	this.shape_234.setTransform(228.3,85.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#3A1313").s().p("AmUCYQjPgphggwQhhgwABgEIAAixQAoAfBqAyQBrAxCxAhQCxAeD5gTQD4gQDCgjQDCgjBxhkIABC/QADACg2AfQg2AgiSAmQiSAmkRAUQhnAFhZAAQjKAAiPgbg");
	this.shape_235.setTransform(289.3,120.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#C4BEAD").s().p("Ag/AhQARhDAzAAQA0gBAHAFQhbABgNAdQgOAfAGAEg");
	this.shape_236.setTransform(283.5,-104.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0E1D3F").s().p("AklAnQAdgvBIgsIBQBcQgGAMAAAOQAAANAGALIjXAJQAFgLAdgxgABYBCQgBgUgMgQIBbhhQBdArAjAzQAjA1gCAFIjzABQADgKABgKgAiPhKQAxgSBDgFQBOgEA9AQIhQBVQgVgHgZAAQgiABgZALg");
	this.shape_237.setTransform(287.8,-109);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#461D96").s().p("AhTgIIAGgQIChAhIgGAQg");
	this.shape_238.setTransform(334.9,-40.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#461D96").s().p("AiCCJICZiLIgBgBIBiiQIALAKIhbCGIgCADIABACIiaCSIgPgLg");
	this.shape_239.setTransform(325.5,-132.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#8C2F3C").s().p("AgaAFIgKjCIATAoIAGCWIAwC3IgOAGg");
	this.shape_240.setTransform(282.4,-144);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#461D96").s().p("AhGgWIAAgRICMBAIgFAPg");
	this.shape_241.setTransform(333.3,8.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#772029").s().p("AhLAcICWhJIABASIiXBJg");
	this.shape_242.setTransform(243.6,6.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#8C2F3C").s().p("Ah3gFIDvgDIABAOIjwADIAAgOg");
	this.shape_243.setTransform(224,10.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#772029").s().p("AhFAsICKhlIABAUIiDBfg");
	this.shape_244.setTransform(245.2,55.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#772029").s().p("AhPADICfgVIABAUIifARg");
	this.shape_245.setTransform(242.4,-38.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#461D96").s().p("AhOAPICYgwIAGAOIifA1IABgTg");
	this.shape_246.setTransform(334.6,-78.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#461D96").s().p("Ah9AHIABgOID6ABIgBAOg");
	this.shape_247.setTransform(354.5,-80.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#772029").s().p("AhPgTIAGgOICYAwIABATg");
	this.shape_248.setTransform(241.8,-78.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#461D96").s().p("AhTgcIABgZICmBWIgBAGIgHAPg");
	this.shape_249.setTransform(334.1,52.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#8C2F3C").s().p("Ah3gCIDugIIABAOIjuAHg");
	this.shape_250.setTransform(223.5,-36.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#8C2F3C").s().p("Ah5gDIDzgHIAAAOIjzAHg");
	this.shape_251.setTransform(222.3,-80.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#8C2F3C").s().p("AgMATQgugggtgxQgugxgFgIIALgLIAwA2QAtAyAvAeICUByIAKAFIgSAIg");
	this.shape_252.setTransform(244.1,-127.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#8C2F3C").s().p("AF+hBQiQh6jwgBQjZgBiNBpQiMBmgiCbQAVimCQhwQCPhzDjAAQDyABCQB7QCPB4AECkIgFAhQgDikiQh6g");
	this.shape_253.setTransform(288.7,-125.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#772029").s().p("AsEDMIgNo1IgIjyQgChAgDgtQgEhHBWiCQBWiCCxhwQCwhxEOgUQEIAGCzBtQCzBuBaCGQBaCHACBTQACAvAABAIgFDwIgMIwIgZQzIj9AFIACicIAGmBIAHpJIAIoaIACksQgDikiRh7QiPh6jwgBQjxAAiRB9QiSB+gHCvQgBA9ADDTIAJHqIALInIAKHBIADC6IjxAJIgZw9g");
	this.shape_254.setTransform(288.6,-37.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#8C2F3C").s().p("AsEDMIgNo1IgIjyQgChAgDgtQgEhHBWiCQBWiCCxhwQCwhxEOgUQEIAGCzBtQCzBuBaCGQBaCHACBTQACAvAABAIgFDwIgMIwIgZQzIj9AFIACicIAGmBIAHpJIAIoaIACksQgDikiRh7QiPh6jwgBQjxAAiRB9QiSB+gHCvQgBA9ADDTIAJHqIALInIAKHBIADC6IjxAJIgZw9g");
	this.shape_255.setTransform(288.6,-35.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#3A1313").s().p("AE5P0IAElEIABgEIAAgcIAAgGIAAgXIABgRIAAgOIAAgPIAAgdIAAgBIABgbIAAgOIAAgOIAAgVIABgeIAAgDIAAgjIABg/IAAgIIAAgYIAAgNIABgXIAAgMIAAgYIAAgNIAAgYIAAgMIABgXIAAgQIAAgWIAAgHIABhSIAAgUIAAgOIAAgUIAAgUIAAgOIAAgVIAAgPIAAgWIAAgMIABgXIAAgMIAAgWIAAgPIAAgSIAAgOIAAgjIAAgRIAAgLIAAgVIAAgPIAAgQIAAgQIAAgOIAAgPIAAgQIAAgNIAAgQIAAgNIAAgPIAAgNIAAgPIAAgLIgBgQIAAgJIAAgYIAAgFIAAgRIAAgJIAAgNIAAgJIAAgLIgBgIIAAgLIAAgHIAAgKIgBgHIAAgIIAAgGIgBgJIAAgFIAAgIIgBgDIAAgKQgMhmhDg5QhDg6hYgYQhXgXhIgCIgQAAIgEAAQg9AEhCAcQhEAcg4AsIgbgYQABgFBDgrQBDgsBxgXIAOgkIAhAfQBQgIBeAhQBeAgBlBbQAFABAgA/QAhBAgDByIgCBBQgBA6ANAMIgKA2IAAE0IgDB4QgCBxACByQABByAMAMQgBAAgYAwQgGAXgBBaQgBBaACBVIACBaIgUD+g");
	this.shape_256.setTransform(294,-28.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#3A1313").s().p("AhwP8QAAgWgKgFIgFgOIgHjJQAzg/AcilQAailALjXQAKjWAAjWIgJgFIAJgCQABjEgDiZIg3g6IA3AGQgDiuAEgkQAPhUAkgZQAZglAVgNQAVgOABAAIAYASQhhBIgKBbIABCiIAFE1IAHGBIACBRIAAABIAIGNIAGErIADB3IiTClg");
	this.shape_257.setTransform(246.8,-12.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#623DD8").s().p("AhQNAIADijIAFmNIAFnqQACj7gBjAQgBjCgEhBQgDglgMgfQAkALAPAxQAGAhgBCbQgCCbgBDdQgBDcAJDgQAIDkAZCvQAaCwA1BDIgGDJIgFAOQgKAGAAATQAAARgLAFg");
	this.shape_258.setTransform(333.4,-6.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#541E1D").s().p("AF3QqIADikIAFmNIAFnqQABj6AAjBQgBjBgFhCQgLhmhDg5QhDg5hYgYQhXgYhIgBQhJgBhVAlQhUAkg9A9Qg+A7gFBFQgBAvADC7IAHG6IAKHyIAIGZIAECqIiUCkIgxg7IgHilIgNmVQgJj2gHkIQgHkHgDjZQgDjYAEhlQALifBLhpQBMhqBgg4QBgg3BLgLQBvgXCYAAQCaAACeBuQBlBUAmCEQAkCEADBqQADBrgDAGIg2atIgYBBg");
	this.shape_259.setTransform(287.7,-29.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#C4BEAD").s().p("An2CZQgOg0APgrQAOgqAFgGQAGgIBDg7ICGh3QBEg7AIgEIBVABQBOACBlAEQBnAEBTAIQBSAIAQANQASAYAmBdQAmBaAgBXIAjBdIiQAnQgFiihmhDQhlhEhmgOQhkgNgJADQi7AjhKBNQhKBPgKBGQgKBEAEAFQhTgjgPg0g");
	this.shape_260.setTransform(289.8,-114.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#DBD4BD").s().p("AmrBfQAAhkBrhWQBqhVDRgHQBvgEBzAfQBzAfA8BkQAwBlgZAuQgZAvgIgBQjIgYisAEQiqADhrAMQhqAMgDACQgDAHgZAAIAAAAQgXAAgEhZg");
	this.shape_261.setTransform(287.4,-110.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#DBD4BD").s().p("AmrBfQAAhkBrhWQBqhVDRgHQBvgEBzAfQBzAfA8BkQAwBlgZAuQgZAvgIgBQjIgYisAEQiqADhrAMQhqAMgDACQgDAHgZAAIAAAAQgXAAgEhZg");
	this.shape_262.setTransform(287.4,-110.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#890404").s().p("AAMNUQhEgBgegbQgegbABgDQA2AbAQgNQAQgMgCgFQATgWAPhmQARhlAOh9QANh8AJhdIAIhhIAVgHQAPgFgkAEQgoAEgFgLQgFgLABgCQARgFAIgUQAJgTAEgSQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBIADgCIgGgHIgDgWQgCgcgBiEIAAkmIACkZIABh+IACgCIACgBIBBAPIADHJIgyTdQgIgEgvgDg");
	this.shape_263.setTransform(320.7,-7.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#890202").s().p("AAGgTQAFg1AAgEQARB1gWAYQgJADgOAJQARgtAGgzg");
	this.shape_264.setTransform(291.9,-88);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#890202").s().p("AADBDIgMgLIAEh/IADBCQACA4AIASIACADIgHgFg");
	this.shape_265.setTransform(278.2,-88.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#A00505").s().p("AgSBAQAYiEAXhrIAZhwQgQBpgZCFIgsDoIgWBpQAJhZAaiHg");
	this.shape_266.setTransform(320.3,40.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#A00505").s().p("AAuCwQgch9giiQQgjiSgXhGQADAIAhBeQAhBiAjCMQAkCOAKCJIgeiGg");
	this.shape_267.setTransform(258.4,34.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#A00505").s().p("AgOgCQgEi2AHh3IADhFIABBYQADB5AECZIAKEIIAGB3QgajCgEi1g");
	this.shape_268.setTransform(323.3,-46.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#A00505").s().p("AghAnQgbirAAhzQAAh0ACgEQALFZA1DJQAoCRAPAsQhFimgZijg");
	this.shape_269.setTransform(316.1,-53.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#890404").s().p("AgJMzIABgCIgIigQgHiagJjoQgJjogFjtQgGjvAEixQADiwARgrQAZAVAPACQAOApgZCvQgDAmACBmIADDVQACBtgFA5IgDAGIADADQgDAUgFACQAFAFALAiQANAfgoAFIASBzQAPBtARCUQARCUADB7QACB6gaAhIgFAFQgSgEgNgLg");
	this.shape_270.setTransform(252.2,-7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#A00505").s().p("AgEC7QAiiZAIlkQABAHABB2QAAB3gSCYQgQCPgtBqQAKggAZhog");
	this.shape_271.setTransform(256.6,-54.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#D10F0F").s().p("AA1NdQhEgBgegaQgegcABgDQARgoAchnQAahmAZh2QAbh2AShVIAThZQgDABgagCQgZgCgEgTQAEgXAdgcQAdgcAFgDQh7iqg2jTQg2jSgLicQgMidACgHQABAEAeANQAfAMAygdQACAEApAUQAnATA1gZIBBAPIADHJIgxTdQgJgFgvgCg");
	this.shape_272.setTransform(316.6,-10.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#BF3000","#890404"],[0,1],4.3,-16.2,22.6,-99.7).s().p("AhxLgQgih0gDiXQgEiXAJhxIAKh4IAiufIAjAgQA3ArAUgiQAWghgBgIQArAqAbgHQAbgGAMgWQANgVAAgEQACAJgECVQgECWgpC+QgpC9hpB/IAPAUQANAUAFAWQAAAZgPASQgQARgCABIArCRQAqCJAoCrQApCrgDBwQAAADgfAWQgeAWg6ABQhSgKgihzg");
	this.shape_273.setTransform(256.1,-9.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#108CA0").s().p("AAJBSIgxhJIgDiEIBPBwIAHCHQgLgKgXggg");
	this.shape_274.setTransform(321.2,-13);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0EA7E2").s().p("AhjHwIAWj+IgFoWIgFjcIC7CwIgxNQg");
	this.shape_275.setTransform(325.3,11.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#AAA599").s().p("AgfAOIgFibIBJCNIgBCOQgkhDgfg9g");
	this.shape_276.setTransform(314.5,-26.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#DBD4BD").s().p("AhNHbIglxOIDPGTIAWNQIi/AFg");
	this.shape_277.setTransform(321.5,-0.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#0E1D3F").s().p("AhajAIC1hqIAQE2QgfCXhLBBQhKBBghAGg");
	this.shape_278.setTransform(260.8,-34.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#0E1D3F").s().p("AhTj4QAAgEAWAeQAWAdAmBrQAkBpAxDlIg2ABg");
	this.shape_279.setTransform(260.7,28.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#1A2D5E").s().p("AiqFVIAasGIEai9IAlTYIldAFg");
	this.shape_280.setTransform(256,-8.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#BF3000","#890404"],[0,1],1.1,-5.7,5,-23.5).s().p("AgQBmQgdgRgZgHQgagCgOAJQgOAJAAACIkpgbQgHgIghg4Qghg1AdgTQAZgHCQgGQCPgHCygHIE6gJICNgFIgDCgIjtgUQgNBKgfACQgeACgEgFQglgcgVgEQgVgEgjAbQgVANgTAAQgMAAgMgHg");
	this.shape_281.setTransform(283.9,-88.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#095D8C").s().p("AntAYICUg9QAGgCAvgBQAugBAHAVQAEATAlgGQAkgHAZgDIBPgBICEgFIBugCQAxgBADgFQAEgFAqADQA3AHBLAfQBLAgAHAEg");
	this.shape_282.setTransform(290.1,73.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#AAA599").s().p("AhJA1IB0m6IAfLBIh8BKg");
	this.shape_283.setTransform(267.9,-50.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#DBD4BD").s().p("AiJIMIg2pPICziCICeoaIAvW6IlDAFg");
	this.shape_284.setTransform(259.6,-14.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#0E1D3F").s().p("ABoMgQAagqANhvQANhxAGiEQAEiEAAhlIAAh5QABgTgFhQQgFhSgNheQgMhfgZg3QgYg4gnAjQguAvgWgJQgVgJgbgPQgbgQhBAZQg1AahBBcQhABcg8BtQg8BsgnBRIgpBUQgWm0BQjdQBRjeB3hPQB4hPBggLQBfgLCSBSQCRBRBzBYQBzBXAHAHIAAB7IgDEmIgFFgQgCCzgEB8QgEB+gEAQQgJAQhJAbQhJAchaAWQhYAWg6ACIgEAAQg0AAAWgig");
	this.shape_285.setTransform(291.2,-6.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#1A2D5E").s().p("AobQBMAAAggBIQ4AAMAAAAgBg");
	this.shape_286.setTransform(290,-26.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#4C4C4C").s().p("AH2BKQgjgXgVgnQgUgkgagMQgvgOg2gBQg3gCgwABQhUAAh/ADQiBAEheAKQhSANg5AmQg5AoghAVQgiAVgLgtQgTg1gkAWQgXAPgKAIIBNhNICEgyINHAHIAgAMQAwAKACABIBHBzQgnAUgcAAQgTAAgNgJg");
	this.shape_287.setTransform(285.6,84.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4C4C4C").s().p("AgkDGQjlgDjOgWQjNgXh+gpIAAi2IC8hwIBDATIAgAJQBNgygRAMQgRAMgpAqQgpArAIAqQAPAgBTAUQBTARBoAKQBoAKBNADIBQADIBrgJQBkgKB7gUQB6gSBGghQBZgzgNgrQgMgrgdgDIC0AIIAPAGIAzBeIAACQQgpAhhNAgQhpAnjDASQioAQi/AAIg+gBg");
	this.shape_288.setTransform(289.3,108.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#757478").s().p("AmUEjQjPgqhggyQhhgzABgEIAAjDIHGkNILMAKIGBCbIAzBfIAADOQADACg4AhQg4AhiTAnQiSAokMAWQhnAGhaAAQjJAAiPgeg");
	this.shape_289.setTransform(289.3,106.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#DBD4BD").s().p("AgvAAQAPgKAggBQAjABANAMQgQAJgfAAQgjAAgNgLg");
	this.shape_290.setTransform(-287.5,-136.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#5532C6").s().p("Ag0AAQAFgRAvgCQAwACAFARQgFASgwACQgvgCgFgSg");
	this.shape_291.setTransform(-287.6,-135.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#772029").s().p("AhDCOQhLgCiIgFQjWgOiBgwQiBgvgEgGIgIiiQAbAqB8ArQB8AqC7AXQC6AZDTgJQEmgPCggjQCfglA1hDIgFCqQgDAFh8AnQh8AmjVANIjTAHIhBABIhVgBg");
	this.shape_292.setTransform(-289.1,59.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#3A1313").s().p("AhDCPIjTgHQjWgPiBgvQiBgvgEgGIgIijIBkADQCSA4CZAUQCaATBqAAQBpABAFgCQAEACBmAAQBnAACUgUQCWgTCRg4IBoAAIgFCzQgDAEh8AnQh8AnjWANIjTAHIhLAAIhKAAg");
	this.shape_293.setTransform(-289.1,59.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#3D3DC4").s().p("AAADNQgSgSgOgiQgOgiAMgsQAYg9Ajg4QAlg5ACguQgEgXgUgPQgVgQgWALQg8AYAKCEQgOANgGAEQgCgCAAgpQAAgpAPgsQAOgtAqgOQAmgJAVARQAkAqgaA7IgwBXQgcA0gFA3QgFA2A2AhQgHAKgLAEIgNAEg");
	this.shape_294.setTransform(-305.2,94.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#460DA0").s().p("AgPDHQgigNgDhCQAGhWAuhAQAthCAGgxQACgXgGgLQgFgMgbAHQg7AYAKCEQgNANgHAFIgngOQgCgDABgnQABgoATgsQASgrAzgPQBDgJAWAnQAWApgWAxIgvBWQgeA0gFA3QgEA3A3AhQgIAKgLADIgNAEIgCABQgJAAgZgMg");
	this.shape_295.setTransform(-307.1,93.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#DBD4BD").s().p("Ag+CuQBygYgUguQgUgug8g8Qg2g/gEg6QgDg8AxgYQASgIAWgCQAZABAfAMQAgAKATAcQAyBRhJA3QgVAIgBAAIgPgqQAIAGAegdQAKg3gkgYQglgXgOgCQgPgCgcAPQghARANA+QAPAyAoAlIBEA9QAhAngFAfQgEAggUAUQgqAagoALQgpAKgEAAg");
	this.shape_296.setTransform(-221.1,87.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#757167").s().p("AANB0IgfgnQhDhTAKhIIAugdQgKALAFARIAKAoQAJAnAfAeQAgAfAdAXIgSAeQgGALgQAAQgNgCgLgHgAgBh8IAAADQgGABgGADg");
	this.shape_297.setTransform(-224,77.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#AAA599").s().p("AhTDpIAMgvQBzgbgUgwQgUgxg9g/Qg2hEgDg+QgEg/AxgaQA0gXA5AWQA6AWARBAQAGA/gpAZQgoAYgHgBIgOgrQAIAFAegfQAKg5glgTQgjgTgQABQgQgFgeAMQgdAMAZBAQAnBFAvAfQAwAeAWA7QAMA4gqAhQgqAggtAOQguANgFAAIAAAAg");
	this.shape_298.setTransform(-219,85.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#DBD4BD").s().p("AgODKQgLgEgHgKQA3ghgGg2QgFg3gdg0IgvhXQgag7AkgqQAVgRAmAJQAqAOAPAtQAOAsAAApQAAApgBACQgHgEgOgNQAKiEg9gYQgVgLgUAQQgVAPgDAXQABAuAlA5QAjA4AYA9QAMAsgOAiQgOAigRASIgDABIgNgEg");
	this.shape_299.setTransform(-271.6,94.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#757167").s().p("AgsAOQgUgpARgnQARgmA1gBQgHAIgFAPQgdgBAHAqQACAeATAiIAuBOIg0AFIgwhcg");
	this.shape_300.setTransform(-273.6,83.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#AAA599").s().p("AgUDSIgNgEQgMgDgHgKQA3ghgEg3QgFg3geg0IgvhWQgWgxAWgpQAWgnBDAJQAyAPATArQASAsACAoQABAngCADIgnAOQgHgFgNgNQAKiEg7gYQgbgHgGAMQgFALACAXQAGAxAtBCQAtBAAHBWQgEBCghANQgaAMgIAAIgCgBg");
	this.shape_301.setTransform(-269.7,93.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#DBD4BD").s().p("AgYCmQABAAgDgsQBEgKAGgwQAFgwgYgyQgZg0gRgVQgbgagVAAQgVAAgBACIgGgSQBVgKAFgGQACABAVAnQAWAnAZBAQAhBNgZApQgZAqgmAOQgiAOgGAAIAAAAgAgYCmIAAAAIAAAAg");
	this.shape_302.setTransform(-228.3,83.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#3A1313").s().p("AiDCuQkSgUiSgmQiSgmg2ggQg2gfADgCIABi/QBwBkDDAjQDCAjD3AQQD6ATCxgeQCxghBrgxQBqgyAogfIAACxQABAEhgAwQhhAwjPApQiPAbjKAAQhZAAhmgFg");
	this.shape_303.setTransform(-289.3,118.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#C4BEAD").s().p("AApAAQgNgdhbgBQAGgFA1ABQAyAAASBDIgPACQAGgEgOgfg");
	this.shape_304.setTransform(-283.4,-106.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#0E1D3F").s().p("ABxBaQAGgLAAgNQAAgOgHgMIBRhcQBHAsAeAvQAdAxAFALgAlGBVQgCgFAjg1QAjgzBdgrIBbBhQgMAQgBAUQAAAKAFAKgAAPgHQgYAAgWAHIhQhVQA9gQBOAEQBEAFAwASIhGBPQgZgLgigBg");
	this.shape_305.setTransform(-287.8,-110.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#461D96").s().p("AhSAKICggiIAFAQIihAhg");
	this.shape_306.setTransform(-334.8,-42);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#461D96").s().p("AgmACIABgCIgCgDIhbiGIAMgKIBhCQIgBABICZCLIgPALg");
	this.shape_307.setTransform(-325.5,-134.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#8C2F3C").s().p("AgkC4IAwi4IAGiVIATgoIgKDCIgxC5g");
	this.shape_308.setTransform(-282.2,-145.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#461D96").s().p("AhGAZICMhAIAAASIiGA9g");
	this.shape_309.setTransform(-333.3,6.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#772029").s().p("AhLgbIABgSICWBJIAAASg");
	this.shape_310.setTransform(-243.7,4.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#8C2F3C").s().p("Ah4AGIABgOIDvADIAAAOg");
	this.shape_311.setTransform(-223.9,8.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#772029").s().p("AhFglIABgUICKBlIgJAOg");
	this.shape_312.setTransform(-245.2,53.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#772029").s().p("AhQACIABgUICfAVIgBAQg");
	this.shape_313.setTransform(-242.3,-40);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#461D96").s().p("AhPgTIAGgOICYAvIABAUg");
	this.shape_314.setTransform(-334.5,-80.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#461D96").s().p("Ah9gGID6gBIABAOIj6ABg");
	this.shape_315.setTransform(-354.5,-82.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#772029").s().p("AhOAPICYgwIAGAOIifA1IABgTg");
	this.shape_316.setTransform(-241.8,-80.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#461D96").s().p("AhTAnIAAgGICmhWIABAZIifBSg");
	this.shape_317.setTransform(-334.1,50.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#8C2F3C").s().p("Ah2ADIABgNIDsAIIgBANg");
	this.shape_318.setTransform(-223.5,-38.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#8C2F3C").s().p("Ah5AEIAAgOIDzAHIAAAOg");
	this.shape_319.setTransform(-222.3,-82.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#8C2F3C").s().p("AiaB7IAKgFICVhyQAugeAtgyIAwg2IALALQgFAHguAyQgtAxgvAgIiUBwg");
	this.shape_320.setTransform(-244.1,-129.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#8C2F3C").s().p("AoWC8QAFikCQh4QCPh7DygBQDjgBCPB0QCQBvAUCnQggibiNhmQiMhpjaABQjvABiRB6QiQB5gDClg");
	this.shape_321.setTransform(-288.6,-127.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#772029").s().p("AH6UAIAEi6IAJnBIAMonQAFkXADjTQADjTgBg9QgHiviRh+QiRh9jyAAQjvABiQB6QiQB7gECkIADEsIAHIaIAIJJIAFGBIACCcIj9gFIgYwzQgKl/gDixQgEiwAAhAQAAhAABgvQAChTBaiHQBbiGCzhuQCyhtEJgGQENAUCxBxQCxBwBVCCQBWCCgEBHQgDAtgCBAQgDA/gECzIgNI1IgZQ9g");
	this.shape_322.setTransform(-288.6,-39.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#8C2F3C").s().p("AH6UAIAEi6IAJnBIAMonQAFkXADjTQADjTgBg9QgHiviRh+QiRh9jyAAQjvABiQB6QiQB7gECkIADEsIAHIaIAIJJIAFGBIACCcIj9gFIgYwzQgKl/gDixQgEiwAAhAQAAhAABgvQAChTBaiHQBbiGCzhuQCyhtEJgGQENAUCxBxQCxBwBVCCQBWCCgEBHQgDAtgCBAQgDA/gECzIgNI1IgZQ9g");
	this.shape_323.setTransform(-288.6,-37.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#3A1313").s().p("AlVMOIAChaQAChVgBhaQAAhagHgXQgYgwgBAAQAMgMABhyQAChygChxIgDh4IAAk0IgKg2QANgMgBg6IgChBQgDhyAhhAQAgg/AGgBQBkhbBeggQBeghBQAIIAhgfIAOAkQBxAXBDAsQBDArABAFIgbAYQg4gshEgcQhCgcg9gEIgEAAIgQAAQhJAChWAXQhYAYhDA6QhDA5gMBmIAAAKIgBADIAAAIIAAAFIgBAJIAAAGIAAAIIgBAHIAAAKIAAAHIAAALIAAAIIAAALIAAAJIgBANIAAAJIAAARIAAAFIAAAYIAAAJIgBAQIAAALIAAAPIAAANIAAAPIAAANIAAAQIAAANIAAAQIAAAPIAAAOIAAAQIAAAQIAAAPIAAAVIAAALIAAARIAAAjIAAAOIAAASIAAAPIAAAWIABAMIAAAXIAAAMIAAAWIAAAPIAAAVIAAAOIAAAUIAAAUIABAOIAAAUIAABSIAAAHIAAAWIAAAQIABAXIAAAMIAAAYIAAANIAAAYIAAAMIABAXIAAANIAAAYIAAAIIABA/IAAAjIAAADIABAeIAAAVIAAAOIAAAOIABAbIAAABIAAAdIAAAPIABAOIAAARIAAAXIAAAGIABAcIAAAEIAEFEIgJAYg");
	this.shape_324.setTransform(-294,-30.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#3A1313").s().p("Ag5N1IACh3IAHkrIAHmNIAAgBIAChRIAHmBIAEk1QACh/gBgjQgJhbhihIIAZgSQACAAAUAOQAWANAZAlQAiAZAPBUQAGAkgDCuIA3gGIg4A6QgCCZAADEIAJACQgCAAgHAFQAADWAKDWQALDXAbClQAaClAzA/IgFDJIgGAOQgJAFgBAWIgYAeg");
	this.shape_325.setTransform(-246.8,-14.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#623DD8").s().p("AhBPGQAAgTgKgGIgFgOIgGjJQA1hDAaiwQAZivAJjkQAIjhgBjbIgCl4QgCibAGghQAQgwAjgMQgLAfgDAlQgFBBgBDCQgBDAACD8IAFHoIAFGOIADCjIiHCcQgLgFAAgRg");
	this.shape_326.setTransform(-333.4,-8.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#541E1D").s().p("AFdQmIAEiqIAImZIAKnyIAHm6QADi7gBgvQgFhFg+g7Qg9g9hUgkQhUglhKABQhHABhYAYQhYAYhDA5QhDA5gLBmQgFBCgBDBQAADBABD6IAFHqIAFGNIADCkIiLCgIgXhBIg36tQgCgGAChrQADhqAliEQAliEBlhUQCehuCaAAQCYAABvAXQBLALBhA3QBgA4BLBqQBLBpALCfQAEBlgDDYQgDDZgHEHQgHEIgJD2IgNGVIgHClIgxA7g");
	this.shape_327.setTransform(-287.7,-31.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#C4BEAD").s().p("AGPCnQgKhGhKhPQhKhNi8gjQgIgDhkANQhmAOhlBEQhlBDgGCiIiQgnIAjhdQAghXAmhaQAlhdATgYQAPgNBTgIQBSgIBogEQBlgEBOgCIBUgBQAJAEBEA7ICGB3QBDA7AGAIQAFAGAOAqQAPArgPA0QgOA0hTAjQAEgFgKhEg");
	this.shape_328.setTransform(-289.8,-116.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#DBD4BD").s().p("AGQC4QgYAAgDgHQgDgChqgMQhrgMipgDQitgEjIAYQgIABgZgvQgZguAwhlQA8hkBzgfQBzgfBvAEQDRAHBrBVQBqBWAABkQgDBZgZAAIAAAAg");
	this.shape_329.setTransform(-287.5,-112.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#DBD4BD").s().p("AGQC4QgYAAgDgHQgDgChqgMQhrgMipgDQitgEjIAYQgIABgZgvQgZguAwhlQA8hkBzgfQBzgfBvAEQDRAHBrBVQBqBWAABkQgDBZgZAAIAAAAg");
	this.shape_330.setTransform(-287.5,-112.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#890404").s().p("Ah0mCIADnJIBBgPIACABIACACIABB+IACEZIAAEmQgBCEgCAcIgEAWIgFAHIADACQAAABAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAQAEASAIATQAJAUAQAFQADACgGALQgFALgogEQgkgEAPAFQAQAGAFABIAIBhQAIBdAOB8QAOB9ARBlQAPBmATAWQgCAFAQAMQAQANA2gbQABADgeAbQgfAbhDABQgvADgJAEg");
	this.shape_331.setTransform(-320.7,-9.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#890202").s().p("AgFBBQgWgYARh1QgBAEAGA1QAFAzASAtQgOgJgJgDg");
	this.shape_332.setTransform(-292,-89.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#890202").s().p("AgHBFQAHgSADg4IADhCIAEB/IgMALIgHAFIACgDg");
	this.shape_333.setTransform(-278.2,-90);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#A00505").s().p("AgcAfQAiiMAihiIAkhmQgXBGgkCSQgiCRgcB8IgeCGQAKiIAliPg");
	this.shape_334.setTransform(-258.4,32.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#A00505").s().p("AgKEDQAGhyAEiWQAFiZADh5IAAhiIAEBPQAHB3gEC0QgEC3gaDDIAFh4g");
	this.shape_335.setTransform(-323.2,-49.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#A00505").s().p("AgFCzQA2jJAKlZQACAFgBBzQAABzgbCrQgZCjhDCmQAPgtAniQg");
	this.shape_336.setTransform(-316,-55.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#890404").s().p("AgZM9QgbghADh6QADh7ARiUQARiUAPhtIARhzQgogFANgfQALgiAFgFQgFgCgDgUIAEgDIgFgGQgDg5ABhtIADjVQAChmgDgmQgYivAOgpQAPgCAYgVQARArADCwQAECxgFDvQgGDtgJDoQgJDogHCaIgICgIABACQgMALgSAEIgFgFg");
	this.shape_337.setTransform(-252.3,-8.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#A00505").s().p("AgWBKQgRiYAAh3QABh2ABgHQAIFkAiCZQAZBoAKAgQgthqgRiPg");
	this.shape_338.setTransform(-256.7,-56.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#D10F0F").s().p("Aidl5IADnJIBBgPQA1AZAngTQApgUACgEQAyAdAfgMQAegNABgEQACAHgMCdQgLCcg2DSQg2DTh7CqQAFADAdAcQAdAcAEAXQgEATgZACQgaACgDgBIASBZIAuDLQAZB2AaBmQAbBnASAoQABADgeAcQgfAahDABQgvACgJAFg");
	this.shape_339.setTransform(-316.6,-12.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#BF3000","#890404"],[0,1],-4.2,-16.3,-22.5,67.2).s().p("AhaNGQgegWgBgDQgDhvApisQAoirAqiJIAriRQgCgBgQgRQgPgSAAgZQAFgWAOgUIAOgUQhph/gpi9Qgpi+gEiVQgEiWACgJQAAAEANAVQAMAWAbAGQAbAHAsgqQgBAIAVAiQAUAgA4gqIAiggIAiOeQACAGAIBzQAJBygDCWQgECXgiB0QgiBzhSAKQg6gBgegWg");
	this.shape_340.setTransform(-256.1,-11.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#108CA0").s().p("AgkgLIBPhwIgCCEIgxBJQgXAggMAKg");
	this.shape_341.setTransform(-321.2,-14.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#0EA7E2").s().p("AhjlQIC7iwIgFDcIgFIWIAWD+IiWARg");
	this.shape_342.setTransform(-325.3,9.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#AAA599").s().p("AgkAAIBJiNIgFCbIhDCAg");
	this.shape_343.setTransform(-314.5,-28.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#DBD4BD").s().p("AhyJwIAXtQIDOmTIglROIgBCZg");
	this.shape_344.setTransform(-321.6,-2.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#0E1D3F").s().p("AAADkQhMhBgeiXIAQk2IC0BqIARHrQghgGhKhBg");
	this.shape_345.setTransform(-260.8,-36);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#0E1D3F").s().p("AhTD4QAxjlAkhpQAmhrAWgdQAWgeAAAEIhxHxg");
	this.shape_346.setTransform(-260.8,26.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#1A2D5E").s().p("AiuJqIAlzYIEaC9IAaMGIAEEag");
	this.shape_347.setTransform(-256,-10.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#BF3000","#890404"],[0,1],-1,-5.7,-4.9,12.1).s().p("AgvBgQgjgbgVAEQgVAEgkAcQgEAFgfgCQgfgCgMhKIjtAUIgEigICOAFIE6AJQCxAHCQAHQCPAGAZAHQAdATghA1QghA4gHAIIkoAbQgBgCgOgJQgOgJgZACQgZAHgeARQgMAHgMAAQgSAAgWgNg");
	this.shape_348.setTransform(-283.9,-90.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#095D8C").s().p("AmbAFQBLgfA4gHQApgDADAFQAEAFAwABIBvACICDAFIBQABQAZADAlAHQAkAGAEgTQAGgVAvABQAuABAHACICUA9IvbARQAHgEBLggg");
	this.shape_349.setTransform(-290,71.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#AAA599").s().p("AhJE8IAfrBIB0G6IgXFRg");
	this.shape_350.setTransform(-267.9,-52.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#DBD4BD").s().p("AjALbIAv26ICeIaICzCCIg2JPIgHDUg");
	this.shape_351.setTransform(-259.6,-16.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#0E1D3F").s().p("AiJNCQg6gChYgWQhZgWhJgcQhKgbgJgQQgFgQgDh+QgEh8gCizIgFlgIgCkmIgBh7QAGgHBzhXQB0hYCRhRQCShSBfALQBgALB4BPQB3BPBRDeQBQDdgXG0IgohUQgnhRg8hsQg8hthAhcQhBhcg0gaQhCgZgbAQQgbAPgVAJQgVAJgvgvQgngjgYA4QgYA3gNBfQgNBegFBSQgFBQAAATIAAB5QABBlAFCEQAECEAOBxQANBvAaAqQAWAig0AAIgEAAg");
	this.shape_352.setTransform(-291.2,-8.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#1A2D5E").s().p("AocQBMAAAggBIQ4AAMAAAAgBg");
	this.shape_353.setTransform(-289.9,-28.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#4C4C4C").s().p("ApYA/IBHhzQADgBAugKIAhgMINHgHICEAyIBOBNQgLgIgXgPQgkgWgSA1QgMAtghgVQgigVg5goQg5gmhSgNQhdgKiCgEQh/gDhUAAQgwgBg3ACQg3ABguAOQgaAMgVAkQgVAnghAXQgOAJgTAAQgcAAgngUg");
	this.shape_354.setTransform(-285.6,82.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#4C4C4C").s().p("AmAC3QjCgShqgnQhNgggpghIAAiQIA0heIAOgGIC0gIQgeADgMArQgNArBZAzQBGAhB7ASQB6AUBlAKIBqAJIBRgDQBNgDBogKQBogKBTgRQBTgUAPggQAIgqgpgrQgogqgSgMQgSgMBOAyIAhgJIBDgTIC7BwIAAC2Qh+ApjOAXQjNAWjkADIg/ABQjAAAingQg");
	this.shape_355.setTransform(-289.2,106.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#757478").s().p("AiDE7QkNgWiSgoQiTgng4ghQg4ghADgCIAAjOIA0hfIGAibILMgKIHGENIAADDQABAEhgAzQhhAyjPAqQiPAejJAAQhZAAhngGg");
	this.shape_356.setTransform(-289.3,104.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#3333AA").s().p("AgggrIALgGIADgCIAKgFIABgBQAHgFAHgGIACgBIAEgDIAFgEIADgDIAEgFIACgCIAFgHIgIChQgBACg2AYg");
	this.shape_357.setTransform(358,54.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#9886CE").s().p("AgFgFQAAgQgVgKIBEgCIgCAzIhRAQQAlgZgBgOg");
	this.shape_358.setTransform(356.7,48.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#3D3DC4").s().p("Ag+CmQBygYgUgrQgUgsg8g4Qg2g9gEg4QgDg4AxgXQASgIAWgCQAZABAfALQAgALATAaQAyBNhJA0QgVAIgCgBIgOgnQAIAFAegcQAKg0gkgWQglgXgOgBQgPgCgdAOQggAQANA7QAPAwAoAjIBEA6QAhAmgFAeQgEAegUATQgqAZgoAKQgpAKgEAAg");
	this.shape_359.setTransform(351.5,82.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#460DA0").s().p("AhTDQIAMgpQBzgYgUgsQgUgrg9g5Qg2g8gDg4QgEg5AxgXQA0gUA5ATQA6AUARA6QAGA4gpAWQgpAWgGgBIgOgnQAIAFAegcQAKg0glgXQgigXgQAAQgQgDgeAQQgeARAZA7QAnA9AvAcQAwAaAWA2QAMAxgqAeQgqAdgtAMQgtALgGAAIAAAAg");
	this.shape_360.setTransform(352.4,82.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#461D96").s().p("AhTgIIAGgQIChAiIgGAPg");
	this.shape_361.setTransform(330.6,-42);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#461D96").s().p("AhFgVIAAgSICMBAIgGAPg");
	this.shape_362.setTransform(329.1,6.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#461D96").s().p("AhOAOICYgvIAGAOIifA1IABgUg");
	this.shape_363.setTransform(330.4,-80.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#461D96").s().p("Ah9AHIABgOID6ABIgBAOg");
	this.shape_364.setTransform(350.3,-82.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#461D96").s().p("AhTgcIABgZICmBWIgBAGIgHAPg");
	this.shape_365.setTransform(329.9,50.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#461D96").s().p("Ah9gDIA8gBIBqgDIBVgEIAAAOIj7AJIAAgPg");
	this.shape_366.setTransform(348.7,9.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#461D96").s().p("Ah8gCID6gJIAAAPIj7AIg");
	this.shape_367.setTransform(349.5,-40.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#7F7F7F").s().p("AATAUQgigxgqgjIgGgKIA1AzQAuAtAcAjIgHASQgCgFgkgyg");
	this.shape_368.setTransform(-192,88.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#7F7F7F").s().p("AgKABQAAgJAKgCQAJAAACAKQAAAJgLACQgIAAgCgKg");
	this.shape_369.setTransform(17.5,-28.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#7F7F7F").s().p("AgeACQAAgcAdgEQAbAAAFAdQAAAbgdAFQgbAAgFgdg");
	this.shape_370.setTransform(66.2,-55.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#7F7F7F").s().p("AgUAnQgSgNgGgPQgGgMgQgVQAQARAKgTQAKgUAXgFQAbAAARAVQAQAVAKAZQgFgDgBALQgDALAMALIgIgEQgXgBgRAFQgFACgGAAQgLAAgQgLg");
	this.shape_371.setTransform(-12.1,-71.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#7F7F7F").s().p("AgyASQgIgOACgVQAHgbAZgFQAYgFAbgBQgFALAjgHIgFAHQgHAWgFAVQgFATgUARQgRAMgSgGQgTgGgPAVQANgYgJgOg");
	this.shape_372.setTransform(-11,-60.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#7F7F7F").s().p("AgTAwQgMgKAFAMQgNgYgIgYQgHgXATgUQAUgOATAEQAWAEAGgaQgEAZALAQQALAPAAAUQgFAagSAJQgSAKgNARIgCAJQgCgPgLgLg");
	this.shape_373.setTransform(-2.2,-74.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#7F7F7F").s().p("AgdAhIgmgZIgKgBQAOgFAJgLQAJgNgLAJQASgTAXgJQAVgKAYAQQAQARADAUQACAVAbACQgaAAgJAJQgJAKgXACQgXAAgRgNg");
	this.shape_374.setTransform(3.7,-66.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#7F7F7F").s().p("AgFAtQgUgEgNgSQgOgWADgNIAJgqIAHgRQAGAKAMAEQAMADgHgEQATALAVATQAVASgBAbQgEAZgPAFQgOAFAFAUQgJgXgSgEg");
	this.shape_375.setTransform(-1.5,-58.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#7F7F7F").s().p("AA4AkIgkgCQgRgBgPgNQgagXgXgiQANAQATgJQATgIASgCQAsAJAIAwQgJgRABAHQAAALAKAXg");
	this.shape_376.setTransform(-7.4,86.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#7F7F7F").s().p("AgqARQgBgQAFgRQAVgnAwAEQgWAFAKABQAKACAZgDIgFAFIgNAhQgFAPgQAMQgPAJgTAEQgUADgPARQAOgTgCgQg");
	this.shape_377.setTransform(-6.5,96.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#7F7F7F").s().p("AghAsQgTgsAhgfQARgJAQgCQASgCAJgVQgIAUABATQABATgFAQQgSAhgeARIgEAHQgMg5ABAjg");
	this.shape_378.setTransform(3.6,84.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#7F7F7F").s().p("AhBAAIgGAAQAzgagiAJQAogeAlAXQANAOAHAPQAIARAWADQgWgCgSAGQgSAFgSAAQgkgIgagag");
	this.shape_379.setTransform(8.3,92);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#7F7F7F").s().p("AgEAlQgPgNgJgRQgJgRAEgRQAEgQACgSIgCgHQAUAPAJADQAIADgPgOQArAVgBAqQgEAVgKAPQgJAPACAQQgGgTgMgNg");
	this.shape_380.setTransform(2.9,99.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#7F7F7F").s().p("AgzBgQgggugPgyQgGg9ApgqQApgoA2gaQgQAVAegIQAegHAUgVIgIASQADAzAHAtQAHAugbAwQg0BThRBOQAjgrgfgug");
	this.shape_381.setTransform(58.6,-35.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#7F7F7F").s().p("ABBBmQgpAGgxgCQg+gJgfguQgfgvgLg5QANAJAEgaQAEgagUgXIAQANQAqAYAygCQAygBAoAkQAiAoASAxQATAyAzAeQg4gZgoAHg");
	this.shape_382.setTransform(84.4,-44.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#7F7F7F").s().p("Ag2BFQgkgngTgrQgVgtg7gIQA6AFAygPQAxgQAxgBQA3AGAcAkQAdAkA5APIAEANQgdAIgTASQgUASAkgJQg5AWg3ASQgRAGgRAAQghAAghgZg");
	this.shape_383.setTransform(46,-57.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#7F7F7F").s().p("AgMCPQgegSAaAvQgqgtgZg4QgZg6Adg1QAggqApgcQAngbgDg8QAFA6AZAtQAZAuAKAwQAEA2gcAfQgbAfgNBBIgJARQgHgkgbgTg");
	this.shape_384.setTransform(64.9,-77);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#7F7F7F").s().p("AiMAoQACgeggAvQAVg5AoguQAogwA+gDQA4AEAsATQAsATAtgQQgyAbgbAtQgbAwgtAaQglAOg5gCQg6gBgjAHIgbAFQAogcABgeg");
	this.shape_385.setTransform(86,-64.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#7F7F7F").s().p("AgWAkQgLgQgGgUQgDgYASgRQAQgRAVgKQgSANgFAEQgEAGAHAVQABgYAtgaIgDAHQABAVADATQADASgLATQgcAdgZAkQAKgWgLgRg");
	this.shape_386.setTransform(14,-20);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#7F7F7F").s().p("AAbAnQgSAIgUAAQgwgOgGg2QAMAPAFgCQAFgCAWgDQgagFgFgDQgGgDgGgYIAGAGQAUADAUACQASADAPAPQAPAPAJASQAJATASAPQgUgOgTAFg");
	this.shape_387.setTransform(25.1,-22.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#7F7F7F").s().p("AgbAZQgOgRgHgRQgGgTgYgFQAYAEAUgFQAVgFATACQAoAMAaAeIAHACQgYAKgJACQgJABgVgQQALAUAFAEQAFADAVgHQgYAPgWAAQgUAAgTgOg");
	this.shape_388.setTransform(9.7,-30.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#7F7F7F").s().p("AgCAcQACgVABgCQggAcAYAhQgRgSgKgWQgJgWAMgUQANgRARgMQAOgLgBgYQACAXAKATQAKASAFAUQgCApgZAgIABAIQgSgfADgWg");
	this.shape_389.setTransform(17.2,-36.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#7F7F7F").s().p("AgoAEQAMgCAEAAQgUgEgGgBQgGAAgMASQAKgWAPgRQARgRAYABQAUAFARAKQASAKAVgLQgjAbgdAdQgRAMgTgDQgUgCgUAAIgIAEQARgiARgDg");
	this.shape_390.setTransform(26.4,-31.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#7F7F7F").s().p("AiJAVIANgNQAhgbAngKQA0gLA7ARQAUAJANgEIAJAKIAlAkQgxggg1gOQhngchGBQIAAgNg");
	this.shape_391.setTransform(63,15.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#7F7F7F").s().p("Ag+D5QhKg1gchKQgnhjAQhKQAPhMA/hGQANgKANgdQAOgdAagOQgMATgXAzQgXAzgjBDQgfBCANA8QAOA+AcAxQAdA0A+AfQA8AgA7gXQBLgqgLg4QgMg4gagMQgjgGAbAbQAOANgIAVQgIAWgXANQgxAOgagpQgLgUAHgYQAFgZAfgQQAggPAmAIQAlAJAaAuQAXAwgXAuQgXAvgyAYQgqARglAAQgxAAgqgfg");
	this.shape_392.setTransform(74.9,8.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#7F7F7F").s().p("AuDL2QFwgGC8h3QC8h4BJi1QBIi1ASi9QAVi/AjiVQgzAyglgRQg0gZAKg0QAWguAjANQAfAHgIAnQgLAcgZgJQgXgOALgRQAJgIgHgFQgLgJgMAaQgIAkAuAVQARAHAbgMQAbgMAVgkQAOgrAUghQB1i0Bzg1QB0g1BNANQCCASBrBmQBsBlATCJQAPCehLB7QhLB7inAFQhngChZhMQhPhFALhqQAMB6BNA7QBNA8BeAAQCogIBGh9QBFh9gXiUQgZiAhihbQhihbh6gQQhJgNhyAuQhyAvhwCqQg8BygTDHQgTDFgoDTQgrDTiFCTQiFCTkgALIifARgAhAleQgzgZgRgxQASAwAzAYQBBAiA7g1IAAACQgkAgglAAQgZAAgbgNgAiCoCQALgZAZgLIAIgDQAKgCAKADQAJACAEAGIABACQADAEABAGIABADIAAABIgBgFIgCgEIgBgCQgGgHgKAHQgOgQgXALQgZAVgIAdQACgKAFgKg");
	this.shape_393.setTransform(-16.9,-0.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#7F7F7F").s().p("AgcAvIgbgDQAegDAZgMQA0gWABg2IADAGIgBAIQgCAYgNAOQgSAWgcAMQgLADgEAGIgHgBg");
	this.shape_394.setTransform(4.9,86.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#7F7F7F").s().p("AgoAtQgagFgcAGQAdgIAHgXQAHgVAPgWQAVgWAcADQAdADAbANQhAgJgiA1QA4grBEATIgJADQgTAPgQARQgPARgbAGIgOABQgSAAgRgDg");
	this.shape_395.setTransform(107.2,71.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#7F7F7F").s().p("AAAA5QgUgNgRgUQgQgZALgbQAKgbAUgXQgaA6AqAwQgahCAhg8IAAAKQAMAWANATQANATgCAcQgEAYgLAXQgLAXgBAdQAAgdgUgNg");
	this.shape_396.setTransform(116.8,80.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#7F7F7F").s().p("AgXgPQgGBAA0AgQgbgGgZgQQgXgRgEgeQACgZAJgVQAJgYgRgXQASAWAXAMQAVAMASATQASATABAYQABAWAEAZIAFAIQg+gcgRhFg");
	this.shape_397.setTransform(113.1,59.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#7F7F7F").s().p("AAOgaQhAABgbA4QAEgeANgYQAOgZAegHQAYgBAYAHQAXAHAXgUQgVAUgJAYQgKAWgRATQgUAUgUAEQgXAEgZAGIgIAGQAWhBBDgYg");
	this.shape_398.setTransform(127.8,62.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#7F7F7F").s().p("AAjAuQgaAAgWgIQgagLgMgVQgLgSgPgUIgJgFQBGgEAuA1QgYg7g/gDQA/gVAnAtQALAYACAXQADAYAaANQgagLgagBg");
	this.shape_399.setTransform(127.4,74.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#7F7F7F").s().p("AhOAKIAEgJQAJgBAMgJQAkgcAjgGQAegEAeALIAMAGIAEAJQhGglg8AvQggAVgZAjIAPgjg");
	this.shape_400.setTransform(127.8,66);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#7F7F7F").s().p("AgOAIQgJgNANgKQAXgLAEAUQAGARgPAJIgGAAQgJAAgHgMgAgEgDIAFADIgBgHQgEABAAADg");
	this.shape_401.setTransform(120.8,76.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#7F7F7F").s().p("AgDAgQgfgUgkgQQAVAEANgLQAMgNASgIQAqgGAaAoQgPgNgKAAQgKABgRAKQAXgEAMAEQAMAGAPASIgIgCQgYALgaAAIgRgBg");
	this.shape_402.setTransform(-226.1,35.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#7F7F7F").s().p("AgYAeQgIgPgFgRQAFgsAugOQgjAcAKAtQAHgzAqgaIgEAGQAAATACAQQABASgLAPQgaAYgZAfQAKgTgJgQg");
	this.shape_403.setTransform(-222.1,45.7);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#7F7F7F").s().p("AgUAkQADgKARgQIgaAMQgHAEADAVQgUguAegeQARgJAQgEQASgDAIgVQgHAUACATQABATgEAQQgQAigdASIgDAHQgFgWACgJg");
	this.shape_404.setTransform(-215,30);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#7F7F7F").s().p("AhAAWIgHACQAdghAsAJIAQgBQgpgXgmAaQAbgoApAHQASAIAMANQANALAWgDQglAPgfATIgQABQgbAAgZgLg");
	this.shape_405.setTransform(-209.1,36.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#7F7F7F").s().p("AgUAMQgMgOgBgRIgCgjIgFgHQAtAXALAyQAHgugngZQAwAKAIAqQgBARgIARQgGAQAMATQgegcgbgWg");
	this.shape_406.setTransform(-213.8,45.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#7F7F7F").s().p("AAfAAQgYgzg4AAIAGgFIAKABQAXADAQAMQAVASAOAcQADAMAGADIgBAIIgDAcQgDgggMgZg");
	this.shape_407.setTransform(-222.8,33.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#7F7F7F").s().p("AgNAAQAAgMAMgCQASACgEAMQgDAOgLABQgLgDgBgMgAgCgEIACAEIACgEIgCgBIgCABg");
	this.shape_408.setTransform(-218.6,44.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#7F7F7F").s().p("AAfApQgSgGgQgEQgRgDgOgQQgLgQAMgWQAMgWAVACQApASgBAyQgGgVgBAKQgBAKAFAag");
	this.shape_409.setTransform(-96.3,65.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#7F7F7F").s().p("AgeAfQgVgNAEgTQAVgpAyAEQgVAFAJABQAKACAbgDIgGAFIgNAhQgEARgSANQgIAEgGAAQgMAAgMgIg");
	this.shape_410.setTransform(-97.2,72.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#7F7F7F").s().p("AggALQgCgJgFAVQgCgyApgTQAUgDAMAVQANAWgKAQQgOAQgRAFQgPAEgSAHIgFAGQADgbgBgKg");
	this.shape_411.setTransform(-88,65.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#7F7F7F").s().p("AALAjQghgNgWgcIgHgCQA2gUgiAGQAqgaAkAcQALASgMASQgNATgTAAIgDAAg");
	this.shape_412.setTransform(-86.1,71.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#7F7F7F").s().p("AgDAyQgYgFgGgTQgBgkAUggIgBgHQAlAsgSgfQAoAggNApQgJANgRAAIgIAAg");
	this.shape_413.setTransform(-90.6,74.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#7F7F7F").s().p("AA1BGQgfgKgbgHQgdgGgYgbQgTgcAVglQAUgkAkADQAkALAPAhQAPAiACAlQgKgjgCAQQgCARAIAsg");
	this.shape_414.setTransform(75.2,11.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#7F7F7F").s().p("AgzA0QgjgWAGgiQAOglAigMQAigMAnAAQgkAHAQAEQARADAsgFIgKAIQgMAegJAaQgIAdgdAVQgNAIgMAAQgTAAgVgOg");
	this.shape_415.setTransform(73.8,23.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#7F7F7F").s().p("AAfApQgSgGgQgEQgRgDgOgQQgLgQAMgWQAMgWAVACQApASgBAyQgGgVgBAKQgBAKAFAag");
	this.shape_416.setTransform(181.8,33.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#7F7F7F").s().p("AgeAfQgVgNAEgTQAVgpAyAEQgVAFAJABQAKACAbgDIgGAFIgNAhQgEARgSANQgIAEgGAAQgMAAgMgIg");
	this.shape_417.setTransform(180.9,40.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#7F7F7F").s().p("AggALQgCgJgFAVQgCgyApgTQAUgDAMAVQANAWgKAQQgOAQgRAFQgPAEgSAHIgFAGQADgbgBgKg");
	this.shape_418.setTransform(190,33.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#7F7F7F").s().p("AALAjQghgNgWgcIgHgCQA2gUgiAGQAqgaAkAcQALASgMASQgNATgTAAIgDAAg");
	this.shape_419.setTransform(191.9,39.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#7F7F7F").s().p("AgDAyQgYgFgGgTQgBgkAUggIgBgHQAlAsgSgfQAoAggNApQgJANgRAAIgIAAg");
	this.shape_420.setTransform(187.4,42.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#7F7F7F").s().p("AgqBZQgHgNAUgSQgpAPgfgNQghgLgOgZQgFgMALACQAGAEANAWQALAMAXAGQAXAFASgFQgTABgRgGQg6gdAWgsQAXguAsALQAgALAEAbQADAXgbAZQADgEAFgbQAFgcgjgRQgugGgMAyQgMAwBgAHQA7gIAsgsQArgrAhg2QALgKgDAOIgHAKQgqBAg5AqQgbAUgiAJQgbARAGAQQAIAMAJgDQAIgEgDgDQgBAAAAAAQAAgBgBAAQAAABgBAAQAAAAgBABQgEADgFgGQgDgHAIgEQAJgCAFAIQAEAKgNAHIgGABQgKAAgHgLgAglA5IAJAAIACgBIgLABg");
	this.shape_421.setTransform(133.8,94.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#7F7F7F").s().p("AHsD/QgHhQgnhsQgnhphfhPQh8hPhSALQhRALgiA5QgkA5AMA7QANA5A+AQQBFAHARgwQASgugcg/QgBgFAaAQQAaAQAOAWQASAggcAtQgbAuhogGQhQgXgJhMQgJhPA8g+QA9g+CBAaQBPARA2AsIgHgMQglgug4ggQg4gggsgCQgyABgSAHQgTAGgUgGQgUgKAIgLQAJgLAPgFQAigMAxALQAyALArAUIgDgEQh1hIiMAFQiOAFh5BKQh7BJg6CEIAAAAQA5iFB3hKQB4hLCNgIQCKgHB3BEIAaASQAYASAOANQBDAtApBVQBCBPAbBdQAbBfAEBHQAEBEgBAKIgFhKg");
	this.shape_422.setTransform(152,94.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#7F7F7F").s().p("AGVDTQg9gvhRh0QhRhyh+hgQh9hfjGAQQC2ACBgBAQBiBAAFBXQAFBVhjBKQBbhQgHhUQgHhXhhg8Qhhg8i1ABIgDABQAqAEAzAQQAzAQAWAVQAEAIgGAIQgHAJALAQQgUgEgZgWQgZgVgmgVQgigQg3AAQg3ABgwAQIgLAFQA7gIBDATQBrAfATBAQATBAgpAvQgpAxhGgRQhQgmAMg1QAMg3AygGQASACgBALQgBALgHAEQguAfAEAhQADAhApARQBLAPAig6QAjg8gvhAQguhAioAFQiCAVhOBHQhOBHgYAkQgOAPgDgDQABgKAug3QAug5Bjg+QBig/CfgZQDYgZCDBfQCEBeBSB1QBSB3BBAvQBUAtA5gHQA5gIAegTQA0gbAag0QAag1gOg1QgTg7g4gkQg4gkhNAbQgrAQgXAkQgXAiATAxQgZgnAVglQAZguAugTQBNgbA5AjQA7AiAZA9QASA4gcA6QgdA6g3AeQggAUg8AJQgKACgKAAQg2AAhJgqg");
	this.shape_423.setTransform(-68.2,98.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#7F7F7F").s().p("AgUAPIADgFQABgKAIgLQAXgIAGAIQgJABAAADQgBAFgKAJIgSAHIgCACg");
	this.shape_424.setTransform(-193.2,85.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#7F7F7F").s().p("AgUAPIADgFQABgKAIgLQAXgIAGAIQgJABAAADQgBAFgKAJIgSAHIgCACg");
	this.shape_425.setTransform(-182.2,76.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#7F7F7F").s().p("AEADLQgcidiFhqQiDhsjqgkQBUAIBnAUQBkATBeBIQBeBJA7CkIAHA1g");
	this.shape_426.setTransform(173.8,106.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#7F7F7F").s().p("AmUCDIgSgcQCeBKBdguQBdguA8hUQA6hSA9gmQCHg7BWAqQA4AXAcAwQAcAxgRA7QgQAzg3AfQg3AfhHgWQgrgSgYg2QgVgvAWgfQgPAiAWAcQAWAcAnAOQBIAVAzgZQAzgaAMguQAIglgZgpQgYgpgvgXQgcgOg3gDQg3gChLAgQg5Ajg3BQQg4BOhcAzQgvAchCAAQg9AAhNgYg");
	this.shape_427.setTransform(-148.2,109.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#7F7F7F").s().p("AgIBeQgEhSAIg8QAHg/ACgDIAGgEQgVB7AJA7QAFAtADALg");
	this.shape_428.setTransform(-211,10.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#7F7F7F").s().p("ABKB1QgVhAg+hWQhBhXgIgIIAEgMICeDaIACAaQACAYgBALIgBACQgCAAgGgYg");
	this.shape_429.setTransform(-211,23.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#7F7F7F").s().p("AARAAQgbgZglAIIAOgKQACgBAaAIQAYAHAdAUIAAAVQgCgEgdgYg");
	this.shape_430.setTransform(-212.6,40.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#7F7F7F").s().p("AgGAcQgBAAgEgQQgDgNAQgdQACABAHASQAHAPgWAag");
	this.shape_431.setTransform(181.8,114);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#7F7F7F").s().p("AgeAWIgFgBQAHgmAdgDQAegDAFADQgTAhgVAFQgRAFgGAAIgDgBg");
	this.shape_432.setTransform(186.1,117.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#7F7F7F").s().p("AAFAXQgagIgVgqQAGgDAkAFQAjAFAIAxIgHAAIgCAAQgGAAgXgGg");
	this.shape_433.setTransform(174.6,112.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#7F7F7F").s().p("AACAaQAJhVgXg9IAOANQABADAGA7QAGA4gFBSIgRAdQADgJAGhXg");
	this.shape_434.setTransform(-194.1,-31.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#7F7F7F").s().p("AA7AYQghg2hxgqIAYgHQAIADA8AlQA/AkARAgIADAzQgEgNgZgrg");
	this.shape_435.setTransform(189.5,70.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#7F7F7F").s().p("ABMJNIgoAAQAEitgQjGQgQjHgVizQgYizgTh0IgUh3IAMgOQBLHUAeEAQAeEBADBkQAEBggCAAIAAAAg");
	this.shape_436.setTransform(196.8,68.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#7F7F7F").s().p("ACGDhQgPgyhDhuQhAhsg/hfQg/hfgFgGIAGgOIESGpIAEAhQADAeAAAPIgBAEQgCAAgHgdg");
	this.shape_437.setTransform(179.6,14.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#7F7F7F").s().p("AgLgFQAGgVADgCQARAWgCAOQgDARgCABIgCADQgXgPAGgTg");
	this.shape_438.setTransform(184.6,60.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#7F7F7F").s().p("AgOAXQgBgBACgSQADgPAXgPQACADAAAWQgBAVgbAHg");
	this.shape_439.setTransform(198.8,59.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#7F7F7F").s().p("AgWAmQgDgDAEgbQAEgaAmgYQAEAEgBAkQAAAiguAMg");
	this.shape_440.setTransform(194.9,20.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#7F7F7F").s().p("AgKADQgCgPAUgKIABADQACABAAAOQAAAMgQAPQgCgCgDgSg");
	this.shape_441.setTransform(108.8,81.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#7F7F7F").s().p("AgQAOQgdgPgCgGQAqgUAZAMQAbAMABADQgXAVgVAAQgJAAgLgHg");
	this.shape_442.setTransform(187.9,69.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#7F7F7F").s().p("AA2FHQgGhmgShtQgRhtgPhVIgFgNQgKgZglg2Qgmg1gjguIgmgxIADgHICWDJIgThZIAGgIQA+EdAUCEIABgUIAAgOIBpi9IADAHIgZArQgZAqgZAxQgZAxgFAWQgDAPgBgCQAOBaADAng");
	this.shape_443.setTransform(175,94.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#7F7F7F").s().p("AgiC9QgCAFAKhRQAKhQAwjgIADAFIgOBCQgNA+gMBWQgOBXgCBNg");
	this.shape_444.setTransform(-178.1,105.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#7F7F7F").s().p("AgzBIIAEgTIBiiEIACAFIgwA/QgpA2gLAcIgEAJIAAgIg");
	this.shape_445.setTransform(-171.2,87.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#7F7F7F").s().p("AgpKTQABntAhlwQAXkRAai3QgJBLgIBQQgYEVgKEHQgLEJgCCvIgCC2g");
	this.shape_446.setTransform(213.9,60.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#7F7F7F").s().p("AgoKTQAAntAilwQAWkRAZi3QgIBLgIBQQgYEVgKEHQgKEJgDCvIgCC2g");
	this.shape_447.setTransform(-188.9,58.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#7F7F7F").s().p("AgxIIQAAl6AmkZQAdjnAgiVQgNBHgLBOQgbDTgMDKQgNDLgDCGIgDCMg");
	this.shape_448.setTransform(208.9,74.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#7F7F7F").s().p("AjqC+QATjdCHhuQCFhvC2ADQkDATheCHQhdCFgUDUg");
	this.shape_449.setTransform(227.8,101.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#7F7F7F").s().p("AAhIIIgDiMQgDiGgNjLQgMjKgbjUQgLhNgNhHQAfCVAdDnQAnEaAAF5g");
	this.shape_450.setTransform(-197.2,72.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#7F7F7F").s().p("AjMBaQAPg9Asg1QArg2A3gkQA7gmBbAIQBFAHAmA4QgagigsgOQg7gVg+AQQg0ANgkAgQglAggeAtQg5BHgPBXg");
	this.shape_451.setTransform(-170.8,104.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#7F7F7F").s().p("ACYBZQgagqgdgmQgegkgpgUQgsgXg1gDQgwgEgmAcQAigdAxgIQA6gIAtAVQAsAYAaArQAbApAbApIAFANg");
	this.shape_452.setTransform(-209.1,115.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#7F7F7F").s().p("AiBDiIA2gfQAxgeA1gqQA2grARgpQAWg8gJhbQgHhBgqgxQAoAtAOA9QAXBggRA8QgRA7g7AvQg5AvhQAmg");
	this.shape_453.setTransform(-73.7,48.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#7F7F7F").s().p("AjHBPQAYgpAvgvQAwgwA5gZQA3gWBCALQA/ALAnAsQgtguhAgDQhAgDg3AaQg7AcgzAuQg0AxgIAmg");
	this.shape_454.setTransform(-168.9,115.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#7F7F7F").s().p("Ah5BTQAPgoARgoQASgmAhgcQAkgbAugGQArgFAjAUQgogUgtAKQguAKgiAdQghAfgQAmQgPAogOApg");
	this.shape_455.setTransform(-179.2,85.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#7F7F7F").s().p("ABNCTQBehuAIiAQAHh2g8hZQBYB9gOB1QgQB8haBdQhaBfh6AoIhSAEQC5gqBchvg");
	this.shape_456.setTransform(-62.8,43.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#7F7F7F").s().p("AB3hfQheiHkDgTQC2gDCFBvQCHBuATDdIgDA8QgUjUhdiFg");
	this.shape_457.setTransform(-216.1,99.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#7F7F7F").s().p("AgegKIAPACIAmAIIAIALg");
	this.shape_458.setTransform(-194,88.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#7F7F7F").s().p("ABEDWQgMhEgjhqQgghngghUIghhYIAEgWICMGJIAFAxQAEAsAAAWIAAAHQgCAAgHgsg");
	this.shape_459.setTransform(-209.5,40.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#7F7F7F").s().p("AAaN9IgDiCIgHk7IgJmJIgHlpIgFjeQgGiVgMhgQgNhggCgEIAFgTQACgCASBaQAQBaAKDNQAEBwAEDhIAIHTIAHGiIADC0g");
	this.shape_460.setTransform(-203.5,35.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#7F7F7F").s().p("AhSCKQAAgNAFgXIAEgcICYjWIAEAMQgCACgiAuQghAugkA4QglA6gOAmQgHAXgCAAIAAgDg");
	this.shape_461.setTransform(-195.2,-17.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#7F7F7F").s().p("AgZElIAEhkIAHjHIAIigQAGhDAKgeQALgdABAAIAEAGQgCACgIAfQgIAfgDAxQgCAngDBvIgCDRIgCBrg");
	this.shape_462.setTransform(-184.7,95.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#7F7F7F").s().p("AAPAYQgCABgMgJQgLgJgHgfQADgBAPAIQARAJAAAhg");
	this.shape_463.setTransform(-195.7,-36.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#7F7F7F").s().p("AgGgSQAWgSAGAAQACAmgRARQgPAQgDAAIgFACQgPglAZgSg");
	this.shape_464.setTransform(-191.2,-38.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#7F7F7F").s().p("AgSAHQgSgWAAgEQAngDARASQARAQAAADQgQAGgMAAQgQAAgLgOg");
	this.shape_465.setTransform(-218.9,14.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#7F7F7F").s().p("AgQAAQgEgVACgEQAcANAFARQAGATgCACQgfgDgEgXg");
	this.shape_466.setTransform(-213.5,3.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#7F7F7F").s().p("AgtAUIAEgGQgBgDAUgTQAVgVAvAEQAAAGgXAbQgOATgVAAQgPAAgSgHg");
	this.shape_467.setTransform(-197.1,30.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#7F7F7F").s().p("AgiAHQAAgDASgLQAQgOAjAJQAAAEgUAQQgJAJgKAAQgNAAgRgKg");
	this.shape_468.setTransform(-112.5,95.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#7F7F7F").s().p("AgSgJQACgYACgCIACgFQAkATgGAcQgGAegEAEQgbgcABgWg");
	this.shape_469.setTransform(-41.8,106.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#7F7F7F").s().p("AgFAbQgrgCgFgEQAhgsAfgCQAhgDADAEIAHABQgSAygmAAIgDAAg");
	this.shape_470.setTransform(37,2.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#7F7F7F").s().p("AhDASIAFgGQABgFAfgYQAegZBEANQgBAIglAkQgTATgYAAQgYAAgegQg");
	this.shape_471.setTransform(-61.2,76.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#7F7F7F").s().p("AgjAKIACgEQABgDAQgMQAQgNAkAHQAAAEgTATQgLALgMAAQgNAAgQgJg");
	this.shape_472.setTransform(-173.7,96.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#7F7F7F").s().p("AgxAGIAEgFQABgBAYgPQAYgPAuAQQgBAGgeAVQgNAKgNAAQgTAAgXgRg");
	this.shape_473.setTransform(-191.3,-18.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#F1EEDB").s().p("Egu9ABGIAAisMBd7AAiIAACrg");
	this.shape_474.setTransform(3.5,134.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#8F7521").s().p("Egu9AF6IAArzMBd7AAoIAALLg");
	this.shape_475.setTransform(3.5,162.1);

	this.instance = new lib.brick();
	this.instance.setTransform(12.2,-70);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#757478").s().p("Egu9AeOMAAAg8cMBd7AAAMAAAA8cg");
	this.shape_476.setTransform(1.7,-6.3);

	this.addChild(this.shape_476,this.instance,this.shape_475,this.shape_474,this.shape_473,this.shape_472,this.shape_471,this.shape_470,this.shape_469,this.shape_468,this.shape_467,this.shape_466,this.shape_465,this.shape_464,this.shape_463,this.shape_462,this.shape_461,this.shape_460,this.shape_459,this.shape_458,this.shape_457,this.shape_456,this.shape_455,this.shape_454,this.shape_453,this.shape_452,this.shape_451,this.shape_450,this.shape_449,this.shape_448,this.shape_447,this.shape_446,this.shape_445,this.shape_444,this.shape_443,this.shape_442,this.shape_441,this.shape_440,this.shape_439,this.shape_438,this.shape_437,this.shape_436,this.shape_435,this.shape_434,this.shape_433,this.shape_432,this.shape_431,this.shape_430,this.shape_429,this.shape_428,this.shape_427,this.shape_426,this.shape_425,this.shape_424,this.shape_423,this.shape_422,this.shape_421,this.shape_420,this.shape_419,this.shape_418,this.shape_417,this.shape_416,this.shape_415,this.shape_414,this.shape_413,this.shape_412,this.shape_411,this.shape_410,this.shape_409,this.shape_408,this.shape_407,this.shape_406,this.shape_405,this.shape_404,this.shape_403,this.shape_402,this.shape_401,this.shape_400,this.shape_399,this.shape_398,this.shape_397,this.shape_396,this.shape_395,this.shape_394,this.shape_393,this.shape_392,this.shape_391,this.shape_390,this.shape_389,this.shape_388,this.shape_387,this.shape_386,this.shape_385,this.shape_384,this.shape_383,this.shape_382,this.shape_381,this.shape_380,this.shape_379,this.shape_378,this.shape_377,this.shape_376,this.shape_375,this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-369.6,-202.2,739.3,402.1);


(lib.balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,pop:28,popped:43});

	// timeline functions:
	this.frame_27 = function() {
		/* gotoAndPlay("static");*/
	}
	this.frame_43 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(16).call(this.frame_43).wait(7));

	// Layer 7
	this.balloonhead = new lib.balloon_head();
	this.balloonhead.setTransform(0,-51.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(121,0,0,0.353)").s().p("Ai3GRIASgaQA/gcBChLQBVhmAYglQBHhvAJhZQAOiLhNhWQhJhShIgbQBZAbBCBFQBDBGAQBmQAJBjg5BiQg5BlhMBSQhMBTgyArIAJAdg");
	this.shape.setTransform(12,-51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,202,202,0.353)").s().p("ABCA7QgbhPgVgcQgpg7g+gFQA1gOAtAUQAgAOAWAwQAZA0gHBuIgTg7g");
	this.shape_1.setTransform(13.9,-71.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],11,-24.2,0,11,-24.2,57.6).s().p("Ag/GXIASgaQgIgChQhYQhQhXg7iKQgMgcgHgcQgehwAsh+QBFiZCBgWQB/gWBzBNQByBNAaCQQAGBFgaBEQgLAegRAeQg5BlhMBSQhOBTgwArIAHAdg");
	this.shape_2.setTransform(0,-51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(250,207,207,0.753)","rgba(88,1,1,0.502)"],[0,1],-20.8,0,18,0).s().p("AgKCDQhKhAh7jWQBMB+BaA2QBYA3A+gfQA+ggAZgUQAZgTgeAlQgdAmg/A4QgjAfggAAQgXAAgTgRg");
	this.shape_3.setTransform(-6.6,-29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(121,0,0,0.353)").s().p("AjKGVIASgaIAAAAQA+gcBChLQBWhmAvhCQAvhCAmiNQAmiQhIhGQhIhGg4gWQBBAWA7ApQBNA2ACBxQgOByhABvQhABxhMBVQhOBWgyAsIAIAcg");
	this.shape_4.setTransform(14,-51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,202,202,0.353)").s().p("AAXBMQAChTgKgiQgShGg4gaQA2AFAjAjQAaAZAEA0QAEA5gsBlQACgXABgng");
	this.shape_5.setTransform(19.7,-70.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],10.7,-23.3,0,10.7,-23.3,57.6).s().p("AhCGhIASgaQgIgDhUhGQhUhGgjhVQgjhVgchRQgchTAXh9QAkiKCZgvIAgAnIgKA8IA8BuIgehuIAehQIgqgdIAAAAQC7gpCqB2QCTBmh7DvIgDAHQgLAegRAfQg5BkhMBTQhNBSgxAsIAHAdg");
	this.shape_6.setTransform(0.3,-52.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],10.7,-21.7,0,10.7,-21.7,57.6).s().p("AhCGxIASgaQgIgDhUhGQhUhGgjhVQgjhVgchTQgchRAXh9QAkiKBRgjIBCAXIgeBqICCEAIgmj+ICGhIQAMhFAzg3QAjAtBtBLQCTBmh7DvIgDAHQgLAegRAfQg5BkhMBTQhNBSgxAsIAHAdgAgklVQgJgZgVgPIAUgoQAUAPAAArQAAAQgEAIQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQgCAAgBgFg");
	this.shape_7.setTransform(0.3,-54.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(121,0,0,0.353)").s().p("AjKGPIASgaIAAABQA+gcBChMQBWhmAvhCQAvhCAmiNQAmiQhIhGQgtgsgngZIAEgLQAdATA9AuQA9AtAEBsQgOBzhABuQhABxhMBVQhOBWgyAsIAIAcg");
	this.shape_8.setTransform(14,-50.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,202,202,0.353)").s().p("AASA/QANg5gOg0QgOg2gugqQAWAFAeAaQAgAaADBBQADA+gsBlQABgXAOg5g");
	this.shape_9.setTransform(23.7,-70.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],15.5,16.3,0,15.5,16.3,57.6).s().p("AAJAlQgJgZgTgNIATgoQAUAPgBApQAAAQgDAIQAAAAgBABQAAABAAAAQgBABAAAAQAAAAgBAAQgCAAgCgFg");
	this.shape_10.setTransform(-6.9,-87.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],10.7,-24.9,0,10.7,-24.9,57.6).s().p("AhCGQIASgaQgIgChUhHQhUhGgjhVQgjhVgchRQgchTAXh8QAkhNARgIIBGgpIgEBUIBABnIg8CpIBuheIAyBOIAUjCIB+AKIBSjLQAMALA/AsQCTBmh7DwIgDAGQgLAegRAeQg5BlhMBSQhNBTgxArIAHAdg");
	this.shape_11.setTransform(0.3,-51);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-1.6,-80.4,0,-1.6,-80.4,0).s().p("AhDAnIAUAKIgoBQQAHgPANhLgAiGAjQgSgiAEgBQAEgEAHgtQAvAvgbBlQAAgegRgigAAfAJQgTgPgdgDIA6goQACAUAAARQAAAYgHAAQgDAAgCgDgAAphtIBtgTIgPAoQgWA+gMAHQgtgdgPg9g");
	this.shape_12.setTransform(-1.6,-80.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(121,0,0,0.353)").s().p("AjoEVIASgaQA+gdBChLQBWhmAvhAQAng3AghoQgCAkBeiGQBCAgh2BTQgcATgRAXQgQAlgVAiQghA1gOAQQg1BFgyA5QgxA6gyArIAIAeg");
	this.shape_13.setTransform(17,-38.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,202,202,0.353)").s().p("AgFAzQAUgjAEglQADgogWgoQAOAKAPAYQAPAZgOArQgOAsgzA4QAGgPAYgjg");
	this.shape_14.setTransform(25.8,-58.8,1,1,0,0,0,-0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],108.2,83.7,0,108.2,83.7,1376.4).s().p("Agqg3QAkAIAVASQAVAQAFAKIACADQABAHgKACQgoAIgjAng");
	this.shape_15.setTransform(-32.1,-41.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],15.8,78,0,15.8,78,819.2).s().p("AAEAMQgSgegMANQgMAKAphOQAoB1gUAeQABgegUggg");
	this.shape_16.setTransform(-42.2,-57.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],15.8,78,0,15.8,78,819.2).s().p("AAEAMQgSgegMANQgMAKAphOQAoB1gUAeQABgegUggg");
	this.shape_17.setTransform(-14.2,-71.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],47.8,37,0,47.8,37,606.8).s().p("AgPgZQANAHAIAIQAUANgMACQgQAEgQARIADgzg");
	this.shape_18.setTransform(-2.4,-62.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],8.5,72,0,8.5,72,819.2).s().p("AAAgsIATAKIglBOQAGgOAMhKg");
	this.shape_19.setTransform(-7.3,-69.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],14.5,72,0,14.5,72,1392.6).s().p("AgfAqQAMgRAThFIAiAKIhBBMIgCACIACgCg");
	this.shape_20.setTransform(-24.3,-71.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],15.5,16.3,0,15.5,16.3,57.6).s().p("AAJAlQgIgZgUgNIATgoQAUAPgBApQAAAQgDAIQAAAAgBABQAAABAAAAQgBABAAAAQAAAAgBAAQgCAAgCgFg");
	this.shape_21.setTransform(-6.1,-82.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],7.6,-33.8,0,7.6,-33.8,57.7).s().p("AhhE4IASgaQgIgDhUhGQhUhGgkhVIgTgvIgCgFQgWg5gUg5QgbhSAVh6IA0A8IgCACIACgCIAKAMIB7gOIg9CrIBuhgQgBB3A3A2QBmAsBchVQg9hLAPhMQB/gkAegyIBZAgQBbAghRBCQhRBBgCAGQgLAegRAeQg5BjhNBSQhNBSgwAsIAIAdg");
	this.shape_22.setTransform(3.4,-42.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-4.5,51,0,-4.5,51,475.1).s().p("AgegTIA9gLIgJAXQgMAigHAEQgYgQgJgig");
	this.shape_23.setTransform(22,-70.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],47.8,37,0,47.8,37,606.8).s().p("AgPgZQANAHAIAIQAUANgMADQgQADgQARg");
	this.shape_24.setTransform(9.4,-50.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],108.2,83.7,0,108.2,83.7,1376.4).s().p("Agqg3QAkAIAVASQAtAhgaAFQgoAIgjAng");
	this.shape_25.setTransform(-0.1,-50.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-2.5,28.4,0,-2.5,28.4,263.9).s().p("AgQgKIAhgGIgFANQgHASgEACQgMgJgFgSg");
	this.shape_26.setTransform(6.1,-69.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],0.4,82.4,0,0.4,82.4,819.2).s().p("AASAcQgSgRgegDIA6gmQADAUgBAPQAAAagHAAQgCAAgDgDg");
	this.shape_27.setTransform(0.2,-73.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],0.4,82.4,0,0.4,82.4,819.2).s().p("AASAcQgSgRgegDIA6gmQADAUgBAPQAAAagHAAQgCAAgDgDg");
	this.shape_28.setTransform(7.2,-63.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-7.9,88,0,-7.9,88,819.2).s().p("Ag1giIBrgTIgPAoQgWA8gMAHQgrgdgPg7g");
	this.shape_29.setTransform(13,-76.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-7.9,88,0,-7.9,88,819.2).s().p("Ag1giIBrgTIgPAoQgWA8gMAHQgrgdgPg7g");
	this.shape_30.setTransform(41,-50.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-7.9,88,0,-7.9,88,819.2).s().p("Ag1giIBrgTIgPAoQgWA8gMAHQgrgdgPg7g");
	this.shape_31.setTransform(55.4,-70.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(121,0,0,0.353)").s().p("AiuDHIASgaQA/gcBChLQBWhkAvhCQAcgnAXhAIARAAIgCADQgRAlgUAiQghA2gOARQg4BDgvA5QgxA6gzArIAJAdg");
	this.shape_32.setTransform(11.2,-26.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,202,202,0.353)").s().p("AgFAzQAUgiAEgmQADgogWgnQAOAJAPAZQAPAYgOAqQgOAsgzA5QAGgPAYgjg");
	this.shape_33.setTransform(25.8,-54.8,1,1,0,0,0,-0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37,28.7,0,37,28.7,470.7).s().p("AgLgTQAKAFAFAHQAQAJgJACQgMADgMANIACgng");
	this.shape_34.setTransform(-27.1,-30.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37,28.7,0,37,28.7,470.7).s().p("AgLgTQAKAFAFAHQAQAJgJACQgMADgMANIACgng");
	this.shape_35.setTransform(-7.9,-41.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],47.7,37,0,47.7,37,606.8).s().p("AgPgZQANAHAIAIQAUANgMADQgQADgQARIADgzg");
	this.shape_36.setTransform(-2.3,-58.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-17.4,-54.6,0,-17.4,-54.6,0).s().p("AgTA9QgRgTghhPQAggsA5AbQAVAKAPAPQAPAPgCAHQgEAQgkAgQgbAYgMAAQgFAAgEgEg");
	this.shape_37.setTransform(-17.5,-50.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],15.8,78,0,15.8,78,819.2).s().p("AAEAMQgSgdgMAMQgMAKAphOQAoB1gUAeQAAgegTggg");
	this.shape_38.setTransform(-10.8,-55.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],8.5,72,0,8.5,72,819.2).s().p("AAAgrIATAKIglBOQAGgQAMhIg");
	this.shape_39.setTransform(-7.3,-65.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],35.9,-27.2,0,35.9,-27.2,57.6).s().p("AgjhYIBDAlIAAADIABgDIADCMQgwhBgXhwg");
	this.shape_40.setTransform(-35.7,-48.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],14.4,72.1,0,14.4,72.1,1392.6).s().p("AggArQANgSAThEIAhAKIhBBNIAAgBg");
	this.shape_41.setTransform(-26.6,-54.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],108.1,84.1,0,108.1,84.1,1376.4).s().p("Agjg7QAcAQAVASQAtAhgaAFQgoAIgjAng");
	this.shape_42.setTransform(0,-47.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37.7,29.2,0,37.7,29.2,479.1).s().p("AgLgUQAKAGAGAHQAPAJgJACQgMADgMAOg");
	this.shape_43.setTransform(16.8,-20.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],47.7,37,0,47.7,37,606.8).s().p("AgPgZQANAHAIAIQAUANgMADQgQADgQARg");
	this.shape_44.setTransform(9.5,-46.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],11.2,-42.2,0,11.2,-42.2,57.7).s().p("Ag9DjIASgaQgIgChUhHQhUhGgjhTQgQglgOglQALADASgRIBLA1QA+hjAAB3QBFARANhDQBmAtBchXQgYAKAGhWQAkBYAphrQgPA3AbgQQgQAXAZgDQAxgGgCAGQgLAegRAeQg5BlhMBQQhOBTgwArIAHAdg");
	this.shape_45.setTransform(-0.2,-29.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-4.6,51,0,-4.6,51,475.1).s().p("AgegTIA9gLIgJAXQgMAigIAEQgYgRgIghg");
	this.shape_46.setTransform(29.1,-51.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-2.5,28.4,0,-2.5,28.4,263.9).s().p("AgQgKIAhgGIgFANQgHASgEACQgMgJgFgSg");
	this.shape_47.setTransform(9.1,-61.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-6.2,68.7,0,-6.2,68.7,639.7).s().p("AgpgaIBTgPQgCAEgKAbQgRAugJAGQghgWgMgug");
	this.shape_48.setTransform(18,-55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(250,207,207,0.753)","rgba(88,1,1,0.502)"],[0,1],-20.8,0,18,0).s().p("AgKCDQhKhAh7jWQBMB+BaA2QBYA3A+gfQA+ggAZgUQAZgTgeAlQgdAmg/A4QgjAfgfAAQgYAAgTgRg");
	this.shape_49.setTransform(-6.6,-25.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(121,0,0,0.353)").s().p("AiCCDIASgaQA+gcBAhLQBHhRAkg0IAKANIAAABQgCACgXAdQgbAkgzA0QgxA1gyAwIAIAdg");
	this.shape_50.setTransform(6.8,-19.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37,28.7,0,37,28.7,470.7).s().p("AgLgTQAKAFAFAHQAHAFADACIAAACIgDACQgMADgMANIACgng");
	this.shape_51.setTransform(-27.1,-30.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],13.6,41.8,0,13.6,41.8,631.6).s().p("AgfA1QgcAAAHhUQAZgiArAVQAQAHAMAMQAMALgCAGQgDALgcAZQgbAZgaAAIgBAAg");
	this.shape_52.setTransform(-16.4,-42.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],14.4,72.1,0,14.4,72.1,1392.6).s().p("AgfArQALgSAUhEIAhAKIhBBNIABgBg");
	this.shape_53.setTransform(-25.2,-47.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-2.6,28.5,0,-2.6,28.5,265.6).s().p("AgQgKIAhgGIgFANQgHASgDACQgOgJgEgSg");
	this.shape_54.setTransform(-1.3,-23.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-11.5,-35.8,0,-11.5,-35.8,57.7).s().p("AALgMIgUAhQgDg7AXAag");
	this.shape_55.setTransform(10.6,-26.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37.6,29.8,0,37.6,29.8,479.1).s().p("AgMgOQAKAGAGAGQAPAKgJACQgHABgEAEg");
	this.shape_56.setTransform(27.9,-16.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37.6,29.8,0,37.6,29.8,479.1).s().p("AgMgOQAKAGAGAGQAPAKgJACQgHABgEAEg");
	this.shape_57.setTransform(16.9,-20.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37.6,29.8,0,37.6,29.8,479.1).s().p("AgMgOQAKAGAGAGQAPAKgJACQgHABgEAEg");
	this.shape_58.setTransform(8.3,-10.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],15.4,-48,0,15.4,-48,57.7).s().p("AgTCqIASgaQgIgChUhHQg+g0gjg5QATgKAhhGQAEDfAmhmQgCAiCUARQBvg8ARgTQAZh1AoBBQgkAygpArQhOBSgyAsIAJAdgAjyicQALACASgQQgDA0ACAgIgchGg");
	this.shape_59.setTransform(-4.4,-24);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],46.6,37,0,46.6,37,606.8).s().p("AgagZIAxApQATAPgdgLQgbgLgPARg");
	this.shape_60.setTransform(12.8,-43.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],0.4,82.4,0,0.4,82.4,819.2).s().p("AASAcQgSgRgegDIA6gmQADAUgBAPQAAAagHAAQgCAAgDgDg");
	this.shape_61.setTransform(12,-49.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-4.6,51,0,-4.6,51,475.1).s().p("AgegTIA9gLIgIAXQgNAigIAEQgXgRgJghg");
	this.shape_62.setTransform(31.1,-26.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],14.9,16.2,0,14.9,16.2,57.7).s().p("AAEAkQgHgYgVgOIAUgnQAiAogGASQgGATgFAFIgEABQgDAAgCgGg");
	this.shape_63.setTransform(19.9,-38.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-15.1,-27.9,0,-15.1,-27.9,57.7).s().p("AgVgZQAtgGgCAGQgKAagOAcIgTg2g");
	this.shape_64.setTransform(24.9,-40.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(250,207,207,0.753)","rgba(88,1,1,0.502)"],[0,1],-27.1,-7.4,11.7,-7.4).s().p("AhJA5QgxgqgWgsQAGAFA3AYQBBAaA+gjQBAgmAZgUQAZgUgeAmQgdAmg/A2QgjAggdAAQgYAAgVgSg");
	this.shape_65.setTransform(-0.3,-18.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(121,0,0,0.353)").s().p("AhlBfIASgaQA+gcBAhKQAggjAagaIAAgBIABAAQgVAhgtApQgqAngkAxIAIAdg");
	this.shape_66.setTransform(3.9,-16.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],29.3,-45.9,0,29.3,-45.9,57.7).s().p("AAsBbQg8gzgjg5QATgKAghGQADDeAmhmQgIA2ATAVIgIgHg");
	this.shape_67.setTransform(-18.3,-26);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-2.5,28.5,0,-2.5,28.5,265.6).s().p("AgQgKIAhgGIgFANQgHASgEACQgMgJgFgSg");
	this.shape_68.setTransform(-1.3,-23.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],16.6,80.5,0,16.6,80.5,819.2).s().p("AAMAlQgSgggMAMQgMANAphPIAKBiIAAABQgBAAgIgNg");
	this.shape_69.setTransform(-8.6,-22.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],13.6,41.8,0,13.6,41.8,631.6).s().p("AggA1QgbAAAHhUQAZgiArAVQAQAHAMAMQAMALgCAGQgDALgcAZQgbAZgbAAIgBAAg");
	this.shape_70.setTransform(-23.4,-15.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37,28.7,0,37,28.7,470.7).s().p("AgLgTQAKAFAFAGQAIAGACACQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgMADgMANIACgng");
	this.shape_71.setTransform(-27.1,-30.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37,28.2,0,37,28.2,470.7).s().p("AgIAJIgFAGQAAgLAFAFgAAEgNQAQAMgJABQgGAAgFADQAAgUAEAEg");
	this.shape_72.setTransform(-12.9,-28.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37.6,29.8,0,37.6,29.8,479.1).s().p("AgMgOQAKAGAFAGQAQAKgJACQgHABgFAEg");
	this.shape_73.setTransform(27.9,-16.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-5.4,-43.3,0,-5.4,-43.3,57.7).s().p("AgcATQAZhyAmBAQghAsgkAqQAJgTgDgRg");
	this.shape_74.setTransform(20.8,-15.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],13.2,-60.8,0,13.2,-60.8,57.6).s().p("AgoApIARgaQgFgCgwglQBCArBPg3IAIgFIgHAHQgdAdgYASIAIAdg");
	this.shape_75.setTransform(-2.2,-7.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37.6,29.8,0,37.6,29.8,479.1).s().p("AgMgOQAKAGAFAGQAQAKgJACQgHABgFAEg");
	this.shape_76.setTransform(8.3,-10.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],37.6,29.8,0,37.6,29.8,479.1).s().p("AgMgOQAKAGAFAGQAQAKgJACQgHABgFAEg");
	this.shape_77.setTransform(16.9,-20.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],0.4,80.9,0,0.4,80.9,819.2).s().p("AAAAjIAEgGIAOAOQgCACgDAAQgGAAgHgKgAgegEIAiAhIgFAFQgMgNgRgZgAAFgcIACgCIAVgOQADATAAAZQAAAUgGAMQgVg7ABgBg");
	this.shape_78.setTransform(9.2,-16.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],47.9,37,0,47.9,37,606.8).s().p("AgNgZQARAZANARQgUgFgNAOg");
	this.shape_79.setTransform(16.3,-30.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],14.9,16.2,0,14.9,16.2,57.7).s().p("AAEAlQgHgZgVgOIAUgoQAjApgHASQgFAQgFAGIgBACIgEACQgDgBgCgFg");
	this.shape_80.setTransform(4.3,-25.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(250,207,207,0.753)","rgba(88,1,1,0.502)"],[0,1],-29,-7.4,9.8,-7.4).s().p("AhcA5IgJgIQg0goBGAVQBGAVAygyQA0gwAZgUQAYgUgdAmQgeAmg+A2QgiAggfAAQgYAAgUgSg");
	this.shape_81.setTransform(1.7,-18.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(121,0,0,0.353)").s().p("AhiBfIASgaQA+gcBAhKIA1g+IglAxQAWgQgZAeQgyA3gwAsIAIAdg");
	this.shape_82.setTransform(3.6,-20.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-80.9,-9.4,0,-80.9,-9.4,818.9).s().p("AgGAKQgTgCgNgHQA9gNABABIACACIANAVIgIAAQgRAAgUgCg");
	this.shape_83.setTransform(-17.4,2.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-3.7,41.3,0,-3.7,41.3,384.6).s().p("AgYgPIAxgJIgHATQgKAbgGADQgTgNgHgbg");
	this.shape_84.setTransform(-5.4,13.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-2.1,23.1,0,-2.1,23.1,218.7).s().p("AgJgBQAWgOgDAJQgGAOgDACQgGgFgEgGg");
	this.shape_85.setTransform(-5.6,3.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],25.9,-52.1,0,25.9,-52.1,57.7).s().p("AAKAeIgbgaQAMgEAMgkQgHA0ASAVIgIgHg");
	this.shape_86.setTransform(-12.1,-7.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],32.3,-46.8,0,32.3,-46.8,57.7).s().p("AgUgaQASgKAKAQQAGAgAHATQgXgcgSgdg");
	this.shape_87.setTransform(-14.9,-18.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],6.2,16.5,0,6.2,16.5,255.6).s().p("AgFARQgLAAADghQARAYALAAQgLAJgIAAIgBAAg");
	this.shape_88.setTransform(-20.2,-13.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-9.8,-44.5,0,-9.8,-44.5,104.8).s().p("Ag0AIQAtgvBHgDQg8AshDApQAQgSgFgRg");
	this.shape_89.setTransform(9.5,7.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-1.4,81.6,0,-1.4,81.6,819.2).s().p("AgLgWIABgBIAUgPQACAUAAAZQAAATgGANQgTg7ACgCg");
	this.shape_90.setTransform(11.1,-10);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-4,-45.9,0,-4,-45.9,57.7).s().p("AgOgEIAGgYIAFAAIAAAIIAYAAQgVAYgUAZQAIgSgCgPg");
	this.shape_91.setTransform(16.9,-7.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],1.7,79.5,0,1.7,79.5,819.2).s().p("AgQgTIAiAhIgIAGQgKgNgQgag");
	this.shape_92.setTransform(4.3,-10.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],42,28.9,0,42,28.9,479.1).s().p("AgrgVQA+AnAWgJIACgBIgMANIgIABQghAAghgrg");
	this.shape_93.setTransform(-1.2,-2.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-0.4,77.2,0,-0.4,77.2,819.2).s().p("AgJAAIAHgHIAMAMQgCADgDAAQgFAAgJgIg");
	this.shape_94.setTransform(10.1,-17);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-6.3,-39.5,0,-6.3,-39.5,57.7).s().p("AASAMQgSgVgYAVQAVg1AcAvIgHAKg");
	this.shape_95.setTransform(18.2,-16.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(250,207,207,0.753)","rgba(88,1,1,0.502)"],[0,1],-28.7,-7.4,10.1,-7.4).s().p("AhZA5QhKg9BIAxQgHABAVAOQAWAOAegCQgKADgKAAQgYAAgUgSgAB0hCQAZgVgdAmQgaAig1AuQA7hNAYgUg");
	this.shape_96.setTransform(1.4,-22.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-81,-9.4,0,-81,-9.4,818.9).s().p("AgHAKQgSgCgMgHQA8gOABACIACACIANAVIgHAAQgSAAgVgCg");
	this.shape_97.setTransform(-17.3,6.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],25.9,-52.1,0,25.9,-52.1,57.7).s().p("AAJAeIgagaQAMgEAMgkQgHA0ASAVIgJgHg");
	this.shape_98.setTransform(-12,-3.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],6.2,16.5,0,6.2,16.5,255.6).s().p("AgNgQQARAXALABQgLAJgJAAQgLAAADghg");
	this.shape_99.setTransform(-20.2,-9.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],42,29,0,42,29,479.1).s().p("AgrgUQA+AnAXgKIABgBIgMANIgIAAQghAAghgpg");
	this.shape_100.setTransform(-1.2,1.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-9.8,-44.5,0,-9.8,-44.5,104.8).s().p("Ag0AIQAtgwBHgCQg8AshDApQAQgSgFgRg");
	this.shape_101.setTransform(9.5,11.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-4.6,51,0,-4.6,51,475.1).s().p("AgegTIA9gLIgIAXQgOAigGAEQgYgRgJghg");
	this.shape_102.setTransform(19.7,3.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-6.4,-39.5,0,-6.4,-39.5,57.7).s().p("AARAMQgRgVgZAVQAWg1AcAvIgIAKg");
	this.shape_103.setTransform(18.2,-12.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-4,-45.9,0,-4,-45.9,57.7).s().p("AgOgFQACgNAEgKIAFAAIAAAIIAYAAQgVAYgUAZQAIgTgCgPg");
	this.shape_104.setTransform(16.9,-3.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-1.4,81.6,0,-1.4,81.6,819.2).s().p("AgLgWIABgCIAUgOQACATAAAaQAAATgGANQgTg8ACgBg");
	this.shape_105.setTransform(11.1,-5.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-0.5,77.2,0,-0.5,77.2,819.2).s().p("AgJAAIAHgHIAMAMQgCADgDAAQgFAAgJgIg");
	this.shape_106.setTransform(10.1,-13);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],13.2,-60.8,0,13.2,-60.8,57.6).s().p("AgoApIARgaQgFgCgwglQBCArBPg3IAIgFIgHAGQgeAegXASIAIAdg");
	this.shape_107.setTransform(-2.2,-11.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-4,-45.9,0,-4,-45.9,57.7).s().p("AgOgFQACgNAEgKIAFAAIAAAIIAYAAQgVAYgUAZQAIgSgCgQg");
	this.shape_108.setTransform(16.9,6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-1.4,81.6,0,-1.4,81.6,819.2).s().p("AgLgVIABgDIAUgOQACAUAAAZQAAATgGANQgTg8ACAAg");
	this.shape_109.setTransform(11.1,3.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["rgba(255,11,11,0.753)","rgba(137,12,12,0.753)"],[0,1],-81,-10.1,0,-81,-10.1,818.9).s().p("AgGADQgUgCgMgFIBLAGIABADIgGAAQgSAAgUgCg");
	this.shape_110.setTransform(3.9,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.balloonhead}]}).to({state:[{t:this.balloonhead}]},7).to({state:[{t:this.balloonhead}]},13).to({state:[{t:this.balloonhead}]},8).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_7},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-6.9,y:-87.1}},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_3},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:7.2,y:-63.2}},{t:this.shape_27,p:{x:0.2,y:-73.8}},{t:this.shape_26,p:{x:6.1,y:-69.1}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:22,y:-70.9}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_49},{t:this.shape_10,p:{x:-1.5,y:-68.9}},{t:this.shape_28,p:{x:2.6,y:-61.2}},{t:this.shape_27,p:{x:6.8,y:-54.6}},{t:this.shape_48,p:{x:18,y:-55}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_26,p:{x:29.3,y:-40.1}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:-35.7,y:-48.1}},{t:this.shape_39,p:{x:-7.3,y:-65.2}},{t:this.shape_38,p:{x:-10.8,y:-55.8}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-27.1,y:-30.5}},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_26,p:{x:28.5,y:-34.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_48,p:{x:6.8,y:-35}},{t:this.shape_28,p:{x:0.4,y:-29.8}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_42},{t:this.shape_53},{t:this.shape_27,p:{x:-11,y:-50.4}},{t:this.shape_35},{t:this.shape_52},{t:this.shape_34,p:{x:-12.9,y:-29.3}},{t:this.shape_38,p:{x:-7,y:-32.4}},{t:this.shape_39,p:{x:-0.1,y:-38}},{t:this.shape_40,p:{x:-34.5,y:-35.7}},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{y:-7.1}},{t:this.shape_74},{t:this.shape_23,p:{x:24.4,y:-7.3}},{t:this.shape_73},{t:this.shape_55},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_75,p:{y:-15.1}},{t:this.shape_93},{t:this.shape_92,p:{y:-10.5}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_23,p:{x:19.6,y:-0.3}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{y:-18.3}},{t:this.shape_86},{t:this.shape_85,p:{y:3.2,x:-5.6}},{t:this.shape_84,p:{x:-5.4,y:13.9}},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_92,p:{y:-6.5}},{t:this.shape_104},{t:this.shape_103,p:{y:-12.3}},{t:this.shape_102,p:{y:3.7}},{t:this.shape_101,p:{y:11.7}},{t:this.shape_100,p:{y:1.5}},{t:this.shape_99,p:{y:-9.6}},{t:this.shape_87,p:{y:-14.3}},{t:this.shape_98,p:{y:-3.9}},{t:this.shape_85,p:{y:7.2,x:-5.6}},{t:this.shape_97,p:{y:6.8}},{t:this.shape_84,p:{x:-5.3,y:17.9}}]},1).to({state:[{t:this.shape_103,p:{y:-3.1}},{t:this.shape_102,p:{y:12.9}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_100,p:{y:10.7}},{t:this.shape_92,p:{y:2.7}},{t:this.shape_101,p:{y:20.9}},{t:this.shape_98,p:{y:5.3}},{t:this.shape_97,p:{y:16}},{t:this.shape_85,p:{y:16.4,x:-5.6}},{t:this.shape_84,p:{x:-5.3,y:27.1}},{t:this.shape_99,p:{y:-0.4}}]},1).to({state:[{t:this.shape_102,p:{y:25.3}},{t:this.shape_92,p:{y:15.1}},{t:this.shape_100,p:{y:23.1}},{t:this.shape_101,p:{y:33.3}},{t:this.shape_98,p:{y:17.7}},{t:this.shape_99,p:{y:12}},{t:this.shape_85,p:{y:28.8,x:-5.6}},{t:this.shape_97,p:{y:28.4}},{t:this.shape_84,p:{x:-5.3,y:39.5}}]},1).to({state:[{t:this.shape_102,p:{y:13.3}},{t:this.shape_101,p:{y:21.3}},{t:this.shape_100,p:{y:11.1}},{t:this.shape_97,p:{y:16.4}},{t:this.shape_85,p:{y:16.8,x:-5.6}},{t:this.shape_84,p:{x:-5.3,y:27.5}}]},1).to({state:[{t:this.shape_101,p:{y:28.9}},{t:this.shape_102,p:{y:20.9}},{t:this.shape_84,p:{x:-5.3,y:35.1}},{t:this.shape_85,p:{y:24.4,x:-5.6}}]},1).to({state:[{t:this.shape_85,p:{y:50.4,x:15.6}},{t:this.shape_110}]},1).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.balloonhead).to({scaleX:1.04,scaleY:1.04,rotation:-5,x:-2,y:-52.8},7).to({scaleX:1.02,scaleY:1.02,rotation:4.5,x:3.1,y:-52},13).to({scaleX:1,scaleY:1,rotation:0,x:0,y:-51.2},8).to({_off:true},1).wait(21));

	// Layer 6
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1,1,1).p("AALoDQAtCxgLCYQgLCZg5DbQg7DeBYBs");
	this.shape_111.setTransform(-3.7,40.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("AAHoDQABCxAKCQQALCRghC3QgjC7ApDD");
	this.shape_112.setTransform(-3.4,40.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1).p("AALoDQgLCuAHCPQAGCQgQDCQgSDEAbC0");
	this.shape_113.setTransform(-3.8,40.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("AAFn9QgBDUgEDEQgEDCABBGQABBGgCEV");
	this.shape_114.setTransform(-3.4,40.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1,1,1).p("AAKn9QgNDBgFDMQgFDKANB/QAOB/gOCm");
	this.shape_115.setTransform(-4,40.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("AAAoDQgHClgDCUQgECVARDRQASDUgSCU");
	this.shape_116.setTransform(-2.7,40.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("AgEoDQgXCxABCUQABCVAkDLQAmDOgxCU");
	this.shape_117.setTransform(-2.4,40.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("AgKoDQgtCxALCYQALCZA5DbQA7DehYBs");
	this.shape_118.setTransform(-1.8,40.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("AAKoDQAACxALCNQAMCNgnC6QgoC9AzDF");
	this.shape_119.setTransform(-3.6,40.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AAAoDQArCxgLCYQgLCZglC0QgnC3AyC6");
	this.shape_120.setTransform(-2.5,40.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("Ag4nvQBxCrAACSQABCTgyDQQgvDTBYBs");
	this.shape_121.setTransform(-8,55.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AhImrQCRBPAACmQABCmgyCnQgvCpBYBs");
	this.shape_122.setTransform(-9.6,69.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1,1,1).p("AhImrQCRC9AACAQABB+gyCYQgvCYBYBs");
	this.shape_123.setTransform(-9.6,87.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AhgmAQDBgbAACAQABCAgyCXQgwCWAhD0");
	this.shape_124.setTransform(-12,120.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1,1,1).p("AhskbQBmgfBMAjQBNAkhLC/QhJC9BWCi");
	this.shape_125.setTransform(-17.3,145.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("AiIjrQBmgfBLAjQBOAkhLC/QhJC9CmBC");
	this.shape_126.setTransform(-14.4,165.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("AioiAQB8hNBWAJQBXAJhACgQhACeCoBD");
	this.shape_127.setTransform(-17.6,194.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1,1,1).p("AiYgxQAsh0BYAJQBVAJgoB4QgmB2CmBC");
	this.shape_128.setTransform(-16,198.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1).p("AiIghQAtgRBdgKQBegKgfBQQggBRBogu");
	this.shape_129.setTransform(-20.8,198.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111,p:{y:40.8}}]}).to({state:[{t:this.shape_112}]},2).to({state:[{t:this.shape_113}]},2).to({state:[{t:this.shape_114}]},2).to({state:[{t:this.shape_115}]},2).to({state:[{t:this.shape_116}]},2).to({state:[{t:this.shape_117}]},2).to({state:[{t:this.shape_118}]},2).to({state:[{t:this.shape_117}]},2).to({state:[{t:this.shape_116}]},2).to({state:[{t:this.shape_115}]},2).to({state:[{t:this.shape_114}]},2).to({state:[{t:this.shape_113}]},2).to({state:[{t:this.shape_119}]},2).to({state:[{t:this.shape_120}]},2).to({state:[{t:this.shape_111,p:{y:41.1}}]},1).to({state:[{t:this.shape_111,p:{y:49.1}}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122,p:{y:69.9}}]},1).to({state:[{t:this.shape_122,p:{y:85.9}}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125,p:{y:145.9}}]},1).to({state:[{t:this.shape_125,p:{y:161.9}}]},1).to({state:[{t:this.shape_126,p:{y:165.1}}]},1).to({state:[{t:this.shape_126,p:{y:189.1}}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-92.1,60.9,185.6);


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
	this.text = new cjs.Text("", "16px 'ComicSansMS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 55;
	this.text.setTransform(-2.4,-41.4,0.999,1.007);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(8).to({_off:false},0).wait(10));

	// Balloons
	this.text_1 = new cjs.Text("", "16px 'ComicSansMS'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 55;
	this.text_1.setTransform(-2.4,-42.1,0.999,1.006);

	this.text_2 = new cjs.Text("", "16px 'ComicSansMS'", "#6A0F0F");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 55;
	this.text_2.setTransform(-1.6,-41.4,0.999,1.006);

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
p.nominalBounds = new cjs.Rectangle(-29.7,-49.7,59.4,100.5);


(lib.arrow = function() {
	this.initialize();

	// Layer 2
	this.arrowhead = new lib.arrowhead();
	this.arrowhead.setTransform(0,3.2,1,1,0,0,0,1.4,2.6);
	this.arrowhead.alpha = 0;

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAgdIAVA6IgVgIIgUAJg");
	this.shape.setTransform(0,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAfIgWAOIAAhOIAagLIAVAOIAABMg");
	this.shape_1.setTransform(-0.5,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAjBIAAGD");
	this.shape_2.setTransform(-0.2,24.2);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.arrowhead);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-0.1,5.2,52.7);


(lib.prep_button_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{floating:0,pause:50,"static":56,"pop":62,flyaway:80});

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
p.nominalBounds = new cjs.Rectangle(-11.8,1.1,59.4,99.6);


// stage content:



(lib.slingshotCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:44,win:50});

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
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "MatchingGame"); // For local testing
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/prepositionPower.xml", "MatchingGame"); // For local testing
		}*/
	}
	this.frame_2 = function() {
		/* stop();
		
		dispatchEvent ({type:"ready", bubbles:true});
		
		playBtn.onRelease = function() {
			play();
		}*/
	}
	this.frame_44 = function() {
		/* stop();
		if (game != undefined) delete (game);
		var game:RunGame = new RunGame(this);
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
	this.frame_50 = function() {
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(42).call(this.frame_44).wait(6).call(this.frame_50).wait(8));

	// Congrats
	this.playAgain = new lib.playAgain();
	this.playAgain.setTransform(305.5,388.8,1,1,0,0,0,83.5,18);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false, new lib.playAgain(), 3);

	this.text = new cjs.Text("out of", "bold 10px 'Arial'", "#453510");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.lineWidth = 49;
	this.text.setTransform(298.5,326.8);

	this.instance = new lib.congrat();
	this.instance.setTransform(299.4,196.3,0.599,0.599);

	this.text_1 = new cjs.Text("Great job! You beat the game.", "bold 22px 'Comic Sans MS'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 408;
	this.text_1.setTransform(308.3,342.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.instance},{t:this.text},{t:this.playAgain}]},50).wait(8));

	// Logo
	this.instance_1 = new lib.logo_SS();
	this.instance_1.setTransform(296.4,264.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(29).to({alpha:0},6).to({_off:true},1).wait(14));

	// Instructions
	this.instance_2 = new lib.logo_SS();
	this.instance_2.setTransform(296.4,264.5);

	this.instance_3 = new lib.baloon_cvr();
	this.instance_3.setTransform(303.5,183.5);

	this.text_2 = new cjs.Text("Pull and release the slingshot to shoot the correct balloon", "16px 'Comic Sans MS'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 349;
	this.text_2.setTransform(310.7,1);

	this.playBtn = new lib.Play_button();
	this.playBtn.setTransform(306.3,375.2);

	this.instance_4 = new lib.bground_1();
	this.instance_4.setTransform(303.7,204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.playBtn},{t:this.text_2},{t:this.instance_3},{t:this.instance_2}]},2).to({state:[]},6).wait(50));

	// baloon_cvr
	this.instance_5 = new lib.baloon_cvr();
	this.instance_5.setTransform(303.5,183.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({scaleX:1.45,scaleY:1.45,y:113.5,alpha:0},12).wait(38));

	// bground_1
	this.instance_6 = new lib.bground_1();
	this.instance_6.setTransform(303.7,204);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(10).to({x:4.7,y:201,alpha:0},19).wait(21));

	// Background
	this.instance_7 = new lib.flower();
	this.instance_7.setTransform(280.5,294.6);

	this.instance_8 = new lib.bground_2();
	this.instance_8.setTransform(300.7,199.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},8).to({state:[{t:this.instance_8},{t:this.instance_7}]},36).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;