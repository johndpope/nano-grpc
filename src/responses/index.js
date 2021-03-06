const RESPONSES = ["blocks", "peers"];

module.exports = function(client) {
  let mergedExports = {};
  for (let i = 0; i < RESPONSES.length; i++) {
    Object.assign(mergedExports, require(`./${RESPONSES[i]}`)(client));
  }

  return mergedExports;
};
