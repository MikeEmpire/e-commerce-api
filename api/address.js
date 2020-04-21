const AddressService = require("../services/address_services");

exports.getAddress = async (req, res, next) => {
  try {
    const { id } = req.params;

    return AddressService.getAddress(id, res);
  } catch (err) {
    return next(err);
  }
};

exports.createAddress = async (req, res, next) => {
  try {
    const user = req.body;

    return AddressService.createAddress(user, res);
  } catch (err) {
    return next(err);
  }
};

exports.editAddress = async (req, res, next) => {
  try {
    const userInfo = req.body;

    const { id } = req.params;

    return AddressService.editAddress(userInfo, id, res);
  } catch (err) {
    return next(err);
  }
};

exports.deleteAddress = async (req, res, next) => {
  try {
    const { id } = req.params;

    return AddressService.deleteAddress(id, res);
  } catch (err) {
    return next(err);
  }
};
