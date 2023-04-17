const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if(date === undefined) { 
    return 'Unable to determine the time of year!'
  };
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
    throw new Error("Invalid date!")
  };
  let month = (date).getMonth() + 1 
  if (month === 12 || month === 1 || month === 2) return 'winter'
  if (month < 6 ) return 'spring'
  if (month < 9 ) return 'summer'
  if (month < 12 ) return 'autumn'
}

module.exports = {
  getSeason,
};
