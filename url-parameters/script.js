document.addEventListener("DOMContentLoaded", function() {

	const placementAttribute = 'jl-url-parameter';

	const urlParams = new URLSearchParams(window.location.search);
	urlParams.forEach((param, value) => {

		const elements = document.querySelectorAll(`[${placementAttribute}='${param}']`);
		elements.forEach(element => {
			element.innerHTML = value;
		});

	});

});

function process_utm_parameter(parameter, value) {
    
    switch (parameter) {
        
        case 'utm_source':
        // The source of the traffic you are receiving. Normally this is the domain or business name
        // i.e. google, facebook, nytimes, yelp, etc
        
        case 'utm_medium':
        // The type of traffic you are receiving.
        // i.e. cpc, organic, post, promoted, boosted, etc
        
        case 'utm_campaign':
        // The name of the campaign or promotion you are running.
        // i.e. thanksgiving sale, 2 for 1 deal, etc.
        
        case 'utm_content':
        // The type of ad or creative being used
        // i.e. video, image, negative emotion, humor, etc
        
        case 'utm_term':
        // The keyword or audience who clicked on your link
        // i.e. keyword, las vegas locals, etc.
        
    }
}


const urlParameters = new URLSearchParams(window.location.search);
urlParameters.forEach((parameter, value) => {
    process_utm_parameter(parameter, value);
});
