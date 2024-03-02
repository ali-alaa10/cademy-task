let All = document.getElementById("all");
let Done = document.getElementById("done");
let Pending = document.getElementById("pending");

let counter = 0;

function createTask() {
  let input = document.getElementById("taskInput");
  let TaskTxt = input.value;

  if (TaskTxt.length === 0 || TaskTxt.length < 10) {
    alert(`Please put your task and Must'n be less 10 char`);
    return;
  }

  counter++;

  let Unikey = `Task_${counter}`;
  localStorage.setItem(Unikey, TaskTxt);

  FetchData();

  input.value = "";
}

function FetchData() {
  let TaskUl = document.getElementById("tasks");
  TaskUl.innerHTML = "";

  const tasks = Object.keys(localStorage)
    .filter((key) => key.startsWith("Task_"))
    .sort();

  tasks.forEach((Unikey) => {
    let TaskTxt = localStorage.getItem(Unikey);
    let TaskLi = document.createElement("li");
    TaskLi.textContent = TaskTxt;

    let Del = document.createElement("button");
    Del.textContent = "Del";
    Del.onclick = function () {
      DelKey(Unikey);
    };

    TaskLi.appendChild(Del);
    TaskUl.appendChild(TaskLi);

    TaskLi.onclick = function () {
      TaskLi.classList.toggle("done");
      Unikey = localStorage.setItem(`Task_Done`, TaskTxt);
    };
  });
}

function DelKey(Unikey) {
  localStorage.removeItem(Unikey);
  FetchData();
}

// localStorage.clear();
