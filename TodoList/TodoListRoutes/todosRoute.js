const express = require('express');

const router = express.Router();
// api/todos
router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Todos routes'
  });
});

module.exports = router;