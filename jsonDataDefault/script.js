var dataSave;

function preload() {
    dataSave = loadJSON("animals.json");
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(180);
    console.log(dataSave.number);
    for (var i = 0; i < Object.keys(dataSave.birds).length; i++) {
        console.log(dataSave.birds[i].name);
        text(dataSave.birds[i].species, 10, i * 40 + 40);
        text(dataSave.birds[i].name, 120, i * 40 + 40);
    }
}


function draw(){

}