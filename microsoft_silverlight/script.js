const bgNav =  document.querySelector("nav")

window.addEventListener("scroll", function(){
  if (pageYOffset >= 50) {
    bgNav.classList.remove("navbar")
    bgNav.classList.add("nav__script")
  }
  if (pageYOffset < 49){
    bgNav.classList.add("navbar")
    bgNav.classList.remove("nav__script")
  } 
});

