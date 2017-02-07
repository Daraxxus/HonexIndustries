var clouds = [];
var x = [];
var y = [];
var dx = [];
var sky;
var hill;
var bee;
var bee_x;
var bee_y;
var tree;
var BranchHive;

function setup() {
    bee = loadImage("Images/Bee.png");
    hill = loadImage("Images/Hill.png");
    tree = loadImage("Images/Tree.png");
    sky = loadImage("Images/sky.png");
    BranchHive = loadImage("Images/Branch+Hive.png");
    for (i = 0; i<8; i++){
        clouds.push(loadImage("Images/Clouds.png"));
        x.push(random(0, 700));
        y.push(random(10, 50));
        dx.push(random(0.1, 0.3));
    }
    bee_x = 10;
    bee_y = 10;
}

function draw() { 
    createCanvas(innerWidth, innerHeight);
    background(102, 237, 85);
    image(sky, 0, 0, sky.width, sky.height);
    DrawClouds();
    image(hill, -200, -830, hill.width, hill.height);
    image(BranchHive, 720, 400, BranchHive.width/4, BranchHive.height/4);
    image(tree, 450, 20, tree.width/2, tree.height/2);
    image(bee, bee_x, bee_y, bee.width/4, bee.height/4);
}

function mouseMoved() {
    bee_x = mouseX;
    bee_y = mouseY;
}

function DrawClouds() {
    for (i = 0; i<clouds.length; i++){
        image(clouds[i], x[i], y[i], clouds[i].width, clouds[i].height);
        x[i] += dx[i];
        if(x[i]>width) {
            x[i] = -200; //starts cloud offscreen when they leave screen
        }
    }
}