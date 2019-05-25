import axios from "axios";

const url = "api/feedings";

export default {
  async getDataAsync() {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getDataPromise() {
    return axios.get(url).then(response => {
      return response;
    });
  },

  async addFeeding(payload) {
    return await axios.post(url, payload);
  }
};
