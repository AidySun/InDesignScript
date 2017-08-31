
main();
function main(){
	//Make certain that user interaction (display of dialogs, etc.) is turned on.
	app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;
    
    if (app.documents.length != 0){
		if (app.selection.length == 1){
				switch (app.selection[0].constructor.name){					
					case "InsertionPoint":
					case "TextFrame":
					case "Text":
                      case "Character":
						myDisplayDialog();	
						break;
					default:
						alert("unsupported item selected. constructor.name = " + app.selection[0].constructor.name);
						break;						
				}					
		}
		else{
			alert ("Please select an object and try again.");
		}
	}
	else{
 	   alert ("Please open a document, select an object, and try again.");
	}
}

function myDisplayDialog() {	
	var myDialog = app.dialogs.add({
			name : "Move Cursor to Text Story"
		});
	with (myDialog) {
		with (dialogColumns.add()) {
			with (borderPanels.add()) {
				with (dialogColumns.add()) {                    
					staticTexts.add({
						staticLabel : "Index of insertion point:"
					});
				}
				with (dialogColumns.add()) {					
                    newIndex = integerEditboxes.add({
							editValue : 0
						});
				}
			}		
			
		}
	}

	myReturn = myDialog.show();
	if (myReturn == true) {
            app.select(app.selection[0].parentStory.insertionPoints.item(Number(newIndex.editValue)));
	}
	//Remove the dialog box from memory.
	myDialog.destroy();

}