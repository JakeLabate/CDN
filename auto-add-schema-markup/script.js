const tagToSchema = {
	'ul': 'ItemList',
	'ol': 'ItemList',
	'dl': 'ItemList',
	'li': 'ListItem',
	'dt': 'ListItem',
	'dd': 'ListItem',
	'header': 'WPHeader',
	'footer': 'WPFooter',
	'section': 'WebPageElement',
	'nav': 'SiteNavigationElement',
	'article': 'Article',
	'img': 'ImageObject',
	'table': 'Table',
	'video': 'VideoObject',
	'audio': 'AudioObject',
	'blockquote': 'CreativeWork',
	'q': 'CreativeWork',
	'time': 'DateTime',
	'address': 'ContactPoint',
};

function type(el, type) {

	el.setAttribute('itemscope', '');
	el.setAttribute('itemtype', 'http://schema.org/' + type);

}
function id(el, type) {

	// ensure string & convert to camelCase
	function camelCase(input) {
		input = String(input);
		return input
		.toLowerCase()
		.split(' ')
		.map((word, index) => index ? word.charAt(0).toUpperCase() + word.slice(1) : word)
		.join('');
	}

	const metaId = document.createElement('meta');
	metaId.setAttribute('itemprop', 'identifier');

	let id;

	switch (el) {
		case el.id:
			id = el.id;
			break;
		case el:
			// random base36 string
			id = Math.random().toString(36).substring(2, 15);
	}
	
	metaId.setAttribute('content', `id#${camelCase(type)}-${camelCase(id)}`);
	el.appendChild(metaId);

}

for (const [tag, itemtype] of Object.entries(tagToSchema)) {
	document.querySelectorAll(tag).forEach(el => {

		type(el, itemtype);
		id(el, itemtype);

		switch(el) {

			case 'ListItem':
				el.setAttribute('itemprop', 'itemListElement');
				break;

			case 'DateTime':
				el.setAttribute('itemprop', 'temporal');
				break;

			case 'ImageObject':
				el.setAttribute('itemprop', 'url');
				el.setAttribute('itemprop', 'contentUrl');
				break;

			case 'CreativeWork':
				el.setAttribute('itemprop', 'text');
				if (el.hasAttribute('cite')) {
					const metaId = document.createElement('meta');
					metaId.setAttribute('itemprop', 'archivedAt');
					metaId.setAttribute('content', el.getAttribute('cite'));
					el.appendChild(metaId);
				}
				break;

		}
	});
}

// just for testing convenience // not using the schema.org validator as it only checks source code (not DOM code)
const googleTest = 'https://search.google.com/test/rich-results?url='
console.log(`${googleTest}${window.location.href}`);
