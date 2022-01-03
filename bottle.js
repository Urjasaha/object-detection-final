img= "";
status = "";
objects = [];

function preload() {
    img= loadImage('bottle.jpeg');
}

function setup() {
    canvas = createCanvas(500, 270);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);

}

function draw() {
    image(img, 0, 0, 500, 270);
         if(status != "") {
             for (i=0; 1 < objects.length; i++)
              {
                  document.getElementById("status").innerHTML = "Status: Object Detected";

                  fill("#FF0000");
                  percent = floor(objects[i].confidence * 100);
                  text(objects[i].label + " " + percent + "%", objects[i].x + 20, objects[i].y + 20);
                  noFill();
                  stroke("#FF0000");
                  rect(objects[i].x, objects[i].y, objects[i].width, objects[1].height);
              }
         }
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function goback3() {
     window.location = "index.html";
 }