import org.openkinect.processing.*;
// Kinect Library object
Kinect kinect;
float minThresh = 480;
float maxThresh = 830;
PImage img;
void setup() {
  size(512, 424);
  kinect = new Kinect(this);
  kinect.initDepth();
  img = createImage(kinect.width, kinect.height, RGB);
}
void draw() {
  background(0);
  img.loadPixels();
  
  //minThresh = map(mouseX, 0, width, 0, 4500);
  //maxThresh = map(mouseY, 0, height, 0, 4500);
  
  // Get the raw depth as array of integers
  int[] depth = kinect.getRawDepth();
  
  
  for (int x = 0; x < kinect.width; x++) {
    for (int y = 0; y < kinect.height; y++) {
      int offset = x + y * kinect.width;
      int d = depth[offset];
      if (d > minThresh && d < maxThresh && x > 100) {
        img.pixels[offset] = color(255, 0, 150);
         
      
        
      } else {
        img.pixels[offset] = color(0);
      }  
    }
  }
  img.updatePixels();
  image(img, 0, 0);
  
}
void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      angle++;
    } else if (keyCode == DOWN) {
      angle--;
    }
    angle = constrain(angle, 0, 30);
    kinect.setTilt(angle);
  } else if (key == 'a') {
    minDepth = constrain(minDepth+10, 0, maxDepth);
  } else if (key == 's') {
    minDepth = constrain(minDepth-10, 0, maxDepth);
  } else if (key == 'z') {
    maxDepth = constrain(maxDepth+10, minDepth, 2847);
  } else if (key =='x') {
    maxDepth = constrain(maxDepth-10, minDepth, 2847);
  } else if (key =='o') {
    on = 1;
    alpha = 30;
  } 
  else if (key =='p') {
    on = 0;
    alpha = 0;
  } 
}