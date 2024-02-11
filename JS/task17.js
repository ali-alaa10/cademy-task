let str = "Cademy";
let count = 7;
let separator = "_";
let output = "";


for (let i = 0; i < count; i++) {
  output += str;
  if (i < count - 1) {
    output += separator;
  }
}

console.log(output);

// Sec

let nstr = str.padStart(48, `${str}_`);

console.log(nstr);
