document.addEventListener("DOMContentLoaded", function() {

	// get all the url parameters
	const urlParams = new URLSearchParams(window.location.search);
	for (const [param, value] of urlParams) {

		// place the param values in the elements
		const elements = document.querySelectorAll(`[jl-url-parameter="${param}"]`);
		for (const element of elements) {
			element.innerHTML = value;
		}

	}

});