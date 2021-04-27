//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogTMG,happyDogIMG;

function preload(){
	//load images here
  dogIMG=loadImage("images/dogImg.png");
  happyDogIMG=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog = createSprite(250,250,100,100);
  dog.addImage("dog",dogIMG);
  dog.scale=0.08;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogIMG);
}

  drawSprites();
  //add styles here
  textSize(15);
  fill("red");
  stroke(5)
text("Food remaining :",200,200);
text("Press UP_ARROW Key To Feed Drago Milk!",130,20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



