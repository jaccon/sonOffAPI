const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const { apiHttpPort } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(apiHttpPort);

