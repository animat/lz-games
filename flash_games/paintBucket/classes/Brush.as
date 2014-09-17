/**
Class Name : Brush
Developer : Samit Basak
Purpose : This class is used to controll the brush animation
*/
import mx.utils.Delegate;
import flash.geom.ColorTransform;
import flash.geom.Transform;
class Brush {
	private var classScope:Object;
	private var painting:Boolean;
	public var brush:MovieClip;
	private var endX:Number;
	private var endY:Number;
	private var __color:ColorTransform;
	private var __colorName:String;
	private static var friction:Number = 2;
	/**
	Brush - is the constructor of the class
	@param 	classScope Object This is refference to the main object the movie
	@return none
	*/
	public function Brush(classScope:Object) {
		this.classScope = classScope;
		brush = classScope.main.brush;//attachMovie("brush", "brush", classScope.main.getNextHighestDepth());
		//setPainting(false);
		brush.onMouseMove = Delegate.create(this, chaseMouse);
		brush.onEnterFrame = Delegate.create(this, moveBrush);
		//trace("brush color "+brush);
		brush.brush_pic.brushColor._visible = false;
		Mouse.hide();
	}
	/**
	color - is the getter function to read the color value of the brush
	@param 	none
	@return ColorTransfrom 
	*/
	public function get color():ColorTransform {
		var tmp:ColorTransform = __color;
		return tmp;
	}
	/**
	color - setter function of the class to set the color to the brush
	@param 	val	ColorTransform 	color to set into the brush
	@return 	none
	*/
	public function set color(val:ColorTransform):Void {
		if (val != undefined) {
			__color = val;
			var mt:Transform = new Transform(brush.brush_pic.brushColor);
			brush.brush_pic.brushColor._visible = true;
			mt.colorTransform = __color;
		}
	}
	/**
	colorName - setter function to set the color name to the brush
	@param 	val	String 	name of the color to set
	@return 	none
	*/
	public function set colorName(val:String):Void {
		__colorName = val;
	}
	/**
	colorName - getter function to get the color name of the brush
	@param 	no parameter
	@return  string  return sthe name of te color of the brush object
	*/
	public function get colorName():String {
		var tmp:String = __colorName;
		return tmp;
	}
	/**
	dipBruish - is the animation when the bursh is dipped into the paddle
	@param 	xpos	Number	xposition of the brush
	@param 	ypos	Number	yposition of the brush
	*/
	public function dipBrush(xPos:Number, yPos:Number):Void {
		brush._x = xPos;
		brush._y = yPos;
		brush.gotoAndPlay("dip");
	}
	/**
	moveBrush - this animation controls the movement of the brush
	@param 	none
	@return none
	*/
	private function moveBrush():Void {
		if (!painting) {
			brush._x += (endX-brush._x)/friction;
			brush._y += (endY-brush._y)/friction;
		}
	}
	/**
	chaseMouse - Make the brush's position match the mouse whenever it's not doing the painting animation
	@param none
	@return none
	*/
	private function chaseMouse():Void {
		endX = _xmouse;
		endY = _ymouse;
	}
	/**
	destroy - function is the destructof of the function
	@param none
	@return none
	*/
	public function destroy():Void {
		delete brush.onEnterFrame;
		delete brush.onMouseMove;
		removeMovieClip(brush);
		Mouse.show();
	}
}
