document.addEventListener("DOMContentLoaded", function() {

	const placementAttribute = 'jl-url-parameter';

	const urlParams = new URLSearchParams(window.location.search);
	urlParams.forEach((param, value) => {

		const elements = document.querySelectorAll(`[${placementAttribute}='${param}']`);
		elements.forEach(element => {
			element.innerHTML = value;
		});

	});

});


const urlParameters = new URLSearchParams(window.location.search);
urlParameters.forEach((param, value) => {

});
