var testFolder = './data';
var fs = require('fs');
console.log(testFolder);
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
