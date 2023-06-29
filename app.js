document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper(".swiper-container", {

		effect: 'custom', // Set the effect to 'custom'
		translate: (swiper, { progress }) => {
			const cubicBezier = 'cubic-bezier(0.4, 0, 0.2, 1)';
			swiper.wrapperEl.style.transitionTimingFunction = cubicBezier;

			// Calculate the animation progress based on the timing function
			const animationProgress = CubicBezierProgress(progress, cubicBezier);

			// Customize the animation using the progress value
			const x = -300 * animationProgress;
			const y = -100 * animationProgress;

			return `translate(${x}px, ${y}px)`;
		},
		intialSlide: 1,
		slidesPerView: 2,
		direction: "vertical",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
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