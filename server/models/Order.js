import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
        quantity: { type: Number, required: true }
    }],
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
    totalAmount: { type: Number, required: true }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
