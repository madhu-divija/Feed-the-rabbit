var garden, rabbit, apple, orange;
var gardenImg, rabbitImg, appleImg, orangeImg;

function preload() {
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg = loadImage("apple.png");
    orangeImg = loadImage("orangeLeaf.png");
}

function setup() {

    createCanvas(400, 400);

    // Moving background
    garden = createSprite(200, 200);
    garden.addImage(gardenImg);

    //creating boy running
    rabbit = createSprite(180, 340, 30, 30);
    rabbit.scale = 0.09;
    rabbit.addImage(rabbitImg);
}


function draw() {
    background(0);

    rabbit.x = World.mouseX

    edges = createEdgeSprites();
    rabbit.collide(edges);

    drawSprites();
    createApples();
    createLeaves();


}



function createApples() {

    if (frameCount % 80 == 0) {
        apple = createSprite(random(50, 350), 40, 10, 10);
        apple.addImage(appleImg);
        apple.scale = 0.05;
        apple.y = Math.round(random(100, 240))
        apple.veloxityY = 4;
        apple.liftime = 150;
    }
}

function createLeaves() {

    if (frameCount % 80 == 0) {
        orange = createSprite(random(50, 350), 40, 10, 10);
        orange.addImage(orangeImg);
        orange.scale = 0.06;
        orange.y = Math.round(random(100, 230))
        orange.veloxityY = 4;
        orange.liftime = 150;
    }
}