let input = document.createElement("input");
let btn = document.createElement("button");

input.setAttribute("id", "input_list");
btn.setAttribute("id", "add_list");
let txt = document.createTextNode("ADD");
btn.append(txt);
input.append(btn);

document.body.append(input);
document.body.append(btn);

let todoList = document.createElement("ul");
document.body.append(todoList);

btn.addEventListener("click", () => {
  let todoText = input.value;

  if (!todoText == "") {
    let list_todo = document.createElement("li");
    list_todo.textContent = todoText;

    let del = document.createElement("button");
    let deltxt = document.createTextNode("X");

    del.append(deltxt);
    // document.body.append(del);

    list_todo.append(del);

    list_todo.addEventListener("click", () => {
      list_todo.classList.add("done");
    });

    del.addEventListener("click", () => {
      list_todo.remove();
      del.remove();
    });

    todoList.appendChild(list_todo);
    input.value = "";
  } else {
    alert("Enter your list please");
  }
});
