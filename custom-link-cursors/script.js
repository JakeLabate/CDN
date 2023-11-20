document.addEventListener("DOMContentLoaded", function () {

	// get current domain
	const hostname = window.location.hostname;
	const parts = hostname.split('.');
	const currentDomain = parts.length > 2 ? parts.slice(-2).join('.') : hostname;

	// determine cursor size
	const scriptTag = document.getElementById('custom-link-cursors');
	let cursorSize = scriptTag.getAttribute('data-cursor-size') || '22';
	if (!cursorSize.endsWith('px')) cursorSize += 'px';

	// get links -> for each link -> computer
	const links = document.querySelectorAll('a');
	links.forEach(linkElement => {

		const href = linkElement.href;
		const currentUrl = window.location.href.split('?')[0];

		// determine link type
		let linkType;
		if (href.includes('facebook.com')) { linkType = 'facebook'; } else
		if (href.includes('twitter.com') || href.includes('x.com')) { linkType = 'x'; } else
		if (href.includes('instagram.com')) { linkType = 'instagram'; } else
		if (href.includes('linkedin.com')) { linkType = 'linkedin'; } else
		if (href.includes('youtube.com')) { linkType = 'youtube'; } else
		if (href.includes('tiktok.com')) { linkType = 'tiktok'; } else
		if (href.includes('mailto:')) { linkType = 'email'; } else
		if (href.includes('tel:')) { linkType = 'phone'; } else
		if (href.includes('sms:')) { linkType = 'sms'; } else
		if (href.startsWith('#') || href.includes(currentUrl) || href.includes('#')) { linkType = 'section'; } else
		if (href.includes(currentDomain)) { linkType = 'internal'; } else
		if (isExternalLink(href, currentDomain)) { linkType = 'external'; } else
		linkType = 'unknown';

		// determine background color of link -> then set color of link cursor
		const linkBackgroundColor = window.getComputedStyle(linkElement).backgroundColor;
		const rgb = linkBackgroundColor.match(/\d+/g) || [255, 255, 255]; // Fallback to white if format is unexpected
		const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
		const bgCategory = brightness < 125 ? 'light' : 'dark';
		let linkColor;
		switch(bgCategory) {
			case 'dark': linkColor = 'light'; break;
			case 'light': linkColor = 'dark'; break;
		}

		// create cursor
		linkElement.style.cursor = `url('https://cdn.jakelabate.com/custom-link-cursors/cursors/${cursorSize}/${linkType}-${linkColor}.svg'), auto`;
	});

});

function isExternalLink(href, currentDomain) {
	const domainRegex = /https?:\/\/(?:www\.)?[^\/]+/;
	const match = domainRegex.exec(href);
	return match && match[0] !== `https://${currentDomain}` && match[0] !== `http://${currentDomain}`;
}