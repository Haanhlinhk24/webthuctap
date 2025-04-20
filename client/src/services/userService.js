import { get, post, del, patch, getCurrent } from "../utils/request";

import axios from "axios";

export const updateUserById = async (id, data) => {
  try {
    //                                                  http://localhost:3002              /api/user/register
    //Cannot PUT                                       /undefined                          /api/users/68050a9829d4711fe67340bd
    const res = await axios.put(`http://localhost:3002/api/user/update-user/${id}`, data);
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

// Thêm vào file userService.js
export const deleteUserById = async (userId) => {
  try {
    // Giả sử API endpoint của bạn là '/api/users/:id'
    // Thay đổi URL phù hợp với backend của bạn
    const response = await fetch(`http://localhost:3002/api/user/delete-user/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Thêm token nếu cần thiết
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, message: "Có lỗi xảy ra khi xóa người dùng." };
  }
};
// Thêm vào file userService.js
export const createUser = async (userData) => {
  try {
    const response = await fetch(`http://localhost:3002/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Có lỗi xảy ra khi tạo người dùng." };
  }
};