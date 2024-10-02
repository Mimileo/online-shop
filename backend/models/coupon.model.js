import mongoose from "mongoose";

// define coupon schema
const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
}, { timestamps: true });

// based off the coupon schema we create a coupon model
// this model is used to create, read, update, and delete
// mongoose.model(name of model, schema) - name of model is uppercase because it is a class
const Coupon = mongoose.model("Coupon", couponSchema);

// then we export the coupon model to make it available to other files
export default Coupon;