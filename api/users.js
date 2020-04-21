const UserService = require("../services/user_services");

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    return UserService.getUser(id, res);
  } catch (err) {
    return next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = req.body;

    return UserService.createUser(user, res);
  } catch (err) {
    return next(err);
  }
};

exports.editUser = async (req, res, next) => {
  try {
    const userInfo = req.body;

    const { id } = req.params;

    return UserService.editUser(userInfo, id, res);
  } catch (err) {
    return next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    return UserService.deleteUser(id, res);
  } catch (err) {
    return next(err);
  }
};
