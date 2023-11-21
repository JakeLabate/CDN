document.addEventListener('DOMContentLoaded', function() {

	// Cache to store tested URLs and their favicon existence
	const faviconCache = {};

	// Function to get favicon URL from path
	function getFaviconURLFromPath(url) {
		const link = document.createElement('a');
		link.href = url;
		return link.protocol + '//' + link.hostname + '/favicon.ico';
	}

	// Function to get favicon URL from Google's service
	function getFaviconURLFromGoogle(url) {
		const link = document.createElement('a');
		link.href = url;
		return 'https://www.google.com/s2/favicons?domain=' + link.hostname;
	}

	// Function to test if an image exists
	function testImage(url, callback) {
		if (faviconCache.hasOwnProperty(url)) {
			callback(faviconCache[url]);
			return;
		}

		let img = new Image();
		img.onload = function() {
			faviconCache[url] = true;
			callback(true);
		};
		img.onerror = function() {
			faviconCache[url] = false;
			callback(false);
		};
		img.src = url;
	}

	// Function to set cursor style
	function setCursorStyle(link, url, fallbackUrl) {
		testImage(url, function(exists) {
			if (exists) {
				link.style.cursor = 'url(' + url + '), auto';
			} else if (fallbackUrl) {
				// Try the fallback URL if the first one fails
				setCursorStyle(link, fallbackUrl, null);
			} else {
				link.style.cursor = 'pointer';
			}
		});
	}

	// Attach event listeners to each <a> tag
	document.querySelectorAll('a').forEach(function(link) {
		link.addEventListener('mouseover', function() {

			// Get the URL without the hash or query string
			let href = link.href.split('#')[0].split('?')[0];

			// Try standard favicon path first, then Google's service as a fallback
			const faviconPath = getFaviconURLFromPath(href);
			const googlePath = getFaviconURLFromGoogle(href);
			setCursorStyle(link, faviconPath, googlePath);

		});

		// Reset cursor on mouseout
		link.addEventListener('mouseout', function() {
			link.style.cursor = 'auto';
		});

	});

});