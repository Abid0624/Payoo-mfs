
// Step -1 :set the event handler
document.getElementById('btn-login').addEventListener('click',function(event){

  // Step -2: Prevent default behavior (prevent reloading page)
  event.preventDefault();
  // console.log('login button clicked')

  // Step -3:get the phone number and pin number
  const phoneNumber = document.getElementById('phone-number').value
  const pinNumber = document.getElementById('pin-number').value
  // console.log(phoneNumber,pinNumber);

  // this is temporary and you should not do like this;

  // step -4 :validation phone and pin
  if (phoneNumber === '01799208309' && pinNumber === '1234'){
    console.log('You are logged in');
    window.location.href = '/home.html';
  }
  else{
    alert('Wrong phone number or pin');
  }

})