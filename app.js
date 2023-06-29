
/*const swiper = new Swiper(...);

const animationUp = ["btmToMid", "midToTop"];
const animationDown = ["topToMid", "midToBtm"];

const whichImage = (id) => {
	return document.querySelector(`#iphone__${id}`)
}
const btns = [...document.querySelector("#btns").children]
btns.forEach(btn => {
	btn.addEventListener("click", e => {
		const clickedButton = e.target;
		let image = whichImage(clickedButton.id);
		// console.log(image)
		changeAnim(image);
		image.style.animationPlayState = "running"
	})
})

image.addEventListener("animationend", () => {
	// console.log(image.style.animationName);
});

function changeAnim(image) {
	console.log(image)
	apRmCls(image, animationUp[0])
}


function changeAnim(imageDiv) {
	apRmCls(imageDiv, animationUp[0]);
}

function apRmCls(elem, name, duration = 1500) {
	elem.classList.add(name);
	setTimeout(function() {
		elem.classList.remove(name);
	}, duration);
}
function apRmCls(elem, name, duration = 1500) {
	elem.classList.add(name);
	setTimeout(_ => elem.classList.remove(name), duration);
}

*/



/*document.addEventListener("DOMContentLoaded", _ => {

	const swiper = new Swiper('.swiper', {
		direction: 'vertical',
		slidesPerView: 3,
		slidePrevClass: "prev",
		slideNextClass: "next",
		slideActiveClass: "active",
	});

	const blackButton = document.querySelector('#black');
	const purpleButton = document.querySelector('#purple');
	const goldButton = document.querySelector('#gold');

	blackButton.addEventListener('click', function() {
		swiper.slideNext(1500);
		console.log(swiper.slideNext(1500))
	});

	purpleButton.addEventListener('click', function() {
		const currentIndex = swiper.activeIndex;
		if (currentIndex === 0) {
			swiper.slideNext(1500);
		} else {
			swiper.slidePrev(1500);
		}
	});

	goldButton.addEventListener('click', function() {
		const currentIndex = swiper.activeIndex;
		if (currentIndex === 2) {
			swiper.slidePrev(1500);
		} else {
			swiper.slideNext(1500);
		}
	});

})
*/document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper('.swiper', {
		direction: 'vertical',
		slidesPerView: 3,
		slidePrevClass: "prev",
		slideNextClass: "next",
		slideActiveClass: "active",
	});

	const blackButton = document.querySelector('#black');
	const purpleButton = document.querySelector('#purple');
	const goldButton = document.querySelector('#gold');

	blackButton.addEventListener('click', () => {
		swiper.slideNext(1500);
		triggerAnimation('btmToMid', 'midToBtm');
	});

	purpleButton.addEventListener('click', () => {
		const currentIndex = swiper.activeIndex;
		if (currentIndex === 0) {
			swiper.slideNext(1500);
			triggerAnimation('btmToMid', 'midToBtm');
		} else {
			swiper.slidePrev(1500);
			triggerAnimation('topToMid', 'midToTop');
		}
	});

	goldButton.addEventListener('click', () => {
		const currentIndex = swiper.activeIndex;
		if (currentIndex === 2) {
			swiper.slidePrev(1500);
			triggerAnimation('topToMid', 'midToTop');
		} else {
			swiper.slideNext(1500);
			triggerAnimation('btmToMid', 'midToBtm');
		}
	});

	function triggerAnimation(activeClass, targetClass) {
		const activeSlide = swiper.slides[swiper.activeIndex];
		const targetSlide = swiper.slides[swiper.activeIndex + 1] || swiper.slides[swiper.activeIndex - 1];
		if (activeSlide && targetSlide) {
			activeSlide.classList.add(activeClass);
			targetSlide.classList.add(targetClass);
			setTimeout(() => {
				activeSlide.classList.remove(activeClass);
				targetSlide.classList.remove(targetClass);
			}, 1500);
		}
	}
});
