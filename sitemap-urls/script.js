document.addEventListener("DOMContentLoaded", function () {

	const xhr = new XMLHttpRequest();
	xhr.open("POST", 'https://services.jakelabate.com/sitemap-urls', true);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log("Response:", xhr.responseText);
		} else {
			console.error("Request failed:", xhr.status);
		}
	}

	const payload = {
		sitemap: 'https://wwwjakelabate.com/sitemap.xml'
	};

	xhr.send(JSON.stringify(payload));

});