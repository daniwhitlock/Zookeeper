const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));// linking front end code
app.use(express.urlencoded({ extended: true})); // parse incoming string or array data
app.use(express.json());// parse incomgin JSON data

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});