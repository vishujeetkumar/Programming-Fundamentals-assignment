let num = 5;

let Month;
switch (num) {
    case 1:
        Month = "january";
        break;
    case 2:
        Month = "February";
        break;
    case 3:
        Month = "March";
        break;
    case 4:
        Month = "April";
        break;
    case 5:
        Month = "May";
        break;
    case 6:
        Month = "June";
        break;
    case 7:
        Month = "July";
        break;
    case 8:
        Month = "August";
        break;
    case 9:
        Month = "September";
        break;
    case 10:
        Month = "October";
        break;
    case 11:
        Month = "November";
        break;
    case 12:
        Month = "December";
        break;
    default:
        console.error("Invalid Input : Please Enter value between 1 to 12")

}

console.log("=====================");
console.log("      Output         ");
console.log("=====================");
console.log(" Month: " + Month);