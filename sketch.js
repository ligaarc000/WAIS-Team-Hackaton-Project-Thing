var Slide;
var img1;
var img2;
function setup() {
  createCanvas(800, 500);
  Time_slider = createSlider(0,10,0)
  Time_slider.style("width","400px")
  Time_slider.input(Update)
  Slide = Time_slider.value()
  img1 = loadImage("map1.jpg")
  img2 = loadImage("map2.jpg")
  img3 = loadImage("map3.jpg")
  noLoop();
}
function Update() {
Slide = Time_slider.value()
Map()
}

function draw() {
  background(239,228,213);
}

function Map() {
  // first 5 archer maps
if (Slide==0){
  
}
if (Slide==1){
  
}
  if (Slide==2){
  image(img3,0,0,width,height)
}
  if (Slide==3){
  ellipse(50,50,150,100)
}
  if (Slide==4){
  image(img1,0,0,width,height)
}
  if (Slide==5){
  ellipse(50,50,100,150)
}
  if (Slide==6){
  ellipse(50,50,100,150)
}
  if (Slide==7){
  ellipse(50,50,100,250)
}
  if (Slide==8){
  image(img2,0,0,width,height)
}
  if (Slide==9){
  ellipse(100,50,100,150)
}
  if (Slide==10){
  ellipse(150,50,100,150)
}
}
