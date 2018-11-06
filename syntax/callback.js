/*
function a(){
  console.log('A');
};

a();
*/

var a = function (){
  //이름이 없는 함수, 익명함수
  // 자바스크립트에서는 함수가 값이다! 변수에 저장가능.
  console.log('A');
};

function slowfunc(callback){
   // 엄청 느린기능이라고 치고, 이 함수의 기능이 끝난 후,
   // 다음일을 하세요 하고싶으면 인자로 콜백을 받으면 됨.
  callback();
}

slowfunc(a);
