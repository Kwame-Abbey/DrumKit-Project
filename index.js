// alert("Ablordey Morgan")
let allButtons = document.querySelectorAll("button");

// for (var i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener("click", function(){
//         console.log(this.innerHTML)
//     })
// }

allButtons.forEach((button) => {
  button.addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML
    // console.log(buttonInnerHTML)
    makeSound(buttonInnerHTML)
    // console.log(this.innerHTML)
    animation(buttonInnerHTML)
  });
});

document.addEventListener("keydown", (event) => {
    makeSound(event.key)
    // console.log(event.key)
    animation(event.key)
})

function makeSound(key) {
  switch (key) {
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
  
   
    default:
        console.log(key);
   }
  
}

function animation(currentKey) {
    var buttonClicked = document.querySelector("." + currentKey)

    buttonClicked.classList.add("pressed")

    setTimeout( () => {
        buttonClicked.classList.remove("pressed")
    }, 100)
}
