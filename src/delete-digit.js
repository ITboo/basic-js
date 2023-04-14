const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nums = String(n).split('');
  let min;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      min = nums[i];
    }
  }
  if (!min) {
    min = Math.min(...`${n}`.split(''));
  }
  return +('' + n).replace(new RegExp(`${min}`), '');
}

module.exports = {
  deleteDigit
};
