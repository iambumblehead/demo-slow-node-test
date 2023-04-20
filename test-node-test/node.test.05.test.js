import test from 'node:test';
import assert from 'node:assert/strict';
import apolloMocked from '../apolloMocked.js'
import packagejson from '../package.json' assert { type: 'json' }

Array.from(Array(packagejson.details.tests), (_, i) => {
  test(`test-${i}`, async () => {
    const server = await apolloMocked()

    assert.strictEqual(server.logger.name, 'apollo-server-test')
  })
})
