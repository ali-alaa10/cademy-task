function OddOrEven(num) {
  if (num === undefined) {
    return "No Number Given";
  }

  let X = Math.trunc(num);

  if (!isNaN(X)) {
    return X % 2 === 0 ? "even" : "odd";
  } else {
    return "Please Use A Number";
  }
}

console.log(OddOrEven(8));
console.log(OddOrEven(7));
console.log(OddOrEven(6.8));
console.log(OddOrEven("7"));
console.log(OddOrEven("Hello"));
console.log(OddOrEven());
