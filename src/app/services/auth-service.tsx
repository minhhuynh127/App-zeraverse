import axios from "axios";
const api = axios.create({
  baseURL: "https://user-api.stg.zeraverse.io/api/v1", // Replace with your API base URL
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

export const registerEmail = async (formData: any) => {
  try {
    const { data } = await api.post("/auth/register-email", formData);
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

export const createUsername = async (username: string, token: string) => {
  try {
    const { data } = await api.put(
      "/users/username",
      { username },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};
