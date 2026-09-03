let num = -15;

//Whether it is positive, negative or zero 

let poz;
if(num > 0 ) poz = "Postive";
else if ( num = 0) poz = "Zero";
else poz = "Negative";
 
// Whether it is even or odd 
let checkEvenOrOdd = num % 2 

let EO;
if ( checkEvenOrOdd = 0  ) EO = "Even";
else EO = "Odd"

//Whether it is greater than 100, less than 100, or equal to 100

let gle;
if (num > 100) gle = "Greater than 100";
else if (num < 100) gle = "Less than 100";
else gle = "Equal to 100"



//Output 
console.log("=====================");
console.log("    Input Value      ");
console.log("=====================");
console.log("Value : "+num);
console.log("=====================");
console.log(poz);
console.log(EO);
console.log(gle);
console.log("=====================");
