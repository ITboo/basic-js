const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.split("~~").length;
  },

  addLink(value) {
    if (this.chain.length) {
      this.chain = this.chain + `~~( ${value} )`;
      return this;
    } else {
      this.chain = this.chain + `( ${value} )`;
      return this;
    }
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.getLength()
    ) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.split("~~").filter((item, index) => {
      if (index !== position - 1) return item;
    })
      .join("~~");
    return this;
  },

  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },

  finishChain() {
    let finish = this.chain;
    this.chain = "";
    return finish;
  }
};

module.exports = {
  chainMaker
};
