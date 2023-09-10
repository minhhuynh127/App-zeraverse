import axios from "axios";

const api = axios.create({
  baseURL: "https://user-api.zeraverse.io/api/v1", // Replace with your API base URL
});
export async function fetchDataArticle() {
  try {
    const response = await api.get("/article/newest"); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
}
