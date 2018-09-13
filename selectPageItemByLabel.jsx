main();
function main(){
    //Make certain that user interaction (display of dialogs, etc.) is turned on.
    app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;
    if (app.documents.length != 0){
        myDisplayDialog();
    }
    else{
        alert ("Please open a document, select an object, and try again.");
    }
}

function myDisplayDialog() {
    var myDialog = app.dialogs.add({
        name : "Select Page Item By Label"
    });
    with (myDialog) {
        with (dialogColumns.add()) {
            with (borderPanels.add()) {
                with (dialogColumns.add()) {
                    staticTexts.add({
                        staticLabel : "Label:"
                    });
                }
                with (dialogColumns.add()) {
                    nameField = textEditboxes.add({
                        minWidth: 100,
                        editContents : ""
                    });
                }
            }
        }
    }

    myReturn = myDialog.show();
    if (myReturn == true) {
        if(nameField.editContents.length > 0) {
            var items = app.activeDocument.allPageItems;
            for(var i = 0; i < items.length; i++) {
                if(null != items[i].label && items[i].label == nameField.editContents) {
                    items[i].select();
                }
            }
        }
    }
    //Remove the dialog box from memory.
    myDialog.destroy();

}