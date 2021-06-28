var iss, issImg;
var spaceCraft, spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4;
var bgImg;
var hasDocked = false;

function preload(){
  issImg = loadImage("images/iss.png");
  spaceCraftImg1 = loadImage("images/spacecraft1.png");
  spaceCraftImg2 = loadImage("images/spacecraft2.png");
  spaceCraftImg3 = loadImage("images/spacecraft3.png");
  spaceCraftImg4 = loadImage("images/spacecraft4.png");
  bgImg = loadImage("images/spacebg.jpg");
}

function setup() {
  createCanvas(1000,600);
  //createSprite(400, 200, 50, 50);
  spaceCraft = createSprite(300, 500);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale = 0.2;
  iss = createSprite(300,400);
  iss.addImage(issImg);
}

function draw() {
  background(bgImg);  
  drawSprites();
  //console.log(spaceCraft.x);
  //console.log(spaceCraft.y);
  if (!hasDocked){
    if (keyIsDown(LEFT_ARROW)){
      spaceCraft.addImage(spaceCraftImg4);
      spaceCraft.scale = 0.2;
      spaceCraft.x = spaceCraft.x - 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      spaceCraft.addImage(spaceCraftImg3);
      spaceCraft.scale = 0.2;
      spaceCraft.x = spaceCraft.x + 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      spaceCraft.addImage(spaceCraftImg2);
      spaceCraft.scale = 0.2;
      spaceCraft.y = spaceCraft.y + 3;
    }
    if (keyIsDown(UP_ARROW)) {
      spaceCraft.addImage(spaceCraftImg2);
      spaceCraft.scale = 0.2;
      spaceCraft.y = spaceCraft.y - 3;
    }
  }
  if (spaceCraft.x === 234 && spaceCraft.y === 494){
    hasDocked = true;
    spaceCraft.addImage(spaceCraftImg1);
    spaceCraft.scale = 0.3;
  }
}