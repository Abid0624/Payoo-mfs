
// Step -1 :set the event handler
document.getElementById('btn-login').addEventListener('click',function(event){

  // Step -2: Prevent default behavior (prevent reloading page)
  event.preventDefault();
  console.log('login button clicked')

  // Step -3:get the phone number
  const phoneNumber = document.getElementById('phone-number').value
  console.log(phoneNumber)

})