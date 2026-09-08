// document.querySelector("button").addEventListener("click", handleClick) //here, target is the "button". Target specifies where the evenet is taking place, in our case the event is the click of a button.
// //if you notice, above the function handleClick is called without (). To find out why, loo at the undemy course video at est. time stamp 6:00 minutes.

// function handleClick() {
//     alert("I got clicked!");
// }

//The same above we can write below using an 'anonymous function' and further adding a for loop for all the buttons:

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    //alert("I got clicked!");

    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    // this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;

    switch(buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
          break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
          break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
          break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
          break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
          break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
          break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
          break;

        default: console.log();

    }
        



}) //here, target is the "button". Target specifies where the evenet is taking place, in our case the event is the click of a button.
//if you notice, above the function handleClick is called without (). To find out why, loo at the undemy course video at est. time stamp 6:00 minutes.
}







