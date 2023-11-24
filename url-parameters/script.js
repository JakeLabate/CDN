document.addEventListener("DOMContentLoaded", function() {

	// get the url parameters in the window href
	const urlParams = new URLSearchParams(window.location.search);

	// loop through the url parameters
	for (const [param, value] of urlParams) {

		// for each parameter name, find the elements with the attributes jl-url-param
		const elements = document.querySelectorAll(`[jl-url-param="${param}"]`);

		// loop through the elements
		for (const element of elements) {

			// set the element's innerHTML to the value of the url parameter
			element.innerHTML = value;

		}

	}

});