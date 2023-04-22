const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
  name: {
    type: String,
    required: "Product name is required",
    minlength: [3, "Product name must be at least 3 characters"],
  },
  description: {
    type: String,
    required: "Description is required",
    minlength: [3, "Product description must be at least 3 characters"],
  },
  price: {
    type: Number,
    required: "Price is required",
    min: [0, "Price must be positive"],
  },
  reference: {
    type: String,
    required: "Reference is required",
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  category: {
    type: String,
    required: "Category is required",
  },
  subcategory: {
    type: String,
  },
  stock: {
    type: Number,
    required: "Stock is required",
    min: [0, "Stock must be at least 0"],
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
});

productSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
