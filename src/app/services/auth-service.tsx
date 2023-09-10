import axios from "axios";
const api = axios.create({
  baseURL: "https://user-api.zeraverse.io/api/v1", // Replace with your API base URL
});

// POST --------------------------------------------------------

export const login = async (formData: any) => {
  try {
    const { data }: any = await api.post("/auth/login-email", formData);
    return data;
  } catch (e) {
    throw e;
  }
};
