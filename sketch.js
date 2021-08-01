var garden,rabbit;
var gardenImg,rabbitImg;
var Apple,AppleImg;
var OrangeLeaf,OrangeLeafImg;

function preload(){
  gardenImg = loadImage("path.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("apple.png");
  OrangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApple();

  spawnOrangeLeaf();

  drawSprites();
}

function spawnApple()
{
  if (frameCount % 60 === 0) {
    Apple = createSprite(600,100,40,10);
    Apple.addImage(AppleImg);
    Apple.y = Math.round(random(10,60));
    Apple.scale = 0.5;
    Apple.velocityY = -3;
    Apple.lifetime = 200;
    Apple.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
  }
}

function spawnOrangeLeaf()
{
 if (frameCount % 60 === 0)
 {
  OrangeLeaf = createSprite(600,165,10,40);
  OrangeLeaf.velocityY = -10;
  OrangeLeaf.scale = 0.5;
  var y = Math.round(random(1,6));
  switch(y)
  {
    case 1:
    OrangeLeaf.addImage(OrangeLeafImg);
      break;
  }
    OrangeLeaf.scale = 0.5;
 }
}