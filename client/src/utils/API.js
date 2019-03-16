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
    axios.post("api/login", user).then((res) => {
      if (res.data.success) {
        this.isAuthenticated = true
        cb()
      } else {
        alert(res.data.message)
      }
    })
  },

  logOut() {

  },
};
