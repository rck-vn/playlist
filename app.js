
var button = document.getElementById('buttoni');
var divAlb1= document.getElementById('alb1');
var picsRow = document.getElementsByClassName('pic-row')[0];
var images = document.getElementsByClassName('fpimgs')[0];
var stuffinBox = document.getElementById('box');
var clear = document.getElementById('clearTracks');
var submitt = document.getElementById('submitButt')
var pBox = document.getElementById('demo')




function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// imgcntAll.innerHTML = "";

var request = new XMLHttpRequest();
request.onreadystatechange = function(){
   if(request.readyState === 4 && request.status < 400){

     var userSearch = JSON.parse(request.responseText);
     var enter = userSearch.results
console.log("enter: ",enter);

     var usedPhoto = []
     for (var i = 0; i < 3; i++) {
         var coverArt = enter[getRandomInt(0, 5)].cover_art;
          // console.log("cover: ",coverArt);
         while (usedPhoto.indexOf(coverArt) != -1) {
           coverArt = enter[getRandomInt(0, 5)].cover_art;
         }
           usedPhoto.push(coverArt)
           var add = document.createElement("img");
           add.id='img'+(i+1);

           add.src ="images/"+coverArt;
           divAlb1.appendChild(add);
         }

        }
     }
request.open("GET", "https://lit-fortress-6467.herokuapp.com/object");
request.send();


     var req2 = new XMLHttpRequest();
     req2.onreadystatechange = function(){
       if(req2.readyState === 4 && req2.status < 400){
         var user2 = JSON.parse(req2.responseText);
         var enter2 = user2.results;
        //  var title = enter2[0].title


         function addClick(peram){
         peram.addEventListener("click",function(){
          var add3 = document.createElement("p");

          add3.innerHTML = peram.id;

          stuffinBox.appendChild(add3)
          console.log("stuffinBox: ", stuffinBox);
})
      }
       for (var i = 0; i < enter2.length; i++) {
           var cover2 = enter2[i].cover_art;
              // console.log(cover2);

             var add2 = document.createElement("img");
             add2.className = "fpimgs"
             add2.id=enter2[i].artist+": "+enter2[i].title
             add2.src = "images/"+cover2
             picsRow.appendChild(add2)

             addClick(add2)
             console.log("add2.id: ", add2.id);
             console.log("add2.src: ", add2.src);
       }
     }
   }
   req2.open("GET", "https://lit-fortress-6467.herokuapp.com/object");

   req2.send();

clear.addEventListener("click",function(){
  box.innerHTML=""
})
////
submitt.addEventListener("click",callback);
function callback(){
  var difReq = new XMLHttpRequest();
  difReq.onreadystatechange=function(){
    if (difReq.readyState == 4 && difReq.status == 200) {
    var u = JSON.parse(difReq.responseText);
    }
    pBox.innerHTML = difReq.responseText;
  }
  difReq.open("POST", "https://lit-fortress-6467.herokuapp.com/post", true);
  difReq.send()
}
