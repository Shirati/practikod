const sdk = require('api')('@render-api/v1.0#5yi85d37lhqedd36');

sdk.auth('rnd_58N7hBqjEA93gScEYxnlzuMEafm4');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
