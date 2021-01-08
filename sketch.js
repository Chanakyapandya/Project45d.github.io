var ball , ball_c1 , ball_c2 , ball_c3;
var database;








function preload() {}
function setup() {
  createCanvas(windowWidth, windowHeight);
database = firebase.database();

ball = createSprite(250,250,10,10);
ball.shapeColor = "red";

ball_c1 = database.ref("red")
ball_c1.on("value",readRed);

ball_c2 = database.ref("blue");
ball_c2.on("value",readBlue);

ball_c3 = database.ref("green");
ball_c3.on("value",readGreen);


}
function draw() {
  background(red,blue,green);
  ball.x = mouseX;
  ball.y = mouseY;

  writeRed();
  writeBlue();
  writeGreen();

  drawSprites();
}

function writeRed(){
database.ref('/').update({
   'red' : mouseX
})

}

function writeBlue(){
database.ref('/').update({
 'blue' : mouseY 
})

}

function writeGreen(){
database.ref('/').update({
  green : mouseX - mouseY
})

}



function readRed(data){
red = data.val();
console.log("red");
}

function readBlue(data){
  blue = data.val();
  
  }

  function readGreen(data){
    green = data.val();
    
    }