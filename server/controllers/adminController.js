import Membership from '../models/Membership.js';
import User from '../models/User.js';
import Vendor from '../models/Vendor.js';

// Maintenance Menu Access
export const maintenanceMenu = (req, res) => {
    res.status(200).json({ message: 'Admin Maintenance Menu Accessed' });
};

// Add Membership
export const addMembership = async (req, res) => {
    try {
        const { vendorId, duration } = req.body;
        if (!vendorId || !duration) return res.status(400).json({ message: 'All fields are mandatory' });

        const membership = new Membership({ vendorId, duration });
        await membership.save();
        res.status(201).json({ message: 'Membership added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Membership
export const updateMembership = async (req, res) => {
    try {
        const { membershipId, duration } = req.body;
        if (!membershipId || !duration) return res.status(400).json({ message: 'Membership ID and Duration are mandatory' });

        const membership = await Membership.findByIdAndUpdate(membershipId, { duration }, { new: true });
        res.status(200).json({ message: 'Membership updated', membership });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Manage Users
export const manageUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Manage Vendors
export const manageVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json(vendors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
