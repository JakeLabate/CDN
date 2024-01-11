document.addEventListener("DOMContentLoaded", function () {

	const xhr = new XMLHttpRequest();
	xhr.open("POST", 'https://services.jakelabate.com/og-image', true);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log(xhr.responseText);
		}
	}

	const payload = {
		title: document.title || document.querySelector('h1').innerText,
		logoUrl: document.querySelector('img').src,
		imageUrl: document.querySelector('img').src,
		textColor: '#000000',
		backgroundColor: '#ffffff',
	};

	xhr.send(JSON.stringify(payload));

});