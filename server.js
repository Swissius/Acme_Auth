if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { syncAndSeed } = require('./db');
const app = require('./app');

const init = async () => {
  await syncAndSeed();
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`listening on port ${port}`));
};

init();
