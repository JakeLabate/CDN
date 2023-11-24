document.addEventListener("DOMContentLoaded", function() {

	// estimate the time it takes to read the page
	const pageContent = document.body.innerText;
	const wordCount = pageContent.split(" ").length;
	const wordsPerMinute = 200;
	const readTimeInMinutes = Math.round(wordCount / wordsPerMinute);

	// find the elements with the attribute jl-read-time
	const elements = document.querySelectorAll("[jl-read-time]");

	// loop through the elements
	for (const element of elements) {

		// set the element's innerHTML to the estimated read time
		element.innerHTML = `${readTimeInMinutes} minutes`;

	}

});