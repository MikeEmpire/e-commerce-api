const pool = require("./index");

const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users 
    (id SERIAL PRIMARY KEY,
    email VARCHAR(70) UNIQUE NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(100) NOT NULL,
    created_on TIMESTAMP NOT NULL
    )`;
  pool.query(userCreateQuery, [], (err, res) => {
    if (err) throw new Error(err);
    console.log(res);
  });
};

const createProductTable = () => {
  const productCreateQuery = `CREATE TABLE IF NOT EXISTS products
    (id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    SKU VARCHAR(100) UNIQUE NOT NULL,
    image VARCHAR(100),
    price NUMERIC NOT NULL,
    last_updated TIMESTAMP NOT NULL
    )`;
  pool.query(productCreateQuery, [], (err, res) => {
    if (err) throw new Error(err);
    console.log(res);
  });
};

const createAddressTable = () => {
  const addressCreateQuery = `CREATE TABLE IF NOT EXISTS address
    (id SERIAL PRIMARY KEY,
    address_line_1 VARCHAR(255) NOT NULL,
    address_line_2 VARCHAR(255),
    city VARCHAR(60),
    state VARCHAR(70),
    zip_code VARCHAR(60),
    type VARCHAR(20),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    )`;
  pool.query(addressCreateQuery, [], (err, res) => {
    if (err) throw new Error(err);
    console.log(res);
  });
};

const createOrderTable = () => {
  const orderCreateQuery = `CREATE TABLE IF NOT EXISTS orders
    (user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    id SERIAL PRIMARY KEY,
    items int[],
    created_on TIMESTAMP NOT NULL,
    address_id INTEGER REFERENCES address(id) ON DELETE CASCADE
    )`;
  pool.query(orderCreateQuery, [], (err, res) => {
    if (err) throw new Error(err);
    console.log(res);
  });
};

const createTables = async () => {
  await createUserTable();
  await createProductTable();
  await createAddressTable();
  await createOrderTable();
};

createTables();
