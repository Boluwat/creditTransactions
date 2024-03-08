const mongoose = require('mongoose');

const initDB = async () => {
  try {
    const mongodbUrl = 'mongodb+srv://Boluwatife:Oyedemi14@cluster0.seu4p.mongodb.net/creditTransactions?retryWrites=true&w=majority';
    mongoose.connect(mongodbUrl, { useNewUrlParser: true }).then(() => console.log('connected!!!'));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initDB };




