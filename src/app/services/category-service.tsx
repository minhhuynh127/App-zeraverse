import axios from "axios";

const api = axios.create({
  baseURL: "https://user-api.zeraverse.io/api/v1", // Replace with your API base URL
});
export async function fetchDataCategories() {
  try {
    const response = await api.get("/game/categories?page=1&limit=40"); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
}
