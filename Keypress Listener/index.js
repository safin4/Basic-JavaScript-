

for (var i =0; i < 3; i++) {

    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
       var text = this.innerHTML;
       console.log(text);
       audioPlay(text);
       playAnimation(text);

       
   

    });

}

document.addEventListener("keypress", function(event) {

  var text = event.key;
  audioPlay(text);
  playAnimation(text);

})

function audioPlay(text) {

    switch(text) {
        case "a":
          var audio = new Audio("songs/audio-1.mp3");
          audio.play();
          break;


          case "b":
          var audio = new Audio("songs/audio-2.mp3");
          audio.play();
          break;


          case "c":
          var audio = new Audio("songs/audio-3.mp3");
          audio.play();
          break;
     }

}


function playAnimation(text) {

   var selectedButton = document.querySelector("." + text);
   selectedButton.classList.add("anim");

   setTimeout(function () {

    selectedButton.classList.remove("anim");

   }, 1000);

}

var count = 0;
document.querySelector("textarea").addEventListener("keypress", function () {
  count++;
  var text = event.key;
  
  document.querySelector("p").innerHTML = "You have pressed " + count;

});