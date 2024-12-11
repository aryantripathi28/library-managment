import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    membership: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membership',
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

vendorSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Vendor= mongoose.model('Vendor', vendorSchema);
export default Vendor;
