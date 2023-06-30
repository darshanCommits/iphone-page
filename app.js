document.body.style.transition = 'background 1s ease';
const buttons = [...document.querySelector("#buttons").children];
const bgColors = {
	black: 227,
	purple: 245,
	gold: 100,

}
document.addEventListener("DOMContentLoaded", () => {
	applyDynamicCSS(bgColors.black);
	const swiper = new Swiper(".swiper-container", {

		effect: 'custom', // Set the effect to 'custom'
		translate: (swiper, { progress }) => {
			const cubicBezier = 'cubic-bezier(0.4, 0, 0.2, 1)';
			swiper.wrapperEl.style.transitionTimingFunction = cubicBezier;

			// Calculate the animation progress based on the timing function
			const animationProgress = CubicBezierProgress(progress, cubicBezier);

			// Customize the animation using the progress value
			const x = 300;
			const y = 100;

			return `translate(${x}px, ${y}px)`;
		},
		intialSlide: 1,
		slidesPerView: 3,
		direction: "vertical",
		centeredSlides: true,
		allowTouchMove: false,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	let lastActiveSlideIndex = 0;
	swiper.on('slideChangeTransitionStart', function() {
		var activeSlide = swiper.slides[swiper.activeIndex];
		console.log(swiper.activeIndex)

		swiper.activeIndex > lastActiveSlideIndex ?
			activeSlide.classList.add('animated-slide') :
			activeSlide.classList.add('animated-slide-back');

		setTimeout(_ => {
			activeSlide.classList.remove('animated-slide');
			activeSlide.classList.remove('animated-slide-back');
			lastActiveSlideIndex = swiper.activeIndex;
		}, 1000)
	});


	// Add other options and configurations as needed

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			console.log(button.id);
			const color = button.id;

			applyDynamicCSS(bgColors[color]);

			const slideIndex = parseInt(button.getAttribute("data-slide"));
			swiper.slideTo(slideIndex);
		});
	});
});

function applyDynamicCSS(hue) {
	const saturation = '20%';
	const lightness = ['50%', '35%', '25%', '20%', '10%'];

	const colorHSL = `
     radial-gradient(circle at center,
      ${lightness.map((light) => `hsl(${hue}, ${saturation}, ${light})`).join(', ')}
    )
  `;
	document.body.style.backgroundImage = colorHSL;
}

