import mx.utils.Delegate;
/**
 * @className	ColorThumbnailPanel
 * @author		Samit Basak
 * @purpose 	ThumbnailPanel is to show the thumbainls.
*/
class ColorThumbnailTab {
	private var panel:MovieClip;
	private var thumbnailArray:Array;
	private var __xml:XML;
	public var runGame:RunGame;
	public var mc:MovieClip;
	private var __numOfRow:Number;
	private var __numOfCol:Number;
	private var __thumbnailPanelWidth:Number;
	private var __thumbnailPanelHeight:Number;
	private var __pathImageFiles:String;
	private var __isUp:Boolean;
	private var __textVisible:Boolean;
	
	/**
	 Constructor 
	 @param   runGame 	RunGame		main controller object of the game
	 @param   xmls		String 		xml string containing the color details
	 @return  no return value
	 */
	function ColorThumbnailTab(runGame:RunGame, xmls:String) {
		__xml = new XML(xmls);
		this.runGame = runGame;
		thumbnailArray = new Array();
		mc = runGame.main.thumbnailPanel.colorTabArea;
		__numOfRow = 4;
		__numOfCol = 4;
		__thumbnailPanelWidth = mc._width;
		__thumbnailPanelHeight = mc._height;
		__isUp = false;
		readColor();
	}
	/**
	width - getter function returns the width of the color panel
	@param 	no parameter
	@return 	Number 	width of the panel
	*/
	public function get width():Number {
		var tmp:Number = __thumbnailPanelWidth;
		return tmp;
	}
	/**
	height - getter function returns the height of the color panel
	@param 	no parameter
	@return 	Number 	height of the panel
	*/
	public function get height():Number {
		var tmp:Number = __thumbnailPanelHeight;
		return tmp;
	}
	/**
	rearrangePanelDisplay - refresshes the display 
	@param   no parameter
	@return  no return value
	*/
	private function rearrangePanelDisplay():Void {
		for (var i:Number = 0; i<thumbnailArray.length; i++) {
			thumbnailArray[i].setTextVisible(__textVisible);
		}
	}
	/**
	numOfRow - reuturns the number of rows in the panel
	@pram  no parameter
	@return 	Number 	number of rows in the panel
	*/
	public function get numOfRow():Number {
		var tmp:Number = __numOfRow;
		return tmp;
	}
	/**
	numOfCol - reuturns the number of columns in the panel
	@pram  no parameter
	@return 	Number 	number of columns in the panel
	*/
	public function get numOfCol():Number {
		var tmp:Number = __numOfCol;
		return tmp;
	}
	/**
	addThumbnail - to add a thumbnail in the panel
	@param   tbn  MovieClip
	@return       no return value
	*/
	public function addThumbnail(tbn:ColorThumbnail):Void {
		thumbnailArray.push(tbn);
	}
	/**
	readColor - reads the color array of the obejct
	@param 	no parameter
	@retunr Array	colors array
	*/
	public function readColor():Array {
		var colors:Array = new Array();
		getXML();
		return colors;
	}
	/**
	getXML - parse the color xml String to get the information of the colors
	@param 		no parameter
	@return 	no return value
	*/
	private function getXML():Void {
		var tmp:Array = __xml.childNodes;
		__pathImageFiles = __xml.firstChild.attributes["path"];
		var tmp:Array = __xml.firstChild.childNodes;
		var i:Number;
		var w:Number = mc._width-20;
		var h:Number = mc._height-20;
		for (i=0; i<tmp.length; i++) {
			var tn:ColorThumbnail = new ColorThumbnail(tmp[i].attributes, tmp[i].firstChild.nodeValue, i, this);
			addThumbnail(tn);
		}
		rearrangePanelDisplay();
	}
	/**
	setTextVisible - set the visiblilty of the text in the thumbnails
	@param 	v	Boolean	 	true if the text is visible
	@return 				no return value
	*/
	public function setTextVisible(v:Boolean):Void {
		__textVisible = v;
		rearrangePanelDisplay();
	}
	/**
	imagePath - getter function to return the image path
	@param 	no parameters
	@return 	String 	returns the image path
	*/
	public function get imagePath():String {
		var tmp:String = __pathImageFiles;
		return tmp;
	}
}
