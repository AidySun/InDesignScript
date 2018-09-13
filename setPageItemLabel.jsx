main();
function main(){
    //Make certain that user interaction (display of dialogs, etc.) is turned on.
    app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;
    if (app.documents.length != 0){
        if (app.selection.length == 1){
            switch (app.selection[0].constructor.name){
                case "Rectangle":
                case "Oval":
                case "Polygon":
                case "TextFrame":
                case "Group":
                    //case "Button":
                    case "GraphicLine":
                    myDisplayDialog();
                    break;
                    default:
                    alert("unsupported item selected. constructor.name = " + app.selection[0].constructor.name);
                    break;
                }
            }
            else{
                alert ("Please select *one* object and try again.");
            }
        }
        else{
            alert ("Please open a document, select an object, and try again.");
        }
    }

    function myDisplayDialog() {
        var myDialog = app.dialogs.add({
            name : "Set Page Item Label"
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
                            editContents : app.selection[0].label
                        });
                    }
                }

            }
        }

        myReturn = myDialog.show();
        if (myReturn == true) {
            app.selection[0].label = nameField.editContents;
        }
    //Remove the dialog box from memory.
    myDialog.destroy();

}