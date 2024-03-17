// deposit

document.getElementById('btn-deposit').addEventListener('click', function(){
   const depositFiled = document.getElementById('deposit-filed');
   const depositAmount = depositFiled.value;
   const newdepositAmount = parseFloat(depositAmount);

   depositFiled.value = '';
   
   if(isNaN(newdepositAmount)){
    alert('please provide a valid number');
    return;
  }

   
   const depositTotalElement = document.getElementById('deposit-amount')
   const depositTotalString = depositTotalElement.innerText;
   const prevDepositTotal = parseFloat(depositTotalString);

   const currentDepositTotal = newdepositAmount + prevDepositTotal;
   depositTotalElement.innerText = currentDepositTotal;


   const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  balanceTotalElement.innerText = previousBalanceTotal  + currentDepositTotal;

})