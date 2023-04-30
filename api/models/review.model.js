const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    text: {
      type: String,
      required: "Review text is required",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: "Review product is required",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Review author is required",
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: "Review rating is required",
    }
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

reviewSchema.virtual("user", {
  ref: "user",
  localField: "author",
  foreignField: "name",
  justOne: false,
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
