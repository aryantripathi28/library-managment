import express from "express";
import {
  maintenanceMenu,
  addMembership,
  updateMembership,
  manageUsers,
  manageVendors,
} from '../controllers/adminController.js';

import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/maintenance', protect, isAdmin, maintenanceMenu); // Access maintenance menu
router.post('/membership/add', protect, isAdmin, addMembership); // Add membership
router.put('/membership/update', protect, isAdmin, updateMembership); // Update membership
router.get('/users/manage', protect, isAdmin, manageUsers); // Manage users
router.get('/vendors/manage', protect, isAdmin, manageVendors); // Manage vendors

export default router;