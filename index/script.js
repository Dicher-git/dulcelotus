window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    }, 4600);
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav_bar") {
      x.className += " responsive";
    } else {
      x.className = "nav_bar";
    }
    
    }
  