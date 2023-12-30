document.addEventListener('DOMContentLoaded', function() {

	const scriptTag = document.querySelector('script[src="https://cdn.jakelabate.com/funny-placeholders/script.js');
	const nsfwAttribute = scriptTag.getAttribute('funny-placeholder-nsfw');

	const skipInputAttribute = 'funny-placeholder-skip';

	const funnyPlaceholders = [
		'miss you...',
		'a value was here...',
		'fill me up buttercup',
		'full of emptiness',
		'there once was a value here...',
		'bruh',
		'??',
		'fill me in',
		'bruh im empty',
		'uhh hello?',
		'psstt full fields are overrated',
		'dude there was just a value here...',
		'bro where u go',
		'baby come back...',
		'y u no like this field?'
	];
	const nsfwPlaceholders = [
		'yea, fuck this field',
		'please fill in this fucking field',
		'try again dumbass',
		'dude wtf?',
		'are you going to fill it in or not, dumbass?',
		"lmao did you're dumbass spell it wrong?",
	];

	const placeholdersArray = nsfwAttribute ? nsfwPlaceholders : funnyPlaceholders;

	function setFunnyPlaceholder(element) {
		element.addEventListener('input', function() {
			if (element.value === '') {
				const random = Math.floor(Math.random() * placeholdersArray.length);
				element.placeholder = placeholdersArray[random];
			}
		});
	}

	document.querySelectorAll('input, textarea').forEach(element => {
		switch (element) {
			case element.getAttribute(skipInputAttribute):
			case element.type = 'date':
			case element.type = 'time':
			case element.type = 'datetime-local':
			case element.type = 'month':
			case element.type = 'week':
			case element.type = 'datetime':
			case element.type = 'color':
				return;
			default: setFunnyPlaceholder(element);
		}
	});

});