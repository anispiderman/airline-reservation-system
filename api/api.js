const API_URL = "http://localhost:5001";

export async function getFlights() {
  const response = await fetch(`${API_URL}/flights`);
  const data = await response.json();
  return data;
}