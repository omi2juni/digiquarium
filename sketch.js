var xpos;
var ypos;
//var animal = ["🐟" ,"🐠","🪼","🐡", "🐟"];
var clownf;
var bwfish;
var redfish;
var starf;
var yellowf;

var fishesCl = [];
var fishesBW = [];
var fishesRED = [];
var fishesYEL = [];

var checkbox1;
var checkbox2;
var checkbox3;
var checkbox4;

var cloudbg;
var waterbg;
var popup;

function preload(){
  waterbg = loadImage('assets/underwater.gif');
  //popup = loadImage('assets/windowalt.png');
  clownf = loadImage('assets/underwater/clown.gif');
  bwfish = loadImage('assets/underwater/bwfish.gif');
  redfish = loadImage('assets/underwater/redfish.gif');
  starf = loadImage('assets/underwater/starfish.png');
  yellowf = loadImage('assets/underwater/yellowfish.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  checkbox1 = createCheckbox("🤡");
  checkbox2 = createCheckbox("🐠");
  checkbox3 = createCheckbox("🐟🔴");
  checkbox4 = createCheckbox("🐟🟡");
  
  
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = '#222222';
  
}

function draw() {
  background(220);
  
  image(waterbg, 0,0, windowWidth, windowHeight);

   for (let i=0; i<fishesCl.length; i++){
      var currentObjCl = fishesCl[i];

       fishclown(currentObjCl.xpos, currentObjCl.ypos);

     
     
     currentObjCl.xpos -= 1.5;
     currentObjCl.ypos += sin(frameCount*0.05);
     // xpos[i] = lerp(xpos[i], xpos[i] += xspeed[i], 0.6);
     if (currentObjCl.xpos < -100){
      //fishesCl.splice(i,1);
      currentObjCl.xpos = windowWidth+50;
     }
   }
  
   for (let i=0; i<fishesBW.length; i++){
      var currentObjBW = fishesBW[i];

       fishbw(currentObjBW.xpos, currentObjBW.ypos);

     currentObjBW.xpos -= 1.5;
     currentObjBW.ypos += sin(frameCount*0.05);
     // xpos[i] = lerp(xpos[i], xpos[i] += xspeed[i], 0.6);
     if (currentObjBW.xpos < -100){
      currentObjBW.xpos = windowWidth+50;
     }
   }
  
     for (let i=0; i<fishesRED.length; i++){
      var currentObjRED = fishesRED[i];

       fishred(currentObjRED.xpos, currentObjRED.ypos);

     currentObjRED.xpos -= 1.5;
     currentObjRED.ypos += sin(frameCount*0.05);
     // xpos[i] = lerp(xpos[i], xpos[i] += xspeed[i], 0.6);
     if (currentObjRED.xpos < -100){
      //fishesRED.splice(i,1);
      currentObjRED.xpos = windowWidth+50;
     }
   }
  
   for (let i=0; i<fishesYEL.length; i++){
      var currentObjYEL = fishesYEL[i];

       fishyellow(currentObjYEL.xpos, currentObjYEL.ypos);

     currentObjYEL.xpos -= 1.5;
     currentObjYEL.ypos += sin(frameCount*0.05);
     // xpos[i] = lerp(xpos[i], xpos[i] += xspeed[i], 0.6);
     if (currentObjYEL.xpos < -100){
      //fishesYEL.splice(i,1);
      currentObjYEL.xpos = windowWidth+50;
     }
   }
  

  
  
}

function fishclown(x, y){
  image(clownf, x, y, 75, 50);
}

function fishbw(x, y){
  image(bwfish, x, y, 120, 100);
}

function fishred(x, y){
  image(redfish, x, y, 95, 65);
}

function fishyellow(x, y){
  image(yellowf, x, y, 95, 65);
}

function mousePressed(){
  
  var clFish = {
    xpos: mouseX,
    ypos: mouseY,
  };
  
  var bwFish = {
    xpos: mouseX,
    ypos: mouseY,
  };
  
  var redFish = {
    xpos: mouseX,
    ypos: mouseY,
  };
  
  var yelFish = {
    xpos: mouseX,
    ypos: mouseY,
  };

  
  if (checkbox1.checked()){
  fishesCl.push(clFish);
    }
    if (checkbox2.checked()){
  fishesBW.push(bwFish);
    }
  if (checkbox3.checked()){
  fishesRED.push(redFish);
    }
  if (checkbox4.checked()){
  fishesYEL.push(yelFish);
    }
}