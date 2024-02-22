const statusObj = {
  isActive: true,
  isUsed: false,
  isAvailable: true,
  isReady: false,
  inStock: true,
};

function filterObjectValues() {
  const NewObj = {};
  for (const stat in statusObj) {
    if (statusObj[stat] === true) {
      NewObj[stat] = statusObj[stat];
    }
  }
  return NewObj;
}

const product = filterObjectValues(statusObj);
console.log(product);
