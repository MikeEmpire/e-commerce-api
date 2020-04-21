const OrdersService = require("../services/order_services");

exports.getOrders = async (req, res, next) => {
  try {
    const { id } = req.params;

    return OrdersService.getOrders(id, res);
  } catch (err) {
    return next(err);
  }
};

exports.createOrders = async (req, res, next) => {
  try {
    const user = req.body;

    return OrdersService.createOrders(user, res);
  } catch (err) {
    return next(err);
  }
};

exports.editOrder = async (req, res, next) => {
  try {
    const userInfo = req.body;

    const { id } = req.params;

    return OrdersService.editOrder(userInfo, id, res);
  } catch (err) {
    return next(err);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;

    return OrdersService.deleteOrder(id, res);
  } catch (err) {
    return next(err);
  }
};
