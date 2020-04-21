const users = require("./routes/users");
const products = require("./routes/products");
const orders = require("./routes/orders");
const address = require("./routes/address");

module.exports = (app) => {
  app.use("/api/users", users);
  app.use("/api/products", products);
  app.use("/api/orders", orders);
  app.use("/api/address", address);

  // If error is passed from next(error)
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (!err.statusCode) {
      // eslint-disable-next-line no-param-reassign
      err.statusCode = 500;
    }

    return res.status(err.statusCode).send(err.message);
  });
};
