document.addEventListener('DOMContentLoaded', function() {

	const faviconCache = {};

	function getFaviconURLFromPath(url) {
		const link = document.createElement('a').href = url;
		return link.protocol + '//' + link.hostname + '/favicon.ico';
	}
	function getFaviconURLFromGoogle(url) {
		const link = document.createElement('a').href = url;
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
	function resentOnMouseout(link) {
		link.addEventListener('mouseout', function() {
			link.style.cursor = 'auto';
		});
	}

	function setCursorStyle(link) {

		let href = link.href.split('#')[0].split('?')[0];
		const faviconUrl = getFaviconURLFromPath(href);
		const googleUrl = getFaviconURLFromGoogle(href);

		testImage(faviconUrl, function(exists) {
			if (exists) {
				link.style.cursor = 'url(' + faviconUrl + '), auto';
			} else if (googleUrl) {
				link.style.cursor = 'url(' + googleUrl + '), auto';
			} else {
				link.style.cursor = 'pointer';
			}
		});
		resentOnMouseout(link);

	}

	const links = document.querySelectorAll('a');
	links.forEach(link => {
		setCursorStyle(link);
	});

});