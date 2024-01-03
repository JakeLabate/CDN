document.addEventListener('DOMContentLoaded', function() {

	const copyAttribute = 'jl-copy-to-clipboard';
	const customTextAttribute = 'jl-copy-to-clipboard-text';
	const customCursorAttribute = 'jl-copy-to-clipboard-cursor';

	const customCursorUrl = 'https://cdn.jakelabate.com/copy-to-clipboard/copy-icon.svg';

	function copyContent(content) {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(content).then(() => { alert('Copied!'); })
		} else {
			const textarea = document.createElement('textarea');
			textarea.value = content;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea)
			alert('Copied!');
		}
	}

	function setCopyElement(element) {
		element.getAttribute(customCursorAttribute)? element.style.cursor = `url(${customCursorUrl}), auto` : null;
		element.addEventListener('click', function() {
			const customText = element.getAttribute(customTextAttribute);
			const content = customText || element.value || element.textContent || element.innerText || element.innerHTML;
			copyContent(content);
		});
	}

	document.querySelectorAll(copyAttribute).forEach(element => {
		setCopyElement(element);
	});

});