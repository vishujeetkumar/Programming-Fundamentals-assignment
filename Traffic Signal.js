let color = "red";

let signal;
switch (color) {
    case "red":
        signal = "STOP❤️";
        break;
    case "yellow":
        signal = "Wait💛";
        break;
    case "green":
        signal = "Go💚";
        break;
        default:
            console.error("Invalid Input")

}
console.log("======================");
console.log("       Input Color    ");
console.log("======================");
console.log("Color         : "+color);
console.log("======================");
console.log("        Output        ");
console.log("======================");
console.log("Traffic signal :"+signal);
console.log("======================");