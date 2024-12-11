import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);
export default Item;
