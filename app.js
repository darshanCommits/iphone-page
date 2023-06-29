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

const image = document.querySelector("#iphone__black")
image.addEventListener("click", _ => {
	image.style.animationPlayState = "running"
})
console.log(image.style.animationPlayState)
