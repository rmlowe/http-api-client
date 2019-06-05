const getTheThing = require('./api-client');

getTheThing(42)
  .then(response => console.log(response))
  .catch(error => console.log(error));
