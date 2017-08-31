main();

function main() {
	if (app.documents.length == 0) {
		alert("Please open a document.");
		return;
	}

	//Make certain that user interaction (display of dialogs, etc.) is turned on.
	app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;
	var doc = app.activeDocument;
	doc.saveACopy("D:\\" + doc.name);
}
