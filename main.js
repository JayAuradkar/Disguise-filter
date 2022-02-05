noseX=""
noseY=""
clown_nose=""
function preload(){
   clown_nose=loadImage("https://i.postimg.cc/85SVBFRP/Mustache-Man.png")
   
}
function setup(){
canvas = createCanvas(300, 300)
canvas.position(540, 200)
video = createCapture(VIDEO)
video.size(300,300)
video.hide()
posenet = ml5.poseNet(video,modelloaded)
posenet.on("pose",gotPoses)
} 
function draw(){
  image(video, 0 ,0, 300, 300)
  //fill("red")
  //stroke("red")
    //circle(noseX, noseY, 30);
    image(clown_nose, noseX, noseY, 80, 80)
}
function modelloaded() {
    console.log("This is working")
}
function gotPoses(result){
    console.log(result)
    noseX=result[0].pose.nose.x  
    noseY=result[0].pose.nose.y
}
