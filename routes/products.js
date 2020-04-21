const Router = require('express-promise-router')

const router = new Router();

// const authCheck = require('../config/middleware/authCheck');
// const { Permissions } = require('../config/permissions');

// eslint-disable-next-line camelcase
const products_api = require("../api/products");
// const cache = require('../middleware/cache/roles');

router.get("/", products_api.getProducts);

router.post('/', products_api.createProducts);

router.put('/:id', products_api.editProduct);

router.delete('/:id', products_api.deleteProduct);

module.exports = router;
