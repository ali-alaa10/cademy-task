function basicCalc(num_1, num_2, OP) {
  switch (OP) {
    case "+":
      return num_1 + num_2;

    case "-":
      return num_1 - num_2;

    case "*":
      return num_1 * num_2;

    case "/":
      return num_1 / num_2;

    default:
      return num_1 + num_2;
  }
}

console.log(basicCalc(10, 20, "+"));
console.log(basicCalc(10, 20, "-"));
console.log(basicCalc(10, 20, "*"));
console.log(basicCalc(10, 20, "/"));
console.log(basicCalc(10, 20, ""));
