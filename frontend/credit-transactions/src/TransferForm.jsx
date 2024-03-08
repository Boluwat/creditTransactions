// eslint-disable-next-line react/prop-types
function TransferForm({ recipient, amount, setRecipient, setAmount, transferCredits }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    transferCredits();
  };

  const formStyle = {
    display: 'flex', // Set display to flex
    flexDirection: 'column', // Arrange children vertically
    alignItems: 'center', // Center-align children horizontally
    padding: '20px', // Add some padding
    border: '1px solid #ccc', // Add a border
    borderRadius: '8px', // Round the corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
  };

  const inputStyle = {
    width: '100%', // Take up full width
    padding: '10px', // Add padding
    marginBottom: '10px', // Add vertical spacing
    border: '1px solid #ddd', // Add a border
    borderRadius: '4px', // Round the corners
  };

  const buttonStyle = {
    backgroundColor: '#007bff', // Set background color
    color: '#fff', // Set text color
    padding: '10px 20px', // Add padding
    border: 'none', // Remove border
    borderRadius: '4px', // Round the corners
    cursor: 'pointer', // Show pointer on hover
  };

  return (
    <div className="form" style={formStyle}>
      <h1 style={{ marginBottom: '20px' }}>Transfer Credits</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipient Id"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Transfer
        </button>
      </form>
    </div>
  );
}

export default TransferForm;
