function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255, 255);

    stroke(60);
    for (var j=0; j<100; j++) {
        for (var x = 0; x < width; x++) {
            var nx = map(x, 0, width, 0, 3);
            var y = (noise(nx, j) * height);
            ellipse(x, y, 4, 4);
        }
    }
}   


function draw(){
}
