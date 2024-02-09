const products = ["hp", "mac", "samsung", "oppo", "realme"];
const pricses = [4000, 50000, 30000, 1500, 2000];

const output = [];

for (let i = 0; i < products.length; i++) {
  if (pricses[i] >= 2000 && pricses[i] <= 49000) {
    output.push(products[i], pricses[i]);
  }
}
console.log(output);
