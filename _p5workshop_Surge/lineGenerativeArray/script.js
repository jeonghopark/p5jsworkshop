var lp = [];


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255, 255);

    for (var i = 0; i < 20; i++) {
        lp[i] = new lineDisplay();
        lp[i].display();
    }
}   


function draw(){
}


function lineDisplay(){
    this.lineNum = 3;
    this._randomF = random(3);
    this.randomYPos = random(300);
}


lineDisplay.prototype.display = function(){
    push();
    stroke( random(255), random(255), random(255));
    for (var j=0; j<this.lineNum; j++) {
        for (var x = 0; x < width; x++) {
            var nx = map(x, 0, width, 0, this._randomF);
            var y = (noise(nx, j) * height) + this.randomYPos;
            ellipse(x, y, 4, 4);
        }
    }
    pop();
}
