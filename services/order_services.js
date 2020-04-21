const db = require("../db");
const getFormattedDate = require("../helpers/getFormattedDate");

const date = getFormattedDate(new Date());

const getOrders = async (res, id) => {
  const getOrderQuery = `SELECT * from orders WHERE user_id = $1`;
  return db.query(getOrderQuery, [id], (err, orderResults) => {
    if (err) throw new Error(err);
    return res.status(200).send({ addresses: orderResults.rows });
  });
};

const createOrders = async (orderInfo, res) => {
  const createOrderQuery = `INSERT INTO orders(items, created_on, address_id, user_id) VALUES($1, $2, $3, $4)`;
  const { items, address_id, user_id } = orderInfo;
  const createOrderValues = [
    items, date, address_id, user_id
  ];
  return db.query(createOrderQuery, createOrderValues, (err) => {
    if (err) throw new Error(err);
    return res.status(200).send({ message: `Success!! ` });
  });
};

const editOrder = async (columns, id, res) => {
  let updateQuery = `UPDATE orders SET`;
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

const deleteOrder = async (id, res) => {
  const deleteQuery = `DELETE FROM orders WHERE id=($1)`;
  return db.query(deleteQuery, [id], (err) => {
    if (err) throw new Error(err);

    return res.status(200).send({ message: `Address successfully deleted!` });
  });
};

module.exports = {
  createOrders,
  deleteOrder,
  editOrder,
  getOrders,
};
