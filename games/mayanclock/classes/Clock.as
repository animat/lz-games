import mx.utils.Delegate;

class Clock {
	private var hour:Number;
	private var minute:Number;
	private var pm:Boolean;
	private var hourHand:MovieClip;
	private var minuteHand:MovieClip;
	
	public function Clock(hour_mc:MovieClip, minute_mc:MovieClip) {
		hourHand = hour_mc;
		minuteHand = minute_mc;
		pm = false;
		
		hour = 12;
		minute = 0;
		
		hourHand.onPress = Delegate.create(this, rotateHour);
		hourHand.onRelease = Delegate.create(this, releaseHour);
		hourHand.onReleaseOutside = Delegate.create(this, releaseHour);
		minuteHand.onPress = Delegate.create(this, rotateMinute);
		minuteHand.onRelease = Delegate.create(this, releaseMinute);
		minuteHand.onReleaseOutside = Delegate.create(this, releaseMinute);
	}
	
	private function rotateHour():Void {
		hourHand.onEnterFrame = Delegate.create(this, hourChaseMouse);
	}
	private function hourChaseMouse():Void {
		var tmp:Number = getRot(hourHand);
		hourHand._rotation = tmp;
	}
	private function releaseHour():Void {
		hourHand._rotation = Math.round(hourHand._rotation);
		var rot:Number = hourHand._rotation;
		if (rot < 0) {
			rot += 360;
		}
		hour = Math.round(rot / 30);
		hourHand._rotation = (hour * 30);
		delete hourHand.onEnterFrame;
		LZGame.getInstance().evaluate(this.getTime());
		displayTime();
	}
	private function rotateMinute():Void {
		minuteHand.onEnterFrame = Delegate.create(this, minuteChaseMouse);
	}
	private function minuteChaseMouse():Void {
		minuteHand._rotation = getRot(minuteHand);
	}
	private function releaseMinute():Void {
		minuteHand._rotation = Math.round(minuteHand._rotation);
		var rot:Number = minuteHand._rotation;
		if (rot < 0) {
			rot += 360;
		}
		minute = Math.round(rot / 30) * 5;
		minuteHand._rotation = (Math.round(rot / 30) * 30);
		delete minuteHand.onEnterFrame;
		LZGame.getInstance().evaluate(this.getTime());
		displayTime();
	}
	
	
	public function setTime(str:String):Void {
		var separator:Number = str.indexOf(":");
		hour = Number(str.substring(0, separator));
		minute = Number(str.substring(separator + 1, str.length));
		hourHand._rotation = hour * 30;
		minuteHand._rotation = (minute / 5) * 30;
		LZGame.getInstance().evaluate(this.getTime());
		displayTime();
	}
	
	public function getTime():String {
		var tmp:String = String(minute);
		if (minute == 0) {
			tmp = "00";
		} else if (minute == 5) {
			tmp = "05";
		}
		return hour+":"+tmp;
	}
	public function getHour():String {
		var tmp:String = String(hour)
		return tmp;
	}
	public function setPM(val:Boolean):Void {
		pm = val;
	}
	public function isPM():Boolean {
		return pm;
	}
	public function displayTime():Void {
		LZGame.getStage().centerPanel.display.text = this.getTime();
	}
	
	
	private function getRot(mc:MovieClip):Number {
		return (Math.atan2(_root._xmouse - mc._x, (_root._ymouse - mc._y) * -1) * (180 / Math.PI));
	}
}