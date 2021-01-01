console.log("Design");
function tDesigner(){};
tDesigner.prototype.init = function() {
 tDesigner.fitPage();
 tDesigner.touchConfig();
 tEvents.define("appInit");
 tDesigner.disableScroll(); 
};
tDesigner.prototype.enableScroll = function(){
  tDesigner.removeClass(document.body, "pageNotScroll");
  tDesigner.removeClass(document.documentElement, "pageNotScroll");
};

tDesigner.prototype.disableScroll = function(){
  tDesigner.addClass(document.body, "pageNotScroll");
  tDesigner.addClass(document.documentElement, "pageNotScroll");
};

tDesigner.prototype.fitPage = function(){
 var height = (window.innerHeight !== "undefined") ? window.innerHeight : (document.documentElement.clientHeight !== "undefined") ? document.documentElement.clientHeight : document.body.clientHeight;
 document.getElementById("container").style.minHeight = "" + height + "px";
 document.getElementById("container").style.height = "" + height + "px";
};

tDesigner.prototype.fitField = function(option){
  var prev;
  var parent;
  if(option){
    var fields = document.querySelectorAll("#" + option + " .fitField");
    var newFields = new Array();
    for(var j=0;j<fields.length;j++){
      var upParent;
      if (typeof fields[j].parentElement !== "undefined") {
        upParent = fields[j].parentElement.parentElement;
      } else if (typeof fields[j].parentNode !== "undefined") { 
        upParent = fields[j].parentNode.parentNode;
      }
      if( (upParent != undefined) && (upParent.id === option) ) {
        newFields.push(fields[j]);   
      }
    }
  }else{
    var newFields = document.querySelectorAll(".fitField");
  }
  setTimeout(function(){
    for(var i=0;i<newFields.length;i++){
        prev =  (typeof newFields[i].previousElementSibling !== "undefined") ?  newFields[i].previousElementSibling : newFields[i].previousSibling;
        parent = (typeof newFields[i].parentElement !== "undefined") ? newFields[i].parentElement : newFields[i].parentNode;
        newFields[i].style.width = Math.floor( ((parent.offsetWidth-42) - prev.offsetWidth) ) + "px";
    }
  }, 125);
};

tDesigner.prototype.swipeMenu = function(data){
  if(data.sX < 25 && (data.sX + 10) < data.eX && document.getElementById("menuNav").style.left != "0px"){
    tDesigner.moveMenu("open");
  }else if( data.eX < (data.sX - 10)){
    tDesigner.moveMenu("close")
  }
};

tDesigner.prototype.touchConfig = function() {
  var query = document.querySelectorAll(".hasTouched");
  for(i=0;i<document.querySelectorAll(".hasTouched").length;i++){
   if ("classList" in document.createElement("_")){
     query[i].ontouchstart = function(){ this.classList.add("touched"); };
     query[i].ontouchend = function(){ this.classList.remove("touched"); };
     query[i].ontouchcancel = function(){ this.classList.remove("touched"); };
     query[i].ontouchleave = function(){ this.classList.remove("touched"); }; 
     query[i].onmousedown = function(){ this.classList.add("touched"); };
     query[i].onmouseup = function(){ this.classList.remove("touched"); };
   } else {
     query[i].ontouchstart = function(){var startCN =  this.className; if(startCN.indexOf("touched") == -1) this.className += " touched"; };
     var reTouched = new RegExp("\\b" + "touched" + "\\b");
     query[i].ontouchend = function(){var endCN =  this.className; if(endCN.indexOf("touched") != -1) this.className = endCN.replace(reTouched, "");};
     query[i].ontouchcancel = function(){var cancelCN =  this.className; if(cancelCN.indexOf("touched") != -1) this.className = cancelCN.replace(reTouched, "");};
     query[i].ontouchleave = function(){var leaveCN =  this.className; if(leaveCN.indexOf("touched") != -1) this.className = leaveCN.replace(reTouched, "");};
     query[i].onmousedown = function(){var downCN =  this.className; if(downCN.indexOf("touched") == -1) this.className += " touched"; };
     query[i].onmouseup = function(){var upCN =  this.className; if(upCN.indexOf("touched") != -1) this.className = upCN.replace(reTouched, "");};
   }
  }
};
tDesigner.prototype.handlerMoveMenu = function(){
  tDesigner.moveMenu();
};
tDesigner.prototype.moveMenu = function(option){
  tDesigner.removeClass(document.getElementById("mutableSections"), "menuHelper");
  if(tEvents.isCSS3()) {
     if ("classList" in document.createElement("_")){
       if(!option){
        option = (document.getElementById("menuNav").classList.contains("open")) ? "close" : "open";
       }
       if (option === "close"){
        document.getElementById("menuNav").classList.remove("open");
        document.getElementById("menuBars").classList.remove("open");
       } else if (option == "open"){
        document.getElementById("menuNav").classList.add("open");
        document.getElementById("menuBars").classList.add("open");
       }

     } else {
       var navCN = document.getElementById("menuNav").className;
       var barsCN = document.getElementById("menuBars").className;
       var reOpen = new RegExp("\\b" + "open" + "\\b");
       if(!option){
        option = (navCN.indexOf("open") != -1) ? "close" : "open";
       }
       if (option === "close"){
        document.getElementById("menuNav").className = navCN.replace(reOpen, "");
        document.getElementById("menuBars").className = barsCN.replace(reOpen, "");    
       } else if (option === "open"){
        // TEST IF WE HAVE ONLY ONE CLASS
        document.getElementById("menuNav").className = "open";
        document.getElementById("menuBars").className = "open";    
       }
     }
  } else {
    if (!option) {
      if (document.getElementById('menuNav').style.left === ""){
        var width = (window.innerWidth !== "undefined") ? window.innerWidth : (document.documentElement.clientWidth !== "undefined") ? document.documentElement.clientWidth : document.body.clientWidth;
        if (parseInt(width)) width = parseInt(width) + 100;
        document.getElementById('menuNav').style.left = "-" + width + "px";
        document.getElementById('menuBars').style.width = "8px";
      } else if (document.getElementById('menuNav').style.left !== "0px"){      
        document.getElementById('menuNav').style.left = "0px";
        document.getElementById('menuBars').style.width = "4px";
      } else {
        var width = (window.innerWidth !== "undefined") ? window.innerWidth : (document.documentElement.clientWidth !== "undefined") ? document.documentElement.clientWidth : document.body.clientWidth;
        if (parseInt(width)) width = parseInt(width) + 100;
        document.getElementById('menuNav').style.left = "-" + width + "px";
        document.getElementById('menuBars').style.width = "8px";
      }
    } // end of toogler
    else if(option === "close"){ 
        var width2 = (window.innerWidth !== "undefined") ? window.innerWidth : (document.documentElement.clientWidth !== "undefined") ? document.documentElement.clientWidth : document.body.clientWidth;
        if (parseInt(width2)) width2 = parseInt(width2) + 100;
        document.getElementById('menuNav').style.left = "-" + width2 + "px";
        document.getElementById('menuBars').style.width = "8px";
    }
    else if (option === "open"){
        document.getElementById('menuNav').style.left = "0px";
        document.getElementById('menuBars').style.width = "4px";
    }
  } // end of else of ** typeof document.getElementById('menuNav').style.transform != "undefined"
}; // end of MoveMen
tDesigner.prototype.display = function(screen) {
  var temp = tDesigner.elementsId.indexOf(screen.elementsToDisplay[0]);
  var sumOfElements = 0;
  var positionInArray; 
  for (var i = 0; i < screen.elementsToDisplay.length; i++) {
    positionInArray = tDesigner.elementsId.indexOf(screen.elementsToDisplay[i]);
    sumOfElements += tDesigner.elementsValue[positionInArray];
  }
  this.changeDisplay(sumOfElements);
};
 
tDesigner.prototype.elementsValue = [];
tDesigner.prototype.elementsId = [];

tDesigner.prototype.getDisplayElementsFromHTML = function() {
 var array = document.querySelectorAll(".tElementDisplay");
 var tempElement;
 var binary = 1;
 if (array.length !== 0) {
  tDesigner.elementsValue[0] = 1;
  for (var i = 0; i < array.length; i++){
     tempElement = array[i];
     tDesigner.elementsId[i] = "" + tempElement.id;
     tDesigner.elementsValue[i] = binary;
     binary = binary << 1;
  }
 }
};

/*  Not needed 
tDesigner.prototype.saveDisplayElements = function(arrayInput) {
 var binary = 2;
 tDesigner.elementsValue[arrayInput[0]] = binary;
 tDesigner.elementsId = arrayInput[0];
 for(i = 1; i < arrayInput.length; i++){
   binary = binary << 1;
   tDesigner.elementsValue[arrayInput[i]] = binary;
   tDesigner.elementsId = arrayInput[0];
 }
};
*/
tDesigner.prototype.changeDisplay = function(i) {
  if (i & 1) {tDesigner.removeClass(document.getElementById(tDesigner.elementsId[0]), "hidden");} 
  else if (tDesigner.elementsId[0] !== undefined) {tDesigner.addClass(document.getElementById(tDesigner.elementsId[0]), "hidden");}
  if (i & 2) {tDesigner.removeClass(document.getElementById(tDesigner.elementsId[1]), "hidden");} 
  else if (tDesigner.elementsId[1] !== undefined) {tDesigner.addClass(document.getElementById(tDesigner.elementsId[1]), "hidden");}
  if (i & 4) {tDesigner.removeClass(document.getElementById(tDesigner.elementsId[2]), "hidden");} 
  else if (tDesigner.elementsId[2] !== undefined) {tDesigner.addClass(document.getElementById(tDesigner.elementsId[2]), "hidden");}
  if (i & 8) {tDesigner.removeClass(document.getElementById(tDesigner.elementsId[3]), "hidden");} 
  else if (tDesigner.elementsId[3] !== undefined) {tDesigner.addClass(document.getElementById(tDesigner.elementsId[3]), "hidden");}
  if (i & 16) {tDesigner.removeClass(document.getElementById(tDesigner.elementsId[4]), "hidden");} 
  else if (tDesigner.elementsId[4] !== undefined) {tDesigner.addClass(document.getElementById(tDesigner.elementsId[4]), "hidden");}
  if (i & 32) {tDesigner.removeClass(document.getElementById(tDesigner.elementsId[5]), "hidden");} 
  else if (tDesigner.elementsId[5] !== undefined) {tDesigner.addClass(document.getElementById(tDesigner.elementsId[5]), "hidden");}
  if (i & 64) {tDesigner.removeClass(document.getElementById(tDesigner.elementsId[6]), "hidden");} 
  else if (tDesigner.elementsId[6] !== undefined) {tDesigner.addClass(document.getElementById(tDesigner.elementsId[6]), "hidden");}
  if (i & 128) {tDesigner.removeClass(document.getElementById(tDesigner.elementsId[7]), "hidden");} 
  else if (tDesigner.elementsId[7] !== undefined) {tDesigner.addClass(document.getElementById(tDesigner.elementsId[7]), "hidden");}
};
tDesigner.prototype.loadingBar = function(option){
  switch(option){
    case 'on':
      window.scrollTo(0,0);
      tDesigner.removeClass(document.getElementById('bar'), "hidden");
      tDesigner.removeClass(document.getElementById('dot1'), "fim");
      tDesigner.removeClass(document.getElementById('dot2'), "fim");
      tDesigner.removeClass(document.getElementById('dot3'), "fim");
      tDesigner.removeClass(document.getElementById('dot4'), "fim");
    break;
    case 'off':
      tDesigner.addClass(document.getElementById('dot1'), "fim");
      tDesigner.addClass(document.getElementById('dot2'), "fim");
      tDesigner.addClass(document.getElementById('dot3'), "fim");
      tDesigner.addClass(document.getElementById('dot4'), "fim");
      setTimeout(function(){ 
        tDesigner.addClass(document.getElementById('bar'), "hidden");
      }, 555);
    break;
    default:
  }
};
tDesigner.prototype.addClass = function(el, className){
  if(document.body.classList){
    if(!el.classList.contains(className)){
      el.classList.add(className);
    }
  }else{
    var classItems = el.className;
    if (classItems.indexOf(className) == -1){
      el.className = el.className + " " + className;
    } 
  }
};
tDesigner.prototype.removeClass = function(el, className){
  if(document.body.classList){
    if(el.classList.contains(className)){
      el.classList.remove(className);
    }
  }else{
    var classItems = el.className;
    var regex = new RegExp("\\b" + className + "\\b");
    if (classItems.indexOf(className) != -1){
      el.className = classItems.replace(regex, "");
      el.className = el.className.replace(/^\s\s*/, '');
      el.className = el.className.replace(/\s\s*$/, '');
    }
  }
};
tDesigner.prototype.toggleClass = function(el, className){
  if(document.body.classList){
    if(el.classList.contains(className)){
      el.classList.remove(className);
    }else{
      el.classList.add(className);
    }
  }else{
    var classItems = el.className;
    var regex = new RegExp("\\b" + className + "\\b");
    if (classItems.indexOf(className) != -1){
      tDesigner.removeClass(el , clasName);
    }else{
      tDesigner.addClass(el , clasName);
    }
  }
};