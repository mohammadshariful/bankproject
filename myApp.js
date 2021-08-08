"use strict";
//logIn Area
document.querySelector("#loginBtn").addEventListener('click',function () {
   document.querySelector("#loginArea").style.display ="none";
   document.querySelector("#transactionArea").style.display ="block";
});
// Deposite
document.querySelector("#addDeposit").addEventListener('click',function () {
    const amountDeposit = document.querySelector("#amountDeposit").value;
    const amountDepositNumber = Number(amountDeposit);

    const currentDeposit = document.querySelector("#currentDeposit").innerText;
    
    const currentDepositNumber = Number(currentDeposit);

    const totalDepositNumber = amountDepositNumber + currentDepositNumber;
    document.querySelector("#currentDeposit").innerText =totalDepositNumber;
    document.querySelector("#amountDeposit").value = "";
    // Balance
    const currentBalance = document.querySelector("#currentBalance").innerText;
    const currentBalanceNumber = Number(currentBalance);
    const totalBalanceNumber = amountDepositNumber + currentBalanceNumber;
    document.querySelector("#currentBalance").innerText = totalBalanceNumber;

});
 

// Withdrow

document.querySelector("#addWithdrow").addEventListener('click',function () {
    const amountWithdrow = document.querySelector("#amountWithdrow").value;
    const amountWithdrowNumber = Number(amountWithdrow);

    const currentWithdrow = document.querySelector("#currentWithdrow").innerText;
    
    const currentWithdrowNumber = Number(currentWithdrow);

    const totalWithdrowNumber = amountWithdrowNumber + currentWithdrowNumber;
    document.querySelector("#currentWithdrow").innerText =totalWithdrowNumber;
    document.querySelector("#amountWithdrow").value = "";
    // Balance
    const currentBalance = document.querySelector("#currentBalance").innerText;
    const currentBalanceNumber = Number(currentBalance);
    const totalBalanceNumber = currentBalanceNumber - amountWithdrowNumber;
    document.querySelector("#currentBalance").innerText = totalBalanceNumber;

});
        
            
