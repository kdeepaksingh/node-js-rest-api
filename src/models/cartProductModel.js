import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: "",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: "",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const CartProductModel = mongoose.model("cartProduct", cartProductSchema);

export default CartProductModel;
