
const Router = require('express-promise-router')

const router = new Router();

// const authCheck = require('../config/middleware/authCheck');
// const { Permissions } = require('../config/permissions');

// eslint-disable-next-line camelcase
const users_api = require("../api/users");
// const cache = require('../middleware/cache/roles');

router.get("/:id", users_api.getUser);

router.post('/', users_api.createUser)

router.put('/:id', users_api.editUser);

router.delete('/:id', users_api.deleteUser)

module.exports = router;
