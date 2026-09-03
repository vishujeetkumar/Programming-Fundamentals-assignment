//Movie Ticket System

let age = 25;
let numberOfTicket = 3;

//find price on the basics of age 

let price;
if (age < 12) price = 100;
else if (age > 12 && age < 59) price = 200;
else price = 120;

// calulate ticket price 
let TicketPrice = price * numberOfTicket ;

//output 

console.log("==========================");
console.log("     Vasmu cinema hall    ");
console.log("--------------------------");
console.log("      Ticket Invoice      ");
console.log("==========================");
console.log("AGE    : "+age);
console.log("TICKET : "+numberOfTicket);
console.log("Price  : ₹"+price);
console.log("");
console.log("Total  : ₹"+TicketPrice);
console.log("=========================");
