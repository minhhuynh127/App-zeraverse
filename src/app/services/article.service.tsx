import axios from "axios";

const api = axios.create({
  baseURL: "https://user-api.stg.zeraverse.io/api/v1", // Replace with your API base URL
});
export async function fetchDataArticle() {
  try {
    const response = await api.get("/article/newest"); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getLimitArticle = async (limit: number, page: number) => {
  try {
    const { data } = await api.get(
      `/article/newest?limit=${limit}&page=${page}`
    );
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Get All Category Article
export const getAllCategoryArticle = async () => {
  try {
    const { data } = await api.get("/article/category");
    if (!data.success) {
      throw new Error(data?.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

// Get Article of Category
export const getArticlesByCategorySlug = async (slug: string) => {
  try {
    const { data } = await api.get(`/article/category/${slug}`);

    if (!data.success) {
      throw new Error(data?.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

export const getArticleDetailBySlug = async (slug: string) => {
  try {
    const { data } = await api.get(`/article/detail/${slug}`);
    if (!data.success) {
      throw new Error(data?.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};
