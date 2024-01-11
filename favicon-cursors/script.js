document.addEventListener('DOMContentLoaded', function() {

	const faviconCache = {};

	function getFaviconURLFromPath(href) {
		const link = document.createElement('a').href = href;
		return link.protocol + '//' + link.hostname + '/favicon.ico';
	}
	function getFaviconURLFromGoogle(href) {
		const link = document.createElement('a').href = href;
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
	function setCursorStyle(link) {

		let href = link.href.split('#')[0].split('?')[0];
		const faviconUrl = getFaviconURLFromPath(href);
		const googleUrl = getFaviconURLFromGoogle(href);

		testImage(faviconUrl, function(exists) {
			switch (true) {
				case exists: link.style.cursor = 'url(' + faviconUrl + '), auto'; break;
				case googleUrl: link.style.cursor = 'url(' + googleUrl + '), auto'; break;
				default: link.style.cursor = 'pointer';
			}
		});

		link.addEventListener('mouseout', function() {
			link.style.cursor = 'auto';
		});

	}

	document.querySelectorAll('a').forEach(link => {
		setCursorStyle(link);
	});

});