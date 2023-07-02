const buttons = [...document.querySelector("#buttons").children];
const title = document.querySelector("#title");
const heading = document.querySelector("#heading");
const para = document.querySelector("#para");

let prevDev = "iPhone";
function updateTextContent(device) {
  if (prevDev === device) return;
  console.log(prevDev);
  const deviceText = textToRender[device];
  const info = document.querySelector("#info");
  info.classList.add("fade-in");

  setTimeout(() => {
    info.classList.remove("fade-in");
    info.classList.add("ease-in");
    title.textContent = device;
    heading.textContent = deviceText.heading;
    para.textContent = deviceText.para;
  }, 400);
  prevDev = device;
}

document.addEventListener("DOMContentLoaded", () => {
  applyDynamicCSS(bgColors.black);
  const swiper = new Swiper(".swiper-container", {

    effect: 'custom', // Set the effect to 'custom'
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
  // if (window.matchMedia("(max-width: 600px)")) {
  swiper.on('slideChangeTransitionStart', function() {
    var activeSlide = swiper.slides[swiper.activeIndex];
    console.log(swiper.activeIndex);

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
