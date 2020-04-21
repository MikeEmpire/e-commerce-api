
const Router = require('express-promise-router')

const router = new Router();

// const authCheck = require('../config/middleware/authCheck');
// const { Permissions } = require('../config/permissions');

// eslint-disable-next-line camelcase
const orders_api = require("../api/orders");
// const cache = require('../middleware/cache/roles');

router.get("/:id", orders_api.getOrders);

router.post('/', orders_api.createOrders)

router.put('/:id', orders_api.editOrder);

router.delete('/:id', orders_api.deleteOrder)

module.exports = router;
