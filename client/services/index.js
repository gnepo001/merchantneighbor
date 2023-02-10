import axios from "axios";

export const signup = (data) => {
  return axios.post("http://localhost:8000/api/signup/", data);
};

export const login = (data) => {
  return axios.post("http://localhost:8000/api/login/", data);
};

export const createPost = async (data, token) => {
  return await axios
    .post("http://localhost:8000/api/createPost/", data, {
      headers: { Authorization: `Token ${token}` },
    })
    .catch((e) => {
      console.log(e);
    });
};
