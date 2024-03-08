Define a function to fetch the user balance

Define a function to fetch the user balance
  const fetchBalance = async () => {
    try {
      // Make a GET request to /users/{id}/balance with the user id
      const response = await axios.get(`${baseURL}//users/${userId}/balance`);

      setTransactions(response.data.transactions);

      setMessage("");
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.msg);
    }
  };

  Define a function to fetch the user balance
  const fetchBalance = async () => {
    try {
      // Make a GET request to /users/{id}/balance with the user id
      const response = await axios.get(`${baseURL}//users/${userId}/balance`);

      setTransactions(response.data.transactions);

      setMessage("");
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.msg);
    }
  };

  // Define a function to fetch the user transactions
  const fetchTransactions = async () => {
    try {
      // Make a GET request to /users/{id}/transactions with the user id
      const response = await axios.get(
        `${baseURL}/users/${userId}/transactions`
      );
      // Set the transactions from the response data
      setTransactions(response.data.transactions);
      // Clear the message
      setMessage("");
    } catch (error) {
      // Handle errors
      console.error(error);
      // Set the message from the error response
      setMessage(error.response.data.message);
    }
  };

  
  

  // Define a JSX element to render the registration form
  const registrationForm = (
    <div className="form">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={registerUser}>Register</button>
    </div>
  );

  // Define a JSX element to render the credit transfer form
  const transferForm = (
    <div className="form">
      <h1>Transfer Credits</h1>
      <input
        type="text"
        placeholder="Recipient Id"
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Fee"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />
      <button onClick={transferCredits}>Transfer</button>
    </div>
  );

  // Define a JSX element to render the balance display
  const balanceDisplay = (
    <div className="balance">
      <h1>Your Balance</h1>
      <p>{balance} credits</p>
    </div>
  );

  // Define a JSX element to render the transaction history
  const transactionHistory = (
    <div className="history">
      <h1>Your Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Amount</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.date}</td>
              <td>{transaction.sender}</td>
              <td>{transaction.recipient}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Return the JSX elements to render the app
  return (
    <div className="app">
      {userId ? (
        <>
          {transferForm}
          {balanceDisplay}
          {transactionHistory}
        </>
      ) : (
        registrationForm
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );