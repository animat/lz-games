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



(lib.tosee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOARQABgCgDgLQgEgKgMgEIgBAAQgTAIgBACQgCACgDgCQgBAAAAAAQgBAAAAgBQAAgBABAAQAAgBABAAIAJgIQALgIAMgBQAQAAANANQADADgDADQgCABgDgBQgIgIgKgCQAOANAAAPQgBABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgDAAgBgEg");
	this.shape.setTransform(-30.6,-31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BDQAHABAgABQAkABAXgjQANgagDgZQgEgbgSgPQgTgNgSAFQgZAHgSAQIgSARQABgDAQgTQAQgSAagIQAVgFAWAPQAVARAFAdQAEAcgPAcQgXAmgmAAQgTAAgZgJgAhAgaIAAAAIAAAAg");
	this.shape_1.setTransform(-28.5,-33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDBD97").s().p("AAzAJQgFgZgVgPQgVgPgVAFQgfAJgQAWIAAgEQABgDAQgSQAQgTAagHQAVgFAWAPQAVAQAFAeQAEAbgPAdIgJANQAMgbgFgcg");
	this.shape_2.setTransform(-28.5,-34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CEAD89").s().p("Ag1BCQgCgGgFgpQgEgmAAgHQABgDARgTQAQgSAagIQAVgFAWAPQAVARAEAdQAFAcgPAcQgYAmgmAAQgUAAgZgKg");
	this.shape_3.setTransform(-28.6,-33.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDBD97").s().p("Ag1BCQgCgGgFgpQgEgmAAgHQABgDARgTQAQgSAagIQAVgFAWAPQAVARAEAdQAFAcgPAcQgYAmgmAAQgUAAgZgKg");
	this.shape_4.setTransform(-28.6,-33.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CEAD89").s().p("Ag9C1QAuhAADhTQADhSgihLQAkADAegOQAfgPAGgiIACAGQgQAnggAQQgeAQgFAAIgEABIACAEQADADATApQAQApAJA5QAHBOgPAcQgQAdgTAFQgHADgLAAQgKAAgOgDg");
	this.shape_5.setTransform(-78.1,-20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDBD97").s().p("Ag5DRQgVgBgVgOQgngbgDhBQgBhbASg4QARg5ADgDQAdg+AugXQAtgXAtAFQBAAJAOAVQADADgBADQgCAEgXACQgXABgggBIgDgBIgBAEQgLAugkATQghATgFgBIgFABIADAEQACADATApQARAoAIA6QAHBOgPAdQgNAcgWAFQgGADgMAAIgMgBg");
	this.shape_6.setTransform(-77.4,-22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag6DZQgXgCgXgPQgpgcgDhGQgBhdAVg8QAVg/AEgDQAhg8AsgWQAqgWAtAGQBGAKAPAWQAEAIgCAEQgFALgcABQgdACgWgCQgLAqghATQgeATgQAEQAIANASAoQAQAlAIAzQADAaAAATQgCA3gPAVQgPAWgTAFQgIADgPAAIgLAAg");
	this.shape_7.setTransform(-77.4,-22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAQQgBgJAGgKQAGgMAOgDQADgBABAEQAAADgDABQgNAEgDAJQgDAMAAACQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgEAAAAgEg");
	this.shape_8.setTransform(-88.8,-31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaAJQgCgGgZgFQgNAAgLAJQgDACgDgCQgCgDACgDQAOgLAQAAQANABAJAHQAKAFABABQAAABAAABQABAAAAABQAAAAgBABQAAABAAAAIgDACIgDgCg");
	this.shape_9.setTransform(-88.2,-32.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0AoQgPgdAEgbQAEgeAWgQQAVgPAVAFQAbAHAQATQAQASABADQABADgDACQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBgCgPgRQgPgSgZgHQgRgEgTANQgTAPgEAbQgDAZANAZQAgA0BBgcQAEgBABAEIACAAQgcAMgWAAQglAAgXgjg");
	this.shape_10.setTransform(-90.2,-33.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DDBD97").s().p("AgxAmQgPgcAEgcQAEgdAWgRQAVgPAVAFQAaAJAOAVQAOAUAAACIgCAqQgBAogCAGQgZAKgUAAQgmAAgXgmg");
	this.shape_11.setTransform(-90.5,-33.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B0801").s().p("AgigTQAGgNAfgBQAEABANAKQANALACAWQgGAKgYANQgFgUgighg");
	this.shape_12.setTransform(-44.4,-50.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAAnQABgCgJgSQgKgTgWgQIgDgCIACgDQAAgCALgKQAMgKAXACIABAAIAAAAQAEAAAPANQAPAMADAcIABABIgBABIgLALQgKAKgRAHIgDABg");
	this.shape_13.setTransform(-44.5,-50.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B0801").s().p("AgiALQADgWAMgLQANgKAEgBQAgABAFANQgjAhgDAUQgZgNgGgKg");
	this.shape_14.setTransform(-73,-50.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAqQgQgHgLgKIgKgLIgBgBIAAgBQADgcAQgMQAPgNADAAIABAAIAAAAQAYgCALAKQAMAKAAACIACADIgDACQgWAQgLATQgIASAAACIAAAEg");
	this.shape_15.setTransform(-72.9,-50.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#472608").s().p("AkwCtQAAgJgQgPQgNgHgJAEIgBgJQAEg5AWgwQAXguADgEIACgDIgCgBQgXgOgTAKQAthMAtgGQAtgGAGAGIABAAIACgBQBrg7BXgNQBYgNAgAEQgJAHgKAMIgEAGIAHAAQAEgCAwAIQAvAIA1AlQA1AkATBRIgNgDIgKgBQACABAPAsQAPArACAvQAAAOgDAMQgJAAgTACQgTACgOALQgIgSg6gdIgBgnIAAg7IAAgWIgBgNQgBACgKAkQgJAngCA2QgUgGg6gNQg6gOg3gDIAAgBQABgTgFguQgFgsgQgtIgEgJIgEAKQgBAAgJApQgIAmgCBJIABAFQgSAAgyAGQgxAFglARIAAgKQAAgSgEgZQgDgagMgVIgHgMIAAAOIABALQAAAXgFAuQgEAugRApIgFACQgNAAgcgTg");
	this.shape_16.setTransform(-59.6,-54.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AkRDKQgPgBgXgTIgBgBIAAgBQABgFgPgQQgQgGgEAFIgEADIgCgGIAAgOQACg2AVgvQATgsAJgOQgMgHgOAEQgNAFgCACIgLAGIAGgLQAthVAwgKQAxgKAMAHQCAhGBhgIQBigJAHAEIAKABIgJAGQgDABgRARQAVAAAxAMQAwANAuAoQAvAoAPBQIACAHIgHgDIgOgGQAGAQALAlQALAkAAAoQAAARgCAPIgBADIgEAAQgDgBgWABQgXACgOANIgDADIgDgEQAAgCgQgQQgPgPglgQIgBAAIAAgDIgBgmIgBhGQgDATgDAeQgDAeABAdIAAAFIgGgCIhGgSQhBgQg/gDIgDAAIAAgDIAAgGQAAgRgEgqQgEgogOgsQgMAjABA5QAAA7ABAGQgHgBg+AFQg+AEgoAVIgGADIAAgHIABgQQAAgOgBgWQgCgWgGgTQAEAbgIAwQgGAvgSAoIgBACIgCABIgFAAIgMAAg");
	this.shape_17.setTransform(-59.7,-54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},40).wait(30));

	// eye
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AgEAAQABgDADgBQAEABAAADQAAAEgEAAQgDAAgBgEg");
	this.shape_18.setTransform(-68.9,-36.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_19.setTransform(-68.7,-36.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AgDAAQAAgDADgBQAFABAAADQgBAEgEAAQgDAAAAgEg");
	this.shape_20.setTransform(-47,-36.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_21.setTransform(-46.8,-36.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF4E6").s().p("AADAOQgCg7gQglQAcAZADBEQgBA0gWAUQAJgbABgqg");
	this.shape_22.setTransform(-65.6,-37.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgsAJQABglANgdQANgcARgCQASACANAcQANAdABAlQgDBJgqAGQgpgGgDhJg");
	this.shape_23.setTransform(-68.4,-37.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgxAJQABglANghQAOgfAVgCQAWACANAfQAOAhABAlQgDBRgvAFQgugFgDhRg");
	this.shape_24.setTransform(-68.5,-37.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF4E6").s().p("AADALQgBg4gRgkQAcAaADBAQgBA1gYAUQAMgaAAgtg");
	this.shape_25.setTransform(-44.1,-37.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AgtAJQABglANgdQAOgcARgCQASACAOAcQANAdABAlQgDBJgrAGQgqgGgDhJg");
	this.shape_26.setTransform(-47.1,-37.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgxAJQABglANghQAOgfAVgCQAWACANAfQAOAhABAlQgDBRgvAFQgugFgDhRg");
	this.shape_27.setTransform(-47.1,-37.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CEAD89").s().p("AgYgpIAGgBQAQABALAXQANAVADAjQgGADgHACQgIhEgcgQg");
	this.shape_28.setTransform(-45.2,-41.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF4E6").s().p("AgYAqQAjgLAChBIAAgCIAMgFIAAAHQgDBHgoAFIgGAAg");
	this.shape_29.setTransform(-45.2,-32.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DDBD97").s().p("AgKAtQgagEgHgFQADgiAMgWQANgYAPgBQAQABANAYQAMAVADAiQgWALgVAAIgLgBg");
	this.shape_30.setTransform(-47.1,-41.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAAQABgKALgBQAMABABAKQgBALgMABQgLgBgBgLgAgEAAQABAEADAAQAEAAABgEQAAgDgFgBQgDABgBADg");
	this.shape_31.setTransform(-46.9,-36.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AgsgiIAAgGQALAFAZAEQAYADAcgNIABAHQgDBHgqAFQgpgFgDhHg");
	this.shape_32.setTransform(-47.1,-32.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgxAJQAAglAOggQAOggAVgCQAXACANAgQAOAgAAAlQgDBRgvAFQgugFgDhRg");
	this.shape_33.setTransform(-47.2,-37.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CEAD89").s().p("AgWgpIAFgBQAQAAAJAYQAMAVADAjIgLAFQgIhEgagQg");
	this.shape_34.setTransform(-66.6,-41.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF4E6").s().p("AgWAqQAggLAChCIAAgBIALgGIAAAHQgCBIgmAGIgFgBg");
	this.shape_35.setTransform(-66.5,-32.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DDBD97").s().p("AgIAuQgYgFgIgEQADgjALgWQAMgYAOgBQAPABALAXQAMAWADAiQgVALgTAAIgJAAg");
	this.shape_36.setTransform(-68.4,-41.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLgAgDAAQAAAEADAAQAEAAABgEQAAgDgFgBQgDABAAADg");
	this.shape_37.setTransform(-68.6,-36.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEFEFE").s().p("AgpgjIAAgFQALAFAXAEQAWADAbgOIAAAHQgDBIgnAGQgngGgChIg");
	this.shape_38.setTransform(-68.4,-32.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgxAJQABglANggQAOggAVgCQAWACAOAgQAOAgAAAlQgEBRguAFQgtgFgEhRg");
	this.shape_39.setTransform(-68.4,-37.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CEAD89").s().p("AgXBXQAggMAChCQAAghgLgbQgIgbgPgHQADgCAEAAQAQACAKAcQANAdABAlQgDBJglAGIgHgBg");
	this.shape_40.setTransform(-66.7,-37.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CEAD89").s().p("AgXBXQAggMAChCQAAghgKgbQgJgbgPgHQADgCAEAAQAQACALAcQAMAdABAlQgDBJglAGIgHgBg");
	this.shape_41.setTransform(-45.3,-37.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DDBD97").s().p("AgpAJQABglAMgdQANgcAPgCQAQACANAcQANAdAAAlQgDBJgnAGQgmgGgDhJg");
	this.shape_42.setTransform(-68.5,-37.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgxAJQABglAOggQANggAVgCQAWACAOAgQANAgAAAlQgDBRguAFQgtgFgEhRg");
	this.shape_43.setTransform(-68.5,-37.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DDBD97").s().p("AgpAJQABglAMgdQAMgcAQgCQARACAMAcQAMAdABAlQgDBJgnAGQgmgGgDhJg");
	this.shape_44.setTransform(-47.1,-37.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgxAJQABglAOggQANggAVgCQAWACAOAgQANAgAAAlQgDBRguAFQgugFgDhRg");
	this.shape_45.setTransform(-47.1,-37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},9).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},11).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[]},12).wait(30));

	// Layer 6
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag7AQQgigMgBgEIgCAAIABgBQAFgSADgDQACADgCAQQAKAJAxAIQAvAIBOgrIgTAPQgUAOgdAJQgbAGgUAAQgYAAgRgHg");
	this.shape_46.setTransform(-56.9,-18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5B1D02").s().p("Ag6gGQARAGAgABQAfACAlgOIgNAUQglgKgYAEQgaAGgDADIgOgSg");
	this.shape_47.setTransform(-56.7,-16.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#721E00").s().p("AgogGQAFgEAXgEQAWgFAfAKQgRAZgYABQgWgDgSgUg");
	this.shape_48.setTransform(-56.6,-13.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AgTASQgngGgEgDIAAAAIgJgQQATAIApAFQAnAEAsgcIgJAUIgBAAQgiARgdAAIgSgBg");
	this.shape_49.setTransform(-56.7,-18.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag6AOQgWgkgCgHIgDgJIAJAFQAGAHAvAMQAuAMA1gtIAKgKIgDANIgLAdQgJAYgSAYQgSAYgaABQgkgHgXglg");
	this.shape_50.setTransform(-56.8,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46}]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},19).to({state:[]},21).wait(30));

	// Layer 7
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DDBD97").s().p("AghgjQAQgUAUgVQASgSADgGQACAAAFAGQADACAAAGIgCAFIgRAfIgMAUIgBACIABABQAIARALAbQAKAdABAXQAAAJgCAGIgHARQgtg+gMhKg");
	this.shape_51.setTransform(-84.6,-33.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Agfg8IAUgUQAPgQAEgGQABgEADAAQAIgBAHAJQAFAGAAAGQgBAFgCAEIgRAcIgOAXIARAlQANAfACAcQAAAKgDAHIgGAUQgphPgLhYg");
	this.shape_52.setTransform(-83.7,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51}]},41).wait(29));

	// Layer 8
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("AgEAAQABgEADAAQAEAAABAEQgBAFgEAAQgDAAgBgFg");
	this.shape_53.setTransform(-67.4,-36.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNAAQAAgOANgBQANABABAOQgBAPgNABQgNgBAAgPg");
	this.shape_54.setTransform(-66.7,-36.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF4E6").s().p("AAAAKQAAg2gOglQAaAZADBBQgCA3gYASQALgbAAgtg");
	this.shape_55.setTransform(-61.2,-37.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEFEFE").s().p("AgpAIQABgjAMgdQANgcAPgBQAQABANAcQANAdAAAjQgDBJgnAFQgmgFgDhJg");
	this.shape_56.setTransform(-63.9,-37.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgtAJQABgkAMggQANgfATgCQAUACANAfQANAgAAAkQgDBQgrAEQgqgEgDhQg");
	this.shape_57.setTransform(-63.9,-37.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEFEFE").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_58.setTransform(-83.6,-36.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgMAAQABgLALAAQALAAACALQgCALgLACQgLgCgBgLg");
	this.shape_59.setTransform(-83.3,-35.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFF4E6").s().p("AAAAIQAAgxgOgeQANAGAHAWQAJAXAAAcQgCA1gZAMQAMgXAAgqg");
	this.shape_60.setTransform(-78.4,-36.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEFEFE").s().p("AgjAIQABgfALgYQAKgZANgBQAOABALAZQAKAYABAfQgDA+ghAEQgggEgDg+g");
	this.shape_61.setTransform(-80.5,-36.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgoAIQABggALgbQALgcARgBQASABALAcQALAbABAgQgCBFgnAEQglgEgDhFg");
	this.shape_62.setTransform(-80.5,-36.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CEAD89").s().p("AgNggQAUAMAHAvQgHAEgHACQgBgngMgag");
	this.shape_63.setTransform(-78.5,-40.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CEAD89").s().p("AgNglQAUATAHAyQgHAEgHACQAAgrgNggg");
	this.shape_64.setTransform(-61.3,-41.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DDBD97").s().p("AgHAjQgTgEgIgEQAKg4AYgGQAZAGAKA3QgTAKgQAAIgHgBg");
	this.shape_65.setTransform(-80.5,-40.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DDBD97").s().p("AgKAqQgZgGgFgDQAEggAMgUQALgWANgBQAOABALAVQAMAUAEAgQgWALgTAAIgKgBg");
	this.shape_66.setTransform(-63.9,-41.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgMAHQgYgHgDgBIAEgGQACACAWAFQAUAFAbgNIAEAHQgVAKgTAAQgFAAgHgCg");
	this.shape_67.setTransform(-80.6,-36.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgOAHQgbgGgDgBIAEgHQACACAZAFQAXAFAfgNIAEAHQgYAKgVAAQgGAAgIgCg");
	this.shape_68.setTransform(-63.9,-37.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF4E6").s().p("AAAgdIAAgHIANgHIAAAOQgBA2gZASQANgcAAgsg");
	this.shape_69.setTransform(-61,-33.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgOAAQACgOAMgCQANACABAOQgBAPgNABQgMgBgCgPg");
	this.shape_70.setTransform(-66.8,-36.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FEFEFE").s().p("AgpgfIABgMQAJAFAXADQAVADAcgNIABAOQgDBHgnAGQgngGgChHg");
	this.shape_71.setTransform(-63.9,-33.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgtAJQABglAMggQANggATgCQAUACANAgQANAgAAAlQgDBRgrAFQgqgFgDhRg");
	this.shape_72.setTransform(-63.9,-37.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FEFEFE").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_73.setTransform(-83.4,-36);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFF4E6").s().p("AAAgZIAAgHIANgHIABAOQgCA1gZALQANgXAAgpg");
	this.shape_74.setTransform(-78.3,-32.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAAQABgLALgBQALABACALQgCALgLACQgLgCgBgLg");
	this.shape_75.setTransform(-83.4,-36);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FEFEFE").s().p("AgjgaIABgMQAJAFAUADQARADAXgMIABANQgDA+ghAEQgggEgDg+g");
	this.shape_76.setTransform(-80.6,-32.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgoAIQABggALgcQALgcARgCQASACALAcQALAcABAgQgCBGgnAFQglgFgDhGg");
	this.shape_77.setTransform(-80.6,-36.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CEAD89").s().p("AAAAKQAAg2gOglQAaAZADBBQgCA4gYARQALgbAAgtg");
	this.shape_78.setTransform(-61.2,-37.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DDBD97").s().p("AgpAJQABgkAMgdQANgcAPgBQARABAMAcQANAdAAAkQgDBIgnAFQgmgFgDhIg");
	this.shape_79.setTransform(-63.9,-37.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgtAJQABglAMggQANgfATgCQAUACANAfQANAgAAAlQgDBQgrAFQgqgFgDhQg");
	this.shape_80.setTransform(-63.9,-37.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CEAD89").s().p("AAAAIQAAgxgOgfQANAGAHAXQAJAXAAAcQgCA2gZALQAMgWAAgrg");
	this.shape_81.setTransform(-78.4,-36.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DDBD97").s().p("AgjAIQABggALgYQAKgYANgBQAOABALAYQAKAYABAgQgDA+ghAEQgggEgDg+g");
	this.shape_82.setTransform(-80.6,-36.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgoAIQABggALgbQALgcARgCQASACALAcQALAbABAgQgCBFgnAFQglgFgDhFg");
	this.shape_83.setTransform(-80.6,-36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},41).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_53},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},3).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_53},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_53},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},11).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_53},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).wait(7));

	// body
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgCAOQgDgCACgDQADgPAAgIQAAAAAEAKQADAJgGAIQgBABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCgBg");
	this.shape_84.setTransform(-58.7,-32.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgEAmQgWgFgGgTQgMgfAggSQAXgHANAJQAOAKgCABQAAgCgNgFQgMgFgUAGQgaAPAJAYQAMAiAwgNQABAAgMAEQgHADgJAAIgLgBg");
	this.shape_85.setTransform(-59.6,-27.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CEAD89").s().p("AiaDGQhLgfgggaQArAbBAAWQBBAXBGABQBhgGBIgrQBKgrAJgSQAGgNAAgdQgCg4gIg5IgKhCIgFgnQgFgjgMgnQAaAgAKA4QAJA3gBAHIAKA+QAKA2AAA0QABAcgGAMQgJARhIAoQhHAphhAFQhVgChMgfg");
	this.shape_86.setTransform(-58.7,-33.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DDBD97").s().p("AiqDaQhUgogKgSQgGgNAAgcQABg0AJg4IAKg7QgBgIAKg5QAKg5AbgfQAVgRAvgOQAvgNArgIIAugJIAwAJQAqAIAvANQAvAOAVAQQAbAgAKA5QAKA5gBAHIAKA8QAJA4ABA0QAAAcgGANQgJAQhHApQhIAohgAGQhogEhTgpg");
	this.shape_87.setTransform(-59.7,-36.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AirDiQhWgpgNgWQgIgVADgyQAEgxAHgrIAIgxQgBgKALg6QAKg5AdghQAWgSAwgNQAwgOArgIIAugJIABAAIAxAJQArAIAwAOQAwANAWASQAdAhAKA5QAKA6AAAJIAIAyQAGAsACAyQADAxgJAWQgLAVhIAoQhIAnhgAFQhogDhWgpg");
	this.shape_88.setTransform(-59.9,-36.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#A56955").s().p("AABBPQgzgFgTgjQgTgjABgEIgBgCQgEACgIgEQgEgDABgIQAAgFACAAQAFAAAJAIIAGgBQAtgsA5gLQA8gMASACQADALABANQAIAqgjAvQgmAsghAAIgEAAg");
	this.shape_89.setTransform(-82.9,-6.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AhBAxQgUghgDgPQgHABgIgCQgGgEAAgKIAAgCQABgKAGgCQAMABAIAKQAZgfAqgPQApgPAkgEQAkgEAFABQACADAEAoQAEAogaAmQgnAxgwABQgtgDgUgig");
	this.shape_90.setTransform(-83.1,-6.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5B4339").s().p("Ag/AAQAJADAcADQAnAGAzgXQgBAEglANQgOAGgQAAQgaAAghgMg");
	this.shape_91.setTransform(-55.9,30.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AiBAhQgHgQgCgMQABgdACgDIABgEIAEABQAGAFBQAJQBOAJBbgoIAEgCIABAEQACADAGAdQACAQgEARQgEAQgCAAIAAAAQACgMAAgLQgCglgGgPQhSArhKgHQhLgJgVgJQgCAHAAAPQgBAVALAaIAAACIgJgRg");
	this.shape_92.setTransform(-58.1,17.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#936450").s().p("AgUAAQACgSASgCQAUACABASQgBAUgUABQgSgBgCgUg");
	this.shape_93.setTransform(-68,7.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgbAAQACgZAZgCQAaACACAZQgCAagaACQgZgCgCgag");
	this.shape_94.setTransform(-68,7.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#936450").s().p("AgUAAQACgSASgCQAUACABASQgBAUgUABQgSgBgCgUg");
	this.shape_95.setTransform(-44,6.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgcAAQADgZAZgDQAaADADAZQgDAagaADQgZgDgDgag");
	this.shape_96.setTransform(-44,6.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#705A4F").s().p("AAABmQgFgJAAgIIAAgCQgJh+gKg4IAMgHQAaAzAJCAIAAAHIABALQABAIgEAEQgDAEgHAAQgIAAgDgFg");
	this.shape_97.setTransform(-69.1,-3.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEBtQgKgTACgFQgJiBgKg3IgBgCIAXgOIACAEQAcAzAKCGIAAAHQAEARgIAMQgFAGgLAAQgLAAgEgHg");
	this.shape_98.setTransform(-69.1,-3.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#705A4F").s().p("AAKByQgHgJABgIIAAgCQgEhXgNg1QgNg2gIgTQAoAdANBDQANBAABAlIABANIABALQABAIgEADQgDAFgHAAQgIAAgEgFg");
	this.shape_99.setTransform(-46,-4.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAHB7QgIgTABgFQgHhqgQg4QgRg5gBgBIgEgIIAIADQAxAZAPBIQAQBGABApIABAMQAEAQgIANQgFAGgLABIgCAAQgKAAgGgHg");
	this.shape_100.setTransform(-46.4,-4.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#634C42").s().p("AAADJQibgLgwg9Qgvg9AEgvIAAgOQABgbAGgRQAGgVABgyQACggAZgZQAZgYAjgLQguAcgEAvQgBAwgGAVQgGAQgBAcIABAMQgEAuAtA7QAuA7CTAKQChAGA8g2QgrBLixAAIgbAAg");
	this.shape_101.setTransform(-57.7,19.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#705A4F").s().p("AgGDLQibgKgvg9Qgwg9AFgvIgBgOQABgaAGgSQAHgVABgyQACgnAjgbQAigbArgEQAFAGAfARQAeAQA1ABQAyAABIgpQAMAFAjAaQAkAaALApQAHAfALAdQATAtADBAIAAANQACB/jmAAIgegBg");
	this.shape_102.setTransform(-57.2,19);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgCDVQhugFg3glQg3glgTgtQgSgsgBgYQgBgyALgTIAHgWQAFgMgDggQgBgrAlgZQAmgZAugEIACAAIABABQAAAIA8ATQA6AUB2gwIACgBIABABQAIABAnAcQAoAcANAuQAHAfAKAdQAXAwAABNQgECIj+AAIgFAAg");
	this.shape_103.setTransform(-57.4,19.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAFBYQACgCgMgjQgKgWgMgVIgNgUQASARAOAcQAOAiAFAPQAjgNAVgPQAUgOAFgHQguhUhCgSQhFgRgHADQgEAAAAgDQAAgEAEAAQACgBAmAFQAlAFAsAbQAuAaAdA9IABACIgBABQgBADgXASQgWASgsAPIgDABg");
	this.shape_104.setTransform(-37.9,-7.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#A56955").s().p("AgEAwQgQgjgXgWIg1hNQACgBAlAFQAkAEAsAaQAtAbAdA7QAAACgWASQgWASgsAPQAAgEgNgjg");
	this.shape_105.setTransform(-37.9,-7.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#965948").s().p("AgWhTQAfAxAKArQAKAugGASQgCAFgBgBQgJAEgjADQAPhUgNhTg");
	this.shape_106.setTransform(-38.5,-0.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#965948").s().p("AiPACQAwgvBfgPQAEgCArAGQAsAGA1AsQhDA0hRAPIgUABQhJAAgug8g");
	this.shape_107.setTransform(-58.8,-11.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A56955").s().p("AjYB5QgEgDAAgDIgBgPQgEg5AthNQAshOCFgXQADgEA5ALQA5AMA7BJQAhAvALAuQAKAtgHATQgBAEgBAAQgUAGhfAHQhdAGhgAAQhiAAgggQg");
	this.shape_108.setTransform(-58.3,-4.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AhXCRQhjAAgigRQgHgGgBgGQgFghAPg4QAPg2AygyQAxgzBlgPQADgEA7AMQA7ALA9BNQAjAxAKAvQAKAvgGAUQgDAIgFABQgUAGhfAHQhZAHhaAAIgNAAg");
	this.shape_109.setTransform(-58.2,-4.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DDBD97").s().p("AgeABIAAgMQA3gFAHAIIAAALQgBAHgfAEQgegEAAgJg");
	this.shape_110.setTransform(-58.6,-9.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgdANQgIgHgBgCIAAAAIAAgVIADgBQAmgFARAEQARAEABABIABACIAAARIAAAAQAAACgIAHQgIAGgXACQgVgCgIgHg");
	this.shape_111.setTransform(-58.6,-9.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DDBD97").s().p("ABKCwQgHgDgJgPQgIgOgGgNIAAgBIgfgVIgCACQgRAQgYAQQgYARgMAAIgCgCIgCgGQAIgeAcghIABgBIAAgCQADgKgSg4IgQg0QgKgigBgLIAAgLIABgVQAAgUgFgTIAHgFIALgJIAQgOQAGASAOA5QAPA4AGBKIAAACIACABIAUAPQATAOAMANQAJAMALAdQAKAdABAVIAAAEQgBAFgCACIgCABIgBgBg");
	this.shape_112.setTransform(-27.5,15.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DDBD97").s().p("AgRAfQgDAAgBgDQgDgJAHgQQAGgPAHgNIABgBIAEgFIAWAPQgIAQgMAQQgJAQgKAAIgBgBg");
	this.shape_113.setTransform(-26.2,30.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgGC9QgGgBgDgGQgDgVAOgbQgkAegbADQgFgBgCgEQgCgEgBgGQACgSAOgVQAPgVAFgHQADgJgQg2IgPgvQgMgmgBgOIAAgMIABgVQAAgUgFgTIgBgCIAKgIIAQgNIAPgNIAEgEIACAFQACADAPA6QAQA6AHBWIAZATQATAQALAMQAKANALAfQALAeABAXIAAAFQgBAIgFADQgFAEgFgCQgKgDgIgOQgJgOgEgLQgGAPgOARQgLARgNAAIgDgBg");
	this.shape_114.setTransform(-27.5,15.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#5B1D02").s().p("Ag1gGQAPAGAeABQAdACAhgOQgFALgGAJQgjgKgWAEQgXAGgEADIgMgSg");
	this.shape_115.setTransform(-56.7,-16.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#721E00").s().p("AglgGQAFgEAVgEQAUgFAdAKQgQAZgWABQgVgDgQgUg");
	this.shape_116.setTransform(-56.6,-13.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FEFEFE").s().p("AgSASQgkgGgDgDIgJgQQASAIAmAFQAkAEApgcIgJAUIAAAAQggARgbAAIgRgBg");
	this.shape_117.setTransform(-56.7,-18.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("Ag1AOQgVgkgCgHIgDgJIAJAFQAFAHAsAMQArAMAxgtIAJgKIgDANIgKAdQgJAYgRAYQgQAYgYABQgigHgUglg");
	this.shape_118.setTransform(-56.8,-17);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AANARQABgCgDgLQgDgKgMgEIgBAAQgSAIgBACQgCACgDgCQgBAAAAAAQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgCAJgGQAKgIAMgBQAPAAANANQADADgDADQgCABgDgBQgIgIgJgCQAOANgBAPQgBABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgDAAgBgEg");
	this.shape_119.setTransform(-31.7,-31.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgxBDQAGABAfABQAiABAXgjQANgagEgZQgDgbgSgPQgSgNgRAFQgYAHgSAQIgRARQABgDAPgTQAQgSAZgIQAUgFAVAPQAVARAEAdQAEAcgPAcQgWAmgkAAQgTAAgXgJgAg9gaIAAAAIAAAAg");
	this.shape_120.setTransform(-29.7,-33.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#DDBD97").s().p("AAxAJQgFgZgTgPQgVgPgUAFQgeAJgPAWIAAgEQABgDAPgSQAQgTAZgHQAUgFAVAPQAVAQAEAeQAEAbgPAdQgDAHgFAGQALgbgFgcg");
	this.shape_121.setTransform(-29.7,-34.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CEAD89").s().p("AgzBCIgGgvQgFgmABgHQABgDAPgTQAQgSAZgIQAUgFAVAPQAVARAEAdQAEAcgPAcQgWAmglAAQgTAAgYgKg");
	this.shape_122.setTransform(-29.7,-33.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#DDBD97").s().p("AgzBCIgGgvQgFgmABgHQABgDAPgTQAQgSAZgIQAUgFAVAPQAVARAEAdQAEAcgPAcQgWAmglAAQgTAAgYgKg");
	this.shape_123.setTransform(-29.7,-33.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CEAD89").s().p("Ag6C1QArhAADhTQADhSgghLQAiADAdgOQAegPAFgiIACAGQgPAngfAQQgdAQgEAAIgEABIACAEQADADARApQAQApAIA5QAIBOgPAcQgPAdgTAFQgGADgLAAQgJAAgNgDg");
	this.shape_124.setTransform(-77.3,-20.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#DDBD97").s().p("Ag3DRQgUgBgVgOQglgbgChBQgBhbARg4QARg5ACgDQAcg+AsgXQArgXArAFQA+AJAOAVQACADAAADQgCAEgWACQgWABgfgBIgDgBIgBAEQgLAugiATQggATgFgBIgEABIACAEQACADASApQAQAoAIA6QAIBOgPAdQgNAcgVAFQgGADgMAAIgLgBg");
	this.shape_125.setTransform(-76.7,-22.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("Ag3DZQgWgCgXgPQgngcgDhGQgBhdAVg8QAUg/ADgDQAgg8AqgWQAogWAsAGQBDAKAOAWQAFAIgCAEQgFALgbABQgcACgVgCQgLAqgfATQgdATgQAEQAIANARAoQAQAlAHAzQADAaAAATQgBA3gQAVQgNAWgTAFQgIADgOAAIgKAAg");
	this.shape_126.setTransform(-76.7,-22.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgOAQQAAgJAGgKQAFgMANgDQADgBABAEQABADgEABQgMAEgDAJQgDAMAAACQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBg");
	this.shape_127.setTransform(-87.6,-31.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAZAJQgCgGgYgFQgMAAgLAJQgDACgCgCQgCgDACgDQANgLAPAAQAMABAKAHQAJAFAAABQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAIgCACIgDgCg");
	this.shape_128.setTransform(-87.1,-32.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgyAoQgPgdAEgbQAEgeAVgQQAVgPAUAFQAZAHAQATQAPASABADQACADgDACQgDACgCgDQAAgCgPgRQgOgSgYgHQgQgEgTANQgSAPgEAbQgDAZANAZQAeA0A/gcQAEgBABAEIACAAQgbAMgVAAQgkAAgWgjg");
	this.shape_129.setTransform(-89,-33.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#DDBD97").s().p("AgvAmQgPgcAEgcQAEgdAVgRQAVgPAUAFQAZAJANAVQAOAUgBACIgBAqQgBAogCAGQgYAKgUAAQgkAAgWgmg");
	this.shape_130.setTransform(-89.3,-33.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2B0801").s().p("AgggTQAEgNAfgBQAEABAMAKQAMALACAWQgFAKgXANQgFgUggghg");
	this.shape_131.setTransform(-44.9,-50.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAAAnQAAgCgIgSQgJgTgWgQIgCgCIABgDQABgCAKgKQAMgKAWACIABAAIAAAAQADAAAPANQAPAMADAcIAAABIgBABIgKALQgKAKgQAHIgEABg");
	this.shape_132.setTransform(-45,-50.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2B0801").s().p("AggALQACgWAMgLQAMgKAEgBQAfABAEANQghAhgDAUQgYgNgFgKg");
	this.shape_133.setTransform(-72.5,-50.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgEAqQgQgHgKgKIgLgLIAAgBIAAgBQADgcAPgMQAPgNADAAIAAAAIABAAQAWgCALAKQALAKAAACIACADIgDACQgVAQgKATQgIASAAACIAAAEg");
	this.shape_134.setTransform(-72.3,-50.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#472608").s().p("AklCtQABgJgPgPQgOgHgIAEIgBgJQADg5AXgwQAVguAEgEIACgDIgCgBQgWgOgUAKQAshMArgGQArgGAGAGIABAAIACgBQBog7BSgNQBWgNAeAEQgJAHgJAMIgEAGIAHAAQAEgCAtAIQAvAIAyAlQAzAkATBRIgNgDIgKgBQADABAOAsQAOArACAvQAAAOgDAMQgJAAgTACQgSACgNALQgIgSg3gdIgBgnIAAg7IAAgWIgBgNQgBACgKAkQgJAngCA2QgTgGg3gNQg4gOg1gDIAAgBQABgTgFguQgEgsgQgtIgEgJIgDAKQgCAAgIApQgIAmgCBJIAAAFQgQAAgwAGQgvAFgkARIAAgKQAAgSgEgZQgCgagMgVIgHgMIAAAOIABALQAAAXgFAuQgEAugQApIgFACQgMAAgcgTg");
	this.shape_135.setTransform(-59.5,-54.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AkGDKQgPgBgXgTIgBgCQABgFgNgQQgQgGgDAFIgFADIgBgGIgBgOQADg2ATgvQATgsAJgOQgMgHgNAEQgNAFgCACIgKAGIAFgLQArhVAvgKQAvgKAMAHQB7hGBcgIQBfgJAGAEIALABIgJAGQgCABgSARQAVAAAuAMQAvANAsAoQAtAoAPBQIACAHIgHgDIgOgGQAHAQAJAlQALAkABAoQAAARgEAPIAAADIgDAAQgDgBgWABQgWACgNANIgDADIgDgEQAAgCgPgQQgPgPgjgQIgCAAIAAgDIgBgmIAAhGQgEATgCAeIgDA7IAAAFIgEgCIhEgSQg+gQg9gDIgDAAIAAgDIAAgGQABgRgFgqQgDgogOgsQgLAjAAA5QABA7AAAGQgGgBg8AFQg7AEgnAVIgGADIABgHIABgQIgCgkQgCgWgFgTQAEAbgIAwQgGAvgRAoIAAACIgDABIgEAAIgMAAg");
	this.shape_136.setTransform(-59.6,-54.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FEFEFE").s().p("AgDAAQAAgDADgBQAEABAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_137.setTransform(-68.5,-36.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgKAAQAAgKAKgBQAKABABAKQgBALgKABQgKgBAAgLg");
	this.shape_138.setTransform(-68.3,-36.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEFEFE").s().p("AgDAAQAAgDADgBQAEABAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_139.setTransform(-47.5,-36.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_140.setTransform(-47.2,-36.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFF4E6").s().p("AACAOQgBg7gQglQAcAZADBEQgBA0gWAUQAJgbAAgqg");
	this.shape_141.setTransform(-65.3,-37.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FEFEFE").s().p("AgqAJQAAglANgdQANgcAQgCQARACANAcQAMAdABAlQgDBJgoAGQgngGgDhJg");
	this.shape_142.setTransform(-68.1,-37.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgvAJQAAglANggQANggAVgCQAVACANAgQANAgABAlQgDBRgtAFQgsgFgDhRg");
	this.shape_143.setTransform(-68.1,-37.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFF4E6").s().p("AADALQAAg4gSgkQAbAaAEBAQgCA1gWAUQALgaAAgtg");
	this.shape_144.setTransform(-44.6,-37.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FEFEFE").s().p("AgrAJQAAglAOgdQANgcAQgCQARACANAcQANAdABAlQgDBJgpAGQgogGgDhJg");
	this.shape_145.setTransform(-47.5,-37.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgvAJQABglANggQANggAUgCQAVACANAgQANAgABAlQgDBRgtAFQgsgFgDhRg");
	this.shape_146.setTransform(-47.5,-37.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgCAOQgDgCACgDQADgPAAgIQAAAAADAKQADAJgFAIIgBACIgCgBg");
	this.shape_147.setTransform(-58.6,-32.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgEAmQgVgFgGgTQgLgfAfgSQAWgHANAJQAMAKgBABQgBgCgMgFQgMgFgSAGQgaAPAJAYQAMAiAugNQABAAgLAEQgHADgJAAIgLgBg");
	this.shape_148.setTransform(-59.6,-27.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CEAD89").s().p("AiTDGQhJgfgegaQApAbA+AWQA9AXBEABQBdgGBGgrQBGgrAJgSQAGgNAAgdQgCg4gIg5IgKhCIgEgnQgEgjgMgnQAZAgAJA4QAJA3gBAHIAKA+QAIA2ABA0QAAAcgFAMQgJARhFAoQhEAphcAFQhTgChIgfg");
	this.shape_149.setTransform(-58.8,-33.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#DDBD97").s().p("AijDaQhRgogKgSQgGgNABgcQABg0AIg4IAKg7QgBgIAKg5QAJg5AagfQAUgRAugOQAtgNAogIIAtgJIAuAJQAoAIAuANQAtAOAUAQQAaAgAKA5QAJA5AAAHIAJA8QAIA4ACA0QAAAcgGANQgJAQhEApQhFAohcAGQhkgEhQgpg");
	this.shape_150.setTransform(-59.7,-36.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AikDiQhTgpgMgWQgJgVADgyQAFgxAGgrIAIgxQgBgKAKg6QAKg5AcghQAVgSAugNQAugOAqgIIAsgJIABAAIAvAJQApAIAuAOQAvANAVASQAcAhAKA5QAKA6gBAJIAIAyQAFAsADAyQADAxgJAWQgLAVhGAoQhFAnhcAFQhkgDhSgpg");
	this.shape_151.setTransform(-59.8,-36.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A56955").s().p("AABBPQgxgFgSgjQgTgjABgEIAAgCQgEACgIgEQgEgDABgIQAAgFACAAQAFAAAIAIIAGgBQArgsA3gLQA5gMASACQADALABANQAHAqghAvQgkAsggAAIgEAAg");
	this.shape_152.setTransform(-81.9,-6.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("Ag+AxQgUghgDgPQgGABgIgCQgFgEAAgKIAAgCQAAgKAGgCQALABAJAKQAXgfApgPQAngPAjgEQAjgEAEABQADADADAoQAEAogZAmQgmAxguABQgrgDgTgig");
	this.shape_153.setTransform(-82.1,-6.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#5B4339").s().p("Ag9AAQAKADAaADQAlAGAygXQgBAEgkANQgOAGgPAAQgZAAgggMg");
	this.shape_154.setTransform(-55.9,30.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("Ah8AhQgHgQgBgMQAAgdADgDIABgEIADABQAGAFBNAJQBLAJBYgoIADgCIACAEQABADAGAdQACAQgEARQgEAQgBAAIAAAAIABgXQgCglgFgPQhQArhGgHQhJgJgUgJQgCAHAAAPQgBAVALAaIAAACQgBgBgIgQg");
	this.shape_155.setTransform(-58.1,17.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#936450").s().p("AgTAAQACgSARgCQASACACASQgCAUgSABQgRgBgCgUg");
	this.shape_156.setTransform(-67.7,7.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgaAAQACgZAYgCQAZACADAZQgDAagZACQgYgCgCgag");
	this.shape_157.setTransform(-67.7,7.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#936450").s().p("AgTAAQACgSARgCQASACACASQgCAUgSABQgRgBgCgUg");
	this.shape_158.setTransform(-44.6,6.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgbAAQADgZAYgDQAZADADAZQgDAagZADQgYgDgDgag");
	this.shape_159.setTransform(-44.6,6.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#705A4F").s().p("AAABmQgFgJABgIIAAgCQgJh+gKg4IALgHQAZAzAJCAIABAHIAAALQABAIgEAEQgDAEgGAAQgIAAgDgFg");
	this.shape_160.setTransform(-68.6,-3.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgEBtQgKgTADgFQgJiBgKg3IAAgCIAWgOIACAEQAaAzAKCGIAAAHQADARgHAMQgFAGgKAAQgLAAgEgHg");
	this.shape_161.setTransform(-68.7,-3.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#705A4F").s().p("AAJByQgGgJABgIIAAgCQgEhXgNg1QgNg2gHgTQAmAdANBDQANBAABAlIABANIABALQAAAIgDADQgDAFgIAAQgHAAgEgFg");
	this.shape_162.setTransform(-46.5,-4.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAHB7QgIgTABgFQgGhqgQg4QgQg5gCgBIgDgIIAIADQAvAZAPBIQAPBGAAApIABAMQAEAQgHANQgFAGgLABIgBAAQgKAAgGgHg");
	this.shape_163.setTransform(-46.8,-4.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#634C42").s().p("AAADJQiVgLgug9Qgtg9AEgvIgBgOQABgbAGgRQAGgVABgyQACggAYgZQAYgYAigLQgsAcgEAvQgBAwgGAVQgGAQgBAcIABAMQgEAuAsA7QArA7COAKQCbAGA6g2QgqBLiqAAIgaAAg");
	this.shape_164.setTransform(-57.7,19.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#705A4F").s().p("AgFDLQiVgKgug9Qgug9AEgvIAAgOQABgaAFgSQAHgVABgyQACgnAigbQAggbApgEQAFAGAeARQAeAQAyABQAxAABEgpQAMAFAiAaQAiAaALApQAGAfALAdQATAtADBAIgBANQACB/jdAAIgcgBg");
	this.shape_165.setTransform(-57.2,19);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgCDVQhqgFg1glQg1glgRgtQgSgsgBgYQgBgyAKgTIAHgWQAFgMgDggQgBgrAkgZQAlgZArgEIACAAIABABQABAIA5ATQA4AUBxgwIACgBIACABQAHABAmAcQAmAcAMAuQAHAfAKAdQAWAwAABNQgECIj0AAIgFAAg");
	this.shape_166.setTransform(-57.4,19.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAFBYQACgCgLgjQgLgWgLgVIgNgUQASARANAcQAOAiAFAPQAhgNAUgPQAUgOAFgHQgthUg/gSQhCgRgIADQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgEADAAQADgBAkAFQAkAFAqAbQAsAaAcA9IABACIgBABQgBADgWASQgVASgqAPIgEABg");
	this.shape_167.setTransform(-38.7,-7.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#A56955").s().p("AgEAwQgPgjgWgWIgzhNQACgBAjAFQAjAEAqAaQAsAbAbA7QAAACgVASQgVASgqAPQAAgEgNgjg");
	this.shape_168.setTransform(-38.7,-7.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#965948").s().p("AgVhTQAeAxAJArQAKAugGASQgBAFgCgBQgIAEgiADQAOhUgMhTg");
	this.shape_169.setTransform(-39.3,-0.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#965948").s().p("AiJACQAugvBbgPQAEgCAqAGQApAGAzAsQhAA0hOAPIgTABQhHAAgrg8g");
	this.shape_170.setTransform(-58.8,-11.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#A56955").s().p("AjPB5QgFgDAAgDIgBgPQgDg5ArhNQArhOCAgXQACgEA3ALQA3AMA5BJQAfAvAKAuQAKAtgGATQgCAEgBAAQgTAGhaAHQhaAGhcAAQhfAAgegQg");
	this.shape_171.setTransform(-58.2,-4.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AhUCRQhfAAgggRQgIgGAAgGQgFghAPg4QAOg2AwgyQAwgzBggPQADgEA5AMQA5ALA6BNQAiAxAJAvQAKAvgGAUQgDAIgEABQgUAGhbAHQhVAHhXAAIgNAAg");
	this.shape_172.setTransform(-58.2,-4.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DDBD97").s().p("AgdABIAAgMQA2gFAFAIIAAALQAAAHgeAEQgdgEAAgJg");
	this.shape_173.setTransform(-58.6,-9.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgcANQgIgHAAgCIgBAAIAAgVIADgBQAlgFAQAEQAQAEABABIACACIAAARIgBAAQAAACgHAHQgIAGgWACQgUgCgIgHg");
	this.shape_174.setTransform(-58.6,-9.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#DDBD97").s().p("ABHCwQgHgDgJgPQgHgOgFgNIgBgBIgdgVIgDACQgQAQgWAQQgYARgLAAIgCgCIgCgGQAGgeAcghIABgBIAAgCQADgKgQg4IgRg0QgJgigBgLIAAgLIABgVQAAgUgEgTIAFgFIAKgJIAQgOQAHASANA5QAOA4AHBKIAAACIABABIASAPQATAOAMANQAJAMAKAdQAKAdABAVIgBAEQAAAFgCACIgCABIgBgBg");
	this.shape_175.setTransform(-28.7,15.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#DDBD97").s().p("AgRAfQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgDgJAGgQQAGgPAIgNIAAgBIAEgFIAVAPQgHAQgMAQQgIAQgKAAIgCgBg");
	this.shape_176.setTransform(-27.5,30.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgFC9QgGgBgCgGQgEgVANgbQgjAegZADQgFgBgCgEQgCgEgBgGQACgSAOgVQANgVAGgHQADgJgQg2IgPgvQgLgmgBgOIABgMIAAgVQABgUgGgTIAAgCIAJgIIAPgNIAPgNIAEgEIABAFQADADAOA6QAQA6AGBWIAYATQASAQALAMQAJANALAfQAKAeABAXIAAAFQgBAIgEADQgEAEgFgCQgJgDgJgOQgIgOgFgLQgFAPgNARQgMARgMAAIgCgBg");
	this.shape_177.setTransform(-28.7,15.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#936450").s().p("AgPAAQACgWANgCQAOACACAWQgCAXgOACQgNgCgCgXg");
	this.shape_178.setTransform(-73.2,2.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgWAAQACgaAUgCQAVACACAaQgCAagVADQgUgDgCgag");
	this.shape_179.setTransform(-73.2,2.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgCAjQgNgDgHgJQgSgXAPgUQAOgOANgBQANABAJAIQAJAHAAADQgGgFgZgGQgKAAgLAMQgMAQAPARQAPAVAggNIgKAGQgIAEgKAAIgFgBg");
	this.shape_180.setTransform(-76.3,-26.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("Ag6gMQAEADARAHQAZAJBHgBQgFADgtAEIgJAAQgjAAgXgZg");
	this.shape_181.setTransform(-64.8,27.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#2B0801").s().p("AgaAAQAUgUAQABQAMACAFAFQgaAOgGATIgVgVg");
	this.shape_182.setTransform(-85.2,-44.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgmgDIACgDQAYgZAVACQAaAHABAHIADAFIgGABQgRAFgKANIgIARIgCAFg");
	this.shape_183.setTransform(-85.1,-44.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#2B0801").s().p("AghgEQAMgQAWgDQASACAPAZIgNAUQgHgTgvgJg");
	this.shape_184.setTransform(-61.4,-48);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AAUAcQAAgCgNgNQgKgNgigBIgHgBIAEgGIAOgOQANgLARgBQAYACAQAgIABAAIgXAjg");
	this.shape_185.setTransform(-61.7,-47.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgQgDQgKgdABgFIAGAOIAOAaQAHAQAMAKIAMAJQgggOgKgbg");
	this.shape_186.setTransform(-70.3,17.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("ABOBDIAAgCQACAAASgRQASgRAAgpQgCgdgCgMQiZAhgsgVQgsgVAGgGQAEgBACADQgFAFArARQAsARCVgiIADAAIACADQACAEADAgQAEAdgOAfQgGAKgOAJQgNAIgDAAIAAAAg");
	this.shape_187.setTransform(-60.1,15.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#936450").s().p("AgWAAQACgXAUgCQAUACADAXQgCAYgVACQgUgCgCgYg");
	this.shape_188.setTransform(-46.4,5.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgeAAQADgcAbgDQAcADADAcQgDAdgcADQgbgDgDgdg");
	this.shape_189.setTransform(-46.4,5.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#705A4F").s().p("AgmB1QAAhcASg8QASg+ACgDQAMgTANgBQALAAAEAEQgHAKgRA4QgQA1gFBtIAAABIABAAIAAACIgBACQABADgPABQgWgCADgCg");
	this.shape_190.setTransform(-43.8,-5.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgtB6QgCgCAAgDIABAAIgBgOQADhYATg7QAUg9AEgEQAKgTAPABQAUADACAFIACACIgCADQgCgDgSAyQgTAxgHCCIAAAEIAAAFQgEAHgRAAQgTAAgFgGg");
	this.shape_191.setTransform(-43.7,-5.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A56955").s().p("AhGBfIAAgTQABgyAGg0IAIhEQAEgEATAEQAYABAYAiQAZAjAeBSQgJAJgmARQgbANgmAAIgdgCg");
	this.shape_192.setTransform(-36,-7.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AhLBmIgDgBIAAgDQgCg3AHhBIAKhLIAAgCIABgBQACgFAdAEQAUAEAcAjQAeAiAfBWIABADIgCABQgCAFgqAVQgfAQgqAAQgRAAgSgCg");
	this.shape_193.setTransform(-35.9,-7.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgRARQgogLgDgFQgDgBACgCQACgDADACQAFADAjAIQAiAIAmghQACgDADACQADADgCACQghAhgeAAQgIAAgIgDg");
	this.shape_194.setTransform(-70.6,-21.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#DDBD97").s().p("AAJDBQgGgJABgTQABgTACgLIADgNIgJAKQgSAUgWASQgXASgJgBIgBgBQgCgJALgcQAMgcAMgYIADgGIgGABQgKAAgSgBQgSgCgIgGQgCgDAAgDIAAgFIADAAQAHACAagPIABgBQAKgKANACIAOAEIAFACIABgFIAGgoQAGglABg5QAAgrgIgqQANABAdgFQAegDAfgSQAGAPADA4QAFBHg2B4IgBABIABACQALAqAAAVQAAAHgBACIgSgKIgCAEQgHAVgJAQQgIARgGACIgBgBg");
	this.shape_195.setTransform(-39.4,18.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AADDIQgGgIABgQQAAgHACgNIACgRQgNAQgZAVQgYAVgNAAQgEgCgBgEIgBgGQABgRAMgbIAVgrQgLABgSgBQgSgBgJgHQgFgEAAgGQgBgOALAAQAHACAWgNQALgKAMACQANACAHADQAFgJAEgiQAEghAAgvQAAgygKgxIgBgFIAGABQADABAggCQAjgDAkgVIADgDIACAEQAGACAFBMQADBIg3B4IAJAdQAFATABAPQAAALgEAFQgIgCgMgIQgFAPgJAWQgJAWgKADIgBAAQgEAAgEgDg");
	this.shape_196.setTransform(-39.4,18.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAOAKQABgHgfgGQgEgBAAgDQABgEADAAQATACAJAIQAIAGAAABQACADgDACIgCABQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_197.setTransform(-26.1,-33.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgZAXQgDgBABgDQAAgDAMgQQAMgRAbgFQADAAABADQAAADgDABQgZAFgKANQgKAPAAADQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_198.setTransform(-27.1,-34);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CEAD89").s().p("Ai0CKIgCgBQBQgjBAg5QA/g4AdhPIAVADIABgDQAlg6AjAKQAiARABAmIAAAEQgJAfgsAKQgrAKgHgBIgCABIgBABQg8BPhAAiQhDAhgGAAIgCAAIgCAGQgaAPgSAAQgGAAgGgCg");
	this.shape_199.setTransform(-40.3,-24.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#DDBD97").s().p("AguDPQgTgOABgFIAAgDIgDAAQiHgJhAhQQgggpgKgtQgLgqABggIABgXIADAIIA+gOIAFgjIAKg/IAEA9IADAiIAFgCQARgHAtgJQAtgJAGgBIADgBIAFgaIAKg5IgDA5IgBAcIAFgBQARgCAnAGIBIAMIAlAIIAEABIABgDQAHgdAAgsQACAWAAARQgBAigBACIAAADIADAAIAlAJQAgAHAPABIAAABQACACAAAEQgCAUgIAYIgBAEIAwAGIABgCQAmg6AjAKQAiAQABAnIAAAEQgJAdgsAKQgsAKgHgBIgBAAIgBABQg9BShDAhQhDAigGgBIgCABIgCAGQgYAPgSAAQgHAAgFgCg");
	this.shape_200.setTransform(-53.5,-31.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#705A4F").s().p("AgqBWQgCgIALgwQALgsArhFQAFgJALgCQADABADAEQgIAKgVAwQgTAugFBKQgEAFgMABQgJgBgHgIg");
	this.shape_201.setTransform(-69.9,-5.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgxBZIgBgBIAAgBQgDgEALgxQAKguAuhMQAEgJATgFQAIABAGAJIABACIgCADQgDABgXAxQgXAvgEBRIAAABIgBABQgDAGgVAEQgMgCgJgMg");
	this.shape_202.setTransform(-69.8,-5.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgxDtQgUgLgBgKQiJgKhBhRQghgrgKguQgLgsABghQABglABgCIADgOIAFANIAGARIAagGIAZgFIAEgjIAJg8IAFggIAHAAIAFA4IAEA/QAVgGAkgIIAzgKIAHgkIALg/IAGghIAIABIgCAgIgCA9IgCAlQAeAAA4AJIBKAPQAFgSABgbIABgwIAAgRIAHgBQALAwgBAjIgCAhIAoAJQAbAGAMABQAEAAACADQADAEAAAIQgCAXgGARIASADIAQACQAbgnAVgIQAVgHALAFQAnASABAqIAAAEQgHAigrALQgrAMgPAAQg5BNhBAiQg/AjgRADIgCAEIgBABQgaARgVAAQgIAAgHgDg");
	this.shape_203.setTransform(-53.5,-34);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#634C42").s().p("AgrCIQgehEAEhOQAEhQABhTIAMgEQAGAFAaAIQAYAIAtgCQAEALAIAmQAIAmABA1QAEBQgwBKQgRAYgXASQgUgXgJgTg");
	this.shape_204.setTransform(-36.1,16.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#634C42").s().p("AhRBkQgug2AAhTQAAg9AYhHQgNB1AyBjQAzBlCPAVIgOABQiFAAg+hGg");
	this.shape_205.setTransform(-69.3,22.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#705A4F").s().p("AjaCGQgvg2AAhTQAAhRAqhgIAXgHIAYgIQA+AvBKgHQBHgFBugrQAGAFAbAIQAaAIAtgCQADALAIAmQAJAmABA1QADBQgwBKQg3BLh6APQgkAEgdAAQiGAAg/hGg");
	this.shape_206.setTransform(-55.6,18.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AjhCMQgug3gChVQgBhUAthmIAAgBIA2gTIACACQBcBKDehTIACAAIACABQAAACAaAKQAaAJAzgCIADAAIABADQACADALAzQALAzgDBHQgDBEgpA+Qg6BPh9APQgkAEgfAAQiKAAhChKg");
	this.shape_207.setTransform(-55.6,18.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#965948").s().p("Ag0AwQgxgNgWg0QAOgVAVgMQAPgCBJAAQBJAAAyALIABABQgeAogvAgQgkAVggAAQgQAAgPgFg");
	this.shape_208.setTransform(-55.7,-11);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#A56955").s().p("AjCBLQAAgVASg9QASg+AwgiIBZgCQBIAAAyALQAGAAAgAlQAiAmAWBcQgTAMhrAQQgdAFgiAAQhVAAhzgfg");
	this.shape_209.setTransform(-53.5,-5.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AjIBRIgDgBIABgDQgBgFAHglQAHgjATgsQATgrAmgXIABgBIAAAAIAugBQAogBAwACQAxACAgAIIAAABIABAAQAFgBAjAmQAjAmAYBjIABADIgDABQgFAIhvAVQgiAGgoAAQhZAAh6ggg");
	this.shape_210.setTransform(-53.5,-5.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#A56955").s().p("AglBZQgbgMgZgXQgBgPAOgzQAPg2A3glQAGAKAXATQAZASAqAKIgGADQgUAJgXAiQgXAggSBIQgJgDgcgMg");
	this.shape_211.setTransform(-74.6,-9.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgOBwQgFAAgggNQgggNgfgcIgBgBIAAgBQgCgHARg6QAQg8BAgpIADgCIACADQAAAEAYAWQAbAYA4AHQAWgCACADIgBAHIgXgBQgKABgNAHQgTAJgWAgQgWAhgQBIIAAAEg");
	this.shape_212.setTransform(-72.8,-9.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#DDBD97").s().p("AgbCcQgegjgDh4IAAgfIAAgCIgGgVQgEgUgBgWQgBgRAHgKQAQgVAWgVQAUgTACgFQACAAADAFQACADABAFIgCAGIgPAeIgNAVIAAACIAAABQAJAQAKAdQAJAdABAYQAAAIgCAGIgHAZIABACQACADAUATQAVAUAkASQgJAagTAlQgSAkgRAGIgCAAQgIAAgbghg");
	this.shape_213.setTransform(-81.6,-24.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgeCtQgggdgFiDIABgVIACgYIgJgXQgGgTgBgWQAAgTAHgMQASgVAWgWQAQgQAEgGQACgEADAAQAIgBAFAJQAEAGAAAGQAAAFgCAEIgOAbIgNAXQAFAJAMAfQAKAfABAcQAAAKgDAHIgDAJIgCAMQADAGAWATQAVASAgAQIADABIgBADQgEAOgVAtQgVAtgZAJIgBAAIgCABQgIAAgcgYg");
	this.shape_214.setTransform(-81.5,-24.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#472608").s().p("ACcD3QhngZiHgsQiJgsh5gtIAAgDQAEg1AFgFIADgGIgHABQgIACgHAIQAMg6AfgnQAfgnAFgCIgEgGQgbAKgRAQQAZguAhgPQAhgOADABIAGgBIgDgFQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIABgFQABgJAigPQAigOBggNIABgBIABgBQgBgEA4gTQA3gUCDARIgdANIgTAJIAMACQADAAApANQApANAvAjQAuAiAVA/IgXgcIgGAEQADACARAyQAQAvgHBQQgHBPhDBdQgHAGgTAAQgeAAg/gPg");
	this.shape_215.setTransform(-56.4,-47.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("ACvEDQhYgThvgjQhwgjhcggIh3gqIgCgBIAAgDIAAgGQABgiAHgRIgMAMIgIALIABgNQAFgvAXglQAWglASgTQggAVgDAGIgGgEQAUgzAigUQAhgUAPgCIgBgEIABgHQARgkCagUQADgJA7gSQA8gTCJAUIAMACIgVAJIgdAOQAkAGBGAnQBFAoAYBcIACAOIgKgMIgQgTQATAmADBOQAHBghVB6QgIAIgYAAQgbAAgugKg");
	this.shape_216.setTransform(-56.2,-47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]}).to({state:[{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},40).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178}]},1).wait(29));

	// leg
	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgaAEIgOgLQAWANAPAEQAKgEAdgWQACgCADADQgBADgSANQgSAOgHACQgJgCgOgLg");
	this.shape_217.setTransform(-45.1,48.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#634C42").s().p("AgqgSQAqgCArAcQgKAJgLACQgfgcghgJg");
	this.shape_218.setTransform(-36.8,62.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#634C42").s().p("AiuAAQByACBngRQBqgTAagUQgHARgOAOQgPAOgGAQIgCARQgrAShYALQgMACgNAAQhMAAhJg3g");
	this.shape_219.setTransform(-50.3,37);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#634C42").s().p("AglBbIAAgDQACgQAPgRQAJgLAFgKQAHgagBgwIgBgmIgEghQASABAAgEIAAAoQAAAkAEAmQAGAjAPAJQACACgUAGQgUAFgFAFQgHAIAAAMQAAALAUgCQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAIAAADIgbASQgRgLgCgNg");
	this.shape_220.setTransform(-55,53);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#705A4F").s().p("AA2B4QgwABgfASQgiATgIAGQgRgLgCgMIAAgEQACgQAPgQQAJgLAFgMQAJgZgBgxQgBgwgBgKIAAgCIgDAAQgxgIgfgSQgggRgMgNQCvATBOgaQBPgbARgXQgHASgOAOQgPAOgGARQgDAQgCAqQgBApAAAoQAAAsABANQAFASATAIQAMAFALANQAEAGAAAEIAAAEQgJAMgOABQg0gtgwAAg");
	this.shape_221.setTransform(-50.1,48.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#3D1E16").s().p("Ag4AjQgvgGgSglQgFgOgBgNQAKAVAqAMQApAHBAgFQBCgEAgggQgEArgnAOQgmAPgXAAQgQABgQAAQgWAAgagCg");
	this.shape_222.setTransform(-45.5,76.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgNA5QgigKgLgQQgLgRABgDIAAgBIAAgGIABgBQAAgEAZgcQAagbBDgFIASABQg+AHgVAbQgXAaAAADIAAABIgBAGIABABQgCADALARQALAQAgAKQASAEAcABIgNAAQgmAAgXgFg");
	this.shape_223.setTransform(-51.4,70.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F4EFED").s().p("AhIA5QgigKgLgQQgKgRABgDIgBgBIABgGIAAgBQAAgEAagcQAZgbBFgFQBEADAfAeQAgAcAAAEIAAABIADAMQgXAjhEAHQgcADgXAAQghAAgZgFg");
	this.shape_224.setTransform(-45.5,70.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#442D25").s().p("AhtAAQBYgtA1AOQA3AOADAIQAHACAYAnQgPgRgegQQgggRguAAQg0ACgbAQQgdASgKARQAHgdAEgGg");
	this.shape_225.setTransform(-45.9,65.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("Ag6BlQgygGgTgrQgNgtAJgfQAIgiADgDIACgCQBDgoAvAAQAtgBAZAOQAZAOAAACQAEACATAZQASAaAEAnQAAAqgiAUQgiAUgsADQgPABgPAAQgXAAgdgDg");
	this.shape_226.setTransform(-45.5,71);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("ACeC0QhKguhGATQhEAUgGAHIgCABIgCgBQgVgOgCgQIgBgFQACgTARgSQAIgKAFgKQAJgVABgrIgBglIgBgZQg/gLgkgYQgjgZgBgEIgHgHIAKABQCRARBNgPQBPgQAfgXQAegWgBgDIAHgKIAAALQgDAdgVATQgPANgGAOQgDAQgBArIgBBRQAAAqACANQADAOAQAGQAOAGAMAPQAIALgDAJQgFALgMAEIgMAEIgCAAg");
	this.shape_227.setTransform(-50.7,47.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#634C42").s().p("AgbCbIACAFIADAEIgBABQgDgFgBgFgABfCHQgCgggCgSQgBgRgKgbQgQgcg9giQg7glg0g3IgMgzQAcAtAyAiQAwAhAuAUQAtATAMAEIAGBPIAGBSQgMgMgOgFg");
	this.shape_228.setTransform(-68.8,42.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#705A4F").s().p("AgbCWIABgFQADgJAHgFIAIgFIAFgCIgDgEQg1hRgbhPQgahRgIgtQAcAtAyAhQAwAiAuATQAtAUAMADIAGBPIAGBTQgpgjgsATQgqAUgOANQgHgJAAgIg");
	this.shape_229.setTransform(-68.8,42.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgZCxQgHgJgBgHIABgGQAKgSAPgGQhKhugahhQgZhkABgIIAIgBQASA1A5AoQA2AoA1AWQA1AXAEAAIADACIAAACIADA5IAHBTIADAoIgHgGQgvgggvAUQgsAWgEAFIgIgJg");
	this.shape_230.setTransform(-69,41.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#3D1E16").s().p("AhEAOQgYgRgDgZQALAXA/AKQAhADAhgIQAggJATgPQgEAPgLAJQggAcgvABIgHAAQgoAAgXgPg");
	this.shape_231.setTransform(-65.1,72.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAPA2QgrgHgQgQQgPgRABgDIgBgBQABgJACgHIAEgJQAGgHAfgQQAegRAtACQgkAFgYAOQgWAOgFAFIgEAJQgCAHgBAJIABABQgBADAQARQAPAQAsAHIADAAIgOAAIgPAAg");
	this.shape_232.setTransform(-68.8,67.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#F4EFED").s().p("AgYA2QgtgHgPgQQgQgRABgDIgBgBQABgJACgGQABgFADgFQAGgGAdgQQAcgQApgBQArgBAvAoQAAAPgDAQQgMAQgjAMQgcALgfAAIgQgBg");
	this.shape_233.setTransform(-64.8,67.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#442D25").s().p("AgQAJQgzALgZATQAbgnAHgIQApgmAcAEQAqACATAUQAQASAFAuQg7gsgyAJg");
	this.shape_234.setTransform(-64.1,60.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AhLBbQgsgoAQguQAHgTASgZIAVgeIAAgBQAtgoAeAEQAwADASAVQAVAWADA0QAEAygdAiQgiAegxACIgIAAQgqAAgZgRg");
	this.shape_235.setTransform(-64.8,65.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,-74.8,78,156.3);


// stage content:
(lib.seeCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tosee();
	this.instance.setTransform(158.4,105.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(161.7,130.8,78,156.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;