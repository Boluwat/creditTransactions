const { User } = require("./user.Schema");
const { Transaction } = require("./transactions.Schema");

const registerUser = async (request) => {
  const newUser = request.payload;

  const existingUser = await User.findOne({ email: newUser.email });

  if (existingUser) {
    return { error: "User already exists" };
  }
  newUser.balance = 1000; // set initial balance to $1000

  const user = await User.create(newUser);
  if (user) return { newUser };
};

const transferCredit = async (request) => {
  try {
    let fee = 10;
    const transfer = request.payload;

    const sender = await User.findById(transfer.sender);
    const recipient = await User.findById(transfer.recipient);

    transfer.fee = fee;

    if (!sender || !recipient) {
      return { error: "This User are not found" };
    }

    if (sender.balance < transfer.amount + fee) {
      return { error: "Insufficient balance" };
    }

    const transactions = await Transaction.create(transfer);

    sender.balance -= transfer.amount + fee;
    recipient.balance += transfer.amount;
    sender.transactions.push(transactions._id);
    recipient.transactions.push(transactions._id);

    await Promise.all([sender.save(), recipient.save()]);

    return { transactions };
  } catch (e) {
    console.log(e);
  }
};

const getUserBalance = async (request) => {
  const { id } = request.params;
  const user = await User.findById(id).populate('transactions');

  if (!user) {
    return { error: "User is not found" };
  }
  return { balance: user.balance, transactions: user.transactions };
};

module.exports = {
  registerUser,
  transferCredit,
  getUserBalance,
};
