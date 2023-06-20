const { Router } = require('express');
const OrderController = require('./app/controllers/OrderController');

const routes = Router();

routes.get('/orders', OrderController.index);

module.exports = routes;
