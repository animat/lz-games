/*
This class is used to create a movie clip with a text field inside. This text field will store
the English text passed from the XML. This class will display the English text in these movie
clips, and then place the movie clips next to each other to simulate the look of a real sentence,
breaking onto new lines if needed.
*/
class DisplayTextMC {
        public var engText;
        private var wXInit:Number, wXPos:Number, wYPos:Number, wNum:Number;
        private var wXLimit:Number;
        private var textFormatting:Object;
		
		// Init vars, define the text formatting, and create a movie clip for String passed from XML
        function DisplayTextMC(param_engString:String, param_wNum:Number, targetMC:MovieClip) {
                textFormatting = new TextFormat("Comic Sans", 20, 0xFFFFFF, true);
				wXInit = 100;
				wXLimit = 600;
				
				if (param_wNum == 0) {
					wXPos = wXInit;
				} else {
					var prevWord:MovieClip = targetMC["engText"+(param_wNum -1)];
					wXPos = prevWord._x + prevWord._width + 2;
				}
				
                wYPos = 345;
				this.wNum = param_wNum;
                createMC(param_engString, param_wNum, targetMC);
        }
		
		// Create a movie clip on the stage that will have the String passed from XML in it
        private function createMC(param_engString:String, wNum:Number, targetMC:MovieClip):Void {
                var newMC:MovieClip = targetMC.createEmptyMovieClip("engText"+wNum, 500+wNum);
                newMC.engText = param_engString;
                setTextField(newMC);
                placeMC(newMC);
        }
		
		// Create the text field within the movie clip
        private function setTextField(clip:MovieClip):Void {
                clip.createTextField("textfield", 0, 0, 0, 0, 0);
                clip.textfield.autoSize = true;
                clip.textfield.setNewTextFormat(textFormatting);
                clip.textfield.text = clip.engText;
        }
		
		// Place the movie clip next to the previous one, unless it needs to wrap to a new line
        private function placeMC(clip:MovieClip):Void {
                if ((wXPos + clip._width)>wXLimit) {
                        wYPos += 25;
                        wXPos = wXInit;
				}
                clip._x = wXPos;
                clip._y = wYPos;
        }
		
		public function get eng():String {
                return engText;
        }
}