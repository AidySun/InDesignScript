try {
	if (app.activeDocument) {
		app.activeDocument.layers.everyItem().locked = false;
		app.activeDocument.pageItems.everyItem().locked = false;
	}
} catch (err) {
}
alert("Done!");