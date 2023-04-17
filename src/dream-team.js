const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    members = members.filter((el) => typeof el === "string");
    let team = [];
    team = members.map((el) => el.trim()[0].toUpperCase());
    team = team.sort().join("");
    return team;
  }
  return false;
}

module.exports = {
  createDreamTeam,
};
