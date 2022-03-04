var Slide;
var img0;
var img1;
var img2;
var img3;
var img4
var img5
var img6;
var img7;
var img8;
var img9;
var img10;
function setup() {
  createCanvas(800, 500);
  Time_slider = createSlider(0,10,0)
  Time_slider.style("width","790px")
  Time_slider.input(Update)
  Slide = Time_slider.value()
  img0 = loadImage("map0.jpeg")
  img1 = loadImage("map1.jpg")
  img2 = loadImage("map2.jpeg")
  img3 = loadImage("map3.jpg")
  img4 = loadImage("map4.jpeg")
  img5 = loadImage("map5.jpeg")
  img6 = loadImage("map6.jpeg")
  img7 = img0
  img8 = loadImage("map8.jpeg")
  img9 = loadImage("map9.jpeg")
  img10 = loadImage("map10.jpeg")
  noLoop();
}
function Update() {
Slide = Time_slider.value()
Map()
}

function draw() {
  background(239,228,213);
  textSize(25)
  textAlign(CENTER)
  text('Move the Slider to start your journey through time!',300,200,200,150)
}

function Map() {
  // first 5 archer maps
if (Slide==0){
  image(img0,0,0,width,height)
}
if (Slide==1){
  image(img1,0,0,width,height)
}
  if (Slide==2){
  image(img2,0,0,width,height)
}
  if (Slide==3){
  image(img3,0,0,width,height)
}
  if (Slide==4){
  image(img4,0,0,width,height)
}
  if (Slide==5){
  image(img5,0,0,width,height)
}
  if (Slide==6){
  image(img6,0,0,width,height)
}
  if (Slide==7){
  image(img7,0,0,width,height)
}
  if (Slide==8){
  image(img8,0,0,width,height)
}
  if (Slide==9){
  image(img9,0,0,width,height)
}
  if (Slide==10){
  image(img10,0,0,width,height)
}
}
