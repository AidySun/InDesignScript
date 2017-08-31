if (app.documents.length == 0) {
	alert("No documents are  open. Please open a document and try again.");
} else {
	var doc = app.activeDocument;
	var links = doc.links;

	var count = 0;
	for (var i = links.length-1; i>=0; i--) {
		if (links[i].status == LinkStatus.LINK_MISSING) {
			count++;
		}
	}
    
	if(confirm("This action will delete " + count +" missing link(s) from Links panel.\r\nContinue?")) {
		for (var i = links.length-1; i>=0; i--) {
			if (links[i].status == LinkStatus.LINK_MISSING) {
				links[i].parent.remove();
			}
		}
		alert("Finished");
	}
}