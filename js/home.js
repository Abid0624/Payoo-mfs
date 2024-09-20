// add money to the account
/**
 * S-1 : add event handler,prevent page reload after form submit
 * S-2 : get money to be added to the account balance
 * S-3 : get the pin number
 * 
 **/ 



// Step - 1
document.getElementById('btn-add-money').addEventListener('click',function(event){
  // prevent page reload after page reload
  event.preventDefault();

  // Step - 2
  const addMoneyInput = document.getElementById('input-add-money').value
  console.log(addMoneyInput);

  // Step - 3
  const pinNumber = document.getElementById('pin-number').value
  console.log(pinNumber);
})