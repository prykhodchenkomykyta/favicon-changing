let timer;
let title = "This Icon Will Change";

function changeTitle (icon, text) {
	document.querySelector('head title').innerHTML = text;
	document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}

window.onblur = () => {
	timer = setTimeout(() => {
		changeTitle('./cake.ico', 'Come back!!!');
	}, 5000)
	
}

window.onfocus = () => {
	clearTimeout(timer);
	changeTitle('./icon.ico', title);
}