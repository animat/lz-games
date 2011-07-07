
/**
Class Name : Paddle
Author : Samit Basak
Purpose : This class is used to controll the paddles behaviours
*/
import mx.utils.Delegate;
import flash.geom.ColorTransform;
import flash.geom.Transform;
class Paddle {
	private var classScope:Object;
	private var __color:Number;
	private var __colorName:String;
	private var __index:Number;
	private var paddlesArea:MovieClip;
	private var paddle:MovieClip;
	/**
	Paddle - is the constructor
	@param 	classScope Object 	reference to the main movie object
	@param	index	Number	index number of the paddle
	@param 	color	Number 	color value for the paddle
	@param	colorName 	String 	name of the color
	@return 	none
	*/
	public function Paddle(classScope:Object, index:Number, color:Number,colorName:String) {
		this.classScope = classScope;
		this.__color = color;
		this.__colorName = colorName;
		this.__index = index;
		this.paddlesArea = classScope.main.paddleArea;
		this.paddle = this.paddlesArea.attachMovie("paddle", "paddle"+__index, this.paddlesArea.getNextHighestDepth());
		this.paddle.onRelease = Delegate.create(this, onRelease);
		setText(colorName);
		setColor();
		setPosition();
	}
	/**
	setPosition - function is to set the position of the paddle
	@param 	none
	@return 	none
	*/
	private function setPosition():Void {
		var lf:Number = __index*paddle._width+50;
		paddle._x = lf%(paddlesArea._width-50);
		paddle._y = int(lf/(paddlesArea._width-50))*paddle._height;
	}
	/**
	setColor - function to set the color to the paddle
	@param 	none
	@return 	none
	*/
	private function setColor():Void {
		var c:Color = new Color(paddle.colorCell);
		c.setRGB(__color);
	}
	/**
	get color - getter function to get the color of the paddle
	@param 	none
	@return 	ColorTransform 	the colorTransform for the color of the paddle
	*/
	public function get color():ColorTransform {
		var tmp:Number = __color;
		var ct:Transform = new Transform(paddle.colorCell);
		return ct.colorTransform;
	}
	/**
	set color - setter function of the color to the paddle
	@param	val Number 	color value
	@return none
	*/
	public function set color(val:Number):Void {
		__color = val;
	}
	/**
	onRelease - function to handle the event when mouse has been released on the paddle
	@param	none
	@return 	none
	*/
	public function onRelease():Void {
		if(!classScope.activeState){
		classScope.setBrushColor (this.color,__colorName);
		}
		
	}	
	/**
	setText - function to set the text to the paddle
	@param  s  String 	the text (name of the color)
	@return 	none
	*/
	public function setText(s:String):Void{
		paddle.colorName.text = s;
	}
	/**
	destroy - is the destructor of the class
	@param 	none
	@return none
	*/
	public function destroy():Void{
		delete this.paddle.onRelease;
		removeMovieClip(paddle);

	}
}
