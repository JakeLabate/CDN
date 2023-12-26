document.addEventListener("DOMContentLoaded", function() {

	// get all the url parameters
	const urlParams = new URLSearchParams(window.location.search);
	urlParams.forEach((param, value) => {

		// place the param values in the elements
		const elements = document.querySelectorAll(`[jl-url-parameter="${param}"]`);
		elements.forEach(element => {
			element.innerHTML = value;
		});

	});

});