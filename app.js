const info = document.querySelector("#infoText");
const buttons = [...document.querySelector("#buttons").children];
let prevDev = "iPhone";

document.addEventListener("DOMContentLoaded", () => {
  applyDynamicCSS(bgColors.black);
  info.innerHTML = getHtmlMarkup("iPhone");

  const swiper = new Swiper(".swiper-container", {
    effect: 'custom',
    intialSlide: 1,
    slidesPerView: window.matchMedia("(min-width: 600px)").matches ? 3 : 1,
    direction: window.matchMedia("(min-width: 600px)").matches ? "vertical" : "horizontal",
    centeredSlides: true,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let lastActiveSlideIndex = 0;
  swiper.on('slideChangeTransitionStart', () => {
    var activeSlide = swiper.slides[swiper.activeIndex];

    swiper.activeIndex > lastActiveSlideIndex ?
      activeSlide.classList.add('animated-slide') :
      activeSlide.classList.add('animated-slide-back');

    setTimeout(_ => {
      activeSlide.classList.remove('animated-slide');
      activeSlide.classList.remove('animated-slide-back');
      lastActiveSlideIndex = swiper.activeIndex;
    }, 1000)
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const color = button.id;
      const device = button.getAttribute("data-device");

      updateTextContent(device);
      applyDynamicCSS(bgColors[color]);

      const slideIndex = parseInt(button.getAttribute("data-slide"));
      swiper.slideTo(slideIndex);
    });
  });
});
