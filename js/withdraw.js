document.getElementById('btn-withdraw').addEventListener('click', function(){
  

  const withdrawFiled = document.getElementById('withdraw-filed');
  const newWithdrawAmountString = withdrawFiled.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  
  withdrawFiled.value = '';

  if(isNaN(newWithdrawAmount)){
    alert('please provide a valid number');
    return;
  }

  
  const withdrawtotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawtotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  
   
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);


  if( newWithdrawAmount > previousBalanceTotal){
    alert('Bank a eto tk nay');
    return;
  }
  
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawtotalElement.innerText = currentWithdrawTotal;

  
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

  
})