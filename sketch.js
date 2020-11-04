var ball,img,paddle;
function preload() {
  ball = loadImage("ball.png")
    paddle = loadImage("paddle.png");
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
   paddle = createSprite(350,180,20,150);
  paddle.addImage("paddle",paddle);
    ball = createSprite(30,200,20,20);
  //ball.addImage("ball.png",ball)
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  text(mouseX+","+mouseY,mouseX,mouseY);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

