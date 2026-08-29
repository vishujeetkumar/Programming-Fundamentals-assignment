//basic calculator
// Calculate and display:
// ● Addition
// ● Subtraction
// ● Multiplication
// ● Division
// ● Remainder


let num1 = 10;
let num2 = 25;

console.log(num1 + num2);
console.log(num2 - num1);
console.log(num1 * num2);
console.log(num2 / num1);
console.log(num2 % num1);


//Swap Two Numbers
let a = 10
let b = 20

console.log("before swapping");
console.log("a = " + a);
console.log("b = " + b);

let temp = a;
a = b;
b = temp;
console.log("after swapping");
console.log("a = " + a);
console.log("b = " + b);

// student marks

let math = 85;
let Hindi = 98;
let IT = 75;


console.log("     STUDENTS MARKS");
console.log("STUDENT's Name: Vishujeet");
console.log("---------------------------");
console.log("SUBJECT    FM    OM ");
console.log("MATH       100   "    +math);
console.log("HINDI      100   "    +Hindi);
console.log("IT         100   " + IT);
console.log("---------------------------");
//Formula use 

let Total = math + Hindi + IT;
let average =   Total / 3 ;
let percentage = (Total / 300) * 100;
 
console.log("Total      300   "+ Total);
console.log("AVERAGE:   " +average);
console.log("PERCENTAGE:" + percentage +"%");


//shopping bill
// list of product price
let Laptop = 60000;
let Keyboard = 1500;
let Mouse  = 800;
let Earbud = 2500;

//apply discount 

let discountedPriceOfLaptop = (Laptop*10/100);
let discountedPriceOfKeyboard = (Keyboard*10/100);
let discountedPriceOfMouse = (Mouse*10/100);
let discountedPriceOfEarbud = (Earbud*10/100);

//Quantities
let qtyLaptop = 1;
let qtyKeyboard = 5;
let qtyMouse = 4;
let qtyEarbud =3;

//Totals after applied discount
let totalLaptop = (Laptop - discountedPriceOfLaptop) * qtyLaptop;
let totalKeyboard = (Keyboard - discountedPriceOfKeyboard) * qtyKeyboard;
let totalMouse = (Mouse - discountedPriceOfMouse) * qtyMouse;
let totalEarbud = (Earbud - discountedPriceOfEarbud) * qtyEarbud;

//output

console.log("----------------------------------------");
console.log("             Shopping Bill              ");
console.log("----------------------------------------");
console.log("Product | Price | Discount | Qty | Total");
console.log("----------------------------------------");

console.log(`Laptop  | ${Laptop}  |   ${discountedPriceOfLaptop}   |  ${qtyLaptop}  | ${totalLaptop}`);
console.log(`Keyboard| ${Keyboard}   |   ${discountedPriceOfKeyboard}    |  ${qtyKeyboard}  | ${totalKeyboard}`);   
console.log(`Mouse   | ${Mouse}    |   ${discountedPriceOfMouse}     |  ${qtyMouse}  | ${totalMouse}`)
console.log(`Earbud  | ${Earbud}   |   ${discountedPriceOfEarbud}    |  ${qtyEarbud}  | ${totalEarbud}`);

//Area Calculator
//Area calculator

//lenght & width 
let lenght = 15;
let width = 20;

// formula use 

let areaOfRectangle = (lenght * width);
let perimeterOfRectangle = 2 * (lenght + width);

//output
console.log("-------------------------");
console.log("Area of Rectangle");
console.log("-------------------------");
console.log(   areaOfRectangle);
console.log("-------------------------");
console.log("Perimeter of rectangle");
console.log("-------------------------");
console.log(perimeterOfRectangle);


