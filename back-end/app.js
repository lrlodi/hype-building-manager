const express = require('express');
const http = require('http');
const cors = require('cors');
const { errorMw } = require('./api/middlewares/errorMw');

const buildingRoute = require('./api/routes/building');
const appartmentRoute = require('./api/routes/appartment');

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use('/building', buildingRoute);
app.use('/appartment', appartmentRoute);

app.use(errorMw);

module.exports = httpServer;
