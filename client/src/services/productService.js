import {get, post, del, put, postFormData} from "../utils/request";



import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;



// Cập nhật sản phẩm
export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/products/${productId}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};




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

export const editProduct = async (id, option) => {
  const result = await put(`products/${id}`, option);
  return result;
};

export const getDetailProduct = async (id) => {
  const result = await get(`products/${id}`);
  return result;
};


