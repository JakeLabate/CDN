document.addEventListener('DOMContentLoaded', function() {

	const shareAttribute = 'jl-share-webpage';

	document.querySelectorAll(`[${shareAttribute}]`).forEach(element => {

		element.addEventListener('click', function() {
			navigator.share({
				title: document.title || document.querySelector('h1').innerText,
				url: window.location.href + '&utm_medium=share',
				text: document.querySelector('meta[name="description"]').getAttribute('content'),
				files: [document.querySelector('meta[property="og:image"]').getAttribute('content')]
			})
			.then(() => { console.log('Successful share') })
			.catch(error => { console.log('Error sharing:', error) });
		});

	});

});