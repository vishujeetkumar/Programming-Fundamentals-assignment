// Menu-Based Calculator 
let num1 = 50;
let num2 = 10;

let menu = "Addition";
let calculate;
switch (menu) {
    case "Addition":
        calculate = num1 + num2;
        break;
    case "Subtraction":
        calculate = num1 - num2;
        break;
    case "Multiplication":
        calculate = num1 * num2;
        break;
    case "Division":
        calculate = num1 / num2;
        break;
    case "Module":
        calculate = num1 % num2;
        break;
    default:
console.error("Invalid value")
}
console.log(menu);
console.log("Answer : "+calculate);