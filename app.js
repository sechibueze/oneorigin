const express = require('express');
const app = express();

const Router = require('./Router');
app.use('/api', Router );

module.exports = app;