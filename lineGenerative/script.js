var lp;
var lp1;


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255, 255);

    lp = new lineDisplay();
    lp1 = new lineDisplay();

    lp.display();
    lp1.display();
}   


function draw(){
}


function lineDisplay(){
    this.lineNum = 10;
    this._randomF = random(3);
}


lineDisplay.prototype.display = function(){
    push();
    stroke( random(255), random(255), random(255));
    for (var j=0; j<this.lineNum; j++) {
        for (var x = 0; x < width; x++) {
            var nx = map(x, 0, width, 0, this._randomF);
            var y = (noise(nx, j) * height);
            ellipse(x, y, 4, 4);
        }
    }
    pop();
}
