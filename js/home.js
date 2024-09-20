// add money to the account
/**
 * S-1 : add event handler,prevent page reload after form submit
 * S-2 : get money to be added to the account balance and get the pin number
 * S-3 : verify the pin number
 * S-4 : get the current balance
 * S-5 : add addMoneyInput to the balance
 * S-6 : update the balance in the dom
 **/ 



// Step - 1
document.getElementById('btn-add-money').addEventListener('click',function(event){
  // prevent page reload after page reload
  event.preventDefault();

  // Step - 2
  const addMoneyInput = document.getElementById('input-add-money').value
  // console.log(typeof addMoneyInput);

  // get the pin number
  const pinNumber = document.getElementById('pin-number').value
  // console.log(pinNumber);

  // Step - 3 (wrong way to check pin number)
  if (pinNumber === '1234'){
    console.log('adding money to your account')
    // Step - 4
    const balance = document.getElementById('balance').innerText
    // console.log(typeof balance);
    // Step - 5
   const addMoneyNumber = parseFloat(addMoneyInput);
   const balanceNumber = parseFloat(balance);
   const newBalance = addMoneyNumber + balanceNumber;
   console.log(newBalance);
  // Step - 6
  document.getElementById('balance').innerText = newBalance;

  }
  else{
    alert('Failed to add money!Please try again');
  }




})