const users = [
  { username: "admin", password: "admin" },
  { username: "admin", password: "123" },
  { username: "admin", password: "password" },
  { username: "soloLeveling", password: "admin" },
  { username: "soloLeveling", password: "this_isLevel#1" },
  { username: "farestarik", password: "789SD#asd_546" },
];

const output = [];

for (let i = 0; i < users.length; i++) {
  const output2 = users[i];

  if (
    !output2.username.startsWith("admin") &&
    !output2.password.startsWith("admin") &&
    !output2.password.startsWith("123") &&
    !output2.password.startsWith("password")
  ) {
    output.push(output2);
  }
}
console.log(output);
