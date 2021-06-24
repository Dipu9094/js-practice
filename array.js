var arr = [5, 6, 7, 8, 9, 0];
var arr2 = [1, 2, 3, 4];

console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(3));
console.log(arr);
console.log(arr.push(100));
console.log(arr);
console.log(arr.push(007));
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log(arr.join(", "));
var arr3 = arr.concat(arr2);
console.log(arr3); //joijing two array
console.log(arr3.fill(0));
