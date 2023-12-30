document.addEventListener("DOMContentLoaded", function () {

	function setCursorSize() {
		const scriptTag = document.querySelector('script[src="https://cdn.jakelabate.com/indicative-link-cursors/script.js"]');
		const cursorSize = scriptTag.getAttribute('data-cursor-size') || '22'; // default to 22px
		return cursorSize.endsWith('px') ? cursorSize : cursorSize + 'px';
	}
	function setLinkType(href) {

		function setCurrentDomain() {
			const hostname = window.location.hostname;
			const parts = hostname.split('.');
			return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
		}
		function isExternalLink(href, domain) {
			const domainRegex = /https?:\/\/(?:www\.)?[^\/]+/;
			const match = domainRegex.exec(href);
			return match && match[0] !== `https://${domain}` && match[0] !== `http://${domain}`;
		}

		const domain = setCurrentDomain();
		const externalLink = isExternalLink(href, domain);

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
		if (href.includes(domain)) return 'internal';
		if (externalLink) return 'external';

		// fallback to 'unknown'
		return 'unknown';
	}
	function setCursorColor(link) {
		const linkBackgroundColor = window.getComputedStyle(link).backgroundColor;
		const rgb = linkBackgroundColor.match(/\d+/g) || [255, 255, 255];
		const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
		return brightness > 125 ? 'light' : 'dark';
	}

	const size = setCursorSize();

	document.querySelectorAll('a').forEach(link => {

		const type = setLinkType(link.href);
		const color = setCursorColor(link);

		const cursorUrl = `https://cdn.jakelabate.com/indicative-link-cursors/cursors/${size}/${type}-${color}.svg`;
		link.style.cursor = `url(${cursorUrl}), auto`;

	});

});