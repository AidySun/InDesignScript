function writeToFile(text) {
    file = new File("/C/Users/Public/p.txt");
    file.encoding = "UTF-8";
    file.open("w");
    file.writeln(text); 
    file.close();
}