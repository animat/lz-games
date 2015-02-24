(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/_applause.mp3", id:"_applause"},
		{src:"sounds/_winApplause.mp3", id:"_winApplause"},
		{src:"sounds/_wrong.mp3", id:"_wrong"}
	]
};



// symbols:



(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#031CA1").s().p("AdQThMAAAghGQACgZgVhIQgWhHhKhAQhLhAibgEMg2hAAAIAAgEQAHhFBEgGMA2wAAAQCbAEBLBAQBKBBAWBHQAVBHgCAZMAAAAhKQgGBFhFAGg");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1F92FF","#001097"],[0,1],124,-143.9,-195.3,226.6).s().p("A9fThQhEgGgHhFMAAAgkrQAHhFBEgGMA2wAAAQCbAEBLBAQBKBBAWBHQAVBHgCAZMAAAAhKQgGBFhFAGg");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A9fT4QgpgBgcgcQgbgbgBgqMAAAgkrQABgpAbgcQAcgcApgBMA2wAAAQCVAEBQA8QBRA8AeBMQAdBLgBAwMAAAAhKQgBAqgcAbQgcAcgpABg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.5,-127.2,397.1,254.5);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#031CA1").s().p("AdQA4IAAheQACgBgVgDQgWgDhKgDQhLgDibAAMg2hAAAQAHgDBEgBMA2wAAAQCbAABLADQBKADAWADQAVAEgCABIAABdQgGADhFABg");
	this.shape.setTransform(0,28.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1F92FF","#001097"],[0,1],124,-6.4,-195.3,10.2).s().p("A9fA4QhEgBgHgDIAAhnQAHgDBEgBMA2wAAAQCbAABLADQBKADAWADQAVAEgCABIAABdQgGADhFABg");
	this.shape_1.setTransform(0,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A9fA5QgpAAgcgCQgbgBgBgCIAAhnQABgCAbgBQAcgCApAAMA2wAAAQCVAABQADQBRADAeADQAdAEgBACIAABdQgBACgcABQgcACgpAAg");
	this.shape_2.setTransform(0,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#636363").s().p("AHqAsIAAgrQABgcgWgaQgWgahCgBIiOgCIj9gEIkVgEIjVgEQANgGAOAAIOSAAQA+AHAGA+IAABYQAAAZgPATIAAg5g");
	this.shape_3.setTransform(2.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AIUAsQgGBFhFAGIuRAAQhFgGgGhFIAAhYQAGhEBFgHIORAAQBFAHAGBEg");
	this.shape_4.setTransform(0.1,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AnIB3QhFgGgGhFIAAhYQAGhEBFgGIORAAQBFAGAGBEIAABYQgGBFhFAGg");
	this.shape_5.setTransform(0.1,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AIUAsQgGBFhFAGIuRAAQhFgGgGhFIAAhYQAGhEBFgHIORAAQBFAHAGBEg");
	this.shape_6.setTransform(0.1,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AnIB3QhFgGgGhFIAAhYQAGhEBFgGIORAAQBFAGAGBEIAABYQgGBFhFAGg");
	this.shape_7.setTransform(0.1,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#4B4B4B","#FFFFFF","#000000"],[0,0.51,1],-9.6,0,9.7,0).s().p("AhfD6IAAnzIC/AAIAAHzg");
	this.shape_8.setTransform(0,-8.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhuD+IAAn7IDdAAIAAH7g");
	this.shape_9.setTransform(0,-8.4);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.5,-33.8,397.1,67.7);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD5XsQg+AAgxgYIgHgEIgKgBIgDgOIgDgNIgBgEIgBgFIgCgUIgDgTIgCgVIgCgfQgXA6jRgZIgZgEIgCgEIgKAEQgHADgaADQgaACg+ACQhjABgqgTIgBAAQgOgFgKgGIgBgBIgBgBIgVgPIABgOIACgQIgBgGQABgiAVgZQAUgYAagLQAggLAfgDIAogJQAcgHAhgLQAbh5AKiDQAJiFAAhvQAAhfgDg6IgEg+IAAgGIAJiLIAQkOQAIiMABg0IAAgGIgIACIAPhBIAJgbQgNgRgBgZQAAgIACgGQABgFAEgFIAAgDIAAgBIgBgMIAHgRIALgZQgIgkgLg+QgLg+gBguIABgKIAAgaIgBgwIgBgwIgBgTIgWgQQgegUgegBIhAABQgBgNgPABIgIAAIgUgDQhYADhIhDQgYgaAAghQAAgLADgLQATg4BIgvQBJguBFgdQBEgcAGgBIAIgEIgGgPQgJghAMgtQALgsAhgPIACgBIAEgJQAHgLALgGQAGgKAJgKQAChRAlgMIAAAAIAFgCQAFhbArgJQAggHAVAcQAGAHAAALQAmgVAnABQAnACAcAIQASAEALABQAGgBAFgEIAGAAIAIACIAfAHIAOAEIAQADIAUADIAEAEIAGACIgBADQAqAeAXAmQAXAmACAKIACACIAaALIATAHIgGADIAQAIIg9AcIgJAEIgKAHIgJAGIAdAfIgEAAIAQASIgrgEIgtgFIgCAIQAEAXAFA3QAGA2AAAyQAAAdgDAQQgFAfgXAjQAtAQAYAhQAYAhAOAgIAIAQIAIgCIATAVQAIAIAiAuQAQAZgBARQAAAMgEAIQAwBgAOAnQAOAngCAKIAAAGQgCAWgWAiQgVAjgtA8QgnA0gpA8QANA7AAAeQgCApgMALQgRAWgUAVQAIBsgBBuQAACJgFB0IgBARQAHAiAWB4QAVB5ATCeQATCeABCPIAAAgIgTAHIADA0IABAfIAAACIAAACIgBAPIgBAVIAAABIgFAsQgEAegFASIgDAIQgLAbgkANQglAOg5AAIgIgBgACFTeIgPAEIABAVQAAAngKAkIAFACQALgkAKgZIACgqIgDAAIgBABgAA1HPIAAAKQAVBiAOBYIAAh3IAAhCQgCgpgNhzQgSBGgCBLgAEUoCQABAyAPAwIATgyIADgGIAEgOQgRgagXgpQgCAWAAARg");
	this.shape.setTransform(55.1,161.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,10.2,110.2,303.4);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjGDGQhQhPgDh3QADh2BQhQQBQhQB2gDQB3ADBQBQQBPBQAEB2QgEB3hQBQQhPBPh3AEQh2gEhQhQg");
	this.shape.setTransform(28.2,28.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,56.4);


(lib.Spotlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFf4QqWgBkMiqQhTg0gjhAQgLgUgFgTIgEgOUgAFAAAAOdg6GIHKgVUALxA6agADAABQgBAVgRAgQghBAhSA1QkHCqqVAAIgDAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.5,-204,213,408);


(lib.selectgirl = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A8846A").ss(1,1,1).p("AALgZQgFABgLATQgOAQAbAP");
	this.shape.setTransform(27.8,239.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1A084").s().p("AgFgFQALgTAFgBIgDAzQgbgPAOgQg");
	this.shape_1.setTransform(27.8,239.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D66AF").s().p("AgSAMQACAAAMgHQAKgFgGgLIATAAQAAACgLAKQgJALgPAAIgCAAg");
	this.shape_2.setTransform(56.2,244.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D66AF").s().p("Ag7AHQAIACAxAAQAwgBAKgVQAJAHgNAKQgMAEgeAEQgJACgJAAQgXAAgcgHg");
	this.shape_3.setTransform(46.3,248.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4F6632").ss(1,1,1).p("AA4gmQATAIASAGQAdAHAXAKQAXAJgEAYQgCAFgyASQgxAThJgSQgNgFgKgIQgKgIgYgDQgJgBgNADQgNAEAFAOQgRgCgRgFQgGgbgVgQQgNgcARgaQgCAEAFAXQAGAYAtAHQAuACAOAFQALAEABABQAAgFAMgWQANgZAngIQACABASAJg");
	this.shape_4.setTransform(38.7,246.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#738E54").s().p("AgKAyQgNgFgKgIQgKgIgYgDQgJgBgNADQgNAEAFAOQgRgCgRgFQgGgbgVgQQgNgcARgaQgCAEAFAXQAGAYAtAHQAuACAOAFIAMAFQAAgFAMgWQANgZAngIIAUAKQATAIASAGQAdAHAXAKQAXAJgEAYQgCAFgyASQgZAKggAAQgfAAgigJg");
	this.shape_5.setTransform(38.7,246.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4F6632").ss(0.5,1,1).p("AAGAAQgBAGgFAAQgFgBAAgFQAAgFAFAAQAGAAAAAFg");
	this.shape_6.setTransform(13.4,131.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQgBAGgFAAQgFgBAAgFg");
	this.shape_7.setTransform(13.4,131.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4F6632").ss(1,1,1).p("AgSgCQADAGAigC");
	this.shape_8.setTransform(10.6,129);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4F6632").ss(1,1,1).p("AAHgWQAAACgFARQgCAPgGAL");
	this.shape_9.setTransform(16.4,116.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#4F6632").ss(1,1,1).p("AgIgCQAAADARAC");
	this.shape_10.setTransform(14.2,99.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#4F6632").ss(1,1,1).p("AAPgOQABAGgeAX");
	this.shape_11.setTransform(14.3,100.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#829369").ss(1,1,1).p("AAOAAQgBANgNABQgLgBgCgNQACgLALgCQANACABALg");
	this.shape_12.setTransform(45.1,78.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A8BC8F").s().p("AgNAAQABgMAMgBQANABABAMQgBANgNABQgMgBgBgNg");
	this.shape_13.setTransform(45.1,78.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#829369").ss(1,1,1).p("AAOAAQgBANgNABQgMgBgBgNQABgLAMgCQANACABALg");
	this.shape_14.setTransform(44.2,72.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A8BC8F").s().p("AgNAAQACgMALgBQANABABAMQgBANgNABQgLgBgCgNg");
	this.shape_15.setTransform(44.2,72.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#843C3C").s().p("AAMAjQgEgSgHgEQgFAAgFAOIgDAKQAFgagFgVIgDgPIABAEQAFANAHADQAFgBgBgWIgBgZQAMAfACAjIABApIgEgTgAgPgZIAAAAIAAAAg");
	this.shape_16.setTransform(67.4,27.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#843C3C").s().p("AgFAMQgQgUgQAUQgCABgHAAQgIAAANgNQAOgMABgOQAHAVAOgIQALgLgBgDQgBgEAJAEQAIAFgDAMQgEAKAIAFQAbAPAAgXQACADgGAOQgFAQgegBIgBABQgEAAgKgSg");
	this.shape_17.setTransform(12.4,74.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#843C3C").s().p("AgUBUQADgOAYgXQA1gzhXATQhWAeANgYIAMgWQAGgLgOAFQgQAEgSgIQgTgIACgFQADgGAQgZQAPgZAvgRQgDACgSARQgRARAGANQANAJAigHIAmgJQgDABgLALQgKAMARAEQASACALgIQAOgJAZAGQAaAIAHARQAHAOAQAFQAmAQAEgzQACAEgBAbQAAAdghAJQglAFgpALQgoAKgTAeQgBAAAEgOg");
	this.shape_18.setTransform(33.4,20.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#351212").s().p("AgtBFQgWgcANgiQAcglAngMQApgMACgsQACABACASQACASgYARQgjANgnAfQgoAdA6BGQgEgBgXgdg");
	this.shape_19.setTransform(19.3,62);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#351212").s().p("AABCJQAXgfAPgcQAIgagVgVQgVgVglg0Qghg7ASgvQARgvAFgDQgCADgKAnQgLAnAJAqQAWA3AmAgQAoAigIAfQgPAdgPAOQgPAOgBAZQAEAdAFALQghgjASgbg");
	this.shape_20.setTransform(27.3,46.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#843C3C").s().p("AjrCLQgCgOAAgPQABhwBJhSQAvgxBOgVQBLgVBJAQQAsALAoAkQApAkADAyIgBAIIgFgCIABgEQgJg4gugeQhohKiGAyIgPAGQgtANgkAhQgrAtgTA+QgOAtgBA4QAAAVADAUQgEgPgBgNg");
	this.shape_21.setTransform(38,21.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#351212").ss(1,1,1).p("ADoj5QgSgBgMARQABgOgEgSQgEgSgOgHQgjgHgBAoQgBAogIAVQgPARgbAFQgbAFgVADQhdAXARA8QAQA9AiBBQAjBDgnArQgbAXgFAPQgFAQAaAaQAaAagKASQgKARgngFQAbgFgIgQQgHgRgRgKQgYgNgvgNQgugMgXAVQgNAWAPAdQAPAcgMAYQgPARgTgDQgTgDgJAEQgQAPADAPQADAPAXgNQgdAVgUgOQgTgPALghQAKgXAHgJQAIgIgCgXQgEgYgIgRQgIgRAPgbQAWgeAlgTQAlgSANgmQAEgkgZgpQgagngHgmQgLiCBVhiQAyg0BNgUQBOgUBHAQQAyAMAqApQArApgGA4");
	this.shape_22.setTransform(34.2,43.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E2A2A").s().p("AkKF9QgTgPALghQAKgXAHgJQAIgIgCgXQgEgYgIgRQgIgRAPgbQAWgeAlgTQAlgSANgmQAEgkgZgpQgagngHgmQgLiCBVhiQAyg0BNgUQBOgUBHAQQAyAMAqApQArApgGA4IgugVQgSgBgMARQABgOgEgSQgEgSgOgHQgjgHgBAoQgBAogIAVQgPARgbAFIgwAIQhdAXARA8QAQA9AiBBQAjBDgnArQgbAXgFAPQgFAQAaAaQAaAagKASQgKARgngFQAbgFgIgQQgHgRgRgKQgYgNgvgNQgugMgXAVQgNAWAPAdQAPAcgMAYQgPARgTgDQgTgDgJAEQgQAPADAPQADAPAXgNQgRAMgOAAQgKAAgIgFg");
	this.shape_23.setTransform(34.2,43.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#351212").s().p("AAAAMQADgCgBgJQgGgKgDgDQAGAAACADQAJAPgDAHg");
	this.shape_24.setTransform(50.4,17.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#351212").s().p("AACAaQADgagFgMIgGgNQAJAFADAUQACAUgBAGg");
	this.shape_25.setTransform(51.9,16.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#932121").s().p("AgOgCQgRAEgOgFIAHAAQARgGANAFQAIAIAJAAQAIgEAGAAQAJAEAOgEQgCAFgOAAIgZACQgGgGgNgDg");
	this.shape_26.setTransform(46.5,49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAEQgQgGgBgDQAYAKANgEIAMgCQgNAHgKAAQgEAAgFgCg");
	this.shape_27.setTransform(46.6,50.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#491D1D").s().p("AgaAHQgBgDADgRQAEgTASABQAWAHAEAYQAFAYgEAIQgCgIgxgRg");
	this.shape_28.setTransform(51.6,17.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AF8D74").s().p("AgJgFQABAFAUgCQAFAGgSACQgQgHAIgEg");
	this.shape_29.setTransform(45.9,53.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A8846A").s().p("AAHANIgQgNQgMgLAVgLQAJgDACAHIACAHIABAjg");
	this.shape_30.setTransform(24.3,33.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B74141").s().p("AAYAIQgFgBgGADQgLACgGgHQgLgFgOABQgLAEgHgHQAMACANgEQAJgIALADIAKAFQADgCANAAQAIAEAHAFQADAEAGgCQgFAGgHAAQgFAAgHgDg");
	this.shape_31.setTransform(46.3,48.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#B74141").ss(0.3,1,1).p("AAXgQQAHADAEAGQAGAHAJgDQgCACgCABQgDACgDACQgFAGgHAGQgMAHgOgCQgVgCgLgNQgLgGgGgLQAEABAFAAQAKgBAIgEQAKgIAIAEQAHAEADABQACgCAOAAg");
	this.shape_32.setTransform(46.4,49.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EA7875").s().p("AABAVQgVgCgLgNQgLgGgGgLIAJABQAKgBAIgEQAKgIAIAEIAKAFQACgCAOAAQAHADAEAGQAGAHAJgDIgEADIgGAEIgMAMQgKAFgLAAIgFAAg");
	this.shape_33.setTransform(46.4,49.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#604F40").s().p("AAUgHQgOgFgWAFIgaAGQgDgCAwgNQAZgCAIARQAIAPgBADQgBgGgWgSg");
	this.shape_34.setTransform(38.6,27.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#604F40").s().p("AgPgDQAPgQAVAMIAMAMQgFgEgMgDQgRgIgfAXQABgDAQgNg");
	this.shape_35.setTransform(56.8,29);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A8846A").s().p("AgCgDQALgCADgEQgHAKgHAAQgEAFAAAEQgMgMAQgBg");
	this.shape_36.setTransform(49.6,44);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93735D").s().p("AgGATIAJgDQAFgEAAgEQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQgHgEgFgMIgHgQIAJAPQAGAMAGACIABAAIABABQAFAIgLAKIgIAEQgGACgBADQgBgEAFgGg");
	this.shape_37.setTransform(50,42.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#604F40").s().p("AAAgJQAcgCACACQAJgEABgEQgCAHgCABQAJgDACgFQgFAMgFABQglgMgYAQIgWASQAVgZAZgCg");
	this.shape_38.setTransform(56.2,33.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A8846A").s().p("AAKgTQAeAJADAGQgrgKgWAQQgQAOgEAGQAZgzAbAKg");
	this.shape_39.setTransform(55.5,33.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#604F40").s().p("AAoAKQgUgQg4ABQgIgDgKgQQAFAHANAJQgDgDgCgLQABAFAHAIQAEgDAhAFQAgADATAdIgPgPg");
	this.shape_40.setTransform(36.8,31.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#A8846A").ss(1,1,1).p("AAAAPIABgd");
	this.shape_41.setTransform(37.5,56.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A8846A").s().p("AAfAHQgTgTg7ACQAEgGAmgJQAigIATA8QgDgGgOgOg");
	this.shape_42.setTransform(37.8,31.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgagJQABgBATADQAQACARAQ");
	this.shape_43.setTransform(38.8,31.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.502)").s().p("AgGAAQAAgDAGAAQAHAAAAADQAAAEgHAAQgGAAAAgEg");
	this.shape_44.setTransform(37.5,31.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.502)").s().p("AgHgKIAPANQABACgLAGg");
	this.shape_45.setTransform(39.2,34.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgSAAQACgQAQgCQARACABAQQgBARgRACQgQgCgCgRg");
	this.shape_46.setTransform(38.1,32.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.3,1,1).p("AAbAAQgCAZgZACQgYgCgCgZQACgYAYgCQAZACACAYg");
	this.shape_47.setTransform(38.1,32.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#663300").s().p("AgaAAQACgYAYgCQAZACACAYQgCAZgZACQgYgCgCgZg");
	this.shape_48.setTransform(38.1,32.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#A8846A").ss(0.5,1,1).p("AAvAKQACgDgSgUQgRgVg1AEIgHADQgBACADARQACAQAKAMQAUATAcgMQAggOgBgDg");
	this.shape_49.setTransform(38,33.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AggAUQgKgMgCgQIgCgTIAHgDQA1gEARAVQASAUgCADQABADggAOQgMAFgIAAQgQAAgMgMg");
	this.shape_50.setTransform(38,33.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A8846A").s().p("AghAWQgLgNgCgRIgCgWIAHgCQA3gFATAXQASAWgCAEQABACgiAPQgMAFgJAAQgQAAgMgMg");
	this.shape_51.setTransform(37.8,33.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.502)").s().p("AgGAAQAAgDAGAAQAHAAAAADQAAAEgHAAQgGAAAAgEg");
	this.shape_52.setTransform(55,33.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.502)").s().p("AgIgKIAQAMQABADgLAGg");
	this.shape_53.setTransform(56.7,35.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgSAAQACgQAQgBQARABABAQQgBARgRACQgQgCgCgRg");
	this.shape_54.setTransform(55.7,34.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.3,1,1).p("AAAgaQAZADACAXQgCAZgZACQgXgCgDgZQADgXAXgDg");
	this.shape_55.setTransform(55.6,34.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#663300").s().p("AgaAAQADgXAXgDQAZADACAXQgCAZgZACQgXgCgDgZg");
	this.shape_56.setTransform(55.6,34.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgqAFQgBgDATgSQAUgVAwALQAAACgEAWQgEAUgJAKQgYALgtgig");
	this.shape_57.setTransform(55.3,35.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgqAFQgBgDATgSQAUgVAwALIgEAYQgEAUgJAKQgHADgHAAQgUAAgjgag");
	this.shape_58.setTransform(55.3,35.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A8846A").s().p("AgtAGQgBgEAVgUQAUgWAzALIgEAbQgEAWgKAKQgGADgJAAQgVAAglgbg");
	this.shape_59.setTransform(55.6,35.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#4F6632").ss(1,1,1).p("AgGgCQgHgJAWAR");
	this.shape_60.setTransform(72.5,58.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#738E54").s().p("AAAAPIgDAAQgHgNAAgPQAJACAFgDQADAWAEAHIgHAAIgEAAg");
	this.shape_61.setTransform(65.7,57.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#829369").ss(1,1,1).p("AglAAQACABAMAAQAPAAAoglQADADADAxQACACgKAKQgKAKgwgBQgFABgEgmg");
	this.shape_62.setTransform(68.1,55.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A8BC8F").s().p("AgcAlQgFABgEgmQACABAMAAQAPAAAoglQADADADAxQACACgKAKQgKAJgoAAIgIAAg");
	this.shape_63.setTransform(68.1,55.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#999999").ss(1,1,1).p("AglAAQACABAMAAQAPAAAoglQADADADAxQACACgKAKQgKAKgwgBQgFAAgEglg");
	this.shape_64.setTransform(68.1,55.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgcAlQgFAAgEglQACABAMAAQAPAAAoglQADADADAxQACACgKAKQgKAJgoAAIgIAAg");
	this.shape_65.setTransform(68.1,55.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgTgIQAGABAOADQAPAHAEAG");
	this.shape_66.setTransform(63.8,46.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgcAGQAGgFATgFQAGgBAMAFQANAFABAB");
	this.shape_67.setTransform(65.1,42.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#4F6632").ss(1,1,1).p("AAIgOQgCAAgGAJQgIAGACAO");
	this.shape_68.setTransform(66.8,60.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A8846A").s().p("AAOBMQgCABgFgJQgGgKgBgjIgWgWIgLAAIgHACIACgLQADgLAMgBQARgBgHgBQgIgDADgJQAHgHAAgGQgEgKAGgLIAHgIIgBAHQgCAFACAFQAAgCAIAAIANgBQAOADAJALQgTgIgSAHQgFAEgGAKQgGALAKACQgQABgFALQADANAQAHQAOAGADASQgBAbAVAPIgJABQgEAAgFgBg");
	this.shape_69.setTransform(63.3,47.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#A8846A").ss(1,1,1).p("AA5AKQgFAigBAEQgBACgQAPQgQAOgQAFIgMgDQgBABgGgJQgGgJAAgkIgYgWIgMAAIgHACQAAgCACgJQADgLAMgCQASgBgIAAQgBgBgEgGQgDgGAKgIQgCgBgBgJQAHgYAIgGQAJgIARAGQASAHAKAFQAKADAPAIQAOAIgCANQgDAOgGAgg");
	this.shape_70.setTransform(65.8,47.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C1A084").s().p("AgKBRQgBABgGgJQgGgJAAgkIgYgWIgMAAIgHACIACgLQADgLAMgCQASgBgIAAQgBgBgEgGQgDgGAKgIQgCgBgBgJQAHgYAIgGQAJgIARAGIAcAMQAKADAPAIQAOAIgCANQgDAOgGAgIgGAmIgRARQgQAOgQAFg");
	this.shape_71.setTransform(65.8,47.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#277489").ss(1,1,1).p("AAqh3QgTAPAGAaQAEAdAegFQAEAFgaAkQgZAigfAKQg6AFAHAvQAKAvAwgJQgVgCgIgWQgJgWAIgPQAbgWAfgPQAfgXAPgfQAFgXgNgNQgNgMgBgVQAAgMAGgJQgEAAgEACg");
	this.shape_72.setTransform(58.3,46.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#46A6BC").s().p("AhCBTQgHgvA6gFQAfgKAZgiQAagkgEgFQgeAFgEgdQgGgaATgPQAEgCAEAAQgGAJAAAMQABAVANAMQANANgFAXQgPAfgfAXQgfAPgbAWQgIAPAJAWQAIAWAVACIgPABQgjAAgIgng");
	this.shape_73.setTransform(58.3,46.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#277489").ss(1,1,1).p("AARgLQgYAiggAKQg7AFAIAvQAIAvAugJQAWgEASgaQAUgZAOgSQAvgyAHhBQAAgogngPQgYgIgMAKQgRAPAGAiQAGAXAagGQAFAFgaAkg");
	this.shape_74.setTransform(60.8,46.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5DCBE8").s().p("AhaBVQgIgvA7gFQAggKAYgiQAagkgFgFQgaAGgGgXQgGgiARgPQAMgKAYAIQAnAPAAAoQgHBBgvAyIgiArQgSAagWAEIgOABQghAAgHgng");
	this.shape_75.setTransform(60.8,46.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AF8D74").s().p("Ag2B0QgohHAAgJIgBgDIgCAAQgzgDgDgbQgNgqAZgRQARgIAQAUIAGgEQgFgDAIgUQAIgUAvgvIABgBQAggfAugZQAwgZAvAAQANAAALADQhJABg7AqQgWASgWAjQgYAkACAdIAHAUQABALAFALIAGAOQABABAAAMQgBACgEAcQgDAcAMA2QAHAYAdAiQAYAbAVALQhPglgmhEg");
	this.shape_76.setTransform(36.7,35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#A8846A").ss(1,1,1).p("AC8iWQgig+hDgNQg0gFgvAZQgxAagkAkQgOAMgbAgQgaAgAIATQgZgdgUAVQgTAVAMAlQAGAeA0ACQgBAIAoBJQAoBIBZAnQAbAFArgfQAsgeASgZQAagqAFgxQAOgoAPgkQANhDgjg9g");
	this.shape_77.setTransform(42,35.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C1A084").s().p("AASDiQhZgngohIQgohJABgIQg0gCgGgeQgMglATgVQAUgVAZAdQgIgTAaggQAbggAOgMQAkgkAxgaQAvgZA0AFQBDANAiA+QAjA9gNBDQgPAkgOAoQgFAxgaAqQgSAZgsAeQgmAbgZAAIgHgBg");
	this.shape_78.setTransform(42,35.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#4F6632").ss(1,1,1).p("AgbgDQAEgFAzAN");
	this.shape_79.setTransform(43.3,90.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#4F6632").ss(1,1,1).p("AgwAGQACgBAggFQAdgGAiAB");
	this.shape_80.setTransform(39.9,90.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#4F6632").ss(1,1,1).p("AgCARQAEgBABgg");
	this.shape_81.setTransform(25.2,75.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#4F6632").ss(1,1,1).p("AAGAgQgBgCgFgNQgEgOgBgIQAEgWADgE");
	this.shape_82.setTransform(56.6,77.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#4F6632").ss(1,1,1).p("AgBAKQgGAAALgT");
	this.shape_83.setTransform(67.3,82.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#4F6632").ss(1,1,1).p("AgUg/QgCAAAMAzQAIAZAKAYQAMAZACAC");
	this.shape_84.setTransform(67.9,79);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#738E54").s().p("AAFgJQAFgQgBgEQAGAGAEASIADATQgXAAgUAQQAQgTAKgUg");
	this.shape_85.setTransform(46.1,60.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#738E54").s().p("AAGAQQgWgQgPAaQgBgOAFgSQAEgUANgGIAPgEIgCAaQAQAXANAYQgLgMgPgJg");
	this.shape_86.setTransform(37.1,59.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#829369").ss(1,1,1).p("AAQgyQAHALAHAnQAGAoAGAMQADAGABADQgEgEgPgMQgUgQgQgEQgggBgEADQAEgEATgXQAUgbAGgMQAIgUgFgBQAAgBAJALg");
	this.shape_87.setTransform(46,63.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A8BC8F").s().p("AAbAtQgUgQgQgEQgggBgEADIAWgbQAVgbAGgMQAIgUgFgBQAAgBAJALQAHALAGAnQAGAoAHAMIAEAJIgTgQg");
	this.shape_88.setTransform(46,63.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#829369").ss(1,1,1).p("AAHhIIgBAaQAFgCAnBUIgjgIQAEgGghAVQghAagCAEQABgHAIgmQAJgnAFgSQgBgcASgKg");
	this.shape_89.setTransform(36.8,62.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A8BC8F").s().p("AgoAcQAJgmAFgTQgBgdASgJIAQgFIgBAaQAFgCAnBTIgjgIQAEgFghAVQghAagCAEIAJgtg");
	this.shape_90.setTransform(36.8,62.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A8846A").s().p("AgsgEIACgaIBSAFIADAZQACAXAAAHIAAABQgugNgrgWg");
	this.shape_91.setTransform(42,57.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#A8846A").ss(1,1,1).p("Agqg7QgBACgBATQgCASAAADQgBAbAPAOQAQAOAOAWQARgPANgLQANgKAGgXQAAgFgDgXQgCgYAAgDg");
	this.shape_92.setTransform(42.1,60);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C1A084").s().p("AggAYQgPgOABgbIACgVIACgVIBUAFIACAbIADAcQgGAXgNAKIgeAaQgOgWgQgOg");
	this.shape_93.setTransform(42.1,60);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5E7244").s().p("AgjgGIgOgOQgFgBgDgDQgJgPgBgRQAAgHADgIIAEgJIAGgHQgDAcAVAaIAkAtQARAUAUATQAKAIAIAJQAEAMAJAIQg3gsgwgyg");
	this.shape_94.setTransform(62.9,82.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5E7244").s().p("AhFAUQgNgNAHgUQAHgUAOgJQAggUAggQQAPgHAWgBQAWgBAJAPQgKgFgNgCQgOAAgOADQAAAMAIAJQAIAJACALQgVgQgVAHQgRAMgKATQgIgNALgMQgQAGgNANQgNANAHAQQAKASAGATQAFATgBAVQgFgngcgcg");
	this.shape_95.setTransform(69,63.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5E7244").s().p("AhtDFQAHgRAPgNIAXgeIAZgnIAOgYIAEgcQADgZgJgKQgRgEgnggQgogiAUhSIgRAeIgDgXIAEgHQAJgOAGgPQACgNAAgNIADAGIAIAKQAGAOgDAPQgJA2AZAwQAcApAtgKQAUgEARgHQAXgMASgUQAAAHgGAOQgEANgIACIAOACIAQAAQARAAAPAGIABAAQgOACgMAGQAPABAKAMQgWgEgWgEQgYgDgUAHQgZAGgOAQQgIAVACAXQAAAJAAAJQAKADgLAHQgJAIgGAJQgQAUgSASQgNAOgLAOQgQAUgHAAIgCAAg");
	this.shape_96.setTransform(35.3,91.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5E7244").s().p("AgaAWQACgzgrAEQgrAFgkARQA+ggBBgcQgBgEBjgDQAOAHAMALQAUAOAWAIQgjgGgOAgQgBANANASQANAQALAJQg4goglAyQgHgFABgKQAAgKgOgFQgVgDgKAUQgOAPgUAGIASgwg");
	this.shape_97.setTransform(37.2,64.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5E7244").s().p("AgiC/QgXgLgEgmQgDglACghIABgTQABgpAKhBQAKhCAUhIQgbB8gKB7QgBAZARAkQARAkAkgMQgHASgLAGQAogBAegbQgTAYgdASQgWANgRAAQgGAAgFgBg");
	this.shape_98.setTransform(11.1,111.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#4F6632").ss(1,1,1).p("AFtiaQABA3gDAZQgDAmgPAfQgPAcgtggQhXhUgkgcQACACABAUQACAWgaAeQgcAcgRALQgRAIgHALQgGBNAfBGQAfBGAABMQgkgCgqgHQgpgIgKgoQAEAmgqAMQgsANgfgGQgTgFggggQggggAKgVQADgEAZggQAZghANgSQALgQANgWQAOgWABgCQABgDADgZQADgZgJgKQgRgDgnghQgogiAUhSQgXBEggBHQgfBFgDAGQABAEAHAyQAHAzgDAuQAAASALAVQAMAVgCATQgJAfgmAdQgnAegggHQgdgOgCgwQgBgvACgfQABhCAVhoQAVhmAlhWQADgSAMg8QAMg8AsgWQAygRAzgYQAzgYAEgCQgBgFBjgCQADACAcAQQAcAQAVAKQAoALAoA0QAiAzALgEQAAgDgMgaQgMgagNgOQgMgOAGgVQAGgVAPgJQAQgJAegRQAdgRASABQAUAAATALQATAKgPAyQAAADACAvQACAwABA2g");
	this.shape_99.setTransform(41,92.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#738E54").s().p("AlOF5QgdgOgCgwQgBgvACgfQABhCAVhoQAVhmAlhWIAPhOQAMg8AsgWQAygRAzgYIA3gaQgBgFBjgCIAfASQAcAQAVAKQAoALAoA0QAiAzALgEIgMgdQgMgagNgOQgMgOAGgVQAGgVAPgJIAugaQAdgRASABQAUAAATALQATAKgPAyIACAyIADBmQABA3gDAZQgDAmgPAfQgPAcgtggQhXhUgkgcQACACABAUQACAWgaAeQgcAcgRALQgRAIgHALQgGBNAfBGQAfBGAABMQgkgCgqgHQgpgIgKgoQAEAmgqAMQgsANgfgGQgTgFggggQggggAKgVIAcgkIAmgzQALgQANgWIAPgYIAEgcQADgZgJgKQgRgDgnghQgogiAUhSQgXBEggBHIgiBLIAIA2QAHAzgDAuQAAASALAVQAMAVgCATQgJAfgmAdQgfAYgbAAIgNgBg");
	this.shape_100.setTransform(41,92.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#351212").s().p("AgzE0QgNgEAKgSQAQgSAOgKQAOgKgOgUQgUgUgdgMQgcgNAHgkQAJgfAVhhIApi1IAVheIgRgRQgQgRgRgVQBDAZAtA0QAtA0gLBPQgSBQgyBBQgwBEAJBVQABAUAJATQAIATABATQgJAHgOAHQghAPACADQACADALAFIgBAAQgEAAgLgEg");
	this.shape_101.setTransform(56.4,42.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#351212").ss(1,1,1).p("AgUjmQgIgGgmgsQglgrAYgNQAmgGA6AzQA9AyAcBVQAcBUg+BfQgHAIgmBFQglBGANArQAlBFhLAeQghAPACADQACADALAEQgDABgNgEQgNgEAKgSQAQgSAOgKQAOgKgOgVQgUgTgdgNQgcgMAHgkQAJggAVhgQAWheAThYQAThXACgGg");
	this.shape_102.setTransform(58.2,39.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#5E2A2A").s().p("AhFFOQgNgEAKgSQAQgSAOgKQAOgKgOgVQgUgTgdgNQgcgMAHgkQAJggAVhgIApi2IAVhdQgIgGgmgsQglgrAYgNQAmgGA6AzQA9AyAcBVQAcBUg+BfQgHAIgmBFQglBGANArQAlBFhLAeQghAPACADQACADALAEIgCABQgEAAgKgEg");
	this.shape_103.setTransform(58.2,39.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#351212").ss(1,1,1).p("ABNDjQgjAGgWgTQgYgXACgnQAEgcAFgEQAFgEgUgYQghgggogWQgogVgZgnQgXgvANgwQAOgwArgfQBRg0BeAjABRjaQBJBDAHBwQAHBvhCBHQgMAJgPALQgQALgEAOQgFATAJAMQAGAJAMgBQAGAAAIgD");
	this.shape_104.setTransform(47.4,80.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#351212").s().p("AAUDWQgYgXACgnQAEgcAFgEQAFgEgUgYQghgggogWQgogVgZgnQgXgvANgwQAOgwArgfQBRg0BeAjIAFgFQBJBDAHBwQAHBvhCBHIgbAUQgQALgEAOQgFATAJAMQAGAJAMgBIgPABQgZAAgRgOg");
	this.shape_105.setTransform(47.4,80.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#351212").ss(1,1,1).p("AhTDhQAhAHAVgSQAagWgBgnQgDgcgFgEQgFgEAUgXQAggfAmgUQAngTAZgmQAYgugLgwQgLgxgnghQhKg3hZAeAhEjcQhIBAgLBwQgLBuA8BKQAKAKAOALQAOAMAEAOQAEATgJAMQgGAIgMgBQgGgBgHgD");
	this.shape_106.setTransform(31.7,80.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#351212").s().p("AhTDhQAMABAGgIQAJgMgEgTQgEgOgOgMQgOgLgKgKQg8hKALhuQALhwBIhAIAFAFQBZgeBKA3QAnAhALAxQALAwgYAuQgZAmgnATQgmAUggAfQgUAXAFAEQAFAEADAcQABAngaAWQgPANgVAAQgIAAgKgCg");
	this.shape_107.setTransform(31.7,80.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#738E54").s().p("AgNAIIgNgPIATgPQAJAYAZAMQgLAJgQAAIgNgPg");
	this.shape_108.setTransform(13.1,130.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#829369").ss(1,1,1).p("AATgqIAYAkQABAEgMAVQgNAXggABIgdgkg");
	this.shape_109.setTransform(14.2,128.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A8BC8F").s().p("AgqAHIA9gxIAYAkQABAEgMAVQgNAXggABg");
	this.shape_110.setTransform(14.2,128.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#A8846A").ss(1,1,1).p("AAvA2QgTAFgDgDQgEAGgRABQgHgDgOgEQgOgEgCAAQgEgIARgIIANAAQgDgCgXgUQgXgSgEgWQAAgUANgIQAMgHACAAQACAAASAGQARAGASAGQABAAALAEQALADAEAGQAEARACANQAIAIgDAPQgKAPgDABQAJADgJAMg");
	this.shape_111.setTransform(20.3,134.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C1A084").s().p("AgRA4IgQgEQgEgJARgHIANAAQgDgCgXgVQgXgSgEgVQAAgVANgHQAMgHACAAIAUAGIAjAMIAMADQALAEAEAFQAEASACANQAIAIgDAOQgKAQgDABQAJADgJAMQgTAEgDgDQgEAHgRABIgVgHg");
	this.shape_112.setTransform(20.3,134.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5E7244").s().p("AhgDnQgBgTgLhMQgLhMgahTQgMgkABggQACg4ASgkQASgjAGgFQAJgCAygFQAxgEA3ADQA5AEAgAWQARANAAAUQgDAWACAqQg7gKgrgBQgdASgegCQghgCgXgHQghgEghgZQACA8ASAzQARAyAHAxQgDBOABBXIgLgDg");
	this.shape_113.setTransform(36.3,136.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#4F6632").ss(1,1,1).p("AA6jtQhBgKhCAGQhCAGgFACQgFACgaA4QgaA5AXBZQAdBbAKBQQALBQgBAGQADABA6AJQA5AIBJgDQBKgCA2ghQgBgEgNhLQgNhLgOhZQgOhbgDg1QgIgvhCgLg");
	this.shape_114.setTransform(39.2,137.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#738E54").s().p("AhEDuQg6gJgDgBQABgGgLhQQgKhQgdhbQgXhZAag5QAag4AFgCQAFgCBCgGQBCgGBBAKQBCALAIAvQADA1AOBbQAOBZANBLIAOBPQg2AhhKACIgmABQgyAAgqgGg");
	this.shape_115.setTransform(39.2,137.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A8846A").s().p("Ag/GGQACgNAAghQAAgxgGhIQgGhKgRhLQgMg5AAgwQAChTATg2QAUg2AMgPQAPgXAEgbQAEgcAAgKIA8gfIBDghIABAqQABAggFAiIgBAHQg0AXg1ggQAHAggOAiQguAxgNA8QgYB9AbB/QAbB/gPB3IgEAAg");
	this.shape_116.setTransform(33.2,191.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#A8846A").ss(1,1,1).p("ABCntIiGBEQAAACgDAfQgEAegPAYQgVAYgWBVQgWBVAXB7QAVBhAFBTQAEBUgCAkQgEATgMAqQgNAoAAAmQAAAlAnAFQADAAAfAEQAeAEAUAKQAmAVAzgGQAYgEAUgIQAVgJABgBQAAgCgKgPQgLgQgTgHQgVgFgdgJQgegKgPgYQgLgYgKgiQgKgjgDgNQgGhIADiuQAEirBBi3QABgBAIgSQAJgSADgTQAFgogBgkQgBgkAAgCg");
	this.shape_117.setTransform(37,201.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C1A084").s().p("AgLHeQgTgKgegEQgfgEgDAAQgngFAAglQAAgmANgoQAMgqAEgTQACgkgEhUQgFhTgVhhQgXh7AWhVQAWhVAUgYQAQgYAEgeIADghICGhEIABAmQABAkgFAoQgDATgJASIgKATQhBC3gDCrQgDCuAGBIIANAwQAKAiALAYQAPAYAeAKQAdAJAUAFQAUAHALAQIAKARIgWAKQgUAIgYAEIgWABQgmAAgegQg");
	this.shape_118.setTransform(37,201.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A8846A").s().p("AhfERQAGhHAFhPQAFhPABgtQAAgQgCgIQgBgFABgIQAAgrATg/QASg/AZgZIABgCIgJguIgJgyIBEgRIBHgRIAAAhQABAYgDAZQg4AIgQAMQhMCRgTCfQgUCigHChIgLAAIAIhcg");
	this.shape_119.setTransform(42.3,192);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#4F6632").ss(1,1,1).p("ABggCQACARg1AiQgzAihZgOIAOg7QAFgCAWgYQAXgZgJgQIgLADIAOgSQABADASAUQASATAbAGQA7AAAKAWg");
	this.shape_120.setTransform(50.3,243.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#738E54").s().p("AhfBFIAOg7QAFgCAWgYQAXgZgJgQIgLADIAOgSQABADASAUQASATAbAGQA7AAAKAWQACARg1AiQgmAYg1AAQgXAAgagEg");
	this.shape_121.setTransform(50.3,243.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A8846A").ss(1,1,1).p("AhkEVQABgGAHhXQAHhXAGheQAGhcgDgbQgEgmAThIQAUhIAcgdIgThiICSgkQABAFAAAxQAAAwgNAeQgLAXgfB3QgfB4gdB/QgcCCgEA1IgCAcQACAEAXAlQAVAkAaAXQA5AkAIgDIgOA3QgIABhGACQhEACgmgUQgbgeALhCQALhDAEgI");
	this.shape_122.setTransform(41.5,201.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C1A084").s().p("AhfG8QgbgeALhCQALhDAEgIIgEAEIAIhdQAHhXAGheQAGhcgDgbQgEgmAThIQAUhIAcgdIgThiICSgkQABAFAAAxQAAAwgNAeQgLAXgfB3QgfB4gdB/QgcCCgEA1IgCAcQACAEAXAlQAVAkAaAXQA5AkAIgDIgOA3QgIABhGACIgLAAQg9AAgigSg");
	this.shape_123.setTransform(41.5,201.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#020202").s().p("AgrTeQgOgEgIgHQgJgJgWgDQgIAAgGABIAIAUIgYgBQgUgCgSgGIgMgEIABgMQgBgJgLgLIgMgPQgJgNAAgRQABgZAMgRIADABQAEgaAIgbQALgoAEgSIAAghQABgugGhGQgFhFgRhPQgNg6AAg0QAChQASg6QATg6ASgXQALgQADgXIgWgEIgMgDIAAgMIgGg2QgGg0gPhGQgIACgKgDIgkgLIgLgCIgBgLIAAgEQgBgJAJgMQgOgNgLgQIgJAAIgHgBIgVgaQgPADgOgEQgigOgGgpQgFgqADgnIABgSQABg4ARhdQARheAghYQgRACgOgKQgcgXAPgrQAJgVAGgIQAJgJgCgSQgCgOgFgLQgRgYAVgtQAWggAigRQAngTAMghQACgggbgsQgXglgGgmQgLiLBYhlQA0g1BSgXQBQgWBOARQAMADAMAFQAiAGApAeQAoAeAgAuQAnAxAHBcQAAAbgIAeQAMASAAAXIAAAEQAbAMgDAdIgMBDIABAEIAAABIADATQAigDARAZIABACIACACIAEAJIAOAbIgLgFQgBAPgGASIADBGQADA0AAA0QAAAogDATIAAACQgDAbgJAbQgJAcgWAKQgaAJgjgdIgMgLQgTgPgSgSQgRAvggAgQgXAUgNAUQgNAUAygJQgEADgIANQgHANgHAGQgZAKgZgKIAMAkQAbA9AEBGIgBARIgCAQIgHgBQANBiATBvIAVB5IACAKIgIAGQgVANgZAJQgBArgNAbQgKAVgfB3QgfB2gdCAQgbCBgFA0IgBAYQASAkAiAqIACgDIAOgQIAMASQAGAJAPAOQAPAOASADIANABQAoABAWAQIADAAIgBACQAEAGACAJQAAAXgVASQgLALgPAKIgBADIAAABIgBACQgGAMg4ATQgdAKgiAAQgfAAglgJgAATRfIAEACIADgEIgHACgAjukiIAHAyQAFAjAAAmQAAAPgBANIAAABQABAMAIAQIAGAOIAGgOIgCgGQgEgJAAgHQABgNAGgHIATgZQAFgMAOgNIAFgGIAEgFIATgZQgYAJgZgKQgIgEgJgMQgKgLgGgCQBDADgrgvIgQgOIgGgHIgTArgAiqqjIALgFIgBgEIgKAJgAiiq0IgDgMIgEAEIAHAIIAAAAgAiWtgIgHgSIgCAAQAEAJAFAJIAAAAg");
	this.shape_124.setTransform(41.6,128.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEAySQBJBmgNB1QALAYAAAbQAGAGAGAKQAKAUgFAVQgGAUgEAWIgDARIAEAHQAGgBAHACQAQAEALASQASAdAIAMQANAWACAKQACAKgLAEQgGACgHAAQgDAhAFBcQAEBHgIA4QgHA8gTAbQgRAagjgFQgegEgXgWIgigfQgDAKgIAOQgQAbgWARQAHgBAIACQAPACACAJQACAIgMAOQgNAPgBAGQgBAMgQAOQgTAQgQgGQALAYAJAkQATBGgHA4IgHAEQAcDJANA+QAKAvgCAVQgDAWgTALQgZAOgIABQgDAdgQAeQgKATgPA7QgCAGgeB6QgmCdgHAhQgcB6ACAaQAVAqADAKQADgFAFgDQAKgGAKAIQAEACAPAdQAOAZAXAKQAFACA+AKQAoAHAJAXQAKAZggAqQgQAWgSAQQgBAHgEAIQgGAQgNAIQgWAOhBAEQhNAGg6gWIgHAJQgIAIgKAAQgQAAgfgGQgkgHgKgJQgIgGgDgNQgDgQgIgJQgRgUgFggQgGgsAagjIAKgjQAKgoAFgaQAGgdgKhWQgJhPgPhNQgShcAEhOQAGhrAvhKIgKgEQgKgIgDgWQgCgLgDg5QgDgzgHgiIgWgFQgZgGgLgFQgLgFgBgcQgBgOACgNIgMgBQgOgFgLgSIgegEQgigMgQglQgUgvAKiFQAMiRAqh9IgSgNQgSgTgCgaQgCgaAKgfQAFgQAHgRQAAgCgGghQgGggAEgZQAHgwBLgmQAZgNAGgRQAGgPgKgXQgCgDgPgaQgOgWgHgVQgYhDAYhYQAdhuBYhAQBfhFCLADQCIACBSBxg");
	this.shape_125.setTransform(41.7,128.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.502)").s().p("AhIT1IgHAJQgIAIgKAAQgQAAgfgGQgkgHgKgJQgIgGgDgNQgDgQgIgJQgRgUgFggQgGgsAagjIAKgjQAKgoAFgaQAGgdgKhWQgJhPgPhNQgShcAEhOQAGhrAvhKIgKgEQgKgIgDgWIgFhEQgDgzgHgiIgWgFQgZgGgLgFQgLgFgBgcQgBgOACgNIgMgBQgOgFgLgSIgegEQgigMgQglQgUgvAKiFQAMiRAqh9IgSgNQgSgTgCgaQgCgaAKgfIAMghIgGgjQgGggAEgZQAHgwBLgmQAZgNAGgRQAGgPgKgXIgRgdQgOgWgHgVQgYhDAYhYQAdhuBYhAQBfhFCLADQCIACBSBxQBJBmgNB1QALAYAAAbQAGAGAGAKQAKAUgFAVQgGAUgEAWIgDARIAEAHQAGgBAHACQAQAEALASIAaApQANAWACAKQACAKgLAEQgGACgHAAQgDAhAFBcQAEBHgIA4QgHA8gTAbQgRAagjgFQgegEgXgWIgigfQgDAKgIAOQgQAbgWARQAHgBAIACQAPACACAJQACAIgMAOQgNAPgBAGQgBAMgQAOQgTAQgQgGQALAYAJAkQATBGgHA4IgHAEQAcDJANA+QAKAvgCAVQgDAWgTALQgZAOgIABQgDAdgQAeQgKATgPA7IggCAIgtC+QgcB6ACAaQAVAqADAKQADgFAFgDQAKgGAKAIQAEACAPAdQAOAZAXAKQAFACA+AKQAoAHAJAXQAKAZggAqQgQAWgSAQQgBAHgEAIQgGAQgNAIQgWAOhBAEIgfABQg6AAgugRg");
	this.shape_126.setTransform(41.7,128.7);

	this.addChild(this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,85.4,259.4);


(lib.score = function() {
	this.initialize();

	// Layer 1
	this.score = new cjs.Text("", "bold 24px 'TimesNewRomanPSMT'", "#981EAD");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 26;
	this.score.lineWidth = 47;
	this.score.setTransform(23.6,0);

	this.addChild(this.score);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,33);


(lib.playAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Play again?", "30px 'Comic Sans MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 192;
	this.text.setTransform(95.9,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6500").ss(1,1,1).p("APUipIAAFTI+nAAIAAlTg");
	this.shape.setTransform(97.8,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AvSCqIAAlSIemAAIAAFSg");
	this.shape_1.setTransform(97.8,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"30px 'Comic Sans MS'"}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{font:"30px 'Arial'"}}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.8,66);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuCdIgfhVIgPgtIgVAqIgoBRIgYAwIgngEIgmgFIgehVIg0iWIgchRIgUgDIgcgDIAFgjIADggIA6gCIBigDIA6gCIADA+IAGBkIAEAzIAOACIAehEIAihMIAYAAIAbAAIAIAvIAPBMIAIAlIAOAAIAKgqIAUhUIAOgzIAxgBIBWgFIA1gCIgEAlIgdAOIgXALIgfBOIg5CPIghBTIgnABIgoACIgTgzg");
	this.shape.setTransform(182.4,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPDhQhjgNhChOQg2hGAHhRQAMhYBMhAQBShABZAIQBcANA3BHQA4BGgIBcQgIBZg9A+Qg2A2heAAIgZgBgAgxiJQgtAngJBGQgGBEAkAvQAYAdAhAEQApADAhgkQAhgkAIg5QAGhHgkguQgYgeghgEIgJAAQgaAAgaAUg");
	this.shape_1.setTransform(124.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABjDMQAAgtgHgsQgIgtgVgdQgUgbgegFQgdgEgaAVQgwAtgUBQQgUBRgDAiIgwgIIgwgJIAViSIAgjgIAVieIA9gMIBEgOIgWBSIgjCDIgSBFIANAEQABgEATgiQATgjAigjQAhgiAugBQBIAFAsByQAtBvAFDAIhBAWIhIAXQAFgfABhGg");
	this.shape_2.setTransform(74.3,-10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhdEdQgtgWgMhBIgBgJIgZALIgfAQQgSgdgWgyIA1gJIBWgOIA1gJIAAATQgFAHgCAWQAAAJAEAKQAMAaAsAGQBFACAKg1QAKgug0gVQg6gPgcgKQgdgLglgVQgxgZghgzQghg1AlhhQAag5AzgXQAzgYA0AFQAlADAjAVQAjAVAMArIACAIIAZgMIAkgRIgBA2IAAAwIhQANIhVANIABgLQACgegTgcQgTgUgjAFQgnAFgEAhQgBAvAwAUIAgALIAgALQBPAZA+AcQA+AbAfAsQAWAhgKAkQgLAlggAdQgfAdgjARQgmAVhEAUQgeAKgcAAQgiAAgfgNg");
	this.shape_3.setTransform(24.4,-8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiUCyIgQgoIArgxIBKhUIAngrIgVgBIgcgCIgDgeIAogBIAdAAIAigsIgPABIhjAHQg5AFg2AHIAHhBIAGg+QAZgCBYAAQBXABB1ASIgLAsIgMApIgMABIgSAmIANABIAUACIgPAoIgUABIgOAAIhQB1IArgHIBXgMIA3gIIgIBMIgGBIQhIADhiAJIiFAOQgEgVgLgbg");
	this.shape_4.setTransform(-43.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgEdIg4gDIgLhdIgTikIgMhcIBNgOIBSgNIAABlIgBCyIAABmIg8gCgAhQi9IgMhGIAygHIBRgNIA0gHIgBBMIgBBJIhPAJIhPAJIgLhGg");
	this.shape_5.setTransform(-75.3,-8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhtCyQhBhVAmjDIACgJIgJAAIgaABIgpADIAGgsIAGgnIBXgSQA/gMAhgIQAqgIASAHQgIAegQBQQgRBRgEBDIAAAMQAAA2AXAZQAUAUAggBQAQgBAKgLQAZgcAAhlQAAhAgJheIAtgJIAxgJIgEBQIgJBwQgFA6gGAbQgBATgmA5QgnA4hoACQhKgEgogzg");
	this.shape_6.setTransform(-108.5,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmBQQhagbgkAFQglAEgSAQIgRAKIgvgiIgzglQARgRAtgcQAtgdA6gEQAoAAAkAGQAqAIAxgDQAwgDA7glIAnBUIAnBTQgbAGhCAHQgTABgTAAQguAAgsgLg");
	this.shape_7.setTransform(-147.1,34.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjfExQiEhLgkiSQgbiSBah6QBZh6CmgoQClggCEBKQCEBKAkCTQAcCShaB6QhaB6imAoQgyAJgtAAQhuAAhcgzgAgTjmQhaAVguBQQguBPATBiQAYBlBTA5QBLAuBQgRQBagVAthQQAuhOgThiQgYhmhTg5Qg2gig7AAQgVAAgUAFg");
	this.shape_8.setTransform(-178.4,-4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4C4C4").s().p("AAdCYIgfhZIgqBUIghBCIhggKIgchRIg0iWIgehXIgdgDIgXgDIAKhdIDwgHIAFBSIAHB0IAjhNIAWgyIBHABIALA2IAQBXIAXhfIAQg/IDXgKIgGA+IgaAMIgcAOIghBTIg6CRIgfBPIhiADIgbhGg");
	this.shape_9.setTransform(182.4,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4C4C4").s().p("AgQDvQhpgOhFhTQg7hKAIhWQAMhfBShDQBWhDBfAIQBhANA7BMQA8BLgIBiQgOBuhGA6Qg8AyhXAAIgbgCgAgoh+QgpAjgIBAQgFA/AgAqQAUAZAbADQAkADAcghQAdghAHgzQAGhAghgrQgUgZgbgDIgGAAQgXAAgWARg");
	this.shape_10.setTransform(125.2,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4C4C4").s().p("ABOE6IAGg2QAEgygEg+QgFg9gagnQgQgWgZgDQgXgEgVARQghAegTA3QgTA3gIAvIgHAyIgBAIIh9gVIABgHIASiBIAjj0IAXinIAAgFIChggIgZBeIgoCWQAWgjAjgfQAhgfAvAAQBPAGAwB1QAvBzAFDLIAAAGIipA3g");
	this.shape_11.setTransform(74.1,-10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4C4C4").s().p("AhgEqQgwgYgPhBIgeAPIgVAKIgEgGQgDgDgRgfQgRgfgKgdIgDgIIDiglIAAAmIgBACQgIAGAFAfQAIATAiAFQA6ACAHgpQAIgjgngQQg7gPgdgLQgegKglgWQgkgQgtg2Qgug5Aqh1QAdg+A3gaQA3gZA4AFQBlAMAbBOIAmgSIAcgOIAACKIjCAeIACgKIABgZQAAgXgPgSQgOgPgcADQgcAFgDAWQgCAhAoATIA/AWQBSAZBAAeQBAAbAhAvQAYAmgLArQgVBHhfAyQgvAahFASQgdAIgbAAQglAAgggOg");
	this.shape_12.setTransform(24.2,-8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4C4C4").s().p("AiSDpQgBgPgMgeQgMgfgIgSIgCgEIBChKIBOhXIgggBIgGg6IAmAAIAogBIAKgOQheAGhsANIgJACIARidIAGAAQAGgCBggBQBfgBCIAVIAIABIgdBvIgOAAIgGANIAfACIgaBDIgQAAIgTABIgaAkIghAwIBfgOIBMgLIgQCzIgGAAQgwABhKAHIiCAMIg/AGIgHABg");
	this.shape_13.setTransform(-43.4,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C4C4").s().p("AhqhCIDWggIgDCwIi3AVg");
	this.shape_14.setTransform(-75.5,-28.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4C4C4").s().p("AgxDIIgtl3IC9gfIgBGdg");
	this.shape_15.setTransform(-74.2,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C4C4C4").s().p("AAFD3QhQgFgsg5Qgsg4AAhoQAAg1ANhFIglACQgUABgJACIgKACIAQhxIAFgBIBPgQQBHgOAlgJQBDgHAIAJIAGACIgCAGQgDAJgTBZQgTBZgGBLQgDA5AXAXQAPAPAaAAQAKAAAGgIQAOgLAGg/QAGg8gOiUIgBgGIB9gZIgBAJIgDBDQgDA7gGBBQgGBDgHAgQgNA4gwAtQguAshRAAIgIAAg");
	this.shape_16.setTransform(-108.5,5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C4C4C4").s().p("AAiBoQhUgcgiAEQgiAEgQAPQgLAHgMAHIgEABIh2haIAGgHQAFgIAzgmQAzgpBKgIQApABAlAHQArAJAvgEQAvgEA6gpIAHgFIBcDTIgJACQgKAEhLALQgbADgaAAQgyAAgxgMg");
	this.shape_17.setTransform(-146.8,34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4C4C4").s().p("AjnE9QiIhOgmiYQgciYBch/QBdh+CsgpQCrgiCJBOQCIBMAmCZQAcCYhcB/QhdB+isApQg0AKgvAAQhxAAhgg1gAgQjYQhUAUgrBKQgrBLASBcQAWBgBPA0QBDAsBMgPQBUgVArhKQArhKgShcQgWhhhPg0Qgzggg3AAQgTAAgSAEg");
	this.shape_18.setTransform(-178.4,-4.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#134668").s().p("AhqhCIDWggIgDCwIi3AVg");
	this.shape_19.setTransform(-73.1,-26.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#134668").s().p("AiSDpQgBgPgMgeQgMgfgIgSIgCgEIBChKIBOhXIgggBIgGg6IAmAAIAogBIAKgOQheAGhsANIgJACIARidIAGAAQAGgCBggBQBfgBCIAVIAIABIgdBvIgOAAIgGANIAfACIgaBDIgQAAIgTABIgaAkIghAwIBfgOIBMgLIgQCzIgGAAQgwABhKAHIiCAMIg/AGIgHABg");
	this.shape_20.setTransform(-41,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#134668").s().p("AgxDIIgtl2IC9ggIgBGdg");
	this.shape_21.setTransform(-71.8,3.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#134668").s().p("AAFD3QhQgFgsg5Qgsg4AAhoQAAg1ANhFIglACQgUABgJACIgKACIAQhxIAFgBIBPgQQBHgOAlgJQBDgHAIAJIAGACIgCAGQgDAJgTBZQgTBZgGBLQgDA5AXAXQAPAPAaAAQAKAAAGgIQAOgLAGg/QAGg8gOiUIgBgGIB9gZIgBAJIgDBDQgDA7gGBBQgGBDgHAgQgNA4gwAtQguAshRAAIgIAAg");
	this.shape_22.setTransform(-106.2,6.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#134668").s().p("AAiBoQhUgcgiAEQgiAEgQAPQgLAHgMAHIgEABIh2haIAGgHQAFgIAzgmQAzgpBKgIQApABAlAHQArAJAvgEQAvgEA6gpIAHgFIBcDTIgJACQgKAEhLALQgbADgaAAQgyAAgxgMg");
	this.shape_23.setTransform(-143.5,37.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#134668").s().p("AjnE9QiIhOgmiYQgciYBch/QBdh+CsgpQCrgiCJBOQCIBMAmCZQAcCYhcB/QhdB+isApQg0AKgvAAQhxAAhgg1gAgQjYQhUAUgrBKQgrBLASBcQAWBgBPA0QBDAsBMgPQBUgVArhKQArhKgShcQgWhhhPg0Qgzggg3AAQgTAAgSAEg");
	this.shape_24.setTransform(-176.1,-2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3F91C4").s().p("AjdHYQhHgWgZABQgYABgKAKQgMAIgSAJIgEACQgaALgWgQIh2hbQgQgNgCgUIAAgEQilAEh9hYQh9hXgkiWQggisBniOQBniPC/gtQC2gkCTBNQCTBNA2CbQAJgaAbgHIAFgBIBkgUQA5gLAagHQApgJAdAEQAcAFAGADIAHADQAdAMABAgIgBALIgCAGIAqgIIAzgKIgZiRQgCgUALgQQAMgPATgDIDYghQAWgCAQAOQAQAOAAAWIgBBmQAigCBbABQBcABB1ATIAIACQAUAEAMARQAHALAAAOQAAAGgBAGIgKAkIgOA1QAHALAAAOQAAAIgDAIIgaBEIgBACIAbgEQAXgDARAPQAQAQgCAVIgQCzQgHAngnAEIgGAAQguAChIAGQhHAFg6AHIhCAGIgIABQgUACgQgOQgIgHgEgKQgLAGgNAAIiSgIQglgEgHglIgGguQgXBFg8AvQg8AvhfgCQg9gEgtgcIA1B8QAIAUgJATQgKAUgVAFIgIADQgRAGhPAKQgaAEgaAAQg4AAg5gQg");
	this.shape_25.setTransform(-121.6,2.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#42687C").s().p("AjeHYQhHgWgZABQgYABgKAKQgMAIgSAJIgEACQgaALgWgQIh2hbQgQgNgCgUIAAgEQinAEh9hYQh9hXgkiWQggisBniOQBniPDAgtQC2gkCUBNQCUBNA2CbQAJgaAbgHIAFgBIBkgUQA5gLAbgHQApgJAcAEQAdAFAGADIAGADQAeAMABAgIgBALIgCAGIArgIIAygKIgYiRQgDgUALgQQAMgPATgDIDZghQAWgCAQAOQAQAOABAWIgCBmQAigCBcABQBbABB3ATIAHACQAUAEAMARQAHALAAAOQAAAGgBAGIgKAkIgOA1QAHALAAAOQAAAIgCAIIgbBEIgBACIAcgEQAWgDARAPQAQAQgBAVIgRCzQgGAngoAEIgGAAQgvAChHAGQhHAFg7AHIhCAGIgHABQgVACgQgOQgIgHgEgKQgLAGgNAAIiSgIQgmgEgHglIgFguQgXBFg9AvQg9AvhfgCQg8gEgugcIA1B8QAIAUgJATQgKAUgUAFIgJADQgRAGhQAKQgaAEgaAAQg4AAg5gQg");
	this.shape_26.setTransform(-120.7,-1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B23808").s().p("AAdCYIgfhZIgqBVIghBBIhggKIgchRIg0iWIgehXIgdgDIgXgCIAKhfIDwgGIAFBTIAHB0IAjhOIAWgyIBHABIALA3IAQBWIAXhfIAQg/IDXgKIgGA9IgaAOIgcANIghBTIg6CSIgfBOIhiADIgbhGg");
	this.shape_27.setTransform(182.4,5.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B23808").s().p("AgQDvQhpgOhFhTQg7hKAIhWQAMhfBShDQBWhDBfAIQBhANA7BMQA8BLgIBiQgOBuhGA6Qg8AyhXAAIgbgCgAgoh+QgpAjgIBAQgFA/AgAqQAUAZAbADQAkADAcghQAdghAHgzQAGhAghgrQgUgZgbgDIgGAAQgXAAgWARg");
	this.shape_28.setTransform(127.1,4.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B23808").s().p("ABOE6IAGg2QAEgygEg+QgFg9gagnQgQgWgZgDQgXgEgVARQghAegTA3QgTA3gIAvIgHAyIgBAIIh9gVIABgHIASiBIAjj0IAXinIAAgFIChggIgZBeIgoCWQAWgjAjgfQAhgfAvAAQBPAGAwB1QAvBzAFDLIAAAGIipA3g");
	this.shape_29.setTransform(76.1,-7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B23808").s().p("AhgEqQgwgYgPhBIgeAPIgVAKIgEgGQgDgDgRgfQgRgfgKgdIgDgIIDiglIAAAmIgBACQgIAGAFAfQAIATAiAFQA6ACAHgpQAIgjgngQQg7gPgdgLQgegKglgWQgkgQgtg2Qgug5Aqh1QAdg+A3gaQA3gZA4AFQBlAMAbBOIAmgSIAcgOIAACKIjCAeIACgKIABgZQAAgXgPgSQgOgPgcADQgcAFgDAWQgCAhAoATIA/AWQBSAZBAAeQBAAbAhAvQAYAmgLArQgVBHhfAyQgvAahFASQgdAIgbAAQglAAgggOg");
	this.shape_30.setTransform(24.2,-5.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFB01F","#DF7000"],[0.137,1],0,0,0,0,0,115.3).s().p("ACgGFQh2gPhPhaQgIAIgLADIipA4QgZAHgUgQQgTgRADgaIACgMQAIg6gChFQgChGgVghQgGgHgDABQgDgCgIAFQgbAZgSA/QgSA+gGA3IAAAHQgCAUgQANQgRAMgUgDIh9gUQgUgEgKgPQgbAUgfAQQhAAihNASQhNARhEgdQgjgPggg0IgGACQglAPgXghIgEgFIgXgqQgSgfgLggIgCgIQgDgHAAgIQAAgNAHgLQAMgTAVgDIAfgGIBCgKQhqhRAGhdQACg7AXgzQAjhOBFghQBFggBFAGQBhALAxBBIAagNQAXgKAXAMQAVAPABAaIAABEIgBBFQgDAngkAIIgMACIgSACQA0AXAmAhIAbjDIAPhwIAAgFQAGghAggIIChggQAagEASASQAMAOABASQAAAGgCAGIgIAfIgSBBQAcgJAcABQB/AJA7DEQAbgqAngiQBlhPB0ALQBeALBBA/IABgDQAHgmAmgEIDwgHQAqADAHApIAAANIACAUQAJgFALAAIBJAAQAOABALAHQAMgWAagDIDYgJQAWgBAPAPQAMAOABATIgBAFIgHA+QgDAXgXAMIglASIgkBaIg0CFIgbBFQgNAbgeADIhiADQghAAgNgfIgHgTIgOgmIgbA1QgPAcgggCIhggKQgegFgKgbIgVg+Igsh/QgSB+hUBFQhIA6hlAAQgRAAgSgCg");
	this.shape_31.setTransform(106.9,-8.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C6462C").s().p("ACgGFQh2gPhPhaQgIAIgLADIipA3QgZAIgUgRQgTgRADgZIACgMQAIg6gChGQgChFgVghQgGgIgDABQgDgCgIAGQgbAZgSA+QgSA/gFA3IgBAHQgCAUgQANQgRAMgUgDIh9gUQgUgEgKgQQgbAVgfAQQhAAihNASQhNARhEgeQgjgOggg1IgFADQgmAPgXghIgEgFIgXgqQgSgggLgfIgCgIQgDgHAAgIQAAgNAHgLQAMgTAVgEIAfgFIBCgLQhqhQAHheQABg7AXgyQAjhOBFghQBFggBFAGQBhALAxBBIAagNQAXgKAXAMQAVAPABAZIAABFIgBBFQgDAmgkAJIgMACIgSACQA0AXAmAhIAbjEIAPhvIABgFQAFghAggJIChgfQAagEASASQAMAOABASQAAAGgCAGIgIAfIgSBBQAcgJAcABQB/AJA7DDQAbgqAnghQBlhPB0AKQBeAMBBA/IABgDQAHgmAmgEIDwgHQAqACAHAqIAAANIACATQAJgEALgBIBJABQAOABALAHQAMgWAagDIDYgKQAWAAAPAPQAMAOABATIgBAFIgHA+QgDAXgXAMIglASIgkBZIg0CGIgbBFQgNAbgeACIhiAEQgggBgOgeIgHgTIgOgmIgbA1QgPAcgggCIhggLQgegEgKgbIgVg+Igsh/QgSB+hUBEQhIA7hmAAIgigCg");
	this.shape_32.setTransform(110.6,-12.2);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-224.5,-51.3,449.1,102.6);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,press_button:6,incorrect:22,pick_up:76,answering:87,hang_up:97});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_21 = function() {
		/* gotoAndStop("static");*/
	}
	this.frame_75 = function() {
		/* gotoAndStop("static");*/
	}
	this.frame_87 = function() {
		/* stop();*/
	}
	this.frame_114 = function() {
		/* gotoAndStop("static");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(54).call(this.frame_75).wait(12).call(this.frame_87).wait(27).call(this.frame_114).wait(1));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgJAAQABgEAIgBQAJABABAEQgBAFgJABQgIgBgBgFg");
	this.shape.setTransform(6.2,-150.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgLgOIAXARQAAAEgPAIg");
	this.shape_1.setTransform(8.4,-147.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(0.3,1,1).p("AAZAAQgCAXgXACQgVgCgDgXQADgWAVgCQAXADACAVg");
	this.shape_2.setTransform(7,-149.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgYAAQADgWAVgCQAXADACAVQgCAXgXACQgVgCgDgXg");
	this.shape_3.setTransform(7,-149.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AAkAAQgDAhghAEQgggEgDghQADggAggDQAhADADAgg");
	this.shape_4.setTransform(7,-149.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AgjAAQADggAggDQAhADADAgQgDAhghAEQgggEgDghg");
	this.shape_5.setTransform(7,-149.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A8846A").ss(1,1,1).p("AAAgJQADACgDAR");
	this.shape_6.setTransform(38.8,-22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A8846A").ss(1,1,1).p("AAJgSQgCABgHALQgIAJABAQ");
	this.shape_7.setTransform(42.1,-21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A8846A").ss(1,1,1).p("AACgFQAFgBgKAM");
	this.shape_8.setTransform(51,-14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A8846A").ss(1,1,1).p("AAlgRQAAACgLALQgKAJgKADQgJACgQAEQgQAEgBAA");
	this.shape_9.setTransform(48.2,-16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A8846A").ss(1,1,1).p("AAegaQgCAEgWAYQgTAbgQgC");
	this.shape_10.setTransform(45.4,-21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A8846A").ss(1,1,1).p("ABeACQgHAUgCACQgDAJAIAEQAJAEAEAGQAFASgVAEQgHgCgGgEQgEgBgFAEQgKAEgTACQgTACABgQQgRACgNgGQgIgLAGgQQgBgRgMgBQgMAAgGgMQgTARgbgHQgQgFAFgLQACgEABgGQADgNAKgTQAJgUARAIQATANAEAFQAEAGALAAQAOgDASgRQAVgRANAGQALAKgDAOQgDAOgBABQADgCAUgEQAVgEAGAMQADAOgHARg");
	this.shape_11.setTransform(43.5,-20.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C1A084").s().p("AASA6QgRACgNgGQgIgLAGgQQgBgRgMgBQgMAAgGgMQgTARgbgHQgQgFAFgLIADgKQADgNAKgTQAJgUARAIQATANAEAFQAEAGALAAQAOgDASgRQAVgRANAGQALAKgDAOIgEAPQADgCAUgEQAVgEAGAMQADAOgHARIgJAWQgDAJAIAEQAJAEAEAGQAFASgVAEQgHgCgGgEQgEgBgFAEQgKAEgTACIgEABQgPAAABgPg");
	this.shape_12.setTransform(43.5,-20.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A8846A").ss(1,1,1).p("AgngRQABgBAPgBQAOgBAKAHQAMAJANAKQANANABAB");
	this.shape_13.setTransform(-44.6,-19.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#A8846A").ss(1,1,1).p("AgjgFQAGgFAbgBQAJAEAOAIQAOAKABAB");
	this.shape_14.setTransform(-49.6,-17.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A8846A").ss(1,1,1).p("ABJAQQABACABACQgDAKgMABQgUgBgRgJQATAWgVANQgXgBgYgKQgQADgRAIQgkAAgRgfQgDgIAEgJQAGgVASgPQAUgSAXgJQAMAAAKAGQAPAGANACQAOgBAPgBQARgDAQACQALAHAGAMQAIAMAKANQAKAEABAJQgGAIgMACQgNAAgKgHQgEgDgEgE");
	this.shape_15.setTransform(-48.8,-19.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C1A084").s().p("AgaAtQgQADgRAIQgkAAgRgfQgDgIAEgJQAGgVASgPQAUgSAXgJQAMAAAKAGQAPAGANACIAdgCQARgDAQACQALAHAGAMIASAZQAKAEABAJQgGAIgMACQgNAAgKgHIgIgHIAIAHIACAEQgDAKgMABQgUgBgRgJQATAWgVANQgXgBgYgKg");
	this.shape_16.setTransform(-48.8,-19.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#277489").ss(1,1,1).p("ABLAAQgFA8g8AGIgSAAQg9gGgFg8QAFg7A9gGIASAAQA8AGAFA7g");
	this.shape_17.setTransform(24,-30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5DCBE8").s().p("AgIBCQg9gGgFg8QAFg7A9gFIASAAQA8AFAFA7QgFA8g8AGg");
	this.shape_18.setTransform(24,-30.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#277489").ss(1,1,1).p("AC6gpQgLA5g8AEIgWAAQg8gFgLg5IjGAAQgoAEgEAmQAEAnAoAEIFhAAQAogEAEgnQgDgggggJg");
	this.shape_19.setTransform(13.6,-24.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5DCBE8").s().p("AiwArQgogEgEgnQAEgmAogEIDGAAQALA5A8AFIAWAAQA8gEALg5QAgAJADAgQgEAngoAEg");
	this.shape_20.setTransform(13.6,-24.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#277489").ss(1,1,1).p("ACxA1QAogEAEgoQgEglgogEIi5AAIAAgUIibAAIAAAUIgNAAQgoAEgEAlQAEAoAoAEg");
	this.shape_21.setTransform(13.6,-25.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3193AD").s().p("AiwA1QgogEgEgoQAEglAogEIANAAIAAgUICbAAIAAAUIC5AAQAoAEAEAlQgEAogoAEg");
	this.shape_22.setTransform(13.6,-25.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA5B57").s().p("AA9ANQgTgbg9gFIg4AAIAKgUIBJAAQAEgEAcALQAcAKAJA/QgDgIgNgUg");
	this.shape_23.setTransform(51.3,-6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA5B57").s().p("AnQgIIOhAAIgJARg");
	this.shape_24.setTransform(-7.4,-9.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#470E06").ss(1,1,1).p("AAuh6IAABdIhbAAIAACY");
	this.shape_25.setTransform(-34.4,93.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#470E06").ss(1,1,1).p("Agth6IAABdIBbAAIAACY");
	this.shape_26.setTransform(30.8,93.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A82B1B").s().p("AnPAUIAAgnIOfAAIAAAng");
	this.shape_27.setTransform(-4,-16);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7E7F7F").s().p("AGgFKIAAo+QgGgzg8gFIsYAAQgJAAgJACQANgoAzgDIMYAAQA8AFAFAzIAAI+QgDAogsANQACgGAAgGg");
	this.shape_28.setTransform(-4.3,43);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B7B7B7").s().p("AmLFQQg1gFgFgsIAAo+QAFgsA1gEIADAAIAAIxQAFAsA1AEIMUAAIAAANQgFAsg0AFg");
	this.shape_29.setTransform(-4.4,43.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9E9E9E").s().p("AmMFXQg7gEgGgzIAAo+QAGg0A7gEIMYAAQA9AEAFA0IAAI+QgFAzg9AEg");
	this.shape_30.setTransform(-4.4,43.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#871512").ss(1,1,1).p("AHwkzIAAJnQgGA3hBAFItRAAQhBgFgGg3IAApnQAGg3BBgFINRAAQBBAFAGA3g");
	this.shape_31.setTransform(-4.4,43.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BCBCBC").s().p("AmoFwQhAgFgHg3IAApnQAHg3BAgFINRAAQBBAFAFA3IAAJnQgFA3hBAFg");
	this.shape_32.setTransform(-4.4,43.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#470E06").ss(1,1,1).p("AIlC/QgHAhhHAEIutAAQhHgEgHghIAAl9QAHgiBHgDIOtAAQBHADAHAig");
	this.shape_33.setTransform(-4.4,43.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7F1804").s().p("AnVDjQhIgCgHgjIAAl7QAHgjBIgCIOrAAQBIACAGAjIAAF7QgGAjhIACg");
	this.shape_34.setTransform(-4.4,43.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A82B1B").s().p("AoqIsQhGgHgGhHIAAu7QAGhIBGgGIRVAAQBGAHAGBHIAAO7QgGBHhGAHg");
	this.shape_35.setTransform(-4.4,45.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#871512").ss(1,1,1).p("AKenvIAAPeQgIBZhXAIIx9AAQhXgIgIhZIAAveQAIhYBXgIIR9AAQBXAIAIBYg");
	this.shape_36.setTransform(-4.4,45.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C43A30").s().p("Ao+JQQhXgIgIhZIAAveQAIhYBXgIIR9AAQBXAIAIBYIAAPeQgIBZhXAIg");
	this.shape_37.setTransform(-4.4,45.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("ABNmkIiZAAIAAHkQgIBEg6BSQg7BRiUAhIAABcIK7AAIAAhcQiUghg7hRQg6hSgIhEg");
	this.shape_38.setTransform(-4.4,148.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#334D90").s().p("AldGlIAAhdQCUghA7hRQA6hSAIhEIAAnkICZAAIAAHkQAIBEA6BSQA7BRCUAhIAABdg");
	this.shape_39.setTransform(-4.4,148.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#470E06").ss(1,1,1).p("ACOmVIAAMrIkbAAIAAsrg");
	this.shape_40.setTransform(-4.4,147.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7F1804").s().p("AiNGWIAAsrIEbAAIAAMrg");
	this.shape_41.setTransform(-4.4,147.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("Al0QqIAAiHIATgEQCFgcA4hJIAApmImaAAQgygCgigiQghghgCg0IAAveQACgzAhghQAigiAygBIBbAAIAAguIPKAAIAAAuIBYAAQAyABAhAiQAiAhABAzIAAPeQgBAzgiAjQghAhgyACImaAAIAAJmQA4BJCFAcIATAEIAACHg");
	this.shape_42.setTransform(-4.4,86.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AifApIAAhSIE/AAIAABSg");
	this.shape_43.setTransform(-30.9,-19.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D3B63C").s().p("Ag1AeQgdgDgCgbQACgbAdgCIBrAAQAdACACAbQgCAbgdADg");
	this.shape_44.setTransform(-31.6,-23.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AB2AAQgEApgqAEIiPAAQgqgEgEgpQAEgpAqgEICPAAQAqAEAEApg");
	this.shape_45.setTransform(-31.3,-24.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F2D651").s().p("AhHAuQgqgFgEgpQAEgoAqgEICPAAQAqAEAEAoQgEApgqAFg");
	this.shape_46.setTransform(-31.3,-24.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#4F6632").ss(0.5,1,1).p("AgJAGQAIAJAHgFQAJgIgFgHQgIgJgHAFQgJAHAFAIg");
	this.shape_47.setTransform(41,-27.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJAGQgEgHAIgHQAHgFAIAIQAEAHgIAHQgEACgCAAQgEAAgFgFg");
	this.shape_48.setTransform(41,-27.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#738E54").s().p("Agqg+QAHgDAHgBQAdgDAdAZIAHAmIAGAjQgBAOgoAWIgGACQANhIgzg5g");
	this.shape_49.setTransform(40.5,-26.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#829369").ss(1,1,1).p("ABAgwIAOBNQABAGghAbQghAbhQghIgLhJQACgJApghQAnghA8Asg");
	this.shape_50.setTransform(37.6,-26);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A8BC8F").s().p("AhDA4IgLhJQACgJApghQAnghA8AsIAOBNQABAGghAbQgOAMgZAAQgcAAgugSg");
	this.shape_51.setTransform(37.6,-26);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#4F6632").ss(1,1,1).p("AgEATQABAAAFgIQAGgJgGgU");
	this.shape_52.setTransform(40.8,-35.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5E7244").s().p("AgDDeIgWgTQgUgRgLgRQgRgkALgzQABgVgXhFQgYhHgZhCIgbhHIAOgRQA6BPAdBHQAeBHAZBXQAngfASALQARALAZAtQAIAIAXAEQAWADAMAWQAJAvgmAWQgjARglAAQgfAAgfgMg");
	this.shape_53.setTransform(30.7,-43.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#4F6632").ss(1,1,1).p("AiiikQACAFAZBCQAZBCAYBFQAXBHgBAUQgLAzARAkQALASAUARQAUARACACQAFAEA4AGQA4AFAlgnQAagugWg3QgWg4gNgTQgJgQgrhJQgqhKgshXQghg9gUgv");
	this.shape_54.setTransform(31.7,-48.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#738E54").s().p("AA4EcQg4gGgFgEIgWgTQgUgRgLgSQgRgkALgzQABgUgXhHQgYhFgZhCIgbhHIBZh4QAUAvAhA9QAsBXAqBKIA0BZQANATAWA4QAWA3gaAuQggAjgvAAIgOgBg");
	this.shape_55.setTransform(31.7,-48.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#4F6632").ss(0.5,1,1).p("AAKACQgDAJgIgBQgKgDABgIQADgKAJABQAJADgBAJg");
	this.shape_56.setTransform(-58.6,-24.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAAAKQgLgCACgJQACgKAJABQAJADgBAJQgCAJgIAAIAAgBg");
	this.shape_57.setTransform(-58.6,-24.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#738E54").s().p("AgTAwIgIgkIgHghQAQghAbgIIAOgCQgZBDAlA9IgHABQgpgGgGgLg");
	this.shape_58.setTransform(-58.3,-23.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#829369").ss(1,1,1).p("AhLgWIAPBIQACAHAmAMQAkAMA9g7IgRhDQgEgHgwgPQgugOglA7g");
	this.shape_59.setTransform(-54.6,-23.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A8BC8F").s().p("AgVBFQglgMgCgHIgQhIQAlg7AvAOQAvAPAFAHIAQBDQgyAxghAAQgHAAgHgCg");
	this.shape_60.setTransform(-54.6,-23.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5E7244").s().p("AhSDhQgTgTAAhGQABhHARhWQAaiHA5hWQAAAMgfBLQggBMgOA7QgKAwABA2QgBAqAOAGQAQAGAagTQAOgJARgIQgKAJgDARIgDALIAKgGQAfgSAeAJQAeAKARAhIgBAFQgCALgEAGQgcAphDANQgMACgMAAQgkAAgWgSg");
	this.shape_61.setTransform(-56.5,-45.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#4F6632").ss(1,1,1).p("ABHh/IAFBmQAEAJATBQQASBSgTAuQgbAng8AOQg5APgogdQgYgZAEhcQAEhcAbhnQAchpAvg/");
	this.shape_62.setTransform(-56.4,-45.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#738E54").s().p("AhWDnQgYgZAEhcQAEhcAbhnQAchpAvg/IBHB6IAFBmQAEAJATBQQASBSgTAuQgbAng8AOQgSAFgRAAQgkAAgagTg");
	this.shape_63.setTransform(-56.4,-45.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#4F6632").ss(1,1,1).p("AgVA4QAqgiAAgJQABgBgCgTQgCgVgWgb");
	this.shape_64.setTransform(-49.5,-63.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#A8846A").ss(1,1,1).p("AAPgjQgGACgRAZQgTAYAmAU");
	this.shape_65.setTransform(-31,129.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C1A084").s().p("AgIgIQARgZAGgCIgEBHQgmgUATgYg");
	this.shape_66.setTransform(-31,129.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D66AF").s().p("AgaARQADgBARgJQAOgIgJgPIAcAAQgBACgPAPQgNAQgVAAIgDAAg");
	this.shape_67.setTransform(7.7,136.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D66AF").s().p("AhRAKIAoACQAmABAkgFQAmgGAGgUQABABAEAJQADAIgNAFQgQAFgpAHQgOACgNAAQgfAAgmgJg");
	this.shape_68.setTransform(-5.8,141.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#4F6632").ss(1,1,1).p("ADhAkQgDAGhEAaQhEAZhlgYQgSgHgNgLQgOgLgggEQgNgBgSAEQgSAFAHAUQgXgDgXgIQgJgkgcgWQgSgnAYgkQgDAFAHAgQAIAhA9AJQA/AEATAHQAQAFACACQgBgGARggQARgjA3gKQACABAZAMQAaAMAZAIQAnAJAgAPQAfANgFAgg");
	this.shape_69.setTransform(-16.1,139.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#738E54").s().p("AgPBFQgSgHgNgKQgOgMgggEQgNgBgSAEQgSAFAHAUQgXgDgXgIQgJgkgcgWQgSgnAYgkQgDAFAHAgQAIAhA9AKQA/ADATAHQAQAFACACQgBgFARghQARgiA3gLIAbANQAaAMAZAIQAnAJAgAPQAfANgFAgQgDAGhEAaQgjANgsAAQgqAAgwgMg");
	this.shape_70.setTransform(-16.1,139.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#4F6632").ss(1,1,1).p("AgMgEQABAGAYAD");
	this.shape_71.setTransform(-49.7,-61.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#829369").ss(1,1,1).p("AAUAAQgCASgSACQgRgCgCgSQACgRARgCQASACACARg");
	this.shape_72.setTransform(-7.4,-91.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A8BC8F").s().p("AgSAAQABgRARgBQASABABARQgBASgSABQgRgBgBgSg");
	this.shape_73.setTransform(-7.4,-91.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#829369").ss(1,1,1).p("AATAAQgBASgSACQgRgCgCgSQACgRARgCQASACABARg");
	this.shape_74.setTransform(-8.7,-99.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A8BC8F").s().p("AgTAAQACgRARgBQASABACARQgCASgSABQgRgBgCgSg");
	this.shape_75.setTransform(-8.7,-99.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#843C3C").s().p("AARAwQgFgZgKgFQgIAAgGASIgFAQQAIglgHgdIgFgWIACAGQAGASALAFQAHgCgBgeQgBgegBgFQARArACAxQACA0gBAFIgFgbg");
	this.shape_76.setTransform(23,-159.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#843C3C").s().p("AgFARQgWgcgVAcQgDABgLABQgKAAARgTQATgSACgTIABACQAIAbAUgKQAPgPgBgFQgCgFANAFQAMAHgGARQgFAOAMAHQAQAGALABQAEAAADgDIgDAIQgHAXgpgCIgCABQgFAAgOgYg");
	this.shape_77.setTransform(-52.4,-96.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#843C3C").s().p("AgcByQAFgTAhgfQAlgfgNgPQgOgPg6ASQh1ApARgiIARgeQAIgOgSAGQgXAGgZgMQgZgKADgIQADgHAWgjQAWgiA/gYQgFADgXAXQgYAYAIARQATANAugKQAugLAGgCQgEACgPAPQgOARAXAGQAaADAPgMQASgLAkAHQAiAMAKAWQAKAUAWAHQAZAGAPgHQAOgIADgnQADAFgBAmQgBAngsANQgzAGg5AOQg3APgZApQgCAAAFgUg");
	this.shape_78.setTransform(-23.4,-169.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#351212").s().p("Ag+BfQgfgnASgvQAngzA1gQQA4gRAEg8QADACACAZQACAYggAXQgcANgnAWQgqAVgNAlQgNAnA6BBQgGgCgfgng");
	this.shape_79.setTransform(-42.8,-113.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#351212").s().p("AADC4QAegpAVgnQALgkgcgdQgdgdg0hGQgthSAYhAQAYhBAHgDQgDAEgOA1QgOA2AMA6QAeBKA0AtQA3AvgLApQgVAogUAUQgUATgCAiQABAlAJANIAIAKQg1gzAcgog");
	this.shape_80.setTransform(-31.8,-133.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#843C3C").s().p("AlDC/QgCgUAAgUQACiaBkhwQBAhDBqgdQBogdBjAWQA9APA3AyQA4AxAEBEIgBAMIgHgDIABgGQgCgmgXgeQgXgdgcgUQiOhmi3BEIgWAIQg9ASgxAuQg7A9gaBVQgTA+gCBMQAAAeAFAbQgGgVgCgRg");
	this.shape_81.setTransform(-17.1,-168.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#351212").ss(1,1,1).p("AE9lWQgYgBgQAXQABgTgGgYQgFgZgTgJQgwgKgBA3QgBA3gLAcQgVAYglAGQglAHgdAEQhjAWgGA3QgGA2AjBEQAhBDAXBAQAXBBgsArQglAfgHAWQgHAVAlAkQAjAjgOAYQgOAYg2gHQAlgGgKgXQgLgXgXgNQghgShAgSQg/gRgfAdQgSAeAUAoQAVAngQAgQgVAXgagEQgbgDgMAFQgWAUAFAVQAEAUAfgSQgoAdgagUQgbgTAPguQAOgfAKgMQAKgLgCggQgFghgLgXQgLgXATglQAggpAygaQAygZASg0QAGgxgjg4Qgjg3gKg0QgPiyB0iGQBFhHBqgcQBrgbBhAWQBEARA6A4QA6A4gHBN");
	this.shape_82.setTransform(-22.3,-138.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5E2A2A").s().p("AlsIJQgbgTAPguQAOgfAKgMQAKgLgCggQgFghgLgXQgLgXATglQAggpAygaQAygZASg0QAGgxgjg4Qgjg3gKg0QgPiyB0iGQBFhHBqgcQBrgbBhAWQBEARA6A4QA6A4gHBNIhAgeQgYgBgQAXQABgTgGgYQgFgZgTgJQgwgKgBA3QgBA3gLAcQgVAYglAGIhCALQhjAWgGA3QgGA2AjBEQAhBDAXBAQAXBBgsArQglAfgHAWQgHAVAlAkQAjAjgOAYQgOAYg2gHQAlgGgKgXQgLgXgXgNQghgShAgSQg/gRgfAdQgSAeAUAoQAVAngQAgQgVAXgagEQgbgDgMAFQgWAUAFAVQAEAUAfgSQgXARgTAAQgNAAgLgIg");
	this.shape_83.setTransform(-22.3,-138.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#351212").s().p("AAAARQAEgDgBgMQgIgPgFgEQAIAAADAFQANAUgEAKg");
	this.shape_84.setTransform(-0.1,-174.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#351212").s().p("AADAkQAEgkgHgSQgHgQgCgBQAOAIADAbQADAbgBAJg");
	this.shape_85.setTransform(1.9,-174.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#932121").s().p("AgSgDQgMAAgNADQgMABgIgFIAMAAQAWgJASAGQAMANAMgBQAMgFAIAAQAMAGATgFQgDAFgTAAIghAEQgLgIgQgFg");
	this.shape_86.setTransform(-5.6,-130.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKAFQgWgJgCgDQAiAOASgFIARgDQgRAJgPAAQgGAAgHgDg");
	this.shape_87.setTransform(-5.4,-128.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#491D1D").s().p("AAPAeQgRgNgigHQgBgEAEgYQAFgaAZABQAeAJAHAiQAGAhgFAMQgBgCgTgNg");
	this.shape_88.setTransform(1.4,-174.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AF8D74").s().p("AgCAHQgPgEABgEQABgGACAAQACAFAbgCQABABgDAGQgBAFgJAAIgGgBg");
	this.shape_89.setTransform(-6.2,-125.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A8846A").s().p("AAKASIgXgSQgRgPAdgPQANgEADAIQADAJgBACIADAwg");
	this.shape_90.setTransform(-35.8,-151.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B74141").s().p("AAhALQgIAAgHAEQgQACgIgKQgQgIgSADQgQAFgJgJQARACARgGQANgLAPAEIAPAHQADgDASAAQALAGAJAIQAEAFAJgCQgHAHgJAAQgIAAgJgEg");
	this.shape_91.setTransform(-5.8,-131.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#B74141").ss(0.3,1,1).p("AAlAVQgQAKgUgCQgcgDgQgRQgPgJgJgQQAHABAHAAQAMgBALgGQAOgKAMAFQAKAGAEABQADgDASAAQAKADAHAKQAHAJAMgEQgDADgCACQgEADgEACQgIAJgJAHg");
	this.shape_92.setTransform(-5.6,-130);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EA7875").s().p("AABAdQgcgDgQgRQgPgJgIgQQAGABAHAAQANgBALgGQANgKAMAFIAOAHQADgDATAAQAKADAGAKQAHAJANgEIgGAFIgIAFQgHAJgKAHQgNAJgQAAIgHgBg");
	this.shape_93.setTransform(-5.6,-130);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#604F40").s().p("AAbgKQgSgHgfAGIgkAJQgDgDBCgRQAigEALAYQALAVgBAEQgBgIgggZg");
	this.shape_94.setTransform(-16.3,-160.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#604F40").s().p("AgVgFQAVgVAcAQIARARQgGgEgSgGQgXgMgqAhQAAgEAXgTg");
	this.shape_95.setTransform(8.6,-158.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#A8846A").s().p("AgDgEQAQgEAEgEQgKAOgKgBQgGAIAAAEQgQgQAWgBg");
	this.shape_96.setTransform(-1.3,-137.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#93735D").s().p("AgIAbIAMgGQAIgEAAgFQAAgFgBgCQgLgFgGgQIgKgXIAMAUQAJASAJACIABABIAAABQAHALgOANIgNAGQgIAEgBACQgCgEAIgIg");
	this.shape_97.setTransform(-0.8,-140.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#604F40").s().p("AAAgNQAmgDADADQALgFADgFQgDAJgDACQANgFADgGQgHAQgHACQgzgRgiAXQgWAQgIAHQAeghAigEg");
	this.shape_98.setTransform(7.8,-152.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A8846A").s().p("AAOgbQAqANADAIQg8gNgeAWQgWATgFAIQAihFAmAMg");
	this.shape_99.setTransform(6.9,-152.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#604F40").s().p("AA5AQQgcgXhOACIgNgKQgLgKgEgKIAKALQAKALAJAFQgEgDgDgRQACAHAIAKQAGgDAuAGQAtAEAaAoQgHgHgOgNg");
	this.shape_100.setTransform(-19,-155.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#A8846A").ss(1,1,1).p("AAAAUIABgn");
	this.shape_101.setTransform(-17.8,-120.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#A8846A").s().p("AArAJQgbgahRADQAGgJAzgMQAwgLAaBTQgFgIgSgUg");
	this.shape_102.setTransform(-17.4,-154.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.498)").s().p("AgJAAQABgEAIgBQAJABABAEQgBAFgJABQgIgBgBgFg");
	this.shape_103.setTransform(-18.3,-153.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.498)").s().p("AgLgOIAWASQAAADgPAIg");
	this.shape_104.setTransform(-16,-150);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#663300").ss(0.3,1,1).p("AAZAAQgCAXgXACQgVgCgDgXQADgWAVgCQAXADACAVg");
	this.shape_105.setTransform(-17.4,-151.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgYAAQADgWAVgCQAXACACAWQgCAWgXADQgVgDgDgWg");
	this.shape_106.setTransform(-17.4,-151.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(0.3,1,1).p("AAkAAQgDAhghAEQgfgEgEghQAEggAfgDQAhADADAgg");
	this.shape_107.setTransform(-17.4,-151.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#663300").s().p("AgjAAQAEggAfgEQAhAEADAgQgDAhghADQgfgDgEghg");
	this.shape_108.setTransform(-17.4,-151.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgkgOQACgBAZAEQAXADAXAX");
	this.shape_109.setTransform(-16.1,-155.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A8846A").ss(0.5,1,1).p("ABBAPQACgFgYgcQgYgehJAHIgKADQgBADADAYQADAXAPAQQAaAaAngRQAtgTgBgDg");
	this.shape_110.setTransform(-17.2,-152.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgsAcQgPgQgDgXIgCgbIAKgDQBJgHAYAeQAYAcgCAFQABADgtATQgQAHgMAAQgWAAgPgQg");
	this.shape_111.setTransform(-17.2,-152.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A8846A").s().p("AguAfQgPgSgDgZQgDgaAAgDIALgEQBMgHAZAgQAZAfgCAFQABAEgvAUQgRAHgNAAQgWAAgQgQg");
	this.shape_112.setTransform(-17.5,-151.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#A8846A").ss(0.5,1,1).p("Ag7AIQgBgFAbgaQAagbBDAOQAAADgGAfQgFAcgMAMQghAQg/gug");
	this.shape_113.setTransform(6.6,-149.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("Ag7AIQgBgFAbgaQAagbBDAOIgGAiQgFAcgMAMQgJAEgKAAQgdAAgwgig");
	this.shape_114.setTransform(6.6,-149.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A8846A").s().p("AgDAqQgdgJgfgYQgBgGAcgcQAdgeBHAPIgGAlQgGAfgNANQgIAFgLAAQgLAAgMgEg");
	this.shape_115.setTransform(7,-149.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AF8D74").s().p("ABjEyQhRgfgxg8Qgyg+gYgzQgYg0AAgEIgBgEIgEAAQhFgEgFgkQgRg8AigVQAXgNAXAdIAIgGQgHgFALgbQALgbBAhBIABAAQAsgsBAgiQBCghBAgBQASABAPADQhkAChRA6QgeAYgfAxQghAvADApIAKAcQABAOAHAPIAIAUQABADABAPQgCADgFAmQgFAmARBKQAKAhAoAvQApAuAjAMIgCAAg");
	this.shape_116.setTransform(-18.9,-149.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#A8846A").ss(1,1,1).p("AB4k1QhHgHhCAjQhDAkgxAwQgTARglAsQgkArAMAbQgjgngbAcQgbAdARAzQAIApBHADQAAAEAYA0QAXA0A0A+QAzA+BRAfQAlAGA7gpQA8gqAZgiQAkg5AHhDQASg3AVgzQARhbgvhUQgvhVhbgSg");
	this.shape_117.setTransform(-11.6,-149.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C1A084").s().p("AAZE2QhRgfgzg+Qg0g+gXg0QgYg0AAgEQhHgDgIgpQgRgzAbgdQAbgcAjAnQgMgbAkgrQAlgsATgRQAxgwBDgkQBCgjBHAHQBbASAvBVQAvBUgRBbQgVAzgSA3QgHBDgkA5QgZAig8AqQg0AkgjAAIgJgBg");
	this.shape_118.setTransform(-11.6,-149.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#4F6632").ss(1,1,1).p("AgmgFQAHgHBGAT");
	this.shape_119.setTransform(-9.8,-73.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#4F6632").ss(1,1,1).p("AhCAJQADgCArgHQAogIAvAA");
	this.shape_120.setTransform(-14.5,-74.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#4F6632").ss(1,1,1).p("AgDAYQAGgCABgt");
	this.shape_121.setTransform(-34.7,-94.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#4F6632").ss(1,1,1).p("AAIAsQgBgCgHgTQgFgSgBgMQAGgeADgF");
	this.shape_122.setTransform(8.4,-92.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#738E54").s().p("AAHgNQAHgWgDgFQAKAIAFAYQAFAYgBAEQgggBgcAWQAWgaAPgcg");
	this.shape_123.setTransform(-6,-115.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#738E54").s().p("AAIAWQgfgVgUAiQgBgSAGgaQAGgbARgHIAWgIIgCAkQAWAhARAiQgPgTgVgLg");
	this.shape_124.setTransform(-18.4,-116.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#829369").ss(1,1,1).p("AA+BTQACADAAgBAA+BTQgGgGgUgRQgagWgYgFQgsgBgFAEQAEgGAbggQAcglAJgRQAKgbgGgBQABgCAKAPQALAPAJA4QAIA1AIARQAEAJACAEg");
	this.shape_125.setTransform(-6.1,-111.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A8BC8F").s().p("AAlA9QgagWgYgFQgsgBgFAEIAfgmQAcglAJgRQAKgbgGgBQABgCAKAPQALAPAJA3QAIA2AIARIAGANIgagXg");
	this.shape_126.setTransform(-6.2,-111.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#829369").ss(1,1,1).p("AAKhjIgCAkQAHgDA2ByIgxgKQAFgIgtAdQgtAjgDAGQABgJAMg1QALg1AHgZQADgTACgOQACgOARgFg");
	this.shape_127.setTransform(-18.7,-111.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A8BC8F").s().p("Ag4AmIAThOIAFghQACgOARgFIAXgHIgCAkQAGgDA3ByIgxgKQAFgIgtAdQgtAjgDAGIAMg+g");
	this.shape_128.setTransform(-18.7,-111.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#A8846A").s().p("Ag9gFIADgkIBxAGQAAAEADAfQAEAggBAJIAAABQg/gSg7gdg");
	this.shape_129.setTransform(-11.6,-119.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#A8846A").ss(1,1,1).p("AA6hKIh0gHQAAADgCAZQgCAagBAEQgBAmAVASQAVATATAeQAYgVASgOQASgOAHggQABgHgEggQgDggAAgEg");
	this.shape_130.setTransform(-11.6,-115.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C1A084").s().p("AgrAhQgVgSABgmIADgeIACgcIB0AHQAAAEADAgQAEAggBAHQgHAggSAOIgqAjQgTgegVgTg");
	this.shape_131.setTransform(-11.6,-115.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#5E7244").s().p("AiXENQACgJALgNIASgTIAfgpQAPgWATgfIAUghQABgEAEgjQAFgigNgNQgMgFgigTQgigVgXgsQgWgsAVhMQgCAAgWApIgDgfIAFgKQAMgTAJgVQACgRAAgSQABAEAEAEQAGAGAEAHQAHATgDAVQgCAmABAiQACAiAWAhQAmA4A+gNQAagFAZgKQAggRAYgaQgBAJgHASQgHATgKADQAKAAAJACIAXAAQAWAAAVAIIADABQgUACgRAIQAUACAOARQgegFgegGQgggFgdALQghAHgVAXQgLAcACAgQACANgCAMQAOAEgPAJQgLALgIANQgXAagZAaQgRASgPAUQgJAMgMAKQgJAGgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_132.setTransform(-20.8,-72.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#5E7244").s().p("AglAdQADhGg6AGQg7AHgxAXQBVgrBYgmQgBgHCIgDQAUAIAQARQAaASAfALQgUgCgUAHQgVAIgFAWQgCAUASAYQAQAWAQAMQhMg3gzBFQgKgHABgOQABgNgTgHQgdgEgOAbQgUAVgbAJQANgiALgig");
	this.shape_133.setTransform(-18.2,-110);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#5E7244").s().p("AAsC1QgGgCgCgMQgXhggRg+IgRg6IgHABQgLgggFggQgFggARgkQAFBmAhBkQAjBnAFAIQgMAOAHARQAIARgFAAIAAAAg");
	this.shape_134.setTransform(12.3,-80.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#4F6632").ss(1,1,1).p("AACAJQgCgRgBAA");
	this.shape_135.setTransform(9.4,-86.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#4F6632").ss(1,1,1).p("AEKhxQAWBLAkCMQAIAcAXgPQAXgOAdgZQAWgWgIgoQgIgmgHgcQgOg2gQg1QgUhOgqhGQg2hGg3gPQgcgNgmgXQgngWgEgDQiIADABAHQgFADhGAgQhGAhhEAYQg8AegRBSQgQBSgFAYQgsBogcB9QANAlAeAdQASALAWgHQAVgGAUgLQgEgaAAgBQAEgIArhhQArhgAghdQgWBMAXAsQAXAtAiASQAiAVAMAFQAMANgEAiQgEAjgCAEQgBADgSAeQgTAfgPAWQgSAYgiAtQgjAsgEAFQgNAdAsAsQAsArAaAIQAqAIA8gRQA7gSgIg0QAQA4A4AKQA5AKAxADQABhpgqhgQgrhgAIhpQAKgOAYgPQAXgOAmgkQApg0gIgfQgDgKgCgJ");
	this.shape_136.setTransform(-17,-74.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#738E54").s().p("Ah1HDQgagIgsgrQgsgsANgdIAngxQAigtASgYQAPgWATgfIATghQACgEAEgjQAEgigMgNQgMgFgigVQgigSgXgtQgXgsAWhMQggBdgrBgIgvBpIAEAbQgUALgVAGQgWAHgSgLQgegdgNglQAch9AshoIAVhqQARhSA8geQBEgYBGghIBLgjQgBgHCIgDIArAZQAmAXAcANQA3APA2BGQAqBGAUBOQAQA1AOA2QAHAcAIAmQAIAogWAWQgdAZgXAOQgXAPgIgcQgkiMgWhLIgFgTIAFATQAIAfgpA0QgmAkgXAOQgYAPgKAOQgIBpArBgQAqBggBBpQgxgDg5gKQg4gKgQg4QAIA0g7ASQgpAMgiAAQgOAAgNgDg");
	this.shape_137.setTransform(-17,-74.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#351212").s().p("AhHGnQgSgGAPgZQAWgYATgOQATgOgUgcQgbgbgngRQgngRAKgxQAMgrAdiEIA4j6IAciAIgXgXQgWgXgWgdQBcAjA9BGQA+BHgPBtQgNBKgpA/QgqA+ghBBQgfBBAMBPQACAcANAaQAKAZADAbQgNAKgUAJQgtAVADAEQADAEAOAGIgCAAQgGAAgOgEg");
	this.shape_138.setTransform(8,-139.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#351212").ss(1,1,1).p("Agdk8QgDgCgfggQgeghgVgiQgVgjAagJQA0gHBRBFQBTBFAmB0QAmB0hUCCQgDADgeAyQgfAygYA9QgWA9APAjQAzBehoApQgtAVADAEQADAEAOAGQgEABgSgFQgSgGAPgZQAWgYATgOQATgOgUgcQgbgagngSQgngRAKgxQAMgrAdiEQAeiBAah4QAah4ACgJg");
	this.shape_139.setTransform(10.5,-143.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#5E2A2A").s().p("AhgHKQgSgGAPgZQAWgYATgOQATgOgUgcQgbgagngSQgngRAKgxQAMgrAdiEIA4j5IAciBIgigiQgeghgVgiQgVgjAagJQA0gHBRBFQBTBFAmB0QAmB0hUCCQgDADgeAyQgfAygYA9QgWA9APAjQAzBehoApQgtAVADAEQADAEAOAGIgBAAQgFAAgQgEg");
	this.shape_140.setTransform(10.5,-143.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#351212").ss(1,1,1).p("ABwkrQBCA5AbBeQAbBegQBdQgPBfg9A9QgQANgVAPQgVAPgHAUQgGAZANARQAIAMAQgBQAIgBALgEABqE3QgwAHgegaQgigfADg1QAFgnAIgFQAHgFgcghQgtgtg3gdQg3gdgig2QgghBAShBQAThBA7gsQA4gnA8gCQA7gCBBAU");
	this.shape_141.setTransform(-4.3,-87.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#351212").s().p("AAcEkQgiggADg0QAFgnAIgFQAHgFgcghQgtgtg3gdQg3gdgig2QgghBAShBQAThBA7gsQA4gnA8gCQA7gCBBAUIAIgHQBCA5AbBfQAbBegQBdQgPBfg9A9QgQANgVAPQgVAPgHATQgGAaANARQAIALAQgBQgLACgKAAQgiAAgXgUg");
	this.shape_142.setTransform(-4.3,-87.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#351212").ss(1,1,1).p("AhyEzQAsALAegZQAjgegBg2QgFgmgGgGQgHgFAcggQAsgqA0gbQA1gbAig1QAhg/gPhCQgOhCg2guQgzgpg4gFQg3gFg+ASAhekuQhBA2gdBdQgdBcALBeQALBgA2BAQAOAOAUAPQATAQAGAUQAEAZgMARQgJALgPgCQgIgBgKgE");
	this.shape_143.setTransform(-25.8,-87.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#351212").s().p("AhyEzQAPACAJgLQAMgRgEgZQgGgUgTgQQgUgPgOgOQg2hAgLhgQgLheAdhcQAdhdBBg2IAHAGQA+gRA3AFQA4AFAzApQA2AuAOBCQAPBCghA/QgiA1g1AbQg0AbgsAqQgcAgAHAFQAGAGAFAmQABA2gjAeQgVARgcAAQgMAAgNgDg");
	this.shape_144.setTransform(-25.8,-87.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#5E7244").s().p("AiFE9QgBgagPhpQgOhogkhyQgQgxAAgsQADhOAZgwQAZgwAHgHQANgDBEgGQBEgHBMAFQBPAFArAfQAWASABAaQABAUgDASQgDASAEAgQgtgDgfgIQgfgHghADQgnAZgrgDQgtgDgfgJQgtgFgtgjQADBSAXBHQAXBEALBDQgEBsABB2IgQgDg");
	this.shape_145.setTransform(-19.5,-10.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#4F6632").ss(1,1,1).p("AC1j2QgKhAhcgOQhZgOhaAIQhbAIgGADQgIACgkBOQgjBNAgB7QAnB9AOBtQAOBuAAAHQAEACBPAMQBOALBkgDQBmgEBLgtQgCgGgShmQgShngTh7QgTh8gEhJg");
	this.shape_146.setTransform(-15.5,-9.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#738E54").s().p("AheFGQhPgMgEgCQAAgHgOhuQgOhtgnh9Qggh7AjhNQAkhOAIgCQAGgDBbgIQBagIBZAOQBcAOAKBAQAEBJATB8QATB7ASBnIAUBsQhLAthmAEIguAAQhIAAg8gIg");
	this.shape_147.setTransform(-15.5,-9.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#A8846A").s().p("AhXIXQADgSAAguQAAhDgIhjQgJhkgWhnQgRhOAAhCQADhyAahLQAbhKARgUQAUgfAGgmQAFgmAAgNIArgXIBRgpIAzgZQABASAAAoQABAsgGAuIgCAKQhHAghJgsIACAtQABAWgNAXQg/BDgRBTQgaBzAOBzQAPB0ARByQARBygRBtIgGAAg");
	this.shape_148.setTransform(-23.8,63.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#A8846A").ss(1,1,1).p("Ai3k5QgeB0AgCoQAdCGAGByQAFBxgCAyQgFAagQA5QgSA4AAAzQAAAzA1AHQAEAAAqAFQAqAGAbAOQAWAPAjAFQAjAEAfgEQAggFAcgMQAcgLACgCQAAgCgPgVQgOgWgagKQgdgGgogNQgogNgVghQgPghgOgvQgOgvgEgTQgDg9gDiFQgDiFATilQATinA9ijQACgBALgZQAMgYAFgaQAHg3gBgyQgCgxAAgDIi5BdQABAEgFApQgFAqgVAhQgcAhgfB1g");
	this.shape_149.setTransform(-18.5,77.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C1A084").s().p("AArKjQgjgFgWgPQgbgOgqgGIgugFQg1gHAAgzQAAgzASg4QAQg5AFgaQACgygFhxQgGhygdiGQggioAeh0QAfh1AcghQAVghAFgqQAFgpgBgEIC5hdIACA0QABAygHA3QgFAagMAYIgNAaQg9CjgTCnQgTClADCFQADCFADA9IASBCQAOAvAPAhQAVAhAoANQAoANAdAGQAaAKAOAWQAPAVAAACIgeANQgcAMggAFQgPACgQAAQgRAAgSgCg");
	this.shape_150.setTransform(-18.5,77.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#A8846A").s().p("AiDF2QAIhhAHhsQAHhtABg9QAAgXgCgKQgBgIAAgKQABg7AZhXQAZhWAigiIACgDIgMg+IgNhFIAxgNIBZgVIA1gOIABAvQAAAggDAjIg/ALQgdAGgHAKQhpDGgaDbQgbDegKDbIgPACIALh/g");
	this.shape_151.setTransform(-11.2,64.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#4F6632").ss(1,1,1).p("AhvAOQAGgDAfghQAfgigNgXIgPAFIAUgZQABAEAZAbQAZAbAlAHQBRAAAOAeQACAYhJAvQhGAuh6gTg");
	this.shape_152.setTransform(-0.3,135.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#738E54").s().p("AiDBeIAUhQQAGgDAfghQAfgigNgXIgPAFIAUgZQABAEAZAbQAZAbAlAHQBRAAAOAeQACAYhJAvQgzAhhKAAQggAAgjgGg");
	this.shape_153.setTransform(-0.3,135.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#A8846A").ss(1,1,1).p("AiKF7QABgIAKh3QAKh3AIiBQAJh+gFgmQgGg0AbhiQAbhjAmgoIgaiFIDJgyQACAHAABDQgBBCgRApQgLAUgcBnQgcBnghCIQghCFgXB3QgZB2gEA0IgCAnQACAFAfAyQAeAyAjAfQAkAaAaAKQAbAKABgBIgUBLQgDABgzADQgyADg6gEQg8gEgfgTQgagXACg3QABg4ALgwQAKgxACgD");
	this.shape_154.setTransform(-12.2,77.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C1A084").s().p("AgpJ3Qg8gEgfgTQgagXACg3QABg4ALgwIAMg0IgGAFIALh/QAKh3AIiBQAJh+gFgmQgGg0AbhiQAbhjAmgoIgaiFIDJgyQACAHAABDQgBBCgRApQgLAUgcBnQgcBnghCIQghCFgXB3QgZB2gEA0IgCAnQACAFAfAyQAeAyAjAfQAkAaAaAKQAbAKABgBIgUBLIg2AEIgxABQgbAAgggCg");
	this.shape_155.setTransform(-12.2,77.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#604F40").s().p("AgKgRQAbgTAVAPQAUAQABAEQgFgGgogKQgSADgaASIgcAZQgEgBA0gtg");
	this.shape_156.setTransform(-18.1,-159.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#604F40").s().p("AAbAAQgTgSgzAPQADgEAdgKQAbgLAUAbIAIAWQgEgHgNgOg");
	this.shape_157.setTransform(8,-157.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#604F40").s().p("AgJgRQAcgSAUARQATARACABQgFgEgogLQgSABgaASQgbAUgDADQgDAAA1gsg");
	this.shape_158.setTransform(-17.7,-159.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#604F40").s().p("AAcACQgNgXg0ABQADgDAfgCQAcgDAMAeIABAZQgCgIgIgRg");
	this.shape_159.setTransform(9.6,-158.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#604F40").s().p("AgJgRQAcgRAUAQQATARACACQgFgFgogLQgSABgaASQgbAUgDADQgDAAA1gsg");
	this.shape_160.setTransform(-17.6,-159.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#604F40").s().p("AAbAAQgRgUgzALQACgDAdgIQAcgJASAdIAGAXQgDgHgMgQg");
	this.shape_161.setTransform(8.5,-156.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#604F40").s().p("AAAgKQAiAAADADQAKgEACgEQgDAIgCABQALgDAEgFQgIAOgGAAQgtgSgeASQgUAKgIAGQAdgaAdAAg");
	this.shape_162.setTransform(6.8,-149.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#604F40").s().p("AAwAJQgXgMhCABIgLgFQgLgGgDgGIAJAGQAIAGAIADQgDgBgDgKQABAEAIAGQAEgCAoADQAmADAWAVIgSgLg");
	this.shape_163.setTransform(-17.8,-152);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#A8846A").ss(0.5,1,1).p("ABBAGQACgCgYgLQgYgMhJACIgKACQgBABADAKQADAJAPAHQAaALAngIQAtgIgBgBg");
	this.shape_164.setTransform(-17.2,-150.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgsAMQgPgHgDgJIgCgLIAKgCQBJgCAYAMQAYALgCACQABABgtAIQgQADgNAAQgVAAgPgGg");
	this.shape_165.setTransform(-17.2,-150.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#A8846A").ss(0.5,1,1).p("Ag0gFQgBgCAZgGQAZgHA5AOQAAACgHAIQgGAKgLACQgeACg0gXg");
	this.shape_166.setTransform(6.2,-147.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("Ag0gFQgBgCAZgGQAZgHA5AOIgHAKQgGAKgLACIgFAAQgbAAgygVg");
	this.shape_167.setTransform(6.2,-147.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},22).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_157},{t:this.shape_156},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_159},{t:this.shape_158},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_167},{t:this.shape_166},{t:this.shape_112},{t:this.shape_165},{t:this.shape_164},{t:this.shape_109},{t:this.shape_102},{t:this.shape_101},{t:this.shape_163},{t:this.shape_99},{t:this.shape_162},{t:this.shape_97},{t:this.shape_96},{t:this.shape_161},{t:this.shape_160},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_112},{t:this.shape_109},{t:this.shape_102},{t:this.shape_101},{t:this.shape_99},{t:this.shape_97},{t:this.shape_96},{t:this.shape_161},{t:this.shape_160},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_167},{t:this.shape_166},{t:this.shape_112},{t:this.shape_165},{t:this.shape_164},{t:this.shape_109},{t:this.shape_102},{t:this.shape_101},{t:this.shape_163},{t:this.shape_99},{t:this.shape_162},{t:this.shape_97},{t:this.shape_96},{t:this.shape_161},{t:this.shape_160},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_159},{t:this.shape_158},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_161},{t:this.shape_160},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},31).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_167},{t:this.shape_166},{t:this.shape_112},{t:this.shape_165},{t:this.shape_164},{t:this.shape_109},{t:this.shape_102},{t:this.shape_101},{t:this.shape_163},{t:this.shape_99},{t:this.shape_162},{t:this.shape_97},{t:this.shape_96},{t:this.shape_161},{t:this.shape_160},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_112},{t:this.shape_109},{t:this.shape_102},{t:this.shape_101},{t:this.shape_99},{t:this.shape_97},{t:this.shape_96},{t:this.shape_161},{t:this.shape_160},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_167},{t:this.shape_166},{t:this.shape_112},{t:this.shape_165},{t:this.shape_164},{t:this.shape_109},{t:this.shape_102},{t:this.shape_101},{t:this.shape_163},{t:this.shape_99},{t:this.shape_162},{t:this.shape_97},{t:this.shape_96},{t:this.shape_161},{t:this.shape_160},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_161},{t:this.shape_160},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},2).wait(39));

	// Layer 1
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.498)").s().p("AgJAAQABgEAIgBQAJABABAEQgBAFgJABQgIgBgBgFg");
	this.shape_168.setTransform(6.2,-150.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.498)").s().p("AgLgOIAXARQAAAEgPAIg");
	this.shape_169.setTransform(8.4,-147.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#663300").ss(0.3,1,1).p("AAZAAQgCAXgXACQgVgCgDgXQADgWAVgCQAXADACAVg");
	this.shape_170.setTransform(7,-149.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgYAAQADgWAVgCQAXADACAVQgCAXgXACQgVgCgDgXg");
	this.shape_171.setTransform(7,-149.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(0.3,1,1).p("AAkAAQgDAhghAEQgggEgDghQADggAggDQAhADADAgg");
	this.shape_172.setTransform(7,-149.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#663300").s().p("AgjAAQADggAggDQAhADADAgQgDAhghAEQgggEgDghg");
	this.shape_173.setTransform(7,-149.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#A8846A").ss(1,1,1).p("AAAgJQADACgDAR");
	this.shape_174.setTransform(38.8,-22.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#A8846A").ss(1,1,1).p("AAJgSQgCABgHALQgIAJABAQ");
	this.shape_175.setTransform(42.1,-21.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#A8846A").ss(1,1,1).p("AACgFQAFgBgKAM");
	this.shape_176.setTransform(51,-14.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#A8846A").ss(1,1,1).p("AAlgRQAAACgLALQgKAJgKADQgJACgQAEQgQAEgBAA");
	this.shape_177.setTransform(48.2,-16.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#A8846A").ss(1,1,1).p("AAegaQgCAEgWAYQgTAbgQgC");
	this.shape_178.setTransform(45.4,-21.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#A8846A").ss(1,1,1).p("ABeACQgHAUgCACQgDAJAIAEQAJAEAEAGQAFASgVAEQgHgCgGgEQgEgBgFAEQgKAEgTACQgTACABgQQgRACgNgGQgIgLAGgQQgBgRgMgBQgMAAgGgMQgTARgbgHQgQgFAFgLQACgEABgGQADgNAKgTQAJgUARAIQATANAEAFQAEAGALAAQAOgDASgRQAVgRANAGQALAKgDAOQgDAOgBABQADgCAUgEQAVgEAGAMQADAOgHARg");
	this.shape_179.setTransform(43.5,-20.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#C1A084").s().p("AASA6QgRACgNgGQgIgLAGgQQgBgRgMgBQgMAAgGgMQgTARgbgHQgQgFAFgLIADgKQADgNAKgTQAJgUARAIQATANAEAFQAEAGALAAQAOgDASgRQAVgRANAGQALAKgDAOIgEAPQADgCAUgEQAVgEAGAMQADAOgHARIgJAWQgDAJAIAEQAJAEAEAGQAFASgVAEQgHgCgGgEQgEgBgFAEQgKAEgTACIgEABQgPAAABgPg");
	this.shape_180.setTransform(43.5,-20.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#A8846A").ss(1,1,1).p("AgngRQABgBAPgBQAOgBAKAHQAMAJANAKQANANABAB");
	this.shape_181.setTransform(-44.6,-19.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#A8846A").ss(1,1,1).p("AgjgFQAGgFAbgBQAJAEAOAIQAOAKABAB");
	this.shape_182.setTransform(-49.6,-17.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#A8846A").ss(1,1,1).p("ABJAQQABACABACQgDAKgMABQgUgBgRgJQATAWgVANQgXgBgYgKQgQADgRAIQgkAAgRgfQgDgIAEgJQAGgVASgPQAUgSAXgJQAMAAAKAGQAPAGANACQAOgBAPgBQARgDAQACQALAHAGAMQAIAMAKANQAKAEABAJQgGAIgMACQgNAAgKgHQgEgDgEgE");
	this.shape_183.setTransform(-48.8,-19.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#C1A084").s().p("AgaAtQgQADgRAIQgkAAgRgfQgDgIAEgJQAGgVASgPQAUgSAXgJQAMAAAKAGQAPAGANACIAdgCQARgDAQACQALAHAGAMIASAZQAKAEABAJQgGAIgMACQgNAAgKgHIgIgHIAIAHIACAEQgDAKgMABQgUgBgRgJQATAWgVANQgXgBgYgKg");
	this.shape_184.setTransform(-48.8,-19.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#277489").ss(1,1,1).p("ABLAAQgFA8g8AGIgSAAQg9gGgFg8QAFg7A9gGIASAAQA8AGAFA7g");
	this.shape_185.setTransform(24,-30.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5DCBE8").s().p("AgIBCQg9gGgFg8QAFg7A9gFIASAAQA8AFAFA7QgFA8g8AGg");
	this.shape_186.setTransform(24,-30.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#277489").ss(1,1,1).p("AC6gpQgLA5g8AEIgWAAQg8gFgLg5IjGAAQgoAEgEAmQAEAnAoAEIFhAAQAogEAEgnQgDgggggJg");
	this.shape_187.setTransform(13.6,-24.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#5DCBE8").s().p("AiwArQgogEgEgnQAEgmAogEIDGAAQALA5A8AFIAWAAQA8gEALg5QAgAJADAgQgEAngoAEg");
	this.shape_188.setTransform(13.6,-24.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#277489").ss(1,1,1).p("ACxA1QAogEAEgoQgEglgogEIi5AAIAAgUIibAAIAAAUIgNAAQgoAEgEAlQAEAoAoAEg");
	this.shape_189.setTransform(13.6,-25.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#3193AD").s().p("AiwA1QgogEgEgoQAEglAogEIANAAIAAgUICbAAIAAAUIC5AAQAoAEAEAlQgEAogoAEg");
	this.shape_190.setTransform(13.6,-25.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EA5B57").s().p("AA9ANQgTgbg9gFIg4AAIAKgUIBJAAQAEgEAcALQAcAKAJA/QgDgIgNgUg");
	this.shape_191.setTransform(51.3,-6.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EA5B57").s().p("AnQgIIOhAAIgJARg");
	this.shape_192.setTransform(-7.4,-9.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#470E06").ss(1,1,1).p("AAuh6IAABdIhbAAIAACY");
	this.shape_193.setTransform(-34.4,93.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#470E06").ss(1,1,1).p("Agth6IAABdIBbAAIAACY");
	this.shape_194.setTransform(30.8,93.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A82B1B").s().p("AnPAUIAAgnIOfAAIAAAng");
	this.shape_195.setTransform(-4,-16);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#7E7F7F").s().p("AGgFKIAAo+QgGgzg8gFIsYAAQgJAAgJACQANgoAzgDIMYAAQA8AFAFAzIAAI+QgDAogsANQACgGAAgGg");
	this.shape_196.setTransform(-4.3,43);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#B7B7B7").s().p("AmLFQQg1gFgFgsIAAo+QAFgsA1gEIADAAIAAIxQAFAsA1AEIMUAAIAAANQgFAsg0AFg");
	this.shape_197.setTransform(-4.4,43.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9E9E9E").s().p("AmMFXQg7gEgGgzIAAo+QAGg0A7gEIMYAAQA9AEAFA0IAAI+QgFAzg9AEg");
	this.shape_198.setTransform(-4.4,43.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#871512").ss(1,1,1).p("AHwkzIAAJnQgGA3hBAFItRAAQhBgFgGg3IAApnQAGg3BBgFINRAAQBBAFAGA3g");
	this.shape_199.setTransform(-4.4,43.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#BCBCBC").s().p("AmoFwQhAgFgHg3IAApnQAHg3BAgFINRAAQBBAFAFA3IAAJnQgFA3hBAFg");
	this.shape_200.setTransform(-4.4,43.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#470E06").ss(1,1,1).p("AIlC/QgHAhhHAEIutAAQhHgEgHghIAAl9QAHgiBHgDIOtAAQBHADAHAig");
	this.shape_201.setTransform(-4.4,43.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#7F1804").s().p("AnVDjQhIgCgHgjIAAl7QAHgjBIgCIOrAAQBIACAGAjIAAF7QgGAjhIACg");
	this.shape_202.setTransform(-4.4,43.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#A82B1B").s().p("AoqIsQhGgHgGhHIAAu7QAGhIBGgGIRVAAQBGAHAGBHIAAO7QgGBHhGAHg");
	this.shape_203.setTransform(-4.4,45.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#871512").ss(1,1,1).p("AKenvIAAPeQgIBZhXAIIx9AAQhXgIgIhZIAAveQAIhYBXgIIR9AAQBXAIAIBYg");
	this.shape_204.setTransform(-4.4,45.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C43A30").s().p("Ao+JQQhXgIgIhZIAAveQAIhYBXgIIR9AAQBXAIAIBYIAAPeQgIBZhXAIg");
	this.shape_205.setTransform(-4.4,45.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(1,1,1).p("ABNmkIiZAAIAAHkQgIBEg6BSQg7BRiUAhIAABcIK7AAIAAhcQiUghg7hRQg6hSgIhEg");
	this.shape_206.setTransform(-4.4,148.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#334D90").s().p("AldGlIAAhdQCUghA7hRQA6hSAIhEIAAnkICZAAIAAHkQAIBEA6BSQA7BRCUAhIAABdg");
	this.shape_207.setTransform(-4.4,148.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#470E06").ss(1,1,1).p("ACOmVIAAMrIkbAAIAAsrg");
	this.shape_208.setTransform(-4.4,147.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#7F1804").s().p("AiNGWIAAsrIEbAAIAAMrg");
	this.shape_209.setTransform(-4.4,147.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("Al0QqIAAiHIATgEQCFgcA4hJIAApmImaAAQgygCgigiQghghgCg0IAAveQACgzAhghQAigiAygBIBbAAIAAguIPKAAIAAAuIBYAAQAyABAhAiQAiAhABAzIAAPeQgBAzgiAjQghAhgyACImaAAIAAJmQA4BJCFAcIATAEIAACHg");
	this.shape_210.setTransform(-4.4,86.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AifApIAAhSIE/AAIAABSg");
	this.shape_211.setTransform(-30.9,-19.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#D3B63C").s().p("Ag1AeQgdgDgCgbQACgbAdgCIBrAAQAdACACAbQgCAbgdADg");
	this.shape_212.setTransform(-31.6,-23.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(1,1,1).p("AB2AAQgEApgqAEIiPAAQgqgEgEgpQAEgpAqgEICPAAQAqAEAEApg");
	this.shape_213.setTransform(-31.3,-24.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F2D651").s().p("AhHAuQgqgFgEgpQAEgoAqgEICPAAQAqAEAEAoQgEApgqAFg");
	this.shape_214.setTransform(-31.3,-24.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#4F6632").ss(0.5,1,1).p("AgJAGQAIAJAHgFQAJgIgFgHQgIgJgHAFQgJAHAFAIg");
	this.shape_215.setTransform(41,-27.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgJAGQgEgHAIgHQAHgFAIAIQAEAHgIAHQgEACgCAAQgEAAgFgFg");
	this.shape_216.setTransform(41,-27.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#738E54").s().p("Agqg+QAHgDAHgBQAdgDAdAZIAHAmIAGAjQgBAOgoAWIgGACQANhIgzg5g");
	this.shape_217.setTransform(40.5,-26.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#829369").ss(1,1,1).p("ABAgwIAOBNQABAGghAbQghAbhQghIgLhJQACgJApghQAnghA8Asg");
	this.shape_218.setTransform(37.6,-26);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A8BC8F").s().p("AhDA4IgLhJQACgJApghQAnghA8AsIAOBNQABAGghAbQgOAMgZAAQgcAAgugSg");
	this.shape_219.setTransform(37.6,-26);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#4F6632").ss(1,1,1).p("AgEATQABAAAFgIQAGgJgGgU");
	this.shape_220.setTransform(40.8,-35.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#5E7244").s().p("AgDDeIgWgTQgUgRgLgRQgRgkALgzQABgVgXhFQgYhHgZhCIgbhHIAOgRQA6BPAdBHQAeBHAZBXQAngfASALQARALAZAtQAIAIAXAEQAWADAMAWQAJAvgmAWQgjARglAAQgfAAgfgMg");
	this.shape_221.setTransform(30.7,-43.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#4F6632").ss(1,1,1).p("AiiikQACAFAZBCQAZBCAYBFQAXBHgBAUQgLAzARAkQALASAUARQAUARACACQAFAEA4AGQA4AFAlgnQAagugWg3QgWg4gNgTQgJgQgrhJQgqhKgshXQghg9gUgv");
	this.shape_222.setTransform(31.7,-48.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#738E54").s().p("AA4EcQg4gGgFgEIgWgTQgUgRgLgSQgRgkALgzQABgUgXhHQgYhFgZhCIgbhHIBZh4QAUAvAhA9QAsBXAqBKIA0BZQANATAWA4QAWA3gaAuQggAjgvAAIgOgBg");
	this.shape_223.setTransform(31.7,-48.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#4F6632").ss(0.5,1,1).p("AAKACQgDAJgIgBQgKgDABgIQADgKAJABQAJADgBAJg");
	this.shape_224.setTransform(-58.6,-24.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAAAKQgLgCACgJQACgKAJABQAJADgBAJQgCAJgIAAIAAgBg");
	this.shape_225.setTransform(-58.6,-24.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#738E54").s().p("AgTAwIgIgkIgHghQAQghAbgIIAOgCQgZBDAlA9IgHABQgpgGgGgLg");
	this.shape_226.setTransform(-58.3,-23.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#829369").ss(1,1,1).p("AhLgWIAPBIQACAHAmAMQAkAMA9g7IgRhDQgEgHgwgPQgugOglA7g");
	this.shape_227.setTransform(-54.6,-23.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#A8BC8F").s().p("AgVBFQglgMgCgHIgQhIQAlg7AvAOQAvAPAFAHIAQBDQgyAxghAAQgHAAgHgCg");
	this.shape_228.setTransform(-54.6,-23.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#5E7244").s().p("AhSDhQgTgTAAhGQABhHARhWQAaiHA5hWQAAAMgfBLQggBMgOA7QgKAwABA2QgBAqAOAGQAQAGAagTQAOgJARgIQgKAJgDARIgDALIAKgGQAfgSAeAJQAeAKARAhIgBAFQgCALgEAGQgcAphDANQgMACgMAAQgkAAgWgSg");
	this.shape_229.setTransform(-56.5,-45.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#4F6632").ss(1,1,1).p("ABHh/IAFBmQAEAJATBQQASBSgTAuQgbAng8AOQg5APgogdQgYgZAEhcQAEhcAbhnQAchpAvg/");
	this.shape_230.setTransform(-56.4,-45.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#738E54").s().p("AhWDnQgYgZAEhcQAEhcAbhnQAchpAvg/IBHB6IAFBmQAEAJATBQQASBSgTAuQgbAng8AOQgSAFgRAAQgkAAgagTg");
	this.shape_231.setTransform(-56.4,-45.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#4F6632").ss(1,1,1).p("AgVA4QAqgiAAgJQABgBgCgTQgCgVgWgb");
	this.shape_232.setTransform(-49.5,-63.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#A8846A").ss(1,1,1).p("AAPgjQgGACgRAZQgTAYAmAU");
	this.shape_233.setTransform(-31,129.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#C1A084").s().p("AgIgIQARgZAGgCIgEBHQgmgUATgYg");
	this.shape_234.setTransform(-31,129.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#9D66AF").s().p("AgaARQADgBARgJQAOgIgJgPIAcAAQgBACgPAPQgNAQgVAAIgDAAg");
	this.shape_235.setTransform(7.7,136.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#9D66AF").s().p("AhRAKIAoACQAmABAkgFQAmgGAGgUQABABAEAJQADAIgNAFQgQAFgpAHQgOACgNAAQgfAAgmgJg");
	this.shape_236.setTransform(-5.8,141.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#4F6632").ss(1,1,1).p("ADhAkQgDAGhEAaQhEAZhlgYQgSgHgNgLQgOgLgggEQgNgBgSAEQgSAFAHAUQgXgDgXgIQgJgkgcgWQgSgnAYgkQgDAFAHAgQAIAhA9AJQA/AEATAHQAQAFACACQgBgGARggQARgjA3gKQACABAZAMQAaAMAZAIQAnAJAgAPQAfANgFAgg");
	this.shape_237.setTransform(-16.1,139.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#738E54").s().p("AgPBFQgSgHgNgKQgOgMgggEQgNgBgSAEQgSAFAHAUQgXgDgXgIQgJgkgcgWQgSgnAYgkQgDAFAHAgQAIAhA9AKQA/ADATAHQAQAFACACQgBgFARghQARgiA3gLIAbANQAaAMAZAIQAnAJAgAPQAfANgFAgQgDAGhEAaQgjANgsAAQgqAAgwgMg");
	this.shape_238.setTransform(-16.1,139.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#4F6632").ss(1,1,1).p("AgMgEQABAGAYAD");
	this.shape_239.setTransform(-49.7,-61.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#829369").ss(1,1,1).p("AAUAAQgCASgSACQgRgCgCgSQACgRARgCQASACACARg");
	this.shape_240.setTransform(-7.4,-91.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#A8BC8F").s().p("AgSAAQABgRARgBQASABABARQgBASgSABQgRgBgBgSg");
	this.shape_241.setTransform(-7.4,-91.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#829369").ss(1,1,1).p("AATAAQgBASgSACQgRgCgCgSQACgRARgCQASACABARg");
	this.shape_242.setTransform(-8.7,-99.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#A8BC8F").s().p("AgTAAQACgRARgBQASABACARQgCASgSABQgRgBgCgSg");
	this.shape_243.setTransform(-8.7,-99.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#843C3C").s().p("AARAwQgFgZgKgFQgIAAgGASIgFAQQAIglgHgdIgFgWIACAGQAGASALAFQAHgCgBgeQgBgegBgFQARArACAxQACA0gBAFIgFgbg");
	this.shape_244.setTransform(23,-159.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#843C3C").s().p("AgFARQgWgcgVAcQgDABgLABQgKAAARgTQATgSACgTIABACQAIAbAUgKQAPgPgBgFQgCgFANAFQAMAHgGARQgFAOAMAHQAQAGALABQAEAAADgDIgDAIQgHAXgpgCIgCABQgFAAgOgYg");
	this.shape_245.setTransform(-52.4,-96.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#843C3C").s().p("AgcByQAFgTAhgfQAlgfgNgPQgOgPg6ASQh1ApARgiIARgeQAIgOgSAGQgXAGgZgMQgZgKADgIQADgHAWgjQAWgiA/gYQgFADgXAXQgYAYAIARQATANAugKQAugLAGgCQgEACgPAPQgOARAXAGQAaADAPgMQASgLAkAHQAiAMAKAWQAKAUAWAHQAZAGAPgHQAOgIADgnQADAFgBAmQgBAngsANQgzAGg5AOQg3APgZApQgCAAAFgUg");
	this.shape_246.setTransform(-23.4,-169.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#351212").s().p("Ag+BfQgfgnASgvQAngzA1gQQA4gRAEg8QADACACAZQACAYggAXQgcANgnAWQgqAVgNAlQgNAnA6BBQgGgCgfgng");
	this.shape_247.setTransform(-42.8,-113.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#351212").s().p("AADC4QAegpAVgnQALgkgcgdQgdgdg0hGQgthSAYhAQAYhBAHgDQgDAEgOA1QgOA2AMA6QAeBKA0AtQA3AvgLApQgVAogUAUQgUATgCAiQABAlAJANIAIAKQg1gzAcgog");
	this.shape_248.setTransform(-31.8,-133.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#843C3C").s().p("AlDC/QgCgUAAgUQACiaBkhwQBAhDBqgdQBogdBjAWQA9APA3AyQA4AxAEBEIgBAMIgHgDIABgGQgCgmgXgeQgXgdgcgUQiOhmi3BEIgWAIQg9ASgxAuQg7A9gaBVQgTA+gCBMQAAAeAFAbQgGgVgCgRg");
	this.shape_249.setTransform(-17.1,-168.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#351212").ss(1,1,1).p("AE9lWQgYgBgQAXQABgTgGgYQgFgZgTgJQgwgKgBA3QgBA3gLAcQgVAYglAGQglAHgdAEQhjAWgGA3QgGA2AjBEQAhBDAXBAQAXBBgsArQglAfgHAWQgHAVAlAkQAjAjgOAYQgOAYg2gHQAlgGgKgXQgLgXgXgNQghgShAgSQg/gRgfAdQgSAeAUAoQAVAngQAgQgVAXgagEQgbgDgMAFQgWAUAFAVQAEAUAfgSQgoAdgagUQgbgTAPguQAOgfAKgMQAKgLgCggQgFghgLgXQgLgXATglQAggpAygaQAygZASg0QAGgxgjg4Qgjg3gKg0QgPiyB0iGQBFhHBqgcQBrgbBhAWQBEARA6A4QA6A4gHBN");
	this.shape_250.setTransform(-22.3,-138.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#5E2A2A").s().p("AlsIJQgbgTAPguQAOgfAKgMQAKgLgCggQgFghgLgXQgLgXATglQAggpAygaQAygZASg0QAGgxgjg4Qgjg3gKg0QgPiyB0iGQBFhHBqgcQBrgbBhAWQBEARA6A4QA6A4gHBNIhAgeQgYgBgQAXQABgTgGgYQgFgZgTgJQgwgKgBA3QgBA3gLAcQgVAYglAGIhCALQhjAWgGA3QgGA2AjBEQAhBDAXBAQAXBBgsArQglAfgHAWQgHAVAlAkQAjAjgOAYQgOAYg2gHQAlgGgKgXQgLgXgXgNQghgShAgSQg/gRgfAdQgSAeAUAoQAVAngQAgQgVAXgagEQgbgDgMAFQgWAUAFAVQAEAUAfgSQgXARgTAAQgNAAgLgIg");
	this.shape_251.setTransform(-22.3,-138.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#351212").s().p("AAAARQAEgDgBgMQgIgPgFgEQAIAAADAFQANAUgEAKg");
	this.shape_252.setTransform(-0.1,-174.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#351212").s().p("AADAkQAEgkgHgSQgHgQgCgBQAOAIADAbQADAbgBAJg");
	this.shape_253.setTransform(1.9,-174.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#932121").s().p("AgSgDQgMAAgNADQgMABgIgFIAMAAQAWgJASAGQAMANAMgBQAMgFAIAAQAMAGATgFQgDAFgTAAIghAEQgLgIgQgFg");
	this.shape_254.setTransform(-5.6,-130.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgKAFQgWgJgCgDQAiAOASgFIARgDQgRAJgPAAQgGAAgHgDg");
	this.shape_255.setTransform(-5.4,-128.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#491D1D").s().p("AAPAeQgRgNgigHQgBgEAEgYQAFgaAZABQAeAJAHAiQAGAhgFAMQgBgCgTgNg");
	this.shape_256.setTransform(1.4,-174.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#AF8D74").s().p("AgCAHQgPgEABgEQABgGACAAQACAFAbgCQABABgDAGQgBAFgJAAIgGgBg");
	this.shape_257.setTransform(-6.2,-125.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#A8846A").s().p("AAKASIgXgSQgRgPAdgPQANgEADAIQADAJgBACIADAwg");
	this.shape_258.setTransform(-35.8,-151.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B74141").s().p("AAhALQgIAAgHAEQgQACgIgKQgQgIgSADQgQAFgJgJQARACARgGQANgLAPAEIAPAHQADgDASAAQALAGAJAIQAEAFAJgCQgHAHgJAAQgIAAgJgEg");
	this.shape_259.setTransform(-5.8,-131.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#B74141").ss(0.3,1,1).p("AAlAVQgQAKgUgCQgcgDgQgRQgPgJgJgQQAHABAHAAQAMgBALgGQAOgKAMAFQAKAGAEABQADgDASAAQAKADAHAKQAHAJAMgEQgDADgCACQgEADgEACQgIAJgJAHg");
	this.shape_260.setTransform(-5.6,-130);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#EA7875").s().p("AABAdQgcgDgQgRQgPgJgIgQQAGABAHAAQANgBALgGQANgKAMAFIAOAHQADgDATAAQAKADAGAKQAHAJANgEIgGAFIgIAFQgHAJgKAHQgNAJgQAAIgHgBg");
	this.shape_261.setTransform(-5.6,-130);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#604F40").s().p("AAbgKQgSgHgfAGIgkAJQgDgDBCgRQAigEALAYQALAVgBAEQgBgIgggZg");
	this.shape_262.setTransform(-16.3,-160.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#604F40").s().p("AgVgFQAVgVAcAQIARARQgGgEgSgGQgXgMgqAhQAAgEAXgTg");
	this.shape_263.setTransform(8.6,-158.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#A8846A").s().p("AgDgEQAQgEAEgEQgKAOgKgBQgGAIAAAEQgQgQAWgBg");
	this.shape_264.setTransform(-1.3,-137.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#93735D").s().p("AgIAbIAMgGQAIgEAAgFQAAgFgBgCQgLgFgGgQIgKgXIAMAUQAJASAJACIABABIAAABQAHALgOANIgNAGQgIAEgBACQgCgEAIgIg");
	this.shape_265.setTransform(-0.8,-140.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#604F40").s().p("AAAgNQAmgDADADQALgFADgFQgDAJgDACQANgFADgGQgHAQgHACQgzgRgiAXQgWAQgIAHQAeghAigEg");
	this.shape_266.setTransform(7.8,-152.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#A8846A").s().p("AAOgbQAqANADAIQg8gNgeAWQgWATgFAIQAihFAmAMg");
	this.shape_267.setTransform(6.9,-152.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#604F40").s().p("AA5AQQgcgXhOACIgNgKQgLgKgEgKIAKALQAKALAJAFQgEgDgDgRQACAHAIAKQAGgDAuAGQAtAEAaAoQgHgHgOgNg");
	this.shape_268.setTransform(-19,-155.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#A8846A").ss(1,1,1).p("AAAAUIABgn");
	this.shape_269.setTransform(-17.8,-120.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#A8846A").s().p("AArAJQgbgahRADQAGgJAzgMQAwgLAaBTQgFgIgSgUg");
	this.shape_270.setTransform(-17.4,-154.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(255,255,255,0.498)").s().p("AgJAAQABgEAIgBQAJABABAEQgBAFgJABQgIgBgBgFg");
	this.shape_271.setTransform(-18.3,-153.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(255,255,255,0.498)").s().p("AgLgOIAWASQAAADgPAIg");
	this.shape_272.setTransform(-16,-150);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#663300").ss(0.3,1,1).p("AAZAAQgCAXgXACQgVgCgDgXQADgWAVgCQAXADACAVg");
	this.shape_273.setTransform(-17.4,-151.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgYAAQADgWAVgCQAXACACAWQgCAWgXADQgVgDgDgWg");
	this.shape_274.setTransform(-17.4,-151.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(0.3,1,1).p("AAkAAQgDAhghAEQgfgEgEghQAEggAfgDQAhADADAgg");
	this.shape_275.setTransform(-17.4,-151.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#663300").s().p("AgjAAQAEggAfgEQAhAEADAgQgDAhghADQgfgDgEghg");
	this.shape_276.setTransform(-17.4,-151.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgkgOQACgBAZAEQAXADAXAX");
	this.shape_277.setTransform(-16.1,-155.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#A8846A").ss(0.5,1,1).p("ABBAPQACgFgYgcQgYgehJAHIgKADQgBADADAYQADAXAPAQQAaAaAngRQAtgTgBgDg");
	this.shape_278.setTransform(-17.2,-152.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgsAcQgPgQgDgXIgCgbIAKgDQBJgHAYAeQAYAcgCAFQABADgtATQgQAHgMAAQgWAAgPgQg");
	this.shape_279.setTransform(-17.2,-152.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#A8846A").s().p("AguAfQgPgSgDgZQgDgaAAgDIALgEQBMgHAZAgQAZAfgCAFQABAEgvAUQgRAHgNAAQgWAAgQgQg");
	this.shape_280.setTransform(-17.5,-151.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#A8846A").ss(0.5,1,1).p("Ag7AIQgBgFAbgaQAagbBDAOQAAADgGAfQgFAcgMAMQghAQg/gug");
	this.shape_281.setTransform(6.6,-149.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("Ag7AIQgBgFAbgaQAagbBDAOIgGAiQgFAcgMAMQgJAEgKAAQgdAAgwgig");
	this.shape_282.setTransform(6.6,-149.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#A8846A").s().p("AgDAqQgdgJgfgYQgBgGAcgcQAdgeBHAPIgGAlQgGAfgNANQgIAFgLAAQgLAAgMgEg");
	this.shape_283.setTransform(7,-149.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#AF8D74").s().p("ABjEyQhRgfgxg8Qgyg+gYgzQgYg0AAgEIgBgEIgEAAQhFgEgFgkQgRg8AigVQAXgNAXAdIAIgGQgHgFALgbQALgbBAhBIABAAQAsgsBAgiQBCghBAgBQASABAPADQhkAChRA6QgeAYgfAxQghAvADApIAKAcQABAOAHAPIAIAUQABADABAPQgCADgFAmQgFAmARBKQAKAhAoAvQApAuAjAMIgCAAg");
	this.shape_284.setTransform(-18.9,-149.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#A8846A").ss(1,1,1).p("AB4k1QhHgHhCAjQhDAkgxAwQgTARglAsQgkArAMAbQgjgngbAcQgbAdARAzQAIApBHADQAAAEAYA0QAXA0A0A+QAzA+BRAfQAlAGA7gpQA8gqAZgiQAkg5AHhDQASg3AVgzQARhbgvhUQgvhVhbgSg");
	this.shape_285.setTransform(-11.6,-149.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#C1A084").s().p("AAZE2QhRgfgzg+Qg0g+gXg0QgYg0AAgEQhHgDgIgpQgRgzAbgdQAbgcAjAnQgMgbAkgrQAlgsATgRQAxgwBDgkQBCgjBHAHQBbASAvBVQAvBUgRBbQgVAzgSA3QgHBDgkA5QgZAig8AqQg0AkgjAAIgJgBg");
	this.shape_286.setTransform(-11.6,-149.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#4F6632").ss(1,1,1).p("AgmgFQAHgHBGAT");
	this.shape_287.setTransform(-9.8,-73.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#4F6632").ss(1,1,1).p("AhCAJQADgCArgHQAogIAvAA");
	this.shape_288.setTransform(-14.5,-74.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#4F6632").ss(1,1,1).p("AgDAYQAGgCABgt");
	this.shape_289.setTransform(-34.7,-94.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#4F6632").ss(1,1,1).p("AAIAsQgBgCgHgTQgFgSgBgMQAGgeADgF");
	this.shape_290.setTransform(8.4,-92.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#738E54").s().p("AAHgNQAHgWgDgFQAKAIAFAYQAFAYgBAEQgggBgcAWQAWgaAPgcg");
	this.shape_291.setTransform(-6,-115.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#738E54").s().p("AAIAWQgfgVgUAiQgBgSAGgaQAGgbARgHIAWgIIgCAkQAWAhARAiQgPgTgVgLg");
	this.shape_292.setTransform(-18.4,-116.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#829369").ss(1,1,1).p("AA+BTQACADAAgBAA+BTQgGgGgUgRQgagWgYgFQgsgBgFAEQAEgGAbggQAcglAJgRQAKgbgGgBQABgCAKAPQALAPAJA4QAIA1AIARQAEAJACAEg");
	this.shape_293.setTransform(-6.1,-111.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#A8BC8F").s().p("AAlA9QgagWgYgFQgsgBgFAEIAfgmQAcglAJgRQAKgbgGgBQABgCAKAPQALAPAJA3QAIA2AIARIAGANIgagXg");
	this.shape_294.setTransform(-6.2,-111.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#829369").ss(1,1,1).p("AAKhjIgCAkQAHgDA2ByIgxgKQAFgIgtAdQgtAjgDAGQABgJAMg1QALg1AHgZQADgTACgOQACgOARgFg");
	this.shape_295.setTransform(-18.7,-111.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#A8BC8F").s().p("Ag4AmIAThOIAFghQACgOARgFIAXgHIgCAkQAGgDA3ByIgxgKQAFgIgtAdQgtAjgDAGIAMg+g");
	this.shape_296.setTransform(-18.7,-111.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#A8846A").s().p("Ag9gFIADgkIBxAGQAAAEADAfQAEAggBAJIAAABQg/gSg7gdg");
	this.shape_297.setTransform(-11.6,-119.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#A8846A").ss(1,1,1).p("AA6hKIh0gHQAAADgCAZQgCAagBAEQgBAmAVASQAVATATAeQAYgVASgOQASgOAHggQABgHgEggQgDggAAgEg");
	this.shape_298.setTransform(-11.6,-115.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#C1A084").s().p("AgrAhQgVgSABgmIADgeIACgcIB0AHQAAAEADAgQAEAggBAHQgHAggSAOIgqAjQgTgegVgTg");
	this.shape_299.setTransform(-11.6,-115.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#5E7244").s().p("AiXENQACgJALgNIASgTIAfgpQAPgWATgfIAUghQABgEAEgjQAFgigNgNQgMgFgigTQgigVgXgsQgWgsAVhMQgCAAgWApIgDgfIAFgKQAMgTAJgVQACgRAAgSQABAEAEAEQAGAGAEAHQAHATgDAVQgCAmABAiQACAiAWAhQAmA4A+gNQAagFAZgKQAggRAYgaQgBAJgHASQgHATgKADQAKAAAJACIAXAAQAWAAAVAIIADABQgUACgRAIQAUACAOARQgegFgegGQgggFgdALQghAHgVAXQgLAcACAgQACANgCAMQAOAEgPAJQgLALgIANQgXAagZAaQgRASgPAUQgJAMgMAKQgJAGgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_300.setTransform(-20.8,-72.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#5E7244").s().p("AglAdQADhGg6AGQg7AHgxAXQBVgrBYgmQgBgHCIgDQAUAIAQARQAaASAfALQgUgCgUAHQgVAIgFAWQgCAUASAYQAQAWAQAMQhMg3gzBFQgKgHABgOQABgNgTgHQgdgEgOAbQgUAVgbAJQANgiALgig");
	this.shape_301.setTransform(-18.2,-110);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#5E7244").s().p("AAsC1QgGgCgCgMQgXhggRg+IgRg6IgHABQgLgggFggQgFggARgkQAFBmAhBkQAjBnAFAIQgMAOAHARQAIARgFAAIAAAAg");
	this.shape_302.setTransform(12.3,-80.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#4F6632").ss(1,1,1).p("AACAJQgCgRgBAA");
	this.shape_303.setTransform(9.4,-86.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#4F6632").ss(1,1,1).p("AEKhxQAWBLAkCMQAIAcAXgPQAXgOAdgZQAWgWgIgoQgIgmgHgcQgOg2gQg1QgUhOgqhGQg2hGg3gPQgcgNgmgXQgngWgEgDQiIADABAHQgFADhGAgQhGAhhEAYQg8AegRBSQgQBSgFAYQgsBogcB9QANAlAeAdQASALAWgHQAVgGAUgLQgEgaAAgBQAEgIArhhQArhgAghdQgWBMAXAsQAXAtAiASQAiAVAMAFQAMANgEAiQgEAjgCAEQgBADgSAeQgTAfgPAWQgSAYgiAtQgjAsgEAFQgNAdAsAsQAsArAaAIQAqAIA8gRQA7gSgIg0QAQA4A4AKQA5AKAxADQABhpgqhgQgrhgAIhpQAKgOAYgPQAXgOAmgkQApg0gIgfQgDgKgCgJ");
	this.shape_304.setTransform(-17,-74.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#738E54").s().p("Ah1HDQgagIgsgrQgsgsANgdIAngxQAigtASgYQAPgWATgfIATghQACgEAEgjQAEgigMgNQgMgFgigVQgigSgXgtQgXgsAWhMQggBdgrBgIgvBpIAEAbQgUALgVAGQgWAHgSgLQgegdgNglQAch9AshoIAVhqQARhSA8geQBEgYBGghIBLgjQgBgHCIgDIArAZQAmAXAcANQA3APA2BGQAqBGAUBOQAQA1AOA2QAHAcAIAmQAIAogWAWQgdAZgXAOQgXAPgIgcQgkiMgWhLIgFgTIAFATQAIAfgpA0QgmAkgXAOQgYAPgKAOQgIBpArBgQAqBggBBpQgxgDg5gKQg4gKgQg4QAIA0g7ASQgpAMgiAAQgOAAgNgDg");
	this.shape_305.setTransform(-17,-74.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#351212").s().p("AhHGnQgSgGAPgZQAWgYATgOQATgOgUgcQgbgbgngRQgngRAKgxQAMgrAdiEIA4j6IAciAIgXgXQgWgXgWgdQBcAjA9BGQA+BHgPBtQgNBKgpA/QgqA+ghBBQgfBBAMBPQACAcANAaQAKAZADAbQgNAKgUAJQgtAVADAEQADAEAOAGIgCAAQgGAAgOgEg");
	this.shape_306.setTransform(8,-139.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#351212").ss(1,1,1).p("Agdk8QgDgCgfggQgeghgVgiQgVgjAagJQA0gHBRBFQBTBFAmB0QAmB0hUCCQgDADgeAyQgfAygYA9QgWA9APAjQAzBehoApQgtAVADAEQADAEAOAGQgEABgSgFQgSgGAPgZQAWgYATgOQATgOgUgcQgbgagngSQgngRAKgxQAMgrAdiEQAeiBAah4QAah4ACgJg");
	this.shape_307.setTransform(10.5,-143.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#5E2A2A").s().p("AhgHKQgSgGAPgZQAWgYATgOQATgOgUgcQgbgagngSQgngRAKgxQAMgrAdiEIA4j5IAciBIgigiQgeghgVgiQgVgjAagJQA0gHBRBFQBTBFAmB0QAmB0hUCCQgDADgeAyQgfAygYA9QgWA9APAjQAzBehoApQgtAVADAEQADAEAOAGIgBAAQgFAAgQgEg");
	this.shape_308.setTransform(10.5,-143.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#351212").ss(1,1,1).p("ABwkrQBCA5AbBeQAbBegQBdQgPBfg9A9QgQANgVAPQgVAPgHAUQgGAZANARQAIAMAQgBQAIgBALgEABqE3QgwAHgegaQgigfADg1QAFgnAIgFQAHgFgcghQgtgtg3gdQg3gdgig2QgghBAShBQAThBA7gsQA4gnA8gCQA7gCBBAU");
	this.shape_309.setTransform(-4.3,-87.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#351212").s().p("AAcEkQgiggADg0QAFgnAIgFQAHgFgcghQgtgtg3gdQg3gdgig2QgghBAShBQAThBA7gsQA4gnA8gCQA7gCBBAUIAIgHQBCA5AbBfQAbBegQBdQgPBfg9A9QgQANgVAPQgVAPgHATQgGAaANARQAIALAQgBQgLACgKAAQgiAAgXgUg");
	this.shape_310.setTransform(-4.3,-87.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#351212").ss(1,1,1).p("AhyEzQAsALAegZQAjgegBg2QgFgmgGgGQgHgFAcggQAsgqA0gbQA1gbAig1QAhg/gPhCQgOhCg2guQgzgpg4gFQg3gFg+ASAhekuQhBA2gdBdQgdBcALBeQALBgA2BAQAOAOAUAPQATAQAGAUQAEAZgMARQgJALgPgCQgIgBgKgE");
	this.shape_311.setTransform(-25.8,-87.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#351212").s().p("AhyEzQAPACAJgLQAMgRgEgZQgGgUgTgQQgUgPgOgOQg2hAgLhgQgLheAdhcQAdhdBBg2IAHAGQA+gRA3AFQA4AFAzApQA2AuAOBCQAPBCghA/QgiA1g1AbQg0AbgsAqQgcAgAHAFQAGAGAFAmQABA2gjAeQgVARgcAAQgMAAgNgDg");
	this.shape_312.setTransform(-25.8,-87.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#5E7244").s().p("AiFE9QgBgagPhpQgOhogkhyQgQgxAAgsQADhOAZgwQAZgwAHgHQANgDBEgGQBEgHBMAFQBPAFArAfQAWASABAaQABAUgDASQgDASAEAgQgtgDgfgIQgfgHghADQgnAZgrgDQgtgDgfgJQgtgFgtgjQADBSAXBHQAXBEALBDQgEBsABB2IgQgDg");
	this.shape_313.setTransform(-19.5,-10.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#4F6632").ss(1,1,1).p("AC1j2QgKhAhcgOQhZgOhaAIQhbAIgGADQgIACgkBOQgjBNAgB7QAnB9AOBtQAOBuAAAHQAEACBPAMQBOALBkgDQBmgEBLgtQgCgGgShmQgShngTh7QgTh8gEhJg");
	this.shape_314.setTransform(-15.5,-9.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#738E54").s().p("AheFGQhPgMgEgCQAAgHgOhuQgOhtgnh9Qggh7AjhNQAkhOAIgCQAGgDBbgIQBagIBZAOQBcAOAKBAQAEBJATB8QATB7ASBnIAUBsQhLAthmAEIguAAQhIAAg8gIg");
	this.shape_315.setTransform(-15.5,-9.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#A8846A").s().p("AhXIXQADgSAAguQAAhDgIhjQgJhkgWhnQgRhOAAhCQADhyAahLQAbhKARgUQAUgfAGgmQAFgmAAgNIArgXIBRgpIAzgZQABASAAAoQABAsgGAuIgCAKQhHAghJgsIACAtQABAWgNAXQg/BDgRBTQgaBzAOBzQAPB0ARByQARBygRBtIgGAAg");
	this.shape_316.setTransform(-23.8,63.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#A8846A").ss(1,1,1).p("Ai3k5QgeB0AgCoQAdCGAGByQAFBxgCAyQgFAagQA5QgSA4AAAzQAAAzA1AHQAEAAAqAFQAqAGAbAOQAWAPAjAFQAjAEAfgEQAggFAcgMQAcgLACgCQAAgCgPgVQgOgWgagKQgdgGgogNQgogNgVghQgPghgOgvQgOgvgEgTQgDg9gDiFQgDiFATilQATinA9ijQACgBALgZQAMgYAFgaQAHg3gBgyQgCgxAAgDIi5BdQABAEgFApQgFAqgVAhQgcAhgfB1g");
	this.shape_317.setTransform(-18.5,77.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#C1A084").s().p("AArKjQgjgFgWgPQgbgOgqgGIgugFQg1gHAAgzQAAgzASg4QAQg5AFgaQACgygFhxQgGhygdiGQggioAeh0QAfh1AcghQAVghAFgqQAFgpgBgEIC5hdIACA0QABAygHA3QgFAagMAYIgNAaQg9CjgTCnQgTClADCFQADCFADA9IASBCQAOAvAPAhQAVAhAoANQAoANAdAGQAaAKAOAWQAPAVAAACIgeANQgcAMggAFQgPACgQAAQgRAAgSgCg");
	this.shape_318.setTransform(-18.5,77.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#A8846A").s().p("AiDF2QAIhhAHhsQAHhtABg9QAAgXgCgKQgBgIAAgKQABg7AZhXQAZhWAigiIACgDIgMg+IgNhFIAxgNIBZgVIA1gOIABAvQAAAggDAjIg/ALQgdAGgHAKQhpDGgaDbQgbDegKDbIgPACIALh/g");
	this.shape_319.setTransform(-11.2,64.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#4F6632").ss(1,1,1).p("AhvAOQAGgDAfghQAfgigNgXIgPAFIAUgZQABAEAZAbQAZAbAlAHQBRAAAOAeQACAYhJAvQhGAuh6gTg");
	this.shape_320.setTransform(-0.3,135.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#738E54").s().p("AiDBeIAUhQQAGgDAfghQAfgigNgXIgPAFIAUgZQABAEAZAbQAZAbAlAHQBRAAAOAeQACAYhJAvQgzAhhKAAQggAAgjgGg");
	this.shape_321.setTransform(-0.3,135.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#A8846A").ss(1,1,1).p("AiKF7QABgIAKh3QAKh3AIiBQAJh+gFgmQgGg0AbhiQAbhjAmgoIgaiFIDJgyQACAHAABDQgBBCgRApQgLAUgcBnQgcBnghCIQghCFgXB3QgZB2gEA0IgCAnQACAFAfAyQAeAyAjAfQAkAaAaAKQAbAKABgBIgUBLQgDABgzADQgyADg6gEQg8gEgfgTQgagXACg3QABg4ALgwQAKgxACgD");
	this.shape_322.setTransform(-12.2,77.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#C1A084").s().p("AgpJ3Qg8gEgfgTQgagXACg3QABg4ALgwIAMg0IgGAFIALh/QAKh3AIiBQAJh+gFgmQgGg0AbhiQAbhjAmgoIgaiFIDJgyQACAHAABDQgBBCgRApQgLAUgcBnQgcBnghCIQghCFgXB3QgZB2gEA0IgCAnQACAFAfAyQAeAyAjAfQAkAaAaAKQAbAKABgBIgUBLIg2AEIgxABQgbAAgggCg");
	this.shape_323.setTransform(-12.2,77.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#A8846A").ss(1,1,1).p("AgYAXQACgCAQgUQAPgRAQgG");
	this.shape_324.setTransform(-23.1,-39.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#A8846A").ss(1,1,1).p("AgLACQgCAAAZgD");
	this.shape_325.setTransform(-28.1,-48.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#A8846A").ss(1,1,1).p("AATgZQAFgFgOAyQAEAKAVgGQAVgGAaADQA7AJgOAZQgRARgXgMQglgEgQAVQgPAVgYALQgPADgPgHQgOgHgPgCQgNAIgSABQgNgFgIgRQgOgkACgwQACgzAJgYQABgCATgNQASgNARgFQACADAVATQAVAUAOACQgCADgUANQgVANgXgUIgKAJIAMARQAJgDA2AD");
	this.shape_326.setTransform(-20.6,-45.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#C1A084").s().p("AgjBpQgOgHgPgCQgNAIgSABQgNgFgIgRQgOgkACgwQACgzAJgYIAUgPQASgNARgFIAXAWQAVAUAOACQgCADgUANQgVANgXgUIgKAJIAMARQAJgDA2ADIAYAFQAFgFgOAyQAEAKAVgGQAVgGAaADQA7AJgOAZQgRARgXgMQglgEgQAVQgPAVgYALIgJABQgLAAgKgFg");
	this.shape_327.setTransform(-20.6,-45.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#A8846A").ss(1,1,1).p("Ag4A9IAOg7QACgCAYgRQAVgUAMgGQAKgHAKgLQALgMAGANQAHARgJAWQgJAVgbAIQgCAAgOAOQgOAOgBAg");
	this.shape_328.setTransform(-23.2,-55.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#C1A084").s().p("Ag4A9IAOg7IAagTQAVgUAMgGQAKgHAKgLQALgMAGANQAHARgJAWQgJAVgbAIQgCAAgOAOQgOAOgBAgg");
	this.shape_329.setTransform(-23.2,-55.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#A8846A").ss(1,1,1).p("Ag/AyIAWg2QADgCAZgQQAYgQANgFQALgFAMgKQAMgKAEAOQAEASgMAVQgMASgcAFQgCAAgOAMQgRAMgGAf");
	this.shape_330.setTransform(-19.1,-54.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#C1A084").s().p("Ag/AyIAWg2IAcgSQAYgQANgFQALgFAMgKQAMgKAEAOQAEASgMAVQgMASgcAFQgCAAgOAMQgRAMgGAfg");
	this.shape_331.setTransform(-19.1,-54.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#A8846A").ss(1,1,1).p("AhEAqIAcg0QADgCAbgNQAZgNAOgDQALgEANgJQANgJADAOQACASgOAUQgOARgcACQgCAAgQAKQgRAKgKAe");
	this.shape_332.setTransform(-16,-52.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#C1A084").s().p("AhEAqIAcg0IAegPQAZgNAOgDQALgEANgJQANgJADAOQACASgOAUQgOARgcACQgCAAgQAKQgRAKgKAeg");
	this.shape_333.setTransform(-16,-52.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#A8846A").ss(1,1,1).p("AAegaQgCAEgVAYQgTAbgRgC");
	this.shape_334.setTransform(45.3,-21.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EA5B57").s().p("AA9ANQgTgbg9gFIg4AAIAKgUIBJAAQAEgEAdALQAbAKAJA/QgDgIgNgUg");
	this.shape_335.setTransform(51.2,-6.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#A82B1B").s().p("AnPAUIAAgnIOeAAIAAAng");
	this.shape_336.setTransform(-4.1,-16);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#9E9E9E").s().p("AmLFXQg8gEgGgzIAAo+QAGg0A8gEIMXAAQA8AEAGA0IAAI+QgGAzg8AEg");
	this.shape_337.setTransform(-4.5,43.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#BCBCBC").s().p("AmoFwQhBgFgFg3IAApnQAFg3BBgFINRAAQBBAFAFA3IAAJnQgFA3hBAFg");
	this.shape_338.setTransform(-4.5,43.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("Al0QqIAAiHIATgEQCFgcA4hJIAApmImaAAQgzgCghgiQghghgCg0IAAveQACgzAhghQAhgiAzgBIBcAAIAAguIPJAAIAAAuIBYAAQAyABAiAiQAhAhACAzIAAPeQgCAzghAjQgiAhgyACImaAAIAAJmQA4BJCFAcIATAEIAACHg");
	this.shape_339.setTransform(-4.4,86.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#4F6632").ss(0.5,1,1).p("AgJAGQAIAJAHgFQAJgIgFgHQgHgJgIAFQgJAHAFAIg");
	this.shape_340.setTransform(40.9,-27.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#4F6632").ss(0.5,1,1).p("AgDgGQAGgFAFAGQAEAFgIAHQgGAGgFgHQgEgGAIgGg");
	this.shape_341.setTransform(-33.5,-41.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgHAGQgEgGAIgGQAGgFAFAGQAEAFgIAHQgEADgBAAQgEAAgCgEg");
	this.shape_342.setTransform(-33.5,-41.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#738E54").s().p("AABAtIgXgNIgYgOQgHgaAQgZIAIgLQAUA1A6ADIgFAGQgfAbgLAAIgBAAg");
	this.shape_343.setTransform(-31.8,-41.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#829369").ss(1,1,1).p("Ag/ApIAzAcQAFACAfgVQAggWAKhIIgygYQgHgBgnAcQgpAbAIA3g");
	this.shape_344.setTransform(-30.5,-43.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#A8BC8F").s().p("AgMBFIgzgcQgIg3ApgbQAngcAHABIAyAYQgKBIggAWQgdATgGAAIgBAAg");
	this.shape_345.setTransform(-30.5,-43.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#5E7244").s().p("AgMB3Qgmglglg7Qg4hXgHhXQAGAHAUA+QAUA/AWAnQAVAiAeAaQAXAXALgHQAOgIAHgdQAFgPAHgRQgCAMAHAMIAFAHIADgKQANgiAZgPQAbgQAeAFIABADQAFAHABAFQADApgnA3QghAsgiAJIgFAAQgWAAghghg");
	this.shape_346.setTransform(-41.6,-51.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#4F6632").ss(1,1,1).p("AgmiRIA6AyQAIACA5AdQA6AdAMAkQADAoghAzQghAygsAPQgwABhJhpQhKhmgHhr");
	this.shape_347.setTransform(-41.6,-51.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#738E54").s().p("AhJA1QhKhmgHhrIB0ALIA6AyQAIACA5AdQA6AdAMAkQADAoghAzQghAygsAPIgBAAQgvAAhJhog");
	this.shape_348.setTransform(-41.6,-51.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#9D66AF").s().p("AgaARQADgBARgJQAPgIgKgPIAcAAQgBACgPAPQgNAQgVAAIgDAAg");
	this.shape_349.setTransform(7.6,136.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#A8BC8F").s().p("AgTAAQACgRARgBQASABABARQgBASgSABQgRgBgCgSg");
	this.shape_350.setTransform(-7.4,-91.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#A8BC8F").s().p("AgTAAQACgRARgBQASABABARQgBASgSABQgRgBgCgSg");
	this.shape_351.setTransform(-8.8,-99.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#B74141").s().p("AAhALQgIAAgHAEQgQACgIgKQgQgIgSADQgQAFgJgJQARACARgGQANgLAPAEIAPAHQADgDASAAQAMAGAIAIQAFAFAIgCQgHAHgJAAQgIAAgJgEg");
	this.shape_352.setTransform(-5.9,-131.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#B74141").ss(0.3,1,1).p("AAmAVQgRAKgTgCQgdgDgQgRQgPgJgJgQQAHABAHAAQANgBALgGQANgKAMAFQAKAGAEABQADgDATAAQAKADAGAKQAHAJANgEQgDADgDACQgEADgDACQgIAJgJAHg");
	this.shape_353.setTransform(-5.7,-130);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#EA7875").s().p("AABAdQgcgDgQgRQgPgJgIgQQAGABAHAAQAMgBAMgGQAOgKALAFIAOAHQADgDATAAQAJADAGAKQAIAJANgEIgGAFIgIAFQgHAJgKAHQgNAJgQAAIgHgBg");
	this.shape_354.setTransform(-5.7,-130);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#604F40").s().p("AgVgFQAVgVAcAQIASARQgHgEgSgGQgYgMgpAhQAAgEAXgTg");
	this.shape_355.setTransform(8.5,-158.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#A8846A").s().p("AAOgbQApANAEAIQg8gNgeAWQgWATgFAIQAihFAmAMg");
	this.shape_356.setTransform(6.8,-152.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#4F6632").ss(1,1,1).p("AgmgFQAGgHBHAT");
	this.shape_357.setTransform(-9.9,-73.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#4F6632").ss(1,1,1).p("AAIAsQgCgCgGgTQgGgSAAgMQAGgeADgF");
	this.shape_358.setTransform(8.3,-92.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#829369").ss(1,1,1).p("AAKhjIgCAkQAHgDA2ByIgxgKQAFgIgtAdQgtAjgDAGQACgJALg1QALg1AHgZQADgTADgOQACgOAQgFg");
	this.shape_359.setTransform(-18.8,-111.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#A8BC8F").s().p("Ag4AmIAThOIAGghQABgOARgFIAXgHIgDAkQAIgDA2ByIgxgKQAFgIgtAdQgtAjgDAGIAMg+g");
	this.shape_360.setTransform(-18.8,-111.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#5E7244").s().p("AiWENQABgJALgNIASgTIAfgpQAQgWASgfIAUghQABgEAEgjQAFgigNgNQgMgFgigTQgigVgXgsQgWgsAVhMQgCAAgWApIgDgfIAFgKQAMgTAJgVQACgRAAgSQABAEADAEQAHAGAEAHQAIATgEAVQgCAmABAiQACAiAWAhQAmA4A+gNQAagFAZgKQAfgRAagaQgCAJgHASQgHATgKADQAKAAAJACIAXAAQAWAAAVAIIADABQgUACgRAIQAUACANARQgdgFgdgGQgigFgcALQghAHgUAXQgLAcACAgQABANgBAMQANAEgPAJQgLALgIANQgXAagZAaQgRASgPAUQgJAMgMAKQgJAGgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_361.setTransform(-20.9,-72.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(255,255,255,0.498)").s().p("AgLgOIAWARQAAAEgPAIg");
	this.shape_362.setTransform(8.7,-147.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#663300").s().p("AgjAAQAEggAfgDQAhADADAgQgDAhghAEQgfgEgEghg");
	this.shape_363.setTransform(7.3,-149.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(255,255,255,0.498)").s().p("AgKgOIAVASQABADgQAIg");
	this.shape_364.setTransform(-15.7,-150);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(0.3,1,1).p("AAkAAQgDAhghAEQgggEgDghQADggAggDQAhADADAgg");
	this.shape_365.setTransform(-17.1,-151.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#663300").s().p("AgjAAQADggAggEQAhAEADAgQgDAhghADQgggDgDghg");
	this.shape_366.setTransform(-17.1,-151.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#A8846A").ss(1,1,1).p("AgjgEQAGgGAbgBQAJAEAOAIQAOAKABAB");
	this.shape_367.setTransform(-34.2,-27.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#EA5B57").s().p("AA9ANQgTgbg8gFIg6AAIAMgUIBJAAQADgEAdALQAbAKAJA/QgEgIgMgUg");
	this.shape_368.setTransform(51.3,-6.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#9E9E9E").s().p("AmLFXQg9gEgFgzIAAo+QAFg0A9gEIMYAAQA7AEAGA0IAAI+QgGAzg7AEg");
	this.shape_369.setTransform(-4.3,43.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#BCBCBC").s().p("AmoFwQhBgFgFg3IAApnQAFg3BBgFINRAAQBAAFAHA3IAAJnQgHA3hAAFg");
	this.shape_370.setTransform(-4.3,43.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#7F1804").s().p("AnWDjQhHgCgGgjIAAl7QAGgjBHgCIOtAAQBGACAIAjIAAF7QgIAjhGACg");
	this.shape_371.setTransform(-4.3,43.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#A82B1B").s().p("AoqIsQhGgHgHhHIAAu7QAHhIBGgGIRUAAQBHAHAHBHIAAO7QgHBHhHAHg");
	this.shape_372.setTransform(-4.3,45.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("Al0QqIAAiHIATgEQCFgcA4hJIAApmImaAAQgzgCghgiQghghgBg0IAAveQABgzAhghQAhgiAzgBIBcAAIAAguIPJAAIAAAuIBYAAQAyABAiAiQAhAhACAzIAAPeQgCAzghAjQgiAhgyACImaAAIAAJmQA4BJCFAcIATAEIAACHg");
	this.shape_373.setTransform(-4.3,86.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgJAGQgEgHAIgHQAIgFAGAIQAGAHgJAHQgEACgCAAQgEAAgFgFg");
	this.shape_374.setTransform(41.1,-27.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#4F6632").ss(0.5,1,1).p("AALgBQAAAHgKADQgIABgDgJQAAgHAKgCQAIgBADAIg");
	this.shape_375.setTransform(-46.6,-31.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgKABQAAgHAKgCQAJgBABAIQAAAHgKADIAAAAQgIAAgCgIg");
	this.shape_376.setTransform(-46.6,-31.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#738E54").s().p("AgKAzIgRgaIgSgZQAGgfAYgQQAGgEAHgCQgFA/A1AjIgHADQgZAGgNAAQgHAAgEgDg");
	this.shape_377.setTransform(-45.4,-31.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#829369").ss(1,1,1).p("AhNAFIAlA3QADAEAlgDQAogEAnhCIgkgzQgHgEgvAFQgxAFgRA7g");
	this.shape_378.setTransform(-42.7,-31.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#A8BC8F").s().p("AgoA8Iglg3QAQg7AygFQAvgFAGAEIAkAzQgnBCgnAEIgaABQgNAAgBgCg");
	this.shape_379.setTransform(-42.7,-31.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#5E7244").s().p("AglDLQgXgJgVg5QgVg5gKhOQgQh0AdhaQADAKgHBIQgHBJAEAyQAFAtARAqQANAiAOABQARgBASgYQALgNALgMQgEAKACAQIABAJIAFgIQAagaAfgDQAfgDAaAWIAAADQABAKgBAHQgOAqg7AiQgkATgbAAQgKAAgJgCg");
	this.shape_380.setTransform(-48.1,-47.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#4F6632").ss(1,1,1).p("AACiJIAjBSQAGAGAqA6QAqA7gEAsQgOApgzAgQg0AhgsgKQgegLgYhMQgYhMgFhcQgGhfAahE");
	this.shape_381.setTransform(-48.1,-48);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#738E54").s().p("AgmDQQgegLgYhMQgYhMgFhcQgGhfAahEIBnBJIAjBSQAGAGAqA6QAqA7gEAsQgOApgzAgQgoAagjAAQgLAAgKgDg");
	this.shape_382.setTransform(-48.1,-48);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#9D66AF").s().p("AgaARQAEgBAQgJQAOgIgJgPIAcAAQAAACgQAPQgNAQgVAAIgDAAg");
	this.shape_383.setTransform(7.8,136.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#829369").ss(1,1,1).p("AAUAAQgCASgSACQgRgCgCgSQACgRARgCQASACACARg");
	this.shape_384.setTransform(-8.6,-99.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgLAFQgVgJgBgDQAhAOASgFIAQgDQgQAJgPAAQgGAAgIgDg");
	this.shape_385.setTransform(-5.3,-128.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B74141").s().p("AAiALQgJAAgHAEQgPACgKgKQgPgIgSADQgPAFgKgJQARACAQgGQANgLARAEIAOAHQACgDATAAQALAGAJAIQAEAFAJgCQgHAHgJAAQgIAAgIgEg");
	this.shape_386.setTransform(-5.7,-131.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#B74141").ss(0.3,1,1).p("AAmAVQgRAKgTgCQgdgDgPgRQgQgJgJgQQAHABAHAAQAMgBAMgGQAOgKALAFQAKAGAEABQADgDATAAQAKADAGAKQAHAJANgEQgDADgDACQgEADgDACQgIAJgJAHg");
	this.shape_387.setTransform(-5.6,-130);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#EA7875").s().p("AABAdQgcgDgPgRQgQgJgJgQQAHABAHAAQANgBAKgGQAOgKAMAFIAOAHQADgDASAAQALADAFAKQAIAJAMgEIgFAFIgHAFQgJAJgJAHQgNAJgQAAIgHgBg");
	this.shape_388.setTransform(-5.6,-130);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#604F40").s().p("AgVgFQAVgVAdAQIARARQgHgEgRgGQgYgMgrAhQACgEAWgTg");
	this.shape_389.setTransform(8.6,-158.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#A8846A").s().p("AAOgbQApANAEAIQg7gNgeAWQgXATgFAIQAihFAmAMg");
	this.shape_390.setTransform(7,-152.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#A8BC8F").s().p("Ag3AmIAShOIAGghQACgOAQgFIAWgHIgCAkQAIgDA2ByIgxgKQAFgIgtAdQgtAjgDAGIANg+g");
	this.shape_391.setTransform(-18.7,-111.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#5E7244").s().p("AiWENQABgJALgNIASgTIAfgpQAPgWATgfIATghQACgEAEgjQAEgigMgNQgMgFgigTQgigVgXgsQgXgsAWhMQgCAAgWApIgEgfIAGgKQAMgTAIgVQAEgRAAgSQABAEACAEQAGAGAFAHQAHATgCAVQgDAmACAiQABAiAVAhQAnA4A/gNQAagFAYgKQAfgRAagaQgCAJgHASQgHATgJADQAJAAAKACIAWAAQAWAAAVAIIACABQgTACgSAIQAWACAMARQgdgFgdgGQgigFgbALQgjAHgTAXQgMAcADAgQABANgBAMQAOAEgQAJQgLALgJANQgVAagaAaQgRASgPAUQgJAMgMAKQgJAGgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_392.setTransform(-20.7,-72.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#A8846A").ss(1,1,1).p("AgngRQACgBAOgBQAPgBAKAHQAMAJAMAKQANANABAB");
	this.shape_393.setTransform(-44.6,-19.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#EA5B57").s().p("AA9ANQgTgbg8gFIg6AAIAMgUIBJAAQADgEAcALQAcAKAIA/QgDgIgMgUg");
	this.shape_394.setTransform(51.2,-6.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#A82B1B").s().p("AnOAUIAAgnIOdAAIAAAng");
	this.shape_395.setTransform(-4.1,-16);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#9E9E9E").s().p("AmMFXQg8gEgFgzIAAo+QAFg0A8gEIMZAAQA7AEAGA0IAAI+QgGAzg7AEg");
	this.shape_396.setTransform(-4.4,43.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#871512").ss(1,1,1).p("AHvkzIAAJnQgFA3hBAFItRAAQhBgFgFg3IAApnQAFg3BBgFINRAAQBBAFAFA3g");
	this.shape_397.setTransform(-4.4,43.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#BCBCBC").s().p("AmoFwQhAgFgHg3IAApnQAHg3BAgFINRAAQBAAFAHA3IAAJnQgHA3hAAFg");
	this.shape_398.setTransform(-4.4,43.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#470E06").ss(1,1,1).p("AIlC/QgHAhhIAEIurAAQhIgEgHghIAAl9QAHgiBIgDIOrAAQBIADAHAig");
	this.shape_399.setTransform(-4.4,43.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#A82B1B").s().p("AopIsQhHgHgHhHIAAu7QAHhIBHgGIRTAAQBGAHAIBHIAAO7QgIBHhGAHg");
	this.shape_400.setTransform(-4.4,45.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#4F6632").ss(1,1,1).p("AALgsQghANgBAiQgBAlADAFQAAgDALgPQAKgPAYAB");
	this.shape_401.setTransform(15.6,-74.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#4F6632").ss(1,1,1).p("AgHAPQABABAGgHQAIgGgBgR");
	this.shape_402.setTransform(30.9,-42.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#A8846A").ss(1,1,1).p("ABjARQACAQgHAMQgLAPgIgCQgIgCgOgEQgPgEgRgFQgRgFgOAIQgNAHABACQABADgGAKQgNARgOABQgPACgYABQgJgLAGgJQAHgIADgMQABgLgDgJQgMgWAKgTQAYgTAggJQAYgZAagTQAfgLACAQQACAPAKAUQALAIAPAIQAQAHgWAVQAQABACAQg");
	this.shape_403.setTransform(20.4,-34.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#C1A084").s().p("AhgBFQAHgIADgMQABgLgDgJQgMgWAKgTQAYgTAggJQAYgZAagTQAfgLACAQQACAPAKAUQALAIAPAIQAQAHgWAVQAQABACAQQACAQgHAMQgLAPgIgCIgWgGIgggJQgRgFgOAIQgNAHABACQABADgGAKQgNARgOABQgPACgYABQgJgLAGgJg");
	this.shape_404.setTransform(20.4,-34.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#829369").ss(1,1,1).p("AA0gQQAMAwgvAUQgwAMgVgvQgLgwAvgVQAwgLAUAvg");
	this.shape_405.setTransform(26.2,-36.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#A8BC8F").s().p("Ag0ARQgLgwAvgVQAwgLAUAvQAMAwgvAUQgKADgHAAQgjAAgRgmg");
	this.shape_406.setTransform(26.2,-36.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#5E7244").s().p("Ag4C8IgQgSQgPgRgGgQQgIgfAVgpQAFgRgHg8QgGg9gJg6IgKg+IARgMQAiBJACBFIAFCQQBJg7AhBWQAGAIATAFQAUAGAGAUQgBAngoAOQgXAGgXAAQgmAAgngSg");
	this.shape_407.setTransform(24.5,-53.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#4F6632").ss(1,1,1).p("AhvirQABAEAJA5QAJA6AGA8QAHA9gFARQgVApAIAgQAGAPAPARQAPARABACQAFAEAyALQAxAMApgcQAigkgIgwQgJgwgIgSQgEgNgTg2QgTg4gahAQgZhAgUgk");
	this.shape_408.setTransform(24.9,-55.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#738E54").s().p("AgFDhQgygLgFgEIgQgTQgPgRgGgPQgIggAVgpQAFgRgHg9QgGg8gJg6IgKg9IBcg5QAUAkAZBAQAaBAATA4IAXBDQAIASAJAwQAIAwgiAkQgdAUgiAAQgOAAgNgEg");
	this.shape_409.setTransform(24.9,-55.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgBAKQgKgCABgJQADgKAJABQAKADgBAJQgDAJgIAAIgBgBg");
	this.shape_410.setTransform(-58.6,-24.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#829369").ss(1,1,1).p("AhLgWIAPBIQABAHAnAMQAkAMA9g7IgRhDQgEgHgwgPQgvgOgkA7g");
	this.shape_411.setTransform(-54.7,-23.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#A8BC8F").s().p("AgUBFQgngMgBgHIgPhIQAkg7AuAOQAxAPAEAHIARBDQgzAxghAAQgHAAgGgCg");
	this.shape_412.setTransform(-54.7,-23.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#9D66AF").s().p("AgaARQADgBARgJQAOgIgJgPIAcAAQgBACgQAPQgMAQgVAAIgDAAg");
	this.shape_413.setTransform(7.7,136.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#491D1D").s().p("AAPAeQgRgNgigHQgBgEAEgYQAFgaAZABQAeAJAGAiQAHAhgFAMQgBgCgTgNg");
	this.shape_414.setTransform(1.4,-174.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#B74141").s().p("AAiALQgJAAgHAEQgQACgJgKQgPgIgSADQgPAFgKgJQARACAQgGQANgLARAEIAOAHQADgDASAAQAMAGAIAIQAFAFAIgCQgHAHgJAAQgIAAgIgEg");
	this.shape_415.setTransform(-5.8,-131.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#B74141").ss(0.3,1,1).p("AAmAVQgRAKgTgCQgdgDgPgRQgQgJgJgQQAHABAHAAQAMgBALgGQAOgKAMAFQAKAGAEABQADgDATAAQAKADAGAKQAHAJANgEQgDADgDACQgEADgDACQgIAJgJAHg");
	this.shape_416.setTransform(-5.7,-130);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#EA7875").s().p("AACAdQgdgDgPgRQgQgJgJgQQAHABAHAAQAMgBALgGQAOgKAMAFIAOAHQADgDASAAQALADAFAKQAIAJAMgEIgFAFIgHAFQgIAJgJAHQgOAJgQAAIgGgBg");
	this.shape_417.setTransform(-5.7,-130);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#604F40").s().p("AgVgFQAVgVAdAQIARARQgHgEgRgGQgZgMgqAhQACgEAWgTg");
	this.shape_418.setTransform(8.5,-158.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#4F6632").ss(1,1,1).p("AAHAsQgBgCgGgTQgGgSgBgMQAGgeAEgF");
	this.shape_419.setTransform(8.3,-92.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#829369").ss(1,1,1).p("AAKhjIgCAkQAHgDA2ByIgxgKQAFgIgtAdQgtAjgDAGQABgJAMg1QALg1AHgZQADgTACgOQADgOAQgFg");
	this.shape_420.setTransform(-18.8,-111.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#A8BC8F").s().p("Ag3AmIAShOIAFghQADgOAQgFIAWgHIgCAkQAIgDA2ByIgxgKQAFgIgtAdQgtAjgDAGIANg+g");
	this.shape_421.setTransform(-18.8,-111.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#5E7244").s().p("AiXENQACgJAMgNIARgTIAfgpQAPgWATgfIATghQACgEAFgjQADgigMgNQgMgFgigTQgigVgXgsQgXgsAWhMQgCAAgWApIgEgfIAGgKQANgTAHgVQADgRABgSQABAEACAEIALANQAHATgCAVQgDAmACAiQABAiAVAhQAnA4A/gNQAZgFAZgKQAggRAYgaQgBAJgHASQgHATgJADQAJAAAKACIAWAAQAWAAAVAIIACABQgTACgSAIQAWACAMARQgdgFgegGQgggFgcALQgjAHgUAXQgKAcABAgQACANgCAMQAOAEgPAJQgLALgJANQgWAagYAaQgSASgPAUQgJAMgMAKQgJAGgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_422.setTransform(-20.8,-72.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#4F6632").ss(1,1,1).p("AEKhxQAWBLAkCMQAIAcAXgPQAXgOAdgZQAWgWgIgoQgIgmgHgcQgOg2gQg1QgUhOgqhGQg2hGg3gPQgcgNgmgXQgngWgEgDQiIADABAHQgFADhGAgQhGAhhEAYQg8AegRBSQgQBSgFAYQgsBogcB9QANAlAeAdQASALAWgHQAVgGAUgLQgEgaAAgBQAEgIArhhQArhgAghdQgWBMAXAsQAXAtAiASQAiAVAMAFQAMANgEAiQgEAjgCAEQgBADgSAeQgTAfgPAWQgSAYgiAtQgjAsgEAFQgNAdAsAsQAsArAaAIQAqAIA8gRQA7gSgIg0QAQA4A4AKQA5AKAxADQABhpgqhgQgrhgAIhpQAKgOAXgPQAYgOAmgkQApg0gIgfQgDgKgCgJ");
	this.shape_423.setTransform(-17,-74.3);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#738E54").s().p("Ah1HDQgagIgsgrQgsgsANgdIAngxQAigtASgYQAPgWATgfIATghQACgEAEgjQAEgigMgNQgMgFgigVQgigSgXgtQgXgsAWhMQggBdgrBgIgvBpIAEAbQgUALgVAGQgWAHgSgLQgegdgNglQAch9AshoIAVhqQARhSA8geQBEgYBGghIBLgjQgBgHCIgDIArAZQAmAXAcANQA3APA2BGQAqBGAUBOQAQA1AOA2QAHAcAIAmQAIAogWAWQgdAZgXAOQgXAPgIgcQgkiMgWhLIgFgTIAFATQAIAfgpA0QgmAkgYAOQgXAPgKAOQgIBpArBgQAqBggBBpQgxgDg5gKQg4gKgQg4QAIA0g7ASQgpAMgiAAQgOAAgNgDg");
	this.shape_424.setTransform(-17,-74.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#A8846A").ss(1,1,1).p("AgngRQACgBAOgBQAOgBALAHQAMAJAMAKQANANABAB");
	this.shape_425.setTransform(-44.7,-19.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("Al0QqIAAiHIATgEQCFgcA4hJIAApmImaAAQgygCgigiQghghgBg0IAAveQABgzAhghQAigiAygBIBbAAIAAguIPKAAIAAAuIBYAAQAyABAhAiQAiAhABAzIAAPeQgBAzgiAjQghAhgyACImaAAIAAJmQA4BJCFAcIATAEIAACHg");
	this.shape_426.setTransform(-4.5,86.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#277489").ss(1,1,1).p("ABsjQQAHgIAQgCQABAXgYgIQAAgCAAgDQgIAJADASQADANAGAHQAOgRAPASQgTAIgKgJQgBABgBACQgNAUgBAVQgKAHgFAPQgGATADAPQAKgCANABQABAQgOAGQgHgKgDgLQgUAFgLAVQgDAQAIAKQgLAIgFAQQgBACAAADQAJACAHANQgVAKAFgZQgKgCgNAPQgKAMgCALQAAgBABAAQAMgKAOAMQAJAMgGAKQgIALgOgIQgJgMABgOQgLAJgHANQgCAEgCAGQAEgBAEgBQAPACAEAQQADAQgMAHQgXAHABgWQAAgNAEgLQgVAJgJAeQgEANADAHQAFgFAHgDQAUgMADAgQgeADgFgPQgLAKgHAPQACgBACAAQATgDgDAYQgeACAKgWQAAAAAAAAQgQAEgJAOQgBABAAABQgHABgHAHQgLAKADAHQADAIgBALQgBAmgkAPACbkhQg1AaAGA3ABgh1QALgJARABQACAHgBAIQgcATgBgXQAAgCAAgBgAA0gJQAKgIAPgBQgJAUgMgIQgCgBgCgCgAhHCsIAAAAAhhDAQAJgBAIAJQAKAWgUAAQgTABAMgfg");
	this.shape_427.setTransform(24.9,-56.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#738E54").s().p("AgUAEIgBgDQAOgNATgIQACAMAHAIQgcAOgGAHQgEgIgDgJg");
	this.shape_428.setTransform(48.9,-75.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#829369").ss(1,1,1).p("AgQg0QgCACAGARQAHATBDAiQgCAFg/AbQgBAEgRgJQgSgIgWg/QgDgFAwgXg");
	this.shape_429.setTransform(52.3,-73.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#A8BC8F").s().p("AgVAvQgSgIgWg/QgDgFAwgXQgCACAGARQAHATBDAiQgCAFg/AbQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAQgEAAgMgGg");
	this.shape_430.setTransform(52.3,-73.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#999999").ss(1,1,1).p("AgQg0QgCACAGARQAHATBDAiQgCAFg/AbQgBAEgRgJQgSgIgWg/QgDgFAwgXg");
	this.shape_431.setTransform(52.3,-73.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgVAvQgSgIgWg/QgDgFAwgXQgCACAGARQAHATBDAiQgCAFg/AbQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgFAAgLgGg");
	this.shape_432.setTransform(52.3,-73.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgJgbQAFAGALATQADAFAAAMQAAAMgBAC");
	this.shape_433.setTransform(58.8,-86.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgagcQABAAANAFQAMAEAIAFQAHAHAGAQQAGASAAAC");
	this.shape_434.setTransform(63.1,-88.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#A8846A").s().p("AhJBIQgDAAAEgPQAEgOAigiIgBgqIgLgMIgIgFQABgCANgIQAOgIANAKQAQARgFgIQgEgLAJgFQAPAAAEgFQgBgGAKgGIAPgHIAPAAIgJAFQgHADgDAHQACgBALAJQAKAJACADQALARgDATQgJgagZgMQgKgDgRAEQgOAEAFAMQgNgOgQAFQgMARAJAWQAIAUgPAUQgbAYAFAkQgMgHgFgMg");
	this.shape_435.setTransform(58.1,-84.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#A8846A").ss(1,1,1).p("AgFhWQgBgDAGgKQAKgJAQgDQAQgCACAAQAQACALAZQALAYAFAOQAGAOAGAVQAGAUgPAKQgTANgzAnQgyAngGAGQgBgCgRgOQgRgPgSgNIgKgSQgCABAEgPQADgOAighIAAgsIgMgMIgIgFQABgBAOgJQANgIANALQASARgGgJQgBgCACgJQADgJASADQABAAACAA");
	this.shape_436.setTransform(60.6,-82.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#C1A084").s().p("Ag2BiQgRgPgSgNIgKgRQgCAAAEgPQADgOAiggIAAgtIgMgLIgIgGQABgBAOgJQANgIANALQASARgGgJQgBgCACgJQADgJASACIADABIgDgBQgBgCAGgKQAKgIAQgDIASgDQAQABALAZIAQAoQAGANAGAVQAGATgPALQgTAMgzAoIg4AtIgSgQg");
	this.shape_437.setTransform(60.6,-82.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#277489").ss(1,1,1).p("ACbhXQghgEgUAeQgYAfAgAaQgBAGg8AJQg6AJgogVQg8g2goA1QglA0A3AmQgSgWANgdQAOgdAWgGQAZgCAWAKQAWAMAZAEQAyAJAvgRQAbgRAAgWQAAgZAUgWQAMgKAPgDQgFgEgFgCg");
	this.shape_438.setTransform(53.9,-90.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#46A6BC").s().p("AiVgCQAog1A8A2QAoAVA6gJQA8gJABgGQgggaAYgfQAUgeAhAEQAFACAFAEQgPADgMAKQgUAWAAAZQAAAWgbARQgvARgygJQgZgEgWgMQgWgKgZACQgWAGgOAdQgNAdASAWQg3gmAlg0g");
	this.shape_439.setTransform(53.9,-90.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#277489").ss(1,1,1).p("ACLheQgfgDgbAmQgSAdAfAUQgBAJg8AHQg6AIgogUQg8g2goA1QgXAaAHAUQAHAVAXAUQAZASAsgEQAtgFAfgDQAogBAugOQAvgOAfgdQAogkgXgzQgOgggWgDg");
	this.shape_440.setTransform(55.5,-90.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#5DCBE8").s().p("AiXBQQgXgUgHgVQgHgUAXgaQAog1A8A2QAoAUA6gIQA8gHABgJQgfgUASgdQAbgmAfADQAWADAOAgQAXAzgoAkQgfAdgvAOQguAOgoABIhMAIIgRABQggAAgUgPg");
	this.shape_441.setTransform(55.5,-90.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#4F6632").ss(1,1,1).p("AAcgBQgBgCgPgCQgNgCgaAO");
	this.shape_442.setTransform(21.2,-74.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#4F6632").ss(1,1,1).p("AAPgeQgDgBgOAMQgQANAFAl");
	this.shape_443.setTransform(22.8,-71);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#5E7244").s().p("AiTBqQgbgZgNgpQgNgoAAgCIAQgXQAqBpBaAAQBYgBB6gyQgkgBgKgWQgLgVgNgEQABgNAKAFQAKAEAJgGQgYgOgLgbQgMgbAcgQQArgPAcAtQAbAtAEAkQADAkgfAYQgfAYgsABQgwAFhNAUQgmAKgcAAQggAAgWgMg");
	this.shape_444.setTransform(34.5,-67.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#4F6632").ss(1,1,1).p("Ahrg0QADgBAugUQAtgTAzgQQA2gRAaAHQAjAOAVAhQAWAiAFAlQADAmgfAYQgfAYgsAAQgwAFhNAVQhPAUgpgWQgbgagNgoQgNgoAAgE");
	this.shape_445.setTransform(34.5,-67.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#738E54").s().p("AiTBuQgbgagNgoQgNgoAAgEIBdg0IAxgVQAtgTAzgQQA2gRAaAHQAjAOAVAhQAWAiAFAlQADAmgfAYQgfAYgsAAQgwAFhNAVQgmAJgdAAQggAAgVgLg");
	this.shape_446.setTransform(34.5,-67.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#829369").ss(1,1,1).p("AhMgWIAQBIQABAHAmAMQAlAMA9g7IgRhDQgEgHgxgPQgugOglA7g");
	this.shape_447.setTransform(-54.7,-23.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#A8BC8F").s().p("AgVBFQgmgMgBgHIgQhIQAmg7AuAOQAwAPAEAHIAQBDQgyAxghAAQgHAAgHgCg");
	this.shape_448.setTransform(-54.7,-23.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgLgPIAXATQAAADgQAJg");
	this.shape_449.setTransform(-15.8,-151.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#AF8D74").s().p("ABjEyQhRgfgxg8Qgyg+gYgzQgYg0AAgEIgBgEIgEAAQhFgEgFgkQgRg8AigVQAXgNAXAdIAIgGQgHgFALgbQALgbBAhBIABAAQAsgsBAgiQBCghBAgBQASABAPADQhkAChRA6QgeAYgfAxQghAvADApIAKAcQABAOAHAPIAHAUQACADABAPQgCADgFAmQgFAmARBKQAKAhAoAvQApAuAjAMIgCAAg");
	this.shape_450.setTransform(-19,-149.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#829369").ss(1,1,1).p("AAKhjIgCAkQAHgDA2BzIgxgLQAFgHgsAcQgtAjgEAGQACgJALg0QALg2AHgZQADgTADgNQACgOAQgGg");
	this.shape_451.setTransform(-18.8,-111.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#A8BC8F").s().p("Ag4AmIAThOIAGghQABgOARgFIAXgHIgDAkQAIgDA2ByIgxgKQAFgHgtAcQgsAjgEAGIAMg+g");
	this.shape_452.setTransform(-18.8,-111.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#4F6632").ss(1,1,1).p("AEKhxQAWBLAkCMQAIAcAXgPQAXgOAdgZQAWgWgIgoQgIgmgHgcQgOg2gQg1QgUhOgqhGQg2hGg3gPQgcgNgmgXQgngWgEgDQiIADABAHQgFADhGAgQhGAhhEAYQg8AegRBSQgQBSgFAYQgsBogcB9QANAlAeAdQASALAWgHQAVgGAUgLQgEgaAAgBQAEgIArhhQArhgAghdQgWBMAXAsQAXAtAiASQAiAVAMAFQAMANgEAiQgEAjgCAEQgBADgSAeQgSAfgQAWQgSAYgiAtQgjAsgEAFQgNAdAsAsQAsArAaAIQAqAIA8gRQA7gSgIg0QAQA4A4AKQA5AKAxADQABhpgqhgQgrhgAIhpQAKgOAYgPQAXgOAmgkQApg0gIgfQgDgKgCgJ");
	this.shape_453.setTransform(-17.1,-74.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#738E54").s().p("Ah1HDQgagIgsgrQgsgsANgdIAngxQAigtASgYQAQgWASgfIATghQACgEAEgjQAEgigMgNQgMgFgigVQgigSgXgtQgXgsAWhMQggBdgrBgIgvBpIAEAbQgUALgVAGQgWAHgSgLQgegdgNglQAch9AshoIAVhqQARhSA8geQBEgYBGghIBLgjQgBgHCIgDIArAZQAmAXAcANQA3APA2BGQAqBGAUBOQAQA1AOA2QAHAcAIAmQAIAogWAWQgdAZgXAOQgXAPgIgcQgkiMgWhLIgFgTIAFATQAIAfgpA0QgmAkgXAOQgYAPgKAOQgIBpArBgQAqBggBBpQgxgDg5gKQg4gKgQg4QAIA0g7ASQgpAMgiAAQgOAAgNgDg");
	this.shape_454.setTransform(-17.1,-74.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#351212").ss(1,1,1).p("AhzEzQAtALAegZQAjgegBg2QgFgmgGgGQgHgFAcggQAsgqA0gbQA1gbAig1QAhg/gPhCQgOhCg2guQgzgpg4gFQg3gFg+ASAhekuQhBA2gdBdQgdBcALBeQALBgA2BAQAOAOAUAPQATAQAGAUQAEAZgMARQgIALgRgCQgHgBgKgE");
	this.shape_455.setTransform(-25.9,-87.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#351212").s().p("AhzEzQARACAIgLQAMgRgEgZQgGgUgTgQQgUgPgOgOQg2hAgLhgQgLheAdhcQAdhdBBg2IAHAGQA+gRA3AFQA4AFAzApQA2AuAOBCQAPBCghA/QgiA1g1AbQg0AbgsAqQgcAgAHAFQAGAGAFAmQABA2gjAeQgVARgcAAQgMAAgOgDg");
	this.shape_456.setTransform(-25.9,-87.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#4F6632").ss(1,1,1).p("AC1j2QgLhAhbgOQhZgOhaAIQhbAIgGADQgIACgkBOQgjBNAgB7QAnB9AOBtQAOBuAAAHQAEACBPAMQBOALBkgDQBmgEBLgtQgCgGgShmQgShngTh7QgTh8gEhJg");
	this.shape_457.setTransform(-15.6,-9.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#738E54").s().p("AheFGQhPgMgEgCQAAgHgOhuQgOhtgnh9Qggh7AjhNQAkhOAIgCQAGgDBbgIQBagIBZAOQBbAOALBAQAEBJATB8QATB7ASBnIAUBsQhLAthmAEIguAAQhIAAg8gIg");
	this.shape_458.setTransform(-15.6,-9.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#A8846A").ss(1,1,1).p("Ai3k5QgeB0AgCoQAdCGAFByQAGBxgDAyQgFAagQA5QgSA4AAAzQAAAzA1AHQAFAAAqAFQApAGAbAOQAWAPAjAFQAjAEAfgEQAggFAcgMQAcgLACgCQAAgCgOgVQgOgWgbgKQgcgGgogNQgogNgWghQgPghgOgvQgNgvgFgTQgDg9gDiFQgDiFATilQATinA+ijQABgBAMgZQAMgYAFgaQAGg3gBgyQgBgxgBgDIi5BdQABAEgEApQgFAqgWAhQgcAhgeB1g");
	this.shape_459.setTransform(-18.5,77.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#C1A084").s().p("AAqKjQgjgFgWgPQgbgOgpgGIgvgFQg1gHAAgzQAAgzASg4QAQg5AFgaQADgygGhxQgFhygdiGQggioAeh0QAeh1AcghQAWghAFgqQAEgpgBgEIC5hdIACA0QABAygGA3QgFAagMAYIgNAaQg+CjgTCnQgTClADCFQADCFADA9IASBCQAOAvAPAhQAWAhAoANQAoANAcAGQAbAKAOAWQAOAVAAACIgeANQgcAMggAFQgOACgQAAQgRAAgTgCg");
	this.shape_460.setTransform(-18.5,77.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#277489").ss(1,1,1).p("ABglTQAHgOAPgEQADAmgYgMQgBgEAAgEQgHAPAEAdQAEAVAGAKQANgbAQAeQgSAMgLgPQgBADgBACQgMAhABAiQgKAMgEAZQgGAeAEAZQAKgEANADQADAZgOALQgIgQgEgTQgTAIgKAiQgCAbAIAPQgKAOgEAaQAAAFgBAEQgKgEgMAZQgKAUgBASQgKAPgGAVQgDAHgBAKQAEgDAEgBQAPADAFAaQAEAZgOAMQgVAMAAgjQAAgWADgRQgVAOgHAxQgDAUADANQAFgIAHgGQATgUAFA1QgeAFgGgYQgLAQgFAXQACAAACgBQATgFgCAoQgeADAJgjQAAgBAAgBQgQAHgJAXQAAACAAACQgHABgHALQgKAQADAMQAEANAAASQAAA9giAaACKnXQgyApAIBbABajAQAKgNARABQACALgBANQgaAegCgkQAAgDAAgDgAAzgQQAKgNAPgBQgIAigMgOQgDgDgCgDgAADBcQAAgBABgBQAMgPAOASQAKAUgGAQQgGARgPgMQgMgTACgXgAAkAhQAJADAIAWQgUAQADgpgAhWE6QAIgCAJAOQALAkgTABQgTABAKgyg");
	this.shape_461.setTransform(26.4,-77.1);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#9D66AF").s().p("AgaARQADgBARgJQAOgIgJgPIAcAAQAAACgQAPQgNAQgVAAIgDAAg");
	this.shape_462.setTransform(7.7,135.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#4F6632").ss(1,1,1).p("AAFgdQgCABgEARQgHAOAIAb");
	this.shape_463.setTransform(27.9,-83.1);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#738E54").s().p("AgPBFQgSgHgNgLQgOgLgggEQgNgBgSAFQgSAEAHAUQgXgDgXgIQgJgjgcgXQgSgnAYgkQgDAFAHAgQAIAhA9AJQA/AEATAHQAQAFACACQgBgGARggQARgjA3gKIAbANQAaAMAZAIQAnAJAgAPQAfANgFAgQgDAGhEAaQgjANgsAAQgqAAgwgMg");
	this.shape_464.setTransform(-16.2,139.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#4F6632").ss(0.5,1,1).p("AAIAAQAAAIgIABQgGgBgBgIQABgGAGgBQAIABAAAGg");
	this.shape_465.setTransform(-50.8,-17.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgIAAQABgGAHgCQAIACAAAGQAAAIgIAAQgHAAgBgIg");
	this.shape_466.setTransform(-50.8,-17.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#4F6632").ss(1,1,1).p("AgZgEQABACAOAEQANAGAXgG");
	this.shape_467.setTransform(-54.7,-21.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#4F6632").ss(1,1,1).p("AAKgeQAAACgHAYQgEAVgIAO");
	this.shape_468.setTransform(-46.8,-38.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#4F6632").ss(1,1,1).p("AAVgUQABAJgqAg");
	this.shape_469.setTransform(-49.6,-60);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#A8BC8F").s().p("AgTAAQACgRARgCQASACABARQgBASgSABQgRgBgCgSg");
	this.shape_470.setTransform(-7.4,-91.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#A8BC8F").s().p("AgSAAQABgRARgCQASACABARQgBASgSACQgRgCgBgSg");
	this.shape_471.setTransform(-8.7,-99.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#843C3C").s().p("AARAvQgFgXgKgGQgIAAgGATIgFAPQAIglgHgdIgFgVIACAFQAGASALAFQAHgCgBgeQgBgegBgFQARArACAyQACAzgBAEIgFgbg");
	this.shape_472.setTransform(23,-159.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#843C3C").s().p("AgcByQAFgTAhgeQAlgggNgPQgOgQg6ATQh1ApARgiIARgfQAIgOgSAHQgXAFgZgKQgZgMADgGQADgJAWgiQAWgjA/gWQgFACgXAYQgYAXAIARQATAMAugKQAugJAGgDQgEACgPAQQgOAPAXAHQAaADAPgMQASgLAkAHQAiAMAKAWQAKAUAWAHQAZAHAPgIQAOgIADgnQADAFgBAlQgBAogsANQgzAGg5AOQg3AQgZApQgCgBAFgUg");
	this.shape_473.setTransform(-23.5,-169.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#351212").s().p("AADC4QAegpAVgnQALgkgcgdQgdgdg0hHQgthRAYhAQAYhBAHgDQgDAEgOA1QgOA1AMA6QAeBLA0AtQA3AvgLApQgVAogUATQgUATgCAjQABAkAKAOIAHAKQg2gzAdgog");
	this.shape_474.setTransform(-31.9,-133.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#351212").s().p("AAAASQAEgEgBgMQgIgPgFgEQAIAAADAFQANATgEALg");
	this.shape_475.setTransform(-0.2,-174.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#B74141").s().p("AAiALQgJAAgHAEQgQACgJgKQgQgIgRADQgPAFgKgJQARACAQgGQANgLARAEIAOAHQADgDASAAQAMAGAIAIQAEAFAJgCQgHAHgKAAQgHAAgIgEg");
	this.shape_476.setTransform(-5.8,-131.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#A8846A").s().p("AgDgEQAQgDAEgGQgKAQgKgCQgGAIAAAEQgQgQAWgBg");
	this.shape_477.setTransform(-1.3,-137.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#93735D").s().p("AgIAbIAMgGQAIgEAAgGQAAgEgBgBQgLgGgGgRIgKgVIAMAUQAJAQAJADIABAAIAAABQAHAMgOANIgNAHQgIACgBADQgCgEAIgIg");
	this.shape_478.setTransform(-0.8,-140.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#604F40").s().p("AAAgMQAmgEADADQALgFADgFQgDAJgDACQANgFADgHQgHARgHACQg0gRghAWQgWAQgIAJQAegjAigCg");
	this.shape_479.setTransform(7.7,-152.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#604F40").s().p("AA5AQQgcgXhOADIgNgKQgLgLgEgLIAKANQAKAKAJAEQgEgCgDgSQACAIAIAKQAGgDAuAFQAtAFAaApQgHgIgOgNg");
	this.shape_480.setTransform(-19,-155.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(255,255,255,0.498)").s().p("AgKgOIAWARQAAAEgPAIg");
	this.shape_481.setTransform(8.3,-149);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#663300").s().p("AgjAAQADggAggDQAhADADAgQgDAhghADQgggDgDghg");
	this.shape_482.setTransform(6.9,-150.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#333333").s().p("AgYAAQADgWAVgCQAXACACAWQgCAXgXACQgVgCgDgXg");
	this.shape_483.setTransform(-17.1,-153);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#663300").s().p("AgjAAQADggAggEQAhAEADAgQgDAhghAEQgggEgDghg");
	this.shape_484.setTransform(-17.1,-153);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#A8846A").ss(0.5,1,1).p("ABBAPQACgFgYgcQgYgehJAHIgKADQgBADADAYQADAXAPAQQAaAaAngRQAsgTAAgDg");
	this.shape_485.setTransform(-17.2,-152.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AgsAcQgPgQgDgXIgCgbIAKgDQBJgHAYAeQAYAcgCAFQAAADgsATQgQAHgMAAQgVAAgQgQg");
	this.shape_486.setTransform(-17.2,-152.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#4F6632").ss(1,1,1).p("AgCgLQAAgCACABQABABACAY");
	this.shape_487.setTransform(57.4,-105.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#738E54").s().p("AgPANIgDgDQAFgSAOgQQAHAKAKAEQgSAZgCAKIgNgMg");
	this.shape_488.setTransform(52.3,-113.5);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#829369").ss(1,1,1).p("AglgtQgBADANAMQAPAOBMABQAAAFguA0QABAEgTAAQgRAAgxguQgFgDAggqg");
	this.shape_489.setTransform(56.4,-112.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#A8BC8F").s().p("AhAAAQgFgCAggrQgBADANAMQAPAOBMACQAAAEguA0QABAEgTAAIgBAAQgRAAgwgug");
	this.shape_490.setTransform(56.4,-112.2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#999999").ss(1,1,1).p("AglgtQgBADANAMQAOAOBNABQAAAFguA0QABAEgTAAQgSAAgwguQgGgDAhgqg");
	this.shape_491.setTransform(56.5,-112.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AhAAAQgGgCAhgrQgBADANAMQAOAOBNACQAAAEguA0QABAEgTAAIgBAAQgRAAgwgug");
	this.shape_492.setTransform(56.5,-112.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgKgbQAFAGAMASQADAFABANQAAAMAAAB");
	this.shape_493.setTransform(60.4,-125.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgcgaQACAAAMADQANAEAIAFQAIAHAHAPQAHARAAAC");
	this.shape_494.setTransform(64.6,-127.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#4F6632").ss(1,1,1).p("AAVgGQgBgBgQAAQgOABgLAO");
	this.shape_495.setTransform(50,-108.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#A8846A").s().p("AhHBMQgCAAADgPQADgPAggjIgDgqIgMgMIgIgEQABgCANgJQANgJAOAKQARAQgGgIQgFgLALgFQANgBAEgGQgBgFAKgGQAJgHAFgCIAPAAIgJAGQgHADgCAGQACgBALAJIANALQAMARgDATQgKgagZgKQgKgDgRAFQgOAFAGALQgOgNgQAGQgLASAKAWQAJATgNAVQgaAZAGAjQgMgFgGgMg");
	this.shape_496.setTransform(59.9,-123.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#A8846A").ss(1,1,1).p("AgLhGQgBgDAHgLQAIgIAQgEQAQgEABAAQARABAMAYQAMAYAFAOQAIANAHAVQAHATgOAMQgRALgmAdQgjAcgFAEQgDABgdgBQgdAAgVgLIgKgQQgCABACgPQADgPAggkIgDgqIgLgLIgJgFQABgCANgJQANgIAOAKQATAPgHgIQgCgBADgKQACgJASACQABAAACAA");
	this.shape_497.setTransform(62.6,-123.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#C1A084").s().p("AglBkQgdAAgVgLIgKgQQgCABACgPQADgPAggkIgDgqIgLgLIgJgFQABgCANgJQANgIAOAKQATAPgHgIQgCgBADgKQACgJASACIADAAIgDAAQgBgDAHgLQAIgIAQgEIARgEQARABAMAYQAMAYAFAOQAIANAHAVQAHATgOAMIg3AoIgoAgIgPABIgRgBg");
	this.shape_498.setTransform(62.6,-123.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#277489").ss(1,1,1).p("ACYheQghgDgTAfQgWAhAhAXQAAAJg7AKQg6ALgpgUQg/gwglA0QgjA4A5AjQgTgVAMgdQAMgeAWgIQAZgEAWALQAXAKAZADQAyAGAvgUQAagQgBgYQgCgZATgWQALgMAPgDQgFgEgFgBg");
	this.shape_499.setTransform(55.2,-129.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#46A6BC").s().p("AiTAEQAlg0A/AwQApAUA6gLQA7gKAAgJQghgXAWghQATgfAhADQAFABAFAEQgPADgLAMQgTAWACAZQABAYgaAQQgvAUgygGQgZgDgXgKQgWgLgZAEQgWAIgMAeQgMAdATAVQg5gjAjg4g");
	this.shape_500.setTransform(55.2,-129.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#277489").ss(1,1,1).p("ACHhkQgggCgaAoQgPAdAfAUQAAAIg7AKQg6AMgpgTQg/gyglA1QgWAcAJAVQAIAUAYATQAZARAsgHQAsgHAfgEQAogDAugRQAtgRAfgeQAlgmgZgyQgQgfgVgCg");
	this.shape_501.setTransform(57,-129.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#5DCBE8").s().p("AiSBZQgYgTgIgUQgJgVAWgcQAlg1A/AyQApATA6gMQA7gKAAgIQgfgUAPgdQAagoAgACQAVACAQAfQAZAyglAmQgfAegtARQguARgoADIhLALQgNACgLAAQgbAAgSgMg");
	this.shape_502.setTransform(57,-129.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#5E7244").s().p("AhuAcQAIgcgBgWQAAgZAcgPQAZgOAXAEQAwAKAxAQQAVAHAXAUQAXATgEAXQgFgPgMgNQgOgNgRgJQgLALAAAQQAAAPgKANQgFgigdgMQgdgGgaAJQAEgUAVgCQgUgIgZAAQgZABgKAZQgHAYgMAZQgNAYgVAUQAPgRAIgdg");
	this.shape_503.setTransform(51.1,-106.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#4F6632").ss(1,1,1).p("AieBvQgQgbgEgLQgFgLAPgZQARgbAagXQAagZAJgOQAgg2ACg9QABgYAZgPQAagPAWAEQAZAGAtALQAtALARARQAUATAJAcQAJAdg+AjQgDAEgqAxQgqAvgxA3QgyA4gaAWQgiAdgnAS");
	this.shape_504.setTransform(46.3,-91.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#738E54").s().p("AieBvQgQgbgEgLQgFgLAPgZQARgbAagXQAagZAJgOQAgg2ACg9QABgYAZgPQAagPAWAEIBGARQAtALARARQAUATAJAcQAJAdg+AjIgtA1QgqAvgxA3QgyA4gaAWQgiAdgnASg");
	this.shape_505.setTransform(46.3,-91.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#AF8D74").s().p("ABjExQhRgegxg9Qgyg9gYgzQgYg0AAgEIgBgDIgEAAQhFgFgFglQgRg6AigXQAXgMAXAdIAIgGQgHgFALgbQALgcBBg/IAAgBQAsgsBAghQBCgjBAAAQASAAAPAFQhkABhRA6QgeAYgfAwQghAxADAoIAKAbQABAPAHAPIAIAVQACACAAAQQgCABgFAnQgFAmARBKQAKAhAoAvQApAvAjALIgCgBg");
	this.shape_506.setTransform(-18.9,-149.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#4F6632").ss(1,1,1).p("AAIArQgBgBgHgTQgGgTgBgMQAGgeAEgF");
	this.shape_507.setTransform(8.3,-92.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#738E54").s().p("AAIAWQgfgVgUAiQgBgTAGgZQAGgbARgIIAWgHIgCAkQAWAhARAhQgPgRgVgMg");
	this.shape_508.setTransform(-18.4,-116.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#A8846A").s().p("Ag9gFIADglIBxAIQAAAEADAeQAEAggBAJIAAACQg/gTg7gdg");
	this.shape_509.setTransform(-11.6,-119.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#5E7244").s().p("AgxgJIgTgSQgHgCgEgFQgMgUgBgWQgBgMAEgKQACgGAEgFIAIgLQgEAmAcAkQAcAkAXAaQAXAdAcAZQANALALANQAGAQAMALQhMg8hChGg");
	this.shape_510.setTransform(16.9,-84.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#5E7244").s().p("AiXENQACgJAMgNIARgTIAfgpQAPgWATgfIATghQACgEAFgjQADgigMgNQgMgFgigTQgigVgXgsQgXgsAWhMQgCAAgWApIgEgfIAGgKQANgTAHgVQADgRABgSQABAEACAEIALANQAHATgCAVQgDAmACAiQABAiAVAhQAnA4A/gNQAZgFAZgKQAggRAYgaQgBAJgHASQgHATgJADIATACIAWAAQAWAAAVAIIACABQgTACgSAIQAWACAMARQgdgFgegGQgggFgcALQgjAHgUAXQgKAcABAgQACANgCAMQAOAEgPAJQgLALgJANQgWAagYAaQgSASgPAUQgJAMgMAKQgJAGgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_511.setTransform(-20.8,-72.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#5E7244").s().p("AguEFQghgOgEg0QgFgzADgtIABgaQABg4AOhZQAPhcAahiQglCqgOCpQAAAjAXAxQAXAxAygRQgKAZgQAJQA5gCAnglQgZAhgoAYQgeASgYAAQgHAAgHgCg");
	this.shape_512.setTransform(-54.1,-45.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#4F6632").ss(1,1,1).p("AHqgiQgoA0g0gvQh3hygygmQADADACAbQACAegjApQgmAmgYAPQgXAPgLAMQgHBpAqBgQArBggBBoQgxgCg5gKQg5gLgPg3QAIA0g7ARQg8ARgrgHQgZgIgsgsQgsgrANgdQAEgFAigtQAjgsASgZQAPgWASgeQASgeACgDQACgFAEgiQAEgigMgLQgMgFgigVQgjgVgWgsQgXgtAVhLQgfBdgrBhQgsBggEAHQACAGAKBFQAJBFgEA/QAAAZAPAdQAQAdgCAZQgMArg1AoQg1ApgrgJQgpgUgChBQgChCADgqQAChZAdiPQAdiNAyh2QAEgZARhSQAQhRA8geQBFgYBFghQBGghAGgDQgBgGCIgDQAEACAmAXQAnAWAcANQA2APA3BHQAsA6AwA3QAjArAgAtQARAXAWAiQAWAjgMAdg");
	this.shape_513.setTransform(-13.8,-69.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#738E54").s().p("AnCH2QgpgUgChBQgChCADgqQAChZAdiPQAdiNAyh2IAVhrQAQhRA8geQBFgYBFghIBMgkQgBgGCIgDIAqAZQAnAWAcANQA2APA3BHQAsA6AwA3QAjArAgAtQARAXAWAiQAWAjgMAdQgoA0g0gvQh3hygygmQADADACAbQACAegjApQgmAmgYAPQgXAPgLAMQgHBpAqBgQArBggBBoQgxgCg5gKQg5gLgPg3QAIA0g7ARQg8ARgrgHQgZgIgsgsQgsgrANgdIAmgyIA1hFQAPgWASgeIAUghQACgFAEgiQAEgigMgLQgMgFgigVQgjgVgWgsQgXgtAVhLQgfBdgrBhIgwBnIAMBLQAJBFgEA/QAAAZAPAdQAQAdgCAZQgMArg1AoQgrAhglAAQgIAAgIgBg");
	this.shape_514.setTransform(-13.8,-69.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#351212").s().p("AAcEkQgigfADg2QAFgmAIgFQAHgFgcghQgtgtg3gdQg3gdgig3QgghAAShBQAThBA7gsQA4gnA8gCQA7gCBBAUIAIgGQBCA4AbBeQAbBegQBdQgPBgg9A9QgQANgVAPQgVAPgHAUQgGAZANARQAIAMAQgBQgLABgKAAQgiAAgXgUg");
	this.shape_515.setTransform(-4.4,-87.2);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#351212").s().p("AhzEzQARACAIgLQAMgRgEgaQgGgTgTgQQgUgPgOgOQg2hAgLhgQgLheAdhdQAdhcBBg2IAHAHQA+gSA3AFQA4AFAzApQA2AuAOBCQAPBCghA/QgiA1g1AaQg0AcgsAqQgcAfAHAGQAGAGAFAmQABA2gjAdQgVASgcAAQgMAAgOgDg");
	this.shape_516.setTransform(-25.9,-87.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#738E54").s().p("AgSALIgSgVIAagVQANAiAiAQQgPANgXAAIgRgVg");
	this.shape_517.setTransform(-51.3,-19.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#829369").ss(1,1,1).p("AAag7IAhAyQABAFgRAdQgRAggtADIgogyg");
	this.shape_518.setTransform(-49.7,-21.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#A8BC8F").s().p("Ag7AKIBVhFIAhAzQABAEgRAeQgRAfgtACg");
	this.shape_519.setTransform(-49.7,-21.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#A8846A").ss(1,1,1).p("ABTAfQgOAVgEABQACABAEAHQAEAGgKAGQgaAHgEgEQgFAJgZABQgJgEgUgFQgTgGgCAAQgBgCACgJQACgKAOgCIASAAQgEgCgfgbQgfgagHgeQABgcARgKQARgKADAAQACABAZAIQAYAIAYAIQACABAPAEQAPAFAGAIQAGAXABATQAMALgEAUg");
	this.shape_520.setTransform(-41.4,-13.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#C1A084").s().p("AgYBNIgVgGIABgLQACgKAOgCIASAAQgEgCgfgbQgfgagHgeQABgcARgKQARgKADAAIAbAJIAwAQIARAFQAPAFAGAIQAGAXABATQAMALgEAUQgOAVgEABQACABAEAHQAEAGgKAGQgaAHgEgEQgFAJgZABIgdgJg");
	this.shape_521.setTransform(-41.4,-13.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#A8846A").s().p("AiDF2QAIhiAHhsQAHhsABg9QAAgXgCgKQgBgHAAgLQABg7AZhXQAZhWAigjIACgBIgMg/IgNhFIAxgMIBZgXIA1gMIABAuQAAAggDAiIg/ANQgdAFgHALQhpDFgaDbQgbDdgKDcIgPABIALh+g");
	this.shape_522.setTransform(-11.3,64.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#277489").ss(1,1,1).p("AgxlWQABgOAOgIQARAjgcgFQgCgEgCgEQgBAQAPAaQALATALAIQABgdAZAYQgNAQgNgLQgBACABADQABAiAMAfQAEgPARgDQAGAKAEAMQgPAjgPghQgBgDAAgDQgEAOAEAZQAFAdAOAXQAIgHANAAQAMAWgJAOQgOgNgKgQQgPAMADAiQAIAaANAMQgEAQAHAZQABAEABAEQgMAAgCAaQgBAVAFARQgFARACAVQAAAIACAJQADgDAEgDQASgCAOAYQANAWgIAPQgSARgNghQgJgVgEgQQgOATAMAwQAEATAIALQACgJAEgHQALgYAZAwQgbANgPgVQgEARADAYQACgBACgBQAQgKAOAmQgcAKgGgjQAAAAAAgBQgNAKABAYQAAACABACQAIgEANAKQAZAggTAFQgSAGgJgxQgGADgDALQgDASAHALQAIALAHARQAYA5gYAhAg6ncQghA0AqBSAAcgcQAFgPAOgFQAGAkgSgMQgDgCgEgCgAAXBVQAAgBABgBQAFgSAVAOQASAQAAARQAAARgTgHQgTgPgHgWgAAhAVQAKABAQATQgNAUgNgog");
	this.shape_523.setTransform(8.8,-76.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#9D66AF").s().p("AgaARQAEgBAQgJQAPgIgKgPIAcAAQgBACgPAPQgNAQgVAAIgDAAg");
	this.shape_524.setTransform(7.6,136.6);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#9D66AF").s().p("AhRAKIAoACQAmABAkgFQAmgGAGgUQABABAEAJQADAIgNAFQgQAFgpAHQgOACgNAAQgfAAgmgJg");
	this.shape_525.setTransform(-5.9,141.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#738E54").s().p("AgPBFQgSgHgNgLQgOgLgggEQgNgBgSAEQgSAFAHAUQgXgDgXgHQgJglgcgWQgSgnAYgkQgDAFAHAgQAIAiA9AIQA/AEATAHQAQAGACABQgBgFARghQARgjA3gKIAbAOQAaALAZAIQAnAJAgAPQAfANgFAgQgDAGhEAaQgjANgsAAQgqAAgwgMg");
	this.shape_526.setTransform(-16.3,139.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#4F6632").ss(0.5,1,1).p("AAJAAQgBAIgIAAQgGAAgBgIQABgHAGgBQAIABABAHg");
	this.shape_527.setTransform(-50.9,-17.6);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAABAHQgBAIgIABQgHgBAAgIg");
	this.shape_528.setTransform(-50.9,-17.6);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#843C3C").s().p("AARAwQgFgZgKgFQgIAAgGASIgFAQQAIglgHgdIgFgWIACAGQAGASALAFQAHgCgBgeQgBgegBgEQARApACAyQACA0gBAFIgFgbg");
	this.shape_529.setTransform(22.9,-160);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#843C3C").s().p("AgcBzQAFgUAhgfQAlgfgNgPQgOgPg6ASQh1ApARgiIARgeQAIgOgSAGQgXAGgZgMQgZgLADgHQADgHAWgjQAWgjA/gXQgFADgXAXQgYAYAIARQATANAugKQAugLAGgCQgEACgPAPQgOARAXAGQAaADAPgMQASgMAkAIQAiAMAKAWQAKAUAWAHQAZAGAPgHQAOgIADgnQADAFgBAmQgBAngsANQgzAGg5APQg3AOgZApQgCAAAFgTg");
	this.shape_530.setTransform(-23.6,-170);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#351212").s().p("AADC4QAegoAVgoQALgkgcgdQgdgdg0hGQgthSAYhAQAYhBAHgDQgDAEgOA1QgOA1AMA7QAeBKA0AtQA3AvgLApQgVAogUAUQgUATgCAiQABAlAJANIAIAKQg1gzAcgog");
	this.shape_531.setTransform(-32,-133.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgLAFQgVgJgCgDQAiAOASgFIAQgDQgQAJgPAAQgGAAgIgDg");
	this.shape_532.setTransform(-5.5,-128.4);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#AF8D74").s().p("AgCAHQgPgEABgEQABgGACAAQACAFAbgCIgCAHQgBAFgJAAIgGgBg");
	this.shape_533.setTransform(-6.4,-125.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#B74141").s().p("AAiALQgJAAgHAEQgPACgKgKQgPgIgSADQgPAFgKgJQARACAQgGQANgLAQAEIAPAHQADgDASAAQAMAGAIAIQAFAFAIgCQgHAHgJAAQgIAAgIgEg");
	this.shape_534.setTransform(-5.9,-131.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#B74141").ss(0.3,1,1).p("AAmAVQgRAKgTgCQgdgDgPgRQgQgJgJgQQAHABAHAAQAMgBALgGQAOgKAMAFQAKAGAEABQADgDASAAQAKADAHAKQAHAJANgEQgDADgDACQgEADgDACQgJAJgIAHg");
	this.shape_535.setTransform(-5.8,-130.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#EA7875").s().p("AACAdQgdgDgPgRQgQgJgJgQQAHABAHAAQAMgBALgGQAPgKALAFIAOAHQADgDASAAQAKADAHAKQAHAJAMgEIgFAFIgHAFQgJAJgIAHQgOAJgQAAIgGgBg");
	this.shape_536.setTransform(-5.8,-130.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#604F40").s().p("AgVgFQAVgVAdAQIAQARQgGgEgRgGQgZgMgqAhQACgEAWgTg");
	this.shape_537.setTransform(8.4,-158.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#A8846A").s().p("AgDgEQAQgEAEgEQgKAOgKgBQgGAIAAAFQgQgSAWAAg");
	this.shape_538.setTransform(-1.4,-137.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#93735D").s().p("AgIAbIAMgFQAIgFAAgFQAAgGgBgBQgLgFgGgRIgKgWIAMAUQAJARAJADIABABIAAABQAHALgOANIgNAGQgIADgBAEQgCgFAIgIg");
	this.shape_539.setTransform(-0.9,-140.4);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#604F40").s().p("AAAgMQAmgDADACQALgFADgFQgDAJgDACQANgFADgGQgHAQgHACQgzgQgiAWQgWAQgIAHQAeghAigDg");
	this.shape_540.setTransform(7.6,-152.6);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#A8846A").s().p("AAOgbQApANAEAIQg8gNgdAWQgXATgFAIQAihFAmAMg");
	this.shape_541.setTransform(6.7,-152.8);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(255,255,255,0.498)").s().p("AgLgOIAXARQgBAEgOAIg");
	this.shape_542.setTransform(8.1,-149);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#663300").s().p("AgjAAQAEggAfgDQAhADADAgQgDAhghADQgfgDgEghg");
	this.shape_543.setTransform(6.7,-150.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(255,255,255,0.498)").s().p("AgKgOIAWASQAAADgPAIg");
	this.shape_544.setTransform(-16,-151.2);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgsAcQgPgQgDgXIgCgbIAKgDQBJgHAYAeQAYAcgCAFQABADgtATQgQAHgMAAQgVAAgQgQg");
	this.shape_545.setTransform(-17.3,-152.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#4F6632").ss(1,1,1).p("AgKgEQgBgCACgBQADgBARAQ");
	this.shape_546.setTransform(30,-117.4);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#738E54").s().p("AgBAVIgDAAQgKgTAAgUQAMACAIgEQAFAfAEAKIgJAAIgHAAg");
	this.shape_547.setTransform(20.7,-119.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#829369").ss(1,1,1).p("AgzAAQACABARAAQAUABA4g0QAEAEADBEQADADgOANQgNAOhDgCQgFACgGg0g");
	this.shape_548.setTransform(23.9,-122.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#A8BC8F").s().p("AgoAyQgFACgGg0QACABARAAQAUABA4g0QAEAEADBEQADADgOANQgMANg3AAIgNgBg");
	this.shape_549.setTransform(23.9,-122.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#999999").ss(1,1,1).p("AgzAAQACABARAAQAUAAA4gzQAEAEADBEQADACgOAOQgNANhDgBQgFABgGgzg");
	this.shape_550.setTransform(23.9,-122.2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgoAyQgFABgGgzQACABARAAQAUAAA4gzQAEAEADBEQADACgOAOQgMANg7AAIgJgBg");
	this.shape_551.setTransform(23.9,-122.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgagLQAIAAAUAEQAUALAFAI");
	this.shape_552.setTransform(18.1,-134.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#A8846A").ss(0.5,1,1).p("AgnAHQAJgGAagIQAJAAAQAHQARAGACAC");
	this.shape_553.setTransform(19.8,-139.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#4F6632").ss(1,1,1).p("AAKgUQgCAAgJAMQgLAJADAT");
	this.shape_554.setTransform(22.2,-114.7);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#A8846A").s().p("AATBoQgCABgHgNQgIgNgBgvIgfgeIgQAAIgJACQgBgCAEgNQADgQARgCQAQAAAAgBIgCgBQgLgFAEgLQAKgKgBgIQgEgDACgLQADgLACgFIALgKIgDAKQgDAHADAGQABgCAMgBIASgBQATAEAMAQQgagMgZAKQgHAFgJAPQgIAPANACQgVACgHAPQAFATAVAIQAUAJAEAZQgCAkAdAVQgGACgGAAQgGAAgHgCg");
	this.shape_555.setTransform(17.2,-132.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#A8846A").ss(1,1,1).p("Agyg1QgDgBgCgNQABgNAJgOQAJgNABgBQANgLAXAJQAZAKAOAGQAPAFATAKQATALgCASQgEATgIAtQgIAugBAGQgBADgWAUQgWAUgWAGIgRgFQgBACgIgNQgIgMgBgxIghgeIgQAAIgJACQgBgCAEgNQADgPARgDQAQAAAAgBQgBgBgBAAQgCAAgFgJQgFgIAPgLQABgBABgB");
	this.shape_556.setTransform(20.7,-133);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#C1A084").s().p("AgOBuQgBACgIgNQgIgMgBgxIghgeIgQAAIgJACQgBgCAEgNQADgPARgDQAQAAAAgBIgCgBQgCAAgFgJQgFgIAPgLIACgCIgCACQgDgBgCgNQABgNAJgOIAKgOQANgLAXAJIAnAQQAPAFATAKQATALgCASQgEATgIAtIgJA0QgBADgWAUQgWAUgWAGg");
	this.shape_557.setTransform(20.7,-133);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#277489").ss(1,1,1).p("AA6ijQgaAUAIAjQAGAoAogGQAGAHgjAxQgjAvgrANQhQAHALBBQANBABBgNQgcgCgMgeQgLgeALgVQAPgTAXgIQAWgIAUgPQAqggAVgsQAHgfgSgRQgSgRgBgdQAAgQAIgNQgGABgFADg");
	this.shape_558.setTransform(10.5,-134.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#46A6BC").s().p("AhaByQgLhBBQgHQArgNAjgvQAjgxgGgHQgoAGgGgoQgIgjAagUQAFgDAGgBQgIANAAAQQABAdASARQASARgHAfQgVAsgqAgQgUAPgWAIQgXAIgPATQgLAVALAeQAMAeAcACQgLADgKAAQgvAAgKg2g");
	this.shape_559.setTransform(10.5,-134.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#277489").ss(1,1,1).p("ABKikQghgLgRANQgYAVAIAuQAJAgAkgIQAGAHgjAxQgiAvgsAOQhQAGAKBCQAEAjAUAJQAUAKAfgDQAegFAZgkQAbgjAUgYQBAhFAJhZQAAg3g0gUg");
	this.shape_560.setTransform(13.9,-134.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#5DCBE8").s().p("AhkCiQgUgJgEgjQgKhCBQgGQAsgOAigvQAjgxgGgHQgkAIgJggQgIguAYgVQARgNAhALQA0AUAAA3QgJBZhABFIgvA7QgZAkgeAFIgOABQgWAAgPgIg");
	this.shape_561.setTransform(13.9,-134.7);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#AF8D74").s().p("ABjEyQhRgfgxg9Qgyg8gYg0QgYg0AAgEIgBgEIgEAAQhFgEgFgkQgRg8AigVQAXgNAXAdIAIgGQgHgFALgbQALgbBAhBIABAAQAsgrBAgjQBCghBAgBQASABAPADQhkAChRA6QgeAYgfAxQghAvADApIAKAcQABAOAHAQIAIATQABADABAPQgCACgFAnQgFAmARBKQAKAhAoAvQApAuAjAMIgCAAg");
	this.shape_562.setTransform(-19,-149.8);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#4F6632").ss(1,1,1).p("AAIAsQgBgCgHgTQgFgSgBgNQAGgeADgF");
	this.shape_563.setTransform(8.2,-92.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#4F6632").ss(1,1,1).p("AgCAOQgHAAAOgb");
	this.shape_564.setTransform(22.8,-85.5);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#4F6632").ss(1,1,1).p("AgdhXQgCAAAQBGQALAjAPAiQARAhACAD");
	this.shape_565.setTransform(23.6,-89.9);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#738E54").s().p("AAIAWQgfgVgUAiQgBgSAGgaQAGgbARgHIAWgHIgCAkQAWAgARAhQgPgRgVgMg");
	this.shape_566.setTransform(-18.5,-116.8);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#829369").ss(1,1,1).p("AAKhjIgDAkQAIgDA2ByIgxgKQAFgIgtAdQgtAjgDAGQABgJALg1QAMg1AHgZQADgTACgOQACgOARgFg");
	this.shape_567.setTransform(-18.9,-112);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#A8BC8F").s().p("Ag3AmIAShOIAFghQACgOARgFIAWgHIgBAkQAGgDA3ByIgxgKQAFgIgtAdQgtAjgDAGIANg+g");
	this.shape_568.setTransform(-18.9,-112);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#A8846A").s().p("Ag9gFIADglIBxAHQAAAFADAeQAEAggBAJIAAABQg/gSg7gdg");
	this.shape_569.setTransform(-11.7,-119.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#5E7244").s().p("AhBBGQgOgbgRgPQgQgTAJgcQAJgbATgMQAsgcAsgWQAVgJAegBQAegCANAVQgNgIgTgCQgTAAgTAEQAAAQALAMQALANACAQIgcgPQgOgGgPAJQgYAPgOAbQgLgTAPgQQgVAIgSASQgSARAKAYQANAYAJAaQAGAagBAdQgBgWgOgbg");
	this.shape_570.setTransform(25.2,-111.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#5E7244").s().p("AiXENQACgJAMgNIARgTIAfgpQAQgWASgfIATghQACgEAFgjQADgigMgNQgMgFgigTQgigVgXgsQgXgsAWhMQgCAAgWApIgEgfIAGgKQANgTAHgVQADgRAAgSQACAEADAEIAKANQAHATgCAVQgDAmABAiQACAiAVAhQAnA4A+gNQAagFAZgKQAfgRAZgaQgBAJgHASQgHATgJADIATACIAWAAQAWAAAVAIIACABQgTACgSAIQAWACANARQgegFgegGQgggFgcALQgjAHgUAXQgKAcABAgQACANgCAMQAOAEgPAJQgLALgJANQgWAagYAaQgSASgPAUQgJAMgMAKQgJAGgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_571.setTransform(-20.9,-72.2);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#4F6632").ss(1,1,1).p("AHxhmQgFA0gUAqQgVAog9guQh3hygxgmQACACACAcQACAegjApQgmAmgXAPQgYANgKANQgIBqArBgQAqBgAABoQgygCg4gKQg5gLgOg3QAGA0g6ARQg9ARgqgHQgagIgsgsQgsgrAOgdQAEgFAigtQAigsASgYQAQgXASgeQASgeABgDQACgFAEgiQAFgigNgNQgMgDgigVQgigVgXgsQgXgsAWhMQggBdgrBhQgrBggEAHQACAGAJBFQAKBFgFA/QAAAZAQAdQAQAdgDAZQgMArg0AoQg1ApgsgJQgogUgChBQgChCADgqQABhZAdiPQAdiNAyh2QAFgZAQhRQARhSA8geQBEgYBGghQBGghAFgDQgBgGCIgDQAEACAnAXQAmAWAcANQA3APA2BHQAvBHAQgGQgBgEgQgkQgQgjgSgUQgQgSAIgdQAJgdAUgMQAWgNAogXQAogXAaABQAaAAAaAPQAaAOgUBEQAAAEADBBQADBBABBLQABBLgEAig");
	this.shape_572.setTransform(-13.1,-71);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#738E54").s().p("AnKIFQgogUgChBQgChCADgqQABhZAdiPQAdiNAyh2IAVhqQARhSA8geQBEgYBGghIBLgkQgBgGCIgDIArAZQAmAWAcANQA3APA2BHQAvBHAQgGIgRgoQgQgjgSgUQgQgSAIgdQAJgdAUgMIA+gkQAogXAaABQAaAAAaAPQAaAOgUBEIADBFQADBBABBLQABBLgEAiQgFA0gUAqQgVAog9guQh3hygxgmQACACACAcQACAegjApQgmAmgXAPQgYANgKANQgIBqArBgQAqBgAABoQgygCg4gKQg5gLgOg3QAGA0g6ARQg9ARgqgHQgagIgsgsQgsgrAOgdIAmgyIA0hEQAQgXASgeIATghQACgFAEgiQAFgigNgNQgMgDgigVQgigVgXgsQgXgsAWhMQggBdgrBhIgvBnQACAGAJBFQAKBFgFA/QAAAZAQAdQAQAdgDAZQgMArg0AoQgrAhglAAQgJAAgIgBg");
	this.shape_573.setTransform(-13.1,-71);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#351212").s().p("AAcEkQgigfADg1QAFgnAIgFQAHgFgcghQgtgtg3gdQg3gdgig2QgghBAShCQAThAA7gsQA4gnA8gCQA7gCBBAUIAIgGQBCA4AbBfQAbBegQBdQgPBfg9A9QgQANgVAPQgVAPgHATQgGAaANARQAIALAQAAQgLABgKAAQgiAAgXgUg");
	this.shape_574.setTransform(-4.5,-87.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#351212").s().p("AhzEzQARACAIgLQAMgRgEgZQgGgVgTgPQgUgPgOgOQg2hAgLhgQgLheAdhcQAdhdBBg2IAHAGQA+gRA3AFQA4AFAzApQA2AuAOBCQAPBCghA/QgiA1g1AbQg0AbgsAqQgcAgAHAFQAGAGAFAmQABA2gjAeQgVARgcAAQgMAAgOgDg");
	this.shape_575.setTransform(-26,-87.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#829369").ss(1,1,1).p("AAag7IAhAyQABAFgRAeQgRAggtACIgogyg");
	this.shape_576.setTransform(-49.8,-21.5);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#A8BC8F").s().p("Ag7AJIBVhEIAhAyQABAFgRAdQgRAggtADg");
	this.shape_577.setTransform(-49.8,-21.5);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#A8846A").s().p("AiDF2QAIhhAHhsQAHhtABg9QAAgXgCgKQgBgIAAgKQABg7AZhWQAZhXAigjIACgCIgMg+IgNhFIAxgNIBZgVIA1gOIABAvQAAAggDAjIg/ALQgdAGgHAKQhpDGgaDbQgbDdgKDcIgPACIALh/g");
	this.shape_578.setTransform(-11.4,64.8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#4F6632").ss(1,1,1).p("AhvAOQAGgDAfghQAfgigNgXIgPAFIAUgZQABAEAZAbQAZAbAlAHQBRAAAOAeQACAYhJAvQhGAuh6gTg");
	this.shape_579.setTransform(-0.4,135.8);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#738E54").s().p("AiDBeIAUhQQAGgDAfghQAfgigNgXIgPAFIAUgZQABAEAZAbQAZAbAlAHQBRAAAOAeQACAYhJAvQgzAhhKAAQggAAgjgGg");
	this.shape_580.setTransform(-0.4,135.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_323,p:{x:-12.2,y:77.6}},{t:this.shape_322,p:{x:-12.2,y:77.6}},{t:this.shape_321,p:{x:-0.3,y:135.9}},{t:this.shape_320,p:{x:-0.3,y:135.9}},{t:this.shape_319,p:{x:-11.2}},{t:this.shape_318,p:{x:-18.5,y:77.3}},{t:this.shape_317,p:{x:-18.5,y:77.3}},{t:this.shape_316,p:{x:-23.8,y:63.9}},{t:this.shape_315,p:{x:-15.5,y:-9.7}},{t:this.shape_314,p:{x:-15.5,y:-9.7}},{t:this.shape_313,p:{x:-19.5,y:-10.6}},{t:this.shape_312,p:{x:-25.8}},{t:this.shape_311,p:{x:-25.8}},{t:this.shape_310,p:{x:-4.3}},{t:this.shape_309,p:{x:-4.3,y:-87.2}},{t:this.shape_308,p:{x:10.5,y:-143.4}},{t:this.shape_307,p:{x:10.5,y:-143.4}},{t:this.shape_306,p:{x:8,y:-139.8}},{t:this.shape_305,p:{x:-17}},{t:this.shape_304,p:{x:-17}},{t:this.shape_303,p:{x:9.4}},{t:this.shape_302,p:{x:12.3}},{t:this.shape_301,p:{x:-18.2,y:-110}},{t:this.shape_300},{t:this.shape_299,p:{x:-11.6,y:-115.9}},{t:this.shape_298,p:{x:-11.6,y:-115.9}},{t:this.shape_297,p:{x:-11.6}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294,p:{x:-6.2,y:-111.4}},{t:this.shape_293,p:{x:-6.1,y:-111.3}},{t:this.shape_292,p:{x:-18.4}},{t:this.shape_291,p:{x:-6,y:-115.6}},{t:this.shape_290},{t:this.shape_289,p:{x:-34.7,y:-94.1}},{t:this.shape_288,p:{x:-14.5,y:-74.5}},{t:this.shape_287,p:{x:-9.8}},{t:this.shape_286,p:{x:-11.6,y:-149.7}},{t:this.shape_285,p:{x:-11.6,y:-149.7}},{t:this.shape_284,p:{x:-18.9}},{t:this.shape_283,p:{x:7,y:-149.3}},{t:this.shape_282,p:{x:6.6,y:-149.7}},{t:this.shape_281,p:{x:6.6,y:-149.7}},{t:this.shape_280,p:{x:-17.5,y:-151.8}},{t:this.shape_279,p:{x:-17.2}},{t:this.shape_278,p:{x:-17.2,y:-152.1}},{t:this.shape_277,p:{x:-16.1,y:-155.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_270,p:{x:-17.4,y:-154.8}},{t:this.shape_269,p:{x:-17.8,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_267},{t:this.shape_266,p:{x:7.8}},{t:this.shape_265,p:{x:-0.8}},{t:this.shape_264,p:{x:-1.3}},{t:this.shape_263},{t:this.shape_262,p:{x:-16.3,y:-160.7}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:-35.8,y:-151.6}},{t:this.shape_257,p:{x:-6.2,y:-125.2}},{t:this.shape_256,p:{x:1.4,y:-174.4}},{t:this.shape_255,p:{x:-5.4}},{t:this.shape_254,p:{x:-5.6,y:-130.6}},{t:this.shape_253,p:{x:1.9,y:-174.9}},{t:this.shape_252,p:{x:-0.1,y:-174.5}},{t:this.shape_251,p:{x:-22.3,y:-138.7}},{t:this.shape_250,p:{x:-22.3,y:-138.7}},{t:this.shape_249,p:{x:-17.1,y:-168.3}},{t:this.shape_248,p:{x:-31.8}},{t:this.shape_247,p:{x:-42.8,y:-113.1}},{t:this.shape_246,p:{x:-23.4}},{t:this.shape_245,p:{x:-52.4,y:-96.2}},{t:this.shape_244,p:{x:23}},{t:this.shape_243,p:{x:-8.7,y:-99.1}},{t:this.shape_242,p:{x:-8.7,y:-99.1}},{t:this.shape_241,p:{x:-7.4,y:-91.1}},{t:this.shape_240,p:{x:-7.4,y:-91.1}},{t:this.shape_239,p:{x:-49.7,y:-61.6}},{t:this.shape_238,p:{x:-16.1}},{t:this.shape_237,p:{x:-16.1,y:139.8}},{t:this.shape_236,p:{x:-5.8,y:141.9}},{t:this.shape_235},{t:this.shape_234,p:{x:-31,y:129.9}},{t:this.shape_233,p:{x:-31,y:129.9}},{t:this.shape_232,p:{x:-49.5}},{t:this.shape_231,p:{x:-56.4}},{t:this.shape_230,p:{x:-56.4}},{t:this.shape_229,p:{x:-56.5}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-58.3}},{t:this.shape_225,p:{x:-58.6}},{t:this.shape_224,p:{x:-58.6}},{t:this.shape_223,p:{x:31.7}},{t:this.shape_222,p:{x:31.7}},{t:this.shape_221,p:{x:30.7}},{t:this.shape_220,p:{x:40.8}},{t:this.shape_219,p:{x:37.6}},{t:this.shape_218,p:{x:37.6}},{t:this.shape_217,p:{x:40.5}},{t:this.shape_216,p:{x:41}},{t:this.shape_215},{t:this.shape_214,p:{x:-31.3}},{t:this.shape_213,p:{x:-31.3}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-30.9}},{t:this.shape_210},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_203,p:{x:-4.4}},{t:this.shape_202,p:{x:-4.4}},{t:this.shape_201,p:{x:-4.4}},{t:this.shape_200},{t:this.shape_199,p:{x:-4.4}},{t:this.shape_198},{t:this.shape_197,p:{x:-4.4}},{t:this.shape_196,p:{x:-4.3}},{t:this.shape_195},{t:this.shape_194,p:{x:30.8}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_191},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_186,p:{x:24}},{t:this.shape_185,p:{x:24}},{t:this.shape_184,p:{x:-48.8,y:-19.6}},{t:this.shape_183,p:{x:-48.8,y:-19.6}},{t:this.shape_182,p:{x:-49.6}},{t:this.shape_181,p:{x:-44.6,y:-19.7}},{t:this.shape_180,p:{x:43.5}},{t:this.shape_179,p:{x:43.5}},{t:this.shape_178,p:{x:45.4}},{t:this.shape_177,p:{x:48.2}},{t:this.shape_176,p:{x:51}},{t:this.shape_175,p:{x:42.1}},{t:this.shape_174,p:{x:38.8}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}}]}).to({state:[{t:this.shape_323,p:{x:-12.2,y:77.6}},{t:this.shape_322,p:{x:-12.2,y:77.6}},{t:this.shape_321,p:{x:-0.3,y:135.9}},{t:this.shape_320,p:{x:-0.3,y:135.9}},{t:this.shape_319,p:{x:-11.2}},{t:this.shape_318,p:{x:-18.5,y:77.3}},{t:this.shape_317,p:{x:-18.5,y:77.3}},{t:this.shape_316,p:{x:-23.8,y:63.9}},{t:this.shape_315,p:{x:-15.5,y:-9.7}},{t:this.shape_314,p:{x:-15.5,y:-9.7}},{t:this.shape_313,p:{x:-19.5,y:-10.6}},{t:this.shape_312,p:{x:-25.8}},{t:this.shape_311,p:{x:-25.8}},{t:this.shape_310,p:{x:-4.3}},{t:this.shape_309,p:{x:-4.3,y:-87.2}},{t:this.shape_308,p:{x:10.5,y:-143.4}},{t:this.shape_307,p:{x:10.5,y:-143.4}},{t:this.shape_306,p:{x:8,y:-139.8}},{t:this.shape_305,p:{x:-17}},{t:this.shape_304,p:{x:-17}},{t:this.shape_303,p:{x:9.4}},{t:this.shape_302,p:{x:12.3}},{t:this.shape_301,p:{x:-18.2,y:-110}},{t:this.shape_300},{t:this.shape_299,p:{x:-11.6,y:-115.9}},{t:this.shape_298,p:{x:-11.6,y:-115.9}},{t:this.shape_297,p:{x:-11.6}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294,p:{x:-6.2,y:-111.4}},{t:this.shape_293,p:{x:-6.1,y:-111.3}},{t:this.shape_292,p:{x:-18.4}},{t:this.shape_291,p:{x:-6,y:-115.6}},{t:this.shape_290},{t:this.shape_289,p:{x:-34.7,y:-94.1}},{t:this.shape_288,p:{x:-14.5,y:-74.5}},{t:this.shape_287,p:{x:-9.8}},{t:this.shape_286,p:{x:-11.6,y:-149.7}},{t:this.shape_285,p:{x:-11.6,y:-149.7}},{t:this.shape_284,p:{x:-18.9}},{t:this.shape_283,p:{x:7,y:-149.3}},{t:this.shape_282,p:{x:6.6,y:-149.7}},{t:this.shape_281,p:{x:6.6,y:-149.7}},{t:this.shape_280,p:{x:-17.5,y:-151.8}},{t:this.shape_279,p:{x:-17.2}},{t:this.shape_278,p:{x:-17.2,y:-152.1}},{t:this.shape_277,p:{x:-16.1,y:-155.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_270,p:{x:-17.4,y:-154.8}},{t:this.shape_269,p:{x:-17.8,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_267},{t:this.shape_266,p:{x:7.8}},{t:this.shape_265,p:{x:-0.8}},{t:this.shape_264,p:{x:-1.3}},{t:this.shape_263},{t:this.shape_262,p:{x:-16.3,y:-160.7}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:-35.8,y:-151.6}},{t:this.shape_257,p:{x:-6.2,y:-125.2}},{t:this.shape_256,p:{x:1.4,y:-174.4}},{t:this.shape_255,p:{x:-5.4}},{t:this.shape_254,p:{x:-5.6,y:-130.6}},{t:this.shape_253,p:{x:1.9,y:-174.9}},{t:this.shape_252,p:{x:-0.1,y:-174.5}},{t:this.shape_251,p:{x:-22.3,y:-138.7}},{t:this.shape_250,p:{x:-22.3,y:-138.7}},{t:this.shape_249,p:{x:-17.1,y:-168.3}},{t:this.shape_248,p:{x:-31.8}},{t:this.shape_247,p:{x:-42.8,y:-113.1}},{t:this.shape_246,p:{x:-23.4}},{t:this.shape_245,p:{x:-52.4,y:-96.2}},{t:this.shape_244,p:{x:23}},{t:this.shape_243,p:{x:-8.7,y:-99.1}},{t:this.shape_242,p:{x:-8.7,y:-99.1}},{t:this.shape_241,p:{x:-7.4,y:-91.1}},{t:this.shape_240,p:{x:-7.4,y:-91.1}},{t:this.shape_239,p:{x:-49.7,y:-61.6}},{t:this.shape_238,p:{x:-16.1}},{t:this.shape_237,p:{x:-16.1,y:139.8}},{t:this.shape_236,p:{x:-5.8,y:141.9}},{t:this.shape_235},{t:this.shape_234,p:{x:-31,y:129.9}},{t:this.shape_233,p:{x:-31,y:129.9}},{t:this.shape_232,p:{x:-49.5}},{t:this.shape_231,p:{x:-56.4}},{t:this.shape_230,p:{x:-56.4}},{t:this.shape_229,p:{x:-56.5}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-58.3}},{t:this.shape_225,p:{x:-58.6}},{t:this.shape_224,p:{x:-58.6}},{t:this.shape_223,p:{x:31.7}},{t:this.shape_222,p:{x:31.7}},{t:this.shape_221,p:{x:30.7}},{t:this.shape_220,p:{x:40.8}},{t:this.shape_219,p:{x:37.6}},{t:this.shape_218,p:{x:37.6}},{t:this.shape_217,p:{x:40.5}},{t:this.shape_216,p:{x:41}},{t:this.shape_215},{t:this.shape_214,p:{x:-31.3}},{t:this.shape_213,p:{x:-31.3}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-30.9}},{t:this.shape_210},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_203,p:{x:-4.4}},{t:this.shape_202,p:{x:-4.4}},{t:this.shape_201,p:{x:-4.4}},{t:this.shape_200},{t:this.shape_199,p:{x:-4.4}},{t:this.shape_198},{t:this.shape_197,p:{x:-4.4}},{t:this.shape_196,p:{x:-4.3}},{t:this.shape_195},{t:this.shape_194,p:{x:30.8}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_191},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_186,p:{x:24}},{t:this.shape_185,p:{x:24}},{t:this.shape_184,p:{x:-48.8,y:-19.6}},{t:this.shape_183,p:{x:-48.8,y:-19.6}},{t:this.shape_182,p:{x:-49.6}},{t:this.shape_181,p:{x:-44.6,y:-19.7}},{t:this.shape_180,p:{x:43.5}},{t:this.shape_179,p:{x:43.5}},{t:this.shape_178,p:{x:45.4}},{t:this.shape_177,p:{x:48.2}},{t:this.shape_176,p:{x:51}},{t:this.shape_175,p:{x:42.1}},{t:this.shape_174,p:{x:38.8}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}}]},6).to({state:[{t:this.shape_323,p:{x:-12.3,y:77.6}},{t:this.shape_322,p:{x:-12.3,y:77.6}},{t:this.shape_321,p:{x:-0.4,y:135.9}},{t:this.shape_320,p:{x:-0.4,y:135.9}},{t:this.shape_319,p:{x:-11.3}},{t:this.shape_318,p:{x:-18.6,y:77.3}},{t:this.shape_317,p:{x:-18.6,y:77.3}},{t:this.shape_316,p:{x:-23.8,y:63.9}},{t:this.shape_315,p:{x:-15.6,y:-9.7}},{t:this.shape_314,p:{x:-15.6,y:-9.7}},{t:this.shape_313,p:{x:-19.6,y:-10.6}},{t:this.shape_312,p:{x:-25.9}},{t:this.shape_311,p:{x:-25.9}},{t:this.shape_310,p:{x:-4.4}},{t:this.shape_309,p:{x:-4.4,y:-87.2}},{t:this.shape_308,p:{x:10.4,y:-143.4}},{t:this.shape_307,p:{x:10.4,y:-143.4}},{t:this.shape_306,p:{x:7.9,y:-139.8}},{t:this.shape_305,p:{x:-17.1}},{t:this.shape_304,p:{x:-17.1}},{t:this.shape_303,p:{x:9.3}},{t:this.shape_302,p:{x:12.2}},{t:this.shape_301,p:{x:-18.2,y:-110}},{t:this.shape_361},{t:this.shape_299,p:{x:-11.7,y:-115.9}},{t:this.shape_298,p:{x:-11.7,y:-115.9}},{t:this.shape_297,p:{x:-11.7}},{t:this.shape_360},{t:this.shape_359},{t:this.shape_294,p:{x:-6.3,y:-111.4}},{t:this.shape_293,p:{x:-6.2,y:-111.3}},{t:this.shape_292,p:{x:-18.5}},{t:this.shape_291,p:{x:-6.1,y:-115.6}},{t:this.shape_358},{t:this.shape_289,p:{x:-34.8,y:-94.1}},{t:this.shape_288,p:{x:-14.6,y:-74.5}},{t:this.shape_357,p:{x:-9.9,y:-73.4}},{t:this.shape_286,p:{x:-11.7,y:-149.7}},{t:this.shape_285,p:{x:-11.7,y:-149.7}},{t:this.shape_284,p:{x:-19}},{t:this.shape_283,p:{x:6.9,y:-149.3}},{t:this.shape_282,p:{x:6.5,y:-149.7}},{t:this.shape_281,p:{x:6.5,y:-149.7}},{t:this.shape_280,p:{x:-17.6,y:-151.8}},{t:this.shape_279,p:{x:-17.3}},{t:this.shape_278,p:{x:-17.3,y:-152.1}},{t:this.shape_277,p:{x:-16.2,y:-155.1}},{t:this.shape_270,p:{x:-17.5,y:-154.8}},{t:this.shape_269,p:{x:-17.9,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_356},{t:this.shape_266,p:{x:7.7}},{t:this.shape_265,p:{x:-0.8}},{t:this.shape_264,p:{x:-1.4}},{t:this.shape_355},{t:this.shape_262,p:{x:-16.4,y:-160.7}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_258,p:{x:-35.9,y:-151.6}},{t:this.shape_257,p:{x:-6.3,y:-125.2}},{t:this.shape_256,p:{x:1.3,y:-174.4}},{t:this.shape_255,p:{x:-5.5}},{t:this.shape_254,p:{x:-5.7,y:-130.6}},{t:this.shape_253,p:{x:1.8,y:-174.9}},{t:this.shape_252,p:{x:-0.2,y:-174.5}},{t:this.shape_251,p:{x:-22.4,y:-138.7}},{t:this.shape_250,p:{x:-22.4,y:-138.7}},{t:this.shape_249,p:{x:-17.2,y:-168.3}},{t:this.shape_248,p:{x:-31.9}},{t:this.shape_247,p:{x:-42.9,y:-113.1}},{t:this.shape_246,p:{x:-23.5}},{t:this.shape_245,p:{x:-52.5,y:-96.2}},{t:this.shape_244,p:{x:22.9}},{t:this.shape_351},{t:this.shape_240,p:{x:-8.8,y:-99.1}},{t:this.shape_350,p:{x:-7.4,y:-91.1}},{t:this.shape_242,p:{x:-7.4,y:-91.1}},{t:this.shape_239,p:{x:-49.8,y:-61.6}},{t:this.shape_238,p:{x:-16.2}},{t:this.shape_237,p:{x:-16.2,y:139.8}},{t:this.shape_236,p:{x:-5.9,y:141.9}},{t:this.shape_349},{t:this.shape_234,p:{x:-31.1,y:129.9}},{t:this.shape_233,p:{x:-31.1,y:129.9}},{t:this.shape_232,p:{x:-49.6}},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_223,p:{x:31.7}},{t:this.shape_222,p:{x:31.7}},{t:this.shape_221,p:{x:30.6}},{t:this.shape_220,p:{x:40.7}},{t:this.shape_219,p:{x:37.5}},{t:this.shape_218,p:{x:37.5}},{t:this.shape_217,p:{x:40.4}},{t:this.shape_216,p:{x:40.9}},{t:this.shape_340,p:{x:40.9}},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.7}},{t:this.shape_211,p:{x:-31}},{t:this.shape_339},{t:this.shape_209,p:{x:-4.5}},{t:this.shape_208,p:{x:-4.5}},{t:this.shape_207,p:{x:-4.5}},{t:this.shape_206,p:{x:-4.5}},{t:this.shape_205,p:{x:-4.5}},{t:this.shape_204,p:{x:-4.5}},{t:this.shape_203,p:{x:-4.5}},{t:this.shape_202,p:{x:-4.5}},{t:this.shape_201,p:{x:-4.5}},{t:this.shape_338},{t:this.shape_199,p:{x:-4.5}},{t:this.shape_337},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_336,p:{x:-4.1}},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.5}},{t:this.shape_192,p:{x:-7.5}},{t:this.shape_335},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_186,p:{x:23.9}},{t:this.shape_185,p:{x:23.9}},{t:this.shape_180,p:{x:43.4}},{t:this.shape_179,p:{x:43.4}},{t:this.shape_334},{t:this.shape_177,p:{x:48.1}},{t:this.shape_176,p:{x:50.9}},{t:this.shape_175,p:{x:42}},{t:this.shape_174,p:{x:38.7}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}}]},1).to({state:[{t:this.shape_323,p:{x:-12.2,y:77.6}},{t:this.shape_322,p:{x:-12.2,y:77.6}},{t:this.shape_321,p:{x:-0.2,y:135.9}},{t:this.shape_320,p:{x:-0.2,y:135.9}},{t:this.shape_319,p:{x:-11.2}},{t:this.shape_318,p:{x:-18.4,y:77.3}},{t:this.shape_317,p:{x:-18.4,y:77.3}},{t:this.shape_316,p:{x:-23.7,y:63.9}},{t:this.shape_315,p:{x:-15.4,y:-9.7}},{t:this.shape_314,p:{x:-15.4,y:-9.7}},{t:this.shape_313,p:{x:-19.4,y:-10.6}},{t:this.shape_312,p:{x:-25.8}},{t:this.shape_311,p:{x:-25.8}},{t:this.shape_310,p:{x:-4.3}},{t:this.shape_309,p:{x:-4.3,y:-87.2}},{t:this.shape_308,p:{x:10.5,y:-143.4}},{t:this.shape_307,p:{x:10.5,y:-143.4}},{t:this.shape_306,p:{x:8,y:-139.8}},{t:this.shape_305,p:{x:-16.9}},{t:this.shape_304,p:{x:-16.9}},{t:this.shape_303,p:{x:9.4}},{t:this.shape_302,p:{x:12.4}},{t:this.shape_301,p:{x:-18.1,y:-110}},{t:this.shape_392},{t:this.shape_299,p:{x:-11.5,y:-115.9}},{t:this.shape_298,p:{x:-11.5,y:-115.9}},{t:this.shape_297,p:{x:-11.5}},{t:this.shape_391},{t:this.shape_295},{t:this.shape_294,p:{x:-6.2,y:-111.4}},{t:this.shape_293,p:{x:-6.1,y:-111.3}},{t:this.shape_292,p:{x:-18.3}},{t:this.shape_291,p:{x:-6,y:-115.6}},{t:this.shape_290},{t:this.shape_289,p:{x:-34.6,y:-94.1}},{t:this.shape_288,p:{x:-14.5,y:-74.5}},{t:this.shape_287,p:{x:-9.8}},{t:this.shape_286,p:{x:-11.6,y:-149.7}},{t:this.shape_285,p:{x:-11.6,y:-149.7}},{t:this.shape_284,p:{x:-18.8}},{t:this.shape_283,p:{x:7.1,y:-149.3}},{t:this.shape_282,p:{x:6.7,y:-149.7}},{t:this.shape_281,p:{x:6.7,y:-149.7}},{t:this.shape_280,p:{x:-17.4,y:-151.8}},{t:this.shape_279,p:{x:-17.1}},{t:this.shape_278,p:{x:-17.1,y:-152.1}},{t:this.shape_277,p:{x:-16,y:-155.1}},{t:this.shape_270,p:{x:-17.4,y:-154.8}},{t:this.shape_269,p:{x:-17.8,y:-120.4}},{t:this.shape_268,p:{x:-18.9,y:-155.2}},{t:this.shape_390,p:{x:7}},{t:this.shape_266,p:{x:7.8}},{t:this.shape_265,p:{x:-0.7}},{t:this.shape_264,p:{x:-1.2}},{t:this.shape_389},{t:this.shape_262,p:{x:-16.3,y:-160.7}},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_258,p:{x:-35.8,y:-151.6}},{t:this.shape_257,p:{x:-6.2,y:-125.2}},{t:this.shape_256,p:{x:1.5,y:-174.4}},{t:this.shape_385,p:{x:-5.3,y:-128.3}},{t:this.shape_254,p:{x:-5.6,y:-130.6}},{t:this.shape_253,p:{x:2,y:-174.9}},{t:this.shape_252,p:{x:-0.1,y:-174.5}},{t:this.shape_251,p:{x:-22.3,y:-138.7}},{t:this.shape_250,p:{x:-22.3,y:-138.7}},{t:this.shape_249,p:{x:-17.1,y:-168.3}},{t:this.shape_248,p:{x:-31.8}},{t:this.shape_247,p:{x:-42.7,y:-113.1}},{t:this.shape_246,p:{x:-23.4}},{t:this.shape_245,p:{x:-52.3,y:-96.2}},{t:this.shape_244,p:{x:23.1}},{t:this.shape_241,p:{x:-8.6,y:-99.1}},{t:this.shape_384,p:{x:-8.6,y:-99.1}},{t:this.shape_243,p:{x:-7.3,y:-91.1}},{t:this.shape_240,p:{x:-7.3,y:-91.1}},{t:this.shape_239,p:{x:-49.7,y:-61.6}},{t:this.shape_238,p:{x:-16.1}},{t:this.shape_237,p:{x:-16.1,y:139.8}},{t:this.shape_236,p:{x:-5.7,y:141.9}},{t:this.shape_383},{t:this.shape_234,p:{x:-31,y:129.9}},{t:this.shape_233,p:{x:-31,y:129.9}},{t:this.shape_232,p:{x:-49.4}},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_223,p:{x:31.8}},{t:this.shape_222,p:{x:31.8}},{t:this.shape_221,p:{x:30.7}},{t:this.shape_220,p:{x:40.9}},{t:this.shape_219,p:{x:37.6}},{t:this.shape_218,p:{x:37.6}},{t:this.shape_217,p:{x:40.5}},{t:this.shape_374},{t:this.shape_340,p:{x:41.1}},{t:this.shape_214,p:{x:-31.3}},{t:this.shape_213,p:{x:-31.3}},{t:this.shape_212,p:{x:-31.5}},{t:this.shape_211,p:{x:-30.9}},{t:this.shape_373},{t:this.shape_209,p:{x:-4.3}},{t:this.shape_208,p:{x:-4.3}},{t:this.shape_207,p:{x:-4.3}},{t:this.shape_206,p:{x:-4.3}},{t:this.shape_205,p:{x:-4.3}},{t:this.shape_204,p:{x:-4.3}},{t:this.shape_372},{t:this.shape_371,p:{x:-4.3}},{t:this.shape_201,p:{x:-4.3}},{t:this.shape_370},{t:this.shape_199,p:{x:-4.3}},{t:this.shape_369},{t:this.shape_197,p:{x:-4.4}},{t:this.shape_196,p:{x:-4.3}},{t:this.shape_336,p:{x:-4}},{t:this.shape_194,p:{x:30.8}},{t:this.shape_193,p:{x:-34.3}},{t:this.shape_192,p:{x:-7.3}},{t:this.shape_368},{t:this.shape_190,p:{x:13.7}},{t:this.shape_189,p:{x:13.7}},{t:this.shape_188,p:{x:13.7}},{t:this.shape_187,p:{x:13.7}},{t:this.shape_186,p:{x:24}},{t:this.shape_185,p:{x:24}},{t:this.shape_184,p:{x:-33.4,y:-28.9}},{t:this.shape_183,p:{x:-33.4,y:-28.9}},{t:this.shape_367},{t:this.shape_181,p:{x:-29.2,y:-29}},{t:this.shape_180,p:{x:43.5}},{t:this.shape_179,p:{x:43.5}},{t:this.shape_178,p:{x:45.5}},{t:this.shape_177,p:{x:48.2}},{t:this.shape_176,p:{x:51}},{t:this.shape_175,p:{x:42.2}},{t:this.shape_174,p:{x:38.8}},{t:this.shape_366},{t:this.shape_365,p:{y:-151.8,x:-17.1}},{t:this.shape_274,p:{x:-17.1}},{t:this.shape_273,p:{x:-17.1,y:-151.8}},{t:this.shape_364,p:{y:-150}},{t:this.shape_271,p:{x:-18,y:-153.1}},{t:this.shape_363},{t:this.shape_172,p:{x:7.3,y:-149.6}},{t:this.shape_171,p:{x:7.3,y:-149.6}},{t:this.shape_170,p:{x:7.3,y:-149.6}},{t:this.shape_362},{t:this.shape_168,p:{x:6.5,y:-150.9}}]},3).to({state:[{t:this.shape_323,p:{x:-12.3,y:77.6}},{t:this.shape_322,p:{x:-12.3,y:77.6}},{t:this.shape_321,p:{x:-0.4,y:135.9}},{t:this.shape_320,p:{x:-0.4,y:135.9}},{t:this.shape_319,p:{x:-11.3}},{t:this.shape_318,p:{x:-18.6,y:77.3}},{t:this.shape_317,p:{x:-18.6,y:77.3}},{t:this.shape_316,p:{x:-23.8,y:63.9}},{t:this.shape_315,p:{x:-15.6,y:-9.7}},{t:this.shape_314,p:{x:-15.6,y:-9.7}},{t:this.shape_313,p:{x:-19.6,y:-10.6}},{t:this.shape_312,p:{x:-25.9}},{t:this.shape_311,p:{x:-25.9}},{t:this.shape_310,p:{x:-4.4}},{t:this.shape_309,p:{x:-4.4,y:-87.2}},{t:this.shape_308,p:{x:10.4,y:-143.4}},{t:this.shape_307,p:{x:10.4,y:-143.4}},{t:this.shape_306,p:{x:7.9,y:-139.8}},{t:this.shape_305,p:{x:-17.1}},{t:this.shape_304,p:{x:-17.1}},{t:this.shape_303,p:{x:9.3}},{t:this.shape_302,p:{x:12.2}},{t:this.shape_301,p:{x:-18.2,y:-110}},{t:this.shape_361},{t:this.shape_299,p:{x:-11.7,y:-115.9}},{t:this.shape_298,p:{x:-11.7,y:-115.9}},{t:this.shape_297,p:{x:-11.7}},{t:this.shape_360},{t:this.shape_359},{t:this.shape_294,p:{x:-6.3,y:-111.4}},{t:this.shape_293,p:{x:-6.2,y:-111.3}},{t:this.shape_292,p:{x:-18.5}},{t:this.shape_291,p:{x:-6.1,y:-115.6}},{t:this.shape_358},{t:this.shape_289,p:{x:-34.8,y:-94.1}},{t:this.shape_288,p:{x:-14.6,y:-74.5}},{t:this.shape_357,p:{x:-9.9,y:-73.4}},{t:this.shape_286,p:{x:-11.7,y:-149.7}},{t:this.shape_285,p:{x:-11.7,y:-149.7}},{t:this.shape_284,p:{x:-19}},{t:this.shape_283,p:{x:6.9,y:-149.3}},{t:this.shape_282,p:{x:6.5,y:-149.7}},{t:this.shape_281,p:{x:6.5,y:-149.7}},{t:this.shape_280,p:{x:-17.6,y:-151.8}},{t:this.shape_279,p:{x:-17.3}},{t:this.shape_278,p:{x:-17.3,y:-152.1}},{t:this.shape_277,p:{x:-16.2,y:-155.1}},{t:this.shape_270,p:{x:-17.5,y:-154.8}},{t:this.shape_269,p:{x:-17.9,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_356},{t:this.shape_266,p:{x:7.7}},{t:this.shape_265,p:{x:-0.8}},{t:this.shape_264,p:{x:-1.4}},{t:this.shape_355},{t:this.shape_262,p:{x:-16.4,y:-160.7}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_258,p:{x:-35.9,y:-151.6}},{t:this.shape_257,p:{x:-6.3,y:-125.2}},{t:this.shape_256,p:{x:1.3,y:-174.4}},{t:this.shape_255,p:{x:-5.5}},{t:this.shape_254,p:{x:-5.7,y:-130.6}},{t:this.shape_253,p:{x:1.8,y:-174.9}},{t:this.shape_252,p:{x:-0.2,y:-174.5}},{t:this.shape_251,p:{x:-22.4,y:-138.7}},{t:this.shape_250,p:{x:-22.4,y:-138.7}},{t:this.shape_249,p:{x:-17.2,y:-168.3}},{t:this.shape_248,p:{x:-31.9}},{t:this.shape_247,p:{x:-42.9,y:-113.1}},{t:this.shape_246,p:{x:-23.5}},{t:this.shape_245,p:{x:-52.5,y:-96.2}},{t:this.shape_244,p:{x:22.9}},{t:this.shape_351},{t:this.shape_240,p:{x:-8.8,y:-99.1}},{t:this.shape_350,p:{x:-7.4,y:-91.1}},{t:this.shape_242,p:{x:-7.4,y:-91.1}},{t:this.shape_239,p:{x:-49.8,y:-61.6}},{t:this.shape_238,p:{x:-16.2}},{t:this.shape_237,p:{x:-16.2,y:139.8}},{t:this.shape_236,p:{x:-5.9,y:141.9}},{t:this.shape_349},{t:this.shape_234,p:{x:-31.1,y:129.9}},{t:this.shape_233,p:{x:-31.1,y:129.9}},{t:this.shape_232,p:{x:-49.6}},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_223,p:{x:31.7}},{t:this.shape_222,p:{x:31.7}},{t:this.shape_221,p:{x:30.6}},{t:this.shape_220,p:{x:40.7}},{t:this.shape_219,p:{x:37.5}},{t:this.shape_218,p:{x:37.5}},{t:this.shape_217,p:{x:40.4}},{t:this.shape_216,p:{x:40.9}},{t:this.shape_340,p:{x:40.9}},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.7}},{t:this.shape_211,p:{x:-31}},{t:this.shape_339},{t:this.shape_209,p:{x:-4.5}},{t:this.shape_208,p:{x:-4.5}},{t:this.shape_207,p:{x:-4.5}},{t:this.shape_206,p:{x:-4.5}},{t:this.shape_205,p:{x:-4.5}},{t:this.shape_204,p:{x:-4.5}},{t:this.shape_203,p:{x:-4.5}},{t:this.shape_202,p:{x:-4.5}},{t:this.shape_201,p:{x:-4.5}},{t:this.shape_338},{t:this.shape_199,p:{x:-4.5}},{t:this.shape_337},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_336,p:{x:-4.1}},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.5}},{t:this.shape_192,p:{x:-7.5}},{t:this.shape_335},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_186,p:{x:23.9}},{t:this.shape_185,p:{x:23.9}},{t:this.shape_180,p:{x:43.4}},{t:this.shape_179,p:{x:43.4}},{t:this.shape_334},{t:this.shape_177,p:{x:48.1}},{t:this.shape_176,p:{x:50.9}},{t:this.shape_175,p:{x:42}},{t:this.shape_174,p:{x:38.7}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}}]},7).to({state:[{t:this.shape_323,p:{x:-12.2,y:77.6}},{t:this.shape_322,p:{x:-12.2,y:77.6}},{t:this.shape_321,p:{x:-0.3,y:135.9}},{t:this.shape_320,p:{x:-0.3,y:135.9}},{t:this.shape_319,p:{x:-11.2}},{t:this.shape_318,p:{x:-18.5,y:77.3}},{t:this.shape_317,p:{x:-18.5,y:77.3}},{t:this.shape_316,p:{x:-23.8,y:63.9}},{t:this.shape_315,p:{x:-15.5,y:-9.7}},{t:this.shape_314,p:{x:-15.5,y:-9.7}},{t:this.shape_313,p:{x:-19.5,y:-10.6}},{t:this.shape_312,p:{x:-25.8}},{t:this.shape_311,p:{x:-25.8}},{t:this.shape_310,p:{x:-4.3}},{t:this.shape_309,p:{x:-4.3,y:-87.2}},{t:this.shape_308,p:{x:10.5,y:-143.4}},{t:this.shape_307,p:{x:10.5,y:-143.4}},{t:this.shape_306,p:{x:8,y:-139.8}},{t:this.shape_305,p:{x:-17}},{t:this.shape_304,p:{x:-17}},{t:this.shape_303,p:{x:9.4}},{t:this.shape_302,p:{x:12.3}},{t:this.shape_301,p:{x:-18.2,y:-110}},{t:this.shape_300},{t:this.shape_299,p:{x:-11.6,y:-115.9}},{t:this.shape_298,p:{x:-11.6,y:-115.9}},{t:this.shape_297,p:{x:-11.6}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294,p:{x:-6.2,y:-111.4}},{t:this.shape_293,p:{x:-6.1,y:-111.3}},{t:this.shape_292,p:{x:-18.4}},{t:this.shape_291,p:{x:-6,y:-115.6}},{t:this.shape_290},{t:this.shape_289,p:{x:-34.7,y:-94.1}},{t:this.shape_288,p:{x:-14.5,y:-74.5}},{t:this.shape_287,p:{x:-9.8}},{t:this.shape_286,p:{x:-11.6,y:-149.7}},{t:this.shape_285,p:{x:-11.6,y:-149.7}},{t:this.shape_284,p:{x:-18.9}},{t:this.shape_283,p:{x:7,y:-149.3}},{t:this.shape_282,p:{x:6.6,y:-149.7}},{t:this.shape_281,p:{x:6.6,y:-149.7}},{t:this.shape_280,p:{x:-17.5,y:-151.8}},{t:this.shape_279,p:{x:-17.2}},{t:this.shape_278,p:{x:-17.2,y:-152.1}},{t:this.shape_277,p:{x:-16.1,y:-155.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}},{t:this.shape_270,p:{x:-17.4,y:-154.8}},{t:this.shape_269,p:{x:-17.8,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_267},{t:this.shape_266,p:{x:7.8}},{t:this.shape_265,p:{x:-0.8}},{t:this.shape_264,p:{x:-1.3}},{t:this.shape_263},{t:this.shape_262,p:{x:-16.3,y:-160.7}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:-35.8,y:-151.6}},{t:this.shape_257,p:{x:-6.2,y:-125.2}},{t:this.shape_256,p:{x:1.4,y:-174.4}},{t:this.shape_255,p:{x:-5.4}},{t:this.shape_254,p:{x:-5.6,y:-130.6}},{t:this.shape_253,p:{x:1.9,y:-174.9}},{t:this.shape_252,p:{x:-0.1,y:-174.5}},{t:this.shape_251,p:{x:-22.3,y:-138.7}},{t:this.shape_250,p:{x:-22.3,y:-138.7}},{t:this.shape_249,p:{x:-17.1,y:-168.3}},{t:this.shape_248,p:{x:-31.8}},{t:this.shape_247,p:{x:-42.8,y:-113.1}},{t:this.shape_246,p:{x:-23.4}},{t:this.shape_245,p:{x:-52.4,y:-96.2}},{t:this.shape_244,p:{x:23}},{t:this.shape_243,p:{x:-8.7,y:-99.1}},{t:this.shape_242,p:{x:-8.7,y:-99.1}},{t:this.shape_241,p:{x:-7.4,y:-91.1}},{t:this.shape_240,p:{x:-7.4,y:-91.1}},{t:this.shape_239,p:{x:-49.7,y:-61.6}},{t:this.shape_238,p:{x:-16.1}},{t:this.shape_237,p:{x:-16.1,y:139.8}},{t:this.shape_236,p:{x:-5.8,y:141.9}},{t:this.shape_235},{t:this.shape_234,p:{x:-31,y:129.9}},{t:this.shape_233,p:{x:-31,y:129.9}},{t:this.shape_232,p:{x:-49.5}},{t:this.shape_231,p:{x:-56.4}},{t:this.shape_230,p:{x:-56.4}},{t:this.shape_229,p:{x:-56.5}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-58.3}},{t:this.shape_225,p:{x:-58.6}},{t:this.shape_224,p:{x:-58.6}},{t:this.shape_223,p:{x:31.7}},{t:this.shape_222,p:{x:31.7}},{t:this.shape_221,p:{x:30.7}},{t:this.shape_220,p:{x:40.8}},{t:this.shape_219,p:{x:37.6}},{t:this.shape_218,p:{x:37.6}},{t:this.shape_217,p:{x:40.5}},{t:this.shape_216,p:{x:41}},{t:this.shape_215},{t:this.shape_214,p:{x:-31.3}},{t:this.shape_213,p:{x:-31.3}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-30.9}},{t:this.shape_210},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_203,p:{x:-4.4}},{t:this.shape_202,p:{x:-4.4}},{t:this.shape_201,p:{x:-4.4}},{t:this.shape_200},{t:this.shape_199,p:{x:-4.4}},{t:this.shape_198},{t:this.shape_197,p:{x:-4.4}},{t:this.shape_196,p:{x:-4.3}},{t:this.shape_195},{t:this.shape_194,p:{x:30.8}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_191},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_186,p:{x:24}},{t:this.shape_185,p:{x:24}},{t:this.shape_184,p:{x:-48.8,y:-19.6}},{t:this.shape_183,p:{x:-48.8,y:-19.6}},{t:this.shape_182,p:{x:-49.6}},{t:this.shape_181,p:{x:-44.6,y:-19.7}},{t:this.shape_180,p:{x:43.5}},{t:this.shape_179,p:{x:43.5}},{t:this.shape_178,p:{x:45.4}},{t:this.shape_177,p:{x:48.2}},{t:this.shape_176,p:{x:51}},{t:this.shape_175,p:{x:42.1}},{t:this.shape_174,p:{x:38.8}}]},3).to({state:[]},2).to({state:[{t:this.shape_323,p:{x:-12.3,y:77.6}},{t:this.shape_322,p:{x:-12.3,y:77.6}},{t:this.shape_321,p:{x:-0.3,y:135.9}},{t:this.shape_320,p:{x:-0.3,y:135.9}},{t:this.shape_319,p:{x:-11.3}},{t:this.shape_318,p:{x:-18.5,y:77.3}},{t:this.shape_317,p:{x:-18.5,y:77.3}},{t:this.shape_316,p:{x:-23.8,y:63.9}},{t:this.shape_315,p:{x:-15.5,y:-9.7}},{t:this.shape_314,p:{x:-15.5,y:-9.7}},{t:this.shape_313,p:{x:-19.5,y:-10.6}},{t:this.shape_312,p:{x:-25.9}},{t:this.shape_311,p:{x:-25.9}},{t:this.shape_310,p:{x:-4.4}},{t:this.shape_309,p:{x:-4.4,y:-87.2}},{t:this.shape_308,p:{x:10.4,y:-143.4}},{t:this.shape_307,p:{x:10.4,y:-143.4}},{t:this.shape_306,p:{x:7.9,y:-139.8}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_303,p:{x:9.3}},{t:this.shape_302,p:{x:12.3}},{t:this.shape_301,p:{x:-18.2,y:-110}},{t:this.shape_422},{t:this.shape_299,p:{x:-11.6,y:-115.9}},{t:this.shape_298,p:{x:-11.6,y:-115.9}},{t:this.shape_297,p:{x:-11.6}},{t:this.shape_421},{t:this.shape_420},{t:this.shape_294,p:{x:-6.3,y:-111.4}},{t:this.shape_293,p:{x:-6.2,y:-111.3}},{t:this.shape_292,p:{x:-18.4}},{t:this.shape_291,p:{x:-6.1,y:-115.6}},{t:this.shape_419},{t:this.shape_289,p:{x:-34.7,y:-94.1}},{t:this.shape_288,p:{x:-14.6,y:-74.5}},{t:this.shape_287,p:{x:-9.9}},{t:this.shape_286,p:{x:-11.7,y:-149.7}},{t:this.shape_285,p:{x:-11.7,y:-149.7}},{t:this.shape_284,p:{x:-18.9}},{t:this.shape_283,p:{x:7,y:-149.3}},{t:this.shape_282,p:{x:6.6,y:-149.7}},{t:this.shape_281,p:{x:6.6,y:-149.7}},{t:this.shape_280,p:{x:-17.5,y:-151.8}},{t:this.shape_279,p:{x:-17.2}},{t:this.shape_278,p:{x:-17.2,y:-152.1}},{t:this.shape_277,p:{x:-16.1,y:-155.1}},{t:this.shape_270,p:{x:-17.5,y:-154.8}},{t:this.shape_269,p:{x:-17.9,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_390,p:{x:6.9}},{t:this.shape_266,p:{x:7.7}},{t:this.shape_265,p:{x:-0.8}},{t:this.shape_264,p:{x:-1.3}},{t:this.shape_418},{t:this.shape_262,p:{x:-16.4,y:-160.7}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_258,p:{x:-35.9,y:-151.6}},{t:this.shape_257,p:{x:-6.3,y:-125.2}},{t:this.shape_414},{t:this.shape_385,p:{x:-5.4,y:-128.3}},{t:this.shape_254,p:{x:-5.7,y:-130.6}},{t:this.shape_253,p:{x:1.9,y:-174.9}},{t:this.shape_252,p:{x:-0.2,y:-174.5}},{t:this.shape_251,p:{x:-22.4,y:-138.7}},{t:this.shape_250,p:{x:-22.4,y:-138.7}},{t:this.shape_249,p:{x:-17.2,y:-168.3}},{t:this.shape_248,p:{x:-31.9}},{t:this.shape_247,p:{x:-42.8,y:-113.1}},{t:this.shape_246,p:{x:-23.5}},{t:this.shape_245,p:{x:-52.4,y:-96.2}},{t:this.shape_244,p:{x:23}},{t:this.shape_241,p:{x:-8.7,y:-99.1}},{t:this.shape_240,p:{x:-8.7,y:-99.1}},{t:this.shape_350,p:{x:-7.4,y:-91.1}},{t:this.shape_242,p:{x:-7.4,y:-91.1}},{t:this.shape_239,p:{x:-49.8,y:-61.6}},{t:this.shape_238,p:{x:-16.2}},{t:this.shape_237,p:{x:-16.2,y:139.8}},{t:this.shape_236,p:{x:-5.8,y:141.9}},{t:this.shape_413},{t:this.shape_234,p:{x:-31.1,y:129.9}},{t:this.shape_233,p:{x:-31.1,y:129.9}},{t:this.shape_232,p:{x:-49.5}},{t:this.shape_231,p:{x:-56.5}},{t:this.shape_230,p:{x:-56.5}},{t:this.shape_229,p:{x:-56.6}},{t:this.shape_412},{t:this.shape_411},{t:this.shape_226,p:{x:-58.3}},{t:this.shape_410},{t:this.shape_224,p:{x:-58.6}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-31}},{t:this.shape_339},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_400},{t:this.shape_371,p:{x:-4.4}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_395},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_394},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_186,p:{x:23.9}},{t:this.shape_185,p:{x:23.9}},{t:this.shape_184,p:{x:-48.8,y:-19.6}},{t:this.shape_183,p:{x:-48.8,y:-19.6}},{t:this.shape_182,p:{x:-49.6}},{t:this.shape_393},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}}]},54).to({state:[{t:this.shape_323,p:{x:-12.3,y:77.6}},{t:this.shape_322,p:{x:-12.3,y:77.6}},{t:this.shape_321,p:{x:-0.4,y:135.9}},{t:this.shape_320,p:{x:-0.4,y:135.9}},{t:this.shape_319,p:{x:-11.3}},{t:this.shape_460},{t:this.shape_459},{t:this.shape_316,p:{x:-23.9,y:63.9}},{t:this.shape_458},{t:this.shape_457},{t:this.shape_313,p:{x:-19.6,y:-10.6}},{t:this.shape_456},{t:this.shape_455,p:{x:-25.9,y:-87.4}},{t:this.shape_310,p:{x:-4.4}},{t:this.shape_309,p:{x:-4.4,y:-87.2}},{t:this.shape_308,p:{x:10.4,y:-143.4}},{t:this.shape_307,p:{x:10.4,y:-143.4}},{t:this.shape_306,p:{x:7.9,y:-139.8}},{t:this.shape_454},{t:this.shape_453},{t:this.shape_303,p:{x:9.3}},{t:this.shape_302,p:{x:12.2}},{t:this.shape_301,p:{x:-18.3,y:-110}},{t:this.shape_361},{t:this.shape_299,p:{x:-11.7,y:-115.9}},{t:this.shape_298,p:{x:-11.7,y:-115.9}},{t:this.shape_297,p:{x:-11.7}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_294,p:{x:-6.3,y:-111.4}},{t:this.shape_293,p:{x:-6.2,y:-111.3}},{t:this.shape_292,p:{x:-18.5}},{t:this.shape_291,p:{x:-6.1,y:-115.6}},{t:this.shape_358},{t:this.shape_289,p:{x:-34.8,y:-94.1}},{t:this.shape_288,p:{x:-14.6,y:-74.5}},{t:this.shape_357,p:{x:-9.9,y:-73.4}},{t:this.shape_286,p:{x:-11.7,y:-149.7}},{t:this.shape_285,p:{x:-11.7,y:-149.7}},{t:this.shape_450},{t:this.shape_283,p:{x:6.9,y:-149.3}},{t:this.shape_282,p:{x:6.5,y:-149.7}},{t:this.shape_281,p:{x:6.5,y:-149.7}},{t:this.shape_280,p:{x:-17.6,y:-151.8}},{t:this.shape_279,p:{x:-17.3}},{t:this.shape_278,p:{x:-17.3,y:-152.1}},{t:this.shape_449},{t:this.shape_277,p:{x:-16.2,y:-155.1}},{t:this.shape_270,p:{x:-17.5,y:-154.8}},{t:this.shape_269,p:{x:-17.9,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_356},{t:this.shape_266,p:{x:7.7}},{t:this.shape_265,p:{x:-0.9}},{t:this.shape_264,p:{x:-1.4}},{t:this.shape_355},{t:this.shape_262,p:{x:-16.4,y:-160.7}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_258,p:{x:-35.9,y:-151.6}},{t:this.shape_257,p:{x:-6.3,y:-125.2}},{t:this.shape_256,p:{x:1.3,y:-174.4}},{t:this.shape_255,p:{x:-5.5}},{t:this.shape_254,p:{x:-5.7,y:-130.6}},{t:this.shape_253,p:{x:1.8,y:-174.9}},{t:this.shape_252,p:{x:-0.2,y:-174.5}},{t:this.shape_251,p:{x:-22.4,y:-138.7}},{t:this.shape_250,p:{x:-22.4,y:-138.7}},{t:this.shape_249,p:{x:-17.2,y:-168.3}},{t:this.shape_248,p:{x:-31.9}},{t:this.shape_247,p:{x:-42.9,y:-113.1}},{t:this.shape_246,p:{x:-23.5}},{t:this.shape_245,p:{x:-52.5,y:-96.2}},{t:this.shape_244,p:{x:22.9}},{t:this.shape_350,p:{x:-8.8,y:-99.1}},{t:this.shape_384,p:{x:-8.8,y:-99.1}},{t:this.shape_243,p:{x:-7.5,y:-91.1}},{t:this.shape_240,p:{x:-7.5,y:-91.1}},{t:this.shape_239,p:{x:-49.8,y:-61.6}},{t:this.shape_238,p:{x:-16.2}},{t:this.shape_237,p:{x:-16.2,y:139.8}},{t:this.shape_236,p:{x:-5.9,y:141.9}},{t:this.shape_349},{t:this.shape_234,p:{x:-31.1,y:129.9}},{t:this.shape_233,p:{x:-31.1,y:129.9}},{t:this.shape_232,p:{x:-49.6}},{t:this.shape_231,p:{x:-56.5}},{t:this.shape_230,p:{x:-56.5}},{t:this.shape_229,p:{x:-56.6}},{t:this.shape_448},{t:this.shape_447},{t:this.shape_226,p:{x:-58.4}},{t:this.shape_225,p:{x:-58.7}},{t:this.shape_224,p:{x:-58.7}},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.7}},{t:this.shape_211,p:{x:-31}},{t:this.shape_426},{t:this.shape_209,p:{x:-4.5}},{t:this.shape_208,p:{x:-4.5}},{t:this.shape_207,p:{x:-4.5}},{t:this.shape_206,p:{x:-4.5}},{t:this.shape_205,p:{x:-4.5}},{t:this.shape_204,p:{x:-4.5}},{t:this.shape_203,p:{x:-4.5}},{t:this.shape_202,p:{x:-4.5}},{t:this.shape_201,p:{x:-4.5}},{t:this.shape_338},{t:this.shape_199,p:{x:-4.5}},{t:this.shape_337},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_336,p:{x:-4.1}},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.5}},{t:this.shape_192,p:{x:-7.5}},{t:this.shape_335},{t:this.shape_190,p:{x:13.5}},{t:this.shape_189,p:{x:13.5}},{t:this.shape_188,p:{x:13.5}},{t:this.shape_187,p:{x:13.5}},{t:this.shape_184,p:{x:-48.8,y:-19.6}},{t:this.shape_183,p:{x:-48.8,y:-19.6}},{t:this.shape_182,p:{x:-49.7}},{t:this.shape_425},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}}]},5).to({state:[{t:this.shape_323,p:{x:-12.3,y:77.5}},{t:this.shape_322,p:{x:-12.3,y:77.5}},{t:this.shape_522},{t:this.shape_460},{t:this.shape_459},{t:this.shape_316,p:{x:-23.8,y:63.8}},{t:this.shape_315,p:{x:-15.5,y:-9.7}},{t:this.shape_314,p:{x:-15.5,y:-9.7}},{t:this.shape_313,p:{x:-19.5,y:-10.6}},{t:this.shape_521,p:{x:-41.4}},{t:this.shape_520,p:{x:-41.4}},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517,p:{x:-51.3,y:-19.2}},{t:this.shape_516},{t:this.shape_455,p:{x:-25.9,y:-87.4}},{t:this.shape_515},{t:this.shape_309,p:{x:-4.4,y:-87.2}},{t:this.shape_308,p:{x:10.4,y:-143.4}},{t:this.shape_307,p:{x:10.4,y:-143.4}},{t:this.shape_306,p:{x:7.9,y:-139.9}},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512,p:{x:-54.1}},{t:this.shape_301,p:{x:-18.2,y:-110.1}},{t:this.shape_511},{t:this.shape_510,p:{x:16.9,y:-84.7}},{t:this.shape_299,p:{x:-11.6,y:-115.9}},{t:this.shape_298,p:{x:-11.6,y:-115.9}},{t:this.shape_509},{t:this.shape_421},{t:this.shape_420},{t:this.shape_294,p:{x:-6.3,y:-111.5}},{t:this.shape_293,p:{x:-6.2,y:-111.4}},{t:this.shape_508},{t:this.shape_291,p:{x:-6.1,y:-115.6}},{t:this.shape_507},{t:this.shape_289,p:{x:-34.7,y:-94.2}},{t:this.shape_288,p:{x:-14.6,y:-74.5}},{t:this.shape_287,p:{x:-9.9}},{t:this.shape_286,p:{x:-11.7,y:-149.7}},{t:this.shape_285,p:{x:-11.7,y:-149.7}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_283,p:{x:7,y:-149.3}},{t:this.shape_282,p:{x:6.6,y:-149.7}},{t:this.shape_281,p:{x:6.6,y:-149.7}},{t:this.shape_280,p:{x:-17.5,y:-151.8}},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484,p:{x:-17.1}},{t:this.shape_365,p:{y:-153,x:-17.1}},{t:this.shape_483,p:{x:-17.1}},{t:this.shape_273,p:{x:-17.1,y:-153}},{t:this.shape_364,p:{y:-151.2}},{t:this.shape_271,p:{x:-18,y:-154.3}},{t:this.shape_482},{t:this.shape_172,p:{x:6.9,y:-150.8}},{t:this.shape_171,p:{x:6.9,y:-150.8}},{t:this.shape_170,p:{x:6.9,y:-150.8}},{t:this.shape_481},{t:this.shape_168,p:{x:6.1,y:-152.1}},{t:this.shape_277,p:{x:-16.2,y:-155.1}},{t:this.shape_270,p:{x:-17.5,y:-154.9}},{t:this.shape_269,p:{x:-17.9,y:-120.4}},{t:this.shape_480},{t:this.shape_356},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_418},{t:this.shape_262,p:{x:-16.4,y:-160.8}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_476},{t:this.shape_258,p:{x:-35.9,y:-151.7}},{t:this.shape_257,p:{x:-6.3,y:-125.3}},{t:this.shape_256,p:{x:1.4,y:-174.4}},{t:this.shape_385,p:{x:-5.4,y:-128.4}},{t:this.shape_254,p:{x:-5.7,y:-130.7}},{t:this.shape_253,p:{x:1.9,y:-174.9}},{t:this.shape_475},{t:this.shape_251,p:{x:-22.4,y:-138.8}},{t:this.shape_250,p:{x:-22.4,y:-138.8}},{t:this.shape_249,p:{x:-17.2,y:-168.3}},{t:this.shape_474},{t:this.shape_247,p:{x:-42.8,y:-113.1}},{t:this.shape_473},{t:this.shape_245,p:{x:-52.4,y:-96.2}},{t:this.shape_472},{t:this.shape_471,p:{x:-8.7,y:-99.1}},{t:this.shape_240,p:{x:-8.7,y:-99.1}},{t:this.shape_470},{t:this.shape_242,p:{x:-7.4,y:-91.1}},{t:this.shape_469,p:{x:-49.6}},{t:this.shape_239,p:{x:-49.8,y:-61.6}},{t:this.shape_468,p:{x:-46.8}},{t:this.shape_467,p:{x:-54.7}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_237,p:{x:-16.2,y:139.7}},{t:this.shape_234,p:{x:-31.1,y:129.8}},{t:this.shape_233,p:{x:-31.1,y:129.8}},{t:this.shape_463},{t:this.shape_321,p:{x:-0.3,y:134.9}},{t:this.shape_320,p:{x:-0.3,y:134.9}},{t:this.shape_236,p:{x:-5.8,y:140.9}},{t:this.shape_462},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-31}},{t:this.shape_339},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_400},{t:this.shape_371,p:{x:-4.4}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_395},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_394},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_461}]},3).to({state:[{t:this.shape_323,p:{x:-12.4,y:77.5}},{t:this.shape_322,p:{x:-12.4,y:77.5}},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_318,p:{x:-18.6,y:77.2}},{t:this.shape_317,p:{x:-18.6,y:77.2}},{t:this.shape_316,p:{x:-23.9,y:63.8}},{t:this.shape_315,p:{x:-15.6,y:-9.8}},{t:this.shape_314,p:{x:-15.6,y:-9.8}},{t:this.shape_313,p:{x:-19.6,y:-10.7}},{t:this.shape_521,p:{x:-41.5}},{t:this.shape_520,p:{x:-41.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_517,p:{x:-51.4,y:-19.3}},{t:this.shape_575},{t:this.shape_455,p:{x:-26,y:-87.5}},{t:this.shape_574},{t:this.shape_309,p:{x:-4.5,y:-87.3}},{t:this.shape_308,p:{x:10.3,y:-143.5}},{t:this.shape_307,p:{x:10.3,y:-143.5}},{t:this.shape_306,p:{x:7.8,y:-139.9}},{t:this.shape_573},{t:this.shape_572},{t:this.shape_512,p:{x:-54.2}},{t:this.shape_301,p:{x:-18.3,y:-110.1}},{t:this.shape_571},{t:this.shape_570},{t:this.shape_510,p:{x:16.8,y:-84.8}},{t:this.shape_299,p:{x:-11.7,y:-116}},{t:this.shape_298,p:{x:-11.7,y:-116}},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_294,p:{x:-6.4,y:-111.5}},{t:this.shape_293,p:{x:-6.3,y:-111.4}},{t:this.shape_566},{t:this.shape_291,p:{x:-6.2,y:-115.7}},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_289,p:{x:-34.8,y:-94.2}},{t:this.shape_288,p:{x:-14.7,y:-74.6}},{t:this.shape_357,p:{x:-10,y:-73.5}},{t:this.shape_286,p:{x:-11.8,y:-149.8}},{t:this.shape_285,p:{x:-11.8,y:-149.8}},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_283,p:{x:6.9,y:-149.4}},{t:this.shape_282,p:{x:6.5,y:-149.8}},{t:this.shape_281,p:{x:6.5,y:-149.8}},{t:this.shape_280,p:{x:-17.6,y:-151.9}},{t:this.shape_545},{t:this.shape_278,p:{x:-17.3,y:-152.2}},{t:this.shape_277,p:{x:-16.3,y:-155.2}},{t:this.shape_484,p:{x:-17.4}},{t:this.shape_365,p:{y:-153,x:-17.4}},{t:this.shape_483,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-153}},{t:this.shape_544},{t:this.shape_271,p:{x:-18.2,y:-154.3}},{t:this.shape_543},{t:this.shape_172,p:{x:6.7,y:-150.8}},{t:this.shape_171,p:{x:6.7,y:-150.8}},{t:this.shape_170,p:{x:6.7,y:-150.8}},{t:this.shape_542},{t:this.shape_168,p:{x:5.8,y:-152.1}},{t:this.shape_270,p:{x:-17.6,y:-154.9}},{t:this.shape_269,p:{x:-18,y:-120.5}},{t:this.shape_268,p:{x:-19.1,y:-155.3}},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_262,p:{x:-16.5,y:-160.8}},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_258,p:{x:-36,y:-151.7}},{t:this.shape_533},{t:this.shape_256,p:{x:1.3,y:-174.5}},{t:this.shape_532},{t:this.shape_254,p:{x:-5.8,y:-130.7}},{t:this.shape_253,p:{x:1.8,y:-175}},{t:this.shape_252,p:{x:-0.3,y:-174.6}},{t:this.shape_251,p:{x:-22.5,y:-138.8}},{t:this.shape_250,p:{x:-22.5,y:-138.8}},{t:this.shape_249,p:{x:-17.3,y:-168.4}},{t:this.shape_531},{t:this.shape_247,p:{x:-42.9,y:-113.2}},{t:this.shape_530},{t:this.shape_245,p:{x:-52.5,y:-96.3}},{t:this.shape_529},{t:this.shape_243,p:{x:-8.8,y:-99.2}},{t:this.shape_384,p:{x:-8.8,y:-99.2}},{t:this.shape_471,p:{x:-7.5,y:-91.2}},{t:this.shape_240,p:{x:-7.5,y:-91.2}},{t:this.shape_469,p:{x:-49.7}},{t:this.shape_239,p:{x:-49.9,y:-61.7}},{t:this.shape_468,p:{x:-46.9}},{t:this.shape_467,p:{x:-54.8}},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_237,p:{x:-16.3,y:139.7}},{t:this.shape_525},{t:this.shape_524},{t:this.shape_234,p:{x:-31.2,y:129.8}},{t:this.shape_233,p:{x:-31.2,y:129.8}},{t:this.shape_321,p:{x:-0.3,y:134.9}},{t:this.shape_320,p:{x:-0.3,y:134.9}},{t:this.shape_236,p:{x:-5.8,y:140.9}},{t:this.shape_462},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-31}},{t:this.shape_339},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_400},{t:this.shape_371,p:{x:-4.4}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_395},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_394},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_523}]},3).to({state:[{t:this.shape_323,p:{x:-12.3,y:77.5}},{t:this.shape_322,p:{x:-12.3,y:77.5}},{t:this.shape_522},{t:this.shape_460},{t:this.shape_459},{t:this.shape_316,p:{x:-23.8,y:63.8}},{t:this.shape_315,p:{x:-15.5,y:-9.7}},{t:this.shape_314,p:{x:-15.5,y:-9.7}},{t:this.shape_313,p:{x:-19.5,y:-10.6}},{t:this.shape_521,p:{x:-41.4}},{t:this.shape_520,p:{x:-41.4}},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517,p:{x:-51.3,y:-19.2}},{t:this.shape_516},{t:this.shape_455,p:{x:-25.9,y:-87.4}},{t:this.shape_515},{t:this.shape_309,p:{x:-4.4,y:-87.2}},{t:this.shape_308,p:{x:10.4,y:-143.4}},{t:this.shape_307,p:{x:10.4,y:-143.4}},{t:this.shape_306,p:{x:7.9,y:-139.9}},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512,p:{x:-54.1}},{t:this.shape_301,p:{x:-18.2,y:-110.1}},{t:this.shape_511},{t:this.shape_510,p:{x:16.9,y:-84.7}},{t:this.shape_299,p:{x:-11.6,y:-115.9}},{t:this.shape_298,p:{x:-11.6,y:-115.9}},{t:this.shape_509},{t:this.shape_421},{t:this.shape_420},{t:this.shape_294,p:{x:-6.3,y:-111.5}},{t:this.shape_293,p:{x:-6.2,y:-111.4}},{t:this.shape_508},{t:this.shape_291,p:{x:-6.1,y:-115.6}},{t:this.shape_507},{t:this.shape_289,p:{x:-34.7,y:-94.2}},{t:this.shape_288,p:{x:-14.6,y:-74.5}},{t:this.shape_287,p:{x:-9.9}},{t:this.shape_286,p:{x:-11.7,y:-149.7}},{t:this.shape_285,p:{x:-11.7,y:-149.7}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_283,p:{x:7,y:-149.3}},{t:this.shape_282,p:{x:6.6,y:-149.7}},{t:this.shape_281,p:{x:6.6,y:-149.7}},{t:this.shape_280,p:{x:-17.5,y:-151.8}},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484,p:{x:-17.1}},{t:this.shape_365,p:{y:-153,x:-17.1}},{t:this.shape_483,p:{x:-17.1}},{t:this.shape_273,p:{x:-17.1,y:-153}},{t:this.shape_364,p:{y:-151.2}},{t:this.shape_271,p:{x:-18,y:-154.3}},{t:this.shape_482},{t:this.shape_172,p:{x:6.9,y:-150.8}},{t:this.shape_171,p:{x:6.9,y:-150.8}},{t:this.shape_170,p:{x:6.9,y:-150.8}},{t:this.shape_481},{t:this.shape_168,p:{x:6.1,y:-152.1}},{t:this.shape_277,p:{x:-16.2,y:-155.1}},{t:this.shape_270,p:{x:-17.5,y:-154.9}},{t:this.shape_269,p:{x:-17.9,y:-120.4}},{t:this.shape_480},{t:this.shape_356},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_418},{t:this.shape_262,p:{x:-16.4,y:-160.8}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_476},{t:this.shape_258,p:{x:-35.9,y:-151.7}},{t:this.shape_257,p:{x:-6.3,y:-125.3}},{t:this.shape_256,p:{x:1.4,y:-174.4}},{t:this.shape_385,p:{x:-5.4,y:-128.4}},{t:this.shape_254,p:{x:-5.7,y:-130.7}},{t:this.shape_253,p:{x:1.9,y:-174.9}},{t:this.shape_475},{t:this.shape_251,p:{x:-22.4,y:-138.8}},{t:this.shape_250,p:{x:-22.4,y:-138.8}},{t:this.shape_249,p:{x:-17.2,y:-168.3}},{t:this.shape_474},{t:this.shape_247,p:{x:-42.8,y:-113.1}},{t:this.shape_473},{t:this.shape_245,p:{x:-52.4,y:-96.2}},{t:this.shape_472},{t:this.shape_471,p:{x:-8.7,y:-99.1}},{t:this.shape_240,p:{x:-8.7,y:-99.1}},{t:this.shape_470},{t:this.shape_242,p:{x:-7.4,y:-91.1}},{t:this.shape_469,p:{x:-49.6}},{t:this.shape_239,p:{x:-49.8,y:-61.6}},{t:this.shape_468,p:{x:-46.8}},{t:this.shape_467,p:{x:-54.7}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_237,p:{x:-16.2,y:139.7}},{t:this.shape_234,p:{x:-31.1,y:129.8}},{t:this.shape_233,p:{x:-31.1,y:129.8}},{t:this.shape_463},{t:this.shape_321,p:{x:-0.3,y:134.9}},{t:this.shape_320,p:{x:-0.3,y:134.9}},{t:this.shape_236,p:{x:-5.8,y:140.9}},{t:this.shape_462},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-31}},{t:this.shape_339},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_400},{t:this.shape_371,p:{x:-4.4}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_395},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_394},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_461}]},10).to({state:[{t:this.shape_323,p:{x:-12.3,y:77.6}},{t:this.shape_322,p:{x:-12.3,y:77.6}},{t:this.shape_321,p:{x:-0.4,y:135.9}},{t:this.shape_320,p:{x:-0.4,y:135.9}},{t:this.shape_319,p:{x:-11.3}},{t:this.shape_460},{t:this.shape_459},{t:this.shape_316,p:{x:-23.9,y:63.9}},{t:this.shape_458},{t:this.shape_457},{t:this.shape_313,p:{x:-19.6,y:-10.6}},{t:this.shape_456},{t:this.shape_455,p:{x:-25.9,y:-87.4}},{t:this.shape_310,p:{x:-4.4}},{t:this.shape_309,p:{x:-4.4,y:-87.2}},{t:this.shape_308,p:{x:10.4,y:-143.4}},{t:this.shape_307,p:{x:10.4,y:-143.4}},{t:this.shape_306,p:{x:7.9,y:-139.8}},{t:this.shape_454},{t:this.shape_453},{t:this.shape_303,p:{x:9.3}},{t:this.shape_302,p:{x:12.2}},{t:this.shape_301,p:{x:-18.3,y:-110}},{t:this.shape_361},{t:this.shape_299,p:{x:-11.7,y:-115.9}},{t:this.shape_298,p:{x:-11.7,y:-115.9}},{t:this.shape_297,p:{x:-11.7}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_294,p:{x:-6.3,y:-111.4}},{t:this.shape_293,p:{x:-6.2,y:-111.3}},{t:this.shape_292,p:{x:-18.5}},{t:this.shape_291,p:{x:-6.1,y:-115.6}},{t:this.shape_358},{t:this.shape_289,p:{x:-34.8,y:-94.1}},{t:this.shape_288,p:{x:-14.6,y:-74.5}},{t:this.shape_357,p:{x:-9.9,y:-73.4}},{t:this.shape_286,p:{x:-11.7,y:-149.7}},{t:this.shape_285,p:{x:-11.7,y:-149.7}},{t:this.shape_450},{t:this.shape_283,p:{x:6.9,y:-149.3}},{t:this.shape_282,p:{x:6.5,y:-149.7}},{t:this.shape_281,p:{x:6.5,y:-149.7}},{t:this.shape_280,p:{x:-17.6,y:-151.8}},{t:this.shape_279,p:{x:-17.3}},{t:this.shape_278,p:{x:-17.3,y:-152.1}},{t:this.shape_449},{t:this.shape_277,p:{x:-16.2,y:-155.1}},{t:this.shape_270,p:{x:-17.5,y:-154.8}},{t:this.shape_269,p:{x:-17.9,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_356},{t:this.shape_266,p:{x:7.7}},{t:this.shape_265,p:{x:-0.9}},{t:this.shape_264,p:{x:-1.4}},{t:this.shape_355},{t:this.shape_262,p:{x:-16.4,y:-160.7}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_258,p:{x:-35.9,y:-151.6}},{t:this.shape_257,p:{x:-6.3,y:-125.2}},{t:this.shape_256,p:{x:1.3,y:-174.4}},{t:this.shape_255,p:{x:-5.5}},{t:this.shape_254,p:{x:-5.7,y:-130.6}},{t:this.shape_253,p:{x:1.8,y:-174.9}},{t:this.shape_252,p:{x:-0.2,y:-174.5}},{t:this.shape_251,p:{x:-22.4,y:-138.7}},{t:this.shape_250,p:{x:-22.4,y:-138.7}},{t:this.shape_249,p:{x:-17.2,y:-168.3}},{t:this.shape_248,p:{x:-31.9}},{t:this.shape_247,p:{x:-42.9,y:-113.1}},{t:this.shape_246,p:{x:-23.5}},{t:this.shape_245,p:{x:-52.5,y:-96.2}},{t:this.shape_244,p:{x:22.9}},{t:this.shape_350,p:{x:-8.8,y:-99.1}},{t:this.shape_384,p:{x:-8.8,y:-99.1}},{t:this.shape_243,p:{x:-7.5,y:-91.1}},{t:this.shape_240,p:{x:-7.5,y:-91.1}},{t:this.shape_239,p:{x:-49.8,y:-61.6}},{t:this.shape_238,p:{x:-16.2}},{t:this.shape_237,p:{x:-16.2,y:139.8}},{t:this.shape_236,p:{x:-5.9,y:141.9}},{t:this.shape_349},{t:this.shape_234,p:{x:-31.1,y:129.9}},{t:this.shape_233,p:{x:-31.1,y:129.9}},{t:this.shape_232,p:{x:-49.6}},{t:this.shape_231,p:{x:-56.5}},{t:this.shape_230,p:{x:-56.5}},{t:this.shape_229,p:{x:-56.6}},{t:this.shape_448},{t:this.shape_447},{t:this.shape_226,p:{x:-58.4}},{t:this.shape_225,p:{x:-58.7}},{t:this.shape_224,p:{x:-58.7}},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.7}},{t:this.shape_211,p:{x:-31}},{t:this.shape_426},{t:this.shape_209,p:{x:-4.5}},{t:this.shape_208,p:{x:-4.5}},{t:this.shape_207,p:{x:-4.5}},{t:this.shape_206,p:{x:-4.5}},{t:this.shape_205,p:{x:-4.5}},{t:this.shape_204,p:{x:-4.5}},{t:this.shape_203,p:{x:-4.5}},{t:this.shape_202,p:{x:-4.5}},{t:this.shape_201,p:{x:-4.5}},{t:this.shape_338},{t:this.shape_199,p:{x:-4.5}},{t:this.shape_337},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_336,p:{x:-4.1}},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.5}},{t:this.shape_192,p:{x:-7.5}},{t:this.shape_335},{t:this.shape_190,p:{x:13.5}},{t:this.shape_189,p:{x:13.5}},{t:this.shape_188,p:{x:13.5}},{t:this.shape_187,p:{x:13.5}},{t:this.shape_184,p:{x:-48.8,y:-19.6}},{t:this.shape_183,p:{x:-48.8,y:-19.6}},{t:this.shape_182,p:{x:-49.7}},{t:this.shape_425},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}}]},5).to({state:[{t:this.shape_323,p:{x:-12.3,y:77.6}},{t:this.shape_322,p:{x:-12.3,y:77.6}},{t:this.shape_321,p:{x:-0.3,y:135.9}},{t:this.shape_320,p:{x:-0.3,y:135.9}},{t:this.shape_319,p:{x:-11.3}},{t:this.shape_318,p:{x:-18.5,y:77.3}},{t:this.shape_317,p:{x:-18.5,y:77.3}},{t:this.shape_316,p:{x:-23.8,y:63.9}},{t:this.shape_315,p:{x:-15.5,y:-9.7}},{t:this.shape_314,p:{x:-15.5,y:-9.7}},{t:this.shape_313,p:{x:-19.5,y:-10.6}},{t:this.shape_312,p:{x:-25.9}},{t:this.shape_311,p:{x:-25.9}},{t:this.shape_310,p:{x:-4.4}},{t:this.shape_309,p:{x:-4.4,y:-87.2}},{t:this.shape_308,p:{x:10.4,y:-143.4}},{t:this.shape_307,p:{x:10.4,y:-143.4}},{t:this.shape_306,p:{x:7.9,y:-139.8}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_303,p:{x:9.3}},{t:this.shape_302,p:{x:12.3}},{t:this.shape_301,p:{x:-18.2,y:-110}},{t:this.shape_422},{t:this.shape_299,p:{x:-11.6,y:-115.9}},{t:this.shape_298,p:{x:-11.6,y:-115.9}},{t:this.shape_297,p:{x:-11.6}},{t:this.shape_421},{t:this.shape_420},{t:this.shape_294,p:{x:-6.3,y:-111.4}},{t:this.shape_293,p:{x:-6.2,y:-111.3}},{t:this.shape_292,p:{x:-18.4}},{t:this.shape_291,p:{x:-6.1,y:-115.6}},{t:this.shape_419},{t:this.shape_289,p:{x:-34.7,y:-94.1}},{t:this.shape_288,p:{x:-14.6,y:-74.5}},{t:this.shape_287,p:{x:-9.9}},{t:this.shape_286,p:{x:-11.7,y:-149.7}},{t:this.shape_285,p:{x:-11.7,y:-149.7}},{t:this.shape_284,p:{x:-18.9}},{t:this.shape_283,p:{x:7,y:-149.3}},{t:this.shape_282,p:{x:6.6,y:-149.7}},{t:this.shape_281,p:{x:6.6,y:-149.7}},{t:this.shape_280,p:{x:-17.5,y:-151.8}},{t:this.shape_279,p:{x:-17.2}},{t:this.shape_278,p:{x:-17.2,y:-152.1}},{t:this.shape_277,p:{x:-16.1,y:-155.1}},{t:this.shape_270,p:{x:-17.5,y:-154.8}},{t:this.shape_269,p:{x:-17.9,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_390,p:{x:6.9}},{t:this.shape_266,p:{x:7.7}},{t:this.shape_265,p:{x:-0.8}},{t:this.shape_264,p:{x:-1.3}},{t:this.shape_418},{t:this.shape_262,p:{x:-16.4,y:-160.7}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_258,p:{x:-35.9,y:-151.6}},{t:this.shape_257,p:{x:-6.3,y:-125.2}},{t:this.shape_414},{t:this.shape_385,p:{x:-5.4,y:-128.3}},{t:this.shape_254,p:{x:-5.7,y:-130.6}},{t:this.shape_253,p:{x:1.9,y:-174.9}},{t:this.shape_252,p:{x:-0.2,y:-174.5}},{t:this.shape_251,p:{x:-22.4,y:-138.7}},{t:this.shape_250,p:{x:-22.4,y:-138.7}},{t:this.shape_249,p:{x:-17.2,y:-168.3}},{t:this.shape_248,p:{x:-31.9}},{t:this.shape_247,p:{x:-42.8,y:-113.1}},{t:this.shape_246,p:{x:-23.5}},{t:this.shape_245,p:{x:-52.4,y:-96.2}},{t:this.shape_244,p:{x:23}},{t:this.shape_241,p:{x:-8.7,y:-99.1}},{t:this.shape_240,p:{x:-8.7,y:-99.1}},{t:this.shape_350,p:{x:-7.4,y:-91.1}},{t:this.shape_242,p:{x:-7.4,y:-91.1}},{t:this.shape_239,p:{x:-49.8,y:-61.6}},{t:this.shape_238,p:{x:-16.2}},{t:this.shape_237,p:{x:-16.2,y:139.8}},{t:this.shape_236,p:{x:-5.8,y:141.9}},{t:this.shape_413},{t:this.shape_234,p:{x:-31.1,y:129.9}},{t:this.shape_233,p:{x:-31.1,y:129.9}},{t:this.shape_232,p:{x:-49.5}},{t:this.shape_231,p:{x:-56.5}},{t:this.shape_230,p:{x:-56.5}},{t:this.shape_229,p:{x:-56.6}},{t:this.shape_412},{t:this.shape_411},{t:this.shape_226,p:{x:-58.3}},{t:this.shape_410},{t:this.shape_224,p:{x:-58.6}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_214,p:{x:-31.4}},{t:this.shape_213,p:{x:-31.4}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-31}},{t:this.shape_339},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_400},{t:this.shape_371,p:{x:-4.4}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_197,p:{x:-4.5}},{t:this.shape_196,p:{x:-4.4}},{t:this.shape_395},{t:this.shape_194,p:{x:30.7}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_394},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_186,p:{x:23.9}},{t:this.shape_185,p:{x:23.9}},{t:this.shape_184,p:{x:-48.8,y:-19.6}},{t:this.shape_183,p:{x:-48.8,y:-19.6}},{t:this.shape_182,p:{x:-49.6}},{t:this.shape_393},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}}]},3).to({state:[{t:this.shape_323,p:{x:-12.2,y:77.6}},{t:this.shape_322,p:{x:-12.2,y:77.6}},{t:this.shape_321,p:{x:-0.3,y:135.9}},{t:this.shape_320,p:{x:-0.3,y:135.9}},{t:this.shape_319,p:{x:-11.2}},{t:this.shape_318,p:{x:-18.5,y:77.3}},{t:this.shape_317,p:{x:-18.5,y:77.3}},{t:this.shape_316,p:{x:-23.8,y:63.9}},{t:this.shape_315,p:{x:-15.5,y:-9.7}},{t:this.shape_314,p:{x:-15.5,y:-9.7}},{t:this.shape_313,p:{x:-19.5,y:-10.6}},{t:this.shape_312,p:{x:-25.8}},{t:this.shape_311,p:{x:-25.8}},{t:this.shape_310,p:{x:-4.3}},{t:this.shape_309,p:{x:-4.3,y:-87.2}},{t:this.shape_308,p:{x:10.5,y:-143.4}},{t:this.shape_307,p:{x:10.5,y:-143.4}},{t:this.shape_306,p:{x:8,y:-139.8}},{t:this.shape_305,p:{x:-17}},{t:this.shape_304,p:{x:-17}},{t:this.shape_303,p:{x:9.4}},{t:this.shape_302,p:{x:12.3}},{t:this.shape_301,p:{x:-18.2,y:-110}},{t:this.shape_300},{t:this.shape_299,p:{x:-11.6,y:-115.9}},{t:this.shape_298,p:{x:-11.6,y:-115.9}},{t:this.shape_297,p:{x:-11.6}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294,p:{x:-6.2,y:-111.4}},{t:this.shape_293,p:{x:-6.1,y:-111.3}},{t:this.shape_292,p:{x:-18.4}},{t:this.shape_291,p:{x:-6,y:-115.6}},{t:this.shape_290},{t:this.shape_289,p:{x:-34.7,y:-94.1}},{t:this.shape_288,p:{x:-14.5,y:-74.5}},{t:this.shape_287,p:{x:-9.8}},{t:this.shape_286,p:{x:-11.6,y:-149.7}},{t:this.shape_285,p:{x:-11.6,y:-149.7}},{t:this.shape_284,p:{x:-18.9}},{t:this.shape_283,p:{x:7,y:-149.3}},{t:this.shape_282,p:{x:6.6,y:-149.7}},{t:this.shape_281,p:{x:6.6,y:-149.7}},{t:this.shape_280,p:{x:-17.5,y:-151.8}},{t:this.shape_279,p:{x:-17.2}},{t:this.shape_278,p:{x:-17.2,y:-152.1}},{t:this.shape_277,p:{x:-16.1,y:-155.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-17.4}},{t:this.shape_273,p:{x:-17.4,y:-151.8}},{t:this.shape_272},{t:this.shape_271,p:{x:-18.3,y:-153.1}},{t:this.shape_173},{t:this.shape_172,p:{x:7,y:-149.6}},{t:this.shape_171,p:{x:7,y:-149.6}},{t:this.shape_170,p:{x:7,y:-149.6}},{t:this.shape_169},{t:this.shape_168,p:{x:6.2,y:-150.9}},{t:this.shape_270,p:{x:-17.4,y:-154.8}},{t:this.shape_269,p:{x:-17.8,y:-120.4}},{t:this.shape_268,p:{x:-19,y:-155.2}},{t:this.shape_267},{t:this.shape_266,p:{x:7.8}},{t:this.shape_265,p:{x:-0.8}},{t:this.shape_264,p:{x:-1.3}},{t:this.shape_263},{t:this.shape_262,p:{x:-16.3,y:-160.7}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:-35.8,y:-151.6}},{t:this.shape_257,p:{x:-6.2,y:-125.2}},{t:this.shape_256,p:{x:1.4,y:-174.4}},{t:this.shape_255,p:{x:-5.4}},{t:this.shape_254,p:{x:-5.6,y:-130.6}},{t:this.shape_253,p:{x:1.9,y:-174.9}},{t:this.shape_252,p:{x:-0.1,y:-174.5}},{t:this.shape_251,p:{x:-22.3,y:-138.7}},{t:this.shape_250,p:{x:-22.3,y:-138.7}},{t:this.shape_249,p:{x:-17.1,y:-168.3}},{t:this.shape_248,p:{x:-31.8}},{t:this.shape_247,p:{x:-42.8,y:-113.1}},{t:this.shape_246,p:{x:-23.4}},{t:this.shape_245,p:{x:-52.4,y:-96.2}},{t:this.shape_244,p:{x:23}},{t:this.shape_243,p:{x:-8.7,y:-99.1}},{t:this.shape_242,p:{x:-8.7,y:-99.1}},{t:this.shape_241,p:{x:-7.4,y:-91.1}},{t:this.shape_240,p:{x:-7.4,y:-91.1}},{t:this.shape_239,p:{x:-49.7,y:-61.6}},{t:this.shape_238,p:{x:-16.1}},{t:this.shape_237,p:{x:-16.1,y:139.8}},{t:this.shape_236,p:{x:-5.8,y:141.9}},{t:this.shape_235},{t:this.shape_234,p:{x:-31,y:129.9}},{t:this.shape_233,p:{x:-31,y:129.9}},{t:this.shape_232,p:{x:-49.5}},{t:this.shape_231,p:{x:-56.4}},{t:this.shape_230,p:{x:-56.4}},{t:this.shape_229,p:{x:-56.5}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-58.3}},{t:this.shape_225,p:{x:-58.6}},{t:this.shape_224,p:{x:-58.6}},{t:this.shape_223,p:{x:31.7}},{t:this.shape_222,p:{x:31.7}},{t:this.shape_221,p:{x:30.7}},{t:this.shape_220,p:{x:40.8}},{t:this.shape_219,p:{x:37.6}},{t:this.shape_218,p:{x:37.6}},{t:this.shape_217,p:{x:40.5}},{t:this.shape_216,p:{x:41}},{t:this.shape_215},{t:this.shape_214,p:{x:-31.3}},{t:this.shape_213,p:{x:-31.3}},{t:this.shape_212,p:{x:-31.6}},{t:this.shape_211,p:{x:-30.9}},{t:this.shape_210},{t:this.shape_209,p:{x:-4.4}},{t:this.shape_208,p:{x:-4.4}},{t:this.shape_207,p:{x:-4.4}},{t:this.shape_206,p:{x:-4.4}},{t:this.shape_205,p:{x:-4.4}},{t:this.shape_204,p:{x:-4.4}},{t:this.shape_203,p:{x:-4.4}},{t:this.shape_202,p:{x:-4.4}},{t:this.shape_201,p:{x:-4.4}},{t:this.shape_200},{t:this.shape_199,p:{x:-4.4}},{t:this.shape_198},{t:this.shape_197,p:{x:-4.4}},{t:this.shape_196,p:{x:-4.3}},{t:this.shape_195},{t:this.shape_194,p:{x:30.8}},{t:this.shape_193,p:{x:-34.4}},{t:this.shape_192,p:{x:-7.4}},{t:this.shape_191},{t:this.shape_190,p:{x:13.6}},{t:this.shape_189,p:{x:13.6}},{t:this.shape_188,p:{x:13.6}},{t:this.shape_187,p:{x:13.6}},{t:this.shape_186,p:{x:24}},{t:this.shape_185,p:{x:24}},{t:this.shape_184,p:{x:-48.8,y:-19.6}},{t:this.shape_183,p:{x:-48.8,y:-19.6}},{t:this.shape_182,p:{x:-49.6}},{t:this.shape_181,p:{x:-44.6,y:-19.7}},{t:this.shape_180,p:{x:43.5}},{t:this.shape_179,p:{x:43.5}},{t:this.shape_178,p:{x:45.4}},{t:this.shape_177,p:{x:48.2}},{t:this.shape_176,p:{x:51}},{t:this.shape_175,p:{x:42.1}},{t:this.shape_174,p:{x:38.8}}]},7).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.8,-192.7,138.8,385.5);


(lib.Confetti = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("A1rNMQAEgDAGgBQAvAQgeAmIgEADQhEgGAtgvgEApCANNQgEABgEgEQgKgXAXgLIAKgDQAyApg9AAIgEgBgEglGALPIAAgHQAFgIAHgEQAGgFAJgDQA4AAgiAqIgHAIQgKAEgHAAQgVAAgEgbgAUuLfQgEAAgEgDQgKgYAXgKIAKgEQAyAqg9AAIgEgBgAZQD2QgEAAgEgEQgKgYAXgLIAKgCQAyApg9AAIgEAAgEgpcABWQgEgBgDgDQgKgYAXgKIAJgEQAyAqg8AAIgFAAgAZ1BSQgagmAsgLIAAgBQA0Acg2AVQgEACgEAAIgIgBgAzaj7QAAgIACgGQACgIAEgIIAbgLIAAgCQArALgOAnIgEAIQgQAMgMAAQgTAAgNgbgAO4ktQgCgCgCgDQgCgQAPgGIAKgDQAfAkgWAAQgJAAgTgGgAWEnDQgCgCgCgDQgCgQAPgGIAKgDQAfAkgWAAQgKAAgSgGgAmNpIQAEgDAGgBQAvAQgeAmIgEADQhEgGAtgvgA7jp6QgCgGAIgDQAVAFAVAHQACABABAEQgRAPgMAAQgOAAgIgXgAAst4QAAgHAHgBQAZABAPAQQABACgBADQgUANgMAAQgRAAACgbg");
	this.shape.setTransform(266.4,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("EAg9AMOQgCgBgBgDQgCgRAPgFIAJgDQAgAkgWAAQgKAAgTgHgAr8KpQgEAAgEgDQgKgYAXgLIAKgDQAyApg9AAIgEAAgAZGKQQgEAAgEgDQgEgYAYgDIAAgBQAnAfgsAAIgHAAgAEcH0QAAgFAKADQAOAIAHAPQABADAAAEIgKABQgXAAABgdgEAgBAG6QgCgBgBgDQgCgRAPgFIAJgDQAfAkgWAAQgJAAgTgHgEggdAG2QgagmArgLIABgBQA0Abg2AWQgEACgEAAIgIgBgEAjrAEtQgDAAgEgDQgKgYAXgLIAJgDQAzApg9AAIgFAAgEgn4AEfQgEgBgDgDQgFgYAZgDIAAgBQAnAgguAAIgGAAgEAlSABaQAEgOAMgHQAIgEAIgCQAnAMANAmIABAHQgDAPgPAHIgPAGQgtgOgHgsgEgmPAAaQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIgJAQIAGgPgEAjKgACQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIgIAOIAFgNgEAnHgADQgUgfAigRQAFgDAGgBQAaADAGAYIABAIQgKAbgTAAQgNAAgQgKgAjghDQgEAAgEgDQgKgYAXgLIAKgDQAyApg9AAIgEAAgAq2jtQgEAAgEgDQgKgYAXgLIAKgDQAyApg9AAIgEAAgAAnl6QADgEAHgBQAuARgeAlIgEAEQhCgGAsgvgA7YlzQgEgBgDgDQgFgYAZgDIAAgBQAnAgguAAIgGAAgALynZQgVgfAigRQAFgDAHgBQAZADAGAYIABAIQgKAdgTAAQgMAAgQgMgEgjjgHnQgKgKAVACQAcAFAdAHIADADQgTAIgQAAQgVAAgPgPgA2ipOQgLgdAYgPQAFgDAFgBQAoAUgbAqIgDADQgGACgFAAQgRAAgFgTgAheqNQgVgfAigRQAFgDAHgBQAZADAGAYIABAIQgKAdgTAAQgMAAgQgMgAxQrrQgEAAgEgDQgKgYAXgKQAFgDAFgBQAyApg9AAIgEAAg");
	this.shape_1.setTransform(258.6,112.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AcENsQgbgmAsgLIAAgBQA1Acg3AWQgDACgEAAIgIgCgAMfMQQgVgfAigSQAFgDAHgBQAZAEAGAYIABAHQgKAdgTAAQgMAAgQgLgA8eKgIADgBIgIAVIAFgUgEAhBAJcQAJgbAfAEQAlALgWAcIgFAEQgKADgIAAQgXAAgJgXgAh6HwQgagmArgLIABgBQA0Acg3AWQgDACgEAAIgIgCgASGHGQgUgfAigSQAFgDAGgBQAaAEAGAYIABAHQgKAdgTAAQgNAAgQgLgAFVHHQgEAAgDgEQgFgYAYgCIABgBQAmAfgsAAIgHAAgAmoCVQADgEAHgBQAuAQgeAmIgEADQhEgGAugugAxEBgQgagmArgLIABgBQA0Acg3AWQgDACgEAAIgIgCgAmDAZQgEAAgDgEQgFgWAYgCIABgBQAnAeguAAIgGgBgEgmMgEXQADgEAHgBQAvARgfAlIgEADQhEgGAugugAWQlHQgCgBgBgEQgCgQAPgGIAJgDQAgAkgWAAQgKAAgTgGgAdomIQgbgmAsgLIAAgBQA1Acg3AWQgDACgEAAIgIgCgEAlwgGjQgagZAXgeQAFgFAIACQAYADAKAUIADAHQgEAggYAAQgIAAgLgEgEAhagJMQAAgDAFgBQARAJAIATIADAHQgMAFgIAAQgWAAAJgkgACkqdQADgEAHgBQAuARgeAlIgEADQhEgGAugugA/wqqIgCgPQgCgNAJgJQAJgHAKgEQAGgDAIgBQAfAFAIAeIABAHQgDANgIAJIgOANQgJADgHAAQgaAAgLgcgAanrcQAoAOgWAlQgBACgEAAQhHgPA6gmgAHbtPQgDgBgBgEQgCgQAPgGIAKgDQAfAkgWAAQgJAAgTgGg");
	this.shape_2.setTransform(270.1,109.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,532.8,197.1);


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"press_button":6,"incorrect":24,"pick_up":81,"answering":89,"hang_up":99});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_23 = function() {
		/* gotoAndStop("static");*/
	}
	this.frame_80 = function() {
		/* gotoAndStop("static");*/
	}
	this.frame_89 = function() {
		/* stop();*/
	}
	this.frame_114 = function() {
		/* gotoAndStop("static");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(57).call(this.frame_80).wait(9).call(this.frame_89).wait(25).call(this.frame_114).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgFAAQAAgCAFgBQAGABAAACQAAADgGABQgFgBAAgDg");
	this.shape.setTransform(-2.5,-162);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgIADIARgNIgFAVQgMgFAAgDg");
	this.shape_1.setTransform(-4.5,-160.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAAQABgOAPgCQAPACACAOQgCAPgPACQgPgCgBgPg");
	this.shape_2.setTransform(-3.3,-161.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#996633").ss(0.3,1,1).p("AgcAAQADAZAZADQAagDADgZQgDgZgagCQgZACgDAZg");
	this.shape_3.setTransform(-4.4,-161.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgcAAQADgZAZgCQAaACADAZQgDAagaACQgZgCgDgag");
	this.shape_4.setTransform(-4.4,-161.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("AgFAAQAAgCAFgBQAGABAAACQAAADgGABQgFgBAAgDg");
	this.shape_5.setTransform(-19.7,-161.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AgIADIARgNIgFAVQgMgFAAgDg");
	this.shape_6.setTransform(-21.6,-159.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAAQABgOAPgCQAPACACAOQgCAPgPACQgPgCgBgPg");
	this.shape_7.setTransform(-20.4,-160.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#996633").ss(0.3,1,1).p("AgcAAQADAZAZADQAagDADgZQgDgYgagDQgZADgDAYg");
	this.shape_8.setTransform(-21.5,-160.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgcAAQADgZAZgCQAaACADAZQgDAagaACQgZgCgDgag");
	this.shape_9.setTransform(-21.5,-160.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8C2C13").ss(1,1,1).p("AgUg+QACAFASAvQARAtAEAc");
	this.shape_10.setTransform(40.1,-96.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BA421C").s().p("AgUg+IAUA0QARAtAEAcg");
	this.shape_11.setTransform(40.1,-96.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8C2C13").ss(1,1,1).p("AgYg6QAEAFAUArQATApAGAc");
	this.shape_12.setTransform(31.9,-94.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BA421C").s().p("AgXg6IAXAwQATApAFAcg");
	this.shape_13.setTransform(31.9,-94.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8C2C13").ss(1,1,1).p("AAUg5QgBABgPAhQgNAggKAx");
	this.shape_14.setTransform(-36.1,-91.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BA421C").s().p("AAEgXIAQgiIgnBzQAKgxANggg");
	this.shape_15.setTransform(-36.1,-91.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8C2C13").ss(1,1,1).p("AAfg5QgGgGgOAUQgIASgRAlQgSAnADAI");
	this.shape_16.setTransform(-44.2,-92.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BA421C").s().p("AgOAMIAZg3QAOgUAGAGIg8B0QgDgIASgng");
	this.shape_17.setTransform(-44.2,-92.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#8C2C13").ss(1,1,1).p("AAchPQgDACgXArQgVAqgIBI");
	this.shape_18.setTransform(26.4,-112.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8C2C13").ss(1,1,1).p("AgnhKQAEABAfAqQAeAnAOBD");
	this.shape_19.setTransform(31.3,-110.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BA421C").s().p("AgmhKQADABAgAqQAdAnAOBCg");
	this.shape_20.setTransform(31.3,-110.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8C2C13").ss(1,1,1).p("AgRgxIAjBj");
	this.shape_21.setTransform(25.7,-104.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#8C2C13").ss(1,1,1).p("AAIglIgPBL");
	this.shape_22.setTransform(-32.3,-100.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#8C2C13").ss(1,1,1).p("AAUhNQgCABgKAQQgJAQgEAYQgGAjgEAeQgEAfAAAC");
	this.shape_23.setTransform(-37.4,-106.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BA421C").s().p("AgOAtIAJhBQAFgYAIgQIAMgRIgnCbIAFghg");
	this.shape_24.setTransform(-37.4,-106.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#8C2C13").ss(1,1,1).p("ABKBmQAAgIgEgVQgHgfg8gVQhNgWgrAoIAviIQAFgFBAgCQA9gCA6A7IgsCVIgBAE");
	this.shape_25.setTransform(-39.6,-87.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BA421C").s().p("ABGBLQgHgfg8gVQhNgXgrApIAviIQAFgFBAgCQA9gCA6A7IgsCVQAAgIgEgVg");
	this.shape_26.setTransform(-39.6,-87.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#8C2C13").ss(1,1,1).p("AhzgaQAAgHAuglQAvgmBbATIAvCAQgHgFhFgBQhDgBgtBAg");
	this.shape_27.setTransform(35.6,-92.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BA421C").s().p("AhzgaQAAgHAuglQAvgmBbATIAvCAQgHgFhFgBQhDgBgtBAg");
	this.shape_28.setTransform(35.6,-92.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#277489").ss(1,1,1).p("ABLAAQgFA8g8AGIgSAAQg9gGgFg8QAFg7A9gFIASAAQA8AFAFA7g");
	this.shape_29.setTransform(23.7,-23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5DCBE8").s().p("AgIBCQg9gGgFg8QAFg7A9gFIASAAQA8AFAFA7QgFA8g8AGg");
	this.shape_30.setTransform(23.7,-23.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#277489").ss(1,1,1).p("AC6gpQgLA5g8AEIgWAAQg8gFgLg5IjGAAQgoAEgEAmQAEAnAoAEIFhAAQAogEAEgnQgDgggggJg");
	this.shape_31.setTransform(13.4,-16.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5DCBE8").s().p("AiwArQgogEgEgnQAEgmAogEIDGAAQALA5A8AFIAWAAQA8gEALg5QAgAJADAgQgEAngoAEg");
	this.shape_32.setTransform(13.4,-16.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#277489").ss(1,1,1).p("ACxA1QAogEAEgoQgEglgogEIi5AAIAAgUIibAAIAAAUIgNAAQgoAEgEAlQAEAoAoAEg");
	this.shape_33.setTransform(13.4,-17.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3193AD").s().p("AiwA1QgogEgEgoQAEglAogEIANAAIAAgUICbAAIAAAUIC5AAQAoAEAEAlQgEAogoAEg");
	this.shape_34.setTransform(13.4,-17.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EA5B57").s().p("AA9ANQgSgbg+gFIg5AAIALgUIBKAAQADgEAcALQAcAKAIA/QgCgIgNgUg");
	this.shape_35.setTransform(51,0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EA5B57").s().p("AnQgIIOhAAIgJARg");
	this.shape_36.setTransform(-7.6,-1.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#470E06").ss(1,1,1).p("AAuh6IAABdIhbAAIAACY");
	this.shape_37.setTransform(-34.6,101.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#470E06").ss(1,1,1).p("Agth6IAABdIBbAAIAACY");
	this.shape_38.setTransform(30.5,101.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A82B1B").s().p("AnOAUIAAgnIOeAAIAAAng");
	this.shape_39.setTransform(-4.3,-8.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7E7F7F").s().p("AGgFKIAAo+QgGgzg8gFIsYAAQgJAAgJACQANgoAzgDIMYAAQA8AFAFAzIAAI+QgDAogsANQACgGAAgGg");
	this.shape_40.setTransform(-4.5,50.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B7B7B7").s().p("AmLFQQg1gFgFgsIAAo+QAFgsA1gEIADAAIAAIxQAFAsA1AEIMUAAIAAANQgFAsg0AFg");
	this.shape_41.setTransform(-4.6,50.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9E9E9E").s().p("AmMFXQg7gEgGgzIAAo+QAGg0A7gEIMYAAQA9AEAFA0IAAI+QgFAzg9AEg");
	this.shape_42.setTransform(-4.6,50.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#871512").ss(1,1,1).p("AHwkzIAAJnQgGA3hBAFItRAAQhBgFgGg3IAApnQAGg3BBgFINRAAQBBAFAGA3g");
	this.shape_43.setTransform(-4.6,50.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BCBCBC").s().p("AmoFwQhBgFgFg3IAApnQAFg3BBgFINRAAQBAAFAHA3IAAJnQgHA3hAAFg");
	this.shape_44.setTransform(-4.6,50.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#470E06").ss(1,1,1).p("AIlC+QgHAjhHACIutAAQhHgCgHgjIAAl8QAHgiBHgDIOtAAQBHADAHAig");
	this.shape_45.setTransform(-4.6,50.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7F1804").s().p("AnVDjQhIgCgGgjIAAl7QAGgjBIgCIOrAAQBHACAIAjIAAF7QgIAjhHACg");
	this.shape_46.setTransform(-4.6,50.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A82B1B").s().p("AoqIsQhGgHgGhHIAAu7QAGhIBGgGIRVAAQBGAHAGBHIAAO7QgGBHhGAHg");
	this.shape_47.setTransform(-4.6,53.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#871512").ss(1,1,1).p("AKenvIAAPeQgIBZhXAIIx9AAQhXgJgIhYIAAveQAIhYBXgIIR9AAQBXAIAIBYg");
	this.shape_48.setTransform(-4.6,53.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C43A30").s().p("Ao+JQQhXgIgIhZIAAveQAIhYBXgIIR9AAQBXAIAIBYIAAPeQgIBZhXAIg");
	this.shape_49.setTransform(-4.6,53.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("ABNmkIiZAAIAAHjQgIBFg6BSQg7BRiUAhIAABcIK7AAIAAhcQiUghg7hRQg6hSgIhFg");
	this.shape_50.setTransform(-4.6,156.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#334D90").s().p("AldGlIAAhdQCUghA7hRQA6hSAIhFIAAnjICZAAIAAHjQAIBFA6BSQA7BRCUAhIAABdg");
	this.shape_51.setTransform(-4.6,156.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#470E06").ss(1,1,1).p("ACOmVIAAMrIkbAAIAAsrg");
	this.shape_52.setTransform(-4.6,155.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7F1804").s().p("AiNGWIAAsrIEbAAIAAMrg");
	this.shape_53.setTransform(-4.6,155.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("Al0QqIAAiHIATgEQCFgcA4hJIAApmImaAAQgygCgigiQghghgBg0IAAveQABgzAhghQAigiAygBIBbAAIAAguIPKAAIAAAuIBYAAQAyABAhAiQAiAhABAzIAAPeQgBAzgiAjQghAhgyACImaAAIAAJmQA4BJCFAcIATAEIAACHg");
	this.shape_54.setTransform(-4.6,93.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AifAqIAAhSIE/AAIAABSg");
	this.shape_55.setTransform(-31.2,-11.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D3B63C").s().p("Ag1AeQgdgDgCgbQACgbAdgCIBrAAQAdACACAbQgCAbgdADg");
	this.shape_56.setTransform(-31.8,-15.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AB2AAQgEApgqAFIiPAAQgqgFgEgpQAEgoAqgFICPAAQAqAFAEAog");
	this.shape_57.setTransform(-31.5,-16.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F2D651").s().p("AhHAuQgqgFgEgpQAEgoAqgEICPAAQAqAEAEAoQgEApgqAFg");
	this.shape_58.setTransform(-31.5,-16.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AF947B").s().p("AATAXQg5gEgJgEQgUgHgHgNQgIgPABgCQA8ARAxgEQAzgEADgCQgDAmgzAAIgJAAg");
	this.shape_59.setTransform(-30.3,152.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#42778E").ss(1,1,1).p("AizgJQACAFBiANQBgAPCjgk");
	this.shape_60.setTransform(11.6,130.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#42778E").ss(1,1,1).p("AiWgIQAEAGBYANQBWAPB7go");
	this.shape_61.setTransform(-28.9,131.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#A8846A").ss(1,1,1).p("AhGAAQAFACAxADQAuADAmgMQABAAACgB");
	this.shape_62.setTransform(-10.8,-138.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#841F0D").ss(1,1,1).p("AAAAJIgCAAAgwAEQACABAAABIAsAGIAAgDIAAAAIABAAIAcgHAAAAJQAAAAgBAAQgGgBgGgBQgJgBgJgBQgLgBgJgCIABABIgFAAAAsgDIgKADQgDABgEABQAAABgCAAQgMAGgNAAAAsgDIgEADIgCAAQAAAAgDABIgIABAAygGIgMAHIgNACAA4gLQgBACgBACIgEABIgGADAgwAEIAAAAIgCgBIABAAQABAAAAABIAsAGIACgBAgXACIAlAA");
	this.shape_63.setTransform(-9.6,-137.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("ADpBcIgRgFIAAgSIAAgPIgTALIgHgeQADgJACggQACgcgUgUIgFgEIgDAFQgBAHgjAhQgkAfhRAGIAYgGIgCgKIgkADIhAADIAjgUIgEgJIhAARQg5AQgoAFIAagYIATgSIgSAEQgDACgfAEQgfAEgegKIAigMIgCgKIgSgBIgcgBIACgEIBYghQAEAfgbAUQA2ACAgghQAFAegXAWQA6gQApgnQASAYAHAcIAygkQACAVgCAUQAdgPAWgXQADAVAFATQA6goApgzQgHARAQAoQARAmACAWIAVgqQAOAhgSAkQAWgHAPgUQAAAIgJASQgIASgKANQgIAJgGAAIgBAAg");
	this.shape_64.setTransform(-11.7,-177.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1).p("AgjABQAFgBAGAAIA8AA");
	this.shape_65.setTransform(-22.5,-194.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#050505").ss(1,1,1).p("AhFh8QAvgFBMgNQBOgOA0BVQABgCAAgRQAAgSgHgNQADACARAXQASAXgFAUQAAgBANAAQAMAAAWAUQgBAAgPAAQgOAAgHAGQAEABAYAZQAZAXAIAkQABAkgWAaQgXAZgDABIgYgHIAAgcIgQAKIgLgmQADgDAEgfQAEgfgVgUQABAEgrAnQgsAnhkgDIAygPQgEAAgoADQgqACgfABIAygfQgIAChDATQhDATghAAIApgoQgEACgkAEQglAEgfgRIAsgPIg2gDQAAgHAlg2QAlg3BAgQ");
	this.shape_66.setTransform(-11.8,-181.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4C4C4C").s().p("ADTCKIAAgcIgQAKIgLgmQADgDAEgfQAEgfgVgUQABAEgrAnQgsAnhkgDIAygPIgsADQgqACgfABIAygfIhLAVQhDATghAAIApgoQgEACgkAEQglAEgfgRIAsgPIg2gDQAAgHAlg2QAlg3BAgQIALgCIA/gBQAvgFBMgNQBOgOA0BVIABgTQAAgSgHgNQADACARAXQASAXgFAUIAAAAIAAAAQABgBAMAAQAMAAAWAUIgQAAQgOAAgHAGQAEABAYAZQAZAXAIAkQABAkgWAaQgXAZgDABg");
	this.shape_67.setTransform(-11.8,-181.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#42778E").ss(1,1,1).p("AAdhnIgUCqIglAtIAOjf");
	this.shape_68.setTransform(-1.9,-29);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3083C1").s().p("AhLG6QACi2AbjHQAajGAbiUQAdiUAHgcIAigEQhQEXgJEcQgDDFBLCrQhsgLgbgNg");
	this.shape_69.setTransform(-38.6,89.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#2772AA").ss(1,1,1).p("AgvnJQgCAHgdCUQgdCTgdDQQgdDRgDDBQAHAGBnARQBlARB+gvIAAuh");
	this.shape_70.setTransform(-29.9,88.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4496E0").s().p("Ag6HeQhogRgGgGQADjBAdjRQAdjQAdiTIAfibIDXgYIAAOhQhbAihOAAQgdAAgcgEg");
	this.shape_71.setTransform(-29.9,88.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#8C2C13").ss(1,1,1).p("AgEhWQgBAHABA/QABA8AJAr");
	this.shape_72.setTransform(0.5,-51.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#A8846A").ss(1,1,1).p("AAlBZQgDACgdAEQgbAEgLgHQgHgLAGgdQAFgcAJgSQAPgWAQgYQAFgLAAgLQABgHgBgGQgDgTgBgB");
	this.shape_73.setTransform(-18.7,-154.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C1A084").s().p("AghBLQgHgLAGgcQAFgcAJgRQAPgYAQgXQAFgLAAgMIAVCYQgDABgdAFIgQABQgOAAgIgFg");
	this.shape_74.setTransform(-18.7,-153.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#A8846A").ss(1,1,1).p("AARgIQgCgBgNABQgLABgHAQ");
	this.shape_75.setTransform(9.3,-165.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C1A084").s().p("AACgIQANgBACABIghARQAHgQALgBg");
	this.shape_76.setTransform(9.3,-165.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#050505").ss(1,1,1).p("AA2AKQgDgEgkgKQgigNgiAVQAJgCBiAIg");
	this.shape_77.setTransform(-5.9,-171.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4C4C4C").s().p("Ag1AEQAigVAiANQAkAKADAEQhigIgJACg");
	this.shape_78.setTransform(-5.9,-171.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#050505").ss(1,1,1).p("AAuALQACgEgRgMQgSgOg6AXQADAAAigBQAgAAAWAIg");
	this.shape_79.setTransform(-23.9,-172.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4C4C4C").s().p("AgIADIglABQA6gXASAOQARAMgCAEQgWgIggAAg");
	this.shape_80.setTransform(-23.9,-172.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#A8846A").ss(0.5,1,1).p("AA1AiQADgGgRgjQgRgmhKgDQgBADABAgQACAfAWAWQAWAWA7gcg");
	this.shape_81.setTransform(-22.9,-162.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F3F8FF").s().p("AgcAoQgWgWgCgfQgBggABgDQBKADARAmQARAjgDAGQgiAPgUAAQgRAAgKgJg");
	this.shape_82.setTransform(-22.9,-162.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A8846A").s().p("AgcAoQgWgWgCgfQgBggABgDQBKADARAmQARAjgDAGQgiAPgUAAQgRAAgKgJg");
	this.shape_83.setTransform(-23,-161.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#A8846A").ss(0.5,1,1).p("Ag+AvQgFgGAQgpQAQgrBdgKQADADADAgQADAfgZAaQgZAZhPgRg");
	this.shape_84.setTransform(-5.9,-163.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F3F8FF").s().p("Ag+AvQgFgGAQgpQAQgrBdgKQADADADAgQADAfgZAaQgPAPghAAQgYAAgggHg");
	this.shape_85.setTransform(-5.9,-163.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A8846A").s().p("Ag+AvQgFgGAQgpQAQgrBdgKQADADADAgQADAfgZAaQgPAPghAAQgYAAgggHg");
	this.shape_86.setTransform(-5.1,-163.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A8846A").s().p("AAMD4QgLgMgHgNQgOgXgGgbQgFghAEg/QAFhAAGgzIAHg4QgMgyADg0QABgPAFgWQAFgVALgKQgCAQgDASQABARAEAQQAJAfgBAiQgEAcgFAdQgDAeABAfQgBAbAAAeQAAAPgCAOIACAdQgIAxAIAzQANAhARAfQgIgJgKgIg");
	this.shape_87.setTransform(-27.4,-158.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#A8846A").ss(1,1,1).p("ADVhIQgEgqgbhEQgahEhKgYQg2gQhKgLQhLgLgxApQgxApAbCKQgBADgGA2QgHAzgFBAQgEBAAGAhQAHAxA1AqQA2ApCFgGQCEgRARhWQARhXgRhBQgJg2gCgMIgCgJQADACAUgGQAUgGgEgjg");
	this.shape_88.setTransform(-9.3,-158.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C1A084").s().p("AiVEMQg1gqgHgxQgGghAEhAQAFhAAHgzIAHg5QgbiKAxgpQAxgpBLALQBKALA2AQQBKAYAaBEQAbBEAEAqQAEAjgUAGQgUAGgDgCIACAJIALBCQARBBgRBXQgRBWiEARIgfABQhsAAgwgkg");
	this.shape_89.setTransform(-9.3,-158.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BA421C").ss(1,1,1).p("AAPAAQgBANgOABQgNgBgBgNQABgMANgBQAOABABAMg");
	this.shape_90.setTransform(-3.7,-101.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8C2C13").s().p("AgOAAQABgMANgBQANABACAMQgCANgNABQgNgBgBgNg");
	this.shape_91.setTransform(-3.7,-101.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BA421C").ss(1,1,1).p("AAPAAQgBANgOABQgNgBgBgNQABgMANgBQAOABABAMg");
	this.shape_92.setTransform(-3.5,-108.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#8C2C13").s().p("AgOAAQABgMANgBQANABACAMQgCANgNABQgNgBgBgNg");
	this.shape_93.setTransform(-3.5,-108.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#8C2C13").ss(1,1,1).p("AgdhbQgEACAEA1QAEAzA4BNQgBgBgDgbQgDgbAHgl");
	this.shape_94.setTransform(-32.1,-110.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#8C2C13").ss(1,1,1).p("AgHmpQAAAEAEA9QADA9AFBDQAGBHgCCNQgCCLgRBkQgBACgDAXQgDAXAAAMQABAYACAFQAEAEASArQATAqgPAd");
	this.shape_95.setTransform(11.6,-87.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#8C2C13").ss(1,1,1).p("AgCksQADAAANCXQAMCVgqEt");
	this.shape_96.setTransform(1.4,-89.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#8C2C13").ss(1,1,1).p("AgIl8QAGADAOCYQAQCZgrEPQAAAGABA/QACBAAAAx");
	this.shape_97.setTransform(-10,-80.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#8C2C13").ss(1,1,1).p("AgUGlQgMguAPhEQAPhDACgHQAmjHgQiWQgRiZgSgtQgNgrAFgeQAGgfACgB");
	this.shape_98.setTransform(-21.6,-84.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#AA3313").s().p("AAIAQIgZAGIgHgWIgCAAIgDgyQAFATAKANQAcAcAQAAIgGApIgQgjg");
	this.shape_99.setTransform(-10.9,-121.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#8C2C13").ss(1,1,1).p("AgChcQgBADADAhQAAAjARAWQAqAkAGgHIgKA/IgVgvIgbAGIgHgWIgrAgQgFgBgNglQgNgjAphBg");
	this.shape_100.setTransform(-13.8,-124);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BA421C").s().p("AAiAuIgbAGIgHgWIgrAgQgFgBgNglQgNgjAphCIAfgQQgBAEADAhQAAAjARAWQAqAkAGgHIgKA/g");
	this.shape_101.setTransform(-13.8,-124);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#AA3313").s().p("AgVAeIgCgRQAMgQAYgzQABAVAEAUQgBACAAAFQABALAGAPQgWgCgLAVQgEALgEAFIgEgZg");
	this.shape_102.setTransform(-1.1,-122.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#8C2C13").ss(1,1,1).p("AAIhlQACACAVAZQAVAYAHAaQAFAYAAAWQgBAYAAABQgEgBgdgMQgcgLgKgBQgGACAGARQAGARABACQgBgBgPACQgPABgHAOQgNAbgEgCIgHg2QADgDAUgjQAUghAGgXQAGgrAQgLg");
	this.shape_103.setTransform(2.3,-125.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#BA421C").s().p("Ag4BlIgHg2IAXgmQAUghAGgXQAGgrAQgLIAXAbQAVAYAHAaQAFAYAAAWIgBAZIghgNQgcgLgKgBQgGACAGARIAHATIgQABQgPABgHAOQgMAagEAAIgBgBg");
	this.shape_104.setTransform(2.3,-125.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#A8846A").s().p("AhMALQgBgagLgJQArAUAtgJQAvgHAhggQACAPAFARQAGARgJALQgXAQgdACIhqAcIgCgrg");
	this.shape_105.setTransform(-6.1,-128.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#8C2C13").ss(1,1,1).p("AhkhVQgCgBAAATQABATAYAwIBHBzQACgIAOg0QARg2APgKIA9gYQgCAAgNgPQgPgQgFgyQgBAGgwAZQguAZhJgbg");
	this.shape_106.setTransform(-4.8,-122.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C1A084").s().p("AhNAAQgYgwgBgTQAAgTACAAQBJAcAugZQAwgZABgGQAFAyAPARQANAOACAAIg9AYQgPAKgRA1IgQA9g");
	this.shape_107.setTransform(-4.8,-122.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#AA3313").s().p("AgPEUQgKgJgTgBQATgQAAgdIgBgQIgCgMQgEgPAAgLQAAgMAFgQQANgyACgxQABgfAFggQAGguAAg9IAAg8QgDgbgLgTQgGgNgDgNQgEgSgCgWIAaAVIAWAKQAVAJAFADIgBAeIgCAcQgJA9gHA3IABAmIAAAKQgCBBgUBbQgRBcgDAKIAAABIANAcIALAdIgCAYIgWgbg");
	this.shape_108.setTransform(19,-81.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#AA3313").s().p("Ah5AzQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQgngCgmgIIA5gQQAagIAYgLQAWgKAZgGQAQgCAOAGIAQAIIAugIQAsgJArgSQAdgNAhgDQgjAUgXAfQgdAagsgEQg1gGgyAGQgVAHgUAMQgRALgVAAIgGgBg");
	this.shape_109.setTransform(-10.7,-128.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AA3313").s().p("AhLBFIg+gDQgdgBghgEQghgEgOgOQgZgjAfhSQBmBJCEAWQCCAXCGgbQhJAxhIAGQgeADgmAAQgzAAhFgGg");
	this.shape_110.setTransform(-6.2,-50);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#8C2C13").ss(1,1,1).p("AGEkQQgjg5gtgeQgXgRgigIQgygNgcgQQgdgPglgfQgeAOg7AXQg7AWgdgFQgKgGgVgHQgKAFgpAMQgTAGgFACQgpAQgpAHQhuAYgSBnQgIAogNA+QgNA9gOAZQArgLAvAZQAvAYASARQAYhEAAhJQAAABAGAdQAIAjAIA1QAIA0ABAzQgEBZgfBUQgWBDgIApQgJApASAYQASARArAEQAqADAcABQCRANBSgGQBUgGBVg9QgHgCgBgWQgCgVABgHIgbg5QABgDAMgzQALgzALg/QALhAgCgnQABgzAJg2QAJg1gcgwQAPAKAJAsQAJAsAGATQAegKArgaQAsgaAhgFQgLhHgkg4g");
	this.shape_111.setTransform(-3.2,-88);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#BA421C").s().p("AiVHDQgcgBgqgDQgqgEgSgRQgTgYAJgpQAIgpAWhDQAfhUAEhZQgBgzgIg0QgIg1gIgjIgGgeQABBJgYBEQgTgRgugYQgwgZgqALQANgZANg9QAOg+AHgoQAThnBtgYQApgHApgQIAYgIQApgMALgFQAUAHAKAGQAdAFA7gWQA7gXAegOQAlAfAcAPQAdAQAyANQAhAIAYARQAtAeAjA5QAjA4ALBHQghAFgrAaQgrAageAKQgGgTgJgsQgKgsgPgKQAcAwgJA1QgIA2gBAzQACAngMBAQgKA/gLAzIgNA2IAaA5QgBAHACAVQACAWAHACQhVA9hUAGQgbACgiAAQhDAAhjgJg");
	this.shape_112.setTransform(-3.2,-88);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3083C1").s().p("AiCglIDUgnQACAAARAfQARAeAPAyQg+gHhEAXQhCAYhGACg");
	this.shape_113.setTransform(7.3,-44.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3083C1").s().p("AiOF/QgGiMgBihQgBinARilQANhrAXhYQAWhYAJgaIA8AdIBkAxIA5AcIAABWQhlAAhcgYQAAAJgcA2QgbA2gDARQADAQAJABQAIAAAFAJQAJAPACAQQADARglgBQAEAYATAUQgOANgTAFQgFAVAHAOQAHAOgDASQgGATgHAHQgGAHAAAWQACAUAJAVQAJAXACAWQAAAXgNAPQgNAPgFASQgCAUAKAJQAKAJADAQQgFA0gJA6QgCAoAHAVQAHAVAbAdIgMAIIALAcIgcgLQgBAEAGABQASAFACAZQgFASgZAMQgZAMgHAagAh+gbQgRAxADBDIAFB5QgDAcABAdIAOkqIgDAEg");
	this.shape_114.setTransform(-20.1,0.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#3B799B").ss(1,1,1).p("AhGoPQgDAFgZBfQgZBfgQB5QgSCzACC1QADC3AGCbQAEADAzAUQAzATAygCQA0gBAHg7QAFhMAVieQAUieAUiGQATiJACgIIAAjVg");
	this.shape_115.setTransform(-20,-3.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4496E0").s().p("AhbH+QgzgUgEgDQgGibgDi3QgCi1ASizQAQh5AZhfQAZhfADgFIDiBuIAADVIgVCRQgUCGgUCeQgVCegFBMQgHA7g0ABIgHABQguAAgwgSg");
	this.shape_116.setTransform(-20,-3.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#706257").s().p("AgHAdQgZgKABgFQgFgOgGgmQAmAWAsAJQAAAXADAXQgggEgSgGg");
	this.shape_117.setTransform(-39,162.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#706257").ss(1,1,1).p("AiMguQAFArAIAUQATAZBZAEQBYAFBAgcQACgFAGgqQhEAXhJgDQhJgChDgog");
	this.shape_118.setTransform(-29.9,162.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8C7A6C").s().p("AgTAuQhZgEgTgZQgIgUgFgrQBDAoBJACQBJADBEgXQgGAqgCAFQg3AYhKAAIgXgBg");
	this.shape_119.setTransform(-29.9,162.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#AF947B").s().p("AhfCWQgYgJAAgFQgKgegFg5IgFg+IADhEIAEhLIA9gBIBqgDIA+gCIADAwQhoAmhchBQgPA7ADAyQAFAwAWAXQArAqA6AIQA8AHA8gSQgEAsgEATQgyAVhFABIgFAAQg/AAgogNg");
	this.shape_120.setTransform(-30.2,150.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#8C7A6C").ss(1,1,1).p("ABminIjvAHIgHCTQAAAGAFA4QAFA6AKAfQATAZBZAEQBYAFBAgcQABgDAFghQAFghgEgbQgGgbgNgfQgOgggBgDg");
	this.shape_121.setTransform(-30.2,150.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BFA78E").s().p("AgQCnQhZgEgTgZQgKgfgFg6IgFg+IAHiTIDvgHIAHB6IAPAjQANAfAGAbQAEAbgFAhIgGAkQg3AYhKAAIgXgBg");
	this.shape_122.setTransform(-30.2,150.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#706257").s().p("AgWAMQgGgSgDgVQAfAQAgAGIgDAhQgwgKgDgGg");
	this.shape_123.setTransform(-0.7,149.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#42778E").ss(1,1,1).p("AhAsDICBJFQgBAAgIAGQgIAFADAPQAGAhgGAFIgbAZQAAADgBAqQgBArgEAqQgFAsgKAJQgFAKgFBnQgFBngCCGQgBCFgBBlQAABlAAAF");
	this.shape_124.setTransform(3.9,58.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3083C1").s().p("AhVNcQgBgLAAgoQgDhaAVjbQAVjbBGlIIAAgTQgFiSgriEQgxiMgIizQgBhCAEhCQgBgpAbgfQAbgOAaARQAHALgBAbQgBAbACAWQAEAJAHACQAIABgEARQgOAVgZADQgBAbAVgFQAYgFAEAUQgEALghAPQgkAPgNAHQAbAOAhgDQAOABgTANQgVANABgEQgOAPgGAKQgGAKADAZQAJAzATA0QAQA0AGA2IACBOQABAlAWAlQAMAPARAQQASAPAAAVQgGASgXAKQgWAKAAASQAFARAYAJQAYAIAHATQgGgIgVAWQgWAYgEAJIAKAmIgBAFQgGAYgIAWQgeB3gHB5QgaEAA5D6Qg3gBg2gNg");
	this.shape_125.setTransform(2.3,48.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#2772AA").ss(1,1,1).p("Ai0uIIDUgnQADACAcA1QAbA2AEBUQAAAuAHB2QAGB2AJCIQAJCIAGBiQAHBiAAACQgBAHgGCQQgFCRAKDQQALDQAvDCQgIAGh5AVQh2AViKgdQgFgDALjuQAMjtBdmyQgCicgxiMQgxiLgHiz");
	this.shape_126.setTransform(12.4,42.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4496E0").s().p("Ai/OfQgFgDALjuQAMjtBdmyQgCicgxiMQgxiLgHizIAHkxIDUgnQADACAcA1QAbA2AEBUQAAAuAHB2IAPD+IAPDqIAHBkQgBAHgGCQQgFCRAKDQQALDQAvDCQgIAGh5AVQgzAJg0AAQhKAAhPgRg");
	this.shape_127.setTransform(12.4,42.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#AF947B").s().p("AgdAOQgYgFgcgKQg/gaAkAJQAkAJBIAJQBJALAxgRQAAAEgmAPQgVAIgeAAQgcAAgigHg");
	this.shape_128.setTransform(8.3,145.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#AF947B").s().p("AgiAPQgagBgZgDIABAAIBsgJQAggBgCgHQgCgHgCgCIAkARQgqAOgzAAIgbgBg");
	this.shape_129.setTransform(51.8,145.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#706257").s().p("AhQgBQAcAAAagJQATgRAWgHQAMgBAVADQAUAEAKAIQABACABADQACAMAAAOIAAASIgKAAIgngQIglgOIgGAMIgIASQgiAFgdACQABgTAAgSg");
	this.shape_130.setTransform(23.8,148.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#706257").ss(1,1,1).p("ACJgHQgygBgxgKQgKgCgKgDQgYgLgfAAQgRgBgRAHQgGAHgHAKQgOAFgQgBQgmAFgmACQhMAFhCgdQACAVAHASQADAGA2AKQA3ALCJgRQACgFAFgMQAGgLABgBQAFABAhAMQAgANAGADQAJABBBADQBBAEBKgDQBJgDAfgSQAAgGgDgZQhfAZhigKg");
	this.shape_131.setTransform(29.5,149.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#8C7A6C").s().p("AkJAfQg3gKgDgGQgGgSgDgVQBDAdBLgFQAmgCAlgFQARABAPgFIAMgRQAQgHASABQAfAAAYALQAJADAKACQAyAKAxABQBkAKBegZIADAfQggAShIADQhKADhBgEIhKgEIglgQIgogNIgFAMIgIARQhUAKg1AAQgiAAgUgEg");
	this.shape_132.setTransform(29.5,149.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#AF947B").s().p("AivAoQAFgnADgKIBEgMIB3gWIBEgMQAfAqA5AVQgVAHgVAFQhJAVhRALQgbAEgaAAQg2AAgwgQg");
	this.shape_133.setTransform(13.8,135.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#8C7A6C").ss(1,1,1).p("ACngMQg6gMhEgXQhDgYgigwIkIAvQgCAEgIA3QgHA1ARA5QgDAEA0ANQA0AOCWgTIANgdIBGAdQAFABBCAEQBBAEBLgDQBLgEAegTQAVgWgWgaQgWgbgTgIQg5gNg8gIg");
	this.shape_134.setTransform(29.1,141.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BFA78E").s().p("AkTByQg0gNADgEQgRg5AHg1QAIg3ACgEIEIgvQAiAwBDAYQBEAXA6AMQA8AIA5ANQATAIAWAbQAWAagVAWQgeAThLAEQhLADhBgEIhHgFIhGgdIgNAdQhXALg2AAQgnAAgWgGg");
	this.shape_135.setTransform(29.1,141.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#A8846A").ss(1,1,1).p("ADomzIiXhBQgCAJgVBVQgUBWgNA4QgCAAgJAOQgJAPAAAoQgDgDgaBkQgbBigMDwIgNAnIh7B6QgBADgLAiQgKAigKAWQAAABAHAFQAGAEAMgJQANgNANgaQANgZABgDQAEgCAkgKQAkgLAQgBQALACAKAKQALAJALACQALACAGACQAHABADgPQADgSgGgRQgHgRADgMQAFgPABgmQABglAAgEQABgEAahLQAchLAjhoQAihmAUhaQAAgDADgcQAEgdAIgOQAGgKATgoQASgpAQgmQARgmABgDg");
	this.shape_136.setTransform(-52.9,-49.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C1A084").s().p("AjgH0QgHgFAAgBQAKgWAKgiIAMglIB7h6IANgnQAMjwAbhiQAahkADADQAAgoAJgPQAJgOACAAIAhiOIAXheICXBBIgSApIgiBPQgTAogGAKQgIAOgEAdIgDAfQgUBagiBmQgjBogcBLIgbBPIgBApQgBAmgFAPQgDAMAHARQAGARgDASQgDAPgHgBIgRgEQgLgCgLgJQgKgKgLgCQgQABgkALIgoAMIgOAcQgNAagNANQgIAGgFAAQgDAAgCgBg");
	this.shape_137.setTransform(-52.9,-49.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#A8846A").ss(1,1,1).p("Agsn9QACAJAPBWQAPBXAIA6QACgBAGAPQAIAPgCApQADgDAUBlQAUBlgDDvIAKAoIBzCCQAAADAJAjQAIAiAIAXQAAABgIAEQgGAFgLgKQgNgOgKgbQgLgagBgDQgEgCgkgNQgjgNgPgCQgMABgLAJQgLAJgLABQgKABgGABQgGABgDgQQgBgRAHgRQAIgRgDgLQgDgQABglQACgmAAgEQgBgEgXhNQgXhMgahoQgchqgOhbQABgEgCgcQgBgdgIgOQgGgLgPgpQgPgqgOgnQgOgngBgDg");
	this.shape_138.setTransform(46.3,-49.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C1A084").s().p("ACuH4QgLgOgLgbIgNgdIgngPQgjgNgQgCQgKABgMAJQgLAJgMABIgPACQgGABgDgQQgBgRAHgRQAIgRgCgLQgEgQACglIACgqIgZhRQgWhMgbhoQgbhqgPhbIAAggQgDgdgGgOQgHgLgPgpIgdhRIgOgqICbg3IAQBfIAXCRQACgBAGAPQAIAPgCApQADgDAVBlQAUBlgFDvIALAoIByCCIAJAmQAJAiAHAXQABABgIAEIgEABQgGAAgIgGg");
	this.shape_139.setTransform(46.3,-49.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#8C2C13").ss(1,1,1).p("ABfAyQgIAGhGABQhEABgshJQABgFAhgYQAhgYA6AYQA5AgAGAdQAFAegDADg");
	this.shape_140.setTransform(-41.8,-81.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#AA3313").s().p("AhfgPQABgFAhgYQAhgYA6AYQA5AgAGAdQAFAegDADQgIAGhGABIgDAAQhCAAgrhIg");
	this.shape_141.setTransform(-41.8,-81.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#8C2C13").ss(1,1,1).p("ABegfQAAADgUAaQgTAYgqAQQgnAPhDgcQgCgIAnglQAngnBvAcg");
	this.shape_142.setTransform(37.8,-85.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#AA3313").s().p("AhdAZQgCgIAnglQAngnBvAcQAAADgUAaQgTAYgqAQQgNAFgRAAQghAAgrgSg");
	this.shape_143.setTransform(37.8,-85.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#8C2C13").ss(1,1,1).p("ABKBmIgBAEABKBmQAAgIgEgVQgHgfg8gVQhNgWgrAoIAviIQAFgFBAgCQA9gCA6A7g");
	this.shape_144.setTransform(-39.6,-87.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#841F0D").ss(1,1,1).p("AgCAJIAAAAIABAAIAcgHQAAABgCAAQgMAGgNAAIgCAAIAAADIgsgGQAAgBgCgBIAAAAIgCgBIABAAQABAAAAABIAsAGgAAAAJQAAAAgBAAQgGgBgGgBQgJgBgJgBQgLgBgJgCIABABIgFAAAAsgDIgKADQgDABgEABIAIgBQADgBAAAAIACAAgAAygGIgMAHIgNACAA4gLQgBACgBACIgEABIgGADAgXACIAlAA");
	this.shape_145.setTransform(-9.6,-137.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#A8846A").ss(0.5,1,1).p("AA6g1QADADADAgQADAfgZAaQgZAZhPgRQgFgGAQgpQAQgrBdgKg");
	this.shape_146.setTransform(-5.9,-163.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#050505").ss(1,1,1).p("AA1APQgDgEghgQQgggSglARQAJgBBgAWg");
	this.shape_147.setTransform(-6,-171.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4C4C4C").s().p("Ag0gGQAlgRAgASQAhAQADAEQhggWgJABg");
	this.shape_148.setTransform(-6,-171.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#050505").ss(1,1,1).p("AAuAAQABgCgUgKQgVgJgzAjQADgBAigIQAegGAYABg");
	this.shape_149.setTransform(-23.8,-172.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4C4C4C").s().p("AAbgMQAUAKgBACQgYgBgeAGIglAJQAzgjAVAJg");
	this.shape_150.setTransform(-23.8,-172.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#841F0D").ss(1,1,1).p("AgCAJIAAADIgsgGQAAgBgCgBIAAAAIgCgBIABAAQABAAAAABIAsAGgAAAAJIgCAAIAAAAIABAAIAcgHAAAAJQAAAAgBAAQgGgBgGgBQgJgBgJgBQgLgBgJgCIABABIgFAAAAsgDIgKADQgDABgEABQAAABgCAAQgMAGgNAAAAsgDIgEADIgCAAQAAAAgDABIgIABAAygGIgMAHIgNACAA4gLQgBACgBACIgEABIgGADAgXACIAlAA");
	this.shape_151.setTransform(-9.6,-137.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#A8846A").ss(0.5,1,1).p("AA0APQAEgCgRgNQgRgNhJgEQgCABABALQABAKAWAJQAWAJA7gIg");
	this.shape_152.setTransform(-22.9,-160.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F3F8FF").s().p("AgdAOQgWgJgBgKQgBgLACgBQBJAEARANQARANgEACQgcADgUAAQgVAAgMgEg");
	this.shape_153.setTransform(-22.9,-160.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#A8846A").ss(0.5,1,1).p("Ag+AOQgFgCAQgMQAQgLBdgEQADABADAKQADAIgZAHQgZAIhPgFg");
	this.shape_154.setTransform(-5.9,-160.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F3F8FF").s().p("Ag+AOQgFgCAQgMQAQgLBdgEQADABADAKQADAIgZAHQgPAFghAAQgYAAgggCg");
	this.shape_155.setTransform(-5.9,-160.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A8846A").s().p("Ag+AmQgFgFAQghQAQgiBdgJQADADADAaQADAYgZAVQgPANgiAAQgXAAgggGg");
	this.shape_156.setTransform(-5.1,-162.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#A8846A").ss(0.5,1,1).p("AAzARQAEgCgQgNQgQgLhJgHQgCAAABALQAAAIAWAIQAWAJA6gDg");
	this.shape_157.setTransform(-23,-159.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F3F8FF").s().p("AgdALQgWgIAAgIQgBgLACAAQBJAHAQALQAQANgEACIgeAAQgiAAgQgGg");
	this.shape_158.setTransform(-23,-159.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#841F0D").ss(1,1,1).p("AgCAJIAAAAIABAAQABAAAAAAIgCAAIAAADIgsgGQAAgBgCgBIAAAAIgCgBIABAAQABAAAAABIAsAGgAAbACQAEgBADgBIAKgDIgEADIgCAAQAAAAgDABIgIABIgcAHQgGgBgGgBQgJgBgJgBQgLgBgJgCIABABIgFAAAAygGIgMAHIgNACQACAAAAgBAAZADQgMAGgNAAAA4gLQgBACgBACIgEABIgGADAgXACIAlAA");
	this.shape_159.setTransform(-9.6,-137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},24).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_146},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_145},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_144},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_146},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_145},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_144},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_83},{t:this.shape_153},{t:this.shape_152},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_151},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},4).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_156},{t:this.shape_83},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_145},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_144},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_83},{t:this.shape_158},{t:this.shape_157},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_145},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_144},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},4).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_146},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_159},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_144},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_83},{t:this.shape_153},{t:this.shape_152},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_151},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},34).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_156},{t:this.shape_83},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_145},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_144},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_83},{t:this.shape_158},{t:this.shape_157},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_145},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_144},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[]},2).wait(34));

	// Boy
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.498)").s().p("AgFAAQAAgCAFgBQAGABAAACQAAADgGABQgFgBAAgDg");
	this.shape_160.setTransform(-2.5,-162);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.498)").s().p("AgIADIARgNIgFAVQgMgFAAgDg");
	this.shape_161.setTransform(-4.5,-160.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgQAAQABgOAPgCQAPACACAOQgCAPgPACQgPgCgBgPg");
	this.shape_162.setTransform(-3.3,-161.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#996633").ss(0.3,1,1).p("AgcAAQADAZAZADQAagDADgZQgDgZgagCQgZACgDAZg");
	this.shape_163.setTransform(-4.4,-161.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#663300").s().p("AgcAAQADgZAZgCQAaACADAZQgDAagaACQgZgCgDgag");
	this.shape_164.setTransform(-4.4,-161.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.498)").s().p("AgFAAQAAgCAFgBQAGABAAACQAAADgGABQgFgBAAgDg");
	this.shape_165.setTransform(-19.7,-161.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.498)").s().p("AgIADIARgNIgFAVQgMgFAAgDg");
	this.shape_166.setTransform(-21.6,-159.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgQAAQABgOAPgCQAPACACAOQgCAPgPACQgPgCgBgPg");
	this.shape_167.setTransform(-20.4,-160.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#996633").ss(0.3,1,1).p("AgcAAQADAZAZADQAagDADgZQgDgYgagDQgZADgDAYg");
	this.shape_168.setTransform(-21.5,-160.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#663300").s().p("AgcAAQADgZAZgCQAaACADAZQgDAagaACQgZgCgDgag");
	this.shape_169.setTransform(-21.5,-160.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#277489").ss(1,1,1).p("ABLAAQgFA8g8AGIgSAAQg9gGgFg8QAFg7A9gFIASAAQA8AFAFA7g");
	this.shape_170.setTransform(23.7,-23.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#5DCBE8").s().p("AgIBCQg9gGgFg8QAFg7A9gFIASAAQA8AFAFA7QgFA8g8AGg");
	this.shape_171.setTransform(23.7,-23.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#277489").ss(1,1,1).p("AC6gpQgLA5g8AEIgWAAQg8gFgLg5IjGAAQgoAEgEAmQAEAnAoAEIFhAAQAogEAEgnQgDgggggJg");
	this.shape_172.setTransform(13.4,-16.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#5DCBE8").s().p("AiwArQgogEgEgnQAEgmAogEIDGAAQALA5A8AFIAWAAQA8gEALg5QAgAJADAgQgEAngoAEg");
	this.shape_173.setTransform(13.4,-16.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#277489").ss(1,1,1).p("ACxA1QAogEAEgoQgEglgogEIi5AAIAAgUIibAAIAAAUIgNAAQgoAEgEAlQAEAoAoAEg");
	this.shape_174.setTransform(13.4,-17.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#3193AD").s().p("AiwA1QgogEgEgoQAEglAogEIANAAIAAgUICbAAIAAAUIC5AAQAoAEAEAlQgEAogoAEg");
	this.shape_175.setTransform(13.4,-17.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EA5B57").s().p("AA9ANQgSgbg+gFIg5AAIALgUIBKAAQADgEAcALQAcAKAIA/QgCgIgNgUg");
	this.shape_176.setTransform(51,0.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EA5B57").s().p("AnQgIIOhAAIgJARg");
	this.shape_177.setTransform(-7.6,-1.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#470E06").ss(1,1,1).p("AAuh6IAABdIhbAAIAACY");
	this.shape_178.setTransform(-34.6,101.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#470E06").ss(1,1,1).p("Agth6IAABdIBbAAIAACY");
	this.shape_179.setTransform(30.5,101.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#A82B1B").s().p("AnOAUIAAgnIOeAAIAAAng");
	this.shape_180.setTransform(-4.3,-8.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#7E7F7F").s().p("AGgFKIAAo+QgGgzg8gFIsYAAQgJAAgJACQANgoAzgDIMYAAQA8AFAFAzIAAI+QgDAogsANQACgGAAgGg");
	this.shape_181.setTransform(-4.5,50.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#B7B7B7").s().p("AmLFQQg1gFgFgsIAAo+QAFgsA1gEIADAAIAAIxQAFAsA1AEIMUAAIAAANQgFAsg0AFg");
	this.shape_182.setTransform(-4.6,50.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#9E9E9E").s().p("AmMFXQg7gEgGgzIAAo+QAGg0A7gEIMYAAQA9AEAFA0IAAI+QgFAzg9AEg");
	this.shape_183.setTransform(-4.6,50.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#871512").ss(1,1,1).p("AHwkzIAAJnQgGA3hBAFItRAAQhBgFgGg3IAApnQAGg3BBgFINRAAQBBAFAGA3g");
	this.shape_184.setTransform(-4.6,50.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#BCBCBC").s().p("AmoFwQhBgFgFg3IAApnQAFg3BBgFINRAAQBAAFAHA3IAAJnQgHA3hAAFg");
	this.shape_185.setTransform(-4.6,50.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#470E06").ss(1,1,1).p("AIlC+QgHAjhHACIutAAQhHgCgHgjIAAl8QAHgiBHgDIOtAAQBHADAHAig");
	this.shape_186.setTransform(-4.6,50.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#7F1804").s().p("AnVDjQhIgCgGgjIAAl7QAGgjBIgCIOrAAQBHACAIAjIAAF7QgIAjhHACg");
	this.shape_187.setTransform(-4.6,50.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A82B1B").s().p("AoqIsQhGgHgGhHIAAu7QAGhIBGgGIRVAAQBGAHAGBHIAAO7QgGBHhGAHg");
	this.shape_188.setTransform(-4.6,53.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#871512").ss(1,1,1).p("AKenvIAAPeQgIBZhXAIIx9AAQhXgJgIhYIAAveQAIhYBXgIIR9AAQBXAIAIBYg");
	this.shape_189.setTransform(-4.6,53.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#C43A30").s().p("Ao+JQQhXgIgIhZIAAveQAIhYBXgIIR9AAQBXAIAIBYIAAPeQgIBZhXAIg");
	this.shape_190.setTransform(-4.6,53.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(1,1,1).p("ABNmkIiZAAIAAHjQgIBFg6BSQg7BRiUAhIAABcIK7AAIAAhcQiUghg7hRQg6hSgIhFg");
	this.shape_191.setTransform(-4.6,156.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#334D90").s().p("AldGlIAAhdQCUghA7hRQA6hSAIhFIAAnjICZAAIAAHjQAIBFA6BSQA7BRCUAhIAABdg");
	this.shape_192.setTransform(-4.6,156.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#470E06").ss(1,1,1).p("ACOmVIAAMrIkbAAIAAsrg");
	this.shape_193.setTransform(-4.6,155.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#7F1804").s().p("AiNGWIAAsrIEbAAIAAMrg");
	this.shape_194.setTransform(-4.6,155.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("Al0QqIAAiHIATgEQCFgcA4hJIAApmImaAAQgygCgigiQghghgBg0IAAveQABgzAhghQAigiAygBIBbAAIAAguIPKAAIAAAuIBYAAQAyABAhAiQAiAhABAzIAAPeQgBAzgiAjQghAhgyACImaAAIAAJmQA4BJCFAcIATAEIAACHg");
	this.shape_195.setTransform(-4.6,93.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AifAqIAAhSIE/AAIAABSg");
	this.shape_196.setTransform(-31.2,-11.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D3B63C").s().p("Ag1AeQgdgDgCgbQACgbAdgCIBrAAQAdACACAbQgCAbgdADg");
	this.shape_197.setTransform(-31.8,-15.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1,1,1).p("AB2AAQgEApgqAFIiPAAQgqgFgEgpQAEgoAqgFICPAAQAqAFAEAog");
	this.shape_198.setTransform(-31.5,-16.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F2D651").s().p("AhHAuQgqgFgEgpQAEgoAqgEICPAAQAqAEAEAoQgEApgqAFg");
	this.shape_199.setTransform(-31.5,-16.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#8C2C13").ss(1,1,1).p("AgUg+QACAFASAvQARAtAEAc");
	this.shape_200.setTransform(40.1,-96.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#BA421C").s().p("AgUg+IAUA0QARAtAEAcg");
	this.shape_201.setTransform(40.1,-96.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#8C2C13").ss(1,1,1).p("AgYg6QAEAFAUArQATApAGAc");
	this.shape_202.setTransform(31.9,-94.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#BA421C").s().p("AgXg6IAXAwQATApAFAcg");
	this.shape_203.setTransform(31.9,-94.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#8C2C13").ss(1,1,1).p("AAUg5QgBABgPAhQgNAggKAx");
	this.shape_204.setTransform(-36.1,-91.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#BA421C").s().p("AAEgXIAQgiIgnBzQAKgxANggg");
	this.shape_205.setTransform(-36.1,-91.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#8C2C13").ss(1,1,1).p("AAfg5QgGgGgOAUQgIASgRAlQgSAnADAI");
	this.shape_206.setTransform(-44.2,-92.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#BA421C").s().p("AgOAMIAZg3QAOgUAGAGIg8B0QgDgIASgng");
	this.shape_207.setTransform(-44.2,-92.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#8C2C13").ss(1,1,1).p("AAchPQgDACgXArQgVAqgIBI");
	this.shape_208.setTransform(26.4,-112.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#8C2C13").ss(1,1,1).p("AgnhKQAEABAfAqQAeAnAOBD");
	this.shape_209.setTransform(31.3,-110.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#BA421C").s().p("AgmhKQADABAgAqQAdAnAOBCg");
	this.shape_210.setTransform(31.3,-110.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#8C2C13").ss(1,1,1).p("AgRgxQAOAZAVBK");
	this.shape_211.setTransform(25.7,-104.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#8C2C13").ss(1,1,1).p("AAIglIgPBL");
	this.shape_212.setTransform(-32.3,-100.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#8C2C13").ss(1,1,1).p("AAUhNQgCABgKAQQgJAQgEAYQgGAjgEAeQgEAfAAAC");
	this.shape_213.setTransform(-37.4,-106.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#BA421C").s().p("AgOAtIAJhBQAFgYAIgQIAMgRIgnCbIAFghg");
	this.shape_214.setTransform(-37.4,-106.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#8C2C13").ss(1,1,1).p("ABKBmQAAgIgEgVQgHgfg8gVQhNgWgrAoIAviIQAFgFBAgCQA9gCA6A7IgsCVIgBAE");
	this.shape_215.setTransform(-39.6,-87.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#BA421C").s().p("ABGBLQgHgfg8gVQhNgXgrApIAviIQAFgFBAgCQA9gCA6A7IgsCVQAAgIgEgVg");
	this.shape_216.setTransform(-39.6,-87.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#8C2C13").ss(1,1,1).p("AhzgaQAAgHAuglQAvgmBbATIAvCAQgHgFhFgBQhDgBgtBAg");
	this.shape_217.setTransform(35.6,-92.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#BA421C").s().p("AhzgaQAAgHAuglQAvgmBbATIAvCAQgHgFhFgBQhDgBgtBAg");
	this.shape_218.setTransform(35.6,-92.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#AF947B").s().p("AATAXQg5gEgJgEQgUgHgHgNQgIgPABgCQA8ARAxgEQAzgEADgCQgDAmgzAAIgJAAg");
	this.shape_219.setTransform(-30.3,152.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#42778E").ss(1,1,1).p("AizgJQACAFBiANQBgAPCjgk");
	this.shape_220.setTransform(11.6,130.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#42778E").ss(1,1,1).p("AiWgIQAEAGBYANQBWAPB7go");
	this.shape_221.setTransform(-28.9,131.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#A8846A").ss(1,1,1).p("AgrgIQACABAdAHQAaAIAeAB");
	this.shape_222.setTransform(-18.2,-140.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#C1A084").s().p("AgMAAIgfgIIBXAQQgeAAgagIg");
	this.shape_223.setTransform(-18.2,-140.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#A82A24").s().p("AgPAOQgPgCgLgMIgEgEQAxgZAqAfQgTANgbABIAAAAIgPgCg");
	this.shape_224.setTransform(-13,-136);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#A8846A").ss(1,1,1).p("AhEgbQAFABAxADQAwADAngOQAAAEgWAeQgVAegwAFQgGACgcgJQgcgKAMgtg");
	this.shape_225.setTransform(-11,-137.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#721710").s().p("Ag0AcQgcgKAMgtQAFABAxADQAwADAngOQAAAEgWAeQgVAegwAFIgEAAQgIAAgWgHg");
	this.shape_226.setTransform(-11,-137.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("ADpBcIgRgFIAAgSIAAgPIgTALIgHgeQADgJACggQACgcgUgUIgFgEIgDAFQgBAHgjAhQgkAfhRAGIAYgGIgCgKIgkADIhAADIAjgUIgEgJIhAARQg5AQgoAFIAagYIATgSIgSAEQgDACgfAEQgfAEgegKIAigMIgCgKIgSgBIgcgBIACgEIBYghQAEAfgbAUQA2ACAgghQAFAegXAWQA6gQApgnQASAYAHAcIAygkQACAVgCAUQAdgPAWgXQADAVAFATQA6goApgzQgHARAQAoQARAmACAWIAVgqQAOAhgSAkQAWgHAPgUQAAAIgJASQgIASgKANQgIAJgGAAIgBAAg");
	this.shape_227.setTransform(-11.7,-177.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(1,1,1).p("AgjABIAFgBQADAAADAAIAAAAIA8AA");
	this.shape_228.setTransform(-22.5,-194.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#050505").ss(1,1,1).p("AhFh8QAvgFBMgNQBOgOA0BVQABgCAAgRQAAgSgHgNQADACARAXQASAXgFAUQAAgBANAAQAMAAAWAUQgBAAgPAAQgOAAgHAGQAEABAYAZQAZAXAIAkQABAkgWAaQgXAZgDABIgYgHIAAgcIgQAKIgLgmQADgDAEgfQAEgfgVgUQABAEgrAnQgsAnhkgDIAygPQgEAAgoADQgqACgfABIAygfQgIAChDATQhDATghAAIApgoQgEACgkAEQglAEgfgRIAsgPIg2gDQAAgHAlg2QAlg3BAgQ");
	this.shape_229.setTransform(-11.8,-181.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#4C4C4C").s().p("ADTCKIAAgcIgQAKIgLgmQADgDAEgfQAEgfgVgUQABAEgrAnQgsAnhkgDIAygPIgsADQgqACgfABIAygfIhLAVQhDATghAAIApgoQgEACgkAEQglAEgfgRIAsgPIg2gDQAAgHAlg2QAlg3BAgQIAFgBIAHgBQAlgGAZAFQAvgFBMgNQBOgOA0BVIABgTQAAgSgHgNQADACARAXQASAXgFAUIAAAAIAAAAQABgBAMAAQAMAAAWAUIgQAAQgOAAgHAGQAEABAYAZQAZAXAIAkQABAkgWAaQgXAZgDABgAiDh7IA+gBg");
	this.shape_230.setTransform(-11.8,-181.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#42778E").ss(1,1,1).p("AAdhnIgUCqIglAtIAOjf");
	this.shape_231.setTransform(-1.9,-29);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#3083C1").s().p("AhLG6QACi2AbjHQAajGAbiUQAdiUAHgcIAigEQhQEXgJEcQgDDFBLCrQhsgLgbgNg");
	this.shape_232.setTransform(-38.6,89.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#2772AA").ss(1,1,1).p("AgvnJQgCAHgdCUQgdCTgdDQQgdDRgDDBQAHAGBnARQBlARB+gvIAAuh");
	this.shape_233.setTransform(-29.9,88.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4496E0").s().p("Ag6HeQhogRgGgGQADjBAdjRQAdjQAdiTIAfibIDXgYIAAOhQhbAihOAAQgdAAgcgEg");
	this.shape_234.setTransform(-29.9,88.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#8C2C13").ss(1,1,1).p("AgEhWQgBAHABA/QABA8AJAr");
	this.shape_235.setTransform(0.5,-51.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#A8846A").ss(1,1,1).p("AAlBZQgDACgdAEQgbAEgLgHQgHgLAGgdQAFgcAJgSQAPgWAQgYQAFgLAAgLQABgHgBgGQgDgTgBgB");
	this.shape_236.setTransform(-18.7,-154.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C1A084").s().p("AghBLQgHgLAGgcQAFgcAJgRQAPgYAQgXQAFgLAAgMIAVCYQgDABgdAFIgQABQgOAAgIgFg");
	this.shape_237.setTransform(-18.7,-153.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#A8846A").ss(1,1,1).p("AARgIQgCgBgNABQgLABgHAQ");
	this.shape_238.setTransform(9.3,-165.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C1A084").s().p("AACgIQANgBACABIghARQAHgQALgBg");
	this.shape_239.setTransform(9.3,-165.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#050505").ss(1,1,1).p("AA1gDQgDgDgmgEQglgFgbAbQAIgEBhgLg");
	this.shape_240.setTransform(-6.3,-173.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#4C4C4C").s().p("AALgKQAmAEAEADQhhALgIAEQAcgbAjAFg");
	this.shape_241.setTransform(-6.3,-173.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#050505").ss(1,1,1).p("AArARQADgDgNgRQgNgSg/AHQAEAAAhAKQAeAHATAOg");
	this.shape_242.setTransform(-23.8,-172.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#4C4C4C").s().p("AgGgEIglgKQA/gHANASQANARgDADQgTgOgegHg");
	this.shape_243.setTransform(-23.8,-172.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#A8846A").ss(0.5,1,1).p("AA1AiQADgGgRgjQgRgmhKgDQgBADABAgQACAfAWAWQAWAWA7gcg");
	this.shape_244.setTransform(-22.9,-162.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F3F8FF").s().p("AgcAoQgWgWgCgfQgBggABgDQBKADARAmQARAjgDAGQgiAPgUAAQgRAAgKgJg");
	this.shape_245.setTransform(-22.9,-162.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#A8846A").s().p("AgcAoQgWgWgCgfQgBggABgDQBKADARAmQARAjgDAGQgiAPgUAAQgRAAgKgJg");
	this.shape_246.setTransform(-23,-161.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#A8846A").ss(0.5,1,1).p("Ag+AvQgFgGAQgpQAQgrBdgKQADADADAgQADAfgZAaQgZAZhPgRg");
	this.shape_247.setTransform(-5.9,-163.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#F3F8FF").s().p("Ag+AvQgFgGAQgpQAQgrBdgKQADADADAgQADAfgZAaQgPAPghAAQgYAAgggHg");
	this.shape_248.setTransform(-5.9,-163.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#A8846A").s().p("Ag+AvQgFgGAQgpQAQgrBdgKQADADADAgQADAfgZAaQgPAPghAAQgYAAgggHg");
	this.shape_249.setTransform(-5.1,-163.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#A8846A").s().p("AAMD4QgLgMgHgNQgOgXgGgbQgFghAEg/QAFhAAGgzIAHg4QgMgyADg0QABgPAFgWQAFgVALgKQgCAQgDASQABARAEAQQAJAfgBAiQgEAcgFAdQgDAeABAfQgBAbAAAeQAAAPgCAOIACAdQgIAxAIAzQANAhARAfQgIgJgKgIg");
	this.shape_250.setTransform(-27.4,-158.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#A8846A").ss(1,1,1).p("ADVhIQgEgqgbhEQgahEhKgYQg2gQhKgLQhLgLgxApQgxApAbCKQgBADgGA2QgHAzgFBAQgEBAAGAhQAHAxA1AqQA2ApCFgGQCEgRARhWQARhXgRhBQgJg2gCgMIgCgJQADACAUgGQAUgGgEgjg");
	this.shape_251.setTransform(-9.3,-158.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#C1A084").s().p("AiVEMQg1gqgHgxQgGghAEhAQAFhAAHgzIAHg5QgbiKAxgpQAxgpBLALQBKALA2AQQBKAYAaBEQAbBEAEAqQAEAjgUAGQgUAGgDgCIACAJIALBCQARBBgRBXQgRBWiEARIgfABQhsAAgwgkg");
	this.shape_252.setTransform(-9.3,-158.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#BA421C").ss(1,1,1).p("AAPAAQgBANgOABQgNgBgBgNQABgMANgBQAOABABAMg");
	this.shape_253.setTransform(-3.7,-101.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#8C2C13").s().p("AgOAAQABgMANgBQANABACAMQgCANgNABQgNgBgBgNg");
	this.shape_254.setTransform(-3.7,-101.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#BA421C").ss(1,1,1).p("AAPAAQgBANgOABQgNgBgBgNQABgMANgBQAOABABAMg");
	this.shape_255.setTransform(-3.5,-108.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#8C2C13").s().p("AgOAAQABgMANgBQANABACAMQgCANgNABQgNgBgBgNg");
	this.shape_256.setTransform(-3.5,-108.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#8C2C13").ss(1,1,1).p("AgdhbQgEACAEA1QAEAzA4BNQgBgBgDgbQgDgbAHgl");
	this.shape_257.setTransform(-32.1,-110.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#8C2C13").ss(1,1,1).p("AgHmpQAAAEAEA9QADA9AFBDQAGBHgCCNQgCCLgRBkQgBACgDAXQgDAXAAAMQABAYACAFQAEAEASArQATAqgPAd");
	this.shape_258.setTransform(11.6,-87.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#8C2C13").ss(1,1,1).p("AgCksQADAAANCXQAMCVgqEt");
	this.shape_259.setTransform(1.4,-89.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#8C2C13").ss(1,1,1).p("AgIl8QAGADAOCYQAQCZgrEPQAAAGABA/QACBAAAAx");
	this.shape_260.setTransform(-10,-80.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#8C2C13").ss(1,1,1).p("AgUGlQgMguAPhEQAPhDACgHQAmjHgQiWQgRiZgSgtQgNgrAFgeQAGgfACgB");
	this.shape_261.setTransform(-21.6,-84.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#AA3313").s().p("AAIAQIgZAGIgHgWIgCAAIgDgyQAFATAKANQAcAcAQAAIgGApIgQgjg");
	this.shape_262.setTransform(-10.9,-121.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#8C2C13").ss(1,1,1).p("AgChcQgBADADAhQAAAjARAWQAqAkAGgHIgKA/IgVgvIgbAGIgHgWIgrAgQgFgBgNglQgNgjAphBg");
	this.shape_263.setTransform(-13.8,-124);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#BA421C").s().p("AAiAuIgbAGIgHgWIgrAgQgFgBgNglQgNgjAphCIAfgQQgBAEADAhQAAAjARAWQAqAkAGgHIgKA/g");
	this.shape_264.setTransform(-13.8,-124);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#AA3313").s().p("AgVAeIgCgRQAMgQAYgzQABAVAEAUQgBACAAAFQABALAGAPQgWgCgLAVQgEALgEAFIgEgZg");
	this.shape_265.setTransform(-1.1,-122.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#8C2C13").ss(1,1,1).p("AAIhlQACACAVAZQAVAYAHAaQAFAYAAAWQgBAYAAABQgEgBgdgMQgcgLgKgBQgGACAGARQAGARABACQgBgBgPACQgPABgHAOQgNAbgEgCIgHg2QADgDAUgjQAUghAGgXQAGgrAQgLg");
	this.shape_266.setTransform(2.3,-125.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#BA421C").s().p("Ag4BlIgHg2IAXgmQAUghAGgXQAGgrAQgLIAXAbQAVAYAHAaQAFAYAAAWIgBAZIghgNQgcgLgKgBQgGACAGARIAHATIgQABQgPABgHAOQgMAagEAAIgBgBg");
	this.shape_267.setTransform(2.3,-125.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#A8846A").s().p("AhMALQgBgagLgJQArAUAtgJQAvgHAhggQACAPAFARQAGARgJALQgXAQgdACIhqAcIgCgrg");
	this.shape_268.setTransform(-6.1,-128.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#8C2C13").ss(1,1,1).p("AhkhVQgCgBAAATQABATAYAwIBHBzQACgIAOg0QARg2APgKIA9gYQgCAAgNgPQgPgQgFgyQgBAGgwAZQguAZhJgbg");
	this.shape_269.setTransform(-4.8,-122.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#C1A084").s().p("AhNAAQgYgwgBgTQAAgTACAAQBJAcAugZQAwgZABgGQAFAyAPARQANAOACAAIg9AYQgPAKgRA1IgQA9g");
	this.shape_270.setTransform(-4.8,-122.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#AA3313").s().p("AgPEUQgKgJgTgBQATgQAAgdIgBgQIgCgMQgEgPAAgLQAAgMAFgQQANgyACgxQABgfAFggQAGguAAg9IAAg8QgDgbgLgTQgGgNgDgNQgEgSgCgWIAaAVIAWAKQAVAJAFADIgBAeIgCAcQgJA9gHA3IABAmIAAAKQgCBBgUBbQgRBcgDAKIAAABIANAcIALAdIgCAYIgWgbg");
	this.shape_271.setTransform(19,-81.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#AA3313").s().p("Ah5AzQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQgngCgmgIIA5gQQAagIAYgLQAWgKAZgGQAQgCAOAGIAQAIIAugIQAsgJArgSQAdgNAhgDQgjAUgXAfQgdAagsgEQg1gGgyAGQgVAHgUAMQgRALgVAAIgGgBg");
	this.shape_272.setTransform(-10.7,-128.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#AA3313").s().p("AhLBFIg+gDQgdgBghgEQghgEgOgOQgZgjAfhSQBmBJCEAWQCCAXCGgbQhJAxhIAGQgeADgmAAQgzAAhFgGg");
	this.shape_273.setTransform(-6.2,-50);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#8C2C13").ss(1,1,1).p("AGEkQQgjg5gtgeQgXgRgigIQgygNgcgQQgdgPglgfQgeAOg7AXQg7AWgdgFQgKgGgVgHQgKAFgpAMQgTAGgFACQgpAQgpAHQhuAYgSBnQgIAogNA+QgNA9gOAZQArgLAvAZQAvAYASARQAYhEAAhJQAAABAGAdQAIAjAIA1QAIA0ABAzQgEBZgfBUQgWBDgIApQgJApASAYQASARArAEQAqADAcABQCRANBSgGQBUgGBVg9QgHgCgBgWQgCgVABgHIgbg5QABgDAMgzQALgzALg/QALhAgCgnQABgzAJg2QAJg1gcgwQAPAKAJAsQAJAsAGATQAegKArgaQAsgaAhgFQgLhHgkg4g");
	this.shape_274.setTransform(-3.2,-88);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#BA421C").s().p("AiVHDQgcgBgqgDQgqgEgSgRQgTgYAJgpQAIgpAWhDQAfhUAEhZQgBgzgIg0QgIg1gIgjIgGgeQABBJgYBEQgTgRgugYQgwgZgqALQANgZANg9QAOg+AHgoQAThnBtgYQApgHApgQIAYgIQApgMALgFQAUAHAKAGQAdAFA7gWQA7gXAegOQAlAfAcAPQAdAQAyANQAhAIAYARQAtAeAjA5QAjA4ALBHQghAFgrAaQgrAageAKQgGgTgJgsQgKgsgPgKQAcAwgJA1QgIA2gBAzQACAngMBAQgKA/gLAzIgNA2IAaA5QgBAHACAVQACAWAHACQhVA9hUAGQgbACgiAAQhDAAhjgJg");
	this.shape_275.setTransform(-3.2,-88);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#3083C1").s().p("AiCglIDUgnQACAAARAfQARAeAPAyQg+gHhEAXQhCAYhGACg");
	this.shape_276.setTransform(7.3,-44.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#3083C1").s().p("AiOF/QgGiMgBihQgBinARilQANhrAXhYQAWhYAJgaIA8AdIBkAxIA5AcIAABWQhlAAhcgYQAAAJgcA2QgbA2gDARQADAQAJABQAIAAAFAJQAJAPACAQQADARglgBQAEAYATAUQgOANgTAFQgFAVAHAOQAHAOgDASQgGATgHAHQgGAHAAAWQACAUAJAVQAJAXACAWQAAAXgNAPQgNAPgFASQgCAUAKAJQAKAJADAQQgFA0gJA6QgCAoAHAVQAHAVAbAdIgMAIIALAcIgcgLQgBAEAGABQASAFACAZQgFASgZAMQgZAMgHAagAh+gbQgRAxADBDIAFB5QgDAcABAdIAOkqIgDAEg");
	this.shape_277.setTransform(-20.1,0.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#3B799B").ss(1,1,1).p("AhGoPQgDAFgZBfQgZBfgQB5QgSCzACC1QADC3AGCbQAEADAzAUQAzATAygCQA0gBAHg7QAFhMAVieQAUieAUiGQATiJACgIIAAjVg");
	this.shape_278.setTransform(-20,-3.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#4496E0").s().p("AhbH+QgzgUgEgDQgGibgDi3QgCi1ASizQAQh5AZhfQAZhfADgFIDiBuIAADVIgVCRQgUCGgUCeQgVCegFBMQgHA7g0ABIgHABQguAAgwgSg");
	this.shape_279.setTransform(-20,-3.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#706257").s().p("AgHAdQgZgKABgFQgFgOgGgmQAmAWAsAJQAAAXADAXQgggEgSgGg");
	this.shape_280.setTransform(-39,162.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#706257").ss(1,1,1).p("AiMguQAFArAIAUQATAZBZAEQBYAFBAgcQACgFAGgqQhEAXhJgDQhJgChDgog");
	this.shape_281.setTransform(-29.9,162.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#8C7A6C").s().p("AgTAuQhZgEgTgZQgIgUgFgrQBDAoBJACQBJADBEgXQgGAqgCAFQg3AYhKAAIgXgBg");
	this.shape_282.setTransform(-29.9,162.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#AF947B").s().p("AhfCWQgYgJAAgFQgKgegFg5IgFg+IADhEIAEhLIA9gBIBqgDIA+gCIADAwQhoAmhchBQgPA7ADAyQAFAwAWAXQArAqA6AIQA8AHA8gSQgEAsgEATQgyAVhFABIgFAAQg/AAgogNg");
	this.shape_283.setTransform(-30.2,150.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#8C7A6C").ss(1,1,1).p("ABminIjvAHIgHCTQAAAGAFA4QAFA6AKAfQATAZBZAEQBYAFBAgcQABgDAFghQAFghgEgbQgGgbgNgfQgOgggBgDg");
	this.shape_284.setTransform(-30.2,150.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#BFA78E").s().p("AgQCnQhZgEgTgZQgKgfgFg6IgFg+IAHiTIDvgHIAHB6IAPAjQANAfAGAbQAEAbgFAhIgGAkQg3AYhKAAIgXgBg");
	this.shape_285.setTransform(-30.2,150.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#706257").s().p("AgWAMQgGgSgDgVQAfAQAgAGIgDAhQgwgKgDgGg");
	this.shape_286.setTransform(-0.7,149.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#42778E").ss(1,1,1).p("AhAsDICBJFQgBAAgIAGQgIAFADAPQAGAhgGAFIgbAZQAAADgBAqQgBArgEAqQgFAsgKAJQgFAKgFBnQgFBngCCGQgBCFgBBlQAABlAAAF");
	this.shape_287.setTransform(3.9,58.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#3083C1").s().p("AhVNcQgBgLAAgoQgDhaAVjbQAVjbBGlIIAAgTQgFiSgriEQgxiMgIizQgBhCAEhCQgBgpAbgfQAbgOAaARQAHALgBAbQgBAbACAWQAEAJAHACQAIABgEARQgOAVgZADQgBAbAVgFQAYgFAEAUQgEALghAPQgkAPgNAHQAbAOAhgDQAOABgTANQgVANABgEQgOAPgGAKQgGAKADAZQAJAzATA0QAQA0AGA2IACBOQABAlAWAlQAMAPARAQQASAPAAAVQgGASgXAKQgWAKAAASQAFARAYAJQAYAIAHATQgGgIgVAWQgWAYgEAJIAKAmIgBAFQgGAYgIAWQgeB3gHB5QgaEAA5D6Qg3gBg2gNg");
	this.shape_288.setTransform(2.3,48.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#2772AA").ss(1,1,1).p("Ai0uIIDUgnQADACAcA1QAbA2AEBUQAAAuAHB2QAGB2AJCIQAJCIAGBiQAHBiAAACQgBAHgGCQQgFCRAKDQQALDQAvDCQgIAGh5AVQh2AViKgdQgFgDALjuQAMjtBdmyQgCicgxiMQgxiLgHiz");
	this.shape_289.setTransform(12.4,42.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4496E0").s().p("Ai/OfQgFgDALjuQAMjtBdmyQgCicgxiMQgxiLgHizIAHkxIDUgnQADACAcA1QAbA2AEBUQAAAuAHB2IAPD+IAPDqIAHBkQgBAHgGCQQgFCRAKDQQALDQAvDCQgIAGh5AVQgzAJg0AAQhKAAhPgRg");
	this.shape_290.setTransform(12.4,42.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#AF947B").s().p("AgdAOQgYgFgcgKQg/gaAkAJQAkAJBIAJQBJALAxgRQAAAEgmAPQgVAIgeAAQgcAAgigHg");
	this.shape_291.setTransform(8.3,145.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#AF947B").s().p("AgiAPQgagBgZgDIABAAIBsgJQAggBgCgHQgCgHgCgCIAkARQgqAOgzAAIgbgBg");
	this.shape_292.setTransform(51.8,145.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#706257").s().p("AhQgBQAcAAAagJQATgRAWgHQAMgBAVADQAUAEAKAIQABACABADQACAMAAAOIAAASIgKAAIgngQIglgOIgGAMIgIASQgiAFgdACQABgTAAgSg");
	this.shape_293.setTransform(23.8,148.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#706257").ss(1,1,1).p("ACJgHQgygBgxgKQgKgCgKgDQgYgLgfAAQgRgBgRAHQgGAHgHAKQgOAFgQgBQgmAFgmACQhMAFhCgdQACAVAHASQADAGA2AKQA3ALCJgRQACgFAFgMQAGgLABgBQAFABAhAMQAgANAGADQAJABBBADQBBAEBKgDQBJgDAfgSQAAgGgDgZQhfAZhigKg");
	this.shape_294.setTransform(29.5,149.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#8C7A6C").s().p("AkJAfQg3gKgDgGQgGgSgDgVQBDAdBLgFQAmgCAlgFQARABAPgFIAMgRQAQgHASABQAfAAAYALQAJADAKACQAyAKAxABQBkAKBegZIADAfQggAShIADQhKADhBgEIhKgEIglgQIgogNIgFAMIgIARQhUAKg1AAQgiAAgUgEg");
	this.shape_295.setTransform(29.5,149.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#AF947B").s().p("AivAoQAFgnADgKIBEgMIB3gWIBEgMQAfAqA5AVQgVAHgVAFQhJAVhRALQgbAEgaAAQg2AAgwgQg");
	this.shape_296.setTransform(13.8,135.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#8C7A6C").ss(1,1,1).p("ACngMQg6gMhEgXQhDgYgigwIkIAvQgCAEgIA3QgHA1ARA5QgDAEA0ANQA0AOCWgTIANgdIBGAdQAFABBCAEQBBAEBLgDQBLgEAegTQAVgWgWgaQgWgbgTgIQg5gNg8gIg");
	this.shape_297.setTransform(29.1,141.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#BFA78E").s().p("AkTByQg0gNADgEQgRg5AHg1QAIg3ACgEIEIgvQAiAwBDAYQBEAXA6AMQA8AIA5ANQATAIAWAbQAWAagVAWQgeAThLAEQhLADhBgEIhHgFIhGgdIgNAdQhXALg2AAQgnAAgWgGg");
	this.shape_298.setTransform(29.1,141.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#A8846A").ss(1,1,1).p("ADomzIiXhBQgCAJgVBVQgUBWgNA4QgCAAgJAOQgJAPAAAoQgDgDgaBkQgbBigMDwIgNAnIh7B6QgBADgLAiQgKAigKAWQAAABAHAFQAGAEAMgJQANgNANgaQANgZABgDQAEgCAkgKQAkgLAQgBQALACAKAKQALAJALACQALACAGACQAHABADgPQADgSgGgRQgHgRADgMQAFgPABgmQABglAAgEQABgEAahLQAchLAjhoQAihmAUhaQAAgDADgcQAEgdAIgOQAGgKATgoQASgpAQgmQARgmABgDg");
	this.shape_299.setTransform(-52.9,-49.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#C1A084").s().p("AjgH0QgHgFAAgBQAKgWAKgiIAMglIB7h6IANgnQAMjwAbhiQAahkADADQAAgoAJgPQAJgOACAAIAhiOIAXheICXBBIgSApIgiBPQgTAogGAKQgIAOgEAdIgDAfQgUBagiBmQgjBogcBLIgbBPIgBApQgBAmgFAPQgDAMAHARQAGARgDASQgDAPgHgBIgRgEQgLgCgLgJQgKgKgLgCQgQABgkALIgoAMIgOAcQgNAagNANQgIAGgFAAQgDAAgCgBg");
	this.shape_300.setTransform(-52.9,-49.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#A8846A").ss(1,1,1).p("Agsn9QACAJAPBWQAPBXAIA6QACgBAGAPQAIAPgCApQADgDAUBlQAUBlgDDvIAKAoIBzCCQAAADAJAjQAIAiAIAXQAAABgIAEQgGAFgLgKQgNgOgKgbQgLgagBgDQgEgCgkgNQgjgNgPgCQgMABgLAJQgLAJgLABQgKABgGABQgGABgDgQQgBgRAHgRQAIgRgDgLQgDgQABglQACgmAAgEQgBgEgXhNQgXhMgahoQgchqgOhbQABgEgCgcQgBgdgIgOQgGgLgPgpQgPgqgOgnQgOgngBgDg");
	this.shape_301.setTransform(46.3,-49.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#C1A084").s().p("ACuH4QgLgOgLgbIgNgdIgngPQgjgNgQgCQgKABgMAJQgLAJgMABIgPACQgGABgDgQQgBgRAHgRQAIgRgCgLQgEgQACglIACgqIgZhRQgWhMgbhoQgbhqgPhbIAAggQgDgdgGgOQgHgLgPgpIgdhRIgOgqICbg3IAQBfIAXCRQACgBAGAPQAIAPgCApQADgDAVBlQAUBlgFDvIALAoIByCCIAJAmQAJAiAHAXQABABgIAEIgEABQgGAAgIgGg");
	this.shape_302.setTransform(46.3,-49.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#8C2C13").ss(1,1,1).p("ABfAyQgIAGhGABQhEABgshJQABgFAhgYQAhgYA6AYQA5AgAGAdQAFAegDADg");
	this.shape_303.setTransform(-41.8,-81.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#AA3313").s().p("AhfgPQABgFAhgYQAhgYA6AYQA5AgAGAdQAFAegDADQgIAGhGABIgDAAQhCAAgrhIg");
	this.shape_304.setTransform(-41.8,-81.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#8C2C13").ss(1,1,1).p("ABegfQAAADgUAaQgTAYgqAQQgnAPhDgcQgCgIAnglQAngnBvAcg");
	this.shape_305.setTransform(37.8,-85.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#AA3313").s().p("AhdAZQgCgIAnglQAngnBvAcQAAADgUAaQgTAYgqAQQgNAFgRAAQghAAgrgSg");
	this.shape_306.setTransform(37.8,-85.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#A8846A").ss(1,1,1).p("AgGAbQgDgHAGgXQAEgKAHgN");
	this.shape_307.setTransform(-55,-30.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#C1A084").s().p("AgDgDIALgXIgOA1QgDgHAGgXg");
	this.shape_308.setTransform(-55,-30.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#A8846A").ss(1,1,1).p("AgHAnQAAgBgCgOQgBgOAEgLQAGgPAKgW");
	this.shape_309.setTransform(-49.7,-31);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#C1A084").s().p("AgJAYQgBgOAEgLIAQglIgRBNIgCgPg");
	this.shape_310.setTransform(-49.7,-31);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#A8846A").ss(1,1,1).p("AgMAlQgCAAACgTQACgSAXgk");
	this.shape_311.setTransform(-44.5,-31.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#C1A084").s().p("AgLASQABgSAYgkIgZBJQgDAAADgTg");
	this.shape_312.setTransform(-44.5,-31.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#A8846A").ss(1,1,1).p("ACRgaQgOgBgPAAQgPgBgHgOQgDgNgMgHQgLgCgMABQgTgEgPgLQgNgGgNAFQgGACgFAFQgFAHgFAFQgIgBgNgCQgMABgEALQgFgDgIABQgIADgFAGQgLAHgOABQgRAFgIAQQgMANgDAPQAAAEAAAXQAAAYAAADQABACAOABQAOABAIgbQgDAPABAPQAGAMANgFQAagIAGgcQABAFABAEQAAAHABAIQAIAQARgKQASgLAEgVQgCASALAJQAOACAOgKQAMgOgEgSQADgSASgMQAFgGAIgFQAMABAJAKQATAMAWgFQAHgBAHgCQAOgCACgMQACgMgLgEg");
	this.shape_313.setTransform(-44,-32.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#C1A084").s().p("Ah2BKQgBgPADgPQgIAbgOgBQgOgBgBgCIAAgbIAAgbQADgPAMgNQAIgQARgFQAOgBALgHQAFgGAIgDQAIgBAFADQAEgLAMgBIAVADIAKgMQAFgFAGgCQANgFANAGQAPALATAEQAMgBALACQAMAHADANQAHAOAPABQAPAAAOABQALAEgCAMQgCAMgOACIgOADQgWAFgTgMQgJgKgMgBQgIAFgFAGQgSAMgDASQAEASgMAOQgOAKgOgCQgLgJACgSQgEAVgSALQgRAKgIgQIgBgPIgCgJQgGAcgaAIIgHABQgIAAgEgIg");
	this.shape_314.setTransform(-44,-32.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#A8846A").ss(1,1,1).p("Ahkh6IABABQgFAugEAuQgBAdAFAMQAGANAOAXQAFAKACASQACARAFAFQAfAVgHgoQgGgngEgMQAbgJAcAOQAaANAYALQAAADAMAbQALAaAMAOQALAKAHgEQAGgEABgCQgIgWgJgiQgIgjAAgEIhxiAIgKgl");
	this.shape_315.setTransform(55.3,-12.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#C1A084").s().p("ABUB/QgMgOgLgaIgMgeIgygYQgcgOgbAJQAEAMAGAnQAHAogfgVQgFgFgCgRQgCgSgFgKQgOgXgGgNQgFgMABgdIAJhcIgBgBIA9gLIAKAlIBxCAIAIAnQAJAiAIAWQgBACgGAEIgEABQgGAAgIgHg");
	this.shape_316.setTransform(55.3,-12.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#8C2C13").ss(1,1,1).p("AgbhBQAJgGASAXQAEASAKAeQAKAeABADIADAYIgKAK");
	this.shape_317.setTransform(39.4,-96);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#BA421C").s().p("AgbhBQAJgGASAXIAOAwIALAhIADAYIgKAKg");
	this.shape_318.setTransform(39.4,-96);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#8C2C13").ss(1,1,1).p("AgFhBQgBAAgJAIQgIAIABAKQAFAUAPAmQAMAuANAB");
	this.shape_319.setTransform(30.6,-94.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#BA421C").s().p("AgCATQgPgmgFgUQgBgKAIgIIAKgIIAcCDQgNgBgMgug");
	this.shape_320.setTransform(30.6,-94.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#8C2C13").ss(1,1,1).p("AALhBIAHAUQgBABgGASQgGASAAAOQAAARgFAVQgEAUgNAC");
	this.shape_321.setTransform(-33.3,-90.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#BA421C").s().p("AALhBIAHAUIgHATQgGASAAAOQAAARgFAVQgEAUgNACg");
	this.shape_322.setTransform(-33.3,-90.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#8C2C13").ss(1,1,1).p("AAQhDQgHgBgGASQgBAPgHAoQgJApgBAFQgDAEANAN");
	this.shape_323.setTransform(-43.1,-91.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#BA421C").s().p("AgPAzIAKguQAHgoABgPQAGgSAHABIgVCHQgNgNADgEg");
	this.shape_324.setTransform(-43.1,-91.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#8C2C13").ss(1,1,1).p("ABZBhQgBgGgLgOQgOgVg/gLQhLgFgiAXIAZiOQAEgFA/gMQA8gMBCAxIgUCcIAAAC");
	this.shape_325.setTransform(-38.8,-88.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#BA421C").s().p("ABOBOQgOgUhAgLQhLgGghAYIAYiOQAFgGA+gMQA8gMBCAyIgTCbQgCgFgKgPg");
	this.shape_326.setTransform(-38.8,-88.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#A8846A").ss(1,1,1).p("Ag/kqQACAsgPCFQgTBygFA6QgCBDAHBGQAHBGAFAeQADACAjAHQAjAHATgSQABgEAJg6QAIg6AIhFQAHhFgCgiQgDgxAMgxQAahaAahTQgDgBgogFQgogFgmgFQgogFgDAAg");
	this.shape_327.setTransform(-39.3,-66.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#C1A084").s().p("AgtEpQgjgHgDgCQgFgegHhGQgHhGAChDQAFg6AThyQAPiFgCgsIArAFIBOAKIArAGQgaBTgaBaQgMAxADAxQACAigHBFQgIBFgIA6IgKA+QgNANgXAAQgIAAgKgCg");
	this.shape_328.setTransform(-39.3,-66.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#8C2C13").ss(1,1,1).p("AAbhdQgFADgaA2QgcA1AIBN");
	this.shape_329.setTransform(26.5,-111.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#8C2C13").ss(1,1,1).p("AgRgxIAjBj");
	this.shape_330.setTransform(25.7,-104.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#8C2C13").ss(1,1,1).p("AhzgdQAAgHAuglQAvgmBbATIAvCAQgHgFhGACQhEACgtBAg");
	this.shape_331.setTransform(35.6,-92.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#BA421C").s().p("AhzgdQAAgHAuglQAvgmBbATIAvCAQgHgFhGACQhEACgtBAg");
	this.shape_332.setTransform(35.6,-92.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#A8846A").ss(1,1,1).p("ADVhIQgEgqgbhEQgahEhKgYQg2gQhKgLQhLgLgxApQgxApAbCKQgBADgGA2QgHAzgFBAQgEBAAGAhQAHAxA1AqQA2ApCFgGQCDgRAShWQARhXgRhBQgJg2gCgMIgCgJQADACAUgGQAUgGgEgjg");
	this.shape_333.setTransform(-9.3,-158.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#C1A084").s().p("AiVEMQg1gqgHgxQgGghAEhAQAFhAAHgzIAHg5QgbiKAxgpQAxgpBLALQBKALA2AQQBKAYAaBEQAbBEAEAqQAEAjgUAGQgUAGgDgCIACAJIALBCQARBBgRBXQgSBWiDARIgfABQhsAAgwgkg");
	this.shape_334.setTransform(-9.3,-158.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#AA3313").s().p("AgREmQgcgUgCgKQAEgPAQgIQgFgLgLgGQgLgHgDgGQACgZARgVQA2iEgEiNIgBiEIgEhSQAFAaAJANIAYAgQATAggKAoIgQB1IABAkIABAKQgDBCgTBbQgSBcgDAKIAAABIALAcIAOAdIgEAWQgJgIgagVg");
	this.shape_335.setTransform(17.8,-84.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#3083C1").s().p("AiVF/QgGiMgBihQgBinARilQANhrAXhYQAWhYAJgaIA8AdIBkAxIA5AcQAEAvAIAtQAIAsgcAtQADgggSgeQgSgdgggIQg9gIg7gMQAAAJgcA2QgbA2gDARQADAQAJABQAIAAAFAJQAJAPACAQQADARglgBQAEAYATAUQgOANgTAFQgFAVAHAOQAHAOgDASQgGATgHAHQgGAHAAAWQACAUAJAVQAJAXACAWQAAAXgNAPQgNAPgFASQgCAUAKAJQAKAJADAQQgFA0gJA6QgCAoAHAVQAHAVAbAdIgMAIIALAcIgcgLQgBAEAGABQASAFACAZQgFASgZAMQgZAMgHAagAiFgbQgRAxADBDIAFB5QgDAcABAdIAOkqIgDAEg");
	this.shape_336.setTransform(-19.4,0.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#3B799B").ss(1,1,1).p("AhDoPQgDAFgZBfQgaBfgPB5QgTCzADC1QACC3AHCbQAEADAzAUQAzATAygCQA0gBAHg7QAFhMATidQATidATiEQASiHABgJIgDjdg");
	this.shape_337.setTransform(-20.3,-3.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#4496E0").s().p("AhYH+QgzgUgEgDQgHibgCi3QgDi1ATizQAPh5AahfQAZhfADgFIDZBrIADDdIgTCQQgTCEgTCdQgTCdgFBMQgHA7g0ABIgIABQguAAgvgSg");
	this.shape_338.setTransform(-20.3,-3.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#AF947B").s().p("AhfCWQgZgJABgFQgKgegFg5IgFg+IADhEIAEhLIA9gBIBqgDIA+gCIADAwQhoAmhchBQgPA7ADAyQAFAwAWAXQArAqA6AIQA8AHA8gSQgEAsgEATQgyAVhFABIgFAAQg/AAgogNg");
	this.shape_339.setTransform(-30.2,150.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#3083C1").s().p("AhVNcQgBgLAAgoQgDhaAVjbQAVjbBGlIIAAgTQgFiSgriEQgxiMgIizQgChCAFhCQgBgpAbgfQAbgOAaARQAHALgBAbQgBAbACAWQAEAJAHACQAIABgEARQgOAVgZADQgBAbAVgFQAYgFAEAUQgEALghAPQgkAPgNAHQAbAOAhgDQAOABgTANQgVANABgEQgOAPgGAKQgGAKADAZQAJAzATA0QAQA0AGA2IACBOQABAlAWAlQAMAPARAQQASAPAAAVQgGASgXAKQgWAKAAASQAFARAYAJQAYAIAHATQgGgIgVAWQgWAYgEAJIAKAmIgBAFQgGAYgIAWQgeB3gHB5QgaEAA5D6Qg3gBg2gNg");
	this.shape_340.setTransform(2.3,48.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#AF947B").s().p("AgiAPQgagBgZgDIABAAIBsgJQAggBgCgHQgCgIgCgBIAkARQgqAOgzAAIgbgBg");
	this.shape_341.setTransform(51.8,145.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#A8846A").ss(1,1,1).p("AAukdQgPhXgCgJIiZA3QABADAOAnQAOAoAPApQAPAqAGAKQAHAPACAcQACAdgBADQAOBWAZBmQAYBnAXBNQAXBNAEANQAegEAfgIIgBgCQAEjxgUhlQgUhkgEADQAEgfgJgTQgIgTgCgBQgJg5gOhXg");
	this.shape_342.setTransform(38.8,-62.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#C1A084").s().p("AAlEkQgXhOgYhlQgZhngOhVIgBghQgCgcgHgPQgGgKgPgpIgdhRIgPgrICZg2IARBfIAXCRQACAAAIATQAJATgEAfQAEgCAUBiQAUBmgEDwIABADQgfAHgeAFIgbhag");
	this.shape_343.setTransform(38.8,-62.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#8C2C13").ss(1,1,1).p("ABjAbQgGAHhFAMQhDANg3hCQABgEAhgWQAigWAvALQAvASASAaQASAYgBADg");
	this.shape_344.setTransform(-39.8,-81.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#BA421C").s().p("AhigHQABgEAhgWQAigWAvALQAvASASAaQASAYgBADQgGAHhFAMQgLACgLAAQg2AAgug3g");
	this.shape_345.setTransform(-39.8,-81.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#8C2C13").ss(1,1,1).p("AheAcQAIAIBKAHQBHAGAkhVQgGgGhBAAQhAgBg2BHg");
	this.shape_346.setTransform(37.7,-85.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BA421C").s().p("AgMArQhKgHgIgIQA2hHBAABQBBAAAGAGQghBPhAAAIgKAAg");
	this.shape_347.setTransform(37.7,-85.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#A8846A").ss(1,1,1).p("AgFAXQgDgGAGgTQADgJAGgL");
	this.shape_348.setTransform(-42.8,-20);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#C1A084").s().p("AgCgCIAJgUIgMAtQgDgGAGgTg");
	this.shape_349.setTransform(-42.8,-20);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#A8846A").ss(1,1,1).p("AgGAiQgEgJAFgZQAFgOAJgT");
	this.shape_350.setTransform(-38.1,-20.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#C1A084").s().p("AgFgBIAOggIgPBDQgEgJAFgag");
	this.shape_351.setTransform(-38.1,-20.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#A8846A").ss(1,1,1).p("AgKAgQgBAAABgQQABgQAUgf");
	this.shape_352.setTransform(-33.7,-21);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#C1A084").s().p("AgKAQQABgQAUgfIgVA/QgBAAABgQg");
	this.shape_353.setTransform(-33.7,-21);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#A8846A").ss(1,1,1).p("AB5ADQALgCACgKQACgKgKgEQgcAFgQgTQgDgLgKgGQgKgCgKABQgRgDgNgKQgMgFgKAEQgFACgFAEQgEAGgEAFQgHgBgMgCQgKABgDAKQgFgDgHABQgHADgFAFQgJAGgMAAQgPAFgHAOQgKAMgDAMQAAADAAAVQAAAUAAADQABACAMABQAMAAAHgXQgCANABANQAEAKAMgEQAXgHAFgYQAAAEACAEQAAAGAAAGQAIAPAPgJQAPgKADgSQgBAPAJAIQAMADANgJQAJgMgDgRQADgPAPgKQAFgGAHgEQAKABAIAJQARAKATgFQAGgBAHgBg");
	this.shape_354.setTransform(-33.2,-21.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#C1A084").s().p("AhmBAQgBgNACgNQgHAXgMAAQgMgBgBgCIAAgXIAAgYQADgMAKgMQAHgOAPgFQAMAAAJgGQAFgFAHgDQAHgBAFADQADgKAKgBIATADIAIgLQAFgEAFgCQAKgEAMAFQANAKARADQAKgBAKACQAKAGADALQAQATAcgFQAKAEgCAKQgCAKgLACIgNACQgTAFgRgKQgIgJgKgBQgHAEgFAGQgPAKgDAPQADARgJAMQgNAJgMgDQgJgIABgPQgDASgPAKQgPAJgIgPIAAgMIgCgIQgFAYgXAHIgHABQgGAAgDgHg");
	this.shape_355.setTransform(-33.2,-21.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#EA5B57").s().p("AA9ANQgTgbg9gFIg4AAIAKgUIBJAAQAEgEAcALQAcAKAJA/QgDgIgNgUg");
	this.shape_356.setTransform(50.8,0.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#A82B1B").s().p("AnPAUIAAgnIOfAAIAAAng");
	this.shape_357.setTransform(-4.5,-8.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#871512").ss(1,1,1).p("AHvkzIAAJnQgFA3hBAFItRAAQhBgFgFg3IAApnQAFg3BBgFINRAAQBBAFAFA3g");
	this.shape_358.setTransform(-4.8,50.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#470E06").ss(1,1,1).p("AIlC+QgHAjhIACIurAAQhIgCgHgjIAAl8QAHgiBIgDIOrAAQBIADAHAig");
	this.shape_359.setTransform(-4.8,50.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#7F1804").s().p("AnWDjQhHgCgGgjIAAl7QAGgjBHgCIOsAAQBHACAIAjIAAF7QgIAjhHACg");
	this.shape_360.setTransform(-4.8,50.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#A82B1B").s().p("AoqIsQhGgHgHhHIAAu7QAHhIBGgGIRUAAQBHAHAHBHIAAO7QgHBHhHAHg");
	this.shape_361.setTransform(-4.8,53.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("Al0QqIAAiHIATgEQCFgcA4hJIAApmImaAAQgzgCghgiQghghgBg0IAAveQABgzAhghQAhgiAzgBIBcAAIAAguIPJAAIAAAuIBYAAQAyABAiAiQAhAhACAzIAAPeQgCAzghAjQgiAhgyACImaAAIAAJmQA4BJCFAcIATAEIAACHg");
	this.shape_362.setTransform(-4.8,93.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#8C2C13").ss(1,1,1).p("ABaBhIgBACABaBhQgCgGgKgOQgPgVg+gLQhMgFgiAXIAZiOQAEgFA/gMQA8gMBDAxg");
	this.shape_363.setTransform(-39,-88.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#BA421C").s().p("ABNBOQgOgUg+gLQhLgGgjAYIAZiOQAEgGA/gMQA9gMBCAyIgUCbQgCgFgLgPg");
	this.shape_364.setTransform(-39,-88.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#A8846A").ss(1,1,1).p("AA2iKQAOhtAPhmQgDAAgoAAQgoAAgnAAQgoAAgDAAQAIA0ACCeQgECKACBFQAHBPAQBSQAPBRAJAiQAEADAhADQAkADATgZQAAgFABhGQABhGgBhSQgBhSgHgnQgKg6AGg8g");
	this.shape_365.setTransform(-38.1,-59.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#C1A084").s().p("AAKFeQghgDgEgDQgJgigPhRQgQhSgHhPQgChFAEiKQgCiegIg0IArAAIBPAAIArAAQgPBmgOBtQgGA8AJA6QAIAnAABSQACBSgCBGIAABLQgRAWgfAAIgHAAg");
	this.shape_366.setTransform(-38.1,-59.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#8C2C13").ss(1,1,1).p("AgmhKQADABAgAqQAdAnAOBD");
	this.shape_367.setTransform(31.1,-110.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#BA421C").s().p("AgmhKQADABAfAqQAeAnANBCg");
	this.shape_368.setTransform(31.1,-110.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#8C2C13").ss(1,1,1).p("AAUhNQgCABgKAQQgIAQgFAYQgFAjgFAeQgEAfAAAC");
	this.shape_369.setTransform(-37.6,-106.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#BA421C").s().p("AgPAtIAKhBQAEgYAJgQIALgRIgmCbIAEghg");
	this.shape_370.setTransform(-37.6,-106.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#A8846A").ss(1,1,1).p("AgrgIQACABAcAHQAbAIAeAB");
	this.shape_371.setTransform(-18.4,-140.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#C1A084").s().p("AgNAAIgegIIBXAQQgeAAgbgIg");
	this.shape_372.setTransform(-18.4,-140.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#A82A24").s().p("AgPAOQgOgCgMgMIgEgEQAxgZApAfQgSANgbABIAAAAIgPgCg");
	this.shape_373.setTransform(-13.2,-136);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("ADpBcIgRgFIAAgSIAAgPIgTALIgIgeQAFgJACggQABgcgUgUIgFgEIgDAFQgBAHgjAhQgjAfhSAGIAYgGIgDgKIgkADIg/ADIAjgUIgEgJIhAARQg5AQgoAFIAagYIATgSIgSAEQgEACgeAEQgfAEgegKIAigMIgBgKIgTgBIgcgBIACgEIBYghQAEAfgbAUQA2ACAgghQAEAegWAWQA5gQAqgnQASAYAGAcIAzgkQABAVgBAUQAdgPAXgXQACAVAFATQA6goApgzQgHARAQAoQAQAmAEAWIAUgqQAOAhgSAkQAWgHAPgUQAAAIgIASQgJASgKANQgIAJgGAAIgBAAg");
	this.shape_374.setTransform(-11.9,-177.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(1,1,1).p("AgjABQAGgBAFAAIA7AA");
	this.shape_375.setTransform(-22.6,-194.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#4C4C4C").s().p("ADTCKIAAgcIgQAKIgLgmQADgDAEgfQAEgfgVgUQABAEgrAnQgsAnhkgDIAygPIgsADQgqACgfABIAygfIhLAVQhDATghAAIApgoQgEACgkAEQglAEgfgRIAsgPIg2gDQAAgHAlg2QAlg3BAgQIACAAQAsgIAcAFIg9ABIgLACIALgCIA9gBQAvgFBMgNQBOgOA0BVIABgTQAAgSgHgNQADACARAXQASAXgFAUIAAAAIAAAAQABgBAMAAQAMAAAWAUIgQAAQgOAAgHAGQAEABAYAZQAZAXAIAkQABAkgWAaQgXAZgDABg");
	this.shape_376.setTransform(-12,-181.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#3083C1").s().p("AhMG6QADi2AbjHQAbjGAaiUQAciUAIgcIAhgEQhPEXgKEcQgDDFBMCrQhtgLgbgNg");
	this.shape_377.setTransform(-38.8,89.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#2772AA").ss(1,1,1).p("AgvnJQgCAHgdCUQgdCTgdDQQgeDRgCDBQAGAGBoARQBlARB+gvIAAuh");
	this.shape_378.setTransform(-30.1,88.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#4496E0").s().p("Ag6HeQhngRgHgGQACjBAejRQAdjQAdiTIAfibIDYgYIAAOhQhcAihOAAQgdAAgcgEg");
	this.shape_379.setTransform(-30.1,88.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#050505").ss(1,1,1).p("AA1gDQgDgDgmgEQgkgFgcAbQAIgEBhgLg");
	this.shape_380.setTransform(-6.5,-173.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#4C4C4C").s().p("AALgKQAnAEADADQhhALgIAEQAbgbAkAFg");
	this.shape_381.setTransform(-6.5,-173.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#BA421C").ss(1,1,1).p("AAPAAQgBANgOABQgMgBgCgNQACgMAMgBQAOABABAMg");
	this.shape_382.setTransform(-3.9,-101.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#BA421C").ss(1,1,1).p("AAPAAQgBANgOABQgMgBgCgNQACgMAMgBQAOABABAMg");
	this.shape_383.setTransform(-3.7,-108.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#8C2C13").s().p("AgOAAQACgMAMgBQAOABABAMQgBANgOABQgMgBgCgNg");
	this.shape_384.setTransform(-3.7,-108.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#AA3313").s().p("AgVAeIgCgRQAMgQAYgzQACAVADAUQgCACAAAFQACALAGAPQgWgCgLAVQgEALgFAFIgDgZg");
	this.shape_385.setTransform(-1.3,-122.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#8C2C13").ss(1,1,1).p("AGEkQQgjg5gtgeQgXgRgigIQgygNgcgQQgdgPglgfQgeAOg7AXQg6AWgdgFQgKgGgVgHQgLAFgpAMQgSAGgGACQgpAQgpAHQhuAYgSBnQgIAogNA+QgNA9gOAZQAsgLAuAZQAvAYATARQAYhEgBhJQABABAGAdQAHAjAIA1QAIA0ABAzQgEBZgeBUQgWBDgJApQgJApASAYQASARArAEQAqADAdABQCRANBRgGQBUgGBVg9QgHgCgBgWQgCgVABgHIgbg5QABgDAMgzQALgzALg/QALhAgCgnQABgzAJg2QAJg1gcgwQAPAKAJAsQAJAsAGATQAegKArgaQAsgaAhgFQgLhHgkg4g");
	this.shape_386.setTransform(-3.4,-88);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#BA421C").s().p("AiVHDQgcgBgqgDQgqgEgTgRQgSgYAJgpQAJgpAWhDQAfhUADhZQgBgzgIg0QgIg1gHgjIgHgeQAABJgXBEQgTgRgvgYQgugZgsALQAOgZANg9QAOg+AHgoQAShnBvgYQAogHApgQIAYgIQApgMAKgFQAWAHAKAGQAcAFA7gWQA7gXAegOQAkAfAeAPQAcAQAyANQAiAIAXARQAtAeAjA5QAjA4ALBHQggAFgsAaQgrAagfAKQgGgTgIgsQgKgsgPgKQAdAwgKA1QgJA2AAAzQACAngMBAQgKA/gLAzIgNA2IAaA5QgBAHACAVQACAWAHACQhWA9hTAGQgbACgiAAQhDAAhjgJg");
	this.shape_387.setTransform(-3.4,-88);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#3083C1").s().p("AiCglIDUgnQABAAASAfQASAeAPAyQg/gHhEAXQhCAYhGACg");
	this.shape_388.setTransform(7.1,-44.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#706257").s().p("AgIAdQgXgKABgFQgGgOgGgmQAnAWArAJQAAAXADAXQgggEgTgGg");
	this.shape_389.setTransform(-39.2,162.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#AF947B").s().p("AhgCWQgXgJABgFQgLgegFg5IgFg+IADhEIADhLIA+gBIBqgDIA+gCIADAwQhoAmhchBQgPA7ADAyQAEAwAXAXQArAqA6AIQA8AHA8gSQgDAsgFATQgxAVhFABIgGAAQg/AAgpgNg");
	this.shape_390.setTransform(-30.4,150.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#42778E").ss(1,1,1).p("AhAsDICBJFQgBAAgIAGQgIAFADAPQAGAhgGAFIgbAZQAAADgBAqQgBArgEAqQgFAsgKAJQgFAKgFBnQgEBngCCGQgCCFAABlQgBBlAAAF");
	this.shape_391.setTransform(3.7,58.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#706257").s().p("AhQgBQAcAAAagJQATgRAVgHQANgBAVADQAUAEAKAIQABACABADQACAMAAAOIAAASIgJAAIgogQIglgOIgGAMIgIASQgjAFgcACQABgTAAgSg");
	this.shape_392.setTransform(23.6,148.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#706257").ss(1,1,1).p("ACJgHQgygBgygKQgKgCgJgDQgYgLgfAAQgSgBgQAHQgGAHgHAKQgOAFgRgBQglAFgmACQhMAFhCgdQACAVAHASQADAGA2AKQA2ALCJgRQADgFAFgMQAGgLABgBQAFABAhAMQAgANAGADQAJABBCADQBBAEBJgDQBJgDAfgSQAAgGgDgZQheAZhjgKg");
	this.shape_393.setTransform(29.3,149.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#8C7A6C").s().p("AkKAfQg2gKgDgGQgGgSgDgVQBDAdBLgFQAmgCAlgFQARABAPgFIAMgRQAQgHASABQAfAAAYALQAJADAKACQAyAKAxABQBkAKBegZIADAfQggAShJADQhIADhCgEIhKgEIgmgQIgngNIgGAMIgHARQhUAKg1AAQgiAAgVgEg");
	this.shape_394.setTransform(29.3,149.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#BA421C").s().p("AhigHQABgEAhgWQAigWAvALQAvASASAaQASAYgBADQgGAHhFAMQgLACgKAAQg3AAgug3g");
	this.shape_395.setTransform(-40,-81.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#8C2C13").ss(1,1,1).p("ABZBhIAAACABZBhQgBgGgLgOQgOgVg/gLQhLgFgiAXIAZiOQAEgFA/gMQA8gMBCAxg");
	this.shape_396.setTransform(-38.8,-88.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#A8846A").ss(1,1,1).p("AhMh5QgTBygFA6QgCBDAHBGQAHBGAFAeQADACAjAHQAjAHATgSQABgEAJg6QAIg6AIhFQAHhFgCgiQgDgxAMgxQAahaAahTQgDgBgogFQgogFgmgFQgogFgDAAQACAsgPCFg");
	this.shape_397.setTransform(-39.3,-66.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(1,1,1).p("AgjABQAFgBAGAAIA8AA");
	this.shape_398.setTransform(-22.5,-194.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#4C4C4C").s().p("ADTCKIAAgcIgQAKIgLgmQADgDAEgfQAEgfgVgUQABAEgrAnQgsAnhkgDIAygPIgsADQgqACgfABIAygfIhLAVQhDATghAAIApgoQgEACgkAEQglAEgfgRIAsgPIg2gDQAAgHAlg2QAlg3BAgQIALgCIA/gBQAvgFBMgNQBOgOA0BVIABgTQAAgSgHgNQADACARAXQASAXgFAUIAAAAIAAAAQABgBAMAAQAMAAAWAUIgQAAQgOAAgHAGQAEABAYAZQAZAXAIAkQABAkgWAaQgXAZgDABg");
	this.shape_399.setTransform(-11.8,-181.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#277489").ss(1,1,1).p("ABLAAQgFA8g8AGIgSAAQg9gGgFg8QAFg7A9gGIASAAQA8AGAFA7g");
	this.shape_400.setTransform(18.5,-23.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#5DCBE8").s().p("AgIBBQg9gFgFg8QAFg7A9gGIASAAQA8AGAFA7QgFA8g8AFg");
	this.shape_401.setTransform(18.5,-23.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#A8846A").ss(1,1,1).p("ABLhdQgGArAWAmQALAUAGAcQAFAbgTAVQgQAPgVgIQgOgIACgKQACgKgDgNQgRghglgBQgkgGgTAbQgGAKgMALQgMAMgMgJQgFgQAKgVQACgkAjgQQAUgLAWgF");
	this.shape_402.setTransform(19.5,-28.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#C1A084").s().p("AA5BbQgOgIACgKQACgKgDgNQgRghglgBQgkgGgTAbQgGAKgMALQgMAMgMgJQgFgQAKgVQACgkAjgQQAUgLAWgFIBigxQgFArAVAmQALAUAGAcQAFAbgTAVQgKAKgNAAQgHAAgHgDg");
	this.shape_403.setTransform(19.5,-28.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#A8846A").s().p("AgtFcIgogIIAAgZIAAgUIABhPQABhHAFg8QAFg4AGglIAFgqIgDhIIgHiFIgDhMQA/ghArAOQAsAOALAMIgDAqQgugVgmgKQgogLgDARQAJCcgaCVQgZCTAWCcQAQApAtAIIgBAFIgpgHg");
	this.shape_404.setTransform(24.7,-60.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#A8846A").ss(1,1,1).p("ABblHQgCgGgygUQgvgUhIAnIANEbQAAACgGAnQgFAlgGA5QgEA9gBBIQgBBHAAAGIAAAyIBaARQAAgEAOhCQAOhCAQhPQAQhOAEgpQAFg0ABgSQABgBAAAAg");
	this.shape_405.setTransform(24.7,-60);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#C1A084").s().p("AhaFYIAAgyIABhNQABhIAEg9QAGg5AFglIAGgpIgNkbQBIgnAvAUQAyAUACAGIgUEbIgBABIgGBGQgEApgQBOIgeCRIgOBGg");
	this.shape_406.setTransform(24.7,-60);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#8C2C13").ss(1,1,1).p("AgehVQACgDAYAhQAWAiANBr");
	this.shape_407.setTransform(27.4,-114.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#8C2C13").ss(1,1,1).p("AgTg1QAEgEAQATQASASABBL");
	this.shape_408.setTransform(21.2,-112.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#8C2C13").ss(1,1,1).p("AgoBRQgDgGAMg+QANg7A8gi");
	this.shape_409.setTransform(21,-116.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#8C2C13").ss(1,1,1).p("AAAgqIAABV");
	this.shape_410.setTransform(31.2,-100.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#8C2C13").ss(1,1,1).p("AADgjIgFBH");
	this.shape_411.setTransform(17.5,-100.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#6B1D0D").ss(1,1,1).p("ABxACQgBAXghAOQggAOgvgBQgvgBgggQQgggPgBgVQABgXAhgOQAhgOAuABQAwABAfAQQAhAPAAAVg");
	this.shape_412.setTransform(25,-92.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#8C2C13").s().p("AAAA0QgvgBghgQQgfgQgBgUQABgWAhgPQAggOAuABQAxABAfAQQAhAQAAAUQgCAXggAOQgfAOguAAIgCgBg");
	this.shape_413.setTransform(25,-92.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#8C2C13").ss(1,1,1).p("AhmgdQAEgJBCgaQA/gaBSA9IAABiIjhADg");
	this.shape_414.setTransform(24.9,-99.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#BA421C").s().p("AhmgdQAEgJBCgaQA/gaBSA9IAABiIjhADg");
	this.shape_415.setTransform(24.9,-99.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#8C2C13").ss(1,1,1).p("AA6hyQAEACAXA9QAXA8gKBqIjGgKQAFgBARgdQASgfgXhG");
	this.shape_416.setTransform(24.4,-109.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#BA421C").s().p("AhkBpQAFgBARgeQASgfgXhFICNhYQAEACAXA9QAXA7gKBrg");
	this.shape_417.setTransform(24.4,-109.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#A82A24").s().p("AgPAOQgOgCgMgMIgDgEQAwgZApAfQgRANgcABIAAAAIgPgCg");
	this.shape_418.setTransform(-13,-136);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("ADpBcIgRgFIAAgSIAAgPIgSALIgJgeQAFgJACggQABgcgTgUIgGgEIgDAFQAAAHgkAhQgjAfhSAGIAXgGIgCgKIgkADIg/ADIAkgUIgFgJIhAARQg6AQgoAFIAbgYIASgSIgSAEQgDACgeAEQgfAEgdgKIAhgMIgCgKIgTgBIgbgBIACgEIBXghQAFAfgaAUQA0ACAhghQAEAegWAWQA6gQApgnQASAYAGAcIA0gkQAAAVAAAUQAcgPAXgXQACAVAFATQA6goApgzQgHARAQAoQAQAmAEAWIAUgqQANAhgRAkQAXgHAOgUQAAAIgIASQgJASgLANQgHAJgGAAIgBAAg");
	this.shape_419.setTransform(-11.8,-177.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(1,1,1).p("AgjABQAZgCAQABQARAAAOAA");
	this.shape_420.setTransform(-22.6,-194.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#4C4C4C").s().p("ADTCKIAAgcIgQAKIgLgmQADgDAEgfQAEgfgVgUQABAEgrAnQgsAnhkgDIAygPIgsADQgqACgfABIAygfIhLAVQhDATghAAIApgoQgEACgkAEQglAEgfgRIAsgPIg2gDQAAgHAlg2QAlg3BAgQQAagEARAAIAfABQAvgFBMgNQBOgOA0BVIABgTQAAgSgHgNQADACARAXQASAXgFAUIAAAAIAAAAQABgBAMAAQAMAAAWAUIgQAAQgOAAgHAGQAEABAYAZQAZAXAIAkQABAkgWAaQgXAZgDABg");
	this.shape_421.setTransform(-11.8,-181.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#A8846A").ss(1,1,1).p("AgzhxQgDAIgPBBQgPA/ANAcQASAVAYAXQAYAYADACQABgIARhBQASg+ARgXQAdglgCgHIhFgn");
	this.shape_422.setTransform(-33.8,-32.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#C1A084").s().p("AgdBfQgYgXgSgVQgNgcAPg/QAPhBADgIIA8gHIBFAnQACAHgdAlQgRAXgSA+IgSBJIgbgag");
	this.shape_423.setTransform(-33.8,-32.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3083C1").s().p("AhMG6QADi2AajHQAcjGAaiUQAdiUAGgcIAigEQhPEXgKEcQgCDFBLCrQhsgLgcgNg");
	this.shape_424.setTransform(-38.6,89.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#2772AA").ss(1,1,1).p("AgvnJQgCAHgdCUQgdCTgdDQQgeDRgCDBQAHAGBnARQBlARB+gvIAAuh");
	this.shape_425.setTransform(-30,88.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#4496E0").s().p("Ag6HeQhogRgFgGQACjBAdjRQAdjQAdiTIAfibIDXgYIAAOhQhbAihOAAQgdAAgcgEg");
	this.shape_426.setTransform(-30,88.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#050505").ss(1,1,1).p("AA1gDQgDgDgngEQgjgFgcAbQAIgEBhgLg");
	this.shape_427.setTransform(-6.3,-173.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#4C4C4C").s().p("AAMgKQAmAEADADQhhALgIAEQAbgbAlAFg");
	this.shape_428.setTransform(-6.3,-173.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#A8846A").s().p("Ag+AvQgFgGAQgpQAQgrBegKQACADADAgQADAfgZAaQgPAPghAAQgYAAgggHg");
	this.shape_429.setTransform(-5.1,-163.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#8C2C13").s().p("AgOAAQABgMANgBQAOABABAMQgBANgOABQgNgBgBgNg");
	this.shape_430.setTransform(-3.5,-108.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#8C2C13").ss(1,1,1).p("AAcggIg3BB");
	this.shape_431.setTransform(-36.6,-97.1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#8C2C13").ss(1,1,1).p("AAUglQgDABgSAUQgTASABAk");
	this.shape_432.setTransform(-43.6,-102.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#8C2C13").ss(1,1,1).p("AArgzQAAgCgWAWQgVAWgpA9");
	this.shape_433.setTransform(-40.2,-112.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#8C2C13").ss(1,1,1).p("AALgNIgWAb");
	this.shape_434.setTransform(-33.6,-103.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#8C2C13").ss(1,1,1).p("AgdhbQgDACADA1QAEAzA4BNQgBgBgDgbQgCgbAGgl");
	this.shape_435.setTransform(-32.1,-110.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#AA3313").s().p("AgVAeIgCgRQANgQAYgzQABAVADAUQgBACgBAFQACALAGAPQgVgCgMAVQgFALgEAFIgDgZg");
	this.shape_436.setTransform(-1.1,-122.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#AA3313").s().p("AgrAGIgBgBQAfgcAOglQAfAYANAkIgWAcIgXAhQgMgSgfglg");
	this.shape_437.setTransform(-36.5,-96.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#8C2C13").ss(1,1,1).p("AgvheQAHgBA9AdQA/AdAZA+IgzBGQgEgGgtg2QgVgZglgLQglgNgNAJQgCABgGgEQgGgFAOgVQARgWARgTQAQgSACgBg");
	this.shape_438.setTransform(-42.4,-99);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#BA421C").s().p("AAJAjQgVgZglgLQglgNgNAJQgCABgGgEQgGgFAOgVQARgWARgTIASgTQAHgBA9AdQA/AdAZA+IgzBGQgEgGgtg2g");
	this.shape_439.setTransform(-42.4,-99);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#A8846A").s().p("AhMALQgBgagMgJQAsAUAtgJQAugHAiggQABAPAGARQAGARgKALQgWAQgdACIhrAcIgBgrg");
	this.shape_440.setTransform(-6.1,-128.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#AA3313").s().p("AgNEUQgKgJgUgBQATgQABgdIgCgQIgCgMQgDgPAAgLQgBgMAFgQQANgyACgxQACgfAFggQAFguAAg9QAAgcgBggQgBgbgLgTQgGgNgEgNQgEgSgCgWIAbAVIAQAFIAWAIIADAjIAEAgQgKA9gGA3IABAmIAAAKQgDBBgTBbQgRBcgDAKIgBABIANAcIAMAdIgDAYIgVgbg");
	this.shape_441.setTransform(18.8,-81.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#AA3313").s().p("Ah+AzQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQgigHghgNIAvgGQAagIAYgLQAWgKAZgGQAQgCAOAGIASAIIAsgIQAsgJArgSQAdgNAhgDQgjAUgXAfQgdAagsgEQg1gGgyAGQgVAHgUAMQgRALgVAAIgGgBg");
	this.shape_442.setTransform(-10.3,-128.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#AA3313").s().p("AglAmIgIgMQAkg4AqgeQANgGgEAOQgEAOAFAQQAFAEgDASIgCgJIgYAbQgSAYgTAVQgKgMgJgNg");
	this.shape_443.setTransform(-33,-102.4);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#8C2C13").ss(1,1,1).p("AFrl6QgjgcgygIQgzgHgrgLQgRgGgEgJQgFgIgUgBQgaAHgaAPQgYAKgfALQgfALgYgGQgKgGgWgGQgKAEgpAMQgSAGgGACQgjAOgkAAQg3AHgcAhQgdAggVAtQgaArgeAqQAVgBAQANQAPAMANAMQAgAjAYAiQAgggAcglQAAABAHAdQAHAjAIA1QAIA0ABAzQgDBagfBTQgWBDgJApQgJApATAYQASARAqAEQAqAEAdAAQCOANBUgGQBTgGBWg9QgHgCgCgVQgBgWABgHIgbg4QABgDAMg0QALgzALg/QALhAgCgnQABgeAJhQQAIhQgOgUQAWANAUARQARAMALgjQALgkAEgtQAFgtgEgPQgJgagSgQg");
	this.shape_444.setTransform(-7.8,-87.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#BA421C").s().p("AhnHAQgdAAgqgEQgqgEgSgRQgTgYAJgpQAJgpAWhDQAfhTADhaQgBgzgIg0QgIg1gHgjIgHgeQgcAlggAgQgYgigggjIgcgYQgQgNgVABQAegqAagrQAVgtAdggQAcghA3gHQAkAAAjgOIAYgIIAzgQQAWAGAKAGQAYAGAfgLIA3gVQAagPAagHQAUABAFAIQAEAJARAGQArALAzAHQAyAIAjAcQASAQAJAaQAEAPgFAtQgEAtgLAkQgLAjgRgMQgUgRgWgNQAOAUgIBQQgJBQgBAeQACAngLBAQgLA/gLAzIgNA3IAbA4QgBAHABAWQACAVAHACQhWA9hTAGQgaACgfAAQhFAAhkgJg");
	this.shape_445.setTransform(-7.8,-87.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#3083C1").s().p("AiCglIDUgnQABAAASAfQASAeAOAyQg+gHhEAXQhCAYhFACg");
	this.shape_446.setTransform(7.3,-44.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#A8846A").ss(1,1,1).p("AAmAYQgBgCgXgRQgVgOgegO");
	this.shape_447.setTransform(-48.6,-79.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#C1A084").s().p("AglgXQAeAOAVAOIAYATg");
	this.shape_448.setTransform(-48.6,-79.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#A8846A").s().p("AhOBTQAggLARglQATgeAMgdQAPggATgfQAVgjAJgpQANAcAAAdQgFASgIAPQgVApgXAkQgfAzgiAwIALAhQAHAUAJAIQgogggWgxg");
	this.shape_449.setTransform(-40.3,-87.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#A8846A").ss(1,1,1).p("AgTlzQgDAFglBAQgkBBgkBHQgkBIAAAZQAIAhBJBYQBJBaBSBzQBKBsAJAGQAJAGAGgsQAGgegfhNQgehOgnhZQgohXgXhAQAHgIA0hQQA1hQAPg3");
	this.shape_450.setTransform(-45.9,-67.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#C1A084").s().p("ACYFzQgJgGhKhsQhShzhJhaQhJhYgIghQAAgZAkhIQAkhHAkhBIAohFICcA4QgPA3g1BQQg0BQgHAIQAXBAAoBXQAnBZAeBOQAfBNgGAeQgFAngIAAIgCgBg");
	this.shape_451.setTransform(-45.9,-67.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#706257").s().p("AgIAdQgYgKACgFQgHgOgFgmQAnAWArAJQgBAXAEAXQgfgEgUgGg");
	this.shape_452.setTransform(-39,162.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#AF947B").s().p("AhgCWQgXgJABgFQgKgegGg5IgFg+IADhEIADhLIA/gBIBpgDIA+gCIADAwQhoAmhchBQgQA7AFAyQADAwAYAXQAqAqA6AIQA8AHA8gSQgEAsgEATQgxAVhGABIgFAAQg/AAgpgNg");
	this.shape_453.setTransform(-30.2,150.7);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#706257").s().p("AgWAMQgGgSgDgVQAeAQAhAGIgEAhQgvgKgDgGg");
	this.shape_454.setTransform(-0.7,149.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#42778E").ss(1,1,1).p("AhAsDICBJFQgCAAgHAGQgIAFADAPQAGAhgGAFIgbAZQAAADgBAqQgBArgEAqQgFAsgKAJQgFAKgFBnQgEBngCCGQgCCFAABlQgBBlAAAF");
	this.shape_455.setTransform(3.8,58.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#706257").s().p("AhRgBQAdAAAagJQASgRAWgHQAOgBAUADQAVAEAJAIQACACAAADQACAMAAAOIAAASIgKAAIgngQIgkgOIgHAMIgIASQgjAFgcACQABgTgBgSg");
	this.shape_456.setTransform(23.7,148.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#706257").ss(1,1,1).p("ACJgHQgygBgxgKQgKgCgKgDQgYgLgfAAQgRgBgRAHQgFAHgIAKQgOAFgQgBQgmAFgmACQhMAFhCgdQACAVAHASQADAGA2AKQA3ALCJgRQACgFAGgMQAFgLABgBQAFABAiAMQAfANAGADQAJABBCADQBBAEBJgDQBJgDAfgSQAAgGgDgZQheAZhjgKg");
	this.shape_457.setTransform(29.4,149.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#8C7A6C").s().p("AkJAfQg3gKgCgGQgIgSgCgVQBCAdBMgFQAmgCAmgFQAQABAOgFIAOgRQAQgHARABQAfAAAYALQAJADALACQAxAKAyABQBiAKBfgZIADAfQgfAShKADQhIADhBgEIhLgEIgmgQIgmgNIgHAMIgIARQhTAKg1AAQgiAAgUgEg");
	this.shape_458.setTransform(29.4,149.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#277489").ss(1,1,1).p("ACZkrQgCACgBAEQgSAlgGAmQANgPAQACQAAAMgDAPQggAiAFgpQAAgEABgDQgMAOgJAcQgMAiAAAdQALgFAMADQgCAcgPANQgGgTAAgUQgUAJgRAmQgHAeAFARQgNARgJAeQgBAFgBAFQgKgFgRAdQgLAWgFAUQABgBABgBQANgRALAVQAGAWgKATQgJATgKgOQgJgWAGgaQgOAQgKAZQgEAIgEALQAFgDAFgBQAQADAAAdQgCAdgPAOQgZANAHgnQADgaAGgTQgXARgQA3QgHAXABAOQgOASgKAbQACgBACgBQAUgFgJAtQgeADAPgoQAAgBAAAAQgRAHgNAbQgBACAAACQgIABgIAMQgNASABAOQAAAPgDAVQgLBFgnAdACZkrQARgfALAiQgVAOgHgRgACgmAQgKARgBAgQgBAZAFALACgmAQAJgQAQgEQgEAqgWgNQAAgFABgEgADjoWQg6AugJBoAAeAmQAIADAEAZQgXASALgugAA2gTQAMgOAQgBQgPAmgJgPQgCgEgCgEgAhaERQAGgJAIgHQAXgWgFA7QgfAHgBgcgAiRFkQAJgCAGAPQAEAqgUABQgTAAAUg4g");
	this.shape_459.setTransform(57.7,-71);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#A8846A").ss(1,1,1).p("AgWAQQABgBAQgOQANgLAPgF");
	this.shape_460.setTransform(79.5,-138.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#A8846A").ss(1,1,1).p("AgoAJQAAgBAXgIQAUgIAmAA");
	this.shape_461.setTransform(77.9,-141.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#A8846A").ss(1,1,1).p("AglAQQACgBAagNQAYgLAXgG");
	this.shape_462.setTransform(75.2,-145.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#A8846A").ss(1,1,1).p("AAShLQgPgEgdAOQggANgEACQgJAGgMAOQgMAPAAAKQAaAJAYgMQghArA6gKQgVATAPAMQAQAMAVgIQgGAUAYgDQAXgDALgOQABAOAXgIQAHgEACgLQgCgegcgTQAHgCgQgeQgYgSgDAHQABgCgBgMQgBgMgLgIg");
	this.shape_463.setTransform(76,-142.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#C1A084").s().p("AALA8QgVAIgQgMQgPgMAVgTQg6AKAhgrQgYAMgagJQAAgKAMgPQAMgOAJgGIAkgPQAdgOAPAEQALAIABAMIAAAOQADgHAYASQAQAegHACQAcATACAeQgCALgHAEQgXAIgBgOQgLAOgXADIgGAAQgRAAAFgRg");
	this.shape_464.setTransform(76,-142.9);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#A8846A").ss(1,1,1).p("AgtAZQACgLATglQATgoATgZQAVgaALAdQADATgUAVQgUAWgCAXQAGAaAUAXQAUAWgOAe");
	this.shape_465.setTransform(68.2,-142.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#C1A084").s().p("AgtAZQACgLATglQATgoATgZQAVgaALAdQADATgUAVQgUAWgCAXQAGAaAUAXQAUAWgOAeg");
	this.shape_466.setTransform(68.2,-142.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#277489").ss(1,1,1).p("ABhBeQgiAAgPgSQgNgUACgYQABgYgGgVQgNgxgigjQgbgSgXAKQgXAJgdgJQgPgGgJgMQgCAGABAFQAJAfAlAFQAoAJAKglQAJgDAhAxQAfAxgFArQgXBJBAAPQBCALAOg+QgNAYghgBg");
	this.shape_467.setTransform(72.8,-135.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#46A6BC").s().p("AA/B6QhAgPAXhJQAFgrgfgxQghgxgJADQgKAlgogJQglgFgJgfQgBgFACgGQAJAMAPAGQAdAJAXgJQAXgKAbASQAiAjANAxQAGAVgBAYQgCAYANAUQAPASAiAAQAhABANgYQgMA1gwAAQgJAAgLgCg");
	this.shape_468.setTransform(72.8,-135.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#277489").ss(1,1,1).p("ABagWQgTglghgjQgggjgmgRQg1gUgnAnQgYAZAGAUQAKAdAvAJQAiAFAHgjQAJgDAhAxQAfAvgFAtQgYBJBBAOQBBAOANg8QAHgdgWglQgXglgPgYg");
	this.shape_469.setTransform(72.6,-138.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#5DCBE8").s().p("ABBCXQhBgOAYhJQAFgtgfgvQghgxgJADQgHAjgigFQgvgJgKgdQgGgUAYgZQAngnA1AUQAmARAgAjQAhAjATAlIAmA9QAWAlgHAdQgLAxgsAAQgLAAgMgDg");
	this.shape_470.setTransform(72.6,-138.3);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#A8846A").ss(1,1,1).p("AhTBEQADglgOggQgJgWACgdQADgdAVgPQAWgLAaALQAaALAQANQAYAOAjAQQAjAPgFATQgjBCgdADQgeADgEAn");
	this.shape_471.setTransform(73.4,-133.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#C1A084").s().p("AhTBEQADglgOggQgJgWACgdQADgdAVgPQAWgLAaALQAaALAQANQAYAOAjAQQAjAPgFATQgjBCgdADQgeADgEAng");
	this.shape_472.setTransform(73.4,-133.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#A8846A").s().p("AhLCgQAngEAbgrQAnhJAQhKQAPhNAIhMIAGANQACAFgEBPQgFBPgdBUQgeBWhIAdg");
	this.shape_473.setTransform(66.3,-106.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#A8846A").ss(1,1,1).p("AhiA+QgCABgCgTQgBgTASgrQA0g6Aag6QAYg7AAgEQABgGAagFQAagGAgA+QACAFgEBPQgFBNgdBWQgeBWhIAc");
	this.shape_474.setTransform(63.6,-108.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#C1A084").s().p("AhiA+QgCABgCgTQgBgTASgrQA0g6Aag6QAYg7AAgEQABgGAagFQAagGAgA+QACAFgEBPQgFBNgdBWQgeBWhIAcg");
	this.shape_475.setTransform(63.6,-108.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#8C2C13").ss(1,1,1).p("AgrgiQAEABAjAUQAiASAOAe");
	this.shape_476.setTransform(40.1,-116.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#8C2C13").ss(1,1,1).p("AgogbQAFAAAiARQAgAOAKAY");
	this.shape_477.setTransform(34.3,-109.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#8C2C13").ss(1,1,1).p("AgdgbIA8A3");
	this.shape_478.setTransform(29.8,-104.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#8C2C13").ss(1,1,1).p("AgrgeQACgCAbAKQAaAKAgAs");
	this.shape_479.setTransform(23.6,-113.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#8C2C13").ss(1,1,1).p("AhAgqQADgFAqAJQAnAIAtBL");
	this.shape_480.setTransform(26.4,-122);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#8C2C13").ss(1,1,1).p("AAWA3Qgqg3AAgaQgBgcADAA");
	this.shape_481.setTransform(20.3,-114.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#8C2C13").ss(1,1,1).p("AALh4QAAAFgcA7QgeA6g5A3QAAABANAVQAMAVAYAVQAIAAA/guQBBguAYhbg");
	this.shape_482.setTransform(35.2,-111.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#BA421C").s().p("AhbBPIgNgWQA5g3Aeg6QAcg7AAgFIBeA6QgYBbhBAuQg/AugIAAQgYgVgMgVg");
	this.shape_483.setTransform(35.2,-111.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(1,1,1).p("AgjABQADgBACAAIAGAAIA8AA");
	this.shape_484.setTransform(-22.6,-194.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#4C4C4C").s().p("ADTCKIAAgcIgQAKIgLgmQADgDAEgfQAEgfgVgUQABAEgrAnQgsAnhkgDIAygPIgsADQgqACgfABIAygfIhLAVQhDATghAAIApgoQgEACgkAEQglAEgfgRIAsgPIg2gDQAAgHAlg2QAlg3BAgQIAAAAIAGgBIAFgBIA/gBQAvgFBMgNQBOgOA0BVIABgTQAAgSgHgNQADACARAXQASAXgFAUIAAAAIAAAAQABgBAMAAQAMAAAWAUIgQAAQgOAAgHAGQAEABAYAZQAZAXAIAkQABAkgWAaQgXAZgDABgAhFh8Ig/ABQAmgGAZAFg");
	this.shape_485.setTransform(-11.8,-181.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#8C2C13").ss(1,1,1).p("AGBleQgSgOgbgTQgogbgugNQgQgCgwgCQgwgBgIgHQgGgOgNgKQgdAOg8AXQg5AWgdgFQgKgGgWgHQgKAFgpAMQgSAGgGACQgjANgkAAQg3AIgcAhQgdAggVAtQgaArgeAqQAVgCAQANQAPANANAMQAgAjAYAiQAgggAcglQAAABAHAdQAHAjAIA1QAIA0ABAzQgDBZgfBUQgWBDgJApQgJApATAYQASARAqAEQAqADAdABQCOANBUgGQBTgGBWg9QgHgCgCgWQgBgVABgHIgbg5QABgDAMgzQALgzALg/QALhAgCgnQABgeAJhQQAIhQgOgUQAcALANAWQAqgWAcg1QAcg1AVgjQgYgHgTgOg");
	this.shape_486.setTransform(-4.2,-88);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#BA421C").s().p("AiLHDQgdgBgqgDQgqgEgSgRQgTgYAJgpQAJgpAWhDQAfhUADhZQgBgzgIg0QgIg1gHgjIgHgeQgcAlggAgQgYgigggjIgcgZQgQgNgVACQAegqAagrQAVgtAdggQAcghA3gIQAkAAAjgNIAYgIQApgMAKgFQAWAHAKAGQAdAFA5gWQA8gXAdgOQANAKAGAOQAIAHAwABQAwACAQACQAuANAoAbIAtAhQATAOAYAHQgVAjgcA1QgcA1gqAWQgNgWgcgLQAOAUgIBQQgJBQgBAeQACAngLBAQgLA/gLAzIgNA2IAbA5QgBAHABAVQACAWAHACQhWA9hTAGQgbACgiAAQhEAAhhgJg");
	this.shape_487.setTransform(-4.2,-88);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#A8846A").s().p("AAuCAQhEggg/gsQhAgrgSgNIAphIIArhJIAhAXIBAAuQgJAogfAcQghAagpgEQB5BWCTAkIgQAMQgMAGgQAAQggAAgugWg");
	this.shape_488.setTransform(46.3,-103);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#A8846A").ss(1,1,1).p("AhgibIDhCeQADABAYAXQAXAXAHAhQAGAigxAhQgpAThOgnQhLgmhCguQhBgtgEgDg");
	this.shape_489.setTransform(47.5,-103.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#C1A084").s().p("AAYCCQhLgmhCguQhBgtgEgDIBaiZIDhCeQADABAYAXQAXAXAHAhQAGAigxAhQgNAGgSAAQgkAAg0gag");
	this.shape_490.setTransform(47.5,-103.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#277489").ss(1,1,1).p("Agel7QgBgoAfArQgNASgRgVQAAADAAAEQAEAvARAwQgEASAIAjQAGArARAlQAIgGAOAEQAPAkgIAQQgRgYgMgaQgPALAGAxQALAmAPAWQgDAVAKAmQACAGABAHQgNgGABAkQAAAcAHAaQAAgCAAgBQAFgWAXAbQAUAcABAXQACAZgUgRQgWgdgJggQgEAUADAfQACALADAOQACgEAEgCQATAEARAlQAQAlgIARQgRARgRgyQgLgggFgYQgOAUARBHQAGAcAKASQABgLADgJQAKgcAfBMQgcAHgRgjQgEAXAGAiQACgBACgBQAQgHASA6QgdADgIgyQgBgBAAgBQgNAJADAiQABADAAACQAIgCAQATQAcA1gTABQgTABgOhIQgGACgBAPQgDAXAJASQAKATAJAaQAeBYgWAkAhKnoQAAgUAOgFQAVA2gegRQgDgGgCgGQAAAWATAqQANAeAMAPAgJkVQAEgSAPACQAIAQAFASQgMArgRg0QgCgEgBgFgAhfqlQgfA7A0CCAAjgYQAEgSAPgCQAJAxgUgUQgEgEgEgFgAAtAwQAKAEATAgQgMAWgRg6g");
	this.shape_491.setTransform(24.4,-87.2,1,1,0,0,0,-0.8,-0.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(255,255,255,0.498)").s().p("AgHAAQABgDAGAAQAHAAABADQgBAEgHAAQgGAAgBgEg");
	this.shape_492.setTransform(-1.6,-165.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(255,255,255,0.498)").s().p("AgKAEIAVgRIgGAbQgPgHAAgDg");
	this.shape_493.setTransform(-3.9,-163);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgTAAQABgRASgCQASACADARQgDASgSADQgSgDgBgSg");
	this.shape_494.setTransform(-2.5,-164.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#996633").ss(0.3,1,1).p("AgiAAQADAfAfADQAggDADgfQgDgegggDQgfADgDAeg");
	this.shape_495.setTransform(-3.8,-164.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#663300").s().p("AgiAAQADgeAfgDQAgADADAeQgDAfggADQgfgDgDgfg");
	this.shape_496.setTransform(-3.8,-164.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(255,255,255,0.498)").s().p("AgIADIARgOIgFAWQgMgFAAgDg");
	this.shape_497.setTransform(-22.4,-161.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#996633").ss(0.3,1,1).p("AgcAAQADAaAZACQAagCADgaQgDgYgagDQgZADgDAYg");
	this.shape_498.setTransform(-22.3,-162.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#663300").s().p("AgcAAQADgYAZgDQAaADADAYQgDAagaACQgZgCgDgag");
	this.shape_499.setTransform(-22.3,-162.8);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#333333").s().p("ADpBcIgRgFIAAgSIAAgPIgTALIgIgeQAEgJADggQABgcgTgUIgGgEIgDAFQgBAHgjAhQgjAfhSAGIAXgGIgCgKIgkADIg/ADIAkgUIgFgJIhAARQg5AQgpAFIAbgYIASgSIgSAEQgDACgeAEQgfAEgegKIAigMIgBgKIgUgBIgbgBIACgEIBXghQAFAfgaAUQA0ACAhghQAFAegXAWQA5gQAqgnQASAYAGAcIAzgkQABAVgBAUQAdgPAXgXQACAVAFATQA6goApgzQgHARAQAoQAQAmAEAWIAUgqQANAhgRAkQAXgHAOgUQAAAIgIASQgJASgKANQgIAJgGAAIgBAAg");
	this.shape_500.setTransform(-11.7,-177.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#4496E0").s().p("Ag6HeQhogRgGgGQADjBAdjRQAdjQAdiTIAfibIDYgYIAAOhQhcAihOAAQgdAAgcgEg");
	this.shape_501.setTransform(-29.9,88.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#A8846A").ss(1,1,1).p("AgiAZQAMgQASgJQAMgGANgIQAHgFAHgF");
	this.shape_502.setTransform(24.5,-151.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#C1A084").s().p("AABgEQAOgGANgJIg3AnQALgQARgIg");
	this.shape_503.setTransform(23.8,-151.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#A8846A").ss(1,1,1).p("Ag0ARQACgDAhgOQAfgPAnAA");
	this.shape_504.setTransform(17.7,-171.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#C1A084").s().p("AgRAAQAfgPAngBIhpAgQACgCAhgOg");
	this.shape_505.setTransform(17.7,-171.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#A8846A").ss(1,1,1).p("AA+gwQggABgmAQQgpARgDADQgCAAgFAMQgFAPAHAXQAIATAOgQQAOgQAnAI");
	this.shape_506.setTransform(18.8,-164.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#A8846A").s().p("AAVA9QABgQgRABQgNgBgNAGQgOAOgQgFQgEgFgBgFQgDgNACgNQAFgMACgKQgRgfAFgGQgHgnAqgPQgGAUAOAQQgbAXAfAbIABgBQgOAZAZASQAfANAkgNIgQANQAFAIAEANQgEAKgMAAQgMABgIAGQABgOgBgPg");
	this.shape_507.setTransform(18.6,-166.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#A8846A").ss(1,1,1).p("AA0B1QAggYAKgbQAHgdgLghQgKgfgNgHQgegKgEABQABgCAAgOQgBgPgVgFQAAgFgQgVQgRgVgpAUQgDACgSATQgRATAGAVQgFAGARAhQgGAGgBALQAIAEALABQAQAFANAIQAFAGAJAAQAIAAAGAC");
	this.shape_508.setTransform(21.8,-165.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#C1A084").s().p("AgNAlQgGgCgIAAQgJgBgFgFQgNgIgQgFQgLgBgIgFQABgKAGgHQgRggAFgGQgGgVARgTQASgTADgCQApgVARAWQAQAVAAAFQAVAFABAOQAAAPgBACQAEgBAeAKQANAHAKAfQALAggHAeQgKAbggAYg");
	this.shape_509.setTransform(21.8,-165.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#277489").ss(1,1,1).p("AgxhvQAAAJAEA2QAEA0AHA9QAGA9AHAdQgGAIATAJQAbgEAFgDQAIAAASgPQAFgMgChDQgChDgIhFQgGg/gDgTQgEgSgHAAQgHgEgEgCQgEgCgRADQgkAAgFAHQgEAHACASQADARAAAKg");
	this.shape_510.setTransform(15.4,-169.9);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#5DCBE8").s().p("AgVCbQgHgdgGg9QgHg9gEg0IgEg/IgDgbQgCgSAEgHQAFgHAkAAQARgDAEACIALAGQAHAAAEASQADATAGA/QAIBFACBDQACBDgFAMQgSAPgIAAQgFADgbAEQgTgJAGgIg");
	this.shape_511.setTransform(15.4,-169.9);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#A8846A").ss(1,1,1).p("ABKD5QASAAATgBQA0gBAwgMQAwgMAmglQAqgzhNg5QhNg6hogpQhmgsgogMQgXgHgWgKQgOgHgOgIQgIgFgIgCQANgKAIgLQAEgNAAgOQAFgPgFgOQgIgHgKgGQgIgIgBgLQABgVgTgCQgNABgLAHQgTAGgTAKQgZAQgXAVQgRANgLAQQgFAXAFAYQgCAYAPATQAIAIALAEQARAHARAJQASAKAUAHQAjAOAgARQBWA7BQA/");
	this.shape_512.setTransform(41.7,-141.6);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#C1A084").s().p("AAdCCQhQg/hWg7QgggSgjgNQgUgHgSgLIgigPQgLgFgIgHQgPgTACgYQgFgYAFgXQALgQARgNQAXgVAZgQQATgJATgIQALgGANgBQATABgBAWQABAKAIAIQAKAGAIAJQAFANgFAPQAAAOgEANQgIALgNAKQAIACAIAFIAcAOQAWAKAXAIQAoAMBmAsQBoAqBNA5QBNA5gqAzQgmAlgwAMQgwAMg0ABIglABg");
	this.shape_513.setTransform(41.7,-141.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#8C2C13").ss(1,1,1).p("AgogDIBRAH");
	this.shape_514.setTransform(28.9,-132.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#8C2C13").ss(1,1,1).p("Ag1AOQACgDAkgNQAigPAkAG");
	this.shape_515.setTransform(32.3,-116.7);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#8C2C13").ss(1,1,1).p("Ag7AJQABgCAigJQAhgKAzAJ");
	this.shape_516.setTransform(29.2,-124.8);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#8C2C13").ss(1,1,1).p("AAqgzQAAgCgWAWQgUAWgqA9");
	this.shape_517.setTransform(-40.1,-112.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#8C2C13").ss(1,1,1).p("AgYABQgDgBA1AA");
	this.shape_518.setTransform(21.9,-117);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#8C2C13").ss(1,1,1).p("AghgCQgGgBBJAG");
	this.shape_519.setTransform(19.3,-129.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#8C2C13").ss(1,1,1).p("AgdhxQAAAHAQBQQAPBOAdA+");
	this.shape_520.setTransform(19.1,-121);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#8C2C13").ss(1,1,1).p("AgHm8QAAAHAEBNQADBNAFBFQAGBHgCCOQgCCKgRBkQgBADgDAXQgDAXAAAMQABAYACAFQAEAEASAqQATAqgPAe");
	this.shape_521.setTransform(11.6,-89.2);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#AA3313").s().p("AhHgiQALANAOAHQAUADAagFQAcgGAeABIANAcQgjgDgeAMQgcALgMAIQgZgjgMgig");
	this.shape_522.setTransform(32.1,-115.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#8C2C13").ss(1,1,1).p("Ag9h1QgHADgOBBQgNBABBBmQACgCAigQQAkgRArAHQgCgDgSgqQgTgqgQguQgPgwAIgSg");
	this.shape_523.setTransform(31.5,-123.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#BA421C").s().p("AhSgxQAOhBAHgDIBUAHQgIASAPAwQAQAuATAqIAUAtQgrgHgkARQgiAPgCAEQhBhnANhAg");
	this.shape_524.setTransform(31.5,-123.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#AA3313").s().p("AgrAGIgBgBQAfgcAOglQAgAYAMAkIgVAcIgYAhQgLgSggglg");
	this.shape_525.setTransform(-36.4,-96.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#A8846A").s().p("AgBAXQgfgjArgcQAHAogHApQAAgFgMgNg");
	this.shape_526.setTransform(39.9,-133.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#AA3313").s().p("AgJEUQgKgJgTgBQASgQABgdIgBgQIgDgMQgDgPAAgLQgBgMAFgQQANgyACgxQACgfAFggQAGguAAg9QAAgcgDggQgCgbgJgTQgGgNgDgNQgEgSgDgWIAZAVIASABQAQABAEACIgCAmIgCAjQgCA+gBA5IABAmIAAAKQgDBBgTBbQgRBcgDAKIAAABIAKAcIAOAdIgDAYIgVgbg");
	this.shape_527.setTransform(18.5,-81.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#AA3313").s().p("Ag3AVIgQgNIgSgMIgBgOIALAGQAQAMAYgHIAFgCIgHgNQgEgIgFgHQAZAAAmgBQAogCATgDIAFAFIAOATIgRADIgMACQgiACgcAMQgMAGgFAGQgJAKACAQIAAADIAAADIgfgXg");
	this.shape_528.setTransform(24.9,-113);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#AA3313").s().p("AgJACQglABgkgDIghAAQgSgCACgRIABAEQBBgLBBAKQBCALBCgCIgDANIgBAQQhDgVhGABg");
	this.shape_529.setTransform(17.7,-132.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#8C2C13").ss(1,1,1).p("AE/j3QAKgEAkgIQAjgIAGAEQgKgrgOgvQgOgwAKgtQhJgChJgJQgwgGgvAFQgtALgrASQgqARgtAJQgKgGgWgHQgKAEgpANQgSAGgGACQgjANgkAAQg3AIgcAgQgdAhgVAtQgaArgeApQAVgBAQANQAPANANAMQAgAjAYAiQAgghAcglQAAACAHAdQAHAjAIA1QAIA0ABAyQgDBagfBUQgWBCgJApQgJApATAYQASASAqADQAqAEAdABQCOAMBUgFQBTgGBWg9QgHgCgCgWQgBgVABgHIgbg5QABgDAMgzQALgzALhAQAKg/gBgoQgCglACg3QADg3ACguQgBgaACgOQADgNAYgNg");
	this.shape_530.setTransform(-6.3,-88.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#BA421C").s().p("Ah1HFQgdgBgqgEQgqgDgSgSQgTgYAJgpQAJgpAWhCQAfhUADhaQgBgygIg0QgIg1gHgjIgHgfQgcAlggAhQgYgigggjIgcgZQgQgNgVABQAegpAagrQAVgtAdghQAcggA3gIQAkAAAjgNIAYgIIAzgRQAWAHAKAGQAtgJAqgRQArgSAtgLQAvgFAwAGQBJAJBJACQgKAtAOAwQAOAvAKArQgGgEgjAIQgkAIgKAEQgYANgDANQgCAOABAaIgFBlQgCA3ACAlQABAogKA/QgLBAgLAzIgNA2IAbA5QgBAHABAVQACAWAHACQhWA9hTAGQgaABgfAAQhFAAhkgIg");
	this.shape_531.setTransform(-6.3,-88.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#A8846A").s().p("AhfgGQAgAFAhgDQAcABAYgEQgHAAgIgKQgHgJAAgGQATAQAcALIAeAPIAMAMQAJAJgCABQgoACgogEQgUgCgWAAQgXAEgVABQgZgMAAgbg");
	this.shape_532.setTransform(34.3,-132);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#A8846A").ss(1,1,1).p("AB/AxQAegqgUgkQgUgmgzgKQglgFhCgCQhFgCgXABQgJAEgDAZQgDAZAAAIQABAdAOAaQAPAZAIAeQBPgJBPgCQAuAEAdgfg");
	this.shape_533.setTransform(45,-124.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#C1A084").s().p("AiAAgQgOgagCgdQAAgIADgZQADgZAKgEQAWgBBFACQBCACAkAFQA0AKAUAmQAUAkgeAqQgdAfgugEQhPAChPAJQgIgegOgZg");
	this.shape_534.setTransform(45,-124.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#3083C1").s().p("AiCglIDUgnQABAAASAfQARAeAQAyQg/gHhEAXQhCAYhFACg");
	this.shape_535.setTransform(7.4,-44.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#A8846A").s().p("AhOBTQAhgLAPglQAUgeAMgdQAOggAVgfQAUgjAJgpQANAcAAAdQgEASgKAPQgTApgZAkQgdAzgjAwIALAhQAHAUAKAIQgpgggWgxg");
	this.shape_536.setTransform(-40.2,-87.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#706257").s().p("AgWAMQgHgSgCgVQAeAQAhAGIgDAhQgwgKgDgGg");
	this.shape_537.setTransform(-0.6,149.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#42778E").ss(1,1,1).p("AhAsDICBJFQgBAAgIAGQgIAFADAPQAGAhgGAFIgbAZQAAADgBAqQgBArgEAqQgFAsgKAJQgFAKgFBnQgFBngBCGQgCCFgBBlQAABlAAAF");
	this.shape_538.setTransform(3.9,58.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#706257").s().p("AhRgBQAdAAAagJQASgRAWgHQAOgBAUADQAVAEAJAIQACACAAADQACAMAAAOIAAASIgJAAIgogQIgkgOIgHAMIgIASQgjAFgcACQABgTgBgSg");
	this.shape_539.setTransform(23.8,148.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#8C2C13").ss(1,1,1).p("ABKBmIgBAEABKBmQAAgIgEgVQgHgfg8gVQhNgWgrAoIAviIQAFgFBAgCQA9gCA6A7g");
	this.shape_540.setTransform(-39.6,-87.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298,p:{x:29.1}},{t:this.shape_297,p:{x:29.1}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292,p:{x:51.8}},{t:this.shape_291,p:{x:8.3}},{t:this.shape_290,p:{x:12.4}},{t:this.shape_289,p:{x:12.4}},{t:this.shape_288,p:{x:2.3}},{t:this.shape_287},{t:this.shape_286,p:{x:-0.7}},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_283},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_280},{t:this.shape_279,p:{x:-20}},{t:this.shape_278,p:{x:-20}},{t:this.shape_277,p:{x:-20.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_272,p:{x:-10.7}},{t:this.shape_271},{t:this.shape_270,p:{x:-4.8}},{t:this.shape_269,p:{x:-4.8}},{t:this.shape_268,p:{x:-6.1}},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_265},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.6}},{t:this.shape_260,p:{x:-10}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.6}},{t:this.shape_257,p:{x:-32.1}},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:-3.7}},{t:this.shape_253,p:{x:-3.7}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_249,p:{x:-5.1}},{t:this.shape_248,p:{x:-5.9}},{t:this.shape_247,p:{x:-5.9}},{t:this.shape_246,p:{x:-23}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.8}},{t:this.shape_242,p:{x:-23.8}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.5}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:-18.2}},{t:this.shape_221,p:{x:-28.9}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{y:-100.8,x:-32.3}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_171,p:{x:23.7}},{t:this.shape_170,p:{x:23.7}},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}}]}).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298,p:{x:29.1}},{t:this.shape_297,p:{x:29.1}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292,p:{x:51.8}},{t:this.shape_291,p:{x:8.3}},{t:this.shape_290,p:{x:12.4}},{t:this.shape_289,p:{x:12.4}},{t:this.shape_288,p:{x:2.3}},{t:this.shape_287},{t:this.shape_286,p:{x:-0.7}},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_283},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_280},{t:this.shape_279,p:{x:-20}},{t:this.shape_278,p:{x:-20}},{t:this.shape_277,p:{x:-20.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_272,p:{x:-10.7}},{t:this.shape_271},{t:this.shape_270,p:{x:-4.8}},{t:this.shape_269,p:{x:-4.8}},{t:this.shape_268,p:{x:-6.1}},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_265},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.6}},{t:this.shape_260,p:{x:-10}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.6}},{t:this.shape_257,p:{x:-32.1}},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:-3.7}},{t:this.shape_253,p:{x:-3.7}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_249,p:{x:-5.1}},{t:this.shape_248,p:{x:-5.9}},{t:this.shape_247,p:{x:-5.9}},{t:this.shape_246,p:{x:-23}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.8}},{t:this.shape_242,p:{x:-23.8}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.5}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:-18.2}},{t:this.shape_221,p:{x:-28.9}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{y:-100.8,x:-32.3}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_171,p:{x:23.7}},{t:this.shape_170,p:{x:23.7}},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}}]},6).to({state:[{t:this.shape_347,p:{x:37.7}},{t:this.shape_346,p:{x:37.7}},{t:this.shape_345},{t:this.shape_344,p:{x:-39.8}},{t:this.shape_343,p:{x:38.8}},{t:this.shape_342,p:{x:38.8}},{t:this.shape_298,p:{x:29.1}},{t:this.shape_297,p:{x:29.1}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_341,p:{x:51.8}},{t:this.shape_291,p:{x:8.3}},{t:this.shape_290,p:{x:12.4}},{t:this.shape_289,p:{x:12.4}},{t:this.shape_340,p:{x:2.3}},{t:this.shape_287},{t:this.shape_286,p:{x:-0.7}},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_339},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_280},{t:this.shape_338,p:{x:-20.3}},{t:this.shape_337,p:{x:-20.3}},{t:this.shape_336,p:{x:-19.4}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_272,p:{x:-10.7}},{t:this.shape_335,p:{x:17.8}},{t:this.shape_270,p:{x:-4.8}},{t:this.shape_269,p:{x:-4.8}},{t:this.shape_268,p:{x:-6.1}},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_265},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.6}},{t:this.shape_260,p:{x:-10}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.6}},{t:this.shape_257,p:{x:-32.1}},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:-3.7}},{t:this.shape_253,p:{x:-3.7}},{t:this.shape_334,p:{x:-9.3}},{t:this.shape_333,p:{x:-9.3}},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_249,p:{x:-5.1}},{t:this.shape_248,p:{x:-5.9}},{t:this.shape_247,p:{x:-5.9}},{t:this.shape_246,p:{x:-23}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.8}},{t:this.shape_242,p:{x:-23.8}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.5}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_230},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:-18.2}},{t:this.shape_221,p:{x:-28.9}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_332,p:{x:35.6}},{t:this.shape_331,p:{x:35.6}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{y:-100.1,x:-32.3}},{t:this.shape_330,p:{x:25.7}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_329,p:{x:26.5}},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324,p:{x:-43.1}},{t:this.shape_323,p:{x:-43.1}},{t:this.shape_322,p:{x:-33.3}},{t:this.shape_321,p:{x:-33.3}},{t:this.shape_320,p:{x:30.6}},{t:this.shape_319,p:{x:30.6}},{t:this.shape_318,p:{x:39.4}},{t:this.shape_317,p:{x:39.4}},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_171,p:{x:23.7}},{t:this.shape_170,p:{x:23.7}},{t:this.shape_316,p:{x:55.3}},{t:this.shape_315,p:{x:55.3}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}}]},1).to({state:[{t:this.shape_347,p:{x:37.5}},{t:this.shape_346,p:{x:37.5}},{t:this.shape_395},{t:this.shape_344,p:{x:-40}},{t:this.shape_343,p:{x:38.6}},{t:this.shape_342,p:{x:38.6}},{t:this.shape_298,p:{x:28.9}},{t:this.shape_297,p:{x:28.9}},{t:this.shape_296,p:{x:13.6}},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_341,p:{x:51.6}},{t:this.shape_291,p:{x:8.1}},{t:this.shape_290,p:{x:12.2}},{t:this.shape_289,p:{x:12.2}},{t:this.shape_340,p:{x:2.1}},{t:this.shape_391},{t:this.shape_286,p:{x:-0.9}},{t:this.shape_285,p:{x:-30.4}},{t:this.shape_284,p:{x:-30.4}},{t:this.shape_390},{t:this.shape_282,p:{x:-30.1}},{t:this.shape_281,p:{x:-30.1}},{t:this.shape_389},{t:this.shape_338,p:{x:-20.5}},{t:this.shape_337,p:{x:-20.5}},{t:this.shape_336,p:{x:-19.6}},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_273,p:{x:-6.4}},{t:this.shape_272,p:{x:-10.9}},{t:this.shape_335,p:{x:17.6}},{t:this.shape_270,p:{x:-5}},{t:this.shape_269,p:{x:-5}},{t:this.shape_268,p:{x:-6.3}},{t:this.shape_267,p:{x:2.1}},{t:this.shape_266,p:{x:2.1}},{t:this.shape_385},{t:this.shape_264,p:{x:-14}},{t:this.shape_263,p:{x:-14}},{t:this.shape_262,p:{x:-11.1}},{t:this.shape_261,p:{x:-21.8}},{t:this.shape_260,p:{x:-10.2}},{t:this.shape_259,p:{x:1.2}},{t:this.shape_258,p:{x:11.4}},{t:this.shape_257,p:{x:-32.3}},{t:this.shape_384,p:{x:-3.7,y:-108.6}},{t:this.shape_383},{t:this.shape_254,p:{x:-3.9}},{t:this.shape_382,p:{x:-3.9,y:-101.1}},{t:this.shape_334,p:{x:-9.5}},{t:this.shape_333,p:{x:-9.5}},{t:this.shape_250,p:{x:-27.6}},{t:this.shape_249,p:{x:-5.3}},{t:this.shape_248,p:{x:-6.1}},{t:this.shape_247,p:{x:-6.1}},{t:this.shape_246,p:{x:-23.2}},{t:this.shape_245,p:{x:-23.1}},{t:this.shape_244,p:{x:-23.1}},{t:this.shape_243,p:{x:-24}},{t:this.shape_242,p:{x:-24}},{t:this.shape_381},{t:this.shape_380,p:{x:-6.5}},{t:this.shape_239,p:{x:9.1}},{t:this.shape_238,p:{x:9.1}},{t:this.shape_237,p:{x:-18.9}},{t:this.shape_236,p:{x:-18.9}},{t:this.shape_235,p:{x:0.3}},{t:this.shape_379},{t:this.shape_378,p:{x:-30.1}},{t:this.shape_377},{t:this.shape_376},{t:this.shape_229,p:{x:-12}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_226,p:{x:-11.2}},{t:this.shape_225,p:{x:-11.2}},{t:this.shape_373},{t:this.shape_372,p:{x:-18.4}},{t:this.shape_371},{t:this.shape_221,p:{x:-29.1}},{t:this.shape_220,p:{x:11.4}},{t:this.shape_219,p:{x:-30.5}},{t:this.shape_332,p:{x:35.4}},{t:this.shape_331,p:{x:35.4}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_212,p:{y:-100.1,x:-32.5}},{t:this.shape_330,p:{x:25.5}},{t:this.shape_368},{t:this.shape_367},{t:this.shape_329,p:{x:26.3}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_324,p:{x:-43.3}},{t:this.shape_323,p:{x:-43.3}},{t:this.shape_322,p:{x:-33.5}},{t:this.shape_321,p:{x:-33.5}},{t:this.shape_320,p:{x:30.4}},{t:this.shape_319,p:{x:30.4}},{t:this.shape_318,p:{x:39.2}},{t:this.shape_317,p:{x:39.2}},{t:this.shape_199,p:{x:-31.7}},{t:this.shape_198,p:{x:-31.7}},{t:this.shape_197,p:{x:-32}},{t:this.shape_196,p:{x:-31.4}},{t:this.shape_362},{t:this.shape_194,p:{x:-4.8}},{t:this.shape_193,p:{x:-4.8}},{t:this.shape_192,p:{x:-4.8}},{t:this.shape_191,p:{x:-4.8}},{t:this.shape_190,p:{x:-4.8}},{t:this.shape_189,p:{x:-4.8}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_185,p:{x:-4.8}},{t:this.shape_358},{t:this.shape_183,p:{x:-4.8}},{t:this.shape_182,p:{x:-4.8}},{t:this.shape_181,p:{x:-4.7}},{t:this.shape_357},{t:this.shape_179,p:{x:30.3}},{t:this.shape_178,p:{x:-34.8}},{t:this.shape_177,p:{x:-7.8}},{t:this.shape_356},{t:this.shape_175,p:{x:13.2}},{t:this.shape_174,p:{x:13.2}},{t:this.shape_173,p:{x:13.2}},{t:this.shape_172,p:{x:13.2}},{t:this.shape_171,p:{x:23.5}},{t:this.shape_170,p:{x:23.5}},{t:this.shape_316,p:{x:55.1}},{t:this.shape_315,p:{x:55.1}},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_169,p:{x:-21.8}},{t:this.shape_168,p:{x:-21.8}},{t:this.shape_167,p:{x:-20.7}},{t:this.shape_166,p:{x:-21.9}},{t:this.shape_165,p:{x:-19.9}},{t:this.shape_164,p:{x:-4.6}},{t:this.shape_163,p:{x:-4.6}},{t:this.shape_162,p:{x:-3.5,y:-161.4}},{t:this.shape_161,p:{x:-4.7}},{t:this.shape_160,p:{x:-2.8,y:-162}}]},4).to({state:[{t:this.shape_347,p:{x:37.7}},{t:this.shape_346,p:{x:37.7}},{t:this.shape_345},{t:this.shape_344,p:{x:-39.8}},{t:this.shape_343,p:{x:38.8}},{t:this.shape_342,p:{x:38.8}},{t:this.shape_298,p:{x:29.1}},{t:this.shape_297,p:{x:29.1}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_341,p:{x:51.8}},{t:this.shape_291,p:{x:8.3}},{t:this.shape_290,p:{x:12.4}},{t:this.shape_289,p:{x:12.4}},{t:this.shape_340,p:{x:2.3}},{t:this.shape_287},{t:this.shape_286,p:{x:-0.7}},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_339},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_280},{t:this.shape_338,p:{x:-20.3}},{t:this.shape_337,p:{x:-20.3}},{t:this.shape_336,p:{x:-19.4}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_272,p:{x:-10.7}},{t:this.shape_335,p:{x:17.8}},{t:this.shape_270,p:{x:-4.8}},{t:this.shape_269,p:{x:-4.8}},{t:this.shape_268,p:{x:-6.1}},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_265},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.6}},{t:this.shape_260,p:{x:-10}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.6}},{t:this.shape_257,p:{x:-32.1}},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:-3.7}},{t:this.shape_253,p:{x:-3.7}},{t:this.shape_334,p:{x:-9.3}},{t:this.shape_333,p:{x:-9.3}},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_249,p:{x:-5.1}},{t:this.shape_248,p:{x:-5.9}},{t:this.shape_247,p:{x:-5.9}},{t:this.shape_246,p:{x:-23}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.8}},{t:this.shape_242,p:{x:-23.8}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.5}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_230},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:-18.2}},{t:this.shape_221,p:{x:-28.9}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_332,p:{x:35.6}},{t:this.shape_331,p:{x:35.6}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{y:-100.1,x:-32.3}},{t:this.shape_330,p:{x:25.7}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_329,p:{x:26.5}},{t:this.shape_328},{t:this.shape_397},{t:this.shape_326},{t:this.shape_396},{t:this.shape_324,p:{x:-43.1}},{t:this.shape_323,p:{x:-43.1}},{t:this.shape_322,p:{x:-33.3}},{t:this.shape_321,p:{x:-33.3}},{t:this.shape_320,p:{x:30.6}},{t:this.shape_319,p:{x:30.6}},{t:this.shape_318,p:{x:39.4}},{t:this.shape_317,p:{x:39.4}},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_171,p:{x:23.7}},{t:this.shape_170,p:{x:23.7}},{t:this.shape_316,p:{x:55.3}},{t:this.shape_315,p:{x:55.3}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}}]},5).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298,p:{x:29.1}},{t:this.shape_297,p:{x:29.1}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292,p:{x:51.8}},{t:this.shape_291,p:{x:8.3}},{t:this.shape_290,p:{x:12.4}},{t:this.shape_289,p:{x:12.4}},{t:this.shape_288,p:{x:2.3}},{t:this.shape_287},{t:this.shape_286,p:{x:-0.7}},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_283},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_280},{t:this.shape_279,p:{x:-20}},{t:this.shape_278,p:{x:-20}},{t:this.shape_277,p:{x:-20.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_272,p:{x:-10.7}},{t:this.shape_271},{t:this.shape_270,p:{x:-4.8}},{t:this.shape_269,p:{x:-4.8}},{t:this.shape_268,p:{x:-6.1}},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_265},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.6}},{t:this.shape_260,p:{x:-10}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.6}},{t:this.shape_257,p:{x:-32.1}},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:-3.7}},{t:this.shape_253,p:{x:-3.7}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_249,p:{x:-5.1}},{t:this.shape_248,p:{x:-5.9}},{t:this.shape_247,p:{x:-5.9}},{t:this.shape_246,p:{x:-23}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.8}},{t:this.shape_242,p:{x:-23.8}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.5}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_399},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_398},{t:this.shape_227},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:-18.2}},{t:this.shape_221,p:{x:-28.9}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_171,p:{x:23.7}},{t:this.shape_170,p:{x:23.7}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{y:-100.8,x:-32.3}},{t:this.shape_330,p:{x:25.7}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}}]},3).to({state:[]},5).to({state:[{t:this.shape_298,p:{x:29}},{t:this.shape_297,p:{x:29}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_292,p:{x:51.7}},{t:this.shape_291,p:{x:8.2}},{t:this.shape_290,p:{x:12.3}},{t:this.shape_289,p:{x:12.3}},{t:this.shape_288,p:{x:2.3}},{t:this.shape_455},{t:this.shape_454},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_453},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_452},{t:this.shape_451,p:{x:-45.9}},{t:this.shape_450,p:{x:-45.9}},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_279,p:{x:-20.1}},{t:this.shape_278,p:{x:-20.1}},{t:this.shape_277,p:{x:-20.2}},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_443,p:{x:-33}},{t:this.shape_442,p:{x:-10.3}},{t:this.shape_441},{t:this.shape_270,p:{x:-4.9}},{t:this.shape_269,p:{x:-4.9}},{t:this.shape_440,p:{x:-6.1}},{t:this.shape_439,p:{x:-42.4}},{t:this.shape_438,p:{x:-42.4}},{t:this.shape_437},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_436},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.7}},{t:this.shape_260,p:{x:-10.1}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.5}},{t:this.shape_435},{t:this.shape_434,p:{x:-33.6}},{t:this.shape_433},{t:this.shape_432,p:{x:-43.6}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_255},{t:this.shape_384,p:{x:-3.8,y:-101.1}},{t:this.shape_253,p:{x:-3.8}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_429,p:{x:-5.1}},{t:this.shape_248,p:{x:-6}},{t:this.shape_247,p:{x:-6}},{t:this.shape_246,p:{x:-23.1}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.9}},{t:this.shape_242,p:{x:-23.9}},{t:this.shape_428,p:{x:-6.3}},{t:this.shape_427},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.4}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_231},{t:this.shape_423,p:{x:-33.8}},{t:this.shape_422,p:{x:-33.8}},{t:this.shape_421},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_420},{t:this.shape_419},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_418},{t:this.shape_372,p:{x:-18.3}},{t:this.shape_222,p:{x:-18.3}},{t:this.shape_221,p:{x:-29}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_171,p:{x:23.7}},{t:this.shape_170,p:{x:23.7}}]},57).to({state:[{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_298,p:{x:29}},{t:this.shape_297,p:{x:29}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_292,p:{x:51.7}},{t:this.shape_291,p:{x:8.2}},{t:this.shape_290,p:{x:12.3}},{t:this.shape_289,p:{x:12.3}},{t:this.shape_288,p:{x:2.3}},{t:this.shape_455},{t:this.shape_454},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_453},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_452},{t:this.shape_451,p:{x:-45.9}},{t:this.shape_450,p:{x:-45.9}},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_279,p:{x:-20.1}},{t:this.shape_278,p:{x:-20.1}},{t:this.shape_277,p:{x:-20.2}},{t:this.shape_446},{t:this.shape_487},{t:this.shape_486},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_443,p:{x:-33}},{t:this.shape_442,p:{x:-10.3}},{t:this.shape_441},{t:this.shape_270,p:{x:-4.9}},{t:this.shape_269,p:{x:-4.9}},{t:this.shape_440,p:{x:-6.1}},{t:this.shape_439,p:{x:-42.4}},{t:this.shape_438,p:{x:-42.4}},{t:this.shape_437},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_436},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.7}},{t:this.shape_260,p:{x:-10.1}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.5}},{t:this.shape_435},{t:this.shape_434,p:{x:-33.6}},{t:this.shape_433},{t:this.shape_432,p:{x:-43.6}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_255},{t:this.shape_384,p:{x:-3.8,y:-101.1}},{t:this.shape_253,p:{x:-3.8}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_429,p:{x:-5.1}},{t:this.shape_248,p:{x:-6}},{t:this.shape_247,p:{x:-6}},{t:this.shape_246,p:{x:-23.1}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.9}},{t:this.shape_242,p:{x:-23.9}},{t:this.shape_428,p:{x:-6.3}},{t:this.shape_427},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.4}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_231},{t:this.shape_423,p:{x:-33.8}},{t:this.shape_422,p:{x:-33.8}},{t:this.shape_485},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_484},{t:this.shape_419},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_418},{t:this.shape_372,p:{x:-18.3}},{t:this.shape_222,p:{x:-18.3}},{t:this.shape_221,p:{x:-29}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_459}]},4).to({state:[{t:this.shape_298,p:{x:29.1}},{t:this.shape_297,p:{x:29.1}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_539},{t:this.shape_292,p:{x:51.8}},{t:this.shape_291,p:{x:8.3}},{t:this.shape_290,p:{x:12.4}},{t:this.shape_289,p:{x:12.4}},{t:this.shape_288,p:{x:2.4}},{t:this.shape_538},{t:this.shape_537},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_283},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_280},{t:this.shape_451,p:{x:-45.8}},{t:this.shape_450,p:{x:-45.8}},{t:this.shape_536},{t:this.shape_448},{t:this.shape_447},{t:this.shape_279,p:{x:-20}},{t:this.shape_278,p:{x:-20}},{t:this.shape_277,p:{x:-20.1}},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_443,p:{x:-32.9}},{t:this.shape_529},{t:this.shape_442,p:{x:-10.2}},{t:this.shape_528},{t:this.shape_527},{t:this.shape_270,p:{x:-4.8}},{t:this.shape_269,p:{x:-4.8}},{t:this.shape_440,p:{x:-6}},{t:this.shape_526},{t:this.shape_439,p:{x:-42.3}},{t:this.shape_438,p:{x:-42.3}},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_267,p:{x:2.4}},{t:this.shape_266,p:{x:2.4}},{t:this.shape_265},{t:this.shape_264,p:{x:-13.7}},{t:this.shape_263,p:{x:-13.7}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.6}},{t:this.shape_260,p:{x:-10}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_521},{t:this.shape_257,p:{x:-32.1}},{t:this.shape_434,p:{x:-33.5}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_432,p:{x:-43.5}},{t:this.shape_431},{t:this.shape_384,p:{x:-3.4,y:-108.6}},{t:this.shape_382,p:{x:-3.4,y:-108.6}},{t:this.shape_254,p:{x:-3.7}},{t:this.shape_253,p:{x:-3.7}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.3}},{t:this.shape_429,p:{x:-5}},{t:this.shape_248,p:{x:-5.9}},{t:this.shape_247,p:{x:-5.9}},{t:this.shape_246,p:{x:-23}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.8}},{t:this.shape_242,p:{x:-23.8}},{t:this.shape_428,p:{x:-6.2}},{t:this.shape_380,p:{x:-6.2}},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_237,p:{x:-18.6}},{t:this.shape_236,p:{x:-18.6}},{t:this.shape_235,p:{x:0.5}},{t:this.shape_501},{t:this.shape_378,p:{x:-29.9}},{t:this.shape_232},{t:this.shape_231},{t:this.shape_423,p:{x:-33.7}},{t:this.shape_422,p:{x:-33.7}},{t:this.shape_230},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_228},{t:this.shape_500},{t:this.shape_226,p:{x:-10.9}},{t:this.shape_225,p:{x:-10.9}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:-18.2}},{t:this.shape_221,p:{x:-28.9}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_162,p:{x:-21.2,y:-162.5}},{t:this.shape_497},{t:this.shape_160,p:{x:-20.4,y:-163.1}},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_491}]},4).to({state:[{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_298,p:{x:29}},{t:this.shape_297,p:{x:29}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_292,p:{x:51.7}},{t:this.shape_291,p:{x:8.2}},{t:this.shape_290,p:{x:12.3}},{t:this.shape_289,p:{x:12.3}},{t:this.shape_288,p:{x:2.3}},{t:this.shape_455},{t:this.shape_454},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_453},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_452},{t:this.shape_451,p:{x:-45.9}},{t:this.shape_450,p:{x:-45.9}},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_279,p:{x:-20.1}},{t:this.shape_278,p:{x:-20.1}},{t:this.shape_277,p:{x:-20.2}},{t:this.shape_446},{t:this.shape_487},{t:this.shape_486},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_443,p:{x:-33}},{t:this.shape_442,p:{x:-10.3}},{t:this.shape_441},{t:this.shape_270,p:{x:-4.9}},{t:this.shape_269,p:{x:-4.9}},{t:this.shape_440,p:{x:-6.1}},{t:this.shape_439,p:{x:-42.4}},{t:this.shape_438,p:{x:-42.4}},{t:this.shape_437},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_436},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.7}},{t:this.shape_260,p:{x:-10.1}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.5}},{t:this.shape_435},{t:this.shape_434,p:{x:-33.6}},{t:this.shape_433},{t:this.shape_432,p:{x:-43.6}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_255},{t:this.shape_384,p:{x:-3.8,y:-101.1}},{t:this.shape_253,p:{x:-3.8}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_429,p:{x:-5.1}},{t:this.shape_248,p:{x:-6}},{t:this.shape_247,p:{x:-6}},{t:this.shape_246,p:{x:-23.1}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.9}},{t:this.shape_242,p:{x:-23.9}},{t:this.shape_428,p:{x:-6.3}},{t:this.shape_427},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.4}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_231},{t:this.shape_423,p:{x:-33.8}},{t:this.shape_422,p:{x:-33.8}},{t:this.shape_485},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_484},{t:this.shape_419},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_418},{t:this.shape_372,p:{x:-18.3}},{t:this.shape_222,p:{x:-18.3}},{t:this.shape_221,p:{x:-29}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_459}]},11).to({state:[{t:this.shape_298,p:{x:29}},{t:this.shape_297,p:{x:29}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_292,p:{x:51.7}},{t:this.shape_291,p:{x:8.2}},{t:this.shape_290,p:{x:12.3}},{t:this.shape_289,p:{x:12.3}},{t:this.shape_288,p:{x:2.3}},{t:this.shape_455},{t:this.shape_454},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_453},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_452},{t:this.shape_451,p:{x:-45.9}},{t:this.shape_450,p:{x:-45.9}},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_279,p:{x:-20.1}},{t:this.shape_278,p:{x:-20.1}},{t:this.shape_277,p:{x:-20.2}},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_443,p:{x:-33}},{t:this.shape_442,p:{x:-10.3}},{t:this.shape_441},{t:this.shape_270,p:{x:-4.9}},{t:this.shape_269,p:{x:-4.9}},{t:this.shape_440,p:{x:-6.1}},{t:this.shape_439,p:{x:-42.4}},{t:this.shape_438,p:{x:-42.4}},{t:this.shape_437},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_436},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.7}},{t:this.shape_260,p:{x:-10.1}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.5}},{t:this.shape_435},{t:this.shape_434,p:{x:-33.6}},{t:this.shape_433},{t:this.shape_432,p:{x:-43.6}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_255},{t:this.shape_384,p:{x:-3.8,y:-101.1}},{t:this.shape_253,p:{x:-3.8}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_429,p:{x:-5.1}},{t:this.shape_248,p:{x:-6}},{t:this.shape_247,p:{x:-6}},{t:this.shape_246,p:{x:-23.1}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.9}},{t:this.shape_242,p:{x:-23.9}},{t:this.shape_428,p:{x:-6.3}},{t:this.shape_427},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.4}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_231},{t:this.shape_423,p:{x:-33.8}},{t:this.shape_422,p:{x:-33.8}},{t:this.shape_485},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_484},{t:this.shape_419},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_418},{t:this.shape_372,p:{x:-18.3}},{t:this.shape_222,p:{x:-18.3}},{t:this.shape_221,p:{x:-29}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_171,p:{x:23.7}},{t:this.shape_170,p:{x:23.7}}]},4).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298,p:{x:29.1}},{t:this.shape_297,p:{x:29.1}},{t:this.shape_296,p:{x:13.8}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292,p:{x:51.8}},{t:this.shape_291,p:{x:8.3}},{t:this.shape_290,p:{x:12.4}},{t:this.shape_289,p:{x:12.4}},{t:this.shape_288,p:{x:2.3}},{t:this.shape_287},{t:this.shape_286,p:{x:-0.7}},{t:this.shape_285,p:{x:-30.2}},{t:this.shape_284,p:{x:-30.2}},{t:this.shape_283},{t:this.shape_282,p:{x:-29.9}},{t:this.shape_281,p:{x:-29.9}},{t:this.shape_280},{t:this.shape_279,p:{x:-20}},{t:this.shape_278,p:{x:-20}},{t:this.shape_277,p:{x:-20.1}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:-6.2}},{t:this.shape_272,p:{x:-10.7}},{t:this.shape_271},{t:this.shape_270,p:{x:-4.8}},{t:this.shape_269,p:{x:-4.8}},{t:this.shape_268,p:{x:-6.1}},{t:this.shape_267,p:{x:2.3}},{t:this.shape_266,p:{x:2.3}},{t:this.shape_265},{t:this.shape_264,p:{x:-13.8}},{t:this.shape_263,p:{x:-13.8}},{t:this.shape_262,p:{x:-10.9}},{t:this.shape_261,p:{x:-21.6}},{t:this.shape_260,p:{x:-10}},{t:this.shape_259,p:{x:1.4}},{t:this.shape_258,p:{x:11.6}},{t:this.shape_257,p:{x:-32.1}},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:-3.7}},{t:this.shape_253,p:{x:-3.7}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:-27.4}},{t:this.shape_249,p:{x:-5.1}},{t:this.shape_248,p:{x:-5.9}},{t:this.shape_247,p:{x:-5.9}},{t:this.shape_246,p:{x:-23}},{t:this.shape_245,p:{x:-22.9}},{t:this.shape_244,p:{x:-22.9}},{t:this.shape_243,p:{x:-23.8}},{t:this.shape_242,p:{x:-23.8}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:9.3}},{t:this.shape_238,p:{x:9.3}},{t:this.shape_237,p:{x:-18.7}},{t:this.shape_236,p:{x:-18.7}},{t:this.shape_235,p:{x:0.5}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229,p:{x:-11.8}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:-11}},{t:this.shape_225,p:{x:-11}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:-18.2}},{t:this.shape_221,p:{x:-28.9}},{t:this.shape_220,p:{x:11.6}},{t:this.shape_219,p:{x:-30.3}},{t:this.shape_199,p:{x:-31.5}},{t:this.shape_198,p:{x:-31.5}},{t:this.shape_197,p:{x:-31.8}},{t:this.shape_196,p:{x:-31.2}},{t:this.shape_195},{t:this.shape_194,p:{x:-4.6}},{t:this.shape_193,p:{x:-4.6}},{t:this.shape_192,p:{x:-4.6}},{t:this.shape_191,p:{x:-4.6}},{t:this.shape_190,p:{x:-4.6}},{t:this.shape_189,p:{x:-4.6}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-4.6}},{t:this.shape_184},{t:this.shape_183,p:{x:-4.6}},{t:this.shape_182,p:{x:-4.6}},{t:this.shape_181,p:{x:-4.5}},{t:this.shape_180},{t:this.shape_179,p:{x:30.5}},{t:this.shape_178,p:{x:-34.6}},{t:this.shape_177,p:{x:-7.6}},{t:this.shape_176},{t:this.shape_175,p:{x:13.4}},{t:this.shape_174,p:{x:13.4}},{t:this.shape_173,p:{x:13.4}},{t:this.shape_172,p:{x:13.4}},{t:this.shape_171,p:{x:23.7}},{t:this.shape_170,p:{x:23.7}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_540},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{y:-100.8,x:-32.3}},{t:this.shape_330,p:{x:25.7}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_169,p:{x:-21.5}},{t:this.shape_168,p:{x:-21.5}},{t:this.shape_167,p:{x:-20.4}},{t:this.shape_166,p:{x:-21.6}},{t:this.shape_165,p:{x:-19.7}},{t:this.shape_164,p:{x:-4.4}},{t:this.shape_163,p:{x:-4.4}},{t:this.shape_162,p:{x:-3.3,y:-161.4}},{t:this.shape_161,p:{x:-4.5}},{t:this.shape_160,p:{x:-2.5,y:-162}}]},8).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-197.5,144.4,397.9);


(lib.bground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACFAAQgCAOglAJQgmAJg4AAQg3AAgmgJQglgKgCgNQACgMAlgKQAmgJA3AAQA4AAAmAJQAlAKACAMg");
	this.shape.setTransform(4.5,-121.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF992").s().p("AhdAXQglgKgCgNQACgMAlgKQAmgJA3AAQA4AAAmAJQAlAKACAMQgCAOglAJQgmAJg4AAQg3AAgmgJg");
	this.shape_1.setTransform(4.5,-121.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACfAAQgCATgtAMQgtANhDAAQhDAAgsgNQgtgMgCgTQABgSAtgMQAtgNBDAAQBDAAAtANQAtAMACASg");
	this.shape_2.setTransform(111.2,-137.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF992").s().p("AhvAfQgtgMgCgTQACgRAsgNQAugNBCAAQBDAAAtANQAtANACARQgCATgtAMQgtANhDAAQhDAAgsgNg");
	this.shape_3.setTransform(111.2,-137.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACfAAQgCATgtAMQgtANhDAAQhDAAgsgNQgtgMgCgTQACgSAsgMQAtgNBDAAQBDAAAtANQAtAMACASg");
	this.shape_4.setTransform(-90.3,-137.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF992").s().p("AhvAfQgtgMgCgTQACgRAtgNQAsgNBDAAQBDAAAtANQAtANACARQgCATgtAMQgtANhDAAQhDAAgsgNg");
	this.shape_5.setTransform(-90.3,-137.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AC6AAQgCAWg1AOQg1APhOABQhOgBg1gPQg0gOgCgWQACgVA0gOQA1gPBOgBQBOABA1APQA1AOACAVg");
	this.shape_6.setTransform(4.5,-161.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF992").s().p("AiCAkQg1gOgCgWQACgVA1gOQA0gPBOgBQBOABA1APQA1AOACAVQgCAWg1AOQg1APhOABQhNgBg1gPg");
	this.shape_7.setTransform(4.5,-161.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#878787","#000000"],[0,0.976],0,-21.1,0,63.9).s().p("ArTDzQlDgmi/g/QjAhAgEhOQAEhNDAhAQC/g/FEglQFDgmGPgBQGQABFEAmQFDAlDAA/QC/BAAFBNQgFBOi/BAQi/A/lEAmQlEAlmQABQmPgBlEglg");
	this.shape_8.setTransform(2,-141.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#720E87").s().p("ArTDyQlDgli/hAQjAg/gEhOQAEhNDAg/QC/hAFEgmQFDglGPgBQGQABFEAlQFDAmDABAQC/A/AFBNQgFBOi/A/Qi/BAlEAlQlEAmmQABQmPgBlEgmg");
	this.shape_9.setTransform(2,-144.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CEB0D6").s().p("Au0FjQm5g8kEhmQkFhlgGh8QAIiME8htQDzhUFugzQlEAzjYBMQkgBlgHCAQAGB2EBBhQECBhGzA5QGzA5IZACQGggBFngjQFngkEKg+QELg/CMhSQh3BfkRBKQkQBKl/AqQl/AqnDABQoggCm4g8g");
	this.shape_10.setTransform(-1.7,-143.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B685C1").s().p("AvZGFQm5g8kEhmQkFhmgGh9QAGh8EFhmQEEhmG5g8QG4g8IhgCQIhACG5A8QG5A8EEBmQEFBmAGB8QgGB9kFBmQkEBmm5A8Qm5A8ohABQohgBm4g8g");
	this.shape_11.setTransform(2,-146.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#720E87").s().p("AhYDDQAOhDgIhIQgIhHgVhAQgRg6gWg5QElBqAICFIAACWg");
	this.shape_12.setTransform(182.4,-163.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#720E87").s().p("AAiElQg1hdhBhYQhPhng/hkQg/hnhBhiQC5ALCpATQBhCABeCLQBeCMBGCUg");
	this.shape_13.setTransform(86.1,-173.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#981EAD").s().p("A+iEsIABiWQAGh+EFhjQEFhnG4g7QG5g9IggBQIiABG4A9QG5A7EFBnQEEBjAHB+IAACWg");
	this.shape_14.setTransform(2,-174.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C1182").s().p("A+iEsIABiWQAGh+EFhjQEFhnG4g7QG5g9IggBQIiABG4A9QG5A7EFBnQEEBjAHB+IAACWg");
	this.shape_15.setTransform(0.5,-186.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0D578E").ss(1,1,1).p("AWOlTIgFgeIAAtIQk6CZlMBnQlNBnlBBAIAAgDIg8AAIAAAPQmSBLlJAfQlJAfjFAFQjEAFgFgCIgUcHQEfgwFxgKQFxgKF9ANQF6AMFFAXQFEAWDIASQDHATAGABIAA4MQACgBADAAgA0WoRQCxgBGKggIAAGTQjIAOiUAJQiUAJhQAEQACiWABhsQABhsABgogAw4hMQCUgJDJgOIAAJTQjSANiXAKQiXALhHAGQABiUACibQACiaACiOQBPgECUgJgAA5qhIAAHBQmOAllKAYIAAmVQBwgLB7gQQDggbENgzgAL/kuQlGAplEAfIAAnHQE5g9FRhmgAL/G8QlBABlJALIAApyQFDgfFHgpgAUll+QjrAnj/AhIAAotQD4hPDyhqgAUlHLQjigNkIgBIAAq2QD/ghDrgngAqfhnQFKgYGOglIAAJuQmLAPlNAUgAUlHpIAAJiQhGgHiFgLQh3gKiogMIAAoqQEHABDhANgAFiQGQh5gGh0gFIAAn3QFKgLFAgBIAAInQi+gOjfgLgAA5IGIAAHzQmRgPlHAIIAAnJQFNgUGLgPgAxHJEQCYgLDUgNIAAHHQlTAKj6AhQABgzABh6QABh5ACikQBEgFCYgLg");
	this.shape_16.setTransform(157.3,-10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1672C4").s().p("AS8SmQjIgSlEgWQlFgXl6gNQl9gMlxAKQlxALkfAuIAU8GQAFACDEgFQDFgFFJgfQFJgeGShMIAAgPIA8AAIAAADQFBhAFNhnQFMhnE6iYIAANHIAFAeIgFABIAAYMIjNgUgAM7QjQCoAMB3AKIDLASIAAphIgCAeQjhgOkHgBgAB1IEIAAH3IDtALQDfALC+ANIAAomQlAABlKALgAxHJEIjcAQIgDEdIgCCsQD6ggFTgKIAAnHQjUANiYALgAA5P5IAAnzQmLAPlNAUIAAHIQBqgCBzAAQDtAAEOAKgAw4hLIjjAMIgEEoIgDEvIDegQIFpgYIAApTQjJAOiUAKgAqfhnIAAJUQFNgVGLgOIAApuQmOAllKAYgAM7j5IAAK2QEIABDiANIAAsMQjrAnj/AhgAB1iqIAAJyQFJgLFBAAIAAqvQlHAqlDAegA0WoRIgCCVIgDEBIDkgMQCUgKDIgOIAAmTQmKAgixABgAm0pSQh7APhwAMIAAGUQFKgYGOglIAAnBQkNAzjgAcgAB1qsIAAHGQFEgfFGgpIAAoiQlRBmk5A+gAM7tiIAAItQD/giDrgmIAAqfQjyBrj4BPg");
	this.shape_17.setTransform(157.3,-10.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3F3E3D").s().p("ASvR2QjFgSlBgWQlBgXl3gMQl5gNltALQltAKkcAvIAU6xQAFACDHABQByABCfgIQj5ASiDAAIgBCVIgDECIDigNQCSgJDFgOIAAmQIA8gEIAAGPQFHgXGJgmIAAmzIAUgEIAogKIAAG7QFAgfFDgoIAAoiQj8BNjvA2QCEgmC5g5QDXhDDdhOQDdhPCghOIAALpIAFAdIgFABIAAYMIjLgUgAMyPzQCmAMB2ALIDJARIAAphIgCAeQjfgNkEgCgAB0HUIAAH3QByAFB5AGQDcAMC8ANIAAomQk9AAlGALgAw7IUIjaAQIgDEeIgCCsQD4ghFOgKIAAnGQjRAMiWALgAA4PJIAAnzQmHAPlJAUIAAHJQBmgCBuAAQDuAAEOAJgAwth7IjhANIgDEoIgDEuIDcgQIFkgYIAApSQjGAOiTAJgAqYiXIAAJUQFJgUGHgPIAAptQmKAllGAXgAMykpIAAK2QEFACDgANIAAsMQjpAnj8AggAB0jZIAAJxQFGgLE9AAIAAquQlEApk/AfgAMyuSIAAItQD8ghDpgnIAAqeQjvBqj2BPg");
	this.shape_18.setTransform(158.8,-10.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#4DAFFF","#000000"],[0,0.976],0,-80.8,0,244.3).s().p("ARcQiQiHgLjEgOQjEgOjogMQw4g3pTBOIAEkyIAFnxIAGnqIADkhQB1gBDhgOQDggNEsglQFsgrHNhrQHQhsHQjIIAAEyIAAH/IAAI6IAAHtIAAEPIjLgSg");
	this.shape_19.setTransform(157.1,-8.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#279BC9").ss(1,1,1).p("AqOhyIUdDl");
	this.shape_20.setTransform(235.5,130.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#279BC9").ss(1,1,1).p("AzNG9MAmbgN5");
	this.shape_21.setTransform(114,165.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#279BC9").ss(1,1,1).p("AzNG9MAmbgN5");
	this.shape_22.setTransform(178,171.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#279BC9").ss(1,1,1).p("A3HG9MAuPgN5");
	this.shape_23.setTransform(-79,163.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#279BC9").ss(1,1,1).p("AuDgiIcHBF");
	this.shape_24.setTransform(-23,147.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#279BC9").ss(1,1,1).p("AuDgiIcHBF");
	this.shape_25.setTransform(-104,166.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#279BC9").ss(1,1,1).p("AuDgiIcHBF");
	this.shape_26.setTransform(-158,189.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0B6EB7").s().p("EguwAHlQBHgyGAiwQF/iwKpjBQN2jyPhhXQTbhrVACPIAABYQ1SiLzsBpQv6BXuMDyQn/CKldCJQlcCKi0BcIgxAAg");
	this.shape_27.setTransform(0.2,159.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#1672C4","#FFFFFF"],[0,0.976],16.1,-63.4,-16.9,167.9).s().p("Egu7AHrQAAgGD4iAQD5iAHpiwQHqiuLUiXQLViWO4g1QO6g0SYB4IAAOCg");
	this.shape_28.setTransform(-0.5,159.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A946C1").s().p("AqhHbQofghn2hfQkAguj1hOQh5gniKhDQiKhEhThkQhThnAqiQQArh0BbhNMBTxAAAIAAH0QgxAiiRA3QiQA2ibAuQibAvhPALQkbAmkYA6Qn6BfohAeQkIAPkGAAQkYAAkZgRg");
	this.shape_29.setTransform(23.5,-143.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B755CE").s().p("AAJI6QxQgIr5i6Qr5i5l+kxIAAnHMBdvAAAIAAHWQkGDFm/CYQm/CXpGBVQpEBUqZAAIgIAAg");
	this.shape_30.setTransform(-0.9,-136.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#031CA1","#B755CE"],[0,0.976],-300,0,300,0).s().p("Egu3AfaMAAAg+zMBdvAAAMAAAA+zg");
	this.shape_31.setTransform(-0.9,7.3);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-300.9,-216.2,603,433.6);


(lib.bg3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE67D","#FFAD3F"],[0,0.976],-0.3,-22.4,1.2,117).s().p("As1FEQlvgyjZhVQjahVgFhoQAFhoDahUQDZhVFvgyQFvgzHGAAQHGAAFwAzQFvAyDZBVQDZBUAGBoQgGBojZBVQjZBVlvAyQlwAynGABQnGgBlvgyg");
	this.shape.setTransform(115.3,140.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("At3FeQmMg2jrhcQjqhbgGhxQAGhwDqhbQDrhcGNg2QGMg2HqgBQHrABGMA2QGNA2DqBcQDrBbAGBwQgGBxjrBbQjqBcmNA2QmMA2nrACQnqgCmNg2g");
	this.shape_1.setTransform(115.3,140.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D085E").s().p("Aj9kgIGvAAQBuECgxEQQjXAfj3AQQAzknhRkag");
	this.shape_2.setTransform(184.3,172.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D085E").s().p("AjwDWQBCh0gUhxQgUh0hFhrII3AAIAAC7QgCBUiQBLQiMBLj9A4IAPgZg");
	this.shape_3.setTransform(262.7,167.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#720E87").s().p("At2DxQmNg3jrhcQjqhagGhwIAGi7MA23AAAIAAC7QgGBvjrBbQjqBcmNA3QmMA2nrABQnqgBmMg2g");
	this.shape_4.setTransform(115.3,173.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B23ACC").s().p("AwVGXQoshMlJiBQlJiAgJidQAEh2C9hmQC8hnFPhOQi/BDhpBPQhnBOgCBXQAJCfFJB+QFJCBIsBMQItBMKwACQIFgBHBgsQHBgtFThPQlRB2obBGQoZBGqQABQqwgCothMg");
	this.shape_5.setTransform(94.1,185.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#981EAD").s().p("AzdHsQoshMlJiBQlJiAgJifQAJieFJiAQFJiAIshMQIthMKwgCQKxACIsBMQItBMFKCAQFJCAAHCeQgHCflJCAQlKCBotBMQosBMqxABQqwgCothLg");
	this.shape_6.setTransform(114.1,176.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A2AIsQp3hWl0iRQl0iRgJi0QAJiyF0iSQF0iRJ3hWQJ1hWMLgCQMMACJ1BWQJ3BWF0CRQF0CRAKCzQgKC0l0CRQl0CRp3BWQp1BWsMACQsLgCp1hWg");
	this.shape_7.setTransform(114.2,176.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACFAAQgCAOglAJQgmAJg4AAQg3AAgmgJQglgKgCgNQACgMAlgKQAmgJA3AAQA4AAAmAJQAlAKACAMg");
	this.shape_8.setTransform(103.8,-146.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF992").s().p("AhdAXQglgKgCgNQACgMAlgKQAmgJA3AAQA4AAAmAJQAlAKACAMQgCAOglAJQgmAJg4AAQg3AAgmgJg");
	this.shape_9.setTransform(103.8,-146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACfAAQgCATgtAMQgtANhDAAQhDAAgsgNQgtgMgCgTQABgRAtgNQAtgMBDgBQBDABAtAMQAtANACARg");
	this.shape_10.setTransform(210.5,-162.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF992").s().p("AhvAfQgtgMgCgTQACgRAsgNQAugNBCAAQBDAAAtANQAtANACARQgCATgtAMQgtANhDAAQhDAAgsgNg");
	this.shape_11.setTransform(210.5,-162.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACfAAQgCATgtAMQgtANhDAAQhDAAgsgNQgtgMgCgTQACgRAsgNQAtgMBDgBQBDABAtAMQAtANACARg");
	this.shape_12.setTransform(9,-162.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF992").s().p("AhvAfQgtgMgCgTQACgRAsgNQAugNBCAAQBDAAAtANQAtANACARQgCATgtAMQgtANhDAAQhDAAgsgNg");
	this.shape_13.setTransform(9,-162.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AC6AAQgCAWg1AOQg1APhOABQhOgBg1gPQg0gOgCgWQACgVA0gOQA1gPBOgBQBOABA1APQA1AOACAVg");
	this.shape_14.setTransform(103.8,-186.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF992").s().p("AiCAkQg1gOgCgWQACgVA1gOQA0gPBOgBQBOABA1APQA1AOACAVQgCAWg1AOQg1APhOABQhOgBg0gPg");
	this.shape_15.setTransform(103.8,-186.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#878787","#000000"],[0,0.976],0,-21.1,0,63.9).s().p("ArTDyQlDgljAg/Qi/hAgEhOQAEhNC/hAQDAg/FEgmQFDglGPgBQGRABFDAlQFDAmDAA/QC/BAAFBNQgFBOi/BAQi/A/lEAlQlDAmmRABQmQgBlDgmg");
	this.shape_16.setTransform(101.4,-166.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#720E87").s().p("ArTDzQlDgmjAhAQi/g/gEhOQAEhNC/g/QDAhAFEglQFDgmGPgBQGRABFDAmQFDAlDABAQC/A/AFBNQgFBOi/A/Qi/BAlEAmQlDAlmRABQmQgBlDglg");
	this.shape_17.setTransform(101.4,-170);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CEB0D6").s().p("Au0FjQm5g8kEhmQkFhlgGh8QAIiME8htQDzhUFugzQlEAzjYBMQkgBlgHCAQAGB2EBBhQECBhGzA5QGzA5IZACQGggBFngjQFngkEKg+QELg/CMhSQh3BfkRBKQkQBKl/AqQl/AqnDABQoggCm4g8g");
	this.shape_18.setTransform(97.7,-168.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B685C1").s().p("AvZGFQm5g8kEhmQkFhlgGh+QAGh9EFhlQEEhmG5g8QG4g8IhgBQIhABG5A8QG5A8EEBmQEFBlAGB9QgGB9kFBmQkEBmm5A8Qm5A8ohACQohgCm4g8g");
	this.shape_19.setTransform(101.4,-171.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#720E87").s().p("AhYDDQAOhDgIhJQgIhGgVhAQgRg7gWg4QElBrAICEIAACWg");
	this.shape_20.setTransform(281.7,-188.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#720E87").s().p("AAiElQg1hdhBhYQhPhng/hlQg/hlhBhjQC5ALCpASQBhCBBeCLQBeCMBGCUg");
	this.shape_21.setTransform(185.5,-198.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#981EAD").s().p("A+iEsIABiWQAGh+EFhkQEFhmG4g8QG5g7IggCQIiACG4A7QG5A8EFBmQEEBkAHB+IAACWg");
	this.shape_22.setTransform(101.3,-199.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C1182").s().p("A+iEsIABiWQAGh+EFhjQEFhnG4g7QG5g9IggBQIiABG4A9QG5A7EFBnQEEBjAHB+IAACWg");
	this.shape_23.setTransform(99.8,-211.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0D578E").ss(1,1,1).p("AWOlTIgFgdIAAtJQk6CZlMBnQlNBnlBBAIAAgDIg8AAIAAAPQmSBLlJAfQlJAfjFAFQjEAFgFgBIgUcGQEfgvFxgLQFxgKF9ANQF6AMFFAXQFEAWDIASQDHATAGABIAA4MQACAAADgBgAL/kuQlGAplEAfIAAnHQE5g9FRhmgAL/G9QlBAAlJALIAApxQFDgfFHgpgAA5qhIAAHBQmOAllKAYIAAmVQBwgLB7gQQDggbENgzgAUll9QjrAmj/AhIAAosQD4hPDyhqgAUlHMQjigOkIgBIAAq2QD/ghDrgngAUlHqIAAJhQhGgGiFgMQh3gKiogMIAAoqQEHABDhAOgAFiQGQh5gGh0gFIAAn3QFKgLFAAAIAAImQi+gOjfgLgAA5IGIAAHzQmRgOlHAHIAAnJQFNgUGLgPgAqfhnQFKgXGOgmIAAJuQmLAPlNAUgA0WoRQCxgBGKggIAAGTQjIAPiUAJQiUAJhQAEQACiXABhrQABhsABgpgAw4hLQCUgJDJgOIAAJSQjSANiXALQiXAKhHAGQABiTACibQACibACiNQBPgECUgJgAxHJEQCYgLDUgNIAAHHQlTAKj6AhQABgzABh5QABh6ACikQBEgFCYgLg");
	this.shape_24.setTransform(64.7,-35.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1672C4").s().p("AS8SmQjIgSlEgXQlFgWl6gNQl9gMlxAKQlxALkfAuIAU8GQAFACDEgFQDFgFFJgfQFJgfGShLIAAgPIA8AAIAAADQFBg/FNhoQFMhnE6iYIAANHIAFAeIgFABIAAYMIjNgUgAM7QjQCoAMB3AKIDLASIAAphIgCAdQjhgNkHgBgAB1IEIAAH3IDtALQDfALC+ANIAAomQlAABlKALgAxHJEIjcAQIgDEdIgCCsQD6ggFTgKIAAnHQjUANiYALgAA5P5IAAnzQmLAPlNAUIAAHIQBqgCBzAAQDtAAEOAKgAw4hLIjjAMIgEEoIgDEvIDegRIFpgXIAApTQjJAOiUAKgAqfhnIAAJUQFNgUGLgPIAApuQmOAllKAYgAM7j5IAAK2QEIABDiANIAAsMQjrAnj/AhgAB1iqIAAJyQFJgLFBAAIAAqvQlHAplDAfgA0WoRIgCCVIgDEBIDkgNQCUgJDIgOIAAmTQmKAhixAAgAm0pTQh7AQhwALIAAGVQFKgYGOglIAAnBQkNAzjgAbgAB1qtIAAHHQFEgfFGgpIAAoiQlRBmk5A9gAM7tiIAAItQD/giDrgmIAAqfQjyBqj4BQg");
	this.shape_25.setTransform(64.7,-35.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3F3E3D").s().p("ASvR2QjFgSlBgWQlBgXl3gMQl5gNltALQltAKkcAvIAU6xQAFACDHABQByABCfgIQj5ASiDAAIgBCVIgDECIDigNQCSgJDFgOIAAmQIA8gEIAAGPQFHgXGJgmIAAmzIAUgEIAogKIAAG7QFAgfFDgoIAAoiQj8BNjvA2QCEgmC5g5QDXhDDdhOQDdhPCghOIAALpIAFAdIgFABIAAYMIjLgUgAMyPzQCmAMB2ALIDJARIAAphIgCAeQjfgNkEgCgAB0HUIAAH3QByAFB5AGQDcAMC8ANIAAomQk9AAlGALgAw7IUIjaAQIgDEeIgCCsQD4ghFOgKIAAnGQjRAMiWALgAA4PJIAAnzQmHAPlJAUIAAHJQBmgCBuAAQDuAAEOAJgAwth7IjhANIgDEoIgDEuIDcgQIFkgYIAApSQjGAOiTAJgAqYiXIAAJUQFJgUGHgPIAAptQmKAllGAXgAMykpIAAK2QEFACDgANIAAsMQjpAnj8AggAB0jZIAAJxQFGgLE9AAIAAquQlEApk/AfgAMyuSIAAItQD8ghDpgnIAAqeQjvBqj2BPg");
	this.shape_26.setTransform(66.2,-35.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#4DAFFF","#000000"],[0,0.976],0,-80.8,0,244.3).s().p("ARcQiQiHgLjEgOQjEgOjogMQw4g3pTBOIAEkyIAFnxIAGnqIADkhQB1gBDhgOQDggNEsglQFsgrHNhrQHQhsHQjIIAAEyIAAH/IAAI6IAAHtIAAEPIjLgSg");
	this.shape_27.setTransform(64.5,-33.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#279BC9").ss(1,1,1).p("AqNhyIUcDl");
	this.shape_28.setTransform(143,105.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#279BC9").ss(1,1,1).p("AzNG9MAmbgN4");
	this.shape_29.setTransform(21.4,140.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#279BC9").ss(1,1,1).p("AzNG9MAmbgN4");
	this.shape_30.setTransform(85.4,146.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#279BC9").ss(1,1,1).p("A3HG9MAuPgN5");
	this.shape_31.setTransform(-171.5,138.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#279BC9").ss(1,1,1).p("AuDgiIcHBF");
	this.shape_32.setTransform(-115.6,122.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#279BC9").ss(1,1,1).p("AuDgiIcHBF");
	this.shape_33.setTransform(-196.6,141.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#279BC9").ss(1,1,1).p("AuDgiIcHBF");
	this.shape_34.setTransform(-250.6,164.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0B6EB7").s().p("EguwAHlQBHgyGAiwQF/iwKpjBQN2jyPhhXQTbhrVACPIAABYQ1SiLzsBpQv6BXuMDyQn/CKldCJQlcCKi0BcIgxAAg");
	this.shape_35.setTransform(-92.4,134.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#1672C4","#FFFFFF"],[0,0.976],16.1,-63.4,-16.9,167.9).s().p("Egu7AHrQAAgGD4iAQD5iAHpiwQHqiuLUiXQLViWO4g1QO6g0SYB4IAAOCg");
	this.shape_36.setTransform(-93,134);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A946C1").s().p("AptHbQn1ghnPhfQjsgujihOQhwgnh/hDQh/hEhNhkQhNhnAoiQQAnh0BUhNMBNRAAAIAAH0QgtAiiGA3QiFA2iPAuQiPAvhIALQkGAmkCA6QnTBfn3AeQjzAPjxAAQkDAAkDgRg");
	this.shape_37.setTransform(55.8,-168.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B755CE").s().p("AAJI6QxQgIr5i6Qr5i5l9kxIAAnHMBdtAAAIAAHWQkFDFm/CYQm+CXpIBVQpDBUqZAAIgIAAg");
	this.shape_38.setTransform(-93.5,-161.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#031CA1","#B755CE"],[0,0.976],-300,0,300,0).s().p("Egu2AfZMAAAg+yMBdtAAAMAAAA+yg");
	this.shape_39.setTransform(-93.5,-17.8);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-393.5,-241.3,787.1,482.7);


(lib.audiospeaker = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcDeQgYgdAAgjQAAgZASgYQAWgdAoAAQBZAAAiAxQASAaAAAfQgBAggTAYQgXAbglABQhSAAgjgwgAjKBMIhAgYQgcgHgMgeQgIgQABgQQAAgcBBgzQBEg1AvAAQBPABAXBCQAMAhgEAjQgBAvgHAUQgTAug/ABQgbAAg+gYgABJAmQgJgNAAgRIABgNQgBggAVgYQAOgRATgGQgdAFgiAAQguAAgUglQgNgWABgUQgBguAuggQAwggBLAAQAxAAAVApQAJAWABAWQgBAwgvAdQgUAMgYAGIAMAAQBpAAAoAgQAZAVAAAlQAABNh9ABQhcAAgZgqg");
	this.shape.setTransform(31.5,27);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,54);


(lib._wrongmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();*/
		playSound("_wrong");
	}
	this.frame_31 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(30).call(this.frame_31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._winApplausemp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();*/
		playSound("_winApplause");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(142));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._applausemp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();*/
		playSound("_applause");
	}
	this.frame_169 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(168).call(this.frame_169).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.selectboy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgDAAQAAgBADAAQAEAAAAABQAAACgEAAQgDAAAAgCg");
	this.shape.setTransform(66.5,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgFgHIALAJQAAACgIAEg");
	this.shape_1.setTransform(67.9,32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAAQACgJAJgCQALACABAJQgBAKgLACQgJgCgCgKg");
	this.shape_2.setTransform(67,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#996633").ss(0.3,1,1).p("AAUAAQgCASgSACQgRgCgCgSQACgRARgCQASACACARg");
	this.shape_3.setTransform(67.8,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgTAAQACgRARgCQASACACARQgCASgSACQgRgCgCgSg");
	this.shape_4.setTransform(67.8,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("AgDAAQAAgBADAAQAEAAAAABQAAACgEAAQgDAAAAgCg");
	this.shape_5.setTransform(55.6,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AgFgHIALAJQAAACgIAEg");
	this.shape_6.setTransform(57,31.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAAQACgJAJgCQALACABAJQgBAKgLACQgJgCgCgKg");
	this.shape_7.setTransform(56.2,31);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#996633").ss(0.3,1,1).p("AAUAAQgCASgSACQgRgCgCgSQACgRARgCQASACACARg");
	this.shape_8.setTransform(56.9,30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgTAAQACgRARgCQASACACARQgCASgSACQgRgCgCgSg");
	this.shape_9.setTransform(56.9,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AF947B").s().p("Ag2gLQACACAjADQAgADAogMIgFAMQgFAJgNAEQgGADgmADIgHAAQghAAgCgbg");
	this.shape_10.setTransform(73.1,257.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#42778E").ss(1,1,1).p("AB4gGQgBAEhCAIQg/ALhtgZ");
	this.shape_11.setTransform(45.2,241.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#42778E").ss(1,1,1).p("ABkgFQgCAEg7AJQg5ALhSgd");
	this.shape_12.setTransform(72.3,242.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A8846A").ss(1,1,1).p("AAdgFQgBABgTAEQgRAFgUAB");
	this.shape_13.setTransform(65.1,46.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C1A084").s().p("AAdgFIgUAFQgRAFgUABg");
	this.shape_14.setTransform(65.1,46.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A82A24").s().p("AAAALQgRgBgMgJQAcgWAfASIgCADQgSAMgIAAIgCgBg");
	this.shape_15.setTransform(61.6,49.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A8846A").ss(1,1,1).p("AAugTQgDABghACQgfADgagLQgBADAPAVQAPAWAfADQADACATgHQATgHgIggg");
	this.shape_16.setTransform(60.2,48.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#721710").s().p("AANAZQgfgDgPgWQgPgVABgDQAaALAfgDIAkgDQAIAggTAHQgQAFgFAAIgBAAg");
	this.shape_17.setTransform(60.2,48.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AikA7QgQgYgCgQQAKANAOAGQgLgaAJgXIAOAdQABgQALgaQALgdgFgMQAcAlAnAcIAFgcQAOAQATALIABgeIAhAaQAEgUAMgRQAcAcAmALQgPgQADgWQAWAZAjgCQgSgOADgWIA7AXIABADIgSABIgNABIgBAHIAXAIQgUAIgVgDIgWgEIgMgEIAMANIASARQgbgDgmgMIgrgLIgDAGIAYAOIgqgDIgYgBIgBAGIAPAFQg2gEgXgWQgYgYgBgFIgCgEIgDADQgOAPACAUQABAXADAGIgGAVIgMgHIAAAKIAAAOIgLADIgBAAQgEAAgFgHg");
	this.shape_18.setTransform(60.8,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#050505").ss(1,1,1).p("ABUhZQgJgCgcACQgggDgxgKQg1gJgjA8QAAgBAAgMQAAgNAFgJQgCABgMARQgMAQADAPQAAgBgIAAQgIAAgPAOQABAAAKAAQAJAAAFAFQgDABgQASQgQAPgGAbQgBAaAPASQAPASADAAIAPgEIAAgUIAMAGIAGgaQgBgDgDgWQgDgXAOgNQgBACAdAcQAeAcBCgCIghgLQADAAAZACQAcACAWAAIgigWQAFACAtAOQAsANAWAAIgagdQACABAYADQAZADAUgMIgdgLIAkgCQAAgFgZgmQgYgogrgLQgEgBgIgCg");
	this.shape_19.setTransform(60.8,16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C4C4C").s().p("AitBWQgPgSABgaQAGgbAQgPQAQgSADgBQgFgFgJAAIgLAAQAPgOAIAAQAIAAAAABIAAAAIAAAAQgDgPAMgQIAOgSQgFAJAAANIAAANQAjg8A1AJQAxAKAgADQAcgCAJACIAMADQArALAYAoQAZAmAAAFIgkACIAdALQgUAMgZgDQgYgDgCgBIAaAdQgWAAgsgNQgtgOgFgCIAiAWQgWAAgcgCIgcgCIAhALQhCACgegcQgdgcABgCQgOANADAXIAEAZIgGAaIgMgGIAAAUIgPAEQgDAAgPgSgABghWQALgZgFAMIgGANIAAAAg");
	this.shape_20.setTransform(60.8,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A8846A").ss(1,1,1).p("AAjhRQACAGAKAvQAKAtgJATQgLAPgRASQgQARgCABQAAgGgLguQgMgtgLgQQgUgbABgFIAugc");
	this.shape_21.setTransform(75.4,124.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C1A084").s().p("AgJAjQgMgtgLgQQgUgbABgFIAugcIAoAFIAMA1QAKAtgJATQgLAPgRASIgSASQAAgGgLgug");
	this.shape_22.setTransform(75.4,124.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#42778E").ss(1,1,1).p("AgShKIAOB6IAXAhIgKih");
	this.shape_23.setTransform(54.2,126.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3083C1").s().p("AAIBGQgGjMg0jJIAXACIAYCAQAQBrATCNQARCQACCDQgSAKhIAIQAyh7gDiPg");
	this.shape_24.setTransform(78.7,212);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#2772AA").ss(1,1,1).p("AAglIQABAEATBrQAUBqATCVQATCXACCLQgEAEhFAMQhDANhTgiIAAqd");
	this.shape_25.setTransform(72.9,211.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4496E0").s().p("AhvFDIAAqdICPASIAUBvQAUBqATCVQATCXACCLQgEAEhFAMQgTADgUAAQgyAAg9gYg");
	this.shape_26.setTransform(72.9,211.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#8C2C13").ss(1,1,1).p("AADg9QABAEgBAuQgBArgFAe");
	this.shape_27.setTransform(52.6,110.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A8846A").ss(1,1,1).p("AgHhFQAAACgCANQgBAEABAFQAAAJADAHQAKASAKAOQAGAOADAUQAEAUgEAJQgIAGgRgEQgUgDgCgB");
	this.shape_28.setTransform(65.4,36);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C1A084").s().p("AgCA5IgWgEIAPhuQAAAJADAIIAUAiQAGAMADAUQAEAUgEAIQgFAEgLAAIgJgBg");
	this.shape_29.setTransform(65.4,37.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A8846A").ss(1,1,1).p("AAXASQgHgMgNgGQgGgDgIgFQgGgEgFgF");
	this.shape_30.setTransform(36.6,38.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C1A084").s().p("AgQgNIAPAJQALAGAHALg");
	this.shape_31.setTransform(37.2,38.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A8846A").ss(1,1,1).p("AAkAMQgCgCgWgKQgUgLgbAA");
	this.shape_32.setTransform(41.2,23.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C1A084").s().p("AgjgLQAbAAAUALIAXAMg");
	this.shape_33.setTransform(41.2,23.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A8846A").ss(1,1,1).p("AgogiQAWAAAZAMQAbAMACACQAIACgFAiQgFAOgJgMQgKgLgZAF");
	this.shape_34.setTransform(40.3,28.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A8846A").s().p("AglA0QADgJADgGIgLgJQAZAKAUgKQARgNgKgRIABAAQAUgTgSgRQAJgLgEgPQAcALgEAcQADAEgLAWQABAHAEAJQABAKgCAJQgBAEgCADQgLAEgKgKQgIgFgIACQgLgCAAAMIAAAVQgPgDgJgKg");
	this.shape_35.setTransform(40.5,27.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A8846A").ss(1,1,1).p("AghBUQgWgRgGgUQgFgVAHgYQAHgVAJgFQAUgHADAAQgBgCAAgKQABgKAOgEQAAgDAJgQQAMgPAbAPQACABAMAOQAMAOgFAPQAEAEgLAYQAEAEAAAHQgFAEgHAAQgLAEgJAGQgDAEgGgBQgFABgFAC");
	this.shape_36.setTransform(38.4,28.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C1A084").s().p("Ag9AvQgFgVAHgYQAHgVAJgFQAUgHADAAQgBgCAAgKQABgKAOgEQAAgDAJgQQAMgPAbAPQACABAMAOQAMAOgFAPQAEAEgLAYQAEAEAAAHQgFAEgHAAQgLAEgJAGQgDAEgGgBQgFABgFACIgqA5QgWgRgGgUg");
	this.shape_37.setTransform(38.4,28.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#C95050").ss(1,1,1).p("AAbAEQgFBIgIAjQAEAHgMAGQgSgDgDgCQgFgBgMgLQgEgIACgwQABgxAFgwQAFguACgNQACgOAFAAQADgGARADQAYAAADAFQAEAFgCANQgCAMgBAHQAAAOgFBGg");
	this.shape_38.setTransform(42.7,25.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6666").s().p("AgPB3QgFgBgMgLQgEgIACgwQABgxAFgwIAHg7QACgOAFAAQADgGARADQAYAAADAFQAEAFgCANIgDATQAAAOgFBGQgFBIgIAjQAEAHgMAGQgSgDgDgCg");
	this.shape_39.setTransform(42.7,25.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A8846A").ss(1,1,1).p("AgwCzQgMAAgNAAQhIADg0gwQgcglA0gpQAzgpBFgeQBEgfAagJQAQgFAOgIQAJgFAKgFQAFgEAGgBQgJgHgFgIQgDgKAAgKQgDgLADgJQAFgGAHgEQAFgGABgIQgBgPANgBQAJAAAHAFQANAGAMAGQARALAPAQQAMAJAHAMQADAQgDASQABARgKAOQgFAFgHADQgMAFgLAGQgMAHgNAGQgYAKgVAMQg5Aqg1Au");
	this.shape_40.setTransform(25.1,45.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C1A084").s().p("AhJCzQhIADg0gwQgcglA0gpQAzgpBFgeQBEgfAagJQAQgFAOgIIATgKQAFgEAGgBQgJgHgFgIQgDgKAAgKQgDgLADgJQAFgGAHgEQAFgGABgIQgBgPANgBQAJAAAHAFIAZAMQARALAPAQQAMAJAHAMQADAQgDASQABARgKAOQgFAFgHADIgXALIgZANQgYAKgVAMQg5Aqg1AuIgeBVIgZAAg");
	this.shape_41.setTransform(25.1,45.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#C95050").ss(1,1,1).p("AgJAxQAIhNACgNQAFgOADAIQACAKgCAoQgDAqgBAF");
	this.shape_42.setTransform(44.5,9.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6666").s().p("AgJAxQAIhNACgNQAFgOADAIQACAKgCAoIgEAvg");
	this.shape_43.setTransform(44.5,9.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A8846A").ss(1,1,1).p("AgKgFQAIgGANAS");
	this.shape_44.setTransform(46.7,28.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C1A084").s().p("AgKgFQAIgGANASg");
	this.shape_45.setTransform(46.7,28.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#050505").ss(1,1,1).p("AgigCQACgCAZgDQAYgDASASQgFgChAgIg");
	this.shape_46.setTransform(56.7,23.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4C4C4C").s().p("AgigCQACgCAZgDQAYgDASASQgFgChAgIg");
	this.shape_47.setTransform(56.7,23.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#050505").ss(1,1,1).p("AgeAIQgBgDAMgIQALgLAnAOQgDAAgWABQgVABgPAGg");
	this.shape_48.setTransform(68.9,23.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4C4C4C").s().p("AgTgDQALgLAnAOIgZABQgVABgPAGQgBgDAMgIg");
	this.shape_49.setTransform(68.9,23.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A8846A").ss(0.5,1,1).p("AAdAHQgHAjgzgYQgCgDAKgVQAKgXAWACQAZACgHAgg");
	this.shape_50.setTransform(67.7,31.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F3F8FF").s().p("AgdASQgCgDAKgVQAKgXAWACQAZACgHAgQgEAVgUAAQgMAAgWgKg");
	this.shape_51.setTransform(67.7,31.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A8846A").s().p("AgiAZQgCgEALgZQALgcAxgCQADAIgHAlQgFAYgYAAQgNAAgXgKg");
	this.shape_52.setTransform(68.3,31);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#A8846A").ss(0.5,1,1).p("AAfAZQAHgGgKgXQgKgYgaAAQgcAAAEAhQAEAiA7gOg");
	this.shape_53.setTransform(57.8,30.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3F8FF").s().p("AggAFQgEghAcAAQAaAAAKAYQAKAXgHAGQgSAEgNAAQgdAAgDgYg");
	this.shape_54.setTransform(57.8,30.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A8846A").s().p("AgiAEQgEgiAeAAQAcgBAKAfQAKAcgKABQgOACgMAAQgiAAgEgbg");
	this.shape_55.setTransform(57.3,30);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A8846A").s().p("AABCQQAFgkgFgjIABgWIgBgUQAAgWgBgSQAAgXgBgVIgFgqQgBgYAFgWQADgMAAgNIgDgYQAHAHAEAPQADAQAAALQADAlgJAkIAJBPQAIBJgFApQgDATgLARQgEAJgGAJIgNAMQALgWAJgZg");
	this.shape_56.setTransform(71.2,33.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#A8846A").ss(1,1,1).p("ACAhCQACAIAHBIQAIBJgFApQgEAjgkAeQgkAehYgEQhYgMgLg/QgMg+ALgvQAHgmABgJIABgHQgCABgNgEQgOgEADgZQADgfARgxQASgxAxgRQAlgMAwgHQAygIAhAdQAgAegSBjg");
	this.shape_57.setTransform(59.1,33.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C1A084").s().p("AgYDbQhYgMgLg/QgMg+ALgvIAIgvIABgHQgCABgNgEQgOgEADgZQADgfARgxQASgxAxgRQAlgMAwgHQAygIAhAdQAgAegSBjIAJBQQAIBJgFApQgEAjgkAeQggAahHAAIgVAAg");
	this.shape_58.setTransform(59.1,33.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BA421C").ss(1,1,1).p("AgJAAQABAJAIABQAJgBABgJQgBgIgJgBQgIABgBAIg");
	this.shape_59.setTransform(55.4,74.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8C2C13").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_60.setTransform(55.4,74.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BA421C").ss(1,1,1).p("AgJAAQABAJAIABQAJgBABgJQgBgIgJgBQgIABgBAIg");
	this.shape_61.setTransform(55.2,69.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8C2C13").s().p("AgJAAQABgIAIgBQAJABABAIQgBAJgJABQgIgBgBgJg");
	this.shape_62.setTransform(55.2,69.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#8C2C13").ss(1,1,1).p("AgRgXIAkAv");
	this.shape_63.setTransform(77.4,77.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#8C2C13").ss(1,1,1).p("AgNgaQADAAALAPQANAMgBAa");
	this.shape_64.setTransform(82,73.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#8C2C13").ss(1,1,1).p("AAbgCIg1AF");
	this.shape_65.setTransform(33.7,52.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#8C2C13").ss(1,1,1).p("AAkAKQgBgCgYgJQgWgLgYAF");
	this.shape_66.setTransform(31.4,63.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#8C2C13").ss(1,1,1).p("AAoAGQgBgCgXgFQgVgHgiAG");
	this.shape_67.setTransform(33.5,57.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#8C2C13").ss(1,1,1).p("AgbgkQAAgCAPAQQANAQAbAs");
	this.shape_68.setTransform(79.7,66.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#8C2C13").ss(1,1,1).p("AARABQACgBgjAA");
	this.shape_69.setTransform(38.3,63.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#8C2C13").ss(1,1,1).p("AAWgBQAFgBgxAE");
	this.shape_70.setTransform(40.1,54.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#8C2C13").ss(1,1,1).p("AAUhRQAAAFgLA6QgJA4gTAs");
	this.shape_71.setTransform(40.3,60.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#8C2C13").ss(1,1,1).p("AgHgJIAPAT");
	this.shape_72.setTransform(75.3,72.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#8C2C13").ss(1,1,1).p("AAUhBQACABgCAnQgDAkglA3QAFgIgFg6");
	this.shape_73.setTransform(74.3,68);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#8C2C13").ss(1,1,1).p("AAFlAQAAAFgCA3QgDA4gCAyQgEAzACBmQAABjAMBIQAAACACARQACAQAAAJQgBARgBAEQgDADgLAeQgNAeALAW");
	this.shape_74.setTransform(45.2,83.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#8C2C13").ss(1,1,1).p("AABjYQgBAAgIBtQgIBrAbDZ");
	this.shape_75.setTransform(52,83.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#8C2C13").ss(1,1,1).p("AAGkRQgEACgJBuQgLBuAdDCQAAAEgBAuQgBAuAAAj");
	this.shape_76.setTransform(59.6,89.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#8C2C13").ss(1,1,1).p("AAOEvQAIghgKgxQgKgwgCgFQgZiPAMhtQALhuALggQAJgfgEgVQgEgXgBgB");
	this.shape_77.setTransform(67.3,86.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AA3313").s().p("AgTAHQALAAASgTQAGgKAEgOIgCAkIgCAAIgEAQIgQgEIgLAZIgEgeg");
	this.shape_78.setTransform(60.2,60);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#8C2C13").ss(1,1,1).p("AABhCQABACgCAZQAAAYgKAQQgdAagEgFIAHAtIAOgiIASAFIAEgQIAdAWQADAAAJgbQAJgZgcgvg");
	this.shape_79.setTransform(62.1,58.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BA421C").s().p("AgrAWQAEAFAdgaQAKgQAAgYIABgbIAWALQAbAvgJAZQgJAbgDAAIgdgWIgEAQIgSgFIgOAig");
	this.shape_80.setTransform(62.1,58.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#AA3313").s().p("AAHAcQgIgPgOABQAEgLABgHIgBgFQACgOAAgQQAQAmAJAKIgEAfQgDgEgCgIg");
	this.shape_81.setTransform(53.7,59.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#8C2C13").ss(1,1,1).p("AgEhIQgCABgNASQgOASgGASQgDARABAQQAAARAAABQACgBAUgIQATgJAGAAQAEABgEAMQgEAMgBACQABAAAKAAQAKACAEAKQAJATADgBIAFgnQgCgDgOgZQgNgXgEgQQgEgggKgHg");
	this.shape_82.setTransform(51.4,57);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BA421C").s().p("AAaA3QgEgKgKgCIgLAAIAFgOQAEgMgEgBQgGAAgTAJIgWAJIAAgSQgBgQADgRQAGgSAOgSIAPgTQAKAHAEAgQAEAQANAXIAQAcIgFAnIgBAAQgCAAgJgSg");
	this.shape_83.setTransform(51.4,57);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AA3313").s().p("AgDALQgTgIgYACIAJgUQAnAFAdABQAKgGAGgJQgHAYgRAZQgHgGgTgIg");
	this.shape_84.setTransform(31.6,64.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#8C2C13").ss(1,1,1).p("AAphUQAFADAJAuQAJAugsBKQgBgDgWgLQgYgMgdAFQAEgHAWg4QAWg4gGgYg");
	this.shape_85.setTransform(32,58.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BA421C").s().p("AgDBHQgYgMgdAFQAEgHAWg4QAWg4gGgYIA3gFQAFACAJAwQAJAsgsBKQgBgCgWgLg");
	this.shape_86.setTransform(32,58.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#AA3313").s().p("AgOATIgPgTQAJgZAUgSQAJAbAVATIgBABIgdAoIgOgZg");
	this.shape_87.setTransform(77.2,78.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#8C2C13").ss(1,1,1).p("AAghDQgFgBgoAVQgqAVgRAsIAjAzQACgFAegnQAOgSAYgHQAZgJAIAGQACABAEgDQAEgEgKgPQgbglgHgGg");
	this.shape_88.setTransform(81.2,76.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BA421C").s().p("AhIASQARgsAqgVQAogVAFABQAHAGAbAlQAKAPgEAEQgEADgCgBQgIgGgZAJQgYAHgOASIggAsg");
	this.shape_89.setTransform(81.2,76.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A8846A").s().p("AgGgdQAbAVgUAYQgHAKAAAEQgFgeAFgdg");
	this.shape_90.setTransform(26.3,51.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A8846A").s().p("AgUATQgUgCgPgMQgGgHAEgMQADgMABgMQAzAuA9gZQgHAHgBASIgBAeIhGgTg");
	this.shape_91.setTransform(57,54.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#8C2C13").ss(1,1,1).p("AAzAAIgvBTQgBgGgJgmQgLgmgKgHIgpgRQACAAAJgLQAJgLADglQABAFAgASQAeASAxgUQABgBAAAOQAAAOgRAig");
	this.shape_92.setTransform(56.2,59.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C1A084").s().p("AgFAnQgMgmgKgHIgogRQABAAAJgLQAJgLADglQABAFAgASQAeASAxgUQABgBAAAOQAAAOgRAiIgvBTIgJgsg");
	this.shape_93.setTransform(56.2,59.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AA3313").s().p("AgJDJIAJgVIAGgUIAAgCIgMhJQgNhCgCguIAAgHIABgaQgBgpgCguIgBgZIgBgbQADgCALAAIALgBIAQgPQgBAPgDANIgGASQgGAPgBATIgCAsQAAAsAEAhQADAWABAXQABAjAJAkQADAMAAAIQAAAJgDAKIgBAIIgBAMQAAAVANALQgNABgHAGIgNAUIgCgRg");
	this.shape_94.setTransform(40.6,88.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#AA3313").s().p("AARAeIAAgCQABgMgGgHQgDgEgJgFQgRgHgXgDIgUgCIAKgPIADgDQANACAaABIAqABQgEAFgCAGIgEAJIADACQAQAEAKgIIAIgEIgBAKIgMAIIgLAJIgUAQIAAgBg");
	this.shape_95.setTransform(36.3,66.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AA3313").s().p("AA3AeQgNgJgPgFQgggEgkADQgdAEgTgTQgQgWgWgOQAVACAUAJQAcANAeAHIAcAFIAMgFQAKgFAKACQARAEAPAHQAQAIARAFIAfAFQgVAJgYAFIABACIgFAAQgNAAgLgHg");
	this.shape_96.setTransform(59.8,54.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#AA3313").s().p("AhVAEIgCgIQAsABArgIQArgHAsAIIAAgDQACANgMAAIgWAAQgYACgZgBQguAAgsAPIgBgMg");
	this.shape_97.setTransform(41.1,52.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#AA3313").s().p("AgMANIgPgTIgCAGQgCgNADgCQAEgMgDgKQgDgKAJAEQAcAWAXAoIgFAJIgMARQgNgPgMgRg");
	this.shape_98.setTransform(74.9,73.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#AA3313").s().p("AhKA0QgwgFgxgjQBaATBWgRQBYgOBDg1QAVA7gRAZQgIAJgXAEQgWADgTAAIgpACQgwAFgjAAQgXAAgTgCg");
	this.shape_99.setTransform(57,111.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#8C2C13").ss(1,1,1).p("ACRkQQBDAQAVBFQARAfAUAeQgbAEgQAWQgVAZgQAZQgWgXgSgbQAAAAgFAWQgFAZgFAmQgFAlgBAkQADBCAUA8QAiBcgUAgQgMANgcACQgdADgTABQheAJg4gFQg3gEg6gsQAFgBABgQQABgPAAgFIARgpQgCgHgNhHQgOhHAAgvQABgagBgoQgCgogBghQAAgTgBgJQgCgKgQgKQgHgCgXgGQgYgGgEADQAHgfAJgiQAJgjgGggQAxgBAwgHQAggFAfAFQA6AVA7ASQAGgEAPgFQAGADAcAJQAMAEAEACQAYAJAYAAg");
	this.shape_100.setTransform(57.2,84.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BA421C").s().p("AhIFLQg3gEg5gsQAEgBABgQIABgUIASgpIgQhOQgOhHAAgvQACgagCgoIgDhJQAAgTgBgJQgCgKgPgKIgfgIQgYgGgEADQAHgfAJgiQAJgjgFggQAwgBAwgHQAhgFAeAFQA7AVA7ASQAFgEAPgFIAiAMIAQAGQAYAJAYAAQBCAQAXBFQAQAfAVAeQgbAEgRAWQgVAZgQAZQgWgXgSgbIgEAWQgFAZgGAmQgGAlAAAkQADBCAUA8QAiBcgUAgQgMANgcACIgwAEQhAAGgsAAQgXAAgTgCg");
	this.shape_101.setTransform(57.2,84.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#A8846A").s().p("AARAUIgbACQgaACgbgBQADgIAKgIIAUgKQASgIANgLQgDANgLAEQAPADATAAQAWABAVgCQgBARgPAJQgPAAgQgDg");
	this.shape_102.setTransform(30.1,52.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#A8846A").ss(1,1,1).p("ABfgoQACASgBAGQgBAUgJATQgJASgGAVQg0gGg0gCQggADgTgWQgTgeANgaQANgbAigHQAZgEArgBQAugCAPABQAGACADATg");
	this.shape_103.setTransform(22.9,58.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C1A084").s().p("AghA2QggADgTgWQgTgeANgaQANgbAigHQAZgEArgBQAugCAPABQAGACADATQACASgBAGQgBAUgJATQgJASgGAVQg0gGg0gCg");
	this.shape_104.setTransform(22.9,58.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3083C1").s().p("AgBAlQgugRgpAFQAKgkAMgVIAMgWICNAbIACBSQgvgCgrgQg");
	this.shape_105.setTransform(48.1,115.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3083C1").s().p("ABQF4QgRgIgEgNQACgSAMgEQAEAAgBgDIgTAGIAIgTIgJgGQATgVAEgOQAFgQgBgcQgGgqgEgmQACgLAHgHQAGgGgBgOQgDgOgJgLQgIgKgBgRIAPg+QAAgPgEgGQgEgFgEgNQgCgNAEgKQAFgKgDgPQgNgEgJgJQAMgOADgSQgZABACgMQACgMAGgMQADgFAFgBQAGAAACgMQgCgMgSgnQgSgogBgFQg8AQhEAAIAAg9IBIgmIBJgnQAGATAOA/QAQBBAIBNQAMB3gBB3QgBB0gEBkIAGCBQgFgUgQgIgABcDAQAAgUgCgVIAEhXQACgwgMgjIgBgDg");
	this.shape_106.setTransform(66.4,148);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#3B799B").ss(1,1,1).p("AAvl7QACAEARBEQARBEAKBXQAMCCgBCCQgCCEgEBvQgDACgiAOQgiAOghgBQgigBgFgrQgDg2gOhyQgOhygNhhQgNhigBgGIAAiZg");
	this.shape_107.setTransform(66.3,145.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4496E0").s().p("AgGF8QgigBgFgrQgDg2gOhyIgbjTIgOhoIAAiZICWhPIATBIQARBEAKBXQAMCCgBCCQgCCEgEBvQgDACgiAOQggANgeAAIgFAAg");
	this.shape_108.setTransform(66.3,145.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#A8846A").ss(1,1,1).p("AgYARQABgBAPgNQANgJAUgK");
	this.shape_109.setTransform(85.4,90.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C1A084").s().p("AgIAEQANgLAUgJIgxAhIAQgNg");
	this.shape_110.setTransform(85.4,90.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A8846A").s().p("AAWBiIAHgXQgXgkgUgkQgPgZgOgfQgGgKgDgMQAAgWAJgUQAGAdAOAaQANAWAKAWQAHAWANAUQALAcAVAIQgPAjgbAXQAHgGAFgOg");
	this.shape_111.setTransform(79.8,84.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A8846A").ss(1,1,1).p("AANkLQACADAYAvQAYAvAYAzQAYA0ABASQgGAXgxBAQgwBBg2BSQgyBOgFAEQgHAFgEggQgCgkAohjQAphkAahHQgFgGgjg5Qgig6gLgo");
	this.shape_112.setTransform(83.5,98.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C1A084").s().p("AhvDwQgCgkAohjQAphkAahHIgog/Qgig6gLgoIBogoIAaAyQAYAvAYAzQAYA0ABASQgGAXgxBAQgwBBg2BSQgyBOgFAEIgCABQgFAAgEgcg");
	this.shape_113.setTransform(83.5,98.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#706257").s().p("AgagEQAdgHAZgQQgDAbgEAKQAAAEgPAHQgMAFgWACQACgRAAgPg");
	this.shape_114.setTransform(79,265);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#706257").ss(1,1,1).p("ABeghQgEAggFANQgMASg8AEQg5ADgsgUQgBgEgEgeQBeAjBdgzg");
	this.shape_115.setTransform(72.9,265);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#8C7A6C").s().p("AhYARIgFgiQBeAjBdgzQgEAggFANQgMASg8AEIgNAAQgyAAgmgRg");
	this.shape_116.setTransform(72.9,265);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AF947B").s().p("AgIB1QguAAghgQQgDgNgCggQBWAeA8g6QAQgRACgiQADgkgLgqQg9AuhEgbIABgiIAqABIBGACIApABIACA2IACAxIgDAsQgEApgGAWQAAADgQAHQgaAJgpAAIgFAAg");
	this.shape_117.setTransform(73.1,256.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#8C7A6C").ss(1,1,1).p("ABhgJQAAAFgEAnQgDAqgHAWQgMASg8ADQg5AEgsgUQAAgDgEgXQgDgYADgTQAEgUAJgWQAJgXABgCIAEhYICfAFg");
	this.shape_118.setTransform(73,256.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BFA78E").s().p("AhaBoIgEgaQgDgYADgTQAEgUAJgWIAKgZIAEhYICfAFIAFBqIgEAsQgDAqgHAWQgMASg8ADIgPABQgxAAglgRg");
	this.shape_119.setTransform(73,256.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#706257").s().p("AgUgEQAVgDAUgMQgBAPgEAMQgDAEgfAIIgCgYg");
	this.shape_120.setTransform(53.4,255.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#42778E").ss(1,1,1).p("AArorIhVGjQAHgCACAUQgEAYAEAEIASARQAAAJACA3QACA2AKAOQADAIAEBKQACBKACBgQAABgABBJQAABJAAAD");
	this.shape_121.setTransform(50.4,189.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3083C1").s().p("AAGEJQgGhXgThWIgKghIAAgDIAHgbQgDgHgOgSQgPgPgDAGQAFgNAPgHQAQgGAEgMQAAgOgPgHQgPgGgEgOQAAgOAMgMQALgLAIgLQAPgaAAgbIACg5QADgnALglQAMglAGgmQACgRgEgIQgEgHgJgKQAAADgOgKQgLgJAJgBQAVACASgJQgIgGgYgLQgWgLgDgHQAEgPAPAEQAOAEgBgUQgQgCgJgPQgDgMAFgBQAFgCADgHQABgPAAgUQgCgTAFgIQARgMASAKQASAWgBAeQAEAvgCAwQgFCBggBlQgdBfgDBpIAAAOQAuDsAOCdQAOCfgCBAIAAAlQglAKgkAAQAmi0gRi5g");
	this.shape_122.setTransform(51.3,182.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#2772AA").ss(1,1,1).p("AB5qLIiNgcQgCABgTAnQgSAmgCA8QgBAwgHCBQgHCAgHB0QgIBzAAAGQABAFADBpQAFBogICVQgHCWgfCMQAGAEBQAQQBOAPBbgVQAEgCgIirQgHisg+k5QAChvAghlQAghkAFiC");
	this.shape_123.setTransform(44.7,178.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4496E0").s().p("AgqKiQhQgQgGgEQAfiMAHiWQAIiVgFhoQgDhpgBgFIAIh5IAOj0QAHiBABgwQACg8ASgmQATgnACgBICNAcIAEDbQgFCCggBkQggBlgCBvQA+E5AHCsQAICrgEACQg1AMgxAAQghAAgigGg");
	this.shape_124.setTransform(44.7,178.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#AF947B").s().p("Ag2AJQgagKAAgCQAhALAvgIQAxgGAYgGQAYgHgqATQgTAGgQAEQgWAFgSAAQgVAAgNgGg");
	this.shape_125.setTransform(47.4,252.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#AF947B").s().p("Ag4ABIAYgMQgCACgBAFQgCAEAWABIBGAGIACABQgYAEgWAAQgjAAgggLg");
	this.shape_126.setTransform(18.5,252.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#706257").s().p("AANAVIgGgNIgEgIIgXAJIgbALIgHABIAAgNQABgKABgIIABgEQATgMAXACQAOAFAMAMQASAHATAAIAAAaQgSgCgXgDg");
	this.shape_127.setTransform(37.1,254.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#706257").ss(1,1,1).p("ACyAXQgkAHhbgMQgCgDgEgKQgEgHAAgBQgDACgXAHQgUAKgEACQgGABgsACQgrADgxgDQgxgBgVgNQABgFABgRQA/ARBCgGQAigCAggGQAHgCAGgCQAQgIAVAAQALAAALAEQAEAGAFAGQAJAEALAAQAZADAaABQAyADAsgUQgBAQgFAMQgCAEgkAIg");
	this.shape_128.setTransform(33.3,255.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8C7A6C").s().p("AAzASIgGgNIgEgIIgaAJIgYAMIgyADQgrADgxgDQgxgBgVgNIACgWQA/ARBCgGQAhgCAhgGIANgEQAPgIAWAAQALAAAKAEIAJAMQAKAEALAAQAYADAaABQAzADAsgUQgCAQgEAMQgCAEgkAIQgOACgUAAQgkAAg5gHg");
	this.shape_129.setTransform(33.3,255.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#AF947B").s().p("AAOAmQg1gJgygOIgbgKQAlgOAWgeIAtAJIBOAPIAuAJQACAHADAcQggALgkAAQgRAAgSgCg");
	this.shape_130.setTransform(43.8,245.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#8C7A6C").ss(1,1,1).p("AC4BSQgjAKhkgNIgIgVIgvAVQgDAAgsADQgsADgxgCQgygCgVgPQgOgPAPgTQAPgUAMgFQAngJAngGQAogJAtgRQArgQAYgjICvAiQACADAFAnQAFAmgMApQACADgiAJg");
	this.shape_131.setTransform(33.6,249.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#BFA78E").s().p("AAxBPIgIgVIgvAVIgvADQgsADgxgCQgygCgVgPQgOgPAPgTQAPgUAMgFQAngJAngGQAogJAtgRQArgQAYgjICvAiQACADAFAnQAFAmgMApQACADgiAJQgPAEgbAAQgjAAg6gHg");
	this.shape_132.setTransform(33.6,249.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#020202").s().p("ADhU3QgzAAglgTIgGgDIgCgHIAAgEIAAgBIgBgCQgCgOgCgTIgCgUIACABQAAgJABgHQAEgRAIgWIALgeIABgXIACgmQgSgGgSgIIgJgEIAAqSQgCgngJhRIgUinQgKAqgLAoQgdBdgEBnIAAAMQAwDuAOCeQAOCfgCBBIAAAoIgBALIgKADIgGABQAHA1gOAyIABgCQgBAOgrAKQgoAKhigOIgIgBIgCgDIgFgLIAAgBIgiAPIACgBQgMAFgpABIgvABQhjAAgSgOQgLgDgGgFIgHgFIABgOIgBgFQAFgqAogRQAYgJAagDIAegFIAIgDQAigIAmgOIADgMQAeiKAHiTQAHiVgDhoQgDhogCgHIAAgCIAIh9IAOjzQAHh+ABgvQAAgUADgSIgBAAIAEgSQAGgWAGgSIgKgHIgFgOQgEgNAJgBIAAgRIAAgDIAAgEIAHgRIAKgXQgFgWgLg9QgLg8gCgsIAAgIIABgaIgChWIgCgpIAAgEQACgMgJgDIgCAEIgJANIgMgJQgCgCgUgKQgVgKgXADIgeAIIAJgVIgJAAIgzgDIgSgCQhGADg4g0QgTgVAGgbQAPgqA+gmQA9gmA6gYIBAgZQANgFAOgHIAKgGQgNgNgGgSQgCgJAAgKQAAgSAGgTIgCgCIACABQAIgbAPgIIANgEQAAgHAFgIQAEgGAJgFQAFgMAPgLIAAgDQAEgqADgNQAEgNALgCIABgBQAHgFAIAAQAGg3AGgOQAFgPAIAAQAJgEAKANQAFgDgBAqIAIgKIANAKQAbgdAjAAQAjAAAdAIQAWAFAMAAIAJgDQAMAAAIgBIABABIAIAAIAiAKIAAAAQAoAVAWAkQAWAlABAGIAFANIAGADIgEACIACABIgBABIAAAAIgIADIgMAJQgTAMgXAAIAKALIAKAKIgEABIADADIgQgCIgNABIgGAAQgBAQgEASQADARAFAyQAFAzABAtQAAAWgDAOQgDAqg1AnIAFACIAKAAIAOACQArAHAWAbQAWAcANAfQAJARALARIABAAIAJgDIAGAHQAIAIAcAmQALAKgFAXQgCAEgDACQAaAzAWAxQAWAyAAATQgDAchJBeQgmA0goA8QAIAhAEAhQAEAigKAPQgTAYgUAVQAIBugBBwQgBBxgEBiIAAASQAFAaATBtQATBrASCPQARCPACCBIAAAKIgKAEIgIADIAEBeIgCAhIgDAbIAAADIgBABIAAADIgBAEQgDAagDAMIAAABIgCAFQgFANgWAIQgdAKgvAAIgFAAgAieQnIACABIAAgBIgCgBIAAABgADdnOQACA9AUA6IAGATIAJAiIAQgmIAfhRIAAgBIABgDIAKgbQgPgWgcgxIgpg7QgJA0gCA4gAh6tlIAFAHIABAAIA1gFIAYgCQgJgdAAggIABgGIgDACIg7AcQgSAIgOAJIgXASIAlgDg");
	this.shape_133.setTransform(49.5,136.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmATZQAlARBagBQA4gCAXgCQAYgCAGgDQABgBAIgDQABADAAABIAXADQC7AXAVg0QABALABARQACARAAACQAAACACAPQACAQABABIAAAFQABABAAACQAAACADALQACAKABABIAJACIAGADQArAWA5AAQA4ABAjgMQAhgMAKgYIACgIQAFgQADgbIAEgnIAAgBQAAgGABgNQABgNAAgBIAAgDQAAgDgBgZQgBgagBgVQAJgDAIgDIAAgdQgBiBgRiNQgRiOgThtQgThsgHgdQABgMAAgEQAEhpABh6QAAhkgHhhQASgTAQgTQAKgLACgjQAAgcgMg0QAlg3AjguQAog3AUgeQATgfACgUQAAgCAAgDQACgJgNgjQgMgkgshVQAEgHAAgLQABgQgOgWQgfgqgHgGIgSgUQAAAAgGACQgFgHgDgHQgMgdgVgeQgWgdgpgPQAVgfAFgcQACgOAAgaQAAgtgFgxQgFgxgDgUQAAgDABgFQAIABAhADQAiADAEABQgCgDgMgNQADAAABAAQgFgGgVgXQAEgBAEgDQACgCAHgFQAGgCACgBIA3gaQgDgBgLgFQADgDABAAQgBgBgQgGQgPgGgIgDQgBgCAAAAQgDgJgUgiQgUgjgmgbQgcgLgJgBQgJgBgMgDQgLgEgMABQgLAAgMgBQgJgBgRgDQgZgHgjgCQgjgCgiAUQAAgKgFgHQgTgZgdAGQgnAIgEBSQgCABgDABIABAAQghAMgCBIQgJAIgFAJQgKAHgGAJQgCAEgCAFQgBAAAAAAQgeAOgKAnQgLAoAIAeQACAHAEAHQgEABgDACQgGABg9AZQg+AZhBAqQhBAqgSAzQgCAKAAAKQAAAdAVAXQBAA8BMgCQACAAACAAIASACQAEABAEAAQANgBABAMQAfgBAaAAQAbAAAbATQAHAFANAJQAAAPABACQAAAGABAlQABAlAAAGIgBAXQAAAFAAAFQABAqAKA3QAKA4AHAfQgEAJgGAOQgGAOgBABQABAGAAAFQAAABAAAAQAAABAAACQgDAEgBAFQgCAFAAAHQAAAWAMAQQgEAMgDANIgOA5QACAAAFgBQAAADAAADQAAAugIB9QgHB/gHBzQgHB0gBAKIAAAGQAAACADA1QACA0ABBVQAABkgIB3QgJB3gYBsQgeAKgZAGIgkAIQgcADgdAKQgXAKgSAVQgTAWgBAfIABAFQgBAEAAALQgBALAAABIATAOQAJAHANAFQAAgBgBAAIADABQgBAAAAAAgAEbmqIAAAAIAAABQgBABAAAAIAAAAIAAgBIABgBAEbmqQABgEACgGQgPgYgVgkQgCATAAAQQABAsANAsQAPgnADgGIABgEIABgBQAAAAAAgBIAAAAAEbmpIgBAAAEamoIAAAAAEbmqIACgDQgBACgBACAAwGgQABhDAQg/QAMBnACAlQAAAFAAA3QAAA2AAA0QgNhOgShZQAAgGAAgDgAmBTZIABAAAB4RgQAAgBAAgBQABAAACABQgCAcAAAKQgJAWgKAgQgCgBgCAAQAJghAAgkQAAgJgBgJQALgCADgBg");
	this.shape_134.setTransform(49.5,136.3);

	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(0,-9.1,0.898,0.898);
	this.instance.alpha = 0.5;

	this.addChild(this.instance,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,101,274.6);


(lib.panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dropIn:0,show:22,"static":30,hide:37,hidden:45});

	// timeline functions:
	this.frame_30 = function() {
		/* stop();*/
	}
	this.frame_45 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(15).call(this.frame_45).wait(7));

	// Text
	this.feedback = new cjs.Text("Great job! That's correct.", "italic bold 32px 'Arial'", "#FFFFFF");
	this.feedback.name = "feedback";
	this.feedback.textAlign = "center";
	this.feedback.lineHeight = 34;
	this.feedback.lineWidth = 250;
	this.feedback.setTransform(214,-47);
	this.feedback._off = true;

	this.timeline.addTween(cjs.Tween.get(this.feedback).wait(45).to({_off:false},0).wait(7));

	// Layer 4
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(216.1,-119.7,1,0.045);
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#031CA1").s().p("AYQThMAAAghGQACgZgShIQgShHg+hAQg+hAiAgEMgtLAAAIAAgEQAFhFA5gGMAtXAAAQCBAEA+BAQA9BBASBHQASBHgCAZMAAAAhKQgFBFg5AGg");
	this.shape.setTransform(216,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1F92FF","#001097"],[0,1],102.8,-143.9,-161.8,226.6).s().p("A4bThQg5gGgFhFMAAAgkrQAFhFA5gGMAtXAAAQCBAEA+BAQA9BBASBHQASBHgCAZMAAAAhKQgFBFg5AGg");
	this.shape_1.setTransform(216,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A4bT4QgjgBgXgcQgWgbgBgqMAAAgkrQABgpAWgcQAXgcAjgBMAtXAAAQB8AEBCA8QBDA8AYBMQAZBLgBAwMAAAAhKQgBAqgXAbQgXAcgiABg");
	this.shape_2.setTransform(216.1,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#031CA1").s().p("ATYThMAAAghGQACgZgPhIQgOhHgxhAQgyhAhngEMgkGAAAIAAgEQAEhFAtgGMAkRAAAQBnAEAxBAQAyBBAOBHQAOBHgBAZMAAAAhKQgEBFguAGg");
	this.shape_3.setTransform(216.1,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#1F92FF","#001097"],[0,1],82.2,-143.9,-129.3,226.6).s().p("AziThQgtgGgEhFMAAAgkrQAEhFAtgGMAkRAAAQBnAEAxBAQAyBBAOBHQAOBHgBAZMAAAAhKQgEBFguAGg");
	this.shape_4.setTransform(216.1,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AziT4QgbgBgSgcQgTgbAAgqMAAAgkrQAAgpATgcQASgcAbgBMAkRAAAQBjAEA1A8QA1A8AUBMQAUBLgBAwMAAAAhKQgBAqgSAbQgTAcgbABg");
	this.shape_5.setTransform(216.1,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#031CA1").s().p("AM5ThMAAAghGQABgZgJhIQgKhHghhAQghhAhEgEI4BAAIAAgEQADhFAegGIYIAAQBEAEAhBAQAhBBAJBHQAKBHgBAZMAAAAhKQgDBFgeAGg");
	this.shape_6.setTransform(216.1,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#1F92FF","#001097"],[0,1],54.7,-143.9,-86.1,226.6).s().p("As/ThQgegGgDhFMAAAgkrQADhFAegGIYIAAQBEAEAhBAQAhBBAJBHQAKBHgBAZMAAAAhKQgDBFgeAGg");
	this.shape_7.setTransform(216.1,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("As/T4QgSgBgNgcQgMgbAAgqMAAAgkrQAAgpAMgcQANgcASgBIYIAAQBBAEAkA8QAjA8ANBMQANBLAAAwMAAAAhKQgBAqgMAbQgMAcgSABg");
	this.shape_8.setTransform(216.1,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#031CA1").s().p("AJgThMAAAghGQABgZgHhIQgHhHgYhAQgYhAgzgEIxtAAIAAgEQAChFAXgGIRxAAQAzAEAYBAQAYBBAHBHQAHBHAAAZMAAAAhKQgCBFgXAGg");
	this.shape_9.setTransform(216.1,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#1F92FF","#001097"],[0,1],40.4,-143.9,-63.4,226.6).s().p("ApkThQgXgGgChFMAAAgkrQAChFAXgGIRxAAQAzAEAYBAQAYBBAHBHQAHBHAAAZMAAAAhKQgCBFgXAGg");
	this.shape_10.setTransform(216.1,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AplT4QgNgBgJgcQgJgbAAgqMAAAgkrQAAgpAJgcQAJgcANgBIRyAAQAxAEAaA8QAaA8AKBMQAJBLAAAwMAAAAhKQgBAqgJAbQgJAcgNABg");
	this.shape_11.setTransform(216.1,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2C2D").s().p("AHLRpIiVAAIjKAAIjYAAIjJAAIiWAAIhAAAIAAi+IAAmeIAAoNIAAoMIAAmeIAAi+IAKAAIAAFQIAAIkIAAJYIAAHwIAADoIBOAAICzAAIDoAAIDtAAIDHAAIBxAAIAAAtIhCAAg");
	this.shape_12.setTransform(216.2,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AAAAAA").s().p("AIBRpIAAk6IAAoIIAAo2IAAnKIAAi8QABgLgEgrQgDgrgOgoQgNgogfgDIhAAAIihAAIjYAAIjgAAIjAAAIhzAAIAAgfIA+AAICQAAIDAAAIDNAAIC9AAICKAAIA1AAQAeADAOAoQANAnAEArIAEA3IAACUIAAF0IAAHlIAAHvIAAGJIAAC4IgMAAg");
	this.shape_13.setTransform(216.2,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#878787","#000000"],[0,0.976],4.3,-105.9,-10.4,256.9).s().p("AHLRpIiVAAIjKAAIjYAAIjJAAIiWAAIhAAAIAAi+IAAmeIAAoNIAAoMIAAmeIAAi+IA+AAICQAAIDAAAIDNAAIC9AAICKAAIA1AAQAeADAOAoQANAnAEArIAEA3IAACUIAAF0IAAHlIAAHvIAAGJIAAC4IhCAAg");
	this.shape_14.setTransform(216.2,1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AoYSlQgEgBgBgOMAAAgkrQABgOAEgBIPkAAQAnAEASA6QARA5AEA6QAEA5gBAGMAAAAhKQAAAOgEABg");
	this.shape_15.setTransform(216.2,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4DAFFF").s().p("AIoStMAAAghKQABgagHhHQgGhHgVhAQgVhAgsgFIvlAAQgHABgGAOQAGgcALgCIPlAAQAsAFAVBAQAVBAAHBHQAGBHgBAaMAAAAhKQAAAmgIAWQAEgTAAgag");
	this.shape_16.setTransform(216.4,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#334D90").s().p("AoYS0QgIgCgBgcMAAAgkrQABgcAIgCIPkAAQAqAEASA9QASA9AEA+QAFA9gBAGMAAAAhKQgBAcgIACg");
	this.shape_17.setTransform(216.2,1.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#1F92FF","#001097"],[0,1],35.3,-143.9,-55.6,226.6).s().p("AoYThQgUgGgChFMAAAgkrQAChFAUgGIPkAAQAsAEAWBAQAVBBAGBHQAGBHgBAZMAAAAhKQgBBFgUAGg");
	this.shape_18.setTransform(216.2,1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AoYT4QgMgBgIgcQgIgbAAgqMAAAgkrQAAgpAIgcQAIgcAMgBIPkAAQArAEAWA8QAXA8AJBMQAIBLAAAwMAAAAhKQgBAqgHAbQgIAcgMABg");
	this.shape_19.setTransform(216.2,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C2C2D").s().p("ANKRpIkSAAIlxAAImNAAIlxAAIkTAAIh2AAIAAi+IAAmeIAAoNIAAoMIAAmeIAAi+IAUAAIAAFQIAAIkIAAJYIAAHwIAADoICOAAIFIAAIGpAAIG1AAIFsAAIDNAAIAAAtIh3AAg");
	this.shape_20.setTransform(216.2,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AAAAAA").s().p("AOtRpIAAk6IAAoIIAAo2IAAnKIAAi8QABgLgHgrQgGgrgagoQgZgog3gDIh1AAIknAAImLAAImcAAIlgAAIjUAAIAAgfIBzAAIEHAAIFgAAIF5AAIFaAAID9AAIBhAAQA3ADAZAoQAZAnAHArQAGArAAAMIAACUIAAF0IAAHlIAAHvIAAGJIAAC4IgUAAg");
	this.shape_21.setTransform(216.2,1.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#878787","#000000"],[0,0.976],7.9,-105.9,-19.1,256.9).s().p("ANKRpIkSAAIlxAAImNAAIlxAAIkTAAIh2AAIAAi+IAAmeIAAoNIAAoMIAAmeIAAi+IBzAAIEHAAIFgAAIF5AAIFaAAID9AAIBhAAQA3ADAZAoQAZAnAHArQAGArAAAMIAACUIAAF0IAAHlIAAHvIAAGJIAAC4Ih3AAg");
	this.shape_22.setTransform(216.2,1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AvXSlQgIgBAAgOMAAAgkrQAAgOAIgBIciAAQBIAEAgA6QAgA5AHA6QAHA5gBAGMAAAAhKQgBAOgHABg");
	this.shape_23.setTransform(216.2,1.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4DAFFF").s().p("APzStMAAAghKQABgagLhHQgLhHgnhAQgnhAhRgFI8iAAQgOABgKAOQAMgcAUgCIciAAQBRAFAnBAQAmBAAMBHQALBHgBAaMAAAAhKQgBAmgPAWQAIgTAAgag");
	this.shape_24.setTransform(216.6,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#334D90").s().p("AvXS0QgOgCgCgcMAAAgkrQACgcAOgCIciAAQBMAEAiA9QAhA9AIA+QAHA9gBAGMAAAAhKQgCAcgOACg");
	this.shape_25.setTransform(216.1,1.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#1F92FF","#001097"],[0,1],64.7,-143.9,-101.8,226.6).s().p("AvXThQgkgGgDhFMAAAgkrQADhFAkgGIciAAQBRAEAnBAQAnBBALBHQAMBHgCAZMAAAAhKQgDBFgkAGg");
	this.shape_26.setTransform(216.1,1.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AvXT4QgWgBgOgcQgPgbAAgqMAAAgkrQAAgpAPgcQAOgcAWgBIciAAQBOAEAqA8QApA8AQBMQAQBLgBAwMAAAAhKQgBAqgOAbQgPAcgVABg");
	this.shape_27.setTransform(216.2,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C2C2D").s().p("AUrRpImvAAIpDAAIpxAAIpDAAImvAAIi5AAIAAi+IAAmeIAAoNIAAoMIAAmeIAAi+IAeAAIAAFQIAAIkIAAJYIAAHwIAADoIDgAAIICAAIKcAAIKuAAII9AAIFAAAIAAAtIi5AAg");
	this.shape_28.setTransform(216.1,1.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AAAAAA").s().p("AXGRpIAAk6IAAoIIAAo2IAAnKIAAi8QABgLgKgrQgLgrgngoQgogohXgDIi3AAInQAAIprAAIqIAAIopAAIlMAAIAAgfICzAAIGeAAIIoAAIJSAAIIfAAIGMAAICZAAQBWADAoAoQAnAnAKArQALArgCAMIAACUIAAF0IAAHlIAAHvIAAGJIAAC4IgeAAg");
	this.shape_29.setTransform(216.1,1.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#878787","#000000"],[0,0.976],12.4,-105.9,-30,256.9).s().p("AUrRpImvAAIpDAAIpxAAIpDAAImvAAIi5AAIAAi+IAAmeIAAoNIAAoMIAAmeIAAi+ICzAAIGeAAIIoAAIJSAAIIfAAIGMAAICZAAQBWADAoAoQAnAnAKArQALArgCAMIAACUIAAF0IAAHlIAAHvIAAGJIAAC4Ii5AAg");
	this.shape_30.setTransform(216.1,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("A4ISlQgMgBgBgOMAAAgkrQABgOAMgBMAs0AAAQBxAEAyA6QAyA5ALA6QALA5gCAGMAAAAhKQgBAOgLABg");
	this.shape_31.setTransform(216.2,1.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4DAFFF").s().p("AY0StMAAAghKQACgagShHQgShHg9hAQg9hAh/gFMgs0AAAQgVABgQAOQASgcAfgCMAs0AAAQCAAFA9BAQA8BAASBHQASBHgCAaMAAAAhKQgBAmgXAWQAMgTAAgag");
	this.shape_32.setTransform(216.7,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#334D90").s().p("A4IS0QgXgCgCgcMAAAgkrQACgcAXgCMAs0AAAQB3AEA1A9QA0A9AMA+QAMA9gCAGMAAAAhKQgCAcgXACg");
	this.shape_33.setTransform(216.1,1.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#1F92FF","#001097"],[0,1],101.5,-143.9,-159.9,226.6).s().p("A4IThQg5gGgFhFMAAAgkrQAFhFA5gGMAs0AAAQB/AEA9BAQA9BBASBHQARBHgCAZMAAAAhKQgFBFg4AGg");
	this.shape_34.setTransform(216.1,1.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("A4IT4QgigBgXgcQgWgbgBgqMAAAgkrQABgpAWgcQAXgcAigBMAs0AAAQB6AEBBA8QBCA8AZBMQAYBLgBAwMAAAAhKQgBAqgWAbQgXAcgiABg");
	this.shape_35.setTransform(216.2,1.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C2C2D").s().p("AZQRpIoPAAIrCAAIr9AAIrCAAIoPAAIjiAAIAAi+IAAmeIAAoNIAAoMIAAmeIAAi+IAlAAIAAFQIAAIkIAAJYIAAHwIAADoIESAAIJzAAIMwAAINHAAIK7AAIGHAAIAAAtIjiAAg");
	this.shape_36.setTransform(216.2,1.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AAAAAA").s().p("AcNRpIAAk6IAAoIIAAo2IAAnKIAAi8QABgLgMgrQgNgrgwgoQgxgohqgDIjfAAIo3AAIr0AAIsYAAIqkAAImVAAIAAgfIDbAAIH5AAIKjAAILVAAIKYAAIHjAAIC7AAQBqADAwAoQAwAnANArQAMArgCAMIAACUIAAF0IAAHlIAAHvIAAGJIAAC4IglAAg");
	this.shape_37.setTransform(216.2,1.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#878787","#000000"],[0,0.976],15.2,-105.9,-36.6,256.9).s().p("AZQRpIoPAAIrCAAIr9AAIrCAAIoPAAIjiAAIAAi+IAAmeIAAoNIAAoMIAAmeIAAi+IDbAAIH5AAIKjAAILVAAIKYAAIHjAAIC7AAQBqADAwAoQAwAnANArQAMArgCAMIAACUIAAF0IAAHlIAAHvIAAGJIAAC4IjiAAg");
	this.shape_38.setTransform(216.2,1.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("A9fSlQgOgBgBgOMAAAgkrQABgOAOgBMA2wAAAQCKAEA9A6QA9A5AOA6QAOA5gDAGMAAAAhKQgBAOgOABg");
	this.shape_39.setTransform(216.3,1.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4DAFFF").s().p("AeUStMAAAghKQACgagWhHQgWhHhKhAQhKhAicgFMg2vAAAQgaABgTAOQAWgcAmgCMA2vAAAQCcAFBKBAQBKBAAWBHQAWBHgCAaMAAAAhKQgCAmgcAWQAOgTABgag");
	this.shape_40.setTransform(217,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#334D90").s().p("A9fS0QgbgCgDgcMAAAgkrQADgcAbgCMA2wAAAQCRAEBBA9QBAA9AOA+QAPA9gDAGMAAAAhKQgDAcgbACg");
	this.shape_41.setTransform(216.2,1.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#1F92FF","#001097"],[0,1],124,-143.9,-195.3,226.6).s().p("A9fThQhEgGgHhFMAAAgkrQAHhFBEgGMA2wAAAQCbAEBLBAQBKBBAWBHQAVBHgCAZMAAAAhKQgGBFhFAGg");
	this.shape_42.setTransform(216.2,1.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("A9fT4QgpgBgcgcQgbgbgBgqMAAAgkrQABgpAbgcQAcgcApgBMA2wAAAQCVAEBQA8QBRA8AeBMQAdBLgBAwMAAAAhKQgBAqgcAbQgcAcgpABg");
	this.shape_43.setTransform(216.2,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},9).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},8).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({scaleY:1,y:1.8},9).to({_off:true},3).wait(30));

	// Layer 3
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#636363").s().p("AHpAsIAAgrQACgcgXgaQgWgahCgBIiNgCIj9gDIkWgFIjUgEQAMgFAPgBIOSAAQA+AHAGA+IAABYQAAAZgQATIAAg5g");
	this.shape_44.setTransform(218.3,-129.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(3,1,1).p("AIUAtQgGBEhFAHIuRAAQhFgHgGhEIAAhZQAGhEBFgHIORAAQBFAHAGBEg");
	this.shape_45.setTransform(216.2,-128.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#444444").s().p("AnIB3QhFgGgGhEIAAhYQAGhFBFgGIORAAQBFAGAGBFIAABYQgGBEhFAGg");
	this.shape_46.setTransform(216.2,-128.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3,1,1).p("AIUAtQgGBEhFAHIuRAAQhFgHgGhEIAAhZQAGhEBFgHIORAAQBFAHAGBEg");
	this.shape_47.setTransform(216.2,-128.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#444444").s().p("AnIB3QhFgGgGhEIAAhYQAGhFBFgGIORAAQBFAGAGBFIAABYQgGBEhFAGg");
	this.shape_48.setTransform(216.2,-128.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#4B4B4B","#FFFFFF","#000000"],[0,0.51,1],-9.6,0,9.7,0).s().p("AhfD6IAAnzIC/AAIAAHzg");
	this.shape_49.setTransform(216,-156.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhuD+IAAn7IDdAAIAAH7g");
	this.shape_50.setTransform(216.1,-156.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},10).wait(42));

	// Layer 1
	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(216.1,-207.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-147.8},9).to({_off:true},1).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.5,-241.6,397.1,67.7);


(lib.optionBtn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#892000").s().p("AAHAwQgdAAgVgVQgVgVgBgdQABgXAJgBQAJgBAJATQAEALAAAIQAAAJAHAGQAQAQALgEQANgFAOgJQAQgFAOACQAOACgMAWQgIANgPAGQgPAFgNAAIgCAAg");
	this.shape.setTransform(10.9,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFA400","#A90000"],[0.004,1],5.5,-2.5,0,5.5,-2.5,18.2).s().p("AgzAzQgUgUgBgfQABgdAUgVQAVgVAegBQAfABAUAVQAVAVABAdQgBAfgVAUQgUAWgfAAQgeAAgVgWg");
	this.shape_1.setTransform(11.7,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag9A+QgZgZgBglQABgkAZgZQAZgZAkgBQAlABAZAZQAZAZABAkQgBAlgZAZQgZAZglABQgkgBgZgZg");
	this.shape_2.setTransform(11.7,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.4,1,1).p("AAABeQgngBgbgaQgbgbAAgoQABgnAagbQAbgbAnAAQAoABAbAaQAaAbABAnQgBAogaAbQgbAagoABg");
	this.shape_3.setTransform(11.7,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#98A0A3").s().p("AhCBDQgbgbAAgoQABgnAagbQAbgbAnAAQAoABAbAaQAaAbABAnQgBAogaAbQgbAagoABQgngBgbgag");
	this.shape_4.setTransform(11.7,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.7,1,1).p("AB0AAQgBgwghghQghghgxgBQgwABghAhQghAhgBAwQABAxAhAhQAhAhAwABQAxgBAhghQAhghABgxg");
	this.shape_5.setTransform(11.7,11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#5F5F5F"],[0,1],11.3,-3.8,-35.3,11.9).s().p("AhRBSQghghgBgxQABgwAhghQAhghAwgBQAxABAhAhQAhAhABAwQgBAxghAhQghAhgxABQgwgBghghg");
	this.shape_6.setTransform(11.7,11.7);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(1.1,0.8,0.414,0.414);
	this.instance.alpha = 0.5;

	this.addChild(this.instance,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,25.4,25.4);


(lib.btn_play = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play", "14px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 49;
	this.text.setTransform(-3.4,-12.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#892000").s().p("AARB2QhJgCgzgyQgygygChKQACg4AWgCQAWgDAVAwQAJAZAAAVQAAAUASASQAnAoAdgMQAfgMAigUQAmgPAiAGQAjAFgcA2QgUAfglAOQgkAOgiAAIgDAAg");
	this.shape.setTransform(-3,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFA400","#A90000"],[0.004,1],13.2,-6.1,0,13.2,-6.1,43.9).s().p("Ah8B9QgygygChLQAChKAygyQAygyBKgCQBLACAyAyQAzAyABBKQgCBLgyAyQgyAzhLABQhKgBgygzg");
	this.shape_1.setTransform(-1.3,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiWCXQg8g9gChaQAChZA8g9QA9g8BZgCQBaACA9A8QA8A9ACBZQgCBag8A9Qg9A8haACQhZgCg9g8g");
	this.shape_2.setTransform(-1.3,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.4,1,1).p("AAADlQhggChBhBQhBhBgChhQAChgBBhBQBBhBBggCQBhACBBBBQBBBBACBgQgCBhhBBBQhBBBhhACg");
	this.shape_3.setTransform(-1.2,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#98A0A3").s().p("AihCiQhBhBgChhQAChgBBhBQBBhBBggCQBhADBBBAQBABBADBgQgDBhhABBQhBBBhhACQhggChBhBg");
	this.shape_4.setTransform(-1.2,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.7,1,1).p("AEaAAQgDh3hQhPQhQhQh3gDQh3ADhPBQQhQBPgDB3QADB3BQBQQBPBQB3ADQB3gDBQhQQBQhQADh3g");
	this.shape_5.setTransform(-1.2,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#5F5F5F"],[0,1],27.4,-9.2,-85.4,28.9).s().p("AjGDHQhPhQgDh3QADh2BPhQQBPhQB3gDQB3ADBQBQQBQBQACB2QgCB3hQBQQhQBQh3ADQh3gDhPhQg");
	this.shape_6.setTransform(-1.2,-0.9);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-26.9,-27.2);
	this.instance.alpha = 0.5;

	this.addChild(this.instance,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-30.1,60,59.4);


// stage content:



(lib.quizShownew2CJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:9,win:16});

	// timeline functions:
	this.frame_0 = function() {
		/* if (_root.MMplayerType == undefined) {
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
		//_root.liveXML = "http://http://services.linguazone.com/customizer/customVars.php?action=play&gameid=260";
		
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "MultipleChoiceGame");
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/quizShow.xml", "MultipleChoiceGame");
		}*/
	}
	this.frame_2 = function() {
		/* stop();
		
		dispatchEvent ({type:"ready", bubbles:true});
		
		character = "";
		spotlightEndX = -500;
		
		playNow.onRelease = function() {
			gotoAndPlay("game");
		}
		
		selectBoy.onRelease = function() {
			spotlightEndX = 430;
			selectCharacterTxt._visible = false;
			playNow._visible = true;
			character = "boy";
		}
		
		selectGirl.onRelease = function() {
			spotlightEndX = 190;
			selectCharacterTxt._visible = false;
			playNow._visible = true;
			character = "girl";
		}
		
		playNow._visible = false;*/
	}
	this.frame_9 = function() {
		/* stop();
		var gameid:Number;
		if (game != undefined) delete (game);
		var game:RunGame = new RunGame(this);
		
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
	this.frame_16 = function() {
		/* stop();
		
		dispatchEvent ({type:"win", bubbles:true});
		
		removeMovieClip(spotlight1);
		char.swapDepths(congrats);
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(7).call(this.frame_9).wait(7).call(this.frame_16).wait(10));

	// Frame
	this.text = new cjs.Text("", "14px 'Arial-BoldMT'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 54;
	this.text.setTransform(-87,210);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).to({_off:true},7).wait(17));

	// Spotlight
	this.spotlight = new lib.Spotlight();
	this.spotlight.setTransform(-155.7,161.7);
	this.spotlight.alpha = 0.199;
	this.spotlight._off = true;
	this.spotlight.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 153, 0)];
	this.spotlight.cache(-108,-206,217,412);

	this.timeline.addTween(cjs.Tween.get(this.spotlight).wait(2).to({_off:false},0).to({_off:true},7).wait(17));

	// Characters
	this.selectCharacterTxt = new cjs.Text("Select a character", "bold 16px 'Arial'", "#7E1D0D");
	this.selectCharacterTxt.name = "selectCharacterTxt";
	this.selectCharacterTxt.textAlign = "center";
	this.selectCharacterTxt.lineHeight = 18;
	this.selectCharacterTxt.lineWidth = 163;
	this.selectCharacterTxt.setTransform(317.5,255);

	this.selectBoy = new lib.selectboy();
	this.selectBoy.setTransform(436.9,225,1,1,0,0,0,49.5,131.9);

	this.selectGirl = new lib.selectgirl();
	this.selectGirl.setTransform(199.9,222.3,1,1,0,0,0,41.7,128.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.selectGirl},{t:this.selectBoy},{t:this.selectCharacterTxt}]},2).to({state:[]},7).wait(17));

	// Buttons
	this.playNow = new lib.btn_play();
	this.playNow.setTransform(84,273,1.793,1.793,0,0,0,-0.1,-0.1);

	this.playAgain = new lib.playAgain();
	this.playAgain.setTransform(506.1,347.5,1,1,0,0,0,97.9,25.5);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false, new lib.playAgain(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playNow}]},2).to({state:[]},7).to({state:[{t:this.playAgain}]},7).wait(10));

	// Foreground
	this.instance = new lib.logo();
	this.instance.setTransform(298.9,59.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE67D","#FFAD3F"],[0,0.976],12,85.3,-3.4,-35.5).s().p("AinFbIADgbIABgIIAMgCIAWgDQgEgRgLgMQgSgRgSgqQgSgqgCg7QAAgmANgrQAeh2gDhJIAAgYQgEgNgLgdQgIgUgEgTIgDABQgNgNAAgSQAAgMAJgKIALgLQAMgIAAgHIAAgJIAMgCQARgFAVgBIAYgBIgIAPQAGABAHgBQAWgCAKgGQAHgFAOgEQBMgNA4AOQA4APAGAIIABABIAAABIAAACQAQAIALAIQAVANAAARQgCAGgEAFIABABIgEAAQgVAMgoABIgOAAQgnALgPATIgLANIgQgOQgjAfgRAaIABARQAEAnAcBeQAdBcAfBWQAfBXAKAPQAMAUACAgQAZAGAUAKIAJAEIgCAIIgGAaIgUABQiogGiggMg");
	this.shape.setTransform(198.1,381.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE67D","#FFAD3F"],[0,0.976],12.1,70.9,-1,-32.2).s().p("AgCEpIAAgCQABgFABhOQAEhPgFhvQgHhtgghnIgDgKQgngKgigGIgJgCIgegEQgcgCgYgHQgpgNgFgfIABgEIgBgLIAHgDQAHgEAKgDQATgJBmgBIAwABQArABAMADIgCgBIAgAMIABgBIAFgIIABgCIAJgBQBkgLAsAIQAsAIABAKIgBgBQAOAlgHAoIAGABIAKACIABAIIABAeQABAtgLBnQgMBmgmCbIACA6QhgANhlAMIgBgRg");
	this.shape_1.setTransform(419.3,383.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFE67D","#FFAD3F"],[0,0.976],8.1,72.4,-5.2,-32.2).s().p("AiCiQIAJgDQATgGASgEIgDguIgLgXQgIgQgEgNIgCgMIgBABIACgPQABgPADgKIABgBIAAgCIAAgDIACgFIAGgCQAngOA0AAQAygBAfAJQAWAFAFAKIACAEIAAAAQAEAKADATIAAADIABACIAAACIAAABIAEAVIgBAAIADAZIgFBHIAJABIAJADIAAAIQgCB0gXB8QgYB+gTBMQhbAShlAPg");
	this.shape_2.setTransform(458.9,378.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#A3260D").ss(1,1,1).p("ADSgOQgFAJh3AXQh0AZizhD");
	this.shape_3.setTransform(197.5,239.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A3260D").ss(1,1,1).p("ADngPQgFAKiDAXQiAAZjFhD");
	this.shape_4.setTransform(191,268.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A3260D").ss(1,1,1).p("AETgQQgCADhJATQhJAVh8ABQh6ABibg4");
	this.shape_5.setTransform(188.1,300.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A3260D").ss(1,1,1).p("AjYgOQAEAJB7AXQB5AZC5hD");
	this.shape_6.setTransform(441.3,239.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A3260D").ss(1,1,1).p("AjvgPQAFAKCIAXQCFAZDNhD");
	this.shape_7.setTransform(448,268.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A3260D").ss(1,1,1).p("AkcgQQACADBMATQBMAVCAABQB/ABCgg4");
	this.shape_8.setTransform(451,300.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFE67D","#FFAD3F"],[0,0.976],0,-99.3,0,186.5).s().p("ApNPaQk2hHlCi0IEdjUQmKgzkkhEQkkhFiig0Qihg0gDgDQgIifDoj1QDoj4FrjoQFsjpGChxQDKggCkgKQCjgJCOAGQCOgGCkAJQCjAKDKAgQGDBxFrDoQFrDpDpD4QDnD1gHCfQgDADihA0QiiA1klBEQkkBEmJAzIEcDUQlCC0k1BHQk2BHkYgIIg4ABQj/AAkWhAg");
	this.shape_9.setTransform(319.8,409.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC8833").s().p("AAAFyQnKAFkMheQkMhehzhiQhzhhAEgIIAAlhQABAIAbBIQAdBNBIBoQBIBoB/BQQEjCuFDAoQFCApE5g1QE6g0EDhpQAwgVBjg6QBlg5ArgXIAAAWQAEAIhzBhQhyBikNBeQj/BZmrAAIgtAAg");
	this.shape_10.setTransform(319.8,521.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C9963A").s().p("AAAGAQnKAFkMheQkMhehzhiQhzhiAEgGIAAljIS9gbIAAAAIAPAAIAAAAIS9AbIAAFjQAEAGhzBiQhyBikNBeQj/BZmrAAIgtAAg");
	this.shape_11.setTransform(319.8,520.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9B6A2A").s().p("AACHGQp6AJnWhZQnVhakLhjQDugqDVhPQCXg6A9iJQA9iKgviYISEggIAAAAIAPAAIAAAAIPkAbQAWDICJChQCJCfEIA8QCKAbCHAGQkLBjnVBYQmpBQoxAAIhzAAg");
	this.shape_12.setTransform(319.6,472.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B78534").s().p("AAAHGQqPAJnfhfQnfhekFhkQkEhkgEgIIhmnKMAi5gA9IAAAAIAPAAIAAAAMAi5AA9IhmHKQgEAIkFBkQkFBknfBeQm1BWpJAAIhwAAg");
	this.shape_13.setTransform(319.8,472.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#60140C").s().p("Aj0CdQgEABh4gVQh3gWi0gsQi0gsi7hEQA6AOA3AOQCMAgCTgqQCTgrA8hjIBDAQQBgAXAcAFQE6A2FBAqQFAAnE8A4QhYA6iMAOQiMAPiUgFQiUgEhvAAQh4AEiGAKQg0AEgzAAQhMAAhHgJg");
	this.shape_14.setTransform(128.2,459.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#771C0E").s().p("AhLFAQgEABh0gVQh0gUixgrQiwgri5hDQi4hEiOhbIgLg4QgJg0gGg7QgGg8AKgXQgEAAAeguQgRAfBmAuQBnAvClAyQCmAzCrAtQCrAsB3AaQBgAXAcAFQE6A2FBAqQFAApE8A4QhYA5iMAPQiMAPiUgFQiUgEhvAAQh4AEiGAKQg2AEg0AAQhKAAhGgJg");
	this.shape_15.setTransform(111.4,443.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A33E1F").s().p("ApxJkQh0gViwgqQiwgri5hDQi5hEiOhdIgKg4QgKg0gGg8QgFg7AJgXQgHABAxhBQAxhDC+iTQC9iSGfjrQjsCZhtBhQhtBggdAtQgdAtAEgBQg8BNAJA4QAJA4AeAcQAeAfAEABQCOBdC5BEQC4BDCxArQCwAqB0AVIB4AUIakggIA+DZMghaAAoQgFAAh0gUg");
	this.shape_16.setTransform(154.3,412.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#933A18").s().p("ApxMNQh0gUiwgrQiwgri5hDQi5hEiOhdIgKg4QgKg0gGg8QgFg7AJgXQgEAAAhgxQAhgyB+hqQB+hrESisQERitHdj0QAGAECCAhQCDAiC5ANQC8ANCyg5QAJgGEIg0QEJg0GjgaQgOH2AcH3QARCKAmCJIBPEYMghaAApQgFAAh0gUg");
	this.shape_17.setTransform(154.3,395.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFE67D","#FFAD3F"],[0,0.976],6.7,-37.6,-8.9,84).s().p("AI+GgIlsAAImnAAIlsAAIi5AAQgOikAChdQAAkqBCjmQDDgdF5gOQF3gPHDA5QAdBXAbCQQAbCNACCzQAAB1gSB2Ii3AAg");
	this.shape_18.setTransform(320.3,257.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AM9C1QgCjAgfiZQgeiZgfhYQlAguklgDQkigEjkARQjkASiAATQhLDxgBFCQgBBxARC4QBxAADfAAQDeAAEAAAQEBAADcAAQDbAABsAAQAXiGAAiNg");
	this.shape_19.setTransform(320.2,257.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BABABA").s().p("AHfHIIndAAIneAAIlQAAQgRi4ABhxQABlCBLjxQCAgTDkgSQDkgREiAEQElADFAAuQAfBYAeCZQAfCZACDAQAACNgXCGIlHAAg");
	this.shape_20.setTransform(320.2,257.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#771C0E","#A3260D"],[0,0.976],0,-83.4,0,87.2).s().p("AwHHKQgfiuALkRQAKkPB6kZQAIgFEDghQEEghGfgFQGggEHeBQQAGAEAzCiQAzCiAYEFQAYEGhLEzI/OAAIAAABQgDAAgcigg");
	this.shape_21.setTransform(319.4,257.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#771C0E").s().p("AjaJmQhLgegKgMQA1lyBij8QBij/BQiEQBSiEAHgCQABgGAvgiQAwgiBdADQgIAGhVCeQhVCehBDyQgmCmgOClQgLClgBBuQAABuABAFIgEAAQiLAAhJgdg");
	this.shape_22.setTransform(188.4,260.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A3260D").s().p("AhSKHQiIgHhDggQhCgfAAgEQA2l3Bjj+QBij/BTiDQBQiDAFAAQAAgGAxgjQAwgjBhADQBaANAAAcQgCAcgHAEQhsEhgOEIQgNEGAZCpQAYCoAFAGQi/A+iBAAIgYAAg");
	this.shape_23.setTransform(192.6,260.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#771C0E").s().p("AADKDQABgFAAhuQgBhugLilQgOilgmimQhBjyhVieQhViegIgGQBegDAvAiQAwAiAAAGQAHACBSCEQBQCEBiD/QBiD8A1FyQgKAMhKAeQhJAdiLAAIgFAAg");
	this.shape_24.setTransform(449.8,260.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A3260D").s().p("AkFJJQAFgGAYioQAYipgNkGQgNkIhskhQgHgEgBgcQgBgcBagNQBhgDAwAjQAwAjAAAGQAGAABQCDQBTCDBiD/QBjD+A2F3QAAAEhCAfQhCAgiJAHIgYAAQiBAAi/g+g");
	this.shape_25.setTransform(445.6,260.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#60140C").s().p("A5VCVIAqiVQJKCAI/grQI+grJPiRIAGgCQA+BCBkANQDEARCxguQCxgwCdhWIgEAaQiPBdi5BEQi4BBixArQiwArhzAUIh5AVg");
	this.shape_26.setTransform(484.1,456.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#771C0E").s().p("A5hDzIAriXQJKCCI/grQI+gsJOiQQC8gtCOglQCPgmCFgtQCFgsCghBQgBA9gNBKIgOBPQiOBci5BDQi4BDixArQiwArh0AUIh4AVg");
	this.shape_27.setTransform(485.2,447.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A33E1F").s().p("A5hLIIA0i3IafAhQAEAAB0gVQB0gUCwgrQCxgrC4hDQC5hDCOheQADAAAagiQAaghAIg4QAIg4gxhFQAHACg1hIQg1hIjOibQjOicnFj8IASgGQHdD0ERCtQESCrB+BsQB+BpAhAyQAhAygEAAQAJAXgFA8QgGA6gJA0IgLA4QiOBei5BDQi4BDixAsQiwArh0AUIh4AUg");
	this.shape_28.setTransform(485.2,400.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#933A18").s().p("A5hL4IBPkYQAmiJARiKQAcn3gOn2QGjAaEJA0QEIA0AJAGQCyA5C8gNQC6gNCCgiQCCghAGgEQHdD0ERCtQESCsB+BrQB+BqAhAyQAhAxgEAAQAKAXgGA7QgGA8gKA0IgKA4QiOBdi5BEQi4BDixArQiwArh0AUIh4AUg");
	this.shape_29.setTransform(485.2,395.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#30608C").s().p("AAADYI+4AEQAFgHDthdQDuhdGjhmQGjhnIlgkIBmgEIAAgBIAHABIAIgBIAAABIBmAEQIlAkGjBnQGjBmDuBdQDtBdAFAHg");
	this.shape_30.setTransform(319.8,313.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("EAzwAF3QADgFgmg2Qglg2iChuQiChukSiqQkSirnXjxIgNgHIgBAAIgcAJQgdAKhJASQhNgehqglIAHgFIgCgKQg1l2hjkBQhjkBhUiGQhTiGgHgCQgCgJg3gnQg4gohuAFQhCAHgYASQgZATgBATQAAABAAABQmchClugCQlsgCkFAaQkGAahiASQgBgKgHgLQgYgkhUgIQhvgFg3AoQg4AngCAJQgIAFhUCGQhTCGhjEAQhiEBg1F0IgBAKIAJAHQAAABACABQhkAihJAdQhtgcgGgEIgQgFIgOAHQkCCDjEBvIAAAAQgDACgEACQgHAEgIAEQgOAIgPAIQgFAEgGADQgQAJgPAJQgFADgEACQgSAKgRALQgCABgCABQg7Aig2AhQgBABgCABQgQAKgOAJQgEACgDACQgNAIgNAIQgEACgEADQgMAIgMAHQgEACgDADQgNAIgMAHQgDACgDACQgOAKgOAJQgFADgGAEQgIAFgIAFQgHAGgIAFQgFADgFADQgIAGgJAGQgDAAgEADQgJAGgJAGQgCABgCACQihBxhRBMQhRBMgcAoQgaAlgCALQgBACAAABQAAAAAAAAIAAABQAAAAAAABQgBACgBACQgBACAAADQgBABAAACQgBAEAAAEQAAABAAABQgBAGAAAHQgBAGAAAHQABA2AKA9QAKA+AHAgIACAIIAIAFQC6B5DzBOQDzBNDDAnQDEAnAuAFIAFAZIALAFQAGAIDcBWIgDAAIBOAbQDyBXFpBNIAABxIAEAFQADAQB3BlQB3BlEQBdQERBeHNgGQHOAGEQheQEQhdB4hlQB3hlADgQIAEgFIAAhxQFmhMDwhWIBtgmIgGAAQDFhOAGgHIAKgFIAGgZQAtgFDEgnQDEgnDzhNQDyhOC7h5IAIgFIACgIQAAgBAAgCQADgPAFgZIAHgkIgBABQAJg2AEg2QABgRgBgPIAAglIgFACQAAgCgBgDg");
	this.shape_31.setTransform(319.8,377.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AAActQnNAGkRheQkQhdh3hlQh3hlgDgQIgEgFIAAhxQlphNjyhXIhOgbIADAAQjchWgGgIIgLgFIgFgZQgugFjEgnQjDgnjzhNQjzhOi6h5IgIgFIgCgIQgHgggKg+QgKg9gBg2IABgNIABgNIAAgCIABgIIABgDIABgFIACgEIAAgBIAAgBIAAAAIABgDQACgLAaglQAcgoBRhMQBRhMChhxIAEgDIASgMIAHgDIARgMIAKgGIAPgLIAQgKIALgHIAcgTIAGgEIAZgPIAHgFIAYgPIAIgFIAagQIAHgEIAegTIADgCIBxhDIAEgCIAjgVIAJgFIAfgSIALgHIAdgQIAPgIIAHgEIAAAAQDEhvECiDIAOgHIAQAFQAGAEBtAcQBJgdBkgiIgCgCIgJgHIABgKQA1l0BikBQBjkABTiGQBUiGAIgFQACgJA4gnQA3goBvAFQBUAIAYAkQAHALABAKQBigSEGgaQEFgaFsACQFuACGcBCIAAgCQABgTAZgTQAYgSBCgHQBugFA4AoQA3AnACAJQAHACBTCGQBUCGBjEBQBjEBA1F2IACAKIgHAFQBqAlBNAeQBJgSAdgKIAcgJIABAAIANAHQHXDxESCrQESCqCCBuQCCBuAlA2QAmA2gDAFIABAFIAFgCIAAAlIAAAgQgEA2gJA2IABgBIgHAkIgIAoIAAADIgCAIIgIAFQi7B5jyBOQjzBNjEAnQjEAngtAFIgGAZIgKAFQgGAHjFBOIAGAAIhtAmQjwBWlmBMIAABxIgEAFQgDAQh3BlQh4BlkQBdQkBBYmrAAIgyAAg");
	this.shape_32.setTransform(319.8,377.1);

	this.panel = new lib.panel();
	this.panel.setTransform(238.8,-39,1.181,1.181,0,0,0,216.1,-207.8);

	this.instance_1 = new lib.Confetti();
	this.instance_1.setTransform(304.9,98.9,1.158,1.158,0,0,0,266.4,98.5);

	this.instance_2 = new lib.Confetti();
	this.instance_2.setTransform(304.4,313.9,1.117,1.117,0,0,0,266.4,98.5);

	this.finalScore = new cjs.Text("80", "70px 'Arial'", "#A946C1");
	this.finalScore.name = "finalScore";
	this.finalScore.textAlign = "center";
	this.finalScore.lineHeight = 72;
	this.finalScore.lineWidth = 93;
	this.finalScore.setTransform(136.2,181);

	this.finalScore_1 = new cjs.Text("80", "70px 'Arial'", "#311339");
	this.finalScore_1.name = "finalScore_1";
	this.finalScore_1.textAlign = "center";
	this.finalScore_1.lineHeight = 72;
	this.finalScore_1.lineWidth = 93;
	this.finalScore_1.setTransform(139.3,183.2);

	this.text_1 = new cjs.Text("Final Score:", "bold 30px 'Comic Sans MS'", "#FFFFFF");
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 179;
	this.text_1.setTransform(54.8,134.4);

	this.text_2 = new cjs.Text("Final Score:", "bold 30px 'Comic Sans MS'", "#021353");
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 179;
	this.text_2.setTransform(56.1,136.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.panel}]},7).to({state:[{t:this.text_2},{t:this.text_1},{t:this.finalScore_1},{t:this.finalScore},{t:this.instance_2},{t:this.instance_1}]},7).wait(10));

	// Background
	this.instance_3 = new lib.bground();
	this.instance_3.setTransform(299.9,192.1,1,1,0,0,0,0.3,0.3);

	this.instance_4 = new lib.bg3();
	this.instance_4.setTransform(393.5,219.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},7).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;