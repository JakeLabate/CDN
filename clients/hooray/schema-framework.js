const xhr = new XMLHttpRequest();
xhr.open("POST", 'https://services.jakelabate.com/og-image', true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
	console.log("Ready State:", xhr.readyState, "Status:", xhr.status);
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			console.log("Response:", xhr.responseText);
		} else {
			console.error("Request failed:", xhr.status);
		}
	}
};

const payload = {
	title: document.title || document.querySelector('h1').innerText,
	logoUrl: document.querySelector('img').src,
	imageUrl: document.querySelector('img').src,
	textColor: '#000000',
	backgroundColor: '#ffffff',
};

xhr.send(JSON.stringify(payload));