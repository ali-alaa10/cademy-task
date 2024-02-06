let needle = ["js"];
let haystack = ["php", "js", "python"];

if (haystack.includes(needle[0])) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// Second Way

let foundItem = haystack.find((item) => item === needle[0]);
console.log(foundItem);

// Third Way

let chek = haystack.indexOf("js");
console.log(chek);

// Four Way

console.log(haystack.includes("js"));
