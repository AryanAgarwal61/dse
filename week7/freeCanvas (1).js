document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
function start() {
	document.addEventListener("mousemove", logKey);
}
function stop() {
	document.removeEventListener("mousemove",logKey);
}
function logKey(e) {
	let point = document.createElement("span")
	let y = e.clientY - 35
	let x = e.clientX
	point.innerHTML = "."
	point.style.position = "absolute"
	point.style.fontWeight = "darker"
	point.style.top = y + "px";
	point.style.left = x + "px";
	document.body.appendChild(point)
	point.style.userSelect = "none"
}
