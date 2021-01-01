console.log("init");
var ctCommunication;
function init(serverT){
 ctCommunicator =  new tCommunicator();
 ctCommunicator.setServer(serverT);
}; // end of init(screens, server)
var server = "ip";
if (window.addEventListener) {
 window.addEventListener( "load", function(){ init(server);}, false );
} else if ( window.attachEvent ) { 
 window.attachEvent( "onload", function(){ init(server);} );
} else if ( window.onLoad ) {
 window.onload = function(){ init(server) };
}