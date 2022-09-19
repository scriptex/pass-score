const patterns: RegExp[] = [
	/\d/, // Digits
	/[A-Z]/, // Uppercase letters
	/[\W_,!?@*\(\)]/, // Special characters
	/^.{8}/ // At least 8 characters
];

export const passScore = (pass: string, conditions = patterns): number => {
	if (typeof pass === 'undefined') {
		pass = '';
	}

	try {
		pass = pass.toString();
	} catch (e) {
		pass = '';
	}

	return conditions.reduce((result: number, pattern: RegExp) => result + (pattern.test(pass) ? 1 : 0), 0);
};

export default passScore;
