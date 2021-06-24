console.log("Hello world!");
console.log("I love my country and my family");

var str = "1000";
let n = 500;
console.log(Number(str));
console.log(str + " is a string");
console.log(n.toString());

console.log(Math.round(Math.random() * 50 + 1));

var date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toDateString());
console.log(date.toLocaleString());

//Ternary operator
var m = 11;
var result = m % 2 == 0 ? "even" : "odd";
console.log(result);

//OR
var nam = "";
var fullName = nam || "Dipu Sultan Joy";
console.log(fullName);

//AND

var isok = true;
isok && console.log("Everything is okey");

var a = "i am";
var b = "Dipu Sultan";
var c = a.concat(" ", b);
console.log(c);


var date1 = new Date()
console.log(date1.getDay());
