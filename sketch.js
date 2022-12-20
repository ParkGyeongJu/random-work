
let ball;

function setup() {
  createCanvas(400, 400); 
  ball = new Walker();
  img = loadImage('mo.png');
}


function draw() {
  
  ball.update();
  ball.display();

}


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.x = width/2;
  	this.y = height/2;
  	this.w = 10;
  }
  
  update() {
    //update position
  	this.x = this.x + random(-5, 5);
  	this.y = this.y + random(-5, 5);
  }
  
  display() {
    //display walker
    if(mouseIsPressed){
      background(240,230,140);
    }else{
      background(100, 5);
    }
    image(img, mouseX/2, mouseY/2, img.width / 4, img.height / 4);
 }
}