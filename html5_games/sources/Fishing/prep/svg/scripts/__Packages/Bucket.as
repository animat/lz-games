class Bucket
{
   function Bucket(main, bucket)
   {
      this.fishCount = 0;
      this.mc = bucket;
      this.fishLayer = this.mc.fish_catched_layer;
   }
   function putInBucket(fish)
   {
      var _loc3_ = Math.floor(Math.random() * 2) + 1;
      this.fishCount = this.fishCount + 1;
      var _loc2_ = this.fishLayer.attachMovie(fish.__get__fishType() + "_in_bucket_" + _loc3_,"fish" + this.fishCount,this.fishLayer.getNextHighestDepth());
      _loc2_._x = 10 + Math.round(Math.random() * 51);
      _loc2_._y = -200;
      _loc2_._alpha = 0;
      var _loc4_ = 0 + Math.round(Math.random() * 37);
      new mx.transitions.Tween(_loc2_,"_alpha",mx.transitions.easing.Regular.easeOut,_loc2_._alpha,100,0.8,true);
      new mx.transitions.Tween(_loc2_,"_y",mx.transitions.easing.Regular.easeOut,_loc2_._y,_loc4_,0.4,true);
   }
}
