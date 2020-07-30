const express = require('express');

const router = express.Router();
// api/todos
router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'posts routes'
  });
});

module.exports = router;