import axios from "axios";

const api = axios.create({
  baseURL: "https://user-api.zeraverse.io/api/v1", // Replace with your API base URL
});
export async function fetchDataGame() {
  try {
    const response = await api.get("/game?page=1&limit=105"); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
}
