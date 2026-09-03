let num1 = 5;
let num2 = 10;
let operator = "*";

let Calucate;
switch (operator) {
    case "+":
        Calucate = num1 + num2;
        break;
    case "-":
        Calucate = num1 + num2;
        break;
    case "*":
        Calucate = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            calculate = num1 / num2;
        } else {
            console.error("Error: Division by zero");
            calculate = null;
        }
        break;
    case "%":
        Calucate = num1 % num2;
        break;
    case "**":
        Calucate = num1 ** num2;
        break;
    default:
        console.error("Invalid operator")
        Calucate = nyll;
}

console.log("======================");
console.log("         INPUT        ");
console.log("======================");
console.log(" First Number  : "+num1);
console.log(" second Number : "+num2);
console.log(" Operator      : "+operator);
console.log("======================");
console.log("        OUTPUT        ");
console.log("======================");
console.log("    ANSWER     : " +Calucate);
console.log("======================");
