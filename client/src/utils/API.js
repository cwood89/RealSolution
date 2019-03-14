import axios from "axios";

export default {

  listOTL() {
    return axios.get("/api/subject_otlists");
  },

  findComps(id) {
    return axios.get("/api/comps/" + id);
  },

  signUp(user) {
    return axios.post("api/signup", user);
  },
  LogIn(user) {
    return axios.post("api/login", user);
  }
};

