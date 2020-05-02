const express = require('express');
const routes = express.Router();

const Devices = require('./controllers/devices');

routes.get('/devices', Devices.list);
routes.get('/device/status', Devices.deviceStatus);
routes.get('/device/usage', Devices.deviceUsage);
routes.put('/toggle', Devices.toggle);

module.exports = routes;
