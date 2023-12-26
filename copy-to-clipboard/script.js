document.addEventListener('DOMContentLoaded', function() {

	// copy to clipboard action
	function copy(text) {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(text)
			.then(() => { alert('Copied!'); })
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = text;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			alert('Copied!');
		}
	}

	// select all elements with attribute
	const copyElements = document.querySelectorAll('[jl-copy-to-clipboard="true"]');
	copyElements.forEach(element => {

		// add click event
		element.addEventListener('click', function() {
			const customText = element.getAttribute('jl-copy-to-clipboard-text');
			const priorityList = customText || element.value || element.textContent || element.innerText || element.innerHTML;
			copy(priorityList);
		});

		// add cursor if attribute is true
		if (element.getAttribute('jl-copy-to-clipboard-cursor') === 'true') {
			element.style.cursor = "url('https://cdn.jakelabate.com/copy-to-clipboard/copy-icon.svg'), auto";
		}

	});
});