document.addEventListener('scroll', function() {

	const videoWrap = document.querySelector('#stuck-video-wrap');
	const video = document.querySelector('#stuck-video');
	const videoHeight = video.offsetHeight;
	const windowScrollTop = window.pageYOffset;
	const videoBottom = videoHeight + videoWrap.offsetTop;

	if (windowScrollTop > videoBottom) {
		videoWrap.style.height = videoHeight + 'px';
		video.classList.add('video-stuck');
		video.style.paddingTop = '0px';
	} else {
		videoWrap.style.height = 'auto';
		video.classList.remove('video-stuck');
		video.style.paddingTop = '56.17021276595745%';
	}

});