

/////// Ambulance functions

window.onscroll = function () { displayAmbulance() };

// Get the ambulancePosition
var ambulancePosition = document.querySelector('.ambulance');
// console.log(ambulancePosition);
// Get the offset position of the ambulancePosition
var sticky = ambulancePosition.offsetTop;

// Add the sticky class to the ambulancePosition when you reach its scroll position. Remove "sticky" when you leave the scroll position
function displayAmbulance() {
  document.querySelector(".ambulance").style.opacity = "1";
  if (window.pageYOffset >= 1.8 * sticky) {
    ambulancePosition.classList.remove("hidden");
  } else {
    ambulancePosition.classList.add("hidden");
  }
}

function scrollWin(x, y) {
  window.scrollBy(0, 900);
}


// Story card popping out and X,Y axis adjustment

var screenmin700 = window.matchMedia("(min-width: 700px)")      

// function storylefthover(x_pos) {
//   if (screenmin700.matches) {
//     x_pos.style.transform = 'scale(1.3) translateX(30px)';
//     x_pos.style.transitionDuration = "500ms";
//   }
// }

// function storyrighthover(x_pos) {
//   if (screenmin700.matches) {
//     x_pos.style.transform = 'scale(1.3) translateX(-30px)';
//     x_pos.style.transitionDuration = "500ms";
//   }
// }

// function reset_tranforms(x_pos) {
//   {
//     x_pos.style.transform = 'scale(1) translateX(0)';
//   }
// }