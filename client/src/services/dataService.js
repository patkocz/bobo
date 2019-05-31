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
    console.log(url);
    let res = await axios.post(url, payload);
    return res;
  },

  async updateFeeding(payload) {
    console.log(url);
    let res = await axios.put(url, payload);
    return res;
  },

  async deleteFeeding(feedingId) {
    console.log(`${url}/${feedingId}`);
    return await axios.delete(`${url}/${feedingId}`);
  }
};
