import axios from "axios";

export default {
  async getDataAsync() {
    try {
      const response = await axios.get("http://192.168.0.38:3000/api/feedings");
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getDataPromise() {
    return axios.get("http://192.168.0.38:3000/api/feedings").then(response => {
      return response;
    });
  },

  async addFeeding(payload) {
    return await axios.post("http://192.168.0.38:3000/api/feedings", payload);
  }
};
