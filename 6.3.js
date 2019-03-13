let rectangles = [];

class Rectangle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
}

function createRectangles(){
  for (let i = 0; i <= 1000; ++i) {
      rectangles[i] = new Rectangle(random(), random(), random(), random());
  }
}

function random()
{
  return Math.floor(Math.random() * 101);
}

createRectangles();

rectangles.forEach(function(element) {
  console.log(element);
});

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