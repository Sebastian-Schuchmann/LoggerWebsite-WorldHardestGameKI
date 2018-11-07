
var config = {
     apiKey: "AIzaSyAOwjiiquNsKE4IjOtJZJBhzCXBCD-TnsY",
    authDomain: "whg-ai.firebaseapp.com",
    databaseURL: "https://whg-ai.firebaseio.com",
    storageBucket: "whg-ai.appspot.com"
};


firebase.initializeApp(config);
var bg;
var playerimg;
var bSlider;
var database = firebase.database();
var dataWHG_100 = {x: [], y: []}
var dataWHG_3 = {x: [], y: []}
var rSlider;
function preload(){
      bg = loadImage("Background.jpg");
 img = loadImage("Player.png");
     img2 = loadImage("Player Kopie 2.png");
    
   
    
}
 
function setup() {
  createCanvas(2014/2,1264/2);
rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 20);
    bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 40);
    r2Slider = createSlider(0, 255, 0);
  r2Slider.position(20, 60);
    b2Slider = createSlider(0, 255, 255);
  b2Slider.position(20, 80);
  background(bg);
   //noLoop();
    
    frameRate(5);
      firebase.database().ref('WorldHardestGameip-172-31-32-11/').once('value', function(snapshot){
  snapshot.forEach(function(data){
 //      firebase.database().ref('WorldHardestGameip-172-31-35-82/').once('value', function(snapshot){
 // snapshot.forEach(function(data){
   //  console.log(dataWHG_3);;
      dataWHG_3.x.push(data.val().X);
      dataWHG_3.y.push(data.val().Y);
  //  console.log(data.val().Death_Position_X);
   //   console.log(data.val().Death_Position_Y);
   //   console.log(data.val().TimeStamp);
      
  });
        })
         //  console.log("LENGTH: " + dataWHG.x.length);
   
  
   // console.log(JSON.stringify(dataWHG))
  //console.log(dataWHG_3);
  

//    
// //        firebase.database().ref('WorldHardestGameip-172-31-32-11/').once('value', function(snapshot){
// // snapshot.forEach(function(data){
//      firebase.database().ref('WorldHardestGameip-172-31-35-82/').once('value', function(snapshot){
//  snapshot.forEach(function(data){
//      
//      dataWHG_100.x.push(data.val().Death_Position_X);
//      dataWHG_100.y.push(data.val().Death_Position_Y);
//  //  console.log(data.val().Death_Position_X);
//   //   console.log(data.val().Death_Position_Y);
//   //   console.log(data.val().TimeStamp);
//      
//  });
//         //  console.log("LENGTH: " + dataWHG.x.length);
//   
//  
//   // console.log(JSON.stringify(dataWHG))
// // console.log(dataWHG);
//})
   

}

function draw() {
  background(bg);
    translate(487, 333)
    scale(50.0,-50.0);
    var r = rSlider.value();
    var b = bSlider.value();
      var r2 = r2Slider.value();
    var b2 = b2Slider.value();
 //   console.log(r);
//console.log(int(map(r, 0, 255 , 0, dataWHG.x.length-1)));
   //    console.log(dataWHG.x.length);
//     for(let i=int(map(b, 0, 255 , 0, dataWHG_100.x.length-1)); i > int(map(r, 0, 255 , 0, dataWHG_100.x.length-1)); i--)
//     {
//      //   console.log("DATA:" + dataWHG.x[i]);
//           image(img, dataWHG_100.x[i], dataWHG_100.y[i], img.width/100, img.height/100);  
//   }
    
       for(let i=int(map(b2, 0, 255 , 0, dataWHG_3.x.length-1)); i > int(map(r2, 0, 255 , 0, dataWHG_3.x.length-1)); i--)
     {
      //   console.log("DATA:" + dataWHG.x[i]);
         image(img2, dataWHG_3.x[i], dataWHG_3.y[i], img2.width/100, img2.height/100);  
   }

}
