// const form=document.getElementById('form');
// const userName=document.getElementById('user');
// const email=document.getElementById('email');
// const password=document.getElementById('pass');
// const pass2=document.getElementById('pass2');
// form.addEventListener('submit', e=>{
//         e.preventDefault();
//         validateInputs();
// });

// const setError = (element, message)=>{
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText=message;
//     inputControl.classlist.add('error');
//     inputControl.classlist.remove('success');
// }
// const setSuccess = element=>{
//     errorDisplay.innertext = '';
//     inputControl.classlist.add('success');
//     inputControl.classlist.remove('error');
// };

// const validateInputs = () =>{
// const userValue=user.value.trim();
// const emailValue=email.value.trim();
// const passValue=pass.value.trim();
// const pass2Value=pass2.value.trim();
// if(username ===''){
//     setError(username, 'username is required');
// }else{
// setSuccess(user);
// }
// if(emailValue ===''){
//     setError(email, 'email is required')
// }

// };
const myForm=document.forms.form;
const button= document.getElementById('button');
const name=document.getElementById('user');
function validateForm() {
    let x = document.forms["form"]["user"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  myForm.button.onclick()
  if(myForm.user.value==""){
    alert('user must be filled');
  }
  

  