import { get, post, del, patch, getCurrent } from "../utils/request";

import axios from "axios";

export const updateUserById = async (id, data) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi cập nhật người dùng:", error);
    return null;
  }
};





export const getCurrentData = async (token) => {
  const result = await getCurrent("user/get-current", token);
  return result;
};

export const login = async (data) => {
  const result = await post("user/login",data);
  return result;
};

// hàm kiểm tra thông tin user đã tồn tại chưa 
export const checkUser = async (key,value)=>{
    const result = await get(`user/check-user?${key}=${value}`);
    return result;
}

export const register = async (data) => {
  const result = await post("user/register/", data);
  return result;
};

export const getuserAllnamephone = async (token) => {
  const result = await getCurrent("user/getall", token);
  return result;
};
