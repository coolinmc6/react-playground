export const generateID = () => Math.floor(Math.random()*1000000000000000000000);

export const languageIdentifier = (language) => {
	let identifiedLanguage;
	switch(language) {
		case 'CSS':
		case 'css':
			identifiedLanguage = 'css';
			break;
		case 'HTML':
		case 'html':
			identifiedLanguage = 'html';
			break;
		case 'JavaScript':
		case 'Javascript':
		case 'javaScript':
			identifiedLanguage = "javascript";
			break;
		case 'PHP':
		case 'php':
		case 'Php':
			identifiedLanguage = 'php';
			break;
		case 'Python':
			identifiedLanguage = 'python';
			break;

		default:
			identifiedLanguage = 'unidentified';
			break;
	}

	return identifiedLanguage;
}