(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 200,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.pasta = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC2525").s().p("AgBAOQgOgEgBgHQgBgFABgBIADAEQADAGAJACQAEAAAEgGQAFgEADgGIACgGIgBAIQgCAFgFAHQgEAHgFAAIgBAAg");
	this.shape.setTransform(50.6,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#890E0E").s().p("AgMABIAKgBQAHgDAIAFg");
	this.shape_1.setTransform(45.6,-12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#890E0E").s().p("AAHAMIgHgRQgEgJgIgBIgKgCQARgGAFAIQAHAHACAIQADAPAGADIAFADQgNgBgDgIgAgWgRIAAABIAAgBg");
	this.shape_2.setTransform(25.3,-14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#890E0E").s().p("AgaAeQAPgEACgKQACgKgBgKQgBgNAIgJQACgEAHABQAHACAGADIAGADQgKABgEAHQgFAHgCAIIgFAQQgBAHgHADQgHACgGAAIgGAAg");
	this.shape_3.setTransform(11.2,-10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#890E0E").s().p("AgRA/IgIgCQgHgCgGgFQgHgEABgIIAHAGQAHAGAOABQANgBAFgIQAHgIACgMQABgIgCgPQgCgNABgPQAAgPAIgJQAMgMAIgBQAIgBABABIgGADQgGADgGAFQgHAFgBAIIAAAYQABAPgCAUQgBATgJANQgIAKgMAAIgGAAg");
	this.shape_4.setTransform(-2.4,-5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#890E0E").s().p("AgiAfQgJAAgIgEIAFABQAFACAHgDQAQgHAMgOIASgXQAJgMAHgCQAIgBAFAJQAEAIACAMIAFAWIgGgFQgGgFgHgEQgHgEgHABQgIACgLAHQgMAIgGAHQgGAGgHAAIgDgBgAA0ATIAAAAIAAAAg");
	this.shape_5.setTransform(-11.7,-10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#890E0E").s().p("AgdAPIgHgDIAFAAIALgCQAEgBAHgHIANgLQAIgGAJAAQAKABADADQADAEAAAEIAAADQgHAAgLACIgTAIIgPAGIgFAAQgFAAgEgBg");
	this.shape_6.setTransform(-23.9,-8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#890E0E").s().p("AgcAYIgBgDQAEADAGgDQAGgCADgJQAEgKAGgJQAFgLAIgEQAJgDAEACIAEADQgJgBgHAHQgHAGgEAIIgDAMQgEAPgQABIgCAAQgFAAgBgCg");
	this.shape_7.setTransform(-34.5,-7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC2525").s().p("AHaBYQAFgKgCgIQgDgIgGgGIgOgMIgRgMQgJgFgKgEQgUgHgRgNQgIgGgFgKQgGgKgJgIIgOgIIgOgIQgdgRghAHQgXAGgbAFQgbAFgYgHIgZgIQgMgEgOgBQgLAAgJACIgTAHIgVAJQgKAEgLAAQgJgBgJgEIgPgHIgOgEQgXgEgUABQgTABgVAJQgUAJgYABQgYABgVgGQgWgHgWAAQgWAAgXAFIg5ARQgdAIgZAQQgJAEgIACIgTADQgVACgKAOQgLAOgHATIgCAKQgBAHgCAGQgCAFgEgDQgDgDADgKIAGgTIAGgNQAHgQAJgIQAJgJAPgGQAOgHAOgEIAdgHQAIgCAIgEIAQgHQAfgOAigKQAhgKAjAAIAkACIAkACQASABAQgEIAjgLQASgGASgCQAOAAAOADQANADANAGQAMAEAMADQANADAOgCIAXgHQAQgGAOgBQAPgCAQAIQAXALAWAAQAVAAAagFQAYgFAYABQAYABAVAOQAJAGAHAIIANARQAJAMAMALQAMAJAOAGQAHADAHAFIANAIIASAJQAIAEAHAGQAHAGADAJQABADAAAIQgBAIgDAGQgCAEgDAAIgEgBg");
	this.shape_8.setTransform(11.3,-15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#6D0A0A").ss(1,1,1).p("AFXhjQgWgOgZgBQgZgBgZAEQgaAFgUABQgUAAgWgLQgQgIgPABQgOABgOAFQgOAFgOADQgNADgMgDQgMgDgLgFQgMgEgLgDQgNgDgOgBQgOgBgOADQgOACgMAGQgMAFgNAEQgYAFgcgDQgbgDgagBQgjABgiAKQgiAKggAOQgQAHgQAHQgQAIgQAFQgXAHgQALQgQAKgLAVQgFAKgEALQgEALgCALQgBAGAAAHQAAAIADAFQAEAGAHAAQAIgBAGgEQAHgHAEgJQADgKAEgJQAEgIAMgEQAIgDAEADQAEADADAFQADAFAGAFQAHAGALADQAKACAKgCQAOgDALgFQAKgFAKgCQALgCAOAHQAKAGAIACQAJADAMgEQAKgEAIgIQAJgJAKgDQATgFALAHQAKAIADAOQACAOgEAPQgEAKgDAKQgEAKAHAKQAHAJALACQALADALgCQASgEAGgMQAGgMAAgQQAAgPgBgOQAAgKAAgLQAAgKAFgJQAHgKAMgDQANgCAJAJQACADACAEQACAFACADQAIAPAQAEQAYAFAMgTQAGgJABgLQACgJAKgFQAIgFAGACQAGACAFAEQAGACAGACQANADAHgFQAHgHAFgLQAFgKAIgHQAIgIAPAEQAKAEADAJQADAJAGAIQALAJAIAAQAIgDAIgLQAGgJAHgJQAIgJALgBQANgBAMAJQAMAIAEAMQACAJgCAGQgCAHgEAIQgDAIgBAIQgBATANALQANAKATACQARACAIgKQAHgJAEgQQABgHgBgKQgBgJABgJQAAgHAEgDQAIgFAHACQAHACAFAFQAFAFACAGQADAJADAMQADALAGAHQAGAHANgDQAJgDACgHQACgHACgGQABgHAIgCQAHAAAGAHQAGAHAHAIQAGAIAHADQAQAGAHgGQAIgHABgPQAAgQgGgFQgHgGgNgFQgRgFgRgKQgRgKgPgMQgMgKgJgLQgIgLgIgLQgJgLgMgJg");
	this.shape_9.setTransform(11.3,-11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A01212").s().p("AijB/QgLgCgHgJQgHgKAEgKIAHgUQAEgPgCgOQgDgOgKgIQgLgHgTAFQgKADgJAJQgIAIgKAEQgMAEgJgDQgIgCgKgGQgOgHgLACQgKACgKAFQgLAFgOADQgKACgKgCQgLgDgHgGQgGgFgDgFQgDgFgEgDQgEgDgIADQgMAEgEAIQgEAJgDAKQgEAJgHAHQgGAEgIABQgHAAgEgGQgDgFAAgIIABgNQACgLAEgLIAJgVQALgVAQgKQAQgLAXgHQAQgFAQgIIAggOQAggOAigKQAigKAjgBQAaABAbADQAcADAYgFQANgEAMgFQAMgGAOgCQAOgDAOABQAOABANADQALADAMAEQALAFAMADQAMADANgDIAcgIQAOgFAOgBQAPgBAQAIQAWALAUAAQAUgBAagFQAZgEAZABQAZABAWAOQAMAJAJALIAQAWQAJALAMAKQAPAMARAKQARAKARAFQANAFAHAGQAGAFAAAQQgBAPgIAHQgHAGgQgGQgHgDgGgIIgNgPQgGgHgHAAQgIACgBAHIgEANQgCAHgJADQgNADgGgHQgGgHgDgLIgGgVQgCgGgFgFQgFgFgHgCQgHgCgIAFQgEADAAAHIAAASQABAKgBAHQgEAQgHAJQgIAKgRgCQgTgCgNgKQgNgLABgTQABgIADgIIAGgPQACgGgCgJQgEgMgMgIQgMgJgNABQgLABgIAJQgHAJgGAJQgIALgIADQgIAAgLgJQgGgIgDgJQgDgJgKgEQgPgEgIAIQgIAHgFAKQgFALgHAHQgHAFgNgDQgGgCgGgCQgFgEgGgCQgGgCgIAFQgKAFgCAJQgBALgGAJQgMATgYgFQgQgEgIgPIgEgIIgEgHQgJgJgNACQgMADgHAKQgFAJAAAKIAAAVIABAdQAAAQgGAMQgGAMgSAEIgKABIgMgCg");
	this.shape_10.setTransform(11.3,-11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F7DD6D").ss(1,1,1).p("AHlhWQgFADAAAGQABACABACQAHALABANQABAOgJALIgDACQgCACgCACQgMgDgLADQgKADgIAEQgDACgCABQAHgJAEgKQADgKAAgHQgBgGgCgDQgCgEgCgCQgHgFgJAAQgKAAgLAFQgJAFgLAJQgLAJgIAOIgEAIQAAACgBACQgBACAAAAIgBAAQgDgBgCgGQgDgGgBgHQgCgJgEgJQgEgJgJgFQgLgHgPAFQgHACAAAHQAAALADAKQAEAKAFAJQAHANACALQABAFgBAGQgBAHgEAEQgDAEgFAAQgHAAgCgLQgDgLAAgOIAAgCQgBgPgDgNQgDgMgKgIQgKgHgUgDQgEAAgDACQgEADAAAFQABAOAEAUQAEARACATQACAUgIAKQgGAIgQAAQgJgBgEgHQgEgGgBgIQgCgIACgGQACgGAEgGQAGgIAEgKQAAgBACgKQACgKgBgNQgCgMgIgJQgIgGgKgCQgLgCgLADQgWAHgGAUQgBABAAACQAAgCAAgBQgDgNgLgLQgLgLgNgDQgUgEgLAOQgJAMACAQQgBgCgBgCQgIgLgPgGQgPgFgPADQgHACgHAFQgDgOgLgGQgIgEgKACQgJADgIAIQgHAIgFALQgCgNgKgKQgIgIgNABQgPABgQAKQgPAJgLALQgCgFgEgEQgIgJgMgBQgNABgJAGQgKAHgGAGQgNANgIAUQgDgKgGgIQgGgIgIgFQgOgJgPADQgKADgIAIQgMgBgKAEQgLAEgHAKQgCACgBACQgJgFgLgCQgKgCgJACQgJABAAAIQAAABAAAEQABAEAAAEIAAAEQABAHABAKQAAAGAAAGQgGADgHADQgHADgBABQgCABgDABQgBgBgCgBQgJgJgLgEQgMgEgLAAQgMgBgLABQgJABgBAJQABABgBAAQACAJAJAAQAKgBAKAAQAKABAIADQAHACAHAHQACACACABQAAABAAABQABAHAFAEQAFAEAEACQASAIATgCQATgCAOgMQAJgHAEgJQABABAAABQAIAIALAFQAMAFAMAAQAQANAVAEQAQADAOgEQAOgEALgKQABAAAAgBQAJACAKgBQANgCAMgFQARAHAWgEQAKgDAKgEQAFAIAHAFQANAJAPgBQAQgBAPgJQAQgMAPgNQAAAAACgEQAEgEAFgDQAEgEAAAAQAKAHALADQATAFANgJQgBAEAAADQAAACABABQACAPANAKQATANAVgHQALgDAJgJQAIgIAEgLQAEgMAAgNQgBgMgBgMQgBgJgBgJQAAgKACgJQADgJAMgEQANgDAIAHQADACAAAKQAAALgDALQgCAIgFAFQgEAHgEAJQgDAJACAOQADASAKAKQAKALAPAAQAZAAAMgPQAHgIACgMQADgLgBgMQgCgVgEgTQgCgJgBgIQAJADADAIQADAIABARQAAAAAAACQAAADAAACQABAKACAMQACAMAHAIQAHAJAOgBQAOAAAJgLQABAJAFADQAGAGAJAAQAJABAIgCQAJgBAEgCQAMgGAHgHQAIgHAGgJQAAAAACgCIACgDQAGgHAHgFQAHgEAKgFQAGgCAFgCQgHAJAAAOQAAAEABAEQAAADAEAEQADAFAKAAQAMAAANgHQANgHAEgNQABgDgBgEQABgJgNgJQACgDABAAQAOgRgBgWQgBgRgKgQQgCgEgEgBQgEgBgEADgABwgZQgEAFgHAGIgPAOQAAAAgBABQAAgBAAAAQgBgLgCgMQgDgKAAgKQgBgKADgFQACgCACgBQACgBAFABQAIACAHAHQAHAHABAGQAAACABABQAAAGgEAFgAhdgeQgHAUgTATQgTAVgXANQgEgDgEgFQgEgHAAgJQgBgMAGgLQAFgNAJgLQAFgFAJgIQAJgHAKgGQAKgFAIgBQAGAAABACQAFAFABAIQAAAHgDAIgAgcgwQgDARgRAWQgQATgXASQAEgSANgSIALgWQAEgHADgHQAEgHAEgEQAHgHAFACQADACABAGQAAACAAACgAgQAhQgNANgPAKQgJAGgKABQgKABgHgFQgEgDgCgEQAUgNARgSQARgSALgRQAGASAPAQQgDADgGAEQgGAFgBABgAiGAyQAOgLANgNQgCAIAAAIQgKAFgJACQgDABgDAAgAAogjQACACABAFQABAFgGAJQgEAGgGAGQgHAEgHAFQgIgHgFgJQgEgJAAgKQgBgDABgEQACgJAJgCQAJgBAJADQAKADAEAGgAAeATQAPgKAKgMQAGgJABgHQACAKABAJQAAAGgBAFQgHASgRgFQgFgCgFgDgACIASQACANgEAMQgFANgOAFQgMAEgKgHQgHgFgBgHQAAAAAAgBQAAgJAGgJQAGgKAFgGIAMgLQAGgEAFgGQAFgGADgIQAAAGAAAEQABAJABAHQABAIAAAIgAGigsQAEgBABABIAAABQAAACgCAGQgJAYggAQIgOAGQgKADgJADQgJAEgGAFQACgHgBgHQAAgCAAgCQgDgOgIgPQgGgMgDgKQABAAABAAQADACADAGQACAGABAGQADAKAEAKQAFAIALAEQAJADAGgDQAGgDADgFQADgEABgDIADgHQAJgQAWgMQAFgDAEAAgAF7AiQgFAEgHADQgGADgIABQgHAAgCgBIAAgCQACgDAKgEQAJgDAHgCQABgBAGgCQAGgDAEgBQgFAGgFAFgAHSAYQAAgGADgFQADgFAGgFQAHAFABAEQAAAAAAABQgCAEgHADQgGAEgFAAgAlHgTQgEAFgDAEQgEAFgDAFQAAgCgBgDQgBAAAAgBQAAgDACgDQAGgGAIgCQAAAAAAABgAlrAAQAAABABADQgCACgEAEQgHAFgJAEQAAgCAAgCQgBgKgBgIQAAgBAAgEQAHABAHACQAGADADACgAmMA9QABgBABgBQAHgHACgLQAOgFANgJQABAPgMAKQgMAIgPABgAlJATQACANAFALQgDgBgDgDQgEgEAAgFQAAgBAAgCQABgEACgEgAkYgeQAGAFAFAIQAFAHABAIQAAABAAABQABAGgFAMQgEAMgJAKQgHAJgHACQgEgFgDgFQgEgGgCgJQgDgJgBgLQAAgIACgJQAEgHACgHQAEgFAGgCQAGgCAHAEgAjkA/QgOAIgSgDQgIgBgIgEQAGgEAFgGQAJgKAGgNQACAJAEAHQAHALAJAGgAiyglQAAAJgMARIgHALQgFAGgFAJQgEAJgCALIgCAKQAAACAAABQgHgEgFgIQgFgIAAgKQgBgPAGgMQAGgPAKgKQAGgGAHgEQAGgDAEgBQAEABADACQADAEAAAEgAi1AzQgFABgEABQgDAAgCAAQAAgDAAgDIABgIQABgEACgDQABAHAFAHQACACACADg");
	this.shape_11.setTransform(11.3,-6.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDBE26").s().p("AkHBYQgVgEgQgNQgMAAgMgFQgLgFgIgIIgBgCQgEAJgJAHQgOAMgTACQgTACgSgIQgEgCgFgEQgFgEgBgHIAAgCIgEgDQgHgHgHgCQgIgDgKgBIgUABQgJAAgCgJIAAgBQABgJAJgBIAXAAQALAAAMAEQALAEAJAJIADACIAFgCIAIgEIANgGIAAgMIgCgRIAAgEIgBgIIAAgFQAAgIAJgBQAJgCAKACQALACAJAFIADgEQAHgKALgEQAKgEAMABQAIgIAKgDQAPgDAOAJQAIAFAGAIQAGAIADAKQAIgUANgNQAGgGAKgHQAJgGANgBQAMABAIAJQAEAEACAFQALgLAPgJQAQgKAPgBQANgBAIAIQAKAKACANQAFgLAHgIQAIgIAJgDQAKgCAIAEQALAGADAOQAHgFAHgCQAPgDAPAFQAPAGAIALIACAEQgCgQAJgMQALgOAUAEQANADALALQALALADANIAAADIABgDQAGgUAWgHQALgDALACQAKACAIAGQAIAJACAMQABANgCAKIgCALQgEAKgGAIIgGAMQgCAGACAIQABAIAEAGQAEAHAJABQAQAAAGgIQAIgKgCgUQgCgTgEgRQgEgUgBgOQAAgFAEgDQADgCAEAAQAUADAKAHQAKAIADAMQADANABAPIAAACQAAAOADALQACALAHAAQAFAAADgEQAEgEABgHQABgGgBgFQgCgLgHgNQgFgJgEgKQgDgKAAgLQAAgHAHgCQAPgFALAHQAJAFAEAJQAEAJACAJIAEANQACAGADABIABAAIABgCIABgEIAEgIQAIgOALgJQALgJAJgFQALgFAKAAQAJAAAHAFQACACACAEQACADABAGQAAAHgDAKQgEAKgHAJIAFgDQAIgEAKgDQALgDAMADIAEgEIADgCQAJgLgBgOQgBgNgHgLIgCgEQAAgGAFgDQAEgDAEABQAEABACAEQAKAQABARQABAWgOARIgDADQANAJgBAJQABAEgBADQgEANgNAHQgNAHgMAAQgKAAgDgFQgEgEAAgDIgBgIQAAgOAHgJIgLAEIgRAJQgHAFgGAHIgCADIgCACQgGAJgIAHQgHAHgMAGQgEACgJABQgIACgJgBQgJAAgGgGQgFgDgBgJQgJALgOAAQgOABgHgJQgHgIgCgMIgDgWIAAgFIAAgCQgBgRgDgIQgDgIgJgDIADARQAEATACAVQABAMgDALQgCAMgHAIQgMAPgZAAQgPAAgKgLQgKgKgDgSQgCgOADgJQAEgJAEgHQAFgFACgIQADgLAAgLQAAgKgDgCQgIgHgNADQgMAEgDAJQgCAJAAAKIACASIACAYQAAANgEAMQgEALgIAIQgJAJgLADQgVAHgTgNQgNgKgCgPIgBgDIABgHQgNAJgTgFQgLgDgKgHIgEAEIgJAHIgCAEQgPANgQAMQgPAJgQABQgPABgNgJQgHgFgFgIQgKAEgKADQgWAEgRgHQgMAFgNACQgKABgJgCIgBABQgLAKgOAEQgJACgJAAIgMgBgAkJA1IgLAKQAIAEAIABQASADAOgIQgJgGgHgLQgEgHgCgJQgGANgJAKgAgxAVQgRASgUANQACAEAEADQAHAFAKgBQAKgBAJgGQAPgKANgNIAHgGIAJgHQgPgQgGgSQgLARgRASgAB9gKIgLAKIgMALIgLAQQgGAJAAAJIAAABQABAHAHAFQAKAHAMgEQAOgFAFgNQAEgMgCgNIgBgQIgCgQIAAgKQgDAIgFAGgAmBApQgCALgHAHIgCACQAPgBAMgIQAMgKgBgPQgNAJgOAFgAjCAnIgBAIIAAAGIAFAAIAJgCIgEgFQgFgHgBgHIgDAHgAklggQgGACgEAFQgCAHgEAHQgCAJAAAIQABALADAJQACAJAEAGIAHAKQAHgCAHgJQAJgKAEgMQAFgMgBgGIAAgCQgBgIgFgHQgFgIgGgFQgFgDgEAAIgEABgAiGAyIAGgBQAJgCAKgFQAAgIACgIQgNANgOALgAjGgsQgHAEgGAGQgKAKgGAPQgGAMABAPQAAAKAFAIQAFAIAHAEIAAgDIACgKQACgLAEgJIAKgPIAHgLQAMgRAAgJQAAgEgDgEQgDgCgEgBQgEABgGADgAF7AbIgHADIgQAFQgKAEgCADIAAACQACABAHAAQAIgBAGgDQAHgDAFgEIAKgLIgKAEgAh5g2QgKAGgJAHIgOANQgJALgFANQgGALABAMQAAAJAEAHIAIAIQAXgNATgVQATgTAHgUQADgIAAgHQgBgIgFgFQgBgCgGAAQgIABgKAFgAlCArQgFgLgCgNQgCAEgBAEIAAADQAAAFAEAEIAGAEIAAAAgAgsg3QgEAEgEAHIgHAOIgLAWQgNASgEASQAXgSAQgTQARgWADgRIAAgEQgBgGgDgCIgDAAQgEAAgFAFgAFCgVQAIAPADAOIAAAEQABAHgCAHQAGgFAJgEIATgGIAOgGQAggQAJgYQACgGAAgCIAAgBQgBAAAAAAQAAAAgBAAQAAgBgBABQgBAAgBAAQgEAAgFADQgWAMgJAQIgDAHIgEAHQgDAFgGADQgGADgJgDQgLgEgFgIQgEgKgDgKIgDgMQgDgGgDgCIgCAAQADAKAGAMgAA3gDQgKAMgPAKIAKAFQARAFAHgSQABgFAAgGIgDgTQgBAHgGAJgAHVANQgDAFAAAGIAAAAQAFAAAGgEQAHgDACgEIAAgBQgBgEgHgFIgJAKgAmCgDIACASIAAAEIAQgJIAGgGIgBgEIgJgFIgOgDIAAAFgAAIguQgJACgCAJIAAAHQAAAKAEAJQAFAJAIAHIAOgJQAGgGAEgGQAGgJgBgFQgBgFgCgCQgEgGgKgDQgGgCgGAAIgGAAgABVg9IgEADQgDAFABAKQAAAKADAKIADAXIAAABIABgBIAPgOIALgLQAEgFAAgGIgBgDQgBgGgHgHQgHgHgIgCIgEAAIgDAAgAlVgMQgCADAAADIABABIABAFIAHgKIAHgJIAAgBQgIACgGAGg");
	this.shape_12.setTransform(11.3,-6.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F7DD6D").ss(1,1,1).p("Ai/BLIAAgBQABgIgCgGQgCgFgFgGQgFgIgFgLQAAgBgDgKQgCgKAAgLQAAgNAIgIQAIgHAKgDQALgDALADQAXAGAHAUQAAABAAABQAAgBAAgCQADgNAKgLQALgLANgFQATgFANAOQAJALgBAQQABgCABgCQAHgMAOgGQAPgGAPACQAIABAHAFQABgOALgGQAJgFAJACQAKACAIAIQAIAIAFAKQABgNAJgKQAJgJANAAQAPABAQAIQAPAJAMAKQABgFAEgFQAIgJAMgBQANAAAKAGQAKAGAGAFQAOANAIATQADgKAGgIQAGgJAHgFQAOgKAOADQALADAIAHQAMgCALAEQACAAACABQgEgGgGgHQgQgRgWgOQgWgOgWgJQgWgJgQgEQgkgFgjgBQgjAAgjgCQghgBgfAGQgcAHghAIQgrAJgsADQgrADgsACQgrADgrAGQgPACgVACQgVACgUAEQgTAEgOAIQgQAKACAMQACAHAFAHQgDABgDADQgCACgCAEQgCACAAAFQAAAHAEAKQAFAJAHAJQgCgBgDgBQgJgEgKgCQgLgCgMADQgCgCgDgCQgBgCAAAAQgKgLAAgNQAAgLAGgLQABgDAAgCQAAgGgFgDQgEgCgDABQgEABgCAEQgJARAAAPQAAAWAPAQQAAAAADADQgHAGgCAFQgDAGAAAEQAAAEABADQAFAMAOAHQANAGAMgBQAKgBACgEQAEgFAAgCQABgFAAgDQgBgPgIgIQAFABAHADQAKAEAHAEQAIADAGAIIACACQACACAAAAQAHAJAIAGQAHAHANAFQAEACAIABQAJABAJgBQAJgBAGgGQAEgDABgJQAJAKAOAAQAOgBAGgJQAHgJACgLQAAgEABgDQAAgIAAgHQAAgCAAgDQAAgEAAAAQAAgRADgJQACgIAKgDQgCAHgBAKQgDAUgBAWQAAACAAACQABAKACAJQADAMAHAIQAOAOAYgCQAPgBAJgKQAKgLACgTQAAAAAAgBQAEAAADAAQAGgBAGAAQABAFADAFQAEALAJAIQAJAIALADQAWAFASgOQANgLABgOQAAgCAAgBQAAgEgBgDQAOAIASgGQALgEAKgHQAAAAAEADQAFAEACADQAFADAAABQAPAMARALQAPAIAQAAQAQAAAMgJQAHgGAEgIQAKAEAKACQAUADAPgHQgYgCgYgFQgQgEgQgEQgRgLgPgOQgSgRgMgSQgFAUgOAQQACACACABQgTgEgUAAQgNgJgIgLQgGgJgCgHIAAAAQgBALgBAJQAAAHACAFQACAEABACQgLACgMAFQgEABgEACAhdgdQAEgBADABQACABABACQAEAFAAAJQAAAKgCAJQgBALgBALQABACAAACQgBgCgBgBIgPgNQgIgGgEgFQgFgFAAgEQAAgBAAgBQACgHAGgHQAHgHAIgDgAiEBGQgCgIABgJQAAgIAAgJQAAgIAAgJQAAgFAAgFQAEAHAGAGQAFAGAGAEIAMALQAFAGAGAIAiEBGQAEgBAFgBQAQgEASgHQABABAAABQAHAJAAAJQAAAAAAABQAAAGgHAGQgKAHgMgDQgOgEgGgNQgBgDgBgEQgKACgKACAAfgjQAEgCAIAGQAFAEADAHQAEAGAEAIIAMATQAOATAGASQgYgQgSgVQgSgTgDgRQgBgCAAgCQAAgGAEgCgAADgIQABADAAAEQAAAIgEAJQgEAKgIAJQgHgFgHgGQgHgFgEgGQgGgIABgFQAAgEACgBQAEgHAJgEQAJgDAKABQAJABACAJgAg6AvQAMgCAMAAQABAAABAAQACACADABQgFADgEACQgOAFgIgLgAAHAxQABAAABABQAXAFAXAHQAOAEAPAEQADACAEACQgCAEgEADQgHAFgJAAQgKAAgKgGQgPgJgPgMQAAgBgGgEQgEgDgCgCgACCgcQAQAKAIAJQAKAJAGALQAGANAAAMQAAAJgEAHQgDAFgEAEQgYgMgUgTQgUgUgIgSQgDgIAAgHQAAgIAFgFQABgCAGgBQAMABAQAKgABvAvQANANAPAKQgDgBgDAAQgKgCgKgEQAAgIgCgIgADSgTQALAKAHAMQAHAOAAAPQAAAKgEAIQgFAIgHAFQAAgBAAgCIgCgKQgDgLgFgIQgFgJgGgIIgHgKQgNgPgBgJQABgEADgEQACgDAEAAQAEAAAHADQAGADAGAGgAC+A+QADgGACgIQABAEABADIACAIQAAADABADQgCABgDgBQgFAAgEgBQACgDACgDgADvBQQgDgBgDgCQAJgHAGgKQAEgIACgJQAGANAJAKQAGAFAGAEQgIAEgIACQgOADgMgEQACgBACgBQAOgFAMgHACxBWQAIADAJAAQAKABAIgCQABAAAAABQAZASAfgHQAVgEAPgOQANgBALgGQALgFAHgJQABgBAAgBQAFAJAJAHQAPAKATABQATABARgJQAEgCAFgEQAFgEABgIQAAAAgBgBQACgCACgBQAHgIAGgDQAJgDAKgBQAKgBAJABQAKgBAAgJQAAgKgKAAQgLgBgLABQgMABgLAFQgLAFgJAJQgBABgCACQgCgCgDgBQAAAAgIgDQgHgDgGgCQgBgGAAgGQAAgLABgIQAAAAAAgCQAAgEAAgFQAAgEAAAAQAAgIgJgBQgJgBgKACQgLADgJAFQgBgCgCgCQgGgHgIgEQAHALACALQADAMgGAJQgGAIgKAFIAAAAIgBAAIAAAAQgKAFgKAFQgBABAAAAQgCAIgDAFQgDAFgEAEQgFgBgHgGQALgHANgIAFIgLQAIABAFAGQADADAAABQAAABgBAAQAAADAAADQgEgFgEgDQgEgFgDgEQAAgBAAAAgAEeA2QgBgBgBgBQgJgKgGgMQgFgLAAgJQAAAAAAgBQABgIAEgGQAFgIAGgFQAGgFAGACQAHABAEAFQADAIAEAGQADAHAAAKQAAAKgDAKQAAACAAABAEeA2QgEADgEADQgEADgFADAFMAcQACAEABAEQAAABAAACQAAAFgEAEQgCADgDACQAEgMABgNgAGDgCQAAACAAABQgBAKAAAKQAAACAAACQgJgEgHgFQgFgCgBgDQAAgDABgCQADgDAGgDQAGgBAHgBgAGFAvQADAKAGAHQABABACABQgPAAgMgIQgNgJAAgPQANAIAPAFgACxBWQgFgBgEgCQgCABgCABQAGABAHAAgADvBQQgdAIgegCQgCAAgBAAAnjBCQgBAAAAgBQABgEAIgFQAGAFAEAFQADAEAAAGQAAAAAAABQgFgBgHgCQgGgDgDgFgAmvgMQAEgCAGAAQAKgBALAFQAJAFAMAGQALAJAJAMIAEAJQABABAAACQABACAAABIABgBQAEgBACgGQACgGABgHQABgKAEgHQAEgJAHgGQALgGAPADQAHACABAHQABAKgDAJQgDAKgEAKQgGANgCALQgJgDgKgDQgBADgBADQAAACAAADQAAAGACAHQgGgFgJgDQgJgDgKgCIgPgFQgggQgLgYQgCgGAAgCIAAgBQABgBADABQAEAAAGACAmZAHQAGAEAGADQAEADAEACQAIAHAFAHIADAGQABAEADAFQAEAFAGACQAFADAKgDQAHgDAFgGQABgDACgDQAEgKABgKQACgHABgGQACgGADgBQABAAABAAQgCAJgFAMQgFANgDANAmZAHQAAgBAAAAIAAAAQgHgFgHgEQgFgEgDgFAlwBNQAHACAJADQAKADADADQAAAAAAABQAAABAAAAQgCABgIAAQgHgBgGgCQgHgDgGgEQgFgEgFgGQADABAHADQAGACABAAgAmFATQgIgHgMgFAkeA7QABgHgBgIIAAgEQAAgQACgMQADgMAJgHQAKgIATgEQAEAAAEACQAEADAAAEQAAAMgDAVQgDATgBAUQAAAEAAADQAOACAPACQAKABAIABQAAAHgEAHQgEAHgJABQgQABgGgHQgHgIgBgOAlMAuQABAAACABAkeA7QAAAGgBAEQgCALgHABQgFAAgDgEQgEgEgCgHQgBgGAAgFQAAgBABgBQABAAACABQALADAKACgAkKBAQAEABAEABQAKABAKACAkKBAQgKgCgKgDAirBLQACgNgFgIQgDgJgFgHQgFgHgDgIQgEgLAAgKQAAgIADgDQAHgHANADQANADADAJQACAGAAAKQABAKgBAKQgBANABAMQAAAHABAHAirBLQgKAAgKAAAlMAuQgegLgbgQ");
	this.shape_13.setTransform(14.4,-8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BA9A13").s().p("Aj1BMQgHgIgDgMQgCgJgBgKIAUADIgUgDIAAgEQABgWAEgSIACgRQgKADgCAIQgDAJAAAPIAAAEIAAAFIAAAPIgUgFIAUAFIgBAHQgCALgHAJQgGAJgOABQgNAAgKgKQgBAJgEADQgGAGgJABQgJABgJgBIgMgDQgNgFgHgHQgIgGgHgJIgCgCIgCgCQgGgIgIgDIgSgIIgKgEQAHAIABAPIgBAIQAAACgEAFQgCAEgKABQgMABgNgGQgOgHgFgMIAAgHQgBgEADgGQADgFAGgGIgDgDQgPgOAAgWQAAgRAJgRQACgEAEgBQAEgBAEACQAEADAAAGIgBAFQgFALgBANQAAANAJALIADAAIAEAEQAMgDALACQALACAIAEIAFACQgHgJgFgHQgEgKAAgHQAAgFACgEIAEgGIAGgEQAFgCAFAAQAKgBALAFQAKAFALAIQALAJAJAMIAEAHIACADIABADIABgBQADgBACgGIADgLQACgKADgJQADgJAJgGQAKgGAPADQAIACAAAHQABALgDAKIgHASQgGANgCALIgTgGIATAGIgBACQAAAFABAGQACAHAEAEQAEAEAEAAQAHgBACgLIABgKIAAgPIAAgEQAAgOACgMQADgMAKgJQAJgIAUgEQADAAAEACQADADABAEQABAOgEAVQgDARgBAUIAAAHQABAOAHAIQAGAHAQgBQAJgBAEgHQAEgHABgHIAUAAIgBABQgCATgJALQgKAKgPABIgFABQgVAAgMgNgAl3A0QAGAEAHADQAGACAHABQAIAAACgBIAAgBIgBgBQgCgDgJgDIgRgFIgHgCIgKgEIAKAKgAnkAkIABABQACAFAHADIAMADIAAgBQAAgGgEgEQgDgFgHgFQgHAFgBAEgAlJAqQgCgHAAgGIAAgFIACgGQADgNAFgLQAFgMACgKIgBAAQgDACgDAGIgCANQgCAIgFAKIgCAGQgegLgagOQgJgHgMgFIAAgBIAAAAIgNgLIgJgJIAJAJIANALQgGgCgEAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAABIACAIQALAWAhAQIAPAFIASAFQAJADAGAFIAAAAgAhzBVQgLgDgJgIQgJgIgFgLIgDgKIAUgEIACAHQAGANAOAEQAMADAKgHQAGgGABgGIAAgBQgBgJgGgJIgBgCIAJgDQALgFALgCQAHALAPgFIAJgFIgGgDQAVAAATAEIAFAFIAHAFQAOAMAPAJQAKAGALAAQAJAAAHgFQAEgDABgEIgHgEQgQgLgPgOQgTgQgMgRQgEASgOAQIAEADQgTgEgVAAQgMgJgIgJQgHgJgBgHIAAAAIgCASQAAAHACAFIADAGQgLACgLAFIgJADIgLgOIgMgLIgMgIQgFgGgEgHIAAAKIAAAPIgBARQAAAJACAIIgUAEIgBgOIAAgZIABgSQgBgKgCgIQgDgJgMgDQgOgDgHAHQgDADAAAKQABAKADALQADAGAFAHQAFAHAEAJQADAIAAANIgUAAIAAgBQAAgIgCgGIgGgLQgHgIgEgLIgDgJQgCgKAAgNQAAgNAIgIQAIgHAKgDQALgDALADQAXAGAHAUIABACIAAgDQACgNAKgLQAKgLAOgFQATgFAMAOQAJALgBAQIACgEQAIgMAOgGQAPgGAPACQAHABAIAFQABgOALgGQAJgFAJACQAKACAHAIQAJAIAFAKQABgNAJgKQAIgJANAAQAPABARAIQAPAJAMAKQABgFAEgFQAIgJAMgBQAMAAAKAGQAKAGAHAFQANANAJATQADgKAFgIQAGgJAIgFQANgKAPADQALADAHAHQANgCALAEIAEABQAGALADALIABAIQAAAJgEAGQgGAIgKAEIAAAAIAAAAQAKgEAGgIQAEgGAAgJIgBgIQgDgLgGgLQAIAEAGAHIADAEQAJgFAKgDQALgCAJABQAIABABAIIAAAEIgBAJIAAAEIAAATIAAAKIAOAFIAIADIAFADIADgDQAJgJALgDQALgFALgBIAXAAQAJAAABAIQgBAJgIABQgLgBgJABQgKABgJADQgGADgIAIIgDADIABABQgBAIgFAEIgJAGQgSAJgSgBQgTgBgPgKQgJgHgFgJIgBACQgHAJgLAFQgMAGgMABQgPAOgVAEQgfAHgZgSIgBgBQgJACgJgBQgJAAgIgDIACAAIAKABIAAAAIAAAAQAZAAAZgHQALAEAPgDQAIgCAHgEQgFgEgGgFIAJgGIAIgGQAGAGAGABIAHgJIAEgNIACgBIAUgJIgUAJIgCABIABgDQACgIABgKQAAgKgEgJIgGgOQgFgFgGgBQgGgCgHAFQgFAFgFAIQgEAIgBAIIAAABQAAAJAFAJQAGAMAJAKIACACIgIAGIgJAGQgJgKgHgNQgBAJgEAIQgGAKgJAHIAGADQgZAHgZAAIAAAAIAAAAIgKgBIgCAAIgJgDIgEACQgZgCgXgFIghgIIAhAIQAXAFAZACQgQAHgTgDQgKgCgLgEQgDAIgHAGQgNAJgPAAQgQAAgQgIQgQgLgPgMIgFgEIgHgHIgEgDQgKAHgLAEQgSAGgOgIIABAHIAAADQgCAOgNALQgMAKgPAAIgMgBgABxAiQAKAEAKACIAFABQgPgKgNgNIADAQgAC9AhIgDAGIAJABIAFAAIgCgGIgBgIIgCgHQgCAIgEAGgAF2AdQALAIAQAAIgDgCQgHgHgCgKQgPgFgOgIQABAPANAJgAC7g8QgEAAgDADQgDAEAAAEQAAAJANARIAIAKIALAPQAFAIACALIACAKIABADQAGgFAGgIQADgIAAgKQABgNgIgOQgGgOgLgKQgHgGgFgDQgGgDgEAAIgBAAgABfhBQgGAFAAAIQABAHADAIQAIAUAUASQAUATAYAMIAHgJQAEgHAAgJQAAgKgGgNQgHgMgJgKQgJgJgPgKQgQgKgNgBQgFABgBACgAFLAAQgBAMgFAMIAGgFQAEgEAAgFIgBgDIgCgHIgBAAgAAehAQgDACAAAGIAAAEQAEARASAVQARATAYAQQgFgSgOgRIgMgVIgIgOQgDgHgFgEQgGgEgEAAIgDAAgAgbgtQgJAEgFAHQgBABgBAGQAAAFAGAIQAEAGAHAFIAOAJQAIgHAEgKQADgJAAgKIgBgHQgBgJgJgBIgFAAQgHAAgHACgAheg6QgHADgHAHQgGAHgBAHIAAACQAAAGADAFIANALIAOALIADADIgBgEIACgUIABgVQABgJgEgFQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBgBIgDAAIgEAAgAF2gbQgHADgCADIgCAFQACADAEACQAIAFAJAEIAAgEIAAgUIABgFQgIABgFADgAFHgnIAHAJIAIAKIABgGIABgBQAAgDgDgDQgFgGgJgBIAAABgACxA5IAAAAgAkCAlIAAAAgAlnAaQgGgCgDgFIgFgJIgDgGQgFgFgHgHQAaAOAeALQgFAGgHADIgJACQgEAAgCgCgAk2AYIAAAAgAghAQIAAAAgAmNgNIgMgHQAMAFAJAHIgJgFg");
	this.shape_14.setTransform(14.4,-5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F7DD6D").ss(1,1,1).p("ABZgDQgMAOgTAOQgSAOgRAGQgUAGgVADQgXAEgXAAQgLgBgMgFQgMgFgBgJQAAAAAAgCIAAgBQACgJAMgGQAMgGAMgEIATgHQATgKANgPQAJgLAJgIQANgJASgEQARgEAOACQAgAHABARQAAANgNAQgABwg5QgLgMgcgGQgSgEgVAFQgWAFgPALQgNALgKALQgMAOgOAJIgRAGQgQAFgPAHQgPAJgFARIAAAIQABANAJAJQAJAIANAEQANAEALABQAYAAAZgEQAXgEAVgGQASgGAWgQQAVgPAQgVQAQgTAAgUQAAgMgKgMg");
	this.shape_15.setTransform(-38.4,-8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DDBE26").s().p("AhYBJQgNgEgJgIQgKgJgBgNIABgIQAEgRAPgJQAQgHAQgFIARgGQAOgJAMgOQAKgLANgLQAPgLAWgFQAUgFATAEQAcAGAKAMQAKAMAAAMQAAAUgPATQgQAVgWAPQgVAQgSAGQgVAGgXAEQgZAEgXAAQgMgBgNgEgAAlg2QgRAEgNAJQgJAIgKALQgMAPgTAKIgTAHQgNAEgMAGQgLAGgDAJIAAABIAAACQACAJAMAFQAMAFAMABQAVAAAYgEQAVgDAUgGQARgGASgOQASgOANgOQAMgQAAgNQgBgRgfgHIgMgBQgJAAgLADg");
	this.shape_16.setTransform(-38.4,-8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B7589").s().p("AkIBDQgRgFgSgBQgSgBgRgCIgDgBIghgHQgPgDgSgBQgogDgigKQgigLglgJIgBgDIAAgDQgPgHgDgJQgDgKAIgJQAIgJAQgCQAUgCATAEQAUADAUgCQAOgCANgFIAbgJQAsgKAvgDQAvgDAtgBQC7gGC3AaQAeAEAfAAIA+AAQAegBAfACQAjADAjAFIBGAJIAVADQAMABAKAAQAJgBAKgEQAKgDAIABQAOACACAKQADAJgJAJQgGAFgKAEIgVAHQgLADgHAEQgMAIgNAGQgMAFgOADQgVAEgVgBIgrgBQgWAAgVAEQg9AKhAABIiAAAQgggBgfABQgdACggAEQgNACgOABQgNAAgNgCQgOgDgNgFQgMgFgQABQgTACgRAEQgQAFgRACIgKABQgNAAgPgEg");
	this.shape_17.setTransform(9.6,-3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#178BAF").ss(1,1,1).p("AKNAAQgBAUgyASQgzAShaANQhZAOh2AHQh3AIiHAAQiHAAh2gIQh2gHhagOQhZgNgzgSQgygSgBgUQABgTAygSQAzgRBZgOQBagNB2gIQB2gICHAAQCHAAB3AIQB2AIBZANQBaAOAzARQAyASABATg");
	this.shape_18.setTransform(8.4,-5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#55A4C4").s().p("Aj9BaQh2gHhagOQhZgNgygSQgzgSgBgUQABgTAzgSQAygRBZgOQBagNB2gIQB3gICGAAQCIAAB2AIQB2AIBZANQBaAOAzARQAyASABATQgBAUgyASQgzAShaANQhZAOh2AHQh2AIiIAAQiGAAh3gIg");
	this.shape_19.setTransform(8.4,-5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#178BAF").ss(1,1,1).p("AKNAAQgBAUgyASQgzAShaANQhZAOh2AHQh3AIiHAAQiHAAh2gIQh2gHhagOQhZgNgzgSQgygSgBgUQABgTAygSQAzgRBZgOQBagNB2gIQB2gICHAAQCHAAB3AIQB2AIBZANQBaAOAzARQAyASABATg");
	this.shape_20.setTransform(8.4,-3.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#67C7E5").s().p("Aj9BaQh2gHhagOQhZgNgygSQgzgSgBgUQABgTAzgSQAygRBZgOQBagNB2gIQB3gICGAAQCIAAB2AIQB2AIBZANQBaAOAzARQAyASABATQgBAUgyASQgzAShaANQhZAOh2AHQh2AIiIAAQiGAAh3gIg");
	this.shape_21.setTransform(8.4,-3.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B7589").s().p("AjhAbQhngGhMgJQhNgKgsgKQgtgMgHgMIArAAIBrAAICZAAIC1AAIC8AAIC1AAICZAAIBrAAIArAAQgIAMgsAMQguAKhMAKQhNAJhmAGQhnAGh7AAQh6AAhngGg");
	this.shape_22.setTransform(8.3,4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#107991").ss(1,1,1).p("ADkAmQhqAHh6AAQh4AAhqgHQhqgIhRgMQhQgMgtgPQgtgQgBgTISRAAQAAATguAQQgtAPhQAMQhQAMhqAIg");
	this.shape_23.setTransform(8.3,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3089A5").s().p("AjiAmQhqgHhRgNQhQgMgtgPQgtgQgBgTISRAAQAAATguAQQgtAPhQAMQhQAMhqAIQhqAGh6ABQh4AAhqgHg");
	this.shape_24.setTransform(8.3,5);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58,-25.6,132.7,36.2);


// stage content:
(lib.pastaCJS = function() {
	this.initialize();

	// outline
	this.instance = new lib.pasta("synched",0);
	this.instance.setTransform(100,100.1,1.504,1.504,0,0,0,8.3,-7.5);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AvmPnIAA/NIfNAAIAAfNg");
	this.shape.setTransform(100,100);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100.1,100.1,200,200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;