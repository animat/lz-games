(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 96,
	height: 67,
	fps: 12,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.sneakers = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ADwixQgDAgAcALQADACAEABQATAFAlAAQAYAAARgEQAtgKAAgUQAAgTgBgFAAKgJQAEAXgHASQgGAPgwARQgrAVguA5QgBACgCACQgFAHgGAFQgoAghSgGQhsgPgZggQgGgIgBgKQgBgBABgCQgBgFAAgFQAGhCA9gXQABAAACgBQA6gUANgOQANgNAJgWQAUhRAbgqIgGAcQgKAYAOAKQANAKAfAAQAEAAAEAAQAbABAXgHQAEgBADgBQAzgRAigyQAYBVAAAxQAAAWgDANgAmaBwQATggANgRQAbgjAvgOIAEgCQgDAAgCABQgfADgHAAAksAMQAFAAAFgBQAqAAApAJQAGACAFABQAhAJAKALAjghPQgGAQgHAWQgBACgCACQAHgCAMAAQArAAAhAPQAAAGgDAKQgEANgcABQgdACgXgDQgXgEgLgCQgLgFATgOQANgKAFgHAmaBwQgBACgBACQAAABAAABQAAABAAAAAmdBqQABADACADQABACACACQAZAgBsAPQBSAHAoghQABgBAAgBIABAAIgBAAQgEgWgGgUQgLgmgYggAhnhuQgXAJgOAeQgBACgBACAiRgYQAAgFgBgDQgHgKALgZQgWgNgsAAIgQABQALgaAIgJAiWCHQAFgEAEgGQACgCABgCQAug4ArgWQA7gaAAga");
	this.shape.setTransform(43.2,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AEAirIgCgnQAbAmgDB/QABAEABADQAQAyAPAaQA/AxgQBAQAAABgMAeQgMAehVASQhVASg2gWQgmgKAEgcIAAgBIABAAQCCA/CNhcIABgYQAAhEhbgkQANgKAAgPQAAgOgIgUQgFgRgLgTQgBgCgBgBQgSgggPgRABvhFQAYgQAnAAQAyAAAVASQABABABABAEHhlQAIAfAHAZAFcCeQAFgDAFgEABHAhQgJAAgDgmIgBgIQgDiHAgg0IgBABIgDAjAD+jSQgGgQhIgJQhHgKgTAuAEHgdQgpgLgVAAQgcAAghANQghANgKAPQgBAAAAABABvhFQAAABAAABQgFAegKAlQAAABAAABQAAACAAACQABAiAMAGQACABAHABQgsBCAAAgQAAAEACAlQgggmAWhRIAAgDQACgUADgMABEhMQADA4AAA1AB2AwQAMABAeAAQBJAAAZgTABzh2QABAVgFAcAloijQAfhAB7AWQAqAQgEAX");
	this.shape_1.setTransform(58.9,33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#000000"],[0,1],-23.3,-1.7,-18.8,30.2).s().p("Aj9BJIgIgBQgfAAgNgJQgOgLAKgXIAGgcQAfg+B7AWQAqAPgEAXQgiAxgzARIgHACQgVAGgZAAIgEAAgACsAtIgHgCQgcgMADgfIADghQATguBHAJQBIAJAGARIACAmIABAXQAAAUgtAKQgRADgYAAQgkAAgUgFg");
	this.shape_2.setTransform(53.2,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEEEEE").s().p("AC6B8IAAAAIgCgpQAAggArhBIAqABQBJAAAZgTQBbAjAABDIgBAZQhTA3hQAAQg3AAg1gagAlCBxQhsgPgYggIgDgEQASggAOgRQAbghAugPIAFgBIAJgBQAqAAAqAJIALADQAYAdALAnQAFAUAFAWIAAAAIgCACQghAbg/AAIgagBgADNg+QAKgmAFgeIABgCQAXgRAoAAQAxAAAVATIACABQALAUAGAQQgqgKgVAAQgcAAghANQggANgLAQgAkMhZQgNAAgHACIADgFIAOglIAPgBQAsAAAWANQgLAZAIAKIABAHQgigOgqAAg");
	this.shape_3.setTransform(48,40.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A6A6A6").s().p("ADZCnQgngLAFgcIAAAAQCCA/CNhcIAKgHIgMAeQgMAfhVARQgnAJggAAQgmAAgdgMgAlDCKQhsgPgYggQgHgIgBgKIAAgBIAAgCIACgEIADAEQAZAgBsAPQBTAGAnggIACgCIAAAAIAKgKIADgEQAtg5ArgTQA9gaAAgdQAFAagHARQgGAOgyARQgsAVgtA5IgDAEQgGAGgGAFQghAcg/AAIgagBgADggKIgIgBQgNgGgBgjIAAgEIABgBQAKgQAhgNQAhgNAcAAQAVAAAqAKQAHAVAAAPQAAAQgNAJQgZAThJAAIgqgBgAkbgoQgXgDgLgEQgLgFATgOQANgKAFgHQAHgCANAAQAqAAAhAOQAAAHgCAJQgEAQgdABIgSABQgSAAgQgDgAkDh+IgPABQAKgbAIgIQANAKAfAAIAIAAQAbAAAYgGQgYAJgOAeIgCAEQgWgNgsAAgAEZiRQgoAAgYARQAFgdAAgVQATAFAlAAQAXAAARgDQAPAQATAhIgBABQgVgTgxAAg");
	this.shape_4.setTransform(48.3,39.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D5D5D5").s().p("ACrBQIAAgEIAFgfQgJAAgDgpIgBgFQgEiHAgg0IAAABIgDAjQgDAgAcALIAHADQAAAUgEAdIAAACQgFAegKAkIAAACIAAAFQABAiAMAGIAJACQgsBCAAAgIACApQgggmAWhRgACwAtIAAgOQAAgugDgxQADAxAAAuIAAAOgAHGCRQAAhDhcgkQAOgKAAgPQAAgQgIgSQgGgRgLgUIgBgCQgSgggPgRQAtgKAAgUIgBgYIgCgnQAaAmgCB/IACAHQAQAyAPAaQA/AxgQBAIgLAHgAF/ghQgHgZgIgfQAIAfAHAZgAjLCgQgEgWgGgUQgLgngYgfQAhAJAJALQgJgLghgJIgLgDQgpgJgrAAIgJABIgGAAIABABQguAPgbAjQgNARgTAgIgDgHQAFhBA9gXIAEgBQA6gXAMgNQAOgMAJgVQAUhSAagpIgFAcQgKAYAOAKQgIAJgLAaIgNAmIgDAEQgFAHgOAIQgSAOALAFQAKAEAXADQAYAEAcgCQAdgBAEgPQADgKAAgFIgBgHQgHgKALgZIACgEQAOgeAXgJIAHgCQAzgRAigyQAaBVAAAxQAAAUgDANIAAAAQgBAdg8AaQgsAVgtA5IgDAEIgKAKgAmLApIAlgEIglAEgAj4AwIAAAAg");
	this.shape_5.setTransform(48.4,32.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,9.1,95.3,49.7);


// stage content:
(lib.tn_sneakersCJS = function() {
	this.initialize();

	// Layer 1
	this.sneakers = new lib.sneakers();
	this.sneakers.setTransform(47.6,40.3,1,1.001,0,0,0,47.6,40.3);

	this.addChild(this.sneakers);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.3,43.1,94.3,48.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;