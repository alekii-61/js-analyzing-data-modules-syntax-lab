require("datejs");

function combineUsers(...args) {
  const combinedObjects = {
    users: []
  }
  for (const array of args) {
    combinedObjects.users = [...combinedObjects.users, ...array ];

    combinedObjects.merge_date = Date.today().toString("M/d/yyyy");
  }
  return combinedObjects;
}
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};