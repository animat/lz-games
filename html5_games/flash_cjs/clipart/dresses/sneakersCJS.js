(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 96,
	height: 116,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.sneakers = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ADwixQgDAgAcALQADACAEABQATAFAlAAQAYAAARgEQAtgKAAgUQAAgTgBgFAhnhuQAEgBADgBQAzgRAigyQAYBVAAAxQAAAWgDANIAAABQAEAXgHASQgGAPgwARQgrAVguA5QgBACgCACQgFAHgGAFQgoAghSgGQhsgPgZggQgGgIgBgKQgBgBABgCQgBgFAAgFQAGhCA9gXQABAAACgBQA6gUANgOQANgNAJgWQAUhRAbgqIgGAcQgKAYAOAKQANAKAfAAQAEAAAEAAQAbABAXgHQgXAJgOAeQgBACgBACAiRgYQAAgFgBgDQgHgKALgZQgWgNgsAAIgQABQgGAQgHAWQgBACgCACQAHgCAMAAQArAAAhAPQAAAGgDAKQgEANgcABQgdACgXgDQgXgEgLgCQgLgFATgOQANgKAFgHAksAMQAFAAAFgBQAqAAApAJQAGACAFABQAYAgALAmQAGAUAEAWIABAAQAFgEAEgGQACgCABgCQAug4ArgWQA7gaAAgaAmaBwQABACACACQAZAgBsAPQBSAHAoghQABgBAAgBIABAAAjEAXQAhAJAKALAmaBwQATggANgRQAbgjAvgOIAEgCQgDAAgCABQgfADgHAAAmaBwQgBACgBACQAAABAAABQAAABAAAAAmdBqQABADACADAjghPQALgaAIgJ");
	this.shape.setTransform(43.2,58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AAvi5IgCgmQAaAmgCB+QABAEABADQAPA0AQAZQA/AwgRBBAAwAQQANgKAAgNQAAgPgHgVQgGgQgLgUQgBgBgBgBQgVgSgvAAQgoAAgXARQgBABAAAAQgFAfgKAmQAAABAAABQAAACAAACQABAhANAGQABABAHAAQgrBDAAAgQAAAEACAlQghgnAWhRIAAgDQADgUACgLQgIAAgEgnIAAgHQgEiHAgg1IgDAkAAlhPQgBgBAAgBQgTghgOgQACKCRIABgZQAAhDhbglQgZAThHAAQgdAAgNgBACKCRQAFgEAFgDQAAAAgMAeQgMAehVASQhTASg1gVQgmgLAEgcIAAAAIAAAAQCCA/CLhcgAA2hzQAHAfAIAZAhwgKQABAAAAgBQALgRAggMQAhgNAcAAQATAAAqAKAhciEQAAAVgEAdAiLhaQADA4gBA2");
	this.shape_1.setTransform(79.9,58.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEEEE").s().p("AC6B8IAAAAIgCgpQAAggArhBIAqABQBJAAAZgTQBbAjAABDIgBAZQhTA3hQAAQg3AAg1gagAlCBxQhsgPgYggIgDgEQASggAOgRQAbghAugPIAFgBIAJgBQAqAAAqAJIALADQAYAdALAnQAFAUAFAWIAAAAIgCACQghAbg/AAIgagBgADNg+QAKgmAFgeIABgCQAXgRAoAAQAxAAAVATIACABQALAUAGAQQgqgKgVAAQgcAAghANQggANgLAQgAkMhZQgNAAgHACIADgFIAOglIAPgBQAsAAAWANQgLAZAIAKIABAHQgigOgqAAg");
	this.shape_2.setTransform(48,63.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6A6A6").s().p("ADZCnQgngLAFgcIAAAAQCCA/CNhcIAKgHIgMAeQgMAfhVARQgnAJggAAQgmAAgdgMgAlDCKQhsgPgYggQgHgIgBgKIAAgBIAAgCIACgEIADAEQAZAgBsAPQBTAGAnggIACgCIAAAAIAKgKIADgEQAtg5ArgTQA9gaAAgdQAFAagHARQgGAOgyARQgsAVgtA5IgDAEQgGAGgGAFQghAcg/AAIgagBgADggKIgIgBQgNgGgBgjIAAgEIABgBQAKgQAhgNQAhgNAcAAQAVAAAqAKQAHAVAAAPQAAAQgNAJQgZAThJAAIgqgBgAkbgoQgXgDgLgEQgLgFATgOQANgKAFgHQAHgCANAAQAqAAAhAOQAAAHgCAJQgEAQgdABIgSABQgSAAgQgDgAkDh+IgPABQAKgbAIgIQANAKAfAAIAIAAQAbAAAYgGQgYAJgOAeIgCAEQgWgNgsAAgAEZiRQgoAAgYARQAFgdAAgVQATAFAlAAQAXAAARgDQAPAQATAhIgBABQgVgTgxAAg");
	this.shape_3.setTransform(48.3,62.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D5D5D5").s().p("ACrBQIAAgDIAFggQgJAAgDgoIgBgGQgEiHAgg1IgDAkQgDAhAcALIAHACQAAAVgEAdIAAACQgFAegKAlIAAABIAAAEQABAjAMAGIAJABQgsBDAAAgIACApQgggmAWhRgACwAtIAAgOQAAgugDgyQADAyAAAuIAAAOgAHGCSQAAhEhcglQAOgJAAgQQAAgPgIgTQgGgQgLgUIgBgCQgSgggPgRQAtgKAAgUIgBgYIgCgnQAaAmgCB/IACAHQAQAyAPAaQA/AxgQBAIgLAHgAF/ghQgHgZgIggQAIAgAHAZgAjLCgQgEgWgGgUQgLgngYgfQAhAJAJALQgJgLghgJIgLgDQgpgJgrAAIgJABIgGABIglADQA6gXAMgNQAOgMAJgVQAUhSAagpIgFAcQgKAYAOAKQgIAJgLAaIgNAlIgDAFQgFAHgOAIQgSAOALAFQAKAEAXAEQAYADAcgCQAdgBAEgQQADgJAAgFIgBgHQgHgKALgZIACgEQAOgeAXgJIAHgCQAzgRAigzQAaBWAAAxQAAAUgDANIAAAAQgBAdg8AaQgsAVgtA5IgDAEIgKAKgAnRCCQAFhBA9gXIAEgBIAlgDIABABQguAOgbAjQgNARgTAgIgDgHgAj4AwIAAAAg");
	this.shape_4.setTransform(48.4,55.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,34.8,95.3,47);


// stage content:
(lib.sneakersCJS = function() {
	this.initialize();

	// Layer 1
	this.sneakers = new lib.sneakers();
	this.sneakers.setTransform(47.6,40.3,1,1.001,0,0,0,47.6,40.3);

	this.addChild(this.sneakers);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.3,93.3,94.3,46);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;