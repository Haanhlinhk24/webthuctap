// services/userService.js
import axios from "axios";

export const updateUserById = async (id, data) => {
  try {
    const response = await axios.put(`/api/users/${id}`, data);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
