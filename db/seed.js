const pool = require("./index");
const getFormattedDate = require("../helpers/getFormattedDate");

const date = getFormattedDate(new Date());

const seedCallback = (err, res) => {
  if (err) throw new Error(err);
  console.log(res);
};

const seedUserTable = () => {
  const seedUserTableQuery = `INSERT INTO users(email, first_name, last_name, password, created_on) VALUES($1, $2, $3, $4, $5)`;
  const userValues = ["example@gmail.com", "mike", "olie", "password1", date];
  pool.query(seedUserTableQuery, userValues, (err, res) => seedCallback(err, res));
};

const seedProductTable = () => {
  const seedProductTableQuery = `INSERT INTO products(name, SKU, image, price) VALUES ($1, $2, $3, $4)`;
  const productValues = ["Sample Product 1", "SAM-RED-001", "", 29.99];
  pool.query(seedProductTableQuery, productValues, (err, res) => seedCallback(err, res));
};

const seedAddressTable = () => {
  const seedAddressTableQuery = `INSERT INTO address(address_line_1, address_line_2, city, state, zip_code, user_id) VALUES ($1, $2, $3, $4, $5, $6)`;
  const addressValues = ["23216 Elm Ave", "", "Torrance", "California", 90505, 1];
  pool.query(seedAddressTableQuery, addressValues, (err, res) => seedCallback(err, res));
};

const seedOrderTable = () => {
    const seedOrderTableQuery = `INSERT INTO orders(user_id, items, created_on, address_id) VALUES($1, $2, $3, $4)`
const orderValues = [1, [1], date, 1]
    pool.query(seedOrderTableQuery, orderValues, (err, res) => seedCallback(err, res));
}

const seedTables = async () => {
    await seedUserTable();
    await seedProductTable();
    await seedAddressTable();
    return seedOrderTable();
}

seedTables();
