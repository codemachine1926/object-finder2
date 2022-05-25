status = "";
function setup() {
    canvas = createCanvas(350,310);
    canvas.position(470,250);
    cam = createCapture(VIDEO);
    cam.hide();
}

function start() {
    modelload = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : Objects are getting detected";
    input = document.getElementById("input").ariaValueMax;
    console.log(input);
}
function modelloaded() {
    console.log("model is loaded");
    status = true;
}

function draw() {
    image(cam,0,0,350,310);
}