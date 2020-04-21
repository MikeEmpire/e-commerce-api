const db = require("../db");
const getFormattedDate = require("../helpers/getFormattedDate");

const date = getFormattedDate(new Date());

const getProducts = async (res) => {
  const getProductsQuery = `SELECT * from products`;
  return db.query(getProductsQuery, [], (err, productResults) => {
    if (err) throw new Error(err);
    return res.status(200).send({ products: productResults.rows });
  });
};

const createProducts = async (productInfo, res) => {
  const createProductQuery = `INSERT INTO products(name, sku, image, price, last_updated) VALUES($1, $2, $3, $4, $5)`;
  const { name, SKU, image, price } = productInfo;
  const last_updated = date;
  const createProductValues = [name, SKU, image, price, last_updated];
  return db.query(createProductQuery, createProductValues, (err) => {
    if (err) throw new Error(err);
    return res.status(200).send({ message: `Successfully created ${name}! ` });
  });
};

const editProduct = async (columns, id, res) => {
  let updateQuery = `UPDATE products SET`;
  const col = Object.keys(columns);
  const updateValues = Object.values(columnds);
  for (let i = 0; i < col.length; i += 1) {
    updateQuery += ` ${col[i]}=($${i + 1})${i + 1 !== col.length ? "," : ""}`;
  }
  updateQuery = updateQuery += ` WHERE id = ${id}`;

  return db.query(updateQuery, updateValues, (err) => {
    if (err) throw new Error(err);

    return res.status(200).send({ message: `Successfully updated a product!` });
  });
};

const deleteProduct = async (id, res) => {
  const updateQuery = `DELETE FROM products WHERE id=($1)`;
  return db.query(updateQuery, [id], (err) => {
    if (err) throw new Error(err);

    return res.status(200).send({ message: `Product successfully deleted!` });
  });
};

module.exports = {
  createProducts,
  deleteProduct,
  editProduct,
  getProducts,
};
