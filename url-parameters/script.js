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
        
        case 'utm_medium': // channel
        // utm_medium=social
        // utm_medium=organic
        
        break;
        
        case 'utm_source': // channel source
        // utm_source=google
        // utm_source=yelp
        
        break;
        
        case 'utm_campaign': // campaign
        // utm_campaign=testimonials
        // utm_campaign=lca_contributions
        
        break;
        
        case 'utm_content': // nature/type of creative 
        // utm_content=question
        // utm_content=humor
        
        break;
        
        case 'utm_term': // keyword/term
        // utm_term=mens shoes
        // utm_term=mens shoes blue

        break;
        
        case 'utm_creative_format':
        // utm_creative_format=text
        // utm_creative_format=video
        
        break:
        
    }
}


const urlParameters = new URLSearchParams(window.location.search);
urlParameters.forEach((parameter, value) => {
    process_utm_parameter(parameter, value);
});
