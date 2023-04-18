const mongoose = required("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
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
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          min: [-1, "min quantity of products is -1"],
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      min: [0, "min price is 0"],
    },
    adress: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      required: "Status is required",
      enum: ["pending", "paid"],
      default: "pending",
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
