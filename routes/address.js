
const Router = require('express-promise-router')

const router = new Router();

// const authCheck = require('../config/middleware/authCheck');
// const { Permissions } = require('../config/permissions');

// eslint-disable-next-line camelcase
const address_api = require("../api/address");
// const cache = require('../middleware/cache/roles');

router.get("/:id", address_api.getAddress);

router.post('/', address_api.createAddress)

router.put('/:id', address_api.editAddress);

router.delete('/:id', address_api.deleteAddress)

module.exports = router;
