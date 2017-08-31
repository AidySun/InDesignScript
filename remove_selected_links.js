if (app.documents.length == 0) {
	alert("No documents are  open. Please open a document and try again.");
} else {
	var doc = app.activeDocument;
	var links = doc.links;
    
    var len = app.selection.length;
    alert(len);

}