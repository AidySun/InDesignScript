removeInvalidLinksFromActiveDocument();
function removeInvalidLinksFromActiveDocument() {
	if (app.documents.length == 0) {
		alert("No document opened.");
	} else {
		if (confirm("This action will delete all link(s) not in layout from Links panel.\r\nContinue?")) {

			var start = new Date();
			var doc = app.activeDocument;			
			var length = doc.links.length;
			var count = 0;
			
			for (var i = length - 1; i >= 0; i--) {
				var link = doc.links[i];
				if (null == link.parent.parentPage) {
					link.parent.remove();
					count++;
				}
			}
			
			var end = new Date();
			var diff = end.getTime() - start.getTime();

			alert("Removed " + count + " link(s) in " + ((diff / 1000) | 0) + " seconds.");
		}
	}
}