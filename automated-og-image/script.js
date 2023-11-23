
document.addEventListener("DOMContentLoaded", function () {

	// continue if no og:image
	function pageHasOGImage() {

		// select all in case there are multiple og:image tags
		const ogImages = document.querySelectorAll("[property='og:image']");

		let ogImagesArray = [];
		ogImages.forEach(ogImage => {
			// Check if ogImage is not null
			if (ogImage) {
				// Get og:image content value
				const ogImageContent = ogImage.getAttribute('content');
				if (ogImageContent) {
					ogImagesArray.push(ogImageContent);
				}
			}
		});

		// loop through all og:image tags
		ogImages.forEach((ogImage) => {

			// get og:image content value
			const ogImageContent = ogImage.getAttribute('content');

			// check value is not null
			if (ogImageContent) {

				// add value to array
				ogImagesArray.push(ogImageContent);

			}

		})

		// return true if ogImagesArray is not empty
		return ogImagesArray.length > 0

	}

	// get & determine generative variables
	async function logMetaData(url) {

		try {

			// Fetch HTML content of the specified URL
			const response = await fetch(url);
			const html = await response.text();
			console.log(html)

			// Create a virtual DOM to parse the HTML
			const parser = new DOMParser();
			const doc = parser.parseFromString(html, 'text/html');
			console.log(doc)

			// Select webpage metadata from the parsed document
			let titleTag;
			if (doc.querySelector('title')) { titleTag = doc.querySelector('title'); }

			let favicon;
			if (doc.querySelector('link[rel="icon"]') || doc.querySelector('link[rel="shortcut icon"]') || doc.querySelector('link[rel="apple-touch-icon"]')) { favicon = doc.querySelector('link[rel="icon"]'); }

			let metaTags;
			if (doc.getElementsByTagName('meta')) { metaTags = doc.getElementsByTagName('meta'); }

			// Get the metadata attributes
			const titleText = titleTag.textContent;
			const faviconUrl = favicon.getAttribute('href');
			let metaDesc, ogTitle, ogDesc; // Declare variables outside the switch statement

			// Get content of the primary meta tags
			Array.from(metaTags).forEach((metaTag) => {
				switch (metaTag.getAttribute('name') || metaTag.getAttribute('property')) {
					case 'description': metaDesc = metaTag.getAttribute('content'); break;
					case 'og:title': ogTitle = metaTag.getAttribute('content'); break;
					case 'og:description': ogDesc = metaTag.getAttribute('content'); break;
				}
			});

			// Construct variables used for generating the og:image
			let determinedFavicon = faviconUrl;
			let determinedTitle = titleText || ogTitle;
			let determinedDescription = metaDesc || ogDesc;
			let determinedUrl = url || window.location.hostname;

			// clean up variables
			if (determinedTitle.length > 70) {
				determinedTitle = determinedTitle.substring(0, 70) + '...';
			}
			if (determinedDescription.length > 200) {
				determinedDescription = determinedDescription.substring(0, 200) + '...';
			}
			determinedUrl = determinedUrl.split('?')[0];

			// prepare payload
			const payload = {
				url: determinedUrl,
				favicon: determinedFavicon,
				title: determinedTitle,
				description: determinedDescription
			};

		} catch (error) {
			console.error('Error fetching or parsing the HTML:', error);
		}
	}

	if (!pageHasOGImage()) {

		const url = window.location.href.split('?')[0];
		logMetaData(url).then(r => {

			console.log(payload);

		})

	}

});