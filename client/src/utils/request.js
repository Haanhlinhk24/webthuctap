const API_DOMAIN = "http://localhost:3002/api/";

export const getCurrent = async(path,token)=>{
  const response = await fetch(API_DOMAIN + path, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`, // Thêm token vào header Authorization
    },
  });
    const result = await response.json();
    return result;
}

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  const result = await response.json();
  return result;
};

export const post = async (path, data) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // chuyển sang dạng json
  });
  const result = await response.json();
  return result;
};

export const postFormData = async (path, data) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    body: data, // truyền trực tiếp FormData
  });
  return await response.json();
};

export const putFormData = async (path, data) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PUT",
    body: data, // truyền trực tiếp FormData
  });
  return await response.json();
};


export const del = async (path)=>{
    const response = await fetch(API_DOMAIN + path, {
      method: "DELETE",
    });
  const result = await response.json();
  return result;
}
export const patch = async(path, option)=>{
     const response = await fetch(API_DOMAIN + path, {
       method: "PATCH",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
       body: JSON.stringify(option), // chuyển sang dạng json
     });
     const result = await response.json();
     return result;
}

export const put = async(path, option)=>{
  const response = await fetch(API_DOMAIN + path, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option), // chuyển sang dạng json
  });
  const result = await response.json();
  return result;
}