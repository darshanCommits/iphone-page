document.addEventListener("DOMContentLoaded", () => {
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


	swiper.on('slideChangeTransitionStart', function() {
		// Add animation class to the previous and active slides

		swiper.slides.forEach(function(slide) {
			slide.classList.remove('animated-slide');
		});
		var prevSlide = swiper.slides[swiper.previousIndex];
		var nextSlide = swiper.slides[swiper.activeIndex + 1];
		var activeSlide = swiper.slides[swiper.activeIndex];

		prevSlide.classList.add('animated-prev-slide');
		nextSlide.classList.add('animated-next-slide');
		activeSlide.classList.add('animated-active-slide');
	});


	// Add other options and configurations as needed
	const buttons = [...document.querySelector("#buttons").children];

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			console.log(button);

			const slideIndex = parseInt(button.getAttribute("data-slide"));
			swiper.slideTo(slideIndex);
		});
	});
});