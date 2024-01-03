document.addEventListener("DOMContentLoaded", function () {

	const cursorSizeAttribute = 'jl-cursor-size';

	const linkTypes = Object.entries({
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
	});

	const size = setCursorSize();
	const domain = setCurrentDomain();

	function setCursorSize() {
		const scriptTag = document.querySelector('script[src="https://cdn.jakelabate.com/indicative-link-cursors/script.js"]');
		const cursorSize = scriptTag.getAttribute(cursorSizeAttribute) || '22'; // default to 22px
		return cursorSize.endsWith('px') ? cursorSize : cursorSize + 'px';
	}
	function setCurrentDomain() {
		const hostname = window.location.hostname;
		const parts = hostname.split('.');
		return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
	}

	function setLinkType(href) {

		// check for match
		for (const [key, value] of linkTypes) {
			if (href.toLowerCase().includes(key)) return value;
		}

		// check for external link
		const domainRegex = /https?:\/\/(?:www\.)?[^\/]+/;
		const match = domainRegex.exec(href);
		const isExternalLink = match && match[0] !== `https://${domain}` && match[0] !== `http://${domain}`;

		const currentUrl = window.location.href.split('?')[0];
		switch (currentUrl) {
			case href.startsWith('#') || href.includes(currentUrl): return 'section';
			case href.includes(domain): return 'internal';
			case isExternalLink: return 'external';
			default: return 'unknown';
		}

	}
	function setCursorColor(link) {
		const linkBackgroundColor = window.getComputedStyle(link).backgroundColor;
		const rgb = linkBackgroundColor.match(/\d+/g) || [255, 255, 255];
		const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
		return brightness > 125 ? 'light' : 'dark';
	}

	document.querySelectorAll('a').forEach(link => {
		const type = setLinkType(link.href);
		const color = setCursorColor(link);
		link.style.cursor = `url('https://cdn.jakelabate.com/indicative-link-cursors/cursors/${size}/${type}-${color}.svg'), auto`;
	});

});