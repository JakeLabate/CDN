document.addEventListener('DOMContentLoaded', function() {

	const shareAttribute = 'jl-share-webpage';

	const title = document.title || document.querySelector('h1').innerText;
	const url = window.location.href + '&utm_medium=share';
	const text = document.querySelector('meta[name="description"]').getAttribute('content');
	const files = [document.querySelector('meta[property="og:image"]').getAttribute('content')];

	document.querySelectorAll(`[${shareAttribute}]`).forEach(element => {
		element.addEventListener('click', function() {
			navigator.share({ title, url, text, files })
			.then(() => { console.log('Successful share') })
			.catch(error => { console.log('Error sharing:', error) });
		});
	});

});