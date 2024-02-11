const nums = [2, -5, 4, -7, -8, -20, 14, 2, 10, 15, 30];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    sum += nums[i];
  }
}
console.log(sum);
