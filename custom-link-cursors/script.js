document.addEventListener("DOMContentLoaded", function () {

	const hostname = window.location.hostname;
	const parts = hostname.split('.');
	const currentDomain = parts.length > 2 ? parts.slice(-2).join('.') : hostname;

	const links = document.querySelectorAll('a');
	links.forEach(linkElement => {

		// determine background color of link
		const linkBackgroundColor = window.getComputedStyle(linkElement).backgroundColor;
		const rgb = linkBackgroundColor.match(/\d+/g) || [255, 255, 255]; // Fallback to white if format is unexpected
		const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
		const bgCategory = brightness < 125 ? 'light' : 'dark';

		// set link color
		let linkColor;
		switch(bgCategory) {
			case 'dark': linkColor = 'light'; break;
			case 'light': linkColor = 'dark'; break;
		}

		// determine link type
		const linkType = determineLinkType(linkElement.href, currentDomain);

		// determine link size
		const scriptTag = document.getElementById('custom-link-18px');
		let cursorSize = scriptTag.getAttribute('data-cursor-size') || '22px'; // default to 22px
		if (!cursorSize.endsWith('px')) cursorSize += 'px';

		// set cursor
		linkElement.style.cursor = `url('https://cdn.jakelabate.com/custom-link-cursors/cursors/${cursorSize}/${linkType}-${linkColor}.svg'), auto`;

	});
});

function determineLinkType(href, currentDomain) {
	const currentUrl = window.location.href.split('?')[0];

	if (href.includes('facebook.com')) return 'facebook';
	if (href.includes('twitter.com') || href.includes('x.com')) return 'x';
	if (href.includes('instagram.com')) return 'instagram';
	if (href.includes('linkedin.com')) return 'linkedin';
	if (href.includes('youtube.com')) return 'youtube';
	if (href.includes('tiktok.com')) return 'tiktok';
	if (href.includes('mailto:')) return 'email';
	if (href.includes('tel:')) return 'phone';
	if (href.includes('sms:')) return 'sms';
	if (href.startsWith('#') || href.includes(currentUrl) || href.includes('#')) return 'section';
	if (href.includes(currentDomain)) return 'internal';
	if (isExternalLink(href, currentDomain)) return 'external';

	return 'unknown';
}

function isExternalLink(href, currentDomain) {
	const domainRegex = /https?:\/\/(?:www\.)?[^\/]+/;
	const match = domainRegex.exec(href);
	return match && match[0] !== `https://${currentDomain}` && match[0] !== `http://${currentDomain}`;
}
