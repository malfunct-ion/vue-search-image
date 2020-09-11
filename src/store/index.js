import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  actions: {
    GetDataImages({ commit }, payload = "") {
      let url = `https://pixabay.com/api/?key=18264963-bfba7b745dbe05fe89855e55f`;

      if (payload !== "") {
        const query = payload.replace(" ", "+");
        url = `https://pixabay.com/api/?key=18264963-bfba7b745dbe05fe89855e55f&q=${query}&image_type=photo`;
      }
      Axios.get(url)
        .then((response) => {
          commit("SetImages", response.data);
        })
        .catch((err) => {
          return err;
        });
    },
  },
  mutations: {
    SetImages(state, payload) {
      state.images = payload;
    },
  },
});
