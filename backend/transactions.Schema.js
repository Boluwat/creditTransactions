const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: Number,
    fee: Number,
    // date: Date,
  },
  { strict: "throw", timestamps: true }
);
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {
  Transaction,
};
