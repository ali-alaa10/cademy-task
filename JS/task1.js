let uname = "Ali";

// let first = uname.padStart(uname.length+5, "$");
// let end = uname.padEnd(uname.length+5, "$");

// console.log(first + end.replace(uname,""));

let cademy = uname[0].toUpperCase() + uname.slice(1).toLowerCase();

let output = cademy
  .padStart(cademy.length + 5, "$")
  .padEnd(cademy.length + 10, "$");

console.log(output);
