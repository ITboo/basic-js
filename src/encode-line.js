const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let count = 1
	let result = ''
	for (let i = 0; i < str.length; i++ ) {
	  	if ((i < str.length) && (str[i] !== str[i + 1])) {
			if (count > 1) {
		  		result = result + count.toString()
		  		count = 1
			}
		  	result = result + str[i]
		}
		else if ((i < str.length) && (str[i] === str[i + 1])) {
			count++
		}
		else {
			result = result + str[i]
		}
	  }
	return result
}

module.exports = {
  encodeLine
};
