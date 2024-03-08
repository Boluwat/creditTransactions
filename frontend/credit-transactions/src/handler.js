import axios from "axios";

const baseURL = "http://localhost:3000";

export async function registerUser(name, email, password) {
  // Registration API call
  try {
    const response = await axios.post(`${baseURL}/register`, {
      name,
      email,
      password,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function transferCredits(userId, recipient, amount) {
  // Transfer credits API call
  const response = await axios.post(`${baseURL}/transactions`, {
    sender: userId,
    recipient,
    amount,
  });

  console.log(response.data);
  return response;
}

export async function fetchBalance(userId) {
  // Fetch balance API call
  const response = await axios.get(`${baseURL}/users/${userId}/balance`);
  return response;
}

export async function fetchTransactions(userId) {
  // Fetch transactions API call
  const response = await axios.get(`${baseURL}/users/${userId}/transactions`);
  return response;
}
