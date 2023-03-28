
const max1=function (n1,n2, n3){
  let max=0;
  if(n1>n2){
    max=n1;
  }
  else {
    max=n2;
  }
  if(n3>max) {
    max=n3 
  }
 

return max;
}

console.log(max1(2223, 1121, 452));
