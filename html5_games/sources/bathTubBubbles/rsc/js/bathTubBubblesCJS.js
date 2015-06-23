(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	manifest: [{}]
};



// symbols:



(lib.water1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXALIAAgQIAXAFIgEgMQAGAMARAAQAAAHAGAGIgPAAQgQAAgRgCg");
	this.shape.setTransform(-51,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAPQgFgVAKgEQAJgEAQgBIgLAGQAUAEADAUQgLABgLAAIgUgBg");
	this.shape_1.setTransform(-58,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAAQAOgKASgBIANAGQgNAKgJAGIgDABQgIAAgMgMg");
	this.shape_2.setTransform(13.4,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CAFAFF").s().p("AhDgXQAtgIAdAOQAfAOAfAXIgOAHQg/gWg7gcg");
	this.shape_3.setTransform(-53.8,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00A0C6").ss(1,1,1).p("ABBgLQgDgBglgDQgjgEgfADQggADAMARQAdAZAtgTQAvgQAFgFg");
	this.shape_4.setTransform(-71.4,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7CE4FC").s().p("Ag9AEQgMgRAggDQAfgDAjAEIAoAEQgFAFgvAQQgSAIgRAAQgWAAgRgOg");
	this.shape_5.setTransform(-71.4,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00A0C6").ss(1,1,1).p("AB0A9QgEgEgyglQgxgig1gdQg2gdgRAVQgOAiApALQApAJAmAFQAiAJAqAVQApAUAEADg");
	this.shape_6.setTransform(-43.6,44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7CE4FC").s().p("ABHAmQgqgVgigJQgmgFgpgJQgpgLAOgiQARgVA2AdQA1AdAxAiIA2ApIgtgXg");
	this.shape_7.setTransform(-43.6,44);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00A0C6").ss(1,1,1).p("ACXCGQgDgHg1hNQg1hLhAhAQhBhBgpAfQgwA1A3AhQA4AhBHApQCLBeAGADg");
	this.shape_8.setTransform(-47.1,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7CE4FC").s().p("AAGAlIh/hKQg3ghAwg1QApgfBBBBQBABAA1BLQA1BNADAHQgGgDiLheg");
	this.shape_9.setTransform(-47.1,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00A0C6").ss(1,1,1).p("AiFA8QAGgEBGgmQBDglBBgbQBCgbgIAdQgRAhhAAWQg+AXg7ANQg8AMgEABg");
	this.shape_10.setTransform(4.3,21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7CE4FC").s().p("Ag5ASQBDglBBgbQBCgbgIAdQgRAhhAAWQg+AXg7ANIhAANQAGgEBGgmg");
	this.shape_11.setTransform(4.3,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00A0C6").ss(1,1,1).p("AgZA9QACgDATgfQARgeALgeQALgdgWACQghAQgEAwQgDAyACAHg");
	this.shape_12.setTransform(-16.8,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7CE4FC").s().p("AgYAEQAEgwAhgQQAWgCgLAdQgLAegRAeQgTAfgCADQgCgHADgyg");
	this.shape_13.setTransform(-16.8,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00A0C6").ss(1,1,1).p("ABMBDQgBgDgbgnQgbglgfggQghghgVAQQgYAaAcARQAcARAjAUQBGAvADABg");
	this.shape_14.setTransform(-32.7,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7CE4FC").s().p("AADATIg/glQgcgRAYgaQAVgQAhAhQAfAgAbAlIAcAqQgDgBhGgvg");
	this.shape_15.setTransform(-32.7,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15,p:{x:-32.7,y:10.2}},{t:this.shape_14,p:{x:-32.7,y:10.2}},{t:this.shape_13,p:{x:-16.8,y:5.8}},{t:this.shape_12,p:{x:-16.8,y:5.8}}]},2).to({state:[{t:this.shape_15,p:{x:-70.7,y:-6.8}},{t:this.shape_14,p:{x:-70.7,y:-6.8}},{t:this.shape_13,p:{x:-1.8,y:-37.2}},{t:this.shape_12,p:{x:-1.8,y:-37.2}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,2.1,97.8,52.7);


(lib.ship = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABPB9QjXgCjCgIQjBgJhbgNQhegRg/g0Qg/gygkg8QAAgDAIgGQAOAQAVAIIAaAMIBUAtQAzAYA7AOQA7APBDAHQAEAEAFACQAIADAIAAQApACApgBIGPAcQAEADAGAAQAxACAxABIAGAAIBZACIAHABQAzAHA0gBQA/gDA7gWIADgBQAWgCgEgEQAfgDAdgJQBGgWA/gkQAJgFAEgJQAJgQgFgKQAZgrgEgTQgDgUgDAAQBqAFA7ABQABAEgmA5QgnA6hbA4QhaA7icAJQhkACh6AAIidgBg");
	this.shape.setTransform(3.3,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8E0728").ss(1,1,1).p("ANjgEQgnA4hbA7QhbA7ibAIQijAEjYgDQjXgCjCgIQjBgIhbgOQh8gYhGhOQhHhNgdhHQgdhHABgFQAKABDkAQQDjARFAAVQE9AWEgARQEfARCCADQABAEgmA5g");
	this.shape_1.setTransform(0,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ABwCzQjXgCjCgIQjBgIhbgOQh8gYhGhOQhHhNgdhHQgdhHABgFIDuARQDjARFAAVQE9AWEgARQEfARCCADQABAEgmA5QgnA4hbA7QhbA7ibAIQhlACh5AAIidgBg");
	this.shape_2.setTransform(0,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7B0C5").s().p("AiHAYIAQhAQD7ATAEADIgLA7g");
	this.shape_3.setTransform(68.3,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AhkCoQAFABAsgGQAsgHAaglQAPggAPhdQANhfAKhXIAJhdQANB3ADCBQAECAgBBbIAABgg");
	this.shape_4.setTransform(-13.4,-15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9900").ss(1,1,1).p("AAAhAQhTBShzAyIGMDiQAAgFABhfQAAhfgEiFQgDiHgNh8QgBAFgvBFQgvBGhUBVg");
	this.shape_5.setTransform(-23.2,-15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FCF9E2","#F7EE8C","#EED106"],[0.094,0.553,1],-19.5,22,19.7,-0.5).s().p("AjGBEQBzgyBThSQBUhVAvhGQAvhFABgFQANB8ADCHQAECFAABfIgBBkg");
	this.shape_6.setTransform(-23.2,-15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8E0728").ss(1,1,1).p("AKTA3I0yhbQAGAACHgGQCHgHC+gEQC8gECoAHQD2AMCJANQCIAPACAAg");
	this.shape_7.setTransform(15.7,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC0CF").s().p("AqfgkICNgGQCHgHC+gEQC8gECoAHQD2AMCJANICKAPIgNBBg");
	this.shape_8.setTransform(15.7,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("AHFB/IuNgZQgQAAAAgVIAEi8QAAgTAQAAIONAZQAQABAAATIgEC8QAAAUgPAAIgBAAg");
	this.shape_9.setTransform(-4.8,29.5);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.4,-46.3,182.9,92.6);


(lib.playagain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play again?", "20px 'Trebuchet MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 217;
	this.text.setTransform(108.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.1)").s().p("AxUCHIAAkNMAiqAAAIAAENg");
	this.shape.setTransform(110,13.5);

	this.addChild(this.shape,this.text);
    this.helper = new cjs.ButtonHelper(this, 0, 1, 1, false);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,222,27.3);


(lib.PlayGame = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play", "bold 16px 'Trebuchet MS'", "#5E7A30");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 112;
	this.text.setTransform(-5,-4);

	this.shape = new cjs.Shape();

    // "rgba(255,255,255,0.1)"
	this.shape.graphics.f("#FFFFFF").s().p("ApSEwIAApgISkAAIAAJgg");
	this.shape.setTransform(-3.5,15.5);

	this.addChild(this.shape,this.text);
    this.helper = new cjs.ButtonHelper(this, 0, 1, 1, false);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-15,119,61);


(lib.hand1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C98F55").ss(1,1,1).p("AgkggQAAADAIAZQAIAXAPAJQAjAIAHgE");
	this.shape.setTransform(-19.2,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C98F55").ss(1,1,1).p("AgpgcQgBADACAUQACATATAIQATAEAUACQAVABABgB");
	this.shape_1.setTransform(-27.3,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CFA4").s().p("AhqgFQAXAVAGgQIAOgjQATAaAfAIQAjgCADgsQAPAYAYAAQAXAAAAghQAKAKADAMQABAHAGAEIgHgDQAKAcglAGQgkAFgTAIQAEAIACAGQgegCgdAHIADARQg9gHgNg3g");
	this.shape_2.setTransform(-24.2,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C98F55").ss(1,1,1).p("AgogfQgBADACAYQACAWASAHQATAFAUABQAUABACAA");
	this.shape_3.setTransform(-27,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEDBB1").s().p("AAUAfQgUgBgTgFQgSgIgCgVQgCgYABgDIBSA/IgWgBg");
	this.shape_4.setTransform(-27,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7CFA4").s().p("AAhBMQhIgJghgRQgggRABgCQgHADhIgHQhJgHg8gtQAAgFAvASQAfALA9AGIBCAIIAAABQABACArATQA3AXBngGQBqgFA6g7QAWgiAHgkIAfAAQgCAegLAcQgqBVhHAOQglAIgqAAQglAAgpgHg");
	this.shape_5.setTransform(4.5,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C98F55").ss(1,1,1).p("AghgaQAAACAEAUQAFARAPAJQAjAIAIgF");
	this.shape_6.setTransform(-19.1,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEDBB1").s().p("AgJAWQgPgJgFgRQgEgUAAgCIBDAzQgDACgHAAQgMAAgVgFg");
	this.shape_7.setTransform(-19.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C98F55").ss(1,1,1).p("AFugfQAAACAAABQgCAWgHATQgCAHgDAHQgVArgbAaQgdAbglAHQhHAOhYgNQhLgJgfgRQghgSABgCQgHADhJgHQhJgHg+gwQgCABgZgGQgZgGgNgRQgOgWgJghQgJghARgHQATgBAKARQAKARABACQgBgDAMgYQAMgYAbgEQAZACAIAQQAEAJACAFQABADAAAAAjhhVQgBgHACgRQABgYAdgEQAeAFAPAjQAPAjAAAFQACACAaAFQAZAFAWgHQAVgLAZgRQAXgQAYAOQAVASgMAYQgSAPgYgEQgYADgEAaQA0gLA3gDQAmgBAYAKQAVAGADADQgHgHgJgZQAAgBgBgC");
	this.shape_8.setTransform(0,5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEDBB1").s().p("ABPCDQhLgJgfgRQghgSABgCQgHADhJgHQhJgHg+gwQgCABgZgGQgZgGgNgRQgOgWgJghQgJghARgHQATgBAKARQAKARABACQgBgDAMgYQAMgYAbgEQAZACAIAQIAGAOIABADIAAAAIAAAAIgBgDQgBgHACgRQABgYAdgEQAeAFAPAjQAPAjAAAFQACACAaAFQAZAFAWgHQAVgLAZgRQAXgQAYAOQAVASgMAYQgSAPgYgEQgYADgEAaQA0gLA3gDQAmgBAYAKQAVAGADADQgHgHgJgZIgBgDIDZAAIAAADQgCAWgHATIgFAOQgVArgbAaQgdAbglAHQglAIgqAAQgmAAgqgHg");
	this.shape_9.setTransform(0,5.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.6,-9.5,75.4,29.6);


(lib.suds = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWgPQgDgNAPAHIAFgFQApAQgQAlQgcgSgOgYg");
	this.shape.setTransform(59.8,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAIQAKgRABADIAAgGQAUAEgBAVQgPgBgPgEg");
	this.shape_1.setTransform(90.1,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAPQgGgVAQgEIAPgLIAbANQgFAegWAAQgKAAgPgHg");
	this.shape_2.setTransform(63.5,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAlQgrgHg3AEIgTgpIg2gCQgFgTAPgIIAFAAQAtAFAZArQAWgFASAIQAQAIAYAAQANgUAiAEQAiAFAVAMQgMAHgiAEQgaACgPAAIgJAAg");
	this.shape_3.setTransform(24.8,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AFD8E8").s().p("AAtBZQgjgdgLgkQgTAOgZAGQgZAFgRgUQgPATgYgGQgYgFgPgTQgOAXgXAKQgYALgQgYQgeAJgmgJQglgIAQglQgYABgpgBQgqgBgSgMQgcgbAbgGQAcgHAXAZQgEglAVgbQAUgbADAeQgeAoAkARQAjASAjgDQAmA3BHgYIA0gkQAggYgBAxQAcAJAjgFQAjgDAWgRQgYgPgkAAQgiAAgOghQASABAPAHQAPAHAUgFQgHg0AxgGQgKBSAygNQAygNApgTQATAKgEAVQgHAFg6AMQg6ANgIAlQAFAsAegIQAggKgCguQATgHAVAGQAMAxAvgfQgFgqAiANIBNAbQAqASAXgiQAUAGAUAFIABgcQAUgBATAMQATAJgBAWQgHAegWgGIgngLIgpgBQgWAdgggLQgggNgWgWQgpA+hAgeQAlATgQAWQgQAXgkAEQgogBgigcg");
	this.shape_4.setTransform(48.7,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4FB4E0").ss(1,1,1).p("ACbBzQBCAcApg/QAXAXAgANQAhAMAXgfQAZAAASABQAmAgAZggQAYgggugGQABg0gtgJQgtgLgQAyQADgfgPgYQgOgZgfAZQACgXgMgNQgMgOgWASQAGghgTgLQgTgLgEAOQgFhShEAOQhEANglA0QgXgnglAEQgnAFgeAcQgIg0gwACQgvACgDA1QgGgFgBgJQgBAAgPAFQgJACgCABQgDgygqAfAkah5QgEhAgzADQgzADgYAiQgZAjBLAgQgnAIgNAdQgPAeAJAiQgXgXgdAFQgcAGAcAcQATAMArABQAsACAXgCQgQAoAmAJQAnAJAfgJQARAZAYgLQAYgKAPgZQAPAUAZAGQAYAFARgUQARAVAZgGQAagFAUgOQAMAlAjAdQAkAeApAAQAlgEARgYQAPgWgkgSQgCgBgDgC");
	this.shape_5.setTransform(48.8,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CAEAF9").s().p("AAtCZQgjgdgMglQgUAOgaAFQgZAGgRgVQgRAUgYgFQgZgGgPgUQgPAZgYAKQgYALgRgZQgfAJgngJQgmgJAQgoQgXACgsgCQgrgBgTgMQgcgcAcgGQAdgFAXAXQgJgiAPgeQANgdAngIQhLggAZgjQAYgiAzgDQAzgDAEBAIAFAGQAqgfADAyIALgDIAQgFQABAJAGAFQADg1AvgCQAwgCAIA0QAegcAngFQAlgEAXAnQAlg0BEgNQBEgOAFBSQAEgOATALQATALgGAhQAWgSAMAOQAMANgCAXQAfgZAOAZQAPAYgDAfQAQgyAtALQAtAJgBA0QAuAGgYAgQgZAggmggIgrgBQgXAfghgMQgggNgXgXQgpA/hCgcIgFgDIAFADQAkASgPAWQgRAYglAEQgpAAgkgeg");
	this.shape_6.setTransform(48.8,18.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,99.6,38.7);


(lib.soapBubbles2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAHQgCgGABgEQAGgIACAHQABAFABAAIALgJQgFAGABAGQAAAFgGAAQgCAAgIgCg");
	this.shape.setTransform(15.7,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAMIAAgOQARgDAIgJIAGALQAEAFAAAJQgJAEgJAAQgIAAgJgDg");
	this.shape_1.setTransform(5.3,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdACIgFAAQgWAAgeAFQAcgZAdAUg");
	this.shape_2.setTransform(6,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAAQAJgFAMACIAGADQgGAFgHAAQgFAAgJgFg");
	this.shape_3.setTransform(12.5,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKgPIAKgGQAOANgDAOQAAgGgGAAQgFAMgJAKQgCgTABgSg");
	this.shape_4.setTransform(9.6,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AFD8E8").s().p("AgDBNQgXgFACggQgzAQgNggQgNgdAtAFQgQgHgKgdQgKgdASgKQAcgHgFAbQgFAbABALQAGAHAIgBQAIgCAFAMQgDAOgFAUQAXgBANgQQAEAaAMgEQAMgFgDgZQAPABADAMQAEAKANACIgGgbQgDgLAWAGQAbAOgLAbQgKAagbAFQgaAGgDggQgEAegTAAIgDAAg");
	this.shape_5.setTransform(9.8,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4FB4E0").ss(1,1,1).p("AgjhhQAKg8AnAVQAqAWggAiQAtgLAKAmQAJAmgtANQAnACAIAbQAHAcgsACQAtADgBAfQgCAegYAPQgXAQgXgqQgFAkgXgFQgZgEACgjQg2ARgOghQgNgiAwAHQgXgVgHgjQgHghAkAPQgNgUALgRQAMgRANAMQgRgYATgW");
	this.shape_6.setTransform(9.8,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CAEAF9").s().p("AgDCNQgZgEACgjQg2ARgOghQgNgiAwAHQgXgVgHgjQgHghAkAPQgNgUALgRQAMgRANAMQgRgYATgWIAAAGQAKg8AnAVQAqAWggAiQAtgLAKAmQAJAmgtANQAnACAIAbQAHAcgsACQAtADgBAfQgCAegYAPQgXAQgXgqQgEAggVAAIgDgBg");
	this.shape_7.setTransform(9.8,14.3);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.6,30.5);


(lib.soapBubbles1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAGQANgNARgFIAFAAQAQACgFASQgLAFgMAAQgLAAgMgHg");
	this.shape.setTransform(14.7,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguApQgCgpAugCQAGgcAUgQIALAGQAGADAGAIQgKAJgRACQAAAOgCALQgSAMgXAGIgCAWQgKgEgLgCg");
	this.shape_1.setTransform(25.9,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKALQgDgBgEgKQgPgCgDgCQgEgDgIgKQAogKAOAeQACALgIAGIgLgJg");
	this.shape_2.setTransform(6,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAFQANgUAZAAIAFgGQAPAFAHAKQgSAGgXABQgCAJAAAMQgNgIgJgJg");
	this.shape_3.setTransform(18.8,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AFD8E8").s().p("AAHAyQgNANgSgFQgSgEgCgaQgQAxgZgtQgXAHgegDQgFgBADgSQABgRACgDQALgOARAAQARAJgLATQBGAHA6gYQAdgPAagSQAZgSAhgFQAIAYgJAQQgJAPgdgNQAVAXgQAPQgQAOgcgFQATAcgZAGQgGACgGAAQgSAAgRgNg");
	this.shape_4.setTransform(16.9,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4FB4E0").ss(1,1,1).p("ACSgEQAsgBgPgkQgPgkg0AKQgDgsgogKQgZAAgLAUQgKASAVATQglgUgdAdQgeAcAkAcQgjgXAAAsQgPgOgXgMQgXgPgVACQghAIgHAWQgGAXAoAEQgcAXAOAgQAfADAZgIQAJAWAPABQAQACAEgdQACAbATAFQATAFAQgOQAWASAagGQAagGgUgeQAeAGARgQQARgQgWgZQA5ASgGg4g");
	this.shape_5.setTransform(17.9,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CAEAF9").s().p("AgBBtQgQAOgTgFQgTgFgCgbQgEAdgQgCQgPgBgJgWQgZAIgfgDQgOggAcgXQgogEAGgXQAHgWAhgIQAVgCAXAPQAXAMAPAOQAAgsAjAXQgkgcAegcQAdgdAlAUQgVgTAKgSQALgUAZAAQAoAKADAsQA0gKAPAkQAPAkgsABQAGA4g5gSQAWAZgRAQQgRAQgegGQAUAegaAGQgHABgHAAQgSAAgQgNg");
	this.shape_6.setTransform(17.9,12.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.9,26.6);


(lib.soap2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB9A86").s().p("AATBIIiHhoQgBgBACgOQADgPAbgLQAVgFAQAGIASAIIBEAxQA/AoAOANQAFAPgFACQgYANgcAGQgNACgKAAQgNAAgIgEg");
	this.shape.setTransform(52.3,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD7766").s().p("AAJBXIiHhpQgFgGAHgmQAHgmBRAOQALAFBGAvQBJAtAMAcQgDAaguAQQgeAKgVAAQgMAAgJgEg");
	this.shape_1.setTransform(53.2,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB3A6").s().p("AgRBmIiIhmIhghEQgPgNgJgTQgIgSAfAOQAWAVAVAXQBCAfBCAdQAbASAeAPQAdAPAggQQAGAeAigTQAigTATgMQAXgMAlgUQAlgVAbAMQAjAcguAbQgvAdgZAJQgnAUg5ASQgcAJgaAAQgYAAgUgJg");
	this.shape_2.setTransform(53,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DD7766").ss(1,1,1).p("ADiB1Qg6AihGAQQhGASgegNIkbjSQgBgEAegpQAegrBGggQBGggB2AZQAEACA8AoQA8ApA9AzQA9AxAIAiQgBAhg7Agg");
	this.shape_3.setTransform(51.5,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FB9A86").s().p("AgCCsIkbjSQgBgEAegpQAegrBGggQBGggB2AZQAEACA8AoQA8ApA9AzQA9AxAIAiQgBAhg7AgQg6AihGAQQgoAKgcAAQgUAAgMgFg");
	this.shape_4.setTransform(51.5,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DD7766").ss(1,1,1).p("ADjBQQg8AhhFARQhGARgdgMIkcjTIAAg/II7BVQAAADgBAaQAAAZABAPQgBAhg6Agg");
	this.shape_5.setTransform(52.3,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED8877").s().p("AgCCHIkbjTIAAg/II7BVIgBAdQAAAZABAPQgBAhg6AgQg8AhhFARQgoAKgcAAQgUAAgMgFg");
	this.shape_6.setTransform(52.3,29.2);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21.9,-0.3,60.1,44.7);


(lib.soap = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAHQgCgGABgEQAGgIACAHQABAFABAAIALgJQgFAGABAGQAAAFgGAAQgCAAgIgCg");
	this.shape.setTransform(86.2,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAMIAAgOQARgDAIgJIAGALQAEAFAAAJQgJAEgJAAQgIAAgJgDg");
	this.shape_1.setTransform(75.8,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdACIgFAAQgWAAgeAFQAcgZAdAUg");
	this.shape_2.setTransform(76.5,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAAQAJgFAMACIAGADQgGAFgHAAQgGAAgIgFg");
	this.shape_3.setTransform(83.1,29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKgPIAKgGQAOANgDAOQAAgGgGAAQgFAMgJAKQgCgTABgSg");
	this.shape_4.setTransform(80.1,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAGQANgNARgFIAFAAQAQACgFASQgLAFgMAAQgLAAgMgHg");
	this.shape_5.setTransform(14.7,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguApQgCgpAugCQAGgcAUgQIALAGQAGADAGAIQgKAJgRACQAAAOgCALQgSAMgXAGIgCAWQgKgEgLgCg");
	this.shape_6.setTransform(25.9,12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKALQgDgBgEgKQgPgCgDgCQgEgDgIgKQAogKAOAeQACALgIAGIgLgJg");
	this.shape_7.setTransform(6,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAFQANgUAZAAIAFgGQAPAFAHAKQgSAGgXABQgCAJAAAMQgNgIgJgJg");
	this.shape_8.setTransform(18.8,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AFD8E8").s().p("AgDBNQgXgFACggQgzAQgNggQgNgdAtAFQgQgHgKgdQgKgdASgKQAcgHgFAbQgFAbABALQAGAHAIgBQAIgCAFAMQgDAOgFAUQAXgBANgQQAEAaAMgEQAMgFgDgZQAPABADAMQAEAKANACIgGgbQgDgLAWAGQAbAOgLAbQgKAagbAFQgaAGgDggQgEAegTAAIgDAAg");
	this.shape_9.setTransform(80.3,34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#4FB4E0").ss(1,1,1).p("AgjhhQAKg8AnAVQAqAWggAiQAtgLAKAmQAJAmgtANQAnACAIAbQAHAcgsACQAtADgBAfQgCAegYAPQgXAQgXgqQgFAkgXgFQgZgEACgjQg2ARgOghQgNgiAwAHQgXgVgHgjQgHghAkAPQgNgUALgRQAMgRANAMQgRgYATgW");
	this.shape_10.setTransform(80.4,28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CAEAF9").s().p("AgDCNQgZgEACgjQg2ARgOghQgNgiAwAHQgXgVgHgjQgHghAkAPQgNgUALgRQAMgRANAMQgRgYATgWIAAAGQAKg8AnAVQAqAWggAiQAtgLAKAmQAJAmgtANQAnACAIAbQAHAcgsACQAtADgBAfQgCAegYAPQgXAQgXgqQgEAggVAAIgDgBg");
	this.shape_11.setTransform(80.4,28);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AFD8E8").s().p("AAHAyQgNANgSgFQgSgEgCgaQgQAxgZgtQgXAHgegDQgFgBADgSQABgRACgDQALgOARAAQARAJgLATQBGAHA6gYQAdgPAagSQAZgSAhgFQAIAYgJAQQgJAPgdgNQAVAXgQAPQgQAOgcgFQATAcgZAGQgGACgGAAQgSAAgRgNg");
	this.shape_12.setTransform(16.9,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#4FB4E0").ss(1,1,1).p("ACSgEQAsgBgPgkQgPgkg0AKQgDgsgogKQgZAAgLAUQgKASAVATQglgUgdAdQgeAcAkAcQgjgXAAAsQgPgOgXgMQgXgPgVACQghAIgHAWQgGAXAoAEQgcAXAOAgQAfADAZgIQAJAWAPABQAQACAEgdQACAbATAFQATAFAQgOQAWASAagGQAagGgUgeQAeAGARgQQARgQgWgZQA5ASgGg4g");
	this.shape_13.setTransform(17.9,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CAEAF9").s().p("AgBBtQgQAOgTgFQgTgFgCgbQgEAdgQgCQgPgBgJgWQgZAIgfgDQgOggAcgXQgogEAGgXQAHgWAhgIQAVgCAXAPQAXAMAPAOQAAgsAjAXQgkgcAegcQAdgdAlAUQgVgTAKgSQALgUAZAAQAoAKADAsQA0gKAPAkQAPAkgsABQAGA4g5gSQAWAZgRAQQgRAQgegGQAUAegaAGQgHABgHAAQgSAAgQgNg");
	this.shape_14.setTransform(17.9,12.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FB9A86").s().p("AATBIIiHhoQgBgBACgOQADgPAbgLQAVgFAQAGIASAIIBEAxQA/AoAOANQAFAPgFACQgYANgcAGQgNACgKAAQgNAAgIgEg");
	this.shape_15.setTransform(52.3,17.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DD7766").s().p("AAJBXIiHhpQgFgGAHgmQAHgmBRAOQALAFBGAvQBJAtAMAcQgDAaguAQQgeAKgVAAQgMAAgJgEg");
	this.shape_16.setTransform(53.2,17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFB3A6").s().p("AgRBmIiIhmIhghEQgPgNgJgTQgIgSAfAOQAWAVAVAXQBCAfBCAdQAbASAeAPQAdAPAggQQAGAeAigTQAigTATgMQAXgMAlgUQAlgVAbAMQAjAcguAbQgvAdgZAJQgnAUg5ASQgcAJgaAAQgYAAgUgJg");
	this.shape_17.setTransform(53,25.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DD7766").ss(1,1,1).p("ADiB1Qg6AihGAQQhGASgegNIkbjSQgBgEAegpQAegrBGggQBGggB2AZQAEACA8AoQA8ApA9AzQA9AxAIAiQgBAhg7Agg");
	this.shape_18.setTransform(51.5,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB9A86").s().p("AgCCsIkbjSQgBgEAegpQAegrBGggQBGggB2AZQAEACA8AoQA8ApA9AzQA9AxAIAiQgBAhg7AgQg6AihGAQQgoAKgcAAQgUAAgMgFg");
	this.shape_19.setTransform(51.5,18.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DD7766").ss(1,1,1).p("ADjBQQg8AhhFARQhGARgdgMIkcjTIAAg/II7BVQAAADgBAaQAAAZABAPQgBAhg6Agg");
	this.shape_20.setTransform(52.3,29.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ED8877").s().p("AgCCHIkbjTIAAg/II7BVIgBAdQAAAZABAPQgBAhg6AgQg8AhhFARQgoAKgcAAQgUAAgMgFg");
	this.shape_21.setTransform(52.3,29.2);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.2,45.3);


(lib.duck = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BF7513").ss(1,1,1).p("AgJgQQgBgBgKgBQgJgBgDATQgEAeAdgNQANgBAPABQAOABgCgGQgDgJgKgOQgJgQgUALg");
	this.shape.setTransform(3.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED9718").s().p("AggAAQADgTAJABQAKABABABQAUgLAJAQQAKAOADAJQACAGgOgBQgPgBgNABQgIAEgGAAQgOAAADgVg");
	this.shape_1.setTransform(3.4,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BF7513").ss(1,1,1).p("AgJgQQgBgBgKgBQgJgBgDATQgEAeAdgNQANgBAPABQAOABgCgGQgDgJgKgOQgJgQgUALg");
	this.shape_2.setTransform(4.2,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED9718").s().p("AggAAQADgTAJABQAKABABABQAUgLAJAQQAKAOADAJQACAGgOgBQgPgBgNABQgIAEgGAAQgOAAADgVg");
	this.shape_3.setTransform(4.2,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAAQABgUASgCQATACABAUQgBAVgTACQgSgCgBgVg");
	this.shape_4.setTransform(8.7,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BF981D").ss(1,1,1).p("AhcgDQABADARAYQARAaAfABQAbgCAYgDQAXgDAQgXQASgWAJgOQAJgPgfAAQhGgKgFgJ");
	this.shape_5.setTransform(24.1,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEDE6C").s().p("AhKAYQgRgYgBgDIBWgvQAFAJBGAKQAfAAgJAPIgbAkQgQAXgXADIgzAFQgfgBgRgag");
	this.shape_6.setTransform(24.1,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BF981D").ss(1,1,1).p("AC1gUQgKgDgUAIQgTAHgkgFQhEgQhCgHQgMAAgMACQAPgUAAgaQgGhEhFgGQhFAGgGBEQAEA7A6AOQgeAXAAAnQACBaB9AKQAjAAAsgEQAugFAegOQAfgUAnhFQAagvgggQg");
	this.shape_7.setTransform(22.5,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEDE6C").s().p("AilA3QAAgnAegXQg6gOgEg7QAGhEBFgGQBFAGAGBEQAAAagPAUQAMgCAMAAQBCAHBEAQQAkAFATgHQAUgIAKADQAgAQgaAvQgnBFgfAUQgeAOguAFQgsAEgjAAQh9gKgChag");
	this.shape_8.setTransform(22.5,15.6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,44.4,33.2);


(lib.brush2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D69012").s().p("Ah+BIQAAgDgYgdIAuAeIgVhRIApBTIA0gOIAvAEIAPhfIAFBWIAOhoIALBaIAqgTIAJhkIAGBgQADAFANgJQAOgJAEAEIgQAKQgOAIgPABIgeAQQgbAOgRAGQgPAEgTAAIgYgBIgUAIQgTAHgQABQgkgFgJgEg");
	this.shape.setTransform(23.7,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FCC056").ss(1,1,1).p("AC5gsQgUA2AOAyQgCACgPAIQgOAJgPABQgEACgcAOQgcAOgRAHQgRAFgWgBQgTAAgCgBQgCABgUAHQgUAIgQABQglgFgJgFQgCgEgfglQggglgrgWQgCgCACgUQADgTAggKIA+gNIATgbIAiAAIAQgaIAbAKIAPgOIAhAHIAIgUIAmAKIAPgRIAXAHIAYgHIAXAEIAPgXQAEgCAXAAQAXgBgEAQQgNAUgTA4g");
	this.shape_1.setTransform(21.8,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDB035").s().p("AhsB/QgCgEgfglQggglgrgWQgCgCACgUQADgTAggKIA+gNIATgbIAiAAIAQgaIAbAKIAPgOIAhAHIAIgUIAmAKIAPgRIAXAHIAYgHIAXAEIAPgXQAEgCAXAAQAXgBgEAQQgNAUgTA4QgUA2AOAyIgRAKQgOAJgPABIggAQQgcAOgRAHQgRAFgWgBIgVgBIgWAIQgUAIgQABQglgFgJgFg");
	this.shape_2.setTransform(21.8,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#910526").ss(1,1,1).p("AClh8QhiAUiGBUQgFABhBAVQhBAXhGAXQhFAWgSAAIgEAuQABADAnAMQAoANBCgQQAngOA/gmQBAgkAHgFQAEgBBJgVQBLgSBZgTQBZgUAxABQAHgFASgjQASgkg3gNQg8gLhiATg");
	this.shape_3.setTransform(46.9,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AF0024").s().p("AlDCDQgngMgBgDIAEguQATAABFgWQBFgXBCgXIBFgWQCGhUBigUQBigTA8ALQA2ANgSAkQgRAjgHAFQgxgBhZAUQhZAThKASIhOAWIhHApQg/AmgnAOQglAJgdAAQgWAAgSgGg");
	this.shape_4.setTransform(46.9,23.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,3.4,85.4,35);


(lib.brush = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#910526").s().p("AgfAGQgCgHAYgIQAXgIAJADQAVAQgeAKQgLAEgHAAQgQAAgLgKg");
	this.shape.setTransform(72.9,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FCBC56").ss(1,1,1).p("ADZhOQAEgTgXABQgXAAgEACIgPAbIgXgEIgYAIIgXgIIgPAUIgmgMIgIAXIghgIIgPAQIgbgMIgQAfIgiAAIgTAdIg+APQggALgDAYQgCAYACADQACACAUACQATADANgTIAjAEIAPgQIAfAQIAqgQIAIAMIAXgjIAKAQIAigqIAMALIAXgbIAjAQIADgWIAyAKIAAgkIAYAPIAPgXg");
	this.shape_1.setTransform(21.8,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D69012").s().p("AjCBhQgUgCgCgCQgCgDACgYQADgYAggLIA+gPIATgdIAiAAIAQgfIAbAMIAPgQIAhAIIAIgXIAmAMIAPgUIAXAIIAYgIIAXAEIAPgbQAEgCAXAAQAXgBgEATIgTAqIgPAXIgYgPIAAAkIgygKIgDAWIgjgQIgXAbIgMgLIgiAqIgKgQIgXAjIgIgMIgqAQIgfgQIgPAQIgjgEQgLAQgQAAIgFAAg");
	this.shape_2.setTransform(21.8,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D69012").s().p("Ah+BTQAAgEgYghIAuAjIgVhfIApBhIA0gPIAvAEIAPhuIAFBjIAOh4IALBpIAqgXIAJh0IAGBvQADAGANgKQAOgKAEAFIgQALQgOAJgPACIgeASQgbAQgRAHQgPAFgTgBIgYgBIgUAJQgTAJgQAAQgkgFgJgFg");
	this.shape_3.setTransform(23.7,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FCC056").ss(1,1,1).p("ACribQAEgCAXAAQAXgBgEATQgNAXgTBBQgUA/AOA6QgCACgPAJQgOAKgPACQgEACgcARQgcAQgRAHQgRAGgWgBQgTAAgCgBQgCABgTAJQgVAIgPABQgmgFgJgGQgCgEgfgsQgggqgqgZQgDgDADgXQACgXAggLIA+gPIATgfIAjAAIAPgfIAbAMIAPgQIAhAIIAIgXIAmAMIAPgUIAYAIIAXgIIAXAEg");
	this.shape_4.setTransform(21.8,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDB035").s().p("AhsCTQgCgEgfgsQgggqgqgZQgDgDADgXQACgXAggLIA+gPIATgfIAjAAIAPgfIAbAMIAPgQIAhAIIAIgXIAmAMIAPgUIAYAIIAXgIIAXAEIAPgbQAEgCAXAAQAXgBgEATQgNAXgTBBQgUA/AOA6QgCACgPAJQgOAKgPACIggATQgcAQgRAHQgRAGgWgBIgVgBIgVAKQgVAIgPABQgmgFgJgGg");
	this.shape_5.setTransform(21.8,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#910526").s().p("AlbBlQgOgIgBgDIACgXQABADAlAMQAlAMBCgTQBJgfBEgpQAxgVBggcQBhgbApgHQA6gBA7gJQALgEAOgIIARgKIgNAWQgLAUgGACQgwAAhaATQhZAUhKAUIhOAUQgGAFhAAkQhAAlgmAOQgdAJglABIgGAAQggAAgagMg");
	this.shape_6.setTransform(47,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#910526").ss(1,1,1).p("AClh8QhiAUiGBUQgFABhBAVQhBAXhGAXQhFAWgSAAIgEAuQABADAnAMQAoANBCgQQAngOA/gmQBAgkAHgFQAEgBBJgVQBLgSBZgTQBZgUAxABQAHgFASgjQASgkg3gNQg8gLhiATg");
	this.shape_7.setTransform(46.9,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AF0024").s().p("AlDCDQgngMgBgDIAEguQATAABFgWQBFgXBCgXIBFgWQCGhUBigUQBigTA8ALQA2ANgSAkQgRAjgHAFQgxgBhZAUQhZAThKASIhOAWIhHApQg/AmgnAOQglAJgdAAQgWAAgSgGg");
	this.shape_8.setTransform(46.9,23.6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,85.4,39.4);


(lib.BubbleTarget = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA0gzQAWAWAAAdQAAAegWAWQgWAWgeAAQgdAAgWgWQgWgWAAgeQAAgdAWgWQAWgWAdAAQAeAAAWAWg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CCFF").s().p("AgzA0QgWgWABgeQgBgdAWgWQAWgWAdABQAegBAWAWQAVAWAAAdQAAAegVAWQgWAVgeAAQgdAAgWgVg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.pecah2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CCFF").ss(1,1,1).p("AgdhAQgJgHgCAKQgDALAGAUQAPAyAlAkQAVASAEgJQAFgIgJgaQgYg9gpgig");
	this.shape.setTransform(-24.1,-22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPA4QglgkgPgyQgGgUADgLQACgKAJAHQApAiAYA9QAJAagFAIQgBADgDAAQgHAAgOgMg");
	this.shape_1.setTransform(-24.1,-22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#66CCFF").ss(1,1,1).p("AgPAkQgJAMAUg3QAOgvAGAaQAGAYgFAFQgQANgQAWg");
	this.shape_2.setTransform(12.6,-25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEgHQAOgvAGAaQAGAYgFAFQgQANgQAWIgDACQgDAAARgtg");
	this.shape_3.setTransform(12.6,-25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#66CCFF").ss(1,1,1).p("AgogxQgCABgCADQgEAFABAIQACAZAuAmQAaAXANgGQAMgEgGgWQgHgWgVgSQgXgXgjgIg");
	this.shape_4.setTransform(28.7,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAfQgugmgCgZQgBgIAEgFIAEgEQAjAIAXAXQAVASAHAWQAGAWgMAEIgFACQgNAAgVgTg");
	this.shape_5.setTransform(28.7,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#66CCFF").ss(1,1,1).p("AAegXQgQAKgvAQQgTAHARAOQAVAQAngoQAPgPADgIQADgKgQAKg");
	this.shape_6.setTransform(-31.1,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAYQgRgOATgHQAvgQAQgKQAQgKgDAKQgDAIgPAPQgcAdgTAAQgHAAgGgFg");
	this.shape_7.setTransform(-31.1,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#66CCFF").ss(1,1,1).p("AhLgBIA/gXQBBgQATAoQATAqhSgSg");
	this.shape_8.setTransform(58.7,20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJAYIhUgZIA/gXQBBgQATAoQANAdgjAAQgQAAgZgFg");
	this.shape_9.setTransform(58.7,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#66CCFF").ss(1,1,1).p("AAxAgQgigKgagNQg3gYAcgLQAggNAZAVQAYASAGAgg");
	this.shape_10.setTransform(1.4,-3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAJQg3gYAcgLQAggNAZAVQAYASAGAgQgigKgagNg");
	this.shape_11.setTransform(1.4,-3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#66CCFF").ss(1,1,1).p("ABTAYQgJgUgWgPQgrghg9ATQgjAKAHAOQAGAKAhAKQBSAZAqgUg");
	this.shape_12.setTransform(-50.4,-25.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpATQghgKgGgKQgHgOAjgKQA9gTArAhQAWAPAJAUQgTAJgbAAQgiAAgsgOg");
	this.shape_13.setTransform(-50.4,-25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#66CCFF").ss(1,1,1).p("AAcgVQgMgVgVgDQgRADgKALQgTAWAoAmQAVAWAOgGQANgFABgWQACgUgMgTg");
	this.shape_14.setTransform(17.3,27.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAdQgogmATgWQAKgLARgDQAVADAMAVQAMATgCAUQgBAWgNAFIgGABQgNAAgQgRg");
	this.shape_15.setTransform(17.3,27.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#66CCFF").ss(1,1,1).p("AAVhbQgVAGgVAMQgoAaARAkQAMAWAeAIQAMAEgOAoQgLAaAOADQAMACARgWQAwg/g3hkg");
	this.shape_16.setTransform(-15.6,45.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBBcQgOgDALgaQAOgogMgEQgegIgMgWQgRgkAogaQAVgMAVgGQA3BkgwA/QgQAUgMAAIgBAAg");
	this.shape_17.setTransform(-15.6,45.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#66CCFF").ss(1,1,1).p("AhAAKQAjAAgCANQgDAfB7g4QgogPgpgJQhSgTgLAfQgKAZAfgBg");
	this.shape_18.setTransform(-57.4,7.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfAXQACgNgjAAQgfABAKgZQALgfBSATQApAJAoAPQhSAkgZAAQgOAAABgLg");
	this.shape_19.setTransform(-57.4,7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#66CCFF").ss(1,1,1).p("AAiA1QgXgIgSgOQgpgcAOgeQAHgTAQgEQAMgEAOALQAhAcgOBEg");
	this.shape_20.setTransform(-4.4,-49.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAfQgogcANgeQAHgTAQgEQAMgEAOALQAiAcgPBEQgXgIgSgOg");
	this.shape_21.setTransform(-4.4,-49.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#66CCFF").ss(1,1,1).p("AhbBaQgLgXABgeQADg7A7gmQBBgsA1AYQAVAKABARQACASgXARQgeAVgsgFQgLgDgDAFQgDAFAFAbQAHAwgsAJg");
	this.shape_22.setTransform(50.3,-25.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhlAlQADg7A7gmQBBgsA1AYQAVAKABARQACASgXARQgeAVgsgFQgLgDgDAFQgDAFAFAbQAHAwgsAJIgwABQgLgXABgeg");
	this.shape_23.setTransform(50.3,-25.1);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.3,-55.7,134.6,111.4);


(lib.pecah1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CCFF").ss(1,1,1).p("AhLgBIA/gXQBBgQATAoQATAqhSgSg");
	this.shape.setTransform(27.3,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAYIhUgZIA/gXQBBgQATAoQANAdgjAAQgQAAgZgFg");
	this.shape_1.setTransform(27.3,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#66CCFF").ss(1,1,1).p("AAxAgQgigKgagNQg3gYAcgLQAggNAZAVQAYASAGAgg");
	this.shape_2.setTransform(0.2,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAJQg3gYAcgLQAggNAZAVQAYASAGAgQgigKgagNg");
	this.shape_3.setTransform(0.2,-8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#66CCFF").ss(1,1,1).p("AA0gLQgrghg9ATQgjAKAHAOQAGAKAhAKQBSAZAqgTQgJgVgWgPg");
	this.shape_4.setTransform(-26.7,-18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpATQghgKgGgKQgHgOAjgKQA9gTArAhQAWAPAJAVQgTAIgaAAQgiAAgtgOg");
	this.shape_5.setTransform(-26.7,-18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#66CCFF").ss(1,1,1).p("AgFgtQgRADgKALQgTAWAoAmQAVAWAOgGQANgFABgWQACgUgMgTQgMgVgVgDg");
	this.shape_6.setTransform(8.4,4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAdQgogmATgWQAKgLARgDQAVADAMAVQAMATgCAUQgBAWgNAFIgGABQgNAAgQgRg");
	this.shape_7.setTransform(8.4,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#66CCFF").ss(1,1,1).p("AAVhbQgVAGgVAMQgoAaARAkQAMAWAeAIQAMAEgOAoQgLAaAOADQAMACARgWQAwg/g3hkg");
	this.shape_8.setTransform(-2.6,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBBcQgOgDALgaQAOgogMgEQgegIgMgWQgRgkAogaQAVgMAVgGQA3BkgwA/QgQAUgMAAIgBAAg");
	this.shape_9.setTransform(-2.6,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#66CCFF").ss(1,1,1).p("ABZgCQgogPgqgJQhRgTgMAfQgKAZAgAAQAjAAgCANQgDAeB7g4g");
	this.shape_10.setTransform(-16.6,-4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAYQACgNgjAAQggAAAKgZQAMgfBRATQAqAJAoAPQhSAkgZAAQgOAAABgKg");
	this.shape_11.setTransform(-16.6,-4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#66CCFF").ss(1,1,1).p("AAiA1QgXgIgSgOQgogcANgeQAIgTAPgEQAMgEAOALQAiAcgPBEg");
	this.shape_12.setTransform(-2.9,-21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAfQgogcANgeQAIgTAPgEQAMgEAOALQAiAcgPBEQgXgIgSgOg");
	this.shape_13.setTransform(-2.9,-21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#66CCFF").ss(1,1,1).p("AgGAgQAHAwgsAKIgwAAQgLgXABgeQADg7A7gmQBBgsA1AYQAVAKABARQACASgXARQgeAVgsgFQgLgCgDAEQgDAGAFAag");
	this.shape_14.setTransform(20.1,-14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhbBaQgLgXABgeQADg7A7gmQBBgsA1AYQAVAKABARQACASgXARQgeAVgsgFQgLgCgDAEQgDAGAFAaQAHAwgsAKg");
	this.shape_15.setTransform(20.1,-14.8);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.9,-28,71.9,56);


(lib.Bubble = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CCFF").ss(1,1,1).p("ACQiMQA8A6AABSQAABTg8A6Qg8A7hUAAQhTAAg8g7Qg8g6AAhTQAAhSA8g6QA8g7BTAAQBUAAA8A7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiPCNQg8g6AAhTQAAhSA8g6QA8g7BTABQBUgBA8A7QA8A6AABSQAABTg8A6Qg8A7hUgBQhTABg8g7g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.4,-21,42.9,42);


(lib.Symbol55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAUIAbhIIAgAHIgVBig");
	this.shape.setTransform(3,5.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6,10.7);


(lib.Symbol54 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBJIA1iYIBiAUIhpCLg");
	this.shape.setTransform(7.7,8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,16);


(lib.Symbol50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1775C9").s().p("AipB3QAiAGAfgRQBBgtBEhHQBGhIgKheQArAuAlA4QAHgHgWAsQgWAjg+BLIhGBWQACAGggAHIgIABQglAAheg4g");
	this.shape.setTransform(17.1,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,35.1);


(lib.celana = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AE0AmQlQCTABgDQhQgdh0gxQhzgyAqgTQAWgKAigjQAkgmANgcIgThmQApBLAXAKQAFACAVgQQAhgaArgVQA5geBLAEQgXAiANAmQAMAnAsAdQAsAdCCAxg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDB462").s().p("AgbC2QhQgdh0gxQhzgyAqgTQAWgKAigjQAkgmANgcIgThmQApBLAXAKQAFACAVgQQAhgaArgVQA5geBLAEQgXAiANAmQAMAnAsAdQAsAdCCAxQlICQgHAAIAAAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.8,-19.2,63.7,38.5);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAAQACgaAWgDQAXADACAaQgCAbgXADQgWgDgCgbg");
	this.shape.setTransform(-19.2,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAAQACgaAWgDQAXADACAaQgCAbgXADQgWgDgCgbg");
	this.shape_1.setTransform(19.2,5.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.8,-8.6,43.6,17.2);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C98F55").ss(1,1,1).p("AgsgdQABADAZAaQAXAXAoAH");
	this.shape.setTransform(-26.4,-14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEDBB1").s().p("AgSAAQgZgaAAgEIBYA8QgogHgXgXg");
	this.shape_1.setTransform(-26.4,-14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C98F55").ss(1,1,1).p("AA3AkQgtgOgegaQghgcgBgD");
	this.shape_2.setTransform(-22.3,-20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEDBB1").s().p("AgUgEQghgcgBgDIBtBHQgtgOgegag");
	this.shape_3.setTransform(-22.3,-20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CFA4").s().p("AFGEFQgcgKh3g0Qh/g/hLhOQhNhNgCgHQhTAKg6ggQg5gggcgfQgZgcAFgPQAEgOADgBQgNgiAUgSQAVgRAEAAQgCgTARgKQgCABAAARQAAARAVANIA0AdIAeAQQgEABgrgMQgrgLgjgaQgCABgGAOQgFAOARAaQAVAbAYATIAbATQgDABgjgDQgigEgTgUQAEAIBBAyQBCAxBPgPIAagLQAGAIBEBIQBCBKBCApQBDAkBRAoIBZArQABABgBAAIgYgHg");
	this.shape_4.setTransform(3.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C98F55").ss(1,1,1).p("AGCDXQgEAAg/gcQhAgchUguQhSg2gyhOQgvhPgBgIQADgBAXgSQAYgSAEgTQgBgBAGgHQAGgIARACQAWACAXgQQAXgRgfgPQgggOgWAHQgVAHgsASQhlAggsgSQgWgJgTgNQgbgOgXgSQgSgRgUgKQgWgJgWAJQgRALADATQgEAAgVARQgVASANAjQgDAAgGAQQgHAQAZAdQAdAgA6AhQA6AiBUgLQADAHBPBMQBOBNCAA/QB5A2AaAMQASAHAEAC");
	this.shape_5.setTransform(6.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEDBB1").s().p("AErELIiThCQiAg/hOhNQhPhLgDgIQhUALg6ghQg6gigdggQgZgcAHgQQAGgRADAAQgNgjAVgSQAVgRAEAAQgDgTARgKQAWgKAWAKQAUAKASAQQAXASAbAOQATANAWAKQAsARBlggQAsgSAVgHQAWgGAgANQAfAQgXAQQgXAQgWgCQgRgBgGAHQgGAHABACQgEASgYASQgXASgDABQABAJAvBPQAyBNBSA2QBUAuBAAcQA/AbAEABIhBA9IgWgJg");
	this.shape_6.setTransform(6.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CFA4").s().p("ACqD9Qg1grgrg5Qg6hYgRgnQgSgnACABIgxgfQgugegvgpQgvgogIgiQgJgygEgeQgFgfAWADIAKAvQAKAsAWAwQAdAwBDAuQBDAuAGAEQALAuA2BJQA2BIA0A6IA5A9QgGgCg1gqg");
	this.shape_7.setTransform(-2,-15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C98F55").ss(1,1,1).p("ACmFJQg2g2g2grQg1grgpg6Qg7hagSgpQgSgmACAAQgEgBgugeQgugegvgqQgwgpgIgjQgIgygFggQgEgfAXACQAWAFALAUQALAUAQAcQAVAeAjAcQAjAcAEACQAIgDBMghQBNghAogTQAEACANAWQAOAXgSAVQgVAVgTAVQgQAVgBABQACACgEAZQgDAagYAaQADAFAxBAQA0BBBEBGQBEBHCNA/");
	this.shape_8.setTransform(8.9,-13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEDBB1").s().p("ACmFCQg2g2g2grQg1grgpg6Qg7hagSgnQgSgoACAAIgygfQgugfgvgpQgwgpgIgjIgNhSQgEgfAXACQAWAFALAUIAbAwQAVAeAjAcIAnAeIBUgkIB1g0QAEACANAWQAOAXgSAVQgVAVgTAVIgRAWQACACgEAZQgDAZgYAbIA0BFQA0BBBEBGQBEBHCNA/QgwAxg8AAQggAAgkgOg");
	this.shape_9.setTransform(8.9,-12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C98F55").ss(1,1,1).p("AAsAzQgFgBgngRQgngRgJgWQgDgYAKgNQALgNASAMQASAPAVAWQAWASABAD");
	this.shape_10.setTransform(-25.6,-38.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEDBB1").s().p("AAAAhQgngRgJgWQgDgYAKgNQALgNASAMQASAPAVAWIAXAVIgGAlQgFgBgngRg");
	this.shape_11.setTransform(-25.6,-38.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C98F55").ss(1,1,1).p("AAsAzQgFgBgngRQgngRgJgWQgDgYAKgNQALgNASAMQASAPAVAWQAWASABAD");
	this.shape_12.setTransform(-25.6,-38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEDBB1").s().p("AAAAhQgngRgJgWQgDgYAKgNQALgNASAMQASAPAVAWIAXAVIgGAlQgFgBgngRg");
	this.shape_13.setTransform(-25.6,-38.8);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-47.2,79.3,75.9);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CFA4").s().p("AjEBnQgEgRAJgLIgBAHQAAAJAdAGQAgADAVgIIAVgIQABAIAwAGQAZgEAXgXQAZgXACgDIAfgtQAdgoAhgqQAigqAPgDQASACACAOQACANgBACQgrBdg1AjQg1AmgFgBQAJAHguAlQgdAMgogGQgogHgEgCQgMAGghAKQgIACgGAAQgWAAgJgZg");
	this.shape.setTransform(0.4,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C98F55").ss(1,1,1).p("AEDiqQgBgCgTgCQgSgDgaAXQgaAdglA4QglA4gaAdQgcAagnANQgkAOgEAAQABgIgcgyQgdgwhBAHQhCARgWAfQgWAgAVAOQAXAIAbgOQAagOADgDIAwAtQgGAAgmANQgmAOADAlQANAiAigLQAigKANgGQAEACApAHQApAHAfgNQAbgQAGgPQAGgOgBgBQAFACA3gnQA2gnAthe");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEDBB1").s().p("AjICWQgDglAmgOQAmgNAGAAIgwgtQgDADgaAOQgbAOgXgIQgVgOAWggQAWgfBCgRQBBgHAdAwQAcAygBAIQAEAAAkgOQAngNAcgaQAagdAlg4QAlg4AagdQAagXASADQATACABACIgzByQgtBeg2AnQg3AngFgCQABABgGAOQgGAPgbAQQgfANgpgHQgpgHgEgCQgNAGgiAKQgIADgGAAQgXAAgKgag");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C98F55").ss(1,1,1).p("AAIAzIgXgSQg+AagDgbQgEgaAcgeQAcghAfAJQAWAMAbAkQAbAiADAE");
	this.shape_3.setTransform(-15.7,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CFA4").s().p("AgPAhQg+AagDgbQgEgaAcgeQAcghAfAJQAWAMAbAkIAeAmIhKANg");
	this.shape_4.setTransform(-15.7,4.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-18.6,53.9,37.3);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C98F55").s().p("AgDgIIgLgdQASAYAFAVQAGAXAAACIgNAFQACgVgHgZg");
	this.shape.setTransform(33.5,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C98F55").s().p("AgCAQQACgQABgQQAAgYACAJQAIASgEAUIgFAYIgJADIAFgSg");
	this.shape_1.setTransform(28,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CFA4").s().p("ABMEZQgZgEgCgYQAHgWAVgIIgCACQgRAUASAOQAWADATgOQAagRAMgnQALgnAAgEQAZAlgDANIgDALQAYgZgFgmQgGgmgDgEQAlAngDAHQAUgXgbg+QgSghgTgNQgUgNgBAAQhgidhhg6Qhig6hEgEQhEgEgDAEQACgFBCgEQBCgFBjAzQBhAzBlCjQACgBAQgBQAQgBAQAVQASAYAXA2QAXA2gWAkIgQAIQgOAHgMgBQACAFgIAbQgJAbgqABQgRABgTAUQgTATgXAAIgEAAg");
	this.shape_2.setTransform(12.2,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C98F55").ss(1,1,1).p("AkRkVQACgFBEgFQBEgFBlA1QBkA1BoCnQABgCARgBQAQAAAQAVQAUAYAXA4QAXA4gXAkQgBABgOAIQgPAHgNgBQACAFgIAcQgIAcgsAAQgRACgUAUQgUAVgbgCQgggFABgfQAGgWAXgIQAXgJADgYQgCgVgOgmQgNgmgCgEQgHAGgxgBQgvgBABhTQABgCAJgHQAKgHALALQAdAhARgNQAPgVAPABQAAgEgfg3Qggg4g6gwQg9gxhZATQgHAFAEAV");
	this.shape_3.setTransform(12.1,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEDBB1").s().p("ABOEgQgggFABgfQAGgWAXgIQAXgJADgYQgCgVgOgmIgPgqQgHAGgxgBQgvgBABhTQABgCAJgHQAKgHALALQAdAhARgNQAPgVAPABQAAgEgfg3Qggg4g6gwQg9gxhZATQgHAFAEAVIhLhyQACgFBEgFQBEgFBlA1QBkA1BoCnQABgCARgBQAQAAAQAVQAUAYAXA4QAXA4gXAkIgPAJQgPAHgNgBQACAFgIAcQgIAcgsAAQgRACgUAUQgTATgYAAIgEAAg");
	this.shape_4.setTransform(12.1,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C98F55").s().p("ABBAHQgpgMgfgIQghgFgiACIgiACQBjgUA5AbQA8AZABAGIgsgRg");
	this.shape_5.setTransform(-21.3,-7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7CFA4").s().p("AAfAFIgigFQghgGgjgEIgmgEQBkgUA6AbQA8AZABAGQg8gQgTgDg");
	this.shape_6.setTransform(-21.5,-6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CFA4").s().p("AjdANIAOgZIASADIAhAFQBSALBbAbQBcAcAIADQAKg1gbhJQgahKgeg6Qgeg7gDgDQgsAKgSgEQgRgEABgBQAIgTAAgPIBHgRQAFACAyA7QAzA7BLCyQBLCxh7CIg");
	this.shape_7.setTransform(-16.7,-1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C98F55").ss(1,1,1).p("ABMj1QA0BABJCzQBKCxiECIIlykrQAAgDAeg9QAeg+A7hXQAEgDAVgjQAVgkAAgeIBRgFQAEABA1BAg");
	this.shape_8.setTransform(-16.7,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEDBB1").s().p("AjjAMQAAgDAeg9QAeg+A7hXQAEgDAVgjQAVgkAAgeIBRgFQAEABA1BAQA0BABJCzQBKCxiECIg");
	this.shape_9.setTransform(-16.7,-1);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-33.1,81.1,66.3);


(lib.Symbol55_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAUIAbhIIAgAHIgVBig");
	this.shape_1.setTransform(3,5.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6,10.7);


(lib.Symbol54_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBJIA1iYIBiAUIhpCLg");
	this.shape_1.setTransform(7.7,8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,16);


(lib.Symbol53 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAQIAUgmIAtAOIgNAfg");
	this.shape.setTransform(3.3,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.7,4.7);


(lib.Symbol52 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmBOIAdhDQAag7ASggQAWgUAyAVQA1AVAGAFQAHABhJAgQgnAUgaAqQgaAsgBAFg");
	this.shape.setTransform(10.4,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.7,18.3);


(lib.Symbol51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoACQAmg5AggNQAdgDAMAOQAMANAAACQACAAgJAGQgIAGgmAPQgpARgiAgQgjAggCAEQAEgIAmg8g");
	this.shape.setTransform(8.3,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,14.1);


(lib.Symbol50_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1775C9").s().p("AipB3QAiAGAfgRQBBgtBEhHQBGhIgKheQArAuAlA4QAHgHgWAsQgWAjg+BLIhGBWQACAGggAHIgIABQglAAheg4g");
	this.shape_1.setTransform(17.1,17.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,35.1);


(lib.Symbol49 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1775C9").s().p("AinCcQgPgPgMgRQBEAeA7gkQA7gjAhg6QApgsAZg8QAYg8gOhCQAuArAuA4QAIgDgOAeIgoBGQggA2gxA8QgxA8g4AbQAAAGghAHIgIABQggAAg3gyg");
	this.shape.setTransform(19.6,20.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.2,41.4);


(lib.Symbol48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1775C9").s().p("AhLDdQgkgGg0gYQBAAbA3g8QA1g8AmhRQAnhQAOgoQAPgzgdgkQgVgbgJgIQAyAiA5AsQABAEgRBJQgRBGgsBXQgtBYhOAzIgBAAQgGAAgfgFg");
	this.shape.setTransform(16.4,22.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.3,32.8,45.3);


(lib.Symbol33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1775C9").s().p("AgpBrQA4g6AlhgQAchdgJgTIgDgGIAmAkQgCAGgcBHQgdBGgvBHQguBIg7AFQAGgBA6g6g");
	this.shape.setTransform(10.6,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.9,21.2,33.4);


(lib.Symbol32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmhBIBFAGQAFB3ADAGQhGgxgHhSg");
	this.shape.setTransform(4,6.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,13.4);


(lib.Symbol31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BnQgJhSAMg/QAMhCACgEIBeAEQgZAkgIA+QgIA7ACA/g");
	this.shape.setTransform(5.8,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.7,22.6);


(lib.Symbol30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1775C9").s().p("AgwBpQA8g2AuhdQAjhZgHgVIgCgFIAiAnQgBAGgjBEQgjBDg0BDQg2BDg6ABQAGgBA/g0g");
	this.shape.setTransform(11.9,16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1,23.7,31.7);


(lib.Symbol29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgihFIBFANQgGB2ADAIQhCg4AAhTg");
	this.shape.setTransform(3.5,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,14);


(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABkQgChUASg+QARhAADgEIBdANQgcAhgNA9QgNA7gEA/g");
	this.shape.setTransform(6.5,11.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.1,23);


(lib.Symbol27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1775C9").s().p("AgwBpQA8g2AuhdQAjhZgHgVIgCgFIAiAnQgBAGgjBEQgjBDg0BDQg2BDg6ABQAGgBA/g0g");
	this.shape.setTransform(11.9,16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1,23.7,31.7);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgihFIBFANQgGB2ADAIQhCg4AAhTg");
	this.shape.setTransform(3.5,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,14);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABkQgChUASg+QARhAADgEIBdANQgcAhgNA9QgNA7gEA/g");
	this.shape.setTransform(6.5,11.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.1,23);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1775C9").s().p("AhpEFIAcgLIAFgJIAmhFQAhhAARhfQAThegFg9QgIg4gWgfQgUgfgCAAQAtABAfATQAeATARAzQAMAwgUBSQgVBQggBMQghBMgVAfQgkAmgzAAIgEAAg");
	this.shape.setTransform(10.6,26.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,52.3);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglgbIAlgRIAmA+IgmAbg");
	this.shape.setTransform(3.8,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.7,9);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA7Qgag5ANg0QAVgwAfgMQAggMAEACIgYA8QgJAmAPA6QAPA7ADAGIgvAUQgDgFgZg5g");
	this.shape.setTransform(4.6,12.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,9.4,24.4);


(lib.body = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AFZAtQl5CmABgFQhZggiCg3QiBg3AvgWQAZgMAmgnQAogqAPggIhah6QBYARAdAmQAeAmAegRQAegSAwgYQBAghBUAEQgaAmAOArQAPAsAwAgQAxAgCSA4g");
	this.shape.setTransform(-48,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDB462").s().p("AgfDOQhZggiCg3QiBg3AvgWQAZgMAmgnQAogqAPggIhah6QBYARAdAmQAeAmAegRQAegSAwgYQBAghBUAEQgaAmAPArQAOAsAxAgQAwAgCSA4QlvChgIAAIgBAAg");
	this.shape_1.setTransform(-48,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CFA4").s().p("AlwEjQiThJCMiUQAvglBAgLQA6gLBBgBQBBgCAggHQBXgUBtgmQBtgmBAhEQA1hEAJg4QAJg5gDgDQBABQgPB+QgPB9gwBPQhVB6jYBZQjXBagngUQgKAEgPAAQg1AAhyg5g");
	this.shape_2.setTransform(-4.2,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C98F55").ss(1,1,1).p("AEbmBQB6AEAlBXQAkBYgSBuQgSBsgrBHQg8BchcAuQhcAuhtA1QiBBHhqgFQhqgEhuhbQhYgwAohvQAnhvBKg8QBJg9ArgWQArgVAzgRQBLggBBgvQBQgyBQgzQAQgMAYgQQAZgRAUgBQAOACAOgBg");
	this.shape_3.setTransform(-5.7,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEDBB1").s().p("Ai9GCQhqgEhuhbQhYgwAohvQAnhvBKg8QBJg9ArgWQArgVAzgRQBLggBBgvICghlIAogcQAZgRAUgBQAOACAOgBQB6AEAlBXQAkBYgSBuQgSBsgrBHQg8BchcAuIjJBjQh5BDhlAAIgNgBg");
	this.shape_4.setTransform(-5.7,7.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.6,-32.6,125.6,79.4);


(lib.ship2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E0728").s().p("AgvAiQiOgNiJg8QAPAGBvAdQB2AdB8ACQB3gGBRgcQBSgeADgEIgiBFQgFADhhAIQgmADgsAAQhHAAhVgIg");
	this.shape.setTransform(3.2,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8E0728").ss(1,1,1).p("AF8g+Ig4BzQgEAChiAJQhiAIiMgNQiPgNiKg9QgDAChPg1QAEAABcACQBcADCEACQCCADB6AAQB7gBBAgFg");
	this.shape_1.setTransform(0,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD0027").s().p("AgQA7QiPgNiKg9QgDAChPg1IBgACIDgAFQCCADB6AAQB7gBBAgFIg4BzQgEAChiAJQgmADguAAQhGAAhUgIg");
	this.shape_2.setTransform(0,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8E0728").ss(1,1,1).p("AjLAMQAEACBAAAQBAABBKgNQBKgLAngmQAGACAmAdQAnAbAFAgQgFAAhRAEQhQADhdgHQhggFg0gag");
	this.shape_3.setTransform(-17.7,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#910224").s().p("Ag4AsQhfgGgzgaQADABBAABQBAABBKgNQBKgLAnglQAFACAnAcQAnAbAFAgQgGABhPACIg4ABQg5AAg+gDg");
	this.shape_4.setTransform(-17.7,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#8E0728").ss(1,1,1).p("AggAbQACgCAOgWQAOgTADgUQACgBAMAAQAMgBAGAJQgBADgGAaQgGAZgIAKQAAAJgsgRg");
	this.shape_5.setTransform(14.7,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD0027").s().p("AggAbIAQgYQAOgTADgUIAOgBQAMgBAGAJIgHAdQgGAZgIAKQAAADgFAAQgIAAgfgLg");
	this.shape_6.setTransform(14.7,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8E0728").ss(1,1,1).p("AAdgDIgMAdIgtgFIAagvg");
	this.shape_7.setTransform(33.3,-4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BD0027").s().p("AgcAVIAaguIAfAWIgMAeg");
	this.shape_8.setTransform(33.3,-4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8E0728").ss(1,1,1).p("ACOgNQhrgBh0gBQh2gBgnACIgSARIH4AOIAJgcQgHAAhsgCg");
	this.shape_9.setTransform(7.9,-2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC0CF").s().p("AkAADIATgRQAngCB1ABIDfACIBzACIgJAcg");
	this.shape_10.setTransform(7.9,-2.5);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.1,-10.8,78.2,21.7);


(lib.Tubshadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#678233").s().p("Am4F9Qj+gIj1hMQhVgZhnglQhnglhSg+QhRg+gWhiQgLhDAbguQAxhOBogiQBpgjBXgQQFYhJFkgFQFigFFeAJQDmgBDogGQDogFDjArQBzAbAaBIQAaBIhKBXQhVBZhtA1QhtA2hzApQjLBOjlA5QjlA4jbAUQjDATjHAAQg4AAg4gBg");
	this.shape.setTransform(141.8,38.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,283.8,76.6);


(lib.Carpet2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF981D").s().p("AtDDYIYcoNIBrA9I5SIug");
	this.shape.setTransform(83.7,31);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,167.4,62);


(lib.Carpet = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF981D").s().p("AukEOIawp4ICZBKI8TKLg");
	this.shape.setTransform(93.3,36.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,186.7,72.7);


(lib.bathup = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGQgNAFgEgCQABgMgCgFIAPgPQAXASgBAdQgDgBgQgRg");
	this.shape.setTransform(-9.6,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAIQgfgRgbASQAAgRAIgDQAEgCARAEIAPgPIBIAdIABATIgLABQgVAAgbgRg");
	this.shape_1.setTransform(-13.6,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAqQACghgugeQAEgHAEgBIAMgCIAKgKQARACAHAIQgNAPAJATQANAgAAAHQgHgCgMACg");
	this.shape_2.setTransform(-3.9,-8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzApQgHgFAFgPQAOgmAsgJQgDgEgDgKQANAAATAEIAFgFQASAKACAGQgbAGgMgBIgHATQgggKgZAXQAHAFAQAPQgOAKgIAAQgDAAgCgBg");
	this.shape_3.setTransform(-21.3,-6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYgDQAIgLAIACQAGABALAIIgEgKQANAHAHAGIgHAOIgDAAQgXAAgQgRg");
	this.shape_4.setTransform(8.4,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAFQgBgmAmALIgKAAQAIACAQAJQAFAUgFAQQgXgPgcgFg");
	this.shape_5.setTransform(0.8,-20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4FB4E0").ss(1,1,1).p("AAiAmQAaALAegQQAfgRgTgcQAWAUAcABQAZACATgMQATgPgBgUQAAgWgbgTQAXACAJgQQAHgOgGgUQgGgTgNgJQgOgKgNALQAfgbgdgVQgYgRgWAOQgBABgCACQgCACgDACQAMgggQgYQgNgVgagFQgbgFgRARQgUAVAEAqQgNgggXgDQgVgDgVARQgUAQgEAVQgDAWAUAMQgYgNglADQgtADAAAgQgyAOABAvQAAAvA1AGQgNATAPAcQARAeAZgIQgRAVAbAVQAZASASgJQgYAOgGAXQgHAbAXATQgdAgAVAbQASAYAqAGQAoAHAUgSQAZgWgZgtQgFgJgjg3QAegRAVgaQAfglgjgSg");
	this.shape_6.setTransform(-7.3,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CAEAF9").s().p("AghEWQgqgGgSgYQgVgbAdggQgXgTAHgbQAGgXAYgOQgSAJgZgSQgbgVARgVQgZAIgRgeQgPgcANgTQg1gGAAgvQgBgvAygOQAAggAtgDQAlgDAYANQgUgMADgWQAEgVAUgQQAVgRAVADQAXADANAgQgEgqAUgVQARgRAbAFQAaAFANAVQAQAYgMAgIAFgEIADgDQAWgOAYARQAdAVgfAbQANgLAOAKQANAJAGATQAGAUgHAOQgJAQgXgCQAbATAAAWQABAUgTAPQgTAMgZgCQgcgBgWgUQATAcgfARQgeAQgagLQAjASgfAlQgVAageARIAoBAQAZAtgZAWQgPANgZAAQgJAAgLgCg");
	this.shape_7.setTransform(-7.3,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#938C07").s().p("AhlAIQAHgPBegKQBcgGAKAQQgHAQhdAJQgaACgUAAQgyAAgHgMg");
	this.shape_8.setTransform(-162,-94.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6C110").s().p("AgQgjQAdABAEgDQgMAPACAcQADAbABAFg");
	this.shape_9.setTransform(-168.9,-84.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C6C110").s().p("AgVBgQADAAAQgVQAPgVgCgzQgQhdgKAAIAlgGQgHAHgEAeIAIBCQAFAlgPAXQgSAcgGABIgEABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAg");
	this.shape_10.setTransform(-154.2,-80.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6C110").s().p("AhOAhIBKgLQBAgLADgLQgLgNgggJIgigLQAHAAAqAJQAsAIABAPQgLANg1ALQgtALgnAAIgKgBg");
	this.shape_11.setTransform(-156.3,-94.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D6D6").s().p("AAGgiIAAA/QgBACgKAEQADgIAIg9g");
	this.shape_12.setTransform(-157.3,-63.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D0D6D6").s().p("AgGAKQAIgJgKgQQAGAAALAIQANAGgiARIAGgGg");
	this.shape_13.setTransform(-148,-46.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D0D6D6").s().p("AARgSIgQAIQgLAFgRgFQAOgCAngWIACBFg");
	this.shape_14.setTransform(-155.8,-54.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B8C8C").s().p("AgdgDQA1gjAbAEQAVAMAKAVQAKAUAAADIgPABQAAgCgKgSQgKgQgSgHQgZgBgxAZQgzAbgFAEQAGgFA4ghg");
	this.shape_15.setTransform(-143.2,-61.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#848000").s().p("AgfA5QgSgogEgnQgBhKAxAAQAvgIALBJQADAngMArQgMAqgWAFQgWgBgTgog");
	this.shape_16.setTransform(-161.2,-80.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#848000").s().p("AgaAUQgLgzANgbQAQgTAPABQASABACABIAEA6QABABgEAWQgEAYgWAeQgFAJgJAIQgDgGgLg0g");
	this.shape_17.setTransform(-147.9,-81.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#848000").s().p("AAHBJQgdgbgIgbQgHgYABgCIgGhJQADgEAdgFQAagGANAjQAKAsADAyIABA5QgWgIgOgKg");
	this.shape_18.setTransform(-173.8,-79.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#848000").ss(1,1,1).p("AC1ACQABACgEAaQgEAagZAgQgqAzhaANQhbAEgwgkQgjgdgIgdQgIgcACgCIgJhqQgBgEApgeQApgfBfgLQBbgEArAYQAqAXAAAEg");
	this.shape_19.setTransform(-161.5,-84);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A3A300").s().p("Ah6B4QgjgdgIgdQgIgcACgCIgJhqQgBgEApgeQApgfBfgLQBbgEArAYQAqAXAAAEIAJBpQABACgEAaQgEAagZAgQgqAzhaANIgSAAQhOAAgrggg");
	this.shape_20.setTransform(-161.5,-84);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8B8C8C").s().p("AgTAuIgIheIA0gEIADAnIgPAFQgNADgHgDIgDA9QgJgGAAgBg");
	this.shape_21.setTransform(-159.6,-65.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#656868").ss(1,1,1).p("AAiAtQAHAFgjALQgggEAAgHIgJhpIA8gFg");
	this.shape_22.setTransform(-159.2,-65.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgaAyIgJhpIA8gFIAJBoQAHAFgjAMQgggEAAgHg");
	this.shape_23.setTransform(-159.2,-65.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8B8C8C").s().p("AgTBaQgogOgCgGIgKiCQBMgtArASQACACgDAUQgBASgZAMQg8AKgKgFIAFBXQACAGAkAKQAhAKAsgsIABAVQgpAigfAAQgKAAgJgEg");
	this.shape_24.setTransform(-158.8,-54.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#656868").ss(1,1,1).p("AB7h/QgQABgyAhQgxAigXAGQgBgFgtgIQgtgIhBAoIAMCJQABAGAqAPQAqAQA6gvIgJhnQAGgEAwgcQAzgaAaAGQAlAigEAIQABABAPgCQAOgCACgSQgCgEgRgmQgRgkgMgIg");
	this.shape_25.setTransform(-149.4,-57);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("Ah0B8QgqgPgBgGIgLiJQBBgoAsAIQAtAIABAFQAXgGAxgiQAyghARgBQAMAIAQAkIATAqQgCASgOACQgOACgCgBQAEgIgkgiQgbgGgzAaQgwAcgGAEIAJBnQgsAjgiAAQgMAAgKgEg");
	this.shape_26.setTransform(-149.4,-57);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#656868").ss(1,1,1).p("ACAgJQABARgjAPQgkAQg3AGQg1AEglgKQgmgKgDgTQAAgRAjgQQAkgPA3gFQA1gFAlAKQAmAJACAUg");
	this.shape_27.setTransform(-157.7,-45.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhXAnQgmgKgDgTQAAgRAjgQQAkgPA3gFQA1gFAlAKQAmAJACAUQABARgjAPQgkAQg3AGIgdABQgjAAgagHg");
	this.shape_28.setTransform(-157.7,-45.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#656868").ss(1,1,1).p("ACAgJQABARgjAPQgkAQg3AGQg1AEglgKQgmgKgDgTQAAgRAjgQQAkgPA3gFQA1gFAlAKQAmAJACAUg");
	this.shape_29.setTransform(-157.6,-43.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#777776").s().p("AhXAnQgmgKgDgTQAAgRAjgQQAkgPA3gFQA1gFAlAKQAmAJACAUQABARgjAPQgkAQg3AGIgdABQgjAAgagHg");
	this.shape_30.setTransform(-157.6,-43.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7DE7FF").s().p("AhQgWQBRgdBKAEQBLAEgDA1IAJgjQAMAJAKADQALAEgHAaQgwARgqgPQgqgSgygBQguAAgvAQQgvASgrAOQAVgrBSgbg");
	this.shape_31.setTransform(134.5,-18.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#59CBEF").s().p("Ak2DwQCbhNB2h+QCDiXAbhHQAdhHgGABICmgaQADAFguBgQgtBhh5CAQh4CCjgBrg");
	this.shape_32.setTransform(108.2,37);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#59CBEF").s().p("AiHA2QCngnDShoIBCArQjrBzl8AVQAegECOggg");
	this.shape_33.setTransform(50.9,71.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0877AF").ss(1,1,1).p("AhRgeQAFAEAoAvQAlAyAFAlQAEAFAfADQAfACAJgwQAEgJgPhGQgNhIg7gi");
	this.shape_34.setTransform(88.7,79.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1795E2").s().p("AApB0QgfgDgEgFQgFglglgyQgogvgFgEIBPhVQA7AiANBIQAPBGgEAJQgIAugdAAIgDAAg");
	this.shape_35.setTransform(88.7,79.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0877AF").ss(1,1,1).p("AB+gYQgBAEAAAFQgPAkgyARQgxASghANQgzAUghgWQghgXAYg9QATgjA8gPQA5gQA1AIQA1AKgBApg");
	this.shape_36.setTransform(100.8,91.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#118CB7").s().p("AhqBDQghgXAYg9QATgjA8gPQA5gQA1AIQA1AKgBApIgBAJQgPAkgyARIhSAfQgYAJgVAAQgWAAgRgLg");
	this.shape_37.setTransform(100.8,91.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0877AF").ss(1,1,1).p("ABKgvQgFAFgfA1QgfA3ABAmQgDAGgcAHQgeAIgRguQgEgIABhIQABhJA3gs");
	this.shape_38.setTransform(-80.1,78);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#118CB7").s().p("AhGBPQgEgIABhIQABhJA3gsIBbBHQgFAFgfA1QgfA3ABAmQgDAGgcAHIgIACQgYAAgPgog");
	this.shape_39.setTransform(-80.1,78);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0877AF").ss(1,1,1).p("Ah/AAQABADACAFQAVAjAzAIQA0AKAiAHQA2ALAcgbQAdgcgig4QgYgfg9gGQg8gGgzASQgyASAIAng");
	this.shape_40.setTransform(-90.6,90.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#118CB7").s().p("AAiBEIhWgRQgzgIgVgjIgDgIQgIgnAygSQAzgSA8AGQA9AGAYAfQAiA4gdAcQgUATggAAQgOAAgQgDg");
	this.shape_41.setTransform(-90.6,90.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#48C7E5").s().p("AgsE2QjugtkMhEQkMhFjPg4QjQg4g4gIQhogHhgATQhgASgGADQADADgOAJQgPAJhHgVQhZgiAAhZQABhaA5hRQA5hSBTgHQg0CYA9A8QA+A9B2AMQB1AMB0AGQDpAaDdA7QDcA+DlAsQC+AgDHANQDKAODAgHQCrgMCdg6QCdg6CogbQBxgJB9gDQB9gDA+gyQA9g0hNicQAXAcA+AYQA9AYAeA/QAaBXgoAsQgnAtgzAOQgzAQgFgCQgVgLgugFQgugGhoAJQhQAIjHAvImnBjQjgA1iaAbQgeADgmAAQhuAAiwghg");
	this.shape_42.setTransform(-7.5,-10.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7DE7FF").s().p("AIvCFQhDgChHAAQhIAAgegDQjHgji+hAIhMgYIiOglQiBgkhtgRQhtgQgDAiQgEhSBmABQBmAACRArQCSArB6AuQB5ArAjALQBGAMBmAFQBmAFBeARQBeAUAuA0QgOgMhCgEg");
	this.shape_43.setTransform(-101,-13.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#00A0C6").ss(1,1,1).p("AGdADQkFBCkhgsQkjg5kFhqQkFhrjZhJQjZhKidAmQiaAyguBdQgvBdAWBTQAWBRA1AUQBHAVAOgJQAPgJgEgDQAHgDBggSQBggTBoAHQA4AHDPA5QDPA4EMBFQENBEDtAtQDtAsB1gPQCagaDgg1QDhg1DGgvQDHguBQgJQBpgJAuAGQAtAGAWALQAFABAzgPQAygOAogtQAogtgbhWQg5iJixhAQixhAipAoQhsAkjJBeQjIBdkFBBg");
	this.shape_44.setTransform(-7.2,-13.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#51CEF4").s().p("AgwFPQjtgtkNhEQkMhFjPg4QjPg5g4gHQhogHhgATQhgASgHADQAEADgPAJQgOAJhHgVQg1gUgWhRQgWhTAvhdQAuhdCagyQCdgmDZBKQDZBJEFBrQEFBqEjA5QEhAsEFhCQEFhBDIhdQDJheBsgkQCpgoCxBAQCxBAA5CJQAbBWgoAtQgoAtgyAOQgzAPgFgBQgWgLgtgGQgugGhpAJQhQAJjHAuImnBkQjgA1iaAaQgeAEgmAAQhuAAiwghg");
	this.shape_45.setTransform(-7.2,-13.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#118CB7").s().p("ApOGzQlhhnjNiWQjAiVhXiYQhXicgVhqQgWhqADgFQD1hUD+ArQDQAhDDBMQBGAcBGAgQBGAfBJARQASADATACQHaA0Hdg1QDjgZDhgjQAngJB6giQB6giBpAAQBqAAgLBbQgHAkgTAFQgSAFgfABQj7AgjyBRQjyBPj9AcQnTAfnBhgQnEhhm+iKQgIgFgiAFQgjAHAnBVQAoBWDVDlQCrCxDYBrQDWBrDKA1QDKA2CBATQBoAOAZACQmLgLlehng");
	this.shape_46.setTransform(-7.6,37.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0877AF").ss(1,1,1).p("AVUnNQioAbkkBiQjHBDj1AZQj1AYjggRQjigQiLg3QiIg8jBhJQjAhJjcgbQjdgbjdBMQgDAFAVBqQAWBqBWCbQBXCaDACUQDfCiGGBrQGGBqGwgJQGxgKFii6QAFgBBZhCQBYhCBrhzQBshyA7iXQA9iYg0isQgDgEioAcg");
	this.shape_47.setTransform(-7.4,37.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1795E2").s().p("AobHDQmGhrjfihQjAiVhXiaQhWibgWhqQgVhqADgFQDdhMDdAbQDcAbDABJQDBBKCIA7QCLA3DiAQQDgARD1gYQD1gZDHhDQEkhiCogbQCogcADAEQA0Csg9CYQg7CXhsByQhrB0hYBBQhZBCgFABQliC6mxAKIhHABQmJAAlmhig");
	this.shape_48.setTransform(-7.4,37.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#0877AF").ss(1,1,1).p("AA+goQgEAFgaAsQgaAvABAhQgDADgYAHQgZAHgOgoQgEgGACg9QAAg+Avgk");
	this.shape_49.setTransform(-96.3,65.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#118CB7").s().p("Ag7BCQgEgGACg9QAAg+AvgkIBMA7QgEAFgaAsQgaAvABAhQgDADgYAHIgHABQgUAAgMgig");
	this.shape_50.setTransform(-96.3,65.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#0877AF").ss(1,1,1).p("AhsAAQABADACAEQARAdAsAIQAsAIAcAFQAuAKAYgXQAYgXgcgvQgVgag0gGQgygFgrAPQgqAQAGAgg");
	this.shape_51.setTransform(-105,75.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#118CB7").s().p("AAcA5IhIgNQgsgIgRgdIgDgHQgGggAqgQQArgPAyAFQA0AGAVAaQAcAvgYAXQgRAQgbAAQgMAAgOgDg");
	this.shape_52.setTransform(-105,75.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AABgdIAUAQIABAVQgLADgLgFQgIAPgMAJQgEgjAZgYg");
	this.shape_53.setTransform(163.9,-0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhEAgIgBgVQAqgWApgVIAUARQAggVAFAnQgtgVgZAZQgVAagoAAIgIgBg");
	this.shape_54.setTransform(166.8,-23.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgXAEQAKgTgTgVQALgNATgBIALAKQARgDAJANQgtAagCA1IgWACQABgbAKgUg");
	this.shape_55.setTransform(154.1,-35.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAhAnIAagaQghgaglANQgGgIgFgMIgvgCQAFgPARgGIAHAGQATgHAVgCQgCAMgFAGQA6ANAPAlQAKAZgQAAQgKAAgRgIg");
	this.shape_56.setTransform(175,-35.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgdACQAKgMANgGIgFAMQAVgXAUAUQgTAXgeACIgKgQg");
	this.shape_57.setTransform(139.9,-26.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgfgNIAbgPIgMABQAsgQAFAtQghAIgbAWQgHgXADgWg");
	this.shape_58.setTransform(147.3,-49.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#4FB4E0").ss(1,1,1).p("AiajjQgXgzAggeQAfgdAnALQAnAKACBIQAkhLA5AqQA4AqgrAsQAbgRAvgDQAwgCAJAoQA9ARAEAzQAFAyhAASQARAagPAgQgOAhghgDIAAAAQgCgBACABIAAAAQAUAbgbAXQgcAYgagKQAfAPALAdQAMAcgaAbQAvA1gxAjQgxAkg5gKQg2gJAchQQATgpAXgoQgcgLglgjQgngiAmggQgfAOgkgOQgkgOAQgnQg7A1g0ghQg0gfA4g6Qg5gBANg1QAMg1AnAQQgjghAcgYQAdgYAlAYQgFgEgGgEACDDWIAAAAQgEABAEAAg");
	this.shape_59.setTransform(158.4,-22.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CAEAF9").s().p("AAXFIQg2gJAchQQATgpAXgoQgcgLglgjQgngiAmggQgfAOgkgOQgkgOAQgnQg7A1g0ghQg0gfA4g6Qg5gBANg1QAMg1AnAQQgjghAcgYQAdgYAlAYIgLgIIAMAFQgXgzAggeQAfgdAnALQAnAKACBIQAkhLA5AqQA4AqgrAsQAbgRAvgDQAwgCAJAoQA9ARAEAzQAFAyhAASQARAagPAgQgOAhghgDIAAAAQgCgBACABIAAAAIAAAAQAUAbgbAXQgcAYgagKQAfAPALAdQAMAcgaAbQAvA1gxAjQgnAcgsAAQgLAAgMgCgACCDXIABAAIAAgBIAAAAIgBAAQgCABACAAgACCDWIABAAIAAAAIAAABIgBAAIgBAAIABgBgACDDWgACkAzgACkAzIAAAAQgCgBACABIAAAAg");
	this.shape_60.setTransform(158.4,-22.4);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-185.6,-100.2,372,200.5);


(lib.BathTub = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGQgNAFgEgCQABgMgCgFIAPgPQAXASgBAdQgDgBgQgRg");
	this.shape.setTransform(-9.6,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAIQgfgRgbASQAAgRAIgDQAEgCARAEIAPgPIBIAdIABATIgLABQgVAAgbgRg");
	this.shape_1.setTransform(-13.6,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAqQACghgugeQAEgHAEgBIAMgCIAKgKQARACAHAIQgNAPAJATQANAgAAAHQgHgCgMACg");
	this.shape_2.setTransform(-3.9,-8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzApQgHgFAFgPQAOgmAsgJQgDgEgDgKQANAAATAEIAFgFQASAKACAGQgbAGgMgBIgHATQgggKgZAXQAHAFAQAPQgOAKgIAAQgDAAgCgBg");
	this.shape_3.setTransform(-21.3,-6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYgDQAIgLAIACQAGABALAIIgEgKQANAHAHAGIgHAOIgDAAQgXAAgQgRg");
	this.shape_4.setTransform(8.4,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAFQgBgmAmALIgKAAQAIACAQAJQAFAUgFAQQgXgPgcgFg");
	this.shape_5.setTransform(0.8,-20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4FB4E0").ss(1,1,1).p("AAiAmQAaALAegQQAfgRgTgcQAWAUAcABQAZACATgMQATgPgBgUQAAgWgbgTQAXACAJgQQAHgOgGgUQgGgTgNgJQgOgKgNALQAfgbgdgVQgYgRgWAOQgBABgCACQgCACgDACQAMgggQgYQgNgVgagFQgbgFgRARQgUAVAEAqQgNgggXgDQgVgDgVARQgUAQgEAVQgDAWAUAMQgYgNglADQgtADAAAgQgyAOABAvQAAAvA1AGQgNATAPAcQARAeAZgIQgRAVAbAVQAZASASgJQgYAOgGAXQgHAbAXATQgdAgAVAbQASAYAqAGQAoAHAUgSQAZgWgZgtQgFgJgjg3QAegRAVgaQAfglgjgSg");
	this.shape_6.setTransform(-7.3,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CAEAF9").s().p("AghEWQgqgGgSgYQgVgbAdggQgXgTAHgbQAGgXAYgOQgSAJgZgSQgbgVARgVQgZAIgRgeQgPgcANgTQg1gGAAgvQgBgvAygOQAAggAtgDQAlgDAYANQgUgMADgWQAEgVAUgQQAVgRAVADQAXADANAgQgEgqAUgVQARgRAbAFQAaAFANAVQAQAYgMAgIAFgEIADgDQAWgOAYARQAdAVgfAbQANgLAOAKQANAJAGATQAGAUgHAOQgJAQgXgCQAbATAAAWQABAUgTAPQgTAMgZgCQgcgBgWgUQATAcgfARQgeAQgagLQAjASgfAlQgVAageARIAoBAQAZAtgZAWQgPANgZAAQgJAAgLgCg");
	this.shape_7.setTransform(-7.3,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#938C07").s().p("AhlAIQAHgPBegKQBcgGAKAQQgHAQhdAJQgaACgUAAQgyAAgHgMg");
	this.shape_8.setTransform(-162,-94.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6C110").s().p("AgQgjQAdABAEgDQgMAPACAcQADAbABAFg");
	this.shape_9.setTransform(-168.9,-84.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C6C110").s().p("AgVBgQADAAAQgVQAPgVgCgzQgQhdgKAAIAlgGQgHAHgEAeIAIBCQAFAlgPAXQgSAcgGABIgEABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAg");
	this.shape_10.setTransform(-154.2,-80.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6C110").s().p("AhOAhIBKgLQBAgLADgLQgLgNgggJIgigLQAHAAAqAJQAsAIABAPQgLANg1ALQgtALgnAAIgKgBg");
	this.shape_11.setTransform(-156.3,-94.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D6D6").s().p("AAGgiIAAA/QgBACgKAEQADgIAIg9g");
	this.shape_12.setTransform(-157.3,-63.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D0D6D6").s().p("AgGAKQAIgJgKgQQAGAAALAIQANAGgiARIAGgGg");
	this.shape_13.setTransform(-148,-46.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D0D6D6").s().p("AARgSIgQAIQgLAFgRgFQAOgCAngWIACBFg");
	this.shape_14.setTransform(-155.8,-54.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B8C8C").s().p("AgdgDQA1gjAbAEQAVAMAKAVQAKAUAAADIgPABQAAgCgKgSQgKgQgSgHQgZgBgxAZQgzAbgFAEQAGgFA4ghg");
	this.shape_15.setTransform(-143.2,-61.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#848000").s().p("AgfA5QgSgogEgnQgBhKAxAAQAvgIALBJQADAngMArQgMAqgWAFQgWgBgTgog");
	this.shape_16.setTransform(-161.2,-80.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#848000").s().p("AgaAUQgLgzANgbQAQgTAPABQASABACABIAEA6QABABgEAWQgEAYgWAeQgFAJgJAIQgDgGgLg0g");
	this.shape_17.setTransform(-147.9,-81.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#848000").s().p("AAHBJQgdgbgIgbQgHgYABgCIgGhJQADgEAdgFQAagGANAjQAKAsADAyIABA5QgWgIgOgKg");
	this.shape_18.setTransform(-173.8,-79.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#848000").ss(1,1,1).p("AC1ACQABACgEAaQgEAagZAgQgqAzhaANQhbAEgwgkQgjgdgIgdQgIgcACgCIgJhqQgBgEApgeQApgfBfgLQBbgEArAYQAqAXAAAEg");
	this.shape_19.setTransform(-161.5,-84);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A3A300").s().p("Ah6B4QgjgdgIgdQgIgcACgCIgJhqQgBgEApgeQApgfBfgLQBbgEArAYQAqAXAAAEIAJBpQABACgEAaQgEAagZAgQgqAzhaANIgSAAQhOAAgrggg");
	this.shape_20.setTransform(-161.5,-84);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8B8C8C").s().p("AgTAuIgIheIA0gEIADAnIgPAFQgNADgHgDIgDA9QgJgGAAgBg");
	this.shape_21.setTransform(-159.6,-65.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#656868").ss(1,1,1).p("AAiAtQAHAFgjALQgggEAAgHIgJhpIA8gFg");
	this.shape_22.setTransform(-159.2,-65.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgaAyIgJhpIA8gFIAJBoQAHAFgjAMQgggEAAgHg");
	this.shape_23.setTransform(-159.2,-65.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8B8C8C").s().p("AgTBaQgogOgCgGIgKiCQBMgtArASQACACgDAUQgBASgZAMQg8AKgKgFIAFBXQACAGAkAKQAhAKAsgsIABAVQgpAigfAAQgKAAgJgEg");
	this.shape_24.setTransform(-158.8,-54.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#656868").ss(1,1,1).p("AB7h/QgQABgyAhQgxAigXAGQgBgFgtgIQgtgIhBAoIAMCJQABAGAqAPQAqAQA6gvIgJhnQAGgEAwgcQAzgaAaAGQAlAigEAIQABABAPgCQAOgCACgSQgCgEgRgmQgRgkgMgIg");
	this.shape_25.setTransform(-149.4,-57);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("Ah0B8QgqgPgBgGIgLiJQBBgoAsAIQAtAIABAFQAXgGAxgiQAyghARgBQAMAIAQAkIATAqQgCASgOACQgOACgCgBQAEgIgkgiQgbgGgzAaQgwAcgGAEIAJBnQgsAjgiAAQgMAAgKgEg");
	this.shape_26.setTransform(-149.4,-57);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#656868").ss(1,1,1).p("ACAgJQABARgjAPQgkAQg3AGQg1AEglgKQgmgKgDgTQAAgRAjgQQAkgPA3gFQA1gFAlAKQAmAJACAUg");
	this.shape_27.setTransform(-157.7,-45.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhXAnQgmgKgDgTQAAgRAjgQQAkgPA3gFQA1gFAlAKQAmAJACAUQABARgjAPQgkAQg3AGIgdABQgjAAgagHg");
	this.shape_28.setTransform(-157.7,-45.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#656868").ss(1,1,1).p("ACAgJQABARgjAPQgkAQg3AGQg1AEglgKQgmgKgDgTQAAgRAjgQQAkgPA3gFQA1gFAlAKQAmAJACAUg");
	this.shape_29.setTransform(-157.6,-43.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#777776").s().p("AhXAnQgmgKgDgTQAAgRAjgQQAkgPA3gFQA1gFAlAKQAmAJACAUQABARgjAPQgkAQg3AGIgdABQgjAAgagHg");
	this.shape_30.setTransform(-157.6,-43.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7DE7FF").s().p("AhQgWQBRgdBKAEQBLAEgDA1IAJgjQAMAJAKADQALAEgHAaQgwARgqgPQgqgSgygBQguAAgvAQQgvASgrAOQAVgrBSgbg");
	this.shape_31.setTransform(134.5,-18.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#59CBEF").s().p("Ak2DwQCbhNB2h+QCDiXAbhHQAdhHgGABICmgaQADAFguBgQgtBhh5CAQh4CCjgBrg");
	this.shape_32.setTransform(108.2,37);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#59CBEF").s().p("AiHA2QCngnDShoIBCArQjrBzl8AVQAegECOggg");
	this.shape_33.setTransform(50.9,71.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0877AF").ss(1,1,1).p("AhRgeQAFAEAoAvQAlAyAFAlQAEAFAfADQAfACAJgwQAEgJgPhGQgNhIg7gi");
	this.shape_34.setTransform(88.7,79.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1795E2").s().p("AApB0QgfgDgEgFQgFglglgyQgogvgFgEIBPhVQA7AiANBIQAPBGgEAJQgIAugdAAIgDAAg");
	this.shape_35.setTransform(88.7,79.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0877AF").ss(1,1,1).p("AB+gYQgBAEAAAFQgPAkgyARQgxASghANQgzAUghgWQghgXAYg9QATgjA8gPQA5gQA1AIQA1AKgBApg");
	this.shape_36.setTransform(100.8,91.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#118CB7").s().p("AhqBDQghgXAYg9QATgjA8gPQA5gQA1AIQA1AKgBApIgBAJQgPAkgyARIhSAfQgYAJgVAAQgWAAgRgLg");
	this.shape_37.setTransform(100.8,91.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0877AF").ss(1,1,1).p("ABKgvQgFAFgfA1QgfA3ABAmQgDAGgcAHQgeAIgRguQgEgIABhIQABhJA3gs");
	this.shape_38.setTransform(-80.1,78);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#118CB7").s().p("AhGBPQgEgIABhIQABhJA3gsIBbBHQgFAFgfA1QgfA3ABAmQgDAGgcAHIgIACQgYAAgPgog");
	this.shape_39.setTransform(-80.1,78);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0877AF").ss(1,1,1).p("Ah/AAQABADACAFQAVAjAzAIQA0AKAiAHQA2ALAcgbQAdgcgig4QgYgfg9gGQg8gGgzASQgyASAIAng");
	this.shape_40.setTransform(-90.6,90.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#118CB7").s().p("AAiBEIhWgRQgzgIgVgjIgDgIQgIgnAygSQAzgSA8AGQA9AGAYAfQAiA4gdAcQgUATggAAQgOAAgQgDg");
	this.shape_41.setTransform(-90.6,90.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#48C7E5").s().p("AgsE2QjugtkMhEQkMhFjPg4QjQg4g4gIQhogHhgATQhgASgGADQADADgOAJQgPAJhHgVQhZgiAAhZQABhaA5hRQA5hSBTgHQg0CYA9A8QA+A9B2AMQB1AMB0AGQDpAaDdA7QDcA+DlAsQC+AgDHANQDKAODAgHQCrgMCdg6QCdg6CogbQBxgJB9gDQB9gDA+gyQA9g0hNicQAXAcA+AYQA9AYAeA/QAaBXgoAsQgnAtgzAOQgzAQgFgCQgVgLgugFQgugGhoAJQhQAIjHAvImnBjQjgA1iaAbQgeADgmAAQhuAAiwghg");
	this.shape_42.setTransform(-7.5,-10.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7DE7FF").s().p("AIvCFQhDgChHAAQhIAAgegDQjHgji+hAIhMgYIiOglQiBgkhtgRQhtgQgDAiQgEhSBmABQBmAACRArQCSArB6AuQB5ArAjALQBGAMBmAFQBmAFBeARQBeAUAuA0QgOgMhCgEg");
	this.shape_43.setTransform(-101,-13.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#00A0C6").ss(1,1,1).p("AGdADQkFBCkhgsQkjg5kFhqQkFhrjZhJQjZhKidAmQiaAyguBdQgvBdAWBTQAWBRA1AUQBHAVAOgJQAPgJgEgDQAHgDBggSQBggTBoAHQA4AHDPA5QDPA4EMBFQENBEDtAtQDtAsB1gPQCagaDgg1QDhg1DGgvQDHguBQgJQBpgJAuAGQAtAGAWALQAFABAzgPQAygOAogtQAogtgbhWQg5iJixhAQixhAipAoQhsAkjJBeQjIBdkFBBg");
	this.shape_44.setTransform(-7.2,-13.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#51CEF4").s().p("AgwFPQjtgtkNhEQkMhFjPg4QjPg5g4gHQhogHhgATQhgASgHADQAEADgPAJQgOAJhHgVQg1gUgWhRQgWhTAvhdQAuhdCagyQCdgmDZBKQDZBJEFBrQEFBqEjA5QEhAsEFhCQEFhBDIhdQDJheBsgkQCpgoCxBAQCxBAA5CJQAbBWgoAtQgoAtgyAOQgzAPgFgBQgWgLgtgGQgugGhpAJQhQAJjHAuImnBkQjgA1iaAaQgeAEgmAAQhuAAiwghg");
	this.shape_45.setTransform(-7.2,-13.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#118CB7").s().p("ApOGzQlhhnjNiWQjAiVhXiYQhXicgVhqQgWhqADgFQD1hUD+ArQDQAhDDBMQBGAcBGAgQBGAfBJARQASADATACQHaA0Hdg1QDjgZDhgjQAngJB6giQB6giBpAAQBqAAgLBbQgHAkgTAFQgSAFgfABQj7AgjyBRQjyBPj9AcQnTAfnBhgQnEhhm+iKQgIgFgiAFQgjAHAnBVQAoBWDVDlQCrCxDYBrQDWBrDKA1QDKA2CBATQBoAOAZACQmLgLlehng");
	this.shape_46.setTransform(-7.6,37.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0877AF").ss(1,1,1).p("AVUnNQioAbkkBiQjHBDj1AZQj1AYjggRQjigQiLg3QiIg8jBhJQjAhJjcgbQjdgbjdBMQgDAFAVBqQAWBqBWCbQBXCaDACUQDfCiGGBrQGGBqGwgJQGxgKFii6QAFgBBZhCQBYhCBrhzQBshyA7iXQA9iYg0isQgDgEioAcg");
	this.shape_47.setTransform(-7.4,37.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1795E2").s().p("AobHDQmGhrjfihQjAiVhXiaQhWibgWhqQgVhqADgFQDdhMDdAbQDcAbDABJQDBBKCIA7QCLA3DiAQQDgARD1gYQD1gZDHhDQEkhiCogbQCogcADAEQA0Csg9CYQg7CXhsByQhrB0hYBBQhZBCgFABQliC6mxAKIhHABQmJAAlmhig");
	this.shape_48.setTransform(-7.4,37.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#0877AF").ss(1,1,1).p("AA+goQgEAFgaAsQgaAvABAhQgDADgYAHQgZAHgOgoQgEgGACg9QAAg+Avgk");
	this.shape_49.setTransform(-96.3,65.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#118CB7").s().p("Ag7BCQgEgGACg9QAAg+AvgkIBMA7QgEAFgaAsQgaAvABAhQgDADgYAHIgHABQgUAAgMgig");
	this.shape_50.setTransform(-96.3,65.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#0877AF").ss(1,1,1).p("AhsAAQABADACAEQARAdAsAIQAsAIAcAFQAuAKAYgXQAYgXgcgvQgVgag0gGQgygFgrAPQgqAQAGAgg");
	this.shape_51.setTransform(-105,75.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#118CB7").s().p("AAcA5IhIgNQgsgIgRgdIgDgHQgGggAqgQQArgPAyAFQA0AGAVAaQAcAvgYAXQgRAQgbAAQgMAAgOgDg");
	this.shape_52.setTransform(-105,75.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AABgdIAUAQIABAVQgLADgLgFQgIAPgMAJQgEgjAZgYg");
	this.shape_53.setTransform(163.9,-0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhEAgIgBgVQAqgWApgVIAUARQAggVAFAnQgtgVgZAZQgVAagoAAIgIgBg");
	this.shape_54.setTransform(166.8,-23.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgXAEQAKgTgTgVQALgNATgBIALAKQARgDAJANQgtAagCA1IgWACQABgbAKgUg");
	this.shape_55.setTransform(154.1,-35.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAhAnIAagaQghgaglANQgGgIgFgMIgvgCQAFgPARgGIAHAGQATgHAVgCQgCAMgFAGQA6ANAPAlQAKAZgQAAQgKAAgRgIg");
	this.shape_56.setTransform(175,-35.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgdACQAKgMANgGIgFAMQAVgXAUAUQgTAXgeACIgKgQg");
	this.shape_57.setTransform(139.9,-26.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgfgNIAbgPIgMABQAsgQAFAtQghAIgbAWQgHgXADgWg");
	this.shape_58.setTransform(147.3,-49.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#4FB4E0").ss(1,1,1).p("AiajjQgXgzAggeQAfgdAnALQAnAKACBIQAkhLA5AqQA4AqgrAsQAbgRAvgDQAwgCAJAoQA9ARAEAzQAFAyhAASQARAagPAgQgOAhghgDIAAAAQgCgBACABIAAAAQAUAbgbAXQgcAYgagKQAfAPALAdQAMAcgaAbQAvA1gxAjQgxAkg5gKQg2gJAchQQATgpAXgoQgcgLglgjQgngiAmggQgfAOgkgOQgkgOAQgnQg7A1g0ghQg0gfA4g6Qg5gBANg1QAMg1AnAQQgjghAcgYQAdgYAlAYQgFgEgGgEACDDWIAAABQgEAAAEgBg");
	this.shape_59.setTransform(158.4,-22.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CAEAF9").s().p("AAXFIQg2gJAchQQATgpAXgoQgcgLglgjQgngiAmggQgfAOgkgOQgkgOAQgnQg7A1g0ghQg0gfA4g6Qg5gBANg1QAMg1AnAQQgjghAcgYQAdgYAlAYIgLgIIAMAFQgXgzAggeQAfgdAnALQAnAKACBIQAkhLA5AqQA4AqgrAsQAbgRAvgDQAwgCAJAoQA9ARAEAzQAFAyhAASQARAagPAgQgOAhghgDIAAAAIgBgBIAAAAIABABIAAAAQAUAbgbAXQgcAYgagKQAfAPALAdQAMAcgaAbQAvA1gxAjQgnAcgsAAQgLAAgMgCgACBDXIABAAIABAAIAAgBIAAAAIgCABIAAAAgACBDXIACgBIAAAAIAAABIgBAAIgBAAIAAAAgACDDWgACkAzIgBgBIAAAAIABABIAAAAg");
	this.shape_60.setTransform(158.4,-22.4);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-185.6,-100.2,372,200.5);


(lib._splashmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("splashmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._popmp3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("popmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.water1copy();
	this.instance.setTransform(60.8,-25,0.786,0.786,0,0,180);

	this.instance_1 = new lib.water1copy();
	this.instance_1.setTransform(-51.2,-5.8,1,1,0,0,180);

	this.instance_2 = new lib.water1copy();
	this.instance_2.setTransform(-44,-51);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122.5,-48.5,245,97);


(lib.sudsHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,clicked:5});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();
		soapThere = true*/
	}
	this.frame_5 = function() {
		/* soapThere = false*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(64));

	// bubbles
	this.instance = new lib.suds();
	this.instance.setTransform(48.8,18.3,1,1,0,0,0,48.8,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:140.6,y:65.8},20).wait(21).to({x:71.9,y:-52.9},0).to({x:48.8,y:18.3},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,98.6,37.7);


(lib.soapHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"clicked":5});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(52));

	// soap2
	this.instance = new lib.soap2();
	this.instance.setTransform(44.9,21.8,1,1,0,0,0,45.1,21.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:178.3,y:132.1},7).wait(22).to({x:-549.1,y:70.5},0).to({x:-202,y:39.4},11).to({_off:true},1).wait(6));

	// soap
	this.instance_1 = new lib.soap();
	this.instance_1.setTransform(45.1,21.7,1,1,0,0,0,45.1,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},5).wait(40).to({_off:false,x:-201.9,y:39.7},0).to({x:45.1,y:21.7},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,91.2,44.3);


(lib.duckHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"clicked":5});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// duck
	this.instance = new lib.duck();
	this.instance.setTransform(21.2,15.6,1,1,0,0,0,21.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({rotation:60,y:-28.9},3).to({rotation:1860},7).to({scaleX:1,scaleY:1,rotation:1978.1,y:-29.1},2).to({scaleX:1,scaleY:1,rotation:2038.6,x:21.4,y:-14.2},1).to({scaleX:1,scaleY:1,rotation:2160,x:21.2,y:15.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,43.4,32.2);


(lib.brush3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.soapBubbles2();
	this.instance.setTransform(36.1,9.7,0.74,0.74,75,0,0,9.8,14.2);

	this.instance_1 = new lib.soapBubbles1();
	this.instance_1.setTransform(15.9,17.3,0.62,1.022,30,0,0,17.9,12.3);

	this.instance_2 = new lib.brush();
	this.instance_2.setTransform(43.3,25.4,1,1,0,0,0,41.6,18.7);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,86.1,45);


(lib.bubbleAnswerSet = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.BubbleTarget();
	this.instance.setTransform(348.5,251.1,1,1,0,0,0,7.4,7.4);
	this.instance.alpha = 0;

	this.instance_1 = new lib.BubbleTarget();
	this.instance_1.setTransform(153.9,262.1,1,1,0,0,0,7.4,7.4);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.BubbleTarget();
	this.instance_2.setTransform(268.2,37.9,1,1,0,0,0,7.4,7.4);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.BubbleTarget();
	this.instance_3.setTransform(471.1,116.4,1,1,0,0,0,7.4,7.4);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.BubbleTarget();
	this.instance_4.setTransform(428.3,305.3,1,1,0,0,0,7.4,7.4);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.BubbleTarget();
	this.instance_5.setTransform(243.4,303.1,1,1,0,0,0,7.4,7.4);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.BubbleTarget();
	this.instance_6.setTransform(64.4,230.3,1,1,0,0,0,7.4,7.4);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.BubbleTarget();
	this.instance_7.setTransform(64.4,72.1,1,1,0,0,0,7.4,7.4);
	this.instance_7.alpha = 0;

	this.instance_8 = new lib.BubbleTarget();
	this.instance_8.setTransform(194.6,104.3,1,1,0,0,0,7.4,7.4);
	this.instance_8.alpha = 0;

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.1,22.6,422.5,283.2);


(lib.bubble2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bubble("synched",0);
	this.instance.setTransform(0.9,-0.4);
	this.instance.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTACIAQgZQA/ArAugGQAegFANgDQgpAQgrACQgxgBgjgVg");
	this.shape.setTransform(1.6,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsAPQgGgqAJgrQAIgeAPgbQgFAMgGAvQgIA8AwBIQASAWATAQIgRAaQg7gkgQhNg");
	this.shape_1.setTransform(-10.6,1.9);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-21.4,42.9,42);


(lib.bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,pop:85});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();
		answerTextMC.answer = answer;*/
	}
	this.frame_84 = function() {
		/* gotoAndPlay(1);*/
	}
	this.frame_91 = function() {
        this.dispatchEvent('done');
        this.stop();
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84).call(this.frame_84).wait(7).call(this.frame_91).wait(1));

	// Bubble
	this.instance = new lib.bubble2("synched",0);
	this.instance.setTransform(-1.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-1.7,2.7,-2.7,2.2,-4,2.3,-5.7,2.4,-5.8,0.6,-5.8,-1.2,-4.1,-1.6,-2.5,-1.8,-2.1,-2.5,-1.6,-3.3,-1.2,-4.7,-1,-5.4,-0.7,-5.7,-0.4,-6.1,-0.1,-6.1,0.2,-6.1,0.5,-6.1]}},33).to({guide:{path:[0.7,-6,1.8,-5.8,2.3,-4.8,3,-3.5,4.1,-3.3,5.4,-3.3,6,-2.7,6.2,-2.5,6.3,-2.4]}},28).to({guide:{path:[6.3,-2.2,6.5,-1.7,6,-1,5.4,-0.1,4.6,1.5,3.9,2.9,4.8,3.9,5.7,4.9,4.1,5.8,3.5,6.2,3.1,6.4,2.7,6.5,2.6,6.4,2,6.6,1.1,6.5,0.3,6.4,0.2,5.5,0.1,4.7,0,4.3,-0.2,3.8,-0.6,3.3]}},23).to({_off:true},1).wait(7));

	// Bubble pop
	this.instance_1 = new lib.bubble2("synched",0);
	this.instance_1.setTransform(-0.9,0.5,1.218,1.218);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.pecah1("synched",0);
	this.instance_2.setTransform(2.4,-0.7);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.pecah2("synched",0);
	this.instance_3.setTransform(9.3,-8.4);
	this.instance_3.alpha = 0.5;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},85).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},3).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({scaleX:1.25,scaleY:1.25,alpha:0},3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-18.6,42.9,42);


(lib.head7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgfgWQAEAAAbAJQAZAKAHAa");
	this.shape.setTransform(-13.6,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgegXQADgBAbALQAYALAHAa");
	this.shape_1.setTransform(20.4,10);

	this.instance = new lib.Symbol55("synched",0);
	this.instance.setTransform(-45.1,-15.4,1.2,1.2);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Symbol54("synched",0);
	this.instance_1.setTransform(-41.9,-37,1.2,1.2);
	this.instance_1.alpha = 0.57;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C98F55").ss(1,1,1).p("AgPgOQACABANAKQANAJACAJ");
	this.shape_2.setTransform(-24.3,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C98F55").ss(1,1,1).p("AACgKIgCAW");
	this.shape_3.setTransform(-11.3,45.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C98F55").s().p("ABoA8QgGgSgsgjQgsgigogYQgngSgWAGQgWAGgBADQgCgBAGgJQAFgJAkgGQAqABA1AsQA4ArAVAZQAQAUgEAMQgFANgCABg");
	this.shape_4.setTransform(-25.6,38.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhJAEQgNgTAXAJIACABQAiAFAxgLQAzgNAGgDQgRAbg4ANQg2APgHAAQgEgFgOgTg");
	this.shape_5.setTransform(-0.6,-41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFAkQgfgLgQgyIAXgUQgCAEAKAjQALAgArATIgBABQgIAAgdgKg");
	this.shape_6.setTransform(40.5,-26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C98F55").s().p("AgmACQAMgcAagGQAWAAAKAUIAKAVQgBgFgPgNQgQgQgeAZQgSAUAAANQgHgOAHgRg");
	this.shape_7.setTransform(-15.8,24.5);

	this.instance_2 = new lib.Symbol50("synched",0);
	this.instance_2.setTransform(12.5,-0.2,1.2,1.2);
	this.instance_2.alpha = 0.5;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#700817").ss(1,1,1).p("AHuCRQgPAagvA8QgvA8gsA2QgrA0gDAEQABAEgbALQgbALhSghQhRghifiAQABgEgTgYQgTgYgqgEQhQAIiBhMQhDgugqg7Qgqg5AEgcQAFgVAUhRQAUhPAShLQAUhLABgFQAIgEClAdQCmAdDZBvQDbBvCrDuQAIgJgdA5g");
	this.shape_8.setTransform(3.3,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.553,1],90.8,-1.3,0,90.8,-1.3,123.7).s().p("ACgGKQhRghifiAQABgEgTgYQgTgYgqgEQhQAIiBhMQhDgugqg7Qgqg5AEgcIAZhmIAmiaIAVhQQAIgEClAdQCmAdDZBvQDbBvCrDuQAIgJgdA5QgPAagvA8QgvA8gsA2IguA4QABAEgbALQgHADgKAAQgfAAg9gZg");
	this.shape_9.setTransform(3.3,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#91032C").s().p("AjrDhQASAIAcAAQAbABAVACQApAGAZgMQAZgLAdgbQAkgkATgeIAog8QAkg9Aig+IAYgfQAPgUgCgOQgJgagfg8IgkhDQBMBYAcA5QAcA6gCACQgCAGgtBQQgtBShCBUQhCBUg+AKIgIAAQhMAAhkgzg");
	this.shape_10.setTransform(38.9,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8E0728").ss(1,1,1).p("AGoF/QhCBUhAALQhjACiEhPQiDhPhgh5QgJADhmgJQhmgIhXg5QhLhAgSg3QgSg0ADgEQgDgCgGhCQgFhDAmhxQArhsAagjQAZgiACACQgFgLB0ADQB0ACEzCKQEzCdBkCWQBlCTgIAMQgBAGguBSQgtBShCBTg");
	this.shape_11.setTransform(4.2,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BD0027").s().p("AA/GRQiDhPhgh5QgJADhmgJQhmgIhXg5QhLhAgSg3QgSg0ADgEQgDgCgGhCQgFhDAmhxQArhsAagjQAZgiACACQgFgLB0ADQB0ACEzCKQEzCdBkCWQBlCTgIAMQgBAGguBSQgtBShCBTQhCBUhAALIgFAAQhhAAiBhNg");
	this.shape_12.setTransform(4.2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7CFA4").s().p("AhwKRQinggimhnQgygkg5hAQg3hAgegrQgegqAdAaQC2CvBvAlQBvAlCMAZQCSAcBIgeQBJgfgBgGQgBgDgugfQgugghIgmQhIgqg1hCQg1hCgDgGQgFgGgMgTQgMgUA1AkQAsAaBbgIQBcgIBagbQBagbAlgfQAlghA4hVQA5hTAhhvQAghugkhuQguhqhnhFQhohGhagiQhYghgIAAQDTAMC8CmQCyCqAQCZQAPCYhuCgIkMGHQgBAIgoA+QgnA+hLASQgWADgcAAQhMAAh3gWg");
	this.shape_13.setTransform(3.7,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C98F55").ss(1,1,1).p("AKVizQAQCbhvChIkQGMQgBAIgoA/QgoA/hLASQhSAMinggQiogfiphpQimhvgniSQgoiSCBiLQAAgIAch+QAdh+A7iPQA8iPBcg6QCRhRDUAMQDWAMC/CpQCzCsAQCag");
	this.shape_14.setTransform(3.5,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEDBB1").s().p("AhvKZQiogfiphpQimhvgniSQgoiSCBiLQAAgIAch+QAdh+A7iPQA8iPBcg6QCRhRDUAMQDWAMC/CpQCzCsAQCaQAQCbhvChIkQGMQgBAIgoA/QgoA/hLASQgXADgdAAQhNAAh4gXg");
	this.shape_15.setTransform(3.5,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C98F55").s().p("AgsBXQgTgjANgdQANgbAQAEQAbAXADAKQgCgEgRgQQgUgNgNAYQgIAZAMAYQALAYANgBQAPgEAbgmQAcgmgNgnQghhPAAgDQAFAFAaAxQAaAygQAmQgWAmgaAWQgJAJgKAAQgOAAgNgTg");
	this.shape_16.setTransform(-57.5,-8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2C497").s().p("Ag5A+QgmglAeg/QAuhLAtAkQAvAjAGBEIgkA8QgRAEgPAAQgoAAgcgcg");
	this.shape_17.setTransform(-57,-8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C98F55").ss(1,1,1).p("ABxAAQABgDgHgtQgGgtgXgqQgWgqgwAGQhIAZghBkQghBiAnA2QAsArAfANQAdAMACgB");
	this.shape_18.setTransform(-58.5,-8.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEDBB1").s().p("AgQCiQgfgNgsgrQgng2AhhiQAhhkBIgZQAwgGAWAqQAXAqAGAtQAHAtgBADIhiCtIgBAAQgFAAgZgLg");
	this.shape_19.setTransform(-58.5,-8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C98F55").s().p("Ag+BDQgkgIAJghQAJgfAagiQAfgeA2ADQA3AEAGADQgCABhWABQgoAFgYAoQgYAmADARQAEANAbAAQAaACAUgSQARgWgUgMQgWgJgEAAQAJgCAgAQQALAMgTAXQgTAVgiAAIgJAAg");
	this.shape_20.setTransform(42.8,48.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2C497").s().p("AhzA2IBYiQQA8gCA0ATQAzATgiBEQggA0hGATQgTAGgSAAQguAAggglg");
	this.shape_21.setTransform(38.9,48.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C98F55").ss(1,1,1).p("AgmhoQAKgHBQgOQBSgPAZBBQAHBMhPBGQhOBHhAgPQg4gXgYgYQgYgYABgB");
	this.shape_22.setTransform(43.2,48.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEDBB1").s().p("Ag3B/Qg4gXgYgYQgYgYABgBIB4ifQAKgHBQgOQBSgPAZBBQAHBMhPBGQhBA6g2AAQgLAAgMgCg");
	this.shape_23.setTransform(43.2,48.2);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.instance_2,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.8,-69.8,141.7,139.8);


(lib.head6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol55_1("synched",0);
	this.instance.setTransform(-45.1,-15.4,1.2,1.2);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Symbol54_1("synched",0);
	this.instance_1.setTransform(-41.9,-37,1.2,1.2);
	this.instance_1.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C98F55").ss(1,1,1).p("AgPgOQACABANAKQANAJACAJ");
	this.shape.setTransform(-24.3,44.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C98F55").ss(1,1,1).p("AACgKIgCAW");
	this.shape_1.setTransform(-11.3,45.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C98F55").s().p("ABoA8QgGgSgsgjQgsgigogYQgngSgWAGQgWAGgBADQgCgBAGgJQAFgJAkgGQAqABA1AsQA4ArAVAZQAQAUgEAMQgFANgCABg");
	this.shape_2.setTransform(-25.6,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhJAEQgNgTAXAJIACABQAiAFAxgLQAzgNAGgDQgRAbg4ANQg2APgHAAQgEgFgOgTg");
	this.shape_3.setTransform(-0.6,-41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAkQgfgLgQgyIAXgUQgCAEAKAjQALAgArATIgBABQgIAAgdgKg");
	this.shape_4.setTransform(40.5,-26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C98F55").s().p("AgmACQAMgcAagGQAWAAAKAUIAKAVQgBgFgPgNQgQgQgeAZQgSAUAAANQgHgOAHgRg");
	this.shape_5.setTransform(-15.8,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAcQgYgQALgZQAPgYAZALQAYAPgKAZQgLARgRAAQgFAAgIgDg");
	this.shape_6.setTransform(-13.6,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAcQgYgQALgZQAPgYAZALQAZAPgLAZQgLARgRAAQgFAAgIgDg");
	this.shape_7.setTransform(12.8,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDDFF4").s().p("AAMDZQhUghgehPQhQAXhNgxIgqgcQgYgOgMggQgMgfAAgEQAkBIBvAWQA0AHAhgLQAggKABgDQACAJAvA7QAtA6BKAEQBJgFA5g1QA6g0AahPQARhVgthEQgvhDgIgEQALADAKAGQBSAsAYBbQAYBaguBeQgyBehXAjQgpAQgpAAQgtAAgsgUg");
	this.shape_8.setTransform(1.9,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5E99BC").ss(1,1,1).p("AD9ibQhVgnhXAiQgYhbhRgsQhVgohZAkQhYAjgzBfQguBiAYBaQAYBcBTAtQBPAyBTgXQAdBQBWAhQBVAoBZgkQBYgjAzhfQAuhigYhaQgYhchTgtg");
	this.shape_9.setTransform(0.6,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7ECF9").s().p("AAZEoQhWghgdhQQhTAXhPgyQhTgtgYhcQgYhaAuhiQAzhfBYgjQBZgkBVAoQBRAsAYBbQBXgiBVAnQBTAtAYBcQAYBaguBiQgzBfhYAjQgqARgpAAQguAAgtgVg");
	this.shape_10.setTransform(0.6,-0.8);

	this.instance_2 = new lib.Symbol50_1("synched",0);
	this.instance_2.setTransform(12.5,-0.2,1.2,1.2);
	this.instance_2.alpha = 0.5;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#700817").ss(1,1,1).p("AHuCRQgPAagvA8QgvA8gsA2QgrA0gDAEQABAEgbALQgbALhSghQhRghifiAQABgEgTgYQgTgYgqgEQhQAIiBhMQhDgugqg7Qgqg5AEgcQAFgVAUhRQAUhPAShLQAUhLABgFQAIgEClAdQCmAdDZBvQDbBvCrDuQAIgJgdA5g");
	this.shape_11.setTransform(3.3,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.553,1],90.8,-1.3,0,90.8,-1.3,123.7).s().p("ACgGKQhRghifiAQABgEgTgYQgTgYgqgEQhQAIiBhMQhDgugqg7Qgqg5AEgcIAZhmIAmiaIAVhQQAIgEClAdQCmAdDZBvQDbBvCrDuQAIgJgdA5QgPAagvA8QgvA8gsA2IguA4QABAEgbALQgHADgKAAQgfAAg9gZg");
	this.shape_12.setTransform(3.3,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#91032C").s().p("AjrDhQASAIAcAAQAbABAVACQApAGAZgMQAZgLAdgbQAkgkATgeIAog8QAkg9Aig+IAYgfQAPgUgCgOQgJgagfg8IgkhDQBMBYAcA5QAcA6gCACQgCAGgtBQQgtBShCBUQhCBUg+AKIgIAAQhMAAhkgzg");
	this.shape_13.setTransform(38.9,22.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8E0728").ss(1,1,1).p("AGoF/QhCBUhAALQhjACiEhPQiDhPhgh5QgJADhmgJQhmgIhXg5QhLhAgSg3QgSg0ADgEQgDgCgGhCQgFhDAmhxQArhsAagjQAZgiACACQgFgLB0ADQB0ACEzCKQEzCdBkCWQBlCTgIAMQgBAGguBSQgtBShCBTg");
	this.shape_14.setTransform(4.2,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BD0027").s().p("AA/GRQiDhPhgh5QgJADhmgJQhmgIhXg5QhLhAgSg3QgSg0ADgEQgDgCgGhCQgFhDAmhxQArhsAagjQAZgiACACQgFgLB0ADQB0ACEzCKQEzCdBkCWQBlCTgIAMQgBAGguBSQgtBShCBTQhCBUhAALIgFAAQhhAAiBhNg");
	this.shape_15.setTransform(4.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7CFA4").s().p("AhwKRQinggimhnQgygkg5hAQg3hAgegrQgegqAdAaQC2CvBvAlQBvAlCMAZQCSAcBIgeQBJgfgBgGQgBgDgugfQgugghIgmQhIgqg1hCQg1hCgDgGQgFgGgMgTQgMgUA1AkQAsAaBbgIQBcgIBagbQBagbAlgfQAlghA4hVQA5hTAhhvQAghugkhuQguhqhnhFQhohGhagiQhYghgIAAQDTAMC8CmQCyCqAQCZQAPCYhuCgIkMGHQgBAIgoA+QgnA+hLASQgWADgcAAQhMAAh3gWg");
	this.shape_16.setTransform(3.7,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C98F55").ss(1,1,1).p("AKVizQAQCbhvChIkQGMQgBAIgoA/QgoA/hLASQhSAMinggQiogfiphpQimhvgniSQgoiSCBiLQAAgIAch+QAdh+A7iPQA8iPBcg6QCRhRDUAMQDWAMC/CpQCzCsAQCag");
	this.shape_17.setTransform(3.5,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEDBB1").s().p("AhvKZQiogfiphpQimhvgniSQgoiSCBiLQAAgIAch+QAdh+A7iPQA8iPBcg6QCRhRDUAMQDWAMC/CpQCzCsAQCaQAQCbhvChIkQGMQgBAIgoA/QgoA/hLASQgXADgdAAQhNAAh4gXg");
	this.shape_18.setTransform(3.5,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C98F55").s().p("AgsBXQgTgjANgdQANgbAQAEQAbAXADAKQgCgEgRgQQgUgNgNAYQgIAZAMAYQALAYANgBQAPgEAbgmQAcgmgNgnQghhPAAgDQAFAFAaAxQAaAygQAmQgWAmgaAWQgJAJgKAAQgOAAgNgTg");
	this.shape_19.setTransform(-57.5,-8.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2C497").s().p("Ag5A+QgmglAeg/QAuhLAtAkQAvAjAGBEIgkA8QgRAEgPAAQgoAAgcgcg");
	this.shape_20.setTransform(-57,-8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C98F55").ss(1,1,1).p("ABxAAQABgDgHgtQgGgtgXgqQgWgqgwAGQhIAZghBkQghBiAnA2QAsArAfANQAdAMACgB");
	this.shape_21.setTransform(-58.5,-8.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEDBB1").s().p("AgQCiQgfgNgsgrQgng2AhhiQAhhkBIgZQAwgGAWAqQAXAqAGAtQAHAtgBADIhiCtIgBAAQgFAAgZgLg");
	this.shape_22.setTransform(-58.5,-8.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C98F55").s().p("Ag+BDQgkgIAJghQAJgfAagiQAfgeA2ADQA3AEAGADQgCABhWABQgoAFgYAoQgYAmADARQAEANAbAAQAaACAUgSQARgWgUgMQgWgJgEAAQAJgCAgAQQALAMgTAXQgTAVgiAAIgJAAg");
	this.shape_23.setTransform(42.8,48.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2C497").s().p("AhzA2IBYiQQA8gCA0ATQAzATgiBEQggA0hGATQgTAGgSAAQguAAggglg");
	this.shape_24.setTransform(38.9,48.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C98F55").ss(1,1,1).p("AgmhoQAKgHBQgOQBSgPAZBBQAHBMhPBGQhOBHhAgPQg4gXgYgYQgYgYABgB");
	this.shape_25.setTransform(43.2,48.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEDBB1").s().p("Ag3B/Qg4gXgYgYQgYgYABgBIB4ifQAKgHBQgOQBSgPAZBBQAHBMhPBGQhBA6g2AAQgLAAgMgCg");
	this.shape_26.setTransform(43.2,48.2);

	this.addChild(this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.instance_2,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.8,-69.8,141.7,139.8);


(lib.head5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol53("synched",0);
	this.instance.setTransform(-50.9,-24.8,1.2,1.2);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.setTransform(-46.9,-47.6,1.2,1.2);
	this.instance_1.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C98F55").s().p("AhUBCQgtgVAkgvQAlgyAjgMQA5gNAlAOQAkAOABADQgEgDgtgKQgtgLglAPQglAUgZAhQgZAgAOATQAKAMAaACQAaADAcgWQAdgggGgOQgGgRgNgGIADgLQAYARAGAaQgDAXgTAPQgbAagjAAQgQAAgRgFg");
	this.shape.setTransform(43.4,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2C497").s().p("AgdBTQgugFgZgcQgZgcAUgqQAWgpAtgPQAsgNA1AOQA1ANADA4QgGAqgyAZQgrAWgkAAIgJAAg");
	this.shape_1.setTransform(44.5,41.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CFA4").s().p("AguBtQhmgSgmiFQADAHAVAeQAZAjA3AcQA3AcBYgWQBPggAUhCQAVhEgDgJQAgBshOBAQg+AzhMAAQgUAAgUgDg");
	this.shape_2.setTransform(46.3,49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C98F55").ss(1,1,1).p("AiCikQAEgEA8gOQA8gPBIAWQBKAXAuBtQAiBvhTBDQhRBEhogSQhrgRgniQ");
	this.shape_3.setTransform(46.3,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEDBB1").s().p("AgwC5QhrgRgniQIBAi8QAEgEA8gOQA8gPBIAWQBKAXAuBtQAiBvhTBDQhAA2hOAAQgVAAgWgEg");
	this.shape_4.setTransform(46.3,42.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D2D2D").s().p("AhyAFIBNhoQAGABBHArQAAAIgeAnQgcAnAAAIQAJgDAlgjQAmggAJgCIAoAaQgCAHghAlQghAmgCAIIgPARQhRg5g/gmg");
	this.shape_5.setTransform(44.7,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F5151").s().p("AiJAPIBNiKQAKAEBNAtQBQAuAfA0IhkBjQgGgEiphog");
	this.shape_6.setTransform(44.8,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AAmgZQgBADgVAWQgTAUgiAG");
	this.shape_7.setTransform(-20.7,-56.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgehDQgBAGAPAxQAOAvAhAh");
	this.shape_8.setTransform(19.4,-41.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AARAOQACgCgGgMQgGgNgYAB");
	this.shape_9.setTransform(-35.6,-25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgRgjQADACASAVQATATgGAd");
	this.shape_10.setTransform(-1.9,-7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AD723D").s().p("AAyAOQglhNgxgQQgugBgDAOIgBALIgBgGQgBgDAKgWQALgWAiAIQA3AgAhBPQAhBSABAKQgCgLglhOg");
	this.shape_11.setTransform(-55,14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C98F55").s().p("AgeADQgGgeAdgJQAbgCAHAUQAGASgBADQABgCgHgJQgHgMgXgCQgZAEACAZQADAbACAEQgDgEgFgfg");
	this.shape_12.setTransform(-48.5,-11.7);

	this.instance_2 = new lib.Symbol49("synched",0);
	this.instance_2.setTransform(-12.8,-21.6,1.2,1.2);
	this.instance_2.alpha = 0.5;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#700817").ss(1,1,1).p("AG2AkQgKASgoBFQgoBGg+BKQg9BLhHAhQgBAIgoAJQgpAKhMhIQhDhQg7hsQg7hsi2hhQgEAAgdgGQgdgGgOgBICDk4QAEgGBrADQBsACCqBSQCtBRDHDjQAJgBgQAkg");
	this.shape_13.setTransform(-9.8,-10.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.553,1],79,-1.3,0,79,-1.3,112.5).s().p("AgEFKQhDhQg7hsQg7hsi2hhIghgGQgdgGgOgBICDk4QAEgGBrADQBsACCqBSQCtBRDHDjQAJgBgQAkIgyBXQgoBGg+BKQg9BLhHAhQgBAIgoAJIgKABQgoAAhDg/g");
	this.shape_14.setTransform(-9.8,-10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#91032C").s().p("AiTEwQgygEhKgmQAOAFA1AGQBFAHBeg0QAlgaA5hJQA8hJAyhKQAzhMAKgkQAGg1grg9QglgzgLgMQA9A7A9BMQADAAAHAiQAGAjgeBCQgYAsg1BPQg0BOhHBCQhDBDhKAKIgHABQgMAAgigEg");
	this.shape_15.setTransform(21.7,7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8E0728").ss(1,1,1).p("AH6BxQgXAvg1BPQg1BOhGBCQhFBChKAKQgJAKh0geQhygeiCi5Qhwi9g0g3Qg0g5huABICjl5QAFgHCCgBQCCAADIBaQDKBZDdEGQAEAAAGAhQAHAigfBCg");
	this.shape_16.setTransform(-4.2,-8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BD0027").s().p("AAnG3QhygeiCi5Qhwi9g0g2Qg0g6huABICjl5QAFgHCCAAQCCgBDIBaQDKBaDdEFQAEAAAGAhQAHAjgfBBQgXAvg1BPQg1BNhGBDQhFBChKAKQgCADgJAAQgbAAhXgXg");
	this.shape_17.setTransform(-4.2,-8.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7CFA4").s().p("AgOJuQiwgJi2haQi2hZhShIQApAMBRATQBSATBGgIQBGgHAFhFQgHhHgwhAQgwg/gDhRQBOBPBmBOQBmBPBvATQBtATBmhkQByh5AqirQAritguiUQgwh6irhtQBdAmBRA3QBRA2A7AzQCWCBAYClQAYCkhsClQgmA1hNA8QhNA7hCArIhFAsQg8CjihAAIgPAAg");
	this.shape_18.setTransform(6.7,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C98F55").ss(1,1,1).p("AEjHyQg6CkirgDQipgDizhRQi0hShThHQhCg2gvhHQguhHgIhXQgGhvA3hFQA2hGBjgkQBEggAnhIQAnhIADg5QACg2ABgrQAAgqAAgDQABgGBMgzQBMgzCHgXQCFgWC0BRQFKCoBXCrQBXCrglCDQgmCEgtA4QgnA2hOA8QhOA9hCArQhDArgEACg");
	this.shape_19.setTransform(0,-3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEDBB1").s().p("AA+KTQipgDizhRQi0hShThHQhCg2gvhHQguhHgIhXQgGhvA3hFQA2hGBjgkQBEggAnhIQAnhIADg5QACg2ABgrIAAgtQABgGBMgzQBMgzCHgXQCFgWC0BRQFKCoBXCrQBXCrglCDQgmCEgtA4QgnA2hOA8QhOA9hCArQhDArgEACQg5ChimAAIgGAAg");
	this.shape_20.setTransform(0,-3);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.instance_2,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-69.8,145.6,133.8);


(lib.head4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol51("synched",0);
	this.instance.setTransform(-46.3,-44.2,1.2,1.2);
	this.instance.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C98F55").s().p("AhWBFQgugWAmgxQAlgzAjgOQA7gNAlAOQAlAOABAEQgEgDgtgLQgvgLgmAPQgmAVgZAjQgaAhAOAUQAMAMAaADQAaADAcgYQAegggGgPQgFgRgOgHIADgMQAZASAGAcQgDAYgUAPQgbAbgkAAQgQAAgSgFg");
	this.shape.setTransform(27.6,43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2C497").s().p("AgdBWQgvgFgagdQgZgdAUgrQAXgsAugPQAsgOA2AOQA2APADA5QgGAtgyAZQgtAYglAAIgIgBg");
	this.shape_1.setTransform(28.7,46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CFA4").s().p("AgvBxQhogSgniLQADAIAVAfQAaAkA4AdQA4AdBbgXQBQghAVhFQAUhGgCgJQAhBwhRBCQg/A1hMAAQgVAAgVgDg");
	this.shape_2.setTransform(30.5,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C98F55").ss(1,1,1).p("AiEirQADgEA+gPQA9gPBJAXQBMAYAvBxQAiB0hTBGQhUBGhqgSQhtgSgoiW");
	this.shape_3.setTransform(30.5,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEDBB1").s().p("AgxDBQhtgSgoiWIBCjEQADgEA+gPQA9gPBJAXQBMAYAvBxQAiB0hTBGQhDA4hQAAQgVAAgWgEg");
	this.shape_4.setTransform(30.5,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D2D2D").s().p("AgDBKQhqhIhTgxIBNhqQAGABBJArQAAAIgeAnQgeApAAAIQAJgDAngjQAmgiAKgCIAlAaQgCAIghAmQggAkgBAIQAKgDAmgeQApghAJgCIAmAeQgCAHglAgQgkAigDAHQAHgCAqgeQAqgeAHgCQAoAiAcAnIhUBKQgJgIhnhIg");
	this.shape_5.setTransform(37.5,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F5151").s().p("AgFBdQh0hMhdg4IBNiLQADAABCAlQBAAmBRA9QBSA8A4BLIhfBXIh9hXg");
	this.shape_6.setTransform(37.6,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AD723D").s().p("AAZAKQgRgxgvgPIAJgJQAFgDAgAXQAgAWABBVQgBgLgOgrg");
	this.shape_7.setTransform(-68.6,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E99BC").s().p("AADgaQgigGgFAFQAcAbADARQAEATgCABIgagqIgYgnQBegBAJArQAIApgGAHQgNhCgkgGg");
	this.shape_8.setTransform(-25,-20.3);

	this.instance_1 = new lib.Symbol48("synched",0);
	this.instance_1.setTransform(-20.5,-29.5,1.2,1.2);
	this.instance_1.alpha = 0.5;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#700817").ss(1,1,1).p("AD+DTQg1BphhA9QgDACg7gMQg5gLhMgwQhMgvgzhqQhGidgeg6Igdg4QAAgEAjhLQAkhKBShpQgDgJB+AwQB8AwEmDYQABAFgUBVQgVBXg1Bpg");
	this.shape_9.setTransform(-15.9,-12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.553,1],61.3,-1,0,61.3,-1,99.6).s().p("AAqFvQg5gLhMgwQhMgvgzhqQhGidgeg6Igcg4QgBgEAkhLQAjhKBThpQgEgJB+AwQB8AwEmDYQABAFgUBVQgVBXg1BpQg1BphhA9IgCAAQgKAAgygKg");
	this.shape_10.setTransform(-15.9,-12.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#91032C").s().p("AhtEmQh3gehmhmIA5AeQA2AdBCAhQA8AeAugDQAvgCBDgHQAxgIAyhYQAyhXAkhjQAkhkAHgwQABhCgvg0IgngpQAyArA1A4QADgBALAiQALAhgTBUQgQA9gmBXQgmBZgyBHQgzBHg1AGIgZABQg7AAhigYg");
	this.shape_11.setTransform(-4.6,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8E0728").ss(1,1,1).p("AGRAyQgPA9gmBZQgmBZgzBHQgyBGg2AHQg5AFhmgWQhogXhjhNQhjhNgpidQABgJgQhKQgPhIgkgdQABgGAmhTQAmhUBGhbQA8hHAJgDQAKgDgEAFQACgDBPAOQBQAPCCBHQCFBICiCnQADgBAMAhQALAigUBSg");
	this.shape_12.setTransform(-12.9,-12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BD0027").s().p("AgEGkQhogXhjhNQhjhNgpidQABgJgQhKQgPhIgkgdQABgGAmhTQAmhUBGhbQA8hHAJgDQAKgDgEAFIAAAAIAAAAQADgDBOAOQBQAPCCBHQCFBICiCnQADgBAMAhQALAigUBSQgPA9gmBZQgmBZgzBHQgyBGg2AHIgWABQg2AAhTgSg");
	this.shape_13.setTransform(-12.9,-12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7CFA4").s().p("AkqIsQjHhHiUiJQAGAEBUAtQBUAtBmAdQBmAcA6guQAtgthBgeQhBgfhZhJQhahJgYirICVg7IEgh0QCRg8AigRQAmgcAShxQAShygthEQgwg3gSgJIgJgFQCZAnCUBcQCXBdBOCPQBQCshHC8QhIC+icCNQibCNitAbQgdADgdAAQiGAAiig7g");
	this.shape_14.setTransform(7.9,-1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#C98F55").ss(1,1,1).p("AHMnhQibhfifgnQi8grhsAlQhrAmgtA1QgrA1ABAGQg3CWgsA7QgtA7gbAIQgaAJgBgDQAAgEgGgYQgGgXgSAJQgRAPgEAVQgEAWABACQgDgDgegBQgegBgVAdQhdCqA8CVQA9CVCVBuQCWBuCwA3QCwA3CJgPQCwgbCfiQQCfiQBJjBQBJjAhSiwQhQiRiahgg");
	this.shape_15.setTransform(0,-3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEDBB1").s().p("AixJUQiwg3iWhuQiVhug9iVQg8iVBdiqQAVgdAeABQAeABADADIADgYQAEgVARgPQASgJAGAXQAGAYAAAEQABADAagJQAbgIAtg7QAsg7A3iWQgBgGArg1QAtg1BrgmQBsglC8ArQCfAnCbBfQCaBgBQCRQBSCwhJDAQhJDBifCQQifCQiwAbQgeADgfAAQhyAAiKgrg");
	this.shape_16.setTransform(0,-3);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.instance_1,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.7,-67.9,149.6,135.6);


(lib.head3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D7D6").s().p("AACAeIhfgeIgOAkIADgnQgEgBgggQQgggRgMgaQABACAXAUQAXATAkAJIAOgiIgEAmIAdAJQAbAGAkAJIAHgWIAAALQAAAMADADQgCAAAMAFQAMAEAxADQBXADAQgBIhCADQg/ADgvgHIgDAfg");
	this.shape.setTransform(-9.9,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhPgcIAFhEQAoBHA4AdQAtAZAOAFQhQgWghgiQgkgkAAgEQgEAkgCA5IgBBCQgHhBADg8g");
	this.shape_1.setTransform(-21.2,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("ABoglQhUAchKgUQhMgUgFgGQBvAdBOgOQBPgPADgEQgBAEgbArQgaApgdAfg");
	this.shape_2.setTransform(5.2,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AD723D").ss(1,1,1).p("ADOBEQgnA+ghARQgWAHhIgCQhGgChRgVQhSgUgzgxQgBgFgDhEQgDhFAJhGQABAJAlAyQAoA3B0AoQB4AfBXgQQBXgQAEgCQgEAGgoA/g");
	this.shape_3.setTransform(-4.9,35.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoCYQhGgChRgVQhSgUgzgxIgEhJQgDhFAJhGQABAJAlAyQAoA3B0AoQB4AfBXgQQBXgQAEgCQgEAGgoA/QgnA+ghARQgQAGgsAAIgigBg");
	this.shape_4.setTransform(-4.9,35.4);

	this.instance = new lib.Symbol33("synched",0);
	this.instance.setTransform(29.5,-3.5);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Symbol32("synched",0);
	this.instance_1.setTransform(-37,-2.5);
	this.instance_1.alpha = 0.57;

	this.instance_2 = new lib.Symbol31("synched",0);
	this.instance_2.setTransform(-37.9,-25.7);
	this.instance_2.alpha = 0.57;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAIQAUgZATgFQAUACAFAJQAFAKgBABQgFAAgmAHQgXAFgMAKIAKgOg");
	this.shape_5.setTransform(-8,-37.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFAEQghgRgGgBQAAgCAIgHQAHgIATAEQASAKALAdIAGARQgJgNgVgMg");
	this.shape_6.setTransform(32.2,-24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUABQAAgVATgEQASABAEAXQAAAUgTAFQgSgBgEgXg");
	this.shape_7.setTransform(-10.4,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUABQAAgUATgFQASABAEAXQAAAUgTAFQgSgBgEgXg");
	this.shape_8.setTransform(14,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BDDFF4").s().p("ABQC2QhXgagchZQhDA7hUgOQhxgdgVh3QACAGAjAyQAlA1A9ATQA/AHAtgkQAtgjACgGQACAIAlA4QAmA5A1AJQA0AEAwgXQAwgYArhlQAVhHgjg8Qgjg6gHgFQA1AgAVA7QAWA8gTBEQgaBRhCArQguAeg0AAQgVAAgVgFg");
	this.shape_9.setTransform(3.2,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5E99BC").ss(1,1,1).p("ADIigQhfgUhLBCQgehjhigYQg3gKgxAXQhcArgdBvQgSBUAlBDQAmBCBMASQBXANBEg8QAdBbBaAbQBNARBDgrQBDgrAahUQAXhTgihGQgihFhMgVg");
	this.shape_10.setTransform(3.1,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D7ECF9").s().p("ABUDsQhagbgdhbQhEA8hXgNQhMgSgmhCQglhDAShUQAdhvBcgrQAxgXA3AKQBiAYAeBjQBLhCBfAUQBMAVAiBFQAiBGgXBTQgaBUhDArQgwAfg2AAQgVAAgVgFg");
	this.shape_11.setTransform(3.1,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C98F55").ss(1,1,1).p("AAlgPQgBgDgQgOQgQgNgRAEQgUALgDAdQgDAbAnAFIAIAM");
	this.shape_12.setTransform(-7.7,24.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEDBB1").s().p("AAAAfQgngFADgbQADgdAUgLQARgEAQANQAQAOABADIgdA6g");
	this.shape_13.setTransform(-7.7,24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3F109B").ss(1,1,1).p("AkLDjQgMgHgugqQg3gxgghiQgghgBAiTQAFgBBuAJQBuAJCeAmQChAnCbBVQAEACAnAZQAnAWAfAeQAWAdACAIQAFgRAAAAQgyhGhUgsQhTgri1g+Qi5g8iUgIQiUgIgIADQgIAFgUBhQgVBiA+CFQA6BgBYAYQACABABAAIgBgBQgBAAgBAAg");
	this.shape_14.setTransform(5.1,-4.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6A28D1").s().p("AmdBrQg+iEAVhiQAUhiAIgEQAIgECUAIQCUAIC5A8QC1A/BTArQBUArAyBGIgFARQgCgIgWgdQgfgdgngXIgrgaQibhWihgmQiegmhugKQhugJgFACQhACSAgBgQAgBjA3AxQAuAqAMAGQhYgYg6hgg");
	this.shape_15.setTransform(5.1,-4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#700817").ss(1,1,1).p("AGyBKQgbBGgvBHQgwBIg/AIQhhABhVguQhSgvglgnQgEADhCAIQhDAHhUgZQhUgYg3heQg/iEAVhiQAUhiAIgEQAJgECTAIQCUAIC5A8QC1A/BTArQBUArAyBIQgBAEgaBGg");
	this.shape_16.setTransform(5.1,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.553,1],80,-8.7,0,80,-8.7,101.8).s().p("ABDD6QhSgvglgnQgEADhCAIQhDAHhUgZQhUgYg3heQg/iEAVhiQAUhiAIgEQAJgECTAIQCUAIC5A8QC1A/BTArQBUArAyBIQgBAEgaBGQgbBGgvBHQgwBIg/AIIgCAAQhgAAhUgtg");
	this.shape_17.setTransform(5.1,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E0728").s().p("Ag0BtQAfgyAag5QAZg3AKg1QAKg0gBgEQATAaASAhIgXAzQgWAygnA7QglA/gyArIAhg2g");
	this.shape_18.setTransform(49,14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8E0728").ss(1,1,1).p("AHfBjQgiBIg5BJQg6BJhFAJQhrABhfgsQhdgsgpgqQgEADhHAFQhHAEhageQhbgfg8hmQhEiRAWhrQAWhqAJgFQADgCBRgFQBQgEB8AJQB9AKCEApQCtA1BnA6QBmA5BFB6QgBAGgjBHg");
	this.shape_19.setTransform(6.2,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BD0027").s().p("AA7EbQhdgsgpgqQgEADhHAFQhHAEhageQhbgfg8hmQhEiRAWhrQAWhqAJgFQADgCBRgFQBQgEB8AJQB9AKCEApQCtA1BnA6QBmA5BFB6QgBAGgjBHQgiBIg5BJQg6BJhFAJIgHAAQhoAAhbgrg");
	this.shape_20.setTransform(6.2,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7CFA4").s().p("Ai1HiQBXgiBGiDIgBggQAkhQAohOQBQh9A9h2QA9h5hEiYQgohMhBgvQAfATAeAWQBHA1AjBTQAoBzghB2QgaBTg2AkQg2AlgdA5QgCABgKAtQgJAvABBRQAFBVhTBHQhTBGiyACQAUgEBDgbg");
	this.shape_21.setTransform(30.5,4.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7CFA4").s().p("AAsEGQhOgKgEgDQBPAEBLgOQBLgNA7g8QAngqAcgzQgIAAhZgdQhZgehUg3IgVgNQgDABg5ACQg8ABhLgPQhMgQg1gxQhChLATgeQASgdAIABIIgDPIBtBiIAOAZQAGAHgNBBQgNBBhhAnQhRAVhBAAQgVAAgUgCg");
	this.shape_22.setTransform(-5.9,29.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C98F55").ss(1,1,1).p("AIJjDQADBSgRA7QgbBRg2AlQg2AmgdA5QgCABgKAuQgJAuABBSQgDBthdA6QhdA5heAHQiKAPiHgsQhKgag5g3Qgogng3hIQg2hIgIg2QAEhUAvgyQAugyAHgBQgIgEgbhmQgbhpAyieQBAidC8g2QC6g3DtBbQCXBBA8BUQA8BVAEBSg");
	this.shape_23.setTransform(6.1,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEDBB1").s().p("AjpIYQhKgag5g3Qgogng3hIQg2hIgIg2QAEhUAvgyQAugyAHgBQgIgEgbhmQgbhpAyieQBAidC8g2QC6g3DtBbQCXBBA8BUQA8BVAEBSQADBSgRA7QgbBRg2AlQg2AmgdA5QgCABgKAuQgJAuABBSQgDBthdA6QhdA5heAHQgkAEghAAQhoAAhkghg");
	this.shape_24.setTransform(6.1,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C98F55").s().p("AgFA0QgigRALgaQAKgYAsALQAAgDgQgRQgNgQgeABQgcAEgCgBQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQACgCAcgKQAbgKAWAIQAXALAQAZQAPAWgHAQQgHAQgOANQgIAIgOAAQgLAAgOgGg");
	this.shape_25.setTransform(-45.8,4.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7CFA4").s().p("AghBTQhHgTgChDQABgIACgIQAZhIA/ADQA9ACApAtQAoAsgqA4QghAegtAAQgSAAgWgGg");
	this.shape_26.setTransform(-42,4.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C98F55").ss(1,1,1).p("AiFALQAGA3ApAhQAqAgA3gDQA5gHAjgnQAigogDg0QgGg3gpghQgqggg3ADQg5AHgjAnQgiAoADA0g");
	this.shape_27.setTransform(-44.8,2.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEDBB1").s().p("AhWBjQgpghgGg3QgDg0AigoQAjgnA5gHQA3gDAqAgQApAhAGA3QADA0giAoQgjAng5AHIgLAAQgwAAgmgdg");
	this.shape_28.setTransform(-44.8,2.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C98F55").s().p("AgcA4QgRgLgKgPQgJgOALgZQALgbAUgPQAWgLAbAFQAdAFADABQAAAAABAAQAAABAAAAQAAAAAAAAQAAABgBAAQgCACgcABQgdAEgLATQgMAUAAACQApgTAPAWQAPAXgeAYQgSALgOAAQgIAAgGgEg");
	this.shape_29.setTransform(43.1,33);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7CFA4").s().p("AgcBxQg6gOgMhPQgDgyAmgtQAlguA0AEQAzAKAWAuQACAOgHAZQgHAYgDgBQAgA+gsAhQgeAWglAAQgPAAgSgFg");
	this.shape_30.setTransform(38.6,30.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#C98F55").ss(1,1,1).p("ACGgLQAEA1gjAoQgjAng5AHQg3ADgpghQgqgggGg3QgDg0AjgoQAigoA5gGQA4gEApAhQApAhAGA2g");
	this.shape_31.setTransform(42.1,31.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEDBB1").s().p("AhWBiQgpgggGg3QgDg0AigoQAjgoA5gGQA3gEApAhQApAhAHA2QADA1gjAoQgiAng5AHIgLAAQgwAAgmgeg");
	this.shape_32.setTransform(42.1,31.8);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.instance_2,this.instance_1,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.2,-57.9,118.5,115.9);


(lib.head2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol30("synched",0);
	this.instance.setTransform(28.5,-5.9,1.21,1.21);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Symbol29("synched",0);
	this.instance_1.setTransform(-48,-13.4,1.21,1.21);
	this.instance_1.alpha = 0.57;

	this.instance_2 = new lib.Symbol28("synched",0);
	this.instance_2.setTransform(-48.5,-41.3,1.21,1.21);
	this.instance_2.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAFQAfgZAYABQAXAHADAMQAEAMgBABQgHgCgugBQgfgBgRALIARgPg");
	this.shape.setTransform(-3.5,-57.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGAFQgmgZgHgCQAAgCAKgIQAKgJAVAHQAWAOAKAlIAGAWQgJgSgZgQg");
	this.shape_1.setTransform(38.5,-39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDDFF4").s().p("ABJDRQhmgpgZhuQhWBAhlgZQiFgwgMiTQABAJAmBCQAmBCBIAeQBMAPA6gnQA5gmAEgHQABAKApBJQAmBIA/AQQA9ALA9gXQA9gXA+h2QAhhTgkhNQgkhLgIgGQA8AsAUBKQAUBLgfBQQgnBghUAsQgyAag1AAQgiAAgjgLgAmChiIAAAAIAAAAg");
	this.shape_2.setTransform(-0.1,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5E99BC").ss(1,1,1).p("AECisQhwgihiBIQgch7hygnQhAgSg/AWQhzAqgvCCQgeBnAmBSQAmBUBZAdQBnAaBZhCQAaByBpAqQBbAcBWgsQBVguAphiQAlhkgihVQgihXhZgig");
	this.shape_3.setTransform(-0.1,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7ECF9").s().p("ABLEmQhpgqgahyQhZBChngaQhZgdgmhUQgmhSAehnQAviCBzgqQA/gWBAASQByAnAcB7QBihIBwAiQBZAiAiBXQAiBVglBkQgpBihVAuQg0Abg2AAQgjAAgkgLg");
	this.shape_4.setTransform(-0.1,-4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C98F55").ss(1,1,1).p("AAugPQgBgDgSgTQgSgSgWAEQgZALgGAiQgHAhAvALIAHAP");
	this.shape_5.setTransform(-15.5,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEDBB1").s().p("AgEAmQgvgLAHghQAGgiAZgLQAWgEASASQASATABADIgrBEg");
	this.shape_6.setTransform(-15.5,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3F109B").ss(1,1,1).p("AlZEZQgNgHg1g5Qg9hCgch5Qgch4BciqQAGgBCEAWQCEAXC7A/QC9BACyB1QAEACAtAjQAsAiAiAmQAYAmABAJQAJgTAAAAQg1hdhgg9Qhgg7jUheQjZhdixgZQixgZgKADQgLAFgjB0QgiBzA8CmQA8B8BoAlQABACABAAQgBgBAAAAQgBAAAAgBg");
	this.shape_7.setTransform(2.9,-15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6A28D1").s().p("An9B5Qg8imAihzQAjh0ALgFQAKgDCxAZQCxAZDZBdQDUBeBgA7QBgA9A1BdIgJATQgBgJgYgmQgigmgsgiQgtgjgEgCQiyh1i9hAQi7g/iEgXQiEgWgGABQhcCqAcB4QAcB5A9BCQA1A5ANAHQhoglg8h8g");
	this.shape_8.setTransform(2.9,-15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#700817").ss(1,1,1).p("AH8CQQgnBShCBRQhABRhNAEQh2gKhghBQhfhBgpgzQgFADhRACQhRAChignQhjgmg5h3Qg8inAihzQAjhzALgFQAKgDCxAZQCxAZDZBdQDUBeBgA8QBfA+A2BaQgCAGgnBSg");
	this.shape_9.setTransform(2.9,-4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.553,1],96.6,-1.1,0,96.6,-1.1,123.1).s().p("AAwE9QhfhBgpgzQgFADhRACQhRAChignQhjgmg5h3Qg8inAihzQAjhzALgFQAKgDCxAZQCxAZDZBdQDUBeBgA8QBfA+A2BaQgCAGgnBSQgnBShCBRQhABRhNAEQh2gKhghBg");
	this.shape_10.setTransform(2.9,-4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E0728").s().p("AhICAQAsg6AmhAQAjhAARg/QASg+gBgFQAVAiATApQgEALhDBrQhCBshkBMIAug9g");
	this.shape_11.setTransform(53.5,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8E0728").ss(1,1,1).p("AJkBZQgCAGgxBTQgxBThNBSQhNBRhVAEQiBgKhtg/Qhsg/gtg3QgFADhWgCQhWgChqguQhpgvg/iBQhCi3Amh+QAnh+AKgFQAEgCBhADQBiADCVAYQCUAZCcBBQDLBSB2BQQB1BQBGCbg");
	this.shape_12.setTransform(4.1,-4.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BD0027").s().p("AAjFjQhsg/gtg3QgFADhWgCQhWgChqguQhpgvg/iBQhCi3Amh+QAnh+AKgFQAEgCBhADQBiADCVAYQCUAZCcBBQDLBSB2BQQB1BQBGCbQgCAGgxBTQgxBThNBSQhNBRhVAEQiBgKhtg/g");
	this.shape_13.setTransform(4.1,-4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A5052B").s().p("AgTA9IAkgHQAigGAMgLQANgbgtgaQgXgHgQANQgSAKgBADQAFgOANgLQALgNACAAQgdgTggAAQggABgCABQAFgEAJgDQAogKAwATQAzAUASAeQAUA5gLgGQgCABgiAIQgRAEgUAAQgQAAgTgDg");
	this.shape_14.setTransform(-21.6,47);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BD0027").s().p("AhOAMQgEgDgLgaQgMgcAggPQAogKAxAUQAyAUATAeQATA4gKgGQgHAGhAAHIgOABQg1AAgig0g");
	this.shape_15.setTransform(-22.1,47.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#AD723D").ss(1,1,1).p("ACrBwQgDABg5gJQg5gIhGgWQhAgZg6gtQg8gsgEgFQgFg4AAgKQADAMBUA/QBcBEDsAjQgBADgkAqg");
	this.shape_16.setTransform(-15.4,31.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABvBoQg5gIhGgWQg/gZg8gtQg7gsgEgFIgFhCQADAMBUA/QBcBEDsAjQgBADgkAqIgCAAQgHAAgzgIg");
	this.shape_17.setTransform(-15.4,31.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#AD723D").ss(1,1,1).p("AClA8QgpAvhGAmQhDAmhVgUQgvgTgYhQQgXhOgIhLQgHhFAAgLQADANBUA+QBcBGDsAhQgBAEgqAvg");
	this.shape_18.setTransform(-15.4,37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#774119").s().p("AhiCjQgvgTgYhQQgXhOgIhLQgHhFAAgLQADANBUA+QBcBGDsAhQgBAEgqAvQgpAvhGAmQguAZgyAAQgbAAgdgHg");
	this.shape_19.setTransform(-15.4,37);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7CFA4").s().p("AlrJWQAZgBBUgaQBtggBiiWIABgnQA1heA4hYQBuiOBXiJQBWiLhCi+QgohghJhAQAjAaAiAeQBPBHAiBoQAjCOgzCMQgpBfhFAnQhFAogpBBQgBABgRA2QgRA3gGBiQgFBnhrBNQhYA9igAAQgkAAgngDg");
	this.shape_20.setTransform(30.9,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7CFA4").s().p("AASFMQhdgUgEgFQBeAOBcgJQBcgIBOhBQAygvAog6QgJgBhpgtQhpgthehMIgYgSQgEABhGgFQhHgEhagbQhZgbg6hBQhIhhAZgiQAZgiAKADIJ7EzIB3CDIAPAgQAGAJgWBMQgWBNh6AlQhHAMg8AAQg0AAgsgJg");
	this.shape_21.setTransform(-13.3,27.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C98F55").ss(1,1,1).p("AKKixQgEBkgbBEQgpBfhFAoQhFAogqBBQgCABgQA3QgRA3gHBiQgPCDh3A8Qh2A6hvgBQisADidhCQhXgog/hJQgrgzg7hcQg6hdgDhCQANhlA9g3QA/g2AIAAQgJgFgWiBQgWiBBNi5QBfi2DoguQDmgtEUCGQCvBeA/BsQA/BsgEBkg");
	this.shape_22.setTransform(3.4,-6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEDBB1").s().p("AlQJxQhXgog/hJQgrgzg7hcQg6hdgDhCQANhlA9g3QA/g2AIAAQgJgFgWiBQgWiBBNi5QBfi2DoguQDmgtEUCGQCvBeA/BsQA/BsgEBkQgEBkgbBEQgpBfhFAoQhFAogqBBQgCABgQA3QgRA3gHBiQgPCDh3A8Qh2A6hvgBIgPAAQikAAiWg/g");
	this.shape_23.setTransform(3.4,-6.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C98F55").s().p("AgNA9QgogYAQgeQAPgcA0ASQAAgDgQgXQgPgVgkgCQgiACgDgCQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQADgCAjgJQAigJAaALQAaARAQAeQARAegLASQgKATgTAOQgIAHgNAAQgQAAgTgKg");
	this.shape_24.setTransform(-59.3,-6.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7CFA4").s().p("AgxBiQhTggAFhQIAFgTQAmhUBLAJQBKAKAsA7QAsA4g5BAQgmAdguAAQgbAAgigMg");
	this.shape_25.setTransform(-54.9,-5.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#C98F55").ss(1,1,1).p("AiiAAQACBCAuArQAuAtBEABQBFgBAugtQAugrAChCQgChBgugsQgugrhFgCQhEACguArQguAsgCBBg");
	this.shape_26.setTransform(-58.1,-7.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEDBB1").s().p("AhyBtQgugrgChCQAChBAugsQAugrBEgCQBFACAuArQAuAsACBBQgCBCguArQguAthFABQhEgBgugtg");
	this.shape_27.setTransform(-58.1,-7.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C98F55").s().p("AgqBAQgTgOgKgTQgKgSAQgeQAQgeAagRQAagLAjAJQAiAJADACQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQgCACgigCQgkACgPAVQgRAXAAADQAzgSAQAcQAQAegnAYQgUAKgQAAQgNAAgIgHg");
	this.shape_28.setTransform(44.8,37.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7CFA4").s().p("AgwCFQhFgYgGhgQACg9AygzQAygzA+ALQA9ARAWA6QABARgLAdQgLAcgEAAQAgBOg4AiQghAUgmAAQgYAAgcgJg");
	this.shape_29.setTransform(39.7,34.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#C98F55").ss(1,1,1).p("ACjAAQgCBCguArQguAthFABQhEgBgugtQgugrgChCQAChBAugsQAugrBEgCQBFACAuArQAuAsACBBg");
	this.shape_30.setTransform(43.6,36.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEDBB1").s().p("AhyBtQgugrgChCQAChBAugsQAugrBEgCQBFACAuArQAuAsACBBQgCBCguArQguAthFABQhEgBgugtg");
	this.shape_31.setTransform(43.6,36.3);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.4,-76,144.9,139.8);


(lib.head1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol27("synched",0);
	this.instance.setTransform(26,0.6);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Symbol26("synched",0);
	this.instance_1.setTransform(-37.3,-5.7);
	this.instance_1.alpha = 0.57;

	this.instance_2 = new lib.Symbol25("synched",0);
	this.instance_2.setTransform(-37.6,-28.7);
	this.instance_2.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAOQAIgfATgLQAQgGAJAHQAIAHAAACQgGABgfAVQgVANgHAPIAFgSg");
	this.shape.setTransform(-2.9,-31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFAEQgfgVgGgBQAAgCAIgHQAJgHAQAGQATALAIAfIAFASQgHgPgVgNg");
	this.shape_1.setTransform(30.3,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAAQACgVASgCQATACACAVQgCAWgTACQgSgCgCgWg");
	this.shape_2.setTransform(-11.7,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAAQACgWASgCQATACACAWQgCAXgTACQgSgCgCgXg");
	this.shape_3.setTransform(12.1,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDDFF4").s().p("AA8CtQhUgigVhbQhHA1hTgVQhugngKh5QABAHAfA3QAgA1A7AZQA/ANAwggQAvggADgGQABAJAiA8QAfA8A0ANQAzAJAygTQAygTA0hiQAbhEgeg/Qgdg/gHgFQAyAlAQA9QAQA+gZBCQghBPhFAkQgpAWgsAAQgcAAgdgJgAD3i1IAAAAIAAAAg");
	this.shape_4.setTransform(2.4,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5E99BC").ss(1,1,1).p("ADViNQhdgchRA7QgWhmheggQg2gPgzASQhfAjgnBsQgZBUAfBEQAgBGBJAXQBWAWBJg2QAVBdBXAjQBLAYBHglQBHgmAhhRQAfhTgchGQgdhHhJgcg");
	this.shape_5.setTransform(2.4,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7ECF9").s().p("AA+DzQhXgjgVhdQhJA2hWgWQhJgXgghGQgfhEAZhUQAnhsBfgjQAzgSA2APQBeAgAWBmQBRg7BdAcQBJAcAdBHQAcBGgfBTQghBRhHAmQgrAWgtAAQgdAAgdgJg");
	this.shape_6.setTransform(2.4,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C98F55").ss(1,1,1).p("AAmgMQgBgCgPgQQgPgPgRADQgVAJgFAdQgGAaAnAJIAGAN");
	this.shape_7.setTransform(-10.4,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEDBB1").s().p("AgDAfQgngJAGgaQAFgdAVgJQARgDAPAPQAPAPABADIgjA3g");
	this.shape_8.setTransform(-10.4,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3F109B").ss(1,1,1).p("AkeDpQgLgIgrguQgyg2gXhkQgXhjBMiMQAFgBBtASQBtATCaA0QCdA1CTBhQADABAlAdQAlAcAcAgQAUAfAAAHQAHgPAAgBQgrhMhQgzQhPgwivhOQizhMiSgVQiTgVgIADQgJAEgdBfQgcBfAyCKQAxBlBVAgQABAAABAAIABABQgBAAgCgBg");
	this.shape_9.setTransform(4.8,-7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A28D1").s().p("AmkBkQgyiJAchfQAdhgAJgEQAIgCCTAUQCSAVCzBNQCvBOBPAwQBQAyArBNIgHAQQAAgIgUgfQgcggglgcQglgcgDgCQiThhidg0Qiag0htgTQhtgTgFABQhMCNAXBiQAXBlAyA2QArAuALAHQhVgfgxhmg");
	this.shape_10.setTransform(4.8,-7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#700817").ss(1,1,1).p("AGkB3QghBEg2BDQg1BDhAADQhhgJhQg1QhOg2ghgqQgEADhDABQhDAChSggQhRgggvhiQgyiKAchfQAdhfAJgEQAIgDCSAVQCTAVCzBMQCvBOBPAyQBPAzAsBKQgBAFggBEg");
	this.shape_11.setTransform(4.8,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.553,1],79.9,-0.9,0,79.9,-0.9,101.8).s().p("AAnEGQhOg2ghgqQgEADhDABQhDAChSggQhRgggvhiQgyiKAchfQAdhfAJgEQAIgDCSAVQCTAVCzBMQCvBOBPAyQBPAzAsBKQgBAFggBEQghBEg2BDQg1BDhAADQhhgJhQg1g");
	this.shape_12.setTransform(4.8,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8E0728").s().p("Ag7BqQAkgwAfg1QAeg1AOg0QAOgzAAgEQARAcAPAiQgDAJg4BYQg2BahSA+IAmgyg");
	this.shape_13.setTransform(46.7,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8E0728").ss(1,1,1).p("AH6BKQgCAFgoBEQgpBFg/BDQhABEhGADQhrgIhag0QhZg1glgtQgEADhIgCQhHgChXgmQhXgng0hrQg2iWAfhpQAghoAJgEQADgBBQACQBRACB7AVQB7AUCAA2QCoBDBhBDQBhBCA6CAg");
	this.shape_14.setTransform(5.8,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BD0027").s().p("AAdEmQhZg1glgtQgEADhIgCQhHgChXgmQhXgng0hrQg2iWAfhpQAghoAJgEQADgBBQACQBRACB7AVQB7AUCAA2QCoBDBhBDQBhBCA6CAQgCAFgoBEQgpBFg/BDQhABEhGADQhrgIhag0g");
	this.shape_15.setTransform(5.8,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EDEDED").s().p("ABXBRQgwgChBgYQhAgcgjgeQgjgfgBgDIgFgrQABACAnAfQAoAeBEAaQBEAaA5AKQA5ALADgBIgeAZQgBABgSAAIgfAAg");
	this.shape_16.setTransform(-10.2,31.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A5052B").s().p("AgPAyIAdgGQAcgFAKgJQALgWglgVQgTgGgNALQgQAIAAACQAEgLALgJIAKgLQgXgPgbAAQgaAAgCABQAEgDAHgDQAhgIAoAQQAqARAPAYQAQAvgJgFQgBABgcAHQgPADgQAAQgNAAgPgDgAgWACIAAABIAAgBg");
	this.shape_17.setTransform(-15.4,44.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BD0027").s().p("AhAAKQgEgDgJgVQgJgXAagMQAhgIAoAQQAqAQAPAZQAQAugJgFQgFAFg1AGIgMABQgrAAgcgrg");
	this.shape_18.setTransform(-15.8,44.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#AD723D").ss(1,1,1).p("ACJAxQgjAng5AfQg4AghGgQQgngQgThCQgUhBgGg+QgGg4AAgJQADAKBFA0QBMA5DDAbQgBAEgiAmg");
	this.shape_19.setTransform(-10.2,36);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#774119").s().p("AhRCHQgmgQgUhCQgThBgHg+QgGg4AAgJQADAKBFA0QBMA5DDAbQgBAEgjAmQgiAng6AfQglAVgqAAQgWAAgYgFg");
	this.shape_20.setTransform(-10.2,36);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7CFA4").s().p("Ag7HyQglAAg0gDQg0gEgggRQAggLArAFQArAGAjgBQBQgJA+g1QAqgmAhgxQgIAAhWgmQhVglhOhAIgUgPQgDABg7gEQg7gEhKgWQhKgWgwg1Qg8hPAVgcQAVgcAIACIIMD8IBjBuIAEgGQAthOAvhJQBbh1BHhxQBHhzg2idQghhQg+g1QAeAWAcAZQBCA7AcBWQAdB2grBzQghBOg5AhQg5AggiA2QgCABgNAtQgOAtgGBRQgFBCgrAtQgrAsg8AVQhJAZhLAAIgTAAg");
	this.shape_21.setTransform(8,6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7CFA4").s().p("AkvHuIEOjNQArhOAuhJQBbh1BIhxQBHhzg2idQghhPg9g1QAdAWAcAYQBCA7AcBWQAdB2grBzQgiBOg5AhQg5AgghA2QgCABgOAtQgOAtgFBRQgDBVhZBAQhJAziFAAQggAAgkgDg");
	this.shape_22.setTransform(27.6,6.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7CFA4").s().p("ADYCjQhXglhOhAIgUgPQgDABg5gEQg7gEhKgWQhKgUgwg2Qg8hQAVgcQAVgcAIACIIMD8IBjBtIguAVIhDgdg");
	this.shape_23.setTransform(-9.2,19);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C98F55").ss(1,1,1).p("AIZiMQgDBSgWA5QgiBOg6AhQg5AhgiA2QgBABgOAtQgOAtgGBRQgJBvhXApQhWAphsABQhrABhPgJQgyADgtgWQgDgCgDgDQgPgZgQgRQgGgCg3gpQg3gpg1hGQg1hFAAhXQAKhTA0gtQAzguAHgBQgIgEgShpQgShqBAiZQBOiXDAglQC+gmDkBvQCQBOA0BZQA1BagEBSg");
	this.shape_24.setTransform(5.2,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEDBB1").s().p("Ai2IrQgyADgtgWIgGgFQgPgZgQgRQgGgCg3gpQg3gpg1hGQg1hFAAhXQAKhTA0gtQAzguAHgBQgIgEgShpQgShqBAiZQBOiXDAglQC+gmDkBvQCQBOA0BZQA1BagEBSQgDBSgWA5QgiBOg6AhQg5AhgiA2QgBABgOAtQgOAtgGBRQgJBvhXApQhWAphsABIgVAAQhfAAhGgIg");
	this.shape_25.setTransform(5.2,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C98F55").s().p("AgLAyQgggUANgZQAMgXArAPQAAgCgOgTQgMgSgegBQgcACgCgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQADgCAcgHQAdgIAVAJQAVAOAOAZQANAYgIAPQgJAQgPAMQgHAGgLAAQgNAAgQgJg");
	this.shape_26.setTransform(-46.6,0.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7CFA4").s().p("AgoBRQhFgaAEhDIAEgPQAghGA+AIQA9AIAkAxQAlAugwA1QgfAYgmAAQgXAAgbgKg");
	this.shape_27.setTransform(-42.9,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#C98F55").ss(1,1,1).p("AiGAAQACA2AmAkQAmAlA4ABQA5gBAmglQAmgkACg2QgCg1gmglQgmgkg5gBQg4ABgmAkQgmAlgCA1g");
	this.shape_28.setTransform(-45.5,-1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEDBB1").s().p("AheBaQgmgkgCg2QACg1AmglQAmgkA4gBQA5ABAmAkQAmAlABA1QgBA2gmAkQgmAlg5ABQg4gBgmglg");
	this.shape_29.setTransform(-45.5,-1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C98F55").s().p("AgjA1QgPgMgJgQQgIgPANgYQANgZAWgOQAVgJAdAIQAcAHADACQAAAAABAAQAAAAAAABQAAAAAAAAQgBABAAAAQgCACgcgCQgeABgMASQgOATAAACQAqgPANAXQANAZggAUQgQAJgNAAQgLAAgHgGg");
	this.shape_30.setTransform(39.5,36.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7CFA4").s().p("AgoBtQg5gTgFhPQACgzAqgqQApgqAzAJQAyAOASAwQABAOgJAYQgJAXgDAAQAaBAguAdQgbAQggAAQgTAAgYgIg");
	this.shape_31.setTransform(35.3,34.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#C98F55").ss(1,1,1).p("ACHAAQgCA2gmAkQgmAlg5ABQg4gBgmglQgmgkgCg2QACg1AmglQAmgkA4gBQA5ABAmAkQAmAlACA1g");
	this.shape_32.setTransform(38.5,35.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEDBB1").s().p("AheBaQgmgkgBg2QABg1AmglQAmgkA4gBQA5ABAmAkQAmAlACA1QgCA2gmAkQgmAlg5ABQg4gBgmglg");
	this.shape_33.setTransform(38.5,35.4);

	this.addChild(this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-57.5,120,114.7);


(lib.head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C98F55").s().p("Ag6AJQAZhDArAJQAtAKAFAGQgCgCgcgHQgcgGgXAUQgkA0AwAFQAkgJgHgWQgLgUgFgCQAEAAAXAJQAWAJgGAXQgRAcguAFIgIABQgoAAAGgqg");
	this.shape.setTransform(44.4,19.7);

	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(-1.4,-37.3);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2C497").s().p("AgnAAQAEgdAjgDQAkADAEAdQgEAegkADQgjgDgEgeg");
	this.shape_1.setTransform(43.7,19.8);

	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(-42.6,0);
	this.instance_1.alpha = 0.57;

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(-49.3,-24.6);
	this.instance_2.alpha = 0.57;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61A4B").s().p("AAHg1IAVAGIg3Blg");
	this.shape_2.setTransform(18.4,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61A4B").s().p("AglB4QAEgIAYhWQAWhUABhDIAYAUQAAAJgPBWQgOBTgWA1g");
	this.shape_3.setTransform(23.6,-17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CFA4").s().p("AgvAfQgOggARgkQAJgLABABQgOASAEATQAEAQACACQAMAXAlACQAnADAFgBQgqANgXAAQgdAAgIgRg");
	this.shape_4.setTransform(-29.9,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C98F55").ss(1,1,1).p("ABOgPQgHgGg7gXQg4gXgXAdQgTAmAQAkQAPAkBggg");
	this.shape_5.setTransform(-28,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEDBB1").s().p("AhGAkQgQgkATgmQAXgdA4AXQA7AXAHAGIglA3QgsAPgbAAQggAAgIgTg");
	this.shape_6.setTransform(-28,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAAQACgRATgBQATABACARQgCARgTACQgTgCgCgRg");
	this.shape_7.setTransform(-15.1,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#3F109B").ss(1,1,1).p("AFqixQABADABADAFqixQgIgJgdgRQgtgciuAMQiyAUhcAqQhcApgMAkQgVA7AhBeQAgBgBTA/Qg2AagDAEQgIgEhAhKQhAhJgZhXQgOhFAigpQAigqBAgWQCVg3CYglQA8gPA9gDQBKgEAsAOQAqAOAVA7g");
	this.shape_8.setTransform(-17.5,-10.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6A28D1").s().p("AkNC4QhAhJgZhXQgOhFAigpQAigqBAgWQCVg3CYglQA8gPA9gDQBKgEAsAOQAqAOAVA7QgIgJgdgRQgtgciuAMQiyAUhcAqQhcApgMAkQgVA7AhBeQAgBgBTA/Qg2AagDAEQgIgEhAhKg");
	this.shape_9.setTransform(-17.6,-10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAAQADgQASgCQATACACAQQgCARgTACQgSgCgDgRg");
	this.shape_10.setTransform(-28.4,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BDDFF4").s().p("AAdDRQglgFgXgiQgSATgZAHQhcAMg0h1QAHALAkAjQA7AtArgPQAUgKAKgUQAKgUAAgDQABAFAdAbQAbAaAkgFQAmgNAqhAQApg/ALhLQAChLghgqQghgqgFgCQA6APAaBFQAaBEgRBaQgWBag3AvQguAoguAAIgSgBgAjeBSIACADIAAAAIgCgDgAB7jRIAAAAIAAAAg");
	this.shape_11.setTransform(-16.8,-10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5E99BC").ss(1,1,1).p("ADch/QgahFg7gPQhmgMg8CFQg3hIhGANQgyAPgWA6QgVA6ARBIQAUBKAuApQAvApAzgLQAZgHASgTQAWAiAnAFQA4AJA4gwQA4gwAVhcQAShagbhGg");
	this.shape_12.setTransform(-17.5,-10.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D7ECF9").s().p("AAoDUQgngFgWgiQgSATgZAHQgzALgvgpQgugpgUhKQgRhIAVg6QAWg6AygPQBGgNA3BIQA8iFBmAMQA7APAaBFQAbBGgSBaQgVBcg4AwQgvAogvAAQgJAAgJgBg");
	this.shape_13.setTransform(-17.5,-10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#700817").ss(1,1,1).p("AA6j1QiaAmiWA3QhBAWgiAqQgiArANBFQAaBYBBBKQBBBLAIAEQACgDAygZQAygZBKgFQBHgFBHA5QAkABAkgFQAjgGAZgdQAYgfAhhMQAghMAVhQQAUhSgMgwQgVhBgtgPQgsgOhLAEQg+ADg9APg");
	this.shape_14.setTransform(-17.3,-10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.553,1],65.3,-0.7,0,65.3,-0.7,83.2).s().p("AkTC6QhBhKgahYQgNhFAigrQAigqBBgWQCWg3CagmQA9gPA+gDQBLgEAsAOQAtAPAVBBQAMAwgUBSQgVBQggBMQghBMgYAfQgZAdgjAGQgkAFgkgBQhHg5hHAFQhKAFgyAZQgyAZgCADQgIgEhBhLg");
	this.shape_15.setTransform(-17.3,-10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2D2D2D").s().p("AAAAhQgugRgngLIAQg3IAlAIQABAEgGAWQgGATABAEQADgCAKgTQALgVADgCIASAGQAAAEgFAWQgIATABAEQADgDAJgSQAMgUAEgCIASAIQAAADgJATQgJAUAAADQACgCANgTQALgRADgCQAVAKARALIgoAqIgugSg");
	this.shape_16.setTransform(31.3,8.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4F5151").s().p("AAAAnQgygSgsgNIAQhDQAFAAA7AQQA5APA0AkIgrA0Ig0gVg");
	this.shape_17.setTransform(31.4,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAiQgCgBAFgTQAFgSAdgfIgXBHg");
	this.shape_18.setTransform(-43.6,-31.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcgUIA5AfIgMAKg");
	this.shape_19.setTransform(2.6,-42.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#91032C").s().p("Ah5EEQBAgOArgoQAbgkAehOQAehPAWhNQAWhPAFgkQAGgxgLgVQgHgQgDgEQAoAeAYAYQARAZgYBwQgYBugeBqQgfBqgDAIIj9ASIA4gKg");
	this.shape_20.setTransform(11.5,-9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8E0728").ss(1,1,1).p("AGujDQgegfg3gkQg3gkhXgBQg/ADh4AcQh2Ach7AqQh7AqhHAsQgCABgNAlQgMAlALA8QAQBAAtA/QAtA/AoAqQApArADACQABgEAqgaQAqgaBEgEQBFgDBPA/IERgUQADgIAfhsQAfhrAZhwQAYhygRgag");
	this.shape_21.setTransform(-14,-11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BD0027").s().p("AhYDwQhEAEgqAaQgqAagBADQgDgBgpgrQgogrgtg+Qgtg/gQhAQgLg8AMglQANglACgBQBHgsB7gqQB7gqB2gcQB4gcA/gCQBXAAA3AkQA3AkAeAfQARAagYByQgZBwgfBrIgiBzIkRAUQhPg+hFADg");
	this.shape_22.setTransform(-14,-11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EDEDED").s().p("Ai+A/QgDgDABgFQAEAABGgIQBHgIBYgaQBagYA+g1IgLBAIgLAHQgGAFhrAeQhRAXhnAAQgfAAghgCgADBhAIAAAAIAAAAg");
	this.shape_23.setTransform(-15.2,28.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiWBPQghgGACgCQgGgPgFgRQAEAABGgIQBHgIBYgYQBagaA+g0IgLBAQgBAEg6AeQg6AfhbAUQhCALgjAAQgOAAgJgCgADBhQIAAABIAAgBg");
	this.shape_24.setTransform(-15.2,30.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A5052B").s().p("AAEBJQAFgDAegiQAegigEgYQgLgXgYABQgYACgHARQgRAlgBAIIABgXQABgWAKgRQAGgJgagEQgTADgfALIghANQAZgTAGgDQArgeArAVQAFABAVgIQAUgIAMABQAYAJAWAOQgKAmgXAjQgXAlgoAPg");
	this.shape_25.setTransform(-11.2,46.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BD0027").s().p("AgTA/Qg2gNg7gvQAEgDAfgXIAogcQArgdArAVQAFAAAVgIQAUgIAMABQAYAKAWANQgKAngXAjQgXAlgoAOIgBABQgIAAgvgMg");
	this.shape_26.setTransform(-13.4,46.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#AD723D").ss(1,1,1).p("AjHgfQAEABBKgJQBKgKBbgdQBdgdA+g7QABAFgJBJQgKBJgeBNQgeBQg+AZQgDABg1gMQgzgMg9grQg9grgdhZg");
	this.shape_27.setTransform(-15.3,37.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#774119").s().p("AADCcQgzgMg9grQg9grgdhZQAEABBKgJQBKgKBbgdQBdgdA+g7QABAFgJBJQgKBJgeBNQgeBQg+AZIgBAAQgIAAgvgLg");
	this.shape_28.setTransform(-15.3,37.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7CFA4").s().p("AhnAtIgGgoQAIADBDAVQBBAWAagFQAggVAGg3QAGg5gCgHQAdB6gzAwQgTATgeAAQgxAAhSgyg");
	this.shape_29.setTransform(46.4,24.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#C98F55").ss(1,1,1).p("AhmgqQACgFAqglQApglAugJQAvgKAXBOQAeB+g0AxQg1AyiFhS");
	this.shape_30.setTransform(46.7,20.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEDBB1").s().p("AhtBRIAHh7QACgFAqglQApglAugJQAvgKAXBOQAeB+g0AxQgUATggAAQgyAAhUgzg");
	this.shape_31.setTransform(46.7,20.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7CFA4").s().p("AksHyIACABQAMAEBWAQQBjAQB7gfQB+ggA7g6QAjgoASg/QATg+AHgyQAHgyAAgDQgigTgkgCQgkgCgDABIAAAoIg7AIQg3AHhGADQhHADgxgLQgOgGgVgTQgWgUgRgFQg4gGhIAaQhIAZgGAFQgEgBgXgLQgYgLAHgRQAXgYBGgTQBGgTAfgGQCLgcCMgCQAzAAA3ACQA3ACAygMQA4gUAWg3IAyhhQAbg0AMgyQAOhPgyhLQgyhMg4gyQg4gygFgCQCqBSAtB0QAsB1gaBwQgbBxgsBDIgHA6IgPB8QgJBEgIAtQgMBEhJBOQhJBOh6AbQgjAEggAAQiPAAiJhRgADMpCIAAAAIAAAAg");
	this.shape_32.setTransform(2.9,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#C98F55").ss(1,1,1).p("AGMFmQgMBFhKBPQhKBPh9AcQh7AUh7gwQh8gwhxhZQhIg6gEg6QgEg6AegzQAeg0AegmQgGgDgzhFQgzhEgihmQghhnAyhnQA4hnBvhVQBvhUCYgZQCVgZCzBNQCtBTAtB3QAuB3gbByQgbBygtBFQAAADgHA4QgHA4gJBGQgJBFgIAug");
	this.shape_33.setTransform(-3.5,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEDBB1").s().p("AiHJJQh8gwhxhZQhIg6gEg6QgEg6AegzQAeg0AegmQgGgDgzhFQgzhEgihmQghhnAyhnQA4hnBvhVQBvhUCYgZQCVgZCzBNQCtBTAtB3QAuB3gbByQgbBygtBFIgHA7IgQB+QgJBFgIAuQgMBFhKBPQhKBPh9AcQglAGgkAAQhWAAhXgig");
	this.shape_34.setTransform(-3.5,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#C98F55").ss(1,1,1).p("AAABIQgaAEgQgpQgPgoADgpQAHghAeAJQAbAKAEAEQABAAAQAJQAPAKAJAY");
	this.shape_35.setTransform(-43.7,17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7CFA4").s().p("AgqAjQgPgoADgpQAHghAeAJQAbAKAEAEQABAAAQAJQAPAKAJAYIg3BVIgDABQgYAAgPgmg");
	this.shape_36.setTransform(-43.7,17.1);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_2,this.instance_1,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.8,-62.9,117.6,125.9);


(lib.Boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,wrong:10,wrong_done:67,correct:68,correct_done:125,wince:126});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();
		//activeState = false;*/
	}
	this.frame_6 = function() {
		/* 
		//main.activeState=true;
		*/
	}
	this.frame_67 = function() {
        //this.stop();
        this.gotoAndStop('static');
		/* stop();
		*/
	}
	this.frame_68 = function() {
		/* //main.activeState=true;
		*/
	}
	this.frame_125 = function() {
        this.dispatchEvent('done');
        this.stop();
		/* stop();*/
	}
	this.frame_160 = function() {
        this.gotoAndStop('static');
		/* gotoAndStop("static");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(61).call(this.frame_67).wait(1).call(this.frame_68).wait(57).call(this.frame_125).wait(35).call(this.frame_160).wait(1));

	// front hand
	this.instance = new lib.hand1();
	this.instance.setTransform(271.2,157.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CFA4").s().p("AAmA8QgrgEgGgDQgBgBgBAAQgBgBAAAAQgBAAABABQABAAABABIgsgWQgmgUgqglQgMgOgLgeQgNgfApAJQAIAEASAeQAUAeAJALQApAoA2ASQAaACAWgKQAVgKAWACQAjAHAHATQAIAGACALIABAGQABAGgCAGQABACgDAEIgCADQhLgggtgDg");
	this.shape.setTransform(159.2,154.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C98F55").ss(1,1,1).p("AgFBZQgTgKgigUQhFgpgdgnQgjg8AVgeQAUgeAaAMQAZATAfAzQAfAzADAGQAAgEANgbQALgcAXgFQAagCATAPQATAPgLAjQgMAegCAIIgDAGQAFgBAmAEQAmAGAUANQAsApgXAd");
	this.shape_1.setTransform(158.3,151.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEDBB1").s().p("AgFBZIg1geQhFgpgdgnQgjg8AVgeQAUgeAaAMQAZATAfAzIAiA5QAAgEANgbQALgcAXgFQAagCATAPQATAPgLAjIgOAmIgDAGQAFgBAmAEQAmAGAUANQAsApgXAdQhJgwhnAEg");
	this.shape_2.setTransform(158.3,151.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:271.2,y:157.9}}]},68).to({state:[]},12).to({state:[{t:this.instance,p:{x:242.3,y:160.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[]},27).wait(35));

	// front flipper
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A50229").s().p("AgWgBQAQgkgwgeIgDAAQAcgHAjACQAjADAPAeQAKApguAdQgsAcggAOQATgmAPgkg");
	this.shape_3.setTransform(81.7,193.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DD1948").s().p("AhlALQA9gUBLgPQBMgQA2AOQgJAAhtAOQhrAMhoAiQADgCA8gVg");
	this.shape_4.setTransform(90.2,200.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD1948").s().p("AjjARQBqgVCKgOQA8gDBNAQQAuAHAnAKQhkgUhlACQicADhrAUIgNACIALgCg");
	this.shape_5.setTransform(104.9,179.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A50229").s().p("AmsDbQAUgoAGgZQAKghgFglQgEgkgigRQA2gOAYAOQAYANgbA3IgiAzQgSAcAgALQAYAEAjgRIA4gbQBDgbBGgUQBHgSBIAMQBLAMBJgCQAcgCApgJQApgJAXgQQAYgZgBguQgCgwgCgFQADgCAggcQAfgdAagiQAjg8gTgeQgLgSgHgHQAuAkAFAqQAHAsgEAFIhqBfQACAAADAdQADAaggA4QgeA2hBAHQhBAHipgFQizAGiKA6Qh6A0gVANQARgOAPgeg");
	this.shape_6.setTransform(124.1,203.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8E0728").ss(1,1,1).p("AoDBUQAEgBAEgBQA3gOA6ACQA6ABAKAvQAFBMgaA4QgYA1gFAGQAMgKCHg5QCOg8C4gGQCtAFBCgIQBCgHAfg2QAig6gEgdQgCgbgDgBIBthhQACgCgHgpQgHgpgkg7Qgogyg3gJQg4gJgFADIh7B9QAAgEhWgWQhXgXitAHQivAIkIBWQAGgBAogDQAsgCApARQAqARgDA3QgJA2guAhQgrAfgqAOQguAMgGAEQAGgBApgNQACgBADgBg");
	this.shape_7.setTransform(114.4,199.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BD0027").s().p("AlmD6QAag4gEhMQgKgvg6gBQg6gCg4AOIgHACQApgOArgfQAughAKg2QACg3gpgRQgpgRgsACQgpADgGABQEIhWCvgIQCtgHBXAXQBXAWAAAEIB6h9QAGgDA3AJQA4AJAoAyQAkA7AHApQAGApgBACIhuBhQADABADAbQADAdgiA6QgeA2hDAHQhBAIitgFQi5AGiNA8QiIA5gMAKQAFgGAYg1g");
	this.shape_8.setTransform(115.4,199.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DD1948").s().p("Ag3gKQgTgrAFgEQAuA7AsAcQAqAZAIADQhqgdgUgng");
	this.shape_9.setTransform(148.1,189.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DD1948").s().p("AAPgeQArgbADACQhSA9gYAeIgPAUQAlg+AmgYg");
	this.shape_10.setTransform(147.5,176.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BD0027").s().p("AgqgCQApgrAgAAQA7AVgEAIQgBgEgtAEQgrADhSA7QADgHAogpg");
	this.shape_11.setTransform(134.4,169.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DD1948").s().p("AhXAXQg7gKgEgCIA6gBIBwgBQA8gDAjgPQAegPAGgEQgnAvhGAHQgdADgaAAQgmAAgkgGg");
	this.shape_12.setTransform(48.6,142.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DD1948").s().p("AF8D2QgWgEhHg5QhHg5iTiZQhPhQhsgyQhtgxhUgWQhTgWgFAAQAFgBBeAVQBeAWCDBAQCABABwB7QADAEAsAyQAtAyA2AxQA3AxAiAAQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAIgQgDg");
	this.shape_13.setTransform(68.2,196.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A50229").s().p("AgCgHQhkBHgCAJQgEgFBDhDQAugsBkgzQgGADg3A6Qg2A3geBIg");
	this.shape_14.setTransform(92,187.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8E0728").ss(1,1,1).p("AolBuQASgIAegMQBJgfBOgnQBOgmAUgeQAKgegpgmQgqglgugbQgugdgEgBQAGAABSgEQBSgFBcgJQBcgJAigOQAtgbARhTQAShTgshMQgqhDgMgPQgIgKgCgCQALABB2BhQB9BkCWDwQCWDtBWGeQAEAKgXBBQgYBBhagBQhZgUhziAQh0h/i5hvQi/hjh+gWQhogShFAVQgQAFgOAH");
	this.shape_15.setTransform(65.2,163.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BD0027").s().p("AGvJmQhZgUhzh/Qh0iAi5hvQi/hih+gXQhogShFAVIAwgUQBJgfBOgnQBOgmAUgeQAKgegpglQgqgmgugbQgugdgEgBIBYgEQBSgFBcgJQBcgIAigOQAvgcAPhSQAShUgqhMQgshDgMgPIgKgMQALABB2BhQB9BkCWDwQCWDtBWGeQAEAKgXBBQgYBBhYAAIgCgBg");
	this.shape_16.setTransform(66.7,163.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#6D0120").ss(1,1,1).p("AFsFlQACAEgHA6QgGA7glA+QglA+haARQhEAEgziDQgziEgni7Qgpi6gnilQgoikgthAQipjMgJgIQAJACBrBQQBvBTCTCrQCWCrB5EH");
	this.shape_17.setTransform(97.5,164.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A50229").s().p("ABGHsQgziEgni7Qgpi6gnilQgoikgthAQipjMgJgIQAJACBrBQQBvBTCTCrQCWCrB5EHIBSDNQACAEgHA6QgGA7glA+QglA+haARIgEAAQhCAAgxh/g");
	this.shape_18.setTransform(97.5,164.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D0D6D6").s().p("AgNgKQAOgfAeAfQgCgCgTADQgSADgWAhQAAgIARgdg");
	this.shape_19.setTransform(55.6,172.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#91052D").s().p("Ag8BhQA7g7AogxQAjgyAGgwQAGgvgCgEQA1A7gOBWQgDAGhEA9QhDBAhtAtIBAhAg");
	this.shape_20.setTransform(142.4,189.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#6D0120").ss(1,1,1).p("Ai7gxQADgKA5hGQA6hIBMgQQAEABAyAfQAxAfAtA5QArA6gNBMQgDAHhFBAQhGBAhuAu");
	this.shape_21.setTransform(137,184.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A50229").s().p("Ai7gxQADgKA5hGQA6hIBMgQQAEABAyAfQAxAfAtA5QArA5gNBNQgDAHhFBAQhGA/huAvg");
	this.shape_22.setTransform(137,184.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},68).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},31).to({state:[]},27).wait(35));

	// ship
	this.ship = new lib.ship();
	this.ship.setTransform(226.4,115.1,1.252,1,-1.3);
	this.ship._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ship).wait(68).to({_off:false},0).wait(12).to({y:-224.9},8).to({y:115.1},11).to({_off:true},27).wait(35));

	// bathup
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7CFA4").s().p("AhMAxQhFgGgUg9IAsAOQAxANBHACQBFgFAwgZQAugZAEgFQgfAuhIAcQg7AZg4AAIgYgBg");
	this.shape_23.setTransform(168.4,185.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C98F55").ss(1,1,1).p("AC5h6QhKgThbgDQhZgChBAnQhBAoACBnQALBcBSANQBTAOBZgkQBcgkAmg6");
	this.shape_24.setTransform(168.1,177.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEDBB1").s().p("AhoCNQhSgNgLhcQgChnBBgoQBBgnBZACQBbADBKATIANCTQgmA6hcAkQhBAag8AAQgXAAgYgEg");
	this.shape_25.setTransform(168.1,177.1);

	this.instance_1 = new lib.bathup("synched",0);
	this.instance_1.setTransform(210.8,201.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7CFA4").s().p("AhdAtQAAgdApgvQApgwAegDQAtAKASA7QATA6gNAmg");
	this.shape_26.setTransform(190.4,182.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C98F55").ss(1,1,1).p("AhbBhQgCgFgIg9QgIg8AJg4QAJg4AzANQBRAYApA9QAoA8gbBy");
	this.shape_27.setTransform(190.2,177.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEDBB1").s().p("AhbBhQgCgFgIg9QgIg8AJg4QAJg4AzANQBRAYApA9QAoA8gbByg");
	this.shape_28.setTransform(190.2,177.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D0D6D6").s().p("AgCgIQAbgUAMAoQgBgDgTgHQgRgEgkARQAEgGAegRg");
	this.shape_29.setTransform(73.3,133.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A50229").s().p("AgTgLIgqgLIAwAHQAtAHAYAJQAOAKgTAGQgTAGgEAAQgIgXgngLg");
	this.shape_30.setTransform(18.3,162.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A50229").s().p("AgKgCQBDgcAaAEQANALgQATQgRAVgEACQgCgYgkACQgiACgkAJIgnAMQAJgFBFgZg");
	this.shape_31.setTransform(13.6,176.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A50229").s().p("AjIA3QAgggAZgRQB9hFBRgMQBTgNAqALQApAMAAACQgKAtgDACQgjgLg+ABQg+ABgGABQiBAIhNAwQg5AlgQAOIAcgcg");
	this.shape_32.setTransform(36.2,185.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#8E0728").ss(1,1,1).p("Ai7DCQAKgMBFgvQBOg2CCgHQAHgBA+gCQA/gBAkAMQAEgDAKgsQAKgqgag5QgZg5hogpQgGgIhngVQhlgUiHA5QADAAAfAGQAgAFAXAPQAXAPgWAaQgsArg6AoQg6AmgGADQADgBAogLQAogLAogDQAogDADAVQgFAogfA8QgaA1gHAMQgBACgBAB");
	this.shape_33.setTransform(31.6,176.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BD0027").s().p("AiaCDQAfg9AFgoQgDgVgoAEQgoADgoALIgrAMQAGgDA6gmQA6gpAsgqQAWgbgXgOQgXgPgggGQgfgGgDABQCHg6BlAVQBnAVAGAHQBoAqAZA5QAaA5gKAqQgKAsgEACQgkgLg/ABIhFACQiCAIhOA2QhFAvgKAMIAhhBg");
	this.shape_34.setTransform(31.6,176.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_1},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},68).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_1},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},31).to({state:[]},27).wait(35));

	// splash
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(218.7,148.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.water1copy();
	this.instance_3.setTransform(258.9,128.3,0.786,0.786,0,0,180);

	this.instance_4 = new lib.water1copy();
	this.instance_4.setTransform(192.5,164.8,0.998,0.998,0,-34.4,145.6);

	this.instance_5 = new lib.water1copy();
	this.instance_5.setTransform(168.7,174,0.572,0.572);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},80).to({state:[{t:this.instance_2}]},6).to({state:[]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},12).to({state:[]},3).to({state:[]},24).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({x:215.1,y:84.1,alpha:0},6).to({_off:true},1).wait(74));

	// tangan
	this.instance_6 = new lib.Tween8("synched",0);
	this.instance_6.setTransform(254.8,148.2,0.998,0.998,-45.1,0,0,39.6,26.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80).to({_off:false},0).to({regX:40.8,regY:22.7,scaleX:1,scaleY:1,rotation:0,x:260.7,y:141.6},8).to({regX:39.6,regY:26.1,scaleX:1,scaleY:1,rotation:-45.1,x:274.8,y:146.2},10).to({_off:true},1).wait(62));

	// eyes
	this.instance_7 = new lib.Tween9("synched",0);
	this.instance_7.setTransform(280.5,83.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(83).to({_off:false},0).to({x:294.7,y:53.1},4).to({x:293.3,y:77.2},8).to({x:308.7,y:75.7},3).to({_off:true},1).wait(62));

	// head
	this.instance_8 = new lib.head1("synched",0);
	this.instance_8.setTransform(293.9,76.4,1.2,1.2);

	this.instance_9 = new lib.head2("synched",0);
	this.instance_9.setTransform(295.2,81.1);
	this.instance_9._off = true;

	this.instance_10 = new lib.head3("synched",0);
	this.instance_10.setTransform(303.9,65.9,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},68).to({state:[{t:this.instance_9}]},15).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_10}]},4).to({state:[]},27).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(83).to({_off:false},0).to({x:304.3,y:72.5},4).to({x:308.3,y:79.8},8).to({_off:true},4).wait(62));

	// Layer 21
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#C98F55").ss(1,1,1).p("AhqgDQgEgMgCgIQgXg+Agg4QAZgcAoABQA/gBAoAwQAoAwAMA6QAHAdgCAeQgCAdgLAcQgVArgbAa");
	this.shape_35.setTransform(295.4,156);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEDBB1").s().p("AgkB5QgCgJgHgKQgkgwgYg2IgBgDIgGgUQgXg+Agg4QAZgcAoABQA/gBAoAwQAoAwAMA6QAHAdgCAeQgCAdgLAcQgVArgbAaQg1gLgsgmg");
	this.shape_36.setTransform(295.4,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},68).to({state:[]},12).to({state:[{t:this.shape_36},{t:this.shape_35}]},19).to({state:[]},27).wait(35));

	// body
	this.instance_11 = new lib.body("synched",0);
	this.instance_11.setTransform(227.2,181.6,0.999,0.999,-1,0,0,-36,19.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(68).to({_off:false},0).wait(8).to({startPosition:0},0).to({regY:19.6,scaleX:1,scaleY:1,rotation:-6.8,x:223.3,y:181.5},11).to({regY:19.4,scaleX:1,scaleY:1,rotation:-1,x:227.2,y:181.6},12).to({_off:true},27).wait(35));

	// Hands
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#C98F55").ss(1,1,1).p("AgZgcQgGAeAfAMQANAHAOAI");
	this.shape_37.setTransform(234.8,160.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#C98F55").ss(1,1,1).p("AgagcQAAATAUAPQASARAQAG");
	this.shape_38.setTransform(247.2,162.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7CFA4").s().p("ACkB6QgZAAgSgDQgwgFgtgTQgngQgrgdQgrgegbghQgCADgVAEQgUADgOgWQgPgdgBgiQgCgiAbAAQAqAIAOAfQANAdARAfQAvA3BLAOQAiAJAiAJQAjALAjAKQAagBgCASQgIAVgYAAIgCgBg");
	this.shape_39.setTransform(242.5,164.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#C98F55").ss(1,1,1).p("ABXCOQgKAEhngXQhpgWhWhjQgCADgVAEQgUAEgQgYQgPgfAAgmQgBgmAdAAQAeADASAVQARAUAKA2QgBgKADgmQAEgsAggQQAigDAaAyQAXAtADAKQgCgKACguQADg0AngIQAnAFAGAqQAHAqgLARQAHACA0AGQAzAGAWgHQASgNAjgRQAkgRAbAgQA2BRg8gTQhKgZgJgBQgKAugXAbQgWAagCAA");
	this.shape_40.setTransform(251.2,163.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEDBB1").s().p("AgaB7QhpgWhWhjQgCADgVAEQgUAEgQgYQgPgfAAgmQgBgmAdAAQAeADASAVQARAUAKA2QgBgKADgmQAEgsAggQQAigDAaAyQAXAtADAKQgCgKACguQADg0AngIQAnAFAGAqQAHAqgLARQAHACA0AGQAzAGAWgHQASgNAjgRQAkgRAbAgQA2BRg8gTQhKgZgJgBQgKAugXAbQgWAagCAAIgiAzIgGABQgVAAhWgUg");
	this.shape_41.setTransform(251.2,163.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7CFA4").s().p("AACA3QgCgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgtgKQgrgJgygbQgQgJgTgZQgUgbAqgCQAIACAaAYQAbAYAMAGQAyAeA5ACQAagFASgPQASgOAWgDQAkgDAMAOQAJAFAEAJIADAGQACAGAAAFQACADgCAEIgBAEQhRgLgsAJQgmAHgKAAIgDAAg");
	this.shape_42.setTransform(158.3,155.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#C98F55").ss(1,1,1).p("AAOBaQgTgEgmgKQhOgWgmgfQgxgvALgjQAMgiAcAFQAdAMAsAoQArAnAFAFQgBgEAEgbQAEgeAXgMQAXgIAWAJQAWAKgBAkQgDAhgBAIIAAAGQAEgCAmgGQAmgFAXAIQA1AcgPAh");
	this.shape_43.setTransform(156.9,152.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEDBB1").s().p("AgrBMQhOgWgmgfQgxgvALgjQAMgiAcAFQAdAMAsAoQArAnAFAFQgBgEAEgbQAEgeAXgMQAXgIAWAJQAWAKgBAkIgEApIAAAGQAEgCAmgGQAmgFAXAIQA1AcgPAhQhTgahkAfQgTgEgmgKg");
	this.shape_44.setTransform(156.9,152.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).to({state:[]},68).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},58).wait(35));

	// Boat
	this.ship_1 = new lib.ship();
	this.ship_1.setTransform(223.9,114.6,1.24,1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.ship_1).to({_off:true},68).wait(58).to({_off:false},0).wait(35));

	// Head
	this.instance_12 = new lib.head1("synched",0);
	this.instance_12.setTransform(298,64.9,1.199,1.199,-9.6);

	this.instance_13 = new lib.head6("synched",0);
	this.instance_13.setTransform(319.8,70.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.head5("synched",0);
	this.instance_14.setTransform(319.2,76.4);
	this.instance_14._off = true;

	this.instance_15 = new lib.head4("synched",0);
	this.instance_15.setTransform(320.8,77);

	this.instance_16 = new lib.head7("synched",0);
	this.instance_16.setTransform(324.8,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},6).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15,p:{x:320.8,y:77}}]},2).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15,p:{x:316.7,y:72.8}}]},2).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[]},20).to({state:[{t:this.instance_13}]},58).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({startPosition:0},0).to({rotation:-3.3,x:309,y:64.6},3).to({_off:true},2).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11).to({_off:false},0).to({_off:true},2).wait(13).to({_off:false,x:317.8},0).wait(4).to({startPosition:0},0).to({_off:true},3).wait(15).to({_off:false,x:318.8,y:67.7},0).to({_off:true},20).wait(58).to({_off:false},0).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).wait(4).to({regX:3.3,regY:56.1,scaleX:1,scaleY:1,skewX:29.4,skewY:-150.6,x:276.2,y:119.7},0).to({_off:true},3).wait(7).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:322.8,y:76.4},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false,regX:3.3,regY:56.1,scaleX:1,scaleY:1,skewX:29.4,skewY:-150.6,x:295.2,y:123.6},0).to({_off:true},4).wait(113));

	// Boy
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7CFA4").s().p("AAxBLQhygPhXglQhYgkgXgSQgcgaA/gUQADADBBAbQA/AdBcAQQBbAJBKgMQBJgPAFgDIAjA/QhUAmhYAAQgaAAgagDg");
	this.shape_45.setTransform(284.6,182.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#C98F55").ss(1,1,1).p("ADJhQQgLgBhzgKQhxgJhWAEQhPAHgzAUQgzAVAcAYQAZAUBaAoQBbApB3ARQB5AQB3g4");
	this.shape_46.setTransform(283.5,181.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEDBB1").s().p("AAwBeQh3gRhbgpQhagogZgUQgcgYAzgVQAzgUBPgHQBWgEBxAJIB+ALIBXCGQhcAshfAAQgaAAgbgEg");
	this.shape_47.setTransform(283.5,181.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F7CFA4").s().p("AguDKQANggAZgfQAwg9gMhOQgKg9gjg0QgTgUgbgOQgcgNgPgWQgUgwA1AIQAZADAPAGQAhATAcAjQAcAkARAhQAyBggNBaQgOBbhgAhQgRAEgLAAQgbAAAJgWg");
	this.shape_48.setTransform(306.7,165.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#C98F55").ss(1,1,1).p("AgjjsQAEgDAvAaQAxAaA3BeQAzBlgNBgQgOBfhmAjQhcAVgFhJQgFhJgXhCQghg5gVgnQgWgmAAgCQgCgEAEgmQAEgoAagjQAagjBCAJg");
	this.shape_49.setTransform(302.3,165.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEDBB1").s().p("Ag3C2QgFhJgXhCIg2hgIgWgoQgCgEAEgmQAEgoAagjQAagjBCAJQAEgDAvAaQAxAaA3BeQAzBlgNBgQgOBfhmAjQgVAFgQAAQg4AAgEg5g");
	this.shape_50.setTransform(302.3,165.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BD0027").s().p("AAxAHQgpgQhjALQAGgCA4gSQA3gTAeARQApAsgHAFQABgDgqgTg");
	this.shape_51.setTransform(140.4,168.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DD1948").s().p("AAUAtQg/gbgwgkQgvglgDgEIAyAbQAxAYAzAcQA1AZAnADQAjABAGgBQgbAMgdAAQggAAgigPg");
	this.shape_52.setTransform(79.1,103.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DD1948").s().p("ADXGQQgRgOgjhVQgkhUg2jPQgghshGhfQhIhghAg7Qg/g8gDgCQAFABBHBAQBJBABSB3QBUB3AmCiIAQBGQAPBCAZBFQAZBGAdAQIgBABQgDAAgNgLg");
	this.shape_53.setTransform(70.2,160.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A50229").s().p("AgDgXQh7AQgGAHQgBgGBcgbQA+gRBwADQgHAAhMAYQhKAXg9Awg");
	this.shape_54.setTransform(95.5,165.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#8E0728").ss(1,1,1).p("Am+kNQATACAhADQBPAJBXACQBYADAggSQAXgVgSg0QgSg1gcguQgcgvgCgDQAFACBLAkQBKAkBTAkQBWAkAlAEQA1gCA3hAQA4hBgChXQgHhRgDgTQgCgMgBgDQAKAGA6CPQA+CUAREbQAREZh7GVQgCALgzAuQg0AuhPgrQhEg+gpioQgoinhui7Qh4iwhlhRQhShChHgPQgQgDgQgB");
	this.shape_55.setTransform(74.2,140.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BD0027").s().p("ACrKNQhEg+gpioQgoinhui7Qh4iwhlhRQhShChHgPIA0AFQBPAJBXACQBYADAggSQAXgVgSg0QgSg1gcguIgegyIBQAmQBKAkBTAkQBWAkAlAEQA1gCA3hAQA4hBgChXQgHhRgDgTIgDgPQAKAGA6CPQA+CUAREbQAREZh7GVQgCALgzAuQgbAYgiAAQggAAgmgVg");
	this.shape_56.setTransform(75.8,140.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#6D0120").ss(1,1,1).p("ACTIMQAAAEgiAxQgiAxg+AlQg9AlhXgcQg9geASiMQASiMA2i5QA2i2AtikQAqilgKhNQgwkEgEgMQAHAGA2B6QA5B+AyDeQAxDdgUEj");
	this.shape_57.setTransform(111.2,142.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A50229").s().p("AiDKgQg9geASiMQASiMA2i5QA2i2AtikQAqilgKhNQgwkEgEgMQAHAGA2B6QA5B+AyDeQAxDdgUEjIgbDbQAAAEgiAxQgiAxg+AlQgiAVgrAAQghAAgmgMg");
	this.shape_58.setTransform(111.2,142.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D0D6D6").s().p("AgCgIQAbgUAMAoQgCgDgSgHQgRgEgkARQAEgGAegRg");
	this.shape_59.setTransform(70.2,132.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#91052D").s().p("AirBZQAIgCBQgYQBQgYA7gYQA3gZAcgoQAcgnAAgEQASBOg1BDQgGAEhaAXQg4APhFAAQgnAAgrgFg");
	this.shape_60.setTransform(137.1,188.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#6D0120").ss(1,1,1).p("AiWh1QAHgHBVgjQBTgiBLAXQAFADAcAzQAdAyALBGQALBIgyA+QgFAFhbAXQhbAXh5gN");
	this.shape_61.setTransform(137.4,180.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A50229").s().p("AiuCwIAYklQAHgHBVgjQBTgiBLAXQAFADAcAzQAdAyALBGQALBIgyA+QgFAFhbAXQg6APhIAAQgnAAgrgFg");
	this.shape_62.setTransform(137.4,180.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F7CFA4").s().p("AhMAxQhFgGgUg9IAsAOQAxANBHACQBFgFAwgZQAugZAEgFQgfAuhIAcQg7AZg4AAIgYgBg");
	this.shape_63.setTransform(165.3,184.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#C98F55").ss(1,1,1).p("AC5h6QhKgThbgDQhYgChCAnQhBAoACBnQALBcBSANQBTAOBZgkQBcgkAmg6");
	this.shape_64.setTransform(165,175.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FEDBB1").s().p("AhoCNQhSgNgLhcQgChnBBgoQBCgnBYACQBbADBKATIANCTQgmA6hcAkQhBAag8AAQgXAAgYgEg");
	this.shape_65.setTransform(165,175.5);

	this.instance_17 = new lib.BathTub("synched",0);
	this.instance_17.setTransform(209.3,199.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7CFA4").s().p("AhdAtQAAgdApgvQApgwAegDQAtAKASA7QATA6gNAmg");
	this.shape_66.setTransform(187.3,181.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#C98F55").ss(1,1,1).p("AhbBhQgCgFgIg9QgIg8AJg4QAJg4AzANQBRAYApA9QAoA8gbBy");
	this.shape_67.setTransform(187.1,176);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FEDBB1").s().p("AhbBhQgCgFgIg9QgIg8AJg4QAJg4AzANQBRAYApA9QAoA8gbByg");
	this.shape_68.setTransform(187.1,176);

	this.instance_18 = new lib.celana("synched",0);
	this.instance_18.setTransform(213.8,185.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DD1948").s().p("AA9AlQhMg6hrhCIgUgNQA7AeBBAmQBqA+A3BHIhShAg");
	this.shape_69.setTransform(50.5,119.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DD1948").s().p("Ag5AFQBXgUA8gDIAIAAIgjAHQg9AMgEADIgoAHQgjAGgQABIgCABQgLAAAxgOg");
	this.shape_70.setTransform(17.3,138.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DD1948").s().p("ABCAEQg/AAgFAAIgogBQgkgDgQgBQgQgCA3gCQBZAAA8AKIAEABIgggCg");
	this.shape_71.setTransform(20.1,118.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A50229").s().p("AA/BHQgYgGgEgCIh4iHQAKAGBLA2QBIAyAOAYQAAALgLAAQgFAAgHgCg");
	this.shape_72.setTransform(25.6,111.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A50229").s().p("ACvBCQhIgUgFgEQjlhPiBgNQhtgLgSABQCNgdCBAfQCAAeBWAfQBaAYBggLQBhgLAIgEQgPAngzAXQgpAMgnAAQgiAAghgJg");
	this.shape_73.setTransform(39,148);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A50229").s().p("ABfBfQgxgDgIgCQAUgFAOgSQAOgcg2glQgzgkg8gdQg8gdgFgCQCEAcBLA0QBMAxAGAjQgCAZgnAAIgJAAg");
	this.shape_74.setTransform(17.1,127.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#8E0728").ss(1,1,1).p("AGLBjQgEgHhghaQhhhXiPhXQiPhZiUAAIB4CGQgFgChNgFQhNgEheAOQAFACA9AdQA7AdA2AmQA2AkgOAbQgbAfg2gBQg3gBhtAyQAMgBB1AMQCBAPDlBVQAGAFBIAVQBIAVBLgYQBCgiAIg4QAIg3gEgGg");
	this.shape_75.setTransform(39.6,130.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BD0027").s().p("ACqD9QhIgVgGgFQjlhViBgPQh1gMgMABQBtgyA3ABQA2ABAbgfQAOgbg2gkQg2gmg7gdIhCgfQBegOBNAEQBNAFAFACIh4iGQCUAACPBZQCPBXBhBXQBgBaAEAHQAEAGgIA3QgIA4hCAiQgoAMgnAAQgiAAgigJg");
	this.shape_76.setTransform(39.6,130.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7CFA4").s().p("An/FjQgTgKgHguQgHgvADgTQAahRBOgeQA5gRA3gMQA4gNA3gZQBwg6BphFQBbgqA4hQQAohVg3hPQBgAGBbgQQAbgFAZgKICpAAQhiAsigAAIAKBOQAIBLACBYQACBZgTAtQgeBHhgBiQhgBiimA3QhRAahkAAQhpAAh9gdg");
	this.shape_77.setTransform(271.6,169.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#C98F55").ss(1,1,1).p("AGmlmQACAVAEArQAIBNABBaQABBagTAtQgeBIhiBiQhgBjipA3QinA3j1g7QgFgEgahKQgZhLAIheQAIhcBgg9QCeheCIhtQBBg1Aqge");
	this.shape_78.setTransform(259.1,172.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FEDBB1").s().p("AmCFIQgFgEgahKQgZhLAIheQAIhcBgg9QCeheCIhtQBBg1AqgeIFfAAIAGBAQAIBNABBaQABBagTAtQgeBIhiBiQhgBjipA3QhQAbhkAAQhqAAh+gfg");
	this.shape_79.setTransform(259.1,172.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.instance_18},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_17},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).to({state:[]},68).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.instance_18},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_17},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},58).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4.4,396.6,304.2);


(lib.Shiptween = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ship2("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(1,152,184,0.6)").s().p("AjaAcQhagMAAgQQAAgPBagMQBbgMB/AAQCAAABaAMQBbALAAAQQAAAQhbAMQhaAMiAgBQh/ABhbgMg");
	this.shape.setTransform(2.6,9.2);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.1,-10.8,78.2,24);


(lib.instructions_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.head("synched",0);
	this.instance.setTransform(57.7,-8.6,1,1,0,0,0,0.7,61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:60.6,scaleX:1,scaleY:1,rotation:-23.8,x:53.1,y:-8.5},6).to({regY:61.9,scaleX:1,scaleY:1,rotation:0,x:57.7,y:-8.6},6).wait(88));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD1948").s().p("AgwgLIAfALQAbALAngFQgCADgeADIgGAAQgaAAghgXg");
	this.shape.setTransform(23.4,68.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD1948").s().p("AggAeQgzgMgCgIQBRAQAvgcQAfgTAMgKQg/A/gqAAQgHAAgGgCg");
	this.shape_1.setTransform(51,79.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD1948").s().p("AAHgVQgEgBgNgMQgOgMAQgIQgBAEAHANQASAVACgBIgPAUQgLAUgHAgQgJgIAfhEgAASgRIAAAAIAAAAg");
	this.shape_2.setTransform(18.5,60.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD1948").s().p("AgEgkQATgaAEACQgaAfgFArQgFAlABAKQgIhIAUgZg");
	this.shape_3.setTransform(42.4,73.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DD1948").s().p("AgKgSQAXgRAIABQgpAWAMAYQAIARADAHQgmgmAZgQg");
	this.shape_4.setTransform(44.1,62.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD1948").s().p("AhIAmQBPhPCVhTQgQAJhcBCQhkBHhoBoQACgHBShRg");
	this.shape_5.setTransform(22.4,94.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DD1948").s().p("AgWgPQBhgUBFgGIBHgFQi9AZh2AgQhsAfgOAFQBdgrBjgTg");
	this.shape_6.setTransform(-9.9,72.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A50229").s().p("AA4ATQgQgVgfgPQgdgMgZgEIgagFQAGgFA4AHQA0AGAdBHIgQgWg");
	this.shape_7.setTransform(39.7,92.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A50229").s().p("AgDgZQgkgbgHgBQBQANAIArQAIAtgFAGQgMg1gkgag");
	this.shape_8.setTransform(4.1,76);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A50229").s().p("AiJDfQgMgmgjggQgjghhEANQACgCAFgaQAFgagNggQgSgfgagOIgcgLQBJAEAQA2QAPA5gDAIQBSAAAgA4QAgA4gBAIQgCADAYgUQAZgTBNhBQA6guBLg0QBLgyA4gsQA5grABgXQgHghgigOQgigPgFAAIANgLQAMgLAHgQQADgRgNgLQgNgKgCgBQAfADANAPQAMAPgfAeQA9AVAMA3QANA2gfA0QgXAUgeAOQgbAPhVAmQhWAnhYAzQhYA0glA3QABgEgNgmg");
	this.shape_9.setTransform(-1.7,79.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8E0728").ss(1,1,1).p("AC9jOQgqgiAtgPQAtgQAtAMQAtAMgrAuQA8AWANA2QANA2ggA0QgWAUgeAOQgbAPhVAnQhWAmhYAzQhYA0glA3QABgEgNgmQgMgmgjggQgkghhDANQACgBAFgbQAFgagNggQgSgegagOQgagMgCAAQgEgFB8gvQB8gvEfgeg");
	this.shape_10.setTransform(-1.7,79.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BD0027").s().p("AiJDfQgMgmgjggQgkghhDANQACgBAFgbQAFgagNggQgSgegagOQgagMgCAAQgEgFB8gvQB8gvEfgeIAShEQgqgiAtgPQAtgQAtAMQAtAMgrAuQA8AWANA2QANA2ggA0QgWAUgeAOQgbAPhVAnQhWAmhYAzQhYA0glA3QABgEgNgmg");
	this.shape_11.setTransform(-1.7,79.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A50229").s().p("AhpEEQg8gGgGAHQgdhZhCgDQg6gDgOAFQA+geApAQQAqARAUAdQAUAcAAADQA/gjAiATQAiATAOAgQALAhAAADQARhJBJhsQBJhrBGhaQBGhbANgYQAFgUgigWQgigVgkgPIgngQQAFgGAFgvQgDgUgZgHQgYgHgEAAQAOgBAOADQA1AOgEAaQgEAZgEADQBZAcAaAiQAZAigGAZQgFAZgDABQhPBahMB3QhMB5gyBeIgzBiQgqhng9gHg");
	this.shape_12.setTransform(34,94.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8E0728").ss(1,1,1).p("AFUiyQAFgZgZgiQgZgihagcQAFgDADgZQAEgag0gOQgxgIgjAZQgmAbAwAvQgDgDgSAXQgSAXgBBVQgEABhEAtQhGAshcBHQhbBJhBBWQAIgGBCADQBCADAdBZQAGgHA9AGQA9AGAqBoQAAgFAyheQAyhdBMh5QBNh3BPhaQACgBAGgZg");
	this.shape_13.setTransform(33.9,94.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BD0027").s().p("AhnEEQg9gGgGAHQgdhZhCgDQhCgDgIAGQBBhWBbhJQBchHBGgsQBEgtAEgBQABhVASgXQASgXADADQgwgvAmgbQAjgZAxAIQA0AOgEAaQgDAZgFADQBaAcAZAiQAZAigFAZQgGAZgCABQhPBahNB3QhMB5gyBdIgyBjQgqhog9gGg");
	this.shape_14.setTransform(33.9,94.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7CFA4").s().p("AgTBZIgOgcIgIgRIAzgOQgYgtAGgQQAGgNACgBQgWgDgSgPQgSgOgBgCQAEgRAOgDQACgDAcAFQAaAGAZAsQgDgBgOAFQgPAFADARQAHAVAUAsIAWAxQgDACgdAFIgNABQgTAAgPgMg");
	this.shape_15.setTransform(45.2,51.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C98F55").ss(1,1,1).p("AAbguQgQAFADATQAIAWAWAvQAWAvADAGQgDACghAFQghAFgUgRQgOgXgLgZQgJgWgGgXQgGgUgCgoQgCgnAZgJQACgDAgAGQAdAGAcAvQgCgBgRAFg");
	this.shape_16.setTransform(45.4,52.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEDBB1").s().p("AgUBfQgOgXgLgZQgJgWgGgXQgGgUgCgoQgCgnAZgJQACgDAgAGQAdAGAcAvQgCgBgRAFQgQAFADATQAIAWAWAvIAZA1QgDACghAFIgOABQgWAAgRgNg");
	this.shape_17.setTransform(45.4,52.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7CFA4").s().p("AgJBSIARgDQALgFACgKIABgLQgWg8AEgVQAEgVACACQgOgcgbgKQgbgJgDAAQAIgOADACQA3gMAZAvQAZAvAAAIQgBgBgIgEQgJgEgNAJQgJAQAWAyQAVAyAEAGIg7ADIgMgbg");
	this.shape_18.setTransform(18.1,42.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C98F55").ss(1,1,1).p("AA8gQQAAgJgbgxQgbgwg6AMQgHgGgHAmQgGAmBMCZIA/gCQgEgHgXg0QgWg0AJgQQANgKAKAEQAJAEABACg");
	this.shape_19.setTransform(17.8,42.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEDBB1").s().p("AhChOQAHgmAHAGQA6gMAbAwQAbAxAAAJQgBgCgJgEQgKgEgNAKQgJAQAWA0QAXA0AEAHIg/ACQhMiZAGgmg");
	this.shape_20.setTransform(17.8,42.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C47833").s().p("AAtBYQgtgFgwgmQgvgmgBhdQABgDAggCQAfgCAqAlQAtAlAqBuIgGABQgMAAgigEg");
	this.shape_21.setTransform(48.5,49.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2A253").s().p("AguBSQg9gCgvgrIA6gCIBcgEQAogHAigYQAeghgXgqQABgEAEgCIAlA2QAcApAIAEQgHABg2ATQg3ATgTAYQgEABgWAAIgoAAg");
	this.shape_22.setTransform(57.6,51);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DB8C3E").ss(1,1,1).p("ACxBSQgHABg1ASQg0ATgUAXQgGADg7gEQg9gEgvgrQg0hAAFgqQAEgsAFgCQAEgCA4gbQA5gaBCgf");
	this.shape_23.setTransform(55,45.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDB462").s().p("AgUCOQg9gEgvgrQg0hAAFgqQAEgsAFgCIA8gdIB7g5ICgDhQgHABg1ASQg0ATgUAXQgDABgKAAQgRAAgjgCg");
	this.shape_24.setTransform(55,45.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C47833").s().p("AAfBgQghgLgiguQghgrABhlQADgBAjAQQAiARAhAuQAiAsgCBZIgCAAQgGAAgegKg");
	this.shape_25.setTransform(22.9,41.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2A253").s().p("AixBBIABAAQgBgBAAgGQAAgIAYgjQAOgRAagTQABgGgOgZIgRgdIAZAXQAWAUAFABQAmgZApgSQAngSAggEQAvgDAkATQAiATACADQgVAYgMAdQhUgQhFAtQg8AngKAXQgJAXAEABQg7gNgjgag");
	this.shape_26.setTransform(41.1,43.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#DB8C3E").ss(1,1,1).p("ADjggQgXAYgLAdQhXgQhJAwQg9AogJAYQgJAYADAAQhngZgmg5Qgmg6gDgxQgDgzADgDQA8gaBCgHQA0gNAvAR");
	this.shape_27.setTransform(37.1,40.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2A253").s().p("AgNBiIA3gQQAzgQAmgQQAegRABgUQABgTgCgCQhSg7hAgMQg9gNgDADQAAgCgOgQQgOgQgXgLQgzgSgsgCQgtgDgDABIAZgQQDqAnBwA6QBvA7gBAGQAJAygFAdQgFAdglAbQgtAeg3AGIgtAEQgkADgDAFIgdhLg");
	this.shape_28.setTransform(60.9,39.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#DB8C3E").ss(1,1,1).p("ACThKQhyg8jqgnQgCAAgXAPQgXAQgPAZQBWAOBLAsQAGAFAGAFQAvAsAfA7QAcA9AXA7QADgEAkgEQAjgDAKgBQA2gFAugfQAkgaAGgeQAFgdgJgyQABgFhyg8g");
	this.shape_29.setTransform(58.7,39.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDB462").s().p("AgNA1Qgfg6gvgsIgMgJQhLguhWgNQAPgZAXgPIAZgQQDqAmByA9QByA7gBAGQAJAygFAdQgGAdgkAbQguAfg2AFIgtAEQgkAEgDAEQgXg7gcg+g");
	this.shape_30.setTransform(58.7,39.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7DE7FF").s().p("AjQAPIAhggIGAAHIhcAKQhXAHhhAHQg2AEglAAQgfAAgTgDg");
	this.shape_31.setTransform(-16.6,64.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

	// body
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(59.9,32.8,1,1,0,0,0,-19.4,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-18.3,regY:11.1,scaleX:1,scaleY:1,rotation:-8.7,x:60.5,y:30.1},6).to({regX:-19.4,regY:10.8,scaleX:1,scaleY:1,rotation:0,x:59.9,y:32.8},6).wait(88));

	// hand
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(61.9,-6.2,1,1,0,0,0,23.7,-18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:22.9,regY:-15.6,scaleX:1,scaleY:1,rotation:22.3,x:48.1,y:4.5},6).to({regX:23.7,regY:-18.6,scaleX:1,scaleY:1,rotation:0,x:61.9,y:-6.2},6).wait(88));

	// anim_ship
	this.instance_3 = new lib.Shiptween("synched",0);
	this.instance_3.setTransform(-13.9,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-37.9,y:19.3},4).to({x:-61.9,y:22.8},4).to({x:-91.9,y:19.1},5).to({x:-61.9,y:22.8},8).to({x:-37.9,y:19.3},7).to({x:-13.9,y:22.7},8).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-133.5,172.9,266);


(lib.brushHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,clicked1:5,clicked1_done:19,clicked2:20,clicked2_done:36});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_19 = function() {
        this.stop();
		/* stop();*/
	}
	this.frame_20 = function() {
		/* //changeActiveState(true);
		//winceTheBoy();
		//_global.main.boy.gotoAndStop("wince")*/
	}
	this.frame_36 = function() {
		/* gotoAndStop(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(16).call(this.frame_36).wait(1));

	// bubbles
	this.instance = new lib.soapBubbles2();
	this.instance.setTransform(34.4,3,0.74,0.74,75,0,0,9.8,14.2);

	this.instance_1 = new lib.soapBubbles1();
	this.instance_1.setTransform(14.2,10.6,0.62,1.022,30,0,0,17.9,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},19).to({state:[]},1).wait(17));

	// brush3
	this.instance_2 = new lib.brush3();
	this.instance_2.setTransform(40.7,15.2,1,1,0,0,0,42.5,22.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(1).to({rotation:-165,x:309.6,y:-298.2},0).to({x:328.2,y:-300.1},3).to({x:310.8,y:-301.4},3).to({x:331.4,y:-296.9},3).to({x:312.8,y:-298.8},3).to({x:328.8,y:-295.5},3).wait(1));

	// brush2
	this.instance_3 = new lib.brush2();
	this.instance_3.setTransform(199.3,30.2,1,1,-165,0,0,41.6,20.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:210.2,y:29.5},3).to({x:202.5,y:30.2},3).to({x:207},3).to({x:203.8,y:30.8},3).to({_off:true},1).wait(18));

	// brush
	this.instance_4 = new lib.brush();
	this.instance_4.setTransform(41.6,18.7,1,1,0,0,0,41.6,18.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,84.4,38.4);


(lib.bubbleScoreIndv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"pop":5});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
		/* stop();
		*/
	}
	this.frame_10 = function() {
		/* _parent.gotoAndStop("fade");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

	// Bubble
	this.instance = new lib.bubble2("synched",0);
	this.instance.setTransform(-0.9,0.5);

	this.instance_1 = new lib.pecah1("synched",0);
	this.instance_1.setTransform(2.4,-0.7);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.pecah2("synched",0);
	this.instance_2.setTransform(9.3,-8.4);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},3).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:1.25,scaleY:1.25,alpha:0},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-21,42.9,42);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fadeIn:0,"static":25,fadeOut:60});

	// timeline functions:
	this.frame_59 = function() {
		/* gotoAndPlay("static");*/
	}
	this.frame_75 = function() {
        this.stop();
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(16).call(this.frame_75).wait(1));

	// bubbles
	this.point = new lib.bubbleScoreIndv();
	this.point.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.point).to({alpha:0.5},24,cjs.Ease.get(1)).wait(1).to({alpha:0.801},17).to({alpha:0.5},17).wait(1).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-20.5,41.9,41);


(lib.instructions_pic = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.instructions_anim();
	this.instance.setTransform(20.6,2.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBgHIAIgDQAIADgCAIIgUAKQgNgMATgGg");
	this.shape.setTransform(111,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQgQIASADQAXAGAFARQgQgFgOgCQgMgCgKAQQgRgUAXgNg");
	this.shape_1.setTransform(132.1,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPALQgDgOAJgGIAAgDQAdgBgEAbQgOgSgRAPg");
	this.shape_2.setTransform(142.7,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAMQgHgMANgFIARgGQAVAGgFARQgVgRgSARg");
	this.shape_3.setTransform(158.7,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArAVQgLgpggAMQggAKgXgHQAGgHAKABIAKgEQAagQAiAMQAlANgRAfQgDgDgFgBg");
	this.shape_4.setTransform(153.4,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAhQgHgTALgDQAKgDAJgJQADgMgEgMQgDgLAXAHIgJgDQAagDAFAZQgKgFgLgBQAEARABATQgWgHgIAUIgJAAIgJAAg");
	this.shape_5.setTransform(133.6,4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAFQgIAFgJgBIgBgRIAPgPQAXASgBAdQgLgHgIgMg");
	this.shape_6.setTransform(-44.3,88.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAIQgXgTgjAUQABggAcAPIAPgPQAkAOAlAPIAAASIgOAAQgcAAgRgQg");
	this.shape_7.setTransform(-48.3,69.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAqQgGgsgngSQAHgMAOACIAKgKQAOgBAJALQgOASAJAPQAKARAEAWIgSAAg");
	this.shape_8.setTransform(-38.6,58.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1AVQAKgfAwgPQgFgFgBgKQAQABAQAEIAFgFQAPADAFAMIgnAFIgHATQgggJgZAXIAXAUQgPAIgIAAQgMAAAGgUg");
	this.shape_9.setTransform(-56,60.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYgDQAPgSASASIgEgKQALAEAJAJIgHAOIgCAAQgXAAgRgRg");
	this.shape_10.setTransform(-26.2,65.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAFQAAgmAlALIgKAAIAYAKQAEASgEATQgYgQgbgEg");
	this.shape_11.setTransform(-33.9,46.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#4FB4E0").ss(1,1,1).p("AB4jFQAPgsgcgXQgbgWggAMQggALADA8Qgig8gsAnQgtAnAoAiQgYgNgoABQgnABgFAiQgxATgBAqQAAArA2AKQgMAVAOAbQAOAaAcgEQgOAXAYASQAYARAVgKQgZAPgHAZQgIAYAYAVQgkAvAsAaQArAaAsgMQAugMgdhAQgUghgUgfQAVgMAegfQAegfgigYQAbAKAdgPQAcgOgQgfQA1AoApgdQApgfgzgsQAwgFgOgrQgPgrgfAPQAbgegZgSQgagRgdAWQAFgEAEgD");
	this.shape_12.setTransform(-42,69.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CAEAF9").s().p("AhNEGQgsgaAkgvQgYgVAIgYQAHgZAZgPQgVAKgYgRQgYgSAOgXQgcAEgOgaQgOgbAMgVQg2gKAAgrQABgqAxgTQAFgiAngBQAogBAYANQgogiAtgnQAsgnAiA8QgDg8AggLQAggMAbAWQAcAXgPAsIAKgFIgJAHQAdgWAaARQAZASgbAeQAfgPAPArQAOArgwAFQAzAsgpAfQgpAdg1goQAQAfgcAOQgdAPgbgKQAiAYgeAfQgeAfgVAMQAUAfAUAhQAdBAguAMQgMAEgOAAQgfAAgegSg");
	this.shape_13.setTransform(-42,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7DE7FF").s().p("AFfBjIjagnIjNgkQiAgNh4gNQh1gPgPhkQADAFANANQATAVBUAZQBUAZC+AOQEcAYB0AzQB0AzgFAGIhlgTg");
	this.shape_14.setTransform(-112.4,45.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#938C07").s().p("AhUAAQAHgNBNgBQBOABAHANQgHAOhOABQhNgBgHgOg");
	this.shape_15.setTransform(-143.5,-11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C6C110").s().p("AgNgfQAXADAEgDQgLAMAAAXQAAAYABAEg");
	this.shape_16.setTransform(-149.6,-3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C6C110").s().p("AgXBOQACAAAPgQQANgRACgqQgIhOgHgBIAfgCQgGAGgGAYIADA3QABAfgOATQgRAVgFABIgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAABAAg");
	this.shape_17.setTransform(-138,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C6C110").s().p("AhCAZIA/gFQA1gEADgLQgIgJgagKQgXgLgEAAQAGAAAiAKQAkAKgBAKQgKAMgtAGQgZADgXAAQgQAAgOgBg");
	this.shape_18.setTransform(-138.8,-11.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D0D6D6").s().p("AAIgcIgEA1IgLAEQAEgHALgyg");
	this.shape_19.setTransform(-141.8,14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D0D6D6").s().p("AgFAIQAHgGgHgOQAFAAAJAIQAKAEgdANIAFgFg");
	this.shape_20.setTransform(-135.2,29.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D0D6D6").s().p("AAPADQgPgEgeALQAEgFAagMQAXgOAIAhQgBgCgPgHg");
	this.shape_21.setTransform(-126.4,12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D0D6D6").s().p("AAOgPQAAABgNAEQgJADgOgFQALAAAigQIgDA5g");
	this.shape_22.setTransform(-141,22.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B8C8C").s().p("ABBAZIgIgRQgGgOgPgHQgVgCgqARIgxAWQAFgEAxgYQAvgZAWAFQARAMAHAQIAGAVg");
	this.shape_23.setTransform(-130.3,16.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#848000").s().p("AgfAtQgMgjgBggQAEg+AoADQApgDAEA+QgBAggNAjQgMAigTADQgSgDgNgig");
	this.shape_24.setTransform(-143.7,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#848000").s().p("AgXAOQgGgqAMgWQAPgPANACQAOACABACIAAAwQABABgFASQgFAUgSAXIgPANQgCgGgFgsg");
	this.shape_25.setTransform(-132.6,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#848000").s().p("AAAA8QgXgZgEgWQgEgVABgBIAAg9QADgDAYgDQAWgDAJAfQAFAlgCApQgCAsgBADQgRgHgLgKg");
	this.shape_26.setTransform(-154.1,-0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#848000").ss(1,1,1).p("ACUAOQABABgGAVQgFAWgWAZQgnAnhMAFQhLgDgmgiQgagagFgYQgFgZACgBIAAhYQgBgEAkgWQAkgXBOgDQBOAEAiAWQAhAWAAAEg");
	this.shape_27.setTransform(-143.6,-3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A3A300").s().p("AhwBaQgagagFgYQgFgZACgBIAAhYQgBgEAkgWQAkgXBOgDQBOAEAiAWQAhAWAAAEIAABYQABABgGAVQgFAWgWAZQgnAnhMAFQhLgDgmgig");
	this.shape_28.setTransform(-143.6,-3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8B8C8C").s().p("AgVAkIAAhOIArAAIAAAhIgNADQgJACgHgDIgHAyIgHgHg");
	this.shape_29.setTransform(-143.2,12.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#656868").ss(1,1,1).p("AAZAmQAFAFgeAHQgZgFAAgHIAAhXIAyAAg");
	this.shape_30.setTransform(-143.2,12.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AgZAmIAAhXIAyAAIAABXQAFAFgeAHQgZgFAAgHg");
	this.shape_31.setTransform(-143.2,12.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8B8C8C").s().p("AgWBIQgggPgBgFIAAhsQBCggAkASQABACgEAQQgDAQgVAHQgzAFgHgGIgCBJQABAFAdALQAbALAngiIAAASQgiAXgXAAQgMAAgJgFg");
	this.shape_32.setTransform(-143.7,22.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#656868").ss(1,1,1).p("ABthiQgOAAgrAYQgrAYgUAEQgBgEgkgKQgkgKg6AdIAAByQABAFAiAQQAhAQA0gjIAAhWQAFgDAqgTQAsgTAVAHQAcAegEAHQABABAMgBQANgBACgOQgBgEgLggQgMgfgJgIg");
	this.shape_33.setTransform(-135.3,20.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhrBeQgigQgBgFIAAhyQA5gdAlAKQAlAKABAEQASgEAsgYQAsgYANAAQAJAIAMAfIAMAkQgCAOgNABQgMABgBgBQAFgHgdgeQgVgHgsATQgqATgFADIAABWQgjAYgbAAQgMAAgLgFg");
	this.shape_34.setTransform(-135.3,20.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#656868").ss(1,1,1).p("ABsAAQgBAPgfALQgeALguAAQgsAAgfgLQgegLgBgPQABgPAegKQAfgLAsAAQAuAAAeALQAfAKABAPg");
	this.shape_35.setTransform(-143.3,29.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AhLAaQgfgLgBgPQABgPAfgKQAegLAtAAQAuAAAeALQAeAKABAPQgBAPgeALQgeALguAAQgtAAgegLg");
	this.shape_36.setTransform(-143.3,29.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#656868").ss(1,1,1).p("ABrAAQgBAPgeALQgfALgtAAQgtAAgegLQgfgLgBgPQABgPAfgKQAegLAtAAQAtAAAfALQAeAKABAPg");
	this.shape_37.setTransform(-143.4,31);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#777776").s().p("AhLAaQgfgLAAgPQAAgPAfgKQAegLAtAAQAtAAAfALQAfAKABAPQgBAPgfALQgfALgtAAQgtAAgegLg");
	this.shape_38.setTransform(-143.4,31);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgzgHQAZAAAdAHQAeAEgCgWIAPAFQAJAOgEASIgQAAQgxAAglgag");
	this.shape_39.setTransform(-89.5,33.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAJA1QAIgRAPgHQAPgHABgWQglgPgjgNIAOgBQgWgFgWADQgXADgWgHQANgWA7AHQA6AHAaAJIAbAMQAXALgKAGQgZALgRAZQgQAWgaAAIgEAAg");
	this.shape_40.setTransform(17.3,31.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AggAqQgOgGgggTQgggRgLAAQAjgHAqAQQApATATgTQgLgHgIgHQAWgTAlgQQAlgRAdAMQgZgHgsATQgsATAqAWIgFAFQAVADAIARQgfASggAAQgVAAgXgJg");
	this.shape_41.setTransform(-20.4,39.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#59CBEF").s().p("Aj+DvQByhIBohvQBmhtBWijIBngpQACAEgbBUQgbBThTB1QhSB3ijBsg");
	this.shape_42.setTransform(108.5,91.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#59CBEF").s().p("AinBDQCbgfDTiAIByASQh0BKifAtQiXAsjHAEQAkgFBtgVg");
	this.shape_43.setTransform(61.1,126.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2BA6CC").s().p("AAUADQgdgIgrgCQAGgEAugCQAVADAQAKQAPAMABACQgCgBgfgKg");
	this.shape_44.setTransform(-131.6,24.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0877AF").ss(1,1,1).p("AhAggQAFAEAdAqQAdArABAgQACAEAaAFQAZAEALgoQADgHgGg7QgGg8gxgh");
	this.shape_45.setTransform(73.5,138.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1795E2").s().p("AAcBiQgagFgCgEQgBgggdgrQgdgqgFgEIBGhBQAxAhAGA8QAGA7gDAHQgKAkgWAAIgEAAg");
	this.shape_46.setTransform(73.5,138.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0877AF").ss(1,1,1).p("ACDAAQgBAYglAQQgmAPg3ABQg2gBgmgPQglgQgBgYQABgXAlgQQAmgPA2gBQA4ABAlAPQAlAQABAXg");
	this.shape_47.setTransform(81.5,147.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#118CB7").s().p("AhcAnQglgPgBgYQABgWAlgRQAmgQA2AAQA4AAAlAQQAlARABAWQgBAYglAPQgmAQg3ABQg2gBgmgQg");
	this.shape_48.setTransform(81.5,147.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#0877AF").ss(1,1,1).p("AgHhCQgEACgWAlQgVAjAQAyQAAACAOAGQANAFAagQQgEgGgEgvQgEguArgT");
	this.shape_49.setTransform(-68,137.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#118CB7").s().p("AgYBCQgOgGAAgCQgQgyAVgjQAWglAEgCIA1ADQgrATAEAuQAEAvAEAGQgTAMgNAAQgEAAgDgBg");
	this.shape_50.setTransform(-68,137.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#0877AF").ss(1,1,1).p("ACDAAQgBAbglASQglATg4ABQg2gBgmgTQglgSgBgbQABgaAlgSQAmgTA2gBQA4ABAlATQAlASABAag");
	this.shape_51.setTransform(-71.7,146.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#118CB7").s().p("AhcAuQglgTgBgbQABgaAlgTQAmgSA2gBQA4ABAlASQAlATABAaQgBAbglATQglASg4ABQg2gBgmgSg");
	this.shape_52.setTransform(-71.7,146.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#4FB4E0").ss(1,1,1).p("ABtBLQALAUATgRQgNAbAQARQARASAVgYQAAAeAWAYQAWAXAfgIQAZgLAEgcQAEgbgegGQAigFgBghQgMgagfgJQAohDg0gQQg0gRg4AGQAGgJgMgIQgMgIgMgDQAYgUgUgZQgUgagiAUQAMgfgbgOQgbgOgYAKQgaAJAOAnQgigSgEAmQgkgbgUAgQgUAgAYANQABAAABABQg3gEgKA2QgWgXggAGQgQgCgLAAQgLABgJASQgLAOAIARQAEAFAOAFQAOAGAFgDQgQAXAjAPQAjAPAGgmQAMAgAnADQAnADACgmQAHAbAdgEQADgGACgHQAGATAUgBQATgBgBgWQAEAUARADQASADALgPQgUAcAYAJQAZAJAbgIQAXgGgHgTQgBgDgCgD");
	this.shape_53.setTransform(135,15.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CAEAF9").s().p("ADKCqQgWgYAAgeQgVAYgRgSQgQgRANgbQgTARgLgUIgDgGIADAGQAHATgXAGQgbAIgZgJQgYgJAUgcQgLAPgSgDQgRgDgEgUQABAWgTABQgUABgGgTQgCAHgDAGQgdAEgHgbQgCAmgngDQgngDgMggQgGAmgjgPQgjgPAQgXQgFADgOgGQgOgFgEgFQgIgRALgOQAJgSALgBQALAAAQACQAggGAWAXQAKg2A3AEIgCgBQgYgNAUggQAUggAkAbQAEgmAiASQgOgnAagJQAYgKAbAOQAbAOgMAfQAigUAUAaQAUAZgYAUQAMADAMAIQAMAIgGAJQA4gGA0ARQA0AQgoBDQAfAJAMAaQABAhgiAFQAeAGgEAbQgEAcgZALQgIACgHAAQgVAAgRgRg");
	this.shape_54.setTransform(135,15.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DEF5FC").s().p("AlXCQQjTgMhLgYQhUgchUgaQgsgLhCgUQhDgVgTgtQgJgvAqgDQAqgEAnAIQB1AOB4AKQB4AJB0AaQhnASh0gRQh0gQheAqQA4AYA9gBQA9gBA8ADQA6AJAwAdQAwAdA2AJQAkABAhgSQAggTAjgLQgXgRgbgKQgbgJgZgPQAKACAiAAQAiAAAQADQAoAVAvAIQBLADgGhQQgogOgtAFQgtAEgngJQApgPA3gEQA3gEAqAOQA1AWgXAdQgWAaguAaQgtAZgPAMQAdAdBPgGQBNgGAjgQQAbgQAsg0QAsgxgvgBQBAgPA9ARQAbASAfAPQA+AGA7gVQBigSBiANQBiANBggPQAbgEAbgOQAbgOADgfIgsgUQAQgvBAARQBBAQAIAHQiBB4jtA8QjtA9kIARQicAKiKAAQheAAhUgEg");
	this.shape_55.setTransform(21,37.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#4FB4E0").ss(1,1,1).p("ATKiDQgPgOg+AAQgBgFgygPQgygPhUAfQgEgFg/gTQg/gUhPAfQgFAAhqAJQhpAJiQAMQiPALh1AIQh2AIgagCQgwgIhbAEQhcAEhyAzQgDgDhagTQhagSiMgEQiMgDiZArQgEgBg2gGQg3gHg3AEIhkgEQAJADCHApQCHAnChAyQChAxBUAdQBTAbDoANQDoAMEhgSQEjgTEFhEQEFhDCOiDQADgCgPgPg");
	this.shape_56.setTransform(6.8,35.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AFE4F9").s().p("AjuCxQjogNhTgbQhUgdihgxIkohZIiQgsIBkAEQA3gEA3AHIA6AHQCZgrCMADQCMAEBaASQBaATADADQBygzBcgEQBbgEAwAIQAaACB2gIQB1gICPgLID5gVIBvgJQBPgfA/AUQA/ATAEAFQBUgfAyAPQAyAPABAFQA+AAAPAOQAPAPgDACQiOCDkFBDQkFBEkjATQiuALiWAAQhnAAhegFg");
	this.shape_57.setTransform(6.8,35.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#228FBF").s().p("Ai4DmQj2gNhXgcQhygmi6g4Qi5g5iXgqIifguQBChDCCgMQCCgMBvALQBuALAHACQGdAhFQgVQFNgUDIghQDHggAFgEQEHg4B+AYQB+AYAlAtQAlAtgEAFQh4CVkGBNQkGBNkwAXQjGAPiqAAQheAAhXgEg");
	this.shape_58.setTransform(3.2,30.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#00A0C6").ss(1,1,1).p("AZCgHQgjBYhoAtQhnAuhXAYQkIBekRA+Qk2A8k8gSQkrgTkhg5Qkhg6jsg1Qjsg1iOgGQiSgJg7hcQg7haBuhmQBuhmFqgoQABgCBQgHQBQgHCTAQQAGACBsATQBsATCTARQCTAQB4gGQB3gIDCgcQDCgbDJgjQDJgiCNggQBxgYBuAVQBuAUBoAuQBmAlBMBNQAgAnATA4QASA4gNAxg");
	this.shape_59.setTransform(-3.3,35.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#51CEF4").s().p("ABuGKQkrgTkhg5Qkhg6jsg1Qjsg1iOgGQiSgJg7hcQg7haBuhmQBuhmFqgoQABgCBQgHQBQgHCTAQQAGACBsATQBsATCTARQCTAQB4gGQB3gIDCgcQDCgbDJgjQDJgiCNggQBxgYBuAVQBuAUBoAuQBmAlBMBNQAgAnATA4QASA4gNAxQgjBYhoAtQhnAuhXAYQkIBekRA+QjwAujzAAQhHAAhIgEg");
	this.shape_60.setTransform(-3.3,35.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#118CB7").s().p("AkSHYQjbgRjYgiQjtgpiIiZQiIiZg+ijQg9imgNhPQgahngfgaQgWgSgIgEICqAUQCoAVEFAdQEFAdEbAaQEaAaDoAKQDpALBygQQC7gdDJgjQDKgjCNgaICUgbQgCAmgFAmQgFANguATQguASgwAPIg+ATQnXCtn1AQQk4ABk6g4Qk7g3kwhNIg2gNQgygMg+gLQg+gLgkACQAAAHAiBxQAjBxBLCFQBLCGB5BIQD5B9D9A8QD9A8CrARQCKAPAhABQjvAAjbgOg");
	this.shape_61.setTransform(0.1,93.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#0877AF").ss(1,1,1).p("A2unqQAHAEAXATQAfAbAaBoQAOBQA+CnQA+ClCKCbQCJCaDvAqQDbAiDdARQEhAVE/gLQE+gMEPh2QEPh2CTkpQBljLATjhQgHABiPAaQiOAbjNAjQjLAki8AdQh0AQjsgLQjqgLkdgaQkegZkIgeQkHgdirgVQiUgTgXgDQgEgBgBAB");
	this.shape_62.setTransform(-0.1,93.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1795E2").s().p("AkVHdQjdgQjbgjQjvgqiJiaQiKiag+ilQg+iogOhQQgahogfgbQgXgSgHgEICrAVQCrAVEHAeQEIAdEeAaQEdAaDqALQDsALBzgQQC9geDLgjQDMgkCPgaICVgbQgSDhhlDKQiUEpkOB2QkPB3k/ALQhvAEhrAAQjHAAi+gOg");
	this.shape_63.setTransform(0.1,93.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#118CB7").s().p("AhQAuQgggTgBgbQABgaAggTQAhgSAvgBQAxABAfASQAhATABAaQgBAbghATQgfASgxABQgvgBghgSg");
	this.shape_64.setTransform(-85.7,137.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9ABE5C").s().p("AxJCjQnIhHAAhiQAAhkHIhIIA+gKIB3gTQPuhCQDBiQG1BHAABiQABBinIBHQnIBIqDAAQqCAAnHhIg");
	this.shape_65.setTransform(0.2,152.6);

	this.addChild(this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.1,-130.6,330.3,306.8);


// stage content:



(lib.bathTubBubblesCJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:2,game:9,win:15});

	// timeline functions:
	this.frame_0 = function() {
        this.stop();
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
        this.stop();
		/* stop();
		//var loader:LoadGame = new LoadGame(this, "http://www.linguazone.com/customizer/customVars.php?action=play&gameid=8144", "MatchingGame"); // For live testing
		
		if (_root.liveXML) {
			var loader:LoadGame = new LoadGame(this, _root.liveXML, "MatchingGame"); // For deployment
		} else {
			var loader:LoadGame = new LoadGame(this, "../games/bathTubBubbles.xml", "MatchingGame"); // For local testing
		}*/
	}
	this.frame_2 = function() {
        this.stop();
		/* stop();
		dispatchEvent ({type:"ready", bubbles:true});
		
		play.onRelease = function() {
			gotoAndPlay("game");
		}
		*/
	}
	this.frame_9 = function() {
        this.stop();
		/* stop();
		if (game != undefined) delete(game);
		var game = new RunGame(this);
		dispatchEvent ({type:"play", bubbles:true, game:game});*/
	}
	this.frame_15 = function() {
        this.stop();
		/* stop();
		dispatchEvent ({type:"win", bubbles:true});
		
		playAgain._visible = false;
		playAgain.onRelease = function() {
			gotoAndPlay("intro");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(7).call(this.frame_9).wait(6).call(this.frame_15).wait(8));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAu4AfQMhdvAAAMAAAg+fMBdvAAAg");
	this.shape.setTransform(300,200);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(21));

	// Instructions
	this.text = new cjs.Text("Pop the bubbles to match the question on the yellow toy boat.", "16px 'Trebuchet MS'", "#BD0027");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 508;
	this.text.setTransform(299,117);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.text_1 = new cjs.Text("v1.5", "bold 8px 'Verdana'", "#93AD61");
	this.text_1.lineHeight = 10;
	this.text_1.setTransform(0,385.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},2).to({state:[]},7).wait(14));

	// Play Game
	this.play_ = new lib.PlayGame();
	this.play_.setTransform(297.6,277.6);

	this.bubbles = new lib.bubbleAnswerSet();
	this.bubbles.setTransform(26.6,38.6,1,1,0,0,0,21.2,20.1);

	this.playAgain = new lib.playagain();
	this.playAgain.setTransform(220,296.5,1,1,0,0,0,56,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.play_}]},2).to({state:[{t:this.bubbles}]},7).to({state:[{t:this.playAgain}]},6).wait(8));

	// Boy
	this.instance = new lib.instructions_pic("synched",0);
	this.instance.setTransform(493,293.2,0.6,0.6);

	this.boy = new lib.Boy();
	this.boy.setTransform(260.1,188.9,1,1,0,0,0,197.3,142.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.boy}]},7).wait(14));

	// Bubbles_BG
	this.instance_1 = new lib.bubble2("synched",0);
	this.instance_1.setTransform(561.6,303.5,0.45,0.45,0,0,0,0.9,-0.5);

	this.instance_2 = new lib.bubble2("synched",0);
	this.instance_2.setTransform(542,292.5,0.75,0.75,0,0,0,1,-0.5);

	this.instance_3 = new lib.bubble2("synched",0);
	this.instance_3.setTransform(563.4,131.4,1.489,1.4,0,0,0,0.9,-0.5);

	this.instance_4 = new lib.bubble2("synched",0);
	this.instance_4.setTransform(448.6,44.6,0.75,0.75,0,0,0,1,-0.5);

	this.instance_5 = new lib.bubble2("synched",0);
	this.instance_5.setTransform(496.9,175.8,0.389,0.389,0,0,0,0.9,-0.4);

	this.instance_6 = new lib.bubble2("synched",0);
	this.instance_6.setTransform(479.2,28.1,1,1,0,0,0,0.9,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},15).wait(8));

	// totalPoints
	this.text_2 = new cjs.Text("Current score:", "14px 'Trebuchet MS'", "#91052D");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 150;
	this.text_2.setTransform(1.7,4.7);

    //ivanixcu: separate text sprite for final score
	this.text_Final = new cjs.Text("Current score:", "14px 'Trebuchet MS'", "#91052D");
	this.text_Final.lineHeight = 16;
	this.text_Final.lineWidth = 150;
	this.text_Final.setTransform(1.7,4.7);

	this.text_3 = new cjs.Text("#", "22px 'Trebuchet MS'", "#91052D");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 44;
	this.text_3.setTransform(46.1,21.2);

	this.pointsBubbleBG = new lib.bubble2();
	this.pointsBubbleBG.setTransform(20.1,-7.4,4.225,4.225);

	//ivanixcu: modified for proper IDS language swapping: 
	this.timeline.addTween(
        cjs.Tween.get({})
        .to({state:[]})
        .to({state:[{t:this.pointsBubbleBG,p:{regX:0,regY:0,x:20.1,y:-7.4,mode:"independent",startPosition:undefined}},{t:this.text_3,p:{x:46.1,y:21.2,text:"#",font:"22px 'Trebuchet MS'",color:"#91052D",lineHeight:24,lineWidth:44}},{t:this.text_2,p:{x:1.7,y:4.7,font:"14px 'Trebuchet MS'",color:"#91052D",textAlign:"",lineHeight:16,lineWidth:150}}]},9)
        .to({state:[{t:this.pointsBubbleBG,p:{regX:0.9,regY:-0.5,x:152,y:97.8,mode:"synched",startPosition:0}},{t:this.text_Final,p:{x:154,y:53.5,font:"20px 'Trebuchet MS'",color:"#118CB7", textAlign:"center", lineHeight:22,lineWidth:196}},{t:this.text_3,p:{x:149,y:78,font:"28px 'Trebuchet MS'",color:"#BD0027",textAlign:"center",lineHeight:30,lineWidth:48}}]},6).wait(8)
    );
    // this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pointsBubbleBG,p:{regX:0,regY:0,x:20.1,y:-7.4,mode:"independent",startPosition:undefined}},{t:this.text_3,p:{x:46.1,y:21.2,text:"#",font:"22px 'Trebuchet MS'",color:"#91052D",lineHeight:24,lineWidth:44}},{t:this.text_2,p:{x:1.7,y:4.7,text:"Current score:",font:"14px 'Trebuchet MS'",color:"#91052D",textAlign:"",lineHeight:16,lineWidth:150}}]},9).to({state:[{t:this.pointsBubbleBG,p:{regX:0.9,regY:-0.5,x:152,y:97.8,mode:"synched",startPosition:0}},{t:this.text_3,p:{x:154,y:53.5,text:"Final score:",font:"20px 'Trebuchet MS'",color:"#118CB7",lineHeight:22,lineWidth:196}},{t:this.text_2,p:{x:149,y:78,text:"#",font:"28px 'Trebuchet MS'",color:"#BD0027",textAlign:"center",lineHeight:30,lineWidth:48}}]},6).wait(8));

	// BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#93AD61").ss(1,1,1).p("ACbBTIk2gkIAHiBIEZAAg");
	this.shape_1.setTransform(282.6,59.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4DB97").s().p("AiaAvIAGiBIEaAAIAVClg");
	this.shape_2.setTransform(282.6,59.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#93AD61").ss(1,1,1).p("ACcBTIk3gkIAHiBIEZAAg");
	this.shape_3.setTransform(516.4,41.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4DB97").s().p("AiaAvIAHiBIEYAAIAXClg");
	this.shape_4.setTransform(516.4,41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#93AD61").ss(1,1,1).p("ACcBTIk2gkIAHiBIEZAAg");
	this.shape_5.setTransform(456.8,110.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4DB97").s().p("AibAvIAHiBIEZAAIAXClg");
	this.shape_6.setTransform(456.8,110.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#93AD61").ss(1,1,1).p("ACgBQIk/gQIAJiPIE2AAg");
	this.shape_7.setTransform(286.5,200.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4DB97").s().p("AifBAIAJiOIE2AAIAACeg");
	this.shape_8.setTransform(286.5,200.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#93AD61").ss(1,1,1).p("ABbBfIi2gKIAFizICtAAg");
	this.shape_9.setTransform(588.2,365.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4DB97").s().p("AhbBVIAFiyICtAAIAFC8g");
	this.shape_10.setTransform(588.2,365.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi2gKIAEizICtAAg");
	this.shape_11.setTransform(589.6,331.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4DB97").s().p("AhbBVIAFiyICtAAIAFC8g");
	this.shape_12.setTransform(589.6,331.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi2gKIAEizICtAAg");
	this.shape_13.setTransform(589.6,300.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4DB97").s().p("AhbBUIAFiyICtAAIAFC8g");
	this.shape_14.setTransform(589.6,300.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#93AD61").ss(1,1,1).p("ABbBfIi2gKIAFizICtAAg");
	this.shape_15.setTransform(590.5,267.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C4DB97").s().p("AhbBVIAFiyICtAAIAFC8g");
	this.shape_16.setTransform(590.5,267.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#93AD61").ss(1,1,1).p("ABbBfIi2gKIAFizICtAAg");
	this.shape_17.setTransform(590.9,238.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4DB97").s().p("AhbBUIAFiyICtAAIAFC9g");
	this.shape_18.setTransform(590.9,238.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi2gKIAEizICtAAg");
	this.shape_19.setTransform(591.4,208.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C4DB97").s().p("AhbBUIAFiyICtAAIAFC8g");
	this.shape_20.setTransform(591.4,208.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi2gKIAEizICtAAg");
	this.shape_21.setTransform(591.8,177.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C4DB97").s().p("AhbBVIAFiyICtAAIAFC8g");
	this.shape_22.setTransform(591.8,177.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#93AD61").ss(1,1,1).p("ABbBfIi2gKIAFizICtAAg");
	this.shape_23.setTransform(590.5,147.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4DB97").s().p("AhbBUIAFiyICtAAIAFC8g");
	this.shape_24.setTransform(590.5,147.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#93AD61").ss(1,1,1).p("ABbBfIi2gKIAFizICtAAg");
	this.shape_25.setTransform(590.5,116.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C4DB97").s().p("AhbBVIAFiyICtAAIAFC8g");
	this.shape_26.setTransform(590.5,116.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#93AD61").ss(1,1,1).p("ABbBfIi2gKIAFizICtAAg");
	this.shape_27.setTransform(590.5,88.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C4DB97").s().p("AhbBVIAFiyICtAAIAFC8g");
	this.shape_28.setTransform(590.5,88.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#93AD61").ss(1,1,1).p("ABbBfIi2gKIAFizICtAAg");
	this.shape_29.setTransform(590.9,59.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C4DB97").s().p("AhbBVIAFiyICtAAIAFC8g");
	this.shape_30.setTransform(590.9,59.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi2gKIAEizICtAAg");
	this.shape_31.setTransform(591.4,28.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C4DB97").s().p("AhbBUIAFiyICtAAIAFC8g");
	this.shape_32.setTransform(591.4,28.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_33.setTransform(8.2,365.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C4DB97").s().p("AhaBVIAEiyICtAAIAEC8g");
	this.shape_34.setTransform(8.2,365.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_35.setTransform(9.6,331.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C4DB97").s().p("AhaBVIAEiyICtAAIAEC8g");
	this.shape_36.setTransform(9.6,331.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_37.setTransform(9.6,300.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C4DB97").s().p("AhaBUIAEiyICtAAIAEC8g");
	this.shape_38.setTransform(9.6,300.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_39.setTransform(10.5,267.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C4DB97").s().p("AhaBVIAEiyICtAAIAEC8g");
	this.shape_40.setTransform(10.5,267.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_41.setTransform(10.9,238.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C4DB97").s().p("AhaBUIAEiyICtAAIAEC9g");
	this.shape_42.setTransform(10.9,238.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_43.setTransform(11.4,208.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C4DB97").s().p("AhaBUIAEiyICtAAIAEC8g");
	this.shape_44.setTransform(11.4,208.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_45.setTransform(11.8,177.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C4DB97").s().p("AhaBVIAEiyICtAAIAEC8g");
	this.shape_46.setTransform(11.8,177.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_47.setTransform(10.5,147.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C4DB97").s().p("AhaBUIAEiyICtAAIAEC8g");
	this.shape_48.setTransform(10.5,147.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_49.setTransform(10.5,116.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C4DB97").s().p("AhaBVIAEiyICtAAIAEC8g");
	this.shape_50.setTransform(10.5,116.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_51.setTransform(10.5,88.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C4DB97").s().p("AhaBVIAEiyICtAAIAEC8g");
	this.shape_52.setTransform(10.5,88.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_53.setTransform(10.9,59.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C4DB97").s().p("AhaBVIAEiyICtAAIAEC8g");
	this.shape_54.setTransform(10.9,59.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#93AD61").ss(1,1,1).p("ABcBfIi3gKIAFizICtAAg");
	this.shape_55.setTransform(11.4,28.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C4DB97").s().p("AhaBUIAEiyICtAAIAEC8g");
	this.shape_56.setTransform(11.4,28.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#93AD61").ss(1,1,1).p("ACjBLIlGgIIAIiOIE2AAg");
	this.shape_57.setTransform(160.6,146.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C4DB97").s().p("AiiBDIAIiOIE1AAIAICWg");
	this.shape_58.setTransform(160.6,146.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#93AD61").ss(1,1,1).p("AAYCMIlPAIIAYi+IEZAXIAAh/IE9AQIAACNIkoAAg");
	this.shape_59.setTransform(119.3,256);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C4DB97").s().p("AkfgqIEYAYIAAiBIE/AQIAACOIkoAAIAICAIlPAIg");
	this.shape_60.setTransform(119.3,256);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#93AD61").ss(1,1,1).p("AAIiTIk+ARIAACNIEoAAIgJCBIFOAIIgXi+IkYAXg");
	this.shape_61.setTransform(252.8,332);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C4DB97").s().p("AgWCMIAIiAIkoAAIAAiOIE9gQIAAB/IEYgYIAYC/g");
	this.shape_62.setTransform(252.8,332);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#93AD61").ss(1,1,1).p("AAIiTIk+AQIAACOIEoAAIgICBIFOAHIgYi+IkYAYg");
	this.shape_63.setTransform(468.7,225.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C4DB97").s().p("AgWCLIAHh/IknAAIAAiOIE9gRIAACAIEYgXIAZC9g");
	this.shape_64.setTransform(468.7,225.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#93AD61").ss(1,1,1).p("AAHiSIk+APIAACPIEpAAIgJCAIFPAHIgYi9IkZAXg");
	this.shape_65.setTransform(89.8,50.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C4DB97").s().p("AgWCLIAHiAIknAAIAAiOIE9gQIAACBIEYgZIAZC+g");
	this.shape_66.setTransform(89.8,50.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#93AD61").ss(1,1,1).p("EAu4gfeMAAAA+9MhduAAAMAAAg+9g");
	this.shape_67.setTransform(300.1,200.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B6D18B").s().p("Egu2AffMAAAg+8MBdtAAAMAAAA+8g");
	this.shape_68.setTransform(300.1,200.5);

	this.instance_7 = new lib.Carpet("synched",0);
	this.instance_7.setTransform(298.8,394.6,1.124,1.124);
	this.instance_7.alpha = 0.609;

	this.instance_8 = new lib.Carpet2("synched",0);
	this.instance_8.setTransform(283,378.1,1.124,1.124);
	this.instance_8.alpha = 0.609;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BF981D").s().p("AmMlfICHgeIKRLNIisAtg");
	this.shape_69.setTransform(341.4,438.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BF981D").s().p("AnIlBICHgdIMKKJIiPA0g");
	this.shape_70.setTransform(398.4,419.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BF981D").s().p("AoHkQICHgeIOIISIhLBLg");
	this.shape_71.setTransform(449.7,399.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BF981D").ss(1,1,1).p("AtuJxMAhXgLwIulnxI4sIZg");
	this.shape_72.setTransform(399.6,425.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E6B34F").s().p("AzohXIYsoZIOlHyMghXALug");
	this.shape_73.setTransform(399.6,425.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BF981D").s().p("A1Uh7IAAgdIanoyIQCJBMgjzANUg");
	this.shape_74.setTransform(401.2,428);

	this.soap = new lib.sudsHolder();
	this.soap.setTransform(258.4,376.8,1,1,0,0,0,48.8,18.3);

	this.brush = new lib.brushHolder();
	this.brush.setTransform(79.9,350.8,1,1,0,0,0,41.6,18.7);

	this.soapBar = new lib.soapHolder();
	this.soapBar.setTransform(487.1,354.7,1,1,0,0,0,45.1,21.7);

	this.instance_9 = new lib.duckHolder();
	this.instance_9.setTransform(472.1,309.2,1,1,0,0,0,21.2,15.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#93AD61").ss(1,1,1).p("ADDA+ImFA5IAXjHIFhgmg");
	this.shape_75.setTransform(46.6,41.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C4DB97").s().p("AirhQIFhgmIANC0ImFA5g");
	this.shape_76.setTransform(46.6,41.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#93AD61").ss(1,1,1).p("AC3h1IAMC0ImFA3IAYjGg");
	this.shape_77.setTransform(138.2,117.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C4DB97").s().p("AiqhQIFhglIAMC0ImFA3g");
	this.shape_78.setTransform(138.2,117.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#656868").ss(1,1,1).p("AgXAJQAZgHAFgXQADAFALAFQAMAEgGAPQgXAYgggS");
	this.shape_79.setTransform(553.2,218.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AgcAOIAFgFQAZgHAFgXQACAFAMAFQAMAEgGAPQgNAOgPAAQgNAAgOgIg");
	this.shape_80.setTransform(553.2,218.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#656868").ss(1,1,1).p("AADAbQAHgbgNgCQgPgFgDgPQADgIARAHQAPAIAFAFQALAYgbANg");
	this.shape_81.setTransform(558.4,215.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("AgDgCQgPgFgDgPQADgIARAHQAPAIAFAFQALAYgbANQAHgbgNgCg");
	this.shape_82.setTransform(558.4,215.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#656868").s().p("AhAAFQAFgvA7gKQA8AKAFAvQgFAsg8AEQg7gEgFgsg");
	this.shape_83.setTransform(556.7,216.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#656868").s().p("AgnAnQglgNgEgjIBVgoQACgBAVABQAVAAASAOQAPARgCAQQgDAPgBABIhJAkIgCAAQgGAAgigLg");
	this.shape_84.setTransform(552.3,218.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#A0BF4B").ss(1,1,1).p("ABpIUIjRwn");
	this.shape_85.setTransform(37.7,375.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_86.setTransform(491.1,223.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_87.setTransform(499,239.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_88.setTransform(499.3,244.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_89.setTransform(483.2,200.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_90.setTransform(504,203.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_91.setTransform(503.7,201.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_92.setTransform(507.9,202);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_93.setTransform(500.4,232.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_94.setTransform(494.6,239.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DFBF49").s().p("AC+B3QgxAAg+gSQhtgohZhHQhOg+gkgTQgggSgDABQAPgXAJgZQADAAAnAVQAmAWAlAnQAqAsBVAsQBXAvAwALQAsAGArAAIAuAAIgCBPQgagmgyAAg");
	this.shape_95.setTransform(498.8,259.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F2CE5C").s().p("AC1DqQgxAAg/gSQhrgnhahIQhNg9gjgTQghgSgCAAQAmg4AHhEQgChDAChBQAFgZAGADQAJAFAHAeQAIAdADAOQAMA/AXBFQAWBDA2AqQBRA0BWgpQBWgoAqhNQANgTAXgLIAagLIgFBSIgKCiIgFB/QgZglgygBg");
	this.shape_96.setTransform(499.6,248.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BF981D").ss(1,1,1).p("ADakSQhxhDh2g1Qh4g2grAKQgwATggAvQgZAlgSA0QgSA1ABAtQAGAJAKB1QAJBzg7BtQAAgCAkAUQAkAUBQA/QBdBLBvApQBAATAzAAQAzAAAbAnQgBgIAGiBQAHiAARiSQASiQAig8QAagtAtAsQgUgfhxhDg");
	this.shape_97.setTransform(506.3,232.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FEDE6C").s().p("AB5GRQgzAAhAgTQhvgphdhLQhQg/gkgUQgigTgCABQA7htgJhzQgKh1gGgJQgBgtASg1QASg0AZglQAggvAwgTQArgKB4A2QB2A1BxBDQBxBDAUAfQgtgsgaAtQgiA8gSCQQgRCSgHCAQgGCBABAIQgbgngzAAgAleClIAAAAIAAAAg");
	this.shape_98.setTransform(506.3,232.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#656868").ss(1,1,1).p("AgXAJQAZgHAFgXQADAFALAFQAMAEgGAPQgXAYgggS");
	this.shape_99.setTransform(480.9,185.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("AgcAOIAFgFQAZgHAFgXQACAFAMAFQAMAEgGAPQgNAOgPAAQgNAAgOgIg");
	this.shape_100.setTransform(480.9,185.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#656868").ss(1,1,1).p("AADAbQAHgbgNgCQgPgFgDgPQADgIARAHQAPAIAFAFQALAYgbANg");
	this.shape_101.setTransform(486.1,182.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("AgDgCQgPgFgDgPQADgIARAHQAPAIAFAFQALAYgbANQAHgbgNgCg");
	this.shape_102.setTransform(486.1,182.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#656868").ss(1,1,1).p("AmYjeQAAABAAAAQgBAGAfAcQAWASB6A8QB6A9CWBHQCYBJByA0QBaArAWAKQAHADgHAUQgBABgBAAQgEACgDAAIgBAAQgDAAgCAAQgBgBgBAAIsmmGQgCgCgIgVQgGgSAPgRQACgCACgC");
	this.shape_103.setTransform(506.9,206.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("AGSDgIADAAIABAAIABAAIAAAAIABAAIAAACIgGgCgAGSDgIgBgBIsmmGQgDgCgHgVQgGgSAPgRIgBABQgBAGAfAcQAXASB6A8QB6A9CWBGQCYBJByA1IBwA1IAAAXIgDAAIAAABIAAACIgHAAIAHgCIgHACIAAAAIgBAAIAAAAIgBAAIgBAAIgDAAg");
	this.shape_104.setTransform(506.8,206.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AhjAVICAgOQApgFAOgMQAOgNgBgBQAFAAAZAIQAZAJgQAOQgeAPhsgBQhOgBg9AFIAqgEg");
	this.shape_105.setTransform(113,362);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CAEAF9").s().p("AlTnSIAPiAIBFBfQBDBdBXCLQBYCLBACOQBkDWBcB+QBbB+AGADIAABwg");
	this.shape_106.setTransform(537.2,83);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#4FB4E0").ss(1,1,1).p("AEkGYIpHsvIAQBaIH7LGg");
	this.shape_107.setTransform(531.6,137);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CAEAF9").s().p("ADoGIIn7rFIgQhaIJHMvg");
	this.shape_108.setTransform(531.6,137);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#4FB4E0").ss(1,1,1).p("AjykXIG4JdIAtAOIndqng");
	this.shape_109.setTransform(526.7,139.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CAEAF9").s().p("ADGFGIm4pdIAIg8IHdKng");
	this.shape_110.setTransform(526.7,139.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_111.setTransform(486.5,199);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#EE933A").ss(1,1,1).p("AAIgDQgIADgHAE");
	this.shape_112.setTransform(485.6,197.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#656868").s().p("AhAAFQAEgvA8gKQA8AKAFAvQgFAsg8AEQg7gEgFgsg");
	this.shape_113.setTransform(484.3,183.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#656868").s().p("AgnAnQglgNgEgjIBVgoQACgBAVABQAVAAASAOQAPARgCAQQgDAPgBABIhJAkIgCAAQgGAAgigLg");
	this.shape_114.setTransform(479.9,186);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#656868").s().p("AGODuQgHgFAAgBIs+mQQgCgCgIgUQgHgVAUgTQAagOAZAJQAaAJACACIMFFuQAtAagMAZQgLAZgTAOQgKAIgHAAIgEgCg");
	this.shape_115.setTransform(508.2,206.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#93AD61").ss(1,1,1).p("AEehCIj3AtIgLiSIk5BZIALCcIEDg4IAVCSIENhEg");
	this.shape_116.setTransform(264.8,181.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C4DB97").s().p("AgPAWIkDA4IgLibIE5haIALCSID3gtIgLCnIkOBDg");
	this.shape_117.setTransform(264.8,181.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#93AD61").ss(1,1,1).p("AiFiCIEZAPIgcD1IkLhNg");
	this.shape_118.setTransform(448,52.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B6D18B").s().p("AiTA1IAOi2IEZAOIgdD2g");
	this.shape_119.setTransform(448,52.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#E6F6F9","#8ED9F5","#00A0F7"],[0.094,0.424,1],55.8,-73,-39.7,43.3).s().p("ACDLpQh8goiPg6QiSg6hHg3IgGigQgFibgEjeQgEjgAEjXQAEjYASiAQAEAFDCA9QDBA9FFA4IgEC9QgEC1gLD4QgMD7gVDaQgVDbgiBUIiEgqg");
	this.shape_120.setTransform(539.4,99.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#91AD63").ss(1,1,1).p("AGJmwQgEC9gNEDQgMEFgWDkQgXDkgkBYQgJgCiFgrQiFgqiag8Qicg8hNg5QAAgGgGiiQgGiggEjoQgEjqAEjgQAEjhATiGQAFAFDRBAQDOBAFeA6QAAAJgFC8g");
	this.shape_121.setTransform(538.3,99.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#81A050").s().p("ACNMIQiFgqiag8Qicg8hNg5IgGioQgGiggEjoQgEjqAEjgQAEjhATiGQAFAFDRBAQDOBAFeA6IgFDFQgEC9gNEDQgMEFgWDkQgXDkgkBYQgJgCiFgrg");
	this.shape_122.setTransform(538.3,99.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#81A050").ss(1,1,1).p("AHfqeQgIgDiigrQiigsjXg1Qjag2itghQgBAIgFC0QgGC1gEECQgFECAEDxQADDzARCEQAGADBnArQBmAsB8AtQB7AuBIAMIEaBrQABgHARi8QASi7AXkNQAXkLATj/QATj+ADiQg");
	this.shape_123.setTransform(539.6,103.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#91AD63").s().p("ABKMaQhIgMh7gtQh8gvhmgrQhngrgGgEQgRiDgDjzQgEjxAFkCQAEkCAGi1IAGi8QCtAhDaA2QDXA1CiAsQCiArAIADQgDCQgTD+QgTEAgXELIgpHHIgSDDg");
	this.shape_124.setTransform(539.6,103.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#81A050").ss(1,1,1).p("AHfqqIuKjmIghALQgBAIgGC1QgFC1gEEDQgEEEADDyQAED0AQCGQAHADBmAsQBmAsB8AvQB7AuBJALIEZBuQABgIASi+QARi+AYkRQAXkPATkDQASkCAEiSg");
	this.shape_125.setTransform(540.8,102.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#91AD63").s().p("ABKMjQhJgLh7guQh8gvhmgsIhtgvQgQiGgEj0QgDjyAEkEQAEkDAFi1IAHi9IAhgLIOKDmQgECSgSECQgTEDgXEPIgpHPIgTDGg");
	this.shape_126.setTransform(540.8,102.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#93AD61").ss(1,1,1).p("ACugxIgXCbIlEhlIAXhug");
	this.shape_127.setTransform(524.3,-12.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B6D18B").s().p("AitAFIAXhuIFEA4IgXCbg");
	this.shape_128.setTransform(524.3,-12.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#93AD61").ss(1,1,1).p("AC3h1IAMC0ImFA3IAYjGg");
	this.shape_129.setTransform(30.9,221.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C4DB97").s().p("AiqhQIFhglIAMC0ImFA3g");
	this.shape_130.setTransform(30.9,221.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#93AD61").ss(1,1,1).p("ADciCIgWDUImfAxIgCjLg");
	this.shape_131.setTransform(182.6,23.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C4DB97").s().p("AjbhIIG3g6IgWDUImfAwg");
	this.shape_132.setTransform(182.6,23.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#93AD61").ss(1,1,1).p("ACphfIlwAXIgKCoIGjgwg");
	this.shape_133.setTransform(230.3,38.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C4DB97").s().p("AjIhIIFwgXIAqCPImjAwg");
	this.shape_134.setTransform(230.3,38.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#93AD61").ss(1,1,1).p("AB7CiIBAicIlSinIgjCNg");
	this.shape_135.setTransform(549,308.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B6D18B").s().p("Ai6gUIAjiNIFSCnIhACcg");
	this.shape_136.setTransform(549,308.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#93AD61").ss(1,1,1).p("ACGhMIj9hHIgODSIDvBVg");
	this.shape_137.setTransform(479.7,92.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B6D18B").s().p("AiFA/IAPjSID8BHIgcDgg");
	this.shape_138.setTransform(479.7,92.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#4FB4E0").ss(1,1,1).p("AAegpQgUgBgpACQgrADgWANQgWAMAsAZQAgASBFAKQBHAKAGgyQgEgbgegHQgfgHgYgB");
	this.shape_139.setTransform(61.4,382.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CAEAF9").s().p("AAbApQhFgKgggSQgsgZAWgMQAWgNArgDQApgCAUABIgPAAQAYABAfAHQAfAHADAbQgFApgzAAIgVgBg");
	this.shape_140.setTransform(61.4,382.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#4FB4E0").ss(1,1,1).p("ABGAGQAEgvgnAFQgkAEglAXQglAVAGAGQAbAMAyAHQA0AGAKglg");
	this.shape_141.setTransform(197.8,382.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CAEAF9").s().p("AAIAlQgygHgbgMQgGgGAlgVQAlgXAkgEQAngFgEAvQgJAggoAAIgNgBg");
	this.shape_142.setTransform(197.8,382.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A4D2E0").s().p("Ak/B3QhEgMAPgPQAQgOAugNQAugNAagGQDjg6DdhGQAbgLA3gTQA3gTAaAZQAMAXglAVQglAUgvAOQgwANgRAEIiiAcQhNAQhKAlQgpAWg7ARQgsAMglAAIgYgCg");
	this.shape_143.setTransform(84.3,359);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#4FB4E0").ss(1,1,1).p("ADFhpQjeBFjiA7QgjAGhQAKQhPAKgWAYQgIAWAUAPQAVAPATAGQA8ASA6gSQA7gSA8gFQB5gBB3gWQBLgMBNAHQBNAHBJgSQAcgHAmgXQAngWABggQgGgegjgHQghgGgbAAQgBgcgdAFQAwgygbgGQgcgGg2AOQg1APgcAJg");
	this.shape_144.setTransform(85.6,361.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#AFE4F9").s().p("AmfCDQgTgGgVgPQgUgPAIgWQAWgYBPgKQBQgKAjgGQDig7DehFIBRgYQA2gOAcAGQAbAGgwAyQAdgFABAcQAbAAAhAGQAjAHAGAeQgBAggnAWQgmAXgcAHQhJAShNgHQhNgHhLAMQh3AWh5ABQg8AFg7ASQgcAJgeAAQgeAAgegJg");
	this.shape_145.setTransform(85.6,361.3);

	this.instance_10 = new lib.Tubshadow("synched",0);
	this.instance_10.setTransform(117.9,299,1.124,1.124);
	this.instance_10.alpha = 0.691;

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#A0BF4B").ss(1,1,1).p("ADSI6Imjxz");
	this.shape_146.setTransform(99.3,368);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#A0BF4B").ss(1,1,1).p("EggeAHJMBA9gOR");
	this.shape_147.setTransform(316.2,379.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#A0BF4B").ss(1,1,1).p("EgoxAJJMBRjgSR");
	this.shape_148.setTransform(184.5,339.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#A0BF4B").ss(1,1,1).p("AFKJTIqTyl");
	this.shape_149.setTransform(188.4,362.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#A0BF4B").ss(1,1,1).p("AInK2IxN1q");
	this.shape_150.setTransform(269.7,351.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#A0BF4B").ss(1,1,1).p("ALxLNI3h2Z");
	this.shape_151.setTransform(359.7,345);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#A0BF4B").ss(1,1,1).p("APvLlI/d3J");
	this.shape_152.setTransform(448.9,338.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#81A050").ss(1,1,1).p("EgytANhMBjHgC9IWaAAMgqJgYEMhjeAPBg");
	this.shape_153.setTransform(245.6,345);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#91AD63").s().p("EhGzABhMBjegPBMAqJAYEI2aAAMhjHAC9g");
	this.shape_154.setTransform(245.6,345);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BF981D").s().p("AhcEwIAEhcQAFhWALh0QAKhyAQhbQAQhaAWgNQBXgcAOA1IAAA2IgBCEQgBgFgaAeQgYAfgXB0QgSB4AFAvQAGAuADAAQgkALgfAAQgVAAgSgFg");
	this.shape_155.setTransform(531.5,241.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#BF981D").ss(1,1,1).p("ABekRQAAAJgBB4QgBB4gFCCQgFCEgLArQgGAEg7APQg4AQgrgMQAAgFAFhWQAFhXALhzQAKhyAQhbQAQhbAWgNQBYgbAOA0g");
	this.shape_156.setTransform(531.5,241.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D8B248").s().p("AhdEwIAFhbQAFhXALhzQAKhyAQhbQAQhbAWgNQBYgbAOA0IgBCBQgBB4gFCCQgFCEgLArQgGAEg7APQgfAJgcAAQgWAAgSgFg");
	this.shape_157.setTransform(531.5,241.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#91AD63").s().p("AgRGuQiegviOh0QAnhHgGhcQgFhbADhOQARh9ABh/QgygQg6gcQg6gbALhAQB+gIB3AoQB3ApBsA6QCBA7CABAQAWALAoAXQAoAXANAUQAQAvgfAXQgeAXgHAaIgKGmQgWAHgWAGQhVAVhRAAQhWAAhQgYg");
	this.shape_158.setTransform(506.8,235.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#81A050").ss(1,1,1).p("AzXMrMAAAgu1MAmvAAAMAAABEVg");
	this.shape_159.setTransform(552.9,189.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#9FBF75").s().p("AzXMrMAAAgu1MAmvAAAMAAABEVg");
	this.shape_160.setTransform(552.9,189.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A8BC77").s().p("AzZWyQApgQBCgJQAhgFDug+QDthAFehkQFbhlFzh0QFzh0EshvQEthtCLhTQClhuCRkDQCQkCBwkwQBvkvBDjzQBCjzAKhMQAIhfgbiEQgciFgghmIgihsIDvgZIAHDxQAIDogEFsQgFFsAlGjQAkGhAKFSQAKFThJDuMg7hAHgI0ZDbQUalfAqgRg");
	this.shape_161.setTransform(179.7,154.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#93AD61").ss(1,1,1).p("EAlUgYUQgIDxgQF0QgRF1gaGTQgaGSgmFPQgmFOgzCmMhHSALfMAAAg1qMBK1gCvQAAAIgHDwg");
	this.shape_162.setTransform(190,152.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B6D18B").s().p("EglagZdMBK1gCvIgHD4QgIDxgQF0QgRF1gaGTQgaGSgmFPQgmFOgzCmMhHSALfg");
	this.shape_163.setTransform(190,152.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#93AD61").ss(1,1,1).p("AC1h2IAOC0ImFA5IAXjGg");
	this.shape_164.setTransform(46.6,41.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#C4DB97").s().p("AirhPIFggnIAOC0ImFA5g");
	this.shape_165.setTransform(46.6,41.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#656868").ss(1,1,1).p("AmYjeQACgCACgCAmYjeQAAABAAAAQgBAGAfAcQAWASB6A8QB6A9CWBHQCYBJByA0QBaArAWAKQAHADgHAUQgBABgBAAQgEACgDAAIgBAAQgDAAgCAAQgBgBgBAAIsmmGQgCgCgIgVQgGgSAPgRg");
	this.shape_166.setTransform(506.9,206.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CAEAF9").s().p("AlTnSIAPiAQADADBDBcQBCBcBYCMQBXCKBACPQBkDWBbB+QBcB+AGACIAABxg");
	this.shape_167.setTransform(537.2,83);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#4FB4E0").ss(1,1,1).p("AkUk8IH7LFIA9APIpHsug");
	this.shape_168.setTransform(531.6,137);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CAEAF9").s().p("ADnGIIn7rFIgPhaIJHMvg");
	this.shape_169.setTransform(531.6,137);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#81A050").ss(1,1,1).p("AHfqqIuKjmIghALQgBAIgGC1QgFC1gEEDQgEEEADDyQAED1ARCFQAGADBmAtQBmArB8AvQB7AuBJAMIEZBtQABgIASi9QARi+AYkSQAXkPATkDQASkCAEiSg");
	this.shape_170.setTransform(540.8,102.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#91AD63").s().p("ABKMjQhJgLh7guQh8gvhmgrQhmgtgGgDQgRiGgEj0QgDjyAEkEQAEkDAFi1IAHi8IAhgMIOKDmQgECSgSEDQgTEDgXEPIgpHOIgTDGg");
	this.shape_171.setTransform(540.8,102.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#4FB4E0").ss(1,1,1).p("AAegpQgVgBgoACQgsADgWANQgVAMArAZQAhATBFAJQBHAKAGgyQgEgagfgIQgegHgZgB");
	this.shape_172.setTransform(61.4,382.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#CAEAF9").s().p("AAbApQhFgJghgTQgrgZAVgMQAWgNAsgDQAogCAVABIgQAAQAZABAeAHQAfAIAEAaQgFAqgzAAIgVgCg");
	this.shape_173.setTransform(61.4,382.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#81A050").ss(1,1,1).p("EgytANhMBjIgC9IWZAAMgqJgYEMhjeAPBg");
	this.shape_174.setTransform(245.6,345);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.instance_10},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_9},{t:this.soapBar},{t:this.brush},{t:this.soap},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.instance_8},{t:this.instance_7}]},7).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_174},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.instance_10},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_173},{t:this.shape_172},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_171},{t:this.shape_170},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_105},{t:this.shape_104},{t:this.shape_166},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_165},{t:this.shape_164},{t:this.instance_9},{t:this.soapBar},{t:this.soap},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.instance_8},{t:this.instance_7},{t:this.brush}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
