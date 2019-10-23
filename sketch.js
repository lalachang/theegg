var imgs = [];
var canvas;
var count=1;

function preload() {
  for (var i=1; i<22; i++) {
    console.log("image/"+i+".jpg");
    imgs[i] = loadImage("image/"+i+".jpg");

  }
}
function setup() {
  frameRate(1);
  var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");
    imageMode(CENTER);
}

function draw() {
  console.log($(window).scrollLeft());
    if ((frameCount%3==0) && (count<22) && ($(window).scrollLeft()<72367)) {

    image(imgs[count], random(width), random(height),imgs[count].width / 3,imgs[count].height / 3);
    count++;



}


if ($(window).scrollLeft()>=72367){

  background(0);
}
}
