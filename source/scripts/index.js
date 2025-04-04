/* в этот файл добавляет скрипты*/
/* в этот файл добавляет скрипты*/
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main-nav'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('main-nav--active');
  });
});

const sliderForm = document.querySelector('.slider__wrapper');

if (sliderForm) {
  const sliderButton = document.querySelector('.slider__button');
  const sliderBefore = document.querySelector('.slider__before');
  const sliderAfter = document.querySelector('.slider__after');


  sliderButton.ondragstart = function() {
    return false;
  };

  sliderButton.onmousedown = function(e) {
    e.preventDefault();
    const shiftX = e.clientX - sliderButton.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - sliderForm.getBoundingClientRect().left + 20;
      if (newLeft < 0) {
        newLeft = 0;
      }

      const rightEdge = sliderForm.offsetWidth - sliderButton.offsetWidth + 40;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      sliderButton.style.left = `${newLeft}px`;
      sliderBefore.style.clipPath = `inset(0 ${sliderForm.offsetWidth - newLeft}px 0 0)`;
      sliderAfter.style.clipPath = `inset(0 0 0 ${newLeft}px)`;
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  window.addEventListener('resize', () => {
    sliderButton.style.left = '50%';
    sliderBefore.style.clipPath = 'inset(0 50% 0 0)';
    sliderAfter.style.clipPath = 'inset(0 0 0 50%)';
  });
}
