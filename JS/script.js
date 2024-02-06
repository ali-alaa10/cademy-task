// console.log(
//     '%cWelcome To Egy%cTigers',
//     'color: #a8905d; font-weight: bold; font-size: 45px;',
//     'color: white; font-weight: bold; font-size: 45px;'
// );

// var user ="ALi";
// console.log(user);

// let ali = 5;
// ali++;
// console.log(ali);

// unary plus (+)

// console.log(+1);
// console.log( typeof +1)

// console.log("1");
// console.log(+"1");
// console.log(+"-1");
// console.log(typeof +"1")

// console.log(+true)
// console.log(+false)
// console.log(typeof +false)
// console.log(typeof false)

// console.log(+"ali")
// console.log(+"")
// console.log(typeof +"ali")

// unary mins (-)

// console.log(-1)
// console.log(-"1")
// console.log(-"-1")

// console.log(-true)
// console.log(-false)

// console.log(-"ali")
// console.log(typeof -"ali")

// console.log(true)
// console.log(!true)

// console.log(false)
// console.log(!false)

// (==) -> equal to *value
// (===) -> equal value and equal type
// (!=) -> Not equal
// (!==) -> Not equal value or Not equal type
// (>) -> greater than
// (<) -> less than
// (>=) -> greater than or equal to
// (<=) -> less than or equal to

// console.log(1 == 1)
// console.log('1' == 1)

// console.log('1' === 1)
// console.log('1' === '1')
// console.log(+'1' === 1)

// console.log(10 != 1)
// console.log('10' !== '10')

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 >= 5)
// console.log(10 <= 5)

// unicode
// console.log('5' >= '10')
// console.log('a' >= 'z')
// console.log('z' >= 'a')


// ===========================================


// let uname = "Ali";

// let first = uname.padStart(uname.length+5, "$");
// let end = uname.padEnd(uname.length+5, "$");

// console.log(first + end.replace(uname,""));

// ========================================================================================

// let str = "hello from caDEmy YoU arE wELcoMe";

// let low = str.toLowerCase();
// console.log(low);

// str = str.replace('hello from caDEmy YoU arE wELcoMe' ,"cademy")
// console.log(str);

// let first = str.padStart(str.length+3, "$");
// let end = str.padEnd(str.length+3, "$");
// console.log(first + end.replace(str,""));

// ========================================================================================


// let uname = "Ali";
// let uage = "20";
// let uphone = "01121944524";
// let upoints = 0;

// if (uphone.startsWith("010")) {
//   upoints += 5;
// } else if (uphone.startsWith("011")) {
//   upoints += 50;
// } else if (uphone.startsWith("012")) {
//   upoints += 7;
// } else if (uphone.startsWith("015")) {
//   upoints += 10;
// }

// console.log(`Hi ${uname} You earned ${upoints} points`);

// if (uage >= 18) {
//   console.log(
//     `Holla ${uname} Your Age is ${uage} , You are qualified to travel with us :)`
//   );
// } else {
//   console.log(
//     `Hi ${uname} Your Age is ${uage} , We sorry You are not qualified to travel with us :-(`
//   );
// }

// ===================================================================================================


// let p_name = "Mac Book";
// let p_price = 1500;
// let p_Availability = true;
// let CanBeShipped = true;
// let OrderStatus = 2;

// let orderStatusMessage;
// switch (OrderStatus) {
//     case 0:
//         orderStatusMessage = "Pending";
//         break;
//     case 1:
//         orderStatusMessage = "On Way";
//         break;
//     case 2:
//         orderStatusMessage = "Delivered";
//         break;
//     default:
//         orderStatusMessage = "Not Started";
// }

// if (p_Availability && CanBeShipped) {
//     console.log(`You Can Buy ${p_name}`);
// } else {
//     console.log("Sorry, You Can't Buy It Now");
// }

// console.log(`Order Status: ${orderStatusMessage}`);

// ===================================================================================================

// const users = ["Ali", "Zeyad", "Yousef"];
// users.splice(1, 0, "Palloat");
// console.log(users);

// ===================================================================================================

// const arr1 = ["C", "A", "D"];
// const arr2 = ["E", "M", "Y"];
// const arr3 = ["C", "O", "M"];

// const cademy = arr1.concat(arr2, ".").concat(arr3).join("").toLowerCase();
// console.log(cademy);

// ===================================================================================================

// const arr1 = ["A", "C", "X"];
// const arr2 = ["D", "E", "F", "Y"];
// const allarr = arr2.concat(arr1);

// allarr.sort();
// allarr.shift("A");
// allarr.shift("C");
// allarr.shift("D");
// allarr.shift("F");

// console.log(allarr);

// const output = allarr.join("").toLowerCase();

// console.log(output);

// ===================================================================================================
