import axios from "axios";
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

export default {
  listFavorites(user) {
    return axios.get("api/favorites/" + user);
  },

  listOTL() {
    return axios.get("/api/subject_otlists");
  },

  findComps(id) {
    return axios.get("/api/comps/" + id);
  },

  signUp(user, cb) {
    return axios.post("api/signup", user)
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
        localStorage.setItem("auth", res.data.message.session)
      }
    })
  },

  logOut(cb) {
    return axios.get("api/logout")
      .then((res) => {
        if (res.data.success === false) {
          alert(res.data.message)
          return;
        }
        localStorage.removeItem('auth')
        this.verify().then(() => {
          cb();
        })

      })
  },

  getUser() {
    let user = localStorage.getItem("auth")
    console.log(user)
    return axios.get("api/user/" + user);
  }

};
