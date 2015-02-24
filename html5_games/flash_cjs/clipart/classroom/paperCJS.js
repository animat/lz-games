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



(lib.paper = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDBA83").s().p("AAFC7QANgDAGgiQAEgRAAgJIAAgCQAEgpAAgLQgIgMABgKIAAgGIAAgEIAAgDIgHgGQgCgEAAgGQABgPADgHIgRgXIgOgUQgNgOABgOQABgRAHgJQAEgEABgGIgBgCQgIgIgRAAIgHAAIACgGQAIgdgBgNQgBgPgBABIAIgHQADAAACAVQAAANgGAZQARAAALANIABAHQAAAIgGAJQgEACgCAQQgBALAKALIAjAwIgBADQgEAMAAAJQAAAFABABQAJAEgBAJIAAAEIAAAGQgBAJAGAJIABABIAAACQABAJgEAsQADAHACAYQABAWgPAPg");
	this.shape.setTransform(39.4,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA9A5A").s().p("ArCHSIgJgBIACAAQBOgKB6gLQB7gLCCgHQCDgIBmgCQCZgFCAgTQCBgUAagGQAXg0BmiBQBmiBBph6ICGidIACAJIhTBjIiXC4QhVBphEBWQhDBXgMAhIgBADIgDABQgJACiCASQiCASikAFQhzACiKAJQiLAJh5AMIhkAKQgbACgoACgAtGHMIAXgIQBigLFtgbIDJgQQBWgIB7gRQB9gSBmgQIB5gTQAmhGBmh8QBnh9BihsQBjhvAagcIACANQgcAYhiBuQhhBshlB9QhkB9gkBFIgBACIgDAAIhdARQhXAQhyARQhyAShXAIIkKASIj3ATQiCALhMAHIgigBgArvGuIgBgGICegMQB3gJCEgNQCDgMBKgMIDEggIDdgjIB1gSIByiNQBeh1Brh5QBqh8A1gsIABAJQgnAehWBkQhVBjhfB0IijDJIgBACIgCAAIiAAVIkHAqQiOAXhWALQhOAIh6AKIjcARIhxAHgAtqGgIAMgDQBTgHCBgUQBdgPBUgKQBVgLA0ACQBIABClgYQCjgYCXgbIC0ggQAjg9Bmh4QBmh3BlhvQBlhvAfggIABAPIiOCcQhlBxhhBwQhhBzgbAyIgCACIgCABQgRAJhgARQhhARh/ASQh+AThuAOQhuAPgsADIigAKQhJAFhYANQhdAPhKAJQghgCgagCgAsGGAIgBAAIBXgMQBPgLB2gNQB2gOB6gHQEQgVClgtQClgtANgJQAOgLBIhSQBIhSBghpQA1g2BEhKQBEhKA7g6IAAACIABANQhNBLhrB3IjGDaQhaBlgYAUIgBABIgBAAQgGAGinAvQimAvkYAWQh6AHh2ANQh3AOhPALIhVAMgAr1FdQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIFUgiQH9ggEAhgQASgPBsh0IDjjxQB3iAAygwIgBAQIiYCfIjKDRQhmBrg6BBIgBABIgBAAQj8BmoFAmIlYAYQAHgDgCgDgAtmFAQAwgLBJgLQBKgLBLgDIAFAAQF/gJDygmQDzgmBPg/IDfjmQB2h6BVhbQBVhbAIgNIACAAIgCAOQg/BHhoBwQhnBxhiBlQhhBngvApQhRBAj1AnQjzAmmBAKIgEAAQhAACg/AJQg/AJgxAJIgxAEIARgIgAsJEUIgSgCIgBAAQABgEBagNQBagMD6gDQEngKDAgxQDCgwAQgKICPiNQB+h9CAiKQCAiKAYg3IABAAIAGACIgHAXQgwBJh8CEQh9CFhyBwIiECCIAAABIgBAAQgKAJjGA2QjEA3ktAKQkDAEhWAIQhEAHgKACIAOgHg");
	this.shape_1.setTransform(2.1,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1A26B").s().p("Ao+BRQAFgCBOgMQBMgNBfgCIAcABQBdABCrgFQCqgGCrgfQCrgdBbhJQgCADgoAdQgoAegsARQh1AliSAQQiRAQiAADQiDADhKgBIgcAAQheAChMAMQhMAMgFACg");
	this.shape_2.setTransform(-19.4,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C1A26B").s().p("AkBAMIBmgLQBfgIB2gIQB3gJBRADIhQAHIixAOIiuAPIhSAIg");
	this.shape_3.setTransform(-56,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9E5B4").s().p("Agrg3IgBgOQAVAJAtALQAvAMAsgHQhQBGiRAsQA+guAHhPg");
	this.shape_4.setTransform(35.1,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#917137").s().p("AiLBSQAlgaAbgpQAbgogGg4IgCgKIAJADQAHAFA+ATQBAASAwgVIAFAJIgJAKQhZBZivAzg");
	this.shape_5.setTransform(35,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF7DE").s().p("ApfCkQCkh1CRhqQCShsAcgVQB+AQDNgdQDMgeC6goQC7goBHgSQg4BBh0CEQh2CCh8B5QhzBni2AoQi1AnilAEQilADg9gFQh0gFh6ALQh6ALhCAKQBSgxClh1g");
	this.shape_6.setTransform(2,-16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#917137").s().p("At/FbIgBgLIAAAAQAfgHCPhlQCOhjCoh9QCoh7BohPIABgCIADABQBiAOCbgRQCbgRCkgdQClgeB7gcQB7gbAigJIAQgEIgLAMQgxA6h7CJQh8CKiGCCQh1Boi6AoQi5AoioAEQinAEg+gGQhigFhrAIQhpAJhMAJIhQALg");
	this.shape_7.setTransform(2.5,-17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9E8C2").s().p("ArrHOQAygMAFgBIgBgKIgzgCIhQgEIA3gTIAggLIgCgKQhBABg4gFIBBgOIAkgIIgBgKQhjAEgegJIBTgNIA5gKQAHgFgBgCQABgDgHgFQgJgGgkgMIgCAAQgkABgpAEIBDggIAqgUIgRgCIgqABIhPACQAbgOAngMQAogMAWgFIALgCIgIgHQgPgMgZgGQgZgHgVgCQBJgnCnh4QCmh2CYhyIC1iJQBjANCagQQCbgQCkgeQCjgeB9gbQB8gcAlgKQgYBHABBIQAFBtAKAbQhDA/htCOQhsCMhcCCQhbCCgSAbQnvgSlOAqQlOAqhZAaQAtgdAygLg");
	this.shape_8.setTransform(0.8,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#917137").s().p("AtpIBQAagYAlgPQAmgPAggHIhNgEIgqgBIgBgLIAdgKIA2gTQguAAgngEIgogEIgBgKIAZgFIA2gMQhmgGAEgHIgPgHIBPgOIBdgQQgQgGgUgHQgeABglADIgoADIgDgKIAngSIA9gdIh0ADIgOABIAKgKQAUgRAugOQAtgPAcgHQgagLgggFQgfgFgDAAIAAgLQAegHCRhmQCShkCph+QCqh/BrhRIACgBIACAAQBqAPCogTQCrgUCvghQCvghB4gcICCgeIAKgCIgFAKQggBgAJBdQAJBcAEAIIABADIgCACQhHBAhyCYQhzCVheCGIhlCRIgBADIgEAAQl5gRkhAYQkiAZimAfQimAfgGADIgTAFg");

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.2,-52.7,188.4,105.6);


// stage content:
(lib.paperCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.paper();
	this.instance.setTransform(97.9,102);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvmPnIAA/OIfNAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100.1,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;