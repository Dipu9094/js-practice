var person = [
  {
    name: "dipu",
    age: 27,
  },
  {
    name: "SULTAN",
    age: 29,
  },
  {
    name: "joy",
    age: 25,
  },
  {
    name: "nishat",
    age: 22,
  },
];

var result = person.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(result);
