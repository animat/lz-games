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



(lib.trunks = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AijBNQAAghACgrIAFhHIAAgFIAGAAQCVABCVgIIAGAAIABAGQAEAeACApQADAmAAAfIAAAGIgGAAQheAIh/AEIhkABgAiUgBQgCAkAAAgIAAADIAzAAIAkgBQB6gEBdgGQgBg/gIhBQiQAHiPgBIgEA+g");
	this.shape.setTransform(-1.1,-42.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AidBNQAAgjACgqIAFhFQCWABCUgIQAEAeADAoQACAmABAgQhjAHh6AFIhHABIgXAAg");
	this.shape_1.setTransform(-1.1,-42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDB1QgZgTgLgRQgHgOgDgxQgCgvgBgzIgBhIIANAAQAABCACBJQADBHAGAQQAQAZBDArIgHALQgagQgYgUg");
	this.shape_2.setTransform(-8.9,-20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah1BLQBlgVA8hAQA9hCADgKIAKAHQgEANhABCQg9BChoAVg");
	this.shape_3.setTransform(-51.5,-29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvAUQg1gZgMgYQgOghAFgEIAMAEQgEACAMAaQAMAWAyAXQAxAYByATIgCAMQh2gTgzgbg");
	this.shape_4.setTransform(44.6,-32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCBIQgQgDgEgPIgCg6QgCg1ALgMQAPgGALAFQAOAKAAAEIAAADIAAACQgEASACAnQACA2gFAFQgHAIgLAAIgEgBgAgIg6QgEARAAAsQAAAkADANQAEAIAFAAQAGACADgEQACgGAAgSIAAgbIgBgcQAAgWACgJQAAgGgMAAIgIAAg");
	this.shape_5.setTransform(-55.6,-48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#458AC9").s().p("AgPA1QgDgQABgtQAAgvAFgIQARgGAHAHQAHAHAAACQgEASACApQACAsgEALQgIAGgHAAQgIAAgHgOg");
	this.shape_6.setTransform(-55.6,-48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSBJQgRgEgFgLQgFgQAAgrQAAgtAIgTQADgGAFgBQAogHAQAJQARAIgBADIADADIgDAEQgGASADApQAFA2gMAIQgOAHgQAAQgJAAgMgDgAgZg9QgHAMAAAsQgBArAFAPQACAFALAEQAZAFAQgIQADgFAAgSIgBgdIgBgdQAAgVAEgLQgDgIgcAAIgZABg");
	this.shape_7.setTransform(-32.5,-43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#458AC9").s().p("AgDBGQgXgCgHgMQgFgRAAgwQABgxAKgIQAlgGAPAHQAPAIgBABQgIATAEAsQADAtgHAMQgLAGgRAAIgGAAg");
	this.shape_8.setTransform(-32.5,-43.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSBBQgFgFACg2QABgngDgSIgBgCIABgCQAAgFAOgKQAJgFAPAGQALAMgBA1IgDA6QgEAPgPAEIgDAAQgLAAgHgIgAgEg7QgGAEgBADQACAJAAAWIAAAcIAAAcQAAASABAEQADAFAGgCQAFABAEgJQACgNAAgkQAAgsgDgRQgGgCgDAAIgEABg");
	this.shape_9.setTransform(51.7,-49.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#458AC9").s().p("AgNA9QgEgLACgsQABgpgDgSQgBgCAHgHQAHgHARAGQAFAIAAAvQAAAtgCAQQgIAOgIAAQgGAAgHgGg");
	this.shape_10.setTransform(51.8,-49.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggBFQgLgJAFg2QADgpgGgSIgDgDIADgEQgBgCARgJQAQgIAmAGQAFABADAGQAIATAAAtQAAArgFARQgFAKgRAFQgLADgIAAQgRAAgOgHgAgdg2QAEAKAAAWIgBAdIgBAdQAAASADAEQAPAJAYgGQALgDACgFQAEgNAAglQAAgwgHgQIgZgBQgaAAgDAIg");
	this.shape_11.setTransform(29.5,-44.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#458AC9").s().p("AgcBAQgIgMADgtQAEgsgIgTQAAgBAOgIQAOgHAkAGQAKAIABAxQAAAwgEARQgIAMgWACIgGAAQgQAAgKgGg");
	this.shape_12.setTransform(29.5,-44.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjYBDQiogDhUgPIg2gNIAUgHQA2gUCUghQCUgjC2gIQC/gDB/AYQCAAXAoAfIAHAGIgIAEQghAQg/AJQhwAOiyAHQh3AEhwAAIhygBgAAfg2QilAGiKAfQiKAchDAXIAMADQBRAPCoADQCpADCwgHQCygGBugPQA0gHAdgMQgtgbh7gUQhtgTiZAAIglABg");
	this.shape_13.setTransform(-1.5,-55.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#04385E").s().p("AjbA9QipgDhUgPIghgIQA5gVCTghQCSgiCzgIQC7gDB/AXQB/AWApAfQgZAOhFAKQhtAPixAGQh6AFhzAAIhsgBg");
	this.shape_14.setTransform(-0.9,-55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjNBdQiogDhUgPQg3gMgVgNQgVgNgJgNIgGgIIADgEQAIgJALgCQAIgDCfgjQCegkDigRQDhgMCaAeQCaAeAeAuIAEAIIgMAJQgMANgaAMQgbANhBAKQhvAOiyAHQh3AFhwAAIhygCgAAFhOQjhASieAjQidAhgJAFQgFABgDAEQAIALAUAMQATALAyALQBSAOCoAEQCpADCwgHQCygGBugPQA+gJAZgMQAZgMALgMIAEgDQgbgmiUgeQhsgViWAAQg4AAg9ADg");
	this.shape_15.setTransform(-2.6,-57.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AmgCBQh8gegigYIgJgFIAJgGQgFgQgCgoQgDgyAmgRQAIgECfgkQCegjDhgSQDigMCaAeQCaAeAeAwQADAEAJAiQAJAggKAyIgBACIgCACQg5AmiSAVQiTAVkRAIIg3AAQjMAAhugbgAAFiMQjgASieAjQidAkgJAEQgbAMACArQABAjAGAXIAAACQAnAZB6AbQB6AcDngFQDkgFCegTQCfgSBFgqQAFgVAAgSQgHg/gIgHQgZgoiVgfQhtgWiYAAQg3AAg+ADg");
	this.shape_16.setTransform(-2.7,-51.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ADADAD").s().p("AmhB7Qh7gegggXIADgDQgDgGgEgyQgEgwAigQQAHgECdgjQCegkDkgSQDjgLCXAeQCYAeAbAsQACACAKAhQAJAggLAxQh3BNn0AKIg3AAQjNAAhtgbg");
	this.shape_17.setTransform(-2.6,-51.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#458AC9").s().p("Am+KTQiDgXirhpIAXiJIAykxQAdisAViLQAViLgCgXQgEgBgLgUQgKgUAugdQgDgGgEgyQgEgyAigQQAHgECdgjQCdgkDmgSQDhgLCYAeQCXAeAbAsQADACAKAmQAKAmgQA0QAFABAVARQAUASgbAhIANB4QANByAYCcQAYCeAhCJQAgCIAoAyQgFAFh1A1QhzA1icAoQibAnh/gjIg4rAIgagDQgagCgfgGIhpLNQgBAEhJANQgbAFgiAAQg7AAhSgOg");
	this.shape_18.setTransform(-0.9,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AA9LDIgIgDIgJhvIgTj3IgUj6IgIh6QgUgBgcgKIgTB/IglD8IgkD1IgQBuIgGADQgHAGhOAMQhOAMiHgbQiHgbiyhtIgHgFIABgIQAfi3AejKQAdjJAUiZQAUiZABgjQgMgKgEgSIgBgHQABgbAkgXQgGgXAAggQAAgTADgPQAOgqAXgCQAJgHCmg0QClg0DtgVQDpgKCgAwQCfAvAgA1IgBgBQAMAQAHBFQgBAYgHAbQAWAKAKAdIABAIQgBARgPARIARCXQAPB6AYCaQAYCdAgCDQAhCEAmAvIAKAMIgOAIQgPAKh5A3Qh5A4igAnQhTAUhLAAQhGAAhAgSg");

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.4,-72.5,157,145.1);


// stage content:
(lib.shortsCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.trunks();
	this.instance.setTransform(100,100,1.248,1.248);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;