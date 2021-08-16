document.getElementById("submit-btn").addEventListener('click', function(){
  const input = document.getElementById("deposit-input")
  const inputValue = input.value;
  const inputtotal = parseFloat(inputValue);

  // 2
  const depositinput =document.getElementById("frist-deposit");
  const depositValue = depositinput.innerText;
  const deposittotal = parseFloat(depositValue);
  depositinput.innerText = deposittotal + inputtotal;

  // 3
  const BalanceInput = document.getElementById('Balance');
  const BalanceValue = BalanceInput.innerText;
  const BalanceTotal = parseFloat(BalanceValue);
  BalanceInput.innerText = BalanceTotal + inputtotal;
  // 
  input.value ='';

})