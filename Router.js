const express = require('express');

const router = express.Router();

const shopRouter = require('./Shop/ShopRoutes/indexRoute');
const todosRouter = require('./TodoList/TodoListRoutes/indexRouter');
const blogRouter = require('./Blog/BlogRoutes/indexRoute');
// api/
router.use('/shop', shopRouter);
router.use('/todos', todosRouter);
router.use('/blogs', blogRouter);

module.exports = router;