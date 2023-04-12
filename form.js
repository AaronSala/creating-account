var first=document.forms['form'] ['first'];
var button = document.getElementById('register');
var first=document.getElementById('first');
// var error= document.getElementsByClassName('error');
// var form=document.querySelector('form')

//first.addEventListener('textInput', first_Verify);
//input.addEventListener('input', valid())
 function valid(){
   if(first.value ==""){
    alert('fill me');
    console.log('clicked')
    return false;
   }
}
