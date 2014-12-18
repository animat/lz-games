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



(lib.truk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E89F64").s().p("AAxCZQhrgEiGgaQAIgJAIgnQAIgnAAhWQAAgkgBgtQAWgJBogLQBkgLCIAkQgQAQgGBrQgCA6AUBjIgjABQglAAhEgCgABfCHIAwACIAHjrIgwgCgAAFCDIAwACIAHjsIgwgBgAhEB/IAvACIAIjrIgvgCgAiKhrIgHDnIAwABIAHjrIgwgCg");
	this.shape.setTransform(-60.5,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C66914").s().p("AgkAZQgKgOABgPQAYgMAZgHQAbgHAJALQAIANgDAGQgEAIgJADIgHACIggALQgLADgHAAQgHAAgEgCg");
	this.shape_1.setTransform(14.8,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C66914").s().p("AgrCAQAJgHAJgKQALgRgJgQQgFgKgIAAQgCAAgEACIADhkIAChUIgBgNIAAAAQgBgDAFgEQATgKAjAQQAXAUAABHIgCBGIgFBjIgGADQgNAEgNAAQgUAAgbgLg");
	this.shape_2.setTransform(-2.5,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#545454").s().p("AAAAhIADhJIABgLQgCgzgOgWQAUANAFAkQABA/gCA3QgDA5gFAQQgDAFgDAEIAChcg");
	this.shape_3.setTransform(2,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#893E00").s().p("AgaAAQAkADAMgeIABgCQABAAAEAHIABAIQAAAGgEAGQggAggVAAIACgeg");
	this.shape_4.setTransform(-8.5,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7A76B").s().p("Ag7BnQgZgMgGhPQAAgQADgVQATgGAsgRQArgSAPgSIABgBIgFgRQAPgFAeAnQASAggCAhQgCAmgHAHQgcARgyAXQgqAWgRAAIgEgBg");
	this.shape_5.setTransform(86.6,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACHAOQAOAWgNgFQgWgJhagLQhZgKhMAHQAAgDAJgPQAIgRAMgCQALAAAvgBQAwgBAvABQAxABANAIQATAPANAUg");
	this.shape_6.setTransform(-45.6,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#545454").s().p("ACIAfQgWgJhagLQhZgKhMAHIAJgSQAIgRAMgCIA6gBQAwgBAvABQAxABANAIQATAPANAUQALASgGAAIgEgBg");
	this.shape_7.setTransform(-45.6,8.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhPBhIAFAAQAeAEAIgOIADh6IABhcQAAgKAKgGQAYgNAoATQAgALAKA2QABA4gCA7QgCA8gHAUQgGAOgTAHQglANgugVIgCgBQgkARgGgDIgFAAg");
	this.shape_8.setTransform(-4.1,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8FEFF").s().p("AhgCWIACgkQBChfAPgcQANgegJgCQgKgCgLgMQgGgbAohSQAphSAhg3IALAOQAMAUAIAuQgfBshDCYQhCCag1BtQAJhRADhHg");
	this.shape_9.setTransform(0.6,-26.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8FEFF").s().p("Aj3FzIgCgMIAAgBIAAgBIAAgEQBGg/BghmQBehmAdhMQAdhKh+APIA2g7QAwg3Apg1QApg1gWABQgmAIgCgBQgBgBAAAAQgBAAAAAAQAAAAABAAQAAgBABAAIB5hyQAiAQAXAdQAJASAGAYIl+KHQhgAHglAOg");
	this.shape_10.setTransform(-44.7,-27.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8FEFF").s().p("AinBxIEYmbQAdACAcAEIlTJPQAAhaAChgg");
	this.shape_11.setTransform(-52.8,-38.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E4F4F9").s().p("AhSFdQiMADg1AUQATgRAAgDIAAgBIAAgBQgEhDgChUQgDhUAAhYQgBiEAKhnQAKhnAZgZQAhgdA7gZQA7gZBZgDQA9ACA9APQA+AOAhAwQAXApAIBgQAJBfAABzQgBCPgGB2QgGB1gDAhQjMhKiKAEg");
	this.shape_12.setTransform(-44,-26.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E4F4F9").s().p("AhmAQQgBikgMhdQgMhdgGgSQCrg+A1BaQASAgAJBVQAKBVADBoQADBlAABXQAABsgBAZIhDAUIh1AiIhHAVQAVjTgBiXg");
	this.shape_13.setTransform(0.4,-23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiEF+QAiltgTi4QgUi6gGgCIgBgFIAFgBQC1hDA6BhQAbA1AJCTQAJCRAACIQgBCIgBAUIAAAEIkUBQg");
	this.shape_14.setTransform(0.4,-22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AEPGsQikg+h6gHQh9gHhHAPQhHAQgGAEIgFgIQAlgegBgCIgFhuQgEhcgBh5QAAh/AKhrQAKhrAdgdQAhgeA9gZQA9gaBagDQA9ACBBAPQBAAPAkAzQAbAzAIB2QAJB2gDCGQgDCHgGBkIgHBzIgBAHg");
	this.shape_15.setTransform(-44.9,-26.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhyBOQAGgPAvghQAvggAyggIBJgtIAGAJQhJArhEAsQhGAvgIAPg");
	this.shape_16.setTransform(-68.4,16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhMArQAIgMAmgdQA9giAxgWIAEAJQg7AbguAZQgyAdgMATIAAAAQgBAAAIgMg");
	this.shape_17.setTransform(-32,19.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAYIAIgxIAJAAIgJAzg");
	this.shape_18.setTransform(-85.5,46.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAYIAIgxIANABIgLAyg");
	this.shape_19.setTransform(-29.3,47.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAOAUQAAgxgkguQAEgDAWAcQAXAcgEBgIgLACQADgEgBg0g");
	this.shape_20.setTransform(-86.9,35.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUASQgBgqgzgpQAFgCAfAYQAhAZgFBSIgOACQAEgEgCgsg");
	this.shape_21.setTransform(-31.4,36.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A04902").s().p("AgQBsIACg7IADhiIACg7IAaABIgCA7IgDBiIgCA7IgagBg");
	this.shape_22.setTransform(-72.4,42.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A04902").s().p("AgQBsIACg7IADhiIACg7IAaABIgCA7IgDBiIgCA7IgagBg");
	this.shape_23.setTransform(-64.7,43.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A04902").s().p("AgQBsIACg7IADhiIACg7IAaABIgCA7IgDBiIgCA7IgagBg");
	this.shape_24.setTransform(-57.2,43.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A04902").s().p("AgQBsIACg7IADhiIACg7IAaABIgCA7IgDBiIgCA7IgagBg");
	this.shape_25.setTransform(-48.2,44);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAlC5IgGgXQgEgUAAgMIABgMQAEghADhFQADhDgOg2QgTg1gegaQgfgbgEAAIAKgEQAFABAdAaQAbAaAXA2QAXBFgGA6QgGA8AAA9QAJBAAHAMg");
	this.shape_26.setTransform(-12.2,37.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgpAhQgLgLgCgOIgBgPIAAgDIADgBQAKgGAmgNQAjgNASATQAKARgEAKQgEAMgQAFIgGADQgfANgUAAQgLAAgIgDg");
	this.shape_27.setTransform(14.7,15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C66914").s().p("AkbEfQAFgiAAgqQgDhqgahQQgahPgSggIALgEICcgzIABgEIgBgCQBmglBxgtQBzgsBWgnQBXgnARgTQAOASACA7IgBAiIgMBmQgFAmgBAXIABANIgDABIAHAYQgNAMgkAOQgjAPgiALIgGACIgBAEQgEAZAAAVQABAyAQAdIgEABIgPAIQggg0g6gEQgxgBgjAiQghAhgDA1IAAAHQAAAPADAQQhnAxhgAqIhoAtQAPgxAFgjg");
	this.shape_28.setTransform(54.9,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhEB3QgjgSgFhXQAAgUAEgZIABgGIAGgCQAigKAjgPQAigPANgLIgHgYIAIgEQACgCAUACQAVADAaAmQAdA7gOAzQgIAZgEgBQgJAGg+AfQgyAagcAAIgLgBg");
	this.shape_29.setTransform(86.9,18.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ABBAhIgSgeQgNgWgcgQQgXgLgTAMQghATgGAEQABgFAZgVQAZgVAjAOQA5AmAIA5IgLgSg");
	this.shape_30.setTransform(-31,27.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABGCkQh2gDiYgeIgLgDIAKgGQADAGAOgvQANgvgFipIgBgDIAEgCQAGgFBvgPQBtgPCYApIAHACIgEAGQgFgCgPA/QgPA/AdCgIABAGIgFAAQgEABggAAIhcgBg");
	this.shape_31.setTransform(-60.8,42.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRgaQACgBAOALQALAKAIAfIgKACQgRg2gIABg");
	this.shape_32.setTransform(-80.3,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E4F4F9").s().p("AgvAAQAChcAggkQAHgHAGAAQAIAAAHAHQAgAlABBbQgHCBgpAHQgpgHgGiBg");
	this.shape_33.setTransform(-88.1,40);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E4F4F9").s().p("AgUCNQgkgqgChjQABg+ARgsQARgrAXgCQAZACARAsQAQArABA+QgBA/gRAsQgRArgYACQgKAAgKgLg");
	this.shape_34.setTransform(-32.7,43.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgbCUQgngsgChoQABhFAUgtQATgtAcgCQAeACATAtQATAuABBEQgBBFgUAuQgTAtgdACQgOAAgNgOg");
	this.shape_35.setTransform(-32.7,43.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgoBnQgQgpgBg+QAChgAjgnQAKgKAKAAQAMAAAKAKQAjAnABBgQgBA/gQApQgRApgYABQgYgBgQgqg");
	this.shape_36.setTransform(-88.1,40);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGUhTQgNgGgRAMQgSANhXAhQiKAoiogOQirgQhigOQhDgJgMgaQgMgZAIgSQgHAIgLAMQgBACgCACQgiAqAHAfQAIAeAWApQAOAVBRAMQBSAMBmAEQBmAFBLABQBMABAEAAQBcAPCYhFQAIgGAHgEQA8gogKgoQgKgqgYgIg");
	this.shape_37.setTransform(-51.2,61.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7A76B").s().p("ACBBvIhQgBQhLgBhmgFQhmgEhSgMQhRgMgOgVQgWgpgIgeQgHgfAigqIADgEIASgUQgIASAMAZQAMAaBDAJQBiAOCrAQQCoAOCKgoQBXghASgNQARgMANAGQAYAIAKAqQAKAog8AoIgPAKQh9A5hUAAQgTAAgQgDg");
	this.shape_38.setTransform(-51.2,61.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhUgDQAKg8BMgCQBOAKAEA7QgKA8hMACQhNgKgFg7g");
	this.shape_39.setTransform(-63.3,69.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgmLgQgiAAh8gCQh7gDh4gNQh4gMgVgdIgJgSQgUgkgCggQgCgdAeglIAEgEQAWgZAKgHQgMgegQg4QgQg4gBgzQAAgbAJgSQAohOAxARQAngcArghQAqggAIgLQgBgagBiIQAAhkADhyQADhzAJhZQAIhYARgYQAngqBhgfQBgggBmgQQBngQA7AGIAlAEQBRAFBLAUQBKAUAjA9QAgBBAIA5QAIA5ABBCIAAAWIABAWIACBMIACCNIACBMIABAsIAAAZIABAcQAJAMAiBYQAhBXAFCAQAAAqgFAiQgGAjgOAxIhIAmIAAgHQgQhlhQgLQgrgBgfAkQgfAkgEA4QgBAnAPAiIACAFIgFACQjXBWhrAAQgVAAgRgDgAE6KFQgMgegBgiIAAgIQAFg9AhgmQAignAwABQBUALATBnIAWgLIASgJQAchlgBhUQgEiDgehNQgehOgFgDIAAgBIgChjIgChNIgCiNIgChMIgBgsQgBhBgIg4QgIg4gfg/Qghg6hIgTQhJgThOgFIgmgEQg5gGhmAQQhkAQhfAfQhgAfgmAoQgSAbgJB7QgIB6gBCXQgCCXADBxIAAABIgBABQgLAQg0AnIhKA2IgBABIgCAAQgYgFgRAKQgRAJgYAqQgOAgANBCQAOBDAaBEIABADIgDADQgFABgcAgIgEAEQgdAjADAbQADAbASAiIAJARQANAVBYALQBYAMB4AFQB3AFBqAAQBlATD6hkg");
	this.shape_40.setTransform(-34.4,-0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DF8020").s().p("AggLbIhQAAQhNgBhmgFQhmgFhSgMQhRgLgOgWQgWgpgIgfQgHggAigqIADgEQAcgfAHgDQgPgjgUhPQgVhOASgtQAXgqATgLQASgLAaAFIBBgvQA5gqANgSIgBhiQgBhfACiBQADiBAIhqQAIhrASgaQAmgpBggfQBfgfBlgQQBngQA7AFQBWAGBXASQBWARAnBDQAkBKAGBAQAGBBACBTIACBqIAEC8IABBiQADACAaA9QAaA+AMBsQAMBrglCMIgwAYQgPhohVgNQguAAggAlQggAlgEA6QgCAqAQAiQhkAphiAaQhFASg1AAQgTAAgTgDg");
	this.shape_41.setTransform(-34.9,-0.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A04902").s().p("AkIBgIBHghIDphYICTg4IAAABIBGghIAHAHIAAABQgPAWibBBQiZA9i/BHQgEgKgKgIg");
	this.shape_42.setTransform(61.5,-11.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A04902").s().p("AhOAAIgEhJQAsAOA3AcQA5AbAJAaIhOAaIhPAaIgEhKg");
	this.shape_43.setTransform(27,-1.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A04902").s().p("Ag3AAIA4gTIAUABIAjABIhPAlQgOgLgSgJg");
	this.shape_44.setTransform(36.6,-5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C66914").s().p("AgfLWIgBAAQhQAAhbgCQhbgDhSgHQhNgGg1gKQgzgKgJgPIgIgSQgJgRgFgOQgIgTAAgRQABgYAaggIADgEIAXgYIAKgJIAEgCIgCgEIgGgQQgkhkgEhMQABgZAHgPQAfg4AXgBQAMgCAPACIACAAIACgBIAFgDIBKg3QAwgkAKgPIABgBIAAgBQgDhwABiXQACiXAIh6QAJh6ASgdIAJgJQAsgmBegcQBegdBfgOQBhgPA2AFIAmAEQBPAFBIATQBJATAhA6QARAkAKAfQAJAmAJBBIACBHIACArIAAAmIACBWIAAADIAAAAIADByIABA1IABBkIABABIAGAKIAAAEIACAAQAPAcAVBHQAWBHADBoQAABVgbBkIgSAJIgWAMIgBgEIAAgBIgCgLIAAgBIgEgLIAAgBIgEgKIAAgBIgEgKIgBAAIgFgKIAAAAIgGgJIAAAAIgGgIIgBgBIgGgHIAAgBIgIgGIAAgBIgIgFIgBgBIgHgEIgCgBIgHgDIgCgBIgHgDIgCAAIgHgCIgCgBIgKgBQhAABgjA9QgTAhgCAqIAAAJQAAAhANAeQi1BFhgANQgVACgRAAQgTAAgRgDg");
	this.shape_45.setTransform(-34.9,-0.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C66914").s().p("AglA5IgtgRIgChBIBUgeIBVgfIAACaIg6ATQgggSgggMg");
	this.shape_46.setTransform(27,-14.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C66914").s().p("AiBBNIhPgDIAAiZIB1AJIC3ANIB1AIIh5AuIjZBTg");
	this.shape_47.setTransform(57.5,-15.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A04902").s().p("AhUAIIBXgZIBSgaIAAAcIhZAeIhNAcIgDgjg");
	this.shape_48.setTransform(27,-22.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A04902").s().p("AjzAAIAAgcICBAKIDPAQICYAJIgxAWg");
	this.shape_49.setTransform(61,-24.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#545454").s().p("AgGCOQgtgEgdgqQgcgpACg7QAEhGAsgpQAegbAiABQAkACAbAeQAoAugCBEQgFBGgsApQgcAaggAAIgEAAgAgugCQABBYA4AMQA6gGAKhaQACgzgbgfQgPgQgTgCQg4AGgKBag");
	this.shape_50.setTransform(2.6,57);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#898989").s().p("Ag0gBQAIhRAwgFQAPABAMANQAYAcgCAvQgIBRgwAFQgxgKAAhPg");
	this.shape_51.setTransform(4.2,56.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgdCbQg1gDgigVQgjgUAAgcQAGgpBCgPQgDgSABgRQAFhKAugtQAggdAoABQAnACAfAhQAqAxgCBIQgFBLgvAsQgdAagiACQgaAIgeAAIgKgBg");
	this.shape_52.setTransform(-0.9,57.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1.5,1,1,3,true).p("AANBQQAFANAjAIQAjAHAFABQABgFgIg4QgJg2gog1Qgmg1hbAFQAGAGAvBCQAtA/AHA0g");
	this.shape_53.setTransform(7.9,47.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C66914").s().p("AA1BlQgjgIgFgNQgHg0gtg/QgvhCgGgGQBbgFAmA1QAoA1AJA2QAIA4gBAFIgogIg");
	this.shape_54.setTransform(7.9,47.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#545454").s().p("AAAA6IABgeIAAgPQgBhTgSgbQAFACAFAEQAbAZAABMIAAADIAAAZIgBAyQgCgCgDgBQgEgDgHARIgCgpg");
	this.shape_55.setTransform(-76.4,-6.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C66914").s().p("AgMB1QgPgIgFgTQgJgyADg+QAEg/ABgHIAAAAQAAgCADgMQAEgLANgEQANgDAMADQAVAWACBqQgBA5ADAcIgBAEQAAAPAEAKQgLADgKAAQgQAAgPgHg");
	this.shape_56.setTransform(-80.4,-4.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#893E00").s().p("AgGAbQgQgOgBgcIAGgUIACAHIAAACQgCAPAPAVQAJALARABIgDAOIgEAAQgLAAgMgJg");
	this.shape_57.setTransform(-73.3,6.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAcCHQgJgHgFgLQgbAIghgNQgTgLgFgXQgKgzADg9QAEg/ABgKQAAgEAFgPQAFgOATgFQAfgGATASQAhAdAABVIgBBvQACAGAFAGQAJAKARAAIAHAAIgIAfIgDABQgCABgEAAQgKAAgYgMg");
	this.shape_58.setTransform(-77.5,-3.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AltLwIhfAAQhbABh1gHQh1gGhUgUIgYgIQgWgHgHgMIgVgxQgNggAEgcQAPgxAmggQgGgDgKhVQgDgEgJg4QgJg4AUg5QAagxAcgEQAdgEACADICMhbIgFhIQgFhDgDhgQgEhhAChVQAFj1Aog3QAWggBjgnQBjgoCxgXQBWgIBlANQBgAKBEAdQBLAqASBEQAVBCAIBUQAHBUgBBAIAABCICtg2IH8AnQADgCAYAMQAYAMAHA1QABA6gMBHQgNBFACAtQAFAvgFA3QgFA3gNANIhFArIg5AiQABgEgZgdQgYgdg+ABQg7AMgRA1QgSA2APAiImSC3QACgJgWg6QgWg6hJACQhKASgPBKQgRBJAEAsQgEADhEAZQhEAZhQATQguALgiAAQgaAAgTgGg");
	this.shape_59.setTransform(-2.3,-0.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#545454").s().p("AgFB8QgtgDgcglQgcglABgzQAEg0AggiQAfgiArABQAtADAdAlQAcAlgBAzQgEA5gnAkQgdAagjAAIgEAAgAgEhIQgcAagDAuQgBAsAYAdQAOARAVABQAUABARgQQAbgaAEguQgChQg6gLIgCAAQgTAAgOAPg");
	this.shape_60.setTransform(62.2,34.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#898989").s().p("AgCBQQgRgBgNgPQgVgaABgnQADgqAYgYQAOgMAOAAQAxAKABBHQgDAqgYAXQgOANgNAAIgBAAg");
	this.shape_61.setTransform(64.9,34.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgeCKQg1gDgigVQgjgUAAgcQAGgqBEgOIAAgSQAEg5AjgkQAiglAwABQAxAEAfAoQAfAngCA4QgEA9gpAnQggAcgoABQgYAHgcAAIgNAAg");
	this.shape_62.setTransform(58.5,34.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C66914").s().p("AgeADQgBgJgFgPIACAAQAoADAcAeIADAKQg5gIgKgLg");
	this.shape_63.setTransform(71.3,27.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ABiB0QgigDgdgIQgcgIgCgPQgFgwgug+QguhBgHgHIgIgIIALgEQAzgOAqAaQA7AvAZBJQAZBLAAAMIACAKg");
	this.shape_64.setTransform(66.1,19.7);

	this.addChild(this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.7,-76,195.6,152.1);


// stage content:
(lib.truckCJS = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.truk();
	this.instance.setTransform(100,100);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvmPnIAA/OIfNAAIAAfOg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100.1,100,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;