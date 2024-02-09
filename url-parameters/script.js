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
        
        case 'utm_medium':
        // channel
        // The type of traffic you are receiving.
        // i.e. cpc, organic, post, promoted, boosted, etc.
        
        break;
        
        case 'utm_source':
        // channel source
        // The source of the traffic you are receiving. Normally this is the domain or business name
        // i.e. google, facebook, nytimes, yelp, etc
        
        break;
        
        case 'utm_campaign':
        // campaign
        // The name of the campaign or promotion you are running.
        // i.e. thanksgiving sale, 2 for 1 deal, etc.
        
        break;
        
        case 'utm_content':
        // nature/type of creative 
        // The type of ad or creative being used
        // i.e. video, image, negative emotion, humor, etc
        
        break;
        
        case 'utm_term':
        // misc. tag/label
        // The keyword or audience who clicked on your link
        // i.e. keyword, las vegas locals, etc.

        break;
        
    }
}


const urlParameters = new URLSearchParams(window.location.search);
urlParameters.forEach((parameter, value) => {
    process_utm_parameter(parameter, value);
});
