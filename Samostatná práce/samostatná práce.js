let canvasWidth = 700;
let canvasHeight = 700;
let score = 0;

let poziceHrace = [0, canvasHeight / 9 * 7];
let poziceProjektiluHrace = [0,-1000];
let poziceProjektiluNepritele = [0, canvasHeight + 1000];
let poziceNepratel = new Array (30);

let velikostHrace = [canvasWidth / 7 ,canvasWidth / 10];
let velikostProjektilu = [canvasWidth / 40, canvasHeight / 20]
let velikostNepratel = [canvasWidth / 20, canvasHeight / 20]

let rychlostHrace = 6;
let rychlostProjektilu = 10;
let rychlostNepratel = 0.3;

let rectX = 350;
let rectY = 350;
let rectWidth = 350;
let rectHeight = 350;

for (let i = 0; i < poziceNepratel.length; i++) {
    poziceNepratel[i] = [(i % 10) * (velikostNepratel[0] * 1.7),
    Math.floor(i / 10) * (velikostNepratel[1] * 1.7)];
}

function draw() {
    background(0);
    nakresliHrace();
    vykreslitPoziceProjektilHrace();
    nakresliProjektilNepritele();
    pohybHrace();
    pohybNepratel();
    pohybProjektiluHrace();
    pohybProjektiluNepratele();
    kolizeProjektiluANepratel();
    kolizeProjekiluAhrace();
    vystrelPoziceProjektiluHrace();
    vystrelProjektilNepritele();
    nakresliNepratele();
    fill("green")
    text(score,315,50)
    addScore();

}

function nakresliHrace() {
    fill("purple")
    rect(poziceHrace[0], poziceHrace[1], velikostHrace[0], velikostHrace[1]);
}

function vykreslitPoziceProjektilHrace() {
    if(poziceProjektiluHrace[1] >- velikostProjektilu[1]){
        fill("red")
        rect(poziceProjektiluHrace[0],poziceProjektiluHrace[1],velikostProjektilu[0],velikostProjektilu[1]);
    }
}

function nakresliProjektilNepritele() {
    if(poziceProjektiluNepritele[1] >- velikostProjektilu[1]){
        fill("red")
        rect(poziceProjektiluNepritele[0], poziceProjektiluNepritele[1],velikostProjektilu[0],velikostProjektilu[1]);
    }
}

function pohybHrace() {
    if (isKeyPressed("a") && poziceHrace[0] > 0) {
        poziceHrace[0] -= rychlostHrace;

    
    }else if (isKeyPressed("d") &&  poziceHrace[0] + velikostHrace[0] < canvasWidth){
        poziceHrace[0] += rychlostHrace;
    
    }
}

function pohybProjektiluHrace() {
    poziceProjektiluHrace[1] -= rychlostProjektilu;
}

function pohybProjektiluNepratele() {
  if(poziceProjektiluNepritele[1] < canvasHeight){
    poziceProjektiluNepritele[1] += rychlostProjektilu;
  }  
}

function vystrelPoziceProjektiluHrace() {
    if (isKeyPressed(" ") && poziceProjektiluHrace[1] < -velikostProjektilu[1]) {
        poziceProjektiluHrace[0] = poziceHrace[0] + (velikostHrace[0] - velikostProjektilu[0]) /2;
        poziceProjektiluHrace[1] = poziceHrace[1]
    }

}

function vystrelProjektilNepritele() {
    if(poziceProjektiluNepritele[1] >= canvasHeight){
        let index =Math.floor(random(0, poziceNepratel.length));
        poziceProjektiluNepritele[0] = poziceNepratel[index][0] + velikostNepratel[0] / 2 - velikostProjektilu[0] / 2;
        poziceProjektiluNepritele[1] =  poziceNepratel[index][1]
    }
}

function nakresliNepratele() {
    for (var i = 0; i < poziceNepratel.length; i++) {
        fill("gray");
        rect(poziceNepratel[i][0], poziceNepratel[i][1], velikostNepratel[0], velikostNepratel[1])   
        
    }
}

function pohybNepratel() {
let zmenaSmeru = false;
    for (var i = 0; i < poziceNepratel.length; i++) {
        poziceNepratel[i][0] += rychlostNepratel;
            if (poziceNepratel[i][0] < 0 || poziceNepratel[i][0] + velikostNepratel[0] > canvasWidth){
                zmenaSmeru = true;
            }
                
    }
        if(zmenaSmeru){
            for (var i = 0; i < poziceNepratel.length; i++) {
               poziceNepratel[i][1] += velikostNepratel[1];
                
            }
            rychlostNepratel *= -1.1;
        }
}

function kolizeObdelniku(pozice1, velikost1, pozice2, velikost2){
    return pozice1[0] + velikost1[0] > pozice2[0] &&
           pozice2[0] + velikost2[0] > pozice1[0] &&
           pozice1[1] + velikost1[1] > pozice2[1] &&
           pozice2[1] + velikost2[1] > pozice1[1]

    score + 100;

}

function kolizeProjekiluAhrace(){
    if(kolizeObdelniku(poziceHrace,velikostHrace,poziceProjektiluNepritele,velikostProjektilu)){
        restart();
    }
}

function odstranNepritele(index) {
    poziceNepratel.splice(index,1);
   
}

function restart() {
    poziceHrace = [0, canvasHeight / 9 *7];
    poziceProjektiluHrace = [0, -1000];
    rychlostNepratel = 0.3;
    poziceNepratel = new Array(30);
    for(let i = 0; i < poziceNepratel.length; i++){
        poziceNepratel[i] = [(i % 10) * velikostNepratel[0] * 1.7, Math.floor(i / 10) * velikostNepratel[1] * 1.7];

    }
    score = 0;
}

function kolizeProjektiluANepratel() {
    for (var i = 0; i < poziceNepratel.length; i++)  {
        if(kolizeObdelniku(poziceNepratel[i], velikostNepratel, poziceProjektiluHrace, velikostProjektilu)){
            odstranNepritele(i)
            poziceProjektiluHrace = [0, -1000];
            score += 200;
            if(poziceNepratel.length == 0){
                restart();
            }
            return;
        }
        
    }
}


