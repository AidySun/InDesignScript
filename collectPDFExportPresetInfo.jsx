
main();


function main() {
    var presetNames = getPDFExptPre();
    if(presetNames == "") {
        presetNames = "No PDF Export Presets found.";
        alert(presetNames);
        return;
    } else {
        collectPresetDef();
        alert("C:\\Users\\Public\\PDFExportPreset.txt is ready.");
    }
}

function getFilePath() {
    return "/C/Users/Public/PDFExportPreset.txt";
}

function getPDFExptPre() {
    var str = "";
    for (var i = 0; i < app.pdfExportPresets.length; i++) {
        str += app.pdfExportPresets[i].name + "\n";
    }
    return str;
}

function collectPresetDef() {
    new File(app.pdfExportPresets[0].fullName).copy(getFilePath());

    var file = new File(getFilePath());
    file.encoding = "UTF-8";
    file.open("a");
    file.writeln("\nPresets:\n" + getPDFExptPre());
    file.close();
}
