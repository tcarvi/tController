console.log("Elements");
function tElements(){};

tElements.prototype.tag = {
 ARTICLE     :     1,
 ASIDE       :     2,
 DETAILS     :     4,
 FIGCAPTION  :     8,
 FIGURE      :    16,
 FOOTER      :    32,
 HEADER      :    64,
 HGROUP      :   128,
 MARK        :   256,
 NAV         :   512,
 SECTION     :  1024,
 SUMMARY     :  2048,
 TIME        :  4096,
 VIDEO       :  8192,
};
tElements.prototype.defineTags = function(i){
 if (i & this.tag.ARTICLE)document.createElement("article");
 if (i & this.tag.ASIDE)document.createElement("aside");
 if (i & this.tag.DETAILS)document.createElement("details");
 if (i & this.tag.FIGCAPTION)document.createElement("figcaption");
 if (i & this.tag.FIGURE)document.createElement("figure");
 if (i & this.tag.FOOTER)document.createElement("footer");
 if (i & this.tag.HEADER)document.createElement("header");
 if (i & this.tag.HGROUP)document.createElement("hgroup");
 if (i & this.tag.MARK)document.createElement("mark");
 if (i & this.tag.NAV)document.createElement("nav");
 if (i & this.tag.SECTION)document.createElement("section");
 if (i & this.tag.SUMMARY)document.createElement("summary");
 if (i & this.tag.TIME)document.createElement("time");
 if (i & this.tag.VIDEO)document.createElement("video");
};

tElements.prototype.ttag = {
 tMENU       : 1,
 tLIBUTTON   : 2,
 tBUTTON     : 4,
};
/**
 *   Following Custom Element Specification http://www.w3.org/TR/custom-elements/
 *   Follow this script to generate the code is very important!
 */
tElements.prototype.defineCustomTags = function(i){
 if (i & this.tag.tMENU) {
  if (typeof document.registerElement !== "undefined") {
   var tMenu = document.registerElement("t-menu", {
    prototype: Object.create(HTMLElement.prototype),
    extends: "div" });
  } else
    document.createElement("t-menu");
 }
 if (i & this.tag.tLIBUTTON) {
  if (typeof document.registerElement !== "undefined") {
   var tLiButton = document.registerElement("t-libutton", {
    prototype: Object.create(HTMLElement.prototype),
    extends: "li" });
  } else
     document.createElement("t-libutton");
 }
 if (i & this.tag.tBUTTON) {
  if (typeof document.registerElement !== "undefined") {
   var tButton = document.registerElement("t-button", {
    prototype: Object.create(HTMLElement.prototype),
    extends: "button" });
  } else
    document.createElement("t-button");
 }
};
/*
// This code will be used later. About webcomponents.
tElements.prototype.registertButton = function() {
 var proto = Object.create(HTMLElement.prototype);
 proto.createdCallback = function() {
  // Unobstrusive addEventListener
  if (window.addEventListener) {
   this.addEventListener( "click", this.handleEvent, false );
  } else if ( window.attachEvent ) {
   this.attachEvent( "onclick", this.handleEvent );
  } else if ( window.onLoad ) {
   this.onclick = this.handleEvent;
  }
 };
 proto.handleEvent = function() {console.log("t-button OK"); alert("t-button OK")};
 proto.inProperty = "OK";
 proto.test = function() {
          alert("Test event - " + this.inProperty);
 };
 var tButton = document.registerElement("t-button", {prototype: proto});
};

*/

// Code executed onload - Global variable tElements
var tElements = new tElements();
tElements.defineTags(tElements.tag.FOOTER + tElements.tag.SECTION);
tElements.defineCustomTags(tElements.tag.tMENU + tElements.tag.tLIBUTTON + tElements.tag.tBUTTON);
