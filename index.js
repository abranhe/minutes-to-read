'use strict';

const optionalText = text => {
	if (typeof text === 'number' || text === undefined) {
		text = '';
	}

	return text || 'min to read';
};

module.exports = (text, altTextOrWpm, wpm) => {
	if (typeof text !== 'string') {
		throw new TypeError(
			`Expected an String in the first argument, got ${typeof text}`,
		);
	}

	/* here it is */
	if (typeof altTextOrWpm !== undefined) {
		if (typeof altTextOrWpm !== 'string' && typeof altTextOrWpm !== 'number') {
			throw new TypeError(
				`your error`,
			);
		}
	}

	if (wpm !== undefined && typeof wpm !== 'number') {
		throw new TypeError(
			`Expected a Number in the third argument, got ${typeof wpm}`,
		);
	}

	let wordsPerMin = 265;

	if (typeof altTextOrWpm === 'number') {
		wordsPerMin = altTextOrWpm;
	}

	if (wpm !== undefined && typeof wpm === 'number') {
		wordsPerMin = wpm;
	}

	const timeTaken = Math.round(text.split(' ').length / wordsPerMin);
	return `${timeTaken || 'less than a'} ${optionalText(altTextOrWpm)}`;
};
