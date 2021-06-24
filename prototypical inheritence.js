function Shape() {}

Shape.prototype = {
  common: function () {
    console.log("I am a common method");
  },
};

function extend(child,parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function square(width) {
  this.width = width;
  console.log("width is " + this.width);
}

// square.prototype = Object.create(Shape.prototype);
// square.prototype.constructor = Shape;
extend(square,Shape)

square.prototype.draw = function () {
  console.log("Drawing");
};

var sqrt = new square(10);
sqrt.common();

//overriding

function circle() {
  
}

extend(circle,Shape)

circle.prototype.common = function () {
  console.log("This is new common method");
};
var sqrt = new circle(420);
sqrt.common();

