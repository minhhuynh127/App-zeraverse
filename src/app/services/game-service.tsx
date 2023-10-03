import axios from "axios";
import exp from "constants";

const api = axios.create({
  baseURL: "https://user-api.zeraverse.io/api/v1", // Replace with your API base URL
});
export async function fetchDataGame() {
  try {
    const response = await api.get("/game?page=1&limit=104"); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
}

// GET Most-Played from username
export const getMostPlayed = async (
  username: string | null,
  token: string | null
) => {
  try {
    const { data } = await api.get(`/game/most-played?username=${username}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token ? token : null,
      },
    });
    if (!data.success) {
      throw new Error(data?.message);
    }

    return data;
  } catch (e) {
    throw e;
  }
};

export const getGameRecentlyPlayed = async (
  username: string,
  token: string | null
) => {
  try {
    const { data } = await api.get(
      `/game/recently-played?username=${username}`,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + token ? token : null,
        },
      }
    );

    if (!data.success) {
      throw new Error(data?.message);
    }

    return data?.data?.rows;
  } catch (e) {
    throw e;
  }
};

export const getLovedGames = async (username: string, token: string | null) => {
  try {
    const { data } = await api.get(`/game/loved?username=${username}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token ? token : null,
      },
    });

    if (!data.success) {
      throw new Error(data?.message);
    }

    return data?.data;
  } catch (e) {
    throw e;
  }
};
export const getAllPlaylist = async (
  username: string,
  game_slug?: any | null
) => {
  try {
    const { data } = await api.get(
      `/game/playlist?username=${username}`,
      game_slug && { params: { game_slug } }
    );

    if (!data.success) {
      throw new Error(data?.message);
    }
    return data?.data;
  } catch (e) {
    throw e;
  }
};

export const getPurchaseHistory = async (
  username: string,
  token: string | null
) => {
  try {
    const { data } = await api.get(
      `/users/purchase-history?username=${username}`,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + token ? token : null,
        },
      }
    );
    if (!data.success) {
      throw new Error(data?.message);
    }

    return data?.data;
  } catch (e) {
    throw e;
  }
};

export const getAllGamePlaylist = async (id: number, token: string) => {
  try {
    const { data } = await api.get(`/game/playlist/${id}/item`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token ? token : null,
      },
    });

    if (!data.success) {
      throw new Error(data?.message);
    }

    return data?.data;
  } catch (e) {
    throw e;
  }
};

export const deleteItemGamePlaylist = async (id: number, token: string) => {
  try {
    const { data } = await api.delete(`/game/playlist/item/${id}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token,
      },
    });

    if (!data.success) {
      throw new Error(data?.message);
    }

    return data;
  } catch (e) {
    throw e;
  }
};

// Get Game by category slug
export const getGameByCategorySlug = async (slug: string) => {
  try {
    const { data } = await api.get(`/game/category/${slug}`);
    if (!data.success) {
      throw new Error(data?.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

export const getGamePopularWeek = async () => {
  try {
    const { data } = await api.get("/game/popular-game");
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Search
export const Search = async (keySearch: string) => {
  try {
    const { data } = await api.get(`/game/search?keySearch=${keySearch}`);
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Get Game Detail by slug
export const getGameBySlug = async (slug: string) => {
  try {
    const { data } = await api.get(`/game/detail/${slug}`);
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Love Game (POST)
export const loveGamePlayed = async (token: string, game_detail_id: number) => {
  try {
    const { data } = await api.post(
      "/game/love",
      { game_detail_id },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Create Playlist
export const createPlaylist = async (token: string, body: any) => {
  try {
    const { data } = await api.post("/game/playlist", body, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token,
      },
    });
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Delete Playlist
export const deletePlayListById = async (token: string, id: number) => {
  try {
    const { data } = await api.delete(`/game/playlist/${id}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token,
      },
    });
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Report Game
export const reportGame = async (
  token: string,
  params: any | null,
  slug: string
) => {
  console.log("params", params);
  try {
    const { data } = await api.post(`game/${slug}/report`, params, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token,
      },
    });

    if (!data.success) {
      throw new Error(data?.message);
    }

    return data;
  } catch (e) {
    throw e;
  }
};
