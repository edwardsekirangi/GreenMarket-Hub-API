const Order = require('../models/order');

// GET all orders
exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

// GET single order
exports.getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

// POST new order
exports.createOrder = async (req, res, next) => {
  try {
    const { userId, products, total } = req.body;
    if (!userId || !products || !total) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const newOrder = new Order({ userId, products, total });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    next(err);
  }
};

// PUT update order
exports.updateOrder = async (req, res, next) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE order
exports.deleteOrder = async (req, res, next) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json({ message: 'Order deleted' });
  } catch (err) {
    next(err);
  }
};
