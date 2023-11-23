function removeEmptyKeys(json) {
	for (const [key, value] of Object.entries(json)) {
		if (value === null || value === '' || value === undefined) {
			delete json[key];
		} else if (typeof value === 'object' && !Array.isArray(value)) {
			removeEmptyKeys(value);
			if (Object.keys(value).length === 0) {
				delete json[key];
			}
		} else if (Array.isArray(value)) {
			json[key] = value.filter(item => item !== null && item !== '' && item !== undefined);
			if (json[key].length === 0) {
				delete json[key];
			}
		}
	}
	return json;
}
function replaceRepeatObjects(obj, idMap = {}) {
	const replaceObject = (o) => {
		if (o && typeof o === 'object') {
			if (o.hasOwnProperty('@id')) {
				const id = o['@id'];
				if (idMap[id]) {
					return { '@id': id };
				} else {
					idMap[id] = true;
				}
			}
			for (const key in o) {
				if (o.hasOwnProperty(key)) {
					o[key] = replaceObject(o[key]);
				}
			}
		}
		return o;
	};
	return replaceObject(obj);
}
function removeTypesWithUnmetRequiredKeys(data) {
	if (Array.isArray(data)) {
		return data.map(item => removeTypesWithUnmetRequiredKeys(item));
	} else if (typeof data === 'object') {
		const requiredKeys = data._requiredKeys || [];
		let newData = {};
		for (const [key, value] of Object.entries(data)) {
			if (key === '_requiredKeys') continue;
			if (typeof value === 'object') {
				if (requiredKeys.some(reqKey => value[reqKey] === undefined || value[reqKey] === null || value[reqKey] === '')) {
					// Skip adding the current key-value pair to the new data object
					continue;
				} else {
					newData[key] = removeTypesWithUnmetRequiredKeys(value);
				}
			} else {
				newData[key] = value;
			}
		}
		return newData;
	}
}