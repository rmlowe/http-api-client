const axios = require('axios');

async function getTheThing(id) {
  try {
    const response = await axios.get('https://api.example.com/thing', {
      params: {
        id: id
      }
    });
    return { thingWasFound: true, thing: response.data };
  } catch (error) {
    if (error.response.status === 404) {
      return { thingWasFound: false };
    } else {
      throw error;
    }
  }
}

module.exports = getTheThing;
