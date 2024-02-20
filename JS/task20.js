const users = [
  "cademy_ali",
  "cademy_zeyad",
  "cademy_palloat",
  "yousef",
  "rawan",
  "omar",
  "kareem",
];
const result = users.filter(FillterUser);

function FillterUser(user) {
  return user.startsWith("cademy_");
}

console.log(result);
