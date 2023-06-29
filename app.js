/*const colors = {
	gray: 227,
	purple: 245,
	green: 115,
};
const setBackgroundColor = color =>
	document.documentElement.style.setProperty(
		"--current-bg-color",
		colors[color]
	);

console.log([...document.querySelector("#image").children].forEach(element => {
	element.addEventListener(setBackgroundColor)
}));

*/
const image = document.querySelector(".big-image")
const btns = [...document.querySelector("#btns").children].forEach(btn => {
	btn.addEventListener("click", _ => {
		changeAnim();
		image.style.animationPlayState = "running"
	})
})

image.addEventListener("animationend", () => {
	console.log(image.style.animationName);
});

function changeAnim() {
	image.classList.toggle("prevPhone");
	image.classList.toggle("nextPhone");
}