var myFolder = Folder(Folder.userData.toString() + "/Adobe/InDesign/Version 12.0/en_GB/Scripts/Scripts Panel/myJS/");

var myFileList = myFolder.getFiles("*.jsx");
var all = "";
for (var i = 0; i < myFileList.length; i++) {
    var myFile = myFileList[i];

    all += myFile.name + "\n";
    if (myFile instanceof File && myFile.name.match(/\.jsx$/i)) {
        //app.open(myFile);

    }

}
alert(all);