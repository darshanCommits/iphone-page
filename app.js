const colors = {
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
