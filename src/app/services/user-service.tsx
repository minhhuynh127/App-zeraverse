import axios from "axios";
const api = axios.create({
  baseURL: "https://user-api.stg.zeraverse.io/api/v1", // Replace with your API base URL
});
// GET --------------------------------------------------------

// Get profile user
export const getUser = async (username: string, token: string | null) => {
  // console.log("username", username);
  try {
    const { data } = await api.get(`/users/profile/${username}`, {
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

// Get profile user not token
export const getUserByUsername = async (username: string) => {
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

// Get status Profile
export const getStatsUser = async (username: string) => {
  try {
    const { data } = await api.get(`/users/statistic?username=${username}`);
    if (!data.success) {
      throw new Error(data?.message);
    }

    return data;
  } catch (e) {
    throw e;
  }
};

// Get Reward Profile
export const getUserReward = async (username: string) => {
  try {
    const { data } = await api.get(`/users/reward?username=${username}`);
    if (!data.success) {
      throw new Error(data?.message);
    }

    return data;
  } catch (e) {
    throw e;
  }
};

// Updata Profile
export const updataUser = async (param: any, token: string) => {
  try {
    const { data } = await api.put(`/users`, param, {
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

// Get Achievements user
export const getAchievements = async (
  username: string,
  token: string | null
) => {
  try {
    const { data } = await api.get(`/achievements/${username}`, {
      headers: {
        "Content-Type": "application/json; charset=urf-8",
        Authorization: "Bearer " + token,
      },
    });
    if (!data.success) {
      throw new Error(data?.messege);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Get Achieverments by username
export const getAchievementsByUsername = async (username: string) => {
  try {
    const { data } = await api.get(`/achievements/${username}`);
    if (!data.success) {
      throw new Error(data?.messege);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Post------------------------------------------------------------
export const claimDailyBonus = async (token: string | null) => {
  console.log("token", token);
  try {
    const { data } = await api.post(
      "/users/claim-daily-bonus",
      {},
      {
        headers: {
          "Content-Type": "application/json; charset=urf-8",
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
