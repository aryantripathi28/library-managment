import mongoose from "mongoose";

const guestListSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    details: { type: String, required: true }
}, { timestamps: true });

const GuestList = mongoose.model('GuestList', guestListSchema);
export default GuestList;
