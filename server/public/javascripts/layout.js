
document.addEventListener("DOMContentLoaded", main);
var idx = 0;
var tabs = ['/', '/learn','/explore'];

function main() {
	idx = tabs.indexOf(window.location.pathname);
	document.addEventListener("keydown",keyboard, false);
}

function keyboard(e) {
	if (e.keyCode === 37) {
		idx = (idx===0) ? 0 : idx -1;
		window.location.pathname = tabs[idx];
	} else if (e.keyCode === 39) {
		idx = (idx===2) ? 2 : idx+1;
		window.location.pathname = tabs[idx];
	}
	
}