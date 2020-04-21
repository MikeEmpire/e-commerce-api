const db = require("../db");
const getFormattedDate = require("../helpers/getFormattedDate");

const date = getFormattedDate(new Date());

const getAddress = async (res, id) => {
  const getAddressQuery = `SELECT * from products WHERE id = $1`;
  return db.query(getAddressQuery, [id], (err, productResults) => {
    if (err) throw new Error(err);
    return res.status(200).send({ addresses: productResults.rows });
  });
};

const createAddress = async (addressInfo, res) => {
  const createAddressQuery = `INSERT INTO address(address_line_1,
    address_line_2,
    city,
    state,
    zip_code,
    type,
    user_id) VALUES($1, $2, $3, $4, $5, $6, $7)`;
  const {
    address_line_1,
    address_line_2,
    city,
    state,
    zip_code,
    type,
    user_id,
  } = addressInfo;
  const createAddressValues = [
    address_line_1,
    address_line_2,
    city,
    state,
    zip_code,
    type,
    user_id,
  ];
  return db.query(createAddressQuery, createAddressValues, (err) => {
    if (err) throw new Error(err);
    return res.status(200).send({ message: `Success!! ` });
  });
};

const editAddress = async (columns, id, res) => {
  let updateQuery = `UPDATE address SET`;
  const col = Object.keys(columns);
  const updateValues = Object.values(columnds);
  for (let i = 0; i < col.length; i += 1) {
    updateQuery += ` ${col[i]}=($${i + 1})${i + 1 !== col.length ? "," : ""}`;
  }
  updateQuery = updateQuery += ` WHERE id = ${id}`;

  return db.query(updateQuery, updateValues, (err) => {
    if (err) throw new Error(err);

    return res.status(200).send({ message: `Success!!` });
  });
};

const deleteAddress = async (id, res) => {
  const deleteQuery = `DELETE FROM products WHERE id=($1)`;
  return db.query(deleteQuery, [id], (err) => {
    if (err) throw new Error(err);

    return res.status(200).send({ message: `Address successfully deleted!` });
  });
};

module.exports = {
  createAddress,
  deleteAddress,
  editAddress,
  getAddress,
};
