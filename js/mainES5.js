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
    setFields('error');
  });
  userField.addEventListener('click', clearError)

  passwordField.addEventListener('click', clearError)

  modalWindow.addEventListener('click', function(event) {
    event.stopPropagation();
    modalWindow.style.display = 'none';
  });

 //
 function setFields(klass) {
   userField.className = klass;
   passwordField.className = klass;
 }

 function clearError(event) {
   event.stopPropagation();
   setFields('');
 }
});
