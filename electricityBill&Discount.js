// Electricity Bill + Discount

let unit = 200;

let billPerUnit;
if (unit > 0 && unit <= 100) billPerUnit = 5 * unit;
else if (unit >= 101 && unit <= 200) billPerUnit = 500 + (7 * ( unit - 100));
else if (unit > 200) billPerUnit =  1200 +  (10 * (unit - 200));

let discount;
if (billPerUnit >= 2000) discount = billPerUnit * 10/100;
else discount = 0 ;

let finalBill = billPerUnit - discount;
//output

console.log("========================");
console.log("|   Electricity Bill   |");
console.log("========================");
console.log("Units        : "+unit);
console.log("Orignal Bill : "+billPerUnit);
console.log("Discount     : " + (discount === 0 ? "NO Discount" : discount));
console.log("Final Bill   : "+finalBill);


