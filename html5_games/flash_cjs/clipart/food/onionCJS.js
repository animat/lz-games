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



(lib.gantie = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE5CA").s().p("AA8BeQA3iIAEh3QAFhBAFgpIAFgrQADAIAABlQgBBngkCDQglCFhpBlQgWARgiANIgmAOQCOhPA2iKg");
	this.shape.setTransform(67.1,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E6DF").s().p("Ah8D4QAIgEBGhXQBEhWA2iIQASg0APhDIAQhKQgBCMg5B1Qg6Bzg5BHQg7BHgGADg");
	this.shape_1.setTransform(32.7,44.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E6DF").s().p("AA/BMQg6hng6hZIhFhmIBHBXQACAAAiApQAgAqA6BoQAeBBALA5IAHApQgLg4gxhXg");
	this.shape_2.setTransform(31,-16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E6DF").s().p("AhJEjIgHgOQAFADAtgzQAsgzAiiIQAJgrAGhOQAGhOADhAIADhFQATDrgkB9QgkB+grAwQgsAvgIAAIAAAAg");
	this.shape_3.setTransform(4,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E6DF").s().p("AgNAPIAGhHQAJhmAOhLIgIC6IgIDBIgBBXQgUhiAIh4g");
	this.shape_4.setTransform(7.2,-40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9F3DC").s().p("AleIzQhEhNgah2Qg4kkCfikQCgimEfh3QCAhABghjQBfhiAjgzQgqB6hrBoQhsBpiIBBQiFBEhPBPQhPBQgiA5QgiA4ABADQhICYATCKQASCKA1BdQA0BeAdARQhaguhEhNg");
	this.shape_5.setTransform(-37.5,-3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E6DF").s().p("AjDEuQAehpBrh9QA1g8A5hkQA8hoAqhVIAuhcIAOAGIgxBhQgsBVg7BmQg7BjgxA+QhMBagwBgQgfA8gMAqIAShEg");
	this.shape_6.setTransform(-13,-37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9F3DC").s().p("AkcG3IAkgxIA7hQIAegpIABgBIBUiNQBMiCBXimQBYimAjhvQAQAjAbBgQAbBhADB/QAECNhICLQgsBkiSBaQhrBEh5AAQgpAAgqgIg");
	this.shape_7.setTransform(57.8,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkoHXIgHgCIAkgxIBChaIAjgxQAIgMBSiNQBQiLBZiuQBZitAfhtIAEgOIAGANQAGAGAiBqQAiBrAGCaQAHCZhNCXQgcBEhTBHQhTBIhtAnQhBAXhCAAQgvAAgwgLg");
	this.shape_8.setTransform(57,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFDF3").s().p("AiyLUQiYgTiWhZQiVhYgzjEQgQhNAAhCQADjNCUiJQCUiJELhzQBjgvBQhLQBRhKAzg+QAyg+AGgKQADgCAGACQALgFgNBFQgJAxAcBFQAbBFAgA2QAgA3AGAHQEgEyAnDLQAmDNhwC4QhHBxiJArQiIArh1AEQh0AEgJgDQgTADgbAAQg6AAhlgNg");
	this.shape_9.setTransform(-15.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah3LxQhpgIh6goQhtghhphXQhphWgoihQgqjTBHiLQBHiMCQhgQCRhfCyhMQBmgxBThNQBUhNAyg+QAzg/ACgFIABAAIABgBQAIgGANAGQASAMgQA/QgJAwAdBGQAcBFAhA2QAgA2ADAEQEpE5AoDQQAnDTh1C9QhKB2iNAsQiOAth4AEQh4AEgKgDQgUADggAAQgnAAg3gEg");
	this.shape_10.setTransform(-15.2,0);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.3,-75.8,174.8,151.6);


// stage content:
(lib.onionCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gantie();
	this.instance.setTransform(100,100,1.119,1.119);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/NIfOAAIAAfNg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100.1,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;