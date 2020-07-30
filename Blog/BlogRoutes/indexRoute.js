const express = require('express');

const router = express.Router();
// api/blog
router.use('/', require('./postRoutes'));

module.exports = router;