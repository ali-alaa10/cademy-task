let age_from = document.getElementById("from");
let age_to = document.getElementById("to");
let output = document.getElementById("content");
let out_2 = document.getElementById("out");

function CalcAge() {
  let from = age_from.value;
  let F_User = new Date(from).getTime();
  console.log(F_User);

  let to = age_to.value;
  let T_User = new Date(to).getTime();
  console.log(T_User);

  let Diff = Math.abs(T_User - F_User);
  console.log(Diff);

  const day = Math.trunc((Diff / (1000 * 60 * 60 * 24)) % 30);
  const month = Math.trunc((Diff / (1000 * 60 * 60 * 24 * 30)) % 12);
  const year = Math.trunc(Diff / (1000 * 60 * 60 * 24 * 30 * 12));

  output.style.visibility = "visible";

  out_2.innerHTML = `Age:
  ${year} years ${month} months ${day} days <br>
  or ${Math.trunc(Diff / (1000 * 60 * 60 * 24 * 30))} months ${day} days <br>
  or ${Math.trunc(Diff / (1000 * 60 * 60 * 24 * 7))} weeks ${day % 7} days <br>
  or ${Math.trunc(Diff / (1000 * 60 * 60 * 24))} days <br>
  or ${Math.trunc(Diff / (1000 * 60 * 60))} hours <br>
  or ${Math.trunc(Diff / (1000 * 60))} minutes <br>
  or ${Math.trunc(Diff / 1000)} seconds `;
}
