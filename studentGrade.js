const percentage = 80;
let grade;
if (percentage > 90){
    grade = "A";
} else if (percentage > 80){
    grade = "B";
} else if (percentage > 70){
    grade = "C";
} else if (percentage > 60){
    grade = "D";
} else if (percentage > 40){
    grade = "E";
} else {
    grade = "F";
}

console.log("Your grade is: " + grade);
