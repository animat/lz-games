class Stimulus {
	private var content:String;
	private var type:String;
	
	public static var TEXT:String = "TEXT";
	public static var IMAGE:String = "IMAGE";
	public static var AUDIO:String = "AUDIO";
	
	public function Stimulus(initContent:String, initType:String) {
		content = initContent;
		type = initType.toUpperCase();
	}
	public function getContent():String {
		return content;
	}
	public function getType():String {
		return type;
	}
	public function equals(stim:Stimulus):Boolean {
		if (type == Stimulus.TEXT) {
			return (content.toLowerCase() == stim.getContent().toLowerCase());
		}
		return (content == stim.getContent() && type == stim.getType());
	}
	
	public function toString():String {
		return "["+content+" :: "+type+"]";
	}
}