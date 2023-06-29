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

function apRmCls(elem, name, duration = 1500) {
	elem.classList.add(name);
	setTimeout(_ => elem.classList.remove(name), duration);
}

