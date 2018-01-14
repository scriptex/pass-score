/**
 * Default array with regexp conditions
 * @type {Array}
 */
const patterns = [
  /\d/, // Digits
  /[A-Z]/, // Uppercase letters
  /[\W_,!?@*\(\)]/, // Special characters
  /^.{8}/ // At least 8 characters
];

/**
 * Checks the score of a password input string
 * against an array of regexp conditions
 *
 * @param  {String} pass - Password as a string
 * @param  {Array}  conditions - Array of Regular Expressions
 *
 * @return {Number}
 */
const passScore = (pass, conditions = patterns) => {
  // Convert undefined password to string
  if (typeof pass === 'undefined') {
    pass = '';
  }

  // Convert everything to empty string
  try {
    pass = pass.toString();
  } catch(e) {
    // If null - convert to empty string
    pass = '';
  }

  return conditions.reduce((accumulator, pattern) => {
    return accumulator + pattern.test(pass);
  }, 0);
};

export default passScore;
