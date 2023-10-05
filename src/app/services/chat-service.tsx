import axios from "axios";

const api = axios.create({
  baseURL: "https://user-api.stg.zeraverse.io/api/v1", // Replace with your API base URL
});

export const getMessage = async (room_id: number, token: string) => {
  try {
    const { data } = await api.get(`/game/${room_id}/messages`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token ? token : null,
      },
    });
    if (!data.success) {
      throw new Error(data.message);
    }
    return data.data;
  } catch (e) {
    throw e;
  }
};
