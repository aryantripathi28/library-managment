import express from "express";
import {
  createOrder,
  getUserOrders,
  getAllOrders,
} from '../controllers/orderController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// User-specific routes
router.post('/create', protect, createOrder); // Create an order
router.get('/my-orders', protect, getUserOrders); // Get logged-in user's orders

// Admin-specific route
router.get('/all-orders', protect, isAdmin, getAllOrders); // Get all orders (admin only)

export default router;