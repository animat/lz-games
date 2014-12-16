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



(lib.raincoat2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2D500").s().p("AggNkQAMgpAChxQAChxgDhoIgDh4IAAAAIAAAAIABByQAABrgDB1QgEB1gKAkQgngGgigPQhngngIAKIAAgBQgBgHAFgxQAFgxASh+IgFhHIgJiUQgFhSAAg2IAAgCIgCAAIhZgxQgxgdgtgcQAXgZAmhFIAxhZQgNAZgqBDQgpBGgSASQg6glgLgTIAzhfQArhRAthZQAuhZARgpIAPBFIASBcIAKAuQgDg2gOhDQgPhEgFgWQASgOAtggQAuggAugXQACAJANAPIgGgOIgEgPIgFgjQAQARACgBQgDABgYgqIgBABQgPgagDgxQAAgVAIgWQAGgUAHgbQAOg+Afg+QAfg9BFgTQA5gIApAoQAoApAXA1QAXA0AFAaIABAHQgEAqgfBFQgdBGgSAPIgFADIAFACQAHADA6AkQA5AkAfAlQASAaAoBGIBPCJIAuBRIgZAfIg5htIA2BwQgoAygqAfIgHhfIgDg4IACA5IADBgIAAABIAAABIABAIIACAUIABAAIATCcQAMBhAJA3QAJA3AABEQABBZgSAyQgOAmgHAqQgHAqAAAYIAAAFQgRgHg4gIQg3gHhBAXIgGADQAGgsgIhDIgJhKIAHBKQAGBIgIApQhMAchHAAQgXAAgXgDgAFIFWQgEBngRBzQgIAugNAuIgNAyQAeg/AOhtQANhuAEhbIAChiQgCAIgGBngAijIHQAQAeARACQAQgCAEg2QAIhlAAiLQgBiMgHhrIABBiIAADOQgBBygFBFQgIA5gIgHQgMgDgSgdIgUgiQADAKAPAegAC/HuQA7ACAtA1IAFgEQgwg2g8gDQg+gDgGAEIABAGQAEgCAVAAIApABgABeHSQhDAmgHAKQAHgJBDgkQBJgnBnAHIABgFIgfgCQhUAAg+AkgABgDRIALBiIAGA1QgDg9gHhZIgRi3QA+gbA8AhIADgFQhAggg9AaIgUjRIgKheIgGABIAKBeIAUDSQgmARgVARQgVARAEgDQAdgWAvgVQAKBdAGBXgAC0AvQAjAQARATIAFgEQgTgTgjgOQgjgNgGgBIAmAQgAByl7QgLAZABAUIAEARQAMAxALBeIAGA+IACAmQADhHgKhEQgKhEgJglIgDgRQgBgSALgaIALgcIgEgCIgNAegAgDloIAHA/QAJA6AGBFIAEA2IACAfQAEgtgGhAQgHg/gIgyIgIg2gAAokpQAKADARgYIgGgCQgOAUgIgDgAgrnxQAVA9AdAnQAXAdAVACQAGARgLAOIADAEQAPgRgHgSQAcgKAfg/QAfg/AXg+IAahJIAAgCIgBgBQg1glhBANQhBANgoAXIAAgBIgMAHIgQAJIgBABIAAABIgBACIgZAVIAZgRQgGAwAVA8gAAVrUQgxAqgHAJQAFgGAygpQA0goAqAAQAQACAJARIAEgCQgIgTgUgEQgsAAgyAqgACnrNQg0gdgRAJQgHAEABAEIAJgDQAHgBAcAHIAfAJIAAAAg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah0NhQg+gZgYgCQgYgCABACIgFABIgDgDQAAgCAAgIQAAgbAJhDIASiKIgHhLQgGhCgGhRQgGhRgBg2IhOgrQg5ghg3gkQg1gkgKgVIgBgCIABgCIAvhXIBbixQAwheATgqIACgCIA4gpQA0glA3gdIgCgWIgCgSQgUgWgHhIQgBgWAIgYQAHgUAHgbQAPhAAfhAQAhhABJgUQA9gJAsAqQAqAqAYA2QAYA3AGAdIAAAIQgCAngbBCQgcBDgWAcQAWANAvAhQAuAhAaAhQATAcAtBJIBWCNIAtBNIACAEIgCADQgFAHgmAsQgmAuglAaIALBTIATCIQAKBIAHAoQAJA5ABBFQAABagTA2QgOAmgGAqQgIArAAAVIABAIIABAJIgJgDQgEgFgvgPQgvgQhGAYQhPAhhYAHIgjACQhAAAg0gWg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.8,-88.7,97.6,177.4);


// stage content:
(lib.ponchoCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.raincoat2();
	this.instance.setTransform(100,100,1.061,1.061);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;