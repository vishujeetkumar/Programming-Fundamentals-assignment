const salary = 100;
const YearsOfExperience = 2;
let BonusSalary;
if ( YearsOfExperience >= 10){
    BonusSalary = salary * 20/100
} else if (YearsOfExperience >= 5){
    BonusSalary = salary * 10/100
} else if (YearsOfExperience >= 2){
    BonusSalary = salary * 5/100
} else {
    BonusSalary = salary * 0
}

//final salary 

const Bonus = salary + BonusSalary

console.log("==========================");
console.log("Original Salary: "+salary);
console.log("Bonus          : "+BonusSalary);
console.log("Bonus          : "+Bonus);