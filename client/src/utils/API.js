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
        if (res.data.success === false) {
          alert(res.data.message)
          return;
        }
        this.verify().then(() => {
          cb();
        })

      })
  },

  logIn(user, cb) {
    axios.post("api/login", user)
      .then((res) => {
        if (res.data.success === false) {
          alert(res.data.message)
          return;
        }
        this.verify().then(() => {
          cb();
        })

      })
  },

  verify() {
    return axios.get("/api/verify").then((res) => {
      console.log("Verification: ============")
      console.log(res.data)
      console.log("==========================")
      if (res.data.success === false) {
        return;
      } else {
        localStorage.setItem("auth", res.data.message)
      }
    })
  }

  // logOut() {
  // localStorage.removeItem('auth')
  // },
};
