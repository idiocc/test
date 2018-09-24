import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import test from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof test, 'function')
  },
  async 'calls package without error'() {
    await test()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await test({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T