var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orange, orangeImg;
var red, redImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



orange = createSprite(random(50, 350), 40, 10, 10);
orange.addImage("orangeLeaf.png.png", orangeImg)
orange.scale = 0.08;
orange.velocityY = 3; 
orange.lifetime = 150;

red = createSprite(random(50, 350), 40, 10, 10);
red.addImage("redImage.png", redImg)
red.scale = 0.07;
red.velocityY = 3; 
red.lifetime = 150;


}




function draw() {
  background("white");

 spawnApple();
 spawnOrange();
 spawnRed();

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  drawSprites();
  
}

function spawnApple(){
  if (frameCount % 100 === 0){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.x = Math.round(random(10,100));
  apple.addImage("apple.png", appleImg)
  apple.scale = 0.07;
  apple.velocityY = 2; 
  apple.lifetime = 200;

}
}

function spawnRed(){
  if (frameCount % 100 === 0){
  red = createSprite(random(50, 350), 40, 10, 10);
  red.x = Math.round(random(10,60));
  red.addImage("redImage.png", redImg)
  red.scale = 0.07;
  red.velocityY = 1; 
  red.lifetime = 300;

}
}


function spawnOrange(){
  if (frameCount % 100 === 0){
  orange = createSprite(random(50, 350), 40, 10, 10);
  orange.x = Math.round(random(10,200));
  orange.addImage("orangeLeaf.png", orangeImg)
  orange.scale = 0.07;
  orange.velocityY = 1.5; 
  orange.lifetime = 250;

}
}