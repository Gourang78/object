img="";
status="";

function preload(){

    img = loadImage("bedroom.jpeg");
    
}

function setup(){

    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("Cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object is being identified";

}

function modelLoaded(){

    console.log("Model has been initialized");
    status = true;
    objectDetector.detect(img, gotResults);

}

function gotResults(error, results){

    if(error){

        console.error;

    }
    else{

        console.log(results);

    }

}

function draw(){

    image(img, 0, 0, 640, 420);

    fill("red");
    text("Bed", 200, 60);
    noFill();
    stroke("red");
    rect(180,40,270,320);    

    fill("red");
    text("Chair", 400, 260);
    noFill();
    stroke("red");
    rect(400, 240, 200,200);

}