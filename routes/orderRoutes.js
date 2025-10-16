const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticate } = require('../middleware/auth'); // OAuth middleware

router.get('/', orderController.getOrders);
router.get('/:id', orderController.getOrderById);
router.post('/', authenticate, orderController.createOrder);
router.put('/:id', authenticate, orderController.updateOrder);
router.delete('/:id', authenticate, orderController.deleteOrder);

module.exports = router;
