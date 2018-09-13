#targetengine "main"

initialize();

function initialize() {
    //  quick apply, actie scripts
    app.menuActions.item('Quick Apply...').invoke();
    var includeS = app.menuActions.item( 'Include Scripts (s:)');
    if(!includeS.checked) {
        includeS.invoke();
    }
    sendKey_Win("{ESC}");

    //sendKey_Win("^{ENTER}");
    //sendKey_Win("^n");
}

function sendKey_Win(key) {
    app.doScript('set WshShell = CreateObject("WScript.Shell")\
        WshShell.SendKeys("' + key + '")',
        ScriptLanguage.VISUAL_BASIC);
}

//////
/*

function attach() {
    app.eventListeners.add("afterOpen", xActions);
}

function xActions(e) {
    app.applyWorkspace("TestWorkspace");
}





var myEventNames = [
"beforeQuit", "afterQuit",
"beforeNew", "afterNew",
"beforeOpen", "afterOpen",
"beforeClose", "afterClose",
"beforeSave", "afterSave",
"beforeSaveAs", "afterSaveAs",
"beforeSaveACopy", "afterSaveACopy",
"beforeRevert", "afterRevert",
"beforePrint", "afterPrint",
"beforeExport", "afterExport",
"beforeImport", "afterImport"
] ;


var myString = "Handling Event: " +myEvent.eventType;
myString += "\r\rTarget: " + myEvent.target + " " +myEvent.target.name;
myString += "\rCurrent: " +myEvent.currentTarget + " " +
myEvent.currentTarget.name;
myString += "\r\rPhase: " + myGetPhaseName(myEvent.eventPhase );
myString += "\rBubbles: " + myEvent.bubbles;
myString += "\r\rCancelable: " +myEvent.cancelable;
myString += "\rStopped: " +myEvent.propagationStopped;
myString += "\rCanceled: " +myEvent.defaultPrevented;
myString += "\r\rTime: " +myEvent.timeStamp;

function myGetPhaseName(myPhase){
switch(myPhase){
case EventPhases.atTarget:
myPhaseName = "At Target";
break;
case EventPhases.bubblingPhase:
myPhaseName = "Bubbling";
break;
case EventPhases.done:
myPhaseName = "Done";
break;
case EventPhases.notDispatching:
myPhaseName = "Not Dispatching";
break;
}
return myPhaseName;
}
*/
