document.addEventListener('DOMContentLoaded', function() {

	// pull page info dynamically
	const title = document.title || document.querySelector('h1').innerText;
	const url = window.location.href + '?utm_source=' + window.location.href + '&utm_medium=share';
	const desc = document.querySelector('meta[name="description"]').getAttribute('content');
	const ogImage = document.querySelector('meta[property="og:image"]').getAttribute('content');

	// share action
	function shareOnClick(element) {
		element.addEventListener('click', function() {
			navigator.share({
				title: title,
				url: url,
				text: desc,
				files: [ogImage]
			})
			.then(() => { console.log('Successful share') })
			.catch(error => { console.log('Error sharing:', error) });
		});
	}

	// attach share info to elements
	const shareElements = document.querySelectorAll('[jl-share-webpage="true"]');
	shareElements.forEach(element => {
		shareOnClick(element);
	});

});