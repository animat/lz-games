class Option extends Response {
	private var stimulusObj:Stimulus;
	private var identifier:String;
	private var optionGroup:String;
// Samit introduced this 
	private var __attributes:Object;
	// Samit introduced this 
	private var __groupAttributes:Object;
	public function Option(initStimulus:String, initStimulusType:String) {
		super(initStimulus, initStimulusType);
	}
	public function getIdentifier():String {
		return identifier;
	}
	// toString method used for testing
	public function toString():String {
		return getStimulus().toString();
	}
	// Samit introduced this 
	/**
	This function has been introduced by Samit. 
	This is needed to store the attributes of options.
	*/
	public function setAttributes(attributes:Object):Void {
		this.__attributes = attributes;
	}
	// Samit introduced this 
	public function setGroupAttributes(attributes:Object):Void {
		this.__groupAttributes = attributes;
	}
	// Samit introduced this 
	public function getGroupAttributes():Object {
		return this.__groupAttributes;
	}
	// Samit introduced this 
	public function getAttributes():Object {
		return this.__attributes;
	}
	public function setOptionGroup(str:String):Void {
		optionGroup = str;
	}
	public function getOptionGroup():String {
		return optionGroup;
	}
}
