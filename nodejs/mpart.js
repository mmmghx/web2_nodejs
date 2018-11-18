var M = {
  v : 'v',
  f : function(){
    console.log(this.v);
  }
}

module.exports = M;
// 모듈이 담겨있는 mpart.js 의 여러 기능들 중에서
// M이 가르키는 객체를 이 모듈 밖에서 사용하도록 export하겠다.
