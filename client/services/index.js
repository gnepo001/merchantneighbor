import axios from "axios";

// for apis with return important to place async and await here

export const signup = (data) => {
  return axios.post("http://localhost:8000/api/signup/", data);
};

export const login = async (data) => {
  return await axios.post("http://localhost:8000/api/login/", data);
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

// export const logout = async () => {
//   console.log("preesed");
//   localStorage.removeItem("token");
//   await axios.post("http://localhost:8000/api/logout/");
// };
