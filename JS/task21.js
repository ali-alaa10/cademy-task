function Salaries(...Sal) {
  for (let i = 0; i < Sal.length; i++) {
    if (Sal[i] < 4000) {
      Sal[i] += 550;
    }
    if (Sal[i] >= 4000) {
      Sal[i] -= 200;
    }
  }
  return `The Final Salary is : ${Sal}`;
}

console.log(Salaries(1000, 2000, 3000, 4000, 5000, 6000, 1500, 77777));

// 2

function F_salaries(...f_sal) {
  const Salary = f_sal.map((salary) => {
    if (salary < 4000) {
      return (salary += 550);
    } else {
      return (salary -= 200);
    }
  });
  console.log(`The Final Salary is : ${Salary}`);
}

F_salaries(1000, 2000, 3000, 4000, 5000, 6000, 1500, 77777);

// 3 map

const FSalaries = [1000, 2000, 3000, 4000, 5000, 6000, 1500, 77777];
const f_salaries = FSalaries.map((salary) => {
  if (salary < 4000) {
    return (salary += 550);
  } else {
    return (salary -= 200);
  }
});

console.log(`The Final Salary is : ${f_salaries}`);

// 4 forEach

function A_salary(...sal) {
  const arr = [];

  sal.forEach((salr) => {
    if (salr < 4000) {
      arr.push(salr + 550);
    } else {
      arr.push(salr - 200);
    }
  });
  console.log(`The Final Salary is : ${arr}`);
}

A_salary(1000, 2000, 3000, 4000, 5000, 6000, 1500, 77777);
