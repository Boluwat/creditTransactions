// Import modules
import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import Balance from "./Balance";
import TransferForm from "./TransferForm";
import TransactionHistory from "./TransactionHistory";
import {transferCredits, registerUser, fetchBalance, fetchTransactions} from './handler'
import "./App.css";

// Define App component
function App() {
  // Define state variables

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(0);
  // const [fee, setFee] = useState(0);
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); 

// Define a useEffect hook to fetch the user balance and transactions when the user id changes
  useEffect(() => {
    if (userId) {
      fetchBalance(userId);
      fetchTransactions(userId);
    }
  }, [userId]);

  // Define a function to register a user
  const handleRegistration = async () => {
    try {
      // Make a POST request to /users with name, email, and password
      const response = await registerUser(name, email, password)
      // Set the user id from the response data
      setUserId(response.data._id);
      // Clear the message
      setMessage("");
      setIsRegistered(true);
    } catch (error) {
      // Handle errors
      console.error(error);
      // Set the message from the error response
      setMessage(error.response.data.message);
    }
  };

  // Define a function to transfer credits
  const handleTransfer = async () => {
    try {
      // Make a POST request to /transactions with senderId, recipientId, amount, and fee
      const response = await transferCredits(userId, recipient, amount)
      // Set the message from the response data
      setMessage(
        `Successfully transferred ${response.data.amount} credits to ${response.data.recipient}`
      );
      // Clear the recipient id, amount, and fee
      setRecipient("");
      setAmount(0);
      // setFee(0);
    } catch (error) {
      // Handle errors
      console.error(error);
      // Set the message from the error response
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="app">
      {isRegistered ? (
        <>
          <TransferForm
            recipient={recipient}
            amount={amount}
            setRecipient={setRecipient}
            setAmount={setAmount}
            // setFee={setFee}
            transferCredits={handleTransfer}
          />
          <Balance balance={balance} />
          <TransactionHistory transactions={transactions} />
        </>
      ) : (
        <RegistrationForm
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          registerUser={handleRegistration}
        />
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
