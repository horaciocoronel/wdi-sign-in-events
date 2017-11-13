// Add DOMContentLoaded
document.addEventListener("DOMContentLoaded",
 function() {
  signInBtn = document.querySelector('.signin');
  modalWindow = document.querySelector('.modal');
  closeBtn = document.querySelector('.close');
  submitBtn = document.querySelector('.submit');
 //
  signInBtn.addEventListener('click', function() {
    modalWindow.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
  modalWindow.style.display = 'none';
});

  }
 //
);
