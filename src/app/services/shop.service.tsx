import axios from "axios";
const api = axios.create({
  baseURL: "https://user-api.stg.zeraverse.io/api/v1", // Replace with your API base URL
});

// Get All Item Shop
export const getAllItemByShop = async (
  params: number,
  token: string | null
) => {
  try {
    const { data } = await api.get(`/shops/categories/${params}/items`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw e;
  }
};

// Get detail the item of the shop on sale
export const getDetailItemShop = async (
  id: number | undefined,
  token: string
) => {
  try {
    const { data } = await api.get(`/shops/items/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (e) {
    throw e;
  }
};

// Buy Avatar
export const buyShopItem = async (body: any, token: string) => {
  try {
    const { data } = await api.post("/shops/buy", body, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw e;
  }
};
