function mousePressed(){
console.log('test')
  if(Info_Display==true){Update();}
  if (Slide==0){
  //Russo-Japanese War (1904):
  //ellipse(350,225,75,75)
  if(mouseX<350+37.5 && mouseX>350-37.5 && mouseY<225+37.5 && mouseY>225-37.5){
  console.log('Russo-Japense War')
  Info_Display=true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Russo-Japanese War",0,0,width,25);
  textSize(20)
  text("Date: February 8th 1904 - September 5th 1905",0,25,width,25);
  textSize(20)
  text("Location: Russia, China, Korea and Japan",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Japan and Russia fought over control of Manchuria and Korea resulting in a Japanese victory which cemented Japan's status as a rising power.",0,100,width,100);
}}
  
if (Slide==1){
  //Fall of the Qing dynasty(1911):
  //ellipse(50,225,85,85)
  if(mouseX<50+42.5 && mouseX>50-42.5 && mouseY<225+42.5 && mouseY>225-42.5){
  console.log('Fall of the Qing dynasty')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Fall of the Qing dynasty",0,0,width,25);
  textSize(20)
  text("Date: February 12th 1912",0,25,width,25);
  textSize(20)
  text("Location: China",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("The Chinese Nationalists overthrew the Qing dynasty forcing the last emperor to abdicate. This revolution ended the dynastic cycle and attempted to establish a democratic regime.",0,100,width,100);}
  
  //First balkan War (1912): Second balkan war (1913):
  //ellipse(635,222,25,25)  
  if(mouseX<635+22.5 && mouseX>635-22.5 && mouseY<222+22.5 && mouseY>222-22.5){
  console.log('Balkan Wars')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("First balkan War",0,0,width,25);
  textSize(20)
  text("Date: October 8th 1912 - May 30th 1913",0,25,width,25);
  textSize(20)
  text("Location: Balkans",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("The first balkan war was a conflict between the Ottoman empire and its balkan territories (which had rebelled). it resulted in a significant loss of territory for the ottoman empire and the establishment of new states in former Ottoman territory",0,100,width,100);
  stroke(5)
  textSize(25)
  text("Second balkan War",0,200,width,25);
  textSize(20)
  text("Date: June 19th 1913 - August 10th 1914",0,225,width,25);
  textSize(20)
  text("Location: Balkans",0,250,width,250);
  line(0,275,width,275)
  textSize(15)
  text("The kingdom of bulgaria was unsatisfied with its territorial acquisitions in the first balkan war this led to tensions in the balkans culminating in the second balkan war which consisted of Serbia Greece and later the Ottoman empire and romania all working together to defeat Bulgaria.",0,300,width,300);}
  
  //Assasination of Archduke Franz Ferdinand(1914):
  //ellipse(615,210,20,20)  
  if(mouseX<615+10 && mouseX>615-10 && mouseY<210+10 && mouseY>210-10){
  console.log('Assasination of the Archduke')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Assasination of Archduke Franz Ferdinand",0,0,width,25);
  textSize(20)
  text("Date: June 28th 1914",0,25,width,25);
  textSize(20)
  text("Location: Bosnia and Hervsvangonia",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Gavrilo Princep a serbian nationlist killed the archduke Franz Ferdinand heir to the throne of the Austro-Hungarian empire. The Austro Hungarians reacted by sending an ultimatum to Serbia which Serbia refused sparking world war one.",0,100,width,100);}
  
  //World War One(1914): Treaty of versaille: (1919)
  //ellipse(590,190,45,45)
  if(mouseX<590+22.5 && mouseX>590-22.5 && mouseY<190+22.5 && mouseY>190-22.5){
  console.log('World War One')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("World War One",0,0,width,25);
  textSize(20)
  text("Date:Jul 28, 1914 – Nov 11, 1918",0,25,width,25);
  textSize(20)
  text("Location: Most of the world",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Peace in Europe was broken by the Austrian declaration of war on Serbia due to the alliance systems that resulted in one of the most influential wars in history. Russia began to mobilize after the Austrian declaration of war resulting in Germany declaring war on Russia and france. The germans invaded Belgium as part of the schlieffen plan to take out France before Russia could mobilize. This resulted in Great Britain declaring war on the German empire. Later the Ottomans and Bulgarians joined the central powers(the Germany and Austro Hungarian alliance). The Japanese Americans Greeks Romanians Italians and Portuguese all joined the Allied/Entente powers. The war lasted from 1914-1918 and ended in abn Allied/Entente victory.",0,100,width,100);}
  //The Russian revolution(1917):The Russian civil war(1917):
  //ellipse(675,175,75,75)
  if(mouseX<675+37.5 && mouseX>675-37.5 && mouseY<175+37.5 && mouseY>175-37.5){
  console.log('The Russian revolution and civil war')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("The Russian revolution",0,0,width,25);
  textSize(20)
  text("Date:Mar 8, 1917 – Jun 16, 1923",0,25,width,25);
  textSize(20)
  text("Location: Russia",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Partway through World War one the Russian tsar was forced to abdicate and a new democratic provisional government was made. The provisional government was later overthrown by a Communist revolution which made peace with Germany.",0,100,width,100);
  rectMode(CORNER)
  stroke(5)
  textSize(25)
  text("The Russian civil war",0,200,width,25);
  textSize(20)
  text("Date:Nov 7, 1917 – Oct 25, 1922",0,225,width,25);
  textSize(20)
  text("Location: Russia",0,250,width,25);
  line(0,275,width,275)
  textSize(15)
  text("The ruling communist party’s “Red Army '' fought against a new revolution led by the  “White Army '' which consisted of conservitive and progrossive democratic groups, less extreme communists, monarchists and various other groups. The red army won and consolidated power in the remaining Russian territory.",0,300,width,100);
  }
  
  //Treaty of san germaine: (1919)
  //ellipse(675,250,50,50)
  if(mouseX<675+25 && mouseX>675-25 && mouseY<250+25 && mouseY>250-25){
  console.log('Treaty of Sevres:')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Treaty of Sevres:",0,0,width,25);
  textSize(20)
  text("Date:August 10 1920",0,25,width,25);
  textSize(20)
  text("Location: Turkey",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Carved up the Ottoman Empire and gave large portions of the middle east to France and Britain despite previous agreements with Arabia.",0,100,width,100);}
}
  if (Slide==2){
//Treaty of Sevres: (1920)
 //ellipse(485,145,40,40)   
  if(mouseX<485+20 && mouseX>485-20 && mouseY<145+20 && mouseY>145-20){
  console.log('Treaty of san germaine')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Treaty of san germaine",0,0,width,25);
  textSize(20)
  text("Date: September 10, 1919",0,25,width,25);
  textSize(20)
  text("Location: Balkans",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Dissolved the Austro Hungarian Empire splitting the dual monarchy. The treaty gave former Austrian territory to new Balkan countries and created new independent states such as Yugoslavia.",0,100,width,100);}
    
//1920 Woman Suffrage: August 26 in Washington DC
  //ellipse(245,160,30,30)   
    if(mouseX<245+15 && mouseX>245-15 && mouseY<160+15 && mouseY>160-15){
  console.log('1920 Woman Suffrage: August 26 in Washington DC')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("1920 Woman Suffrage: August 26 in Washington DC",0,0,width,25);
  textSize(20)
  text("Date: June 4, 1919",0,25,width,25);
  textSize(20)
  text("Location: United states America",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("The 19th amendment was passed allowing women over the age of 21 to cast a ballot and be able to vote.",0,100,width,100);}
    
//1921 July 1 Rise of chinese communists:
  // ellipse(675,155,60,60) 
  if(mouseX<675+30 && mouseX>675-30 && mouseY<155+30 && mouseY>155-30){
  console.log('Rise of chinese communists')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Rise of chinese communists",0,0,width,25);
  textSize(20)
  text("Date: On July 1st 1921",0,25,width,25);
  textSize(20)
  text("Location: China",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text(" 2 people by the name of  Li dazhao and chen duxiu started the Chinese Communist Party as a political party in China that supported communism and is still used now",0,100,width,100);}
    
//1922: British Empire Shrinks
   //ellipse(498,195,30,30) 
   if(mouseX<498+15 && mouseX>498-15 && mouseY<195+15 && mouseY>195-15){
  console.log('British Empire Shrinks')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("British Empire Shrinks",0,0,width,25);
  textSize(20)
  text("Date: Feb. 28",0,25,width,25);
  textSize(20)
  text("Location: London and Eygpt",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("The empire's size began to shrink in 1920 , when Britain declared limited independence for Egypt, which led to full independence two years later.The British empire had a population of 570 million people previously.",0,100,width,100);} 
    
//1923: Great Kanto Earthquake
   //ellipse(750,165,30,30)  
if(mouseX<750+15 && mouseX>750-15 && mouseY<165+15 && mouseY>165-15){
  console.log('Great Kanto Earthquake')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Great Kanto Earthquake",0,0,width,25);
  textSize(20)
  text("Date: Sept. 1",0,25,width,25);
  textSize(20)
  text(" Location: Tokyo, Yokohama, Japan",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("The Great Kanto earthquake struck the Japanese mainland on Sept. 1, 1923, with a magnitude of 7.9 on the Richter scale killing an estimated 140,000 people. The quake starts a tsunami that reaches a height of nearly 40 feet at Atami in the Sagami Gulf, killing 60 people there. Tokyo soons needs to be rebuilt and becomes a modern metropolis",0,100,width,100);}      
// 1924: From Lenin to Stalin
   // ellipse(525,115,45,45)   
if(mouseX<525+22.5 && mouseX>525-22.5 && mouseY<115+22.5 && mouseY>115-22.5){
  console.log('From Lenin to Stalin')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("From Lenin to Stalin",0,0,width,25);
  textSize(20)
  text(" Date: Jan. 21",0,25,width,25);
  textSize(20)
  text("  Location: Moscow",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("After Vladimir Lenin died on Jan. 21, Joseph Stalin immediately began removing any politicians who could oppose him. People are moved from their positions while some are exiled. Stalin's paranoia grows as he takes control of the nation, and with it the level of violence and killing of anyone perceived to be a threat to his power and control.",0,100,width,100);}    
    
// 1925: Scopes Monkey Trial //1929: Wall Street Crashes
  // ellipse(220,160,25,25) 
if(mouseX<220+12.5 && mouseX>220-12.5 && mouseY<160+12.5 && mouseY>160-12.5){
  console.log('Scopes Monkey Trial')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Scopes Monkey Trial",0,0,width,25);
  textSize(20)
  text(" Date: July 10",0,25,width,25);
  textSize(20)
  text("  Location: Moscow",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("John Scopes is prosecuted for teaching the theory of evolution in a class as it counters biblical beliefs. The trial pits well-known Christian fundamentalist and former presidential candidate William Jennings Bryan against renowned attorney Clarence Darrow. It would take another 43 years before the U.S. Supreme Court would rule that laws punishing people for teaching evolution violate the First Amendment.",0,100,width,100);}   
//1927: Lindbergh Nonstop to Paris
  // ellipse(435,135,20,20)   
if(mouseX<435+10 && mouseX>435-10 && mouseY<135+10 && mouseY>135-10){
  console.log('Lindbergh Nonstop to Paris')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Lindbergh Nonstop to Paris",0,0,width,25);
  textSize(20)
  text(" Date: May 21",0,25,width,25);
  textSize(20)
  text("Location: New York to Paris",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("On May 21st 1922 Charles Lindbergh became the first person to fly over the atlantic ocean non stop marking a new achievement in flight. His feat fires the imagination of aspiring aviators about the commercial possibilities of flight.",0,100,width,100);}    
    
//1928: Earhart Crosses Atlantic
  // ellipse(420,115,25,25)   
if(mouseX<420+12.5 && mouseX>420-12.5 && mouseY<115+12.5 && mouseY>115-12.5){
  console.log('Earhart Crosses Atlantic')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text(" Earhart Crosses Atlantic",0,0,width,25);
  textSize(20)
  text(" Date: June 17-18 ",0,25,width,25);
  textSize(20)
  text(" Location: Wales ",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Amelia Earhart becomes the first woman to pilot a plane across the Atlantic, from Newfoundland to Wales, making her an American national heroine and feminist icon who would go on to set numerous aviation records. She would later set another record as the first person – man or woman – to fly solo from Hawaii to the U.S. mainland. Earhart and her co-pilot Fred Noonan would vanish over the Pacific Ocean in 1937 during Earhart's attempt to circumnavigate the globe.",0,100,width,100);}
    
}
  if (Slide==3){
    //1930: Ho Chi Minh Rises in Vietnam
  //ellipse(40,275,30,30) 
    if(mouseX<40+15 && mouseX>40-15 && mouseY<275+15 && mouseY>275-15){
  console.log('1930: Ho Chi Minh Rises in Vietnam')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text(" Ho Chi Minh Rises in Vietnam ",0,0,width,25);
  textSize(20)
  text(" Date: Feb. 2 ",0,25,width,25);
  textSize(20)
  text(" Location: Hanoi ",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Ho Chi Minh founded the Communist Party of Vietnam as part of his effort to oust French colonial occupiers. He was known as “Uncle Ho” to the people who supported him, he opposed the autocracy and people were inspired by him as there were parallels between him and the Russian Bolsheviks to fight against foreign occupiers. ",0,100,width,100);}
    
    //1932: Emu war
  //ellipse(100,375,30,30)
if(mouseX<100+15 && mouseX>100-15 && mouseY<375+15 && mouseY>375-15){
  console.log(' Emu war ')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Emu war",0,0,width,25);
  textSize(20)
  text("2 November – 10 December 1932 " ,0,25,width,25);
  textSize(20)
  text("Location: Australia",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("The Austrailia goverment sends some of their army to kill emus. this plan was executed due to complaints from farmers about emus destroying thier crops ",0,100,width,100);}    
    
//1931: Empire State Building Completed
   //ellipse(420,215,20,20) 
if(mouseX<40+15 && mouseX>40-15 && mouseY<275+15 && mouseY>275-15){
  console.log('1930: Ho Chi Minh Rises in Vietnam')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text(" Ho Chi Minh Rises in Vietnam ",0,0,width,25);
  textSize(20)
  text(" Date: Feb. 2 ",0,25,width,25);
  textSize(20)
  text(" Location: Hanoi ",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("Ho Chi Minh founded the Communist Party of Vietnam as part of his effort to oust French colonial occupiers. He was known as “Uncle Ho” to the people who supported him, he opposed the autocracy and people were inspired by him as there were parallels between him and the Russian Bolsheviks to fight against foreign occupiers. ",0,100,width,100);}
    
    //1932: Emu war
  //ellipse(100,375,30,30)
if(mouseX<100+15 && mouseX>100-15 && mouseY<375+15 && mouseY>375-15){
  console.log(' Emu war ')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("Emu war",0,0,width,25);
  textSize(20)
  text("2 November – 10 December 1932 " ,0,25,width,25);
  textSize(20)
  text("Location: Australia",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text("The Austrailia goverment sends some of their army to kill emus. this plan was executed due to complaints from farmers about emus destroying thier crops ",0,100,width,100);}
    
//1933: FDR Elected //1935: FDR Launches New Deal
   //ellipse(410,230,20,20)  
if(mouseX<410+10 && mouseX>410-10 && mouseY<230+10 && mouseY>230-10){
  console.log('1933: FDR Elected')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text(" 1933: FDR Elected ",0,0,width,25);
  textSize(20)
  text(" Date: March 12 " ,0,25,width,25);
  textSize(20)
  text(" Location: Washington D.C ",0,50,width,25);
  line(0,75,width,75)
  textSize(15)
  text(" On March 12 1933 Franklin D. Roosevelt also known as FDR was elected US president to combat the depression.Franklin D. Roosevelt started to give Fireside chats where the US president in a more casual manner explained the decision they made and he explained why he closed the banks. He gave people in the US a hope that they will leave the depression with his fireside chats. The purpose, he explains, is to curb panic rushes of withdrawals, which has been hurting efforts to stabilize the banking system. ",0,100,width,100);
stroke(5)
  textSize(25)
  text(" 1935: FDR Launches New Deal ",0,200,width,25);
  textSize(20)
  text("Date: Aug. 14 " ,0,225,width,25);
  textSize(20)
  text("Location: Washington D.C.",0,250,width,25);
  line(0,275,width,275)
  textSize(15)
  text(" President Roosevelt, grappling with the Great Depression, signs into law his signature Social Security Act, a law that creates the country's first retirement security system. In Roosevelt's New Deal policy he also included the Work Progress Administration, another 3 letter agency. It was an economic stimulus program, it did that by giving millions of people jobs to build the infrastructure and decrease unemployment. ",0,300,width,100);
}   
    
//1933 Hitler Elected Chancellor //1934: Hitler Consolidates Power
//ellipse(595,190,20,20)  
    if(mouseX<595+10 && mouseX>595-10 && mouseY<190+10 && mouseY>190-10){
  console.log(' 1934: Hitler Consolidates Power ')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text(" Date: June 30 ",0,0,width,25);
  textSize(20)
  text(" Location: Berlin " ,0,25,width,25);
  textSize(20)
  text(" Germans, began to embrace the ideas of the Nationalist Socialist Workers Party – the Nazi Party. It became the largest party after the 1932 elections. After President Paul von Hindenburg dies in 1934, Hitler purges members of his own party – the bloody Night of the Long Knives – with the help of Nazi storm troopers and becomes the unquestioned leader of Germany. ",0,50,width,25);
}   
//1938: Anti-Semitism Surges
//ellipse(615,190,20,20) 
if(mouseX<615+10 && mouseX>615-10 && mouseY<190+10 && mouseY>190-10){
console.log(' Anti-Semitism Surges ')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("1938: Anti-Semitism Surges",0,0,width,25);
  textSize(20)
  text(" Date: Nov. 9 " ,0,25,width,25);
  textSize(20)
  text(" Growing anti-Semitic scapegoating amid Germany's crippling economic conditions culminates in the Kristallnacht, or 'Night of Broken Glass', a program sparked by a speech from German propaganda minister Joseph Goebbels. Storm troopers and other Nazi groups are ordered to attack and destroy Jewish businesses, homes, and houses of worship. In one night of attacks in Germany, Austria, and the German-speaking area of the Sudetenland in Czechoslovakia, dozens of Jews are killed and tens of thousands are rounded up and sent to concentration camps. ",0,50,width,25);
}
    
//1939: World War II Starts
//ellipse(575,202,28,28)     
if(mouseX<575+14 && mouseX>575-14 && mouseY<202+14 && mouseY>202-14){
console.log(' World War II Starts ')
  Info_Display = true
  rectMode(CORNER)
  background(239, 228, 213);
  stroke(5)
  textSize(25)
  text("World War II Starts",0,0,width,25);
  textSize(20)
  text(" Date: Sept 1" ,0,25,width,25);
  textSize(20)
  text(" Location: Westerplatte, Poland" ,0,25,width,25);
  textSize(20)
  text("The first shots of World War II are when German battleships fire on a Polish stronghold in Westerplatte. Germany attacks Poland surrounding Warsaw who surrenders 26 days after being attacked on their harbor.",0,50,width,25);}   
    
}
  if (Slide==4){
//1940: McDonald's Founded
    //ellipse(330,235,20,20)
    
//1945: comunist republics established in soviet occupied territory after the end of World War 2....
    //ellipse(630,195,45,45) 
    
    //1950: Korean war (sometimes thought of as the start of the cold war)
    //ellipse(90,225,35,35) 
    
}
  if (Slide==5){
}
  if (Slide==6){
 
}
  if (Slide==7){
  
}
  if (Slide==8){
  
}
  if (Slide==9){
  
}
  if (Slide==10){
  
}
}
