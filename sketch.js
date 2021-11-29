//Mount Fuji trip 2017. Machine training: sign and no sign.
// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/DIjBAp3Fl/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = '';

let cherry;
let cherryY= [];
let cherryrise;
let starX = [];
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(640, 480);
  // Create the video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
  
  cherry = new CherryBlossom();
  cherryrise = new CherryBlossomRise();
  
  for(let i = 1; i < 10; i++){
    cherryY[i] = random(248, height);
  }
  for(let j = 1; j < 20; j++){
    starX[j] = random(width);
  }
  
}

function draw() {
  background(0, 255, 0);
  imageMode(CORNER);
  noStroke();
  angleMode(DEGREES);
  rectMode(CENTER);
  image(flippedVideo, 0, 0);
  if (label == 'sign') {
    //sky
      fill('#FBE8C9');
      rect(width/2, height/2, width, height);
      for(let angle=180; angle<360;angle+=2){
      push();
      translate(width/3,350);
      rotate(angle);
      stroke(255, 70);
      strokeWeight(20);
      line(0,0,width+50,0);
      pop();
      }
    push();
      fill('red');
      strokeWeight(5);
      stroke('#F7CD5D');
      circle(width/3, height/3, 150, 150);
    pop();
    
    //water
    fill('#F6CA97');
    rect(width/2, height-50, width, height/3);
    
    //water reflection
    push();
    scale(1, -1);
    translate(0, -700);
      beginShape();
      fill(255, 0, 0, 50);
      vertex(-100, height - 130);
      quadraticVertex(width/4, height - 250, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(2* width/3, height - 200, width, height - 130);
      endShape(CLOSE);
      fill(142, 22, 0, 50);
      beginShape();
      vertex(72, 260);
      quadraticVertex(width/4, height - 270, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(2*width/3-50, height - 250, 444, 266);
      quadraticVertex(2*width/3+20, height - 200, 350, 259);
      quadraticVertex(width/2, height - 240, 250, 260);
      quadraticVertex(width/3-100, height - 180, 72, 260);
      endShape(CLOSE);
      fill(255, 50);
      beginShape();
      vertex(153, 201);
      quadraticVertex(width/4+20, height - 303, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(width/2, height - 298, 384, 228);
      quadraticVertex(width/2 - 30, height - 300, 340, 250);
      quadraticVertex(width/3 + 20, height - 320, 280, 237);
      quadraticVertex(width/3, height - 280, 200, 270);
      quadraticVertex(width/3, height - 300, 94, 247);
      endShape(CLOSE);
    pop();
    
    fill('#A48C64');
      push();
      translate(62, 377);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 9, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
      push();
      translate(438, 425);
      scale(0.5, 0.5);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 11, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
      push();
      translate(148, 390);
      scale(1, 0.5);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 9, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
      push();
      translate(340, 436);
      scale(1.5, 0.25);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 11, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
      push();
      translate(-50, 438);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 9, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
    //mountain
    push();
    fill('#FF0000');
      beginShape();
      vertex(-100, height - 130);
      quadraticVertex(width/4, height - 250, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(2* width/3, height - 200, width, height - 130);
      endShape(CLOSE);
      fill('#8E1600');
      beginShape();
      vertex(72, 260);
      quadraticVertex(width/4, height - 270, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(2*width/3-50, height - 250, 444, 266);
      quadraticVertex(2*width/3+20, height - 200, 350, 259);
      quadraticVertex(width/2, height - 240, 250, 260);
      quadraticVertex(width/3-100, height - 180, 72, 260);
      endShape(CLOSE);
      fill(255);
      beginShape();
      vertex(153, 201);
      quadraticVertex(width/4+20, height - 303, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(width/2, height - 298, 384, 228);
      quadraticVertex(width/2 - 30, height - 300, 340, 250);
      quadraticVertex(width/3 + 20, height - 320, 280, 237);
      quadraticVertex(width/3, height - 280, 200, 270);
      quadraticVertex(width/3, height - 300, 94, 247);
      endShape(CLOSE);
    pop();
        //cherry blossom tree
    //branches
    fill('#623412');
    beginShape();
    vertex(width, 227);
    vertex(618, 188);
    vertex(601, 194);
    vertex(525, 151);
    vertex(466, 168);
    vertex(424, 141);
    vertex(466, 174);
    vertex(526, 161);
    vertex(606, 216);
    vertex(584, 205);
    quadraticVertex(550, 210, 551, 246);
    vertex(500, 237);
    vertex(470, 249);
    vertex(446, 241);
    vertex(435, 245);
    vertex(444, 244);
    vertex(460, 247);
    vertex(455, 252);
    vertex(462, 250);
    vertex(469, 253);
    vertex(463, 285);
    quadraticVertex(430, 300, 421, 295);
    vertex(419, 272);
    vertex(367, 280);
    vertex(358, 260);
    vertex(369, 240);
    vertex(337, 228);
    vertex(358, 241);
    vertex(352, 260);
    vertex(360, 276);
    vertex(336, 280);
    vertex(330, 269);
    quadraticVertex(305, 265, 297, 260);
    quadraticVertex(310, 270, 325, 274);
    vertex(335, 284);
    vertex(363, 284);
    quadraticVertex(380, 285, 411, 277);
    vertex(417, 300);
    quadraticVertex(445, 300, 462, 291);
    vertex(477, 254);
    vertex(501, 242);
    vertex(556, 254);
    quadraticVertex(560, 210, 583, 215)
    vertex(597, 225);
    vertex(610, 254);
    vertex(width, 261);
    vertex(width, 316);
    vertex(601, 344);
    vertex(563, 321);
    vertex(523, 334);
    vertex(496, 317);
    vertex(469, 328);
    vertex(493, 326);
    vertex(518, 341);
    vertex(488, 362);
    vertex(445, 340);
    vertex(493, 368);
    vertex(525, 341);
    vertex(561, 337);
    vertex(600, 359);
    vertex(627, 346);
    vertex(635, 389);
    vertex(625, 431);
    vertex(width, height);
    endShape();
    
    //leaves
    cherryrise.display2(498, 326);
    cherryrise.display2(487, 363);
    cherryrise.display(562, 321);
    cherryrise.display2(602, 355);
    cherryrise.display(365, 240);
    cherryrise.display2(356, 261);
    cherryrise.display(327, 270);
    cherryrise.display2(463, 290);
    cherryrise.display(470, 253);
    cherryrise.display2(414, 274);
    cherryrise.display(422, 297);
    cherryrise.display2(446, 240);
    cherryrise.display(500, 237);
    cherryrise.display(553, 247);
    cherryrise.display(520, 337);
    cherryrise.display(427, 143);
    cherryrise.display2(448, 152);
    cherryrise.display(463, 170);
    cherryrise.display(526, 156);
    cherryrise.display2(540, 175);
    cherryrise.display2(505, 164);
    cherryrise.display2(513, 135);
    cherryrise.display(582, 175);
    cherryrise.display(618, 184);
    cherryrise.display2(601, 153);
    cherryrise.display2(638, 169);
    cherryrise.display2(623, 213);
    
    //flowers falling effect
    for(let j = 1; j < 10; j++){
      let cherryX = 120 * (j + 2); 
      cherryrise.display(cherryX, cherryY[j]);
      cherryY[j]++;
      if(cherryY[j] > 345){
        cherryrise.displayReflect(cherryX, cherryY[j] + 40);
      }
      
    if (cherryY[j] > height) {
      cherryY[j] = 248;
    }
    }
      }
  else{ 
    //sky
      fill('#1D1D43');
      rect(width/2, height/2, width, height);
      push();
      translate(114, 50);
      fill(220);
      beginShape();
        vertex(0, 0);
        quadraticVertex(-60, 50, 20, 80);
        quadraticVertex(-30, 40, 0, 0);
      endShape(CLOSE);
      pop();
    
    //water
      fill('#79A1C3');
      rect(width/2, height-50, width, height/3);
    
    //stars and stars relections
      for(let i = 1; i < 20; i++){
        let starY = 25 * i;
        let diameter = random(1, 5);
        fill(255);
        circle(starX[i], starY, diameter);
        fill(255, 70);
        circle(starX[i], starY - 200, diameter);
      }
    
    //water reflection
    push();
    scale(1, -1);
    translate(0, -700);
      beginShape();
      fill(44, 79, 113, 50);
      vertex(-100, height - 130);
      quadraticVertex(width/4, height - 250, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(2* width/3, height - 200, width, height - 130);
      endShape(CLOSE);
      fill(116, 126, 154, 50);
      beginShape();
      vertex(72, 260);
      quadraticVertex(width/4, height - 270, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(2*width/3-50, height - 250, 444, 266);
      quadraticVertex(2*width/3+20, height - 200, 350, 259);
      quadraticVertex(width/2, height - 240, 250, 260);
      quadraticVertex(width/3-100, height - 180, 72, 260);
      endShape(CLOSE);
      fill(255, 50);
      beginShape();
      vertex(153, 201);
      quadraticVertex(width/4+20, height - 303, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(width/2, height - 298, 384, 228);
      quadraticVertex(width/2 - 30, height - 300, 340, 250);
      quadraticVertex(width/3 + 20, height - 320, 280, 237);
      quadraticVertex(width/3, height - 280, 200, 270);
      quadraticVertex(width/3, height - 300, 94, 247);
      endShape(CLOSE);
    pop();
      fill('#D4F1F9');
      push();
      translate(62, 377);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 9, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
      push();
      translate(438, 425);
      scale(0.5, 0.5);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 11, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
      push();
      translate(148, 390);
      scale(1, 0.5);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 9, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
      push();
      translate(340, 436);
      scale(1.5, 0.25);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 11, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
      push();
      translate(-50, 438);
      beginShape();
        vertex(0, 0);
        quadraticVertex(25, 10, 100, 5);
        quadraticVertex(100, 9, 150, 10);
        quadraticVertex(200, 2, 230, 5);
      endShape();
      pop();
    //mountain
      fill(44, 79, 113);
      beginShape();
      vertex(-100, height - 130);
      quadraticVertex(width/4, height - 250, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(2* width/3, height - 200, width, height - 130);
      endShape(CLOSE);
      fill(116, 126, 154);
      beginShape();
      vertex(72, 260);
      quadraticVertex(width/4, height - 270, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(2*width/3-50, height - 250, 444, 266);
      quadraticVertex(2*width/3+20, height - 200, 350, 259);
      quadraticVertex(width/2, height - 240, 250, 260);
      quadraticVertex(width/3-100, height - 180, 72, 260);
      endShape(CLOSE);
      fill(255);
      beginShape();
      vertex(153, 201);
      quadraticVertex(width/4+20, height - 303, width/3, height-350);
      quadraticVertex(width/3, height - 350, width/3 + 50, height - 340);
      quadraticVertex(width/3 + 55, height - 360, width/3+70, height - 330);
      quadraticVertex(width/2, height - 298, 384, 228);
      quadraticVertex(width/2 - 30, height - 300, 340, 250);
      quadraticVertex(width/3 + 20, height - 320, 280, 237);
      quadraticVertex(width/3, height - 280, 200, 270);
      quadraticVertex(width/3, height - 300, 94, 247);
      endShape(CLOSE);
    //cherry blossom tree
    //branches
    fill('#623412');
    beginShape();
    vertex(width, 227);
    vertex(618, 188);
    vertex(601, 194);
    vertex(525, 151);
    vertex(466, 168);
    vertex(424, 141);
    vertex(466, 174);
    vertex(526, 161);
    vertex(606, 216);
    vertex(584, 205);
    quadraticVertex(550, 210, 551, 246);
    vertex(500, 237);
    vertex(470, 249);
    vertex(446, 241);
    vertex(435, 245);
    vertex(444, 244);
    vertex(460, 247);
    vertex(455, 252);
    vertex(462, 250);
    vertex(469, 253);
    vertex(463, 285);
    quadraticVertex(430, 300, 421, 295);
    vertex(419, 272);
    vertex(367, 280);
    vertex(358, 260);
    vertex(369, 240);
    vertex(337, 228);
    vertex(358, 241);
    vertex(352, 260);
    vertex(360, 276);
    vertex(336, 280);
    vertex(330, 269);
    quadraticVertex(305, 265, 297, 260);
    quadraticVertex(310, 270, 325, 274);
    vertex(335, 284);
    vertex(363, 284);
    quadraticVertex(380, 285, 411, 277);
    vertex(417, 300);
    quadraticVertex(445, 300, 462, 291);
    vertex(477, 254);
    vertex(501, 242);
    vertex(556, 254);
    quadraticVertex(560, 210, 583, 215)
    vertex(597, 225);
    vertex(610, 254);
    vertex(width, 261);
    vertex(width, 316);
    vertex(601, 344);
    vertex(563, 321);
    vertex(523, 334);
    vertex(496, 317);
    vertex(469, 328);
    vertex(493, 326);
    vertex(518, 341);
    vertex(488, 362);
    vertex(445, 340);
    vertex(493, 368);
    vertex(525, 341);
    vertex(561, 337);
    vertex(600, 359);
    vertex(627, 346);
    vertex(635, 389);
    vertex(625, 431);
    vertex(width, height);
    endShape();
    
    //leaves
    cherry.display2(498, 326);
    cherry.display2(487, 363);
    cherry.display(562, 321);
    cherry.display2(602, 355);
    cherry.display(365, 240);
    cherry.display2(356, 261);
    cherry.display(327, 270);
    cherry.display2(463, 290);
    cherry.display(470, 253);
    cherry.display2(414, 274);
    cherry.display(422, 297);
    cherry.display2(446, 240);
    cherry.display(500, 237);
    cherry.display(553, 247);
    cherry.display(520, 337);
    cherry.display(427, 143);
    cherry.display2(448, 152);
    cherry.display(463, 170);
    cherry.display(526, 156);
    cherry.display2(540, 175);
    cherry.display2(505, 164);
    cherry.display2(513, 135);
    cherry.display(582, 175);
    cherry.display(618, 184);
    cherry.display2(601, 153);
    cherry.display2(638, 169);
    cherry.display2(623, 213);
    
    //flower falling effect
    for(let j = 1; j < 10; j++){
      let cherryX = 120 * (j + 2); 
      cherry.display(cherryX, cherryY[j]);
      cherryY[j]++;
      if(cherryY[j] > 345){
        cherry.displayReflect(cherryX, cherryY[j] + 40);
      }
      
    if (cherryY[j] > height) {
      cherryY[j] = 248;
    }
    }
      }
}
// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}

class CherryBlossom{
  display(x, y){
    push();
    fill('#ffb7c5');
    ellipse(x, y, 8, 30);
    ellipse(x, y, 30, 8);
    fill('#c8245c');
    ellipse(x, y, 5, 5);
    pop();
  }
  display2(x, y){
    push();
    fill('#ffb7c5');
    ellipse(x, y, 5, 20);
    ellipse(x, y, 20, 5);
    fill('#c8245c');
    ellipse(x, y, 5, 5);
    pop();
  }

  displayReflect(x, y){
    push();
    fill(255, 183, 197, 50);
    ellipse(x, y, 5, 20);
    ellipse(x, y, 20, 5);
    fill(200, 36, 92, 50);
    ellipse(x, y, 5, 5);
    pop();
  }
}

class CherryBlossomRise{
  display(x, y){
    push();
    fill('#fcc9b9');
    ellipse(x, y, 8, 30);
    ellipse(x, y, 30, 8);
    fill('#c8245c');
    ellipse(x, y, 5, 5);
    pop();
  }
  display2(x, y){
    push();
    fill('#fcc9b9');
    ellipse(x, y, 5, 20);
    ellipse(x, y, 20, 5);
    fill('#c8245c');
    ellipse(x, y, 5, 5);
    pop();
  }

  displayReflect(x, y){
    push();
    fill(252, 201, 185, 80);
    ellipse(x, y, 5, 20);
    ellipse(x, y, 20, 5);
    fill(200, 36, 92, 50);
    ellipse(x, y, 5, 5);
    pop();
  }
}