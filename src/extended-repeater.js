const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let repeat = 1;
  let addRepeat = 1;
  let separator = '+';
  let addSeparator = '|';
  let addition = '';

  for (const property in options) {


    if (property === 'repeatTimes') {
      repeat = options[property];

    }
    else if (property === 'separator') {
      separator = options[property];

    }
    else if (property === 'addition') {
      addition = options[property];

    }
    else if (property === 'additionRepeatTimes') {
      addRepeat = options[property];

    }
    else if (property === 'additionSeparator') {
      addSeparator = options[property];

    }

  };

  if ((addRepeat === 1)) { addSeparator = '' };

  let result = '';
  let addCall = (addition + addSeparator).repeat(addRepeat)
  addCall = addCall.slice(0, addCall.length - addSeparator.length)
  for (let i = 0; i < repeat; i++) {
    result += str + addCall + separator
  }

  result = result.slice(0, result.length - separator.length)

  return result
}

module.exports = {
  repeater
};
