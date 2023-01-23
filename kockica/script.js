/*Nije moje - button scroll left right */
function slide(direction) {
  var container = document.getElementById("container");
  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 350;
    } else {
      container.scrollLeft += 350;
    }
    scrollCompleted += 350;
    if (scrollCompleted >= 350) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
/*Skroll back na pocetak na refresh stranice */

function myFunction() {
  document.getElementById("pocetna").scrollIntoView();
}
myFunction();
