import axios from "axios";

class PostDataService {
  signup(data) {
    return axios.post("http://localhost:8000/api/signup/", data);
  }
}
