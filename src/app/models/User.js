import mongoose from "mongoose";
import { hash } from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
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
      required: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    return hash(user.password, 12, function (error, hash) {
      if (error) {
        return next(error);
      }

      user.password = hash;

      return next();
    });
  } else {
    return next();
  }
});

userSchema.virtual('fullname')
         .get(function() {
             return `${this.firstname} ${this.lastname}`
         });

export default mongoose.model("User", userSchema);
