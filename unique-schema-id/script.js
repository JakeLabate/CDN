// set default values
function id(type = 'Thing', identifier = 'PLACEHOLDER') {

	// ensure string & convert to camelCase
	function camelCase(input) {
		input = String(input);
		return input
		.toLowerCase()
		.split(' ')
		.map((word, index) => index ? word.charAt(0).toUpperCase() + word.slice(1) : word)
		.join('');
	}

	// construct & return schema @id
	return 'id#' + camelCase(type) + '-' + camelCase(identifier);

}