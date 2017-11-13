// Add DOMContentLoaded
document.addEventListener("DOMContentLoaded",
 function() {
  signInBtn = document.querySelector('.signin')
  modalWindow = document.querySelector('.modal')
  closeBtn = document.querySelector('.close')
  submitBtn = document.querySelector('.submit')
 //
  signInBtn.addEventListener('click', event => {
    event.stopPropagation()
    modalWindow.style.display = 'block'
  })
  closeBtn.addEventListener('click', closeWindow)
  submitBtn.addEventListener('click', event => {
    event.stopPropagation()
    setFields('error')
  })
  user.addEventListener('click', clearError)

  pass.addEventListener('click', clearError)

  modalWindow.addEventListener('click', closeWindow)

 // ES6 Declaring functions using fat arrow
 function(a,b) {
   return a+b;
 }
 function(a) {
   return a*a;
 }

 (a,b) => a+b
 a => a*a

 function closeWindow(event) {
   event.stopPropagation()
   modalWindow.style.display = 'none'
 }
//Different option to create a function
  setFields = klass => {
   user.className = klass
   pass.className = klass
 }

 function clearError(event) {
   event.stopPropagation()
   setFields('')
 }
})
