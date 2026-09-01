// Student Result
const math = 10;
const hindi = 90;
const english = 90;

//students passed or failed 
let score;
if (math > 40 && hindi > 40 && english > 40) {
    score = "PASS";
} else {
    score = "FAIL"
}

//use formula for calculation

let total = (math + hindi + english);
let average = (total / 3)

//division

let result;

if (average >= 75) {
    result = "Distinction";
} else if (average >= 60) {
    result = "First Division";
} else if (average >= 50) {
    result = "Second Division";
} else {
    result = "PASS";
}

//output
console.log("===============================");
console.log("|| Total   : " + total);
console.log("||-----------------------------");
console.log("|| Average : " + average.toFixed(2));
console.log("||-----------------------------");
console.log("|| Result  : " + score);
if (score === "PASS") {
    console.log("|| Division: " + result);
}
console.log("===============================");



