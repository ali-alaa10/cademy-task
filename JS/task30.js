let path = [
  "../cademy-task/Img/js-1.png",
  "../cademy-task/Img/js-2.png",
  "../cademy-task/Img/js-3.png",
  "../cademy-task/Img/js-4.png",
];

let img = document.getElementById("imge");
let Next = document.getElementById("forward");
let Back = document.getElementById("backward");
let count = 0;

Next.addEventListener("click", function () {
  if (count < path.length - 1) {
    count++;
    img.src = path[count];
    console.log(count);
  }
});

Back.addEventListener("click", function () {
  if (count > 0) {
    count--;
    img.src = path[count];
  }
});

// let Next = document.getElementById("forward");
// let Back = document.getElementById("backward");
// let slider = document.getElementById("slider");
// let img = document.getElementById("imge");
// let count = 0;
// let path = [
//   "../cademy-task/Img/js-1.png",
//   "../cademy-task/Img/js-2.png",
//   "../cademy-task/Img/js-3.png",
//   "../cademy-task/Img/js-4.png",
// ];

// Next.addEventListener("click", function () {
//   count++;
//   if (count > 0) {
//     Next <= path.length;
//     img.src = path[count];
//     console.log(count);
//   }
// });
