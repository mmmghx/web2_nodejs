var fs = require('fs');

//readfileSync
/*
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');

// 결과 : A B C

*/

//readfileAsync

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err,result){
  console.log(result);
}); //파일을 읽는 작업이 끝나면, 첫번째 인자에는 에러를, 두번째 파라메터에는 파일의 내용을.
console.log('C');

// 결과 : A C B
