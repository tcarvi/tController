console.log("communication");
function tCommunicator(){};
tCommunicator.prototype.server = "";

tCommunicator.prototype.setServer = function(newServer){
  this.server = newServer;
};
tCommunicator.prototype.getServer = function(){
  return this.server;
};
tCommunicator.prototype.user = "";
tCommunicator.prototype.getUser = function(){
  return this.user;
};
tCommunicator.prototype.setUser = function(newUser){
  this.user = newUser;
};
tCommunicator.prototype.password = "";
tCommunicator.prototype.getPassword = function(){
  return this.password;
};
tCommunicator.prototype.setPassword = function(newPassword){
  this.password = newPassword;
};
tCommunicator.prototype.xmlhttp = null;
tCommunicator.prototype.setXmlHttp = function(){
  if(window.XMLHttpRequest){
    this.xmlhttp = new XMLHttpRequest({mozSystem:true});
  } else {
    this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } 
};
tCommunicator.prototype.urlCall = null;
tCommunicator.prototype.getUrlCall = function(screen){
  var path = screen.ajaxPath;
  if (screen.n) path = path + "/";
  var timeStamp = new Date().getMilliseconds();
  var urlCall = "" + this.getServer() + path + "?timestamp=" + timeStamp;
  return urlCall;
};
tCommunicator.prototype.ajaxToRenderScreen1 = function(){
  var screen = tNavigator.screenArray[1];
  if (screen.validation) tNavigator.validationScreen1;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen2 = function(){
  var screen = tNavigator.screenArray[2];
  if (screen.validation) tNavigator.validationScreen2;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen3 = function(){
  var screen = tNavigator.screenArray[3];
  if (screen.validation) tNavigator.validationScreen3;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen4 = function(){
  var screen = tNavigator.screenArray[4];
  if (screen.validation) tNavigator.validationScreen4;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen5 = function(){
  var screen = tNavigator.screenArray[5];
  if (screen.validation) tNavigator.validationScreen5;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen6 = function(){
  var screen = tNavigator.screenArray[6];
  if (screen.validation) tNavigator.validationScreen6;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen7 = function(){
  var screen = tNavigator.screenArray[7];
  if (screen.validation) tNavigator.validationScreen7;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen8 = function(){
  var screen = tNavigator.screenArray[8];
  if (screen.validation) tNavigator.validationScreen8;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen9 = function(){
  var screen = tNavigator.screenArray[9];
  if (screen.validation) tNavigator.validationScreen9;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen10 = function(){
  var screen = tNavigator.screenArray[10];
  if (screen.validation) tNavigator.validationScreen10;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen11 = function(){
  var screen = tNavigator.screenArray[11];
  if (screen.validation) tNavigator.validationScreen11;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen12 = function(){
  var screen = tNavigator.screenArray[12];
  if (screen.validation) tNavigator.validationScreen12;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen13 = function(){
  var screen = tNavigator.screenArray[13];
  if (screen.validation) tNavigator.validationScreen13;
  tCommunicator.ajaxToRender(screen);
};
tCommunicator.prototype.ajaxToRenderScreen4 = function(){
};

tCommunicator.prototype.ajaxToRender = function(screen)  
{
    tCommunicator.setXmlHttp();
    var urlCall = tCommunicator.getUrlCall(screen);
    tDesigner.loadingBar("on");
    window.setTimeout(function(){
      tDesigner.loadingBar("off");
      }, 5000); //5000 milliseconds = 5 seconds
    tCommunicator.xmlhttp.ontimeout = function(e) {
      alert("erro.");
      tDesigner.loadingBar("off");
    };
    tCommunicator.xmlhttp.onerror = function(e) {
      alert("erro.");
      tDesigner.loadingBar("off");
    };
    tCommunicator.xmlhttp.onreadystatechange = function() {
      var status = tCommunicator.xmlhttp.status;
      var readyState = tCommunicator.xmlhttp.readyState;
      var rtext = tCommunicator.xmlhttp.responseText;
      if(readyState == 4) { 
        if (status == 200 || status == 202) {
         tRenderer.populate(screen, JSON.parse(rtext));  
         tDesigner.loadingBar("off");
         tNavigator.secondNavigateToScreen(screen);
        } else if ( status == 400 || status == 401  ) {
            tDesigner.loadingBar("off");
            if (rtext == "") { alert("Erro: .");}
        } else if ( status == 404 || status == 500 ) {
            tDesigner.loadingBar("off");
            if (rtext == "") { alert("Erro: .");}            
            var errorR = "Status = " + status;
            alert(errorR); 
        }
      }
    };

    tCommunicator.xmlhttp.open(screen.ajaxRequestType,urlCall,true);
    tCommunicator.xmlhttp.setRequestHeader("Accept","application/json");
    tCommunicator.xmlhttp.setRequestHeader("Content-Type","application/json");
    tCommunicator.xmlhttp.setRequestHeader("Accept-Charset","charset=utf-8");
    tCommunicator.xmlhttp.setRequestHeader("Cache-Control","no-cache");
    tCommunicator.xmlhttp.setRequestHeader("Cache-Control","must-revalidate");
    tCommunicator.xmlhttp.setRequestHeader("Cache-Control","private");
    tCommunicator.xmlhttp.setRequestHeader("Pragma","no-cache");
    tCommunicator.xmlhttp.setRequestHeader("Expires","0");
    tCommunicator.xmlhttp.send(null);

};