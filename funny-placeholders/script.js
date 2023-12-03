document.addEventListener('DOMContentLoaded', function() {
	const defaultFunnyPlaceholders = [
		'miss you...', 'a value was here...', 'fill me up buttercup',
		'full of emptiness', 'there once was a value here...', 'bruh', '??',
		'fill me in', 'bruh im empty', 'uhh hello?', 'psstt full fields are overrated',
		'dude there was just a value here...', 'bro where u go',
		'baby come back...', 'y u no like this field?'
	];

	// Select script element
	const funnyPlaceholdersScript = document.querySelector('script[src="https://cdn.jakelabate.com/funny-placeholders/script.js"]');

	// Get funny placeholders from script element, fall back to default if none
	let funnyPlaceholders;
	try {
		const placeholdersFromScript = funnyPlaceholdersScript ? JSON.parse(funnyPlaceholdersScript.getAttribute('data-funny-placeholders')) : [];
		funnyPlaceholders = placeholdersFromScript.length > 0 ? placeholdersFromScript : defaultFunnyPlaceholders;
	} catch (e) {
		console.error('Error parsing funny placeholders: ', e);
		funnyPlaceholders = defaultFunnyPlaceholders;
	}

	// Update placeholder function
	function updatePlaceholder(element) {
		element.addEventListener('input', function() {
			if (this.value === '') {
				const randomIndex = Math.floor(Math.random() * funnyPlaceholders.length);
				this.setAttribute('placeholder', funnyPlaceholders[randomIndex]);
			}
		});
	}

	// Process elements
	const elements = document.querySelectorAll('input, textarea');
	elements.forEach(element => {
		if (element.getAttribute('jl-funny-placeholder') === 'skip') {
			return;
		}

		const elementType = element.nodeName.toLowerCase();
		const inputType = element.getAttribute('type');

		if (elementType === 'input' && ['date', 'time', 'datetime-local', 'month', 'week', 'datetime', 'color'].includes(inputType)) {
			return;
		}

		updatePlaceholder(element);
	});
});