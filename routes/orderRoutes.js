const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Private routes (logged in users)
router.post('/', protect, orderController.placeOrder);
router.get('/myorders', protect, orderController.getMyOrders);
router.get('/:id', protect, orderController.getOrderById);

// Admin only routes
router.get('/', protect, adminOnly, orderController.getAllOrders);
router.put('/:id', protect, adminOnly, orderController.updateOrderStatus);

module.exports = router;