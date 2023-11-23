document.addEventListener('DOMContentLoaded', function() {

	function copyToClipboard(text) {
		if (navigator.clipboard) {

			navigator.clipboard.writeText(text)
			.then(function() { alert('Copied!'); })

		} else {

			// fallback for older browsers
			const textarea = document.createElement('textarea');
			textarea.value = text;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			alert('Copied!');

		}
	}

	// select elements -> 'jl-copy-to-clipboard'
	const elements = document.querySelectorAll('[jl-copy-to-clipboard="true"]');
	elements.forEach(function(element) {

		// custom cursor if 'jl-copy-to-clipboard-cursor'
		if (element.getAttribute('jl-copy-to-clipboard-cursor') === 'true') {
			element.style.cursor = "url('https://cdn.jakelabate.com/copy-to-clipboard/copy-icon.svg'), auto";
		}

		// prioritizing 'jl-copy-to-clipboard-text' || if not copy the content
		element.addEventListener('click', function() {
			let copyText = element.getAttribute('jl-copy-to-clipboard-text') || element.value || element.textContent || element.innerText || element.innerHTML;
			copyToClipboard(copyText);
		});

	});

});