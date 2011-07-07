import flash.geom.ColorTransform;
import flash.geom.Transform;
/**
 * @className	ColorThumbnail
 * @author		Samit Basak
 * @purpose 	Create ColorThumbnail object
*/
class ColorThumbnail {
	private var thumbnail:MovieClip;
	private var pictureArea:MovieClip;
	private var textArea:TextField;
	private var mc:MovieClip;
	private var tpanel:ColorThumbnailTab;
	private var __thumbnailWidth:Number;
	private var __thumbnailHeight:Number;
	private var index:Number;
	private var __textVisible:Boolean;
	private var __text:String;
	private var __properties:Array;
	/**
	ColorThumbainl - constructor of the class
	@param 	props 	properties of the color object
	@param 	mname	String 	name of the color 
	@param 	index 	index of the color
	@param	tpanel	ColorThumbnailTab	reference to the color thumbnail tab object
	@return  	no return value;
	*/
	public function ColorThumbnail(props:Array, mname:String, index:Number, tpanel:ColorThumbnailTab) {
		this.index = index;
		this.tpanel = tpanel;
		__properties = props;
		__text = __properties["name"];
		mc = tpanel.mc.attachMovie("colorThumbnail", "thumbnail"+index, index);
		pictureArea = mc.pictureArea;
		textArea = mc.textArea;
		textArea.text = __text;
		setTextVisibility(true);
		setColor(mname);
		calculateThumbnailSize();
		mc._x = mc._width*(index%(tpanel.numOfCol));
		mc._y = mc._height*int(index/(tpanel.numOfRow));
		mc.mc = this;
		mc.onPress = setColorToSelectDress;
	}
	/**
	setColor - sets the color to the selected cloth object
	@param 	colorNum 	String 	colorNumber
	@return 	no return value
	*/
	private function setColor(colorNum:String) {
		var c:Color = new Color(mc.colorCell);
		c.setRGB(parseInt(colorNum, 16));
	}
	/**
	setColorToSelectDress - sets color to the selected object
	@param 		no paramter
	@return 	no return value
	*/
	private function setColorToSelectDress():Void {
		if (mc.tpanel.runGame.character.selectedDress != undefined) {
			var swathTransform:Transform = new Transform(mc.mc.colorCell);
			var swathTransform:Transform = new Transform(mc.mc.colorCell);
			var sct:ColorTransform = swathTransform.colorTransform;
			mc.tpanel.runGame.answerColor(mc.__text,sct);	
		}
	}
	/**
	setTextVisibility - sets the visibility of the text of the thumbnail color object
	@param 	S	Boolean 	true - for visibility on , false - visibility off
	@param 		no return value 
	*/
	public function setTextVisibility(s:Boolean):Void {
		__textVisible = s;
		textArea._visible = s;
	}
	
	/**
	calculateThumbnailSize - this function to calculate the size of the thumbnail
	@param 	 no parameter
	@return  no return value
	*/
	private function calculateThumbnailSize():Void {
		var tmpw:Number = mc._width;
		__thumbnailWidth = (tpanel.mc._width)/tpanel.numOfCol;
		__thumbnailHeight = mc._height*__thumbnailWidth/tmpw;

		mc._width = __thumbnailWidth;
		mc._height = __thumbnailHeight;

	}
	/**
	loadThumbnailPicture - loads the thumbnail picture 
	@param 		fname String  	name of the string of the thumbnail
	@return 	no return value
	*/
	private function loadThumbnailPicture(fname:String):Void {
		var mcloader:MovieClipLoader = new MovieClipLoader();
		var mclListener:Object = new Object();
		mclListener.wt = mc.pictureArea._width;
		mclListener.ht = mc.pictureArea._height;
		mclListener.xx = mc.pictureArea._x;
		mclListener.yy = mc.pictureArea._y;
		mclListener.onLoadInit = function(target_mc:MovieClip, status:Number):Void  {
			target_mc._x = this.xx;
			var r:Number = target_mc._width/target_mc._height;
			var r1:Number = this.wt/this.ht;
			if (r>r1) {
				target_mc._width = this.wt;
				target_mc._height = target_mc._width/r;
			} else {
				target_mc._height = this.ht;
				target_mc._width = target_mc._height*r;
			}
			target_mc._x = this.xx;

			target_mc._y = this.yy;

		};
		mcloader.addListener(mclListener);
		mcloader.loadClip(fname, mc.pictureArea);

	}
	/**
	* textVisible - a setter function to set visibility of the text field
	* @param	v	Boolean	
	* @return 	no return value
	*/
	public function setTextVisible(v:Boolean):Void {

		var tmp:Boolean = v;
		__textVisible = v;
		textArea._visible = __textVisible;
	}
	/**
	* text - setter function to set the text to that thumbnail
	* @param   t   String 
	* @return 		no return value
	*/
	public function set text(t:String):Void {
		var tmp:String = t;
		__text = t;
	}
}
