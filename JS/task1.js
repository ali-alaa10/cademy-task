let uname = "Ali";

let first = uname.padStart(uname.length+5, "$");
let end = uname.padEnd(uname.length+5, "$");

console.log(first + end.replace(uname,""));

let str = "hello from caDEmy YoU arE wELcoMe";

let low = str.toLowerCase();
console.log(low);

