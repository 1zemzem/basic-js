const { NotImplementedError } = require("../extensions/index.js");

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
  let str = n.toString();
  let num = 0;

  for (let i = 0; i < str.length; i++) {
    let res = str.replace(str[i], "");

    if (Number(res) > num) {
      num = Number(res);
    }
  }
  return num;
}

module.exports = {
  deleteDigit,
};
