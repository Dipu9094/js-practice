function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function shape(colour) {
  this.colour = colour;
}

shape.prototype.common = function () {
  console.log("I am common method");
};

function Square(width, colour) {
  shape.call(this, colour);
  this.width = width;
}

extend(Square, shape);
Square.prototype.draw = function () {
  console.log("Drawing");
};

var sqr = new Square(45, "Red");

function circle(radius, colour) {
  shape.call(this, colour);
  this.radius = radius;
}



extend(circle, shape);

//overriding common method
circle.prototype.common = function () {
    //shape.prototype.common.call(this);
    console.log("I am calling from circle and i have overridden");
  };

var c = new circle(45, "black");
//console.log(c);
var s = new shape("Yellow");

s.common();
c.common();



