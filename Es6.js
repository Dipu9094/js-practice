/*String method of Es6*/
var s = `hell0


...`;
console.log(s);

var age = 24;
var name = "Dipu Sultan Joy";
console.log(
  `My name is ${name} and my age is ${age}. And i am ${
    age < 18 ? "Not adult" : "adult"
  }`
);

console.log(name.padStart(15, "*")); //ei output gula console e dekhte hbe
console.log(name.padEnd(15, "*"));
console.log("S".repeat(5));

/*Arrow function*/

// function add(a,b){
//     return a+b
// }

// let add = (a,b)=>{
//     return a+b
// }

let add = (a, b) => a + b; //return ekline er hole eivabe likha jai
console.log(add(10, 20));

//default parameter
function sqr(n = 2) {
  return n * n;
}

console.log(sqr()); //eikhane value na dile function er vitorer default parameter kaj kore
console.log(sqr(5));

/*****************rest and spredd  */

//REST

function sum(...rest) {
  return rest.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//SPREDD///////////////

let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(...a);
console.log(...a, ...b);

let obj = {
  a: 10,
  b: 20,
  c: 30,
};

let obj2 = {
  ...obj, //etar maddhome new obj create hoi , reference share kore na
};
console.log(obj2);

////////////////////iterator using symbol Es6/////////////

let arrr = [1, 2, 3];
let iterate = arrr[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

//For String
let str = "Dipu";
let iterate2 = str[Symbol.iterator]();
console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());
