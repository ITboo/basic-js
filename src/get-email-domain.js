const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = email.indexOf('@');
  let result = email.slice(index + 1, email.length);
//если такого индекса нет
  if (result.indexOf('@') === '-1') {
    return result
  } else

    index = result.indexOf('@');
  result = result.slice(index + 1, email.length);

  return result

}

module.exports = {
  getEmailDomain
};
