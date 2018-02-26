//localStorage
function localStorageSave(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}
function localStorageFetch(key) {
	return JSON.parse(localStorage.getItem(key)) || {}
}

//define font-size
function fontSize(value) {
	let html = document.documentElement;
	let hWidth = html.getBoundingClientRect().width;
	html.style.fontSize = hWidth / value + "px";
}

export {localStorageSave,localStorageFetch,fontSize}