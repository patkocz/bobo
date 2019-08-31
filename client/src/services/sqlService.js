import axios from 'axios';

const baseUrl = "https://boboapp-sql.herokuapp.com/api";
// "https://boboapp-sql.herokuapp.com/api";

export default {
    getWeekFeedDates() {
        return axios
                .get(`${baseUrl}/feeddates/week`)
                .then(response => {
                    return response.data
                })
                .catch(err => {
                    console.log(err);
                });
    },

    addFeedDate() {
        return axios
                .post(`${baseUrl}/feeddates`)
                .then(response => {
                    return response.data;
                })
                .catch(err => {
                    console.log(err);
                });
    },

    addFeeding(_payload) {
        return axios
                .post(`${baseUrl}/feedings`, _payload)
                .then(response => {
                    return response.data;
                })
                .catch(err => {
                    console.log(err);
                });
    },

    updateFeeding(_id, _payload) {
        return axios
                .put(`${baseUrl}/feedings/${_id}`, _payload)
                .then(response => {
                    return response.data;
                })
                .catch(err => {
                    console.log(err);
                });
    },

    deleteFeeding(_id) {
        return axios
                .delete(`${baseUrl}/feedings/${_id}`)
                .then(response => {
                    return response.data;
                })
                .catch(err => {
                    console.log(err);
                });
    }
}