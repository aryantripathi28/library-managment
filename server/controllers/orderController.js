import Order from '../models/Order.js';

// Create an order
export const createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;

  try {
    const order = await Order.create({
      user: req.user.id,
      products,
      totalAmount,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders by the logged-in user
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders (admin functionality)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products.product user');

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

