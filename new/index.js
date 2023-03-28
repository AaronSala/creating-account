form= document.forms.form;
var nameError = document.getElementById('usererror');
var passError = document.getElementById('passerror');


user.addEventListener= ('textInput', validated);
pass.addEventListener= ('textInput', validated);


function validated(){
    var name = document.getElementById('user');
if(name.value == ""){
    
   nameError.innerHTML= 'Name cant b empty';
   user.style.border='1px solid red';
   usererror.style.display='block';
   return false
    
}
else{
    name.style.border='3px solid green';
    
    usererror.style.display='none';
    return true;
}
}

var pass = document.getElementById('pass');
if(pass.value == ""){
    
   passError.innerHTML= 'Name cant be empty';
   pass.style.border='1px solid red';
   passError.style.display='block';
   return false
    
}
else{
    pass.style.border='3px solid green';
    
    passError.style.display='none';
    return true;
}



