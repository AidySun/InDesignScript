
var doc = app.activeDocument;
var layer= doc.activeLayer;
var xpressoLayer = doc.layers.itemByName("xPresso System Layer");

layer.merge(xpressoLayer);