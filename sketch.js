var Slide;
function setup() {
  createCanvas(400, 400);
  Time_slider = createSlider(0,10,0)
  Time_slider.style("width","400px")
  Time_slider.input(Update)
  Slide = Time_slider.value()
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
if (Slide==1){
  ellipse(50,50,100,100)
}
  if (Slide==2){
  ellipse(50,50,120,100)
}
  if (Slide==3){
  ellipse(50,50,150,100)
}
  if (Slide==4){
  ellipse(50,50,100,150)
}
  if (Slide==5){
  
}
  if (Slide==6){
  ellipse(50,50,100,150)
}
  if (Slide==7){
  ellipse(50,50,100,250)
}
  if (Slide==8){
  ellipse(80,50,100,150)
}
  if (Slide==9){
  ellipse(100,50,100,150)
}
  if (Slide==10){
  ellipse(150,50,100,150)
}
}
