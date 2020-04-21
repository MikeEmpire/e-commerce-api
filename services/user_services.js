const bcrypt = require("bcrypt");

const db = require("../db");
const getFormattedDate = require("../helpers/getFormattedDate");

const date = getFormattedDate(new Date());

const getUser = async (id, res) => {
  const getUserQuery = `SELECT * FROM users WHERE id = $1`;
  return db.query(getUserQuery, [id], (err, results) => {
    if (err) throw new Error(err);
    if (typeof results.rows[0] !== 'object') {
      return res.status(500).send({ message: "User not found!" });
    }
    return res.status(200).send({ user: results.rows[0] });
  });
};

const createUser = async (userInfo, res) => {
  const { email, first_name, last_name, password } = userInfo;
  if (typeof password !== "string") {
    throw new Error("Please provide a valid string for your password");
  }
  return bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw new Error(err);
    const createUserQuery = `INSERT INTO users(email, first_name, last_name, password, created_on) VALUES ($1, $2, $3, $4, $5)`;
    const values = [email, first_name, last_name, hash, date];
    return db.query(createUserQuery, values, (createErr) => {
      if (createErr) throw new Error(createErr);
      return res.status(200).send({ message: "User successfully created!" });
    });
  });
};

const editUser = async (columns, id, res) => {
  /********
   * Cols expected structure
   * {
   *  email: value,
   *  first_name: value
   * }
   ********/
  let updateQuery = `UPDATE users SET`;
  const col = Object.keys(columns);
  const updateValues = Object.values(columns);
  for (let i = 0; i < col.length; i += 1) {
    updateQuery += ` ${col[i]}=($${i + 1})${i + 1 !== col.length ? "," : ""}`;
  }
  updateQuery = updateQuery += ` WHERE id = ${id}`;

  return db.query(updateQuery, updateValues, (err) => {
    if (err) throw new Error(err);

    return res.status(200).send({ message: "Successfully updated user!" });
  });
};

const deleteUser = async (id, res) => {
  const deleteQuery = `DELETE FROM users WHERE id=($1)`;
  db.query(deleteQuery, [id], (deleteErr) => {
    if (deleteErr) throw new Error(deleteErr);
    return res.status(200).send({ message: "User successfully deleted!" });
  });
};

module.exports = {
  createUser,
  deleteUser,
  editUser,
  getUser,
};
