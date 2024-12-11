import express from "express";
import {
  viewCart,
  addToCart,
  checkoutCart,
  viewGuestList,
  updateGuestList,
  deleteGuest,
  checkOrderStatus,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/cart', protect, viewCart); // View cart
router.post('/cart/add', protect, addToCart); // Add to cart
router.post('/cart/checkout', protect, checkoutCart); // Checkout

router.get('/guest-list', protect, viewGuestList); // View guest list
router.put('/guest-list/update', protect, updateGuestList); // Update guest list
router.delete('/guest-list/delete', protect, deleteGuest); // Delete guest

router.get('/order-status', protect, checkOrderStatus); // Check order status

export default router;