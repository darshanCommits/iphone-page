const image = document.querySelector(".big-image")
const animationUp = ["btmToMid", "midToTop"];
const animationDown = ["topToMid", "midToBtm"];

const whichImage = () => {

}
const btns = [...document.querySelector("#btns").children]
btns.forEach(btn => {
	btn.addEventListener("click", e => {
		const clickedButton = e.target;
		console.log(clickedButton.id)
		changeAnim(clickedButton.id);
		image.style.animationPlayState = "running"
	})
})

image.addEventListener("animationend", () => {
	console.log(image.style.animationName);
});

function changeAnim(id) {
	const image = document.querySelector(`#iphone__${id}`);
	console.log(image)
	apRmCls(image, "btmToMid")
}

function apRmCls(elem, name, duration = 1500) {
	elem.classList.add(name);
	setTimeout(_ => elem.classList.remove(name), duration);
}

