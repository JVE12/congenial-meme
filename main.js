img = "";
status = "";
function preload() {
    img = loadImage('OIP (4).jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects" 
}
function modelLoaded() {
    console.log("Model loaded")
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);


}