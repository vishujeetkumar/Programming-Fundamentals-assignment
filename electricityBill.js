const unit = 250;

let charge = 0;

if(unit <=100){
    charge =  100 * 5;
}else if (unit <=200){
    charge = 100 * 5 + (unit-100) * 7;
} else {
    charge = 100 * 5 + 100 * 7 + (unit - 200) * 10;
}
console.log("======================");
console.log("  Electricity Bill    ");
console.log("----------------------");
console.log("  Total Bill: " +charge);
console.log("======================");