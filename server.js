const app = require("./bin/app");

require("dotenv").config();

/********
 *
 * INITIALIZE PORT
 *
 *********/

const PORT = process.env.PORT || 3000;

/********
 *
 * INITIALIZE LOGGER
 *
 *********/

const logger = require("morgan");

app.use(logger("dev"));

/********
 *
 * INITIALIZE ROUTES
 *
 *********/

app.get('/', (req, res) => res.send('Welcome to the API'))

require('./routes')(app);

/********
 *
 * LISTEN TO EXPRESS SERVER
 *
 *********/

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
