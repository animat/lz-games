﻿/** * @className	Bucket * @author		Samit Basak * @purpose 	To give all properties and behaviour of catched fish*/import mx.transitions.Tween;//class Bucket {	// mc: bucket movie clip	private var mc:MovieClip;	// main: the main controller object of the game	private var main:RunGame;	// fishLayer: is the layer where the fishes are to be placed in the bucket	private var fishLayer:MovieClip;	// fishCount : is the number of fishes has been catched 	private var fishCount:Number;		/**	Constructor function 	@param 		main 	RunGame 	main movie controller object	@param		bucket	MovieClip	the bucket movieClip refference	@return 						no return value	*/	public function Bucket(main:RunGame, bucket:MovieClip){		fishCount = 0;		mc = bucket;		fishLayer = mc.fish_catched_layer;	}	/**	putInBucket function to put the catched fish in the bucket	@param   	fish	Fish	The fish object	@return 					no return value	*/	public function putInBucket(fish:Fish):Void{		var t:Number=Math.floor(Math.random()*2)+1;		var f:MovieClip = fishLayer.attachMovie(fish.fishType+"_in_bucket_"+t, "fish"+ fishCount++, fishLayer.getNextHighestDepth());		f._x = 10 + Math.round(Math.random()*51);		f._y = -200;		f._alpha = 0;		var endY = 0 + Math.round(Math.random()*37);		new Tween(f, "_alpha", mx.transitions.easing.Regular.easeOut, f._alpha, 100, .8, true);		new Tween(f, "_y", mx.transitions.easing.Regular.easeOut, f._y, endY, .4, true);	}}