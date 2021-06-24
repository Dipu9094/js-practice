function Shape() {}

Shape.prototype = {
  common: function () {
    console.log("I am a common method");
  },
};

function square(width) {
  this.width = width;
  console.log("width is " + this.width);
}

square.prototype = Object.create(Shape.prototype);
square.prototype.constructor = Shape;

square.prototype.draw = function () {
  console.log("Drawing");
};

var sqrt = new square(10);
sqrt.common();

//overriding

sqrt.prototype.common = function () {
  console.log("This is new common method");
};
sqrt.common()
