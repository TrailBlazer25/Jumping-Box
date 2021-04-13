var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box1 = createSprite(100,500,150,10);
    box1.shapeColor = "red";

    box2 = createSprite(300,500,150,10);
    box2.shapeColor = "blue";

    box3 = createSprite(500,500,150,10);
    box3.shapeColor = "green";

    box4 = createSprite(700,500,150,10);
    box4.shapeColor = "yellow";

    ball = createSprite(400,50,25,25);
    ball.velocityX = -3;
    ball.velocityY = 5;

    invisbarrier1 = createSprite(400,500,800,10);
    invisbarrier1.visible = false;

    invisbarrier2 = createSprite(400,0,800,10);
    invisbarrier2.visible = false;

    invisbarrier3 = createSprite(10,300,10,600);
    invisbarrier3.visible = false;

    invisbarrier4 = createSprite(800,300,10,600);
    invisbarrier4.visible = false;
}

function draw() {
    background("Black");

    createEdgeSprites();

    if(ball.isTouching(box1)){
        ball.shapeColor = "red";
    }

    if(ball.isTouching(box2)){
        ball.shapeColor = "blue";
    }

    if(ball.isTouching(box3)){
        ball.shapeColor = "green";
    }

    if(ball.isTouching(box4)){
        ball.shapeColor = "yellow";
    }

    ball.bounceOff(invisbarrier1);
    ball.bounceOff(invisbarrier2);
    ball.bounceOff(invisbarrier3);
    ball.bounceOff(invisbarrier4);

    drawSprites();
}