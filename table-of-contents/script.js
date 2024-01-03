document.addEventListener("DOMContentLoaded", function() {

	const placementAttribute = 'jl-table-of-contents';

	let headingLinks = '';

	const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
	headings.forEach(heading => {

		let id;
		switch (heading.id) {
			case true:
				id = heading.id;
				break;
			case false:
				id = heading.innerText.toLowerCase().replace(/ /g, "-");
				heading.id = id;
				break;

		}

		const a = document.createElement('a');
		a.href = '#' + id;
		a.title = heading.innerText;
		a.innerHTML = heading.innerText;
		a.className = 'jl-table-of-contents-link ' + heading.nodeName;
		headingLinks += a.outerHTML;

	});

	document.querySelector(`[${placementAttribute}="true"]`).innerHTML = headingLinks

});