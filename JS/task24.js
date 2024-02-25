const myObj = {
  price: 1000,
  quantity: 500,
  vat: 100,
  shipping: 150,
};

function MultipliedObj() {
  const NewObj = {};

  for (const key in myObj) {
    if (myObj[key] != null) {
      NewObj[key] = myObj[key] * 2;
    }
  }
  return NewObj;
}

const MultiObj = MultipliedObj(myObj);
console.log(MultiObj);
