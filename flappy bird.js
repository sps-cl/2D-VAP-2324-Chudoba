let canvasWidth = 1200;
let canvasHeight = 700;

let wallx = canvasWidth -250;
let wally = 0;
let wallWidth = 150;
let gapy = canvasHeight / 2;
let gapHeight = 150;
let wallvel = 3;
let wallcount = 0;

let bird = getImage("bird.png");
let Background = getImage("background.png");

let birdx = canvasWidth / 4;
let birdy = canvasHeight / 2 - 50;

let birdvel = 3;
let birdacc = 0.3;

let keypressed = 0;

function wall() {
    strokeWeight(5)
    fill(60, 255, 0);
    rect(wallx, wally, wallWidth, gapy - gapHeight);
    rect(wallx, gapy + gapHeight, wallWidth, canvasHeight - gapy - gapHeight);

    if (wallx + wallWidth < 0){
        wallreset();
        wallcount++;
    }
}

draw = function() {
    image(Background, 0, 0, canvasWidth, canvasHeight);
    rotatedImage(bird, birdx, birdy, Math.min(birdvel, 4) * 10);
    wall();

    if (isKeyPressed(" ")) {
        keypressed++;
        if (keypressed < 15){
            birdvel = -5;
        }
    } else {
        keypressed = 0;
    }

    if (birdy > canvasHeight - 50){
        birdy = canvasHeight / 2 - 50;
        birdvel = 3;
        wallreset();
        wallcount = 0;
    }

    if(wallup() || walldown()){
        wallreset();
        birdx = canvasWidth / 4;
        birdy = canvasHeight / 2 - 50;
    }

    if(wallcount > 5){
        wallvel++
    }

    birdy += birdvel;
    birdvel += birdacc;
    wallx -= wallvel;
}

function wallreset(){
    wallx = canvasWidth - 250;
    gapy = random(canvasHeight / 2 - 100, canvasHeight / 2 + 100);
    gapHeight = random(125, 175);
}

function wallup(){
    return rectCollision(wallx, wally, wallWidth, gapy - gapHeight, birdx, birdy, bird.width, bird.height);
}

function walldown(){
    return rectCollision(wallx, gapy + gapHeight, wallWidth, canvasHeight - gapy - gapHeight, birdx, birdy, bird.width, bird.height);
}

function rectCollision(x1, y1, w1, h1, x2, y2, w2, h2){
    return x1 + w1 > x2 && x2 + w2 > x1 && y1 + h1 > y2 && y2 + h2 > y1;  
}

function gapcoll(){
    return rectCollision()
}