difference=0;

leftwristx=0;
rightwristx=0;

function setup(){


    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function modelloaded(){
    console.log("posenet is loaded");
}

 function gotPoses(results){
     if (results.length>0) {
         console.log(results);

         leftwristx=results[0].pose.leftWrist.x;
         rightwristx=results[0].pose.rightWrist.x;

         difference=floor(leftwristx-rightwristx);
     }
 }


 function draw(){
     background('#6C91C2');

     textSize(difference);
     fill('#FFE787');
     text('Text',50,400);
 }