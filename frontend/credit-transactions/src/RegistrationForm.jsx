// eslint-disable-next-line react/prop-types
function RegistrationForm({ name, email, password, setName, setEmail, setPassword, registerUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  const formStyle = {
    width: '300px', // Set the form width
    margin: '0 auto', // Center-align the form horizontally
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
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
