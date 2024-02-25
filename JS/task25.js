const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 6],
  ["d", 7],
  ["e", 9],
  ["f", 11],
  ["g", 20],
  ["h", 22],
  ["i", 8],
]);

myMap.set("h", 60); //to test => Update Value
myMap.set("f", 100); //to test => Update Value
console.log(myMap); //to test

function FilteredMap(myMap, Callbackfn) {
  const FilteredMap = new Map();

  for (const [key, value] of myMap) {
    if (Callbackfn(value)) {
      FilteredMap.set(key, value);
    }
  }
  return FilteredMap;
}

const Filter = (value) => value % 2 === 0;

console.log(FilteredMap(myMap, Filter));
