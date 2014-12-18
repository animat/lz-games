(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 170,
	height: 170,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ATwliIAAl8Ij6lUImGi+IAAGaIEsGaIFUBaI05TNQBkjSkigUISjxBAr7BzQCPhHAbFBQE/gOALEmAxBNgQAUCjBOA/QA4AuBWgHImeCIgAtRRpIMIj+Ar7BzIlGLtApRFtITBzDAJwzwI1rVj");
	this.shape.setTransform(126.5,126.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ARotTIiWAAIiNAAQjLgXiShhAxnPMILYm9");
	this.shape_1.setTransform(140.1,138.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhehzQAWBRA5B1QAzCACBgSAikjDQDEAPBdEH");
	this.shape_2.setTransform(225.5,44.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AxnO5ILXm+QDZAPAAB3QAAAqgbA2IsHD+IgXABQhHAAgwgngAjSLhIAAAAgAi3KBQAAh3jZgPISkxAIFUBaIlUhaIksmaQCSBhDLAXICNAAICWAAIAAF8I06TMQAbg2AAgqgAPcr3QAPAAAPgCQgPACgPAAIAAAAIAAAAQhnAAgvhtIgBgBIAAgBIAAgBIAAABIAAABIABABQAvBtBnAAIAAAAIAAAAg");
	this.shape_3.setTransform(140.1,140.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,255,255);


(lib.pencil = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ATwliIAAl8Ij6lUImGi+IAAGaIEsGaIFUBaI05TNIsID+AM4v2QAxAEApARQBHAdAzBDQAwBAAeBjAN+umQBbFNCpgXAr7BzQCPhHAbFBQE/gOALEmQEiAUhkDSAxBNgQAjEZDNgQImeCIICumRIFGrtAkHKFISjxBApRFtITBzDAJwzwI1rVj");
	this.shape.setTransform(126.5,126.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AugKiITBzBIAAmbIGGC+ID6FVIAAF7IlUhaIksmZIEsGZIyjRAQgLklk/ANgAMek4IAVgCIgVACIAAAAIgBAAQiYgBhUkxIgCgFIACAFQBUExCYABIABAAIAAAAgAJDqrQBHAdAzBDQAwBAAeBkQgehkgwhAQgzhDhHgdQgpgRgxgDQAxADApARg");
	this.shape_1.setTransform(160,95.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,255,255);


(lib.colour = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ATwliIAAl8Ij6lUImGi+IAAGaIEsGaIFUBaI05TNQBkjSkigUISjxBAM4v2QDSAQBQEIAN+umQBbFNCpgXAr7BzQCPhHAbFBQE/gOALEmAxBNgQAjEZDNgQImeCIICumRIFGrtIVr1jAtRRpIMIj+ApRFtITBzD");
	this.shape.setTransform(126.5,126.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("Aq1I0IVr1iIAAGbIzBTBQgblAiPBGg");
	this.shape_1.setTransform(119.5,81.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AggjHQAiEYDNgRImdCIg");
	this.shape_2.setTransform(20.7,233);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AoID4IFGrsQCQhGAaFAQE9gNALEjQElAVhnDRIsFD+IgXABQi4AAgikJg");
	this.shape_3.setTransform(69.5,188.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("Ar7GtISjxAIFUBaI05TNQBmjSkkgVg");
	this.shape_4.setTransform(176.5,148);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,255,255);


// stage content:
(lib.pencil1CJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shadow("synched",0);
	this.instance.setTransform(83.6,82.5,0.486,0.486,0,0,0,126.5,126.5);
	this.instance.alpha = 0.328;

	this.colorMe = new lib.pencil();
	this.colorMe.setTransform(83.6,82.5,0.486,0.486,0,0,0,126.5,126.5);

	this.instance_1 = new lib.colour("synched",0);
	this.instance_1.setTransform(83.6,82.5,0.486,0.486,0,0,0,126.5,126.5);

	this.addChild(this.instance_1,this.colorMe,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(106.1,105,125,125);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;