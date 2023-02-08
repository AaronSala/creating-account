var form=document.getElementById('valid');
var name=document.getElementById('fname');
 var pass1=document.getElementById('password');
 var pass2=document.getElementById('password');
var email=document.getElementById('email');
var name2=document.getElementById('onames');
 var button=document.getElementById('button') ;
 const errorElement=document.getElementById('error');
 form.addEventListener('submit',(e)=>{
   e.preventDefault();
   checkInputs();
 })
 function checkInputs(){
   const namevalue = fname.value.trim();
   const emailvalue=email.value.trim();
   const pass1value=pass.value.trim();
   const pass2value=pass2.value.trim();
   const name2value=name2.value.trim();

   if(name===''){
  //error
  setErorfor(name,'name cant be empty');
   }
   else{
        setsuccessFor(name);
   }
 }
 function setErrorFor(input, message){
   const formControl=input.parentElement;
   const small=formControl.querySelector('small');
   small.innerText=message;
   formControl.className='form-control error';
 }


