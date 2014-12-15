/**
Class Name : Canvas
Author : Samit Basak
Purpose : To control the canvas object behaviour
*/
import mx.utils.Delegate;
import flash.geom.ColorTransform;
import flash.geom.Transform;
class Canvas {
	private var canvas:MovieClip;
	private var picture:MovieClip;
	private var colorMe:MovieClip;
	private var __color:ColorTransform;
	private var classScope:Object;
	private var canvasMc:MovieClip;
	private var selfRef:Object;
	private var mclListener:Object;
	/**
	Canvas - constructor of the class
	@param 	classScope Object is the reference to the main controller of the game
	@return none
	*/
	public function Canvas(classScope:Object) {
		this.classScope = classScope;
		canvas = classScope.main.canvas;
		canvas.classScope = classScope;
		canvas.selfReff = this;

	}
	/**
	loadPicture - function loads the picture 
	@param 	pictureName String 	This is name of the picture to be loaded
	@return none
	*/
	public function loadPicture(pictureName:String):Void {
		mclListener = new Object();
		mclListener.canvasMc = canvas;
		mclListener.canvas = this;
		mclListener.onLoadInit = Delegate.create(this, onLoadInit);
		var image_mcl:MovieClipLoader = new MovieClipLoader();
		image_mcl.addListener(mclListener);
		picture = canvas.createEmptyMovieClip("picture", 10);
		picture.canvas = canvas;
		image_mcl.loadClip(pictureName, picture);
	}
	/**
	onLoadInit - this is the function to initiate the action after being loaded the picture
	@prameter	target_mc MovieClip  The movieClip has been created for the loading
	@return 	none
	*/
	public function onLoadInit(target_mc:MovieClip):Void {
		target_mc._x = this.canvas._width/2-target_mc._width/2;
		target_mc._y = this.canvas._height/2-target_mc._height/2;
		target_mc.onRelease = Delegate.create(this.canvas, onReleaseMouse);
		target_mc.canvas = canvas;
		this.colorMe = target_mc.colorMe;
	}
	/**
	onReleaseMouse - this function is invoked when user release the mouse on picture
	@param 	none
	@return none
	*/
	public function onReleaseMouse():Void {
		if (!this.classScope.activeState) {
			var mt:Transform = new Transform(picture.colorMe);
			var ct:ColorTransform = mt.colorTransform;
			var sel:ColorTransform = this.classScope.brushColor;
			if (sel != undefined && this.classScope.main.brush.brush_pic.brushColor._visible) {
				var rm:Number = sel.redOffset/255;
				var gm:Number = sel.greenOffset/255;
				var bm:Number = sel.blueOffset/255;
				ct.redMultiplier = rm;
				ct.greenMultiplier = gm;
				ct.blueMultiplier = bm;
				mt.colorTransform = ct;
				this.classScope.checkAnswer();
			}
			this.classScope.main.brush.brush_pic.brushColor._visible =false;
		}
	}
	/**
	destroy - is the destructor of the class
	@param 	none
	@return none
	*/
	public function destroy():Void{
		delete mclListener.onLoadInit;
	}
}
