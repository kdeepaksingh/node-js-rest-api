import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: "",
    },
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
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
    ],
    product_details: {
      name: String,
      image: Array,
    },
    paymentId: {
      type: String,
      default: "",
    },
    payment_status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    delivery_address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
      default: "",
    },
    subTotalAmount: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    invoice_receipt: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("order", orderSchema);

export default OrderModel;
