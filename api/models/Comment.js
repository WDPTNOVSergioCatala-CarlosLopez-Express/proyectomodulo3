const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: "Comment text is required",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: "Comment product is required",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Comment author is required",
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



const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
