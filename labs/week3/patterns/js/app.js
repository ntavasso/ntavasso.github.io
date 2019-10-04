//Module Pattern
class Ball {

  constructor() {
    //position of where the ball starts
    this.position = { x: 100, y: 10 };

    //speed of the ball
    this.velocity = { x: 10, y: 0 };
  }

  update() {
    //updates the position of the ball

    //position.x = position.x + velocity.x
    this.position.x += this.velocity.x;

    //position.y = position.y + velocity.y
    this.position.y += this.velocity.y;

    //draws the circle to the screen
    circle(this.position.x, this.position.y, 20);

    //if circle leaves these boundaries, this will trigger ballBeyond function in World
    if (this.position.x < 0 || this.position.x > 400) {
      World.ballBeyond(this);
      // console.log("out");



    }
  }

}



//class for a box
//Create a new box class, and create two instances of the code. Have them grow larger by 5px every time a ball hits the edge of the screen.
//Grows in size every time a ball hits an edge and is reset
// "For fun": multiple balls

class Box {

  constructor() {

    //positioning of box object
    this.position = { x: 100, y: 100 };

    //height of box
    this.height = 50;

    //width of box
    this.width = 30;

    this.ball = new Ball();


  }

  //box should grow everytime ball goes past boundaries
  grow() {

    //draw rectangles to screen
    rect(this.position.x, this.position.y, this.width, this.height);
    rect(300, this.position.y, this.width, this.height);

    //Call boxBeyond function
    World.boxBeyond(this);

  }
}

//world variable
//Singleton pattern
var World = {

  //sets background color
  bgcolor: [237, 119, 83],

  //this function generates random color and changes ball velocity everytime ball goes beyond boundaries
  ballBeyond: function (whichBall) {

    //randomizes red and green.  Blue stays the same value
    this.bgcolor = [Math.random() * 255, Math.random() * 255, 83];

    //starts from the same position on x axis
    whichBall.position.x = 100;

    //randomizes velocity
    whichBall.velocity.x = (Math.random() - .5) * 20;

    //Something for the next function to identify with
    this.signal = true;
  },

  //this function makes the boxes react to the ball going off the page
  boxBeyond: function (whichBox) {
    if (this.signal == true) {
      whichBox.height += 5;
      whichBox.width += 5;
      this.signal = false;
    }
  }

}


//create new ball object
var ball = new Ball();

//create new box object
var b = new Box();


//create the canvas size
function setup() {
  createCanvas(400, 300);

}

//call all functions
function draw() {
  background(World.bgcolor);
  ball.update();
  b.grow();
}