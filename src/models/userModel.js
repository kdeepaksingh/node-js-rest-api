import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    full_Name: {
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
    avatar: {
      type: String,
      default: "",
    },
    mobile: {
      type: Number,
      default: "",
    },
    refresh_token: {
      type: String,
      default: "",
    },
    verify_email: {
      type: Boolean,
      default: false,
    },
    last_login_date: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
    address_details: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "address",
      },
    ],
    shopping_cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartProduct",
      },
    ],
    order_history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    ],
    forgot_password_otp: {
      type: String,
      default: "",
    },
    forgot_password_expiry: {
      type: Date,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
