// eslint-disable-next-line react/prop-types
function Balance({ balance }) {
  const balanceStyle = {
    color: 'blue', // Set the text color
    fontSize: '18px', // Adjust the font size
    textAlign: 'center', // Center-align the content
    margin: '20px 0', // Add some vertical margin
  };

  return (
    <div className="balance" style={balanceStyle}>
      <h1>Your Balance</h1>
      <p>{balance} credits</p>
    </div>
  );
}

export default Balance;
