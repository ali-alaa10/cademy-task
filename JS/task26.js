const setA = new Set([1, 2, 7, 8, 4, 5]);
const setB = new Set([1, 2, 3, 4, 5]);

function setDiff(setA, setB) {
  const difference = new Set();

  setA.forEach((el) => {
    if (!setB.has(el)) {
      difference.add(el);
    }
  });

  return difference;
}

console.log(setDiff(setA, setB));
