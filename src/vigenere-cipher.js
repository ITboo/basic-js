const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect == false) this.reverse = true;
  }

  decrypt(m, k) {
    if (!m || !k) {
      throw new Error("Incorrect arguments!");
    }
    m = m.toUpperCase();
    k = k.toUpperCase();
    let str = "";
    let j = 0;
    for (let i = 0; i < m.length; i++) {
      if (alphabet.includes(m[i])) {
        let mi = alphabet.indexOf(m[i]);
        let ki_s = k[j >= k.length ? j % k.length : j];
        let ki = alphabet.indexOf(ki_s);
        let c = alphabet[(26 + mi - ki) % 26];
        str += c;
        j++;
      } else str += m[i];
    }
    return this.reverse ? str.split("").reverse().join("") : str;
  }

  encrypt(m, k) {
    if (!m || !k) {
      throw new Error("Incorrect arguments!");
    }
    m = m.toUpperCase();
    k = k.toUpperCase();
    let str = "";
    let j = 0;
    for (let i = 0; i < m.length; i++) {
      if (alphabet.includes(m[i])) {
        let mi = alphabet.indexOf(m[i]);
        let ki_s = k[j >= k.length ? j % k.length : j];
        let ki = alphabet.indexOf(ki_s);
        let c = alphabet[(mi + ki) % 26];
        str += c;
        j++;
      } else str += m[i];
    }
    return this.reverse ? str.split("").reverse().join("") : str;
  }
}

module.exports = {
  VigenereCipheringMachine
};
