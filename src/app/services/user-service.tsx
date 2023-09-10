import axios from "axios";
const api = axios.create({
  baseURL: "https://user-api.zeraverse.io/api/v1", // Replace with your API base URL
});
// GET --------------------------------------------------------

//Get profile user
export const getUser = async (username: string | null) => {
  // console.log("username", username);
  try {
    const { data } = await api.get(`/users/profile/${username}`);
    if (!data.success) {
      throw new Error(data?.message);
    }

    return data;
  } catch (e) {
    throw e;
  }
};

// GET Most-Played from username
export const getMostPlayed = async (username: string | null) => {
  try {
    const { data } = await api.get(`/game/most-played?username=${username}`);
    if (!data.success) {
      throw new Error(data?.message);
    }

    return data;
  } catch (e) {
    throw e;
  }
};
