var sliderImg = document.querySelectorAll('.slide');
var next = document.querySelector('.right');
var prev = document.querySelector('.left');
function right() {
  for (var i = 0; i < sliderImg.length; i++) {
    if (sliderImg[i].classList.contains('active')) {
      sliderImg[i].className = sliderImg[i].className.replace('active', '');
      sliderImg[i].className = sliderImg[i].className.replace('animated', '');
      i++;
      if (i == sliderImg.length) {
        i = 0;
      }
      sliderImg[i].className += 'active ';
      sliderImg[i].className += ' animated';
    }
  }
}
function left() {
  for (var i = sliderImg.length - 1; i >= 0; i--) {
    if (sliderImg[i].classList.contains('active')) {
      sliderImg[i].className = sliderImg[i].className.replace('active', '');
      sliderImg[i].className = sliderImg[i].className.replace('animated', '');
      if (i == 0) {
        i = sliderImg.length - 1;
      } else {
        i--;
      }

      sliderImg[i].className += 'active ';
      sliderImg[i].className += ' animated';
    }
  }
}
next.addEventListener('click', right);
prev.addEventListener('click', left);

setInterval(function () {
  right();
}, 10000);
