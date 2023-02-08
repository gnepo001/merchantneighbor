import axios from "axios";

export const signup = (data) => {
  return axios.post("http://localhost:8000/api/signup/", data);
};

export const login = (data) => {
  return axios.post("http://localhost:8000/api/login/", data);
};

export const createPost = (data, token) => {
  return axios
    .post("http://localhost:8000/api/createPost/", data, {
      headers: { Authorization: `Token ${token}` },
    })
    .catch((e) => {
      console.log(e);
    });
};
