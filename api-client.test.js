const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const getTheThing = require('./api-client');

test('handles 200 (happy path)', async () => {
  const mock = new MockAdapter(axios);
  mock.onAny().reply(200, { id: 42 });

  const result = await getTheThing(42);
  expect(result.thingWasFound).toBe(true);
  expect(result.thing.id).toBe(42);
});

test('handles 404', async () => {
  const mock = new MockAdapter(axios);
  mock.onAny().reply(404);

  const result = await getTheThing(42);
  expect(result.thingWasFound).toBe(false);
});
