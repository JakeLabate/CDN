function logDataTypes(jsonObject) {

	// turn camel case into title case
	function camelToTitle(string) {
		return string.replace(/([A-Z])/g, ' $1')
		.replace(/^./, function(str){ return str.toUpperCase(); })
	}

	// create ui input based on data type
	function createInput(dataType, key) {

		// create input container
		let inputContainer = document.createElement('div');
		inputContainer.className = 'input-container';
		document.body.appendChild(inputContainer);

		switch(dataType) {
			case 'string':

				// create label
				let stringLabel = document.createElement('label');
				stringLabel.htmlFor = key;
				stringLabel.innerHTML = camelToTitle(key);
				inputContainer.appendChild(stringLabel);

				// create text input
				let stringInput = document.createElement('input');
				stringInput.type = 'text';
				stringInput.id = key;
				stringInput.name = key;
				stringInput.placeholder = key;
				stringInput.value = key; // Assuming data is the current value for the key
				inputContainer.appendChild(stringInput);

				break;
			case 'number':

				// create label
				let numberLabel = document.createElement('label');
				numberLabel.htmlFor = key;
				numberLabel.innerHTML = camelToTitle(key);
				inputContainer.appendChild(numberLabel);

				// create number input
				let numberInput = document.createElement('input');
				numberInput.type = 'number';
				numberInput.id = key;
				numberInput.name = key;
				numberInput.placeholder = key;
				numberInput.value = key; // Assuming data is the current value for the key
				inputContainer.appendChild(numberInput);

				break;
			case 'boolean':

				// create label
				let booleanLabel = document.createElement('label');
				booleanLabel.htmlFor = key;
				booleanLabel.innerHTML = camelToTitle(key);
				inputContainer.appendChild(booleanLabel);

				// create checkbox
				let booleanInput = document.createElement('input');
				booleanInput.type = 'checkbox';
				booleanInput.id = key;
				booleanInput.name = key;
				booleanInput.checked = jsonObject[key];
				inputContainer.appendChild(booleanInput);

				break;
			case 'array':

				// create label for array
				let arrayLabel = document.createElement('label');
				// arrayLabel.htmlFor = key;
				arrayLabel.innerHTML = camelToTitle(key);
				inputContainer.appendChild(arrayLabel);

				// create container for array items
				let arrayContainer = document.createElement('div');
				arrayContainer.id = key;
				inputContainer.appendChild(arrayContainer);

				// function to add new item to array
				jsonObject[key].forEach(item => {
					let arrayItemInput = document.createElement('input');
					arrayItemInput.type = 'text';
					arrayItemInput.value = item;
					arrayContainer.appendChild(arrayItemInput);
				});

				// add button to add new items
				let addArrayItemButton = document.createElement('button');
				addArrayItemButton.innerText = 'Add Item';
				addArrayItemButton.onclick = () => {
					let arrayItemInput = document.createElement('input');
					arrayItemInput.type = 'text';
					arrayContainer.appendChild(arrayItemInput);
				};
				inputContainer.appendChild(addArrayItemButton);

				break;
			case 'object':

				// create label for object
				let objectLabel = document.createElement('label');
				objectLabel.innerHTML = camelToTitle(key);
				inputContainer.appendChild(objectLabel);

				// create container for object
				let objectContainer = document.createElement('div');
				objectContainer.id = key + '-container';
				objectContainer.className = 'object-container';
				inputContainer.appendChild(objectContainer);

				for (let prop in jsonObject[key]) {
					createInput(typeof jsonObject[key][prop], prop, jsonObject[key][prop], objectContainer);
				}
				break;
			case 'null':

				// create label for null
				let nullLabel = document.createElement('label');
				nullLabel.htmlFor = key;
				nullLabel.innerHTML = camelToTitle(key);
				inputContainer.appendChild(nullLabel);

				// create a read-only placeholder for null
				let nullInput = document.createElement('input');
				nullInput.type = 'text';
				nullInput.readOnly = true;
				nullInput.id = key;
				nullInput.name = key;
				nullInput.placeholder = 'null';
				inputContainer.appendChild(nullInput);

				break;
			default:
				console.log(`\tData type of key '${key}' is not recognized`);
				break;
		}

	}

	function getDataType(key, obj) {
		let type = typeof obj[key];
		if (type === 'object') {
			if (Array.isArray(obj[key])) {
				type = 'array';
			} else if (obj[key] === null) {
				type = 'null';
			} else {
				console.log(`Nested object found at key '${key}':`);
				for (let nestedKey in obj[key]) {
					console.log(`\tData type of key '${nestedKey}' in nested object is: ` + getDataType(nestedKey, obj[key]));
				}
				type = 'object';
			}
		}
		return type;
	}

	for (let key in jsonObject) {
		let dataType = getDataType(key, jsonObject);
		console.log("Data type of key '" + key + "' is: " + dataType + "and value is: " + jsonObject[key] + "'");
		createInput(dataType, key, jsonObject[key]);
	}
}

let exampleJson = {

	// basic information
	"name": "Botánika Osa Peninsula",
	"type": "Resort",
	"homepage": "https://botanikaresort.com/",
	"slogan": "Where Luxury Runs Wild",
	"description": "Our resort will immerse you in the natural world while delighting in premium amenities and the unparalleled service and hospitality synonymous with the Hilton Curio Collection.",

	// other information
	"petsAllowedTrueFalse": false,
	"totalRoomCount": 114,
	"priceRange": "$$$",
	"currenciesAccepted": "USD",
	"paymentAccepted": ['Cash', 'Credit Card', 'Debit Card'],
	"availableLanguage": "English, Spanish",
	"checkInTime": "16:00",
	"checkOutTime": "11:00",
	"rating": {
		"value": 4.8,
		"count": 180,
	},

	// contact & location
	"contact": {
		"phone": "1-833-812-0674",
		"email": ""
	},
	"location": {
		"street": "Costado sureste del aeropuerto",
		"city": "Puerto Jimenez",
		"state": "",
		"zip": "60702",
		"country": "Costa Rica"
	},

	// links
	"logoUrl": "https://botanikaresort.com/wp-content/uploads/2021/12/Botanika-logo-sloth_tag_Hilton-white_rgb-e1639089287901.png",
	"copyrightUrl": "https://botanikaresort.com/privacy-policy-2",
	"facebookUrl": "https://www.facebook.com/Bot%C3%A1nika-Osa-Peninsula-103792942151312",
	"twitterUrl": "https://twitter.com/BotanikaResort",
	"instagramUrl": "https://www.instagram.com/botanika_resort",
	"linkedinUrl": null,

	// arrays
	"amenitiesArr": [
		{
			"name": "Eco-Adventures",
			"url": "https://botanikaresort.com/experiences/eco-adventures/",
			"imageUrl": "https://botanikaresort.com/wp-content/uploads/2021/11/header_ecoadventures-1-scaled.jpg"
		},
		{
			"name": "Your Gateway To The Rainforest",
			"url": "https://botanikaresort.com/experiences/eco-adventures/",
			"imageUrl": "https://botanikaresort.com/wp-content/uploads/2021/12/rainForest.jpg"
		},
	]
}
logDataTypes(exampleJson);