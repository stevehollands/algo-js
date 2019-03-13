class Rectangle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }
}

//true
var rect1 = new Rectangle(5, 5, 50, 50)
var rect2 = new Rectangle(20, 10, 10, 10)

//false
//var rect1 = new Rectangle(5, 5, 5, 5)
//var rect2 = new Rectangle(20, 10, 10, 10)

function collision(rec1, rec2)
{
  if (rec1.x < rec2.x + rec2.width &&
     rec1.x + rec1.width > rec2.x &&
     rec1.y < rec1.y + rec2.height &&
     rec1.y + rec1.height > rec2.y) {
       return "true";
  }
  else {
    return "false";
  }
}

console.log(collision(rect1, rect2));