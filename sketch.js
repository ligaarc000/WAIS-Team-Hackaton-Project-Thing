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
  var cnv = createCanvas(800, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  Time_slider = createSlider(0,10,0)
  Time_slider.style("width","775px")
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
  createElement('h4','1900 &nbsp &nbsp &nbsp &nbsp 1910 &nbsp &nbsp &nbsp &nbsp 1920 &nbsp &nbsp &nbsp &nbsp 1930 &nbsp &nbsp &nbsp &nbsp 1940 &nbsp &nbsp &nbsp &nbsp 1950 &nbsp &nbsp &nbsp &nbsp 1960 &nbsp &nbsp &nbsp &nbsp 1970 &nbsp &nbsp &nbsp &nbsp 1980 &nbsp &nbsp &nbsp &nbsp 1990 &nbsp &nbsp &nbsp &nbsp 2000')
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
function Map() {
  strokeWeight(2)
  stroke(255,10,10)
  fill(0,0,0,0)
if (Slide==0){
  image(img0,0,0,width,height)
  //Russo-Japanese War (1904):
  ellipse(350,225,75,75)
}
if (Slide==1){
  image(img1,0,0,width,height)
  //Fall of the Qing dynasty(1911):
  ellipse(50,225,85,85)      
  //First balkan War (1912): Second balkan war (1913):
  ellipse(635,222,25,25)  
  //Assasination of Archduke Franz Ferdinand(1914):
  ellipse(615,210,20,20)  
  //World War One(1914): Treaty of versaille: (1919)
  ellipse(590,190,45,45)
  //The Russian revolution(1917):The Russian civil war(1917):
  ellipse(675,175,75,75)
  //Treaty of san germaine: (1919)
  ellipse(675,250,50,50)
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
