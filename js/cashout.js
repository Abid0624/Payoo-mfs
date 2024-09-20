
document.getElementById('btn-cash-out').addEventListener('click',function(event){
  event.preventDefault();
  console.log('cash out button clicked');

  const cashOut = document.getElementById('input-cash-out').value 
  const cashOutNumber = parseFloat(cashOut);
  const pinNumber = document.getElementById('cash-out-pin-number').value
  // console.log(cashOut,pinNumber);

  if(pinNumber === '1234'){
    const balance = document.getElementById('balance').innerText
    const balanceNumber = parseFloat(balance);

    // reduce the balance
    const newBalance = balanceNumber - cashOutNumber;

    // Update the UI
    document.getElementById('balance').innerText = newBalance;

  }
  else{
    alert('Failed to cash out!Please try again later')
  }
})