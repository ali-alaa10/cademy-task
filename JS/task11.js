const f_salary = [];
let total = 0;

const salary = [1500, 2500, 3000, 4700, 7800, 10500];

// First way

for (const i of salary) {
  if (i >= 2500) {
    f_salary.push(i);
    total += i;
  }
}
console.log(f_salary);
console.log(total);

// Second Way

for (const x in salary) {
  if (x >= 2500) {
    f_salary.push(i);
    total += i;
  }
}

console.log(f_salary);
console.log(total);

// Third Way

for (let h = 0; h < salary.length; h++) {
    if(h>=2500){
        f_salary.push(h)
        total +=h
    }
}

console.log(f_salary);
console.log(total);
