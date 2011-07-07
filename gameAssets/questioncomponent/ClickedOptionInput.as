class ClickedOptionInput extends Response {
	public function ClickedOptionInput(attempt:Object) {
		super(attempt.getOption().getStimulus().getContent(), attempt.getOption().getStimulus().getType());
	}
}