// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


var config = {
    apiKey: "AIzaSyABWZVNXSKq7iv5sx2LTAp85xxfA_t1BAA",
    authDomain: "basketball-tf.firebaseapp.com",
    databaseURL: "https://basketball-tf.firebaseio.com",
    storageBucket: "basketball-tf.appspot.com",
};


firebase.initializeApp(config);
var bg;
var playerimg;
var database = firebase.database();
var dataWHG = {x: [], y: []}

function preload(){
      bg = loadImage("Background.jpg");
 img = loadImage("Player.png");
    
   
}
 
function setup() {
  createCanvas(2014/2,1264/2);

  background(bg);
   noLoop();
    
    
   

}

function draw() {
  background(bg);
    translate(487, 333)
    scale(50.0,-50.0);
    
      firebase.database().ref('WorldHardestGameip-172-31-35-82/').once('value', function(snapshot){
  snapshot.forEach(function(data){
      
      dataWHG.x.push(data.val().Death_Position_X);
      dataWHG.y.push(data.val().Death_Position_Y);
    console.log(data.val().Death_Position_X);
      console.log(data.val().Death_Position_Y);
      
      
  });
           console.log("LENGTH: " + dataWHG.x.length);
    
     for(let i=0; i < dataWHG.x.length; i++)
     {
         console.log("DATA:" + dataWHG.x[i]);
           image(img, dataWHG.x[i], dataWHG.y[i], img.width/100, img.height/100);  
   }
  
    
  console.log(dataWHG);
})
    

}

