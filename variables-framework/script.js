function openAI(prompt) {

	fetch('https://hook.us1.make.com/hy48jw7wyycgafjj45uhpaayjdxldpun?prompt=' + prompt)
	.then(response => response.json())
	.then((data) => {
		console.log(data);
		return data;
	});

}
function generate(id) {

	// get the input element
	const inputElementId = id.replace('Generate', '');
	const inputElement = document.getElementById(inputElementId);
	const parentVarDiv = inputElement.parentElement;
	const labelElement  = parentVarDiv.querySelector('label')
	const label = labelElement.innerHTML;

	const prompt = 'Your job is to generate a ' + label + ' for a brand.';

	return openAI(prompt);

}

const variables = {

	// contact
	primaryContactPhone: {
		active: true,
		id: 'primaryContactPhone',
		label: 'Contact Phone',

		iconCode: 'call',
		captureNode: 'input',
		selectOptions: [
			{
				label: 'Option 1', // the UI label for the option
				value: 'option1', // the value of the option
				selected: true, // boolean to determine if selected by default if no value is provided
			},
			{
				label: 'Option 2',
				value: 'option2',
				selected: false,
			}
		],
		captureType: 'tel',
		placeholder: '203-555-5555',
		defaultValue: null,
		clearButton: false,
		description: 'The primary contact phone number of the brand; expect calls to it!',
		examples: ['203-907-5536', '203.907.5536', '1-203-907-5536'],
		tips: ['Use country code if doing business internationally', 'Use consistent formatting', 'Include area code'],
		aiGenerative: false,
		subVariables: [],
	},
	primaryContactEmail: {
		active: true,
		id: 'primaryContactEmail',
		label: 'Contact Email',

		iconCode: 'email',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'email',
		placeholder: 'email@website.com',
		defaultValue: null,
		clearButton: false,
		description: 'The primary contact email address of the brand; check the inbox!',
		examples: ['jake@gmail.com', 'steve@apple.com','michael.scott@dunermifflin.org'],
		tips: ['Use all lowercase letters'],
		aiGenerative: false,
		subVariables: [],
	},
	primaryContactWebsite: {
		active: true,
		id: 'primaryContactWebsite',
		label: 'Contact Email',

		iconCode: 'link',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'url',
		placeholder: 'https://www.bestwebsite.com',
		defaultValue: null,
		clearButton: false,
		description: 'The primary contact email address of the brand; check the inbox!',
		examples: ['https://www.google.com', 'https://www.apple.com','https://dunermifflin.org'],
		tips: ['Use all lowercase letters', 'Include subdomain (like www.) if applicable', 'Include https:// if applicable'],
		aiGenerative: false,
		subVariables: [],
	},

	// address
	primaryAddressStreet1: {
		active: true,
		id: 'primaryAddressStreet1',
		label: 'Street 1',

		iconCode: 'signpost',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'text',
		placeholder: '123 Main Street',
		defaultValue: null,
		clearButton: false,
		description: 'The primary street address of the brand; expect mail to it!',
		examples: ['123 Main Street', '456 Tomato Drive', '5 Apple Lane'],
		tips: ['Spell out the street type (Street, Drive etc)'],
		aiGenerative: false,
		subVariables: [],
	},
	primaryAddressStreet2: {
		active: true,
		id: 'primaryAddressStreet2',
		label: 'Street 2',

		iconCode: 'tag',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'text',
		placeholder: 'Suite 42',
		defaultValue: null,
		clearButton: false,
		description: 'The number of the suite, unit, etc',
		examples: ['Apt 1', 'Suite 9', '14B'],
		tips: [],
		aiGenerative: false,
		subVariables: [],
	},
	primaryAddressCity: {
		active: true,
		id: 'primaryAddressCity',
		label: 'City',

		iconCode: 'location_city',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'text',
		placeholder: 'Cincinnati',
		defaultValue: null,
		clearButton: false,
		description: 'The city of the primary address',
		examples: ['New York', 'San Francisco', 'Los Angeles'],
		tips: [],
		aiGenerative: false,
		subVariables: [],
	},
	primaryAddressState: {
		active: true,
		id: 'primaryAddressState',
		label: 'State',

		iconCode: 'map',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'text',
		placeholder: 'CT',
		defaultValue: null,
		clearButton: false,
		description: 'The city of the primary address',
		examples: ['CT', 'NY', 'CA'],
		tips: ['Use the 2 letter abbreviation'],
		aiGenerative: false,
		subVariables: [],
	},
	primaryAddressZip: {
		active: true,
		id: 'primaryAddressZip',
		label: 'Zip Code',

		iconCode: 'tag',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'text',
		placeholder: '06880',
		defaultValue: null,
		clearButton: false,
		description: 'The zip code of the primary address',
		examples: ['06880', '10001', '90210'],
		tips: ['Use the 5 digit zip code'],
		aiGenerative: false,
		subVariables: [],
	},
	primaryAddressCountry: {
		active: true,
		id: 'primaryAddressCountry',
		label: 'Country',

		iconCode: 'flag',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'text',
		placeholder: 'US',
		defaultValue: null,
		clearButton: false,
		description: 'The country of the primary address',
		examples: ['US', 'CA', 'FR'],
		tips: ['Use the 2 letter country code'],
		aiGenerative: false,
		subVariables: [],
	},

	// founding
	foundingDate: {
		active: true,
		id: 'foundingDate',
		label: 'Founding Date',

		iconCode: 'calendar_today',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'date',
		placeholder: null,
		defaultValue: null,
		clearButton: false,
		description: 'The date the company was founded',
		examples: [],
		tips: [],
		aiGenerative: false,
		subVariables: [],
	},
	tradeName: {
		active: true,
		id: 'tradeName',
		label: 'Trade Name',

		iconCode: 'title',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'text',
		placeholder: 'BrandWield',
		defaultValue: null,
		clearButton: false,
		description: 'The (hopefully) registered trade name of the brand',
		examples: ['BrandWield', 'Dunder Mifflin', 'Apple'],
		tips: [],
		aiGenerative: false,
		subVariables: [],
	},
	legalName: {
		active: true,
		id: 'legalName',
		label: 'Legal Name',

		iconCode: 'title',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'text',
		placeholder: 'BrandWield Inc.',
		defaultValue: null,
		clearButton: false,
		description: 'The legally recognized company entity name',
		examples: ['BrandWield Inc.', 'Dunder Mifflin LLC', 'Apple Inc.'],
		tips: [],
		aiGenerative: false,
		subVariables: [],
	},

	// hours of operation
	primaryHoursOfOperation: {
		monday: {
			open: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Monday Opens',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '09:00',
				description: 'The time the business opens on Monday',
				examples: ['9:00 am', '10:00 am', '11:00 am'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
			close: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Monday Closes',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business closes on Monday',
				examples: ['4:00 pm', '5:00 pm', '6:00 pm'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
		},
		tuesday: {
			open: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Tuesday Opens',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business opens on Tuesday',
				examples: ['9:00 am', '10:00 am', '11:00 am'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
			close: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Tuesday Closes',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business closes on Tuesday',
				examples: ['4:00 pm', '5:00 pm', '6:00 pm'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
		},
		wednesday: {
			open: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Wednesday Opens',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business opens on Wednesday',
				examples: ['9:00 am', '10:00 am', '11:00 am'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
			close: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Wednesday Closes',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business closes on Wednesday',
				examples: ['4:00 pm', '5:00 pm', '6:00 pm'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
		},
		thursday: {
			open: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Thursday Opens',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business opens on Thursday',
				examples: ['9:00 am', '10:00 am', '11:00 am'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
			close: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Thursday Closes',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business closes on Thursday',
				examples: ['4:00 pm', '5:00 pm', '6:00 pm'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
		},
		friday: {
			open: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Friday Opens',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business opens on Friday',
				examples: ['9:00 am', '10:00 am', '11:00 am'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
			close: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Friday Closes',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business closes on Friday',
				examples: ['4:00 pm', '5:00 pm', '6:00 pm'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
		},
		saturday: {
			open: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Saturday Opens',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business opens on Saturday',
				examples: ['9:00 am', '10:00 am', '11:00 am'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
			close: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Saturday Closes',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business closes on Friday',
				examples: ['4:00 pm', '5:00 pm', '6:00 pm'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
		},
		sunday: {
			open: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Sunday Opens',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business opens on Sunday',
				examples: ['9:00 am', '10:00 am', '11:00 am'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
			close: {
				active: true,
				section: 'hoursOfOperation',
				label: 'Sunday Closes',
				iconCode: 'schedule',
				captureNode: 'input',
				selectOptions: [],
				captureType: 'time',
				placeholder: null,
				defaultValue: '17:00',
				description: 'The time the business closes on Sunday',
				examples: ['4:00 pm', '5:00 pm', '6:00 pm'],
				tips: [],
				aiGenerative: false,
				subVariables: []
			},
		},
	},

	// business
	industry: {},
	slogan: {},
	missionStatement: {},
	vision: {},
	valueProposition: {},
	pricing: {},

	// target market
	age: {},
	gender: {},
	politicalViews: {},
	income: {},

	// accessibility
	currencies: {},
	paymentMethods: {},
	languages: {},

	// social media
	facebookUrl: {
		active: true,
		id: 'facebookUrl',
		label: 'Facebook URL',

		iconCode: 'link',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'url',
		placeholder: 'https://www.facebook.com/brandwield',
		defaultValue: null,
		clearButton: false,
		description: 'The URL of the brand\'s Facebook page',
		examples: ['https://www.facebook.com/brandwield', 'https://www.facebook.com/dundermifflin', 'https://www.facebook.com/apple'],
		tips: ['Use the full URL (including https://www.)'],
		aiGenerative: false,
		/*
		subVariables: [
			subVariable({
				variableId: 'facebookUsername',
				active: true,
				label: 'Facebook Username',
				materialIconCode: 'alternate_email',
				type: 'text',
				placeholder: 'brandwield',
				defaultValue: null,
				description: 'The username of the Facebook page',
			}),
		]

		 */
	},
	instagramUrl: {
		active: true,
		id: 'instagramUrl',
		label: 'Instagram URL',

		iconCode: 'link',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'url',
		placeholder: 'https://www.instagram.com/brandwield',
		defaultValue: null,
		clearButton: false,
		description: 'The URL of the brand\'s Instagram page',
		examples: ['https://www.instagram.com/brandwield', 'https://www.instagram.com/dundermifflin', 'https://www.instagram.com/apple'],
		tips: ['Use the full URL (including https://www.)'],
		aiGenerative: false,
		/*
		subVariables: [
			subVariable({
				variableId: 'instagramUsername',
				active: true,
				label: 'Instagram Username',
				materialIconCode: 'alternate_email',
				type: 'text',
				placeholder: 'brandwield',
				defaultValue: null,
				description: 'The username of the Instagram page',
			}),
		]

		 */
	},
	linkedinUrl: {
		active: true,
		id: 'linkedinUrl',
		label: 'LinkedIn URL',

		iconCode: 'link',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'url',
		placeholder: 'https://www.linkedin.com/company/brandwield',
		defaultValue: null,
		clearButton: false,
		description: 'The URL of the brand\'s LinkedIn page',
		examples: ['https://www.linkedin.com/company/brandwield', 'https://www.linkedin.com/company/dundermifflin', 'https://www.linkedin.com/company/apple'],
		tips: ['Use the full URL (including https://www.)', 'Use the company page URL, a the personal profile URL'],
		aiGenerative: false,
		/*
		subVariables: [
			subVariable({
				variableId: 'linkedinUsername',
				active: true,
				label: 'LinkedIn Username',
				materialIconCode: 'alternate_email',
				type: 'text',
				placeholder: 'brandwield',
				defaultValue: null,
				description: 'The handle of the LinkedIn page',
			}),
		]

		 */
	},
	twitterUrl: {
		active: true,
		id: 'twitterUrl',
		label: 'Twitter URL',

		iconCode: 'link',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'url',
		placeholder: 'https://twitter.com/brandwield',
		defaultValue: null,
		clearButton: false,
		description: 'The URL of the brand\'s Twitter page',
		examples: ['https://twitter.com/brandwield', 'https://twitter.com/dundermifflin', 'https://twitter.com/apple'],
		tips: ['Use the full URL (including https://)'],
		aiGenerative: false,
		/*
		subVariables: [
			subVariable({
				variableId: 'twitterUsername',
				active: true,
				label: 'Twitter Username',
				materialIconCode: 'alternate_email',
				type: 'text',
				placeholder: 'brandwield',
				defaultValue: null,
				description: 'The handle of the Twitter page',
			}),
		]

		 */
	},
	youtubeUrl: {
		active: true,
		id: 'youtubeUrl',
		label: 'YouTube URL',

		iconCode: 'link',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'url',
		placeholder: 'https://www.youtube.com/@BrandWield',
		defaultValue: null,
		clearButton: false,
		description: 'The URL of the brand\'s YouTube page',
		examples: ['https://www.youtube.com/@BrandWield', 'https://www.youtube.com/@DunderMifflin', 'https://www.youtube.com/@Apple'],
		tips: ['Use the full URL (including https://)'],
		aiGenerative: false,
		/*
		subVariables: [
			subVariable({
				variableId: 'youtubeUsername',
				active: true,
				label: 'YouTube Username',
				materialIconCode: 'alternate_email',
				type: 'text',
				placeholder: '@Brandwield',
				defaultValue: null,
				description: 'The handle of the YouTube channel',
			}),
		]

		 */
	},

	// LOGOS
	squareLogo: {
		active: true,
		id: 'squareLogo',
		label: 'Square Logo',

		iconCode: 'image',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'file',
		placeholder: null,
		defaultValue: null,
		description: 'A logo for your business that is square in shape',
		examples: [],
		tips: [],
		aiGenerative: false,
		subVariables: []
	},
	fullLogo: {
		active: true,
		id: 'fullLogo',
		label: 'Full Logo',

		iconCode: 'image',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'file',
		placeholder: null,
		defaultValue: null,
		description: 'The full logo for your business',
		examples: [],
		tips: [],
		aiGenerative: false,
		subVariables: []
	},

	// COLORS
	primaryColor: {
		active: true,
		id: 'primaryColor',
		label: 'Primary Color',

		iconCode: 'palette',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'color',
		placeholder: null,
		defaultValue: null,
		description: 'The primary color of your brand',
		examples: [],
		tips: ['Maybe reference your logo?'],
		aiGenerative: false,
		subVariables: []
	},
	secondaryColor: {
		active: true,
		id: 'secondaryColor',
		label: 'Secondary Color',

		iconCode: 'palette',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'color',
		placeholder: null,
		defaultValue: null,
		description: 'The secondary color of your brand',
		examples: [],
		tips: ['Maybe reference your logo?'],
		aiGenerative: false,
		subVariables: []
	},
	tertiaryColor: {
		active: true,
		id: 'tertiaryColor',
		label: 'Tertiary Color',

		iconCode: 'palette',
		captureNode: 'input',
		selectOptions: [],
		captureType: 'color',
		placeholder: null,
		defaultValue: null,
		description: 'The tertiary color of your brand',
		examples: [],
		tips: ['Maybe reference your logo?'],
		aiGenerative: false,
		subVariables: []
	},

	// FONTS
	primaryFont: {},
	secondaryFont: {},

	/////////////////////
	// DYNAMIC VARIABLES
	/////////////////////

	/*

	// OFFERS
	name: {},
	price: {},

	feature: {},
	benefit: {},
	solution: {},
	description: {},

	image: {},
	video: {},
	document: {},

	targetMarketAge: {},
	targetMarketGender: {},
	targetMarketIncome: {},
	targetMarketPoliticalViews: {},

	warranty: {},
	refundPolicy: {},



	// TEAM MEMBERS
	firstName: {},
	middleName: {},
	lastName: {},

	title: {},
	memberSince: {},
	headshot: {},
	bio: {},

	phone: {},
	email: {},
	facebookUrl: {},
	instagramUrl: {},
	linkedinUrl: {},
	twitterUrl: {},
	youtubeUrl: {},


	// TESTIMONIALS
	firstName: {},
	middleName: {},
	lastName: {},
	company: {},
	headshot: {},
	title: {},
	body: {},
	date: {},
	rating: {},
	video: {},


	// ACCREDITATIONS
	name: {},
	dateAccredited: {},
	organizationName: {},
	organizationLogo: {},


	// LOCATIONS
	name: {},
	addressStreet1: {},
	addressStreet2: {},
	addressCity: {},
	addressState: {},
	addressZip: {},
	addressCountry: {},

	phone: {},
	email: {},
	fax: {},
	website: {}, // want to remove this

	hoursOfOperation: {}, // a full schema for each location
	holidayHoursOfOperation: {}, // a full schema for each location
	defaultLocation: {}, // a boolean to indicate if this is the default location for the business


	 */

};
const sections = {

	contact: {
		active: true,
		id: 'contact',
		label: 'Contact',
		iconCode: 'call',
		variablesArr: [
			'primaryContactPhone',
			'primaryContactEmail',
			'primaryContactWebsite',
		],
	},
	primaryAddress: {
		active: true,
		id: 'primaryAddress',
		label: 'Primary Address',
		iconCode: 'map',
		variablesArr: [
			'primaryAddressStreet1',
			'primaryAddressStreet2',
			'primaryAddressCity',
			'primaryAddressState',
			'primaryAddressZip',
			'primaryAddressCountry',
		],
	},
	founding: {
		active: true,
		id: 'founding',
		label: 'Founding',
		iconCode: 'flag',
		variablesArr: [
			'foundingDate',
			'tradeName',
			'legalName',
		],
	},
	hoursOfOperation: {
		active: true,
		id: 'hoursOfOperation',
		label: 'Hours of Operation',
		iconCode: 'schedule',
		variablesArr: [
			'primaryHoursOfOperation',
		],
	},
	business: {
		active: true,
		id: 'business',
		label: 'Business',
		iconCode: 'business_center',
		variablesArr: [
			'industry',
			'slogan',
			'missionStatement',
			'vision',
			'valueProposition',
			'pricing',
		],
	},
	targetMarket: {
		active: true,
		id: 'targetMarket',
		label: 'Target Market',
		iconCode: 'ads_click',
		variablesArr: [
			'age',
			'gender',
			'politicalViews',
			'income',
		]
	},
	accessibility: {
		active: true,
		id: 'accessibility',
		label: 'Accessibility',
		iconCode: 'accessibility',
		variablesArr: [
			'currencies',
			'paymentMethods',
			'languages',
		],
	},
	socialMedia: {
		active: true,
		id: 'socialMedia',
		label: 'Social Media',
		iconCode: 'thumb_up',
		variablesArr: [
			'facebookUrl',
			'instagramUrl',
			'linkedinUrl',
			'twitterUrl',
			'youtubeUrl',
		],
	},
	logos: {
		active: true,
		id: 'logos',
		label: 'Logos',
		iconCode: 'image',
		variablesArr: [
			'squareLogo',
			'fullLogo',
		],
	},
	colors: {
		active: true,
		id: 'colors',
		label: 'Colors',
		iconCode: 'palette',
		variablesArr: [
			'primaryColor',
			'secondaryColor',
			'tertiaryColor',
		],
	},
	fonts: {
		active: true,
		id: 'fonts',
		label: 'Fonts',
		iconCode: 'text_fields',
		variablesArr: [
			'primaryFont',
			'secondaryFont',
		],
	},

	// DYNAMIC SECTIONS
	offers: {
		active: true,
		id: 'offers',
		label: 'Offers',
		iconCode: 'storefront',
		variablesArr: [
			'name',
			'price',
			'feature',
			'benefit',
			'solution',
			'description',
			'image',
			'video',
			'document',
			'targetMarketAge',
			'targetMarketGender',
			'targetMarketIncome',
			'targetMarketPoliticalViews',
			'warranty',
			'refundPolicy',
		],
	},
	teamMembers: {
		active: true,
		id: 'teamMembers',
		label: 'Team Members',
		iconCode: 'groups',
		variablesArr: [
			'firstName',
			'middleName',
			'lastName',
			'title',
			'memberSince',
			'headshot',
			'bio',
			'phone',
			'email',
			'facebookUrl',
			'instagramUrl',
			'linkedinUrl',
			'twitterUrl',
			'youtubeUrl',
		],
	},
	testimonials: {
		active: true,
		id: 'testimonials',
		label: 'Testimonials',
		iconCode: 'reviews',
		variablesArr: [
			'firstName',
			'middleName',
			'lastName',
			'company',
			'headshot',
			'title',
			'body',
			'date',
			'rating',
			'video',
		],
	},
	accreditations: {
		active: true,
		id: 'accreditations',
		label: 'Accreditations',
		iconCode: 'workspace_premium',
		variablesArr: [
			'name',
			'dateAccredited',
			'organizationName',
			'organizationLogo',
		],
	},
	locations: {
		active: true,
		id: 'locations',
		label: 'Locations',
		iconCode: 'location_on',
		variablesArr: [],
	}

};

function addSection(section) {

	let name = section.label? section.label : false;
	let id = section.id? section.id : false;
	let iconCode = section.iconCode? section.iconCode : false;

	// details element
	const details = document.createElement("details");
	details.id = id;

		// summary element
		const summary = document.createElement("summary");
		summary.className = "brandSection";

			// section label wrapper
			const labelWrapper = document.createElement("span");
			labelWrapper.className = "flex-center-center";

				// label icon
				const labelIcon = document.createElement("span");
				labelIcon.className = "material-symbols-outlined noScale paddingRight10";
				labelIcon.innerHTML = iconCode;

			labelWrapper.appendChild(labelIcon);
			labelWrapper.innerHTML += name;

			// expand icon
			const expand = document.createElement("span");
			expand.className = "material-symbols-outlined marker";
			expand.innerHTML = "expand_more";

		summary.appendChild(labelWrapper);
		summary.appendChild(expand);

	details.appendChild(summary);

	// accordion content
	const accordionContent = document.createElement("div");
	accordionContent.className = "accordion-content";

	details.appendChild(accordionContent);

	// add to page
	document.getElementById("brandVariables").appendChild(details);
	console.log("added-section:" + id);
}
function addVariable(variable, sectionId) {

	let defaultValueOrPlaceholder = variable.defaultValue? variable.defaultValue : variable.placeholder? variable.placeholder : false;
	let options = variable.selectOptions? variable.selectOptions : false;
	let clearButton = variable.clearButton? variable.clearButton : false;
	let aiGenerative = variable.aiGenerative? variable.aiGenerative : false;
	let description = variable.description? variable.description : false;
	let examples = variable.examples? variable.examples : false;
	let tips = variable.tips? variable.tips : false;

	const parentSection = sectionId;
	const name = variable.label;
	const id = variable.id;

	const inputElement = variable.captureNode;
	const inputType = variable.captureType;
	const iconCode = variable.iconCode;

	// create div
	const div = document.createElement("div");
	div.classList.add("var");

		/*

		// create tooltip span
		const tooltip = document.createElement("span");
		tooltip.className = "material-symbols-outlined tooltip";
		tooltip.innerHTML = "info";

			// create sub-span
			const tooltipSpan = document.createElement("span");
			tooltipSpan.setAttribute("data-category", dataCategory);
			tooltipSpan.className = "tooltiptext tooltip-top";

			// append sub-span to tooltip
			tooltip.appendChild(tooltipSpan);

		*/

		// create label
		const label = document.createElement("label");
		label.setAttribute("for", id);
		label.innerHTML = name;

		// placeholder
		const placeholder = document.createElement("span");
		placeholder.classList.add("placeholder25x25");

		// create warning span
		const warning = document.createElement("span");
		warning.id = "warning" + name;
		warning.className = "material-symbols-outlined tooltip";
		warning.innerHTML = "warning";

			// create sub-span
			const warningSpan = document.createElement("span");
			warningSpan.setAttribute("data-category", "WARNING");
			warningSpan.className = "tooltiptext tooltip-top";

		// append sub-span to warning
		warning.appendChild(warningSpan);

		// create icon wrapper
		const iconWrapper = document.createElement("span");
		iconWrapper.classList.add("icon-wrapper");

			// create icon
			const icon = document.createElement("span");
			icon.className = "material-symbols-outlined before-brand-input";
			icon.innerHTML = iconCode;

		// append icon to icon wrapper
		iconWrapper.appendChild(icon);

		// create input
		let input = document.createElement(inputElement);
		switch (inputElement) {
			case "input":

				// input attributes
				input.id = id;
				input.classList.add("brandVarInput");
				input.setAttribute("type", inputType);
				input.setAttribute('readonly','readonly');
				input.setAttribute("placeholder", defaultValueOrPlaceholder);

				break;
			case "select":

				// input attributes
				input.id = id;
				input.classList.add("brandVarInput");
				input.style.display = "none;";

				// create options
				if (options) {
					options.forEach(option => {
						const optionElement = document.createElement("option");
						optionElement.setAttribute("value", option.value);
						optionElement.innerHTML = option.label;
						optionElement.selected = option.selected;
						input.appendChild(optionElement);
					});
				}

				break;
			default:
				console.log("Error: inputElement not found");
		}

		if (description) {
			input.setAttribute('data-description', description);
		}

		if (examples) {
			input.setAttribute('data-examples', examples);
		}

		if (tips) {
			input.setAttribute('data-tips', tips);
		}

		// create unlock button
		const unlockSpan = document.createElement("span");
		unlockSpan.id = id + "Unlock";
		unlockSpan.className = "material-symbols-outlined";
		unlockSpan.setAttribute("onclick", 'unlock(this.id)');
		unlockSpan.innerHTML = "lock_open";

		// create lock button
		const lockSpan = document.createElement("span");
		lockSpan.id = id + "Lock";
		lockSpan.className = "material-symbols-outlined"
		lockSpan.setAttribute("onclick", 'lock(this.id)');
		lockSpan.innerHTML = "lock";

	// append elements to div
	// div.appendChild(tooltip);
	div.appendChild(label);
	div.appendChild(placeholder);
	div.appendChild(warning);
	div.appendChild(iconWrapper);
	div.appendChild(input);

	if (

		// is a <select> element
		inputElement === "select" ||

		// is a <input> element with type="file"
		inputType === "file" ||

		// is a <input> element with type="color"
		inputType === "color" ||

		// is a <input> is a font
		id.includes("font" || id.includes("Font"))

	) {

		const valueDisplayEl = document.createElement('p');
		valueDisplayEl.id = id + "ValueDisplay";

		div.appendChild(valueDisplayEl);
	}

	div.appendChild(unlockSpan);
	div.appendChild(lockSpan);

	if (aiGenerative) {

		const aiGenerativeEl = document.createElement("span");
		aiGenerativeEl.id = id + "Generate";
		aiGenerativeEl.setAttribute("onclick", 'generate(this.id)');
		aiGenerativeEl.className = "material-symbols-outlined";
		aiGenerativeEl.innerHTML = "autorenew";

		div.appendChild(aiGenerativeEl);
	}
	if (clearButton) {

		// create clear button
		const clear = document.createElement("button");
		clear.id = "clear" + name;
		clear.setAttribute("onclick", 'clearMe(this.id)');
		clear.innerHTML = "Clear";

		div.appendChild(clear);
	}

	// append div to section
	const variablePlaceable = document.getElementById(parentSection).querySelector(".accordion-content");
	variablePlaceable.appendChild(div);
	console.log("added-variable:" + id);

}

function subVariable({variableId, active, label, materialIconCode, type, placeholder, defaultValue, description}) {
	return {
		[variableId]: {
			active: active,
			label: label,
			materialIconCode: materialIconCode,
			type: type,
			placeholder: placeholder,
			defaultValue: defaultValue,
			description: description,
		}
	}
}

Object.keys(sections).forEach(key => {

	// Get each 'section' from the 'sections' JSON
	const section = sections[key];
	const sectionID = section.id;

	// check for active sections
	if (!section.active || !section.variablesArr) {
		console.log("skipped-section:" + sectionID);
	} else {

		// add active section to page
		addSection(section);

		// for each variable in the section
		section.variablesArr.forEach(variable => {

			// check for active variables
			if (!variables[variable] || !variables[variable].active) {
				console.log("skipped-variable:" + variable);
			} else {

				// add variable to section
				addVariable(variables[variable], sectionID, variable);

				/*

				// check for active subVariables
				if (!variables[variable].subVariables || !variables[variable].subVariables[variable].active) {
					console.log("skipped-sub-variable:" + variable);
				} else {

					// add subVariables to variable
					variables[variable].subVariables.forEach(subVariable => {
						addVariable(variables[subVariable], section.id);

					});
				}

				 */
			}
		});

	}

});

const items = {
	teamMembersCollection: {
		isA: 'collection',
		label: 'Team Members',
		teamMemberObject: {
			isA: 'variableSet',
			label: variables['teamMembersCollection']['teamMemberObject']['firstName'] || 'Team Member',
			firstName: {
				isA: 'variable',
				varValue: null,
				label: 'First Name',
				captureNode: 'input',
				type: 'text',
				required: true,
				placeholder: 'John',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			middleName: {
				isA: 'variable',
				varValue: null,
				label: 'Middle Name/Initial',
				captureNode: 'input',
				type: 'text',
				required: false,
				placeholder: 'M',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			lastName: {
				isA: 'variable',
				varValue: null,
				label: 'Last Name',
				captureNode: 'input',
				type: 'text',
				required: false,
				placeholder: 'Doe',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			title: {
				isA: 'variable',
				varValue: null,
				label: 'Title',
				captureNode: 'input',
				type: 'text',
				required: true,
				placeholder: 'CEO',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			memberSince: {
				isA: 'variable',
				varValue: null,
				label: 'Member Since',
				captureNode: 'input',
				type: 'date',
				required: false,
				placeholder: 'MM/DD/YYYY',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			headshot: {
				isA: 'variable',
				varValue: null,
				label: 'Headshot',
				captureNode: 'input',
				type: 'file',
				required: false,
				placeholder: 'Upload Headshot',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			biography: {
				isA: 'variable',
				varValue: null,
				label: 'Biography',
				captureNode: 'input',
				type: 'textarea',
				required: false,
				placeholder: 'Write a short biography about this team member',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			contactInfo: {
				isA: 'variableSet',
				label: 'Contact Info',
				phone: {
					isA: 'variable',
					varValue: null,
					label: 'Phone',
					captureNode: 'input',
					type: 'tel',
					required: false,
					placeholder: '555-555-5555',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				email: {
					isA: 'variable',
					varValue: null,
					label: 'Email',
					captureNode: 'input',
					type: 'email',
					required: false,
					placeholder: 'johndoe@mywebsite.com',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				socialMedia: {
					isA: 'variableSet',
					label: variables['teamMembersCollection']['teamMemberObject']['socialMedia'],
					facebook: {
						isA: 'variable',
						varValue: null,
						label: 'Facebook',
						captureNode: 'input',
						type: 'url',
						required: false,
						placeholder: 'https://www.facebook.com/myfacebookpage',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					twitter: {
						isA: 'variable',
						varValue: null,
						label: 'Twitter',
						captureNode: 'input',
						type: 'url',
						required: false,
						placeholder: 'https://twitter.com/mytwitterpage',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					instagram: {
						isA: 'variable',
						varValue: null,
						label: 'Instagram',
						captureNode: 'input',
						type: 'url',
						required: false,
						placeholder: 'https://www.instagram.com/myinstagrampage',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					linkedin: {
						isA: 'variable',
						varValue: null,
						label: 'LinkedIn',
						captureNode: 'input',
						type: 'url',
						required: false,
						placeholder: 'https://www.linkedin.com/in/mylinkedinpage',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					youtube: {
						isA: 'variable',
						varValue: null,
						label: 'YouTube',
						captureNode: 'input',
						type: 'url',
						required: false,
						placeholder: 'https://www.youtube.com/myyoutubechannel',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					}
				}
			}
		},
	},
	locationsCollection: {
		isA: 'collection',
		label: 'Locations',
		locationObject: {
			isA: 'variableSet',
			label: variables['locationsCollection']['locationObject']['name'] || 'Location',
			name: {
				isA: 'variable',
				varValue: null,
				label: 'Name',
				captureNode: 'input',
				type: 'text',
				required: true,
				placeholder: 'My Location Nickname ex: Main Office',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			isDefault: {
				isA: 'variable',
				label: 'Default Location',
				type: 'checkbox',
				required: false,
			},
			contactInfo: {
				isA: 'variableSet',
				label: 'Contact Info',
				phone: {
					isA: 'variable',
					varValue: null,
					label: 'Phone',
					captureNode: 'input',
					type: 'tel',
					required: false,
					placeholder: '555-555-5555',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				email: {
					isA: 'variable',
					varValue: null,
					label: 'Email',
					captureNode: 'input',
					type: 'email',
					required: false,
					placeholder: 'johndoe@mywebsite.com',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				fax: {
					isA: 'variable',
					varValue: null,
					label: 'Fax',
					captureNode: 'input',
					type: 'tel',
					required: false,
					placeholder: '555-555-5555',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				website: {
					isA: 'variable',
					varValue: null,
					label: 'Website',
					captureNode: 'input',
					type: 'url',
					required: false,
					placeholder: 'https://www.mywebsite.com',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				}
			},
			address: {
				isA: 'variableSet',
				label: 'Address',
				street1: {
					isA: 'variable',
					varValue: null,
					label: 'Street 1',
					captureNode: 'input',
					type: 'text',
					required: true,
					placeholder: '123 Main St',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				street2: {
					isA: 'variable',
					varValue: null,
					label: 'Street 2',
					captureNode: 'input',
					type: 'text',
					required: false,
					placeholder: 'Apt 1',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				city: {
					isA: 'variable',
					varValue: null,
					label: 'City',
					captureNode: 'input',
					type: 'text',
					required: true,
					placeholder: 'My City',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				state: {
					isA: 'variable',
					varValue: null,
					label: 'State',
					captureNode: 'input',
					type: 'text',
					required: true,
					placeholder: 'My State',
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				zip: {
					isA: 'variable',
					varValue: null,
					label: 'Zip',
					captureNode: 'input',
					type: 'text',
					required: true,
					placeholder: '12345',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				country: {
					isA: 'variable',
					varValue: null,
					label: 'Country',
					captureNode: 'input',
					type: 'text',
					required: true,
					placeholder: 'USA',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				}
			},
			associatedTeamMembers: {
				isA: 'variableSet',
				label: 'Associated Team Members',
				// here we want an option to 'link' team members to this location
				// i envision this being a dropdown of all team members
				// should also have the ability to 'add' a team member right from here (which will also populate a team member object in the team collection)

			},
			hours: {
				isA: 'variableSet',
				label: 'Hours',
				hoursOfOperation: {
					isA: 'variableSet',
					label: 'Hours of Operation',
					mondayOpen: {
						isA: 'variable',
						varValue: null,
						label: 'Monday Open',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '9:00 AM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					mondayClose: {
						isA: 'variable',
						varValue: null,
						label: 'Monday Close',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '5:00 PM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					tuesdayOpen: {
						isA: 'variable',
						varValue: null,
						label: 'Tuesday Open',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '9:00 AM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					tuesdayClose: {
						isA: 'variable',
						varValue: null,
						label: 'Tuesday Close',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '5:00 PM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					wednesdayOpen: {
						isA: 'variable',
						varValue: null,
						label: 'Wednesday Open',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '9:00 AM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					wednesdayClose: {
						isA: 'variable',
						varValue: null,
						label: 'Wednesday Close',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '5:00 PM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					thursdayOpen: {
						isA: 'variable',
						varValue: null,
						label: 'Thursday Open',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '9:00 AM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					thursdayClose: {
						isA: 'variable',
						varValue: null,
						label: 'Thursday Close',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '5:00 PM',
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					fridayOpen: {
						isA: 'variable',
						varValue: null,
						label: 'Friday Open',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '9:00 AM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					fridayClose: {
						isA: 'variable',
						varValue: null,
						label: 'Friday Close',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '5:00 PM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					saturdayOpen: {
						isA: 'variable',
						varValue: null,
						label: 'Saturday Open',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '9:00 AM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					saturdayClose: {
						isA: 'variable',
						varValue: null,
						label: 'Saturday Close',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '5:00 PM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					sundayOpen: {
						isA: 'variable',
						varValue: null,
						label: 'Sunday Open',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '9:00 AM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					sundayClose: {
						isA: 'variable',
						varValue: null,
						label: 'Sunday Close',
						captureNode: 'input',
						type: 'time',
						required: false,
						placeholder: '5:00 PM',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					}
				},
				holidays: {
					isA: 'variableSet',
					label: 'Holiday Hours',
					// here we want to display an 'addable' list of holidays where users can select the holiday and enter their hours for that day
				}
			}
		}
	},
	offersCollection: {
		isA: 'collection',
		label: 'Offers',
		offerObject: {
			isA: 'variableSet',
			label: variables['offersCollection']['offerObject']['name'] || 'Offer',
			name: {
				isA: 'variable',
				varValue: null,
				label: 'Name',
				captureNode: 'input',
				type: 'text',
				required: true,
				placeholder: 'My Offer',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			featureSet: {
				isA: 'variableSet',
				label: 'Feature Sets',
				// here we want to display an 'addable' list of feature-sets
				featureSetObject: {
					isA: 'variableSet',
					label: variables['offersCollection']['offerObject']['featureSet']['featureSetObject']['name'] || 'Feature Set',
					feature: {
						isA: 'variable',
						varValue: null,
						label: 'Feature',
						captureNode: 'input',
						type: 'text',
						required: true,
						placeholder: 'Feature of my offer',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					benefit: {
						isA: 'variable',
						varValue: null,
						label: 'Benefit',
						captureNode: 'input',
						type: 'text',
						required: true,
						placeholder: 'Benefit derived from my feature',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					},
					solution: {
						isA: 'variable',
						varValue: null,
						label: 'Solution',
						captureNode: 'input',
						type: 'text',
						required: true,
						placeholder: 'Solution derived from my benefit',
						defaultValue: null,
						description: 'This is the first name of the team member',
						examples: ['John', 'Jane', 'Joe'],
						tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
						generateWithAI: false,
					}
				}
			},
			associatedTestimonials: {
				isA: 'variableSet',
				label: 'Associated Testimonials',
				// here we want an option to 'link' testimonial to this location
				// i envision this being a dropdown of all testimonials
				// should also have the ability to 'add' a testimonial right from here (which will also populate a testimonial object in the testimonials collection)
			},
			mediaCollection: { // here we will be able to add multiple media items
				isA: 'variableSet',
				label: 'Media',
				media: {
					isA: 'variable',
					varValue: null,
					label: 'Media',
					captureNode: 'input',
					type: 'file',
					required: false,
					placeholder: 'My Media',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
			},
			description: {
				isA: 'variable',
				varValue: null,
				label: 'Description',
				captureNode: 'input',
				type: 'textarea',
				required: false,
				placeholder: 'Description of my offer',
				defaultValue: null,
				description: 'This is the first name of the team member',
				examples: ['John', 'Jane', 'Joe'],
				tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
				generateWithAI: false,
			},
			targetMarket: {
				isA: 'variableSet',
				label: 'Target Market',
				age: {
					isA: 'variable',
					varValue: null,
					label: 'Age',
					captureNode: 'input',
					type: 'select',
					required: false,
					placeholder: 'Age of the target market for this offer',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				gender: {
					isA: 'variable',
					varValue: null,
					label: 'Gender',
					captureNode: 'input',
					type: 'select',
					required: false,
					placeholder: 'Gender of the target market for this offer',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				income: {
					isA: 'variable',
					varValue: null,
					label: 'Income',
					captureNode: 'input',
					type: 'select',
					required: false,
					placeholder: 'Income of the target market for this offer',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				education: {
					isA: 'variable',
					varValue: null,
					label: 'Education',
					captureNode: 'input',
					type: 'select',
					required: false,
					placeholder: 'Education of the target market for this offer',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				politicalViews: {
					isA: 'variable',
					varValue: null,
					label: 'Political Views',
					captureNode: 'input',
					type: 'select',
					required: false,
					placeholder: 'Political Views of the target market for this offer',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				}
			},
			riskMitigation: {
				isA: 'variableSet',
				label: 'Risk Mitigation',
				warranty: {
					isA: 'variable',
					varValue: null,
					label: 'Warranty',
					captureNode: 'input',
					type: 'textarea', // this can be a link to a universal company warranty
					required: false,
					placeholder: 'Warranty for this offer',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
				refundPolicy: {
					isA: 'variable',
					varValue: null,
					label: 'Refund Policy',
					captureNode: 'input',
					type: 'textarea', // this can be a link to a universal company refund policy
					required: false,
					placeholder: 'Refund Policy for this offer',
					defaultValue: null,
					description: 'This is the first name of the team member',
					examples: ['John', 'Jane', 'Joe'],
					tips: ['This is the first name of the team member', 'This is the first name of the team member', 'This is the first name of the team member'],
					generateWithAI: false,
				},
			}
		}
	}
}