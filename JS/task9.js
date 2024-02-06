let needle = "js";
let haystack = ["php", "js", "python"];

if (haystack.includes(needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// Second Way

let chek = haystack.indexOf(needle);

if (haystack.indexOf(needle) != -1) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// Third Way

if (haystack.lastIndexOf(needle) != -1) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// Four Way

if (haystack.some((element) => element === needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}
