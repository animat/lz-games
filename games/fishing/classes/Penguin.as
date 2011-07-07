﻿/** * @className	Penguin * @author		Samit Basak * @purpose 	Controls the behaviour of penguin*/class Penguin {	// Graphics of Penguin	private var mc:MovieClip;	// Main control object of fish game	private var main:RunGame;	/**	Penguin function is the constructor	@param 		main 	RunGame		main control object of the game	@parm		m		MovieClip	fish movieClip 	@return 			no return value	*/	public function Penguin(main:RunGame, m:MovieClip){		this.main = main;		mc = m;	}		/**	fishing function is to start default fishing animation of penguin	@param		no parameter	@return 	no return value	*/	public function fishing():Void{		mc.gotoAndPlay("static");	}		/**	winningAction function start the wining action animation of the 	Penguin	@param		no parameter	@return 	no return value	*/	public function winningAction():Void{		mc.gotoAndStop("catch");		TimelineManager.registerClip(mc.penguin, this, nextQuestion, [], "done");	}	/**	nextQuestion function direct main controler of the game to select next question	@param		no parameter	@return 	no return value	*/	private function nextQuestion():Void{				main.nextQuestion(true);	}		/**	faillingAction function initiate the animation user clicks wrong option	@param	 	no parameter	@return 	no return value	*/	public function faillingAction():Void{		mc.gotoAndStop("Empty");		TimelineManager.registerClip(mc.penguin, this, refreshQDisplay, [true], "done");			}			/**	refreshQDisplay function directs the main controler object to refreshQDisplay	@param		no parameter	@return 	no return value	*/	private function refreshQDisplay():Void{		main.refreshQDisplay();	}		/**	winTheGame function is to start wining action of the penguin	@param 		no parameter	@return 	no return value	*/	public function winTheGame():Void{		mc.gotoAndStop("Happy");		//TimelineManager.registerClip(mc.penguin, this, replayGame, [true], "done");	}		/**	replayGame function directs the main controller movie to replay the game	@param		no parameter	@return 	no return value	*/	private function replayGame():Void{		main.replayGame();	}		/**	destroy function is to destroy the object of the class	@param	 	 no parameter	@return	 	 no return value	*/	public function destroy():Boolean{		return delete(this);	}	}