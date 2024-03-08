/* eslint-disable react/prop-types */

function TransactionHistory({ transactions }) {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };


  return (
    <div className="history">
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Your Transactions</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Sender</th>
            <th style={thStyle}>Recipient</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Fee</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td style={tdStyle}>{transaction.date}</td>
              <td style={tdStyle}>{transaction.sender}</td>
              <td style={tdStyle}>{transaction.recipient}</td>
              <td style={tdStyle}>{transaction.amount}</td>
              <td style={tdStyle}>{transaction.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;



