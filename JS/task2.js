let str = "hello from caDEmy YoU arE wELcoMe";

let low = str.toLowerCase();
console.log(low);

str = str.replace('hello from caDEmy YoU arE wELcoMe' ,"cademy")
console.log(str);

let first = str.padStart(str.length+3, "$");
let end = str.padEnd(str.length+3, "$");
console.log(first + end.replace(str,""));
