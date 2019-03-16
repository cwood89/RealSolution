import axios from "axios";

export default {

  listOTL() {
    return axios.get("/api/subject_otlists");
  },

  findComps(id) {
    return axios.get("/api/comps/" + id);
  },

  signUp(user, cb) {
    return axios.post("api/signup", user)
      .then(() => {
        cb()
      }
      );
  },

  logIn(user, cb) {
    return axios.post("api/login", user).then((res) => {
      if (res.data.success) {
        cb()
      } else {
        alert(res.data.message)
      }
    })
  },

  verify() {
    return axios.get("/api/verify").then((res) => {
      console.log(res.data)
      return res.data.success;
    })
  },

  logOut() {

  },
};
