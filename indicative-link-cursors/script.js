document.addEventListener("DOMContentLoaded", function () {

	function getCurrentDomain() {
		const hostname = window.location.hostname;
		const parts = hostname.split('.');
		return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
	}
	function getCursorSize() {
		const scriptTag = document.querySelector('script[src="https://cdn.jakelabate.com/indicative-link-cursors/script.js"]');
		let cursorSize = scriptTag.getAttribute('data-cursor-size') || '22'; // default to 22px
		return cursorSize.endsWith('px') ? cursorSize : cursorSize + 'px';
	}
	function determineLinkType(href, currentDomain) {

		function isExternalLink(href, currentDomain) {
			const domainRegex = /https?:\/\/(?:www\.)?[^\/]+/;
			const match = domainRegex.exec(href);
			return match && match[0] !== `https://${currentDomain}` && match[0] !== `http://${currentDomain}`;
		}

		const linkTypeMappings = {
			'facebook.com': 'facebook',
			'twitter.com': 'x',
			'x.com': 'x',
			'instagram.com': 'instagram',
			'linkedin.com': 'linkedin',
			'youtube.com': 'youtube',
			'tiktok.com': 'tiktok',
			'mailto:': 'email',
			'tel:': 'phone',
			'sms:': 'sms'
		};

		// check if the href contains any of the social media references
		for (const [key, value] of Object.entries(linkTypeMappings)) {
			if (href.includes(key)) return value;
		}

		// check if the href is a section link, internal link, or external link
		const currentUrl = window.location.href.split('?')[0];
		if (href.startsWith('#') || href.includes(currentUrl)) return 'section';
		if (href.includes(currentDomain)) return 'internal';
		if (isExternalLink(href, currentDomain)) return 'external';

		// fallback to 'unknown'
		return 'unknown';
	}
	function determineLinkColor(linkElement) {
		const linkBackgroundColor = window.getComputedStyle(linkElement).backgroundColor;
		const rgb = linkBackgroundColor.match(/\d+/g) || [255, 255, 255];
		const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
		return brightness < 125 ? 'light' : 'dark';
	}
	function setCustomCursor(linkElement, cursorSize, linkType, linkColor) {
		const cursorColor = linkColor === 'dark' ? 'light' : 'dark';
		linkElement.style.cursor = `url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/${cursorSize}/${linkType}-${cursorColor}.svg'), auto`;
	}

	const domain = getCurrentDomain();
	const cursorSize = getCursorSize();

	document.querySelectorAll('a').forEach(link => {
		const linkType = determineLinkType(link.href, domain);
		const linkColor = determineLinkColor(link);
		setCustomCursor(link, cursorSize, linkType, linkColor);
	});

});