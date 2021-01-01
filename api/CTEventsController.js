console.log("Events");
function tEvents(){};

tEvents.prototype.handleSelectRow = function(e) {
 if (typeof e.target.cells === "undefined" ) { //we have a cell
  if (typeof e.target.parentElement !== "undefined") {
    document.getElementById("").value = e.target.parentElement.cells[0].textContent;
  }
  else if (typeof e.target.parentNode !== "undefined") {
    document.getElementById("").value = e.target.parentNode.cells[0].textContent;
  }  
  else
    alert("Browser desatualizado.");
 }
 else {
   document.getElementById("").value = e.target.cells[0].textContent;
 }
 tCommunicator.ajaxToRenderDetailFromList();
};
tEvents.prototype.sX = 0;
tEvents.prototype.sY = 0;
tEvents.prototype.setSX = function(newSX){
 this.sX = newSX;
};
tEvents.prototype.getSX = function(){
 return this.sX;
};
tEvents.prototype.setSY = function(newSY){
 this.sY = newSY;
};
tEvents.prototype.getSY = function(){
 return this.sY;
};

tEvents.prototype.isCSS3 = function(){
  var support = 'box-shadow' in document.body.style;
  return support;
 };
tEvents.prototype.addEvent = function(el, type, fn) {
  if (window.addEventListener) {
     el.addEventListener(type, fn, false);
  } else if (window.attachEvent) {
      el.attachEvent("on" + type, fn);
  } else {
    el["on" + type] = fn;
  }
};
tEvents.prototype.removeEvent = function(el, type, fn) {
  if (window.removeEventListener) {
     el.removeEventListener(type, fn);
  } else if (window.detachEvent) {
      el.detachEvent("on" + type, fn);
  } else {
    el["on" + type] = "";
  }
};
tEvents.prototype.handlerResize = function(e) {
  // We must deal with other design issues, when changing the size of screens.
  tDesigner.fitField();
};
tEvents.prototype.define = function(screen) {
  if (screen.order === 0) {tEvents.screen0();}
  else if (screen.order === 1) {tEvents.screen1();}
  else if (screen.order === 2) {tEvents.screen2();}
  else if (screen.order === 3) {tEvents.screen3();}
  else if (screen.order === 4) {tEvents.screen4();}
  else if (screen.order === 5) {tEvents.screen5();}
  else if (screen.order === 6) {tEvents.screen6();}
  else if (screen.order === 7) {tEvents.screen7();}
  else if (screen.order === 8) {tEvents.screen8();}
  else if (screen.order === 9) {tEvents.screen9();}
  else if (screen.order === 10) {tEvents.screen10();}
  else if (screen.order === 11) {tEvents.screen11();}
  else if (screen.order === 12) {tEvents.screen12();}
  else if (screen.order === 13) {tEvents.screen13();}
  else if (screen.order === 14) {tEvents.screen14();}
  else if (screen.order === 15) {tEvents.screen15();}
  else if (screen.order === 16) {tEvents.screen16();}
  else if (screen.order === 17) {tEvents.screen17();}
  else if (screen.order === 18) {tEvents.screen18();}
  else if (screen.order === 19) {tEvents.screen19();}
};

tEvents.prototype.screen0 = function(){};
tEvents.prototype.screen1 = function(){};
tEvents.prototype.screen2 = function(){};
tEvents.prototype.screen3 = function(){};
tEvents.prototype.screen4 = function(){};
tEvents.prototype.screen5 = function(){};
tEvents.prototype.screen6 = function(){};
tEvents.prototype.screen7 = function(){};
tEvents.prototype.screen8 = function(){};
tEvents.prototype.screen9 = function(){};
tEvents.prototype.screen10 = function(){};
tEvents.prototype.screen11 = function(){};
tEvents.prototype.screen12 = function(){};
tEvents.prototype.screen13 = function(){};
tEvents.prototype.screen14 = function(){};
tEvents.prototype.screen15 = function(){};
tEvents.prototype.screen16 = function(){};
tEvents.prototype.screen17 = function(){};
tEvents.prototype.screen18 = function(){};
tEvents.prototype.screen19 = function(){};



