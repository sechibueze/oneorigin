
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const Router = require('./Router');
app.use('/api', Router );

app.listen(port, () => {console.log('App started on' + port)});