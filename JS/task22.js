function countTrue(arr) {
  return arr.filter((arr) => arr === true).length;
}

console.log(countTrue([true, false, true, true, false, false, true, false]));
console.log(countTrue([true, false, true, false]));
console.log(countTrue([]));
