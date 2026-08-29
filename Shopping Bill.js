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

