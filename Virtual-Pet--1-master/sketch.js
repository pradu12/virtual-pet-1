//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, dogHappyImg;

var database
function preload()
{
	dogImg = loadImage ("dogImg.png");
  dogHappyImg = loadImage ("dogImg1.png")
}

function setup() {
	
  
  createCanvas(500, 500);
  
  database =firebase.database();
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  
foodStock=database.ref('Food');
foodStock.on("value",readStock);



  
}


function draw() {  
 background(46, 139, 87)
 

  if(keyWentDown(UP_ARROW)){
    foodS= foodS-1;
    writeStock(foodS);
    dog.addImage(dogHappyImg)
  }
  drawSprites();

  textSize(17);
  fill ("black");
  stroke ("blue");
  text("Note: Press Up Arrow Key To Feed The Dog", 150,50);

  text ("Food Remaining:"+foodS,200,80);



  //add styles here

}

function readStock(data){
  foodS=data.val();
  console.log(foodS);
}


function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
