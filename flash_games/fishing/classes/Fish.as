import mx.utils.Delegate;
import mx.transitions.Tween;
import flash.filters.GlowFilter;
import flash.geom.Point;
/**
 * @className	Fish
 * @author		Samit Basak
 * @purpose 	To give all properties and behaviour of fish
*/

class Fish {
	// direction of swim (whether in left or right)
	private var leftDirection:Boolean;
	// speed: speed of the fish
	private var speed:Number;
	// mc: graphical part of the fish stored in this this variable
	public var mc:MovieClip;
	// fishType: type of the fish
	private var __fishType:String;
	// displayText : stores the text for the perticular fish object
	private var displayText:String;
	// caught : stores wheter the fish has been caught or not
	private var caught:Boolean;
	// pondBoudaryLeft : This is a refference movieClip to indicate the 
	// swimming range of the fish in left direction
	private var pondBoundaryLeft:MovieClip;
	// pondBoundayRight : This is a refference movieClip to indicate the 
	// swimming range of the fish in right direction
	private var pondBoundaryRight:MovieClip;
	// tmpStartPoint: This variable stores the starting point at any instant of time
	private var tmpStartPoint:Point;
	// pond : reffernce to the pond movieClip
	private var pond:MovieClip;
	// tmpEndPoint: This variable stores the end point at any instant of time
	private var tmpEndPoint:Point;
	// myTweenX : Tween object to move the fish with motion tween in X axis
	private var myTweenX:Tween;
	// myTweenY ; Tween object to move the fish with motion tween in Y axis
	private var myTweenY:Tween;
	// option : option value for the answer
	private var stim:Stimulus;
	// main : refference to main controller object of the game 
	private var main:RunGame;
	
	/**
	Fish Constructor 
		@param	main		RunGame		main controller object of the game
		@param	txt			String		Option value
		@param	finishType	String		The type of the fish
		@param	pond		MovieClip	main mvoie clip of the game that hold the pond
		@param	fishID		Number		Id of the fish
	*/
	public function Fish(main:RunGame, stim:Stimulus, fishType:String, pond:MovieClip, fishID:Number) {
		this.pond = pond;
		this.__fishType = fishType;
		this.main = main;
		this.stim = stim;
		caught = false;
		mc = pond.fishLayer.attachMovie(__fishType, "f" + fishID, pond.fishLayer.getNextHighestDepth());
		mc.txt = stim.getContent();
		// choose random position in the pond to start swiming of fish
		var xx:Number = pond.pondBoundaryLeft._x + Math.round(Math.random()* (pond.pondBoundaryRight._x - pond.pondBoundaryLeft._x));
		var yy:Number = pond.pondBoundaryRight._y + Math.round(Math.random()* pond.pondBoundaryRight._height);
		// assign the start value of to tmpStartPoint
		tmpStartPoint = new Point(xx, yy);
		tmpEndPoint = new Point(0, 0);
		// choose the direction of the fish to swiim on start
		chooseRandomDirection();
		// Choose the end point of swiming phase randomly.
		chooseStartEndPoint();
		// start swimming
		swim();
		// link the interaction to fish oboject so that user can choose option
		mc.onPress = Delegate.create(this, catchMe);
		// check to take necessary action at the end of swiming phase
		mc.onEnterFrame = Delegate.create(this, checkTweenStatus);
	}
	
	/**
	chooseRandomDirection function is used to choose the direction of swim of the fish randomly
		@param		no parameter
		@return 	no return value
	*/
	private function chooseRandomDirection():Void {
		var r:Number = Math.floor(Math.random()*2);
		if (r == 0) {
			leftDirection = false;
		} else {
			leftDirection = true;
		}
	}
	
	/**
	chooseStartendPoint function is used to choose start and end poing of each swimming phase
		@param		no parameter
		@return 	no return value
	*/
	public function chooseStartEndPoint():Void {
		leftDirection = !leftDirection;
		if (leftDirection == true) {
			mc.gotoAndPlay("righttoleft");
			swimRightToLeft();
		} else {
			mc.gotoAndPlay("lefttoright");
			swimLeftToRight();
		}
		speed = Math.round(120 + Math.random()*200);
	}
	
    /**
	swim function initiate the swimming motion
		@param		no parameter
		@return 	no return value
	*/
	public function swim():Void {
		myTweenX = new Tween(mc, "_x", mx.transitions.easing.None.easeNone, tmpStartPoint.x, tmpEndPoint.x, speed, false);
		myTweenY = new Tween(mc, "_y", mx.transitions.easing.None.easeNone, tmpStartPoint.y, tmpEndPoint.y, speed, false);
	}
		
	public function get fishType():String{
		var tmp:String = __fishType;
		return tmp;
	}
	/**
	checkTweenStatus function will check tween status and will take necessary action
		@param		no parameter
		@return 	no return value
	*/
	private function checkTweenStatus():Void {
		if (myTweenX != undefined) {
			if (Math.abs(myTweenX.finish - myTweenX.position) < 2) {
				// if the terget is the hoock check for whether answer is correct
				if (Math.abs(myTweenX.finish - pond.tergetFood._x) < 2) {
					// evaluate the user choice 
					main.evaluate(this);
					stopGlowing();
				}
				// update the start and end point of the sweem 
				chooseStartEndPoint();
				// redirect the motion of the fish
				myTweenX.continueTo(tmpEndPoint.x, speed);
				myTweenY.continueTo(tmpEndPoint.y, speed);
			}
		}
	}
	
	/**
	swimLeftToRight function take the action to move the fish from left to right direction
		@param		no parameter
		@retrun		no return value
	*/
	private function swimLeftToRight():Void {
		if (tmpStartPoint.x == 0) {
			tmpStartPoint.x = pond.pondBoundaryLeft._x;
			tmpStartPoint.y = pond.pondBoundaryLeft._y + Math.random() * pond.pondBoundaryLeft._height;
		}
		tmpEndPoint.x = pond.pondBoundaryRight._x;
		tmpEndPoint.y = pond.pondBoundaryLeft._y + Math.random() * pond.pondBoundaryRight._height;
	}
	/**
	swimRightToLeft funtion take the action to move the fish from right to left direction
		@param		no parameter
		@return 	no return value
	*/
	private function swimRightToLeft():Void {
		if (tmpStartPoint.x == 0) {
			tmpStartPoint.x = pond.pondBoundaryRight._x;
			tmpStartPoint.y = pond.pondBoundaryRight._y + Math.random() * pond.pondBoundaryRight._height;
		}
		tmpEndPoint.x = pond.pondBoundaryLeft._x;
		tmpEndPoint.y = pond.pondBoundaryLeft._y + Math.random() * pond.pondBoundaryLeft._height;
	}
	
	/**
	catchMe function use to take necessary action when the user choose his/her option
		@param		no parameter
		@return 	no return value
	*/
	public function catchMe():Void {
		if (!main.busy) {
			main.setBusy();
			if (myTweenX.position < pond.tergetFood._x) {
				if (leftDirection == true) {
					leftDirection = false;
					mc.gotoAndPlay("lefttoright");
				}
			} else {
				if (leftDirection == false) {
					leftDirection = true;
					mc.gotoAndPlay("righttoleft");
				}
			}
			//
			tmpEndPoint.x = pond.tergetFood._x;
			tmpEndPoint.y = pond.tergetFood._y;
			startGlowing();
			myTweenX.continueTo(tmpEndPoint.x, 25);
			myTweenY.continueTo(tmpEndPoint.y, 25);
		}
	}
	public function pauseTween():Void {
		myTweenX.stop();
		myTweenY.stop();
	}
	public function resumeTween():Void {
		myTweenX.resume();
		myTweenY.resume();
	}
	public function startGlowing():Void {
		mc.filters = new Array(new GlowFilter(0x0000FF));
	}
	public function stopGlowing():Void {
		mc.filters = new Array();
	}
	public function isCaught():Boolean {
		return caught;
	}
	public function destroy():Boolean {
		return delete (this);
	}
	public function getStimulus():Stimulus {
		return stim;
	}
}
