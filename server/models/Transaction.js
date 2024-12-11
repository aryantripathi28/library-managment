import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    transactionDate: { type: Date, default: Date.now }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction
