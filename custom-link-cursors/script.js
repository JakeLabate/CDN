// waiting for DOM to load, as <a> tags might be added dynamically
document.addEventListener("DOMContentLoaded", function () {
	const currentDomain = getCurrentDomain();
	const cursorSize = getCursorSize();

	// execute on each <a> tag
	document.querySelectorAll('a').forEach(linkElement => {
		const linkType = determineLinkType(linkElement.href, currentDomain);
		const linkColor = determineLinkColor(linkElement);
		setCustomCursor(linkElement, cursorSize, linkType, linkColor);
	});
});

// get the current root domain (e.g. jakelabate.com)
function getCurrentDomain() {
	const hostname = window.location.hostname;
	const parts = hostname.split('.');
	return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
}

// get the cursor size from the script tag
function getCursorSize() {
	const scriptTag = document.getElementById('custom-link-cursors');
	let cursorSize = scriptTag.getAttribute('data-cursor-size') || '22'; // default to 22px
	return cursorSize.endsWith('px') ? cursorSize : cursorSize + 'px';
}

// determine the link type based on the href
function determineLinkType(href, currentDomain) {
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

// determine the desired link cursor color based on the link background color
function determineLinkColor(linkElement) {
	const linkBackgroundColor = window.getComputedStyle(linkElement).backgroundColor;
	const rgb = linkBackgroundColor.match(/\d+/g) || [255, 255, 255];
	const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
	return brightness < 125 ? 'light' : 'dark';
}

// set the custom cursor based on size, type, and color
function setCustomCursor(linkElement, cursorSize, linkType, linkColor) {
	const cursorColor = linkColor === 'dark' ? 'light' : 'dark';
	linkElement.style.cursor = `url('https://cdn.jakelabate.com/custom-link-cursors/cursors/${cursorSize}/${linkType}-${cursorColor}.svg'), auto`;
}

// check if the link is external to the current domain
function isExternalLink(href, currentDomain) {
	const domainRegex = /https?:\/\/(?:www\.)?[^\/]+/;
	const match = domainRegex.exec(href);
	return match && match[0] !== `https://${currentDomain}` && match[0] !== `http://${currentDomain}`;
}