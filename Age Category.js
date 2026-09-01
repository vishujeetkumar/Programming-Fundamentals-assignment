const age = 15;

let AgeCategory;

if (age > 0 && age <= 13) {
  AgeCategory = "Child";
} else if (age > 13 && age <= 19) {
  AgeCategory = "Teenager";
} else if (age > 19 && age <= 60) {
  AgeCategory = "Adult";
} else if (age > 60) {
  AgeCategory = "Senior Citizen";
}
console.log(AgeCategory); // "Teenager"   
