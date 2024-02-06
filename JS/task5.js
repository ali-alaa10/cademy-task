let p_name = "Mac Book";
let p_price = 1500;
let p_Availability = true;
let CanBeShipped = true;
let OrderStatus = 2;

let orderStatusMessage;
switch (OrderStatus) {
  case 0:
    orderStatusMessage = "Pending";
    break;
  case 1:
    orderStatusMessage = "On Way";
    break;
  case 2:
    orderStatusMessage = "Delivered";
    break;
  default:
    orderStatusMessage = "Not Started";
    break;
}

if (p_Availability && CanBeShipped) {
  console.log(`You Can Buy ${p_name}`);
} else {
  console.log("Sorry, You Can't Buy It Now");
}

console.log(`Order Status: ${orderStatusMessage}`);
