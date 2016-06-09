

var index60 = document.getElementById('ind60');
var indImg = document.getElementsByClassName('imgIndx')[0];
var picsRow = document.getElementsByClassName('pic-row')[0];
var stuffinBox = document.getElementById('box');
var clear = document.getElementById('clearTracks');
var submitt = document.getElementById('submitButt')
var outPost = document.getElementById('outPost')


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//
var request = new XMLHttpRequest();
request.onreadystatechange = function(){
   if(request.readyState === 4 && request.status < 400){

     var userSearch = JSON.parse(request.responseText);
     var enter = userSearch.results
     console.log("enter: ",enter);

     var usedPhoto = []
     for (var i = 0; i < 3; i++) {
         var coverArt = enter[getRandomInt(0, 5)].cover_art;
         while (usedPhoto.indexOf(coverArt) != -1) {
           coverArt = enter[getRandomInt(0, 5)].cover_art;
         }
           usedPhoto.push(coverArt)
           var add = document.createElement("img");
           add.id="imgIndx"+(i+1);
           add.src ="images/"+coverArt;
           console.log("add.src: ", add);
           indImg.appendChild(add);
         }

        }
     }
request.open("GET", "https://lit-fortress-6467.herokuapp.com/object");
request.send();
//
//************************************************
     var request2 = new XMLHttpRequest();
     request2.onreadystatechange = function(){
       if(request2.readyState === 4 && request2.status < 400){
         var user2 = JSON.parse(request2.responseText);
         var enter2 = user2.results;

         function addClick(peram){
         peram.addEventListener("click",function(){
          var add3 = document.createElement("p");
          add3.innerHTML = peram.id;
          stuffinBox.appendChild(add3)
          })
      }
       for (var i = 0; i < enter2.length; i++) {
             var cover2 = enter2[i].cover_art;
             var add2 = document.createElement("img");
             add2.className = "firstpgimg"
             add2.id=enter2[i].artist+": "+enter2[i].title
             add2.src = "images/"+cover2
             picsRow.appendChild(add2)
             addClick(add2)
       }
     }
   }
   request2.open("GET", "https://lit-fortress-6467.herokuapp.com/object");
   request2.send();
//
// ***************************
submitt.addEventListener("click",callback);
function callback(){
  var requestOut = new XMLHttpRequest();
  requestOut.onreadystatechange=function(){
    if (requestOut.readyState == 4 && requestOut.status == 200) {
    }
    outPost.innerHTML = requestOut.responseText;
  }
  requestOut.open("POST", "https://lit-fortress-6467.herokuapp.com/post", true);
  requestOut.send()
}

//*****clear button**
clear.addEventListener("click",function(){
  box.innerHTML=""
  outPost.innerHTML=""
})
