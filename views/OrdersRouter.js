
const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/OrdersController');


router.post('/', OrdersController.placeNewOrder);

router.get('/', OrdersController.allOrders);

module.exports = router;