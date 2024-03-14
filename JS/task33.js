let All = document.getElementById("all");
let Done = document.getElementById("done");
let Pending = document.getElementById("pending");

let input = document.getElementById("taskInput");
let TaskUl = document.getElementById("tasks");

All.innerHTML = Fetched().length;
Done.innerHTML = Fetched().length - Fetched("Pending").length;
Pending.innerHTML = Fetched().length - Fetched("done").length;
let counter = fetchCount() || 0;

function createTask() {
  if (input.value !== "") {
    counter++;
    let Uni_key = `Task_${counter}`;
    let value = input.value;
    localStorage.setItem(Uni_key, value);
    TaskUl.innerHTML += `<li> <span data-key="${Uni_key}">${value}</span> <button class="del">X</button> </li>`;
  } else {
    alert("Please Put Your Tasks :) ");
  }
  input.value = "";
  input.focus();
}

function Fetched() {
  let Obj = Object.entries(localStorage);
  let fet = Obj.filter((value) => {
    let key = value[0];
    // let val = value[1];
    return key.startsWith("Task_");
  }).sort();
  return fet;
}

Fetched();

function Display() {
  let My_Task = Fetched();
  My_Task.forEach((value) => {
    let key = value[0];
    let val = value[1];
    // let class_done = key.includes("_done") ? "class=done" : "";
    TaskUl.innerHTML += `<li> <span data-key="${key}">${val}</span> <button class="del">X</button> </li>`;
  });
}

Display();

document.querySelectorAll(".del").forEach((del) => {
  del.onclick = function () {
    let TaskLi = this.parentNode;
    let key = TaskLi.children[0].getAttribute("data-key");
    localStorage.removeItem(key);
    TaskLi.remove();
  };
});

document.querySelectorAll("span[data-key]").forEach((sp) => {
  sp.onclick = function (e) {
    let old = e.target.getAttribute("data-key");
    if (old.includes("_done")) {
      let New = old.replace("_done", "");
      e.target.classList.remove("done");
      this.setAttribute("data-key", New);
      localStorage.setItem(New, localStorage[old]);
      localStorage.removeItem(old);
    } else {
      let New = old + "_done";
      e.target.classList.add("done");
      this.setAttribute("data-key", New);
      localStorage.setItem(New, localStorage[old]);
      localStorage.removeItem(old);
    }
  };
});

function fetchCount() {
  let ArrLi = Fetched();
  if (ArrLi.length > 0) {
    let LastLi = ArrLi[ArrLi.length - 1];
    let index = LastLi[0];
    let sliced = index.slice(index.indexOf("_") + 1, index.indexOf("_done"));
    console.log(index);
    console.log(sliced);
    return sliced || 0;
  } else {
    return 0;
  }
}

fetchCount();
