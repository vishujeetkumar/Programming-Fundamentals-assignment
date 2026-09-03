//Simple ATM Menu
// 1. Check Balance 
// 2. Deposit Money 
// 3. Withdraw Money 
// 4. Exit 

// console.log("1. Check Balance");
// console.log("2. Deposit Money");
// console.log("3. Withdraw Money");
// console.log("4. Exit");

let Balance = 235;
let WithdrawAmount = 235;
let Deposit = 300;
let choice = 3;

switch (choice) {
    case 1:
        console.log("Currrent Balance :", Balance);
        break;
    case 2:
        if (Deposit > 0) {
            Balance += Deposit;
            console.log("Money deposited Successfully");
            console.log("New Balance ", Balance);
        } else {
            console.log("Invalid Deposit Amount");
        }
        break;
    case 3:
        if (WithdrawAmount <= 0) {
            console.log("Invalid withdraw ammount");
        } else if (WithdrawAmount > Balance) {
            console.log("Insufficent Balance");
        } else {
            let remaining = Balance - WithdrawAmount;
            console.log("Withdraw money successfully");
            console.log("Remaing Amount ", remaining);
        }
        break;
    case 4:
        console.log("Thanks for using ATM");
        break;
    default:
        console.log("invalid choice");
}
