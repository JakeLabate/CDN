document.addEventListener("DOMContentLoaded", function() {

	// get the h1-h6 elements, in order of appearance
	let headingArray = [];
	const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

	// loop through the headings
	for (const heading of headings) {

		// push the heading to the headingArray
		headingArray.push(heading);

	}

});