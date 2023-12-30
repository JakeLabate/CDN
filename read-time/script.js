document.addEventListener("DOMContentLoaded", function() {

	const readTimeAttribute = 'jl-read-time';

	const pageContent = document.body.innerText;
	const wordCount = pageContent.split(" ").length;
	const wordsPerMinute = 200;
	const readTimeInMinutes = Math.round(wordCount / wordsPerMinute);

	const elements = document.querySelectorAll(`[${readTimeAttribute}]`);
	elements.forEach(element => {
		element.innerHTML = `${readTimeInMinutes} minutes`;
	});

});
