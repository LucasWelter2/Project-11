var sea, seaImg;
var boat, boatImg

var newImage;





function preload(){
  seaImg = loadImage("sea.png");
  boatImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png");
  

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImg);
  sea.x = sea.width/2;
  sea.velocityX = -4;

  boat = createSprite(160,250,20,50);
  boat.addAnimation("running",boatImg);
  // trex.adicionarAnimação("colidiu",trex_colidiu)
  boat.scale = 0.3;










}

function draw() {
  background("blue");
    
  if (sea.x < 0){
    sea.x = sea.x.width/2;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();

 
}
