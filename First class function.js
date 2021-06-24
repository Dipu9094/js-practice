function add(a, b) {
  return a + b;
}
//there are six rules for first class function
//function can be stored in a variable
var sum = add;
console.log(sum(5, 2));
//function can be stored in a array
var arr = [];
arr.push(sum);
console.log(arr[0](5, 4));

//function can be stored in a object
var obj = {
  sum: add,
};
console.log(obj.sum(10, 20));

//function can create as we need
setTimeout(function () {
  console.log("Dipu Sultan Joy");
}, 2000);

//pass function as an argument
//we also can return function from another function

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  function multiply() {
    var m = func(a, b);
    return c * d * m;
  }
  return multiply;
}

var multi = manipulate(4, 3, add);
console.log(multi());
