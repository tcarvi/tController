console.log("Inputs");
var ctDesigner;
var ctNavigator;
var ctCommunicator;
var ctRenderer;
var ctEventHandler;
var ctAI;
var ctMovie;
var ctAudio;
var ctTester;
function init(screens, server){
    ctDesigner = new tDesigner();
    ctDesigner.getDisplayElementsFromHTML();
    ctNavigator =  new tNavigator();
    for (var i = 0; i < screens.length; i++) {
        ctNavigator.configNavigationDataStructure(screens[i]);
    }
    screens = null;
    ctCommunicator =  new tCommunicator();
    ctCommunicator.setServer(server);
    ctRenderer = new tRenderer();
    ctEventHandler = new tEvents();
    ctDesigner.init();
    ctNavigator.navigateToScreen(tNavigator.screenArray[0]);
    ctAI = new tAI;
    ctMovie = new tMovie;
    ctAudio = new tAudio;
    ctTester = new tTest;
}; // end of init(screens, server)

if (window.addEventListener) { 
    window.addEventListener( "load", function(){ init(screens, server);}, false );
} else if ( window.attachEvent ) { 
    window.attachEvent( "onload", function(){ init(screens, server);} );
} else if ( window.onLoad ) {
    window.onload = function(){ init(screens, server) };
}

var server = "";
var screens = [];
screens[0] = {
  "sectionId"            : "sectionDefinedName",
  "screenName"           : "screenDefinedName",
  "elementsToDisplay"    : ["secionId1", "sectionId2"],
  
};
screens[1] = {
  "sectionId"            : "sectionDefinedName",
  "screenName"           : "screenDefinedName",
  "elementsToDisplay"    : ["secionId1", "sectionId2"],
};

/***
 ****  Definition for initCodeScreen[numbers]
 ****  Ex:  function initCodeScreen0(){  };
 ***/

/***
 ****  Definition for validationScreen[numbers]
 ****  Ex:  function initCodeScreen0(){  };
 ***/

/***
 ****  Definition for ajaxCodeScreen[numbers]
 ****  Ex:  function initCodeScreen0(){  };
 ***/

/***
 ****  Definition for additionalCodeScreen[numbers]
 ****  Ex:  function initCodeScreen0(){  };
 ***/

function initCodeScreen0(screens, server){
    ctNavigator.additionalCodeScreen0 = function(){
        var selectedIndex = document.getElementById("").selectedIndex;
        ctRenderer.populate(protoJSON[seletedIndex]);
    };
}