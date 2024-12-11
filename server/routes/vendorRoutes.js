import express from "express";
import {
  viewItems,
  addItem,
  deleteItem,
  viewTransactions,
} from '../controllers/vendorController.js';
import { protect, isVendor } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/items', protect, isVendor, viewItems); // View all items
router.post('/items/add', protect, isVendor, addItem); // Add new item
router.delete('/items/delete', protect, isVendor, deleteItem); // Delete an item

router.get('/transactions', protect, isVendor, viewTransactions); // View transactions

export default router;