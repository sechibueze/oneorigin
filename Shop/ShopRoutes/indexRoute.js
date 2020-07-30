const express = require('express');

const router = express.Router();

const usersRoute = require('./usersRoute');
/*****
 * @route /api/shop
 * @desc The base URL for Shop related endponts
 */
router.get('/', (req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Welcome to Shop API Home'
  });
});

router.use('/users', usersRoute);
module.exports = router;