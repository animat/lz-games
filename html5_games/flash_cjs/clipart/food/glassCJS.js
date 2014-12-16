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



(lib.glass = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBDBDB").s().p("AkUAcQhzgLgdgRQAWgdGOgJQGOAJAYAdQgeAQhzAMQh0AKihAAQihABhzgLg");
	this.shape.setTransform(3.8,-19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBDBDB").s().p("AFKgBQhLgJhcgEQhbgDhIAAQhHAAhbADQhcAEhLAJQhLAIgXAQIAAgBQAFgTB5gMQB4gNC1AAQC1AAB5ANQB5AMAEATIAAABQgWgQhLgIg");
	this.shape_1.setTransform(3.8,-22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AixAyQhkgHhMgPQhKgPgEgTQAEgUBKgMQBLgKBlgFQBkgEBNgBQBPABBkAEQBjAFBLAKQBLAMAFAUQgFAThLAPQhLAPhjAHQhkAIhPAAQhNAAhkgIgAk6ggQhrAOAAAMQAAAKBrAPQBrANDPACQDQgCBrgNQBrgPABgKQgBgMhrgOQhrgPjQgBQjPABhrAPg");
	this.shape_2.setTransform(3.8,-18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBDBDB").s().p("AktAgQh5gMgFgUQAFgSB5gNQB4gNC1gBQC1ABB5ANQB5ANAEASQgEAUh5AMQh5ANi1ABQi1gBh4gNg");
	this.shape_3.setTransform(3.8,-19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDF3F4").s().p("AiOBeQhohEhzitQAkAJBvANQBwAOCXgCQCZgECggsQgQAshbBqQhcBpi4BDQgSAAhnhDg");
	this.shape_4.setTransform(5.4,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C7D0D1").s().p("AgWCuQgIAEhvhFQhvhFh7i+IgGgKIAMADQAGADBuARQBvARCmAAQCpgBCygxIALgEIgFAKQAAAGgnBAQgoBAhYBNQhYBPiNAwIgBAAg");
	this.shape_5.setTransform(5.2,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7F7F7").s().p("AkWBBQhXhdgdhMQgdhKACgHQAAgLBrgOQBrgODPgBQDRABBqAPQBrAOABALQgMCWhkBXQhlBZhoAoQhpApgTADQithBhXhgg");
	this.shape_6.setTransform(3.7,-0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4F4F4F").s().p("AgPDyQixhDhahkQhahigfhQQgehQACgHQAEgTBLgMQBLgLBkgFQBkgEBNAAQBPAABkAEQBkAFBLALQBLAMAEATQgNCfhqBdQhrBfhqArQhoAqgKAAIgBAAg");
	this.shape_7.setTransform(3.7,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7F7F7").s().p("Ai0C6QAPgPAqgXQAqgYBAgFIAFAAIABhSIACiXIABhWIAJgFIACBbIACCXIACBSIAEAAQAIgBA/AOQA/ANAkAoQgdAJhlAJQgbADgaAAQhRAAhhgUg");
	this.shape_8.setTransform(2.3,42.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4F4F4F").s().p("Ai9C+IgJgCIAGgGQADgGAtgfQAtgfBPgIQgGgIABhNQAChKADhMIAEhSIAdgNIAEBTIAHCaIAEBZQAYABA5ASQA5ARAeArIADAGIgHACQgHAHhxAWQgiAHgmAAQhVAAhogjg");
	this.shape_9.setTransform(2.1,42.5);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-25,86.6,90.1);


// stage content:
(lib.glassCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.glass();
	this.instance.setTransform(92.5,60.1,1.999,1.999);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;