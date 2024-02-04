let uname = "Ali";
let uage = "20";
let uphone = "01121944524";
let upoints = 0;

if (uphone.length == 11) {
  console.log("valid");
} else {
  console.log("Not valid");
}

if (uphone.startsWith("010")) {
  upoints += 5;
} else if (uphone.startsWith("011")) {
  upoints += 50;
} else if (uphone.startsWith("012")) {
  upoints += 7;
} else if (uphone.startsWith("015")) {
  upoints += 10;
}

console.log(`Hi ${uname} You earned ${upoints} points`);

if (uage >= 18) {
  console.log(
    `Holla ${uname} Your Age is ${uage} , You are qualified to travel with us :)`
  );
} else {
  console.log(
    `Hi ${uname} Your Age is ${uage} , We sorry You are not qualified to travel with us :-(`
  );
}
