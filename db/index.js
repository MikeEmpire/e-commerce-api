const Pool = require("pg").Pool;

const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: 5432,
});

pool.on("connect", () => {
  console.log("connected to db");
});

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start;
      console.log("executed query", { text, duration });
      callback(err, res);
    });
  },
};
