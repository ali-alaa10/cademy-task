let str = "hello from caDEmy YoU arE wELcoMe";

// let low = str.toLowerCase();
// console.log(low);

// str = str.replace('hello from caDEmy YoU arE wELcoMe' ,"cademy")
// console.log(str);

// let first = str.padStart(str.length+3, "$");
// let end = str.padEnd(str.length+3, "$");
// console.log(first + end.replace(str,""));

let cademy = str.split(" ")[2];
let symbol = 3;
let fchar = cademy[0].toUpperCase();
let rchar = cademy.slice(1).toLowerCase();
let allcademy = fchar + rchar;
let rsymbol = "#".repeat(symbol);
console.log(fchar);
console.log(rchar);
console.log(cademy);
console.log(allcademy);

let nstr = rsymbol + allcademy + rsymbol;
console.log(nstr);
