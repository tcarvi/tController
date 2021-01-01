console.log("Nav");
function tNavigator(){};
tNavigator.prototype.screenToGo = 0;
tNavigator.prototype.screenArray = [];

tNavigator.prototype.configNavigationDataStructure = function(  order,
                                                                 sectionId,
                                                                 screenName,
                                                                 elementsToDisplay          
                                                                 ){
  tNavigator.screenArray[tNavigator.screenArray.length] = {
      order: order,
      sectionId: sectionId,
      screenName: screenName,
      elementsToDisplay: elementsToDisplay,
  }
};
tNavigator.prototype.navigateToScreen = function(screen){
  alert("tNavigator.navigateToScreen(--)");
  if(screen.hasInitCode) {
    alert("hasInitCode");
    switch(screen.order) {
      case 0:
          // case for certificates .... 
          tNavigator.initCodeScreen0();
          break;
      case 1:
          // case for login ....
          tNavigator.initCodeScreen1();
          break;
      case 2:
          tNavigator.initCodeScreen2();
          break;
      case 3:
          tNavigator.initCodeScreen3();
          break;
      case 4:
          tNavigator.initCodeScreen4();
          break;
      case 5:
          tNavigator.initCodeScreen5();
          break;
      case 6:
          tNavigator.initCodeScreen6();
          break;
      case 7:
          tNavigator.initCodeScreen7();
          break;
      case 8:
          tNavigator.initCodeScreen8();
          break;
      case 9:
          tNavigator.initCodeScreen9();
          break;
      case 10:
          tNavigator.initCodeScreen10();
          break;
      case 11:
          tNavigator.initCodeScreen11();
          break;
      case 12:
          tNavigator.initCodeScreen12();
          break;
      case 13:
          tNavigator.initCodeScreen13();
          break;
      case 14:
          tNavigator.initCodeScreen14();
          break;
      case 15:
          tNavigator.initCodeScreen15();
          break;
      case 16:
          tNavigator.initCodeScreen16();
          break;
      case 17:
          tNavigator.initCodeScreen17();
          break;
      case 18:
          tNavigator.initCodeScreen18();
          break;
      case 19:
          tNavigator.initCodeScreen19();
          break;
      case 20:
          tNavigator.initCodeScreen20();
          break;
      case 21:
          tNavigator.initCodeScreen21();
          break;
      case 22:
          tNavigator.initCodeScreen22();
          break;
      case 23:
          tNavigator.initCodeScreen23();
          break;
      case 24:
          tNavigator.initCodeScreen24();
          break;
      default:
          break;
    } // end of switch
  } // end of if

  if(screen.hasValidation) {
    alert("hasValidation");
    switch(screen.order) {
      // Verify later if we can create functions dinamicaly
      case 0:
          // case for certificates .... 
          tNavigator.validationScreen0();
          break;
      case 1:
          // case for login ....
          tNavigator.validationScreen1();
          break;
      case 2:
          tNavigator.validationScreen2();
          break;
      case 3:
          tNavigator.validationScreen3();
          break;
      case 4:
          tNavigator.validationScreen4();
          break;
      case 5:
          tNavigator.validationScreen5();
          break;
      case 6:
          tNavigator.validationScreen6();
          break;
      case 7:
          tNavigator.validationScreen7();
          break;
      case 8:
          tNavigator.validationScreen8();
          break;
      case 9:
          tNavigator.validationScreen9();
          break;
      case 10:
          tNavigator.validationScreen10();
          break;
      case 11:
          tNavigator.validationScreen11();
          break;
      case 12:
          tNavigator.validationScreen12();
          break;
      case 13:
          tNavigator.validationScreen13();
          break;
      case 14:
          tNavigator.validationScreen14();
          break;
      case 15:
          tNavigator.validationScreen15();
          break;
      case 16:
          tNavigator.validationScreen16();
          break;
      case 17:
          tNavigator.validationScreen17();
          break;
      case 18:
          tNavigator.validationScreen18();
          break;
      case 19:
          tNavigator.validationScreen19();
          break;
      case 20:
          tNavigator.validationScreen19();
          break;
      case 21:
          tNavigator.validationScreen19();
          break;
      case 22:
          tNavigator.validationScreen19();
          break;
      case 23:
          tNavigator.validationScreen19();
          break;
      case 24:
          tNavigator.validationScreen19();
          break;
      default:
          break;
    } // end of switch
  } // end of if
  if (screen.hasAjaxCall)
    tCommunicator.ajaxToRender(screen);
    // inside ajaxToRender, we call secondNavigateToScreen
  else
    tNavigator.secondNavigateToScreen(screen);
};

tNavigator.prototype.secondNavigateToScreen = function(screen){

  if (screen.userTitle !== undefined) {tRenderer.populateUser();}

  if (screen.sectionTitle !== undefined) {
    document.getElementById(screen.sectionId + "Title").textContent = screen.sectionTitle;
  }
  if (screen.button1Title !== undefined) {
    document.getElementById("button1").textContent = screen.button1Title;
  }
  if (screen.button2Title !== undefined) {
    document.getElementById("button2").textContent = screen.button2Title;
  }
  if (screen.button3Title !== undefined) {
    document.getElementById("button3").textContent = screen.button3Title;
  }
  // Não usado no "prototipo"
  tEvents.define(screen);
  
  tDesigner.display(screen);
  tDesigner.fitField(screen.sectionId);
  tDesigner.fitPage();

  if (screen.scrollOption === true) { tDesigner.enableScroll(); } 
  else { tDesigner.disableScroll(); }

  // Some code not configured !!!
  if(screen.screenName === "loggedIn") {
  }
};


// Init Code - Developer's code at index.js initCodeScreen24
tNavigator.prototype.initCodeScreen0 = function(){};
tNavigator.prototype.initCodeScreen1 = function(){};
tNavigator.prototype.initCodeScreen2 = function(){};
tNavigator.prototype.initCodeScreen3 = function(){};
tNavigator.prototype.initCodeScreen4 = function(){};
tNavigator.prototype.initCodeScreen5 = function(){};
tNavigator.prototype.initCodeScreen6 = function(){};
tNavigator.prototype.initCodeScreen7 = function(){};
tNavigator.prototype.initCodeScreen8 = function(){};
tNavigator.prototype.initCodeScreen9 = function(){};
tNavigator.prototype.initCodeScreen10 = function(){};
tNavigator.prototype.initCodeScreen11 = function(){};
tNavigator.prototype.initCodeScreen12 = function(){};
tNavigator.prototype.initCodeScreen13 = function(){};
tNavigator.prototype.initCodeScreen14 = function(){};
tNavigator.prototype.initCodeScreen15 = function(){};
tNavigator.prototype.initCodeScreen16 = function(){};
tNavigator.prototype.initCodeScreen17 = function(){};
tNavigator.prototype.initCodeScreen18 = function(){};
tNavigator.prototype.initCodeScreen19 = function(){};
tNavigator.prototype.initCodeScreen20 = function(){};
tNavigator.prototype.initCodeScreen21 = function(){};
tNavigator.prototype.initCodeScreen22 = function(){};
tNavigator.prototype.initCodeScreen23 = function(){};
tNavigator.prototype.initCodeScreen24 = function(){};
tNavigator.prototype.initCodeScreen25 = function(){};
tNavigator.prototype.initCodeScreen26 = function(){};
tNavigator.prototype.initCodeScreen27 = function(){};
tNavigator.prototype.initCodeScreen28 = function(){};
tNavigator.prototype.initCodeScreen29 = function(){};
tNavigator.prototype.initCodeScreen30 = function(){};
tNavigator.prototype.initCodeScreen31 = function(){};
// Validation - Developer's code at index.js
tNavigator.prototype.validationScreen0 = function(){};
tNavigator.prototype.validationScreen1 = function(){};
tNavigator.prototype.validationScreen2 = function(){};
tNavigator.prototype.validationScreen3 = function(){};
tNavigator.prototype.validationScreen4 = function(){};
tNavigator.prototype.validationScreen5 = function(){};
tNavigator.prototype.validationScreen6 = function(){};
tNavigator.prototype.validationScreen7 = function(){};
tNavigator.prototype.validationScreen8 = function(){};
tNavigator.prototype.validationScreen9 = function(){};
tNavigator.prototype.validationScreen10 = function(){};
tNavigator.prototype.validationScreen11 = function(){};
tNavigator.prototype.validationScreen12 = function(){};
tNavigator.prototype.validationScreen13 = function(){};
tNavigator.prototype.validationScreen14 = function(){};
tNavigator.prototype.validationScreen15 = function(){};
tNavigator.prototype.validationScreen16 = function(){};
tNavigator.prototype.validationScreen17 = function(){};
tNavigator.prototype.validationScreen18 = function(){};
tNavigator.prototype.validationScreen19 = function(){};
tNavigator.prototype.validationScreen20 = function(){};
tNavigator.prototype.validationScreen21 = function(){};
tNavigator.prototype.validationScreen22 = function(){};
tNavigator.prototype.validationScreen23 = function(){};
tNavigator.prototype.validationScreen24 = function(){};
tNavigator.prototype.validationScreen25 = function(){};
tNavigator.prototype.validationScreen26 = function(){};
tNavigator.prototype.validationScreen27 = function(){};
tNavigator.prototype.validationScreen28 = function(){};
tNavigator.prototype.validationScreen29 = function(){};
tNavigator.prototype.validationScreen30 = function(){};
tNavigator.prototype.validationScreen31 = function(){};
// Additional Code - Developer's code at index.js  additionalCode
tNavigator.prototype.additionalCodeScreen0 = function(){};
tNavigator.prototype.additionalCodeScreen1 = function(){};
tNavigator.prototype.additionalCodeScreen2 = function(){};
tNavigator.prototype.additionalCodeScreen3 = function(){};
tNavigator.prototype.additionalCodeScreen4 = function(){};
tNavigator.prototype.additionalCodeScreen5 = function(){};
tNavigator.prototype.additionalCodeScreen6 = function(){};
tNavigator.prototype.additionalCodeScreen7 = function(){};
tNavigator.prototype.additionalCodeScreen8 = function(){};
tNavigator.prototype.additionalCodeScreen9 = function(){};
tNavigator.prototype.additionalCodeScreen10 = function(){};
tNavigator.prototype.additionalCodeScreen11 = function(){};
tNavigator.prototype.additionalCodeScreen12 = function(){};
tNavigator.prototype.additionalCodeScreen13 = function(){};
tNavigator.prototype.additionalCodeScreen14 = function(){};
tNavigator.prototype.additionalCodeScreen15 = function(){};
tNavigator.prototype.additionalCodeScreen16 = function(){};
tNavigator.prototype.additionalCodeScreen17 = function(){};
tNavigator.prototype.additionalCodeScreen18 = function(){};
tNavigator.prototype.additionalCodeScreen19 = function(){};
tNavigator.prototype.additionalCodeScreen20 = function(){};
tNavigator.prototype.additionalCodeScreen21 = function(){};
tNavigator.prototype.additionalCodeScreen22 = function(){};
tNavigator.prototype.additionalCodeScreen23 = function(){};
tNavigator.prototype.additionalCodeScreen24 = function(){};
tNavigator.prototype.additionalCodeScreen25 = function(){};
tNavigator.prototype.additionalCodeScreen26 = function(){};
tNavigator.prototype.additionalCodeScreen27 = function(){};
tNavigator.prototype.additionalCodeScreen28 = function(){};
tNavigator.prototype.additionalCodeScreen29 = function(){};
tNavigator.prototype.additionalCodeScreen30 = function(){};
tNavigator.prototype.additionalCodeScreen31 = function(){};
