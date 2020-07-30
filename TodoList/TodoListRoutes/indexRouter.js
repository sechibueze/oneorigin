const express = require('express');

const router = express.Router();
// api/todos
router.use('/', require('./todosRoute'));

module.exports = router;