let xhr = new XMLHttpRequest();
xhr.open("GET", "https://services.jakelabate.com/og-image", true);

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) { // Request completed
		if(xhr.status === 200) { // Successfully received response
			const response = JSON.parse(xhr.responseText);
			console.log(response); // Process the response data
		} else {
			console.error('Error with request'); // Handle errors
		}
	}
};

xhr.send();