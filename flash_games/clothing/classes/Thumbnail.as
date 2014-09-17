/**
 * @className	Thumbnail
 * @author		Samit Basak
 * @purpose 	Create Thumbnail object
*/
class Thumbnail {
	private var thumbnail:MovieClip;
	private var pictureArea:MovieClip;
	private var textArea:TextField;
	private var mc:MovieClip;
	private var tpanel:ClothThumbnailTab;
	private var __thumbnailWidth:Number;
	private var __thumbnailHeight:Number;
	private var index:Number;
	private var __textVisible:Boolean;
	private var __text:String;
	private var __properties:Array;
	/**
	Thumbainl - constructor of the class
	@param 	props	properties of the coloths
	@param 	mane 	name of the thumbnail cloth file name
	@param 	index	index of the cloth
	@param 	tpanel	ClothThumbnailTab panel object
	@return  	no return value;
	*/
	public function Thumbnail(props:Array, mname:String, index:Number, tpanel:ClothThumbnailTab) {
		this.index = index;
		this.tpanel = tpanel;
		__properties = props;
		__text = __properties["name"];
		mc = tpanel.mc.attachMovie("thumbnail", "thumbnail"+index, index);
		pictureArea = mc.pictureArea;
		textArea = mc.textArea;
		textArea.text = __text; 
		setTextVisibility(true);
		loadThumbnailPicture(mname);
				calculateThumbnailSize();
		mc._x = mc._width*(index%(tpanel.numOfCol));
		mc._y = mc._height*int(index/(tpanel.numOfRow));
		mc.mc=this;
		mc.onPress = selectDress;
	}
	/**
	selectDress - select the dress of the thumnbail
	@pram 	no parameter
	@return	no return value
	*/
	private function selectDress():Void{
		mc.tpanel.runGame.answerCategoryCloth(mc.__properties["category"],mc.__text,mc.tpanel.imagePath+mc.__properties["image"]) ;
	}
	/**
	setTextVisibility - sets the visibility of the text
	@param 	s	Boolean 	true if the text is to show else false
	@return 	no return value
	*/
	public function setTextVisibility(s:Boolean):Void{
		__textVisible = s;
		textArea._visible =s;
	}
	/**
	calculateThumbnailSzie - calculates the size of the thumbnail
	@param 		no paramter
	@return 	no return value
	*/
	private function calculateThumbnailSize():Void{
		var tmpw:Number= mc._width;
		__thumbnailWidth = (tpanel.mc._width)/tpanel.numOfCol; 
		__thumbnailHeight = mc._height * __thumbnailWidth/tmpw;
		mc._width = __thumbnailWidth ;
		mc._height= __thumbnailHeight;
	}
	/**
	loadThumbnailPicture - loads the thumbnail picture
	@param 		fname 	String 	 name of the thumnail picture file
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
			var r:Number = target_mc._width / target_mc._height;
			var r1:Number = this.wt / this.ht;
			if (r>r1) {
				target_mc._width = this.wt;
				target_mc._height = target_mc._width / r;
			} else {
				target_mc._height = this.ht;
				target_mc._width = target_mc._height * r;
			}
			target_mc._x = this.xx+(this.wt - target_mc._width)/2;
			target_mc._y = this.yy+(this.ht - target_mc._height)/2;
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
		textArea ._visible= __textVisible;
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
	/**
	destroy - destructor function 
	@param 	no paramter
	@return Boolean 	true if object has been destroyed successfully.
	*/
	public function destroy():Boolean{
		delete(mc);
		return delete(this);
	}
}
