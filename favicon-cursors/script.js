document.addEventListener('DOMContentLoaded', function() {

	const faviconCache = {};

	function getFaviconURLFromPath(url) {
		const link = document.createElement('a');
		link.href = url;
		return link.protocol + '//' + link.hostname + '/favicon.ico';
	}
	function getFaviconURLFromGoogle(url) {
		const link = document.createElement('a');
		link.href = url;
		return 'https://www.google.com/s2/favicons?domain=' + link.hostname;
	}
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