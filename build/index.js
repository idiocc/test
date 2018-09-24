const { debuglog } = require('util');

const LOG = debuglog('@idio/test')

/**
 * a test for type
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
               async function test(config) {
  const {
    type,
  } = config
  LOG('@idio/test called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */


module.exports = test
//# sourceMappingURL=index.js.map