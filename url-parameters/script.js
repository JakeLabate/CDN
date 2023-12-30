document.addEventListener("DOMContentLoaded", function() {

	const urlParametersAttribute = 'jl-url-parameter';

	const urlParams = new URLSearchParams(window.location.search);
	urlParams.forEach((param, value) => {

		const elements = document.querySelectorAll(`[${urlParametersAttribute}='${param}']`);
		elements.forEach(element => {
			element.innerHTML = value;
		});

	});

});