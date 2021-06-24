var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//we will do filter by using callback

function filtered(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

x = filtered(arr, function (value) {
  return value % 2 == 0;
});

y = filtered(arr, function (value) {
  return value % 2 == 1;
});

console.log("even : " + x);
console.log("odd: " + y);
