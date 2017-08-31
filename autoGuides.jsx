// select one frame to draw guide line


main();
function main(){
	//Make certain that user interaction (display of dialogs, etc.) is turned on.
	app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;
	var myObjectList = new Array;
	if (app.documents.length != 0){
		if (app.selection.length == 1){
			for(var myCounter = 0;myCounter < app.selection.length; myCounter++){
				switch (app.selection[myCounter].constructor.name){
					case "Rectangle":
					case "Oval":
					case "Polygon":
					case "TextFrame":
					case "Group":
					case "Button":
					case "GraphicLine":
						myObjectList.push(app.selection[myCounter]);
						break;
				}
			}
			if (myObjectList.length != 0){
				var myOldXUnits = app.documents.item(0).viewPreferences.horizontalMeasurementUnits;
				var myOldYUnits = app.documents.item(0).viewPreferences.verticalMeasurementUnits;
				app.documents.item(0).viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;
				app.documents.item(0).viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;
				doDraw(myObjectList);
				//Comment out the previous line and uncomment the following line to use a ScriptUI dialog.
				//myDisplayScriptUIDialog(myObjectList);
				app.documents.item(0).viewPreferences.horizontalMeasurementUnits = myOldXUnits;
				app.documents.item(0).viewPreferences.verticalMeasurementUnits = myOldYUnits;
			}
			else{
				alert ("Please select a page item and try again.");
			}
		}
		else{
			alert ("Please select one object and try again.");
		}
	}
	else{
 	   alert ("Please open a document, select an object, and try again.");
	}
}

function doDraw(myObjectList) {
	var myLayer, myCounter;
	var myOldRulerOrigin = app.activeDocument.viewPreferences.rulerOrigin;
	app.activeDocument.viewPreferences.rulerOrigin = RulerOrigin.spineOrigin;
	//Create a layer to hold the printers marks (if it does not already exist).
	myLayer = app.activeDocument.layers.item("Guides");
	try{
		myLayerName = myLayer.name;
	}
	catch (myError){
		myLayer = app.activeDocument.layers.add({name:"Guides"});
	}
	//Process the objects in the selection.		
	for(myCounter = 0; myCounter < myObjectList.length; myCounter ++){
		var myObject = myObjectList[myCounter];
		myBounds = myObject.geometricBounds;
		//Draw guides at path point locations, if necessary.
		//Set up some initial bounding box values.
		myX1 = myBounds[1];
		myY1 = myBounds[0];
		myX2 = myBounds[3];
		myY2 = myBounds[2];
		drawGuideLines (myBounds[1], myBounds[0], myBounds[3], myBounds[2]);
		
	}
	app.activeDocument.viewPreferences.rulerOrigin = myOldRulerOrigin;
}

function drawGuideLines(myX1, myY1, myX2, myY2){

	var max = 20;
	
	// draw center
	drawGuideLine(myX1+((myX2-myX1)/2), 1);
	drawGuideLine(myY1+((myY2-myY1)/2), 0);
	
	// draw horizontal
	var spaceH = (myX2 - myX1) / 2
	
	for (var i = 1; i < max; i++) {
		// right
		var pos = myX1 + i * spaceH;
		drawGuideLine(pos, 1)
		
		//left
		var pos = myX1 - (i -1) * spaceH;
		if (pos > 0) {
			drawGuideLine(pos, 1);
		}
	}
	
	// draw vertical
	var spaceV = (myY2 - myY1) / 2
	for (var i = 1; i < max; i++) {
		// bottom
		var pos = myY1 + i * spaceV;
		drawGuideLine(pos, 0)
		
		// top
		var pos = myY1 - (i - 1) * spaceV;
		if (pos > 0) {
			drawGuideLine(pos, 0);
		}
	}
}
function drawGuideLine(myGuideLocation, myGuideOrientation){
	var myLayer = app.activeDocument.layers.item("Guides");
	with(app.activeWindow.activeSpread){
		if(myGuideOrientation == 0){
			with (guides.add(myLayer, undefined, undefined)){
				orientation=HorizontalOrVertical.horizontal;
				location=myGuideLocation;
			}
		}
		else{
			with (guides.add(myLayer, undefined, undefined)){
				orientation=HorizontalOrVertical.vertical;
				location=myGuideLocation;
			}
		}
	}
}
