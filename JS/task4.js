let str = "Welcome EgyTigers Team To Cademy Platform";

let pos = str.match(/EgyTigers Team/i)["index"];
let len = str.match(/EgyTigers Team/i)[0].length;
// let output = str.slice(pos + len).trim();
// console.log(pos);
// console.log(len);
// console.log(output);
// console.log(pos [0]);
// console.log(str.slice(pos + len));

let tics = `Holla Artist ${str.slice(pos + len).trim()}`;
console.log(tics);
