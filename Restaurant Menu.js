//Restaurant Menu 

let itemName = "Burger";
let qty = 5;

let itemPrice;
switch (itemName) {
    case "Burger":
        itemPrice = 150;
        break;
    case "Pizza":
        itemPrice = 250;
        break;
    case "Pasta":
        itemPrice = 180;
        break;
    case "Sandwitch":
        itemPrice = 120;
        break;
    default:
        console.error("Invalid item name")
}

let totalPrice = qty * itemPrice;

//output
console.log("Item Name : "+itemName);
console.log("Quantity  : "+qty);
console.log("Item Price: "+itemPrice);
console.log("");
console.log("Total     : "+totalPrice);
