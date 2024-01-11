document.addEventListener("DOMContentLoaded", function () {

	const xhr = new XMLHttpRequest();
	xhr.open("POST", 'https://services.jakelabate.com/schema-markup', true);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log("Response:", xhr.responseText);
		} else {
			console.error("Request failed:", xhr.status);
		}
	}

	const payload = {
		name: document.title || document.querySelector('h1').innerText,
		url: window.location.href.split('?')[0].split('#')[0],
	};

	xhr.send(JSON.stringify(payload));

});


/*

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
	el.setAttribute('itemtype', 'https://schema.org/' + type);
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

// get & parse the JSON from localStorage
const stringifiedJSON = localStorage.getItem('autoAddSchemaMarkupStringified');
const variable = JSON.parse(stringifiedJSON);

// convert the parent key to 'variable'
console.log(variable);

// create the schema
const schema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${variable.company.url}#webSite`,
			"url": `${variable.company.url}`,
			"name": `${variable.company.name}`,
		},
		{
			"@type": "Organization",
			"@id": `${variable.company.url}#organization`,
			"url": `${variable.company.url}`,
			"name": `${variable.company.name}`,
			"brand": {
				"@type": "Brand",
				"@id": `${variable.company.url}#brand`,
				"url": `${variable.company.url}`,
				"name": `${variable.company.name}`,
			}
		},
		{
			"@type": "ItemPage",
			"@id": `${variable.page.url}#itemPage`,
			"url": `${variable.page.url}`,
			"name": `${variable.page.name}`,
			"isPartOf": {
				"@type": "WebSite",
				"@id": `${variable.company.url}#webSite`,
			}
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${variable.page.url}#breadcrumbList`,
			"name": `${variable.page.name}`,
			"itemListElement": [
				{
					"@type": "ListItem",
					"@id": `${variable.page.url}#breadcrumbItem`,
					"name": `${variable.page.name}`,
					"position": 1,
					"item": `${variable.page.url}`
				}
			]
		},
		{
			"@type": "Service",
			"@id": `${variable.page.url}#service`,
			"url": `${variable.page.url}`,
			"name": `${variable.page.name}`,
			"description": '',
			"serviceType": "SEO",
			"offers": {
				"@type": "Offer",
				"availability": "InStock"
			}
		},
		{
			"@type": "AggregateRating",
			"@id": `${variable.page.url}#aggregateRating`,
			"url": `${variable.page.url}`,
			"ratingCount": `${variable.company.rating.count}`,
			"ratingValue": `${variable.company.rating.value}`,
			"bestRating": 5,
			"itemReviewed": {
				"@type": "Product",
				"@id": `${variable.page.url}#product`,
				"url": `${variable.page.url}`,
				"name": `${variable.page.name}`,
				"aggregateRating": {
					"@id": `${variable.page.url}#aggregateRating`,
					"url": `${variable.page.url}`,
					"ratingCount": `${variable.company.rating.count}`,
					"ratingValue": `${variable.company.rating.value}`,
					"bestRating": 5,
				},
				"offers": {
					"@type": "AggregateOffer",
					"@id": `${variable.page.url}#aggregateOffer`,
					"url": `${variable.page.url}`,
					"lowPrice": `${variable.page.minPrice}`,
					"highPrice": `${variable.page.maxPrice}`,
					"priceCurrency": "USD"
				}
			}
		}
	]
}

// add the schema to the DOM
const script = document.createElement('script');
script.type = 'application/ld+json';
script.innerHTML = JSON.stringify(schema);
document.head.appendChild(script);

// for testing convenience
const googleTest = 'https://search.google.com/test/rich-results?url='
console.log(`${googleTest}${window.location.href}`);

 */