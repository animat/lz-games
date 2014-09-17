var ExpressInstall = function()
{
   this.needsUpdate = _root.MMplayerType != undefined?true:false;
};
ExpressInstall.prototype = {init:function()
{
   if(this.needsUpdate)
   {
      this.loadUpdater();
      return true;
   }
   return false;
},loadUpdater:function()
{
   System.security.allowDomain("fpdownload.macromedia.com");
   this.updater = _root.createEmptyMovieClip("expressInstallHolder",10000000);
   var _self = this;
   this.updater.installStatus = _self.onInstallStatus;
   this.hold = this.updater.createEmptyMovieClip("hold",1);
   this.updater.onEnterFrame = function()
   {
      if(typeof this.hold.startUpdate == "function")
      {
         _self.initUpdater();
         this.onEnterFrame = null;
      }
   };
   var _loc3_ = Math.random();
   this.hold.loadMovie("http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?" + _loc3_);
},initUpdater:function()
{
   this.hold.redirectURL = _root.MMredirectURL;
   this.hold.MMplayerType = _root.MMplayerType;
   this.hold.MMdoctitle = _root.MMdoctitle;
   this.hold.startUpdate();
},onInstallStatus:function(msg)
{
   if(msg != "Download.Complete")
   {
      if(msg == "Download.Cancelled")
      {
         getUrl("javascript:alert(\'This content requires a more recent version of the Macromedia Flash Player.\')", "");
      }
      else if(msg == "Download.Failed")
      {
         getUrl("javascript:alert(\'There was an error downloading the Flash Player update. Please try again later, or visit macromedia.com to download the latest version of the Flash plugin.\')", "");
      }
      
   }
}};
if(_root.MMplayerType == undefined)
{
   gotoAndPlay(2);
}
else
{
   stop();
   var updater;
   var hold;
   loadUpdater = function()
   {
      System.security.allowDomain("fpdownload.macromedia.com");
      updater = _root.createEmptyMovieClip("expressInstallHolder",10000000);
      updater.installStatus = installStatus;
      hold = updater.createEmptyMovieClip("hold",1);
      updater.onEnterFrame = function()
      {
         if(typeof hold.startUpdate == "function")
         {
            loadInit();
            delete this.onEnterFrame;
         }
      };
      var _loc3_ = Math.random();
      hold.loadMovie("http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?" + _loc3_);
   };
   loadInit = function()
   {
      hold.redirectURL = _root.MMredirectURL;
      hold.MMplayerType = _root.MMplayerType;
      hold.MMdoctitle = _root.MMdoctitle;
      hold.startUpdate();
   };
   installStatus = function(statusValue)
   {
      if(statusValue != "Download.Complete")
      {
         if(statusValue == "Download.Cancelled")
         {
            getUrl("javascript:alert(\'This content requires a more recent version of the Macromedia Flash Player.\')", "");
         }
         else if(statusValue == "Download.Failed")
         {
            getUrl("javascript:alert(\'There was an error in downloading the Flash Player update. Please try again later, or visit macrmedia.com to download the latest version of the Flash plugin.\')", "");
         }
         
      }
   };
   loadUpdater();
}
