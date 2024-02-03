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

// let uname = "Ali";

// let first = uname.padStart(uname.length+5, "$");
// let end = uname.padEnd(uname.length+5, "$");

// console.log(first + end.replace(uname,""));



let str = "hello from caDEmy YoU arE wELcoMe";

let low = str.toLowerCase();
console.log(low);

str = str.replace('hello from caDEmy YoU arE wELcoMe' ,"cademy")
console.log(str);

let first = str.padStart(str.length+3, "$");
let end = str.padEnd(str.length+3, "$");
console.log(first + end.replace(str,""));
