
// Sound on click
var noOfButtons = document.querySelectorAll(".drum").length; /*no. of buttons*/
for(var i=0; i<noOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    //  sound for click
        var buttonInner = this.innerHTML;
        makeSound(buttonInner);
        buttonAnimation(buttonInner);
    });
}

// making Sound On Key Press

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
    

// Function that makes sound

function makeSound (key){
    
    switch (key) {
     case "w":
         var audio = new Audio('sounds/tom-1.mp3');
         audio.play();
     break;
     case "a":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
     break;
     case "s":
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play();
     break;
     case "d":
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play();
     break;
     case "j":
         var audio = new Audio('sounds/snare.mp3');
         audio.play();
     break;
     case "k":
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
     break;
     case "l":
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
     break;
    
     default:console.log(buttonInner);
     break;
    }

}

// code for animation

function buttonAnimation(currentKey){
   var activeBtn= document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
   setTimeout(function(){             /*code for time out*/
activeBtn.classList.remove("pressed");
   },90)
}