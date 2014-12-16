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



(lib.tshirt2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D86239").s().p("AgfCkIhbg6IABgEIADgFIgGgDQgDgCgWgHQC4iUAfhQQAVAEASAFIAFADIAPgXIAZArQgJBbguBeQgvBhgUAhIg7gogABKigQAJgZABgSIAOABIAFAKIAPAaIABAAIgNAUQgPgJgRgFg");
	this.shape.setTransform(25.8,-56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D86239").s().p("AgpBvIhOiwIgoheIAAgBIAZgYIAYgXIAdgIIAAADQAEA3AzA8QAxA7A5ArQA6AuAWAOIhOBLIhQBMIgrhpg");
	this.shape_1.setTransform(-9,-54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AEkAvQhdgYh+gCQh8gChlAJQhlAIgSAHQgJAGgagHQgJgDgDgQIgBgDIApgmIABAAQBkgdCDgBQCBgBBkAIQBjAJAHACIADAAIAcAuIgXAhgAg3gkQh7ACheAbIgQAOIgRARQABAFAEADQAPAEAJgEQATgJBmgQQBmgPB9ABQB/AABeApIAMgTIgKgQIgKgSQgWgDhjgIQhPgGhcAAIgwAAg");
	this.shape_2.setTransform(7.1,-74.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D86239").s().p("ABMAAQh9gBhnAPQhnARgSAIQgCABgQABQgQACgFgUIAlgiQBlgdCDgBQCBgBBiAJQBkAIAFACIAYAnIgSAbQhbgriAAAg");
	this.shape_3.setTransform(7.1,-74.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAACWQgXgFhAg4QhAg3g9g5IhNhLIgHgHIAKgDQBqgbB9gJQB6gJBhAFQBiAGAbAOQAHAEABAGQABARgrAyQgqAxg0AzIhRBRIgBABQgCACgXAJQgVAIgcAAIgFAAgAgdiGQh+AHh1AcQBNBNBVBLQBWBOAYAHQA8gFAMgMQBThQA/hEQBAhGADgSIAAgBQgKgMhagGQgsgDgzAAQg4AAg/ADg");
	this.shape_4.setTransform(6.9,-61.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DB7D28").s().p("AgBCQQgZgGhDg7QhEg8g9g5IhBhAQB0gdCEgIQCBgIBgAHQBfAHAHAQQgBATg0A6Qg0A4g1A1Ig5A5QgBACgWAIQgUAIgbAAIgEAAg");
	this.shape_5.setTransform(7.1,-61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgvCmQgHgvAAhJQABhIADg9IADhGIAAgCIADgCQAZgPAfAJQAgAIAFADIAGADIgDAGQgMAigBBoQgBBnACBBIhWAMgAgjiYIgDBIQgDA5AABCQgBBGAHAuIAggDIAfgCQgCgfAAhWQAAg3ADg0QACg0AIgZQgPgGgXgEIgLgBQgOAAgLAGg");
	this.shape_6.setTransform(8.3,-31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD8BD").s().p("AguArQAAhJADg9IAEhBQAXgNAdAIQAgAJADACQgLAagCBJQgCBIABBDIABBHIhKAGQgIgvABhLg");
	this.shape_7.setTransform(8.2,-31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB164").s().p("AiMMEQiogQhwgWQhwgWgEgCQAQgqAAgkQgBgkgBgCQgZBngIgFIgMgSQAehBALiEQALiDAAiPQAAiPgEhjIgFhpIh1CDQh8gzg9hIQg9hIgTg4QgTg5ACgDIFelVIEzgYIAEgEIABACICnGYIC2i7IgGgEQgGgDg+gvQg7gvg6hBQg7hBAEg5IAAgCQCBgYCOAGQCRAFBHAJIAAABQAFAdgtBIQgtBHiZB5IgGAEIDIChIAEgGIAjhDQAeg8AfhQQAehQAFhCQAYADA0AEIBiAHIAwADIEaETQgEBhg6BKQg5BKg6AqQg6AqgEAAIiUiDQgIAWABB9QABB8AGCeIAMEVIAHB8IgZASIgYhOIgNBaQh8BIisAPQhTAHhSAAQhWAAhXgIgAiFmnIhMiyIgpheIAAgBIAZgYIAYgXIAegIIAAADQADA3AzA8QAzA7A5AtQA4AuAWAOIhMBLIhQBMIguhpgADsl8IhSg1IgxggQCLhvAxhHQAyhHgCgnIAOACIAbAuIAZAsQgIBbgvBhQgvBggUAhIgxggg");
	this.shape_8.setTransform(0.1,-0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiDMyQirgQh3gXQh3gWgPgFIgOgEIAFgNIACgFIgKAMIgagmIADgHQAfhEAKiNQALiNAAiYQgBhlgChSIgEh6IhABIIgqAtIgIgDQiCgzhBhNQhAhMgVg8QgVg8ACgFIgBgGIFwlnIBRgKICXgTIBWgLIAhgZIAcgVIADgBQB7gvCBgBQCEAABfAQQBfAQAMAEIAGAAIAUAmIAXAtQAdAEBAAHQBAAIA2ADIAEAAIFJEvIAAAFQgEBmg7BOQg7BNg8AtQg9AtgKADIgIAFIg9g3IhRhIQgDAdAABDQAACJAIDRQAJDSAKC0IAAAGIgtAhIgGgRIgIgaIgGAqIgFAEQiABKiuARQhaAJhaAAQhSAAhTgIg");

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-82.6,193.1,165.3);


// stage content:
(lib.collaredshirt2CJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tshirt2();
	this.instance.setTransform(100,100,1.031,1.031);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvnPnIAA/OIfOAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;