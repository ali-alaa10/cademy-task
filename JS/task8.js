const arr1 = ["A", "C", "X"];
const arr2 = ["D", "E", "F", "Y"];
const allarr = arr2.concat(arr1);

allarr.sort();
allarr.shift("A");
allarr.shift("C");
allarr.shift("D");
allarr.shift("F");

console.log(allarr);

const output = allarr.join("").toLowerCase();

console.log(output);
