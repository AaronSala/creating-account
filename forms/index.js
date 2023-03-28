const form = document.getElementById('loginForm');
const error = document.getElementById('error');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  
  if (username.value=="") {
    error.textContent = "Please enter username .";
    return;
  }
  if (password.value=="") {
    error.textContent = "Please enter passwowrd.";
    return;
  }
  
  
//   if (!isValidEmail(username) || !isValidPassword(password)) {
//     error.textContent = "Please enter valid email and password.";
//     return;
//   }
  
//   // submit the form if everything is fine
//   form.submit();
// });

// function isValidEmail(email) {
//   // check if email is in correct format
//   const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   return pattern.test(email);
// }

// function isValidPassword(password) {
//   // check if password is at least 8 characters long
//   return password.length >= 8;
// }
});