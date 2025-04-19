import {del, get, postFormData, putFormData} from "../utils/request";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;


export const getProductList = async () => {
  const result = await get("products");
  return result;
};

export const createProduct = async (formData) => {
  const result = await postFormData("products", formData);
  return result;
};

export const deleteProduct = async (id) => {
  const result = await del(`products/${id}`);
  return result;
};

export const updateProduct = async (id, option) => {
  return await putFormData(`products/${id}`, option);
};

export const getDetailProduct = async (id) => {
  const result = await get(`products/${id}`);
  return result;
};


