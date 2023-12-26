document.addEventListener('DOMContentLoaded', function() {

	// get all the share elements
	const shareElements = document.querySelectorAll('[jl-share-webpage="true"]');
	shareElements.forEach(shareElement => {

		// when shareElement is clicked
		shareElement.onclick = function () {

			// pull page info dynamically
			const title = document.title;
			const url = window.location.href;
			const desc = document.querySelector('meta[name="description"]').getAttribute('content');
			const ogImage = document.querySelector('meta[property="og:image"]').getAttribute('content');

			// if the browser supports navigator.share (most do)
			if (navigator.share) {
				navigator.share({

					title: title,

					// add utm parameters to track where the share came from
					url: url + '?utm_source=' + window.location.href + '&utm_medium=share',

					text: desc,
					files: [ogImage]

				})

				// log any errors in the console
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));

			}
		}
	});
});