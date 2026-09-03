// ATM Transaction 
// Create variables: 
// balance 
// withdrawAmount 
// Check: 
// 1. Withdrawal amount must be greater than 0. 
// 2. Withdrawal amount must not be greater than the balance. 
// 3. If valid, subtract the withdrawal amount. 
// 4. Display the remaining balance.


let balance = 50000;
let withdrawAmount = 100;  //Withdrawal amount must be greater than 0. 

console.log("Balance  : "+balance);
console.log("Withdraw : "+withdrawAmount);
console.log("");

if (withdrawAmount > 0) {
    console.log("withrawal successful");
    console.log("Remaining balance: " ,balance - withdrawAmount);
} else {
    console.error("invali value of withraw amount please enter more than 0 ")

}
