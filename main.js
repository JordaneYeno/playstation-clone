var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("miniature");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 8 seconds


//   active les miniatures
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




//with selector


var slide = 1;
show(slide);

// Next/previous controls
function plusSlides(n) {
  show(slide += n);
}

// Thumbnail image controls
function currentSlide(n) {
  show(slide = n);
}

function show(n) {
  var i;
  var slides = document.getElementsByClassName("slide__product");
  var dots = document.getElementsByClassName("solid");
  if (n > slides.length) {slide = 1}
  if (n < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].style.display = "block";
  dots[slide-1].className += " active";

}

function test() {
  alert('bonjour');
}





var select = document.getElementsByClassName("gadget__play");
var go = document.getElementById('go');

select.onclick = function () {
  alert('bonjour');
}

document.getElementsByClassName('select').addEventListener('click', function () {
   alert('allo');
});