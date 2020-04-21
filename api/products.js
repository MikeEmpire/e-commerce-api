const ProductService = require("../services/product_services");

exports.getProducts = async (req, res, next) => {
  try {
    return ProductService.getProducts(res);
  } catch (err) {
    return next(err);
  }
};

exports.createProducts = async (req, res, next) => {
  try {
    const user = req.body;

    return ProductService.createProducts(user, res);
  } catch (err) {
    return next(err);
  }
};

exports.editProduct = async (req, res, next) => {
  try {
    const userInfo = req.body;

    const { id } = req.params;

    return ProductService.editProduct(userInfo, id, res);
  } catch (err) {
    return next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    return ProductService.deleteProduct(id, res);
  } catch (err) {
    return next(err);
  }
};
