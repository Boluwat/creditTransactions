const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    balance: Number,
    transactions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
    ],
  },
  { strict: "throw", timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
