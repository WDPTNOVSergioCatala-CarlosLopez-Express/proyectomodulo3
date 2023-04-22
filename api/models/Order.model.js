const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      required: "Order number is required",
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        name: {
          type: String,
          required: true,
      },
      quantity: { 
        type: Number,
        required: true,
        min: [1, "min quantity is 1"],
      },
      image: {
        type: String,
        required: true,
        },
        price: {
          type: Number,
          required: true,
          min: [0, "min price is 0"]
        },
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      min: [0, "min price is 0"],
    },
    shippingAddress: {
      address: {type: String, required: true},
      city: {type: String, required: true},
      postalCode: {type: String, required: true},
      country: {type: String, required: true},
    },
    paymentMethod: {
      type: String,
      required: "Payment method is required",
      enum: ["paypal", "card"],
      default: "card",
      },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String }
      },
      totalPrice: {
        type: Number,
        required: true,
        min: [0, "min price is 0"],
        default: 0,
      },
      isPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
      paidAt: {
        type: Date,
      },
      
    
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
