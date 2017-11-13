// Add DOMContentLoaded
document.addEventListener("DOMContentLoaded",
 function() {
  signInBtn = document.querySelector('.signin');
  modalWindow = document.querySelector('.modal');
  closeBtn = document.querySelector('.close');
  submitBtn = document.querySelector('.submit');
  userField = document.getElementById('user');
  passwordField = document.getElementById('pass');
 //
  signInBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    modalWindow.style.display = 'block';
  });
  closeBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    modalWindow.style.display = 'none';
  });
  submitBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    userField.className = "error";
    passwordField.className = "error";
  });
  userField.addEventListener('click', function(event) {
    event.stopPropagation();
    userField.className = "";
    passwordField.className = "";

  });
  passwordField.addEventListener('click', function(event) {
    event.stopPropagation();
    userField.className = "";
    passwordField.className = "";
  });
  modalWindow.addEventListener('click', function(event) {
    event.stopPropagation();
    modalWindow.style.display = 'none';
  });
  }
 //
);
