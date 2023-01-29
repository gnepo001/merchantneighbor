import axios from "axios";

export const signup = (data) => {
  return axios.post("http://localhost:8000/api/signup/", data);
};

export const login = (data) => {
  return axios.post("http://localhost:8000/api/login/", data);
};
