const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  };

  let result = [];
  var copy = arr.slice();
  for (let i = 0; i < copy.length; i++) {
    if ((copy[i] === undefined) || (copy[i] === '--double-prev' && copy[i - 1] === undefined) || (copy[i] === '--discard-prev' && copy[i - 1] === undefined)) {
      continue;
    } else if (i === 0 && (copy[i] === '--discard-prev' || copy[i] === '--double-prev')) {
      continue;
    } else if (i === copy.length - 1 && (copy[i] === '--double-next' || copy[i] === '--discard-next')) {
      continue;
    } else {
      if (copy[i] === '--discard-next' && copy[i + 1] !== undefined) {
        delete copy[i + 1];
      } else if (copy[i] === '--discard-prev' && copy[i - 1] !== undefined) {
        result.pop();
      } else if (copy[i] === '--double-next' && copy[i + 1] !== undefined) {
        result.push(copy[i + 1]);
      } else if (copy[i] === '--double-prev' && copy[i - 1] !== undefined) {
        result.push(copy[i - 1]);
      } else result.push(copy[i]);

    }
  }
  return result;
}

module.exports = {
  transform
};
