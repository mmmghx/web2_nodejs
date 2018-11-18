var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); // k8805

var i = 0;
while (i < members.length){
  console.log(members[i]);
  i++;
}

var roles = {
  'programmer' : 'egoging',
  'designer' : 'k8805',
  'manager' : 'hoya'
}
console.log(roles.designer); //k8805
console.log(roles['designer']); //k8805

for(var name in roles){ //name 변수는 아무거나 써줘도됨.
  console.log('object => ', name, ' / value => ', roles[name]);
}
