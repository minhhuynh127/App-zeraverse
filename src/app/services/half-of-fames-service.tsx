import axios from "axios";
import exp from "constants";
const api = axios.create({
  baseURL: "https://user-api.zeraverse.io/api/v1", // Replace with your API base URL
});

export const getTopZera = async (filter: string) => {
  try {
    const { data } = await api.get(`/hall-of-fames?sort=zera&filter=${filter}`);
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};
export const getTopGamePlayed = async (filter: string) => {
  try {
    const { data } = await api.get(
      `/hall-of-fames?sort=games_played&filter=${filter}`
    );
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

export const getTopPlaystreak = async (filter: string) => {
  try {
    const { data } = await api.get(
      `/hall-of-fames?sort=playstreak&filter=${filter}`
    );
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

export const getHalfOfFamesBySlug = async (slug: string) => {
  try {
    const { data } = await api.get(`/hall-of-fames/${slug}/game`);
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};
