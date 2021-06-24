function myFunc() {
  console.log(this.a + this.b);
}
myFunc.call({ a: 20, b: 45 });

function myFunc2(c, d) {
  console.log(this.a + this.b + c + d);
}

/*******************CALL************************* */
myFunc2.call({ a: 20, b: 45 }, 10, 5);
//myFunc2.apply({a:20, b:45},10,5) but apply eivabe kah kore na

//call er apply er main difference holo apply e 1st argument e this er value pass hoi and porer argument gula array akare pass korte hoi.

/*******************APPLY************************* */
myFunc2.apply({ a: 20, b: 25 }, [10, 15]);

/*bind er khetre ekta directly call hobe na ekta variable e rekhe escha moto use kora jabe*/

/*******************BIND************************* */

var Bind = myFunc2.bind({ a: 20, b: 45 }, 10, 5); //eta k call na korle kaj korbe na
Bind();

var Bind2 = myFunc2.bind({ a: 20, b: 45 }); //eivabe o arguments pass kora jai
Bind2(25, 25);
