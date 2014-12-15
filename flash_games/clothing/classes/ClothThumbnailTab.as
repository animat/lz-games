import mx.utils.Delegate;
import flash.geom.ColorTransform;
import flash.geom.Transform;
/**
 * @className	ColorThumbnailPanel
 * @author		Samit Basak
 * @purpose 	ColorThumbnailPanel is to control the ColorThumbnailTab.
*/
class ClothThumbnailTab {
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
	private var thumbnailPanel:ThumbnailPanel;

	/**
	 * Constructor 
	 @param   runGame RunGame			reference to main class of the game
	 @param 	tpanel	ThumbnailPanel	reference to the man panel controller class
	 @param 	xmls	String 			color xml string
	 @return  no return value
	 */
	function ClothThumbnailTab(runGame:RunGame,tpanel:ThumbnailPanel, xmls:String) {
		__xml = new XML(xmls);
		thumbnailPanel = tpanel;
		this.runGame = runGame;
		thumbnailArray = new Array();
		mc = runGame.main.thumbnailPanel.clothTabArea;
		
		__numOfRow = 4;
		__numOfCol = 4;
		__thumbnailPanelWidth = mc._width;
		__thumbnailPanelHeight = mc._height;
		__isUp = true;
		readCloths();
	}
	/**
	width - getter function returns the width of the colorThumbnail Tab
	@param 	no parameter
	@return 	Number 	returns the width of the color panel
	*/
	
	public function get width():Number{
		var tmp:Number = __thumbnailPanelWidth;
		return tmp;
	}
	/**
	height - getter function returns the height of the colorThumbnail Tab
	@param 	no parameter
	@return 	Number 	returns the width of the color panel
	*/
	public function get height():Number{
		var tmp:Number = __thumbnailPanelHeight;
		return tmp;
	}
	/**
	rearrangePanelDisplay - refresshes the display 
	@param   no parameter
	@return  no return value
	*/
	private function rearrangePanelDisplay():Void {
		thumbnailPanel.setScroller(mc);
		
  		for(var i:Number =0;i<thumbnailArray.length;i++){
			
		    thumbnailArray[i].setTextVisible(__textVisible);
		}
	}
	/**
	numOfRow - getter function returns the number of the row in the tab
	@param 	no parameter
	@return 	Number 	returns the number of row in the panel
	*/
	public function get numOfRow():Number{
		var tmp:Number = __numOfRow;
		return tmp;
	}
	/**
	numOfCol - getter function returns the number of the column in the tab
	@param 	no parameter
	@return 	Number 	returns the number of column in the panel
	*/
	public function get numOfCol():Number{
		var tmp:Number = __numOfCol;
		return tmp;
	}
	
	/**
	 * addThumbnail - to add a thumbnail in the panel
	 * @param   tbn  MovieClip
	 * @return       no return value
	*/
	
	public function addThumbnail(tbn:Thumbnail):Void {
		thumbnailArray.push(tbn);
		
	}
	/**
	readCloths - returns the array of cloths in the panel
	@param 	no parameter
	@return 	Array 	array of cloths
	*/
	public function readCloths():Array {
		var cloths:Array = new Array();
		getXML();
		return cloths;
	}
	/**
	getXML -  reads the cloth xml string 
	@param	 no parameter
	@return 	no return value
	*/
	private function getXML():Void {
		var tmp:Array = __xml.childNodes;
		
		__pathImageFiles= __xml.firstChild.attributes["path"];
		var tmp:Array = __xml.firstChild.childNodes;
		
		var i:Number;
		var w:Number = mc._width-20;
		var h:Number = mc._height-20;

		
		for (i=0; i<tmp.length; i++) {
		  var tn:Thumbnail=new Thumbnail(tmp[i].attributes, __pathImageFiles+tmp[i].firstChild.nodeValue, i, this);
		  addThumbnail(tn);
		  
		}
		rearrangePanelDisplay();
	}
	/**
	setTextVisible - function sets the text of the color visible
	@param 	v 	Boolean 	true if the text visible is enabled else false
	@return 				no return value
	*/
	public function setTextVisible(v:Boolean):Void{
		__textVisible = v;
		rearrangePanelDisplay();
	}
	/**
	imagePath - returns the path of the images
	@param 	no parameter
	@return 	String 	path of the image directory
	*/								
	public function get imagePath():String{
		var tmp:String = __pathImageFiles;
		return tmp;
	}
	/**
	destroy - destructor of the class
	@param 	no paramter
	@return 	Boolean 	true if destroyed properly
	*/
	public function destroy():Boolean{
		var i:Number ;
		for(i=0;i<thumbnailArray.length;i++){
			destroy(thumbnailArray[i]);
		}
		return delete(this);
	}
}
