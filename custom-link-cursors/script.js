document.addEventListener("DOMContentLoaded", function () {

	const hostname = window.location.hostname;
	const parts = hostname.split('.');
	const currentDomain = parts.length > 2 ? parts.slice(-2).join('.') : hostname;

	const links = document.querySelectorAll('a');
	links.forEach(linkElement => {
		const linkBackgroundColor = window.getComputedStyle(linkElement).backgroundColor;
		const rgb = linkBackgroundColor.match(/\d+/g) || [255, 255, 255]; // Fallback to white if format is unexpected
		const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
		const bgCategory = brightness < 125 ? 'light' : 'dark';

		const linkType = determineLinkType(linkElement.href, currentDomain);
		linkElement.style.cursor = `url('https://cdn.jakelabate.com/custom-link-cursors/cursors/${linkType}-${bgCategory}.svg'), auto`;
		

		const scriptTag = document.getElementById('custom-link-cursors');
		let cursorSize = scriptTag.getAttribute('data-cursor-size') || '22px';
		if (!cursorSize.endsWith('px')) cursorSize += 'px';

		const svg = linkElement.style.cursor.split(',')[0].replace('url(', '');
		
		// get the html of the svg
		fetch(svg).then(response => {
			console.log(response);
			return response.text();
		}).then(svgHtml => {
			// create a new div element
			const div = document.createElement('div');
			div.innerHTML = svgHtml.trim();
			console.log(div);
			// change the size of the svg
			div.querySelector('svg').setAttribute('height', cursorSize);
			div.querySelector('svg').setAttribute('width', cursorSize);
			// replace the svg with the new svg
			linkElement.style.cursor = `url('data:image/svg+xml;utf8,${div.innerHTML}'), auto`;
			console.log(linkElement);
		});

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
