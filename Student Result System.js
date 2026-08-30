
//
let studentName = "VISHUJEET";
let rollNumber  = "001";
let math = 85;
let science = 78;
let english = 92;

//CALCULATE
let Total = (math + science + english);
let percentage = (Total / 3) + "%";

//condition for grade 
let grade;
if (percentage >= 90) grade = "A";
else if (percentage >= 80) grade = "B";
else if (percentage >= 70) grade = "C";
else if (percentage >= 60) grade = "D";
else if (percentage >= 40) grade = "E";
else grade = "F";

//condition for result(pass or fail)
let result;
if (math && science && english >= 40) result = "PASS";
else result = "FAIL";
// for output

console.log("----------------------------------------------");
console.log("            STUDENT RESULT                    ");
console.log("----------------------------------------------");
console.log("                                              ");
console.log("     NAME          :   "+studentName);
console.log("     ROLL NO       :   "+rollNumber);
console.log("                                               ");
console.log("     MATH          :   "+math);
console.log("     SCIENCE       :   "+science);
console.log("     ENGLISH       :   "+english);
console.log("                                               ");
console.log("     TOTAL         :  " + Total);
console.log("     PERCENTAGE    :  " + percentage);
console.log("     GRADE         :  " + grade);
console.log("     RESULT        :  " + result);
console.log("                                               ");
console.log("-----------------------------------------------");


