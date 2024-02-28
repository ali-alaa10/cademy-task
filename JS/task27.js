const top_legends = new Map([
  ["Zeyad", 10000],

  ["Ali", 9000],

  ["Yousef", "00000"],

  ["Kareem", "00000"],
]);

let ul_user = document.createElement("ul");

top_legends.forEach((point, person) => {
  let list_user = document.createElement("li");
  list_user.textContent = person;

  list_user.addEventListener("click", () => {
    alert(`${person} and his point is : ${point}`);
  });
  ul_user.appendChild(list_user);
});

document.body.appendChild(ul_user);
