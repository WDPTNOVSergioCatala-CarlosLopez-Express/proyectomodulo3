const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isValidUrl } = require("../utils/validations");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      minlength: [3, "Name must be at least 3 characters"],
    },
    surname: {
      type: String,
      required: "Surname is required",
      minlength: [3, "surname must be at least 3 characters"],
    },

    username: {
      type: String,
      required: "Name is required",
      minlength: [3, "Name must be at least 3 characters"],
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: "Password is required",
      minlength: [6, "Password must be at least 6 characters"],
    },
    address: {
      type: String,
      required: "Address is required",
    },
    profilePic: {
      type: String,
      required: "Profile Picture is required",
      validate: {
        validator: isValidUrl,
        message: "Not a valid picture url",
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
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

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(user.password, salt);
      })
      .then((hash) => {
        user.password = hash;
        next();
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

studentSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "author",
  justOne: false,
});

const User = mongoose.model("User", userSchema);
module.exports = User;

