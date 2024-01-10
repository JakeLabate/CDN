const xhr = new XMLHttpRequest();
xhr.open("GET", 'https://services.jakelabate.com/og-image', true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		console.log(xhr.responseText);
	}
};

xhr.send(JSON.stringify({
	title: document.title || document.querySelector('h1').innerText,
	logoUrl: document.querySelector('img').src,
	imageUrl: document.querySelector('img').src,
	textColor: '#000000',
	backgroundColor: '#ffffff',
}));