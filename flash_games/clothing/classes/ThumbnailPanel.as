import flash.geom.ColorTransform;
import flash.geom.Transform;
/**
@classname 	ThumbnailPanel
@author		Samit Basak
@purpose	This class controlles all the behaviour and property of the Panel
*/
class ThumbnailPanel {
	private var colorTabBtn:MovieClip;
	private var clothTabBtn:MovieClip;
	private var thumbnailPanel:MovieClip;
	public var colorThumbnailTab:ColorThumbnailTab;
	public var clothThumbnailTab:ClothThumbnailTab;
	private var maskTabAreas:MovieClip;
	private var main:RunGame;
	private var defaultBtnTransform:Transform;
	private var mc:MovieClip;
	/**
	ThumbnailPanel - constructor function of the class
	@param 	main  	RunGame		This is the refference of the main controller class of the game
	@param 	clothxml	String 	This is the xml string containing of the cloth details.
	@param 	colorxml	String 	This is the xml string containing of the color details.
	@return 					no return value
	*/
	public function ThumbnailPanel(main:RunGame, clothxml:String, colorxml:String) {
		this.main = main;
		mc = main.main;
		defaultBtnTransform = new Transform(main.main.thumbnailPanel.colorTabBtn);
		thumbnailPanel = main.main.thumbnailPanel;
		main.main.thumbnailPanel.mtab.onRelease = function() {
		};
		main.main.thumbnailPanel.mtab.onPress = function() {
		};
		colorTabBtn = main.main.thumbnailPanel.colorTabBtn;
		clothTabBtn = main.main.thumbnailPanel.clothTabBtn;
		maskTabAreas = main.main.thumbnailPanel.maskTabAreas;
		colorThumbnailTab = new ColorThumbnailTab(main, colorxml);
		clothThumbnailTab = new ClothThumbnailTab(main, this, clothxml);
		colorTabBtn.mc = this;
		clothTabBtn.mc = this;
		colorTabBtn.onRelease = moveColorUp;
		clothTabBtn.onRelease = moveClothUp;
		clothTabBtn.onRelease();
		var t:Transform = new Transform(colorTabBtn);
		var ct:ColorTransform = t.colorTransform;
		ct.redMultiplier = .5;
		ct.alphaMultiplier = .5;
		t.colorTransform = ct;
	}
	/**
	setTextVisible - This function enables the text of the thumbnails
	@param 	v	Boolean 	whether text will be shown or not
	@return 				no return value;
	*/
	public function setTextVisible(v:Boolean):Void {
		clothThumbnailTab.setTextVisible(v);
		colorThumbnailTab.setTextVisible(v);
	}
	/**
	setScroller - enables the scroller to controll the panel view
	@param 	tab	MovieClip	The area where the thumbnail can be shown
	@return 	no return value
	*/
	public function setScroller(tab:MovieClip):Void {
		var scrollBar:MovieClip = main.main.thumbnailPanel.sc.scrollBar;
		var scroller:MovieClip = main.main.thumbnailPanel.sc.scroller;
		tab._y = maskTabAreas._y;
		var diff:Number = tab._height-maskTabAreas._height;
		if (diff<=0) {
			scroller._visible = false;
			return;
		} else {
			scroller._visible = true;
			scroller.maskTabAreas = maskTabAreas;
			scroller.tab = tab;
			scroller.onPress = function() {
				this.startDrag(false, scrollBar._x, scrollBar._y, scrollBar._x, scrollBar._y+scrollBar._height-scroller._height);
				var rf:Number = scrollBar._width/scrollBar._height;
				this.onEnterFrame = function() {
					var r:Number = (diff)/(scrollBar._height-this._height);
					tab._y = maskTabAreas._y+(Math.abs(scrollBar._y-scroller._y)*r)*-1;
				};
			};
			scroller.onRelease = scroller.onReleaseOutside=function () {
				this.onEnterFrame = undefined;
				this.stopDrag();
			};
		}
	}
	/**
	moveColorUp - calls when the color tab has been selected 
	@param 		no parameter
	@return 	no return value
	*/
	public function moveColorUp():Void {
		var d1:Number = this.mc.thumbnailPanel.clothTabArea.getDepth();
		var d2:Number = this.mc.thumbnailPanel.colorTabArea.getDepth();
		if (d2<d1) {
			this.mc.thumbnailPanel.clothTabArea.swapDepths(this.mc.thumbnailPanel.colorTabArea);
			this.mc.thumbnailPanel.clothTabBtn.swapDepths(this.mc.thumbnailPanel.colorTabBtn);
			this.mc.setScroller(this.mc.thumbnailPanel.colorTabArea);
			var t:Transform = new Transform(this.mc.thumbnailPanel.clothTabBtn);
			var ct:ColorTransform = t.colorTransform;
			ct.redMultiplier = .5;
			ct.alphaMultiplier = .5;
			t.colorTransform = ct;
			var t:Transform = new Transform(this.mc.thumbnailPanel.colorTabBtn);
			var ct:ColorTransform = t.colorTransform;
			ct.redMultiplier = 1;
			ct.alphaMultiplier = 1;
			t.colorTransform = ct;
		}
	}
	/**
	moveClothUp - this function move the clothTab up
	@param 		no parameter
	@return 	no return value
	*/
	public function moveClothUp():Void {
		var d1:Number = this.mc.thumbnailPanel.clothTabArea.getDepth();
		var d2:Number = this.mc.thumbnailPanel.colorTabArea.getDepth();
		if (d2>d1) {
			this.mc.thumbnailPanel.clothTabArea.swapDepths(this.mc.thumbnailPanel.colorTabArea);
			this.mc.thumbnailPanel.clothTabBtn.swapDepths(this.mc.thumbnailPanel.colorTabBtn);
			this.mc.setScroller(this.mc.thumbnailPanel.clothTabArea);
			var t:Transform = new Transform(this.mc.colorTabBtn);
			var ct:ColorTransform = t.colorTransform;
			ct.redMultiplier = .5;
			ct.alphaMultiplier = .5;
			t.colorTransform = ct;
			var t:Transform = new Transform(this.mc.clothTabBtn);
			var ct:ColorTransform = t.colorTransform;
			ct.redMultiplier = 1;
			ct.alphaMultiplier = 1;
			t.colorTransform = ct;
		}
	}
	/**
	destroy - destructor of the class
	@pram 	no parameter
	@return 	Boolean  true, if the objected destructed properly
	*/
	public function destroy():Boolean {
		destroy(colorThumbnailTab);
		destroy(clothThumbnailTab);
		return delete (this);
	}
}
